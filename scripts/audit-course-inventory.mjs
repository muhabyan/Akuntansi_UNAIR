import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const output = process.argv[2] ?? 'tmp/source-audit';
fs.mkdirSync(output, { recursive: true });
const bundle = await build({
  stdin: { contents: [
    "export { ALL_COURSES } from './src/data/courseData.ts';",
    "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
    "export { getFlashcards } from './src/data/flashcards/registry.ts';",
    "export { getQuizSets } from './src/data/quizzes/index.ts';",
    "export { getBankSoalSets } from './src/data/banksoal/index.ts';",
  ].join('\n'), resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent',
  plugins: [{ name: 'raw-reference', setup(build) {
    build.onResolve({ filter: /\?raw$/ }, args => ({ path: path.resolve(args.resolveDir, args.path.slice(0, -4)), namespace: 'raw-reference' }));
    build.onLoad({ filter: /.*/, namespace: 'raw-reference' }, args => ({ contents: fs.readFileSync(args.path, 'utf8'), loader: 'text' }));
  } }],
});
const m = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const walk = blocks => blocks.flatMap(b => [b, ...walk(b.blocks ?? []), ...walk(b.answer ?? [])]);
const rows = [];
for (const { course, semester } of m.ALL_COURSES) {
  const content = await m.loadCourseContent(course.code);
  const quizzes = m.getQuizSets(course.code);
  const cards = m.getFlashcards(course.code);
  const banks = await m.getBankSoalSets(course.code);
  const tms = Object.entries(content.readings).map(([tm, reading]) => ({
    tm: +tm, title: reading.title, blocks: walk(reading.blocks).length,
    figures: walk(reading.blocks).filter(b => b.kind === 'figure').length,
    formulas: walk(reading.blocks).filter(b => b.kind === 'formula').length,
    checks: walk(reading.blocks).filter(b => b.kind === 'self-check').length,
    ref: reading.ref,
  }));
  if (!tms.length && !cards.length && !quizzes.some(s => s.items.length)) continue;
  const isTemplate=/Ini adalah tempat teks|Anda dapat menempelkan hasil ringkasan/.test(JSON.stringify(content.readings));
  rows.push({ code: course.code, name: course.name, newCode: course.newCode, semester, isTemplate, tms,
    quizSets: quizzes.map(s => ({ id: s.id, count: s.items.length })), cards: cards.length,
    bankSets: banks.map(s => ({ id: s.id, count: s.items.length })), reviews: Object.keys(content.reviews),
    references: course.references, catalogTms: [...course.materiTM1_7, ...course.materiTM8_14].map(x => x.tm),
  });
  fs.writeFileSync(path.join(output, `${course.code}.json`), JSON.stringify({ course, content, quizzes, cards, banks }, null, 2));
}
fs.writeFileSync(path.join(output, 'inventory.json'), JSON.stringify(rows, null, 2));
console.log(rows.map(r => `${r.code} | ${r.name} | TM ${r.tms.map(t => t.tm).join(',')} | Q ${r.quizSets.map(s => `${s.id}:${s.count}`).join(' ')} | FC ${r.cards} | BS ${r.bankSets.map(s => `${s.id}:${s.count}`).join(' ')}`).join('\n'));
