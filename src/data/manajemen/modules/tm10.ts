import type { Reading } from '../../../types';
import { CASE_HR_TALENT_DIVERSITY } from '../manajemenPracticeCases';

const SVG_HRM_CYCLE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="h1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="h2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="h3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="h4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad10)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SIKLUS STRATEGIS MANAJEMEN SUMBER DAYA MANUSIA (STRATEGIC HRM)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">HRM FLYWHEEL</text>

  <!-- 4 HRM Pillars -->
  <!-- 1. Attraction -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#h1)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="21" fill="#38bdf8" font-size="10.5" font-weight="800">1. ATTRACTION (MENARIK)</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Analisis Jabatan (Job Analysis)</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Deskripsi &amp; Spesifikasi Tugas</text>
    <text class="svg-text" x="14" y="88" fill="#cbd5e1" font-size="8">• AI Matching &amp; E-Recruitment</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Realistic Job Preview (RJP)</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Wawancara Perilaku Terstruktur</text>
    <rect class="svg-badge-blue" x="14" y="185" width="167" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Perekrutan Tepat Bakat</text>
  </g>

  <!-- 2. Development -->
  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#h2)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="21" fill="#34d399" font-size="10.5" font-weight="800">2. DEVELOPMENT (KEMBANG)</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Onboarding Budaya Korporat</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Pelatihan Teknis &amp; Upskilling</text>
    <text class="svg-text" x="14" y="88" fill="#cbd5e1" font-size="8">• Mentorship &amp; Executive Coach</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Rotasi Jabatan Lintas-Divisi</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Jalur Suksesi Kepemimpinan</text>
    <rect class="svg-badge-green" x="14" y="185" width="167" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Kapasitas Talenta Unggul</text>
  </g>

  <!-- 3. Retention -->
  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#h3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="21" fill="#fbbf24" font-size="10.5" font-weight="800">3. RETENTION (PERTAHAN)</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Penilaian Kinerja 360 Derajat</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Kompensasi Adil &amp; Kompetitif</text>
    <text class="svg-text" x="14" y="88" fill="#cbd5e1" font-size="8">• Insentif Kinerja &amp; Opsi Saham</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Fleksibilitas Kerja (Hybrid)</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Program Kesehatan Mental Staf</text>
    <rect class="svg-badge-amber" x="14" y="185" width="167" height="24" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Loyalitas &amp; Retensi Kunci</text>
  </g>

  <!-- 4. DE&I -->
  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="225" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="32" rx="12" fill="url(#h4)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="21" fill="#a78bfa" font-size="10.5" font-weight="800">4. DIVERSITY &amp; INCLUSION</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Kesetaraan Gender di Direksi</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Menembus Glass Ceiling</text>
    <text class="svg-text" x="14" y="88" fill="#cbd5e1" font-size="8">• Inklusivitas Lintas Generasi</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Kebijakan Anti-Diskriminasi</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Variasi Sudut Pandang Solusi</text>
    <rect class="svg-badge-purple" x="14" y="185" width="157" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="92" y="201" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Kekayaan Inovasi Tim</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">SDM bukan sekadar pos biaya operasional, melainkan aset strategis penghasil keunggulan kompetitif berkelanjutan.</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Managing Human Talent and Diversity/Inclusion: Strategi MSDM & Keberagaman',
  ref: 'Richard L. Daft Bab 13 & 14 | Strategic Human Resource Management (SHRM) | 360-Degree Feedback & DE&I',
  intro: 'TM 10 membahas pengelolaan modal manusia (Human Capital) dan keberagaman tempat kerja sebagai sumber keunggulan kompetitif berkelanjutan: 3 pilar Strategic HRM (Menarik, Mengembangkan, dan Mempertahankan talenta unggul), analisis pekerjaan (Job Description vs Job Specification), teknik seleksi dan Realistic Job Preview (RJP), evaluasi kinerja multi-sumber (360-Degree Feedback) dan mitigasi bias penilai, serta pengelolaan keberagaman dan inklusi (Diversity, Equity, and Inclusion / DE&I) untuk menembus fenomena Glass Ceiling.',
  objectives: [
    'Menjelaskan bagaimana Manajemen SDM Strategis (SHRM) menyelaraskan kebutuhan talenta dengan strategi korporasi.',
    'Membedakan komponen Deskripsi Pekerjaan (Job Description) vs Spesifikasi Pekerjaan (Job Specification).',
    'Menganalisis kelebihan dan risiko sistem evaluasi kinerja 360-Degree Performance Feedback.',
    'Mendeteksi bias persepsi dalam penilaian kinerja: Halo/Horn Effect, Leniency Error, dan Recency Bias.',
    'Merumuskan strategi Diversity, Equity, and Inclusion (DE&I) untuk meruntuhkan batasan Glass Ceiling bagi wanita dan minoritas.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: Siklus Strategis Manajemen Sumber Daya Manusia dan Integrasi Keberagaman Inklusif.',
      svg: SVG_HRM_CYCLE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Aktivitas Utama MSDM', 'Tujuan Strategis Aktivitas', 'Metode / Instrumen Modern', 'Tantangan Implementasi'],
      rows: [
        ['Talent Acquisition (Rekrutmen & Seleksi)', 'Menjaring kandidat dengan Person-Job Fit dan Person-Organization Fit terbaik.', 'Tes psikometrik daring, wawancara berbasis perilaku (Behavioral Interview), RJP.', 'Persaingan memperebutkan talenta digital langka (War for Talent).'],
        ['Pelatihan & Pengembangan', 'Meningkatkan kompetensi keahlian teknis dan kepemimpinan karyawan.', 'Rotasi kerja, e-learning mandiri, program mentoring, dan micro-credentialing.', 'Biaya investasi tinggi dan risiko talenta dibajak kompetitor.'],
        ['Penilaian Kinerja (Performance Appraisal)', 'Mengukur kontribusi riil karyawan dan memberikan umpan balik pertumbuhan.', 'Evaluasi 360 derajat, OKR (Objectives and Key Results), BARS scale.', 'Subjektivitas penilai dan bias kognitif (Halo effect, Leniency).'],
        ['Kompensasi & Tunjangan (Total Rewards)', 'Mempertahankan karyawan berkinerja tinggi melalui penghargaan adil.', 'Kompensasi berbasis kinerja (Pay-for-Performance), opsi saham karyawan (ESOP).', 'Kesenjangan persepsi keadilan internal vs daya saing pasar eksternal.']
      ],
      caption: 'Tabel 10.0: Matriks aktivitas siklus manajemen sumber daya manusia.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 4 Bias Persepsi Penilaian Kinerja Karyawan'
    },
    {
      kind: 'table',
      headers: ['Jenis Bias Penilaian', 'Definisi & Pola Kesalahan Atasan', 'Dampak Terhadap Karyawan'],
      rows: [
        ['Halo Effect (Efek Halo)', 'Atasan memberikan nilai tinggi di SEMUA dimensi kerja hanya karena terkesan oleh SATU karakteristik positif (contoh: staf sangat rajin menyapa di pagi hari).', 'Karyawan yang tidak kompeten secara teknis memperoleh promosi jabatan.'],
        ['Horn Effect (Efek Tanduk)', 'Kebalikan Halo: atasan memberi nilai buruk di seluruh aspek hanya karena satu kekeliruan kecil.', 'Menghancurkan moral dan memicu kepergian karyawan berbakat.'],
        ['Leniency Error (Kebaikan Berlebih)', 'Atasan memberikan nilai tinggi secara seragam kepada semua anak buah untuk menghindari konflik dan disukai.', 'Staf berkinerja luar biasa merasa diperlakukan tidak adil karena nilainya sama dengan staf pemalas.'],
        ['Recency Bias (Bias Kebaruan)', 'Penilaian tahunan hanya didasarkan pada peristiwa yang terjadi 2-3 minggu terakhir, melupakan performa 11 bulan sebelumnya.', 'Karyawan hanya rajin menjelang musim evaluasi akhir tahun.']
      ],
      caption: 'Tabel 10.1: Bias kognitif dalam evaluasi kinerja karyawan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Realistic Job Preview (RJP) Mengatasi Turnover Karyawan Baru',
      prompt: 'Sebuah perusahaan logistik mengalami tingkat pengunduran diri 40% pada bulan pertama dari kurir baru yang direkrut, karena mereka kaget dengan beratnya beban kerja fisik mengangkat paket dan macetnya jalanan. Bagaimana teknik Realistic Job Preview (RJP) dapat menekan angka turnover ini?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Konsep Realistic Job Preview (RJP)**: Memberikan informasi yang jujur, seimbang, dan transparan kepada pelamar kerja mengenai sisi positif MAUPUN sisi negatif pekerjaan sebelum kontrak ditandatangani.',
            '**Penerapan Konkret**: Saat wawancara, pelamar diajak melihat langsung gudang sortir yang berdebu, diperlihatkan video rute macet saat hujan, dan diberi simulasi membawa beban paket berat.',
            '**Hasil**: Pelamar yang tidak sanggup secara fisik akan mengundurkan diri secara sukarela sejak awal (*self-selection*), sedangkan kandidat yang tetap menerima tawaran telah memiliki kesiapan mental matang, memangkas drastis turnover dini.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Strategic HRM Cycle', 'Keterkaitan strategi bisnis dengan perencanaan, rekrutmen, dan retensi talenta.', 'Mampu menyusun tahapan pengadaan SDM profesional.'],
        ['2', 'Penilaian Kinerja & Bias Evaluasi', 'Analisis sistem umpan balik 360-derajat dan eliminasi bias Halo/Leniency.', 'Mampu mengevaluasi instrumen penilaian kinerja karyawan.'],
        ['3', 'Keberagaman & Glass Ceiling', 'Manfaat kompetitif DE&I dan pembongkaran hambatan karier wanita/minoritas.', 'Mampu merancang kebijakan tempat kerja yang inklusif.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 Pengantar Manajemen.'
    },
    CASE_HR_TALENT_DIVERSITY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**SDM Adalah Aset Utama Perusahaan**: Di era ekonomi berbasis pengetahuan (*Knowledge Economy*), keunggulan kompetitif tidak lagi terletak pada mesin pabrik fisik, melainkan pada keahlian dan kreativitas modal manusia (Human Capital).',
        '**Glass Ceiling Harus Dipecahkan**: Batasan tak kasat mata (*Glass Ceiling*) yang menghalangi wanita dan minoritas mencapai posisi direksi bukan hanya tidak adil secara moral, melainkan merugikan korporasi karena kehilangan talenta kepemimpinan terbaik.',
        '**360 Feedback untuk Pengembangan, Bukan Bonus**: Sistem 360-derajat paling efektif bila digunakan untuk tujuan pengembangan kepemimpinan (*developmental*); jika digunakan langsung untuk menentukan bonus uang, sistem ini rentan dirusak oleh politik saling balas budi.'
      ]
    }
  ]
};
