import FlashcardContent from './FlashcardContent';
import AdvancedFlashcardTab from './AdvancedFlashcardTab';
import { getFlashcards } from '../data/flashcards/registry';
import type { Course } from '../types';

export default function FlashcardTab({ course }: { course: Course }) {
  const cards = getFlashcards(course.code);
  if (cards.length === 0) return <FlashcardContent course={course} />;
  
  return <AdvancedFlashcardTab course={course} cards={cards} />;
}
