import type { Reading } from '../../../types';
import { CASE_CAPM_PORTFOLIO } from '../mankeuPracticeCases';

const SVG_DIVERSIFICATION_RISK = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">DIVERSIFIKASI PORTOFOLIO: RISIKO SISTEMATIS VS RISIKO SPESIFIK</text>
  
  <!-- Axis -->
  <line x1="80" y1="180" x2="600" y2="180" stroke="#475569" stroke-width="1.5"/>
  <line x1="80" y1="55" x2="80" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="70" y="60" fill="#94a3b8" font-size="9" text-anchor="end">Risiko (&sigma;p)</text>
  <text x="600" y="195" fill="#94a3b8" font-size="9" text-anchor="end">Jumlah Saham dalam Portofolio (N)</text>

  <!-- Total Risk Curve -->
  <path d="M 90 70 Q 200 135 580 140" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <text x="300" y="95" fill="#f43f5e" font-size="10" font-weight="700">Risiko Total Portofolio (&sigma;p)</text>

  <!-- Market Risk Baseline -->
  <line x1="80" y1="140" x2="600" y2="140" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="400" y="160" fill="#38bdf8" font-size="10" font-weight="700">Risiko Pasar / Sistematis / Beta (Tidak dapat dihilangkan)</text>

  <!-- Shaded Diversifiable Area -->
  <text x="220" y="118" fill="#fda4af" font-size="9" font-weight="600">Risiko Perusahaan / Spesifik (Hilang ter-diversifikasi)</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Risk and Rates of Return & Capital Asset Pricing Model (CAPM)',
  ref: 'Brigham & Houston Ch. 8',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 4: Menguasai pengukuran risiko aset tunggal (Expected Return, Standar Deviasi, Koefisien Variasi), konsep diversifikasi portofolio dan kovarians, pemisahan Risiko Spesifik (*Diversifiable Risk*) vs Risiko Pasar (*Systematic Risk*), koefisien Beta ($\beta$), Model Penetapan Harga Aset Modal (CAPM), serta Garis Pasar Sekuritas (Security Market Line - SML).',
  objectives: [
    'Menghitung tingkat pengembalian yang diharapkan (Expected Rate of Return / $\\hat{r}$) dalam distribusi probabilitas.',
    'Mengukur risiko aset tunggal menggunakan Standar Deviasi ($\\sigma$) dan Koefisien Variasi (CV = $\\sigma / \\hat{r}$).',
    'Menjelaskan mengapa diversifikasi portofolio mampu mengeliminasi Risiko Tidak Sistematis (Firm-Specific Risk).',
    'Menguasai konsep koefisien Beta ($\beta$) sebagai ukuran volatilitas saham relatif terhadap pasar.',
    'Menerapkan rumus CAPM: $r_i = r_{RF} + b_i(r_M - r_{RF})$ untuk menentukan imbal hasil yang disyaratkan.',
    'Menganalisis pergeseran Garis Pasar Sekuritas (SML) akibat inflasi atau perubahan penghindaran risiko investor.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Dampak Diversifikasi Saham terhadap Penurunan Risiko Portofolio',
      svg: SVG_DIVERSIFICATION_RISK,
      caption: 'Gambar 4.1: Pengurangan risiko spesifik perusahaan seiring bertambahnya jumlah saham dalam portofolio.'
    },

    { kind: 'h2', text: '1. Pengukuran Risiko Aset Tunggal (Stand-Alone Risk)' },
    {
      kind: 'table',
      headers: ['Parameter Finansial', 'Rumus Matematis', 'Interpretasi Statistik'],
      rows: [
        ['Expected Rate of Return ($\\hat{r}$)', '$\\hat{r} = \\sum_{i=1}^N P_i r_i$', 'Rata-rata tertimbang dari kemungkinan tingkat pengembalian dikalikan probabilitasnya ($P_i$).'],
        ['Standar Deviasi ($\\sigma$)', '$\\sigma = \\sqrt{\\sum_{i=1}^N P_i (r_i - \\hat{r})^2}$', 'Ukuran dispersi/penyebaran hasil di sekitar nilai yang diharapkan (makin besar $\\sigma$, makin tinggi risiko total).'],
        ['Koefisien Variasi (CV)', 'CV = \\frac{\\sigma}{\\hat{r}}', 'Ukuran risiko per unit imbal hasil; sangat berguna untuk membandingkan dua aset dengan skala imbal hasil berbeda.']
      ],
      caption: 'Tabel 4.1: Tiga parameter evaluasi risiko aset individual.'
    },

    { kind: 'h2', text: '2. Koefisien Beta & Model CAPM' },
    {
      kind: 'p',
      text: 'Investor rasional yang memegang portofolio terdiversifikasi hanya peduli terhadap **Risiko Pasar (Market Risk)** yang diukur oleh **Koefisien Beta ($\beta$)**:'
    },
    {
      kind: 'ul',
      items: [
        '**Beta Pasar ($\beta_M = 1,0$)**: Saham dengan $\beta = 1,0$ memiliki tingkat volatilitas yang sama persis dengan pergerakan pasar saham secara umum.',
        '**Saham Agresif ($\beta > 1,0$)**: Misal $\beta = 1,5$, jika pasar naik 10%, saham diperkirakan naik 15%; namun jika pasar turun 10%, saham jatuh 15%.',
        '**Saham Defensif ($\beta < 1,0$)**: Misal $\beta = 0,7$, pergerakan saham lebih tenang daripada pasar (cocok untuk industri kebutuhan pokok/utilitas).'
      ]
    },
    {
      kind: 'formula',
      text: 'r_i = r_{RF} + b_i \\times (r_M - r_{RF}) = r_{RF} + b_i \\times (\\text{RPM})',
      note: 'r_i = Required Return, r_RF = Risk-free Rate, r_M = Market Return, RPM = Market Risk Premium.'
    },

    CASE_CAPM_PORTFOLIO,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**Prinsip Kompensasi**: Pasar hanya memberikan premi risiko untuk **Risiko Sistematis (Beta)**, bukan risiko spesifik (karena risiko spesifik bisa dihilangkan gratis lewat diversifikasi).',
        '**Beta Portofolio**: Merupakan rata-rata tertimbang sederhana dari beta masing-masing saham penyusunnya.',
        '**SML**: Hubungan linier positif antara Beta dan Required Rate of Return.'
      ]
    }
  ]
};