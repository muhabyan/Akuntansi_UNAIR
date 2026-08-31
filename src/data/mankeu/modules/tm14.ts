import type { Reading } from '../../../types';

const SVG_MA_SYNERGIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MOTIF STRATEGIS MERGER &amp; AKUISISI (BRIGHAM CH. 21)</text>
  
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Sinergi Operasi</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Operating Synergy)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Skala Ekonomis (Economies)</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Eliminasi fasilitas ganda</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Integrasi rantai pasok</text>
  <text x="125" y="185" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Menaikkan EBIT Operasi</text>

  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Sinergi Finansial</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Financial Synergy)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kapasitas utang lebih besar</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penurunan biaya modal WACC</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penghematan pajak kompensasi</text>
  <text x="340" y="185" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Menurunkan Biaya Modal</text>

  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">3. Altman Z-Score</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Prediksi Kebangkrutan)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#34d399" font-size="9.5" text-anchor="middle">Z &gt; 2,99: Zona Aman</text>
  <text x="555" y="148" fill="#fbbf24" font-size="9.5" text-anchor="middle">1,81 &lt; Z &lt; 2,99: Abu-abu</text>
  <text x="555" y="166" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">Z &lt; 1,81: Zona Bahaya</text>
  <text x="555" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">(Risiko Kepailitan Tinggi)</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Mergers, Acquisitions, & Corporate Failure Analysis',
  ref: 'Brigham & Houston Ch. 21 & Artikel Kebangkrutan',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 14: Menguasai motif dan akuntansi penggabungan usaha Merger & Akuisisi (Sinergi Operasi, Sinergi Finansial, Diversifikasi, Motif Pajak), metode penilaian entitas target (Discounted Cash Flow Valuation), analisis kegagalan korporasi (Corporate Failure), model prediksi kebangkrutan Altman Z-Score, serta restrukturisasi utang vs likuidasi.',
  objectives: [
    'Membedakan 4 jenis merger: Horizontal, Vertikal, Konglomerat, dan Ekstensi Pasar/Produk.',
    'Menganalisis sumber-sumber penciptaan nilai sinergi ($V_{AB} > V_A + V_B$).',
    'Menghitung nilai wajar maksimal yang boleh dibayarkan kepada pemegang saham target (*Target Valuation*).',
    'Mengidentifikasi penyebab kebangkrutan korporasi internal (manajemen buruk, leverage berlebih) dan eksternal.',
    'Menghitung dan menginterpretasikan skor Model Altman Z-Score (Zona Aman, Zona Abu-abu, Zona Bahaya Kebangkrutan).',
    'Membedakan prosedur Restrukturisasi Utang (Reorganisasi) vs Kepailitan Likuidasi (UU No. 37/2004).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Motif Sinergi Merger & Ambang Batas Kebangkrutan Altman Z-Score',
      svg: SVG_MA_SYNERGIES,
      caption: 'Gambar 14.1: Dimensi penciptaan nilai M&A dan indikator deteksi dini kebangkrutan korporasi.'
    },

    { kind: 'h2', text: '1. Jenis & Motif Strategis Merger dan Akuisisi (M&A)' },
    {
      kind: 'table',
      headers: ['Jenis Merger', 'Definisi Penggabungan', 'Tujuan Strategis Utama'],
      rows: [
        ['1. Merger Horizontal', 'Penggabungan dua perusahaan dalam satu lini industri dan pasar yang sama (misal bank dengan bank).', 'Mencapai skala ekonomis (*economies of scale*), meningkatkan pangsa pasar, dan menekan biaya overhead.'],
        ['2. Merger Vertikal', 'Penggabungan antara produsen dengan pemasok bahan baku atau distributor hilir.', 'Mengamankan pasokan bahan baku dan mengendalikan saluran distribusi produk.'],
        ['3. Merger Konglomerat', 'Penggabungan dua perusahaan di industri yang sama sekali tidak berhubungan.', 'Diversifikasi portofolio risiko laba dan alokasi modal internal antar unit usaha.']
      ],
      caption: 'Tabel 14.1: Tiga kategori merger korporasi.'
    },

    { kind: 'h2', text: '2. Model Prediksi Kebangkrutan Altman Z-Score' },
    {
      kind: 'p',
      text: 'Edward Altman mengembangkan model analisis diskriminan berganda (*Multiple Discriminant Analysis*) untuk memprediksi probabilitas kebangkrutan perusahaan manufaktur publik:'
    },
    {
      kind: 'formula',
      text: 'Z = 1,2 \\times X_1 + 1,4 \\times X_2 + 3,3 \\times X_3 + 0,6 \\times X_4 + 0,999 \\times X_5',
      note: 'X1 = Modal Kerja / Total Aset, X2 = Saldo Laba / Total Aset, X3 = EBIT / Total Aset, X4 = Nilai Pasar Ekuitas / Total Liabilitas, X5 = Penjualan / Total Aset.'
    },
    {
      kind: 'table',
      headers: ['Rentang Nilai Z-Score', 'Kategori Zona', 'Interpretasi Probabilitas Kepailitan'],
      rows: [
        ['$Z > 2,99$', '**Safe Zone (Zona Aman)**', 'Kondisi keuangan sehat; probabilitas kebangkrutan sangat rendah.'],
        ['$1,81 \\le Z \\le 2,99$', '**Grey Zone (Zona Abu-abu)**', 'Kondisi rentan; memerlukan perbaikan efisiensi operasi dan pemangkasan utang.'],
        ['$Z < 1,81$', '**Distress Zone (Zona Bahaya)**', 'Probabilitas kebangkrutan sangat tinggi dalam waktu 1-2 tahun ke depan!']
      ],
      caption: 'Tabel 14.2: Ambang batas interpretasi skor Altman Z-Score.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**Sinergi**: Nilai gabungan harus lebih besar dari jumlah nilai mandiri ($1 + 1 = 3$).',
        '**Hostile Takeover Defense**: Taktik pertahanan mencakup *Poison Pill*, *White Knight*, *Golden Parachute*, dan *Greenmail*.',
        '**Restrukturisasi Utang**: Penjadwalan ulang pokok utang (*rescheduling*) atau konversi utang menjadi ekuitas (*debt-to-equity swap*) untuk menghindari likuidasi kepailitan.'
      ]
    }
  ]
};