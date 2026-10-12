import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import katex from 'katex';

const bundle = await build({ stdin: { contents: [
  "export * from './src/data/quizzes/mnk201.ts';",
  "export * from './src/data/flashcards/mnk201.ts';",
  "export * from './src/data/banksoal/mnk201.ts';",
  "export * from './src/data/mankeu/mankeuData.ts';",
  "export { ALL_COURSES, SEMESTERS } from './src/data/courseData.ts';",
  "export { RELEASES } from './src/data/releaseNotes.ts';",
].join('\n'), resolveDir: process.cwd(), loader: 'ts' }, bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent' });
const m = await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const manifest = JSON.parse(fs.readFileSync('scripts/fixtures/mnk102-uas-sources.json'));
const hash = s => createHash('sha256').update(s).digest('hex');
const jsonHash = x => hash(JSON.stringify(x));
for (const key of ['MNK201_QUIZ_UTS','MNK201_BANK_UTS']) assert.equal(jsonHash(m[key]),manifest.preUts[key]);
assert.equal(jsonHash(m.MNK201_REVIEW_UTS_QUIZ),manifest.preUts.reviewQuiz8);
assert.equal(jsonHash(m.MNK201_REVIEW_UTS_BANK),manifest.preUts.reviewBank8);
assert.equal(jsonHash(m.MNK201_FC.filter(c=>c.tm<=7)),manifest.preUts.cards1to7);
assert.equal(jsonHash(m.MNK201_FC.filter(c=>c.tm===8)),manifest.preUts.reviewCards8);
for (const [file,sha] of Object.entries(manifest.preUts.readings)) assert.equal(hash(fs.readFileSync(file,'utf8').replaceAll('\r\n','\n')),sha,'original TM1-8 remains intact');
const qs=m.MNK201_QUIZ_UAS, cards=m.MNK201_FC.filter(c=>c.phase==='pra-uas'), banks=m.MNK201_BANK_UAS;
const tms=[9,10,11,12,13,14,15];
assert.equal(qs.length,60);assert.equal(cards.length,42);assert.equal(banks.length,14);
assert.deepEqual(tms.map(tm=>qs.filter(q=>q.tm===tm).length),[12,10,8,8,8,8,6]);
assert.deepEqual(tms.map(tm=>cards.filter(c=>c.tm===tm).length),[6,6,6,6,6,6,6]);
assert.deepEqual(tms.map(tm=>banks.filter(c=>c.scope.startsWith(`TM ${tm}:`)).length),[2,2,2,2,2,2,2]);
assert.equal(new Set(qs.map(q=>q.id)).size,60);assert.equal(new Set(cards.map(c=>c.id)).size,42);
assert.deepEqual([0,1,2,3].map(a=>qs.filter(q=>q.answer===a).length),[15,15,15,15]);
const reference = text => {assert.match(text,/Rujukan:/);assert.match(text,/hal\. cetak|halaman PDF/);};
for (const q of qs) {
  reference(q.q);reference(q.explanation);assert.ok(q.q.includes(q.sourceRef)&&q.explanation.includes(q.sourceRef));
  assert.equal(new Set(q.options).size,4);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
  assert.ok(q.sourceAnchors.length&&q.skill);assert.ok(q.explanation.length>180);
  const lengths=q.options.map(x=>x.length);assert.ok(Math.max(...lengths)/Math.min(...lengths)<2,q.id+' option-length cue');
}
cards.forEach(c=>reference(c.back));banks.forEach(b=>{reference(b.context);reference(b.answerGuide);assert.ok(b.instructions.length>=4);assert.ok(b.answerGuide.length>600);});

// Recompute the numeric keys independently of authoring helpers, including tenor and currency direction.
const expected = {
  9:[(1100000-660000)/400000,400000*.75/2000000*100,(3000-10000*.12)*.75/10000*100,1*(1+.75*.6),5+(1+.75*.6)*6,(.4*.09*.75+.6*.14)*100,.4/.6,(400000-400000*.1)*.75/(80000-400000/25),10+.25*4,4000*.1*.25,null,Math.sqrt(.25*7.5**2+.25*7.5**2)],
  10:[150-200*.6,30/150*100,30/10,200*.7-100,100-300/30,2000/90,(1000-200)/(20-200/50),80/2,60/1.2,null],
  11:[60+45-30,6/(36.5/365),4.5/(36.5/365),3/(36.5/365),10-(20+80-105),10+100-80-15,3000*.3-3000*.02-50-300*.1,-1],
  12:[.02/.98*(365/20)*100,((1+.02/.98)**(365/20)-1)*100,null,12/100*100,12/(100-20)*100,(100/(100-12)-1)*100,12/(100-12-10)*100,(800-600)*.2],
  13:[100000*16000/1e6,16000/160,16000*1.06/1.04,16000*1.03/1.02,16000*1.08/1.03,100000*(17000-16300)/1e6,50000*(18000-17000)/1e6,10000*17000/1.1/1e6-150],
  14:[500+300+80,80-40-10,300+80-10,[1,2,3].reduce((n,t)=>n+20/1.1**t,0)+200/1.1**3-60+10,30*1.02/(.12-.02),2*50-5*18,30/(10+2),100+8-3-110],
  15:[1.2*.1+1.4*.2+3.3*.08+.6*.5+1.2,150/300,3.3*(.08-.02),(120-15)-(95-8),null,15],
};
for (const [tm,values] of Object.entries(expected)) values.forEach((value,i)=>{
  if(value===null)return;
  const q=qs.filter(q=>q.tm===+tm)[i];const key=q.options[q.answer];
  const token=key.match(/\d[\d.,]*/)[0];const decimals=token.includes(',')?token.split(',')[1].length:0;
  let actual=Number(token.replaceAll('.','').replace(',','.'));
  if(/^Minus/i.test(key))actual=-actual;
  assert.ok(Math.abs(actual-value)<=.5*10**(-decimals)+1e-8,`${q.id}: ${key} expected ${value}`);
});
assert.match(qs.filter(q=>q.tm===9)[10].options[qs.filter(q=>q.tm===9)[10].answer],/^B:/);
assert.match(qs.filter(q=>q.tm===15)[4].options[qs.filter(q=>q.tm===15)[4].answer],/^Periksa populasi/);
const z=(x)=>1.2*x[0]+1.4*x[1]+3.3*x[2]+.6*x[3]+x[4];
assert.equal(z([.1,.2,.08,.5,1.2]).toFixed(3),'2.164');
assert.equal(z([.1,.2,.02,.5,1.2]).toFixed(3),'1.966');
assert.ok(banks[6].answerGuide.includes('0,61045295')&&banks[6].answerGuide.includes('1,38954705'));
assert.ok(banks[10].answerGuide.includes('Rp185 miliar')&&banks[11].answerGuide.includes('minus Rp5 juta'));
const flatten=blocks=>blocks.flatMap(b=>[b,...('blocks' in b?flatten(b.blocks):[])]);
for (const tm of tms) {
  const r=m.MNK201_READINGS[tm];assert.equal(r.tm,tm);assert.ok(r.ref);
  const blocks=flatten(r.blocks);assert.equal(blocks.filter(b=>b.kind==='solution-reveal').length,2);
  for (const block of blocks.filter(b=>b.kind==='formula')) katex.renderToString(block.text,{throwOnError:true,displayMode:true,strict:'error'});
  assert.ok(blocks.some(b=>b.kind==='formula'));assert.ok(JSON.stringify(r).length>6500,`TM${tm} substantive reading`);
  assert.ok(!JSON.stringify(r).includes('—'),'no em dash in scoped reading');
  assert.ok(!/bukan[\s\S]{0,80}melainkan|tidak hanya[\s\S]{0,80}tetapi juga/i.test(JSON.stringify(r)));
}
assert.equal(m.MNK201_REVIEW_READINGS.uts,m.MNK201_READINGS[8]);assert.equal(m.MNK201_REVIEW_READINGS.uas,undefined);
const course=m.ALL_COURSES.find(x=>x.course.code==='MNK102').course;
assert.equal(course.flashcardCount,m.MNK201_FC.length);
assert.deepEqual(course.materiTM8_14.map(c=>c.tm),tms);
assert.match(m.MNK201_READINGS[13].ref,/Bab 18/);
assert.equal(m.RELEASES[0].version,'v1.3.6');assert.equal(m.RELEASES[1].version,'v1.3.5');
console.log('MNK102 UAS PASS: source coverage, 60/42/14, independent numeric keys, answer balance, seven rendered formula sets, exact original pre-UTS preservation and corrected chapter mapping.');
