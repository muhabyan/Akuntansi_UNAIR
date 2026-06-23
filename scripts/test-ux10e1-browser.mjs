import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { createEnterprisePolicyBlockError, isEnterprisePolicyBlock } from './e2e-policy.mjs';

const root = process.cwd();
const evidenceDir = path.join(root, 'UX1_0E_1_EVIDENCE', 'browser');
fs.mkdirSync(evidenceDir, { recursive: true });
const host = '127.0.0.1';
const port = 4179;
const debugPort = 9229;
const baseUrl = `http://${host}:${port}`;
const courseUrl = `${baseUrl}/course/AKM201?tab=flashcard`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const start = (command, args) => spawn(command, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
async function waitFor(url, timeout = 20_000) {
  const started = Date.now(); let lastError;
  while (Date.now() - started < timeout) {
    try { const response = await fetch(url); if (response.ok) return response; } catch (error) { lastError = error; }
    await sleep(200);
  }
  throw new Error(`Timeout waiting for ${url}: ${String(lastError ?? '')}`);
}
class CdpClient {
  constructor(wsUrl) { this.ws = new WebSocket(wsUrl); this.id = 0; this.pending = new Map(); }
  async open() {
    await new Promise((resolve, reject) => { this.ws.addEventListener('open', resolve, { once: true }); this.ws.addEventListener('error', reject, { once: true }); });
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data); if (!message.id || !this.pending.has(message.id)) return;
      const pending = this.pending.get(message.id); this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message)); else pending.resolve(message.result);
    });
  }
  send(method, params = {}) { const id = ++this.id; return new Promise((resolve, reject) => { this.pending.set(id, { resolve, reject }); this.ws.send(JSON.stringify({ id, method, params })); }); }
  close() { this.ws.close(); }
}
async function evaluate(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text); return result.result.value;
}
async function state(cdp) { return evaluate(cdp, `({url:location.href,ready:document.readyState,body:document.body?.innerText??''})`); }
function assertNotBlocked(value) { if (isEnterprisePolicyBlock(value)) throw createEnterprisePolicyBlockError(value); }
async function navigate(cdp, url) {
  const result = await cdp.send('Page.navigate', { url }); assertNotBlocked({ url, errorText: result?.errorText });
  const started = Date.now();
  while (Date.now() - started < 15_000) { const current = await state(cdp); assertNotBlocked(current); if (current.url === url && ['interactive','complete'].includes(current.ready)) return; await sleep(150); }
  throw new Error(`Navigation timeout: ${url}`);
}
async function waitForSelector(cdp, selector) {
  const started = Date.now();
  while (Date.now() - started < 15_000) { const current = await state(cdp); assertNotBlocked(current); if (await evaluate(cdp, `Boolean(document.querySelector(${JSON.stringify(selector)}))`)) return; await sleep(150); }
  throw new Error(`Selector did not render: ${selector}`);
}

let preview; let chromium; let cdp;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10e1-chromium-'));
const results = [];
try {
  preview = start(process.execPath, [path.join(root, 'node_modules/vite/bin/vite.js'), 'preview', '--host', host, '--port', String(port), '--strictPort']);
  await waitFor(baseUrl);
  chromium = start('/usr/bin/chromium', ['--headless=new','--no-sandbox','--disable-gpu','--disable-dev-shm-usage',`--remote-debugging-port=${debugPort}`,`--user-data-dir=${profile}`,'about:blank']);
  await waitFor(`http://${host}:${debugPort}/json/version`);
  const targets = await (await waitFor(`http://${host}:${debugPort}/json/list`)).json();
  const page = targets.find((target) => target.type === 'page'); if (!page?.webSocketDebuggerUrl) throw new Error('Chromium page target missing');
  cdp = new CdpClient(page.webSocketDebuggerUrl); await cdp.open(); await cdp.send('Page.enable'); await cdp.send('Runtime.enable');

  for (const viewport of [{width:390,height:844},{width:768,height:1024},{width:1280,height:800}]) {
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: viewport.width, height: viewport.height, deviceScaleFactor: 1, mobile: viewport.width < 768 });
    await navigate(cdp, courseUrl); await waitForSelector(cdp, '.akbi-dashboard-shell');
    await evaluate(cdp, `(() => { const button=[...document.querySelectorAll('.akbi-primary-nav button')].find((node)=>node.textContent?.trim()==='Flashcard'); button?.click(); return Boolean(button); })()`);
    await waitForSelector(cdp, '.akbi-flashcard-workspace');
    const flashcard = await evaluate(cdp, `(() => {
      const shell=document.querySelector('.akbi-flashcard-workspace');
      const active=document.querySelector('.flashcard-gacha-card-shell[aria-hidden="false"]');
      const hidden=[...document.querySelectorAll('.flashcard-gacha-card-shell[aria-hidden="true"]')];
      return {
        shell:Boolean(shell),
        variant:document.querySelector('[data-flashcard-variant="akbi"]')?.getAttribute('data-flashcard-variant'),
        active:Boolean(active),
        mastery:Boolean([...document.querySelectorAll('button')].find((node)=>node.textContent?.includes('Tandai dikuasai'))),
        overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,
        hiddenVisible:hidden.filter((node)=>getComputedStyle(node).visibility!=='hidden').length,
      };
    })()`);
    const screenshot = await cdp.send('Page.captureScreenshot', { format:'png', captureBeyondViewport:false });
    const filename = `${viewport.width}x${viewport.height}_akbi_flashcard.png`; fs.writeFileSync(path.join(evidenceDir, filename), Buffer.from(screenshot.data,'base64'));
    results.push({ viewport, flashcard, screenshot: filename });
    if (!flashcard.shell || flashcard.variant !== 'akbi' || !flashcard.active || !flashcard.mastery || flashcard.overflow > 0) throw new Error(`${viewport.width}: flashcard anatomy mismatch ${JSON.stringify(flashcard)}`);
    if (viewport.width < 640 && flashcard.hiddenVisible !== 0) throw new Error(`${viewport.width}: side cards remain visible ${JSON.stringify(flashcard)}`);
  }
  const report = { status:'PASS', viewports:results };
  fs.writeFileSync(path.join(evidenceDir,'UX1_0E_1_BROWSER.json'), JSON.stringify(report,null,2)); console.log(JSON.stringify(report,null,2));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error); const blocked = /ERR_BLOCKED_BY_ADMINISTRATOR|enterprise policy/i.test(message);
  const report = { status: blocked ? 'INCONCLUSIVE':'FAIL', reason:message, viewports:results };
  fs.writeFileSync(path.join(evidenceDir,'UX1_0E_1_BROWSER.json'), JSON.stringify(report,null,2)); console.error(JSON.stringify(report,null,2)); process.exitCode = blocked ? 2 : 1;
} finally {
  cdp?.close(); chromium?.kill('SIGTERM'); preview?.kill('SIGTERM');
  try { fs.rmSync(profile,{recursive:true,force:true,maxRetries:5,retryDelay:100}); } catch { /* no-op */ }
}
