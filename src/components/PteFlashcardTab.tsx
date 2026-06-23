import { useMemo, useState } from 'react';
import { BookOpenCheck, Filter, Layers3 } from 'lucide-react';
import FlashcardDeck from './FlashcardDeck';
import {
  EKT109_FLASHCARDS,
  type Ekt109FlashcardCategory,
  type Ekt109FlashcardPhase,
} from '../data/flashcards/ekt109';

const PHASE_OPTIONS: Array<{ value: 'all' | Ekt109FlashcardPhase; label: string }> = [
  { value: 'all', label: 'Semua fase' },
  { value: 'pra-uts', label: 'Pra-UTS · TM 1–7' },
  { value: 'pra-uas', label: 'Pra-UAS · TM 8–14' },
];

const CATEGORY_OPTIONS: Array<'all' | Ekt109FlashcardCategory> = [
  'all',
  'Definisi',
  'Rumus',
  'Grafik',
  'Mekanisme',
  'Asumsi',
  'Perbandingan',
  'Miskonsepsi',
];

export default function PteFlashcardTab() {
  const [phase, setPhase] = useState<'all' | Ekt109FlashcardPhase>('all');
  const [tm, setTm] = useState<'all' | number>('all');
  const [category, setCategory] = useState<'all' | Ekt109FlashcardCategory>('all');

  const availableTms = useMemo(() => {
    const filtered = phase === 'all'
      ? EKT109_FLASHCARDS
      : EKT109_FLASHCARDS.filter((card) => card.phase === phase);
    return [...new Set(filtered.map((card) => card.tm))].sort((a, b) => a - b);
  }, [phase]);

  const filteredCards = useMemo(
    () => EKT109_FLASHCARDS.filter((card) => (
      (phase === 'all' || card.phase === phase)
      && (tm === 'all' || card.tm === tm)
      && (category === 'all' || card.category === category)
    )),
    [category, phase, tm],
  );

  const phaseCounts = useMemo(() => ({
    all: EKT109_FLASHCARDS.length,
    'pra-uts': EKT109_FLASHCARDS.filter((card) => card.phase === 'pra-uts').length,
    'pra-uas': EKT109_FLASHCARDS.filter((card) => card.phase === 'pra-uas').length,
  }), []);

  const handlePhaseChange = (nextPhase: 'all' | Ekt109FlashcardPhase) => {
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
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Flashcard TM 1–14</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                  <BookOpenCheck size={22} />
                </span>
                Flashcard Pengantar Teori Ekonomi
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                Deck ini memuat 9 kartu untuk setiap TM. Gunakan filter fase, pertemuan, dan kategori untuk mengulang definisi, rumus, grafik, mekanisme, asumsi, perbandingan, serta miskonsepsi.
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
                onChange={(event) => handlePhaseChange(event.target.value as 'all' | Ekt109FlashcardPhase)}
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
                onChange={(event) => setCategory(event.target.value as 'all' | Ekt109FlashcardCategory)}
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
            <button
              type="button"
              onClick={() => { setPhase('all'); setTm('all'); setCategory('all'); }}
              className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Reset filter
            </button>
          </div>
        </div>
      </section>

      {filteredCards.length > 0 ? (
        <FlashcardDeck
          key={`${phase}-${tm}-${category}`}
          cards={filteredCards.map(({ front, back }) => ({ front, back }))}
        />
      ) : (
        <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-center shadow-sm">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">Tidak ada kartu pada kombinasi filter ini.</h4>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Reset filter untuk kembali ke seluruh deck PTE.</p>
        </section>
      )}
    </div>
  );
}
