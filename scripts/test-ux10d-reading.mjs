import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10D_ROOT ? path.resolve(process.env.UX10D_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

function nestedCount(blocks, kind) {
  return blocks.reduce((total, block) => {
    const own = block.kind === kind ? 1 : 0;
    if (block.kind === 'example' || block.kind === 'solution-reveal') return total + own + nestedCount(block.blocks, kind);
    return total + own;
  }, 0);
}

if (process.env.UX10D_DYNAMIC_ONLY !== '1') {
  const layoutSource = read('src/components/course/CourseLayout.tsx');
  const shellSource = read('src/components/course/AkbiReadingShell.tsx');
  const blockSource = read('src/components/course/CourseBlockCard.tsx');
  const css = read('src/styles/ux-v2-reading.css');
  const mainSource = read('src/main.tsx');

  check(layoutSource.includes("import AkbiReadingShell from './AkbiReadingShell';"), 'CourseLayout imports the dedicated AKBI reading shell');
  check(layoutSource.includes("course.code === 'AKM201' && currentReading && !isCurrentSimulationReading"), 'Editorial reading shell is isolated to non-simulation AKBI readings');
  check(layoutSource.includes('selectedReviewKey !== null || currentReading.title === \'Simulasi UTS\''), 'Review and simulator readings remain outside the reading redesign');
  check(shellSource.includes('aria-label="Daftar isi materi"'), 'Reading TOC has a semantic navigation label');
  check(shellSource.includes("role=\"dialog\""), 'Responsive TOC and utility drawers use dialog semantics');
  check(shellSource.includes("event.key === 'Escape'"), 'Drawers close with Escape');
  check(shellSource.includes("document.body.style.overflow = 'hidden'"), 'Open drawers lock background scroll');
  check(shellSource.includes('trigger?.focus()'), 'Drawer close restores trigger focus');
  check(shellSource.includes('target.focus({ preventScroll: true })'), 'TOC selection focuses the anchor target');
  check(shellSource.includes('window.history.replaceState'), 'TOC selection exposes a stable anchor URL');
  check(shellSource.includes('enableEditorialReading'), 'Reading blocks opt into editorial surface behavior');
  check(blockSource.includes("role={enableEditorialReading ? 'region' : undefined}"), 'Tables and formulas expose focusable scroll regions only in editorial reading');
  check(mainSource.includes("import './styles/ux-v2-reading.css';"), 'Reading stylesheet is loaded by the application entry point');
  check(css.includes('grid-template-columns: 210px minmax(0, 760px) 180px'), 'Wide reading layout preserves TOC, 720–800 article, and utility rail anatomy');
  check(css.includes('@media (min-width: 1280px)'), 'Permanent rails are restricted to wide desktop');
  check(css.includes('scroll-margin-top: 80px'), 'Anchor targets account for the sticky header');
  check(css.includes('min-height: 44px'), 'Reading controls meet the minimum touch target');
  check(css.includes('.akbi-reading-block--p .course-prose-card'), 'Long ordinary prose is flattened instead of remaining a card');
  check(css.includes('background: transparent !important;') && css.includes('border: 0 !important;'), 'Open prose removes inherited surface background and border');
  check(css.includes('.akbi-reading-block--ul .course-list-surface'), 'Ordinary lists are flattened into open prose');
  check(css.includes('.akbi-reading-block--formula .course-formula-surface'), 'Formula blocks retain a mapped academic surface');
  check(css.includes('.akbi-reading-block--table .course-table-card'), 'Tables retain a responsive artifact surface');
  check(!/gradient|glow|backdrop-filter/i.test(css), 'New reading stylesheet does not introduce gradient, glow, or glass effects');
  const nonScopedSelectors = css.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('/*') && !line.startsWith('*') && !line.startsWith('@') && line.endsWith('{'))
    .filter((line) => !line.startsWith('.ux-v2--akbi'));
  check(nonScopedSelectors.length === 0, 'Every concrete reading selector remains scoped to the AKBI pilot', nonScopedSelectors.join(', '));
}


if (process.env.UX10D_STATIC_ONLY === '1') {
  const result = {
    pass: failures.length === 0,
    checks: passes.length + failures.length,
    passed: passes.length,
    failed: failures.length,
    failures,
  };
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
  process.exit(0);
}

let server;
let cacheDir;
let dom;
let root;
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10d-vite-cache-'));
  dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost/course/AKM201?tab=tm8-14',
  });
  const { window } = dom;
  for (const key of [
    'window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'KeyboardEvent', 'MouseEvent',
    'localStorage', 'sessionStorage', 'MutationObserver', 'Element', 'HTMLButtonElement', 'HTMLAnchorElement',
  ]) globalThis[key] = window[key];
  Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
  globalThis.getComputedStyle = window.getComputedStyle.bind(window);
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = function scrollIntoView() {
    this.dataset.scrolledIntoView = 'true';
  };
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addEventListener() {}, removeEventListener() {} }));

  server = await createServer({
    root: projectRoot,
    cacheDir,
    appType: 'custom',
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'silent',
  });

  const [{ default: AkbiReadingShell }, { loadCourseContent }, { SEMESTERS }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/AkbiReadingShell.tsx'),
    server.ssrLoadModule('/src/data/courses/courseRegistry.ts'),
    server.ssrLoadModule('/src/data/courseData.ts'),
  ]);
  const semester = SEMESTERS.find((candidate) => candidate.id === 'sem2');
  const course = semester?.groups.flatMap((group) => group.courses).find((candidate) => candidate.code === 'AKM201');
  check(Boolean(course), 'Real AKBI course is available for the reading acceptance test');
  const content = await loadCourseContent('AKM201');
  const reading = Object.values(content.readings).find((candidate) =>
    candidate.blocks.filter((block) => block.kind === 'h2').length >= 2 &&
    nestedCount(candidate.blocks, 'table') >= 1 &&
    nestedCount(candidate.blocks, 'formula') >= 1,
  ) ?? Object.values(content.readings).find((candidate) => candidate.blocks.filter((block) => block.kind === 'h2').length >= 2);
  check(Boolean(reading), 'A real AKBI reading with local headings is available');

  if (course && reading) {
    let done = false;
    let backCalls = 0;
    let prevCalls = 0;
    let nextCalls = 0;
    let toggleCalls = 0;
    root = createRoot(window.document.getElementById('root'));
    const render = async () => {
      await act(async () => {
        root.render(React.createElement(AkbiReadingShell, {
          course,
          reading,
          done,
          isFirst: false,
          isLast: false,
          onBack() { backCalls += 1; },
          onPrev() { prevCalls += 1; },
          onNext() { nextCalls += 1; },
          onToggleDone() { toggleCalls += 1; done = !done; },
        }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    };
    await render();

    const document = window.document;
    const click = async (element) => {
      if (!element) throw new Error('Click target missing');
      await act(async () => {
        element.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    };

    check(Boolean(document.querySelector('[data-testid="akbi-reading-shell"]')), 'Real AKBI reading renders in the dedicated shell');
    check(document.querySelector('.course-sidebar-panel') === null, 'AKBI reading does not render the permanent legacy course sidebar');
    check(document.querySelector('.course-reading-panel') === null, 'AKBI reading does not render the legacy panel-heavy reading container');
    check(document.querySelectorAll('nav[aria-label="Daftar isi materi"] a').length >= 2, 'TOC is generated from real AKBI H2 blocks');
    check(Boolean(document.querySelector('aside[aria-label="Alat bantu materi"]')), 'Wide-layout utility content is present');
    check(Boolean(document.querySelector('.akbi-reading-block--p')), 'Ordinary prose blocks are mapped to open reading wrappers');
    check(Boolean(document.querySelector('.akbi-reading-block--table')), 'Real table blocks are mapped to table surfaces');
    check(Boolean(document.querySelector('.akbi-reading-block--formula')), 'Real formula blocks are mapped to formula surfaces');
    check(document.querySelectorAll('[role="region"][tabindex="0"]').length >= 2, 'Table and formula overflow regions are keyboard focusable');

    const tocTrigger = document.querySelector('button[aria-controls="akbi-reading-toc-drawer"]');
    await click(tocTrigger);
    const tocDialog = document.getElementById('akbi-reading-toc-drawer');
    check(Boolean(tocDialog) && tocDialog.getAttribute('role') === 'dialog', 'TOC trigger opens an accessible drawer');
    check(document.body.style.overflow === 'hidden', 'TOC drawer locks background scrolling');
    check(document.activeElement === tocDialog, 'Focus moves into the TOC drawer');
    await act(async () => {
      document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 30));
    });
    check(document.getElementById('akbi-reading-toc-drawer') === null, 'Escape closes the TOC drawer');
    check(document.activeElement === tocTrigger, 'Escape returns focus to the TOC trigger');

    await click(tocTrigger);
    const firstDrawerAnchor = document.querySelector('#akbi-reading-toc-drawer a[href^="#"]');
    const targetId = firstDrawerAnchor?.getAttribute('href')?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    await click(firstDrawerAnchor);
    check(document.getElementById('akbi-reading-toc-drawer') === null, 'Selecting a TOC entry closes the drawer');
    check(document.activeElement === target, 'Selecting a TOC entry moves focus to the reading anchor');
    check(target?.dataset.scrolledIntoView === 'true', 'Selecting a TOC entry scrolls the anchor into view');
    check(window.location.hash === `#${targetId}`, 'Selecting a TOC entry updates the URL fragment');

    const utilityTrigger = document.querySelector('button[aria-controls="akbi-reading-utility-drawer"]');
    await click(utilityTrigger);
    const utilityDialog = document.getElementById('akbi-reading-utility-drawer');
    check(Boolean(utilityDialog?.querySelector('.akbi-reading-utility')), 'Utility trigger opens objectives and content map in a drawer');
    const utilityClose = utilityDialog?.querySelector('button[aria-label="Tutup Alat bantu materi"]');
    await click(utilityClose);
    check(document.activeElement === utilityTrigger, 'Utility close button returns focus to its trigger');

    const completeButton = [...document.querySelectorAll('.akbi-reading-completion button')][0];
    await click(completeButton);
    check(toggleCalls === 1, 'Completion action invokes the existing study-progress callback exactly once');
    const paginationButtons = document.querySelectorAll('.akbi-reading-pagination button');
    await click(paginationButtons[0]);
    await click(paginationButtons[1]);
    check(prevCalls === 1 && nextCalls === 1, 'Previous and next controls preserve existing navigation callbacks');
    const backButton = document.querySelector('.akbi-reading-back');
    await click(backButton);
    check(backCalls === 1, 'Reading back control returns through the existing dashboard callback');
  }
} catch (error) {
  failures.push(`Dynamic AKBI reading probe: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
} finally {
  if (root) {
    try { await act(async () => { root.unmount(); }); } catch { /* result already captured */ }
  }
  if (server) await server.close();
  if (cacheDir) fs.rmSync(cacheDir, { recursive: true, force: true });
  dom?.window.close();
}

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
