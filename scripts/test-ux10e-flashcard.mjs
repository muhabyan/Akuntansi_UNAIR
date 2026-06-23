import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10E_ROOT ? path.resolve(process.env.UX10E_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

if (process.env.UX10E_DYNAMIC_ONLY !== '1') {
  const tabSource = read('src/components/FlashcardTab.tsx');
  const workspaceSource = read('src/components/course/AkbiFlashcardWorkspace.tsx');
  const deckSource = read('src/components/FlashcardDeck.tsx');
  const css = read('src/styles/ux-v2-flashcard.css');
  const mainSource = read('src/main.tsx');

  check(tabSource.includes("course.code === 'AKM201'"), 'AKBI workspace uses the exact AKM201 course gate');
  check(tabSource.includes('<AkbiFlashcardWorkspace cards={cards} />'), 'AKBI route renders the dedicated flashcard workspace');
  check(tabSource.includes('<FlashcardDeck cards={cards} />'), 'Non-AKBI courses retain the generic flashcard deck');
  check(workspaceSource.includes('<FlashcardDeck cards={cards} variant="akbi" />'), 'Workspace opts into the AKBI deck variant');
  check(workspaceSource.includes('Status penguasaan hanya berlaku selama sesi ini'), 'Workspace explains session-local mastery state');
  check(deckSource.includes("const isAkbiWorkspace = variant === 'akbi';"), 'Mastery behavior is guarded by the AKBI variant');
  check(deckSource.includes('const [seenCards, setSeenCards]'), 'AKBI session tracks viewed cards');
  check(deckSource.includes('const [masteredCards, setMasteredCards]'), 'AKBI session tracks mastered cards');
  check(deckSource.includes(".find((index) => !masteredCards[index])"), 'Next-unmastered navigation skips mastered cards');
  check(deckSource.includes('setMasteredCards({});'), 'Reset clears AKBI mastery state');
  check(deckSource.includes('aria-pressed={currentMastered}'), 'Mastery toggle exposes pressed state');
  check(deckSource.includes('data-flashcard-variant={variant}'), 'Deck exposes its isolated variant for verification');
  check(deckSource.includes('flashcard-gacha-card-shell'), 'Carousel cards expose a mobile-safe shell hook');
  check(mainSource.includes("import './styles/ux-v2-flashcard.css';"), 'Flashcard stylesheet is loaded by the app entry point');
  check(css.includes('.flashcard-gacha-card-shell[aria-hidden="true"]'), 'Mobile CSS hides non-active AKBI carousel shells');
  check(css.includes('min-height: 44px'), 'AKBI mastery controls meet the minimum touch target');
  check(css.includes('@media (prefers-reduced-motion: reduce)'), 'AKBI flashcard transitions respect reduced motion');
  const nonScopedSelectors = css.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('/*') && !line.startsWith('*') && !line.startsWith('@') && line.endsWith('{'))
    .filter((line) => !line.startsWith('.ux-v2--akbi'));
  check(nonScopedSelectors.length === 0, 'Every concrete UX-1.0E selector remains scoped to AKBI', nonScopedSelectors.join(', '));
}

if (process.env.UX10E_STATIC_ONLY === '1') {
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
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10e-vite-cache-'));
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
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addEventListener() {}, removeEventListener() {} }));

  server = await createServer({
    root: projectRoot,
    cacheDir,
    appType: 'custom',
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'silent',
  });

  const [{ default: FlashcardTab }, { SEMESTERS }, { getNonPteFlashcards }] = await Promise.all([
    server.ssrLoadModule('/src/components/FlashcardTab.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/data/flashcards/nonPte.ts'),
  ]);
  const courses = SEMESTERS.flatMap((semester) => semester.groups.flatMap((group) => group.courses));
  const akbi = courses.find((course) => course.code === 'AKM201');
  const akm = courses.find((course) => course.code === 'AKK201');
  const akbiCards = getNonPteFlashcards('AKM201');
  check(Boolean(akbi && akm && akbiCards.length > 0), 'Real AKBI and comparison-course fixtures are available');

  if (akbi && akm && akbiCards.length > 0) {
    root = createRoot(window.document.getElementById('root'));
    const render = async (course) => {
      await act(async () => {
        root.render(React.createElement(FlashcardTab, { course }));
        await new Promise((resolve) => setTimeout(resolve, 40));
      });
    };
    const click = async (element) => {
      if (!element) throw new Error('Click target missing');
      await act(async () => {
        element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    };
    const buttonByText = (text) => [...window.document.querySelectorAll('button')]
      .find((button) => button.textContent?.toLowerCase().includes(text.toLowerCase()));
    const activeCounter = () => window.document.querySelector('.flashcard-gacha-stage .font-display.text-xl')?.textContent?.trim() ?? '';

    window.localStorage.clear();
    await render(akbi);
    check(Boolean(window.document.querySelector('.akbi-flashcard-workspace')), 'AKBI renders the dedicated flashcard workspace');
    check(window.document.querySelector('[data-flashcard-variant="akbi"]') !== null, 'AKBI renders the isolated deck variant');
    check(window.document.body.textContent?.includes(`Total kartu${akbiCards.length}`) ?? false, 'AKBI workspace reports the real deck count');
    check(activeCounter().startsWith('1 /'), 'AKBI session starts on the first card', activeCounter());
    check(buttonByText('Tandai dikuasai')?.getAttribute('aria-pressed') === 'false', 'Mastery control starts unpressed');

    await click(buttonByText('Tandai dikuasai'));
    check(buttonByText('Sudah dikuasai')?.getAttribute('aria-pressed') === 'true', 'Mastery control toggles to pressed');
    check(window.document.body.textContent?.includes(`1/${akbiCards.length}`) ?? false, 'Mastery summary increments after marking a card');

    await click(window.document.querySelector('button[aria-label="Kartu berikutnya"]'));
    check(activeCounter().startsWith('2 /'), 'Existing next-card control still advances the AKBI deck', activeCounter());
    check(window.document.body.textContent?.includes('Sudah dilihat2') ?? false, 'Viewed-card count increments on navigation');

    await click(buttonByText('Berikutnya belum dikuasai'));
    check(activeCounter().startsWith('3 /'), 'Next-unmastered control advances to an unmastered concept', activeCounter());

    await click(buttonByText('Reset sesi'));
    check(activeCounter().startsWith('1 /'), 'Reset returns the session to the first card', activeCounter());
    check(buttonByText('Tandai dikuasai')?.getAttribute('aria-pressed') === 'false', 'Reset clears mastery state');
    check(window.document.body.textContent?.includes(`0/${akbiCards.length}`) ?? false, 'Reset clears the mastery summary');
    check(window.localStorage.length === 0, 'Session-local mastery does not write progress storage');

    await render(akm);
    check(window.document.querySelector('.akbi-flashcard-workspace') === null, 'AKM I does not receive the AKBI flashcard workspace');
    check(window.document.querySelector('[data-flashcard-variant="default"]') !== null, 'Comparison course retains the generic deck variant');
    check(buttonByText('Tandai dikuasai') === undefined, 'Comparison course does not receive AKBI mastery controls');
    check(buttonByText('Reset sesi') === undefined, 'Comparison course does not receive AKBI session reset');
  }
} catch (error) {
  failures.push(`Dynamic AKBI flashcard probe: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
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
