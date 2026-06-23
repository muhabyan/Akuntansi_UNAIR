import fs from 'node:fs';
import path from 'node:path';

export function loadPteBankQuestions(root = process.cwd()) {
  const source = fs.readFileSync(path.join(root, 'src/data/banksoal/ekt109Bank.ts'), 'utf8');
  const match = source.match(/EKT109_BANK_QUESTIONS[^=]*=\s*(\[[\s\S]*\]);\s*$/);
  if (!match) throw new Error('EKT109_BANK_QUESTIONS array not found');
  return JSON.parse(match[1]);
}
