import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { auditDiagram } from './mnu307-diagram-geometry.mjs';
import { loadReading } from './mnu307-canonical-lib.mjs';
import { flatten } from './mnu307-content-lib.mjs';
import { testCanonical, testProtected } from './mnu307-canonical-lib.mjs';
await testCanonical(1);
await testCanonical(2);
await testCanonical(3);
await testCanonical(4);
await testCanonical(5);
await testCanonical(6);
testProtected();

for (const figure of flatten((await loadReading(5)).blocks).filter(b => b.svg?.includes('V-TM05-07-arrow') || b.svg?.includes('V-TM05-08-arrow'))) {
  const result = auditDiagram(new JSDOM(figure.svg).window.document.querySelector('svg'));
  assert.deepEqual(result.issues, [], result.id + ': source relationships and routing');
}
console.log('MNU307 geometry PASS: unrelated boxes, solid/dashed separation, all 11 source label-edge associations');
