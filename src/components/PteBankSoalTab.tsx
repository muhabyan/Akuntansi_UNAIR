import { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpenCheck, ChevronLeft, ChevronRight, Filter, Search, ShieldCheck } from 'lucide-react';
import PteBankQuestionCard from './PteBankQuestionCard';
import { filterPteBankQuestions, getPteBankPaginationAnnouncement, paginatePteBankQuestions } from './pteBankBehavior';
import {
  EKT109_BANK_QUESTIONS,
  type PteBankCompetency,
  type PteBankDifficulty,
  type PteBankKind,
  type PteBankPhase,
} from '../data/banksoal/ekt109Bank';

const PAGE_SIZE = 10;

const KIND_LABEL: Record<PteBankKind, string> = {
  'single-choice': 'Pilihan tunggal',
  'true-false': 'Benar/Salah',
  'multi-select': 'Pilih banyak',
  matching: 'Pencocokan',
  ordering: 'Urutan proses',
  numeric: 'Isian angka',
  graph: 'Grafik',
  'short-answer': 'Review terpandu',
};

const COMPETENCIES: PteBankCompetency[] = [
  'Konsep Dasar',
  'Hubungan Sebab-Akibat',
  'Interpretasi Grafik',
  'Movement & Shift',
  'Perhitungan',
  'Kasus Integratif',
];


export default function PteBankSoalTab() {
  const [phase, setPhase] = useState<'all' | PteBankPhase>('all');
  const [tm, setTm] = useState<'all' | number>('all');
  const [kind, setKind] = useState<'all' | PteBankKind>('all');
  const [competency, setCompetency] = useState<'all' | PteBankCompetency>('all');
  const [difficulty, setDifficulty] = useState<'all' | PteBankDifficulty>('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const resultsSummaryRef = useRef<HTMLDivElement>(null);
  const focusResultsAfterPageChange = useRef(false);

  const filtered = useMemo(() => filterPteBankQuestions(EKT109_BANK_QUESTIONS, {
    phase, tm, kind, competency, difficulty, query,
  }), [competency, difficulty, kind, phase, query, tm]);

  const pagination = useMemo(
    () => paginatePteBankQuestions(filtered, page, PAGE_SIZE),
    [filtered, page],
  );
  const { page: currentPage, pageCount, visible } = pagination;
  const paginationAnnouncement = getPteBankPaginationAnnouncement(filtered.length, currentPage, pageCount);

  useEffect(() => {
    if (!focusResultsAfterPageChange.current) return;
    focusResultsAfterPageChange.current = false;
    resultsSummaryRef.current?.focus();
  }, [currentPage]);

  const resetPage = () => setPage(1);
  const navigateToPage = (nextPage: number) => {
    focusResultsAfterPageChange.current = true;
    setPage(nextPage);
  };

  const phaseCounts = useMemo(() => ({
    all: EKT109_BANK_QUESTIONS.length,
    'pra-uts': EKT109_BANK_QUESTIONS.filter((question) => question.phase === 'pra-uts').length,
    'pra-uas': EKT109_BANK_QUESTIONS.filter((question) => question.phase === 'pra-uas').length,
  }), []);

  const sourceCounts = useMemo(() => ({
    source: EKT109_BANK_QUESTIONS.filter((question) => question.sourceStatus === 'adapted-source').length,
    generated: EKT109_BANK_QUESTIONS.filter((question) => question.sourceStatus === 'generated-from-reading').length,
  }), []);

  const availableTms = useMemo(() => {
    const subset = phase === 'all'
      ? EKT109_BANK_QUESTIONS
      : EKT109_BANK_QUESTIONS.filter((question) => question.phase === phase);
    return [...new Set(subset.map((question) => question.tm))].sort((a, b) => a - b);
  }, [phase]);

  const handlePhase = (next: 'all' | PteBankPhase) => {
    resetPage();
    setPhase(next);
    if (tm !== 'all') {
      const valid = next === 'all' || (next === 'pra-uts' && tm <= 7) || (next === 'pra-uas' && tm >= 8);
      if (!valid) setTm('all');
    }
  };

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-900 px-5 py-5 md:px-6 md:py-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-3xl">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Bank Soal TM 1–14</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"><BookOpenCheck size={22} /></span>
                Bank Soal Pengantar Teori Ekonomi
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                Seratus soal terstruktur untuk Pra-UTS dan Pra-UAS. Seluruh 64 soal companion Pra-UAS telah diaudit, diseimbangkan ulang, dan grafiknya direkonstruksi; 36 soal Pra-UTS dibuat dari reading aktif TM 1–7.
              </p>
            </div>
            <div className="grid min-w-[238px] gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-4 text-sm shadow-sm">
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Total soal</span><span className="font-bold text-gray-900 dark:text-white">{phaseCounts.all}</span></div>
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Pra-UTS</span><span className="font-bold text-emerald-600 dark:text-emerald-400">{phaseCounts['pra-uts']}</span></div>
              <div className="flex justify-between gap-8"><span className="text-gray-500 dark:text-gray-400">Pra-UAS</span><span className="font-bold text-blue-600 dark:text-blue-400">{phaseCounts['pra-uas']}</span></div>
              <div className="mt-1 border-t border-gray-200 dark:border-gray-700 pt-2 text-xs text-gray-500 dark:text-gray-400">{sourceCounts.source} soal sumber tervalidasi · {sourceCounts.generated} soal dari reading</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"><Filter size={14} className="text-emerald-500" /> Filter bank soal</div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">Fase
              <select data-testid="pte-bank-phase-filter" aria-label="Filter fase bank soal" value={phase} onChange={(event) => handlePhase(event.target.value as 'all' | PteBankPhase)} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                <option value="all">Semua fase ({phaseCounts.all})</option>
                <option value="pra-uts">Pra-UTS ({phaseCounts['pra-uts']})</option>
                <option value="pra-uas">Pra-UAS ({phaseCounts['pra-uas']})</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">Pertemuan
              <select data-testid="pte-bank-tm-filter" aria-label="Filter pertemuan bank soal" value={tm} onChange={(event) => { resetPage(); setTm(event.target.value === 'all' ? 'all' : Number(event.target.value)); }} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                <option value="all">Semua TM</option>
                {availableTms.map((value) => <option key={value} value={value}>TM {value}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">Tipe soal
              <select data-testid="pte-bank-kind-filter" aria-label="Filter tipe bank soal" value={kind} onChange={(event) => { resetPage(); setKind(event.target.value as 'all' | PteBankKind); }} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                <option value="all">Semua tipe</option>
                {(Object.entries(KIND_LABEL) as Array<[PteBankKind, string]>).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">Kompetensi
              <select data-testid="pte-bank-competency-filter" aria-label="Filter kompetensi bank soal" value={competency} onChange={(event) => { resetPage(); setCompetency(event.target.value as 'all' | PteBankCompetency); }} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                <option value="all">Semua kompetensi</option>
                {COMPETENCIES.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">Kesulitan
              <select data-testid="pte-bank-difficulty-filter" aria-label="Filter kesulitan bank soal" value={difficulty} onChange={(event) => { resetPage(); setDifficulty(event.target.value as 'all' | PteBankDifficulty); }} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                <option value="all">Semua level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>

          <label className="relative mt-3 block">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <input data-testid="pte-bank-search" aria-label="Cari bank soal PTE" value={query} onChange={(event) => { resetPage(); setQuery(event.target.value); }} placeholder="Cari GDP, elastisitas, Phillips, multiplier, grafik..." className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-10 py-3 text-sm text-gray-900 dark:text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" />
          </label>
        </div>
      </section>

      <div data-testid="pte-bank-results-summary" ref={resultsSummaryRef} tabIndex={-1} className="flex scroll-mt-24 flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
        <p className="text-gray-600 dark:text-gray-300"><span className="font-bold text-gray-900 dark:text-white">{filtered.length}</span> soal cocok · halaman {currentPage} dari {pageCount}</p>
        <p className="inline-flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400"><ShieldCheck size={15} /> Telah lulus validasi sumber dan distribusi kunci</p>
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{paginationAnnouncement}</p>

      <div className="space-y-4">
        {visible.map((question, index) => <PteBankQuestionCard key={question.id} question={question} number={(currentPage - 1) * PAGE_SIZE + index + 1} />)}
      </div>

      {filtered.length === 0 && <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-10 text-center text-sm text-gray-500 dark:text-gray-400">Tidak ada soal yang sesuai dengan filter saat ini.</div>}

      {pageCount > 1 && (
        <nav className="flex items-center justify-center gap-3" aria-label="Navigasi halaman bank soal">
          <button data-testid="pte-bank-previous-page" type="button" onClick={() => navigateToPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-300 disabled:opacity-50 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"><ChevronLeft size={16} /> Sebelumnya</button>
          <span className="rounded-xl bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">{currentPage} / {pageCount}</span>
          <button data-testid="pte-bank-next-page" type="button" onClick={() => navigateToPage(Math.min(pageCount, currentPage + 1))} disabled={currentPage === pageCount} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-300 disabled:opacity-50 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">Berikutnya <ChevronRight size={16} /></button>
        </nav>
      )}
    </div>
  );
}
