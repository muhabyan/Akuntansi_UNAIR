const fs = require('fs');
const data = fs.readFileSync('c:\\cek\\src\\data\\ekpa\\ekpaData.ts', 'utf8');

const startIndex = data.indexOf('"quiz": [');
if (startIndex !== -1) {
  const endIndex = data.lastIndexOf(']');
  const arrayStr = data.substring(startIndex + 8, endIndex + 1);
  try {
    const rawArray = eval('(' + arrayStr + ')');
    const formatted = rawArray.map(q => ({
      q: q.question,
      options: q.options,
      answer: q.answerIndex,
      explanation: q.explanation || ''
    }));
    const out = "import type { QuizQuestion } from '../../types';\n\nexport const AKA103_QUIZ_UAS_SIMULATOR: QuizQuestion[] = " + JSON.stringify(formatted, null, 2) + ";\n";
    fs.writeFileSync('c:\\cek\\src\\data\\quizzes\\aka103UasSimulator.ts', out);
    console.log('Success: ' + formatted.length);
  } catch (e) {
    console.error('Eval error', e);
  }
} else {
  console.log('Not found');
}
