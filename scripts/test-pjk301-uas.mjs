import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import katex from 'katex';

const bundle = await build({ stdin: { contents: [
  "export {PJK301_READINGS,PJK301_REVIEW_READINGS} from './src/data/pjk2/pjk2Data';",
  "export {PJK301_QUIZ_UTS,PJK301_QUIZ_UAS} from './src/data/quizzes/pjk301';",
  "export {PJK301_FC} from './src/data/flashcards/pjk301';",
  "export {PJK301_BANK_UTS,PJK301_BANK_UAS} from './src/data/banksoal/pjk301';",
  "export {ALL_COURSES} from './src/data/courseData';",
  "export {getQuizSets} from './src/data/quizzes/index';",
  "export {RELEASES} from './src/data/releaseNotes';",
].join('\n'), resolveDir: process.cwd(), loader: 'ts' }, bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent' });
const m = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const quiz = m.PJK301_QUIZ_UAS;
const cards = m.PJK301_FC.filter(c => c.phase === 'pra-uas');
const banks = m.PJK301_BANK_UAS;
const tms = [9, 10, 11, 12, 13, 14, 15];
const sourceManifest = JSON.parse(readFileSync('scripts/fixtures/pjk301-uas-sources.json', 'utf8'));
const openSources = sourceManifest.openLearningSources;
assert.equal(openSources.length, 7);
for (const source of openSources) {
  const url = new URL(source.url);
  assert.ok(['pajak.go.id', 'www.pajak.go.id', 'repository.ut.ac.id', 'ojk.go.id'].includes(url.hostname));
  assert.match(source.sha256, /^[a-f0-9]{64}$/);
  assert.ok(source.edition && source.limitation && source.pages > 0);
  for (const [tm, pages] of Object.entries(source.reviewedPagesByTm)) {
    assert.ok(tms.includes(+tm));
    assert.ok(pages.every(page => Number.isInteger(page) && page > 0 && page <= source.pages));
  }
}
const count = (xs, tm, field = 'tm') => xs.filter(x => field === 'scope' ? x.scope.startsWith(`TM ${tm}:`) : x.tm === tm).length;
assert.deepEqual(tms.map(tm => count(quiz, tm)), [10, 10, 10, 8, 8, 8, 6]);
assert.deepEqual(tms.map(tm => count(cards, tm)), tms.map(() => 6));
assert.deepEqual(tms.map(tm => count(banks, tm, 'scope')), tms.map(() => 2));
assert.equal(quiz.length, 60); assert.equal(cards.length, 42); assert.equal(banks.length, 14);
const checkReference = text => {
  assert.match(text, /Rujukan:/);
  assert.match(text, /halaman PDF|Pasal \d+[\s\S]*paragraf/);
};
for (const q of quiz) {
  assert.match(q.id, /^pjk301-uas-v3-tm\d{2}-\d{2}$/);
  assert.equal(new Set(q.options).size, 4);
  assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
  assert.ok(q.sourceRef && q.sourceAnchors.length);
  assert.ok(q.q.includes(q.sourceRef) && q.explanation.includes(q.sourceRef));
  checkReference(q.q); checkReference(q.explanation);
  assert.match(q.q, /2024|2025/);
  assert.ok(q.explanation.length > 180);
  // Prose distractors stay comparable; zero and longer rupiah amounts are natural exceptions.
  if (!q.options.every(x => /^Rp[\d.]+$/.test(x))) {
    const lengths = q.options.map(x => x.length);
    assert.ok(Math.max(...lengths) / Math.min(...lengths) < 2, q.id + ': option length hint');
  }
}
assert.equal(new Set(quiz.map(q => q.id)).size, 60);
assert.equal(new Set(cards.map(c => c.id)).size, 42);
assert.deepEqual([0, 1, 2, 3].map(a => quiz.filter(q => q.answer === a).length), [15, 15, 15, 15]);
cards.forEach(c => { checkReference(c.back); assert.match(c.id, /^pjk301-uas-v3-/); });
banks.forEach(b => { checkReference(b.context); checkReference(b.answerGuide); assert.ok(b.instructions.length >= 3); assert.ok(b.answerGuide.length > 600); assert.match(b.context, /2024|2025/); });

// Independent calculations guard high-risk rule branches, not authoring helper output.
const pph = pkp => {
  pkp = Math.max(0, Math.floor(pkp / 1000) * 1000);
  let result = 0, previous = 0;
  for (const [limit, rate] of [[60e6, .05], [250e6, .15], [500e6, .25], [5e9, .30], [Infinity, .35]]) {
    const slice = Math.min(pkp, limit) - previous;
    result += Math.max(0, slice) * rate;
    if (pkp <= limit) break;
    previous = limit;
  }
  return result;
};
const rp = n => 'Rp' + Math.round(n).toLocaleString('id-ID');
const key = (tm, no) => { const q = quiz.find(x => x.id.endsWith(`tm${String(tm).padStart(2, '0')}-${String(no).padStart(2, '0')}`)); return q.options[q.answer]; };
const expected = {
  9: [10e6*.02, Math.round(10e6/(1-.0225)), 1e6-pph(60e6-3e6-54e6), 12e6*.04, 4e6-3e6, 0, 14e6*.06, 250e6*.20],
  10: [pph(120e6-6e6-1.2e6-58.5e6)-11*200e3, pph(72e6-2.4e6-54e6), pph(.5*200e6), 0, 600e3*.005, (3e6/6)*.005*6, pph(.5*3e6), pph(80e6), 50e6*.05+400e6*.15+100e6*.25, 150e6*.05],
  11: [2.5e9+55e6-60e6-50e6-80e6, (4.8e9/20e9*2.365e9)*.11+(1-4.8e9/20e9)*2.365e9*.22, 457864000-25e6-35e6-180e6, pph(900e6*.4-63e6), pph(338765900), 600e6*.11, 1e9*.22, pph(500e6-100e6-58.5e6), (900e6-50e6)*.22, 300e6*.11],
  12: [200e6*.11, 200e6*(11/12)*.12, 222e6/1.11, (500e6+50e6)*11/12*.12, 0, 0, 11e6-7.7e6, 500e6*.12],
};
for (const [tm, values] of Object.entries(expected)) values.forEach((value, i) => assert.equal(key(+tm, i+1), rp(value), `Independent calculation TM${tm}/${i+1}`));
for (const [tm, no, value] of [[13,1,660e6],[13,3,3.3e6],[13,5,16.5e6],[13,6,1e6],[13,7,0],[13,8,1.1e6],[14,1,6e6],[14,2,28.6e6],[14,8,88e6],[15,1,(90000-80000-6000)*1000*30],[15,4,750*1000*30]]) assert.equal(key(tm,no),rp(value));
assert.equal(key(14,3),'Pengurang PM '+rp(44e6/4*(.8-.7)));
assert.equal(key(14,5),'Lebih bayar '+rp(Math.abs(33e6-22e6-16.5e6)));
assert.equal(key(14,6),'Masa Juli tahun 2024');
assert.match(key(15,6),/Belum pasti/);

for (const tm of tms) {
  const r = m.PJK301_READINGS[tm]; assert.equal(r.tm,tm);
  const guideIndex = r.blocks.findIndex(b => b.kind === 'h2' && b.text === 'Bacaan terbuka sesuai RPP');
  assert.ok(guideIndex >= 0, 'Every TM has an accessible reading path');
  for (const item of r.blocks[guideIndex + 1].items) {
    const link = item.match(/\]\((https:[^)]+)\)/)?.[1];
    assert.ok(link, 'Reading source is a clickable PDF');
    const url = new URL(link);
    const page = Number(url.hash.replace('#page=', ''));
    url.hash = '';
    const source = openSources.find(s => s.url === url.href);
    assert.ok(source?.reviewedPagesByTm[tm], 'PDF is inspected for this TM');
    assert.ok(page > 0 && page <= source.pages, 'PDF page anchor exists');
  }
  assert.equal(r.blocks.filter(b=>b.kind==='solution-reveal').length,2);
  assert.match(JSON.stringify(r),/Perkiraan fokus UAS/);
  for (const b of r.blocks.filter(b=>b.kind==='formula')) assert.doesNotThrow(()=>katex.renderToString(b.text,{throwOnError:true,strict:'error'}));
}
const annualizedPph = pph(56.9e6 * 12 / 4 - 54e6) * 4 / 12;
assert.equal(Math.round(annualizedPph - 3 * 15.5e6 * .07), 580000);
assert.ok(JSON.stringify(m.PJK301_READINGS[10]).includes('Rp3.835.000 - Rp3.255.000 = Rp580.000'), 'Source typo is corrected using the official regulation');
assert.match(m.PJK301_REVIEW_READINGS.uas.title,/TM09-TM15/);
const course = m.ALL_COURSES.find(x=>x.course.code==='PJK301').course;
assert.deepEqual(course.materiTM8_14.map(x=>x.tm),tms);
assert.equal(m.getQuizSets('PJK301').find(x=>x.id==='uas').items.length,60);
assert.equal(m.RELEASES[0].version,'v1.3.4'); assert.equal(m.RELEASES[1].version,'v1.3.3');

const before = JSON.parse(readFileSync('scripts/fixtures/pjk301-uts-baseline.json','utf8'));
const retained = {quiz:m.PJK301_QUIZ_UTS,cards:m.PJK301_FC.filter(c=>c.phase==='pra-uts'),bank:m.PJK301_BANK_UTS,readings:Object.fromEntries([1,2,3,4,5,6,7,8].map(tm=>[tm,m.PJK301_READINGS[tm]])),review:m.PJK301_REVIEW_READINGS.uts};
for (const [name,value] of Object.entries(retained)) assert.equal(createHash('sha256').update(JSON.stringify(value)).digest('hex'),before.hashes[name],name+': pre-UTS baseline retained');
const all = JSON.stringify([quiz,cards,banks,tms.map(tm=>m.PJK301_READINGS[tm]),m.PJK301_REVIEW_READINGS.uas]);
assert.ok(!/\u2014|bukan[^.!?]{0,140}melainkan|tidak hanya[^.!?]{0,140}tetapi juga/i.test(all));
assert.ok(!/\\\$|\$\d/.test(all));
console.log('PJK301 UAS PASS: seven TM; 60/42/14; balanced keys, citations, independent arithmetic, formulas, registry, release and pre-UTS snapshot.');
