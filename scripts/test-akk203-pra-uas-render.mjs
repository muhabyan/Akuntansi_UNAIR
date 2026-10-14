// Exercise the actual Markdown, quiz grading, and essay components with AKS201 UAS data.
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/' });
for (const key of ['window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'MouseEvent']) globalThis[key] = dom.window[key];
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator });
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.localStorage = dom.window.localStorage;
globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
globalThis.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
dom.window.ResizeObserver = globalThis.ResizeObserver;
dom.window.scrollTo = () => {};
dom.window.HTMLElement.prototype.scrollIntoView = () => {};
// Compile real application components with the same React instance as JSDOM.
// Use the same React instance as JSDOM without depending on Vite CJS SSR resolution.
const require = createRequire(import.meta.url);
const cache = new Map();
const server = {
  async ssrLoadModule(file) {
    if (cache.has(file)) return cache.get(file);
    const compiled = await build({ entryPoints: ['.' + file], bundle: true, write: false, platform: 'node', format: 'cjs', external: ['react', 'react/*', 'react-dom', 'react-dom/*'], jsx: 'automatic', loader: { '.css': 'empty' }, logLevel: 'silent' });
    const module = { exports: {} };
    Function('require', 'module', 'exports', compiled.outputFiles[0].text)(require, module, module.exports);
    cache.set(file, module.exports);
    return module.exports;
  },
  async close() {},
};
let mounted;
try {
  const [{ renderText }, { AKS201_QUIZ_UAS: quizzes }, { AKS201_BANK_UAS: banks }, { default: QuizView }, { default: EssayBank }, { ALL_COURSES }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/MarkdownContent.tsx'),
    server.ssrLoadModule('/src/data/quizzes/aks201.ts'),
    server.ssrLoadModule('/src/data/banksoal/aks201.ts'),
    server.ssrLoadModule('/src/components/QuizView.tsx'),
    server.ssrLoadModule('/src/components/EssayBank.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
  ]);
  const plain = text => text.replace(/\[([^\]]+)\]\(https:[^)]+\)/g,'$1');
  const checkRenderedText = text => {
    const wrapper = dom.window.document.createElement('div');
    wrapper.innerHTML = renderToStaticMarkup(renderText(text));
    assert.equal(wrapper.textContent, plain(text), 'Renderer preserves all prose and currency exactly');
    assert.equal(wrapper.querySelector('.katex, .katex-error'), null, 'Plain quiz prose never becomes math');
  };
  for (const q of quizzes) [q.q, ...q.options, q.explanation].forEach(checkRenderedText);
  assert.throws(() => checkRenderedText('Harga $8 dan biaya $11.')); // Currency delimiter regression.
  const course = ALL_COURSES.find(row => row.course.code === 'AKK203').course;
  const sets = [{ id: 'uas', label: 'AKK203 UAS', items: quizzes }];
  const container = dom.window.document.getElementById('root');
  const mount = async element => {
    if (mounted) await React.act(async () => mounted.unmount());
    mounted = createRoot(container);
    await React.act(async () => mounted.render(element));
  };
  const quizElement = () => React.createElement(QuizView, { course, mode: 'practice', quizSetsOverride: sets, selectedSetId: 'uas' });
  const questionCards = () => [...container.querySelectorAll('[data-testid="quiz-question-card"]')];
  const choice = (card, option) => [...card.querySelectorAll('button')].find(button => button.querySelector('span.flex-1')?.textContent === option);
  const click = element => { assert.ok(element, 'Button exists'); element.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); };
  await mount(quizElement());
  assert.equal(questionCards().length, 60);
  assert.ok(questionCards().some((card, i) => [...card.querySelectorAll('button span.flex-1')].map(x=>x.textContent).join('|') !== quizzes[i].options.join('|')), 'Options are actually shuffled');
  await React.act(async () => {
    questionCards().forEach((card, i) => click(choice(card, quizzes[i].options[quizzes[i].answer])));
  });
  questionCards().forEach((card, i) => {
    assert.ok(card.textContent.includes(quizzes[i].q));
    assert.ok(card.textContent.includes(plain(quizzes[i].explanation)), 'Correct explanation is shown after selecting an option');
    assert.ok(choice(card, quizzes[i].options[quizzes[i].answer]).textContent.endsWith('Benar'), 'Correct key survives display-option shuffling');
    assert.equal(card.querySelector('.katex, .katex-error'), null);
  });
  await mount(quizElement());
  const wrong = quizzes[0].options[(quizzes[0].answer + 1) % 4];
  await React.act(async () => click(choice(questionCards()[0], wrong)));
  assert.ok(choice(questionCards()[0], wrong).textContent.endsWith('Jawaban kamu'));
  assert.ok(choice(questionCards()[0], quizzes[0].options[quizzes[0].answer]).textContent.endsWith('Jawaban benar'));
  assert.ok(questionCards()[0].textContent.includes(plain(quizzes[0].explanation)));
  await mount(React.createElement(EssayBank, { items: banks }));
  assert.equal(container.querySelectorAll('.essay-question-card').length, 14);
  await React.act(async () => {
    [...container.querySelectorAll('.essay-question-card > button')].forEach(click);
  });
  [...container.querySelectorAll('.essay-question-card')].forEach((card, i) => {
    const item = banks[i];
    for (const text of [item.question, item.context, ...item.data, ...item.instructions, ...item.outputFormat, ...item.rubric, item.answerGuide]) {
      assert.ok(card.textContent.includes(plain(text)), 'All case fields remain visible and unchanged: case '+i+' '+JSON.stringify(plain(text)));
    }
  });
  await mount(React.createElement(QuizView, { course, mode: 'exam', quizSetsOverride: sets, selectedSetId: 'uas' }));
  await React.act(async () => click(container.querySelector('[data-testid="quiz-start-exam"]')));
  await React.act(async () => {
    questionCards().forEach(card => {
      const q = quizzes.find(q => card.textContent.includes(q.q));
      assert.ok(q, 'Exam question maps to source');
      click(choice(card, q.options[q.answer]));
    });
  });
  await React.act(async () => click([...container.querySelectorAll('button')].find(b=>b.textContent.includes('Submit Ujian'))));
  assert.ok(container.querySelector('[data-testid="quiz-result"]').textContent.includes('60 / 60'));
  assert.ok(container.querySelector('[data-testid="quiz-result"]').textContent.includes('Skor 100%'));

  const [{AKS201_READINGS: readings}, {default: CourseBlockCard}, {default: AdvancedFlashcardTab}, {AKS201_FC: cards}] = await Promise.all([
    server.ssrLoadModule('/src/data/asp/aspData.ts'),
    server.ssrLoadModule('/src/components/course/CourseBlockCard.tsx'),
    server.ssrLoadModule('/src/components/AdvancedFlashcardTab.tsx'),
    server.ssrLoadModule('/src/data/flashcards/aks201.ts'),
  ]);
  const flatten = blocks => blocks.flatMap(b => [b, ...flatten(b.blocks ?? []), ...flatten(b.answer ?? [])]);
  const visible = blocks => blocks.flatMap(b => [b, ...(b.kind === 'self-check' || b.kind === 'solution-reveal' ? [] : visible(b.blocks ?? []))]);
  for (const tm of [8,9,10,11,12,13,14]) {
    await mount(React.createElement('div',null,...readings[tm].blocks.map((block,i)=>React.createElement(CourseBlockCard,{key:i,block,enableLegalStyling:true}))));
    assert.equal(container.querySelector('.katex-error'),null,'No formula rendering errors');
    assert.ok(container.querySelector('.akk203-uas-diagram'),'Source model is mounted as SVG');
    const depth = [...container.querySelectorAll('.layered-pendalaman > button')];
    assert.ok(depth.length>=1, 'Optional source depth is present');
    assert.equal(depth[0].getAttribute('aria-expanded'), 'false');
    await React.act(async () => depth.forEach(click));
    assert.ok(container.querySelector('.course-figure-surface'), 'Real figure component is mounted');
    for (const block of visible(readings[tm].blocks)) {
      if (block.kind === 'p' && !block.text.includes('[')) assert.ok(container.textContent.includes(block.text), 'Reading paragraph remains visible: TM' + tm);
      for (const text of [block.text, ...(block.items ?? [])].filter(Boolean)) {
        for (const [, label, url] of text.matchAll(/\[([^\]]+)\]\((https:[^)]+)\)/g)) {
          const anchor = [...container.querySelectorAll('a')].find(a => a.textContent === label && a.getAttribute('href') === url);
          assert.ok(anchor, 'Source link and PDF page survive the actual renderer: TM' + tm);
          assert.ok(!container.textContent.includes('](' + url + ')'), 'Raw Markdown is not displayed');
        }
      }
      if (block.kind === 'table') {
        for (const cell of [...block.headers, ...block.rows.flat()]) assert.ok(container.textContent.includes(cell), 'Reading table cell remains visible: TM' + tm);
      }
    }
    const buttons = [...container.querySelectorAll('.course-solution-surface button[aria-expanded="false"]')];
    assert.equal(buttons.length,2,'Two examples initially closed');
    await React.act(async () => buttons.forEach(click));
    for (const block of flatten(readings[tm].blocks).filter(b=>b.kind==='solution-reveal')) {
      assert.ok(container.textContent.includes(block.title), 'Source example opens: TM'+tm);
      for (const formula of block.blocks.filter(b => b.kind === 'formula')) assert.ok(container.querySelector(`annotation`) && !container.querySelector('.katex-error'), 'Worked source formula renders: '+formula.text);
    }
    const check = container.querySelector('.layered-self-check');
    assert.ok(check && !check.querySelector('.border-t'), 'Self-check answer starts hidden');
    await React.act(async () => click([...check.querySelectorAll('button')].find(b => b.textContent.includes('Saya sudah mencoba'))));
    await React.act(async () => click([...check.querySelectorAll('button')].find(b => b.textContent.includes('Lihat contoh jawaban'))));
    assert.ok(check.textContent.length > 150, 'Self-check source answer is revealed after attempting');
  }
  await mount(React.createElement(AdvancedFlashcardTab,{course,cards}));
  const change = async (select,value) => React.act(async()=>{select.value=value;select.dispatchEvent(new dom.window.Event('change',{bubbles:true}));});
  const phase = container.querySelectorAll('select')[0];
  assert.match([...phase.options].find(o=>o.value==='pra-uas').textContent,/TM 8[-–]14/);
  await change(phase,'pra-uas');
  const tmSelect = container.querySelectorAll('select')[1];
  assert.deepEqual([...tmSelect.options].map(o=>o.value),['all','8','9','10','11','12','13','14']);
  for(const tm of [8,9,10,11,12,13,14]) {
    await change(tmSelect,String(tm));
    const expected=cards.filter(c=>c.phase==='pra-uas'&&c.tm===tm);
    assert.equal(expected.length,6);
    for(const card of expected){
      const face=container.querySelector('[role="button"][tabindex="0"]');
      assert.ok(face,'Accessible card TM'+tm);
      assert.ok(face.getAttribute('aria-label').includes(card.front),'Sequential active front');
      await React.act(async()=>click(face));
      assert.equal(face.getAttribute('aria-pressed'),'true');
      assert.ok(face.getAttribute('aria-label').includes(card.back),'Card source answer TM'+tm);
      await React.act(async()=>click(container.querySelector('button[aria-label="Kartu berikutnya"]')));
    }
  }
  console.log('AKK203 pra-UAS render PASS: all 60 shuffled quiz keys, wrong feedback and 60/60 exam grading; 14 opened bank cases; seven readings with SVG, source links/tables, depth, examples and self-checks; all 42 flashcard flips across TM8-14. JSDOM verifies DOM/events, browser verifies layout.');
} finally {
  if (mounted) await React.act(async () => mounted.unmount());
  await server.close(); dom.window.close();
}
