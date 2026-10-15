// Exercise the actual Markdown, quiz grading, and essay components with PJK301 UAS data.
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createRequire } from 'node:module';
import { build } from 'esbuild';

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
  const [{ renderText }, { PJK301_QUIZ_UAS: quizzes }, { PJK301_BANK_UAS: banks }, { default: QuizView }, { default: EssayBank }, { ALL_COURSES }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/MarkdownContent.tsx'),
    server.ssrLoadModule('/src/data/quizzes/pjk301.ts'),
    server.ssrLoadModule('/src/data/banksoal/pjk301.ts'),
    server.ssrLoadModule('/src/components/QuizView.tsx'),
    server.ssrLoadModule('/src/components/EssayBank.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
  ]);
  const checkRenderedText = text => {
    const wrapper = dom.window.document.createElement('div');
    wrapper.innerHTML = renderToStaticMarkup(renderText(text));
    assert.equal(wrapper.textContent, text, 'Renderer preserves all prose and currency exactly');
    assert.equal(wrapper.querySelector('.katex, .katex-error'), null, 'Plain quiz prose never becomes math');
  };
  for (const q of quizzes) [q.q, ...q.options, q.explanation].forEach(checkRenderedText);
  assert.throws(() => checkRenderedText('Harga $8 dan biaya $11.')); // Currency delimiter regression.
  const course = ALL_COURSES.find(row => row.course.code === 'PJK301').course;
  const sets = [{ id: 'uas', label: 'PJK301 UAS', items: quizzes }];
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
    assert.ok(card.textContent.includes(quizzes[i].explanation), 'Correct explanation is shown after selecting an option');
    assert.ok(choice(card, quizzes[i].options[quizzes[i].answer]).textContent.endsWith('Benar'), 'Correct key survives display-option shuffling');
    assert.equal(card.querySelector('.katex, .katex-error'), null);
  });
  await mount(quizElement());
  const wrong = quizzes[0].options[(quizzes[0].answer + 1) % 4];
  await React.act(async () => click(choice(questionCards()[0], wrong)));
  assert.ok(choice(questionCards()[0], wrong).textContent.endsWith('Jawaban kamu'));
  assert.ok(choice(questionCards()[0], quizzes[0].options[quizzes[0].answer]).textContent.endsWith('Jawaban benar'));
  assert.ok(questionCards()[0].textContent.includes(quizzes[0].explanation));
  await mount(React.createElement(EssayBank, { items: banks }));
  assert.equal(container.querySelectorAll('.essay-question-card').length, 14);
  await React.act(async () => {
    [...container.querySelectorAll('.essay-question-card > button')].forEach(click);
  });
  [...container.querySelectorAll('.essay-question-card')].forEach((card, i) => {
    const item = banks[i];
    for (const text of [item.question, item.context, ...item.data, ...item.instructions, ...item.outputFormat, ...item.rubric, item.answerGuide]) {
      assert.ok(card.textContent.includes(text), 'All case fields remain visible and unchanged');
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

  const [{PJK301_READINGS: readings}, {default: CourseBlockCard}, {default: AdvancedFlashcardTab}, {PJK301_FC: cards}] = await Promise.all([
    server.ssrLoadModule('/src/data/pjk2/pjk2Data.ts'),
    server.ssrLoadModule('/src/components/course/CourseBlockCard.tsx'),
    server.ssrLoadModule('/src/components/AdvancedFlashcardTab.tsx'),
    server.ssrLoadModule('/src/data/flashcards/pjk301.ts'),
  ]);
  for (const tm of [9,10,11,12,13,14,15]) {
    await mount(React.createElement('div',null,...readings[tm].blocks.map((block,i)=>React.createElement(CourseBlockCard,{key:i,block,enableLegalStyling:true}))));
    assert.equal(container.querySelector('.katex-error'),null,'No formula rendering errors');
    assert.ok(container.querySelector('.katex'),'Actual renderer displays the TM formula');
    for (const block of readings[tm].blocks) {
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
    const closed = [...container.querySelectorAll('button[aria-expanded="false"]')];
    const depthButtons = closed.filter(button => button.textContent.trim().startsWith('Buka pendalaman:'));
    const buttons = closed.filter(button => !depthButtons.includes(button));
    assert.equal(buttons.length,2,'Two examples initially closed');
    assert.equal(depthButtons.length, readings[tm].blocks.filter(b => b.kind === 'pendalaman').length, 'Depth has its own closed control');
    await React.act(async () => buttons.forEach(click));
    for (const block of readings[tm].blocks.filter(b=>b.kind==='solution-reveal')) assert.ok(container.textContent.includes(block.blocks[0].text),'Calculation solution opens intact');
    assert.ok(depthButtons.every(button => button.getAttribute('aria-expanded') === 'false'), 'Opening exercise solutions leaves depth closed');
    await React.act(async () => depthButtons.forEach(click));
    for (const block of readings[tm].blocks.filter(b => b.kind === 'pendalaman')) assert.ok(container.textContent.includes(block.blocks[0].text), 'Additional explanation opens independently');
  }
  await mount(React.createElement(AdvancedFlashcardTab,{course,cards}));
  const change = async (select,value) => React.act(async()=>{select.value=value;select.dispatchEvent(new dom.window.Event('change',{bubbles:true}));});
  const phase = container.querySelectorAll('select')[0];
  assert.ok([...phase.options].find(o=>o.value==='pra-uas').textContent.includes('TM 9-15'));
  await change(phase,'pra-uas');
  const tmSelect = container.querySelectorAll('select')[1];
  assert.deepEqual([...tmSelect.options].map(o=>o.value),['all','9','10','11','12','13','14','15']);
  await change(tmSelect,'15');
  const first = cards.find(c=>c.phase==='pra-uas' && c.tm===15);
  const face = [...container.querySelectorAll('[role="button"]')].find(b=>b.getAttribute('aria-label').includes(first.front));
  assert.ok(face,'TM15 card accessible');
  await React.act(async()=>click(face));
  assert.ok(container.textContent.includes(first.back),'TM15 source-backed answer rendered');
  console.log('PJK301 practice render PASS: 360 prose fields; shuffled correct and wrong feedback; exam score 60/60; 14 bank cases; 7 formulas/14 opened examples; TM15 flashcard filter/flip. JSDOM checks DOM and events, not CSS layout.');
} finally {
  if (mounted) await React.act(async () => mounted.unmount());
  await server.close(); dom.window.close();
}
