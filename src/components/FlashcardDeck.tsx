// =============================================================
// src/components/FlashcardDeck.tsx
// UI/UX Batch 7 — Gacha-style carousel flashcard.
// Konsep mengikuti referensi pengguna: kartu tengah, flip 3D,
// tombol acak/spin, navigasi kiri-kanan, dan keyboard shortcut.
// Isi akademik tetap berasal dari data flashcard.
// =============================================================
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Dices, Eye, Layers3, RotateCcw, SkipForward, Sparkles, Star } from 'lucide-react';
import type { StudyCard } from '../types';
import { buildFlashcardSpinSequence, pickRandomFlashcardTarget } from './flashcardRandom';
import {
  getFlashcardAccessibleLabel,
  getFlashcardAnnouncement,
  getFlashcardFlipInstruction,
  getNextFlashcardFlipState,
  isFlashcardInteractiveTarget,
} from './flashcardAccessibility';
import { createFlashcardTimerRegistry } from './flashcardTimers';

interface FlashcardDeckProps {
  courseCode?: string;
  cards: StudyCard[];
  variant?: 'default' | 'akbi';
}

export function shouldUseAkbiReducedMotion(
  isAkbiWorkspace: boolean,
  prefersReducedMotion: boolean,
): boolean {
  return isAkbiWorkspace && prefersReducedMotion;
}

export default function FlashcardDeck({ cards, courseCode, variant = 'default' }: FlashcardDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isSpinning, setIsSpinning] = useState(false);
  const [studySeed, setStudySeed] = useState(0);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');
  const [starredCards, setStarredCards] = useState<Record<string, boolean>>(() => {
    if (!courseCode) return {};
    try {
      const stored = localStorage.getItem(`flashcard-stars-${courseCode}`);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const isAkbiWorkspace = variant === 'akbi';
  const [seenCards, setSeenCards] = useState<Record<number, boolean>>(() => (isAkbiWorkspace && cards.length > 0 ? { 0: true } : ({} as Record<number, boolean>)));
  const [masteredCards, setMasteredCards] = useState<Record<number, boolean>>({});
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    isAkbiWorkspace
    && typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const instructionId = useId();
  const spinTimerRegistryRef = useRef<ReturnType<typeof createFlashcardTimerRegistry> | null>(null);

  if (!spinTimerRegistryRef.current) {
    spinTimerRegistryRef.current = createFlashcardTimerRegistry((timeoutId) => window.clearTimeout(timeoutId));
  }

  const totalCards = cards.length;

  const visibleRange = useMemo(() => {
    if (totalCards <= 5) return 2;
    return 3;
  }, [totalCards]);

  const openedCount = useMemo(
    () => Object.values(flippedCards).filter(Boolean).length,
    [flippedCards],
  );
  const seenCount = useMemo(() => Object.values(seenCards).filter(Boolean).length, [seenCards]);
  const masteredCount = useMemo(() => Object.values(masteredCards).filter(Boolean).length, [masteredCards]);
  const masteryPercent = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  const currentCard = cards[activeIndex];
  const currentMastered = Boolean(masteredCards[activeIndex]);
  const nextUnmasteredIndex = useMemo(() => {
    if (!isAkbiWorkspace || totalCards <= 1) return undefined;
    return Array.from({ length: totalCards - 1 }, (_, offset) => (activeIndex + offset + 1) % totalCards)
      .find((index) => !masteredCards[index]);
  }, [activeIndex, isAkbiWorkspace, masteredCards, totalCards]);
  const nextUnmasteredLabel = nextUnmasteredIndex !== undefined
    ? 'Berikutnya belum dikuasai'
    : (currentMastered ? 'Semua konsep dikuasai' : 'Konsep ini satu-satunya tersisa');

  const markSeen = useCallback((index: number) => {
    if (!isAkbiWorkspace) return;
    setSeenCards((previous) => (previous[index] ? previous : { ...previous, [index]: true }));
  }, [isAkbiWorkspace]);

  const handlePrev = useCallback(() => {
    if (isSpinning || totalCards === 0) return;
    const nextIndex = (activeIndex - 1 + totalCards) % totalCards;
    setActiveIndex(nextIndex);
    markSeen(nextIndex);
    setLiveAnnouncement(getFlashcardAnnouncement(
      cards[nextIndex],
      nextIndex,
      totalCards,
      Boolean(flippedCards[nextIndex]),
      'Berpindah ke kartu sebelumnya.',
    ));
  }, [activeIndex, cards, flippedCards, isSpinning, markSeen, totalCards]);

  const handleNext = useCallback(() => {
    if (isSpinning || totalCards === 0) return;
    const nextIndex = (activeIndex + 1) % totalCards;
    setActiveIndex(nextIndex);
    markSeen(nextIndex);
    setLiveAnnouncement(getFlashcardAnnouncement(
      cards[nextIndex],
      nextIndex,
      totalCards,
      Boolean(flippedCards[nextIndex]),
      'Berpindah ke kartu berikutnya.',
    ));
  }, [activeIndex, cards, flippedCards, isSpinning, markSeen, totalCards]);

  const toggleFlip = useCallback((index: number) => {
    if (isSpinning || index !== activeIndex) return;
    const nextFlipped = getNextFlashcardFlipState(Boolean(flippedCards[index]));
    setFlippedCards((prev) => ({ ...prev, [index]: nextFlipped }));
    setLiveAnnouncement(getFlashcardAnnouncement(
      cards[index],
      index,
      totalCards,
      nextFlipped,
      nextFlipped ? 'Jawaban dibuka.' : 'Kembali ke pertanyaan.',
    ));
  }, [activeIndex, cards, flippedCards, isSpinning, totalCards]);

  const closeAll = useCallback(() => {
    if (isSpinning) return;
    setFlippedCards({});
    if (currentCard) {
      setLiveAnnouncement(getFlashcardAnnouncement(
        currentCard,
        activeIndex,
        totalCards,
        false,
        'Semua jawaban ditutup.',
      ));
    }
  }, [activeIndex, currentCard, isSpinning, totalCards]);

  const clearSpinTimers = useCallback(() => {
    spinTimerRegistryRef.current?.clear();
  }, []);

  const spinCards = useCallback(() => {
    if (isSpinning || totalCards === 0) return;

    clearSpinTimers();
    setFlippedCards({});

    const targetIndex = pickRandomFlashcardTarget(totalCards);

    if (shouldUseAkbiReducedMotion(isAkbiWorkspace, prefersReducedMotion)) {
      if (prefersReducedMotion) {
        setActiveIndex(targetIndex);
        setStudySeed((seed) => seed + 1);
        markSeen(targetIndex);
        setLiveAnnouncement(getFlashcardAnnouncement(
          cards[targetIndex],
          targetIndex,
          totalCards,
          false,
          'Kartu acak dipilih tanpa animasi.',
        ));
        return;
      }
    }

    setIsSpinning(true);
    setLiveAnnouncement('Mengacak kartu.');

    const sequence = buildFlashcardSpinSequence(activeIndex, targetIndex, totalCards);
    let elapsed = 0;

    sequence.forEach((nextIndex, step) => {
      const progress = (step + 1) / sequence.length;
      elapsed += 34 + Math.round(52 * (progress ** 2));

      const timeoutId = window.setTimeout(() => {
        setActiveIndex(nextIndex);

        if (step === sequence.length - 1) {
          spinTimerRegistryRef.current?.clear();
          setStudySeed((seed) => seed + 1);
          markSeen(targetIndex);
          setIsSpinning(false);
          setLiveAnnouncement(getFlashcardAnnouncement(
            cards[targetIndex],
            targetIndex,
            totalCards,
            false,
            'Pengacakan selesai.',
          ));
        }
      }, elapsed);

      spinTimerRegistryRef.current?.add(timeoutId);
    });
  }, [activeIndex, cards, clearSpinTimers, isAkbiWorkspace, isSpinning, markSeen, prefersReducedMotion, totalCards]);


  const toggleMastered = useCallback(() => {
    if (!isAkbiWorkspace || isSpinning || !currentCard) return;
    const nextMastered = !currentMastered;
    setMasteredCards((previous) => ({ ...previous, [activeIndex]: nextMastered }));
    setLiveAnnouncement(getFlashcardAnnouncement(
      currentCard,
      activeIndex,
      totalCards,
      Boolean(flippedCards[activeIndex]),
      nextMastered ? 'Konsep ditandai dikuasai.' : 'Tanda penguasaan dibatalkan.',
    ));
  }, [activeIndex, currentCard, currentMastered, flippedCards, isAkbiWorkspace, isSpinning, totalCards]);

  const toggleStar = useCallback((e: React.MouseEvent, id?: string) => {
    e.stopPropagation();
    if (!id || !courseCode) return;
    setStarredCards((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      try {
        localStorage.setItem(`flashcard-stars-${courseCode}`, JSON.stringify(next));
      } catch {
        /* localStorage quota / disabled - abaikan */
      }
      return next;
    });
  }, [courseCode]);

  const goToNextUnmastered = useCallback(() => {
    if (!isAkbiWorkspace || isSpinning || totalCards === 0) return;
    if (nextUnmasteredIndex === undefined) {
      setLiveAnnouncement(currentMastered
        ? 'Semua konsep pada sesi ini sudah ditandai dikuasai.'
        : 'Kartu aktif adalah satu-satunya konsep yang belum dikuasai.');
      return;
    }
    setActiveIndex(nextUnmasteredIndex);
    markSeen(nextUnmasteredIndex);
    setLiveAnnouncement(getFlashcardAnnouncement(
      cards[nextUnmasteredIndex],
      nextUnmasteredIndex,
      totalCards,
      Boolean(flippedCards[nextUnmasteredIndex]),
      'Berpindah ke konsep berikutnya yang belum dikuasai.',
    ));
  }, [cards, currentMastered, flippedCards, isAkbiWorkspace, isSpinning, markSeen, nextUnmasteredIndex, totalCards]);

  const resetStudySession = useCallback(() => {
    if (!isAkbiWorkspace || isSpinning) return;
    clearSpinTimers();
    setActiveIndex(0);
    setFlippedCards({});
    setMasteredCards({});
    setSeenCards(totalCards > 0 ? { 0: true } : ({} as Record<number, boolean>));
    setStudySeed((seed) => seed + 1);
    setLiveAnnouncement('Sesi penguasaan direset ke kartu pertama.');
  }, [clearSpinTimers, isAkbiWorkspace, isSpinning, totalCards]);

  useEffect(() => () => clearSpinTimers(), [clearSpinTimers]);

  useEffect(() => {
    if (!isAkbiWorkspace) {
      setPrefersReducedMotion(false);
      return undefined;
    }
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    syncPreference();
    mediaQuery.addEventListener?.('change', syncPreference);
    return () => mediaQuery.removeEventListener?.('change', syncPreference);
  }, [isAkbiWorkspace]);

  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
    touchEndRef.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartRef.current === null || touchEndRef.current === null) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) handleNext();
    else if (distance < -minSwipeDistance) handlePrev();
    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable;
      if (isInput) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrev();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
      if ((event.key === 'Enter' || event.key === ' ') && !isFlashcardInteractiveTarget(target)) {
        event.preventDefault();
        toggleFlip(activeIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, handleNext, handlePrev, toggleFlip]);

  if (totalCards === 0) return null;

  return (
    <div className={`animate-fade-in-up space-y-6${isAkbiWorkspace ? ' akbi-flashcard-deck' : ''}`} aria-busy={isSpinning} data-flashcard-variant={variant}>
      <p id={instructionId} className="sr-only">
        Kartu tengah dapat dibalik. Gunakan tombol sebelumnya atau berikutnya untuk berpindah, lalu aktifkan kartu untuk membuka atau menutup jawaban.
      </p>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {liveAnnouncement}
      </div>
      <section className="learning-surface overflow-hidden">
        <div className="relative isolate overflow-hidden bg-calm-aurora px-5 py-5 md:px-6 md:py-6">
          <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-3xl">
              <div className="eyebrow mb-2">Pengingat Konsep</div>
              <h3 className="flex items-center gap-3 font-display text-2xl font-black text-slate-100 md:text-3xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/15 text-gold shadow-lg shadow-gold/10">
                  <Sparkles size={22} />
                </span>
                {isAkbiWorkspace ? 'Studio Flashcard AKBI' : 'Flashcard Gacha'}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                {isAkbiWorkspace
                  ? 'Gunakan satu kartu sebagai satu unit latihan. Jawab dari ingatan, periksa penjelasan, lalu tandai konsep yang sudah dikuasai sebelum beralih.'
                  : 'Pilih kartu tengah, balik untuk melihat jawaban, atau gunakan tombol acak untuk memilih konsep secara random. Model ini menjaga latihan tetap ringan tanpa mengubah isi akademik.'}
              </p>
            </div>

            <div className="grid min-w-[230px] gap-2 rounded-3xl border border-navy-500/70 bg-navy-950/42 p-4 text-sm shadow-inner backdrop-blur-sm">
              <div className="flex justify-between gap-8"><span className="text-slate-500">Total kartu</span><span className="font-black text-slate-100">{totalCards}</span></div>
              <div className="flex justify-between gap-8"><span className="text-slate-500">{isAkbiWorkspace ? 'Sudah dilihat' : 'Kartu aktif'}</span><span className="font-black text-gold">{isAkbiWorkspace ? seenCount : activeIndex + 1}</span></div>
              <div className="flex justify-between gap-8"><span className="text-slate-500">{isAkbiWorkspace ? 'Dikuasai' : 'Terbuka'}</span><span className="font-black text-slate-100">{isAkbiWorkspace ? masteredCount : openedCount}</span></div>
            </div>
          </div>
          {isAkbiWorkspace && (
            <div className="relative mt-5 rounded-2xl border border-navy-500/65 bg-navy-950/36 p-3.5">
              <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold text-slate-400">
                <span>Penguasaan sesi</span>
                <span className="text-gold">{masteredCount}/{totalCards} · {masteryPercent}%</span>
              </div>
              <div className="akbi-flashcard-session-bar" aria-hidden="true"><span style={{ width: `${masteryPercent}%` }} /></div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy-500/65 p-4 md:px-5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={closeAll}
              disabled={isSpinning}
              className="inline-flex items-center gap-2 rounded-2xl border border-navy-500 bg-navy-850 px-3.5 py-2 text-sm font-bold text-slate-300 transition-all hover:border-gold/50 hover:text-gold disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw size={15} /> Tutup semua
            </button>
            {isAkbiWorkspace && (
              <button
                onClick={resetStudySession}
                disabled={isSpinning}
                className="inline-flex items-center gap-2 rounded-2xl border border-navy-500 bg-navy-850 px-3.5 py-2 text-sm font-bold text-slate-300 transition-all hover:border-gold/50 hover:text-gold disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RotateCcw size={15} /> Reset sesi
              </button>
            )}
            <button
              onClick={spinCards}
              disabled={isSpinning}
              className="inline-flex items-center gap-2 rounded-2xl bg-gold px-4 py-2 text-sm font-black text-navy-950 shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-light disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Dices size={17} className={isSpinning ? 'animate-spin' : ''} /> {isSpinning ? 'Mengacak...' : 'Acak kartu'}
            </button>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-navy-500/70 bg-navy-850/60 px-3 py-2 text-xs font-bold text-slate-400">
            <Layers3 size={14} className="text-gold" /> Geser kartu, gunakan panah, atau ketuk
          </div>
        </div>
      </section>

      <section 
        className="flashcard-gacha-stage relative isolate overflow-hidden rounded-[2rem] border border-[rgb(var(--color-border)/0.78)] bg-[rgb(var(--surface-soft)/0.62)] px-2 py-8 shadow-calm-soft md:px-6 md:py-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[90px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-gold/10 to-transparent" />

        <div className="relative mx-auto h-[430px] w-full max-w-6xl perspective-1000 md:h-[470px]">
          {cards.map((card, index) => {
            let offset = (index - activeIndex) % totalCards;
            const half = Math.floor(totalCards / 2);

            if (offset < -half) offset += totalCards;
            if (offset > half) offset -= totalCards;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= visibleRange;
            if (!isVisible) return null;

            const translateX = offset * 250;
            const scale = isCenter ? 1 : Math.max(0.55, 1 - Math.abs(offset) * 0.16);
            const zIndex = 80 - Math.abs(offset);
            const opacity = isCenter ? 1 : Math.max(0.16, 1 - Math.abs(offset) * 0.26);
            const rotateY = offset * -13;
            const blur = isCenter ? 0 : Math.min(3.25, Math.abs(offset) * 1.05);
            const isFlipped = !!flippedCards[index];

            return (
              <div
                key={`${studySeed}-${index}-${card.front}`}
                aria-hidden={!isCenter}
                onClick={() => { if (isCenter && !isSpinning) toggleFlip(index); }}
                className="flashcard-gacha-card-shell absolute left-1/2 top-1/2 h-[385px] w-[290px] origin-center transition-all duration-500 ease-out md:h-[420px] md:w-[330px]"
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFlip(index)}
                  disabled={!isCenter || isSpinning}
                  tabIndex={isCenter ? 0 : -1}
                  aria-pressed={isFlipped}
                  aria-describedby={`${instructionId} ${instructionId}-${index}`}
                  className={`flashcard-gacha-card group relative h-full w-full cursor-pointer transform-style-3d rounded-[1.7rem] text-left transition-transform duration-700 ease-in-out focus:outline-none ${isFlipped ? 'rotate-y-180' : ''} ${isCenter && !isSpinning ? 'md:hover:-translate-y-2' : ''}`}
                  aria-label={getFlashcardAccessibleLabel(card, index, totalCards, isFlipped)}
                >
                  <span id={`${instructionId}-${index}`} className="sr-only">
                    {getFlashcardFlipInstruction(isFlipped)}
                  </span>
                  <div aria-hidden={isFlipped} className="absolute inset-0 backface-hidden overflow-hidden rounded-[1.7rem] border border-[rgb(var(--color-border)/0.92)] bg-[rgb(var(--surface-card)/0.98)] p-6 shadow-calm-lift">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-amber-500" />
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-gold">Pertanyaan</span>
                        <div className="flex items-center gap-2">
                          {courseCode && card.id && (
                            <button
                              type="button"
                              onClick={(e) => toggleStar(e, card.id)}
                              className={`rounded-full p-1.5 transition-colors ${
                                starredCards[card.id]
                                  ? 'text-gold bg-gold/10 hover:bg-gold/20'
                                  : 'text-slate-400 hover:text-gold hover:bg-gold/10'
                              }`}
                              title="Tandai kartu sulit"
                            >
                              <Star size={16} fill={starredCards[card.id] ? 'currentColor' : 'none'} />
                            </button>
                          )}
                          <span className="rounded-full border border-[rgb(var(--color-border)/0.85)] bg-[rgb(var(--surface-muted)/0.65)] px-2.5 py-1 text-xs font-black text-[rgb(var(--color-text-muted))]">#{index + 1}</span>
                        </div>
                      </div>

                      <div className="flex flex-1 items-center justify-center text-center">
                        <h4 className="text-balance font-display text-2xl font-black leading-tight text-[rgb(var(--color-text-title))] md:text-[1.7rem]">
                          {card.front}
                        </h4>
                      </div>

                      <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-[rgb(var(--color-border)/0.72)] bg-[rgb(var(--surface-muted)/0.45)] px-3 py-2 text-xs font-bold text-[rgb(var(--color-text-muted))]">
                        <Eye size={14} className="text-gold" /> {isCenter ? 'Klik untuk membuka jawaban' : 'Geser ke tengah untuk membuka'}
                      </div>
                    </div>
                  </div>

                  <div aria-hidden={!isFlipped} className="absolute inset-0 rotate-y-180 backface-hidden overflow-hidden rounded-[1.7rem] border border-gold/30 bg-gradient-to-br from-navy-850 via-navy-800 to-slate-900 p-6 text-slate-100 shadow-calm-lift">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-400 via-gold to-emerald-400" />
                    <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-gold/15 blur-3xl" />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-sky-200">Jawaban</span>
                        <div className="flex items-center gap-2">
                          {courseCode && card.id && (
                            <button
                              type="button"
                              onClick={(e) => toggleStar(e, card.id)}
                              className={`rounded-full p-1.5 transition-colors ${
                                starredCards[card.id]
                                  ? 'text-gold bg-gold/10 hover:bg-gold/20'
                                  : 'text-slate-400 hover:text-gold hover:bg-gold/10'
                              }`}
                              title="Tandai kartu sulit"
                            >
                              <Star size={16} fill={starredCards[card.id] ? 'currentColor' : 'none'} />
                            </button>
                          )}
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-black text-slate-400">#{index + 1}</span>
                        </div>
                      </div>

                      <div className="flex flex-1 items-center justify-center text-center">
                        <p className="text-pretty text-base font-semibold leading-8 text-slate-100 md:text-lg">
                          {card.back}
                        </p>
                      </div>

                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-bold text-slate-400">
                        Klik lagi untuk kembali ke pertanyaan
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={handlePrev}
            disabled={isSpinning}
            className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-[rgb(var(--color-border)/0.82)] bg-[rgb(var(--surface-card)/0.94)] text-[rgb(var(--color-text-main))] shadow-calm-soft transition-all hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Kartu sebelumnya"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="min-w-[190px] rounded-2xl border border-[rgb(var(--color-border)/0.78)] bg-[rgb(var(--surface-card)/0.82)] px-5 py-3 text-center shadow-inner">
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[rgb(var(--color-text-muted))]">Kartu aktif</div>
            <div className="mt-1 font-display text-xl font-black text-[rgb(var(--color-text-title))]">{activeIndex + 1} / {totalCards}</div>
          </div>

          <button
            onClick={handleNext}
            disabled={isSpinning}
            className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-[rgb(var(--color-border)/0.82)] bg-[rgb(var(--surface-card)/0.94)] text-[rgb(var(--color-text-main))] shadow-calm-soft transition-all hover:-translate-y-0.5 hover:border-gold/45 hover:text-gold disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Kartu berikutnya"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </section>

      {currentCard && (
        <section className="learning-card rounded-[1.5rem] p-4 md:p-5">
          {isAkbiWorkspace ? (
            <div className="akbi-flashcard-mastery">
              <div className="akbi-flashcard-mastery__copy">
                <div className="eyebrow mb-2">Kartu Aktif · #{activeIndex + 1}</div>
                <h4 className="font-display text-xl font-black text-[rgb(var(--color-text-title))]">{currentCard.front}</h4>
                <p>Tandai dikuasai hanya setelah jawaban dapat dijelaskan kembali tanpa melihat sisi belakang kartu.</p>
              </div>
              <div className="akbi-flashcard-mastery__actions">
                <button type="button" onClick={() => toggleFlip(activeIndex)} disabled={isSpinning}>
                  {flippedCards[activeIndex] ? 'Tutup jawaban' : 'Buka jawaban'}
                </button>
                <button type="button" onClick={toggleMastered} disabled={isSpinning} aria-pressed={currentMastered}>
                  <CheckCircle2 size={15} className="mr-1 inline" /> {currentMastered ? 'Sudah dikuasai' : 'Tandai dikuasai'}
                </button>
                <button type="button" onClick={goToNextUnmastered} disabled={isSpinning || nextUnmasteredIndex === undefined}>
                  <SkipForward size={15} className="mr-1 inline" /> {nextUnmasteredLabel}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="eyebrow mb-2">Pratinjau Kartu Aktif</div>
                <h4 className="font-display text-xl font-black text-[rgb(var(--color-text-title))]">{currentCard.front}</h4>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[rgb(var(--color-text-muted))]">Gunakan pratinjau ini saat mengulang cepat tanpa harus membalik kartu.</p>
              </div>
              <button
                onClick={() => toggleFlip(activeIndex)}
                disabled={isSpinning}
                className="btn-secondary px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                {flippedCards[activeIndex] ? 'Tutup Jawaban' : 'Buka Jawaban'}
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
