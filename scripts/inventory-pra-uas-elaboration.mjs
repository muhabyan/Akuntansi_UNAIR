// Navigation aid for the editorial queue. Counts do not establish source completeness.
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const codes = ['AKA201', 'AKK202', 'AKK203', 'PJK301', 'MNK102', 'MNU108', 'MNU307'];
const bundle = await build({
  entryPoints: ['src/data/courses/courseRegistry.ts'], bundle: true, write: false,
  format: 'esm', platform: 'node', logLevel: 'silent', plugins: [{
    name: 'reading-source-text', setup(b) {
      b.onResolve({ filter: /\?raw$/ }, a => ({ path: path.resolve(a.resolveDir, a.path.slice(0, -4)), namespace: 'raw' }));
      b.onLoad({ filter: /.*/, namespace: 'raw' }, a => ({ contents: fs.readFileSync(a.path, 'utf8'), loader: 'text' }));
    },
  }],
});
const { loadCourseContent } = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const walk = blocks => blocks.flatMap(b => [b, ...walk(b.blocks ?? []), ...walk(b.answer ?? [])]);
const courses = [];
for (const code of codes) {
  const { readings } = await loadCourseContent(code);
  if (process.argv.includes(`--snapshot=${code}`)) fs.writeFileSync(`../tmp/pra-uas-elaboration/${code.toLowerCase()}-served-before.json`, JSON.stringify(readings, null, 2));
  const meetings = Object.entries(readings).filter(([key]) => Number(key) >= (code === 'AKK203' ? 8 : 9) && Number(key) <= 15).map(([key, reading]) => {
    const all = walk(reading.blocks);
    return {
      tm: Number(key), title: reading.title, sourceIntro: reading.intro,
      sections: all.filter(b => b.kind === 'section' || b.kind === 'h2').map(b => b.title ?? b.text),
      denseTables: all.filter(b => b.kind === 'table' && b.rows.length >= 5).map(b => ({ title: b.title, rows: b.rows.length, columns: b.headers.length })),
      closedDepth: all.filter(b => b.kind === 'pendalaman').length,
      status: ['AKA201', 'AKK202', 'AKK203', 'MNK102'].includes(code) ? 'revision-written; see progress checkpoint for validation and source limits' : 'awaiting source and depth review',
    };
  });
  courses.push({ code, meetings });
  console.log(`${code}: ${meetings.length} active readings; TM ${meetings.map(m => m.tm).join(', ')}`);
}
fs.writeFileSync('docs/pra-uas-elaboration-inventory.json', `${JSON.stringify({ note: 'Inventory only; not a completeness audit. SIA excluded by user scope.', courses }, null, 2)}\n`);
