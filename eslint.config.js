const js = require('@eslint/js');
const babelParser = require('@babel/eslint-parser');
const globals = require('globals');
const react = require('eslint-plugin-react');
const prettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    languageOptions: {
      parser: babelParser,
      parserOptions: { requireConfigFile: false, babelOptions: { babelrc: false, configFile: false, parserOpts: { plugins: ['jsx', 'flow'] } } },
      globals: { ...globals.browser, ...globals.node, __DEV__: 'readonly' },
    },
    plugins: { react },
    rules: {
      // Preserve the existing project's choice not to enforce unused imports/props.
      'no-unused-vars': 'off',
      'react/jsx-no-undef': 'error',
    },
  },
  { files: ['src/**/__tests__/**/*.js'], languageOptions: { globals: globals.jest } },
  prettier,
];
