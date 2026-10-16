// src/data/flashcards/sii306.ts
// Flashcard Sistem Informasi Akuntansi (SII306): 9 kartu per TM Pra-UTS, 6 per TM Pra-UAS.
// Pra-UTS IDs are preserved. RPS-corrected post-UTS cards use v3 IDs so old-topic mastery is not reused.
import type { AdvancedStudyCard } from '../../types';

const cards: AdvancedStudyCard[] = [
  {
    "id": "aks301-tm01-01",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Definisi",
    "front": "Apa fungsi inti sistem informasi akuntansi (SIA)?",
    "back": "Mengubah data transaksi menjadi informasi untuk keputusan dan pelaporan, sambil menjaga pengendalian atas data dan proses."
  },
  {
    "id": "aks301-tm01-02",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Apa beda data transaksi dan informasi untuk keputusan?",
    "back": "Data adalah fakta mentah; informasi ialah data yang diberi konteks sehingga membantu memutuskan tindakan."
  },
  {
    "id": "aks301-v2-tm01-03",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Laporan berguna untuk prediksi tetapi sengaja menghapus transaksi buruk. Kualitas apa yang gagal?",
    "back": "Faithful representation: laporan tidak lengkap dan tidak netral, walau mungkin tetap relevan untuk prediksi."
  },
  {
    "id": "aks301-v2-tm01-04",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Mekanisme",
    "front": "Akuntan yang menguji kontrol SIA secara independen berperan sebagai apa?",
    "back": "Evaluator. Designer merancang kebutuhan dan kontrol; evaluator menguji apakah kontrol bekerja."
  },
  {
    "id": "aks301-v2-tm01-05",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Dalam value chain, penerimaan bahan dan procurement termasuk aktivitas apa?",
    "back": "Penerimaan bahan = inbound logistics (primary); procurement/pengadaan = support activity."
  },
  {
    "id": "aks301-v2-tm01-06",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Sertifikasi apa yang secara khusus berfokus pada audit sistem informasi?",
    "back": "CISA (Certified Information Systems Auditor), dari ISACA."
  },
  {
    "id": "aks301-v3-tm01-07",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Prosedur",
    "front": "Apa urutan information value chain dari data menuju keputusan?",
    "back": "Data → information → knowledge → decision. Pengetahuan memberi makna pada informasi untuk memilih tindakan."
  },
  {
    "id": "aks301-v3-tm01-08",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Pengendalian",
    "front": "Laporan penuh data mentah menutupi stok kritis. Teknik pelaporan apa membantu?",
    "back": "Exception reporting: tampilkan penyimpangan yang perlu tindakan, misalnya stok di bawah reorder point."
  },
  {
    "id": "aks301-v3-tm01-09",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Kapan investasi informasi discretionary memberi nilai bersih positif?",
    "back": "Saat manfaat yang diharapkan melebihi biaya: value of information = benefit − cost > 0."
  },
  {
    "id": "aks301-v2-tm02-01",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Konsep",
    "front": "Apa empat V Big Data?",
    "back": "Volume (jumlah), Variety (ragam), Velocity (kecepatan), dan Veracity (keandalan data)."
  },
  {
    "id": "aks301-v2-tm02-02",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Prosedur",
    "front": "Apa urutan empat tahap AMPS?",
    "back": "Ask the Question → Master the Data → Perform the Analysis → Share the Story."
  },
  {
    "id": "aks301-v2-tm02-03",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Pengendalian",
    "front": "Pada ekspor general ledger, Entered_By sama dengan Approved_By menandai risiko apa?",
    "back": "Self-approval: pembuat jurnal menyetujui jurnal sendiri. Periksa otorisasi dan bukti sebelum menyimpulkan transaksi salah."
  },
  {
    "id": "aks301-v2-tm02-04",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Klasifikasi",
    "front": "Empat jenis analytics menjawab empat pertanyaan apa?",
    "back": "Descriptive: apa terjadi? Diagnostic: mengapa? Predictive: apa mungkin terjadi? Prescriptive: tindakan apa?"
  },
  {
    "id": "aks301-v2-tm02-05",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Konsep",
    "front": "Altman Z-score termasuk predictive atau prescriptive analytics?",
    "back": "Predictive: skor memberi sinyal risiko kesulitan keuangan, bukan kepastian bangkrut atau tindakan otomatis."
  },
  {
    "id": "aks301-v2-tm02-06",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Mekanisme",
    "front": "Pada Goal Seek untuk breakeven, sel hasil, target, dan input yang diubah adalah apa?",
    "back": "Set Cell = laba bersih; To Value = 0; By Changing Cell = jumlah unit terjual."
  },
  {
    "id": "aks301-v3-tm02-07",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Prosedur",
    "front": "Apa urutan ETL saat Master the Data?",
    "back": "Extract → Transform → Load: ambil data, bersihkan/seragamkan, lalu muat ke tempat analisis."
  },
  {
    "id": "aks301-v3-tm02-08",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Perbandingan",
    "front": "Banyak file berbeda format adalah Variety; kode pelanggan salah berulang adalah V apa?",
    "back": "Veracity, yaitu keandalan dan ketepatan data; masalahnya perlu dibersihkan sebelum analisis."
  },
  {
    "id": "aks301-v3-tm02-09",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Konsep",
    "front": "Apa arti Gray Zone pada Altman Z-score?",
    "back": "Sinyal risiko yang belum pasti: perlu telaah lanjutan, bukan vonis bangkrut atau aman."
  },
  {
    "id": "aks301-v2-tm03-01",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Hukum",
    "front": "Mengapa swimlane membantu penilaian ICFR menurut SOX 404?",
    "back": "Swimlane menunjukkan pelaku, urutan, dan titik kontrol sehingga transaksi dapat ditelusuri dan pemisahan tugas diperiksa."
  },
  {
    "id": "aks301-v2-tm03-02",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Dalam BPMN, apa beda pool dan lane?",
    "back": "Pool mewakili partisipan seperti perusahaan atau vendor; lane membagi peran/departemen di dalam satu pool."
  },
  {
    "id": "aks301-v2-tm03-03",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Perbandingan",
    "front": "Sequence flow atau message flow untuk PO dari perusahaan ke vendor?",
    "back": "Message flow, karena PO melintasi dua pool. Sequence flow hanya mengurutkan aktivitas di dalam satu pool."
  },
  {
    "id": "aks301-v2-tm03-04",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Gateway BPMN apa yang memilih tepat satu jalur setelah cek kredit?",
    "back": "Exclusive gateway (XOR): hanya satu cabang sesuai hasil keputusan yang dijalankan."
  },
  {
    "id": "aks301-v2-tm03-05",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Gateway BPMN apa yang menjalankan semua cabang dan menunggu semuanya selesai?",
    "back": "Parallel gateway (AND): split membuka semua cabang; join menunggu token dari seluruh cabang."
  },
  {
    "id": "aks301-v2-tm03-06",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Klasifikasi",
    "front": "DFD menerima input tetapi tidak menghasilkan output. Apa nama kesalahannya?",
    "back": "Black hole. Miracle adalah output tanpa input; gray hole menghasilkan output yang tidak didukung inputnya."
  },
  {
    "id": "aks301-v3-tm03-07",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Perbandingan",
    "front": "Gateway apa yang dapat membuka satu atau beberapa cabang yang kondisinya benar?",
    "back": "Inclusive gateway (OR). XOR membuka tepat satu; AND membuka semua cabang."
  },
  {
    "id": "aks301-v3-tm03-08",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Dalam BPMN, simbol apa menahan alur sampai tanggal tertentu?",
    "back": "Intermediate timer event; proses berlanjut setelah waktu yang ditentukan tiba."
  },
  {
    "id": "aks301-v3-tm03-09",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Pengendalian",
    "front": "Satu swimlane menyetujui PO sekaligus menyimpan barang. Konflik tugas apa terlihat?",
    "back": "Authorization dan custody digabung; pemegang barang tidak seharusnya menyetujui pembeliannya sendiri."
  },
  {
    "id": "aks301-v2-tm04-01",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Konsep",
    "front": "Apa yang dijawab UML class diagram, berbeda dari BPMN?",
    "back": "UML class diagram menunjukkan class, atribut, dan relasi data; BPMN menunjukkan urutan aktivitas proses."
  },
  {
    "id": "aks301-tm04-02",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Definisi",
    "front": "Apa fungsi foreign key pada tabel anak?",
    "back": "Merujuk primary key tabel induk agar baris di kedua tabel terhubung secara logis."
  },
  {
    "id": "aks301-v2-tm04-03",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Klasifikasi",
    "front": "Dalam REA, Inventory, Sale, dan Customer masing-masing tergolong apa?",
    "back": "Inventory = resource; Sale = event; Customer = agent."
  },
  {
    "id": "aks301-v2-tm04-04",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Konsep",
    "front": "Dalam multiplicity UML, apa beda minimum 0 dan 1?",
    "back": "Minimum 0 berarti hubungan boleh belum ada; minimum 1 berarti hubungan wajib ada."
  },
  {
    "id": "aks301-v2-tm04-05",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Konsep",
    "front": "Dari multiplicity maksimum kedua sisi, bagaimana mengenali relasi M:N?",
    "back": "Kedua sisi berakhir dengan banyak (*); satu instance tiap class dapat terkait banyak instance class lain."
  },
  {
    "id": "aks301-v2-tm04-06",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Mekanisme",
    "front": "Relasi Order–Product bersifat M:N. Di mana Qty per produk disimpan?",
    "back": "Pada linking table Order_Line bersama Order_ID dan Product_ID; Qty milik pasangan order dan produk."
  },
  {
    "id": "aks301-v3-tm04-07",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Mekanisme",
    "front": "Pada relasi Department 1:N Employee, di tabel mana Department_ID menjadi foreign key?",
    "back": "Di Employee, yaitu sisi banyak; setiap karyawan menunjuk departemen induknya."
  },
  {
    "id": "aks301-v3-tm04-08",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Konsep",
    "front": "Customer–Orders bertanda 0..* di sisi Orders. Bolehkah customer belum punya order?",
    "back": "Boleh. Minimum 0 berarti customer dapat ada sebelum pesanan pertamanya."
  },
  {
    "id": "aks301-v3-tm04-09",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Perbandingan",
    "front": "Invoice_Line tidak dapat ada tanpa Invoice. Composition atau aggregation?",
    "back": "Composition: bagian bergantung pada induk; di UML diamond hitam berada di sisi Invoice."
  },
  {
    "id": "aks301-v2-tm05-01",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Konsep",
    "front": "Invoice_ID kosong atau duplikat melanggar aturan integritas apa?",
    "back": "Entity integrity: primary key harus unik dan tidak boleh null."
  },
  {
    "id": "aks301-v2-tm05-02",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Konsep",
    "front": "Invoice menunjuk Customer_ID yang tidak ada. Integritas apa yang dilanggar?",
    "back": "Referential integrity: foreign key harus merujuk primary key induk yang ada, kecuali null diizinkan."
  },
  {
    "id": "aks301-v2-tm05-03",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Konsep",
    "front": "Satu sel berisi tiga nomor telepon. Aturan relasional apa yang dilanggar?",
    "back": "Atomic attribute atau 1NF: satu sel menyimpan satu nilai, bukan daftar nilai."
  },
  {
    "id": "aks301-v2-tm05-04",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Perbandingan",
    "front": "Untuk pelanggan dengan SUM(pembayaran) di atas batas, gunakan WHERE atau HAVING?",
    "back": "HAVING menyaring hasil kelompok setelah GROUP BY; WHERE menyaring baris sebelum agregasi."
  },
  {
    "id": "aks301-v2-tm05-05",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Klasifikasi",
    "front": "Goods receipt dicatat di modul ERP apa dan berdampak pada modul apa?",
    "back": "MM (Materials Management) mencatat penerimaan; FI (Financial Accounting) menerima dampak akuntansinya."
  },
  {
    "id": "aks301-v2-tm05-06",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Perbandingan",
    "front": "Apa satu risiko khas Cloud ERP dibanding sistem yang dikelola sendiri?",
    "back": "Ketergantungan pada vendor dan koneksi internet; akses dapat terganggu bila layanan tidak tersedia."
  },
  {
    "id": "aks301-v3-tm05-07",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Prosedur",
    "front": "Dalam SQL, klausa apa memilih tabel asal dan apa menyaring baris?",
    "back": "FROM memilih tabel asal; WHERE menyaring baris sebelum hasil ditampilkan atau diagregasi."
  },
  {
    "id": "aks301-v3-tm05-08",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Konsep",
    "front": "Saat goods receipt diposting sebelum invoice datang, untuk apa akun GR/IR?",
    "back": "Akun sementara penghubung penerimaan barang dan invoice pemasok yang kelak dicocokkan."
  },
  {
    "id": "aks301-v3-tm05-09",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Mekanisme",
    "front": "Receipt hanya menyimpan Invoice_Number. Bagaimana mengambil nama Customer pemilik invoice?",
    "back": "JOIN Receipt ke Invoice lewat Invoice_Number, lalu ke Customer lewat Customer_ID."
  },
  {
    "id": "aks301-v2-tm06-01",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Prosedur",
    "front": "Apa urutan inti order-to-cash dari penawaran sampai kas diterima?",
    "back": "Quote → sales order → pick/pack → kirim dan tagih → terima serta setor kas."
  },
  {
    "id": "aks301-v2-tm06-02",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Pengendalian",
    "front": "Mengapa staf Sales tidak boleh menyetujui batas kredit pelanggannya sendiri?",
    "back": "Agar pembuat order tidak sekaligus mengotorisasi risiko kredit; persetujuan kredit perlu fungsi independen."
  },
  {
    "id": "aks301-v2-tm06-03",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Konsep",
    "front": "Pada penjualan barang kredit, kapan pendapatan diakui: saat order atau penyerahan?",
    "back": "Saat kendali barang berpindah dan kewajiban kinerja terpenuhi; order saja belum cukup."
  },
  {
    "id": "aks301-v2-tm06-04",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Mekanisme",
    "front": "Pelanggan membayar dalam termin 2/10. Piutang dihapus sebesar bruto atau neto?",
    "back": "Bruto; selisihnya dicatat sebagai Sales Discounts, akun kontra-pendapatan."
  },
  {
    "id": "aks301-v2-tm06-05",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Klasifikasi",
    "front": "Customer_ID harus ada di master; tanggal kirim tak boleh sebelum order. Kontrol apa masing-masing?",
    "back": "Validity check untuk Customer_ID; reasonableness check untuk hubungan dua tanggal."
  },
  {
    "id": "aks301-v2-tm06-06",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Konsep",
    "front": "Dalam REA, dari peristiwa apa saldo piutang pelanggan diturunkan?",
    "back": "Penjualan yang sudah ditagih dikurangi kas yang dialokasikan dan penyesuaian seperti retur atau diskon."
  },
  {
    "id": "aks301-v3-tm06-07",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Dokumen",
    "front": "Apa beda packing slip dan bill of lading saat barang dikirim?",
    "back": "Packing slip merinci isi kiriman; bill of lading membuktikan penyerahan barang kepada carrier."
  },
  {
    "id": "aks301-v3-tm06-08",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Dokumen",
    "front": "Pelanggan mengembalikan barang yang sudah ditagih. Dokumen apa mengurangi piutangnya?",
    "back": "Credit memo yang merujuk invoice asal, setelah retur disetujui."
  },
  {
    "id": "aks301-v3-tm06-09",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Mekanisme",
    "front": "Satu cash receipt melunasi dua invoice. Di mana Amount_Applied per invoice disimpan?",
    "back": "Di linking table antara receipt dan invoice/penjualan; setiap baris menyimpan alokasinya."
  },
  {
    "id": "aks301-v2-tm07-01",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Prosedur",
    "front": "Apa urutan inti procure-to-pay dari kebutuhan hingga pembayaran?",
    "back": "Ajukan kebutuhan → terbitkan PO → terima/periksa barang → cocokkan invoice → bayar pemasok."
  },
  {
    "id": "aks301-v2-tm07-02",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Mengapa kuantitas disembunyikan pada blind PO untuk petugas receiving?",
    "back": "Agar petugas menghitung barang secara mandiri, bukan menyalin jumlah pesanan."
  },
  {
    "id": "aks301-v2-tm07-03",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Dokumen apa yang dicocokkan AP dalam three-way match?",
    "back": "Purchase order, receiving report, dan vendor invoice sebelum pembayaran disetujui."
  },
  {
    "id": "aks301-v2-tm07-04",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Mengapa pemilihan vendor perlu ditinjau pihak independen dari buyer?",
    "back": "Untuk mengurangi risiko kickback: buyer memilih vendor demi imbalan, bukan mutu dan harga yang wajar."
  },
  {
    "id": "aks301-v2-tm07-05",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Konsep",
    "front": "Dalam REA pembelian, apa pasangan get dan give?",
    "back": "Get Inventory saat barang diterima; give Cash saat pemasok dibayar. Waktunya boleh berbeda."
  },
  {
    "id": "aks301-v2-tm07-06",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Mekanisme",
    "front": "Dalam sistem persediaan perpetual, apa jurnal saat barang kredit diterima?",
    "back": "Dr Inventory; Cr Accounts Payable. PO yang baru diterbitkan belum menimbulkan jurnal ini."
  },
  {
    "id": "aks301-v3-tm07-07",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Dokumen",
    "front": "Barang dari vendor rusak dan nilai utang harus dikurangi. Dokumen apa diterbitkan pembeli?",
    "back": "Debit memo: pemberitahuan pengurangan jumlah yang terutang kepada vendor."
  },
  {
    "id": "aks301-v3-tm07-08",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Kontrol apa menangkap dua invoice bernomor sama dari vendor yang sama?",
    "back": "Cek keunikan Vendor_ID + Invoice_Number serta status pembayarannya sebelum invoice disetujui."
  },
  {
    "id": "aks301-v3-tm07-09",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Konsep",
    "front": "Dalam REA pembelian, dari event apa saldo utang usaha diturunkan?",
    "back": "Pembelian/barang diterima yang menimbulkan tagihan, dikurangi pembayaran dan penyesuaian yang diterapkan."
  },
  {
    "id": "aks301-v3-tm08-01",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Conversion Business Process",
    "category": "Konsep",
    "front": "Alur biaya conversion",
    "back": "Raw materials → WIP → finished goods → COGS; COGM adalah transfer produk selesai, COGS biaya produk terjual. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "id": "aks301-v3-tm08-02",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Conversion Business Process",
    "category": "Konsep",
    "front": "Rumus COGM",
    "back": "WIP awal + bahan langsung terpakai + tenaga kerja langsung + overhead dibebankan − WIP akhir. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "id": "aks301-v3-tm08-03",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Conversion Business Process",
    "category": "Konsep",
    "front": "BOM versus material issue",
    "back": "BOM memuat rencana bahan; material issue mencatat pemakaian aktual. Selisih perlu investigasi dan approval. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "id": "aks301-v3-tm08-04",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Conversion Business Process",
    "category": "Konsep",
    "front": "Model WIP",
    "back": "WIP dapat dihitung dari biaya event pekerjaan belum selesai; tidak harus menjadi kelas resource tersendiri pada model generik. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "id": "aks301-v3-tm08-05",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Conversion Business Process",
    "category": "Konsep",
    "front": "Linking table conversion",
    "back": "Hubungan banyak material issue–bahan dan labor operations–pegawai memakai tabel penghubung dengan data jumlah/jam. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "id": "aks301-v3-tm08-06",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Conversion Business Process",
    "category": "Konsep",
    "front": "Tanggal production authorization",
    "back": "Bedakan tanggal otorisasi, tanggal selesai terjadwal, dan tanggal selesai aktual; jangan menyamakannya. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "id": "aks301-v3-tm09-01",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Integrated Project",
    "category": "Konsep",
    "front": "Urutan Integrated Project",
    "back": "Kebutuhan → model proses → UML/REA terpadu → database → query dan validasi. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "id": "aks301-v3-tm09-02",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Integrated Project",
    "category": "Konsep",
    "front": "Kunci dan integritas referensial",
    "back": "PK unik dan tidak null; FK mengarah data yang valid sesuai aturan. Ini tidak membuktikan substansi barang. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "id": "aks301-v3-tm09-03",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Integrated Project",
    "category": "Konsep",
    "front": "Saldo piutang",
    "back": "Masukkan saldo awal, penjualan, alokasi kas, retur/kredit dan penyesuaian; nyatakan asumsi formula sederhana. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "id": "aks301-v3-tm09-04",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Integrated Project",
    "category": "Konsep",
    "front": "Grain dan join",
    "back": "Satu baris mewakili unit yang jelas. Join banyak baris dapat menggandakan total; agregasikan dan rekonsiliasi. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "id": "aks301-v3-tm09-05",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Integrated Project",
    "category": "Konsep",
    "front": "Audit trail",
    "back": "Tautkan dokumen, pelaku, waktu dan perubahan. Penelusuran ke bahan baku memerlukan traceability yang tersedia. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "id": "aks301-v3-tm09-06",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Integrated Project",
    "category": "Konsep",
    "front": "Saldo seimbang",
    "back": "Debit = kredit membantu aritmetika; transaksi yang sama-sama terlewat tetap dapat membuat laporan salah. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "id": "aks301-v3-tm10-01",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "category": "Konsep",
    "front": "Tiga tujuan COSO",
    "back": "Operations, reporting, compliance. Reporting mencakup laporan internal/eksternal dan keuangan/nonkeuangan. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "id": "aks301-v3-tm10-02",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "category": "Konsep",
    "front": "Lima komponen COSO",
    "back": "Control environment; risk assessment; control activities; information/communication; monitoring. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "id": "aks301-v3-tm10-03",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "category": "Konsep",
    "front": "17 prinsip COSO 2013",
    "back": "Pembagian 5 + 4 + 3 + 3 + 2 pada lima komponen. Periksa hadir, berfungsi, dan bekerja bersama. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "id": "aks301-v3-tm10-04",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "category": "Konsep",
    "front": "Preventif, detektif, korektif",
    "back": "Mencegah masalah; menemukan masalah; memperbaiki/memulihkan. Contoh: approval, rekonsiliasi, restore. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "id": "aks301-v3-tm10-05",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "category": "Konsep",
    "front": "Desain versus pelaksanaan",
    "back": "Desain: mampu mengatasi risiko jika dijalankan. Pelaksanaan: benar-benar berjalan konsisten pada periode relevan. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "id": "aks301-v3-tm10-06",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "category": "Konsep",
    "front": "IC dan ERM",
    "back": "IC 2013: 5 komponen/17 prinsip. ERM 2004: 8 komponen. ERM 2017: 5 komponen/20 prinsip. Jangan dicampur. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "id": "aks301-v3-tm11-01",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "category": "Konsep",
    "front": "CIA",
    "back": "Confidentiality: rahasia; integrity: utuh/akurat; availability: tersedia. Satu insiden dapat memengaruhi beberapa tujuan. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "id": "aks301-v3-tm11-02",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "category": "Konsep",
    "front": "Authentication dan authorization",
    "back": "Verifikasi identitas berbeda dari pembatasan tindakan; pengguna sah tetap memerlukan least privilege. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "id": "aks301-v3-tm11-03",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "category": "Konsep",
    "front": "Hash, encryption, signature",
    "back": "Hash merangkum integritas; encryption menjaga rahasia; signature mendukung asal/integritas dengan kepercayaan kunci. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "id": "aks301-v3-tm11-04",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "category": "Konsep",
    "front": "RPO versus RTO",
    "back": "RPO: titik pemulihan data/toleransi kehilangan. RTO: target durasi pemulihan layanan. Interval backup bukan otomatis target. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "id": "aks301-v3-tm11-05",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "category": "Konsep",
    "front": "Fraud triangle",
    "back": "Pressure/incentive, opportunity, rationalization membantu asesmen risiko; keberadaannya belum bukti individu curang. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "id": "aks301-v3-tm11-06",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "category": "Konsep",
    "front": "BCP, DRP dan SOC",
    "back": "BCP mencakup kelangsungan bisnis; DRP pemulihan TI. SOC 1 fokus ICFR pengguna; SOC 2 kriteria Trust Services sesuai cakupan. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "id": "aks301-v3-tm12-01",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "category": "Konsep",
    "front": "Warehouse, mart, lake",
    "back": "Warehouse mengintegrasi data historis; mart subset kebutuhan tertentu; lake dapat menampung data terstruktur/tidak terstruktur. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "id": "aks301-v3-tm12-02",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "category": "Konsep",
    "front": "Dashboard yang berguna",
    "back": "Tentukan tujuan, definisi KPI, penyebut, tanggal refresh, sumber dan pemilik tindakan; banyak grafik bukan ukuran keberhasilan. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "id": "aks301-v3-tm12-03",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "category": "Konsep",
    "front": "Taxonomy versus instance",
    "back": "Taxonomy mendefinisikan konsep/tipe/hubungan; instance berisi fakta entitas beserta context dan unit. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "id": "aks301-v3-tm12-04",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "category": "Konsep",
    "front": "Instant versus duration",
    "back": "Saldo kas: satu tanggal (instant). Revenue: rentang periode (duration). Entity dan dimensi juga harus cocok. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "id": "aks301-v3-tm12-05",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "category": "Konsep",
    "front": "Validasi XBRL",
    "back": "Uji tag, context, unit, skala, tanda, ketelitian dan kelengkapan terhadap sumber; valid teknis belum benar secara akuntansi. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "id": "aks301-v3-tm12-06",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "category": "Konsep",
    "front": "XBRL GL",
    "back": "Kerangka pertukaran data tingkat transaksi/ledger; berbeda dari fakta agregat taxonomy pelaporan keuangan. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "id": "aks301-v3-tm13-01",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "category": "Konsep",
    "front": "Blockchain dan batasnya",
    "back": "Hash, signature, konsensus dan replikasi membantu konsistensi riwayat. Integritas ledger belum membuktikan transaksi fisik benar. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "id": "aks301-v3-tm13-02",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "category": "Konsep",
    "front": "Oracle problem",
    "back": "Input sensor/petugas/sistem luar dapat salah. Uji sumber, identitas, inspeksi, approval dan exception. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "id": "aks301-v3-tm13-03",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "category": "Konsep",
    "front": "Triple-entry",
    "back": "Shared signed receipt mendukung catatan pihak terkait; bukan sisi debit ketiga atau pengganti seluruh double-entry. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "id": "aks301-v3-tm13-04",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "category": "Konsep",
    "front": "RPA dan AI",
    "back": "RPA menjalankan aturan berulang; AI/ML memakai kemampuan/pola untuk tugas seperti klasifikasi. Keduanya butuh kontrol. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "id": "aks301-v3-tm13-05",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "category": "Konsep",
    "front": "Bot governance",
    "back": "Identitas terpisah, least privilege, vault, approval, pengujian perubahan, exception, log serta retry idempotent. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "id": "aks301-v3-tm13-06",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "category": "Konsep",
    "front": "Evaluasi AI",
    "back": "Nilai false positive/negative, precision/recall, mutu data, bias dan drift. Akurasi saja dapat menyesatkan untuk kejadian langka. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "id": "aks301-v3-tm14-01",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "category": "Konsep",
    "front": "Business case",
    "back": "Kebutuhan, alternatif, manfaat, biaya, risiko, value proposition dan ukuran sukses; mulai dari masalah bisnis. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "id": "aks301-v3-tm14-02",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "category": "Konsep",
    "front": "NPV dan payback",
    "back": "NPV mendiskontokan kas menurut waktu. Payback sederhana mengukur pemulihan investasi; nyatakan asumsi timing. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "id": "aks301-v3-tm14-03",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "category": "Konsep",
    "front": "Lima fase SDLC",
    "back": "Planning, analysis, design, implementation, maintenance. Perubahan besar dapat memulai siklus kembali. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "id": "aks301-v3-tm14-04",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "category": "Konsep",
    "front": "Triple constraint",
    "back": "Scope, time dan cost saling terkait; perubahan memerlukan analisis dampak, approval dan baseline baru. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "id": "aks301-v3-tm14-05",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "category": "Konsep",
    "front": "WBS dan 100% rule",
    "back": "Pecah seluruh lingkup, termasuk pekerjaan internal/eksternal/interim. Kelengkapan lingkup tidak berarti estimasi pasti. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "id": "aks301-v3-tm14-06",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "category": "Konsep",
    "front": "Critical path dan float",
    "back": "Jalur terlama menentukan minimum durasi menurut dependency dan sumber daya memadai. Float mengukur kelonggaran; jalur bisa berubah. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  }
];

export const SII306_FC = cards.sort((left, right) => left.tm - right.tm);

export const AKS301_FC = SII306_FC;
