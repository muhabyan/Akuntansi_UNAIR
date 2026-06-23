import { BookOpenCheck } from 'lucide-react';
import FlashcardDeck from './FlashcardDeck';
import FlashcardContent from './FlashcardContent';
import { getNonPteFlashcards } from '../data/flashcards/nonPte';
import type { Course } from '../types';

export default function FlashcardTab({ course }: { course: Course }) {
  const cards = getNonPteFlashcards(course.code);
  if (cards.length === 0) return <FlashcardContent course={course} />;
  
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 px-5 py-5 md:px-6 md:py-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-3xl">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Flashcard TM 1–14</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <BookOpenCheck size={22} />
                </span>
                Flashcard {course.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                Gunakan flashcard ini untuk mengulang dan mengingat kembali konsep-konsep penting.
                Penyaringan per topik untuk mata kuliah ini akan segera tersedia.
              </p>
            </div>

            <div className="grid min-w-[220px] gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-4 text-sm shadow-sm">
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Total kartu</span><span className="font-bold text-gray-900 dark:text-white">{cards.length}</span></div>
            </div>
          </div>
        </div>

        <FlashcardDeck cards={cards} />
      </section>
    </div>
  );
}
