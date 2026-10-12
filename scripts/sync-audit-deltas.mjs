import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';

const bundle=await build({stdin:{contents:"export {loadCourseContent} from './src/data/courses/courseRegistry.ts'; export {getQuizSets} from './src/data/quizzes/index.ts'; export {getFlashcards} from './src/data/flashcards/registry.ts';",resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent',plugins:[{name:'raw',setup(b){b.onResolve({filter:/\?raw$/},a=>({path:path.resolve(a.resolveDir,a.path.slice(0,-4)),namespace:'raw'}));b.onLoad({filter:/.*/,namespace:'raw'},a=>({contents:fs.readFileSync(a.path,'utf8'),loader:'text'}));}}]});
const m=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const prose=s=>s.replaceAll('—',':').replace(/bukan ([^.!?\n]{1,120}),? melainkan ([^.!?\n]+)/gi,'$2').replace(/tidak hanya ([^.!?\n]{1,120}),? tetapi juga /gi,'$1 dan ');
const render=blocks=>blocks.map(b=>[b.title??'',b.text??'',b.note??'',b.prompt??'',b.caption??'',b.question??'',
  ...(b.items??[]),...(b.headers?[b.headers.join(' | ')]:[]),...(b.rows??[]).map(r=>r.join(' | ')),
  ...(b.blocks?[render(b.blocks)]:[]),...(b.answer?[render(b.answer)]:[]),
].filter(Boolean).join('\n\n')).join('\n\n');
for(const code of ['SII306','MAS122']){
  const content=await m.loadCourseContent(code);
  for(let tm=8;tm<=14;tm++){
    const dir=`content-pipeline/${code}/TM${String(tm).padStart(2,'0')}/audit-20261012`;fs.mkdirSync(dir,{recursive:true});
    const r=content.readings[tm],cards=m.getFlashcards(code).filter(c=>c.phase==='pra-uas'&&c.tm===tm);
    const questions=m.getQuizSets(code).filter(s=>/uas/.test(s.id)).flatMap(s=>s.items).filter(q=>q.tm===tm);
    const json=JSON.stringify({code,tm,reading:r,questions,flashcards:cards,scope:'Snapshot audit pasca-UTS. Kebenaran sumber dan batas diperiksa terpisah dari kesamaan implementasi.'},null,2)+'\n';
    const hash=createHash('sha256').update(json).digest('hex');fs.writeFileSync(`${dir}/04_canonical_spec.json`,json);
    fs.writeFileSync(`${dir}/04_canonical_spec.md`,prose(`# ${code} TM${tm}: snapshot hasil audit\n\n04 JSON SHA256: ${hash}\n\nSumber terdaftar: ${r.ref}\n\nBatas verifikasi sumber ada pada docs/audit-2026-10-12/${code}.md. Snapshot JSON mempertahankan teks data historis; 05 menormalkan gaya penulisan untuk dibaca mahasiswa. Snapshot ini mengunci isi implementasi dan tidak menyatakan semua klaim sumber lengkap.\n`));
    fs.writeFileSync(`${dir}/05_student_learning_version.md`,prose(`# ${r.title}\n\n${r.intro}\n\n${render(r.blocks)}\n\n## Flashcard\n\n${cards.map(c=>`${c.front}\n\n${c.back}`).join('\n\n')}\n\n## Kuis TM terdaftar\n\n${questions.map(q=>`${q.q}\n\n${q.explanation??''}`).join('\n\n')}\n`));
    fs.writeFileSync(`${dir}/06_implementation_brief.md`,`Snapshot 04 JSON SHA256 ${hash}. Cocokkan reading, flashcards dan kuis TM yang mempunyai metadata. SVG, opsi serta kunci lengkap berada pada JSON. Pra-UTS tidak termasuk snapshot.\n`);
    fs.writeFileSync(`${dir}/07_qa_manifest.md`,'Sinkronisasi snapshot diperiksa dengan skrip sync-audit-deltas; batas sumber tetap pada laporan. Hasil teknis akhir ada di docs/audit-2026-10-12/verification.md.\n');
    fs.writeFileSync(`${dir}/00_status.md`,'Status: snapshot revisi terimplementasi. Sumber belum tersedia atau subtopik belum diverifikasi ditandai di laporan; tidak ada klaim kelengkapan total.\n');
  }
}
// Retain all older AKK202 packages and add audit status only to this revision directory.
for(let tm=9;tm<=15;tm++){
  const dir=`content-pipeline/AKK202/TM${String(tm).padStart(2,'0')}/audit-20261012`;
  fs.writeFileSync(`${dir}/00_status.md`,'Status: delta angka/visual buku terimplementasi; pemetaan seluruh standar nasional tetap terbatas sebagaimana laporan.\n');
  fs.writeFileSync(`${dir}/07_qa_manifest.md`,'Angka Evermaster, Roche dan Bao diperiksa terhadap halaman sumber. Semua hasil teknis akhir ada di docs/audit-2026-10-12/verification.md.\n');
}
console.log('SIA and Statistics snapshots synchronized; AKK202 delta status recorded without overwriting older packages.');
