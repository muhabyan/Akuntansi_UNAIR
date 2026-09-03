// src/data/banksoal/aks301.ts
// Bank Soal Esai & Studi Kasus Sistem Informasi Akuntansi (AKS301)
import type { BankSoal } from '../../types';

export const AKS301_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 2–5: Pemodelan BPMN & Analisis Pengendalian Siklus O2C",
    "difficulty": "Menengah",
    "estimatedTime": "30–40 menit",
    "question": "Dokumentasi Proses Bisnis BPMN & Evaluasi Pemisahan Tugas (SoD) Siklus Penjualan",
    "context": "PT Distribusi Lancar menghadapi keluhan pelanggan terkait faktur tagihan yang tidak sesuai dengan barang yang diterima, serta keterlambatan rekonsiliasi kas. Alur saat ini: Tenaga penjual menerima pesanan pelanggan, memeriksa sendiri persetujuan kredit pelanggan, mengambil barang di gudang, menerbitkan faktur tagihan, dan menerima setoran tunai dari pelanggan untuk kemudian disetorkan ke bank seminggu sekali.",
    "data": [
      "Entitas yang Terlibat: Pelanggan, Tenaga Penjualan, Bagian Gudang, Bagian Akuntansi/Kasir.",
      "Kelemahan Kritis: Seluruh fungsi otorisasi kredit, kustodi fisik barang, penagihan, dan kustodi kas dilakukan oleh tenaga penjual tunggal."
    ],
    "instructions": [
      "Identifikasi 3 kelemahan pengendalian internal serius pada alur proses penjualan tersebut.",
      "Rancang struktur pemisahan tugas (Segregation of Duties) yang ideal dengan membagi fungsi ke dalam 4 departemen terpisah.",
      "Jelaskan pengendalian aplikasi (Application Controls) yang dapat diterapkan pada software ERP untuk mencegah kesalahan pencatatan harga dan limit kredit."
    ],
    "outputFormat": [
      "Daftar kelemahan kontrol",
      "Matriks pemisahan tugas ideal",
      "Rekomendasi application controls"
    ],
    "rubric": [
      "Identifikasi risiko dan celah fraud (35%)",
      "Rancangan SoD yang tepat (35%)",
      "Pemahaman application controls TI (30%)"
    ],
    "answerGuide": "1. Tiga Kelemahan Pengendalian Internal:\na. Tidak Ada Pemisahan Tugas (No Segregation of Duties): Tenaga penjual merangkap otorisasi kredit, penanganan fisik barang gudang, dan penerimaan uang kas. Ini memicu risiko pencurian kas, lapping piutang, dan penggelapan barang dagang.\nb. Ketiadaan Kontrol Kredit Independen: Tenaga penjual yang berorientasi komisi cenderung menyetujui kredit pelanggan tanpa mengevaluasi riwayat kredit dan batas plafon utang.\nc. Keterlambatan Penyetoran Kas (Seminggu Sekali): Uang kas yang dipegang staf terlalu lama meningkatkan risiko kehilangan fisik atau penggunaan uang perusahaan untuk keperluan pribadi.\n\n2. Struktur Pemisahan Tugas Ideal (BPMN Lanes):\n- Departemen Penjualan: Menerima pesanan pelanggan dan menginput Sales Order ke sistem.\n- Departemen Kredit (Independen): Meninjau kelayakan kredit dan menyetujui Sales Order secara digital di sistem.\n- Departemen Gudang: Mencetak Picking List terotorisasi, menyiapkan barang fisik, dan menyerahkan barang ke Bagian Pengiriman (yang menerbitkan Bill of Lading).\n- Departemen Akuntansi (Penagihan & Kas):\n  * Staf Penagihan: Menerbitkan Faktur Penjualan berdasarkan konfirmasi pengiriman barang.\n  * Kasir / Bank: Menerima setoran langsung pelanggan dan mencatat penerimaan kas harian (wajib disetor ke bank setiap hari kerja).\n\n3. Pengendalian Aplikasi TI (Application Controls):\n- Credit Limit Check (Pemeriksaan Batas Kredit Otomatis): Sistem otomatis mengunci transaksi jika pesanan baru menyebabkan total piutang melampaui plafon kredit.\n- Validity Check (Pemeriksaan Validitas): Memastikan kode pelanggan dan kode barang terdaftar dalam master data yang sah.\n- Sign Check / Field Check: Memastikan kuantitas dan harga satuan bernilai numerik positif dan mengambil harga resmi dari master price list tanpa edit manual staf."
  }
];

export const AKS301_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 8–10: Analisis Kasus Pengendalian Internal COSO & Keamanan Sistem",
    "difficulty": "Tinggi",
    "estimatedTime": "30–35 menit",
    "question": "Evaluasi Defisiensi Pengendalian Internal COSO & Strategi Mitigasi Ransomware",
    "context": "Sebuah perusahaan ritel e-commerce mengalami serangan siber ransomware yang mengenkripsi seluruh server basis data transaksi pelanggan dan jurnal keuangan. Penyelidikan forensik TI mengungkap bahwa: (1) Semua staf IT menggunakan satu akun administrator bersama dengan kata sandi \"Admin123!\", (2) Cadangan data (backup) dilakukan secara otomatis setiap malam tetapi disimpan di server yang berada di jaringan lokal yang sama dan ikut terenkripsi, (3) Dewan direksi tidak pernah mengalokasikan anggaran untuk pelatihan kesadaran keamanan siber bagi karyawan.",
    "data": [
      "Insiden: Ransomware mengunci basis data transaksi.",
      "Temuan Forensik: Akun admin bersama (shared credentials), backup lokal tanpa air-gap/off-site, nihil program training siber."
    ],
    "instructions": [
      "Petakan ketiga temuan forensik tersebut ke dalam komponen Kerangka Kerja Pengendalian Internal COSO.",
      "Jelaskan dampak pelanggaran pilar CIA Triad pada insiden tersebut.",
      "Rancang rencana pemulihan bencana (Disaster Recovery Plan) dan pengendalian preventif komprehensif untuk mencegah insiden berulang."
    ],
    "outputFormat": [
      "Pemetaan komponen COSO",
      "Analisis CIA Triad",
      "Rancangan solusi Disaster Recovery & GITC"
    ],
    "rubric": [
      "Ketepatan pemetaan komponen COSO (35%)",
      "Analisis pilar CIA Triad (30%)",
      "Kelayakan rencana DR & General IT Controls (35%)"
    ],
    "answerGuide": "1. Pemetaan ke Komponen COSO:\n- Temuan 1 (Akun admin bersama & password lemah): Defisiensi pada Aktivitas Pengendalian (Control Activities) — ketiadaan kontrol akses logis individual dan pelanggaran prinsip akuntabilitas non-repudiation.\n- Temuan 2 (Backup lokal tanpa air-gap terenkripsi): Defisiensi pada Penilaian Risiko (Risk Assessment) dan Aktivitas Pengendalian — gagal mengantisipasi risiko kegagalan sistem terpusat dan tidak mematuhi aturan cadangan 3-2-1.\n- Temuan 3 (Nihil anggaran pelatihan keamanan oleh direksi): Defisiensi pada Lingkungan Pengendalian (Control Environment) dan Informasi & Komunikasi — tone at the top manajemen yang meremehkan tata kelola risiko TI.\n\n2. Dampak pada CIA Triad:\n- Availability (Ketersediaan): Rusak total (Dampak Paling Fatal). Sistem lumpuh, transaksi e-commerce berhenti, dan laporan keuangan tidak dapat diakses.\n- Integrity (Keutuhan): Rusak berat. Data terenkripsi berpotensi korup atau dimodifikasi oleh peretas.\n- Confidentiality (Kerahasiaan): Terancam terekspos jika peretas menerapkan taktik double extortion (mengancam membocorkan data kartu kredit dan data pribadi pelanggan jika tebusan tidak dibayar).\n\n3. Rencana Mitigasi Komprehensif (GITC & Disaster Recovery):\na. Pengendalian Preventif GITC:\n   - Terapkan Multi-Factor Authentication (MFA) wajib untuk seluruh akses sistem dan VPN.\n   - Hapus akun bersama; terapkan akun berbasis peran individu (Role-Based Access Control) dengan kebijakan kata sandi kuat (minimal 12 karakter, rotasi berkala).\n   - Terapkan program pelatihan kesadaran keamanan siber rutin (Simulasi Phishing berkala).\nb. Strategi Pencadangan & Disaster Recovery (3-2-1 Backup Rule):\n   - Simpan 3 salinan data, pada 2 media penyimpanan berbeda, dengan 1 salinan disimpan secara Off-site / Cloud yang terisolasi (Immutable Air-Gapped Backup).\n   - Tetapkan RPO (Recovery Point Objective) maksimal 1 jam dan RTO (Recovery Time Objective) pemulihan sistem maksimal 4 jam."
  }
];

export const AKS301_BANK: BankSoal[] = [...AKS301_BANK_UTS, ...AKS301_BANK_UAS];
