const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');

test('actual Plop generators produce working component tests and Redux/stateless modules', () => {
  fs.mkdirSync(path.join(root, '.build'), { recursive: true });
  const fixture = fs.mkdtempSync(path.join(root, '.build', 'generator-smoke-'));
  try {
    fs.cpSync(path.join(root, 'generators'), path.join(fixture, 'generators'), { recursive: true });
    fs.copyFileSync(path.join(root, 'plopfile.js'), path.join(fixture, 'plopfile.js'));
    fs.copyFileSync(path.join(root, 'babel.config.js'), path.join(fixture, 'babel.config.js'));
    fs.symlinkSync(path.join(root, 'node_modules'), path.join(fixture, 'node_modules'), 'junction');
    fs.mkdirSync(path.join(fixture, 'src/components'), { recursive: true });
    fs.mkdirSync(path.join(fixture, 'src/redux'), { recursive: true });
    fs.writeFileSync(path.join(fixture, 'src/components/index.js'), '// ## Generator Components Imports\nexport {\n  // ## Generator Components Exports\n};\n');
    fs.writeFileSync(path.join(fixture, 'src/redux/reducer.js'), "import { combineReducers } from 'redux';\n// ## Generator Reducer Imports\nexport default combineReducers({\n  // ## Generator Reducers\n});\n");
    const run = (file, args) => execFileSync(process.execPath, [path.join(root, 'node_modules', file), ...args], { cwd: fixture, encoding: 'utf8', timeout: 60000 });
    run('plop/bin/plop.js', ['--plopfile', path.join(fixture, 'plopfile.js'), 'component', 'MaintenancePanel']);
    run('plop/bin/plop.js', ['--plopfile', path.join(fixture, 'plopfile.js'), 'module', 'GeneratedFeature', 'statefull']);
    run('plop/bin/plop.js', ['--plopfile', path.join(fixture, 'plopfile.js'), 'module', 'GeneratedSimple', 'stateless']);
    assert.ok(fs.existsSync(path.join(fixture, 'src/modules/generatedFeature/GeneratedFeatureState.js')));
    assert.equal(fs.existsSync(path.join(fixture, 'src/modules/generatedSimple/GeneratedSimpleState.js')), false);
    fs.writeFileSync(path.join(fixture, 'jest.config.js'), `const base = require(${JSON.stringify(path.join(root, 'jest.config.js'))});\nmodule.exports = {...base, rootDir: __dirname, setupFilesAfterEnv: [${JSON.stringify(path.join(root, 'jest-setup.js'))}]};\n`);
    fs.writeFileSync(path.join(fixture, 'src/components/__tests__/GeneratedModules.spec.js'), `
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../redux/reducer';
import { actionCreator } from '../../modules/generatedFeature/GeneratedFeatureState';
import Stateful from '../../modules/generatedFeature/GeneratedFeatureViewContainer';
import Stateless from '../../modules/generatedSimple/GeneratedSimpleViewContainer';
import { MaintenancePanel } from '../index';

test('generated exports, reducer action and connected module views work', () => {
  const store = createStore(reducer);
  store.dispatch(actionCreator());
  expect(store.getState().generatedFeature).toEqual({});
  const view = render(<Provider store={store}><Stateful /><Stateless /><MaintenancePanel /></Provider>);
  expect(view.getByText('GeneratedFeature View')).toBeTruthy();
  expect(view.getByText('GeneratedSimple View')).toBeTruthy();
});
`);
    run('jest/bin/jest.js', ['--config', path.join(fixture, 'jest.config.js'), '--runInBand']);
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
});
