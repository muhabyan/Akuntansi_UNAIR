import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { PTE_PRA_UTS_ALIGNMENT_CONTRACT, PTE_PRA_UTS_EXPECTED_TM_COUNTS } from './pte-bank-alignment-contract.mjs';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');

async function importStandaloneTsExport(rel, exportName) {
  const source = read(rel).replace(/^import[^\n]*\n/gm, '');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
    fileName: rel,
  }).outputText;
  const temp = path.join(os.tmpdir(), `pte-bank-alignment-${process.pid}-${Date.now()}.mjs`);
  fs.writeFileSync(temp, output);
  try {
    const module = await import(`${pathToFileURL(temp).href}?v=${Date.now()}`);
    return module[exportName];
  } finally {
    fs.rmSync(temp, { force: true });
  }
}

const questions = await importStandaloneTsExport('src/data/banksoal/ekt109Bank.ts', 'EKT109_BANK_QUESTIONS');
const readingsSource = read('src/data/pte/pteData.ts');
const generated = questions.filter((question) => question.phase === 'pra-uts');
const generatedById = new Map(generated.map((question) => [question.id, question]));
const contractIds = Object.keys(PTE_PRA_UTS_ALIGNMENT_CONTRACT);

assert(generated.length === 36, `Pra-UTS generated: ${generated.length}, expected 36`);
assert(generatedById.size === contractIds.length, `Alignment contract: ${contractIds.length}, generated unique: ${generatedById.size}`);
for (const id of contractIds) assert(generatedById.has(id), `${id}: tidak ada dalam bank aktif`);
for (const question of generated) assert(PTE_PRA_UTS_ALIGNMENT_CONTRACT[question.id], `${question.id}: tidak memiliki alignment contract`);

const tmCounts = new Map();
for (const question of generated) {
  const contract = PTE_PRA_UTS_ALIGNMENT_CONTRACT[question.id];
  if (!contract) continue;
  tmCounts.set(question.tm, (tmCounts.get(question.tm) ?? 0) + 1);
  assert(question.sourceStatus === 'generated-from-reading', `${question.id}: sourceStatus harus generated-from-reading`);
  assert(question.tm === contract.tm, `${question.id}: TM ${question.tm}, expected ${contract.tm}`);
  assert(question.sourceRef === `Reading EKT109 TM ${contract.tm}`, `${question.id}: sourceRef tidak sesuai TM contract`);
  assert(Array.isArray(question.sourceAnchors) && question.sourceAnchors.length > 0, `${question.id}: sourceAnchors kosong`);
  assert(JSON.stringify(question.sourceAnchors) === JSON.stringify(contract.anchors), `${question.id}: sourceAnchors berbeda dari contract`);
  for (const anchor of contract.anchors) {
    assert(readingsSource.includes(`text: '${anchor}'`), `${question.id}: anchor tidak ditemukan pada active reading: ${anchor}`);
  }
}

for (const [tm, expected] of Object.entries(PTE_PRA_UTS_EXPECTED_TM_COUNTS)) {
  assert(tmCounts.get(Number(tm)) === expected, `TM${tm}: ${tmCounts.get(Number(tm)) ?? 0}, expected ${expected}`);
}

const forbiddenByTm = {
  2: [/\bPPF\b/i, /biaya peluang/i, /keputusan marginal/i],
  4: [/consumer surplus/i, /producer surplus/i, /struktur pasar/i],
  7: [/persaingan monopolistik/i, /oligopoli/i, /eksternalitas negatif/i, /pabrik menimbulkan polusi/i],
};
for (const question of generated) {
  const patterns = forbiddenByTm[question.tm] ?? [];
  const haystack = `${question.prompt} ${question.explanation}`;
  for (const pattern of patterns) assert(!pattern.test(haystack), `${question.id}: konsep terlarang untuk TM${question.tm} (${pattern})`);
}

const requiredTm2Concepts = [
  /sistem pasar bebas/i,
  /invisible hand/i,
  /ekonomi campuran/i,
  /kegagalan pasar/i,
];
const tm2Text = generated.filter((question) => question.tm === 2).map((question) => `${question.prompt} ${question.explanation}`).join(' ');
for (const pattern of requiredTm2Concepts) assert(pattern.test(tm2Text), `Coverage TM2 belum memuat ${pattern}`);

if (failures.length) {
  console.error(`PTE bank alignment validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('PTE bank alignment validation passed.');
console.log('Pra-UTS: 36 questions | TM distribution: 5/5/5/5/5/5/6 | source anchors: verified');
