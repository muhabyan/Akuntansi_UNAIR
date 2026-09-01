import type { Reading } from '../../../types';
import { CASE_MA_ALTMAN_ZSCORE } from '../mankeuPracticeCases';

const SVG_ALTMAN_SCALE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SKALA PREDIKSI KEBANGKRUTAN ALTMAN Z-SCORE (EMERGING / SERVICE MODEL)</text>
  
  <rect x="40" y="70" width="180" height="90" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="2"/>
  <text x="130" y="98" fill="#f87171" font-size="12" font-weight="700" text-anchor="middle">DISTRESS ZONE</text>
  <text x="130" y="120" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">Z &lt; 1,10</text>
  <text x="130" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">Bahaya Bangkrut Tinggi</text>

  <rect x="250" y="70" width="180" height="90" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="340" y="98" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">GREY ZONE</text>
  <text x="340" y="120" fill="#fde68a" font-size="10" font-weight="700" text-anchor="middle">1,10 ≤ Z ≤ 2,60</text>
  <text x="340" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">Zona Waspada / Rawan</text>

  <rect x="460" y="70" width="180" height="90" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="550" y="98" fill="#4ade80" font-size="12" font-weight="700" text-anchor="middle">SAFE ZONE</text>
  <text x="550" y="120" fill="#86efac" font-size="10" font-weight="700" text-anchor="middle">Z &gt; 2,60</text>
  <text x="550" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">Keuangan Sangat Sehat</text>
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
        ['Reorganisasi vs Likuidasi', 'Evaluasi Going Concern Value vs Liquidation Value.', 'Apakah aset perusahaan bernilai lebih tinggi jika tetap beroperasi atau dijual eceran?', 'Jika Going Concern Value > Liquidation Value $\\rightarrow$ Lakukan Reorganisasi PKPU.']
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
        '**Absolute Priority Rule**: Dalam likuiditas kebangkrutan, kreditor berhak atas pelunasan penuh sesuai hierarki klaim (Kreditor Separatis $\\rightarrow$ Konkuren $\\rightarrow$ Saham Preferen $\\rightarrow$ Saham Biasa).'
      ]
    }
  ]
};
