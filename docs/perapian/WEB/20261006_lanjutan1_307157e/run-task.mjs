import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
const dir=path.dirname(fileURLToPath(import.meta.url));
fs.mkdirSync(path.join(dir,'logs'),{recursive:true});
const task=process.argv[2];
const tasks={
  'baseline-build':{cwd:'C:/cek/.worktrees/perapian-baseline',command:'npm.cmd run build'},
  'pr45-check':{cwd:'C:/cek/.worktrees/perapian-pr45',command:'npm.cmd run check'},
  'pr45-build':{cwd:'C:/cek/.worktrees/perapian-pr45',command:'npm.cmd run build'},
  'pr45-lint':{cwd:'C:/cek/.worktrees/perapian-pr45',command:'npm.cmd run lint'},
  'pr45-runtime':{cwd:'C:/cek/.worktrees/perapian-pr45',command:'npm.cmd run test:runtime'},
};
if(!tasks[task]) throw Error('Unknown task');
const attempt=process.argv[3]??'';
if(attempt&&!/^retry\d+$/.test(attempt)) throw Error('Invalid attempt suffix');
const name=attempt?`${task}-${attempt}`:task;
const file=path.join(dir,'logs',`${name}.log`);
if(fs.existsSync(file)) throw Error(`Refusing to overwrite ${file}`);
const log=fs.createWriteStream(file,{flags:'wx'});
const spec=tasks[task],startedAt=new Date().toISOString();
const child=spawn(spec.command,{cwd:spec.cwd,env:process.env,windowsHide:true,shell:true});
child.stdout.on('data',data=>{log.write(data);process.stdout.write(data)});
child.stderr.on('data',data=>{log.write(data);process.stderr.write(data)});
child.on('error',error=>{log.write(String(error));console.error(error)});
child.on('close',code=>{
  log.end();
  fs.writeFileSync(path.join(dir,'logs',`${name}.result.json`),JSON.stringify({task,attempt,...spec,startedAt,finishedAt:new Date().toISOString(),exitCode:code,rawLog:`logs/${name}.log`},null,2));
  process.exitCode=code??1;
});
