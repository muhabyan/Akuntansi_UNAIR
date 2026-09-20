// src/data/quizzes/sii306.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Sistem Informasi Akuntansi (SII306)
// Berdasarkan Vernon J. Richardson et al. (4th ISE ed. 2023), Romney & Steinbart (15e),
// COSO Internal Control (2013), dan ISACA COBIT 2019 Framework.
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1-7) & 35 Soal Pra-UAS (TM 8-14)
// Pra-UTS (TM 1-7) hanya memakai bacaan kanonik src/data/sia/modules/tm1.ts-tm7.ts.
import type { QuizQuestion } from '../../types';

export const SII306_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "medium",
    "q": "Pasangan kualitas informasi yang unsur-unsurnya mencakup predictive value, confirmatory value, dan materiality serta complete, neutral, dan free from error adalah...",
    "options": [
      "Understandability dan Timeliness",
      "Relevance dan Faithful Representation",
      "Comparability dan Verifiability",
      "Timeliness dan Verifiability"
    ],
    "answer": 1,
    "explanation": "Relevance mencakup predictive value, confirmatory value, dan materiality. Faithful Representation mencakup complete, neutral, dan free from error (tidak ada kesalahan material, bukan jaminan prediksi 100% tepat). Comparability, verifiability, timeliness, dan understandability adalah kualitas lain yang juga dibahas di TM1."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "medium",
    "q": "Dalam rantai nilai, aktivitas utama (primary activity) yang menerima, menyimpan, dan menangani bahan adalah...",
    "options": [
      "Inbound Logistics",
      "Operations",
      "Outbound Logistics",
      "Procurement"
    ],
    "answer": 0,
    "explanation": "Inbound Logistics menerima, menyimpan, dan menangani bahan serta terhubung dengan SCM dan penerimaan persediaan. Operations mengubah bahan menjadi produk; Outbound Logistics menyimpan dan mendistribusikan barang jadi; Procurement adalah aktivitas pendukung (support) untuk pengadaan input."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "advanced",
    "q": "Manajer menerima terlalu banyak data mentah sehingga keputusan melambat dan sinyal penting tersembunyi. Kondisi ini disebut...",
    "options": [
      "Veracity",
      "Exception reporting",
      "Information overload",
      "Timeliness"
    ],
    "answer": 2,
    "explanation": "Information overload terjadi ketika terlalu banyak data mentah memperlambat keputusan dan menyembunyikan sinyal penting. Cara mengatasinya menurut TM1: exception reporting, agregasi, dashboard yang relevan, dan drill-down, bukan menambah data mentah."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "medium",
    "q": "Pernyataan yang paling tepat tentang data dan information dalam SIA adalah...",
    "options": [
      "Data selalu berbentuk angka, sedangkan information selalu berbentuk narasi",
      "Data hanya dihasilkan komputer, sedangkan information hanya disusun manual oleh akuntan",
      "Data dan information sama saja karena keduanya disimpan di database",
      "Data adalah fakta, simbol, atau pengukuran mentah tanpa konteks keputusan; information adalah data yang diolah dan diberi konteks sehingga mengurangi ketidakpastian"
    ],
    "answer": 3,
    "explanation": "Contoh TM1: barcode 7501031311309, kuantitas 42, dan waktu 08:14:22 adalah data. Information: stok SKU 11309 di Store #4 berada di bawah reorder point sehingga sistem memicu pemesanan kembali."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "advanced",
    "q": "Perusahaan menilai investasi sistem yang bersifat discretionary. Menurut TM1, nilai bersih informasi dihitung dan diputuskan dengan cara...",
    "options": [
      "V = B − C; ACCEPT jika V > 0 dan REJECT jika V ≤ 0",
      "V = B + C; ACCEPT jika V lebih besar dari biaya software",
      "V = C − B; ACCEPT jika biaya lebih besar dari manfaat",
      "V = B − C; sistem apa pun, termasuk sistem mandatory, ditolak jika V ≤ 0"
    ],
    "answer": 0,
    "explanation": "B = manfaat (pendapatan, penghematan persediaan, berkurangnya piutang macet); C = software, hardware, integrasi, pelatihan, pemeliharaan. Aturan ACCEPT/REJECT berlaku untuk sistem discretionary; sistem mandatory seperti FRS dan pelaporan pajak tetap wajib walaupun manfaat terukur lebih kecil dari biaya. Contoh: PT Jayakarta Distribution \\$120,000 − \\$45,000 = \\$75,000 → ACCEPT."
  },
  {
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "difficulty": "medium",
    "q": "Saldo bank yang telah direkonsiliasi dibandingkan dengan estimasi nilai wajar, impairment, atau umur manfaat yang masih memerlukan verifikasi. Dimensi Big Data yang diilustrasikan contoh ini adalah...",
    "options": [
      "Volume",
      "Variety",
      "Velocity",
      "Veracity"
    ],
    "answer": 3,
    "explanation": "Veracity menyangkut kebenaran, akurasi, kebersihan, dan representasi data. Volume adalah besarnya data; Variety adalah keragaman format (sekitar 80% data perusahaan tidak terstruktur); Velocity adalah kecepatan data dihasilkan, ditangkap, dan diproses."
  },
  {
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "difficulty": "medium",
    "q": "Dalam model AMPS, tahap yang mencakup Extract, Transform, Load serta penilaian accessibility, reliability, integrity, ethics & privacy, dan data type adalah...",
    "options": [
      "Ask the Question",
      "Master the Data",
      "Perform the Analysis",
      "Share the Story"
    ],
    "answer": 1,
    "explanation": "Master the Data menghasilkan data relevan yang dinilai, dibersihkan, dan divalidasi. Persiapan dan pembersihan data menghabiskan 50%–90% waktu proyek. AMPS bersifat rekursif: temuan dapat memunculkan pertanyaan baru dan mengembalikan proses ke Ask/Master."
  },
  {
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "difficulty": "advanced",
    "q": "Auditor membandingkan Field 14 (Entered_By) dan Field 17 (Approved_By) pada ekspor General Ledger berformat AICPA Audit Data Standards. Pada empat jurnal, kedua field berisi user VR. Kesimpulan yang tepat adalah...",
    "options": [
      "Keempat jurnal self-approved sehingga melanggar pemisahan preparer dan approver",
      "Tidak ada masalah karena VR adalah entry clerk yang sah",
      "Reversal_Indicator keempat jurnal harus diubah menjadi 2",
      "Amount_Credit_Debit_Indicator keempat jurnal salah input"
    ],
    "answer": 0,
    "explanation": "User yang sama pada Entered_By dan Approved_By menandai self-approval yang memerlukan investigasi. Tindak lanjut dalam latihan TM2: balik transaksi self-approved sambil menunggu review senior controller, hapus approval rights VR pada matriks akses ERP, dan blok posting bila Entered_By sama dengan Approved_By."
  },
  {
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "difficulty": "medium",
    "q": "Analis menentukan jumlah unit Product A yang harus terjual agar Net Income = 0 dengan Goal Seek. Jenis analitika ini adalah...",
    "options": [
      "Prescriptive",
      "Predictive",
      "Diagnostic",
      "Descriptive"
    ],
    "answer": 0,
    "explanation": "Menentukan target atau tindakan dengan kendala (breakeven, Goal Seek) adalah prescriptive; memprediksi kebangkrutan dengan Altman Z-score adalah predictive. Common trap TM2: breakeven bukan predictive. Jing LCC Januari: Q = \\$1,600 / (\\$7 − \\$3) = 400 units."
  },
  {
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "difficulty": "advanced",
    "q": "Rasio klien manufaktur: X₁ = 0.250; X₂ = 0.100; X₃ = 0.050; X₄ = 0.500; X₅ = 1.100. Dengan Z = 1.2X₁ + 1.4X₂ + 3.3X₃ + 0.6X₄ + 1.0X₅, skor dan klasifikasinya adalah...",
    "options": [
      "2.0050 — Distress Zone",
      "2.0251 — Gray Zone",
      "2.0050 — Gray Zone",
      "2.0050 — Safe Zone"
    ],
    "answer": 2,
    "explanation": "Skor tertimbang: 0.3000 + 0.1400 + 0.1650 + 0.3000 + 1.1000 = 2.0050. Karena 1.80 ≤ Z < 3.00, klien berada di Gray Zone (kerentanan moderat): tingkatkan scrutiny audit, perluas pengujian going concern, dan minta proyeksi arus kas manajemen. Skor 2.0251 adalah baseline Apple 1997, bukan klien ini."
  },
  {
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "difficulty": "medium",
    "q": "Dalam diagram BPMN 2.0, simbol diamond dengan tanda \"X\" merepresentasikan...",
    "options": [
      "Parallel Gateway (AND): token digandakan ke semua jalur keluar secara bersamaan",
      "Exclusive Gateway (XOR): tepat satu jalur yang kondisinya benar dijalankan",
      "Inclusive Gateway (OR): satu, beberapa, atau semua jalur yang benar dijalankan",
      "Intermediate Event: peristiwa di tengah alur seperti timer delay"
    ],
    "answer": 1,
    "explanation": "Exclusive (XOR) digambar sebagai diamond kosong atau diamond dengan \"X\" dan mengevaluasi kondisi yang saling eksklusif. Parallel (AND) memakai \"+\" dan Inclusive (OR) memakai \"O\". Cabang Exclusive Gateway harus mencakup semua kemungkinan logis."
  },
  {
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "difficulty": "advanced",
    "q": "Aturan BPMN 2.0 yang BENAR tentang pool, lane, sequence flow, dan message flow adalah...",
    "options": [
      "Sequence flow boleh melintasi batas dua pool yang berbeda",
      "Message flow menghubungkan lane Sales dan lane Accounting di dalam pool perusahaan yang sama",
      "Pool mewakili departemen internal, sedangkan lane mewakili partisipan eksternal independen",
      "Sequence flow hanya menghubungkan elemen di dalam satu pool (boleh melintasi lane); komunikasi antar-pool memakai message flow"
    ],
    "answer": 3,
    "explanation": "Aturan 1 (intra-pool): sequence flow boleh melintasi lane dalam pool yang sama, tetapi tidak pernah melintasi batas pool. Aturan 2 (inter-pool): message flow hanya menghubungkan pool yang terpisah. Pool = entitas (Company, Vendor); lane = departemen internal (Sales, Accounting)."
  },
  {
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "difficulty": "medium",
    "q": "Mengapa dokumentasi proses bisnis seperti process map, swimlane diagram, dan flowchart penting bagi kepatuhan SOX Section 404?",
    "options": [
      "Manajemen dan auditor eksternal independen harus mengatestasi desain dan efektivitas ICFR; PCAOB AS 2201 mensyaratkan walkthrough, dan tanpa dokumentasi mutakhir desain kontrol yang efektif tidak dapat ditunjukkan",
      "Dokumentasi proses menggantikan kewajiban menyusun laporan keuangan",
      "BPMN otomatis menghasilkan skema database relasional tanpa perancang",
      "Dokumentasi proses menghapus kebutuhan auditor eksternal independen"
    ],
    "answer": 0,
    "explanation": "Section 404 mewajibkan atestasi atas desain dan efektivitas operasi ICFR. AS 2201 mengharuskan walkthrough yang menelusuri transaksi dari awal hingga laporan keuangan. Tanpa dokumentasi yang mutakhir, perusahaan berisiko scope limitation, pengungkapan material weakness, dan ketidakpatuhan. Diagram proses juga menjadi instrumen utama untuk memverifikasi pemisahan tugas."
  },
  {
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "difficulty": "medium",
    "q": "Simbol lingkaran dengan garis tepi ganda dalam notasi BPMN 2.0 menandakan...",
    "options": [
      "Start Event",
      "End Event",
      "Intermediate Event",
      "Data Store"
    ],
    "answer": 2,
    "explanation": "Start Event adalah lingkaran bergaris tipis dan membuat token; Intermediate Event adalah lingkaran bergaris ganda (mis. timer delay, pesan diterima/dikirim) yang memengaruhi alur tanpa mengakhirinya; End Event adalah lingkaran bergaris tebal dan mengonsumsi token. Data Store digambar sebagai ikon silinder database."
  },
  {
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "difficulty": "advanced",
    "q": "Dalam model swimlane, satu lane Warehouse menjalankan aktivitas menerbitkan purchase order sekaligus menyimpan barang yang diterima. Kelemahan kontrol apa yang terlihat?",
    "options": [
      "Pelanggaran Entity Integrity karena primary key purchase order kosong",
      "Pelanggaran Segregation of Duties: authorization dan custody dijalankan oleh lane yang sama",
      "Black Hole pada Data Flow Diagram",
      "Pelanggaran aturan penamaan Active Verb + Noun"
    ],
    "answer": 1,
    "explanation": "Fungsi yang dipisahkan: Authorization (menyetujui transaksi), Custody (memegang aset fisik atau kas), Recording (memposting jurnal atau memperbarui ledger), dan Reconciliation (mencocokkan catatan dengan aset fisik). Kelemahan kontrol terlihat ketika satu swimlane menjalankan authorization dan custody, atau custody dan recording, sekaligus."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "medium",
    "q": "Tiga kategori class dalam pola REA yang dikembangkan William McCarthy adalah...",
    "options": [
      "Revenue, Expense, Assets",
      "Receivables, Equity, Accounts",
      "Resources, Events, Agents",
      "Requisition, Execution, Authorization"
    ],
    "answer": 2,
    "explanation": "Resources adalah aset ekonomi bernilai yang dimiliki atau dikendalikan (Cash, Merchandise_Inventory); Events adalah transaksi bisnis dan kejadian operasional (Purchase_Order, Sales_Invoice); Agents adalah individu internal dan entitas eksternal yang berpartisipasi (Employee, Customer, Vendor)."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "advanced",
    "q": "Class Sales_Order dan Inventory memiliki association Many-to-Many. Menurut algoritma lima langkah, implementasi relasionalnya adalah...",
    "options": [
      "Posting primary key Sales_Order sebagai satu foreign key di tabel Inventory",
      "Membuat linking table Order_Lines dengan composite primary key (Order_ID, Product_ID) dan menyimpan Quantity serta Unit_Price di tabel tersebut",
      "Menggabungkan Sales_Order dan Inventory menjadi satu tabel dengan daftar produk dalam satu sel",
      "Menghapus association karena Many-to-Many tidak dapat dimodelkan dalam UML"
    ],
    "answer": 1,
    "explanation": "Step 5: M:N tidak dapat dipetakan menjadi satu foreign key. Buat linking table yang primary key-nya gabungan PK kedua tabel, pindahkan atribut milik relasi (Quantity, Unit_Price) ke linking table, sehingga M:N menjadi dua relasi 1:N. Menyimpan banyak nilai dalam satu sel melanggar First Normal Form."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "medium",
    "q": "Setiap departemen memiliki satu atau banyak karyawan, dan setiap karyawan termasuk tepat satu departemen. Di mana foreign key diletakkan?",
    "options": [
      "Department_ID sebagai foreign key di tabel Employee",
      "Employee_ID sebagai foreign key di tabel Department",
      "Linking table Department_Employee dengan composite primary key",
      "Department_ID dan Employee_ID saling diposting di kedua tabel"
    ],
    "answer": 0,
    "explanation": "Department berada di sisi \"1\" (1..1) dan Employee di sisi \"many\" (1..\\*). Aturan 1:N: primary key sisi \"1\" diposting sebagai foreign key di sisi \"many\", sehingga Department_ID menjadi foreign key di tabel Employee. Linking table hanya diperlukan untuk M:N."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "medium",
    "q": "Sales_Invoice tersusun atas Invoice_Line_Items; jika invoice dihapus, seluruh baris item ikut terhapus. Jenis asosiasi dan notasinya adalah...",
    "options": [
      "Aggregation: diamond kosong pada class induk",
      "Generalization: segitiga kosong mengarah ke superclass",
      "Association biasa: garis penuh berlabel kata kerja aktif",
      "Composition: diamond hitam penuh pada class induk"
    ],
    "answer": 3,
    "explanation": "Composition adalah hubungan bagian–keseluruhan yang ketat: bagian tidak dapat ada tanpa induk (cascading delete) dan digambar dengan diamond hitam penuh. Aggregation (diamond kosong) bersifat longgar karena bagian tetap ada, mis. University agregat Professors. Generalization adalah relasi \"is-a\"."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "advanced",
    "q": "Dalam model BPMN, purchase requisition ≤ \\$5,000 dirutekan otomatis ke pembuatan PO, sedangkan yang melebihi \\$5,000 dirutekan ke otorisasi Department Head. Aturan bisnis ini ditanamkan pada elemen...",
    "options": [
      "Exclusive Gateway (XOR)",
      "Parallel Gateway (AND)",
      "Message Flow antar-pool",
      "Data Store"
    ],
    "answer": 0,
    "explanation": "Proper authorization dalam BPMN: business rule ditanamkan pada Exclusive Gateway (XOR) yang mengevaluasi parameter transaksi sehingga tepat satu jalur dijalankan. Dalam activity model, business rule menentukan kriteria percabangan gateway; dalam structure model, business rule menentukan multiplicity dan constraint referential integrity."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "medium",
    "q": "Sebuah tabel memenuhi aturan Atomic Attribute (First Normal Form/1NF) apabila...",
    "options": [
      "Setiap tabel memiliki minimal satu linking table",
      "Setiap sel berisi tepat satu nilai skalar; repeating group, atribut bernilai banyak, dan array dalam satu sel dilarang",
      "Urutan baris dan kolom dapat diatur ulang tanpa mengubah makna",
      "Primary key tidak pernah null dan selalu unik"
    ],
    "answer": 1,
    "explanation": "Atomic Attribute (1NF) mensyaratkan tepat satu nilai per sel; contoh pelanggaran: beberapa nomor telepon dalam satu field. Primary key yang tidak null dan unik adalah Entity Integrity, sedangkan urutan baris/kolom yang tidak memengaruhi makna adalah Order Independence."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "medium",
    "q": "Aturan Referential Integrity dalam database relasional menegaskan bahwa...",
    "options": [
      "Nilai foreign key harus cocok dengan primary key yang ada di tabel induk, atau null bila partisipasi dalam relasi bersifat opsional",
      "Setiap record diidentifikasi berdasarkan posisi fisik barisnya",
      "Setiap sel hanya boleh berisi satu nilai",
      "Setiap tabel wajib memiliki composite primary key"
    ],
    "answer": 0,
    "explanation": "Record Sales dengan Customer_ID = 999 padahal tidak ada pelanggan 999 di tabel Customer adalah orphan record yang melanggar referential integrity. Perbaikan: tolak orphan record dan batasi penghapusan induk yang masih dirujuk. Dropdown combo box pada form membatasi isian foreign key hanya pada primary key yang sudah ada."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "medium",
    "q": "Karakteristik arsitektur utama Enterprise Resource Planning (ERP) seperti SAP S/4HANA adalah...",
    "options": [
      "Setiap departemen memiliki database terpisah yang tidak saling terhubung",
      "Batch posting periodik menggantikan pemrosesan transaksi berkelanjutan",
      "Satu database relasional pusat yang mengintegrasikan fungsi bisnis; pada SAP ERP terdiri atas lebih dari 10,000 tabel relasional yang saling terhubung",
      "ERP otomatis memperbaiki proses bisnis yang tidak efisien"
    ],
    "answer": 2,
    "explanation": "ERP menggantikan sistem departemen yang terisolasi dengan satu repositori data. Manfaat informasinya: Completeness, Transparency (penerimaan persediaan langsung memperbarui utang usaha dan penilaian persediaan), dan Timeliness (batch posting periodik diganti pemrosesan transaksi berkelanjutan). Mengotomatiskan proses yang buruk hanya menghasilkan inefisiensi yang otomatis dan mahal."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "advanced",
    "q": "Tabel Cash_Receipt berisi Receipt 1001 (Customer 101, 120.00), Receipt 1002 (Customer 102, 350.00), dan Receipt 1003 (Customer 101, 80.00). Kueri `SELECT Customer_ID, SUM(Amount) FROM Cash_Receipt GROUP BY Customer_ID HAVING SUM(Amount) > 200.00;` mengembalikan...",
    "options": [
      "Customer 101 dan Customer 102",
      "Hanya Customer 101 dengan total 200.00",
      "Tidak ada baris karena HAVING harus ditulis sebelum GROUP BY",
      "Hanya Customer 102 dengan total 350.00"
    ],
    "answer": 3,
    "explanation": "GROUP BY menghasilkan Customer 101 = 120.00 + 80.00 = 200.00 dan Customer 102 = 350.00. HAVING menyaring kelompok setelah agregasi; karena kondisinya lebih besar dari 200.00 (bukan lebih besar atau sama dengan), Customer 101 tidak lolos. WHERE menyaring baris individual sebelum agregasi."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "advanced",
    "q": "Di SAP ERP, petugas gudang mencatat goods receipt bahan baku senilai \\$15,000 atas Purchase Order #45001 (ilustrasi TM5). Posting otomatis yang terbentuk di modul FI adalah...",
    "options": [
      "Dr Raw Materials Inventory \\$15,000; Cr GR/IR Clearing Account \\$15,000",
      "Dr Accounts Payable \\$15,000; Cr Cash \\$15,000",
      "Dr Cost of Goods Sold \\$15,000; Cr Raw Materials Inventory \\$15,000",
      "Tidak ada posting sampai akuntan membuat jurnal manual"
    ],
    "answer": 0,
    "explanation": "Goods receipt di modul MM (Materials Management) memicu posting otomatis real time di modul FI (Financial Accounting) tanpa jurnal manual. Keunggulan kontrol: kewajiban yang belum tercatat dicegah dan three-way match dipastikan sebelum kas dikeluarkan."
  },
  {
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "difficulty": "medium",
    "q": "Dalam model REA Sales and Collections, klasifikasi agent yang tepat untuk transaksi penerimaan kas dari pelanggan adalah...",
    "options": [
      "Kasir sebagai internal agent (Employees) dan pelanggan sebagai external agent (Customers)",
      "Bank Accounts sebagai internal agent dan kasir sebagai external agent",
      "Pelanggan sebagai internal agent dan salesperson sebagai external agent",
      "Cash_Receipts sebagai agent dan Customers sebagai event"
    ],
    "answer": 0,
    "explanation": "TM6: Agents = Customers (eksternal: pembeli yang memesan dan membayar) dan Employees (internal: salesperson, staf gudang, dan kasir). Cash (Bank Accounts) adalah resource; Quotes, Orders, dan Cash_Receipts adalah events."
  },
  {
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "difficulty": "medium",
    "q": "Dalam siklus Order-to-Cash, kapan pendapatan dan COGS diakui?",
    "options": [
      "Saat quote diberikan kepada calon pembeli",
      "Saat sales order diterima atau ditandatangani",
      "Saat barang diserahkan dan kewajiban kinerja terpenuhi",
      "Saat kas disetor ke rekening bank perusahaan"
    ],
    "answer": 2,
    "explanation": "Quote tidak menimbulkan komitmen hukum maupun dampak akuntansi; sales order adalah kontrak eksekutori yang belum memicu pengakuan pendapatan. Saat barang diserahkan, hak milik dan risiko kerugian berpindah: Dr Accounts Receivable, Cr Sales Revenue; Dr Cost of Goods Sold, Cr Merchandise Inventory."
  },
  {
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "difficulty": "advanced",
    "q": "Sunset Graphics menagih invoice \\$1,200.00 dengan termin 2/10, net 30, dan klien membayar dalam periode diskon. Jurnal penerimaan kasnya adalah...",
    "options": [
      "Dr Cash \\$1,200.00; Cr Accounts Receivable \\$1,200.00",
      "Dr Cash \\$1,176.00; Dr Sales Discounts \\$24.00; Cr Accounts Receivable \\$1,200.00",
      "Dr Cash \\$1,176.00; Cr Accounts Receivable \\$1,176.00",
      "Dr Cash \\$1,176.00; Dr Sales Revenue \\$24.00; Cr Accounts Receivable \\$1,200.00"
    ],
    "answer": 1,
    "explanation": "Potongan = \\$1,200.00 × 0.02 = \\$24.00; kas diterima = \\$1,176.00. Piutang dihapus penuh sebesar jumlah bruto, dan Sales Discounts adalah akun kontra-pendapatan yang mengurangi Net Sales. Jika pelanggan membayar setelah periode diskon, jurnalnya Dr Cash (bruto), Cr Accounts Receivable (bruto)."
  },
  {
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "difficulty": "medium",
    "q": "Sistem menolak entri pesanan dengan Delivery_Date lebih awal dari Order_Date. Application control ini adalah...",
    "options": [
      "Field Check",
      "Validity Check",
      "Range Check",
      "Reasonableness Check"
    ],
    "answer": 3,
    "explanation": "Reasonableness Check mengevaluasi logika kontekstual antar-field. Field Check menegakkan tipe data yang valid; Validity Check memastikan kode ada di tabel master (Customer_Number ada di Customers); Range Check menguji batas bawah dan batas atas (kuantitas antara 1 dan 10,000 unit)."
  },
  {
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "difficulty": "advanced",
    "q": "Dalam database relasional berbasis REA, bagaimana saldo Accounts Receivable diperoleh?",
    "options": [
      "Disimpan sebagai saldo statis di tabel master Customers",
      "Diturunkan secara dinamis dari pesanan terkirim dikurangi penerimaan kas yang diterapkan (Amount_Applied)",
      "Diambil dari kolom Credit_Limit di tabel Customers",
      "Dihitung dari jumlah Quotes dikurangi jumlah Orders"
    ],
    "answer": 1,
    "explanation": "A/R = Σ Delivered Orders − Σ Applied Cash Receipts. Orders yang sudah diserahkan tetapi belum memiliki Cash_Receipts terkait adalah piutang terbuka. Karena tidak ada saldo statis, redundansi dan saldo yang saling bertentangan hilang. Amount_Applied disimpan di linking table Order_Cash_Receipts."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "medium",
    "q": "Prinsip Economic Duality (Appendix A TM7) menyatakan bahwa...",
    "options": [
      "Setiap debit harus diimbangi kredit dengan nominal yang sama",
      "Setiap event ekonomi berpasangan dengan event timbal baliknya: penjualan memberi Inventory dan menerima Cash, pembelian memberi Cash dan menerima Inventory",
      "Setiap agent internal harus diawasi dua agent eksternal",
      "Setiap resource harus dicatat di dua rekening bank"
    ],
    "answer": 1,
    "explanation": "Dualitas ekonomi menghubungkan give dan get. Sales and Collections: give Inventory, get Cash. Purchases and Payments: give Cash, get Inventory."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "medium",
    "q": "Dalam model REA Procure-to-Pay, manakah yang termasuk RESOURCE?",
    "options": [
      "Receipts (Goods Receipts)",
      "Suppliers / Vendors",
      "Raw Materials Inventory",
      "Buyer (Employees)"
    ],
    "answer": 2,
    "explanation": "Resources Procure-to-Pay: Inventory (Raw Materials / Merchandise) dan Cash (Bank Accounts). Receipts adalah event perolehan fisik yang memicu liabilitas dan Purchase_Orders adalah commitment event; Suppliers / Vendors adalah agent eksternal; buyer, receiving clerk, dan kasir adalah agent internal (Employees)."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "advanced",
    "q": "Mengapa salinan purchase order yang dikirim ke receiving dock dibuat sebagai blind purchase order?",
    "options": [
      "Agar petugas receiving melakukan hitung fisik sungguhan karena kolom kuantitas dihitamkan, sehingga short shipment tidak lolos tanpa tercatat",
      "Agar vendor tidak mengetahui harga yang disepakati",
      "Agar barang yang diterima tidak perlu dicatat di receiving report",
      "Agar Accounts Payable dapat membayar tanpa invoice vendor"
    ],
    "answer": 0,
    "explanation": "Blind PO dikirim ke receiving dock, bukan ke vendor, dengan kolom kuantitas yang dihitamkan. Petugas receiving terpaksa menghitung fisik alih-alih sekadar mencentang kuantitas. Blind PO termasuk kontrol preventive dalam Procure-to-Pay."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "medium",
    "q": "Tiga dokumen yang dibandingkan Accounts Payable dalam Three-Way Match sebelum invoice vendor disetujui untuk dibayar adalah...",
    "options": [
      "Purchase requisition, debit memo, dan remittance advice",
      "Sales Order, Picking Ticket, dan Bill of Lading",
      "Receiving Report, cek, dan statement bank",
      "Purchase Order, Receiving Report, dan Vendor Invoice"
    ],
    "answer": 3,
    "explanation": "Purchase Order (internal, Purchasing / Buyer) membuktikan otorisasi pembelian; Receiving Report (internal, Warehouse Receiving) membuktikan penerimaan fisik; Vendor Invoice (eksternal, Supplier) membuktikan jumlah yang ditagih. Jika ada selisih kuantitas, harga, atau termin, invoice langsung ditahan (administrative hold) sampai diselesaikan dengan supplier."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "advanced",
    "q": "Approved Vendor List mewajibkan vendor baru disetujui manajemen pengadaan yang independen, diverifikasi nomor pajaknya (TIN/NPWP), dan divalidasi alamat fisiknya. Skema fraud yang dicegah kontrol ini adalah...",
    "options": [
      "Duplicate Payments",
      "Shell Company Invoicing",
      "Purchasing Kickbacks",
      "Lapping piutang"
    ],
    "answer": 1,
    "explanation": "Shell Company Invoicing: karyawan tidak jujur membuat entitas vendor fiktif untuk menagih jasa yang tidak pernah ada. Purchasing Kickbacks dicegah dengan pemilihan vendor dari AVL, Three-Way Match atas harga PO, dan pemisahan Purchasing dari Receiving serta Accounts Payable. Duplicate Payments dicegah dengan Three-Way Match per transaksi dan pemulihan pembayaran ganda secara otomatis."
  }
];

export const SII306_QUIZ_UAS: QuizQuestion[] = [
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

export const SII306_QUIZ: QuizQuestion[] = [...SII306_QUIZ_UTS, ...SII306_QUIZ_UAS];

export const AKS301_QUIZ_UTS = SII306_QUIZ_UTS;
export const AKS301_QUIZ_UAS = SII306_QUIZ_UAS;
export const AKS301_QUIZ = SII306_QUIZ;

