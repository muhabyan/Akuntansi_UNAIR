import type { Reading } from '../../../types';
import { CASE_PLATFORM_ECOSYSTEM_NETWORK } from '../manstratPracticeCases';

const SVG_PLATFORM_ECOSYSTEM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL BISNIS PLATFORM DUA SISI &amp; EFEK JARINGAN (MULTI-SIDED PLATFORM)</text>
  
  <rect x="30" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">SISI PRODUSEN</text>
  <text x="120" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Penjual / Merchant / Driver):</text>
  <text x="120" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengunggah produk &amp; jasa</text>
  <text x="120" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menikmati akses jutaan pembeli</text>
  <text x="120" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Membayar take-rate / komisi</text>
  <text x="120" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Monetization Side</text>

  <rect x="235" y="55" width="210" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="340" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">INTI PLATFORM DIGITAL</text>
  <text x="340" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Matchmaker &amp; Tata Kelola):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Algoritma pencocokan presisi</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sistem pembayaran &amp; escrow aman</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Aturan main &amp; kurasi kualitas</text>
  <text x="340" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Pereduksi Biaya Transaksi</text>

  <rect x="470" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="560" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">SISI KONSUMEN</text>
  <text x="560" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Pembeli / Penumpang):</text>
  <text x="560" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pilihan produk melimpah</text>
  <text x="560" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ulasan reputasi transparan</text>
  <text x="560" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Disubsidi promo / gratis ongkir</text>
  <text x="560" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Subsidy Side</text>
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
