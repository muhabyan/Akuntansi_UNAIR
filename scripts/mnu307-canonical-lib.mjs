import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { buildReading, sourcePath, sourceHash, visualSpecs, flatten, minutes } from './mnu307-content-lib.mjs';
import { svgIds } from './mnu307-visuals.mjs';
const normalize = s => s.replace(/\\(?=\$)/g, '').replace(/[*`]/g, '').replace(/\s+/g, ' ').trim().toLocaleLowerCase('id-ID');
const strings = value => typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.entries(value).filter(([k]) => !['svg','kind','layer'].includes(k)).flatMap(([,v]) => strings(v)) : [];
export async function loadReading(tm) {
  const result = await build({entryPoints:[`src/data/manstrat/modules/tm${tm}.ts`],bundle:true,write:false,platform:'node',format:'esm'});
  return (await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`))[`TM${tm}_READING`];
}
export async function testCanonical(tm) {
  const source = fs.readFileSync(sourcePath(tm),'utf8'), reading = await loadReading(tm);
  const approvedHashes={6:'9e675ac56c86d05916686b03ea383b2ddf7504e4307f97d2ff91dae83c672c89',5:'ad080d7d1f2398313d042d9b8258dd01aaf2141a23ff7360248b8535843aebc8',3:'10af476b9e3b12c390742634d28f22a90ed2b3075ac26bb57ff043e98b52b12b',4:'f49c6efaa4933ca5aa9f07cd8b67b892414ad4801f530f4f64fca5ef8cf6e5d6'};
  if(tm>=3)assert.equal(sourceHash(tm),approvedHashes[tm],'approved inbox source bytes');
  assert.deepEqual(reading,JSON.parse(JSON.stringify(buildReading(tm))),'generated data drift');
  assert.ok(fs.readFileSync(`src/data/manstrat/modules/tm${tm}.ts`,'utf8').includes(sourceHash(tm)),'source fingerprint');
  const all=flatten(reading.blocks), kinds=kind=>all.filter(b=>b.kind===kind);
  assert.equal(reading.layout,'layered'); assert.equal(reading.coreReadingMinutes,minutes[tm]);
  assert.equal(reading.objectives.length,tm<=2?7:6);assert.match(reading.intro,/^\p{Lu}/u);
  const counts=[all.filter(b=>b.kind==='section'&&b.layer==='main').length,kinds('pendalaman').length,kinds('figure').length,kinds('self-check').length,kinds('solution-reveal').length];
  assert.deepEqual(counts,({1:[11,13,11,11,9],2:[10,11,20,10,24],3:[8,9,18,8,17],4:[7,7,18,7,18],5:[7,7,17,7,21],6:[7,7,18,7,20]}[tm]));
  assert.equal(kinds('solution-reveal').filter(b=>reading.blocks.includes(b)).length,({1:9,2:24,3:17,4:18,5:21,6:20}[tm]),'top-level exercise anchors');
  const text=normalize(strings(reading).join('\n'));
  let fence='';
  for(let line of source.split(/\r?\n/)) {
    line=line.trim();
    if(line.startsWith('```')){fence=fence?'':line.slice(3);continue;}
    if(!line||fence==='visual'||/^# |^## Inti$|^---$|^\|[- :|]+\|?$|^:::$/.test(line))continue;
    if(fence==='self-check')line=line.replace(/^(id|question|answer|signal):\s*/,'');
    if(/^SC-TM/.test(line))continue;
    if(line==='| ID | Pertanyaan parafrase | Arah jawaban |')continue; // Native reveals replace this answer-bearing table.
    line=line.replace(/^>\s*/,'').replace(/^#{2,4} /,'').replace(/^:::\s*pendalaman\s*/,'').replace(/^\d+\. /,'').replace(/^[-*] /,'');
    const parts=line.startsWith('|')?line.replace(/^\||\|$/g,'').split('|'):tm===2&&/^\*\*K-\d+/.test(line)?line.split('**Hasil analisis:**'):tm>=3&&/^\*\*(?:Kasus\b|Exhibit \d+)/.test(line)?line.split('**Pokok jawaban:**'):[line];
    for(const part of parts)if(normalize(part))assert.ok(text.includes(normalize(part)),`TM${tm} missing source text: ${part}`);
  }
  const specs=visualSpecs(source);
  for(const [i,b] of kinds('figure').entries()) {
    const spec=specs[i]; assert.equal(b.title,spec.judul);assert.equal(b.altText,spec['alt text']);assert.ok(b.caption.includes(spec.sumber));assert.ok(b.caption.includes(spec['pesan utama']));
    assert.ok(b.overview.cards.length&&b.overview.footer);
    assert.equal(Boolean(b.svg),svgIds.includes(spec.id),'SVG inventory');
    if(b.svg){assert.match(b.svg,/course-diagram-svg/);assert.doesNotMatch(b.svg,/#[0-9a-f]{6}\b/i);}
    if(tm>=3) {
      const overview=normalize(strings(b.overview).join(' '));
      for(const label of spec.isi.replace(/\.\s+(?=[A-Z][^;]*:|(?:International|Stars|Circle Size|Government Resources|Combination Strategies)\b)/g,'; ').split(';').map(s=>s.trim()))assert.ok(overview.includes(normalize(label)),`visual ${spec.id} missing source content ${label}`);
    }
    if(tm===1)for(const quoted of spec.isi.matchAll(/"([^"]+)"/g))assert.ok(normalize(strings(b).join(' ')).includes(normalize(quoted[1])),`visual ${spec.id} missing label ${quoted[1]}`);
  }
  for(const b of kinds('table')){assert.ok(b.rows.every(r=>r.length===b.headers.length));if(b.headers.length>=4)assert.equal(b.stackOnMobile,true);}
  for(const b of kinds('self-check'))assert.ok(b.question&&b.answer.length&&b.signal);
  for(const b of kinds('solution-reveal'))assert.ok(b.promptBlocks.length&&b.blocks.length&&b.revealLabel);
  if(tm>=3){
    assert.equal(kinds('solution-reveal').filter(b=>b.title.startsWith('SRQ-TM')).length,tm===5?16:tm===6?15:13);
    for(const b of kinds('solution-reveal'))assert.doesNotMatch(strings(b.promptBlocks).join(' '),/Pokok jawaban/,'solution stays outside question');
    // Independent acceptance checks for the source's most error-prone spatial relationships.
    const node=(svg,label)=>{
      const tag=svg.match(new RegExp(`<rect[^>]*data-node="${label}"[^>]*>`))?.[0];
      assert.ok(tag,`missing diagram node ${label}`);
      return {x:Number(tag.match(/ x="([\d.]+)"/)[1]),y:Number(tag.match(/ y="([\d.]+)"/)[1])};
    };
    if(tm===3){
      const bcg=kinds('figure')[14].svg,stars=node(bcg,'Stars'),question=node(bcg,'Question Marks'),cash=node(bcg,'Cash Cows'),dogs=node(bcg,'Dogs');
      assert.ok(stars.x<question.x&&stars.y===question.y&&cash.x<dogs.x&&cash.y===dogs.y&&stars.y<cash.y,'BCG quadrants follow Exhibit 6.5');
      assert.match(bcg,/1x/);assert.match(bcg,/10%/);assert.equal((bcg.match(/data-bcg-circle=/g)??[]).length,4);
      const generic=kinds('figure')[1].svg;
      assert.ok(node(generic,'Overall Cost Leadership').x<node(generic,'Broad Differentiation').x);
      assert.ok(node(generic,'Overall Cost Leadership').y<node(generic,'Cost Focus').y);
      assert.match(kinds('figure')[7].svg,/data-life-curve="profits"[^>]*stroke-dasharray/);
    }else if(tm===4){
      const matrix=kinds('figure')[5].svg;
      assert.ok(node(matrix,'Global').x<node(matrix,'Transnational').x&&node(matrix,'Global').y<node(matrix,'International').y);
      assert.ok(node(matrix,'International').x<node(matrix,'Multidomestic').x&&node(matrix,'Multidomestic').y===node(matrix,'International').y);
      assert.match(matrix,/Pressures for Local Adaptation/);assert.match(matrix,/Pressures to Lower Costs/);
      const diamond=kinds('figure')[1].svg;
      assert.equal((diamond.match(/<rect class="svg-card"/g)??[]).length,13,'four conceptual + five India + four source detail cards');
      assert.equal((diamond.match(/stroke-dasharray="8 6"/g)??[]).length,3,'three weaker Domestic Demand links');
      assert.match(kinds('figure')[14].svg,/M1110 1180 H1270 V140 H1110/,'reaction returns to new action');
    }
  }
  if(tm>=5){
    const figs=kinds('figure');
    const node=(svg,label)=>{const tag=svg.match(new RegExp('<rect[^>]*data-node="'+label+'"[^>]*>'))?.[0];assert.ok(tag,'missing '+label);return {x:Number(tag.match(/ x="([\d.]+)"/)[1]),y:Number(tag.match(/ y="([\d.]+)"/)[1])};};
    if(tm===5){
      assert.equal((figs[2].svg.match(/marker-start=/g)??[]).length,3,'contemporary: all three pairs bidirectional');
      assert.match(figs[1].svg,/Strategic Control → Formulate Strategies/,'traditional feedback');
      assert.ok(node(figs[3].svg,'Boundaries').y<node(figs[3].svg,'Culture').y);
      assert.ok(node(figs[3].svg,'Culture').x<node(figs[3].svg,'Rewards').x);
      assert.match(figs[6].svg,/data-edge="Controlling Shareholders → Family Managers"[^>]*marker-start=[^>]*stroke-dasharray/);
      const growth=figs[7].svg;
      assert.equal((growth.match(/data-edge=/g)??[]).length,11,'all growth branches');
      assert.equal((growth.match(/stroke-width="5"/g)??[]).length,4,'dominant US path');
      assert.ok(node(growth,'Functional Structure \\(growth\\)').y<node(growth,'Functional Structure \\(vertical integration\\)').y);
      assert.equal((figs[10].svg.match(/data-node="functional participants"/g)??[]).length,16,'four projects × four functions');
      assert.equal((figs[10].svg.match(/stroke-dasharray=/g)??[]).length,16,'each participant has project reporting');
      assert.equal((figs[8].svg.match(/data-node="Manager /g)??[]).length,6,'all functional managers');
    }else{
      assert.equal((figs[1].svg.match(/marker-start=/g)??[]).length,3,'leadership: all three pairs bidirectional');
      const power=figs[3].svg;
      for(const label of ['Legitimate Power','Reward Power','Coercive Power','Information Power'])assert.ok(power.includes('data-edge="Organizational → '+label+'"'));
      for(const label of ['Referent Power','Expert Power'])assert.ok(power.includes('data-edge="Personal → '+label+'"'));
      const continuum=figs[9].svg;
      const labels=['Laparoscopic “keyhole” surgery','Fiber-optic cable','Speech recognition software','Internet browser','Polyester','Online auction exchanges','Enterprise resource planning \\(ERP\\)','Bubble wrap','Frozen yogurt'];
      assert.ok(labels.every((s,i)=>i===0||node(continuum,labels[i-1]).x<node(continuum,s).x),'nine examples radical → incremental');
      const options=figs[16].svg;
      for(const label of ['Grow/Accelerate','Delay/Learn More','Shrink','Abandon'])assert.ok(options.includes('data-edge="Tollgate → '+label+'"'));
      assert.match(options,/data-edge="Delay\/Learn More → Learn about Outcomes"/);
      assert.match(options,/data-edge="Grow\/Accelerate → Subsequent Investment"/);
      assert.doesNotMatch(options,/data-edge="(?:Shrink|Abandon) → Subsequent Investment"/);
      for(const label of ['Business Risk','Financial Risk','Personal Risk'])assert.ok(figs[17].svg.includes('data-edge="Risk Taking → '+label+'"'));
    }
  }
  assert.doesNotMatch(strings(reading).join('\n'),/```|:::|\|--|\b(?:TERVERIFIKASI|BELUM)\b|VISUAL SPEC|TEXT ALTERNATIVE/);
  if(tm===1){
    const triad=kinds('figure').find(b=>b.title.startsWith('Strategic Management: Analyses'));
    assert.deepEqual(triad.overview.cards.slice(0,3).map(c=>c.title),['Analyses','Decisions','Actions']);
    for(const label of ['Analyses','Decisions','Actions'])assert.ok(triad.svg.includes(label));
    assert.ok(kinds('figure')[0].overview.cards.every(c=>c.items.length<=3),'Kilat maximum three chips per card');
    assert.match(kinds('figure')[0].svg,/Analyzing Organizational Goals and Objectives/,'Kilat relationship label');
    assert.equal((kinds('figure').at(-1).svg.match(/<polygon /g)??[]).length,3,'three-tier pyramid');
  }
  if(tm===2){
    const groups=kinds('figure')[6]; assert.equal(groups.overview.cards.filter(c=>c.title.includes('Hyundai')).length,1);
    assert.ok(!groups.overview.cards.find(c=>c.title.includes('Toyota')).title.includes('Hyundai'));
    assert.match(kinds('figure')[12].overview.cards[6].items.join(' '),/Yes \/ Yes \/ No \/ No/);
    assert.match(kinds('figure')[15].overview.cards[2].title,/Innovation and learning/);
    const ros=kinds('figure')[14];assert.match(ros.caption,/Ilustrasi arah, bukan transkripsi nilai presisi/);assert.match(ros.overview.cards[1].items.join(' '),/2012.*2021/);
    assert.equal((ros.svg.match(/data-ros-trend=/g)??[]).length,5,'five qualitative trend lines');
    const network=kinds('figure')[17].svg;
    assert.equal((network.match(/data-network-node=/g)??[]).length,26,'original network node count');
    assert.equal((network.match(/data-network-edge=/g)??[]).length,35,'original undirected edge count');
    assert.doesNotMatch(network,/data-network-edge="[^"]*Fred/,'Fred remains isolate');
    assert.equal(kinds('figure')[17].overview.cards.find(c=>c.title==='Fred').items[0],'Isolate: tanpa hubungan');
  }
  console.log(`MNU307 TM0${tm} canonical PASS: complete 05, ${counts[2]} figures, ${counts[4]} hidden exercise answers`);
}
export function testProtected() {
  const snapshot=JSON.parse(fs.readFileSync('scripts/fixtures/mnu307/protected-files.json','utf8'));
  for(const [file,hash] of Object.entries(snapshot))assert.ok([hash.worktree,hash.repository].includes(createHash('sha256').update(fs.readFileSync(file)).digest('hex')),`protected file changed: ${file} (Git checkout EOL variants explicitly recorded)`);
  // The shared course catalog only changes the fifth and sixth Manstrat entries.
  const course=fs.readFileSync('src/data/courseData.ts','utf8').replace(/\r\n/g,'\n').replace(/const MNS301_TM1_7 = materi\(\[\n((?:[^\n]*\n){4})(?:[^\n]*\n){2}/,'const MNS301_TM1_7 = materi([\n$1');
  assert.equal(createHash('sha256').update(course).digest('hex'),JSON.parse(fs.readFileSync('scripts/fixtures/mnu307/course-catalog-guard.json','utf8')).sha256);
  console.log(`MNU307 shared render rules PASS: ${Object.keys(snapshot).length} protected files and catalog outside TM05-TM06 unchanged`);
}
