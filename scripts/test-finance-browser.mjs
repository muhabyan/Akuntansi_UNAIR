import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { build } from 'esbuild';
import { createEnterprisePolicyBlockError, isEnterprisePolicyBlock } from './e2e-policy.mjs';

const root = process.cwd();

/** The app's own exam-session key builder, bundled from src so the test never writes the key format by hand. */
async function loadExamSessionKey() {
  const bundle = await build({
    entryPoints: [path.join(root, 'src/data/quizSession.ts')],
    bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  });
  return (await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)).getExamSessionKey;
}
const EXAM_SECONDS = 90 * 60;
const host = process.env.E2E_SERVER_HOST ?? '127.0.0.1';
const browserHost = process.env.E2E_BROWSER_HOST ?? '127.0.0.1';
// Ports come from the environment when the default is taken (e.g. E2E_CDP_PORT=9333 npm run test:e2e).
const port = Number(process.env.E2E_PREVIEW_PORT ?? 4173);
const cdpPort = Number(process.env.E2E_CDP_PORT ?? 9222);
const baseUrl = `http://${browserHost}:${port}`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function start(command, args, options = {}) {
  return spawn(command, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'], ...options });
}
async function waitFor(url, timeout = 20000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch (error) { lastError = error; }
    await sleep(200);
  }
  throw new Error(`Timeout waiting for ${url}: ${lastError ?? ''}`);
}

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 0;
    this.pending = new Map();
  }
  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { this.ws.close(); }
}

async function evaluate(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function readBrowserState(cdp) {
  return evaluate(cdp, `({ url: location.href, ready: document.readyState, body: document.body?.innerText ?? '' })`);
}
function assertNoEnterprisePolicyBlock(state) {
  if (isEnterprisePolicyBlock(state)) throw createEnterprisePolicyBlockError(state);
}
async function navigate(cdp, url, timeout = 12000) {
  const navigation = await cdp.send('Page.navigate', { url });
  assertNoEnterprisePolicyBlock({ url, errorText: navigation?.errorText });
  const started = Date.now();
  let state = { url: '', ready: '', body: '' };
  while (Date.now() - started < timeout) {
    state = await readBrowserState(cdp);
    assertNoEnterprisePolicyBlock(state);
    if (state.url === url && (state.ready === 'interactive' || state.ready === 'complete')) return;
    await sleep(150);
  }
  throw new Error(`Navigation timeout: ${url}; state=${JSON.stringify({ ...state, body: state.body.slice(0, 1200) })}`);
}
async function waitText(cdp, text, timeout = 12000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const state = await readBrowserState(cdp);
    assertNoEnterprisePolicyBlock(state);
    if (state.body.includes(text)) return;
    await sleep(200);
  }
  const debug = await evaluate(cdp, `({ url: location.href, ready: document.readyState, body: document.body?.innerText.slice(0, 1200), html: document.documentElement?.outerHTML.slice(0, 1200) })`);
  assertNoEnterprisePolicyBlock(debug);
  throw new Error(`Text not found: ${text}; state=${JSON.stringify(debug)}`);
}
async function clickText(cdp, text) {
  const clicked = await evaluate(cdp, `(() => { const el = [...document.querySelectorAll('button,a')].find((node) => node.textContent.trim().includes(${JSON.stringify(text)})); if (!el) return false; el.click(); return true; })()`);
  if (!clicked) throw new Error(`Clickable text not found: ${text}`);
  await sleep(500);
}
async function waitForTestId(cdp, testId, timeout = 12000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    const found = await evaluate(cdp, `Boolean(document.querySelector('[data-testid=${JSON.stringify(testId)}]'))`);
    if (found) return;
    const state = await readBrowserState(cdp);
    assertNoEnterprisePolicyBlock(state);
    await sleep(150);
  }
  throw new Error(`Test id not found: ${testId}`);
}
async function testIdState(cdp, testId) {
  return evaluate(cdp, `(() => {
    const element = document.querySelector('[data-testid=${JSON.stringify(testId)}]');
    if (!element) return null;
    return {
      text: element.textContent ?? '',
      disabled: Boolean(element.disabled),
      count: document.querySelectorAll('[data-testid=${JSON.stringify(testId)}]').length,
      value: 'value' in element ? element.value : undefined,
    };
  })()`);
}
async function selectTestId(cdp, testId, value) {
  const changed = await evaluate(cdp, `(() => {
    const element = document.querySelector('[data-testid=${JSON.stringify(testId)}]');
    if (!(element instanceof HTMLSelectElement)) return false;
    const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value')?.set;
    setter?.call(element, ${JSON.stringify(value)});
    element.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  })()`);
  if (!changed) throw new Error(`Select test id not found: ${testId}`);
  await sleep(350);
}
async function inputTestId(cdp, testId, value) {
  const changed = await evaluate(cdp, `(() => {
    const element = document.querySelector('[data-testid=${JSON.stringify(testId)}]');
    if (!(element instanceof HTMLTextAreaElement) && !(element instanceof HTMLInputElement)) return false;
    const prototype = element instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
    setter?.call(element, ${JSON.stringify(value)});
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  })()`);
  if (!changed) throw new Error(`Input test id not found: ${testId}`);
  await sleep(350);
}
async function clickTestId(cdp, testId) {
  const clicked = await evaluate(cdp, `(() => {
    const element = document.querySelector('[data-testid=${JSON.stringify(testId)}]');
    if (!(element instanceof HTMLElement)) return false;
    element.click();
    return true;
  })()`);
  if (!clicked) throw new Error(`Clickable test id not found: ${testId}`);
  await sleep(400);
}

let preview,chromium,cdp;
// A disposable OS-temp profile keeps Chromium's locked cookies outside Vite's watched workspace.
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'akuntansihub-audit-browser-'));
const results=[];
const courseCodes=(process.env.AUDIT_COURSES??'MNK102').split(',');
const meetings=code=>['MNK102','AKK202','PJK301','AKA201','MNU307','MNU108'].includes(code)?[9,10,11,12,13,14,15]:[8,9,10,11,12,13,14];
try {
  preview=start(process.execPath,[path.join(root,'node_modules/vite/bin/vite.js'),'preview','--host',host,'--port',String(port),'--strictPort']);
  await waitFor(baseUrl);
  const chrome=path.join(process.env.ProgramFiles ?? 'C:\\Program Files','Google','Chrome','Application','chrome.exe');
  chromium=start(chrome,['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--no-proxy-server',`--remote-debugging-port=${cdpPort}`,`--user-data-dir=${profile}`,'about:blank']);
  await waitFor(`http://127.0.0.1:${cdpPort}/json/version`);
  const targets=await(await waitFor(`http://127.0.0.1:${cdpPort}/json/list`)).json();
  cdp=new CdpClient(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await cdp.open();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
  await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:"localStorage.setItem('aks1_has_seen_tour','true')"});
  for(const width of [1440,375]) for(const theme of ['light','dark']) {
    await cdp.send('Emulation.setDeviceMetricsOverride',{width,height:950,deviceScaleFactor:1,mobile:width===375});
    for(const code of courseCodes) for(const tm of meetings(code)) {
      await navigate(cdp,baseUrl+'/course/'+code);
      await evaluate(cdp,`localStorage.setItem('theme',${JSON.stringify(theme)});document.documentElement.classList.toggle('dark',${theme==='dark'})`);
      const range=meetings(code)[0]===9?'TM 9–15':'TM 8–14';
      await waitText(cdp,range);
      await clickText(cdp,range);
      const clicked=await evaluate(cdp,`(()=>{const el=document.querySelector('button[aria-label^="Buka TM ${tm}:"]');if(!el)return [...document.querySelectorAll('button')].map(b=>b.textContent.trim()).filter(Boolean).slice(-25);el.click();return true;})()`);
      if(clicked!==true)throw new Error('Material button: '+JSON.stringify(clicked));
      await sleep(500);
      if(['MNK102','MNU108'].includes(code))for(let tries=0;tries<40;tries++){if(await evaluate(cdp,"Boolean(document.querySelector('.layered-self-check'))"))break;await sleep(150);}
      if(code==='MNU108'){
        await evaluate(cdp,"document.querySelectorAll('.layered-pendalaman > button[aria-expanded=\"false\"]').forEach(b=>b.click())");
        await sleep(350);
      }
      await evaluate(cdp,`document.querySelectorAll('details').forEach(d=>d.open=true);document.documentElement.classList.toggle('dark',${theme==='dark'})`);
      await sleep(400);
      const state=await evaluate(cdp,`(()=>{
        const allGraphs=[...document.querySelectorAll('.course-figure-surface svg')].filter(s=>s.querySelector('text')&&s.getBoundingClientRect().width>0);
        const graphs=allGraphs.filter(s=>s.classList.contains('finance-svg'));
        const clipped=[];const tiny=[];
        const bounds=(svg,t)=>{
          const b=t.getBBox(),matrix=svg.getCTM().inverse().multiply(t.getCTM());
          const points=[[b.x,b.y],[b.x+b.width,b.y],[b.x,b.y+b.height],[b.x+b.width,b.y+b.height]].map(([x,y])=>new DOMPoint(x,y).matrixTransform(matrix));
          return {x:Math.min(...points.map(p=>p.x)),y:Math.min(...points.map(p=>p.y)),right:Math.max(...points.map(p=>p.x)),bottom:Math.max(...points.map(p=>p.y))};
        };
        for(const svg of graphs){const box=svg.viewBox.baseVal;const scale=svg.getBoundingClientRect().width/box.width;
          for(const t of svg.querySelectorAll('text')){const b=bounds(svg,t);if(b.x < box.x-1||b.y < box.y-1||b.right>box.x+box.width+1||b.bottom>box.y+box.height+1)clipped.push(t.textContent);
            if(t.closest('[data-testid="mobile-finance-graph"]')&&parseFloat(getComputedStyle(t).fontSize)*scale<12)tiny.push(t.textContent);}}
        const legacyClipped=[];const filledConnectors=[];
        for(const svg of allGraphs.filter(s=>!s.classList.contains('finance-svg'))){const box=svg.viewBox.baseVal;const scale=svg.getBoundingClientRect().width/box.width;
          if(svg.classList.contains('mnu108-post-diagram'))for(const connector of svg.querySelectorAll('path[style*="fill:none"]'))if(getComputedStyle(connector).fill!=='none')filledConnectors.push(connector.getAttribute('d'));
          for(const t of svg.querySelectorAll('text')){const b=bounds(svg,t);if(b.x < box.x-1||b.y < box.y-1||b.right>box.x+box.width+1||b.bottom>box.y+box.height+1)legacyClipped.push(t.textContent);
            if(svg.classList.contains('mnu108-post-diagram')&&parseFloat(getComputedStyle(t).fontSize)*scale<12)tiny.push(t.textContent);}}
        return {overflow:document.documentElement.scrollWidth-innerWidth,graphs:graphs.length,clipped,tiny,legacyGraphs:allGraphs.length-graphs.length,legacyClipped,filledConnectors,mathErrors:document.querySelectorAll('.katex-error').length,mobileGraphs:document.querySelectorAll('[data-testid="mobile-finance-graph"]').length};
      })()`);
      results.push({code,width,theme,tm,...state});
      if(tm===meetings(code).at(-1))console.log(`${code} ${width}px ${theme}: ${results.length} checks completed`);
      fs.writeFileSync(path.join(root,'tmp/source-audit/browser-progress.json'),JSON.stringify(results,null,2));
      const expectedMnu108={9:7,10:12,11:9,12:8,13:12,14:15,15:6};
      if((code==='MNK102'&&state.graphs===0)||(code==='MNU108'&&state.legacyGraphs!==expectedMnu108[tm]*(width===375?2:1))||state.overflow>0||state.clipped.length||state.legacyClipped.length||state.tiny.length||state.filledConnectors.length||state.mathErrors)throw new Error(JSON.stringify(results.at(-1)));
      if(code==='MNU108'&&[11,12,13,14,15].includes(tm)){await evaluate(cdp,tm===12?"[...document.querySelectorAll('.course-figure-surface')].find(f=>f.textContent.includes('Fiedler: pola')).scrollIntoView({block:'start',behavior:'instant'})":"document.querySelector('.course-figure-surface').scrollIntoView({block:'start',behavior:'instant'})");await sleep(200);const shot=await cdp.send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(root,`tmp/source-audit/mnu108/tm${tm}-${width}-${theme}.png`),Buffer.from(shot.data,'base64'));}
      if(code==='MNK102'&&tm===9){await evaluate(cdp,`[...document.querySelectorAll('figure')].find(f=>f.textContent.includes('MM tanpa pajak: biaya klaim')).scrollIntoView({block:'start',behavior:'instant'})`);await sleep(400);const shot=await cdp.send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(root,`tmp/source-audit/mm-${width}-${theme}.png`),Buffer.from(shot.data,'base64'));}
    }
  }
  fs.writeFileSync(path.join(root,process.env.AUDIT_COURSES?'tmp/source-audit/browser-all-courses.json':'tmp/source-audit/browser-results.json'),JSON.stringify(results,null,2));
  console.log('Finance browser PASS: '+results.length+' viewport/theme/meeting combinations; visible SVG labels, math, and overflow checked.');
} finally {cdp?.close();chromium?.kill();preview?.kill();}
