import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10D1_ROOT ? path.resolve(process.env.UX10D1_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

if (process.env.UX10D1_DYNAMIC_ONLY !== '1') {
  const shellSource = read('src/components/course/AkbiReadingShell.tsx');
  const browserSource = read('scripts/test-ux10d-browser.mjs');
  check(shellSource.includes("function getDrawerFocusable(panel: HTMLDivElement)"), 'Drawer focusable controls use a shared boundary helper');
  check(shellSource.includes("activeElement === currentPanel || activeElement === first"), 'Backward trap handles initial panel focus and first control');
  check(shellSource.includes("activeElement === currentPanel || activeElement === last"), 'Forward trap handles initial panel focus and last control');
  check(shellSource.includes("document.addEventListener('focusin', onFocusIn)"), 'Drawer contains programmatic focus escapes');
  check(shellSource.includes("document.removeEventListener('focusin', onFocusIn)"), 'Focus containment listener is removed on drawer cleanup');
  check(shellSource.includes('tabIndex={-1}\n        onClick={() => {'), 'Backdrop is removed from sequential focus order');
  check(browserSource.includes('button[aria-controls="akbi-reading-toc-drawer"]'), 'Browser probe uses the actual TOC trigger contract');
  check(browserSource.includes('button[aria-controls="akbi-reading-utility-drawer"]'), 'Browser probe uses the actual utility trigger contract');
  check(!browserSource.includes('[data-testid="toc-trigger"]') && !browserSource.includes('[data-testid="utility-trigger"]'), 'Browser probe no longer depends on missing test IDs');
}

if (process.env.UX10D1_STATIC_ONLY === '1') {
  const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
  process.exit(0);
}

let server;
let cacheDir;
let dom;
let root;
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10d1-vite-cache-'));
  dom = new JSDOM('<!doctype html><html><body><button id="outside">Di luar dialog</button><div id="root"></div></body></html>', {
    url: 'http://localhost/course/AKM201?tab=tm8-14',
  });
  const { window } = dom;
  for (const key of [
    'window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'FocusEvent', 'KeyboardEvent', 'MouseEvent',
    'localStorage', 'sessionStorage', 'MutationObserver', 'Element', 'HTMLButtonElement', 'HTMLAnchorElement',
  ]) globalThis[key] = window[key];
  Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
  globalThis.getComputedStyle = window.getComputedStyle.bind(window);
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
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
  const content = await loadCourseContent('AKM201');
  const reading = Object.values(content.readings).find((candidate) => candidate.blocks.filter((block) => block.kind === 'h2').length >= 2);
  check(Boolean(course && reading), 'Real AKBI course and multi-heading reading are available');

  if (course && reading) {
    root = createRoot(window.document.getElementById('root'));
    await act(async () => {
      root.render(React.createElement(AkbiReadingShell, {
        course,
        reading,
        done: false,
        isFirst: false,
        isLast: false,
        onBack() {},
        onPrev() {},
        onNext() {},
        onToggleDone() {},
      }));
      await new Promise((resolve) => setTimeout(resolve, 30));
    });

    const document = window.document;
    const click = async (element) => {
      if (!element) throw new Error('Click target missing');
      await act(async () => {
        element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    };
    const pressTab = async ({ shiftKey = false } = {}) => {
      const event = new window.KeyboardEvent('keydown', { key: 'Tab', shiftKey, bubbles: true, cancelable: true });
      await act(async () => {
        document.dispatchEvent(event);
        await new Promise((resolve) => setTimeout(resolve, 0));
      });
      return event;
    };
    const pressEscape = async () => {
      const event = new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
      await act(async () => {
        document.dispatchEvent(event);
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
      return event;
    };
    const getFocusable = (dialog) => [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hasAttribute('hidden'));

    const tocTrigger = document.querySelector('button[aria-controls="akbi-reading-toc-drawer"]');
    await click(tocTrigger);
    const dialog = document.getElementById('akbi-reading-toc-drawer');
    const layer = dialog?.closest('.akbi-reading-drawer-layer');
    const backdrop = layer?.querySelector('.akbi-reading-drawer-backdrop');
    const focusable = dialog ? getFocusable(dialog) : [];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    check(Boolean(dialog) && document.activeElement === dialog, 'Drawer initially focuses the dialog panel');
    check(backdrop?.tabIndex === -1, 'Backdrop is not sequentially focusable');
    check(focusable.length >= 2, 'TOC drawer exposes multiple internal focus controls');

    const initialBackward = await pressTab({ shiftKey: true });
    check(initialBackward.defaultPrevented, 'Initial Shift+Tab is intercepted');
    check(document.activeElement === last, 'Initial Shift+Tab wraps from panel to last control');

    first?.focus();
    const firstBackward = await pressTab({ shiftKey: true });
    check(firstBackward.defaultPrevented, 'Shift+Tab from first control is intercepted');
    check(document.activeElement === last, 'Shift+Tab from first control wraps to last control');

    last?.focus();
    const lastForward = await pressTab();
    check(lastForward.defaultPrevented, 'Tab from last control is intercepted');
    check(document.activeElement === first, 'Tab from last control wraps to first control');

    dialog?.focus();
    const initialForward = await pressTab();
    check(initialForward.defaultPrevented, 'Initial Tab from panel is intercepted');
    check(document.activeElement === first, 'Initial Tab from panel moves to first control');

    const outside = document.getElementById('outside');
    outside?.focus();
    await act(async () => { await new Promise((resolve) => setTimeout(resolve, 0)); });
    check(document.activeElement !== outside, 'Programmatic focus cannot remain outside an open drawer');
    check(Boolean(dialog?.contains(document.activeElement)), 'Programmatic focus escape is redirected into the dialog');

    const escape = await pressEscape();
    check(escape.defaultPrevented, 'Escape is intercepted by the modal');
    check(document.getElementById('akbi-reading-toc-drawer') === null, 'Escape closes the drawer after boundary checks');
    check(document.activeElement === tocTrigger, 'Focus returns to TOC trigger after close');
    check(document.body.style.overflow === '', 'Closing the drawer restores body scroll state');

    const utilityTrigger = document.querySelector('button[aria-controls="akbi-reading-utility-drawer"]');
    await click(utilityTrigger);
    const utilityDialog = document.getElementById('akbi-reading-utility-drawer');
    const utilityBackdrop = utilityDialog?.closest('.akbi-reading-drawer-layer')?.querySelector('.akbi-reading-drawer-backdrop');
    check(Boolean(utilityDialog), 'Utility drawer opens after TOC drawer closes');
    check(utilityBackdrop?.tabIndex === -1, 'Utility backdrop is also excluded from tab order');
    utilityDialog?.focus();
    const utilityBackward = await pressTab({ shiftKey: true });
    check(utilityBackward.defaultPrevented, 'Utility drawer traps initial Shift+Tab');
    check(Boolean(utilityDialog?.contains(document.activeElement)), 'Utility drawer keeps backward focus inside');
    await click(utilityBackdrop);
    check(document.getElementById('akbi-reading-utility-drawer') === null, 'Backdrop click still closes the utility drawer');
    check(document.activeElement === utilityTrigger, 'Backdrop close restores the utility trigger');
  }
} catch (error) {
  failures.push(`Dynamic focus-boundary probe: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
} finally {
  if (root) {
    try { await act(async () => { root.unmount(); }); } catch { /* result already captured */ }
  }
  if (server) await server.close();
  if (cacheDir) fs.rmSync(cacheDir, { recursive: true, force: true });
  dom?.window.close();
}

const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
