import type { Reading } from '../../../types';

const SVG_LEWIN_CHANGE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL TIGA TAHAPAN PERUBAHAN ORGANISASI (KURT LEWIN CHANGE MODEL)</text>
  
  <!-- Unfreezing -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. Unfreezing</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Pencairan Status Quo)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Menciptakan urgensi</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Sadarkan perlunya ubah</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kurangi resistensi</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Membongkar Kebiasaan</text>

  <!-- Changing -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">2. Changing / Moving</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Proses Transisi Nilai)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Adopsi perilaku baru</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pelatihan &amp; teknologi</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Uji coba sistem baru</text>
  <text x="340" y="186" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Pembelajaran Perilaku</text>

  <!-- Refreezing -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">3. Refreezing</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Pembekuan Norma Baru)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Integrasi budaya baru</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Sistem reward selaras</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Evaluasi berkelanjutan</text>
  <text x="555" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Menjadi Kebiasaan Baku</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Managing Innovation and Change: Model Ambidextrous & Manajemen Perubahan',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 8',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 9: Menguasai inovasi dan perubahan organisasi, pendekatan organisasi ambidekster (*Ambidextrous Approach* - menyeimbangkan eksplorasi ide kreatif dengan eksploitasi efisiensi operasional), 3 strategi inovasi produk/teknologi (Exploration, Cooperation, Innovation Roles / Idea Incubator & Skunkworks), Model Perubahan Tiga Tahap Kurt Lewin (Unfreezing, Changing, Refreezing), Analisis Medan Kekuatan (*Force-Field Analysis*), serta taktik mengatasi resistensi karyawan terhadap perubahan.',
  objectives: [
    'Mendefinisikan Inovasi Organisasi sebagai adopsi ide atau perilaku baru bagi industri, pasar, atau lingkungan umum.',
    'Menjelaskan konsep Pendekatan Ambidekster (Ambidextrous Approach) dalam mendesain struktur organisasi yang fleksibel sekaligus efisien.',
    'Menganalisis Tiga Pilar Inovasi Produk/Teknologi: Eksplorasi (Kreativitas & Bottom-up ideas), Kerjasama Horisontal (Internal antardepartemen & Eksternal Open Innovation), dan Peran Inovasi (Idea Champions, New-Venture Teams, Skunkworks).',
    'Menerapkan Model Tiga Tahap Perubahan Terencana Kurt Lewin: Unfreezing, Changing, dan Refreezing.',
    'Melakukan Analisis Medan Kekuatan (Force-Field Analysis: Mengidentifikasi Kekuatan Pendorong / *Driving Forces* vs Kekuatan Penghambat / *Restraining Forces*).',
    'Menerapkan 5 taktik manajerial untuk mengatasi penolakan perubahan: Komunikasi/Edukasi, Partisipasi, Negosiasi, Paksaan (*Coercion*), dan Dukungan Manajemen Puncak.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Model Tiga Tahap Perubahan Terencana Kurt Lewin',
      svg: SVG_LEWIN_CHANGE,
      caption: 'Gambar 9.1: Siklus transformasi organisasi dari pencairan status quo hingga pembekuan budaya kerja baru.'
    },

    { kind: 'h2', text: '1. Tiga Pilar Inovasi Organisasi (Daft Framework)' },
    {
      kind: 'table',
      headers: ['Pilar Inovasi', 'Mekanisme & Komponen Pendukung', 'Tujuan Strategis'],
      rows: [
        ['**1. Eksplorasi (Exploration)**', '• Lingkungan Kreatif & *Playful Culture*\n• Inkubator Ide (*Idea Incubator*)\n• Kompetisi proposal inovasi karyawan', 'Mendorong lahirnya gagasan-gagasan baru dari seluruh jenjang organisasi (*Bottom-Up Innovation*).'],
        ['**2. Kerjasama (Cooperation)**', '• Model Koordinasi Horisontal (R&D, Pemasaran, Manufaktur bekerja sama sejak hari pertama)\n• *Open Innovation* & *Crowdsourcing* dari pihak luar', 'Memastikan produk inovatif sesuai dengan kebutuhan riil pasar dan dapat diproduksi secara massal efisien.'],
        ['**3. Peran Inovasi (Innovation Roles)**', '• Juara Ide (*Idea Champion*)\n• Tim Usaha Baru (*New-Venture Teams*)\n• Unit Khusus Rahasia (*Skunkworks*)', 'Menyediakan sponsor pelindung dan jalur khusus bebas birokrasi agar proyek inovasi berisiko tinggi berhasil terealisasi.']
      ],
      caption: 'Tabel 9.1: Tiga komponen sistemik pendorong inovasi.'
    },

    { kind: 'h2', text: '2. Taktik Mengatasi Penolakan Perubahan (Resistance to Change)' },
    {
      kind: 'table',
      headers: ['Taktik Manajerial', 'Kondisi Paling Tepat Digunakan', 'Kelebihan & Kelemahan'],
      rows: [
        ['1. Komunikasi & Edukasi', 'Perubahan bersifat teknis dan karyawan kekurangan informasi akurat.', 'Membangun pemahaman tulus; memakan banyak waktu.'],
        ['2. Partisipasi & Keterlibatan', 'Inisiator perubahan membutuhkan informasi dari pengguna dan pengguna memiliki kekuatan menolak yang besar.', 'Meningkatkan komitmen kepemilikan (*buy-in*); proses lambat.'],
        ['3. Negosiasi & Kompensasi', 'Kelompok tertentu jelas akan dirugikan oleh perubahan (misal pemotongan jam lembur).', 'Mencegah konflik mogok kerja; biaya kompensasi mahal.'],
        ['4. Paksaan Eksplisit (Coercion)', 'Situasi krisis genting di mana kecepatan respon menjadi taruhan hidup-mati bisnis.', 'Sangat cepat; memicu kebencian mendalam karyawan jangka panjang.']
      ],
      caption: 'Tabel 9.2: Pendekatan manajerial menangani resistensi perubahan.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**Ambidextrous Organization**: Menggunakan mekanisme organik longgar untuk eksplorasi ide baru di divisi R&D, dan mekanisme mekanistik ketat untuk efisiensi produksi massal di divisi manufaktur.',
        '**Force-Field Analysis**: Perubahan terjadi bila kekuatan pendorong (*driving forces*) diperbesar atau kekuatan penghambat (*restraining forces*) diperkecil.',
        '**Skunkworks**: Tim kecil rahasia yang terisolasi dari hierarki birokrasi utama perusahaan untuk mengembangkan proyek terobosan berteknologi tinggi.'
      ]
    }
  ]
};