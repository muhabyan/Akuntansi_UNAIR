// AKA201 practice: retain the TM01-TM07 package and verify TM09-TM15 against canonical source references.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const bundle = await build({
  stdin: {
    contents: [
      "export { AKA201_QUIZ, AKA201_QUIZ_UTS, AKA201_QUIZ_UAS } from './src/data/quizzes/aka201.ts';",
      "export { AKA201_FC } from './src/data/flashcards/aka201.ts';",
      "export { AKA201_BANK, AKA201_BANK_UTS, AKA201_BANK_UAS } from './src/data/banksoal/aka201.ts';",
      "export { getQuizSets } from './src/data/quizzes/index.ts';",
      "export { getFlashcards } from './src/data/flashcards/registry.ts';",
      "export { getBankSoalSets } from './src/data/banksoal/nonPte.ts';",
      "export { SEMESTERS } from './src/data/courseData.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);

const TMS = [1, 2, 3, 4, 5, 6, 7];
const pad = (n) => String(n).padStart(2, '0');
const sha = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const course = mod.SEMESTERS.flatMap((s) => s.groups ?? []).flatMap((g) => g.courses ?? []).find((c) => c.code === 'AKA201');
assert.ok(course, 'AKA201 is in the catalog');
const titles = new Map(course.materiTM1_7.map((m) => [m.tm, m.title]));

// Answer keys per TM, q01…q08, from the key spread in 06 and 07 ("Sebaran kunci" / "Kunci kuis").
const KEYS = { 1: 'CABCDABD', 2: 'BDACDBAC', 3: 'CADBDABC', 4: 'ACBDACDB', 5: 'BCDADBAC', 6: 'CBADBDCA', 7: 'CADBBDAC' };
// Essays whose discussion 06 labels Interpretasi, and the role-play essays (RPS weeks 3, 4 and 6).
const INTERPRETASI = ['tm01-bs03', 'tm02-bs03', 'tm03-bs02', 'tm04-bs01', 'tm05-bs03', 'tm06-bs03'];
const ROLE_PLAY = { 'tm03-bs01': 3, 'tm04-bs01': 4, 'tm06-bs03': 6 };
const CATEGORIES = new Set(['Definisi', 'Konsep', 'Klasifikasi', 'Perbandingan', 'Contoh', 'Standar', 'Hukum']);
const SOURCES = JSON.parse(fs.readFileSync(new URL('./fixtures/aka201-practice-sources.json', import.meta.url), 'utf8'));
const BASELINE = {
  quiz: '1cc3edb837bce79b9b659bef89d18324ac8629b393656075878cebb731e9ade2',
  cards: 'f6bcc8a6bebb5a8dff2477bdc738345ca5770527587fc77bafb59213d9874c1e',
  bank: '10a35782fad63e94dc0375f8732ede4de377648df7dee75f5e274bf897d0cfda',
};

const plainText = (label, text) => {
  assert.equal(typeof text, 'string', `${label}: text`);
  assert.ok(text.trim().length > 0, `${label}: not empty`);
  assert.doesNotMatch(text, /\*\*|`|\$|\\/, `${label}: no markdown, math or escapes (rendered as plain text)`);
};

// Quiz
const quiz = mod.AKA201_QUIZ_UTS;
assert.equal(quiz.length, 56, 'UTS quiz: 8 items per TM');
for (const tm of TMS) {
  const items = quiz.filter((q) => q.tm === tm);
  assert.deepEqual(items.map((q) => q.id), Array.from({ length: 8 }, (_, i) => `aka201-tm${pad(tm)}-q${pad(i + 1)}`), `TM${pad(tm)} quiz IDs from 06, in order`);
  assert.equal(items.map((q) => 'ABCD'[q.answer]).join(''), KEYS[tm], `TM${pad(tm)} answer keys follow the 06/07 spread`);
  for (const q of items) {
    assert.equal(q.topic, titles.get(tm), `${q.id}: topic is the TM title`);
    assert.equal(q.options.length, 4, `${q.id}: four options`);
    assert.equal(new Set(q.options).size, 4, `${q.id}: distinct options`);
    assert.ok(Array.isArray(q.sourceAnchors) && q.sourceAnchors.every((a) => /^C-\d{3}/.test(a)), `${q.id}: canonical anchors`);
    for (const [i, text] of [q.q, ...q.options, q.explanation].entries()) plainText(`${q.id} text ${i}`, text);
  }
}
assert.equal(sha(quiz), BASELINE.quiz, 'TM01-TM07 quiz unchanged');

// Flashcards
const cards = mod.AKA201_FC;
const newCards = cards.filter((c) => c.tm <= 7);
assert.equal(newCards.length, 84, 'TM01–TM07: 12 flashcards per TM');
assert.equal(new Set(cards.map((c) => c.id)).size, cards.length, 'flashcard IDs unique');
for (const tm of TMS) {
  const items = newCards.filter((c) => c.tm === tm);
  assert.deepEqual(items.map((c) => c.id), Array.from({ length: 12 }, (_, i) => `aka201-tm${pad(tm)}-fc${pad(i + 1)}`), `TM${pad(tm)} flashcard IDs from 06, in order`);
  for (const c of items) {
    assert.equal(c.phase, 'pra-uts', `${c.id}: phase`);
    assert.equal(c.topic, titles.get(tm), `${c.id}: topic is the TM title`);
    assert.ok(CATEGORIES.has(c.category), `${c.id}: category ${c.category}`);
    plainText(`${c.id} front`, c.front);
    plainText(`${c.id} back`, c.back);
  }
}
assert.equal(sha(newCards), BASELINE.cards, 'TM01-TM07 flashcards unchanged');
assert.ok(!cards.some((c) => /^aka201-tm0[1-7]-\d\d$/.test(c.id)), 'no old TM01–TM07 flashcard IDs left');

// Bank soal
const bank = mod.AKA201_BANK_UTS;
assert.equal(bank.length, 21, 'UTS bank: 3 essays per TM');
for (const tm of TMS) {
  const items = bank.slice((tm - 1) * 3, tm * 3);
  items.forEach((b, i) => {
    const key = `tm${pad(tm)}-bs${pad(i + 1)}`;
    assert.equal(b.scope, `TM ${tm}: ${titles.get(tm)}`, `${key}: scope`);
    assert.equal(b.type, key === 'tm07-bs01' ? 'calculation' : 'essay', `${key}: type (06 marks only TM07 bs01 as soal hitung)`);
    assert.equal(b.answerGuide.startsWith('(Interpretasi) '), INTERPRETASI.includes(key), `${key}: Interpretasi label on the discussion`);
    assert.doesNotMatch(b.answerGuide, /Poin jawaban:/, `${key}: the card already says "Panduan jawaban:"`);
    assert.equal(b.context, ROLE_PLAY[key] ? `Untuk role play Week ${ROLE_PLAY[key]}.` : undefined, `${key}: role-play note`);
    plainText(`${key} question`, b.question);
    plainText(`${key} answer guide`, b.answerGuide);
  });
}
assert.equal(sha(bank), BASELINE.bank, 'TM01-TM07 bank unchanged');

// Registries and catalog serve these items
const quizSets = Object.fromEntries(mod.getQuizSets('AKA201').map((s) => [s.id, s.items]));
assert.equal(quizSets.uts, mod.AKA201_QUIZ_UTS, 'Kuis tab: UTS set is the new TM01–TM07 quiz');
assert.equal(quizSets.all.length, quiz.length + mod.AKA201_QUIZ_UAS.length, 'Kuis tab: compilation has every item');
assert.equal(mod.getFlashcards('AKA201').length, cards.length, 'Flashcard tab: whole deck');
const bankSets = Object.fromEntries(mod.getBankSoalSets('AKA201').map((s) => [s.id, s.items]));
assert.equal(bankSets.uts, mod.AKA201_BANK_UTS, 'Bank Soal tab: UTS set is the new essays');
assert.equal(course.flashcardCount, cards.length, 'catalog flashcardCount matches the deck');


// Post-UTS: the published catalog uses TM09-TM15, with no practice items at the exam week TM08.
const POST_TMS = [9, 10, 11, 12, 13, 14, 15];
const postTitles = new Map(course.materiTM8_14.map(m => [m.tm, m.title]));
const forbidden = /\u2014|bukan[^.!?\n]*melainkan|tidak hanya[^.!?\n]*tetapi juga/i;
const countWords = text => text.trim().split(/\s+/).length;
const postText = (label, value) => {
  plainText(label, value);
  assert.doesNotMatch(value, forbidden, `${label}: editorial restrictions`);
};
const reference = (label, value, tm, anchors) => {
  const marker = `Rujukan 04 TM${pad(tm)}: `;
  assert.equal(value.split(marker).length, 2, `${label}: one visible canonical citation`);
  const citation = value.slice(value.indexOf(marker) + marker.length);
  const cited = [...citation.matchAll(/(C-\d{3}) \(/g)].map(m => m[1]);
  assert.ok(cited.length > 0, `${label}: canonical paragraph IDs`);
  assert.equal(new Set(cited).size, cited.length, `${label}: no repeated anchors`);
  if (anchors) assert.deepEqual(cited, anchors, `${label}: displayed and metadata anchors agree`);
  const claims = SOURCES.tms[tm]?.claims;
  const expected = cited.map(a => {
    assert.ok(claims?.[a], `${label}: anchor ${a} exists in the TM's canonical source`);
    assert.match(claims[a].ref, /\bp{1,2}\.|\bpara(?:s|graf)?\.?\s|JAKSIC/, `${label}: page or paragraph reference`);
    return `${a} (${claims[a].ref})`;
  }).join('; ') + '.';
  assert.equal(citation, expected, `${label}: source pages and paragraphs match 04`);
  return cited;
};
const validatePostQuiz = questions => {
  assert.equal(questions.length, 56, 'TM09-TM15 quiz: 8 per TM');
  assert.equal(new Set(questions.map(q => q.id)).size, 56, 'post-UTS quiz IDs unique');
  for (const tm of POST_TMS) {
    const items = questions.filter(q => q.tm === tm);
    assert.deepEqual(items.map(q => q.id), Array.from({ length: 8 }, (_, i) => `aka201-tm${pad(tm)}-q${pad(i + 1)}`), `TM${tm}: quiz IDs and order`);
    assert.equal(items.map(q => 'ABCD'[q.answer]).join(''), 'CABCDABD', `TM${tm}: independently reviewed answer keys`);
    assert.deepEqual([0, 1, 2, 3].map(a => items.filter(q => q.answer === a).length), [2, 2, 2, 2], `TM${tm}: balanced keys`);
    for (const q of items) {
      assert.equal(q.topic, postTitles.get(tm), `${q.id}: catalog topic`);
      assert.equal(q.options.length, 4, `${q.id}: four options`);
      assert.equal(new Set(q.options).size, 4, `${q.id}: options distinct`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3, `${q.id}: valid key`);
      assert.equal(new Set(q.options.map(countWords)).size, 1, `${q.id}: distractors have exactly the same word count`);
      assert.ok(q.sourceAnchors?.length, `${q.id}: source anchors required`);
      reference(q.id, q.sourceRef, tm, q.sourceAnchors);
      assert.ok(q.explanation.endsWith(q.sourceRef), `${q.id}: citation displayed in explanation`);
      for (const [i, v] of [q.q, ...q.options, q.explanation].entries()) postText(`${q.id} text ${i}`, v);
    }
  }
};
const validatePostCards = deck => {
  assert.equal(deck.length, 84, 'TM09-TM15: 12 flashcards per TM');
  assert.equal(new Set(deck.map(c => c.id)).size, 84, 'post-UTS flashcard IDs unique');
  for (const tm of POST_TMS) {
    const items = deck.filter(c => c.tm === tm);
    assert.deepEqual(items.map(c => c.id), Array.from({ length: 12 }, (_, i) => `aka201-tm${pad(tm)}-fc${pad(i + 1)}`), `TM${tm}: flashcard IDs and order`);
    for (const c of items) {
      assert.equal(c.phase, 'pra-uas', `${c.id}: phase`);
      assert.equal(c.topic, postTitles.get(tm), `${c.id}: catalog topic`);
      assert.ok(CATEGORIES.has(c.category), `${c.id}: category`);
      postText(`${c.id} front`, c.front); postText(`${c.id} back`, c.back);
      reference(c.id, c.back, tm);
    }
  }
};
const validatePostBank = essays => {
  assert.equal(essays.length, 21, 'TM09-TM15: 3 bank questions per TM');
  for (const tm of POST_TMS) {
    const scope = `TM ${tm}: ${postTitles.get(tm)}`;
    const items = essays.filter(e => e.scope === scope);
    assert.equal(items.length, 3, `TM${tm}: three bank questions with catalog scope`);
    for (const [i, e] of items.entries()) {
      assert.ok(['essay', 'calculation'].includes(e.type), `${scope} #${i}: practice type`);
      postText(`${scope} #${i} question`, e.question); postText(`${scope} #${i} guide`, e.answerGuide);
      reference(`${scope} #${i}`, e.answerGuide, tm);
    }
  }
};
const postQuiz = mod.AKA201_QUIZ_UAS;
const postCards = cards.filter(c => c.tm >= 8);
const postBank = mod.AKA201_BANK_UAS;
validatePostQuiz(postQuiz); validatePostCards(postCards); validatePostBank(postBank);
assert.deepEqual(mod.AKA201_QUIZ, [...quiz, ...postQuiz], 'quiz compilation includes both phases');
assert.deepEqual(mod.AKA201_BANK, [...bank, ...postBank], 'bank compilation includes both phases');
assert.equal(quizSets.uas, postQuiz, 'UAS quiz registry serves TM09-TM15');
assert.equal(bankSets.uas, postBank, 'UAS bank registry serves TM09-TM15');
assert.deepEqual(mod.getFlashcards('AKA201'), cards, 'flashcard registry serves full deck');
assert.equal(course.flashcardCount, 168, 'catalog: 84 UTS + 84 UAS flashcards');

// Numeric examples independently recomputed from the supplied source inputs, not from the guide text.
assert.equal(120 * 0.7 * 365 * 800000, 24528000000, 'TM10 hotel expectation');
assert.ok(postBank[4].answerGuide.includes('Rp24.528.000.000') && postBank[4].answerGuide.includes('Rp735.840.000') && postBank[4].answerGuide.includes('Rp1.572.000.000'), 'TM10 hotel guide values');
assert.equal(150000 * 0.12 * 57 / 360, 2850, 'TM11 note interest, explicitly interpreted 360-day basis');
assert.ok(postBank[8].answerGuide.includes('2.850,00') && postBank[8].answerGuide.includes('basis 360 hari'), 'TM11 source caveat');
assert.equal(0.05 / (0.8 * 1), 0.0625, 'TM12 DR illustration');
assert.ok(postBank[9].answerGuide.includes('6,25%') && postBank[9].answerGuide.includes('bukan estimasi presisi'), 'TM12 model is conceptual');
assert.equal([4102, 4215, 4102, 4380, 4215].reduce((a, b) => a + b), 21014, 'TM13 hash total');
assert.equal([12500000, 8750000, 3250000, 20000000, 5500000].reduce((a, b) => a + b), 50000000, 'TM13 financial total');
assert.ok(postBank[13].answerGuide.includes('21.014') && postBank[13].answerGuide.includes('20.942'), 'TM13 original and changed hash totals');
assert.equal(4 / 40 * 100, 10, 'TM14 control deviation');
assert.ok(postBank[16].answerGuide.includes('10%') && postBank[16].answerGuide.includes('2,5%'), 'TM14 observed and expected deviation');
assert.equal(240 + 1800 - 1650, 390, 'TM15 roll-forward');
assert.ok(postBank[18].answerGuide.includes('Rp390 juta') && postBank[18].answerGuide.includes('18%') && postBank[18].answerGuide.includes('12%'), 'TM15 balance and separate findings');
assert.ok(postQuiz[14].explanation.includes('Catatan sumber') && postQuiz[14].explanation.includes('2.406.326'), 'TM10 corrected book typo');
assert.ok(postCards[64].back.includes('Catatan sumber') && postCards[64].back.includes('TOC saja'), 'TM14 TOC-only caveat');
assert.ok(postQuiz[21].explanation.includes('Catatan sumber') && postQuiz[21].explanation.includes('ISA 230'), 'TM11 assembly caveat');

// Prove the guard rejects realistic content and integration regressions.
const mutation = (name, original, validate, change) => {
  const copy = structuredClone(original); change(copy);
  assert.throws(() => validate(copy), undefined, `mutation caught: ${name}`);
};
mutation('answer key', postQuiz, validatePostQuiz, q => { q[0].answer = 0; });
mutation('source missing', postQuiz, validatePostQuiz, q => { delete q[0].sourceAnchors; });
mutation('wrong page', postQuiz, validatePostQuiz, q => { q[0].sourceRef = q[0].sourceRef.replace('p.185', 'p.999'); });
mutation('wrong TM for anchor', postQuiz, validatePostQuiz, q => { q[0].tm = 10; });
mutation('unequal distractors', postQuiz, validatePostQuiz, q => { q[0].options[0] += ' tambahan'; });
mutation('em dash', postQuiz, validatePostQuiz, q => { q[0].q += '\u2014'; });
mutation('forbidden contrast', postQuiz, validatePostQuiz, q => { q[0].q += ' bukan catatan melainkan opini'; });
mutation('forbidden expansion', postQuiz, validatePostQuiz, q => { q[0].q += ' tidak hanya bukti tetapi juga opini'; });
mutation('invisible citation', postQuiz, validatePostQuiz, q => { q[0].explanation = 'Strategi audit menyeluruh.'; });
mutation('flashcard citation', postCards, validatePostCards, c => { c[0].back = 'Tanpa rujukan.'; });
mutation('flashcard numbering', postCards, validatePostCards, c => { c[0].tm = 8; });
mutation('bank source', postBank, validatePostBank, b => { b[0].answerGuide = 'Tanpa rujukan.'; });
mutation('bank scope', postBank, validatePostBank, b => { b[0].scope = 'TM 8'; });

// Optional exact-file audit against the local inbox; ordinary CI is portable using the fixture.
if (process.env.AKA201_SOURCE_ROOT) {
  for (const tm of POST_TMS) {
    const folder = path.join(process.env.AKA201_SOURCE_ROOT, `TM${pad(tm)}`);
    for (const [filename, field] of [['04_canonical_spec.md', 'canonicalSha256'], ['05_student_learning_version.md', 'studentSha256']]) {
      const bytes = fs.readFileSync(path.join(folder, filename), 'utf8');
      assert.equal(createHash('sha256').update(bytes).digest('hex'), SOURCES.tms[tm][field], `TM${tm}: exact ${filename} source fingerprint`);
    }
  }
}
console.log('aka201 practice: TM01-TM07 unchanged; TM09-TM15 quiz 56, flashcards 84, bank 21; sources, balanced options, numeric cases, registries, and 13 mutations PASS');
