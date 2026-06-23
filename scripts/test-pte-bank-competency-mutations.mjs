import { loadPteBankQuestions } from './pte-bank-source-loader.mjs';
import { validatePteBankCompetencies } from './pte-bank-competency-validation.mjs';

const questions = loadPteBankQuestions();
const alternatives = [
  'Konsep Dasar',
  'Hubungan Sebab-Akibat',
  'Interpretasi Grafik',
  'Movement & Shift',
  'Perhitungan',
  'Kasus Integratif',
];
const failures = [];
for (const question of questions) {
  const mutated = structuredClone(questions);
  const target = mutated.find((item) => item.id === question.id);
  target.competency = alternatives.find((value) => value !== question.competency);
  const errors = validatePteBankCompetencies(mutated);
  if (!errors.some((error) => error.includes(question.id))) {
    failures.push(`${question.id}: mutation competency tidak ditolak secara spesifik`);
  }
}
if (failures.length) {
  console.error(`PTE competency mutation test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`PTE competency mutation test passed: ${questions.length}/${questions.length} ID mutations rejected.`);
