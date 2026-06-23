const fs = require('fs');

const raw = [
  // TM 1: Lingkungan Bisnis Digital & Profesi Akuntan
  [1, 'Definisi', 'Sistem Informasi Akuntansi (SIA)', 'Sistem yang mengumpulkan, mencatat, menyimpan, dan memproses data untuk menghasilkan informasi bagi pengambil keputusan.'],
  [1, 'Konsep', 'Data vs Informasi', 'Data adalah fakta mentah (angka, tanggal). Informasi adalah data yang telah diorganisasi dan diproses sehingga memiliki makna dan berguna.'],
  [1, 'Standar', 'Karakteristik Informasi Berguna', 'Relevan, Andal (Reliable), Lengkap (Complete), Tepat Waktu (Timely), Dapat Dipahami (Understandable), Dapat Diverifikasi (Verifiable), Mudah Diakses.'],
  [1, 'Konsep', 'Peran Akuntan dalam SIA', 'Sebagai pengguna (user), perancang (designer), dan auditor (evaluator) dari sistem informasi.'],
  [1, 'Definisi', 'Value Chain (Rantai Nilai)', 'Serangkaian aktivitas utama dan pendukung yang menambah nilai pada produk/jasa perusahaan, dari inbound logistics hingga customer service.'],
  [1, 'Mekanisme', 'SIA Menambah Nilai', 'SIA menambah nilai dengan meningkatkan kualitas/mengurangi biaya produk, efisiensi rantai pasokan, struktur kontrol internal, dan pengambilan keputusan.'],
  // TM 2: SIM & Keunggulan Kompetitif
  [2, 'Definisi', 'Sistem Informasi Manajemen (SIM)', 'Sistem terpadu yang menyediakan informasi bagi manajer untuk mengelola operasi harian perusahaan dan mendukung pengambilan keputusan.'],
  [2, 'Konsep', 'Strategi Porter', 'Low-cost (biaya rendah), Differentiation (diferensiasi unik), dan Niche (fokus segmen sempit). SIA harus diselaraskan dengan strategi perusahaan.'],
  [2, 'Definisi', 'Strategic Information System', 'Sistem yang dirancang untuk mengubah sasaran bisnis, operasi, produk, atau relasi lingkungan untuk membantu perusahaan meraih keunggulan kompetitif.'],
  [2, 'Konsep', 'Data Information Knowledge Wisdom (DIKW)', 'Hierarki yang berawal dari data mentah, diolah jadi informasi, diinternalisasi jadi knowledge, dan diterapkan dengan wisdom.'],
  [2, 'Mekanisme', 'SIA dalam Pengambilan Keputusan', 'Mengurangi ketidakpastian, memberikan feedback atas keputusan lampau, dan mengidentifikasi situasi yang membutuhkan tindakan.'],
  [2, 'Konsep', 'Business Process', 'Serangkaian aktivitas terstruktur, terhubung yang menghasilkan layanan/produk untuk pelanggan (misal: order-to-cash).'],
  // TM 3: Teknik Dokumentasi Sistem
  [3, 'Definisi', 'Data Flow Diagram (DFD)', 'Representasi grafis dari aliran data dalam suatu organisasi, meliputi sumber data, tujuan, aliran data, proses transformasi, dan penyimpanan data.'],
  [3, 'Definisi', 'Flowchart (Bagan Alir)', 'Teknik analisis grafis (memakai berbagai simbol standar) untuk menjelaskan aliran dokumen, proses komputer, dan operasi secara berurutan.'],
  [3, 'Perbandingan', 'DFD vs Flowchart', 'DFD lebih berfokus pada ALIRAN data logis antar proses. Flowchart berfokus pada URUTAN fisik jalannya dokumen atau operasi sistem.'],
  [3, 'Konsep', 'Simbol Proses di DFD', 'Lingkaran atau persegi panjang membulat yang menggambarkan tindakan atau proses yang mengubah data.'],
  [3, 'Konsep', 'Context Diagram', 'Level tertinggi dari DFD yang memberikan ringkasan sistem secara keseluruhan dengan satu lingkaran proses tunggal.'],
  [3, 'Definisi', 'Business Process Diagram (BPD)', 'Cara visual untuk mendeskripsikan berbagai langkah atau aktivitas dalam proses bisnis dengan menggunakan swimlanes untuk memisahkan fungsi departemen.'],
  // TM 4: Pengendalian Internal (COSO)
  [4, 'Definisi', 'Pengendalian Internal', 'Proses yang dirancang untuk memberikan keyakinan memadai terkait pencapaian efektivitas operasi, keandalan pelaporan keuangan, dan kepatuhan hukum.'],
  [4, 'Konsep', 'COSO Framework', 'Kerangka kontrol internal yang terdiri dari: Control Environment, Risk Assessment, Control Activities, Information & Communication, dan Monitoring.'],
  [4, 'Konsep', 'Segregation of Duties (Pemisahan Tugas)', 'Pemisahan wewenang atas 3 fungsi utama: Otorisasi transaksi, Pencatatan transaksi, dan Penyimpanan aset (Custody) untuk mencegah fraud.'],
  [4, 'Perbandingan', 'Preventive, Detective, Corrective Controls', 'Preventive: mencegah masalah (misal password). Detective: menemukan masalah (misal rekonsiliasi bank). Corrective: memperbaiki setelah masalah terdeteksi (misal backup restore).'],
  [4, 'Standar', 'General Controls vs Application Controls', 'General: memastikan lingkungan IT stabil (misal keamanan jaringan). Application: kontrol di dalam program/transaksi (misal input validation).'],
  [4, 'Definisi', 'Audit Trail', 'Jejak logis yang memungkinkan transaksi ditelusuri dari dokumen sumber ke buku besar, atau sebaliknya.'],
  // TM 5: Siklus Pendapatan
  [5, 'Definisi', 'Siklus Pendapatan (Revenue Cycle)', 'Aktivitas bisnis pertukaran barang/jasa dengan pelanggan demi menerima uang tunai (Order to Cash).'],
  [5, 'Konsep', 'Empat Aktivitas Utama Siklus Pendapatan', '1. Sales Order Entry, 2. Shipping (Pengiriman), 3. Billing (Penagihan), 4. Cash Collections (Penerimaan Kas).'],
  [5, 'Dokumen', 'Sales Order', 'Dokumen elektronik/kertas yang mencatat item pesanan, kuantitas, harga, serta rincian persetujuan pesanan pelanggan.'],
  [5, 'Dokumen', 'Packing Slip & Bill of Lading', 'Packing slip: daftar barang dalam kiriman. Bill of Lading: kontrak hukum yang mendefinisikan tanggung jawab atas barang transit antara pengirim dan kurir.'],
  [5, 'Dokumen', 'Remittance Advice', 'Bagian dari tagihan pelanggan yang dikembalikan bersama dengan pembayarannya, berfungsi sebagai panduan mencatat penerimaan kas.'],
  [5, 'Pengendalian', 'Mencegah Piutang Tak Tertagih', 'Melakukan pengecekan batas kredit (credit limit) oleh departemen kredit secara independen sebelum pesanan pelanggan disetujui.'],
  // TM 6: Siklus Pengeluaran
  [6, 'Definisi', 'Siklus Pengeluaran (Expenditure Cycle)', 'Aktivitas memperoleh barang, jasa, dan bahan baku dari pemasok dan membayar mereka (Procure to Pay).'],
  [6, 'Konsep', 'Tiga Aktivitas Utama Siklus Pengeluaran', '1. Ordering (Pemesanan), 2. Receiving (Penerimaan Barang), 3. Cash Disbursements (Pengeluaran Kas).'],
  [6, 'Dokumen', 'Purchase Requisition', 'Dokumen internal di mana suatu departemen meminta departemen pembelian untuk membeli sejumlah barang atau jasa tertentu.'],
  [6, 'Dokumen', 'Purchase Order (PO)', 'Dokumen eksternal yang secara formal meminta pemasok menjual dan mengirim produk spesifik pada harga yang ditetapkan.'],
  [6, 'Dokumen', 'Receiving Report', 'Laporan yang mendokumentasikan rincian setiap pengiriman (jumlah, kondisi) yang diterima dan diperiksa.'],
  [6, 'Mekanisme', 'Three-way Match', 'Sistem pembayaran faktur pemasok yang membandingkan/mencocokkan: Purchase Order, Receiving Report, dan Vendor Invoice.'],
  // TM 7: Siklus Produksi & SDM
  [7, 'Definisi', 'Siklus Produksi', 'Serangkaian aktivitas bisnis berulang untuk mengubah bahan baku menjadi produk jadi.'],
  [7, 'Konsep', 'Bill of Materials', 'Dokumen daftar komponen, bahan baku, dan bagian-bagian beserta kuantitasnya yang dibutuhkan untuk membuat satu unit produk.'],
  [7, 'Dokumen', 'Production Order', 'Dokumen otorisasi dari departemen perencanaan untuk memproduksi sejumlah produk tertentu.'],
  [7, 'Definisi', 'Siklus SDM/Penggajian', 'Aktivitas mempekerjakan, melatih, mengkompensasi, mengevaluasi, hingga mempromosikan atau memberhentikan pegawai.'],
  [7, 'Dokumen', 'Time Card (Kartu Waktu)', 'Mencatat waktu kedatangan dan kepulangan pegawai (jam kerja), dasar perhitungan upah untuk pegawai per jam.'],
  [7, 'Pengendalian', 'Ghost Employees', 'Pegawai fiktif yang gajinya dicairkan oleh pelaku fraud. Dicegah dengan mencocokkan data absensi otentik dengan master data HR secara berkala.'],
  // TM 8: Database & Relational Data Model
  [8, 'Definisi', 'Database', 'Kumpulan data terkoordinasi secara terpusat yang melayani berbagai aplikasi secara efisien (menggantikan file-oriented systems yang usang).'],
  [8, 'Konsep', 'Keuntungan Database', 'Integrasi data, Data sharing, Minimalisasi redundansi & inkonsistensi data, Independensi data, Cross-functional analysis.'],
  [8, 'Definisi', 'Relational Database Model', 'Model data dua dimensi yang menggunakan tabel (relations) terpisah tetapi saling terhubung untuk menyimpan data.'],
  [8, 'Konsep', 'Primary Key (PK)', 'Atribut atau kombinasi atribut database yang secara unik mengidentifikasi suatu baris tertentu (record) di sebuah tabel.'],
  [8, 'Konsep', 'Foreign Key (FK)', 'Atribut di sebuah tabel yang merupakan Primary Key di tabel lain; berfungsi untuk menghubungkan kedua tabel secara logis.'],
  [8, 'Konsep', 'Entity Integrity & Referential Integrity Rule', 'Entity: PK tidak boleh bernilai null. Referential: Jika FK bernilai ada, nilainya harus sesuai dengan nilai PK yang ada di tabel referensi (menjamin link tak terputus).'],
  // TM 9: Desain & Pemodelan Data (REA)
  [9, 'Definisi', 'Entity-Relationship (E-R) Diagram', 'Teknik grafis yang memodelkan entitas-entitas dalam suatu sistem dan hubungan antara entitas-entitas tersebut.'],
  [9, 'Konsep', 'REA Data Model', 'Model database SIA yang berfokus pada bisnis, yang mengkategorikan entitas menjadi Resources (sumber daya), Events (kejadian), dan Agents (pelaku).'],
  [9, 'Mekanisme', 'Resources', 'Barang berharga yang dimiliki/dikendalikan organisasi (misal: Kas, Persediaan).'],
  [9, 'Mekanisme', 'Events', 'Aktivitas bisnis di mana manajemen ingin mengumpulkan informasi terkait dengannya untuk evaluasi (misal: Penjualan, Pembelian, Terima Kas).'],
  [9, 'Mekanisme', 'Agents', 'Orang atau organisasi yang berpartisipasi dalam event bisnis (misal: Pelanggan, Pemasok, Karyawan).'],
  [9, 'Konsep', 'Cardinalities', 'Sifat hubungan (1:1, 1:N, M:N) yang menentukan bagaimana tabel-tabel dihubungkan, menunjukkan jumlah maksimum dan minimum event yang terkait dengan entitas lain.'],
  // TM 10: SQL dan Query Data Keuangan
  [10, 'Definisi', 'SQL (Structured Query Language)', 'Bahasa standar pemrograman untuk mengakses, memanipulasi, dan mencari data dalam relational database (misal MySQL, PostgreSQL).'],
  [10, 'Konsep', 'SELECT Statement', 'Perintah SQL utama untuk menarik/membaca (query) data dari satu atau beberapa tabel.'],
  [10, 'Mekanisme', 'JOIN Clause', 'Perintah SQL yang digunakan untuk menggabungkan kolom/data dari dua tabel atau lebih berdasarkan foreign key.'],
  [10, 'Perbandingan', 'DML vs DDL', 'DML (Data Manipulation Language): perintah menambah/mengubah isi data (INSERT, UPDATE, DELETE). DDL (Data Definition Language): perintah membuat/mengubah struktur tabel (CREATE, ALTER).'],
  [10, 'Mekanisme', 'WHERE Clause', 'Bagian dari SQL untuk memfilter record yang memenuhi kondisi tertentu, menghemat pemrosesan data oleh sistem.'],
  [10, 'Konsep', 'GROUP BY & Aggregate Functions', 'Digunakan bersama COUNT(), SUM(), AVG(), MIN(), MAX() untuk meringkas data finansial, misal total penjualan bulanan per departemen.'],
  // TM 11: Enterprise Resource Planning (ERP)
  [11, 'Definisi', 'ERP (Enterprise Resource Planning)', 'Sistem terpusat yang mengintegrasikan semua aspek operasi perusahaan (Akuntansi, HR, Manufaktur, Sales) ke dalam satu sistem database terpadu.'],
  [11, 'Konsep', 'Keuntungan ERP', 'Visibilitas data enterprise tunggal, aliran informasi mulus (single source of truth), prosedur kerja standar, perbaikan kualitas laporan/kontrol.'],
  [11, 'Konsep', 'Kelemahan ERP', 'Biaya implementasi sangat mahal, memakan waktu lama, kompleksitas tinggi, resistensi karyawan untuk berubah.'],
  [11, 'Perbandingan', 'SIA Tradisional vs ERP', 'SIA tradisional bisa terisolasi (siloed) dari operasional pabrik. ERP menyatukan SIA finansial dengan SIM operasional pabrik secara real-time.'],
  [11, 'Konsep', 'Modul Utama ERP', 'Financials, Human Resources, Supply Chain Management (SCM), Customer Relationship Management (CRM), Manufacturing.'],
  [11, 'Mekanisme', 'Konfigurasi (Configuration) vs Kustomisasi (Customization)', 'Konfigurasi: menyetel ERP menggunakan fitur bawaan. Kustomisasi: menulis kode program baru untuk ERP (sangat berisiko saat upgrade).'],
  // TM 12: Big Data & Analitik untuk Akuntansi
  [12, 'Definisi', 'Big Data', 'Kumpulan data yang sangat besar dan kompleks yang melebihi kapasitas software pemrosesan data tradisional untuk diolah.'],
  [12, 'Konsep', 'The 4 V’s of Big Data', 'Volume (ukuran data besar), Velocity (kecepatan penciptaan/aliran data), Variety (berbagai format data teks/video/sensor), Veracity (tingkat akurasi/kepastian).'],
  [12, 'Definisi', 'Data Analytics (Analitik Data)', 'Proses mengevaluasi data untuk menemukan pola, korelasi, dan insight yang berguna untuk pengambilan keputusan.'],
  [12, 'Perbandingan', 'Descriptive vs Predictive Analytics', 'Descriptive: apa yang sudah terjadi? (misal: laporan laba rugi). Predictive: apa yang mungkin terjadi? (misal: peramalan kegagalan kredit).'],
  [12, 'Konsep', 'Prescriptive Analytics', 'Tingkatan analitik tertinggi: menggunakan data dan model matematika untuk merekomendasikan keputusan/tindakan (apa yang harus kita lakukan?).'],
  [12, 'Mekanisme', 'Audit Analytics', 'Pemanfaatan data mining di seluruh populasi transaksi (100%) untuk mendeteksi anomali, outlier, atau indikasi fraud (sebagai pengganti sampling manual).'],
  // TM 13: Cloud Computing, Blockchain & AI
  [13, 'Definisi', 'Cloud Computing', 'Penyediaan sumber daya komputasi (server, storage, database, software) melalui internet ("the cloud") dengan model pay-as-you-go.'],
  [13, 'Perbandingan', 'SaaS, PaaS, IaaS', 'SaaS (Software: misal Google Workspace). PaaS (Platform: lingkungan untuk deploy apps). IaaS (Infrastructure: sewa virtual machine murni, misal AWS EC2).'],
  [13, 'Definisi', 'Blockchain', 'Sistem buku besar (ledger) terdistribusi dan terenkripsi yang mustahil untuk diubah diam-diam (immutable). Semua node memverifikasi transaksi via konsensus.'],
  [13, 'Konsep', 'Smart Contract', 'Program kode di dalam blockchain yang secara otomatis mengeksekusi perjanjian jika prasyarat tertentu dipenuhi (misal pembayaran otomatis usai barang terkirim).'],
  [13, 'Definisi', 'Artificial Intelligence & RPA', 'RPA (Robotic Process Automation) mereplikasi klik dan input data klerikal rutin. AI bisa membuat keputusan (machine learning) seperti menganalisis risiko fraud.'],
  [13, 'Miskonsepsi', 'Blockchain Akan Menghilangkan Profesi Akuntan', 'Salah. Blockchain mempermudah rekonsiliasi transaksi, namun peran akuntan bergeser dari pencatat menjadi auditor validasi sistem, pengambil keputusan strategis, dan perancang AI.'],
  // TM 14: Audit Sistem Informasi
  [14, 'Definisi', 'IT Audit (Audit Sistem Informasi)', 'Tinjauan atas kontrol keamanan teknologi informasi untuk mengevaluasi apakah sistem melindungi aset, memelihara integritas data, dan mencapai tujuan efektif.'],
  [14, 'Konsep', 'Information Systems Audit and Control Association (ISACA)', 'Organisasi profesional global terkemuka untuk auditor IT (penerbit sertifikasi CISA dan kerangka COBIT).'],
  [14, 'Konsep', 'COBIT Framework', 'Kerangka tata kelola IT yang membantu manajemen menjembatani celah antara risiko bisnis, kebutuhan kontrol, dan masalah teknis IT.'],
  [14, 'Mekanisme', 'CAATs (Computer-Assisted Audit Techniques)', 'Perangkat lunak audit umum (seperti ACL atau IDEA) yang memudahkan auditor membaca, memfilter, menguji populasi transaksi digital besar secara independen.'],
  [14, 'Pengendalian', 'IT General Controls (ITGC) Audit', 'Menguji kontrol akses logis (password), kontrol perubahan program (Change Management), dan manajemen operasi IT (Backup/Disaster Recovery).'],
  [14, 'Mekanisme', 'Penetration Testing (Ethical Hacking)', 'Praktik di mana auditor keamanan siber menyimulasikan serangan hacker yang diotorisasi perusahaan untuk mendeteksi kerentanan jaringan sebelum diserang peretas asli.']
];

const cards = [];
raw.forEach((r, i) => {
  const tm = r[0];
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  cards.push(`  {
    id: "akm201-tm${tm < 10 ? '0'+tm : tm}-${i < 10 ? '0'+i : i}",
    phase: "${phase}",
    tm: ${tm},
    topic: "${r[2].replace(/"/g, '\\"')}",
    category: "${r[1]}",
    front: "${r[2].replace(/"/g, '\\"')}",
    back: "${r[3].replace(/"/g, '\\"')}"
  }`);
});

const content = `import type { AdvancedStudyCard } from '../../types';

export const AKM201_FC: AdvancedStudyCard[] = [
${cards.join(',\n')}
];
`;

fs.writeFileSync('c:/cek/src/data/flashcards/akm201.ts', content);
console.log('Generated AKM201 cards: ' + cards.length);
