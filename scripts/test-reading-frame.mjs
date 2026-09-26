// Shared reading frame (src/components/course/readingFrame.ts): layered readings (AKA201) and PJK301 keep their text
// clear of the floating launchers between 768 and 1375px and stack their tables below 1024px. Renders the real
// CourseLayout with real course data in jsdom (which has no layout), so it checks the contract the browser relies on:
// the frame class on the reading layout, the CSS rules keyed to it, and a stacked view next to every desktop table
// that keeps every header, cell and caption. A course outside the frame must not change.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

// --- CSS: the two inset rules exist, are keyed to the frame class and cover the agreed widths ---
const css = fs.readFileSync('src/index.css', 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const rule = (min, max, prop) => new RegExp(String.raw`@media\s*\(min-width:\s*${min}px\)\s*and\s*\(max-width:\s*${max}px\)\s*\{\s*\.reading-layout--shared-frame\s*>\s*article\s*\{\s*${prop}:\s*3\.5rem;?\s*\}\s*\}`);
check(rule(768, 1375, 'padding-left').test(css), 'CSS: left inset 3.5rem on the frame between 768 and 1375px');
check(rule(768, 1023, 'padding-right').test(css), 'CSS: right inset 3.5rem on the frame between 768 and 1023px');
check(!/:has\(\.layered-section\)\s*>\s*article\s*\{\s*padding-(left|right)/.test(css), 'CSS: the insets are no longer tied to AKA201 layered sections only');
check(/\.reading-layout--shared-frame\s+\.course-solution-surface\s+\.akbi-table-scroll\s*>\s*table\s*(,[^{]*)?\{\s*min-width:\s*max\(100%,\s*40rem\)/.test(css), 'CSS: a table in a pembahasan box in the frame may shrink to 40rem (fits at 1024px)');

let server;
let cacheDir;
let root;
const act = (callback) => globalThis.__act(callback);
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'reading-frame-vite-cache-'));
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/PJK301' });
  const { window } = dom;
  for (const key of [
    'window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'FocusEvent', 'KeyboardEvent', 'MouseEvent', 'PopStateEvent',
    'localStorage', 'sessionStorage', 'MutationObserver', 'Element', 'HTMLButtonElement', 'HTMLAnchorElement', 'CustomEvent',
  ]) globalThis[key] = window[key];
  Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
  globalThis.getComputedStyle = window.getComputedStyle.bind(window);
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  class NoopObserver { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  window.IntersectionObserver = globalThis.IntersectionObserver = NoopObserver;
  window.ResizeObserver = globalThis.ResizeObserver = NoopObserver;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));

  const { default: React, act: reactAct } = await import('react');
  const { createRoot } = await import('react-dom/client');
  globalThis.__act = reactAct;
  server = await createServer({ root: process.cwd(), cacheDir, appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true }, logLevel: 'silent' });
  const [{ default: CourseLayout }, { SEMESTERS }, { loadCourseContent }, { default: CourseBlockCard }, frame] = await Promise.all([
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/data/courses/courseRegistry.ts'),
    server.ssrLoadModule('/src/components/course/CourseBlockCard.tsx'),
    server.ssrLoadModule('/src/components/course/readingFrame.ts'),
  ]);
  const courses = SEMESTERS.flatMap((semester) => semester.groups.flatMap((group) => group.courses));
  const course = (code) => courses.find((candidate) => candidate.code === code);
  const { document } = window;
  const settle = (ms = 40) => act(async () => { await new Promise((resolve) => setTimeout(resolve, ms)); });
  const waitFor = async (predicate, label, timeout = 10000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) { if (predicate()) return true; await settle(); }
    failures.push(`timed out waiting for ${label}`);
    return false;
  };
  const decodeEntities = (text) => { const box = document.createElement('textarea'); box.innerHTML = text; return box.value; };
  const squash = (text) => String(text).replace(/[*_`#>|\\]/g, '').replace(/\$[^$]*\$/g, '').replace(/\s+/g, '');

  check(frame.SHARED_FRAME_COURSES.has('PJK301'), 'PJK301 opts into the shared frame');
  check(frame.usesSharedFrame({ layout: 'layered' }, 'ANY'), 'Every layered reading uses the shared frame');
  check(!frame.usesSharedFrame({}, 'SII306'), 'Other readings keep their layout');

  // --- Real course pages: frame class and one stacked view per table ---
  const openReading = async (code, tm) => {
    if (root) await act(async () => root.unmount());
    root = createRoot(document.getElementById('root'));
    await act(async () => { root.render(React.createElement(CourseLayout, { course: course(code), initialTab: 'tm1-7', initialTm: tm, onBack() {} })); });
    return waitFor(() => Boolean(document.querySelector('.reading-document')), `${code} TM${tm} to open`);
  };
  const layoutState = () => {
    const layout = document.querySelector('.reading-layout');
    const tables = [...document.querySelectorAll('.reading-document table')];
    return {
      frame: layout?.classList.contains(frame.SHARED_FRAME_CLASS) ?? false,
      tables: tables.length,
      desktopHiddenBelowLg: tables.filter((t) => t.closest('.hidden.lg\\:block')).length,
      stacked: document.querySelectorAll('.layered-stacked-table').length,
      stackedHiddenFromLg: [...document.querySelectorAll('.layered-stacked-table')].filter((s) => s.closest('.lg\\:hidden')).length,
    };
  };
  for (const [code, tm] of [['AKA201', 1], ['PJK301', 1], ['PJK301', 8], ['PJK301', 14]]) {
    if (!(await openReading(code, tm))) continue;
    await settle(80);
    const state = layoutState();
    const at = `${code} TM${tm}`;
    check(state.frame, `${at}: reading layout carries the shared frame class`);
    check(state.tables > 0 || code === 'PJK301', `${at}: has tables to check`, JSON.stringify(state));
    check(state.desktopHiddenBelowLg === state.tables, `${at}: every desktop table is hidden below 1024px`, JSON.stringify(state));
    check(state.stacked === state.tables && state.stackedHiddenFromLg === state.stacked, `${at}: every table has a stacked view, hidden from 1024px`, JSON.stringify(state));
  }
  if (await openReading('SII306', 1)) {
    await settle(80);
    const state = layoutState();
    check(!state.frame && state.stacked === 0, 'SII306 (outside the frame): no frame class and no stacked tables', JSON.stringify(state));
  }

  // --- Stacked view keeps all table text: every PJK301 table, headers, cells and caption ---
  const pjk = await loadCourseContent('PJK301');
  const tables = [];
  const collect = (blocks, inBox) => blocks.forEach((block) => {
    if (block.kind === 'table') tables.push({ block, inBox });
    for (const nested of [block.blocks, block.answer]) if (Array.isArray(nested)) collect(nested, inBox || block.kind === 'solution-reveal');
  });
  Object.values(pjk.readings).forEach((reading) => collect(reading.blocks, false));
  check(tables.length >= 50, 'PJK301 tables found in all TMs', String(tables.length));
  const host = document.createElement('div');
  document.body.appendChild(host);
  const tableRoot = createRoot(host);
  let lost = 0;
  const examples = [];
  for (const { block } of tables) {
    await act(async () => {
      tableRoot.render(React.createElement(frame.SharedFrameContext.Provider, { value: true }, React.createElement(CourseBlockCard, { block, enableLegalStyling: true, enableEditorialReading: true })));
    });
    const stacked = host.querySelector('.layered-stacked-table')?.parentElement;
    const text = squash(stacked?.textContent ?? '');
    for (const raw of [...block.headers, ...block.rows.flat(), block.caption ?? '']) {
      const piece = decodeEntities(raw); // e.g. &le; renders as ≤
      if (squash(piece) && !text.includes(squash(piece))) { lost += 1; if (examples.length < 3) examples.push(piece.slice(0, 50)); }
    }
  }
  check(lost === 0, 'PJK301 stacked tables keep every header, cell and caption', `${lost} missing, e.g. ${JSON.stringify(examples)}`);
  await act(async () => tableRoot.unmount());
} catch (error) {
  failures.push(`crashed: ${error?.stack ?? error}`);
} finally {
  try { if (root) await act(async () => root.unmount()); } catch { /* ignore */ }
  if (server) await server.close();
  if (cacheDir) fs.rmSync(cacheDir, { recursive: true, force: true });
}

const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
process.exit(result.pass ? 0 : 1);
