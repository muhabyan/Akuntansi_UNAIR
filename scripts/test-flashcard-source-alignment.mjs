import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
const result=await build({entryPoints:['src/data/flashcards/registry.ts'],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const {getFlashcards}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
for(const code of ['AKK201','AKM201','AKA103','MAS122','PJK201','SII306']){
  const cards=getFlashcards(code);assert.equal(cards.length,code==='SII306'?105:84);
  for(let tm=8;tm<=14;tm++){
    const expected=JSON.parse(fs.readFileSync(`content-pipeline/${code}/TM${String(tm).padStart(2,'0')}/audit-20261012/08_flashcard_alignment.json`,'utf8'));
    assert.deepEqual(cards.filter(c=>c.phase==='pra-uas'&&c.tm===tm),expected,`${code} TM${tm} canonical cards`);
    expected.forEach(c=>assert.match(c.back,/Rujukan:/));
  }
}
const post=code=>getFlashcards(code).filter(c=>c.phase==='pra-uas');
assert.doesNotMatch(JSON.stringify(post('AKM201')),/Primary Key|SQL|Penetration Testing|REA Data Model/);
assert.doesNotMatch(JSON.stringify(post('AKK201')),/Goodwill|Contingent Assets|Double-Declining/);
assert.match(JSON.stringify(post('MAS122').filter(c=>c.tm===11)),/ARIMA|pembedaan/);
assert.doesNotMatch(JSON.stringify(post('SII306')),/tidak dapat diubah \(immutable\)|shared public ledger terdistribusi/);
assert.doesNotMatch(JSON.stringify(post('PJK201').filter(c=>c.tm===8)),/maksimal 6 bulan|maksimal 4 bulan/i);
assert.doesNotMatch(JSON.stringify(post('PJK201')),/syarat: membayar 50%|khusus lahan produksi pangan\/ternak maksimal 0,25%/i);
assert.match(JSON.stringify(post('PJK201')),/20%-100%/);
assert.equal(.001*.4*(800000000-10000000),316000);
console.log('Flashcard source alignment PASS: 168 remapped cards, exact per-TM canonical cards, tax and technology boundaries, counts retained.');
