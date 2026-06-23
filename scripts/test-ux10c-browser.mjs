import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { createEnterprisePolicyBlockError, isEnterprisePolicyBlock } from './e2e-policy.mjs';

const root = process.cwd();
const evidenceDir = path.join(root, 'UX1_0C_EVIDENCE', 'browser');
fs.mkdirSync(evidenceDir, { recursive: true });
const host = '127.0.0.1';
const port = 4175;
const debugPort = 9225;
const baseUrl = `http://${host}:${port}`;
const courseUrl = `${baseUrl}/course/AKM201`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function start(command, args) {
  return spawn(command, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
}
async function waitFor(url, timeout = 20_000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeout) {
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
  close() { this.ws.close(); }
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
  while (Date.now() - started < 15_000) {
    const state = await readState(cdp);
    assertNotBlocked(state);
    if (state.url === url && ['interactive', 'complete'].includes(state.ready)) return;
    await sleep(150);
  }
  throw new Error(`Navigation timeout: ${url}`);
}
async function waitForDashboard(cdp) {
  const started = Date.now();
  while (Date.now() - started < 15_000) {
    const state = await readState(cdp);
    assertNotBlocked(state);
    const found = await evaluate(cdp, `Boolean(document.querySelector('.akbi-dashboard-shell'))`);
    if (found) return;
    await sleep(150);
  }
  throw new Error('AKBI dashboard shell did not render');
}
async function openDashboard(cdp) {
  await navigate(cdp, courseUrl);
  await waitForDashboard(cdp);
}

let preview;
let chromium;
let cdp;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10c-chromium-'));
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
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
  ]) {
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width < 768,
    });
    await openDashboard(cdp);
    const state = await evaluate(cdp, `(() => {
      const shell = document.querySelector('.akbi-dashboard-shell');
      const identity = document.querySelector('.akbi-dashboard-identity');
      const next = document.querySelector('.akbi-next-action');
      const nav = document.querySelector('.akbi-primary-nav');
      const labels = [...document.querySelectorAll('.akbi-primary-nav button')].map((node) => node.textContent.trim());
      const rows = [...document.querySelectorAll('.akbi-material-row')].map((node) => Number(node.dataset.tm));
      const rect = (node) => node?.getBoundingClientRect();
      return {
        shell: Boolean(shell),
        labels,
        rows,
        activeCount: document.querySelectorAll('.akbi-primary-nav button[aria-current="page"]').length,
        phaseCount: document.querySelectorAll('input[name="akbi-material-phase"]').length,
        progressCount: document.querySelectorAll('[role="progressbar"]').length,
        featureCardCount: document.querySelectorAll('.course-feature-card').length,
        progressRingCount: document.querySelectorAll('.course-progress-ring').length,
        sidebarCount: document.querySelectorAll('.course-sidebar-panel').length,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        identityBottom: rect(identity)?.bottom ?? Infinity,
        nextBottom: rect(next)?.bottom ?? Infinity,
        navBottom: rect(nav)?.bottom ?? Infinity,
        viewportHeight: innerHeight,
      };
    })()`);
    const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    const filename = `${viewport.width}x${viewport.height}_akbi_dashboard_light.png`;
    fs.writeFileSync(path.join(evidenceDir, filename), Buffer.from(screenshot.data, 'base64'));
    results.push({ viewport, state, screenshot: filename });
    const expectedLabels = ['Materi', 'Flashcard', 'Bank Soal', 'Simulasi', 'Referensi'];
    if (!state.shell || JSON.stringify(state.labels) !== JSON.stringify(expectedLabels)) throw new Error(`${viewport.width}: dashboard/nav mismatch ${JSON.stringify(state)}`);
    if (state.activeCount !== 1 || state.phaseCount !== 2 || state.progressCount !== 1) throw new Error(`${viewport.width}: semantics mismatch ${JSON.stringify(state)}`);
    if (state.rows.length !== 7 || state.rows.some((tm) => tm < 1 || tm > 7)) throw new Error(`${viewport.width}: Pra-UTS rows mismatch ${state.rows}`);
    if (state.featureCardCount || state.progressRingCount || state.sidebarCount || state.overflow > 0) throw new Error(`${viewport.width}: forbidden anatomy/overflow ${JSON.stringify(state)}`);
    if (viewport.width === 390 && (state.identityBottom > state.viewportHeight || state.nextBottom > state.viewportHeight || state.navBottom > state.viewportHeight)) {
      throw new Error(`390x844: identity, next action, and nav are not all visible before content ${JSON.stringify(state)}`);
    }
  }

  await evaluate(cdp, `document.querySelector('input[value="pra_uas"]')?.click()`);
  await sleep(200);
  const uasRows = await evaluate(cdp, `[...document.querySelectorAll('.akbi-material-row')].map((node) => Number(node.dataset.tm))`);
  if (uasRows.length !== 7 || uasRows.some((tm) => tm < 8 || tm > 14)) throw new Error(`Pra-UAS rows mismatch ${uasRows}`);

  const report = { status: 'PASS', viewports: results, uasRows };
  fs.writeFileSync(path.join(evidenceDir, 'UX1_0C_BROWSER.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  const blocked = /ERR_BLOCKED_BY_ADMINISTRATOR|enterprise policy/i.test(message);
  const report = { status: blocked ? 'INCONCLUSIVE' : 'FAIL', reason: message, viewports: results };
  fs.writeFileSync(path.join(evidenceDir, 'UX1_0C_BROWSER.json'), JSON.stringify(report, null, 2));
  console.error(JSON.stringify(report, null, 2));
  process.exitCode = blocked ? 2 : 1;
} finally {
  cdp?.close();
  chromium?.kill('SIGTERM');
  preview?.kill('SIGTERM');
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); } catch { /* no-op */ }
}
