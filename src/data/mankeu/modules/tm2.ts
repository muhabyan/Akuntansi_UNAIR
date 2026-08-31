import type { Reading } from '../../../types';
import { CASE_DUPONT_ANALYSIS } from '../mankeuPracticeCases';

const SVG_RATIO_CATEGORIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA KELOMPOK UTAMA RASIO KEUANGAN (BRIGHAM CH. 4)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. Likuiditas</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Kemampuan bayar</text>
  <text x="82" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">utang jangka pendek</text>
  <line x1="35" y1="120" x2="130" y2="120" stroke="#334155"/>
  <text x="82" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Current Ratio</text>
  <text x="82" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Quick / Acid Test</text>
  <text x="82" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Cash Ratio</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. Aset (Turnover)</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Efisiensi utilisasi</text>
  <text x="212" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">kapasitas aset</text>
  <line x1="165" y1="120" x2="260" y2="120" stroke="#334155"/>
  <text x="212" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Inv. Turnover</text>
  <text x="212" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• DSO (Piutang)</text>
  <text x="212" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Total Asset Turn.</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">3. Leverage (Utang)</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Struktur modal &amp;</text>
  <text x="342" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">beban bunga</text>
  <line x1="295" y1="120" x2="390" y2="120" stroke="#334155"/>
  <text x="342" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Debt to Asset (DAR)</text>
  <text x="342" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Debt to Equity (DER)</text>
  <text x="342" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• TIE (Interest)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">4. Profitabilitas</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Efisiensi cetak</text>
  <text x="472" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">laba bersih</text>
  <line x1="425" y1="120" x2="520" y2="120" stroke="#334155"/>
  <text x="472" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Operating Margin</text>
  <text x="472" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Profit Margin</text>
  <text x="472" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• ROA &amp; ROE</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="10" font-weight="700" text-anchor="middle">5. Nilai Pasar</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Persepsi pasar</text>
  <text x="602" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">&amp; investor saham</text>
  <line x1="555" y1="120" x2="650" y2="120" stroke="#334155"/>
  <text x="602" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• P/E Ratio</text>
  <text x="602" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Price/Book (P/B)</text>
  <text x="602" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• EV / EBITDA</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Analysis of Financial Statements & The DuPont System',
  ref: 'Brigham & Houston Ch. 4',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 2: Menguasai 5 pilar rasio keuangan (Likuiditas, Manajemen Aset, Manajemen Utang/Leverage, Profitabilitas, dan Nilai Pasar), analisis komparasi tren (*Trend Analysis*) dan benchmarking industri, dekomposisi Sistem DuPont 3-Step & 5-Step, serta keterbatasan analisis rasio keuangan.',
  objectives: [
    'Menghitung dan menginterpretasikan Rasio Likuiditas: Current Ratio dan Quick (Acid-Test) Ratio.',
    'Menghitung Rasio Manajemen Aset: Inventory Turnover, Days Sales Outstanding (DSO), Fixed Asset Turnover, dan Total Asset Turnover.',
    'Menganalisis Rasio Pengungkit Keuangan: Debt-to-Capital Ratio, Debt-to-Equity Ratio, dan Times-Interest-Earned (TIE).',
    'Menghitung Rasio Profitabilitas: Operating Margin, Net Profit Margin, Return on Total Assets (ROA), dan Return on Common Equity (ROE).',
    'Menguasai Dekomposisi Persamaan DuPont (DuPont Equation): ROE = Profit Margin × Total Asset Turnover × Equity Multiplier.',
    'Menghitung Rasio Nilai Pasar: Price/Earnings (P/E) Ratio dan Market/Book (M/B) Ratio.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Kategori Utama Rasio Keuangan Korporasi',
      svg: SVG_RATIO_CATEGORIES,
      caption: 'Gambar 2.1: Taksonomi rasio keuangan untuk mengevaluasi kesehatan dan kinerja perusahaan.'
    },

    { kind: 'h2', text: '1. Formula Rasio Keuangan Utama' },
    {
      kind: 'table',
      headers: ['Kategori Rasio', 'Nama Rasio', 'Formula Perhitungan', 'Makna Finansial'],
      rows: [
        ['Likuiditas', 'Current Ratio', 'Aset Lancar / Liabilitas Lancar', 'Ketersediaan bantalan likuiditas kas/piutang/persediaan untuk menutupi utang jangka pendek.'],
        ['Likuiditas', 'Quick (Acid-Test) Ratio', '(Aset Lancar - Persediaan) / Liabilitas Lancar', 'Likuiditas murni tanpa mengandalkan persediaan yang lambat cair.'],
        ['Aset', 'Inventory Turnover', 'Penjualan (atau HPP) / Persediaan', 'Seberapa sering persediaan berputar/terjual dalam satu tahun.'],
        ['Aset', 'Days Sales Outstanding (DSO)', 'Piutang Usaha / (Penjualan Tahunan / 365)', 'Rata-rata jumlah hari yang dibutuhkan untuk menagih piutang pelanggan.'],
        ['Leverage', 'Times-Interest-Earned (TIE)', 'EBIT / Beban Bunga', 'Kemampuan laba operasi perusahaan menutup kewajiban bunga tahunan.'],
        ['Profitabilitas', 'Return on Assets (ROA)', 'Laba Bersih / Total Aset', 'Kemampuan total aset menghasilkan laba bersih setelah pajak.'],
        ['Nilai Pasar', 'Price/Earnings (P/E) Ratio', 'Harga per Lembar Saham / Laba per Lembar Saham (EPS)', 'Berapa rupiah yang bersedia dibayar investor untuk setiap rupiah laba perusahaan.']
      ],
      caption: 'Tabel 2.1: Ringkasan rumus rasio finansial penting.'
    },

    { kind: 'h2', text: '2. Sistem Analisis DuPont (DuPont System)' },
    {
      kind: 'p',
      text: 'Persamaan DuPont membedah **Return on Equity (ROE)** menjadi tiga penggerak utama kinerja manajerial:'
    },
    {
      kind: 'formula',
      text: 'ROE = \\underbrace{\\frac{\\text{Net Income}}{\\text{Sales}}}_{\\text{Profit Margin (Efisiensi Operasi)}} \\times \\underbrace{\\frac{\\text{Sales}}{\\text{Total Assets}}}_{\\text{Asset Turnover (Efisiensi Aset)}} \\times \\underbrace{\\frac{\\text{Total Assets}}{\\text{Total Equity}}}_{\\text{Equity Multiplier (Leverage Finansial)}}',
      note: 'Equity Multiplier = 1 + (Total Debt / Total Equity) = 1 / (1 - Debt Ratio).'
    },

    CASE_DUPONT_ANALYSIS,

    { kind: 'h2', text: '3. Keterbatasan Analisis Rasio Keuangan' },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Kelemahan & Jebakan Analisis Rasio',
      text: '• **Diversifikasi Usaha (Konglomerasi)**: Sulit menemukan rata-rata industri yang pas untuk perusahaan dengan banyak divisi berbeda.\n• **Faktor Musiman**: Saldo neraca pada tanggal tertentu dapat memberikan gambaran likuiditas semu.\n• **Teknik Poles Lapkeu (*Window Dressing*)**: Manajemen dapat mempercepat pelunasan utang sebelum tanggal tutup buku agar Current Ratio tampak tinggi.\n• **Perbedaan Kebijakan Akuntansi**: Metode persediaan (FIFO vs Average) dan depresiasi mempengaruhi keterbandingan antarperusahaan.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**DuPont Model**: ROE dipicu oleh 3 pilar: Marjin Laba, Perputaran Aset, dan Pengungkit Utang.',
        '**TIE Ratio**: Makin tinggi TIE, makin aman kapasitas perusahaan dari risiko gagal bayar bunga utang.',
        '**DSO**: Jika DSO jauh melampaui termin kredit (misal DSO 65 hari untuk termin n/30), terjadi inefisiensi penagihan piutang.'
      ]
    }
  ]
};