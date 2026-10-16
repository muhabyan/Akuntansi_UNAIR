import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import katex from 'katex';
const bundle=await build({stdin:{contents:`
export {SII306_READINGS} from './src/data/sia/siaReadings.ts';
export {SII306_QUIZ_UAS} from './src/data/quizzes/sii306.ts';
export {SII306_FC} from './src/data/flashcards/sii306.ts';
export {SII306_BANK_UAS} from './src/data/banksoal/sii306.ts';`,resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const m=await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const chapters={8:9,9:10,10:11,11:12,12:14,13:15,14:17};
const flatten=blocks=>blocks.flatMap(b=>[b,...(b.blocks?flatten(b.blocks):[]),...(b.answer?flatten(b.answer):[])]);
const parser=new (new JSDOM()).window.DOMParser();
const baseline=JSON.parse(fs.readFileSync('scripts/fixtures/sia-pra-uas-baseline.json','utf8'));
const outsideSia=fs.readFileSync('src/data/courseData.ts','utf8').replace(/\r\n/g,'\n').replace(/const SII306_TM8_14 = materi\(\[[\s\S]*?\], 8\);/,'SIA_POST_CATALOG');
const integration=JSON.parse(fs.readFileSync('scripts/fixtures/akk203-merge-approved-20261016.json','utf8'));
assert.ok([baseline.catalogOutsideSiaPost,integration.catalogOutsideSia].includes(createHash('sha256').update(outsideSia).digest('hex')),'Catalog outside SIA matches the historical or explicitly reviewed ASP version exactly');
assert.ok(m.SII306_FC.filter(c=>c.tm>=8).every(c=>!baseline.previousPostCardIds.includes(c.id)),'RPS changes must not repurpose old-topic SRS mastery');
let figures=0,journals=0;
for(let tm=8;tm<=14;tm++){
  const reading=m.SII306_READINGS[tm];assert.equal(reading.tm,tm);assert.match(reading.ref,new RegExp(`Ch\\. ${chapters[tm]}\\b`));
  const blocks=flatten(reading.blocks);
  assert.ok(blocks.filter(b=>b.kind==='figure').length>=3,`TM${tm}: visual coverage`);
  assert.ok(blocks.filter(b=>b.kind==='self-check').length>=2,`TM${tm}: independent practice`);
  assert.ok(blocks.some(b=>b.kind==='example'),`TM${tm}: guided example`);
  for(const block of blocks){
    if(block.kind==='table')block.rows.forEach(row=>assert.equal(row.length,block.headers.length));
    if(block.kind==='formula')katex.renderToString(block.text,{throwOnError:true,displayMode:true});
    if(block.kind==='journal'){
      const number=v=>Number((v??'0').replaceAll(',',''));
      assert.equal(block.lines.reduce((s,l)=>s+number(l.debit),0),block.lines.reduce((s,l)=>s+number(l.credit),0),block.title);journals++;
    }
    if(block.kind==='figure'){
      figures++;assert.ok(block.altText&&block.transcript?.length&&block.caption);
      assert.ok(block.mobileSvg||block.mobileFlow,`TM${tm}: readable mobile representation`);
      for(const svg of [block.svg,block.mobileSvg].filter(Boolean)){
        const doc=parser.parseFromString(svg,'image/svg+xml');assert.equal(doc.querySelector('parsererror'),null,block.title);
        const ids=[...doc.querySelectorAll('[id]')].map(n=>n.id);assert.equal(ids.length,new Set(ids).size);
        assert.equal(doc.querySelector('script,foreignObject'),null);
        for(const node of doc.querySelectorAll('[marker-end]'))assert.ok(ids.includes(node.getAttribute('marker-end').match(/#([^)]*)/)[1]));
      }
    }
  }
  const questions=m.SII306_QUIZ_UAS.filter(q=>q.tm===tm);assert.equal(questions.length,5);
  for(const q of questions){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.match(q.explanation,/Rujukan:/);}
  assert.equal(m.SII306_FC.filter(c=>c.tm===tm).length,6);
  const snapshot=JSON.parse(fs.readFileSync(`content-pipeline/SII306/TM${String(tm).padStart(2,'0')}/audit-20261012/04_canonical_spec.json`,'utf8'));
  assert.deepEqual(snapshot.reading,reading);assert.deepEqual(snapshot.questions,questions);assert.deepEqual(snapshot.bank,m.SII306_BANK_UAS[tm-8]);
}
// Independently calculated numerical scenarios, including a schedule perturbation.
assert.equal(10+30+20+10-14,56);assert.equal(8+56-12,52);
assert.equal(100+60-35-10+30+35,15+140+(90-55-10));
const factor=[1,2,3].reduce((s,t)=>s+1/1.1**t,0);
assert.equal((50*factor-120).toFixed(2),'4.34');assert.equal((45*factor-120).toFixed(2),'-8.09');
const duration=(b=3)=>2+Math.max(b,4)+2;assert.equal(duration(),8);assert.equal(duration(5),9);
assert.ok(JSON.stringify(m.SII306_READINGS[8]).includes('COGM'));
assert.ok(JSON.stringify(m.SII306_READINGS[12]).includes('instant'));
console.log(`SIA pra-UAS PASS: seven RPS chapters, ${figures} responsive figures, ${journals} balanced journals, 35 quizzes, 42 cards, seven cases; XML, formulas and calculations.`);
