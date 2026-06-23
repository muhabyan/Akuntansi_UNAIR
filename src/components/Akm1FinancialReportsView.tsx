import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Calculator,
  FileText,
  Layers,
  ClipboardList,
  Search,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Filter,
  ArrowRight,
  PanelLeft,
} from 'lucide-react';
import CourseBlockCard from './course/CourseBlockCard';
import {
  AKM1_FINANCIAL_REPORTS,
  AKM1_FINANCIAL_REPORT_MENU,
  getAkm1FinancialReport,
  type Akm1FinancialReport,
} from '../data/akm1/akm1FinancialReports';

interface Akm1FinancialReportsViewProps {
  reportId?: string | null;
  onBack: () => void;
}

type ReportFilter = 'semua' | Akm1FinancialReport['priority'];

const priorityLabel: Record<Akm1FinancialReport['priority'], string> = {
  inti: 'Laporan Inti',
  wajib: 'Wajib',
  penguat: 'Penguat',
};

const modeLabel: Record<Akm1FinancialReport['practiceMode'], string> = {
  builder: 'Interaktif',
  mixed: 'Contoh + Praktik',
  template: 'Template Praktik',
};

const filterOptions: Array<{ id: ReportFilter; label: string }> = [
  { id: 'semua', label: 'Semua' },
  { id: 'inti', label: 'Inti' },
  { id: 'wajib', label: 'Wajib' },
  { id: 'penguat', label: 'Penguat' },
];

function getReportByMenuId(id: string) {
  return getAkm1FinancialReport(id) ?? AKM1_FINANCIAL_REPORTS.find((report) => report.id === id);
}

export default function Akm1FinancialReportsView({ reportId, onBack }: Akm1FinancialReportsViewProps) {
  const initialReportId = reportId ?? AKM1_FINANCIAL_REPORTS[0]?.id ?? null;
  const [selectedReportId, setSelectedReportId] = useState<string | null>(initialReportId);
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ReportFilter>('semua');

  useEffect(() => {
    if (reportId && getAkm1FinancialReport(reportId)) {
      setSelectedReportId(reportId);
    }
  }, [reportId]);

  const selectedReport = useMemo(() => {
    if (!selectedReportId) return AKM1_FINANCIAL_REPORTS[0];
    return getAkm1FinancialReport(selectedReportId) ?? AKM1_FINANCIAL_REPORTS[0];
  }, [selectedReportId]);

  const menuWithReports = useMemo(() => {
    return AKM1_FINANCIAL_REPORT_MENU
      .map((item) => ({ ...item, report: getReportByMenuId(item.id) }))
      .filter((item): item is typeof item & { report: Akm1FinancialReport } => Boolean(item.report));
  }, []);

  const filteredMenu = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuWithReports.filter((item) => {
      const matchesQuery = !q || item.label.toLowerCase().includes(q) || item.report.description.toLowerCase().includes(q) || item.report.tm.toLowerCase().includes(q);
      const matchesFilter = activeFilter === 'semua' || item.report.priority === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, menuWithReports, query]);

  const selectedIndex = useMemo(() => {
    return AKM1_FINANCIAL_REPORTS.findIndex((report) => report.id === selectedReport?.id);
  }, [selectedReport?.id]);

  const selectedMenuNumber = selectedIndex >= 0 ? selectedIndex + 1 : 1;
  const totalReports = AKM1_FINANCIAL_REPORTS.length;
  const totalInteractive = AKM1_FINANCIAL_REPORTS.filter((report) => report.practiceMode !== 'template').length;
  const blockCount = selectedReport?.blocks.length ?? 0;

  const navigateRelative = (direction: -1 | 1) => {
    if (!selectedReport || totalReports === 0) return;
    const currentIndex = selectedIndex >= 0 ? selectedIndex : 0;
    const nextIndex = (currentIndex + direction + totalReports) % totalReports;
    setSelectedReportId(AKM1_FINANCIAL_REPORTS[nextIndex].id);
  };

  return (
    <div className="akbi-report-shell mx-auto max-w-[1440px] px-4 md:px-8 animate-fade-in-up">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-2xl border border-navy-500/30 dark:border-navy-500 bg-white dark:bg-navy-800/80 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all hover:border-gold-500 hover:text-gold-700 dark:hover:border-gold/50 dark:hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500/50"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
        <div className="rounded-2xl border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-gold">
          AKM I · Akuntansi Keuangan
        </div>
      </div>

      <section className="learning-surface mb-6 overflow-hidden rounded-[2.2rem] border border-gold/20 bg-calm-aurora p-5 shadow-calm md:p-7">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr),360px] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-gold">
              <Sparkles size={14} /> Format laporan dan worksheet
            </div>
            <h1 className="font-display text-3xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-4xl">
              Ruang Laporan Akuntansi Keuangan
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
              Pilih laporan atau worksheet, pahami alur pengukurannya, lalu kerjakan dengan format Kieso dan builder interaktif. Format mencakup financial statements, reconciliation, receivables, dan inventory valuation.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-2xl border border-gold/20 bg-gold/10 p-3">
              <div className="text-2xl font-black text-gold-700 dark:text-gold">{totalReports}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-500">Format</div>
            </div>
            <div className="rounded-2xl border border-navy-500/20 dark:border-navy-500/70 bg-white dark:bg-navy-900/45 p-3 shadow-sm">
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100">{totalInteractive}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-500">Praktik</div>
            </div>
            <div className="rounded-2xl border border-navy-500/20 dark:border-navy-500/70 bg-white dark:bg-navy-900/45 p-3 shadow-sm">
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100">TM</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-500">1–14</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[360px,minmax(0,1fr)] xl:grid-cols-[400px,minmax(0,1fr)]">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="learning-card overflow-hidden rounded-[1.8rem] p-0">
            <div className="border-b border-navy-500/20 dark:border-navy-500/60 p-5">
              <div className="mb-2 flex items-center gap-2 text-gold-700 dark:text-gold">
                <Calculator size={18} />
                <span className="eyebrow">Financial Reporting</span>
              </div>
              <h2 className="font-display text-2xl font-black leading-tight text-slate-900 dark:text-slate-100">
                Daftar laporan dan worksheet
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Cari laporan, schedule, atau kasus Kieso yang akan dikerjakan.
              </p>
            </div>

            <div className="space-y-3 border-b border-navy-500/20 dark:border-navy-500/60 p-4">
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari laporan, TM, atau kata kunci..."
                  className="w-full rounded-2xl border border-navy-500/30 dark:border-navy-500 bg-white dark:bg-navy-900/70 py-3 pl-9 pr-3 text-sm font-semibold text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-gold-500 dark:focus:border-gold/50"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filterOptions.map((filter) => {
                  const active = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-wider transition-all ${
                        active
                          ? 'border-gold-500/40 dark:border-gold/35 bg-gold-50 dark:bg-gold/15 text-gold-700 dark:text-gold shadow-sm'
                          : 'border-navy-500/20 dark:border-navy-500/70 bg-white dark:bg-navy-900/30 text-slate-600 dark:text-slate-500 hover:border-gold-500/50 dark:hover:border-gold/25 hover:text-slate-800 dark:hover:text-slate-300'
                      }`}
                    >
                      <Filter size={12} /> {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="max-h-[58vh] space-y-2 overflow-y-auto p-2 pr-2.5">
              {filteredMenu.length ? filteredMenu.map((item) => {
                const active = selectedReport?.id === item.id;
                const report = item.report;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedReportId(item.id)}
                    className={`w-full flex items-start text-left gap-3 rounded-2xl p-4 transition-all ${
                      active
                        ? 'border border-gold-500/40 dark:border-gold/30 bg-gold-50/50 dark:bg-gold/10 shadow-sm'
                        : 'border border-transparent hover:bg-slate-50 dark:hover:bg-navy-800/40'
                    }`}
                  >
                    <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <span className="flex items-start justify-between gap-3">
                        <span className="line-clamp-2 text-sm font-black leading-snug text-slate-800 dark:text-slate-200">{report.shortTitle || item.label}</span>
                        <FileText size={15} className="mt-0.5 shrink-0 text-slate-500" />
                      </span>
                      <span className="line-clamp-2 text-xs font-medium leading-relaxed text-slate-500">{item.label}</span>
                      <span className="flex flex-wrap gap-1.5 pt-1">
                        <span className="rounded-md border border-navy-500/20 dark:border-navy-500/40 bg-white dark:bg-navy-900 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-400">{report.tm}</span>
                        <span className="rounded-md border border-navy-500/20 dark:border-navy-500/40 bg-white dark:bg-navy-900 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-400">{modeLabel[report.practiceMode]}</span>
                      </span>
                    </span>
                  </button>
                );
              }) : (
                <div className="rounded-2xl border border-dashed border-navy-500/30 dark:border-navy-500/70 p-5 text-center text-sm text-slate-500">
                  Tidak ada laporan atau worksheet yang cocok dengan pencarian.
                </div>
              )}
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          {selectedReport ? (
            <article className="learning-surface overflow-hidden rounded-[2.2rem] border border-navy-500/20 dark:border-navy-500/70 shadow-calm bg-white dark:bg-transparent">
              <div className="border-b border-navy-500/20 dark:border-navy-500/60 p-5 md:p-7">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-xl border border-gold-500/30 dark:border-gold/25 bg-gold-50 dark:bg-gold/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-gold-700 dark:text-gold">
                      Laporan {selectedMenuNumber}/{totalReports}
                    </span>
                    <span className="rounded-xl border border-navy-500/20 dark:border-navy-500 bg-slate-50 dark:bg-navy-900/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {selectedReport.tm}
                    </span>
                    <span className="rounded-xl border border-navy-500/20 dark:border-navy-500 bg-slate-50 dark:bg-navy-900/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {modeLabel[selectedReport.practiceMode]}
                    </span>
                    <span className="rounded-xl border border-navy-500/20 dark:border-navy-500 bg-slate-50 dark:bg-navy-900/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      {priorityLabel[selectedReport.priority]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateRelative(-1)}
                      className="rounded-xl border border-navy-500/30 dark:border-navy-500 bg-white dark:bg-navy-900/50 px-3 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 transition hover:border-gold-500/50 dark:hover:border-gold/40 hover:text-gold-700 dark:hover:text-gold shadow-sm"
                    >
                      Sebelumnya
                    </button>
                    <button
                      onClick={() => navigateRelative(1)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-gold-500/30 dark:border-gold/30 bg-gold-50 dark:bg-gold/10 px-3 py-2 text-xs font-bold text-gold-700 dark:text-gold transition hover:bg-gold-100 dark:hover:bg-gold/15 shadow-sm"
                    >
                      Berikutnya <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr),280px] xl:items-start">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-gold-700 dark:text-gold">
                      <BookOpen size={18} />
                      <span className="eyebrow">Format aktif</span>
                    </div>
                    <h2 className="font-display text-2xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-3xl">
                      {selectedReport.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-[15px]">
                      {selectedReport.description}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-slate-500">Sumber: {selectedReport.source}</p>
                  </div>

                  <div className="grid gap-2 rounded-[1.5rem] border border-navy-500/10 dark:border-navy-500/70 bg-slate-50 dark:bg-navy-900/35 p-3">
                    <div className="flex items-center justify-between rounded-2xl bg-white dark:bg-navy-950/35 px-3 py-2 shadow-sm dark:shadow-none">
                      <span className="text-xs font-bold text-slate-500">Jumlah blok</span>
                      <span className="font-black text-slate-900 dark:text-slate-100">{blockCount}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-white dark:bg-navy-950/35 px-3 py-2 shadow-sm dark:shadow-none">
                      <span className="text-xs font-bold text-slate-500">Mode</span>
                      <span className="font-black text-gold-700 dark:text-gold">{modeLabel[selectedReport.practiceMode]}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-white dark:bg-navy-950/35 px-3 py-2 shadow-sm dark:shadow-none">
                      <span className="text-xs font-bold text-slate-500">Prioritas</span>
                      <span className="font-black text-slate-900 dark:text-slate-100">{priorityLabel[selectedReport.priority]}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 border-b border-navy-500/20 dark:border-navy-500/60 bg-slate-50/50 dark:bg-navy-950/20 p-4 md:grid-cols-3 md:p-5">
                <div className="flex gap-3 rounded-2xl border border-navy-500/20 dark:border-navy-500/40 bg-white dark:bg-navy-900/30 p-4 shadow-sm">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600 dark:text-gold" />
                  <div>
                    <div className="font-black text-slate-900 dark:text-slate-100 mb-1 text-sm">1. Pahami susunan</div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Kenali urutan komponen laporan dan posisi subtotal.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl border border-navy-500/20 dark:border-navy-500/40 bg-white dark:bg-navy-900/30 p-4 shadow-sm">
                  <PanelLeft size={17} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="font-black text-slate-900 dark:text-slate-100 mb-1 text-sm">2. Isi angka</div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Gunakan data kasus Kieso pada baris input atau worksheet.</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl border border-navy-500/20 dark:border-navy-500/40 bg-white dark:bg-navy-900/30 p-4 shadow-sm">
                  <ClipboardList size={17} className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" />
                  <div>
                    <div className="font-black text-slate-900 dark:text-slate-100 mb-1 text-sm">3. Cek total akhir</div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Pastikan subtotal, jurnal, schedule, dan nilai akhir konsisten.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 xl:p-8 space-y-6">
                {selectedReport.blocks.map((block, index) => (
                  <CourseBlockCard key={index} block={block} />
                ))}
              </div>
            </article>
          ) : (
            <div className="learning-card rounded-[2rem] py-20 text-center text-slate-500">
              <Layers className="mx-auto mb-3 text-gold" size={30} />
              Pilih laporan atau worksheet terlebih dahulu.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
