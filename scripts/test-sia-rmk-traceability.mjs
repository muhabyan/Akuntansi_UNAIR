import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';

const ledger = JSON.parse(fs.readFileSync('content-pipeline/SII306/revision-20261017/rmk-traceability.json', 'utf8'));
const result = await build({
  stdin: { contents: "export {SII306_READINGS} from './src/data/sia/siaReadings.ts';", resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const { SII306_READINGS: readings } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const normalize = text => text.replace(/[*`_\u2013\u2014]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const ownText = block => [
  ...['title', 'text', 'note', 'caption', 'question'].map(key => block[key] ?? ''),
  ...(block.items ?? []), ...(block.headers ?? []), ...(block.transcript ?? []),
  ...(block.rows ?? []).map(row => row.join(' ')),
  ...(block.lines ?? []).map(line => ['account', 'debit', 'credit'].filter(key => key in line).map(key => line[key]).join(' ')),
].filter(Boolean).join(' ');
const flatten = blocks => blocks.flatMap(block => [block, ...flatten(block.blocks ?? []), ...flatten(block.answer ?? [])]);
function locate(reading, path) {
  assert.match(path, /^blocks\[\d+\](?:\.(?:blocks|answer)\[\d+\])*$/);
  return path.match(/blocks|answer|\d+/g).reduce((value, key) => value?.[key], reading);
}
function verifyPoint(reading, point) {
  const block = locate(reading, point.evidence.path);
  assert.ok(block, point.id + ': referenced explanation was removed');
  assert.equal(block.kind, point.evidence.kind, point.id + ': block kind changed');
  assert.equal(ownText(block), point.passage, point.id + ': explanation changed; reassess source mapping');
  assert.ok(normalize(ownText(block)).includes(normalize(point.selectedPhrase)), point.id + ': evidence missing');
  assert.ok(!['h2', 'h3', 'self-check'].includes(block.kind), point.id + ': a heading or question alone cannot evidence an explanation');
  assert.ok(point.passage.length > 45, point.id + ': substantive explanation required');
}

assert.equal(ledger.sourceStatus, 'AUTHOR_MAPPED_PENDING_INDEPENDENT_REVIEW');
assert.equal(ledger.points.length, 299);
assert.equal(new Set(ledger.points.map(point => point.id)).size, 299);
assert.equal(new Set(ledger.points.map(point => `${point.tm}:${point.section}`)).size, 75);
assert.equal(ledger.sources.length, 7);
// Locked inventory of source-point identities/pages, separate from editable teaching passages.
const inventory = ledger.points.map(point => `${point.id}|${point.sourceSection}|${point.sourcePoint}|${point.sourcePage}`).join('\n');
assert.equal(createHash('sha256').update(inventory).digest('hex'), '75edaa3f9009adb5030db54bee9aa40979189ef45d124b2c474e3ae231ed3fe4');
for (const point of ledger.points) {
  assert.ok(point.sourcePage >= 1 && point.sourcePage <= 5);
  verifyPoint(readings[point.tm], point);
}
// A lost teaching block must fail even when a canonical snapshot has been regenerated.
for (let tm = 8; tm <= 14; tm++) {
  const point = ledger.points.find(row => row.tm === tm);
  const mutated = structuredClone(readings[tm]);
  locate(mutated, point.evidence.path).text = 'Removed for negative test';
  const block = locate(mutated, point.evidence.path);
  delete block.rows; delete block.items; delete block.lines; delete block.transcript;
  assert.throws(() => verifyPoint(mutated, point), /explanation changed/, `TM${tm}: regression detection`);
}
const riskTable = flatten(readings[14].blocks).find(block => block.title === 'Enam kategori risiko pada Ch.17 p.557');
assert.deepEqual(riskTable.rows.map(row => row[0]), ['Alignment risk', 'Solution risk', 'Financial risk', 'Project risk', 'Change risk', 'Technological risk']);
const metricTable = flatten(readings[13].blocks).find(block => block.title === 'Penyebut menjawab pertanyaan berbeda');
const actualMetrics = metricTable.rows.map(row => Number(row[1].match(/= ([\d,]+)%/)[1].replace(',', '.')));
assert.deepEqual(actualMetrics, [8 / (8 + 12) * 100, 8 / (8 + 2) * 100, (8 + 978) / 1000 * 100]);
assert.ok(JSON.stringify(readings[10]).includes('generasi terdahulu'), 'legacy COBIT information criteria must retain version context');
assert.ok(JSON.stringify(readings[11]).includes('kolisi tetap mungkin'), 'hash summary cannot imply mathematical impossibility of collision');
assert.ok(JSON.stringify(readings[13]).includes('datanya dapat tetap terstruktur'), 'unsupervised learning must not be equated with unstructured data');
console.log('SIA traceability PASS: 75 sections / 299 source points indexed to actual explanations, seven removal probes, six risk categories and independent classification metrics. Author mapping awaits independent review.');
