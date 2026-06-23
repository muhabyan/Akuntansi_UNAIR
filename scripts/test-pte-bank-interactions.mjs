import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { createServer } from 'vite';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const textOf = (node) => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (!node?.children) return '';
  return node.children.map(textOf).join(' ');
};

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true, hmr: { port: 24778 } },
});

let renderer;
try {
  const module = await vite.ssrLoadModule('/src/components/PteBankSoalTab.tsx');
  const PteBankSoalTab = module.default;

  await act(async () => {
    renderer = TestRenderer.create(React.createElement(PteBankSoalTab));
  });

  const root = () => renderer.root;
  const byTestId = (id) => root().findByProps({ 'data-testid': id });
  const allByTestId = (id) => root().findAllByProps({ 'data-testid': id });
  const summaryText = () => textOf(byTestId('pte-bank-results-summary'));

  assert(allByTestId('pte-bank-question-card').length === 10, 'Initial render harus menampilkan 10 kartu');
  assert(/100\s+soal cocok/.test(summaryText()) && /halaman\s+1\s+dari\s+10/.test(summaryText()), `Initial summary invalid: ${summaryText()}`);

  await act(async () => {
    byTestId('pte-bank-phase-filter').props.onChange({ target: { value: 'pra-uts' } });
  });
  assert(/36\s+soal cocok/.test(summaryText()) && /halaman\s+1\s+dari\s+4/.test(summaryText()), `Filter Pra-UTS invalid: ${summaryText()}`);
  assert(allByTestId('pte-bank-question-card').length === 10, 'Pra-UTS halaman pertama harus menampilkan 10 kartu');

  await act(async () => {
    byTestId('pte-bank-next-page').props.onClick();
  });
  assert(/halaman\s+2\s+dari\s+4/.test(summaryText()), `Navigasi halaman Pra-UTS invalid: ${summaryText()}`);
  assert(allByTestId('pte-bank-question-card')[0].props['data-question-number'] === 11, 'Nomor kartu pertama halaman 2 harus 11');

  await act(async () => {
    byTestId('pte-bank-phase-filter').props.onChange({ target: { value: 'pra-uas' } });
  });
  assert(/64\s+soal cocok/.test(summaryText()) && /halaman\s+1\s+dari\s+7/.test(summaryText()), `Filter Pra-UAS harus reset ke halaman 1: ${summaryText()}`);

  await act(async () => {
    byTestId('pte-bank-phase-filter').props.onChange({ target: { value: 'all' } });
    byTestId('pte-bank-kind-filter').props.onChange({ target: { value: 'short-answer' } });
  });
  assert(/10\s+soal cocok/.test(summaryText()) && /halaman\s+1\s+dari\s+1/.test(summaryText()), `Filter review terpandu invalid: ${summaryText()}`);
  assert(allByTestId('pte-bank-question-card').length === 10, 'Semua 10 review terpandu harus tampil dalam satu halaman');

  let toggle = allByTestId('pte-guided-review-toggle')[0];
  assert(toggle.props.disabled === true, 'Tombol panduan harus disabled sebelum jawaban ditulis');
  assert(allByTestId('pte-guided-review-guide').length === 0, 'Panduan tidak boleh tampil sebelum diminta');

  await act(async () => {
    allByTestId('pte-guided-review-draft')[0].props.onChange({ target: { value: 'Jawaban latihan dengan mekanisme ekonomi.' } });
  });
  toggle = allByTestId('pte-guided-review-toggle')[0];
  assert(toggle.props.disabled === false, 'Tombol panduan harus aktif setelah jawaban ditulis');

  await act(async () => {
    toggle.props.onClick();
  });
  assert(allByTestId('pte-guided-review-guide').length === 1, 'Panduan harus tampil setelah tombol diklik');
  assert(textOf(allByTestId('pte-guided-review-guide')[0]).includes('Panduan jawaban'), 'Panel panduan harus memiliki label yang benar');

  await act(async () => {
    allByTestId('pte-guided-review-toggle')[0].props.onClick();
  });
  assert(allByTestId('pte-guided-review-guide').length === 0, 'Panduan harus dapat ditutup kembali');

  await act(async () => {
    byTestId('pte-bank-kind-filter').props.onChange({ target: { value: 'all' } });
    byTestId('pte-bank-search').props.onChange({ target: { value: 'dwl' } });
  });
  assert(/2\s+soal cocok/.test(summaryText()) && /halaman\s+1\s+dari\s+1/.test(summaryText()), `Search DWL invalid: ${summaryText()}`);
  assert(allByTestId('pte-bank-question-card').some((card) => card.props['data-question-id'] === 'PTE-BANK-UTS-028'), 'Search DWL harus mencakup soal PTE-BANK-UTS-028');
} finally {
  renderer?.unmount();
  await vite.close();
}

if (failures.length) {
  console.error(`PTE bank React interaction test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE bank React interaction test passed.');
console.log('Actual React state transitions verified: phase filters, page reset/navigation, guided-review disabled state/reveal, and search.');
