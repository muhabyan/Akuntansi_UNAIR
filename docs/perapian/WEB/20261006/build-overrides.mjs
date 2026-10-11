import fs from 'node:fs';
import { overrides } from './reviewed-overrides.mjs';
const root = 'docs/perapian/WEB/20261006';
const rows = [];
const get = (r,p) => p.split('.').reduce((o,s) => { const m=s.match(/(\w+)\[(\d+)\]/); return m ? o[m[1]][+m[2]] : o[s]; }, r);
for (const [code,tms] of Object.entries(overrides)) for (const [tm,map] of Object.entries(tms)) {
  const reading = JSON.parse(fs.readFileSync(`${root}/readings/${code}-TM0${tm}.json`, 'utf8'));
  for (const [at,title] of Object.entries(map)) {
    const block = get(reading,at);
    if (block.kind !== 'table' || block.title || block.reportHeader) throw new Error(`Unexpected override target ${code} ${tm} ${at}`);
    rows.push({code,tm:+tm,reading:reading.title,at,headers:block.headers,first:block.rows[0]?.[0],rows:block.rows.length,title});
  }
}
fs.writeFileSync(`${root}/reviewed-override-evidence.json`, JSON.stringify(rows,null,2));
fs.writeFileSync('src/data/courses/tableTitleOverrides.ts', `import type { ContentBlock, Reading } from '../../types';\n\n// Reviewed against the table's columns and rows. Never override an authored name/report header.\n// The structural signature prevents a changed reading from receiving a stale title.\nconst overrides = ${JSON.stringify(rows.map(({code: _code,...r})=>r),null,2)};\n\nexport function reviewedTableTitle(reading: Reading, at: string, block: Extract<ContentBlock, { kind: 'table' }>): string | undefined {\n  return overrides.find(item => item.tm === reading.tm && item.reading === reading.title && item.at === at\n    && item.rows === block.rows.length && item.first === block.rows[0]?.[0]\n    && JSON.stringify(item.headers) === JSON.stringify(block.headers))?.title;\n}\n`);
console.log(`${rows.length} individually reviewed overrides`);
