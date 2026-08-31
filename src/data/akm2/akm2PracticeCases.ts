import type { ContentBlock } from '../../types';

export interface Akm2PracticeCase {
  id: string;
  caseTitle: string;
  source: string;
  linkedTm: number[];
  learningGoal: string;
  promptBlocks: ContentBlock[];
  guideBlocks?: ContentBlock[];
  explanationBlock: ContentBlock;
}

// -------------------------------------------------------------
// KASUS 1: Alokasi Pembelian Gabungan (Lump-Sum) & Biaya Pembongkaran (TM 1)
// -------------------------------------------------------------
export const CASE_LUMP_SUM_PPE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Alokasi Pembelian Gabungan (Lump-Sum) & Perlakuan Gedung Lama',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'PT Surya Prima membeli sebidang tanah beserta satu unit gedung tua di atasnya dari PT Graha Sejahtera secara lump-sum (sekaligus) dengan total kas yang dibayarkan sebesar Rp 2.400.000.000. Selain harga beli, PT Surya Prima membayar biaya jasa notaris dan legal balik nama sebesar Rp 60.000.000.',
    },
    {
      kind: 'table',
      headers: ['Aset Diperoleh', 'Nilai Wajar Penilai Independen (Appraisal)', 'Porsi Proporsional'],
      rows: [
        ['Tanah (Land)', 'Rp 2.100.000.000', '70% (2,1M / 3,0M)'],
        ['Gedung Tua (Building)', 'Rp 900.000.000', '30% (0,9M / 3,0M)'],
        ['Total Nilai Wajar', 'Rp 3.000.000.000', '100%'],
      ],
      caption: 'Penilaian nilai wajar independen pada tanggal perolehan.',
    },
    {
      kind: 'p',
      text: '**Diminta Analisis 2 Skenario Berbeda:**\n1. **Skenario A (Gedung Digunakan):** Perusahaan berniat merenovasi ringan gedung tersebut dan langsung menggunakannya sebagai kantor operasional.\n2. **Skenario B (Gedung Dibongkar):** Perusahaan membeli lahan tersebut semata-mata untuk membangun pabrik manufaktur baru. Gedung tua segera diratakan dengan biaya pembongkaran sebesar Rp 120.000.000, dan sisa puing/besi tua laku terjual seharga Rp 25.000.000.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Pembahasan & Jurnal Akuntansi (Skenario A & B)',
      prompt: 'Pahami perbedaan esensial intensi manajemen (management intent) sesuai PSAK 16:',
      blocks: [
        {
          kind: 'h3',
          text: 'Penyelesaian Skenario A (Gedung Digunakan untuk Operasi)',
        },
        {
          kind: 'p',
          text: 'Total biaya perolehan yang dialokasikan adalah Harga Beli (Rp 2.400.000.000) + Biaya Legal (Rp 60.000.000) = **Rp 2.460.000.000**.\nAlokasi berbasis nilai wajar relatif (Relative Fair Value Method):',
        },
        {
          kind: 'ul',
          items: [
            '**Tanah**: 70% × Rp 2.460.000.000 = **Rp 1.722.000.000**',
            '**Gedung**: 30% × Rp 2.460.000.000 = **Rp 738.000.000**',
          ],
        },
        {
          kind: 'journal',
          caption: 'Jurnal Perolehan Lump-Sum Skenario A (Gedung Digunakan)',
          lines: [
            { account: 'Tanah (Land)', debit: 'Rp 1.722.000.000' },
            { account: 'Bangunan (Building)', debit: 'Rp 738.000.000' },
            { account: 'Kas / Bank', credit: 'Rp 2.460.000.000', isCredit: true },
          ],
        },
        {
          kind: 'h3',
          text: 'Penyelesaian Skenario B (Gedung Langsung Dibongkar untuk Proyek Baru)',
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Aturan Kunci PSAK 16 / IAS 16',
          text: 'Jika tanah dibeli dengan bangunan tua di atasnya dan tujuannya adalah membangun fasilitas baru, maka **seluruh harga beli awal dialokasikan 100% ke akun Tanah**. Biaya bersih pembongkaran (Biaya pembongkaran Rp 120jt - Penjualan material Rp 25jt = Rp 95jt) dikapitalisasi ke akun **Tanah** karena merupakan biaya persiapan lahan agar siap digunakan.',
        },
        {
          kind: 'ul',
          items: [
            'Biaya Pembelian & Legal: Rp 2.460.000.000 (Semua masuk Tanah)',
            'Biaya Bersih Pembongkaran: Rp 120.000.000 - Rp 25.000.000 = Rp 95.000.000 (Masuk Tanah)',
            '**Total Nilai Tercatat Aset Tanah**: Rp 2.460.000.000 + Rp 95.000.000 = **Rp 2.555.000.000**',
          ],
        },
        {
          kind: 'journal',
          caption: 'Jurnal Perolehan Skenario B (Pembongkaran Gedung Lama)',
          lines: [
            { account: 'Tanah (Land)', debit: 'Rp 2.460.000.000' },
            { account: 'Kas / Bank', credit: 'Rp 2.460.000.000', isCredit: true },
            { account: 'Tanah (Biaya Bersih Perataan Lahan)', debit: 'Rp 95.000.000' },
            { account: 'Kas (Hasil Penjualan Material)', debit: 'Rp 25.000.000' },
            { account: 'Kas (Pembayaran Kontraktor Pembongkaran)', credit: 'Rp 120.000.000', isCredit: true },
          ],
        },
      ],
    },
  ],
};

// -------------------------------------------------------------
// KASUS 2: Kapitalisasi Bunga Selama Masa Konstruksi (TM 1)
// -------------------------------------------------------------
export const CASE_BORROWING_COST: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Kapitalisasi Biaya Pinjaman (Borrowing Costs - PSAK 26)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Proyek Konstruksi Mandiri (Self-Constructed Asset)',
      text: 'PT Mahakarya Nusantara membangun gedung kantor pusat baru mulai 1 Januari 2026 dan selesai pada 31 Desember 2026. Total pengeluaran kas aktual sepanjang tahun 2026 adalah sebagai berikut:',
    },
    {
      kind: 'table',
      headers: ['Tanggal Pengeluaran', 'Jumlah Kas Dikeluarkan', 'Periode Kapitalisasi (Bulan / 12)', 'Rata-rata Tertimbang Pengeluaran (WAAE)'],
      rows: [
        ['1 Januari 2026', 'Rp 400.000.000', '12/12', 'Rp 400.000.000'],
        ['1 April 2026', 'Rp 600.000.000', '9/12', 'Rp 450.000.000'],
        ['1 Juli 2026', 'Rp 800.000.000', '6/12', 'Rp 400.000.000'],
        ['1 November 2026', 'Rp 300.000.000', '2/12', 'Rp 50.000.000'],
        ['Total Pengeluaran Kas', 'Rp 2.100.000.000', '-', 'WAAE = Rp 1.300.000.000'],
      ],
      caption: 'Tabel perhitungan Weighted-Average Accumulated Expenditures (WAAE).',
    },
    {
      kind: 'p',
      text: '**Struktur Utang Perusahaan Sepanjang 2026:**\n1. **Pinjaman Khusus Konstruksi (Specific Construction Loan)**: Wesel Bayar 3 tahun, bunga 10% per tahun, nominal **Rp 800.000.000** (diterbitkan 1 Jan 2026).\n2. **Pinjaman Umum 1 (General Debt 1)**: Obligasi 5 tahun, bunga 12% per tahun, nominal **Rp 600.000.000**.\n3. **Pinjaman Umum 2 (General Debt 2)**: Wesel Bayar jangka panjang, bunga 14% per tahun, nominal **Rp 400.000.000**.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan WAAE, Avoidable Interest, & Jurnal',
      prompt: 'Lihat langkah sistematis 3 tahap perhitungan kapitalisasi bunga:',
      blocks: [
        {
          kind: 'h3',
          text: 'Langkah 1: Hitung Tarif Rata-rata Tertimbang Pinjaman Umum (Weighted-Average Interest Rate)',
        },
        {
          kind: 'table',
          headers: ['Sumber Utang Umum', 'Pokok Pinjaman', 'Suku Bunga', 'Bunga Tahunan Aktual'],
          rows: [
            ['Obligasi 5 Tahun', 'Rp 600.000.000', '12%', 'Rp 72.000.000'],
            ['Wesel Bayar Jangka Panjang', 'Rp 400.000.000', '14%', 'Rp 56.000.000'],
            ['Total Pinjaman Umum', 'Rp 1.000.000.000', '-', 'Rp 128.000.000'],
          ],
          caption: 'Tarif Rata-rata Tertimbang Utang Umum = Total Bunga / Total Pokok = Rp 128jt / Rp 1.000jt = 12,80%',
        },
        {
          kind: 'h3',
          text: 'Langkah 2: Hitung Bunga yang Dapat Dihindari (Avoidable Interest) atas WAAE',
        },
        {
          kind: 'p',
          text: 'Total WAAE adalah **Rp 1.300.000.000**. Alokasikan ke pinjaman khusus terlebih dahulu, sisanya ke pinjaman umum:',
        },
        {
          kind: 'ul',
          items: [
            'Bagian Pinjaman Khusus: Rp 800.000.000 × 10% = **Rp 80.000.000**',
            'Sisa WAAE yang didanai Pinjaman Umum: (Rp 1.300.000.000 - Rp 800.000.000) = Rp 500.000.000 × 12,80% = **Rp 64.000.000**',
            '**Total Avoidable Interest**: Rp 80.000.000 + Rp 64.000.000 = **Rp 144.000.000**',
          ],
        },
        {
          kind: 'h3',
          text: 'Langkah 3: Bandingkan Bunga Aktual vs Avoidable Interest',
        },
        {
          kind: 'ul',
          items: [
            'Total Bunga Aktual = Bunga Pinjaman Khusus (Rp 80jt) + Bunga Pinjaman Umum (Rp 128jt) = **Rp 208.000.000**',
            'Avoidable Interest = **Rp 144.000.000**',
            '**Jumlah yang Dikapitalisasi**: Ambil yang **TERKECIL** (Lower of Actual vs Avoidable) = **Rp 144.000.000**',
            'Sisa Bunga Diakui sebagai Beban Periode: Rp 208.000.000 - Rp 144.000.000 = **Rp 64.000.000**',
          ],
        },
        {
          kind: 'journal',
          caption: 'Jurnal Kapitalisasi Bunga per 31 Desember 2026',
          lines: [
            { account: 'Bangunan dalam Konstruksi (Building under Construction)', debit: 'Rp 144.000.000' },
            { account: 'Beban Bunga (Interest Expense)', debit: 'Rp 64.000.000' },
            { account: 'Kas / Utang Bunga (Cash / Interest Payable)', credit: 'Rp 208.000.000', isCredit: true },
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Total Biaya Akhir Gedung di Neraca',
          text: 'Setelah proyek selesai 31 Desember 2026, akun Bangunan ditransfer dari konstruksi ke aset tetap siap pakai:\nTotal Nilai Tercatat Bangunan = Pengeluaran Kas (Rp 2.100.000.000) + Bunga Dikapitalisasi (Rp 144.000.000) = **Rp 2.244.000.000**.',
        },
      ],
    },
  ],
};

// -------------------------------------------------------------
// KASUS 3: Provisi Pembongkaran & Restorasi Aset (TM 1)
// -------------------------------------------------------------
export const CASE_DECOMMISSIONING_RESTORE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Estimasi Biaya Pembongkaran & Restorasi Lokasi (PSAK 16 & PSAK 57)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Fakta Transaksi',
      text: 'Pada 2 Januari 2026, PT Borneo Mineral membangun instalasi pengolahan tambang dengan biaya konstruksi tunai sebesar Rp 8.000.000.000. Masa manfaat fasilitas ini diestimasi selama 5 tahun. Regulasi lingkungan mewajibkan perusahaan membongkar instalasi dan merestorasi lahan tambang di akhir tahun ke-5 dengan estimasi biaya masa depan sebesar Rp 1.500.000.000. Tingkat diskonto yang mencerminkan nilai waktu uang adalah 10% per tahun (Faktor PV tunggal n=5, i=10% adalah 0,62092).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Present Value & Jurnal Unwinding',
      prompt: 'Ketahui bagaimana provisi pembongkaran mendebit aset tetap dan mengalami penyesuaian bunga tahunan:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Pengukuran Awal (2 Januari 2026)',
        },
        {
          kind: 'p',
          text: 'Nilai Sekarang (PV) Provisi Restorasi = Rp 1.500.000.000 × 0,62092 = **Rp 931.380.000**.\nTotal Biaya Perolehan Awal Fasilitas Tambang = Biaya Tunai (Rp 8.000.000.000) + PV Provisi (Rp 931.380.000) = **Rp 8.931.380.000**.',
        },
        {
          kind: 'journal',
          caption: 'Jurnal Perolehan Awal Fasilitas & Pengakuan Provisi (2 Jan 2026)',
          lines: [
            { account: 'Instalasi Fasilitas Tambang (Mining Facilities)', debit: 'Rp 8.931.380.000' },
            { account: 'Kas / Bank', credit: 'Rp 8.000.000.000', isCredit: true },
            { account: 'Provisi Pembongkaran & Restorasi (Decommissioning Provision)', credit: 'Rp 931.380.000', isCredit: true },
          ],
        },
        {
          kind: 'h3',
          text: '2. Penyesuaian Akhir Tahun 1 (31 Desember 2026)',
        },
        {
          kind: 'ul',
          items: [
            '**Beban Depresiasi Fasilitas**: Rp 8.931.380.000 / 5 tahun = **Rp 1.786.276.000** per tahun.',
            '**Beban Bunga / Penyesuaian Nilai Waktu Uang (Unwinding of Discount)** pada Liabilitas Provisi: 10% × Rp 931.380.000 = **Rp 93.138.000**.',
          ],
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penyesuaian per 31 Desember 2026',
          lines: [
            { account: 'Beban Depresiasi Fasilitas Tambang', debit: 'Rp 1.786.276.000' },
            { account: 'Akumulasi Depresiasi Fasilitas Tambang', credit: 'Rp 1.786.276.000', isCredit: true },
            { account: 'Beban Bunga (Interest Expense - Unwinding Discount)', debit: 'Rp 93.138.000' },
            { account: 'Provisi Pembongkaran & Restorasi', credit: 'Rp 93.138.000', isCredit: true },
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Efek Unwinding of Discount',
          text: 'Saldo akun Provisi Pembongkaran akan terus bertambah setiap tahun sebesar beban bunga diskonto sampai tepat mencapai **Rp 1.500.000.000** di akhir tahun ke-5 saat pembongkaran dilakukan!',
        },
      ],
    },
  ],
};

// -------------------------------------------------------------
// KASUS 4: Pertukaran Aset Non-Moneter (TM 2 - Non-Monetary Exchanges)
// -------------------------------------------------------------
export const CASE_NON_MONETARY_EXCHANGE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Pertukaran Aset Non-Moneter (Commercial Substance vs No Commercial Substance)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Fakta Transaksi Pertukaran Armada Mesin',
      text: 'PT Trans Armada menukarkan 10 unit truk angkut lama dengan model truk listrik baru dari PT Eco Otomotif. Data buku dan penilaian wajar adalah sebagai berikut:\n• Harga Perolehan Historis Truk Lama: Rp 1.200.000.000\n• Akumulasi Depresiasi Truk Lama s.d tanggal pertukaran: Rp 800.000.000 (Nilai Buku = Rp 400.000.000)\n• Nilai Wajar Truk Lama: Rp 550.000.000\n• Kas Tambahan yang Dibayarkan (Boot Paid): Rp 250.000.000 secara tunai.',
    },
    {
      kind: 'p',
      text: '**Diminta Analisis dan Jurnal:**\n1. **Skenario 1 (Has Commercial Substance):** Pertukaran ini menghasilkan penghematan biaya bahan bakar solar drastis yang secara signifikan mengubah pola arus kas masa depan perusahaan.\n2. **Skenario 2 (Lacks Commercial Substance):** Pertukaran dilakukan hanya untuk tujuan keseragaman warna armada antar entitas dalam satu grup tanpa perubahan arus kas masa depan yang signifikan.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Untung/Rugi & Jurnal Perbandingan',
      prompt: 'Pahami bagaimana keuntungan (gain) diakui penuh vs ditangguhkan:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Hitung Keuntungan / Kerugian Terealisasi',
        },
        {
          kind: 'ul',
          items: [
            'Nilai Wajar Truk Lama Diserahkan: Rp 550.000.000',
            'Nilai Buku Truk Lama: Rp 1.200.000.000 - Rp 800.000.000 = Rp 400.000.000',
            '**Keuntungan atas Pelepasan Truk Lama (Gain on Disposal)**: Rp 550.000.000 - Rp 400.000.000 = **Rp 150.000.000**.',
          ],
        },
        {
          kind: 'h3',
          text: '2. Skenario 1: Memiliki Substansi Komersial (Has Commercial Substance)',
        },
        {
          kind: 'p',
          text: 'Biaya Perolehan Truk Baru = Nilai Wajar Truk Lama (Rp 550.000.000) + Kas Dibayar (Rp 250.000.000) = **Rp 800.000.000**.\n**Seluruh keuntungan Rp 150.000.000 diakui segera di Laba Rugi!**',
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pertukaran (Memiliki Substansi Komersial)',
          lines: [
            { account: 'Truk Listrik Baru (Equipment - New)', debit: 'Rp 800.000.000' },
            { account: 'Akumulasi Depresiasi - Truk Lama', debit: 'Rp 800.000.000' },
            { account: 'Truk Lama (Equipment - Old)', credit: 'Rp 1.200.000.000', isCredit: true },
            { account: 'Kas / Bank', credit: 'Rp 250.000.000', isCredit: true },
            { account: 'Keuntungan Pelepasan Aset (Gain on Disposal)', credit: 'Rp 150.000.000', isCredit: true },
          ],
        },
        {
          kind: 'h3',
          text: '3. Skenario 2: TIDAK Memiliki Substansi Komersial (Lacks Commercial Substance)',
        },
        {
          kind: 'p',
          text: 'Karena perusahaan membayar kas (boot paid) dan tidak memiliki substansi komersial, **keuntungan sebesar Rp 150.000.000 DITANGGUHKAN (Deferral)** dengan cara mengurangi nilai tercatat awal truk baru:\nNilai Tercatat Truk Baru = Nilai Wajar (Rp 800.000.000) - Keuntungan Ditangguhkan (Rp 150.000.000) = **Rp 650.000.000**\n*(Atau: Nilai Buku Truk Lama Rp 400jt + Kas Dibayar Rp 250jt = Rp 650jt)*.',
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pertukaran (Tanpa Substansi Komersial - Keuntungan Ditangguhkan)',
          lines: [
            { account: 'Truk Listrik Baru (Equipment - New)', debit: 'Rp 650.000.000' },
            { account: 'Akumulasi Depresiasi - Truk Lama', debit: 'Rp 800.000.000' },
            { account: 'Truk Lama (Equipment - Old)', credit: 'Rp 1.200.000.000', isCredit: true },
            { account: 'Kas / Bank', credit: 'Rp 250.000.000', isCredit: true },
          ],
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Perhatian Khusus Kondisi RUGI (Loss)',
          text: 'Jika dalam pertukaran timbul **KERUGIAN** (Nilai Wajar Aset Diserahkan < Nilai Buku), kerugian tersebut **WANGSIT HARUS DIAKUI SEGERA 100%**, terlepas apakah pertukaran memiliki substansi komersial ataupun tidak!'
        }
      ],
    },
  ],
};

// -------------------------------------------------------------
// KASUS 5: Konversi Terpaksa / Klaim Asuransi (TM 2 - Involuntary Conversion)
// -------------------------------------------------------------
export const CASE_INVOLUNTARY_CONVERSION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Konversi Terpaksa (Involuntary Conversion) & Pelepasan Aset Kebakaran',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Fakta Kejadian',
      text: 'Pada 1 Juli 2026, sebuah gudang penyimpanan milik PT Logistik Sentosa mengalami kebakaran hebat dan hancur total. Data buku gudang per 31 Desember 2025:\n• Harga Perolehan Bangunan: Rp 3.000.000.000\n• Akumulasi Depresiasi s.d 31 Des 2025: Rp 1.800.000.000 (Depresiasi tahunan Rp 120.000.000)\n• Perusahaan menerima ganti rugi klaim asuransi tunai pada 1 September 2026 sebesar Rp 1.500.000.000.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Tahapan Jurnal Disposisi Terpaksa',
      prompt: 'Lihat 3 tahapan akuntansi mulai dari update depresiasi hingga pengakuan laba rugi:',
      blocks: [
        {
          kind: 'h3',
          text: 'Langkah 1: Update Depresiasi Parsial (1 Jan s.d 1 Juli 2026 = 6 Bulan)'
        },
        {
          kind: 'p',
          text: 'Beban Depresiasi Parsial = 6/12 × Rp 120.000.000 = **Rp 60.000.000**.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Depresiasi Parsial Gudang per 1 Juli 2026',
          lines: [
            { account: 'Beban Depresiasi Gudang', debit: 'Rp 60.000.000' },
            { account: 'Akumulasi Depresiasi Gudang', credit: 'Rp 60.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: 'Langkah 2: Hitung Nilai Buku Terkini & Keuntungan Konversi Terpaksa'
        },
        {
          kind: 'ul',
          items: [
            'Total Akumulasi Depresiasi per 1 Juli 2026 = Rp 1.800.000.000 + Rp 60.000.000 = Rp 1.860.000.000',
            'Nilai Buku Bersih (Carrying Value) = Rp 3.000.000.000 - Rp 1.860.000.000 = **Rp 1.140.000.000**',
            'Klaim Asuransi Diterima = Rp 1.500.000.000',
            '**Keuntungan Konversi Terpaksa (Gain on Disposal)**: Rp 1.500.000.000 - Rp 1.140.000.000 = **Rp 360.000.000**.'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penerimaan Klaim Asuransi & Penghentian Aset Gudang (1 Sept 2026)',
          lines: [
            { account: 'Kas / Piutang Klaim Asuransi', debit: 'Rp 1.500.000.000' },
            { account: 'Akumulasi Depresiasi Gudang', debit: 'Rp 1.860.000.000' },
            { account: 'Bangunan Gudang', credit: 'Rp 3.000.000.000', isCredit: true },
            { account: 'Keuntungan Pelepasan Aset (Gain on Involuntary Conversion)', credit: 'Rp 360.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};
// -------------------------------------------------------------
// KASUS 6: Komparasi 4 Metode Depresiasi & Revisi Estimasi (TM 3)
// -------------------------------------------------------------
export const CASE_DEPRECIATION_METHODS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Komparasi 4 Metode Depresiasi, Pembelian Parsial, & Revisi Estimasi',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Mesin Pabrik',
      text: 'Pada 1 April 2026, PT Manufaktur Presisi membeli mesin robotik presisi seharga Rp 500.000.000 dengan biaya angkut dan instalasi Rp 40.000.000 (Total Biaya Perolehan = Rp 540.000.000). Nilai residu diestimasi Rp 60.000.000. Masa manfaat diestimasi 5 tahun (atau kapasitas total 40.000 jam operasi). Pada tahun 2026, mesin beroperasi selama 6.000 jam.',
    },
    {
      kind: 'table',
      headers: ['Metode Depresiasi', 'Rumus Dasar', 'Perhitungan Beban Tahun 1 (Parsial 9 Bulan: 1 Apr - 31 Des 2026)', 'Beban Depresiasi 2026'],
      rows: [
        ['1. Garis Lurus (Straight-Line)', '(Cost - Residu) / n', '(Rp 540jt - Rp 60jt) / 5 × (9/12)', 'Rp 72.000.000'],
        ['2. Unit Aktivitas (Units-of-Activity)', '[(Cost - Residu) / Total Jam] × Jam Aktual', '[(Rp 540jt - Rp 60jt) / 40.000 jam] × 6.000 jam = Rp 12.000/jam × 6.000', 'Rp 72.000.000'],
        ['3. Saldo Menurun Ganda (DDB)', 'Book Value Awal × (2 / n)', 'Rp 540.000.000 × (2/5 = 40%) × (9/12) *(Tanpa kurangi residu!)*', 'Rp 162.000.000'],
        ['4. Jumlah Angka Tahun (SYD)', '(Cost - Residu) × (Sisa Umur / SYD)', '(Rp 480jt) × (5/15) × (9/12)', 'Rp 120.000.000'],
      ],
      caption: 'Tabel perbandingan beban depresiasi tahun pertama (9 bulan operasi) untuk 4 metode.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Pembahasan Revisi Estimasi Masa Manfaat (PSAK 25)',
      prompt: 'Pelajari perlakuan prospektif saat estimasi masa manfaat/residu berubah:',
      blocks: [
        {
          kind: 'h3',
          text: 'Kasus Lanjutan: Revisi Estimasi pada 1 Januari 2028 (Tahun ke-3)'
        },
        {
          kind: 'p',
          text: 'Asumsikan perusahaan menggunakan **Metode Garis Lurus**.\n• Akumulasi Depresiasi per 31 Des 2027 (1 tahun 9 bulan = 21 bulan): 21/12 × Rp 96.000.000/thn = Rp 168.000.000.\n• Nilai Buku per 1 Jan 2028 = Rp 540.000.000 - Rp 168.000.000 = **Rp 372.000.000**.\n\nPada 1 Jan 2028, diputuskan sisa masa manfaat mesin masih 4 tahun ke depan (bukan 3,25 tahun) dan nilai residu baru diestimasi Rp 20.000.000.'
        },
        {
          kind: 'formula',
          text: '\\text{Beban Depresiasi Baru} = \\frac{\\text{Nilai Buku Terkini} - \\text{Nilai Residu Baru}}{\\text{Sisa Masa Manfaat Baru}} = \\frac{Rp\\ 372.000.000 - Rp\\ 20.000.000}{4\\ \\text{tahun}} = Rp\\ 88.000.000\\ /\\text{tahun}',
          note: 'Sesuai PSAK 25, perubahan estimasi diperlakukan secara PROSPEKTIF (tidak merevisi laporan tahun sebelumnya).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 7: Deplesi Tambang & Biaya Restorasi (TM 3)
// -------------------------------------------------------------
export const CASE_DEPLETION_MINING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Deplesi Tambang Batubara & Akuntansi Ekstraksi Cadangan',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Hak Tambang',
      text: 'PT Tambang Borneo memperoleh hak eksplorasi dan ekstraksi batubara seharga Rp 12.000.000.000. Biaya pengembangan tidak berwujud (akses jalan terowongan) Rp 3.000.000.000. Estimasi kewajiban restorasi lingkungan (Present Value) Rp 1.000.000.000. Nilai sisa tanah setelah tambang habis Rp 2.000.000.000. Total cadangan batubara diestimasi 4.000.000 ton. Pada tahun pertama diekstraksi 600.000 ton dan terjual 500.000 ton.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Tarif Deplesi & Jurnal Ekstraksi',
      prompt: 'Pahami pemisahan antara deplesi yang masuk Persediaan vs Beban Pokok Penjualan:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Hitung Dasar Deplesi (Depletion Base)'
        },
        {
          kind: 'ul',
          items: [
            'Harga Perolehan Hak Tambang: Rp 12.000.000.000',
            'Biaya Akses / Pengembangan: Rp 3.000.000.000',
            'PV Provisi Restorasi: Rp 1.000.000.000',
            'Dikurangi Nilai Sisa Lahan: (Rp 2.000.000.000)',
            '**Total Dasar Deplesi**: **Rp 14.000.000.000**'
          ]
        },
        {
          kind: 'formula',
          text: '\\text{Tarif Deplesi per Ton} = \\frac{Rp\\ 14.000.000.000}{4.000.000\\ \\text{ton}} = Rp\\ 3.500\\ /\\text{ton}'
        },
        {
          kind: 'h3',
          text: '2. Jurnal Deplesi atas 600.000 Ton yang Diekstraksi'
        },
        {
          kind: 'p',
          text: 'Total Deplesi = 600.000 ton × Rp 3.500 = **Rp 2.100.000.000**.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pengakuan Deplesi ke Persediaan Batubara',
          lines: [
            { account: 'Persediaan Batubara (Inventory - Coal)', debit: 'Rp 2.100.000.000' },
            { account: 'Akumulasi Deplesi (Accumulated Depletion)', credit: 'Rp 2.100.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '3. Penjualan 500.000 Ton Batubara'
        },
        {
          kind: 'p',
          text: 'Harga Pokok Penjualan = 500.000 ton × Rp 3.500 = **Rp 1.750.000.000**.\nSisa 100.000 ton (Rp 350.000.000) tetap berada di **Persediaan Akhir Neraca**!'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 8: Penurunan Nilai Aset (Impairment) & Pembalikan (TM 4 - PSAK 48)
// -------------------------------------------------------------
export const CASE_IMPAIRMENT_TEST: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Uji Penurunan Nilai (Impairment Test) & Pembalikan Penurunan Nilai (PSAK 48)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Mesin Pabrik Tekstil',
      text: 'Pada 31 Desember 2026, PT Tekstil Nusantara menguji indikasi penurunan nilai pada lini mesin tenun modern akibat masuknya produk impor murah.\n• Harga Perolehan Awal Mesin (1 Jan 2024): Rp 1.000.000.000 (Masa manfaat 10 tahun, tanpa nilai residu, metode garis lurus).\n• Akumulasi Depresiasi s.d 31 Des 2026 (3 tahun): Rp 300.000.000 (Nilai Buku Tercatat = Rp 700.000.000).\n• Nilai Wajar Dikurangi Biaya Penjualan (FVLCD): Rp 520.000.000.\n• Nilai Pakai (Value in Use - PV Arus Kas Operasi): Rp 560.000.000.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Impairment & Pembalikan Tahun Berikutnya',
      prompt: 'Pahami penentuan Recoverable Amount dan batas atas pembalikan nilai:',
      blocks: [
        {
          kind: 'h3',
          text: 'Langkah 1: Tentukan Jumlah Terpulihkan (Recoverable Amount)'
        },
        {
          kind: 'ul',
          items: [
            'Recoverable Amount = **Nilai TERTINGGI** antara FVLCD (Rp 520jt) vs Value in Use (Rp 560jt) = **Rp 560.000.000**.',
            'Nilai Tercatat (Carrying Amount) = Rp 700.000.000.',
            'Karena Nilai Tercatat > Recoverable Amount, terjadi **Penurunan Nilai (Impairment)** sebesar: Rp 700.000.000 - Rp 560.000.000 = **Rp 140.000.000**.'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Rugi Penurunan Nilai per 31 Desember 2026',
          lines: [
            { account: 'Rugi Penurunan Nilai (Loss on Impairment)', debit: 'Rp 140.000.000' },
            { account: 'Akumulasi Penurunan Nilai Mesin (Accumulated Impairment)', credit: 'Rp 140.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: 'Langkah 2: Depresiasi Tahun 2027 Setelah Impairment'
        },
        {
          kind: 'p',
          text: 'Nilai Tercatat Baru = Rp 560.000.000. Sisa masa manfaat = 7 tahun.\nBeban Depresiasi 2027 = Rp 560.000.000 / 7 = **Rp 80.000.000**.\nNilai Buku per 31 Des 2027 = Rp 560jt - Rp 80jt = **Rp 480.000.000**.'
        },
        {
          kind: 'h3',
          text: 'Langkah 3: Pemulihan / Pembalikan Nilai pada 31 Desember 2027'
        },
        {
          kind: 'p',
          text: 'Pada 31 Des 2027, kondisi pasar membaik dan Recoverable Amount naik menjadi **Rp 650.000.000**.\n**Batas Atas Pembalikan**: Nilai buku jika tidak pernah terjadi penurunan nilai = Rp 1.000.000.000 - (4 tahun × Rp 100jt) = **Rp 600.000.000**.\nOleh karena itu, nilai tercatat hanya boleh dinaikkan dari Rp 480.000.000 ke batas atas **Rp 600.000.000** (Pembalikan diakui sebesar Rp 120.000.000)!'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pembalikan Penurunan Nilai per 31 Desember 2027',
          lines: [
            { account: 'Akumulasi Penurunan Nilai Mesin', debit: 'Rp 120.000.000' },
            { account: 'Keuntungan Pemulihan Penurunan Nilai (Recovery of Impairment Loss)', credit: 'Rp 120.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};
// -------------------------------------------------------------
// KASUS 9: Biaya R&D & Akuisisi Goodwill (TM 5 - PSAK 19)
// -------------------------------------------------------------
export const CASE_INTANGIBLE_GOODWILL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Pemisahan Biaya Riset vs Pengembangan & Perhitungan Goodwill',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Proyek Farmasi & Akuisisi Bisnis',
      text: 'PT Bio Farma Farma mengeluarkan biaya riset dan pengembangan obat baru sepanjang 2026 sebagai berikut:\n• Biaya Riset Laboratorium Awal: Rp 800.000.000 (Expense langsung).\n• Biaya Fase Pengembangan (setelah memenuhi 6 kriteria kelayakan teknis & komersial): Rp 1.200.000.000 (Dikapitalisasi ke Paten).\n• Biaya Pendaftaran Hak Paten ke Kemenkumham & Honor Konsultan Hukum: Rp 150.000.000.\n\nSelain itu, pada 1 Oktober 2026 perusahaan mengakuisisi PT Herbal Sehat seharga Rp 5.000.000.000 tunai. Nilai wajar aset teridentifikasi Rp 6.200.000.000 dan liabilitas Rp 2.000.000.000 (Nilai Wajar Aset Bersih = Rp 4.200.000.000).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Pembahasan Paten & Goodwill',
      prompt: 'Pahami logika kapitalisasi paten internal dan perhitungan goodwill:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Total Nilai Tercatat Aset Paten yang Dikapitalisasi'
        },
        {
          kind: 'ul',
          items: [
            'Biaya Riset: Rp 800.000.000 -> **Beban Riset di Laba Rugi**.',
            'Biaya Fase Pengembangan: Rp 1.200.000.000 -> **Kapitalisasi ke Paten**.',
            'Biaya Legal & Registrasi Paten: Rp 150.000.000 -> **Kapitalisasi ke Paten**.',
            '**Total Nilai Awal Paten**: Rp 1.200.000.000 + Rp 150.000.000 = **Rp 1.350.000.000**.'
          ]
        },
        {
          kind: 'h3',
          text: '2. Perhitungan Goodwill Penggabungan Usaha'
        },
        {
          kind: 'ul',
          items: [
            'Harga Beli Imbalan yang Dialihkan (Purchase Consideration): Rp 5.000.000.000',
            'Nilai Wajar Aset Bersih yang Diperoleh (Rp 6,2M - Rp 2,0M): Rp 4.200.000.000',
            '**Goodwill yang Diakui**: Rp 5.000.000.000 - Rp 4.200.000.000 = **Rp 800.000.000**.'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Akuisisi PT Herbal Sehat per 1 Oktober 2026',
          lines: [
            { account: 'Aset Teridentifikasi (Berbagai Akun Aset)', debit: 'Rp 6.200.000.000' },
            { account: 'Goodwill (Aset Tak Berwujud)', debit: 'Rp 800.000.000' },
            { account: 'Liabilitas yang Diambil Alih', credit: 'Rp 2.000.000.000', isCredit: true },
            { account: 'Kas / Bank', credit: 'Rp 5.000.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 10: Wesel Bayar Diskonto & Beban Penggajian (TM 6)
// -------------------------------------------------------------
export const CASE_CURRENT_LIABILITIES: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Wesel Bayar Tanpa Bunga (Zero-Interest Note) & Payroll Liabilities',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Transaksi',
      text: 'Pada 1 Oktober 2026, PT Niaga Makmur menerbitkan Wesel Bayar tanpa bunga bernilai nominal Rp 220.000.000 dengan jangka waktu 6 bulan kepada Bank Mandiri. Suku bunga diskonto pasar adalah 10% per tahun (Kas yang diterima perusahaan adalah Rp 209.000.000). Tahun buku berakhir 31 Desember 2026.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Diskonto Wesel & Jurnal Penyesuaian Akhir Tahun',
      prompt: 'Lihat bagaimana diskonto wesel diamortisasi menjadi beban bunga:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Jurnal Penerbitan Wesel (1 Oktober 2026)'
        },
        {
          kind: 'p',
          text: 'Total Diskonto Wesel Bayar = Rp 220.000.000 - Rp 209.000.000 = **Rp 11.000.000** (merupakan kontra akun liabilitas lancar).'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penerbitan Wesel Bayar Berdiskonto',
          lines: [
            { account: 'Kas', debit: 'Rp 209.000.000' },
            { account: 'Diskonto Wesel Bayar (Discount on Notes Payable)', debit: 'Rp 11.000.000' },
            { account: 'Utang Wesel (Notes Payable)', credit: 'Rp 220.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '2. Jurnal Penyesuaian per 31 Desember 2026 (3 Bulan Amortisasi)'
        },
        {
          kind: 'p',
          text: 'Amortisasi Diskonto = (3/6) × Rp 11.000.000 = **Rp 5.500.000**.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penyesuaian Amortisasi Beban Bunga',
          lines: [
            { account: 'Beban Bunga (Interest Expense)', debit: 'Rp 5.500.000' },
            { account: 'Diskonto Wesel Bayar', credit: 'Rp 5.500.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Penyajian di Neraca 31 Des 2026',
          text: 'Liabilitas Lancar:\n• Utang Wesel: Rp 220.000.000\n• Dikurangi: Sisa Diskonto Wesel: (Rp 5.500.000)\n• **Nilai Tercatat Bersih Utang Wesel**: **Rp 214.500.000**.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 11: Provisi Garansi Produk (TM 7 - Assurance vs Service Warranty)
// -------------------------------------------------------------
export const CASE_WARRANTY_PROVISION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Akuntansi Provisi Garansi Produk (Assurance vs Service Warranty)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Penjualan Mesin Cuci Bergaransi',
      text: 'PT Elektronik Maju menjual 1.000 unit mesin cuci pintar sepanjang 2026 seharga Rp 4.000.000 per unit (Total omzet Rp 4.000.000.000). Setiap unit dilengkapi garansi pabrikan 2 tahun (Assurance-Type). Berdasarkan pengalaman historis, klaim perbaikan diperkirakan 3% di tahun pertama dan 5% di tahun kedua dari nilai penjualan (Total estimasi garansi 8% = Rp 320.000.000). Sepanjang 2026, biaya aktual perbaikan suku cadang garansi yang dikeluarkan adalah Rp 95.000.000 tunai.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Jurnal Expense Warranty Approach (PSAK 57)',
      prompt: 'Pahami penandingan beban garansi dengan periode penjualan (Matching Principle):',
      blocks: [
        {
          kind: 'h3',
          text: '1. Jurnal Pengakuan Beban Garansi & Provisi saat Penjualan 2026'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Estimasi Beban Garansi Periode Penjualan',
          lines: [
            { account: 'Beban Garansi (Warranty Expense)', debit: 'Rp 320.000.000' },
            { account: 'Provisi Garansi (Warranty Liability / Provision)', credit: 'Rp 320.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '2. Jurnal Realisasi Biaya Aktual Perbaikan Garansi Sepanjang 2026'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pelaksanaan Klaim Servis Garansi',
          lines: [
            { account: 'Provisi Garansi (Warranty Provision)', debit: 'Rp 95.000.000' },
            { account: 'Persediaan Suku Cadang / Kas / Utang Gaji Teknisi', credit: 'Rp 95.000.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Saldo Akhir Provisi Garansi di Neraca',
          text: 'Saldo akun Provisi Garansi per 31 Desember 2026 adalah Kredit sebesar: Rp 320.000.000 - Rp 95.000.000 = **Rp 225.000.000** (disajikan di kelompok Liabilitas Lancar & Jangka Panjang sesuai estimasi waktu klaim).'
        }
      ]
    }
  ]
};
// -------------------------------------------------------------
// KASUS 12: Valuasi & Amortisasi Obligasi Diskonto (TM 9 - PSAK 71)
// -------------------------------------------------------------
export const CASE_BONDS_AMORTIZATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Penerbitan Obligasi Diskonto & Tabel Amortisasi Bunga Efektif',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Penerbitan Obligasi',
      text: 'Pada 1 Januari 2026, PT Samudera Finance menerbitkan obligasi berjangka waktu 5 tahun dengan nilai nominal Rp 1.000.000.000. Kupon bunga ditetapkan 8% per tahun yang dibayarkan setiap tanggal 31 Desember. Suku bunga pasar (market effective interest rate) pada saat penerbitan adalah 10% per tahun.\n• Faktor PV Pokok (n=5, i=10%): 0,62092\n• Faktor PVA Bunga Anuitas (n=5, i=10%): 3,79079.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Valuasi Harga Jual & Tabel Amortisasi Lengkap',
      prompt: 'Pelajari mekanisme penentuan harga terbit obligasi dan tabel bunga efektif:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perhitungan Harga Penerbitan Obligasi (Present Value)'
        },
        {
          kind: 'ul',
          items: [
            'PV Pokok: Rp 1.000.000.000 × 0,62092 = **Rp 620.920.000**',
            'PV Pembayaran Bunga Tahunan: (8% × Rp 1.000.000.000 = Rp 80jt) × 3,79079 = **Rp 303.263.200**',
            '**Harga Penerbitan Obligasi (Kas Diterima)**: Rp 620.920.000 + Rp 303.263.200 = **Rp 924.183.200**',
            'Diskonto Obligasi Awal = Rp 1.000.000.000 - Rp 924.183.200 = **Rp 75.816.800**'
          ]
        },
        {
          kind: 'table',
          headers: ['Periode (Tahun)', 'Kas Dibayar (8% × Nominal)', 'Beban Bunga (10% × Carrying Value)', 'Amortisasi Diskonto', 'Nilai Tercatat Akhir (Carrying Value)'],
          rows: [
            ['1 Jan 2026', '-', '-', '-', 'Rp 924.183.200'],
            ['31 Des 2026', 'Rp 80.000.000', 'Rp 92.418.320', 'Rp 12.418.320', 'Rp 936.601.520'],
            ['31 Des 2027', 'Rp 80.000.000', 'Rp 93.660.152', 'Rp 13.660.152', 'Rp 950.261.672'],
            ['31 Des 2028', 'Rp 80.000.000', 'Rp 95.026.167', 'Rp 15.026.167', 'Rp 965.287.839'],
            ['31 Des 2029', 'Rp 80.000.000', 'Rp 96.528.784', 'Rp 16.528.784', 'Rp 981.816.623'],
            ['31 Des 2030', 'Rp 80.000.000', 'Rp 98.183.377', 'Rp 18.183.377', 'Rp 1.000.000.000']
          ],
          caption: 'Tabel Amortisasi Diskonto Obligasi Metode Bunga Efektif.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pembayaran Bunga & Amortisasi Tahun 1 (31 Des 2026)',
          lines: [
            { account: 'Beban Bunga Obligasi (Interest Expense)', debit: 'Rp 92.418.320' },
            { account: 'Utang Obligasi / Diskonto Obligasi', credit: 'Rp 12.418.320', isCredit: true },
            { account: 'Kas / Bank', credit: 'Rp 80.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 13: Pelunasan Dini Obligasi (TM 10 - Extinguishment)
// -------------------------------------------------------------
export const CASE_EXTINGUISHMENT_BONDS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Pelunasan Dini Obligasi Sebelum Jatuh Tempo (Extinguishment of Debt)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Fakta Penebusan Obligasi',
      text: 'Pada 1 Januari 2028, PT Samudera Finance memutuskan untuk menebus kembali seluruh obligasinya (dari Kasus 12 di atas) pada harga kurs 102% ditambah biaya transaksi penarikan Rp 5.000.000 tunai. Nilai tercatat obligasi per 1 Januari 2028 adalah Rp 950.261.672.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Laba/Rugi Pelunasan Dini & Jurnal',
      prompt: 'Pahami cara menghitung Reacquisition Price vs Net Carrying Amount:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Hitung Harga Perolehan Kembali (Reacquisition Price) & Rugi Pelunasan'
        },
        {
          kind: 'ul',
          items: [
            'Harga Beli Kembali: 102% × Rp 1.000.000.000 = Rp 1.020.000.000',
            'Biaya Transaksi Penarikan: Rp 5.000.000',
            '**Total Kas yang Dikeluarkan (Reacquisition Price)**: **Rp 1.025.000.000**',
            'Nilai Tercatat Bersih Obligasi (Net Carrying Amount): **Rp 950.261.672**',
            '**Rugi atas Pelunasan Dini Obligasi (Loss on Extinguishment)**: Rp 1.025.000.000 - Rp 950.261.672 = **Rp 74.738.328**'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pelunasan Dini Obligasi per 1 Januari 2028',
          lines: [
            { account: 'Utang Obligasi (Bonds Payable - Net)', debit: 'Rp 950.261.672' },
            { account: 'Rugi atas Pelunasan Dini Obligasi (Loss on Extinguishment)', debit: 'Rp 74.738.328' },
            { account: 'Kas / Bank', credit: 'Rp 1.025.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 14: Saham Treasuri & Kebijakan Dividen (TM 11 - Ekuitas)
// -------------------------------------------------------------
export const CASE_TREASURY_DIVIDENDS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: Akuntansi Saham Treasuri (Cost Method) & Dividen Kas',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Transaksi Ekuitas',
      text: 'PT Ekuitas Prima memiliki 100.000 lembar saham biasa beredar (Nilai Pari Rp 1.000/lbr).\n1. Membeli kembali 10.000 lembar sahamnya sendiri sebagai Saham Treasuri seharga Rp 3.000/lbr tunai.\n2. Menjual kembali 4.000 lembar saham treasuri seharga Rp 3.500/lbr tunai.\n3. Menjual kembali 3.000 lembar saham treasuri seharga Rp 2.200/lbr tunai.\n4. Mengumumkan dan membagikan dividen kas sebesar Rp 200 per lembar saham yang beredar.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Jurnal Saham Treasuri & Pembagian Dividen',
      prompt: 'Pahami mengapa transaksi saham treasuri TIDAK PERNAH masuk Laba Rugi:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Pembelian 10.000 Lembar Saham Treasuri (Kos Rp 30.000.000)'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Perolehan Saham Treasuri (Metode Kos)',
          lines: [
            { account: 'Saham Treasuri (Treasury Shares)', debit: 'Rp 30.000.000' },
            { account: 'Kas', credit: 'Rp 30.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '2. Penjualan 4.000 Lembar di Atas Kos (Harga Rp 3.500 vs Kos Rp 3.000)'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penjualan Saham Treasuri di Atas Kos',
          lines: [
            { account: 'Kas (4.000 × Rp 3.500)', debit: 'Rp 14.000.000' },
            { account: 'Saham Treasuri (4.000 × Rp 3.000)', credit: 'Rp 12.000.000', isCredit: true },
            { account: 'Agio Saham - Saham Treasuri (Share Premium - Treasury)', credit: 'Rp 2.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '3. Penjualan 3.000 Lembar di Bawah Kos (Harga Rp 2.200 vs Kos Rp 3.000 - Defisit Rp 2.400.000)'
        },
        {
          kind: 'p',
          text: 'Defisit Rp 2.400.000 ditutup dari saldo Agio Saham Treasuri sebesar Rp 2.000.000, dan sisanya Rp 400.000 mendebit **Saldo Laba (Retained Earnings)**!'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penjualan Saham Treasuri di Bawah Kos',
          lines: [
            { account: 'Kas (3.000 × Rp 2.200)', debit: 'Rp 6.600.000' },
            { account: 'Agio Saham - Saham Treasuri', debit: 'Rp 2.000.000' },
            { account: 'Saldo Laba (Retained Earnings)', debit: 'Rp 400.000' },
            { account: 'Saham Treasuri (3.000 × Rp 3.000)', credit: 'Rp 9.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '4. Pembagian Dividen Kas'
        },
        {
          kind: 'p',
          text: 'Saham Beredar yang Berhak Menerima Dividen = 100.000 - Sisa Saham Treasuri (3.000 lbr) = **97.000 lembar**.\nTotal Dividen Kas = 97.000 lbr × Rp 200 = **Rp 19.400.000**.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Deklarasi & Pembayaran Dividen Kas',
          lines: [
            { account: 'Saldo Laba / Dividen Kas', debit: 'Rp 19.400.000' },
            { account: 'Utang Dividen Kas', credit: 'Rp 19.400.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 15: Obligasi Konversi (TM 12 - With-and-Without Method)
// -------------------------------------------------------------
export const CASE_CONVERTIBLE_BONDS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 15: Pemisahan Komponen Liabilitas & Ekuitas Obligasi Konversi (PSAK 50)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Penerbitan Obligasi Konversi',
      text: 'Pada 1 Januari 2026, PT Inovasi Digital menerbitkan 2.000 lembar Obligasi Konversi berjangka 4 tahun bernilai nominal Rp 1.000.000 per lembar (Total Nilai Penerbitan = Rp 2.000.000.000). Kupon bunga 6% per tahun dibayar setiap 31 Desember. Setiap lembar obligasi dapat dikonversi menjadi 200 lembar saham biasa. Obligasi serupa tanpa hak konversi di pasar memiliki suku bunga 9% per tahun (PVIF n=4, i=9% = 0,70843; PVIFA n=4, i=9% = 3,23972).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan With-and-Without & Jurnal Konversi',
      prompt: 'Pahami cara memisahkan utang dari premi konversi ekuitas:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Pemisahan Komponen Liabilitas vs Ekuitas'
        },
        {
          kind: 'ul',
          items: [
            'PV Pokok Liabilitas Utang: Rp 2.000.000.000 × 0,70843 = Rp 1.416.860.000',
            'PV Bunga Tahunan (6% × Rp 2.000.000.000 = Rp 120jt) × 3,23972 = Rp 388.766.400',
            '**Nilai Wajar Komponen Liabilitas (Liability Component)** = Rp 1.416.860.000 + Rp 388.766.400 = **Rp 1.805.626.400**',
            'Total Hasil Penerbitan (Total Proceeds) = Rp 2.000.000.000',
            '**Nilai Komponen Ekuitas (Opsi Konversi Saham)** = Rp 2.000.000.000 - Rp 1.805.626.400 = **Rp 194.373.600**'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penerbitan Obligasi Konversi (1 Jan 2026)',
          lines: [
            { account: 'Kas', debit: 'Rp 2.000.000.000' },
            { account: 'Utang Obligasi (Bonds Payable - Net)', credit: 'Rp 1.805.626.400', isCredit: true },
            { account: 'Premi Saham - Opsi Konversi Ekuitas (Share Premium - Conversion Equity)', credit: 'Rp 194.373.600', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 16: Perhitungan Basic & Diluted EPS (TM 13 - PSAK 56)
// -------------------------------------------------------------
export const CASE_EPS_COMPLEX: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 16: Perhitungan Komprehensif Basic EPS & Diluted EPS',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Keuangan PT Multi Korpora (Tahun 2026)',
      text: '• Laba Bersih Tahun 2026: Rp 1.200.000.000. Tarif Pajak Penghasilan: 20%.\n• Saham Biasa Beredar: 500.000 lembar sepanjang tahun (WASO = 500.000 lbr).\n• Saham Preferen Kumulatif 10%: 20.000 lembar nilai nominal Rp 50.000/lbr (Dividen = Rp 100.000.000).\n• Obligasi Konversi 8%: Rp 500.000.000 diterbitkan pada par, dapat dikonversi menjadi 50.000 lembar saham biasa (Beban bunga tahunan Rp 40.000.000).\n• Opsi Saham Eksekutif: 20.000 lembar dengan harga pelaksanaan (exercise price) Rp 15.000/lbr. Harga pasar rata-rata saham sepanjang 2026 adalah Rp 25.000/lbr.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Basic EPS dan Diluted EPS',
      prompt: 'Pahami penerapan If-Converted Method dan Treasury Stock Method:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perhitungan Laba Per Saham Dasar (Basic EPS)'
        },
        {
          kind: 'formula',
          text: '\\text{Basic EPS} = \\frac{\\text{Laba Bersih} - \\text{Dividen Saham Preferen}}{\\text{WASO}} = \\frac{Rp\\ 1.200.000.000 - Rp\\ 100.000.000}{500.000\\ \\text{lembar}} = Rp\\ 2.200\\ /\\text{lembar}'
        },
        {
          kind: 'h3',
          text: '2. Pengujian Efek Dilutif & Perhitungan Diluted EPS'
        },
        {
          kind: 'ul',
          items: [
            '**Obligasi Konversi (If-Converted)**: Penghematan bunga neto pajak = Rp 40.000.000 × (1 - 0,20) = **+Rp 32.000.000**. Tambahan saham = **+50.000 lembar**.',
            '**Opsi Saham (Treasury Stock Method)**: Saham diterbitkan dari opsi = 20.000 lembar. Dana masuk = 20.000 × Rp 15.000 = Rp 300.000.000. Saham dibeli kembali di pasar = Rp 300.000.000 / Rp 25.000 = 12.000 lembar. **Tambahan Saham Bersih Dilutif** = 20.000 - 12.000 = **+8.000 lembar**.'
          ]
        },
        {
          kind: 'formula',
          text: '\\text{Diluted EPS} = \\frac{(Rp\\ 1.100.000.000) + Rp\\ 32.000.000}{500.000 + 50.000 + 8.000\\ \\text{lembar}} = \\frac{Rp\\ 1.132.000.000}{558.000\\ \\text{lembar}} = Rp\\ 2.028,67\\ /\\text{lembar}',
          note: 'Karena Diluted EPS (Rp 2.028,67) < Basic EPS (Rp 2.200), semua sekuritas bersifat DILUTIF dan wajib disajikan di Laporan Laba Rugi!'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 17: Investasi Efek & Metode Ekuitas (TM 14 - PSAK 71 & 15)
// -------------------------------------------------------------
export const CASE_EQUITY_METHOD_INVESTMENT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 17: Investasi Asosiasi Metode Ekuitas (PSAK 15) vs FVOCI (PSAK 71)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Transaksi Investasi Saham',
      text: 'Pada 2 Januari 2026, PT Investor Utama membeli 30.000 lembar saham (30% hak suara) PT Asosiasi Mandiri seharga Rp 900.000.000 tunai (sehingga memiliki pengaruh signifikan). Sepanjang 2026:\n• PT Asosiasi Mandiri melaporkan Laba Bersih sebesar Rp 400.000.000.\n• PT Asosiasi Mandiri mengumumkan dan membayar Dividen Kas sebesar Rp 150.000.000.\n• Nilai wajar 30% saham tersebut per 31 Desember 2026 adalah Rp 1.050.000.000.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Jurnal Metode Ekuitas Lengkap',
      prompt: 'Pahami mengapa dividen mengurangi saldo investasi pada Equity Method:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Jurnal Perolehan Awal (2 Jan 2026)'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pembelian Investasi Saham Asosiasi',
          lines: [
            { account: 'Investasi pada Entitas Asosiasi (Investment in Associates)', debit: 'Rp 900.000.000' },
            { account: 'Kas / Bank', credit: 'Rp 900.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '2. Pengakuan Bagian Laba Bersih Asosiasi (30% × Rp 400.000.000 = Rp 120.000.000)'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pengakuan Laba Entitas Asosiasi',
          lines: [
            { account: 'Investasi pada Entitas Asosiasi', debit: 'Rp 120.000.000' },
            { account: 'Bagian Laba atas Entitas Asosiasi (Investment Income)', credit: 'Rp 120.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '3. Penerimaan Dividen Kas (30% × Rp 150.000.000 = Rp 45.000.000)'
        },
        {
          kind: 'p',
          text: 'Pada Metode Ekuitas, dividen diperlakukan sebagai **pengembalian sebagian investasi**, sehingga mendebit Kas dan MENGURANGI (KREDIT) akun Investasi!'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penerimaan Dividen Kas dari Asosiasi',
          lines: [
            { account: 'Kas', debit: 'Rp 45.000.000' },
            { account: 'Investasi pada Entitas Asosiasi', credit: 'Rp 45.000.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Saldo Akhir Akun Investasi di Neraca 31 Des 2026',
          text: 'Saldo Investasi = Kos Awal (Rp 900jt) + Bagian Laba (Rp 120jt) - Dividen (Rp 45jt) = **Rp 975.000.000**.\n*(Perubahan nilai wajar pasar Rp 1.050.000.000 DIABAIKAN pada Metode Ekuitas!)*'
        }
      ]
    }
  ]
};