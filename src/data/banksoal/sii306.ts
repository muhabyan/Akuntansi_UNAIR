// src/data/banksoal/sii306.ts
// Bank Soal Esai & Studi Kasus Komprehensif Sistem Informasi Akuntansi (SII306)
// Berdasarkan Vernon J. Richardson et al. (4th ISE ed. 2023), Romney & Steinbart (15e),
// COSO Internal Control (2013), dan ISACA COBIT 2019 Framework.
// 14 Studi Kasus Lengkap: 7 Kasus Pra-UTS (TM 1-7) & 7 Kasus Pra-UAS (TM 8-14)
// Pra-UTS (TM 1-7) hanya memakai bacaan kanonik src/data/sia/modules/tm1.ts-tm7.ts.
import type { BankSoal } from '../../types';

export const SII306_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 1: Nilai Informasi, Order Fulfillment Terintegrasi & Pemisahan Tugas",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 1: Keputusan Investasi RFID, Posting Terintegrasi, dan Konflik Kewenangan",
    "context": "Tiga situasi dari materi TM1 menguji hubungan antara nilai informasi, alur order fulfillment di ERP, dan pemisahan tugas. Gunakan hanya data yang diberikan.",
    "data": [
      "PT Jayakarta Distribution: sistem barcode/RFID terintegrasi ERP bersifat discretionary; horizon evaluasi satu tahun; penghematan $120,000/tahun; biaya hardware, integrasi, dan pelatihan $45,000.",
      "Apex Industrial Equipment: 5 pompa dijual kredit $25,000 dengan syarat 2/10, n/30; biaya $16,000. Barang telah diambil, diverifikasi, dikemas, dan dikirim; carrier mengonfirmasi Bill of Lading (BOL).",
      "Rendi (Sales) dapat membuat pelanggan, menetapkan credit limit, memasukkan sales order, dan menerbitkan credit memo penghapusan invoice."
    ],
    "instructions": [
      "Tentukan apakah investasi PT Jayakarta Distribution bersifat mandatory atau discretionary, hitung nilai bersih informasi V = B − C, dan berikan keputusan. Jelaskan mengapa uji yang sama tidak dipakai untuk menolak sistem mandatory.",
      "Telusuri alur Order → Pick → Ship → Bill untuk penjualan Apex: dokumen dan kontrol pada setiap tahap, serta event yang memicu invoice.",
      "Susun jurnal penjualan Apex dan hitung gross profit serta gross margin.",
      "Identifikasi konflik kewenangan Rendi, risikonya, tujuan kontrol, dan perbaikan kontrolnya."
    ],
    "outputFormat": [
      "Perhitungan V = B − C dan keputusan investasi",
      "Tabel tahap, dokumen, dan kontrol order fulfillment",
      "Jurnal Apex serta perhitungan gross profit dan gross margin",
      "Analisis konflik kewenangan dan rencana perbaikan"
    ],
    "rubric": [
      "Ketepatan klasifikasi discretionary vs mandatory dan perhitungan nilai informasi",
      "Kelengkapan dokumen dan kontrol Order → Pick → Ship → Bill",
      "Keseimbangan jurnal dan akurasi gross margin",
      "Ketajaman analisis pemisahan tugas dan perbaikan kontrol"
    ],
    "answerGuide": "1. Nilai informasi: sistem bersifat discretionary sehingga V = B − C = $120,000 − $45,000 = $75,000. Karena V > 0, keputusannya ACCEPT AND IMPLEMENT. Sistem mandatory (mis. FRS dan pelaporan pajak) tetap wajib walaupun manfaat terukur lebih kecil dari biaya, sehingga uji V > 0 tidak dipakai untuk menolaknya. 2. Order fulfillment: Sales menerima pesanan dan memvalidasi Customer ID, SKU, quantity, unit price, stok, credit limit, dan shipping address pada Sales Order (blokir kredit terlampaui); Warehouse mengambil barang berdasarkan Picking Ticket dengan scan barcode untuk mencocokkan SKU dan kuantitas; Shipping membandingkan barang, sales order, dan picking ticket, lalu menyiapkan Packing Slip dan BOL yang menjadi bukti serah terima carrier; Billing menerbitkan Sales Invoice hanya berdasarkan BOL tervalidasi sehingga pengiriman tanpa tagihan dicegah. Event pemicu invoice adalah konfirmasi shipping yang tervalidasi. 3. Jurnal: Dr Accounts Receivable $25,000, Cr Sales Revenue $25,000; Dr Cost of Goods Sold $16,000, Cr Merchandise Inventory $16,000. Gross profit = $25,000 − $16,000 = $9,000; gross margin = $9,000 / $25,000 = 36%. ERP mencegah billing tanpa referensi BOL elektronik. 4. Konflik Rendi: risiko pelanggan fiktif memperoleh kredit $50,000, barang dikirim ke rekan pelaku, lalu saldo dihapus lewat credit memo. Tujuan kontrol: mencegah penjualan tanpa otorisasi, kerugian piutang, dan pencurian persediaan. Perbaikan: cabut persetujuan kredit dan penerbitan credit memo dari peran Sales; alihkan persetujuan limit kepada Credit Manager independen; credit memo di atas $1,000 membutuhkan Finance Director dan Controller; terapkan pemisahan otomatis melalui RBAC."
  },
  {
    "type": "case",
    "scope": "TM 2: Analitika Prediktif, Preskriptif & Diagnostik untuk Audit",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 2: Z-Score Klien, Breakeven Product A, dan Audit Self-Approval",
    "context": "Tim audit dan management accountant memakai model AMPS untuk tiga pertanyaan: risiko kebangkrutan klien manufaktur, titik impas Product A Jing LCC, dan kepatuhan pemisahan tugas pada jurnal bulanan.",
    "data": [
      "Rasio klien manufaktur: X₁ = 0.250; X₂ = 0.100; X₃ = 0.050; X₄ = 0.500; X₅ = 1.100. Model: Z = 1.2X₁ + 1.4X₂ + 3.3X₃ + 0.6X₄ + 1.0X₅.",
      "Batas zona: Z < 1.80 Distress Zone; 1.80 ≤ Z < 3.00 Gray Zone; Z ≥ 3.00 Safe Zone.",
      "Jing LCC Product A (Januari): harga P = $7; biaya variabel V = $3/unit; biaya tetap F = $1,600.",
      "Cross-tab jurnal bulanan (52 jurnal; temuan terpilih, bukan rincian seluruh jurnal): VR memasukkan 20 disetujui AC; MW memasukkan 10 disetujui DH; VR memasukkan 4 disetujui VR."
    ],
    "instructions": [
      "Hitung Altman Z-score klien, tentukan zonanya, dan susun tindak lanjut auditor.",
      "Hitung contribution margin, unit breakeven, dan revenue breakeven Product A; tuliskan parameter Goal Seek.",
      "Klasifikasikan ketiga analisis ke dalam descriptive, diagnostic, predictive, atau prescriptive analytics.",
      "Identifikasi kegagalan kontrol pada cross-tab jurnal (Field 14 Entered_By vs Field 17 Approved_By) dan rancang tindak lanjutnya."
    ],
    "outputFormat": [
      "Tabel perhitungan Z-score dan kesimpulan risiko",
      "Perhitungan breakeven dan parameter Goal Seek",
      "Klasifikasi jenis analitika",
      "Temuan pemisahan tugas dan rencana tindak lanjut"
    ],
    "rubric": [
      "Akurasi skor tertimbang Z-score dan interpretasi zona",
      "Akurasi breakeven dan pemahaman Goal Seek",
      "Ketepatan klasifikasi jenis analitika",
      "Ketajaman analisis self-approval dan kontrol"
    ],
    "answerGuide": "1. Z-score: 1.2 × 0.250 = 0.3000; 1.4 × 0.100 = 0.1400; 3.3 × 0.050 = 0.1650; 0.6 × 0.500 = 0.3000; 1.0 × 1.100 = 1.1000; total Z = 2.0050. Karena 1.80 ≤ Z < 3.00, klien berada di Gray Zone (kerentanan moderat). Tindak lanjut: tingkatkan scrutiny audit, perluas pengujian going concern, dan minta proyeksi arus kas manajemen. Skor bukan kepastian kebangkrutan. 2. Breakeven: CM = $7 − $3 = $4/unit; Q = $1,600 / $4 = 400 units; revenue = 400 × $7 = $2,800; cek NI = $2,800 − $1,200 − $1,600 = $0. Goal Seek: Set Cell = Net Income; To Value = 0; By Changing Cell = Unit Sales. 3. Klasifikasi: Altman Z-score adalah predictive (estimasi risiko kejadian mendatang, bukan kepastian); breakeven dengan Goal Seek adalah prescriptive (menentukan target dengan kendala); cross-tab pembuat vs penyetuju jurnal adalah diagnostic (drill-down penyebab, audit SoD). 4. Pemisahan tugas: empat jurnal VR → VR adalah self-approval karena Entered_By sama dengan Approved_By; risikonya expense fiktif, penghapusan aset tanpa izin, atau manipulasi revenue. Tindak lanjut dalam skenario latihan: balik empat transaksi self-approved sambil menunggu review senior controller; hapus approval rights VR pada matriks akses ERP; terapkan aturan IF Entered_By == Approved_By THEN BLOCK POSTING."
  },
  {
    "type": "case",
    "scope": "TM 3: Process Cycle Efficiency, Trace BPMN & Validasi DFD",
    "difficulty": "Sulit",
    "estimatedTime": "40–50 menit",
    "question": "Studi Kasus 3: Efisiensi Order Fulfillment, Starbucks Drive-Through, dan Jebakan DFD",
    "context": "Akuntan sebagai business analyst mengevaluasi efisiensi siklus pemenuhan pesanan manufaktur, menelusuri model BPMN transaksi drive-through Starbucks, dan memeriksa logika Data Flow Diagram sebelum dokumentasi proses dipakai untuk walkthrough PCAOB AS 2201.",
    "data": [
      "Siklus pemenuhan pesanan: verifikasi desain teknis 15 menit; menunggu antrean persetujuan kredit supervisor 50 menit; picking dan pengemasan persediaan otomatis 25 menit; menunggu staging transit dock pengiriman 30 menit.",
      "Starbucks Drive-Through: pelanggan memesan Venti latte dan muffin seharga $8.50 dan membayar dengan Starbucks Gift Card terdaftar; standard cost barang (biji kopi, susu, cup, roti) $2.75. Model memiliki pool Customer dan pool Starbucks Corporation dengan lane Cashier dan lane Barista.",
      "DFD proses 2.1: menerima Employee Timecard dan memperbarui Employee Master File, tetapi tidak memiliki data flow keluar ke payroll atau laporan.",
      "DFD proses 2.2: menghasilkan Vendor Disbursement Check dan Remittance Advice tanpa data flow masuk dari invoice, purchase order, atau catatan bank.",
      "DFD proses 2.3: menerima Customer Zip Code dan menghasilkan Full Customer Credit History & FICO Score."
    ],
    "instructions": [
      "Klasifikasikan setiap aktivitas pemenuhan pesanan sebagai value-added atau cost-added-only, hitung total cycle time dan Process Cycle Efficiency (PCE), lalu beri rekomendasi.",
      "Telusuri interaksi BPMN transaksi Starbucks: tentukan interaksi yang memakai message flow dan yang memakai sequence flow, serta di mana terjadi eksekusi paralel.",
      "Susun jurnal redemption gift card dan pengurangan persediaan.",
      "Identifikasi jebakan DFD pada proses 2.1, 2.2, dan 2.3 beserta alasannya."
    ],
    "outputFormat": [
      "Tabel klasifikasi aktivitas dan perhitungan PCE",
      "Trace BPMN (pool, lane, message flow, sequence flow)",
      "Jurnal redemption gift card",
      "Tabel jebakan DFD"
    ],
    "rubric": [
      "Ketepatan klasifikasi waktu dan perhitungan PCE",
      "Kebenaran aturan pool, lane, dan jenis flow BPMN",
      "Ketepatan akun jurnal unearned revenue dan COGS",
      "Ketepatan identifikasi Black Hole, Miracle, dan Gray Hole"
    ],
    "answerGuide": "1. PCE: value-added = verifikasi desain teknis 15 + picking dan pengemasan 25 = 40 menit; cost-added-only = antrean persetujuan kredit 50 + staging transit 30 = 80 menit; total cycle time = 40 + 80 = 120 menit; PCE = 40 / 120 × 100% = 33.33%. Sebanyak 66.67% waktu adalah penundaan administratif. Rekomendasi: terapkan credit scoring otomatis untuk menghilangkan bottleneck persetujuan kredit 50 menit. 2. Trace BPMN: pool Customer mengirim pesanan melalui message flow ke lane Cashier di pool Starbucks; Cashier memasukkan pesanan ke POS (Data Store: Orders Database); Cashier menyampaikan total harga melalui message flow, bersamaan dengan lane Barista yang menyiapkan minuman (eksekusi paralel); Customer menyerahkan gift card melalui message flow antar-pool; Cashier memproses kartu, mengurangi saldo prepaid di database POS, lalu menyerahkan struk dan minuman. Aliran Cashier → Barista berada dalam pool Starbucks sehingga memakai sequence flow; setiap interaksi dengan Customer melintasi pool sehingga memakai message flow. 3. Jurnal: Dr Unearned Gift Card Revenue $8.50, Cr Sales Revenue $8.50; Dr Cost of Goods Sold $2.75, Cr Merchandise Inventory $2.75. Kas sudah diterima saat kartu diisi sehingga redemption mengurangi liabilitas Unearned Revenue, bukan mendebit Cash. 4. DFD: proses 2.1 adalah Black Hole (data input ditelan tanpa menghasilkan output); proses 2.2 adalah Miracle (menghasilkan pengeluaran keuangan tanpa input apa pun); proses 2.3 adalah Gray Hole (kode pos saja tidak mungkin menghasilkan riwayat kredit pribadi seseorang). Setiap proses DFD harus memiliki minimal satu aliran masuk, minimal satu aliran keluar, dan input yang cukup untuk menghasilkan output."
  },
  {
    "type": "case",
    "scope": "TM 4: Pemetaan Class Diagram ke Tabel Relasional & Decision Table",
    "difficulty": "Sulit",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 4: Skema Full-Time Fitness, Letak Foreign Key, dan Decision Table Kredit",
    "context": "Full-Time Fitness (Seattle) mengoperasikan jaringan gym dan mencatat instruktur, kelas, dan anggota. Tim SIA juga harus menetapkan letak foreign key untuk data departemen dan karyawan serta merumuskan aturan persetujuan kredit sebagai decision table.",
    "data": [
      "Seorang instruktur mengajar 1 sampai 5 kelas (0 untuk instruktur baru); setiap kelas memiliki tepat 1 instruktur.",
      "Satu kelas menerima 1 sampai 40 anggota; seorang anggota mengikuti 0 sampai 10 kelas per minggu.",
      "Setiap departemen memiliki 1 atau banyak karyawan (1..*); setiap karyawan termasuk tepat 1 departemen (1..1).",
      "Aturan kredit berdasarkan Credit Score (S) dan Order Amount (A): Rule 1: S ≥ 700 dan A ≤ $10,000 → auto-approve dengan termin 30 hari. Rule 2: S ≥ 700 dan A > $10,000 → dirutekan ke Credit Manager. Rule 3: S < 700 → wajib Cash on Delivery (COD), tidak diberi kredit."
    ],
    "instructions": [
      "Tentukan multiplicity dan tipe relasi Instructors–Fitness_Classes serta Fitness_Classes–Gym_Members.",
      "Terapkan algoritma lima langkah untuk menyusun skema tabel Full-Time Fitness lengkap dengan primary key, foreign key, dan linking table.",
      "Tentukan letak foreign key pada relasi Department–Employee dan jelaskan alasannya.",
      "Susun decision table persetujuan kredit dan jelaskan di mana business rule tersebut ditegakkan dalam activity model."
    ],
    "outputFormat": [
      "Tabel multiplicity dan tipe relasi",
      "Skema tabel relasional (PK, FK, linking table)",
      "Penjelasan letak foreign key",
      "Decision table persetujuan kredit"
    ],
    "rubric": [
      "Ketepatan multiplicity dan tipe relasi",
      "Kebenaran penerapan algoritma lima langkah dan composite primary key",
      "Ketepatan aturan posting PK sisi \"1\" ke sisi \"many\"",
      "Kelengkapan kondisi dan aksi decision table"
    ],
    "answerGuide": "1. Multiplicity: Instructors (1..1) teach Fitness_Classes (0..5) adalah One-to-Many (1:N); Fitness_Classes (1..40) enroll Gym_Members (0..10) adalah Many-to-Many (M:N). 2. Skema: Step 1 dan Step 2 memetakan setiap class menjadi tabel dengan primary key; Step 4 memposting PK sisi \"1\" ke sisi \"many\"; Step 5 menyelesaikan M:N dengan linking table berkunci komposit. Instructors: Instructor_ID [PK], Name, Phone, Hire_Date. Fitness_Classes: Class_ID [PK], Title, Schedule, Room, Instructor_ID [FK]. Gym_Members: Member_ID [PK], Name, Membership_Type, Join_Date. Class_Enrollments: Class_ID [PK/FK], Member_ID [PK/FK], Enrollment_Date, Payment_Status. 3. Foreign key: Department berada di sisi \"1\" dan Employee di sisi \"many\"; aturan 1:N memposting PK sisi \"1\" ke sisi \"many\", sehingga Department_ID menjadi foreign key di tabel Employee. Kebalikannya memaksa satu sel di tabel sisi \"1\" menampung sekumpulan nilai dan melanggar First Normal Form (1NF). 4. Decision table: Rule 1 — S ≥ 700 dan A ≤ $10,000 → Approved, Net 30 Days; Rule 2 — S ≥ 700 dan A > $10,000 → Review Required, Credit Manager Sign-Off; Rule 3 — S < 700 dan A Any → tanpa kredit, Cash on Delivery (COD). Dalam activity model, business rule menentukan kriteria percabangan gateway, mis. Exclusive Gateway (XOR) yang mengevaluasi parameter transaksi; dalam structure model, business rule menentukan multiplicity dan constraint referential integrity."
  },
  {
    "type": "case",
    "scope": "TM 5: Audit Tabel Relasional, SQL & Integrasi Modul ERP",
    "difficulty": "Sulit",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 5: Integritas Tabel, Kueri Penerimaan Kas, dan Posting Goods Receipt di SAP",
    "context": "Auditor internal meninjau rancangan database penjualan, menguji data penerimaan kas dengan SQL, dan menelusuri integrasi modul SAP ERP untuk transaksi goods receipt. Angka goods receipt adalah ilustrasi dalam materi TM5.",
    "data": [
      "Tabel A: Customer_ID adalah primary key, tetapi 5 baris memiliki Customer_ID kosong/null.",
      "Tabel B: tabel Order_Items memiliki kolom Product_List berisi \"Lens-01, Frame-04, Case-02\" dalam satu sel.",
      "Tabel C: tabel Sales memiliki foreign key Customer_ID = 999, padahal tidak ada pelanggan 999 di tabel Customer.",
      "Dataset Cash_Receipt (Receipt_Number, Customer_ID, Amount): 1001, 101, 120.00; 1002, 102, 350.00; 1003, 101, 80.00.",
      "SAP ERP: petugas gudang mencatat goods receipt bahan baku senilai $15,000 atas Purchase Order #45001."
    ],
    "instructions": [
      "Tentukan aturan tabel relasional yang dilanggar oleh Tabel A, B, dan C, beserta perbaikannya.",
      "Tulis kueri SQL yang menampilkan pelanggan dengan total pembayaran lebih dari 200.00, diurutkan dari total terbesar, lalu tentukan hasilnya.",
      "Jelaskan perbedaan WHERE dan HAVING serta urutan logis eksekusi klausa SQL.",
      "Telusuri integrasi modul SAP untuk goods receipt, jurnal otomatis yang terbentuk, dan keunggulan kontrolnya."
    ],
    "outputFormat": [
      "Tabel pelanggaran aturan relasional dan perbaikan",
      "Kueri SQL dan tabel hasil",
      "Penjelasan WHERE vs HAVING dan urutan eksekusi",
      "Alur modul MM ke FI dan jurnal otomatis"
    ],
    "rubric": [
      "Ketepatan identifikasi entity integrity, atomic attribute (1NF), dan referential integrity",
      "Kebenaran sintaks dan hasil kueri agregasi",
      "Pemahaman urutan logis klausa SQL",
      "Ketepatan integrasi modul ERP dan jurnal GR/IR"
    ],
    "answerGuide": "1. Tabel A melanggar Entity Integrity: primary key tidak boleh null; terapkan NOT NULL dan indeks unik. Tabel B melanggar Atomic Attribute (1NF): satu sel harus berisi satu nilai; pecah menjadi satu baris per produk di linking table. Tabel C melanggar Referential Integrity: foreign key harus cocok dengan PK induk yang ada (atau null bila opsional); tolak orphan record dan batasi penghapusan induk. 2. Kueri: SELECT Customer_ID, SUM(Amount) AS Total_Paid FROM Cash_Receipt GROUP BY Customer_ID HAVING SUM(Amount) > 200.00 ORDER BY SUM(Amount) DESC; Total per pelanggan: 101 = 120.00 + 80.00 = 200.00; 102 = 350.00. Hasil: hanya Customer_ID 102 dengan Total_Paid 350.00, karena total tepat 200.00 tidak memenuhi kondisi > 200.00. 3. WHERE menyaring baris individual sebelum agregasi; HAVING menyaring kelompok hasil agregasi setelah GROUP BY. Urutan logis: FROM & JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY. Setiap kolom non-agregat di SELECT wajib ada di GROUP BY. 4. ERP: goods receipt di modul MM (Materials Management) memicu posting otomatis real time di modul FI (Financial Accounting) tanpa jurnal manual: Dr Raw Materials Inventory $15,000, Cr GR/IR Clearing Account $15,000. Keunggulan kontrol: kewajiban yang belum tercatat dicegah dan three-way match dipastikan sebelum kas dikeluarkan."
  },
  {
    "type": "case",
    "scope": "TM 6: Jurnal Order-to-Cash, Pemisahan Tugas & Application Control",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 6: Pesanan Banner Sunset Graphics, Penghapusan Piutang, dan Validasi Input",
    "context": "Sunset Graphics menjual produk custom dengan termin kredit. Auditor menelusuri jurnal satu pesanan banner, mengevaluasi hak sistem shipping manager di Company X, dan mengklasifikasikan validasi input pada entri pesanan.",
    "data": [
      "Sunset Graphics menerima pesanan 10 vinyl event banner custom dari klien korporat seharga $120.00 per unit; standard cost $45.00 per unit; termin 2/10, net 30.",
      "Banner diserahkan beserta invoice pada 5 Oktober; klien membayar pada 12 Oktober (dalam 10 hari).",
      "Company X: shipping manager memiliki hak sistem untuk menghapus saldo piutang pelanggan di bawah $1,000 sebagai \"uncollectible\" tanpa persetujuan kedua.",
      "Validasi input: (a) karyawan tidak dapat memasukkan 30 Februari sebagai tanggal pesanan; (b) kuantitas invoice tidak boleh negatif atau melebihi 10,000 unit; (c) nomor telepon pelanggan harus tepat 10 digit tanpa huruf; (d) tanggal pengiriman tidak boleh sebelum tanggal sales order; (e) NPWP pelanggan tidak boleh kosong."
    ],
    "instructions": [
      "Tentukan peristiwa Order-to-Cash yang dijurnal dan yang tidak, lalu susun seluruh jurnal pesanan banner Sunset Graphics.",
      "Jelaskan bagaimana model REA menentukan saldo piutang pesanan ini tanpa menyimpan saldo statis.",
      "Evaluasi hak sistem shipping manager Company X: defek kontrol, risiko, dan remediasi.",
      "Klasifikasikan validasi (a)–(e) ke dalam application control yang tepat beserta alasannya."
    ],
    "outputFormat": [
      "Perhitungan invoice, COGS, potongan, dan kas",
      "Jurnal 5 Oktober dan 12 Oktober",
      "Evaluasi pemisahan tugas",
      "Tabel klasifikasi application control"
    ],
    "rubric": [
      "Ketepatan titik pengakuan pendapatan dan jurnal potongan tunai",
      "Pemahaman Accounts Receivable yang diturunkan dalam REA",
      "Ketajaman analisis pemisahan tugas",
      "Ketepatan klasifikasi application control"
    ],
    "answerGuide": "1. Quote dan sales order tidak dijurnal; pendapatan dan COGS diakui saat barang diserahkan dan kewajiban kinerja terpenuhi. Gross invoice = 10 × $120.00 = $1,200.00; total COGS = 10 × $45.00 = $450.00; potongan 2% = $1,200.00 × 0.02 = $24.00; kas diterima = $1,200.00 − $24.00 = $1,176.00. Jurnal 5 Oktober: Dr Accounts Receivable $1,200.00, Cr Sales Revenue $1,200.00; Dr Cost of Goods Sold $450.00, Cr Merchandise Inventory $450.00. Jurnal 12 Oktober: Dr Cash $1,176.00, Dr Sales Discounts $24.00, Cr Accounts Receivable $1,200.00. Sales Discounts adalah akun kontra-pendapatan. Total debit = total kredit = $1,650.00 pada 5 Oktober dan $1,200.00 pada 12 Oktober. 2. REA: A/R = Σ Delivered Orders − Σ Applied Cash Receipts. Sebelum 12 Oktober, order yang sudah diserahkan belum memiliki Cash_Receipts terkait sehingga menjadi piutang terbuka; penerimaan kas diterapkan ke order melalui linking table Order_Cash_Receipts (Amount_Applied). Saldo statis di tabel master pelanggan tidak disimpan sehingga redundansi dan saldo yang saling bertentangan hilang. 3. Shipping manager: pelanggaran berat Segregation of Duties karena custody barang fisik digabung dengan otorisasi penyesuaian catatan piutang. Risiko: shipping manager dapat mencuri persediaan, mengirimnya ke kaki tangan, membuat piutang fiktif, lalu menghapusnya sebagai uncollectible sehingga pencurian tertutup sepenuhnya. Remediasi: cabut hak penghapusan piutang dari staf shipping dan batasi otorisasi penghapusan piutang pada CFO atau credit manager yang independen dari penanganan kas dan pengiriman. 4. Application control: (a) Field Check, karena nilai tidak memenuhi tipe data DATE yang valid (bukan validity check karena tidak ada kode yang dicocokkan ke tabel master); (b) Range Check, karena ada batas bawah dan batas atas sekaligus; (c) Field Check, karena menguji tipe dan format data; (d) Reasonableness Check, karena menguji logika hubungan antar-field; (e) Completeness Check, karena field wajib NOT NULL."
  },
  {
    "type": "case",
    "scope": "TM 7: Jurnal Procure-to-Pay, Three-Way Match & Vendor Master",
    "difficulty": "Komprehensif",
    "estimatedTime": "40–50 menit",
    "question": "Studi Kasus 7: Pembelian Spandex Baer Belly Bikinis, Selisih Three-Way Match, dan Pelanggaran Vendor Master",
    "context": "Baer Belly Bikinis (BBB), didirikan Paige Baer di Santa Monica, California, memproduksi pakaian renang desainer kelas atas dan membeli bahan baku dari supplier tekstil resmi dengan termin 2/10, net 30. Auditor juga menguji dokumen kiriman tinta printer dan hak akses supervisor Accounts Payable di sebuah perusahaan ritel menengah.",
    "data": [
      "BBB menerbitkan PO senilai $5,000.00 untuk kain spandex premium dari textile mill resmi dengan termin 2/10, net 30. Barang diterima, diinspeksi, dan diterima baik pada 10 Oktober; pembayaran disetujui dan dikeluarkan pada 18 Oktober (hari ke-8). BBB memakai sistem persediaan perpetual.",
      "Purchase Order #802 = 100 cartridge @ $25.00 = $2,500.00.",
      "Receiving Report #415 = 80 cartridge diterima dalam kondisi baik (20 kurang kirim).",
      "Vendor Invoice #9910 = 100 cartridge @ $27.00 = $2,700.00.",
      "Supervisor Accounts Payable memiliki izin sistem untuk membuat profil vendor baru di ERP dan mencetak cek Accounts Payable yang belum ditandatangani."
    ],
    "instructions": [
      "Tentukan titik pengakuan utang dan susun jurnal BBB untuk penerimaan barang dan pembayaran dalam periode potongan.",
      "Lakukan Three-Way Match atas PO #802, Receiving Report #415, dan Invoice #9910; hitung kelebihan tagihan dan tentukan tindakan clerk Accounts Payable.",
      "Jelaskan kontrol preventif yang membuat hitungan penerimaan dapat dipercaya dan yang mencegah vendor fiktif.",
      "Evaluasi hak akses supervisor Accounts Payable: defek kontrol, ancaman fraud, dan remediasi."
    ],
    "outputFormat": [
      "Jurnal 10 Oktober dan 18 Oktober",
      "Tabel Three-Way Match dan perhitungan kelebihan tagihan",
      "Uraian blind purchase order dan Approved Vendor List",
      "Evaluasi pemisahan tugas vendor master"
    ],
    "rubric": [
      "Ketepatan titik pengakuan utang dan jurnal potongan pembelian",
      "Akurasi perbandingan kuantitas dan harga serta tindakan Accounts Payable",
      "Pemahaman kontrol preventif Procure-to-Pay",
      "Ketajaman analisis pemisahan tugas"
    ],
    "answerGuide": "1. Purchase order tidak dijurnal; persediaan dan Accounts Payable diakui saat barang diterima dan diterima baik. Potongan 2% = $5,000.00 × 0.02 = $100.00; kas dibayar = $5,000.00 − $100.00 = $4,900.00. Jurnal 10 Oktober: Dr Raw Materials Inventory $5,000.00, Cr Accounts Payable $5,000.00. Jurnal 18 Oktober: Dr Accounts Payable $5,000.00, Cr Cash $4,900.00, Cr Raw Materials Inventory (atau Purchase Discounts) $100.00. Dalam sistem perpetual potongan menurunkan biaya persediaan yang dikapitalisasi dari $5,000 menjadi $4,900; potongan pembelian bukan pendapatan. 2. Three-Way Match: kuantitas PO 100, diterima 80, ditagih 100 → selisih kuantitas; harga PO $25.00 vs invoice $27.00 → selisih harga. Invoice billed = 100 × $27.00 = $2,700.00; amount supported = 80 × $25.00 = $2,000.00; excess billing = $2,700.00 − $2,000.00 = $700.00. Clerk AP tidak boleh menyetujui invoice: invoice ditahan, lalu minta invoice revisi untuk 80 unit @ $25.00 = $2,000.00 atau terbitkan debit memo $700 sebelum pembayaran diotorisasi. 3. Blind purchase order: salinan PO ke receiving dock memiliki kolom kuantitas yang dihitamkan sehingga petugas receiving melakukan hitung fisik sungguhan dan short shipment tidak lolos tanpa tercatat. Approved Vendor List: vendor baru memerlukan persetujuan manajemen pengadaan yang independen, verifikasi nomor pajak (TIN/NPWP), dan validasi alamat fisik untuk mencegah Shell Company Invoicing. 4. Supervisor AP: kegagalan kritis Segregation of Duties yang menggabungkan otorisasi vendor master, pencatatan liabilitas, dan custody pengeluaran kas. Ancaman: membuat shell company fiktif di vendor master, membuat invoice pembelian palsu, dan mencetak cek ke alamat kaki tangan. Remediasi: cabut hak pembuatan vendor dari Accounts Payable dan batasi pemeliharaan vendor master pada manajemen purchasing atau administrator vendor master yang independen."
  }
];

export const SII306_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 8: Desain Matriks Pengendalian Internal COSO 17 Prinsip",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 8: Restrukturisasi Sistem Pengendalian Internal Berbasis COSO 2013",
    "context": "PT Mega Finansial Nusantara berencana melakukan penawaran umum perdana saham (IPO) di Bursa Efek Indonesia. Untuk memenuhi persyaratan Otoritas Jasa Keuangan (OJK) dan standar Sarbanes-Oxley, komite audit menugaskan konsultan untuk menyusun matriks kepatuhan pengendalian internal menyeluruh menggunakan kerangka kerja COSO 2013 (5 Komponen dan 17 Prinsip).",
    "data": [
      "Temuan Kondisi Saat Ini: Belum ada kode etik tertulis (Tone at the Top lemah); penilaian risiko kecurangan (fraud risk assessment) belum pernah dilakukan; otorisasi transaksi bernilai di atas Rp 1 miliar hanya dilakukan via chat WhatsApp; tidak ada fungsi audit internal.",
      "Target: Menyusun sistem kontrol terpadu yang mencakup 3 kategori tujuan (Operations, Reporting, Compliance)."
    ],
    "instructions": [
      "Petakan 5 komponen COSO 2013 dan jelaskan bagaimana masing-masing komponen saling menopang satu sama lain dalam menjaga keandalan laporan keuangan.",
      "Pilih 3 prinsip COSO yang paling kritis dilanggar berdasarkan temuan kondisi di atas, dan rancang kebijakan korektif spesifik untuk memenuhinya.",
      "Jelaskan bagaimana konsep 'Monitoring Activities' (Prinsip 16 & 17) memastikan bahwa sistem pengendalian internal tidak statis melainkan adaptif terhadap perubahan risiko bisnis."
    ],
    "outputFormat": [
      "Matriks analisis 5 komponen COSO",
      "Rancangan kebijakan mitigasi 3 prinsip kritis",
      "Uraian mekanisme monitoring berkelanjutan"
    ],
    "rubric": [
      "Penguasaan kerangka kerja COSO 2013 (35%)",
      "Kualitas kebijakan korektif praktis (35%)",
      "Kedalaman evaluasi monitoring sistem (30%)"
    ],
    "answerGuide": "1. 5 Komponen COSO: Control Environment (fondasi etika dan struktur) -> Risk Assessment (mengidentifikasi ancaman apa saja yang bisa menggagalkan tujuan) -> Control Activities (kebijakan dan prosedur untuk meredam risiko tersebut) -> Information & Communication (memastikan data akuntansi mengalir transparan) -> Monitoring Activities (mengawasi apakah kontrol bekerja konsisten).\n\n2. Tiga Prinsip yang Dilanggar: (a) Prinsip 1 (Integritas & Etika): Rancang Code of Conduct formal dan Pakta Integritas yang ditandatangani seluruh karyawan serta pembentukan Whistleblowing System independen; (b) Prinsip 8 (Fraud Risk Assessment): Wajibkan Komite Audit melakukan asesmen risiko fraud tahunan atas insentif dan peluang perangkapan jabatan; (c) Prinsip 10 (Aktivitas Pengendalian): Implementasikan Workflow Approval digital resmi bersertifikasi di sistem ERP untuk otorisasi di atas Rp 1 miliar.\n\n3. Monitoring: Membentuk Departemen Audit Internal independen yang melapor langsung ke Komite Audit Dewan Komisaris untuk menjalankan evaluasi periodik dan audit kepatuhan (Prinsip 16), serta mewajibkan pelaporan seluruh defisiensi kontrol ke Dewan Direksi dalam waktu 14 hari kerja (Prinsip 17)."
  },
  {
    "type": "case",
    "scope": "TM 9: Keamanan Siber, Kriptografi & Rencana Pemulihan Bencana (BCP/DRP)",
    "difficulty": "Sulit",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 9: Respon Serangan Ransomware, Enkripsi Asimetris & Strategi DRP",
    "context": "Pada hari Minggu pukul 02.15 dini hari, server basis data utama ERP PT Bank Artha Syariah diserang ransomware. File database buku besar umum dan subledger nasabah terenkripsi dengan ekstensi '.locked'. Pelaku menuntut tebusan 25 Bitcoin (sekitar Rp 25 miliar) dalam waktu 48 jam jika ingin kunci dekripsi diberikan.",
    "data": [
      "Infrastruktur: Bank memiliki cadangan data lokal (Local Backup) di server room yang sama dan cadangan cloud mingguan (Cloud Backup) yang diperbarui setiap hari Minggu pukul 00.00.",
      "Target Regulasi Bank Indonesia: RPO maksimal 2 jam dan RTO maksimal 4 jam untuk sistem pembayaran kritis.",
      "Temuan Penetrasi: Serangan masuk melalui email Phishing yang dibuka oleh staf akuntansi dari laptop pribadi yang terhubung ke jaringan kantor via VPN tanpa Multi-Factor Authentication (MFA)."
    ],
    "instructions": [
      "Evaluasi insiden tersebut berdasarkan 3 pilar keamanan informasi CIA Triad (Confidentiality, Integrity, Availability). Pilar mana yang paling parah dikompromikan?",
      "Jelaskan mengapa perusahaan DILARANG membayar uang tebusan ransomware dan langkah teknis apa yang harus diambil untuk memulihkan data menggunakan konsep RPO dan RTO.",
      "Rancang skema Disaster Recovery Plan (DRP) yang mencakup Cold Site, Warm Site, atau Hot Site yang paling sesuai untuk bank tersebut.",
      "Sebutkan 3 kontrol preventif keamanan siber yang wajib diterapkan agar serangan serupa tidak terulang kembali."
    ],
    "outputFormat": [
      "Analisis pelanggaran CIA Triad",
      "Strategi pemulihan data dan justifikasi penolakan tebusan",
      "Rancangan arsitektur DRP Hot Site",
      "Daftar kontrol preventif keamanan siber"
    ],
    "rubric": [
      "Ketajaman analisis CIA Triad (25%)",
      "Strategi eksekusi BCP/DRP berbasis RTO/RPO (45%)",
      "Kualitas rekomendasi arsitektur preventif siber (30%)"
    ],
    "answerGuide": "1. CIA Triad: Pilar yang paling parah dikompromikan adalah Availability (sistem lumpuh total tidak bisa melayani nasabah) dan Integrity (keutuhan database dirusak oleh enkripsi jahat ransomware).\n\n2. Tolak Tebusan & Pemulihan: Membayar tebusan tidak menjamin kunci diberikan dan melanggar etika/hukum pendanaan terorisme siber. Langkah pemulihan: Isolasi total jaringan yang terinfeksi -> Bersihkan malware -> Lakukan restore data dari Cloud Backup hari Minggu pukul 00.00. Karena insiden terjadi pukul 02.15, kehilangan data transaksi adalah 2 jam 15 menit (hampir memenuhi RPO 2 jam).\n\n3. Arsitektur DRP: Bank wajib menggunakan arsitektur 'Hot Site' dengan fasilitas Disaster Recovery Center (DRC) terpisah geografis minimal 30 km yang melakukan Replikasi Sinkron Real-Time (Data Mirroring). Jika site primer runtuh, sistem otomatis failover ke DRC dalam hitungan menit (RTO < 15 menit).\n\n4. Kontrol Preventif: (a) Wajibkan Otentikasi Multi-Faktor (MFA / Hardware Token) untuk seluruh koneksi VPN jarak jauh; (b) Terapkan Network Segmentation dan Zero Trust Architecture; (c) Lakukan pelatihan berkala simulasi anti-phishing kepada seluruh staf keuangan."
  },
  {
    "type": "case",
    "scope": "TM 10: Tata Kelola TI (COBIT 2019) & Metodologi Audit Sistem Informasi",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 10: Audit Sistem Informasi Berbantuan Komputer (CAATs) & Pengujian GITC",
    "context": "Dalam penugasan audit tahunan pada PT E-Commerce Global, tim audit sistem informasi (IT Auditor) menemukan bahwa terdapat 12 kali perubahan kode program (Change Management) pada modul perhitungan diskon penjualan dan komisi afiliasi yang langsung diunggah ke server produksi tanpa melewati pengujian di User Acceptance Test (UAT) dan tanpa otorisasi Manajer TI.",
    "data": [
      "Volume Transaksi: 250.000 pesanan per hari.",
      "Risiko: Potensi kebocoran komisi atau perubahan persentase diskon yang disengaja oleh programmer untuk menguntungkan pihak luar.",
      "Kelemahan GITC: Programmer pengembang memiliki password akses Administrator database (DBA) pada server live produksi."
    ],
    "instructions": [
      "Jelaskan mengapa pendekatan 'Audit Around the Computer' TIDAK MEMADAI untuk menguji modul perhitungan e-commerce tersebut dan mengapa harus menggunakan 'Audit Through the Computer'.",
      "Rancang prosedur pengujian menggunakan teknik CAATs 'Test Data Method' dan 'Parallel Simulation' untuk memverifikasi akurasi perhitungan komisi.",
      "Identifikasi pelanggaran tata kelola pemisahan tugas (SoD) di departemen TI dan buat rekomendasi perbaikan berdasarkan domain COBIT 2019 BAI (Build, Acquire, and Implement) dan DSS (Deliver, Service, and Support)."
    ],
    "outputFormat": [
      "Evaluasi pendekatan audit sistem informasi",
      "Rancangan prosedur CAATs (Test Data & Parallel Simulation)",
      "Rekomendasi tata kelola SoD TI berbasis COBIT 2019"
    ],
    "rubric": [
      "Pemahaman konsep Audit Through the Computer (30%)",
      "Ketepatan desain metodologi CAATs (40%)",
      "Penerapan kerangka tata kelola COBIT 2019 (30%)"
    ],
    "answerGuide": "1. Alasan Audit Through: Volume transaksi 250.000 per hari sangat masif dan logika diskon tertanam dalam kode algoritma yang rumit. Audit Around (hanya melihat invoice cetak) tidak mampu membuktikan apakah ada kondisi tersembunyi (backdoor logic) yang disusupkan programmer nakal.\n\n2. Prosedur CAATs: (a) Test Data: Auditor menyiapkan sekumpulan transaksi dummy (pesanan normal, pesanan diskon ekstrim, kupon kadaluarsa) dan menjalankannya pada salinan software untuk melihat apakah sistem menolak input tidak valid; (b) Parallel Simulation: Auditor menulis skrip independen (menggunakan Python/ACL) dengan logika komisi resmi, memproses data transaksi riil tahun berjalan, lalu membandingkan hasil perhitungan auditor dengan output ERP klien (setiap selisih diinvestigasi).\n\n3. Rekomendasi COBIT: (a) Terapkan pemisahan tegas lingkungan kerja: Development, Staging/Testing, dan Production; (b) Cabut seluruh akses write/admin programmer pada server produksi; (c) Mengacu pada COBIT BAI06 (Manage Changes), setiap revisi program wajib melalui tiket perubahan resmi, approval manajer, dan lolos uji UAT independen sebelum di-deploy oleh staf Release Management."
  },
  {
    "type": "case",
    "scope": "TM 11: Analitika Data Akuntansi (IMPACT Model) & Uji Hukum Benford",
    "difficulty": "Sulit",
    "estimatedTime": "40\u201350 menit",
    "question": "Studi Kasus 11: Audit Forensik Jurnal Manual Menggunakan Model IMPACT & Hukum Benford",
    "context": "Auditor forensik ditugaskan memeriksa 85.000 baris jurnal penyesuaian manual (Manual Journal Entries) pada akhir tahun buku PT Agro Makmur karena laba bersih melonjak 300% pada 3 hari terakhir bulan Desember tanpa ada peningkatan arus kas operasional yang sejalan.",
    "data": [
      "Hasil Ekstraksi Data: Terdapat 1.200 jurnal manual bernilai antara Rp 90.000.000 s.d. Rp 99.500.000 yang diposting oleh staf akuntansi pada tanggal 31 Desember antara pukul 22.00 s.d. 03.00 dini hari.",
      "Ambang Batas Otorisasi: Kebijakan internal mewajibkan persetujuan Direktur Keuangan untuk setiap jurnal di atas Rp 100.000.000.",
      "Uji Hukum Benford: Distribusi digit pertama angka '9' muncul pada 38.4% transaksi (standar alami Benford hanya 4.6%), sedangkan digit pertama angka '1' hanya muncul 8.2% (standar alami Benford adalah 30.1%)."
    ],
    "instructions": [
      "Petakan langkah-langkah audit forensik tersebut ke dalam 6 tahapan siklus analitika data model IMPACT.",
      "Jelaskan signifikansi temuan Hukum Benford dan pola nominal Rp 90jt\u201399jt dalam konteks deteksi kecurangan (Threshold Avoidance Fraud).",
      "Rancang query analitis data (Filter/Rule) yang harus disematkan pada modul audit analitika berkelanjutan (Continuous Audit) untuk mendeteksi manipulasi jurnal di masa depan."
    ],
    "outputFormat": [
      "Matriks tahapan 6 langkah Model IMPACT",
      "Analisis statistik forensik Hukum Benford & Threshold Avoidance",
      "Daftar aturan deteksi Continuous Audit"
    ],
    "rubric": [
      "Penerapan metodologi IMPACT Model (35%)",
      "Analisis statistik kecurangan akuntansi (35%)",
      "Rancangan aturan Continuous Audit (30%)"
    ],
    "answerGuide": "1. Siklus IMPACT: (I)dentify: Apakah ada jurnal manual fiktif untuk menggelembungkan laba akhir tahun?; (M)aster data: Ekstrak tabel GL_JE_Header dan GL_JE_Lines; (P)erform test: Jalankan uji digit pertama Benford's Law dan analisis distribusi waktu posting; (A)ddress results: Temukan deviasi ekstrim pada digit '9' dan pola posting malam tahun baru; (C)ommunicate: Sajikan grafik bar chart Benford deviasi ke Komite Audit; (T)rack: Buat kontrol otomatis alert pada ERP.\n\n2. Analisis Forensik: Deviasi tajam pada angka 9 (38.4% vs 4.6%) membuktikan adanya manipulasi manusia yang disengaja. Nominal Rp 90jt-99jt membuktikan skema 'Threshold Avoidance' (Structuring): pelaku sengaja memecah transaksi bernilai miliaran rupiah menjadi potongan di bawah Rp 100 juta agar tidak memicu kewajiban persetujuan Direktur Keuangan.\n\n3. Aturan Continuous Audit ERP: (a) Alert Otomatis jika jurnal manual diposting di luar jam kerja resmi (20.00 - 06.00) atau akhir pekan; (b) Duplicate & Cumulative Amount Rule: Sistem otomatis membekukan posting jika satu pengguna menginput multiple voucher ke akun yang sama dengan total kumulatif melebihi batas wewenangnya dalam 24 jam; (c) Wajib upload dokumen pendukung digital (bukti transaksi eksternal) sebelum tombol save jurnal manual aktif."
  },
  {
    "type": "case",
    "scope": "TM 12: Otomasi Proses Robotik (RPA) & Kecerdasan Buatan dalam Akuntansi",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 12: Desain Proyek Otomasi RPA pada Rekonsiliasi Bank Multi-Rekening",
    "context": "Departemen Akuntansi Keuangan PT Finansial Solusindo mengelola 45 rekening bank di 8 bank nasional yang memproses rata-rata 30.000 mutasi transaksi per hari. Saat ini, 6 staf akuntan menghabiskan 4 jam setiap pagi hanya untuk mengunduh mutasi internet banking, mengonversi file CSV ke Excel, mencocokkan nomor referensi dengan buku besar kas ERP, dan menandai transaksi yang sudah kliring.",
    "data": [
      "Biaya Operasional Staf Rekonsiliasi: Rp 480 juta per tahun.",
      "Tingkat Kesalahan Manusia: Rata-rata 45 kesalahan pencocokan per bulan yang menyebabkan keterlambatan laporan posisi kas harian (Treasury Cash Position).",
      "Usulan Solusi: Mengembangkan bot Unattended RPA berbasis UiPath yang terintegrasi dengan API perbankan dan SAP ERP."
    ],
    "instructions": [
      "Evaluasi kelayakan proses rekonsiliasi bank tersebut menggunakan 4 kriteria kelayakan otomasi RPA (Rule-based, High Volume, Repetitive, Structured Data).",
      "Susun alur diagram alir (Process Flowchart) logika eksekusi bot RPA dari proses login bank hingga pelaporan pengecualian (Exception Handling).",
      "Jelaskan bagaimana bot menangani transaksi 'Exception' (misal: ada biaya admin bank yang belum ada jurnalnya di ERP) tanpa menyebabkan sistem macet.",
      "Hitung estimasi penghematan efisiensi waktu dan susun pengendalian keamanan atas kredensial login bank yang digunakan oleh bot."
    ],
    "outputFormat": [
      "Evaluasi 4 kriteria kelayakan proses RPA",
      "Bagan alur logika kerja bot RPA",
      "Mekanisme Exception Handling & keamanan kredensial"
    ],
    "rubric": [
      "Evaluasi kelayakan proses otomasi (25%)",
      "Logika perancangan bot & exception handling (45%)",
      "Manajemen risiko dan keamanan kredensial bot (30%)"
    ],
    "answerGuide": "1. Kelayakan RPA: (a) Rule-based: Aturan pencocokan pasti (Tanggal, Nominal, No Referensi); (b) High Volume: 30.000 transaksi/hari; (c) Repetitive: Dilakukan setiap hari dengan langkah identik; (d) Structured Data: Format e-statement bank dan tabel GL ERP memiliki kolom baku. Kesimpulan: 100% SANGAT LAYAK.\n\n2. Alur Logika Bot: Jam 05.00 Bot aktif otomatis -> Ambil kredensial terenkripsi -> Download e-statement -> Parse tabel mutasi -> Ambil data GL buku kas -> Jalankan matching algorithm -> Jika cocok sempurna (100% match), ubah status menjadi Cleared di SAP -> Jika tidak cocok, pindahkan ke file 'Exceptions_Report.xlsx' -> Jam 06.30 Kirim email ringkasan ke Manajer Keuangan.\n\n3. Exception Handling: Transaksi yang tidak cocok otomatis dikelompokkan: (a) Selisih waktu (timing difference seperti setoran dalam perjalanan) dicatat dalam antrean pending; (b) Biaya admin bank/bunga yang belum ada di ERP otomatis memicu draf jurnal otomatis ke akun 'Beban Administrasi Bank' untuk disetujui staf akuntan manusia (Human-in-the-Loop).\n\n4. Keamanan Kredensial: Username dan password internet banking dilarang keras ditulis dalam kode script (hardcoded). Kredensial wajib disimpan dalam Enterprise Credential Vault (seperti CyberArk) yang dienkripsi AES-256 dan hanya bisa diakses bot melalui otentikasi token dinamis."
  },
  {
    "type": "case",
    "scope": "TM 13: Blockchain, Smart Contracts & Paradigma Triple-Entry Accounting",
    "difficulty": "Sulit",
    "estimatedTime": "40\u201350 menit",
    "question": "Studi Kasus 13: Implementasi Smart Contracts & Auditability pada Supply Chain Finance",
    "context": "PT Mitra Logistik Global membentuk konsorsium bersama 15 pemasok dan 2 bank mitra menggunakan private permissioned blockchain. Tujuannya adalah mempercepat pembiayaan anjak piutang (Supply Chain Invoice Financing) dan menghilangkan perselisihan penagihan faktur barang yang rusak atau hilang.",
    "data": [
      "Masalah Lama: Waktu penagihan faktur membutuhkan 60 hari karena bank mitra harus memverifikasi keaslian faktur secara manual ke pihak pembeli melalui telepon dan email untuk menghindari faktur ganda.",
      "Solusi Baru: Setiap kali kontainer barang dikirim, sensor IoT mengunggah koordinat GPS dan status suhu kontainer ke smart contract. Ketika kontainer tiba di gerbang pelabuhan pembeli dan sensor RFID memindai barang, smart contract otomatis memvalidasi kondisi dan mencatat entri akuntansi."
    ],
    "instructions": [
      "Jelaskan bagaimana konsep 'Triple-Entry Accounting' bekerja pada konsorsium tersebut dan bedanya dengan pencatatan akuntansi ganda tradisional (Double-Entry).",
      "Rancang logika pseudo-code dari Smart Contract 'Automatic Invoice Settlement' (Kondisi: Jika barang diterima 100% mulus, cairkan dana pembayaran bank dalam waktu 24 jam dengan diskon 2%).",
      "Analisis 2 implikasi audit terhadap profesi auditor eksternal: Apakah bukti transaksi di blockchain dapat langsung diterima sebagai bukti audit yang cukup dan tepat (sufficient appropriate audit evidence)?",
      "Jelaskan risiko 'Garbage In, Garbage Out' (Oracle Problem) pada integrasi blockchain dan bagaimana pengendalian internal mengatasinya."
    ],
    "outputFormat": [
      "Komparasi Double-Entry vs Triple-Entry Accounting",
      "Rancangan logika algoritma Smart Contract",
      "Analisis implikasi bukti audit dan mitigasi Oracle Problem"
    ],
    "rubric": [
      "Penguasaan konsep Triple-Entry Accounting (30%)",
      "Logika perancangan algoritma Smart Contract (35%)",
      "Kedalaman analisis bukti audit dan Oracle Problem (35%)"
    ],
    "answerGuide": "1. Triple-Entry: Pada double-entry lama, Penjual mencatat Piutang (Debit) & Penjualan (Kredit), Pembeli mencatat Pembelian (Debit) & Utang (Kredit), lalu di akhir bulan kedua pihak saling kirim rekening koran untuk rekonsiliasi. Pada Triple-Entry, transaksi tersebut ditandatangani secara kriptografis oleh kedua belah pihak dan diposting ke shared blockchain ledger sebagai entri ketiga yang immutable. Tidak ada rekonsiliasi yang diperlukan lagi karena kedua belah pihak melihat catatan tunggal yang identik.\n\n2. Pseudo-code Smart Contract:\nIF (RFID_Scan == TRUE AND Container_Temp <= -18C AND Goods_Quantity == PO_Quantity) {\n    Trigger_Payment(Bank_Escrow, Supplier_Account, Net_Amount_After_2%_Discount);\n    Update_Accounting_State(Status = 'PAID_SETTLED');\n    Emit_Event('InvoiceSettledSuccessfully');\n} ELSE {\n    Hold_Escrow_Payment();\n    Alert_Inspector('DiscrepancyDetected');\n}\n\n3. Implikasi Bukti Audit: Catatan blockchain memberikan kepastian mutlak atas hak kepemilikan dan tanggal waktu transaksi (Timestamp & Existence). Namun auditor tetap harus memverifikasi apakah harga kontrak tersebut wajar secara pasar dan apakah pihak-pihak yang bertransaksi adalah entitas yang sah secara hukum.\n\n4. Oracle Problem: Blockchain hanya memproses data yang diumpankan dari dunia luar (Oracle). Jika sensor RFID diretas atau petugas menempelkan RFID pada barang rongsokan, blockchain tetap mengeksekusi pembayaran (GIGO). Mitigasi: Terapkan Multi-Signature Oracle (data divalidasi oleh sensor IoT sekaligus inspektur surveyor independen sebelum memicu smart contract)."
  },
  {
    "type": "case",
    "scope": "TM 14: Peta Integrasi Sistem ERP & Simulasi Siklus Bisnis UAS",
    "difficulty": "Komprehensif",
    "estimatedTime": "45\u201360 menit",
    "question": "Studi Kasus 14: Master Integrasi Modul ERP SAP S/4HANA & Investigasi Jejak Audit UAS",
    "context": "PT Manufaktur Otomotif Indonesia mengimplementasikan sistem ERP SAP S/4HANA yang mengintegrasikan seluruh lini bisnis: Sales and Distribution (SD), Materials Management (MM), Production Planning (PP), serta Financial Accounting and Controlling (FI/CO). Dalam audit akhir tahun (UAS SIA), mahasiswa diminta menguji integritas alur transaksi dari hulu ke hilir.",
    "data": [
      "Skenario Transaksi: Pelanggan memesan 50 unit transmisi mobil seharga Rp 500 juta. Biaya bahan baku per unit adalah Rp 6 juta, biaya konversi pabrik Rp 2 juta per unit (Total COGS = Rp 8 juta x 50 = Rp 400 juta).",
      "Kondisi: Stok barang jadi di gudang mencukupi. Termin penjualan 2/10, n/30. Pelanggan melunasi tagihan pada hari ke-8."
    ],
    "instructions": [
      "Gambarkan peta keterkaitan modul ERP (SD, MM, PP, FI/CO) yang berinteraksi sepanjang siklus transaksi dari Sales Order hingga Pelunasan Kas.",
      "Tuliskan seluruh ayat jurnal akuntansi keuangan (modul FI) yang diposting secara otomatis oleh sistem ERP pada saat: (a) Pengiriman barang ke pelanggan (Goods Issue); (b) Penerbitan faktur tagihan (Billing); (c) Penerimaan pembayaran pelunasan kas dalam masa diskon.",
      "Jelaskan bagaimana konsep 'Audit Trail' (Jejak Audit Digital) pada SAP memungkinkan auditor melacak nomor dokumen dari pembayaran bank mundur hingga nomor Purchase Order bahan baku pertama kali.",
      "Berikan 3 rekomendasi pengendalian preventif tingkat lanjut untuk memastikan integritas data keuangan pada sistem ERP berbasis cloud."
    ],
    "outputFormat": [
      "Diagram arsitektur integrasi modul ERP",
      "Daftar ayat jurnal akuntansi otomatis sistem",
      "Uraian mekanisme penelusuran Jejak Audit (Audit Trail)",
      "Tiga rekomendasi pengendalian preventif cloud ERP"
    ],
    "rubric": [
      "Pemahaman arsitektur terpadu ERP (30%)",
      "Akurasi jurnal akuntansi otomatis (35%)",
      "Penguasaan konsep Audit Trail & keamanan cloud ERP (35%)"
    ],
    "answerGuide": "1. Keterkaitan Modul ERP: Pelanggan kontak Sales (SD) -> SD cek ketersediaan stok di MM -> MM konfirmasi stok mencukupi -> SD buat Delivery Order -> Gudang (MM) posting Goods Issue -> Otomatis trigger jurnal di FI -> SD terbitkan Faktur -> Otomatis update Piutang di FI -> Pelanggan transfer kas -> Modul FI update Kas dan menghapus saldo piutang secara real-time.\n\n2. Ayat Jurnal Otomatis:\n(a) Saat Pengiriman Barang (Goods Issue):\n[D] Beban Pokok Penjualan (COGS) Rp 400.000.000\n   [K] Persediaan Produk Jadi (Finished Goods) Rp 400.000.000\n(b) Saat Penagihan Faktur (Billing):\n[D] Piutang Usaha (Accounts Receivable) Rp 500.000.000\n   [K] Pendapatan Penjualan (Sales Revenue) Rp 500.000.000\n(c) Saat Pelunasan Hari ke-8 (Diskon 2% x Rp 500 jt = Rp 10 jt):\n[D] Kas dan Bank Rp 490.000.000\n[D] Diskon Penjualan (Sales Discount) Rp 10.000.000\n   [K] Piutang Usaha Rp 500.000.000\n(Seluruh jurnal terbentuk otomatis oleh sistem tanpa intervensi manual akuntan).\n\n3. Mekanisme Jejak Audit (Document Flow): Setiap dokumen di SAP memiliki nomor unik yang saling terkait (Document Flow / Audit Trail). Dari dokumen penerimaan kas, auditor dapat mengklik link dokumen faktur, dari faktur mengklik surat jalan, dari surat jalan mengklik work order perakitan, hingga ke nomor PO pembelian bahan baku asalnya.\n\n4. Pengendalian Preventif Cloud ERP: (a) Enkripsi data end-to-end baik saat diam (data at rest) maupun saat transit (data in transit); (b) Pembatasan akses berbasis peran yang ketat (Role-Based Access Control / RBAC) dengan pemantauan hak akses istimewa (Privileged Access Management); (c) Pengaktifan log audit tak terhapus (WORM - Write Once Read Many storage) untuk seluruh transaksi finansial."
  }
];

export const SII306_BANK: BankSoal[] = [...SII306_BANK_UTS, ...SII306_BANK_UAS];

// Aliases for backwards compatibility
export const AKS301_BANK_UTS = SII306_BANK_UTS;
export const AKS301_BANK_UAS = SII306_BANK_UAS;
export const AKS301_BANK = SII306_BANK;
