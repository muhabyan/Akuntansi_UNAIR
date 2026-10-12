# Integrasi Sistem Perusahaan & Simulasi Kasus Komprehensif Pra-UAS

Tatap muka penutup yang mengintegrasikan seluruh materi SIA: siklus transaksi, arsitektur ERP terpusat, tata kelola COSO/COBIT, keamanan siber, analitika data, dan teknologi masa depan. Dilengkapi dengan metodologi diagnostik kasus komprehensif persiapan Ujian Akhir Semester (UAS).

Gambar 14.1: Peta Arsitektur Integrasi ERP Terpusat dan Simulasi Komprehensif Siklus Bisnis Pra-UAS.

Peta Integrasi Arsitektur Sistem Informasi Akuntansi Terintegrasi

SIA terpadu menghubungkan data proses operasional dengan pencatatan dan pelaporan. Dampak tiap peristiwa bergantung pada model data, pemetaan akun, otorisasi dan kontrol yang diterapkan. Richardson Ch.10, PDF 408-409, membedakan peran event, resources dan query laporan:

Tabel 14.1: Integrasi Lintas Siklus Transaksi ke Buku Besar Umum (General Ledger / GL)

Siklus Asal | Pemicu Transaksi (Trigger) | Jurnal Otomatis yang Terbentuk | Modul ERP Terkait

Siklus Pendapatan (O2C) | Konfirmasi Bill of Lading pengiriman barang dagang ke pelanggan. | Debit: Piutang Usaha / Kas; Kredit: Pendapatan Penjualan. Debit: Beban Pokok Penjualan; Kredit: Persediaan Barang Jadi. | SD (Sales & Distribution) -> FI (Financial Accounting) & MM (Materials Management).

Siklus Pengeluaran (P2P) | Three-Way Match disetujui (PO + RR + Vendor Invoice). | Debit: Persediaan Bahan Baku / Beban Operasional; Kredit: Utang Usaha. | MM (Materials Management) -> FI (Accounts Payable).

Siklus Konversi | Laporan penyelesaian batch produksi dari stasiun perakitan. | Debit: Persediaan Barang Jadi; Kredit: Barang Dalam Proses (WIP). | PP (Production Planning) -> CO (Controlling) & FI.

Siklus Penggajian (Payroll) | Otorisasi rekapitulasi jam kerja biometrik bulanan. | Debit: Beban Gaji & Upah; Kredit: Utang PPh 21, Utang BPJS, dan Kas/Utang Gaji. | HR/HCM (Human Capital) -> FI.

Simulasi Kasus UAS: Diagnosa Kegagalan Sistem PT Global Distribusi Utama

Konteks Kasus: PT Global Distribusi Utama mengalami kerugian Rp 3.2 miliar dalam satu tahun buku. Hasil investigasi komite audit menemukan temuan-temuan berikut:

Temuan 1: Database ERP sering down selama 6 jam saat penutupan buku bulanan karena server kelebihan beban.

Temuan 2: Staf pembelian merangkap sebagai admin yang memiliki hak akses menambah vendor baru dan menyetujui Purchase Order.

Temuan 3: Perusahaan membayar Rp 850 juta ke vendor bernama 'CV Maju Lancar' yang beralamat sama dengan rumah pribadi Manajer Logistik.

Temuan 4: Terjadi kebocoran data rahasia harga pokok produksi ke kompetitor melalui USB flashdisk staf magang IT.

Solusi Matriks Rekomendasi Audit (Standar Jawaban UAS)

Tabel 14.2: Matriks Diagnosa & Rekomendasi Komprehensif UAS

Kasus | Kelemahan Pengendalian | Kategori COSO / GITC | Solusi & Pengendalian Perbaikan

Temuan 1 | Ketiadaan perencanaan kapasitas server dan tidak adanya High Availability / Hot Site. | GITC (Computer Operations & Availability) | Migrasikan database ke arsitektur Cloud ERP yang memiliki auto-scaling; siapkan server replikasi aktif.

Temuan 2 | Pelanggaran serius pemisahan tugas (SoD) antara pendaftaran vendor dan pemesanan. | Control Activities (Segregation of Duties) | Cabut hak akses otorisasi PO dari staf pendaftaran vendor; terapkan matriks SoD di konfigurasi modul ERP.

Temuan 3 | Fraud Vendor Fiktif (Shell Company) dan transaksi dengan pihak berelasi tanpa deklarasi. | Risk Assessment & Control Environment | Wajibkan verifikasi fisik dan legalitas NPWP/NIB vendor oleh Bagian Legal; terapkan audit data matching alamat vendor vs karyawan.

Temuan 4 | Ketiadaan Data Loss Prevention (DLP) dan akses fisik port USB yang terbuka bebas. | Information Security (GITC - Logical Access) | Nonaktifkan seluruh port USB di komputer kantor melalui Group Policy Windows; enkripsi harddisk laptop dengan BitLocker; terapkan perjanjian kerahasiaan (NDA).

Strategi Sukses Menghadapi UAS SIA

Gunakan pendekatan multidisipliner: hubungkan aspek bisnis, hukum, standar akuntansi, dan teknologi informasi. Jawaban yang menggabungkan prinsip akuntansi (pengakuan jurnal) dengan pengendalian TI (GITC & Application Controls) selalu mendapatkan nilai tertinggi dari dosen penguji.

## Flashcard

Fokus Utama Soal Ujian Akhir Semester (UAS) SIA

Perkiraan prioritas dari RPP dan materi: proses transaksi, kelemahan pengendalian, metode audit TI dan batas teknologi. Arsip UAS yang mendukung bentuk/bobot spesifik belum ditemukan. Rujukan: Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410).

Mendiagnosis Single Point of Failure (SPOF)

Mengidentifikasi kelemahan di mana kegagalan satu komponen kontrol atau staf tunggal dapat meruntuhkan seluruh keandalan sistem akuntansi. Rujukan: Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410).

Analisis Celah Pemisahan Tugas (SoD Matrix)

Memastikan tidak ada staf yang memegang akses gabungan yang berbahaya: misalnya staf yang membuat master data vendor tidak boleh memproses pembayaran faktur. Rujukan: Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410).

Perlakuan Audit atas Bukti Elektronik

Bukti digital memerlukan pemeliharaan jejak audit (audit trail) dan verifikasi bahwa pengendalian umum TI (GITC) berfungsi efektif sepanjang tahun. Rujukan: Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410).

Peran Laporan SOC 1 (SSAE 18 / ISAE 3402)

SOC 1 berkaitan dengan pengendalian organisasi jasa yang relevan bagi pengendalian internal pelaporan keuangan entitas pengguna. Jenis, periode, pengecualian dan kontrol pelengkap pengguna harus dibaca. Rujukan standar: ISA 402 paragraf 8 dan 16-17. Rujukan: Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410).

Saran Sukses Ujian Akhir Semester SIA

Gunakan diagram alur atau bagan saat menjelaskan usulan perbaikan sistem; identifikasi risiko bisnis terlebih dahulu sebelum menawarkan aktivitas pengendalian. Rujukan: Richardson et al. AIS 4e · Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410).

## Kuis TM terdaftar

Dalam integrated project Richardson, bagaimana model proses dan database mendukung laporan keuangan?

Buku menghubungkan business requirements, BPMN, integrated UML class diagram, tabel/relasi dan query laporan. Penjualan, pembelian, timecards dan pembayaran mempunyai peran berbeda; integrasi tidak berarti semua event adalah kas. Rujukan: Richardson AIS 4e, Ch.10, Exhibit 10.8 dan Summary, PDF 408-410.

Konsep 'Audit Trail' (Jejak Audit) dalam sistem ERP akuntansi modern berfungsi untuk...

Jejak audit mendukung penelusuran transaksi dan perubahan. Integritas catatan perlu pengendalian akses; jejak saja tidak membuktikan keberadaan, hak atau nilai transaksi. Rujukan: Richardson AIS 4e, Ch.11-13, Internal Controls dan Auditing AIS, PDF 411-433,475-488.

Kontrol preventif apa yang sesuai untuk membatasi penyalahgunaan jurnal manual dalam AIS?

Akses yang dibatasi, pemisahan tugas, otorisasi dan bukti membatasi kesempatan manipulasi. Ambang persetujuan mengikuti risiko dan kebijakan; tidak ada larangan universal semua jurnal ke Kas pada sumber ini. Rujukan: Richardson AIS 4e, Ch.11, Control Activities, PDF 411-433.

Manakah pernyataan yang paling tepat mengenai peranan Chart of Accounts (Bagan Akun Standar) dalam arsitektur sistem informasi akuntansi ERP?

Bagan akun mendukung klasifikasi dan pengikhtisaran transaksi. Daftar akun tidak menggantikan master data, validasi atau kontrol akses. Rujukan: Richardson AIS 4e, Ch.10, Develop Financial Statement Information, PDF 408-410.

Dalam integrated project Richardson, apa yang perlu dilakukan setelah data diimpor untuk menjaga keandalan query AIS?

PDF 409 mengharuskan koreksi data, primary key, tipe data dan struktur tabel yang efisien, kemudian relasi dengan referential integrity. Tanpa integritas referensial, keandalan query terpengaruh. Langkah ini memakai UML class diagram sebagai blueprint. Rujukan: Richardson AIS 4e, Ch.10, Import Data into Access, Create Efficient Tables, and Set Relationships, PDF 408-409, Exhibit 10.9.
