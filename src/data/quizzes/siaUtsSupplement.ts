import type { QuizQuestion } from '../../types';

// Kasus orisinal mengikuti keterampilan latihan akhir bab Richardson et al., bab 1, 2, 4–8.
const tm1: QuizQuestion[] = [
  {
    id: 'sia-uts-tm1-06', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'advanced',
    q: 'Tiga cabang mencatat stok SKU yang sama. Dashboard menunjukkan rata-rata stok 120 unit, tetapi cabang C tinggal 2 unit dan batas pesan ulangnya 15. Keputusan informasi mana paling berguna bagi manajer persediaan?',
    options: ['Pesan ulang untuk cabang C dengan memakai stok dan batasnya sendiri', 'Tunda pembelian karena rata-rata tiga cabang masih 120 unit', 'Naikkan seluruh stok cabang ke 120 tanpa melihat permintaan', 'Hapus catatan cabang C karena menyimpang dari rata-rata'],
    answer: 0,
    explanation: 'Data per cabang yang diberi konteks reorder point membuat informasi relevan untuk keputusan: cabang C perlu ditangani. Rata-rata menutup risiko stockout lokal. Menyamakan semua stok mengabaikan permintaan dan biaya, sedangkan menghapus outlier membuang sinyal yang justru perlu diperiksa.',
  },
  {
    id: 'sia-uts-tm1-07', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'medium',
    q: 'A manufacturer receives components, assembles bicycles, ships finished bicycles, and handles warranty claims. Which step is an operations activity in the value chain?',
    options: ['Menerima komponen dari pemasok', 'Merakit komponen menjadi sepeda', 'Mengirim sepeda ke dealer', 'Menangani klaim garansi pelanggan'],
    answer: 1,
    explanation: 'Operations mengubah input menjadi produk, yaitu perakitan. Penerimaan komponen ialah inbound logistics, pengiriman ialah outbound logistics, dan klaim garansi termasuk service. Keempatnya aktivitas utama, tetapi hanya perakitan yang merupakan operations.',
  },
  {
    id: 'sia-uts-tm1-08', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'advanced', kind: 'multi-select',
    q: 'Laporan SKU menampilkan barang yang paling sering habis, tetapi data transaksi dua hari terakhir belum masuk dan satu cabang memakai kode SKU lama. Tindakan mana yang meningkatkan kegunaan laporan sebelum keputusan pembelian? Pilih semua yang tepat.',
    options: ['Sinkronkan transaksi terbaru agar laporan tepat waktu', 'Petakan kode SKU lama ke master SKU yang benar', 'Tambahkan semua log mentah ke halaman pertama agar lengkap', 'Tunjukkan tanggal pembaruan dan cabang yang belum tersinkron'],
    answers: [0, 1, 3],
    explanation: 'Sinkronisasi memperbaiki timeliness; pemetaan kode memperbaiki ketepatan representasi; penanda keterbatasan data membuat pembaca tidak salah menafsirkan cakupan. Menumpuk log mentah di muka justru meningkatkan information overload dan tidak membetulkan data yang hilang.',
  },
  {
    id: 'sia-uts-tm1-09', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'advanced', kind: 'multi-select',
    q: 'Sistem CRM menandai pelanggan yang sering batal membeli karena produk kosong. Which statements about AIS value are defensible? Pilih semua yang tepat.',
    options: ['Data CRM dapat digabung dengan stok untuk menentukan prioritas pengisian ulang', 'Setiap kenaikan jumlah data otomatis menaikkan kualitas keputusan', 'Manfaat keputusan perlu dibandingkan dengan biaya sistem bila investasinya discretionary', 'Informasi ini dapat memengaruhi pendapatan bila stockout berkurang'],
    answers: [0, 2, 3],
    explanation: 'Menghubungkan keluhan pelanggan dengan stok memberi dasar tindakan dan dapat menekan penjualan yang hilang. Investasi discretionary dinilai dari manfaat relatif terhadap biaya. Volume data saja tidak menjamin relevansi atau akurasi; data yang salah bisa membuat keputusan lebih buruk.',
  },
  {
    id: 'sia-uts-tm1-10', tm: 1, topic: 'Accounting Information Systems and Firm Value', difficulty: 'medium', kind: 'short-answer',
    q: 'Toko menerima ribuan baris transaksi, lalu sistem hanya menampilkan SKU yang stoknya di bawah batas pesan ulang. Apa istilah pelaporan yang hanya menonjolkan kondisi menyimpang ini? Jawab dengan istilah singkat.',
    answers: ['exception reporting', 'laporan pengecualian', 'pelaporan pengecualian', 'exception report'],
    explanation: 'Exception reporting menyaring kondisi yang membutuhkan perhatian, misalnya stok di bawah reorder point. Dashboard seluruh transaksi tetap mungkin berguna untuk penelusuran, tetapi bukan nama teknik penyaringan pengecualian ini.',
  },
];

const tm2: QuizQuestion[] = [
  {
    id: 'sia-uts-tm2-06', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced',
    q: 'Penjualan bulan ini turun 12%. Analis mula-mula merangkum penurunan per cabang, lalu menemukan bahwa cabang yang kehabisan stok menyumbang sebagian besar penurunan. Jenis analisis pada langkah kedua adalah...',
    options: ['Descriptive, karena hanya menghitung total', 'Diagnostic, karena mencari penyebab penurunan', 'Predictive, karena memproyeksikan bulan depan', 'Prescriptive, karena sudah memilih jumlah pesanan'],
    answer: 1,
    explanation: 'Langkah kedua menjawab mengapa penjualan turun dengan menghubungkan penurunan dan stockout, sehingga diagnostic. Ringkasan per cabang sebelumnya descriptive. Belum ada ramalan masa depan untuk predictive atau keputusan jumlah pesanan untuk prescriptive.',
  },
  {
    id: 'sia-uts-tm2-07', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced',
    q: 'An audit dataset has Invoice_ID, Vendor_ID, Amount, and Paid_Date. Invoice 81 appears twice with the same vendor and amount, but different Paid_Date values. What is the best next audit step?',
    options: ['Hapus salah satu baris tanpa bukti tambahan', 'Periksa bukti pembayaran dan status invoice untuk membedakan duplikasi dari pembayaran sah yang terpisah', 'Simpulkan vendor fiktif karena ada dua tanggal', 'Jumlahkan keduanya sebagai dua pembelian yang pasti sah'],
    answer: 1,
    explanation: 'Pola invoice sama merupakan exception yang perlu diuji dengan bukti, bukan putusan final. Menghapus baris dapat menyembunyikan pembayaran ganda; dua tanggal tidak membuktikan vendor fiktif; menjumlahkan sebagai pembelian sah mengabaikan risiko duplikasi.',
  },
  {
    id: 'sia-uts-tm2-08', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced', kind: 'multi-select',
    q: 'Sebelum menghitung margin per SKU, file penjualan memakai tanggal campuran, SKU yang sebagian tidak ada di master, dan nama pelanggan. Which Master the Data actions are justified? Pilih semua yang tepat.',
    options: ['Standarkan format tanggal dan uji hasil perubahan formatnya', 'Cocokkan SKU ke master serta telusuri kode yang tidak dikenal', 'Sebarkan nama pelanggan lengkap di dashboard publik agar analisis transparan', 'Batasi akses atau hilangkan identitas pelanggan yang tidak diperlukan'],
    answers: [0, 1, 3],
    explanation: 'Format tanggal dan kode master harus dibersihkan serta divalidasi sebelum agregasi. Data pelanggan perlu perlindungan sesuai tujuan analisis. Menampilkan identitas lengkap pada dashboard publik tidak menambah perhitungan margin dan memperbesar risiko privasi.',
  },
  {
    id: 'sia-uts-tm2-09', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'advanced', kind: 'multi-select',
    q: 'Model memprediksi peluang pelanggan terlambat membayar. Tim hendak memakai hasilnya untuk batas kredit. Which checks are needed before acting? Pilih semua yang tepat.',
    options: ['Uji model pada data yang tidak dipakai melatihnya', 'Tinjau apakah data historis mewakili pelanggan saat ini', 'Anggap skor probabilitas sebagai kepastian bahwa pelanggan akan gagal bayar', 'Periksa dampak kesalahan prediksi dan aturan keputusan kredit'],
    answers: [0, 1, 3],
    explanation: 'Data uji dan keterwakilan mengukur apakah prediksi dapat dipakai di luar data latih. Dampak false positive dan false negative perlu dipertimbangkan sebelum tindakan prescriptive. Probabilitas bukan kepastian, sehingga opsi yang menganggapnya fakta mengabaikan ketidakpastian model.',
  },
  {
    id: 'sia-uts-tm2-10', tm: 2, topic: 'Data Analytics: Addressing Accounting Questions with Data', difficulty: 'medium', kind: 'short-answer',
    q: 'Analis memakai Goal Seek untuk menentukan unit minimal agar laba sama dengan nol. Sebutkan jenis analytics yang memilih target tindakan berdasarkan kendala itu.',
    answers: ['prescriptive', 'prescriptive analytics', 'analitika preskriptif', 'analisis preskriptif'],
    explanation: 'Prescriptive analytics membantu memilih tindakan atau nilai input untuk mencapai sasaran. Descriptive merangkum apa yang terjadi, diagnostic menjelaskan sebab, dan predictive memperkirakan hasil yang mungkin terjadi.',
  },
];

const tm3: QuizQuestion[] = [
  {
    id: 'sia-uts-tm3-06', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced',
    q: 'Pada BPMN, setelah menerima pesanan, Sales memeriksa kredit. Jika disetujui, gudang mengambil barang; jika ditolak, Sales mengirim pemberitahuan. Gateway apa yang memecah jalur tersebut?',
    options: ['Parallel gateway karena kedua aktivitas harus berjalan', 'Exclusive gateway karena satu keputusan memilih tepat satu jalur', 'Inclusive gateway karena selalu ada beberapa jalur', 'Message flow karena gudang merupakan lane lain'],
    answer: 1,
    explanation: 'Keputusan kredit memilih satu dari dua hasil yang saling meniadakan, sehingga exclusive gateway. Parallel akan menjalankan kedua jalur; inclusive memungkinkan lebih dari satu; perpindahan antar-lane dalam satu pool tetap menggunakan sequence flow, bukan message flow.',
  },
  {
    id: 'sia-uts-tm3-07', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced',
    q: 'A BPMN model puts the company and supplier in separate pools. Purchasing sends a purchase order to the supplier. Which connector should cross the pool boundary?',
    options: ['Sequence flow', 'Message flow', 'Association to a data object', 'Parallel gateway'],
    answer: 1,
    explanation: 'Message flow menggambarkan pertukaran pesan antar-pool, seperti PO dari perusahaan ke supplier. Sequence flow mengatur urutan aktivitas hanya di dalam pool; association mengaitkan data, bukan komunikasi; gateway membagi atau menggabungkan jalur proses.',
  },
  {
    id: 'sia-uts-tm3-08', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced', kind: 'multi-select',
    q: 'Swimlane proses pembayaran memperlihatkan staf A membuat vendor baru, menyetujui invoice, dan menyiapkan transfer; staf B hanya mengarsip dokumen. Perbaikan kontrol apa yang ditunjukkan diagram? Pilih semua yang tepat.',
    options: ['Pisahkan persetujuan vendor dari persiapan pembayaran', 'Minta petugas independen mencocokkan invoice dengan PO dan bukti terima', 'Hapus jejak persetujuan agar alur lebih cepat', 'Beri staf A hak menyetujui transfernya sendiri untuk mengurangi antrean'],
    answers: [0, 1],
    explanation: 'Konsentrasi pembuatan vendor, persetujuan invoice, dan pembayaran memungkinkan transaksi fiktif. Pemisahan tugas serta pemeriksaan dokumen oleh pihak independen menurunkan risiko. Menghapus jejak audit atau memberi persetujuan sendiri justru melemahkan kontrol.',
  },
  {
    id: 'sia-uts-tm3-09', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'advanced', kind: 'multi-select',
    q: 'Sebuah process map menggambar invoice datang dari supplier, diverifikasi AP, lalu pembayaran dikirim. Which revisions make the model more useful for walkthrough? Pilih semua yang tepat.',
    options: ['Tampilkan siapa yang menyetujui pembayaran dan bukti yang ditinjau', 'Tambahkan jalur ketika invoice tidak cocok dengan receiving report', 'Akhiri proses tepat sesudah invoice diterima walau pembayaran masih digambar', 'Beri label aktivitas dengan kata kerja dan objek yang jelas'],
    answers: [0, 1, 3],
    explanation: 'Walkthrough memerlukan pelaku, bukti, titik keputusan, serta jalur pengecualian. Nama aktivitas yang jelas membantu pembaca menelusuri proses. Mengakhiri token sebelum aktivitas pembayaran membuat model tidak konsisten dan menghilangkan langkah penting.',
  },
  {
    id: 'sia-uts-tm3-10', tm: 3, topic: 'Accountants as Business Analysts', difficulty: 'medium', kind: 'short-answer',
    q: 'Pada BPMN, perusahaan mengirim purchase order ke supplier yang digambar sebagai pool terpisah. Apa nama penghubung antarpool tersebut?',
    answers: ['message flow', 'alur pesan', 'arus pesan'],
    explanation: 'Message flow menghubungkan dua partisipan/pool berbeda. Sequence flow menunjukkan urutan kerja di dalam satu pool dan boleh melintasi lane, tetapi tidak boleh melintasi batas pool.',
  },
];

const tm4: QuizQuestion[] = [
  {
    id: 'sia-uts-tm4-06', tm: 4, topic: 'Data Modeling', difficulty: 'advanced',
    q: 'Diagram UML menyatakan satu Customer dapat memiliki 0..* Orders, sedangkan setiap Order harus terkait tepat 1 Customer. Apa yang harus diizinkan sistem?',
    options: ['Customer baru tanpa order; setiap order wajib memiliki satu Customer_ID yang valid', 'Order tanpa customer; customer wajib memiliki satu order', 'Satu order memiliki banyak customer karena simbol 0..*', 'Customer yang sudah punya order tidak boleh menerima order kedua'],
    answer: 0,
    explanation: '0..* di sisi Orders berarti seorang customer boleh belum memesan atau memesan berkali-kali. 1..1 di sisi Customer berarti setiap order wajib menunjuk satu customer. Opsi lain membalik atau mengabaikan batas minimum dan maksimum itu.',
  },
  {
    id: 'sia-uts-tm4-07', tm: 4, topic: 'Data Modeling', difficulty: 'advanced',
    q: 'A bookstore lets one order contain many book titles, and one title appear on many orders. The line records quantity and agreed unit price. Where should those two attributes be stored?',
    options: ['Pada master Book karena harga dan kuantitas selalu sama', 'Pada master Customer karena pembeli menentukan pesanan', 'Pada tabel penghubung Order_Line yang mengaitkan Order dan Book', 'Sebagai daftar teks di satu sel Order agar tidak perlu tabel baru'],
    answer: 2,
    explanation: 'Quantity dan agreed unit price bergantung pada pasangan Order–Book, sehingga berada di Order_Line. Master Book mungkin memiliki harga daftar, tetapi harga transaksi bisa berbeda. Customer bukan pemilik atribut baris, dan daftar dalam satu sel menyulitkan relasi serta melanggar atomicity.',
  },
  {
    id: 'sia-uts-tm4-08', tm: 4, topic: 'Data Modeling', difficulty: 'advanced', kind: 'multi-select',
    q: 'Pada diagram REA toko, Sales mengurangi Inventory dan Cash_Receipt menambah Cash. Klasifikasi mana yang konsisten? Pilih semua yang tepat.',
    options: ['Inventory dan Cash adalah resources', 'Sales dan Cash_Receipt adalah events', 'Customer adalah external agent', 'Accounts Receivable harus selalu menjadi resource fisik dalam diagram REA'],
    answers: [0, 1, 2],
    explanation: 'REA membedakan resource bernilai ekonomi, event yang mengubahnya, dan agent pelaku. Piutang dapat diturunkan dari event penjualan serta pembayaran; memasukkannya sebagai resource fisik wajib justru mencampur saldo turunan dengan resource yang dimodelkan.',
  },
  {
    id: 'sia-uts-tm4-09', tm: 4, topic: 'Data Modeling', difficulty: 'advanced', kind: 'multi-select',
    q: 'Sebuah rancangan menetapkan satu Department memiliki banyak Employee; setiap Employee wajib tepat satu Department. Which relational constraints follow? Pilih semua yang tepat.',
    options: ['Employee menyimpan Department_ID sebagai foreign key', 'Department_ID pada Employee tidak boleh kosong bila aturan wajib diberlakukan', 'Setiap Department harus menyimpan daftar Employee_ID dalam satu sel', 'Employee.Department_ID harus merujuk Department yang ada'],
    answers: [0, 1, 3],
    explanation: 'Relasi 1:N dipetakan dengan foreign key di sisi many; aturan wajib membuat foreign key tidak null dan referential integrity menuntut induk yang ada. Daftar banyak Employee_ID dalam satu sel bukan implementasi relasional yang baik.',
  },
  {
    id: 'sia-uts-tm4-10', tm: 4, topic: 'Data Modeling', difficulty: 'medium', kind: 'short-answer',
    q: 'Setiap Order boleh memuat banyak Product dan setiap Product boleh muncul pada banyak Order. Apa nama tabel yang memecah relasi M:N menjadi dua relasi 1:N? Jawab dengan istilah umum.',
    answers: ['linking table', 'tabel penghubung', 'junction table', 'associative table', 'tabel asosiasi'],
    explanation: 'Linking table menyimpan foreign key kedua sisi dan atribut relasi seperti kuantitas. Satu foreign key langsung di Order atau Product tidak cukup untuk merekam banyak pasangan tanpa pengulangan atau kehilangan data.',
  },
];

const tm5: QuizQuestion[] = [
  {
    id: 'sia-uts-tm5-06', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced',
    q: 'Tabel Order_Line berisi (Order_ID, Product_ID, Qty). Baris (O9, P2, 3) sudah ada. Pengguna memasukkan (O9, P2, 5), padahal kunci gabungannya (Order_ID, Product_ID). Tindakan yang sesuai adalah...',
    options: ['Simpan baris baru karena Qty berbeda', 'Tolak kunci duplikat atau ubah Qty pada baris yang ada sesuai bukti transaksi', 'Hapus Product_ID agar dua baris menjadi unik', 'Ganti Order_ID dengan nomor customer'],
    answer: 1,
    explanation: 'Kunci gabungan mengidentifikasi satu pasangan order dan produk, jadi dua baris dengan pasangan sama melanggar entity integrity. Bila memang ada tambahan unit untuk baris sama, Qty dapat diperbarui sesuai bukti. Qty bukan bagian kunci; menghapus Product_ID atau mengganti Order_ID merusak relasi.',
  },
  {
    id: 'sia-uts-tm5-07', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced',
    q: 'A query joins Invoice to Customer on Customer_ID. An invoice contains Customer_ID = C88, but Customer has no C88. What is the immediate data-quality issue?',
    options: ['Atomicity karena satu sel berisi banyak nilai', 'Referential integrity karena foreign key tidak memiliki induk', 'Order independence karena baris invoice tidak urut', 'Primary key uniqueness karena dua invoice sama'],
    answer: 1,
    explanation: 'Invoice menunjuk customer yang tidak ada, yaitu orphan foreign key dan pelanggaran referential integrity. Atomicity berkaitan dengan satu nilai per sel, order independence dengan urutan baris, dan duplikasi primary key tidak ditunjukkan oleh kasus.',
  },
  {
    id: 'sia-uts-tm5-08', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced', kind: 'multi-select',
    q: 'Tiga receipt bernilai 40, 70, dan 90 untuk Customer A; dua receipt bernilai 110 dan 130 untuk Customer B. Query mengelompokkan Customer_ID dan memakai HAVING SUM(Amount) > 200. Which results or interpretations are correct? Pilih semua yang tepat.',
    options: ['Customer B lolos dengan total 240', 'Customer A tidak lolos karena totalnya tepat 200', 'WHERE Amount > 200 memberi hasil agregat yang sama', 'HAVING menyaring kelompok setelah SUM dihitung'],
    answers: [0, 1, 3],
    explanation: 'A berjumlah 200 sehingga gagal syarat lebih besar dari 200; B berjumlah 240 sehingga lolos. HAVING bekerja pada agregat per customer. WHERE Amount > 200 memfilter baris sebelum pengelompokan dan di sini membuang semua receipt.',
  },
  {
    id: 'sia-uts-tm5-09', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'advanced', kind: 'multi-select',
    q: 'Saat barang diterima pada ERP, modul gudang mencatat receipt yang merujuk PO. Invoice pemasok baru datang esok hari. Which statements are sound? Pilih semua yang tepat.',
    options: ['Receipt dapat memperbarui persediaan dan akun sementara GR/IR', 'Invoice harus tetap dicocokkan dengan PO dan bukti terima sebelum pembayaran', 'Pencatatan receipt membuktikan invoice pasti benar meskipun belum diterima', 'Referensi PO yang sama memungkinkan bagian gudang dan AP memakai data transaksi terhubung'],
    answers: [0, 1, 3],
    explanation: 'ERP menghubungkan dokumen lintas fungsi dan dapat mencatat persediaan serta GR/IR saat penerimaan. Saat invoice tiba, harga dan kuantitas tetap perlu diperiksa. Receipt saja tidak membuktikan isi invoice yang bahkan belum ada.',
  },
  {
    id: 'sia-uts-tm5-10', tm: 5, topic: 'Relational Databases and Enterprise Systems', difficulty: 'medium', kind: 'short-answer',
    q: 'Pada tabel Invoice, Customer_ID harus menunjuk Customer_ID yang ada di tabel Customer. Apa nama aturan integritas relasional ini?',
    answers: ['referential integrity', 'integritas referensial', 'integritas rujukan'],
    explanation: 'Referential integrity mencegah foreign key yatim. Entity integrity mengatur primary key unik dan tidak null; atomicity mengatur isi sel, sehingga keduanya bukan aturan yang ditanyakan.',
  },
];

const tm6: QuizQuestion[] = [
  {
    id: 'sia-uts-tm6-06', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced',
    q: 'Pesanan kredit Rp8 juta disetujui, tetapi gudang baru mengirim separuh barang senilai Rp4 juta. Dalam kasus pengakuan saat kendali barang berpindah, berapa pendapatan yang diakui sekarang?',
    options: ['Rp0 karena kas belum diterima', 'Rp4 juta untuk barang yang telah diserahkan', 'Rp8 juta karena order telah disetujui', 'Rp12 juta karena nilai order ditambah pengiriman'],
    answer: 1,
    explanation: 'Untuk barang yang telah diserahkan, kewajiban kinerja sebesar Rp4 juta telah dipenuhi dan dapat diakui sesuai syarat kasus. Persetujuan order tidak sama dengan penyerahan; penerimaan kas bukan syarat pengakuan penjualan kredit. Rp12 juta menghitung ganda.',
  },
  {
    id: 'sia-uts-tm6-07', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced',
    q: 'One cash receipt of Rp6 million settles Rp2 million of Sale S1 and Rp4 million of Sale S2. How should a relational design record the application of cash?',
    options: ['Simpan satu Sale_ID saja dalam Cash_Receipt', 'Buat dua baris pada tabel penghubung Sale_Cash_Receipt dengan Amount_Applied masing-masing', 'Gandakan receipt Rp6 juta dalam dua baris agar tiap penjualan lunas', 'Simpan daftar S1,S2 dalam satu sel Sale_ID'],
    answer: 1,
    explanation: 'Satu receipt dapat melunasi beberapa sale; tabel penghubung mencatat alokasi 2 dan 4 juta tanpa menggandakan kas. Satu Sale_ID kehilangan alokasi kedua, penggandaan receipt melebihkan kas, dan daftar dalam satu sel menyulitkan integritas serta query.',
  },
  {
    id: 'sia-uts-tm6-08', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: 'Pesanan kredit baru masuk. Sebelum picking ticket dikirim ke gudang, kontrol mana yang relevan untuk mencegah pengiriman yang tak dapat ditagih atau salah alamat? Pilih semua yang tepat.',
    options: ['Validasi Customer_ID terhadap master pelanggan', 'Periksa batas kredit dan saldo terbuka sesuai kebijakan', 'Cocokkan alamat kirim dengan data atau persetujuan perubahan alamat', 'Akui pendapatan penuh saat order dibuat agar piutang muncul lebih cepat'],
    answers: [0, 1, 2],
    explanation: 'Validasi customer, penilaian kredit, dan pemeriksaan alamat membantu sebelum fulfillment. Pengakuan pendapatan saat order dibuat tidak mencegah risiko, dan pada kasus barang belum diserahkan akan mengakui pendapatan terlalu dini.',
  },
  {
    id: 'sia-uts-tm6-09', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: 'Customer mengembalikan dua unit yang telah ditagih; kas untuk invoice itu belum diterima. Which effects or controls are appropriate? Pilih semua yang tepat.',
    options: ['Terbitkan credit memo yang merujuk invoice asal setelah retur diperiksa', 'Kurangi piutang pelanggan sesuai nilai retur yang disetujui', 'Catat cash receipt baru meskipun tidak ada kas masuk', 'Periksa kondisi barang sebelum menambah persediaan yang dapat dijual'],
    answers: [0, 1, 3],
    explanation: 'Credit memo dan pengurangan piutang menelusuri koreksi atas penjualan kredit; stok layak jual bergantung pada pemeriksaan kondisi barang. Mencatat cash receipt tanpa kas akan melebihkan kas dan menyamarkan bahwa transaksi adalah retur.',
  },
  {
    id: 'sia-uts-tm6-10', tm: 6, topic: 'Sales and Collections Business Process', difficulty: 'medium', kind: 'short-answer',
    q: 'Satu pembayaran pelanggan dipakai untuk melunasi dua invoice. Apa nama atribut pada tabel penghubung yang menyimpan rupiah pembayaran yang dialokasikan ke setiap invoice? Jawab dengan istilah data yang lazim.',
    answers: ['amount applied', 'amount_applied', 'jumlah yang dialokasikan', 'nilai yang dialokasikan'],
    explanation: 'Amount_Applied menunjukkan bagian receipt yang diterapkan pada tiap invoice. Nilai total receipt saja tidak menjelaskan pembagiannya, sedangkan Credit_Limit adalah batas kredit pelanggan.',
  },
];

const tm7: QuizQuestion[] = [
  {
    id: 'sia-uts-tm7-06', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced',
    q: 'PO memesan 100 unit seharga Rp50 ribu. Receiving report menyatakan 90 unit diterima baik; invoice menagih 100 unit. Apa keputusan AP yang paling tepat sebelum membayar?',
    options: ['Bayar 100 unit karena invoice pemasok adalah dokumen eksternal', 'Bayar 90 unit otomatis tanpa memberi tahu pemasok', 'Tahan selisih dan selesaikan perbedaan invoice, PO, serta receipt sesuai kebijakan', 'Ubah receiving report menjadi 100 agar ketiga dokumen sama'],
    answer: 2,
    explanation: 'Three-way match menemukan selisih 10 unit; AP perlu menyelidiki dan menyelesaikannya sebelum menyetujui jumlah yang dibayar. Invoice saja tidak membuktikan penerimaan, pembayaran 90 tanpa prosedur bisa melanggar syarat, dan mengubah bukti terima memalsukan kejadian fisik.',
  },
  {
    id: 'sia-uts-tm7-07', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced',
    q: 'A vendor sends two invoices with the same invoice number and amount against one PO. Both pass a simple three-way comparison with that PO and receipt. Which added control best targets duplicate payment?',
    options: ['Validasi kombinasi Vendor_ID dan Invoice_Number terhadap invoice yang sudah tercatat atau dibayar', 'Hapus pemeriksaan receiving report untuk mempercepat proses', 'Beri satu pegawai hak membuat vendor dan melepas pembayaran', 'Bayar invoice kedua karena PO masih ada'],
    answer: 0,
    explanation: 'Three-way match yang hanya melihat kecocokan dokumen dapat melewatkan invoice yang diajukan dua kali. Pemeriksaan nomor invoice per vendor dan status pembayaran menangkap duplikasi. Opsi lain melemahkan kontrol atau justru membayar dua kali.',
  },
  {
    id: 'sia-uts-tm7-08', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: 'Gudang menerima 18 dari 20 unit yang dipesan pada PO; supplier mengirim invoice 20 unit. Which records and actions preserve an audit trail? Pilih semua yang tepat.',
    options: ['Catat receiving report 18 unit sesuai hitungan fisik', 'Pertahankan PO 20 unit sebagai bukti otorisasi awal', 'Ubah receiving report menjadi 20 agar invoice lolos', 'Tandai selisih dua unit untuk resolusi sebelum pembayaran'],
    answers: [0, 1, 3],
    explanation: 'PO menunjukkan yang diotorisasi, receiving report menunjukkan yang sungguh diterima, dan exception selisih perlu ditindaklanjuti. Mengubah receipt menjadi 20 menghapus bukti short shipment dan dapat menyebabkan kelebihan pembayaran.',
  },
  {
    id: 'sia-uts-tm7-09', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'advanced', kind: 'multi-select',
    q: 'Dalam model REA pembelian kredit, PO dibuat Senin, barang diterima Rabu, dan kas dibayar Jumat. Which classifications or timing statements are correct? Pilih semua yang tepat.',
    options: ['PO adalah komitmen pembelian, bukan bukti barang sudah diterima', 'Goods receipt adalah event yang menambah inventory', 'Cash disbursement adalah event yang mengurangi cash', 'PO langsung mengurangi cash saat disetujui'],
    answers: [0, 1, 2],
    explanation: 'PO menyatakan niat/komitmen; penerimaan barang dan pembayaran adalah kejadian ekonomi pada waktu berbeda. PO saja belum memindahkan barang ataupun kas, sehingga tidak boleh diperlakukan sebagai cash disbursement.',
  },
  {
    id: 'sia-uts-tm7-10', tm: 7, topic: 'Purchases and Payments Business Process', difficulty: 'medium', kind: 'short-answer',
    q: 'AP membandingkan purchase order, receiving report, dan vendor invoice sebelum menyetujui pembayaran. Apa nama kontrol pencocokan tiga dokumen ini?',
    answers: ['three way match', 'three-way match', 'pencocokan tiga dokumen', 'pencocokan tiga arah'],
    explanation: 'Three-way match menguji otorisasi pembelian, penerimaan fisik, dan tagihan pemasok. Dua dokumen saja tidak cukup untuk memastikan baik pemesanan maupun penerimaan benar; selisih harus diselesaikan sebelum pembayaran.',
  },
];

export const SIA_UTS_SUPPLEMENT: QuizQuestion[] = [
  ...tm1, ...tm2, ...tm3, ...tm4, ...tm5, ...tm6, ...tm7,
];
