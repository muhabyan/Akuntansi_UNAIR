# Integrated Project: Proses, Database, dan Laporan

Gabungkan proses bisnis, model data, pencatatan, kontrol, dan bukti audit dalam satu kasus. Kita menelusuri pembelian, penjualan, penerimaan, serta pembayaran hingga saldo akhir, lalu memeriksa bagaimana kegagalan akses atau data dapat merusak hasil yang terlihat seimbang.

Seimbang belum tentu lengkap

Sistem membukukan setiap jurnal secara seimbang, tetapi satu penerimaan barang tidak pernah dimasukkan. Neraca saldo tetap seimbang karena debit dan kredit transaksi itu sama-sama tidak tercatat. Integrasi SIA membutuhkan kontrol **kelengkapan peristiwa**, keterkaitan data, dan rekonsiliasi ke bukti sumber.

1. Integrated project: satu proses analisis yang utuh

Ch. 10 menghubungkan perencanaan proyek, kebutuhan bisnis, pemodelan proses, model data terpadu, implementasi database, dan query laporan. Ini bukan sekadar menggambar kotak modul ERP. Model proses menjelaskan kegiatan dan tanggung jawab; model data menjelaskan apa yang harus dicatat serta hubungannya. Richardson pp. 376–385.

Dari kebutuhan sampai laporan

Alur pedagogis buatan mengikuti Ch. 10. Kebutuhan dan model dapat direvisi setelah validasi.

1. Kebutuhan + proses: Tujuan, lingkup, dokumen, pelaku. BPMN: aktivitas dan pesan.

2. UML / REA terpadu: Resources, Events, Agents. Tentukan hubungan dan multiplicity.

3. Database relasional: PK, tipe data, FK, linking table. Bersihkan dan validasi data impor.

4. Query + validasi: Saldo, laba dan informasi bisnis. Rekonsiliasi hasil ke peristiwa.

Hubungan siklus bisnis dan laporan

Siklus | Resource / event / agent | Dampak

Sales and collections | Inventory dan Cash; Sales dan Cash Receipts; Customer dan Employee. | Penjualan, HPP, piutang serta kas bergantung peristiwa dan alokasi.

Purchases and payments | Inventory dan Cash; Purchases dan Cash Disbursements; Vendor dan Employee. | Persediaan, utang dan kas; pembelian barang belum otomatis menjadi HPP.

Payroll | Jasa/waktu kerja dan Cash; Timecards serta Payroll; Employees dalam peran berbeda. | Beban, kewajiban dan kas sesuai akrual serta pembayaran.

Model terpadu berbagi master data seperti Employees, Inventory, dan Cash. Satu pegawai dapat muncul sebagai pekerja, supervisor, atau petugas pembayaran. Alias tabel pada perangkat database dapat mewakili peran berbeda tanpa berarti perusahaan harus menduplikasi orang yang sama. Exhibit 10.8–10.9, pp. 383–384.

Pilihan proyek dalam buku dan keluaran yang diminta

Tiga pilihan pada Ch.10 p.378

Proyek buku | Konteks | Pekerjaan utama

Y Not Flowers | Distributor bunga dengan beberapa toko. | BPMN, UML, pindah data Excel ke Access, laporan keuangan dan temuan.

Z Cheddr | Toko cheese/wine dengan penjualan daring. | Dokumentasikan proses, rancang data, implementasikan database, susun laporan dan temuan.

Y Not Flowers Boston · Small Business Accounting | Simulasi sistem akuntansi satu toko. | Masukkan transaksi dan tinjau informasi ringkasan; tugas terpisah dari dua proyek desain lengkap.

Kasus angka pada halaman ini adalah latihan buatan untuk memahami integrasi. Buku memberi pilihan proyek berbeda tingkat kompleksitas; jangan menganggap setiap proyek memerlukan semua tabel atau mempunyai angka yang sama. Keluaran yang diminta dosen menentukan lingkup.

Rencana proyek dan penemuan kebutuhan

Mulai dari **problem statement**, hasil yang diharapkan, tugas, penanggung jawab, tenggat dan ketergantungan. Urutan Exhibit 10.1 ialah project plan → business requirements → activity models → structure diagrams → import data → queries → report. Gantt membantu memantau jadwal; review berkala memperbarui rencana saat kebutuhan atau hambatan berubah. Ini urutan kerja yang bisa diiterasi, bukan alasan menunda validasi sampai laporan akhir.

Fact finding menanyakan siapa, apa, kapan, di mana, mengapa dan bagaimana. Wawancarai managers/employees, periksa Sales Order, Invoice, Purchase Order, Timecard dan bukti kas, kemudian validasi kebutuhan bersama pengguna. Tentukan pengguna, periode dan tingkat rincian laporan sejak awal agar atribut yang dibutuhkan benar-benar dikumpulkan. Richardson pp.378–379.

Dari context diagram ke BPMN yang divalidasi

Dalam context diagram BPMN buku, focal organization ditempatkan sebagai pool utama dan Customers, Suppliers, Bank serta Payroll Service sebagai pool luar. Message flows menunjukkan pesanan, kiriman, kas atau informasi yang dipertukarkan. Pesan masuk harus memperoleh respons proses; pesan keluar harus memiliki aktivitas sumber. Interaksi ini membantu mengenali proses sales, purchases, payroll dan kas sebelum menggambar rincian internal.

Mulai dari basic process flow, lalu tambahkan lane pelaksana dan data objects. Pada contoh sales, Customer Service mencatat pesanan, Shipping/Receiving menyiapkan barang dan Accounting mencatat pembayaran. Jika barang tidak tersedia, error boundary event dapat mengalihkan proses ke pembatalan, pembaruan status serta pemberitahuan pelanggan. Pilih notasi exception sesuai pemicu; gateway tidak identik dengan boundary event. Validasi urutan, tanggung jawab, dokumen dan pengecualian dengan stakeholders.

Business rules menentukan otorisasi, batas akses dan kondisi transaksi. SoD memisahkan otorisasi, custody dan pencatatan. Evaluasi value-added versus cost-added activities: kurangi perpindahan, waktu tunggu dan koreksi berulang, tetapi pertahankan kontrol yang dibutuhkan. Approval yang tidak menambah nilai produk masih mungkin diperlukan untuk mengelola risiko. Richardson pp.379–382.

2. Dari multiplicity ke PK dan FK

Skema latihan yang mendukung pembayaran parsial

Tabel | Kunci / hubungan | Tujuan

Customers | Customer_ID sebagai PK. | Satu pelanggan dapat memiliki banyak invoice.

Invoices | Invoice_ID PK; Customer_ID FK. | Header invoice pada satu pelanggan.

Invoice_Lines | (Invoice_ID, Line_No) PK; Product_ID FK. | Banyak item per invoice; menghubungkan invoice dan barang.

Cash_Receipts | Receipt_ID PK; tanggal dan nilai penerimaan. | Catat satu kejadian penerimaan kas.

Receipt_Allocations | (Receipt_ID, Invoice_ID) PK dalam asumsi satu alokasi per pasangan. | Hubungkan banyak penerimaan dengan banyak invoice.

Products | Product_ID PK. | Master barang yang dipakai oleh penjualan/pembelian.

Dalam asumsi model ini, invoice bisa belum dibayar sehingga memiliki 0..* alokasi. Penerimaan kas bisa dialokasikan ke beberapa invoice; kebijakan uang muka perlu dimodelkan bila diizinkan. **Referential integrity** menolak FK yang merujuk header/master yang tidak ada. Kontrol itu tidak otomatis memastikan barang benar diterima atau nilai alokasi tidak melebihi saldo; aturan tambahan diperlukan.

Menautkan invoice dan pembayaran

Skema latihan, bukan salinan persis skema buku. Hubungan many-to-many diterapkan melalui tabel alokasi.

1. Invoice I-01: Customer C-01 · nilai Rp90 juta. Invoice_ID unik pada header.

2. Penerimaan R-01: Kas diterima Rp60 juta. Receipt_ID unik pada kejadian.

3. Alokasi R-01 / I-01: Nilai yang dialokasikan Rp60 juta. FK harus mengarah ke data valid.

4. Saldo invoice: 90 − 60 = Rp30 juta. Cocokkan dengan subledger.

Implementasi Access dan pemeriksaan hasil impor

Setiap class menjadi tabel; atribut menjadi field dengan tipe/ukuran sesuai isinya. PK sisi one ditempatkan sebagai FK sisi many, sedangkan many-to-many memakai linking table. Sebelum impor Excel, periksa nama field, format tanggal, ID, nilai kosong dan duplikasi. Setelah impor, uji PK unik, FK valid, jumlah record dan total nilai; aktifkan referential integrity pada relationships Access. Diagram UML menjadi cetak biru, bukan sekadar lampiran laporan. Richardson pp.383–384.

3. Kasus angka: satu bulan PT Global Distribusi Utama

Baca asumsi sebelum menghitung

Satuan seluruh angka adalah Rp juta. Saldo awal: Kas 100, Persediaan 40, Modal 140; piutang dan utang awal nol. Persediaan perpetual, tanpa PPN, diskon, retur, depresiasi, pajak, dan biaya lain. Barang diterima/diterima baik serta penyerahan penjualan memenuhi asumsi pengakuan kasus. Tidak ada transaksi selain yang disebutkan.

Lima peristiwa dalam periode

Peristiwa | Nilai | Bukti / kontrol

Beli barang kredit dan terima | 50 | PO disetujui, laporan penerimaan dan invoice cocok.

Jual kredit, penyerahan terpenuhi | Harga 90; HPP 55 | Delivery, invoice, pelanggan, dan biaya barang dapat ditelusuri.

Terima pembayaran sebagian | 60 | Penerimaan kas dialokasikan ke invoice penjualan.

Bayar sebagian utang | 35 | Pembayaran dialokasikan ke pembelian yang disetujui.

Bayar gaji periode berjalan | 10 | Timecard dan payroll disetujui secara terpisah.

4. Pembahasan langsung: jurnal dan saldo akhir

Langkah pertama adalah membedakan pesanan dan peristiwa yang telah memenuhi pengakuan. Purchase order saja tidak menghasilkan jurnal dalam kasus ini. Saat barang diterima, persediaan dan utang bertambah. Saat penjualan terpenuhi, piutang serta pendapatan bertambah, dan biaya barang keluar menjadi HPP.

1 · Penerimaan pembelian kredit

Rp juta; tidak ada jurnal saat PO saja diterbitkan.

Persediaan: debit 50; credit –

Utang Usaha: debit –; credit 50

2a · Penjualan kredit

Rp juta; penyerahan memenuhi asumsi pengakuan.

Piutang Usaha: debit 90; credit –

Penjualan: debit –; credit 90

2b · Biaya barang yang dijual

Rp juta; perpetual.

Harga Pokok Penjualan: debit 55; credit –

Persediaan: debit –; credit 55

3 · Penerimaan sebagian piutang

Rp juta; pembayaran bukan penjualan baru.

Kas: debit 60; credit –

Piutang Usaha: debit –; credit 60

4 · Pembayaran sebagian utang

Rp juta; bukan HPP kedua kali.

Utang Usaha: debit 35; credit –

Kas: debit –; credit 35

5 · Pembayaran gaji periode berjalan

Rp juta; dalam kasus tidak ada utang gaji awal atau potongan.

Beban Gaji: debit 10; credit –

Kas: debit –; credit 10

Rekonsiliasi saldo akhir

Pos | Perhitungan Rp juta | Hasil

Kas | 100 + 60 − 35 − 10 | 115

Piutang | 0 + 90 − 60 | 30

Persediaan | 40 + 50 − 55 | 35

Utang usaha | 0 + 50 − 35 | 15

Laba periode | 90 − 55 − 10 | 25

Ekuitas akhir | 140 + 25 | 165

Persamaan akuntansi | Aset 115 + 30 + 35 = 180; utang 15 + ekuitas 165 = 180. | Seimbang

Angka yang harus saling cocok

Semua angka Rp juta dan berdasarkan asumsi kasus. Seimbang membantu validasi aritmetika, tetapi tidak membuktikan kelengkapan atau keabsahan.

1. Laba 25: Penjualan 90 − HPP 55 − gaji 10. Pembelian 50 tidak langsung HPP.

2. Kas akhir 115: Kas awal 100 + penerimaan 60. Kurangi bayar utang 35 dan gaji 10.

3. Piutang 30; utang 15: Jual 90 − kas terkait 60. Beli 50 − bayar terkait 35.

4. Aset = utang + ekuitas: 115 + 30 + 35 = 180. 15 + (140 + 25) = 180.

Jangan mengambil satu bullet buku sebagai aturan umum

Ch. 10 merangkum hubungan event dan laporan secara singkat. Dalam sistem perpetual umum, pembelian menambah persediaan, sedangkan HPP muncul dari biaya barang yang dijual. Saldo awal, alokasi, retur, diskon, write-off, dan cutoff mengubah formula sederhana piutang/utang. Contoh di sini sengaja menyatakan unsur yang diabaikan.

5. Audit trail dan query laporan

Jejak audit menghubungkan penerimaan kas → alokasi → invoice → pengiriman → pesanan pelanggan, dengan pelaku, waktu, dan bukti pada tiap tahap. Penelusuran hingga pembelian bahan baku memerlukan data batch/lot, produksi, atau costing yang memang tersedia; tidak otomatis ada satu rantai klik langsung. Keberhasilan posting otomatis bergantung pada konfigurasi dan pengendalian sistem.

WITH Allocated AS (
  SELECT Invoice_ID, SUM(Allocated_Amount) AS Total_Paid
  FROM Receipt_Allocations
  GROUP BY Invoice_ID
)
SELECT i.Invoice_ID,
       i.Invoice_Amount - COALESCE(a.Total_Paid, 0) AS Outstanding
FROM Invoices i
LEFT JOIN Allocated a ON a.Invoice_ID = i.Invoice_ID;

Query ilustratif saldo per invoice. Total alokasi perlu cutoff serta validasi terpisah.

Gunakan LEFT JOIN agar invoice tanpa pembayaran tetap masuk. Nilai Outstanding negatif perlu diperiksa sebagai kemungkinan kelebihan alokasi, kredit, atau salah data. Uji keunikan PK, tipe tanggal/angka, FK, dan control total setelah impor sebelum mengandalkan laporan. Richardson pp. 383–384 (PDF 408–409).

Laporan akhir: hasil query harus menjawab kebutuhan awal

Transaction queries memilih field, join, menghitung dan mengelompokkan pada grain yang tepat. Sales, inventory, purchases serta timecards/payroll mendukung laba rugi sesuai pengakuan dan pembebanan; saldo resources dan alokasi pembayaran mendukung neraca; cash receipts, cash disbursements serta payroll mendukung arus kas. Query per pelanggan, produk atau toko mendukung penilaian kinerja. Jangan menjumlah pembelian sebagai HPP tanpa memperhitungkan persediaan.

Rekonsiliasi jumlah/nilai query ke dokumen, peristiwa dan saldo yang relevan. **Final report** menjelaskan masalah, model proses/data, implementasi, hasil pengujian, temuan kontrol serta rekomendasi berbukti. Perubahan kebutuhan harus tercermin pada BPMN, UML, database dan report sekaligus. Contoh pemeriksaan: bila laporan meminta penjualan per toko, setiap transaksi harus memiliki hubungan toko yang dapat ditelusuri, bukan toko yang baru ditebak pada akhir proyek. Richardson pp.383–385.

6. Kasus pengendalian: diagnosis sampai bukti audit

Empat temuan dan tindak lanjut

Matriks jawaban yang dapat diuji

Kondisi → risiko | Kontrol dan pemilik | Bukti / prosedur audit

Staf membuat vendor sekaligus membayar → vendor fiktif dan kas hilang. | Pisahkan master vendor, approval dan treasury; supervisor meninjau perubahan rekening. | Periksa role, uji akun yang konflik, telusuri perubahan vendor ke konfirmasi.

Developer bebas mengubah produksi → logika komisi dapat disusupi. | Change management, release independen, akses darurat terbatas dan direview. | Bandingkan daftar perubahan ke log; reperformance komisi dengan aturan resmi.

Jurnal malam dekat threshold → potensi override/pemecahan. | Approval kumulatif berbasis kebijakan dan review exception oleh pihak independen. | Validasi populasi, kelompokkan transaksi terkait, inspeksi dokumen; anomali belum bukti fraud.

Backup hanya di server yang sama → gangguan bisa merusak semua salinan. | Pemilik TI menyediakan salinan terlindungi dan uji restore sesuai target bisnis. | Inspeksi hasil backup/restore, durasi dan data yang pulih; nilai RPO/RTO.

Tambahkan risiko sisa pada setiap rekomendasi. Pemisahan tugas tidak mencegah seluruh kolusi; log tidak membantu jika tidak ditinjau; blockchain tidak memperbaiki input fisik yang palsu; bot tidak menyelesaikan sengketa otomatis. Menghubungkan batas ini menunjukkan pemahaman sistem secara utuh.

7. Latihan mandiri komprehensif

Dengan data kasus yang sama, penerimaan pelanggan ternyata 50, bukan 60. Hitung perubahan kas, piutang, laba, dan persamaan akuntansi.

Kas akhir = 100 + 50 − 35 − 10 = 105. Piutang = 90 − 50 = 40. Persediaan 35, utang 15, laba 25, ekuitas 165 tetap. Aset = 105 + 40 + 35 = 180. Perubahan penerimaan kas menukar komposisi aset; tidak menciptakan penjualan atau laba baru.

Satu invoice pembelian dan penerimaan barang Rp8 juta terlewat dari data impor. Mengapa laporan masih seimbang, dan bagaimana mendeteksinya?

Persediaan dan utang sama-sama kurang Rp8 juta sehingga persamaan tetap seimbang. Cocokkan receiving report dan urutan dokumen ke catatan pembelian, rekonsiliasi subledger, serta periksa invoice pemasok yang belum tercatat. Uji dari dokumen sumber ke catatan membantu menilai kelengkapan.

Peta belajar pra-UAS

TM8: conversion. TM9: integrated project. TM10: internal controls. TM11: cybersecurity. TM12: reporting/XBRL. TM13: blockchain dan AI automation. TM14: justifikasi investasi dan manajemen proyek TI.

Pelengkap: AMPS, aging, dan kualitas data untuk query (Ch. 2–3)

Penjualan naik, mengapa kas belum masuk?

Manajer melihat penjualan naik dan menyimpulkan kinerja baik. Namun invoice belum tertagih. Pertanyaan yang lebih berguna: berapa saldo piutang yang sudah jatuh tempo, terkonsentrasi pada pelanggan mana, dan tindakan penagihan apa yang diperlukan? Angka total penjualan saja belum menjawabnya.

1. AMPS: dari pertanyaan sampai cerita yang dapat ditindaklanjuti

Buku utama memakai **AMPS: Ask the Question, Master the Data, Perform the Analysis, Share the Story**. Prosesnya berulang: analisis dapat menunjukkan data yang kurang atau membuat pertanyaan awal perlu diperbaiki. Richardson Ch. 2 pp. 50–60. Analitika bukan kegiatan membuat grafik dahulu lalu mencari cerita yang cocok.

AMPS pada masalah penagihan

Ilustrasi buatan menggunakan AMPS dari buku utama. Hasil review dapat mengembalikan pekerjaan ke tahap data atau pertanyaan.

1. Ask the Question: Piutang mana terlambat dibayar? Tetapkan tanggal analisis dan unit.

2. Master the Data: Gabungkan invoice dan alokasi kas. Uji kunci, kelengkapan, cutoff.

3. Perform the Analysis: Hitung saldo dan days past due. Kelompokkan umur serta pelanggan.

4. Share the Story: Tampilkan nominal, proporsi, batas. Tentukan pemilik tindak lanjut.

Pertanyaan harus menentukan kebutuhan data

Pertanyaan | Unit observasi | Data minimum / batas

Invoice mana belum lunas? | Satu invoice pada tanggal analisis. | Invoice ID, nilai invoice, kredit/retur, alokasi kas hingga tanggal analisis.

Siapa paling terlambat? | Pelanggan dan invoice terkait. | Customer ID, due date, saldo; jangan hanya memakai umur sejak invoice.

Ada pembayaran ganda? | Pembayaran atau pasangan pembayaran. | Vendor ID, referensi, nilai, tanggal, rekening; tentukan pembatalan dan pembayaran cicilan.

IMPACT sebagai kerangka pelengkap

IMPACT lazim dikenalkan dalam literatur Data Analytics for Accounting oleh Richardson, Teeter, dan Terrell: Identify questions, Master the data, Perform the test plan, Address and refine results, Communicate insights, Track outcomes. Materi lama menggunakan nama ini tanpa membedakan sumber. Untuk kesinambungan dengan TM2 dan buku AIS 4e, alur utama di sini memakai AMPS; evaluasi hasil serta pemantauan tindak lanjut tetap dijelaskan. IMPACT tidak diklaim sebagai model utama Ch. 2 AIS.

2. Empat jenis analitika dan big data

Jenis analitika mengikuti pertanyaan

Jenis | Pertanyaan | Contoh / batas

Descriptive | Apa yang terjadi? | Aging piutang dan tren penjualan; menggambarkan data yang tersedia.

Diagnostic | Mengapa terjadi? | Telusuri keterlambatan menurut dispute, pelanggan atau proses; korelasi saja belum membuktikan sebab.

Predictive | Apa yang mungkin terjadi? | Prediksi keterlambatan berdasarkan pola historis; perlu validasi dan ketidakpastian.

Prescriptive | Apa tindakan terbaik dalam batas tertentu? | Prioritas penagihan dengan keterbatasan staf dan biaya; hasil bergantung asumsi serta tujuan.

**Big data** dapat dipahami melalui volume (jumlah), velocity (kecepatan), variety (ragam), dan veracity (keandalan). File invoice terstruktur, email sengketa yang tidak terstruktur, dan log ERP bisa memberi informasi berbeda. Data berukuran besar tidak otomatis lebih relevan atau bebas kesalahan. Hak akses, privasi, retensi, serta tujuan pemakaian tetap harus diperhatikan.

3. Master the Data: ETL dan kontrol mutu

Extract: ambil data dari sistem sumber dengan lingkup, tanggal, parameter, dan hak yang jelas; simpan salinan sumber yang terlindungi.

Transform: seragamkan tipe tanggal/mata uang, tangani nilai kosong, pisahkan transaksi batal, dan dokumentasikan koreksi.

Load: muat data bersih ke tabel analisis dengan tipe data dan kunci yang tepat.

Validasi hasil: cocokkan jumlah baris dan total nilai ke sumber, uji duplikasi, serta simpan catatan perubahan dan versi query.

Tentukan **grain** atau satuan satu baris. Tabel invoice bisa satu baris per invoice; tabel line item bisa beberapa baris per invoice. Jika invoice senilai Rp10 juta dengan dua baris barang langsung digabung dengan dua penerimaan kas, join bisa membuat empat baris dan menggandakan agregat. Agregasikan setiap sisi sesuai kunci sebelum digabung atau gunakan model alokasi yang benar.

Mencegah saldo berlipat karena join

Model analisis buatan: satu invoice dapat dibayar beberapa kali. Kredit/retur dan cutoff harus dimasukkan bila ada.

1. Invoice: Satu baris per Invoice_ID. Nilai invoice tidak diulang per item.

2. Alokasi penerimaan: Banyak baris untuk satu invoice. Jumlahkan kas per Invoice_ID dulu.

3. Gabungkan agregat: LEFT JOIN menjaga invoice terbuka. Kas kosong diperlakukan 0.

4. Rekonsiliasi: Total saldo cocok subledger. Selisih ditelusuri sebelum grafik.

Checklist kualitas data

Uji | Contoh masalah | Tindakan

Completeness | Sebagian cabang atau periode tidak ikut diekspor. | Rekonsiliasi record count dan control total ke sumber.

Validity | Tanggal tidak dapat dibaca atau vendor tidak dikenal. | Periksa format dan master; pisahkan exception.

Uniqueness | Invoice_ID duplikat pada tabel yang seharusnya unik. | Periksa grain dan sumber; jangan menghapus tanpa investigasi.

Accuracy | Nilai/konversi mata uang salah. | Cocokkan ke dokumen dan aturan transformasi.

Timeliness / cutoff | Pembayaran setelah tanggal analisis mengurangi saldo masa lalu. | Filter transaksi berdasarkan tanggal efektif yang disepakati.

4. Contoh bertahap: aging piutang yang dapat direkonsiliasi

Asumsi latihan per satu tanggal analisis

Seluruh nilai dalam Rp juta, tanpa saldo awal, retur, pajak, write-off, atau valuta asing. Penerimaan kas sudah dialokasikan ke invoice yang benar dan hanya sampai tanggal analisis.

Data invoice setelah agregasi kas

Invoice | Nilai | Kas dialokasikan | Saldo | Hari lewat jatuh tempo

I-01 | 50 | 10 | 40 | −5 (belum jatuh tempo)

I-02 | 45 | 15 | 30 | 20

I-03 | 30 | 10 | 20 | 45

I-04 | 20 | 10 | 10 | 75

Total | 145 | 45 | 100 | Satu tanggal analisis

Saldo per invoice = nilai invoice − kredit/retur yang relevan − kas teralokasi. I-02: 45 − 15 = Rp30 juta.

Days past due = tanggal analisis − due date. Nilai negatif berarti belum jatuh tempo. Dalam asumsi ini nilai 0 masih jatuh tempo hari ini; overdue dimulai >0.

Kelompokkan: belum jatuh tempo/hari ini 40; 1–30 hari 30; 31–60 hari 20; >60 hari 10.

Uji total: 145 − 45 = 100, sama dengan 40 + 30 + 20 + 10.

Saldo overdue = 30 + 20 + 10 = 60. Proporsi overdue = 60 ÷ 100 × 100% = 60%.

Prioritaskan investigasi saldo tua dan sengketa, tetapi jangan otomatis menyimpulkan semua overdue menjadi kerugian kredit.

Aging piutang: Rp100 juta, Rp60 juta sudah lewat jatuh tempo

Data latihan buatan. Umur dihitung dari due date, saldo setelah alokasi penerimaan kas. Nilai penuh tersedia pada tabel kasus.

Belum jatuh tempo: Rp40 juta.

Lewat jatuh tempo 1–30 hari: Rp30 juta.

Lewat jatuh tempo 31–60 hari: Rp20 juta.

Lewat jatuh tempo >60 hari: Rp10 juta.

Total Rp100 juta; jumlah lewat jatuh tempo Rp60 juta atau 60%. Grafik memakai skala nol dan satu tanggal analisis.

WITH Paid AS (
  SELECT Invoice_ID, SUM(Allocated_Amount) AS Paid_Amount
  FROM Receipt_Allocations
  WHERE Receipt_Date <= :analysis_date
  GROUP BY Invoice_ID
)
SELECT i.Invoice_ID, i.Due_Date,
       i.Invoice_Amount - COALESCE(p.Paid_Amount, 0) AS Balance
FROM Invoices i
LEFT JOIN Paid p ON p.Invoice_ID = i.Invoice_ID
WHERE i.Invoice_Date <= :analysis_date;

Query ilustratif; nama tabel adalah model latihan, bukan skema Sunset Graphics. DATE_DIFF bergantung pada DBMS.

5. Anomali, threshold, dan batas Benford

Contoh analisis audit: bandingkan Entered_By dan Approved_By untuk mencari self-approval; cari nomor invoice vendor yang sama; kelompokkan pembayaran kecil berulang mendekati batas approval; telusuri jurnal di luar jam normal. Semua hasil ini adalah **exception untuk ditelusuri**. Pembayaran cicilan, proses batch malam, atau pengguna layanan dapat memberi penjelasan sah.

Dua invoice Rp49 juta dan batas approval Rp50 juta

Dua pembayaran ke vendor sama dalam satu hari menghasilkan total Rp98 juta. Ini alasan memeriksa kemungkinan pemecahan transaksi. Periksa apakah keduanya berasal dari satu pembelian, siapa pembuat/penyetuju, dokumen penerimaan, dan hubungan pihak terkait. Nilai individual di bawah batas belum membuktikan niat menghindari kontrol.

Benford: rumus, contoh, dan kapan tidak layak

P(D_1=d)=\log_{10}\left(1+\frac{1}{d}\right),\quad d=1,\ldots,9

D₁ adalah digit pertama bukan nol. P(1) ≈30,1%; P(9) ≈4,6%. Ini pola teoritis untuk populasi yang sesuai, bukan hukum yang berlaku pada setiap kolom angka.

Benford dapat berguna untuk populasi numerik alami dengan rentang yang cukup lebar. Nomor identitas, nomor cek berurutan, harga yang ditetapkan, dan populasi yang sengaja dibatasi dekat threshold bisa tidak cocok. Pada 1.000 observasi yang layak, jumlah teoritis berawalan 1 sekitar 301; selisih aktual tetap perlu analisis statistik, konteks, dan bukti transaksi. Pengujian berulang juga dapat menambah false positive.

Batas sumber Benford

Ini perluasan analitika audit, bukan pengganti AMPS atau inti bab AIS yang dirujuk. Deviasi statistik tidak membuktikan fabrikasi, materialitas, atau siapa pelakunya. Pada populasi yang tidak layak, jangan menafsirkan deviasi sebagai temuan fraud.

6. Memilih dan membaca visual

Pertanyaan menentukan grafik

Tujuan | Pilihan | Hal yang diperiksa

Bandingkan kategori | Bar chart | Skala nol, unit, urutan, label; hindari efek 3D.

Lihat tren waktu | Line chart | Interval waktu konsisten, perubahan metode, data hilang.

Lihat distribusi | Histogram / box plot | Lebar bin, outlier, dan jumlah observasi.

Lihat hubungan dua variabel | Scatter plot | Skala, outlier, kelompok; hubungan belum membuktikan sebab.

Tunjukkan bagian dari total | Stacked bar / pie sederhana | Kategori menjumlah ke total yang jelas; kategori banyak sulit dibandingkan.

Pada grafik aging, panjang batang menunjukkan nominal pada unit yang sama. Angka 60% harus menyebut penyebut Rp100 juta dan tanggal analisis. Warna membantu menandai overdue, tetapi label dan urutan tetap membawa makna untuk pembaca yang tidak membedakan warna. Cerita akhir harus menyebut temuan, batas data, tindakan, penanggung jawab, serta kapan hasilnya ditinjau.

7. Uji pemahaman

Setelah join line item dan penerimaan, total invoice naik dua kali lipat. Apakah penjualan sebenarnya naik?

Belum dapat disimpulkan. Periksa grain dan multiplicity join. Bandingkan count serta total sebelum/sesudah, agregasikan kas pada tingkat invoice, dan pastikan setiap invoice hanya dihitung sesuai model.

Digit 9 ditemukan sangat banyak pada jurnal Rp90–99 juta. Apakah ini bukti fraud?

Tidak. Rentang yang sengaja dibatasi itu memang membuat digit 9 dominan sehingga pembandingan Benford bisa tidak layak. Investigasi threshold avoidance dengan dokumen, hubungan transaksi, akses, dan approval.

Sumber dan batas pembahasan

Richardson Ch. 2 pp. 49–60 (AMPS, data, jenis analitika) dan Ch. 3 pp. 110–126 (pemilihan dan pembacaan visual). Query, aging dan threshold adalah perluasan latihan. IMPACT dan Benford ditandai sebagai pelengkap agar tidak diatribusikan keliru ke bab buku utama. Angka, perusahaan, diagram, dan skenario latihan di halaman ini adalah ilustrasi buatan kecuali dinyatakan lain. Urutan materi inti mengikuti RPS-SIA, Pembagian Mengajar Gasal 2025/2026, halaman 1; pendalaman di luar bab terjadwal diberi label pelengkap.

Sumber dan batas pembahasan

Richardson Ch. 10 pp. 376–385 (PDF 401–410); Exhibit 10.8–10.9 pp. 383–384 untuk integrasi, PK/FK, dan query. Kasus angka, model alokasi pembayaran, matriks audit dan jurnal adalah latihan buatan yang menghubungkan topik TM1–TM13; bukan simulasi resmi soal dosen. Angka, perusahaan, diagram, dan skenario latihan di halaman ini adalah ilustrasi buatan kecuali dinyatakan lain. Urutan materi inti mengikuti RPS-SIA, Pembagian Mengajar Gasal 2025/2026, halaman 1; pendalaman di luar bab terjadwal diberi label pelengkap.

## Latihan

Apa urutan logis integrated project?

Business requirements memandu model proses dan data; model menjadi blueprint database dan query. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Setelah impor data, tindakan yang mendukung keandalan query adalah...

Periksa kunci, tipe data dan relasi setelah impor. Rincian langkah ini berada pada PDF 408–409. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Kas awal 100, penerimaan 60, pembayaran vendor 35 dan gaji 10 (Rp juta). Kas akhir adalah...

100 + 60 − 35 − 10 = 115. Laba tidak sama dengan perubahan kas. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Invoice dapat dibayar beberapa kali. Mengapa kas perlu diagregasi per invoice sebelum join?

Grain dan multiplicity join dapat menggandakan agregat. Tabel alokasi dan LEFT JOIN membantu menjaga invoice terbuka. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Neraca saldo seimbang. Apa simpulan yang dapat didukung?

Transaksi yang sama-sama tidak dicatat pada debit/kredit tidak merusak keseimbangan. Perlu bukti sumber dan kontrol kelengkapan. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

## Flashcard

Urutan Integrated Project

Kebutuhan → model proses → UML/REA terpadu → database → query dan validasi. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Kunci dan integritas referensial

PK unik dan tidak null; FK mengarah data yang valid sesuai aturan. Ini tidak membuktikan substansi barang. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Saldo piutang

Masukkan saldo awal, penjualan, alokasi kas, retur/kredit dan penyesuaian; nyatakan asumsi formula sederhana. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Grain dan join

Satu baris mewakili unit yang jelas. Join banyak baris dapat menggandakan total; agregasikan dan rekonsiliasi. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Audit trail

Tautkan dokumen, pelaku, waktu dan perubahan. Penelusuran ke bahan baku memerlukan traceability yang tersedia. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).

Saldo seimbang

Debit = kredit membantu aritmetika; transaksi yang sama-sama terlewat tetap dapat membuat laporan salah. Rujukan: Richardson AIS 4e, Ch.10 pp.376–385 (PDF 401–410).
