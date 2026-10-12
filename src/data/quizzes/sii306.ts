// src/data/quizzes/sii306.ts
// Bank kuis Sistem Informasi Akuntansi (SII306): pilihan tunggal, jamak, dan isian singkat.
// Berdasarkan Vernon J. Richardson et al. (4th ISE ed. 2023), Romney & Steinbart (15e),
// COSO Internal Control (2013), dan ISACA COBIT 2019 Framework.
// 105 soal: 70 Pra-UTS (TM 1-7) dan 35 Pra-UAS (TM 8-14).
// Pra-UTS (TM 1-7) hanya memakai bacaan kanonik src/data/sia/modules/tm1.ts-tm7.ts.
import type { QuizQuestion } from '../../types';
import { SIA_UTS_SUPPLEMENT } from './siaUtsSupplement';

export const SII306_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "medium",
    "q": "Laporan piutang membantu memprediksi kas masuk, tetapi sengaja menghilangkan pelanggan yang menunggak agar hasil tampak baik. Penilaian kualitas informasinya adalah...",
    "options": [
      "Relevance dan faithful representation sama-sama kuat karena laporan berguna untuk prediksi",
      "Relevance mungkin ada, tetapi faithful representation lemah karena informasi tidak lengkap dan tidak netral",
      "Comparability saja cukup; penghilangan pelanggan tidak memengaruhi kualitas lain",
      "Timeliness lemah hanya jika laporan dibuat sebelum semua pelanggan membayar"
    ],
    "answer": 1,
    "explanation": "Daya prediksi membuat laporan relevan, tetapi menghapus penunggak secara sengaja membuatnya tidak lengkap dan bias, sehingga faithful representation gagal. Relevansi tidak menebus bias; comparability saja tidak cukup; tanggal pembayaran bukan ukuran tunggal ketepatan waktu laporan."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "medium",
    "q": "Produsen sepeda memindai komponen yang baru tiba, mencatat jumlah fisiknya, lalu menyimpannya sebelum perakitan. Aktivitas utama rantai nilai yang sedang berlangsung adalah...",
    "options": [
      "Inbound Logistics",
      "Operations",
      "Outbound Logistics",
      "Procurement"
    ],
    "answer": 0,
    "explanation": "Penerimaan dan penyimpanan input sebelum perakitan adalah inbound logistics. Operations baru terjadi saat komponen diubah menjadi sepeda; outbound logistics mengirim barang jadi; procurement memilih dan membeli input sebagai aktivitas pendukung."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "advanced",
    "q": "A manager receives so much raw data that decisions slow down and important signals are obscured. What does this illustrate?",
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
    "q": "A cashier scans each item's code, quantity, and sale time. The manager must decide which products to reorder. Which AIS output turns those transactions into useful information?",
    "options": [
      "A list of every scanned item code without stock balances or reorder points",
      "A timeline of scans with no link to specific products",
      "A count of transaction lines by cashier with no link to inventory",
      "A list of SKUs whose stock falls below their reorder points after the sales are recorded"
    ],
    "answer": 3,
    "explanation": "Kode, jumlah, dan waktu adalah data transaksi. Setelah SIA menghubungkannya dengan saldo serta reorder point, daftar SKU yang perlu tindakan menjadi information. Opsi lain hanya menyajikan data atau agregat yang belum menjawab keputusan pemesanan ulang."
  },
  {
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "difficulty": "advanced",
    "q": "A company is considering a discretionary information system. Using V = B − C, which decision rule applies?",
    "options": [
      "Accept if V > 0; reject if V ≤ 0",
      "Add benefits and costs; accept if the sum exceeds the software cost",
      "Subtract benefits from costs; accept if costs exceed benefits",
      "Reject every system with V ≤ 0, including a mandatory system"
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
    "q": "An auditor compares Field 14 (Entered_By) with Field 17 (Approved_By) in an AICPA Audit Data Standards general ledger export. Both fields contain user VR for four journal entries. What should the auditor conclude?",
    "options": [
      "All four entries were self-approved, violating separation of preparer and approver duties",
      "There is no concern because VR is an authorized entry clerk",
      "The Reversal_Indicator for all four entries must be changed to 2",
      "The Amount_Credit_Debit_Indicator for all four entries was entered incorrectly"
    ],
    "answer": 0,
    "explanation": "User yang sama pada Entered_By dan Approved_By menandai self-approval dan lemahnya pemisahan tugas. Auditor perlu memeriksa otorisasi serta bukti transaksi; pembalikan jurnal hanya dilakukan jika transaksi terbukti salah, bukan otomatis dari kecocokan nama. Batasi hak akses dan blok persetujuan sendiri untuk mencegah pengulangan."
  },
  {
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "difficulty": "medium",
    "q": "An analyst uses Goal Seek to find how many units of Product A must be sold for Net Income = 0. Which type of analytics is this?",
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
    "q": "A manufacturing client has X₁ = 0.250, X₂ = 0.100, X₃ = 0.050, X₄ = 0.500, and X₅ = 1.100. Using Z = 1.2X₁ + 1.4X₂ + 3.3X₃ + 0.6X₄ + 1.0X₅, what are its score and classification?",
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
    "q": "Why can a process map with swimlanes help assess controls over financial reporting under SOX Section 404?",
    "options": [
      "It shows steps, owners, and control points so management can assess ICFR and auditors can trace transactions",
      "A polished diagram alone proves that controls operate effectively without transaction testing",
      "Job titles on swimlanes remove the need to examine authorization and exception evidence",
      "Process documentation matters only for manual work, not approvals performed in an ERP system"
    ],
    "answer": 0,
    "explanation": "Diagram mutakhir membantu menelusuri transaksi dari awal hingga laporan dan melihat pemisahan otorisasi, penyimpanan aset, serta pencatatan. Efektivitas operasi tetap perlu diuji dengan bukti; jabatan saja tidak menunjukkan keputusan pengecualian; alur ERP juga memerlukan dokumentasi. Manajemen menilai ICFR, sedangkan kewajiban atestasi auditor eksternal bergantung pada ketentuan perusahaan."
  },
  {
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "difficulty": "medium",
    "q": "In BPMN 2.0, what does a circle with a double-line border represent?",
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
    "q": "In a swimlane diagram, the Warehouse lane both authorizes purchase orders and has custody of the goods received. Which control weakness does this reveal?",
    "options": [
      "An entity-integrity violation because the purchase order primary key is blank",
      "A segregation-of-duties violation because the same lane has authorization and custody",
      "A black hole in a data flow diagram",
      "A violation of the active-verb-plus-noun naming rule"
    ],
    "answer": 1,
    "explanation": "Fungsi yang dipisahkan: Authorization (menyetujui transaksi), Custody (memegang aset fisik atau kas), Recording (memposting jurnal atau memperbarui ledger), dan Reconciliation (mencocokkan catatan dengan aset fisik). Kelemahan kontrol terlihat ketika satu swimlane menjalankan authorization dan custody, atau custody dan recording, sekaligus."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "medium",
    "q": "Pada model toko, Inventory berkurang saat Sales dicatat, dan Customer berpartisipasi dalam Sales. Pengelompokan ketiga class menurut REA adalah...",
    "options": [
      "Inventory = event; Sales = agent; Customer = resource",
      "Inventory = agent; Sales = resource; Customer = event",
      "Inventory = resource; Sales = event; Customer = agent",
      "Inventory = resource; Sales = agent; Customer = event"
    ],
    "answer": 2,
    "explanation": "Inventory adalah resource bernilai ekonomi; Sales adalah event yang mengubah resource; Customer adalah agent eksternal yang berpartisipasi. Opsi lain menukar peran pelaku, aset, dan kejadian sehingga hubungan REA tidak dapat ditafsirkan dengan benar."
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
    "q": "Each department has one or more employees, and each employee belongs to exactly one department. Where should the foreign key be placed?",
    "options": [
      "Department_ID as a foreign key in Employee",
      "Employee_ID as a foreign key in Department",
      "A Department_Employee linking table with a composite primary key",
      "Post Department_ID and Employee_ID as foreign keys in both tables"
    ],
    "answer": 0,
    "explanation": "Department berada di sisi \"1\" (1..1) dan Employee di sisi \"many\" (1..\\*). Aturan 1:N: primary key sisi \"1\" diposting sebagai foreign key di sisi \"many\", sehingga Department_ID menjadi foreign key di tabel Employee. Linking table hanya diperlukan untuk M:N."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "medium",
    "q": "A Sales_Invoice consists of Invoice_Line_Items; deleting the invoice also deletes its lines. What association and notation describe this relationship?",
    "options": [
      "Aggregation: a hollow diamond at the parent class",
      "Generalization: a hollow triangle pointing to the superclass",
      "Ordinary association: a solid line labeled with an active verb",
      "Composition: a filled black diamond at the parent class"
    ],
    "answer": 3,
    "explanation": "Composition adalah hubungan bagian–keseluruhan yang ketat: baris item tidak bermakna tanpa invoice induknya, dan UML menaruh diamond hitam pada sisi induk. Penghapusan berantai dapat menjadi aturan implementasi, tetapi tidak otomatis diwajibkan oleh simbol UML. Aggregation lebih longgar; generalization menyatakan relasi is-a."
  },
  {
    "tm": 4,
    "topic": "Data Modeling",
    "difficulty": "advanced",
    "q": "In a BPMN model, purchase requisitions of \\$5,000 or less proceed automatically to PO creation, while those above \\$5,000 go to the department head for authorization. Which element implements this business rule?",
    "options": [
      "Exclusive Gateway (XOR)",
      "Parallel Gateway (AND)",
      "Message Flow between pools",
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
    "q": "Warehouse staff record a materials receipt in the ERP system, and accounting immediately sees its effect without reentering the transaction. What system design enables this?",
    "options": [
      "Warehouse and accounting keep separate transactions and reconcile them monthly",
      "Warehouse emails a spreadsheet for accounting to post manually",
      "Integrated transaction data let related modules use the same receipt reference",
      "Each module assigns a new receipt number so departmental data stay separate"
    ],
    "answer": 2,
    "explanation": "Integrasi ERP memungkinkan receipt yang sama dipakai modul gudang dan akuntansi, memperbaiki timeliness serta konsistensi data. Spreadsheet atau database terpisah memerlukan entri ulang dan rekonsiliasi; nomor receipt yang berbeda memutus jejak antarmodul. Integrasi tetap memerlukan kontrol proses yang baik."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "advanced",
    "q": "Cash_Receipt contains Receipt 1001 (Customer 101, 120.00), Receipt 1002 (Customer 102, 350.00), and Receipt 1003 (Customer 101, 80.00). What does `SELECT Customer_ID, SUM(Amount) FROM Cash_Receipt GROUP BY Customer_ID HAVING SUM(Amount) > 200.00;` return?",
    "options": [
      "Customer 101 and Customer 102",
      "Only Customer 101, totaling 200.00",
      "No rows, because HAVING must precede GROUP BY",
      "Only Customer 102, totaling 350.00"
    ],
    "answer": 3,
    "explanation": "GROUP BY menghasilkan Customer 101 = 120.00 + 80.00 = 200.00 dan Customer 102 = 350.00. HAVING menyaring kelompok setelah agregasi; karena kondisinya lebih besar dari 200.00 (bukan lebih besar atau sama dengan), Customer 101 tidak lolos. WHERE menyaring baris individual sebelum agregasi."
  },
  {
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "difficulty": "advanced",
    "q": "In SAP ERP, a warehouse employee records a \\$15,000 raw-materials goods receipt against Purchase Order #45001. What automatic posting does the FI module make?",
    "options": [
      "Dr Raw Materials Inventory \\$15,000; Cr GR/IR Clearing Account \\$15,000",
      "Dr Accounts Payable \\$15,000; Cr Cash \\$15,000",
      "Dr Cost of Goods Sold \\$15,000; Cr Raw Materials Inventory \\$15,000",
      "No posting until an accountant creates a manual journal entry"
    ],
    "answer": 0,
    "explanation": "Goods receipt di modul MM (Materials Management) dapat memicu Dr Inventory dan Cr GR/IR clearing di FI. Akun GR/IR menunggu pencocokan dengan invoice pemasok; three-way match PO, bukti terima, dan invoice baru dilakukan ketika invoice diproses sebelum pembayaran. Penerimaan barang saja belum membuktikan kecocokan ketiga dokumen."
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
    "explanation": "Quote dan sales order belum membuktikan bahwa kewajiban kinerja telah dipenuhi. Untuk kasus penjualan barang ini, saat kendali barang berpindah kepada pelanggan, catat piutang dan pendapatan serta beban pokok dan penurunan persediaan. Setoran kas belakangan melunasi piutang; waktu pengakuan bisa berbeda jika syarat kontraknya berbeda."
  },
  {
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "difficulty": "advanced",
    "q": "Sunset Graphics invoices a client \\$1,200.00 on terms 2/10, net 30. The client pays within the discount period. What journal entry records the cash receipt?",
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
    "q": "A system rejects an order whose Delivery_Date precedes its Order_Date. Which application control is this?",
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
    "q": "In an REA-based relational database, how is the Accounts Receivable balance obtained?",
    "options": [
      "Store it as a static balance in the Customers master table",
      "Derive it from delivered orders less the cash receipts applied to them (Amount_Applied)",
      "Read it from the Credit_Limit column in Customers",
      "Subtract the number of Orders from the number of Quotes"
    ],
    "answer": 1,
    "explanation": "A/R diturunkan dari nilai penjualan yang sudah menghasilkan tagihan, dikurangi penerimaan kas yang diterapkan serta penyesuaian seperti retur atau diskon. Pesanan yang belum dipenuhi bukan piutang. Amount_Applied dapat berada di tabel penghubung penjualan dan penerimaan kas; Credit_Limit hanya batas kredit, bukan saldo."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "medium",
    "q": "Pada pembelian kredit, toko menerima persediaan hari ini dan membayar pemasok pekan depan. Pasangan peristiwa mana menggambarkan economic duality dalam REA?",
    "options": [
      "Persetujuan PO dan pembuatan salinan PO sebagai dua event ekonomi",
      "Penerimaan Inventory dan pembayaran Cash sebagai event get dan give yang berpasangan",
      "Pencatatan invoice vendor dan pengarsipan salinannya sebagai event get dan give",
      "Pembuatan vendor baru dan persetujuan limit kredit sebagai pertukaran resource"
    ],
    "answer": 1,
    "explanation": "Dalam pembelian, perusahaan memperoleh Inventory (get) dan menyerahkan Cash (give), walaupun kedua event dapat terjadi pada hari berbeda. PO adalah komitmen, sedangkan salinan dokumen dan arsip invoice bukan penyerahan resource ekonomi. Pembuatan vendor pun bukan pertukaran barang dengan kas."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "medium",
    "q": "Dalam model pembelian bahan, receiving clerk mencatat barang yang diterima dari supplier, lalu kasir membayar. Class mana yang merupakan resource pada proses ini?",
    "options": [
      "Receipts (Goods Receipts)",
      "Suppliers / Vendors",
      "Raw Materials Inventory",
      "Buyer (Employees)"
    ],
    "answer": 2,
    "explanation": "Raw Materials Inventory adalah resource yang diperoleh. Goods Receipt ialah event penerimaan; Supplier adalah agent eksternal; Buyer dan receiving clerk ialah agent internal. Cash juga resource, tetapi tidak ada sebagai pilihan dalam soal ini."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "advanced",
    "q": "Why does the receiving dock use a blind copy of the purchase order?",
    "options": [
      "Hiding the ordered quantity prompts staff to count goods physically and record short shipments",
      "It prevents the vendor from seeing the agreed price",
      "It removes the need to record received goods in a receiving report",
      "It allows Accounts Payable to pay without a vendor invoice"
    ],
    "answer": 0,
    "explanation": "Blind PO dikirim ke receiving dock, bukan ke vendor, dengan kolom kuantitas yang dihitamkan. Petugas receiving terpaksa menghitung fisik alih-alih sekadar mencentang kuantitas. Blind PO termasuk kontrol preventive dalam Procure-to-Pay."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "medium",
    "q": "Before approving a vendor invoice for payment, which three documents does Accounts Payable compare in a three-way match?",
    "options": [
      "Purchase requisition, debit memo, and remittance advice",
      "Sales order, picking ticket, and bill of lading",
      "Receiving report, check, and bank statement",
      "Purchase order, receiving report, and vendor invoice"
    ],
    "answer": 3,
    "explanation": "Purchase Order (internal, Purchasing / Buyer) membuktikan otorisasi pembelian; Receiving Report (internal, Warehouse Receiving) membuktikan penerimaan fisik; Vendor Invoice (eksternal, Supplier) membuktikan jumlah yang ditagih. Jika ada selisih kuantitas, harga, atau termin, invoice langsung ditahan (administrative hold) sampai diselesaikan dengan supplier."
  },
  {
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "difficulty": "advanced",
    "q": "An Approved Vendor List requires independent procurement management to approve new vendors, verify their tax IDs (TIN/NPWP), and validate their physical addresses. Which fraud scheme does this control chiefly deter?",
    "options": [
      "Duplicate payments",
      "Shell-company invoicing",
      "Purchasing kickbacks",
      "Lapping of receivables"
    ],
    "answer": 1,
    "explanation": "Verifikasi independen identitas dan alamat vendor terutama menghambat penagihan melalui vendor fiktif (shell company). AVL saja tidak menghapus risiko kickback; tender dan telaah independen tetap diperlukan. Pembayaran ganda memerlukan pemeriksaan nomor invoice unik serta status pembayaran, sedangkan lapping berkaitan dengan penerimaan piutang pelanggan."
  },
  ...SIA_UTS_SUPPLEMENT,
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
    "q": "Apa pembeda audit around dan through the computer dalam pemeriksaan AIS?",
    "options": [
      "Around menguji kode program, sedangkan through hanya membandingkan total laporan.",
      "Around berfokus input dan output, sedangkan through juga menguji proses di sistem.",
      "Around menguji seluruh proses, sedangkan through hanya membaca dokumen input.",
      "Around membuktikan semua kontrol, sedangkan through hanya menguji saldo akun."
    ],
    "answer": 1,
    "explanation": "Perbedaan terletak pada apakah pemrosesan di dalam sistem juga diuji. Pemilihan prosedur tetap mengikuti risiko dan bukti yang diperlukan. Rujukan: Richardson AIS 4e, Ch.13, Computer-Assisted Audit Techniques, PDF 480-488."
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
      "Mencocokkan nomor faktur, vendor, tanggal dan nominal, lalu meninjau kandidat duplikat.",
      "Meregresikan laba terhadap penjualan, lalu menilai perubahan tren laba tahunan.",
      "Meringkas pembayaran per bulan, lalu menilai apakah total tahun sama dengan anggaran.",
      "Mengurutkan vendor menurut saldo akhir, lalu menguji vendor dengan saldo terbesar."
    ],
    "answer": 0,
    "explanation": "Pencocokan tepat dan fuzzy dapat menemukan kandidat ganda. Kandidat tetap diperiksa terhadap transaksi asli; kemiripan field tidak otomatis membuktikan pembayaran ganda. Rujukan: Richardson AIS 4e, Ch.3, Exploratory Data Analysis, PDF 135-151."
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
      "Attended dipicu/didampingi pengguna; unattended berjalan menurut pemicu terjadwal.",
      "Attended dijadwalkan di server; unattended selalu menunggu klik pengguna desktop.",
      "Attended beroperasi tanpa pengguna; unattended meminta pengguna pada setiap langkah.",
      "Attended dan unattended sama-sama harus dipicu manual dari sesi pengguna desktop."
    ],
    "answer": 0,
    "explanation": "Pembedaan berkaitan dengan interaksi pengguna dan cara pemicu dijalankan. Bot tetap memerlukan otorisasi, pemantauan, penanganan pengecualian dan pemeliharaan. Istilah ini memakai sumber vendor sebagai pelengkap buku. Rujukan: UiPath Overview, Attended vs. Unattended automation, bagian Attended Automations dan Unattended Automations, https://docs.uipath.com/overview/other/latest/overview/attended-vs-unattended-automation, dibaca 12 Oktober 2026; Richardson AIS 4e Ch.15 memberi konteks otomasi."
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
      "Bot memastikan format input selalu sama sehingga pengujian perubahan dapat dihentikan.",
      "Perubahan format input tanpa pembaruan bot dapat menghasilkan kesalahan berulang.",
      "Bot mengurangi risiko input sehingga seluruh otorisasi transaksi dapat dihapuskan.",
      "Bot membuat laporan akhir benar sehingga jejak transaksi tidak perlu disimpan."
    ],
    "answer": 1,
    "explanation": "Perubahan input atau antarmuka dapat membuat aturan bot salah diterapkan berulang. Change control, testing dan pemantauan pengecualian tetap diperlukan. Rujukan: Richardson AIS 4e, Ch.15, Automation dan RPA, PDF 539-541."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "medium",
    "q": "Dalam arsitektur blockchain, elemen mana yang menghubungkan blok dengan catatan blok sebelumnya? Rujukan: Richardson AIS 4e, hal. 497-499 (PDF 522-524).",
    "options": [
      "Alamat jaringan validator saat ini",
      "Hash Pointer / Previous Block Hash",
      "Kunci privat milik penerima transaksi",
      "Jumlah saldo agregat seluruh transaksi"
    ],
    "answer": 1,
    "explanation": "Previous hash mengikat data blok sebelumnya. Perubahan data mengubah digest, sehingga validasi hubungan perlu diperiksa ulang. Alamat jaringan dan saldo bukan pengganti hubungan hash; kunci privat tidak disalin sebagai tautan antarbIok. Rujukan: Richardson AIS 4e, hal. 497-499 (PDF 522-524)."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "advanced",
    "q": "Apa peran tambahan pada konsep triple-entry Ian Grigg? Sumber pelengkap primer: Grigg (2005), bagian The Initial Role of a Receipt dan Triple Entry.",
    "options": [
      "Menyediakan akun debit ketiga untuk setiap transaksi",
      "Menyediakan tanda terima bertanda tangan sebagai bukti bersama",
      "Menghapus pencatatan lokal setelah validator menyetujui transaksi",
      "Menggantikan pemeriksaan nilai aset dengan verifikasi tanda tangan"
    ],
    "answer": 1,
    "explanation": "Grigg menjelaskan tanda terima bersama yang mendukung catatan pihak terkait. Paper tahun 2005 itu tidak mensyaratkan public blockchain modern. Tanda terima tidak menetapkan satu jurnal universal atau menggantikan pengujian nilai aset. Sumber pelengkap primer: [Grigg (2005), The Initial Role of a Receipt dan Triple Entry](https://iang.org/papers/triple_entry.html)."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "advanced",
    "q": "Kode yang menjalankan tindakan ketika kondisi kontrak terpenuhi disebut apa? Rujukan: Richardson AIS 4e, Ch. 15, Blockchain Applications, hal. 504-507 (PDF 529-532).",
    "options": [
      "Electronic data interchange protocol",
      "Smart contract execution code",
      "Virtual private network tunnel",
      "Relational database query view"
    ],
    "answer": 1,
    "explanation": "Smart contract mengeksekusi kode berdasarkan kondisi yang didefinisikan. Jika syarat bergantung pada sensor atau data luar, keandalan input itu tetap perlu diuji. EDI bertukar dokumen, VPN menghubungkan jaringan dan view menyajikan hasil query. Rujukan: Richardson AIS 4e, Ch. 15, Blockchain Applications, hal. 504-507 (PDF 529-532)."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "medium",
    "q": "Apa manfaat utama immutability bagi pemeriksaan catatan? Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532).",
    "options": [
      "Memberi bukti bahwa nilai wajar aset selalu benar",
      "Membantu menelusuri perubahan melalui hash dan validasi jaringan",
      "Menghilangkan kebutuhan menguji otorisasi transaksi oleh pelanggan",
      "Menjamin seluruh transaksi dunia nyata masuk ke ledger"
    ],
    "answer": 1,
    "explanation": "Hash dan validasi jaringan membuat perubahan catatan lebih mudah ditelusuri. Risiko manipulasi dan kesalahan input tetap perlu diuji; validasi ledger tidak membuktikan keberadaan atau nilai transaksi dunia nyata. Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532)."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "advanced",
    "q": "Mengapa validasi ledger belum cukup sebagai bukti semua asersi laporan keuangan? Rujukan: Richardson AIS 4e, hal. 507 (PDF 532).",
    "options": [
      "Karena pemeriksaan ledger sepenuhnya menggantikan asersi keberadaan aset",
      "Karena catatan tervalidasi belum membuktikan hak dan nilai transaksi",
      "Karena jumlah validator langsung menentukan kewajaran laporan keuangan",
      "Karena bentuk hash menentukan klasifikasi akun dan estimasi akuntansi"
    ],
    "answer": 1,
    "explanation": "Validasi jaringan memeriksa catatan menurut aturan jaringan. Kesepakatan fiktif atau nilai aset keliru masih dapat masuk. Auditor perlu bukti keberadaan, hak, kelengkapan dan penilaian, serta memahami kontrol input. Rujukan: Richardson AIS 4e, hal. 507 (PDF 532)."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "medium",
    "q": "Dalam integrated project Richardson, bagaimana model proses dan database mendukung laporan keuangan?",
    "options": [
      "Semua event langsung dijumlahkan sebagai kas tanpa membedakan pembayaran dan penjualan.",
      "Event, resources dan hubungan dipetakan untuk menyiapkan query serta laporan yang sesuai.",
      "Database menggantikan kebutuhan memodelkan kontrol dan menetapkan business requirements.",
      "UML class diagram hanya mengatur tampilan laporan tanpa menghubungkan data antarproses."
    ],
    "answer": 1,
    "explanation": "Buku menghubungkan business requirements, BPMN, integrated UML class diagram, tabel/relasi dan query laporan. Penjualan, pembelian, timecards dan pembayaran mempunyai peran berbeda; integrasi tidak berarti semua event adalah kas. Rujukan: Richardson AIS 4e, Ch.10, Exhibit 10.8 dan Summary, PDF 408-410."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "advanced",
    "q": "Konsep 'Audit Trail' (Jejak Audit) dalam sistem ERP akuntansi modern berfungsi untuk...",
    "options": [
      "Mengurangi volume data dengan menghapus seluruh riwayat setelah laporan ditutup.",
      "Menelusuri pelaku, waktu dan perubahan transaksi untuk pemeriksaan bukti serta kontrol.",
      "Menghilangkan kebutuhan otorisasi karena setiap transaksi sudah tercatat dalam sistem.",
      "Membuktikan isi transaksi benar hanya dari urutan waktu pencatatan dokumen dalam sistem."
    ],
    "answer": 1,
    "explanation": "Jejak audit mendukung penelusuran transaksi dan perubahan. Integritas catatan perlu pengendalian akses; jejak saja tidak membuktikan keberadaan, hak atau nilai transaksi. Rujukan: Richardson AIS 4e, Ch.11-13, Internal Controls dan Auditing AIS, PDF 411-433,475-488."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "advanced",
    "q": "Kontrol preventif apa yang sesuai untuk membatasi penyalahgunaan jurnal manual dalam AIS?",
    "options": [
      "Memberikan akses tanpa batas pada seluruh staf agar koreksi dapat dicatat secepatnya.",
      "Membatasi akses, memisahkan tugas dan mensyaratkan persetujuan serta bukti pendukung.",
      "Menghapus identitas pengguna setelah posting agar data pegawai terlindungi dari pemeriksa.",
      "Menyimpan jurnal tak seimbang sampai akhir tahun agar tim dapat memperbaiki semuanya."
    ],
    "answer": 1,
    "explanation": "Akses yang dibatasi, pemisahan tugas, otorisasi dan bukti membatasi kesempatan manipulasi. Ambang persetujuan mengikuti risiko dan kebijakan; tidak ada larangan universal semua jurnal ke Kas pada sumber ini. Rujukan: Richardson AIS 4e, Ch.11, Control Activities, PDF 411-433."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "medium",
    "q": "Manakah pernyataan yang paling tepat mengenai peranan Chart of Accounts (Bagan Akun Standar) dalam arsitektur sistem informasi akuntansi ERP?",
    "options": [
      "Mengelompokkan akun secara konsisten untuk mencatat transaksi dan menyusun laporan.",
      "Mengelompokkan vendor menurut nama untuk mengizinkan pembayaran tanpa validasi.",
      "Mengelompokkan pengguna menurut unit kerja untuk menggantikan otorisasi transaksi.",
      "Mengelompokkan dokumen menurut tanggal untuk membuktikan nilai seluruh saldo akun."
    ],
    "answer": 0,
    "explanation": "Bagan akun mendukung klasifikasi dan pengikhtisaran transaksi. Daftar akun tidak menggantikan master data, validasi atau kontrol akses. Rujukan: Richardson AIS 4e, Ch.10, Develop Financial Statement Information, PDF 408-410."
  },
  {
    "tm": 14,
    "topic": "Integrasi ERP & Simulasi UAS",
    "difficulty": "advanced",
    "q": "Dalam integrated project Richardson, apa yang perlu dilakukan setelah data diimpor untuk menjaga keandalan query AIS?",
    "options": [
      "Menyusun query dari tabel impor dahulu dan menggunakan nama pelanggan sebagai kunci.",
      "Menetapkan primary key, memeriksa tipe data, lalu menegakkan referential integrity.",
      "Menggabungkan seluruh event dalam satu tabel dan menetapkan tanggal sebagai kunci.",
      "Menyusun laporan dari tabel impor dahulu dan memeriksa hubungan setelah penutupan."
    ],
    "answer": 1,
    "explanation": "PDF 409 mengharuskan koreksi data, primary key, tipe data dan struktur tabel yang efisien, kemudian relasi dengan referential integrity. Tanpa integritas referensial, keandalan query terpengaruh. Langkah ini memakai UML class diagram sebagai blueprint. Rujukan: Richardson AIS 4e, Ch.10, Import Data into Access, Create Efficient Tables, and Set Relationships, PDF 408-409, Exhibit 10.9."
  }
];

export const SII306_QUIZ: QuizQuestion[] = [...SII306_QUIZ_UTS, ...SII306_QUIZ_UAS];

export const AKS301_QUIZ_UTS = SII306_QUIZ_UTS;
export const AKS301_QUIZ_UAS = SII306_QUIZ_UAS;
export const AKS301_QUIZ = SII306_QUIZ;

