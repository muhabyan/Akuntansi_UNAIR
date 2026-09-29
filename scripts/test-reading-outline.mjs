// Daftar Isi guard: the panel badge, the toolbar pill and the panel label all come from one helper, so they agree.
// 1. A heading that carries its own number keeps it (MNU108 starts at §0, so a running counter was off by one).
// 2. A heading with no number of its own still gets a counted badge, as before.
// 3. Markdown escapes belong to the rendered heading, never to a plain-text label ("13\. ..." reads "13. ...").
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const bundle = await build({
  stdin: {
    contents: [
      "export { buildReadingOutline, readingOutlineLabel, stripMarkdownEscapes } from './src/components/course/ReadingOutline';",
      "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'tsx',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  // The outline helpers live next to React components, so the bundle pulls React in; nothing here renders.
  jsx: 'automatic', loader: { '.css': 'text' },
  plugins: [{
    name: 'vite-raw',
    setup(builder) {
      builder.onResolve({ filter: /\?raw$/ }, (args) => ({
        path: path.resolve(args.resolveDir, args.path.slice(0, -'?raw'.length)), namespace: 'raw',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'raw' }, (args) => ({ contents: readFileSync(args.path, 'utf8'), loader: 'text' }));
    },
  }],
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const { buildReadingOutline, readingOutlineLabel, stripMarkdownEscapes, loadCourseContent } = mod;

const passes = [];
const ok = (label) => passes.push(label);

// ---- The escape stripper on its own.
assert.equal(stripMarkdownEscapes('13\\. Contoh Penerapan'), '13. Contoh Penerapan');
assert.equal(stripMarkdownEscapes('Tanpa escape'), 'Tanpa escape');
assert.equal(stripMarkdownEscapes('C:\\\\path'), 'C:\\path');
ok('stripMarkdownEscapes: removes markdown escapes and leaves plain text alone');

// ---- MNU108 TM01: sections §0..§16, so badges run 00..16, not 01..17.
const mnu108 = (await loadCourseContent('MNU108')).readings[1];
const outline = buildReadingOutline(mnu108.blocks);
const sections = outline.filter((item) => item.level === 2);
assert.equal(sections.length, 17, 'TM01 has 17 sections');
assert.deepEqual(
  sections.map((item) => item.badge),
  Array.from({ length: 17 }, (_, i) => String(i)),
  'TM01 badges are the headings own numbers 0..16',
);
assert.equal(sections[0].label, 'Orientasi TM01');
assert.equal(sections[12].label, 'Peta Konsep (siap dijadikan Mind Map)');
assert.equal(sections[13].label, 'Contoh Penerapan');
assert.equal(readingOutlineLabel(sections[13]), '13 · Contoh Penerapan', 'the pill reads the section number, not its position');
assert.equal(readingOutlineLabel(sections[0]), '00 · Orientasi TM01');
ok('MNU108 TM01: badges 0..16 come from the headings, labels drop the number');

// ---- No label anywhere carries a markdown escape.
for (const item of outline) {
  assert.ok(!item.label.includes('\\'), `label still escaped: "${item.label}"`);
  assert.ok(!/^\d{1,3}[.)]\s/.test(item.label), `section number left in the label: "${item.label}"`);
}
ok('MNU108 TM01: no label carries a backslash or a leftover number');

// ---- §14 and its 14.1-14.5 subsections: the subsections sit under badge 14 and keep their own numbering.
const caseIndex = outline.findIndex((item) => item.badge === '14');
assert.ok(caseIndex >= 0, 'section 14 is in the outline');
const subsections = [];
for (let i = caseIndex + 1; i < outline.length && outline[i].level === 3; i += 1) subsections.push(outline[i].label);
assert.deepEqual(subsections, [
  '14.1 Case Summary',
  '14.2 Problem Identification',
  '14.3 Analisis Kasus (dengan teori Chapter 1)',
  '14.4 Jawaban Pertanyaan Kasus',
  '14.5 Rekomendasi Manajerial',
], 'the case subsections follow section 14, numbered 14.1-14.5');
assert.ok(subsections.every((label) => readingOutlineLabel({ label, level: 3 }) === label), 'a subsection shows no badge');
ok('MNU108 TM01: 14.1-14.5 sit under badge 14 and keep their numbering');

// ---- Other courses are unchanged: a numbered reading starts at 1, an unnumbered one is still counted.
let numbered = 0;
let counted = 0;
for (const code of ['PJK301', 'AKA201', 'AKK202', 'MNK201', 'AKM202', 'AKS201']) {
  const content = await loadCourseContent(code);
  for (const [tm, reading] of Object.entries(content.readings)) {
    const items = buildReadingOutline(reading.blocks).filter((item) => item.level === 2);
    if (items.length === 0) continue;
    const own = items.map((item) => item.badge);
    // Every badge is either the heading's own number or this section's position in the reading.
    own.forEach((badge, index) => {
      assert.ok(badge === String(index + 1) || /^\d{1,3}$/.test(badge), `${code} TM${tm}: unexpected badge "${badge}"`);
    });
    if (own[0] === '1') numbered += 1; else counted += 1;
    // Only markdown escapes are stripped. A backslash that belongs to the content stays, e.g. LaTeX in a heading.
    for (const item of items) assert.ok(!item.label.includes('\\.'), `${code} TM${tm}: label still escaped "${item.label}"`);
  }
}
assert.ok(numbered > 0, 'at least one other reading starts its own numbering at 1');
ok(`other courses: ${numbered} readings start at 1, ${counted} fall back to the counter, none shows an escape`);

// ---- The counter still applies when a heading has no number of its own.
const plain = buildReadingOutline([
  { kind: 'h2', text: 'Ruang Lingkup' },
  { kind: 'h3', text: 'Rincian' },
  { kind: 'h2', text: 'Penutup' },
]);
assert.deepEqual(plain.map((item) => item.badge), ['1', undefined, '2'], 'unnumbered headings are counted 1, 2');
assert.deepEqual(plain.map((item) => item.label), ['Ruang Lingkup', 'Rincian', 'Penutup']);
assert.equal(readingOutlineLabel(plain[0]), '01 · Ruang Lingkup');
ok('unnumbered headings keep the counted badge');

console.log(`Daftar Isi guard passed (${passes.length} groups):`);
for (const label of passes) console.log(`  - ${label}`);
