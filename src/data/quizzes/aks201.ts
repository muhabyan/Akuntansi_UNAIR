// src/data/quizzes/aks201.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Sektor Publik (AKS201)
import type { QuizQuestion } from '../../types';

export const AKS201_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Karakteristik Sektor Publik",
    "difficulty": "medium",
    "q": "Ciri utama yang membedakan organisasi sektor publik dari sektor privat adalah...",
    "options": [
      "Sektor publik bertujuan memaksimumkan laba bagi pemangku kepentingan",
      "Sektor publik didanai dari pajak/retribusi dan berorientasi pada pelayanan masyarakat",
      "Sektor publik memiliki kepemilikan modal saham yang diperjualbelikan di bursa",
      "Sektor publik tidak diwajibkan menyusun laporan keuangan tahunan"
    ],
    "answer": 1,
    "explanation": "Sektor publik berorientasi pada pelayanan publik (public service) dan didanai melalui otoritas perpajakan serta penerimaan negara."
  },
  {
    "tm": 2,
    "topic": "Regulasi Sektor Publik & ISAK 35",
    "difficulty": "medium",
    "q": "Berdasarkan ISAK 35, aset neto entitas nirlaba diklasifikasikan ke dalam...",
    "options": [
      "Aset Neto Terikat Permanen dan Terikat Temporer",
      "Modal Disetor dan Saldo Laba",
      "Aset Neto Tanpa Pembatasan dan Aset Neto Dengan Pembatasan",
      "Ekuitas Dana Lancar dan Ekuitas Dana Investasi"
    ],
    "answer": 2,
    "explanation": "ISAK 35 menyederhanakan klasifikasi aset neto menjadi dua: (1) Tanpa Pembatasan dari pemberi sumber daya, dan (2) Dengan Pembatasan."
  },
  {
    "tm": 3,
    "topic": "Standar Akuntansi Pemerintahan (PP 71/2010)",
    "difficulty": "medium",
    "q": "PP No. 71 Tahun 2010 menetapkan penerapan Standar Akuntansi Pemerintahan berbasis...",
    "options": [
      "Kas Murni (Cash Basis)",
      "Kas Menuju Akrual (Cash toward Accrual)",
      "Akrual Penuh (Full Accrual Basis)",
      "Modifikasi Nilai Pasar Wajar"
    ],
    "answer": 2,
    "explanation": "PP 71/2010 secara resmi mewajibkan SAP Berbasis Akrual penuh bagi seluruh instansi pemerintah di Indonesia."
  },
  {
    "tm": 4,
    "topic": "Sistem Penganggaran Sektor Publik",
    "difficulty": "medium",
    "q": "Kelemahan utama dari sistem penganggaran tradisional berbasis mata anggaran (line-item budgeting) adalah...",
    "options": [
      "Sangat rumit dalam perhitungan matematis",
      "Bersifat inkremental dan tidak mengaitkan alokasi dana dengan kinerja nyata output",
      "Memerlukan evaluasi program dari titik nol setiap tahun anggaran",
      "Tidak memiliki kontrol hukum atas pengeluaran belanja"
    ],
    "answer": 1,
    "explanation": "Line-item budgeting cenderung inkremental (menaikkan persentase pagu tahun lalu) tanpa mengevaluasi efektivitas dan efisiensi capaian kinerja riil."
  },
  {
    "tm": 5,
    "topic": "Teknik Akuntansi Dana & Komitmen",
    "difficulty": "medium",
    "q": "Pemerintah membukukan komitmen belanja pada saat pesanan resmi diterbitkan dengan tujuan...",
    "options": [
      "Memastikan kas langsung berkurang di rekening bank penerima",
      "Mengendalikan anggaran agar realisasi belanja tidak melebihi sisa pagu anggaran DIPA/DPA",
      "Menghitung beban penyusutan aset pemerintah",
      "Membatalkan hak tagih vendor rekanan proyek"
    ],
    "answer": 1,
    "explanation": "Akuntansi komitmen (encumbrance/commitment accounting) memantau sisa pagu anggaran yang telah terikat kontrak agar tidak terjadi overspending."
  },
  {
    "tm": 6,
    "topic": "Laporan Keuangan SAP Akrual",
    "difficulty": "medium",
    "q": "Laporan yang menyajikan ikhtisar sumber, alokasi, dan pemakaian sumber daya keuangan kas yang dikelola oleh pemerintah selama satu periode pelaporan adalah...",
    "options": [
      "Laporan Operasional (LO)",
      "Laporan Realisasi Anggaran (LRA)",
      "Laporan Perubahan Ekuitas (LPE)",
      "Neraca Keuangan Pemerintah"
    ],
    "answer": 1,
    "explanation": "LRA menyajikan perbandingan anggaran dengan realisasi pendapatan-LRA, belanja, dan pembiayaan berbasis kas."
  },
  {
    "tm": 7,
    "topic": "Perbedaan Belanja vs Beban",
    "difficulty": "medium",
    "q": "Pengeluaran kas daerah untuk membayar tagihan listrik kantor dinas bulan berjalan dicatat dalam laporan keuangan pemerintah sebagai...",
    "options": [
      "Belanja Barang pada LRA dan Beban Barang dan Jasa pada Laporan Operasional (LO)",
      "Belanja Modal pada LRA dan Penambahan Aset Tetap pada Neraca",
      "Beban Lain-Lain pada LO tanpa pencatatan pada LRA",
      "Pengeluaran Pembiayaan pada LRA"
    ],
    "answer": 0,
    "explanation": "Pembayaran operasional rutin dicatat ganda: Belanja Barang pada LRA (basis kas) dan Beban Barang dan Jasa pada LO (basis akrual)."
  }
];

export const AKS201_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "SAPP & SAPD (Permendagri 77/2020)",
    "difficulty": "medium",
    "q": "Dalam struktur akuntansi keuangan daerah, hubungan antara PPKD (selaku BUD) dan SKPD dicatat menggunakan akun timbal balik (reciprocal accounts) yaitu...",
    "options": [
      "Utang Usaha dan Piutang Usaha",
      "Rekening Koran (RK) PPKD dan Rekening Koran (RK) SKPD",
      "Kas di Kasda dan Modal Kerja SKPD",
      "Pendapatan Transfer dan Beban Transfer"
    ],
    "answer": 1,
    "explanation": "Akun RK PPKD (di buku SKPD) dan RK SKPD (di buku PPKD) mencerminkan hubungan kantor pusat dan kantor cabang dalam konsolidasi LKPD."
  },
  {
    "tm": 9,
    "topic": "Pengukuran Kinerja & Value for Money",
    "difficulty": "medium",
    "q": "Jika sebuah dinas berhasil membangun puskesmas dengan biaya 10% lebih rendah dari pagu anggaran namun spesifikasi bangunan tetap sesuai standar, maka dinas tersebut dinilai memenuhi prinsip...",
    "options": [
      "Efektivitas (Effectiveness)",
      "Ekonomis (Economy)",
      "Akuntabilitas Hukum",
      "Universalitas Fiskal"
    ],
    "answer": 1,
    "explanation": "Prinsip Ekonomis (Economy) mengukur kehematan perolehan input sumber daya pada harga terbaik tanpa mengorbankan kualitas standar."
  },
  {
    "tm": 10,
    "topic": "Audit Sektor Publik & BPK RI",
    "difficulty": "medium",
    "q": "Laporan keuangan pemerintah daerah yang disajikan wajar dalam semua hal yang material sesuai Standar Akuntansi Pemerintahan akan memperoleh opini BPK...",
    "options": [
      "Wajar Dengan Pengecualian (WDP)",
      "Wajar Tanpa Pengecualian (WTP)",
      "Tidak Wajar (Adverse)",
      "Tidak Menyatakan Pendapat (Disclaimer)"
    ],
    "answer": 1,
    "explanation": "Opini Wajar Tanpa Pengecualian (WTP) diberikan jika LK menyajikan secara wajar seluruh hal material sesuai SAP, SPI andal, dan patuh regulasi."
  },
  {
    "tm": 11,
    "topic": "Akuntansi Keuangan Desa (UU 6/2014)",
    "difficulty": "medium",
    "q": "Aplikasi resmi yang dikembangkan BPKP dan Kemendagri untuk pengelolaan keuangan dan akuntansi desa di Indonesia adalah...",
    "options": [
      "SAKTI",
      "SPAN",
      "SISKEUDES",
      "SIMDA BPKAD"
    ],
    "answer": 2,
    "explanation": "SISKEUDES (Sistem Informasi Keuangan Desa) digunakan oleh puluhan ribu desa di Indonesia untuk menyusun APBDesa dan laporan pertanggungjawaban."
  },
  {
    "tm": 12,
    "topic": "Badan Layanan Umum (BLU/BLUD)",
    "difficulty": "medium",
    "q": "Fleksibilitas utama pengelolaan keuangan yang dimiliki oleh PTN-BLU dan RSUD-BLUD berdasarkan PP 23/2005 adalah...",
    "options": [
      "Bebas dari kewajiban pemeriksaan oleh BPK RI",
      "Pendapatan fungsional non-pajak dari jasa layanan dapat langsung digunakan untuk belanja operasional tanpa disetor terlebih dahulu ke kas negara/daerah",
      "Dapat menerbitkan obligasi daerah tanpa persetujuan DPR/DPRD",
      "Tidak wajib menyusun laporan keuangan berbasis akrual"
    ],
    "answer": 1,
    "explanation": "BLU/BLUD memiliki fleksibilitas menggunakan langsung pendapatan tarif layanannya untuk mendanai operasional pelayanan publik secara mandiri."
  },
  {
    "tm": 13,
    "topic": "Isu Kontemporer Pengadaan Publik",
    "difficulty": "medium",
    "q": "Digitalisasi pengadaan barang dan jasa pemerintah yang dilakukan melalui sistem e-Purchasing pada portal resmi LKPP disebut...",
    "options": [
      "e-Faktur Pajak",
      "e-Katalog LKPP",
      "Aplikasi SPAN",
      "Aplikasi SAKIP"
    ],
    "answer": 1,
    "explanation": "e-Katalog LKPP memuat daftar barang/jasa terstandardisasi beserta harganya untuk mempermudah belanja pemerintah secara transparan dan akuntabel."
  },
  {
    "tm": 14,
    "topic": "Review UAS Sektor Publik",
    "difficulty": "medium",
    "q": "Apabila BPK menemukan kelemahan material pada sistem pengendalian internal dan pembatasan lingkup pemeriksaan yang sangat pervasif pada kementerian, maka opini yang diterbitkan adalah...",
    "options": [
      "Wajar Tanpa Pengecualian dengan Paragraf Penjelas",
      "Wajar Dengan Pengecualian",
      "Tidak Menyatakan Pendapat (Disclaimer)",
      "Opini Terbatas"
    ],
    "answer": 2,
    "explanation": "Jika pembatasan bukti bersifat material dan pervasif, BPK akan menyatakan Menolak Memberikan Opini (Disclaimer)."
  }
];

export const AKS201_QUIZ: QuizQuestion[] = [...AKS201_QUIZ_UTS, ...AKS201_QUIZ_UAS];
