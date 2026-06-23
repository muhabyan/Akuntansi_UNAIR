import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createEnterprisePolicyBlockError, isEnterprisePolicyBlock } from './e2e-policy.mjs';

const root = process.cwd();
const evidenceDir = path.join(root, 'UX1_0B_EVIDENCE', 'browser');
fs.mkdirSync(evidenceDir, { recursive: true });
const host = '127.0.0.1';
const port = 4174;
const debugPort = 9224;
const baseUrl = `http://${host}:${port}`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function start(command, args) {
  return spawn(command, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
}
async function waitFor(url, timeout = 20_000) {
  const startTime = Date.now();
  let lastError;
  while (Date.now() - startTime < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch (error) {
      lastError = error;
    }
    await sleep(200);
  }
  throw new Error(`Timeout waiting for ${url}: ${String(lastError ?? '')}`);
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
      if (!message.id || !this.pending.has(message.id)) return;
      const pending = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() {
    this.ws.close();
  }
}

async function evaluate(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function readState(cdp) {
  return evaluate(cdp, `({ url: location.href, ready: document.readyState, body: document.body?.innerText ?? '' })`);
}
function assertNotBlocked(state) {
  if (isEnterprisePolicyBlock(state)) throw createEnterprisePolicyBlockError(state);
}
async function navigate(cdp, url) {
  const navigation = await cdp.send('Page.navigate', { url });
  assertNotBlocked({ url, errorText: navigation?.errorText });
  const started = Date.now();
  while (Date.now() - started < 12_000) {
    const state = await readState(cdp);
    assertNotBlocked(state);
    if (state.url === url && ['interactive', 'complete'].includes(state.ready)) return;
    await sleep(150);
  }
  throw new Error(`Navigation timeout: ${url}`);
}
async function waitForCatalog(cdp) {
  const started = Date.now();
  while (Date.now() - started < 12_000) {
    const state = await readState(cdp);
    assertNotBlocked(state);
    const found = await evaluate(cdp, `Boolean(document.querySelector('[data-catalog-pilot="semester-2"]'))`);
    if (found) return;
    await sleep(150);
  }
  throw new Error('Semester 2 catalog did not render');
}
async function openCatalog(cdp) {
  await navigate(cdp, `${baseUrl}/`);
  const clicked = await evaluate(cdp, `(() => {
    const button = [...document.querySelectorAll('button')].find((node) => node.textContent.includes('Semester 2'));
    if (!button) return false;
    button.click();
    return true;
  })()`);
  if (!clicked) throw new Error('Semester 2 button not found');
  await waitForCatalog(cdp);
}

let preview;
let chromium;
let cdp;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10b-chromium-'));
const results = [];
try {
  preview = start(process.execPath, [path.join(root, 'node_modules/vite/bin/vite.js'), 'preview', '--host', host, '--port', String(port), '--strictPort']);
  await waitFor(baseUrl);
  chromium = start('/usr/bin/chromium', [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`, 'about:blank',
  ]);
  await waitFor(`http://${host}:${debugPort}/json/version`);
  const targets = await (await waitFor(`http://${host}:${debugPort}/json/list`)).json();
  const page = targets.find((target) => target.type === 'page');
  if (!page?.webSocketDebuggerUrl) throw new Error('Chromium page target missing');
  cdp = new CdpClient(page.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');

  for (const viewport of [
    { width: 390, height: 844, columns: 1 },
    { width: 768, height: 1024, columns: 2 },
    { width: 1024, height: 768, columns: 2 },
    { width: 1280, height: 800, columns: 3 },
    { width: 1440, height: 900, columns: 3 },
  ]) {
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width < 768,
    });
    await openCatalog(cdp);
    const state = await evaluate(cdp, `(() => {
      const grid = document.querySelector('.semester2-catalog__grid');
      const anchors = [...document.querySelectorAll('.semester2-course__link')];
      const columns = getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length;
      return {
        courseCount: anchors.length,
        columns,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        canonicalRoutes: anchors.every((anchor) => anchor.getAttribute('href') === '/course/' + anchor.dataset.courseCode),
        noNestedButtons: anchors.every((anchor) => !anchor.querySelector('button')),
        ctaVisible: anchors.every((anchor) => {
          const cta = anchor.querySelector('.semester2-course__cta');
          const rect = cta?.getBoundingClientRect();
          return Boolean(cta && rect && rect.width > 0 && rect.height > 0 && getComputedStyle(cta).visibility !== 'hidden');
        }),
        titleClampAbsent: [...document.querySelectorAll('.semester2-course h3')].every((title) => getComputedStyle(title).webkitLineClamp === 'none'),
      };
    })()`);
    const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    const filename = `${viewport.width}x${viewport.height}_catalog_light.png`;
    fs.writeFileSync(path.join(evidenceDir, filename), Buffer.from(screenshot.data, 'base64'));
    results.push({ viewport, state, screenshot: filename });
    if (state.courseCount !== 7) throw new Error(`${viewport.width}: course count ${state.courseCount}`);
    if (state.columns !== viewport.columns) throw new Error(`${viewport.width}: columns ${state.columns}, expected ${viewport.columns}`);
    if (state.overflow > 0) throw new Error(`${viewport.width}: horizontal overflow ${state.overflow}px`);
    if (!state.canonicalRoutes || !state.noNestedButtons || !state.ctaVisible || !state.titleClampAbsent) {
      throw new Error(`${viewport.width}: semantic/visibility state failed ${JSON.stringify(state)}`);
    }
  }

  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await openCatalog(cdp);
  await evaluate(cdp, `document.querySelector('.ux-v2-theme-toggle')?.click()`);
  await sleep(250);
  const darkState = await evaluate(cdp, `({
    dark: document.documentElement.classList.contains('dark'),
    canvas: getComputedStyle(document.querySelector('.ux-v2-catalog')).backgroundColor,
    text: getComputedStyle(document.querySelector('.semester2-catalog__header h1')).color,
  })`);
  const darkShot = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync(path.join(evidenceDir, '1440x900_catalog_dark.png'), Buffer.from(darkShot.data, 'base64'));
  if (!darkState.dark) throw new Error('Dark theme toggle did not apply');

  const report = { status: 'PASS', viewports: results, darkState };
  fs.writeFileSync(path.join(evidenceDir, 'UX1_0B_BROWSER.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  const blocked = /ERR_BLOCKED_BY_ADMINISTRATOR|enterprise policy/i.test(message);
  const report = { status: blocked ? 'INCONCLUSIVE' : 'FAIL', reason: message, viewports: results };
  fs.writeFileSync(path.join(evidenceDir, 'UX1_0B_BROWSER.json'), JSON.stringify(report, null, 2));
  console.error(JSON.stringify(report, null, 2));
  process.exitCode = blocked ? 2 : 1;
} finally {
  cdp?.close();
  chromium?.kill('SIGTERM');
  preview?.kill('SIGTERM');
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* Chromium may still release profile files after process termination. */ }
}
