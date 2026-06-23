import { lazy, Suspense } from 'react';
import type { Course } from '../../types';

const PteSimulatorTab = lazy(() => import('../PteSimulatorTab'));

export default function PteQuizCard({ course }: { course: Course }) {
  return (
    <div className="animate-fade-in-up">
      <Suspense
        fallback={
          <div className="course-card-glass rounded-[1.5rem] py-12 text-center text-slate-500">
            <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-navy-500 border-t-gold" />
            Memuat simulator PTE...
          </div>
        }
      >
        <PteSimulatorTab course={course} />
      </Suspense>
    </div>
  );
}
