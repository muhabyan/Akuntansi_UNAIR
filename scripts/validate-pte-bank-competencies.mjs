import { loadPteBankQuestions } from './pte-bank-source-loader.mjs';
import { validatePteBankCompetencies } from './pte-bank-competency-validation.mjs';
import { PTE_BANK_COMPETENCY_COUNTS } from './pte-bank-competency-contract.mjs';

const failures = validatePteBankCompetencies(loadPteBankQuestions());
if (failures.length) {
  console.error(`PTE bank competency validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE bank competency validation passed.');
console.log(Object.entries(PTE_BANK_COMPETENCY_COUNTS).map(([key, value]) => `${key}:${value}`).join(' | '));
