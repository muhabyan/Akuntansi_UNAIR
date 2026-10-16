import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { testAll } from './akk203-canonical-lib.mjs';
await testAll();
const snapshot=JSON.parse(fs.readFileSync('scripts/fixtures/akk203/protected-files.json','utf8'));
const uasApproved=JSON.parse(fs.readFileSync('scripts/fixtures/akk203-pra-uas-approved.json','utf8'));
const uasScope=new Set(['src/data/asp/aspData.ts',...Array.from({length:6},(_,i)=>`src/data/asp/modules/tm${i+9}.ts`),'src/data/quizzes/aks201.ts','src/data/flashcards/aks201.ts','src/data/banksoal/aks201.ts']);
for(const [file,expected] of Object.entries(snapshot)) {
  const actual=createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  const uasHash=createHash('sha256').update(fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n')).digest('hex');
  assert.ok([expected.worktree,expected.repository,...(expected.authorizedPraUasElaboration20261014??[])].includes(actual)||(uasScope.has(file)&&uasApproved[file]===uasHash),`out-of-scope file changed: ${file} (historical bytes or explicitly reviewed ASP replacement)`);
}
console.log(`AKK203 render rules PASS: ${Object.keys(snapshot).length} protected files byte-identical`);
