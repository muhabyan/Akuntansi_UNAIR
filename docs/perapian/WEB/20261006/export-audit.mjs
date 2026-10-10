import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createServer } from 'vite';

const out = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(?:([A-Z]):)/, '$1:'));
const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'silent' });
const walk = (blocks, prefix = 'blocks') => blocks.flatMap((b, i) => {
  const at = `${prefix}[${i}]`;
  return [{ at, ...b }, ...('blocks' in b ? walk(b.blocks, `${at}.blocks`) : []),
    ...(b.promptBlocks ? walk(b.promptBlocks, `${at}.promptBlocks`) : []),
    ...(b.kind === 'self-check' ? walk(b.answer, `${at}.answer`) : [])];
});
const plain = s => s.replace(/<[^>]+>/g, ' ').replace(/[*`]/g, '').replace(/\s+/g, ' ').trim();
try {
  const { loadCourseContent } = await server.ssrLoadModule('/src/data/courses/courseRegistry.ts');
  const { withTableTitles } = await server.ssrLoadModule('/src/data/courses/tableTitles.ts');
  const codes = ['MNU108', 'MNK201', 'AKA201', 'AKK202', 'PJK301', 'SII306', 'AKS201', 'MNS301'];
  const all = {}, summary = [], names = [];
  fs.mkdirSync(`${out}/readings`, { recursive: true });
  for (const code of codes) {
    const content = await loadCourseContent(code); all[code] = content;
    for (let tm = 1; tm <= 7; tm++) {
      const reading = content.readings[tm], flat = walk(reading.blocks), titled = walk(withTableTitles(reading).blocks);
      fs.writeFileSync(`${out}/readings/${code}-TM0${tm}.json`, JSON.stringify(reading, null, 2));
      const prose = flat.filter(b => ['p','callout','h2','h3','section','ul','ol','formula','self-check'].includes(b.kind));
      const text = [`# ${code} TM0${tm}: ${reading.title}`, `REF: ${reading.ref || ''}`, `INTRO: ${reading.intro}`, `OBJECTIVES: ${reading.objectives.join(' | ')}`,
        ...flat.map(b => `${b.at} ${b.kind}: ${b.text || b.title || b.question || (b.items || []).join(' | ') || ''}${b.kind === 'table' ? `\nHEADERS: ${b.headers.join(' | ')}\nROWS: ${b.rows.map(r => r.join(' | ')).join('\n')}\nCAPTION: ${b.caption || ''}` : ''}${b.kind === 'figure' ? `\nALT: ${b.altText || ''}\nCAPTION: ${b.caption || ''}\nTRANSCRIPT: ${JSON.stringify(b.transcript || b.transcriptSections || [])}\nOVERVIEW: ${JSON.stringify(b.overview || b.mobileFlow || {})}` : ''}`)].join('\n\n');
      fs.writeFileSync(`${out}/readings/${code}-TM0${tm}.md`, text);
      const tables = flat.filter(b => b.kind === 'table'), named = titled.filter(b => b.kind === 'table');
      for (let i = 0; i < tables.length; i++) names.push({ code, tm, at: tables[i].at, title: named[i].title, headers: tables[i].headers, first: tables[i].rows[0], caption: tables[i].caption, report: tables[i].reportHeader });
      summary.push({ code, tm, title: reading.title, intro: reading.intro, ref: reading.ref, objectives: reading.objectives.length,
        words: prose.reduce((n,b) => n + plain(b.text || '').split(/\s+/).length,0), tables: tables.length,
        figures: flat.filter(b=>b.kind==='figure').map(b=>({at:b.at,title:b.title,caption:b.caption,alt:b.altText,svg:!!b.svg,mobile:!!(b.mobileFlow||b.mobileSvg||b.overview),sourceImages:b.sourceImages})),
        paragraphs: flat.filter(b=>b.kind==='p').map(b=>({at:b.at,words:plain(b.text).split(/\s+/).length,text:b.text})),
        headings: flat.filter(b=>['h2','h3','section','pendalaman'].includes(b.kind)).map(b=>({at:b.at,kind:b.kind,text:b.text||b.title,layer:b.layer})) });
    }
  }
  fs.writeFileSync(`${out}/runtime-all-eight.json`, JSON.stringify(all));
  fs.writeFileSync(`${out}/inventory.json`, JSON.stringify(summary, null, 2));
  fs.writeFileSync(`${out}/table-name-review.json`, JSON.stringify(names, null, 2));
  fs.writeFileSync(`${out}/baseline.json`, JSON.stringify({ main:'639be11424eb9d6ba4621a3104d0c26f768f63c4', pr45Original:'20557e0463779f3d730929822dd0a41a158850a8', logicalReadings:summary.length, preUtsTables:names.length, runtimeSha256:createHash('sha256').update(JSON.stringify(all)).digest('hex'), capturedAt:new Date().toISOString(), origin:'Vite SSR from isolated merged working tree; academic data to be compared to frozen main' },null,2));
  console.log(JSON.stringify({readings:summary.length,tables:names.length, figures:summary.reduce((n,r)=>n+r.figures.length,0),out}));
} finally { await server.close(); }
