// src/data/banksoal/aks301.ts
// Bank Soal Esai & Studi Kasus Komprehensif Sistem Informasi Akuntansi (AKS301)
// Berdasarkan Vernon J. Richardson et al. (4th ISE ed. 2023), Romney & Steinbart (15e),
// COSO Internal Control (2013), dan ISACA COBIT 2019 Framework.
// 14 Studi Kasus Lengkap: 7 Kasus Pra-UTS (TM 1-7) & 7 Kasus Pra-UAS (TM 8-14)
import type { BankSoal } from '../../types';

export const AKS301_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 1: Rantai Nilai SIA, Kualitas Informasi & Evaluasi Investasi Sistem",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 1: Transformasi Rantai Nilai Ritel & Analisis Kelayakan Investasi Cloud POS",
    "context": "PT Ritel Sejahtera mengoperasikan 120 minimarket waralaba. Saat ini, setiap gerai masih menggunakan sistem kasir offline yang datanya baru dikirim ke kantor pusat setiap tengah malam melalui email file spreadsheet. Manajemen menghadapi masalah serius: sering terjadi kehabisan stok barang laris (stockout), kelebihan stok barang lambat terjual (overstock), dan pencurian kasir yang baru terdeteksi 3 minggu kemudian.",
    "data": [
      "Kerugian Akibat Stockout & Overstock: Rp 1,8 miliar per tahun.",
      "Kerugian Kasir & Selisih Kas Tidak Terlacak: Rp 450 juta per tahun.",
      "Tawaran Investasi Cloud ERP-POS Real-Time: Biaya pengadaan lisensi dan hardware Rp 1,2 miliar (amortisasi 4 tahun = Rp 300 juta/tahun).",
      "Biaya Pemeliharaan & Langganan Cloud: Rp 180 juta per tahun.",
      "Estimasi Penghematan & Peningkatan Penjualan dari Ketersediaan Stok Real-Time: Rp 1,1 miliar per tahun."
    ],
    "instructions": [
      "Petakan bagaimana implementasi Cloud ERP-POS mentransformasikan Aktivitas Utama (Inbound, Operations, Outbound, Marketing) dan Aktivitas Pendukung dalam Rantai Nilai (Value Chain) Porter.",
      "Evaluasi karakteristik kualitatif informasi yang dihasilkan sistem baru (Relevance, Faithful Representation, Timeliness, Verifiability) dibanding sistem spreadsheet lama.",
      "Hitung Nilai Ekonomi Bersih Informasi (Net Value of Information / ROI) per tahun atas usulan investasi teknologi tersebut dan berikan rekomendasi manajerial apakah proyek layak dieksekusi."
    ],
    "outputFormat": [
      "Diagram matriks pemetaan Rantai Nilai Porter",
      "Tabel komparasi karakteristik kualitas informasi",
      "Analisis kuantitatif Cost-Benefit & rekomendasi keputusan"
    ],
    "rubric": [
      "Ketepatan pemetaan konsep Value Chain (30%)",
      "Kedalaman evaluasi kualitas informasi akuntansi (35%)",
      "Akurasi perhitungan kelayakan ekonomi sistem (35%)"
    ],
    "answerGuide": "1. Pemetaan Rantai Nilai: Inbound Logistics menjadi otomatis via Auto-Replenishment System saat stok mencapai reorder point; Operations memangkas antrean kasir; Outbound Logistics mempercepat pemenuhan pesanan omnichannel; Marketing mendapatkan data perilaku belanja pelanggan secara real-time.\n\n2. Kualitas Informasi: Timeliness melonjak dari 24 jam menjadi real-time detik; Faithful Representation terjamin karena input kasir terhubung scanner barcode (bebas salah ketik); Verifiability meningkat karena setiap transaksi tersimpan dalam cloud audit log yang tidak dapat diedit kasir gerai.\n\n3. Analisis Biaya-Manfaat: Total Manfaat Tahunan = Rp 1,1 miliar + penghentian kerugian kasir Rp 450 juta = Rp 1,55 miliar. Total Biaya Tahunan = Rp 300 juta (depresiasi hardware) + Rp 180 juta (langganan cloud) = Rp 480 juta. Net Benefit per tahun = Rp 1,07 miliar. ROI = (1.070 / 480) x 100% = 222.9%. Rekomendasi: Investasi SANGAT LAYAK dieksekusi segera."
  },
  {
    "type": "case",
    "scope": "TM 2: Pemodelan BPMN 2.0 & Evaluasi Pemisahan Tugas (SoD) Siklus Penjualan",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 2: Redesain Proses Bisnis BPMN 2.0 & Mitigasi Fraud Piutang Tak Tertagih",
    "context": "PT Distribusi Nusantara mengalami lonjakan piutang macet sebesar Rp 620 juta dalam dua kuartal terakhir. Investigasi internal menemukan bahwa bagian pemasaran (Sales Department) memiliki wewenang menyetujui batas kredit pelanggan baru sekaligus mencetak Surat Jalan pengeluaran barang dari gudang tanpa persetujuan dari Departemen Keuangan.",
    "data": [
      "Entitas yang Terlibat: Pelanggan, Bagian Penjualan, Departemen Kredit/Keuangan, Gudang, dan Bagian Penagihan/Piutang.",
      "Temuan Investigasi: 14 pesanan besar disetujui untuk pelanggan yang sedang mengalami gagal bayar karena staf penjualan mengejar komisi target bulanan.",
      "Kelemahan Kontrol: Tidak ada pemisahan antara fungsi otorisasi kredit (authorization), penyimpanan fisik barang (custody), dan pencatatan penagihan (recording)."
    ],
    "instructions": [
      "Identifikasi 3 kelemahan pengendalian internal fatal pada proses penjualan PT Distribusi Nusantara berdasarkan konsep COSO Control Activities.",
      "Rancang struktur pemisahan tugas (Segregation of Duties) yang ideal dengan membagi alur kerja ke dalam 4 Swimlanes independen.",
      "Buat spesifikasi notasi diagram BPMN 2.0 yang mencakup Start Event, Exclusive Gateway pemeriksaan batas kredit (XOR), aktivitas gudang dan penagihan paralel, hingga End Event.",
      "Sebutkan 2 kontrol aplikasi terprogram (automated application controls) pada software ERP untuk mengunci wewenang kredit."
    ],
    "outputFormat": [
      "Daftar kelemahan pengendalian internal",
      "Matriks Segregation of Duties (Otorisasi vs Kustodi vs Pencatatan)",
      "Deskripsi alur diagram BPMN 2.0 dan rekomendasi kontrol aplikasi"
    ],
    "rubric": [
      "Ketajaman identifikasi risiko SoD (30%)",
      "Ketepatan rancangan Swimlanes & notasi BPMN (40%)",
      "Kelayakan solusi application controls ERP (30%)"
    ],
    "answerGuide": "1. Kelemahan Fatal: (a) Conflict of interest karena sales mengejar target komisi tanpa peduli risiko kredit; (b) Tidak adanya otorisasi independen dari manajer kredit; (c) Ketiadaan verifikasi sistem atas saldo piutang overdue.\n\n2. Matriks SoD Ideal: Sales (hanya input pesanan draft); Departemen Kredit (otorisasi kredit independen); Gudang (kustodi fisik dan picking berdasarkan SO yang telah di-approve); Billing/Akuntansi (pencatatan faktur dan buku pembantu piutang).\n\n3. Alur BPMN 2.0: Start Event di Pool Pelanggan -> Message Flow Pesanan -> Lane Sales input SO -> Lane Kredit evaluasi via Exclusive Gateway (Jika Saldo + Pesanan > Limit, tolak/eskalasi ke Direktur; Jika <= Limit, approve) -> Lane Gudang cetak Picking Ticket -> Lane Shipping kirim barang & terbitkan Surat Jalan -> Lane Billing terbitkan Faktur -> End Event.\n\n4. Automated Application Controls: (a) System Hard-Lock: ERP secara otomatis memblokir pembuatan Surat Jalan jika status kredit pelanggan dibekukan; (b) Credit Limit Exception Approval hanya dapat di-override menggunakan otentikasi biometrik/password Direktur Keuangan."
  },
  {
    "type": "case",
    "scope": "TM 3: Perancangan Model Data REA & Desain Database Relasional",
    "difficulty": "Sulit",
    "estimatedTime": "40\u201350 menit",
    "question": "Studi Kasus 3: Pemodelan Data Semantik REA & Kardinalitas Siklus Penggajian Pabrik",
    "context": "PT Industri Baja Mandiri mempekerjakan 800 tenaga kerja harian pabrik dan 100 staf administrasi. Sistem absensi lama berbasis kartu kertas manual sering kali disusupi manipulasi absensi titip absen (ghost employees) dan kesalahan perhitungan upah lembur.",
    "data": [
      "Resources yang Relevan: Kas (Cash) untuk pembayaran gaji.",
      "Events yang Relevan: Perekaman Jam Kerja (Time Worked Event) dan Pembayaran Upah (Disburse Cash Event).",
      "Agents yang Relevan: Karyawan Pabrik (Internal Agent), Penyelia/Supervisor (Internal Agent yang mengotorisasi), dan Kasir/Bank Payroll (Internal/External Agent).",
      "Kebijakan Bisnis: Setiap jam kerja diverifikasi fingerprint harian, dan pembayaran gaji dilakukan seminggu sekali secara transfer massal bank."
    ],
    "instructions": [
      "Gambarkan skema relasi REA lengkap yang menghubungkan Resources, Events, dan Agents untuk siklus penggajian tersebut.",
      "Tentukan kardinalitas (minimum dan maksimum: 1:1, 1:N, atau M:N) pada setiap pasangan relasi (Resource-Event, Event-Event / Duality, Event-Agent).",
      "Transformasikan diagram REA ke dalam struktur tabel basis data relasional (RDBMS) dengan menetapkan Primary Key (PK) dan Foreign Key (FK) pada setiap tabel."
    ],
    "outputFormat": [
      "Daftar klasifikasi entitas REA",
      "Matriks analisis kardinalitas (Min:Max)",
      "Skema relasional tabel database (PK & FK)"
    ],
    "rubric": [
      "Ketepatan klasifikasi entitas REA (30%)",
      "Akurasi logika penentuan kardinalitas (35%)",
      "Struktur desain relasional dan penempatan Foreign Key (35%)"
    ],
    "answerGuide": "1. Klasifikasi REA: Resources = Kas/Rekening Payroll; Events = Rekam_Jam_Kerja (Time_Worked) dan Pembayaran_Gaji (Payroll_Disbursement); Agents = Karyawan, Supervisor, Bank Payroll.\n\n2. Kardinalitas: (a) Karyawan ke Rekam_Jam_Kerja = 1:N (satu karyawan memiliki banyak log jam kerja); (b) Rekam_Jam_Kerja ke Pembayaran_Gaji = N:1 (banyak catatan jam kerja harian dirangkum dalam satu pembayaran gaji mingguan); (c) Pembayaran_Gaji ke Kas = N:1 (banyak pembayaran gaji mengalir keluar dari satu akun kas payroll).\n\n3. Skema Relasional: Tabel Karyawan [NIK (PK), Nama, Golongan, Tarif_Upah]; Tabel Jam_Kerja [ID_Absen (PK), NIK (FK), Tanggal, Jam_Masuk, Jam_Keluar, ID_Supervisor (FK)]; Tabel Pembayaran_Gaji [No_Slip_Gaji (PK), NIK (FK), Tgl_Bayar, Total_Gaji_Kotor, Potongan, Gaji_Bersih, No_Rek_Bank (FK)]. Foreign Key NIK dan No_Rek_Bank memastikan integritas data terjamin."
  },
  {
    "type": "case",
    "scope": "TM 4: Normalisasi Database (1NF\u20133NF) & Anomali Data Akuntansi",
    "difficulty": "Sulit",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 4: Dekomposisi Normalisasi 1NF-2NF-3NF pada Master Faktur Penjualan",
    "context": "Sebuah perusahaan distributor mendokumentasikan transaksi penjualannya dalam satu tabel spreadsheet flat-file raksasa bernama 'Tabel_Penjualan_Mentah' dengan kolom: [No_Faktur, Tgl_Faktur, Kode_Pelanggan, Nama_Pelanggan, Alamat_Pelanggan, Kode_Barang, Nama_Barang, Harga_Satuan, Kuantitas_Jual, Kode_Sales, Nama_Sales, Komisi_Sales]. Tabel ini mengalami kerusakan integritas data parah.",
    "data": [
      "Contoh Masalah: Ketika alamat pelanggan berubah, petugas harus mengedit ratusan baris faktur lama (Update Anomaly).",
      "Jika ada pelanggan baru yang belum pernah membeli barang, data pelanggan tersebut tidak bisa diinput karena No_Faktur masih kosong (Insertion Anomaly).",
      "Jika satu-satunya faktur dari seorang pelanggan dihapus, catatan nama dan alamat pelanggan tersebut ikut hilang permanen (Deletion Anomaly)."
    ],
    "instructions": [
      "Jelaskan mengapa tabel awal tersebut melanggar aturan 2NF dan 3NF.",
      "Lakukan proses dekomposisi normalisasi secara bertahap: (a) Bentuk 2NF (hilangkan ketergantungan parsial); (b) Bentuk 3NF (hilangkan ketergantungan transitif).",
      "Tuliskan struktur skema tabel final hasil 3NF lengkap dengan penentuan Primary Key dan Foreign Key.",
      "Tuliskan sintaks query SQL untuk menampilkan total penjualan per nama pelanggan pada bulan Januari 2026."
    ],
    "outputFormat": [
      "Analisis anomali dan jenis ketergantungan fungsional",
      "Langkah dekomposisi 2NF dan 3NF",
      "Skema final tabel 3NF",
      "Kode SQL Query analitis"
    ],
    "rubric": [
      "Identifikasi anomali data (25%)",
      "Ketepatan proses normalisasi bertahap (45%)",
      "Kebenaran sintaks SQL query akuntansi (30%)"
    ],
    "answerGuide": "1. Pelanggaran: Ketergantungan Parsial melanggar 2NF (misal Nama_Barang hanya bergantung pada Kode_Barang, bukan gabungan No_Faktur + Kode_Barang). Ketergantungan Transitif melanggar 3NF (Nama_Pelanggan bergantung pada Kode_Pelanggan, yang bukan PK tabel).\n\n2. Dekomposisi 3NF menghasilkan 5 tabel independen: (1) Tabel Pelanggan [Kode_Pelanggan (PK), Nama_Pelanggan, Alamat_Pelanggan]; (2) Tabel Sales [Kode_Sales (PK), Nama_Sales, Komisi_Sales]; (3) Tabel Barang [Kode_Barang (PK), Nama_Barang, Harga_Satuan]; (4) Tabel Faktur_Header [No_Faktur (PK), Tgl_Faktur, Kode_Pelanggan (FK), Kode_Sales (FK)]; (5) Tabel Faktur_Detail [No_Faktur (PK/FK), Kode_Barang (PK/FK), Kuantitas_Jual].\n\n3. Query SQL:\nSELECT p.Nama_Pelanggan, SUM(d.Kuantitas_Jual * b.Harga_Satuan) AS Total_Penjualan\nFROM Faktur_Header f\nJOIN Pelanggan p ON f.Kode_Pelanggan = p.Kode_Pelanggan\nJOIN Faktur_Detail d ON f.No_Faktur = d.No_Faktur\nJOIN Barang b ON d.Kode_Barang = b.Kode_Barang\nWHERE f.Tgl_Faktur BETWEEN '2026-01-01' AND '2026-01-31'\nGROUP BY p.Nama_Pelanggan\nORDER BY Total_Penjualan DESC;"
  },
  {
    "type": "case",
    "scope": "TM 5: Siklus Pendapatan (Order-to-Cash) & Pengendalian Piutang Usaha",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 5: Investigasi Lapping Fraud & Desain Sistem Kontrol Penerimaan Kas",
    "context": "Auditor internal PT Logistik Cepat menemukan bahwa rata-rata umur piutang (Days Sales Outstanding / DSO) membengkak dari 34 hari menjadi 78 hari, padahal volume penjualan stabil. Setelah konfirmasi saldo langsung ke 20 pelanggan besar, ditemukan 6 pelanggan mengaku telah membayar tagihan mereka tepat waktu 1 bulan yang lalu, namun catatan di sistem akuntansi masih berstatus 'Belum Bayar'.",
    "data": [
      "Struktur Personalia: Staf Kasir (Budi) bertugas menerima cek/setoran tunai pelanggan, mencatat bukti kas masuk, dan sekaligus memegang hak akses menginput jurnal pelunasan piutang ke modul AR.",
      "Hasil Audit: Budi menggunakan uang setoran dari Pelanggan X untuk keperluan judi online, lalu saat Pelanggan Y membayar, ia menggunakan dana Y untuk mencatat pelunasan Pelanggan X (Skema Lapping).",
      "Total Dana yang Menguap: Rp 380 juta."
    ],
    "instructions": [
      "Jelaskan mengapa skema kecurangan Lapping dapat terjadi pada PT Logistik Cepat ditinjau dari prinsip pemisahan tugas (SoD).",
      "Rancang perbaikan menyeluruh atas alur pengendalian penerimaan kas menggunakan teknologi perbankan modern (Lockbox System dan Virtual Account).",
      "Sebutkan prosedur rekonsiliasi independen yang wajib dilakukan setiap hari untuk mendeteksi manipulasi kas secara dini.",
      "Bagaimanakah kontrol sistem ERP dalam membatasi penerbitan Memo Kredit (Credit Memo) agar kasir tidak menghapus saldo piutang fiktif?"
    ],
    "outputFormat": [
      "Analisis kelemahan struktural SoD",
      "Desain arsitektur Lockbox & Virtual Account",
      "Prosedur rekonsiliasi harian dan kontrol Memo Kredit"
    ],
    "rubric": [
      "Analisis investigasi fraud (35%)",
      "Solusi arsitektur kas modern (35%)",
      "Rancangan kontrol preventif Memo Kredit (30%)"
    ],
    "answerGuide": "1. Penyebab Lapping: Terjadinya perangkapan wewenang Kustodi (menerima uang fisik) dan Pencatatan (mengedit saldo kartu piutang di sistem). Selama satu orang memegang kedua fungsi ini, lapping tidak akan pernah terdeteksi dari pencocokan kas masuk internal.\n\n2. Solusi Lockbox & Virtual Account: Alihkan seluruh pembayaran pelanggan melalui Virtual Account (VA) bank terdedikasi per invoice atau Lockbox Bank. Uang langsung masuk ke rekening koran perusahaan dan sistem perbankan mengirimkan webhook data mutasi (EDI) langsung ke sistem ERP untuk posting otomatis tanpa ada personil kasir yang menyentuh uang tunai.\n\n3. Rekonsiliasi Harian: Staf yang terpisah dari bagian kasir (misal staf Rekonsiliasi Bank di departemen Akuntansi Umum) wajib mencocokkan total setoran di rekening koran bank dengan total jurnal penerimaan kas setiap sore hari secara independen.\n\n4. Kontrol Memo Kredit: Sistem ERP harus memblokir pembuatan Memo Kredit oleh staf AR. Setiap penghapusan piutang (write-off) atau retur penjualan harus mewajibkan persetujuan digital berjenjang (dual approval) oleh Manajer Keuangan dan Direktur Utama serta melampirkan Berita Acara Retur yang telah diverifikasi fisik oleh Kepala Gudang."
  },
  {
    "type": "case",
    "scope": "TM 6: Siklus Pengeluaran (Procure-to-Pay) & Deteksi Vendor Fiktif",
    "difficulty": "Komprehensif",
    "estimatedTime": "35\u201345 menit",
    "question": "Studi Kasus 6: Evaluasi Verifikasi Three-Way Match & Deteksi Skema Shell Company",
    "context": "Dalam audit kepatuhan pengeluaran kas PT Citra Konstruksi, ditemukan transaksi pembayaran senilai Rp 1,4 miliar kepada pemasok baru bernama 'CV Mitra Mandiri'. Namun, saat tim audit melakukan verifikasi lapangan, alamat kantor CV Mitra Mandiri ternyata merupakan sebuah rumah kosong di pinggiran kota.",
    "data": [
      "Temuan Berkas: Berkas pembayaran memiliki Purchase Order dan Faktur Tagihan, namun dokumen Laporan Penerimaan Barang (Receiving Report / LPB) tidak memiliki nomor seri sah gudang dan hanya ditandatangani oleh Staf Pembelian (Hendra).",
      "Analisis Database: Nomor rekening penerima pembayaran atas nama CV Mitra Mandiri ternyata memiliki nomor rekening bank yang sama dengan nomor rekening payroll istri Hendra.",
      "Faktur Tagihan tertulis pembelian 'Jasa Konsultasi Teknis & Material Khusus'."
    ],
    "instructions": [
      "Jelaskan bagaimana prosedur Three-Way Matching yang benar seharusnya dapat menggagalkan pencairan dana fiktif tersebut.",
      "Identifikasi 3 indikator bahaya (Red Flags) kecurangan vendor fiktif (Shell Company) yang diabaikan oleh bagian Keuangan PT Citra Konstruksi.",
      "Rancang prosedur pengendalian preventif dan detektif pada sistem ERP pengadaan untuk menyaring pendaftaran vendor baru (Vendor Master File Onboarding).",
      "Jelaskan fungsi penerapan 'Evaluated Receipt Settlement' (ERS) dalam memitigasi risiko manipulasi faktur tagihan vendor."
    ],
    "outputFormat": [
      "Evaluasi kegagalan Three-Way Match",
      "Daftar Red Flags kecurangan pengadaan",
      "Prosedur kontrol master vendor dan evaluasi ERS"
    ],
    "rubric": [
      "Ketajaman analisis kegagalan kontrol Three-Way Match (35%)",
      "Identifikasi Red Flags audit forensik (35%)",
      "Rancangan kontrol preventif ERP (30%)"
    ],
    "answerGuide": "1. Kegagalan Three-Way Match: Bagian Hutang (AP) membayar tanpa Laporan Penerimaan Barang (LPB) sah dari staf gudang independen. Three-Way Match mensyaratkan pencocokan sempurna: PO (otorisasi beli) + LPB (bukti fisik barang diterima) + Faktur Vendor. Tanpa LPB sah, pembayaran dilarang keras diproses.\n\n2. Red Flags: (a) Vendor baru yang langsung mendapatkan kontrak miliaran rupiah tanpa tender; (b) Alamat kantor fiktif dan deskripsi jasa tidak berwujud; (c) Staf pembelian menandatangani dokumen penerimaan barang (perangkapan wewenang parah).\n\n3. Kontrol Master Vendor ERP: (a) Pendaftaran vendor baru wajib melalui Komite Pengadaan independen dan verifikasi legalitas faktual (NIB, NPWP, verifikasi fisik lapangan); (b) Automated Cross-Check: Sistem ERP secara otomatis mencocokkan nomor rekening, NPWP, nomor telepon, dan alamat vendor baru dengan database master file karyawan (jika cocok, sistem otomatis memblokir); (c) Hak akses input master vendor hanya dimiliki staf Master Data Administrator yang terpisah dari bagian pembelian.\n\n4. Evaluated Receipt Settlement (ERS): Dalam ERS, sistem mengeliminasi faktur vendor. Pembayaran dipicu otomatis murni berdasarkan kecocokan harga kontrak di PO dan kuantitas fisik yang dipindai saat barang tiba di gudang. Karena vendor fiktif tidak pernah mengirimkan barang fisik ke gudang, sistem ERS tidak akan pernah memicu pembayaran."
  },
  {
    "type": "case",
    "scope": "TM 7: Siklus Konversi/Produksi & Simulasi Master Kasus Pra-UTS",
    "difficulty": "Sulit",
    "estimatedTime": "40\u201350 menit",
    "question": "Studi Kasus 7: Integrasi Siklus Manufaktur, Bill of Materials & Penelusuran Selisih WIP",
    "context": "PT Elektronika Nusantara memproduksi smartphone tipe Alpha-X. Pada akhir bulan Maret 2026, bagian akuntansi biaya mencatat bahwa nilai barang dalam proses (WIP) di buku besar adalah Rp 4,5 miliar. Namun, laporan fisik supervisor pabrik menunjukkan hanya terdapat unit senilai Rp 3,8 miliar di jalur perakitan, menyisakan selisih tidak wajar sebesar Rp 700 juta.",
    "data": [
      "Dokumen Terkait: Bill of Materials (BOM) standar membutuhkan 1 unit Chipset Qualcomm Snapdragon @ Rp 1.500.000 per smartphone.",
      "Work Order #WO-301 diterbitkan untuk perakitan 1.000 unit Alpha-X (standar kebutuhan: 1.000 unit Chipset = Rp 1,5 miliar).",
      "Catatan Move Ticket Gudang: Gudang telah mengeluarkan 1.400 unit Chipset (senilai Rp 2,1 miliar) untuk WO-301 karena permintaan lisan supervisor pabrik yang menyatakan 'banyak chipset cacat saat pemasangan'.",
      "Tidak ada Laporan Scrap atau Berita Acara Kerusakan Bahan Baku yang diterbitkan."
    ],
    "instructions": [
      "Identifikasi kelemahan pengendalian internal pada alur otorisasi pengeluaran bahan baku tambahan di lantai pabrik PT Elektronika Nusantara.",
      "Jelaskan bagaimana dokumen Bill of Materials (BOM), Work Order (WO), dan Move Ticket seharusnya diintegrasikan dalam modul ERP Manufacturing untuk mencegah kebocoran bahan.",
      "Buat ayat jurnal akuntansi yang tepat untuk: (a) Pengeluaran bahan baku standar ke WIP; (b) Pengeluaran bahan baku berlebih yang ternyata dicuri oleh oknum teknisi pabrik.",
      "Sebutkan 3 laporan analitika biaya yang wajib disajikan oleh SIA siklus konversi kepada Manajer Pabrik setiap akhir pekan."
    ],
    "outputFormat": [
      "Analisis kelemahan pengendalian siklus produksi",
      "Alur integrasi dokumen ERP manufaktur",
      "Pencatatan ayat jurnal akuntansi biaya",
      "Daftar laporan analitika operasional pabrik"
    ],
    "rubric": [
      "Identifikasi celah kontrol bahan baku (30%)",
      "Ketepatan integrasi dokumen ERP (30%)",
      "Akurasi jurnal akuntansi biaya dan penanganan selisih (40%)"
    ],
    "answerGuide": "1. Kelemahan Fatal: Gudang mengeluarkan 400 chipset tambahan hanya berdasarkan permintaan lisan tanpa adanya persetujuan revisi Work Order resmi atau Laporan Bahan Cacat (Scrap Report) yang disetujui Manajer Mutu (QA).\n\n2. Integrasi ERP: Ketika WO diterbitkan, sistem ERP secara otomatis mengunci kuantitas bahan yang boleh dikeluarkan gudang sesuai BOM standar. Jika pabrik membutuhkan bahan tambahan di luar BOM, sistem harus mewajibkan penerbitan 'Excess Materials Requisition' yang ditandatangani Kepala Produksi dan Manajer Akuntansi Biaya.\n\n3. Ayat Jurnal:\n(a) Pengeluaran bahan standar (1.000 unit):\n[D] Persediaan Barang Dalam Proses (WIP) Rp 1.500.000.000\n   [K] Persediaan Bahan Baku (Chipset) Rp 1.500.000.000\n(b) Selisih bahan hilang/dicuri (400 unit):\n[D] Kerugian Selisih Persediaan / Kerugian Fraud Rp 600.000.000\n   [K] Persediaan Bahan Baku Rp 600.000.000\n(Selisih dicatat langsung sebagai beban periode di Laba Rugi, bukan dibebankan ke harga pokok produk).\n4. Laporan Analitika: (1) Laporan Varians Efisiensi Bahan Baku (Material Usage Variance); (2) Laporan Tingkat Cacat dan Scrap per Stasiun Kerja (Scrap Percentage Report); (3) Laporan Utilisasi Kapasitas Mesin dan Jam Tenaga Kerja Langsung (Capacity & Labor Efficiency Report)."
  }
];

export const AKS301_BANK_UAS: BankSoal[] = [
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

export const AKS301_BANK: BankSoal[] = [...AKS301_BANK_UTS, ...AKS301_BANK_UAS];
