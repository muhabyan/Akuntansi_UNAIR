import type { ContentBlock, Reading } from '../../../types';

const DARBY_NOTES_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Darby Corporation: Utang Usaha dan Wesel Bayar (E12.2, Kieso p. 1072)',
  prompt: 'Darby Corporation (metode bruto, sistem periodik) melakukan transaksi 2025 berikut. **1 September:** membeli persediaan secara kredit dari Orion Company \\$50.000. **1 Oktober:** menerbitkan wesel bayar 12 bulan, bunga 8%, \\$50.000 kepada Orion untuk melunasi utang usaha. **1 Oktober:** meminjam kas \\$75.000 dari Shore Bank dengan wesel tanpa bunga 12 bulan bernilai nominal \\$81.000. (a) Jurnal transaksi, (b) jurnal penyesuaian 31 Desember 2025, (c) liabilitas neto setiap wesel per 31 Desember 2025.',
  blocks: [
    { kind: 'h3', text: '(a) Jurnal transaksi' },
    {
      kind: 'journal',
      caption: '1 September 2025 — pembelian kredit (metode bruto)',
      lines: [
        { account: 'Purchases', debit: '$50.000' },
        { account: 'Accounts Payable', credit: '$50.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '1 Oktober 2025 — utang usaha diganti wesel berbunga 8%',
      lines: [
        { account: 'Accounts Payable', debit: '$50.000' },
        { account: 'Notes Payable', credit: '$50.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '1 Oktober 2025 — wesel tanpa bunga (nominal \\$81.000, kas \\$75.000)',
      lines: [
        { account: 'Cash', debit: '$75.000' },
        { account: 'Discount on Notes Payable', debit: '$6.000' },
        { account: 'Notes Payable', credit: '$81.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(b) Jurnal penyesuaian 31 Desember 2025' },
    {
      kind: 'formula',
      text: '\\text{Bunga wesel Orion}=\\text{USD }50.000\\times 8\\%\\times\\frac{3}{12}=\\text{USD }1.000\\\\\\text{Amortisasi diskonto Shore Bank}=\\text{USD }6.000\\times\\frac{3}{12}=\\text{USD }1.500'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — akrual bunga wesel berbunga (3 bulan)',
      lines: [
        { account: 'Interest Expense', debit: '$1.000' },
        { account: 'Interest Payable', credit: '$1.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — amortisasi diskonto wesel tanpa bunga (3 bulan)',
      lines: [
        { account: 'Interest Expense', debit: '$1.500' },
        { account: 'Discount on Notes Payable', credit: '$1.500', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(c) Liabilitas neto per 31 Desember 2025' },
    {
      kind: 'table',
      headers: ['Pos', 'Wesel berbunga (Orion)', 'Wesel tanpa bunga (Shore Bank)'],
      rows: [
        ['Notes Payable', '\\$50.000', '\\$81.000'],
        ['Interest Payable', '\\$1.000', '—'],
        ['Dikurangi: Discount on Notes Payable yang belum diamortisasi', '—', '(\\$6.000 − \\$1.500) = (\\$4.500)'],
        ['**Liabilitas neto**', '**\\$51.000**', '**\\$76.500**']
      ],
      caption: 'Cek wesel tanpa bunga: kas diterima \\$75.000 + bunga yang sudah diakui \\$1.500 = \\$76.500. Suku bunga implisit tahunan = \\$6.000 ÷ \\$75.000 = 8%.'
    }
  ]
};

const EDWARDSON_CURRENT_LIABILITIES_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Edwardson AG: Metode Neto, Wesel, dan Dividen (P12.1, Kieso p. 1083)',
  prompt: 'Edwardson AG memakai sistem periodik dan mencatat pembelian serta utang usaha pada jumlah neto. **2 Februari:** membeli barang dari Martin Company €70.000, syarat 2/10, n/30; dilunasi **26 Februari**. **1 April:** membeli truk €50.000, membayar tunai €4.000 dan menandatangani wesel 1 tahun bunga 12% untuk sisanya. **1 Agustus:** direksi mendeklarasikan dividen kas €300.000, dibayar **10 September** kepada pemegang saham tercatat **31 Agustus**. (a) Jurnal transaksi, (b) jurnal penyesuaian bunga 31 Desember.',
  blocks: [
    { kind: 'h3', text: '(a) Jurnal transaksi' },
    { kind: 'formula', text: '\\text{Pembelian neto}=\\text{€70.000}\\times(1-0{,}02)=\\text{€68.600}' },
    {
      kind: 'journal',
      caption: '2 Februari — pembelian dicatat neto',
      lines: [
        { account: 'Purchases', debit: '€68.600' },
        { account: 'Accounts Payable', credit: '€68.600', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '26 Februari — dibayar setelah periode diskon berakhir 12 Februari',
      lines: [
        { account: 'Accounts Payable', debit: '€68.600' },
        { account: 'Purchase Discounts Lost', debit: '€1.400' },
        { account: 'Cash', credit: '€70.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '1 April — truk dibeli dengan uang muka €4.000 dan wesel €46.000',
      lines: [
        { account: 'Equipment (Trucks)', debit: '€50.000' },
        { account: 'Cash', credit: '€4.000', isCredit: true },
        { account: 'Notes Payable', credit: '€46.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '1 Agustus — deklarasi dividen kas',
      lines: [
        { account: 'Retained Earnings (Dividends Declared)', debit: '€300.000' },
        { account: 'Dividends Payable', credit: '€300.000', isCredit: true }
      ]
    },
    { kind: 'p', text: '**31 Agustus (tanggal pencatatan):** tidak ada jurnal.' },
    {
      kind: 'journal',
      caption: '10 September — pembayaran dividen',
      lines: [
        { account: 'Dividends Payable', debit: '€300.000' },
        { account: 'Cash', credit: '€300.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(b) Jurnal penyesuaian 31 Desember' },
    { kind: 'formula', text: '\\text{Bunga wesel truk}=\\text{€46.000}\\times 12\\%\\times\\frac{9}{12}=\\text{€4.140}' },
    {
      kind: 'journal',
      caption: '31 Desember — akrual bunga 1 April–31 Desember (9 bulan)',
      lines: [
        { account: 'Interest Expense', debit: '€4.140' },
        { account: 'Interest Payable', credit: '€4.140', isCredit: true }
      ]
    }
  ]
};

const SCHULTZ_LIABILITY_ENTRIES_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Schultz Department Store: Deposit, PPN, dan Provisi Restorasi (P12.2, Kieso pp. 1083–1084)',
  prompt: 'Transaksi Schultz Department Store: (1) **5 Desember:** menerima deposit kas €500 dari Jackson Players untuk furnitur panggung yang akan dikembalikan 15 Januari. (2) **Selama Desember:** penjualan tunai €798.000 sudah termasuk PPN 5% yang wajib disetor paling lambat tanggal 15 bulan berikutnya. (3) **10 Desember:** membeli tunai 3 truk pengiriman seharga €120.000 di yurisdiksi dengan PPN 5%. (4) **31 Desember:** biaya pemulihan area parkir saat toko ditutup 2 tahun lagi diperkirakan €100.000; nilai wajar liabilitas pemulihan per 31 Desember €84.000. Buat jurnalnya.',
  blocks: [
    {
      kind: 'journal',
      caption: '(1) 5 Desember — deposit yang dapat dikembalikan',
      lines: [
        { account: 'Cash', debit: '€500' },
        { account: 'Refundable Deposits', credit: '€500', isCredit: true }
      ]
    },
    {
      kind: 'formula',
      text: '\\text{Sales Revenue}=\\frac{\\text{€798.000}}{1{,}05}=\\text{€760.000}\\qquad\\text{VAT Taxes Payable}=\\text{€798.000}-\\text{€760.000}=\\text{€38.000}'
    },
    {
      kind: 'journal',
      caption: '(2) 31 Desember — penjualan tunai Desember dan PPN keluaran',
      lines: [
        { account: 'Cash', debit: '€798.000' },
        { account: 'Sales Revenue', credit: '€760.000', isCredit: true },
        { account: 'VAT Taxes Payable', credit: '€38.000', isCredit: true }
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Interpretasi — PPN pembelian truk (P12.2 transaksi 3)',
      text: 'Soal tidak menyatakan apakah PPN 5% atas truk dapat dikreditkan. Kedua alternatif berikut sama-sama membayar kas €126.000.\n\n**Alternatif A — kapitalisasi penuh:** mengikuti practice problem solution Kieso p. 1066 (Trucks = 120.000 × 1,05 = 126.000); PPN diperlakukan sebagai bagian cost truk.\n\n**Alternatif B — PPN masukan dapat dikreditkan:** mengikuti mekanisme PPN Kieso pp. 1027–1028; truk dicatat €120.000 dan PPN €6.000 dicatat sebagai VAT Taxes Recoverable.'
    },
    {
      kind: 'journal',
      caption: '(3) Alternatif A, 10 Desember — PPN dikapitalisasi (€120.000 × 1,05)',
      lines: [
        { account: 'Equipment (Delivery Trucks)', debit: '€126.000' },
        { account: 'Cash', credit: '€126.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '(3) Alternatif B, 10 Desember — PPN masukan dipisahkan (5% × €120.000)',
      lines: [
        { account: 'Equipment (Delivery Trucks)', debit: '€120.000' },
        { account: 'VAT Taxes Recoverable', debit: '€6.000' },
        { account: 'Cash', credit: '€126.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '(4) 31 Desember — kewajiban restorasi dikapitalisasi ke aset terkait',
      lines: [
        { account: 'Land Improvements (Parking Lot)', debit: '€84.000' },
        { account: 'Environmental Restoration Provision', credit: '€84.000', isCredit: true }
      ]
    },
    {
      kind: 'p',
      text: 'Provisi restorasi €84.000 disajikan sebagai **liabilitas jangka panjang** karena penyelesaiannya baru terjadi 2 tahun lagi; cost land improvements dibebankan melalui depresiasi (Kieso p. 1049).'
    }
  ]
};

const BALANCE_SHEET_CLASSIFICATION_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Klasifikasi Pos Laporan Posisi Keuangan (E12.1, Kieso p. 1072)',
  prompt: 'Tentukan bagaimana setiap pos (a) sampai (p) dilaporkan pada laporan posisi keuangan.',
  blocks: [
    {
      kind: 'table',
      headers: ['Pos', 'Item', 'Pelaporan', 'Alasan'],
      rows: [
        ['a', 'Accrued vacation pay', 'Liabilitas jangka pendek', 'Hak cuti berbayar yang terakumulasi dan diselesaikan dalam 12 bulan (p. 1029)'],
        ['b', 'Income taxes payable', 'Liabilitas jangka pendek', 'Pajak penghasilan periode berjalan yang wajib disetor (p. 1028)'],
        ['c', 'Service-type warranties on appliance sales', 'Liabilitas jangka pendek dan jangka panjang', 'Unearned Warranty Revenue; porsi 12 bulan ke depan lancar, sisanya tidak lancar (p. 1042)'],
        ['d', 'Social security taxes payable', 'Liabilitas jangka pendek', 'Potongan karyawan dan bagian pemberi kerja yang belum disetor (p. 1028)'],
        ['e', 'Personal injury claim pending', 'Provisi bila probable dan dapat diestimasi andal; bila tidak, liabilitas kontinjensi yang hanya diungkapkan', 'Kewajiban yang bergantung pada putusan hukum (pp. 1037, 1058)'],
        ['f', 'Unpaid bonus to officers', 'Liabilitas jangka pendek', 'Akrual bonus tahun berjalan yang belum dibayar (p. 1031)'],
        ['g', 'Deposit received from customer to guarantee performance of a contract', 'Liabilitas jangka pendek', 'Deposit yang dapat dikembalikan (p. 1023)'],
        ['h', 'Value-added tax payable', 'Liabilitas jangka pendek', 'PPN keluaran yang dipungut dan wajib disetor (p. 1026)'],
        ['i', 'Gift certificates sold to customers but not yet redeemed', 'Liabilitas jangka pendek', 'Pendapatan diterima di muka atas voucher yang belum ditebus (p. 1024)'],
        ['j', 'Premium offers outstanding', 'Liabilitas jangka pendek', 'Estimasi hadiah yang akan ditebus pelanggan (p. 1043)'],
        ['k', 'Accounts payable', 'Liabilitas jangka pendek', 'Utang dagang dalam siklus operasi normal (p. 1017)'],
        ['l', 'Employee payroll deductions unremitted', 'Liabilitas jangka pendek', 'Potongan gaji yang belum disetor ke pihak ketiga (p. 1028)'],
        ['m', 'Current maturities of long-term debts to be paid from current assets', 'Liabilitas jangka pendek', 'Bagian utang jangka panjang yang jatuh tempo dalam 12 bulan (p. 1020)'],
        ['n', 'Cash dividends declared but unpaid', 'Liabilitas jangka pendek', 'Dividen kas menjadi liabilitas sejak dideklarasikan (p. 1022)'],
        ['o', 'Dividends in arrears on preference shares', 'Catatan atas laporan keuangan; bukan liabilitas', 'Belum dideklarasikan sehingga belum ada kewajiban (p. 1023)'],
        ['p', 'Loans to officers', 'Aset (piutang), bukan liabilitas', 'Piutang entitas kepada pejabatnya; lancar atau tidak lancar sesuai jatuh temponya']
      ]
    }
  ]
};

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Liabilitas Jangka Pendek, Provisi, dan Kontinjensi',
  ref: 'Kieso IFRS 5e Ch. 12 (pp. 1015–1092) | IAS 1, IAS 37',
  intro: 'TM6 membahas seluruh Kieso Bab 12: definisi dan klasifikasi liabilitas jangka pendek, utang usaha dan wesel bayar, pembiayaan kembali, dividen dan pendapatan diterima di muka, PPN, liabilitas karyawan, provisi, kontinjensi, serta penyajian dan analisis likuiditas. Soal dosen E12.1, E12.2, P12.1, dan P12.2 dibahas langkah demi langkah.',
  objectives: [
    'Menjelaskan tiga karakteristik liabilitas dan kriteria klasifikasi liabilitas jangka pendek.',
    'Mencatat utang usaha metode bruto dan neto, wesel berbunga, dan wesel tanpa bunga beserta penyesuaian akhir tahun.',
    'Menerapkan aturan pembiayaan kembali, dividen, deposit, pendapatan diterima di muka, PPN, dan liabilitas karyawan.',
    'Mengakui dan mengukur provisi, termasuk garansi, premi, dan kewajiban restorasi.',
    'Membedakan provisi, liabilitas kontinjensi, dan aset kontinjensi, lalu menyajikan dan menganalisis liabilitas jangka pendek.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['Definisi dan klasifikasi', 'Apakah ada kewajiban kini dan kapan diselesaikan?', 'Liabilitas lancar atau tidak lancar'],
        ['Utang usaha dan wesel', 'Metode bruto atau neto? Wesel berbunga atau tanpa bunga?', 'Jurnal, akrual bunga, amortisasi diskonto'],
        ['Pembiayaan kembali', 'Apakah hak menunda pelunasan sudah ada pada tanggal pelaporan?', 'Klasifikasi utang yang akan dibiayai kembali'],
        ['Dividen, deposit, PPN, karyawan', 'Kapan kewajiban timbul dan berapa jumlahnya?', 'Liabilitas jangka pendek terpisah'],
        ['Provisi', 'Kewajiban kini + probable + estimasi andal?', 'Provisi dan jurnal pengakuannya'],
        ['Kontinjensi', 'Seberapa besar kemungkinannya?', 'Diakui, diungkapkan, atau diabaikan'],
        ['Penyajian', 'Bagaimana likuiditas dinilai?', 'Modal kerja dan rasio']
      ],
      caption: 'Alur TM6: definisi → utang dan wesel → pembiayaan kembali → liabilitas khusus → provisi → kontinjensi → penyajian.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Cakupan TM6',
      text: 'TM6 mencakup seluruh Kieso IFRS 5e Bab 12, termasuk provisi dan kontinjensi, sesuai penugasan dosen. Liabilitas jangka panjang (obligasi dan wesel jangka panjang, Bab 13) dibahas di TM7.'
    },

    { kind: 'h2', text: '2. Liability Definition & Classification' },
    {
      kind: 'p',
      text: 'Liabilitas adalah **kewajiban kini entitas untuk mengalihkan sumber daya ekonomi sebagai akibat peristiwa masa lalu** (Kieso p. 1016).'
    },
    {
      kind: 'table',
      headers: ['Karakteristik', 'Penjelasan'],
      rows: [
        ['Kewajiban kini (present obligation)', 'Ada pada tanggal pelaporan; dapat berupa kewajiban hukum (kontrak, undang-undang) atau kewajiban konstruktif (praktik masa lalu atau kebijakan yang dipublikasikan yang menimbulkan ekspektasi sah pihak lain).'],
        ['Pengalihan sumber daya ekonomi', 'Diselesaikan dengan kas, barang, jasa, atau diganti kewajiban lain.'],
        ['Peristiwa masa lalu', 'Transaksi pemicu sudah terjadi sebelum tanggal pelaporan; kontrak yang belum dilaksanakan kedua pihak (executory contracts) umumnya belum diakui.']
      ]
    },
    {
      kind: 'p',
      text: 'Liabilitas diklasifikasikan **jangka pendek** bila memenuhi salah satu kriteria berikut; selain itu jangka panjang (Kieso pp. 1016–1017):'
    },
    {
      kind: 'ol',
      items: [
        'Diperkirakan diselesaikan dalam siklus operasi normal entitas.',
        'Dimiliki terutama untuk diperdagangkan.',
        'Jatuh tempo dalam 12 bulan setelah periode pelaporan.',
        'Entitas tidak memiliki hak untuk menunda penyelesaian sekurang-kurangnya 12 bulan setelah periode pelaporan.'
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Tanpa saling hapus',
      text: 'Liabilitas lancar tidak boleh disalinghapuskan dengan aset lancar terkait di laporan posisi keuangan, kecuali diizinkan secara eksplisit oleh IFRS.'
    },

    { kind: 'h2', text: '3. Accounts Payable & Notes Payable' },
    {
      kind: 'table',
      headers: ['Metode diskon tunai', 'Pencatatan pembelian', 'Diskon dimanfaatkan', 'Diskon terlewat'],
      rows: [
        ['Bruto (gross)', 'Harga faktur penuh', 'Kredit Purchase Discounts', 'Bayar sebesar utang tercatat'],
        ['Neto (net)', 'Harga faktur × (1 − diskon)', 'Bayar sebesar utang tercatat', 'Debit Purchase Discounts Lost (beban pembiayaan)']
      ],
      caption: 'Kieso p. 1017. Metode neto menonjolkan biaya karena gagal memanfaatkan diskon.'
    },
    {
      kind: 'p',
      text: '**Wesel berbunga (interest-bearing):** dicatat sebesar nilai nominal; bunga yang terutang tetapi belum dibayar diakrualkan pada akhir periode. **Wesel tanpa bunga (zero-interest-bearing):** peminjam menerima kas sebesar nilai kini yang lebih kecil dari nominal; selisihnya dicatat di akun kontra-liabilitas Discount on Notes Payable dan diamortisasi ke beban bunga (Kieso pp. 1019–1020).'
    },
    { kind: 'formula', text: '\\text{Bunga akrual}=\\text{Nominal}\\times\\text{Tarif}\\times\\frac{\\text{Bulan berjalan}}{12}\\qquad\\text{Liabilitas neto}=\\text{Notes Payable}-\\text{Diskonto belum diamortisasi}' },
    DARBY_NOTES_CASE,

    { kind: 'h2', text: '4. Refinancing Short-Term Obligations' },
    {
      kind: 'p',
      text: 'Utang yang jatuh tempo dalam 12 bulan boleh disajikan sebagai **liabilitas jangka panjang** hanya bila entitas memiliki hak untuk membiayai kembali atau memperpanjang kewajiban sekurang-kurangnya 12 bulan setelah tanggal pelaporan, dan **hak itu sudah ada pada atau sebelum tanggal pelaporan** (Kieso pp. 1020–1022).'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Perjanjian setelah tanggal pelaporan',
      text: 'Bila perjanjian pembiayaan kembali baru ditandatangani antara 31 Desember dan tanggal penerbitan laporan keuangan, utang **tetap disajikan jangka pendek** pada 31 Desember. Perjanjian itu adalah peristiwa setelah periode pelaporan yang tidak memerlukan penyesuaian dan hanya diungkapkan dalam catatan.'
    },

    { kind: 'h2', text: '5. Dividends, Deposits & Unearned Revenues' },
    {
      kind: 'table',
      headers: ['Pos', 'Perlakuan', 'Kieso'],
      rows: [
        ['Dividen kas', 'Liabilitas jangka pendek (Dividends Payable) sejak dideklarasikan; tanggal pencatatan tanpa jurnal', 'pp. 1022–1023'],
        ['Dividen saham', 'Bukan liabilitas karena tidak mengalihkan aset; disajikan di ekuitas', 'pp. 1022–1023'],
        ['Tunggakan dividen saham preferen', 'Bukan liabilitas sebelum dideklarasikan; diungkapkan dalam catatan', 'p. 1023'],
        ['Deposit pelanggan yang dapat dikembalikan', 'Liabilitas (Refundable Deposits); lancar atau tidak lancar sesuai waktu pengembalian', 'p. 1023'],
        ['Pendapatan diterima di muka', 'Liabilitas (Unearned Revenue) sampai barang atau jasa diserahkan, misalnya voucher belanja dan garansi jasa', 'pp. 1024–1025']
      ]
    },
    EDWARDSON_CURRENT_LIABILITIES_CASE,

    { kind: 'h2', text: '6. Sales Taxes & Value-Added Taxes' },
    {
      kind: 'table',
      headers: ['Pajak', 'Mekanisme', 'Akun'],
      rows: [
        ['Pajak penjualan (sales tax)', 'Dipungut sekali dari konsumen akhir dan disetor ke pemerintah', 'Sales Taxes Payable'],
        ['PPN (value-added tax)', 'Dipungut di setiap mata rantai; PPN masukan atas pembelian dikreditkan terhadap PPN keluaran atas penjualan', 'VAT Taxes Recoverable (masukan), VAT Taxes Payable (keluaran)']
      ],
      caption: 'Kieso pp. 1026–1028.'
    },
    {
      kind: 'formula',
      text: '\\text{Penjualan}=\\frac{\\text{Kas diterima termasuk pajak}}{1+\\text{tarif pajak}}\\qquad\\text{Pajak terutang}=\\text{Kas diterima}-\\text{Penjualan}'
    },

    { kind: 'h2', text: '7. Employee-Related Liabilities' },
    {
      kind: 'table',
      headers: ['Liabilitas', 'Perlakuan', 'Kieso'],
      rows: [
        ['Potongan gaji yang belum disetor', 'Pajak penghasilan karyawan dan iuran jaminan sosial yang dipotong entitas sebagai pemungut; liabilitas jangka pendek sampai disetor', 'p. 1028'],
        ['Cuti berbayar (compensated absences)', 'Diakrualkan saat karyawan memberikan jasa bila hak cuti berakumulasi atau vested, pembayarannya probable, dan jumlahnya dapat diestimasi', 'pp. 1029–1030'],
        ['Bonus', 'Diakrualkan sebagai beban kompensasi dan liabilitas jangka pendek (Bonus Payable) atas kinerja periode berjalan', 'p. 1031']
      ]
    },

    { kind: 'h2', text: '8. Provisions: Recognition & Measurement' },
    {
      kind: 'p',
      text: 'Provisi adalah **liabilitas yang waktu atau jumlahnya belum pasti** (Kieso p. 1033). Provisi diakui bila ketiga kriteria berikut terpenuhi:'
    },
    {
      kind: 'ol',
      items: [
        'Entitas memiliki kewajiban kini (hukum atau konstruktif) akibat peristiwa masa lalu.',
        'Arus keluar sumber daya **probable**, yaitu lebih mungkin terjadi daripada tidak (>50%, more likely than not).',
        'Jumlah kewajiban dapat diestimasi secara andal.'
      ]
    },
    {
      kind: 'table',
      headers: ['Situasi', 'Pengukuran estimasi terbaik'],
      rows: [
        ['Populasi item besar (mis. garansi)', 'Nilai harapan (expected value): hasil dibobot probabilitasnya'],
        ['Kewajiban tunggal (mis. satu gugatan)', 'Hasil paling mungkin (most likely outcome)'],
        ['Rentang estimasi dengan kemungkinan sama', 'Titik tengah rentang (Kieso p. 1036)'],
        ['Nilai waktu uang material', 'Nilai kini pengeluaran masa depan']
      ]
    },

    { kind: 'h2', text: '9. Common Types of Provisions' },
    {
      kind: 'table',
      headers: ['Jenis', 'Perlakuan'],
      rows: [
        ['Litigasi', 'Provisi bila penyebab gugatan terjadi sebelum tanggal pelaporan, kekalahan probable, dan kerugian dapat diestimasi; bila tidak, hanya diungkapkan sebagai liabilitas kontinjensi.'],
        ['Garansi jaminan (assurance-type)', 'Beban dan provisi garansi diakui pada periode penjualan.'],
        ['Garansi jasa (service-type)', 'Dijual terpisah; dicatat sebagai Unearned Warranty Revenue dan diakui sebagai pendapatan selama masa layanan.'],
        ['Premi dan kupon', 'Estimasi hadiah yang akan ditebus diakrualkan sebagai Premium Expense dan Premium Liability.'],
        ['Restorasi lingkungan', 'Estimasi kewajiban dikapitalisasi ke aset terkait dan dikredit ke provisi; biaya dialokasikan melalui depresiasi (Kieso p. 1049).'],
        ['Kontrak memberatkan (onerous)', 'Diukur sebesar yang lebih rendah antara biaya memenuhi kontrak dan penalti keluar dari kontrak.'],
        ['Restrukturisasi', 'Hanya biaya langsung yang tidak terhindarkan, setelah rencana formal diumumkan sebelum tanggal pelaporan.']
      ]
    },
    SCHULTZ_LIABILITY_ENTRIES_CASE,

    { kind: 'h2', text: '10. Contingencies' },
    {
      kind: 'table',
      headers: ['Kemungkinan', 'Sisi kewajiban', 'Sisi aset'],
      rows: [
        ['Virtually certain', 'Kewajiban kini yang memenuhi kriteria diakui sebagai **provisi**', 'Aset **diakui** di neraca; bukan lagi aset kontinjensi'],
        ['Probable (>50%, more likely than not)', 'Diakui sebagai **provisi** bila ada kewajiban kini dan estimasi andal', 'Aset kontinjensi: **diungkapkan dalam catatan**, tidak diakui'],
        ['Possible', 'Liabilitas kontinjensi: **diungkapkan dalam catatan**, tidak diakui', 'Tidak diakui dan tidak diungkapkan'],
        ['Remote', 'Tidak diakui dan tidak diungkapkan', 'Tidak diakui dan tidak diungkapkan']
      ],
      caption: 'Kieso pp. 1057–1059.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Provisi vs liabilitas kontinjensi',
      text: 'Liabilitas kontinjensi **tidak pernah diakui** di laporan posisi keuangan; yang diakui adalah provisi. Ambang "virtually certain" berlaku untuk **pengakuan aset** kontinjensi.'
    },

    { kind: 'h2', text: '11. Presentation & Analysis' },
    {
      kind: 'ul',
      items: [
        'Liabilitas lancar disajikan terpisah dari liabilitas tidak lancar; provisi disajikan terpisah dari utang usaha.',
        'Catatan menjelaskan jenis provisi, perubahan saldonya, dan liabilitas kontinjensi yang diungkapkan.'
      ]
    },
    { kind: 'formula', text: '\\text{Modal kerja}=\\text{Aset lancar}-\\text{Liabilitas lancar}\\qquad\\text{Current ratio}=\\frac{\\text{Aset lancar}}{\\text{Liabilitas lancar}}' },
    { kind: 'formula', text: '\\text{Acid-test ratio}=\\frac{\\text{Kas}+\\text{Investasi jangka pendek}+\\text{Piutang neto}}{\\text{Liabilitas lancar}}\\qquad\\text{Perputaran utang usaha}=\\frac{\\text{Beban pokok penjualan}}{\\text{Rata-rata utang usaha}}' },
    BALANCE_SHEET_CLASSIFICATION_CASE,

    { kind: 'h2', text: '12. Standards Comparison' },
    {
      kind: 'table',
      headers: ['Aspek', 'IFRS (Kieso IFRS 5e)', 'US GAAP'],
      rows: [
        ['Pembiayaan kembali', 'Hak menunda pelunasan harus sudah ada pada tanggal pelaporan (p. 1021)', 'Perjanjian yang diselesaikan sebelum laporan keuangan diterbitkan boleh membuat utang disajikan jangka panjang'],
        ['Ambang probable', 'Lebih mungkin terjadi daripada tidak (>50%) (p. 1034)', 'Likely to occur: ambang lebih tinggi'],
        ['Rentang estimasi tanpa titik terbaik', 'Titik tengah rentang (p. 1036)', 'Ujung bawah rentang'],
        ['Kewajiban restorasi', 'Kewajiban hukum dan konstruktif (p. 1045)', 'Hanya kewajiban hukum'],
        ['Diskonto wesel bayar', 'Akun kontra-liabilitas pengurang nominal (p. 1019)', 'Sama']
      ]
    },

    { kind: 'h2', text: '13. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Pembelian neto}=\\text{Harga faktur}\\times(1-\\text{diskon})\\qquad\\text{Discount on Notes Payable}=\\text{Nominal}-\\text{Kas diterima}' },
    { kind: 'formula', text: '\\text{Bunga akrual}=\\text{Pokok}\\times\\text{Tarif}\\times\\frac{\\text{Bulan}}{12}\\qquad\\text{Penjualan (termasuk PPN)}=\\frac{\\text{Kas}}{1+\\text{tarif PPN}}' },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'table',
      headers: ['Jebakan', 'Kesalahan umum', 'Perlakuan benar', 'Kieso'],
      rows: [
        ['Pembiayaan kembali setelah tanggal pelaporan', 'Menyajikan utang jangka panjang karena perjanjian ditandatangani Januari', 'Tetap jangka pendek; hak menunda harus ada pada 31 Desember', 'p. 1021'],
        ['Tunggakan dividen preferen', 'Mencatat Dividends Payable', 'Bukan liabilitas; ungkapkan dalam catatan', 'p. 1023; E12.1(o)'],
        ['Biaya restorasi', 'Mendebit Restoration Expense €84.000', 'Kapitalisasi ke Land Improvements; kredit provisi', 'p. 1049; P12.2'],
        ['PPN inklusif', '€798.000 × 5% = €39.900', 'Penjualan €798.000 ÷ 1,05 = €760.000; PPN €38.000', 'pp. 1026–1028; P12.2'],
        ['Kontinjensi', 'Mengakui liabilitas kontinjensi atau aset kontinjensi yang baru probable', 'Liabilitas kontinjensi hanya diungkapkan; aset baru diakui bila virtually certain', 'pp. 1057–1059']
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Cek tiga karakteristik liabilitas, lalu kriteria lancar vs tidak lancar.',
        'Metode neto: diskon yang terlewat masuk Purchase Discounts Lost.',
        'Wesel tanpa bunga: liabilitas neto = nominal − diskonto yang belum diamortisasi.',
        'Provisi = kewajiban kini + probable (>50%) + estimasi andal; bila tidak terpenuhi, ungkapkan atau abaikan.',
        'Liabilitas kontinjensi tidak pernah diakui; aset kontinjensi diakui hanya bila virtually certain.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Checklist 60 detik sebelum mengumpulkan',
      text: 'Darby: liabilitas neto wesel tanpa bunga **\\$76.500**. Edwardson: Purchase Discounts Lost **€1.400**, bunga **€4.140**. Schultz: penjualan **€760.000**, PPN **€38.000**, truk **€126.000** (Alternatif A) atau **€120.000 + €6.000** (Alternatif B), provisi **€84.000**. Apakah setiap jurnal debit = kredit?'
    }
  ]
};
