import type { Reading } from '../../../types';
import { CASE_CAPITAL_BUDGETING_EVAL } from '../mankeuPracticeCases';

const SVG_NPV_PROFILE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PROFIL NPV DUA PROYEK MUTUALLY EXCLUSIVE &amp; CROSSOVER RATE</text>
  
  <!-- Axis -->
  <line x1="80" y1="180" x2="600" y2="180" stroke="#475569" stroke-width="1.5"/>
  <line x1="80" y1="55" x2="80" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="70" y="60" fill="#94a3b8" font-size="9" text-anchor="end">NPV (Rp)</text>
  <text x="600" y="195" fill="#94a3b8" font-size="9" text-anchor="end">Cost of Capital / WACC (%)</text>

  <!-- Project A curve (Steeper) -->
  <path d="M 80 65 Q 260 140 520 180" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <text x="530" y="175" fill="#38bdf8" font-size="10" font-weight="700">IRR Proyek A</text>

  <!-- Project B curve (Flatter) -->
  <path d="M 80 100 Q 280 140 560 180" fill="none" stroke="#34d399" stroke-width="3"/>
  <text x="570" y="188" fill="#34d399" font-size="10" font-weight="700">IRR Proyek B</text>

  <!-- Crossover point -->
  <circle cx="280" cy="140" r="5" fill="#f43f5e"/>
  <line x1="280" y1="140" x2="280" y2="180" stroke="#f43f5e" stroke-dasharray="3,3"/>
  <text x="280" y="130" fill="#f43f5e" font-size="9.5" font-weight="700" text-anchor="middle">Crossover Rate</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'The Basics of Capital Budgeting: NPV, IRR, MIRR, & Payback',
  ref: 'Brigham & Houston Ch. 11',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 6: Menguasai teknik penganggaran modal (Capital Budgeting), Net Present Value (NPV), Internal Rate of Return (IRR), Modified Internal Rate of Return (MIRR), Payback Period, Discounted Payback, Profitability Index (PI), serta resolusi konflik proyek saling eksklusif (*Mutually Exclusive Projects*).',
  objectives: [
    'Menjelaskan proses Penganggaran Modal (Capital Budgeting) dan signifikansinya bagi pertumbuhan perusahaan.',
    'Menghitung dan menerapkan kriteria keputusan Net Present Value (NPV).',
    'Menghitung Internal Rate of Return (IRR) dan memahami asumsi laju reinvestasi (Reinvestment Rate Assumption).',
    'Menghitung Modified IRR (MIRR) yang mengatasi kelemahan IRR jamak (Multiple IRRs).',
    'Menghitung Payback Period dan Discounted Payback Period.',
    'Memecahkan konflik keputusan antara NPV vs IRR pada proyek Mutually Exclusive berbasis Crossover Rate.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Profil NPV Dua Proyek dan Titik Crossover Rate',
      svg: SVG_NPV_PROFILE,
      caption: 'Gambar 6.1: Konflik pemeringkatan proyek mutually exclusive pada tingkat diskonto di sebelah kiri crossover rate.'
    },

    { kind: 'h2', text: '1. Kriteria Pengambilan Keputusan Penganggaran Modal' },
    {
      kind: 'table',
      headers: ['Metode Evaluasi', 'Rumus / Konsep Dasar', 'Aturan Keputusan Terima / Tolak', 'Status Keunggulan Teoretis'],
      rows: [
        ['1. Net Present Value (NPV)', '$NPV = \\sum_{t=0}^N \\frac{CF_t}{(1 + r)^t}$', 'Terima jika **NPV > 0**', '**METODE TERBAIK (GOLD STANDARD)**. Mengasumsikan reinvestasi pada WACC.'],
        ['2. Internal Rate of Return (IRR)', 'Tingkat diskonto yang membuat $NPV = 0$', 'Terima jika **IRR > WACC**', 'Populer bagi manajer, tetapi mengasumsikan reinvestasi pada IRR (sering tidak realistis).'],
        ['3. Modified IRR (MIRR)', '$PV_{\\text{Cost}} = \\frac{TV_{\\text{Inflows}}}{(1 + MIRR)^N}$', 'Terima jika **MIRR > WACC**', 'Lebih unggul dari IRR karena mengasumsikan reinvestasi arus kas pada WACC.'],
        ['4. Payback Period', 'Waktu yang dibutuhkan arus kas masuk untuk menutup investasi awal', 'Terima jika **Payback < Target Manajemen**', 'Mudah dihitung, namun mengabaikan TVM dan arus kas setelah periode payback.'],
        ['5. Profitability Index (PI)', '$\\frac{PV \\text{ Arus Kas Masuk}}{\\text{Investasi Awal}}$', 'Terima jika **PI > 1,0**', 'Sangat berguna untuk penjatahan modal (*Capital Rationing*).']
      ],
      caption: 'Tabel 6.1: Matriks perbandingan 5 metode evaluasi penganggaran modal.'
    },

    CASE_CAPITAL_BUDGETING_EVAL,

    { kind: 'h2', text: '2. Resolusi Konflik Proyek Mutually Exclusive' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Mengapa NPV Selalu Menjadi Pilihan Tertinggi?',
      text: 'Jika dua proyek bersifat *Mutually Exclusive* (hanya boleh memilih salah satu) dan terjadi konflik di mana Proyek A memiliki IRR lebih tinggi tetapi Proyek B memiliki NPV lebih tinggi:\n• **SELALU PILIH PROYEK DENGAN NPV LEBIH TINGGI!**\n• Alasan: NPV mengukur secara langsung tambahan nilai rupiah absolut bagi kekayaan pemegang saham, sedangkan IRR hanya mengukur persentase imbal hasil.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**NPV > 0**: Menandakan proyek menambah nilai kekayaan bagi pemegang saham.',
        '**Reinvestment Rate Assumption**: NPV mengasumsikan reinvestasi pada WACC; IRR mengasumsikan reinvestasi pada IRR.',
        '**Multiple IRR**: Terjadi jika pola arus kas proyek bersifat non-normal (terjadi pergantian tanda positif-negatif lebih dari sekali).'
      ]
    }
  ]
};