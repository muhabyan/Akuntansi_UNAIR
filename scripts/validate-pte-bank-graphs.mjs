import { loadPteBankQuestions } from './pte-bank-source-loader.mjs';
import { PTE_GRAPH_CONTRACT_IDS, validatePteGraphSemantics } from './pte-bank-graph-contract.mjs';
import { PTE_GRAPH_TEXT_CONTRACT, validatePteGraphTextSemantics } from './pte-bank-graph-text-contract.mjs';
import {
  PTE_GRAPH_RENDER_CONTRACT,
  validatePteGraphRenderedSemantics,
} from './pte-bank-graph-render-contract.mjs';
import {
  PTE_GRAPH_EFFECTIVE_HASHES,
  validatePteGraphEffectiveSemantics,
} from './pte-bank-graph-effective-contract.mjs';

const questions = loadPteBankQuestions();
const failures = [
  ...validatePteGraphSemantics(questions),
  ...validatePteGraphTextSemantics(questions),
  ...validatePteGraphRenderedSemantics(questions),
  ...validatePteGraphEffectiveSemantics(questions),
];
if (failures.length) {
  console.error(`PTE bank graph semantic validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`PTE bank graph semantic validation passed: ${PTE_GRAPH_CONTRACT_IDS.length}/${PTE_GRAPH_CONTRACT_IDS.length} graphs.`);
console.log(`Graph text contract passed: ${Object.keys(PTE_GRAPH_TEXT_CONTRACT).length}/${Object.keys(PTE_GRAPH_TEXT_CONTRACT).length} title/description/alt/axis/label sets.`);
console.log(`Rendered graph contract passed: ${Object.keys(PTE_GRAPH_RENDER_CONTRACT).length}/${Object.keys(PTE_GRAPH_RENDER_CONTRACT).length} aria/visibility/viewBox/position/anchor sets.`);
console.log(`Effective SVG contract passed: ${Object.keys(PTE_GRAPH_EFFECTIVE_HASHES).length}/${Object.keys(PTE_GRAPH_EFFECTIVE_HASHES).length} root/layout/transform/style/overlay/fingerprint sets.`);
console.log('Axes, labels, captions, alt text, resolved ARIA IDs, visibility, label anchors, effective root size, transform/style/overlay exclusion, slopes, shifts, equilibrium, wedges, flow direction, macro curves, and diminishing returns verified.');
