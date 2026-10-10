import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const git=(...args)=>{
  const r=spawnSync('git',args,{encoding:'utf8',windowsHide:true});
  if(r.status!==0) throw Error(r.stderr||`git ${args.join(' ')} failed`);
  return r.stdout;
};
const state={capturedAt:new Date().toISOString(),worktree:process.cwd(),localBranch:git('branch','--show-current').trim(),
  localHead:git('rev-parse','HEAD').trim(),mergeCommit:'54b92d57e61e660b758f32556a69c4c1a32272cd',
  main:'639be11424eb9d6ba4621a3104d0c26f768f63c4',remotePRHead:'20557e0463779f3d730929822dd0a41a158850a8',
  pushed:false,prMerged:false,readyForReview:false,reason:'Website QA, source/semantic audit and npm run check still incomplete due browser setting denial.'};
fs.writeFileSync(path.join(dir,'local-state.json'),JSON.stringify(state,null,2));
fs.writeFileSync(path.join(dir,'logs','diff-vs-main.patch'),git('diff','origin/main','HEAD','--'));
fs.writeFileSync(path.join(dir,'logs','local-history.log'),git('log','-5','--format=fuller'));
const names=git('diff','--name-only','origin/main','HEAD').trim().split('\n').filter(Boolean);
const academic=names.filter(n=>n.startsWith('src/data/')&&!n.startsWith('src/data/courses/tableTitle'));
if(academic.length) throw Error(`Unexpected academic data diff: ${academic.join(', ')}`);
fs.writeFileSync(path.join(dir,'logs','academic-diff-check.json'),JSON.stringify({pass:true,academicFilesChanged:academic,allChangedFiles:names},null,2));
const read=name=>JSON.parse(fs.readFileSync(path.join(dir,name),'utf8'));
const before=read('table-name-review.json'),after=read('table-name-review-after.json');
const afterMap=new Map(after.filter(t=>t.type==='reading'&&t.tm<=7).map(t=>[`${t.code}:${t.tm}:${t.at}`,t]));
const delta=before.flatMap(b=>{
  const a=afterMap.get(`${b.code}:${b.tm}:${b.at}`);
  return a&&a.title!==b.title?[{code:b.code,tm:b.tm,at:b.at,before:b.title,after:a.title,headers:a.headers,first:a.first}]:[];
});
fs.writeFileSync(path.join(dir,'table-title-before-after.json'),JSON.stringify({scope:'929 preUTS tables; before old PR45 inference, after local WIP',changed:delta.length,entries:delta},null,2));
const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const walk=folder=>fs.readdirSync(folder,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(folder,e.name)):[path.join(folder,e.name)]);
const files=walk(dir).filter(p=>!p.endsWith('evidence-manifest.json')).map(p=>({path:path.relative(dir,p).replace(/\\/g,'/'),bytes:fs.statSync(p).size,sha256:hash(p),kind:p.includes(`${path.sep}logs${path.sep}`)?'Node/JSDOM/git log':p.includes(`${path.sep}readings${path.sep}`)?'runtime extraction':p.includes(`${path.sep}packages${path.sep}`)?'local archive extraction, source authority unverified':'report/code/metadata'}));
const manifest={...state,files,sourceFileHashManifest:'source-file-manifest.json',verification:'verification-status.json',
  uiEvidence:{websiteViewport:[],cropInspection:[],elementCapture:[],standaloneSVG:[],previewQA:[],localBuildQA:[]},
  provenance:{baseline:'frozen main worktree',runtime:'Vite SSR data export, not browser screenshots',tests:'actual Node/JSDOM logs; no layout/browser claims',sourceManifest:'hash provenance, not source-page verification',preview:'old remote PR45 Vercel URL only; not inspected this session'},
  warning:'No screenshots in package. This bundle cannot prove UI accessibility, diagram readability, or complete 56-TM audit.'};
fs.writeFileSync(path.join(dir,'evidence-manifest.json'),JSON.stringify(manifest,null,2));
console.log(JSON.stringify({localHead:state.localHead,changedFiles:names.length,preUtsTitleChanges:delta.length,evidenceFiles:files.length,websiteScreenshots:0}));
