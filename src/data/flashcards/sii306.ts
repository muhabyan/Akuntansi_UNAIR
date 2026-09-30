// src/data/flashcards/sii306.ts
// Flashcard Sistem Informasi Akuntansi (SII306): 9 kartu per TM Pra-UTS, 6 per TM Pra-UAS.
// Note: card IDs keep the aks301- prefix so existing SRS review states remain unbroken.
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
    "id": "aks301-v3-tm01-07", "phase": "pra-uts", "tm": 1,
    "topic": "Accounting Information Systems and Firm Value", "category": "Prosedur",
    "front": "Apa urutan information value chain dari data menuju keputusan?",
    "back": "Data → information → knowledge → decision. Pengetahuan memberi makna pada informasi untuk memilih tindakan."
  },
  {
    "id": "aks301-v3-tm01-08", "phase": "pra-uts", "tm": 1,
    "topic": "Accounting Information Systems and Firm Value", "category": "Pengendalian",
    "front": "Laporan penuh data mentah menutupi stok kritis. Teknik pelaporan apa membantu?",
    "back": "Exception reporting: tampilkan penyimpangan yang perlu tindakan, misalnya stok di bawah reorder point."
  },
  {
    "id": "aks301-v3-tm01-09", "phase": "pra-uts", "tm": 1,
    "topic": "Accounting Information Systems and Firm Value", "category": "Konsep",
    "front": "Kapan investasi informasi discretionary memberi nilai bersih positif?",
    "back": "Saat manfaat yang diharapkan melebihi biaya: value of information = benefit − cost > 0."
  },
  {
    "id": "aks301-v3-tm02-07", "phase": "pra-uts", "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data", "category": "Prosedur",
    "front": "Apa urutan ETL saat Master the Data?",
    "back": "Extract → Transform → Load: ambil data, bersihkan/seragamkan, lalu muat ke tempat analisis."
  },
  {
    "id": "aks301-v3-tm02-08", "phase": "pra-uts", "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data", "category": "Perbandingan",
    "front": "Banyak file berbeda format adalah Variety; kode pelanggan salah berulang adalah V apa?",
    "back": "Veracity, yaitu keandalan dan ketepatan data; masalahnya perlu dibersihkan sebelum analisis."
  },
  {
    "id": "aks301-v3-tm02-09", "phase": "pra-uts", "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data", "category": "Konsep",
    "front": "Apa arti Gray Zone pada Altman Z-score?",
    "back": "Sinyal risiko yang belum pasti: perlu telaah lanjutan, bukan vonis bangkrut atau aman."
  },
  {
    "id": "aks301-v3-tm03-07", "phase": "pra-uts", "tm": 3,
    "topic": "Accountants as Business Analysts", "category": "Perbandingan",
    "front": "Gateway apa yang dapat membuka satu atau beberapa cabang yang kondisinya benar?",
    "back": "Inclusive gateway (OR). XOR membuka tepat satu; AND membuka semua cabang."
  },
  {
    "id": "aks301-v3-tm03-08", "phase": "pra-uts", "tm": 3,
    "topic": "Accountants as Business Analysts", "category": "Konsep",
    "front": "Dalam BPMN, simbol apa menahan alur sampai tanggal tertentu?",
    "back": "Intermediate timer event; proses berlanjut setelah waktu yang ditentukan tiba."
  },
  {
    "id": "aks301-v3-tm03-09", "phase": "pra-uts", "tm": 3,
    "topic": "Accountants as Business Analysts", "category": "Pengendalian",
    "front": "Satu swimlane menyetujui PO sekaligus menyimpan barang. Konflik tugas apa terlihat?",
    "back": "Authorization dan custody digabung; pemegang barang tidak seharusnya menyetujui pembeliannya sendiri."
  },
  {
    "id": "aks301-v3-tm04-07", "phase": "pra-uts", "tm": 4,
    "topic": "Data Modeling", "category": "Mekanisme",
    "front": "Pada relasi Department 1:N Employee, di tabel mana Department_ID menjadi foreign key?",
    "back": "Di Employee, yaitu sisi banyak; setiap karyawan menunjuk departemen induknya."
  },
  {
    "id": "aks301-v3-tm04-08", "phase": "pra-uts", "tm": 4,
    "topic": "Data Modeling", "category": "Konsep",
    "front": "Customer–Orders bertanda 0..* di sisi Orders. Bolehkah customer belum punya order?",
    "back": "Boleh. Minimum 0 berarti customer dapat ada sebelum pesanan pertamanya."
  },
  {
    "id": "aks301-v3-tm04-09", "phase": "pra-uts", "tm": 4,
    "topic": "Data Modeling", "category": "Perbandingan",
    "front": "Invoice_Line tidak dapat ada tanpa Invoice. Composition atau aggregation?",
    "back": "Composition: bagian bergantung pada induk; di UML diamond hitam berada di sisi Invoice."
  },
  {
    "id": "aks301-v3-tm05-07", "phase": "pra-uts", "tm": 5,
    "topic": "Relational Databases and Enterprise Systems", "category": "Prosedur",
    "front": "Dalam SQL, klausa apa memilih tabel asal dan apa menyaring baris?",
    "back": "FROM memilih tabel asal; WHERE menyaring baris sebelum hasil ditampilkan atau diagregasi."
  },
  {
    "id": "aks301-v3-tm05-08", "phase": "pra-uts", "tm": 5,
    "topic": "Relational Databases and Enterprise Systems", "category": "Konsep",
    "front": "Saat goods receipt diposting sebelum invoice datang, untuk apa akun GR/IR?",
    "back": "Akun sementara penghubung penerimaan barang dan invoice pemasok yang kelak dicocokkan."
  },
  {
    "id": "aks301-v3-tm05-09", "phase": "pra-uts", "tm": 5,
    "topic": "Relational Databases and Enterprise Systems", "category": "Mekanisme",
    "front": "Receipt hanya menyimpan Invoice_Number. Bagaimana mengambil nama Customer pemilik invoice?",
    "back": "JOIN Receipt ke Invoice lewat Invoice_Number, lalu ke Customer lewat Customer_ID."
  },
  {
    "id": "aks301-v3-tm06-07", "phase": "pra-uts", "tm": 6,
    "topic": "Sales and Collections Business Process", "category": "Dokumen",
    "front": "Apa beda packing slip dan bill of lading saat barang dikirim?",
    "back": "Packing slip merinci isi kiriman; bill of lading membuktikan penyerahan barang kepada carrier."
  },
  {
    "id": "aks301-v3-tm06-08", "phase": "pra-uts", "tm": 6,
    "topic": "Sales and Collections Business Process", "category": "Dokumen",
    "front": "Pelanggan mengembalikan barang yang sudah ditagih. Dokumen apa mengurangi piutangnya?",
    "back": "Credit memo yang merujuk invoice asal, setelah retur disetujui."
  },
  {
    "id": "aks301-v3-tm06-09", "phase": "pra-uts", "tm": 6,
    "topic": "Sales and Collections Business Process", "category": "Mekanisme",
    "front": "Satu cash receipt melunasi dua invoice. Di mana Amount_Applied per invoice disimpan?",
    "back": "Di linking table antara receipt dan invoice/penjualan; setiap baris menyimpan alokasinya."
  },
  {
    "id": "aks301-v3-tm07-07", "phase": "pra-uts", "tm": 7,
    "topic": "Purchases and Payments Business Process", "category": "Dokumen",
    "front": "Barang dari vendor rusak dan nilai utang harus dikurangi. Dokumen apa diterbitkan pembeli?",
    "back": "Debit memo: pemberitahuan pengurangan jumlah yang terutang kepada vendor."
  },
  {
    "id": "aks301-v3-tm07-08", "phase": "pra-uts", "tm": 7,
    "topic": "Purchases and Payments Business Process", "category": "Pengendalian",
    "front": "Kontrol apa menangkap dua invoice bernomor sama dari vendor yang sama?",
    "back": "Cek keunikan Vendor_ID + Invoice_Number serta status pembayarannya sebelum invoice disetujui."
  },
  {
    "id": "aks301-v3-tm07-09", "phase": "pra-uts", "tm": 7,
    "topic": "Purchases and Payments Business Process", "category": "Konsep",
    "front": "Dalam REA pembelian, dari event apa saldo utang usaha diturunkan?",
    "back": "Pembelian/barang diterima yang menimbulkan tagihan, dikurangi pembayaran dan penyesuaian yang diterapkan."
  },
  {
    "id": "aks301-tm08-01",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pengendalian Internal COSO Framework",
    "category": "Definisi",
    "front": "Definisi Pengendalian Internal COSO",
    "back": "Proses yang dipengaruhi oleh dewan komisaris, manajemen, dan personel untuk memberikan keyakinan memadai atas pencapaian tujuan operasi, pelaporan, dan kepatuhan."
  },
  {
    "id": "aks301-tm08-02",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pengendalian Internal COSO Framework",
    "category": "Konsep",
    "front": "Tiga Kategori Tujuan Pengendalian COSO",
    "back": "(1) Operations Objectives (efektivitas operasional), (2) Reporting Objectives (keandalan laporan), dan (3) Compliance Objectives (kepatuhan hukum)."
  },
  {
    "id": "aks301-tm08-03",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pengendalian Internal COSO Framework",
    "category": "Konsep",
    "front": "Lima Komponen Pengendalian Internal COSO",
    "back": "(1) Control Environment, (2) Risk Assessment, (3) Control Activities, (4) Information & Communication, dan (5) Monitoring Activities."
  },
  {
    "id": "aks301-tm08-04",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pengendalian Internal COSO Framework",
    "category": "Klasifikasi",
    "front": "Tiga Tipe Pengendalian Berdasarkan Waktu",
    "back": "Preventif (mencegah kesalahan terjadi), Detektif (menemukan kesalahan yang lolos), dan Korektif (memperbaiki dampak kesalahan yang ditemukan)."
  },
  {
    "id": "aks301-tm08-05",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pengendalian Internal COSO Framework",
    "category": "Hukum",
    "front": "Sarbanes-Oxley Act (SOX) Section 404",
    "back": "Mewajibkan manajemen perusahaan publik menilai efektivitas pengendalian internal pelaporan keuangan (ICFR) dan diaudit auditor independen."
  },
  {
    "id": "aks301-tm08-06",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pengendalian Internal COSO Framework",
    "category": "Konsep",
    "front": "COSO Enterprise Risk Management (ERM)",
    "back": "Kerangka kerja perluasan COSO yang mengintegrasikan pengelolaan risiko ke dalam strategi korporasi dan penciptaan nilai pemegang saham."
  },
  {
    "id": "aks301-tm09-01",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Keamanan Informasi & Computer Fraud",
    "category": "Konsep",
    "front": "Triad Keamanan Informasi (CIA Triad)",
    "back": "Confidentiality (Kerahasiaan data dari pihak tak berhak), Integrity (Akurasi & keutuhan data), dan Availability (Ketersediaan sistem saat dibutuhkan)."
  },
  {
    "id": "aks301-tm09-02",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Keamanan Informasi & Computer Fraud",
    "category": "Konsep",
    "front": "Metode Phishing & Social Engineering",
    "back": "Upaya memanipulasi psikologis korban melalui email atau situs web tiruan palsu untuk mencuri kredensial login akun dan data rahasia."
  },
  {
    "id": "aks301-tm09-03",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Keamanan Informasi & Computer Fraud",
    "category": "Konsep",
    "front": "Ransomware & Malware",
    "back": "Perangkat lunak jahat yang mengenkripsi seluruh file dan basis data sistem perusahaan, lalu menuntut uang tebusan untuk kunci pembuka enkripsi."
  },
  {
    "id": "aks301-tm09-04",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Keamanan Informasi & Computer Fraud",
    "category": "Konsep",
    "front": "Enkripsi Simetris vs Asimetris",
    "back": "Simetris memakai satu kunci yang sama untuk enkripsi dan dekripsi (cepat). Asimetris memakai sepasang Public Key dan Private Key."
  },
  {
    "id": "aks301-tm09-05",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Keamanan Informasi & Computer Fraud",
    "category": "Konsep",
    "front": "Fungsi Tanda Tangan Digital (Digital Signature)",
    "back": "Menjamin keaslian pengirim (autentikasi), keutuhan isi dokumen (integritas), dan pencegahan penyangkalan transaksi (non-repudiation)."
  },
  {
    "id": "aks301-tm09-06",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Keamanan Informasi & Computer Fraud",
    "category": "Mekanisme",
    "front": "Pusat Pemulihan Bencana: Hot Site vs Cold Site",
    "back": "Hot Site adalah fasilitas komputasi duplikat lengkap yang siap beroperasi dalam hitungan menit. Cold Site hanya ruang gedung tanpa instalasi komputer lengkap."
  },
  {
    "id": "aks301-tm10-01",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Audit Sistem Informasi & Tata Kelola TI (COBIT)",
    "category": "Prosedur",
    "front": "Auditing AROUND the Computer",
    "back": "Mengabaikan pemrosesan komputer internal; auditor hanya mencocokkan dokumen input sumber dengan laporan output cetak (hanya cocok untuk sistem sederhana)."
  },
  {
    "id": "aks301-tm10-02",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Audit Sistem Informasi & Tata Kelola TI (COBIT)",
    "category": "Prosedur",
    "front": "Auditing THROUGH the Computer",
    "back": "Auditor menguji langsung logika pemrograman dan kontrol internal yang tertanam di dalam perangkat lunak komputer."
  },
  {
    "id": "aks301-tm10-03",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Audit Sistem Informasi & Tata Kelola TI (COBIT)",
    "category": "Prosedur",
    "front": "Test Data Approach (Pendekatan Data Uji)",
    "back": "Auditor memasukkan data transaksi buatan (valid dan tidak valid) ke dalam program klien untuk memverifikasi apakah kontrol sistem menolak data salah."
  },
  {
    "id": "aks301-tm10-04",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Audit Sistem Informasi & Tata Kelola TI (COBIT)",
    "category": "Prosedur",
    "front": "Parallel Simulation (Simulasi Paralel)",
    "back": "Auditor menulis kode simulasi independen yang menjalankan data transaksi riil klien, lalu membandingkan outputnya dengan hasil produksi sistem klien."
  },
  {
    "id": "aks301-tm10-05",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Audit Sistem Informasi & Tata Kelola TI (COBIT)",
    "category": "Standar",
    "front": "Kerangka Kerja Tata Kelola TI: COBIT 2019",
    "back": "Control Objectives for Information and Related Technologies (ISACA) yang menyelaraskan tata kelola TI dengan tujuan strategis bisnis korporasi."
  },
  {
    "id": "aks301-tm10-06",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Audit Sistem Informasi & Tata Kelola TI (COBIT)",
    "category": "Klasifikasi",
    "front": "Pemisahan Tugas Khusus Departemen TI",
    "back": "Analis Sistem (merancang sistem) harus terpisah dari Programmer (menulis kode) dan terpisah dari Operator Komputer (menjalankan live system)."
  },
  {
    "id": "aks301-tm11-01",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Analitika Data Akuntansi (Data Analytics) & Big Data",
    "category": "Konsep",
    "front": "Karakteristik Big Data (5V)",
    "back": "Volume (besaran ukuran data), Velocity (kecepatan data tercipta), Variety (ragam format), Veracity (keandalan data), dan Value (nilai bisnis)."
  },
  {
    "id": "aks301-tm11-02",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Analitika Data Akuntansi (Data Analytics) & Big Data",
    "category": "Konsep",
    "front": "Model Siklus Analitika IMPACT",
    "back": "Identify questions, Master the data, Perform test plan, Address and refine results, Communicate insights, Track outcomes."
  },
  {
    "id": "aks301-tm11-03",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Analitika Data Akuntansi (Data Analytics) & Big Data",
    "category": "Konsep",
    "front": "Analisis Deskriptif vs Diagnostik",
    "back": "Deskriptif menjawab: \"Apa yang telah terjadi?\" (summary rasio). Diagnostik menjawab: \"Mengapa hal itu bisa terjadi?\" (analisis varians mendalam)."
  },
  {
    "id": "aks301-tm11-04",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Analitika Data Akuntansi (Data Analytics) & Big Data",
    "category": "Konsep",
    "front": "Analisis Prediktif vs Preskriptif",
    "back": "Prediktif menjawab: \"Apa yang mungkin terjadi di masa depan?\" (regresi, tren). Preskriptif menjawab: \"Tindakan optimal apa yang harus diambil?\" (optimasi)."
  },
  {
    "id": "aks301-tm11-05",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Analitika Data Akuntansi (Data Analytics) & Big Data",
    "category": "Konsep",
    "front": "Audit Data Analytics (ADA) pada Buku Besar",
    "back": "Menguji seluruh populasi jurnal umum untuk menemukan anomali: jurnal manual di akhir pekan, user ID mencurigakan, atau pembulatan angka janggal."
  },
  {
    "id": "aks301-tm11-06",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Analitika Data Akuntansi (Data Analytics) & Big Data",
    "category": "Konsep",
    "front": "Visualisasi Data Akuntansi",
    "back": "Penyajian pola data interaktif melalui grafik, dashboard PowerBI/Tableau yang memudahkan identifikasi outlier bagi pengambil keputusan."
  },
  {
    "id": "aks301-tm12-01",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Robotic Process Automation (RPA) & AI dalam SIA",
    "category": "Mekanisme",
    "front": "Definisi Robotic Process Automation (RPA)",
    "back": "Aplikasi perangkat lunak bot yang meniru klik dan interaksi manusia untuk mengeksekusi tugas rutin berulang berbasis aturan (rule-based)."
  },
  {
    "id": "aks301-tm12-02",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Robotic Process Automation (RPA) & AI dalam SIA",
    "category": "Konsep",
    "front": "Kriteria Proses yang Ideal untuk RPA",
    "back": "Volume transaksi tinggi, berbasis aturan terstruktur, data input digital konsisten, dan tingkat pengecualian (exceptions) yang rendah."
  },
  {
    "id": "aks301-tm12-03",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Robotic Process Automation (RPA) & AI dalam SIA",
    "category": "Contoh",
    "front": "Penerapan RPA pada Rekonsiliasi Bank",
    "back": "Bot otomatis mengunduh rekening koran bank setiap pagi, mencocokkan mutasi kas dengan buku besar ERP, dan menandai selisih saldo."
  },
  {
    "id": "aks301-tm12-04",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Robotic Process Automation (RPA) & AI dalam SIA",
    "category": "Konsep",
    "front": "Optical Character Recognition (OCR) Cerdas",
    "back": "Mengonversi gambar pindaian faktur vendor fisik atau PDF menjadi data teks terstruktur yang otomatis terinput ke akun utang usaha."
  },
  {
    "id": "aks301-tm12-05",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Robotic Process Automation (RPA) & AI dalam SIA",
    "category": "Konsep",
    "front": "Machine Learning dalam Deteksi Anomali Jurnal",
    "back": "Algoritma pembelajaran mesin tanpa pengawasan (Unsupervised ML) yang otomatis menandai pola transaksi yang menyimpang dari perilaku historis normal."
  },
  {
    "id": "aks301-tm12-06",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Robotic Process Automation (RPA) & AI dalam SIA",
    "category": "Konsep",
    "front": "Tata Kelola & Pengendalian Bot (Bot Governance)",
    "back": "Memerlukan manajemen kredensial akses bot, pemantauan log aktivitas, dan pengujian kontrol saat ada pembaruan versi sistem ERP."
  },
  {
    "id": "aks301-tm13-01",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain, Smart Contracts & Cloud Accounting",
    "category": "Konsep",
    "front": "Karakteristik Buku Besar Terdistribusi (Blockchain)",
    "back": "Buku besar digital terdesentralisasi, transparan, terverifikasi kriptografi SHA-256, dan tidak dapat diubah (immutable)."
  },
  {
    "id": "aks301-tm13-02",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain, Smart Contracts & Cloud Accounting",
    "category": "Konsep",
    "front": "Triple-Entry Accounting",
    "back": "Setiap transaksi ekonomi diverifikasi dan dicatat pada shared public ledger terdistribusi, di samping pencatatan debit/kredit internal kedua pihak."
  },
  {
    "id": "aks301-tm13-03",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain, Smart Contracts & Cloud Accounting",
    "category": "Mekanisme",
    "front": "Smart Contracts (Kontrak Pintar)",
    "back": "Program komputer otomatis yang berjalan di atas blockchain yang mengeksekusi pembayaran secara otomatis saat syarat kondisi terpenuhi (If/Then logic)."
  },
  {
    "id": "aks301-tm13-04",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain, Smart Contracts & Cloud Accounting",
    "category": "Perbandingan",
    "front": "Public vs Private (Permissioned) Blockchain",
    "back": "Public (siapa saja boleh bergabung, misal: Bitcoin). Private/Consortium (hanya entitas yang diizinkan dan diverifikasi yang boleh mengakses jaringan)."
  },
  {
    "id": "aks301-tm13-05",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain, Smart Contracts & Cloud Accounting",
    "category": "Konsep",
    "front": "Manfaat Cloud Accounting (SaaS)",
    "back": "Akses laporan keuangan kapan saja di mana saja, skalabilitas kapasitas fleksibel, pencadangan data otomatis, dan biaya modal TI lebih rendah."
  },
  {
    "id": "aks301-tm13-06",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Blockchain, Smart Contracts & Cloud Accounting",
    "category": "Konsep",
    "front": "Risiko Pengendalian Cloud Computing",
    "back": "Ketergantungan pada vendor penyedia cloud (Service Organization), risiko privasi data, dan keharusan meninjau laporan audit SOC 1 / SOC 2 Type II."
  },
  {
    "id": "aks301-tm14-01",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Review Komprehensif UAS Sistem Informasi Akuntansi",
    "category": "Konsep",
    "front": "Fokus Utama Soal Ujian Akhir Semester (UAS) SIA",
    "back": "Kuasai pengendalian internal siklus O2C & P2P (Three-way match), Analisis Kelemahan Pengendalian COSO, Metode Audit CAATs, dan Konsep Big Data/RPA."
  },
  {
    "id": "aks301-tm14-02",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Review Komprehensif UAS Sistem Informasi Akuntansi",
    "category": "Konsep",
    "front": "Mendiagnosis Single Point of Failure (SPOF)",
    "back": "Mengidentifikasi kelemahan di mana kegagalan satu komponen kontrol atau staf tunggal dapat meruntuhkan seluruh keandalan sistem akuntansi."
  },
  {
    "id": "aks301-tm14-03",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Review Komprehensif UAS Sistem Informasi Akuntansi",
    "category": "Konsep",
    "front": "Analisis Celah Pemisahan Tugas (SoD Matrix)",
    "back": "Memastikan tidak ada staf yang memegang akses gabungan yang berbahaya: misalnya staf yang membuat master data vendor tidak boleh memproses pembayaran faktur."
  },
  {
    "id": "aks301-tm14-04",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Review Komprehensif UAS Sistem Informasi Akuntansi",
    "category": "Standar",
    "front": "Perlakuan Audit atas Bukti Elektronik",
    "back": "Bukti digital memerlukan pemeliharaan jejak audit (audit trail) dan verifikasi bahwa pengendalian umum TI (GITC) berfungsi efektif sepanjang tahun."
  },
  {
    "id": "aks301-tm14-05",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Review Komprehensif UAS Sistem Informasi Akuntansi",
    "category": "Konsep",
    "front": "Peran Laporan SOC 1 (SSAE 18 / ISAE 3402)",
    "back": "Laporan opini auditor independen atas pengendalian internal di organisasi penyedia jasa pihak ketiga (misal: vendor payroll, cloud provider)."
  },
  {
    "id": "aks301-tm14-06",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Review Komprehensif UAS Sistem Informasi Akuntansi",
    "category": "Konsep",
    "front": "Saran Sukses Ujian Akhir Semester SIA",
    "back": "Gunakan diagram alur atau bagan saat menjelaskan usulan perbaikan sistem; identifikasi risiko bisnis terlebih dahulu sebelum menawarkan aktivitas pengendalian."
  }
];

export const SII306_FC = cards.sort((left, right) => left.tm - right.tm);

export const AKS301_FC = SII306_FC;
