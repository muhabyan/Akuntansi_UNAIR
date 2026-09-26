import type { FigureMobileFlow } from '../../types';

export function AgencyMobileOverview() {
  return (
    <section aria-label="Ringkasan visual teori keagenan pada layar sempit" className="mb-3 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden">
      <h4 className="text-base font-bold">Teori keagenan: gambaran utuh</h4>
      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">Pemegang saham terhubung dengan dua pihak yang kepentingannya bisa berbeda.</p>
      <div className="mt-3 rounded-lg border border-sky-300 bg-sky-50 p-2.5 text-center dark:border-sky-700 dark:bg-sky-950/50">
        <strong className="block text-sm text-sky-900 dark:text-sky-100">Pemegang saham</strong>
        <span className="text-sm text-slate-700 dark:text-slate-300">Tujuan: nilai saham dan dividen</span>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2 text-center text-sm font-bold leading-snug text-rose-800 dark:text-rose-200" aria-hidden="true">
        <span className="border-b-2 border-dashed border-amber-500 pb-1">↓ Konflik 1</span>
        <span className="border-b-2 border-dashed border-violet-500 pb-1">↓ Konflik 2</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="min-w-0 rounded-lg border border-amber-300 bg-amber-50 p-2.5 dark:border-amber-700 dark:bg-amber-950/40">
          <strong className="block text-sm text-amber-950 dark:text-amber-100">Manajemen</strong>
          <span className="text-sm leading-snug text-slate-700 dark:text-slate-300">Gaji, fasilitas, kewenangan</span>
        </div>
        <div className="min-w-0 rounded-lg border border-violet-300 bg-violet-50 p-2.5 dark:border-violet-700 dark:bg-violet-950/40">
          <strong className="block text-sm text-violet-950 dark:text-violet-100">Kreditor</strong>
          <span className="text-sm leading-snug text-slate-700 dark:text-slate-300">Keamanan pokok dan bunga</span>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-slate-100 px-3 py-2 text-sm leading-relaxed text-slate-800 dark:bg-slate-800 dark:text-slate-100"><strong>Pengurang konflik:</strong> insentif berbasis saham dan pengawasan untuk manajer; debt covenants untuk melindungi kreditor.</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Uraian tiap hubungan tersedia dalam “Isi diagram dalam teks” di bawah.</p>
    </section>
  );
}

export function SmlMobileOverview() {
  return (
    <section aria-label="Ringkasan visual SML pada layar sempit" className="mb-3 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden">
      <h4 className="text-base font-bold">Garis SML: gambaran utuh</h4>
      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">Risiko pasar (beta) bertambah ke kanan; return yang disyaratkan naik mengikuti garis.</p>
      <svg viewBox="0 0 320 220" className="mt-3 h-auto w-full" role="img" aria-label="Garis SML naik dari return bebas risiko 8 persen pada beta nol ke return pasar 15 persen pada beta satu. Titik di atas garis memiliki ekspektasi di atas CAPM; titik di bawah garis memiliki ekspektasi di bawah CAPM.">
        <rect x="1" y="1" width="318" height="218" rx="12" fill="#0f172a" />
        <text x="43" y="23" fill="#f8fafc" fontSize="12" fontWeight="700">Required return (ri)</text>
        <path d="M40 36 V176 H296" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M40 150 L280 58" fill="none" stroke="#38bdf8" strokeWidth="3.5" />
        <text x="273" y="49" fill="#7dd3fc" fontSize="12" fontWeight="700">SML</text>
        <circle cx="40" cy="150" r="4" fill="#c4b5fd" />
        <text x="47" y="164" fill="#e9d5ff" fontSize="12" fontWeight="700">rRF 8%</text>
        <path d="M160 104 V176" stroke="#64748b" strokeDasharray="4 4" />
        <circle cx="160" cy="104" r="5" fill="#34d399" />
        <text x="170" y="99" fill="#a7f3d0" fontSize="12" fontWeight="700">Pasar 15%</text>
        <text x="156" y="194" fill="#a7f3d0" fontSize="12" textAnchor="middle">β = 1</text>
        <text x="297" y="194" fill="#f8fafc" fontSize="12" textAnchor="end">Beta β</text>
        <text x="75" y="65" fill="#a7f3d0" fontSize="12" fontWeight="700">Di atas SML</text>
        <text x="178" y="149" fill="#fecaca" fontSize="12" fontWeight="700">Di bawah SML</text>
      </svg>
      <div className="mt-3 rounded-lg bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-900 dark:bg-sky-950 dark:text-sky-100">CAPM: ri = rRF + βi × (rM − rRF)</div>
      <div className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100"><strong>Di atas:</strong> return ekspektasi &gt; CAPM; tampak undervalued.</p>
        <p className="rounded-lg bg-rose-50 px-3 py-2 text-rose-950 dark:bg-rose-950 dark:text-rose-100"><strong>Di bawah:</strong> return ekspektasi &lt; CAPM; tampak overvalued.</p>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">Angka 8% dan 15% adalah contoh pada materi. Rincian variabel dan cara menilai saham ada pada penjelasan teks di bawah.</p>
    </section>
  );
}

export function MobileParticipantFlow({ flow }: { flow: FigureMobileFlow }) {
  return (
    <section aria-label={flow.title} className="mb-3 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden">
      <h4 className="text-base font-bold">{flow.title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300"><span className="font-bold text-sky-700 dark:text-sky-300">Panah utuh</span> mengurutkan tugas dalam satu pool. <span className="font-bold text-amber-700 dark:text-amber-300">Panah putus-putus</span> menunjukkan pesan atau barang yang berpindah antar-pool.</p>
      <ol className="mt-3 space-y-0">
        {flow.stages.map((stage, index) => (
          <li key={index}>
            <div className={`rounded-xl border p-3 ${stage.actor === 'Customer' ? 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/40' : 'border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/40'}`}>
              <h5 className="text-sm font-bold">{index + 1}. Pool {stage.actor}</h5>
              <ol className="mt-2 space-y-1.5 text-sm leading-relaxed">
                {stage.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex gap-2">
                    <span aria-hidden="true" className="font-bold text-sky-700 dark:text-sky-300">{actionIndex === 0 ? '●' : '↓'}</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ol>
              {stage.note && <p className="mt-2 border-t border-current/10 pt-2 text-xs leading-relaxed">{stage.note}</p>}
            </div>
            {flow.messages[index] && (
              <div className="mx-5 border-l-2 border-dashed border-amber-600 py-2 pl-3 text-xs font-semibold leading-relaxed text-amber-900 dark:text-amber-200">
                <span aria-hidden="true">↓</span> Message flow: {flow.messages[index]}
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">Urutan ini merangkum soal dasar buku; langkah Customer menuju jendela berlangsung saat Barista menyiapkan pesanan.</p>
    </section>
  );
}
