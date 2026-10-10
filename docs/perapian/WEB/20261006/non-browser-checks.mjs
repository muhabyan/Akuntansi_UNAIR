import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
const dir = 'docs/perapian/WEB/20261006/logs';
fs.mkdirSync(dir, { recursive:true });
// Independent source/DOM checks while the browser security setting prevents website capture.
// This is NOT npm run check, and does not replace or disable any canonical/E2E task.
const tasks = ['test-table-titles','test-reading-lifecycle',
  ...['mnu307','mnu108','akk203'].flatMap(c=>Array.from({length:7},(_,i)=>`test-${c}-tm0${i+1}-canonical`)),
  'test-mnu307-render-rules','test-akk203-renderer','test-akk203-render-rules','test-mnu108-render-rules',
  'test-mnu108-practice','test-sia-canonical','test-aks301-alignment','test-akk202-canonical','test-akk202-alignment',
  'test-pjk301-canonical','test-pjk301-alignment','test-aka201-layered','test-aka201-practice','test-aka201-reading-nav',
  'test-reading-frame','test-reading-outline','test-render-s1'];
const results = [];
for (const name of tasks) {
  const r = spawnSync(process.execPath, [`scripts/${name}.mjs`], {encoding:'utf8',timeout:120000,windowsHide:true});
  fs.writeFileSync(`${dir}/${name}.log`, `${r.stdout||''}${r.stderr||''}${r.error?String(r.error):''}`);
  results.push({name,exitCode:r.status,error:r.error?.message});
  fs.writeFileSync(`${dir}/non-browser-checks.json`,JSON.stringify(results,null,2));
  console.log(`${r.status===0?'PASS':'FAIL'} ${name}`);
}
process.exitCode=results.some(r=>r.exitCode!==0)?1:0;
