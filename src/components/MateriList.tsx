// =============================================================
// src/components/MateriList.tsx
// Daftar materi Tatap Muka + checklist "sudah dipelajari" (localStorage)
// + tombol "Buka di Google Drive".
// =============================================================
import { useEffect, useState } from 'react';
import { Layers, BookOpenText, Headphones, ExternalLink, Check, TrendingUp } from 'lucide-react';
import { useStudyProgress, materialKey } from '../hooks/useStudyProgress';
import { loadCourseContent } from '../data/courses/courseRegistry';
import type { Course, Material } from '../types';

interface MateriListProps {
  course: Course;
  range: 'tm1-7' | 'tm8-14';
  onOpenReading: (tm: number) => void;
}

export default function MateriList({ course, range, onOpenReading }: MateriListProps) {
  const { isDone, toggle, countDone } = useStudyProgress();
  const [readingTms, setReadingTms] = useState<Set<number>>(new Set());

  useEffect(() => {
    let isActive = true;
    loadCourseContent(course.code).then((loaded) => {
      if (isActive) setReadingTms(new Set(Object.keys(loaded.readings).map(Number)));
    }).catch(() => {
      if (isActive) setReadingTms(new Set());
    });
    return () => { isActive = false; };
  }, [course.code]);

  const materials: Material[] =
    (range === 'tm1-7' ? course.materiTM1_7 : course.materiTM8_14) ?? [];
  const start = range === 'tm1-7' ? 1 : 8;
  const end = range === 'tm1-7' ? 7 : 14;

  const keys = materials.map((m) => materialKey(course.code, m.tm));
  const done = countDone(keys);
  const pct = materials.length ? Math.round((done / materials.length) * 100) : 0;

  return (
    <div className="animate-fade-in-up">
      <div className="mb-7 flex flex-col justify-between gap-5 rounded-[1.6rem] border border-navy-500 bg-navy-800/60 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow">Materi kuliah</p>
          <h3 className="mt-2 flex items-center gap-3 text-2xl font-black text-slate-100">
            <Layers className="text-gold" /> Tatap Muka {start}–{end}
          </h3>
          <p className="mt-2 text-sm text-slate-500">Tandai materi yang selesai supaya alur belajar tetap rapi.</p>
        </div>

        <div className="min-w-[210px] rounded-2xl border border-navy-500 bg-navy-850/80 p-4">
          <div className="mb-2 flex justify-between text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1.5"><TrendingUp size={14} /> Progress</span>
            <span className="text-gold">{done}/{materials.length}</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-navy-700">
            <div className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-right text-xs font-black text-slate-500">{pct}% selesai</p>
        </div>
      </div>

      <div className="space-y-3.5">
        {materials.map((m) => {
          const key = materialKey(course.code, m.tm);
          const checked = isDone(key);
          const hasDrive = Boolean(m.driveUrl);
          const hasReading = readingTms.has(m.tm);

          return (
            <div
              key={m.tm}
              className={`group rounded-[1.45rem] border p-4 transition-all md:p-5 ${
                checked
                  ? 'border-gold/35 bg-gold/5 shadow-sm'
                  : 'border-navy-500 bg-navy-800/75 hover:border-gold/45 hover:bg-navy-800'
              }`}
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex min-w-0 gap-4">
                  <button
                    onClick={() => toggle(key)}
                    aria-label={checked ? 'Tandai belum dipelajari' : 'Tandai sudah dipelajari'}
                    title={checked ? 'Sudah dipelajari' : 'Tandai sudah dipelajari'}
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border transition-all ${
                      checked
                        ? 'border-gold bg-gold text-navy-950 shadow-sm shadow-gold/20'
                        : 'border-navy-500 text-transparent hover:border-gold hover:text-gold'
                    }`}
                  >
                    <Check size={16} strokeWidth={3} />
                  </button>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-navy-500 bg-navy-900/65 text-sm font-black text-gold">
                    TM{m.tm}
                  </div>
                  <div className="min-w-0">
                    <h4 className={`font-black leading-snug transition-colors ${checked ? 'text-gold' : 'text-slate-100 group-hover:text-gold'}`}>
                      {m.title}
                    </h4>
                    <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      {m.ref && m.ref !== '—' && (
                        <span className="rounded-full border border-navy-500 bg-navy-900/50 px-2 py-0.5 font-bold text-gold/85">
                          {m.ref}
                        </span>
                      )}
                      <span>{checked ? '✓ Sudah dipelajari' : 'Belum ditandai'}</span>
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-wrap gap-2 sm:flex-nowrap xl:w-auto">
                  {hasDrive ? (
                    <a
                      href={m.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-gold/30 bg-gold/10 px-3 py-2.5 text-sm font-black text-gold transition-all hover:bg-gold hover:text-navy-950 sm:flex-none"
                      title="Buka di Google Drive"
                    >
                      <ExternalLink size={16} /> Drive
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-navy-500 bg-navy-800/40 px-3 py-2.5 text-sm font-black text-slate-600 sm:flex-none"
                      title="Link Drive belum tersedia"
                    >
                      <ExternalLink size={16} /> Drive
                    </button>
                  )}

                  {m.podcastUrl ? (
                    <a
                      href={m.podcastUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/podcast flex flex-1 items-center justify-center gap-2 rounded-2xl border border-navy-500 bg-navy-850/70 px-3 py-2.5 text-sm font-black text-slate-300 transition-all hover:border-gold/45 hover:text-gold sm:flex-none"
                      title="Dengarkan Podcast AI (NotebookLM)"
                    >
                      <Headphones size={16} className="text-purple-400 transition-colors group-hover/podcast:text-gold" /> Podcast
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-navy-500 bg-navy-800/40 px-3 py-2.5 text-sm font-black text-slate-600 sm:flex-none"
                      title="Podcast belum tersedia"
                    >
                      <Headphones size={16} className="text-purple-400" /> Podcast
                    </button>
                  )}

                  <button
                    onClick={() => hasReading && onOpenReading(m.tm)}
                    disabled={!hasReading}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-black transition-all sm:flex-none ${
                      hasReading
                        ? 'border border-gold/30 bg-gold/10 text-gold hover:bg-gold hover:text-navy-950'
                        : 'cursor-not-allowed border border-navy-500 bg-navy-800/40 text-slate-600'
                    }`}
                    title={hasReading ? 'Baca rangkuman materi' : 'Rangkuman belum tersedia'}
                  >
                    <BookOpenText size={16} /> Baca
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {materials.length === 0 && (
          <p className="rounded-2xl border border-navy-500 bg-navy-800/70 p-4 text-sm text-slate-500">
            Belum ada materi untuk rentang ini. Tambahkan di <code className="font-bold text-gold">src/data/courseData.ts</code>.
          </p>
        )}
      </div>
    </div>
  );
}
