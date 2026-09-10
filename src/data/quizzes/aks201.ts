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
    "tm": 8,
    "topic": "Sistem Akuntansi Keuangan Daerah Dualistis",
    "difficulty": "advanced",
    "q": "Dalam struktur akuntansi keuangan daerah, hubungan antara PPKD (selaku Kantor Pusat / Home Office) dan SKPD (selaku Kantor Cabang / Branch Office) dihubungkan melalui akun resiprokal...",
    "options": [
      "Kas di Kasda dan Kas di Bendahara Pengeluaran",
      "Rekening Koran (RK) PPKD di SKPD dan Rekening Koran (RK) SKPD di PPKD",
      "Piutang Pajak dan Utang Retribusi",
      "Ekuitas Dana Lancar dan Ekuitas Dana Investasi"
    ],
    "answer": 1,
    "explanation": "Sistem akuntansi pemda menggunakan konsep Home Office-Branch Office (HOBO), di mana transaksi antar-entitas dicatat resiprokal menggunakan akun RK-PPKD (ekuitas SKPD) dan RK-SKPD (aset PPKD)."
  },
  {
    "tm": 8,
    "topic": "Jurnal Belanja Modal SKPD",
    "difficulty": "advanced",
    "q": "Ketika SKPD membeli kendaraan dinas seharga Rp 350 juta melalui mekanisme SP2D-LS yang dibayarkan langsung oleh Kasda kepada rekanan dealer, jurnal yang dicatat SKPD adalah...",
    "options": [
      "Jurnal Finansial: (D) Beban Kendaraan / (K) Kas; Jurnal Anggaran: Tidak ada jurnal",
      "Jurnal Finansial: (D) Kendaraan Bermotor Rp 350 Juta / (K) RK-PPKD Rp 350 Juta; Jurnal Anggaran: (D) Belanja Modal Pengadaan Kendaraan Rp 350 Juta / (K) Estimasi Perubahan SAL Rp 350 Juta",
      "Jurnal Finansial: (D) Kasda / (K) Belanja Modal; Jurnal Anggaran: Tidak ada jurnal",
      "Hanya mencatat di Jurnal Anggaran tanpa mempengaruhi Neraca"
    ],
    "answer": 1,
    "explanation": "Pengadaan aset modal via SP2D-LS dicatat ganda: (1) Jurnal Finansial menambah Aset Tetap dan mengkredit RK-PPKD (karena dibayar Kasda), dan (2) Jurnal Anggaran mendebet Belanja Modal dan mengkredit Estimasi Perubahan SAL."
  },
  {
    "tm": 8,
    "topic": "Jurnal Penyetoran Pendapatan Pajak Daerah",
    "difficulty": "medium",
    "q": "Bendahara Penerimaan Bapenda menyetor uang kas hasil penerimaan pajak hotel sebesar Rp 80 juta ke Kas Daerah (Kasda). Jurnal finansial yang dicatat oleh Bapenda adalah...",
    "options": [
      "(D) Kas di Kasda Rp 80 Juta / (K) Kas di Bendahara Penerimaan Rp 80 Juta",
      "(D) RK-PPKD Rp 80 Juta / (K) Kas di Bendahara Penerimaan Rp 80 Juta",
      "(D) Beban Penyetoran Pajak Rp 80 Juta / (K) Pendapatan Pajak Rp 80 Juta",
      "(D) Pendapatan Pajak-LRA Rp 80 Juta / (K) Kas di Kasda Rp 80 Juta"
    ],
    "answer": 1,
    "explanation": "Saat menyetor kas penerimaan ke Kasda, SKPD mengkredit akun 'Kas di Bendahara Penerimaan' dan mendebet akun resiprokal 'RK-PPKD' (mengalihkan penguasaan dana ke BUD)."
  },
  {
    "tm": 8,
    "topic": "Mekanisme Uang Persediaan (UP / GU / TU)",
    "difficulty": "medium",
    "q": "Penerbitan SP2D Uang Persediaan (UP) sebesar Rp 50 juta dari Kasda ke Bendahara Pengeluaran SKPD dicatat oleh SKPD pada jurnal anggaran sebagai...",
    "options": [
      "(D) Belanja Barang dan Jasa Rp 50 Juta / (K) Estimasi Perubahan SAL Rp 50 Juta",
      "Tidak dicatat dalam Jurnal Anggaran (LRA) karena belum terjadi belanja definitif riil",
      "(D) Kas di Bendahara Pengeluaran Rp 50 Juta / (K) Pendapatan LRA Rp 50 Juta",
      "(D) Pengeluaran Pembiayaan Rp 50 Juta / (K) Kasda Rp 50 Juta"
    ],
    "answer": 1,
    "explanation": "Pemberian Uang Persediaan (UP) hanyalah pergeseran uang kas (kas bon kerja) dari Kasda ke rekening bendahara SKPD. Transaksi ini hanya dijurnal secara finansial (Kas di Bendahara Pengeluaran / RK-PPKD) dan TIDAK dijurnal di anggaran sampai belanja riil SPJ disahkan (GU)."
  },
  {
    "tm": 8,
    "topic": "Rekonsiliasi Sisa Lebih Pembiayaan (SiLPA)",
    "difficulty": "advanced",
    "q": "Dalam Laporan Realisasi Anggaran (LRA), nilai SiLPA akhir tahun merupakan hasil dari penjumlahan matematis...",
    "options": [
      "Total Pendapatan LRA dikurangi Total Belanja LRA saja",
      "Surplus/Defisit LRA (Pendapatan LRA - Belanja LRA) ditambah Pembiayaan Neto (Penerimaan Pembiayaan - Pengeluaran Pembiayaan)",
      "Total Aset Lancar dikurangi Total Liabilitas Lancar pada Neraca",
      "Total Pendapatan LO dikurangi Beban Operasional LO"
    ],
    "answer": 1,
    "explanation": "SiLPA = Surplus/Defisit LRA + Pembiayaan Neto. Nilai SiLPA inilah yang menjadi saldo akhir pada Laporan Perubahan SAL (LP-SAL) dan membentuk saldo kas bebas pada tahun berikutnya."
  },
  {
    "tm": 9,
    "topic": "Sistem Akuntansi Pemerintah Pusat (SAPP)",
    "difficulty": "medium",
    "q": "Pada struktur Sistem Akuntansi Pemerintah Pusat (SAPP), sub-sistem yang bertanggung jawab mencatat transaksi penerimaan pembiayaan utang luar negeri dan belanja subsidi pemerintah pusat adalah...",
    "options": [
      "Sistem Akuntansi Instansi (SAI)",
      "Sistem Akuntansi Bendahara Umum Negara (SA-BUN)",
      "Sistem Informasi Manajemen Barang Milik Negara (SIMAK-BMN)",
      "Sistem Akuntansi Kas Satker"
    ],
    "answer": 1,
    "explanation": "SA-BUN diproses oleh Kementerian Keuangan selaku BUN untuk mencatat transaksi fiskal strategis nasional seperti pengelolaan utang, investasi pemerintah, subsidi, dan transfer ke daerah."
  },
  {
    "tm": 9,
    "topic": "Jurnal Eliminasi Konsolidasi HOBO",
    "difficulty": "advanced",
    "q": "Pada saat menyusun Laporan Keuangan Konsolidasian Pemerintah Daerah di akhir tahun anggaran, Pejabat Pengelola Keuangan Daerah (PPKD) harus membuat jurnal eliminasi terhadap akun...",
    "options": [
      "Seluruh saldo Belanja Pegawai dan Belanja Barang",
      "Akun resiprokal Rekening Koran (RK) PPKD dan Rekening Koran (RK) SKPD",
      "Saldo persediaan obat di Puskesmas",
      "Piutang pajak daerah yang telah kadaluwarsa"
    ],
    "answer": 1,
    "explanation": "Akun RK-PPKD di seluruh SKPD dan akun RK-SKPD di PPKD adalah akun perantara internal (resiprokal) yang wajib dieliminasi (saling menghapus) agar tidak terjadi pencatatan ganda dalam neraca konsolidasi pemda."
  },
  {
    "tm": 9,
    "topic": "Bagan Akun Standar (BAS) Pemda",
    "difficulty": "medium",
    "q": "Berdasarkan Permendagri No. 77 Tahun 2020 dan kodefikasi BAS daerah, digit kode akun pertama '1', '2', '3', '4', '5', '6', '7', dan '8' secara berturut-turut merepresentasikan...",
    "options": [
      "Aset, Kewajiban, Ekuitas, Pendapatan-LRA, Belanja, Pembiayaan, Pendapatan-LO, dan Beban",
      "Belanja, Pendapatan, Kas, Utang, Modal, Cadangan, Aset Tetap, dan Hibah",
      "Pusat, Provinsi, Kabupaten, Kota, Kecamatan, Kelurahan, RT, dan RW",
      "Kas, Piutang, Persediaan, Gedung, Peralatan, Utang, Modal, dan Beban"
    ],
    "answer": 0,
    "explanation": "Kodefikasi BAS pemerintah daerah: 1=Aset, 2=Kewajiban, 3=Ekuitas, 4=Pendapatan-LRA, 5=Belanja, 6=Pembiayaan, 7=Pendapatan-LO, dan 8=Beban."
  },
  {
    "tm": 9,
    "topic": "Peran PPKD selaku Bendahara Umum Daerah (BUD)",
    "difficulty": "basic",
    "q": "Dalam pengelolaan keuangan daerah, pejabat yang memiliki kewenangan menerbitkan Surat Perintah Pencairan Dana (SP2D) atas beban rekening Kasda adalah...",
    "options": [
      "Kepala Dinas Pendidikan",
      "Kuasa Bendahara Umum Daerah (Kuasa BUD) di Badan Pengelola Keuangan Daerah (BPKAD)",
      "Sekretaris DPRD",
      "Inspektur Daerah"
    ],
    "answer": 1,
    "explanation": "Kuasa BUD berwenang meneliti kelengkapan dokumen SPM yang diajukan Pengguna Anggaran (SKPD) dan menerbitkan SP2D sebagai perintah pembayaran kepada bank kas daerah."
  },
  {
    "tm": 9,
    "topic": "Ganti Uang (GU) Nihil di Akhir Tahun",
    "difficulty": "advanced",
    "q": "Pada akhir tahun anggaran, seluruh sisa kas Uang Persediaan (UP) yang masih tersisa di tangan Bendahara Pengeluaran SKPD dan belum terpakai WAJIB...",
    "options": [
      "Dibagikan sebagai bonus kinerja bendahara pengeluaran",
      "Disetorkan kembali secara utuh ke Kas Daerah (Kasda) paling lambat 31 Desember dengan bukti Surat Tanda Setoran (STS)",
      "Disimpan di brankas kantor untuk belanja tahun anggaran berikutnya tanpa dilaporkan",
      "Dikonversi menjadi persediaan alat tulis kantor"
    ],
    "answer": 1,
    "explanation": "Sesuai asas tahunan dan regulasi penatausahaan keuangan, sisa kas UP pada penutupan tahun anggaran wajib disetorkan kembali ke Rekening Kas Umum Daerah (Kasda) sehingga saldo Kas di Bendahara Pengeluaran per 31 Desember bernilai nol."
  },
  {
    "tm": 10,
    "topic": "Pengukuran Kinerja Value for Money",
    "difficulty": "medium",
    "q": "Jika sebuah dinas berhasil membangun puskesmas dengan biaya 10% lebih rendah dari standar harga tanpa mengurangi spesifikasi teknis, namun puskesmas tersebut tidak dimanfaatkan oleh warga karena lokasinya di tengah hutan terpencil, maka program tersebut...",
    "options": [
      "Ekonomis dan Efektif, tetapi Tidak Efisien",
      "Ekonomis dan Efisien, tetapi Tidak Efektif",
      "Efektif, tetapi Tidak Ekonomis",
      "Mencapai seluruh kriteria Value for Money"
    ],
    "answer": 1,
    "explanation": "Dinas berhasil mencapai aspek ekonomis (input murah) dan efisiensi (output gedung terbangun sesuai biaya), tetapi gagal dalam efektivitas (outcome/tujuan pelayanan kesehatan warga tidak tercapai)."
  },
  {
    "tm": 10,
    "topic": "Rasio Efektivitas PAD",
    "difficulty": "medium",
    "q": "Realisasi Pendapatan Asli Daerah (PAD) Kabupaten Makmur tahun 2025 adalah Rp 450 miliar, sedangkan target yang ditetapkan dalam APBD adalah Rp 500 miliar. Berapakah rasio efektivitas PAD daerah tersebut dan apa kriterianya?",
    "options": [
      "90,0% (Kriteria: Cukup Efektif)",
      "111,1% (Kriteria: Sangat Efektif)",
      "80,0% (Kriteria: Kurang Efektif)",
      "90,0% (Kriteria: Tidak Efektif)"
    ],
    "answer": 0,
    "explanation": "Rasio Efektivitas = (Realisasi / Target) × 100% = (Rp 450 M / Rp 500 M) × 100% = 90,0%. Menurut standar Kemendagri, rentang 90% - 99,9% tergolong Cukup Efektif (di atas 100% Sangat Efektif)."
  },
  {
    "tm": 10,
    "topic": "Sistem Akuntabilitas Kinerja (SAKIP)",
    "difficulty": "basic",
    "q": "Laporan resmi yang wajib disusun oleh setiap pimpinan instansi pemerintah di akhir tahun untuk mempertanggungjawabkan keberhasilan dan kegagalan pencapaian target strategis organisasi disebut...",
    "options": [
      "Laporan Realisasi Anggaran (LRA)",
      "Laporan Kinerja Instansi Pemerintah (LAKIP)",
      "Laporan Harta Kekayaan Pejabat Negara (LHKPN)",
      "Laporan Hasil Pemeriksaan (LHP)"
    ],
    "answer": 1,
    "explanation": "LAKIP merupakan produk akhir siklus SAKIP yang memaparkan capaian target kinerja strategis (IKU) organisasi publik dibandingkan dengan rencana kerja dan perjanjian kinerjanya."
  },
  {
    "tm": 10,
    "topic": "Indikator Input, Output, dan Outcome",
    "difficulty": "medium",
    "q": "Dalam program imunisasi balita nasional: (1) Jumlah vaksin dan jarum suntik yang dibeli, (2) Jumlah balita yang berhasil disuntik vaksin, dan (3) Penurunan angka kejadian penyakit campak pada anak sebesar 80%, secara berurutan mencerminkan indikator...",
    "options": [
      "Input, Output, dan Outcome",
      "Output, Input, dan Impact",
      "Outcome, Output, dan Input",
      "Input, Benefit, dan Efisiensi"
    ],
    "answer": 0,
    "explanation": "(1) Vaksin/jarum adalah Input (sumber daya), (2) Balita yang disuntik adalah Output (keluaran langsung kegiatan), dan (3) Penurunan kasus penyakit adalah Outcome (hasil manfaat nyata yang dirasakan masyarakat)."
  },
  {
    "tm": 10,
    "topic": "Standar Pelayanan Minimal (SPM)",
    "difficulty": "advanced",
    "q": "Ketentuan mengenai jenis dan mutu pelayanan dasar yang merupakan urusan pemerintahan wajib dan berhak diperoleh setiap warga negara secara minimal diatur dalam regulasi tentang...",
    "options": [
      "Standar Biaya Masukan (SBM)",
      "Standar Pelayanan Minimal (SPM)",
      "Standar Akuntansi Pemerintahan (SAP)",
      "Standar Pemeriksaan Keuangan Negara (SPKN)"
    ],
    "answer": 1,
    "explanation": "SPM (PP No. 2/2018) mengatur tolok ukur kinerja pelayanan dasar wajib (pendidikan, kesehatan, pekerjaan umum, perumahan rakyat, trantibumlinmas, dan sosial) yang harus diprioritaskan alokasi anggarannya oleh pemda."
  },
  {
    "tm": 11,
    "topic": "Audit Sektor Publik: Opini BPK",
    "difficulty": "medium",
    "q": "Laporan keuangan pemerintah daerah yang disajikan wajar dalam semua hal yang material, menyajikan informasi sesuai SAP secara konsisten, memiliki SPI yang memadai, dan tidak ada pelanggaran hukum material akan memperoleh opini BPK berupa...",
    "options": [
      "Wajar Dengan Pengecualian (Qualified Opinion)",
      "Wajar Tanpa Pengecualian (Unqualified Opinion / WTP)",
      "Tidak Wajar (Adverse Opinion)",
      "Menolak Memberikan Opini (Disclaimer of Opinion)"
    ],
    "answer": 1,
    "explanation": "Opini Wajar Tanpa Pengecualian (WTP) adalah opini tertinggi BPK yang menyatakan bahwa laporan keuangan disajikan secara wajar dalam semua hal yang material sesuai SAP."
  },
  {
    "tm": 11,
    "topic": "Jenis-Jenis Pemeriksaan BPK",
    "difficulty": "medium",
    "q": "Berdasarkan UU No. 15 Tahun 2004, tiga jenis pemeriksaan yang memiliki kewenangan dilakukan oleh BPK RI adalah...",
    "options": [
      "Audit Pajak, Audit Bea Cukai, dan Audit Perbankan",
      "Pemeriksaan Keuangan, Pemeriksaan Kinerja, dan Pemeriksaan Dengan Tujuan Tertentu (PDTT)",
      "Audit Internal, Audit Manajemen, dan Audit Ketaatan Karyawan",
      "Pemeriksaan Kasda, Pemeriksaan Inventaris, dan Pemeriksaan Kepegawaian"
    ],
    "answer": 1,
    "explanation": "Pasal 4 UU 15/2004 membagi audit BPK menjadi: (1) Pemeriksaan Keuangan (opini atas LK), (2) Pemeriksaan Kinerja (ekonomi, efisiensi, efektivitas), dan (3) Pemeriksaan Dengan Tujuan Tertentu / PDTT (investigatif)."
  },
  {
    "tm": 11,
    "topic": "Standar Pemeriksaan Keuangan Negara (SPKN)",
    "difficulty": "advanced",
    "q": "Standar mutu dan etika profesional yang wajib dipatuhi oleh seluruh pemeriksa BPK RI dan akuntan publik yang ditugaskan atas nama BPK dalam memeriksa keuangan negara adalah...",
    "options": [
      "Standar Profesional Akuntan Publik (SPAP) IAPI murni",
      "Standar Pemeriksaan Keuangan Negara (SPKN) yang ditetapkan dengan Peraturan BPK No. 1 Tahun 2017",
      "Pedoman Teknis Permendagri",
      "Pedoman Audit Internal Sektor Publik (PAISP)"
    ],
    "answer": 1,
    "explanation": "SPKN ditetapkan oleh BPK RI melalui Peraturan BPK No. 1/2017 sebagai standar pemeriksaan wajib atas pengelolaan dan pertanggungjawaban keuangan negara di Indonesia."
  },
  {
    "tm": 11,
    "topic": "Tindak Lanjut Rekomendasi LHP BPK",
    "difficulty": "basic",
    "q": "Berdasarkan UU No. 15 Tahun 2004 Pasal 20, pejabat pengelola keuangan entitas yang diperiksa WAJIB memberikan jawaban atau penjelasan mengenai tindak lanjut atas rekomendasi dalam Laporan Hasil Pemeriksaan (LHP) BPK selambat-lambatnya...",
    "options": [
      "14 hari kalender",
      "30 hari kalender",
      "60 hari kalender",
      "90 hari kalender"
    ],
    "answer": 2,
    "explanation": "UU 15/2004 mewajibkan pejabat menindaklanjuti rekomendasi temuan BPK dalam waktu maksimal 60 (enam puluh) hari setelah LHP diterima secara resmi."
  },
  {
    "tm": 11,
    "topic": "Opini Disclaimer (TMP)",
    "difficulty": "advanced",
    "q": "BPK RI akan menerbitkan opini Tidak Memberikan Pendapat (Disclaimer / TMP) apabila...",
    "options": [
      "Terdapat satu kesalahan pembukuan kecil bernilai Rp 10 juta",
      "Pemeriksa mengalami pembatasan lingkup pemeriksaan yang sangat material dan pervasif, atau sistem pencatatan begitu rusak sehingga pemeriksa tidak memperoleh bukti audit yang cukup",
      "Pemerintah daerah tidak membagikan dividen kepada warganya",
      "DPRD menolak menghadiri sidang paripurna penyerahan LHP"
    ],
    "answer": 1,
    "explanation": "Opini TMP (Disclaimer) diberikan jika terjadi pembatasan lingkup pemeriksaan secara pervasif (misal data utama tidak diserahkan, bencana yang menghilangkan buku besar), sehingga auditor tidak dapat menyatakan pendapat audit."
  },
  {
    "tm": 12,
    "topic": "Bantuan Keuangan Partai Politik",
    "difficulty": "medium",
    "q": "Berdasarkan UU No. 2 Tahun 2011 dan Permendagri No. 78 Tahun 2020, bantuan keuangan dari APBN/APBD yang diterima oleh Partai Politik diprioritaskan paling sedikit 60% untuk kegiatan...",
    "options": [
      "Kampanye pemilihan umum legislatif dan presiden",
      "Pendidikan politik bagi anggota partai dan masyarakat luas",
      "Pengadaan gedung sekretariat kantor partai permanen",
      "Gaji tetap pengurus dewan pimpinan pusat"
    ],
    "answer": 1,
    "explanation": "Regulasi parpol mewajibkan alokasi minimal 60% dari dana bantuan APBN/APBD untuk pendidikan politik masyarakat dan kader, sedangkan maksimal 40% sisanya untuk operasional kesekretariatan."
  },
  {
    "tm": 12,
    "topic": "Audit Dana Bantuan Parpol oleh BPK",
    "difficulty": "medium",
    "q": "Pertanggungjawaban penerimaan dan penggunaan bantuan keuangan partai politik yang bersumber dari kas negara/daerah wajib diaudit secara berkala oleh...",
    "options": [
      "Komisi Pengawas Persaingan Usaha (KPPU)",
      "Badan Pemeriksa Keuangan (BPK RI)",
      "Komisi Pemberantasan Korupsi (KPK) secara rutin",
      "Badan Usaha Milik Negara"
    ],
    "answer": 1,
    "explanation": "UU Partai Politik menegaskan bahwa laporan pertanggungjawaban penggunaan dana bantuan APBN/APBD parpol wajib diaudit oleh BPK RI setiap tahun anggaran."
  },
  {
    "tm": 12,
    "topic": "Laporan Dana Kampanye (LPPDK)",
    "difficulty": "advanced",
    "q": "Laporan Pertanggungjawaban Penerimaan dan Pengeluaran Dana Kampanye (LPPDK) yang disusun oleh tim kampanye peserta pemilu diaudit oleh...",
    "options": [
      "Kantor Akuntan Publik (KAP) independen yang ditunjuk resmi oleh KPU",
      "Inspektorat Daerah pemda setempat",
      "Badan Pengawas BUMD",
      "Badan Kepegawaian Negara"
    ],
    "answer": 0,
    "explanation": "KPU menunjuk Kantor Akuntan Publik (KAP) independen yang terdaftar untuk melakukan audit kepatuhan atas LPPDK seluruh peserta pemilu."
  },
  {
    "tm": 12,
    "topic": "Akuntansi Hibah Terikat LSM (Donor Grants)",
    "difficulty": "medium",
    "q": "Lembaga Swadaya Masyarakat (LSM) menerima dana hibah donor luar negeri USD 100.000 yang secara spesifik diwajibkan untuk program konservasi mangrove selama 2 tahun. Dana kas tersebut dicatat oleh LSM sebagai...",
    "options": [
      "Pendapatan jasa komersial tanpa pembatasan",
      "Penerimaan sumbangan aset neto dengan pembatasan temporer (restricted fund)",
      "Utang wesel bayar jangka panjang",
      "Ekuitas pemilik yang dapat dibagikan"
    ],
    "answer": 1,
    "explanation": "Dana hibah donor yang terikat tujuan spesifik dibukukan sebagai Penerimaan Aset Neto Dengan Pembatasan, dan hanya direklasifikasi menjadi tanpa pembatasan seiring dengan realisasi belanja proyek konservasi tersebut."
  },
  {
    "tm": 12,
    "topic": "Larangan Sumber Sumbangan Parpol",
    "difficulty": "basic",
    "q": "Partai politik di Indonesia dilarang keras menerima sumbangan dana keuangan dari pihak...",
    "options": [
      "Anggota resmi partai yang memiliki KTA",
      "Pemerintah asing, lembaga swasta asing, BUMN, BUMD, dan penyumbang anonim tanpa identitas jelas",
      "Warga negara Indonesia perorangan yang sah",
      "Perusahaan swasta nasional berbadan hukum Indonesia"
    ],
    "answer": 1,
    "explanation": "UU Parpol melarang sumbangan dari pihak asing, BUMN/BUMD, dan penyumbang anonim guna mencegah pengaruh kepentingan luar dan penyalahgunaan aset milik negara dalam politik."
  },
  {
    "tm": 13,
    "topic": "Fleksibilitas BLU dan BLUD",
    "difficulty": "medium",
    "q": "Fleksibilitas utama pengelolaan keuangan yang diberikan pemerintah kepada instansi berstatus Badan Layanan Umum (BLU) dan BLUD adalah...",
    "options": [
      "Bebas dari kewajiban menyusun laporan keuangan dan audit",
      "Dapat menggunakan langsung pendapatan jasa layanan operasionalnya tanpa harus menyetor terlebih dahulu ke Kas Negara / Kas Daerah",
      "Diperbolehkan membagikan dividen kepada direksi dan pegawai",
      "Bebas meminjam dana luar negeri tanpa izin Kementerian Keuangan"
    ],
    "answer": 1,
    "explanation": "Pola Pengelolaan Keuangan BLU/BLUD (PP 23/2005) memberikan fleksibilitas pengelolaan pendapatan langsung untuk belanja operasional, meningkatkan responsivitas layanan publik (misal RSUD dan PTN-BLU)."
  },
  {
    "tm": 13,
    "topic": "Rencana Bisnis dan Anggaran (RBA)",
    "difficulty": "medium",
    "q": "Dokumen perencanaan bisnis dan penganggaran tahunan yang disusun oleh satuan kerja BLU/BLUD dengan memadukan pendekatan anggaran kinerja dan praktik bisnis yang sehat disebut...",
    "options": [
      "Rencana Kerja Anggaran Kementerian Lembaga (RKA-K/L)",
      "Rencana Bisnis dan Anggaran (RBA)",
      "Dokumen Pelaksanaan Anggaran (DPA)",
      "Rencana Tata Ruang Wilayah (RTRW)"
    ],
    "answer": 1,
    "explanation": "RBA adalah dokumen rencana kerja dan penganggaran BLU yang berbasis unit cost dan aktivitas layanan bisnis, yang nantinya diintegrasikan ke dalam dokumen anggaran induk kementerian/daerah."
  },
  {
    "tm": 13,
    "topic": "Standar Akuntansi BLU (PSAP 13)",
    "difficulty": "advanced",
    "q": "Standar Akuntansi Pemerintahan yang mengatur secara khusus penyajian laporan keuangan Badan Layanan Umum (BLU) dan konsolidasinya pada entitas akuntansi kementerian/lembaga/pemda adalah...",
    "options": [
      "PSAP 01 tentang Penyajian Laporan Keuangan",
      "PSAP 13 tentang Penyajian Laporan Keuangan Badan Layanan Umum",
      "ISAK 35 tentang Organisasi Nonlaba",
      "PSAK 71 tentang Instrumen Keuangan"
    ],
    "answer": 1,
    "explanation": "PSAP 13 mengatur pedoman khusus penyusunan laporan keuangan BLU yang mengombinasikan akuntansi akrual berorientasi layanan dengan kebutuhan konsolidasi ke Laporan Keuangan Pemerintah Pusat/Daerah."
  },
  {
    "tm": 13,
    "topic": "Ambang Batas Fleksibilitas Belanja RBA",
    "difficulty": "advanced",
    "q": "Jika pendapatan operasional BLU melampaui target yang ditetapkan dalam RBA, BLU dapat melampaui pagu belanja operasionalnya sepanjang masih dalam...",
    "options": [
      "Persetujuan rapat umum pemegang saham",
      "Ambang Batas Fleksibilitas (Flexibility Threshold) persentase belanja yang telah disetujui Menteri Keuangan/Kepala Daerah",
      "Batas defisit APBN 3%",
      "Jumlah modal awal pendirian rumah sakit"
    ],
    "answer": 1,
    "explanation": "Ambang batas fleksibilitas adalah persentase toleransi kelebihan belanja di atas pagu DPA (misal fleksibilitas 10%) yang dapat dibelanjakan langsung jika pendapatan BLU meningkat melampaui target."
  },
  {
    "tm": 13,
    "topic": "Pengelolaan Kas dan Remunerasi BLU",
    "difficulty": "basic",
    "q": "Imbalan kerja berupa gaji, tunjangan, dan insentif berbasis kinerja yang dapat diberikan kepada pejabat pengelola dan pegawai BLU/BLUD di luar ketentuan PNS murni disebut sistem...",
    "options": [
      "Gratifikasi Resmi",
      "Remunerasi BLU",
      "Tunjangan Hari Tua Mandiri",
      "Bagi Hasil Dividen Korporasi"
    ],
    "answer": 1,
    "explanation": "Sistem remunerasi BLU/BLUD dirancang berbasis penilaian merit dan kinerja layanan (insentif) yang ditetapkan dengan Keputusan Menteri Keuangan atau Peraturan Kepala Daerah."
  },
  {
    "tm": 14,
    "topic": "Digital Governance & SIPD",
    "difficulty": "medium",
    "q": "Sistem informasi terpadu yang diwajibkan oleh Kementerian Dalam Negeri (Permendagri No. 70/2019) untuk mengintegrasikan data perencanaan pembangunan, penganggaran, penatausahaan kas, dan pelaporan keuangan seluruh pemda di Indonesia adalah...",
    "options": [
      "Sistem Informasi Manajemen Daerah (SIMDA) Desktop lama",
      "Sistem Informasi Pemerintahan Daerah (SIPD)",
      "Sistem Informasi Perbendaharaan dan Anggaran Negara (SPAN)",
      "Sistem Akuntansi Instansi Berbasis Akrual (SAIBA)"
    ],
    "answer": 1,
    "explanation": "SIPD adalah aplikasi berbasis cloud nasional yang menyatukan seluruh proses perencanaan hingga pertanggungjawaban APBD guna standardisasi data dan interoperabilitas fiskal nasional."
  },
  {
    "tm": 14,
    "topic": "Green Budgeting & Climate Budget Tagging",
    "difficulty": "medium",
    "q": "Metodologi penandaan anggaran (tagging) dalam dokumen APBN/APBD yang melacak dan mengukur alokasi pengeluaran pemerintah yang dikhususkan untuk program aksi mitigasi dan adaptasi perubahan iklim disebut...",
    "options": [
      "Gender Responsive Budgeting",
      "Climate Budget Tagging (CBT)",
      "Zero Waste Procurement",
      "Sustainable Cash Flow Analysis"
    ],
    "answer": 1,
    "explanation": "Climate Budget Tagging (CBT) adalah instrumen inovatif penganggaran hijau (green budgeting) untuk memantau komitmen fiskal pemerintah dalam penurunan emisi gas rumah kaca."
  },
  {
    "tm": 14,
    "topic": "E-Procurement & Anti-Korupsi Pengadaan",
    "difficulty": "basic",
    "q": "Digitalisasi pengadaan barang dan jasa pemerintah yang dilakukan melalui portal LPSE dan Katalog Elektronik (E-Katalog) LKPP bertujuan utama untuk...",
    "options": [
      "Meniadakan keterlibatan pelaku UMKM dalam proyek pemerintah",
      "Meningkatkan transparansi pasar, mencegah persekongkolan tender fisik, dan mewujudkan Value for Money pengadaan",
      "Memperlambat proses belanja modal kementerian",
      "Mengurangi pajak pertambahan nilai yang disetor ke kas negara"
    ],
    "answer": 1,
    "explanation": "E-procurement dan e-Katalog meniadakan pertemuan fisik tatap muka, memangkas potensi suap/kickback, membuka akses transparan bagi UMKM, dan memberikan harga pasar terbaik bagi negara."
  },
  {
    "tm": 14,
    "topic": "Sistem Pengendalian Intern Pemerintah (SPIP)",
    "difficulty": "advanced",
    "q": "Kerangka pengendalian intern pemerintah Indonesia yang diadopsi dari COSO Internal Control Framework dan diatur dalam PP No. 60 Tahun 2008 adalah...",
    "options": [
      "Sistem Pengawasan Fungsional Terpadu (SPFT)",
      "Sistem Pengendalian Intern Pemerintah (SPIP)",
      "Standar Operasional Prosedur Birokrasi (SOPB)",
      "Total Quality Public Management (TQPM)"
    ],
    "answer": 1,
    "explanation": "SPIP (PP 60/2008) mengadopsi 5 unsur COSO: Lingkungan Pengendalian, Penilaian Risiko, Kegiatan Pengendalian, Informasi dan Komunikasi, serta Pemantauan Pengendalian Intern."
  },
  {
    "tm": 14,
    "topic": "Akuntansi Keuangan Desa (SISKEUDES)",
    "difficulty": "medium",
    "q": "Aplikasi resmi yang dikembangkan bersama oleh BPKP dan Kementerian Dalam Negeri untuk membantu pemerintah desa mengelola dan mempertanggungjawabkan Anggaran Pendapatan dan Belanja Desa (APBDes) adalah...",
    "options": [
      "SIPD RI",
      "Aplikasi SISKEUDES (Sistem Keuangan Desa)",
      "SPAN Kemenkeu",
      "SIMDA BPKAD"
    ],
    "answer": 1,
    "explanation": "SISKEUDES adalah instrumen komputerisasi akuntansi resmi yang dirancang user-friendly bagi aparatur desa untuk menatausahakan Dana Desa sesuai Permendagri No. 20 Tahun 2018."
  }
];

export const AKS201_QUIZ: QuizQuestion[] = [...AKS201_QUIZ_UTS, ...AKS201_QUIZ_UAS];
