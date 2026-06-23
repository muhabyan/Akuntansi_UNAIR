import type { QuizQuestion } from '../../types';

const AKM201_QUIZ_UTS_BASE: QuizQuestion[] = [
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Cost yang manfaatnya sudah digunakan untuk menghasilkan pendapatan disebut...',
    options: ['Cost object', 'Expense', 'Direct cost', 'Product cost'],
    answer: 1,
    explanation: 'Expense adalah cost yang manfaatnya sudah digunakan untuk menghasilkan pendapatan.'
  },
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Objek yang ingin dihitung biayanya disebut...',
    options: ['Cost object', 'Cost driver', 'Cost pool', 'Expense'],
    answer: 0,
    explanation: 'Cost object dapat berupa produk, job, departemen, proses, pelanggan, proyek, atau aktivitas.'
  },
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Contoh product cost pada perusahaan manufaktur adalah...',
    options: ['Biaya iklan', 'Gaji staf administrasi', 'Direct materials', 'Biaya penjualan'],
    answer: 2,
    explanation: 'Product cost terdiri dari direct materials, direct labor, dan factory overhead.'
  },
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Prime cost dihitung dengan rumus...',
    options: ['Direct materials + Direct labor', 'Direct labor + Factory overhead', 'Direct materials + Factory overhead', 'Marketing + Administrative expense'],
    answer: 0,
    explanation: 'Prime Cost = Direct Materials + Direct Labor.'
  },
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Conversion cost dihitung dengan rumus...',
    options: ['Direct materials + Direct labor', 'Direct labor + Factory overhead', 'Direct materials + Factory overhead', 'Manufacturing cost + Commercial expense'],
    answer: 1,
    explanation: 'Conversion Cost = Direct Labor + Factory Overhead.'
  },
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Membedakan konsep dan dasar pembebanan',
    difficulty: 'basic',

    q: 'Fixed cost dalam relevant range memiliki perilaku...',
    options: ['Total tetap dan per unit berubah', 'Total berubah dan per unit tetap', 'Total dan per unit selalu tetap', 'Total dan per unit selalu berubah proporsional'],
    answer: 0,
    explanation: 'Fixed cost tetap secara total, tetapi berubah per unit ketika volume berubah.'
  },
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Membedakan konsep dan dasar pembebanan',
    difficulty: 'basic',

    q: 'Variable cost memiliki perilaku...',
    options: ['Total tetap dan per unit berubah', 'Total berubah mengikuti aktivitas dan per unit tetap', 'Total tetap dan per unit tetap', 'Tidak dipengaruhi aktivitas'],
    answer: 1,
    explanation: 'Variable cost berubah secara total mengikuti aktivitas, tetapi tetap per unit.'
  },
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Dalam high-low method, titik yang dipilih adalah...',
    options: ['Biaya tertinggi dan biaya terendah', 'Aktivitas tertinggi dan aktivitas terendah', 'Laba tertinggi dan laba terendah', 'Harga jual tertinggi dan terendah'],
    answer: 1,
    explanation: 'High-low method memilih titik berdasarkan aktivitas tertinggi dan terendah.'
  },
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Membedakan konsep dan dasar pembebanan',
    difficulty: 'basic',

    q: 'Persamaan biaya umum dalam analisis perilaku biaya adalah...',
    options: ['TC = FC + VC.Q', 'HPP = Penjualan - Laba', 'Prime cost = DL + FOH', 'EOQ = D + O + C'],
    answer: 0,
    explanation: 'Persamaan biaya umum adalah TC = FC + VC.Q.'
  },
  {
    topic: 'Siklus Biaya dan Akumulasi Biaya',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Urutan alur biaya manufaktur yang benar adalah...',
    options: ['COGS, WIP, Materials, Finished Goods', 'Materials, Work in Process, Finished Goods, COGS', 'Finished Goods, Materials, WIP, COGS', 'Materials, COGS, WIP, Finished Goods'],
    answer: 1,
    explanation: 'Biaya mengalir dari Materials Inventory ke Work in Process, lalu Finished Goods, dan akhirnya Cost of Goods Sold.'
  },
  {
    topic: 'Siklus Biaya dan Akumulasi Biaya',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Akun Work in Process mencatat...',
    options: ['Produk selesai yang belum terjual', 'Biaya produk yang sudah dijual', 'Direct materials, direct labor, dan applied overhead yang masih diproses', 'Beban administrasi periode berjalan'],
    answer: 2,
    explanation: 'Work in Process mencatat biaya produksi yang sudah masuk proses tetapi belum selesai.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Dalam normal costing, overhead pada job dihitung memakai...',
    options: ['Overhead aktual saja', 'Applied overhead berdasarkan tarif', 'Biaya pemasaran', 'Biaya administrasi'],
    answer: 1,
    explanation: 'Normal costing memakai bahan dan tenaga kerja aktual, tetapi overhead dibebankan dengan tarif.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Membedakan konsep dan dasar pembebanan',
    difficulty: 'basic',

    q: 'Sistem yang cocok untuk produk berdasarkan pesanan khusus adalah...',
    options: ['Process costing', 'Job order costing', 'Joint costing', 'ABC inventory'],
    answer: 1,
    explanation: 'Job order costing cocok untuk produk atau jasa berdasarkan pesanan.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Dokumen utama untuk mengumpulkan biaya per pesanan adalah...',
    options: ['Job cost sheet', 'Receiving report', 'Purchase order', 'Factory survey'],
    answer: 0,
    explanation: 'Job cost sheet mencatat direct materials, direct labor, applied overhead, total job cost, dan unit cost.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Menentukan jurnal dan akun yang tepat',
    difficulty: 'basic',

    q: 'Transaksi job selesai dicatat dengan jurnal...',
    options: ['Debit Finished Goods, kredit Work in Process', 'Debit Work in Process, kredit Finished Goods', 'Debit COGS, kredit Cash', 'Debit Materials, kredit WIP'],
    answer: 0,
    explanation: 'Produk selesai dipindahkan dari Work in Process ke Finished Goods.'
  },
  {
    topic: 'Process Costing',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Process costing cocok untuk perusahaan dengan karakteristik...',
    options: ['Produk unik dan pesanan khusus', 'Produksi massal dan homogen', 'Setiap job berbeda desain', 'Produk selalu dibuat berdasarkan kontrak individual'],
    answer: 1,
    explanation: 'Process costing digunakan untuk produksi massal dan homogen.'
  },
  {
    topic: 'Process Costing',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Dalam metode rata-rata process costing, biaya BDP awal...',
    options: ['Dipisahkan dari biaya periode berjalan', 'Digabung dengan biaya periode berjalan', 'Tidak dihitung', 'Selalu menjadi period cost'],
    answer: 1,
    explanation: 'Average method menggabungkan biaya BDP awal dengan biaya periode berjalan.'
  },
  {
    topic: 'Process Costing',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Rumus unit ekuivalen metode rata-rata adalah...',
    options: ['Produk selesai + BDP akhir ekuivalen', 'BDP awal saja', 'Unit hilang + unit cacat', 'Produk selesai - BDP awal'],
    answer: 0,
    explanation: 'UPE average = produk selesai + BDP akhir ekuivalen.'
  },
  {
    topic: 'Process Costing',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Transferred-in cost biasanya muncul pada...',
    options: ['Departemen lanjutan dalam process costing', 'Biaya administrasi', 'Biaya pemasaran', 'Produk sampingan'],
    answer: 0,
    explanation: 'Transferred-in cost adalah biaya dari departemen sebelumnya pada process costing.'
  },
  {
    topic: 'Process Costing',
    skill: 'Membedakan konsep dan dasar pembebanan',
    difficulty: 'medium',

    q: 'Perbedaan utama FIFO dan average dalam process costing adalah...',
    options: ['FIFO menggabungkan BDP awal, average memisahkan BDP awal', 'FIFO memisahkan biaya BDP awal, average menggabungkannya', 'FIFO hanya untuk job costing', 'Average hanya untuk produk sampingan'],
    answer: 1,
    explanation: 'FIFO memisahkan biaya BDP awal dari biaya periode berjalan.'
  },
  {
    topic: 'Process Costing',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'medium',

    q: 'Unit dimulai dan selesai dalam FIFO dihitung dengan rumus...',
    options: ['Produk selesai - BDP awal', 'BDP akhir - BDP awal', 'Unit masuk - unit hilang', 'Produk selesai + BDP akhir'],
    answer: 0,
    explanation: 'Unit dimulai dan selesai = produk selesai dikurangi BDP awal.'
  },
  {
    topic: 'Biaya Kualitas dan Kerugian Produksi',
    skill: 'Mengidentifikasi prevention cost',
    difficulty: 'basic',
    q: 'Kategori biaya kualitas yang bertujuan mencegah cacat adalah...',
    options: ['Prevention cost', 'Appraisal cost', 'Internal failure cost', 'External failure cost'],
    answer: 0,
    explanation: 'Prevention cost dikeluarkan sebelum cacat terjadi, misalnya pelatihan kualitas, evaluasi pemasok, dan preventive maintenance.'
  },
  {
    topic: 'Biaya Kualitas dan Kerugian Produksi',
    skill: 'Mengidentifikasi appraisal cost',
    difficulty: 'basic',
    q: 'Biaya inspeksi dan pengujian termasuk...',
    options: ['Prevention cost', 'Appraisal cost', 'External failure cost', 'Marketing cost'],
    answer: 1,
    explanation: 'Appraisal cost adalah biaya untuk mendeteksi apakah bahan, proses, atau produk memenuhi spesifikasi.'
  },
  {
    topic: 'Biaya Kualitas dan Kerugian Produksi',
    skill: 'Membedakan rework dari scrap dan spoilage',
    difficulty: 'basic',
    q: 'Produk cacat yang masih dapat diperbaiki disebut...',
    options: ['Scrap', 'Spoilage', 'Rework', 'By-product'],
    answer: 2,
    explanation: 'Rework adalah produk cacat yang masih dapat diperbaiki secara teknis dan ekonomis agar menjadi produk baik.'
  },
  {
    topic: 'Biaya Kualitas dan Kerugian Produksi',
    skill: 'Membedakan spoilage dari scrap dan rework',
    difficulty: 'basic',
    q: 'Produk cacat yang tidak dapat atau tidak ekonomis diperbaiki disebut...',
    options: ['Scrap', 'Spoilage', 'Rework', 'Prime cost'],
    answer: 1,
    explanation: 'Spoilage adalah unit cacat yang tidak dapat diperbaiki atau tidak ekonomis diperbaiki. Jika kerugiannya abnormal, biaya harus dipisahkan sebagai loss, bukan diserap oleh unit baik.'
  }
];

const AKM201_QUIZ_UAS_BASE: QuizQuestion[] = [
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Biaya yang terjadi sebelum produk bersama mencapai titik pisah disebut...',
    options: ['Joint cost', 'Period cost', 'Sunk cost', 'Selling cost'],
    answer: 0,
    explanation: 'Joint cost adalah kos yang terjadi sebelum produk dapat dipisahkan identitasnya.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Titik saat produk bersama dapat diidentifikasi secara terpisah disebut...',
    options: ['Split-off point', 'Cost pool', 'Reorder point', 'Relevant range'],
    answer: 0,
    explanation: 'Split-off point adalah titik saat produk dapat dipisahkan identitasnya.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Metode nilai jual relatif mengalokasikan kos bersama berdasarkan...',
    options: ['Nilai jual masing-masing produk', 'Jam tenaga kerja langsung', 'Jumlah karyawan', 'Luas lantai'],
    answer: 0,
    explanation: 'Metode nilai jual relatif memakai proporsi nilai jual tiap produk.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Nilai jual hipotetis dihitung dengan rumus...',
    options: ['Nilai jual akhir - biaya proses lanjutan', 'Unit x bobot', 'Harga beli + diskon', 'Overhead aktual - overhead dibebankan'],
    answer: 0,
    explanation: 'Nilai jual hipotetis = nilai jual akhir dikurangi biaya proses lanjutan.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Produk sampingan umumnya memiliki nilai jual...',
    options: ['Relatif kecil dibanding produk utama', 'Selalu lebih besar dari produk utama', 'Nol dan tidak bisa dijual', 'Sama dengan joint product'],
    answer: 0,
    explanation: 'By-product memiliki nilai jual relatif kecil dibanding produk utama.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Dokumen permintaan pembelian bahan disebut...',
    options: ['Purchase requisition', 'Labor time ticket', 'Job cost sheet', 'Cost of production report'],
    answer: 0,
    explanation: 'Purchase requisition adalah permintaan pembelian bahan.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Laporan penerimaan bahan disebut...',
    options: ['Receiving report', 'Payroll register', 'Factory survey', 'Sales invoice'],
    answer: 0,
    explanation: 'Receiving report mencatat penerimaan dan pemeriksaan bahan.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Dalam kos bahan baku, freight-in umumnya...',
    options: ['Menambah kos bahan', 'Mengurangi kos bahan', 'Selalu menjadi biaya pemasaran', 'Tidak pernah dicatat'],
    answer: 0,
    explanation: 'Freight-in adalah biaya angkut pembelian yang dapat menambah kos bahan.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Metode perpetual mencatat bahan...',
    options: ['Setiap mutasi bahan terjadi', 'Hanya pada akhir periode', 'Hanya saat audit', 'Hanya saat produk dijual'],
    answer: 0,
    explanation: 'Perpetual mencatat setiap mutasi bahan saat transaksi terjadi.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Moving average biasanya digunakan dalam sistem...',
    options: ['Perpetual', 'Fisik', 'Job order tanpa persediaan', 'Departementalisasi overhead'],
    answer: 0,
    explanation: 'Moving average dipakai dalam perpetual dan rata-rata diperbarui setelah pembelian.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'EOQ atau KPE digunakan untuk menentukan...',
    options: ['Kuantitas pemesanan ekonomis', 'Tarif overhead departemen', 'Biaya tenaga kerja lembur', 'Kos produk sampingan'],
    answer: 0,
    explanation: 'EOQ atau KPE menentukan kuantitas pemesanan ekonomis.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Reorder point atau TPK menunjukkan...',
    options: ['Kapan perusahaan harus memesan kembali', 'Kapan produk harus dijual', 'Kapan gaji dibayar', 'Kapan overhead ditutup'],
    answer: 0,
    explanation: 'TPK atau reorder point menunjukkan titik pemesanan kembali.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Membedakan konsep dan dasar pembebanan',
    difficulty: 'basic',

    q: 'ABC inventory control persediaan mengelompokkan item berdasarkan...',
    options: ['Nilai dan kuantitas persediaan', 'Activity cost pool', 'Jam mesin', 'Biaya tenaga kerja'],
    answer: 0,
    explanation: 'ABC inventory control adalah klasifikasi persediaan A/B/C, bukan Activity-Based Costing. Metode ini membagi item berdasarkan nilai dan kuantitas.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'JIT bertujuan utama untuk...',
    options: ['Menekan persediaan dan membuat bahan datang mendekati waktu produksi', 'Menaikkan persediaan maksimum', 'Menghapus semua dokumen', 'Mengganti seluruh jurnal dengan nota penjualan'],
    answer: 0,
    explanation: 'JIT berusaha menekan persediaan agar bahan datang saat dibutuhkan.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Mengklasifikasikan pembebanan direct labor',
    difficulty: 'basic',
    q: 'Tenaga kerja langsung dibebankan ke...',
    options: ['Barang Dalam Proses', 'Biaya Pemasaran', 'Biaya Administrasi', 'Pendapatan lain-lain'],
    answer: 0,
    explanation: 'Tenaga kerja langsung masuk ke Work in Process atau Barang Dalam Proses.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Mengklasifikasikan indirect labor sebagai FOH',
    difficulty: 'basic',
    q: 'Tenaga kerja tidak langsung dibebankan ke...',
    options: ['Overhead pabrik', 'Penjualan', 'Kas', 'Produk sampingan'],
    answer: 0,
    explanation: 'Tenaga kerja tidak langsung masuk ke overhead pabrik.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Membedakan labor time ticket dari dokumen bahan',
    difficulty: 'basic',
    q: 'Dokumen yang menunjukkan waktu kerja karyawan pada job tertentu adalah...',
    options: ['Labor time ticket', 'Purchase order', 'Receiving report', 'Material record card'],
    answer: 0,
    explanation: 'Labor time ticket mencatat waktu kerja dan job yang dikerjakan.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Mengidentifikasi overtime premium',
    difficulty: 'basic',
    q: 'Premi lembur adalah...',
    options: ['Selisih tambahan di atas tarif reguler untuk jam lembur', 'Gaji pokok semua karyawan', 'Biaya bahan tidak langsung', 'Potongan pajak'],
    answer: 0,
    explanation: 'Premi lembur adalah tambahan di atas tarif reguler untuk jam lembur. Jika lembur terjadi karena pesanan khusus, premium dapat dibebankan ke job; jika umum, premium biasanya masuk FOH-Control.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Mengenali rumus applied FOH',
    difficulty: 'basic',
    q: 'Overhead dibebankan dihitung dengan rumus...',
    options: ['Tarif overhead x dasar pembebanan aktual', 'Overhead aktual - laba', 'Penjualan - HPP', 'Bahan + diskon'],
    answer: 0,
    explanation: 'Overhead dibebankan = predetermined overhead rate dikali dasar pembebanan aktual.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Menentukan status overhead variance',
    difficulty: 'basic',
    q: 'Jika overhead aktual lebih besar daripada overhead dibebankan, maka terjadi...',
    options: ['Underapplied overhead', 'Overapplied overhead', 'Prime cost', 'Gross profit'],
    answer: 0,
    explanation: 'Jika overhead aktual lebih besar, overhead kurang dibebankan atau underapplied.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Membedakan producing department dan service department',
    difficulty: 'basic',
    q: 'Departemen yang mengolah produk secara langsung disebut...',
    options: ['Departemen produksi', 'Departemen jasa', 'Departemen pemasaran', 'Departemen administrasi umum'],
    answer: 0,
    explanation: 'Departemen produksi melakukan aktivitas langsung terhadap produk.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Mengidentifikasi ciri direct method',
    difficulty: 'basic',
    q: 'Direct method dalam alokasi departemen jasa...',
    options: ['Mengabaikan jasa antar departemen jasa', 'Mengakui seluruh hubungan timbal balik', 'Selalu memakai persamaan aljabar', 'Tidak mengalokasikan biaya jasa'],
    answer: 0,
    explanation: 'Direct method mengalokasikan biaya departemen jasa langsung ke departemen produksi dan mengabaikan jasa antar departemen jasa.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Mengidentifikasi simultaneous/algebraic method',
    difficulty: 'basic',
    q: 'Simultaneous method juga disebut...',
    options: ['Algebraic method', 'High-low method', 'Moving average method', 'Specific identification method'],
    answer: 0,
    explanation: 'Simultaneous method memakai persamaan aljabar untuk hubungan timbal balik antar departemen jasa.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Mengidentifikasi dasar pembebanan ABC',
    difficulty: 'basic',
    q: 'Activity Based Costing membebankan overhead berdasarkan...',
    options: ['Aktivitas yang dikonsumsi produk', 'Satu tarif pabrik saja', 'Hanya jumlah unit', 'Hanya penjualan'],
    answer: 0,
    explanation: 'ABC membebankan overhead berdasarkan aktivitas dan driver yang dikonsumsi produk.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Membedakan activity driver dan resource driver',
    difficulty: 'basic',
    q: 'Dalam ABC, dasar untuk membebankan biaya aktivitas ke produk disebut...',
    options: ['Activity driver', 'Resource driver', 'Purchase requisition', 'Split-off point'],
    answer: 0,
    explanation: 'Activity driver membebankan biaya aktivitas ke produk atau objek biaya akhir.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Mengklasifikasikan level aktivitas setup',
    difficulty: 'basic',
    q: 'Biaya setup mesin umumnya termasuk...',
    options: ['Batch-level cost', 'Unit-level cost', 'Plant-level cost murni', 'Period cost pemasaran'],
    answer: 0,
    explanation: 'Setup biasanya terjadi per batch, sehingga termasuk batch-level cost.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Menjelaskan penggunaan informasi ABC untuk ABM',
    difficulty: 'basic',
    q: 'Activity Based Management memakai informasi ABC untuk...',
    options: ['Memperbaiki proses dan keputusan manajerial', 'Menghapus seluruh biaya langsung', 'Mengubah kas menjadi persediaan', 'Mengganti semua laporan keuangan eksternal'],
    answer: 0,
    explanation: 'ABM memakai informasi ABC untuk analisis aktivitas, pengendalian biaya, dan perbaikan proses.'
  }
,
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Metode siklus pemesanan dalam pengendalian bahan baku berarti...',
    options: ['Persediaan ditinjau pada interval waktu tetap', 'Persediaan hanya dicatat saat akhir tahun', 'Bahan selalu dibeli dalam jumlah yang sama tanpa melihat kebutuhan', 'Semua bahan langsung masuk COGS'],
    answer: 0,
    explanation: 'Metode siklus pemesanan atau cycle order/review method meninjau persediaan menurut jadwal tetap.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Two-bin method paling dekat dengan konsep...',
    options: ['Metode min-max secara fisik', 'Metode nilai jual relatif', 'Metode FIFO process costing', 'Metode simultaneous overhead'],
    answer: 0,
    explanation: 'Two-bin method memisahkan persediaan dalam dua wadah; ketika wadah pertama habis, wadah kedua menjadi sinyal pemesanan kembali. Ini merupakan implementasi praktis min-max.'
  },
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'Dalam production runs, ukuran produksi optimum dihitung untuk menentukan...',
    options: ['Jumlah unit optimal setiap kali produksi/run', 'Tarif lembur karyawan', 'Nilai jual hipotetis produk bersama', 'Total biaya departemen jasa'],
    answer: 0,
    explanation: 'Production runs dipakai ketika item diproduksi sendiri. Rumusnya mencari ukuran produksi optimum per run dan jumlah run per periode.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'medium',

    q: 'Pada contoh MAMAMIA JIT/Backflush, bahan baku yang di-backflush dari RIP ke Barang Jadi adalah...',
    options: ['Rp421.440.000', 'Rp179.440.000', 'Rp867.400.000', 'Rp138.500.000'],
    answer: 0,
    explanation: 'Bahan yang selesai dihitung dari bahan di RIP tersedia dikurangi bahan RIP akhir: Rp215.200.000 + Rp603.240.000 - Rp397.000.000 = Rp421.440.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'medium',

    q: 'Pada contoh MAMAMIA, pembebanan FOH-Control ke COGS sebesar Rp867.400.000 berasal dari...',
    options: ['FOH-Control debit yang dikumpulkan selama periode', 'Seluruh saldo barang jadi awal', 'Penjualan produk sampingan', 'Insentif tenaga kerja langsung'],
    answer: 0,
    explanation: 'FOH-Control dikumpulkan dari bahan tidak langsung, tenaga kerja tidak langsung, penyusutan, asuransi, dan overhead lain-lain, lalu dibebankan ke COGS dalam sistem backflush.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Membedakan wage plan berbasis output',
    difficulty: 'basic',
    q: 'Straight Piecework Plan membayar tenaga kerja terutama berdasarkan...',
    options: ['Jumlah unit yang dihasilkan', 'Rasio efisiensi terhadap standar waktu', 'Luas lantai pabrik', 'Nilai jual produk sampingan'],
    answer: 0,
    explanation: 'Straight piecework menekankan jumlah unit output. Semakin banyak unit yang dihasilkan, semakin besar upah yang diterima, dengan ketentuan minimum jika ada guaranteed hourly rate.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Membedakan bonus plan berbasis efisiensi',
    difficulty: 'medium',
    q: 'One-Hundred-Percent Bonus Plan berbeda dari straight piecework karena dasar utamanya adalah...',
    options: ['Rasio efisiensi atau standar waktu', 'Jumlah departemen jasa', 'Saldo bahan baku akhir', 'Harga pasar produk bersama'],
    answer: 0,
    explanation: 'One-hundred-percent bonus plan memakai standar waktu/rasio efisiensi. Bonus muncul ketika efisiensi melampaui 100%.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Mengidentifikasi group bonus plan',
    difficulty: 'medium',
    q: 'Group Bonus Plan memberikan bonus terutama ketika...',
    options: ['Kelompok menghemat waktu dibanding standar', 'Produk sampingan dijual sebagai pendapatan lain-lain', 'Overhead aktual lebih kecil dari overhead dibebankan', 'Bahan dibeli dengan diskon tunai'],
    answer: 0,
    explanation: 'Group bonus plan menghargai waktu yang dihemat oleh kelompok dan bonus biasanya dibagi proporsional kepada anggota kelompok.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Menghitung total gaji berbasis standar produksi',
    difficulty: 'medium',
    q: 'Pada contoh daftar gaji standar produksi, total gaji mingguan karyawan adalah...',
    options: ['Rp45.900', 'Rp45.000', 'Rp900', 'Rp9.600'],
    answer: 0,
    explanation: 'Total gaji Senin sampai Jumat adalah Rp9.300 + Rp9.000 + Rp9.000 + Rp9.000 + Rp9.600 = Rp45.900.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Menganalisis hasil direct method',
    difficulty: 'medium',
    q: 'Pada contoh alokasi departemen jasa Pra-UAS, hasil Direct Method untuk Perakitan dan Pengemasan adalah...',
    options: ['Rp1.256.000 dan Rp1.104.000', 'Rp1.251.428 dan Rp1.108.572', 'Rp800.000 dan Rp900.000', 'Rp120.000 dan Rp540.000'],
    answer: 0,
    explanation: 'Dengan direct method, biaya departemen jasa dialokasikan langsung ke departemen produksi, sehingga anggaran akhir Perakitan Rp1.256.000 dan Pengemasan Rp1.104.000.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Menganalisis hasil sequential method',
    difficulty: 'medium',
    q: 'Pada contoh alokasi departemen jasa Pra-UAS, hasil Sequential Method setelah pembulatan adalah...',
    options: ['Perakitan Rp1.251.428 dan Pengemasan Rp1.108.572', 'Perakitan Rp1.256.000 dan Pengemasan Rp1.104.000', 'Pemeliharaan Rp120.000 dan Teknik Rp540.000', 'Perakitan Rp800.000 dan Pengemasan Rp900.000'],
    answer: 0,
    explanation: 'Sequential method mengalokasikan Pemeliharaan lebih dulu ke Teknik, Perakitan, dan Pengemasan, lalu Teknik ke departemen produksi. Hasil akhir direkonsiliasi ke total Rp2.360.000.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Menghitung tarif aktivitas ABC',
    difficulty: 'medium',
    q: 'Pada kasus Bangtan Company ABC, tarif aktivitas setup, design, dan lighting adalah...',
    options: ['Rp12.800; Rp15.800; Rp825', 'Rp15.800; Rp12.800; Rp825', 'Rp8.820; Rp6.430; Rp3.300', 'Rp75.093,33; Rp77.860; Rp825'],
    answer: 0,
    explanation: 'Tarif setup = Rp8.000.000/625 = Rp12.800; tarif design = Rp3.950.000/250 = Rp15.800; tarif lighting = Rp3.300.000/4.000 = Rp825.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Menghitung kos per unit berdasarkan ABC',
    difficulty: 'medium',
    q: 'Pada kasus Bangtan Company ABC, kos per unit produk Boneka adalah...',
    options: ['Rp75.093,33', 'Rp77.860', 'Rp56.320.000', 'Rp8.820.000'],
    answer: 0,
    explanation: 'Total kos Boneka = direct material Rp22.500.000 + direct labor Rp25.000.000 + FOH ABC Rp8.820.000 = Rp56.320.000. Kos per unit = Rp56.320.000/750 = Rp75.093,33.'
  }

];


const AKM201_QUIZ_UTS_PRACTICE: QuizQuestion[] = [
  {
    topic: 'Process Costing',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'PT Shion memiliki bahan awal Rp1.300, pembelian Rp12.500, bahan akhir Rp1.600, TKL Rp15.200, OHP Rp12.400, BDP awal Rp3.400, BDP akhir Rp3.800, barang jadi awal Rp2.400, dan barang jadi akhir Rp2.600. Berapa HPP/COGS periode ini?',
    options: ['Rp39.200', 'Rp39.800', 'Rp40.000', 'Rp46.800'],
    answer: 0,
    explanation: 'Bahan dipakai = 1.300 + 12.500 - 1.600 = 12.200. Manufacturing cost = 12.200 + 15.200 + 12.400 = 39.800. COGM = 3.400 + 39.800 - 3.800 = 39.400. COGS = 2.400 + 39.400 - 2.600 = 39.200.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menghitung dan menerapkan rumus biaya',
    difficulty: 'basic',

    q: 'CV Sakurajima memiliki bahan awal Rp1.200, pembelian Rp7.900, dan bahan akhir Rp900. Berapa kos bahan baku yang dipakai?',
    options: ['Rp8.200', 'Rp7.600', 'Rp10.000', 'Rp5.800'],
    answer: 0,
    explanation: 'Kos bahan baku dipakai = bahan awal + pembelian - bahan akhir = 1.200 + 7.900 - 900 = Rp8.200.'
  },
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Data biaya PT Scodelario: Januari 1.600 unit dengan biaya Rp9.650; Februari 1.900 unit dengan biaya Rp11.225. Dengan high-low method, persamaan biayanya adalah...',
    options: ['TC = 1.250 + 5,25Q', 'TC = 7.810 + 1,15Q', 'TC = 5,25 + 1.250Q', 'TC = 1,15 + 7.810Q'],
    answer: 0,
    explanation: 'Variable cost per unit = (11.225 - 9.650)/(1.900 - 1.600) = 5,25. Fixed cost = 11.225 - (5,25 × 1.900) = 1.250. Persamaan biaya: TC = 1.250 + 5,25Q.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Mengisi tarif, applied FOH, dan variance',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Isi angka kunci laporan HPP PT Shion berdasarkan data bahan, TKL, OHP, BDP, dan barang jadi.',
    instruction: 'Masukkan angka saja. Titik/koma boleh digunakan; sistem akan membaca angka utamanya.',
    data: [
      'Persediaan bahan baku awal Rp1.300; pembelian bahan baku Rp12.500; persediaan bahan baku akhir Rp1.600.',
      'Tenaga kerja langsung Rp15.200 dan overhead pabrik Rp12.400.',
      'Barang dalam proses awal Rp3.400 dan barang dalam proses akhir Rp3.800.',
      'Barang jadi awal Rp2.400 dan barang jadi akhir Rp2.600.'
    ],
    blanks: [
      { id: 'shion-materials-used', label: 'Direct materials used', answer: 12200 },
      { id: 'shion-manufacturing-cost', label: 'Total manufacturing cost', answer: 39800 },
      { id: 'shion-cogm', label: 'Cost of goods manufactured', answer: 39400 },
      { id: 'shion-cogs', label: 'Cost of goods sold', answer: 39200 }
    ],
    explanation: 'Urutan kerja: bahan dipakai 12.200; manufacturing cost 39.800; COGM 39.400; COGS 39.200. Kesalahan umum adalah langsung menjumlah pembelian bahan tanpa mengurangi bahan akhir.'
  },
  {
    topic: 'Process Costing',
    skill: 'Mengisi laporan process costing dan cost reconciliation',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Isi angka kunci process costing average Departemen Pemotongan PT Alexandra.',
    instruction: 'Gunakan data kasus berikut untuk mengisi laporan process costing average.',
    data: [
      'BDP awal 250 unit.',
      'Unit ditambahkan periode ini 1.250 unit.',
      'Unit ditransfer ke departemen berikutnya 1.000 unit.',
      'BDP akhir 500 unit dengan tingkat penyelesaian 50%.',
      'Biaya BDP awal Rp1.000.000 dan biaya ditambahkan periode berjalan Rp6.500.000.'
    ],
    blanks: [
      { id: 'alex-ending-units', label: 'Unit BDP akhir', answer: 500, prefix: 'Unit' },
      { id: 'alex-eup', label: 'Unit ekuivalen average', answer: 1250, prefix: 'Unit' },
      { id: 'alex-cost-per-eup', label: 'Biaya per unit ekuivalen', answer: 6000 },
      { id: 'alex-transfer-out', label: 'Biaya produk ditransfer', answer: 6000000 },
      { id: 'alex-ending-wip-cost', label: 'Biaya BDP akhir', answer: 1500000 }
    ],
    explanation: 'Unit BDP akhir = 250 + 1.250 - 1.000 = 500. EUP = 1.000 + 500×50% = 1.250. Cost per EUP = 7.500.000/1.250 = 6.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Isi unit ekuivalen PT Alicia dengan metode rata-rata.',
    instruction: 'Gunakan data kasus berikut untuk menghitung unit ekuivalen metode rata-rata.',
    data: [
      'Unit selesai dan ditransfer 1.500 unit.',
      'BDP akhir 500 unit.',
      'Tingkat penyelesaian BDP akhir: bahan 80%.',
      'Tingkat penyelesaian BDP akhir: biaya konversi 60%.'
    ],
    blanks: [
      { id: 'alicia-material-eup', label: 'EUP bahan baku langsung', answer: 1900, prefix: 'Unit' },
      { id: 'alicia-conversion-eup', label: 'EUP biaya konversi', answer: 1800, prefix: 'Unit' }
    ],
    explanation: 'EUP bahan = 1.500 + 500×80% = 1.900. EUP konversi = 1.500 + 500×60% = 1.800.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'PT Koyomi memproses job 201-205. Job 201, 202, 203 selesai; job 204 dan 205 masih dalam proses. Hanya job 201 yang sudah terjual. Isi saldo persediaan dan COGS.',
    instruction: 'Gunakan data status job dan biaya berikut untuk menentukan saldo persediaan.',
    data: [
      'Job 201, 202, dan 203 sudah selesai diproduksi.',
      'Job 204 dan 205 masih dalam proses.',
      'Hanya Job 201 yang sudah terjual.',
      'Biaya Job 201 Rp3.000; Job 202 Rp3.500; Job 203 Rp4.500; Job 204 Rp1.500; Job 205 Rp1.000.'
    ],
    blanks: [
      { id: 'koyomi-ending-wip', label: 'Persediaan akhir barang dalam proses', answer: 2500 },
      { id: 'koyomi-ending-fg', label: 'Persediaan akhir barang jadi', answer: 8000 },
      { id: 'koyomi-cogs', label: 'Cost of goods sold', answer: 3000 }
    ],
    explanation: 'BDP akhir = job 204 + 205 = 2.500. Barang jadi akhir = job selesai tetapi belum terjual, yaitu 202 + 203 = 8.000. COGS = job 201 = 3.000.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Mengisi worksheet perhitungan biaya',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'PT Suruga menjual job 101. Isi angka ringkas laporan laba operasi.',
    instruction: 'Gunakan data job dan beban periode berikut untuk menyusun ringkasan laba operasi.',
    data: [
      'Job 101 berbiaya Rp2.500 dan sudah dijual.',
      'Job 102 berbiaya Rp3.000, sudah selesai, tetapi belum terjual.',
      'Job 103 berbiaya Rp1.000 dan masih dalam proses.',
      'Revenue dari Job 101 Rp7.500.',
      'Selling expense Rp1.000 dan administrative expense Rp750.'
    ],
    blanks: [
      { id: 'suruga-sales', label: 'Sales revenue', answer: 7500 },
      { id: 'suruga-cogs', label: 'Cost of goods sold', answer: 2500 },
      { id: 'suruga-gross-profit', label: 'Gross profit', answer: 5000 },
      { id: 'suruga-operating-income', label: 'Operating income', answer: 3250 }
    ],
    explanation: 'COGS hanya job yang sudah terjual, yaitu job 101 Rp2.500. Laba kotor = 7.500 - 2.500 = 5.000. Laba operasi = 5.000 - 1.000 - 750 = 3.250.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Pasangkan biaya produksi kemeja dengan kategori yang benar.',
    instruction: 'Fokus pada fungsi biaya: produksi, penjualan, atau administrasi.',
    choices: ['Direct Labor', 'Selling Expense', 'Direct Materials', 'Factory Overhead', 'Administrative Expense'],
    pairs: [
      { prompt: 'Upah penjahit', answer: 'Direct Labor' },
      { prompt: 'Gaji marketer/salesman', answer: 'Selling Expense' },
      { prompt: 'Pemakaian benang', answer: 'Direct Materials' },
      { prompt: 'Gaji kepala gudang', answer: 'Factory Overhead' },
      { prompt: 'Gaji Direktur Utama', answer: 'Administrative Expense' }
    ],
    explanation: 'Upah penjahit dan benang terkait langsung dengan produksi; kepala gudang termasuk overhead; marketer adalah biaya penjualan; direktur utama masuk administrasi umum.'
  },
  {
    topic: 'Process Costing',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Pasangkan jurnal dasar job/process costing berikut dengan akun debit dan kredit yang benar.',
    instruction: 'Pilih akun tujuan untuk setiap posisi jurnal.',
    choices: ['Finished Goods', 'Work in Process', 'Cost of Goods Sold', 'Sales', 'Materials Inventory'],
    pairs: [
      { prompt: 'Debit saat produk selesai diproduksi', answer: 'Finished Goods' },
      { prompt: 'Kredit saat produk selesai diproduksi', answer: 'Work in Process' },
      { prompt: 'Debit saat produk terjual dan HPP dicatat', answer: 'Cost of Goods Sold' },
      { prompt: 'Kredit saat produk terjual dan HPP dicatat', answer: 'Finished Goods' }
    ],
    explanation: 'Produk selesai dipindah dari WIP ke Finished Goods. Ketika terjual, kosnya dipindah dari Finished Goods ke COGS.'
  }
];

const AKM201_QUIZ_UTS_INTERACTIVE_MODEL: QuizQuestion[] = [
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Klasifikasikan biaya produksi berikut berdasarkan perilaku biaya.',
    instruction: 'Model soal mengikuti latihan interaktif: pilih kategori yang paling tepat untuk setiap pos biaya.',
    choices: ['Biaya tetap terkomitmen', 'Biaya tetap diskresioner', 'Biaya variabel', 'Biaya campuran'],
    pairs: [
      { prompt: 'Sewa mesin pabrik dengan kontrak jangka panjang', answer: 'Biaya tetap terkomitmen' },
      { prompt: 'Premi asuransi gedung pabrik', answer: 'Biaya tetap terkomitmen' },
      { prompt: 'Pemakaian kain untuk produksi sarung', answer: 'Biaya variabel' },
      { prompt: 'Iklan bulanan yang dapat dinaikkan atau diturunkan manajemen', answer: 'Biaya tetap diskresioner' },
      { prompt: 'Biaya listrik pabrik yang memiliki abonemen dan pemakaian', answer: 'Biaya campuran' }
    ],
    explanation: 'Biaya tetap terkomitmen bersifat jangka panjang, biaya tetap diskresioner berasal dari keputusan periodik manajemen, biaya variabel berubah proporsional dengan aktivitas, dan biaya campuran memiliki komponen tetap serta variabel.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Cocokkan situasi berikut dengan orientasi akuntansi yang sesuai.',
    instruction: 'Pilih apakah situasi lebih dekat dengan Akuntansi Manajerial atau Akuntansi Keuangan.',
    choices: ['Akuntansi Manajerial', 'Akuntansi Keuangan'],
    pairs: [
      { prompt: 'Manajer produksi meminta analisis biaya per produk untuk menentukan strategi harga.', answer: 'Akuntansi Manajerial' },
      { prompt: 'Staf akuntansi menyiapkan laporan laba rugi tahunan untuk pemegang saham.', answer: 'Akuntansi Keuangan' },
      { prompt: 'Tim produksi membandingkan biaya bahan aktual dengan anggaran bahan.', answer: 'Akuntansi Manajerial' },
      { prompt: 'Perusahaan menyusun laporan arus kas untuk publikasi eksternal.', answer: 'Akuntansi Keuangan' },
      { prompt: 'Supervisor memilih apakah komponen lebih baik dibuat sendiri atau dibeli dari pemasok.', answer: 'Akuntansi Manajerial' }
    ],
    explanation: 'Akuntansi manajerial mendukung keputusan internal, pengendalian, dan perencanaan. Akuntansi keuangan berorientasi pada pelaporan eksternal.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Identifikasi aktivitas value-added dan non-value-added pada proses produksi mebel.',
    instruction: 'Pilih kategori aktivitas. Aktivitas value-added mengubah bahan menjadi produk yang bernilai bagi pelanggan.',
    choices: ['Value-added activity', 'Non-value-added activity'],
    pairs: [
      { prompt: 'Kayu dipotong sesuai ukuran meja', answer: 'Value-added activity' },
      { prompt: 'Kayu dihaluskan dan dibentuk', answer: 'Value-added activity' },
      { prompt: 'Bagian meja dirakit', answer: 'Value-added activity' },
      { prompt: 'Kayu menunggu lama di gudang inventaris', answer: 'Non-value-added activity' },
      { prompt: 'Kayu dipindahkan bolak-balik antardepartemen tanpa proses tambahan', answer: 'Non-value-added activity' },
      { prompt: 'Produk selesai diperiksa ulang karena cacat produksi berulang', answer: 'Non-value-added activity' }
    ],
    explanation: 'Pemotongan, pembentukan, dan perakitan menambah nilai. Penyimpanan, perpindahan berlebih, dan inspeksi ulang akibat cacat merupakan aktivitas yang sebaiknya dikurangi.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Pasangkan pos biaya dengan klasifikasi biaya manufaktur yang tepat.',
    instruction: 'Gunakan klasifikasi product cost dan period cost.',
    choices: ['Direct Materials', 'Direct Labor', 'Factory Overhead', 'Selling Expense', 'Administrative Expense'],
    pairs: [
      { prompt: 'Kain utama yang menjadi bagian produk', answer: 'Direct Materials' },
      { prompt: 'Upah operator jahit yang mengerjakan produk', answer: 'Direct Labor' },
      { prompt: 'Depresiasi mesin produksi', answer: 'Factory Overhead' },
      { prompt: 'Komisi tenaga penjualan', answer: 'Selling Expense' },
      { prompt: 'Gaji direktur keuangan', answer: 'Administrative Expense' }
    ],
    explanation: 'Direct materials dan direct labor dapat ditelusuri langsung ke produk; factory overhead mendukung produksi tetapi tidak langsung; selling dan administrative expense adalah period cost.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Pasangkan transaksi manufaktur dengan akun debit yang benar.',
    instruction: 'Fokus pada alur biaya Materials → Work in Process → Finished Goods → COGS.',
    choices: ['Materials Inventory', 'Work in Process', 'Factory Overhead', 'Finished Goods', 'Cost of Goods Sold'],
    pairs: [
      { prompt: 'Membeli bahan baku secara kredit', answer: 'Materials Inventory' },
      { prompt: 'Mengeluarkan bahan baku langsung ke produksi', answer: 'Work in Process' },
      { prompt: 'Mengeluarkan bahan tidak langsung ke produksi', answer: 'Factory Overhead' },
      { prompt: 'Produk selesai dipindahkan dari proses', answer: 'Finished Goods' },
      { prompt: 'Produk terjual dan harga pokoknya dicatat', answer: 'Cost of Goods Sold' }
    ],
    explanation: 'Transaksi produksi bergerak dari persediaan bahan, ke barang dalam proses, lalu barang jadi, dan akhirnya harga pokok penjualan.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Mengisi tarif, applied FOH, dan variance',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Lengkapi Laporan Biaya Produksi PT Cendana.',
    instruction: 'Isi angka laporan biaya produksi berdasarkan data kasus berikut.',
    data: [
      'BDP awal Rp30.000.000.',
      'Pembelian bahan baku bersih Rp200.000.000.',
      'Tenaga kerja langsung Rp80.000.000.',
      'Overhead pabrik Rp100.000.000.',
      'BDP akhir Rp40.000.000.'
    ],
    blanks: [
      { id: 'cendana-beginning-wip', label: 'Persediaan barang dalam proses awal', answer: 30000000 },
      { id: 'cendana-materials', label: 'Pembelian bahan baku bersih', answer: 200000000 },
      { id: 'cendana-conversion', label: 'Biaya tenaga kerja langsung + biaya overhead pabrik', answer: 180000000 },
      { id: 'cendana-current-production-cost', label: 'Biaya produksi ditambahkan periode ini', answer: 380000000 },
      { id: 'cendana-cogm', label: 'Total biaya produksi / cost of goods manufactured', answer: 370000000 }
    ],
    explanation: 'Biaya produksi ditambahkan = 200.000.000 + 80.000.000 + 100.000.000 = 380.000.000. COGM = BDP awal 30.000.000 + biaya periode ini 380.000.000 - BDP akhir 40.000.000 = 370.000.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Lengkapi ringkasan HPP PT Sukamaju.',
    instruction: 'Lengkapi ringkasan HPP berdasarkan data kasus berikut.',
    data: [
      'Total kos produksi periode ini Rp110.000.000.',
      'Persediaan barang dalam proses awal Rp80.000.000 dan akhir Rp90.000.000.',
      'Persediaan barang jadi awal Rp150.000.000.',
      'Persediaan barang jadi akhir Rp120.000.000.'
    ],
    blanks: [
      { id: 'sukamaju-cogm', label: 'Cost of goods manufactured', answer: 100000000 },
      { id: 'sukamaju-gafs', label: 'Barang tersedia untuk dijual', answer: 250000000 },
      { id: 'sukamaju-cogs', label: 'Cost of goods sold', answer: 130000000 }
    ],
    explanation: 'COGM = 80.000.000 + 110.000.000 - 90.000.000 = 100.000.000. Barang tersedia untuk dijual = 150.000.000 + 100.000.000 = 250.000.000. COGS = 250.000.000 - 120.000.000 = 130.000.000.'
  },
  {
    topic: 'Analisis Perilaku Biaya',
    skill: 'Mengisi worksheet perhitungan biaya',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Hitung persamaan biaya dengan high-low method.',
    instruction: 'Hitung komponen biaya campuran berdasarkan data kasus berikut.',
    data: [
      'Aktivitas rendah: 1.600 jam dengan biaya Rp9.650.000.',
      'Aktivitas tinggi: 1.900 jam dengan biaya Rp11.225.000.',
      'Estimasi yang diminta: total biaya pada 2.000 jam.'
    ],
    blanks: [
      { id: 'highlow-variable', label: 'Biaya variabel per jam', answer: 5250 },
      { id: 'highlow-fixed', label: 'Biaya tetap', answer: 1250000 },
      { id: 'highlow-cost-2000', label: 'Estimasi total biaya pada 2.000 jam', answer: 11750000 }
    ],
    explanation: 'Biaya variabel = (11.225.000 - 9.650.000) / (1.900 - 1.600) = 5.250 per jam. Biaya tetap = 11.225.000 - (5.250 × 1.900) = 1.250.000. Pada 2.000 jam, total biaya = 1.250.000 + 5.250×2.000 = 11.750.000.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Mengisi tarif, applied FOH, dan variance',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Isi data kuantitas dan unit ekuivalen metode rata-rata tertimbang.',
    instruction: 'Gunakan data kuantitas berikut untuk menghitung unit ekuivalen weighted-average.',
    data: [
      'BDP awal 400 unit.',
      'Unit dimasukkan periode ini 1.600 unit.',
      'Unit selesai dan ditransfer 1.700 unit.',
      'BDP akhir 300 unit.',
      'Tingkat penyelesaian BDP akhir: bahan 75%, tenaga kerja 40%, dan FOH 25%.'
    ],
    blanks: [
      { id: 'avg-total-units', label: 'Jumlah unit yang diolah', answer: 2000, prefix: '', suffix: 'unit' },
      { id: 'avg-ending-wip', label: 'Jumlah BDP akhir', answer: 300, prefix: '', suffix: 'unit' },
      { id: 'avg-eup-materials', label: 'Unit ekuivalen bahan baku', answer: 1925, prefix: '', suffix: 'unit' },
      { id: 'avg-eup-labor', label: 'Unit ekuivalen tenaga kerja', answer: 1820, prefix: '', suffix: 'unit' },
      { id: 'avg-eup-foh', label: 'Unit ekuivalen overhead', answer: 1775, prefix: '', suffix: 'unit' }
    ],
    explanation: 'Dalam weighted-average, unit ekuivalen = unit ditransfer + BDP akhir × tingkat penyelesaian. Bahan = 1.700 + 300×75% = 1.925; tenaga kerja = 1.700 + 300×40% = 1.820; FOH = 1.700 + 300×25% = 1.775.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Lengkapi cost assigned process costing metode rata-rata.',
    instruction: 'Gunakan data berikut untuk menghitung cost assigned metode rata-rata.',
    data: [
      'Unit selesai dan ditransfer 1.000 unit.',
      'BDP akhir 500 unit.',
      'Tingkat penyelesaian BDP akhir: bahan 100% dan konversi 40%.',
      'Total biaya bahan Rp6.000.000.',
      'Total biaya konversi Rp3.600.000.'
    ],
    blanks: [
      { id: 'pc-avg-eup-materials', label: 'EUP bahan', answer: 1500, prefix: '', suffix: 'unit' },
      { id: 'pc-avg-eup-conversion', label: 'EUP konversi', answer: 1200, prefix: '', suffix: 'unit' },
      { id: 'pc-avg-cpu-materials', label: 'Kos per EUP bahan', answer: 4000 },
      { id: 'pc-avg-cpu-conversion', label: 'Kos per EUP konversi', answer: 3000 },
      { id: 'pc-avg-transfer-out', label: 'Kos produk ditransfer', answer: 7000000 },
      { id: 'pc-avg-ending-wip', label: 'Kos BDP akhir', answer: 2600000 }
    ],
    explanation: 'EUP bahan = 1.000 + 500 = 1.500; EUP konversi = 1.000 + 500×40% = 1.200. Kos per EUP bahan 4.000 dan konversi 3.000. Transfer out = 1.000×(4.000+3.000) = 7.000.000. BDP akhir = 500×4.000 + 200×3.000 = 2.600.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Hitung unit ekuivalen metode FIFO.',
    instruction: 'Gunakan data berikut untuk menghitung unit ekuivalen FIFO.',
    data: [
      'BDP awal 200 unit dan sudah 60% selesai untuk konversi.',
      'Unit dimulai periode ini 800 unit.',
      'Unit selesai dan ditransfer 700 unit.',
      'BDP akhir 300 unit dan 40% selesai untuk konversi.',
      'Bahan ditambahkan pada awal proses.'
    ],
    blanks: [
      { id: 'fifo-started-completed', label: 'Unit dimulai dan selesai periode ini', answer: 500, prefix: '', suffix: 'unit' },
      { id: 'fifo-eup-materials', label: 'EUP bahan FIFO', answer: 800, prefix: '', suffix: 'unit' },
      { id: 'fifo-eup-conversion', label: 'EUP konversi FIFO', answer: 700, prefix: '', suffix: 'unit' }
    ],
    explanation: 'Unit dimulai dan selesai = 700 - 200 = 500. FIFO bahan = unit dimulai dan selesai 500 + BDP akhir 300 = 800. FIFO konversi = penyelesaian BDP awal 200×40% + 500 + 300×40% = 700.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Mengisi tarif, applied FOH, dan variance',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Lengkapi job order cost sheet ringkas.',
    instruction: 'Gunakan data berikut untuk melengkapi job order cost sheet ringkas.',
    data: [
      'Job A memakai bahan langsung Rp2.000.000.',
      'Tenaga kerja langsung Job A Rp1.500.000.',
      'Tarif FOH dibebankan sebesar 150% dari tenaga kerja langsung.',
      'Job A sudah selesai, tetapi belum terjual.'
    ],
    blanks: [
      { id: 'joba-applied-foh', label: 'FOH dibebankan ke Job A', answer: 2250000 },
      { id: 'joba-total-cost', label: 'Total kos Job A', answer: 5750000 },
      { id: 'joba-finished-goods', label: 'Kenaikan Finished Goods jika job selesai belum terjual', answer: 5750000 }
    ],
    explanation: 'FOH dibebankan = 150% × 1.500.000 = 2.250.000. Total kos job = 2.000.000 + 1.500.000 + 2.250.000 = 5.750.000. Karena selesai belum terjual, kos masuk Finished Goods.'
  },
  {
    kind: 'report-fill',
    topic: 'Biaya Kualitas dan Kerugian Produksi',
    skill: 'Menyusun laporan biaya kualitas berdasarkan empat kategori',
    difficulty: 'medium',
    q: 'Ringkas biaya kualitas PT Mahira.',
    instruction: 'Gunakan data berikut untuk mengklasifikasikan biaya kualitas PT Mahira.',
    data: [
      'Pelatihan kualitas Rp2.400.000.',
      'Inspeksi bahan Rp1.600.000.',
      'Rework Rp3.500.000.',
      'Scrap normal Rp900.000.',
      'Klaim garansi Rp4.200.000.',
      'Retur pelanggan Rp1.300.000.'
    ],
    blanks: [
      { id: 'quality-prevention', label: 'Prevention cost', answer: 2400000 },
      { id: 'quality-appraisal', label: 'Appraisal cost', answer: 1600000 },
      { id: 'quality-internal-failure', label: 'Internal failure cost', answer: 4400000 },
      { id: 'quality-external-failure', label: 'External failure cost', answer: 5500000 },
      { id: 'quality-total', label: 'Total quality cost', answer: 13900000 }
    ],
    explanation: 'Prevention = pelatihan; appraisal = inspeksi; internal failure = rework + scrap; external failure = klaim garansi + retur pelanggan. Total = 13.900.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menganalisis lebih dari satu konsep yang benar',
    difficulty: 'medium',

    kind: 'multi-select',
    q: 'Pilih semua pernyataan yang benar tentang laporan biaya produksi dan HPP.',
    options: [
      'Cost of goods manufactured dihitung dari BDP awal + biaya produksi periode ini - BDP akhir.',
      'Cost of goods sold dihitung dari barang jadi awal + cost of goods manufactured - barang jadi akhir.',
      'Selling expense dimasukkan ke Work in Process sebagai biaya produksi.',
      'Direct materials used dihitung dari persediaan bahan awal + pembelian bahan bersih - persediaan bahan akhir.',
      'Administrative expense adalah product cost yang masuk persediaan barang jadi.'
    ],
    answers: [0, 1, 3],
    explanation: 'Selling dan administrative expense adalah period cost, bukan product cost. Rumus COGM, COGS, dan bahan dipakai harus dipakai berurutan.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menganalisis lebih dari satu konsep yang benar',
    difficulty: 'medium',

    kind: 'multi-select',
    q: 'Pilih semua pernyataan yang benar tentang scatterplot dan high-low method.',
    options: [
      'Scatterplot membantu melihat pola hubungan antara aktivitas dan biaya sebelum memilih model biaya.',
      'High-low method memilih titik berdasarkan aktivitas tertinggi dan aktivitas terendah.',
      'Garis horizontal pada grafik biaya campuran dapat dipahami sebagai komponen biaya tetap.',
      'High-low method selalu lebih akurat daripada regresi karena memakai semua titik data.',
      'Biaya variabel per unit dapat dihitung dari perubahan biaya dibagi perubahan aktivitas.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'High-low hanya memakai dua titik sehingga tidak selalu lebih akurat daripada regresi atau scatterplot yang mempertimbangkan pola data lebih luas.'
  },
  {
    topic: 'Process Costing',
    skill: 'Menganalisis lebih dari satu konsep yang benar',
    difficulty: 'medium',

    kind: 'multi-select',
    q: 'Pilih semua pernyataan yang benar tentang weighted-average dan FIFO process costing.',
    options: [
      'Weighted-average menggabungkan biaya BDP awal dengan biaya yang ditambahkan periode berjalan.',
      'FIFO memisahkan pekerjaan untuk menyelesaikan BDP awal dari pekerjaan periode berjalan.',
      'Dalam FIFO, unit dimulai dan selesai = unit selesai ditransfer - unit BDP awal.',
      'Weighted-average selalu mengabaikan BDP akhir.',
      'Unit ekuivalen BDP akhir dihitung dengan mengalikan unit BDP akhir dan tingkat penyelesaian.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'Weighted-average tetap memperhitungkan BDP akhir melalui unit ekuivalen. Perbedaan utama FIFO adalah pemisahan pekerjaan BDP awal dari pekerjaan periode berjalan.'
  }
];



const AKM201_QUIZ_UAS_INTERACTIVE_MODEL: QuizQuestion[] = [
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Pasangkan perlakuan pendapatan produk sampingan dengan dampak penyajiannya.',
    instruction: 'Pilih lokasi perlakuan yang paling tepat dalam laporan laba rugi.',
    choices: [
      'Menambah penjualan bersih',
      'Disajikan sebagai pendapatan lain-lain',
      'Mengurangi harga pokok penjualan',
      'Mengurangi jumlah biaya produksi produk utama'
    ],
    pairs: [
      { prompt: 'Pendapatan produk sampingan diperlakukan sebagai pendapatan penjualan', answer: 'Menambah penjualan bersih' },
      { prompt: 'Pendapatan produk sampingan diperlakukan sebagai pendapatan nonoperasi', answer: 'Disajikan sebagai pendapatan lain-lain' },
      { prompt: 'Pendapatan produk sampingan dikurangkan setelah HPP bruto dihitung', answer: 'Mengurangi harga pokok penjualan' },
      { prompt: 'Pendapatan produk sampingan dikurangkan sebelum barang tersedia untuk dijual dihitung', answer: 'Mengurangi jumlah biaya produksi produk utama' }
    ],
    explanation: 'Produk sampingan dapat disajikan sebagai tambahan pendapatan atau sebagai pengurang biaya. Yang harus dijaga adalah posisi pengurangannya dalam laporan.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Lengkapi laporan laba rugi produk sampingan dengan perlakuan sebagai pengurang HPP.',
    instruction: 'Gunakan data produk utama dan produk sampingan berikut untuk melengkapi laporan laba rugi dengan perlakuan pendapatan produk sampingan sebagai pengurang HPP.',
    data: [
      'Penjualan produk utama Rp60.075.000.',
      'Persediaan awal produk utama Rp22.275.000.',
      'Biaya produksi produk utama Rp48.375.000.',
      'Persediaan akhir produk utama Rp10.575.000.',
      'Pendapatan produk sampingan Rp25.000.000.',
      'Beban pemasaran dan administrasi Rp4.900.000.'
    ],
    blanks: [
      { id: 'byprod-hpp-bruto', label: 'Total harga pokok penjualan sebelum pengurang produk sampingan', answer: 60075000 },
      { id: 'byprod-hpp-neto', label: 'Harga pokok penjualan setelah dikurangi pendapatan produk sampingan', answer: 35075000 },
      { id: 'byprod-gross-profit', label: 'Laba kotor', answer: 25000000 },
      { id: 'byprod-operating-income', label: 'Laba operasi', answer: 20100000 }
    ],
    explanation: 'HPP bruto = 22.275.000 + 48.375.000 - 10.575.000 = 60.075.000. Setelah dikurangi pendapatan produk sampingan 25.000.000, HPP neto = 35.075.000. Laba operasi = 25.000.000 - 4.900.000 = 20.100.000.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengisi alokasi joint cost dan rekonsiliasi',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Hitung alokasi joint cost dengan metode nilai jual relatif.',
    instruction: 'Gunakan data produk bersama berikut untuk menghitung nilai jual relatif dan alokasi kos bersama.',
    data: [
      'Produk A: 1.000 unit dengan harga jual pada split-off Rp40.000 per unit.',
      'Produk B: 500 unit dengan harga jual pada split-off Rp60.000 per unit.',
      'Joint cost sebelum split-off Rp49.000.000.',
      'Metode yang diminta: nilai jual relatif.'
    ],
    blanks: [
      { id: 'joint-sales-a', label: 'Nilai jual Produk A', answer: 40000000 },
      { id: 'joint-sales-b', label: 'Nilai jual Produk B', answer: 30000000 },
      { id: 'joint-total-sales', label: 'Total nilai jual relatif', answer: 70000000 },
      { id: 'joint-alloc-a', label: 'Alokasi joint cost ke Produk A', answer: 28000000 },
      { id: 'joint-alloc-b', label: 'Alokasi joint cost ke Produk B', answer: 21000000 }
    ],
    explanation: 'Proporsi Produk A = 40/70 dan Produk B = 30/70. Alokasi joint cost: A = 49.000.000×40/70 = 28.000.000; B = 21.000.000.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengisi alokasi joint cost dan rekonsiliasi',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Hitung nilai jual hipotetis dan alokasi joint cost setelah proses lanjutan.',
    instruction: 'Gunakan data nilai jual akhir dan biaya proses lanjutan berikut untuk menghitung nilai jual hipotetis dan alokasi joint cost.',
    data: [
      'Produk X memiliki nilai jual akhir Rp80.000.000.',
      'Biaya proses lanjutan Produk X Rp14.000.000.',
      'Produk Y memiliki nilai jual akhir Rp60.000.000.',
      'Biaya proses lanjutan Produk Y Rp10.000.000.',
      'Joint cost yang akan dialokasikan Rp58.000.000.',
      'Metode yang diminta: nilai jual hipotetis atau net realizable value.'
    ],
    blanks: [
      { id: 'hypo-x', label: 'Nilai jual hipotetis Produk X', answer: 66000000 },
      { id: 'hypo-y', label: 'Nilai jual hipotetis Produk Y', answer: 50000000 },
      { id: 'hypo-total', label: 'Total nilai jual hipotetis', answer: 116000000 },
      { id: 'hypo-alloc-x', label: 'Alokasi joint cost ke Produk X', answer: 33000000, tolerance: 1 },
      { id: 'hypo-alloc-y', label: 'Alokasi joint cost ke Produk Y', answer: 25000000, tolerance: 1 }
    ],
    explanation: 'Nilai jual hipotetis = nilai jual akhir dikurangi biaya proses lanjutan. Proporsi X = 66/116 dan Y = 50/116 sehingga alokasi joint cost masing-masing Rp33.000.000 dan Rp25.000.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Cocokkan metode pengendalian bahan dengan ciri utamanya.',
    instruction: 'Gunakan istilah pengendalian bahan TM 9.',
    choices: ['Cycle order', 'Min-max method', 'Two-bin method', 'Selective control', 'Production runs'],
    pairs: [
      { prompt: 'Persediaan ditinjau bergilir menurut jadwal tertentu', answer: 'Cycle order' },
      { prompt: 'Pemesanan dilakukan saat stok menyentuh batas minimum dan dibatasi jumlah maksimum', answer: 'Min-max method' },
      { prompt: 'Persediaan dipisah dalam dua tempat; tempat kedua menjadi sinyal pemesanan', answer: 'Two-bin method' },
      { prompt: 'Pengawasan difokuskan pada item bernilai tinggi atau kritis', answer: 'Selective control' },
      { prompt: 'Menentukan ukuran batch produksi yang ekonomis', answer: 'Production runs' }
    ],
    explanation: 'Metode pengendalian bahan dipilih sesuai risiko, nilai persediaan, dan pola pemakaian bahan.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Hitung kuantitas pemesanan ekonomis dan titik pemesanan kembali.',
    instruction: 'Gunakan data pengendalian bahan baku berikut untuk menghitung EOQ/KPE dan reorder point.',
    data: [
      'Kebutuhan tahunan 6.000 unit.',
      'Biaya pesan Rp65.000 per pesanan.',
      'Harga bahan per unit Rp15.600.',
      'Carrying cost 20% dari harga bahan per unit per tahun.',
      'Kebutuhan harian 20 unit.',
      'Lead time 5 hari.',
      'Safety stock 40 unit.'
    ],
    blanks: [
      { id: 'eoq-carrying', label: 'Carrying cost per unit per tahun', answer: 3120 },
      { id: 'eoq-qty', label: 'EOQ / kuantitas pemesanan ekonomis', answer: 500, prefix: '', suffix: 'unit' },
      { id: 'eoq-orders', label: 'Jumlah pesanan per tahun', answer: 12, prefix: '', suffix: 'kali' },
      { id: 'rop', label: 'Reorder point / titik pemesanan kembali', answer: 140, prefix: '', suffix: 'unit' }
    ],
    explanation: 'Carrying cost = 20%×15.600 = 3.120. EOQ = akar dari (2×6.000×65.000)/3.120 = 500. ROP = kebutuhan harian×lead time + safety stock = 20×5 + 40 = 140 unit.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Memilih akun dan klasifikasi yang tepat',
    difficulty: 'medium',

    kind: 'account-match',
    q: 'Pasangkan transaksi JIT/backflush dengan jurnal ringkasnya.',
    instruction: 'Pilih akun debit/kredit utama yang paling tepat.',
    choices: [
      'RIP / Account Payable',
      'Finished Goods / RIP',
      'COGS / Finished Goods',
      'COGS / FOH-Control',
      'RIP dan Finished Goods / COGS'
    ],
    pairs: [
      { prompt: 'Bahan baku diterima dan dibeli secara kredit', answer: 'RIP / Account Payable' },
      { prompt: 'Komponen bahan pekerjaan selesai di-backflush dari RIP', answer: 'Finished Goods / RIP' },
      { prompt: 'Komponen bahan barang terjual di-backflush dari Barang Jadi', answer: 'COGS / Finished Goods' },
      { prompt: 'Overhead pabrik yang diakumulasi dibebankan ke harga pokok penjualan', answer: 'COGS / FOH-Control' },
      { prompt: 'Saldo akhir persediaan disesuaikan untuk komponen biaya konversi', answer: 'RIP dan Finished Goods / COGS' }
    ],
    explanation: 'Pada backflush costing, pencatatan biaya sering ditunda dan dibalik ke akun persediaan/COGS saat output selesai atau dijual.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Menganalisis lebih dari satu konsep yang benar',
    difficulty: 'medium',

    kind: 'multi-select',
    q: 'Pilih semua pernyataan yang benar tentang JIT dan backflush costing.',
    options: [
      'Backflush dapat memindahkan bahan dari RIP ke Barang Jadi saat pekerjaan selesai.',
      'Biaya konversi dapat dibebankan lebih dulu ke COGS lalu disesuaikan ke persediaan akhir.',
      'JIT yang matang cenderung mempertahankan persediaan besar sepanjang waktu.',
      'Bahan baku tidak langsung dapat dicatat terpisah sebagai perlengkapan atau FOH sesuai kebijakan akun.',
      'Backflush menghapus kebutuhan rekonsiliasi saldo akhir persediaan.'
    ],
    answers: [0, 1, 3],
    explanation: 'JIT menekan persediaan, tetapi saldo akhir tetap perlu direkonsiliasi. Dalam backflush, perpindahan biaya dapat terjadi setelah output selesai atau dijual.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Menghitung gaji harian, insentif, dan total payroll',
    difficulty: 'medium',
    kind: 'report-fill',
    q: 'Lengkapi perhitungan daftar gaji harian berdasarkan standar produksi.',
    instruction: 'Gunakan data standar produksi dan output harian berikut untuk melengkapi daftar gaji.',
    data: [
      'Standar produksi 35 unit per jam.',
      'Jam kerja reguler 6 jam per hari.',
      'Tarif upah Rp1.500 per jam.',
      'Insentif 70% dari tarif upah per jam untuk output di atas standar harian.',
      'Output Senin 220 unit.',
      'Output Selasa 190 unit.',
      'Output Rabu 210 unit.',
      'Output Kamis 205 unit.',
      'Output Jumat 230 unit.'
    ],
    blanks: [
      { id: 'pay-monday', label: 'Gaji Senin', answer: 9300 },
      { id: 'pay-tuesday', label: 'Gaji Selasa', answer: 9000 },
      { id: 'pay-wednesday', label: 'Gaji Rabu', answer: 9000 },
      { id: 'pay-thursday', label: 'Gaji Kamis', answer: 9000 },
      { id: 'pay-friday', label: 'Gaji Jumat', answer: 9600 },
      { id: 'pay-total', label: 'Total gaji minggu pertama', answer: 45900 }
    ],
    explanation: 'Output standar = 210 unit/hari. Insentif hanya untuk output di atas standar: Senin 300 dan Jumat 600. Total gaji = 45.900.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Mendistribusikan labor cost ke akun yang tepat',
    difficulty: 'medium',
    kind: 'account-match',
    q: 'Pasangkan jenis upah/biaya tenaga kerja dengan perlakuan biayanya.',
    instruction: 'Pilih pembebanan biaya yang paling tepat.',
    choices: ['Direct labor / WIP', 'Factory overhead', 'Marketing expense', 'Administrative expense'],
    pairs: [
      { prompt: 'Upah operator yang mengerjakan produk secara langsung', answer: 'Direct labor / WIP' },
      { prompt: 'Gaji mandor dan tenaga kerja tidak langsung pabrik', answer: 'Factory overhead' },
      { prompt: 'Gaji bagian pemasaran', answer: 'Marketing expense' },
      { prompt: 'Gaji staf administrasi kantor pusat', answer: 'Administrative expense' },
      { prompt: 'Premi insentif di atas standar produksi menurut kunci soal', answer: 'Factory overhead' }
    ],
    explanation: 'Direct labor masuk WIP, indirect labor dan premi tertentu dapat masuk FOH, sedangkan pemasaran dan administrasi adalah period cost.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Menghitung predetermined FOH rate, applied FOH, dan overhead variance',
    difficulty: 'medium',
    kind: 'report-fill',
    q: 'Hitung tarif overhead pabrik dan selisih overhead.',
    instruction: 'Gunakan data overhead pabrik berikut untuk menghitung tarif overhead, overhead dibebankan, dan selisih overhead.',
    data: [
      'Factory overhead dianggarkan Rp240.000.000.',
      'Kapasitas normal 60.000 jam mesin.',
      'Jam mesin aktual 58.000 jam.',
      'Factory overhead aktual Rp236.000.000.',
      'Dasar pembebanan: jam mesin.'
    ],
    blanks: [
      { id: 'foh-rate', label: 'Predetermined overhead rate per jam mesin', answer: 4000 },
      { id: 'foh-applied', label: 'FOH dibebankan ke produksi', answer: 232000000 },
      { id: 'foh-variance', label: 'Selisih overhead', answer: 4000000 },
      { id: 'foh-status', label: 'Nilai underapplied overhead', answer: 4000000 }
    ],
    explanation: 'Tarif FOH = 240.000.000/60.000 = 4.000. FOH applied = 58.000×4.000 = 232.000.000. Karena FOH aktual 236.000.000 lebih besar daripada applied FOH, overhead kurang dibebankan atau underapplied sebesar Rp4.000.000. Tarif selalu memakai data estimasi, sedangkan selisih memakai actual dibanding applied.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Membedakan actual FOH, applied FOH, underapplied, dan overapplied',
    difficulty: 'basic',
    kind: 'multi-select',
    q: 'Pilih semua pernyataan yang benar tentang factory overhead.',
    options: [
      'FOH applied dihitung dengan tarif overhead yang telah ditentukan dikali dasar pembebanan aktual.',
      'Jika FOH aktual lebih besar dari FOH applied, terjadi underapplied overhead.',
      'Direct material selalu dicatat sebagai factory overhead.',
      'Overhead pabrik dapat mencakup tenaga kerja tidak langsung dan depresiasi pabrik.',
      'Overapplied overhead berarti overhead aktual lebih besar daripada overhead dibebankan.'
    ],
    answers: [0, 1, 3],
    explanation: 'FOH applied dihitung dengan predetermined rate dan dasar aktual. Underapplied terjadi saat actual lebih besar daripada applied. Overapplied terjadi ketika FOH applied lebih besar dari FOH aktual. Direct material bukan FOH karena dapat ditelusuri langsung ke produk.'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Mencocokkan istilah departementalisasi overhead',
    difficulty: 'basic',
    kind: 'account-match',
    q: 'Pasangkan istilah departementalisasi overhead dengan maknanya.',
    instruction: 'Pilih konsep yang sesuai.',
    choices: ['Departemen jasa', 'Departemen produksi', 'Direct method', 'Sequential method', 'Tarif departemental'],
    pairs: [
      { prompt: 'Departemen yang mendukung departemen lain tetapi tidak menghasilkan produk secara langsung', answer: 'Departemen jasa' },
      { prompt: 'Departemen yang mengolah produk secara langsung', answer: 'Departemen produksi' },
      { prompt: 'Metode yang mengalokasikan biaya jasa langsung ke departemen produksi', answer: 'Direct method' },
      { prompt: 'Metode yang mengakui sebagian jasa antar departemen jasa secara berurutan', answer: 'Sequential method' },
      { prompt: 'Tarif FOH yang dihitung per departemen', answer: 'Tarif departemental' }
    ],
    explanation: 'Departementalisasi overhead menuntut pemisahan departemen jasa dan produksi serta dasar alokasi yang relevan.'
  },
  {
    kind: 'report-fill',
    topic: 'FOH Departmentalization',
    skill: 'Menghitung alokasi service department dengan direct method',
    difficulty: 'medium',
    q: 'Hitung alokasi biaya departemen jasa dengan direct method.',
    instruction: 'Gunakan data departemen jasa berikut untuk menghitung alokasi direct method ke departemen produksi.',
    data: [
      'Departemen jasa A memiliki biaya Rp300.000.',
      'Departemen jasa A melayani Produksi X 600 jam dan Produksi Y 400 jam.',
      'Departemen jasa B memiliki biaya Rp200.000.',
      'Departemen jasa B melayani Produksi X 250 jam dan Produksi Y 750 jam.',
      'Direct method: semua biaya departemen jasa dialokasikan langsung ke departemen produksi berdasarkan proporsi jasa yang dipakai departemen produksi.'
    ],
    blanks: [
      { id: 'dm-a-x', label: 'Alokasi Jasa A ke Produksi X', answer: 180000 },
      { id: 'dm-a-y', label: 'Alokasi Jasa A ke Produksi Y', answer: 120000 },
      { id: 'dm-b-x', label: 'Alokasi Jasa B ke Produksi X', answer: 50000 },
      { id: 'dm-b-y', label: 'Alokasi Jasa B ke Produksi Y', answer: 150000 },
      { id: 'dm-total-x', label: 'Total biaya jasa dialokasikan ke Produksi X', answer: 230000 },
      { id: 'dm-total-y', label: 'Total biaya jasa dialokasikan ke Produksi Y', answer: 270000 }
    ],
    explanation: 'Jasa A: X 60% dan Y 40%. Jasa B: X 25% dan Y 75%. Total alokasi X = 230.000 dan Y = 270.000.'
  },
  {
    kind: 'account-match',
    topic: 'Activity-Based Costing',
    skill: 'Memasangkan aktivitas dengan cost driver',
    difficulty: 'medium',
    q: 'Pasangkan aktivitas ABC dengan cost driver yang tepat.',
    instruction: 'Pilih pemicu biaya yang paling sesuai untuk tiap aktivitas.',
    choices: ['Setup hours', 'Design changes', 'Luas area', 'Unit produksi', 'Jumlah purchase order'],
    pairs: [
      { prompt: 'Setup mesin untuk batch produksi', answer: 'Setup hours' },
      { prompt: 'Perubahan desain produk', answer: 'Design changes' },
      { prompt: 'Penerangan dan fasilitas pabrik', answer: 'Luas area' },
      { prompt: 'Aktivitas pembelian bahan', answer: 'Jumlah purchase order' }
    ],
    explanation: 'Driver harus merefleksikan penyebab konsumsi aktivitas. Setup memakai setup hours, design memakai design changes, dan fasilitas memakai luas area.'
  },
  {
    kind: 'report-fill',
    topic: 'Activity-Based Costing',
    skill: 'Menghitung FOH ABC dan kos per unit',
    difficulty: 'advanced',
    q: 'Lengkapi laporan ABC ringkas dua produk.',
    instruction: 'Gunakan data driver aktivitas berikut untuk melengkapi laporan ABC dua produk.',
    data: [
      'Produk R memakai 300 setup hours, 120 design changes, dan 1.500 m² area fasilitas.',
      'Produk S memakai 200 setup hours, 80 design changes, dan 1.000 m² area fasilitas.',
      'Tarif aktivitas setup Rp10.000 per setup hour.',
      'Tarif aktivitas design Rp20.000 per design change.',
      'Tarif aktivitas facility Rp500 per m².',
      'Biaya langsung Produk R Rp18.850.000 dan unit produksi 500 unit.',
      'Biaya langsung Produk S Rp15.890.000 dan unit produksi 400 unit.'
    ],
    blanks: [
      { id: 'abc-foh-r', label: 'FOH ABC Produk R', answer: 6150000 },
      { id: 'abc-foh-s', label: 'FOH ABC Produk S', answer: 4100000 },
      { id: 'abc-total-foh', label: 'Total FOH dialokasikan', answer: 10250000 },
      { id: 'abc-r-unit-cost', label: 'Jika DM+DL Produk R Rp18.850.000 dan unit 500, kos per unit R', answer: 50000, tolerance: 1 },
      { id: 'abc-s-unit-cost', label: 'Jika DM+DL Produk S Rp15.890.000 dan unit 400, kos per unit S', answer: 49975, tolerance: 1 }
    ],
    explanation: 'FOH R = 300×10.000 + 120×20.000 + 1.500×500 = 6.150.000. FOH S = 4.100.000. Kos per unit R = 25.000.000/500 = 50.000; S = 19.990.000/400 = 49.975.'
  },
  {
    kind: 'multi-select',
    topic: 'Activity-Based Costing',
    skill: 'Mengevaluasi konsep ABC dan facility-sustaining cost',
    difficulty: 'medium',
    q: 'Pilih semua pernyataan yang benar tentang ABC.',
    options: [
      'ABC menelusuri biaya overhead melalui aktivitas dan cost driver.',
      'Setup cost sering diklasifikasikan sebagai batch-level activity.',
      'Design cost dapat diklasifikasikan sebagai product-level activity.',
      'Facility-sustaining cost selalu berubah langsung mengikuti unit produksi.',
      'ABC cocok ketika konsumsi overhead antarproduk tidak proporsional dengan satu dasar alokasi saja.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'Facility-sustaining cost mendukung fasilitas secara umum dan tidak selalu berubah langsung mengikuti unit produksi.'
  }
];

const AKM201_QUIZ_UAS_PRACTICE: QuizQuestion[] = [
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Mengisi laporan pengendalian bahan baku',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Isi angka utama laporan laba rugi produk utama dan produk sampingan PT Naranuansa.',
    instruction: 'Gunakan data PT Naranuansa berikut untuk mengisi angka utama laporan laba rugi produk utama dan produk sampingan.',
    data: [
      'Persediaan awal produk utama 4.950 unit dengan kos Rp4.500 per unit.',
      'Jumlah biaya produksi produk utama 10.750 unit dengan kos Rp4.500 per unit.',
      'Penjualan produk utama 13.350 unit dengan harga jual atau nilai laporan Rp4.500 per unit.',
      'Persediaan akhir produk utama 2.350 unit dengan kos Rp4.500 per unit.',
      'Pendapatan produk sampingan Rp25.000.000.',
      'Beban pemasaran dan administrasi Rp4.900.000.'
    ],
    blanks: [
      { id: 'naranuansa-sales-main', label: 'Penjualan produk utama', answer: 60075000 },
      { id: 'naranuansa-beginning-inventory', label: 'Persediaan awal', answer: 22275000 },
      { id: 'naranuansa-production-cost', label: 'Total biaya pokok produksi', answer: 48375000 },
      { id: 'naranuansa-ending-inventory', label: 'Persediaan akhir', answer: 10575000 },
      { id: 'naranuansa-operating-income', label: 'Laba operasi akhir', answer: 20100000 }
    ],
    explanation: 'Penjualan produk utama = 13.350×4.500 = 60.075.000. HPP produk utama sebelum perlakuan by-product = 22.275.000 + 48.375.000 - 10.575.000 = 60.075.000. Perlakuan pendapatan produk sampingan memengaruhi penyajian, tetapi laba akhir tetap 20.100.000 dalam kasus ini.'
  },
  {
    topic: 'Biaya Overhead Pabrik',
    skill: 'Mengisi tarif, applied FOH, dan variance',
    difficulty: 'medium',

    kind: 'report-fill',
    q: 'Isi angka kunci JIT dan Backflush Costing MAMAMIA Manufacturing Company.',
    instruction: 'Gunakan data ringkasan JIT dan backflush MAMAMIA berikut untuk mengisi angka kunci.',
    data: [
      'Bahan di RIP awal Rp215.200.000.',
      'Pembelian bahan langsung ke RIP Rp603.240.000.',
      'Bahan di RIP akhir Rp397.000.000.',
      'Bahan di Barang Jadi yang dipindahkan ke COGS Rp179.440.000.',
      'FOH-Control yang dikumpulkan dan dibebankan ke COGS Rp867.400.000.',
      'Penyesuaian biaya konversi mengkredit COGS Rp138.500.000.',
      'Saldo akhir COGS setelah penyesuaian Rp1.442.340.000.'
    ],
    blanks: [
      { id: 'mamamia-rip-to-fg', label: 'Backflush bahan dari RIP ke Barang Jadi', answer: 421440000 },
      { id: 'mamamia-fg-to-cogs', label: 'Backflush bahan dari Barang Jadi ke COGS', answer: 179440000 },
      { id: 'mamamia-foh-to-cogs', label: 'FOH-Control dibebankan ke COGS', answer: 867400000 },
      { id: 'mamamia-conversion-adjustment', label: 'Penyesuaian konversi kredit COGS', answer: 138500000 },
      { id: 'mamamia-ending-cogs', label: 'Saldo akhir COGS', answer: 1442340000 }
    ],
    explanation: 'Angka kunci yang harus rekonsiliasi: RIP akhir 445.200.000, Barang Jadi akhir 788.000.000, dan COGS akhir 1.442.340.000.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Menyusun payroll berbasis standar produksi',
    difficulty: 'medium',
    kind: 'report-fill',
    q: 'Isi daftar gaji berbasis standar produksi karyawan Departemen Penyempurnaan.',
    instruction: 'Gunakan data standar produksi berikut untuk mengisi daftar gaji berbasis standar produksi.',
    data: [
      'Standar produksi 35 unit per jam.',
      'Jam kerja 6 jam per hari.',
      'Output standar harian 210 unit.',
      'Tarif upah Rp1.500 per jam.',
      'Insentif 70% dari tarif upah untuk output di atas standar.',
      'Output aktual Senin sampai Jumat: 220, 190, 210, 205, dan 230 unit.',
      'Upah dasar minggu kerja 5 hari Rp45.000.'
    ],
    blanks: [
      { id: 'labor-standard-output', label: 'Output standar per hari', answer: 210, prefix: 'Unit' },
      { id: 'labor-base-wage', label: 'Gaji dan upah langsung', answer: 45000 },
      { id: 'labor-premium', label: 'Premi lembur/FOH Control', answer: 900 },
      { id: 'labor-payable', label: 'Utang gaji dan upah', answer: 45900 }
    ],
    explanation: 'Upah dasar 5 hari = 5×6×1.500 = 45.000. Insentif Senin 300 dan Jumat 600; total premi 900. Total utang gaji 45.900.'
  },
  {
    kind: 'report-fill',
    topic: 'FOH Departmentalization',
    skill: 'Menghitung hasil akhir direct method pada departementalisasi overhead',
    difficulty: 'medium',
    q: 'Isi hasil akhir alokasi departemen jasa dengan Direct Method.',
    instruction: 'Gunakan data departementalisasi berikut untuk menghitung hasil akhir alokasi direct method.',
    data: [
      'Departemen jasa Pemeliharaan memiliki biaya awal Rp120.000.',
      'Departemen jasa Teknik memiliki biaya awal Rp540.000.',
      'Departemen produksi Perakitan memiliki biaya awal Rp800.000.',
      'Departemen produksi Pengemasan memiliki biaya awal Rp900.000.',
      'Jam kerja pemeliharaan: Teknik 400 jam, Perakitan 800 jam, Pengemasan 200 jam.',
      'Jam kerja teknik: Pemeliharaan 400 jam, Perakitan 800 jam, Pengemasan 400 jam.',
      'Direct method mengabaikan jasa antar departemen jasa. Pemeliharaan dialokasikan hanya ke Perakitan dan Pengemasan dengan rasio 800:200. Teknik dialokasikan hanya ke Perakitan dan Pengemasan dengan rasio 800:400.'
    ],
    blanks: [
      { id: 'direct-assembly', label: 'Anggaran akhir Perakitan - Direct Method', answer: 1256000 },
      { id: 'direct-packaging', label: 'Anggaran akhir Pengemasan - Direct Method', answer: 1104000 },
      { id: 'direct-total', label: 'Total anggaran setelah alokasi', answer: 2360000 }
    ],
    explanation: 'Direct method mengabaikan jasa antar departemen jasa dan langsung mengalokasikan biaya ke departemen produksi.'
  },
  {
    kind: 'report-fill',
    topic: 'FOH Departmentalization',
    skill: 'Menghitung hasil akhir sequential method pada departementalisasi overhead',
    difficulty: 'advanced',
    q: 'Isi hasil akhir alokasi departemen jasa dengan Sequential Method.',
    instruction: 'Gunakan data departementalisasi berikut untuk menghitung hasil akhir sequential method.',
    data: [
      'Departemen jasa Pemeliharaan memiliki biaya awal Rp120.000.',
      'Departemen jasa Teknik memiliki biaya awal Rp540.000.',
      'Departemen produksi Perakitan memiliki biaya awal Rp800.000.',
      'Departemen produksi Pengemasan memiliki biaya awal Rp900.000.',
      'Jam kerja pemeliharaan: Teknik 400 jam, Perakitan 800 jam, Pengemasan 200 jam.',
      'Jam kerja teknik: Pemeliharaan 400 jam, Perakitan 800 jam, Pengemasan 400 jam.',
      'Urutan sequential method: Pemeliharaan dialokasikan lebih dulu ke Teknik, Perakitan, dan Pengemasan dengan rasio 400:800:200.',
      'Setelah Pemeliharaan ditutup, biaya Teknik baru menjadi Rp574.286 dan dialokasikan ke Perakitan dan Pengemasan dengan rasio 800:400.'
    ],
    blanks: [
      { id: 'step-assembly', label: 'Anggaran akhir Perakitan - Sequential Method', answer: 1251428, tolerance: 1 },
      { id: 'step-packaging', label: 'Anggaran akhir Pengemasan - Sequential Method', answer: 1108572, tolerance: 1 },
      { id: 'step-total', label: 'Total anggaran setelah alokasi', answer: 2360000 }
    ],
    explanation: 'Hasil sequential method perlu direkonsiliasi karena pembulatan. Total akhir tetap 2.360.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Activity-Based Costing',
    skill: 'Melengkapi laporan ABC Bangtan Company',
    difficulty: 'advanced',
    q: 'Isi tarif aktivitas dan kos per unit kasus Bangtan Company dengan ABC.',
    instruction: 'Gunakan data Bangtan Company berikut untuk menghitung tarif aktivitas, FOH ABC, dan kos per unit.',
    data: [
      'Bangtan Company memproduksi Boneka 750 unit dan Bantal 500 unit.',
      'Direct material Boneka Rp22.500.000 dan direct labor Boneka Rp25.000.000.',
      'Direct material Bantal Rp12.500.000 dan direct labor Bantal Rp20.000.000.',
      'Setup cost Rp8.000.000 dengan total 625 setup hours.',
      'Design cost Rp3.950.000 dengan total 250 design changes.',
      'Lighting cost Rp3.300.000 dengan total luas area 4.000 m².',
      'Konsumsi driver Boneka: 375 setup hours, 150 design changes, dan 2.000 m².',
      'Konsumsi driver Bantal: 250 setup hours, 100 design changes, dan 2.000 m².'
    ],
    blanks: [
      { id: 'bangtan-setup-rate', label: 'Tarif setup', answer: 12800 },
      { id: 'bangtan-design-rate', label: 'Tarif design', answer: 15800 },
      { id: 'bangtan-lighting-rate', label: 'Tarif lighting', answer: 825 },
      { id: 'bangtan-doll-unit-cost', label: 'Kos per unit Boneka', answer: 75093.33, tolerance: 1 },
      { id: 'bangtan-pillow-unit-cost', label: 'Kos per unit Bantal', answer: 77860, tolerance: 1 }
    ],
    explanation: 'FOH ABC Boneka = 8.820.000 dan Bantal = 6.430.000. Total kos Boneka = 56.320.000/750 = 75.093,33. Total kos Bantal = 38.930.000/500 = 77.860.'
  },
  {
    kind: 'account-match',
    topic: 'Activity-Based Costing',
    skill: 'Memasangkan aktivitas dengan hierarchy ABC',
    difficulty: 'medium',
    q: 'Pasangkan aktivitas ABC dengan level aktivitasnya.',
    instruction: 'Gunakan hierarchy ABC: unit-level, batch-level, product-level, facility-level.',
    choices: ['Unit-level', 'Batch-level', 'Product-level', 'Facility-level'],
    pairs: [
      { prompt: 'Setup cost', answer: 'Batch-level' },
      { prompt: 'Design cost', answer: 'Product-level' },
      { prompt: 'Lighting cost / luas area pabrik', answer: 'Facility-level' }
    ],
    explanation: 'Setup terjadi per batch, design mendukung jenis produk, dan lighting mendukung fasilitas secara keseluruhan.'
  },
  {
        topic: 'Tenaga Kerja Langsung',
    skill: 'Mengklasifikasikan direct, indirect, marketing, dan administrative labor',
    difficulty: 'basic',
    kind: 'account-match',
    q: 'Pasangkan klasifikasi labor cost dengan akun pembebanan yang tepat.',
    instruction: 'Fokus pada apakah tenaga kerja masuk biaya produksi atau period cost.',
    choices: ['Work in Process', 'Factory Overhead', 'Marketing Expense', 'General & Administrative Expense'],
    pairs: [
      { prompt: 'Direct labor', answer: 'Work in Process' },
      { prompt: 'Indirect labor', answer: 'Factory Overhead' },
      { prompt: 'Marketing labor', answer: 'Marketing Expense' },
      { prompt: 'General & administrative labor', answer: 'General & Administrative Expense' }
    ],
    explanation: 'Tenaga kerja langsung masuk WIP; tenaga kerja tidak langsung masuk FOH; pemasaran dan administrasi menjadi period cost.'
  },
  {
    topic: 'Konsep Dasar dan Klasifikasi Biaya',
    skill: 'Mengidentifikasi konsep dan istilah kunci',
    difficulty: 'basic',

    q: 'Dalam contoh production runs, kebutuhan 6.000 unit, setup cost Rp65.000, biaya produksi variabel Rp15.600, dan carrying cost 20%. Ukuran produksi optimum dan jumlah run adalah...',
    options: ['500 unit dan 12 kali run', '600 unit dan 10 kali run', '1.000 unit dan 6 kali run', '250 unit dan 24 kali run'],
    answer: 0,
    explanation: 'Carrying cost per unit = 20% × 15.600 = 3.120. Ukuran run optimum = √((2×6.000×65.000)/3.120) = 500 unit. Jumlah run = 6.000/500 = 12.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengidentifikasi konsep dasar akuntansi biaya',
    difficulty: 'basic',

    q: 'Dalam perlakuan pendapatan produk sampingan, bila pendapatan produk sampingan mengurangi total biaya produksi produk utama, dampaknya pada laporan adalah...',
    options: ['Pendapatan produk sampingan dikurangkan sebelum persediaan tersedia untuk dijual dihitung', 'Pendapatan produk sampingan selalu masuk beban administrasi', 'Pendapatan produk sampingan tidak memengaruhi laporan laba rugi', 'Pendapatan produk sampingan menambah factory overhead aktual'],
    answer: 0,
    explanation: 'Jika diperlakukan sebagai pengurang jumlah biaya produksi, pendapatan produk sampingan dikurangkan dari total biaya produksi produk utama sebelum menghitung barang tersedia untuk dijual.'
  }
];


const AKM201_QUIZ_UTS_BATCH3_JOB_ORDER: QuizQuestion[] = [
  {
    topic: 'Job Order Costing',
    skill: 'Menentukan sistem biaya berdasarkan karakteristik produksi',
    difficulty: 'basic',
    q: 'Sistem job order costing paling tepat digunakan ketika...',
    options: ['Produk homogen diproduksi terus-menerus', 'Setiap pesanan memiliki spesifikasi berbeda', 'Biaya hanya dicatat pada akhir tahun', 'Perusahaan tidak memiliki persediaan'],
    answer: 1,
    explanation: 'Job order costing cocok untuk pesanan, kontrak, batch, atau proyek yang berbeda spesifikasi sehingga biaya harus dikumpulkan per job.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Mengidentifikasi fungsi job cost sheet',
    difficulty: 'basic',
    q: 'Job cost sheet berfungsi terutama sebagai...',
    options: ['Buku pembantu Work in Process untuk setiap job', 'Daftar harga jual pelanggan', 'Laporan arus kas produksi', 'Dokumen pajak penjualan'],
    answer: 0,
    explanation: 'Job cost sheet merangkum direct materials, direct labor, applied FOH, total job cost, dan unit cost per pesanan.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Membedakan dokumen sumber biaya',
    difficulty: 'basic',
    q: 'Dokumen yang menunjukkan bahan yang diminta untuk job tertentu adalah...',
    options: ['Materials requisition', 'Labor time ticket', 'Bank reconciliation', 'Sales order only'],
    answer: 0,
    explanation: 'Materials requisition dipakai untuk menelusuri pemakaian bahan ke job atau ke FOH jika bahan tidak langsung.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Membedakan dokumen sumber biaya tenaga kerja',
    difficulty: 'basic',
    q: 'Dokumen yang menjadi dasar pembebanan jam tenaga kerja langsung ke job adalah...',
    options: ['Labor time ticket', 'Receiving report', 'Purchase requisition', 'Finished goods ledger'],
    answer: 0,
    explanation: 'Labor time ticket menunjukkan karyawan, job, jam kerja, dan tarif yang digunakan untuk membebankan direct labor.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Menghitung applied factory overhead',
    difficulty: 'medium',
    q: 'Estimasi FOH Rp300.000.000 dan estimasi jam mesin 60.000 jam. Jika Job 41 memakai 750 jam mesin, applied FOH untuk Job 41 adalah...',
    options: ['Rp3.750.000', 'Rp5.000.000', 'Rp4.500.000', 'Rp2.250.000'],
    answer: 0,
    explanation: 'Tarif FOH = 300.000.000/60.000 = Rp5.000 per jam mesin. Applied FOH Job 41 = 750×5.000 = Rp3.750.000.'
  },
  {
    topic: 'Job Order Costing',
    skill: 'Menentukan underapplied atau overapplied overhead',
    difficulty: 'medium',
    q: 'FOH aktual Rp82.000.000 dan FOH dibebankan Rp86.500.000. Kondisi ini menunjukkan...',
    options: ['Overapplied overhead Rp4.500.000', 'Underapplied overhead Rp4.500.000', 'Underapplied overhead Rp168.500.000', 'Tidak ada selisih overhead'],
    answer: 0,
    explanation: 'Applied overhead lebih besar daripada overhead aktual sebesar Rp4.500.000, sehingga terjadi overapplied overhead.'
  },
  {
    kind: 'multi-select',
    topic: 'Job Order Costing',
    skill: 'Mendeteksi perlakuan akun yang benar dalam job order costing',
    difficulty: 'medium',
    q: 'Pilih semua pernyataan yang benar tentang job order costing.',
    options: [
      'Direct materials didebit ke Work in Process untuk job terkait.',
      'Indirect materials didebit ke Factory Overhead Control.',
      'Applied overhead dihitung dengan predetermined overhead rate.',
      'Job selesai tetapi belum terjual langsung didebit ke Cost of Goods Sold.',
      'Labor time ticket membantu menelusuri direct labor ke job.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'Job selesai belum terjual masuk Finished Goods, bukan Cost of Goods Sold. COGS dipakai saat job sudah dijual.'
  },
  {
    kind: 'account-match',
    topic: 'Job Order Costing',
    skill: 'Memasangkan transaksi dengan akun debit',
    difficulty: 'medium',
    q: 'Pasangkan transaksi job order costing dengan akun debit yang tepat.',
    instruction: 'Pilih akun debit utama untuk setiap transaksi.',
    choices: ['Work in Process', 'Factory Overhead Control', 'Finished Goods', 'Cost of Goods Sold', 'Materials Inventory'],
    pairs: [
      { prompt: 'Bahan langsung dipakai untuk Job A', answer: 'Work in Process' },
      { prompt: 'Bahan tidak langsung dipakai di pabrik', answer: 'Factory Overhead Control' },
      { prompt: 'Job selesai tetapi belum dijual', answer: 'Finished Goods' },
      { prompt: 'Job yang sudah dijual dicatat harga pokoknya', answer: 'Cost of Goods Sold' },
      { prompt: 'Bahan baku dibeli secara kredit', answer: 'Materials Inventory' }
    ],
    explanation: 'Alur utama biaya job adalah Materials → WIP → Finished Goods → COGS, sementara biaya tidak langsung masuk FOH Control.'
  },
  {
    kind: 'report-fill',
    topic: 'Job Order Costing',
    skill: 'Menyusun job cost sheet ringkas',
    difficulty: 'medium',
    q: 'Lengkapi job cost sheet Job 88 PT Nara.',
    instruction: 'Masukkan angka kunci berdasarkan data berikut.',
    data: [
      'Bahan langsung Rp25.000.000.',
      'Tenaga kerja langsung Rp16.000.000.',
      'Tarif FOH Rp6.000 per jam mesin.',
      'Job 88 memakai 1.250 jam mesin.',
      'Job menghasilkan 100 unit dan selesai, belum terjual.'
    ],
    blanks: [
      { id: 'b3-job88-applied-foh', label: 'Applied FOH', answer: 7500000 },
      { id: 'b3-job88-total-cost', label: 'Total job cost', answer: 48500000 },
      { id: 'b3-job88-unit-cost', label: 'Cost per unit', answer: 485000 },
      { id: 'b3-job88-finished-goods', label: 'Kenaikan Finished Goods', answer: 48500000 }
    ],
    explanation: 'Applied FOH = 1.250×6.000 = 7.500.000. Total job cost = 25.000.000 + 16.000.000 + 7.500.000 = 48.500.000. Unit cost = 48.500.000/100 = 485.000. Karena selesai belum dijual, masuk Finished Goods.'
  },
  {
    kind: 'report-fill',
    topic: 'Job Order Costing',
    skill: 'Menghitung total job cost dan selisih overhead',
    difficulty: 'advanced',
    q: 'Hitung ringkasan Job 77 dan selisih overhead periode PT Rengganis.',
    instruction: 'Gunakan data kasus berikut untuk mengisi angka.',
    data: [
      'Estimasi FOH Rp360.000.000 dan estimasi jam mesin 90.000 jam.',
      'Job 77 memakai bahan langsung Rp18.000.000 dan tenaga kerja langsung Rp12.000.000.',
      'Job 77 memakai 500 jam mesin.',
      'FOH aktual total periode Rp375.000.000 dan FOH dibebankan seluruh job Rp368.000.000.'
    ],
    blanks: [
      { id: 'b3-job77-rate', label: 'Predetermined FOH rate per jam mesin', answer: 4000 },
      { id: 'b3-job77-applied', label: 'Applied FOH Job 77', answer: 2000000 },
      { id: 'b3-job77-total', label: 'Total Job 77 cost', answer: 32000000 },
      { id: 'b3-job77-under', label: 'Nilai underapplied overhead periode', answer: 7000000 }
    ],
    explanation: 'Tarif FOH = 360.000.000/90.000 = 4.000. Applied Job 77 = 500×4.000 = 2.000.000. Total job cost = 18.000.000 + 12.000.000 + 2.000.000 = 32.000.000. Karena aktual 375.000.000 > applied 368.000.000, terjadi underapplied Rp7.000.000.'
  }
];


const AKM201_QUIZ_UTS_BATCH4_PROCESS_COSTING: QuizQuestion[] = [
  {
    topic: 'Process Costing - Average Method',
    skill: 'Menentukan perlakuan BDP awal dalam weighted-average process costing',
    difficulty: 'basic',
    q: 'Dalam weighted-average process costing, biaya BDP awal diperlakukan dengan cara...',
    options: ['Dipisahkan dari biaya periode berjalan', 'Digabung dengan biaya periode berjalan', 'Dihapus dari laporan biaya produksi', 'Langsung dibebankan sebagai period cost'],
    answer: 1,
    explanation: 'Weighted-average method menggabungkan biaya BDP awal dengan biaya yang ditambahkan selama periode berjalan untuk menghitung biaya per unit ekuivalen.'
  },
  {
    topic: 'Process Costing - Average Method',
    skill: 'Menghitung unit ekuivalen konversi metode average',
    difficulty: 'medium',
    q: 'Departemen A menyelesaikan 8.000 unit dan memiliki BDP akhir 2.000 unit, 40% selesai untuk konversi. Unit ekuivalen konversi metode average adalah...',
    options: ['8.000 unit', '8.800 unit', '10.000 unit', '800 unit'],
    answer: 1,
    explanation: 'EUP konversi average = unit selesai 8.000 + (BDP akhir 2.000×40%) = 8.800 unit.'
  },
  {
    kind: 'report-fill',
    topic: 'Process Costing - Average Method',
    skill: 'Menyusun ringkasan weighted-average cost reconciliation satu elemen biaya',
    difficulty: 'medium',
    q: 'Lengkapi ringkasan weighted-average process costing Departemen Mixing PT Sora.',
    instruction: 'Perlakukan biaya sebagai satu kelompok biaya konversi gabungan.',
    data: [
      'BDP awal 200 unit dan unit dimulai periode berjalan 800 unit.',
      'Unit selesai dan ditransfer 700 unit.',
      'BDP akhir 300 unit, 60% selesai.',
      'Biaya BDP awal Rp400.000 dan biaya ditambahkan periode berjalan Rp4.000.000.'
    ],
    blanks: [
      { id: 'b4-wa-ending-units', label: 'Unit BDP akhir', answer: 300 },
      { id: 'b4-wa-eup', label: 'Unit ekuivalen average', answer: 880 },
      { id: 'b4-wa-cost-per-eup', label: 'Cost per EUP', answer: 5000 },
      { id: 'b4-wa-transferred-out', label: 'Cost transferred out', answer: 3500000 },
      { id: 'b4-wa-ending-wip-cost', label: 'Cost of ending WIP', answer: 900000 }
    ],
    explanation: 'EUP = 700 + (300×60%) = 880. Total biaya = 400.000 + 4.000.000 = 4.400.000. Cost per EUP = 5.000. Transfer out = 700×5.000 = 3.500.000. Ending WIP = 180×5.000 = 900.000.'
  },
  {
    topic: 'Process Costing - FIFO Method',
    skill: 'Menghitung unit started and completed',
    difficulty: 'basic',
    q: 'Dalam FIFO process costing, jika BDP awal 150 unit dan unit selesai ditransfer 1.000 unit, maka unit started and completed adalah...',
    options: ['150 unit', '850 unit', '1.000 unit', '1.150 unit'],
    answer: 1,
    explanation: 'Unit started and completed = unit selesai ditransfer - BDP awal = 1.000 - 150 = 850 unit.'
  },
  {
    topic: 'Process Costing - FIFO Method',
    skill: 'Menghitung equivalent unit konversi FIFO',
    difficulty: 'medium',
    q: 'BDP awal 200 unit sudah 40% selesai untuk konversi. Unit selesai 900 unit. BDP akhir 300 unit sudah 50% selesai. EUP konversi FIFO adalah...',
    options: ['850 unit', '900 unit', '970 unit', '1.100 unit'],
    answer: 2,
    explanation: 'Started and completed = 900 - 200 = 700. EUP konversi FIFO = BDP awal 200×60% + started and completed 700 + BDP akhir 300×50% = 120 + 700 + 150 = 970 unit.'
  },
  {
    kind: 'report-fill',
    topic: 'Process Costing - FIFO Method',
    skill: 'Mengalokasikan biaya FIFO ke BDP awal selesai, started and completed, dan BDP akhir',
    difficulty: 'advanced',
    q: 'Lengkapi cost assignment FIFO Departemen Assembly PT Liora.',
    instruction: 'Bahan ditambahkan pada awal proses. Gunakan dua elemen biaya: materials dan conversion.',
    data: [
      'BDP awal 100 unit, materials 100% selesai dan conversion 30% selesai. Biaya BDP awal Rp1.500.000.',
      'Unit dimulai periode berjalan 900 unit. Unit selesai dan ditransfer 800 unit.',
      'BDP akhir 200 unit, materials 100% selesai dan conversion 50% selesai.',
      'Current cost: materials Rp9.000.000 dan conversion Rp8.700.000.'
    ],
    blanks: [
      { id: 'b4-fifo-started-completed', label: 'Unit started and completed', answer: 700 },
      { id: 'b4-fifo-eup-materials', label: 'EUP materials FIFO', answer: 900 },
      { id: 'b4-fifo-eup-conversion', label: 'EUP conversion FIFO', answer: 870 },
      { id: 'b4-fifo-cost-per-material', label: 'Cost per EUP materials', answer: 10000 },
      { id: 'b4-fifo-cost-per-conversion', label: 'Cost per EUP conversion', answer: 10000 },
      { id: 'b4-fifo-beginning-completed-cost', label: 'Cost of completed beginning WIP', answer: 2200000 },
      { id: 'b4-fifo-started-completed-cost', label: 'Cost of started and completed units', answer: 14000000 },
      { id: 'b4-fifo-ending-wip-cost', label: 'Cost of ending WIP', answer: 3000000 }
    ],
    explanation: 'Started and completed = 800 - 100 = 700. EUP materials = 0 + 700 + 200 = 900. EUP conversion = 100×70% + 700 + 200×50% = 870. Cost per EUP materials dan conversion masing-masing Rp10.000. BDP awal selesai = 1.500.000 + 70×10.000 = 2.200.000. Started and completed = 700×20.000 = 14.000.000. Ending WIP = 200×10.000 + 100×10.000 = 3.000.000.'
  },
  {
    kind: 'multi-select',
    topic: 'Process Costing - Cost Reconciliation',
    skill: 'Mendeteksi prinsip rekonsiliasi biaya process costing',
    difficulty: 'medium',
    q: 'Pilih semua pernyataan yang benar tentang cost reconciliation dalam process costing.',
    options: [
      'Total costs to account for harus sama dengan total costs accounted for.',
      'Dalam average method, biaya BDP awal digabung dengan biaya periode berjalan.',
      'Dalam FIFO, cost per EUP dihitung dari current cost saja.',
      'Cost of ending WIP tidak perlu memakai persentase penyelesaian.',
      'Transferred-out cost dan ending WIP adalah bagian dari costs accounted for.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'Ending WIP tetap harus dihitung berdasarkan EUP tiap elemen biaya. Rekonsiliasi biaya mempertemukan biaya yang harus dipertanggungjawabkan dengan biaya yang dialokasikan ke transferred-out dan ending WIP.'
  },
  {
    kind: 'account-match',
    topic: 'Process Costing - Production Cost Report',
    skill: 'Memasangkan bagian laporan biaya produksi dengan fungsi analitisnya',
    difficulty: 'medium',
    q: 'Pasangkan bagian Cost of Production Report dengan fungsi yang tepat.',
    instruction: 'Gunakan struktur laporan process costing.',
    choices: ['Quantity schedule', 'Equivalent units', 'Cost per EUP', 'Cost assignment', 'Cost reconciliation'],
    pairs: [
      { prompt: 'Membuktikan unit yang tersedia sama dengan unit yang dipertanggungjawabkan', answer: 'Quantity schedule' },
      { prompt: 'Mengukur pekerjaan produksi dalam satuan unit selesai', answer: 'Equivalent units' },
      { prompt: 'Menentukan tarif biaya per unit ekuivalen tiap elemen biaya', answer: 'Cost per EUP' },
      { prompt: 'Membagi biaya ke transferred-out dan ending WIP', answer: 'Cost assignment' },
      { prompt: 'Menguji total biaya masuk sama dengan total biaya yang dialokasikan', answer: 'Cost reconciliation' }
    ],
    explanation: 'Laporan biaya produksi berjalan dari arus unit, EUP, biaya per EUP, pembebanan biaya, lalu rekonsiliasi total biaya.'
  },
  {
    topic: 'Process Costing - Journal',
    skill: 'Menentukan jurnal transfer antar departemen',
    difficulty: 'basic',
    q: 'Produk Departemen I selesai dan ditransfer ke Departemen II. Jurnal process costing yang benar adalah...',
    options: [
      'Debit Work in Process - Departemen II, kredit Work in Process - Departemen I',
      'Debit Finished Goods, kredit Work in Process - Departemen I',
      'Debit Cost of Goods Sold, kredit Finished Goods',
      'Debit Factory Overhead, kredit Work in Process - Departemen II'
    ],
    answer: 0,
    explanation: 'Transfer antar departemen dicatat dengan mendebit WIP departemen penerima dan mengkredit WIP departemen pengirim.'
  }
];


const AKM201_QUIZ_UAS_BATCH6_JOINT_COST: QuizQuestion[] = [
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Membedakan joint cost, split-off point, dan separable cost',
    difficulty: 'basic',
    q: 'Dalam joint product costing, biaya yang terjadi sebelum produk dapat dipisahkan disebut...',
    options: ['Joint cost', 'Separable cost', 'Selling expense', 'Replacement cost'],
    answer: 0,
    explanation: 'Joint cost adalah biaya produksi yang terjadi sebelum split-off point, yaitu sebelum produk dapat diidentifikasi secara terpisah.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Mengidentifikasi separable cost',
    difficulty: 'basic',
    q: 'Biaya yang terjadi setelah split-off point dan dapat ditelusuri ke produk tertentu disebut...',
    options: ['Separable cost', 'Joint cost', 'Common fixed cost', 'Sunk cost sebelum split-off'],
    answer: 0,
    explanation: 'Separable cost adalah biaya tambahan setelah split-off point. Biaya ini tidak dicampur ke joint cost, tetapi dipakai pada metode NRV atau keputusan proses lanjut.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Menghitung alokasi joint cost metode unit produksi',
    difficulty: 'medium',
    q: 'PT Susu Nusantara memiliki joint cost Rp8.000.000 dan produksi A 2.000 liter, B 1.500 liter, C 500 liter. Dengan metode unit produksi, alokasi joint cost untuk produk A adalah...',
    options: ['Rp4.000.000', 'Rp3.000.000', 'Rp2.394.558', 'Rp3.047.619'],
    answer: 0,
    explanation: 'Total unit = 4.000 liter. Proporsi A = 2.000/4.000 = 50%. Alokasi A = 50% × Rp8.000.000 = Rp4.000.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Joint Product dan By-Product',
    skill: 'Mengalokasikan joint cost dengan metode NRV/harga jual hipotetis',
    difficulty: 'advanced',
    q: 'Lengkapi alokasi joint cost PT Susu Nusantara dengan metode NRV.',
    instruction: 'Joint cost Rp8.000.000. Gunakan nilai jual akhir dikurangi separable cost. Toleransi pembulatan Rp2.',
    data: [
      'Produk A: 2.000 liter, harga jual akhir Rp3.500/liter, separable cost Rp400.000.',
      'Produk B: 1.500 liter, harga jual akhir Rp9.000/liter, separable cost Rp600.000.',
      'Produk C: 500 liter, harga jual akhir Rp5.500/liter, separable cost Rp200.000.'
    ],
    blanks: [
      { id: 'b6-q-nrv-a', label: 'NRV produk A', answer: 6600000, tolerance: 2 },
      { id: 'b6-q-nrv-b', label: 'NRV produk B', answer: 12900000, tolerance: 2 },
      { id: 'b6-q-nrv-c', label: 'NRV produk C', answer: 2550000, tolerance: 2 },
      { id: 'b6-q-alloc-a', label: 'Alokasi joint cost produk A', answer: 2394558, tolerance: 2 },
      { id: 'b6-q-alloc-b', label: 'Alokasi joint cost produk B', answer: 4680272, tolerance: 2 },
      { id: 'b6-q-alloc-c', label: 'Alokasi joint cost produk C', answer: 925170, tolerance: 2 }
    ],
    explanation: 'NRV A = 7.000.000 - 400.000 = 6.600.000; B = 13.500.000 - 600.000 = 12.900.000; C = 2.750.000 - 200.000 = 2.550.000. Total NRV = 22.050.000. Alokasi = proporsi NRV × Rp8.000.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Joint Product dan By-Product',
    skill: 'Mengalokasikan joint cost dengan metode weighted average',
    difficulty: 'advanced',
    q: 'Lengkapi alokasi joint cost PT Susu Nusantara dengan metode weighted average.',
    instruction: 'Joint cost Rp8.000.000. Bobot A:B:C = 2:4:1. Toleransi pembulatan Rp2.',
    data: [
      'Produk A: 2.000 liter, bobot 2.',
      'Produk B: 1.500 liter, bobot 4.',
      'Produk C: 500 liter, bobot 1.'
    ],
    blanks: [
      { id: 'b6-q-wu-a', label: 'Unit tertimbang produk A', answer: 4000 },
      { id: 'b6-q-wu-b', label: 'Unit tertimbang produk B', answer: 6000 },
      { id: 'b6-q-wu-c', label: 'Unit tertimbang produk C', answer: 500 },
      { id: 'b6-q-wa-a', label: 'Alokasi joint cost produk A', answer: 3047619, tolerance: 2 },
      { id: 'b6-q-wa-b', label: 'Alokasi joint cost produk B', answer: 4571429, tolerance: 2 },
      { id: 'b6-q-wa-c', label: 'Alokasi joint cost produk C', answer: 380952, tolerance: 2 }
    ],
    explanation: 'Unit tertimbang A = 4.000, B = 6.000, C = 500; total = 10.500. Alokasi A = 4.000/10.500×8.000.000 = 3.047.619; B = 4.571.429; C = 380.952.'
  },
  {
    kind: 'multi-select',
    topic: 'Joint Product dan By-Product',
    skill: 'Mengevaluasi prinsip joint cost dan by-product',
    difficulty: 'medium',
    q: 'Pilih semua pernyataan yang benar tentang joint product dan by-product.',
    options: [
      'Joint cost terjadi sebelum split-off point.',
      'Separable cost terjadi setelah split-off point.',
      'By-product biasanya memiliki nilai jual relatif kecil dibanding produk utama.',
      'Joint cost harus menjadi dasar utama keputusan memproses lebih lanjut.',
      'Metode weighted average memakai unit fisik yang dikalikan bobot.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'Joint cost tidak relevan untuk keputusan proses lanjut karena sudah terjadi sebelum keputusan. Keputusan proses lanjut memakai incremental revenue dan separable cost setelah split-off.'
  },
  {
    kind: 'account-match',
    topic: 'Joint Product dan By-Product',
    skill: 'Memilih metode alokasi berdasarkan kata kunci soal',
    difficulty: 'medium',
    q: 'Pasangkan kata kunci soal dengan metode atau konsep yang tepat.',
    instruction: 'Gunakan pemicu paling kuat dari setiap prompt.',
    choices: ['Unit produksi', 'NRV / harga jual hipotetis', 'Weighted average', 'Non-cost method by-product', 'Keputusan proses lanjut'],
    pairs: [
      { prompt: 'Soal memberikan bobot 2:4:1 untuk produk A, B, dan C.', answer: 'Weighted average' },
      { prompt: 'Soal memberikan harga jual akhir dan separable cost.', answer: 'NRV / harga jual hipotetis' },
      { prompt: 'Soal hanya meminta pembagian berdasarkan liter produksi.', answer: 'Unit produksi' },
      { prompt: 'Produk sampingan bernilai kecil dan hasil penjualannya mengurangi HPP.', answer: 'Non-cost method by-product' },
      { prompt: 'Produk bisa dijual pada split-off atau diproses lebih lanjut.', answer: 'Keputusan proses lanjut' }
    ],
    explanation: 'Kata kunci bobot mengarah ke weighted average, harga jual akhir dikurangi separable cost mengarah ke NRV, dan pilihan proses lanjut harus memakai analisis incremental.'
  },
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Menganalisis keputusan proses lanjut',
    difficulty: 'medium',
    q: 'Produk X dapat dijual pada split-off seharga Rp40.000.000 atau diproses lebih lanjut dan dijual Rp55.000.000. Biaya proses lanjutan Rp12.000.000. Keputusan yang benar adalah...',
    options: ['Diproses lebih lanjut karena tambahan laba Rp3.000.000', 'Dijual pada split-off karena joint cost harus dimasukkan', 'Diproses lebih lanjut karena total penjualan Rp55.000.000', 'Tidak dapat dianalisis tanpa alokasi joint cost'],
    answer: 0,
    explanation: 'Tambahan pendapatan = 55.000.000 - 40.000.000 = 15.000.000. Tambahan laba = 15.000.000 - 12.000.000 = 3.000.000, sehingga proses lanjut menguntungkan. Joint cost diabaikan.'
  }
];


const AKM201_QUIZ_UAS_BATCH7_MATERIALS: QuizQuestion[] = [
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menghitung pembelian bersih dan bahan langsung dipakai',
    difficulty: 'medium',
    q: 'PT Melati memiliki bahan awal Rp18.000.000, pembelian Rp96.000.000, freight-in Rp4.000.000, retur Rp3.000.000, diskon Rp1.000.000, bahan akhir Rp22.000.000, dan bahan tidak langsung yang dipakai Rp6.000.000. Bahan baku langsung yang dipakai adalah...',
    options: ['Rp86.000.000', 'Rp92.000.000', 'Rp96.000.000', 'Rp114.000.000'],
    answer: 0,
    explanation: 'Pembelian bersih = 96.000.000 + 4.000.000 - 3.000.000 - 1.000.000 = 96.000.000. Bahan tersedia = 18.000.000 + 96.000.000 = 114.000.000. Total bahan dipakai = 114.000.000 - 22.000.000 = 92.000.000. Bahan langsung = 92.000.000 - 6.000.000 = 86.000.000.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Membedakan dokumen bahan baku',
    difficulty: 'basic',
    q: 'Dokumen yang menjadi dasar pengeluaran bahan dari gudang ke proses produksi adalah...',
    options: ['Material requisition', 'Purchase order', 'Receiving report', 'Vendor invoice'],
    answer: 0,
    explanation: 'Material requisition menjadi dasar gudang mengeluarkan bahan. Purchase order adalah pesanan ke vendor, receiving report adalah laporan penerimaan, dan invoice adalah tagihan pemasok.'
  },
  {
    kind: 'multi-select',
    topic: 'Bahan Baku Langsung',
    skill: 'Mengevaluasi perlakuan kos bahan dan akun pemakaian bahan',
    difficulty: 'medium',
    q: 'Pilih semua pernyataan yang benar tentang kos dan pengendalian bahan baku.',
    options: [
      'Freight-in dapat menambah kos bahan jika dikapitalisasi ke persediaan bahan.',
      'Retur pembelian mengurangi kos bahan yang tersedia.',
      'Bahan tidak langsung yang dipakai biasanya didebit ke Factory Overhead Control.',
      'Moving average diperbarui setiap terjadi pemakaian bahan, bukan pembelian.',
      'Material requisition adalah dasar pemakaian bahan dari gudang.'
    ],
    answers: [0, 1, 2, 4],
    explanation: 'Moving average dalam perpetual diperbarui ketika ada pembelian baru yang mengubah harga rata-rata. Pemakaian bahan memakai harga rata-rata terakhir yang tersedia.'
  },
  {
    kind: 'report-fill',
    topic: 'Bahan Baku Langsung',
    skill: 'Menghitung EOQ dan reorder point',
    difficulty: 'advanced',
    q: 'Lengkapi perhitungan EOQ/KPE dan reorder point PT Melati.',
    instruction: 'Kebutuhan tahunan 6.000 unit; biaya pesan Rp65.000 per order; harga bahan Rp15.600 per unit; carrying cost 20% dari harga; kebutuhan harian 20 unit; lead time 5 hari; safety stock 40 unit.',
    blanks: [
      { id: 'b7-q-carrying-cost', label: 'Carrying cost per unit per tahun', answer: 3120 },
      { id: 'b7-q-eoq', label: 'EOQ / KPE', answer: 500 },
      { id: 'b7-q-order-count', label: 'Jumlah pesanan per tahun', answer: 12 },
      { id: 'b7-q-lead-time-usage', label: 'Kebutuhan selama lead time', answer: 100 },
      { id: 'b7-q-rop', label: 'Reorder point / TPK', answer: 140 }
    ],
    explanation: 'Carrying cost = 20% × 15.600 = 3.120. EOQ = √((2×6.000×65.000)/3.120) = 500 unit. Jumlah pesanan = 6.000/500 = 12 kali. Lead time usage = 20×5 = 100 unit. ROP = 100 + 40 = 140 unit.'
  },
  {
    kind: 'account-match',
    topic: 'Bahan Baku Langsung',
    skill: 'Memasangkan transaksi bahan dengan jurnal yang tepat',
    difficulty: 'medium',
    q: 'Pasangkan transaksi bahan baku dengan akun debit yang tepat.',
    instruction: 'Gunakan alur materials control pada perusahaan manufaktur.',
    choices: ['Materials Inventory', 'Work in Process', 'Factory Overhead Control', 'Accounts Payable', 'Cost of Goods Sold'],
    pairs: [
      { prompt: 'Pembelian bahan baku secara kredit.', answer: 'Materials Inventory' },
      { prompt: 'Pemakaian bahan baku langsung untuk produksi.', answer: 'Work in Process' },
      { prompt: 'Pemakaian bahan penolong atau bahan tidak langsung.', answer: 'Factory Overhead Control' },
      { prompt: 'Bahan tidak langsung dipakai sebagai overhead aktual.', answer: 'Factory Overhead Control' },
      { prompt: 'Pembelian belum dibayar akan dikreditkan ke akun ini.', answer: 'Accounts Payable' }
    ],
    explanation: 'Pembelian bahan didebit ke Materials Inventory. Saat dipakai, direct materials didebit ke WIP dan indirect materials didebit ke FOH Control. Jika pembelian kredit, akun kreditnya Accounts Payable.'
  }
];

// ============================================================
// KUIS PRA-UAS AKBI — 5 Tipe Soal yang Selalu Muncul
// Sumber: pola kuis Pra-UAS 2026, UAS 2022, UAS 2024
// ============================================================
const AKM201_KUIS_PRA_UAS: QuizQuestion[] = [
  {
    topic: 'Joint Product dan By-Product',
    skill: 'Menghitung alokasi joint cost metode harga pasar relatif',
    difficulty: 'medium',
    q: 'PT Matahari Abadi memproduksi 3 produk bersama (X, Y, Z) dari satu proses dengan total joint cost Rp240.000.000. Nilai jual di split-off: X = Rp400.000.000, Y = Rp320.000.000, Z = Rp80.000.000. Berapa alokasi joint cost untuk Produk Y dengan metode harga pasar relatif?',
    options: ['Rp120.000.000', 'Rp96.000.000', 'Rp80.000.000', 'Rp24.000.000'],
    answer: 1,
    explanation: 'Total nilai jual = 400 + 320 + 80 = 800 juta. Proporsi Y = 320/800 = 40%. Alokasi Y = 40% × 240.000.000 = Rp96.000.000. Tipe soal ini selalu keluar di kuis Pra-UAS: tentukan proporsi masing-masing produk lalu kalikan dengan joint cost.'
  },
  {
    topic: 'Bahan Baku Langsung',
    skill: 'Menyusun jurnal backflush accounting',
    difficulty: 'medium',
    q: 'Dalam sistem backflush accounting PT SAKURA, bahan baku yang dibeli kredit sebesar Rp500.000.000 langsung dicatat ke akun RIP (Raw and In Process). Pada akhir periode, bahan yang sudah selesai diproses menjadi barang jadi sebesar Rp380.000.000. Jurnal backflush dari RIP ke Finished Goods yang benar adalah...',
    options: [
      'Dr Finished Goods Rp380.000.000; Cr RIP Rp380.000.000',
      'Dr COGS Rp380.000.000; Cr RIP Rp380.000.000',
      'Dr RIP Rp380.000.000; Cr Finished Goods Rp380.000.000',
      'Dr WIP Rp380.000.000; Cr RIP Rp380.000.000'
    ],
    answer: 0,
    explanation: 'Dalam backflush accounting, bahan yang selesai diproses di-backflush dari RIP ke Finished Goods. Jurnal: Dr Finished Goods, Cr RIP. Bukan ke WIP karena dalam sistem backflush/JIT, akun WIP tradisional tidak dipakai — digantikan RIP. Tipe soal ini selalu muncul: identifikasi akun RIP, FG, dan COGS dalam pola backflush.'
  },
  {
    topic: 'Tenaga Kerja Langsung',
    skill: 'Menghitung premi lembur dan mengklasifikasikan ke FOH',
    difficulty: 'medium',
    q: 'Seorang operator pabrik bekerja 48 jam dalam seminggu. Tarif reguler Rp25.000/jam, tarif lembur 1,5× tarif reguler untuk jam di atas 40 jam. Lembur terjadi karena volume produksi umum (bukan pesanan khusus). Berapa jumlah yang dibebankan ke FOH Control dari karyawan ini?',
    options: ['Rp100.000', 'Rp200.000', 'Rp300.000', 'Rp1.200.000'],
    answer: 0,
    explanation: 'Jam lembur = 48 - 40 = 8 jam. Premi lembur per jam = tarif lembur - tarif reguler = (1,5 × 25.000) - 25.000 = Rp12.500. Total premi lembur = 8 × 12.500 = Rp100.000. Karena lembur bukan karena pesanan khusus, premi masuk FOH Control. Basic pay 8 jam lembur (8 × 25.000 = 200.000) tetap masuk direct labor/WIP. Tipe soal ini selalu keluar: bedakan basic pay (ke WIP) dan premi lembur (ke FOH).'
  },
  {
    topic: 'FOH Departmentalization',
    skill: 'Membandingkan hasil direct method dan sequential method',
    difficulty: 'medium',
    q: 'PT Bintang memiliki 2 departemen produksi (Perakitan dan Finishing) dan 1 departemen jasa (Maintenance) dengan biaya Rp60.000.000. Maintenance melayani Perakitan 300 jam dan Finishing 200 jam. Dengan direct method, berapa alokasi biaya Maintenance ke Perakitan?',
    options: ['Rp36.000.000', 'Rp24.000.000', 'Rp30.000.000', 'Rp40.000.000'],
    answer: 0,
    explanation: 'Direct method: abaikan jasa antar departemen jasa. Dasar alokasi ke produksi saja = 300 + 200 = 500. Alokasi ke Perakitan = (300/500) × 60.000.000 = Rp36.000.000. Tipe soal ini selalu keluar di kuis: hitung alokasi direct method, lalu bandingkan dengan step method yang menghasilkan angka berbeda karena departemen jasa saling memberi.'
  },
  {
    topic: 'Activity-Based Costing',
    skill: 'Membandingkan kos per unit tradisional vs ABC',
    difficulty: 'medium',
    q: 'PT Sentosa memproduksi Produk A (1.000 unit, 4.000 JTKL) dan Produk B (200 unit, 1.000 JTKL). Total overhead Rp500.000.000 terdiri dari: setup Rp200.000.000 (20 kali setup: A = 5, B = 15) dan overhead lain Rp300.000.000 (dasar JTKL). Dengan metode tradisional (dasar JTKL saja), berapa FOH per unit Produk B?',
    options: ['Rp500.000', 'Rp250.000', 'Rp1.500.000', 'Rp100.000'],
    answer: 0,
    explanation: 'Tradisional: tarif FOH = 500.000.000 / 5.000 JTKL = Rp100.000/JTKL. FOH Produk B = 1.000 × 100.000 = 100.000.000. FOH per unit B = 100.000.000 / 200 = Rp500.000. Dengan ABC, tarif setup = 200.000.000/20 = 10.000.000/setup. FOH ABC Produk B = (15 × 10.000.000) + (1.000 × 60.000) = 210.000.000, per unit = Rp1.050.000. Tradisional undercosting Produk B karena B menyerap setup sangat banyak. Tipe soal ini selalu muncul: hitung tradisional dulu, lalu ABC, bandingkan hasilnya.'
  }
];

export const AKM201_QUIZ_UTS: QuizQuestion[] = [...AKM201_QUIZ_UTS_BATCH4_PROCESS_COSTING, ...AKM201_QUIZ_UTS_BATCH3_JOB_ORDER, ...AKM201_QUIZ_UTS_INTERACTIVE_MODEL, ...AKM201_QUIZ_UTS_PRACTICE, ...AKM201_QUIZ_UTS_BASE];
export const AKM201_QUIZ_UAS: QuizQuestion[] = [...AKM201_KUIS_PRA_UAS, ...AKM201_QUIZ_UAS_BATCH7_MATERIALS, ...AKM201_QUIZ_UAS_BATCH6_JOINT_COST, ...AKM201_QUIZ_UAS_INTERACTIVE_MODEL, ...AKM201_QUIZ_UAS_PRACTICE, ...AKM201_QUIZ_UAS_BASE];

export const AKM201_QUIZ: QuizQuestion[] = [...AKM201_QUIZ_UTS, ...AKM201_QUIZ_UAS];

