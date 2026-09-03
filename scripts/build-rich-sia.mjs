// scripts/build-rich-sia.mjs
// Generator modul super-lengkap Sistem Informasi Akuntansi (AKS301) TM 2-14
// Berdasarkan Vernon J. Richardson, C. Janie Chang, Rod E. Smith (McGraw-Hill 4e ISE).
import fs from 'node:fs';
import path from 'node:path';

const siaFilePath = path.join(process.cwd(), 'src/data/sia/siaReadings.ts');
const existingSource = fs.readFileSync(siaFilePath, 'utf8');

// Ambil blok TM 1 yang sudah sangat kaya
const tm1Match = existingSource.match(/1:\s*\{[\s\S]*?\n\s*\},?\n\s*2:\s*\{/);
if (!tm1Match) {
  console.error('Could not isolate TM 1 in siaReadings.ts');
  process.exit(1);
}
const tm1Code = tm1Match[0].replace(/,?\n\s*2:\s*\{$/, '');

import { RICH_SIA_MODULES } from './rich-sia-data.mjs';

let output = `// =============================================================
// src/data/sia/siaReadings.ts
// Rangkuman komprehensif materi Sistem Informasi Akuntansi (AKS301).
// Sumber: Accounting Information Systems (4th ISE ed.) —
//         Vernon J. Richardson, C. Janie Chang, Rod E. Smith (McGraw-Hill).
// =============================================================
import type { Reading } from '../../types';

export const AKS301_READINGS: Record<number, Reading> = {
  ${tm1Code},
`;

RICH_SIA_MODULES.forEach((mod) => {
  output += `  ${mod.tm}: ${JSON.stringify(mod, null, 2)},\n`;
});

output += `};\n`;

fs.writeFileSync(siaFilePath, output, 'utf8');
console.log('Successfully written rich SIA modules TM 2-14!');
