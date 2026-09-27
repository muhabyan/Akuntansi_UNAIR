import { lazy, Suspense } from 'react';
import type { Course } from '../../types';

const PteSimulatorTab = lazy(() => import('../PteSimulatorTab'));

export default function PteQuizCard({ course }: { course: Course }) {
  return (
    <div className="animate-fade-in-up">
      <Suspense
        fallback={
          <div className="rounded-lg border border-line bg-surface py-12 text-center text-muted">
            <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-line border-t-accent" />
            Memuat simulator PTE...
          </div>
        }
      >
        <PteSimulatorTab course={course} />
      </Suspense>
    </div>
  );
}
