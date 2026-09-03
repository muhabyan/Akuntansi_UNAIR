// scripts/build-akmen-content.mjs
// Generator modul Akuntansi Manajemen (AKM202) TM 1-14 standar emas.
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'src/data/akmen/modules');
fs.mkdirSync(outDir, { recursive: true });

const TM_MODULES = [
  {
    tm: 1,
    title: 'Konsep Dasar Akuntansi Manajemen & Klasifikasi Biaya',
    ref: 'Garrison Ch. 1 & 2 | Hansen & Mowen Ch. 1 & 2',
    intro: 'Tatap muka pertama membangun fondasi perbedaan antara akuntansi keuangan (berorientasi eksternal) dan akuntansi manajemen (berorientasi internal). Fokus mencakup klasifikasi biaya berdasarkan fungsi, ketelusuran, perilaku, dan pengambilan keputusan.',
    objectives: [
      'Membedakan tujuan, pengguna, dan aturan akuntansi manajemen vs akuntansi keuangan.',
      'Mengklasifikasikan biaya manufaktur (Direct Materials, Direct Labor, Manufacturing Overhead).',
      'Membedakan Biaya Produk (inventoriable) vs Biaya Periode (expensed immediately).',
      'Menguasai konsep Prime Cost (Biaya Utama) dan Conversion Cost (Biaya Konversi).',
      'Memahami biaya diferensial, opportunity cost (biaya peluang), dan sunk cost (biaya tertanam).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="akmBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="300" rx="16" fill="url(#akmBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">STRUKTUR KLASIFIKASI BIAYA MANUFAKTUR &amp; PERIODE</text>
      
      <rect x="35" y="60" width="390" height="230" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="230" y="86" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">BIAYA PRODUK (PRODUCT COSTS)</text>
      <text x="230" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">Masuk Persediaan (Neraca) sampai barang terjual</text>
      <line x1="55" y1="118" x2="405" y2="118" stroke="#334155"/>
      
      <rect x="55" y="130" width="105" height="70" rx="6" fill="#0f172a" stroke="#0284c7"/>
      <text x="107" y="152" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Bahan Langsung</text>
      <text x="107" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Direct Materials)</text>
      <text x="107" y="188" fill="#cbd5e1" font-size="8" text-anchor="middle">Dapat ditelusuri</text>

      <rect x="175" y="130" width="110" height="70" rx="6" fill="#0f172a" stroke="#0284c7"/>
      <text x="230" y="152" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TKL</text>
      <text x="230" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Direct Labor)</text>
      <text x="230" y="188" fill="#cbd5e1" font-size="8" text-anchor="middle">Upah perakit</text>

      <rect x="300" y="130" width="105" height="70" rx="6" fill="#0f172a" stroke="#0284c7"/>
      <text x="352" y="152" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Overhead (BOP)</text>
      <text x="352" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Mfg Overhead)</text>
      <text x="352" y="188" fill="#cbd5e1" font-size="8" text-anchor="middle">Bahan &amp; TKL tdk lgsg</text>

      <rect x="55" y="215" width="165" height="60" rx="6" fill="#0369a1" fill-opacity="0.2" stroke="#38bdf8"/>
      <text x="137" y="238" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">BIAYA UTAMA (PRIME COST)</text>
      <text x="137" y="256" fill="#e0f2fe" font-size="9" text-anchor="middle">Bahan Langsung + TKL</text>

      <rect x="235" y="215" width="170" height="60" rx="6" fill="#0369a1" fill-opacity="0.2" stroke="#38bdf8"/>
      <text x="320" y="238" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">BIAYA KONVERSI (CONVERSION)</text>
      <text x="320" y="256" fill="#e0f2fe" font-size="9" text-anchor="middle">TKL + Overhead Pabrik</text>

      <rect x="475" y="60" width="390" height="230" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="670" y="86" fill="#fbbf24" font-size="12" font-weight="700" text-anchor="middle">BIAYA PERIODE (PERIOD COSTS)</text>
      <text x="670" y="106" fill="#94a3b8" font-size="10" text-anchor="middle">Langsung dibebankan ke Laporan Laba Rugi periode berjalan</text>
      <line x1="495" y1="118" x2="845" y2="118" stroke="#334155"/>

      <rect x="500" y="140" width="165" height="120" rx="6" fill="#0f172a" stroke="#d97706"/>
      <text x="582" y="170" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Biaya Penjualan</text>
      <text x="582" y="195" fill="#cbd5e1" font-size="9" text-anchor="middle">• Komisi penjualan</text>
      <text x="582" y="215" fill="#cbd5e1" font-size="9" text-anchor="middle">• Iklan &amp; pemasaran</text>
      <text x="582" y="235" fill="#cbd5e1" font-size="9" text-anchor="middle">• Ongkos kirim keluar</text>

      <rect x="685" y="140" width="165" height="120" rx="6" fill="#0f172a" stroke="#d97706"/>
      <text x="767" y="170" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">Biaya Administrasi</text>
      <text x="767" y="195" fill="#cbd5e1" font-size="9" text-anchor="middle">• Gaji eksekutif &amp; legal</text>
      <text x="767" y="215" fill="#cbd5e1" font-size="9" text-anchor="middle">• Depresiasi kantor pusat</text>
      <text x="767" y="235" fill="#cbd5e1" font-size="9" text-anchor="middle">• Biaya audit &amp; konsultasi</text>
    </svg>`,
    caption: 'Gambar 1.1: Pemetaan Biaya Produk (Manufaktur) vs Biaya Periode (Komersial).',
    sections: [
      {
        heading: 'Perbedaan Akuntansi Manajemen vs Akuntansi Keuangan',
        paragraphs: [
          'Akuntansi manajemen berfokus pada penyediaan informasi bagi pihak internal (manajer) untuk perencanaan, pengendalian, dan pengambilan keputusan operasional. Tidak terikat standar kaku seperti SAK/IFRS, melainkan berorientasi ke masa depan (future-oriented) dengan fleksibilitas tinggi.',
          'Sebaliknya, akuntansi keuangan berorientasi pada pihak eksternal (investor, kreditor, otoritas pajak) dengan menyajikan laporan historis yang tunduk patuh pada Standar Akuntansi Keuangan (SAK) dan prinsip objektivitas.'
        ]
      },
      {
        heading: 'Klasifikasi Biaya untuk Penilaian Persediaan & Laba Rugi',
        paragraphs: [
          'Biaya manufaktur terdiri dari tiga elemen: Bahan Baku Langsung (Direct Materials), Tenaga Kerja Langsung (Direct Labor), dan Biaya Overhead Pabrik (Manufacturing Overhead). Ketiganya membentuk Biaya Produk.',
          'Biaya Non-manufaktur mencakup Biaya Penjualan dan Biaya Administrasi Umum, yang langsung diakui sebagai Biaya Periode (beban pada periode terjadinya).'
        ],
        table: {
          caption: 'Tabel 1.1: Perbandingan Karakteristik Akuntansi Keuangan vs Manajemen',
          headers: ['Dimensi', 'Akuntansi Keuangan', 'Akuntansi Manajemen'],
          rows: [
            ['Pengguna Utama', 'Eksternal (pemegang saham, bankir, regulator)', 'Internal (manajer dan direksi organisasi)'],
            ['Orientasi Waktu', 'Historis (fakta transaksi masa lalu)', 'Masa Depan (proyeksi, estimasi, anggaran)'],
            ['Kepatuhan Standar', 'Wajib patuh SAK / GAAP / IFRS', 'Tidak wajib; bebas mengikuti kebutuhan manajer'],
            ['Fokus Informasi', 'Entitas secara keseluruhan (agregat)', 'Segmen, lini produk, wilayah, atau departemen'],
            ['Sifat Informasi', 'Objektif, dapat diverifikasi, moneter', 'Relevan, tepat waktu, moneter & non-moneter']
          ]
        }
      }
    ],
    formulas: [
      'Biaya Utama (Prime Cost) = Bahan Baku Langsung + Tenaga Kerja Langsung',
      'Biaya Konversi (Conversion Cost) = Tenaga Kerja Langsung + Biaya Overhead Pabrik (BOP)',
      'Total Biaya Manufaktur = Bahan Baku Langsung + Tenaga Kerja Langsung + BOP'
    ]
  },
  {
    tm: 2,
    title: 'Perilaku Biaya & Analisis Cost-Volume-Profit (CVP)',
    ref: 'Garrison Ch. 5 | Hansen & Mowen Ch. 3',
    intro: 'Analisis Cost-Volume-Profit (CVP) merupakan salah satu alat paling kuat bagi manajer untuk memahami keterkaitan antara biaya, volume aktivitas penjualan, dan laba operasional perusahaan.',
    objectives: [
      'Memisahkan biaya semivariabel (mixed cost) menggunakan metode High-Low.',
      'Menghitung Contribution Margin (CM) per unit dan Contribution Margin Ratio (CMR).',
      'Menghitung Titik Impas (Break-Even Point / BEP) dalam unit fisik dan nilai rupiah.',
      'Menentukan volume penjualan yang dibutuhkan untuk mencapai Target Laba (sebelum & sesudah pajak).',
      'Menghitung Margin of Safety (MoS) dan Tingkat Leverage Operasi (Degree of Operating Leverage / DOL).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="cvpBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="300" rx="16" fill="url(#cvpBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">GRAFIK COST-VOLUME-PROFIT &amp; TITIK IMPAS (BREAK-EVEN POINT)</text>
      
      <!-- Axis -->
      <line x1="80" y1="260" x2="820" y2="260" stroke="#64748b" stroke-width="2"/>
      <line x1="80" y1="260" x2="80" y2="70" stroke="#64748b" stroke-width="2"/>
      <text x="820" y="280" fill="#94a3b8" font-size="11" text-anchor="end">Volume Penjualan (Unit)</text>
      <text x="75" y="65" fill="#94a3b8" font-size="11" text-anchor="start">Rupiah (Rp)</text>

      <!-- Fixed Cost Line -->
      <line x1="80" y1="200" x2="800" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="810" y="204" fill="#fbbf24" font-size="10">Biaya Tetap (FC)</text>

      <!-- Total Cost Line -->
      <line x1="80" y1="200" x2="780" y2="90" stroke="#ef4444" stroke-width="2.5"/>
      <text x="790" y="95" fill="#f87171" font-size="10" font-weight="700">Total Biaya (TC = FC + VC)</text>

      <!-- Total Revenue Line -->
      <line x1="80" y1="260" x2="720" y2="80" stroke="#10b981" stroke-width="2.5"/>
      <text x="730" y="80" fill="#34d399" font-size="10" font-weight="700">Total Pendapatan (TR)</text>

      <!-- BEP Intersection point -->
      <circle cx="475" cy="149" r="6" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
      <line x1="475" y1="149" x2="475" y2="260" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="80" y1="149" x2="475" y2="149" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
      
      <rect x="420" y="110" width="110" height="28" rx="6" fill="#0284c7" fill-opacity="0.9"/>
      <text x="475" y="128" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle">BEP: TR = TC</text>

      <text x="475" y="278" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Q_bep (Unit)</text>
      <text x="40" y="153" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Rp_bep</text>

      <!-- Profit Area & Loss Area -->
      <text x="620" y="130" fill="#34d399" font-size="11" font-weight="700">AREA LABA</text>
      <text x="250" y="220" fill="#f87171" font-size="11" font-weight="700">AREA RUGI</text>
    </svg>`,
    caption: 'Gambar 2.1: Titik Impas (BEP) dan Struktur Pendapatan-Biaya.',
    sections: [
      {
        heading: 'Metode Pemisahan Biaya Campuran (High-Low Method)',
        paragraphs: [
          'Biaya campuran (mixed cost) memiliki elemen tetap dan variabel (Y = a + bX). Metode High-Low memisahkan komponen ini berdasarkan tingkat aktivitas tertinggi dan terendah dalam periode observasi.',
          'Tarif variabel per unit (b) = (Biaya Aktivitas Tertinggi - Biaya Aktivitas Terendah) / (Aktivitas Tertinggi - Aktivitas Terendah). Komponen biaya tetap (a) dihitung dengan mensubstitusikan nilai b ke salah satu titik ekstrim.'
        ]
      },
      {
        heading: 'Persamaan Fundamental CVP & Peran Contribution Margin',
        paragraphs: [
          'Contribution Margin (CM) adalah selisih antara Pendapatan Penjualan dengan Total Biaya Variabel. CM menunjukkan jumlah sisa pendapatan yang tersedia untuk menutup Biaya Tetap dan menghasilkan Laba Bersih Operasional.',
          'Rasio CM (CM Ratio) dihitung dari CM dibagi Penjualan. Setiap penambahan Rp 1 penjualan akan menambah laba sebesar rasio CM tersebut setelah titik impas terlampaui.'
        ]
      }
    ],
    formulas: [
      'Contribution Margin (CM) = Pendapatan Penjualan - Total Biaya Variabel',
      'CM Ratio = CM / Penjualan = CM per unit / Harga Jual per unit',
      'BEP (unit) = Total Biaya Tetap / CM per unit',
      'BEP (Rupiah) = Total Biaya Tetap / CM Ratio',
      'Penjualan untuk Target Laba = (Total Biaya Tetap + Target Laba Operasi) / CM per unit',
      'Margin of Safety (MoS) = Penjualan Aktual/Anggaran - Penjualan BEP',
      'Degree of Operating Leverage (DOL) = Total Contribution Margin / Laba Bersih Operasi'
    ]
  },
  {
    tm: 3,
    title: 'Variable Costing & Pelaporan Segmen',
    ref: 'Garrison Ch. 6 | Hansen & Mowen Ch. 7',
    intro: 'Pembahasan mendalam mengenai perbandingan Variable Costing (metode kontribusi untuk keputusan manajerial) versus Absorption Costing (metode kalkulasi biaya penuh untuk laporan eksternal). Memahami bagaimana perubahan volume produksi memengaruhi laba bersih.',
    objectives: [
      'Membandingkan perlakuan Biaya Overhead Pabrik Tetap (FMOH) pada Variable vs Absorption Costing.',
      'Melakukan rekonsiliasi selisih laba bersih antara kedua metode berdasarkan perubahan persediaan.',
      'Menyusun Laporan Laba Rugi Bersegmen dengan memisahkan Traceable vs Common Fixed Costs.',
      'Menganalisis Segment Margin untuk mengevaluasi kinerja divisi, produk, atau wilayah geografis.',
      'Menghindari kesalahan fatal alokasi biaya tetap bersama (common costs) ke segmen individual.'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="vcBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="280" rx="16" fill="url(#vcBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">VARIABLE COSTING VS ABSORPTION COSTING: PERLAKUAN BIAYA BOP TETAP</text>
      
      <!-- Absorption side -->
      <rect x="50" y="65" width="370" height="200" rx="10" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
      <text x="235" y="92" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">ABSORPTION COSTING (Kalkulasi Biaya Penuh)</text>
      <text x="235" y="112" fill="#94a3b8" font-size="9.5" text-anchor="middle">Standar Pelaporan Eksternal (SAK / PSAK)</text>
      <line x1="70" y1="124" x2="400" y2="124" stroke="#334155"/>
      <text x="80" y="148" fill="#cbd5e1" font-size="10">Biaya Produk: Bahan Baku + TKL + BOP Variabel + <tspan fill="#f59e0b" font-weight="700">BOP TETAP</tspan></text>
      <text x="80" y="172" fill="#cbd5e1" font-size="9.5">• BOP Tetap <tspan fill="#34d399">dikapitalisasi</tspan> ke persediaan akhir.</text>
      <text x="80" y="194" fill="#cbd5e1" font-size="9.5">• Jika Produksi &gt; Penjualan: Laba Absorption &gt; Variable</text>
      <text x="80" y="214" fill="#cbd5e1" font-size="9.5">  (karena sebagian BOP tetap tertahan di neraca).</text>
      <text x="80" y="240" fill="#f87171" font-size="9.5">⚠️ Risiko: Manajer tergoda memproduksi berlebih!</text>

      <!-- Variable side -->
      <rect x="480" y="65" width="370" height="200" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="665" y="92" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">VARIABLE COSTING (Kalkulasi Biaya Langsung)</text>
      <text x="665" y="112" fill="#94a3b8" font-size="9.5" text-anchor="middle">Khusus Pengambilan Keputusan Manajerial</text>
      <line x1="500" y1="124" x2="830" y2="124" stroke="#334155"/>
      <text x="510" y="148" fill="#cbd5e1" font-size="10">Biaya Produk: Hanya Bahan Baku + TKL + BOP Variabel</text>
      <text x="510" y="172" fill="#cbd5e1" font-size="9.5">• BOP Tetap diakui sebagai <tspan fill="#f59e0b" font-weight="700">BIAYA PERIODE</tspan> seutuhnya.</text>
      <text x="510" y="194" fill="#cbd5e1" font-size="9.5">• Laba tidak dipengaruhi oleh manipulasi volume produksi.</text>
      <text x="510" y="214" fill="#cbd5e1" font-size="9.5">• Format laporan berbasis Contribution Margin.</text>
      <text x="510" y="240" fill="#38bdf8" font-size="9.5">✅ Sangat ideal untuk CVP, penetapan harga, &amp; evaluasi.</text>
    </svg>`,
    caption: 'Gambar 3.1: Perbandingan Perlakuan BOP Tetap dan Dampak Laba.',
    sections: [
      {
        heading: 'Formula Rekonsiliasi Laba Bersih',
        paragraphs: [
          'Hubungan antara Laba Bersih Absorption dan Variable ditentukan oleh perubahan saldo persediaan (Unit Diproduksi vs Unit Terjual):',
          'Laba Operasi Absorption = Laba Operasi Variable + (BOP Tetap per Unit × Perubahan Unit Persediaan). Jika persediaan bertambah (Produksi > Penjualan), Absorption melaporkan laba lebih tinggi.'
        ]
      },
      {
        heading: 'Pelaporan Laba Rugi Segmen & Segment Margin',
        paragraphs: [
          'Segment Margin dihitung dari Contribution Margin segmen dikurangi Biaya Tetap yang Dapat Ditelusuri (Traceable Fixed Costs). Segment margin adalah ukuran terbaik untuk mengevaluasi profitabilitas jangka panjang suatu segmen.',
          'Biaya Tetap Bersama (Common Fixed Costs) tidak boleh dialokasikan secara sembarangan ke segmen karena biaya ini akan tetap ada meskipun segmen tersebut dihentikan.'
        ]
      }
    ],
    formulas: [
      'Unit Persediaan Berubah = Unit Diproduksi - Unit Terjual',
      'Selisih Laba = Laba Absorption - Laba Variable = Perubahan Persediaan × Tarif BOP Tetap per Unit',
      'Segment Margin = Segment Contribution Margin - Traceable Fixed Costs'
    ]
  },
  {
    tm: 4,
    title: 'Activity-Based Management (ABM) & Profitabilitas Pelanggan',
    ref: 'Garrison Ch. 7 | Hansen & Mowen Ch. 4 & 11',
    intro: 'Membahas pemanfaatan Activity-Based Costing (ABC) dalam pengelolaan aktivitas operasional untuk menciptakan nilai pelanggan dan mengeliminasi pemborosan melalui Activity-Based Management (ABM).',
    objectives: [
      'Mengklasifikasikan aktivitas ke dalam 4 hierarki: Unit-level, Batch-level, Product-sustaining, dan Facility-sustaining.',
      'Mengidentifikasi aktivitas bernilai tambah (Value-Added) vs tidak bernilai tambah (Non-Value-Added).',
      'Menghitung biaya dan profitabilitas pelanggan dengan Whale Curve (Kurva Paus).',
      'Mengaplikasikan Activity-Based Costing untuk menghindari subsidi silang biaya (product cross-subsidization).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="abmBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="260" rx="16" fill="url(#abmBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">HIERARKI AKTIVITAS ACTIVITY-BASED COSTING (ABC)</text>
      
      <g transform="translate(45, 65)">
        <rect x="0" y="0" width="180" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="90" y="28" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. UNIT-LEVEL</text>
        <text x="90" y="48" fill="#94a3b8" font-size="9" text-anchor="middle">Tiap unit produk</text>
        <line x1="15" y1="58" x2="165" y2="58" stroke="#334155"/>
        <text x="15" y="80" fill="#cbd5e1" font-size="9">• Listrik mesin pemotong</text>
        <text x="15" y="100" fill="#cbd5e1" font-size="9">• Jam kerja mesin</text>
        <text x="15" y="120" fill="#cbd5e1" font-size="9">• Tenaga kerja perakitan</text>
        <text x="15" y="150" fill="#38bdf8" font-size="8.5" font-style="italic">Driver: Jam Mesin / Unit</text>

        <rect x="210" y="0" width="180" height="175" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="300" y="28" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. BATCH-LEVEL</text>
        <text x="300" y="48" fill="#94a3b8" font-size="9" text-anchor="middle">Tiap kelompok/batch</text>
        <line x1="225" y1="58" x2="375" y2="58" stroke="#334155"/>
        <text x="225" y="80" fill="#cbd5e1" font-size="9">• Setup mesin cetak</text>
        <text x="225" y="100" fill="#cbd5e1" font-size="9">• Penanganan bahan (handling)</text>
        <text x="225" y="120" fill="#cbd5e1" font-size="9">• Pengujian sampel batch</text>
        <text x="225" y="150" fill="#34d399" font-size="8.5" font-style="italic">Driver: Jumlah Setup / Batch</text>

        <rect x="420" y="0" width="180" height="175" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="510" y="28" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">3. PRODUCT-LEVEL</text>
        <text x="510" y="48" fill="#94a3b8" font-size="9" text-anchor="middle">Spesifik jenis produk</text>
        <line x1="435" y1="58" x2="585" y2="58" stroke="#334155"/>
        <text x="435" y="80" fill="#cbd5e1" font-size="9">• Desain teknik produk</text>
        <text x="435" y="100" fill="#cbd5e1" font-size="9">• Sertifikasi &amp; uji lab</text>
        <text x="435" y="120" fill="#cbd5e1" font-size="9">• Promosi merek produk</text>
        <text x="435" y="150" fill="#fbbf24" font-size="8.5" font-style="italic">Driver: Jam Desain / Tipe</text>

        <rect x="630" y="0" width="180" height="175" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
        <text x="720" y="28" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">4. FACILITY-LEVEL</text>
        <text x="720" y="48" fill="#94a3b8" font-size="9" text-anchor="middle">Kapasitas pabrik umum</text>
        <line x1="645" y1="58" x2="795" y2="58" stroke="#334155"/>
        <text x="645" y="80" fill="#cbd5e1" font-size="9">• Keamanan &amp; satpam pabrik</text>
        <text x="645" y="100" fill="#cbd5e1" font-size="9">• Asuransi bangunan pabrik</text>
        <text x="645" y="120" fill="#cbd5e1" font-size="9">• Gaji manajer umum pabrik</text>
        <text x="645" y="150" fill="#f87171" font-size="8.5" font-style="italic">Driver: Luas Lantai / Fasilitas</text>
      </g>
    </svg>`,
    caption: 'Gambar 4.1: Empat Tingkat Hierarki Aktivitas Penggerak Biaya (ABC).',
    sections: [
      {
        heading: 'Konsep Whale Curve (Kurva Paus) dalam Analisis Pelanggan',
        paragraphs: [
          'Dalam analisis profitabilitas pelanggan berbasis ABC, sering ditemukan pola 20-80: 20% pelanggan paling menguntungkan menghasilkan hingga 150-200% dari total laba operasi perusahaan.',
          'Sebagian pelanggan (middle tier) menghasilkan laba impas, sementara 20% pelanggan terbawah justru mengikis laba secara masif karena sering meminta pesanan kustom dalam jumlah kecil, perubahan jadwal mendadak, dan dukungan purna jual berlebihan.'
        ]
      }
    ],
    formulas: [
      'Tarif Aktivitas (Activity Rate) = Total Estimasi Biaya Aktivitas / Total Kapasitas Cost Driver',
      'Overhead Dibebankan = Aktivitas Aktual × Tarif Aktivitas'
    ]
  },
  {
    tm: 5,
    title: 'Penganggaran Induk (Master Budget) & Perencanaan Laba',
    ref: 'Garrison Ch. 8 | Hansen & Mowen Ch. 8',
    intro: 'Master budget adalah rencana operasional kuantitatif yang mengoordinasikan seluruh aktivitas perusahaan dalam satu periode ke depan, mulai dari anggaran penjualan hingga proyeksi laporan keuangan.',
    objectives: [
      'Memahami fungsi anggaran: Perencanaan (Planning) dan Pengendalian (Control).',
      'Menyusun rangkaian anggaran operasional secara berurutan: Penjualan → Produksi → DM/DL/MOH.',
      'Menyusun Anggaran Kas (Cash Budget) dengan 4 komponen utama (Penerimaan, Pengeluaran, Defisit/Surplus, dan Pembiayaan).',
      'Menghasilkan Laporan Laba Rugi dan Neraca Proforma.'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="mbBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="250" rx="16" fill="url(#mbBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">ALUR SIKLUS PENGANGGARAN INDUK (MASTER BUDGET SEQUENCE)</text>
      
      <g transform="translate(40, 60)">
        <rect x="0" y="40" width="140" height="50" rx="8" fill="#0284c7" stroke="#38bdf8"/>
        <text x="70" y="65" fill="#ffffff" font-size="10.5" font-weight="800" text-anchor="middle">1. ANGGARAN</text>
        <text x="70" y="80" fill="#ffffff" font-size="10.5" font-weight="800" text-anchor="middle">PENJUALAN</text>

        <line x1="140" y1="65" x2="180" y2="65" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

        <rect x="180" y="40" width="140" height="50" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
        <text x="250" y="65" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">2. ANGGARAN</text>
        <text x="250" y="80" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">PRODUKSI</text>

        <!-- Branch to 3 manufacturing budgets -->
        <path d="M 320 65 L 350 65 L 350 15 L 380 15" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <path d="M 320 65 L 380 65" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <path d="M 320 65 L 350 65 L 350 115 L 380 115" fill="none" stroke="#64748b" stroke-width="1.5"/>

        <rect x="380" y="0" width="130" height="32" rx="6" fill="#1e293b" stroke="#38bdf8"/>
        <text x="445" y="20" fill="#e0f2fe" font-size="9.5" font-weight="700" text-anchor="middle">Bahan Baku (DM)</text>

        <rect x="380" y="50" width="130" height="32" rx="6" fill="#1e293b" stroke="#38bdf8"/>
        <text x="445" y="70" fill="#e0f2fe" font-size="9.5" font-weight="700" text-anchor="middle">Tenaga Kerja (DL)</text>

        <rect x="380" y="100" width="130" height="32" rx="6" fill="#1e293b" stroke="#38bdf8"/>
        <text x="445" y="120" fill="#e0f2fe" font-size="9.5" font-weight="700" text-anchor="middle">Overhead (MOH)</text>

        <!-- Convergence to cash budget -->
        <path d="M 510 15 L 540 15 L 540 65 L 570 65" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <path d="M 510 65 L 570 65" fill="none" stroke="#64748b" stroke-width="1.5"/>
        <path d="M 510 115 L 540 115 L 540 65 L 570 65" fill="none" stroke="#64748b" stroke-width="1.5"/>

        <rect x="570" y="38" width="120" height="54" rx="8" fill="#d97706" stroke="#fbbf24"/>
        <text x="630" y="62" fill="#ffffff" font-size="10.5" font-weight="800" text-anchor="middle">ANGGARAN</text>
        <text x="630" y="78" fill="#ffffff" font-size="10.5" font-weight="800" text-anchor="middle">KAS</text>

        <line x1="690" y1="65" x2="730" y2="65" stroke="#fbbf24" stroke-width="2"/>

        <rect x="730" y="30" width="100" height="70" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
        <text x="780" y="55" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">PROYEKSI</text>
        <text x="780" y="70" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Laba Rugi &amp;</text>
        <text x="780" y="85" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Neraca Akhir</text>
      </g>
    </svg>`,
    caption: 'Gambar 5.1: Keterkaitan Logis Modul-Modul Master Budget.',
    sections: [
      {
        heading: 'Formula Kunci Anggaran Produksi dan Pembelian Bahan',
        paragraphs: [
          'Kebutuhan Produksi = Target Penjualan (unit) + Target Persediaan Akhir Barang Jadi - Saldo Awal Barang Jadi.',
          'Kebutuhan Pembelian Bahan Baku = Kebutuhan Bahan Baku untuk Produksi + Target Persediaan Akhir Bahan Baku - Saldo Awal Bahan Baku.'
        ]
      }
    ],
    formulas: [
      'Unit Harus Diproduksi = Target Penjualan + Persediaan Akhir Barang Jadi - Persediaan Awal Barang Jadi',
      'Pembelian Bahan Baku (kg/unit) = Kebutuhan Produksi + Target Persediaan Akhir Bahan - Persediaan Awal Bahan',
      'Kas Akhir = Kas Awal + Total Penerimaan Kas - Total Pengeluaran Kas ± Pembiayaan'
    ]
  },
  {
    tm: 6,
    title: 'Anggaran Fleksibel, Biaya Standar & Analisis Varians',
    ref: 'Garrison Ch. 9 & 10 | Hansen & Mowen Ch. 9 & 10',
    intro: 'Evaluasi pengendalian operasional melalui perbandingan antara hasil aktual dan Anggaran Fleksibel (yang disesuaikan dengan tingkat aktivitas aktual), serta dekomposisi varians biaya standar.',
    objectives: [
      'Membedakan Static Budget (Anggaran Statis) dan Flexible Budget (Anggaran Fleksibel).',
      'Menghitung Activity Variance dan Revenue & Spending Variance.',
      'Menghitung Varians Bahan Baku: Materials Price Variance (MPV) dan Materials Quantity Variance (MQV).',
      'Menghitung Varians Tenaga Kerja: Labor Rate Variance (LRV) dan Labor Efficiency Variance (LEV).',
      'Menghitung Varians Overhead Pabrik: Spending Variance dan Volume Variance.'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="varBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="260" rx="16" fill="url(#varBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">MODEL 3 KOLOM ANALISIS VARIANS BIAYA STANDAR</text>
      
      <g transform="translate(60, 65)">
        <!-- Column 1 -->
        <rect x="0" y="0" width="220" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="28" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">KOLOM 1: AKTUAL</text>
        <text x="110" y="52" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">AQ × AP</text>
        <text x="110" y="74" fill="#94a3b8" font-size="9" text-anchor="middle">Kuantitas Aktual × Harga Aktual</text>

        <!-- Column 2 -->
        <rect x="280" y="0" width="220" height="90" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="390" y="28" fill="#fbbf24" font-size="11" font-weight="800" text-anchor="middle">KOLOM 2: HYBRID</text>
        <text x="390" y="52" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">AQ × SP</text>
        <text x="390" y="74" fill="#94a3b8" font-size="9" text-anchor="middle">Kuantitas Aktual × Harga Standar</text>

        <!-- Column 3 -->
        <rect x="560" y="0" width="220" height="90" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="670" y="28" fill="#34d399" font-size="11" font-weight="800" text-anchor="middle">KOLOM 3: STANDAR</text>
        <text x="670" y="52" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle">SQ × SP</text>
        <text x="670" y="74" fill="#94a3b8" font-size="9" text-anchor="middle">Kuantitas Standar × Harga Standar</text>

        <!-- Variances below -->
        <line x1="110" y1="90" x2="110" y2="135" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="390" y1="90" x2="390" y2="135" stroke="#fbbf24" stroke-width="1.5"/>
        <line x1="110" y1="135" x2="390" y2="135" stroke="#38bdf8" stroke-width="2"/>
        <rect x="185" y="145" width="130" height="35" rx="6" fill="#0284c7"/>
        <text x="250" y="167" fill="#ffffff" font-size="9.5" font-weight="700" text-anchor="middle">VARIANS HARGA (PRICE)</text>

        <line x1="670" y1="90" x2="670" y2="135" stroke="#34d399" stroke-width="1.5"/>
        <line x1="390" y1="135" x2="670" y2="135" stroke="#34d399" stroke-width="2"/>
        <rect x="465" y="145" width="130" height="35" rx="6" fill="#059669"/>
        <text x="530" y="167" fill="#ffffff" font-size="9.5" font-weight="700" text-anchor="middle">VARIANS KUANTITAS (QTY)</text>
      </g>
    </svg>`,
    caption: 'Gambar 6.1: Dekomposisi Varians Harga vs Varians Kuantitas / Efisiensi.',
    sections: [
      {
        heading: 'Klasifikasi Varians: Favorable (F) vs Unfavorable (U)',
        paragraphs: [
          'Varians bernilai Favorable (F) jika biaya aktual lebih kecil dari biaya standar atau pendapatan aktual lebih besar dari standar.',
          'Sebaliknya, Unfavorable (U) mengindikasikan pemborosan harga beli, inefisiensi jam kerja tenaga kerja, atau kapasitas menganggur pada overhead pabrik.'
        ]
      }
    ],
    formulas: [
      'Materials Price Variance (MPV) = AQ × (AP - SP)',
      'Materials Quantity Variance (MQV) = SP × (AQ - SQ)',
      'Labor Rate Variance (LRV) = AH × (AR - SR)',
      'Labor Efficiency Variance (LEV) = SR × (AH - SH)'
    ]
  },
  {
    tm: 7,
    title: 'Review Komprehensif Pra-UTS & Simulasi Kasus Manajerial',
    ref: 'Garrison Ch. 1-10 | Kompilasi TM 1-6',
    intro: 'Pemadatan seluruh konsep Pra-UTS: klasifikasi biaya, CVP komprehensif (multiple products & operating leverage), perbandingan laba absorption vs variable costing, serta penganggaran dan perhitungan varians terintegrasi.',
    objectives: [
      'Mengintegrasikan model CVP multi-produk menggunakan Sales Mix tertimbang.',
      'Menyelesaikan studi kasus rekonsiliasi laba absorption-variable saat produksi berfluktuasi.',
      'Melakukan analisis varians komprehensif dua arah (two-way variance analysis).',
      'Menyiapkan kesiapan mental dan ketelitian hitungan untuk Ujian Tengah Semester (UTS).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="revBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="220" rx="16" fill="url(#revBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#fbbf24" font-size="14" font-weight="700" text-anchor="middle">PETA INTEGRASI MATERI UJIAN TENGAH SEMESTER (UTS)</text>
      
      <g transform="translate(40, 65)">
        <rect x="0" y="0" width="185" height="120" rx="8" fill="#1e293b" stroke="#38bdf8"/>
        <text x="92" y="28" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. CVP &amp; BEP MULTI-PRODUK</text>
        <text x="15" y="55" fill="#cbd5e1" font-size="9">• Bauran Penjualan (Sales Mix)</text>
        <text x="15" y="75" fill="#cbd5e1" font-size="9">• Weighted-Average CM Ratio</text>
        <text x="15" y="95" fill="#cbd5e1" font-size="9">• Titik Impas Kombinasi</text>

        <rect x="210" y="0" width="185" height="120" rx="8" fill="#1e293b" stroke="#34d399"/>
        <text x="302" y="28" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">2. VARIABLE VS ABSORPTION</text>
        <text x="225" y="55" fill="#cbd5e1" font-size="9">• Inventoriable FMOH</text>
        <text x="225" y="75" fill="#cbd5e1" font-size="9">• Rekonsiliasi Perubahan Unit</text>
        <text x="225" y="95" fill="#cbd5e1" font-size="9">• Segment Margin Divisi</text>

        <rect x="420" y="0" width="185" height="120" rx="8" fill="#1e293b" stroke="#fbbf24"/>
        <text x="512" y="28" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3. MASTER BUDGETING</text>
        <text x="435" y="55" fill="#cbd5e1" font-size="9">• Anggaran Penjualan &amp; Produksi</text>
        <text x="435" y="75" fill="#cbd5e1" font-size="9">• Anggaran Kas Bulanan</text>
        <text x="435" y="95" fill="#cbd5e1" font-size="9">• Jadwal Pelunasan Utang</text>

        <rect x="630" y="0" width="185" height="120" rx="8" fill="#1e293b" stroke="#f87171"/>
        <text x="722" y="28" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">4. ANALISIS VARIANS</text>
        <text x="645" y="55" fill="#cbd5e1" font-size="9">• Price &amp; Quantity Variances</text>
        <text x="645" y="75" fill="#cbd5e1" font-size="9">• Labor Rate &amp; Efficiency</text>
        <text x="645" y="95" fill="#cbd5e1" font-size="9">• Spending &amp; Volume MOH</text>
      </g>
    </svg>`,
    caption: 'Gambar 7.1: Empat Pilar Soal Utama Ujian Tengah Semester Akuntansi Manajemen.',
    sections: [
      {
        heading: 'Checklist Pemantapan UTS',
        paragraphs: [
          'Pastikan tidak tertukar antara biaya manufaktur vs biaya periode saat menyusun absorption costing.',
          'Ingat bahwa saat menghitung Materials Price Variance (MPV), kuantitas yang digunakan adalah Kuantitas yang DIBELI (AQ Purchased), sedangkan pada Materials Quantity Variance (MQV), kuantitas yang dipakai adalah Kuantitas yang DIGUNAKAN (AQ Used).'
        ]
      }
    ]
  },
  {
    tm: 8,
    title: 'Desentralisasi, Evaluasi Kinerja (ROI, RI, EVA) & Balanced Scorecard',
    ref: 'Garrison Ch. 11 | Hansen & Mowen Ch. 12',
    intro: 'Membuka paruh kedua perkuliahan (Pra-UAS) dengan fokus pada pengendalian manajemen organisasi desentralisasi. Evaluasi pusat pertanggungjawaban investasi menggunakan metrik keuangan (ROI, Residual Income, EVA) dan integrasi Balanced Scorecard.',
    objectives: [
      'Mengidentifikasi 4 jenis pusat pertanggungjawaban: Biaya, Pendapatan, Laba, dan Investasi.',
      'Menghitung Return on Investment (ROI) dengan dekomposisi Margin × Asset Turnover.',
      'Menghitung Residual Income (RI) dan memahami keunggulannya dibanding ROI dalam menghindari sub-optimasi.',
      'Memahami konsep Economic Value Added (EVA) berbasis biaya modal tertimbang (WACC).',
      'Menguraikan 4 perspektif Balanced Scorecard (Keuangan, Pelanggan, Proses Internal, Pembelajaran & Pertumbuhan).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="bscBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="280" rx="16" fill="url(#bscBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">EMPAT PERSPEKTIF BALANCED SCORECARD (KAPLAN &amp; NORTON)</text>
      
      <g transform="translate(60, 60)">
        <rect x="230" y="0" width="320" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="390" y="24" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. PERSPEKTIF KEUANGAN (FINANCIAL)</text>
        <text x="390" y="38" fill="#cbd5e1" font-size="8.5" text-anchor="middle">"Bagaimana kita memandang pemegang saham?" (ROI, Laba, EVA)</text>

        <line x1="390" y1="48" x2="390" y2="68" stroke="#38bdf8" stroke-width="1.5"/>

        <rect x="230" y="68" width="320" height="48" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="390" y="92" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. PERSPEKTIF PELANGGAN (CUSTOMER)</text>
        <text x="390" y="106" fill="#cbd5e1" font-size="8.5" text-anchor="middle">"Bagaimana pandangan pelanggan?" (Retensi, Kepuasan, Pangsa Pasar)</text>

        <line x1="390" y1="116" x2="390" y2="136" stroke="#34d399" stroke-width="1.5"/>

        <rect x="230" y="136" width="320" height="48" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="390" y="160" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">3. PERSPEKTIF PROSES BISNIS INTERNAL</text>
        <text x="390" y="174" fill="#cbd5e1" font-size="8.5" text-anchor="middle">"Dalam proses apa kita harus unggul?" (Cycle Time, Yield, Cacat)</text>

        <line x1="390" y1="184" x2="390" y2="204" stroke="#fbbf24" stroke-width="1.5"/>

        <rect x="230" y="204" width="320" height="48" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
        <text x="390" y="228" fill="#a78bfa" font-size="11" font-weight="700" text-anchor="middle">4. PEMBELAJARAN &amp; PERTUMBUHAN (LEARNING &amp; GROWTH)</text>
        <text x="390" y="242" fill="#cbd5e1" font-size="8.5" text-anchor="middle">"Bagaimana kita terus berinovasi &amp; tumbuh?" (Pelatihan, IT, Budaya)</text>
      </g>
    </svg>`,
    caption: 'Gambar 8.1: Hubungan Kausal Sebab-Akibat pada Balanced Scorecard.',
    sections: [
      {
        heading: 'ROI vs Residual Income (RI)',
        paragraphs: [
          'ROI = Laba Bersih Operasi / Rata-Rata Aset Operasi = Margin × Asset Turnover.',
          'Kelemahan ROI: Manajer divisi cenderung menolak proyek investasi yang memiliki return di atas target perusahaan (misal 15%) jika return proyek tersebut di bawah ROI divisinya saat ini (misal 20%). Ini disebut fenomena sub-optimasi.',
          'Residual Income (RI) mengatasi masalah ini: RI = Laba Operasi - (Rata-rata Aset Operasi × Tingkat Pengembalian Minimum). Manajer akan menerima seluruh proyek selama menghasilkan RI positif.'
        ]
      }
    ],
    formulas: [
      'ROI = Laba Operasi / Rata-rata Aset Operasi = (Laba / Penjualan) × (Penjualan / Aset Operasi)',
      'Residual Income (RI) = Laba Bersih Operasi - (Rata-rata Aset Operasi × Required Rate of Return)',
      'EVA = NOPAT - (Total Capital Employed × WACC)'
    ]
  },
  {
    tm: 9,
    title: 'Transfer Pricing (Harga Transfer Antar Divisi)',
    ref: 'Garrison Ch. 11 Appendix | Hansen & Mowen Ch. 12',
    intro: 'Penentuan harga transfer barang/jasa antar divisi independen dalam satu entitas korporasi, dampaknya terhadap otonomi manajer, evaluasi laba divisi, dan perencanaan pajak penghasilan internasional.',
    objectives: [
      'Menetapkan batas bawah (floor/minimum) harga transfer dari perspektif divisi penjual.',
      'Menetapkan batas atas (ceiling/maximum) harga transfer dari perspektif divisi pembeli.',
      'Menganalisis 3 pendekatan transfer pricing: Market Price, Negotiated, dan Cost-Based.',
      'Memahami motivasi transfer pricing internasional untuk mengalihkan laba ke yurisdiksi bertarif pajak rendah.'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="tpBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="220" rx="16" fill="url(#tpBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">RANGE OF ACCEPTABLE TRANSFER PRICES (RENTANG HARGA TRANSFER)</text>
      
      <g transform="translate(80, 60)">
        <rect x="0" y="40" width="220" height="85" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
        <text x="110" y="65" fill="#f87171" font-size="11" font-weight="800" text-anchor="middle">DIVISI PENJUAL (MINIMUM)</text>
        <text x="110" y="85" fill="#ffffff" font-size="10" text-anchor="middle">Batas Bawah (Floor Price)</text>
        <text x="110" y="105" fill="#cbd5e1" font-size="9" text-anchor="middle">Biaya Variabel + Opportunity Cost</text>

        <rect x="520" y="40" width="220" height="85" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="630" y="65" fill="#34d399" font-size="11" font-weight="800" text-anchor="middle">DIVISI PEMBELI (MAKSIMUM)</text>
        <text x="630" y="85" fill="#ffffff" font-size="10" text-anchor="middle">Batas Atas (Ceiling Price)</text>
        <text x="630" y="105" fill="#cbd5e1" font-size="9" text-anchor="middle">Harga Pasar Luar (Outside Price)</text>

        <line x1="220" y1="82" x2="520" y2="82" stroke="#fbbf24" stroke-width="3"/>
        <circle cx="370" cy="82" r="7" fill="#fbbf24"/>
        <rect x="290" y="105" width="160" height="30" rx="6" fill="#0284c7"/>
        <text x="370" y="125" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">AREA KESEPAKATAN</text>
      </g>
    </svg>`,
    caption: 'Gambar 9.1: Penentuan Rentang Harga Transfer yang Saling Menguntungkan.',
    sections: [
      {
        heading: 'Kondisi Kapasitas Menganggur vs Kapasitas Penuh',
        paragraphs: [
          'Jika Divisi Penjual memiliki kapasitas menganggur (idle capacity), Opportunity Cost = Rp 0. Maka harga transfer minimum adalah sebesar Biaya Variabel per unit.',
          'Jika Divisi Penjual beroperasi pada kapasitas penuh, Opportunity Cost adalah Contribution Margin luar yang dikorbankan. Maka harga transfer minimum = Biaya Variabel + CM Luar = Harga Pasar Luar.'
        ]
      }
    ],
    formulas: [
      'Harga Transfer Minimum (Penjual) = Biaya Variabel per unit + Opportunity Cost per unit',
      'Opportunity Cost (Kapasitas Penuh) = Total CM yang Dikorbankan Penjualan Luar / Unit Ditransfer',
      'Harga Transfer Maksimum (Pembeli) = Harga Beli Pasar Eksternal'
    ]
  },
  {
    tm: 10,
    title: 'Analisis Informasi Diferensial & Pengambilan Keputusan Taktis',
    ref: 'Garrison Ch. 12 | Hansen & Mowen Ch. 13',
    intro: 'Pengambilan keputusan taktis jangka pendek menggunakan konsep biaya relevan (relevant costs) dan manfaat relevan. Memisahkan biaya yang dapat dihindari (avoidable) dari biaya tertanam (sunk costs).',
    objectives: [
      'Mengidentifikasi biaya relevan vs tidak relevan untuk keputusan taktis.',
      'Menganalisis keputusan Membuat atau Membeli (Make-or-Buy / Outsourcing).',
      'Mengevaluasi pesanan khusus (Special Order) di bawah harga normal.',
      'Memutuskan apakah akan mempertahankan atau menghentikan lini produk (Keep-or-Drop).',
      'Mengalokasikan sumber daya terbatas (Constrained Resource Allocation).',
      'Menganalisis keputusan Menjual Langsung atau Memproses Lebih Lanjut (Sell or Process Further).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="diffBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="240" rx="16" fill="url(#diffBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">POHON KEPUTUSAN TAKTIS (RELEVANT COSTING)</text>
      
      <g transform="translate(45, 60)">
        <rect x="0" y="15" width="180" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="90" y="40" fill="#38bdf8" font-size="10.5" font-weight="800" text-anchor="middle">MAKE OR BUY</text>
        <text x="90" y="58" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Biaya terhindarkan vs harga beli</text>

        <rect x="210" y="15" width="180" height="60" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="300" y="40" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">SPECIAL ORDER</text>
        <text x="300" y="58" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Harga &gt; Biaya Variabel tambahan</text>

        <rect x="420" y="15" width="180" height="60" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="510" y="40" fill="#fbbf24" font-size="10.5" font-weight="800" text-anchor="middle">KEEP OR DROP</text>
        <text x="510" y="58" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Segment Margin &gt; 0 ? Pertahankan</text>

        <rect x="630" y="15" width="180" height="60" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
        <text x="720" y="40" fill="#f87171" font-size="10.5" font-weight="800" text-anchor="middle">SELL OR PROCESS FURTHER</text>
        <text x="720" y="58" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Pendapatan tambahan &gt; Biaya lanjutan</text>
      </g>
    </svg>`,
    caption: 'Gambar 10.1: Empat Tipe Keputusan Taktis Berbasis Biaya Relevan.',
    sections: [
      {
        heading: 'Prinsip Kunci Biaya Relevan',
        paragraphs: [
          'Biaya relevan harus memenuhi dua kriteria: (1) Biaya tersebut akan terjadi di masa depan, dan (2) Berbeda di antara alternatif keputusan yang dihadapi.',
          'Sunk Cost (biaya historis yang sudah terjadi) dan Biaya Masa Depan yang tidak berbeda antar alternatif SELALU tidak relevan dan harus diabaikan.'
        ]
      }
    ],
    formulas: [
      'Keuntungan Keputusan Khusus = Tambahan Pendapatan Diferensial - Tambahan Biaya Diferensial',
      'CM per Unit Kendala = CM per unit / Jam Mesin (atau unit sumber daya terbatas) yang Dibutuhkan'
    ]
  },
  {
    tm: 11,
    title: 'Penetapan Harga (Pricing Decisions) & Manajemen Biaya Siklus Hidup',
    ref: 'Garrison Ch. 12 Appendix | Hansen & Mowen Ch. 14',
    intro: 'Strategi penentuan harga jual produk berdasarkan kekuatan pasar dan struktur biaya internal. Meliputi Target Costing, Cost-Plus Pricing, dan Life-Cycle Costing.',
    objectives: [
      'Membedakan penetapan harga berbasis pasar (Market-Based Pricing) vs biaya (Cost-Based Pricing).',
      'Menerapkan metodologi Target Costing pada tahap desain produk.',
      'Menghitung markup persentase pada Cost-Plus Pricing (Absorption vs Variable approach).',
      'Memahami Life-Cycle Costing dan Whole-Life Costing dari perspektif produsen dan konsumen.'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="priceBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="220" rx="16" fill="url(#priceBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">TARGET COSTING: REVERSE ENGINEERING PRICING MODEL</text>
      
      <g transform="translate(80, 65)">
        <rect x="0" y="30" width="200" height="65" rx="8" fill="#0284c7"/>
        <text x="100" y="55" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">HARGA PASAR ANTISIPASIAN</text>
        <text x="100" y="75" fill="#e0f2fe" font-size="9" text-anchor="middle">Ditetapkan oleh daya beli konsumen</text>

        <text x="240" y="70" fill="#f59e0b" font-size="24" font-weight="900" text-anchor="middle">−</text>

        <rect x="280" y="30" width="180" height="65" rx="8" fill="#d97706"/>
        <text x="370" y="55" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">TARGET LABA YANG DIINGINKAN</text>
        <text x="370" y="75" fill="#fef3c7" font-size="9" text-anchor="middle">Return on Investment (ROI)</text>

        <text x="500" y="70" fill="#10b981" font-size="24" font-weight="900" text-anchor="middle">=</text>

        <rect x="540" y="30" width="190" height="65" rx="8" fill="#059669"/>
        <text x="635" y="55" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">TARGET COST (BIAYA TARGET)</text>
        <text x="635" y="75" fill="#d1fae5" font-size="9" text-anchor="middle">Batas maksimum biaya produk</text>
      </g>
    </svg>`,
    caption: 'Gambar 11.1: Logika Penetapan Biaya Target (Target Costing).',
    sections: [
      {
        heading: 'Value Engineering dalam Menutup Biaya Target',
        paragraphs: [
          'Jika estimasi biaya produk awal melebihi Target Cost, perusahaan menggunakan Value Engineering (rekayasa nilai) selama fase desain untuk memangkas biaya tanpa menurunkan fungsionalitas dan kualitas yang dihargai konsumen.'
        ]
      }
    ],
    formulas: [
      'Target Cost = Antisipasi Harga Jual - Target Laba',
      'Harga Jual Cost-Plus = Biaya Dasar + (Biaya Dasar × Markup %)',
      'Markup % (Absorption) = (Target Laba + Biaya Penjualan & Admin) / Total Biaya Manufaktur'
    ]
  },
  {
    tm: 12,
    title: 'Keputusan Investasi Modal (Capital Budgeting)',
    ref: 'Garrison Ch. 13 | Hansen & Mowen Ch. 15',
    intro: 'Evaluasi pengeluaran modal jangka panjang untuk aset tetap dan proyek ekspansi. Meliputi metode non-diskonto (Payback Period, ARR) dan metode diskonto arus kas (Net Present Value / NPV, Internal Rate of Return / IRR).',
    objectives: [
      'Membedakan proyek independen vs proyek saling meniadakan (mutually exclusive).',
      'Menghitung Payback Period dan Accounting Rate of Return (ARR).',
      'Menghitung Net Present Value (NPV) menggunakan Time Value of Money.',
      'Menentukan Internal Rate of Return (IRR) dan Profitability Index (PI).',
      'Menganalisis dampak pajak dan penyusutan (tax shield) pada arus kas modal.'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="cbBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="220" rx="16" fill="url(#cbBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">SPEKTRUM METODE EVALUASI CAPITAL BUDGETING</text>
      
      <g transform="translate(60, 65)">
        <rect x="0" y="0" width="370" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="185" y="28" fill="#fbbf24" font-size="11" font-weight="800" text-anchor="middle">METODE NON-DISKONTO (SEDERHANA)</text>
        <line x1="20" y1="38" x2="350" y2="38" stroke="#334155"/>
        <text x="30" y="62" fill="#cbd5e1" font-size="9.5">1. <tspan font-weight="700">Payback Period:</tspan> Mengukur likuiditas &amp; kecepatan modal kembali.</text>
        <text x="30" y="80" fill="#94a3b8" font-size="8.5">   ⚠️ Mengabaikan TVM dan arus kas setelah payback.</text>
        <text x="30" y="102" fill="#cbd5e1" font-size="9.5">2. <tspan font-weight="700">ARR (Accounting Rate of Return):</tspan> Berbasis laba akrual buku.</text>

        <rect x="410" y="0" width="370" height="120" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="595" y="28" fill="#34d399" font-size="11" font-weight="800" text-anchor="middle">METODE DISKONTO (DISCOUNTED CASH FLOW / DCF)</text>
        <line x1="430" y1="38" x2="760" y2="38" stroke="#334155"/>
        <text x="430" y="62" fill="#cbd5e1" font-size="9.5">1. <tspan font-weight="700">NPV (Net Present Value):</tspan> Standar baku terbaik (Kriteria: NPV ≥ 0).</text>
        <text x="430" y="84" fill="#cbd5e1" font-size="9.5">2. <tspan font-weight="700">IRR (Internal Rate of Return):</tspan> Tingkat diskonto yang membuat NPV = 0.</text>
        <text x="430" y="106" fill="#cbd5e1" font-size="9.5">3. <tspan font-weight="700">Profitability Index (PI):</tspan> PV Arus Masuk / Investasi Awal.</text>
      </g>
    </svg>`,
    caption: 'Gambar 12.1: Klasifikasi Metode Evaluasi Proyek Investasi Modal.',
    sections: [
      {
        heading: 'Aturan Keputusan NPV dan Arus Kas Relevan',
        paragraphs: [
          'Arus kas yang relevan mencakup: (1) Biaya perolehan investasi awal dan modal kerja bersih, (2) Penghematan biaya operasional atau arus kas masuk setelah pajak tahunan, (3) Manfaat perisai pajak depresiasi (Depreciation Tax Shield = Beban Depresiasi × Tarif Pajak), dan (4) Nilai sisa pelepasan aset di akhir umur proyek.'
        ]
      }
    ],
    formulas: [
      'Payback Period (Arus Kas Rata) = Investasi Awal / Arus Kas Masuk Bersih Tahunan',
      'NPV = ∑ [CF_t / (1 + r)^t] - Investasi Awal',
      'Profitability Index (PI) = Nilai Sekarang Arus Kas Masa Depan / Investasi Awal'
    ]
  },
  {
    tm: 13,
    title: 'Operasi Ramping (Lean Operations), JIT, TOC, & Biaya Kualitas',
    ref: 'Garrison Ch. 1 & 14 | Hansen & Mowen Ch. 16',
    intro: 'Strategi manufaktur modern: Just-in-Time (JIT), sistem tarik (pull system), Theory of Constraints (TOC) oleh Goldratt, serta pelaporan Cost of Quality (COQ).',
    objectives: [
      'Memahami filosofi Lean Manufacturing dan eliminasi 7 pemborosan (Muda).',
      'Menjelaskan mekanisme Just-In-Time (JIT) dan akuntansi Backflush Costing.',
      'Mengidentifikasi dan mengoptimalkan faktor kendala operasi dengan Theory of Constraints (TOC).',
      'Mengklasifikasikan 4 kategori Biaya Kualitas (Pencegahan, Penilaian, Kegagalan Internal, Kegagalan Eksternal).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="leanBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="220" rx="16" fill="url(#leanBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">MATRIKS 4 KATEGORI BIAYA KUALITAS (COST OF QUALITY / COQ)</text>
      
      <g transform="translate(60, 60)">
        <rect x="0" y="0" width="370" height="60" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="185" y="24" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">1. BIAYA PENCEGAHAN (PREVENTION)</text>
        <text x="185" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Pelatihan kualitas, desain produk anti-salah (Poka-Yoke)</text>

        <rect x="410" y="0" width="370" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="595" y="24" fill="#38bdf8" font-size="10.5" font-weight="800" text-anchor="middle">2. BIAYA PENILAIAN (APPRAISAL / INSPECTION)</text>
        <text x="595" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Pengujian bahan baku, inspeksi lini, kalibrasi alat ukur</text>

        <rect x="0" y="75" width="370" height="60" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="185" y="99" fill="#fbbf24" font-size="10.5" font-weight="800" text-anchor="middle">3. KEGAGALAN INTERNAL (INTERNAL FAILURE)</text>
        <text x="185" y="119" fill="#cbd5e1" font-size="9" text-anchor="middle">Barang cacat sebelum kirim: Rework, Scrap, Downtime mesin</text>

        <rect x="410" y="75" width="370" height="60" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
        <text x="595" y="99" fill="#f87171" font-size="10.5" font-weight="800" text-anchor="middle">4. KEGAGALAN EKSTERNAL (EXTERNAL FAILURE)</text>
        <text x="595" y="119" fill="#cbd5e1" font-size="9" text-anchor="middle">Klaim garansi, penarikan produk (recall), tuntutan hukum hukum</text>
      </g>
    </svg>`,
    caption: 'Gambar 13.1: Empat Kategori Biaya Kualitas (Biaya Kesesuaian vs Biaya Ketidaksesuaian).',
    sections: [
      {
        heading: 'Keseimbangan Biaya Kualitas',
        paragraphs: [
          'Investasi pada Biaya Pencegahan dan Penilaian (Biaya Kesesuaian / Conformance Costs) akan menekan secara drastis timbulnya Biaya Kegagalan Internal dan Eksternal (Non-conformance Costs) yang jauh lebih merusak reputasi perusahaan.'
        ]
      }
    ]
  },
  {
    tm: 14,
    title: 'Akuntansi Manajemen Lingkungan (EMA), ESG & Review Komprehensif UAS',
    ref: 'Garrison Ch. 15 | Hansen & Mowen Ch. 17 | Silabus UNAIR',
    intro: 'Topik kontemporer akuntansi manajemen: Environmental Management Accounting (EMA), integrasi metrik ESG, akuntansi karbon, serta review komprehensif seluruh materi perkuliahan persiapan UAS.',
    objectives: [
      'Membedakan Monetary Environmental Management Accounting (M-EMA) dan Physical EMA (P-EMA).',
      'Mengidentifikasi biaya lingkungan tersembunyi dalam akun overhead pabrik.',
      'Memahami keterkaitan akuntansi manajemen dengan pelaporan keberlanjutan (GRI, ISSB S1 & S2).',
      'Menyelesaikan latihan kasus terintegrasi persiapan Ujian Akhir Semester (UAS).'
    ],
    svg: `<svg class="course-diagram-svg" viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,sans-serif">
      <defs>
        <linearGradient id="emaBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
      </defs>
      <rect x="10" y="10" width="880" height="220" rx="16" fill="url(#emaBg)" stroke="#1e293b" stroke-width="1.5"/>
      <text x="450" y="38" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">DUALISME AKUNTANSI MANAJEMEN LINGKUNGAN (EMA - UNDSD FRAMEWORK)</text>
      
      <g transform="translate(60, 65)">
        <rect x="0" y="0" width="370" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="185" y="28" fill="#34d399" font-size="11" font-weight="800" text-anchor="middle">PHYSICAL EMA (P-EMA)</text>
        <line x1="20" y1="38" x2="350" y2="38" stroke="#334155"/>
        <text x="30" y="62" fill="#cbd5e1" font-size="9.5">• Satuan: Kilogram, kWh, Liter, Ton Emisi CO2e.</text>
        <text x="30" y="82" fill="#cbd5e1" font-size="9.5">• Pelacakan Material Flow: Input bahan vs Output produk &amp; limbah.</text>
        <text x="30" y="102" fill="#cbd5e1" font-size="9.5">• Mencegah kebocoran energi dan pemborosan sumber daya fisik.</text>

        <rect x="410" y="0" width="370" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="595" y="28" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">MONETARY EMA (M-EMA)</text>
        <line x1="430" y1="38" x2="760" y2="38" stroke="#334155"/>
        <text x="430" y="62" fill="#cbd5e1" font-size="9.5">• Satuan: Moneter (Rupiah / Dolar).</text>
        <text x="430" y="82" fill="#cbd5e1" font-size="9.5">• Biaya pengolahan limbah B3, retribusi amdal, sanksi polusi.</text>
        <text x="430" y="102" fill="#cbd5e1" font-size="9.5">• Menghitung penghematan biaya dari inisiatif daur ulang &amp; sirkular.</text>
      </g>
    </svg>`,
    caption: 'Gambar 14.1: Dimensi Fisik vs Moneter Akuntansi Manajemen Lingkungan.',
    sections: [
      {
        heading: 'Checklist Pemantapan UAS Akuntansi Manajemen',
        paragraphs: [
          'UAS berfokus pada: Evaluasi kinerja divisi (ROI, RI, EVA), Transfer Pricing, Keputusan Taktis Diferensial (Make/Buy, Special Order, Keep/Drop), Target Costing, Capital Budgeting (NPV, IRR), serta Biaya Kualitas & EMA.',
          'Kuasai rumus dan pertimbangan manajerial: tidak hanya menghitung angka, tetapi menjelaskan rekomendasi strategis bagi direksi.'
        ]
      }
    ]
  }
];

// Generate individual module files
TM_MODULES.forEach((mod) => {
  const blocks = [];
  if (mod.svg) {
    blocks.push({
      kind: 'figure',
      title: mod.title,
      svg: mod.svg,
      caption: mod.caption || ''
    });
  }

  mod.sections.forEach((sec) => {
    blocks.push({ kind: 'h2', text: sec.heading });
    sec.paragraphs.forEach((p) => {
      blocks.push({ kind: 'p', text: p });
    });
    if (sec.table) {
      blocks.push({
        kind: 'table',
        caption: sec.table.caption,
        headers: sec.table.headers,
        rows: sec.table.rows
      });
    }
  });

  if (mod.formulas && mod.formulas.length > 0) {
    blocks.push({ kind: 'h3', text: 'Rumus & Formula Kunci' });
    blocks.push({
      kind: 'callout',
      variant: 'key',
      title: 'Formula Penting',
      text: mod.formulas.map((f) => '• ' + f).join('\n')
    });
  }

  blocks.push({
    kind: 'callout',
    variant: 'tip',
    title: 'Kunci Penguasaan Materi',
    text: 'Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis.'
  });

  const code = `// src/data/akmen/modules/tm${mod.tm}.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM ${mod.tm}
import type { Reading } from '../../../types';

export const TM${mod.tm}_READING: Reading = {
  tm: ${mod.tm},
  title: ${JSON.stringify(mod.title)},
  ref: ${JSON.stringify(mod.ref)},
  intro: ${JSON.stringify(mod.intro)},
  objectives: ${JSON.stringify(mod.objectives, null, 2)},
  blocks: ${JSON.stringify(blocks, null, 2)}
};
`;

  fs.writeFileSync(path.join(outDir, `tm${mod.tm}.ts`), code, 'utf8');
  console.log(`Generated tm${mod.tm}.ts`);
});

// Generate main akmenData.ts
const mainDataCode = `// src/data/akmen/akmenData.ts
// Rangkuman KOMPREHENSIF Akuntansi Manajemen (AKM202) - FEB UNAIR
// Sumber: Garrison, Noreen, Brewer (Managerial Accounting 17e/18e),
//         Hansen & Mowen (Cornerstones of Managerial Accounting 8e),
//         Silabus Resmi Departemen Akuntansi FEB Universitas Airlangga.
import type { Reading } from '../../types';
${TM_MODULES.map((m) => `import { TM${m.tm}_READING } from './modules/tm${m.tm}';`).join('\n')}

export const AKM202_READINGS: Record<number, Reading> = {
${TM_MODULES.map((m) => `  ${m.tm}: TM${m.tm}_READING,`).join('\n')}
};

export const AKM202_REVIEW_READINGS: Record<string, Reading> = {
  uts: TM7_READING,
  uas: TM14_READING,
};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/akmen/akmenData.ts'), mainDataCode, 'utf8');
console.log('Generated akmenData.ts successfully!');

