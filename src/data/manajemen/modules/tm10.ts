import type { Reading } from '../../../types';

const SVG_HRM_PROCESS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PROSES STRATEGIS MANAJEMEN TALENTA SDM (HRM PROCESS)</text>
  
  <!-- Step 1 -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Finding Right People</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Perencanaan &amp; Seleksi)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Analisis &amp; Deskripsi Kerja</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Rekrutmen Internal/Eksternal</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Wawancara Terstruktur</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Akuisisi Talenta Terbaik</text>

  <!-- Step 2 -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Developing Talent</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Pengembangan Kompetensi)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Orientasi &amp; Onboarding</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• On-the-Job Training (OJT)</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Mentoring &amp; Coaching</text>
  <text x="340" y="186" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Peningkatan Kapabilitas</text>

  <!-- Step 3 -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Maintaining Workforce</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Retensi &amp; Kesejahteraan)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kompensasi &amp; Benefit</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penilaian Kinerja (360°)</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Jalur Karir &amp; Work-Life</text>
  <text x="555" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Retensi &amp; Loyalitas</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Managing Human Talent and Diversity/Inclusion: Strategi MSDM & Keberagaman',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 9',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 10: Menguasai peran strategis Manajemen Sumber Daya Manusia (Strategic Human Resource Management - HRM), pergeseran kontrak sosial baru (*The New Social Contract* - kemampuan kerja / *employability* vs loyalitas seumur hidup), 3 tahap siklus talenta (Finding, Developing, Maintaining an Effective Workforce), teknik seleksi (Wawancara Terstruktur, Tes Asesmen, Pemeriksaan Latar Belakang), Penilaian Kinerja (Umpan Balik 360 Derajat & *Behaviorally Anchored Rating Scales* / BARS), serta Manajemen Keberagaman & Inklusi (*Diversity, Equity, and Inclusion* / DEI, Bias Bawah Sadar, dan Efek Hambatan Tak Terlihat / *Glass Ceiling*).',
  objectives: [
    'Menjelaskan peran strategis MSDM dalam menyelaraskan modal manusia dengan strategi keunggulan bersaing organisasi.',
    'Membedakan Kontrak Sosial Lama (keamanan kerja seumur hidup) vs Kontrak Sosial Baru (pemberdayaan, pembelajaran berkelanjutan, dan nilai pasar talenta).',
    'Menerapkan tahapan rekrutmen dan seleksi: Analisis Jabatan (*Job Analysis*), Deskripsi Jabatan (*Job Description*), dan Spesifikasi Jabatan (*Job Specification*).',
    'Menjelaskan metode penilaian kinerja objektif: BARS (Behaviorally Anchored Rating Scales) dan Umpan Balik 360 Derajat (*360-Degree Feedback*).',
    'Menganalisis manfaat bisnis keberagaman tempat kerja (*Dividends of Workplace Diversity*: peningkatan inovasi, pemahaman pasar konsumen luas, pengurangan turnover).',
    'Mengidentifikasi bias personal bawah sadar (*Unconscious / Implicit Bias*), stereotip, dan fenomena Glass Ceiling bagi perempuan/minoritas.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Tahap Siklus Strategis Pengelolaan Talenta SDM',
      svg: SVG_HRM_PROCESS,
      caption: 'Gambar 10.1: Alur komprehensif akuisisi, pengembangan, dan retensi modal manusia unggul.'
    },

    { kind: 'h2', text: '1. Kontrak Sosial Lama vs Kontrak Sosial Baru di Tempat Kerja' },
    {
      kind: 'table',
      headers: ['Aspek Kontrak Kerja', 'Kontrak Sosial Tradisional (Lama)', 'Kontrak Sosial Kontemporer (Baru)'],
      rows: [
        ['Harapan Karyawan', 'Jaminan keamanan kerja seumur hidup, kompensasi stabil, dan loyalitas pasif terhadap perusahaan.', '**Kemampuan kerja (Employability)**, kesempatan belajar keterampilan baru, dan otonomi fleksibilitas kerja.'],
        ['Harapan Perusahaan', 'Kepatuhan standar operasional dan kehadiran jam kerja fisik yang kaku.', '**Kinerja bernilai tinggi**, kreativitas pemecahan masalah, tanggung jawab pribadi, dan perbaikan terus-menerus.'],
        ['Pengembangan Karir', 'Kenaikan pangkat vertikal terstruktur menurut senioritas masa kerja.', 'Pengembangan lateral lintas fungsi berbasis kompetensi dan portofolio proyek riil.']
      ],
      caption: 'Tabel 10.1: Transformasi hubungan kerja perusahaan dan karyawan.'
    },

    { kind: 'h2', text: '2. Dimensi Keberagaman & Inklusi (Diversity & Inclusion)' },
    {
      kind: 'table',
      headers: ['Konsep Keberagaman', 'Karakteristik Utama', 'Tantangan & Hambatan Manajerial'],
      rows: [
        ['**Keberagaman Tradisional**', 'Perbedaan kasat mata: Usia, ras, gender, etnis, kebangsaan, dan disabilitas fisik.', '**Glass Ceiling**: Hambatan tak kasat mata yang menghalangi perempuan dan minoritas mencapai posisi eksekutif puncak.'],
        ['**Keberagaman Inklusif**', 'Mencakup seluruh dimensi perbedaan: Gaya kepribadian, latar belakang pendidikan, pola pikir, dan pengalaman hidup.', '**Unconscious Bias**: Penilaian diskriminatif otomatis di bawah sadar saat merekrut atau mempromosikan karyawan.'],
        ['**Inklusi (Inclusion)**', 'Budaya di mana seluruh individu merasa dihargai, dihormati, dan memiliki akses setara untuk berkontribusi penuh.', 'Menghilangkan etnosentrisme organisasi dan menciptakan iklim psikologis aman (*Psychological Safety*).']
      ],
      caption: 'Tabel 10.2: Spektrum manajemen keberagaman tempat kerja modern.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**Job Description vs Job Specification**: Job Description memuat ringkasan tugas dan tanggung jawab fisik pekerjaan; Job Specification memuat kualifikasi pengetahuan, keterampilan, dan pendidikan yang wajib dimiliki kandidat.',
        '**360-Degree Feedback**: Evaluasi kinerja komprehensif yang mengumpulkan umpan balik dari atasan, rekan kerja sejawat, bawahan langsung, dan pelanggan eksternal.',
        '**BARS**: Metode penilaian kinerja yang mengaitkan skala evaluasi dengan contoh-contoh perilaku kerja nyata yang teramati secara objektif.'
      ]
    }
  ]
};