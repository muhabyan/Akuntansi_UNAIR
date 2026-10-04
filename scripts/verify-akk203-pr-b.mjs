import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const folder=path.resolve('qa-akk203.local');fs.mkdirSync(folder,{recursive:true});
for(const tm of [4,5]) {
  const log=fs.openSync(path.join(folder,`check-tm0${tm}.log`),'w');
  const run=spawnSync(process.platform==='win32'?'C:\\Windows\\System32\\cmd.exe':'npm',process.platform==='win32'?['/d','/s','/c','npm.cmd run check']:['run','check'],{cwd:process.cwd(),env:{...process.env,E2E_CDP_PORT:'9333'},stdio:['ignore',log,log],windowsHide:true});fs.closeSync(log);
  if(run.status!==0){console.error(`TM0${tm} check failed; see ${folder}/check-tm0${tm}.log`);process.exit(run.status??1);}
  console.log(`TM0${tm} npm run check PASS (E2E_CDP_PORT=9333)`);
}
const browser=spawnSync(process.execPath,['scripts/test-akk203-browser.mjs'],{cwd:process.cwd(),stdio:'inherit',windowsHide:true});process.exitCode=browser.status??1;
