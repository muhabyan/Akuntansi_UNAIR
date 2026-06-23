import { ArrowLeft, BookOpen, Target } from 'lucide-react';
import type { Reading } from '../../types';
import { renderText } from './MarkdownContent';

interface CourseHeaderProps {
  reading: Reading;
  onBack: () => void;
}

export default function CourseHeader({ reading, onBack }: CourseHeaderProps) {
  const isReview = reading.tm === 0 || reading.tm === 15;
  const badgeLabel = reading.tm === 0 ? 'Simulasi UTS' : reading.tm === 15 ? 'Simulasi UAS' : `TM ${reading.tm}`;

  return (
    <header className="course-reading-header mb-8 overflow-hidden rounded-[2rem]">
      <div className="relative border-b border-navy-500/45 px-5 py-4 md:px-7">
        <button
          onClick={onBack}
          className="course-nav-btn inline-flex items-center gap-2 rounded-2xl border border-navy-500/70 bg-navy-950/35 px-3 py-2 text-sm font-bold text-slate-400 hover:border-gold/50 hover:text-gold"
        >
          <ArrowLeft size={16} /> Kembali ke Daftar Materi
        </button>
      </div>

      <div className="relative px-5 py-6 md:px-7 md:py-8">
        <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-gold/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-5rem] left-[20%] h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mb-4 flex flex-wrap items-center gap-2 text-xs">
          <span className={`rounded-full border px-3 py-1 font-black ${isReview ? 'border-gold/40 bg-gold/15 text-gold' : 'border-gold/30 bg-gold/10 text-gold'}`}>
            {badgeLabel}
          </span>
          {isReview && (
            <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 font-black uppercase tracking-wider text-amber-200">
              Simulasi Ujian
            </span>
          )}
          {reading.ref && (
            <span className="calm-badge rounded-full px-3 py-1 font-bold">{reading.ref}</span>
          )}
          <span className="calm-badge rounded-full px-3 py-1 font-bold">
            {reading.blocks.length} {isReview ? 'block latihan' : 'block materi'}
          </span>
        </div>

        <h1 className="relative max-w-4xl font-display text-3xl font-black leading-tight text-slate-100 md:text-4xl">
          {reading.title}
        </h1>
        <p className="relative mt-4 max-w-[86ch] text-base leading-8 text-slate-400">
          {renderText(reading.intro)}
        </p>

        {reading.objectives && reading.objectives.length > 0 && (
          <div className="course-card-glass relative mt-7 overflow-hidden rounded-[1.5rem] p-5">
            <h2 className="mb-4 flex items-center gap-2 border-b border-navy-500/60 pb-3 text-xs font-black uppercase tracking-[0.2em] text-gold">
              <Target size={15} /> Tujuan Pembelajaran
            </h2>
            <ul className="grid gap-2 md:grid-cols-2">
              {reading.objectives.map((obj, i) => (
                <li key={i} className="course-objective-card flex gap-3 rounded-2xl px-3 py-2.5 text-sm leading-6 text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-black text-gold">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isReview && (
          <div className="course-card-glass relative mt-5 flex items-start gap-3 rounded-2xl px-4 py-3 text-sm leading-relaxed text-slate-300">
            <BookOpen size={17} className="mt-0.5 shrink-0 text-gold" />
            <span>Bagian ini dikemas sebagai simulasi ujian: fokus pada latihan praktik, format laporan, jurnal, dan perhitungan yang perlu dikerjakan seperti soal ujian.</span>
          </div>
        )}
      </div>
    </header>
  );
}
