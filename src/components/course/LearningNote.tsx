import { useState } from 'react';
import { useLearningScope } from './LearningScope';
import { useLearningJournal } from '../../hooks/useLearningJournal';
import { attemptKey, readLearningJournal, writeLearningJournal, type LearningRating } from '../../lib/learningJournal';
export default function LearningNote({ question, draft, revealed, onRestore }: { question: string; draft: string; revealed: boolean; onRestore: (text: string) => void }) {
  const scope = useLearningScope();
  const journal = useLearningJournal();
  const [status, setStatus] = useState('');
  if (!scope || !question.trim() || scope.tm > 40 || scope.tm <= 0) return null;
  const key = attemptKey(scope.courseCode, scope.tm, scope.version, question);
  const saved = journal.attempts[key];
  const save = (rating: LearningRating) => {
    const current = readLearningJournal();
    const ok = writeLearningJournal({ ...current, attempts: { ...current.attempts, [key]: { courseCode: scope.courseCode, tm: scope.tm, question, draft: draft.slice(0, 4000), rating, sectionId: scope.anchors[question] ?? '', updatedAt: Date.now() } } });
    setStatus(ok ? 'Catatan tersimpan di browser ini.' : 'Catatan belum tersimpan. Penyimpanan browser mungkin penuh atau diblokir; salin jawabanmu sebelum meninggalkan halaman.');
  };
  return <div data-learning-note className="mt-3 pt-3 text-xs leading-5">
    <p className="text-gray-600 dark:text-gray-300">Catatan belajar opsional, disimpan di browser ini. Penilaian diri terpisah dari centang materi dan nilai ujian.</p>
    <div className="mt-2 flex flex-wrap gap-2">
      <button type="button" disabled={!draft.trim()} onClick={() => save('unreviewed')} className="min-h-11 rounded-lg border px-3 font-semibold disabled:opacity-40">Simpan catatan</button>
      {revealed && <><button type="button" onClick={() => save('review')} className="min-h-11 rounded-lg border px-3 font-semibold">Perlu diulang</button><button type="button" onClick={() => save('understood')} className="min-h-11 rounded-lg border px-3 font-semibold">Sudah bisa menjelaskan</button></>}
    </div>
    {saved && <p className="mt-2 text-gray-600 dark:text-gray-300">Status tersimpan: {saved.rating === 'review' ? 'perlu diulang' : saved.rating === 'understood' ? 'sudah bisa menjelaskan (penilaian diri)' : 'belum ditinjau'}.</p>}
    {saved && <details className="mt-1 text-gray-600 dark:text-gray-300"><summary className="min-h-11 cursor-pointer py-3 font-semibold">Kelola catatan tersimpan</summary><div className="flex flex-wrap gap-2">
      <button type="button" onClick={() => onRestore(saved.draft)} className="min-h-11 rounded-lg border px-3 font-semibold">Muat catatan tersimpan</button>
      <button type="button" onClick={() => { const current = readLearningJournal(); delete current.attempts[key]; setStatus(writeLearningJournal(current) ? 'Catatan dihapus dari browser ini.' : 'Catatan belum dapat dihapus dari penyimpanan browser.'); }} className="min-h-11 rounded-lg border px-3 font-semibold">Hapus catatan ini</button>
    </div></details>}
    <p role="status" className="mt-1">{status}</p>
  </div>;
}
