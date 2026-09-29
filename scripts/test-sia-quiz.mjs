import assert from 'node:assert/strict';
import { build } from 'esbuild';

const bundle = await build({
  stdin: {
    contents: "export { SII306_QUIZ_UTS } from './src/data/quizzes/sii306.ts'; export { getQuizDatasetFingerprint, isQuizResponseCorrect, normalizeQuizText } from './src/lib/quizExamIntegrity.ts';",
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const { SII306_QUIZ_UTS: quiz, getQuizDatasetFingerprint, isQuizResponseCorrect, normalizeQuizText } =
  await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);

assert.equal(quiz.length, 70);
assert.equal(new Set(quiz.map((item) => item.q)).size, quiz.length, 'no duplicate prompts');
assert.equal(new Set(quiz.filter((item) => item.id).map((item) => item.id)).size, 35, 'new cases have stable unique ids');
for (let tm = 1; tm <= 7; tm += 1) {
  const items = quiz.filter((item) => item.tm === tm);
  assert.equal(items.length, 10, `TM${tm} has ten questions`);
  assert.equal(items.filter((item) => item.kind === 'multi-select').length, 2);
  assert.equal(items.filter((item) => item.kind === 'short-answer').length, 1);
}

for (const item of quiz) {
  assert.ok(item.explanation?.length >= 80, `explanation substantial: ${item.id ?? item.q.slice(0, 30)}`);
  if (item.kind === 'multi-select') {
    assert.ok(isQuizResponseCorrect(item, { multi: item.answers }));
    assert.ok(!isQuizResponseCorrect(item, { multi: item.answers.slice(0, -1) }));
    const extra = item.options.findIndex((_, index) => !item.answers.includes(index));
    assert.ok(!isQuizResponseCorrect(item, { multi: [...item.answers, extra] }));
  } else if (item.kind === 'short-answer') {
    for (const alias of item.answers) {
      assert.ok(isQuizResponseCorrect(item, { text: `  ${alias.toUpperCase()}!!!  ` }), `accepted alias: ${alias}`);
    }
    assert.ok(!isQuizResponseCorrect(item, { text: '' }));
    assert.ok(!isQuizResponseCorrect(item, { text: 'jawaban lain' }));
  } else {
    assert.ok(isQuizResponseCorrect(item, { pick: item.answer }));
    assert.ok(!isQuizResponseCorrect(item, { pick: (item.answer + 1) % item.options.length }));
  }
}
assert.equal(normalizeQuizText('  THREE-WAY,  Match! '), 'three way match');
const shortIndex = quiz.findIndex((item) => item.kind === 'short-answer');
const altered = [...quiz];
altered[shortIndex] = { ...altered[shortIndex], answers: ['changed answer'] };
assert.notEqual(getQuizDatasetFingerprint(quiz), getQuizDatasetFingerprint(altered), 'new answer key invalidates old exam session');

console.log('SIA quiz PASS: 70 questions; 49 single, 14 multiple, 7 short; answer keys and tolerant text scoring verified.');
