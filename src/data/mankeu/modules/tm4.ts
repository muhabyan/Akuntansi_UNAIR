import type { Reading } from '../../../types';
import { CASE_CAPM_PORTFOLIO_RISK } from '../mankeuPracticeCases';

const SVG_SML_CAPM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">GARIS PASAR SEKURITAS (SECURITY MARKET LINE - SML / CAPM)</text>
  
  <line x1="70" y1="180" x2="630" y2="180" stroke="#64748b" stroke-width="2"/>
  <line x1="70" y1="180" x2="70" y2="45" stroke="#64748b" stroke-width="2"/>
  <text x="630" y="195" fill="#94a3b8" font-size="10" text-anchor="end">Risiko Sistematis (Beta β)</text>
  <text x="60" y="50" fill="#94a3b8" font-size="10" text-anchor="end">Return (r%)</text>

  <line x1="70" y1="150" x2="600" y2="60" stroke="#38bdf8" stroke-width="2.5"/>
  
  <circle cx="70" cy="150" r="5" fill="#f87171"/>
  <text x="60" y="154" fill="#f87171" font-size="10" font-weight="700" text-anchor="end">r_RF (6%)</text>
  <text x="80" y="165" fill="#94a3b8" font-size="9">Beta = 0</text>

  <line x1="335" y1="180" x2="335" y2="110" stroke="#64748b" stroke-dasharray="3 3"/>
  <circle cx="335" cy="110" r="6" fill="#fbbf24"/>
  <text x="335" y="195" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">β_M = 1,0</text>
  <text x="345" y="105" fill="#fbbf24" font-size="10" font-weight="700">Pasar (r_M = 12%)</text>

  <circle cx="236" cy="75" r="6" fill="#4ade80"/>
  <text x="236" y="65" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">UNDERVALUED (BUY)</text>
  <text x="236" y="90" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ekspektasi Return > SML</text>

  <circle cx="434" cy="115" r="6" fill="#ef4444"/>
  <text x="434" y="130" fill="#ef4444" font-size="9.5" font-weight="700" text-anchor="middle">OVERVALUED (SELL)</text>
  <text x="434" y="145" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ekspektasi Return &lt; SML</text>
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
            '**Keputusan Saham X**: Ekspektasi Return Analis (15,0%) > CAPM (13,4%) $\\rightarrow$ Saham X terletak DI ATAS SML $\\rightarrow$ **Undervalued (Beli / Buy)**.',
            '**Keputusan Saham Y**: Ekspektasi Return Analis (8,0%) < CAPM (8,6%) $\\rightarrow$ Saham Y terletak DI BAWAH SML $\\rightarrow$ **Overvalued (Jual / Sell / Hindari)**.'
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
