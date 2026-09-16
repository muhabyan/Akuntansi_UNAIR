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
  6: ['Order-to-Cash', 'Provide Quote', 'Receive Sales Order', 'Prepare Products (Pick & Pack)',
    'Deliver Products & Issue Invoice', 'Receive Payment & Deposit Cash', 'Sales Tax Payable', 'Sales Discounts',
    '2/10, net 30', 'Orchestration', 'Collaboration', 'Message Flow', 'Customer Remittance Advice & Payment',
    'Exclusive Gateway (XOR)', 'backorder', 'Intermediate Error Boundary Event', 'Intermediate Timer Boundary Event',
    'Generate Dunning Notice', 'Looping Task', '{Retry_Count <= 3}', 'Preventive', 'Detective', 'Corrective',
    'Sales Order Entry', 'Credit Department', 'Warehouse / Shipping', 'Billing / Accounts Receivable',
    'Cashier / Mailroom', 'lapping', 'Event-Condition-Action', '$10,000', '60 hari', 'For Deposit Only',
    'Field Check', 'Validity Check', 'Limit Check', 'Range Check', 'Reasonableness Check', 'Completeness Check',
    '1 dan 10,000', 'RFID', 'UPC', 'Quotes', 'Cash_Receipts', '(1..\\\\*) – (0..\\\\*)', 'Applied Cash Receipts',
    'Product_Category', 'Order_Status', 'Under Review', 'In Production', 'Customers', 'Employees', 'Products',
    'Order_Items', 'Quote_Items', 'Bank_Accounts', 'Order_Cash_Receipts', '(Order_Number, Product_Number)',
    '(Quote_Number, Product_Number)', '(Order_Number, Receipt_Number)', 'Manager_Employee#', 'Amount_Applied',
    'Main form', 'Subform', 'combo box', '$120.00', '$45.00', '$1,200.00', '$450.00', '$24.00', '$1,176.00',
    'pp. 306–312', 'trade discount'],
  7: ['Procure-to-Pay', 'Identify Need & Request Prices', 'Issue Purchase Order (PO)', 'Receive and Inspect Goods',
    'Verify Vendor Invoice (Three-Way Match)', 'Execute Cash Disbursement', 'Raw Materials Inventory',
    'Purchase Discounts', '2/10, net 30', 'debit memo', 'Supplier Pool', 'Enterprise Pool',
    'Enterprise Check / Electronic Remittance Advice', 'Buyer / Purchasing', 'Receiving', 'Accounts Payable',
    'Cashier / Treasury', 'Exclusive Gateway (XOR)', 'Debit Memo', 'tidak ada Accounts Payable ke supplier',
    'Preventive', 'Detective', 'Corrective', 'Approved Vendor List (AVL)', 'Purchase Order (PO)', 'Receiving Report',
    'Vendor Invoice', 'administrative hold', 'short shipment', 'Blind purchase order', 'receiving dock', 'Requisitioner',
    'Receiving Clerk', 'Shell Company Invoicing', 'Purchasing Kickbacks', 'Duplicate Payments', 'TIN/NPWP',
    'Purchase_Orders', 'Receipts', 'Cash_Disbursements', 'Suppliers', '(1..\\\\*) – (0..\\\\*)',
    'Applied Cash Disbursements', 'Supplier_Category', 'Item_Status', 'In Transit', 'Rejected', 'PO_Items',
    'Receipt_Items', 'Receipt_Disbursements', '(PO_Number, Item_Number)', '(Receipt_Number, Item_Number)',
    '(Receipt_Number, Disbursement_Num)', 'Agreed_Unit_Cost', 'Default_Terms', 'Baer Belly Bikinis', 'Paige Baer',
    'Santa Monica', 'Economic Duality', '$5,000.00', '$100.00', '$4,900.00', '$25.00', '$27.00', '$2,000.00',
    '$700', 'pp. 340–343'],
};
// Strings rendered through remark-math must not contain two unescaped "$": they turn into inline math.
const mathSafeTms = new Set([1, 2, 3, 4, 5, 6, 7]);
// Leading ">" or "#" in a rendered string becomes a blockquote or heading.
const markdownBlockSafeTms = new Set([3, 4, 5, 6, 7]);
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
// TM6 Sunset Graphics banner order (Richardson 4e pp. 306–312): 10 banners, 2/10 net 30.
assert.equal(10 * 120, 1200);
assert.equal(10 * 45, 450);
assert.equal(1200 * 0.02, 24);
assert.equal(1200 - 24, 1176);
assert.equal(1200 + 450, 1650);
const tm6Blocks = flatten(readings[6].blocks);
const schemaTables = (blocks) => new Set(blocks.filter((block) => block.kind === 'table' && block.headers[0] === 'Tabel')
  .flatMap((block) => block.rows.map((row) => row[0].replace(/ \(linking\)$/, ''))));
assert.equal(schemaTables(tm6Blocks).size, 12, 'TM6 Sunset Graphics schema has 12 tables');
const tm6Controls = tm6Blocks.find((block) => block.kind === 'table' && block.headers[0] === 'Application control');
assert.deepEqual(tm6Controls.rows.map((row) => row[0]),
  ['Field Check', 'Validity Check', 'Limit Check', 'Range Check', 'Reasonableness Check', 'Completeness Check']);
assert.ok(!/1 dan 5,000|5,000 unit/.test(JSON.stringify(readings[6])), 'TM6 range check follows the canonical 1–10,000');
assert.ok(!/ilustrasi/i.test(JSON.stringify(readings[6])), 'TM6 banner numbers are cited as book data');
// TM7 Baer Belly Bikinis spandex purchase (Richardson 4e pp. 340–343) and Three-Way Match discrepancy.
assert.equal(5000 * 0.02, 100);
assert.equal(5000 - 100, 4900);
assert.equal(100 * 25, 2500);
assert.equal(100 * 27, 2700);
assert.equal(80 * 25, 2000);
assert.equal(2700 - 2000, 700);
const tm7Blocks = flatten(readings[7].blocks);
// The canonical schema defines 11 tables although the handoff summaries call it a "10-table" schema.
assert.equal(schemaTables(tm7Blocks).size, 11, 'TM7 purchasing schema has the 11 canonical tables');
assert.ok(!/10-table|10 tabel|sepuluh tabel/i.test(JSON.stringify(readings[7])), 'TM7 states no incorrect table count');
const tm7Lanes = tm7Blocks.find((block) => block.kind === 'table' && block.headers[0] === 'Swimlane');
assert.deepEqual(tm7Lanes.rows.map((row) => row[0]), ['Buyer / Purchasing', 'Receiving', 'Accounts Payable', 'Cashier / Treasury']);
const tm7Match = tm7Blocks.find((block) => block.kind === 'table' && block.headers[0] === 'Dokumen');
assert.deepEqual(tm7Match.rows.map((row) => row[0]), ['Purchase Order (PO)', 'Receiving Report', 'Vendor Invoice']);
assert.ok(tm7Blocks.every((block) => block.kind !== 'code'), 'TM7 Three-Way Match is a table and ordered list, not ASCII art');
assert.equal(Object.keys(readings).length, 14);
console.log(`SIA canonical PASS: TM${tms.join('/TM')} coverage, section order, three practices each, ${journals} balanced journals, ${formulas} valid formulas, tables and numerical baselines.`);
