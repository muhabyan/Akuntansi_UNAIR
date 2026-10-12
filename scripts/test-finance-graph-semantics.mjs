import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';

const bundle=await build({entryPoints:['src/data/mankeu/mankeuData.ts'],bundle:true,write:false,platform:'node',format:'esm',logLevel:'silent'});
const {MNK201_READINGS:readings}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const walk=bs=>bs.flatMap(b=>[b,...walk(b.blocks??[]),...walk(b.answer??[])]);
const figures=tm=>walk(readings[tm].blocks).filter(b=>b.kind==='figure');
const specs=tm=>[...fs.readFileSync(`content-pipeline/MNK102/TM${String(tm).padStart(2,'0')}/05_student_learning_version.md`,'utf8').matchAll(/```visual\r?\n([\s\S]*?)```/g)].map(m=>Object.fromEntries(m[1].trim().split(/\r?\n/).map(line=>{const i=line.indexOf(':');return [line.slice(0,i),line.slice(i+1).trim()];})));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-6,`${a} != ${b}`);
for (const tm of [9,10,11,12,13,14,15]) for (const fig of figures(tm)) {
  for (const svg of [fig.svg,fig.mobileSvg].filter(Boolean)) {
    const dom=new JSDOM(svg,{contentType:'image/svg+xml'});
    const root=dom.window.document.documentElement;
    assert.equal(root.tagName,'svg');assert.equal(root.getAttribute('role'),'img');
    const [, ,width,height]=root.getAttribute('viewBox').split(/\s/).map(Number);
    for(const t of root.querySelectorAll('text')) {
      const x=Number(t.getAttribute('x')),y=Number(t.getAttribute('y'));
      assert.ok(x>=0 && x<=width && y>=0 && y<=height,`Label ${t.textContent} outside canvas`);
      if(svg===fig.mobileSvg) assert.ok(Number(t.getAttribute('font-size'))*300/width>=12,'Phone label at 300px content width');
    }
    dom.window.close();
  }
}
const mm=specs(9).find(s=>s.id==='V-TM09-11');
const tax=specs(9).find(s=>s.id==='V-TM09-12');
for(const [s,t] of [[mm,0],[tax,.25]]) {
  const data=JSON.parse(s.data),cost=data.panels[0],value=data.panels[1];
  assert.ok(s.sumber.includes('ilustrasi'),'Assumptions are labelled, not book market data');
  for(const [x,re] of cost.series[0].points) {
    near(re,12+(1-t)*6*x);
    const wacc=(re+x*6*(1-t))/(1+x);
    near(wacc,12*(1-t*x/(1+x)));
    const VL=t===0 ? value.series[0].points[0][1] : value.series[0].points.find(p=>p[0]===x)[1];
    const D=VL*x/(1+x);
    near(VL,100+t*D);
  }
}
const discrete=specs(9).filter(s=>['V-TM09-04','V-TM09-05'].includes(s.id));
discrete.forEach(s=>{
  const p=JSON.parse(s.data).panels[0];assert.equal(p.discrete,true);
  p.series.forEach(serie=>near(serie.points.reduce((sum,p)=>sum+p[1],0),1));
});
const eps=JSON.parse(specs(9).find(s=>s.id==='V-TM09-08').data).panels;
assert.equal(eps[0].series[0].points.reduce((a,b)=>a[1]>b[1]?a:b)[0],50);
assert.equal(eps[1].series[1].points.reduce((a,b)=>a[1]<b[1]?a:b)[0],30);
assert.equal(eps[2].series[0].points.reduce((a,b)=>a[1]>b[1]?a:b)[0],30);
const cash=JSON.parse(specs(11).find(s=>s.id==='V-TM11-05').data).panels[0].series[0].points;
assert.deepEqual(cash,[[7,-21],[8,-58],[9,-100],[10,-56],[11,58],[12,102]],'Table 16.1 row 40, independent transcribed source values');
console.log('Finance semantics PASS: MM scenarios, market weights, discrete probabilities, Bigbee optimum, Allied source data, readable mobile labels.');
