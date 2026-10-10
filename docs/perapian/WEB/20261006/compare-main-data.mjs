import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const out = path.dirname(fileURLToPath(import.meta.url));
const roots = [path.resolve('..', 'perapian-baseline'), process.cwd()];
const servers = [];
const codes = ['MNU108', 'MNK201', 'AKA201', 'AKK202', 'PJK301', 'SII306', 'AKS201', 'MNS301'];
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
try {
  const registries = [];
  for (const root of roots) {
    const server = await createServer({root, server:{middlewareMode:true,hmr:false},appType:'custom',logLevel:'silent'});
    servers.push(server);
    registries.push(await server.ssrLoadModule('/src/data/courses/courseRegistry.ts'));
  }
  const results = [];
  const titles = [];
  const { withTableTitles } = await servers[1].ssrLoadModule('/src/data/courses/tableTitles.ts');
  const walk = (blocks, prefix = 'blocks') => blocks.flatMap((b,i) => {
    const at = `${prefix}[${i}]`;
    return [{at,...b}, ...('blocks' in b ? walk(b.blocks,`${at}.blocks`) : []),
      ...(b.promptBlocks ? walk(b.promptBlocks,`${at}.promptBlocks`) : []),
      ...(b.kind === 'self-check' ? walk(b.answer,`${at}.answer`) : [])];
  });
  for (const code of codes) {
    const before = await registries[0].loadCourseContent(code);
    const after = await registries[1].loadCourseContent(code);
    assert.deepEqual(after, before, `${code}: every raw academic content object must match frozen main`);
    results.push({code,deepEqual:true,baselineSha256:sha(before),workingSha256:sha(after),readings:Object.keys(before.readings).length,reviews:Object.keys(before.reviews ?? {}).length});
    for (const [type, readings] of [['reading', after.readings],['review', after.reviews ?? {}]]) {
      for (const [key, reading] of Object.entries(readings)) {
        for (const b of walk(withTableTitles(reading).blocks).filter(b=>b.kind==='table')) {
          titles.push({code,type,key,tm:reading.tm,reading:reading.title,at:b.at,title:b.title,headers:b.headers,first:b.rows[0],caption:b.caption,report:b.reportHeader,align:b.align,rowRules:b.rowRules});
        }
      }
    }
  }
  const result = {pass:true,baselineMain:'639be11424eb9d6ba4621a3104d0c26f768f63c4',roots,courses:results,
    scope:'All raw course content, not only TM01–TM07; withTableTitles presentation preservation separately tested by scripts/test-table-titles.mjs.'};
  fs.writeFileSync(path.join(out,'academic-preservation.json'),JSON.stringify(result,null,2));
  fs.writeFileSync(path.join(out,'table-name-review-after.json'),JSON.stringify(titles,null,2));
  console.log(JSON.stringify(result,null,2));
} finally { for (const server of servers) await server.close(); }
