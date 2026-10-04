import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { TMS, sourcePath, sourceHash, buildReading, flatten } from './akk203-content-lib.mjs';
import { comparisonIds } from './akk203-pr-b-visuals.mjs';

export async function loadReading(tm) {
  const result = await build({ entryPoints: [`src/data/asp/modules/tm${tm}.ts`], bundle: true, write: false, platform: 'node', format: 'esm' });
  return (await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`))[`TM${tm}_READING`];
}

const normalize = (s) => s.replace(/\[TOTAL-AKHIR\]/g,'').replace(/[*`]/g,'').replace(/\s+/g,' ').trim();
function strings(value) {
  if (typeof value === 'number') return [value.toLocaleString('id-ID')];
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).filter(([key]) => !['svg','kind','layer'].includes(key)).flatMap(([,v])=>strings(v));
}

/** Independent source-line accounting also covers paragraphs outside the Inti and every prompt table. */
export async function testCanonical(tm) {
  const reading = await loadReading(tm), source=fs.readFileSync(sourcePath(tm),'utf8');
  assert.deepEqual(reading, JSON.parse(JSON.stringify(buildReading(tm))), `TM${tm}: generated data drift`);
  assert.ok(fs.readFileSync(`src/data/asp/modules/tm${tm}.ts`,'utf8').includes(sourceHash(tm)), 'source fingerprint');
  const all=flatten(reading.blocks), byKind=(kind)=>all.filter((b)=>b.kind===kind);
  const expected={1:[5,3,4,5,20,9],2:[5,3,5,5,20,12],3:[6,1,8,6,20,21],4:[6,1,8,6,20,20],5:[6,2,9,6,20,14]}[tm];
  assert.deepEqual([all.filter((b)=>b.kind==='section'&&b.layer==='main').length,byKind('pendalaman').length,byKind('figure').length,byKind('self-check').length,byKind('solution-reveal').length,byKind('table').length+byKind('statement').length],expected);
  assert.equal(reading.layout,'layered');
  assert.equal(reading.objectives.length,[3,4].includes(tm)?7:6);
  assert.equal(reading.coreReadingMinutes,{1:20,2:22,3:25,4:25,5:22}[tm],'sum of approved Inti minutes');
  assert.equal(byKind('solution-reveal').filter((b)=>reading.blocks.includes(b)).length,20,'all practices have top-level anchors');
  const text=normalize(strings(reading).join('\n'));
  let fence='';
  for(let line of source.split(/\r?\n/)) {
    line=line.trim();
    if(line.startsWith('```')) { fence=fence?'':line.slice(3);continue; }
    if(!line || fence==='visual' || /^# |^## (Inti|Pendalaman)$|^\|[- :|]+\|?$|^:::$/.test(line)) continue;
    if(fence==='self-check') line=line.replace(/^(question|answer|signal):\s*/, '');
    line=line.replace(/^>\s*/, '').replace(/^#{2,4} /,'').replace(/^:::\s*pendalaman\s*/,'').replace(/^\d+\. /,'').replace(/^[-*] /,'');
    const parts=line.startsWith('|')?line.replace(/^\||\|$/g,'').split('|'):[line];
    for(const part of parts) if(normalize(part)) assert.ok(text.includes(normalize(part)),`TM${tm}: missing source text: ${part}`);
  }
  const specs = [...source.matchAll(/```visual\r?\n([\s\S]*?)```/g)].map((m)=>Object.fromEntries(m[1].trim().split(/\r?\n/).map((line)=>{const i=line.indexOf(':');return [line.slice(0,i),line.slice(i+1).trim()];})));
  for(const [index,b] of byKind('figure').entries()) {
    const spec=specs[index];
    assert.equal(b.title,spec.judul,'visual source order and title');
    assert.equal(b.altText,spec['alt text']);
    assert.equal(b.overview.footer,spec.hubungan,'complete relationship description');
    assert.ok(b.altText && b.overview && b.caption, 'accessible figure with mobile overview and source');
    if(!b.svg) assert.ok(comparisonIds.includes(spec.id),'D3 exemption');
    else { assert.match(b.svg,/course-diagram-svg/); assert.doesNotMatch(b.svg, /#[0-9a-f]{6}\b/i, 'SVG colours use theme classes'); }
  }
  for(const b of byKind('table')) {
    assert.ok(b.rows.every((r)=>r.length===b.headers.length),'all columns preserved');
    if(b.headers.length>=4&&!b.reportHeader&&!b.rowRules) assert.equal(b.stackOnMobile,true);
  }
  const totals=byKind('table').flatMap((b)=>b.rowRules??[]);
  assert.equal(totals.length+byKind('statement').flatMap((b)=>b.spec.lines.filter((l)=>l.bottomRule)).length,{1:0,2:4,3:4,4:3,5:2}[tm],'header marker is not a row rule');
  assert.doesNotMatch(strings(reading).join('\n'),/\[TOTAL-AKHIR\]|```|:::|\|--|\b(?:TERVERIFIKASI|BELUM)\b/,'no pipeline syntax (student label belum is approved)');
  console.log(`AKK203 TM${String(tm).padStart(2,'0')} canonical PASS: full source, ${expected[2]} figures, 20 exercises`);
}

export async function testAll() { for(const tm of TMS) await testCanonical(tm); }
