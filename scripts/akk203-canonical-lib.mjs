import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import { TMS, sourcePath, sourceHash, buildReading, flatten, comparisonIds } from './akk203-content-lib.mjs';

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
  const expected={1:[5,3,4,5,20,9],2:[5,3,5,5,20,12],3:[6,1,8,6,20,21],4:[6,1,8,6,20,20],5:[6,2,9,6,20,14],6:[6,2,9,6,20,16],7:[6,4,8,6,20,22]}[tm];
  assert.deepEqual([all.filter((b)=>b.kind==='section'&&b.layer==='main').length,byKind('pendalaman').length,byKind('figure').length,byKind('self-check').length,byKind('solution-reveal').length,byKind('table').length+byKind('statement').length],expected);
  assert.equal(reading.layout,'layered');
  assert.equal(reading.objectives.length,[3,4,6,7].includes(tm)?7:6);
  assert.equal(reading.coreReadingMinutes,{1:20,2:22,3:25,4:25,5:22,6:25,7:25}[tm],'sum of approved Inti minutes');
  assert.equal(byKind('solution-reveal').filter((b)=>reading.blocks.includes(b)).length,20,'all practices have top-level anchors');
  const text=normalize(strings(reading).join('\n'));
  let fence='';
  for(let line of source.split(/\r?\n/)) {
    line=line.trim();
    if(line.startsWith('```')) { fence=fence?'':line.slice(3);continue; }
    if(!line || fence==='visual' || (fence==='pendalaman'&&!/^judul:/.test(line)) || /^# |^## (Inti|Pendalaman)$|^\|[- :|]+\|?$|^:::$/.test(line)) continue;
    if(fence==='pendalaman') line=line.replace(/^judul:\s*/, '');
    if(fence==='self-check') line=line.replace(/^(question|answer|signal):\s*/, '');
    if(tm>=6&&/^\| Tanggal \| Akun \| Debit(?: \(Rp\))? \| Kredit(?: \(Rp\))? \|$/.test(line)) continue; // Fixed journal headings are checked by the renderer test.
    if(tm===6&&/^\| Pos \| Nilai \(Rp\) \|$/.test(line)) {
      assert.equal(byKind('statement').length,5,'single-amount reports use statements');
      assert.ok(byKind('statement').every((b)=>/Satuan: rupiah/.test(b.spec.unit)),'Rp column unit preserved in statement header');
      continue;
    }
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
  assert.equal(totals.length+byKind('statement').flatMap((b)=>b.spec.lines.filter((l)=>l.bottomRule)).length,{1:0,2:4,3:4,4:3,5:2,6:7,7:7}[tm],'header marker is not a row rule');
  if(tm>=6) {
    const sourceJournals=[...source.matchAll(/\| Tanggal \| Akun \| Debit[^\n]*\r?\n\|[^\n]*\r?\n((?:\|[^\n]*\r?\n)+)/g)].map((m)=>m[1].trim().split(/\r?\n/).map((l)=>l.replace(/^\||\|$/g,'').split('|').map(normalize)));
    assert.equal(byKind('journal').length,tm===6?29:43,'all source journals converted');
    assert.deepEqual(byKind('journal').map((b)=>b.lines.map((l)=>[l.date,l.account,l.debit,l.credit])),sourceJournals,'all dates, accounts, zeros and journal totals preserved in order');
    // Read report grids independently of the generator, including the second half of Neraca.
    const rawLines=source.split(/\r?\n/).map((s)=>s.trim()), reportSources=[];
    let reportHeader;
    const cells=(s)=>s.replace(/^\||\|$/g,'').split('|').map(normalize);
    for(let i=0;i<rawLines.length;i++) {
      if(rawLines.slice(i,i+4).every((s)=>s?.startsWith('**'))&&/^\*\*Satuan:/.test(rawLines[i+3]??'')) {
        const [entity,title,period,unit]=rawLines.slice(i,i+4).map(normalize);
        reportHeader={entity,title,period,unit};i+=3;continue;
      }
      if(!rawLines[i]) continue;
      if(reportHeader&&rawLines[i].startsWith('|')&&/^\|[- :|]+\|?$/.test(rawLines[i+1]??'')) {
        const headers=cells(rawLines[i]),rows=[];i+=2;
        while(rawLines[i]?.startsWith('|')) rows.push(cells(rawLines[i++]));
        reportSources.push({header:reportHeader,headers,rows});i--;continue;
      }
      reportHeader=undefined;
    }
    const reports=all.filter((b)=>b.kind==='statement'||b.kind==='table'&&b.reportHeader?.period);
    assert.equal(reports.length,tm===6?6:7);
    assert.equal(reports.length,reportSources.length);
    for(const [i,b] of reports.entries()) {
      const expectedReport=reportSources[i];
      const {entity,title,period,unit}=b.kind==='statement'?b.spec:b.reportHeader;
      assert.deepEqual({entity,title,period,unit},expectedReport.header,'report identity, period and unit preserved');
      const rows=b.kind==='statement'?b.spec.lines.map((l)=>[l.label,l.amount.toLocaleString('id-ID')]):b.rows.map((r)=>r.map(normalize));
      assert.deepEqual(rows,expectedReport.rows,'every report line and amount preserved, including comparatives and n/a');
      if(b.kind==='table') assert.deepEqual(b.headers,expectedReport.headers);
    }
    for(const b of byKind('table').filter((b)=>b.reportHeader?.period)) {
      assert.match(b.reportHeader.unit,/rupiah/);
      for(const rule of b.rowRules??[]) for(const c of rule.columns) assert.match(b.rows[rule.row][c],/^\(?-?\d[\d.,]*\)?$/,'double rule only on nominal cells');
    }
    const finalRows=[...byKind('table').flatMap((b)=>(b.rowRules??[]).map((r)=>({label:normalize(b.rows[r.row][0]),amounts:b.rows[r.row].slice(1)}))),...byKind('statement').flatMap((b)=>b.spec.lines.filter((l)=>l.bottomRule).map((l)=>({label:normalize(l.label),amounts:[l.amount.toLocaleString('id-ID')]})))];
    for(const [label,amount] of [['SiLPA','1.450.000'],['SAL akhir','52.650.000'],['Kas akhir','73.000.000'],['Surplus','23.120.000'],['Ekuitas akhir','291.740.000'],['Total aset','318.940.000']]) assert.ok(finalRows.some((r)=>r.label.startsWith(label)&&r.amounts.includes(amount)),`Kabupaten Contoh final ${label} must equal 05: ${amount}`);
  }
  if(tm===7) {
    const previews=byKind('figure').flatMap((b)=>b.sourceImages??[]);
    assert.equal(previews.length,2,'both audited LPSAL originals included');
    const hashes={'/assets/akk203/berau2025-lpsal-pdf19.png':'e4f10bc0f0d34a8ab533485a2994453edeb025bee56063025f60eeb5467a4369','/assets/akk203/lkpp2025-lpsal-pdf47.png':'6abecd2d0158f21f898744d8da7f462f446197e1834a84ddd9761d28068c0759'};
    for(const p of previews) assert.equal(createHash('sha256').update(fs.readFileSync(`public${p.url}`)).digest('hex'),hashes[p.url],'source image copied byte-for-byte without changing numbers');
  }
  assert.doesNotMatch(strings(reading).join('\n'),/\[TOTAL-AKHIR\]|```|:::|\|--|\b(?:TERVERIFIKASI|BELUM)\b/,'no pipeline syntax (student label belum is approved)');
  console.log(`AKK203 TM${String(tm).padStart(2,'0')} canonical PASS: full source, ${expected[2]} figures, 20 exercises`);
}

export async function testAll() { for(const tm of TMS) await testCanonical(tm); }
