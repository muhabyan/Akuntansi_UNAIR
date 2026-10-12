import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
const bundle=await build({stdin:{contents:[
 "export {SII306_READINGS} from './src/data/sia/siaReadings.ts';",
 "export {SII306_QUIZ_UAS} from './src/data/quizzes/sii306.ts';",
 "export {ARIMA_AUDIT_BLOCKS} from './src/data/statistik/arimaAudit.ts';",
].join('\n'),resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,platform:'node',format:'esm',logLevel:'silent'});
const m=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
assert.equal(m.SII306_QUIZ_UAS.length,35);
for(const tm of [8,9,10,11,12,13,14]){
  assert.match(m.SII306_READINGS[tm].ref,/PDF/);
  const snapshot=JSON.parse(fs.readFileSync(`content-pipeline/SII306/TM${String(tm).padStart(2,'0')}/audit-20261012/04_canonical_spec.json`,'utf8'));
  assert.deepEqual(snapshot.reading,m.SII306_READINGS[tm]);
  assert.deepEqual(snapshot.questions,m.SII306_QUIZ_UAS.filter(q=>q.tm===tm));
}
assert.match(m.SII306_READINGS[8].ref,/Ch\. 11/);assert.match(m.SII306_READINGS[9].ref,/Ch\. 12/);assert.match(m.SII306_READINGS[11].ref,/Ch\. 2 dan 3/);
assert.doesNotMatch(JSON.stringify(m.SII306_READINGS[13]),/Nol Rekonsiliasi|Auditor Otomatis|tidak ada perselisihan saldo/);
const q=m.SII306_QUIZ_UAS.filter(q=>q.tm===13);
assert.equal(q.length,5);q.forEach(q=>assert.match(q.q+q.explanation,/Rujukan:|Grigg \(2005\)/));
assert.ok(q.every(q=>q.options.length===4&&new Set(q.options).size===4));
assert.ok(q.every(q=>Math.max(...q.options.map(s=>s.length))/Math.min(...q.options.map(s=>s.length))<2));
for(const i of [11,19,21,24,30,31,32,33,34]){
  const item=m.SII306_QUIZ_UAS[i];
  assert.match(item.explanation,/Rujukan:/);
  assert.equal(item.options.length,4);
  assert.ok(Math.max(...item.options.map(s=>s.length))/Math.min(...item.options.map(s=>s.length))<2);
}
assert.match(m.SII306_QUIZ_UAS[34].explanation,/PDF 408-409/);
assert.match(JSON.stringify(m.SII306_READINGS[13]),/IAS 2 tidak berlaku, IAS 38/);
assert.match(JSON.stringify(m.SII306_READINGS[13]),/PSAK 202.*PSAK 238/);
assert.ok(m.ARIMA_AUDIT_BLOCKS.some(b=>b.kind==='formula'&&b.text.includes('y_t-y_{t-1}')));
// Lock the main source content while allowing Git's Windows/Linux checkout EOL conversion.
const files=JSON.parse(fs.readFileSync('scripts/fixtures/audit-20261012-protected.json','utf8'));
for(const [file,sha] of Object.entries(files))assert.equal(createHash('sha256').update(fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n')).digest('hex'),sha,`User-protected ${file}`);
console.log('Source audit PASS: SIA source mapping, bounded claims, plausible options and citations; ARIMA differencing; every user-protected file unchanged.');
