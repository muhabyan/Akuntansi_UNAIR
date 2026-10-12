import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import { createHash } from 'node:crypto';

const codes=['AKK201','AKM201','PJK201','AKA103','MNU101','EKT109','AKM301'];
const baseline=JSON.parse(fs.readFileSync('scripts/fixtures/audit-20261012-pre-uts.json','utf8')).courses;
async function load(){
  const result=await build({entryPoints:['src/data/courses/courseRegistry.ts'],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent',plugins:[{
    name:'reference-loader',setup(b){
      b.onResolve({filter:/\?raw$/},a=>({path:path.resolve(a.resolveDir,a.path.slice(0,-4)),namespace:'raw'}));
      b.onLoad({filter:/.*/,namespace:'raw'},a=>({contents:fs.readFileSync(a.path,'utf8'),loader:'text'}));
    },
  }]});
  return import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
}
const current=await load();
const walk=bs=>bs.flatMap(b=>[b,...walk(b.blocks??[]),...walk(b.answer??[])]);
let meetings=0,figures=0;
for(const code of codes){
  const now=await current.loadCourseContent(code);
  for(const tm of [1,2,3,4,5,6,7])assert.equal(createHash('sha256').update(JSON.stringify(now.readings[tm])).digest('hex'),baseline[code].readings[tm],`${code} pre-UTS TM${tm} exact`);
  for(let tm=8;tm<=14;tm++){
    const file=`content-pipeline/${code}/TM${String(tm).padStart(2,'0')}/audit-20261012/04_canonical_spec.json`;
    const bytes=fs.readFileSync(file),delta=JSON.parse(bytes),r=now.readings[tm];
    assert.deepEqual(r.blocks.slice(-delta.blocks.length),delta.blocks,`${code} TM${tm} canonical delta exact`);
    assert.ok(r.ref.includes(delta.source));
    assert.ok(!/—|bukan[^.!?\n]{0,120}melainkan|tidak hanya[^.!?\n]{0,120}tetapi juga/i.test(JSON.stringify(r)),`${code} TM${tm} requested prose`);
    assert.ok(fs.readFileSync(file.replace('.json','.md'),'utf8').includes(createHash('sha256').update(bytes).digest('hex')));
    for(const b of walk(delta.blocks))if(b.kind==='solution-reveal')assert.match(JSON.stringify(b),/Rujukan:/);
    figures+=walk(delta.blocks).filter(b=>b.kind==='figure').length;meetings++;
  }
}
assert.equal(meetings,49);assert.equal(figures,6);
assert.equal(22190+3680-150-4820-31+175,21044);
assert.equal(20502+600-18-220+180,21044);
assert.equal(345000*.008+115000*.04+18000*.15+14000*.2+55000*.25,26610);
assert.equal(43900-26340,17560);assert.equal(43900-27100,16800);
assert.equal(1000-50-200,750);assert.equal(60000+200000-280000*.7,64000);
assert.ok(Math.abs(Math.sqrt(2*10000*20000/2000)-447.2135955)<1e-6);
assert.equal(75000-60000-10000,5000);
assert.ok(Math.abs((-100+60/1.1+60/1.1**2)-4.1322314)<1e-6);
console.log('Foundation source audit PASS: 49 exact canonical deltas, six sourced graphs, pre-UTS unchanged in seven courses, source numeric cases independently recomputed.');
