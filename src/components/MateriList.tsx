// =============================================================
// src/components/MateriList.tsx
// Daftar materi Tatap Muka + checklist "sudah dipelajari" (localStorage)
// + tombol "Buka di Google Drive".
// =============================================================
import { useEffect, useState } from 'react';
import { BookOpenText, Check, ExternalLink, Headphones } from 'lucide-react';
import { loadCourseContent } from '../data/courses/courseRegistry';
import { materialKey, useStudyProgress } from '../hooks/useStudyProgress';
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

  const materials: Material[] = (range === 'tm1-7' ? course.materiTM1_7 : course.materiTM8_14) ?? [];
  const allMaterials = [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])];
  const currentTm = allMaterials.find((material) => !isDone(materialKey(course.code, material.tm)))?.tm ?? null;
  const start = range === 'tm1-7' ? 1 : 8;
  const end = range === 'tm1-7' ? 7 : 14;
  const keys = materials.map((material) => materialKey(course.code, material.tm));
  const done = countDone(keys);
  const percent = materials.length ? Math.round((done / materials.length) * 100) : 0;

  return (
    <div className="animate-fade-in-up">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-700">
        <div>
          <p className="eyebrow">Materi utama</p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TM {start}–{end}</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{materials.length} materi · {done} selesai</p>
        </div>
        <div className="w-28 shrink-0 sm:w-40">
          <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
            <span>Progress</span><span className="text-blue-600 dark:text-blue-400">{percent}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" role="progressbar" aria-label={`Progress TM ${start} sampai ${end}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
            <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-[width] duration-500" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/75 dark:border-gray-700 dark:bg-gray-800/60">
        {materials.map((material) => {
          const key = materialKey(course.code, material.tm);
          const checked = isDone(key);
          const current = material.tm === currentTm && !checked;
          const hasDrive = Boolean(material.driveUrl);
          const hasReading = readingTms.has(material.tm);

          return (
            <article key={material.tm} aria-current={current ? 'step' : undefined} className={`grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 border-b border-gray-200 px-3 py-3.5 last:border-b-0 dark:border-gray-700 md:grid-cols-[2.75rem_minmax(0,1fr)_auto] md:items-center md:px-4 ${current ? 'bg-blue-50/75 dark:bg-blue-950/25' : checked ? 'bg-gray-50/80 dark:bg-gray-900/25' : 'hover:bg-gray-50/80 dark:hover:bg-gray-800'}`}>
              <button type="button" onClick={() => toggle(key)} aria-label={checked ? `Tandai TM ${material.tm} belum selesai` : `Tandai TM ${material.tm} selesai`} className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/35">
                <span className={`flex h-6 w-6 items-center justify-center rounded-md border transition-all ${checked ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-gray-300 text-transparent hover:border-blue-500 dark:border-gray-600'}`}>
                  <Check size={14} strokeWidth={3} />
                </span>
              </button>

              <button type="button" onClick={() => hasReading && onOpenReading(material.tm)} disabled={!hasReading} className="min-w-0 text-left disabled:cursor-default">
                <div className="mb-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-bold uppercase tracking-[0.14em]">
                  <span className={current ? 'text-blue-700 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}>TM {material.tm}</span>
                  {current && <span className="text-blue-600 dark:text-blue-400">Berikutnya</span>}
                  {checked && <span className="text-emerald-600 dark:text-emerald-400">Selesai</span>}
                  {material.ref && material.ref !== '—' && <span className="truncate normal-case tracking-normal text-gray-400 dark:text-gray-500">{material.ref}</span>}
                </div>
                <h3 className={`text-sm font-bold leading-snug md:text-base ${checked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>{material.title}</h3>
              </button>

              <div className="col-start-2 mt-2 flex min-w-0 flex-wrap items-center gap-1.5 md:col-start-auto md:mt-0 md:flex-nowrap md:justify-end">
                {hasReading ? (
                  <button type="button" onClick={() => onOpenReading(material.tm)} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 text-xs font-bold text-white transition-colors hover:bg-blue-700">
                    <BookOpenText size={15} /> Baca
                  </button>
                ) : (
                  <button type="button" disabled className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-gray-100 px-3 text-xs font-semibold text-gray-400 dark:bg-gray-700/50 dark:text-gray-500" title="Rangkuman belum tersedia">
                    <BookOpenText size={15} /> Baca
                  </button>
                )}

                {hasDrive ? (
                  <a href={material.driveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-blue-950/35 dark:hover:text-blue-300" title="Buka di Google Drive">
                    <ExternalLink size={15} /> Drive
                  </a>
                ) : (
                  <button type="button" disabled className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-gray-300 dark:text-gray-600" title="Link Drive belum tersedia">
                    <ExternalLink size={15} /> Drive
                  </button>
                )}

                {material.podcastUrl ? (
                  <a href={material.podcastUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-950/35 dark:hover:text-indigo-300" title="Dengarkan Podcast AI (NotebookLM)">
                    <Headphones size={15} /> Podcast
                  </a>
                ) : (
                  <button type="button" disabled className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-gray-300 dark:text-gray-600" title="Podcast belum tersedia">
                    <Headphones size={15} /> Podcast
                  </button>
                )}
              </div>
            </article>
          );
        })}

        {materials.length === 0 && <p className="p-5 text-sm text-gray-500 dark:text-gray-400">Belum ada materi untuk rentang ini.</p>}
      </div>
    </div>
  );
}
