const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const inputs = require('./deepmerge-inputs.json');
const root = path.resolve(__dirname, '..');
const lock = require(path.join(root, 'package-lock.json'));
const digest = text => crypto.createHash('sha256').update(text).digest('hex');

function patchedSource(source) {
  let count = 0;
  const result = source.replace(/^(\s*)destination\[key\] = (.+)$/gm, (line, indent, expression) => {
    count++;
    const value = expression.replace(/;$/, '');
    return indent + 'Object.defineProperty(destination, key, { value: ' + value + ', enumerable: true, configurable: true, writable: true });';
  });
  if (count !== 3) throw new Error('Unexpected deepmerge object-copy implementation');
  return result;
}

function patchDeepmerge() {
  const writes = [];
  const libraries = Object.entries(lock.packages).filter(([name]) => name.endsWith('/deepmerge'));
  if (!libraries.length) throw new Error('Expected deepmerge dependency is missing from the reviewed lock');
  for (const [directory, metadata] of libraries) {
    const files = inputs[metadata.version];
    if (!files) throw new Error('Unreviewed deepmerge version: ' + metadata.version);
    for (const [name, originalHash] of Object.entries(files)) {
      const file = path.join(root, directory, name);
      const source = fs.readFileSync(file, 'utf8');
      const original = source.replace(/^([\t ]*)Object\.defineProperty\(destination, key, \{ value: (.+), enumerable: true, configurable: true, writable: true \}\);$/gm, (line, indent, value) => indent + 'destination[key] = ' + value + (name === 'index.js' ? '' : ';'));
      if (digest(original) !== originalHash) throw new Error('Deepmerge patch input mismatch: ' + file);
      const patched = patchedSource(original);
      writes.push({ file, source, patched });
    }
  }
  for (const { file, source, patched } of writes) {
    if (source !== patched) fs.writeFileSync(file, patched);
  }
}

module.exports = { patchDeepmerge, patchedSource };
if (require.main === module) patchDeepmerge();
