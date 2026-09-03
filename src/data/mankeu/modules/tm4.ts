import type { Reading } from '../../../types';
import { CASE_CAPM_PORTFOLIO_RISK } from '../mankeuPracticeCases';

const SVG_SML_CAPM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="smlLine" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">GARIS PASAR SEKURITAS (SECURITY MARKET LINE - SML / CAPM)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">CAPM GRAPH</text>

  <!-- Left: SML Graph Axes (Width 450px, Height 240px) -->
  <g transform="translate(65, 80)">
    <!-- Y-Axis: Expected Return E(R) -->
    <line x1="50" y1="20" x2="50" y2="210" stroke="#94a3b8" stroke-width="2"/>
    <polygon points="50,15 46,25 54,25" fill="#94a3b8"/>
    <text x="40" y="20" fill="#f8fafc" font-size="9" font-weight="800" text-anchor="end">Expected Return E(R)</text>

    <!-- X-Axis: Systematic Risk (Beta β) -->
    <line x1="50" y1="210" x2="430" y2="210" stroke="#94a3b8" stroke-width="2"/>
    <polygon points="435,210 425,206 425,214" fill="#94a3b8"/>
    <text x="430" y="228" fill="#f8fafc" font-size="9" font-weight="800" text-anchor="end">Risiko Sistematis (Beta β)</text>

    <!-- Risk-Free Rate Rf Tick -->
    <line x1="45" y1="165" x2="55" y2="165" stroke="#a78bfa" stroke-width="2"/>
    <text class="text-accent-purple" x="40" y="169" fill="#a78bfa" font-size="9" font-weight="800" text-anchor="end">Rf (6%)</text>

    <!-- SML Linear Slope Line -->
    <line x1="50" y1="165" x2="400" y2="50" stroke="#38bdf8" stroke-width="3.5"/>
    <text class="text-accent-blue" x="390" y="42" fill="#38bdf8" font-size="10" font-weight="900">SML</text>

    <!-- Market Portfolio Point M (Beta = 1.0) -->
    <line x1="225" y1="110" x2="225" y2="210" stroke="#334155" stroke-dasharray="3 3"/>
    <line x1="50" y1="110" x2="225" y2="110" stroke="#334155" stroke-dasharray="3 3"/>
    <circle cx="225" cy="110" r="6" fill="#34d399"/>
    <text class="text-accent-green" x="225" y="225" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">βm = 1.0</text>
    <text class="text-accent-green" x="40" y="114" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="end">Rm (12%)</text>
    <text class="text-accent-green" x="235" y="105" fill="#34d399" font-size="8" font-weight="700">Portofolio Pasar (IHSG)</text>

    <!-- Undervalued Zone (Above SML) -->
    <rect x="110" y="45" width="130" height="32" rx="6" fill="#059669" fill-opacity="0.3" stroke="#34d399"/>
    <text class="text-accent-green" x="175" y="60" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">UNDERVALUED (BUY)</text>
    <text class="svg-text" x="175" y="71" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Return Riil &gt; Required Return</text>

    <!-- Overvalued Zone (Below SML) -->
    <rect x="255" y="145" width="130" height="32" rx="6" fill="#dc2626" fill-opacity="0.3" stroke="#f87171"/>
    <text class="text-accent-red" x="320" y="160" fill="#f87171" font-size="8" font-weight="800" text-anchor="middle">OVERVALUED (SELL)</text>
    <text class="svg-text" x="320" y="171" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Return Riil &lt; Required Return</text>
  </g>

  <!-- Right: CAPM Formula & Components Explanation -->
  <g transform="translate(540, 75)">
    <!-- Formula Box -->
    <rect class="svg-subcard" x="0" y="0" width="325" height="48" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="162" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">RUMUS DASAR MODEL CAPM</text>
    <text x="162" y="38" fill="#f8fafc" font-size="10" font-weight="700" text-anchor="middle">E(Ri) = Rf + βi × [ E(Rm) - Rf ]</text>

    <!-- Variable Cards -->
    <rect class="svg-card" x="0" y="58" width="325" height="52" rx="6" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="12" y="76" fill="#a78bfa" font-size="8.5" font-weight="800">Rf: Risk-Free Rate (Suku Bunga Bebas Risiko)</text>
    <text class="svg-text" x="12" y="92" fill="#cbd5e1" font-size="7.5">Imbal hasil instrumen tanpa risiko gagal bayar (contoh: SBN / SUN 10 Tahun).</text>

    <rect class="svg-card" x="0" y="118" width="325" height="52" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="12" y="136" fill="#38bdf8" font-size="8.5" font-weight="800">βi: Koefisien Beta Sekuritas i</text>
    <text class="svg-text" x="12" y="152" fill="#cbd5e1" font-size="7.5">Sensitivitas return saham terhadap fluktuasi IHSG. β &gt; 1 = Saham agresif.</text>

    <rect class="svg-card" x="0" y="178" width="325" height="52" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="12" y="196" fill="#fbbf24" font-size="8.5" font-weight="800">[ E(Rm) - Rf ]: Market Risk Premium (MRP)</text>
    <text class="svg-text" x="12" y="212" fill="#cbd5e1" font-size="7.5">Kompensasi imbal hasil tambahan atas kesediaan investor menanggung risiko saham.</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Saham di atas garis SML memberikan return lebih tinggi dari kompensasi risikonya (Murah/Layak Beli).</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Risk and Rates of Return, Portfolio Theory, & Capital Asset Pricing Model (CAPM)',
  ref: 'Brigham & Ehrhardt Ch. 6 | Teori Portofolio Markowitz | Capital Asset Pricing Model (CAPM) & SML',
  intro: 'TM 4 membahas hubungan fundamental antara risiko dan tingkat pengembalian yang diharapkan (Risk-Return Tradeoff): risiko berdiri sendiri (Stand-Alone Risk) vs risiko portofolio, diversifikasi Markowitz, risiko sistematis (Market Risk) vs risiko tidak sistematis (Diversifiable/Firm-Specific Risk), koefisien Beta ($\\beta$), serta model penetapan harga aset modal (CAPM) dan Garis Pasar Sekuritas (SML).',
  objectives: [
    'Menghitung Expected Return, Varians, Standar Deviasi, dan Koefisien Variasi (CV) aset tunggal dan portofolio.',
    'Menjelaskan mekanisme eliminasi Firm-Specific Risk melalui pembentukan portofolio saham terdiversifikasi.',
    'Menghitung Beta Portofolio ($\\beta_p$) dan Required Rate of Return menggunakan persamaan CAPM.',
    'Mengevaluasi posisi sekuritas terhadap Garis Pasar Sekuritas (SML) untuk menentukan keputusan investasi (Undervalued vs Overvalued).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Garis Pasar Sekuritas (Security Market Line - SML) dan Posisi Valuasi Saham.',
      svg: SVG_SML_CAPM
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Jenis Risiko', 'Penyebab / Sumber Risiko', 'Bisa Didiversifikasi?', 'Kompensasi Pasar (Risk Premium)'],
      rows: [
        ['Stand-Alone Risk (Risiko Total)', 'Gabungan seluruh ketidakpastian spesifik dan pasar ($\\sigma$).', 'Dapat dipecah menjadi dua komponen.', 'Hanya bagian risiko pasarnya yang dikompensasi return.'],
        ['Diversifiable Risk (Unsystematic)', 'Pemogokan buruh, tuntutan hukum paten, kegagalan produk baru perusahaan.', 'YA! Hilang 100% dengan memiliki portofolio 30-40 saham lintas sektor.', 'TIDAK ADA premi pengembalian (pasar tidak membayar kecerobohan tidak diversifikasi).'],
        ['Market Risk (Systematic Risk)', 'Inflasi makro, kenaikan suku bunga acuan BI, resesi global, perang, pandemi.', 'TIDAK BISA dihilangkan dengan diversifikasi.', 'DIKOMPENSASI PENUH oleh pasar modal melalui Equity Risk Premium ($r_M - r_{RF}$).'],
        ['Koefisien Beta ($\\beta$)', 'Ukuran volatilitas/sensitivitas return saham individual terhadap pergerakan pasar.', 'Mengukur kontribusi saham ke risiko portofolio pasar.', '$\\beta > 1$ = Saham Agresif; $\\beta < 1$ = Saham Defensif; $\\beta = 1$ = Sesuai Pasar.']
      ],
      caption: 'Tabel 4.0: Pembedaan risiko sistematis vs tidak sistematis dalam CAPM.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: CAPM & Security Market Line'
    },
    {
      kind: 'formula',
      text: `\\text{CAPM Equation}: \\quad r_i = r_{RF} + \\beta_i \\times (r_M - r_{RF})
\\text{Beta Portofolio}: \\quad \\beta_p = \\sum_{i=1}^N w_i \\times \\beta_i
\\text{Expected Return Portofolio 2 Aset}: \\quad \\hat{r}_p = w_A \\hat{r}_A + w_B \\hat{r}_B
\\text{Varians Portofolio 2 Aset}: \\quad \\sigma_p^2 = w_A^2 \\sigma_A^2 + w_B^2 \\sigma_B^2 + 2 w_A w_B \\rho_{AB} \\sigma_A \\sigma_B`,
      note: 'Diversifikasi mencapai manfaat reduksi risiko maksimal jika koefisien korelasi antar-aset bernilai negatif ($\\rho = -1,0$).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penentuan Sinyal Beli/Jual Saham Berdasarkan SML',
      prompt: 'Data pasar: $r_{RF} = 5,0\\%$, $r_M = 11,0\\%$. Saham X memiliki Beta = 1,40 dan analis memproyeksikan return aktual sebesar 15,0%. Saham Y memiliki Beta = 0,60 dan analis memproyeksikan return aktual sebesar 8,0%. Tentukan keputusan investasi untuk Saham X dan Saham Y!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan CAPM SML**:\n- Saham X: $r_X = 5,0\\% + 1,40(11,0\\% - 5,0\\%) = 5,0\\% + 8,4\\% = \\mathbf{13,4\\%}$.\n- Saham Y: $r_Y = 5,0\\% + 0,60(6,0\\%) = 5,0\\% + 3,6\\% = \\mathbf{8,6\\%}$.',
            '**Keputusan Saham X**: Ekspektasi Return Analis (15,0%) > CAPM (13,4%) $\\r→$ Saham X terletak DI ATAS SML $\\r→$ **Undervalued (Beli / Buy)**.',
            '**Keputusan Saham Y**: Ekspektasi Return Analis (8,0%) < CAPM (8,6%) $\\r→$ Saham Y terletak DI BAWAH SML $\\r→$ **Overvalued (Jual / Sell / Hindari)**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Statistik Risiko & Return', 'Expected return, varians, standar deviasi, dan koefisien variasi.', 'Mampu menghitung metrik risiko stand-alone aset tunggal.'],
        ['2', 'Prinsip Diversifikasi Markowitz', 'Korelasi antar aset ($\\rho$) dan eliminasi risiko spesifik.', 'Mampu menjelaskan mengapa diversifikasi mereduksi varians total.'],
        ['3', 'Model CAPM & SML', 'Kalkulasi Required Rate of Return dan beta portofolio.', 'Mampu memplot saham ke SML dan menentukan status undervaluation.']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 Manajemen Keuangan.'
    },
    CASE_CAPM_PORTFOLIO_RISK,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Satu-satunya Risiko yang Dihargai Pasar adalah Beta**: Dalam CAPM, investor tidak diberi kompensasi atas risiko unik perusahaan (Diversifiable Risk) karena risiko tersebut dapat dihilangkan secara gratis melalui diversifikasi.',
        '**Equity Risk Premium (ERP)**: Selisih $(r_M - r_{RF})$ adalah premi risiko pasar yang diminta investor untuk beralih dari aset bebas risiko ke portofolio pasar saham.',
        '**Pergeseran Garis SML**: Kenaikan ekspektasi inflasi menggeser kurva SML sejajar ke atas ($r_{RF}$ naik); peningkatan keengganan risiko investor (Risk Aversion) membuat kemiringan SML semakin curam (slope naik).'
      ]
    }
  ]
};
