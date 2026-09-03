// scripts/build-sem3-quizzes-and-banksoal.mjs
// Generator kuis pilihan ganda dan bank soal komprehensif untuk 7 MK Semester 3.
import fs from 'node:fs';
import path from 'node:path';

const quizzesDir = path.join(process.cwd(), 'src/data/quizzes');
const banksoalDir = path.join(process.cwd(), 'src/data/banksoal');

// Data generator untuk Kuis & Bank Soal Semester 3
import { SEM3_QUIZ_DATA } from './sem3-quiz-data.mjs';
import { SEM3_BANK_DATA } from './sem3-bank-data.mjs';

// 1. Generate Quizzes
for (const [code, data] of Object.entries(SEM3_QUIZ_DATA)) {
  const filePath = path.join(quizzesDir, `${code.toLowerCase()}.ts`);
  const content = `// src/data/quizzes/${code.toLowerCase()}.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif ${data.courseName} (${code})
import type { QuizQuestion } from '../../types';

export const ${code}_QUIZ_UTS: QuizQuestion[] = ${JSON.stringify(data.uts, null, 2)};

export const ${code}_QUIZ_UAS: QuizQuestion[] = ${JSON.stringify(data.uas, null, 2)};

export const ${code}_QUIZ: QuizQuestion[] = [...${code}_QUIZ_UTS, ...${code}_QUIZ_UAS];
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated quiz: ${code}.ts (${data.uts.length + data.uas.length} questions)`);
}

// 2. Generate Bank Soal
for (const [code, data] of Object.entries(SEM3_BANK_DATA)) {
  const filePath = path.join(banksoalDir, `${code.toLowerCase()}.ts`);
  const content = `// src/data/banksoal/${code.toLowerCase()}.ts
// Bank Soal Esai & Studi Kasus ${data.courseName} (${code})
import type { BankSoal } from '../../types';

export const ${code}_BANK_UTS: BankSoal[] = ${JSON.stringify(data.uts, null, 2)};

export const ${code}_BANK_UAS: BankSoal[] = ${JSON.stringify(data.uas, null, 2)};

export const ${code}_BANK: BankSoal[] = [...${code}_BANK_UTS, ...${code}_BANK_UAS];
`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated bank soal: ${code}.ts (${data.uts.length + data.uas.length} items)`);
}
