import {
  PTE_BANK_COMPETENCY_CONTRACT,
  PTE_BANK_COMPETENCY_COUNTS,
  PTE_BANK_COMPETENCY_RUBRIC,
  PTE_BANK_COMPETENCY_RUBRIC_VERSION,
} from './pte-bank-competency-contract.mjs';

const ALLOWED = new Set([
  'Konsep Dasar',
  'Hubungan Sebab-Akibat',
  'Interpretasi Grafik',
  'Movement & Shift',
  'Perhitungan',
  'Kasus Integratif',
]);

export function validatePteBankCompetencies(questions) {
  const failures = [];
  const ids = new Set(questions.map((question) => question.id));
  if (PTE_BANK_COMPETENCY_RUBRIC_VERSION !== '6.0.2') failures.push(`Rubric version ${PTE_BANK_COMPETENCY_RUBRIC_VERSION}, expected 6.0.2`);
  for (const competency of ALLOWED) {
    const rubric = PTE_BANK_COMPETENCY_RUBRIC[competency];
    if (!rubric?.definition || !rubric?.excludes) failures.push(`${competency}: rubric tidak lengkap`);
  }
  const contractIds = Object.keys(PTE_BANK_COMPETENCY_CONTRACT);

  if (questions.length !== contractIds.length) {
    failures.push(`Jumlah soal ${questions.length}, contract ${contractIds.length}`);
  }

  for (const id of contractIds) {
    if (!ids.has(id)) failures.push(`${id}: hilang dari dataset`);
  }

  const counts = {};
  for (const question of questions) {
    if (!ALLOWED.has(question.competency)) {
      failures.push(`${question.id}: competency tidak dikenal (${question.competency})`);
      continue;
    }
    const expected = PTE_BANK_COMPETENCY_CONTRACT[question.id];
    if (!expected) failures.push(`${question.id}: tidak memiliki contract kompetensi`);
    else if (question.competency !== expected) {
      failures.push(`${question.id}: competency ${question.competency}, expected ${expected}`);
    }
    counts[question.competency] = (counts[question.competency] ?? 0) + 1;

    if (question.kind === 'graph' && question.competency !== 'Interpretasi Grafik') {
      failures.push(`${question.id}: soal graph harus Interpretasi Grafik`);
    }
    if (question.kind === 'numeric' && question.competency !== 'Perhitungan') {
      failures.push(`${question.id}: soal numeric harus Perhitungan`);
    }
  }

  for (const [competency, expected] of Object.entries(PTE_BANK_COMPETENCY_COUNTS)) {
    if ((counts[competency] ?? 0) !== expected) {
      failures.push(`${competency}: ${counts[competency] ?? 0}, expected ${expected}`);
    }
  }

  const movementIds = questions
    .filter((question) => question.competency === 'Movement & Shift')
    .map((question) => question.id)
    .sort();
  const expectedMovement = ['PTE-BANK-UTS-013', 'PTE-BANK-UTS-015', 'PTE-BANK-UTS-033'];
  if (movementIds.join('|') !== expectedMovement.join('|')) {
    failures.push(`Movement & Shift IDs ${movementIds.join(', ')}, expected ${expectedMovement.join(', ')}`);
  }

  return failures;
}
