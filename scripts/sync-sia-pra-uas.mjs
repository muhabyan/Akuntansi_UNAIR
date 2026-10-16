// Synchronize only SIA's active audit packages. Course content is authored in the typed modules.
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
const result = await build({ stdin: { contents: `
export {SII306_READINGS} from './src/data/sia/siaReadings.ts';
export {SII306_QUIZ_UAS} from './src/data/quizzes/sii306.ts';
export {SII306_FC} from './src/data/flashcards/sii306.ts';
export {SII306_BANK_UAS} from './src/data/banksoal/sii306.ts';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent' });
const m = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const render = blocks => blocks.map(b => [b.title,b.text,b.note,b.question,b.prompt,b.caption,
  ...(b.items??[]),...(b.headers?[b.headers.join(' | ')]:[]),...(b.rows??[]).map(row=>row.join(' | ')),
  ...(b.lines??[]).map(line=>`${line.account}: debit ${line.debit??'–'}; credit ${line.credit??'–'}`),
  ...(b.transcript??[]),b.blocks?render(b.blocks):'',b.answer?render(b.answer):'',
].filter(Boolean).join('\n\n')).join('\n\n');
const stats=[];
const flatten=blocks=>blocks.flatMap(b=>[b,...(b.blocks?flatten(b.blocks):[]),...(b.answer?flatten(b.answer):[])]);
for (let tm=8;tm<=14;tm++) {
  const dir=`content-pipeline/SII306/TM${String(tm).padStart(2,'0')}/audit-20261012`;
  const reading=m.SII306_READINGS[tm],questions=m.SII306_QUIZ_UAS.filter(q=>q.tm===tm),flashcards=m.SII306_FC.filter(c=>c.tm===tm);
  const bank=m.SII306_BANK_UAS[tm-8];
  const json=JSON.stringify({code:'SII306',tm,reading,questions,flashcards,bank,scope:'Active package revised 2026-10-16 against RPS-SIA p.1; supersedes historical catalog mapping. See docs/sia-pra-uas-20261016.md.'},null,2)+'\n';
  const hash=createHash('sha256').update(json).digest('hex');
  fs.writeFileSync(`${dir}/04_canonical_spec.json`,json);
  fs.writeFileSync(`${dir}/04_canonical_spec.md`,`# SII306 TM${tm}: ${reading.title}\n\nActive revision: 2026-10-16. RPS-SIA p.1.\n\n${reading.ref}\n\nSHA256: ${hash}\n\nAudit directory retained for compatibility; the previous October 12 mapping is superseded. Source/coverage decisions: docs/sia-pra-uas-20261016.md.\n`);
  fs.writeFileSync(`${dir}/05_student_learning_version.md`,`# ${reading.title}\n\n${reading.intro}\n\n${render(reading.blocks)}\n\n## Latihan\n\n${questions.map(q=>q.q+'\n\n'+q.explanation).join('\n\n')}\n\n## Flashcard\n\n${flashcards.map(c=>c.front+'\n\n'+c.back).join('\n\n')}\n`);
  fs.writeFileSync(`${dir}/08_flashcard_alignment.json`,JSON.stringify(flashcards,null,2)+'\n');
  fs.writeFileSync(`${dir}/06_implementation_brief.md`,`Active RPS-aligned package SHA256 ${hash}. Typed module, quiz, flashcards and case must match JSON. Pre-UTS is independently preserved.\n`);
  fs.writeFileSync(`${dir}/00_status.md`,'Status: RPS-aligned revision implemented 2026-10-16. Technical and visual evidence: docs/sia-pra-uas-20261016.md. Not a claim of independent review or official exam prediction.\n');
  fs.writeFileSync(`${dir}/07_qa_manifest.md`,'Run node scripts/test-sia-pra-uas.mjs plus standard checks. Source mapping and verification results: docs/sia-pra-uas-20261016.md.\n');
  const flat=flatten(reading.blocks);stats.push({tm,figures:flat.filter(b=>b.kind==='figure').length,checks:flat.filter(b=>b.kind==='self-check').length,journals:flat.filter(b=>b.kind==='journal').length,words:render(reading.blocks).split(/\s+/).length});
}
fs.mkdirSync('content-pipeline/SII306/revision-20261016',{recursive:true});
fs.writeFileSync('content-pipeline/SII306/revision-20261016/coverage.json',JSON.stringify(stats,null,2)+'\n');
console.log(JSON.stringify(stats));
