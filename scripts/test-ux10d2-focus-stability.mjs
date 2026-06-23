import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10D2_ROOT ? path.resolve(process.env.UX10D2_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

if (process.env.UX10D2_DYNAMIC_ONLY !== '1') {
  const shellSource = read('src/components/course/AkbiReadingShell.tsx');
  check(shellSource.includes('const onCloseRef = useRef(onClose);'), 'Drawer hook stores the latest close callback in a ref');
  check(shellSource.includes('onCloseRef.current = onClose;'), 'Drawer hook synchronizes the latest close callback without restarting the modal effect');
  check(shellSource.includes('onCloseRef.current();'), 'Escape uses the current close callback ref');
  check(shellSource.includes('}, [open, panelRef, restoreFocusRef, triggerRef]);'), 'Modal lifecycle effect excludes callback identity from dependencies');
  check(!shellSource.includes('}, [onClose, open, panelRef, restoreFocusRef, triggerRef]);'), 'Modal lifecycle effect does not depend on unstable onClose identity');
  check(shellSource.split('onClose={() => setDrawer(null)}').length - 1 === 2, 'Both drawers remain protected even with inline close callbacks');
}

if (process.env.UX10D2_STATIC_ONLY === '1') {
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
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10d2-vite-cache-'));
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

  let intersectionCallback = null;
  const observedTargets = [];
  class MockIntersectionObserver {
    constructor(callback) { intersectionCallback = callback; }
    observe(target) { observedTargets.push(target); }
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  globalThis.IntersectionObserver = MockIntersectionObserver;
  window.IntersectionObserver = MockIntersectionObserver;

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
    const renderShell = async (done) => {
      await act(async () => {
        root.render(React.createElement(AkbiReadingShell, {
          course,
          reading,
          done,
          isFirst: false,
          isLast: false,
          onBack() {},
          onPrev() {},
          onNext() {},
          onToggleDone() {},
        }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    };
    await renderShell(false);

    const document = window.document;
    const click = async (element) => {
      if (!element) throw new Error('Click target missing');
      await act(async () => {
        element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    };
    const pressEscape = async () => {
      const event = new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
      await act(async () => {
        document.dispatchEvent(event);
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
      return event;
    };

    check(typeof intersectionCallback === 'function', 'Reading shell installs an IntersectionObserver callback');
    check(observedTargets.length >= 2, 'Reading shell observes at least two heading anchors');

    const tocTrigger = document.querySelector('button[aria-controls="akbi-reading-toc-drawer"]');
    await click(tocTrigger);
    const dialog = document.getElementById('akbi-reading-toc-drawer');
    const tocLinks = [...(dialog?.querySelectorAll('.akbi-reading-toc a[href]') ?? [])];
    const focusedLink = tocLinks[0];
    check(Boolean(dialog && focusedLink), 'TOC drawer and an internal TOC link are available');
    focusedLink?.focus();
    check(document.activeElement === focusedLink, 'Internal TOC link receives keyboard focus before rerender');

    const rerenderTarget = observedTargets.find((target) => target.id && target.id !== focusedLink?.getAttribute('href')?.slice(1)) ?? observedTargets[1];
    await act(async () => {
      intersectionCallback?.([{
        isIntersecting: true,
        target: rerenderTarget,
        boundingClientRect: { top: 0 },
      }]);
      await new Promise((resolve) => setTimeout(resolve, 30));
    });

    check(document.getElementById('akbi-reading-toc-drawer') === dialog, 'Internal heading update does not remount the open dialog');
    check(document.activeElement === focusedLink, 'Internal TOC focus survives active-heading rerender');
    check(focusedLink?.closest('li')?.querySelector('a') === focusedLink, 'Focused TOC control still exists after rerender');
    check(dialog?.querySelector(`a[href="#${rerenderTarget?.id}"]`)?.getAttribute('aria-current') === 'location', 'Active-heading rerender updates TOC state while preserving focus');
    check(document.body.style.overflow === 'hidden', 'Rerender does not release body scroll lock');
    check(document.activeElement !== tocTrigger, 'Rerender does not restore focus to the trigger');

    const escape = await pressEscape();
    check(escape.defaultPrevented, 'Escape remains intercepted after active-heading rerender');
    check(document.getElementById('akbi-reading-toc-drawer') === null, 'Escape closes the rerendered TOC drawer');
    check(document.activeElement === tocTrigger, 'Close after rerender restores the TOC trigger');

    const utilityTrigger = document.querySelector('button[aria-controls="akbi-reading-utility-drawer"]');
    await click(utilityTrigger);
    const utilityDialog = document.getElementById('akbi-reading-utility-drawer');
    const utilityClose = utilityDialog?.querySelector('button[aria-label^="Tutup"]');
    utilityClose?.focus();
    check(document.activeElement === utilityClose, 'Utility drawer internal control receives focus before parent rerender');
    await renderShell(true);
    check(document.getElementById('akbi-reading-utility-drawer') === utilityDialog, 'Parent prop rerender does not remount the utility dialog');
    check(document.activeElement === utilityClose, 'Utility drawer focus survives parent prop rerender');
    check(document.body.style.overflow === 'hidden', 'Parent rerender keeps modal scroll lock active');
    await pressEscape();
    check(document.activeElement === utilityTrigger, 'Utility trigger is restored after closing a rerendered drawer');
  }
} catch (error) {
  failures.push(`Dynamic rerender-focus probe: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
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
