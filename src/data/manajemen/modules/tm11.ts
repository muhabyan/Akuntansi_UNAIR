import type { Reading } from '../../../types';

const SVG_BIG_FIVE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA DIMENSI KEPRIBADIAN UTAMA (THE BIG FIVE PERSONALITY TRAITS)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">1. Extroversion</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Ekstroversi</text>
  <line x1="35" y1="108" x2="130" y2="108" stroke="#334155"/>
  <text x="82" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Ramah, percaya</text>
  <text x="82" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">diri, asertif, dan</text>
  <text x="82" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">antusias sosial</text>
  <text x="82" y="180" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Sales &amp; Leader)</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">2. Agreeableness</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keramahan</text>
  <line x1="165" y1="108" x2="260" y2="108" stroke="#334155"/>
  <text x="212" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Mudah bergaul,</text>
  <text x="212" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">kooperatif, hangat,</text>
  <text x="212" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">dan penuh empati</text>
  <text x="212" y="180" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Kolaborator Tim)</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="9.5" font-weight="700" text-anchor="middle">3. Conscientious</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Kehati-hatian</text>
  <line x1="295" y1="108" x2="390" y2="108" stroke="#334155"/>
  <text x="342" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Disiplin, teliti,</text>
  <text x="342" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">dapat diandalkan,</text>
  <text x="342" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">dan tekun gigih</text>
  <text x="342" y="180" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Prediktor Sukses)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="9.5" font-weight="700" text-anchor="middle">4. Neuroticism</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Stabilitas Emosi</text>
  <line x1="425" y1="108" x2="520" y2="108" stroke="#334155"/>
  <text x="472" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tenang, percaya</text>
  <text x="472" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">diri, tahan stres vs</text>
  <text x="472" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">cemas, murung</text>
  <text x="472" y="180" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Resiliensi Stres)</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="9.5" font-weight="700" text-anchor="middle">5. Openness</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keterbukaan</text>
  <line x1="555" y1="108" x2="650" y2="108" stroke="#334155"/>
  <text x="602" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Imajinatif, artistik,</text>
  <text x="602" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">penasaran, terbuka</text>
  <text x="602" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">pada ide-ide baru</text>
  <text x="602" y="180" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">(Inovasi &amp; R&amp;D)</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Understanding Individual Behavior: Sikap Kerja, Persepsi, Big Five, EQ, & Stres',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 10',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 11: Menguasai perilaku individu dalam organisasi (*Organizational Behavior*), Sikap Kerja (Kepuasan Kerja / *Job Satisfaction*, Komitmen Organisasi / *Organizational Commitment*, dan Kepercayaan / *Trust*), Distorsi Persepsi (*Halo Effect, Projection, Stereotyping*), Teori Atribusi (*Fundamental Attribution Error & Self-Serving Bias*), Lima Dimensi Kepribadian Utama (The Big Five Model & Locus of Control), Empat Komponen Kecerdasan Emosional (EQ), serta Manajemen Stres di tempat kerja.',
  objectives: [
    'Menganalisis hubungan antara Kepuasan Kerja (Job Satisfaction) dan Komitmen Organisasi dengan produktivitas serta tingkat perputaran karyawan (*Turnover*).',
    'Menjelaskan proses perseptual dan distorsi persepsi umum: Efek Halo (*Halo Effect*), Proyeksi (*Projection*), dan Stereotip (*Stereotyping*).',
    'Menerapkan Teori Atribusi: Membedakan Atribusi Internal (karakteristik orang) vs Atribusi Eksternal (situasi lingkungan), serta mengenali *Fundamental Attribution Error* dan *Self-Serving Bias*.',
    'Menganalisis 5 Dimensi Kepribadian Big Five: Extroversion, Agreeableness, Conscientiousness, Emotional Stability, dan Openness to Experience.',
    'Membedakan Locus of Control Internal (percaya mengendalikan nasib sendiri) vs Eksternal (merasa nasib dikendalikan faktor luar).',
    'Menerapkan Empat Komponen Kecerdasan Emosional (Emotional Intelligence - EQ): Kesadaran Diri (*Self-Awareness*), Pengelolaan Diri (*Self-Management*), Kesadaran Sosial / Empati (*Social Awareness*), dan Manajemen Hubungan (*Relationship Management*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Dimensi Kepribadian Utama (The Big Five Model)',
      svg: SVG_BIG_FIVE,
      caption: 'Gambar 11.1: Kerangka kerja psikologis untuk memahami perbedaan pola perilaku karyawan di tempat kerja.'
    },

    { kind: 'h2', text: '1. Distorsi Persepsi & Teori Atribusi Perilaku' },
    {
      kind: 'table',
      headers: ['Konsep Perseptual', 'Definisi Konsep', 'Contoh Kasus di Tempat Kerja'],
      rows: [
        ['**Halo Effect (Efek Halo)**', 'Kesan umum yang dibentuk terhadap seseorang hanya berdasarkan **satu karakteristik tunggal** yang menonjol.', 'Seorang pegawai yang selalu datang tepat waktu dinilai sangat cerdas dan kompeten dalam semua tugas.'],
        ['**Fundamental Attribution Error**', 'Kecenderungan untuk **meremehkan pengaruh faktor eksternal** dan **melebih-lebihkan pengaruh faktor internal** ketika menilai kegagalan orang lain.', 'Atasan langsung menyimpulkan bahwa staf proyek gagal karena malas/bodoh, tanpa memeriksa adanya keterlambatan pasokan vendor eksternal.'],
        ['**Self-Serving Bias**', 'Kecenderungan untuk menghubungkan **kesuksesan diri sendiri pada faktor internal (kemampuan hebat)**, dan menyalahkan **kegagalan diri sendiri pada faktor eksternal (nasib buruk/lingkungan)**.', 'Seorang manajer membanggakan diri saat penjualan naik, tetapi menyalahkan krisis ekonomi saat penjualan anjlok.']
      ],
      caption: 'Tabel 11.1: Pola distorsi kognitif dalam penilaian perilaku manajerial.'
    },

    { kind: 'h2', text: '2. Empat Pilar Kecerdasan Emosional (Daniel Goleman)' },
    {
      kind: 'table',
      headers: ['Komponen EQ', 'Deskripsi Kemampuan', 'Pentingnya bagi Seorang Pemimpin'],
      rows: [
        ['**1. Self-Awareness (Kesadaran Diri)**', 'Mampu mengenali emosi diri sendiri, kekuatan, kelemahan, dan dampaknya pada orang lain.', 'Landasan utama; mencegah reaksi emosional impulsif yang merusak.'],
        ['**2. Self-Management (Pengelolaan Diri)**', 'Kemampuan mengendalikan dorongan emosi negatif, tetap tenang di bawah tekanan, dan berintegritas.', 'Membangun kepercayaan tim dan stabilitas kepemimpinan saat menghadapi krisis.'],
        ['**3. Social Awareness (Kesadaran Sosial / Empati)**', 'Kemampuan memahami emosi orang lain dan membaca dinamika sosial kelompok.', 'Mampu mendengarkan aspirasi bawahan dan merasakan ketidaknyamanan tim.'],
        ['**4. Relationship Management (Manajemen Relasi)**', 'Kemampuan membangun relasi positif, memotivasi orang lain, dan menegosiasikan resolusi konflik.', 'Menyatukan anggota tim lintas fungsi menuju tujuan bersama yang menginspirasi.']
      ],
      caption: 'Tabel 11.2: Empat pilar kecerdasan emosional manajerial.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 11' },
    {
      kind: 'ul',
      items: [
        '**Conscientiousness**: Dimensi Big Five yang secara konsisten menjadi prediktor paling kuat terhadap keberhasilan kinerja pekerjaan di berbagai profesi.',
        '**Internal Locus of Control**: Karyawan dengan locus internal lebih mudah termotivasi secara mandiri, berorientasi prestasi tinggi, dan menangani stres lebih baik.',
        '**Kurva Yerkes-Dodson (Stres & Kinerja)**: Tingkat stres moderat (*Optimal Stress / Eustress*) memaksimalkan kinerja; stres terlalu rendah memicu kebosanan, stres berlebih (*Distress*) memicu kelelahan mental (*Burnout*).'
      ]
    }
  ]
};