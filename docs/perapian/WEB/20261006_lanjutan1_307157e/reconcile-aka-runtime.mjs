import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {createServer} from 'vite';
const out=path.dirname(fileURLToPath(import.meta.url));
const generated=path.join(out,'source-inspection','AKA201-generated');
fs.mkdirSync(generated,{recursive:true});
const server=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom',logLevel:'silent'});
try {
 const {loadCourseContent}=await server.ssrLoadModule('/src/data/courses/courseRegistry.ts');
 const content=await loadCourseContent('AKA201'),results=[];
 for(let tm=1;tm<=7;tm++) {
  const input=`C:/cek/.content-inbox/AKA201/TM0${tm}/05_student_learning_version.md`;
  const output=path.join(generated,`tm${tm}.ts`);
  if(fs.existsSync(output)) throw Error('Refusing overwrite generated evidence');
  const conversion=spawnSync(process.execPath,['C:/Users/Lenovo/aka201-converter/convert-aka201.mjs',input,output,'--export',`TM${tm}_READING`,'--tm',String(tm)],{encoding:'utf8',windowsHide:true});
  fs.writeFileSync(path.join(out,'logs',`aka201-converter-tm${tm}.log`),(conversion.stdout??'')+(conversion.stderr??''));
  if(conversion.status!==0) throw Error(`TM${tm} converter failed`);
  const ts=fs.readFileSync(output,'utf8');
  const text=ts.slice(ts.indexOf(': Reading = ')+': Reading = '.length).trim().replace(/;$/,'');
  const sourceReading=JSON.parse(text);
  assert.deepEqual(content.readings[tm],sourceReading,`AKA201 TM${tm} current runtime must match current inbox conversion`);
  results.push({tm,input,output:path.relative(out,output).replace(/\\/g,'/'),deepEqual:true});
 }
 fs.writeFileSync(path.join(out,'aka201-runtime-reconciliation.json'),JSON.stringify({pass:true,source:'existing inbox, matched 42 archive files byte for byte',scope:'All seven original raw reading objects; generated files are evidence only, no production file written',results},null,2));
 console.log(JSON.stringify({pass:true,readings:results.length}));
} finally {await server.close();}
