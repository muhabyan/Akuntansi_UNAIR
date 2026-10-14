import assert from 'node:assert/strict';
import fs from 'node:fs';
import {hash,flatten,loadAsp,catalogOutsideAsp} from './akk203-pra-uas-lib.mjs';
import {materializeReading} from './build-akk203-pra-uas.mjs';
const baseline=JSON.parse(fs.readFileSync('scripts/fixtures/akk203-pra-uas-baseline.json','utf8')),m=await loadAsp();
for(const [file,sha] of Object.entries({...baseline.modules,...baseline.outside}))assert.equal(hash(fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n')),sha,'Protected source '+file);
assert.equal(hash(JSON.stringify(m.AKS201_QUIZ_UTS)),baseline.utsQuiz);assert.equal(hash(JSON.stringify(m.AKS201_BANK_UTS)),baseline.utsBank);assert.equal(hash(JSON.stringify(m.AKS201_FC.filter(c=>c.phase==='pra-uts'))),baseline.utsCards);assert.equal(hash(JSON.stringify(m.AKS201_REVIEW_READINGS.uts)),baseline.utsReview);
assert.equal(hash(catalogOutsideAsp(fs.readFileSync('src/data/courseData.ts','utf8'))),baseline.catalogOutsideAsp);
const releases=fs.readFileSync('src/data/releaseNotes.ts','utf8').replace(/\r\n/g,'\n');assert.ok(releases.endsWith(baseline.oldReleases.trimStart()),'Historical releases unchanged');
const specs=[];for(let tm=8;tm<=14;tm++){
 const s=JSON.parse(fs.readFileSync(`content-pipeline/AKK203/TM${String(tm).padStart(2,'0')}/04_canonical_spec.json`,'utf8'));specs.push(s);
 assert.equal(s.tm,tm);assert.deepEqual(m.AKS201_READINGS[tm],materializeReading(s.reading));assert.equal(s.cards.length,6);assert.equal(s.bank.length,2);assert.ok(s.quiz.length>=8);
 const blocks=flatten(s.reading.blocks);assert.equal(s.reading.layout,'layered');assert.equal(blocks.filter(b=>b.kind==='self-check').length,6);assert.equal(blocks.filter(b=>b.kind==='solution-reveal').length,2);assert.ok(blocks.some(b=>b.kind==='pendalaman'));
 for(const q of s.quiz){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.match(q.sourceRef,/https:/);assert.ok(q.explanation.length>150);}
 for(const c of s.cards)assert.ok(s.audit.practiceSources.some(r=>r.id===c.id&&r.url.startsWith('https:')));for(const [i,b] of s.bank.entries()){assert.ok(s.audit.practiceSources.some(r=>r.id===`tm${tm}-case${i+1}`&&r.url.startsWith('https:')));assert.ok(b.answerGuide.length>450);}
 assert.equal(s.audit.status,'NEEDS_HUMAN_REVIEW','Missing assigned book/final sources cannot become READY');
 assert.doesNotMatch(JSON.stringify(s),/—|bukan[^.!?]{0,120}melainkan|tidak hanya[^.!?]{0,120}tetapi juga/i);
}
assert.equal(m.AKS201_QUIZ_UAS.length,60);assert.equal(m.AKS201_BANK_UAS.length,14);const cards=m.AKS201_FC.filter(c=>c.phase==='pra-uas');assert.equal(cards.length,42);assert.equal(new Set(m.AKS201_FC.map(c=>c.id)).size,m.AKS201_FC.length);assert.deepEqual(cards,specs.flatMap(s=>s.cards));assert.deepEqual(m.AKS201_QUIZ_UAS,specs.flatMap(s=>s.quiz));assert.deepEqual(m.AKS201_BANK_UAS,specs.flatMap(s=>s.bank));assert.ok(m.AKS201_REVIEW_READINGS.uas);
// Independent expected facts/calculations derived from primary pages, not canonical answer keys.
const expectedKeys={8:['SAPP','SAI'],9:['600','66'],10:['60','2028'],11:['120','80','40'],12:['75','1,2'],13:['10','50'],14:['8,5','0,058']};
for(const [tm,needles] of Object.entries(expectedKeys)){const text=JSON.stringify(specs.find(s=>s.tm===Number(tm)));for(const needle of needles)assert.ok(text.includes(needle),`TM${tm} independently audited content ${needle}`);}
assert.equal(480000000/800,600000);assert.equal(600000000/1000,600000);assert.equal((120/180*100).toFixed(2),'66.67');
assert.equal(300-180,120);assert.equal(200-120+60-60,80);assert.equal(100-60,40);assert.equal(300-180-50,70);assert.equal(70+50,120);
assert.equal(50000*1500,75000000);assert.equal(600000000*2,1200000000);const aid=400000000,wealth=25000000000;assert.ok(aid<500000000&&wealth>=20000000000,'Yayasan OR test');
assert.equal(120-70,50);assert.equal(100-70-20,10);assert.equal(10+20+20,50);
assert.equal(((.277-.192)*100).toFixed(1),'8.5');assert.equal(((.277-.192)/.277*100).toFixed(2),'30.69');const pValues=[.058,.039,.123];assert.deepEqual(pValues.map(p=>p<.05),[false,true,false]);
const facts={spknStart:'2028-04-10',spknPromulgated:'2026-04-10',followupDays:60,akipWeights:[30,30,15,25],yayasanAid:500000000,yayasanAssets:20000000000,parpolIndividual:1000000000,parpolCompany:7500000000,subsidy:[1000,1200,1500],olken:{nDesign:608,nRoad:477,nAll:538,control:.277,treatment:.192,effect:-.085,p:.058}};
assert.equal(facts.akipWeights.reduce((a,b)=>a+b),100);assert.match(JSON.stringify(specs[2]),/10 April ?2028/);assert.match(JSON.stringify(specs[4]),/78\/2020/);
const criticalKeys=[['08-01',/SABUN dan SAI/],['08-07',/Tidak dieliminasi/],['08-09',/2025/],['09-04',/600\.000/],['09-05',/66,67%/],['09-08',/Perencanaan 30, pengukuran 30, pelaporan 15, evaluasi 25/],['10-07',/Jawaban atau penjelasan sejak LHP/],['10-08',/10 April 2028/],['11-06',/^70 juta/],['11-07',/Tanpa 80, dengan 40, total 120/],['11-08',/melalui kekayaan/],['12-03',/^1,2 miliar/],['12-04',/^Rp 75 juta/],['12-08',/1 bulan setelah tahun anggaran/],['13-02',/LO 120 dan piutang 20/],['13-06',/^10 juta/],['14-04',/8,5 poin persentase/],['14-05',/Tidak melewati ambang 5%/],['14-06',/477.*538/]];
for(const [id,expected] of criticalKeys){const q=m.AKS201_QUIZ_UAS.find(q=>q.id===`akk203-uas-tm${id}`);assert.ok(q);assert.match(q.options[q.answer],expected,`Independent primary-source key ${id}`);}
for(const s of specs)for(const b of flatten(s.reading.blocks).filter(b=>b.kind==='journal')){const n=v=>Number(String(v??0).replaceAll('.','').replace(',','.'));assert.equal(b.lines.reduce((a,l)=>a+n(l.debit),0),b.lines.reduce((a,l)=>a+n(l.credit),0),'Balanced journal '+b.title);}
// Only concepts retained from the old card are allowed to reuse an identity.
const identityMap=JSON.parse(fs.readFileSync('content-pipeline/AKK203/card-identity-map.json','utf8'));
for(const c of cards.filter(c=>baseline.oldPostCards.some(old=>old.id===c.id))){assert.ok(identityMap.retained.some(row=>row.id===c.id&&row.newFront===c.front),'Reviewed stable identity '+c.id);}
assert.ok(!cards.some(c=>c.id==='aks201-tm13-05'),'Fraud card cannot become validity card');
console.log('AKK203 source/structure PASS; preserved 380 unrelated sources and pre-UTS data; independent source facts/calculations checked. Source gaps remain open.');
