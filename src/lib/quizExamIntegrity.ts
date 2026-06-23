import type { QuizQuestion } from '../types';

export interface QuizResponse {
  pick?: number;
  multi?: number[];
  fills?: Record<string, string>;
  matches?: Record<string, string>;
  ordering?: string[];
}

export function normalizeQuizNumber(value: string): number | null {
  let cleaned = value.trim().replace(/[^0-9,.-]/g, '');
  if (!/[0-9]/.test(cleaned)) return null;

  const negative = cleaned.includes('-') || /^\s*\(.*\)\s*$/.test(value);
  cleaned = cleaned.replace(/-/g, '');
  const lastComma = cleaned.lastIndexOf(',');
  const lastDot = cleaned.lastIndexOf('.');
  let decimalSeparator: ',' | '.' | null = null;

  if (lastComma >= 0 && lastDot >= 0) {
    decimalSeparator = lastComma > lastDot ? ',' : '.';
  } else if (lastComma >= 0) {
    const commaCount = (cleaned.match(/,/g) ?? []).length;
    const digitsAfter = cleaned.length - lastComma - 1;
    if (commaCount === 1 && digitsAfter > 0 && digitsAfter <= 2) decimalSeparator = ',';
  } else if (lastDot >= 0) {
    const dotCount = (cleaned.match(/\./g) ?? []).length;
    const digitsAfter = cleaned.length - lastDot - 1;
    if (dotCount === 1 && digitsAfter > 0 && digitsAfter <= 2) decimalSeparator = '.';
  }

  if (decimalSeparator) {
    const thousandsSeparator = decimalSeparator === ',' ? /\./g : /,/g;
    cleaned = cleaned.replace(thousandsSeparator, '');
    const decimalIndex = cleaned.lastIndexOf(decimalSeparator);
    const integerPart = cleaned.slice(0, decimalIndex).replace(/[.,]/g, '');
    const decimalPart = cleaned.slice(decimalIndex + 1).replace(/[.,]/g, '');
    cleaned = `${integerPart}.${decimalPart}`;
  } else {
    cleaned = cleaned.replace(/[.,]/g, '');
  }

  const parsed = Number(`${negative ? '-' : ''}${cleaned}`);
  return Number.isFinite(parsed) ? parsed : null;
}

export function isQuizResponseCorrect(question: QuizQuestion, response: QuizResponse): boolean {
  if (!question.kind || question.kind === 'mcq') {
    return response.pick === question.answer;
  }
  if (question.kind === 'multi-select') {
    const selected = response.multi ?? [];
    if (selected.length !== question.answers.length) return false;
    return [...selected].sort((a, b) => a - b).join(',') === [...question.answers].sort((a, b) => a - b).join(',');
  }
  if (question.kind === 'report-fill') {
    const fills = response.fills ?? {};
    return question.blanks.every((blank) => {
      const actual = normalizeQuizNumber(fills[blank.id] ?? '');
      if (actual === null) return false;
      return Math.abs(actual - blank.answer) <= (blank.tolerance ?? 0);
    });
  }
  if (question.kind === 'account-match') {
    const matches = response.matches ?? {};
    return question.pairs.every((pair) => matches[pair.prompt] === pair.answer);
  }
  if (question.kind === 'ordering') {
    const ordering = response.ordering ?? [];
    return question.correctOrder.every((item, index) => ordering[index] === item);
  }
  return false;
}

export function getQuizDatasetFingerprint(questions: QuizQuestion[]): string {
  const signature = JSON.stringify(questions.map((question) => ({
    id: question.id,
    tm: question.tm,
    kind: question.kind ?? 'mcq',
    q: question.q,
    svg: question.svg,
    altText: question.altText,
    sourceRef: question.sourceRef,
    sourceAnchors: question.sourceAnchors,
    options: 'options' in question ? question.options : undefined,
    answer: !question.kind || question.kind === 'mcq' ? question.answer : undefined,
    answers: question.kind === 'multi-select' ? question.answers : undefined,
    blanks: question.kind === 'report-fill'
      ? question.blanks.map((blank) => ({ id: blank.id, answer: blank.answer, tolerance: blank.tolerance ?? 0 }))
      : undefined,
    pairs: question.kind === 'account-match'
      ? question.pairs.map((pair) => ({ prompt: pair.prompt, answer: pair.answer }))
      : undefined,
    ordering: question.kind === 'ordering'
      ? { items: question.items, correctOrder: question.correctOrder }
      : undefined,
  })));
  let hash = 2166136261;
  for (let index = 0; index < signature.length; index += 1) {
    hash ^= signature.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `fnv1a-${(hash >>> 0).toString(16).padStart(8, '0')}`;
}
