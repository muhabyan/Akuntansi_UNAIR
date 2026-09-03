import type { Reading } from '../../../types';
import { CASE_PLATFORM_ECOSYSTEM_NETWORK } from '../manstratPracticeCases';

const SVG_PLATFORM_ECOSYSTEM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="prodGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="platGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="consGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns11)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">EKOSISTEM BISNIS PLATFORM DUA SISI &amp; EFEK JARINGAN (NETWORK EFFECTS)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PLATFORM DYNAMICS</text>

  <!-- Left: PRODUCER SIDE -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="245" height="215" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="245" height="30" rx="12" fill="url(#prodGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="122" y="20" fill="#38bdf8" font-size="10.5" font-weight="800" text-anchor="middle">SISI PRODUSEN / PENJUAL</text>
    <text class="svg-text" x="12" y="48" fill="#cbd5e1" font-size="8">• Merchant Toko, Driver Ojol, Developer App</text>
    <text class="svg-text" x="12" y="66" fill="#cbd5e1" font-size="8">• Menyediakan barang, jasa, konten, &amp; aset</text>
    <text class="svg-text" x="12" y="84" fill="#cbd5e1" font-size="8">• Tertarik masuk jika jumlah pembeli masif</text>
    <text class="svg-text" x="12" y="102" fill="#cbd5e1" font-size="8">• Menanggung komisi / biaya transaksi platform</text>
    <rect class="svg-subcard" x="12" y="140" width="221" height="50" rx="6" fill="#1e293b"/>
    <text class="text-accent-blue" x="122" y="158" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Same-Side Effect: Kompetisi</text>
    <text class="svg-muted" x="122" y="174" fill="#94a3b8" font-size="7.5" text-anchor="middle">(Banyak penjual = persaingan harga ketat)</text>
  </g>

  <!-- Bilateral Cross-Side Network Effect Arrows -->
  <polygon points="300,165 315,160 300,155" fill="#38bdf8"/>
  <polygon points="315,195 300,200 315,205" fill="#34d399"/>

  <!-- Center: PLATFORM ENGINE -->
  <g transform="translate(315, 75)">
    <rect class="svg-card" x="0" y="0" width="270" height="215" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="270" height="30" rx="12" fill="url(#platGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="135" y="20" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">PLATFORM CORE &amp; GOVERNANCE</text>
    <circle cx="135" cy="85" r="32" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="135" y="82" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle">MATCHING</text>
    <text class="svg-text" x="135" y="94" fill="#cbd5e1" font-size="7.5" text-anchor="middle">ALGORITHM</text>
    <text class="svg-text" x="12" y="135" fill="#cbd5e1" font-size="8">• Fasilitator transaksi &amp; penjamin kepercayaan (Escrow)</text>
    <text class="svg-text" x="12" y="152" fill="#cbd5e1" font-size="8">• Menetapkan aturan main, subsidi sisi sensitif, &amp; rating</text>
    <text class="svg-text" x="12" y="169" fill="#cbd5e1" font-size="8">• Biaya marjinal mendekati nol (Zero Marginal Cost)</text>
    <rect class="svg-badge-green" x="12" y="182" width="246" height="20" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="135" y="196" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Efek Flywheel: Winner-Take-All Market</text>
  </g>

  <!-- Bilateral Cross-Side Network Effect Arrows -->
  <polygon points="605,160 590,165 605,170" fill="#34d399"/>
  <polygon points="590,195 605,200 590,205" fill="#fbbf24"/>

  <!-- Right: CONSUMER SIDE -->
  <g transform="translate(620, 75)">
    <rect class="svg-card" x="0" y="0" width="245" height="215" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="245" height="30" rx="12" fill="url(#consGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="122" y="20" fill="#fbbf24" font-size="10.5" font-weight="800" text-anchor="middle">SISI KONSUMEN / PEMBELI</text>
    <text class="svg-text" x="12" y="48" fill="#cbd5e1" font-size="8">• Pembeli Online, Penumpang, Pemakai Aplikasi</text>
    <text class="svg-text" x="12" y="66" fill="#cbd5e1" font-size="8">• Menikmati variasi produk melimpah &amp; harga hemat</text>
    <text class="svg-text" x="12" y="84" fill="#cbd5e1" font-size="8">• Sering disubsidi promosi (Gratis Ongkir / Diskon)</text>
    <text class="svg-text" x="12" y="102" fill="#cbd5e1" font-size="8">• Terikat oleh kemudahan ekosistem (Lock-in effect)</text>
    <rect class="svg-subcard" x="12" y="140" width="221" height="50" rx="6" fill="#1e293b"/>
    <text class="text-accent-amber" x="122" y="158" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Cross-Side Effect: Nilai Melompat</text>
    <text class="svg-muted" x="122" y="174" fill="#94a3b8" font-size="7.5" text-anchor="middle">(Banyak pembeli = lebih banyak penjual masuk)</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Efek jaringan silang (Cross-Side Network Effect) menciptakan lingkaran pertumbuhan mandiri yang sulit ditumbangkan oleh bisnis pipa tradisional.</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Studi Kasus Strategik I: Model Bisnis Platform & Ekosistem Digital (TheoryBridge.com & Alibaba Group)',
  ref: 'Parker, Van Alstyne, & Choudary (Platform Revolution) | David S. Evans Multi-Sided Platforms | Rantai Pasok Linear vs Platform',
  intro: 'TM 11 menyajikan studi kasus strategis komprehensif pertama: pergeseran radikal dari bisnis pipa linier (Linear Pipeline Business) menuju Model Bisnis Platform (Platform Business Models): dinamika pasar bersisi banyak (Two-Sided / Multi-Sided Markets), efek jaringan langsung dan tidak langsung (Direct vs Indirect Network Effects), mengatasi masalah peluncuran awal (Chicken-and-Egg Launch Strategy), arsitektur pencocokan (Matchmaking Algorithm), tata kelola ekosistem (Ecosystem Governance), serta strategi monetisasi (Take Rate, Iklan, Layanan Finansial Terintegrasi).',
  objectives: [
    'Membedakan logika penciptaan nilai model pipa linier konvensional vs model platform ekosistem digital.',
    'Menganalisis interaksi Efek Jaringan Langsung (Same-Side) dan Efek Jaringan Tidak Langsung (Cross-Side).',
    'Menyusun taktik pemecahan masalah ayam-dan-telur (Chicken-and-Egg Problem) pada fase peluncuran platform.',
    'Mengevaluasi desain tata kelola platform digital dalam mencegah kegagalan pasar (Market Failure) dan kecurangan.',
    'Menganalisis fenomena persaingan Winner-Take-All dan faktor penentu Multi-Homing vs Single-Homing.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 11.1: Arsitektur Model Bisnis Platform Dua Sisi (Multi-Sided Platform) dan Efek Jaringan Timbal-Balik.',
      svg: SVG_PLATFORM_ECOSYSTEM
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 11'
    },
    {
      kind: 'table',
      headers: ['Dimensi Bisnis', 'Model Bisnis Pipa Linier (Tradisional)', 'Model Bisnis Platform (Modern)'],
      rows: [
        ['Arsitektur Rantai Nilai', 'Linier: Bahan Baku -> Pabrikasi -> Distribusi -> Konsumen.', 'Matriks / Ekosistem: Menghubungkan partisipan produsen dan konsumen secara simultan.'],
        ['Basis Aset Utama', 'Aset fisik berwujud (pabrik, armada truk, gerai toko ritel).', 'Aset tak berwujud (perangkat lunak, algoritma, database, dan komunitas pengguna).'],
        ['Fokus Optimalisasi', 'Memaksimalkan nilai seumur hidup pelanggan (Customer Lifetime Value) secara linier.', 'Memaksimalkan total nilai ekosistem dan frekuensi interaksi transaksi positif.'],
        ['Struktur Biaya Marginal', 'Biaya marginal penambahan unit produk fisik signifikan.', 'Biaya marginal penambahan pengguna baru mendekati nol (Zero Marginal Cost).'],
        ['Hambatan Masuk', 'Skala ekonomis penawaran (Supply-Side Economies of Scale).', 'Skala ekonomis permintaan / Efek Jaringan (Demand-Side Network Economies).']
      ],
      caption: 'Tabel 11.0: Perbandingan bisnis pipa linier vs bisnis platform digital.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 8 Taktik Peluncuran Mengatasi Masalah Ayam-dan-Telur (Chicken-and-Egg)'
    },
    {
      kind: 'table',
      headers: ['Taktik Peluncuran Platform', 'Mekanisme Eksekusi Taktik', 'Contoh Sukses Dunia Nyata'],
      rows: [
        ['1. Follow-the-Rabbit (Tirani Awal)', 'Memulai sebagai bisnis pipa linier yang sukses, lalu membuka infrastrukturnya menjadi platform.', 'Amazon memulai sebagai toko buku online linier, lalu membuka marketplace pihak ketiga.'],
        ['2. Piggyback Strategy (Mendompleng)', 'Mendompleng basis pengguna dari platform raksasa lain yang sudah ada sebelumnya.', 'Airbnb mendompleng daftar iklan baris Craigslist untuk menarik penyewa awal.'],
        ['3. Seeding Strategy (Menyemai Konten)', 'Platform menciptakan sendiri produk awal berkualitas tinggi agar konsumen mau berkunjung.', 'Apple membuat sendiri aplikasi iPhone pertama sebelum membuka App Store untuk developer luar.'],
        ['4. Marquee Strategy (Menggaet Bintang)', 'Memberikan insentif khusus kepada produsen terkenal agar bersedia bergabung lebih dulu.', 'Konsol game mengontrak eksklusif pengembang game blockbuster legendaris.'],
        ['5. Single-Side Utility (Alat Dulu, Jaringan Kemudian)', 'Menyediakan aplikasi yang sangat berguna bagi satu orang sendirian (Stand-Alone Tool).', 'Instagram awalnya hanya aplikasi filter foto offline, baru kemudian menambahkan feed media sosial.']
      ],
      caption: 'Tabel 11.1: Taktik pemecahan masalah ayam-dan-telur platform menurut Parker et al.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Mencegah Disintermediasi Platform (Platform Disintermediation)',
      prompt: 'Sebuah platform pencari jasa asisten rumah tangga (ART) mempertemukan majikan dengan ART. Setelah pertemuan pertama, majikan dan ART bertukar nomor telepon dan sepakat bertransaksi langsung di luar platform untuk menghindari biaya komisi platform 15%. Masalah strategis apa ini dan bagaimana solusinya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Identifikasi Masalah**: Mengalami fenomena **Disintermediasi (Platform Leakage / Disintermediation)**, di mana pengguna menggunakan platform hanya untuk berkenalan, lalu bertransaksi di luar ekosistem.',
            '**Solusi Strategis Tata Kelola**:\n1. *Menurunkan Take-Rate*: Memangkas komisi dari 15% menjadi 5% sehingga tidak sebanding dengan risiko bertransaksi di luar.\n2. *Memberikan Nilai Tambah Eksklusif Dalam Platform*: Memberikan asuransi kehilangan barang gratis, garansi penggantian ART instan jika tidak cocok, dan pencatatan slip gaji resmi yang hanya berlaku jika transaksi diproses di dalam aplikasi.\n3. *Sistem Escrow & Rating*: Majikan hanya mau membayar jika ada jaminan perlindungan dana dari platform.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 11'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Dinamika Efek Jaringan Platform', 'Pembedaan efek langsung (same-side) vs efek tidak langsung (cross-side).', 'Mampu menganalisis kekuatan putaran efek jaringan platform.'],
        ['2', 'Strategi Peluncuran & Subsidi', 'Penetapan sisi yang disubsidi vs sisi yang dimonetisasi.', 'Mampu merancang strategi penetrasi pasar platform dua sisi.'],
        ['3', 'Tata Kelola & Multi-Homing', 'Pencegahan disintermediasi, kurasi konten, dan switching barriers.', 'Mampu mengevaluasi pertahanan platform dari serbuan pesaing.']
      ],
      caption: 'Tabel 11.2: Peta penguasaan submateri TM 11 Manajemen Strategik.'
    },
    CASE_PLATFORM_ECOSYSTEM_NETWORK,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Platform Mengalahkan Produk**: Perusahaan yang membangun platform ekosistem hampir selalu mengalahkan produsen produk linier karena biaya marginal platform mendekati nol.',
        '**Tata Kelola Adalah Kunci Kelangsungan**: Platform tanpa kurasi dan penegakan aturan yang tegas akan runtuh akibat invasi spam, penipuan, dan produk palsu (*Lemon Market*).',
        '**Hambat Multi-Homing**: Agar memenangkan persaingan platform, ciptakan insentif loyalitas yang membuat pengguna malas memasang dua aplikasi serupa (*multi-homing costs*).'
      ]
    }
  ]
};
