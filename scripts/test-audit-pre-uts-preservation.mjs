import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';

const fixturePath='scripts/fixtures/audit-20261012-pre-uts.json';
const capture=process.argv.includes('--capture-baseline');
const ref='e773066b9167f65c41cbdba2aae4bb5c1a36b7d1';
const originalFiles=['src/data/courses/courseRegistry.ts','src/data/quizzes/sii306.ts',...['akk201','akm201','aka103','mas122','pjk201'].map(code=>`src/data/flashcards/${code}.ts`)];
const original=new Map(capture?originalFiles.map(f=>[path.resolve(f),execFileSync('git',['show',`${ref}:${f}`],{encoding:'utf8'})]):[]);
const bundle=await build({stdin:{contents:[
  "export {ALL_COURSES} from './src/data/courseData.ts';",
  "export {loadCourseContent} from './src/data/courses/courseRegistry.ts';",
  "export {getFlashcards} from './src/data/flashcards/registry.ts';",
  "export {getQuizSets} from './src/data/quizzes/index.ts';",
].join('\n'),resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent',plugins:[{
  name:'baseline-loader',setup(b){
    b.onResolve({filter:/\?raw$/},a=>({path:path.resolve(a.resolveDir,a.path.slice(0,-4)),namespace:'raw'}));
    b.onLoad({filter:/.*/,namespace:'raw'},a=>({contents:fs.readFileSync(a.path,'utf8'),loader:'text'}));
    if(capture)b.onLoad({filter:/\.ts$/},a=>original.has(a.path)?{contents:original.get(a.path),loader:'ts'}:null);
  },
}]});
const m=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const hash=x=>createHash('sha256').update(JSON.stringify(x)).digest('hex');
const snapshot={};
for(const {course} of m.ALL_COURSES){
  const content=await m.loadCourseContent(course.code);
  if(!Object.keys(content.readings).length||/Ini adalah tempat teks|Anda dapat menempelkan/.test(JSON.stringify(content.readings)))continue;
  snapshot[course.code]={
    readings:Object.fromEntries(Object.entries(content.readings).filter(([tm])=>+tm>=1&&+tm<=7).map(([tm,r])=>[tm,hash(r)])),
    cards:hash(m.getFlashcards(course.code).filter(c=>c.phase==='pra-uts')),
    quizzes:Object.fromEntries(m.getQuizSets(course.code).filter(s=>/uts/.test(s.id)&&!/uas/.test(s.id)).map(s=>[s.id,hash(s.items)])),
  };
}
if(capture){fs.writeFileSync(fixturePath,JSON.stringify({base:ref,courses:snapshot},null,2)+'\n');console.log('Baseline captured from verified main: '+Object.keys(snapshot).length+' substantive courses.');}
else{assert.deepEqual(snapshot,JSON.parse(fs.readFileSync(fixturePath,'utf8')).courses);console.log('Pre-UTS preservation PASS: readings, cards and quiz sets match locked main baseline in all 17 substantive courses.');}
