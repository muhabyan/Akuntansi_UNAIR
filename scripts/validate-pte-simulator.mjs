import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const root = process.cwd();
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const normalize = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const normalizeChoice = (value) => String(value).toLowerCase().replace(/\s+/g, ' ').trim();

const vite = await createServer({ appType: 'custom', logLevel: 'error', server: { middlewareMode: true, hmr: { port: 24779 } }, optimizeDeps: { noDiscovery: true } });
try {
  const simulator = await vite.ssrLoadModule('/src/data/quizzes/ekt109Simulator.ts');
  const bankModule = await vite.ssrLoadModule('/src/data/banksoal/ekt109Bank.ts');
  const pteSimulatorModule = await vite.ssrLoadModule('/src/components/PteSimulatorTab.tsx');
  const sets = pteSimulatorModule.PTE_SIMULATOR_SETS;
  const expected = {
    uts: {
      count: 70,
      tmRange: [1, 7],
      bankCount: 34,
      graphCount: 8,
      kinds: { mcq: 36, 'graph-mcq': 8, 'multi-select': 8, 'account-match': 6, ordering: 4, 'report-fill': 8 },
      tmCounts: { 1: 9, 2: 10, 3: 11, 4: 10, 5: 10, 6: 10, 7: 10 },
      maxPerTm: 11,
    },
    uas: {
      count: 80,
      tmRange: [8, 14],
      bankCount: 56,
      graphCount: 17,
      kinds: { mcq: 32, 'graph-mcq': 17, 'multi-select': 8, 'account-match': 8, ordering: 4, 'report-fill': 11 },
      tmCounts: { 8: 10, 9: 9, 10: 11, 11: 13, 12: 11, 13: 15, 14: 11 },
      maxPerTm: 15,
    },
  };
  const dataBySet = {
    uts: simulator.EKT109_QUIZ_UTS_SIMULATOR,
    uas: simulator.EKT109_QUIZ_UAS_SIMULATOR,
  };

  assert(Array.isArray(sets) && sets.length === 2, `Registry EKT109 harus memiliki tepat 2 set, aktual ${sets?.length}`);
  assert(sets[0]?.id === 'uts' && sets[1]?.id === 'uas', `Urutan set EKT109 harus uts lalu uas, aktual ${sets.map((set) => set.id).join(', ')}`);

  const allIds = new Set();
  const allPrompts = new Map();
  for (const [setId, questions] of Object.entries(dataBySet)) {
    const contract = expected[setId];
    assert(Array.isArray(questions), `${setId} bukan array`);
    assert(questions.length === contract.count, `${setId} count ${questions.length}, expected ${contract.count}`);
    assert(sets.find((set) => set.id === setId)?.items.length === contract.count, `Registry ${setId} count tidak sesuai`);
    assert(sets.find((set) => set.id === setId)?.label.includes('90 Menit'), `Label ${setId} belum menyebut 90 Menit`);

    const kinds = {};
    const tms = {};
    const answerPositions = {};
    let graphCount = 0;
    let bankCount = 0;

    questions.forEach((question, index) => {
      const label = `${setId}#${index + 1} ${question.id ?? '(tanpa id)'}`;
      assert(typeof question.id === 'string' && question.id.length > 0, `${label}: ID wajib`);
      assert(!allIds.has(question.id), `${label}: ID duplikat`);
      allIds.add(question.id);
      assert(Number.isInteger(question.tm) && question.tm >= contract.tmRange[0] && question.tm <= contract.tmRange[1], `${label}: TM ${question.tm} di luar rentang`);
      tms[question.tm] = (tms[question.tm] ?? 0) + 1;
      assert(typeof question.topic === 'string' && question.topic.startsWith(`TM${question.tm}`), `${label}: topic tidak sinkron TM`);
      assert(typeof question.skill === 'string' && question.skill.length >= 3, `${label}: skill kosong`);
      assert(['basic', 'medium', 'advanced'].includes(question.difficulty), `${label}: difficulty invalid`);
      assert(typeof question.q === 'string' && question.q.trim().length >= 12, `${label}: prompt terlalu pendek`);
      assert(typeof question.explanation === 'string' && question.explanation.trim().length >= 12, `${label}: explanation terlalu pendek`);
      assert(typeof question.sourceRef === 'string' && question.sourceRef.trim().length >= 8, `${label}: sourceRef wajib`);
      if (question.id.startsWith('PTE-SIM-')) {
        assert(Array.isArray(question.sourceAnchors) && question.sourceAnchors.length >= 1 && question.sourceAnchors.every((anchor) => typeof anchor === 'string' && anchor.trim().length >= 3), `${label}: sourceAnchors supplement wajib`);
      }

      const promptKey = normalize(question.q);
      const duplicate = allPrompts.get(promptKey);
      assert(!duplicate, `${label}: prompt identik dengan ${duplicate}`);
      allPrompts.set(promptKey, label);

      if (question.id.startsWith('PTE-BANK-')) bankCount += 1;
      const kind = question.svg ? 'graph-mcq' : (question.kind ?? 'mcq');
      kinds[kind] = (kinds[kind] ?? 0) + 1;

      if (!question.kind || question.kind === 'mcq') {
        assert(Array.isArray(question.options) && question.options.length >= 2 && question.options.length <= 5, `${label}: opsi MCQ invalid`);
        assert(new Set(question.options.map(normalizeChoice)).size === question.options.length, `${label}: opsi MCQ duplikat`);
        assert(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length, `${label}: answer index invalid`);
        answerPositions[question.answer] = (answerPositions[question.answer] ?? 0) + 1;
        if (question.svg) {
          graphCount += 1;
          assert(typeof question.altText === 'string' && question.altText.length >= 20, `${label}: altText grafik tidak memadai`);
          assert(question.svg.includes('<svg') && question.svg.includes('role="img"'), `${label}: SVG grafik invalid`);
        }
      } else if (question.kind === 'multi-select') {
        assert(question.options.length >= 3, `${label}: multi-select minimal 3 opsi`);
        assert(question.answers.length >= 2 && question.answers.length <= question.options.length, `${label}: multi-select answer count invalid`);
        assert(new Set(question.answers).size === question.answers.length, `${label}: jawaban multi-select duplikat`);
        assert(question.answers.every((answer) => Number.isInteger(answer) && answer >= 0 && answer < question.options.length), `${label}: indeks multi-select invalid`);
      } else if (question.kind === 'account-match') {
        assert(question.pairs.length >= 2, `${label}: matching minimal 2 pasangan`);
        assert(new Set(question.choices).size === question.choices.length, `${label}: choices matching duplikat`);
        assert(question.pairs.every((pair) => question.choices.includes(pair.answer)), `${label}: jawaban matching tidak ada di choices`);
        assert(new Set(question.pairs.map((pair) => pair.prompt)).size === question.pairs.length, `${label}: prompt matching duplikat`);
      } else if (question.kind === 'ordering') {
        assert(question.items.length >= 3, `${label}: ordering minimal 3 langkah`);
        assert(question.items.length === question.correctOrder.length, `${label}: panjang items dan correctOrder berbeda`);
        assert(new Set(question.items).size === question.items.length, `${label}: items ordering duplikat`);
        assert(question.correctOrder.every((item) => question.items.includes(item)), `${label}: correctOrder berisi item asing`);
      } else if (question.kind === 'report-fill') {
        assert(question.blanks.length >= 1, `${label}: report-fill tanpa blank`);
        assert(new Set(question.blanks.map((blank) => blank.id)).size === question.blanks.length, `${label}: blank ID duplikat`);
        assert(question.blanks.every((blank) => Number.isFinite(blank.answer) && (blank.tolerance ?? 0) >= 0), `${label}: jawaban numerik invalid`);
      } else {
        assert(false, `${label}: kind tidak didukung ${(question).kind}`);
      }
    });

    for (let tm = contract.tmRange[0]; tm <= contract.tmRange[1]; tm += 1) {
      assert((tms[tm] ?? 0) >= 8, `${setId}: coverage TM${tm} hanya ${tms[tm] ?? 0}, minimal 8`);
      assert((tms[tm] ?? 0) <= contract.maxPerTm, `${setId}: coverage TM${tm} ${tms[tm] ?? 0}, maksimum ${contract.maxPerTm}`);
      assert((tms[tm] ?? 0) === contract.tmCounts[tm], `${setId}: distribusi TM${tm} ${tms[tm] ?? 0}, expected ${contract.tmCounts[tm]}`);
    }
    assert(bankCount === contract.bankCount, `${setId}: soal turunan bank ${bankCount}, expected ${contract.bankCount}`);
    assert(graphCount === contract.graphCount, `${setId}: grafik ${graphCount}, expected ${contract.graphCount}`);
    for (const [kind, count] of Object.entries(contract.kinds)) {
      assert((kinds[kind] ?? 0) === count, `${setId}: kind ${kind} ${(kinds[kind] ?? 0)}, expected ${count}`);
    }
    const positions = Object.values(answerPositions);
    assert(Math.max(...positions) - Math.min(...positions) <= 7, `${setId}: distribusi kunci MCQ terlalu timpang ${JSON.stringify(answerPositions)}`);
  }

  const eligibleBank = bankModule.EKT109_BANK_QUESTIONS.filter((question) => question.kind !== 'short-answer');
  const simulatorBankIds = new Set([...dataBySet.uts, ...dataBySet.uas].filter((question) => question.id.startsWith('PTE-BANK-')).map((question) => question.id));
  assert(eligibleBank.length === 90, `Eligible bank count ${eligibleBank.length}, expected 90`);
  assert(eligibleBank.every((question) => simulatorBankIds.has(question.id)), 'Seluruh 90 soal bank eligible harus masuk simulator tepat sekali');
  assert(![...dataBySet.uts, ...dataBySet.uas].some((question) => question.id.startsWith('PTE-BANK-') && question.id.endsWith('005') && question.q.includes('pemerintah memiliki anggaran')), 'Guided short answer tidak boleh masuk simulator');

  const quizView = read('src/components/QuizView.tsx');
  const quizIntegrity = read('src/lib/quizExamIntegrity.ts');
  const quizRegistry = read('src/data/quizzes/index.ts');
  const courseLayout = read('src/components/course/CourseLayout.tsx');
  assert(quizView.includes("EKT109: ['uts', 'uas']"), 'EKT109 belum terdaftar sebagai timed exam set');
  assert(quizView.includes("'EKT109:uts': 'v2'") && quizView.includes("'EKT109:uas': 'v2'"), 'Session version EKT109 belum dinaikkan ke v2');
  assert(quizView.includes('orderingAnswers') && quizIntegrity.includes("question.kind === 'ordering'"), 'Dukungan ordering belum lengkap');
  assert(quizView.includes('markedForReview') && quizView.includes('Ditandai'), 'Mark for review belum tersimpan atau belum tampil');
  assert(quizView.includes('question.svg') && quizView.includes('question.altText'), 'Graph question belum dirender di QuizView');
  assert(quizIntegrity.includes('svg: question.svg') && quizIntegrity.includes('correctOrder: question.correctOrder'), 'Fingerprint belum mencakup grafik dan ordering');
  assert(quizIntegrity.includes('options:') && quizIntegrity.includes('answer:') && quizIntegrity.includes('answers:') && quizIntegrity.includes('blanks:') && quizIntegrity.includes('pairs:') && quizIntegrity.includes('sourceRef:') && quizIntegrity.includes('sourceAnchors:'), 'Fingerprint belum mencakup seluruh field jawaban dan provenance');
  assert(quizView.includes('supportsPreStartConcealment') && quizView.includes('examContentVisible'), 'Pre-start concealment PTE belum tersedia');
  assert(quizView.includes('quiz-filter-wrong') || quizView.includes('quiz-filter-${value}'), 'Filter jawaban salah belum tersedia');
  assert(!quizRegistry.includes("from './ekt109Simulator'"), 'Shared quiz registry tidak boleh membawa dataset simulator PTE');
  assert(courseLayout.includes('isPteCourse ? <PteQuizCard'), 'CourseLayout belum mengisolasi simulator PTE melalui lazy card khusus');
} finally {
  await vite.close();
}

if (failures.length) {
  console.error(`PTE simulator validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE simulator validation passed: UTS 70, UAS 80, 90-minute registry, full TM coverage, balanced objective formats, graphs, ordering, persistence metadata, and all 90 eligible bank questions preserved.');
