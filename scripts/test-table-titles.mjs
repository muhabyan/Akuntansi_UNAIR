import assert from 'node:assert/strict';
import React, { act } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'silent' });
try {
  const [{ withTableTitles, keepTableColumns }, { loadCourseContent }, { default: Card }, { SharedFrameContext }, { LayeredContext, InsideBoxContext }] = await Promise.all([
    server.ssrLoadModule('/src/data/courses/tableTitles.ts'),
    server.ssrLoadModule('/src/data/courses/courseRegistry.ts'),
    server.ssrLoadModule('/src/components/course/CourseBlockCard.tsx'),
    server.ssrLoadModule('/src/components/course/readingFrame.ts'),
    server.ssrLoadModule('/src/components/course/layeredContext.ts'),
  ]);
  const flatten = (blocks) => blocks.flatMap((block) => [block,
    ...('blocks' in block ? flatten(block.blocks) : []),
    ...(block.kind === 'solution-reveal' ? flatten(block.promptBlocks ?? []) : []),
    ...(block.kind === 'self-check' ? flatten(block.answer) : []),
  ]);
  const removeGeneratedTitles = (original, displayed) => {
    original.forEach((block, index) => {
      const copy = displayed[index];
      if ((block.kind === 'table' || block.kind === 'journal') && !Object.hasOwn(block, 'title')) delete copy.title;
      if ('blocks' in block) removeGeneratedTitles(block.blocks, copy.blocks);
      if (block.kind === 'solution-reveal' && block.promptBlocks) removeGeneratedTitles(block.promptBlocks, copy.promptBlocks);
      if (block.kind === 'self-check') removeGeneratedTitles(block.answer, copy.answer);
    });
  };
  const sample = {
    tm: 1, title: 'Audit laporan keuangan', intro: '', objectives: [], blocks: [
      { kind: 'h2', text: '1. Risiko informasi' },
      { kind: 'table', headers: ['Penyebab', 'Dampak'], rows: [['Jarak', 'Sulit diverifikasi']], caption: 'Sumber: Arens, p. 7.' },
      { kind: 'table', headers: ['Cara', 'Biaya'], rows: [['Audit', 'Honorarium']] },
      { kind: 'pendalaman', title: 'Kasus perusahaan A', blocks: [
        { kind: 'table', title: 'Hasil evaluasi pengendalian', headers: ['Area', 'Temuan'], rows: [['Kas', 'Selisih']] },
      ] },
      { kind: 'self-check', question: 'Mengapa audit diperlukan?', answer: [
        { kind: 'h3', text: 'Kesalahpahaman umum' },
        { kind: 'table', headers: ['Keliru', 'Koreksi'], rows: [['Pasti', 'Memadai']] },
      ] },
      { kind: 'h2', text: '2. Pembagian kerja' },
      { kind: 'p', text: '**Exhibit 7.1: Bagan organisasi pabrik** [hal. 229]' },
      { kind: 'p', text: 'Empat kepala departemen melapor kepada direktur.' },
      { kind: 'table', headers: ['Departemen', 'Bawahan'], rows: [['Produksi', 'Supervisor']] },
    ],
  };
  const snapshot = structuredClone(sample);
  const named = withTableTitles(sample);
  assert.deepEqual(sample, snapshot, 'naming tables must not mutate academic source data');
  const tables = flatten(named.blocks).filter((block) => block.kind === 'table');
  assert.match(tables[0].title, /Risiko informasi.*Penyebab/);
  assert.match(tables[1].title, /Risiko informasi.*Cara/);
  assert.equal(tables[2].title, 'Hasil evaluasi pengendalian', 'authored names win');
  assert.match(tables[3].title, /Risiko informasi.*Kesalahpahaman/);
  assert.equal(tables[4].title, 'Exhibit 7.1: Bagan organisasi pabrik', 'an explanatory sentence does not erase a table lead-in');
  assert.equal(tables[0].caption, snapshot.blocks[1].caption, 'source notes stay intact');

  const counts = {};
  // Manjik is a semester-5 course read by the semester-3 audience. Catalog groups do not define this scope.
  for (const code of ['MNU108', 'MNK201', 'AKA201', 'AKK202', 'PJK301', 'SII306', 'AKS201', 'MNS301']) {
    const content = await loadCourseContent(code);
    let count = 0;
    for (const reading of [...Object.values(content.readings), ...Object.values(content.reviews)]) {
      if (!reading) continue;
      const before = JSON.stringify(reading);
      const presented = withTableTitles(reading);
      assert.equal(JSON.stringify(reading), before, `${code}: presentation leaves the source intact`);
      const restored = structuredClone(presented);
      removeGeneratedTitles(reading.blocks, restored.blocks);
      assert.deepEqual(restored, reading, `${code}: only table and journal titles may change, including all reading text and table metadata`);
      const originalTables = flatten(reading.blocks).filter((block) => block.kind === 'table');
      const displayedTables = flatten(presented.blocks).filter((block) => block.kind === 'table');
      assert.equal(displayedTables.length, originalTables.length, `${code}: no table disappears`);
      displayedTables.forEach((table, index) => {
        count++;
        assert.ok(table.title.trim() && !/^Tabel Materi$/i.test(table.title), `${code}: meaningful table title`);
        assert.deepEqual(table.headers, originalTables[index].headers);
        assert.equal(table.caption, originalTables[index].caption);
        assert.deepEqual(table.rows, originalTables[index].rows);
      });
    }
    counts[code] = count;
  }

  const management = await loadCourseContent('MNU108');
  const foundation = withTableTitles(management.readings[1]);
  assert.equal(foundation.blocks[96].title, 'Sisi positif dan negatif birokrasi Weber', 'a preceding exhibit label must not name an unrelated pros/cons table');
  assert.ok(foundation.blocks[43].title.includes('conceptual'), 'the title must not omit the third skill when describing the skill comparison');
  assert.notEqual(foundation.blocks[41].title, foundation.blocks[43].title, 'skill definitions and skill distribution have separate purposes');
  assert.equal(foundation.blocks[173].title, 'Pertanyaan kritis manajemen dan bagian bacaan yang terkait', 'an adaptation/source label cannot substitute for the discussion table subject');
  assert.equal(foundation.blocks[168].title, 'Komponen kerangka manajemen dan halaman rujukannya', 'a component index must not promise definitions it does not contain');
  const environment = withTableTitles(management.readings[2]);
  assert.equal(environment.blocks[33].title, 'Lingkungan eksternal Costco: ringkasan sektor dan contohnya', 'a long intervening Costco paragraph must not leave the prior labor-market label on its table');
  assert.equal(environment.blocks[173].title, 'Pertanyaan kritis lingkungan dan budaya beserta bagian rujukan', 'discussion attribution is not the subject of the environment questions');
  assert.notEqual(environment.blocks[84].title, environment.blocks[85].title, 'the culture matrix and its value/example explanation need separate titles');
  assert.notEqual(environment.blocks[95].title, environment.blocks[96].title, 'the performance matrix and its consequences/examples need separate titles');
  const organizationQuestions = withTableTitles(management.readings[7]).blocks[244];
  assert.equal(organizationQuestions.title, 'Pertanyaan kritis desain struktur organisasi dan bagian rujukannya', 'a discussion-source attribution must not replace the subject of the structure questions');
  const managementTables = flatten(withTableTitles(management.readings[7]).blocks).filter((block) => block.kind === 'table');
  assert.ok(managementTables.some((table) => table.title === 'Gambaran struktur awal (dalam bentuk tabel hubungan lapor)'), 'use the existing introduction instead of repeating the complete Q1');
  assert.ok(managementTables.some((table) => table.title === 'Exhibit 7.2: Struktur lama (tall)'), 'name the old organization chart');
  assert.ok(managementTables.some((table) => table.title === 'Exhibit 7.2: Struktur baru (flat)'), 'distinguish the new organization chart');

  const finance = await loadCourseContent('MNK201');
  assert.equal(withTableTitles(finance.readings[3]).blocks[4].title, 'Arti simbol pada rumus TVM');
  const projectTables = flatten(withTableTitles(finance.readings[6]).blocks).filter(b => b.kind === 'table');
  assert.ok(projectTables.some(b => b.title === 'Arus kas Project X dan Project Y'));
  const methods = projectTables.find(b => b.title === 'Hasil lima metode evaluasi Project X dan Project Y pada WACC 12%');
  assert.equal(methods.rows.length, 5, 'the summary covers five methods, not just discounted payback');
  assert.equal(methods.rows[0][0], 'Net Present Value (NPV)');
  assert.equal(keepTableColumns(methods), true, 'project results remain comparable on phones');
  const stale = structuredClone(finance.readings[3]);
  stale.blocks[4].headers[0] = 'Pengganti simbol';
  assert.notEqual(withTableTitles(stale).blocks[4].title, 'Arti simbol pada rumus TVM', 'a stale override cannot name a structurally changed table');

  const strategy = await loadCourseContent('MNS301');
  const governance = withTableTitles(strategy.readings[5]).blocks[6].blocks;
  assert.equal(governance[3].title, 'Peran shareholders, management, dan board');
  assert.equal(governance[6].title, 'Agency problem dan risk sharing');
  assert.equal(governance[17].title, 'Principal–agent dan principal–principal conflicts');
  const leadership = withTableTitles(strategy.readings[6]).blocks[5].blocks[9];
  assert.equal(leadership.title, 'Enam basis kekuasaan pemimpin');
  assert.equal(leadership.rows.length, 6, 'information power is preserved');

  const tax = await loadCourseContent('PJK301');
  const schedule = withTableTitles(tax.readings[4]).blocks[25].blocks[0];
  assert.match(schedule.title, /2022 s\.d\. 2026/, 'do not truncate the period at an abbreviation');
  const asp = await loadCourseContent('AKS201');
  assert.equal(withTableTitles(asp.readings[4]).blocks[16].blocks[1].title, 'Fungsi anggaran dan penekanannya', 'name an answer table by what it contains');
  const aspReport = withTableTitles(asp.readings[7]).blocks[24].blocks[5];
  assert.equal(aspReport.title, aspReport.reportHeader.title, 'report headers remain authoritative');
  assert.equal(keepTableColumns(aspReport), true);
  const comparison = { kind: 'table', headers: ['Aspek', 'Red ocean strategy', 'Blue ocean strategy', 'Sumber'], rows: [['Pasar', 'Ada', 'Baru', 'Buku']] };
  assert.equal(keepTableColumns(comparison), true, 'a source column does not break a side-by-side comparison');
  assert.equal(keepTableColumns(tables[0]), false, 'prose tables may use phone cards');
  const ambiguous = withTableTitles({ tm: 0, title: 'Tinjauan audit', intro: '', objectives: [], blocks: [
    { kind: 'h2', text: 'Bukti audit' },
    { kind: 'p', text: 'Sumber: Arens, p. 7:' },
    { kind: 'table', headers: ['Bukti', 'Arti'], rows: [['Fisik', 'Pengamatan']] },
    { kind: 'solution-reveal', title: 'L1. Risiko audit', blocks: [
      { kind: 'h3', text: 'Jawaban' }, { kind: 'table', headers: ['Risiko', 'Dampak'], rows: [['Deteksi', 'Tidak ditemukan']] },
    ] },
  ] });
  assert.equal(ambiguous.blocks[2].title, 'Bukti audit', 'source strings cannot become a table title');
  assert.equal(ambiguous.blocks[3].blocks[1].title, 'L1. Risiko audit: Jawaban', 'generic nested headings retain their case context');

  // Check both layouts, including a table inside an expanded disclosure.
  const table = tables[0];
  const html = renderToStaticMarkup(React.createElement(SharedFrameContext.Provider, { value: true },
    React.createElement(LayeredContext.Provider, { value: true },
      React.createElement(InsideBoxContext.Provider, { value: true }, React.createElement(Card, { block: table })))));
  const dom = new JSDOM(html);
  assert.equal(dom.window.document.querySelector('caption').textContent, table.title);
  assert.equal(dom.window.document.querySelectorAll('.course-table-title').length, 2, 'desktop and mobile both show a title inside disclosures');
  assert.ok(dom.window.document.querySelector('.lg\\:hidden').textContent.includes(table.title));
  const amountHtml = renderToStaticMarkup(React.createElement(SharedFrameContext.Provider, { value: true }, React.createElement(Card, { block: methods })));
  const amountDom = new JSDOM(amountHtml);
  assert.equal(amountDom.window.document.querySelectorAll('.course-table-title').length, 1, 'comparable numbers use one visible title and one table');
  assert.ok(amountDom.window.document.querySelector('table').className.includes('min-w-[520px]'));
  const reportHtml = renderToStaticMarkup(React.createElement(Card, { block: aspReport }));
  const reportDom = new JSDOM(reportHtml);
  assert.equal(reportDom.window.document.querySelectorAll('.course-table-title').length, 0, 'a report has its own single title hierarchy');
  assert.ok(reportDom.window.document.querySelector('header').textContent.includes(aspReport.reportHeader.entity));
  assert.ok(reportDom.window.document.querySelector('header').textContent.includes(aspReport.reportHeader.period));

  const { window } = new JSDOM('<div id="root"></div>', { url: 'http://localhost' });
  const document = window.document;
  Object.assign(globalThis, { window, document: window.document, HTMLElement: window.HTMLElement, IS_REACT_ACT_ENVIRONMENT: true });
  const root = createRoot(document.getElementById('root'));
  const guidance = named.blocks.find((block) => block.kind === 'pendalaman');
  await act(async () => root.render(React.createElement(Card, { block: guidance })));
  const button = document.querySelector('button');
  assert.equal(button.getAttribute('aria-expanded'), 'false');
  assert.equal(document.querySelector('table'), null, 'tables inside a closed disclosure remain hidden');
  await act(async () => button.click());
  assert.equal(button.getAttribute('aria-expanded'), 'true');
  assert.ok(document.querySelector('table'), 'opening the disclosure exposes the titled table');
  assert.ok(document.querySelector('.course-table-title').textContent.includes('Hasil evaluasi pengendalian'));
  await act(async () => root.unmount());
  console.log(JSON.stringify({ pass: true, tableCounts: counts, checks: 'context, preservation, desktop/mobile titles, disclosure interaction' }));
} finally {
  await server.close();
}
