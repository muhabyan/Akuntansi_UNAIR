import type { Reading } from '../../../types';
import { CASE_DUPONT_ANALYSIS } from '../mankeuPracticeCases';

const SVG_DUPONT_SYSTEM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">DEKOMPOSISI SISTEM DUPONT (3-STEP &amp; 5-STEP ROE BREAKDOWN)</text>
  
  <rect x="25" y="55" width="130" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="90" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">RETURN ON EQUITY</text>
  <text x="90" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(ROE Target)</text>
  <text x="90" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Laba Bersih /</text>
  <text x="90" y="145" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Total Ekuitas</text>
  <text x="90" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Ukuran Kinerja Akhir</text>

  <text x="170" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">=</text>

  <rect x="185" y="55" width="140" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="255" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">NET PROFIT MARGIN</text>
  <text x="255" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Efisiensi Operasi)</text>
  <text x="255" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Laba Bersih /</text>
  <text x="255" y="145" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Penjualan</text>
  <text x="255" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Margin Keuntungan</text>

  <text x="340" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">×</text>

  <rect x="355" y="55" width="140" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="425" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">TOTAL ASSET TURNOVER</text>
  <text x="425" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Efisiensi Aset)</text>
  <text x="425" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Penjualan /</text>
  <text x="425" y="145" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Total Aset</text>
  <text x="425" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Produktivitas Aset</text>

  <text x="510" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">×</text>

  <rect x="525" y="55" width="130" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="590" y="78" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">EQUITY MULTIPLIER</text>
  <text x="590" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Leverage Keuangan)</text>
  <text x="590" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Total Aset /</text>
  <text x="590" y="145" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Total Ekuitas</text>
  <text x="590" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">1 + (Debt / Equity)</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Analysis of Financial Statements, Ratio Systems, & The DuPont Identity',
  ref: 'Brigham & Ehrhardt Ch. 3 | 5 Kategori Rasio Keuangan | 3-Step & 5-Step DuPont',
  intro: 'TM 2 membahas analisis mendalam laporan keuangan korporasi: 5 pilar rasio keuangan (Likuiditas, Manajemen Aset, Manajemen Utang/Solvabilitas, Profitabilitas, dan Nilai Pasar), analisis komparatif & cross-sectional, serta dekomposisi Return on Equity (ROE) menggunakan formula DuPont 3 langkah dan 5 langkah.',
  objectives: [
    'Menguasai kalkulasi dan interpretasi 5 kelompok rasio keuangan korporasi.',
    'Mendekonstruksi ROE menjadi pendorong efisiensi operasi (NPM), efisiensi pemanfaatan aset (TATO), dan struktur modal (Equity Multiplier).',
    'Menerapkan sistem DuPont 5 langkah yang memisahkan beban bunga (Interest Burden) dan beban pajak (Tax Burden).',
    'Mengevaluasi kelemahan rasio keuangan dan keterbatasan data akuntansi historis.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Dekomposisi Sistem DuPont 3 Langkah.',
      svg: SVG_DUPONT_SYSTEM
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 2'
    },
    {
      kind: 'table',
      headers: ['Kelompok Rasio', 'Rasio Utama & Rumus', 'Pertanyaan Strategis Manajemen', 'Tolok Ukur Standar'],
      rows: [
        ['1. Likuiditas', 'Current Ratio ($CA/CL$) & Quick Ratio ($(CA - Inv)/CL$)', 'Mampukah perusahaan melunasi kewajiban jangka pendek yang jatuh tempo?', 'CR > 1,5x; QR > 1,0x (tergantung siklus industri).'],
        ['2. Manajemen Aset', 'Inventory Turnover ($HPP/Inv$), DSO ($(AR/Sales) \\times 365$), TATO ($Sales/TA$)', 'Seberapa efektif dan cepat aset perusahaan dikonversi menjadi penjualan?', 'TATO tinggi & DSO rendah mengindikasikan efisiensi modal kerja.'],
        ['3. Manajemen Utang', 'Debt-to-Assets ($TD/TA$), Debt-to-Equity ($TD/Eq$), Times Interest Earned ($EBIT/Interest$)', 'Seberapa besar perlindungan kreditor dan risiko kebangkrutan?', 'TIE > 3,0x agar terhindar dari default kupon obligasi.'],
        ['4. Profitabilitas', 'Operating Margin ($EBIT/Sales$), Net Profit Margin ($NI/Sales$), ROA ($NI/TA$), ROE ($NI/Eq$)', 'Seberapa besar laba yang dihasilkan dari setiap rupiah modal yang diinvestasikan?', 'ROE harus melampaui Biaya Modal Ekuitas ($r_s$).'],
        ['5. Nilai Pasar', 'Price-to-Earnings ($P/EPS$), Market-to-Book ($P/BVPS$), EV/EBITDA', 'Bagaimana persepsi investor pasar modal terhadap prospek masa depan?', 'P/E tinggi menandakan ekspektasi pertumbuhan laba yang tinggi.']
      ],
      caption: 'Tabel 2.0: Matriks 5 pilar rasio keuangan korporasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: DuPont 3-Step & 5-Step'
    },
    {
      kind: 'formula',
      text: `\\text{3-Step DuPont}: \\quad ROE = \\underbrace{\\frac{\\text{Net Income}}{\\text{Sales}}}_{\\text{Profit Margin (NPM)}} \\times \\underbrace{\\frac{\\text{Sales}}{\\text{Total Assets}}}_{\\text{Asset Turnover (TATO)}} \\times \\underbrace{\\frac{\\text{Total Assets}}{\\text{Total Equity}}}_{\\text{Equity Multiplier (EM)}}
\\text{5-Step DuPont}: \\quad ROE = \\underbrace{\\frac{\\text{Net Income}}{EBT}}_{\\text{Tax Burden (1 - T)}} \\times \\underbrace{\\frac{EBT}{EBIT}}_{\\text{Interest Burden}} \\times \\underbrace{\\frac{EBIT}{\\text{Sales}}}_{\\text{Operating Margin}} \\times \\frac{\\text{Sales}}{\\text{Total Assets}} \\times \\frac{\\text{Total Assets}}{\\text{Total Equity}}`,
      note: 'Equity Multiplier dapat dihitung langsung dari Debt-to-Equity Ratio: Equity Multiplier = 1 + (Total Debt / Total Equity).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Analisis Dampak Kenaikan Utang terhadap ROE',
      prompt: 'Perusahaan memiliki ROA = 12% dan Debt Ratio = 60% (Total Debt / Total Assets = 0,60). Hitung Equity Multiplier dan Return on Equity (ROE)! Jika perusahaan menambah utang sehingga Debt Ratio menjadi 75% tanpa mengubah ROA, berapa ROE yang baru?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Kondisi Awal (Debt Ratio 60%)**:\n- Porsi Ekuitas = 1 - 0,60 = 40% (0,40).\n- Equity Multiplier = Total Aset / Ekuitas = 1 / 0,40 = **2,50x**.\n- $ROE = ROA \\times EM = 12\\% \\times 2,50 = \\mathbf{30,0\\%}$.',
            '**Kondisi Setelah Tambah Utang (Debt Ratio 75%)**:\n- Porsi Ekuitas = 1 - 0,75 = 25% (0,25).\n- Equity Multiplier = 1 / 0,25 = **4,00x**.\n- $ROE Baru = 12\\% \\times 4,00 = \\mathbf{48,0\\%}$.',
            '**Catatan Keuangan**: Penambahan leverage meningkatkan ROE dari 30% menjadi 48%, namun juga meningkatkan risiko kebangkrutan dan volatilitas laba per saham (EPS).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kalkulasi 5 Kategori Rasio', 'Perhitungan rasio likuiditas, aktivitas, solvabilitas, profitabilitas, pasar.', 'Mampu menghitung angka rasio finansial secara akurat.'],
        ['2', 'DuPont Analysis 3-Step & 5-Step', 'Dekomposisi ROE ke elemen operasional dan pembiayaan.', 'Mampu mengidentifikasi sumber keunggulan/kelemahan kinerja korporasi.'],
        ['3', 'Common-Size Financial Statements', 'Standardisasi neraca (% Total Aset) dan laba rugi (% Penjualan).', 'Mampu melakukan analisis tren dan perbandingan antar perusahaan beda skala.']
      ],
      caption: 'Tabel 2.2: Peta penguasaan submateri TM 2 Manajemen Keuangan.'
    },
    CASE_DUPONT_ANALYSIS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**ROE adalah Produk Interaksi 3 Dimensi**: Margin laba mencerminkan penetapan harga dan pengendalian biaya; Perputaran aset mencerminkan efisiensi operasional; Equity Multiplier mencerminkan keputusan pendanaan.',
        '**Keterbatasan Rasio**: Praktik window dressing di akhir tahun dan perbedaan metode akuntansi (FIFO vs Average, Depresiasi) dapat mendistorsi perbandingan rasio antar-perusahaan.',
        '**TIE Ratio**: Times Interest Earned mengukur batas aman penurunan laba sebelum perusahaan gagal membayar beban bunga pinjaman.'
      ]
    }
  ]
};
