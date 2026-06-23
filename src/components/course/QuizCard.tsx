import { lazy, Suspense } from 'react';
import type { Course } from '../../types';

const QuizView = lazy(() => import('../QuizView'));

interface QuizCardProps {
  course: Course;
  selectedSetId?: string;
  onSelectedSetIdChange?: (setId: string) => void;
}

export default function QuizCard({ course, selectedSetId, onSelectedSetIdChange }: QuizCardProps) {
  return (
    <div className="animate-fade-in-up">
      <Suspense
        fallback={
          <div className="course-card-glass rounded-[1.5rem] py-12 text-center text-slate-500">
            <div className="w-6 h-6 mx-auto rounded-full border-2 border-navy-500 border-t-gold animate-spin mb-3" />
            Memuat kuis...
          </div>
        }
      >
        <QuizView
          course={course}
          mode="exam"
          selectedSetId={selectedSetId}
          onSelectedSetIdChange={onSelectedSetIdChange}
        />
      </Suspense>
    </div>
  );
}
