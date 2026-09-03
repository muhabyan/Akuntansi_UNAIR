import type { Reading } from '../../../types';
import { CASE_DECISION_MAKING_BIAS } from '../manajemenPracticeCases';

const SVG_DECISION_MODELS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="clasGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="admGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="polGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">3 MODEL PENGAMBILAN KEPUTUSAN &amp; 6 TAHAP KEPUTUSAN RASIONAL</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DECISION MODELS</text>

  <!-- 3 Models -->
  <g transform="translate(35, 70)">
    <rect class="svg-card" x="0" y="0" width="265" height="120" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="26" rx="10" fill="url(#clasGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="18" fill="#38bdf8" font-size="10" font-weight="800">1. MODEL KLASIK / RASIONAL</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="8">• Kepastian informasi lengkap 100%</text>
    <text class="svg-text" x="14" y="60" fill="#cbd5e1" font-size="8">• Kriteria keputusan jelas &amp; terukur</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="8">• Memaksimalkan laba ideal ekonomis</text>
    <text class="text-accent-blue" x="14" y="96" fill="#38bdf8" font-size="8" font-weight="700">Kondisi: Kepastian (Certainty)</text>
  </g>

  <g transform="translate(315, 70)">
    <rect class="svg-card" x="0" y="0" width="270" height="120" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="270" height="26" rx="10" fill="url(#admGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="18" fill="#34d399" font-size="10" font-weight="800">2. MODEL ADMINISTRATIF (SIMON)</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="8">• Rasionalitas Terbatas (Bounded Rationality)</text>
    <text class="svg-text" x="14" y="60" fill="#cbd5e1" font-size="8">• Memilih opsi yang "cukup baik" (Satisficing)</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="8">• Mengandalkan intuisi &amp; pengalaman</text>
    <text class="text-accent-green" x="14" y="96" fill="#34d399" font-size="8" font-weight="700">Kondisi: Ketidakpastian (Dunia Nyata)</text>
  </g>

  <g transform="translate(600, 70)">
    <rect class="svg-card" x="0" y="0" width="265" height="120" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="26" rx="10" fill="url(#polGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="18" fill="#fbbf24" font-size="10" font-weight="800">3. MODEL POLITIK</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="8">• Konflik tujuan antar divisi/manajer</text>
    <text class="svg-text" x="14" y="60" fill="#cbd5e1" font-size="8">• Pembentukan koalisi kekuasaan</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="8">• Kompromi, tawar-menawar, negosiasi</text>
    <text class="text-accent-amber" x="14" y="96" fill="#fbbf24" font-size="8" font-weight="700">Kondisi: Ambiguitas &amp; Friksi Kepentingan</text>
  </g>

  <!-- 6 Decision Steps Flow -->
  <text class="svg-muted" x="450" y="215" fill="#94a3b8" font-size="10" font-weight="700" text-anchor="middle" letter-spacing="0.5">6 TAHAP PROSES PENGAMBILAN KEPUTUSAN RASIONAL MANAJER</text>
  <g transform="translate(35, 230)">
    <rect class="svg-subcard" x="0" y="0" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="20" cy="18" r="10" fill="#0284c7"/><text x="20" y="22" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">1</text>
    <text class="text-accent-blue" x="36" y="22" fill="#38bdf8" font-size="8.5" font-weight="700">Pengakuan</text><text class="svg-text" x="10" y="44" fill="#cbd5e1" font-size="7.5">Identifikasi masalah</text><text class="svg-text" x="10" y="58" fill="#cbd5e1" font-size="7.5">atau peluang baru</text>

    <rect class="svg-subcard" x="140" y="0" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="160" cy="18" r="10" fill="#0284c7"/><text x="160" y="22" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">2</text>
    <text class="text-accent-blue" x="176" y="22" fill="#38bdf8" font-size="8.5" font-weight="700">Diagnosis</text><text class="svg-text" x="150" y="44" fill="#cbd5e1" font-size="7.5">Analisis akar</text><text class="svg-text" x="150" y="58" fill="#cbd5e1" font-size="7.5">penyebab masalah</text>

    <rect class="svg-subcard" x="280" y="0" width="130" height="90" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
    <circle cx="300" cy="18" r="10" fill="#059669"/><text x="300" y="22" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">3</text>
    <text class="text-accent-green" x="316" y="22" fill="#34d399" font-size="8.5" font-weight="700">Alternatif</text><text class="svg-text" x="290" y="44" fill="#cbd5e1" font-size="7.5">Kembangkan opsi</text><text class="svg-text" x="290" y="58" fill="#cbd5e1" font-size="7.5">solusi kreatif</text>

    <rect class="svg-subcard" x="420" y="0" width="130" height="90" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
    <circle cx="440" cy="18" r="10" fill="#059669"/><text x="440" y="22" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">4</text>
    <text class="text-accent-green" x="456" y="22" fill="#34d399" font-size="8.5" font-weight="700">Seleksi</text><text class="svg-text" x="430" y="44" fill="#cbd5e1" font-size="7.5">Pilih alternatif</text><text class="svg-text" x="430" y="58" fill="#cbd5e1" font-size="7.5">terbaik (Risk/Return)</text>

    <rect class="svg-subcard" x="560" y="0" width="130" height="90" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <circle cx="580" cy="18" r="10" fill="#d97706"/><text x="580" y="22" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">5</text>
    <text class="text-accent-amber" x="596" y="22" fill="#fbbf24" font-size="8.5" font-weight="700">Eksekusi</text><text class="svg-text" x="570" y="44" fill="#cbd5e1" font-size="7.5">Implementasi rencana</text><text class="svg-text" x="570" y="58" fill="#cbd5e1" font-size="7.5">&amp; alokasi sumber daya</text>

    <rect class="svg-subcard" x="700" y="0" width="130" height="90" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <circle cx="720" cy="18" r="10" fill="#d97706"/><text x="720" y="22" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">6</text>
    <text class="text-accent-amber" x="736" y="22" fill="#fbbf24" font-size="8.5" font-weight="700">Evaluasi</text><text class="svg-text" x="710" y="44" fill="#cbd5e1" font-size="7.5">Ukur hasil riil &amp;</text><text class="svg-text" x="710" y="58" fill="#cbd5e1" font-size="7.5">umpan balik korektif</text>
  </g>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Managerial Decision Making: Model, Proses, & Bias Kognitif',
  ref: 'Richard L. Daft Bab 9 | Herbert Simon Bounded Rationality & Satisficing | Daniel Kahneman Cognitive Biases',
  intro: 'TM 6 membahas seni dan sains pengambilan keputusan manajerial dalam kondisi kepastian, risiko, ketidakpastian, dan ambiguitas: perbedaan Keputusan Terprogram vs Tidak Terprogram, 3 Model Pengambilan Keputusan (Model Klasik/Rasional, Model Administratif Herbert Simon, dan Model Politik), 6 langkah proses keputusan rasional, serta identifikasi bias kognitif yang sering menjebak manajer (Sunk-Cost Fallacy, Escalation of Commitment, Confirmation Bias, Overconfidence, Framing Effect) dan teknik mitigasi Devils Advocacy.',
  objectives: [
    'Membedakan situasi keputusan: Certainty, Risk, Uncertainty, dan Ambiguity.',
    'Menganalisis konsep Rasionalitas Terbatas (Bounded Rationality) dan Keputusan Memuaskan (Satisficing).',
    'Menerapkan 6 langkah proses pengambilan keputusan manajerial yang sistematis.',
    'Mendeteksi dan mengatasi 6 bias kognitif umum menggunakan teknik Devils Advocacy dan Dialectical Inquiry.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Perbandingan Tiga Model Pengambilan Keputusan Manajerial: Klasik, Administratif, dan Politik.',
      svg: SVG_DECISION_MODELS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Langkah Keputusan Manajerial', 'Aktivitas Utama Manajer', 'Kesalahan Kritis yang Sering Muncul'],
      rows: [
        ['1. Pengenalan Kebutuhan Keputusan', 'Mendeteksi adanya masalah (kesenjangan kinerja) atau peluang bisnis baru.', 'Mengobati gejala luar, bukan akar masalah utama.'],
        ['2. Diagnosis dan Analisis Masalah', 'Menganalisis sebab-akibat yang mendasari munculnya masalah.', 'Terburu-buru menyimpulkan tanpa data faktual memadai.'],
        ['3. Pengembangan Alternatif Solusi', 'Membuat daftar tindakan kreatif untuk memecahkan masalah.', 'Hanya membatasi diri pada opsi lama yang lazim.'],
        ['4. Pemilihan Alternatif Terbaik', 'Mengevaluasi kelayakan, biaya, risiko, dan dampak masing-masing alternatif.', 'Terjebak bias status quo dan preferensi pribadi.'],
        ['5. Implementasi Alternatif Terpilih', 'Menggunakan wewenang dan kepemimpinan untuk mengeksekusi tindakan.', 'Kurangnya koordinasi dan resistensi dari staf pelaksana.'],
        ['6. Evaluasi dan Umpan Balik', 'Memantau hasil riil keputusan dan membandingkannya dengan sasaran awal.', 'Escalation of commitment (enggan mengakui kegagalan).']
      ],
      caption: 'Tabel 6.0: Enam langkah proses pengambilan keputusan manajerial.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 5 Bias Kognitif Berbahaya dalam Manajemen'
    },
    {
      kind: 'table',
      headers: ['Bias Kognitif', 'Mekanisme Terjadinya Bias', 'Dampak Kerugian Nyata bagi Perusahaan'],
      rows: [
        ['Sunk-Cost Fallacy', 'Terus menggelontorkan dana ke proyek yang merugi karena merasa sudah menginvestasikan banyak uang/waktu.', 'Kerugian membengkak hingga mengancam likuiditas korporasi.'],
        ['Confirmation Bias', 'Hanya mencari dan mempercayai informasi yang mendukung opininya sendiri, mengabaikan data berlawanan.', 'Keputusan produk baru gagal karena riset pasar yang bias.'],
        ['Overconfidence Bias', 'Melebih-lebihkan kemampuan diri sendiri dan meremehkan risiko eksternal pesaing.', 'Melakukan merger dan akuisisi mahal yang akhirnya hancur.'],
        ['Framing Effect', 'Terpengaruh oleh cara suatu informasi disajikan (contoh: "peluang sukses 70%" vs "peluang gagal 30%").', 'Mengambil risiko gegabah atau menolak peluang menguntungkan.'],
        ['Escalation of Commitment', 'Meningkatkan komitmen sumber daya pada tindakan yang gagal demi membela harga diri.', 'Pimpinan mempertahankan manajer yang tidak kompeten.']
      ],
      caption: 'Tabel 6.1: Bias kognitif dalam pengambilan keputusan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Mencegah Groupthink dengan Teknik Devils Advocacy',
      prompt: 'Dalam rapat komite investasi perusahaan, seluruh anggota dewan direksi menyetujui rencana akuisisi startup AI tanpa ada seorang pun yang berani mengkritik risiko tingginya harga beli (Fenomena Groupthink). Bagaimana CEO dapat menggunakan teknik Devils Advocacy untuk menguji ketangguhan keputusan tersebut?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pengertian Groupthink**: Kecenderungan anggota kelompok yang kohesif untuk menyetujui pandangan mayoritas demi menghindari konflik, menekan pemikiran kritis independen.',
            '**Penerapan Devils Advocacy**: CEO secara resmi menugaskan satu direktur (atau tim analis khusus) untuk berperan sebagai "Pengacara Iblis" (Devils Advocate).\nTugasnya: Menantang secara agresif setiap asumsi optimis valuasi, memaparkan skenario terburuk jika integrasi sistem gagal, dan membuktikan mengapa akuisisi tersebut bisa merugikan.',
            '**Hasil Akhir**: Dewan direksi terhindar dari ilusi kesepakatan semu dan mampu membuat keputusan yang jauh lebih matang dan teruji secara objektif.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '3 Model Keputusan Daft', 'Karakteristik model klasik normatif, model administratif Simon, dan model politik.', 'Mampu mengidentifikasi model keputusan yang berlaku di skenario kasus.'],
        ['2', 'Bounded Rationality & Satisficing', 'Konsep keterbatasan kognitif manusia dan pengambilan keputusan "cukup baik".', 'Mampu menjelaskan mengapa manajer tidak selalu bertindak rasional sempurna.'],
        ['3', 'Bias Kognitif & Groupthink', 'Identifikasi sunk-cost, framing, overconfidence, dan teknik devils advocacy.', 'Mampu merancang mekanisme pengambilan keputusan yang bebas bias.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Pengantar Manajemen.'
    },
    CASE_DECISION_MAKING_BIAS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Satisficing Adalah Realitas Manajer**: Dalam dunia nyata yang serba cepat dan informasi tidak lengkap, manajer mencari alternatif pertama yang memenuhi kriteria minimal (*satisficing*), bukan alternatif sempurna.',
        '**Sunk Cost Adalah Biaya Masa Lalu**: Uang yang sudah keluar di masa lalu tidak boleh mempengaruhi keputusan masa depan; keputusan harus semata-mata didasarkan pada arus kas masa depan (*incremental future cash flows*).',
        '**Intuisi Bukan Sekadar Tebakan**: Intuisi manajerial adalah pengenalan pola bawah sadar yang dibangun dari pengalaman praktis bertahun-tahun di lapangan.'
      ]
    }
  ]
};
