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
    "scope": "TM 8: Conversion Business Process",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 8: Conversion Business Process",
    "context": "Ilustrasi latihan buatan. Pabrik memakai persediaan perpetual dan mencatat biaya per job. Beberapa pekerja juga menginspeksi hasilnya sendiri.",
    "data": [
      "Rp juta: WIP awal 10; DM terpakai 30; DL 20; OH dibebankan 10; WIP akhir 14; FG awal 8; FG akhir 12.",
      "Tanpa spoilage abnormal, selisih OH, retur atau transaksi lain dalam hitungan."
    ],
    "instructions": [
      "Hitung COGM/COGS dan tulis jurnal perpindahan biaya.",
      "Gambarkan produksi–inspeksi dengan jalur cacat mengikuti asumsi discard/penggantian.",
      "Rancang kontrol inspeksi serta relasi data issue–bahan dan operasi–pegawai."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "Biaya ditambahkan 60; tersedia di WIP 70; COGM 56; FG tersedia 64; COGS 52. Jurnal Rp juta: Dr WIP 30 Cr RM 30; Dr WIP 20 Cr utang gaji 20; Dr WIP 10 Cr OH 10; Dr FG 56 Cr WIP 56; Dr COGS 52 Cr FG 52. Alur: otorisasi → issue → work → inspect; gagal dibuang/diganti, lulus selesai. Pisahkan inspektur dan pekerja, batasi perubahan BOM, simpan bukti jumlah/biaya serta tanggal aktual. Gunakan linking table issue–material dan labor–employee, PK/FK dan referential integrity. WIP dapat dihitung dari event terbuka; akun WIP tetap ada. Rujukan: Richardson AIS 4e, Ch.9 pp.350–365 (PDF 375–390)."
  },
  {
    "type": "case",
    "scope": "TM 9: Integrated Project",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 9: Integrated Project",
    "context": "Ilustrasi latihan buatan. Distributor mengimpor data sales, purchases, receipts dan payments untuk laporan terpadu.",
    "data": [
      "Rp juta: kas awal 100; persediaan awal 40; modal awal 140; AR/AP awal nol.",
      "Beli kredit 50; jual kredit 90 dengan HPP 55; terima piutang 60; bayar utang 35; bayar gaji periode 10.",
      "Tanpa pajak, diskon, retur, depresiasi atau transaksi lain; pengakuan penyerahan dan penerimaan barang terpenuhi."
    ],
    "instructions": [
      "Hitung kas, piutang, inventory, utang, laba dan ekuitas akhir.",
      "Tunjukkan hubungan invoice–alokasi–receipts yang mendukung pembayaran parsial.",
      "Jelaskan uji PK/FK, cutoff, control total dan keterbatasan saldo seimbang."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "Kas 115; AR 30; inventory 35; AP 15; laba 25; ekuitas 165. Aset 180 = utang 15 + ekuitas 165. Invoice dan receipts mempunyai PK; alokasi menautkan keduanya dan nilai terkait. Agregasikan kas per invoice sebelum join agar tidak berlipat. Periksa record count, total sumber, tipe data, referential integrity dan cutoff. Pembelian menambah persediaan, HPP muncul dari barang dijual. Seimbang tidak membuktikan kelengkapan atau barang ada. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410)."
  },
  {
    "type": "case",
    "scope": "TM 10: Internal Controls dan COSO",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 10: Internal Controls dan COSO",
    "context": "Ilustrasi latihan buatan. Staf dapat membuat vendor dan menyetujui pembayaran sendiri. SOP approval ada, tetapi beberapa bukti approval kosong.",
    "data": [
      "Review perubahan rekening belum ditetapkan pemiliknya.",
      "Direktur ingin menganggap ERP sudah cukup menghilangkan risiko."
    ],
    "instructions": [
      "Petakan kondisi ke komponen dan prinsip COSO relevan.",
      "Bedakan kelemahan desain dan pelaksanaan.",
      "Rancang kontrol dengan pemilik, frekuensi, bukti dan risiko sisa."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "Prinsip 3/5 terkait wewenang/akuntabilitas; 7/8 asesmen risiko/fraud; 10/11/12 kontrol dan TI; 13/14 informasi; 16/17 monitoring/tindak lanjut. Hak yang konflik merupakan masalah desain, approval yang tidak dijalankan masalah pelaksanaan. Pisahkan master vendor, pencatatan dan treasury; verifikasi rekening melalui kontak tepercaya; review perubahan sebelum bayar dan berkala. Tentukan reviewer dan simpan log, konfirmasi, approval serta tindak lanjut. Evaluasi kolusi/override sebagai risiko sisa; reasonable assurance bukan risiko nol. Rujukan: Richardson AIS 4e, Ch.11 pp.386–408 (PDF 411–433)."
  },
  {
    "type": "case",
    "scope": "TM 11: Cybersecurity dan Computer Fraud",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 11: Cybersecurity dan Computer Fraud",
    "context": "Ilustrasi latihan buatan. ERP terganggu ransomware dan tim harus menilai pemulihan.",
    "data": [
      "Backup bersih valid terakhir 10.00; insiden 10.40; layanan pulih 13.10 pada hari sama.",
      "Target internal RPO 15 menit dan RTO 2 jam; tidak ada log/replikasi tambahan.",
      "Akses jarak jauh tanpa MFA; backup lain tidak dapat dipakai dalam asumsi ini."
    ],
    "instructions": [
      "Evaluasi CIA dan jelaskan apa yang belum diketahui.",
      "Hitung potensi kehilangan data dan durasi pemulihan dibanding target.",
      "Rancang respons insiden, pemulihan tervalidasi serta pencegahan berulang."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "Availability terganggu; integritas dan kemungkinan exfiltration/confidentiality perlu diperiksa. Potensi kehilangan data 40 menit, melampaui RPO 25 menit. Waktu pulih 150 menit, melampaui RTO 30 menit. Isolasi sesuai prosedur, jaga bukti, hilangkan sebab, restore sumber dipercaya, rekonsiliasi dan validasi sebelum operasi. Terapkan MFA, akses terbatas, patch, backup terlindungi/terpisah, uji restore dan BCP alternatif. Target merupakan asumsi internal, bukan kutipan regulasi. Hot site sendiri tidak menjamin data mutakhir. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464)."
  },
  {
    "type": "case",
    "scope": "TM 12: Reporting dan XBRL",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 12: Reporting dan XBRL",
    "context": "Ilustrasi latihan buatan. Tim membuat dashboard piutang dan file XBRL dari data ERP.",
    "data": [
      "Aging Rp juta: belum jatuh tempo 40; 1–30 hari 30; 31–60 hari 20; >60 hari 10.",
      "Laporan kas akhir dalam Rp juta menunjukkan 115; ekspor XBRL memuat unit IDR dan nilai 115.",
      "Pendapatan setahun diberi context instant; cabang A belum masuk ETL."
    ],
    "instructions": [
      "Hitung overdue ratio dan pilih visual yang sesuai.",
      "Bedakan taxonomy, instance, context dan unit; identifikasi kesalahan fakta.",
      "Susun validasi teknis serta rekonsiliasi sumber dan kontrol pelaporan."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "Total 100 dan overdue 60, rasio 60% hanya untuk populasi yang diberikan; cabang hilang membatasi kesimpulan perusahaan. Gunakan bar chart aging dengan unit, tanggal, label dan sumber. Taxonomy mendefinisikan konsep; instance memuat fakta. Kas 115 juta harus setara IDR115.000.000; jangan memakai decimals sebagai pengganti skala. Revenue setahun memakai duration, kas akhir instant. Perbaiki ETL dan rekonsiliasi jumlah/total, tag, unit, periode, dimensi serta laporan disetujui. Valid teknis belum membuktikan akuntansi benar. Rujukan: Richardson AIS 4e, Ch.14 pp.470–483 (PDF 495–508)."
  },
  {
    "type": "case",
    "scope": "TM 13: Blockchain dan AI Automation",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 13: Blockchain dan AI Automation",
    "context": "Ilustrasi latihan buatan. Konsorsium memakai sensor dan smart contract; bot mengambil data lalu mengajukan settlement.",
    "data": [
      "Invoice Rp100 juta; diskon kontraktual 2% hanya jika seluruh syarat diterima baik terpenuhi.",
      "Sensor menyebut 100 unit diterima, tetapi inspektur menemukan 10 rusak.",
      "Bot timeout setelah permintaan pembayaran; model AI memakai akurasi sebagai satu-satunya ukuran."
    ],
    "instructions": [
      "Jelaskan oracle problem, shared receipt dan batas bukti ledger.",
      "Rancang pseudocode pemeriksaan syarat/status, exception dan retry.",
      "Nilai kontrol bot serta ukuran kualitas AI."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "Tahan pembayaran karena bukti mutu tidak konsisten; angka Rp98 juta hanya berlaku bila syarat diskon/penerimaan terpenuhi. Ledger konsisten belum membuktikan kondisi fisik. Shared receipt mendukung double-entry, bukan sisi debit ketiga. Validasi caller, oracle dan approval; cek UNPAID; reservasi satu kali; minta settlement; konfirmasi sebelum PAID; jika ambigu masuk reviewer. Gunakan identitas bot terbatas, vault, log, change control dan idempotency. AI perlu evaluasi false positive/negative, precision/recall, mutu data dan drift, bukan akurasi saja. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541)."
  },
  {
    "type": "case",
    "scope": "TM 14: Justifying and Planning IT Initiatives",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–45 menit",
    "question": "Studi Kasus 14: Justifying and Planning IT Initiatives",
    "context": "Ilustrasi latihan buatan. Tim mengusulkan investasi TI lalu menyusun rencana implementasi.",
    "data": [
      "Rp juta: investasi awal 120; kas bersih 50 per akhir tahun selama 3 tahun; diskonto 10%; tanpa pajak, inflasi, residu atau kas lain.",
      "A=2 hari; B=3 dan C=4 setelah A; D=2 setelah B dan C; sumber daya cukup untuk paralel.",
      "Skenario alternatif: kas bersih hanya 45/tahun."
    ],
    "instructions": [
      "Hitung NPV dasar, NPV skenario dan payback dengan asumsi timing.",
      "Hitung ES/EF, LS/LF, float dan critical path; gambarkan Gantt.",
      "Jelaskan WBS/100% rule, sponsor dan pengendalian perubahan lingkup."
    ],
    "outputFormat": [
      "Alur/diagram dan analisis konsep",
      "Perhitungan atau rancangan dengan asumsi jelas",
      "Kontrol, bukti dan batas simpulan"
    ],
    "rubric": [
      "Ketepatan konsep dan pemetaan (30%)",
      "Ketepatan langkah serta perhitungan/rancangan (40%)",
      "Alasan, bukti dan batas jawaban (30%)"
    ],
    "answerGuide": "PV factor tiga tahun 10% = 2,486852. NPV dasar = 50×factor−120 = 4,34 juta; skenario = 45×factor−120 = −8,09 juta. Payback interpolasi 2,4 tahun hanya jika kas merata; dengan kas akhir tahun pengembalian pada akhir tahun3. Jadwal A0–2 B2–5 C2–6 D6–8; backward A0–2 B3–6 C2–6 D6–8; float B1, lainnya0. Critical path A–C–D =8. Jika B terlambat2 hari, proyek9 hari. WBS mencakup seluruh lingkup; 100%rule tidak berarti estimasi pasti. Sponsor menilai manfaat/risiko, project manager mengkoordinasikan. Perubahan perlu analisis dampak dan approval baseline. Rujukan: Richardson AIS 4e, Ch.17 pp.550–571 (PDF 575–596)."
  }
];

export const SII306_BANK: BankSoal[] = [...SII306_BANK_UTS, ...SII306_BANK_UAS];

// Aliases for backwards compatibility
export const AKS301_BANK_UTS = SII306_BANK_UTS;
export const AKS301_BANK_UAS = SII306_BANK_UAS;
export const AKS301_BANK = SII306_BANK;
