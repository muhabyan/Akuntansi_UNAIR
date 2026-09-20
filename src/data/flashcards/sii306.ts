// src/data/flashcards/sii306.ts
// Flashcard komprehensif Sistem Informasi Akuntansi (SII306) — 84 kartu lengkap (6 kartu per TM)
// Note: card IDs keep the aks301- prefix so existing SRS review states remain unbroken.
import type { AdvancedStudyCard } from '../../types';

export const SII306_FC: AdvancedStudyCard[] = [
  {
    "id": "aks301-tm01-01",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Definisi",
    "front": "Definisi Sistem Informasi Akuntansi (SIA)",
    "back": "Sistem yang mencatat, memproses, meringkas, dan melaporkan data transaksi finansial dan nonfinansial untuk pengambilan keputusan dengan pengendalian internal memadai."
  },
  {
    "id": "aks301-tm01-02",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Data vs Informasi",
    "back": "Data adalah fakta mentah yang belum diolah. Informasi adalah data yang telah diorganisasikan dan diproses sehingga memiliki arti dan nilai bagi pengambil keputusan."
  },
  {
    "id": "aks301-v2-tm01-03",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Kualitas Informasi: Relevance & Faithful Representation",
    "back": "Relevance: predictive value, confirmatory value, dan materiality. Faithful Representation: complete, neutral, dan free from error (tidak ada kesalahan material, bukan jaminan prediksi 100% tepat). Kualitas lain: comparability, verifiability, timeliness, understandability."
  },
  {
    "id": "aks301-v2-tm01-04",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Mekanisme",
    "front": "Empat Peran Akuntan dalam SIA",
    "back": "User: input transaksi, jurnal, rekonsiliasi, closing, laporan. Manager: mengatur staf, jadwal tutup buku, anggaran. Designer: kebutuhan akuntansi, COA, validasi data, kontrol akses. Evaluator: menguji integritas, keamanan, kontrol, dan kepatuhan secara independen. Designer ≠ evaluator independen untuk sistem yang sama."
  },
  {
    "id": "aks301-v2-tm01-05",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Rantai Nilai: Primary vs Support Activities",
    "back": "Primary: Inbound Logistics, Operations, Outbound Logistics, Marketing & Sales, Service. Support: Firm Infrastructure (AIS, legal, manajemen eksekutif), Human Resource Management, Technology Development, Procurement. AIS berada dalam Firm Infrastructure, bukan primary activity."
  },
  {
    "id": "aks301-v2-tm01-06",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Accounting Information Systems and Firm Value",
    "category": "Konsep",
    "front": "Sertifikasi Profesional Bidang SIA",
    "back": "CISA (Certified Information Systems Auditor) — ISACA: audit SI, tata kelola keamanan, kontrol otomatis. CITP (Certified Information Technology Professional) — AICPA: CPA spesialis teknologi, analitika, arsitektur sistem. CIA (Certified Internal Auditor) — IIA: audit internal, risiko, tata kelola."
  },
  {
    "id": "aks301-v2-tm02-01",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Konsep",
    "front": "4V Big Data",
    "back": "Volume: besarnya data. Variety: keragaman format (structured, semi-structured, unstructured; sekitar 80% data perusahaan tidak terstruktur). Velocity: kecepatan data dihasilkan, ditangkap, dan diproses. Veracity: kebenaran, akurasi, kebersihan, dan representasi data."
  },
  {
    "id": "aks301-v2-tm02-02",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Prosedur",
    "front": "Model AMPS",
    "back": "Ask the Question → Master the Data (ETL; 50%–90% waktu proyek) → Perform the Analysis → Share the Story. Bersifat rekursif: temuan baru dapat mengembalikan proses ke Ask/Master."
  },
  {
    "id": "aks301-v2-tm02-03",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Pengendalian",
    "front": "Audit Data Standards: Entered_By vs Approved_By",
    "back": "AICPA Audit Data Standards menstandarkan field ekspor GL. Bandingkan Field 14 (Entered_By) dengan Field 17 (Approved_By); user yang sama menandai self-approval yang harus diinvestigasi. Pisahkan preparer dan approver."
  },
  {
    "id": "aks301-v2-tm02-04",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Klasifikasi",
    "front": "Empat Jenis Analitika",
    "back": "Descriptive: What happened? (aging piutang). Diagnostic: Why did it happen? (varians, audit SoD). Predictive: Will it happen? (Altman Z-score, credit scoring). Prescriptive: What should we do? (breakeven, Goal Seek)."
  },
  {
    "id": "aks301-v2-tm02-05",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Konsep",
    "front": "Altman Z-Score",
    "back": "Z = 1.2X₁ + 1.4X₂ + 3.3X₃ + 0.6X₄ + 1.0X₅. Z < 1.80 Distress Zone; 1.80 ≤ Z < 3.00 Gray Zone; Z ≥ 3.00 Safe Zone. Apple 1997 = 2.0251 (Gray Zone). Skor adalah sinyal risiko, bukan kepastian."
  },
  {
    "id": "aks301-v2-tm02-06",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Data Analytics: Addressing Accounting Questions with Data",
    "category": "Mekanisme",
    "front": "Breakeven dengan Goal Seek",
    "back": "Q_BE = F / (P − V); breakeven saat Net Income = 0. Jing LCC Januari: $1,600 / ($7 − $3) = 400 units; revenue $2,800. Goal Seek: Set Cell = Net Income, To Value = 0, By Changing Cell = Unit Sales. Termasuk prescriptive analytics."
  },
  {
    "id": "aks301-v2-tm03-01",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Hukum",
    "front": "Dokumentasi Proses Bisnis & SOX 404",
    "back": "SOX Section 404 mewajibkan atestasi atas desain dan efektivitas ICFR; PCAOB AS 2201 mensyaratkan walkthrough transaksi. Model proses juga bernilai untuk Communication & Training, Process Standardization & Automation, Complexity Management, serta Continuous Improvement & BPR."
  },
  {
    "id": "aks301-v2-tm03-02",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Pool vs Swimlane (Lane)",
    "back": "Pool: entitas organisasi atau partisipan eksternal independen (Customer, Vendor, Bank). Lane: departemen, peran, atau unit sistem di dalam satu pool (Sales, Credit, Warehouse, Billing)."
  },
  {
    "id": "aks301-v2-tm03-03",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Hukum",
    "front": "Sequence Flow vs Message Flow",
    "back": "Sequence flow (garis penuh) mengurutkan aktivitas di dalam satu pool dan boleh melintasi lane, tetapi tidak pernah melintasi batas pool. Message flow (garis putus-putus) hanya menghubungkan pool yang terpisah."
  },
  {
    "id": "aks301-v2-tm03-04",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Exclusive Gateway (XOR)",
    "back": "Diamond kosong atau bertanda \"X\". Split: mengevaluasi kondisi yang saling eksklusif sehingga tepat satu jalur dijalankan. Join: menggabungkan alur alternatif tanpa sinkronisasi. Cabang XOR harus mencakup semua kemungkinan logis."
  },
  {
    "id": "aks301-v2-tm03-05",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Konsep",
    "front": "Parallel Gateway (AND)",
    "back": "Diamond bertanda \"+\". Split: token digandakan ke semua jalur keluar secara bersamaan. Join: menunggu token dari semua jalur masuk lalu menggabungkannya. Contoh: lane Barista Starbucks menyiapkan minuman secara paralel."
  },
  {
    "id": "aks301-v2-tm03-06",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Accountants as Business Analysts",
    "category": "Klasifikasi",
    "front": "Jebakan DFD: Black Hole, Miracle, Gray Hole",
    "back": "Black Hole: proses menerima data flow masuk tanpa data flow keluar. Miracle: proses menghasilkan data flow keluar tanpa data flow masuk. Gray Hole: output melampaui cakupan input, mis. Customer Zip Code saja menghasilkan riwayat kredit lengkap."
  },
  {
    "id": "aks301-v2-tm04-01",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Konsep",
    "front": "UML Class Diagram (Structure Model)",
    "back": "Structure model statis yang menggambarkan class, atribut, dan association; activity model (BPMN, flowchart) bersifat dinamis. Kompartemen class: Class Name, Attributes, Operations (Operations biasanya dihilangkan dalam desain konseptual database SIA)."
  },
  {
    "id": "aks301-tm04-02",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Definisi",
    "front": "Foreign Key (Kunci Tamu)",
    "back": "Atribut dalam suatu tabel yang merupakan Primary Key di tabel lain; berfungsi untuk menghubungkan kedua tabel secara logis."
  },
  {
    "id": "aks301-v2-tm04-03",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Klasifikasi",
    "front": "Tiga Kategori REA",
    "back": "Resources: aset ekonomi bernilai yang dimiliki/dikendalikan (Cash, Merchandise_Inventory). Events: transaksi bisnis dan kejadian operasional (Purchase_Order, Sales_Invoice). Agents: individu internal dan entitas eksternal yang berpartisipasi (Employee, Customer, Vendor). Pola REA dikembangkan William McCarthy."
  },
  {
    "id": "aks301-v2-tm04-04",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Hukum",
    "front": "Multiplicity Minimum (0 vs 1)",
    "back": "Batas minimum menyatakan partisipasi opsional (0) atau wajib (1): 0..1 dan 0..* opsional; 1..1 dan 1..* wajib. Contoh Full-Time Fitness: Instructors (1..1) teach Fitness_Classes (0..5); instruktur baru boleh belum mengajar kelas."
  },
  {
    "id": "aks301-v2-tm04-05",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Hukum",
    "front": "Multiplicity Maksimum & Tipe Relasi",
    "back": "Batas maksimum: 1 atau * (banyak). Kombinasi maksimum kedua sisi menentukan relasi 1:1, 1:N, atau M:N, yang dipetakan pada Step 3, Step 4, dan Step 5 algoritma lima langkah."
  },
  {
    "id": "aks301-v2-tm04-06",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Data Modeling",
    "category": "Mekanisme",
    "front": "Linking Table untuk Relasi M:N",
    "back": "M:N tidak dapat diwakili satu foreign key. Buat linking table dengan composite primary key gabungan PK kedua tabel dan simpan atribut relasi di dalamnya, mis. Class_Enrollments (Class_ID, Member_ID) dengan Enrollment_Date dan Payment_Status."
  },
  {
    "id": "aks301-v2-tm05-01",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Hukum",
    "front": "Primary Key & Entity Integrity",
    "back": "Primary key: atribut atau kombinasi atribut minimal yang mengidentifikasi setiap record secara unik. Entity integrity: primary key tidak pernah null (NOT NULL) dan unik (UNIQUE); contoh pelanggaran: Invoice# kosong atau duplikat."
  },
  {
    "id": "aks301-v2-tm05-02",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Hukum",
    "front": "Referential Integrity",
    "back": "Nilai foreign key harus cocok dengan primary key yang ada di tabel induk, atau null bila partisipasi opsional. Pelanggaran: orphan record, mis. Sales dengan Customer_ID yang tidak ada di tabel Customer."
  },
  {
    "id": "aks301-v2-tm05-03",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Konsep",
    "front": "Atomic Attribute (1NF)",
    "back": "Setiap sel berisi tepat satu nilai skalar; repeating group, atribut bernilai banyak, dan array dalam satu sel dilarang. Contoh pelanggaran: beberapa nomor telepon dalam satu field."
  },
  {
    "id": "aks301-v2-tm05-04",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Perbandingan",
    "front": "WHERE vs HAVING",
    "back": "WHERE menyaring baris individual sebelum agregasi; HAVING menyaring kelompok setelah GROUP BY. Setiap kolom non-agregat di SELECT wajib ada di GROUP BY. HAVING SUM(Amount) > 200.00 tidak meloloskan total tepat 200.00."
  },
  {
    "id": "aks301-v2-tm05-05",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Klasifikasi",
    "front": "Modul SAP S/4HANA",
    "back": "FI (Financial Accounting), CO (Controlling), MM (Materials Management), SD (Sales and Distribution), PP (Production Planning), HR/PT (Human Resources & Personnel Time Management). Goods receipt di MM memicu posting otomatis di FI."
  },
  {
    "id": "aks301-v2-tm05-06",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Relational Databases and Enterprise Systems",
    "category": "Perbandingan",
    "front": "Cloud ERP (SaaS): Keunggulan & Risiko",
    "back": "Keunggulan: CapEx menjadi OpEx langganan, deployment lebih cepat, upgrade dan patch keamanan otomatis oleh vendor. Risiko: internet dependency, data sovereignty & privacy (GDPR, OJK), vendor lock-in."
  },
  {
    "id": "aks301-v2-tm06-01",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Prosedur",
    "front": "Lima Aktivitas Order-to-Cash",
    "back": "(1) Provide Quote, (2) Receive Sales Order, (3) Prepare Products (Pick & Pack), (4) Deliver Products & Issue Invoice, (5) Receive Payment & Deposit Cash. Quote dan sales order tidak dijurnal."
  },
  {
    "id": "aks301-v2-tm06-02",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Pengendalian",
    "front": "Pemisahan Tugas Sales & Collections",
    "back": "Sales Order Entry tidak menyetujui batas kredit; Credit Department tidak memulai penjualan atau menangani kas; Warehouse/Shipping tidak memperbarui catatan penagihan; Billing/AR tidak menangani kas; Cashier/Mailroom tidak memposting kredit ke akun piutang pelanggan."
  },
  {
    "id": "aks301-v2-tm06-03",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Konsep",
    "front": "Titik Pengakuan Pendapatan",
    "back": "Pendapatan dan COGS diakui saat barang diserahkan dan kewajiban kinerja terpenuhi: Dr Accounts Receivable, Cr Sales Revenue; Dr COGS, Cr Merchandise Inventory. Bukan saat sales order ditandatangani."
  },
  {
    "id": "aks301-v2-tm06-04",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Mekanisme",
    "front": "Sales Discounts (2/10, net 30)",
    "back": "Dibayar dalam periode diskon: Dr Cash (neto), Dr Sales Discounts, Cr Accounts Receivable (bruto). Sunset Graphics: invoice $1,200.00 → potongan $24.00, kas $1,176.00. Sales Discounts adalah akun kontra-pendapatan."
  },
  {
    "id": "aks301-v2-tm06-05",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Klasifikasi",
    "front": "Enam Application Control",
    "back": "Field Check (tipe data), Validity Check (ada di file master), Limit Check (batas satu sisi), Range Check (batas dua sisi), Reasonableness Check (logika antar-field), Completeness Check (field wajib, NOT NULL)."
  },
  {
    "id": "aks301-v2-tm06-06",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Sales and Collections Business Process",
    "category": "Konsep",
    "front": "Accounts Receivable dalam REA",
    "back": "A/R diturunkan secara dinamis: Σ Delivered Orders − Σ Applied Cash Receipts. Pesanan terkirim tanpa Cash_Receipts terkait adalah piutang terbuka; tidak ada saldo statis di tabel master pelanggan."
  },
  {
    "id": "aks301-v2-tm07-01",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Prosedur",
    "front": "Lima Aktivitas Procure-to-Pay",
    "back": "(1) Identify Need & Request Prices, (2) Issue Purchase Order (PO), (3) Receive and Inspect Goods, (4) Verify Vendor Invoice (Three-Way Match), (5) Execute Cash Disbursement. Purchase order tidak dijurnal."
  },
  {
    "id": "aks301-v2-tm07-02",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Blind Purchase Order",
    "back": "Salinan PO yang dikirim ke receiving dock (bukan ke vendor) dengan kolom kuantitas dihitamkan, sehingga petugas receiving melakukan hitung fisik sungguhan dan short shipment tidak lolos tanpa tercatat."
  },
  {
    "id": "aks301-v2-tm07-03",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Three-Way Match",
    "back": "Accounts Payable mencocokkan Purchase Order (otorisasi pembelian), Receiving Report (penerimaan fisik), dan Vendor Invoice (jumlah yang ditagih) sebelum pembayaran. Selisih kuantitas, harga, atau termin → invoice ditahan (administrative hold)."
  },
  {
    "id": "aks301-v2-tm07-04",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Pengendalian",
    "front": "Mencegah Purchasing Kickbacks",
    "back": "Kickback: buyer berkolusi menerima barang di bawah standar atau harga yang digelembungkan demi imbalan. Kontrol: pemilihan vendor dari Approved Vendor List, Three-Way Match atas harga PO, dan pemisahan Purchasing dari Receiving serta Accounts Payable."
  },
  {
    "id": "aks301-v2-tm07-05",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Konsep",
    "front": "Economic Duality",
    "back": "Setiap event ekonomi berpasangan dengan event timbal baliknya. Sales and Collections: give Inventory, get Cash. Purchases and Payments: give Cash, get Inventory."
  },
  {
    "id": "aks301-v2-tm07-06",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Purchases and Payments Business Process",
    "category": "Mekanisme",
    "front": "Jurnal Procure-to-Pay",
    "back": "Barang diterima: Dr Inventory, Cr Accounts Payable. Bayar dalam periode diskon: Dr Accounts Payable (bruto), Cr Cash (neto), Cr Inventory/Purchase Discounts. Baer Belly Bikinis: $5,000.00 → potongan $100.00, kas $4,900.00."
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

export const AKS301_FC = SII306_FC;
