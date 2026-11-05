const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const { patchDeepmerge } = require('../scripts/patch-deepmerge.cjs');

function verifyMerge(merge) {
  const normalPrototype = Object.getPrototypeOf(merge({}, {}));
  const source = Object.create(null);
  Object.defineProperty(source, '__proto__', { value: { inheritedFlag: 'unexpected' }, enumerable: true });
  for (const [target, input] of [[Object.create(null), source], [source, {}], [{ __proto__: null }, source]]) {
    const result = merge(target, input);
    assert.equal(Object.getPrototypeOf(result), normalPrototype);
    assert.equal(Object.getOwnPropertyDescriptor(result, 'inheritedFlag'), undefined);
    assert.equal(result.inheritedFlag, undefined);
  }
  const merged = merge({ nested: { first: 1 }, items: [1] }, { nested: { second: 2 }, items: [2] });
  assert.equal(JSON.stringify(merged), '{"nested":{"first":1,"second":2},"items":[1,2]}');
  const descriptor = Object.getOwnPropertyDescriptor(merged, 'nested');
  assert.equal(descriptor.enumerable && descriptor.writable && descriptor.configurable, true);
  const symbol = Symbol('setting');
  assert.equal(merge({}, { [symbol]: 3 })[symbol], 3);
}

test('both installed deepmerge versions preserve safe copies and merge APIs', () => {
  const lock = require('../package-lock.json');
  for (const [directory, metadata] of Object.entries(lock.packages)) {
    if (!directory.endsWith('/deepmerge')) continue;
    const file = metadata.version === '3.3.0' ? 'dist/umd.js' : 'dist/cjs.js';
    const module = { exports: {} };
    vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '..', directory, file), 'utf8'), { module, exports: module.exports });
    verifyMerge(module.exports);
  }
});

test('the exact-source backport is idempotent', () => {
  patchDeepmerge();
  patchDeepmerge();
});
