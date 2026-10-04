import assert from 'node:assert/strict';
import React, { act } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'silent' });
try {
  const [{ withTableTitles }, { loadCourseContent }, { SEMESTERS }, { default: Card }, { SharedFrameContext }, { LayeredContext, InsideBoxContext }] = await Promise.all([
    server.ssrLoadModule('/src/data/courses/tableTitles.ts'),
    server.ssrLoadModule('/src/data/courses/courseRegistry.ts'),
    server.ssrLoadModule('/src/data/courseData.ts'),
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
      if (block.kind === 'table' && !Object.hasOwn(block, 'title')) delete copy.title;
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
  for (const { code } of SEMESTERS.find((semester) => semester.number === 3).groups.flatMap((group) => group.courses)) {
    const content = await loadCourseContent(code);
    let count = 0;
    for (const reading of [...Object.values(content.readings), ...Object.values(content.reviews)]) {
      if (!reading) continue;
      const before = JSON.stringify(reading);
      const presented = withTableTitles(reading);
      assert.equal(JSON.stringify(reading), before, `${code}: presentation leaves the source intact`);
      const restored = structuredClone(presented);
      removeGeneratedTitles(reading.blocks, restored.blocks);
      assert.deepEqual(restored, reading, `${code}: only table titles may change, including all reading text and table metadata`);
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
  const managementTables = flatten(withTableTitles(management.readings[7]).blocks).filter((block) => block.kind === 'table');
  assert.ok(managementTables.some((table) => table.title === 'Gambaran struktur awal (dalam bentuk tabel hubungan lapor)'), 'use the existing introduction instead of repeating the complete Q1');
  assert.ok(managementTables.some((table) => table.title === 'Exhibit 7.2 — Struktur lama (tall)'), 'name the old organization chart');
  assert.ok(managementTables.some((table) => table.title === 'Exhibit 7.2 — Struktur baru (flat)'), 'distinguish the new organization chart');

  // Check both layouts, including a table inside an expanded disclosure.
  const table = tables[0];
  const html = renderToStaticMarkup(React.createElement(SharedFrameContext.Provider, { value: true },
    React.createElement(LayeredContext.Provider, { value: true },
      React.createElement(InsideBoxContext.Provider, { value: true }, React.createElement(Card, { block: table })))));
  const dom = new JSDOM(html);
  assert.equal(dom.window.document.querySelector('caption').textContent, table.title);
  assert.equal(dom.window.document.querySelectorAll('.course-table-title').length, 2, 'desktop and mobile both show a title inside disclosures');
  assert.ok(dom.window.document.querySelector('.lg\\:hidden').textContent.includes(table.title));

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
