import type {
  PteBankCompetency,
  PteBankDifficulty,
  PteBankKind,
  PteBankMatchingQuestion,
  PteBankNumericQuestion,
  PteBankOrderingQuestion,
  PteBankPhase,
  PteBankQuestion,
} from '../data/banksoal/ekt109Bank';

export interface PteBankFilters {
  phase: 'all' | PteBankPhase;
  tm: 'all' | number;
  kind: 'all' | PteBankKind;
  competency: 'all' | PteBankCompetency;
  difficulty: 'all' | PteBankDifficulty;
  query: string;
}

export function normalizePteBankSearch(value: string): string {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

export function filterPteBankQuestions(
  questions: PteBankQuestion[],
  filters: PteBankFilters,
): PteBankQuestion[] {
  const needle = normalizePteBankSearch(filters.query);
  return questions.filter((question) => (
    (filters.phase === 'all' || question.phase === filters.phase)
    && (filters.tm === 'all' || question.tm === filters.tm)
    && (filters.kind === 'all' || question.kind === filters.kind)
    && (filters.competency === 'all' || question.competency === filters.competency)
    && (filters.difficulty === 'all' || question.difficulty === filters.difficulty)
    && (!needle || normalizePteBankSearch([
      question.prompt,
      question.explanation,
      question.topic,
      question.competency,
      question.sourceRef,
    ].join(' ')).includes(needle))
  ));
}

export function paginatePteBankQuestions<T>(items: T[], page: number, pageSize: number): {
  page: number;
  pageCount: number;
  visible: T[];
} {
  const safeSize = Math.max(1, Math.floor(pageSize));
  const pageCount = Math.max(1, Math.ceil(items.length / safeSize));
  const safePage = Math.min(pageCount, Math.max(1, Math.floor(page)));
  return {
    page: safePage,
    pageCount,
    visible: items.slice((safePage - 1) * safeSize, safePage * safeSize),
  };
}

export function getPteBankPaginationAnnouncement(
  itemCount: number,
  page: number,
  pageCount: number,
): string {
  return `${itemCount} soal cocok. Halaman ${page} dari ${pageCount}.`;
}

export function normalizePteBankNumber(value: string): number | null {
  let cleaned = value.trim().replace(/[^0-9,.-]/g, '');
  if (!/[0-9]/.test(cleaned)) return null;
  const negative = cleaned.includes('-');
  cleaned = cleaned.replace(/-/g, '');
  const comma = cleaned.lastIndexOf(',');
  const dot = cleaned.lastIndexOf('.');
  const decimal = comma >= 0 && dot >= 0
    ? (comma > dot ? ',' : '.')
    : comma >= 0 && cleaned.length - comma - 1 <= 2
      ? ','
      : dot >= 0 && cleaned.length - dot - 1 <= 2
        ? '.'
        : null;
  if (decimal) {
    const index = cleaned.lastIndexOf(decimal);
    const integer = cleaned.slice(0, index).replace(/[.,]/g, '');
    const fraction = cleaned.slice(index + 1).replace(/[.,]/g, '');
    cleaned = `${integer}.${fraction}`;
  } else {
    cleaned = cleaned.replace(/[.,]/g, '');
  }
  const parsed = Number(`${negative ? '-' : ''}${cleaned}`);
  return Number.isFinite(parsed) ? parsed : null;
}

export function orderedArraysEqual<T>(left: T[], right: T[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

export function isPteMatchingCorrect(
  question: PteBankMatchingQuestion,
  answers: Record<string, string>,
): boolean {
  return question.pairs.every((pair) => answers[pair.prompt] === pair.answer);
}

export function isPteOrderingCorrect(question: PteBankOrderingQuestion, order: string[]): boolean {
  return orderedArraysEqual(order, question.correctOrder);
}

export function isPteNumericCorrect(question: PteBankNumericQuestion, value: string): boolean {
  const parsed = normalizePteBankNumber(value);
  return parsed !== null && Math.abs(parsed - question.answer) <= (question.tolerance ?? 0);
}

export type PteOptionSemanticStatus = 'neutral' | 'correct' | 'incorrect-selected';

export function getPteOptionSemanticStatus(
  checked: boolean,
  active: boolean,
  correctOption: boolean,
): PteOptionSemanticStatus {
  if (!checked) return 'neutral';
  if (correctOption) return 'correct';
  if (active) return 'incorrect-selected';
  return 'neutral';
}
