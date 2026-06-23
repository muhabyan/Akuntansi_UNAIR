import { lazy, Suspense } from 'react';
import type { Course } from '../../types';

const BankSoalTab = lazy(() => import('../BankSoalTab'));
const PteBankSoalTab = lazy(() => import('../PteBankSoalTab'));

interface BankQuestionListProps {
  course: Course;
}

export default function BankQuestionList({ course }: BankQuestionListProps) {
  return (
    <div className="animate-fade-in-up">
      <Suspense
        fallback={
          <div className="text-center py-12 text-slate-500">
            <div className="w-6 h-6 mx-auto rounded-full border-2 border-navy-500 border-t-gold animate-spin mb-3" />
            Memuat bank soal...
          </div>
        }
      >
        {course.code === 'EKT109' ? <PteBankSoalTab /> : <BankSoalTab course={course} />}
      </Suspense>
    </div>
  );
}
