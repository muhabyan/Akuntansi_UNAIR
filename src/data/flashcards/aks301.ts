// src/data/flashcards/aks301.ts
// Flashcard komprehensif Sistem Informasi Akuntansi (AKS301) — 84 kartu lengkap (6 kartu per TM)
import type { AdvancedStudyCard } from '../../types';

export const AKS301_FC: AdvancedStudyCard[] = [
  {
    "id": "aks301-tm01-01",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "category": "Definisi",
    "front": "Definisi Sistem Informasi Akuntansi (SIA)",
    "back": "Sistem yang mencatat, memproses, meringkas, dan melaporkan data transaksi finansial dan nonfinansial untuk pengambilan keputusan dengan pengendalian internal memadai."
  },
  {
    "id": "aks301-tm01-02",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "category": "Konsep",
    "front": "Data vs Informasi",
    "back": "Data adalah fakta mentah yang belum diolah. Informasi adalah data yang telah diorganisasikan dan diproses sehingga memiliki arti dan nilai bagi pengambil keputusan."
  },
  {
    "id": "aks301-tm01-03",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "category": "Konsep",
    "front": "Dua Atribut Kualitas Fundamental Informasi",
    "back": "(1) Relevansi (Relevance) — memiliki nilai prediktif dan konfirmasi, dan (2) Penyajian Jujur (Faithful Representation) — lengkap, netral, bebas dari kesalahan."
  },
  {
    "id": "aks301-tm01-04",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "category": "Mekanisme",
    "front": "Empat Peran Akuntan dalam SIA",
    "back": "(1) User (pemakai sistem), (2) Manager (pengelola anggaran & staf), (3) Designer (perancang kebutuhan kontrol dan proses), dan (4) Evaluator (auditor sistem/CISA)."
  },
  {
    "id": "aks301-tm01-05",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "category": "Konsep",
    "front": "Rantai Nilai Porter (Value Chain) & SIA",
    "back": "SIA mendukung aktivitas utama (inbound logistics, operasi, outbound, marketing, service) dan aktivitas pendukung (infrastruktur, HR, IT, pengadaan) untuk meningkatkan efisiensi."
  },
  {
    "id": "aks301-tm01-06",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "category": "Konsep",
    "front": "Sertifikasi Profesional Bidang SIA",
    "back": "Certified Information Systems Auditor (CISA - ISACA), Certified Information Technology Professional (CITP - AICPA), Certified Internal Auditor (CIA)."
  },
  {
    "id": "aks301-tm02-01",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Akuntan sebagai Analis Bisnis & BPMN",
    "category": "Hukum",
    "front": "Pentingnya Dokumentasi Proses Bisnis",
    "back": "Wajib bagi kepatuhan regulasi Sarbanes-Oxley Act (SOX Section 404), pelatihan pegawai baru, audit kepatuhan, dan inisiatif rekayasa ulang proses bisnis (BPR)."
  },
  {
    "id": "aks301-tm02-02",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Akuntan sebagai Analis Bisnis & BPMN",
    "category": "Konsep",
    "front": "Tiga Tipe Simbol Utama BPMN",
    "back": "(1) Flow Objects (Events, Activities, Gateways), (2) Connecting Objects (Sequence Flow, Message Flow), dan (3) Swimlanes (Pools, Lanes)."
  },
  {
    "id": "aks301-tm02-03",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Akuntan sebagai Analis Bisnis & BPMN",
    "category": "Konsep",
    "front": "Perbedaan Pool vs Swimlane",
    "back": "Pool merepresentasikan entitas organisasi yang terpisah (misal: Vendor vs Perusahaan). Swimlane memisahkan departemen atau peran di dalam satu Pool (misal: Gudang, Kasir)."
  },
  {
    "id": "aks301-tm02-04",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Akuntan sebagai Analis Bisnis & BPMN",
    "category": "Hukum",
    "front": "Sequence Flow vs Message Flow",
    "back": "Sequence Flow (garis utuh) HANYA boleh menghubungkan aktivitas di dalam satu Pool yang sama. Message Flow (garis putus-putus) menghubungkan dua Pool berbeda."
  },
  {
    "id": "aks301-tm02-05",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Akuntan sebagai Analis Bisnis & BPMN",
    "category": "Konsep",
    "front": "Exclusive Gateway (XOR)",
    "back": "Titik percabangan keputusan di mana hanya satu jalur keluar yang valid berdasarkan kondisi tertentu (misal: Kredit Disetujui ATAU Ditolak)."
  },
  {
    "id": "aks301-tm02-06",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Akuntan sebagai Analis Bisnis & BPMN",
    "category": "Konsep",
    "front": "Parallel Gateway (AND)",
    "back": "Titik percabangan di mana semua jalur paralel yang keluar harus dikerjakan secara serentak (misal: cetak faktur DAN siapkan barang di gudang)."
  },
  {
    "id": "aks301-tm03-01",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Pemodelan Data & Kerangka Kerja REA",
    "category": "Klasifikasi",
    "front": "Tiga Entitas Kerangka Kerja REA",
    "back": "Resources (sumber daya bernilai ekonomi), Events (peristiwa atau transaksi bisnis), dan Agents (pelaku internal dan eksternal)."
  },
  {
    "id": "aks301-tm03-02",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Pemodelan Data & Kerangka Kerja REA",
    "category": "Konsep",
    "front": "Prinsip Dualitas Ekonomi (Economic Duality)",
    "back": "Setiap siklus bisnis melibatkan pertukaran nilai: peristiwa penambahan sumber daya (increment event) berpasangan dengan peristiwa pengurangan sumber daya (decrement event)."
  },
  {
    "id": "aks301-tm03-03",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Pemodelan Data & Kerangka Kerja REA",
    "category": "Hukum",
    "front": "Kardinalitas / Multiplisitas Minimum",
    "back": "Menentukan apakah partisipasi entitas dalam relasi bersifat Wajib (1) atau Opsional (0). Misal: Pelanggan baru dapat ada tanpa pesanan (0..*)."
  },
  {
    "id": "aks301-tm03-04",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Pemodelan Data & Kerangka Kerja REA",
    "category": "Hukum",
    "front": "Kardinalitas / Multiplisitas Maksimum",
    "back": "Menentukan batas terbanyak keterlibatan entitas: Satu (1) atau Banyak (*). Relasi dapat berbentuk 1:1, 1:N, atau M:N."
  },
  {
    "id": "aks301-tm03-05",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Pemodelan Data & Kerangka Kerja REA",
    "category": "Konsep",
    "front": "Resolusi Relasi Many-to-Many (M:N)",
    "back": "Relasi M:N (misal: Penjualan ke Persediaan) tidak dapat diimplementasikan langsung; harus dipecah dengan tabel penghubung (Junction/Link Table) \"Rincian Penjualan\"."
  },
  {
    "id": "aks301-tm03-06",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Pemodelan Data & Kerangka Kerja REA",
    "category": "Konsep",
    "front": "Diagram Kelas UML (Unified Modeling Language)",
    "back": "Model data statis yang menggambarkan struktur kelas entitas, atribut (fields), dan asosiasi hubungan antar entitas bisnis."
  },
  {
    "id": "aks301-tm04-01",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Basis Data Relasional & Sistem ERP",
    "category": "Definisi",
    "front": "Primary Key (Kunci Utama)",
    "back": "Atribut atau kombinasi atribut yang secara unik mengidentifikasi setiap baris (record) data dalam sebuah tabel dan tidak boleh bernilai NULL."
  },
  {
    "id": "aks301-tm04-02",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Basis Data Relasional & Sistem ERP",
    "category": "Definisi",
    "front": "Foreign Key (Kunci Tamu)",
    "back": "Atribut dalam suatu tabel yang merupakan Primary Key di tabel lain; berfungsi untuk menghubungkan kedua tabel secara logis."
  },
  {
    "id": "aks301-tm04-03",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Basis Data Relasional & Sistem ERP",
    "category": "Hukum",
    "front": "Integritas Referensial (Referential Integrity)",
    "back": "Nilai Foreign Key harus merujuk pada nilai Primary Key yang valid di tabel referensinya, atau bernilai NULL jika relasi bersifat opsional."
  },
  {
    "id": "aks301-tm04-04",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Basis Data Relasional & Sistem ERP",
    "category": "Konsep",
    "front": "Bentuk Normal Pertama (1NF)",
    "back": "Setiap atribut dalam tabel bernilai atomik (tunggal, tidak dapat dipecah lagi) dan tidak ada baris atau kolom yang berulang (repeating groups)."
  },
  {
    "id": "aks301-tm04-05",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Basis Data Relasional & Sistem ERP",
    "category": "Konsep",
    "front": "Bentuk Normal Kedua (2NF)",
    "back": "Telah memenuhi 1NF dan setiap atribut non-kunci bergantung secara fungsional penuh pada seluruh Primary Key (tidak ada ketergantungan parsial)."
  },
  {
    "id": "aks301-tm04-06",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Basis Data Relasional & Sistem ERP",
    "category": "Konsep",
    "front": "Bentuk Normal Ketiga (3NF)",
    "back": "Telah memenuhi 2NF dan tidak ada ketergantungan transitif antar atribut non-kunci (atribut non-kunci tidak boleh bergantung pada atribut non-kunci lainnya)."
  },
  {
    "id": "aks301-tm05-01",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash / O2C)",
    "category": "Prosedur",
    "front": "Alur Transaksi Siklus Pendapatan (O2C)",
    "back": "(1) Entri Pesanan Penjualan, (2) Persetujuan Batas Kredit, (3) Pengambilan & Pengepakan Barang, (4) Pengiriman Barang, (5) Penagihan Faktur, (6) Penerimaan Kas."
  },
  {
    "id": "aks301-tm05-02",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash / O2C)",
    "category": "Dokumen",
    "front": "Dokumen Pengiriman: Bill of Lading (BoL)",
    "back": "Kontrak legal antara pengirim barang dengan kurir pengangkut yang merinci jenis, kuantitas, dan tujuan pengiriman barang."
  },
  {
    "id": "aks301-tm05-03",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash / O2C)",
    "category": "Pengendalian",
    "front": "Pemisahan Tugas Kunci Siklus Pendapatan",
    "back": "Fungsi otorisasi kredit harus terpisah dari fungsi penjualan; fungsi penerimaan kas harus terpisah dari pencatatan buku besar piutang."
  },
  {
    "id": "aks301-tm05-04",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash / O2C)",
    "category": "Pengendalian",
    "front": "Pencegahan Skema Lapping Piutang",
    "back": "Lapping (menutupi kekurangan kas dengan pembayaran pelanggan berikutnya) dicegah melalui rotasi tugas staf kasir, rekening lockbox bank, dan konfirmasi piutang rutin."
  },
  {
    "id": "aks301-tm05-05",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash / O2C)",
    "category": "Konsep",
    "front": "Sistem Kotak Kunci (Lockbox System)",
    "back": "Pelanggan mengirim pembayaran cek langsung ke kotak pos khusus bank; bank menyetor dana ke rekening perusahaan dan mengirimkan data pelunasan."
  },
  {
    "id": "aks301-tm05-06",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash / O2C)",
    "category": "Konsep",
    "front": "Electronic Data Interchange (EDI) Penjualan",
    "back": "Pertukaran dokumen bisnis komputer-ke-komputer secara elektronik dalam format standar (misal: pesanan pelanggan masuk otomatis ke ERP)."
  },
  {
    "id": "aks301-tm06-01",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay / P2P)",
    "category": "Prosedur",
    "front": "Alur Transaksi Siklus Pengeluaran (P2P)",
    "back": "(1) Permintaan Pembelian (Purchase Requisition), (2) Pemesanan Resmi (Purchase Order), (3) Penerimaan Barang, (4) Pencatatan Utang, (5) Pembayaran Kas."
  },
  {
    "id": "aks301-tm06-02",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay / P2P)",
    "category": "Pengendalian",
    "front": "Laporan Penerimaan Buta (Blind Receiving Report)",
    "back": "Salinan PO yang diberikan ke staf penerimaan gudang sengaja dikosongkan jumlah kuantitasnya agar staf wajib menghitung fisik barang secara nyata."
  },
  {
    "id": "aks301-tm06-03",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay / P2P)",
    "category": "Pengendalian",
    "front": "Three-Way Matching pada Akun Utang",
    "back": "Verifikasi kesesuaian antara (1) Purchase Order, (2) Receiving Report, dan (3) Vendor Invoice sebelum menyetujui voucher pengeluaran kas."
  },
  {
    "id": "aks301-tm06-04",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay / P2P)",
    "category": "Mekanisme",
    "front": "Evaluated Receipt Settlement (ERS)",
    "back": "Sistem pembayaran tanpa faktur kertas: pembeli otomatis membayar vendor berdasarkan data kuantitas barang yang diterima dan harga pada PO."
  },
  {
    "id": "aks301-tm06-05",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay / P2P)",
    "category": "Pengendalian",
    "front": "Pencegahan Kickback & Pembayaran Fiktif",
    "back": "Wajibkan daftar pemasok yang disetujui (Approved Vendor List), rotasi agen pembelian, dan lelang tender tertutup untuk pesanan material bernilai besar."
  },
  {
    "id": "aks301-tm06-06",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay / P2P)",
    "category": "Konsep",
    "front": "Voucher System Pengeluaran Kas",
    "back": "Setiap pengeluaran kas wajib didukung oleh Paket Voucher lengkap yang telah diverifikasi dan dibubuhi cap \"LUNAS\" (PAID) saat cek diterbitkan."
  },
  {
    "id": "aks301-tm07-01",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Siklus Konversi & Review Kasus UTS",
    "category": "Dokumen",
    "front": "Bill of Materials (BOM)",
    "back": "Daftar rincian spesifikasi teknik, nomor komponen, dan kuantitas bahan baku yang dibutuhkan untuk menghasilkan satu unit produk jadi."
  },
  {
    "id": "aks301-tm07-02",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Siklus Konversi & Review Kasus UTS",
    "category": "Dokumen",
    "front": "Lembar Rute Operasi (Route Sheet)",
    "back": "Menentukan urutan mesin, stasiun kerja, perkakas, dan standar jam kerja tenaga kerja yang harus dilalui dalam proses produksi."
  },
  {
    "id": "aks301-tm07-03",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Siklus Konversi & Review Kasus UTS",
    "category": "Dokumen",
    "front": "Perintah Produksi (Work Order / Production Order)",
    "back": "Otorisasi resmi bagi lantai produksi untuk memulai proses pembuatan produk dengan kuantitas dan batas waktu tertentu."
  },
  {
    "id": "aks301-tm07-04",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Siklus Konversi & Review Kasus UTS",
    "category": "Konsep",
    "front": "Integrasi Siklus Konversi dengan Akuntansi Biaya",
    "back": "Pemindahan bahan baku dicatat memotong akun Persediaan Bahan dan mendebit Persediaan Barang Dalam Proses (WIP)."
  },
  {
    "id": "aks301-tm07-05",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Siklus Konversi & Review Kasus UTS",
    "category": "Pengendalian",
    "front": "Pengendalian Fisik Persediaan Manufaktur",
    "back": "Pagar pembatas gudang, akses kartu RFID, pemantauan CCTV, dan rekonsiliasi berkala hasil stock opname fisik dengan saldo buku persediaan ERP."
  },
  {
    "id": "aks301-tm07-06",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Siklus Konversi & Review Kasus UTS",
    "category": "Konsep",
    "front": "Checklist Kesiapan UTS SIA",
    "back": "Kuasai simbol BPMN 2.0, pemodelan kardinalitas REA, alur 3-way matching pada siklus P2P, serta identifikasi kelemahan pemisahan tugas (SoD)."
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
