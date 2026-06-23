import { loadPteBankQuestions } from './pte-bank-source-loader.mjs';
import {
  PTE_GRAPH_CONTRACT_IDS,
  mutatePteGraph,
  validatePteGraphSemantics,
} from './pte-bank-graph-contract.mjs';
import {
  getPteGraphTextMutationCases,
  mutatePteGraphText,
  validatePteGraphTextSemantics,
} from './pte-bank-graph-text-contract.mjs';
import {
  getPteGraphRenderedMutationCases,
  mutatePteGraphRendered,
  validatePteGraphRenderedQuestion,
} from './pte-bank-graph-render-contract.mjs';
import {
  getPteGraphEffectiveMutationCases,
  mutatePteGraphEffective,
  validatePteGraphEffectiveQuestion,
} from './pte-bank-graph-effective-contract.mjs';

const questions = loadPteBankQuestions();
const failures = [];
for (const id of PTE_GRAPH_CONTRACT_IDS) {
  const errors = validatePteGraphSemantics(mutatePteGraph(questions, id));
  if (!errors.some((error) => error.startsWith(`${id}:`))) {
    failures.push(`${id}: geometry mutation tidak ditolak secara spesifik`);
  }
}

const textCases = getPteGraphTextMutationCases();
for (const mutation of textCases) {
  const errors = validatePteGraphTextSemantics(mutatePteGraphText(questions, mutation));
  if (!errors.some((error) => error.startsWith(`${mutation.id}:`))) {
    failures.push(`${mutation.id}/${mutation.type}: text mutation tidak ditolak secara spesifik`);
  }
}

const renderedCases = getPteGraphRenderedMutationCases();
for (const mutation of renderedCases) {
  const mutated = mutatePteGraphRendered(questions, mutation);
  const target = mutated.find((question) => question.id === mutation.id);
  const errors = validatePteGraphRenderedQuestion(target);
  if (!errors.some((error) => error.startsWith(`${mutation.id}:`))) {
    failures.push(`${mutation.id}/${mutation.type}/${mutation.role ?? ''}: rendered mutation tidak ditolak secara spesifik`);
  }
}

const effectiveCases = getPteGraphEffectiveMutationCases();
for (const mutation of effectiveCases) {
  const mutated = mutatePteGraphEffective(questions, mutation);
  const target = mutated.find((question) => question.id === mutation.id);
  const errors = validatePteGraphEffectiveQuestion(target, { skipFingerprint: mutation.skipFingerprint });
  const expectedMarker = `[${mutation.expectedCode}]`;
  if (!errors.some((error) => error.startsWith(`${mutation.id} `) && error.includes(expectedMarker))) {
    failures.push(`${mutation.id}/${mutation.type}: expected ${mutation.expectedCode}, got ${errors.join(' | ') || 'PASS'}`);
  }
}

if (failures.length) {
  console.error(`PTE graph mutation test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`PTE graph geometry mutation test passed: ${PTE_GRAPH_CONTRACT_IDS.length}/${PTE_GRAPH_CONTRACT_IDS.length}.`);
console.log(`PTE graph text mutation test passed: ${textCases.length}/${textCases.length} axis/label/title/alt mutations rejected.`);
console.log(`PTE graph rendered mutation test passed: ${renderedCases.length}/${renderedCases.length} aria/visibility/paint/font/position/anchor mutations rejected.`);
console.log(`PTE graph effective mutation test passed: ${effectiveCases.length}/${effectiveCases.length} guard-specific root/layout/transform/style/overlay mutations rejected with fingerprint neutralized; fingerprint tested separately.`);
