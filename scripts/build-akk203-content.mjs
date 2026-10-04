import fs from 'node:fs';
import { TMS, buildReading, sourceHash } from './akk203-content-lib.mjs';
for (const tm of TMS) {
  const reading = buildReading(tm);
  fs.writeFileSync(`src/data/asp/modules/tm${tm}.ts`, `// Generated from the approved 05 package by scripts/build-akk203-content.mjs.\n// Source SHA-256: ${sourceHash(tm)}\nimport type { Reading } from '../../../types';\n\nexport const TM${tm}_READING: Reading = ${JSON.stringify(reading,null,2)};\n`);
  console.log(`TM${tm}: ${reading.blocks.length} top-level blocks`);
}
