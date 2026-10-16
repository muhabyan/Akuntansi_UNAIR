import { useMemo, useState } from 'react';
import type { Reading } from '../../types';
import { collectSelfChecks, attemptKey } from '../../lib/learningJournal';
import { useLearningJournal } from '../../hooks/useLearningJournal';
import { useLearningScope } from './LearningScope';
import { SelfCheckCard } from './LayeredBlocks';
import CourseBlockCard from './CourseBlockCard';
export function QuickPracticeLink() {
  const scope = useLearningScope();
  if (!scope || !Object.keys(scope.anchors).length || scope.tm <= 0 || scope.tm > 40) return null;
  return <button type="button" onClick={() => document.getElementById('reading-quick-practice')?.scrollIntoView({ behavior: 'auto', block: 'start' })} className="mb-5 inline-flex min-h-11 items-center rounded-lg border border-blue-200 px-4 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:text-blue-300">Latihan singkat tanpa timer</button>;
}
export default function QuickPractice({ reading }: { reading: Reading }) {
  const scope = useLearningScope();
  const journal = useLearningJournal();
  const checks = useMemo(() => collectSelfChecks(reading.blocks), [reading]);
  const [session, setSession] = useState<string[]>([]);
  if (!scope || !checks.length || scope.tm <= 0 || scope.tm > 40) return null;
  const entries = checks.map(({ block }) => ({ block, saved: journal.attempts[attemptKey(scope.courseCode, scope.tm, scope.version, block.question)] }));
  const needsReview = entries.filter(entry => entry.saved?.rating === 'review');
  const begin = (reviewOnly = false) => setSession((reviewOnly ? needsReview : [...entries].sort((a, b) => Number(b.saved?.rating === 'review') - Number(a.saved?.rating === 'review'))).slice(0, 3).map(entry => entry.block.question));
  const jump = (question: string) => { const id = scope.anchors[question]; if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' }); };
  return <section id="reading-quick-practice" className="mt-10 scroll-mt-28 border-t border-gray-200 pt-6 dark:border-gray-700" aria-label="Latihan singkat dan tindak lanjut">
    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Coba jelaskan tanpa catatan</h2>
    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Ambil hingga tiga pertanyaan dari uji pemahaman materi ini. Bandingkan dengan contoh, lalu tentukan bagian yang perlu kamu ulang. Ini latihan mandiri tanpa timer dan tanpa nilai otomatis.</p>
    <div className="my-3 flex flex-wrap gap-2"><button type="button" onClick={() => begin()} className="min-h-11 rounded-lg bg-blue-600 px-4 text-sm font-bold text-white">Mulai latihan singkat ({Math.min(checks.length, 3)} soal)</button>{needsReview.length > 0 && <button type="button" onClick={() => begin(true)} className="min-h-11 rounded-lg border px-4 text-sm font-semibold">Ulangi yang masih sulit ({needsReview.length})</button>}{session.length > 0 && <button type="button" onClick={() => setSession([])} className="min-h-11 px-3 text-sm font-semibold">Tutup latihan</button>}</div>
    {session.map(question => {
      const block = checks.find(check => check.block.question === question)!.block;
      return <div key={question} className="my-5"><SelfCheckCard question={block.question} signal={block.signal}>{block.answer.map((answer, index) => <CourseBlockCard key={index} block={answer} enableEditorialReading />)}</SelfCheckCard>{scope.anchors[question] && <button type="button" onClick={() => jump(question)} className="min-h-11 px-2 text-sm font-semibold text-blue-700 dark:text-blue-300">Buka bagian asal di materi</button>}</div>;
    })}
    {needsReview.length > 0 && <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">Catatanmu menandai {needsReview.length} pertanyaan untuk diulang. Gunakan latihan ulang dan buka kembali bagian terkait sebelum lanjut.</p>}
  </section>;
}
