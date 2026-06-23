import type { StudyCard } from '../types';

export const FLASHCARD_INTERACTIVE_SELECTOR = [
  'button',
  'a',
  'input',
  'textarea',
  'select',
  'summary',
  '[contenteditable="true"]',
  '[role="button"]',
  '[role="link"]',
  '[role="checkbox"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="radio"]',
  '[role="switch"]',
  '[role="tab"]',
].join(', ');

type ClosestCapableTarget = EventTarget & {
  closest?: (selector: string) => Element | null;
};

export function isFlashcardInteractiveTarget(target: EventTarget | null): boolean {
  const candidate = target as ClosestCapableTarget | null;
  return Boolean(candidate?.closest?.(FLASHCARD_INTERACTIVE_SELECTOR));
}

export function getFlashcardAccessibleLabel(
  card: StudyCard,
  index: number,
  totalCards: number,
  isFlipped: boolean,
): string {
  const side = isFlipped ? 'Jawaban' : 'Pertanyaan';
  const content = isFlipped ? card.back : card.front;
  return `Kartu ${index + 1} dari ${totalCards}. ${side}: ${content}`;
}

export function getFlashcardFlipInstruction(isFlipped: boolean): string {
  return isFlipped
    ? 'Jawaban sedang terbuka. Aktifkan kartu untuk kembali ke pertanyaan.'
    : 'Pertanyaan sedang terbuka. Aktifkan kartu untuk menampilkan jawaban.';
}

export function getFlashcardAnnouncement(
  card: StudyCard,
  index: number,
  totalCards: number,
  isFlipped: boolean,
  prefix?: string,
): string {
  const label = getFlashcardAccessibleLabel(card, index, totalCards, isFlipped);
  const instruction = getFlashcardFlipInstruction(isFlipped);
  return [prefix, label, instruction].filter(Boolean).join(' ');
}

export function getNextFlashcardFlipState(current: boolean): boolean {
  return !current;
}
