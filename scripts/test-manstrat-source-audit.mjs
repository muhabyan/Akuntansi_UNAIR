import assert from 'node:assert/strict';
import { build } from 'esbuild';
const result=await build({entryPoints:['src/data/manstrat/manstratData.ts'],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const {MANSTRAT_READINGS:readings}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const walk=bs=>bs.flatMap(b=>[b,...walk(b.blocks??[]),...walk(b.answer??[])]);
const tables=tm=>walk(readings[tm].blocks).filter(b=>b.kind==='table');
const numeric=s=>Number(s.replaceAll('.','').replace(',','.'));
const findRow=(tm,name,unit)=>tables(tm).filter(t=>!unit||t.headers[0].includes(unit)).flatMap(t=>t.rows).find(r=>r[0]===name);
// Source facts independently read from local Dess 11e, using the PDF page rather than a constant print offset.
// H&M Exhibit 1B: PDF 667. Exhibit 1A's 98,967 conflicts with 1B, 1C and its own 7.7% margin.
assert.equal(numeric(findRow(10,'Penjualan bersih')[1]),198967);
assert.equal((15255/198967*100).toFixed(1),'7.7');
assert.notEqual((15255/98967*100).toFixed(1),'7.7');
// LVMH Exhibit 4: PDF 736, table with the local Page C59 marker.
const house=tables(11).find(t=>t.headers[0].startsWith('House (juta EUR'));
const revenues=[5974,30896,6608,8964,11754],profits=[1863,12842,684,1679,534];
assert.deepEqual(house.rows.map(r=>numeric(r[1])),revenues);
assert.deepEqual(house.rows.map(r=>numeric(r[2])),profits);
assert.equal((30896/revenues.reduce((a,b)=>a+b,0)*100).toFixed(1),'48.1');
assert.equal((12842/profits.reduce((a,b)=>a+b,0)*100).toFixed(1),'73.0');
// Emirates PDF 780, Samsung PDF 922, Alibaba PDF 989, P&G PDF 1028.
assert.equal(numeric(findRow(12,'Revenue (AED juta)')[1]),30230);
assert.equal(numeric(findRow(12,'Revenue (AED juta)')[2]),90995);
for(const [name,value] of [['Revenue',279604],['Operating profit',51633],['Net income',39907]])assert.equal(numeric(findRow(13,name,'KRW miliar')[1]),value);
for(const [name,value] of [['Revenue',717289],['Income from operations',89678],['Net income',143284]])assert.equal(numeric(findRow(14,name,'RMB juta')[1]),value);
assert.equal((89678/717289*100).toFixed(1),'12.5');
assert.equal(numeric(findRow(15,'Net sales','USD juta')[1]),76118);
assert.equal(numeric(findRow(15,'Net earnings','USD juta')[1]),14352);
assert.equal((14352/76118*100).toFixed(1),'18.9');
console.log('Manstrat read-only source audit PASS: six financial case tables and ratios match original PDF facts; H&M source inconsistency explicitly checked. No protected data edited.');
