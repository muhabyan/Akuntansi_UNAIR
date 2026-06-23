// =============================================================
// src/components/PerpajakanView.tsx
// Renderer khusus PJK201 (Perpajakan I) — Pra-UAS TM 8-14.
// Membaca data verbatim dari src/data/perpajakan/perpajakanPraUAS.ts.
// Fitur: nav TM, search, filter cepat (Dasar Hukum/Jebakan UAS/Contoh Kasus),
// checklist localStorage, audit kelengkapan chunk. Isi materi TIDAK diringkas.
// =============================================================
import { useMemo, useState } from 'react';
import {
  ArrowLeft, Scale, Search, Check, ChevronLeft, ChevronRight,
  FileText, AlertTriangle, BookOpen, Gavel, ListChecks,
} from 'lucide-react';
import { perpajakanPraUAS, type PjkBlock, type PjkModule } from '../data/perpajakan/perpajakanPraUAS';
import { useStudyProgress, materialKey } from '../hooks/useStudyProgress';
import type { Course } from '../types';

const CODE = 'PJK201';
const DATA = perpajakanPraUAS;

// Sorot rujukan hukum (UU/PP/PMK/PER, "Pasal N", "ayat (n)") agar "Dasar Hukum" menonjol.
const LAW_RE = /(UU\s*KUP|UU\s*HPP|UU\s*PDRD|UU\s*\d+\/\d+|PP\s*\d+\/\d+|PMK\s*\d+\/\d+|PMK\s*\d+\/PMK[.\d]*\/\d+|PER[-\s]?\d+\/PJ\/\d+|SE[-\s]?\d+\/PJ\/\d+|Pasal\s*\d+\w?|ayat\s*\(\d+\w?\)|huruf\s*[a-z]\b|angka\s*\d+)/gi;

function HL({ text, q }: { text: string; q: string }) {
  // gabung penyorotan hukum + pencarian
  const parts: { t: string; law?: boolean; hit?: boolean }[] = [];
  let last = 0; let m: RegExpExecArray | null;
  const re = new RegExp(LAW_RE);
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: text.slice(last, m.index) });
    parts.push({ t: m[0], law: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ t: text.slice(last) });
  const ql = q.trim().toLowerCase();
  return (
    <>
      {parts.map((p, i) => {
        const hit = ql && p.t.toLowerCase().includes(ql);
        return (
          <span key={i} className={p.law ? 'text-gold font-medium' : undefined}>
            {hit ? <mark className="bg-gold/30 text-slate-100 rounded px-0.5">{p.t}</mark> : p.t}
          </span>
        );
      })}
    </>
  );
}

function Block({ b, q }: { b: PjkBlock; q: string }) {
  if (b.k === 'h') return <h3 className="text-lg font-display font-bold text-gold mt-6 mb-2">{b.text}</h3>;
  if (b.k === 'p') return <p className="text-slate-300 leading-relaxed mb-3 text-[15px]"><HL text={b.text || ''} q={q} /></p>;
  if (b.k === 'list') return (
    <ul className="space-y-1.5 mb-3">
      {(b.items || []).map((it, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] text-slate-300"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" /><span><HL text={it} q={q} /></span></li>
      ))}
    </ul>
  );
  // pre (tabel / teks rata kolom) — dipertahankan utuh, bisa geser horizontal
  return (
    <div className="mb-3 overflow-x-auto rounded-lg border border-navy-600 bg-navy-900">
      <pre className="text-[12.5px] leading-relaxed text-slate-300 p-3 whitespace-pre font-mono">{b.text}</pre>
    </div>
  );
}

const CHIPS: { label: string; q: string; icon: React.ReactNode }[] = [
  { label: 'Dasar Hukum', q: 'dasar hukum', icon: <Gavel size={13} /> },
  { label: 'Jebakan UAS', q: 'jebakan', icon: <AlertTriangle size={13} /> },
  { label: 'Contoh Kasus', q: 'contoh kasus', icon: <BookOpen size={13} /> },
  { label: 'Hafalan Pasal', q: 'hafalan', icon: <ListChecks size={13} /> },
];

function ModuleDetail({ m, q, setQ, onBack, onPrev, onNext }: {
  m: PjkModule; q: string; setQ: (s: string) => void; onBack: () => void; onPrev: () => void; onNext: () => void;
}) {
  const { isDone, toggle } = useStudyProgress();
  const key = materialKey(CODE, m.tm);
  const done = isDone(key);
  const ql = q.trim().toLowerCase();

  // saat search aktif, hanya tampilkan chunk yang memuat query
  const pages = useMemo(() => {
    if (!ql) return m.pages;
    return m.pages.filter((p) => p.blocks.some((b) => (b.text || '').toLowerCase().includes(ql) || (b.items || []).some((it) => it.toLowerCase().includes(ql))));
  }, [m.pages, ql]);

  return (
    <div className="animate-fade-in-up max-w-3xl">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-gold mb-4 text-sm font-medium"><ArrowLeft size={16} /> Daftar TM 8–14</button>
      <div className="flex items-center gap-2 text-xs mb-2">
        <span className="px-2 py-0.5 rounded bg-navy-700 border border-navy-500 text-gold font-bold">TM {m.tm}</span>
        <span className="text-slate-500">{m.pages.length} halaman · sumber: {m.sourcePdf.replace(/\(1\)\.pdf$/, '').replace(/_/g, ' ')}</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-100 leading-tight">{m.title.replace(/^TM\d+\s*-\s*/, '')}</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((c) => (
          <button key={c.label} onClick={() => setQ(q === c.q ? '' : c.q)}
            className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors ${q === c.q ? 'bg-gold text-navy-900 border-gold' : 'bg-navy-700 border-navy-500 text-slate-300 hover:border-gold/50'}`}>
            {c.icon} {c.label}
          </button>
        ))}
      </div>
      {ql && <p className="mt-3 text-xs text-slate-500">Menampilkan {pages.length} dari {m.pages.length} halaman yang memuat "{q}". <button onClick={() => setQ('')} className="text-gold underline">Tampilkan semua</button></p>}

      <div className="mt-6">
        {pages.map((p) => (
          <section key={p.chunkId} className="mb-8 pb-6 border-b border-navy-700 last:border-0">
            <div className="text-[11px] font-mono text-slate-600 mb-2">{p.chunkId} · Halaman {p.page}</div>
            {p.blocks.map((b, i) => <Block key={i} b={b} q={q} />)}
          </section>
        ))}
      </div>

      <button onClick={() => toggle(key)}
        className={`mt-2 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium border transition-all ${done ? 'bg-gold text-navy-900 border-gold' : 'bg-gold/10 text-gold border-gold/30 hover:bg-gold hover:text-navy-900'}`}>
        <Check size={18} strokeWidth={3} /> {done ? 'Sudah dipelajari' : 'Tandai sudah dipelajari'}
      </button>
      <nav className="mt-6 flex items-center justify-between gap-3 border-t border-navy-600 pt-6">
        <button onClick={onPrev} disabled={m.tm <= DATA.modules[0].tm}
          className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-700 border border-navy-500 text-sm text-slate-300 hover:border-gold/50 disabled:opacity-40 disabled:cursor-not-allowed">
          <ChevronLeft size={16} /> {m.tm > DATA.modules[0].tm ? `TM ${m.tm - 1}` : 'Awal'}
        </button>
        <button onClick={onNext} disabled={m.tm >= DATA.modules[DATA.modules.length - 1].tm}
          className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-xl bg-navy-700 border border-navy-500 text-sm text-slate-300 hover:border-gold/50 disabled:opacity-40 disabled:cursor-not-allowed">
          {m.tm < DATA.modules[DATA.modules.length - 1].tm ? `TM ${m.tm + 1}` : 'Akhir'} <ChevronRight size={16} />
        </button>
      </nav>
    </div>
  );
}

export default function PerpajakanView({ course, onBack }: { course: Course; onBack: () => void }) {
  const [openTm, setOpenTm] = useState<number | null>(null);
  const [q, setQ] = useState('');
  const { isDone, toggle, countDone } = useStudyProgress();
  const mods = DATA.modules;
  const doneCount = useMemo(() => countDone(mods.map((m) => materialKey(CODE, m.tm))), [countDone, mods]);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    if (!ql) return mods;
    return mods.filter((m) => (m.title.toLowerCase().includes(ql)) || m.pages.some((p) => p.blocks.some((b) => (b.text || '').toLowerCase().includes(ql) || (b.items || []).some((it) => it.toLowerCase().includes(ql)))));
  }, [q, mods]);

  const current = openTm != null ? mods.find((m) => m.tm === openTm) : undefined;
  const go = (tm: number) => { setOpenTm(tm); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const totalChunks = mods.reduce((s, m) => s + m.pages.length, 0);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 min-h-[calc(100vh-160px)]">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">
          <div className="bg-navy-700 border border-navy-500 rounded-2xl p-5 shadow-lg">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-gold mb-4 font-medium text-sm"><ArrowLeft size={16} /> Kembali</button>
            <h2 className="text-xl md:text-2xl font-display font-bold text-slate-100 leading-tight mb-2 flex items-center gap-2"><Scale size={20} className="text-gold shrink-0" /> {course.name}</h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 bg-navy-900 px-2 py-1 rounded-md border border-navy-600">{course.code}</span>
              <span className="text-xs text-gold font-medium">{course.sks} SKS</span>
              <span className="text-xs text-slate-500">Pra-UAS · per {DATA.dateBasis}</span>
            </div>
            <div className="mt-4 relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari pasal, istilah, materi…"
                className="w-full bg-navy-900 border border-navy-600 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-200 outline-none focus:border-gold/50" />
            </div>
          </div>
          <div className="bg-navy-700 border border-navy-500 rounded-2xl p-3 shadow-lg lg:sticky lg:top-24">
            <div className="grid grid-cols-4 lg:grid-cols-1 gap-1.5">
              {mods.map((m) => {
                const d = isDone(materialKey(CODE, m.tm)); const active = current?.tm === m.tm;
                return (
                  <button key={m.tm} onClick={() => go(m.tm)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${active ? 'bg-gold/10 text-gold border border-gold/20' : 'text-slate-400 hover:bg-navy-600 hover:text-slate-200 border border-transparent'}`}>
                    <span className={`text-xs font-bold ${d ? 'text-gold' : ''}`}>TM{m.tm}</span>
                    <span className="hidden lg:inline truncate text-xs text-slate-500">{m.title.replace(/^TM\d+\s*-\s*/, '').slice(0, 22)}</span>
                    {d && <Check size={13} className="ml-auto text-gold hidden lg:block" />}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 px-2">
              <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Progres</span><span>{doneCount}/{mods.length}</span></div>
              <div className="h-1.5 rounded-full bg-navy-900 overflow-hidden"><div className="h-full bg-gold transition-all" style={{ width: `${(doneCount / mods.length) * 100}%` }} /></div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 bg-navy-800 border border-navy-600 rounded-2xl p-5 md:p-8 shadow-xl">
          {current ? (
            <ModuleDetail m={current} q={q} setQ={setQ}
              onBack={() => { setOpenTm(null); setQ(''); }} onPrev={() => go(current.tm - 1)} onNext={() => go(current.tm + 1)} />
          ) : (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl font-display font-bold text-slate-100 flex items-center gap-3 mb-1"><Scale className="text-gold" /> Perpajakan I — Pra-UAS (TM 8–14)</h1>
              <p className="text-slate-400 text-sm mb-2">Materi lengkap dengan dasar hukum (UU/PP/PMK/PER), pasal, ayat, contoh kasus, dan jebakan UAS — dipindahkan utuh dari sumbermu.</p>
              <div className="mb-6 inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-1.5">
                <Check size={13} /> Audit kelengkapan: {totalChunks} chunk terintegrasi (TM8–14)
              </div>
              {filtered.length === 0 && <p className="text-slate-500 text-sm">Tidak ada TM yang memuat "{q}".</p>}
              <div className="space-y-3">
                {filtered.map((m) => {
                  const k = materialKey(CODE, m.tm); const d = isDone(k);
                  return (
                    <div key={m.tm} className="flex items-center gap-3 bg-navy-700 border border-navy-500 rounded-xl p-4 hover:border-gold/30 transition-colors">
                      <button onClick={() => toggle(k)} title="Tandai selesai" className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 ${d ? 'bg-gold border-gold text-navy-900' : 'border-navy-500 text-transparent hover:border-gold'}`}><Check size={14} strokeWidth={3} /></button>
                      <button onClick={() => go(m.tm)} className="flex-1 text-left min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded shrink-0">TM {m.tm}</span>
                          <h4 className={`font-bold truncate ${d ? 'text-gold' : 'text-slate-200'}`}>{m.title.replace(/^TM\d+\s*-\s*/, '')}</h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{m.pages.length} halaman / chunk</p>
                      </button>
                      <button onClick={() => go(m.tm)} className="px-3 py-2 rounded-lg bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-navy-900 text-sm font-medium flex items-center gap-2 shrink-0"><FileText size={15} /> Baca</button>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-xs text-slate-500">Catatan: dasar hukum (mis. PMK 15/2025, PER-3/PJ/2026) mengikuti sumber yang kamu kirim. Tetap cocokkan dengan regulasi resmi terbaru bila ragu.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
