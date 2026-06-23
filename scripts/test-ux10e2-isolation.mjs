import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10E2_ROOT ? path.resolve(process.env.UX10E2_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

if (process.env.UX10E2_DYNAMIC_ONLY !== '1') {
  const deckSource = read('src/components/FlashcardDeck.tsx');
  check(
    deckSource.includes('return isAkbiWorkspace && prefersReducedMotion;'),
    'Reduced-motion decision helper requires the AKBI workspace',
  );
  check(
    deckSource.includes('isAkbiWorkspace\n    && typeof window'),
    'Reduced-motion state initialization is gated to AKBI',
  );
  check(
    deckSource.includes('if (!isAkbiWorkspace) {\n      setPrefersReducedMotion(false);'),
    'Generic decks skip reduced-motion media observation',
  );
  check(
    deckSource.includes('}, [isAkbiWorkspace]);'),
    'Reduced-motion observer follows workspace variant changes',
  );
}

if (process.env.UX10E2_STATIC_ONLY === '1') {
  const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
  process.exit(0);
}

let server;
let cacheDir;
let dom;
let root;
const mediaListeners = new Set();
let matchMediaCalls = 0;
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10e2-vite-cache-'));
  dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost/course/AKM201?tab=flashcard',
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
  window.matchMedia = (query) => {
    matchMediaCalls += 1;
    return {
      media: query,
      matches: query === '(prefers-reduced-motion: reduce)',
      addEventListener(type, listener) { if (type === 'change') mediaListeners.add(listener); },
      removeEventListener(type, listener) { if (type === 'change') mediaListeners.delete(listener); },
      addListener(listener) { mediaListeners.add(listener); },
      removeListener(listener) { mediaListeners.delete(listener); },
      dispatchEvent() { return true; },
      onchange: null,
    };
  };

  server = await createServer({
    root: projectRoot,
    cacheDir,
    appType: 'custom',
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'silent',
  });

  const { default: FlashcardDeck, shouldUseAkbiReducedMotion } = await server.ssrLoadModule('/src/components/FlashcardDeck.tsx');
  check(shouldUseAkbiReducedMotion(false, true) === false, 'Reduced-motion decision rejects generic decks even when the preference is active');
  check(shouldUseAkbiReducedMotion(true, true) === true, 'Reduced-motion decision accepts AKBI when the preference is active');
  const cards = [
    { front: 'Konsep A', back: 'Jawaban A' },
    { front: 'Konsep B', back: 'Jawaban B' },
    { front: 'Konsep C', back: 'Jawaban C' },
  ];
  const host = window.document.getElementById('root');
  const activeCounter = () => window.document.querySelector('.flashcard-gacha-stage .font-display.text-xl')?.textContent?.trim() ?? '';
  const randomButton = () => [...window.document.querySelectorAll('button')]
    .find((button) => button.textContent?.toLowerCase().includes('acak kartu'));
  const liveRegion = () => window.document.querySelector('[role="status"]')?.textContent ?? '';

  async function mount(variant) {
    if (root) await act(async () => { root.unmount(); });
    root = createRoot(host);
    await act(async () => {
      root.render(React.createElement(FlashcardDeck, { cards, variant }));
      await new Promise((resolve) => setTimeout(resolve, 25));
    });
  }

  async function triggerRandomAndCapture({ executeTimers }) {
    const originalRandom = Math.random;
    const originalWindowSetTimeout = window.setTimeout.bind(window);
    let nextTimerId = 1000;
    const scheduledDelays = [];
    Math.random = () => 0.4;
    window.setTimeout = (callback, delay = 0, ...args) => {
      scheduledDelays.push(Number(delay));
      if (executeTimers) return originalWindowSetTimeout(callback, delay, ...args);
      nextTimerId += 1;
      return nextTimerId;
    };
    try {
      const button = randomButton();
      if (!button) throw new Error('Random button missing');
      await act(async () => {
        button.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
      });
      if (executeTimers) {
        await act(async () => { await new Promise((resolve) => setTimeout(resolve, 35)); });
      }
      return scheduledDelays;
    } finally {
      window.setTimeout = originalWindowSetTimeout;
      Math.random = originalRandom;
    }
  }

  matchMediaCalls = 0;
  await mount('default');
  check(matchMediaCalls === 0, 'Generic deck does not query reduced-motion media state', String(matchMediaCalls));
  check(mediaListeners.size === 0, 'Generic deck does not register a reduced-motion listener', String(mediaListeners.size));
  const genericDelays = await triggerRandomAndCapture({ executeTimers: false });
  check(genericDelays.length === 24, 'Generic reduced-motion environment retains the inherited 24-step spin sequence', genericDelays.join(', '));
  check(activeCounter().startsWith('1 / 3'), 'Generic deck does not jump directly to the random target', activeCounter());
  check(window.document.querySelector('[data-flashcard-variant="default"]')?.getAttribute('aria-busy') === 'true', 'Generic deck retains inherited busy state during spin');
  check(liveRegion().includes('Mengacak kartu.'), 'Generic deck retains inherited spin announcement', liveRegion());
  check(!liveRegion().includes('tanpa animasi'), 'Generic deck never exposes AKBI reduced-motion copy', liveRegion());

  matchMediaCalls = 0;
  await mount('akbi');
  check(matchMediaCalls >= 1, 'AKBI deck reads reduced-motion media state', String(matchMediaCalls));
  check(mediaListeners.size === 1, 'AKBI deck registers one reduced-motion listener', String(mediaListeners.size));
  const akbiDelays = await triggerRandomAndCapture({ executeTimers: true });
  check(akbiDelays.length === 0, 'AKBI reduced-motion path schedules no intermediate spin timers', akbiDelays.join(', '));
  check(activeCounter().startsWith('2 / 3'), 'AKBI reduced-motion path selects the deterministic target directly', activeCounter());
  check(window.document.querySelector('[data-flashcard-variant="akbi"]')?.getAttribute('aria-busy') === 'false', 'AKBI reduced-motion path does not enter busy state');
  check(liveRegion().includes('Kartu acak dipilih tanpa animasi.'), 'AKBI reduced-motion path announces direct selection', liveRegion());

  await act(async () => { root.unmount(); });
  root = null;
  check(mediaListeners.size === 0, 'AKBI reduced-motion listener is removed on unmount', String(mediaListeners.size));
} catch (error) {
  failures.push(`Dynamic UX-1.0E.2 probe: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
} finally {
  if (root) {
    try { await act(async () => { root.unmount(); }); } catch { /* captured above */ }
  }
  if (server) await server.close();
  if (cacheDir) fs.rmSync(cacheDir, { recursive: true, force: true });
  dom?.window.close();
}

const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
