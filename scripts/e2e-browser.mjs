import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createEnterprisePolicyBlockError, isEnterprisePolicyBlock } from './e2e-policy.mjs';

const root = process.cwd();
const host = '127.0.0.1';
const browserHost = '127.0.0.1';
const port = 4173;
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

let preview;
let chromium;
let cdp;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'pjk201-chromium-'));
try {
  preview = start(process.execPath, [path.join(root, 'node_modules/vite/bin/vite.js'), 'preview', '--host', host, '--port', String(port), '--strictPort']);
  await waitFor(baseUrl);

  const malformed = await fetch(`${baseUrl}/course/%E0%A4%A`);
  if (malformed.status !== 400) throw new Error(`Malformed route status ${malformed.status}, expected 400`);

  chromium = start('/usr/bin/chromium', [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    '--remote-debugging-port=9222', `--user-data-dir=${profile}`, 'about:blank',
  ]);
  await waitFor('http://127.0.0.1:9222/json/version');
  const targets = await (await waitFor('http://127.0.0.1:9222/json/list')).json();
  const pageTarget = targets.find((target) => target.type === 'page');
  if (!pageTarget?.webSocketDebuggerUrl) throw new Error('Chromium page target tidak ditemukan');
  cdp = new CdpClient(pageTarget.webSocketDebuggerUrl);
  await cdp.open();
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');

  // EKT109 Bank Soal interaction contract. This scenario runs in environments
  // where Chromium may access the preview URL; React interaction tests cover
  // the same state transitions in Node when enterprise policy blocks browser I/O.
  await navigate(cdp, `${baseUrl}/course/EKT109`);
  await waitText(cdp, 'Pengantar Teori Ekonomi');
  await clickText(cdp, 'Bank Soal Praktik');
  await waitForTestId(cdp, 'pte-bank-results-summary');
  let pteSummary = await testIdState(cdp, 'pte-bank-results-summary');
  if (!/100\s+soal cocok/.test(pteSummary?.text ?? '') || !/halaman\s+1\s+dari\s+10/.test(pteSummary?.text ?? '')) {
    throw new Error(`Initial EKT109 bank summary invalid: ${JSON.stringify(pteSummary)}`);
  }
  let pteCards = await testIdState(cdp, 'pte-bank-question-card');
  if (pteCards?.count !== 10) throw new Error(`Initial EKT109 card count ${pteCards?.count}, expected 10`);

  await selectTestId(cdp, 'pte-bank-phase-filter', 'pra-uts');
  pteSummary = await testIdState(cdp, 'pte-bank-results-summary');
  if (!/36\s+soal cocok/.test(pteSummary?.text ?? '') || !/halaman\s+1\s+dari\s+4/.test(pteSummary?.text ?? '')) {
    throw new Error(`Pra-UTS filter invalid: ${JSON.stringify(pteSummary)}`);
  }
  await clickTestId(cdp, 'pte-bank-next-page');
  pteSummary = await testIdState(cdp, 'pte-bank-results-summary');
  if (!/halaman\s+2\s+dari\s+4/.test(pteSummary?.text ?? '')) throw new Error(`Pra-UTS page navigation invalid: ${JSON.stringify(pteSummary)}`);
  const focusedSummary = await evaluate(cdp, `document.activeElement?.getAttribute('data-testid') === 'pte-bank-results-summary'`);
  if (!focusedSummary) throw new Error('EKT109 result summary did not receive focus after page navigation');

  await selectTestId(cdp, 'pte-bank-phase-filter', 'pra-uas');
  pteSummary = await testIdState(cdp, 'pte-bank-results-summary');
  if (!/64\s+soal cocok/.test(pteSummary?.text ?? '') || !/halaman\s+1\s+dari\s+7/.test(pteSummary?.text ?? '')) {
    throw new Error(`Pra-UAS filter/reset invalid: ${JSON.stringify(pteSummary)}`);
  }

  await selectTestId(cdp, 'pte-bank-phase-filter', 'all');
  await selectTestId(cdp, 'pte-bank-kind-filter', 'short-answer');
  pteSummary = await testIdState(cdp, 'pte-bank-results-summary');
  if (!/10\s+soal cocok/.test(pteSummary?.text ?? '') || !/halaman\s+1\s+dari\s+1/.test(pteSummary?.text ?? '')) {
    throw new Error(`Guided-review filter invalid: ${JSON.stringify(pteSummary)}`);
  }
  let guidedToggle = await testIdState(cdp, 'pte-guided-review-toggle');
  if (!guidedToggle?.disabled) throw new Error('Guided-review toggle must be disabled before draft input');
  await inputTestId(cdp, 'pte-guided-review-draft', 'Jawaban latihan dengan mekanisme ekonomi.');
  guidedToggle = await testIdState(cdp, 'pte-guided-review-toggle');
  if (guidedToggle?.disabled) throw new Error('Guided-review toggle did not enable after draft input');
  await clickTestId(cdp, 'pte-guided-review-toggle');
  await waitForTestId(cdp, 'pte-guided-review-guide');
  const guidedPanel = await testIdState(cdp, 'pte-guided-review-guide');
  if (!guidedPanel?.text.includes('Panduan jawaban')) throw new Error('Guided-review answer guide did not open');

  // EKT109 90-minute simulator contract.
  await clickText(cdp, 'Simulasi UTS & UAS');
  await waitForTestId(cdp, 'quiz-set-uts');
  let simulatorCards = await testIdState(cdp, 'quiz-question-card');
  let simulatorGraphs = await testIdState(cdp, 'quiz-graph-PTE-BANK-UTS-009');
  if (simulatorCards?.count !== 70) throw new Error(`EKT109 UTS card count ${simulatorCards?.count}, expected 70`);
  if (simulatorGraphs?.count !== 1) throw new Error('EKT109 UTS graph fixture missing');
  await clickTestId(cdp, 'quiz-set-uas');
  simulatorCards = await testIdState(cdp, 'quiz-question-card');
  simulatorGraphs = await testIdState(cdp, 'quiz-graph-PTE-BANK-SRC-011');
  if (simulatorCards?.count !== 80) throw new Error(`EKT109 UAS card count ${simulatorCards?.count}, expected 80`);
  if (simulatorGraphs?.count !== 1) throw new Error('EKT109 UAS graph fixture missing');
  await clickTestId(cdp, 'quiz-set-uts');
  await clickTestId(cdp, 'quiz-start-exam');
  await waitForTestId(cdp, 'quiz-mark-1');
  await clickTestId(cdp, 'quiz-mark-1');
  await selectTestId(cdp, 'quiz-order-6-1', 'Permintaan barang meningkat');
  const pteExamState = await evaluate(cdp, `(() => {
    const key = Object.keys(localStorage).find((item) => item.startsWith('exam-session:EKT109:uts:5400:v1'));
    return { key, session: key ? JSON.parse(localStorage.getItem(key)) : null };
  })()`);
  if (!pteExamState.key) throw new Error('Session timer EKT109 UTS tidak tersimpan');
  if (pteExamState.session?.markedForReview?.['0'] !== true) throw new Error('Mark-for-review EKT109 tidak tersimpan');
  if (!Object.values(pteExamState.session?.orderingAnswers ?? {}).includes('Permintaan barang meningkat')) throw new Error('Ordering answer EKT109 tidak tersimpan');
  if (!/^fnv1a-[0-9a-f]{8}$/.test(pteExamState.session?.datasetFingerprint ?? '')) throw new Error('Fingerprint dataset EKT109 UTS tidak tersimpan');

  await navigate(cdp, `${baseUrl}/course/PJK201`);
  await waitText(cdp, 'Perpajakan I');
  await waitText(cdp, 'Kuis Interaktif');

  await clickText(cdp, 'Kuis Interaktif');
  await waitText(cdp, 'Simulasi UAS Perpajakan I');
  await clickText(cdp, 'Simulasi UAS Perpajakan I');
  await waitText(cdp, 'Mulai Ujian');
  await clickText(cdp, 'Mulai Ujian');
  await waitText(cdp, 'Timer');
  const timerState = await evaluate(cdp, `(() => ({ text: document.body.innerText, keys: Object.keys(localStorage) }))()`);
  if (!/01:29:[0-5][0-9]/.test(timerState.text) && !/01:30:00/.test(timerState.text)) throw new Error('Timer 90 menit tidak aktif');
  const examSessionKey = timerState.keys.find((key) => key.startsWith('exam-session:PJK201:uas:5400:v4'));
  if (!examSessionKey) throw new Error('Session timer PJK201 tidak tersimpan di localStorage');
  const startedSession = await evaluate(cdp, `JSON.parse(localStorage.getItem(${JSON.stringify(examSessionKey)}))`);
  if (!/^fnv1a-[0-9a-f]{8}$/.test(startedSession?.datasetFingerprint ?? '')) throw new Error('Fingerprint dataset UAS tidak tersimpan');

  // Simulate an expired, not-yet-submitted session and verify restore writes terminal state.
  await evaluate(cdp, `(() => {
    const key = ${JSON.stringify('${EXAM_KEY}')};
    const current = JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify({ ...current, examStarted: true, submitted: false, autoSubmitted: false, examDeadlineMs: Date.now() - 1000, savedAt: Date.now() - 2000 }));
  })()`.replace('${EXAM_KEY}', examSessionKey));
  await navigate(cdp, `${baseUrl}/course/PJK201`);
  await clickText(cdp, 'Kuis Interaktif');
  await waitText(cdp, 'Simulasi UAS Perpajakan I');
  await clickText(cdp, 'Simulasi UAS Perpajakan I');
  await waitText(cdp, 'Hasil Terkunci');
  const restoredSession = await evaluate(cdp, `JSON.parse(localStorage.getItem(${JSON.stringify(examSessionKey)}))`);
  if (!restoredSession?.submitted || !restoredSession?.autoSubmitted) throw new Error('Expired-session terminal state tidak dipersistenkan');

  await evaluate(cdp, `localStorage.setItem('theme','light')`);
  await navigate(cdp, `${baseUrl}/course/PJK201`);
  const lightMode = await evaluate(cdp, `!document.documentElement.classList.contains('dark')`);
  if (!lightMode) throw new Error('Persistensi theme light gagal');
  await evaluate(cdp, `localStorage.setItem('theme','dark')`);
  await navigate(cdp, `${baseUrl}/course/PJK201`);
  const darkMode = await evaluate(cdp, `document.documentElement.classList.contains('dark')`);
  if (!darkMode) throw new Error('Persistensi theme dark gagal');

  await navigate(cdp, `${baseUrl}/course/UNKNOWN`);
  await waitText(cdp, 'Halaman tidak ditemukan');

  console.log('Browser E2E PASS: EKT109 bank and 90-minute simulator interactions, PJK201 timer restore, route, 404, exam localStorage, dan theme persistence');
} catch (error) {
  if (error?.code === 'E2E_ENVIRONMENT_POLICY_BLOCK' && process.env.ALLOW_E2E_SKIP === '1') {
    console.warn('Browser E2E SKIP (explicitly allowed): Chromium dibatasi kebijakan URL enterprise.');
  } else {
    throw error;
  }
} finally {
  try { cdp?.close(); } catch {
    // Best-effort cleanup; the browser process is terminated below.
  }
  for (const child of [chromium, preview]) {
    if (child && child.exitCode === null) child.kill('SIGTERM');
  }
  await sleep(500);
  for (const child of [chromium, preview]) {
    if (child && child.exitCode === null) child.kill('SIGKILL');
  }
  await sleep(300);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      fs.rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
      break;
    } catch (error) {
      if (attempt === 4) console.warn(`Cleanup warning: ${error.message}`);
      await sleep(200);
    }
  }
}
