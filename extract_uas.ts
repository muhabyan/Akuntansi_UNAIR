import fs from 'fs';
import { ekpaPraUasTm8_14 } from './src/data/ekpa/ekpaData.js';

const formatted = ekpaPraUasTm8_14.quiz.map((q: any) => ({
  q: q.question,
  options: q.options,
  answer: q.answerIndex,
  explanation: q.explanation || ''
}));

const out = `import type { QuizQuestion } from '../../types';\n\nexport const AKA103_QUIZ_UAS_SIMULATOR: QuizQuestion[] = ${JSON.stringify(formatted, null, 2)};\n`;

fs.writeFileSync('./src/data/quizzes/aka103UasSimulator.ts', out);
console.log('Success: ' + formatted.length + ' questions generated.');
