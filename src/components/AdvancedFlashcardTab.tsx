import { useMemo, useState, useEffect } from 'react';
import { BookOpenCheck, Filter, Layers3, Star } from 'lucide-react';
import FlashcardDeck from './FlashcardDeck';
import type { Course, FlashcardPhase, FlashcardCategory, AdvancedStudyCard } from '../types';

const PHASE_OPTIONS: Array<{ value: 'all' | FlashcardPhase; label: string }> = [
  { value: 'all', label: 'Semua fase' },
  { value: 'pra-uts', label: 'Pra-UTS · TM 1–7' },
  { value: 'pra-uas', label: 'Pra-UAS · TM 8–14' },
];

export default function AdvancedFlashcardTab({ course, cards }: { course: Course, cards: AdvancedStudyCard[] }) {
  const [phase, setPhase] = useState<'all' | FlashcardPhase>('all');
  const [tm, setTm] = useState<'all' | number>('all');
  const [category, setCategory] = useState<'all' | FlashcardCategory>('all');
  const [showStarredOnly, setShowStarredOnly] = useState(false);
  const [starredIds, setStarredIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(`flashcard-stars-${course.code}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        setStarredIds(new Set(Object.keys(parsed).filter(k => parsed[k])));
      }
    } catch {}
  }, [course.code, showStarredOnly]);

  const CATEGORY_OPTIONS: Array<'all' | FlashcardCategory> = useMemo(() => {
    const cats = new Set(cards.map(c => c.category));
    return ['all', ...Array.from(cats)].sort((a, b) => a === 'all' ? -1 : b === 'all' ? 1 : a.localeCompare(b)) as Array<'all' | FlashcardCategory>;
  }, [cards]);

  const availableTms = useMemo(() => {
    const filtered = phase === 'all'
      ? cards
      : cards.filter((card) => card.phase === phase);
    return [...new Set(filtered.map((card) => card.tm))].sort((a, b) => a - b);
  }, [cards, phase]);

  const filteredCards = useMemo(
    () => cards.filter((card) => (
      (phase === 'all' || card.phase === phase)
      && (tm === 'all' || card.tm === tm)
      && (category === 'all' || card.category === category)
      && (!showStarredOnly || starredIds.has(card.id))
    )),
    [cards, category, phase, tm, showStarredOnly, starredIds],
  );

  const phaseCounts = useMemo(() => ({
    all: cards.length,
    'pra-uts': cards.filter((card) => card.phase === 'pra-uts').length,
    'pra-uas': cards.filter((card) => card.phase === 'pra-uas').length,
  }), [cards]);

  const handlePhaseChange = (nextPhase: 'all' | FlashcardPhase) => {
    setPhase(nextPhase);
    if (tm !== 'all') {
      const allowed = nextPhase === 'all'
        || (nextPhase === 'pra-uts' && tm <= 7)
        || (nextPhase === 'pra-uas' && tm >= 8);
      if (!allowed) setTm('all');
    }
  };

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 px-5 py-5 md:px-6 md:py-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-3xl">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Flashcard Terstruktur TM 1–14</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <BookOpenCheck size={22} />
                </span>
                Flashcard {course.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                Gunakan filter fase, pertemuan, dan kategori untuk mengulang materi secara spesifik. Tersedia total {cards.length} kartu untuk di-review.
              </p>
            </div>

            <div className="grid min-w-[220px] gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-4 text-sm shadow-sm">
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Total kartu</span><span className="font-bold text-gray-900 dark:text-white">{phaseCounts.all}</span></div>
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Pra-UTS</span><span className="font-bold text-blue-600 dark:text-blue-400">{phaseCounts['pra-uts']}</span></div>
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Pra-UAS</span><span className="font-bold text-emerald-600 dark:text-emerald-400">{phaseCounts['pra-uas']}</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 p-4 md:px-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <Filter size={14} className="text-blue-500" /> Filter deck
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
              Fase belajar
              <select
                value={phase}
                onChange={(event) => handlePhaseChange(event.target.value as 'all' | FlashcardPhase)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {PHASE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({phaseCounts[option.value]})
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
              Pertemuan
              <select
                value={tm}
                onChange={(event) => setTm(event.target.value === 'all' ? 'all' : Number(event.target.value))}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">Semua TM</option>
                {availableTms.map((value) => (
                  <option key={value} value={value}>TM {value}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
              Kategori
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as 'all' | FlashcardCategory)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {CATEGORY_OPTIONS.map((value) => (
                  <option key={value} value={value}>{value === 'all' ? 'Semua kategori' : value}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 px-4 py-3 text-sm">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <Layers3 size={16} className="text-blue-500" />
              Deck aktif: <strong className="text-gray-900 dark:text-white">{filteredCards.length} kartu</strong>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowStarredOnly(!showStarredOnly)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                  showStarredOnly
                    ? 'border-gold bg-gold/10 text-gold-700 dark:text-gold'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Star size={14} fill={showStarredOnly ? 'currentColor' : 'none'} className={showStarredOnly ? 'text-gold' : ''} />
                Hanya Bintang (Sulit)
              </button>
              <button
                type="button"
                onClick={() => { setPhase('all'); setTm('all'); setCategory('all'); setShowStarredOnly(false); }}
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Reset filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {filteredCards.length > 0 ? (
        <FlashcardDeck
          key={`${phase}-${tm}-${category}-${showStarredOnly}`}
          courseCode={course.code}
          cards={filteredCards.map(({ id, front, back }) => ({ id, front, back }))}
        />
      ) : (
        <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-center shadow-sm">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Tidak ada kartu pada kombinasi filter ini.</h4>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Reset filter untuk kembali ke seluruh deck.</p>
        </section>
      )}
    </div>
  );
}
