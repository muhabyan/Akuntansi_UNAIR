import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

async function importTsModule(relativePath) {
  const sourcePath = path.join(root, relativePath);
  const source = fs.readFileSync(sourcePath, 'utf8')
    .replace(/^import\s+type[^\n]*\n/gm, '');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
    fileName: relativePath,
  }).outputText;
  const tempPath = path.join(os.tmpdir(), `flashcard-behavior-${process.pid}-${Date.now()}-${path.basename(relativePath)}.mjs`);
  fs.writeFileSync(tempPath, output);
  try {
    return await import(`${pathToFileURL(tempPath).href}?v=${Date.now()}`);
  } finally {
    fs.rmSync(tempPath, { force: true });
  }
}

const accessibility = await importTsModule('src/components/flashcardAccessibility.ts');
const timers = await importTsModule('src/components/flashcardTimers.ts');

const card = {
  front: 'Apa yang dimaksud kelangkaan dalam ilmu ekonomi?',
  back: 'Kelangkaan adalah kondisi ketika sumber daya terbatas dibanding kebutuhan manusia.',
};

const questionLabel = accessibility.getFlashcardAccessibleLabel(card, 0, 126, false);
const answerLabel = accessibility.getFlashcardAccessibleLabel(card, 0, 126, true);
assert(questionLabel.includes(card.front), 'Accessible label pertanyaan tidak memuat isi pertanyaan');
assert(!questionLabel.includes(card.back), 'Accessible label pertanyaan membocorkan jawaban');
assert(answerLabel.includes(card.back), 'Accessible label jawaban tidak memuat isi jawaban');
assert(accessibility.getNextFlashcardFlipState(false) === true, 'Flip false → true gagal');
assert(accessibility.getNextFlashcardFlipState(true) === false, 'Flip true → false gagal');
assert(accessibility.getFlashcardAnnouncement(card, 0, 126, true, 'Jawaban dibuka.').includes('Jawaban dibuka.'), 'Live announcement flip tidak memuat status');

const interactiveTarget = { closest: () => ({}) };
const nonInteractiveTarget = { closest: () => null };
assert(accessibility.isFlashcardInteractiveTarget(interactiveTarget) === true, 'Keyboard guard gagal mengenali elemen interaktif');
assert(accessibility.isFlashcardInteractiveTarget(nonInteractiveTarget) === false, 'Keyboard guard salah memblokir target non-interaktif');
assert(accessibility.isFlashcardInteractiveTarget(null) === false, 'Keyboard guard null harus false');

const cleared = [];
const registry = timers.createFlashcardTimerRegistry((timeoutId) => cleared.push(timeoutId));
registry.add(11);
registry.add(22);
registry.add(33);
assert(registry.size() === 3, 'Timer registry gagal menyimpan timeout');
registry.clear();
assert(cleared.join(',') === '11,22,33', `Timer cleanup tidak lengkap: ${cleared.join(',')}`);
assert(registry.size() === 0, 'Timer registry tidak kosong setelah cleanup');
registry.clear();
assert(cleared.length === 3, 'Timer cleanup kedua seharusnya idempotent');

const deckSource = fs.readFileSync(path.join(root, 'src/components/FlashcardDeck.tsx'), 'utf8');
for (const required of [
  'aria-pressed={isFlipped}',
  'aria-hidden={isFlipped}',
  'aria-hidden={!isFlipped}',
  'role="status"',
  'aria-live="polite"',
  'getFlashcardAccessibleLabel(card, index, totalCards, isFlipped)',
  'isFlashcardInteractiveTarget(event.target)',
  'spinTimerRegistryRef.current?.clear()',
]) {
  assert(deckSource.includes(required), `FlashcardDeck belum memuat semantik wajib: ${required}`);
}

if (failures.length) {
  console.error('Flashcard behavior validation failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Flashcard behavior validation passed: accessible flip semantics, keyboard guard, live announcement, and timer cleanup.');
