/* global document, window, location, history, getComputedStyle, innerWidth, HTMLInputElement, HTMLSelectElement */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { build } from 'esbuild';

const root = process.cwd();
const base = 'http://127.0.0.1:5187';
const debug = 'http://127.0.0.1:9297';
const evidence = path.join(root, 'qa', 'sia-final');
fs.mkdirSync(evidence, { recursive: true });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const checks = [];
const errors = [];
function check(name, value, detail = undefined) {
  checks.push({ name, pass: Boolean(value), detail });
  if (!value) throw new Error(`${name}: ${JSON.stringify(detail)}`);
}
async function waitHttp(url, timeout = 25000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try { const response = await fetch(url); if (response.ok) return response; } catch { /* retry */ }
    await sleep(200);
  }
  throw new Error(`HTTP timeout ${url}`);
}
class Cdp {
  constructor(url) { this.ws = new WebSocket(url); this.id = 0; this.pending = new Map(); this.listeners = []; }
  async open() {
    await new Promise((resolve, reject) => { this.ws.addEventListener('open', resolve, { once: true }); this.ws.addEventListener('error', reject, { once: true }); });
    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (!message.id) { this.listeners.forEach((listener) => listener(message)); return; }
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => { this.pending.set(id, { resolve, reject }); this.ws.send(JSON.stringify({ id, method, params })); });
  }
  close() { this.ws.close(); }
}
async function evaluate(expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text);
  return result.result.value;
}
const run = (fn, ...args) => evaluate(`(${fn.toString()})(${args.map((arg) => JSON.stringify(arg)).join(',')})`);
async function until(fn, timeout = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const result = await run(fn);
    if (result) return result;
    await sleep(150);
  }
  throw new Error(`UI timeout: ${fn.toString().slice(0, 150)}`);
}
async function navigate(url) {
  await cdp.send('Page.navigate', { url });
  await until(() => document.readyState === 'complete' && Boolean(document.body));
  await run(() => { document.querySelectorAll('button').forEach((button) => { if (button.textContent?.trim() === 'Lewati') button.click(); }); });
  await until(() => Boolean(document.querySelector('nav[aria-label="Navigasi ruang belajar"]'))).catch(async (error) => {
    const state = await run(() => ({ url: location.href, title: document.title, body: document.body.innerText.slice(0, 500) }));
    throw new Error(`${error.message}; ${JSON.stringify(state)}`);
  });
  await sleep(1350);
  await run(() => document.querySelector('.driver-popover-close-btn')?.click());
  await sleep(120);
}
async function screenshot(filename) {
  await sleep(250);
  const shot = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  fs.writeFileSync(path.join(evidence, filename), Buffer.from(shot.data, 'base64'));
}
async function viewport(width) {
  await cdp.send('Emulation.setDeviceMetricsOverride', { width, height: width === 390 ? 844 : 800, deviceScaleFactor: 1, mobile: width === 390 });
}
async function geometry(selector) {
  return run((selectorArg) => {
    const scope = document.querySelector(selectorArg);
    const clipped = scope ? [...scope.querySelectorAll('p,li,h1,h2,h3,h4,button,td,th')].filter((element) => {
      const style = getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden' && element.scrollWidth > element.clientWidth + 3 && ['hidden','clip'].includes(style.overflowX) && style.textOverflow !== 'ellipsis';
    }).slice(0, 8).map((element) => ({ tag: element.tagName, text: element.textContent?.trim().slice(0, 85), width: element.clientWidth, scroll: element.scrollWidth })) : [];
    const tables = scope ? [...scope.querySelectorAll('table')].map((table) => ({ mobileClass: table.classList.contains('sia-responsive-table'), bodyDisplay: getComputedStyle(table.tBodies[0] ?? table).display, labeledCells: [...table.querySelectorAll('tbody td')].filter((cell) => cell.hasAttribute('data-label')).length, cells: table.querySelectorAll('tbody td').length })) : [];
    const diagrams = scope ? [...scope.querySelectorAll('svg.course-diagram-svg')].map((svg) => ({ width: Math.round(svg.getBoundingClientRect().width), parent: Math.round(svg.parentElement.getBoundingClientRect().width) })) : [];
    return { pageOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, viewport: innerWidth, clipped, tables, diagrams };
  }, selector);
}
async function chooseTab(label) {
  const found = await run((name) => {
    const button = [...document.querySelectorAll('nav[aria-label="Navigasi ruang belajar"] button')].find((node) => node.textContent?.replace(/\s+/g, ' ').trim().startsWith(name));
    button?.click(); return Boolean(button);
  }, label);
  check(`tab ${label}`, found, await run(() => [...document.querySelectorAll('nav[aria-label="Navigasi ruang belajar"] button')].map((button) => button.textContent?.replace(/\s+/g, ' ').trim())));
  await sleep(220);
}
async function click(selector) { return run((s) => { const element = document.querySelector(s); element?.click(); return Boolean(element); }, selector); }
async function fill(selector, value) {
  return run((s, next) => {
    const input = document.querySelector(s); if (!input) return false;
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    setter.call(input, next); input.dispatchEvent(new Event('input', { bubbles: true })); return true;
  }, selector, value);
}
const bundled = await build({ entryPoints: [path.join(root, 'src/data/quizzes/siaUtsSupplement.ts')], bundle: true, platform: 'node', format: 'esm', write: false });
const { SIA_UTS_SUPPLEMENT: sampleQuestions } = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);
const byId = new Map(sampleQuestions.map((question) => [question.id, question]));
let server; let chrome; let cdp; let profile;
let serverLog = '';
try {
  server = spawn(process.execPath, [path.join(root, 'node_modules/vite/bin/vite.js'), '--host', '127.0.0.1', '--port', '5187', '--strictPort'], { cwd: root, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
  server.stdout.on('data', (chunk) => { serverLog += chunk.toString(); });
  server.stderr.on('data', (chunk) => { serverLog += chunk.toString(); });
  await waitHttp(base);
  profile = fs.mkdtempSync(path.join(os.tmpdir(), 'sia-final-profile-'));
  chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', ['--headless=new', '--no-sandbox', '--disable-gpu', '--no-proxy-server', '--disable-application-cache', '--remote-debugging-port=9297', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore', windowsHide: true });
  await waitHttp(`${debug}/json/version`);
  const targets = await (await waitHttp(`${debug}/json/list`)).json();
  const page = targets.find((target) => target.type === 'page');
  if (!page?.webSocketDebuggerUrl) throw new Error('Chrome page target missing');
  cdp = new Cdp(page.webSocketDebuggerUrl); await cdp.open();
  cdp.listeners.push((message) => {
    if (message.method === 'Runtime.exceptionThrown') errors.push({ method: message.method, message: message.params.exceptionDetails?.exception?.description ?? message.params.exceptionDetails?.text });
    if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push({ method: message.method, message: message.params.args?.map((arg) => arg.value ?? arg.description).join(' ') });
    if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') errors.push({ method: message.method, message: message.params.entry.text });
  });
  await cdp.send('Page.enable'); await cdp.send('Runtime.enable'); await cdp.send('Log.enable');

  for (const width of [1280, 390]) {
    await viewport(width);
    await navigate(`${base}/course/AKS301`);
    await chooseTab('TM 1–7');
    for (let tm = 1; tm <= 7; tm++) {
      const opened = await run((n) => { const button = document.querySelector(`button[aria-label^="Buka TM ${n}:"]`); button?.click(); return Boolean(button); }, tm);
      check(`${width} material TM${tm} opens`, opened);
      await until(() => Boolean(document.querySelector('.sia-reading-document')));
      await sleep(120);
      const data = await geometry('.sia-reading-document');
      check(`${width} material TM${tm} horizontal layout`, data.pageOverflow <= 1 && data.clipped.length === 0 && data.diagrams.every((diagram) => diagram.width <= diagram.parent + 1), data);
      check(`${width} material TM${tm} tables`, data.tables.every((table) => table.mobileClass && table.labeledCells === table.cells && (width !== 390 || table.bodyDisplay === 'grid')), data.tables);
      if (width === 390 && tm === 4) { await run(() => document.querySelector('.sia-reading-document table')?.scrollIntoView({ block: 'center', behavior: 'instant' })); await screenshot('tm4-table-390.png'); }
      if (width === 390 && tm === 3) {
        const mobileFlow = await run(() => { const flow = document.querySelector('section[aria-label="Alur Starbucks di layar sempit"]'); flow?.scrollIntoView({ block: 'center', behavior: 'instant' }); return Boolean(flow) && getComputedStyle(flow).display !== 'none'; });
        check('390 TM3 diagram mobile flow', mobileFlow);
        await screenshot('tm3-diagram-390.png');
      }
      if (tm < 7) {
        const currentTitle = await run(() => document.querySelector('.reading-document')?.parentElement?.querySelector('h1')?.textContent?.trim());
        const next = await run(() => { const button = [...document.querySelectorAll('footer button')].find((node) => node.textContent?.includes('Berikutnya')); button?.click(); return Boolean(button); });
        check(`${width} material TM${tm} next navigation`, next);
        await sleep(150);
        const nextState = await run(() => ({ tm: history.state?.akuntansihub_tm, title: document.querySelector('.reading-document')?.parentElement?.querySelector('h1')?.textContent?.trim() }));
        check(`${width} material TM${tm} advances to TM${tm + 1}`, nextState.tm === tm + 1 && nextState.title !== currentTitle, nextState);
      }
      const back = await run(() => { const button = document.querySelector('button[aria-label^="Kembali ke daftar materi"]'); button?.click(); return Boolean(button); });
      check(`${width} material TM${tm} back navigation`, back);
      await until(() => Boolean(document.querySelector('button[aria-label^="Buka TM 1:"]'))).catch(async (error) => {
        const state = await run(() => ({ url: location.href, body: document.body.innerText.slice(0, 650), buttons: [...document.querySelectorAll('button')].slice(0, 12).map((button) => button.getAttribute('aria-label') ?? button.textContent?.trim().slice(0, 40)) }));
        throw new Error(`${error.message}; ${JSON.stringify(state)}`);
      });
    }

    await chooseTab('Kuis');
    await until(() => Boolean(document.querySelector('[data-testid="quiz-set-uts"]')));
    check(`${width} UTS set selected`, await run(() => document.querySelector('[data-testid="quiz-set-uts"]')?.textContent?.includes('UTS')));
    await click('[data-testid="quiz-start-exam"]');
    await until(() => document.querySelectorAll('[data-testid="quiz-question-card"]').length === 70);
    const before = await run(() => {
      const cards = [...document.querySelectorAll('[data-testid="quiz-question-card"]')];
      return {
        pageOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        cards: cards.length,
        clipped: cards.flatMap((card) => [...card.querySelectorAll('p,li,button,span,input')].filter((element) => {
          const style = getComputedStyle(element);
          return style.display !== 'none' && style.visibility !== 'hidden' && element.scrollWidth > element.clientWidth + 3 && ['hidden','clip'].includes(style.overflowX) && style.textOverflow !== 'ellipsis';
        }).map((element) => ({ id: card.dataset.questionId, text: element.textContent?.slice(0, 75) }))).slice(0, 10),
      };
    });
    check(`${width} quiz horizontal layout`, before.pageOverflow <= 1 && before.cards === 70 && before.clipped.length === 0, before);
    // Three representative formats from each TM; the displayed option order is shuffled, so match by content.
    let expectedScore = 0;
    for (let tm = 1; tm <= 7; tm++) {
      const single = byId.get(`sia-uts-tm${tm}-06`);
      const multi = byId.get(`sia-uts-tm${tm}-08`);
      const short = byId.get(`sia-uts-tm${tm}-10`);
      check(`sample data TM${tm}`, single && multi && short, { single: single?.id, multi: multi?.id, short: short?.id });
      const picked = await run((id, answerText) => {
        const card = document.querySelector(`[data-question-id="${id}"]`);
        const button = [...(card?.querySelectorAll('button') ?? [])].find((node) => node.textContent?.includes(answerText));
        button?.click(); return Boolean(button);
      }, single.id, single.options[single.answer]);
      check(`${width} TM${tm} single choice`, picked); expectedScore++;
      const multiPicked = await run((id, answers) => {
        const card = document.querySelector(`[data-question-id="${id}"]`);
        if (!card) return 0;
        const buttons = [...card.querySelectorAll('button')];
        answers.forEach((answer) => buttons.find((node) => node.textContent?.includes(answer))?.click());
        return answers.filter((answer) => buttons.some((node) => node.textContent?.includes(answer))).length;
      }, multi.id, multi.answers.map((index) => multi.options[index]));
      check(`${width} TM${tm} multi choice`, multiPicked === multi.answers.length, multiPicked); expectedScore++;
      const notGraded = await run((id) => { const card = document.querySelector(`[data-question-id="${id}"]`); return Boolean(card) && !card.textContent?.includes('Pembahasan:') && !card.textContent?.includes('Jawaban benar') && !card.textContent?.includes('Perlu ditinjau'); }, multi.id);
      check(`${width} TM${tm} multi deferred grading`, notGraded);
      const variant = [short.answers[0].toUpperCase() + '!', `  ${short.answers.at(-1)}  `, short.answers[0].replaceAll(' ', '   ')][(tm - 1) % 3];
      check(`${width} TM${tm} short entry`, await fill(`[data-question-id="${short.id}"] input`, variant), variant); expectedScore++;
      if (width === 390 && tm === 4) { await run((id) => document.querySelector(`[data-question-id="${id}"]`)?.scrollIntoView({ block: 'center', behavior: 'instant' }), multi.id); await screenshot('quiz-multi-390.png'); }
    }
    await sleep(200);
    check(`${width} quiz answered count`, await run(() => document.querySelector('[data-testid="quiz-exam-summary"]')?.textContent?.includes('Terjawab 21 dari 70')), await run(() => document.querySelector('[data-testid="quiz-exam-summary"]')?.textContent?.slice(0, 130)));
    check(`${width} question navigation toggle`, await click('button[aria-label="Toggle Navigation"]'));
    const nav = await run(() => { const button = document.querySelector('[data-testid="quiz-nav-68"]'); button?.click(); return Boolean(button) && !document.querySelector('[data-testid="quiz-navigation"]')?.parentElement?.className.includes('pointer-events-none'); });
    check(`${width} question navigation`, nav);
    await run(() => { window.confirm = () => true; });
    await click('[data-testid="quiz-submit-exam"]');
    await until(() => Boolean(document.querySelector('[data-testid="quiz-result"]')));
    const result = await run(() => ({ text: document.querySelector('[data-testid="quiz-result"]')?.textContent, correct: document.querySelectorAll('[data-testid="quiz-question-card"] .text-success').length, explanations: [...document.querySelectorAll('[data-testid="quiz-question-card"]')].filter((card) => card.textContent?.includes('Pembahasan:')).length }));
    check(`${width} quiz score and explanations`, result.text.includes(`${expectedScore} / 70`) && result.explanations === 70, result);
    await click('[data-testid="quiz-filter-correct"]');
    check(`${width} correct filter`, await run(() => document.querySelectorAll('[data-testid="quiz-question-card"]').length === 21));
    await click('[data-testid="quiz-filter-wrong"]');
    check(`${width} wrong filter`, await run(() => document.querySelectorAll('[data-testid="quiz-question-card"]').length === 49));
    await click('[data-testid="quiz-filter-all"]');
    check(`${width} all filter`, await run(() => document.querySelectorAll('[data-testid="quiz-question-card"]').length === 70));
    await click('[data-testid="quiz-reset-exam"]');
    await until(() => Boolean(document.querySelector('[data-testid="quiz-start-exam"]')));
    check(`${width} quiz reset`, await run(() => !document.querySelector('[data-testid="quiz-result"]') && document.querySelector('[data-testid="quiz-exam-summary"]')?.textContent?.includes('Terjawab 0 dari 70')));

    await chooseTab('Flashcard');
    await until(() => Boolean(document.querySelector('.flashcard-gacha-stage')));
    const phaseIndex = await run(() => [...document.querySelectorAll('select')].findIndex((select) => [...select.options].some((option) => option.value === 'pra-uts')));
    const selectCount = await run(() => document.querySelectorAll('select').length);
    check(`${width} flashcard phase filter exists`, phaseIndex >= 0, { phaseIndex, selectCount });
    const changeFilter = async (index, value) => run((i, next) => { const select = document.querySelectorAll('select')[i]; if (!select) return false; const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set; setter.call(select, next); select.dispatchEvent(new Event('change', { bubbles: true })); return select.value === next; }, index, value);
    await changeFilter(phaseIndex, 'pra-uts'); await sleep(150);
    check(`${width} flashcard Pra-UTS total`, await run(() => document.body.textContent.includes('Deck aktif: 63 kartu')));
    for (let tm = 1; tm <= 7; tm++) {
      check(`${width} flashcard TM${tm} filter`, await changeFilter(phaseIndex + 1, String(tm)));
      await sleep(100);
      const state = await run(() => {
        const active = document.querySelector('.flashcard-gacha-card-shell[aria-hidden="false"]');
        const clipped = active ? [...active.querySelectorAll('p,button')].filter((element) => element.scrollWidth > element.clientWidth + 3 && getComputedStyle(element).textOverflow !== 'ellipsis').map((element) => element.textContent?.slice(0, 70)) : [];
        return { count: document.body.textContent.includes('Deck aktif: 9 kartu'), card: active?.querySelector('[role="button"]')?.getAttribute('aria-pressed'), overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, clipped };
      });
      check(`${width} flashcard TM${tm} deck/layout`, state.count && state.overflow <= 1 && state.clipped.length === 0, state);
      const flip = await run(() => { const card = document.querySelector('.flashcard-gacha-card-shell[aria-hidden="false"] [role="button"]'); card?.click(); return Boolean(card); });
      check(`${width} flashcard TM${tm} flip`, flip && await run(() => document.querySelector('.flashcard-gacha-card-shell[aria-hidden="false"] [role="button"]')?.getAttribute('aria-pressed') === 'true'));
      if (width === 390 && tm === 4) { await run(() => document.querySelector('.flashcard-gacha-stage')?.scrollIntoView({ block: 'center', behavior: 'instant' })); await screenshot('flashcard-390.png'); }
      await click('button[aria-label="Kartu berikutnya"]');
      check(`${width} flashcard TM${tm} next`, await run(() => document.querySelector('.flashcard-gacha-stage')?.textContent?.includes('2 / 9')));
      await click('button[aria-label="Kartu sebelumnya"]');
      check(`${width} flashcard TM${tm} previous`, await run(() => document.querySelector('.flashcard-gacha-stage')?.textContent?.includes('1 / 9')));
    }
    await changeFilter(phaseIndex + 1, 'all');
    check(`${width} flashcard TM reset`, await run(() => document.body.textContent.includes('Deck aktif: 63 kartu')));
  }

  // A second course exercises the same global QuizView and scoring path.
  await viewport(390);
  await navigate(`${base}/course/AKM202`);
  await chooseTab('Kuis');
  await until(() => Boolean(document.querySelector('[data-testid="quiz-start-exam"]')));
  await click('[data-testid="quiz-start-exam"]');
  await until(() => Boolean(document.querySelector('[data-testid="quiz-question-card"]')));
  const other = await run(() => {
    const card = document.querySelector('[data-testid="quiz-question-card"]');
    const button = [...(card?.querySelectorAll('button') ?? [])].find((candidate) => candidate.textContent?.includes('fokus pada kebutuhan internal manajemen'));
    button?.click(); return Boolean(button);
  });
  check('other course quiz answer', other);
  check('other course answer counted', await run(() => /Terjawab\s+1\s+dari/.test(document.querySelector('[data-testid="quiz-exam-summary"]')?.textContent ?? '')));
  await run(() => { window.confirm = () => true; });
  await click('[data-testid="quiz-submit-exam"]');
  await until(() => Boolean(document.querySelector('[data-testid="quiz-result"]')));
  check('other course quiz result', await run(() => Boolean(document.querySelector('[data-testid="quiz-result"]')?.textContent?.match(/1 \/ \d+/))));
  const appErrors = errors.filter((entry) => entry.method !== 'Log.entryAdded' || !/ERR_NAME_NOT_RESOLVED|placeholder\.supabase\.co/.test(entry.message));
  check('browser application console', appErrors.length === 0, appErrors);
  console.log(JSON.stringify({ status: 'PASS', checks: checks.length, errors: { application: appErrors, externalNetwork: errors.length - appErrors.length }, screenshots: fs.readdirSync(evidence).filter((name) => name.endsWith('.png')) }, null, 2));
} catch (error) {
  console.error(JSON.stringify({ status: 'FAIL', message: error.message, checks: checks.length, recent: checks.slice(-3).map((item) => ({ ...item, detail: JSON.stringify(item.detail)?.slice(0, 500) })), serverExitCode: server?.exitCode, serverLog: serverLog.slice(-1000), errors: errors.slice(0, 5) }, null, 2));
  process.exitCode = 1;
} finally {
  cdp?.close(); chrome?.kill(); server?.kill();
  await sleep(500);
  if (profile && path.resolve(profile).startsWith(path.resolve(os.tmpdir()) + path.sep)) {
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 8, retryDelay: 200 }); } catch { /* Chrome can retain a lock briefly on Windows */ }
  }
}
