import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import {createHash} from 'node:crypto';
import {materializeMnu108Figure} from './mnu108-pra-uas-visuals.mjs';

export function materializeReading(reading){
  const blocks=items=>items.map(b=>b.kind==='figure'&&b.spec?materializeMnu108Figure(b.spec):{
    ...b,...(b.blocks?{blocks:blocks(b.blocks)}:{}),...(b.answer?{answer:blocks(b.answer)}:{}),
  });
  return {...reading,blocks:blocks(reading.blocks)};
}
function student(blocks){
  return blocks.map(b=>{
    if(b.kind==='figure'&&b.spec)return '```visual\n'+JSON.stringify(b.spec,null,2)+'\n```';
    if(b.kind==='h2'||b.kind==='h3')return `${b.kind==='h2'?'##':'###'} ${b.text}`;
    if(b.kind==='table')return `### ${b.title}\n\n| ${b.headers.join(' | ')} |\n| ${b.headers.map(()=> '---').join(' | ')} |\n${b.rows.map(r=>'| '+r.join(' | ')+' |').join('\n')}\n\n${b.caption??''}`;
    if(b.kind==='ul'||b.kind==='ol')return b.items.map((item,i)=>`${b.kind==='ul'?'-':String(i+1)+'.'} ${item}`).join('\n');
    return [b.title??b.text??b.question??'',b.prompt??'',...(b.items??[]),...(b.headers?[b.headers.join(' | ')]:[]),...(b.rows??[]).map(r=>r.join(' | ')),b.caption??b.note??'',...(b.blocks?[student(b.blocks)]:[]),...(b.answer?[student(b.answer)]:[])].filter(Boolean).join('\n\n');
  }).join('\n\n');
}
function replaceArray(file,name,array){
  let source=fs.readFileSync(file,'utf8');const tree=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);let node;
  const walk=n=>{if(ts.isVariableDeclaration(n)&&n.name.getText(tree)===name)node=n.initializer;ts.forEachChild(n,walk);};walk(tree);
  if(!node)throw new Error(`Array ${name} not found`);
  source=source.slice(0,node.getStart(tree))+JSON.stringify(array,null,2)+source.slice(node.getEnd());fs.writeFileSync(file,source);
}
export async function buildMnu108Package({practice=true}={}){
  const packages=[];
  for(let tm=9;tm<=15;tm++){
    const dir=`content-pipeline/MNU108/TM${String(tm).padStart(2,'0')}`;
    const file=path.join(dir,'04_canonical_spec.json');if(!fs.existsSync(file))continue;
    const bytes=fs.readFileSync(file),spec=JSON.parse(bytes);packages.push(spec);
    fs.writeFileSync(`src/data/manajemen/modules/tm${tm}.ts`,`// Generated from MNU108 TM${tm} canonical 04. Edit the source package and run build-mnu108-pra-uas.\nimport type {Reading} from '../../../types';\nexport const TM${tm}_READING: Reading = ${JSON.stringify(materializeReading(spec.reading),null,2)};\n`);
    const sha=createHash('sha256').update(bytes).digest('hex');
    fs.writeFileSync(path.join(dir,'04_canonical_spec.md'),`# MNU108 TM${tm}: spesifikasi sumber\n\n04 JSON SHA256: ${sha}\n\nSumber: ${spec.reading.ref}\n\n${spec.audit.findings.join('\n\n')}\n\nInventaris exhibit dan batas berada pada JSON. Setiap model dibuat sebagai visual; tabel/daftar memakai tabel.\n`);
    fs.writeFileSync(path.join(dir,'05_student_learning_version.md'),`# ${spec.reading.title}\n\n${spec.reading.intro}\n\n${student(spec.reading.blocks)}\n\n## Kuis sumber\n\n${spec.quiz.map((q,i)=>`${i+1}. ${q.q}\n\n${q.options.map((o,j)=>`   ${String.fromCharCode(65+j)}. ${o}`).join('\n')}\n\nKunci: ${String.fromCharCode(65+q.answer)}. ${q.explanation}`).join('\n\n')}\n\n## Flashcards\n\n${spec.cards.map(c=>`### ${c.front}\n\n${c.back}`).join('\n\n')}\n`);
    fs.writeFileSync(path.join(dir,'06_implementation_brief.md'),`# MNU108 TM${tm}: implementasi\n\nBangun dari 04 JSON SHA256 ${sha} dengan build-mnu108-pra-uas.mjs. Pertahankan pra-UTS dan identitas kartu yang tidak berubah makna.\n\nVisual, sumber dan rancangan mobile:\n${JSON.stringify(spec.visualInventory,null,2)}\n\n## Lampiran A: aktivitas sumber tambahan\n${spec.audit.appendix.join('\n\n')}\n`);
    fs.writeFileSync(path.join(dir,'07_qa_manifest.md'),`# MNU108 TM${tm}: QA\n\nPeriksa sumber asli, rujukan, asumsi, makna diagram serta hitungan independen. Tes kesamaan kanonik tidak menggantikan audit isi. Target TM: ${spec.quiz.length} kuis, ${spec.cards.length} kartu, ${spec.bank.length} kasus. Cek ponsel 375 px, desktop, tema terang/gelap, pembukaan jawaban dan penilaian. Hasil akhir dicatat pada laporan audit.\n`);
    fs.writeFileSync(path.join(dir,'00_status.md'),'Status: revisi sumber terimplementasi; verifikasi akhir aplikasi mengikuti laporan batch.\n');
  }
  if(practice){
    if(packages.length!==7)throw new Error('All seven canonical packages must exist before replacing UAS practice.');
    replaceArray('src/data/quizzes/mnm101.ts','MNM101_QUIZ_UAS',packages.flatMap(p=>p.quiz));
    replaceArray('src/data/banksoal/mnm101.ts','MNM101_BANK_UAS',packages.flatMap(p=>p.bank));
    const {build}=await import('esbuild');
    const bundle=await build({entryPoints:['src/data/flashcards/mnm101.ts'],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
    const {MNM101_FC:cards}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
    // Replace only post-UTS literals. The original pre-UTS source bytes and SRS identities survive.
    const file='src/data/flashcards/mnm101.ts';let source=fs.readFileSync(file,'utf8');
    const tree=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);let array;
    const walk=n=>{if(ts.isVariableDeclaration(n)&&n.name.getText(tree)==='MNM101_FC')array=n.initializer;ts.forEachChild(n,walk);};walk(tree);
    const objects=array.elements.filter(ts.isObjectLiteralExpression);
    const post=objects.filter((_,i)=>cards[i].phase==='pra-uas');
    const from=post[0].getStart(tree),to=post.at(-1).getEnd();
    source=source.slice(0,from)+packages.flatMap(p=>p.cards).map(c=>JSON.stringify(c,null,2)).join(',\n')+source.slice(to);fs.writeFileSync(file,source);
    const review=JSON.parse(fs.readFileSync('content-pipeline/MNU108/review_uas.json','utf8'));
    fs.writeFileSync('src/data/manajemen/modules/reviewUas.ts',`// Generated from MNU108 review_uas.json.\nimport type {Reading} from '../../../types';\nexport const MNU108_UAS_REVIEW: Reading = ${JSON.stringify(materializeReading(review),null,2)};\n`);
  }
  return packages;
}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve('scripts/build-mnu108-pra-uas.mjs')){
  const packages=await buildMnu108Package({practice:!process.argv.includes('--readings-only')});
  console.log(`MNU108: ${packages.length} canonical readings built${process.argv.includes('--readings-only')?'':' with UAS practice'}.`);
}
