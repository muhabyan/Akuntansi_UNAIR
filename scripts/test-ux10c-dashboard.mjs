import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import postcss from 'postcss';
import { createServer } from 'vite';

const root = process.env.UX10C_ROOT ? path.resolve(process.env.UX10C_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

const app = read('src/App.tsx');
const layout = read('src/components/course/CourseLayout.tsx');
const shell = read('src/components/course/AkbiCourseDashboardShell.tsx');
const main = read('src/main.tsx');
const cssPath = 'src/styles/ux-v2-dashboard.css';
const css = read(cssPath);
const quizView = read('src/components/QuizView.tsx');

check(app.includes("selectedCourse?.code === 'AKM201' && !routeNotFound"), 'AKBI pilot gate remains exact');
check(layout.includes("course.code === 'AKM201' && !currentReading"), 'Dashboard shell is isolated to AKBI dashboard state');
check(layout.includes("const [akbiMaterialPhase, setAkbiMaterialPhase]"), 'Material phase has dedicated feature-local state');
check(layout.includes("if (tab === 'materi') switchTab(akbiMaterialPhase)"), 'Returning to Materi restores its local phase');
check(layout.includes("if (activePrimaryTab === 'materi') switchTab(phase)"), 'Changing material phase only updates Materi context');
check(layout.includes("const defaultPhase: AkbiMaterialPhase = nextTm !== null && nextTm >= 8 ? 'pra_uas' : 'pra_uts'"), 'Material default phase follows firstIncomplete');
check(layout.includes('setAkbiMaterialPhase(phase);'), 'Material phase changes update only dedicated state');
check(quizView.includes("const [activeSetId, setActiveSetId]"), 'Simulation keeps its own local set state');
check(main.includes("import './styles/ux-v2-catalog.css';\nimport './styles/ux-v2-dashboard.css';"), 'Dashboard stylesheet loads after prior frozen styles');
check(shell.includes("label: 'Materi'"), 'Primary nav includes Materi');
check(shell.includes("label: 'Flashcard'"), 'Primary nav includes Flashcard');
check(shell.includes("label: 'Bank Soal'"), 'Primary nav includes Bank Soal');
check(shell.includes('visible: hasBankSoal(course.code)'), 'Bank Soal navigation is capability-driven');
check(shell.includes("label: 'Simulasi'"), 'Primary nav uses capability-correct Simulasi label');
check(shell.includes('visible: Boolean(reviews.uts && reviews.uas)'), 'Simulation navigation requires both AKBI phases');
check(shell.includes("label: 'Referensi'"), 'Primary nav includes Referensi');
check(shell.includes('aria-label="Navigasi mata kuliah"'), 'Primary navigation has accessible label');
check(shell.includes("aria-current={active ? 'page' : undefined}"), 'Active primary navigation exposes aria-current');
check(shell.includes('name="akbi-material-phase"'), 'Material phase selector is a dedicated radio group');
check(shell.includes("['pra_uts', 'Pra-UTS']"), 'Material selector includes Pra-UTS');
check(shell.includes("['pra_uas', 'Pra-UAS']"), 'Material selector includes Pra-UAS');
check(shell.includes('const phaseTms = availableTms.filter'), 'Material list is scoped to active phase');
check(shell.includes('const firstIncomplete = availableTms.find'), 'Next action uses firstIncomplete');
check(shell.includes("cta: 'Tinjau kembali'"), 'Completed state has review CTA');
check(shell.includes("heading: 'Mulai belajar'"), 'Untouched state has start copy');
check(shell.includes("heading: 'Berikutnya'"), 'In-progress state has next copy');
check(!shell.includes('course-progress-ring'), 'Progress ring is absent');
check(!shell.includes('course-feature-card'), 'Feature cards are absent');
check(!shell.includes('Course aktif'), 'Promotional active-course badge is absent');
check(!shell.includes('featureBadge'), 'Feature badge metadata is absent');
check(!shell.includes('Terakhir dibuka'), 'Unsupported last-opened copy is absent');
check(!shell.includes('Aktivitas terakhir'), 'Unsupported activity-history copy is absent');
check(shell.includes('role="progressbar"'), 'Next-action progress line has progressbar semantics');
check(shell.includes('role="list"'), 'TM collection uses list semantics');
check(shell.includes('className="akbi-material-row"'), 'TM rows use editorial row anatomy');
check(shell.includes('Tidak ada materi yang cocok pada fase ini.'), 'Scoped search has contextual empty state');

const ast = postcss.parse(css, { from: cssPath });
let gradientFound = false;
let activeBackdrop = false;
ast.walkDecls((decl) => {
  if (/gradient\s*\(/i.test(decl.value)) gradientFound = true;
  if ((decl.prop === 'backdrop-filter' || decl.prop === '-webkit-backdrop-filter') && decl.value.trim() !== 'none') activeBackdrop = true;
});
check(!gradientFound, 'Dashboard CSS has no gradient function');
check(!activeBackdrop, 'Dashboard CSS has no active backdrop blur');
check(css.includes('max-width: 1120px') || shell.includes('max-w-[1120px]'), 'Dashboard width is capped at 1120px');
check(css.includes('height: 4px'), 'Progress line remains 4px, not a ring or metric panel');
check(css.includes('border-bottom: 1px solid var(--ux-divider)'), 'Editorial rows use dividers');
check(css.includes('@media (max-width: 767px)'), 'Mobile state is defined');
check(css.includes('grid-template-columns: 28px minmax(0, 1fr) auto;'), 'Mobile TM rows remain compact');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion rule is present');
for (const rule of ast.nodes.filter((node) => node.type === 'rule')) {
  for (const selector of rule.selectors ?? []) {
    check(selector.trim().startsWith('.ux-v2--akbi'), `Dashboard selector remains pilot-scoped: ${selector.trim()}`);
  }
}

if (process.env.UX10C_STATIC_ONLY !== '1') {
  let server;
  let viteCacheDir;
  const mutationMode = process.env.UX10C_MUTATION_MODE === '1';
  try {
    viteCacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ux10c-vite-cache-'));
    const mutationStubPlugin = {
      name: 'ux10c-mutation-stubs',
      enforce: 'pre',
      resolveId(id, importer) {
        if (!mutationMode || !importer?.endsWith('/AkbiCourseDashboardShell.tsx')) return null;
        if (['./QuizCard', './FlashcardGrid', './BankQuestionList', './CourseBlockCard'].includes(id)) {
          return `\0ux10c-component-stub:${id.slice(2)}`;
        }
        if (id === '../../data/banksoal') return '\0ux10c-bank-stub';
        return null;
      },
      load(id) {
        if (id.startsWith('\0ux10c-component-stub:')) {
          const name = id.split(':').at(-1);
          return `import React from 'react'; export default function ${name}Stub(){ return React.createElement('div', {'data-ux10c-stub': '${name}'}); }`;
        }
        if (id === '\0ux10c-bank-stub') return 'export const hasBankSoal = () => true;';
        return null;
      },
    };
    server = await createServer({
      root,
      cacheDir: viteCacheDir,
      appType: 'custom',
      plugins: mutationMode ? [mutationStubPlugin] : [],
      server: { middlewareMode: true },
      logLevel: 'silent',
    });

    const { default: Shell } = await server.ssrLoadModule('/src/components/course/AkbiCourseDashboardShell.tsx');
    let course;
    let content;
    let quizSets = [];
    if (mutationMode) {
      course = {
        code: 'AKM201',
        name: 'Akuntansi Biaya',
        sks: 3,
        flashcardCount: 104,
        references: ['Referensi A', 'Referensi B'],
      };
      const readings = Object.fromEntries(Array.from({ length: 14 }, (_, index) => {
        const tm = index + 1;
        return [tm, { tm, title: `Materi TM ${tm}`, intro: `Intro TM ${tm}`, blocks: [], ref: `R${tm}` }];
      }));
      content = {
        readings,
        reviews: {
          uts: { tm: 7, title: 'Review UTS', intro: '', blocks: [] },
          uas: { tm: 14, title: 'Review UAS', intro: '', blocks: [] },
        },
        customReferensi: [],
      };
      quizSets = [
        { id: 'uts', items: [{}] },
        { id: 'uas', items: [{}] },
      ];
    } else {
      const [{ SEMESTERS }, registry, quizRegistry] = await Promise.all([
        server.ssrLoadModule('/src/data/courseData.ts'),
        server.ssrLoadModule('/src/data/courses/courseRegistry.ts'),
        server.ssrLoadModule('/src/data/quizzes/index.ts'),
      ]);
      const semester = SEMESTERS.find((candidate) => candidate.id === 'sem2');
      course = semester.groups.flatMap((group) => group.courses).find((candidate) => candidate.code === 'AKM201');
      content = await registry.loadCourseContent('AKM201');
      quizSets = quizRegistry.getQuizSets('AKM201');
    }

    const tms = Object.keys(content.readings).map(Number).sort((a, b) => a - b);
    check(Boolean(course), 'Real AKBI course exists');
    check(tms.length === 14, 'Real AKBI registry exposes 14 TM', `found ${tms.length}`);
    check(Boolean(content.reviews.uts && content.reviews.uas), 'Real AKBI registry exposes UTS and UAS review readings');

    function render({ completed = [], phase = 'pra_uts', tab = 'pra_uts' } = {}) {
      const done = new Set(completed);
      const markup = renderToStaticMarkup(React.createElement(Shell, {
        course,
        readings: content.readings,
        reviews: content.reviews,
        customReferensi: content.customReferensi,
        activeTab: tab,
        materialPhase: phase,
        completedCount: completed.length,
        totalCount: tms.length,
        isDone: (key) => done.has(Number(key.match(/tm(\d+)$/)?.[1])),
        materialKeyFor: (tm) => `AKM201:tm${tm}`,
        onToggleDone() {},
        onBack() {},
        onPrimaryTabChange() {},
        onMaterialPhaseChange() {},
        onOpenMeeting() {},
        onOpenReview() {},
      }));
      return { markup, document: new JSDOM(markup).window.document };
    }

    const fresh = render();
    const navLabels = [...fresh.document.querySelectorAll('.akbi-primary-nav button')].map((node) => node.textContent.trim());
    check(JSON.stringify(navLabels) === JSON.stringify(['Materi', 'Flashcard', 'Bank Soal', 'Simulasi', 'Referensi']), 'AKBI primary navigation is exact', navLabels.join(', '));
    check(fresh.document.querySelectorAll('.akbi-primary-nav button[aria-current="page"]').length === 1, 'Exactly one primary nav item is active');
    check(fresh.document.querySelector('.akbi-next-action__label')?.textContent === 'Mulai belajar', 'Fresh progress copy is Mulai belajar');
    check(fresh.document.querySelector('#akbi-next-action-title')?.textContent.includes('TM 1'), 'Fresh progress targets TM 1');
    check(fresh.document.querySelector('.akbi-next-action__cta')?.textContent.includes('Mulai TM 1'), 'Fresh CTA starts TM 1');
    check(fresh.document.querySelectorAll('.akbi-material-row').length === 7, 'Pra-UTS renders seven TM rows');
    check([...fresh.document.querySelectorAll('.akbi-material-row')].every((row) => Number(row.getAttribute('data-tm')) <= 7), 'Pra-UTS rows contain only TM 1–7');
    check(fresh.document.querySelectorAll('input[name="akbi-material-phase"]').length === 2, 'Material selector has two native radio inputs');
    check(fresh.document.querySelectorAll('.course-progress-ring').length === 0, 'Rendered dashboard has no progress ring');
    check(fresh.document.querySelectorAll('.course-feature-card').length === 0, 'Rendered dashboard has no feature cards');

    const nonSequential = render({ completed: [1, 2, 7] });
    check(nonSequential.document.querySelector('.akbi-next-action__label')?.textContent === 'Berikutnya', 'In-progress copy is Berikutnya');
    check(nonSequential.document.querySelector('#akbi-next-action-title')?.textContent.includes('TM 3'), 'Non-sequential progress targets first incomplete TM 3');
    check(nonSequential.document.querySelector('.akbi-next-action__status')?.textContent.includes('3 dari 14'), 'Progress status counts only completed real TMs');

    const complete = render({ completed: tms });
    check(complete.document.querySelector('.akbi-next-action__label')?.textContent === 'Materi selesai', 'Complete progress copy is Materi selesai');
    check(complete.document.querySelector('#akbi-next-action-title')?.textContent.includes('TM 1'), 'Complete progress reviews first available TM');
    check(complete.document.querySelector('.akbi-next-action__cta')?.textContent.includes('Tinjau kembali'), 'Complete progress CTA is Tinjau kembali');
    check(complete.document.querySelector('[role="progressbar"]')?.getAttribute('aria-valuenow') === '14', 'Progressbar exposes completed count');

    const uas = render({ completed: [1, 2, 3], phase: 'pra_uas', tab: 'pra_uas' });
    const uasTms = [...uas.document.querySelectorAll('.akbi-material-row')].map((row) => Number(row.getAttribute('data-tm')));
    check(uasTms.length === 7, 'Pra-UAS renders seven TM rows');
    check(uasTms.every((tm) => tm >= 8 && tm <= 14), 'Pra-UAS rows contain only TM 8–14', uasTms.join(','));
    check(uas.document.querySelector('input[value="pra_uas"]')?.hasAttribute('checked'), 'Pra-UAS radio is selected');
    check(uas.document.querySelector('.akbi-review-row h3')?.textContent.includes('UAS'), 'Pra-UAS exposes its local review row');

    const simulation = render({ tab: 'quiz' });
    check(simulation.document.querySelector('.akbi-primary-nav button[aria-current="page"]')?.textContent.trim() === 'Simulasi', 'Simulation primary tab is active independently');
    check(Boolean(simulation.document.querySelector('#akbi-simulation-title')), 'Simulation feature area renders');
    check(JSON.stringify(quizSets.map((set) => set.id)) === JSON.stringify(['uts', 'uas']), 'Simulation preserves UTS/UAS local set selector');
    check(quizSets.every((set) => set.items.length > 0), 'Simulation capability has non-empty UTS/UAS datasets');

    const references = render({ tab: 'referensi' });
    check(Boolean(references.document.querySelector('#akbi-reference-title')), 'Reference feature area renders');
    check(references.document.querySelectorAll('.akbi-reference-list li').length === (course.references?.length ?? 0), 'Reference list preserves real bibliography');
  } catch (error) {
    failures.push(`Dynamic dashboard verification crashed: ${error.stack || error}`);
  } finally {
    await server?.close();
    if (viteCacheDir) fs.rmSync(viteCacheDir, { recursive: true, force: true });
  }
}

const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
