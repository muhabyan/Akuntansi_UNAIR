// Semester 3 generator guard. build-sem3-flashcards.mjs and build-sem3-quizzes-and-banksoal.mjs rewrite
// src/data/{flashcards,quizzes,banksoal}/<code>.ts for every course in their data maps, so a file that was
// edited by hand must not be in the map that writes it: one run would revert the edit.
//
// GENERATED is the complete set of files the generators may write, per artefact. Every generator map is
// compared with it exactly, so adding or dropping a course anywhere has to be a deliberate edit here too.
//
// Edited by hand, never generated: AKK202, AKS301, PJK301 (formerly PJK202; all artefacts) and the quiz and bank soal of
// AKS201 and MNK201 (expanded in eb2282c). The flashcards of AKS201 and MNK201 still match their generator.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const GENERATED = {
  flashcards: ['AKM202', 'AKS201', 'MNK201', 'AKA201'],
  quizzes: ['AKM202', 'AKA201'],
  banksoal: ['AKM202', 'AKA201'],
};

// The build-* scripts write files when imported, so their maps are read from source text.
const sourceKeys = (file) =>
  [...readFileSync(file, 'utf8').matchAll(/^ {2}"?([A-Z]{3}\d{3})"?: \{/gm)].map((match) => match[1]);

const { SEM3_QUIZ_DATA } = await import('./sem3-quiz-data.mjs');
const { SEM3_BANK_DATA } = await import('./sem3-bank-data.mjs');

const maps = [
  ['flashcards', 'scripts/build-sem3-flashcards.mjs', sourceKeys('scripts/build-sem3-flashcards.mjs')],
  ['quizzes', 'scripts/build-sem3-quiz-data.mjs', sourceKeys('scripts/build-sem3-quiz-data.mjs')],
  ['quizzes', 'scripts/sem3-quiz-data.mjs', Object.keys(SEM3_QUIZ_DATA)],
  ['banksoal', 'scripts/build-sem3-bank-data.mjs', sourceKeys('scripts/build-sem3-bank-data.mjs')],
  ['banksoal', 'scripts/sem3-bank-data.mjs', Object.keys(SEM3_BANK_DATA)],
];

for (const [artefact, file, codes] of maps) {
  assert.deepEqual(
    [...codes].sort(), [...GENERATED[artefact]].sort(),
    `${file} generates [${codes.join(', ')}] but ${artefact} may only be generated for [${GENERATED[artefact].join(', ')}]. ` +
      'A hand-edited file must not be in a generator map; change GENERATED only on purpose.',
  );
}

console.log(
  'Semester 3 generator guard passed: ' +
    Object.entries(GENERATED).map(([artefact, codes]) => `${artefact} [${codes.join(', ')}]`).join('; '),
);
