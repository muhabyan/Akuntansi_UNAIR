// src/data/quizzes/aks301.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Sistem Informasi Akuntansi (AKS301)
import type { QuizQuestion } from '../../types';

export const AKS301_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "SIA & Nilai Perusahaan",
    "difficulty": "medium",
    "q": "Karakteristik kualitatif fundamental informasi akuntansi yang berguna menurut konseptual framework adalah...",
    "options": [
      "Dapat dipahami dan tepat waktu",
      "Relevansi (Relevance) dan Penyajian Jujur (Faithful Representation)",
      "Keterbandingan dan dapat diverifikasi",
      "Ringkas dan bernilai moneter tinggi"
    ],
    "answer": 1,
    "explanation": "Dua kualitas fundamental informasi akuntansi adalah Relevansi (memiliki nilai prediktif/konfirmasi) dan Faithful Representation (lengkap, netral, bebas kesalahan)."
  },
  {
    "tm": 2,
    "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
    "difficulty": "medium",
    "q": "Dalam diagram BPMN, simbol belah ketupat dengan tanda silang di tengahnya merepresentasikan...",
    "options": [
      "Start Event",
      "Exclusive Gateway (XOR) di mana hanya satu jalur percabangan yang dipilih",
      "Parallel Gateway (AND) di mana seluruh jalur dikerjakan serentak",
      "Intermediate Timer Event"
    ],
    "answer": 1,
    "explanation": "Exclusive Gateway (XOR) membagi alur proses menjadi jalur alternatif yang saling meniadakan berdasarkan kondisi evaluasi."
  },
  {
    "tm": 3,
    "topic": "Pemodelan Data REA",
    "difficulty": "medium",
    "q": "Dalam kerangka kerja REA (Resources, Events, Agents), manakah yang dikelompokkan sebagai entitas \"Events\"?",
    "options": [
      "Kas dan Persediaan Barang Dagang",
      "Pesanan Penjualan dan Penerimaan Kas",
      "Pelanggan dan Kasir Toko",
      "Gudang dan Pabrik Produksi"
    ],
    "answer": 1,
    "explanation": "Events adalah transaksi atau aktivitas bisnis yang terjadi pada waktu tertentu, seperti Sales Order, Shipping, Cash Receipt."
  },
  {
    "tm": 4,
    "topic": "Basis Data Relasional & Normalisasi",
    "difficulty": "medium",
    "q": "Tabel relasional yang sudah memenuhi 1NF tetapi masih memiliki atribut non-kunci yang bergantung hanya pada sebagian kunci utama gabungan (partial dependency) belum memenuhi...",
    "options": [
      "Bentuk Normal Kedua (2NF)",
      "Bentuk Normal Ketiga (3NF)",
      "Integritas Referensial",
      "Bentuk Normal Boyce-Codd"
    ],
    "answer": 0,
    "explanation": "2NF mensyaratkan tidak ada partial functional dependency; seluruh atribut non-kunci harus bergantung penuh pada keseluruhan primary key."
  },
  {
    "tm": 5,
    "topic": "Siklus Pendapatan (Order-to-Cash)",
    "difficulty": "medium",
    "q": "Pengendalian preventif yang paling penting untuk mencegah pengiriman barang kepada pelanggan yang berisiko gagal bayar adalah...",
    "options": [
      "Mewajibkan staf gudang menandatangani picking slip",
      "Pemeriksaan dan otorisasi batas kredit secara independen oleh Departemen Kredit sebelum pesanan penjualan diproses",
      "Mengirimkan faktur penjualan sesegera mungkin",
      "Mengasuransikan seluruh pengiriman kargo"
    ],
    "answer": 1,
    "explanation": "Otorisasi kredit independen sebelum persetujuan pesanan mencegah timbulnya piutang tak tertagih akibat penjualan tanpa verifikasi kapasitas bayar."
  },
  {
    "tm": 6,
    "topic": "Siklus Pengeluaran (Procure-to-Pay)",
    "difficulty": "medium",
    "q": "Tiga dokumen yang wajib diverifikasi kecocokannya (Three-Way Matching) oleh staf Utang Usaha sebelum menyetujui pembayaran kas kepada pemasok adalah...",
    "options": [
      "Purchase Requisition, Sales Order, dan Cek Bank",
      "Purchase Order, Receiving Report (Laporan Penerimaan), dan Vendor Invoice (Faktur Pemasok)",
      "Packing Slip, Bill of Lading, dan Bukti Kas Masuk",
      "Daftar Pemasok, Voucher Pengeluaran Kas, dan Rekening Koran"
    ],
    "answer": 1,
    "explanation": "Three-way match membandingkan PO (otorisasi pesanan), Receiving Report (verifikasi fisik barang diterima), dan Vendor Invoice (tagihan harga)."
  },
  {
    "tm": 7,
    "topic": "Siklus Konversi & Review UTS SIA",
    "difficulty": "medium",
    "q": "Dokumen yang merinci jenis bahan baku, spesifikasi bagian, dan kuantitas eksak yang dibutuhkan untuk merakit satu unit produk jadi disebut...",
    "options": [
      "Route Sheet (Lembar Rute)",
      "Bill of Materials (BOM)",
      "Work Order (Perintah Kerja)",
      "Materials Requisition Form"
    ],
    "answer": 1,
    "explanation": "Bill of Materials (BOM) adalah daftar resep komponen teknis lengkap yang menyusun satu unit produk manufaktur."
  }
];

export const AKS301_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Pengendalian Internal COSO",
    "difficulty": "medium",
    "q": "Komponen fondasi paling mendasar dalam kerangka kerja Pengendalian Internal COSO yang menetapkan suasana organisasi (tone at the top) dan nilai etika adalah...",
    "options": [
      "Risk Assessment (Penilaian Risiko)",
      "Control Environment (Lingkungan Pengendalian)",
      "Control Activities (Aktivitas Pengendalian)",
      "Monitoring Activities (Pemantauan)"
    ],
    "answer": 1,
    "explanation": "Control Environment adalah fondasi dari seluruh komponen COSO, mencakup integritas, nilai etika, filosofi manajemen, dan struktur organisasi."
  },
  {
    "tm": 9,
    "topic": "Keamanan Informasi & Kriptografi",
    "difficulty": "medium",
    "q": "Tanda Tangan Digital (Digital Signature) memberikan jaminan hukum bahwa pengirim tidak dapat menyangkal telah mengirimkan dokumen transaksi tersebut. Prinsip keamanan ini disebut...",
    "options": [
      "Confidentiality (Kerahasiaan)",
      "Non-repudiation (Anti-penyangkalan)",
      "Availability (Ketersediaan)",
      "Authorization (Otorisasi)"
    ],
    "answer": 1,
    "explanation": "Non-repudiation menjamin pembuktian kriptografis bahwa pengirim memegang kunci privat yang menandatangani hash dokumen secara sah."
  },
  {
    "tm": 10,
    "topic": "Audit SI & Tata Kelola IT (COBIT)",
    "difficulty": "medium",
    "q": "Metode audit sistem informasi di mana auditor membuat entitas atau rekening tiruan di dalam basis data live klien untuk menguji pemrosesan transaksi berdampingan dengan transaksi riil disebut...",
    "options": [
      "Test Data Approach",
      "Parallel Simulation",
      "Integrated Test Facility (ITF)",
      "Embedded Audit Module"
    ],
    "answer": 2,
    "explanation": "ITF mengintegrasikan dummy entity ke dalam sistem live perusahaan untuk menguji sistem secara berkelanjutan."
  },
  {
    "tm": 11,
    "topic": "Analitika Data Akuntansi & Big Data",
    "difficulty": "medium",
    "q": "Dalam model siklus analitika data akuntansi IMPACT, huruf \"P\" merepresentasikan tahapan...",
    "options": [
      "Publish the findings",
      "Perform test plan (melaksanakan pengujian analitis data)",
      "Prepare the financial statements",
      "Protect client data"
    ],
    "answer": 1,
    "explanation": "IMPACT: Identify questions, Master the data, Perform test plan, Address results, Communicate insights, Track outcomes."
  },
  {
    "tm": 12,
    "topic": "Robotic Process Automation (RPA)",
    "difficulty": "medium",
    "q": "Karakteristik proses bisnis akuntansi yang PALING COCOK untuk diotomatisasi menggunakan perangkat lunak bot RPA adalah...",
    "options": [
      "Proses negosiasi kontrak kredit dengan debitur bermasalah",
      "Proses rekonsiliasi mutasi rekening koran bank dengan buku besar yang terstruktur dan berbasis aturan baku",
      "Proses wawancara calon auditor internal baru",
      "Proses penentuan estimasi penurunan nilai aset yang memerlukan pertimbangan subjektif"
    ],
    "answer": 1,
    "explanation": "RPA ideal untuk tugas-tugas administratif bervolume tinggi yang berbasis aturan baku (rule-based), terstruktur, dan minim pengecualian."
  },
  {
    "tm": 13,
    "topic": "Blockchain & Triple-Entry Accounting",
    "difficulty": "medium",
    "q": "Bagaimana teknologi Blockchain mewujudkan konsep Triple-Entry Accounting dalam dunia akuntansi?",
    "options": [
      "Mewajibkan pencatatan debit, kredit, dan ekuitas di buku kas",
      "Setiap transaksi ekonomi diverifikasi kriptografis dan dicatat serentak pada distributed ledger publik bersama yang tidak dapat dimanipulasi (immutable)",
      "Mengharuskan tiga akuntan independen menandatangani setiap jurnal voucher",
      "Membuat tiga salinan cadangan basis data di lokasi berbeda"
    ],
    "answer": 1,
    "explanation": "Triple-entry accounting mencatat transaksi pada distributed ledger bersama secara kriptografis sehingga memvalidasi pencatatan kedua pihak secara otomatis."
  },
  {
    "tm": 14,
    "topic": "Review UAS Sistem Informasi Akuntansi",
    "difficulty": "medium",
    "q": "Kelemahan desain sistem di mana seluruh operasional perusahaan bergantung pada satu server tunggal atau satu staf tanpa adanya cadangan atau pengganti disebut...",
    "options": [
      "Single Point of Failure (SPOF)",
      "Separation of Duties (SoD)",
      "Distributed Denial of Service",
      "Man-in-the-Middle Attack"
    ],
    "answer": 0,
    "explanation": "SPOF (Single Point of Failure) adalah kerentanan arsitektur di mana kegagalan satu komponen kontrol/sumber daya dapat melumpuhkan seluruh sistem."
  }
];

export const AKS301_QUIZ: QuizQuestion[] = [...AKS301_QUIZ_UTS, ...AKS301_QUIZ_UAS];
