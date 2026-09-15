import { useEffect, useState } from 'react';
import { ArrowLeft, BookOpen, Check, Maximize, Minimize, Target } from 'lucide-react';
import type { Reading } from '../../types';
import { renderText } from './MarkdownContent';

interface CourseHeaderProps {
  courseName: string;
  reading: Reading;
  onBack: () => void;
}

function getReadingContext(reading: Reading) {
  if (reading.tm === 0) return { badge: 'Review UTS', phase: 'TM 1–7 / Pra-UTS', isReview: true };
  if (reading.tm === 15) return { badge: 'Review UAS', phase: 'TM 8–14 / Pra-UAS', isReview: true };
  return {
    badge: `TM ${reading.tm}`,
    phase: reading.tm <= 7 ? 'TM 1–7 / Pra-UTS' : 'TM 8–14 / Pra-UAS',
    isReview: false,
  };
}

export default function CourseHeader({ courseName, reading, onBack }: CourseHeaderProps) {
  const [zenMode, setZenMode] = useState(false);
  const context = getReadingContext(reading);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) setZenMode(false);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('zen-mode-active', zenMode);
    return () => document.body.classList.remove('zen-mode-active');
  }, [zenMode]);

  const toggleZenMode = () => {
    const nextZenMode = !zenMode;
    setZenMode(nextZenMode);

    if (nextZenMode && document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (!nextZenMode && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <>
      <header className="reading-header mb-6 border-b border-gray-200 pb-6 dark:border-gray-800 md:mb-8 md:pb-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <button type="button" onClick={onBack} className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-300" aria-label={`Kembali ke daftar materi ${courseName}`}>
            <ArrowLeft size={17} className="shrink-0" /> <span className="truncate">Daftar materi</span>
          </button>
          {!zenMode && (
            <button type="button" onClick={toggleZenMode} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border border-gray-200 px-3 text-sm font-bold text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/35 dark:hover:text-blue-300" title="Masuk ke Zen Mode">
              <Maximize size={16} />
              <span className="hidden sm:inline">Zen Mode</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.14em]">
          <span className="text-blue-600 dark:text-blue-400">{courseName}</span>
          <span className="text-gray-400 dark:text-gray-600" aria-hidden="true">/</span>
          <span className="text-gray-500 dark:text-gray-400">{context.phase}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
          <span className="rounded-md bg-blue-50 px-2 py-1 font-bold text-blue-700 dark:bg-blue-950/45 dark:text-blue-300">{context.badge}</span>
          {reading.ref && <span className="font-medium text-gray-500 dark:text-gray-400">Sumber: {reading.ref}</span>}
          <span className="text-gray-400 dark:text-gray-500">{reading.blocks.length} blok materi</span>
        </div>

        <h1 className="mt-4 max-w-[24ch] text-2xl font-extrabold leading-[1.16] tracking-tight text-gray-950 dark:text-white sm:text-3xl md:text-4xl">
          {reading.title}
        </h1>
        <div className="mt-4 max-w-[70ch] text-[15px] leading-7 text-gray-600 dark:text-gray-300 md:text-base md:leading-8">
          {renderText(reading.intro)}
        </div>

        {reading.objectives.length > 0 && (
          <details className="mt-5 max-w-[70ch] border-t border-gray-200 pt-3 dark:border-gray-800">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
              <Target size={17} className="text-blue-500" /> Tujuan pembelajaran
              <span className="text-xs font-semibold text-gray-400">({reading.objectives.length})</span>
            </summary>
            <ul className="mt-2 space-y-2 pb-1">
              {reading.objectives.map((objective, index) => (
                <li key={index} className="flex gap-2.5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  <Check size={16} className="mt-1 shrink-0 text-emerald-500" /> <span>{objective}</span>
                </li>
              ))}
            </ul>
          </details>
        )}

        {context.isReview && (
          <div className="mt-4 flex max-w-[70ch] items-start gap-2.5 border-l-2 border-blue-500 bg-blue-50/60 px-3 py-2.5 text-sm leading-6 text-gray-700 dark:bg-blue-950/25 dark:text-gray-300">
            <BookOpen size={17} className="mt-0.5 shrink-0 text-blue-500" />
            <span>Bagian ini menggunakan materi review atau simulasi ujian yang sudah tersedia untuk fase ini.</span>
          </div>
        )}
      </header>

      {zenMode && (
        <button type="button" onClick={toggleZenMode} className="fixed right-3 top-[calc(0.75rem+env(safe-area-inset-top))] z-[120] inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-colors hover:bg-blue-700 md:right-6 md:top-6">
          <Minimize size={17} /> Keluar Zen
        </button>
      )}
    </>
  );
}
