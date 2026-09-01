import type { Reading } from '../../../types';
import { CASE_HR_TALENT_DIVERSITY } from '../manajemenPracticeCases';

const SVG_HRM_CYCLE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SIKLUS STRATEGIS MANAJEMEN SUMBER DAYA MANUSIA (STRATEGIC HRM)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. ATTRACTION</text>
  <text x="97" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Menarik Talenta):</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Analisis Jabatan (Job Desc)</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rekrutmen Digital &amp; AI</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Seleksi &amp; Uji Kompetensi</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Talent Acquisition</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">2. DEVELOPMENT</text>
  <text x="257" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Mengembangkan):</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Orientasi &amp; Onboarding</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pelatihan &amp; Upskilling</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mentoring kepemimpinan</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Human Capital Growth</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">3. MAINTENANCE</text>
  <text x="417" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Mempertahankan):</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penilaian Kinerja 360</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kompensasi &amp; Bonus</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Jenjang karier jelas</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Employee Retention</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10" font-weight="700" text-anchor="middle">4. DE&amp;I INTEGRATION</text>
  <text x="580" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Keberagaman &amp; Inklusi):</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keadilan gender &amp; disabilitas</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penembusan Glass Ceiling</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tim lintas generasi</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Inovasi Perspektif</text>
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
