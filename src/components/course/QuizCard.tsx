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
          <div className="rounded-lg border border-line bg-surface py-12 text-center text-muted">
            <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-line border-t-accent" />
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
