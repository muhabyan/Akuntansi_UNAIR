// AKA201 reading navigation: Esc on a layered reading does what its back button does (but never while typing, or
// with a dialog, menu or Zen view open), and every TM or "Persiapan UTS" page gets its own history entry, so the
// phone's back button returns to the course page. Renders the real CourseLayout with the real AKA201 content.
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

const TM01 = 'Mengapa Audit Ada: Asurans, Auditing, dan Jenis Auditor';
const PANDUAN = 'Panduan Menjawab Soal Kasus PBR I';

let server;
let cacheDir;
let root;
const act = (callback) => globalThis.__act(callback);
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'aka201-nav-vite-cache-'));
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/AKA201' });
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

  // React is loaded after the DOM globals exist, so it attaches real input events (not the old-IE fallback).
  const { default: React, act } = await import('react');
  const { createRoot } = await import('react-dom/client');
  globalThis.__act = act;

  server = await createServer({
    root: process.cwd(),
    cacheDir,
    appType: 'custom',
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'silent',
  });
  const [{ default: CourseLayout }, { SEMESTERS }, { escapeShouldGoBack }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/components/course/escapeToBack.ts'),
  ]);
  const course = SEMESTERS.flatMap((semester) => semester.groups.flatMap((group) => group.courses)).find((candidate) => candidate.code === 'AKA201');
  check(Boolean(course), 'AKA201 is in the catalog');

  const { document, history } = window;
  const settle = (ms = 30) => act(async () => { await new Promise((resolve) => setTimeout(resolve, ms)); });
  const waitFor = async (predicate, label, timeout = 8000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      if (predicate()) return true;
      await settle(40);
    }
    failures.push(`timed out waiting for ${label}`);
    return false;
  };
  const readingTitle = () => document.querySelector('.reading-document') ? document.querySelector('h1')?.textContent.trim() ?? '' : null;
  const onList = () => !document.querySelector('.reading-document') && [...document.querySelectorAll('button')].some((b) => b.textContent.includes(TM01));
  const click = async (element) => {
    if (!element) throw new Error('click target missing');
    await act(async () => {
      element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
      await new Promise((resolve) => setTimeout(resolve, 30));
    });
  };
  const openFromList = async (title) => {
    await click([...document.querySelectorAll('button')].find((b) => b.textContent.includes(title)));
    return waitFor(() => readingTitle()?.includes(title), `reading "${title}" to open`);
  };
  const pressEscape = async (target = document.activeElement ?? document.body) => {
    const event = new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    await act(async () => {
      target.dispatchEvent(event);
      await new Promise((resolve) => setTimeout(resolve, 60));
    });
    await settle(60); // history.back() fires popstate asynchronously
    return event;
  };
  const back = async () => {
    await act(async () => { history.back(); await new Promise((resolve) => setTimeout(resolve, 60)); });
    await settle(60);
  };
  const render = async (props) => {
    if (root) await act(async () => root.unmount());
    root = createRoot(document.getElementById('root'));
    await act(async () => {
      root.render(React.createElement(CourseLayout, { course, initialTab: 'tm1-7', initialTm: null, onBack() {}, ...props }));
    });
    return waitFor(() => onList() || Boolean(readingTitle()), 'the course page to load');
  };

  if (course) {
    // --- history: TM and prep pages opened from the course page ---
    // Each case starts from a marked entry standing for the course page (App pushes /course/AKA201 when a course
    // opens); Back must land exactly there, which only happens if opening the page pushed an entry of its own.
    const markCoursePage = (name) => history.pushState({ testEntry: name }, '', '/course/AKA201');
    await render();
    markCoursePage('list-tm');
    await openFromList(TM01);
    check(history.state?.akuntansihub_tm === 1, 'Opening a TM pushes a TM history entry', JSON.stringify(history.state));
    await back();
    check(onList(), 'Back from a TM returns to the course page', `reading: ${readingTitle()}`);
    check(history.state?.testEntry === 'list-tm' && window.location.pathname === '/course/AKA201', 'Back from a TM lands on the course page entry', JSON.stringify(history.state));

    markCoursePage('list-prep');
    await openFromList(PANDUAN);
    check(history.state?.akuntansihub_review === 'prep:panduan-menjawab-kasus', 'Opening a Persiapan UTS page pushes its own history entry', JSON.stringify(history.state));
    await back();
    check(onList(), 'Back from a Persiapan UTS page returns to the course page', `reading: ${readingTitle()}`);
    check(history.state?.testEntry === 'list-prep', 'Back from a Persiapan UTS page lands on the course page entry', JSON.stringify(history.state));

    // --- history: a TM opened from outside the course page (home schedule -> initialTm) ---
    markCoursePage('outside');
    await render({ initialTm: 1 });
    check(readingTitle()?.includes(TM01), 'A TM passed in from outside opens directly');
    check(history.state?.akuntansihub_tm === 1, 'A TM opened from outside the course page also pushes a TM history entry', JSON.stringify(history.state));
    await back();
    check(onList(), 'Back from a TM opened from outside returns to the course page, not the previous site page', `reading: ${readingTitle()}`);
    check(history.state?.testEntry === 'outside', 'That Back lands on the course page entry', JSON.stringify(history.state));

    // --- Esc ---
    await render();
    await openFromList(TM01);
    await pressEscape(document.body);
    check(onList(), 'Esc on a layered TM does what the back button does', `reading: ${readingTitle()}`);

    await openFromList(PANDUAN);
    await pressEscape(document.body);
    check(onList(), 'Esc on a layered Persiapan UTS page goes back too', `reading: ${readingTitle()}`);

    await openFromList(TM01);
    const textarea = document.querySelector('.layered-self-check textarea');
    check(Boolean(textarea), 'TM01 has a write-first answer box');
    if (textarea) {
      textarea.focus();
      const event = await pressEscape(textarea);
      check(readingTitle()?.includes(TM01), 'Esc while typing in the answer box does not leave the page', `reading: ${readingTitle()}`);
      check(!event.defaultPrevented, 'Esc while typing is left to the text box');
      textarea.blur();
    }

    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    await pressEscape(input);
    check(readingTitle()?.includes(TM01), 'Esc while an input is focused does not leave the page');
    input.remove();

    const modal = document.createElement('div');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    document.body.appendChild(modal);
    await pressEscape(document.body);
    check(readingTitle()?.includes(TM01), 'Esc while a modal is open does not leave the page');
    modal.remove();

    await click(document.querySelector('button[aria-controls="reading-outline-mobile-dialog"]'));
    check(Boolean(document.querySelector('[data-reading-outline-menu]')), 'The phone outline sheet opens');
    await pressEscape(document.body);
    check(readingTitle()?.includes(TM01) && !document.querySelector('[data-reading-outline-menu]'), 'Esc with the outline sheet open only closes the sheet', `reading: ${readingTitle()}`);

    document.body.classList.add('zen-mode-active');
    await pressEscape(document.body);
    check(readingTitle()?.includes(TM01), 'Esc in Zen mode does not leave the page');
    document.body.classList.remove('zen-mode-active');

    Object.defineProperty(document, 'fullscreenElement', { value: document.body, configurable: true });
    await pressEscape(document.body);
    check(readingTitle()?.includes(TM01), 'Esc in a fullscreen view does not leave the page');
    delete document.fullscreenElement;

    await pressEscape(document.body);
    check(onList(), 'Esc works again once nothing else claims it', `reading: ${readingTitle()}`);

    const handled = new window.KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    handled.preventDefault();
    check(!escapeShouldGoBack(handled, document), 'An Esc another handler already used is ignored');
    check(!escapeShouldGoBack(new window.KeyboardEvent('keydown', { key: 'Enter' }), document), 'Other keys are ignored');
  }
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
