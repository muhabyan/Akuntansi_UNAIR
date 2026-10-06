import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { loadReading } from './mnu307-canonical-lib.mjs';
import { flatten } from './mnu307-content-lib.mjs';
import { auditTM7 } from './mnu307-pr4-geometry.mjs';

const reviewed=JSON.parse(fs.readFileSync('scripts/fixtures/mnu307/tm07-reviewed-r1-r2.json','utf8'));
assert.equal(reviewed.head,'f3b544b4293e13842a5fbab8d9a81a067bbb1461');
const hashes={'V-TM07B-12':'ec168a43c1ffbbd39f15e5625ac0499b32e4e7c8f10bbbfb277ec2c3020109de','V-TM07B-14':'b94fc035f622fa736b67e52571329ec376356c9e6a14413e3e8976fb272ae0bf'};
assert.deepEqual(reviewed.figures.map(f=>f.id).sort(),Object.keys(hashes).sort());
for(const f of reviewed.figures)assert.equal(createHash('sha256').update(f.svg).digest('hex'),hashes[f.id],'frozen reviewed SVG');
const figures=flatten((await loadReading(7)).blocks).filter(f=>f.svg);
assert.equal(figures.length,30);
const css=fs.readFileSync('src/index.css','utf8');
const svgCSS=css.slice(css.indexOf('.course-diagram-svg {'),css.indexOf('/* Fallback: ensure light-colored'))+css.slice(css.indexOf('html.dark .course-diagram-svg .svg-bg'),css.indexOf('html.dark .course-diagram-svg text.text-white'));
const server=net.createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const port=server.address().port;await new Promise(resolve=>server.close(resolve));
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'mnu307-text-paths-'));
const executable=process.env.CHROMIUM_PATH??(process.platform==='win32'?path.join(process.env.ProgramFiles??'C:/Program Files','Google','Chrome','Application','chrome.exe'):'/usr/bin/chromium');
let chrome,ws;const report=[];
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
try {
  chrome=spawn(executable,['--headless=new','--no-sandbox','--disable-gpu','--no-proxy-server',`--remote-debugging-port=${port}`,`--user-data-dir=${profile}`,'about:blank'],{windowsHide:true,stdio:'ignore'});
  chrome.on('error',error=>{throw error;});
  let page;for(let i=0;i<150&&!page;i++){try{page=(await(await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(x=>x.type==='page');}catch{/* Wait for Chrome. */}if(!page)await sleep(100);}
  assert.ok(page,'Chromium must run; no skip');ws=new WebSocket(page.webSocketDebuggerUrl);await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  let sequence=0;const pending=new Map();
  ws.addEventListener('message',event=>{const m=JSON.parse(event.data),p=pending.get(m.id);if(p){pending.delete(m.id);clearTimeout(p.timeout);if(m.error)p.reject(Error(m.error.message));else p.resolve(m.result);}});
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++sequence,timeout=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout '+method));},25000);pending.set(id,{resolve,reject,timeout});ws.send(JSON.stringify({id,method,params}));});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
  await send('Page.enable');await send('Runtime.enable');
  async function render(svgs,theme){const html='<style>'+svgCSS+'</style><main style="max-width:780px">'+svgs.join('')+'</main>';await evaluate('document.documentElement.classList.toggle("dark",'+JSON.stringify(theme==='dark')+');document.body.innerHTML='+JSON.stringify(html));await evaluate('document.fonts.ready.then(()=>true)');}
  const audit=()=>evaluate('[...globalThis.document.querySelectorAll("svg[data-figure]")].map('+auditTM7.toString()+')');
  for(const width of [1280,375])for(const theme of ['light','dark']){
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width===375});
    await render(reviewed.figures.map(f=>f.svg),theme);const old=await audit();
    const originalMeaning=await evaluate('['+'...document.querySelectorAll("svg[data-figure]")].map(s=>({id:s.dataset.figure,text:[...s.querySelectorAll("text")].map(t=>t.textContent).sort(),edges:[...s.querySelectorAll("path[data-edge]")].map(p=>p.dataset.edge)}))');
    for(const r of old){assert.ok(r.issues.some(s=>s.includes(r.id.endsWith('14')?'other series crosses label':'path occludes text supports')),'old reviewed SVG must fail '+r.id);if(r.id.endsWith('12'))assert.ok(r.textPathChecks.some(x=>x.label==='supports'&&x.paintsAfterLabel&&!x.safelyMasked),'shared trunk must not waive occlusion');}
    await render(figures.map(f=>f.svg),theme);const current=await audit();for(const r of current)assert.deepEqual(r.issues,[],r.id+' actual bbox/path/paint-order');
    const currentMeaning=await evaluate('['+'...document.querySelectorAll("svg[data-figure]")].filter(s=>["V-TM07B-12","V-TM07B-14"].includes(s.dataset.figure)).map(s=>({id:s.dataset.figure,text:[...s.querySelectorAll("text")].map(t=>t.textContent).sort(),edges:[...s.querySelectorAll("path[data-edge]")].map(p=>p.dataset.edge)}))');assert.deepEqual(currentMeaning,originalMeaning,'no label/path/source relationship may be removed to pass collision tests');
    const retained=await evaluate('(()=>{const s=document.querySelector("svg[data-figure=V-TM07B-14]");return [...s.querySelectorAll("path[data-horizon-curve]")].map(p=>({name:p.dataset.horizonCurve,d:p.getAttribute("d"),dash:p.getAttribute("stroke-dasharray"),width:p.getAttribute("stroke-width")}));})()');
    await render([reviewed.figures.find(f=>f.id==='V-TM07B-14').svg],theme);
    const original=await evaluate('(()=>{const s=document.querySelector("svg");return [...s.querySelectorAll("path[data-horizon-curve]")].map(p=>({name:p.dataset.horizonCurve,d:p.getAttribute("d"),dash:p.getAttribute("stroke-dasharray"),width:p.getAttribute("stroke-width")}));})()');assert.deepEqual(retained,original,'all four curve trajectories and dash styles unchanged');
    // Mutations prove that moving a legend back into another curve, misidentifying a series,
    // and repainting a shared branch across text still fail the same behavioral audit.
    await render([figures.find(f=>f.svg.includes('data-figure="V-TM07B-14"')).svg],theme);
    await evaluate('('+(()=>{const t=[...globalThis.document.querySelectorAll('text[data-horizon-label]')].find(t=>t.dataset.horizonLabel==='Product Innovation');t.setAttribute('x','1380');t.setAttribute('y','1100');}).toString()+')()');
    assert.ok((await audit())[0].issues.some(s=>s.includes('other series crosses label')),'curve-label collision mutation');
    await render([figures.find(f=>f.svg.includes('data-figure="V-TM07B-14"')).svg],theme);
    await evaluate('[...globalThis.document.querySelectorAll("path[data-horizon-key]")].find(p=>p.dataset.horizonKey==="Good Citizen").setAttribute("stroke-dasharray","9 5")');
    assert.ok((await audit())[0].issues.some(s=>s.includes('incorrect horizon legend association Good Citizen')),'wrong series key mutation');
    await render([figures.find(f=>f.svg.includes('data-figure="V-TM07B-12"')).svg],theme);
    await evaluate('('+(()=>{const t=[...globalThis.document.querySelectorAll('text[data-edge-label]')].find(t=>t.dataset.edgeLabel==='3'),b=[...globalThis.document.querySelectorAll('rect[data-edge-label-bg]')].find(t=>t.dataset.edgeLabelBg==='3'),p=[...globalThis.document.querySelectorAll('path[data-edge-index]')].find(t=>t.dataset.edgeIndex==='7');t.setAttribute('x','402.5');t.setAttribute('y','1038');b.setAttribute('x','349.5');b.setAttribute('y','1007');p.before(b,t);}).toString()+')()');
    assert.ok((await audit())[0].issues.some(s=>s.includes('path occludes text supports')),'later shared trunk occlusion mutation');
    report.push({width,theme,oldFail:old,newPass:current,unchangedCurveProfiles:true,mutationsRejected:3});
  }
  if(process.env.MNU307_TEXT_PATH_REPORT)fs.writeFileSync(process.env.MNU307_TEXT_PATH_REPORT,JSON.stringify(report,null,2));
  console.log('MNU307 text-path regression PASS: reviewed R1/R2 fail in 4 views, all 30 current SVGs pass actual bbox/length sampling and paint order; 12 collision/association mutations rejected');
}finally{ws?.close();chrome?.kill();}