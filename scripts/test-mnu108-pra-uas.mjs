import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {materializeReading} from './build-mnu108-pra-uas.mjs';
const hash=s=>createHash('sha256').update(s).digest('hex');
const baseline=JSON.parse(fs.readFileSync('scripts/fixtures/mnu108-pra-uas-baseline.json','utf8'));
const result=await build({stdin:{contents:[
 "export * from './src/data/quizzes/mnm101.ts';", "export * from './src/data/flashcards/mnm101.ts';", "export * from './src/data/banksoal/mnm101.ts';", "export * from './src/data/manajemen/manajemenData.ts';", "export {ALL_COURSES} from './src/data/courseData.ts';", "export {loadCourseContent} from './src/data/courses/courseRegistry.ts';", "export {RELEASES} from './src/data/releaseNotes.ts';"
].join('\n'),resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent',plugins:[{name:'raw',setup(b){b.onResolve({filter:/\?raw$/},a=>({path:path.resolve(a.resolveDir,a.path.slice(0,-4)),namespace:'raw'}));b.onLoad({filter:/.*/,namespace:'raw'},a=>({contents:fs.readFileSync(a.path,'utf8'),loader:'text'}));}}]});
const m=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const jsonHash=x=>hash(JSON.stringify(x));
for(const [file,sha]of Object.entries(baseline.modules))assert.equal(hash(fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n')),sha,'Original TM1–8 source');
assert.equal(jsonHash(m.MNM101_QUIZ_UTS),baseline.utsQuestions);
assert.equal(jsonHash(m.MNM101_BANK_UTS),baseline.utsCases);
assert.equal(jsonHash(m.MNM101_FC.filter(c=>c.phase==='pra-uts')),baseline.preCards);
assert.equal(jsonHash((await m.loadCourseContent('MNU108')).reviews.uts),baseline.utsReview);
const catalog=fs.readFileSync('src/data/courseData.ts','utf8').replace(/\r\n/g,'\n').replace(/const MNU108_TM8_14 = materi\(\[[\s\S]*?\], 9\);/,'MNU108_POST_CATALOG').replace(/(materiTM1_7: MNU108_TM1_7, materiTM8_14: MNU108_TM8_14,\n\s*flashcardCount:) \d+/, '$1 MNU108_COUNT');
const aspCatalog=JSON.parse(fs.readFileSync('scripts/fixtures/akk203-pra-uas-shared-catalog.json','utf8'));
assert.ok([baseline.catalogOutsidePost,aspCatalog.mnu108OutsidePost].includes(hash(catalog)),'Every catalog byte outside explicitly recorded MNU108/ASP revisions unchanged');
const specs=Array.from({length:7},(_,i)=>JSON.parse(fs.readFileSync(`content-pipeline/MNU108/TM${String(i+9).padStart(2,'0')}/04_canonical_spec.json`,'utf8')));
const qs=m.MNM101_QUIZ_UAS,cards=m.MNM101_FC.filter(c=>c.phase==='pra-uas'),bank=m.MNM101_BANK_UAS;
assert.equal(qs.length,60);assert.equal(cards.length,42);assert.equal(bank.length,14);
assert.deepEqual([9,10,11,12,13,14,15].map(tm=>qs.filter(q=>q.tm===tm).length),[8,8,8,9,9,10,8]);
assert.deepEqual([0,1,2,3].map(a=>qs.filter(q=>q.answer===a).length),[15,15,15,15]);
assert.equal(new Set(qs.map(q=>q.id)).size,60);assert.equal(new Set(cards.map(c=>c.id)).size,42);
cards.forEach(c=>assert.match(c.id,/^mnu108-uas-tm\d\d-\d\d$/,'Retired old post-UTS SRS ids are not repurposed'));
const walk=bs=>bs.flatMap(b=>[b,...walk(b.blocks??[]),...walk(b.answer??[])]);
let exhibits=0,figures=0;
for(const s of specs){
 assert.deepEqual(m.MANAJEMEN_READINGS[s.tm],materializeReading(s.reading));
 assert.deepEqual(qs.filter(q=>q.tm===s.tm),s.quiz);assert.deepEqual(cards.filter(c=>c.tm===s.tm),s.cards);
 assert.deepEqual(bank.filter(b=>b.scope.startsWith(`TM ${s.tm}:`)),s.bank);
 const blocks=walk(s.reading.blocks);assert.ok(blocks.filter(b=>b.kind==='self-check').length>=6);
 assert.equal(blocks.filter(b=>b.kind==='solution-reveal').length,2);
 assert.ok(s.reading.intro.length>100);assert.ok(JSON.stringify(s.reading).length>14000);
 assert.ok(s.audit.appendix.length>0);exhibits+=s.exhibits.length;
 const range=s.reading.ref.match(/hal\. (\d+)–(\d+)/).slice(1).map(Number);
 for(const q of s.quiz){
  assert.equal(new Set(q.options).size,4);assert.ok(q.skill&&q.sourceRef&&q.sourceAnchors.length);
  assert.ok(q.explanation.length>150);assert.doesNotMatch(q.sourceAnchors.join(' '),/NaN|undefined/);
  assert.ok(Math.max(...q.options.map(o=>o.length))/Math.min(...q.options.map(o=>o.length))<=2.5,`${q.id}: option-length cue`);
  for(const a of q.sourceRef.matchAll(/\[hal\. ([^\]]+)\]/g))for(const part of a[1].split(','))for(const n of part.trim().split('–').map(Number))assert.ok(n>=range[0]&&n<=range[1],q.id+' source range');
 }
 for(const c of s.cards)assert.match(c.back,/\[hal\./);
 s.bank.forEach(c=>{assert.match(c.context,/\[hal\./);assert.match(c.answerGuide,/\[hal\./);assert.ok(c.answerGuide.length>500);});
 for(const f of walk(materializeReading(s.reading).blocks).filter(b=>b.kind==='figure')){
  figures++;for(const svg of [f.svg,f.mobileSvg]){assert.doesNotMatch(svg,/>undefined<|NaN/);assert.match(svg,/aria-labelledby/);assert.match(svg,/<desc /);assert.doesNotMatch(svg,/style="fill:none"/,'Connector fill resists existing theme rule');}
 }
 assert.doesNotMatch(JSON.stringify(s),/—|bukan[\s\S]{0,80}melainkan|tidak hanya[\s\S]{0,80}tetapi juga/i);
 const dir=`content-pipeline/MNU108/TM${String(s.tm).padStart(2,'0')}`;
 assert.ok(fs.readFileSync(dir+'/04_canonical_spec.md','utf8').includes(hash(fs.readFileSync(dir+'/04_canonical_spec.json'))));
}
assert.equal(exhibits,84);assert.equal(figures,69);
assert.equal(m.MANAJEMEN_REVIEW_READINGS.uas.tm,16);assert.equal(m.MANAJEMEN_REVIEW_READINGS.uas.layout,'layered');
const course=m.ALL_COURSES.find(c=>c.course.code==='MNU108').course;
assert.equal(course.flashcardCount,111);assert.deepEqual(course.materiTM8_14.map(x=>x.tm),[9,10,11,12,13,14,15]);
assert.deepEqual(course.materiTM8_14.map(x=>x.ref.match(/Ch\. (.*)/)[1]),['8','9','10','11','12','13–14','15']);

// Independent source anchors and facts, not generated from the canonical answer fields.
const keys=[
 [/Creativity.*innovation/,/pasar berkembang.*negara maju/,/Penciptaan ide.*implementasi/,/Discovery.*collaboration/,/Idea champion/,/Pendapat pegawai.*dibagikan/,/Refreezing/,/pengetahuan pengguna.*dukungan/],
 [/Strategi.*human capital/,/belajar.*pengembangan/,/Job description.*job specification/,/kecocokan.*realistis/,/Training.*development/,/Persaingan.*kerja sama/,/Diversity.*inclusion/,/memperjuangkan.*karier/],
 [/feedback/i,/Job satisfaction/i,/Observe → Screen → Organize/,/Fundamental attribution error/,/Conscientiousness/,/Social awareness/,/next action/,/Selaraskan/],
 [/Informal/,/Humility/,/Initiating structure/,/R2 → S2/,/S3 participating/,/Leader–member relations/,/Substitute/,/Effective follower/,/Expert power/],
 [/Pujian extrinsic/,/Frustration-regression/,/Dissatisfaction/,/Specific, challenging, accepted/,/P→O/,/Avoidance learning/,/Task identity/,/Information/,/Tarif komisi/],
 [/Feedback/,/Channel kaya/,/Saya kesulitan/,/Upward formal/,/Berinteraksi/,/Productive output/,/Fear of conflict/,/Cohesion perlu/,/Collaborating/,/Threat/],
 [/Membandingkan/,/Financial, customers/,/Shared goals/,/Plan → Find/,/Cash budget/,/Current 2,4; quick 0,4/,/Average inventory/,/Rubric/]
];
specs.forEach((s,i)=>s.quiz.forEach((q,j)=>assert.match(q.options[q.answer],keys[i][j],q.id+' independent source key')));
const sourceCasePages=['295–296','358','398–399','435–437','469–470','506','573–575'];
specs.forEach((s,i)=>assert.ok(s.bank[0].context.includes(sourceCasePages[i]),'RPP source case page'));
const fig=(tm,tail)=>walk(specs.find(s=>s.tm===tm).reading.blocks).find(b=>b.spec?.id.endsWith(tail)).spec;
assert.deepEqual(fig(10,'9-1').data.map(d=>d.value),[71,66,52]);
assert.deepEqual(fig(10,'9-15-RACE').data?.map(d=>[d.value,d.value2]),[[82.1,77],[11.3,12.7],[4.3,6.6],[2.3,3.7]]);
assert.deepEqual(fig(11,'10-3').nodes.map(n=>n.title),['Observe','Screen','Organize']);
assert.deepEqual(fig(11,'EI').nodes.map(n=>n.title),['Self-awareness','Self-management','Social awareness','Relationship management']);
assert.ok(fig(12,'11-6').nodes.find(n=>n.title.startsWith('R2')).items.includes('Task tinggi; relationship tinggi'));
assert.equal(fig(13,'12-6').type,'expectancy');assert.equal(fig(15,'15-1').type,'control');
assert.ok(fig(11,'10-13').yLabel==='Performance'&&fig(14,'14-9').xLabel==='Amount of conflict');
assert.equal(600000/250000,2.4);assert.equal((25000+75000)/250000,.4);
const expected=[215000/2900000*100,460000/2900000*100,(2900000-2110000)/2900000*100,215000/1650000*100,850000/1650000*100].map(n=>n.toFixed(2).replace('.',',')+'%');
const ratioTable=walk(specs[6].reading.blocks).find(b=>b.kind==='table'&&b.title.startsWith('Turunan contoh'));
assert.deepEqual(ratioTable.rows.slice(2).map(r=>r[2]),expected);
assert.equal(250000+600000+540000+260000,1650000);assert.equal(2900000-2460000+20000-80000-165000,215000);
assert.match(JSON.stringify(specs[6].reading),/Average inventory.*tidak tersedia/i);
assert.match(JSON.stringify(specs[1].reading),/Title IX/);assert.match(JSON.stringify(specs[1].reading),/22 Juni 2005/);
const mnuRelease=m.RELEASES.findIndex(r=>r.version==='v1.3.8');assert.ok(mnuRelease>=0);assert.equal(m.RELEASES[mnuRelease+1].version,'v1.3.7');
console.log(`MNU108 pra-UAS PASS: 7 canonical TM + separate UAS review; ${figures} diagrams, 84 classified exhibits; 60/42/14, source keys/numeric facts, original UTS and all other catalog bytes preserved.`);
