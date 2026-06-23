import { lazy, Suspense } from 'react';
import type { Course } from '../../types';

const FlashcardTab = lazy(() => import('../FlashcardTab'));
const PteFlashcardTab = lazy(() => import('../PteFlashcardTab'));

interface FlashcardGridProps {
  course: Course;
}

export default function FlashcardGrid({ course }: FlashcardGridProps) {
  return (
    <div className="animate-fade-in-up">
      <Suspense
        fallback={
          <div className="course-card-glass rounded-[1.5rem] py-12 text-center text-slate-500">
            <div className="w-6 h-6 mx-auto rounded-full border-2 border-navy-500 border-t-gold animate-spin mb-3" />
            Memuat flashcard...
          </div>
        }
      >
        {course.code === 'EKT109' ? <PteFlashcardTab /> : <FlashcardTab course={course} />}
      </Suspense>
    </div>
  );
}
