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
    "topic": "Conversion Business Process",
    "difficulty": "medium",
    "q": "Saat bahan langsung dikeluarkan untuk produksi dalam sistem perpetual, jurnal yang tepat adalah...",
    "options": [
      "Dr WIP; Cr Raw Materials.",
      "Dr COGS; Cr Cash.",
      "Dr Finished Goods; Cr Revenue.",
      "Dr Accounts Receivable; Cr WIP."
    ],
    "answer": 0,
    "explanation": "Biaya berpindah dari bahan ke WIP; belum otomatis menjadi barang jadi atau HPP. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "tm": 8,
    "topic": "Conversion Business Process",
    "difficulty": "medium",
    "q": "WIP awal 10, DM 30, DL 20, OH dibebankan 10 dan WIP akhir 14 (Rp juta). COGM adalah...",
    "options": [
      "Rp46 juta.",
      "Rp56 juta.",
      "Rp60 juta.",
      "Rp70 juta."
    ],
    "answer": 1,
    "explanation": "COGM = 10 + 30 + 20 + 10 − 14 = 56. WIP akhir belum ditransfer ke barang jadi. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "tm": 8,
    "topic": "Conversion Business Process",
    "difficulty": "medium",
    "q": "Dalam model generik conversion, mengapa WIP tidak harus menjadi kelas resource terpisah?",
    "options": [
      "Karena seluruh biaya produksi harus langsung menjadi beban periode.",
      "Karena WIP hanya berisi bahan yang belum pernah dikeluarkan.",
      "Karena nilainya dapat diturunkan dari biaya event yang belum ditransfer.",
      "Karena ledger tidak boleh mencatat akun persediaan yang belum selesai."
    ],
    "answer": 2,
    "explanation": "Model data dapat menghitung WIP dari biaya material, labor dan overhead pada pekerjaan terbuka. Ini tidak menghapus saldo akuntansi WIP. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "tm": 8,
    "topic": "Conversion Business Process",
    "difficulty": "medium",
    "q": "Satu material issue memuat beberapa bahan, dan satu bahan muncul pada banyak issue. Implementasi relasionalnya adalah...",
    "options": [
      "Menyimpan seluruh nomor bahan dalam satu field berisi daftar.",
      "Menghapus identitas bahan dan menyimpan satu total perusahaan.",
      "Menjadikan tanggal issue sebagai satu-satunya primary key.",
      "Membuat linking table issue–bahan dengan kuantitas per pasangan."
    ],
    "answer": 3,
    "explanation": "Hubungan many-to-many diterapkan melalui linking table; identitas issue dan bahan menjadi referensi yang valid. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "tm": 8,
    "topic": "Conversion Business Process",
    "difficulty": "medium",
    "q": "Pada model Sunset, barang gagal inspeksi dibuang lalu dibuat penggantinya. Model aktivitas harus menunjukkan...",
    "options": [
      "Jalur exception yang kembali ke aktivitas produksi sesuai aturan.",
      "Message flow wajib antarlane dalam satu pool perusahaan.",
      "Penggabungan seluruh hasil cacat ke barang jadi tanpa inspeksi.",
      "End event sebelum hasil inspeksi diketahui atau dicatat."
    ],
    "answer": 0,
    "explanation": "Gateway mengarahkan hasil mutu; loop/exception mengikuti aturan perusahaan. Sequence flow digunakan di dalam pool. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "tm": 9,
    "topic": "Integrated Project",
    "difficulty": "medium",
    "q": "Apa urutan logis integrated project?",
    "options": [
      "Buat tampilan laporan, hapus sumber, lalu tentukan kebutuhan.",
      "Kebutuhan, proses, model data, database, lalu query tervalidasi.",
      "Pasang database, abaikan relasi, lalu kumpulkan pertanyaan.",
      "Jumlahkan seluruh event sebagai kas tanpa pemetaan akun."
    ],
    "answer": 1,
    "explanation": "Business requirements memandu model proses dan data; model menjadi blueprint database dan query. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "tm": 9,
    "topic": "Integrated Project",
    "difficulty": "medium",
    "q": "Setelah impor data, tindakan yang mendukung keandalan query adalah...",
    "options": [
      "Memakai nama pelanggan sebagai PK meskipun duplikat.",
      "Menunda pemeriksaan FK sampai seluruh laporan diterbitkan.",
      "Menetapkan PK, tipe data, struktur dan referential integrity.",
      "Menggabungkan seluruh master dan event ke satu kolom teks."
    ],
    "answer": 2,
    "explanation": "Periksa kunci, tipe data dan relasi setelah impor. Rincian langkah ini berada pada PDF 408–409. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "tm": 9,
    "topic": "Integrated Project",
    "difficulty": "medium",
    "q": "Kas awal 100, penerimaan 60, pembayaran vendor 35 dan gaji 10 (Rp juta). Kas akhir adalah...",
    "options": [
      "Rp75 juta.",
      "Rp100 juta.",
      "Rp125 juta.",
      "Rp115 juta."
    ],
    "answer": 3,
    "explanation": "100 + 60 − 35 − 10 = 115. Laba tidak sama dengan perubahan kas. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "tm": 9,
    "topic": "Integrated Project",
    "difficulty": "medium",
    "q": "Invoice dapat dibayar beberapa kali. Mengapa kas perlu diagregasi per invoice sebelum join?",
    "options": [
      "Untuk menghindari penggandaan nilai karena hubungan banyak baris.",
      "Untuk memastikan invoice tanpa pembayaran dikeluarkan dari analisis.",
      "Untuk menghapus seluruh baris pembayaran yang nominalnya sama.",
      "Untuk mengganti invoice ID dengan tanggal posting perusahaan."
    ],
    "answer": 0,
    "explanation": "Grain dan multiplicity join dapat menggandakan agregat. Tabel alokasi dan LEFT JOIN membantu menjaga invoice terbuka. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "tm": 9,
    "topic": "Integrated Project",
    "difficulty": "medium",
    "q": "Neraca saldo seimbang. Apa simpulan yang dapat didukung?",
    "options": [
      "Semua transaksi pasti telah tercatat dan seluruh barang ada.",
      "Aritmetika debit-kredit seimbang; kelengkapan masih harus diuji.",
      "Seluruh harga dan estimasi sudah pasti wajar tanpa bukti lain.",
      "Semua akses pengguna sudah sesuai otorisasi dan jabatan."
    ],
    "answer": 1,
    "explanation": "Transaksi yang sama-sama tidak dicatat pada debit/kredit tidak merusak keseimbangan. Perlu bukti sumber dan kontrol kelengkapan. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "difficulty": "medium",
    "q": "Tujuan COSO mencakup...",
    "options": [
      "Operasi, pelaporan, dan kepatuhan.",
      "Penjualan, produksi, dan pemasaran.",
      "Enkripsi, mining, dan settlement.",
      "Planning, design, dan maintenance."
    ],
    "answer": 0,
    "explanation": "COSO IC memiliki tiga kategori tujuan; reporting mencakup informasi keuangan/nonkeuangan internal/eksternal. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "difficulty": "medium",
    "q": "Jumlah komponen dan prinsip COSO IC 2013 yang benar adalah...",
    "options": [
      "Delapan komponen dan lima prinsip.",
      "Lima komponen dan tujuh belas prinsip.",
      "Empat komponen dan dua puluh prinsip.",
      "Tiga komponen dan empat puluh prinsip."
    ],
    "answer": 1,
    "explanation": "Jangan mencampur COSO IC 2013, ERM 2004 dan ERM 2017. Exhibit 11.2 menjelaskan 17 prinsip. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "difficulty": "medium",
    "q": "Review rekonsiliasi bank setelah transaksi bertujuan menemukan selisih. Fungsi utamanya adalah...",
    "options": [
      "Preventif sebelum peristiwa terjadi.",
      "Transfer seluruh risiko ke bank.",
      "Detektif atas masalah yang terjadi.",
      "Menghapus seluruh risiko residual."
    ],
    "answer": 2,
    "explanation": "Deteksi diikuti investigasi dan koreksi bila perlu. Review harus meninggalkan bukti. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "difficulty": "medium",
    "q": "SOP mewajibkan approval, tetapi pembayaran berulang tanpa approval. Aspek utama yang gagal adalah...",
    "options": [
      "Nama dan ikon aplikasi yang dipakai.",
      "Pemilihan jenis server pada jaringan.",
      "Kapasitas penyimpanan arsip historis.",
      "Pelaksanaan kontrol sepanjang periode."
    ],
    "answer": 3,
    "explanation": "Desain dan operating effectiveness berbeda; kondisi kasus menunjukkan masalah pelaksanaan dan perlu dinilai juga desainnya. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "tm": 10,
    "topic": "Internal Controls dan COSO",
    "difficulty": "medium",
    "q": "Apa pemahaman yang tepat tentang residual risk?",
    "options": [
      "Risiko sisa setelah respons yang harus dinilai ulang dalam konteks.",
      "Selalu nol setelah perusahaan memiliki ERP dan audit internal.",
      "Skor ordinal awal dikurangi persentase kontrol tanpa model.",
      "Seluruh tanggung jawab otomatis berpindah kepada asuransi."
    ],
    "answer": 0,
    "explanation": "Tidak ada rumus pengurangan universal tanpa model/satuan yang sesuai. Kolusi, override dan perubahan tetap mungkin. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "difficulty": "medium",
    "q": "Tiga tujuan CIA adalah...",
    "options": [
      "Cost, Investment, Accounting.",
      "Confidentiality, Integrity, Availability.",
      "Compliance, Integration, Accuracy.",
      "Control, Inspection, Authorization."
    ],
    "answer": 1,
    "explanation": "Kerahasiaan, keutuhan dan ketersediaan dapat terdampak bersamaan dalam satu insiden. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "difficulty": "medium",
    "q": "Apa batas tanda tangan digital yang valid?",
    "options": [
      "Otomatis membuktikan barang fisik ada dan berkualitas.",
      "Mengenkripsi seluruh isi tanpa protokol tambahan.",
      "Mendukung asal/integritas; tetap bergantung pada keamanan kunci.",
      "Membuktikan semua transaksi sah secara ekonomi dan hukum."
    ],
    "answer": 2,
    "explanation": "Signature bukan bukti seluruh asersi bisnis. Kepercayaan identitas dan pengelolaan private key penting. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "difficulty": "medium",
    "q": "Target RPO 30 menit. Backup valid 08.00, insiden 09.20, tanpa log tambahan. Hasil evaluasi adalah...",
    "options": [
      "RPO terpenuhi karena layanan belum dipulihkan.",
      "RPO otomatis berubah menjadi 80 menit.",
      "Kehilangan data pasti nol karena ada backup.",
      "Potensi kehilangan 80 menit; target terlampaui 50 menit."
    ],
    "answer": 3,
    "explanation": "Bandingkan kemampuan aktual dengan target. Interval backup bukan otomatis sasaran RPO. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "difficulty": "medium",
    "q": "Apa perbedaan authentication dan authorization?",
    "options": [
      "Memverifikasi identitas versus menentukan tindakan yang diizinkan.",
      "Mencatat nominal invoice versus menentukan biaya barang jadi.",
      "Menghapus log pengguna versus mengganti seluruh dokumen audit.",
      "Memulihkan server versus menghitung seluruh saldo akun."
    ],
    "answer": 0,
    "explanation": "Login yang sah tidak memberikan hak tak terbatas; akses perlu dibatasi menurut peran. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "tm": 11,
    "topic": "Cybersecurity dan Computer Fraud",
    "difficulty": "medium",
    "q": "BCP dan DRP berbeda terutama karena...",
    "options": [
      "BCP hanya membeli perangkat; DRP hanya merekrut staf baru.",
      "BCP mencakup kelangsungan bisnis; DRP fokus pemulihan TI.",
      "BCP selalu tanpa biaya; DRP selalu tanpa kegiatan pengujian.",
      "BCP menghapus semua risiko; DRP mengganti kebutuhan backup."
    ],
    "answer": 1,
    "explanation": "Manusia, komunikasi, lokasi dan prosedur alternatif merupakan bagian kelangsungan bisnis. Restore TI mendukungnya. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "difficulty": "medium",
    "q": "Subset warehouse untuk fungsi tertentu disebut...",
    "options": [
      "Data mart.",
      "Primary key.",
      "Instance fact.",
      "Private key."
    ],
    "answer": 0,
    "explanation": "Data mart memusatkan kebutuhan kelompok tertentu; definisinya tetap harus konsisten dengan sumber. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "difficulty": "medium",
    "q": "Taxonomy dan instance document berbeda karena...",
    "options": [
      "Taxonomy berisi seluruh nominal entitas; instance hanya warna grafik.",
      "Taxonomy mendefinisikan konsep; instance berisi fakta yang dilaporkan.",
      "Taxonomy mengganti prinsip akuntansi; instance mengganti audit bukti.",
      "Taxonomy merupakan akun bank; instance merupakan password akses."
    ],
    "answer": 1,
    "explanation": "Konsep, tipe dan hubungan memberi makna; fakta memerlukan context dan unit yang benar. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "difficulty": "medium",
    "q": "Pasangan periode XBRL yang lazimnya benar adalah...",
    "options": [
      "Kas: duration; revenue: instant.",
      "Kas: duration; revenue: duration.",
      "Kas: instant; revenue: duration.",
      "Kas: instant; revenue: instant."
    ],
    "answer": 2,
    "explanation": "Kas adalah saldo pada tanggal; revenue adalah kinerja selama periode. Entitas/dimensi juga perlu cocok. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "difficulty": "medium",
    "q": "Dokumen XBRL lolos validasi teknis. Apa yang masih perlu diperiksa?",
    "options": [
      "Tidak ada; validasi teknis membuktikan seluruh asersi.",
      "Hanya warna tabel karena makna fakta sudah pasti benar.",
      "Hanya jumlah halaman tanpa memeriksa angka sumber.",
      "Tag, konteks, unit, kelengkapan dan kesesuaian sumber."
    ],
    "answer": 3,
    "explanation": "Validasi teknis tidak menggantikan substansi akuntansi, rekonsiliasi atau assurance proses. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "tm": 12,
    "topic": "Reporting dan XBRL",
    "difficulty": "medium",
    "q": "Angka 115 pada laporan dalam Rp juta dikirim sebagai IDR 115. Masalahnya adalah...",
    "options": [
      "Skala nilai salah; seharusnya setara IDR 115.000.000.",
      "Taxonomy otomatis berubah menjadi ledger transaksi internal.",
      "Semua context harus diubah dari instant menjadi duration.",
      "Unit rupiah selalu mengharuskan penggantian ke dolar AS."
    ],
    "answer": 0,
    "explanation": "Skala dan ketelitian berbeda. Decimals bukan perintah otomatis mengalikan jutaan; pemetaan nilai perlu benar. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "difficulty": "medium",
    "q": "Apa yang menghubungkan sebuah blok dengan blok sebelumnya?",
    "options": [
      "Saldo kas agregat seluruh peserta.",
      "Previous block hash / hash pointer.",
      "Private key milik semua penerima.",
      "Nama staf pembuat laporan laba."
    ],
    "answer": 1,
    "explanation": "Hash mengikat riwayat data; tidak otomatis membuktikan kondisi barang dunia nyata. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "difficulty": "medium",
    "q": "Apa yang dimaksud oracle problem?",
    "options": [
      "Seluruh konsensus harus menggunakan proof of work.",
      "Setiap receipt wajib mengganti catatan double-entry.",
      "Input dunia luar bisa salah meskipun kode berjalan sesuai aturan.",
      "Semua database terpusat wajib dipindahkan ke public blockchain."
    ],
    "answer": 2,
    "explanation": "Sensor, petugas dan sistem luar perlu kontrol keandalan. Validasi ledger belum cukup untuk substansi. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "difficulty": "medium",
    "q": "Apa arti shared receipt pada konsep triple-entry?",
    "options": [
      "Sisi debit ketiga yang mengganti persamaan akuntansi.",
      "Bukti seluruh aset pasti ada tanpa pemeriksaan fisik.",
      "Penghapusan semua jurnal internal setelah settlement.",
      "Bukti bersama terverifikasi yang mendukung catatan pihak terkait."
    ],
    "answer": 3,
    "explanation": "Double-entry tetap ada pada masing-masing entitas; shared signed receipt bukan pengganti semua rekonsiliasi. Sumber pelengkap: Grigg (2005). Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "difficulty": "medium",
    "q": "Bot gagal mendapat respons setelah meminta pembayaran. Kontrol retry yang tepat adalah...",
    "options": [
      "Periksa status dan kunci unik agar pembayaran tidak terduplikasi.",
      "Ulangi seluruh batch tanpa melihat transaksi yang sudah sukses.",
      "Hapus seluruh audit trail untuk mempercepat proses berikutnya.",
      "Berikan akun bot hak menyetujui semua transaksi tanpa batas."
    ],
    "answer": 0,
    "explanation": "Timeout tidak selalu berarti aksi gagal. Idempotency, status settlement, approval serta log diperlukan. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "tm": 13,
    "topic": "Blockchain dan AI Automation",
    "difficulty": "medium",
    "q": "Model mendeteksi fraud dengan akurasi 99% pada populasi yang hampir semuanya normal. Evaluasi berikutnya adalah...",
    "options": [
      "Hentikan semua pengujian karena angka 99% cukup untuk approval.",
      "Nilai false positive/negative, precision, recall dan dampak kesalahan.",
      "Hilangkan semua reviewer karena komputer tidak dapat keliru.",
      "Gunakan data training sebagai bukti tunggal kinerja data baru."
    ],
    "answer": 1,
    "explanation": "Akurasi tinggi bisa melewatkan semua kejadian langka; kualitas data, drift dan review tetap perlu dinilai. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "difficulty": "medium",
    "q": "Investasi 120 dan kas bersih tahunan 50 (Rp juta). Payback sederhana dengan asumsi kas merata adalah...",
    "options": [
      "2,4 tahun.",
      "0,42 tahun.",
      "3,4 tahun.",
      "6,0 tahun."
    ],
    "answer": 0,
    "explanation": "120/50 = 2,4. Jika kas hanya masuk pada akhir tahun, interpolasi perlu dibedakan dari saat kas benar-benar diterima. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "difficulty": "medium",
    "q": "NPV memasukkan...",
    "options": [
      "Hanya laba akuntansi tanpa mempertimbangkan timing.",
      "Arus kas bersih yang didiskontokan sesuai waktunya.",
      "Hanya biaya pembelian tanpa biaya operasi lanjutan.",
      "Seluruh jam kapasitas sebagai penghematan kas pasti."
    ],
    "answer": 1,
    "explanation": "NPV mempertimbangkan time value of money; asumsi kas dan discount rate harus konsisten. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "difficulty": "medium",
    "q": "A=2 hari; B=3 dan C=4 setelah A; D=2 setelah B dan C. Dengan sumber daya cukup, critical path adalah...",
    "options": [
      "A–B–D selama 7 hari.",
      "B–C–D selama 9 hari.",
      "A–C–D selama 8 hari.",
      "A–B–C–D selama 11 hari."
    ],
    "answer": 2,
    "explanation": "D menunggu jalur terlama: A–C selesai hari 6, lalu D dua hari. B punya float satu hari. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "difficulty": "medium",
    "q": "Makna 100% rule dalam perencanaan pekerjaan adalah...",
    "options": [
      "Seluruh tugas harus selesai sebelum proyek disetujui.",
      "Semua estimasi durasi pasti tepat tanpa ketidakpastian.",
      "Seluruh anggaran harus dipakai tanpa mempertimbangkan manfaat.",
      "Seluruh lingkup pekerjaan internal, eksternal dan interim tercakup."
    ],
    "answer": 3,
    "explanation": "100% rule menyangkut kelengkapan lingkup/WBS, bukan kepastian estimasi atau persentase penyelesaian. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  },
  {
    "tm": 14,
    "topic": "Justifying and Planning IT Initiatives",
    "difficulty": "medium",
    "q": "Apa pernyataan yang tepat tentang Agile dan Waterfall?",
    "options": [
      "Keduanya tetap membutuhkan kebutuhan jelas, pengujian dan kontrol perubahan.",
      "Agile membolehkan semua transaksi produksi tanpa persetujuan.",
      "Waterfall menjamin proyek pasti tepat waktu dan tanpa risiko.",
      "Agile menghilangkan kebutuhan dokumentasi serta bukti pengujian."
    ],
    "answer": 0,
    "explanation": "Metodologi mengatur cara kerja, bukan menghapus tanggung jawab akuntabilitas dan kualitas hasil. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  }
];

export const SII306_QUIZ: QuizQuestion[] = [...SII306_QUIZ_UTS, ...SII306_QUIZ_UAS];

export const AKS301_QUIZ_UTS = SII306_QUIZ_UTS;
export const AKS301_QUIZ_UAS = SII306_QUIZ_UAS;
export const AKS301_QUIZ = SII306_QUIZ;

