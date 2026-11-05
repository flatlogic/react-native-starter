# frozen_string_literal: true

require 'digest'
require 'fileutils'
require 'json'
require 'net/http'
require 'rubygems/package'

root = File.expand_path('..', __dir__)
input = JSON.parse(File.read(File.join(__dir__, 'cocoapods-core-input.json')))
build = File.join(root, '.build')
FileUtils.mkdir_p(build)
archive = File.join(build, 'cocoapods-core-1.17.0.gem')

if !File.exist?(archive)
  response = Net::HTTP.get_response(URI(input.fetch('url')))
  if !response.is_a?(Net::HTTPSuccess)
    fail "Official CocoaPods Core download failed: HTTP #{response.code}"
  end
  File.binwrite(archive, response.body)
end

if Digest::SHA256.file(archive).hexdigest != input.fetch('sha256')
  fail 'CocoaPods Core archive differs from the exact official 1.17.0 publisher SHA-256'
end

package = Gem::Package.new(archive)
spec = package.spec
if spec.name != input.fetch('name') || spec.version.to_s != input.fetch('version')
  fail 'Unexpected CocoaPods Core package identity'
end
index = spec.dependencies.index { |dependency| dependency.name == 'activesupport' && dependency.type == :runtime }
if index.nil? || spec.dependencies.fetch(index).requirement != Gem::Requirement.new('>= 5.0', '< 8')
  fail 'The official CocoaPods Core ActiveSupport constraint changed; review compatibility again'
end

original_spec = spec.to_ruby
# All published Ruby source and the MIT license are extracted without modification.
target = File.join(build, 'cocoapods-core-1.17.0')
FileUtils.rm_rf(target)
package.extract_files(target)
File.write(File.join(build, 'cocoapods-core-upstream.gemspec'), original_spec)
# Ruby 3.3 supports the patched ActiveSupport 8.0.5.2; only its metadata bound changes.
spec.dependencies[index] = Gem::Dependency.new('activesupport', '>= 5.0', '< 9')
File.write(File.join(target, 'cocoapods-core.gemspec'), spec.to_ruby)

files = package.contents.to_h do |name|
  [name, Digest::SHA256.file(File.join(target, name)).hexdigest]
end
File.write(File.join(build, 'cocoapods-core-provenance.json'), JSON.pretty_generate({
  package: input,
  changed_runtime_dependencies: { activesupport: { from: '>= 5.0, < 8', to: '>= 5.0, < 9' } },
  unchanged_published_files: files,
}) + "\n")
puts "Prepared #{spec.name} #{spec.version}: #{files.length} unchanged official files; only ActiveSupport upper bound <8 to <9"
