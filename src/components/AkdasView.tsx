// =============================================================
// src/components/AkdasView.tsx
// Renderer khusus AKK106 (Akuntansi Keuangan Dasar) yang membaca
// struktur kaya dari src/data/akdas/akdasPraUTS.ts.
// Fokus: rendering, search, checklist (localStorage), quiz, flashcard,
// bank soal. Isi materi TIDAK diubah — hanya ditampilkan.
// =============================================================
import { useMemo, useState } from 'react';
import {
  ArrowLeft, Layers, Target, Search, Check, ChevronLeft, ChevronRight,
  Lightbulb, AlertTriangle, ListChecks,
  BookOpen, Calculator, FileText, GitBranch, X, Eye, EyeOff,
} from 'lucide-react';
import { akdasPraUTS } from '../data/akdas/akdasPraUTS';
import { useStudyProgress, materialKey } from '../hooks/useStudyProgress';
import type { Course } from '../types';

// ---- Tipe diturunkan dari data (hindari mismatch union literal) ----
type Meeting = (typeof akdasPraUTS.meetings)[number];
type QuizQ = Meeting['quiz'][number];
type Flash = Meeting['flashcards'][number];
type Bank = Meeting['bankQuestions'][number];
type Uts = typeof akdasPraUTS.utsPractice;

const CODE = akdasPraUTS.courseCode; // "AKK106"
const LETTER = ['A', 'B', 'C', 'D', 'E'];

// =============== sub-komponen kecil ===============
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] px-2 py-0.5 rounded bg-navy-900 border border-navy-600 text-slate-400">{children}</span>;
}

function ListBlock({ title, icon, items, variant = 'plain' }: {
  title: string; icon: React.ReactNode; items: string[]; variant?: 'plain' | 'ordered' | 'warning' | 'key';
}) {
  if (!items?.length) return null;
  const wrap =
    variant === 'warning' ? 'border-amber-500/40 bg-amber-500/5'
    : variant === 'key' ? 'border-gold/30 bg-gold/5'
    : 'border-navy-500 bg-navy-700';
  return (
    <section className={`border rounded-xl p-4 md:p-5 mb-5 ${wrap}`}>
      <h3 className="flex items-center gap-2 text-sm font-semibold text-gold uppercase tracking-wider mb-3">{icon} {title}</h3>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
            {variant === 'ordered'
              ? <span className="w-6 h-6 rounded-md bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
              : <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${variant === 'warning' ? 'bg-amber-400' : 'bg-gold'}`} />}
            <span className="pt-0.5">{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MiniQuiz({ quiz }: { quiz: QuizQ[] }) {
  const [picks, setPicks] = useState<Record<number, number>>({});
  if (!quiz?.length) return null;
  return (
    <div className="space-y-4">
      {quiz.map((q, i) => {
        const picked = picks[i];
        const show = picked !== undefined;
        return (
          <div key={i} className="bg-navy-800 border border-navy-500 rounded-xl p-4">
            <p className="font-medium text-slate-200 mb-3 flex gap-2"><span className="text-gold">{i + 1}.</span> {q.question}</p>
            <div className="space-y-2">
              {q.options.map((o: string, oi: number) => {
                const isP = picked === oi, isC = q.answerIndex === oi;
                let cls = 'border-navy-500 bg-navy-900 text-slate-300 hover:border-gold/40';
                if (show && isC) cls = 'border-emerald-500 bg-emerald-500/10 text-emerald-200';
                else if (show && isP && !isC) cls = 'border-red-500 bg-red-500/10 text-red-200';
                return (
                  <button key={oi} disabled={show} onClick={() => setPicks((p) => ({ ...p, [i]: oi }))}
                    className={`w-full text-left px-3 py-2 rounded-lg border text-sm flex items-start gap-2 transition-colors ${cls}`}>
                    <span className="font-bold shrink-0">{LETTER[oi]}</span><span className="flex-1">{o}</span>
                    {show && isC && <Check size={15} className="text-emerald-400 shrink-0" />}
                    {show && isP && !isC && <X size={15} className="text-red-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
            {show && q.explanation && (
              <p className="mt-3 text-sm text-slate-300 bg-navy-900 border border-navy-600 rounded-lg p-3">
                <span className="font-semibold text-gold">Pembahasan: </span>{q.explanation}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Flashcards({ cards }: { cards: Flash[] }) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  if (!cards?.length) return null;
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {cards.map((c, i) => {
        const f = flipped[i];
        return (
          <button key={i} onClick={() => setFlipped((p) => ({ ...p, [i]: !p[i] }))}
            className="text-left bg-navy-800 border border-navy-500 hover:border-gold/40 rounded-xl p-4 min-h-[120px] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-gold">{f ? 'Jawaban' : 'Pertanyaan'}</span>
              {f ? <EyeOff size={14} className="text-slate-500" /> : <Eye size={14} className="text-slate-500" />}
            </div>
            <p className={`text-sm leading-relaxed ${f ? 'text-slate-300' : 'text-slate-100 font-medium'}`}>{f ? c.back : c.front}</p>
          </button>
        );
      })}
    </div>
  );
}

function BankList({ items }: { items: Bank[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  if (!items?.length) return null;
  return (
    <div className="space-y-2">
      {items.map((b, i) => (
        <div key={i} className="bg-navy-800 border border-navy-500 rounded-xl overflow-hidden">
          <button onClick={() => setOpen((p) => ({ ...p, [i]: !p[i] }))} className="w-full text-left p-4 flex items-start gap-3">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded shrink-0 mt-0.5">{b.type}</span>
            <span className="flex-1 text-sm text-slate-200">{b.question}</span>
            <ChevronRight size={16} className={`text-slate-500 shrink-0 transition-transform ${open[i] ? 'rotate-90' : ''}`} />
          </button>
          {open[i] && (
            <div className="px-4 pb-4 -mt-1">
              <p className="text-sm text-slate-300 bg-navy-900 border border-navy-600 rounded-lg p-3">
                <span className="font-semibold text-gold">Panduan jawaban: </span>{b.answerGuide}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ReportTable({ columns, rows, notes }: { columns: string[]; rows: string[][]; notes?: string[] }) {
  return (
    <div className="overflow-x-auto mb-2">
      <table className="w-full text-sm border-collapse">
        <thead><tr>{columns.map((c, i) => <th key={i} className="text-left font-semibold text-gold bg-navy-900 border border-navy-600 px-3 py-2">{c}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={ri % 2 ? 'bg-navy-800/40' : ''}>
              {r.map((cell, ci) => <td key={ci} className="text-slate-300 border border-navy-600 px-3 py-2 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      {notes?.map((n, i) => <p key={i} className="text-xs text-slate-500 mt-1 italic">{n}</p>)}
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-display font-bold text-slate-100 mt-10 mb-4 pb-2 border-b border-navy-600">{children}</h2>;
}

// =============== detail satu TM ===============
function MeetingDetail({ m, onBack, onPrev, onNext }: {
  m: Meeting; onBack: () => void; onPrev: () => void; onNext: () => void;
}) {
  const { isDone, toggle } = useStudyProgress();
  const key = materialKey(CODE, m.meeting);
  const done = isDone(key);

  return (
    <div className="animate-fade-in-up max-w-3xl">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-gold mb-5 text-sm font-medium">
        <ArrowLeft size={16} /> Daftar Materi TM 1–7
      </button>

      <div className="flex items-center gap-2 text-xs mb-2">
        <span className="px-2 py-0.5 rounded bg-navy-700 border border-navy-500 text-gold font-bold">TM {m.meeting}</span>
        {m.references.map((r, i) => <Pill key={i}>{r}</Pill>)}
      </div>
      <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-100 leading-tight">{m.title}</h1>
      <p className="text-slate-400 mt-2">{m.topicGroup}</p>

      <SectionHeader>Tujuan Pembelajaran</SectionHeader>
      <ListBlock title="Learning Objectives" icon={<Target size={15} />} items={m.learningObjectives} variant="key" />

      <SectionHeader>Prasyarat & Peta Konsep</SectionHeader>
      <ListBlock title="Prasyarat" icon={<ListChecks size={15} />} items={m.prerequisite} />
      <ListBlock title="Peta Konsep" icon={<GitBranch size={15} />} items={m.conceptMap} variant="ordered" />

      <SectionHeader>Materi</SectionHeader>
      {m.sections.map((s, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-lg font-display font-semibold text-gold mb-2">{s.heading}</h3>
          {s.paragraphs.map((p, pi) => <p key={pi} className="text-slate-300 leading-relaxed mb-3">{p}</p>)}
          {s.bullets && <ul className="space-y-2 mb-3">{s.bullets.map((b, bi) => (
            <li key={bi} className="flex gap-3 text-sm text-slate-300"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" /><span>{b}</span></li>
          ))}</ul>}
          {s.formulas?.map((f, fi) => (
            <div key={fi} className="mb-2 bg-navy-900 border-l-4 border-gold rounded-r-lg px-4 py-2 font-mono text-slate-100 text-sm">{f}</div>
          ))}
        </div>
      ))}

      {m.workedExamples.length > 0 && <SectionHeader>Contoh Terselesaikan (Worked Examples)</SectionHeader>}
      {m.workedExamples.map((w, i) => (
        <div key={i} className="mb-5 border border-gold/20 bg-gold/5 rounded-xl overflow-hidden">
          <div className="bg-gold/10 px-4 py-2 text-sm font-semibold text-gold flex items-center gap-2"><Lightbulb size={15} /> {w.title}</div>
          <div className="p-4">
            <p className="text-sm text-slate-300 italic mb-3">{w.case}</p>
            <ol className="space-y-2 mb-3">{w.solutionSteps.map((st, si) => (
              <li key={si} className="flex gap-3 text-sm text-slate-300"><span className="w-6 h-6 rounded-md bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0">{si + 1}</span><span className="pt-0.5">{st}</span></li>
            ))}</ol>
            <p className="text-sm text-slate-100 bg-navy-900 border border-navy-600 rounded-lg p-3"><span className="font-semibold text-gold">Kesimpulan: </span>{w.conclusion}</p>
          </div>
        </div>
      ))}

      {m.practiceReports.length > 0 && <SectionHeader>Latihan Laporan (Practice Reports)</SectionHeader>}
      {m.practiceReports.map((pr, i) => (
        <div key={i} className="mb-6 border border-navy-500 bg-navy-700 rounded-xl p-4 md:p-5">
          <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2 mb-2"><Calculator size={16} className="text-gold" /> {pr.title}</h3>
          <p className="text-sm text-slate-300 mb-3">{pr.caseDescription}</p>
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Data</p>
          <ul className="space-y-1 mb-3">{pr.rawData.map((d, di) => <li key={di} className="text-sm text-slate-300">• {d}</li>)}</ul>
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Diminta</p>
          <ul className="space-y-1 mb-3">{pr.requiredOutputs.map((d, di) => <li key={di} className="text-sm text-slate-300">• {d}</li>)}</ul>
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Langkah Penyelesaian</p>
          <ol className="space-y-2 mb-3">{pr.stepByStepSolution.map((st, si) => (
            <li key={si} className="flex gap-3 text-sm text-slate-300"><span className="w-6 h-6 rounded-md bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0">{si + 1}</span><span className="pt-0.5">{st}</span></li>
          ))}</ol>
          {pr.finalReport && (
            <>
              <p className="text-sm font-semibold text-slate-100 mb-2">{pr.finalReport.title}</p>
              <ReportTable columns={pr.finalReport.columns} rows={pr.finalReport.rows} notes={pr.finalReport.notes} />
            </>
          )}
        </div>
      ))}

      {m.templates.length > 0 && <SectionHeader>Template Laporan</SectionHeader>}
      {m.templates.map((t, i) => (
        <div key={i} className="mb-4 border border-navy-500 bg-navy-700 rounded-xl p-4">
          <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2 mb-1"><FileText size={16} className="text-gold" /> {t.title}</h3>
          <p className="text-sm text-slate-400 mb-3">{t.purpose}</p>
          <div className="flex flex-wrap gap-2 mb-3">{t.columns.map((c, ci) => <span key={ci} className="text-xs px-2 py-1 rounded bg-navy-900 border border-navy-600 text-slate-300">{c}</span>)}</div>
          <ul className="space-y-1">{t.notes.map((n, ni) => <li key={ni} className="text-xs text-slate-500">– {n}</li>)}</ul>
        </div>
      ))}

      <SectionHeader>Kesalahan Umum & Ringkasan</SectionHeader>
      <ListBlock title="Kesalahan Umum" icon={<AlertTriangle size={15} />} items={m.commonMistakes} variant="warning" />
      <ListBlock title="Ringkasan Cepat" icon={<Lightbulb size={15} />} items={m.quickSummary} variant="key" />

      {m.quiz.length > 0 && <><SectionHeader>Quiz</SectionHeader><MiniQuiz quiz={m.quiz} /></>}
      {m.flashcards.length > 0 && <><SectionHeader>Flashcard</SectionHeader><Flashcards cards={m.flashcards} /></>}
      {m.bankQuestions.length > 0 && <><SectionHeader>Bank Soal</SectionHeader><BankList items={m.bankQuestions} /></>}

      <button onClick={() => toggle(key)}
        className={`mt-8 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium border transition-all ${done ? 'bg-gold text-navy-900 border-gold' : 'bg-gold/10 text-gold border-gold/30 hover:bg-gold hover:text-navy-900'}`}>
        <Check size={18} strokeWidth={3} /> {done ? 'Sudah dipelajari' : 'Tandai sudah dipelajari'}
      </button>

      <nav className="mt-6 flex items-center justify-between gap-3 border-t border-navy-600 pt-6">
        <button onClick={onPrev} disabled={m.meeting <= 1}
          className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-700 border border-navy-500 text-sm text-slate-300 hover:border-gold/50 disabled:opacity-40 disabled:cursor-not-allowed">
          <ChevronLeft size={16} /> {m.meeting > 1 ? `TM ${m.meeting - 1}` : 'Awal'}
        </button>
        <button onClick={onNext} disabled={m.meeting >= akdasPraUTS.meetings.length}
          className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-xl bg-navy-700 border border-navy-500 text-sm text-slate-300 hover:border-gold/50 disabled:opacity-40 disabled:cursor-not-allowed">
          {m.meeting < akdasPraUTS.meetings.length ? `TM ${m.meeting + 1}` : 'Akhir'} <ChevronRight size={16} />
        </button>
      </nav>
    </div>
  );
}

// =============== UTS practice ===============
function UtsView({ uts }: { uts: Uts }) {
  return (
    <div className="animate-fade-in-up max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-100">{uts.title}</h1>
      <p className="text-slate-400 mt-2 mb-4">{uts.description}</p>
      <ListBlock title="Cakupan UTS" icon={<ListChecks size={15} />} items={uts.coverage} variant="key" />
      {uts.multipleChoice.length > 0 && <><SectionHeader>Soal Pilihan Ganda</SectionHeader><MiniQuiz quiz={uts.multipleChoice} /></>}
      {uts.calculationCases.length > 0 && <><SectionHeader>Soal Hitungan / Kasus</SectionHeader><BankList items={uts.calculationCases} /></>}
      {uts.essayCases.length > 0 && <><SectionHeader>Soal Esai</SectionHeader><BankList items={uts.essayCases} /></>}
      <ListBlock title="Catatan Menjawab" icon={<Lightbulb size={15} />} items={uts.answerNotes} variant="warning" />
    </div>
  );
}

// =============== shell utama ===============
export default function AkdasView({ course, onBack }: { course: Course; onBack: () => void }) {
  const [tab, setTab] = useState<'materi' | 'uts'>('materi');
  const [openMeeting, setOpenMeeting] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const { isDone, toggle, countDone } = useStudyProgress();

  const meetings = akdasPraUTS.meetings;
  const doneCount = useMemo(() => countDone(meetings.map((m) => materialKey(CODE, m.meeting))), [countDone, meetings]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return meetings;
    return meetings.filter((m) =>
      [m.title, m.topicGroup, ...m.learningObjectives, ...m.sections.map((s) => s.heading)]
        .join(' ').toLowerCase().includes(q)
    );
  }, [query, meetings]);

  const current = openMeeting != null ? meetings.find((m) => m.meeting === openMeeting) : undefined;
  const goMeeting = (n: number) => { setOpenMeeting(n); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 min-h-[calc(100vh-160px)]">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">
          <div className="bg-navy-700 border border-navy-500 rounded-2xl p-5 shadow-lg">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-gold transition-colors mb-4 font-medium text-sm">
              <ArrowLeft size={16} /> Kembali
            </button>
            <h2 className="text-xl md:text-2xl font-display font-bold text-slate-100 leading-tight mb-2">{course.name}</h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 bg-navy-900 px-2 py-1 rounded-md border border-navy-600">{course.code}</span>
              <span className="text-xs text-gold font-medium">{course.sks} SKS</span>
              <span className="text-xs text-slate-500">{akdasPraUTS.alias} · {akdasPraUTS.period}</span>
            </div>
            {/* search */}
            <div className="mt-4 relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input value={query} onChange={(e) => { setQuery(e.target.value); setOpenMeeting(null); setTab('materi'); }}
                placeholder="Cari materi TM…"
                className="w-full bg-navy-900 border border-navy-600 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-200 outline-none focus:border-gold/50" />
            </div>
          </div>

          <div className="bg-navy-700 border border-navy-500 rounded-2xl p-3 shadow-lg lg:sticky lg:top-24">
            <div className="flex lg:flex-col gap-1 md:gap-2">
              <button onClick={() => { setTab('materi'); setOpenMeeting(null); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${tab === 'materi' ? 'bg-gold/10 text-gold border border-gold/20' : 'text-slate-400 hover:bg-navy-600 hover:text-slate-200 border border-transparent'}`}>
                <Layers size={18} /> Materi TM 1 – 7
              </button>
              <button onClick={() => { setTab('uts'); setOpenMeeting(null); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${tab === 'uts' ? 'bg-gold/10 text-gold border border-gold/20' : 'text-slate-400 hover:bg-navy-600 hover:text-slate-200 border border-transparent'}`}>
                <Target size={18} /> Latihan UTS
              </button>
            </div>
            {/* progress */}
            <div className="mt-3 px-2">
              <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Progres belajar</span><span>{doneCount}/{meetings.length}</span></div>
              <div className="h-1.5 rounded-full bg-navy-900 overflow-hidden"><div className="h-full bg-gold transition-all" style={{ width: `${(doneCount / meetings.length) * 100}%` }} /></div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 bg-navy-800 border border-navy-600 rounded-2xl p-5 md:p-8 shadow-xl">
          {tab === 'uts' ? (
            <UtsView uts={akdasPraUTS.utsPractice} />
          ) : current ? (
            <MeetingDetail m={current} onBack={() => setOpenMeeting(null)}
              onPrev={() => goMeeting(current.meeting - 1)} onNext={() => goMeeting(current.meeting + 1)} />
          ) : (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl font-display font-bold text-slate-100 flex items-center gap-3 mb-1"><BookOpen className="text-gold" /> Materi TM 1 – 7</h1>
              <p className="text-slate-400 text-sm mb-6">{akdasPraUTS.description}</p>
              {filtered.length === 0 && <p className="text-slate-500 text-sm">Tidak ada materi yang cocok dengan "{query}".</p>}
              <div className="space-y-3">
                {filtered.map((m) => {
                  const k = materialKey(CODE, m.meeting); const d = isDone(k);
                  return (
                    <div key={m.meeting} className="flex items-center gap-3 bg-navy-700 border border-navy-500 rounded-xl p-4 hover:border-gold/30 transition-colors">
                      <button onClick={() => toggle(k)} title="Tandai selesai"
                        className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 ${d ? 'bg-gold border-gold text-navy-900' : 'border-navy-500 text-transparent hover:border-gold'}`}>
                        <Check size={14} strokeWidth={3} />
                      </button>
                      <button onClick={() => goMeeting(m.meeting)} className="flex-1 text-left min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded shrink-0">TM {m.meeting}</span>
                          <h4 className={`font-bold truncate ${d ? 'text-gold' : 'text-slate-200'}`}>{m.title}</h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 truncate">{m.topicGroup}</p>
                        <div className="flex flex-wrap gap-2 mt-2 text-[11px] text-slate-500">
                          <Pill>{m.sections.length} bagian</Pill><Pill>{m.workedExamples.length} contoh</Pill>
                          <Pill>{m.quiz.length} quiz</Pill><Pill>{m.flashcards.length} flashcard</Pill><Pill>{m.bankQuestions.length} bank soal</Pill>
                        </div>
                      </button>
                      <button onClick={() => goMeeting(m.meeting)} className="px-3 py-2 rounded-lg bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-navy-900 text-sm font-medium flex items-center gap-2 shrink-0">
                        <BookOpen size={15} /> Baca
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
