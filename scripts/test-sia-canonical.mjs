import assert from 'node:assert/strict';
import { build } from 'esbuild';
import katex from 'katex';

const bundle = await build({
  entryPoints: ['src/data/sia/siaReadings.ts'], bundle: true, write: false,
  format: 'esm', platform: 'node', logLevel: 'silent',
});
const { AKS301_READINGS: readings } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);
const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);
const money = (value = '') => Number(value.replace(/[$,]/g, ''));
const required = {
  1: ['Transactional Data', 'Consumer Behavior Data', 'Product Availability & Cost Data',
    'Operational Statistics', '28%', '54%', '82', 'Starbucks', 'Sales_Orders', 'Faithful Representation',
    'Designer', 'Evaluator', 'CISA', 'CITP', 'CIA', 'Inbound Logistics', 'Operations', 'Outbound Logistics',
    'Marketing & Sales', 'Service', 'Firm Infrastructure', 'Human Resource Management', 'Technology Development',
    'Procurement', 'Sales Order', 'Picking Ticket', 'Packing Slip', 'Bill of Lading', 'Sales Invoice',
    'ERP', 'FRS', 'HRMS', 'SCM', 'CRM', 'MFA', 'RBAC', 'mandatory', '110{,}000', '$75,000',
    '$10,000', '$6,500', '$25,000', '$16,000', 'Kobelsky', 'Hendricks', 'Reverse logistics'],
  2: ['Volume', 'Variety', 'Velocity', 'Veracity', 'Financial Reporting', 'Management Accounting',
    'Auditing & Assurance', 'Tax Accounting', 'Ask the Question', 'Master the Data', 'Perform the Analysis',
    'Share the Story', 'Tulsa Honda', 'Accessibility', 'Reliability', 'Integrity', 'Ethics & Privacy', 'Data Type',
    '50%–90%', 'AICPA', 'Journal_ID', 'Entered_By', 'Approved_By', 'Reversal_Indicator', 'Reversal_Journal_ID',
    'Descriptive', 'Diagnostic', 'Predictive', 'Prescriptive', '$56,381.41', '$3,336.51', '159', '$297,927',
    '2.0251', '2.0050', 'Z < 1.80', '1.80 ≤ Z < 3.00', 'Z ≥ 3.00', '384.62', '434.78', '$3,043.48',
    '$2,800', '$4,500', '$12,000', 'JE-044', 'Goal Seek'],
};
let journals = 0;
let formulas = 0;
for (const tm of [1, 2]) {
  const reading = readings[tm];
  assert.equal(reading.tm, tm);
  const headings = reading.blocks.filter((block) => block.kind === 'h2');
  assert.equal(headings.length, 7, `TM${tm}: five teaching sections, practice, toolkit`);
  headings.forEach((heading, index) => assert.ok(heading.text.startsWith(`${index + 1}. `)));
  assert.equal(headings[5].text, '6. Worked Practice');
  assert.equal(headings[6].text, '7. Exam Toolkit');
  const text = JSON.stringify(reading);
  for (const term of required[tm]) assert.ok(text.includes(term), `TM${tm} missing ${term}`);
  assert.ok(!/\.content-inbox|canonical_spec|qa_manifest|docs\/content-audit/.test(text));
  const blocks = flatten(reading.blocks);
  assert.equal(blocks.filter((block) => block.kind === 'solution-reveal').length, 3);
  for (const block of blocks) {
    if (block.kind === 'table') {
      block.rows.forEach((row) => assert.equal(row.length, block.headers.length, `TM${tm}: table shape`));
    }
    if (block.kind === 'journal') {
      const debit = block.lines.reduce((sum, line) => sum + money(line.debit), 0);
      const credit = block.lines.reduce((sum, line) => sum + money(line.credit), 0);
      assert.ok(debit > 0);
      assert.equal(debit, credit, `TM${tm}: ${block.caption}`);
      journals++;
    }
    if (block.kind === 'formula') {
      assert.ok(block.text.includes('\\'), 'Use the native math-rendering path, not literal TeX in a plain-text formula');
      katex.renderToString(block.text, { throwOnError: true, displayMode: true, strict: 'error' });
      formulas++;
    }
  }
}
assert.ok(Math.abs(1.2 * .379 + 1.4 * .139 + 3.3 * -.253 + .6 * .896 + 1.673 - 2.0251) < 1e-10);
assert.ok(Math.abs(1.2 * .25 + 1.4 * .1 + 3.3 * .05 + .6 * .5 + 1.1 - 2.005) < 1e-10);
assert.equal(1600 / (7 - 3), 400);
assert.equal(Object.keys(readings).length, 14);
console.log(`SIA canonical PASS: TM1/TM2 coverage, section order, three practices each, ${journals} balanced journals, ${formulas} valid formulas, tables and numerical baselines.`);
