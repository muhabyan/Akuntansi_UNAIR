import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
export const hash=s=>createHash('sha256').update(s).digest('hex');
export const flatten=bs=>bs.flatMap(b=>[b,...flatten(b.blocks??[]),...flatten(b.answer??[])]);
export async function loadAsp(){
 const r=await build({stdin:{contents:["export * from './src/data/asp/aspData.ts';","export * from './src/data/quizzes/aks201.ts';","export * from './src/data/flashcards/aks201.ts';","export * from './src/data/banksoal/aks201.ts';","export {ALL_COURSES} from './src/data/courseData.ts';"].join('\n'),resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
 return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
}
export function catalogOutsideAsp(source){return source.replace(/\r\n/g,'\n').replace(/const AKK203_TM8_14 = materi\(\[[\s\S]*?\], 8\);/,'ASP_POST_CATALOG');}
if(process.argv.includes('--capture-baseline')){
 const m=await loadAsp(),modules={};
 for(let tm=1;tm<=8;tm++)modules[`src/data/asp/modules/tm${tm}.ts`]=hash(fs.readFileSync(`src/data/asp/modules/tm${tm}.ts`,'utf8').replace(/\r\n/g,'\n'));
 const allowed=new Set(['src/data/asp/aspData.ts',...Array.from({length:6},(_,i)=>`src/data/asp/modules/tm${i+9}.ts`),'src/data/quizzes/aks201.ts','src/data/flashcards/aks201.ts','src/data/banksoal/aks201.ts','src/data/courseData.ts','src/data/releaseNotes.ts']);
 const outside={};for(const entry of fs.readdirSync('src',{recursive:true}).filter(p=>/\.(ts|tsx|css)$/.test(p))){const f='src/'+entry.replaceAll('\\','/');if(!allowed.has(f))outside[f]=hash(fs.readFileSync(f,'utf8').replace(/\r\n/g,'\n'));}
 const baseline={base:'90e0467',modules,outside,utsQuiz:hash(JSON.stringify(m.AKS201_QUIZ_UTS)),utsBank:hash(JSON.stringify(m.AKS201_BANK_UTS)),utsCards:hash(JSON.stringify(m.AKS201_FC.filter(c=>c.phase==='pra-uts'))),utsReview:hash(JSON.stringify(m.AKS201_REVIEW_READINGS.uts)),oldPostCards:m.AKS201_FC.filter(c=>c.phase==='pra-uas'),catalogOutsideAsp:hash(catalogOutsideAsp(fs.readFileSync('src/data/courseData.ts','utf8'))),oldReleases:fs.readFileSync('src/data/releaseNotes.ts','utf8').replace(/\r\n/g,'\n').split('export const RELEASES: AppRelease[] = [')[1]};
 fs.writeFileSync('scripts/fixtures/akk203-pra-uas-baseline.json',JSON.stringify(baseline,null,2)+'\n');console.log('ASP baseline captured; '+Object.keys(outside).length+' unrelated source files locked.');
}
