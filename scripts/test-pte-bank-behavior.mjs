import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

async function importStandalone(rel) {
  const source = fs.readFileSync(path.join(root, rel), 'utf8').replace(/^import[^;]+;\s*$/gm, '');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
    fileName: rel,
  }).outputText;
  const temp = path.join(os.tmpdir(), `pte-bank-behavior-${process.pid}-${Date.now()}.mjs`);
  fs.writeFileSync(temp, output);
  try { return await import(`${pathToFileURL(temp).href}?v=${Date.now()}`); }
  finally { fs.rmSync(temp, { force: true }); }
}

const behavior = await importStandalone('src/components/pteBankBehavior.ts');
const dataSource = fs.readFileSync(path.join(root, 'src/data/banksoal/ekt109Bank.ts'), 'utf8');
const match = dataSource.match(/EKT109_BANK_QUESTIONS[^=]*=\s*(\[[\s\S]*\]);\s*$/);
const questions = JSON.parse(match[1]);

const allFilters = { phase: 'all', tm: 'all', kind: 'all', competency: 'all', difficulty: 'all', query: '' };
assert(behavior.filterPteBankQuestions(questions, allFilters).length === 100, 'Filter all harus mengembalikan 100 soal');
assert(behavior.filterPteBankQuestions(questions, { ...allFilters, phase: 'pra-uts' }).length === 36, 'Filter Pra-UTS harus 36');
assert(behavior.filterPteBankQuestions(questions, { ...allFilters, phase: 'pra-uas' }).length === 64, 'Filter Pra-UAS harus 64');
assert(behavior.filterPteBankQuestions(questions, { ...allFilters, kind: 'graph' }).length === 25, 'Filter grafik harus 25');
assert(behavior.filterPteBankQuestions(questions, { ...allFilters, kind: 'short-answer' }).length === 10, 'Filter review terpandu harus 10');
const guidedReviews = questions.filter((question) => question.kind === 'short-answer');
assert(guidedReviews.every((question) => question.assessmentMode === 'guided-review' && question.simulatorEligible === false), 'Semua short-answer harus berkontrak review terpandu dan tidak eligible untuk simulator');
assert(behavior.filterPteBankQuestions(questions, { ...allFilters, query: 'dwl' }).some((q) => q.id === 'PTE-BANK-UTS-028'), 'Search harus menemukan soal DWL');

const paged = behavior.paginatePteBankQuestions(questions, 2, 10);
assert(paged.page === 2 && paged.pageCount === 10 && paged.visible.length === 10, 'Pagination halaman 2 invalid');
assert(behavior.paginatePteBankQuestions([], 8, 10).page === 1, 'Pagination kosong harus clamp ke halaman 1');
assert(behavior.paginatePteBankQuestions(questions, 99, 10).page === 10, 'Pagination harus clamp ke halaman terakhir');
const pageTen = behavior.paginatePteBankQuestions(questions, 10, 10);
const afterNarrowFilter = behavior.paginatePteBankQuestions(questions.slice(0, 1), pageTen.page, 10);
assert(afterNarrowFilter.page === 1 && afterNarrowFilter.pageCount === 1 && afterNarrowFilter.visible.length === 1, 'Kasus halaman 10 lalu filter satu halaman harus langsung clamp ke halaman 1');
assert(behavior.getPteBankPaginationAnnouncement(1, 1, 1) === '1 soal cocok. Halaman 1 dari 1.', 'Announcement pagination invalid');

const numeric = questions.find((q) => q.kind === 'numeric' && q.answer === 1600);
assert(behavior.normalizePteBankNumber('Rp1.600') === 1600, 'Parser Rp1.600 invalid');
assert(behavior.normalizePteBankNumber('1.600,50') === 1600.5, 'Parser 1.600,50 invalid');
assert(behavior.normalizePteBankNumber('-3') === -3, 'Parser angka negatif invalid');
assert(behavior.normalizePteBankNumber('abc') === null, 'Parser nonangka harus null');
assert(behavior.isPteNumericCorrect(numeric, '1.600'), 'Numeric checker harus menerima format ribuan Indonesia');

const matching = questions.find((q) => q.kind === 'matching');
const matchingAnswers = Object.fromEntries(matching.pairs.map((pair) => [pair.prompt, pair.answer]));
assert(behavior.isPteMatchingCorrect(matching, matchingAnswers), 'Matching benar tidak dikenali');
matchingAnswers[matching.pairs[0].prompt] = matching.choices.find((choice) => choice !== matching.pairs[0].answer);
assert(!behavior.isPteMatchingCorrect(matching, matchingAnswers), 'Matching salah harus ditolak');

const ordering = questions.find((q) => q.kind === 'ordering');
assert(behavior.isPteOrderingCorrect(ordering, ordering.correctOrder), 'Ordering benar tidak dikenali');
assert(!behavior.isPteOrderingCorrect(ordering, [...ordering.correctOrder].reverse()), 'Ordering terbalik harus ditolak');

assert(behavior.getPteOptionSemanticStatus(false, true, false) === 'neutral', 'Status sebelum check harus neutral');
assert(behavior.getPteOptionSemanticStatus(true, false, true) === 'correct', 'Opsi benar harus diberi status correct');
assert(behavior.getPteOptionSemanticStatus(true, true, false) === 'incorrect-selected', 'Pilihan salah aktif harus diberi status incorrect-selected');

const tabSource = fs.readFileSync(path.join(root, 'src/components/PteBankSoalTab.tsx'), 'utf8');
assert(tabSource.includes('const { page: currentPage, pageCount, visible } = pagination'), 'Komponen belum memakai pagination.page sebagai sumber current page');
assert(tabSource.includes('number={(currentPage - 1) * PAGE_SIZE + index + 1}'), 'Nomor soal belum memakai currentPage yang sudah diklem');
assert(tabSource.includes('disabled={currentPage === pageCount}'), 'Status tombol Berikutnya belum memakai currentPage');
assert(tabSource.includes('role="status" aria-live="polite"'), 'Announcement pagination aria-live belum tersedia');
assert(tabSource.includes('resultsSummaryRef.current?.focus()'), 'Focus management setelah navigasi halaman belum tersedia');
assert(!tabSource.includes('useEffect(() => { setPage(1); }, [phase'), 'Reset pagination masih bergantung pada effect filter yang berpotensi race');

const cardSource = fs.readFileSync(path.join(root, 'src/components/PteBankQuestionCard.tsx'), 'utf8');
assert(cardSource.includes('getPteOptionSemanticStatus'), 'Komponen belum memakai semantic option helper');
assert(cardSource.includes('aria-invalid'), 'Komponen belum menandai pilihan salah secara semantik');
assert(cardSource.includes('Jawaban benar'), 'Komponen belum memberi label screen-reader jawaban benar');
assert(cardSource.includes('Review terpandu, tidak dinilai otomatis'), 'Komponen belum menjelaskan kontrak review terpandu');
assert(cardSource.includes('disabled={!guidedDraft.trim()}'), 'Panduan review terpandu harus menunggu pengguna menulis jawaban');
assert(cardSource.includes('tidak boleh digunakan dalam simulator'), 'Komponen belum menjelaskan eksklusi simulator');

if (failures.length) {
  console.error(`PTE bank behavior test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE bank behavior test passed.');
console.log('Filters, guided-review contract, clamped pagination, live announcement, focus wiring, numeric parser, matching, ordering, and option semantics verified.');
