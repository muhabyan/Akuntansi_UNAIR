// Semester 3 generator drift guard. The Semester 3 generators write src/data/{flashcards,quizzes,banksoal}/<code>.ts and
// scripts/sem3-{quiz,bank}-data.mjs. Every file they write must equal the committed file, so a hand edit to a generated
// file, or a generator change that was never regenerated, fails here instead of being reverted (or reverting someone)
// by the next generator run. test-sem3-generators.mjs pins WHICH courses may be generated; this checks that what they
// generate IS what is committed. Files of courses that are not in a generator map are not compared: they are hand-edited.
//
// The generators run in a temporary directory, so the working tree is never written to.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const root = process.cwd();
// Order matters: the last script imports the two data files written by the two builders before it.
const GENERATORS = [
  'build-sem3-flashcards.mjs',
  'build-sem3-quiz-data.mjs',
  'build-sem3-bank-data.mjs',
  'build-sem3-quizzes-and-banksoal.mjs',
];
const OUTPUT_DIRS = ['src/data/flashcards', 'src/data/quizzes', 'src/data/banksoal'];
const DATA_FILES = ['scripts/sem3-quiz-data.mjs', 'scripts/sem3-bank-data.mjs'];

// Committed files may be CRLF (Windows checkout); the generators always write LF.
const lines = (file) => readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');

const scratch = mkdtempSync(path.join(tmpdir(), 'sem3-drift-'));
try {
  mkdirSync(path.join(scratch, 'scripts'));
  for (const dir of OUTPUT_DIRS) mkdirSync(path.join(scratch, dir), { recursive: true });
  for (const name of GENERATORS) copyFileSync(path.join(root, 'scripts', name), path.join(scratch, 'scripts', name));

  for (const name of GENERATORS) {
    const run = spawnSync(process.execPath, [path.join('scripts', name)], { cwd: scratch, encoding: 'utf8', timeout: 60_000 });
    const why = (run.stderr || run.error?.message || '').trim().split('\n').slice(-2).join(' | ');
    assert.equal(run.status, 0, `scripts/${name} crashed (exit ${run.status}): ${why}`);
  }

  const generated = [...DATA_FILES];
  const counts = {};
  for (const dir of OUTPUT_DIRS) {
    const names = readdirSync(path.join(scratch, dir)).filter((name) => name.endsWith('.ts')).sort();
    assert.ok(names.length > 0, `${dir}: the generators wrote no files (a broken generator must not pass silently)`);
    counts[path.basename(dir)] = names.length;
    generated.push(...names.map((name) => `${dir}/${name}`));
  }

  const problems = [];
  for (const rel of generated) {
    const committed = path.join(root, rel);
    if (!existsSync(committed)) { problems.push(`${rel}: generated but not committed`); continue; }
    const have = lines(committed);
    const want = lines(path.join(scratch, rel));
    if (have.length === want.length && have.every((line, i) => line === want[i])) continue;
    let first = 0; // index of the first differing line; equals the shorter length when one file is a prefix of the other
    while (first < Math.min(have.length, want.length) && have[first] === want[first]) first += 1;
    // JSON.stringify keeps trailing spaces visible: a formatting-only difference must not look like an identical pair.
    const show = (line) => (line === undefined ? '(end of file)' : JSON.stringify(line.length > 110 ? `${line.slice(0, 110)}...` : line));
    problems.push(
      `${rel}: differs from generator output at line ${first + 1}\n` +
        `      committed: ${show(have[first])}\n` +
        `      generated: ${show(want[first])}`,
    );
  }
  assert.ok(
    problems.length === 0,
    `${problems.length} generated file(s) differ from the committed files:\n  ${problems.join('\n  ')}\n` +
      'A file a generator writes must equal its output. If you edited such a file by hand, that course is hand-maintained: ' +
      'remove it from the generator data map(s) and from GENERATED in scripts/test-sem3-generators.mjs. ' +
      'If you changed generator data, rerun the generators and commit the result.',
  );

  console.log(
    `Semester 3 generator drift guard passed: ${generated.length} generated files equal the committed files ` +
      `(flashcards ${counts.flashcards}, quizzes ${counts.quizzes}, banksoal ${counts.banksoal}, data files ${DATA_FILES.length}).`,
  );
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
