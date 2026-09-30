// EssayBank keeps the line breaks of a panduan jawaban (and of a rubric line) that was written with "\n".
// A guide without "\n" must render exactly as before: no extra class, so the HTML is unchanged for those courses.
// Every non-PTE bank is rendered with all cards opened; a mutation check proves the rules can fail.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/' });
for (const key of ['window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'MouseEvent']) globalThis[key] = dom.window[key];
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const load = async (entry) => {
  const bundle = await build({
    bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent', entryPoints: [entry], jsx: 'automatic',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    banner: { js: "import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);" },
  });
  const file = `_tmp_essay_${path.basename(entry).replace(/\W/g, '_')}.mjs`;
  fs.writeFileSync(file, bundle.outputFiles[0].text);
  try { return await import(pathToFileURL(path.resolve(file)).href); } finally { fs.unlinkSync(file); }
};
const banks = await load('src/data/banksoal/nonPte.ts');
const { default: EssayBank } = await load('src/components/EssayBank.tsx');

const PLAIN_GUIDE_CLASS = 'rounded-2xl border border-accent/22 bg-accent/10 p-4 text-sm leading-7 text-secondary';
const BREAKS = 'whitespace-pre-line';
const CODES = ['AKK201', 'AKM201', 'MNU101', 'AKA103', 'MAS122', 'PJK201', 'MNU108', 'MNM101', 'MNM201', 'AKK202', 'AKM202', 'AKS201', 'PJK301', 'MNK201', 'AKA201', 'SII306', 'AKS301'];
const NO_BREAK_COURSES = ['AKK201', 'AKM201', 'MNU101', 'AKA103', 'MAS122', 'PJK201'];

const root = createRoot(dom.window.document.getElementById('root'));
const mount = async (items) => {
  await act(async () => { root.render(null); });
  await act(async () => { root.render(React.createElement(EssayBank, { items })); });
  for (const button of [...dom.window.document.querySelectorAll('.essay-question-card > button')]) {
    await act(async () => { button.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); });
  }
  return dom.window.document.getElementById('root');
};
const guideBox = (card) => [...card.querySelectorAll('div')].find((el) => el.firstElementChild?.textContent === 'Panduan jawaban: ');
const rubricItems = (card) => {
  const heading = [...card.querySelectorAll('p')].find((el) => el.textContent.trim() === 'Rubrik Ringkas');
  return heading ? [...heading.parentElement.querySelectorAll('li')] : [];
};

/** The rendered cards of one set must match the items: breaks kept exactly where the text has "\n", the plain class otherwise. */
function checkSet(at, rootEl, items) {
  const cards = [...rootEl.querySelectorAll('.essay-question-card')];
  assert.equal(cards.length, items.length, `${at}: one card per item`);
  cards.forEach((card, index) => {
    const item = items[index];
    const box = guideBox(card);
    assert.ok(box, `${at} #${index + 1}: the guide is shown once the card is open`);
    assert.equal(box.textContent, `Panduan jawaban: ${item.answerGuide}`, `${at} #${index + 1}: the guide text is unchanged, "\\n" included`);
    if (item.answerGuide.includes('\n')) {
      assert.ok(box.classList.contains(BREAKS), `${at} #${index + 1}: a guide with "\\n" keeps its line breaks`);
    } else {
      assert.equal(box.className, PLAIN_GUIDE_CLASS, `${at} #${index + 1}: a guide without "\\n" renders with the original classes only`);
    }
    rubricItems(card).forEach((li, n) => {
      const line = item.rubric[n];
      assert.equal(li.textContent, line, `${at} #${index + 1}: rubric line ${n + 1} is unchanged`);
      if (line.includes('\n')) assert.ok(li.classList.contains(BREAKS), `${at} #${index + 1}: a rubric line with "\\n" keeps its line breaks`);
      else assert.ok(!li.hasAttribute('class'), `${at} #${index + 1}: a rubric line without "\\n" renders without a class attribute`);
    });
  });
}

const passes = [];

// ---- Every bank of every course.
const stats = { withBreaks: [], withoutBreaks: [] };
let setsChecked = 0;
for (const code of CODES) {
  const sets = [{ id: 'main', items: banks.getBankSoal(code) }, ...banks.getBankSoalSets(code)].filter((set) => set.items.length > 0);
  assert.ok(sets.length > 0, `${code}: has a bank`);
  let anyBreak = false;
  for (const set of sets) {
    const rootEl = await mount(set.items);
    checkSet(`${code}/${set.id}`, rootEl, set.items);
    const html = rootEl.innerHTML;
    const hasBreak = set.items.some((item) => item.answerGuide.includes('\n') || (item.rubric ?? []).some((line) => line.includes('\n')));
    anyBreak ||= hasBreak;
    if (!hasBreak) assert.ok(!html.includes(BREAKS), `${code}/${set.id}: no "\\n" anywhere, so the HTML carries no ${BREAKS} at all`);
    setsChecked += 1;
  }
  (anyBreak ? stats.withBreaks : stats.withoutBreaks).push(code);
}
for (const code of NO_BREAK_COURSES) assert.ok(stats.withoutBreaks.includes(code), `${code}: its guides have no "\\n", so it renders as before`);
passes.push(`${setsChecked} sets of ${CODES.length} course codes render with every card open; breaks kept only where the text has "\\n"`);
passes.push(`courses whose HTML is unchanged (no "\\n"): ${stats.withoutBreaks.join(', ')}`);
passes.push(`courses whose guide now shows line breaks: ${stats.withBreaks.join(', ')}`);

// ---- MNU108 Pra-UTS: five steps and each P and Q on their own lines.
{
  const items = banks.getBankSoalSets('MNU108').find((set) => set.id === 'uts').items;
  const rootEl = await mount(items);
  [...rootEl.querySelectorAll('.essay-question-card')].forEach((card, index) => {
    const lines = guideBox(card).textContent.split('\n');
    const at = `MNU108 UTS #${index + 1}`;
    for (const start of ['1. Ringkasan Kasus (Case Summary):', '2. Identifikasi Permasalahan (Problem Identification):', '3. Analisis Kasus:', '4. Jawaban atas Pertanyaan Kasus:', '5. Rekomendasi Manajerial:', 'P1: ', 'P2: ', 'P3: ', 'Q1: ', 'Q2: ', 'Q3: ']) {
      assert.equal(lines.filter((line) => line.startsWith(start)).length, 1, `${at}: exactly one line starts with "${start}"`);
    }
  });
  passes.push(`MNU108 Pra-UTS: ${items.length} guides show each of the five steps and each of P1-P3 and Q1-Q3 on its own line`);
}

// ---- A rubric line written with "\n" keeps its breaks too (no shipped bank has one yet).
{
  const item = { type: 'essay', question: 'Q', answerGuide: 'satu\ndua', rubric: ['Kriteria A\n- butir 1\n- butir 2', 'Kriteria B'] };
  const rootEl = await mount([item]);
  checkSet('synthetic rubric', rootEl, [item]);
  const [a, b] = rubricItems(rootEl.querySelector('.essay-question-card'));
  assert.ok(a.classList.contains(BREAKS) && !b.hasAttribute('class'), 'synthetic rubric: only the line with "\\n" gets the class');
  passes.push('a rubric line with "\\n" keeps its breaks; a line without stays classless');
}

// ---- Mutation check: a card that drops or adds the class must be rejected.
{
  const items = banks.getBankSoalSets('MNU108').find((set) => set.id === 'uts').items;
  const plain = banks.getBankSoal('AKK201').slice(0, 3);
  const mutations = {
    'a guide with "\\n" that lost the class': [items, (el) => guideBox(el.querySelector('.essay-question-card')).classList.remove(BREAKS), /keeps its line breaks/],
    'a guide without "\\n" that gained the class': [plain, (el) => guideBox(el.querySelector('.essay-question-card')).classList.add(BREAKS), /original classes only/],
    'a guide whose text was reflowed': [items, (el) => { const box = guideBox(el.querySelector('.essay-question-card')); box.lastChild.textContent = box.lastChild.textContent.replaceAll('\n', ' '); }, /unchanged/],
  };
  for (const [name, [set, mutate, reason]] of Object.entries(mutations)) {
    const rootEl = await mount(set);
    mutate(rootEl);
    assert.throws(() => checkSet('mutant', rootEl, set), reason, `the check must reject ${name} for the right reason`);
  }
  passes.push(`mutation check: ${Object.keys(mutations).length} broken renderings are rejected`);
}

console.log(JSON.stringify({ pass: true, checks: passes.length, passes }, null, 2));
process.exit(0);
