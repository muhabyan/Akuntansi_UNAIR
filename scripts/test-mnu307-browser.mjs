import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
const root=process.cwd(),output=path.join(root,process.env.MNU307_QA_OUTPUT??'qa-mnu307-pr3.local');
fs.mkdirSync(output,{recursive:true});
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const port=Number(process.env.MNU307_PREVIEW_PORT??4186),cdpPort=Number(process.env.MNU307_CDP_PORT??9346);
async function waitFor(url){for(let i=0;i<150;i++){try{const r=await fetch(url);if(r.ok)return r;}catch{/* Wait for the local process. */}await sleep(100);}throw Error(`Timeout ${url}`);}
class Cdp {
  constructor(url){this.ws=new WebSocket(url);this.id=0;this.pending=new Map();}
  async open(){await new Promise((resolve,reject)=>{this.ws.addEventListener('open',resolve,{once:true});this.ws.addEventListener('error',reject,{once:true});});this.ws.addEventListener('message',event=>{const message=JSON.parse(event.data),pending=this.pending.get(message.id);if(pending){this.pending.delete(message.id);if(message.error)pending.reject(Error(message.error.message));else pending.resolve(message.result);}});}
  send(method,params={}){return new Promise((resolve,reject)=>{const id=++this.id;this.pending.set(id,{resolve,reject});this.ws.send(JSON.stringify({id,method,params}));});}
  async eval(expression){const result=await this.send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(result.exceptionDetails)throw Error(JSON.stringify(result.exceptionDetails));return result.result.value;}
}
let preview,chrome,cdp;
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'mnu307-pr3-'));
const report=[];
const targets=(process.env.MNU307_QA_TMS??'5,6').split(',').map(Number);
const counts={1:{solutions:9,depth:13,self:11,figures:11,svg:7,minutes:14},2:{solutions:24,depth:11,self:10,figures:20,svg:12,minutes:23},3:{solutions:17,depth:9,self:8,figures:18,svg:10,minutes:18},4:{solutions:18,depth:7,self:7,figures:18,svg:12,minutes:20},5:{solutions:21,depth:7,self:7,figures:17,svg:11,minutes:19},6:{solutions:20,depth:7,self:7,figures:18,svg:12,minutes:20}};
try {
  preview=spawn(process.execPath,[path.join(root,'node_modules/vite/bin/vite.js'),'preview','--host','127.0.0.1','--port',String(port),'--strictPort'],{cwd:root,stdio:'ignore',windowsHide:true});
  await waitFor(`http://127.0.0.1:${port}`);
  chrome=spawn(process.env.CHROMIUM_PATH??'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',['--headless=new','--no-sandbox','--disable-gpu','--no-proxy-server',`--remote-debugging-port=${cdpPort}`,`--user-data-dir=${profile}`,'about:blank'],{stdio:'ignore',windowsHide:true});
  const pages=await(await waitFor(`http://127.0.0.1:${cdpPort}/json/list`)).json();
  cdp=new Cdp(pages.find(t=>t.type==='page').webSocketDebuggerUrl);await cdp.open();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
  await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:"try { localStorage.setItem('aks1_has_seen_tour','true'); } catch {}"});
  await cdp.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  async function open(tm,theme,width){
    await cdp.send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width===375});
    await cdp.send('Page.navigate',{url:`http://127.0.0.1:${port}/course/MNS301`});
    for(let i=0;i<100;i++){if(await cdp.eval(`Boolean(document.querySelector('button[aria-label^="Buka TM ${tm}:"]'))`))break;await sleep(100);}
    const ready=await cdp.eval(`Boolean(document.querySelector('button[aria-label^="Buka TM ${tm}:"]'))`);
    if(!ready){
      const state=await cdp.eval("({url:location.href,text:document.body.innerText,buttons:[...document.querySelectorAll('button')].map(b=>b.getAttribute('aria-label')??b.innerText)})");
      const shot=await cdp.send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(output,'navigation-failure.png'),Buffer.from(shot.data,'base64'));
      throw Error(`TM ${tm} course card unavailable: ${JSON.stringify(state)}`);
    }
    const cardSubtitle=await cdp.eval(`document.querySelector('button[aria-label^="Buka TM ${tm}:"]').closest('article').querySelector('.line-clamp-1').innerText`);
    assert.match(cardSubtitle,/^\p{Lu}/u,'card subtitle capitalized');
    await cdp.eval(`localStorage.setItem('theme',${JSON.stringify(theme)});document.documentElement.classList.toggle('dark',${theme==='dark'});document.querySelector('button[aria-label^="Buka TM ${tm}:"]').click()`);
    for(let i=0;i<100;i++){if(await cdp.eval("Boolean(document.querySelector('.reading-document .layered-section'))"))break;await sleep(100);}
    await sleep(250);return cardSubtitle;
  }
  async function expand(){
    await cdp.eval("[...document.querySelectorAll('button')].filter(b=>b.textContent.includes('Buka pendalaman:')||b.textContent.includes('Tampilkan penyelesaian dan jawaban akhir')||b.textContent.includes('Saya sudah mencoba')).forEach(b=>b.click())");
    await sleep(200);await cdp.eval("[...document.querySelectorAll('button')].filter(b=>b.textContent.includes('Lihat contoh jawaban')).forEach(b=>b.click())");await sleep(200);
  }
  async function screenshot(element,file,width){
    await cdp.eval(`(${element}).scrollIntoView({block:'start',behavior:'instant'});window.scrollBy({top:-160,behavior:'instant'})`);
    await sleep(150);
    const clip=await cdp.eval(`(()=>{const r=(${element}).getBoundingClientRect();return {x:Math.max(0,r.x+scrollX),y:Math.max(0,r.y+scrollY),width:Math.min(${width},r.width),height:r.height,scale:1};})()`);
    const shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync(path.join(output,file),Buffer.from(shot.data,'base64'));
  }
  async function transitionState(tm,label,theme,width) {
    const state=await cdp.eval(`({tm:document.querySelector('.reading-header').innerText,open:[...document.querySelectorAll('.course-solution-surface button[aria-expanded=true]')].length,solutions:document.querySelectorAll('.course-solution-surface button[aria-expanded]').length,drafts:[...document.querySelectorAll('.layered-self-check textarea')].map(t=>t.value),selfAnswers:document.querySelectorAll('.layered-self-check > .border-t').length,locked:[...document.querySelectorAll('.layered-self-check button')].filter(b=>b.textContent.includes('Lihat contoh jawaban')).every(b=>b.disabled),overflow:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-document.documentElement.clientWidth})`);
    assert.equal(state.solutions,counts[tm].solutions,label);assert.equal(state.open,0,label);assert.equal(state.selfAnswers,0,label);assert.ok(state.drafts.every(d=>d===''),label);assert.ok(state.locked,label);assert.equal(state.overflow,0,label);
    report.push({transition:label,tm,theme,width,...state});
    return state;
  }
  async function attemptCase(tm) {
    const label=({3:'Atlas',4:'Panasonic',5:'McDonald',6:'Nissan'})[tm];
    await cdp.eval(`(()=>{const s=[...document.querySelectorAll('.course-solution-surface')].find(s=>s.querySelector('h3').textContent.includes('${label}'));s.querySelector('button[aria-expanded]').click();const self=document.querySelector('.layered-self-check'),t=self.querySelector('textarea');Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(t,'Draft ${label} hanya untuk materi ini');t.dispatchEvent(new Event('input',{bubbles:true}));})()`);
    await sleep(100);
    assert.equal(await cdp.eval("document.querySelector('.layered-self-check textarea').value"),`Draft ${label} hanya untuk materi ini`);
    await cdp.eval("[...document.querySelector('.layered-self-check').querySelectorAll('button')].find(b=>b.textContent.includes('Lihat contoh jawaban')).click()");
    await sleep(100);
    assert.equal(await cdp.eval("document.querySelectorAll('.course-solution-surface button[aria-expanded=true]').length"),1);
    assert.equal(await cdp.eval("document.querySelectorAll('.layered-self-check > .border-t').length"),1);
  }
  async function step(tm,direction) {
    await cdp.eval(`[...document.querySelectorAll('main button')].find(b=>b.textContent.trim()==='${direction}').click()`);
    for(let i=0;i<100;i++){if(await cdp.eval(`window.history.state?.akuntansihub_tm===${tm}&&document.querySelectorAll('.course-solution-surface button[aria-expanded]').length===${counts[tm].solutions}`))break;await sleep(100);}
    await sleep(100);
  }
  for(const width of [375,1280])for(const theme of ['light','dark'])for(const chain of [[3,4,3],[4,5,6,5,4],[6,5,4,5,6]]) {
    const start=chain[0];await open(start,theme,width);
    await cdp.eval('window.__readingLifecycleToken='+JSON.stringify(chain.join('-')));
    await transitionState(start,'fresh TM0'+start,theme,width);
    for(let i=1;i<chain.length;i++){
      const previous=chain[i-1],dest=chain[i];await attemptCase(previous);
      await step(dest,dest>previous?'Berikutnya':'Sebelumnya');
      assert.equal(await cdp.eval('window.__readingLifecycleToken'),chain.join('-'),'no reload across TM transitions');
      await transitionState(dest,'TM0'+previous+' → TM0'+dest,theme,width);
      if(width===375){
        const label=({3:'Atlas',4:'Panasonic',5:'McDonald',6:'Nissan'})[dest];
        await screenshot("[...document.querySelectorAll('.course-solution-surface')].find(s=>s.querySelector('h3').textContent.includes('"+label+"'))",'transition-tm0'+previous+'-tm0'+dest+'-'+theme+'-closed-case.png',375);
        await screenshot("document.querySelector('.layered-self-check')",'transition-tm0'+previous+'-tm0'+dest+'-'+theme+'-empty-draft.png',375);
      }
    }
    console.log('Reading transitions '+width+'px '+theme+' '+chain.join(' ↔ ')+' PASS: closed solutions and empty drafts without reload');
  }

  for(const tm of targets)for(const theme of ['light','dark']) {
    const cardSubtitle=await open(tm,theme,375);
    const before=await cdp.eval(`({overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,solutions:[...document.querySelectorAll('.course-solution-surface button[aria-expanded]')].map(b=>b.getAttribute('aria-expanded')),depth:[...document.querySelectorAll('.layered-pendalaman button')].map(b=>b.getAttribute('aria-expanded')),header:document.querySelector('.reading-header').innerText,subtitle:document.querySelector('.reading-header .text-secondary').innerText})`);
    assert.equal(before.overflow,0);assert.equal(before.solutions.length,counts[tm].solutions);assert.ok(before.solutions.every(s=>s==='false'));assert.equal(before.depth.length,counts[tm].depth);assert.ok(before.depth.every(s=>s==='false'));
    assert.equal(await cdp.eval("document.querySelectorAll('.layered-self-check').length"),counts[tm].self);
    assert.equal(await cdp.eval("[...document.querySelectorAll('.layered-self-check button')].filter(b=>b.textContent.includes('Lihat contoh jawaban')&&b.disabled).length"),counts[tm].self,'self-check answers initially locked');
    assert.match(before.header,new RegExp(`Sekitar ${counts[tm].minutes} menit baca`));assert.match(before.subtitle,/^\p{Lu}/u);
    await expand();
    const state=await cdp.eval(`(()=>{
      const visible=e=>e.checkVisibility()&&e.getBoundingClientRect().width>0;
      const figures=[...document.querySelectorAll('.reading-document figure')].filter(e=>visible(e)&&!e.parentElement.closest('figure'));
      const tables=[...document.querySelectorAll('.reading-document .akbi-table-scroll')].filter(visible).map(e=>{e.scrollLeft=e.scrollWidth;return {scroll:e.scrollLeft,max:e.scrollWidth-e.clientWidth};});
      return {overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,figures:figures.length,tables,text:document.querySelector('.reading-document').innerText,solutions:[...document.querySelectorAll('.course-solution-surface button[aria-expanded]')].map(b=>({expanded:b.getAttribute('aria-expanded'),panel:!!document.getElementById(b.getAttribute('aria-controls'))})),selfChecks:[...document.querySelectorAll('.self-check-answer')].filter(visible).length};
    })()`);
    assert.equal(state.overflow,0);assert.equal(state.figures,counts[tm].figures);assert.ok(state.tables.every(t=>Math.abs(t.scroll-t.max)<=1));assert.ok(state.solutions.every(s=>s.expanded==='true'&&s.panel));
    assert.equal(await cdp.eval("document.querySelectorAll('.layered-self-check > .border-t').length"),counts[tm].self,'all self-check answers revealed');
    assert.equal(await cdp.eval("document.querySelectorAll('.layered-pendalaman button[aria-expanded=true]').length"),counts[tm].depth,'all depth panels expanded');
    assert.doesNotMatch(state.text,/\*\*|```|:::|VISUAL SPEC|TEXT ALTERNATIVE|\b(?:BELUM|TERVERIFIKASI)\b/);
    await screenshot("document.querySelector('.reading-header')",`tm0${tm}-${theme}-header.png`,375);
    for(let i=0;i<state.figures;i++)await screenshot(`[...document.querySelectorAll('.reading-document figure')].filter(e=>e.checkVisibility()&&!e.parentElement.closest('figure'))[${i}]`,`tm0${tm}-${theme}-figure${i+1}.png`,375);
    const detail=await cdp.eval(`(()=>{document.querySelectorAll('.reading-document figure details').forEach(e=>e.open=true);const areas=[...document.querySelectorAll('.reading-document .akbi-table-scroll')].filter(e=>e.checkVisibility()).map(e=>{e.scrollLeft=e.scrollWidth;return {scroll:e.scrollLeft,max:e.scrollWidth-e.clientWidth};});return {overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,areas};})()`);
    assert.equal(detail.overflow,0);assert.ok(detail.areas.every(e=>Math.abs(e.scroll-e.max)<=1));
    report.push({tm,theme,width:375,overflow:state.overflow,figures:state.figures,exercises:state.solutions.length,depth:before.depth.length,scrollAreas:state.tables.length,detailScrollAreas:detail.areas.length,header:before.header,cardSubtitle});
    console.log(`MNU307 TM0${tm} ${theme} 375px PASS: ${state.figures} figures, all reveals open, overflow 0`);
  }
  for(const tm of targets)for(const theme of ['light','dark']) {
    await open(tm,theme,1280);await expand();
    const svgs=await cdp.eval("[...document.querySelectorAll('.reading-document .mnu307-diagram')].filter(e=>e.checkVisibility()).length");assert.equal(svgs,counts[tm].svg);
    const clipped=await cdp.eval(`(()=>{const issues=[];for(const svg of [...document.querySelectorAll('.reading-document .mnu307-diagram')].filter(e=>e.checkVisibility()))for(const text of svg.querySelectorAll('text.svg-text')){const box=text.previousElementSibling.getBBox(),label=text.getBBox();if(label.x<box.x-1||label.x+label.width>box.x+box.width+1||label.y<box.y-1||label.y+label.height>box.y+box.height+1)issues.push(text.textContent);}return issues;})()`);
    const overlappingLabels=await cdp.eval('(()=>{const issues=[];for(const svg of [...document.querySelectorAll(".reading-document .mnu307-diagram")].filter(e=>e.checkVisibility())){const labels=[...svg.querySelectorAll("text")];for(let a=0;a<labels.length;a++)for(let b=a+1;b<labels.length;b++){const x=labels[a].getBBox(),y=labels[b].getBBox();if(Math.min(x.x+x.width,y.x+y.width)-Math.max(x.x,y.x)>2&&Math.min(x.y+x.height,y.y+y.height)-Math.max(x.y,y.y)>2)issues.push([labels[a].textContent,labels[b].textContent]);}}return issues;})()');
    assert.deepEqual(overlappingLabels,[],'diagram labels do not overlap');
    assert.deepEqual(clipped,[],`TM0${tm}: node labels fit`);assert.equal(await cdp.eval('document.documentElement.scrollWidth-document.documentElement.clientWidth'),0);
    for(let i=0;i<svgs;i++)await screenshot(`[...document.querySelectorAll('.reading-document .mnu307-diagram')].filter(e=>e.checkVisibility())[${i}]`,`tm0${tm}-${theme}-desktop-svg${i+1}.png`,1280);
    report.push({tm,theme,width:1280,svgs,overflow:0});console.log(`MNU307 TM0${tm} ${theme} desktop PASS: ${svgs} SVGs, labels fit`);
  }
  fs.writeFileSync(path.join(output,'browser-report.json'),JSON.stringify(report,null,2));
}finally{cdp?.ws.close();chrome?.kill();preview?.kill();}
