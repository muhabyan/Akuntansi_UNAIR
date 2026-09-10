// src/data/quizzes/aks301.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Sistem Informasi Akuntansi (AKS301)
// Berdasarkan Vernon J. Richardson et al. (4th ISE ed. 2023), Romney & Steinbart (15e),
// COSO Internal Control (2013), dan ISACA COBIT 2019 Framework.
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1-7) & 35 Soal Pra-UAS (TM 8-14)
import type { QuizQuestion } from '../../types';

export const AKS301_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "difficulty": "medium",
    "q": "Karakteristik kualitatif fundamental informasi akuntansi yang berguna menurut Conceptual Framework IFRS/FASB dan buku teks SIA adalah...",
    "options": [
      "Dapat dipahami dan tepat waktu",
      "Relevansi (Relevance) dan Penyajian Jujur (Faithful Representation)",
      "Keterbandingan dan dapat diverifikasi",
      "Ringkas dan bernilai moneter tinggi"
    ],
    "answer": 1,
    "explanation": "Dua kualitas fundamental informasi akuntansi adalah Relevansi (memiliki nilai prediktif dan/atau konfirmatif) serta Penyajian Jujur (lengkap, netral, dan bebas dari kesalahan material). Kualitas lainnya seperti keterbandingan dan tepat waktu adalah kualitas peningkat (enhancing qualities)."
  },
  {
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "difficulty": "medium",
    "q": "Dalam kerangka Rantai Nilai (Value Chain) Michael Porter, aktivitas utama (primary activity) yang berhubungan langsung dengan penerimaan, penyimpanan, dan penyaluran input bahan baku ke pabrik adalah...",
    "options": [
      "Operations (Operasi Pabrikasi)",
      "Inbound Logistics (Logistik Masuk)",
      "Outbound Logistics (Logistik Keluar)",
      "Procurement (Pengadaan)"
    ],
    "answer": 1,
    "explanation": "Inbound Logistics mencakup penanganan, penyimpanan, dan pengendalian persediaan bahan mentah dari pemasok. Sedangkan Procurement adalah aktivitas pendukung (support activity) yang mencakup proses pembelian aset dan jasa secara korporat."
  },
  {
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "difficulty": "advanced",
    "q": "Kondisi di mana pengguna menerima informasi melebihi kapasitas kognitif untuk memprosesnya, sehingga menurunkan kualitas keputusan bisnis disebut...",
    "options": [
      "Data Redundancy",
      "Information Overload",
      "System Latency",
      "Cognitive Bias"
    ],
    "answer": 1,
    "explanation": "Information Overload terjadi ketika volume data yang disajikan terlalu berlebihan sehingga pengambil keputusan kesulitan menyaring sinyal relevan dari derau (noise), mengakibatkan kelelahan mental dan kesalahan fatal dalam pengambilan keputusan."
  },
  {
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "difficulty": "medium",
    "q": "Manakah pernyataan yang paling tepat mengenai perbedaan antara data dan informasi dalam sistem akuntansi?",
    "options": [
      "Data selalu berbentuk angka, sedangkan informasi selalu berbentuk teks narasi",
      "Data adalah fakta mentah yang belum diolah, sedangkan informasi adalah data yang telah diorganisasikan sehingga memiliki makna dan nilai keputusan",
      "Data dihasilkan oleh komputer, sedangkan informasi dihasilkan secara manual oleh akuntan",
      "Data hanya disimpan di buku besar, sedangkan informasi hanya disimpan di laporan laba rugi"
    ],
    "answer": 1,
    "explanation": "Data adalah fakta mentah (seperti angka harga Rp 50.000 atau kode barang B-01). Ketika data tersebut diagregasikan, dianalisis, dan disajikan dalam konteks tertentu (misalnya laporan margin laba kotor per lini produk), data berubah menjadi informasi bernilai."
  },
  {
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "difficulty": "advanced",
    "q": "Nilai ekonomi suatu informasi akuntansi (Value of Information) secara teoritis dihitung sebagai...",
    "options": [
      "Biaya pengadaan software database dikurangi depresiasi tahunan",
      "Manfaat finansial dari keputusan yang lebih baik dikurangi biaya untuk memproduksi informasi tersebut",
      "Total harga jual sistem ERP ditambah penghematan pajak",
      "Selisih antara laba kotor dan laba bersih perusahaan"
    ],
    "answer": 1,
    "explanation": "Value of Information = Manfaat (Benefit) - Biaya (Cost). Informasi hanya layak diproduksi jika peningkatan kualitas keputusan bisnis menghasilkan nilai moneter yang melampaui biaya pengumpulan, pemrosesan, dan penyimpanan data tersebut."
  },
  {
    "tm": 2,
    "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
    "difficulty": "medium",
    "q": "Dalam diagram BPMN 2.0, simbol belah ketupat dengan tanda silang (X) di tengahnya merepresentasikan...",
    "options": [
      "Parallel Gateway (AND) di mana seluruh jalur dikerjakan serentak",
      "Exclusive Gateway (XOR) di mana hanya satu jalur percabangan yang dipilih berdasarkan evaluasi kondisi",
      "Inclusive Gateway (OR) di mana satu atau beberapa jalur dapat dipilih",
      "Start Timer Event"
    ],
    "answer": 1,
    "explanation": "Exclusive Gateway (XOR Gateway) berfungsi sebagai titik percabangan kondisional di mana hanya satu dari beberapa alternatif aliran proses yang akan dieksekusi (misal: Jika kredit disetujui, lanjut ke pengiriman; jika ditolak, proses berakhir)."
  },
  {
    "tm": 2,
    "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
    "difficulty": "advanced",
    "q": "Manakah aturan pemodelan BPMN 2.0 yang BENAR terkait penggunaan Pools dan Swimlanes?",
    "options": [
      "Sequence Flow (garis panah solid) boleh melintasi batas antara dua Pool yang berbeda",
      "Sequence Flow hanya boleh menghubungkan elemen di dalam Pool yang sama; komunikasi antar Pool harus menggunakan Message Flow (garis panah putus-putus)",
      "Satu Pool hanya boleh memiliki maksimal satu Swimlane",
      "Swimlane digunakan untuk memisahkan entitas legal independen, sedangkan Pool memisahkan departemen internal"
    ],
    "answer": 1,
    "explanation": "Aturan fundamental BPMN 2.0: Sequence Flow merepresentasikan urutan eksekusi internal dan TIDAK BOLEH menyeberangi batas Pool. Komunikasi antar-organisasi/Pool independen wajib direpresentasikan menggunakan Message Flow bergaris putus-putus."
  },
  {
    "tm": 2,
    "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
    "difficulty": "medium",
    "q": "Mengapa akuntan dan auditor sangat membutuhkan diagram BPMN dalam evaluasi kepatuhan Sarbanes-Oxley Act (SOX) Section 404?",
    "options": [
      "Karena BPMN menggantikan kewajiban pembuatan laporan keuangan tahunan",
      "Karena BPMN memvisualisasikan alur dokumen dan mempermudah identifikasi kelemahan pemisahan tugas (Segregation of Duties) serta titik kontrol",
      "Karena BPMN otomatis memprogram kode database SQL tanpa campur tangan programmer",
      "Karena BPMN menghapuskan kebutuhan uji substantif saldo akun"
    ],
    "answer": 1,
    "explanation": "SOX 404 mewajibkan audit atas pengendalian internal pelaporan keuangan (ICFR). Swimlanes dalam BPMN memperjelas departemen mana yang memegang otorisasi, pencatatan, dan kustodi fisik, sehingga celah perangkapan tugas mudah terdeteksi."
  },
  {
    "tm": 2,
    "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
    "difficulty": "medium",
    "q": "Simbol lingkaran dengan garis tepi ganda (double-line circle) dalam notasi standar BPMN menandakan...",
    "options": [
      "Start Event (awal mula proses)",
      "Intermediate Event (peristiwa penunda/antara, seperti menunggu waktu atau pesan)",
      "End Event (akhir dari proses bisnis)",
      "Data Store (basis data relasional)"
    ],
    "answer": 1,
    "explanation": "Lingkaran garis tunggal tipis adalah Start Event; lingkaran garis ganda adalah Intermediate Event (seperti timer delay atau sinyal pesan masuk); dan lingkaran garis tebal adalah End Event."
  },
  {
    "tm": 2,
    "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
    "difficulty": "advanced",
    "q": "Dalam evaluasi proses bisnis, seorang akuntan menemukan bahwa seorang staf gudang memiliki wewenang membuat pesanan pembelian (PO) sekaligus menandatangani tanda terima barang (LPB). Konsep apa yang dilanggar?",
    "options": [
      "Relevance of Accounting Data",
      "Segregation of Duties (Pemisahan Otorisasi Transaksi dan Kustodi Fisik Aset)",
      "Single-Entry Verification",
      "Normalization Level 3"
    ],
    "answer": 1,
    "explanation": "Prinsip pemisahan tugas (SoD) menegaskan bahwa fungsi Otorisasi (membeli barang), Kustodi (menyimpan barang di gudang), dan Pencatatan (akuntansi/pembukuan) harus dipegang oleh personil independen guna mencegah penggelapan dan manipulasi persediaan."
  },
  {
    "tm": 3,
    "topic": "Pemodelan Data & REA Framework",
    "difficulty": "medium",
    "q": "Tiga entitas fundamental dalam pemodelan data akuntansi semantik REA Framework adalah...",
    "options": [
      "Revenue, Expense, Assets",
      "Resources, Events, Agents",
      "Receivables, Equity, Accounts",
      "Requisition, Execution, Authorization"
    ],
    "answer": 1,
    "explanation": "Kerangka kerja REA yang dikembangkan oleh Prof. William McCarthy terdiri dari Resources (sumber daya ekonomi yang dikendalikan), Events (kejadian atau transaksi pertukaran ekonomi), dan Agents (individu/entitas internal & eksternal yang berpartisipasi)."
  },
  {
    "tm": 3,
    "topic": "Pemodelan Data & REA Framework",
    "difficulty": "advanced",
    "q": "Konsep 'Dualitas Ekonomi' (Economic Duality) dalam REA Framework mencerminkan prinsip bahwa...",
    "options": [
      "Setiap debit harus menghasilkan kredit dalam nominal yang seimbang",
      "Setiap peristiwa pelepasan sumber daya (Give Event) harus memiliki kaitan pertukaran dengan peristiwa perolehan sumber daya (Get Event)",
      "Satu agen internal harus selalu diawasi oleh dua agen eksternal",
      "Setiap aset lancar harus didanai oleh liabilitas jangka pendek"
    ],
    "answer": 1,
    "explanation": "Dualitas Ekonomi adalah representasi semantik pertukaran bisnis: perusahaan menyerahkan sesuatu (Give Event, misal menyerahkan barang) untuk mendapatkan sesuatu yang lain (Get Event, misal menerima pembayaran kas)."
  },
  {
    "tm": 3,
    "topic": "Pemodelan Data & REA Framework",
    "difficulty": "medium",
    "q": "Manakah di bawah ini yang merupakan contoh dari entitas RESOURCE dalam siklus pengeluaran?",
    "options": [
      "Penerimaan Barang (Receive Goods)",
      "Pemasok / Vendor",
      "Persediaan Bahan Baku (Raw Materials Inventory)",
      "Manajer Pembelian"
    ],
    "answer": 2,
    "explanation": "Persediaan Bahan Baku dan Kas adalah Resources (sumber daya). Penerimaan Barang adalah Event. Pemasok dan Manajer Pembelian adalah Agents."
  },
  {
    "tm": 3,
    "topic": "Pemodelan Data & REA Framework",
    "difficulty": "advanced",
    "q": "Dalam diagram REA siklus penjualan, jika relasi antara Event 'Penjualan' (Sales) dan Resource 'Persediaan' (Inventory) memiliki kardinalitas Many-to-Many (M:N), bagaimana struktur tabel database relasional yang terbentuk?",
    "options": [
      "Primary key tabel Penjualan langsung disalin ke tabel Persediaan",
      "Wajib dibentuk Tabel Asosiasi/Jembatan (Junction Table, misal 'Sales_Order_Line') yang memiliki kunci komposit (No_Faktur + Kode_Barang)",
      "Persediaan tidak perlu disimpan dalam database",
      "Tabel Penjualan dan Persediaan digabungkan menjadi satu tabel tunggal tanpa normalisasi"
    ],
    "answer": 1,
    "explanation": "Hubungan Many-to-Many (M:N) dalam database relasional tidak dapat dihubungkan langsung dengan foreign key tunggal. Solusinya adalah membuat junction table (seperti tabel 'Detail_Penjualan') yang berisi Primary Key gabungan (composite key) dari kedua tabel induk."
  },
  {
    "tm": 3,
    "topic": "Pemodelan Data & REA Framework",
    "difficulty": "medium",
    "q": "Siapakah yang diklasifikasikan sebagai Internal Agent dan External Agent dalam transaksi penerimaan kas dari piutang pelanggan?",
    "options": [
      "Kasir (Internal Agent) dan Pelanggan (External Agent)",
      "Bank (Internal Agent) dan Kasir (External Agent)",
      "Manajer Penjualan (External Agent) dan Manajer Kredit (Internal Agent)",
      "Direktur Keuangan (Internal Agent) dan Auditor Eksternal (Internal Agent)"
    ],
    "answer": 0,
    "explanation": "Internal Agent adalah personil dalam perusahaan yang bertanggung jawab melaksanakan atau mengotorisasi transaksi (Kasir). External Agent adalah pihak ketiga di luar organisasi yang bertransaksi dengan perusahaan (Pelanggan)."
  },
  {
    "tm": 4,
    "topic": "RDBMS, Normalisasi & ERP",
    "difficulty": "medium",
    "q": "Suatu tabel database akuntansi dikatakan telah memenuhi Bentuk Normal Pertama (1NF) apabila...",
    "options": [
      "Semua atribut non-kunci bergantung secara transitif pada primary key",
      "Tidak ada atribut yang memiliki kelompok berulang (repeating groups) dan setiap sel berisi nilai atomik tunggal",
      "Tabel tersebut memiliki minimal lima kolom kunci asing (foreign key)",
      "Tabel telah terhubung langsung ke modul SAP S/4HANA"
    ],
    "answer": 1,
    "explanation": "Syarat 1NF: setiap perpotongan baris dan kolom hanya boleh berisi satu nilai skalar tunggal (atomic value), tidak ada array atau repeating groups, dan setiap baris memiliki identitas unik (Primary Key)."
  },
  {
    "tm": 4,
    "topic": "RDBMS, Normalisasi & ERP",
    "difficulty": "advanced",
    "q": "Ketergantungan di mana suatu atribut non-kunci hanya bergantung pada SEBAGIAN dari composite primary key (bukan seluruhnya) disebut...",
    "options": [
      "Transitive Dependency",
      "Partial Dependency (Ketergantungan Parsial)",
      "Referential Dependency",
      "Atomic Dependency"
    ],
    "answer": 1,
    "explanation": "Partial Dependency terjadi jika primary key terdiri dari gabungan dua kolom (misal: No_Faktur + Kode_Barang), namun nama barang hanya bergantung pada Kode_Barang. Menghilangkan ketergantungan parsial adalah syarat untuk mencapai 2NF."
  },
  {
    "tm": 4,
    "topic": "RDBMS, Normalisasi & ERP",
    "difficulty": "advanced",
    "q": "Sebuah tabel transaksi berisi atribut: [No_Faktur (PK), Tgl_Faktur, Kode_Pelanggan, Nama_Pelanggan, Alamat_Pelanggan]. Mengapa tabel ini melanggar Bentuk Normal Ketiga (3NF)?",
    "options": [
      "Karena tidak memiliki primary key",
      "Karena terdapat Ketergantungan Transitif: Nama_Pelanggan dan Alamat bergantung pada Kode_Pelanggan, bukan langsung pada No_Faktur",
      "Karena tanggal faktur tidak boleh dicatat dalam database relasional",
      "Karena tabel tersebut belum diubah menjadi tabel blockchain"
    ],
    "answer": 1,
    "explanation": "Transitive dependency terjadi ketika atribut non-key (Nama_Pelanggan) bergantung pada atribut non-key lain (Kode_Pelanggan). Untuk mencapai 3NF, data pelanggan harus dipisah ke tabel 'Pelanggan' tersendiri."
  },
  {
    "tm": 4,
    "topic": "RDBMS, Normalisasi & ERP",
    "difficulty": "medium",
    "q": "Aturan Integritas Referensial (Referential Integrity Constraint) dalam sistem manajemen basis data relasional menegaskan bahwa...",
    "options": [
      "Setiap tabel harus memiliki minimal 1000 baris data",
      "Nilai suatu Foreign Key pada tabel anak harus cocok dengan nilai Primary Key yang valid pada tabel induk, atau bernilai null",
      "Semua akun akuntansi harus memiliki saldo debit",
      "Data hanya boleh diakses melalui perintah SQL DELETE"
    ],
    "answer": 1,
    "explanation": "Referential Integrity mencegah terjadinya 'orphaned records' (misal: ada faktur penjualan dengan Kode_Pelanggan 'C999' padahal pelanggan tersebut tidak terdaftar di master tabel Pelanggan)."
  },
  {
    "tm": 4,
    "topic": "RDBMS, Normalisasi & ERP",
    "difficulty": "medium",
    "q": "Karakteristik arsitektur utama dari Enterprise Resource Planning (ERP) modern seperti SAP S/4HANA atau Oracle NetSuite adalah...",
    "options": [
      "Setiap departemen memiliki database terpisah yang tidak saling terhubung",
      "Basis data tunggal terpusat (Centralized Shared Database) yang mengintegrasikan transaksi seluruh departemen secara real-time",
      "Penghapusan seluruh jejak audit transaksi (audit trail) untuk menghemat memori",
      "Operasional sistem hanya menggunakan pemrosesan batch manual di akhir tahun"
    ],
    "answer": 1,
    "explanation": "Keunggulan utama ERP adalah integrasi data terpusat: ketika pesanan penjualan diinput, data persediaan gudang langsung berkurang, jadwal produksi diperbarui, dan jurnal akuntansi terposting secara real-time tanpa redundansi data."
  },
  {
    "tm": 5,
    "topic": "Siklus Pendapatan (O2C)",
    "difficulty": "medium",
    "q": "Dalam siklus penjualan kredit, dokumen internal yang diterbitkan oleh departemen penjualan untuk memberi wewenang kepada bagian gudang mengambil barang dari rak penyimpanan adalah...",
    "options": [
      "Purchase Requisition",
      "Picking Ticket (Stock Release Form)",
      "Bill of Lading",
      "Remittance Advice"
    ],
    "answer": 1,
    "explanation": "Picking Ticket dicetak oleh bagian gudang segera setelah pesanan penjualan diotorisasi kreditnya. Dokumen ini mencantumkan lokasi lorong rak, kode barang, dan kuantitas barang yang harus diambil."
  },
  {
    "tm": 5,
    "topic": "Siklus Pendapatan (O2C)",
    "difficulty": "advanced",
    "q": "Praktik kecurangan di mana kasir mencuri pembayaran dari Pelanggan A, kemudian menutupinya dengan pembayaran berikutnya dari Pelanggan B, dan pembayaran Pelanggan C untuk menutup Pelanggan B disebut...",
    "options": [
      "Kiting Fraud",
      "Lapping Fraud",
      "Round-Tripping",
      "Phishing"
    ],
    "answer": 1,
    "explanation": "Lapping adalah skema penipuan piutang klasik yang terjadi jika personil yang memegang fisik penerimaan kas juga memiliki wewenang mengedit buku besar pembantu piutang (Accounts Receivable Ledger)."
  },
  {
    "tm": 5,
    "topic": "Siklus Pendapatan (O2C)",
    "difficulty": "medium",
    "q": "Pengendalian preventif manakah yang paling efektif untuk mengeliminasi risiko terjadinya kecurangan Lapping pada penerimaan kas piutang?",
    "options": [
      "Menambah bonus penjualan kepada manajer marketing",
      "Menerapkan sistem Lockbox Bank atau pembayaran Virtual Account / Electronic Funds Transfer (EFT)",
      "Mengganti faktur kertas dengan faktur manual bermaterai",
      "Menghapus limit kredit bagi seluruh pelanggan lama"
    ],
    "answer": 1,
    "explanation": "Dengan sistem Lockbox atau Virtual Account, kas dari pelanggan disetor langsung ke rekening bank perusahaan tanpa pernah disentuh fisik kasnya oleh staf penagihan atau akuntansi, sehingga memotong peluang terjadinya lapping."
  },
  {
    "tm": 5,
    "topic": "Siklus Pendapatan (O2C)",
    "difficulty": "medium",
    "q": "Dokumen resmi yang berfungsi sebagai kontrak hukum pengangkutan barang antara pengirim (perusahaan) dan pihak ekspedisi kargo/kurir disebut...",
    "options": [
      "Faktur Pajak Standar",
      "Bill of Lading (Surat Muatan Kapal/Kurir)",
      "Surat Permintaan Penawaran Harga",
      "Memo Kredit"
    ],
    "answer": 1,
    "explanation": "Bill of Lading adalah dokumen legal formal yang mendokumentasikan serah terima barang dari penjual ke pihak kurir/freight carrier, menetapkan tanggung jawab hukum atas barang selama transit (FOB Shipping Point vs Destination)."
  },
  {
    "tm": 5,
    "topic": "Siklus Pendapatan (O2C)",
    "difficulty": "advanced",
    "q": "Untuk mencegah pengiriman barang fiktif atau pencatatan penjualan prematur pada akhir periode (Cut-Off Violation), kontrol aplikasi SIA manakah yang harus diaktifkan?",
    "options": [
      "Faktur penagihan hanya boleh diterbitkan oleh sistem jika nomor Surat Jalan (Bill of Lading) yang telah ditandatangani kurir telah diinput ke sistem ERP",
      "Memberikan akses tak terbatas bagi staf penjualan untuk mengubah status pesanan",
      "Mengabaikan nomor urut faktur penjualan",
      "Menghilangkan fungsi pemeriksaan saldo batas kredit pelanggan"
    ],
    "answer": 0,
    "explanation": "Prinsip kecocokan penagihan: faktur penjualan hanya boleh dicatat dan diterbitkan bila ada bukti objektif bahwa barang telah benar-benar dikirimkan dan diserahkan ke pihak ekspedisi (Shipping Document Matching Control)."
  },
  {
    "tm": 6,
    "topic": "Siklus Pengeluaran (P2P)",
    "difficulty": "advanced",
    "q": "Mengapa salinan pesanan pembelian (PO) yang dikirim ke departemen penerimaan barang (Receiving Department) harus berupa 'Blind Copy' (kuantitas dikosongkan)?",
    "options": [
      "Untuk merahasiakan harga barang dari para pemasok",
      "Untuk memaksa staf penerimaan menghitung dan memeriksa kondisi fisik barang secara nyata tanpa menebak-nebak",
      "Agar barang tidak perlu dicatat dalam database",
      "Untuk menghindari pemotongan pajak penghasilan pasal 22"
    ],
    "answer": 1,
    "explanation": "Blind Copy PO adalah kontrol klasik: kolom kuantitas sengaja dikosongkan agar petugas penerimaan tidak sekadar mencentang form, melainkan wajib membongkar kotak dan menghitung unit fisik riil yang diterima."
  },
  {
    "tm": 6,
    "topic": "Siklus Pengeluaran (P2P)",
    "difficulty": "medium",
    "q": "Tiga dokumen yang wajib diverifikasi dalam prosedur Three-Way Matching sebelum tagihan utang usaha dibayar adalah...",
    "options": [
      "Purchase Requisition, Slip Setoran Bank, dan Kartu Kredit",
      "Purchase Order (PO), Receiving Report (LPB), dan Vendor Invoice (Faktur Tagihan Pemasok)",
      "Faktur Pajak, Slip Gaji, dan Laporan Laba Rugi",
      "Bill of Materials, Work Order, dan Bukti Kas Masuk"
    ],
    "answer": 1,
    "explanation": "Three-Way Match memverifikasi: (1) PO membuktikan pembelian diotorisasi dan harganya disepakati; (2) Receiving Report membuktikan barang telah diterima secara fisik; (3) Vendor Invoice membuktikan tagihan dihitung secara benar."
  },
  {
    "tm": 6,
    "topic": "Siklus Pengeluaran (P2P)",
    "difficulty": "advanced",
    "q": "Tindakan mencap atau memberi tanda 'PAID / LUNAS' beserta nomor cek/referensi transfer pada paket voucher faktur saat pembayaran bertujuan untuk...",
    "options": [
      "Memenuhi kewajiban perpajakan UU PPN",
      "Mencegah terjadinya pembayaran ganda (duplicate payment) atas faktur yang sama secara sengaja maupun tidak sengaja",
      "Menghapus kewajiban pencatatan di buku besar pembantu utang",
      "Menutup rekening bank operasional"
    ],
    "answer": 1,
    "explanation": "Pembatalan voucher dokumen (defacing invoice dengan cap PAID) merupakan kontrol krusial agar staf akuntansi nakal tidak dapat menggunakan kembali faktur yang sama untuk mencairkan cek kedua kalinya."
  },
  {
    "tm": 6,
    "topic": "Siklus Pengeluaran (P2P)",
    "difficulty": "medium",
    "q": "Metode pembayaran utang pemasok tanpa faktur tagihan fisik, di mana pembayaran otomatis dipicu oleh kecocokan antara PO dan laporan penerimaan barang disebut...",
    "options": [
      "Cash on Delivery (COD)",
      "Evaluated Receipt Settlement (ERS)",
      "Petty Cash Imprest",
      "Letter of Credit (L/C)"
    ],
    "answer": 1,
    "explanation": "ERS (dikembangkan pertama kali oleh Ford) adalah sistem 'invoiceless': begitu bagian penerimaan memindai barcode barang yang tiba dan cocok dengan PO, sistem ERP langsung mengotorisasi pembayaran sesuai harga kontrak tanpa menunggu faktur kertas vendor."
  },
  {
    "tm": 6,
    "topic": "Siklus Pengeluaran (P2P)",
    "difficulty": "advanced",
    "q": "Pemeriksaan berkala atas master file vendor untuk mendeteksi kesamaan nomor rekening, alamat kantor, atau nomor telepon vendor dengan data pribadi karyawan bertujuan untuk mencegah kecurangan...",
    "options": [
      "Lapping Fraud",
      "Shell Company / Fictitious Vendor Fraud (Perusahaan Fiktif Rekayasa Karyawan)",
      "Kiting Kas Antar-Bank",
      "Under-Billing Piutang"
    ],
    "answer": 1,
    "explanation": "Karyawan korup sering kali mendaftarkan 'perusahaan boneka' (shell company) ke sistem ERP, membuat PO fiktif, menyetujui LPB fiktif, dan mengalihkan dana transfer perusahaan ke rekening pribadinya."
  },
  {
    "tm": 7,
    "topic": "Siklus Konversi & Review UTS",
    "difficulty": "medium",
    "q": "Dokumen rekayasa manufaktur yang memuat spesifikasi terperinci mengenai jenis, nomor komponen, dan kuantitas bahan baku yang dibutuhkan untuk membuat satu unit produk jadi disebut...",
    "options": [
      "Routing Sheet",
      "Bill of Materials (BOM)",
      "Master Production Schedule (MPS)",
      "Materials Requisition Form"
    ],
    "answer": 1,
    "explanation": "Bill of Materials (BOM) adalah 'resep baku' manufaktur yang merinci komponen sub-rakitan dan bahan baku pembentuk satu unit produk jadi dalam sistem perencanaan kebutuhan bahan (MRP)."
  },
  {
    "tm": 7,
    "topic": "Siklus Konversi & Review UTS",
    "difficulty": "medium",
    "q": "Dokumen otorisasi resmi yang memerintahkan bagian lantai pabrik untuk memproduksi sejumlah produk dalam spesifikasi dan jangka waktu tertentu disebut...",
    "options": [
      "Surat Jalan Pengiriman",
      "Work Order (Surat Perintah Kerja)",
      "Purchase Order",
      "Voucher Pembayaran"
    ],
    "answer": 1,
    "explanation": "Work Order (SPK) diterbitkan oleh bagian Pengendalian Produksi (Production Planning & Control / PPIC) sebagai otorisasi resmi lantai pabrik untuk menarik bahan dari gudang dan menjadwalkan jam kerja mesin."
  },
  {
    "tm": 7,
    "topic": "Siklus Konversi & Review UTS",
    "difficulty": "advanced",
    "q": "Dalam integrasi akuntansi biaya siklus konversi, pemindahan fisik bahan baku dari gudang ke area produksi wajib dicatat dengan mendebit akun...",
    "options": [
      "Beban Pokok Penjualan (COGS)",
      "Persediaan Barang Dalam Proses (Work-in-Process / WIP Inventory)",
      "Persediaan Produk Jadi (Finished Goods Inventory)",
      "Kas dan Setara Kas"
    ],
    "answer": 1,
    "explanation": "Jurnal akuntansi: Debit Persediaan Barang Dalam Proses (WIP) dan Kredit Persediaan Bahan Baku (Raw Materials Inventory). Ini mencerminkan transformasi nilai sumber daya dalam sistem akuntansi."
  },
  {
    "tm": 7,
    "topic": "Siklus Konversi & Review UTS",
    "difficulty": "advanced",
    "q": "Manakah pernyataan yang paling tepat merangkum keterkaitan terintegrasi antara siklus pengeluaran, konversi, dan pendapatan dalam SIA perusahaan manufaktur?",
    "options": [
      "Siklus pendapatan membeli bahan, siklus konversi menjual ke pelanggan, siklus pengeluaran membuat produk",
      "Siklus pengeluaran memperoleh input bahan/TKL, siklus konversi mentransformasikan bahan menjadi produk jadi, dan siklus pendapatan menjual barang jadi untuk menghasilkan arus kas",
      "Ketiga siklus berjalan secara terisolasi tanpa berbagi database relasional",
      "Siklus konversi hanya berfungsi memproses penggajian direksi"
    ],
    "answer": 1,
    "explanation": "Ini adalah rantai nilai ekonomi terpadu manufaktur: Procure-to-Pay (beli input) -> Conversion Cycle (olah jadi output bernilai) -> Order-to-Cash (jual dan tagih kas untuk mendanai siklus pengeluaran berikutnya)."
  },
  {
    "tm": 7,
    "topic": "Siklus Konversi & Review UTS",
    "difficulty": "medium",
    "q": "Dalam simulasi ujian komprehensif UTS SIA, jika auditor menemukan bahwa persediaan fisik di gudang lebih rendah Rp 200 juta dibanding catatan di modul persediaan ERP, prosedur audit manakah yang pertama kali harus diuji?",
    "options": [
      "Mengganti seluruh tim manajemen puncak",
      "Menguji rekonsiliasi stock opname fisik gudang dan memeriksa catatan pengeluaran barang tanpa Surat Perintah Kerja (Move Ticket) yang sah",
      "Menghapus saldo akun persediaan dari neraca",
      "Menolak memberikan opini atas seluruh laporan keuangan"
    ],
    "answer": 1,
    "explanation": "Selisih fisik persediaan (inventory shrinkage) mengindikasikan pencurian, pencatatan scrap yang tidak dilaporkan, atau barang keluar tanpa otorisasi. Auditor harus melacak jejak audit pergerakan mutasi fisik barang dan dokumen otorisasi."
  }
];

export const AKS301_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Pengendalian Internal COSO",
    "difficulty": "medium",
    "q": "Komponen pengendalian internal COSO yang dianggap sebagai fondasi utama bagi seluruh komponen pengendalian lainnya karena menentukan 'Tone at the Top' organisasi adalah...",
    "options": [
      "Risk Assessment",
      "Control Environment (Lingkungan Pengendalian)",
      "Monitoring Activities",
      "Information and Communication"
    ],
    "answer": 1,
    "explanation": "Control Environment adalah fondasi piramida COSO. Komponen ini mencakup integritas, nilai etika dewan direksi/komisaris, filosofi manajemen, struktur organisasi, dan komitmen terhadap kompetensi SDM."
  },
  {
    "tm": 8,
    "topic": "Pengendalian Internal COSO",
    "difficulty": "advanced",
    "q": "Berdasarkan kerangka COSO 2013, berapakah jumlah prinsip pendukung (principles) yang wajib diterapkan di seluruh 5 komponen pengendalian agar sistem pengendalian internal dinilai efektif?",
    "options": [
      "10 Prinsip",
      "17 Prinsip",
      "25 Prinsip",
      "5 Prinsip"
    ],
    "answer": 1,
    "explanation": "COSO 2013 menetapkan 17 prinsip eksplisit yang terbagi ke dalam 5 komponen: Lingkungan Pengendalian (5 prinsip), Penilaian Risiko (4 prinsip), Aktivitas Pengendalian (3 prinsip), Informasi & Komunikasi (3 prinsip), dan Pemantauan (2 prinsip)."
  },
  {
    "tm": 8,
    "topic": "Pengendalian Internal COSO",
    "difficulty": "medium",
    "q": "Pemasangan kamera CCTV di gudang dan rekonsiliasi bulanan antara saldo fisik kas dengan catatan pembukuan diklasifikasikan sebagai jenis pengendalian...",
    "options": [
      "Pengendalian Preventif",
      "Pengendalian Detektif",
      "Pengendalian Korektif",
      "Pengendalian Kompensasi"
    ],
    "answer": 1,
    "explanation": "Pengendalian Detektif berfungsi untuk menemukan dan mengidentifikasi kesalahan, anomali, atau kecurangan setelah peristiwa tersebut terjadi (misal: rekonsiliasi bank, review varians biaya, stock opname)."
  },
  {
    "tm": 8,
    "topic": "Pengendalian Internal COSO",
    "difficulty": "advanced",
    "q": "Dalam Fraud Triangle, tiga kondisi yang hampir selalu hadir saat kecurangan akuntansi terjadi adalah...",
    "options": [
      "Kolusi, Teknologi Usang, dan Kelalaian Pajak",
      "Tekanan/Insentif (Pressure), Peluang (Opportunity), dan Rasionalisasi (Rationalization)",
      "Inflasi, Suku Bunga Tinggi, dan Likuiditas Rendah",
      "Sistem Terbuka, Password Lemah, dan Jaringan Nirkabel"
    ],
    "answer": 1,
    "explanation": "Teori Fraud Triangle Donald Cressey: (1) Pressure (tekanan finansial/target), (2) Opportunity (peluang akibat lemahnya internal control), dan (3) Rationalization (pembenaran moral pelaku bahwa tindakannya sah)."
  },
  {
    "tm": 8,
    "topic": "Pengendalian Internal COSO",
    "difficulty": "medium",
    "q": "Manakah di bawah ini yang merupakan contoh dari Pengendalian Korektif (Corrective Control)?",
    "options": [
      "Pemisahan tugas antara kasir dan pencatat piutang",
      "Pembuatan password akun dengan otentikasi dua faktor (2FA)",
      "Pemulihan file database akuntansi dari cadangan data (backup restore) setelah sistem terinfeksi malware",
      "Pemeriksaan nomor urut faktur penjualan"
    ],
    "answer": 2,
    "explanation": "Corrective Control bertujuan memperbaiki masalah dan mengembalikan sistem ke kondisi normal setelah insiden terjadi, seperti me-restore data backup, mendiskualifikasi vendor curang, atau merevisi jurnal koreksi."
  },
  {
    "tm": 9,
    "topic": "Keamanan Siber & Kriptografi",
    "difficulty": "medium",
    "q": "Tiga pilar utama keamanan sistem informasi akuntansi yang dikenal sebagai CIA Triad adalah...",
    "options": [
      "Control, Inspection, Audit",
      "Confidentiality, Integrity, Availability",
      "Compliance, Integration, Accuracy",
      "Cost, Investment, Accounting"
    ],
    "answer": 1,
    "explanation": "CIA Triad: Confidentiality (data hanya bisa dibaca oleh pihak berwenang), Integrity (data terlindung dari manipulasi ilegal), dan Availability (sistem dan data siap diakses saat dibutuhkan operasional bisnis)."
  },
  {
    "tm": 9,
    "topic": "Keamanan Siber & Kriptografi",
    "difficulty": "advanced",
    "q": "Dalam sistem Kriptografi Asimetris (Public-Key Cryptography), jika Perusahaan A ingin mengirimkan dokumen keuangan rahasia ke Auditor B sehingga HANYA Auditor B yang bisa membacanya, maka dokumen tersebut harus dienkripsi menggunakan...",
    "options": [
      "Private Key milik Perusahaan A",
      "Public Key milik Auditor B",
      "Private Key milik Auditor B",
      "Public Key milik Perusahaan A"
    ],
    "answer": 1,
    "explanation": "Untuk kerahasiaan (encryption): Pengirim mengenkripsi pesan menggunakan Public Key Penerima (Auditor B). Pesan tersebut secara matematis hanya dapat didekripsi menggunakan Private Key rahasia milik Auditor B."
  },
  {
    "tm": 9,
    "topic": "Keamanan Siber & Kriptografi",
    "difficulty": "advanced",
    "q": "Fungsi utama dari Tanda Tangan Digital (Digital Signature) yang dibuat dengan mengenkripsi hash dokumen menggunakan Private Key pengirim adalah menjamin...",
    "options": [
      "Kecepatan transmisi jaringan internet 5G",
      "Otentikasi pengirim, keutuhan data (data integrity), dan ketiadaan sangkalan (non-repudiation)",
      "Ukuran file dokumen menjadi lebih kecil 90%",
      "Penghapusan kewajiban pelaporan pajak SPT tahunan"
    ],
    "answer": 1,
    "explanation": "Digital Signature membuktikan secara kriptografis bahwa dokumen benar-benar berasal dari pemilik private key (otentikasi), isi dokumen tidak diubah satu bit pun saat transit (integritas), dan pengirim tidak dapat menyangkal telah menandatanganinya (non-repudiation)."
  },
  {
    "tm": 9,
    "topic": "Keamanan Siber & Kriptografi",
    "difficulty": "medium",
    "q": "Dalam perencanaan kelangsungan usaha dan pemulihan bencana (BCP/DRP), metrik RPO (Recovery Point Objective) mengukur...",
    "options": [
      "Jumlah waktu maksimal sistem boleh offline sebelum perusahaan bangkrut",
      "Batas maksimal toleransi kehilangan data transaksi (misal: data 2 jam terakhir sebelum server down)",
      "Biaya pembelian genset cadangan listrik",
      "Gaji konsultan keamanan siber per jam"
    ],
    "answer": 1,
    "explanation": "RPO (Recovery Point Objective) mengukur toleransi kehilangan data dalam satuan waktu (misal: backup tiap jam berarti RPO = 1 jam). Sedangkan RTO (Recovery Time Objective) mengukur target kecepatan memulihkan sistem hingga online kembali."
  },
  {
    "tm": 9,
    "topic": "Keamanan Siber & Kriptografi",
    "difficulty": "medium",
    "q": "Serangan siber di mana pelaku menyisipkan kode berbahaya ke formulir input web sehingga sistem database mengeksekusi perintah manipulasi data secara tidak sah disebut...",
    "options": [
      "SQL Injection Attack",
      "Denial of Service (DoS)",
      "Social Engineering",
      "Brute Force Attack"
    ],
    "answer": 0,
    "explanation": "SQL Injection mengeksploitasi kelemahan validasi form input aplikasi akuntansi. Jika input tidak disanitasi, peretas dapat memasukkan sintaks SQL seperti \"' OR '1'='1\" untuk mencuri seluruh data laporan keuangan atau menghapus tabel transaksi."
  },
  {
    "tm": 10,
    "topic": "COBIT & Audit Sistem Informasi",
    "difficulty": "medium",
    "q": "Dalam kerangka kerja COBIT 2019, domain tata kelola (Governance Domain) yang menjadi tanggung jawab utama Dewan Komisaris dan Direksi adalah...",
    "options": [
      "APO (Align, Plan, and Organize)",
      "EDM (Evaluate, Direct, and Monitor)",
      "BAI (Build, Acquire, and Implement)",
      "DSS (Deliver, Service, and Support)"
    ],
    "answer": 1,
    "explanation": "COBIT 2019 membagi tata kelola dan manajemen: Domain Governance tunggal adalah EDM (Evaluate, Direct, and Monitor). Empat domain lainnya (APO, BAI, DSS, MEA) adalah Domain Manajemen yang dipimpin eksekutif operasional TI."
  },
  {
    "tm": 10,
    "topic": "COBIT & Audit Sistem Informasi",
    "difficulty": "advanced",
    "q": "Perbedaan fundamental antara pendekatan 'Audit Around the Computer' dan 'Audit Through the Computer' adalah...",
    "options": [
      "Audit Around dilakukan di luar ruangan, sedangkan Through dilakukan di dalam server room",
      "Audit Around hanya membandingkan input fisik dengan output cetak tanpa menguji program software; sedangkan Audit Through menguji langsung integritas logika pemrosesan dan kontrol internal software komputer",
      "Audit Around menggunakan software akuntansi, sedangkan Through menggunakan mesin tik manual",
      "Audit Around tidak memerlukan auditor manusia"
    ],
    "answer": 1,
    "explanation": "Audit Around the Computer memperlakukan komputer sebagai black-box. Jika sistem sangat kompleks (seperti ERP), auditor wajib melakukan Audit Through the Computer (white-box testing) menggunakan teknik CAATs untuk menguji integritas logika program."
  },
  {
    "tm": 10,
    "topic": "COBIT & Audit Sistem Informasi",
    "difficulty": "advanced",
    "q": "Teknik audit berbantuan komputer (CAATs) di mana auditor memasukkan unit bisnis atau entitas fiktif ke dalam sistem ERP operasional klien untuk memantau pemrosesan transaksi secara live tanpa mencemari laporan keuangan aktual disebut...",
    "options": [
      "Test Data Approach",
      "Integrated Test Facility (ITF)",
      "Parallel Simulation",
      "Embedded Audit Module"
    ],
    "answer": 1,
    "explanation": "Integrated Test Facility (ITF) membuat divisi/entitas dummy dalam sistem live klien. Transaksi audit diproses bersama transaksi riil, lalu jurnal pembalik otomatis diaktifkan untuk mengisolasi agar laporan keuangan publik tidak terdistorsi."
  },
  {
    "tm": 10,
    "topic": "COBIT & Audit Sistem Informasi",
    "difficulty": "medium",
    "q": "Manakah pemisahan tugas (Segregation of Duties) yang WAJIB diterapkan di dalam struktur internal Departemen Teknologi Informasi (TI)?",
    "options": [
      "Staf programmer pengembang software DILARANG memiliki akses ke lingkungan produksi/live database operasional",
      "Staf helpdesk dilarang berbicara dengan pengguna komputer",
      "Manajer TI dilarang melapor ke Direktur Utama",
      "Auditor sistem dilarang menggunakan komputer"
    ],
    "answer": 0,
    "explanation": "Prinsip dasar kontrol umum TI (GITC): Systems Analyst dan Systems Programmer (pembuat kode) harus dipisahkan dari Computer Operators dan Database Administrator (DBA). Programmer tidak boleh memiliki akses langsung memodifikasi live data produksi."
  },
  {
    "tm": 10,
    "topic": "COBIT & Audit Sistem Informasi",
    "difficulty": "medium",
    "q": "Pengendalian Umum TI (General IT Controls / GITC) mencakup area berikut, KECUALI...",
    "options": [
      "Pemeriksaan validitas limit harga diskon pada formulir pesanan penjualan individual",
      "Manajemen akses logis dan kata sandi jaringan",
      "Prosedur manajemen perubahan program software (Change Management)",
      "Operasional komputer, backup, dan Disaster Recovery Plan"
    ],
    "answer": 0,
    "explanation": "Pemeriksaan validitas limit diskon pada form penjualan individual adalah contoh Pengendalian Aplikasi (Application Control), bukan GITC. GITC adalah kontrol tingkat infrastruktur yang menaungi seluruh aplikasi."
  },
  {
    "tm": 11,
    "topic": "Analitika Data Akuntansi",
    "difficulty": "medium",
    "q": "Urutan enam langkah metodologis dalam siklus analitika data akuntansi model IMPACT adalah...",
    "options": [
      "Input, Model, Process, Audit, Calculate, Terminate",
      "Identify questions, Master the data, Perform test plan, Address results, Communicate insights, Track outcomes",
      "Information, Management, Protocol, Analysis, Control, Technology",
      "Inspect, Match, Post, Adjust, Close, Transfer"
    ],
    "answer": 1,
    "explanation": "Model IMPACT (Richardson, Teeter, Terrell): (1) Identify questions, (2) Master the data, (3) Perform the test plan, (4) Address and refine results, (5) Communicate insights, dan (6) Track outcomes."
  },
  {
    "tm": 11,
    "topic": "Analitika Data Akuntansi",
    "difficulty": "advanced",
    "q": "Tingkatan analitika data yang bertujuan menjawab pertanyaan: 'Apa tindakan terbaik yang harus diambil oleh perusahaan berdasarkan skenario masa depan?' diklasifikasikan sebagai...",
    "options": [
      "Analitika Deskriptif (Descriptive Analytics)",
      "Analitika Diagnostik (Diagnostic Analytics)",
      "Analitika Prediktif (Predictive Analytics)",
      "Analitika Preskriptif (Prescriptive Analytics)"
    ],
    "answer": 3,
    "explanation": "Hierarki Analitika: (1) Deskriptif = Apa yang terjadi?; (2) Diagnostik = Mengapa terjadi?; (3) Prediktif = Apa yang mungkin terjadi?; (4) Preskriptif = Apa rekomendasi tindakan terbaik yang harus diambil (optimalisasi)?."
  },
  {
    "tm": 11,
    "topic": "Analitika Data Akuntansi",
    "difficulty": "advanced",
    "q": "Dalam pengujian audit analitika forensik, Hukum Benford (Benford's Law) digunakan oleh akuntan untuk...",
    "options": [
      "Menghitung amortisasi obligasi suku bunga efektif",
      "Mendeteksi anomali rekayasa angka transaksi dengan membandingkan frekuensi kemunculan digit pertama angka terhadap distribusi logaritmik alami",
      "Menentukan nilai depresiasi aset tetap metode saldo menurun ganda",
      "Mengonversi mata uang asing ke kurs tengah Bank Indonesia"
    ],
    "answer": 1,
    "explanation": "Hukum Benford memprediksi bahwa dalam kumpulan data transaksi akuntansi alami, angka '1' muncul sebagai digit pertama sekitar 30.1% dari waktu, sedangkan angka '9' kurang dari 5%. Deviasi drastis mengindikasikan fabrikasi angka atau manipulasi transaksi buatan manusia."
  },
  {
    "tm": 11,
    "topic": "Analitika Data Akuntansi",
    "difficulty": "medium",
    "q": "Aktivitas 'Master the Data' dalam model IMPACT mencakup proses ETL. Kepanjangan dari ETL adalah...",
    "options": [
      "Estimate, Tax, Ledger",
      "Extract, Transform, and Load",
      "Electronic Transfer Link",
      "Execute, Test, and Log"
    ],
    "answer": 1,
    "explanation": "ETL (Extract, Transform, Load) adalah proses mengekstrak data dari berbagai sumber ERP/database, mentransformasi data menjadi format yang bersih dan konsisten, lalu memuatnya (load) ke dalam Data Warehouse untuk dianalisis."
  },
  {
    "tm": 11,
    "topic": "Analitika Data Akuntansi",
    "difficulty": "medium",
    "q": "Teknik Audit Data Analytics (ADA) manakah yang paling efektif untuk mengidentifikasi adanya pembayaran ganda (duplicate payments) kepada vendor dalam satu tahun buku?",
    "options": [
      "Fuzzy Matching dan Uji Duplikasi (Duplicate Test) pada field nomor faktur, tanggal, nama vendor, dan nominal pembayaran",
      "Regresi linier sederhana",
      "Analisis sentimen teks dewan komisaris",
      "Penyusutan garis lurus persediaan"
    ],
    "answer": 0,
    "explanation": "Fuzzy Matching dan Duplicate Testing pada software analitika (seperti ACL, IDEA, atau Python Pandas) mampu memfilter transaksi yang memiliki kecocokan identik atau hampir identik (misal nomor faktur INV-100 vs INV100) untuk mendeteksi dobel bayar."
  },
  {
    "tm": 12,
    "topic": "RPA & AI dalam Akuntansi",
    "difficulty": "medium",
    "q": "Karakteristik proses bisnis akuntansi manakah yang PALING IDEAL untuk diotomatisasi menggunakan Robotic Process Automation (RPA)?",
    "options": [
      "Proses yang membutuhkan pertimbangan moral dan negosiasi tatap muka",
      "Proses bervolume tinggi, sangat repetitif, memiliki aturan logis yang pasti (rule-based), dan mengolah data digital terstruktur",
      "Penyusunan visi strategis perusahaan 20 tahun ke depan",
      "Penyelesaian sengketa hukum perdata di pengadilan"
    ],
    "answer": 1,
    "explanation": "RPA unggul pada tugas klerikal yang berulang dan berbasis aturan pasti (misal: mengunduh rekening koran bank setiap pagi jam 06.00, mencocokkan mutasi, dan memposting jurnal kliring otomatis ke ERP)."
  },
  {
    "tm": 12,
    "topic": "RPA & AI dalam Akuntansi",
    "difficulty": "advanced",
    "q": "Perbedaan utama antara Attended RPA dan Unattended RPA dalam lingkungan kantor akuntansi adalah...",
    "options": [
      "Attended RPA berjalan di komputer lokal dengan pemicu aksi manual dari staf akuntan; sedangkan Unattended RPA berjalan otomatis di server latar belakang 24/7 berdasarkan jadwal tanpa campur tangan manusia",
      "Attended RPA menggunakan robot fisik berkaki, sedangkan Unattended berbentuk software",
      "Attended RPA gratis, sedangkan Unattended wajib bayar pajak",
      "Attended RPA hanya bisa menghitung depresiasi"
    ],
    "answer": 0,
    "explanation": "Attended Bot bekerja berdampingan sebagai asisten virtual staf (dipicu tombol). Unattended Bot berjalan otonom di server terpusat (dijadwalkan jam 02.00 malam untuk memproses ribuan faktur batch)."
  },
  {
    "tm": 12,
    "topic": "RPA & AI dalam Akuntansi",
    "difficulty": "medium",
    "q": "Teknologi AI yang mengonversi dokumen pindaian faktur kertas atau format PDF menjadi teks dan angka digital terstruktur untuk dimasukkan ke sistem ERP disebut...",
    "options": [
      "Optical Character Recognition (OCR)",
      "Virtual Private Network (VPN)",
      "Domain Name System (DNS)",
      "File Transfer Protocol (FTP)"
    ],
    "answer": 0,
    "explanation": "OCR (Optical Character Recognition) yang dipadukan dengan Machine Learning mampu mengenali tata letak faktur vendor, mengekstrak nomor PO, tanggal, dan subtotal, lalu meneruskannya ke software akuntansi otomatis."
  },
  {
    "tm": 12,
    "topic": "RPA & AI dalam Akuntansi",
    "difficulty": "advanced",
    "q": "Dengan semakin meluasnya implementasi bot RPA dan AI dalam sistem akuntansi, bagaimana peran profesional akuntan bertransformasi di masa depan?",
    "options": [
      "Profesi akuntan akan punah sepenuhnya karena komputer tidak pernah membuat kesalahan",
      "Akuntan bertransisi dari sekadar pencatat buku klerikal (bookkeeper) menjadi analis bisnis strategis, desainer tata kelola sistem, dan auditor algoritma AI",
      "Akuntan hanya bertugas merakit kabel perangkat keras komputer",
      "Akuntan kembali menggunakan pembukuan kertas manual untuk menghindari hacking"
    ],
    "answer": 1,
    "explanation": "RPA membebaskan akuntan dari pekerjaan manual berulang. Nilai tambah akuntan bergeser ke ranah penafsiran bisnis strategis, penilaian risiko sistem, kepatuhan etika algoritma AI, dan konsultasi manajerial."
  },
  {
    "tm": 12,
    "topic": "RPA & AI dalam Akuntansi",
    "difficulty": "medium",
    "q": "Risiko pengendalian baru yang timbul akibat penggunaan bot RPA dalam proses akuntansi adalah...",
    "options": [
      "Bot dapat menuntut kenaikan gaji dan uang lembur",
      "Jika terjadi perubahan format pada website bank atau aplikasi ERP tanpa memperbarui script bot, bot dapat memproses transaksi yang salah secara massal dalam hitungan detik",
      "Biaya listrik komputer meningkat 1000%",
      "Data di laporan laba rugi otomatis berubah menjadi mata uang kripto"
    ],
    "answer": 1,
    "explanation": "Bot menjalankan aturan tanpa nalar manusia. Jika format interface berubah atau ada pengecualian (exception) yang belum diprogram, bot akan terus mengeksekusi kesalahan berulang dalam volume sangat besar jika tidak dipantau."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "medium",
    "q": "Dalam arsitektur teknologi blockchain, setiap blok transaksi dihubungkan secara kriptografis ke blok sebelumnya melalui elemen data...",
    "options": [
      "Alamat IP Router",
      "Hash Pointer / Previous Block Hash",
      "Nomor Rekening Bank Sentral",
      "Tanda Tangan Basah Notaris"
    ],
    "answer": 1,
    "explanation": "Setiap blok menyimpan cryptographic hash dari blok sebelumnya (Previous Hash). Jika peretas mencoba memanipulasi satu transaksi pada blok masa lalu, seluruh hash blok berikutnya akan menjadi tidak valid."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "advanced",
    "q": "Konsep 'Triple-Entry Accounting' yang dirumuskan oleh Ian Grigg memperluas sistem tata buku ganda (Double-Entry) dengan menambahkan entri ketiga berupa...",
    "options": [
      "Audit tahunan oleh kantor akuntan publik",
      "Tanda terima kriptografis yang diverifikasi dan disimpan secara permanen pada buku besar terdistribusi bersama (Shared Distributed Ledger)",
      "Setoran modal saham ketiga oleh pendiri perusahaan",
      "Pembayaran pajak ganda ke kas negara"
    ],
    "answer": 1,
    "explanation": "Dalam Triple-Entry Accounting: Entitas A mencatat Kredit, Entitas B mencatat Debit, dan entri ketiga adalah transaksi kriptografis yang ditandatangani secara digital oleh kedua pihak dan disimpan pada public/consortium ledger yang immutable."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "advanced",
    "q": "Program software otonom yang berjalan di atas blockchain dan secara otomatis mengeksekusi pembayaran piutang saat syarat kontrak terpenuhi (misal barang tiba di pelabuhan) disebut...",
    "options": [
      "Electronic Data Interchange (EDI)",
      "Smart Contract",
      "Virtual Private Network",
      "Database View"
    ],
    "answer": 1,
    "explanation": "Smart Contract adalah kode logika terdesentralisasi ('if this, then that'). Begitu sensor IoT pelabuhan mengonfirmasi kontainer tiba, smart contract otomatis mentransfer dana dari escrow pembeli ke penjual tanpa intervensi manual bank."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "medium",
    "q": "Karakteristik 'Immutability' pada buku besar blockchain memberikan manfaat signifikan bagi auditor akuntansi karena...",
    "options": [
      "Laporan audit tidak perlu ditandatangani oleh partner KAP",
      "Catatan transaksi historis tidak dapat diubah, dihapus, atau dimanipulasi secara sepihak, menciptakan jejak audit (audit trail) yang transparan dan tepercaya",
      "Auditor dapat mengakses uang kas perusahaan secara langsung",
      "Perusahaan dibebaskan dari kewajiban membuat laporan laba rugi"
    ],
    "answer": 1,
    "explanation": "Sifat immutable (tidak dapat diubah) menghilangkan risiko pemalsuan jurnal transaksi masa lalu (tamper-proof). Auditor mendapatkan Single Source of Truth yang dapat diverifikasi secara independen."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "advanced",
    "q": "Meskipun transaksi dalam blockchain bersifat immutable dan aman secara kriptografis, mengapa auditor eksternal TETAP diperlukan dalam ekosistem bisnis?",
    "options": [
      "Karena komputer blockchain tidak bisa dinyalakan tanpa auditor",
      "Karena blockchain hanya menjamin bahwa data yang dicatat tidak diubah, namun tidak menjamin apakah transaksi di dunia nyata tersebut sah secara ekonomi, legal, atau bernilai wajar (Garbage In, Garbage Out problem)",
      "Karena standar akuntansi melarang penggunaan teknologi komputer",
      "Karena blockchain hanya berlaku untuk mata uang kripto ilegal"
    ],
    "answer": 1,
    "explanation": "Masalah 'Oracle' dan 'Garbage In, Garbage Out': Blockchain memverifikasi catatan, bukan realitas fisik (misal: jika ada kesepakatan fiktif atau aset rusak dicatat sebagai aset mulus, blockchain tetap mencatatnya). Auditor tetap bertugas menguji eksistensi dan penilaian wajar ekonomi riil."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "medium",
    "q": "Dalam sistem ERP terintegrasi, ketika barang jadi dikirimkan ke pelanggan dan surat jalan (Goods Issue) diposting, modul manakah yang otomatis saling berinteraksi?",
    "options": [
      "Modul Penggajian (HR) dan Modul Pajak Pertambahan Nilai",
      "Modul Penjualan (SD), Modul Manajemen Persediaan (MM), dan Modul Akuntansi Keuangan (FI - mendebit COGS dan mengkredit Persediaan)",
      "Modul Pengadaan dan Modul Pemeliharaan Pabrik",
      "Modul Legal dan Modul Hubungan Investor"
    ],
    "answer": 1,
    "explanation": "Integrasi sejati ERP: Posting Goods Issue di modul Sales & Distribution (SD) otomatis mengurangi stok fisik di Materials Management (MM) dan memicu posting jurnal keuangan real-time di modul Financial (FI): Debit Beban Pokok Penjualan, Kredit Persediaan."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "advanced",
    "q": "Konsep 'Audit Trail' (Jejak Audit) dalam sistem ERP akuntansi modern berfungsi untuk...",
    "options": [
      "Menghapus riwayat perubahan data untuk menghemat ruang disk",
      "Menyediakan rekam jejak digital kronologis lengkap yang mencatat siapa, kapan, dan perubahan apa yang dilakukan pada setiap dokumen transaksi",
      "Mempercepat kecepatan koneksi WiFi kantor",
      "Mengganti sistem kode akun bagan perkiraan"
    ],
    "answer": 1,
    "explanation": "Audit Trail adalah rekaman forensik sistem yang mendokumentasikan asal-usul transaksi: dari input awal, perubahan data, waktu, terminal/IP penginput, hingga posting ke neraca, memungkinkan pelacakan maju (vouching) dan mundur (tracing)."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "advanced",
    "q": "Dalam evaluasi master data ERP, pengendalian preventif manakah yang paling efektif untuk memastikan bahwa jurnal penyesuaian manual (Manual Journal Entries) tidak disalahgunakan untuk manipulasi laba?",
    "options": [
      "Memberikan hak akses superuser kepada seluruh staf pembukuan",
      "Workflow Otorisasi Bertingkat (Approval Workflow) berdasarkan batas materialitas rupiah dan larangan jurnal manual ke akun Kas tanpa lampiran bukti sah",
      "Menonaktifkan fitur pencatatan tanggal posting",
      "Mengizinkan pencatatan jurnal yang tidak seimbang antara debit dan kredit"
    ],
    "answer": 1,
    "explanation": "Manual Journal Entries adalah salah satu titik kerentanan fraud manajemen paling umum (SOX / ISA 240). Kontrol ERP harus mewajibkan workflow persetujuan berjenjang (dual-approval) dan alasan tertulis untuk setiap jurnal manual."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "medium",
    "q": "Manakah pernyataan yang paling tepat mengenai peranan Chart of Accounts (Bagan Akun Standar) dalam arsitektur sistem informasi akuntansi ERP?",
    "options": [
      "Daftar kode dan nama akun sistematis yang berfungsi sebagai kerangka pengelompokan dan pengikhtisaran seluruh transaksi keuangan perusahaan",
      "Daftar nama karyawan penerima tunjangan makan siang",
      "Brosur promosi produk yang dibagikan ke calon pelanggan",
      "Daftar sandi WiFi kantor cabang"
    ],
    "answer": 0,
    "explanation": "Chart of Accounts (COA) adalah tulang punggung klasifikasi finansial SIA: mengalokasikan kode numerik berstruktur hierarki (Aset, Liabilitas, Ekuitas, Pendapatan, Beban) yang memungkinkan posting dan agregasi laporan keuangan konsolidasian."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "advanced",
    "q": "Dalam simulasi ujian komprehensif UAS SIA, jika sebuah perusahaan berencana memigrasikan sistem warisan (Legacy System) ke cloud ERP, metode konversi manakah yang memiliki tingkat risiko paling rendah meskipun memerlukan biaya operasional ganda?",
    "options": [
      "Direct Conversion (Cut-over langsung sekaligus)",
      "Parallel Conversion (Menjalankan sistem lama dan sistem baru secara bersamaan selama periode transisi tertentu)",
      "Pilot Conversion",
      "Phased Conversion"
    ],
    "answer": 1,
    "explanation": "Parallel Conversion adalah metode konversi paling aman karena sistem lama tetap berjalan sebagai jaring pengaman (safety net) sambil membandingkan output sistem baru. Jika sistem baru mengalami error atau crash, operasi bisnis tetap dapat berjalan normal menggunakan sistem lama."
  }
];

export const AKS301_QUIZ: QuizQuestion[] = [...AKS301_QUIZ_UTS, ...AKS301_QUIZ_UAS];
