import type { Reading } from '../../../types';

const SVG_CAATS_TECHNIQUES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TEKNIK AUDIT BERBANTUAN KOMPUTER (CAATS / TABK)</text>
  
  <!-- Test Data Approach -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Test Data Approach</text>
  <text x="125" y="102" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Auditor membuat data uji</text>
  <text x="125" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(valid &amp; tidak valid)</text>
  <line x1="45" y1="130" x2="205" y2="130" stroke="#334155"/>
  <text x="125" y="148" fill="#94a3b8" font-size="9" text-anchor="middle">Diproses melalui program</text>
  <text x="125" y="164" fill="#94a3b8" font-size="9" text-anchor="middle">komputer milik klien</text>
  <text x="125" y="185" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Menguji Logic Kontrol</text>

  <!-- Parallel Simulation -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. Parallel Simulation</text>
  <text x="340" y="102" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Auditor menulis program</text>
  <text x="340" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">simulasi independen (GAS)</text>
  <line x1="260" y1="130" x2="420" y2="130" stroke="#334155"/>
  <text x="340" y="148" fill="#94a3b8" font-size="9" text-anchor="middle">Memproses data riil klien</text>
  <text x="340" y="164" fill="#94a3b8" font-size="9" text-anchor="middle">&amp; bandingkan output</text>
  <text x="340" y="185" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Menguji 100% Populasi</text>

  <!-- Embedded Audit Module -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="555" y="80" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">3. Embedded Audit Module</text>
  <text x="555" y="102" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Kode audit disisipkan</text>
  <text x="555" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">ke dalam sistem live klien</text>
  <line x1="475" y1="130" x2="635" y2="130" stroke="#334155"/>
  <text x="555" y="148" fill="#94a3b8" font-size="9" text-anchor="middle">Menangkap transaksi</text>
  <text x="555" y="164" fill="#94a3b8" font-size="9" text-anchor="middle">anomali secara real-time</text>
  <text x="555" y="185" fill="#c084fc" font-size="9.5" font-weight="700" text-anchor="middle">Continuous Auditing</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Teknik Audit Berbantuan Komputer (CAATs) & Perancangan Program Audit',
  ref: 'Arens Ch. 13 | IAASB Technology Support Guide',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 14: Menguasai Teknik Audit Berbantuan Komputer (CAATs / TABK: Test Data Approach, Parallel Simulation, Embedded Audit Module, Generalized Audit Software), Audit Data Analytics (ADA), serta integrasi perancangan Program Audit Berbasis Risiko siklus transaksi.',
  objectives: [
    'Memahami urgensi CAATs dalam mengaudit lingkungan sistem informasi modern (ERP).',
    'Membandingkan 3 pendekatan utama CAATs: Pendekatan Data Uji (Test Data Approach), Simulasi Paralel (Parallel Simulation), dan Modul Audit Tersisip (Embedded Audit Module).',
    'Menerapkan Perangkat Lunak Audit Tergeneralisasi (Generalized Audit Software - GAS seperti ACL/IDEA) untuk pengujian 100% populasi.',
    'Menjelaskan konsep Audit Data Analytics (ADA) dalam mendeteksi anomali data transaksi.',
    'Merancang Program Audit Berbasis Risiko terintegrasi untuk siklus pendapatan atau siklus pengeluaran.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Teknik Utama Audit Berbantuan Komputer (CAATs)',
      svg: SVG_CAATS_TECHNIQUES,
      caption: 'Gambar 14.1: Perbandingan mekanisme kerja Test Data, Parallel Simulation, dan Embedded Audit Module.'
    },

    { kind: 'h2', text: '1. Tiga Pendekatan Teknik Audit Berbantuan Komputer (CAATs)' },
    {
      kind: 'table',
      headers: ['Pendekatan CAATs', 'Mekanisme Pelaksanaan', 'Kelebihan & Keterbatasan Utama'],
      rows: [
        ['1. Pendekatan Data Uji (Test Data Approach)', 'Auditor memasukkan data uji coba (transaksi valid dan tidak valid) ke dalam program komputer klien untuk melihat apakah sistem menolak data yang salah.', '• Kelebihan: Menguji langsung logika kontrol aplikasi klien.\n• Keterbatasan: Hanya menguji program pada titik waktu tertentu; risiko data uji mengotori database riil klien.'],
        ['2. Simulasi Paralel (Parallel Simulation)', 'Auditor menulis program simulasi independen (menggunakan ACL/IDEA) untuk memproses ulang data riil klien dan mencocokkan outputnya dengan hasil sistem klien.', '• Kelebihan: Mampu memverifikasi 100% populasi data tanpa mengganggu sistem operasional klien.\n• Keterbatasan: Membutuhkan keahlian pemrograman tinggi.'],
        ['3. Modul Audit Tersisip (Embedded Audit Module - EAM)', 'Auditor menyisipkan kode rutin audit khusus ke dalam program aplikasi live klien untuk mencatat transaksi yang melampaui batas tertentu ke dalam file log audit terpisah.', '• Kelebihan: Memungkinkan audit berkelanjutan (*Continuous Auditing*) secara real-time.\n• Keterbatasan: Memerlukan kerja sama intensif dengan pengembang sistem sejak perancangan awal.']
      ],
      caption: 'Tabel 14.1: Matriks perbandingan teknik CAATs.'
    },

    { kind: 'h2', text: '2. Audit Data Analytics (ADA) dalam Audit Modern' },
    {
      kind: 'p',
      text: 'Audit Data Analytics (ADA) adalah ilmu dan seni menemukan serta menganalisis pola, mengidentifikasi anomali, dan mengekstrak informasi berguna lainnya dalam data yang mendasari atau terkait dengan subjek audit melalui pemodelan visual dan analisis statistik populasi penuh (100% Testing).'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**Auditing Through the Computer**: Menguji kontrol logika pemrosesan internal komputer (bukan hanya memeriksa input dan output manual).',
        '**Parallel Simulation**: Teknik paling populer untuk menguji akurasi matematis dan kelengkapan perhitungan kompleks (misal perhitungan bunga dan amortisasi).',
        '**Program Audit Terintegrasi**: Menggabungkan penilaian risiko, pengujian pengendalian (TOC), dan pengujian substantif (TOD) ke dalam langkah kerja audit yang terstruktur.'
      ]
    }
  ]
};