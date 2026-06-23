// =============================================================
// src/components/QuizView.tsx
// Kuis interaktif: pilihan, multi-select, isian angka laporan,
// dan pencocokan akun/kategori. Batch UI/UX 5 memoles ruang kerja
// agar lebih nyaman dibaca dan dikerjakan tanpa mengubah isi soal.
// =============================================================
import { useEffect, useMemo, useRef, useState } from 'react';
import { Award, BarChart3, Check, ClipboardList, Clock, FileText, Lightbulb, Link2, ListChecks, RotateCcw, Target, X } from 'lucide-react';
import { getQuizSets } from '../data/quizzes';
import type { Course, QuizQuestion } from '../types';
import { getQuizDatasetFingerprint, isQuizResponseCorrect, normalizeQuizNumber } from '../lib/quizExamIntegrity';
import { getExamSessionKey, readStoredExamSession, saveStoredExamSession, clearLegacyExamSessions } from '../data/quizSession';
import { renderText } from './course/MarkdownContent';

interface QuizViewProps {
  course: Course;
  mode: 'exam' | 'practice';
  quizSetsOverride?: QuizSet[];
  selectedSetId?: string;
  onSelectedSetIdChange?: (setId: string) => void;
}

export interface QuizSet {
  id: string;
  label: string;
  items: QuizQuestion[];
}

const LETTER = ['A', 'B', 'C', 'D', 'E'];
const DEFAULT_EXAM_DURATION_SECONDS = 90 * 60;
const AKBI_EXAM_DURATION_SECONDS = 90 * 60;

function formatTimeLeft(totalSeconds: number): string {
  const safeSeconds = Math.max(0, totalSeconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':');
}

function getExamDurationSeconds(courseCode: string, setId: string): number {
  if (courseCode === 'AKM201' && ['uts', 'uas'].includes(setId)) return AKBI_EXAM_DURATION_SECONDS;
  return DEFAULT_EXAM_DURATION_SECONDS;
}

function formatExamDurationLabel(totalSeconds: number): string {
  const minutes = Math.round(totalSeconds / 60);
  if (minutes % 60 === 0) return `${minutes / 60} Jam`;
  if (minutes > 60) return `${minutes} Menit`;
  return `${minutes} Menit`;
}

function formatExamDurationText(totalSeconds: number): string {
  return formatExamDurationLabel(totalSeconds).toLowerCase();
}

function formatAmount(value: number, prefix?: string): string {
  const formatted = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(value);
  return prefix ? `${prefix} ${formatted}` : formatted;
}

function kindLabel(q: QuizQuestion): string {
  if (!q.kind || q.kind === 'mcq') return 'Pilihan';
  if (q.kind === 'multi-select') return 'Pilih banyak';
  if (q.kind === 'report-fill') return 'Isian angka';
  if (q.kind === 'account-match') return 'Matching';
  return 'Urutan proses';
}

function kindIcon(q: QuizQuestion) {
  if (!q.kind || q.kind === 'mcq') return <Target size={14} />;
  if (q.kind === 'multi-select') return <ListChecks size={14} />;
  if (q.kind === 'report-fill') return <FileText size={14} />;
  if (q.kind === 'account-match') return <Link2 size={14} />;
  return <ListChecks size={14} />;
}

function diagnosticAdvice(pct: number): string {
  if (pct >= 85) return 'Kuat. Pertahankan akurasi dan kecepatan hitung.';
  if (pct >= 70) return 'Cukup. Ulangi satu-dua pola yang masih salah sebelum simulasi penuh.';
  if (pct >= 50) return 'Belum stabil. Prioritaskan formula sheet dan builder TM 14 pada topik ini.';
  return 'Perlu remediasi. Baca ulang materi inti, lalu kerjakan bank soal topik ini sebelum simulasi.';
}

function QuestionFrame({
  index,
  question,
  children,
  status,
  marked,
  allowMark,
  onToggleMark,
}: {
  index: number;
  question: QuizQuestion;
  children: React.ReactNode;
  status?: 'correct' | 'wrong' | 'neutral';
  marked?: boolean;
  allowMark?: boolean;
  onToggleMark?: () => void;
}) {
  const statusClass = status === 'correct'
    ? 'border-emerald-500/38 bg-emerald-500/6'
    : status === 'wrong'
      ? 'border-red-500/36 bg-red-500/6'
      : 'border-navy-500/70 bg-navy-800/72';

  return (
    <article id={`quiz-question-${index + 1}`} data-testid="quiz-question-card" data-question-id={question.id ?? ''} className={`quiz-question-card scroll-mt-24 overflow-hidden rounded-[1.35rem] border ${statusClass} shadow-sm`}>
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/5 bg-gradient-to-r from-white/[0.04] to-transparent px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-sm font-black text-gold">{index + 1}</div>
          <div className="min-w-0 text-[15px] font-semibold leading-7 text-slate-100 md:text-base [&>p]:mb-0">{renderText(question.q)}</div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {allowMark && (
            <button
              type="button"
              data-testid={`quiz-mark-${index + 1}`}
              onClick={onToggleMark}
              aria-pressed={Boolean(marked)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] transition-all ${
                marked
                  ? 'border-violet-400 bg-violet-500/15 text-violet-200'
                  : 'border-navy-500 bg-navy-900/65 text-slate-500 dark:text-slate-400 hover:border-violet-400/70 hover:text-violet-200'
              }`}
            >
              <span aria-hidden="true">⚑</span> {marked ? 'Ditandai' : 'Tandai'}
            </button>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-500 bg-navy-900/65 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            {kindIcon(question)} {kindLabel(question)}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5">
        {question.svg && (
          <figure data-testid={`quiz-graph-${question.id ?? index + 1}`} className="mb-5 rounded-2xl border border-navy-500/70 bg-white dark:bg-navy-950/70 p-3">
            <div className="mx-auto max-w-2xl overflow-x-auto" dangerouslySetInnerHTML={{ __html: question.svg }} />
            {question.altText && <figcaption className="mt-2 text-xs leading-5 text-slate-500">{question.altText}</figcaption>}
          </figure>
        )}
        {children}
      </div>
    </article>
  );
}

function Explanation({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="mt-4 flex gap-3 rounded-2xl border border-gold/20 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
      <Lightbulb size={17} className="mt-0.5 shrink-0 text-gold" />
      <div><span className="font-black text-gold">Pembahasan: </span>{renderText(text)}</div>
    </div>
  );
}

export default function QuizView({
  course,
  mode,
  quizSetsOverride,
  selectedSetId,
  onSelectedSetIdChange,
}: QuizViewProps) {
  const registeredQuizSets = useMemo(() => getQuizSets(course.code), [course.code]);
  const quizSets = quizSetsOverride ?? registeredQuizSets;
  const defaultSetId = quizSets[0]?.id ?? 'all';
  const [activeSetId, setActiveSetId] = useState<string>(defaultSetId);
  const validControlledSetId = selectedSetId !== undefined && quizSets.some((set) => set.id === selectedSetId)
    ? selectedSetId
    : undefined;
  const effectiveSetId = validControlledSetId ?? activeSetId;
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [fillAnswers, setFillAnswers] = useState<Record<string, string>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [multiAnswers, setMultiAnswers] = useState<Record<string, number[]>>({});
  const [orderingAnswers, setOrderingAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(DEFAULT_EXAM_DURATION_SECONDS);
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [examDeadlineMs, setExamDeadlineMs] = useState<number | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const skipNextSessionPersist = useRef(false);
  const examDurationSeconds = getExamDurationSeconds(course.code, effectiveSetId);
  const examDurationLabel = formatExamDurationLabel(examDurationSeconds);
  const examDurationText = formatExamDurationText(examDurationSeconds);


  useEffect(() => {
    setActiveSetId(defaultSetId);
    setPicks({});
    setFillAnswers({});
    setMatchAnswers({});
    setMultiAnswers({});
    setOrderingAnswers({});
    setMarkedForReview({});
    setSubmitted(false);
    setTimeLeftSeconds(examDurationSeconds);
    setAutoSubmitted(false);
    setExamStarted(false);
    setExamDeadlineMs(null);
    setReviewFilter('all');
  }, [course.code, quizSets, defaultSetId, examDurationSeconds]);

  const activeSet = quizSets.find((set) => set.id === effectiveSetId) ?? quizSets[0];
  const questions = activeSet?.items ?? [];
  const examDatasetFingerprint = useMemo(
    () => getQuizDatasetFingerprint(activeSet?.items ?? []),
    [activeSet],
  );
  const hasSplitSets = quizSets.length > 1;
  const isTimedExam = mode === 'exam';
  const examTitle = mode === 'exam' ? `Simulasi Ujian ${examDurationLabel}` : 'Kuis Interaktif';
  const examLead = mode === 'exam'
    ? 'Kerjakan set ini sebagai simulasi ujian. Timer akan dimulai setelah Anda menekan tombol mulai.'
    : 'Pilih jawaban untuk melihat koreksi dan pembahasan tiap soal. Gunakan mode ini untuk mengulang konsep sebelum masuk simulasi.';
  const examSessionKey = getExamSessionKey(course.code, effectiveSetId, examDurationSeconds);
  const timeProgressPct = Math.round((timeLeftSeconds / examDurationSeconds) * 100);
  const isTimeWarning = isTimedExam && timeLeftSeconds <= 30 * 60;
  const isTimeUrgent = isTimedExam && timeLeftSeconds <= 10 * 60;
  const timerPanelClass = isTimeUrgent
    ? 'border-red-500/45 bg-red-500/10 text-red-200'
    : isTimeWarning
      ? 'border-amber-500/45 bg-amber-500/10 text-amber-200'
      : 'border-gold/25 bg-gold/10 text-gold';

  useEffect(() => {
    if (mode !== 'exam') {
      setTimeLeftSeconds(examDurationSeconds);
      setAutoSubmitted(false);
      setExamStarted(false);
      setExamDeadlineMs(null);
      setReviewFilter('all');
      return;
    }

    clearLegacyExamSessions(course.code, effectiveSetId, examDurationSeconds);
    const stored = readStoredExamSession(examSessionKey, examDatasetFingerprint);
    skipNextSessionPersist.current = true;

    if (!stored) {
      setPicks({});
      setFillAnswers({});
      setMatchAnswers({});
      setMultiAnswers({});
      setOrderingAnswers({});
      setMarkedForReview({});
      setSubmitted(false);
      setTimeLeftSeconds(examDurationSeconds);
      setAutoSubmitted(false);
      setExamStarted(false);
      setExamDeadlineMs(null);
      setReviewFilter('all');
      return;
    }

    const restoredTimeLeft = stored.examStarted && stored.examDeadlineMs !== null
      ? Math.max(0, Math.ceil((stored.examDeadlineMs - Date.now()) / 1000))
      : examDurationSeconds;
    const shouldAutoSubmitAfterRefresh = stored.examStarted && !stored.submitted && restoredTimeLeft <= 0;

    const restoredSubmitted = stored.submitted || shouldAutoSubmitAfterRefresh;
    const restoredAutoSubmitted = stored.autoSubmitted || shouldAutoSubmitAfterRefresh;

    if (shouldAutoSubmitAfterRefresh) {
      saveStoredExamSession(examSessionKey, {
        ...stored,
        submitted: true,
        autoSubmitted: true,
        datasetFingerprint: examDatasetFingerprint,
        savedAt: Date.now(),
      });
    }

    setPicks(stored.picks);
    setFillAnswers(stored.fillAnswers);
    setMatchAnswers(stored.matchAnswers);
    setMultiAnswers(stored.multiAnswers);
    setOrderingAnswers(stored.orderingAnswers);
    setMarkedForReview(stored.markedForReview);
    setSubmitted(restoredSubmitted);
    setAutoSubmitted(restoredAutoSubmitted);
    setExamStarted(stored.examStarted);
    setExamDeadlineMs(stored.examDeadlineMs);
    setTimeLeftSeconds(restoredTimeLeft);
    setReviewFilter('all');
  }, [effectiveSetId, course.code, mode, examSessionKey, examDurationSeconds, examDatasetFingerprint]);

  useEffect(() => {
    if (mode !== 'exam') return;
    if (skipNextSessionPersist.current) {
      skipNextSessionPersist.current = false;
      return;
    }
    saveStoredExamSession(examSessionKey, {
      picks,
      fillAnswers,
      matchAnswers,
      multiAnswers,
      orderingAnswers,
      markedForReview,
      submitted,
      autoSubmitted,
      examStarted,
      examDeadlineMs,
      datasetFingerprint: examDatasetFingerprint,
      savedAt: Date.now(),
    });
  }, [mode, examSessionKey, examDatasetFingerprint, picks, fillAnswers, matchAnswers, multiAnswers, orderingAnswers, markedForReview, submitted, autoSubmitted, examStarted, examDeadlineMs]);

  useEffect(() => {
    if (mode !== 'exam' || submitted || !examStarted || examDeadlineMs === null) return undefined;
    const syncTimer = () => {
      const nextTimeLeft = Math.max(0, Math.ceil((examDeadlineMs - Date.now()) / 1000));
      setTimeLeftSeconds(nextTimeLeft);
    };
    syncTimer();
    const timer = window.setInterval(syncTimer, 1000);
    return () => window.clearInterval(timer);
  }, [mode, submitted, examStarted, examDeadlineMs]);

  useEffect(() => {
    if (mode !== 'exam' || !examStarted || submitted || timeLeftSeconds > 0) return;
    setAutoSubmitted(true);
    setSubmitted(true);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode, examStarted, submitted, timeLeftSeconds]);

  if (questions.length === 0) {
    return (
      <div className="learning-surface py-16 text-center text-slate-500 animate-fade-in-up">
        <ClipboardList size={40} className="mx-auto mb-3 opacity-40" />
        <p>Kuis untuk mata kuliah ini belum tersedia.</p>
      </div>
    );
  }

  const questionKey = (qi: number, id: string) => `${effectiveSetId}-${qi}-${id}`;

  const questionAnswered = (q: QuizQuestion, i: number) => {
    if (!q.kind || q.kind === 'mcq') return picks[i] !== undefined;
    if (q.kind === 'multi-select') return (multiAnswers[questionKey(i, 'multi')] ?? []).length > 0;
    if (q.kind === 'report-fill') return q.blanks.every((blank) => (fillAnswers[questionKey(i, blank.id)] ?? '').trim() !== '');
    if (q.kind === 'account-match') return q.pairs.every((pair) => (matchAnswers[questionKey(i, pair.prompt)] ?? '').trim() !== '');
    if (q.kind === 'ordering') return q.correctOrder.every((_, position) => (orderingAnswers[questionKey(i, `order-${position}`)] ?? '').trim() !== '');
    return false;
  };

  const questionCorrect = (q: QuizQuestion, i: number) => isQuizResponseCorrect(q, {
    pick: picks[i],
    multi: multiAnswers[questionKey(i, 'multi')] ?? [],
    fills: q.kind === 'report-fill'
      ? Object.fromEntries(q.blanks.map((blank) => [blank.id, fillAnswers[questionKey(i, blank.id)] ?? '']))
      : undefined,
    matches: q.kind === 'account-match'
      ? Object.fromEntries(q.pairs.map((pair) => [pair.prompt, matchAnswers[questionKey(i, pair.prompt)] ?? '']))
      : undefined,
    ordering: q.kind === 'ordering'
      ? q.correctOrder.map((_, position) => orderingAnswers[questionKey(i, `order-${position}`)] ?? '')
      : undefined,
  });

  const answeredCount = questions.filter(questionAnswered).length;
  const score = questions.reduce((sum, q, i) => sum + (questionCorrect(q, i) ? 1 : 0), 0);
  const pct = Math.round((score / questions.length) * 100);
  const progressPct = Math.round((answeredCount / questions.length) * 100);
  const supportsReviewMarking = true;
  const supportsPreStartConcealment = true;
  const supportsReviewFilter = true;
  const examContentVisible = mode !== 'exam' || examStarted || submitted || !supportsPreStartConcealment;
  const correctCount = submitted ? questions.filter(questionCorrect).length : 0;
  const wrongCount = submitted ? questions.length - correctCount : 0;
  const markedCount = supportsReviewMarking ? Object.values(markedForReview).filter(Boolean).length : 0;
  const isDiagnosticSet = course.code === 'AKK201' && effectiveSetId === 'uas-diagnostic';
  const diagnosticTopics = Array.from(questions.reduce((map, q, i) => {
    const topic = q.topic ?? 'Umum';
    const current = map.get(topic) ?? { total: 0, correct: 0 };
    current.total += 1;
    if (questionCorrect(q, i)) current.correct += 1;
    map.set(topic, current);
    return map;
  }, new Map<string, { total: number; correct: number }>()));
  const missedSkills = questions
    .filter((q, i) => !questionCorrect(q, i))
    .map((q) => q.skill ?? q.topic)
    .filter((skill): skill is string => Boolean(skill))
    .filter((skill, index, list) => list.indexOf(skill) === index)
    .slice(0, 6);
  const isExamInteractionLocked = mode === 'exam' && (submitted || !examStarted);
  const hasActiveExamWork = mode === 'exam' && examStarted && !submitted;

  const revealed = (i: number) => (mode === 'practice' ? questionAnswered(questions[i], i) : submitted);

  const choose = (qi: number, oi: number) => {
    if (mode === 'practice' && picks[qi] !== undefined) return;
    if (isExamInteractionLocked) return;
    setPicks((p) => ({ ...p, [qi]: oi }));
  };

  const toggleMulti = (qi: number, oi: number) => {
    const scopedKey = questionKey(qi, 'multi');
    if (mode === 'practice' && (multiAnswers[scopedKey] ?? []).length > 0) return;
    if (isExamInteractionLocked) return;
    setMultiAnswers((prev) => {
      const current = prev[scopedKey] ?? [];
      const next = current.includes(oi) ? current.filter((item) => item !== oi) : [...current, oi];
      return { ...prev, [scopedKey]: next };
    });
  };

  const toggleMarked = (qi: number) => {
    if (!supportsReviewMarking) return;
    if (mode !== 'exam' || submitted || !examStarted) return;
    setMarkedForReview((prev) => ({ ...prev, [qi]: !prev[qi] }));
  };

  const reset = () => {
    if (hasActiveExamWork) {
      const confirmed = window.confirm(`Reset akan menghapus jawaban dan mengulang timer dari ${examDurationText}. Lanjutkan?`);
      if (!confirmed) return;
    }
    if (mode === 'exam') clearLegacyExamSessions(course.code, effectiveSetId, examDurationSeconds);
    setPicks({});
    setFillAnswers({});
    setMatchAnswers({});
    setMultiAnswers({});
    setOrderingAnswers({});
    setMarkedForReview({});
    setSubmitted(false);
    setTimeLeftSeconds(examDurationSeconds);
    setAutoSubmitted(false);
    setExamStarted(false);
    setExamDeadlineMs(null);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchSet = (id: string) => {
    if (id === effectiveSetId) return;
    if (hasActiveExamWork) {
      const confirmed = window.confirm('Pindah set akan menghapus jawaban dan timer pada set aktif. Lanjutkan?');
      if (!confirmed) return;
    }
    if (mode === 'exam') clearLegacyExamSessions(course.code, effectiveSetId, examDurationSeconds);
    if (selectedSetId === undefined) setActiveSetId(id);
    onSelectedSetIdChange?.(id);
    setPicks({});
    setFillAnswers({});
    setMatchAnswers({});
    setMultiAnswers({});
    setOrderingAnswers({});
    setMarkedForReview({});
    setSubmitted(false);
    setTimeLeftSeconds(examDurationSeconds);
    setAutoSubmitted(false);
    setExamStarted(false);
    setExamDeadlineMs(null);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startExam = () => {
    if (mode !== 'exam' || submitted || examStarted) return;
    setAutoSubmitted(false);
    setSubmitted(false);
    setTimeLeftSeconds(examDurationSeconds);
    setExamDeadlineMs(Date.now() + examDurationSeconds * 1000);
    setExamStarted(true);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToQuestion = (index: number) => {
    document.getElementById(`quiz-question-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const submitExam = () => {
    if (submitted) return;
    if (mode === 'exam' && !examStarted) {
      window.alert(`Klik Mulai Ujian terlebih dahulu agar timer ${examDurationText} berjalan.`);
      return;
    }
    if (answeredCount < questions.length) {
      const confirmed = window.confirm(`Masih ada ${questions.length - answeredCount} soal yang belum dijawab. Tetap submit ujian sekarang?`);
      if (!confirmed) return;
    }
    setAutoSubmitted(false);
    setSubmitted(true);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in-up">
      <section className="learning-surface mb-6 overflow-hidden">
        <div className="bg-calm-aurora px-5 py-5 md:px-6 md:py-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <div className="eyebrow mb-2">Ruang Latihan</div>
              <h3 className="flex items-center gap-3 font-display text-2xl font-black text-slate-100 md:text-3xl">
                {mode === 'exam' ? <Award className="text-gold" /> : <ClipboardList className="text-gold" />}
                {examTitle}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400">{examLead}</p>
            </div>
            <div className="grid min-w-[190px] gap-2 rounded-2xl border border-navy-500/70 bg-white dark:bg-navy-950/40 p-4 text-sm">
              <div className="flex justify-between gap-4"><span className="text-slate-500">Soal</span><span className="font-black text-slate-100">{questions.length}</span></div>
              <div className="flex justify-between gap-4"><span className="text-slate-500">Terjawab</span><span className="font-black text-gold">{answeredCount}</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-navy-700"><div className="h-full rounded-full bg-gold" style={{ width: `${progressPct}%` }} /></div>
              {mode === 'exam' && (
                <div className={`mt-2 rounded-xl border px-3 py-2 ${timerPanelClass}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.14em]"><Clock size={14} /> Timer</span>
                    <span className="font-mono text-lg font-black">{formatTimeLeft(timeLeftSeconds)}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white dark:bg-navy-950/45"><div className="h-full rounded-full bg-current" style={{ width: `${timeProgressPct}%` }} /></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {hasSplitSets && (
          <div className="border-t border-navy-500/65 px-4 py-3 md:px-5">
            <div className="flex flex-wrap gap-2">
              {quizSets.map((set) => (
                <button
                  key={set.id}
                  data-testid={`quiz-set-${set.id}`}
                  onClick={() => switchSet(set.id)}
                  className={`rounded-2xl border px-4 py-2 text-sm font-black transition-all ${
                    effectiveSetId === set.id
                      ? 'border-gold bg-gold text-navy-950 shadow-lg shadow-gold/15'
                      : 'border-navy-500 bg-navy-850/70 text-slate-300 hover:border-gold/50 hover:text-gold'
                  }`}
                >
                  {set.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {mode === 'exam' && (
        <div className={`mb-6 rounded-[1.25rem] border p-4 text-sm leading-7 ${timerPanelClass}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="flex items-center gap-2 font-black"><Clock size={17} /> Simulasi Ujian {examDurationLabel}</p>
              <p className="mt-1 text-slate-300">
                {examStarted || submitted
                  ? 'Timer sedang berjalan atau hasil sudah dikunci. Submit manual dapat dilakukan kapan saja; jika waktu habis, sistem otomatis mengunci jawaban dan menampilkan skor serta pembahasan.'
                  : `Timer belum berjalan. Tekan Mulai Ujian ketika sudah siap; setelah dimulai, jawaban bisa dikerjakan dan waktu dihitung mundur dari ${examDurationText}.`}
              </p>
            </div>
            {!examStarted && !submitted && (
              <button data-testid="quiz-start-exam" onClick={startExam} className="bg-gold hover:brightness-110 inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-black text-white">
                <Clock size={15} /> Mulai Ujian
              </button>
            )}
          </div>
        </div>
      )}

      {mode === 'exam' && !examStarted && !submitted && (
        <div className="mb-6 rounded-[1.25rem] border border-sky-500/30 bg-sky-500/10 p-4 text-sm leading-7 text-sky-800 dark:text-sky-100">
          <p className="font-black">Soal dikunci sampai ujian dimulai.</p>
          <p>Gunakan waktu sebelum mulai untuk memastikan jaringan, kalkulator, dan catatan latihan sudah siap. Setelah menekan Mulai Ujian, timer {examDurationText} berjalan.</p>
        </div>
      )}

      {mode === 'exam' && examContentVisible && (
        <section data-testid="quiz-navigation" className="mb-6 overflow-hidden rounded-[1.25rem] border border-navy-500/70 bg-navy-900/45">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-500/60 px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-black text-slate-100"><ListChecks size={16} className="text-gold" /> Navigasi Nomor Soal</p>
            <p className="text-xs font-semibold text-slate-500">{supportsReviewMarking ? 'Emas = dijawab, ungu = ditandai, abu-abu = kosong, hijau/merah muncul setelah submit.' : 'Emas = dijawab, abu-abu = kosong, hijau/merah muncul setelah submit.'}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 p-4 sm:grid-cols-10 md:grid-cols-12">
            {questions.map((q, i) => {
              const answered = questionAnswered(q, i);
              const correct = submitted && questionCorrect(q, i);
              const wrong = submitted && answered && !correct;
              const cls = correct
                ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300'
                : wrong
                  ? 'border-red-500 bg-red-500/15 text-red-300'
                  : supportsReviewMarking && markedForReview[i]
                    ? 'border-violet-400 bg-violet-500/15 text-violet-200'
                    : answered
                    ? 'border-gold bg-gold/12 text-gold'
                    : 'border-navy-500 bg-navy-850/75 text-slate-500 dark:text-slate-400 hover:border-gold/45 hover:text-gold';
              return (
                <button data-testid={`quiz-nav-${i + 1}`} key={`${effectiveSetId}-nav-${i}`} onClick={() => goToQuestion(i)} className={`relative rounded-xl border px-2 py-2 text-xs font-black transition-all ${cls}`}>
                  {i + 1}{supportsReviewMarking && markedForReview[i] && !submitted && <span aria-hidden="true" className="absolute right-0.5 top-0 text-[8px]">⚑</span>}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {course.code === 'AKM201' && (
        <div className="mb-6 rounded-[1.25rem] border border-gold/22 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
          <p className="font-black text-gold">Simulasi AKBI berbasis modul utama dan format ujian.</p>
          <p>{activeSet?.label ?? 'Simulasi AKBI'} menggunakan format ujian interaktif: pilihan, pilih beberapa jawaban, dropdown kategori, dan isian angka laporan. UTS mencakup TM 1-7, sedangkan UAS mencakup TM 8-14.</p>
        </div>
      )}

      {course.code === 'PJK201' && effectiveSetId === 'uts' && (
        <div className="mb-6 rounded-[1.25rem] border border-sky-500/30 bg-sky-500/10 p-4 text-sm leading-7 text-slate-300">
          <p className="font-black text-sky-700 dark:text-sky-200">Simulasi UTS Perpajakan I TM 1-7.</p>
          <p>Set ini berisi 70 soal objektif tanpa esai: pilihan ganda, benar-salah berbasis pilihan, pilih banyak, pencocokan, dan isian angka. Mayoritas soal menguji teori; bagian hitungan mencakup PPh progresif, PTKP, PPN, PPh Final UMKM, bunga, dan tax ratio.</p>
        </div>
      )}

      {course.code === 'PJK201' && effectiveSetId === 'uas' && (
        <div className="mb-6 rounded-[1.25rem] border border-gold/22 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
          <p className="font-black text-gold">Simulasi UAS Perpajakan I TM 8-14.</p>
          <p>{activeSet?.label ?? 'Simulasi Perpajakan I'} memakai timer 90 menit dan 80 soal objektif: pilihan/benar-salah, pilih banyak, pencocokan, serta isian angka. Pola soal mengadaptasi latihan kating, sedangkan materi, angka, dan kunci telah diselaraskan dengan regulasi aktif.</p>
        </div>
      )}

      {course.code === 'EKT109' && effectiveSetId === 'uts' && (
        <div className="mb-6 rounded-[1.25rem] border border-sky-500/30 bg-sky-500/10 p-4 text-sm leading-7 text-slate-300">
          <p className="font-black text-sky-700 dark:text-sky-200">Simulasi UTS Pengantar Teori Ekonomi TM 1-7.</p>
          <p>Set ini berisi 70 soal objektif selama 90 menit: pilihan, benar-salah, pilih banyak, pencocokan, urutan proses, isian angka, dan interpretasi grafik. Materi mencakup kelangkaan, sistem ekonomi, permintaan-penawaran, perilaku konsumen, elastisitas, kebijakan harga, pajak, serta surplus.</p>
        </div>
      )}

      {course.code === 'EKT109' && effectiveSetId === 'uas' && (
        <div className="mb-6 rounded-[1.25rem] border border-gold/22 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
          <p className="font-black text-gold">Simulasi UAS Pengantar Teori Ekonomi TM 8-14.</p>
          <p>Set ini berisi 80 soal objektif selama 90 menit: pilihan, benar-salah, pilih banyak, pencocokan, urutan proses, isian angka, dan interpretasi grafik. Materi mencakup pendapatan nasional, ekonomi tertutup, uang, ekonomi terbuka, inflasi-pengangguran, dan pertumbuhan.</p>
        </div>
      )}

      {mode === 'exam' && submitted && (
        <div className={`mb-6 overflow-hidden rounded-[1.35rem] border text-center shadow-sm ${pct >= 70 ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-amber-500/40 bg-amber-500/10'}`}>
          <div className="p-5">
            <p className="font-display text-4xl font-black text-slate-100">{score} / {questions.length}</p>
            <p className={`mt-1 text-sm font-bold ${pct >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
              Skor {pct}% — {pct >= 85
                ? 'sangat kuat.'
                : pct >= 70
                  ? course.code === 'PJK201' ? 'cukup, lanjutkan latihan konsep dan kasus.' : 'cukup, lanjutkan latihan hitungan.'
                  : course.code === 'PJK201' ? 'perlu ulang konsep, sanksi, prosedur, dan timeline.' : 'perlu ulang bagian rumus dan format laporan.'}
            </p>
          </div>
        </div>
      )}

      {mode === 'exam' && submitted && supportsReviewFilter && (
        <section data-testid="quiz-review-filter" className="mb-6 rounded-[1.25rem] border border-navy-500/70 bg-navy-900/45 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-black text-slate-100">Filter hasil jawaban</p>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Tampilkan seluruh soal atau fokus pada jawaban salah untuk remediasi.</p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter hasil jawaban">
              {([
                ['all', `Semua (${questions.length})`],
                ['wrong', `Salah (${wrongCount})`],
                ['correct', `Benar (${correctCount})`],
              ] as const).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  data-testid={`quiz-filter-${value}`}
                  aria-pressed={reviewFilter === value}
                  onClick={() => setReviewFilter(value)}
                  className={`rounded-xl border px-4 py-2 text-xs font-black transition-all ${
                    reviewFilter === value
                      ? 'border-gold bg-gold text-navy-950'
                      : 'border-navy-500 bg-navy-950/55 text-slate-300 hover:border-gold/50 hover:text-gold'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {mode === 'exam' && submitted && autoSubmitted && (
        <div className="mb-6 rounded-[1.25rem] border border-red-500/35 bg-red-500/10 p-4 text-sm leading-7 text-red-800 dark:text-red-100">
          <p className="font-black">Waktu ujian habis.</p>
          <p>Jawaban otomatis dikunci dan hasil dihitung berdasarkan jawaban yang sudah terisi.</p>
        </div>
      )}

      {mode === 'exam' && submitted && isDiagnosticSet && (
        <section className="mb-6 overflow-hidden rounded-[1.35rem] border border-sky-500/30 bg-sky-500/10 shadow-sm">
          <div className="border-b border-sky-500/20 bg-white/[0.03] px-5 py-4">
            <h4 className="flex items-center gap-2 font-display text-xl font-black text-slate-100"><BarChart3 className="text-sky-700 dark:text-sky-300" size={20} /> Diagnostik Topik UAS</h4>
            <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">Gunakan peta ini untuk menentukan topik remediasi sebelum masuk simulasi UAS penuh atau bank soal komprehensif. Topik dengan satu soal berfungsi sebagai screening cepat, bukan ukuran mastery penuh.</p>
          </div>
          <div className="grid gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
            {diagnosticTopics.map(([topic, stat]) => {
              const topicPct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div key={topic} className="rounded-2xl border border-navy-500/70 bg-navy-900/50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-black text-slate-100">{topic}</p>
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-black ${topicPct >= 70 ? 'border-emerald-500/40 text-emerald-300' : 'border-amber-500/40 text-amber-300'}`}>{stat.correct}/{stat.total}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy-700"><div className="h-full rounded-full bg-sky-300" style={{ width: `${topicPct}%` }} /></div>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{diagnosticAdvice(topicPct)}</p>
                  {stat.total === 1 && (
                    <p className="mt-2 rounded-xl border border-sky-500/20 bg-sky-500/10 px-3 py-2 text-[11px] font-semibold leading-5 text-sky-700 dark:text-sky-200">Screening cepat: topik ini diwakili 1 soal.</p>
                  )}
                </div>
              );
            })}
          </div>
          {missedSkills.length > 0 && (
            <div className="border-t border-sky-500/20 px-5 py-4 text-sm leading-7 text-slate-300">
              <span className="font-black text-sky-700 dark:text-sky-300">Prioritas ulang: </span>{missedSkills.join(' · ')}.
            </div>
          )}
        </section>
      )}

      {examContentVisible && (
        <div className="space-y-5">
          {questions.map((q, i) => {
            const show = revealed(i);
            if (submitted && supportsReviewFilter && reviewFilter === 'wrong' && questionCorrect(q, i)) return null;
            if (submitted && supportsReviewFilter && reviewFilter === 'correct' && !questionCorrect(q, i)) return null;
          const status = show ? (questionCorrect(q, i) ? 'correct' : 'wrong') : 'neutral';

          if (q.kind === 'multi-select') {
            const scopedKey = questionKey(i, 'multi');
            const selected = multiAnswers[scopedKey] ?? [];
            return (
              <QuestionFrame key={`${effectiveSetId}-${i}`} index={i} question={q} status={status} marked={markedForReview[i]} allowMark={supportsReviewMarking && mode === 'exam' && examStarted && !submitted} onToggleMark={() => toggleMarked(i)}>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-gold/90">Pilih semua jawaban yang benar</p>
                <div className="space-y-2.5">
                  {q.options.map((option, oi) => {
                    const isPicked = selected.includes(oi);
                    const isCorrect = q.answers.includes(oi);
                    let cls = 'border-navy-500 bg-navy-850/65 text-slate-300 hover:border-gold/40 hover:bg-navy-800/80';
                    if (show && isCorrect) cls = 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
                    if (show && isPicked && !isCorrect) cls = 'border-red-500 bg-red-500/10 text-red-300';
                    if (!show && isPicked) cls = 'border-gold bg-gold/10 text-gold';
                    return (
                      <button
                        key={oi}
                        onClick={() => toggleMulti(i, oi)}
                        disabled={isExamInteractionLocked || (mode === 'practice' && selected.length > 0)}
                        className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm leading-6 transition-all ${cls}`}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current/30 text-[11px] font-black">{LETTER[oi]}</span>
                        <span className="flex-1 [&>p]:mb-0">{renderText(option)}</span>
                        {show && isCorrect && <Check size={17} className="shrink-0" />}
                        {show && isPicked && !isCorrect && <X size={17} className="shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                <Explanation text={show ? q.explanation : undefined} />
              </QuestionFrame>
            );
          }

          if (q.kind === 'report-fill') {
            return (
              <QuestionFrame key={`${effectiveSetId}-${i}`} index={i} question={q} status={status} marked={markedForReview[i]} allowMark={supportsReviewMarking && mode === 'exam' && examStarted && !submitted} onToggleMark={() => toggleMarked(i)}>
                {q.instruction && <p className="mb-4 rounded-2xl border border-navy-500/60 bg-navy-900/50 p-3 text-sm leading-7 text-slate-300">{renderText(q.instruction)}</p>}
                {q.data && q.data.length > 0 && (
                  <div className="mb-4 rounded-2xl border border-gold/18 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-gold">Data Kasus</p>
                    <ul className="list-disc space-y-1 pl-5">
                      {q.data.map((line, dataIndex) => <li key={dataIndex}>{renderText(line)}</li>)}
                    </ul>
                  </div>
                )}
                <div className="grid gap-3 md:grid-cols-2">
                  {q.blanks.map((blank) => {
                    const scopedKey = questionKey(i, blank.id);
                    const actual = normalizeQuizNumber(fillAnswers[scopedKey] ?? '');
                    const correct = actual !== null && Math.abs(actual - blank.answer) <= (blank.tolerance ?? 0);
                    return (
                      <div key={blank.id} className="rounded-2xl border border-navy-500/70 bg-navy-900/45 p-3">
                        <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">{blank.label}</label>
                        <div className="flex items-center gap-2">
                          {blank.prefix && <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{blank.prefix}</span>}
                          <input
                            value={fillAnswers[scopedKey] ?? ''}
                            onChange={(event) => setFillAnswers((prev) => ({ ...prev, [scopedKey]: event.target.value }))}
                            disabled={isExamInteractionLocked}
                            placeholder="isi angka"
                            className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-right font-mono text-sm text-slate-100 outline-none ${
                              show ? (correct ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500 focus:border-gold'
                            }`}
                          />
                          {blank.suffix && <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{blank.suffix}</span>}
                          {show && correct && <Check size={17} className="shrink-0 text-emerald-400" />}
                          {show && !correct && <X size={17} className="shrink-0 text-red-400" />}
                        </div>
                        {show && !correct && <div className="mt-2 text-right text-xs text-red-300">Kunci: {formatAmount(blank.answer, blank.prefix)}{blank.suffix ? ` ${blank.suffix}` : ''}</div>}
                      </div>
                    );
                  })}
                </div>
                <Explanation text={show ? q.explanation : undefined} />
              </QuestionFrame>
            );
          }

          if (q.kind === 'account-match') {
            return (
              <QuestionFrame key={`${effectiveSetId}-${i}`} index={i} question={q} status={status} marked={markedForReview[i]} allowMark={supportsReviewMarking && mode === 'exam' && examStarted && !submitted} onToggleMark={() => toggleMarked(i)}>
                {q.instruction && <p className="mb-4 rounded-2xl border border-navy-500/60 bg-navy-900/50 p-3 text-sm leading-7 text-slate-300">{renderText(q.instruction)}</p>}
                <div className="space-y-3">
                  {q.pairs.map((pair, pairIndex) => {
                    const scopedKey = questionKey(i, pair.prompt);
                    const selected = matchAnswers[scopedKey] ?? '';
                    const correct = selected === pair.answer;
                    return (
                      <div key={pair.prompt} className="grid gap-3 rounded-2xl border border-navy-500/70 bg-navy-900/45 p-3 md:grid-cols-[1fr_300px] md:items-center">
                        <div className="text-sm leading-7 text-slate-300"><span className="mr-2 font-black text-gold">{pairIndex + 1}.</span>{renderText(pair.prompt)}</div>
                        <div className="flex items-center gap-2">
                          <select
                            value={selected}
                            onChange={(event) => setMatchAnswers((prev) => ({ ...prev, [scopedKey]: event.target.value }))}
                            disabled={isExamInteractionLocked}
                            className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-sm text-slate-100 outline-none ${
                              show ? (correct ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500 focus:border-gold'
                            }`}
                          >
                            <option value="">Pilih pasangan/kategori</option>
                            {q.choices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
                          </select>
                          {show && correct && <Check size={17} className="shrink-0 text-emerald-400" />}
                          {show && !correct && <X size={17} className="shrink-0 text-red-400" />}
                        </div>
                        {show && !correct && <div className="text-xs text-red-300 md:col-start-2">Kunci: {pair.answer}</div>}
                      </div>
                    );
                  })}
                </div>
                <Explanation text={show ? q.explanation : undefined} />
              </QuestionFrame>
            );
          }

          if (q.kind === 'ordering') {
            return (
              <QuestionFrame key={`${effectiveSetId}-${i}`} index={i} question={q} status={status} marked={markedForReview[i]} allowMark={supportsReviewMarking && mode === 'exam' && examStarted && !submitted} onToggleMark={() => toggleMarked(i)}>
                {q.instruction && <p className="mb-4 rounded-2xl border border-navy-500/60 bg-navy-900/50 p-3 text-sm leading-7 text-slate-300">{renderText(q.instruction)}</p>}
                <div className="space-y-3">
                  {q.correctOrder.map((correctItem, position) => {
                    const scopedKey = questionKey(i, `order-${position}`);
                    const selected = orderingAnswers[scopedKey] ?? '';
                    const correct = selected === correctItem;
                    return (
                      <div key={`${q.id ?? i}-order-${position}`} className="grid gap-3 rounded-2xl border border-navy-500/70 bg-navy-900/45 p-3 md:grid-cols-[120px_1fr] md:items-center">
                        <label className="text-xs font-black uppercase tracking-[0.14em] text-gold">Langkah {position + 1}</label>
                        <div className="flex items-center gap-2">
                          <select
                            data-testid={`quiz-order-${i + 1}-${position + 1}`}
                            value={selected}
                            onChange={(event) => setOrderingAnswers((prev) => ({ ...prev, [scopedKey]: event.target.value }))}
                            disabled={isExamInteractionLocked}
                            className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-sm text-slate-100 outline-none ${
                              show ? (correct ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500 focus:border-gold'
                            }`}
                          >
                            <option value="">Pilih tahap</option>
                            {q.items.map((item) => <option key={item} value={item}>{item}</option>)}
                          </select>
                          {show && correct && <Check size={17} className="shrink-0 text-emerald-400" />}
                          {show && !correct && <X size={17} className="shrink-0 text-red-400" />}
                        </div>
                        {show && !correct && <div className="text-xs text-red-300 md:col-start-2">Kunci: {correctItem}</div>}
                      </div>
                    );
                  })}
                </div>
                <Explanation text={show ? q.explanation : undefined} />
              </QuestionFrame>
            );
          }

          const picked = picks[i];
          return (
            <QuestionFrame key={`${effectiveSetId}-${i}`} index={i} question={q} status={status} marked={markedForReview[i]} allowMark={supportsReviewMarking && mode === 'exam' && examStarted && !submitted} onToggleMark={() => toggleMarked(i)}>
              <div className="space-y-2.5">
                {q.options.map((option, oi) => {
                  const isPicked = picked === oi;
                  const isCorrect = oi === q.answer;
                  let cls = 'border-navy-500 bg-navy-850/65 text-slate-300 hover:border-gold/40 hover:bg-navy-800/80';
                  if (show && isCorrect) cls = 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
                  if (show && isPicked && !isCorrect) cls = 'border-red-500 bg-red-500/10 text-red-300';
                  if (!show && isPicked) cls = 'border-gold bg-gold/10 text-gold';
                  return (
                    <button
                      key={oi}
                      onClick={() => choose(i, oi)}
                      disabled={isExamInteractionLocked || (mode === 'practice' && picked !== undefined)}
                      className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm leading-6 transition-all ${cls}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current/30 text-[11px] font-black">{LETTER[oi]}</span>
                      <span className="flex-1">{renderText(option)}</span>
                      {show && isCorrect && <Check size={17} className="shrink-0" />}
                      {show && isPicked && !isCorrect && <X size={17} className="shrink-0" />}
                    </button>
                  );
                })}
              </div>
              <Explanation text={show ? q.explanation : undefined} />
            </QuestionFrame>
          );
          })}
        </div>
      )}

      {mode === 'exam' && (
        <div data-testid="quiz-exam-summary" className="glass-sticky-action sticky bottom-4 z-20 mt-7 rounded-[1.35rem] p-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm font-semibold text-slate-300">
              <span>Terjawab <span className="text-gold">{answeredCount}</span> dari {questions.length} soal</span>
              {supportsReviewMarking && isTimedExam && markedCount > 0 && <span className="ml-0 mt-1 block text-violet-200 md:ml-4 md:mt-0 md:inline">Ditandai {markedCount}</span>}
              {isTimedExam && (
                <span className={`ml-0 mt-1 block font-mono text-base font-black md:ml-4 md:mt-0 md:inline ${isTimeUrgent ? 'text-red-300' : isTimeWarning ? 'text-amber-300' : 'text-gold'}`}>
                  Sisa waktu {formatTimeLeft(timeLeftSeconds)}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {isTimedExam && !examStarted && !submitted && (
                <button data-testid="quiz-start-exam-sticky" onClick={startExam} className="bg-gold hover:brightness-110 inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-black text-white">
                  <Clock size={15} /> Mulai Ujian
                </button>
              )}
              {(!supportsPreStartConcealment || examStarted || submitted) && (
                <>
                  <button data-testid="quiz-reset-exam" onClick={reset} className="bg-navy-800 hover:bg-navy-700 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-slate-100">
                    <RotateCcw size={15} /> Reset
                  </button>
                  <button
                    data-testid="quiz-submit-exam"
                    onClick={submitExam}
                    disabled={submitted || (isTimedExam && !examStarted)}
                    title={submitted ? 'Hasil sudah dikunci.' : isTimedExam && !examStarted ? 'Klik Mulai Ujian terlebih dahulu.' : answeredCount < questions.length ? 'Masih ada soal kosong; submit tetap bisa dilakukan dengan konfirmasi.' : 'Submit ujian dan lihat hasil'}
                    className={`bg-gold hover:brightness-110 inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-black text-white ${submitted || (isTimedExam && !examStarted) ? 'cursor-not-allowed opacity-55' : ''}`}
                  >
                    <Check size={15} /> {submitted ? 'Hasil Terkunci' : 'Submit Ujian'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
