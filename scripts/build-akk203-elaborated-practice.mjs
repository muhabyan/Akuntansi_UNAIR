import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
const data = JSON.parse(readFileSync('content-pipeline/AKK203/elaboration-20261014/practice.json', 'utf8'));
assert.equal(data.quiz.length, 35); assert.equal(data.cards.length, 42); assert.equal(data.bank.length, 7);
function rewrite(file, name, next) {
  const text = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const a = text.indexOf(' = [', text.indexOf(`export const ${name}`)) + 3;
  const b = text.indexOf('\n];', a) + 2;
  assert.ok(a > 3 && b > a);
  const current = JSON.parse(text.slice(a, b));
  const value = typeof next === 'function' ? next(current) : next;
  const output = text.slice(0, a) + JSON.stringify(value, null, 2) + text.slice(b);
  if (process.argv.includes('--check')) assert.equal(text, output, `${file} source mismatch`);
  else writeFileSync(file, output);
}
rewrite('src/data/quizzes/aks201.ts', 'AKS201_QUIZ_UAS', data.quiz);
rewrite('src/data/flashcards/aks201.ts', 'AKS201_FC', old => [...old.filter(c => c.phase !== 'pra-uas'), ...data.cards]);
rewrite('src/data/banksoal/aks201.ts', 'AKS201_BANK_UAS', data.bank);
console.log('ASP practice: corrected post-UTS objects built; pre-UTS objects retained.');
