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
  3: ['Stewardship and Reporting', 'Accounting/Finance Operations', 'Business Management Support',
    'Strategy, Planning & Performance', 'Reporting & Control', 'Technology & Analytics', 'Business Acumen & Operations',
    'Leadership', 'Professional Ethics & Values', 'Technical Skills', 'Business Skills', 'People Skills',
    'Leadership Skills', 'User', 'Manager', 'Designer', 'Evaluator', 'CPA Evolution', 'ISC', 'BAR', 'TCP',
    'Procure-to-Pay', 'Order-to-Cash', 'Section 404', 'AS 2201', 'ICFR', 'walkthrough', 'Object Management Group',
    'Start Event', 'Intermediate Event', 'End Event', 'Active Verb + Noun', 'Subprocess', 'Sequence Flow',
    'Message Flow', 'Association', 'token', 'Exclusive (XOR)', 'Parallel (AND)', 'Inclusive (OR)', 'Pool',
    'Swimlane', 'Data Object', 'Data Store', 'Valid', 'Clear', 'Complete', 'Accurate', 'Starbucks',
    'ANSI X3.5', 'Document Flowchart', 'System Flowchart', 'Opportunity Flowchart', 'Deployment',
    'Value-Added', 'Cost-Added-Only', '33.33', '66.67%', 'Gane-Sarson', 'Context Diagram', 'Level-0 DFD',
    'Level-1 DFD', 'Black Hole', 'Miracle', 'Gray Hole', 'ISO 5807', 'BPMS', 'Authorization', 'Custody',
    'Recording', 'Reconciliation', 'Audit Data Standards', 'Unearned Gift Card Revenue', '$8.50', '$2.75'],
  4: ['Structure model', 'Activity model', 'Complexity Management', 'Requirements Elicitation',
    'Cross-Functional Alignment', 'Tacit to Explicit Knowledge Conversion', 'Section 404', 'Class Name', 'Attributes',
    'Operations', 'Resources (R)', 'Events (E)', 'Agents (A)', 'McCarthy', 'places', '0..1', '1..1', '0..*', '1..*',
    'Primary Key (PK)', 'Foreign Key (FK)', 'NOT NULL', 'UNIQUE', 'Generalization', 'Aggregation', 'Composition',
    'cascading delete', '{Payment_Date >= Invoice_Date}', 'Step 1', 'Step 5', 'single-table', 'joined-table',
    'First Normal Form (1NF)', 'linking table', 'composite primary key', 'Full-Time Fitness', 'Instructors',
    'Fitness_Classes', 'Gym_Members', 'Class_Enrollments', '(Class_ID, Member_ID)', '0..5', '1..40', '0..10',
    '1{,}000', '$150.00', 'Eligibility / Approval', 'Validation', 'Calculation', 'Risk Assessment',
    'Fraud Detection', 'Opportunity', 'Assignment', 'Targeting', 'Obligatory', 'Prohibited', 'Allowed', 'R-05',
    'Preventive', 'Detective', 'Corrective', 'Department Head', 'Peter Chen', "Crow's Foot", 'Department_ID',
    'Cash on Delivery (COD)', 'Credit Manager Sign-Off'],
  5: ['Database Management System (DBMS)', 'Data Dictionary', 'Database Administrator (DBA)', 'Codd', '1970',
    'Reduced Data Redundancy', 'Data Independence', 'Enforced Data Integrity', 'Ad-Hoc Query Flexibility',
    'Entity Integrity', 'Referential Integrity', 'Atomic Attribute (1NF)', 'Order Independence', 'atau null',
    "Steve's Stylin' Sunglasses", 'Sales_Order_Details', '(Invoice_Number, Item_Number)', 'Cash_Receipt',
    'Main form', 'Subform', 'combo box', '$180.00', '$65.00', 'Data Definition Language (DDL)',
    'Data Manipulation Language (DML)', 'SELECT *', 'INNER JOIN', 'BETWEEN', 'LIKE', 'MS Access', 'ORDER BY',
    'SELECT DISTINCT', 'GROUP BY', 'HAVING', 'SUM()', 'AVG()', 'COUNT()', 'MAX()', 'MIN()', '200.00', '350.00',
    '550.00', 'INSERT INTO', 'UPDATE', 'DELETE', '10,000', 'FI — Financial Accounting', 'CO — Controlling',
    'MM — Materials Management', 'SD — Sales and Distribution', 'PP — Production Planning', 'HR / PT',
    'Completeness', 'Transparency', 'Timeliness', 'Hershey', '27,000', 'SaaS', 'CapEx', 'OpEx', 'GDPR', 'OJK',
    'Vendor Lock-In', 'Legacy terpisah', 'On-premise ERP', 'Cloud ERP (SaaS)', '3–7 tahun', 'GR/IR', '$15,000'],
};
// Strings rendered through remark-math must not contain two unescaped "$": they turn into inline math.
const mathSafeTms = new Set([1, 2, 3, 4, 5]);
// Leading ">" or "#" in a rendered string becomes a blockquote or heading.
const markdownBlockSafeTms = new Set([3, 4, 5]);
const forbidden = [
  /\.content-inbox|canonical_spec|qa_manifest|docs\/content-audit/,
  /\bRMK\b|Abyan|Hafizh|143251119/,
  /automatic zero/i,
  /Context Diagram \(Level 0\)/,
];
// Two unescaped single "*" in one string become <em>, e.g. "(0..*) – (0..*)" renders "(0..<em>) – (0..</em>)".
// Only notation-like stars ("..*", '"*"', "*)") are checked, so deliberate *italics* and **bold** stay allowed.
const loneStars = (text) => [...text.replace(/`[^`]*`/g, '').matchAll(/(?<![\\*])\*(?!\*)/g)];
const hasNotationStarPair = (text) => {
  const stars = loneStars(text);
  const source = text.replace(/`[^`]*`/g, '');
  return stars.length >= 2 && stars.some((m) => /[.\d"]/.test(source[m.index - 1] ?? '') || /[)"]/.test(source[m.index + 1] ?? ''));
};
// Inline code spans are literal in markdown, so "$" inside backticks is safe and must stay unescaped.
const unescapedDollars = (text) => (text.replace(/`[^`]*`/g, '').match(/(?<!\\)\$/g) ?? []).length;
const renderedStrings = (block) => {
  const values = [];
  for (const [key, value] of Object.entries(block)) {
    if (['kind', 'blocks', 'lines', 'variant'].includes(key)) continue;
    if ((block.kind === 'formula' || block.kind === 'code') && key === 'text') continue;
    if (typeof value === 'string') values.push(value);
    if (Array.isArray(value)) values.push(...value.flat().filter((item) => typeof item === 'string'));
  }
  return values;
};

let journals = 0;
let formulas = 0;
const tms = Object.keys(required).map(Number);
for (const tm of tms) {
  const reading = readings[tm];
  assert.equal(reading.tm, tm);
  const headings = reading.blocks.filter((block) => block.kind === 'h2');
  assert.equal(headings.length, 7, `TM${tm}: five teaching sections, practice, toolkit`);
  headings.forEach((heading, index) => assert.ok(heading.text.startsWith(`${index + 1}. `)));
  assert.equal(headings[5].text, '6. Worked Practice');
  assert.equal(headings[6].text, '7. Exam Toolkit');
  const text = JSON.stringify(reading);
  for (const term of required[tm]) assert.ok(text.includes(term), `TM${tm} missing ${term}`);
  for (const pattern of forbidden) assert.ok(!pattern.test(text), `TM${tm} contains forbidden ${pattern}`);
  const blocks = flatten(reading.blocks);
  assert.equal(blocks.filter((block) => block.kind === 'solution-reveal').length, 3);
  const rendered = [reading.title, reading.intro, ...reading.objectives, ...blocks.flatMap(renderedStrings)];
  for (const value of rendered) {
    assert.ok(!hasNotationStarPair(value), `TM${tm}: escape "*" in multiplicity/wildcard notation to avoid accidental <em>: ${value.slice(0, 80)}`);
  }
  if (mathSafeTms.has(tm)) {
    for (const value of rendered) {
      assert.ok(unescapedDollars(value) < 2, `TM${tm}: escape "$" to avoid accidental inline math: ${value.slice(0, 80)}`);
    }
  }
  if (markdownBlockSafeTms.has(tm)) {
    for (const value of rendered) {
      assert.ok(!/^\s*(>|#)/.test(value), `TM${tm}: leading ">" or "#" renders as markdown block: ${value.slice(0, 80)}`);
    }
  }
  // Table cells are rendered as markdown: "1. text" or "- text" becomes a list and the marker disappears.
  for (const cell of blocks.filter((block) => block.kind === 'table').flatMap((block) => block.rows.flat())) {
    assert.ok(!/^\s*(\d+\.|[-*+])\s/.test(cell), `TM${tm}: table cell renders as a markdown list: ${cell.slice(0, 80)}`);
  }
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
    if (block.kind === 'code') {
      assert.ok(block.text.trim().length > 0 && !block.text.includes('`'), `TM${tm}: code block is literal text, no markdown`);
    }
    if (block.kind === 'formula') {
      assert.ok(block.text.includes('\\'), 'Use the native math-rendering path, not literal TeX in a plain-text formula');
      assert.ok(!block.text.includes('$'), 'Formula text must not contain "$": it switches the renderer to markdown mode');
      katex.renderToString(block.text, { throwOnError: true, displayMode: true, strict: 'error' });
      formulas++;
    }
  }
}
assert.ok(Math.abs(1.2 * .379 + 1.4 * .139 + 3.3 * -.253 + .6 * .896 + 1.673 - 2.0251) < 1e-10);
assert.ok(Math.abs(1.2 * .25 + 1.4 * .1 + 3.3 * .05 + .6 * .5 + 1.1 - 2.005) < 1e-10);
assert.equal(1600 / (7 - 3), 400);
// TM3 PCE baseline: T_VA = 15 + 25, T_CA = 50 + 30.
assert.equal(15 + 25, 40);
assert.equal(40 + 50 + 30, 120);
assert.equal((40 / 120 * 100).toFixed(2), '33.33');
assert.equal((80 / 120 * 100).toFixed(2), '66.67');
// TM4 illustrative capacity: 5 instructors x 5 classes x 40 members.
assert.equal(5 * 5 * 40, 1000);
// TM5 cash receipts aggregation and HAVING SUM(Amount) > 200.00 result.
const receipts = [[1001, 101, 120], [1002, 102, 350], [1003, 101, 80]];
const totals = receipts.reduce((sum, [, customer, amount]) => ({ ...sum, [customer]: (sum[customer] ?? 0) + amount }), {});
assert.deepEqual(totals, { 101: 200, 102: 350 });
assert.equal(totals[101] + totals[102], 550);
assert.deepEqual(Object.keys(totals).filter((customer) => totals[customer] > 200), ['102']);
const tm5Code = flatten(readings[5].blocks).filter((block) => block.kind === 'code');
assert.ok(tm5Code.length >= 6, 'TM5 SQL rendered as code blocks');
assert.ok(tm5Code.some((block) => /HAVING SUM\(Amount\) > 200\.00/.test(block.text)));
const tm5Text = JSON.stringify(readings[5]);
assert.ok(!/Assigned_Employee_ID|Total_Amount|WHERE City/.test(tm5Text), 'TM5 queries must use columns from the SSS schema');
assert.equal(Object.keys(readings).length, 14);
console.log(`SIA canonical PASS: TM${tms.join('/TM')} coverage, section order, three practices each, ${journals} balanced journals, ${formulas} valid formulas, tables and numerical baselines.`);
