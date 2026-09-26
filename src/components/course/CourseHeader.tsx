import { useCallback, useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, BookOpen, Check, Clock, Maximize, Minimize, Target } from 'lucide-react';
import type { Reading } from '../../types';
import { renderText } from './MarkdownContent';
import { BackToTopButton, estimateLayeredReading, isSourceOnly, LAYERED_BODY, SourceLine } from './LayeredBlocks';
import { getReadingBlockId } from './ReadingOutline';

interface CourseHeaderProps {
  courseName: string;
  reading: Reading;
  onBack: () => void;
  showZenControl?: boolean;
}

function getReadingContext(reading: Reading) {
  // Pages with their own badge are the Persiapan UTS pages of a layered course.
  if (reading.badge) return { badge: reading.badge, phase: 'TM 1–7 / Pra-UTS', isReview: false };
  if (reading.tm === 0) return { badge: 'Review UTS', phase: 'TM 1–7 / Pra-UTS', isReview: true };
  if (reading.tm === 15) return { badge: 'Review UAS', phase: 'TM 8–14 / Pra-UAS', isReview: true };
  return {
    badge: `TM ${reading.tm}`,
    phase: reading.tm <= 7 ? 'TM 1–7 / Pra-UTS' : 'TM 8–14 / Pra-UAS',
    isReview: false,
  };
}

/**
 * Pintu masuk of a layered reading: title, source line, learning objectives, reading time and "Mulai dari Fondasi",
 * packed so that on a 390 px phone the first screen still reaches the start of Fondasi.
 */
function LayeredEntry({ courseName, reading, onBack, badge, phase }: { courseName: string; reading: Reading; onBack: () => void; badge: string; phase: string }) {
  const readingTime = estimateLayeredReading(reading.blocks);
  const fondasiIndex = reading.blocks.findIndex((block) => block.kind === 'section' && block.layer === 'fondasi');
  const fondasiId = fondasiIndex >= 0 ? getReadingBlockId(reading.blocks[fondasiIndex], fondasiIndex) : undefined;
  const startButton = fondasiId && (
    <a
      href={`#${fondasiId}`}
      onClick={(event) => {
        event.preventDefault();
        document.getElementById(fondasiId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
    >
      <ArrowDown size={16} aria-hidden="true" /> Mulai dari Fondasi
    </a>
  );
  return (
    <header className="reading-header mb-3 border-b border-gray-200 pb-3 dark:border-gray-800 md:mb-8 md:pb-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <button type="button" onClick={onBack} className="-ml-2 inline-flex min-h-11 min-w-0 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-300" aria-label={`Kembali ke daftar materi ${courseName}`}>
          <ArrowLeft size={17} className="shrink-0" /> <span className="truncate">Daftar materi</span>
        </button>
        <span className="hidden text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 sm:inline">
          <span className="text-blue-600 dark:text-blue-400">{courseName}</span> / {phase}
        </span>
        <span className="ml-auto flex items-center gap-2 text-xs">
          <span className="rounded-md bg-blue-50 px-2 py-1 font-bold text-blue-700 dark:bg-blue-950/45 dark:text-blue-300">{badge}</span>
          <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400" title={`${readingTime.words} kata di Fondasi dan isi utama, 180 kata per menit`}>
            <Clock size={13} aria-hidden="true" /> Sekitar {readingTime.minutes} menit baca
          </span>
        </span>
      </div>

      <h1 className="mt-2 max-w-[24ch] text-2xl font-extrabold leading-[1.16] tracking-tight text-gray-950 dark:text-white sm:text-3xl md:mt-4 md:text-4xl">
        {reading.title}
      </h1>
      {isSourceOnly(reading.intro) ? (
        <div className="mt-2 max-w-[70ch]"><SourceLine text={reading.intro} /></div>
      ) : (
        <div className={`mt-3 max-w-[70ch] text-gray-700 dark:text-gray-300 ${LAYERED_BODY}`}>{renderText(reading.intro)}</div>
      )}

      {reading.objectives.length > 0 ? (
        <div className="mt-3 max-w-[70ch] border-t border-gray-200 pt-2 dark:border-gray-800">
          <div className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
              <Target size={17} className="text-blue-500" /> Tujuan pembelajaran
            </h2>
            {startButton}
          </div>
          {/* Body size, with the tighter end of the 1.6–1.7 line height so the first phone screen reaches Fondasi. */}
          <ul className="mt-1 space-y-0.5">
            {reading.objectives.map((objective, index) => (
              <li key={index} className="flex gap-2 text-base leading-[1.6] text-gray-700 dark:text-gray-300 md:text-[16.5px]">
                <Check size={16} className="mt-1 shrink-0 text-emerald-500" /> <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        startButton && <div className="mt-4">{startButton}</div>
      )}
    </header>
  );
}

export default function CourseHeader({ courseName, reading, onBack, showZenControl = true }: CourseHeaderProps) {
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

  const toggleZenMode = useCallback(() => {
    const nextZenMode = !zenMode;
    setZenMode(nextZenMode);

    if (nextZenMode && document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (!nextZenMode && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }, [zenMode]);

  useEffect(() => {
    const handleToolbarToggle = () => toggleZenMode();
    window.addEventListener('akuntansihub:toggle-zen', handleToolbarToggle);
    return () => window.removeEventListener('akuntansihub:toggle-zen', handleToolbarToggle);
  }, [toggleZenMode]);

  const layered = reading.layout === 'layered';

  return (
    <>
      {layered && <LayeredEntry courseName={courseName} reading={reading} onBack={onBack} badge={context.badge} phase={context.phase} />}
      {layered && <BackToTopButton />}
      {!layered && <header className="reading-header mb-6 border-b border-gray-200 pb-6 dark:border-gray-800 md:mb-8 md:pb-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <button type="button" onClick={onBack} className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-300" aria-label={`Kembali ke daftar materi ${courseName}`}>
            <ArrowLeft size={17} className="shrink-0" /> <span className="truncate">Daftar materi</span>
          </button>
          {showZenControl && !zenMode && (
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
      </header>}

      {zenMode && (
        <button type="button" onClick={toggleZenMode} className="fixed right-3 top-[calc(0.75rem+env(safe-area-inset-top))] z-[120] inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-colors hover:bg-blue-700 md:right-6 md:top-6">
          <Minimize size={17} /> Keluar Zen
        </button>
      )}
    </>
  );
}
