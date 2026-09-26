import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

const codes = ['AKK202', 'PJK301', 'SII306', 'MNK201'];
const cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'aks-uts-ui-dom-'));
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/' });
const { window } = dom;
for (const key of ['window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'CustomEvent', 'MouseEvent', 'KeyboardEvent', 'PopStateEvent', 'localStorage', 'sessionStorage', 'MutationObserver', 'Element', 'HTMLButtonElement']) {
  globalThis[key] = window[key];
}
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
globalThis.getComputedStyle = window.getComputedStyle.bind(window);
globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};
window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
globalThis.IntersectionObserver = window.IntersectionObserver;
window.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
globalThis.ResizeObserver = window.ResizeObserver;

let server;
let root;
const checks = [];
const check = (condition, label) => {
  assert.ok(condition, label);
  checks.push(label);
};
const pause = async (ms = 40) => act(async () => { await new Promise((resolve) => setTimeout(resolve, ms)); });
const render = async (component) => act(async () => { root.render(component); await new Promise((resolve) => setTimeout(resolve, 40)); });
const click = async (element, label) => {
  assert.ok(element, `Missing click target: ${label}`);
  await act(async () => {
    element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
    await new Promise((resolve) => setTimeout(resolve, 50));
  });
};
const waitFor = async (predicate, label) => {
  for (let i = 0; i < 80; i++) {
    if (predicate()) return;
    await pause(50);
  }
  throw new Error(`Timed out: ${label}; body=${window.document.body.textContent.slice(0, 500)}`);
};
const button = (text, within = window.document) => [...within.querySelectorAll('button')]
  .find((item) => item.textContent.trim().includes(text));

try {
  server = await createServer({ root: process.cwd(), cacheDir, appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true }, logLevel: 'silent' });
  const [{ default: HomeView }, { default: SemesterView }, { default: CourseLayout }, { default: CourseBlockCard }, { default: Navbar }, { default: StudyUtilityDock }, { default: UtilityEscapeHandler }, { default: AITutorFloating }, { default: PomodoroTimer }, { default: FeedbackFloating }, { NotificationProvider }, { SEMESTERS }, { PJK301_READINGS }, { MNK201_READINGS }, { SII306_READINGS }] = await Promise.all([
    server.ssrLoadModule('/src/components/HomeView.tsx'),
    server.ssrLoadModule('/src/components/SemesterView.tsx'),
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/components/course/CourseBlockCard.tsx'),
    server.ssrLoadModule('/src/components/Navbar.tsx'),
    server.ssrLoadModule('/src/components/StudyUtilityDock.tsx'),
    server.ssrLoadModule('/src/components/UtilityEscapeHandler.tsx'),
    server.ssrLoadModule('/src/components/AITutorFloating.tsx'),
    server.ssrLoadModule('/src/components/PomodoroTimer.tsx'),
    server.ssrLoadModule('/src/components/FeedbackFloating.tsx'),
    server.ssrLoadModule('/src/contexts/NotificationContext.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/data/pjk2/pjk2Data.ts'),
    server.ssrLoadModule('/src/data/mankeu/mankeuData.ts'),
    server.ssrLoadModule('/src/data/sia/siaReadings.ts'),
  ]);
  for (let tm = 1; tm <= 7; tm++) {
    const pjkFigure = PJK301_READINGS[tm].blocks.find((block) => block.kind === 'figure');
    check(Boolean(pjkFigure?.overview?.cards.length >= 3 && !pjkFigure.svg), `PJK301 TM${tm} summary uses readable content cards`);
    check(pjkFigure.overview.cards.every((card) => card.title && card.subtitle && card.items.length >= 3 && card.takeaway), `PJK301 TM${tm} retains titles, source labels, details, and takeaways`);
    const mnkFigure = MNK201_READINGS[tm].blocks.find((block) => block.kind === 'figure');
    check(Boolean(mnkFigure?.svg && ([1, 4].includes(tm) ? mnkFigure.transcriptSections?.length === 3 : mnkFigure.transcript?.length >= 10)), `MNK201 TM${tm} diagram retains SVG and has a text version`);
  }
  const semester = SEMESTERS.find((item) => codes.every((code) => item.groups.some((group) => group.courses.some((course) => course.code === code))));
  check(Boolean(semester && !semester.locked), 'All four UTS courses share an open semester');
  root = createRoot(window.document.getElementById('root'));
  for (const tm of [3, 4, 5, 6, 7]) {
    const glossary = MNK201_READINGS[tm].blocks.find((block) => block.kind === 'table' && block.headers.includes('Nama Finansial'));
    check(Boolean(glossary), `MNK201 TM${tm} has financial term glossary`);
    await render(React.createElement(CourseBlockCard, { block: glossary }));
    check(window.document.querySelectorAll('[aria-label="Kamus istilah keuangan dalam kartu"] article').length === glossary.rows.length && Boolean(window.document.querySelector('table.min-w-\\[840px\\]')), `MNK201 TM${tm} has one mobile card per term and a legible-width desktop table`);
  }
  const starbucksSource = SII306_READINGS[3].blocks.find((block) => block.kind === 'example' && block.title.includes('Starbucks'))?.blocks.find((block) => block.kind === 'figure');
  check(Boolean(starbucksSource?.mobileFlow?.stages.length === 5 && starbucksSource.mobileFlow.messages.length === 4), 'SII306 TM3 mobile flow has five actor stages and four cross-pool messages');

  for (const width of [1440, 390]) {
    Object.defineProperty(window, 'innerWidth', { value: width, configurable: true });
    let selectedSemester = null;
    await render(React.createElement(HomeView, { onSelectSemester: (id) => { selectedSemester = id; } }));
    const entrance = window.document.querySelector(`button[aria-label="Buka ${semester.title}"]`);
    check(Boolean(entrance && !entrance.disabled), `${width}px DOM: semester entrance enabled`);
    await click(entrance, 'semester entrance');
    check(selectedSemester === semester.id, `${width}px DOM: semester entrance selects target semester`);

    let selectedCourse = null;
    await render(React.createElement(SemesterView, { semester, onBack() {}, onCourseClick: (course) => { selectedCourse = course; } }));
    for (const code of codes) {
      const courseButton = button(code);
      check(Boolean(courseButton), `${width}px DOM: ${code} appears in semester catalog`);
      await click(courseButton, code);
      check(selectedCourse?.code === code, `${width}px DOM: ${code} opens from semester`);
      const course = selectedCourse;
      await render(React.createElement(CourseLayout, { key: `${width}-${code}-materials`, course, onBack() {} }));
      await waitFor(() => Boolean(window.document.querySelector('nav[aria-label="Navigasi ruang belajar"]')), `${code} workspace`);
      const workspace = window.document.querySelector('nav[aria-label="Navigasi ruang belajar"]');
      check(Boolean(workspace?.querySelector('button[aria-current="page"]')), `${width}px DOM: ${code} has active TM tab`);
      check(Boolean(window.document.querySelector('button[aria-label^="Buka TM 1:"]')), `${width}px DOM: ${code} TM1 reading opens`);
      check(Boolean(window.document.querySelector('button[aria-label^="Buka TM 7:"]')), `${width}px DOM: ${code} TM7 reading opens`);
      check(Boolean(window.document.body.textContent.includes('Simulasi UTS')), `${width}px DOM: ${code} UTS review is present`);
      const progress = window.document.querySelector('[role="progressbar"]');
      check(progress?.getAttribute('aria-valuenow') === '0', `${width}px DOM: ${code} progress is exposed semantically`);

      await click(window.document.querySelector('button[aria-label^="Buka TM 1:"]'), `${code} TM1 reading`);
      await waitFor(() => window.document.body.textContent.includes('Selesai membaca?'), `${code} reading body`);
      check(Boolean(window.document.querySelector('main')), `${width}px DOM: ${code} TM1 reading renders`);
      const readingToolbar = window.document.querySelector('.reading-toolbar');
      check(Boolean(readingToolbar?.classList.contains('relative') && readingToolbar.classList.contains('md:sticky')), `${width}px DOM: reading outline toolbar is in document flow on mobile and sticky from desktop breakpoint`);
      if (code === 'MNK201') {
        const agency = window.document.querySelector('section[aria-label="Ringkasan visual teori keagenan pada layar sempit"]');
        const agencyText = window.document.querySelector('section[aria-label="Isi diagram dalam teks"]');
        check(Boolean(agency?.textContent.includes('Pemegang saham') && agency.textContent.includes('Manajemen') && agency.textContent.includes('Kreditor') && agency.textContent.includes('Konflik 1') && agency.textContent.includes('Konflik 2') && agency.textContent.includes('debt covenants') && window.document.querySelector('.course-diagram-agency') && [...window.document.querySelectorAll('details summary')].some((item) => item.textContent.includes('Perbesar diagram'))), `${width}px DOM: MNK201 TM1 whole agency overview precedes optional detailed diagram`);
        check(Boolean(agencyText?.querySelectorAll('h5').length === 3 && agencyText.textContent.includes('Pelaku dan tujuan') && agencyText.textContent.includes('Dua konflik') && agencyText.textContent.includes('Cara mengurangi konflik')), `${width}px DOM: MNK201 TM1 agency transcript is grouped by actors, conflicts, and remedies`);
        const callouts = [...window.document.querySelectorAll('.course-callout-compact')];
        check(callouts.length >= 2 && callouts[0].textContent.includes('Nilai Intrinsik vs Laba Akuntansi') && callouts[1].textContent.includes('Fokus Latihan TM1') && callouts[1].textContent.includes('belum terverifikasi'), `${width}px DOM: MNK201 TM1 callouts use compact spacing and cautious exam label`);
      }
      if (code === 'PJK301' || code === 'MNK201') {
        await render(React.createElement(CourseLayout, { key: `${width}-${code}-visual`, course, initialTm: 4, onBack() {} }));
        await waitFor(() => window.document.body.textContent.includes('Selesai membaca?'), `${code} TM4 reading`);
        if (code === 'PJK301') {
          const overview = window.document.querySelector('.course-figure-surface');
          check(Boolean(overview?.querySelector('h3')?.textContent.includes('PENYUSUTAN FISKAL')), `${width}px DOM: PJK301 TM4 overview heading renders`);
          check(overview?.querySelectorAll('section').length === 3 && overview.querySelectorAll('section li').length === 16, `${width}px DOM: PJK301 TM4 three cards and all 16 points render`);
          check(overview?.textContent.includes('PMK 79/PMK.03/2008') && !overview.querySelector('svg'), `${width}px DOM: PJK301 TM4 legal reference is visible as text, without tiny SVG`);
        } else {
          const transcript = window.document.querySelector('section[aria-label="Isi diagram dalam teks"]');
          check(Boolean(transcript?.querySelectorAll('h5').length === 3 && transcript.textContent.includes('βM = 1') && transcript.textContent.includes('overvalued')), `${width}px DOM: MNK201 TM4 SML explanation is grouped into axes, equation, and position`);
          const mobileOverview = window.document.querySelector('section[aria-label="Ringkasan visual SML pada layar sempit"]');
          check(Boolean(mobileOverview?.textContent.includes('CAPM:') && mobileOverview.textContent.includes('undervalued') && mobileOverview.querySelector('svg') && [...window.document.querySelectorAll('details summary')].some((item) => item.textContent.includes('Perbesar diagram'))), `${width}px DOM: MNK201 TM4 whole mobile SML appears before optional detailed zoom`);
        }
      }
      if (code === 'SII306') {
        await render(React.createElement(CourseLayout, { key: `${width}-${code}-bpmn`, course, initialTm: 3, onBack() {} }));
        await waitFor(() => Boolean(window.document.querySelector('.course-diagram-bpmn')), `${code} TM3 flow diagram`);
        const diagram = window.document.querySelector('.course-diagram-bpmn');
        check(Boolean(diagram?.textContent.includes('Pool Customer') && diagram.textContent.includes('lane Barista') && diagram.textContent.includes('message flow') && diagram.querySelector('path[d*="M308 150 v8"]') && diagram.querySelectorAll('polygon').length >= 14), `${width}px DOM: SII306 TM3 shows both pools, Barista lane, and explicit message-flow dashes and arrowheads`);
        const mobileFlow = window.document.querySelector('section[aria-label="Alur Starbucks di layar sempit"]');
        check(Boolean(mobileFlow?.querySelectorAll('li > div.rounded-xl').length === 5 && mobileFlow.querySelectorAll('div.border-dashed').length === 4 && mobileFlow.textContent.includes('Customer bergerak ke jendela')), `${width}px DOM: SII306 TM3 mobile flow shows ordered actor stages and message exchanges`);
      }
      await render(React.createElement(CourseLayout, { key: `${width}-${code}-tools`, course, onBack() {} }));
      await waitFor(() => Boolean(window.document.querySelector('nav[aria-label="Navigasi ruang belajar"]')), `${code} tools`);
      const toolsNav = window.document.querySelector('nav[aria-label="Navigasi ruang belajar"]');

      await click(button('Kuis', toolsNav), `${code} quiz tab`);
      await waitFor(() => window.document.body.textContent.includes('Simulasi Ujian'), `${code} quiz content`);
      check(Boolean(toolsNav.querySelector('button[aria-current="page"]')?.textContent.includes('Kuis')), `${width}px DOM: ${code} quiz content and active tab render`);
      await click(button('Flashcard', toolsNav), `${code} flashcard tab`);
      await waitFor(() => window.document.body.textContent.includes(`Flashcard ${course.name}`), `${code} flashcard content`);
      check(Boolean(toolsNav.querySelector('button[aria-current="page"]')?.textContent.includes('Flashcard')), `${width}px DOM: ${code} flashcard content and active tab render`);
      await click(button('Bank Soal', toolsNav), `${code} case bank tab`);
      await waitFor(() => window.document.body.textContent.includes('Bank Soal Praktik'), `${code} case bank content`);
      check(Boolean(window.document.querySelector('.essay-question-card')), `${width}px DOM: ${code} case question renders`);
      await click(window.document.querySelector('.essay-question-card button'), `${code} case question`);
      check(window.document.body.textContent.includes('Panduan jawaban:'), `${width}px DOM: ${code} case answer expands`);

      await click(button('TM 1', toolsNav), `${code} TM tab`);
      const reviewLabel = [...window.document.querySelectorAll('span')].find((item) => item.textContent.trim() === 'Simulasi UTS');
      await click(reviewLabel?.closest('.group')?.querySelector('button'), `${code} UTS review`);
      await waitFor(() => window.document.body.textContent.includes('Selesai membaca?'), `${code} review body`);
      check(Boolean(window.document.querySelector('main')), `${width}px DOM: ${code} UTS review opens`);
      if (code === 'MNK201') {
        check(window.document.querySelector('section[aria-label="Isi diagram dalam teks"]')?.querySelectorAll('li').length >= 30, `${width}px DOM: MNK201 UTS review diagram has a text version`);
      }

      await render(React.createElement(SemesterView, { semester, onBack() {}, onCourseClick: (nextCourse) => { selectedCourse = nextCourse; } }));
    }
  }
  let themeToggles = 0;
  await render(React.createElement(NotificationProvider, null, React.createElement(Navbar, {
    onHome() {}, onSelectCourse() {}, theme: 'light', onToggleTheme() { themeToggles++; }, onSelectReport() {}, isQuietThemeControl: true,
  })));
  const nav = window.document.querySelector('nav');
  const materialsMenu = button('Materi & Soal', nav);
  await click(materialsMenu, 'desktop materials menu');
  check(materialsMenu.getAttribute('aria-expanded') === 'true', 'Desktop course menu opens');
  check(window.document.body.textContent.includes('Pilih semester, mata kuliah, lalu modul.'), 'Desktop course menu renders selection flow');
  await act(async () => { window.document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });
  check(materialsMenu.getAttribute('aria-expanded') !== 'true', 'Escape closes course menu');
  const mobileToggle = nav.querySelector('button.stage9-mobile-toggle');
  await click(mobileToggle, 'mobile navigation toggle');
  check(mobileToggle.getAttribute('aria-expanded') === 'true' && Boolean(nav.querySelector('.stage9-mobile-panel')), 'Mobile menu opens');
  await act(async () => { window.document.body.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true })); });
  check(mobileToggle.getAttribute('aria-expanded') === 'false' && !nav.querySelector('.stage9-mobile-panel'), 'Outside click closes mobile menu');
  await click(nav.querySelector('button.ux-v2-theme-toggle'), 'theme toggle');
  check(themeToggles === 1, 'Theme control invokes its toggle handler');
  for (const width of [390, 1440]) {
    Object.defineProperty(window, 'innerWidth', { value: width, configurable: true });
    await render(React.createElement(NotificationProvider, null, React.createElement(React.Fragment, null,
      React.createElement(AITutorFloating), React.createElement(PomodoroTimer), React.createElement(FeedbackFloating, {}),
      React.createElement(StudyUtilityDock), React.createElement(UtilityEscapeHandler),
    )));
    const utilityTrigger = window.document.querySelector('.study-utility-dock > button');
    const aiPanel = window.document.querySelector('[data-utility-panel="ai-tutor"]');
    const pomoPanel = window.document.querySelector('[data-utility-panel="pomodoro-timer"]');
    const feedbackPanel = window.document.querySelector('[data-utility-panel="material-feedback"]');
    check(Boolean(utilityTrigger?.getAttribute('aria-label')?.includes('AI Tutor')), `${width}px DOM: utility trigger names its available tools`);
    if (width === 390) {
      await click(utilityTrigger, 'mobile utility dock');
      check(window.document.querySelectorAll('#study-utility-menu button').length === 4, 'Mobile utility menu exposes four labeled actions');
      await click(button('AI Tutor', window.document.querySelector('#study-utility-menu')), 'mobile AI Tutor action');
      check(aiPanel.getAttribute('aria-hidden') === 'false' && !window.document.querySelector('#study-utility-menu'), 'Mobile AI Tutor opens and menu closes');
      await click(utilityTrigger, 'mobile utility dock over AI Tutor');
      check(aiPanel.getAttribute('aria-hidden') === 'true' && aiPanel.hasAttribute('inert') && Boolean(window.document.querySelector('#study-utility-menu')) && window.document.querySelector('.study-utility-dock').className.includes('z-[120]'), 'Mobile dock closes active AI panel and rises above it');
      await click(button('Pomodoro', window.document.querySelector('#study-utility-menu')), 'mobile switch to Pomodoro');
      check(pomoPanel.getAttribute('aria-hidden') === 'false' && aiPanel.getAttribute('aria-hidden') === 'true' && !window.document.querySelector('#study-utility-menu'), 'Mobile switches directly from AI Tutor to Pomodoro');
      await click(utilityTrigger, 'mobile utility dock over Pomodoro');
      check(pomoPanel.getAttribute('aria-hidden') === 'true' && pomoPanel.hasAttribute('inert') && Boolean(window.document.querySelector('#study-utility-menu')), 'Mobile dock closes Pomodoro before showing menu');
      await act(async () => { window.document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });
      check(!window.document.querySelector('#study-utility-menu') && utilityTrigger.getAttribute('aria-expanded') === 'false', 'Mobile Escape closes utility menu');
      await click(utilityTrigger, 'mobile utility dock for feedback');
      await click(button('Request Materi', window.document.querySelector('#study-utility-menu')), 'mobile feedback action');
      check(feedbackPanel.getAttribute('aria-hidden') === 'false', 'Mobile feedback panel opens');
      await click(feedbackPanel.querySelector('button[aria-label="Tutup form feedback"]'), 'mobile feedback X');
      check(feedbackPanel.getAttribute('aria-hidden') === 'true' && feedbackPanel.hasAttribute('inert'), 'Mobile X closes feedback and disables its layer');
    } else {
      await click(window.document.querySelector('button.utility-launcher-quiet[aria-controls="ai-tutor-panel"]'), 'desktop AI Tutor launcher');
      check(aiPanel.getAttribute('aria-hidden') === 'false', 'Desktop AI Tutor opens');
      await click(window.document.querySelector('button.utility-launcher-quiet[aria-controls="pomodoro-panel"]'), 'desktop Pomodoro launcher');
      check(aiPanel.getAttribute('aria-hidden') === 'true' && pomoPanel.getAttribute('aria-hidden') === 'false', 'Desktop launcher switches directly to Pomodoro');
      await act(async () => { window.document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });
      check(pomoPanel.getAttribute('aria-hidden') === 'true' && pomoPanel.hasAttribute('inert'), 'Desktop Escape closes Pomodoro and disables its layer');
      await click(window.document.querySelector('button.utility-launcher-quiet[aria-controls="material-feedback-panel"]'), 'desktop feedback launcher');
      check(feedbackPanel.getAttribute('aria-hidden') === 'false', 'Desktop feedback opens');
      await click(feedbackPanel.querySelector('button[aria-label="Tutup form feedback"]'), 'desktop feedback X');
      check(feedbackPanel.getAttribute('aria-hidden') === 'true' && feedbackPanel.hasAttribute('inert'), 'Desktop X closes feedback and disables its layer');
    }
    check(window.document.querySelectorAll('[data-utility-panel][aria-hidden="false"]').length === 0, `${width}px DOM: no invisible utility layer remains active`);
  }
  const result = { pass: true, checks: checks.length, courses: codes, simulatedWidths: [1440, 390], limitation: 'JSDOM has no CSS layout or screenshots; this verifies DOM rendering and event wiring only.', assertions: checks };
  const reportArg = process.argv.find((arg) => arg.startsWith('--report='));
  const reportFile = process.env.UTS_UI_DOM_REPORT ?? reportArg?.slice('--report='.length);
  if (reportFile) fs.writeFileSync(path.resolve(reportFile), `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ ...result, assertions: undefined }, null, 2));
} finally {
  if (root) await act(async () => { root.unmount(); });
  if (server) await Promise.race([server.close(), new Promise((resolve) => setTimeout(resolve, 1500))]);
  dom.window.close();
  const target = path.resolve(cacheDir);
  if (target.startsWith(path.resolve(os.tmpdir()) + path.sep) && path.basename(target).startsWith('aks-uts-ui-dom-')) fs.rmSync(target, { recursive: true, force: true });
}
process.exit(0);
