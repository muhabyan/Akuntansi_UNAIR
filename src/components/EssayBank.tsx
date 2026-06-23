// =============================================================
// src/components/EssayBank.tsx — bank soal esai/praktik AKBI.
// Batch UI/UX 5: lebih nyaman sebagai ruang kerja kasus tanpa
// mengubah isi soal, instruksi, rubrik, atau panduan jawaban.
// =============================================================
import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronRight, Clock, FileText, PenLine, Search, Target } from 'lucide-react';
import type { BankSoal } from '../types';

const LABEL: Record<string, string> = {
  essay: 'Esai',
  case: 'Kasus',
  calculation: 'Hitungan',
  'concept-check': 'Konsep',
  journal: 'Jurnal',
  report: 'Laporan',
  worksheet: 'Worksheet',
  'cost-sheet': 'Cost Sheet',
  't-account': 'Akun T',
};

function DetailList({ title, items, icon }: { title: string; items?: string[]; icon?: ReactNode }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="rounded-2xl border border-navy-600 bg-navy-900/52 p-4">
      <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-gold">{icon} {title}</p>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-300">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

export default function EssayBank({ items, title = 'Bank Soal Esai & Kasus' }: { items: BankSoal[]; title?: string }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const types = useMemo(() => Array.from(new Set(items.map((item) => item.type))), [items]);
  const filtered = useMemo(() => {
    const q = normalize(query);
    return items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => typeFilter === 'all' || item.type === typeFilter)
      .filter(({ item }) => {
        if (!q) return true;
        const haystack = normalize([
          item.question,
          item.scope ?? '',
          item.difficulty ?? '',
          item.context ?? '',
          ...(item.data ?? []),
          ...(item.instructions ?? []),
          ...(item.outputFormat ?? []),
          item.answerGuide,
        ].join(' '));
        return haystack.includes(q);
      });
  }, [items, query, typeFilter]);

  if (items.length === 0) return null;

  return (
    <div className="animate-fade-in-up">
      <section className="learning-surface mb-5 overflow-hidden">
        <div className="bg-calm-aurora px-5 py-5 md:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="eyebrow mb-2">Bank Soal Praktik</div>
              <h3 className="flex items-center gap-3 font-display text-2xl font-black text-slate-100 md:text-3xl"><PenLine className="text-gold" /> {title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">Kerjakan sebagai latihan praktik: susun laporan, jurnal, schedule/worksheet, tabel perhitungan, dan analisis sesuai instruksi. Buka panduan setelah mencoba menyusun jawaban sendiri.</p>
            </div>
            <div className="rounded-2xl border border-navy-500/70 bg-navy-950/38 p-4 text-sm">
              <div className="flex justify-between gap-8"><span className="text-slate-500">Total soal</span><span className="font-black text-slate-100">{items.length}</span></div>
              <div className="mt-1 flex justify-between gap-8"><span className="text-slate-500">Tampil</span><span className="font-black text-gold">{filtered.length}</span></div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-navy-500/65 p-4 md:grid-cols-[1fr_auto] md:p-5">
          <label className="relative block">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari topik, laporan, jurnal, worksheet, FIFO..."
              className="w-full rounded-2xl border border-navy-500 bg-navy-950 px-10 py-3 text-sm text-slate-100 outline-none focus:border-gold"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setTypeFilter('all')} className={`rounded-2xl border px-3 py-2 text-xs font-black ${typeFilter === 'all' ? 'border-gold bg-gold text-navy-950' : 'border-navy-500 bg-navy-850 text-slate-300 hover:border-gold/50'}`}>Semua</button>
            {types.map((type) => (
              <button key={type} onClick={() => setTypeFilter(type)} className={`rounded-2xl border px-3 py-2 text-xs font-black ${typeFilter === type ? 'border-gold bg-gold text-navy-950' : 'border-navy-500 bg-navy-850 text-slate-300 hover:border-gold/50'}`}>{LABEL[type] ?? type}</button>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-3.5">
        {filtered.map(({ item: b, index: originalIndex }, visibleIndex) => (
          <div key={originalIndex} className="essay-question-card overflow-hidden rounded-[1.35rem] border border-navy-500 bg-navy-800/78 shadow-sm">
            <button onClick={() => setOpen((prev) => ({ ...prev, [originalIndex]: !prev[originalIndex] }))} className="w-full p-4 text-left transition-colors hover:bg-navy-700/45 md:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-sm font-black text-gold">{visibleIndex + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 font-black uppercase tracking-[0.14em] text-gold">{LABEL[b.type] ?? b.type}</span>
                    {b.scope && <span className="inline-flex items-center gap-1 rounded-full border border-navy-500 px-2.5 py-1 text-slate-400"><Target size={12} /> {b.scope}</span>}
                    {b.difficulty && <span className="rounded-full border border-navy-500 px-2.5 py-1 text-slate-400">{b.difficulty}</span>}
                    {b.estimatedTime && <span className="inline-flex items-center gap-1 rounded-full border border-navy-500 px-2.5 py-1 text-slate-400"><Clock size={12} /> {b.estimatedTime}</span>}
                  </div>
                  <span className="block text-sm font-semibold leading-7 text-slate-100 md:text-[15px]">{b.question}</span>
                </div>
                <ChevronRight size={18} className={`mt-1 shrink-0 text-slate-500 transition-transform ${open[originalIndex] ? 'rotate-90' : ''}`} />
              </div>
            </button>

            {open[originalIndex] && (
              <div className="space-y-3 border-t border-navy-500/65 px-4 pb-4 pt-4 md:px-5 md:pb-5">
                {b.context && (
                  <div className="rounded-2xl border border-navy-600 bg-navy-900/52 p-4 text-sm leading-7 text-slate-300">
                    <span className="font-black text-gold">Konteks: </span>{b.context}
                  </div>
                )}
                <DetailList title="Data Kasus" items={b.data} icon={<FileText size={14} />} />
                <DetailList title="Instruksi Pengerjaan" items={b.instructions} icon={<Target size={14} />} />
                <DetailList title="Format Jawaban yang Diminta" items={b.outputFormat} icon={<FileText size={14} />} />
                <DetailList title="Rubrik Ringkas" items={b.rubric} icon={<ListChecksIcon />} />
                <div className="rounded-2xl border border-gold/22 bg-gold/10 p-4 text-sm leading-7 text-slate-300">
                  <span className="font-black text-gold">Panduan jawaban: </span>{b.answerGuide}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="learning-card p-8 text-center text-sm text-slate-500">Tidak ada soal yang cocok dengan filter saat ini.</div>
      )}

      <p className="mt-4 rounded-2xl border border-navy-500/70 bg-navy-900/35 px-4 py-3 text-xs leading-6 text-slate-500">Panduan jawaban bersifat kerangka pembanding. Untuk jawaban esai, susunan laporan, langkah hitung, dan alasan klasifikasi tetap harus ditulis lengkap.</p>
    </div>
  );
}

function ListChecksIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 18h8"/></svg>;
}
