import { runPteGraphRendererDomProbe } from './pte-bank-graph-renderer-dom-contract.mjs';
const issues = await runPteGraphRendererDomProbe();
if (issues.length) {
  console.error(`PTE graph renderer DOM test failed (${issues.length}):`);
  issues.forEach((item) => console.error(`- [${item.code}] ${item.message}`));
  process.exit(1);
}
console.log('PTE graph renderer DOM test passed: 25/25 GraphPanel fixtures, SVG hosts, role=img, classes, inline styles, and computed visibility are valid.');
