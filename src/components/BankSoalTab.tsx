// Wrapper lazy: bank soal esai/kasus. AKBI dan AKM I memakai paket praktik UTS/UAS terpisah.
import EssayBank from './EssayBank';
import { getBankSoal, getBankSoalSets } from '../data/banksoal/nonPte';
import { hasQuiz } from '../data/quizzes';
import QuizView from './QuizView';
import type { Course } from '../types';

export default function BankSoalTab({ course }: { course: Course }) {
  if (course.code === 'AKM201' || course.code === 'AKK201' || course.code === 'PJK201') {
    const sets = getBankSoalSets(course.code);
    const total = sets.reduce((sum, set) => sum + set.items.length, 0);

    if (total === 0) {
      return <div className="text-center py-16 text-slate-500 animate-fade-in-up">Bank soal praktik belum tersedia.</div>;
    }

    return (
      <div className="space-y-12">
        <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
          <p className="font-bold text-gold">{course.code === 'AKM201' ? 'Bank Soal AKBI khusus esai praktik.' : course.code === 'AKK201' ? 'Bank Soal AKM I berbasis praktik financial accounting.' : 'Bank Soal Perpajakan I Pra-UAS.'}</p>
          <p>{course.code === 'PJK201' ? 'Paket bank soal disusun dari materi kompilasi TM 8-14. Simulator UAS terpisah mengadaptasi pola latihan kating, tetapi substansi, angka, dan kuncinya telah diselaraskan dengan materi serta regulasi aktif.' : 'Bagian ini dipisah menjadi UTS untuk TM 1-7 dan UAS untuk TM 8-14. Fokusnya laporan, jurnal, schedule, hitungan, dan kasus; latihan ringkas interaktif berada di tab Kuis Interaktif.'}</p>
        </div>
        {sets.map((set) => (
          <EssayBank key={set.id} title={set.label} items={set.items} />
        ))}
      </div>
    );
  }

  const bank = getBankSoal(course.code);
  const mcq = hasQuiz(course.code);
  if (!mcq && bank.length === 0) {
    return <div className="text-center py-16 text-slate-500 animate-fade-in-up">Bank soal untuk mata kuliah ini belum tersedia.</div>;
  }
  return (
    <div className="space-y-12">
      {mcq && <QuizView course={course} mode="practice" />}
      {bank.length > 0 && <EssayBank items={bank} />}
    </div>
  );
}
