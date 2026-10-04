import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
const root=process.cwd(), output=path.join(root,'qa-akk203.local');
fs.mkdirSync(output,{recursive:true});
const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
const port=Number(process.env.AKK203_PREVIEW_PORT??4174), cdpPort=Number(process.env.AKK203_CDP_PORT??9334);
async function waitFor(url){for(let i=0;i<150;i++){try{const r=await fetch(url);if(r.ok)return r;}catch{/* Retry while the local test server starts. */}await sleep(100);}throw Error(`Timeout ${url}`);}
class Cdp {
  constructor(url){this.ws=new WebSocket(url);this.id=0;this.pending=new Map();}
  async open(){await new Promise((resolve,reject)=>{this.ws.addEventListener('open',resolve,{once:true});this.ws.addEventListener('error',reject,{once:true});});this.ws.addEventListener('message',(e)=>{const m=JSON.parse(e.data),p=this.pending.get(m.id);if(p){this.pending.delete(m.id);if(m.error)p.reject(Error(m.error.message));else p.resolve(m.result);}});}
  send(method,params={}){return new Promise((resolve,reject)=>{const id=++this.id;this.pending.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}
  async eval(expression){const r=await this.send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;}
}
let preview,chrome,cdp;
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'akk203-qa-'));
const report=[];
try {
  preview=spawn(process.execPath,[path.join(root,'node_modules/vite/bin/vite.js'),'preview','--host','127.0.0.1','--port',String(port),'--strictPort'],{cwd:root,stdio:'ignore',windowsHide:true});
  await waitFor(`http://127.0.0.1:${port}`);
  chrome=spawn(process.env.CHROMIUM_PATH??'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',['--headless=new','--no-sandbox','--disable-gpu','--no-proxy-server',`--remote-debugging-port=${cdpPort}`,`--user-data-dir=${profile}`,'about:blank'],{stdio:'ignore',windowsHide:true});
  const targets=await(await waitFor(`http://127.0.0.1:${cdpPort}/json/list`)).json();
  cdp=new Cdp(targets.find((t)=>t.type==='page').webSocketDebuggerUrl);await cdp.open();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
  await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:"try { localStorage.setItem('aks1_has_seen_tour','true'); } catch {}"});
  await cdp.send('Emulation.setDeviceMetricsOverride',{width:375,height:844,deviceScaleFactor:1,mobile:true});
  for(const tm of [1,2,3,4,5,6,7]) for(const theme of ['light','dark']) {
    await cdp.send('Page.navigate',{url:`http://127.0.0.1:${port}/course/AKS201`});
    for(let i=0;i<100;i++){if(await cdp.eval(`Boolean(document.querySelector('button[aria-label^="Buka TM ${tm}:"]'))`))break;await sleep(100);}
    const cardSubtitle=await cdp.eval(`document.querySelector('button[aria-label^="Buka TM ${tm}:"]').closest('article').querySelector('.line-clamp-1').innerText`);
    assert.match(cardSubtitle,/^\p{Lu}/u,'material card subtitle starts with a capital');
    await cdp.eval(`localStorage.setItem('theme',${JSON.stringify(theme)});document.documentElement.classList.toggle('dark',${theme==='dark'});document.querySelector('button[aria-label^="Buka TM ${tm}:"]').click()`);
    for(let i=0;i<100;i++){if(await cdp.eval("Boolean(document.querySelector('.reading-document .layered-section'))"))break;await sleep(100);}
    await sleep(400);
    let state=await cdp.eval(`({overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,solutions:[...document.querySelectorAll('.course-solution-surface button[aria-expanded]')].map(b=>b.getAttribute('aria-expanded')),pendalaman:[...document.querySelectorAll('.layered-pendalaman button')].map(b=>b.getAttribute('aria-expanded')),figures:document.querySelectorAll('.reading-document > .reading-block-anchor > .course-figure-surface').length})`);
    assert.equal(state.overflow,0,`TM${tm} ${theme}: default page overflow`);assert.equal(state.solutions.length,20);assert.ok(state.solutions.every((s)=>s==='false'),'solutions default closed');
    assert.ok(state.pendalaman.every((s)=>s==='false'),'depth default closed');
    const entry=await cdp.eval(`({text:document.querySelector('.reading-header').innerText,subtitle:document.querySelector('.reading-header .text-secondary').innerText})`);
    assert.match(entry.text,new RegExp('Sekitar '+({1:20,2:22,3:25,4:25,5:22,6:25,7:25}[tm])+' menit baca'),'approved Inti minutes shown');
    assert.match(entry.subtitle,/^\p{Lu}/u,'subtitle starts with a capital');
    await cdp.eval("[...document.querySelectorAll('button')].filter(b=>b.textContent.includes('Buka pendalaman:')||b.textContent.includes('Tampilkan penyelesaian dan jawaban akhir')||b.textContent.includes('Saya sudah mencoba')).forEach(b=>b.click())");
    await sleep(150);await cdp.eval("[...document.querySelectorAll('button')].filter(b=>b.textContent.includes('Lihat contoh jawaban')).forEach(b=>b.click())");await sleep(200);
    state=await cdp.eval(`(() => {
      const visible=e=>e.checkVisibility()&&e.getBoundingClientRect().width>0&&e.getBoundingClientRect().height>0;
      const figures=[...document.querySelectorAll('.reading-document figure')].filter(e=>visible(e)&&!e.parentElement.closest('figure'));
      const tables=[...document.querySelectorAll('.reading-document .akbi-table-scroll')].filter(visible).map(e=>{e.scrollLeft=e.scrollWidth;return {width:e.clientWidth,scroll:e.scrollLeft,max:e.scrollWidth-e.clientWidth,reportHeader:e.closest('.akk203-report-table')?.querySelector('header')?.innerText};});
      const totals=[...document.querySelectorAll('.reading-document td')].filter(e=>visible(e)&&getComputedStyle(e).borderBottomStyle==='double').map(e=>({text:e.innerText,width:getComputedStyle(e).borderBottomWidth}));
      return {overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,figures:figures.length,tables,totals,text:document.querySelector('.reading-document').innerText,solutions:[...document.querySelectorAll('.course-solution-surface button[aria-expanded]')].map(b=>({expanded:b.getAttribute('aria-expanded'),panel:!!document.getElementById(b.getAttribute('aria-controls'))}))};
    })()`);
    assert.equal(state.overflow,0,`TM${tm} ${theme}: expanded overflow`);assert.equal(state.figures,{1:4,2:5,3:8,4:8,5:9,6:9,7:8}[tm]);assert.ok(state.tables.every((t)=>Math.abs(t.scroll-t.max)<=1),'local tables reach last column');assert.ok(state.solutions.every((s)=>s.expanded==='true'&&s.panel));
    assert.doesNotMatch(state.text,/\*\*|\|--|```|:::|\[TOTAL-AKHIR\]|\b(?:BELUM|TERVERIFIKASI)\b/);
    assert.equal(state.totals.length,{1:0,2:4,3:4,4:3,5:5,6:8,7:10}[tm],`TM${tm}: total cells`);assert.ok(state.totals.every((t)=>t.width==='3px'));
    if(tm>=6) {
      for(const amount of ['1.450.000','52.650.000','73.000.000','23.120.000','291.740.000','318.940.000']) assert.ok(state.text.includes(amount),`dataset amount rendered: ${amount}`);
      assert.equal(await cdp.eval("document.querySelectorAll('.reading-document .course-journal-card').length"),tm===6?29:43);
      assert.ok(!state.totals.some((t)=>t.text==='n/a'||t.text.includes('%')),'only nominal cells receive double underline');
    }
    if(tm===2) assert.ok(!state.totals.some((t)=>/^(735|315)$/.test(t.text)),'ordinary class amounts have no double rule');
    const count=state.figures;
    for(let i=0;i<count;i++) {
      const clip=await cdp.eval(`(()=>{const e=[...document.querySelectorAll('.reading-document figure')].filter(e=>e.checkVisibility()&&!e.parentElement.closest('figure'))[${i}];e.scrollIntoView({block:'start'});const r=e.getBoundingClientRect();return {x:Math.max(0,r.x+scrollX),y:Math.max(0,r.y+scrollY),width:Math.min(375,r.width),height:r.height,scale:1};})()`);
      const shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync(path.join(output,`tm0${tm}-${theme}-figure${i+1}.png`),Buffer.from(shot.data,'base64'));
    }
    const shot=await cdp.send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(output,`tm0${tm}-${theme}.png`),Buffer.from(shot.data,'base64'));
    // Report grids keep their header outside local scrolling; capture the last column too.
    const reportCount=await cdp.eval("document.querySelectorAll('.reading-document .akk203-report-table').length");
    for(let i=0;i<reportCount;i++) {
      const clip=await cdp.eval(`(()=>{const e=document.querySelectorAll('.reading-document .akk203-report-table')[${i}];e.scrollIntoView({block:'start'});const r=e.getBoundingClientRect();return {x:Math.max(0,r.x+scrollX),y:Math.max(0,r.y+scrollY),width:Math.min(375,r.width),height:r.height,scale:1};})()`);
      const shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync(path.join(output,`tm0${tm}-${theme}-report${i+1}.png`),Buffer.from(shot.data,'base64'));
    }
    const details=await cdp.eval(`(()=>{document.querySelectorAll('.reading-document figure details').forEach(e=>e.open=true);const areas=[...document.querySelectorAll('.reading-document .akbi-table-scroll')].filter(e=>e.checkVisibility()).map(e=>{e.scrollLeft=e.scrollWidth;return {scroll:e.scrollLeft,max:e.scrollWidth-e.clientWidth};});return {overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,areas};})()`);
    assert.equal(details.overflow,0,'expanded diagram overflow');assert.ok(details.areas.every(e=>Math.abs(e.scroll-e.max)<=1),'detailed SVG reaches right edge');
    if(tm===7) {
      const sourceImages=await cdp.eval(`(async()=>{const images=[...document.querySelectorAll('.reading-document img[src^="/assets/akk203/"]')];for(const img of images){img.scrollIntoView({block:'center'});await img.decode();}return images.map(img=>({width:img.naturalWidth,alt:img.alt,link:img.closest('section').querySelector('a').href}));})()`);
      assert.equal(sourceImages.length,2);assert.ok(sourceImages.every((s)=>s.width>500&&s.alt&&/\.pdf#page=(19|47)$/.test(s.link)),'original LPSAL images load with PDF page links');
      assert.equal(await cdp.eval('document.documentElement.scrollWidth-document.documentElement.clientWidth'),0,'original source pages scroll locally');
    }
    report.push({tm,theme,width:375,overflow:state.overflow,figures:state.figures,scrollAreas:state.tables.length,totalCells:state.totals,entry,cardSubtitle,diagramScrollAreas:details.areas.length});
    console.log(`TM${tm} ${theme} 375px PASS: ${state.figures} figures, ${state.tables.length} scroll areas, overflow 0`);
  }
  await cdp.send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  const desktop=await cdp.eval("({svgs:[...document.querySelectorAll('.reading-document .akk203-diagram')].filter(e=>e.getClientRects().length).length,overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth})");assert.equal(desktop.svgs,7);assert.equal(desktop.overflow,0);
  for(const tm of [4,5,6,7]) {
    await cdp.send('Page.navigate',{url:`http://127.0.0.1:${port}/course/AKS201`});
    for(let i=0;i<100;i++){if(await cdp.eval(`Boolean(document.querySelector('button[aria-label^="Buka TM ${tm}:"]'))`))break;await sleep(100);}
    await cdp.eval(`document.querySelector('button[aria-label^="Buka TM ${tm}:"]').click()`);
    for(let i=0;i<100;i++){if(await cdp.eval("Boolean(document.querySelector('.reading-document .layered-section'))"))break;await sleep(100);}
    await cdp.eval("[...document.querySelectorAll('button')].filter(b=>b.textContent.includes('Buka pendalaman:')).forEach(b=>b.click())");await sleep(300);
    const svgs=await cdp.eval("[...document.querySelectorAll('.reading-document .akk203-diagram')].filter(e=>e.checkVisibility()).length");assert.equal(svgs,{4:6,5:8,6:8,7:7}[tm]);
    const clipped=await cdp.eval(`(()=>{const issues=[];for(const svg of [...document.querySelectorAll('.reading-document .akk203-diagram')].filter(e=>e.checkVisibility()))for(const text of svg.querySelectorAll('text.svg-text')){const box=text.previousElementSibling.getBBox(),label=text.getBBox();if(label.x<box.x-1||label.x+label.width>box.x+box.width+1||label.y<box.y-1||label.y+label.height>box.y+box.height+1)issues.push(text.textContent);}return issues;})()`);
    assert.deepEqual(clipped,[],`TM${tm}: all SVG node labels fit their cards`);
    for(let i=0;i<svgs;i++) {
      const clip=await cdp.eval(`(()=>{const e=[...document.querySelectorAll('.reading-document .akk203-diagram')].filter(e=>e.checkVisibility())[${i}];e.scrollIntoView({block:'start'});const r=e.getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height,scale:1};})()`);
      const shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync(path.join(output,`tm0${tm}-desktop-svg${i+1}.png`),Buffer.from(shot.data,'base64'));
    }
  }
  fs.writeFileSync(path.join(output,'browser-report.json'),JSON.stringify({report,desktop},null,2));
} finally {cdp?.ws.close();chrome?.kill();preview?.kill();}
