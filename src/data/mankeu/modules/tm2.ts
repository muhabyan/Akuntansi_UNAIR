import type { Reading } from '../../../types';
import { CASE_DUPONT_ANALYSIS } from '../mankeuPracticeCases';

const SVG_DUPONT_SYSTEM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="roeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="npmGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="tatGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="emGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">POHON DEKOMPOSISI ANALISIS DUPONT 3 PILAR (RETURN ON EQUITY)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DUPONT TREE</text>

  <!-- Top Apex: RETURN ON EQUITY -->
  <g transform="translate(300, 68)">
    <rect class="svg-card" x="0" y="0" width="300" height="48" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="300" height="20" rx="10" fill="url(#roeGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="150" y="16" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">RETURN ON EQUITY (ROE)</text>
    <text class="svg-text" x="150" y="36" fill="#cbd5e1" font-size="8.5" font-weight="700" text-anchor="middle">ROE = Net Profit Margin × Asset Turnover × Equity Multiplier</text>
  </g>

  <!-- Branch Lines -->
  <line x1="450" y1="116" x2="165" y2="145" stroke="#38bdf8" stroke-width="2"/>
  <line x1="450" y1="116" x2="450" y2="145" stroke="#fbbf24" stroke-width="2"/>
  <line x1="450" y1="116" x2="735" y2="145" stroke="#a78bfa" stroke-width="2"/>

  <!-- 3 Pillar Foundation Cards -->
  <!-- Pillar 1: Net Profit Margin -->
  <g transform="translate(35, 145)">
    <rect class="svg-card" x="0" y="0" width="260" height="155" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="260" height="28" rx="10" fill="url(#npmGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="130" y="18" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. NET PROFIT MARGIN (NPM)</text>
    <rect class="svg-subcard" x="14" y="36" width="232" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="130" y="52" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Laba Bersih ÷ Penjualan</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Mengukur: <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Profitabilitas Operasional</tspan></text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8">• Efisiensi pengendalian beban pokok (HPP)</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Strategi penetapan harga jual &amp; biaya pajak</text>
    <rect class="svg-badge-blue" x="14" y="125" width="232" height="18" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="130" y="137" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Efisiensi Biaya Produksi</text>
  </g>

  <!-- Pillar 2: Total Asset Turnover -->
  <g transform="translate(320, 145)">
    <rect class="svg-card" x="0" y="0" width="260" height="155" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="260" height="28" rx="10" fill="url(#tatGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="130" y="18" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. TOTAL ASSET TURNOVER (TATO)</text>
    <rect class="svg-subcard" x="14" y="36" width="232" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="130" y="52" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Penjualan ÷ Total Aset</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Mengukur: <tspan class="text-accent-amber" fill="#fbbf24" font-weight="700">Efisiensi Utilisasi Aset</tspan></text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8">• Perputaran piutang, kas, &amp; stok gudang</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Optimalisasi kapasitas utilisasi pabrik</text>
    <rect class="svg-badge-amber" x="14" y="125" width="232" height="18" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="130" y="137" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Produktivitas Modal Kerja</text>
  </g>

  <!-- Pillar 3: Equity Multiplier -->
  <g transform="translate(605, 145)">
    <rect class="svg-card" x="0" y="0" width="260" height="155" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="260" height="28" rx="10" fill="url(#emGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="130" y="18" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">3. EQUITY MULTIPLIER (LEVERAGE)</text>
    <rect class="svg-subcard" x="14" y="36" width="232" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="130" y="52" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Total Aset ÷ Total Ekuitas</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Mengukur: <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Tingkat Leverage Finansial</tspan></text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8">• Pemanfaatan utang untuk mendongkrak laba</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Menimbang risiko insolvensi vs tax shield</text>
    <rect class="svg-badge-purple" x="14" y="125" width="232" height="18" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="130" y="137" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Struktur Modal Pengungkit</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">DuPont membongkar apakah lonjakan ROE didorong oleh keunggulan produk (NPM), kecepatan operasi (TATO), atau risiko utang (Leverage).</text>
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
