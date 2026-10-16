import { SEMESTERS } from '../data/courseData';
import { useLearningJournal } from '../hooks/useLearningJournal';
export default function LearningResume({ onOpen }: { onOpen?: (courseCode: string, activityId: string) => void }) {
  const { visits } = useLearningJournal();
  if (!onOpen) return null;
  const courses = SEMESTERS.flatMap(s => s.groups.flatMap(g => g.courses));
  const recent = visits.map(visit => ({ visit, course: courses.find(c => c.code === visit.courseCode) })).filter(({ visit, course }) => course && [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])].some(m => m.tm === visit.tm)).slice(0, 2);
  if (!recent.length) return null;
  return <section className="mb-5 border-b border-gray-200 pb-5 dark:border-gray-700" aria-label="Bacaan terakhir">
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Bacaan terakhir</h3>
    <p className="my-2 text-sm text-gray-600 dark:text-gray-300">Buka kembali materi yang terakhir kamu baca. Membuka materi tidak menandainya sebagai selesai.</p>
    <div className="space-y-2">{recent.map(({ visit, course }) => <button key={visit.courseCode} type="button" onClick={() => onOpen(visit.courseCode, `tm-${visit.tm}`)} className="flex min-h-12 w-full flex-wrap items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-sm dark:border-gray-700 dark:bg-gray-900"><span className="font-semibold">{course!.name} · TM {visit.tm}</span><span className="text-blue-700 dark:text-blue-300">Lanjut membaca</span></button>)}</div>
  </section>;
}
