# frozen_string_literal: true

require 'minitest/autorun'
require 'digest'
require 'json'
require 'pathname'
require 'tmpdir'
require 'cocoapods-core'
require 'cocoapods-core/specification/set'

class CocoaPodsCoreCompatibilityTest < Minitest::Test
  def specification
    Pod::Specification.new do |spec|
      spec.name = 'CoreCompat'
      spec.version = '1.0'
      spec.summary = "  Summary\n"
      spec.description = "  First\n  Second\n"
      spec.license = { type: 'MIT', text: "  First\n  Second\n" }
      spec.prepare_command = "  echo prepare\n"
      spec.source_files = 'Sources/**/*.{h,m}'
      spec.screenshot = 'https://example.test/demo.png'
      spec.authors = ['Ada', 'Grace', 'Linus']
      spec.prefix_header_contents = "  #define ONE 1\n  #define TWO 2\n"
    end
  end

  def test_exact_original_package_identity_and_unchanged_published_files
    assert_equal '1.17.0', Gem.loaded_specs.fetch('cocoapods-core').version.to_s
    assert_equal '8.0.5.2', Gem.loaded_specs.fetch('activesupport').version.to_s
    root = File.expand_path('..', __dir__)
    provenance = JSON.parse(File.read(File.join(root, '.build/cocoapods-core-provenance.json')))
    assert_equal 'a9e3d0dd36ab1b48935236d77a15cad9171217f13c6010c8e2ae3c0f455daf5b', provenance.fetch('package').fetch('sha256')
    files = provenance.fetch('unchanged_published_files')
    assert_equal 44, files.length
    assert files.key?('LICENSE')
    files.each do |name, sha256|
      assert_equal sha256, Digest::SHA256.file(File.join(root, '.build/cocoapods-core-1.17.0', name)).hexdigest, name
    end
  end

  def test_source_metadata_accepts_symbol_and_string_keys
    metadata = Pod::Source::Metadata.new(min: '1.0', max: '2.0', prefix_lengths: [1, 1, 1])
    assert_equal Pod::Version.new('1.0'), metadata.minimum_cocoapods_version
    assert_instance_of ActiveSupport::HashWithIndifferentAccess, metadata.to_hash
    assert_equal '1.0', metadata.to_hash[:min]
    assert_equal '1.0', metadata.to_hash['min']
    assert_equal %w[2 2 2 DfPodTest], metadata.path_fragment('DfPodTest')
  end

  def test_real_podspec_normalization_singular_writer_and_json_round_trip
    spec = specification
    assert_equal 'Summary', spec.summary
    assert_equal "First\nSecond", spec.description
    assert_equal "First\nSecond\n", spec.license[:text]
    assert_equal 'echo prepare', spec.prepare_command
    assert_equal "#define ONE 1\n#define TWO 2", spec.consumer(:ios).prefix_header_contents
    assert_equal ['Sources/**/*.{h,m}'], spec.consumer(:ios).source_files
    assert_equal ['https://example.test/demo.png'], spec.screenshots
    assert_equal spec.to_hash, Pod::Specification.from_json(spec.to_json).to_hash
  end

  def test_real_presenter_and_dependency_errors_use_sentence_formatting
    spec = specification
    presenter = Pod::Specification::Set::Presenter.new(Pod::Specification::Set::External.new(spec))
    assert_equal 'Ada, Grace, and Linus', presenter.authors
    error = assert_raises(Pod::Informative) do
      spec.dependency('Other', configurations: %w[Beta Canary])
    end
    assert_includes error.message, 'Found `beta` and `canary`.'
  end

  def test_real_podfile_plugin_options_and_subspec_selection
    Dir.mktmpdir('core-compat') do |directory|
      File.write(File.join(directory, 'CoreCompat.podspec'), <<~SPEC)
        Pod::Spec.new do |spec|
          spec.name = 'CoreCompat'
          spec.version = '1.0'
          spec.dependency 'Common'
          spec.subspec('Part') { |part| part.dependency 'PartOnly' }
          spec.subspec('Other') { |part| part.dependency 'OtherOnly' }
        end
      SPEC
      podfile = Pod::Podfile.from_ruby(Pathname.new(directory).join('Podfile'), +<<~PODFILE)
        platform :ios, '15.1'
        plugin 'compat-plugin', nested: { enabled: true, list: [{ key: 'value' }] }
        plugin 'compat-plugin', additional: true
        target('Whole') { podspec path: 'CoreCompat.podspec' }
        target('Empty') { podspec path: 'CoreCompat.podspec', subspecs: [] }
        target('Part') { podspec path: 'CoreCompat.podspec', subspec: 'Part' }
      PODFILE
      assert_equal({ 'compat-plugin' => { 'nested' => { 'enabled' => true, 'list' => [{ 'key' => 'value' }] }, 'additional' => true } }, podfile.plugins)
      %w[Whole Empty].each do |name|
        assert_equal %w[Common OtherOnly PartOnly], podfile.target_definitions.fetch(name).dependencies.map(&:name).sort
      end
      assert_equal %w[Common PartOnly], podfile.target_definitions.fetch('Part').dependencies.map(&:name).sort
    end
  end
end
