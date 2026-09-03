// scripts/generate-sem3-flashcards.mjs
// Generator paket Flashcard standar emas untuk 7 mata kuliah Semester 3 (84 kartu per MK).
import fs from 'node:fs';
import path from 'node:path';

const flashcardsDir = path.join(process.cwd(), 'src/data/flashcards');

function createCard(code, tm, i, topic, category, front, back) {
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  const id = `${code.toLowerCase()}-tm${String(tm).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
  return { id, phase, tm, topic, category, front, back };
}

// Data generator specifications for each course
import { SEM3_FLASHCARD_SPECS } from './sem3-fc-specs.mjs';

for (const [code, cards] of Object.entries(SEM3_FLASHCARD_SPECS)) {
  const filePath = path.join(flashcardsDir, `${code.toLowerCase()}.ts`);
  const exportName = `${code.toUpperCase()}_FC`;
  const content = `import type { AdvancedStudyCard } from '../../types';

export const ${exportName}: AdvancedStudyCard[] = ${JSON.stringify(cards, null, 2)};
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated ${code}.ts with ${cards.length} cards.`);
}
