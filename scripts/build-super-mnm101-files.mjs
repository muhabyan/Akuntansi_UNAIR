// scripts/build-super-mnm101-files.mjs
// Build script untuk menghasilkan seluruh materi Pengantar Manajemen (MNM101)
import fs from 'node:fs';
import path from 'node:path';

import { MNM101_SUPER_FC } from './build-super-mnm101-flashcards-data.mjs';
import { MNM101_SUPER_QUIZ_UTS, MNM101_SUPER_QUIZ_UAS } from './build-super-mnm101-quizzes-data.mjs';
import { MNM101_SUPER_BANK_UTS, MNM101_SUPER_BANK_UAS } from './build-super-mnm101-bank-data.mjs';

// 1. Tulis src/data/flashcards/mnm101.ts
const fcPath = path.join(process.cwd(), 'src/data/flashcards/mnm101.ts');
const fcContent = `// src/data/flashcards/mnm101.ts
// Flashcard komprehensif Pengantar Manajemen (MNM101) — 84 kartu lengkap (6 kartu per TM)
// Berdasarkan Richard L. Daft & Dorothy Marcic (Understanding Management 12e/13e)
import type { AdvancedStudyCard } from '../../types';

export const MNM101_FC: AdvancedStudyCard[] = ${JSON.stringify(MNM101_SUPER_FC, null, 2)};
`;
fs.writeFileSync(fcPath, fcContent, 'utf8');
console.log('1. Successfully generated src/data/flashcards/mnm101.ts (84 cards)!');

// 2. Tulis src/data/quizzes/mnm101.ts
const quizPath = path.join(process.cwd(), 'src/data/quizzes/mnm101.ts');
const quizContent = `// src/data/quizzes/mnm101.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Pengantar Manajemen (MNM101)
// Berdasarkan Richard L. Daft (Understanding Management 12e/13e) & Stephen P. Robbins (Management 15e/16e)
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1-7) & 35 Soal Pra-UAS (TM 8-14)
import type { QuizQuestion } from '../../types';

export const MNM101_QUIZ_UTS: QuizQuestion[] = ${JSON.stringify(MNM101_SUPER_QUIZ_UTS, null, 2)};

export const MNM101_QUIZ_UAS: QuizQuestion[] = ${JSON.stringify(MNM101_SUPER_QUIZ_UAS, null, 2)};

export const MNM101_QUIZ: QuizQuestion[] = [...MNM101_QUIZ_UTS, ...MNM101_QUIZ_UAS];
`;
fs.writeFileSync(quizPath, quizContent, 'utf8');
console.log('2. Successfully generated src/data/quizzes/mnm101.ts (70 questions)!');

// 3. Tulis src/data/banksoal/mnm101.ts
const bankPath = path.join(process.cwd(), 'src/data/banksoal/mnm101.ts');
const bankContent = `// src/data/banksoal/mnm101.ts
// Bank Soal Esai & Studi Kasus Keputusan Manajerial Pengantar Manajemen (MNM101)
// Berdasarkan Richard L. Daft (Understanding Management 12e/13e)
// 14 Kasus Lengkap (7 Kasus Pra-UTS & 7 Kasus Pra-UAS)
import type { BankSoal } from '../../types';

export const MNM101_BANK_UTS: BankSoal[] = ${JSON.stringify(MNM101_SUPER_BANK_UTS, null, 2)};

export const MNM101_BANK_UAS: BankSoal[] = ${JSON.stringify(MNM101_SUPER_BANK_UAS, null, 2)};

export const MNM101_BANK: BankSoal[] = [...MNM101_BANK_UTS, ...MNM101_BANK_UAS];
`;
fs.writeFileSync(bankPath, bankContent, 'utf8');
console.log('3. Successfully generated src/data/banksoal/mnm101.ts (14 cases)!');
