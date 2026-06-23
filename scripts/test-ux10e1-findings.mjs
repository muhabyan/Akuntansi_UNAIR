import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10E1_ROOT ? path.resolve(process.env.UX10E1_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

if (process.env.UX10E1_DYNAMIC_ONLY !== '1') {
  const deckSource = read('src/components/FlashcardDeck.tsx');
  check(deckSource.includes('{ length: totalCards - 1 }'), 'Next-unmastered excludes the active card from its search range');
  check(deckSource.includes('disabled={isSpinning || nextUnmasteredIndex === undefined}'), 'Next-unmastered is disabled when no other target exists');
  check(deckSource.includes("'Konsep ini satu-satunya tersisa'"), 'The sole-remaining state has an explicit accessible label');
  check(deckSource.includes("window.matchMedia('(prefers-reduced-motion: reduce)').matches"), 'Reduced-motion preference is read from matchMedia');
  check(deckSource.includes('if (prefersReducedMotion) {'), 'Randomization has a reduced-motion logic branch');
  check(deckSource.includes("'Kartu acak dipilih tanpa animasi.'"), 'Reduced-motion randomization announces direct selection');
}

if (process.env.UX10E1_STATIC_ONLY === '1') {
  const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
  process.exit(0);
}

let server;
let cacheDir;
let dom;
let root;
let reducedMotion = false;
const mediaListeners = new Set();
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10e1-vite-cache-'));
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
  window.matchMedia = (query) => ({
    media: query,
    matches: query === '(prefers-reduced-motion: reduce)' && reducedMotion,
    addEventListener(type, listener) { if (type === 'change') mediaListeners.add(listener); },
    removeEventListener(type, listener) { if (type === 'change') mediaListeners.delete(listener); },
    addListener(listener) { mediaListeners.add(listener); },
    removeListener(listener) { mediaListeners.delete(listener); },
    dispatchEvent() { return true; },
    onchange: null,
  });

  server = await createServer({
    root: projectRoot,
    cacheDir,
    appType: 'custom',
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'silent',
  });

  const { default: FlashcardDeck } = await server.ssrLoadModule('/src/components/FlashcardDeck.tsx');
  const cards = [
    { front: 'Konsep A', back: 'Jawaban A' },
    { front: 'Konsep B', back: 'Jawaban B' },
    { front: 'Konsep C', back: 'Jawaban C' },
  ];
  const host = window.document.getElementById('root');
  const activeCounter = () => window.document.querySelector('.flashcard-gacha-stage .font-display.text-xl')?.textContent?.trim() ?? '';
  const buttonByText = (text) => [...window.document.querySelectorAll('button')]
    .find((button) => button.textContent?.toLowerCase().includes(text.toLowerCase()));
  const click = async (element, delay = 20) => {
    if (!element) throw new Error('Click target missing');
    await act(async () => {
      element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
      if (delay > 0) await new Promise((resolve) => setTimeout(resolve, delay));
    });
  };
  const mount = async () => {
    if (root) await act(async () => { root.unmount(); });
    root = createRoot(host);
    await act(async () => {
      root.render(React.createElement(FlashcardDeck, { cards, variant: 'akbi' }));
      await new Promise((resolve) => setTimeout(resolve, 30));
    });
  };

  reducedMotion = false;
  await mount();
  await click(buttonByText('Tandai dikuasai'));
  await click(window.document.querySelector('button[aria-label="Kartu berikutnya"]'));
  await click(buttonByText('Tandai dikuasai'));
  await click(window.document.querySelector('button[aria-label="Kartu berikutnya"]'));
  check(activeCounter().startsWith('3 / 3'), 'Edge-case fixture reaches the sole remaining unmastered card', activeCounter());
  const soleRemainingButton = buttonByText('Konsep ini satu-satunya tersisa');
  check(Boolean(soleRemainingButton), 'Sole remaining state replaces the misleading next-unmastered label');
  check(soleRemainingButton?.disabled === true, 'Sole remaining state disables next-unmastered navigation');
  check(!window.document.body.textContent?.includes('Berpindah ke konsep berikutnya yang belum dikuasai.'), 'Sole remaining state does not announce a false move');

  reducedMotion = true;
  await mount();
  const originalRandom = Math.random;
  const originalWindowSetTimeout = window.setTimeout.bind(window);
  const scheduledDelays = [];
  Math.random = () => 0.4;
  window.setTimeout = (callback, delay = 0, ...args) => {
    scheduledDelays.push(Number(delay));
    return originalWindowSetTimeout(callback, delay, ...args);
  };
  try {
    await click(buttonByText('Acak kartu'), 0);
    await act(async () => { await new Promise((resolve) => setTimeout(resolve, 40)); });
  } finally {
    window.setTimeout = originalWindowSetTimeout;
    Math.random = originalRandom;
  }
  check(activeCounter().startsWith('2 / 3'), 'Reduced-motion randomization selects the deterministic target directly', activeCounter());
  check(scheduledDelays.length === 0, 'Reduced-motion randomization schedules no intermediate carousel timers', scheduledDelays.join(', '));
  const liveRegion = window.document.querySelector('[role="status"]')?.textContent ?? '';
  check(liveRegion.includes('Kartu acak dipilih tanpa animasi.'), 'Reduced-motion direct selection is announced accurately', liveRegion);
  check(window.document.querySelector('[data-flashcard-variant="akbi"]')?.getAttribute('aria-busy') === 'false', 'Reduced-motion randomization does not leave the deck busy');
} catch (error) {
  failures.push(`Dynamic UX-1.0E.1 probe: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
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
