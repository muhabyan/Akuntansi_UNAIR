import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const expectedCounts = {
  AKK201: 33,
  AKM201: 51,
  PJK201: 80,
  MNU101: 11,
  AKA103: 10,
  MAS122: 5,
  EKT109: 100,
};

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pte-bank-registry-'));
try {
  const outfile = path.join(tempDir, 'registry.mjs');
  await build({
    entryPoints: [path.join(root, 'src/data/banksoal/index.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile,
    logLevel: 'silent',
  });
  const registry = await import(`${pathToFileURL(outfile).href}?v=${Date.now()}`);

  assert(registry.BANK_SOAL_REGISTRY_MODE === 'async-lazy', `Registry mode: ${registry.BANK_SOAL_REGISTRY_MODE}, expected async-lazy`);

  for (const [code, expected] of Object.entries(expectedCounts)) {
    assert(registry.hasBankSoal(code) === true, `Canonical hasBankSoal(${code}) harus true`);
    assert(registry.getBankSoalCount(code) === expected, `Canonical count ${code}: ${registry.getBankSoalCount(code)}, expected ${expected}`);
    const items = await registry.getBankSoal(code);
    assert(Array.isArray(items) && items.length === expected, `Canonical getBankSoal(${code}): ${items?.length}, expected ${expected}`);
    const sets = await registry.getBankSoalSets(code);
    if (code === 'EKT109') {
      const byId = Object.fromEntries(sets.map((set) => [set.id, set.items.length]));
      assert(sets.length === 3, `Canonical sets EKT109: ${sets.length}, expected 3`);
      assert(byId.all === 100, `Canonical EKT109 all: ${byId.all}, expected 100`);
      assert(byId['pra-uts'] === 36, `Canonical EKT109 pra-uts: ${byId['pra-uts']}, expected 36`);
      assert(byId['pra-uas'] === 64, `Canonical EKT109 pra-uas: ${byId['pra-uas']}, expected 64`);
      const allIds = new Set(sets.find((set) => set.id === 'all')?.items.map((item) => item.id));
      const phaseIds = sets.filter((set) => set.id !== 'all').flatMap((set) => set.items.map((item) => item.id));
      assert(phaseIds.length === 100 && phaseIds.every((id) => allIds.has(id)), 'Canonical phase sets EKT109 harus mempartisi set all tanpa kehilangan item');
    } else {
      const setTotal = sets.reduce((sum, set) => sum + set.items.length, 0);
      assert(setTotal === expected, `Canonical sets ${code}: ${setTotal}, expected ${expected}`);
    }
  }

  assert(registry.getBankSoalCatalogEntry('EKT109')?.loader === 'pte', 'Catalog EKT109 harus memakai loader pte');
  assert(registry.getBankSoalCatalogEntry('AKK201')?.loader === 'non-pte', 'Catalog AKK201 harus memakai loader non-pte');
  assert(registry.hasBankSoal('UNKNOWN') === false, 'Unknown course tidak boleh memiliki bank soal');
  assert(registry.getBankSoalCount('UNKNOWN') === 0, 'Unknown course count harus 0');
  assert((await registry.getBankSoal('UNKNOWN')).length === 0, 'Unknown course loader harus kosong');

  const indexSource = read('src/data/banksoal/index.ts');
  assert(indexSource.includes("BANK_SOAL_REGISTRY_MODE = 'async-lazy'"), 'Kontrak async-lazy registry belum dideklarasikan');
  assert(indexSource.includes('consumer WAJIB memakai `await`'), 'Dokumentasi kontrak async registry belum eksplisit');
  assert(indexSource.includes("await import('./ekt109Bank')"), 'Canonical registry belum lazy-load EKT109');
  assert(indexSource.includes("await import('./nonPte')"), 'Canonical registry belum lazy-load non-PTE');
  assert(!/^import\s+(?!type).*from\s+['"]\.\/ekt109Bank['"]/m.test(indexSource), 'Canonical registry memiliki static runtime import EKT109');
  assert(!/^import\s+(?!type).*from\s+['"]\.\/nonPte['"]/m.test(indexSource), 'Canonical registry memiliki static runtime import non-PTE');
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

if (failures.length) {
  console.error(`PTE bank registry validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE bank canonical registry validation passed.');
console.log('All 7 active course registries match catalog counts; EKT109 resolves all:100, pra-uts:36, and pra-uas:64 lazily.');
