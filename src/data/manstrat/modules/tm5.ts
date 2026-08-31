import type { Reading } from '../../../types';

const SVG_GLOBAL_STRATEGIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">EMPAT STRATEGI INTERNASIONAL (INTERNATIONAL STRATEGIES - DESS CH. 7)</text>
  
  <!-- Global Strategy -->
  <rect x="40" y="50" width="280" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="180" y="72" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Global Strategy</text>
  <text x="180" y="88" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tekanan Biaya Tinggi &amp; Adaptasi Lokal Rendah</text>
  <text x="180" y="102" fill="#34d399" font-size="8.5" font-weight="600" text-anchor="middle">(Standarisasi Produk Global: Semikonduktor, Pesawat)</text>

  <!-- Transnational Strategy -->
  <rect x="360" y="50" width="280" height="65" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="500" y="72" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. Transnational Strategy [IDEAL]</text>
  <text x="500" y="88" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tekanan Biaya Tinggi &amp; Adaptasi Lokal Tinggi</text>
  <text x="500" y="102" fill="#34d399" font-size="8.5" font-weight="600" text-anchor="middle">(Efisiensi Global + Fleksibilitas Lokal: Unilever, P&amp;G)</text>

  <!-- International Strategy -->
  <rect x="40" y="125" width="280" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="180" y="147" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. International Strategy</text>
  <text x="180" y="163" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tekanan Biaya Rendah &amp; Adaptasi Lokal Rendah</text>
  <text x="180" y="177" fill="#fbbf24" font-size="8.5" font-weight="600" text-anchor="middle">(Mengekspor Kompetensi Inti Domestik)</text>

  <!-- Multidomestic Strategy -->
  <rect x="360" y="125" width="280" height="65" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="500" y="147" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">4. Multidomestic Strategy</text>
  <text x="500" y="163" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tekanan Biaya Rendah &amp; Adaptasi Lokal Tinggi</text>
  <text x="500" y="177" fill="#c084fc" font-size="8.5" font-weight="600" text-anchor="middle">(Desentralisasi Penuh: Makanan &amp; Ritel Lokal)</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Corporate-Level Strategy & International Strategy: Diversifikasi, M&A, & Ekspansi Global',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 6 & 7',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 5: Menguasai formulasi Strategi Tingkat Korporat (*Corporate-Level Strategy*), Diversifikasi Terkait (*Related Diversification*: *Economies of Scope*, Berbagi Aktivitas / *Sharing Activities*, dan Transfer Kompetensi Inti / *Core Competencies*) vs Diversifikasi Tidak Terkait (*Unrelated Diversification*: *Parenting Advantage, Restructuring, & Portfolio Management / BCG Matrix*), Sarana Diversifikasi (Merger & Akuisisi / M&A, Aliansi Strategis, *Joint Ventures*, dan Pengembangan Internal), serta Empat Strategi Internasional (*International, Global, Multidomestic, Transnational Strategy*).',
  objectives: [
    'Menjelaskan alasan korporasi melakukan diversifikasi bisnis untuk menciptakan nilai sinergi ($1 + 1 > 2$).',
    'Menganalisis Diversifikasi Terkait melalui Penciptaan *Economies of Scope* dan Kekuatan Pasar (*Market Power / Pooled Negotiating Power & Vertical Integration*).',
    'Menganalisis Diversifikasi Tidak Terkait melalui *Parenting Advantage*, Restrukturisasi Perusahaan bermasalah, dan Matriks Portofolio BCG (Stars, Question Marks, Cash Cows, Dogs).',
    'Mengevaluasi kelebihan dan kelemahan 3 sarana pertumbuhan korporasi: M&A, Aliansi Strategis, dan Pengembangan Internal (*Internal Development*).',
    'Menganalisis 4 Strategi Internasional berdasarkan trade-off Tekanan Penurunan Biaya vs Tekanan Responsif Lokal (*Local Responsiveness*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Empat Strategi Ekspansi Internasional Perusahaan Multinasional',
      svg: SVG_GLOBAL_STRATEGIES,
      caption: 'Gambar 5.1: Matriks pilihan strategi global berdasarkan kebutuhan integrasi global vs responsivitas lokal.'
    },

    { kind: 'h2', text: '1. Diversifikasi Terkait vs Tidak Terkait' },
    {
      kind: 'table',
      headers: ['Jenis Diversifikasi', 'Mekanisme Penciptaan Nilai Sinergi', 'Contoh Kasus Korporasi'],
      rows: [
        ['**Diversifikasi Terkait (Related Diversification)**', '• **Leveraging Core Competencies**: Memanfaatkan keahlian R&D mesin mobil untuk memproduksi motor & genset.\n• **Sharing Activities**: Menggabungkan armada distribusi atau tenaga penjual bersama.\n• **Market Power**: Integrasi vertikal ke hulu/hilir.', 'Honda (Mobil, Motor, Mesin Pemotong Rumput); Disney (Film, Taman Hiburan, Merchandise).'],
        ['**Diversifikasi Tidak Terkait (Unrelated Diversification)**', '• **Parenting Advantage**: Manajemen puncak menyediakan alokasi modal cerdas dan tata kelola disiplin.\n• **Restructuring**: Membeli perusahaan tidak efisien, merombak manajemen, dan menjual kembali dengan laba besar.\n• **Portofolio BCG**.', 'Berkshire Hathaway (Warren Buffett); General Electric (Era Jack Welch).']
      ],
      caption: 'Tabel 5.1: Dua jalur strategis diversifikasi korporasi.'
    },

    { kind: 'h2', text: '2. Empat Kuadran Matriks Portofolio BCG (Boston Consulting Group)' },
    {
      kind: 'table',
      headers: ['Kategori Portofolio BCG', 'Pangsa Pasar Relatif & Pertumbuhan Pasar', 'Tindakan Strategis Korporat'],
      rows: [
        ['**Stars (Bintang)**', 'Pangsa Pasar Tinggi & Pertumbuhan Pasar Tinggi', '**Investasi Agresif**: Mendanai pertumbuhan cepat untuk mempertahankan posisi kepemimpinan masa depan.'],
        ['**Cash Cows (Sapi Perah)**', 'Pangsa Pasar Tinggi & Pertumbuhan Pasar Rendah', '**Memanen Arus Kas (Milking)**: Menghasilkan laba kas melimpah untuk membiayai Stars dan Question Marks.'],
        ['**Question Marks (Tanda Tanya)**', 'Pangsa Pasar Rendah & Pertumbuhan Pasar Tinggi', '**Pilihan Selektif**: Berinvestasi besar untuk menjadikannya Star, atau melepaskannya jika kalah bersaing.'],
        ['**Dogs (Anjing)**', 'Pangsa Pasar Rendah & Pertumbuhan Pasar Rendah', '**Divestasi / Likuidasi**: Menutup unit bisnis atau menjualnya karena menguras sumber daya manajemen.']
      ],
      caption: 'Tabel 5.2: Matriks BCG untuk alokasi modal unit bisnis strategis.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**Transnational Strategy**: Pendekatan paling canggih yang mengoptimalkan trade-off: mencapai skala efisiensi biaya global sekaligus menyesuaikan produk dengan preferensi konsumen lokal.',
        '**Integrasi Vertikal (Vertical Integration)**: Perluasan ke rantai pasok hulu (*Backward* - membeli pemasok bahan baku) atau ke saluran hilir (*Forward* - memiliki gerai ritel sendiri).',
        '**Aliansi Strategis & JV**: Memungkinkan perusahaan mengakses teknologi baru dan pasar asing tanpa menanggung seluruh risiko modal dan utang M&A.'
      ]
    }
  ]
};