import type { Reading } from '../../../types';
import { CASE_DECISION_MAKING_BIAS } from '../manajemenPracticeCases';

const SVG_DECISION_MODELS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">3 MODEL PENGAMBILAN KEPUTUSAN MANAJERIAL (RICHARD L. DAFT)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">MODEL KLASIK / RASIONAL</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Ideal &amp; Normatif):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Masalah terdefinisi sempurna</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Seluruh alternatif diketahui</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menghasilkan laba optimal</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Keputusan Terprogram</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">MODEL ADMINISTRATIF</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Herbert Simon - Deskriptif):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bounded Rationality (Terbatas)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• <tspan fill="#86efac" font-weight="700">Prinsip Satisficing</tspan></text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengandalkan intuisi manajer</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Dunia Nyata Manajerial</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">MODEL POLITIK</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Koalisi &amp; Konflik Kepentingan):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tujuan antar-divisi berbeda</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pembentukan koalisi informal</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tawar-menawar (Bargaining)</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Keputusan Kompleks</text>
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
