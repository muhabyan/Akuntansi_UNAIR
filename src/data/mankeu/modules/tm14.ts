import type { Reading } from '../../../types';
import { CASE_MA_ALTMAN_ZSCORE } from '../mankeuPracticeCases';

const SVG_ALTMAN_SCALE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="safeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="greyGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="distGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk14)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PREDIKSI KEBANGKRUTAN KORPORASI: 3 ZONA SKOR ALTMAN Z-SCORE (EDWARD ALTMAN)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DISTRESS MODEL</text>

  <!-- 3 Continuum Zones -->
  <!-- Zone 1: Safe Zone (Z > 2.99) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="175" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#safeGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">SAFE ZONE (Z &gt; 2.99)</text>
    
    <rect class="svg-badge-green" x="14" y="42" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="58" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle">KONDISI SEHAT &amp; SOLVEN</text>

    <text class="svg-text" x="14" y="86" fill="#cbd5e1" font-size="8">• Peluang kebangkrutan mendekati 0%</text>
    <text class="svg-text" x="14" y="103" fill="#cbd5e1" font-size="8">• Likuiditas kas &amp; modal kerja sangat kokoh</text>
    <text class="svg-text" x="14" y="120" fill="#cbd5e1" font-size="8">• Laba ditahan tinggi &amp; produktivitas aset prima</text>
    <text class="svg-text" x="14" y="137" fill="#cbd5e1" font-size="8">• Rating kredit layak investasi (Investment Grade)</text>
    <text class="text-accent-green" x="14" y="154" fill="#34d399" font-size="7.5" font-weight="700">Tindakan: Pertahankan efisiensi struktur modal</text>
  </g>

  <!-- Zone 2: Grey Zone (1.81 <= Z <= 2.99) -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="175" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#greyGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="11" font-weight="900" text-anchor="middle">GREY ZONE (1.81 - 2.99)</text>
    
    <rect class="svg-badge-amber" x="14" y="42" width="237" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="58" fill="#fbbf24" font-size="8.5" font-weight="800" text-anchor="middle">ZONA WASPADA / ABU-ABU</text>

    <text class="svg-text" x="14" y="86" fill="#cbd5e1" font-size="8">• Risiko moderat mengalami kesulitan likuiditas</text>
    <text class="svg-text" x="14" y="103" fill="#cbd5e1" font-size="8">• Rentan bila terjadi guncangan makro ekonomi</text>
    <text class="svg-text" x="14" y="120" fill="#cbd5e1" font-size="8">• Beban bunga utang mulai menggerus laba</text>
    <text class="svg-text" x="14" y="137" fill="#cbd5e1" font-size="8">• Butuh pengawasan ketat dari komite audit</text>
    <text class="text-accent-amber" x="14" y="154" fill="#fbbf24" font-size="7.5" font-weight="700">Tindakan: Pengendalian biaya ketat &amp; cegah utang baru</text>
  </g>

  <!-- Zone 3: Distress Zone (Z < 1.81) -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="175" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#distGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="132" y="20" fill="#f87171" font-size="11" font-weight="900" text-anchor="middle">DISTRESS ZONE (Z &lt; 1.81)</text>
    
    <rect class="svg-badge-red" x="14" y="42" width="237" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="132" y="58" fill="#f87171" font-size="8.5" font-weight="800" text-anchor="middle">ZONA KRITIS KEBANGKRUTAN</text>

    <text class="svg-text" x="14" y="86" fill="#cbd5e1" font-size="8">• Peluang bangkrut dalam 2 tahun mencapai 80%+</text>
    <text class="svg-text" x="14" y="103" fill="#cbd5e1" font-size="8">• Modal kerja negatif &amp; arus kas operasional tekor</text>
    <text class="svg-text" x="14" y="120" fill="#cbd5e1" font-size="8">• Terancam gagal bayar utang (Default Risk)</text>
    <text class="svg-text" x="14" y="137" fill="#cbd5e1" font-size="8">• Masuk pengawasan PKPU di Pengadilan Niaga</text>
    <text class="text-accent-red" x="14" y="154" fill="#f87171" font-size="7.5" font-weight="700">Tindakan: Restrukturisasi utang &amp; divestasi aset</text>
  </g>

  <!-- Bottom Formula Card -->
  <g transform="translate(35, 260)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="52" rx="8" fill="#1e293b" stroke="#334155"/>
    <text class="text-accent-blue" x="14" y="22" fill="#38bdf8" font-size="9" font-weight="800">5 VARIABEL RASIO ALTMAN Z-SCORE:</text>
    <text class="svg-text" x="14" y="40" fill="#cbd5e1" font-size="8">
      Z = 1.2(Modal Kerja/Total Aset) + 1.4(Laba Ditahan/Total Aset) + 3.3(EBIT/Total Aset) + 0.6(Nilai Pasar Ekuitas/Total Utang) + 0.999(Penjualan/Total Aset)
    </text>
  </g>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Mergers, Acquisitions, Corporate Restructuring, & Bankruptcy Analysis',
  ref: 'Brigham & Ehrhardt Ch. 21 & 22 | Model Valuasi M&A | Prediksi Kebangkrutan Altman Z-Score & Reorganisasi',
  intro: 'TM 14 membahas keputusan strategis tingkat korporat tertinggi: merger dan akuisisi (M&A), sumber penciptaan sinergi (Operating & Financial Synergies), metode valuasi perusahaan target (Discounted Cash Flow & Market Multiples), pertahanan terhadap pengambilalihan paksa (Hostile Takeover Defenses: Poison Pill, White Knight), serta deteksi dini kebangkrutan menggunakan Altman Z-Score dan proses reorganisasi utang (Chapter 11 / PKPU).',
  objectives: [
    'Mengidentifikasi sumber-sumber sinergi riil dalam transaksi merger dan akuisisi.',
    'Menghitung nilai maksimum harga penawaran yang layak dibayarkan kepada pemegang saham target (Maximum Bid Price).',
    'Menghitung skor kesehatan keuangan korporasi menggunakan Model Altman Z-Score 4 variabel.',
    'Membedakan opsi penyelesaian kesulitan keuangan: Reorganisasi (Going Concern) vs Likuidasi Aset (Chapter 7).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 14.1: Skala Zona Prediksi Kebangkrutan Altman Z-Score (Model Jasa / Emerging Market).',
      svg: SVG_ALTMAN_SCALE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 14'
    },
    {
      kind: 'table',
      headers: ['Topik Restrukturisasi', 'Konsep / Model Finansial', 'Parameter Kunci', 'Kriteria Keputusan'],
      rows: [
        ['Sinergi M&A', '$\\text{Nilai Sinergi} = V_{AB} - (V_A + V_B)$', 'Penghematan biaya skala ekonomis, cross-selling produk, dan tax benefits.', 'Merger layak HANYA jika Nilai Sinergi > Premi Akuisisi yang dibayarkan.'],
        ['Maksimum Bid Price', '$\\text{Max Bid} = V_{\\text{Target Stand-alone}} + \\text{Present Value Sinergi}$', 'Batas atas harga akuisisi agar pengakuisisi tidak mengalami kerugian nilai.', 'Tawaran > Max Bid menghancurkan kekayaan pemegang saham pembeli.'],
        ['Altman Z-Score', '$Z = 6,56 X_1 + 3,26 X_2 + 6,72 X_3 + 1,05 X_4$', '$X_1$: NWC/TA; $X_2$: RE/TA; $X_3$: EBIT/TA; $X_4$: Market Eq/TL.', '$Z < 1,10$ = Distress; $1,10 \\le Z \\le 2,60$ = Grey; $Z > 2,60$ = Safe.'],
        ['Reorganisasi vs Likuidasi', 'Evaluasi Going Concern Value vs Liquidation Value.', 'Apakah aset perusahaan bernilai lebih tinggi jika tetap beroperasi atau dijual eceran?', 'Jika Going Concern Value > Liquidation Value $\\r→$ Lakukan Reorganisasi PKPU.']
      ],
      caption: 'Tabel 14.0: Matriks keputusan merger, akuisisi, dan restrukturisasi kebangkrutan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Valuasi Sinergi M&A & Altman Z-Score'
    },
    {
      kind: 'formula',
      text: `\\text{Altman Z-Score (Model Revisi 4 Rasio)}: \\quad Z = 6,56 X_1 + 3,26 X_2 + 6,72 X_3 + 1,05 X_4
\\text{Dimana}: \\quad X_1 = \\frac{\\text{Net Working Capital}}{\\text{Total Assets}}, \\quad X_2 = \\frac{\\text{Retained Earnings}}{\\text{Total Assets}}, \\quad X_3 = \\frac{EBIT}{\\text{Total Assets}}, \\quad X_4 = \\frac{\\text{Market Value of Equity}}{\\text{Total Liabilities}}
\\text{Net Present Value Akuisisi}: \\quad NPV_{\\text{Acquisition}} = \\text{PV of Synergy} - \\text{Acquisition Premium}`,
      note: 'Acquisition Premium adalah selisih antara harga penawaran kas per lembar saham yang dibayarkan kepada target dengan harga pasar saham target sebelum rumor merger beredar.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan Nilai Sinergi & Maksimum Tawaran Akuisisi',
      prompt: 'Perusahaan Pembeli bernilai Rp 100 Miliar dan Perusahaan Target bernilai Rp 30 Miliar secara stand-alone. Jika kedua perusahaan bergabung, present value arus kas masa depan diproyeksikan menjadi Rp 145 Miliar. Berapa Nilai Sinergi merger tersebut dan berapa harga maksimum yang boleh dibayarkan Pembeli kepada pemegang saham Target?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan Nilai Sinergi**:\nNilai Sinergi = $V_{AB} - (V_A + V_B) = 145 - (100 + 30) = 145 - 130 = \\mathbf{Rp 15 \\text{ Miliar}}$.',
            '**Perhitungan Maksimum Harga Tawaran (Max Bid)**:\nMax Bid = $V_{\\text{Target}} + \\text{Nilai Sinergi} = 30 + 15 = \\mathbf{Rp 45 \\text{ Miliar}}$.',
            '**Evaluasi Manajerial**: Jika Pembeli membayar Rp 38 Miliar (premi Rp 8 Miliar), pemegang saham Target untung Rp 8 Miliar dan Pembeli memperoleh sisa sinergi Rp 7 Miliar (Win-Win Merger).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Valuasi Sinergi M&A', 'Perhitungan sinergi operasional, sinergi finansial, dan premi akuisisi.', 'Mampu menghitung NPV akuisisi dan harga penawaran maksimal.'],
        ['2', 'Taktik Pertahanan Hostile Takeover', 'Mekanisme Poison Pill, White Knight, Golden Parachutes, Pac-Man.', 'Mampu mengevaluasi efektivitas pertahanan pengambilalihan paksa.'],
        ['3', 'Model Altman Z-Score', 'Perhitungan 4 rasio dan penetapan zona status kesehatan finansial.', 'Mampu mendeteksi potensi kebangkrutan korporasi secara kuantitatif.'],
        ['4', 'Hukum Kebangkrutan & Reorganisasi', 'Diferensiasi likuiditas Chapter 7 vs restrukturisasi Chapter 11 / PKPU.', 'Mampu merancang skema Debt-to-Equity Swap pada krisis likuiditas.']
      ],
      caption: 'Tabel 14.2: Peta penguasaan submateri TM 14 Manajemen Keuangan.'
    },
    CASE_MA_ALTMAN_ZSCORE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Penyebab Kegagalan M&A Terbesar**: Membayar premi akuisisi yang terlalu mahal (Overbidding / Winner Curse) yang menghabiskan seluruh potensi nilai sinergi.',
        '**Altman Z-Score Bukan Vonis Mati**: Skor dalam Distress Zone adalah sinyal peringatan dini (Early Warning Indicator) agar direksi segera melakukan restrukturisasi utang sebelum terjadi insolvensi teknis.',
        '**Absolute Priority Rule**: Dalam likuiditas kebangkrutan, kreditor berhak atas pelunasan penuh sesuai hierarki klaim (Kreditor Separatis $\\r→$ Konkuren $\\r→$ Saham Preferen $\\r→$ Saham Biasa).'
      ]
    }
  ]
};
