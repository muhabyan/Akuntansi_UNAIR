// Page offsets below the fixed site header (docs/layout-top-gap.md).
// 1. Daftar Isi and other "#" links scroll to their target and keep the reading open: a fragment navigation fires
//    popstate, which App and CourseLayout read as Back. Renders the real CourseLayout (AKA201 layered, PJK301) in jsdom,
//    once without the handler (the page must close, or this test no longer sees the bug) and once with it.
// 2. Source guard: tablet/desktop offsets follow the header height (CSS variables) instead of fixed numbers, and the
//    "Keluar Zen" button is portalled so "fixed" is relative to the window. The home hero is the exception: from 1024px
//    it fills the first screen below the header instead of starting 34px below it.
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
const read = (file) => fs.readFileSync(path.join(process.cwd(), file), 'utf8');

// --- 2. source guard ---
const app = read('src/App.tsx');
check(app.includes("'pt-24 md:pt-[var(--page-top)]' : 'pt-[10.25rem] md:pt-[var(--page-top)]'"), '<main> uses --page-top from 768px and keeps the phone offsets');
check(app.includes('installInPageAnchorHandler()'), 'App installs the in-page link handler');
const css = read('src/index.css');
check(/--site-header-rest-h: calc\(4\.375rem \+ env\(safe-area-inset-top\)\)/.test(css), 'index.css: resting header height from 768px (70px)');
check(/min-width: 1024px\) and \(max-width: 1279\.98px\)[\s\S]{0,80}--site-header-rest-h: calc\(7\.5rem/.test(css), 'index.css: resting header height at 1024-1279px (120px, search on a second row)');
check(/--page-top: calc\(var\(--site-header-rest-h\) \+ var\(--page-top-gap\)\)/.test(css), 'index.css: --page-top = header + gap');
check(/scroll-padding-top: calc\(var\(--site-header-h\) \+ 1\.5rem\)/.test(css), 'index.css: # jumps land below the live header height');
check(!/\.zen-mode-active main \{/.test(css), 'Zen mode no longer pads every <main> (it pulled the reading above the window)');
check(css.includes('.zen-mode-active .reading-shell { margin-top: 0 !important; }'), 'Zen mode drops the reading wrapper pull');
// Home hero: phones keep 82svh, 768-1023px starts at --page-top - 0.5rem, from 1024px it fills the window below the
// header (so "Lanjutkan belajar" starts below the fold) with the text centred slightly above the middle.
const home = read('src/components/HomeView.tsx');
const heroMatch = home.match(/<section className="([^"]*)">\s*(?:\{\/\*[^]*?\*\/\}\s*)?<Aks1Logo3D \/>/);
const hero = new Set((heroMatch?.[1] ?? '').split(/\s+/));
const heroContent = new Set((home.match(/className="(mobile-home-hero-content[^"]*)"/)?.[1] ?? '').split(/\s+/));
check(Boolean(heroMatch), 'Home hero section with the decorative logo is found');
check(['min-h-[82svh]', 'justify-center', 'pt-[calc(4.25rem+env(safe-area-inset-top))]'].every((c) => hero.has(c)), 'Home hero on phones is unchanged (82svh, centred)');
check(['md:min-h-0', 'md:justify-start', 'md:pt-[calc(var(--page-top)-0.5rem)]'].every((c) => hero.has(c)), 'Home hero at 768-1023px keeps the PR #28 page-top offset');
check(hero.has('lg:min-h-[100svh]') && hero.has('lg:pt-[var(--site-header-rest-h)]'), 'Home hero from 1024px fills the viewport: header height + the rest of the window (100svh)');
check(hero.has('lg:justify-center') && hero.has('lg:pb-[8svh]') && heroContent.has('lg:py-0'), 'Home hero text from 1024px is centred, 4svh above the middle');
check(!hero.has('lg:pt-[var(--page-top)]'), 'Home hero from 1024px no longer uses the 34px page-top rule');
const navbar = read('src/components/Navbar.tsx');
check(navbar.includes("setProperty('--site-header-h'") && navbar.includes("box: 'border-box'"), 'Navbar publishes its live border-box height');
const layout = read('src/components/course/CourseLayout.tsx');
check(layout.includes('md:top-[calc(var(--site-header-h)+0.375rem)]') && !layout.includes('md:top-[4.75rem]'), 'Daftar Isi bar sticks below the live header height');
check((layout.match(/scroll-mt-40 md:scroll-mt-\[3\.75rem\]/g) ?? []).length === 2, 'Reading anchors keep room for the Daftar Isi bar from 768px');
check(layout.includes("'reading-shell -mt-16 max-w-[80rem] px-4 md:mt-0'"), 'Reading wrapper keeps -4rem on phones only');
const outline = read('src/components/course/ReadingOutline.tsx');
check(outline.includes('sticky top-[calc(var(--site-header-h)+1.625rem)]') && !outline.includes('sticky top-24'), 'Desktop Daftar Isi column sticks below the live header height');
for (const file of ['src/components/AkbiManagementReportsView.tsx', 'src/components/Akm1FinancialReportsView.tsx']) {
  const source = read(file);
  check(source.includes('lg:top-[calc(var(--site-header-h)+1.625rem)]') && !source.includes('lg:top-24'), `${path.basename(file)}: side panel sticks below the live header height`);
}
const header = read('src/components/course/CourseHeader.tsx');
check(/zenMode && createPortal\(/.test(header), '"Keluar Zen" is portalled to <body>');

// --- 1. # links in the real reading page ---
let server;
let cacheDir;
let root;
const act = (callback) => globalThis.__act(callback);
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'page-offsets-vite-cache-'));
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
  const scrolled = [];
  window.HTMLElement.prototype.scrollIntoView = function scrollIntoView(options) { scrolled.push({ id: this.id, options }); };
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));

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
  const [{ default: CourseLayout }, { SEMESTERS }, { installInPageAnchorHandler }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/utils/inPageAnchors.ts'),
  ]);
  const courses = SEMESTERS.flatMap((semester) => semester.groups.flatMap((group) => group.courses));

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
  const readingOpen = () => Boolean(document.querySelector('.reading-document'));
  const click = async (element, init = {}) => {
    const event = new window.MouseEvent('click', { bubbles: true, cancelable: true, ...init });
    await act(async () => {
      element.dispatchEvent(event);
      await new Promise((resolve) => setTimeout(resolve, 30));
    });
    await settle(60); // popstate from a fragment navigation is queued
    return event;
  };
  const render = async (course) => {
    if (root) await act(async () => root.unmount());
    history.replaceState(null, '', `/course/${course.code}`);
    root = createRoot(document.getElementById('root'));
    await act(async () => {
      root.render(React.createElement(CourseLayout, { course, initialTab: 'tm1-7', initialTm: 1, onBack() {} }));
    });
    return waitFor(readingOpen, `${course.code} TM01 to open`);
  };
  const outlineLink = (index) => [...document.querySelectorAll('.reading-outline--desktop a[href^="#"]')][index];

  // Control: without the handler a Daftar Isi click closes the reading (the bug this guards against).
  const aka201 = courses.find((course) => course.code === 'AKA201');
  const pjk301 = courses.find((course) => course.code === 'PJK301');
  check(Boolean(aka201 && pjk301), 'AKA201 and PJK301 are in the catalog');
  if (aka201 && pjk301) {
    await render(aka201);
    await click(outlineLink(3));
    check(!readingOpen(), 'Control: without the handler a Daftar Isi click closes the reading');

    const uninstall = installInPageAnchorHandler(document);
    for (const course of [aka201, pjk301]) {
      await render(course);
      const entries = history.length;
      const link = outlineLink(3);
      const id = link?.getAttribute('href').slice(1);
      scrolled.length = 0;
      const event = await click(link);
      check(event.defaultPrevented, `${course.code}: the Daftar Isi click is handled in the page`);
      check(readingOpen(), `${course.code}: the reading stays open after a Daftar Isi click`);
      check(history.length === entries && window.location.hash === '', `${course.code}: no history entry or hash is added`, `${history.length} vs ${entries}, hash ${window.location.hash}`);
      check(scrolled.length === 1 && scrolled[0].id === id && scrolled[0].options?.block === 'start', `${course.code}: the target section is scrolled to the top of the window`, JSON.stringify(scrolled));
      check(Boolean(document.getElementById(id)?.classList.contains('reading-block-anchor')), `${course.code}: the target carries the reading anchor scroll margin`);

      // Phone sheet: the link closes the sheet and still jumps.
      await click(document.querySelector('button[aria-controls="reading-outline-mobile-dialog"]'));
      const sheetLink = [...document.querySelectorAll('[data-reading-outline-menu] a[href^="#"]')][2];
      const sheetId = sheetLink?.getAttribute('href').slice(1);
      scrolled.length = 0;
      await click(sheetLink);
      check(readingOpen() && !document.querySelector('[data-reading-outline-menu]'), `${course.code}: a Daftar Isi link in the phone sheet closes the sheet and keeps the reading`);
      check(scrolled.some((call) => call.id === sheetId), `${course.code}: the phone sheet link scrolls to its section`, JSON.stringify(scrolled));
    }

    // Edge cases of the handler itself.
    const target = document.createElement('main');
    target.id = 'offsets-test-target';
    target.tabIndex = -1;
    document.body.appendChild(target);
    const link = document.createElement('a');
    link.href = '#offsets-test-target';
    document.body.appendChild(link);
    scrolled.length = 0;
    const plain = await click(link);
    check(plain.defaultPrevented && document.activeElement === target, 'A link to a focusable target (e.g. the skip link to <main>) moves focus there');
    check(!(await click(link, { ctrlKey: true })).defaultPrevented, 'Ctrl/Cmd-click is left to the browser');
    link.target = '_blank';
    check(!(await click(link)).defaultPrevented, 'A link that opens elsewhere is left to the browser');
    link.removeAttribute('target');
    link.href = '#no-such-section';
    check(!(await click(link)).defaultPrevented, 'A # link without a target on the page is left to the browser');
    link.remove();
    target.remove();
    uninstall();
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
