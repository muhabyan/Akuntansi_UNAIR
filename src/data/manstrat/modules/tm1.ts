import type { Reading } from '../../../types';

const SVG_STRATEGIC_PROCESS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PROSES MANAJEMEN STRATEGIK TIGA TAHAP (DESS ET AL. CH. 1)</text>
  
  <!-- Step 1 -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Strategic Analysis</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Analisis Strategis)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Analisis Lingkungan Eksternal</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Analisis Internal &amp; VRIO</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Evaluasi Aset Intelektual</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Di mana posisi kita saat ini?</text>

  <!-- Step 2 -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Strategic Formulation</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Formulasi Strategi)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Business-Level Strategy</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Corporate-Level Strategy</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• International Strategy</text>
  <text x="340" y="186" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Ke mana kita akan bersaing?</text>

  <!-- Step 3 -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Strategic Implementation</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Implementasi Strategi)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Strategic Control &amp; Gov</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Desain Struktur Organisasi</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Strategic Leadership &amp; Inovasi</text>
  <text x="555" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Bagaimana mengeksekusinya?</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Strategic Management: Creating Competitive Advantages, Proses Strategik, & Simbiosis Pemangku Kepentingan',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 1',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 1: Menguasai hakikat Manajemen Strategik, 4 atribut kunci manajemen strategik (mengarahkan tujuan menyeluruh, menyertakan banyak pemangku kepentingan, menyeimbangkan jangka pendek vs panjang, serta menyeimbangkan efisiensi vs efektivitas / *Ambidexterity*), tiga tahapan proses strategik yang saling terkait (Analisis, Formulasi, Implementasi), pandangan Zero-Sum vs Simbiosis Pemangku Kepentingan (*Stakeholder Symbiosis*), Triple Bottom Line, kepemimpinan strategis yang terdistribusi (*Shared Strategic Leadership*), serta hierarki arah strategis (Visi, Misi, Sasaran Strategis).',
  objectives: [
    'Mendefinisikan Manajemen Strategik sebagai analisis, keputusan, dan tindakan yang dilakukan organisasi untuk menciptakan dan mempertahankan keunggulan bersaing (*Competitive Advantage*).',
    'Menjelaskan Empat Atribut Kunci Manajemen Strategik menurut Dess et al.',
    'Menganalisis konsep Ambidexterity Organisasi (kemampuan mengeksploitasi keunggulan saat ini sekaligus mengeksplorasi peluang masa depan).',
    'Membedakan Pandangan Zero-Sum (persaingan perebutan klaim antar-stakeholder) vs Simbiosis Pemangku Kepentingan (menciptakan nilai bersama yang saling menguntungkan).',
    'Menjelaskan peran Tiga Tipe Pemimpin Strategis: Pemimpin Eksekutif Lokal, Juara Internal (*Internal Networkers*), dan Eksekutif Puncak.',
    'Menyusun hierarki arah strategis: Visi (Gambaran masa depan inspiratif jangka panjang), Misi (Fokus bisnis dan basis persaingan saat ini), dan Sasaran Strategis SMART.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Tahapan Proses Manajemen Strategik',
      svg: SVG_STRATEGIC_PROCESS,
      caption: 'Gambar 1.1: Siklus interaktif analisis situasi, formulasi pilihan strategi, dan eksekusi implementasi terpadu.'
    },

    { kind: 'h2', text: '1. Empat Atribut Kunci Manajemen Strategik' },
    {
      kind: 'table',
      headers: ['Atribut Kunci', 'Definisi Konseptual', 'Tantangan Manajerial'],
      rows: [
        ['1. Mengarahkan pada Sasaran Menyeluruh', 'Fokus pada apa yang terbaik bagi **seluruh organisasi**, bukan hanya satu divisi/fungsi fungsional tertentu.', 'Mencegah optimasi lokal yang merugikan kepentingan korporasi total.'],
        ['2. Menyertakan Berbagai Stakeholder', 'Mempertimbangkan kepentingan pemegang saham, karyawan, pelanggan, pemasok, dan masyarakat.', 'Menyeimbangkan tuntutan dividen jangka pendek dengan investasi R&D jangka panjang.'],
        ['3. Menggabungkan Perspektif Waktu', 'Menyeimbangkan kebutuhan hasil kinerja kuartalan jangka pendek dengan visi jangka panjang 5-10 tahun.', 'Menghindari *managerial myopia* (rabun jauh strategi).'],
        ['4. Mengakui Trade-off Efisiensi vs Efektivitas', 'Menyeimbangkan antara melakukan hal yang benar (*doing the right thing*) dengan melakukan hal secara efisien (*doing things right*).', 'Membangun kemampuan ambideksteritas organisasi (*Organizational Ambidexterity*).']
      ],
      caption: 'Tabel 1.1: Empat pilar fundamental manajemen strategik (Dess et al.).'
    },

    { kind: 'h2', text: '2. Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis)' },
    {
      kind: 'p',
      text: 'Manajemen strategik modern menolak pandangan kuno *Zero-Sum* yang menganggap keuntungan satu pihak (misal laba pemegang saham) harus mengorbankan pihak lain (upah buruh rendah atau limbah lingkungan). Sebaliknya, pendekatan **Simbiosis Pemangku Kepentingan** meyakini bahwa pemangku kepentingan saling bergantung secara simbiosis mutualisme:'
    },
    {
      kind: 'ul',
      items: [
        'Karyawan yang dihargai dan termotivasi menghasilkan produk berkualitas superior.',
        'Produk berkualitas memuaskan pelanggan loyal yang meningkatkan arus kas penjualan.',
        'Arus kas yang kuat memberikan pengembalian dividen tinggi bagi investor dan memungkinkan program pelestarian lingkungan masyarakat.'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 1' },
    {
      kind: 'ul',
      items: [
        '**Intended vs Realized Strategy (Henry Mintzberg)**: Strategi yang terealisasi (*Realized Strategy*) merupakan gabungan dari bagian strategi yang direncanakan secara sadar (*Deliberate Strategy*) dengan strategi baru yang muncul spontan di tengah jalan (*Emergent Strategy*).',
        '**Visi vs Misi**: Visi bersifat membangkitkan gairah masa depan yang idealis; Misi mencakup ruang lingkup produk, pasar sasaran, dan nilai keunggulan kompetitif inti.',
        '**Strategic Objectives**: Wajib bersifat spesifik, terukur, dapat dicapai, realistis, dan berbatas waktu (SMART).'
      ]
    }
  ]
};