import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { testAll } from './akk203-canonical-lib.mjs';
await testAll();
const snapshot=JSON.parse(fs.readFileSync('scripts/fixtures/akk203/protected-files.json','utf8'));
for(const [file,expected] of Object.entries(snapshot)) {
  const actual=createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  assert.ok([expected.worktree,expected.repository].includes(actual),`out-of-scope file changed: ${file} (Git checkout EOL variants are recorded explicitly)`);
}
console.log(`AKK203 render rules PASS: ${Object.keys(snapshot).length} protected files byte-identical`);
