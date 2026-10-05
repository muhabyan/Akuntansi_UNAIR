import fs from 'node:fs';
import { TMS, buildReading, sourceHash } from './mnu307-content-lib.mjs';
for (const tm of TMS) {
  const reading = buildReading(tm);
  fs.writeFileSync(`src/data/manstrat/modules/tm${tm}.ts`, `// Generated from the approved 05 package by scripts/build-mnu307-content.mjs.\n// Source SHA-256: ${sourceHash(tm)}\nimport type { Reading } from '../../../types';\n\nexport const TM${tm}_READING: Reading = ${JSON.stringify(reading, null, 2)};\n`);
  console.log(`MNU307 TM${tm}: ${reading.blocks.length} top-level blocks`);
}
