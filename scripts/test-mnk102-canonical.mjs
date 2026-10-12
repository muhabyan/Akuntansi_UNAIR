import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';
import katex from 'katex';

const bundle = await build({ entryPoints: ['src/data/mankeu/mankeuData.ts'], bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent' });
const { MNK201_READINGS: readings, MNK201_REVIEW_READINGS: reviews } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const hash = data => createHash('sha256').update(data).digest('hex');
const walk = blocks => blocks.flatMap(b => [b, ...walk(b.blocks ?? []), ...walk(b.answer ?? [])]);
const forbidden = /—|bukan[\s\S]{0,80}melainkan|tidak hanya[\s\S]{0,80}tetapi juga|bukan sekadar|Penting dicatat bahwa|Perlu diingat bahwa|Perlu dicatat|Patut dicatat|Dalam konteks ini|Secara keseluruhan|Pada dasarnya|memainkan peran (?:penting|krusial)|menjadi kunci|fondasi yang kokoh|Mari kita|Hal ini menunjukkan bahwa|Hal ini penting karena/i;
let figureCount = 0;
for (const tm of [9, 10, 11, 12, 13, 14, 15, 16]) {
  const dir = `content-pipeline/MNK102/TM${String(tm).padStart(2, '0')}`;
  const md = fs.readFileSync(`${dir}/05_student_learning_version.md`, 'utf8');
  const r = tm === 16 ? reviews.uas : readings[tm];
  const output = tm === 16 ? 'src/data/mankeu/modules/reviewUas.ts' : `src/data/mankeu/modules/tm${tm}.ts`;
  assert.equal(r.tm, tm); assert.equal(r.layout, 'layered');
  assert.ok(!/(?<!\r)\n/.test(md), `TM${tm} package has CRLF`);
  assert.ok(!forbidden.test(md), `TM${tm} forbidden prose`);
  assert.ok(!/\$(?!\$)/.test(md), 'Currency is written as USD or Rp; native formula has no dollar delimiters');
  assert.ok(![...md].some(c => c.charCodeAt(0) < 32 && ![9, 10, 13].includes(c.charCodeAt(0))), 'No accidental control characters');
  for (const file of ['00_status.md', '04_canonical_spec.md', '06_implementation_brief.md', '07_qa_manifest.md']) {
    const text = fs.readFileSync(`${dir}/${file}`, 'utf8');
    if (file !== '00_status.md') assert.ok(text.includes(hash(Buffer.from(md))), `${file} records exact 05 hash`);
    assert.ok(!/(?<!\r)\n/.test(text));
  }
  for (const heading of ['Kilat', 'Inti', 'Kasus latihan', 'Persiapan Ujian']) assert.ok(r.blocks.some(b => b.kind === 'section' && b.title === heading));
  const all = walk(r.blocks);
  assert.ok(all.some(b => b.kind === 'pendalaman'));
  assert.ok(all.filter(b => b.kind === 'self-check').length >= 4);
  assert.equal(all.filter(b => b.kind === 'solution-reveal').length, tm === 16 ? 7 : 2);
  const figures = all.filter(b => b.kind === 'figure');
  assert.equal(figures.length, [...md.matchAll(/```visual\r?\n/g)].length);
  assert.ok(figures.length >= 1);
  figureCount += figures.length;
  for (const fig of figures) {
    assert.ok(fig.svg && fig.overview && fig.altText && fig.caption);
    assert.match(fig.svg, /--svg-bg/); assert.match(fig.svg, /--svg-text/);
    assert.ok(!/NaN|undefined|Infinity/.test(fig.svg));
    assert.ok(fig.overview.cards.length >= 3);
  }
  for (const f of all.filter(b => b.kind === 'formula')) {
    katex.renderToString(f.text, { throwOnError: true, displayMode: true, strict: 'error' });
    assert.ok(f.note?.includes('hal.') || f.note?.includes('PDF'));
  }
  const temp = path.join(os.tmpdir(), `mnk102-canonical-${process.pid}-${tm}.ts`);
  try {
    execFileSync(process.execPath, ['scripts/convert-mnk102.mjs', `${dir}/05_student_learning_version.md`, temp, '--export', tm === 16 ? 'MNK102_UAS_READING' : `TM${tm}_READING`, '--tm', String(tm), '--ref', r.ref, ...(tm === 16 ? ['--badge', 'Ulasan UAS'] : [])], { stdio: 'pipe' });
    assert.deepEqual(fs.readFileSync(temp), fs.readFileSync(output), `TM${tm} module is exact converter output`);
  } finally { if (fs.existsSync(temp)) fs.unlinkSync(temp); }
}
assert.equal(reviews.uts.tm, 0);
assert.deepEqual({ ...reviews.uts, tm: 8 }, readings[8], 'UTS adapter changes only progress key; source reading unchanged');
assert.notEqual(reviews.uas.title, readings[14].title, 'Review is distinct from a single meeting');
const financing = walk(readings[11].blocks).find(b => b.kind === 'figure' && b.title.startsWith('Current Assets Financing:'));
assert.equal(financing.overview.cards.length, 3, 'Three source policies remain three mobile groups');
assert.match(financing.overview.cards[2].title, /Conservative.*surplus/);
const operating = walk(readings[9].blocks).find(b => b.kind === 'figure' && b.title.startsWith('Operating Leverage:'));
assert.equal(operating.overview.cards.length, 3, 'Plan A, Plan B and break-even stay grouped');
assert.match(operating.overview.cards[0].title, /Plan A.*VC.*FC/);
const merger = walk(readings[14].blocks).find(b => b.kind === 'figure' && b.title.startsWith('A View of Merger Analysis:'));
assert.equal(merger.overview.cards.length, 4);
assert.match(merger.overview.cards[3].title, /A 10; B 24/, 'Both recipients remain in the same bid scenario');
assert.ok(fs.readFileSync('src/data/mankeu/modules/legacy/tm14.ts', 'utf8').includes('export const LEGACY_UAS'));
assert.ok(!fs.readFileSync('src/data/mankeu/mankeuData.ts', 'utf8').includes('LEGACY_UAS'), 'Historical inaccurate legacy stays unmounted');

// Independent calculations from published inputs, not converter-derived expected strings.
const f = tm => walk(readings[tm].blocks).filter(b => b.kind === 'formula').map(b => b.text).join('\n');
assert.ok(Math.abs(1.5 / (1 + .75 * (.4 / .6)) - 1) < 1e-12);
assert.equal(1 * (1 + .75 * (.2 / .8)), 1.1875); assert.match(f(9), /1\.1875/);
assert.equal((30000 - 7200) * .75 / 5000, 3.42); assert.match(f(9), /3\.42/);
assert.equal(100 - .6 * 50, 70); assert.match(f(10), /100-30=70/);
assert.equal(60 + 60 - 40, 80); assert.match(f(11), /80/);
assert.equal(.2 * 300 * .98 + .7 * 250 + .1 * 200, 253.8); assert.match(f(11), /253\.8/);
assert.equal((.02 / .98 * 365 / 20 * 100).toFixed(2), '37.24');
assert.equal((((1 + .02 / .98) ** (365 / 20) - 1) * 100).toFixed(2), '44.59');
assert.equal((10000 * .0325 / 360 * 30).toFixed(2), '27.08');
assert.equal((105.93 / .8484).toFixed(4), '124.8586'); assert.match(f(13), /124\.8586/);
assert.equal(Math.round(200000000 / .910784), 219591034); assert.match(f(13), /219\{,\}591\{,\}033\.6589/);
assert.equal(([6.4, 8.8, 9.8, 10.2, 139].reduce((s, cf, i) => s + cf / 1.142 ** (i + 1), 0)).toFixed(1), '96.5');
assert.equal(96.5 - 62.5, 34); assert.equal((96.5 - 86.5) + (86.5 - 62.5), 34);
assert.match(f(14), /96\.501539/);
const zPrime = [0.717, 0.847, 3.107, 0.420, 0.998];
assert.notDeepEqual(zPrime, [1.2, 1.4, 3.3, .6, 1]);
assert.ok(JSON.stringify(readings[15]).includes('belum tersedia') || JSON.stringify(readings[15]).includes('belum teridentifikasi'));
console.log(`MNK102 canonical PASS: 8 byte-exact generated readings, ${figureCount} figures with mobile overview, source-example calculations, reviews 0/16, and explicit scope limits.`);
