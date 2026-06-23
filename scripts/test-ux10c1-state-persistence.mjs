import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const projectRoot = process.env.UX10C1_ROOT ? path.resolve(process.env.UX10C1_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(projectRoot, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

if (process.env.UX10C1_DYNAMIC_ONLY !== '1') {
  const layoutSource = read('src/components/course/CourseLayout.tsx');
  const shellSource = read('src/components/course/AkbiCourseDashboardShell.tsx');
  const quizCardSource = read('src/components/course/QuizCard.tsx');
  const quizViewSource = read('src/components/QuizView.tsx');

  check(layoutSource.includes("const [akbiSimulationSetId, setAkbiSimulationSetId] = useState('uts')"), 'AKBI dashboard owner stores the selected simulation set');
  check(layoutSource.includes("setAkbiSimulationSetId('uts');"), 'AKBI simulation selection resets only with course or route initialization');
  check(layoutSource.includes('simulationSetId={akbiSimulationSetId}'), 'CourseLayout passes the owned set selection into the AKBI shell');
  check(layoutSource.includes('onSimulationSetIdChange={setAkbiSimulationSetId}'), 'CourseLayout receives controlled set changes from the AKBI shell');
  check(shellSource.includes('selectedSetId={simulationSetId}'), 'AKBI shell forwards the controlled set into QuizCard');
  check(shellSource.includes('onSelectedSetIdChange={onSimulationSetIdChange}'), 'AKBI shell forwards set changes to its owner');
  check(quizCardSource.includes('selectedSetId={selectedSetId}'), 'QuizCard forwards the optional controlled set into QuizView');
  check(quizCardSource.includes('onSelectedSetIdChange={onSelectedSetIdChange}'), 'QuizCard forwards the optional controlled change callback');
  check(quizViewSource.includes('selectedSetId?: string;'), 'QuizView controlled set prop remains optional');
  check(quizViewSource.includes('onSelectedSetIdChange?: (setId: string) => void;'), 'QuizView controlled change callback remains optional');
  check(quizViewSource.includes('const effectiveSetId = validControlledSetId ?? activeSetId;'), 'QuizView prefers a valid controlled set and retains its local fallback');
  check(quizViewSource.includes("if (selectedSetId === undefined) setActiveSetId(id);"), 'Uncontrolled QuizView callers retain their original local-state behavior');
  check(!layoutSource.includes('display: none') && !shellSource.includes('hiddenQuiz'), 'Patch does not keep the simulator invisibly mounted');
}

let server;
let cacheDir;
let dom;
let root;
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10c1-vite-cache-'));
  dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost/course/AKM201?tab=quiz',
  });
  const document = dom.window.document;
  for (const key of ['window', 'document', 'HTMLElement', 'Node', 'Event', 'MouseEvent', 'localStorage', 'sessionStorage', 'MutationObserver']) {
    globalThis[key] = dom.window[key];
  }
  Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
  globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  dom.window.scrollTo = () => {};
  dom.window.confirm = () => true;
  dom.window.matchMedia = dom.window.matchMedia || (() => ({
    matches: false,
    addEventListener() {},
    removeEventListener() {},
  }));

  server = await createServer({
    root: projectRoot,
    cacheDir,
    appType: 'custom',
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true },
    logLevel: 'silent',
  });

  const [{ default: CourseLayout }, { SEMESTERS }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
  ]);
  const semester = SEMESTERS.find((candidate) => candidate.id === 'sem2');
  const course = semester?.groups.flatMap((group) => group.courses).find((candidate) => candidate.code === 'AKM201');
  check(Boolean(course), 'Real AKBI course is available for the interactive lifecycle test');

  if (course) {
    root = createRoot(document.getElementById('root'));
    await act(async () => {
      root.render(React.createElement(CourseLayout, { course, initialTab: 'quiz', onBack() {} }));
    });

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    async function waitFor(selector, timeout = 15_000) {
      const deadline = Date.now() + timeout;
      while (Date.now() < deadline) {
        const element = document.querySelector(selector);
        if (element) return element;
        await act(async () => { await sleep(40); });
      }
      throw new Error(`Timed out waiting for ${selector}`);
    }
    async function click(element) {
      if (!element) throw new Error('Click target was not found');
      await act(async () => {
        element.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
        await sleep(70);
      });
    }
    const buttonByText = (text) => [...document.querySelectorAll('button')]
      .find((button) => button.textContent.trim() === text || button.textContent.includes(text));
    const isSelected = (id) => document.querySelector(`[data-testid="quiz-set-${id}"]`)?.className.includes('bg-gold') ?? false;

    await waitFor('[data-testid="quiz-set-uas"]');
    await click(document.querySelector('[data-testid="quiz-set-uas"]'));
    check(isSelected('uas'), 'UAS can be selected before leaving Simulasi');

    await click(buttonByText('Materi'));
    await waitFor('input[value="pra_uts"]');
    check(document.querySelector('[data-testid^="quiz-set-"]') === null, 'Simulasi unmounts while Materi is active');

    await click(document.querySelector('input[value="pra_uas"]'));
    check(document.querySelector('input[value="pra_uas"]')?.checked === true, 'Materi can independently select Pra-UAS');

    await click(buttonByText('Simulasi'));
    await waitFor('[data-testid="quiz-set-uas"]');
    check(isSelected('uas'), 'UAS remains selected after Simulasi unmounts and remounts');

    await click(buttonByText('Materi'));
    await waitFor('input[value="pra_uas"]');
    check(document.querySelector('input[value="pra_uas"]')?.checked === true, 'Pra-UAS remains selected after returning from Simulasi');

    await click(buttonByText('Simulasi'));
    await waitFor('[data-testid="quiz-set-uts"]');
    await click(document.querySelector('[data-testid="quiz-set-uts"]'));
    check(isSelected('uts'), 'Controlled selector can change back to UTS');
    await click(buttonByText('Materi'));
    await waitFor('input[value="pra_uas"]');
    await click(buttonByText('Simulasi'));
    await waitFor('[data-testid="quiz-set-uts"]');
    check(isSelected('uts'), 'UTS also persists across a second unmount and remount cycle');
  }
} catch (error) {
  failures.push(`Interactive lifecycle probe: ${error instanceof Error ? error.message : String(error)}`);
} finally {
  if (root) {
    try {
      await act(async () => { root.unmount(); });
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch {
      // Test result already records any relevant interaction failure.
    }
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
