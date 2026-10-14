// src/data/quizzes/aks201.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Sektor Publik (AKS201)
// Berdasarkan PP 71/2010 (SAP Akrual), Permendagri 77/2020, ISAK 35, & Mardiasmo/Nordiawan
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1–7) & 35 Soal Pra-UAS (TM 8–14)
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
    "explanation": "Sektor publik berorientasi pada pelayanan publik (public service) dan didanai melalui otoritas perpajakan serta penerimaan negara, bukan mencari laba komersial."
  },
  {
    "tm": 1,
    "topic": "Dimensi Akuntabilitas Publik",
    "difficulty": "medium",
    "q": "Kewajiban pemerintah untuk memastikan bahwa prosedur birokrasi telah ditaati, tidak terjadi penyalahgunaan wewenang (kolusi/korupsi), dan dana publik digunakan secara efisien mencerminkan dimensi...",
    "options": [
      "Akuntabilitas Kebijakan (Policy Accountability)",
      "Akuntabilitas Proses (Process Accountability)",
      "Akuntabilitas Program (Program Accountability)",
      "Akuntabilitas Moral (Moral Accountability)"
    ],
    "answer": 1,
    "explanation": "Akuntabilitas proses berkaitan dengan kepatuhan terhadap prosedur tata kelola, responsivitas pelayanan publik, dan efektivitas sistem pengendalian intern untuk mencegah inefisiensi dan korupsi."
  },
  {
    "tm": 1,
    "topic": "Perbedaan Sektor Publik vs Swasta",
    "difficulty": "basic",
    "q": "Struktur permodalan organisasi sektor publik pemerintah bersumber dari...",
    "options": [
      "Penerbitan saham perdana (IPO) di pasar modal",
      "Pajak masyarakat, retribusi, pinjaman publik, dan kekayaan negara yang dipisahkan",
      "Laba ditahan dari hasil monopoli pasar",
      "Investasi ventura swasta murni"
    ],
    "answer": 1,
    "explanation": "Sumber pendanaan sektor publik berasal dari penerimaan perpajakan, retribusi, PNBP, hibah, dan pinjaman/obligasi negara yang diotorisasi secara hukum oleh parlemen."
  },
  {
    "tm": 1,
    "topic": "Stakeholder Sektor Publik",
    "difficulty": "basic",
    "q": "Pihak eksternal utama yang bertindak mewakili kepentingan rakyat pembayar pajak dalam mengawasi penggunaan anggaran dan menilai akuntabilitas pemerintah daerah adalah...",
    "options": [
      "Dewan Pengawas BLUD",
      "Dewan Perwakilan Rakyat Daerah (DPRD)",
      "Kamar Dagang dan Industri (KADIN)",
      "Badan Usaha Milik Daerah (BUMD)"
    ],
    "answer": 1,
    "explanation": "DPRD adalah representasi legislatif rakyat daerah yang memiliki hak budget, pengawasan, dan legislasi untuk memastikan anggaran dijalankan demi kepentingan publik."
  },
  {
    "tm": 1,
    "topic": "Peran Akuntansi Sektor Publik",
    "difficulty": "advanced",
    "q": "Dalam konteks New Public Management (NPM), pergeseran fungsi akuntansi sektor publik menekankan pada...",
    "options": [
      "Kepatuhan administrasi pencatatan kas belaka",
      "Transparansi hasil kinerja (outcome), penentuan biaya unit pelayanan publik (cost of service), dan pertanggungjawaban nilai tambah publik",
      "Penyembunyian defisit fiskal dari pantauan publik",
      "Pengurangan peran audit independen atas penggunaan anggaran"
    ],
    "answer": 1,
    "explanation": "NPM mentransformasi akuntansi sektor publik dari sekadar kepatuhan administrasi legalistik menjadi alat manajerial untuk mengukur efisiensi biaya layanan, efektivitas capaian kinerja, dan akuntabilitas hasil."
  },
  {
    "tm": 2,
    "topic": "Regulasi Sektor Publik & ISAK 35",
    "difficulty": "medium",
    "q": "Berdasarkan ISAK 35, aset neto entitas berorientasi nonlaba diklasifikasikan ke dalam...",
    "options": [
      "Aset Neto Terikat Permanen dan Terikat Temporer",
      "Modal Disetor dan Saldo Laba",
      "Aset Neto Tanpa Pembatasan dan Aset Neto Dengan Pembatasan",
      "Ekuitas Dana Lancar dan Ekuitas Dana Investasi"
    ],
    "answer": 2,
    "explanation": "ISAK 35 menyederhanakan klasifikasi aset neto menjadi dua kategori: (1) Aset Neto Tanpa Pembatasan, dan (2) Aset Neto Dengan Pembatasan dari pemberi sumber daya (donor)."
  },
  {
    "tm": 2,
    "topic": "Komponen Laporan Keuangan ISAK 35",
    "difficulty": "medium",
    "q": "Manakah komponen laporan keuangan lengkap entitas nonlaba yang diatur dalam ISAK 35?",
    "options": [
      "Laporan Posisi Keuangan, Laporan Penghasilan Komprehensif, Laporan Perubahan Aset Neto, Laporan Arus Kas, dan Catatan atas Laporan Keuangan",
      "Neraca, Laporan Laba Rugi, Laporan Ekuitas Pemilik, dan Laporan Arus Kas",
      "Laporan Realisasi Anggaran, Neraca, dan Laporan Arus Kas",
      "Laporan Sumber dan Penggunaan Dana Kas saja"
    ],
    "answer": 0,
    "explanation": "ISAK 35 menetapkan lima laporan keuangan utama: Laporan Posisi Keuangan, Laporan Penghasilan Komprehensif, Laporan Perubahan Aset Neto, Laporan Arus Kas, dan CaLK."
  },
  {
    "tm": 2,
    "topic": "Mekanisme Reklasifikasi ISAK 35",
    "difficulty": "advanced",
    "q": "Ketika pembatasan donor atas suatu dana hibah telah terpenuhi (misalnya proyek pendidikan telah selesai dilaksanakan), transaksi ini disajikan dalam laporan keuangan sebagai...",
    "options": [
      "Pendapatan lain-lain pada aset neto tanpa pembatasan",
      "Reklasifikasi aset neto dari 'Dengan Pembatasan' menjadi 'Tanpa Pembatasan'",
      "Beban luar biasa pada laporan operasional",
      "Pengurangan modal disetor entitas"
    ],
    "answer": 1,
    "explanation": "Pemenuhan syarat pembatasan donor tidak dicatat sebagai pendapatan baru, melainkan sebagai reklasifikasi (pemindahan) antar-aset neto: mengkredit Aset Neto Tanpa Pembatasan dan mendebet Aset Neto Dengan Pembatasan."
  },
  {
    "tm": 2,
    "topic": "Hukum Yayasan di Indonesia",
    "difficulty": "medium",
    "q": "Berdasarkan UU No. 16 Tahun 2001 jo. UU No. 28 Tahun 2004 tentang Yayasan, larangan mutlak yang diberlakukan terhadap kekayaan yayasan adalah...",
    "options": [
      "Yayasan dilarang mendirikan badan usaha yang berbadan hukum PT",
      "Kekayaan yayasan dilarang dialihkan atau dibagikan secara langsung maupun tidak langsung kepada Pembina, Pengurus, dan Pengawas",
      "Yayasan dilarang memiliki rekening giro di bank umum",
      "Yayasan dilarang menerima sumbangan dari masyarakat luas"
    ],
    "answer": 1,
    "explanation": "UU Yayasan secara tegas melarang pembagian kekayaan atau sisa hasil usaha kepada organ yayasan (Pembina, Pengurus, Pengawas) guna menjaga integritas misi sosial dan status nirlaba."
  },
  {
    "tm": 2,
    "topic": "Sumbangan Non-Kas & Relawan",
    "difficulty": "advanced",
    "q": "Sumbangan jasa yang diberikan oleh tenaga ahli sukarelawan (relawan profesional) dapat diakui sebagai pendapatan dan beban dalam laporan keuangan entitas nirlaba HANYA JIKA...",
    "options": [
      "Relawan tersebut meminta honorarium simbolis",
      "Jasa tersebut menciptakan atau meningkatkan aset nonkeuangan, atau membutuhkan keahlian khusus yang jika tidak disumbangkan terpaksa harus dibeli oleh entitas",
      "Semua jenis jasa sukarela wajib diakui tanpa kecuali",
      "Jumlah relawan yang berpartisipasi lebih dari 100 orang"
    ],
    "answer": 1,
    "explanation": "Sesuai standar akuntansi nirlaba, jasa donasi diakui bila menciptakan aset fisik atau merupakan jasa profesional khusus (arsitek, dokter, akuntan) yang nilainya dapat diukur andal dan memang esensial bagi operasional entitas."
  },
  {
    "tm": 3,
    "topic": "Regulasi Pengelolaan Keuangan Negara",
    "difficulty": "medium",
    "q": "PP No. 71 Tahun 2010 menetapkan penerapan Standar Akuntansi Pemerintahan (SAP) Berbasis Akrual penuh. Prinsip pengakuan pendapatan berbasis akrual berarti pendapatan diakui pada saat...",
    "options": [
      "Uang kas telah disetorkan ke Kas Daerah",
      "Surat Perintah Pencairan Dana (SP2D) diterbitkan oleh BUD",
      "Timbulnya hak atas pendapatan atau adanya aliran masuk sumber daya ekonomi, terlepas dari saat kas diterima",
      "Anggaran Pendapatan dan Belanja Daerah (APBD) disahkan oleh DPRD"
    ],
    "answer": 2,
    "explanation": "Pada SAP Akrual (PP 71/2010), pendapatan LO diakui saat timbulnya hak atau adanya aliran masuk sumber daya ekonomi, terlepas dari apakah kas fisik sudah diterima atau belum."
  },
  {
    "tm": 3,
    "topic": "Batas Ambang Fiskal UU 17/2003",
    "difficulty": "basic",
    "q": "Berdasarkan UU No. 17 Tahun 2003 tentang Keuangan Negara, batas maksimal defisit anggaran APBN dan APBD dalam satu tahun anggaran dibatasi maksimal sebesar...",
    "options": [
      "1% dari PDB / PDRB",
      "3% dari PDB / PDRB",
      "5% dari PDB / PDRB",
      "10% dari PDB / PDRB"
    ],
    "answer": 1,
    "explanation": "Pasal 12 UU No. 17/2003 membatasi defisit APBN/APBD maksimal 3% dari Produk Domestik Bruto (PDB) dan total kumulatif pinjaman utang maksimal 60% PDB untuk menjaga disiplin fiskal nasional."
  },
  {
    "tm": 3,
    "topic": "Tiga Paket UU Keuangan Negara",
    "difficulty": "medium",
    "q": "Kewenangan pemeriksaan pengelolaan dan tanggung jawab keuangan negara yang bebas dan mandiri oleh BPK RI diatur secara khusus dalam...",
    "options": [
      "UU No. 17 Tahun 2003",
      "UU No. 1 Tahun 2004",
      "UU No. 15 Tahun 2004",
      "UU No. 25 Tahun 2004"
    ],
    "answer": 2,
    "explanation": "Paket ketiga reformasi keuangan negara adalah UU No. 15 Tahun 2004 tentang Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara."
  },
  {
    "tm": 3,
    "topic": "Asas-Asas Pengelolaan Keuangan Negara",
    "difficulty": "basic",
    "q": "Asas pengelolaan keuangan negara yang mewajibkan semua pendapatan dan belanja negara disajikan dalam satu dokumen anggaran yang utuh tanpa kompensasi perjumpaan utang disebut...",
    "options": [
      "Asas Spesialitas",
      "Asas Universalitas (Asas Bruto)",
      "Asas Tahunan",
      "Asas Akrualitas"
    ],
    "answer": 1,
    "explanation": "Asas universalitas (kelengkapan bruto) mengharuskan seluruh pendapatan dan belanja dibukukan secara bruto dalam anggaran tanpa melakukan netting atau pemotongan langsung di sumber penerimaan."
  },
  {
    "tm": 3,
    "topic": "Komite Standar Akuntansi Pemerintahan (KSAP)",
    "difficulty": "advanced",
    "q": "Standar Akuntansi Pemerintahan (SAP) disusun oleh Komite Standar Akuntansi Pemerintahan (KSAP) yang bersifat independen dan ditetapkan melalui instrumen hukum berupa...",
    "options": [
      "Keputusan Menteri Keuangan",
      "Peraturan Presiden",
      "Peraturan Pemerintah (PP)",
      "Undang-Undang"
    ],
    "answer": 2,
    "explanation": "Sesuai amanat UU 17/2003 Pasal 32, SAP dipersiapkan oleh komite independen (KSAP) dan ditetapkan dengan Peraturan Pemerintah (saat ini PP No. 71 Tahun 2010) setelah mendapat pertimbangan BPK."
  },
  {
    "tm": 4,
    "topic": "Sistem Penganggaran Sektor Publik",
    "difficulty": "medium",
    "q": "Kelemahan utama dari sistem penganggaran tradisional berbasis mata anggaran (Line-Item Budgeting) adalah...",
    "options": [
      "Terlalu rumit untuk dioperasikan oleh bendahara pengeluaran",
      "Mendorong pemborosan anggaran (incrementalism) dan tidak menghubungkan alokasi dana dengan hasil kinerja nyata",
      "Tidak memungkinkan dilakukannya audit kepatuhan oleh BPK",
      "Menghapuskan sistem otorisasi legislatif terhadap belanja pemerintah"
    ],
    "answer": 1,
    "explanation": "Line-item budgeting berorientasi input, menggunakan pendekatan inkremental (kenaikan persentase dari tahun lalu), dan mengabaikan efektivitas pencapaian hasil (outcome) program publik."
  },
  {
    "tm": 4,
    "topic": "Struktur APBD Permendagri 77/2020",
    "difficulty": "medium",
    "q": "Berdasarkan Permendagri No. 77 Tahun 2020, klasifikasi Belanja Daerah terdiri dari empat kelompok utama, yaitu...",
    "options": [
      "Belanja Pegawai, Belanja Barang/Jasa, Belanja Bunga, dan Belanja Modal",
      "Belanja Operasi, Belanja Modal, Belanja Tidak Terduga, dan Belanja Transfer",
      "Belanja Rutin, Belanja Pembangunan, Belanja Darurat, dan Belanja Khusus",
      "Belanja Langsung dan Belanja Tidak Langsung"
    ],
    "answer": 1,
    "explanation": "Permendagri 77/2020 mengklasifikasikan Belanja Daerah menjadi: Belanja Operasi, Belanja Modal, Belanja Tidak Terduga (BTT), dan Belanja Transfer (Bagi Hasil & Bantuan Keuangan)."
  },
  {
    "tm": 4,
    "topic": "Siklus Dokumen Penganggaran Daerah",
    "difficulty": "medium",
    "q": "Dokumen kesepakatan antara Kepala Daerah dan pimpinan DPRD yang menjadi dasar penyusunan Rencana Kerja dan Anggaran SKPD (RKA-SKPD) adalah...",
    "options": [
      "Rencana Kerja Pemerintah Daerah (RKPD)",
      "Kebijakan Umum APBD serta Prioritas dan Plafon Anggaran Sementara (KUA-PPAS)",
      "Dokumen Pelaksanaan Anggaran (DPA-SKPD)",
      "Laporan Keterangan Pertanggungjawaban (LKPJ)"
    ],
    "answer": 1,
    "explanation": "KUA-PPAS yang disepakati bersama antara Kepala Daerah dan DPRD menjadi pedoman resmi batas pagu anggaran sementara dan prioritas program bagi seluruh SKPD dalam menyusun RKA."
  },
  {
    "tm": 4,
    "topic": "SiLPA dan Pembiayaan Daerah",
    "difficulty": "advanced",
    "q": "Sisa Lebih Perhitungan Anggaran (SiLPA) tahun anggaran berjalan disajikan pada APBD tahun berikutnya dalam pos...",
    "options": [
      "Pendapatan Asli Daerah (PAD) kelompok Lain-lain PAD yang Sah",
      "Penerimaan Pembiayaan Daerah",
      "Pengeluaran Pembiayaan Daerah",
      "Belanja Tidak Terduga"
    ],
    "answer": 1,
    "explanation": "SiLPA tahun sebelumnya merupakan kas yang tersedia di Rekening Kas Umum Daerah dan dicatat sebagai Penerimaan Pembiayaan pada APBD tahun berjalan untuk menutup defisit anggaran atau mendanai investasi."
  },
  {
    "tm": 4,
    "topic": "Fungsi Anggaran Publik",
    "difficulty": "basic",
    "q": "Fungsi anggaran publik yang mengarahkan kebijakan fiskal daerah untuk mengurangi pengangguran, pemborosan sumber daya, dan menjaga stabilitas ekonomi disebut...",
    "options": [
      "Fungsi Otorisasi",
      "Fungsi Perencanaan",
      "Fungsi Stabilisasi",
      "Fungsi Distribusi"
    ],
    "answer": 2,
    "explanation": "Fungsi stabilisasi berarti anggaran pemerintah menjadi instrumen untuk memelihara dan mengupayakan keseimbangan fundamental perekonomian, pengendalian inflasi, dan penyerapan tenaga kerja."
  },
  {
    "tm": 5,
    "topic": "Penganggaran Berbasis Kinerja (PBK)",
    "difficulty": "medium",
    "q": "Penganggaran Berbasis Kinerja (Performance-Based Budgeting / PBK) mewajibkan penyusunan anggaran didasarkan pada hubungan yang jelas antara...",
    "options": [
      "Jumlah kas di bank dengan jumlah utang jatuh tempo",
      "Input keuangan yang dialokasikan dengan target output dan outcome kinerja yang ingin dicapai",
      "Realisasi tahun lalu dengan kenaikan inflasi 10%",
      "Jumlah pegawai negeri dengan total belanja operasional dinas"
    ],
    "answer": 1,
    "explanation": "PBK menekankan akuntabilitas 'money follows program': setiap rupiah alokasi input anggaran harus dikaitkan secara logis dengan indikator keluaran (output) dan hasil manfaat nyata (outcome) bagi publik."
  },
  {
    "tm": 5,
    "topic": "Zero-Based Budgeting (ZBB)",
    "difficulty": "advanced",
    "q": "Karakteristik operasional utama dari metode Zero-Based Budgeting (ZBB) adalah...",
    "options": [
      "Pemerintah menetapkan target defisit anggaran tepat 0%",
      "Setiap unit kerja harus menjustifikasi seluruh kebutuhan anggarannya dari nol (tanpa menganggap anggaran tahun lalu otomatis berlanjut) menggunakan Paket Keputusan (Decision Packages)",
      "Seluruh transaksi belanja daerah dilarang menggunakan uang tunai",
      "Hanya program yang berbiaya di bawah Rp 100 juta yang disetujui"
    ],
    "answer": 1,
    "explanation": "ZBB mengharuskan penyusunan paket keputusan (decision packages) dan perankingan program dari basis nol, memutus rantai incrementalism tradisional, meski menuntut waktu dan data analisis yang sangat intensif."
  },
  {
    "tm": 5,
    "topic": "Planning Programming Budgeting System (PPBS)",
    "difficulty": "medium",
    "q": "Kelebihan konseptual dari pendekatan Planning, Programming, and Budgeting System (PPBS) dibandingkan sistem tradisional adalah...",
    "options": [
      "PPBS berfokus jangka pendek satu tahun saja",
      "PPBS mengintegrasikan perencanaan strategis jangka panjang dengan perumusan program lintas sektoral dan analisis biaya-manfaat (cost-benefit analysis)",
      "PPBS meniadakan kebutuhan evaluasi program",
      "PPBS hanya diterapkan pada dinas pelayanan kesehatan"
    ],
    "answer": 1,
    "explanation": "PPBS menjembatani visi jangka panjang dengan rencana kerja operasional tahunan melalui pendekatan analitis sistemik, mengidentifikasi alternatif terbaik melalui analisis biaya-efektivitas."
  },
  {
    "tm": 5,
    "topic": "Standar Biaya Masukan & Analisis Biaya",
    "difficulty": "basic",
    "q": "Batas tertinggi biaya satuan honorarium, uang saku perjalanan dinas, dan pengadaan perlengkapan kantor yang ditetapkan pemerintah untuk mencegah pembengkakan anggaran disebut...",
    "options": [
      "Harga Perkiraan Sendiri (HPS)",
      "Standar Biaya Masukan (SBM) / Standar Satuan Harga (SSH)",
      "Indeks Tarif Pajak Daerah",
      "Plafon Prioritas Anggaran Kas"
    ],
    "answer": 1,
    "explanation": "SBM (pusat) dan SSH (daerah) berfungsi sebagai instrumen batas tertinggi (plafon pagu) dan pedoman estimasi penyusunan RKA demi menjamin efisiensi dan kewajaran belanja."
  },
  {
    "tm": 5,
    "topic": "Analisis Standar Belanja (ASB)",
    "difficulty": "advanced",
    "q": "Analisis Standar Belanja (ASB) pada penganggaran pemerintah daerah digunakan untuk...",
    "options": [
      "Menghitung jumlah utang jangka panjang pemda",
      "Menilai kewajaran beban kerja dan kewajaran biaya suatu kegiatan berdasarkan tolok ukur kinerja yang ditetapkan",
      "Menghitung proyeksi pendapatan retribusi pasar",
      "Menghapuskan kewajiban penyusunan DPA-SKPD"
    ],
    "answer": 1,
    "explanation": "ASB adalah standar untuk menilai kewajaran alokasi biaya per unit kegiatan (misal biaya pelatihan per peserta per hari) agar tidak ada penggelembungan anggaran antar-SKPD."
  },
  {
    "tm": 6,
    "topic": "Basis Akuntansi: Akuntansi Komitmen",
    "difficulty": "medium",
    "q": "Pemerintah membukukan komitmen belanja pada saat pesanan resmi diterbitkan kepada pihak ketiga, sebelum barang diterima atau dibayar. Praktik akuntansi ini disebut...",
    "options": [
      "Akuntansi Kas (Cash Accounting)",
      "Akuntansi Komitmen (Commitment / Encumbrance Accounting)",
      "Akuntansi Penilaian Kembali (Revaluation Accounting)",
      "Akuntansi Forensik (Forensic Accounting)"
    ],
    "answer": 1,
    "explanation": "Akuntansi komitmen mencatat komitmen belanja (encumbrance) sejak Surat Perintah Kerja (SPK) diterbitkan agar pagu anggaran yang tersisa tidak terlampaui (overspending control)."
  },
  {
    "tm": 6,
    "topic": "Akuntansi Dana (Fund Accounting)",
    "difficulty": "medium",
    "q": "Konsep Akuntansi Dana (Fund Accounting) yang umum diterapkan pada sektor publik memperlakukan setiap dana (fund) sebagai...",
    "options": [
      "Satu rekening tabungan di bank swasta",
      "Entitas fiskal dan akuntansi yang berdiri sendiri (self-balancing) dengan seperangkat akun aset, liabilitas, dan ekuitas tersendiri",
      "Pos sementara yang harus dihapus pada akhir triwulan",
      "Bagian dari modal saham kepala daerah"
    ],
    "answer": 1,
    "explanation": "Fund Accounting membagi organisasi publik menjadi beberapa entitas akuntansi otonom (funds) dengan tujuan memastikan kepatuhan pembatasan legal atas penggunaan sumber daya fiskal tertentu."
  },
  {
    "tm": 6,
    "topic": "Akuntansi Anggaran (Budgetary Accounting)",
    "difficulty": "medium",
    "q": "Tujuan utama pencatatan akun-akun anggaran (seperti Estimasi Pendapatan dan Apropriasi Belanja) ke dalam sistem buku besar adalah...",
    "options": [
      "Menghitung pajak penghasilan pegawai pemerintah",
      "Memfasilitasi pengendalian preventif secara terus-menerus terhadap realisasi pendapatan dan sisa pagu belanja yang diizinkan",
      "Menggantikan fungsi neraca keuangan",
      "Menghindari audit pemeriksaan oleh Inspektorat Daerah"
    ],
    "answer": 1,
    "explanation": "Akuntansi anggaran mengintegrasikan data anggaran resmi ke dalam pembukuan transaksi harian sehingga sistem secara otomatis dapat menolak transaksi yang melebihi pagu apropriasi."
  },
  {
    "tm": 6,
    "topic": "Sisa Pagu Bebas (Unencumbered Balance)",
    "difficulty": "advanced",
    "q": "Dinas Bina Marga memiliki Pagu Apropriasi Belanja Pemeliharaan Jalan Rp 5.000.000.000. Realisasi belanja tunai yang telah dibayar SP2D sebesar Rp 2.800.000.000, dan pesanan kontrak perbaikan yang telah diterbitkan (Encumbrance) senilai Rp 1.400.000.000. Berapakah Sisa Pagu Anggaran Bebas (Unencumbered Balance) yang masih dapat digunakan?",
    "options": [
      "Rp 2.200.000.000",
      "Rp 800.000.000",
      "Rp 3.600.000.000",
      "Rp 1.400.000.000"
    ],
    "answer": 1,
    "explanation": "Sisa Pagu Bebas = Pagu Anggaran - Realisasi Belanja - Komitmen Kontrak (Encumbrance) = Rp 5.000.000.000 - Rp 2.800.000.000 - Rp 1.400.000.000 = Rp 800.000.000."
  },
  {
    "tm": 6,
    "topic": "Basis Kas Menuju Akrual vs Akrual Penuh",
    "difficulty": "basic",
    "q": "Perbedaan mendasar antara SAP Cash Towards Accrual (PP 24/2005) dan SAP Akrual Penuh (PP 71/2010) terletak pada...",
    "options": [
      "Pada SAP Akrual, laporan neraca tidak lagi disajikan",
      "Pada SAP Akrual, pendapatan dan beban operasional diakui berbasis akrual dalam Laporan Operasional (LO), bukan hanya saat kas diterima/keluar",
      "Pada SAP Akrual, seluruh aset tetap langsung dibebankan habis di tahun perolehan",
      "SAP Akrual hanya berlaku bagi BUMN, bukan pemerintah daerah"
    ],
    "answer": 1,
    "explanation": "PP 71/2010 memperkenalkan Laporan Operasional (LO) dan Laporan Perubahan Ekuitas (LPE) berbasis akrual penuh, mencatat pendapatan saat timbul hak dan beban saat timbul kewajiban/konsumsi aset."
  },
  {
    "tm": 7,
    "topic": "Laporan Keuangan Pemerintah Berbasis Akrual",
    "difficulty": "medium",
    "q": "Laporan keuangan pemerintah yang menyajikan ikhtisar sumber, alokasi, dan pemakaian sumber daya keuangan kas selama satu periode pelaporan serta membandingkannya dengan anggaran resminya adalah...",
    "options": [
      "Laporan Operasional (LO)",
      "Laporan Realisasi Anggaran (LRA)",
      "Laporan Perubahan Ekuitas (LPE)",
      "Neraca Saldo Akrual"
    ],
    "answer": 1,
    "explanation": "LRA menyajikan realisasi penerimaan pendapatan berbasis kas dan pengeluaran belanja berbasis kas dibandingkan dengan target/pagu yang ditetapkan dalam APBN/APBD."
  },
  {
    "tm": 7,
    "topic": "Perbedaan Pos LRA vs LO",
    "difficulty": "medium",
    "q": "Pengeluaran kas daerah untuk membayar tagihan rekening listrik kantor dinas bulan berjalan dicatat dalam Laporan Realisasi Anggaran (LRA) sebagai ... dan dalam Laporan Operasional (LO) sebagai ...",
    "options": [
      "Belanja Barang dan Jasa; Beban Barang dan Jasa",
      "Beban Listrik; Belanja Operasi",
      "Pengeluaran Pembiayaan; Beban Administrasi",
      "Aset Lancar; Beban Penyusutan"
    ],
    "answer": 0,
    "explanation": "Pada LRA (berbasis kas), terminologi yang digunakan adalah 'Belanja Barang dan Jasa'. Pada LO (berbasis akrual), terminologi yang digunakan adalah 'Beban Barang dan Jasa'."
  },
  {
    "tm": 7,
    "topic": "Laporan Perubahan Saldo Anggaran Lebih",
    "difficulty": "advanced",
    "q": "Mengapa Laporan Perubahan Saldo Anggaran Lebih (LP-SAL) HANYA disusun oleh entitas pelaporan yang menjalankan fungsi Bendahara Umum (BUN/BUD) dan TIDAK disusun oleh SKPD?",
    "options": [
      "Karena SKPD tidak memiliki pegawai akuntansi",
      "Karena Saldo Anggaran Lebih (SAL) merupakan akumulasi SiLPA/SiKPA kas negara/daerah yang tersimpan secara terpusat di Rekening Kas Umum Negara/Daerah (BUN/BUD)",
      "Karena SKPD hanya boleh menyusun Neraca tanpa laporan lainnya",
      "Karena LP-SAL hanya diterbitkan lima tahun sekali"
    ],
    "answer": 1,
    "explanation": "SAL adalah kas milik pemerintah secara keseluruhan yang dikelola oleh Pengelola Keuangan Daerah (PPKD selaku BUD), sehingga SKPD tidak mengelola rekening SAL tersendiri."
  },
  {
    "tm": 7,
    "topic": "Ekuitas Tunggal Neraca SAP Akrual",
    "difficulty": "medium",
    "q": "Pada Neraca Pemerintah berbasis akrual penuh sesuai PP 71/2010, pos Ekuitas disajikan secara...",
    "options": [
      "Terbagi menjadi Ekuitas Dana Lancar, Ekuitas Dana Investasi, dan Ekuitas Dana Cadangan",
      "Tunggal (Satu Nilai Ekuitas), mencerminkan selisih antara Total Aset dengan Total Kewajiban",
      "Terbagi menjadi Modal Saham Seri A dan Saham Seri B",
      "Digabungkan dengan Liabilitas Jangka Panjang"
    ],
    "answer": 1,
    "explanation": "Di bawah SAP Akrual PP 71/2010, penyajian Ekuitas disederhanakan menjadi akun tunggal 'Ekuitas' yang terhubung dengan saldo akhir Laporan Perubahan Ekuitas (LPE)."
  },
  {
    "tm": 7,
    "topic": "Catatan atas Laporan Keuangan (CaLK)",
    "difficulty": "basic",
    "q": "Salah satu informasi krusial yang WAJIB diungkapkan dalam Catatan atas Laporan Keuangan (CaLK) pemerintah adalah...",
    "options": [
      "Daftar nama seluruh pemilih dalam pemilihan kepala daerah",
      "Pernyataan kesesuaian kebijakan akuntansi dengan SAP, penjelasan rinci pos-pos laporan, dan rekonsiliasi perbedaan angka LRA dan LO",
      "Estimasi laba bersih BUMD sepuluh tahun mendatang",
      "Hasil perolehan suara partai politik di DPRD"
    ],
    "answer": 1,
    "explanation": "CaLK memuat penjelasan naratif, analisis detail pos laporan keuangan, dasar penyusunan dan kebijakan akuntansi, serta pengungkapan penting lain untuk transparansi penuh (full disclosure)."
  }
];

export const AKS201_QUIZ_UAS: QuizQuestion[] = [
  {
    "id": "akk203-uas-tm08-01",
    "tm": 8,
    "topic": "SAPP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "SAPP: kombinasi apa yang tepat menurut PMK 217/2022?",
    "options": [
      "SABUN dan SAI membentuk sistem pusat",
      "Si AP dan SAPD membentuk sistem pusat",
      "SAI dan SAPD membentuk sistem pusat",
      "Si AP dan SKPD membentuk sistem pusat"
    ],
    "answer": 0,
    "explanation": "SABUN menangani transaksi BUN dan SAI transaksi instansi. Si AP merupakan bagian SABUN; SAPD dan SKPD berada dalam ruang daerah. Opsi lainnya mencampur tingkatan atau entitas. Rujukan: [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceRef": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceAnchors": [
      "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
    ]
  },
  {
    "id": "akk203-uas-tm08-02",
    "tm": 8,
    "topic": "Si AP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Si AP: bagaimana hubungannya dengan SABUN?",
    "options": [
      "Si AP merupakan pengganti seluruh SABUN",
      "Si AP merupakan salah satu subsistem SABUN",
      "Si AP merupakan unit konsolidasi seluruh SKPD",
      "Si AP merupakan nama kebijakan akuntansi SAP"
    ],
    "answer": 1,
    "explanation": "Si AP berada di dalam SABUN. Menjadikannya sinonim menghilangkan subsistem BUN lainnya; opsi SKPD mencampur daerah, sedangkan SAP adalah standar. Rujukan: [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceRef": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceAnchors": [
      "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
    ]
  },
  {
    "id": "akk203-uas-tm08-03",
    "tm": 8,
    "topic": "SAI",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "SAI: siapa menyusun laporan kementerian/lembaga?",
    "options": [
      "BUD dari laporan seluruh dinas daerah",
      "SKPD dari gabungan seluruh kementerian",
      "UAPA dari laporan unit di bawahnya",
      "KPPN dari satu laporan yayasan nirlaba"
    ],
    "answer": 2,
    "explanation": "UAPA berfungsi pada tingkat K/L. BUD dan SKPD terkait daerah; KPPN dalam peran kuasa BUN tidak menggantikan UAPA dan yayasan berada di kerangka berbeda. Rujukan: [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceRef": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceAnchors": [
      "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
    ]
  },
  {
    "id": "akk203-uas-tm08-04",
    "tm": 8,
    "topic": "Rekonsiliasi",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Rekonsiliasi: laporan aset dan keuangan tidak cocok. Apa langkah awal yang layak?",
    "options": [
      "Samakan total dengan tambahan pendapatan acak",
      "Hapus saldo lebih kecil supaya totalnya sama",
      "Ganti standar seluruh entitas menjadi SAK",
      "Cocokkan dokumen, periode, nilai dan klasifikasi"
    ],
    "answer": 3,
    "explanation": "Pencocokan harus mendahului koreksi. Pendapatan acak dan penghapusan saldo tanpa bukti menimbulkan salah saji. Mengganti standar tidak menyelesaikan sebab selisih. Rujukan: [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceRef": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "sourceAnchors": [
      "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
    ]
  },
  {
    "id": "akk203-uas-tm08-05",
    "tm": 8,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: RK-PPKD kredit dan RK-SKPD debit masing-masing Rp 100 juta. Jurnal eliminasi?",
    "options": [
      "Debit RK-PPKD, kredit RK-SKPD Rp 100 juta",
      "Debit RK-SKPD, kredit RK-PPKD Rp 100 juta",
      "Debit beban, kredit pendapatan Rp 100 juta",
      "Debit kas, kredit pendapatan baru Rp 100 juta"
    ],
    "answer": 0,
    "explanation": "Debit RK-PPKD dan kredit RK-SKPD menghapus saldo yang diberikan. Jurnal terbalik memperbesar saldo; beban/pendapatan atau kas baru tidak menggambarkan pasangan internal. Debit sama dengan kredit. Rujukan: [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "sourceRef": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "sourceAnchors": [
      "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
    ]
  },
  {
    "id": "akk203-uas-tm08-06",
    "tm": 8,
    "topic": "Konsolidasi",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Konsolidasi: di mana jurnal eliminasi hubungan internal dibuat?",
    "options": [
      "Pada seluruh dokumen kas yang harus dihapus",
      "Pada kertas kerja untuk laporan konsolidasian",
      "Pada daftar donor untuk laporan dana kampanye",
      "Pada laporan kinerja untuk mengubah target"
    ],
    "answer": 1,
    "explanation": "Kertas kerja mendukung konsolidasi dan jejak unit tetap dipertahankan. Menghapus dokumen kas merusak bukti. Daftar donor dan target kinerja tidak berkaitan dengan akun timbal balik. Rujukan: [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "sourceRef": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "sourceAnchors": [
      "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
    ]
  },
  {
    "id": "akk203-uas-tm08-07",
    "tm": 8,
    "topic": "Kebijakan pusat",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Kebijakan pusat: bagaimana akun LRA dalam konsolidasi PMK 100/2025?",
    "options": [
      "Dieliminasi seluruhnya seperti akun finansial",
      "Diganti menjadi akun LO tanpa rekonsiliasi",
      "Tidak dieliminasi menurut klausul akun LRA",
      "Dihapus karena tidak termasuk laporan SAP"
    ],
    "answer": 2,
    "explanation": "Klausul PMK 100 menyebut akun LRA tidak dieliminasi. Menyamakan LRA dengan finansial mengabaikan pertanggungjawaban APBN; perubahan ke LO atau penghapusan juga tidak didukung aturan. Rujukan: [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
    "sourceRef": "[PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
    "sourceAnchors": [
      "[PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)"
    ]
  },
  {
    "id": "akk203-uas-tm08-08",
    "tm": 8,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: saldo RK Rp 100 juta dan Rp 98 juta belum cocok. Keputusan?",
    "options": [
      "Eliminasi Rp 100 juta dan abaikan selisihnya",
      "Eliminasi Rp 98 juta sebagai laba konsolidasi",
      "Pindahkan selisih ke donasi tanpa dokumen",
      "Telusuri selisih Rp 2 juta sebelum eliminasi"
    ],
    "answer": 3,
    "explanation": "Selisih Rp 2 juta memerlukan penelusuran dan koreksi sesuai bukti. Eliminasi paksa menutupi masalah. Laba dan donasi tidak menjelaskan arus internal pemerintah daerah. Rujukan: [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "sourceRef": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "sourceAnchors": [
      "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
    ]
  },
  {
    "id": "akk203-uas-tm08-09",
    "tm": 8,
    "topic": "Versi sumber",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Versi sumber: mulai laporan tahun berapa PMK 100/2025 digunakan?",
    "options": [
      "Mulai laporan TA 2025 sesuai Pasal 6",
      "Mulai laporan TA 2013 tanpa penyesuaian",
      "Mulai laporan TA 2028 seperti SPKN baru",
      "Mulai laporan TA 2009 untuk semua yayasan"
    ],
    "answer": 0,
    "explanation": "Pasal 6 menetapkan LK TA 2025. Tahun 2013 berasal dari lampiran daerah, 2028 dari standar pemeriksaan lain, dan yayasan bukan ruang kebijakan pemerintah pusat. Rujukan: [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
    "sourceRef": "[PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
    "sourceAnchors": [
      "[PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)"
    ]
  },
  {
    "id": "akk203-uas-tm09-01",
    "tm": 9,
    "topic": "Kinerja",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Kinerja: apa beda output dan outcome?",
    "options": [
      "Output adalah anggaran, outcome daftar input",
      "Output adalah keluaran, outcome hasil yang dituju",
      "Output adalah harga, outcome saldo anggaran",
      "Output adalah opini, outcome jurnal penutup"
    ],
    "answer": 1,
    "explanation": "Keluaran kegiatan berbeda dari hasil program. Anggaran dan input adalah sumber daya; opini adalah hasil pemeriksaan, dan jurnal merupakan pencatatan. Menukar istilah membuat indikator tidak sesuai sasaran. Rujukan: [Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "sourceRef": "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "sourceAnchors": [
      "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)"
    ]
  },
  {
    "id": "akk203-uas-tm09-02",
    "tm": 9,
    "topic": "Ekonomi",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Ekonomi: barang murah gagal memenuhi spesifikasi. Kesimpulan?",
    "options": [
      "Harga rendah selalu menunjukkan ekonomi baik",
      "Harga rendah selalu membuktikan hasil program",
      "Harga rendah belum cukup menunjukkan ekonomi",
      "Harga rendah menggantikan bukti mutu barang"
    ],
    "answer": 2,
    "explanation": "Ekonomi memperhatikan kualitas, jumlah dan waktu yang tepat bersama biaya. Opsi lain mengabaikan mutu atau mengubah informasi harga menjadi bukti efektivitas yang belum tersedia. Rujukan: [ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)",
    "sourceRef": "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)",
    "sourceAnchors": [
      "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)"
    ]
  },
  {
    "id": "akk203-uas-tm09-03",
    "tm": 9,
    "topic": "Efisiensi",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Efisiensi: pembanding paling layak untuk dua program setara?",
    "options": [
      "Jumlah rapat dengan biaya dan mutu diabaikan",
      "Serapan anggaran tanpa informasi hasil layanan",
      "Opini laporan keuangan tanpa data keluaran",
      "Biaya per keluaran dengan mutu dan periode sama"
    ],
    "answer": 3,
    "explanation": "Hubungan sumber daya dengan keluaran membutuhkan pembanding setara. Rapat, serapan, dan opini dapat memberi informasi lain, tetapi masing-masing tidak cukup mengukur efisiensi keluaran. Rujukan: [ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8) Rasio antarunit juga perlu konteks serta data mutu. [Jones-Pendlebury ed.6 (2010), Bab 2, cetak 18-29/PDF 29-40](https://opac.feb.uinjkt.ac.id/repository/4a92513b40668f056ddd4e5117aca16e.pdf#page=29)",
    "sourceRef": "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8) [Jones-Pendlebury ed.6 (2010), Bab 2, cetak 18-29/PDF 29-40](https://opac.feb.uinjkt.ac.id/repository/4a92513b40668f056ddd4e5117aca16e.pdf#page=29)",
    "sourceAnchors": [
      "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)",
      "[Jones-Pendlebury ed.6 (2010), Bab 2, cetak 18-29/PDF 29-40](https://opac.feb.uinjkt.ac.id/repository/4a92513b40668f056ddd4e5117aca16e.pdf#page=29)"
    ]
  },
  {
    "id": "akk203-uas-tm09-04",
    "tm": 9,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: biaya Rp 480 juta untuk 800 layanan. Biaya per layanan?",
    "options": [
      "Rp 600.000 per layanan pada cakupan biaya sama",
      "Rp 480.000 per layanan pada cakupan biaya sama",
      "Rp 800.000 per layanan pada cakupan biaya sama",
      "Rp 750.000 per layanan pada cakupan biaya sama"
    ],
    "answer": 0,
    "explanation": "Rp 480.000.000/800 =Rp 600.000 per layanan. Rp 480.000 memakai 1.000 layanan rencana; Rp 800.000 dan Rp 750.000 tidak sesuai pembagian input yang diberikan. Mutu harus tetap sebanding. Rujukan: [ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)",
    "sourceRef": "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)",
    "sourceAnchors": [
      "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)"
    ]
  },
  {
    "id": "akk203-uas-tm09-05",
    "tm": 9,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: realisasi 120 dari target 180 hasil, higher is better. Capaian?",
    "options": [
      "150,00% dan hasil melampaui target",
      "66,67% dan hasil masih di bawah target",
      "80,00% dan biaya pasti lebih efisien",
      "60,00% dan program pasti menyebabkan hasil"
    ],
    "answer": 1,
    "explanation": "120/180 ×100% =66,67%, dibulatkan dua desimal.150% memakai pecahan terbalik;80% berasal rasio anggaran berbeda;60% salah hitung dan klaim sebab belum didukung desain. Rujukan: [Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22](https://peraturan.bpk.go.id/Download/123556/PERMENPAN%20NOMOR%2053%20TAHUN%202014.pdf#page=19)",
    "sourceRef": "[Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22](https://peraturan.bpk.go.id/Download/123556/PERMENPAN%20NOMOR%2053%20TAHUN%202014.pdf#page=19)",
    "sourceAnchors": [
      "[Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22](https://peraturan.bpk.go.id/Download/123556/PERMENPAN%20NOMOR%2053%20TAHUN%202014.pdf#page=19)"
    ]
  },
  {
    "id": "akk203-uas-tm09-06",
    "tm": 9,
    "topic": "SAKIP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "SAKIP: urutan hubungan yang tepat?",
    "options": [
      "Audit opini, pembubaran unit, laporan, perjanjian, kas",
      "Jurnal kas, donasi, likuidasi, laporan kampanye, target",
      "Renstra, perjanjian, pengukuran/data, laporan, evaluasi",
      "Laporan, hapus data, ubah target tanpa bukti, opini"
    ],
    "answer": 2,
    "explanation": "Perpres 29 menjelaskan komponen yang saling terhubung dari rencana sampai evaluasi. Urutan lainnya mencampur proses berbeda atau menghapus bukti yang diperlukan pengukuran. Rujukan: [Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "sourceRef": "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "sourceAnchors": [
      "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)"
    ]
  },
  {
    "id": "akk203-uas-tm09-07",
    "tm": 9,
    "topic": "Indikator",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Indikator: target 20 menit, realisasi 25 menit. Penilaian?",
    "options": [
      "Capaian 125% selalu berarti layanan makin berhasil",
      "Jumlah rapat pasti menjelaskan semua selisih",
      "Waktu tunggu dapat diganti dengan serapan biaya",
      "Waktu tunggu lebih lama dan belum mencapai target"
    ],
    "answer": 3,
    "explanation": "Pada lower is better, waktu lebih lama memburuk. Rasio 125% tidak berarti sukses; rapat tidak membuktikan sebab. Serapan mengukur aspek anggaran yang berbeda dari waktu tunggu. Rujukan: [Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6) [Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22](https://peraturan.bpk.go.id/Download/123556/PERMENPAN%20NOMOR%2053%20TAHUN%202014.pdf#page=19)",
    "sourceRef": "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6) [Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22](https://peraturan.bpk.go.id/Download/123556/PERMENPAN%20NOMOR%2053%20TAHUN%202014.pdf#page=19)",
    "sourceAnchors": [
      "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6) [Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22](https://peraturan.bpk.go.id/Download/123556/PERMENPAN%20NOMOR%2053%20TAHUN%202014.pdf#page=19)"
    ]
  },
  {
    "id": "akk203-uas-tm09-08",
    "tm": 9,
    "topic": "AKIP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "AKIP: bobot empat komponen menurut 88/2021?",
    "options": [
      "Perencanaan 30, pengukuran 30, pelaporan 15, evaluasi 25",
      "Perencanaan 25, pengukuran 25, pelaporan 25, evaluasi 25",
      "Perencanaan 35, pengukuran 20, pelaporan 25, evaluasi 20",
      "Perencanaan 15, pengukuran 20, pelaporan 30, evaluasi 35"
    ],
    "answer": 0,
    "explanation": "Tabel sumber menetapkan 30/30/15/25. Tiga kombinasi lain tetap berjumlah 100 tetapi distribusinya tidak sesuai. Bobot AKIP juga harus dibedakan dari capaian rasio program. Rujukan: [Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)",
    "sourceRef": "[Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)",
    "sourceAnchors": [
      "[Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)"
    ]
  },
  {
    "id": "akk203-uas-tm09-09",
    "tm": 9,
    "topic": "AKIP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "AKIP: dokumen tersedia, tetapi keputusan tidak memakainya. Aspek paling perlu diperiksa?",
    "options": [
      "Keberadaan, yang otomatis memberi nilai penuh",
      "Pemanfaatan, terpisah dari keberadaan dokumen",
      "Harga bahan, yang menggantikan penilaian AKIP",
      "Opini BPK, yang menetapkan bobot seluruh AKIP"
    ],
    "answer": 1,
    "explanation": "Pedoman membedakan keberadaan, kualitas dan pemanfaatan. Ketersediaan dokumen tidak membuktikan pemanfaatan. Harga bahan atau opini laporan keuangan tidak menggantikan bukti penggunaan informasi kinerja. Rujukan: [Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)",
    "sourceRef": "[Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)",
    "sourceAnchors": [
      "[Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)"
    ]
  },
  {
    "id": "akk203-uas-tm10-01",
    "tm": 10,
    "topic": "APIP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "APIP: bentuk kegiatan pengawasan intern menurut PP 60?",
    "options": [
      "Opini WTP bagi semua warga dan penerima layanan",
      "Penyusunan putusan pidana bagi semua program",
      "Audit, reviu, evaluasi, pemantauan dan lainnya",
      "Penggantian seluruh tanggung jawab pimpinan"
    ],
    "answer": 2,
    "explanation": "Pasal 48 menjelaskan lima bentuk kegiatan. Opini eksternal, putusan pidana dan pemindahan tanggung jawab bukan klasifikasi pengawasan intern tersebut. Rujukan: [PP 60/2008 Ps.2-3,47-54; cetak/PDF 3-4,21-25](https://peraturan.go.id/files/pp60-2008.pdf#page=3)",
    "sourceRef": "[PP 60/2008 Ps.2-3,47-54; cetak/PDF 3-4,21-25](https://peraturan.go.id/files/pp60-2008.pdf#page=3)",
    "sourceAnchors": [
      "[PP 60/2008 Ps.2-3,47-54; cetak/PDF 3-4,21-25](https://peraturan.go.id/files/pp60-2008.pdf#page=3)"
    ]
  },
  {
    "id": "akk203-uas-tm10-02",
    "tm": 10,
    "topic": "BPK",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "BPK: siapa menentukan objek, waktu dan metode pemeriksaan?",
    "options": [
      "Pejabat objek secara mutlak tanpa peran BPK",
      "Donor yayasan untuk seluruh anggaran negara",
      "Penyedia aplikasi karena data ada dalam sistem",
      "BPK secara bebas dan mandiri sesuai UU 15/2004"
    ],
    "answer": 3,
    "explanation": "Pasal 6 memberi kemandirian kepada BPK. Objek, donor, dan penyedia sistem dapat memberi informasi sesuai kebutuhan, tetapi tidak mengambil alih kewenangan penentuan pemeriksaan. Rujukan: [UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "sourceRef": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "sourceAnchors": [
      "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)"
    ]
  },
  {
    "id": "akk203-uas-tm10-03",
    "tm": 10,
    "topic": "Jenis pemeriksaan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Jenis pemeriksaan: menilai ekonomi dan hasil program termasuk?",
    "options": [
      "Pemeriksaan kinerja dengan kriteria yang relevan",
      "Pemeriksaan keuangan untuk opini semua layanan",
      "Audit dana kampanye untuk seluruh kementerian",
      "Jurnal konsolidasi untuk mengubah hasil program"
    ],
    "answer": 0,
    "explanation": "Pemeriksaan kinerja memeriksa aspek 3 E. Opini LK tidak otomatis menjawab hasil program; kampanye berbeda lingkup, sedangkan jurnal adalah proses akuntansi. Rujukan: [UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004) [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceRef": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004) [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceAnchors": [
      "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004) [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm10-04",
    "tm": 10,
    "topic": "Bukti",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Bukti: apa beda kecukupan dan ketepatan?",
    "options": [
      "Kecukupan mutu; ketepatan hanya jumlah salinan",
      "Kecukupan jumlah; ketepatan mutu dan relevansi",
      "Kecukupan opini; ketepatan hanya serapan biaya",
      "Kecukupan aplikasi; ketepatan tanggal pengadaan"
    ],
    "answer": 1,
    "explanation": "KK par 34-36 membedakan kuantitas dengan kualitas bukti. Opsi terbalik menukar definisi. Opini, serapan, aplikasi atau tanggal tunggal tidak menggantikan kedua dimensi penilaian bukti. Rujukan: [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceRef": "[Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceAnchors": [
      "[Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm10-05",
    "tm": 10,
    "topic": "Opini WTP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Opini WTP: kesimpulan yang paling tepat?",
    "options": [
      "Semua transaksi pasti tanpa kecurangan",
      "Seluruh program pasti mencapai hasil",
      "Kewajaran LK menurut kriteria pemeriksaan",
      "Seluruh rekomendasi BPK pasti selesai"
    ],
    "answer": 2,
    "explanation": "Opini menjawab kewajaran informasi LK. Tiga alternatif mengubah opini menjadi jaminan fraud, efektivitas atau tindak lanjut yang memerlukan bukti terpisah. Rujukan: [UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "sourceRef": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "sourceAnchors": [
      "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)"
    ]
  },
  {
    "id": "akk203-uas-tm10-06",
    "tm": 10,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: dokumen aset hilang, bukti alternatif belum diuji. Keputusan?",
    "options": [
      "Langsung tetapkandisclaimer dari satu dokumen",
      "Langsung tetapkan WTP karena aset terlihat",
      "Hapus aset seluruhnya supaya audit selesai",
      "Uji bukti alternatif dan dampak sebelum opini"
    ],
    "answer": 3,
    "explanation": "Perlu bukti cukup dan tepat beserta penilaian materialitas dan cakupan. Disclaimer dan WTP otomatis melompati analisis. Penghapusan aset tanpa dasar juga dapat menciptakan salah saji. Rujukan: [UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004) [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceRef": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004) [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceAnchors": [
      "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004) [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm10-07",
    "tm": 10,
    "topic": "Tindak lanjut",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Tindak lanjut: 60 hari pada UU 15/2004 melekat pada apa?",
    "options": [
      "Jawaban atau penjelasan sejak LHP diterima",
      "Jaminan seluruh rekomendasi selesai mutlak",
      "Batas penerbitan semua laporan keuangan",
      "Batas semua proyek fisik mulai dibangun"
    ],
    "answer": 0,
    "explanation": "Pasal 20(3) menempatkan tenggat pada jawaban/penjelasan. Kewajiban melaksanakan tetap ada dan dipantau. Alternatif menyamakan tenggat dengan hasil final atau pekerjaan yang tidak diatur pasal itu. Rujukan: [UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "sourceRef": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "sourceAnchors": [
      "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)"
    ]
  },
  {
    "id": "akk203-uas-tm10-08",
    "tm": 10,
    "topic": "SPKN",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "SPKN: pada 14 Oktober 2026, bagaimana membaca aturan 2026?",
    "options": [
      "Langsung mengganti 2017 sejak 10 April 2026",
      "Diundangkan, mulai berlaku 10 April 2028",
      "Berlaku 2025 karena sebelum tahun akademik",
      "Tidak pernah berlaku karena standar lama ada"
    ],
    "answer": 1,
    "explanation": "Pasal 9 memberi jeda dua tahun sejak 10 April 2026. Pencabutan 2017 terjadi saat mulai berlaku. Alternatif mengabaikan jeda atau menyimpulkan standar baru tidak akan berlaku. Rujukan: [Peraturan BPK 1/2026 Ps.7-9; cetak/PDF 3-4; diundangkan 10 April 2026, berlaku 10 April 2028](https://peraturan.bpk.go.id/Download/411430/Salinan%20PBPK%201%20Tahun%202026.pdf#page=3)",
    "sourceRef": "[Peraturan BPK 1/2026 Ps.7-9; cetak/PDF 3-4; diundangkan 10 April 2026, berlaku 10 April 2028](https://peraturan.bpk.go.id/Download/411430/Salinan%20PBPK%201%20Tahun%202026.pdf#page=3)",
    "sourceAnchors": [
      "[Peraturan BPK 1/2026 Ps.7-9; cetak/PDF 3-4; diundangkan 10 April 2026, berlaku 10 April 2028](https://peraturan.bpk.go.id/Download/411430/Salinan%20PBPK%201%20Tahun%202026.pdf#page=3)"
    ]
  },
  {
    "id": "akk203-uas-tm10-09",
    "tm": 10,
    "topic": "PDTT",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "PDTT: apakah selalu merupakan investigasi pidana?",
    "options": [
      "Ya; semua PDTT selalu menghasilkan putusan",
      "Ya; semua PDTT menggantikan opini tahunan",
      "Tidak; tujuan khusus dapat berupa kepatuhan",
      "Tidak;PDTT hanya jurnal penyusutan aset"
    ],
    "answer": 2,
    "explanation": "KK 2017 menyebut kepatuhan dan investigatif sebagai bentuk PDTT. Pemeriksa memberi kesimpulan sesuai tujuan, tidak otomatis putusan pidana atau pengganti opini. Jurnal penyusutan bukan jenis penugasan PDTT. Rujukan: [Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceRef": "[Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "sourceAnchors": [
      "[Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm11-01",
    "tm": 11,
    "topic": "LSM",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "LSM: data apa diperlukan sebelum memilih kewajiban badan?",
    "options": [
      "Sebutan LSM saja tanpa dokumen badan hukum",
      "Jumlah pengikut media sosial dan logo LSM",
      "Nama aplikasi yang digunakan mencatat kas",
      "Bentuk hukum, kegiatan, periode dan kerangka SAK"
    ],
    "answer": 3,
    "explanation": "LSM adalah label kegiatan; kewajiban badan memerlukan bentuk hukum dan kerangka. Logo, pengikut dan aplikasi tidak menentukan standar maupun kewajiban laporan yayasan. Rujukan: [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
    "sourceRef": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
    "sourceAnchors": [
      "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)"
    ]
  },
  {
    "id": "akk203-uas-tm11-02",
    "tm": 11,
    "topic": "ISAK 335",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "ISAK 335: fungsi yang dipelajari dalam contoh historis?",
    "options": [
      "Penyesuaian penyajian dan deskripsi laporan",
      "Seluruh pengakuan donasi tanpa standar lain",
      "Seluruh pengukuran aset tanpa kebijakan lain",
      "Penghapusan kewajiban audit seluruh yayasan"
    ],
    "answer": 0,
    "explanation": "Interpretasi berfokus penyajian. Pengakuan/pengukuran memerlukan standar transaksi terkait; audit berasal regulasi atau perikatan. Opsi lain memperluas lingkup tanpa dasar. Rujukan: [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
    "sourceRef": "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)"
    ]
  },
  {
    "id": "akk203-uas-tm11-03",
    "tm": 11,
    "topic": "Versi dokumen",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Versi dokumen: DE ISAK 35 tahun 2018 merupakan?",
    "options": [
      "Salinan lengkap amendemen ISAK 335 tahun 2026",
      "Draf eksposur historis, perlu teks final terkini",
      "Peraturan pemerintah untuk semua rumah sakit",
      "Standar audit BPK efektif sejak April 2028"
    ],
    "answer": 1,
    "explanation": "DE merupakan draf dengan contoh yang tidak mencakup seluruh SAK. Penomoran dan amendemen terkini tidak mengubah file 2018 menjadi final. Opsi pemerintah/audit salah jenis dokumen. Rujukan: [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)",
    "sourceRef": "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)"
    ]
  },
  {
    "id": "akk203-uas-tm11-04",
    "tm": 11,
    "topic": "Aset neto",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Aset neto: pembatasan dalam kelas with restrictions berasal dari?",
    "options": [
      "Semua keputusan internal membuat danacadangan",
      "Seluruh kas kecil tanpa memperhatikan donor",
      "Pemberi sumber daya menurut syarat tujuan/waktu",
      "Seluruh bebanadministrasi pada akhirperiode"
    ],
    "answer": 2,
    "explanation": "Kelas contoh mengacu pembatasan donor. Dana cadangan internal, kas kecil dan beban tidak otomatis menjadi kelas tersebut. Kontrak tetap perlu dibaca untuk pengakuan transaksi. Rujukan: [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceRef": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
    ]
  },
  {
    "id": "akk203-uas-tm11-05",
    "tm": 11,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: reklasifikasi 60 antar kelas memberi perubahan total?",
    "options": [
      "Naik 60 karena dianggap sumbanganbaru",
      "Turun 60 karena semua reklasifikasi adalahbeban",
      "Naik 120 karena kedua kelas ditambahkan",
      "Nol; satu kelas naik dan kelas lain turun"
    ],
    "answer": 3,
    "explanation": "Reklasifikasi+60 dan-60 berjumlahnol. Sumbanganbaru, bebanbaru atau penjumlahan kedua kenaikan akan menduplikasi perubahan. aset neto total tetap mengikuti penghasilan dikurangi beban. Rujukan: [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceRef": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
    ]
  },
  {
    "id": "akk203-uas-tm11-06",
    "tm": 11,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: donasi 300, beban 180 dan peralatan 50. kas akhir?",
    "options": [
      "70 juta Rp pada asumsi semua transaksi tunai",
      "120 juta Rp dengan peralatan diabaikan",
      "170 juta Rp dengan biaya peralatan ditambah",
      "250 juta Rp dengan bebanoperasi diabaikan"
    ],
    "answer": 0,
    "explanation": "Kas=300-180-50=70 juta Rp.120 adalahsurplus sebelum pembelian aset;170 menambah pengeluaran;250 mengabaikan beban. Peralatan masih aset 50 pada asumsi yang ditetapkan. Rujukan: [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceRef": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
    ]
  },
  {
    "id": "akk203-uas-tm11-07",
    "tm": 11,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: tanpa pembatasan 200, donor 100, beban 180, pembebasan 60. Kelas akhir?",
    "options": [
      "Tanpa 20, dengan 100, total 120 juta Rp",
      "Tanpa 80, dengan 40, total 120 juta Rp",
      "Tanpa 140, dengan 100, total 240 juta Rp",
      "Tanpa 80, dengan 100, total 180 juta Rp"
    ],
    "answer": 1,
    "explanation": "Tanpa=200+60-180=80;dengan=100-60=40;total 120. Opsi 20/100 mengabaikan pembebasan;240 menduplikasi dan 180 tidak mengurangi kelasdonor. Rujukan: [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceRef": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
    ]
  },
  {
    "id": "akk203-uas-tm11-08",
    "tm": 11,
    "topic": "Audit yayasan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Audit yayasan: bantuan 400 juta, kekayaan di luar wakaf 25 miliar. Keputusan?",
    "options": [
      "Ambang audit belum terpenuhi karena bantuan kecil",
      "Ambang audit harus memenuhi kedua syarat bersama",
      "Ambang audit terpenuhi melalui kekayaan yayasan",
      "Ambang audit digantikan oleh jumlah transaksi kas"
    ],
    "answer": 2,
    "explanation": "Pasal 52 menggunakan atau. Kekayaan 25 miliar melampaui 20 miliar, meskipun bantuan di bawah 500 juta. Kedua syarat bersama dan jumlah transaksi bukan ketentuan ambang tersebut. Rujukan: [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
    "sourceRef": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
    "sourceAnchors": [
      "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)"
    ]
  },
  {
    "id": "akk203-uas-tm11-09",
    "tm": 11,
    "topic": "Pembatasan dan pengakuan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Pembatasan dan pengakuan: dana wajib kembali jika syarat gagal. Langkah?",
    "options": [
      "Selalu akui penghasilan hanya dari labeldonasi",
      "Selalu hapus seluruh kelas aset neto pembatasan",
      "Gunakan DE 2018 sebagai semua standartransaksi",
      "Baca kontrak dan standar pengakuan yang relevan"
    ],
    "answer": 3,
    "explanation": "Syarat pengembalian perlu analisis kontrak dan standar pengakuan. Labeldonasi serta format penyajian tidak menyelesaikan kemungkinan liabilitas. Menghapuskelas atau memperluas DE tidak didukung sumber. Rujukan: [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceRef": "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "sourceAnchors": [
      "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
    ]
  },
  {
    "id": "akk203-uas-tm12-01",
    "tm": 12,
    "topic": "Sumber dana",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Sumber dana: kombinasi menurut Pasal 34?",
    "options": [
      "Iuran, sumbangan sah dan bantuan APBN/APBD",
      "Hanya bantuan APBN tanpa iuran atau donasi",
      "Hanya donasi internasional tanpa bukti donor",
      "Hanya kas pinjaman yang diakui sebagai iuran"
    ],
    "answer": 0,
    "explanation": "Pasal 34 menyebut tiga kelompok sumber. Alternatif menghilangkan sumber atau menganggap transaksi pinjaman sebagai iuran tanpa dasar. Keabsahan dan penggunaan tetap harus ditelusuri. Rujukan: [UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceRef": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceAnchors": [
      "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm12-02",
    "tm": 12,
    "topic": "Pelaporan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Pelaporan: hubungan audit entitas dan LPJ bantuan?",
    "options": [
      "Audit BPK bantuan mengganti semua audit entitas",
      "Audit akuntan publik entitas berbeda dari BPK bantuan",
      "Audit akuntan publik menghapus seluruh LPJ bantuan",
      "Audit kampanye mengganti seluruh laporan tahunan"
    ],
    "answer": 1,
    "explanation": "Ps.39 dan 34 A memberi kewajiban serta ruang berbeda. Opsi lain menganggap satu audit menghapus audit/laporan lain tanpa dasar; kampanye juga mempunyai ruang pemilu tersendiri. Rujukan: [UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceRef": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceAnchors": [
      "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm12-03",
    "tm": 12,
    "topic": "Sumbangan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Sumbangan: donor bukan anggota memberi 600 juta dua kali setahun. Akumulasi?",
    "options": [
      "600 juta Rp karena setiap transfer berdiri sendiri",
      "1,2 miliar Rp, selalu sah jika melalui rekening",
      "1,2 miliar Rp, melebihi batas 1 miliar per orang",
      "1,2 miliar Rp, memakai batas perusahaan 7,5 miliar"
    ],
    "answer": 2,
    "explanation": "Akumulasi 600+600=1.200 juta=1,2 miliar. Batas orang nonanggota 1 miliar setahun. Rekening tidak mengubah batas, dan kategori perusahaan tidak dipakai bagi orang. Rujukan: [UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceRef": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceAnchors": [
      "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm12-04",
    "tm": 12,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: 50.000 suara, kursi kabupaten, tarif dasar 1.500. Bantuan?",
    "options": [
      "Rp 60 juta seperti tarif tingkat provinsi",
      "Rp 50 juta seperti tarif tingkat pusat",
      "Rp 150 juta dari penghitungan ganda kursi",
      "Rp 75 juta pada asumsi satu tahun penuh"
    ],
    "answer": 3,
    "explanation": "50.000×1.500=Rp 75.000.000.60 juta memakai 1.200,50 juta memakai 1.000,150 juta menggandakan basis. Jumlah kursi menjadi syarat kelayakan tingkat, tidak faktor pengali tambahan pada latihan. Rujukan: [PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018](https://peraturan.bpk.go.id/Download/76860/PP%20Nomor%201%20Tahun%202018.pdf#page=2)",
    "sourceRef": "[PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018](https://peraturan.bpk.go.id/Download/76860/PP%20Nomor%201%20Tahun%202018.pdf#page=2)",
    "sourceAnchors": [
      "[PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018](https://peraturan.bpk.go.id/Download/76860/PP%20Nomor%201%20Tahun%202018.pdf#page=2)"
    ]
  },
  {
    "id": "akk203-uas-tm12-05",
    "tm": 12,
    "topic": "Penggunaan bantuan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Penggunaan bantuan: makna Pasal 9 hasil PP 1/2018?",
    "options": [
      "Pendidikan politik diprioritaskan; sekretariat diizinkan",
      "Seluruh bantuan wajib dipakai untuk kampanye pemilu",
      "Persentase 60% ditetapkan langsung pada pasal itu",
      "Seluruh bantuan bebas digunakan tanpa rincian"
    ],
    "answer": 0,
    "explanation": "Pasal 9 mengatur prioritas pendidikan dan operasional sekretariat, tanpa angka 60% pada teks itu. Kampanye atau penggunaan bebas tidak sesuai ketentuan tersebut; persentase memerlukan dasar versi yang tepat. Rujukan: [PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018](https://peraturan.bpk.go.id/Download/76860/PP%20Nomor%201%20Tahun%202018.pdf#page=2)",
    "sourceRef": "[PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018](https://peraturan.bpk.go.id/Download/76860/PP%20Nomor%201%20Tahun%202018.pdf#page=2)",
    "sourceAnchors": [
      "[PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018](https://peraturan.bpk.go.id/Download/76860/PP%20Nomor%201%20Tahun%202018.pdf#page=2)"
    ]
  },
  {
    "id": "akk203-uas-tm12-06",
    "tm": 12,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: entitas kas akhir 50, bantuan 75 dibelanjakan 75. Sisa bantuan?",
    "options": [
      "50 juta Rp karena seluruh kas milik bantuan",
      "Nol pada rincian sumber yang diberikan",
      "75 juta Rp karena pengeluaran tidak dicatat",
      "100 juta Rp karena semua biaya ditambahkan"
    ],
    "answer": 1,
    "explanation": "Sisa bantuan 75-75=0. Kas entitas 50 berasal dana lain pada asumsi. Menyamakan semua kas dengan bantuan, mengabaikan pengeluaran atau menambah biaya akan mencampur ruang laporan. Rujukan: [UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)",
    "sourceRef": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)",
    "sourceAnchors": [
      "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)"
    ]
  },
  {
    "id": "akk203-uas-tm12-07",
    "tm": 12,
    "topic": "LPJ",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "LPJ: keseimbangan penerimaan dan belanja membuktikan apa?",
    "options": [
      "Seluruh kegiatan sudah pasti memenuhi peruntukan",
      "Seluruh donor sudah pasti memenuhi batas tahunan",
      "Ketepatan hitungan, kepatuhan perlu bukti tambahan",
      "Seluruh audit entitas sudah otomatis selesai"
    ],
    "answer": 2,
    "explanation": "Hitungan seimbang memeriksa aritmetika. Bukti kegiatan/peruntukan, akumulasi donor dan audit entitas merupakan pengujian terpisah yang tidak otomatis lulus dari total tersebut. Rujukan: [UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)",
    "sourceRef": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)",
    "sourceAnchors": [
      "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)"
    ]
  },
  {
    "id": "akk203-uas-tm12-08",
    "tm": 12,
    "topic": "LPJ bantuan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "LPJ bantuan: apa tenggat penyampaian kepada BPK menurut Ps.34A?",
    "options": [
      "Paling lambat 5 bulan setelah semua kampanye berakhir",
      "Paling lambat 60 hari setelah nilai donasi diketahui",
      "Paling lambat 2 tahun setelah SPKN baru berlaku",
      "Paling lambat 1 bulan setelah tahun anggaran berakhir"
    ],
    "answer": 3,
    "explanation": "TeksPs.34A mengatur laporan tahunan bantuan kepada BPK paling lambat 1 bulan setelah tahun anggaran.5 bulan adalah konteksyayasan;60 hari konteks tindaklanjut;2 tahun adalah transisi SPKN. Rujukan: [UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceRef": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "sourceAnchors": [
      "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)"
    ]
  },
  {
    "id": "akk203-uas-tm13-01",
    "tm": 13,
    "topic": "Entitas",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Entitas: rumah sakit swasta dan BLUD memakai aturan sama otomatis?",
    "options": [
      "Semua rumah sakit otomatis BLU pusat",
      "Tentukan status entitas dan kerangka terlebih dahulu",
      "Semua rumah sakit memakai satu tarif APBN",
      "Semua rumah sakit dibebaskan dari pelaporan"
    ],
    "answer": 1,
    "explanation": "Status layanan tidak menentukan satu kerangka otomatis. Alternatif menyamakan status, tingkat atau menghapus pertanggungjawaban tanpa dasar. Rujukan: [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
    "sourceRef": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
    "sourceAnchors": [
      "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
    ]
  },
  {
    "id": "akk203-uas-tm13-02",
    "tm": 13,
    "topic": "Basis",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Basis: hak layanan 120, kas 100 pada latihan. Pendapatan LO dan piutang?",
    "options": [
      "LO 100 dan piutang 0 karena belum ada kas",
      "LO 20 dan piutang 120 karena hak tertukar",
      "LO 120 dan piutang 20 jika hak terpenuhi",
      "LO 120 dan piutang 100 karena kas diabaikan"
    ],
    "answer": 2,
    "explanation": "Hak 120 dikurangi pembayaran 100 menyisakan piutang 20. LO 100 memakai kas sebagai seluruh akrual; opsi lain menukar saldo atau mengabaikan pembayaran. Rujukan: [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceRef": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceAnchors": [
      "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
    ]
  },
  {
    "id": "akk203-uas-tm13-03",
    "tm": 13,
    "topic": "Laporan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Laporan: pasangan pemeriksaan neraca yang benar?",
    "options": [
      "Kas selalu sama dengan seluruh ekuitas",
      "SAL selalu sama dengan piutang layanan",
      "LRA selalu sama dengan LO pada tiap periode",
      "Aset sama dengan kewajiban ditambah ekuitas"
    ],
    "answer": 3,
    "explanation": "Neraca menghubungkan aset, kewajiban dan ekuitas. Kas/SAL serta LRA/LO memiliki basis dan komponen berbeda sehingga persamaan alternatif tidak universal. Rujukan: [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceRef": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceAnchors": [
      "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
    ]
  },
  {
    "id": "akk203-uas-tm13-04",
    "tm": 13,
    "topic": "Konsolidasi",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Konsolidasi: jurnal eliminasi pendapatan/beban internal LO diterapkan ke LRA?",
    "options": [
      "Periksa aturan berbeda, LRA digabung tanpa eliminasi tersebut",
      "Salin seluruh eliminasi LO ke LRA tanpa pengecekan",
      "Hapus seluruh pendapatan eksternal BLU dari LRA",
      "Konsolidasi tidak pernah diperlukan bagi BLU"
    ],
    "answer": 0,
    "explanation": "PSAP 13 membedakan perlakuan LRA dan LO. Menyalin jurnal mengabaikan aturan; transaksi eksternal tidak menjadi internal dan BLU tetap dikonsolidasikan. Rujukan: [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceRef": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceAnchors": [
      "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
    ]
  },
  {
    "id": "akk203-uas-tm13-05",
    "tm": 13,
    "topic": "Versi",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Versi: sistem BLU pusat untuk LK 2024 dan sesudahnya?",
    "options": [
      "PMK 220/2016 selalu aktif tanpa perubahan",
      "PMK 128/2024 mengganti PMK 220/2016 dan 42/2017",
      "Permendagri 61/2007 mengatur seluruh BLU pusat",
      "Draf ISAK 35 mengganti seluruh sistem perbendaharaan"
    ],
    "answer": 1,
    "explanation": "PMK 128/2024 menyebut pencabutan dan periode penerapan. Alternatif memakai aturan diganti, tingkat berbeda atau draf nonlaba sebagai sistem pemerintah. Rujukan: [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
    "sourceRef": "[PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
    "sourceAnchors": [
      "[PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
    ]
  },
  {
    "id": "akk203-uas-tm13-06",
    "tm": 13,
    "topic": "Latihan buatan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "Latihan buatan: kas awal 0, penerimaan 100, operasi 70, aset 20. Kas akhir?",
    "options": [
      "30 juta Rp, pembelian aset tidak mengurangi kas",
      "50 juta Rp, seluruh surplus LO dianggap kas",
      "10 juta Rp, operasi 30 dikurangi investasi 20",
      "90 juta Rp, pengeluaran dianggap penerimaan"
    ],
    "answer": 2,
    "explanation": "100-70-20=10 juta Rp.30 mengabaikan investasi,50 memakai surplus akrual,90 mencampur pengeluaran dengan saldo. Tidak ada pembulatan. Rujukan: [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceRef": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "sourceAnchors": [
      "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
    ]
  },
  {
    "id": "akk203-uas-tm13-07",
    "tm": 13,
    "topic": "BLUD",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "advanced",
    "q": "BLUD: ambang kasus 10%, kenaikan 12%, kas cukup. Keputusan?",
    "options": [
      "Otomatis boleh karena saldo bank mencukupi",
      "Otomatis boleh karena semua BLUD berambang 15%",
      "Otomatis dilarang karena BLUD tidak punya fleksibilitas",
      "Periksa persetujuan kepala daerah dan ketentuan RBA/DPA"
    ],
    "answer": 3,
    "explanation": "12% melampaui ambang asumsi 10%. Ketentuan mengharuskan persetujuan terkait; kas cukup tidak menghapusnya.15% universal tidak didukung dan penolakan seluruh fleksibilitas berlebihan. Rujukan: [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
    "sourceRef": "[Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
    "sourceAnchors": [
      "[Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
    ]
  },
  {
    "id": "akk203-uas-tm13-08",
    "tm": 13,
    "topic": "Eliminasi buatan 40",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Eliminasi buatan 40:debit pendapatan dan kredit beban. Pemeriksaan?",
    "options": [
      "Debit 40=kredit 40, tanpa arus kas baru",
      "Debit 40=kredit 0, karena beban boleh diabaikan",
      "Debit 80=kredit 40, karena nilai dihitung ganda",
      "Debit 40=kredit 40, selalu menciptakan kas 40"
    ],
    "answer": 0,
    "explanation": "Kertas kerja eliminasi menghapus pasangan yang cocok. Opsi lain tidak seimbang atau menganggap eliminasi sebagai penerimaan kas. Lingkup dan bukti tetap harus diperiksa. Rujukan: [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
    "sourceRef": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
    "sourceAnchors": [
      "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
    ]
  },
  {
    "id": "akk203-uas-tm14-01",
    "tm": 14,
    "topic": "RPP",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "RPP: status artikel Olken 2007 dalam paket?",
    "options": [
      "Satu-satunya artikel wajib yang disebut RPP",
      "Standar akuntansi yang mengganti seluruh SAP",
      "Sumber tambahan pilihan, judul dosen belum terkonfirmasi",
      "Data seluruh rumah sakit Indonesia tahun 2026"
    ],
    "answer": 2,
    "explanation": "RPP hanya artikel terkait. Pilihan primer perlu label, bukan disebut tugas pasti atau standar. Cakupan artikel adalah jalan desa historis. Rujukan: [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
    "sourceRef": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
    "sourceAnchors": [
      "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)"
    ]
  },
  {
    "id": "akk203-uas-tm14-02",
    "tm": 14,
    "topic": "Desain",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Desain: apa manfaat penugasan acak audit?",
    "options": [
      "Menjamin setiap desa bebas kesalahan pengukuran",
      "Menjamin semua hasil dapat berlaku selamanya",
      "Menghapus kebutuhan galat baku dan sampel",
      "Membantu pembanding setara dalam harapan"
    ],
    "answer": 3,
    "explanation": "Randomisasi membantu identifikasi efek dalam konteks desain. Tidak menghapus kesalahan pengukuran, ketidakpastian atau persoalan generalisasi. Rujukan: [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
    "sourceRef": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
    "sourceAnchors": [
      "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
    ]
  },
  {
    "id": "akk203-uas-tm14-03",
    "tm": 14,
    "topic": "Ukuran",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Ukuran: percent missing utama didefinisikan bagaimana?",
    "options": [
      "Log dilaporkan dikurangi log estimasi aktual",
      "Selisih kas dibagi seluruh kas desa selalu",
      "Jumlah terdakwa dibagi seluruh pegawai desa",
      "Opini audit dibagi tarif bantuan per suara"
    ],
    "answer": 0,
    "explanation": "Definisi log pada PDF 17 berbeda dari rasio biasa, proses hukum atau opini. Proksi dipengaruhi estimasi teknis dan asumsi. Rujukan: [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
    "sourceRef": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
    "sourceAnchors": [
      "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
    ]
  },
  {
    "id": "akk203-uas-tm14-04",
    "tm": 14,
    "topic": "Hasil",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Hasil: 0,277 menjadi 0,192 memberi selisih apa?",
    "options": [
      "8,5% relatif terhadap nilai kontrol",
      "8,5 poin persentase pada skala tabel",
      "27,7 poin kenaikan terhadap kontrol",
      "19,2% relatif tanpa memakai pembanding"
    ],
    "answer": 1,
    "explanation": "Selisih 0,085×100=8,5 poin. Relatif memerlukan pembagian 0,277, sekitar 30,69%. Opsi lain menukar nilai level dengan perubahan. Rujukan: [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceRef": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceAnchors": [
      "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
    ]
  },
  {
    "id": "akk203-uas-tm14-05",
    "tm": 14,
    "topic": "Ketidakpastian",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Ketidakpastian: p 0,058 pada ambang 5%, model tanpa efek tetap?",
    "options": [
      "Selalu melewati 5% karena koefisien negatif",
      "Membuktikan efek pasti nol pada semua desa",
      "Tidak melewati ambang 5% pada model tersebut",
      "Membuktikan seluruh model signifikan 5%"
    ],
    "answer": 2,
    "explanation": "0,058>0,05. Tanda koefisien tidak menentukanp; hasil di luar ambang tidak membuktikan efek pasti nol, dan model lain memiliki p berbeda. Rujukan: [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceRef": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceAnchors": [
      "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
    ]
  },
  {
    "id": "akk203-uas-tm14-06",
    "tm": 14,
    "topic": "Sampel",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Sampel: 608 desa pada desain berarti apa bagiTable 4?",
    "options": [
      "Setiap regresi selalu memakai 608 observasi",
      "Tidak perlu mencatatN karena efek negatif",
      "Semua data artikel berasal 608 rumah sakit",
      "N analisis berbeda: 477 jalan,538 jalan+tambahan"
    ],
    "answer": 3,
    "explanation": "Ketersediaan ukuran menghasilkan sampel analisis berbeda. MencatatN penting bagi lingkup/ketidakpastian, dan entitas sumber adalah desa proyek jalan. Rujukan: [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceRef": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceAnchors": [
      "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
    ]
  },
  {
    "id": "akk203-uas-tm14-07",
    "tm": 14,
    "topic": "Validitas",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Validitas: hasil jalan desa 2003 dipindah ke BLUD 2026?",
    "options": [
      "Uji perbedaan konteks, kapasitas, biaya dan ukuran",
      "Terapkan langsung karena semua entitas publik sama",
      "Anggap seluruh proksi sebagai bukti pidana",
      "Tolak seluruh eksperimen karena sudah historis"
    ],
    "answer": 0,
    "explanation": "Generalisasi memerlukan analisis eksternal. Konteks publik tidak menjamin kesamaan;proksi bukan bukti pidana, dan sejarah tidak menghapus validitas internal. Rujukan: [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceRef": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceAnchors": [
      "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
    ]
  },
  {
    "id": "akk203-uas-tm14-08",
    "tm": 14,
    "topic": "Ulasan",
    "skill": "Analisis dasar, mekanisme dan batas penerapan",
    "difficulty": "medium",
    "q": "Ulasan: Figure 1 CDF/densitas ingin digambar ulang tanpa data mentah?",
    "options": [
      "Buat kurva numerik seolah data mentah sudah tersedia",
      "Jelaskan bentuk asli dan gunakan tabel angka terverifikasi",
      "Ubah seluruh kurva menjadi saldo kas desa",
      "Hilangkan sumbu agar tidak perlu menjelaskan ukuran"
    ],
    "answer": 1,
    "explanation": "Kurva empiris memerlukan data/titik yang tersedia. Paket menampilkan angkaTable 4 dan mencatat Figure 1 sebagai bacaan tambahan; mengarang kurva atau mengubah ukuran menyesatkan. Rujukan: [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceRef": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "sourceAnchors": [
      "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
    ]
  }
];

export const AKS201_QUIZ: QuizQuestion[] = [...AKS201_QUIZ_UTS, ...AKS201_QUIZ_UAS];
