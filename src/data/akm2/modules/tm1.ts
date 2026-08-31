import type { Reading } from '../../../types';
import {
  CASE_LUMP_SUM_PPE,
  CASE_BORROWING_COST,
  CASE_DECOMMISSIONING_RESTORE,
} from '../akm2PracticeCases';

const SVG_PPE_CLASSIFICATION = `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="220" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="36" fill="#38bdf8" font-size="14" font-weight="700" text-anchor="middle">KLASIFIKASI STANDAR PROPERTI &amp; TANAH (PSAK)</text>
  
  <rect x="30" y="55" width="190" height="155" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">ASET TETAP (PSAK 16)</text>
  <text x="125" y="102" fill="#94a3b8" font-size="10.5" text-anchor="middle">Tujuan:</text>
  <text x="125" y="120" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Operasional Sendiri / Admin</text>
  <text x="125" y="145" fill="#94a3b8" font-size="10.5" text-anchor="middle">Pengukuran Lanjutan:</text>
  <text x="125" y="163" fill="#cbd5e1" font-size="10" text-anchor="middle">Cost Model (Didepresiasi)</text>
  <text x="125" y="180" fill="#cbd5e1" font-size="10" text-anchor="middle">atau Revaluation (OCI)</text>

  <rect x="245" y="55" width="190" height="155" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">PROPERTI INVESTASI (PSAK 13)</text>
  <text x="340" y="102" fill="#94a3b8" font-size="10.5" text-anchor="middle">Tujuan:</text>
  <text x="340" y="120" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Rental Sewa / Kenaikan Nilai</text>
  <text x="340" y="145" fill="#94a3b8" font-size="10.5" text-anchor="middle">Pengukuran Lanjutan:</text>
  <text x="340" y="163" fill="#cbd5e1" font-size="10" text-anchor="middle">Cost Model (Depresiasi)</text>
  <text x="340" y="180" fill="#34d399" font-size="10" font-weight="600" text-anchor="middle">atau Fair Value (Laba Rugi!)</text>

  <rect x="460" y="55" width="190" height="155" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">PERSEDIAAN (PSAK 14)</text>
  <text x="555" y="102" fill="#94a3b8" font-size="10.5" text-anchor="middle">Tujuan:</text>
  <text x="555" y="120" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Dijual dlm Kegiatan Biasa</text>
  <text x="555" y="145" fill="#94a3b8" font-size="10.5" text-anchor="middle">Contoh Industri:</text>
  <text x="555" y="163" fill="#cbd5e1" font-size="10" text-anchor="middle">Pengembang Real Estat /</text>
  <text x="555" y="180" fill="#cbd5e1" font-size="10" text-anchor="middle">Developer Rumah / Ruko</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Akuntansi Aset Tetap, Properti Investasi, dan Tanah',
  ref: 'Kieso IFRS 5e Ch. 10 | PSAK 16, PSAK 13, PSAK 26',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 1: Memahami logika pengakuan aset berwujud, komponen biaya perolehan, alokasi lump-sum, kapitalisasi biaya pinjaman (PSAK 26), dan komparasi mendasar antara Aset Tetap (PSAK 16) vs Properti Investasi (PSAK 13).',
  objectives: [
    'Memahami kriteria pengakuan & karakteristik Aset Tetap (PPE) menurut PSAK 16 / IAS 16.',
    'Mengidentifikasi komponen biaya perolehan awal (Purchase Price, Direct Attributable Costs, dan Decommissioning Provision).',
    'Mampu menghitung dan menjurnal transaksi perolehan khusus: Pembelian Lump-Sum, Pembayaran Ditangguhkan, dan Penerbitan Saham.',
    'Menguasai 3 tahapan perhitungan kapitalisasi biaya pinjaman (WAAE, Avoidable Interest, Jurnal Kapitalisasi) sesuai PSAK 26 / IAS 23.',
    'Membedakan perlakuan akuntansi Aset Tetap (PSAK 16) vs Properti Investasi (PSAK 13) vs Persediaan Properti (PSAK 14).',
    'Memahami perlakuan Hak Legal atas Tanah di Indonesia (Hak Milik vs HGB/HGU/Hak Pakai sesuai ISAK 25).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Klasifikasi Kepemilikan Properti & Tanah Menurut Standar Akuntansi',
      svg: SVG_PPE_CLASSIFICATION,
      caption: 'Gambar 1.1: Membedakan perlakuan akuntansi berdasarkan intensi manajemen (management intent) dan fungsi aset.'
    },
    { kind: 'h2', text: '1. Karakteristik & Kriteria Pengakuan Aset Tetap (PSAK 16)' },
    {
      kind: 'p',
      text: 'Aset Tetap (*Property, Plant, and Equipment* - PPE) adalah aset berwujud yang memiliki dua karakteristik utama: (1) **dimiliki untuk digunakan** dalam produksi atau penyediaan barang/jasa, untuk direntalkan kepada pihak lain (selain properti investasi), atau untuk tujuan administratif; dan (2) **diperkirakan untuk digunakan selama lebih dari satu periode akuntansi**.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dua Kriteria Pengakuan Aset Tetap (Recognition Criteria)',
      text: 'Entitas mengakui biaya perolehan aset tetap jika dan hanya jika:\n1. Besar kemungkinan (**probable**) bahwa manfaat ekonomik masa depan yang berkaitan dengan aset tersebut akan mengalir ke dalam entitas; dan\n2. Biaya perolehan aset dapat **diukur secara andal** (reliably measured).'
    },
    { kind: 'h2', text: '2. Komponen Biaya Perolehan Awal (Initial Cost Breakdown)' },
    {
      kind: 'p',
      text: 'Sesuai PSAK 16 paragraf 16, biaya perolehan aset tetap terdiri dari 3 elemen utama:'
    },
    {
      kind: 'table',
      headers: ['Elemen Biaya', 'Rincian Komponen yang DIKAPITALISASI', 'Perlakuan Akuntansi'],
      rows: [
        ['1. Harga Pembelian', 'Harga faktur beli, bea impor/masuk, pajak pembelian yang tidak dapat dikreditkan (misal PPN Non-PKP), dikurangi diskon niaga dan rabat.', 'Mendebit Aset Tetap'],
        ['2. Biaya Atribusi Langsung', 'Biaya persiapan lokasi (site preparation), biaya penanganan & pengiriman awal (freight-in), biaya instalasi & perakitan, biaya pengujian kelayakan operasi (testing), imbalan profesional (notaris, arsitek, insinyur).', 'Mendebit Aset Tetap'],
        ['3. Estimasi Biaya Pembongkaran & Restorasi', 'Nilai sekarang (Present Value) dari kewajiban membongkar dan memindahkan aset serta merestorasi lokasi tempat aset berada pada akhir masa manfaat.', 'Mendebit Aset Tetap & Mengkredit Provisi (PSAK 57)']
      ],
      caption: 'Tabel 1.1: Komponen biaya yang wajib dikapitalisasi ke dalam aset tetap.'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Jebakan Ujian: Biaya yang TIDAK Boleh Dikapitalisasi (Expense Langsung)',
      text: 'Pengeluaran berikut **HARUS dibebankan langsung ke Laba Rugi periode berjalan**:\n• Biaya pembukaan fasilitas baru (opening new facility costs).\n• Biaya pengenalan produk baru, termasuk biaya iklan dan promosi.\n• Biaya penyelenggaraan bisnis di lokasi baru atau pelanggan baru (termasuk biaya pelatihan staf/training karyawan).\n• Biaya administrasi dan overhead umum.\n• Biaya yang terjadi ketika aset sudah mampu beroperasi sesuai intensi manajemen namun belum digunakan atau masih beroperasi di bawah kapasitas penuh.'
    },
    { kind: 'h2', text: '3. Kondisi Khusus Perolehan Aset Tetap' },
    { kind: 'h3', text: 'A. Pembelian Gabungan (Lump-Sum Purchase)' },
    {
      kind: 'p',
      text: 'Jika beberapa aset dibeli bersamaan dengan satu harga tunggal (*lump-sum*), total biaya perolehan dialokasikan ke masing-masing aset berdasarkan **proporsi nilai wajar relatif (Relative Fair Value Method)** pada tanggal transaksi.'
    },
    CASE_LUMP_SUM_PPE,
    { kind: 'h3', text: 'B. Perolehan dengan Kontrak Pembayaran Ditangguhkan (Deferred Settlement)' },
    {
      kind: 'p',
      text: 'Ketika aset tetap dibeli dengan syarat kredit jangka panjang melampaui jangka waktu kredit normal (misal: wesel bayar tanpa bunga 3 tahun), biaya perolehannya adalah **setara harga tunai (Cash Price Equivalent)** pada tanggal pengakuan, yang dihitung dari **Present Value (PV)** seluruh pembayaran masa depan.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Logika Pemisahan Aset & Beban Bunga',
      text: 'Selisih antara nilai nominal utang wesel dengan Nilai Sekarang (PV) diakui sebagai **Beban Bunga (Interest Expense)** sepanjang masa kredit menggunakan metode suku bunga efektif, BUKAN dikapitalisasi ke nilai aset!'
    },
    { kind: 'h3', text: 'C. Perolehan Melalui Penerbitan Saham (Issuance of Equity Shares)' },
    {
      kind: 'p',
      text: 'Jika entitas memperoleh aset tetap dengan menerbitkan saham biasa/ekuitas, aset diukur sebesar **Nilai Wajar Saham yang Diterbitkan**. Jika nilai wajar saham tidak dapat diukur secara andal (misal: saham perusahaan non-publik/tertutup), maka aset diukur sebesar **Nilai Wajar Aset yang Diterima**.'
    },
    CASE_DECOMMISSIONING_RESTORE,
    { kind: 'h2', text: '4. Kapitalisasi Biaya Pinjaman Selama Masa Konstruksi (PSAK 26 / IAS 23)' },
    {
      kind: 'p',
      text: 'Bunga yang timbul selama pembangunan aset yang memenuhi syarat (*Qualifying Asset* - aset yang memerlukan waktu substansial untuk siap digunakan) wajib **dikapitalisasi ke dalam biaya aset**, bukan dibebankan seluruhnya di laba rugi.'
    },
    {
      kind: 'table',
      headers: ['Kriteria Periode Kapitalisasi', 'Syarat Permulaan', 'Syarat Penghentian'],
      rows: [
        ['Pengeluaran Konstruksi', 'Pengeluaran untuk aset telah mulai dikeluarkan kas/utangnya.', 'Konstruksi fisik telah selesai secara substansial.'],
        ['Aktivitas Pembangunan', 'Aktivitas yang diperlukan untuk menyiapkan aset sedang berjalan.', 'Jika proyek ditunda/dihentikan sementara untuk waktu lama, kapitalisasi ditangguhkan.'],
        ['Biaya Pinjaman', 'Biaya pinjaman (bunga) telah terjadi / timbul.', 'Aset siap beroperasi sesuai intensi manajemen.']
      ],
      caption: 'Tabel 1.2: Syarat masa kapitalisasi bunga menurut PSAK 26.'
    },
    {
      kind: 'formula',
      text: 'WAAE = \\sum (\\text{Pengeluaran Kas Aktual} \\times \\frac{\\text{Jumlah Bulan Sisa Periode}}{12})',
      note: 'WAAE (Weighted-Average Accumulated Expenditures) adalah dasar perhitungan kebutuhan pendanaan proyek.'
    },
    CASE_BORROWING_COST,
    { kind: 'h2', text: '5. Model Pengukuran Lanjutan: Cost Model vs Revaluation Model' },
    {
      kind: 'table',
      headers: ['Dimensi Evaluasi', 'Model Biaya (Cost Model)', 'Model Revaluasi (Revaluation Model)'],
      rows: [
        ['Dasar Nilai Tercatat', 'Biaya Perolehan Historis dikurangi Akumulasi Depresiasi & Penurunan Nilai.', 'Nilai Wajar pada tanggal revaluasi dikurangi Akumulasi Depresiasi & Penurunan Nilai setelahnya.'],
        ['Perlakuan Kenaikan Nilai', 'Tidak diakui (prinsip kos historis dan kehati-hatian).', 'Diakui di Penghasilan Komprehensif Lain (OCI) dan diakumulasikan di Ekuitas (Surplus Revaluasi).'],
        ['Perlakuan Penurunan Nilai', 'Diakui sebagai Rugi Penurunan Nilai (Impairment Loss) di Laba Rugi.', 'Mengurangi Surplus Revaluasi OCI terlebih dahulu hingga habis, sisanya dibebankan ke Laba Rugi.'],
        ['Frekuensi Penilaian', 'Tidak memerlukan appraisal berkala.', 'Wajib dinilai berkala secara reguler agar nilai tercatat tidak berbeda material dari nilai wajar.']
      ],
      caption: 'Tabel 1.3: Perbandingan Model Biaya vs Model Revaluasi PSAK 16.'
    },
    { kind: 'h2', text: '6. Properti Investasi (PSAK 13 / IAS 40) vs Tanah Indonesia (ISAK 25)' },
    {
      kind: 'table',
      headers: ['Kriteria Pokok', 'Aset Tetap (PSAK 16)', 'Properti Investasi (PSAK 13)'],
      rows: [
        ['Definisi & Tujuan', 'Properti digunakan sendiri dalam operasi bisnis atau administrasi kantor.', 'Tanah atau bangunan yang dikuasai untuk menghasilkan sewa (rental) atau kenaikan modal (capital appreciation).'],
        ['Opsi Nilai Wajar (Fair Value)', 'Kenaikan nilai wajar dicatat ke OCI (Surplus Revaluasi Ekuitas).', 'Kenaikan nilai wajar dicatat langsung ke LABA RUGI (Profit or Loss)!'],
        ['Depresiasi pada Model Nilai Wajar', 'Tetap didepresiasi sepanjang sisa umur ekonomis.', 'TIDAK DIDEPRESIASI SAMA SEKALI jika menggunakan Fair Value Model!']
      ],
      caption: 'Tabel 1.4: Perbedaan krusial perlakuan akuntansi PSAK 16 vs PSAK 13.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Akuntansi Hak Legal atas Tanah di Indonesia (ISAK 25 / PSAK 16)',
      text: 'Di Indonesia, kepemilikan tanah dibedakan berdasarkan status hak hukumnya:\n• **Hak Milik (Freehold)**: Memiliki masa berlaku tidak terbatas, **TIDAK DIAMORTISASI/DIDEPRESIASI**.\n• **Hak Guna Bangunan (HGB), Hak Guna Usaha (HGU), & Hak Pakai**: Memiliki batas waktu legal (misal 20-30 tahun). Biaya perolehan hak legal diamortisasi sepanjang masa manfaat izin hak atau disajikan sebagai beban tangguhan / hak atas tanah.'
    },
    { kind: 'h2', text: '7. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Kapitalisasi Awal**: Hanya biaya yang langsung berkaitan membawa aset ke lokasi & kondisi siap operasi yang boleh dikapitalisasi.',
        '**Pembelian Lump-Sum**: Alokasikan proporsional berdasarkan nilai wajar relatif dari masing-masing komponen aset.',
        '**Gedung Lama yang Dibongkar**: Jika niatnya membangun pabrik baru, harga beli gedung lama + biaya bersih pembongkaran masuk ke akun **Tanah**.',
        '**Kapitalisasi Bunga PSAK 26**: Bunga yang dikapitalisasi adalah nilai **TERENDAH** antara Avoidable Interest atas WAAE dan Total Bunga Aktual.',
        '**Properti Investasi Fair Value**: Keuntungan/kerugian nilai wajar langsung masuk ke Laba Rugi tahun berjalan, bukan OCI.'
      ]
    }
  ]
};