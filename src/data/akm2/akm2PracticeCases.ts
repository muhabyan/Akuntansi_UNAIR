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

// -------------------------------------------------------------
// KASUS 4B: Aset Tidak Lancar Dimiliki untuk Dijual (PSAK 58) & Hak Tanah (TM 4)
// -------------------------------------------------------------
export const CASE_HELD_FOR_SALE_LAND: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4B: Reklasifikasi Aset Dimiliki untuk Dijual (PSAK 58) & Hak Tanah ISAK 25',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'Pada 1 Juli 2026, manajemen PT Graha Sentosa berkomitmen pada rencana penjualan mesin lini produksi lama dan memenuhi seluruh kriteria klasifikasi Aset Dimiliki untuk Dijual (Held for Sale - PSAK 58). Data aset pada 1 Juli 2026:\n• Harga Perolehan Mesin: Rp 600.000.000\n• Akumulasi Penyusutan s.d. 30 Juni 2026: Rp 200.000.000 (Nilai Buku = Rp 400.000.000)\n• Nilai Wajar Mesin: Rp 350.000.000\n• Estimasi Biaya Pelepasan/Penjualan (Cost to Sell): Rp 20.000.000\n• Nilai Realisasi Neto (Fair Value Less Cost to Sell): Rp 330.000.000\n\nPada 15 November 2026, mesin tersebut akhirnya terjual tunai seharga Rp 345.000.000 dengan biaya pelepasan aktual Rp 18.000.000 (Kas neto diterima = Rp 327.000.000).'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Pembahasan & Jurnal PSAK 58 Lengkap',
      prompt: 'Pahami aturan penghentian depresiasi dan batas pemulihan nilai PSAK 58:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Pengukuran Awal & Reklasifikasi (1 Juli 2026)'
        },
        {
          kind: 'p',
          text: 'Berdasarkan PSAK 58, aset yang dimiliki untuk dijual diukur pada **nilai yang lebih rendah antara Nilai Tercatat (Rp 400 jt) vs Nilai Wajar Setelah Dikurangi Biaya Penjualan (Rp 330 jt)**.\nPenurunan nilai sebesar Rp 70.000.000 (Rp 400 jt - Rp 330 jt) diakui langsung di Laba Rugi!'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Reklasifikasi & Penurunan Nilai ke Aset Dimiliki untuk Dijual (1 Juli 2026)',
          lines: [
            { account: 'Aset Tidak Lancar Dimiliki untuk Dijual (Held for Sale)', debit: 'Rp 330.000.000' },
            { account: 'Akumulasi Penyusutan Mesin', debit: 'Rp 200.000.000' },
            { account: 'Rugi Penurunan Nilai Aset Dimiliki untuk Dijual (Laba Rugi)', debit: 'Rp 70.000.000' },
            { account: 'Mesin Pabrik', credit: 'Rp 600.000.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Aturan Kunci Penyusutan PSAK 58',
          text: 'Sejak tanggal reklasifikasi (1 Juli 2026), **ASET DIMILIKI UNTUK DIJUAL TIDAK BOLEH DISUSUTKAN LAGI**, meskipun aset tersebut masih berada di lokasi pabrik!'
        },
        {
          kind: 'h3',
          text: '2. Pelepasan / Penjualan Akhir (15 November 2026)'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penjualan Aset Dimiliki untuk Dijual (15 Nov 2026)',
          lines: [
            { account: 'Kas (Neto setelah biaya penjualan: 345 jt - 18 jt)', debit: 'Rp 327.000.000' },
            { account: 'Rugi Pelepasan Aset Dimiliki untuk Dijual (330 jt - 327 jt)', debit: 'Rp 3.000.000' },
            { account: 'Aset Tidak Lancar Dimiliki untuk Dijual', credit: 'Rp 330.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 5B: Riset & Pengembangan (R&D) & Lisensi Paten (TM 5)
// -------------------------------------------------------------
export const CASE_RD_CAPITALIZATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5B: Kriteria Kapitalisasi Riset & Pengembangan (PSAK 19 - PIRATE Criteria)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'PT Biofarma Unggul mengembangkan formula vaksin sintetis baru sepanjang tahun 2026. Rincian pengeluaran kas:\n1. Jan - April (Fase Riset): Riset laboratorium pencarian senyawa aktif Rp 500.000.000.\n2. Mei - Juli (Fase Pengembangan Awal): Pengujian sebelum kelayakan teknis dan komersial terbukti Rp 300.000.000.\n3. 1 Agustus 2026: Proyek secara resmi memenuhi seluruh 6 Kriteria PIRATE PSAK 19 (kelayakan teknis, niat menyelesaikan, kemampuan menjual, pasar terbukti, sumber daya ada, biaya terukur andal).\n4. Agustus - Oktober (Fase Pengembangan Lanjut): Pembuatan prototipe uji klinis Rp 850.000.000.\n5. November: Biaya legal pendaftaran hak paten ke Kemenkumham dan biaya uji sertifikasi BPOM Rp 150.000.000.\n6. Desember: Biaya promosi peluncuran produk dan iklan awal Rp 120.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Pembahasan Klasifikasi & Jurnal PSAK 19',
      prompt: 'Pahami batas tegas antara beban riset vs aset takberwujud paten:',
      blocks: [
        {
          kind: 'table',
          headers: ['Komponen Pengeluaran', 'Nominal', 'Perlakuan Akuntansi (PSAK 19)', 'Alasan Standar'],
          rows: [
            ['Fase Riset (Jan - Apr)', 'Rp 500.000.000', 'Beban Riset (Laba Rugi)', 'Ketidakpastian manfaat ekonomi masa depan sangat tinggi.'],
            ['Pengembangan Awal (Mei - Jul)', 'Rp 300.000.000', 'Beban Pengembangan (Laba Rugi)', 'Belum memenuhi 6 kriteria kelayakan PIRATE.'],
            ['Pengembangan Lanjut (Ags - Okt)', 'Rp 850.000.000', 'KAPITALISASI (Aset Takberwujud - Paten dlm Proses)', 'Telah memenuhi 6 kriteria PIRATE secara andal.'],
            ['Biaya Legal Pendaftaran Paten & BPOM', 'Rp 150.000.000', 'KAPITALISASI (Aset Takberwujud - Hak Paten)', 'Biaya langsung atribusi pendaftaran hak hukum.'],
            ['Biaya Promosi Peluncuran & Iklan', 'Rp 120.000.000', 'Beban Penjualan (Laba Rugi)', 'Biaya pemasaran dilarang dikapitalisasi ke aset takberwujud.']
          ],
          caption: 'Evaluasi kapitalisasi R&D berdasarkan PSAK 19.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Kapitalisasi Hak Paten Resmi (Per 30 November 2026)',
          lines: [
            { account: 'Aset Takberwujud - Hak Paten (850 jt + 150 jt)', debit: 'Rp 1.000.000.000' },
            { account: 'Beban Riset & Pengembangan (500 jt + 300 jt)', debit: 'Rp 800.000.000' },
            { account: 'Beban Pemasaran & Iklan', debit: 'Rp 120.000.000' },
            { account: 'Kas / Utang', credit: 'Rp 1.920.000.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Total Nilai Buku Hak Paten Terdaftar',
          text: 'Paten diakui di neraca sebesar **Rp 1.000.000.000** dan diamortisasi secara garis lurus sepanjang umur hukum 20 tahun atau umur ekonomis (mana yang lebih pendek) mulai tanggal paten siap digunakan.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 6B: Skema Bonus Karyawan (Profit-Sharing Plan) & Cuti Berbayar (TM 6)
// -------------------------------------------------------------
export const CASE_PAYROLL_BONUS_PROFIT_SHARING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6B: Perhitungan Bonus Karyawan Metode Aljabar & Cuti Berbayar (PSAK 24)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'PT Surya Gemilang memiliki perjanjian kerja dengan para eksekutif bahwa mereka berhak atas pembagian bonus tahunan sebesar **10% dari Laba Bersih**. Laba operasi sebelum bonus dan pajak penghasilan untuk tahun 2026 adalah **Rp 1.000.000.000**. Tarif pajak penghasilan badan adalah **22%**.\nBonus diperlakukan sebagai beban pengurang pajak (tax-deductible expense).'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Aljabar & Jurnal Bonus',
      prompt: 'Selesaikan 2 sistem persamaan linier dua variabel (Bonus & Pajak):',
      blocks: [
        {
          kind: 'p',
          text: 'Definisi Persamaan:\n• $B = 0,10 \times (1.000.000.000 - B - P)$\n• $P = 0,22 \times (1.000.000.000 - B)$'
        },
        {
          kind: 'ul',
          items: [
            'Substitusikan persamaan P ke dalam B:',
            '$B = 0,10 \times [1.000.000.000 - B - 0,22 \times (1.000.000.000 - B)]$',
            '$B = 0,10 \times [1.000.000.000 - B - 220.000.000 + 0,22B]$',
            '$B = 0,10 \times [780.000.000 - 0,78B]$',
            '$B = 78.000.000 - 0,078B$',
            '$1,078B = 78.000.000$',
            '**Bonus (B) = Rp 72.356.215**',
            'Pajak (P) = 0,22 × (1.000.000.000 - 72.356.215) = 0,22 × 927.643.785 = **Rp 204.081.633**'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penyesuaian Akrual Bonus Eksekutif per 31 Desember 2026',
          lines: [
            { account: 'Beban Bonus Karyawan (Operating Expense)', debit: 'Rp 72.356.215' },
            { account: 'Utang Bonus Karyawan (Current Liability)', credit: 'Rp 72.356.215', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 7B: Provisi Gugatan Hukum & Kontrak Memberatkan (TM 7)
// -------------------------------------------------------------
export const CASE_LITIGATION_ONEROUS_CONTRACT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7B: Provisi Gugatan Hukum Pengadilan & Kontrak Memberatkan (PSAK 57)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Perkara Akhir Tahun',
      text: 'Per 31 Desember 2026, PT Kimia Lestari menghadapi dua kondisi ketidakpastian hukum:\n1. **Gugatan Pencemaran Sungai:** Warga menggugat ganti rugi Rp 1.500.000.000. Tim kuasa hukum independen menyatakan kemungkinan kalah adalah **85% (Probable)**, dengan estimasi penyelesaian paling andal berkisar antara Rp 800.000.000 s.d. Rp 1.200.000.000, di mana titik tengah Rp 1.000.000.000 dipandang sebagai estimasi terbaik.\n2. **Kontrak Sewa Memberatkan (Onerous Contract):** Perusahaan menyewa gudang dengan sisa masa sewa 2 tahun yang tidak dapat dibatalkan (non-cancellable lease). Beban sewa tahunan Rp 100.000.000 (total komitmen Rp 200.000.000). Karena relokasi pabrik, gudang tidak terpakai sama sekali dan tidak dapat disubsewakan. Pemilik gudang menawarkan pembatalan kontrak dengan membayar denda penalti sekaligus sebesar Rp 130.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Analisis Standar PSAK 57 & Jurnal',
      prompt: 'Pahami pengakuan liabilitas provisi di neraca vs CALK:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perkara Gugatan Lingkungan (Probable > 50% & Estimasi Andal)'
        },
        {
          kind: 'p',
          text: 'Karena kemungkinan arus keluar sumber daya bersifat **Probable (85%)** dan estimasi terbaik bernilai **Rp 1.000.000.000**, maka WAJIB dicatat sebagai LIABILITAS PROVISI di neraca!'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pembentukan Provisi Gugatan Hukum',
          lines: [
            { account: 'Beban Kerugian Gugatan Hukum (Laba Rugi)', debit: 'Rp 1.000.000.000' },
            { account: 'Provisi Gugatan Hukum (Liabilitas Lancar/Jangka Panjang)', credit: 'Rp 1.000.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '2. Kontrak Memberatkan (Onerous Contract - PSAK 57 Par 66-69)'
        },
        {
          kind: 'p',
          text: 'Liabilitas kontrak memberatkan diukur pada **biaya terendah yang tidak dapat dihindari (Least Net Cost of Exiting)** antara:\n• Biaya melanjutkan kontrak sewa (Rp 200.000.000)\n• Denda penalti pembatalan kontrak (Rp 130.000.000)\nNilai terendah yang dipilih = **Rp 130.000.000**.'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pengakuan Provisi Kontrak Memberatkan',
          lines: [
            { account: 'Beban Kontrak Memberatkan (Laba Rugi)', debit: 'Rp 130.000.000' },
            { account: 'Provisi Kontrak Memberatkan (Liabilitas Jangka Pendek)', credit: 'Rp 130.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 8B: Master Kasus Terpadu Simulasi UTS (TM 8)
// -------------------------------------------------------------
export const CASE_UTS_MASTER_SIMULATION: ContentBlock = {
  kind: 'example',
  title: 'Master Kasus Terpadu Simulasi UTS: PT Mahakarya Nusantara Tbk',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Skenario Soal Ujian Komprehensif',
      text: 'PT Mahakarya Nusantara Tbk menyajikan transaksi tahun 2026 yang menguji seluruh materi TM 1 s.d. TM 7:\n1. 1 Jan: Menerbitkan wesel bayar tanpa bunga senilai nominal Rp 500.000.000 (jatuh tempo 1 tahun, suku bunga pasar 10%) untuk melunasi utang usaha.\n2. 1 Feb: Membeli tanah dan bangunan kantor secara lump-sum tunai Rp 3.000.000.000. Nilai wajar penilai: Tanah Rp 2.400.000.000, Bangunan Rp 800.000.000.\n3. 1 April: Memulai konstruksi mandiri pabrik baru. Pengeluaran: 1 April Rp 600 jt, 1 September Rp 900 jt. Pinjaman khusus konstruksi 12% Rp 800 jt. Pinjaman umum 10% Rp 1.000.000.000. Konstruksi selesai 31 Desember.\n4. 1 Juli: Menjual 2.000 unit produk elektronik dengan garansi 1 tahun. Estimasi biaya garansi 4% dari penjualan Rp 4.000.000.000. Klaim garansi aktual yang dibayar hingga akhir tahun Rp 90.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Solusi Lengkap & Rekonsiliasi Neraca UTS',
      prompt: 'Pelajari sintesis 4 transaksi inti akuntansi keuangan menengah:',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penyelesaian 1 (Wesel Tanpa Bunga)**: PV Kas = Rp 500 jt / 1,10 = Rp 454.545.455. Diskonto = Rp 45.454.545. Beban bunga tahun 2026 = Rp 45.454.545.',
            '**Penyelesaian 2 (Lump-Sum)**: Total Nilai Wajar = Rp 3,2 M. Tanah (2,4 / 3,2) × Rp 3 M = **Rp 2.250.000.000**; Bangunan (0,8 / 3,2) × Rp 3 M = **Rp 750.000.000**.',
            '**Penyelesaian 3 (Kapitalisasi Bunga Konstruksi)**:\n• WAAE = (600 jt × 9/12) + (900 jt × 4/12) = 450 jt + 300 jt = **Rp 750.000.000**.\n• Seluruh WAAE (Rp 750 jt) ditutup oleh pinjaman khusus (Rp 800 jt @ 12%).\n• Bunga yang Dihindari (Avoidable Interest) = Rp 750 jt × 12% = **Rp 90.000.000** (Dikapitalisasi ke akun Bangunan Dalam Konstruksi!).',
            '**Penyelesaian 4 (Provisi Garansi Produk)**:\n• Beban Garansi Estimasi = 4% × Rp 4 M = **Rp 160.000.000**.\n• Klaim Terjadi Aktual = Rp 90.000.000.\n• Saldo Akhir Provisi Garansi di Neraca 31 Des 2026 = 160 jt - 90 jt = **Rp 70.000.000**.'
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 9B: Obligasi Diterbitkan di Antara Tanggal Bunga & Biaya Penerbitan (TM 9)
// -------------------------------------------------------------
export const CASE_BONDS_BETWEEN_DATES_ISSUE_COSTS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9B: Obligasi Diterbitkan di Antara Tanggal Bunga & Biaya Penerbitan (PSAK 71)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'PT Semen Perkasa menerbitkan obligasi 10% bernilai nominal Rp 1.000.000.000, tertanggal 1 Januari 2026, jatuh tempo 5 tahun. Bunga dibayarkan semesteran setiap 1 Juli dan 1 Januari.\nKarena keterlambatan persetujuan administratif, obligasi baru resmi dijual pada **1 Maret 2026** pada harga kurs **102** (premi 2%) ditambah **bunga berjalan (accrued interest)** selama 2 bulan (Januari-Februari). Perusahaan membayar biaya penerbitan obligasi (legal & penjamin emisi) sebesar Rp 15.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Bunga Berjalan & Jurnal Lengkap',
      prompt: 'Kuasai pencatatan bunga berjalan dan perlakuan biaya penerbitan obligasi:',
      blocks: [
        {
          kind: 'ul',
          items: [
            '1. Harga Jual Pokok Obligasi (102% × Rp 1.000.000.000) = Rp 1.020.000.000',
            '2. Bunga Berjalan (1 Jan s.d. 1 Mar = 2 bulan):\nRp 1.000.000.000 × 10% × (2 / 12) = **Rp 16.666.667**',
            '3. Total Kas Diterima dari Investor = Rp 1.020.000.000 + Rp 16.666.667 = **Rp 1.036.666.667**',
            '4. Biaya Penerbitan Obligasi Rp 15.000.000 (PSAK 71 mewajibkan mengurangi nilai tercatat awal liabilitas, yaitu mengurangi saldo Premi Obligasi).'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penerbitan Obligasi di Antara Tanggal Bunga (1 Maret 2026)',
          lines: [
            { account: 'Kas (Neto biaya penerbitan: 1.036.666.667 - 15.000.000)', debit: 'Rp 1.021.666.667' },
            { account: 'Utang Obligasi (Bonds Payable - Face Value)', credit: 'Rp 1.000.000.000', isCredit: true },
            { account: 'Premi Utang Obligasi (Neto: 20 jt premi - 15 jt biaya terbit)', credit: 'Rp 5.000.000', isCredit: true },
            { account: 'Beban Bunga Obligasi / Utang Bunga Berjalan', credit: 'Rp 16.666.667', isCredit: true }
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Pembayaran Bunga Semesteran Pertama (1 Juli 2026)',
          lines: [
            { account: 'Beban Bunga Obligasi (6 bulan penuh)', debit: 'Rp 50.000.000' },
            { account: 'Kas (Kupon 6 bulan: 1 M × 10% × 6/12)', credit: 'Rp 50.000.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Dampak Bersih Beban Bunga Semester 1',
          text: 'Beban bunga bersih yang ditanggung perusahaan untuk periode 1 Maret s.d. 1 Juli (4 bulan) adalah Beban Bunga Didebit Rp 50 jt dikurangi Kredit awal Rp 16.666.667 = **Rp 33.333.333** (Tepat setara dengan 4 bulan: 1 M × 10% × 4/12!).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 10B: Restrukturisasi Utang Bermasalah & Uji 10% (TM 10)
// -------------------------------------------------------------
export const CASE_TROUBLED_DEBT_RESTRUCTURING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10B: Restrukturisasi Utang Bermasalah (Debt-for-Equity Swap & IFRIC 19)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'PT Tekstil Sejahtera mengalami defisit likuiditas berat dan memiliki kewajiban utang pinjaman bank pokok Rp 3.000.000.000 ditambah akumulasi bunga tertunggak Rp 300.000.000 (Total Carrying Amount Liabilitas = Rp 3.300.000.000). Bank Permata menyetujui penyelesaian penuh kewajiban tersebut melalui penerbitan **150.000 lembar saham biasa** PT Tekstil Sejahtera (Nilai nominal Rp 10.000/lembar, Nilai wajar pasar per tanggal kesepakatan Rp 16.000/lembar).'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Analisis Standar IFRIC 19 & Jurnal Swap',
      prompt: 'Pahami pemisahan agio saham dan laba penghentian utang (Gain on Debt Extinguishment):',
      blocks: [
        {
          kind: 'ul',
          items: [
            '1. Nilai Wajar Saham yang Diserahkan = 150.000 lembar × Rp 16.000 = **Rp 2.400.000.000**',
            '2. Modal Saham Biasa (Nilai Nominal) = 150.000 lembar × Rp 10.000 = **Rp 1.500.000.000**',
            '3. Agio Saham Biasa (Share Premium) = Rp 2.400.000.000 - Rp 1.500.000.000 = **Rp 900.000.000**',
            '4. Keuntungan Pelunasan Utang (Gain on Debt Restructuring) = Nilai Tercatat Utang (Rp 3.300.000.000) - Nilai Wajar Saham (Rp 2.400.000.000) = **Rp 900.000.000** (Diakui di Laba Rugi periode berjalan!).'
          ]
        },
        {
          kind: 'journal',
          caption: 'Jurnal Penyelesaian Utang dengan Saham (Debt-for-Equity Swap)',
          lines: [
            { account: 'Utang Bank (Pokok)', debit: 'Rp 3.000.000.000' },
            { account: 'Utang Bunga (Accrued Interest)', debit: 'Rp 300.000.000' },
            { account: 'Modal Saham Biasa', credit: 'Rp 1.500.000.000', isCredit: true },
            { account: 'Agio Saham Biasa (Share Premium)', credit: 'Rp 900.000.000', isCredit: true },
            { account: 'Keuntungan Pelunasan Utang (Laba Rugi)', credit: 'Rp 900.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 11B: Pembagian Dividen Saham Preferen Kumulatif & Berpartisipasi (TM 11)
// -------------------------------------------------------------
export const CASE_PREFERRED_STOCK_DIVIDEND_ALLOCATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11B: Alokasi Dividen Saham Preferen Kumulatif & Berpartisipasi Penuh',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Struktur Ekuitas',
      text: 'PT Megatama memiliki struktur modal:\n• Saham Preferen 7%, Nilai Nominal Rp 10.000, Beredar 100.000 lembar (Total Par = Rp 1.000.000.000).\n• Saham Biasa, Nilai Nominal Rp 1.000, Beredar 2.000.000 lembar (Total Par = Rp 2.000.000.000).\nDividen preferen menunggak selama **2 tahun sebelumnya** (2024 & 2025). Pada akhir 2026, perusahaan mendeklarasikan pembagian total dividen kas sebesar **Rp 450.000.000**.\n\nHitung alokasi dividen jika Saham Preferen bersifat: **KUMULATIF DAN BERPARTISIPASI PENUH (Fully Participating)**!'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Tabel Perhitungan 4 Tahap Alokasi Dividen',
      prompt: 'Kuasai 4 urutan matematis pembagian dividen partisipasi:',
      blocks: [
        {
          kind: 'table',
          headers: ['Tahap Alokasi', 'Saham Preferen (Par 1 M)', 'Saham Biasa (Par 2 M)', 'Total Kas'],
          rows: [
            ['1. Tunggakan Dividen (Arrears 2 Thn: 2 × 7% × 1 M)', 'Rp 140.000.000', 'Rp 0', 'Rp 140.000.000'],
            ['2. Dividen Tahun Berjalan 2026 (Preferen 7%)', 'Rp 70.000.000', 'Rp 0', 'Rp 70.000.000'],
            ['3. Dividen Tahun Berjalan Biasa (Biasa 7% × 2 M)', 'Rp 0', 'Rp 140.000.000', 'Rp 140.000.000'],
            ['Sisa Dana untuk Partisipasi (450 jt - 350 jt)', '-', '-', 'Rp 100.000.000'],
            ['4. Partisipasi Penuh (Rasio Par 1 : 2)', 'Rp 33.333.333 (1/3)', 'Rp 66.666.667 (2/3)', 'Rp 100.000.000'],
            ['TOTAL DIVIDEN DITERIMA', 'Rp 243.333.333', 'Rp 206.666.667', 'Rp 450.000.000']
          ],
          caption: 'Alokasi komprehensif dividen kumulatif dan berpartisipasi penuh.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 12B: Opsi Saham Karyawan (Share-Based Payment - PSAK 53) (TM 12)
// -------------------------------------------------------------
export const CASE_STOCK_OPTIONS_SHARE_BASED_PAYMENT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12B: Kompensasi Opsi Saham Karyawan (PSAK 53 / IFRS 2 - Black-Scholes Model)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'Pada 1 Januari 2026 (Grant Date), PT Teknologi Maju memberikan opsi saham kepada 20 manajer kunci untuk membeli masing-masing 1.000 lembar saham biasa (nominal Rp 1.000) pada harga eksekusi Rp 5.000. Syarat kerja: manajer harus mengabdi selama **2 tahun** (2026 s.d. 2027).\nModel penetapan harga opsi Black-Scholes menghasilkan nilai wajar opsi pada tanggal hibah sebesar **Rp 3.000 per opsi** (Total nilai wajar kompensasi = 20.000 opsi × Rp 3.000 = **Rp 60.000.000**).\nPada 15 Januari 2028, seluruh 20 manajer mengeksekusi opsi saham mereka secara tunai.'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Jurnal Bertahap Kompensasi Opsi Saham',
      prompt: 'Kuasai pengakuan beban kompensasi selama masa vesting dan eksekusi:',
      blocks: [
        {
          kind: 'journal',
          caption: '1. Jurnal Beban Kompensasi Tahun 1 (31 Desember 2026: 60 jt / 2 tahun)',
          lines: [
            { account: 'Beban Kompensasi Karyawan (Operating Expense)', debit: 'Rp 30.000.000' },
            { account: 'Modal Saham - Opsi Saham (Share Options - Equity)', credit: 'Rp 30.000.000', isCredit: true }
          ]
        },
        {
          kind: 'journal',
          caption: '2. Jurnal Beban Kompensasi Tahun 2 (31 Desember 2027)',
          lines: [
            { account: 'Beban Kompensasi Karyawan', debit: 'Rp 30.000.000' },
            { account: 'Modal Saham - Opsi Saham', credit: 'Rp 30.000.000', isCredit: true }
          ]
        },
        {
          kind: 'journal',
          caption: '3. Jurnal Eksekusi Opsi Saham Menjadi Saham Biasa (15 Januari 2028)',
          lines: [
            { account: 'Kas (20.000 lembar × Rp 5.000)', debit: 'Rp 100.000.000' },
            { account: 'Modal Saham - Opsi Saham (Tutup saldo opsi)', debit: 'Rp 60.000.000' },
            { account: 'Modal Saham Biasa (20.000 × Rp 1.000 par)', credit: 'Rp 20.000.000', isCredit: true },
            { account: 'Agio Saham Biasa (Share Premium - Ordinary)', credit: 'Rp 140.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 13B: WASO Bertahap & Uji Anti-Dilutif Lengkap (TM 13)
// -------------------------------------------------------------
export const CASE_COMPREHENSIVE_DILUTED_EPS_RANKING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13B: Perhitungan WASO Komprehensif & Uji Anti-Dilutif Bertingkat (PSAK 56)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Perhitungan EPS',
      text: 'PT Bintang Nusantara melaporkan Laba Bersih tahun 2026 sebesar **Rp 2.500.000.000**. Tidak ada saham preferen.\nMutasi Saham Biasa Beredar:\n• 1 Jan: Saldo awal 800.000 lembar.\n• 1 Mei: Menerbitkan 120.000 lembar saham baru.\n• 1 Juli: Membagikan **Dividen Saham 20%**.\n• 1 Oktober: Membeli kembali 50.000 lembar Saham Treasuri.\n\nSekuritas Berpotensi Dilutif:\n1. Opsi Saham 40.000 lembar @ harga eksekusi Rp 20.000 (Rata-rata harga pasar saham = Rp 25.000).\n2. Obligasi Konversi 7% nominal Rp 2.000.000.000 dapat dikonversi menjadi 100.000 lembar saham biasa (Tarif pajak 22%).'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Langkah Perhitungan WASO, Basic EPS, dan Diluted EPS',
      prompt: 'Perhatikan faktor pengali retrospektif dividen saham:',
      blocks: [
        {
          kind: 'table',
          headers: ['Tanggal Transaksi', 'Perubahan Lembar', 'Faktor Dividen Saham 20%', 'Pecahan Tahun', 'Bobot Saham Rata-rata'],
          rows: [
            ['1 Jan s.d. 1 Mei (4 bln)', '800.000', '× 1,20', '4/12', '320.000 lembar'],
            ['1 Mei s.d. 1 Okt (5 bln)', '920.000', '× 1,20', '5/12', '460.000 lembar'],
            ['1 Okt s.d. 31 Des (3 bln)', '1.054.000 (1.104.000 - 50.000)', '-', '3/12', '263.500 lembar'],
            ['TOTAL WASO (Penyebut Basic EPS)', '-', '-', '-', '1.043.500 lembar']
          ],
          caption: 'Kalkulasi Weighted Average Shares Outstanding (WASO) tahun 2026.'
        },
        {
          kind: 'p',
          text: '**1. Basic EPS** = Rp 2.500.000.000 / 1.043.500 lembar = **Rp 2.395,78 per lembar**.'
        },
        {
          kind: 'p',
          text: '**2. Efek Opsi Saham (Treasury Stock Method)**:\n• Lembar Diterbitkan = 40.000\n• Kas Diterima = 40.000 × Rp 20.000 = Rp 800.000.000\n• Saham Beli Kembali = Rp 800.000.000 / Rp 25.000 = 32.000 lembar\n• Tambahan Lembar Bersih = 40.000 - 32.000 = **8.000 lembar** (DILUTIF karena pasar > eksekusi).'
        },
        {
          kind: 'p',
          text: '**3. Efek Obligasi Konversi (If-Converted Method)**:\n• Penyesuaian Bunga Bersih Pajak = (Rp 2 M × 7%) × (1 - 0,22) = Rp 140 jt × 0,78 = **Rp 109.200.000**\n• Tambahan Lembar Saham = **100.000 lembar**\n• Efek Inkremental per lembar = Rp 109.200.000 / 100.000 = Rp 1.092 (Jauh lebih kecil dari Basic EPS Rp 2.395,78 -> SANGAT DILUTIF!).'
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Kalkulasi Diluted EPS Final',
          text: 'Diluted EPS = (Rp 2.500.000.000 + Rp 109.200.000) / (1.043.500 + 8.000 + 100.000)\nDiluted EPS = Rp 2.609.200.000 / 1.151.500 lembar = **Rp 2.265,91 per lembar** (Turun dari Rp 2.395,78!).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 14B: Efek Utang FVOCI, ECL Impairment, dan Daur Ulang (TM 14)
// -------------------------------------------------------------
export const CASE_DEBT_INVESTMENTS_FVOCI_RECYCLING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14B: Investasi Efek Utang FVOCI, Amortisasi Bunga, dan Daur Ulang (Recycling PSAK 71)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Konteks Transaksi',
      text: 'Pada 1 Januari 2026, PT Prima Finansial membeli obligasi 8% senilai nominal Rp 1.000.000.000 seharga Rp 924.180.000 (diskonto untuk menghasilkan suku bunga efektif 10%). Model bisnis: mengoleksi arus kas kontraktual dan menjual efek (FVOCI - Efek Utang).\nBunga diterima tahunan tiap 31 Desember.\n• 31 Des 2026: Bunga kupon diterima Rp 80.000.000. Beban bunga efektif = Rp 92.418.000 (Amortisasi diskonto = Rp 12.418.000). Nilai tercatat sebelum nilai wajar = Rp 936.598.000.\n• Nilai wajar pasar obligasi pada 31 Des 2026 adalah **Rp 950.000.000**.\n• 1 Juli 2027: Seluruh obligasi dijual seharga Rp 965.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Jurnal FVOCI Akhir Tahun & Jurnal Daur Ulang (Recycling)',
      prompt: 'Pahami perbedaan esensial daur ulang OCI efek utang vs efek ekuitas:',
      blocks: [
        {
          kind: 'journal',
          caption: '1. Jurnal Penerimaan Bunga & Amortisasi Efektif (31 Des 2026)',
          lines: [
            { account: 'Kas', debit: 'Rp 80.000.000' },
            { account: 'Investasi Efek Utang - FVOCI (Amortisasi Diskonto)', debit: 'Rp 12.418.000' },
            { account: 'Pendapatan Bunga (Laba Rugi: 10% × 924.180.000)', credit: 'Rp 92.418.000', isCredit: true }
          ]
        },
        {
          kind: 'journal',
          caption: '2. Jurnal Penyesuaian Nilai Wajar ke OCI (31 Des 2026: 950 jt - 936.598.000 = 13.402.000)',
          lines: [
            { account: 'Penyesuaian Nilai Wajar - FVOCI', debit: 'Rp 13.402.000' },
            { account: 'Keuntungan Belum Terealisasi - OCI (Unrealized Holding Gain)', credit: 'Rp 13.402.000', isCredit: true }
          ]
        },
        {
          kind: 'journal',
          caption: '3. Jurnal Penjualan & Daur Ulang (Recycling) Akumulasi OCI ke Laba Rugi (1 Juli 2027)',
          lines: [
            { account: 'Kas', debit: 'Rp 965.000.000' },
            { account: 'Keuntungan Belum Terealisasi - OCI (Tutup saldo OCI)', debit: 'Rp 13.402.000' },
            { account: 'Investasi Efek Utang - FVOCI', credit: 'Rp 950.000.000', isCredit: true },
            { account: 'Keuntungan Penjualan Investasi (Direklasifikasi ke Laba Rugi!)', credit: 'Rp 28.402.000', isCredit: true }
          ]
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Aturan Emas PSAK 71: Recycling Efek Utang vs Efek Ekuitas',
          text: 'Pada Efek Utang FVOCI, keuntungan/kerugian yang tertampung di OCI **WAJIB DIREKLASIFIKASI (RECYCLED)** ke Laporan Laba Rugi saat aset dijual. Sebaliknya, pada Efek Ekuitas FVOCI, keuntungan/kerugian OCI **DILARANG KERAS DIRECYCLED** ke Laba Rugi (hanya boleh ditransfer langsung ke Laba Ditahan).'
        }
      ]
    }
  ]
};
