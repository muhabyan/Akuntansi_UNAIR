// ============================================================================
// src/data/quizzes/mnu101UtsSimulator.ts
// Simulasi UTS Pengantar Bisnis — 40 Soal Pilihan Ganda (TM 1 - TM 7)
// Berdasarkan Bacaan Wajib Pride / Nickels & RPS Pengantar Bisnis
// ============================================================================

import type { QuizQuestion } from '../../types';

export const MNU101_UTS_SIMULATOR: QuizQuestion[] = [
  {
    "q": "Tahap siklus bisnis di mana GDP mengalami penurunan selama dua kuartal berturut-turut atau lebih, disertai dengan peningkatan persentase pengangguran disebut...",
    "options": [
      "Expansion (Ekspansi)",
      "Peak (Puncak)",
      "Recession (Resesi)",
      "Recovery (Pemulihan)"
    ],
    "answer": 2,
    "explanation": "Recession (resesi) didefinisikan sebagai penurunan GDP selama minimal dua kuartal berturut-turut. Jika depresi berkepanjangan dan sangat parah, disebut depression."
  },
  {
    "q": "Rumus perhitungan Produk Domestik Bruto (GDP) dengan pendekatan pengeluaran (expenditure approach) yang benar adalah...",
    "options": [
      "GDP = C + I + G",
      "GDP = C + I + G + (X - M)",
      "GDP = C + S + T",
      "GDP = W + R + I + P"
    ],
    "answer": 1,
    "explanation": "GDP = Konsumsi (C) + Investasi (I) + Pengeluaran Pemerintah (G) + Ekspor Neto (Ekspor X - Impor M)."
  },
  {
    "q": "Struktur pasar di mana hanya terdapat SATU penjual yang menguasai seluruh penawaran produk tanpa adanya barang substitusi yang dekat (seperti PLN untuk listrik) disebut...",
    "options": [
      "Oligopoli",
      "Monopoli murni",
      "Persaingan monopolistik",
      "Persaingan sempurna"
    ],
    "answer": 1,
    "explanation": "Monopoli murni terdiri atas 1 penjual yang menjadi penentu harga (price maker) karena tidak ada pesaing atau substitusi langsung."
  },
  {
    "q": "Sistem ekonomi yang mengombinasikan mekanisme pasar bebas dengan intervensi dan regulasi pemerintah untuk kesejahteraan umum (dianut oleh Indonesia dan sebagian besar negara di dunia) adalah...",
    "options": [
      "Kapitalisme murni (Laissez-faire)",
      "Komunisme terpusat",
      "Ekonomi campuran (Mixed economy)",
      "Ekonomi tradisional Barter"
    ],
    "answer": 2,
    "explanation": "Ekonomi campuran (mixed economy) menggabungkan kebebasan pasar (swasta) dengan peran regulasi dan penyediaan fasilitas publik oleh pemerintah."
  },
  {
    "q": "Dalam konsep dasar bisnis, perbedaan mendasar antara 'needs' (kebutuhan) dan 'wants' (keinginan) adalah...",
    "options": [
      "Needs bersifat sekunder dan mewah, sedangkan wants bersifat primer untuk bertahan hidup",
      "Needs adalah esensial untuk kelangsungan hidup (makanan, pakaian), sedangkan wants adalah bentuk ekspresi kebutuhan yang dipengaruhi budaya, preferensi, dan tren",
      "Wants selalu lebih murah dibandingkan needs",
      "Tidak ada perbedaan, keduanya sepenuhnya sinonim dalam ilmu pemasaran"
    ],
    "answer": 1,
    "explanation": "Needs adalah kebutuhan dasar manusia untuk bertahan hidup, sedangkan wants adalah keinginan spesifik atas cara memuaskan kebutuhan tersebut (misal butuh minum, inginnya boba istimewa)."
  },
  {
    "q": "Dalam sistem perekonomian pasar bebas, fungsi utama dari profit (keuntungan) bagi sebuah perusahaan adalah...",
    "options": [
      "Sinyal bahwa pasar menghargai output perusahaan lebih tinggi daripada biaya input, sekaligus sebagai sumber modal untuk ekspansi dan inovasi",
      "Bukti bahwa perusahaan telah melakukan praktik monopoli pasar",
      "Satu-satunya indikator bahwa perusahaan tidak membayar pajak kepada pemerintah",
      "Jaminan mutlak bahwa perusahaan tidak akan pernah mengalami kebangkrutan di masa depan"
    ],
    "answer": 0,
    "explanation": "Profit merupakan imbalan atas risiko bisnis dan efisiensi pengelolaan sumber daya, serta memberi sinyal kepada pasar untuk terus memproduksi barang/jasa yang diminati konsumen."
  },
  {
    "q": "Manakah yang BUKAN merupakan salah satu dari tiga faktor utama yang memengaruhi perilaku etis individu dalam organisasi bisnis?",
    "options": [
      "Individual factors (nilai moral dan filosofi pribadi)",
      "Social factors (pengaruh rekan kerja dan budaya norma)",
      "Opportunity factors (peluang atau kebebasan untuk bertindak nir-etika tanpa terdeteksi)",
      "Government subsidy factors (besaran subsidi keuangan dari negara)"
    ],
    "answer": 3,
    "explanation": "Tiga faktor penentu etika bisnis: Individual factors, Social factors (co-workers, manajer), dan Opportunity (adanya celah pengawasan/hukuman yang lemah)."
  },
  {
    "q": "Pandangan klasik tentang Tanggung Jawab Sosial Perusahaan (CSR) yang menyatakan bahwa satu-satunya tanggung jawab sosial bisnis adalah memaksimalkan laba bagi pemegang saham (selama sesuai aturan) dikemukakan oleh...",
    "options": [
      "Adam Smith",
      "Milton Friedman (Economic Model of CSR)",
      "John Maynard Keynes",
      "Carroll (Socioeconomic Model)"
    ],
    "answer": 1,
    "explanation": "Milton Friedman menganjurkan Economic Model, di mana tugas manajemen hanyalah menghasilkan profit semaksimal mungkin bagi shareholders tanpa mengabaikan hukum."
  },
  {
    "q": "Tindakan seorang karyawan yang melaporkan kelalaian ilegal, penipuan akuntansi, atau bahaya keselamatan kerja yang dilakukan oleh perusahaan tempatnya bekerja kepada pihak berwenang atau media disebut...",
    "options": [
      "Insider trading",
      "Whistle-blowing",
      "Greenwashing",
      "Lobbying"
    ],
    "answer": 1,
    "explanation": "Whistle-blowing (peniupan peluit) adalah pelaporan pelanggaran hukum/etika internal organisasi kepada pihak luar atau otoritas berwenang."
  },
  {
    "q": "Praktik pemasaran di mana perusahaan memberikan klaim yang dilebih-lebihkan atau palsu mengenai keramahan lingkungan (eco-friendly) dari produk mereka demi membangun citra positif disebut...",
    "options": [
      "Green marketing",
      "Greenwashing",
      "Cause-related marketing",
      "Social entrepreneurship"
    ],
    "answer": 1,
    "explanation": "Greenwashing adalah manipulasi pemasaran di mana produk dikesankan ramah lingkungan padahal kenyataannya tidak atau kontribusinya sangat minimal."
  },
  {
    "q": "Situasi ketika seorang manajer atau karyawan dihadapkan pada keputusan di mana kepentingannya pribadi (misal menerima suap/hadiah dari vendor) bertentangan dengan kepentingan perusahaan disebut...",
    "options": [
      "Conflict of interest (Konflik kepentingan)",
      "Bribe & Extortion",
      "Whistle-blowing",
      "Corporate governance"
    ],
    "answer": 0,
    "explanation": "Conflict of interest terjadi bila pertimbangan profesional seseorang menjadi bias atau terbagi karena adanya keuntungan finansial/pribadi eksternal."
  },
  {
    "q": "Menurut Piramida CSR Carroll (Carroll's Pyramid of CSR), tanggung jawab paling dasar yang menjadi fondasi utama bagi setiap organisasi bisnis sebelum memenuhi tanggung jawab lainnya adalah...",
    "options": [
      "Philanthropic responsibility (Tanggung jawab filantropis / amal)",
      "Ethical responsibility (Tanggung jawab etis)",
      "Legal responsibility (Tanggung jawab hukum)",
      "Economic responsibility (Tanggung jawab ekonomi / menghasilkan laba)"
    ],
    "answer": 3,
    "explanation": "Urutan Piramida Carroll dari bawah (fondasi) ke atas: Economic (laba agar bertahan hidup) -> Legal (patuh hukum) -> Ethical (berbuat benar) -> Philanthropic (kontribusi sosial masyarakat)."
  },
  {
    "q": "Prinsip ekonomi di mana suatu negara berspesialisasi dalam memproduksi barang/jasa dengan biaya peluang (opportunity cost) yang lebih rendah dibandingkan negara lain disebut...",
    "options": [
      "Absolute advantage (Keunggulan absolut)",
      "Comparative advantage (Keunggulan komparatif)",
      "Economies of scale",
      "Protectionism"
    ],
    "answer": 1,
    "explanation": "Comparative advantage (David Ricardo) menjadi dasar perdagangan internasional modern, di mana negara fokus pada produksi dengan efisiensi relatif atau opportunity cost terendah."
  },
  {
    "q": "Metode memasuki pasar internasional di mana perusahaan mendirikan fasilitas produksi, cabang, atau membeli perusahaan di negara tujuan, sehingga memiliki KONTROL PENUH namun dengan RISIKO PALING TINGGI adalah...",
    "options": [
      "Exporting (Ekspor)",
      "Licensing (Lisensi)",
      "Franchising (Waralaba)",
      "Foreign Direct Investment (FDI / Investasi Langsung)"
    ],
    "answer": 3,
    "explanation": "FDI (Foreign Direct Investment) menuntut komitmen modal terbesar dan risiko tertinggi (politik, mata uang, operasional), namun memberi kontrol manajemen 100% dan laba tanpa bagi hasil."
  },
  {
    "q": "Hambatan perdagangan internasional berupa pembatasan jumlah fisik atau kuantitas barang tertentu yang boleh diimpor ke dalam suatu negara selama periode waktu tertentu disebut...",
    "options": [
      "Protective Tariff",
      "Import Quota (Kuota Impor)",
      "Embargo",
      "Dumping"
    ],
    "answer": 1,
    "explanation": "Import quota membatasi volume/kuantitas fisik barang impor untuk melindungi produsen dalam negeri dari banjir barang luar negeri."
  },
  {
    "q": "Larangan total oleh pemerintah terhadap perdagangan (ekspor maupun impor) barang tertentu atau dengan negara tertentu (seringkali karena alasan politik atau keamanan nasional) disebut...",
    "options": [
      "Embargo",
      "Tariff",
      "Countertrade",
      "Devaluation"
    ],
    "answer": 0,
    "explanation": "Embargo adalah penghentian total hubungan perdagangan secara legal atau diplomatis terhadap negara tertentu."
  },
  {
    "q": "Praktik ilegal dalam perdagangan internasional di mana produsen menjual barang di pasar luar negeri dengan harga yang lebih murah dibandingkan harga jual di pasar domestiknya sendiri disebut...",
    "options": [
      "Price skimming",
      "Dumping",
      "Transfer pricing",
      "Smuggling"
    ],
    "answer": 1,
    "explanation": "Dumping adalah praktik perang harga tidak sehat di mana barang diekspor di bawah harga pokok/harga domestik untuk merebut pangsa pasar negara tujuan."
  },
  {
    "q": "Selisih antara total nilai ekspor dan total nilai impor sebuah negara dalam periode tertentu disebut...",
    "options": [
      "Balance of Payments (Neraca Pembayaran)",
      "Balance of Trade (Neraca Perdagangan)",
      "Exchange rate (Nilai tukar)",
      "Gross National Product"
    ],
    "answer": 1,
    "explanation": "Balance of Trade = Nilai Ekspor - Nilai Impor. Jika Ekspor > Impor maka terjadi surplus perdagangan (trade surplus); jika sebaliknya terjadi defisit."
  },
  {
    "q": "Ciri utama yang paling membedakan bentuk badan usaha Korporasi (Perseroan Terbatas / PT) dibandingkan dengan Perusahaan Perseorangan (Sole Proprietorship) adalah...",
    "options": [
      "Unlimited liability (tanggung jawab pribadi tidak terbatas atas utang perusahaan)",
      "Limited liability (tanggung jawab pemegang saham terbatas hanya sebesar modal yang disetor)",
      "Tidak diwajibkan membayar pajak penghasilan",
      "Tidak diperbolehkan merekrut lebih dari 10 orang karyawan"
    ],
    "answer": 1,
    "explanation": "Korporasi/PT adalah badan hukum terpisah (separate legal entity), sehingga harta pribadi pemegang saham terlindungi (limited liability) jika perusahaan mengalami kebangkrutan."
  },
  {
    "q": "Kelemahan utama dari bentuk Perusahaan Perseorangan (Sole Proprietorship) yang membuat pemiliknya menanggung seluruh risiko secara pribadi hingga harta milik pribadinya adalah...",
    "options": [
      "Double taxation (pajak ganda atas laba dan dividen)",
      "Unlimited liability (tanggung jawab tidak terbatas)",
      "Biaya pendirian yang sangat mahal dan rumit",
      "Sulit untuk dibubarkan jika pemilik ingin pensiun"
    ],
    "answer": 1,
    "explanation": "Dalam Sole Proprietorship, secara hukum tidak ada pemisahan antara harta perusahaan dan harta pribadi pemilik (unlimited liability)."
  },
  {
    "q": "Penggabungan dua perusahaan yang beroperasi pada tingkat tahapan produksi atau supply chain yang berbeda (misalnya produsen mobil membeli perusahaan pabrik ban) disebut...",
    "options": [
      "Horizontal merger",
      "Vertical merger",
      "Conglomerate merger",
      "Hostile takeover"
    ],
    "answer": 1,
    "explanation": "Vertical merger menyatukan perusahaan dalam rantai pasok yang sama (hulu dengan hilir). Horizontal merger adalah penggabungan pesaing langsung di industri yang sama."
  },
  {
    "q": "Manakah yang merupakan keuntungan utama bagi seorang wirausahawan yang membeli lisensi waralaba (Franchising) dibandingkan mendirikan bisnis independen dari nol?",
    "options": [
      "Bebas mutlak dari aturan SOP dan royalty fee",
      "Mendapatkan model bisnis yang sudah teruji, merek yang sudah dikenal pasar, dan dukungan pelatihan dari franchisor",
      "Tidak memerlukan modal awal sama sekali",
      "Hak kepemilikan saham penuh atas perusahaan induk franchisor"
    ],
    "answer": 1,
    "explanation": "Franchisee menikmati tingkat keberhasilan yang lebih tinggi karena menggunakan brand awareness yang sudah mapan, sistem manajemen teruji, dan iklan skala nasional."
  },
  {
    "q": "Karakteristik kepribadian utama yang umumnya dimiliki oleh wirausahawan sukses (entrepreneurs) menurut studi bisnis adalah...",
    "options": [
      "Menghindari segala bentuk risiko dan lebih menyukai stabilitas gaji bulanan tetap",
      "Memiliki dorongan berprestasi tinggi (internal locus of control), kreatif, toleran terhadap ketidakpastian, dan berorientasi pada peluang",
      "Selalu menolak inovasi baru demi mempertahankan cara-cara tradisional",
      "Lebih suka bekerja sendiri tanpa melibatkan tim atau karyawan lain"
    ],
    "answer": 1,
    "explanation": "Entrepreneur adalah inovator pengambil risiko yang memiliki internal locus of control (percaya kesuksesan ditentukan oleh usaha sendiri), proaktif, dan pantang menyerah."
  },
  {
    "q": "Empat fungsi dasar manajemen yang sering disingkat sebagai POLC adalah...",
    "options": [
      "Planning, Organizing, Leading, Controlling",
      "Planning, Operating, Leading, Closing",
      "Producing, Organizing, Learning, Controlling",
      "Pricing, Organizing, Leading, Costing"
    ],
    "answer": 0,
    "explanation": "POLC: Planning (merencanakan tujuan), Organizing (mengalokasikan SDM/struktur), Leading (memotivasi dan mengarahkan), Controlling (mengevaluasi kinerja terhadap target)."
  },
  {
    "q": "Menurut model Robert Katz, keterampilan manajerial (management skills) yang paling penting dan dominan dibutuhkan oleh Manajer Puncak (Top Managers) seperti CEO atau Direktur Utama adalah...",
    "options": [
      "Technical skills (keterampilan teknis operasional)",
      "Conceptual skills (keterampilan konseptual melihat gambaran besar strategi)",
      "Human/Interpersonal skills (keterampilan berinteraksi dengan orang lain)",
      "Clerical skills (keterampilan administrasi ketik-mengetik)"
    ],
    "answer": 1,
    "explanation": "Top managers memerlukan conceptual skills untuk merumuskan visi strategis jangka panjang. First-line managers lebih membutuhkan technical skills untuk membimbing pekerja operasional."
  },
  {
    "q": "Dalam analisis SWOT, faktor internal perusahaan yang memberikan keunggulan kompetitif dibandingkan pesaing dikelompokkan ke dalam...",
    "options": [
      "Strengths (Kekuatan) dan Opportunities (Peluang)",
      "Strengths (Kekuatan) dan Weaknesses (Kelemahan)",
      "Opportunities (Peluang) dan Threats (Ancaman)",
      "Weaknesses (Kelemahan) dan Threats (Ancaman)"
    ],
    "answer": 1,
    "explanation": "Strengths dan Weaknesses adalah faktor INTERNAL (berasal dari dalam organisasi). Opportunities dan Threats adalah faktor EKSTERNAL (dari pasar/lingkungan luar)."
  },
  {
    "q": "Rencana komprehensif jangka panjang (biasanya 3-5 tahun ke depan) yang dirumuskan oleh manajemen puncak untuk menentukan visi, misi, dan arah tujuan utama perusahaan disebut...",
    "options": [
      "Operational plan (Rencana operasional harian)",
      "Tactical plan (Rencana taktis mingguan/bulanan)",
      "Strategic plan (Rencana strategis)",
      "Contingency plan (Rencana darurat)"
    ],
    "answer": 2,
    "explanation": "Strategic planning adalah panduan visi jangka panjang organisasi yang menjadi pedoman penyusunan tactical plans (jangka menengah) dan operational plans (jangka pendek)."
  },
  {
    "q": "Gaya kepemimpinan (leadership style) di mana manajer membuat keputusan sendiri tanpa berkonsultasi dengan bawahan, memberikan arahan yang ketat, dan menuntut kepatuhan penuh disebut...",
    "options": [
      "Democratic leadership (Kepemimpinan demokratis)",
      "Autocratic leadership (Kepemimpinan otoriter/otokratis)",
      "Laissez-faire leadership (Kepemimpinan bebas/free-rein)",
      "Participative leadership"
    ],
    "answer": 1,
    "explanation": "Autocratic leadership memusatkan seluruh wewenang pada pemimpin. Sangat efektif dalam situasi krisis darurat atau saat memimpin pekerja baru yang belum terlatih."
  },
  {
    "q": "Gaya kepemimpinan di mana pemimpin memberikan kebebasan penuh kepada anggota tim untuk menetapkan tujuan dan cara kerja mereka sendiri dengan bimbingan atau intervensi minimal disebut...",
    "options": [
      "Autocratic leadership",
      "Democratic leadership",
      "Laissez-faire / Free-rein leadership",
      "Transactional leadership"
    ],
    "answer": 2,
    "explanation": "Laissez-faire (free-rein) sangat cocok untuk tim profesional berpendidikan tinggi, kreatif, dan mandiri seperti peneliti laboratorium atau konsultan senior."
  },
  {
    "q": "Proses manajemen yang berfungsi mengukur kinerja riil, membandingkannya dengan standar atau target KPI yang telah ditetapkan, dan mengambil tindakan korektif jika terjadi penyimpangan adalah fungsi...",
    "options": [
      "Planning (Perencanaan)",
      "Organizing (Pengorganisasian)",
      "Leading (Pengarahan)",
      "Controlling (Pengendalian)"
    ],
    "answer": 3,
    "explanation": "Controlling (pengendalian/pengawasan) memastikan agar seluruh aktivitas berjalan sesuai rencana yang telah dirumuskan pada tahap Planning."
  },
  {
    "q": "Pengelompokan pekerjaan dalam struktur organisasi berdasarkan wilayah operasi geografis (misalnya Divisi Regional Jawa, Divisi Sumatra, Divisi Kalimantan) disebut departementalisasi berdasarkan...",
    "options": [
      "Functional departmentalization",
      "Product departmentalization",
      "Geographic departmentalization",
      "Customer departmentalization"
    ],
    "answer": 2,
    "explanation": "Geographic departmentalization memungkinkan organisasi merespons dengan cepat karakteristik budaya, logistik, dan kebutuhan pelanggan di wilayah tertentu."
  },
  {
    "q": "Jumlah karyawan atau bawahan yang secara langsung melapor kepada satu orang manajer atau atasan disebut sebagai...",
    "options": [
      "Chain of command (Rantai komando)",
      "Span of control / Span of management (Rentang kendali)",
      "Division of labor (Pembagian kerja)",
      "Centralization degree"
    ],
    "answer": 1,
    "explanation": "Span of control (rentang kendali) bisa bersifat Wide (rentang luas - 1 manajer membawahi banyak orang, struktur flat) atau Narrow (rentang sempit - struktur tall)."
  },
  {
    "q": "Struktur organisasi yang menggabungkan departementalisasi fungsional dan proyek, sehingga seorang karyawan memiliki DUA atasan (manajer fungsional dan manajer proyek/produk) disebut...",
    "options": [
      "Line structure (Struktur lini tunggal)",
      "Matrix structure (Struktur matriks)",
      "Network structure",
      "Divisional structure"
    ],
    "answer": 1,
    "explanation": "Struktur Matriks melanggar prinsip kesatuan komando (unity of command) demi fleksibilitas proyek, di mana spesialis melapor kepada manajer departemen sekaligus manajer proyek."
  },
  {
    "q": "Organisasi yang memusatkan wewenang pengambilan keputusan di level manajemen puncak (top management) dan hanya memberikan sedikit otonomi kepada manajer cabang di bawahnya disebut organisasi yang...",
    "options": [
      "Decentralized (Terdesentralisasi)",
      "Centralized (Tersentralisasi)",
      "Informal",
      "Virtual"
    ],
    "answer": 1,
    "explanation": "Centralization memusatkan kontrol di pucuk pimpinan untuk menjaga keseragaman kebijakan. Decentralization mendelegasikan wewenang ke bawah agar keputusan lebih cepat."
  },
  {
    "q": "Konsep memecah sebuah proses pekerjaan besar menjadi serangkaian tugas-tugas spesifik yang lebih kecil dan dilakukan oleh individu atau spesialis yang berbeda disebut...",
    "options": [
      "Division of labor / Specialization (Pembagian kerja / Spesialisasi)",
      "Job enrichment",
      "Job rotation",
      "Span of control"
    ],
    "answer": 0,
    "explanation": "Division of labor (Adam Smith) meningkatkan efisiensi dan keterampilan pekerja pada satu tugas spesifik, namun jika berlebihan dapat menimbulkan kebosanan."
  },
  {
    "q": "Dalam struktur organisasi modern, keunggulan utama dari struktur yang mendesentralisasikan wewenang kepada manajer tingkat bawah atau cabang daerah adalah...",
    "options": [
      "Memperlambat proses pengambilan keputusan karena harus menunggu persetujuan CEO",
      "Pengambilan keputusan menjadi jauh lebih cepat dan akurat karena dilakukan oleh pihak yang paling dekat dengan masalah dan pelanggan",
      "Menghilangkan seluruh kebutuhan akan pengawasan keuangan",
      "Menghemat biaya karena tidak perlu membayar gaji manajer menengah"
    ],
    "answer": 1,
    "explanation": "Desentralisasi memberdayakan manajer lokal yang paling memahami kondisi pasar daerahnya untuk mengambil keputusan operasional secara responsif."
  },
  {
    "q": "Proses konversi produksi yang memecah satu bahan baku utama menjadi beberapa produk akhir yang berbeda (misalnya penyulingan minyak bumi mentah menjadi bensin, solar, kerosin, dan aspal) disebut proses...",
    "options": [
      "Synthetic process (Proses sintetik / perakitan)",
      "Analytic process (Proses analitik / penguraian)",
      "Intermittent process",
      "Continuous assembly line"
    ],
    "answer": 1,
    "explanation": "Analytic process menguraikan 1 bahan mentah menjadi berbagai output. Sebaliknya, Synthetic process menggabungkan banyak bahan baku/komponen menjadi 1 produk akhir (misal merakit mobil)."
  },
  {
    "q": "Tata letak fasilitas produksi (facility layout) di mana mesin-mesin dan pekerja diatur sesuai dengan urutan langkah proses perakitan produk (seperti pada pabrik perakitan mobil atau elektronik massal) disebut...",
    "options": [
      "Process layout (Tata letak fungsional)",
      "Product layout / Assembly line (Tata letak produk / lini perakitan)",
      "Fixed-position layout (Tata letak posisi tetap)",
      "Cellular layout"
    ],
    "answer": 1,
    "explanation": "Product layout (assembly line) sangat efisien untuk produksi massal barang standar yang seragam, di mana produk bergerak dari satu stasiun kerja ke stasiun berikutnya."
  },
  {
    "q": "Tata letak produksi di mana produk yang sedang dikerjakan tetap berada di satu tempat, sedangkan pekerja, mesin, dan bahan baku didatangkan ke lokasi tersebut (seperti dalam pembuatan kapal laut, jembatan, atau gedung skyscraper) disebut...",
    "options": [
      "Product layout",
      "Process layout",
      "Fixed-position layout (Tata letak posisi tetap)",
      "Automated layout"
    ],
    "answer": 2,
    "explanation": "Fixed-position layout digunakan untuk produk yang sangat besar, berat, atau rapuh sehingga tidak memungkinkan untuk dipindahkan di atas ban berjalan."
  },
  {
    "q": "Sistem manajemen persediaan (inventory management) di mana bahan baku atau komponen tiba tepat pada saat dibutuhkan dalam proses produksi, sehingga meminimalkan biaya penyimpanan di gudang, disebut...",
    "options": [
      "Material Requirements Planning (MRP)",
      "Just-In-Time (JIT) Inventory System",
      "Economic Order Quantity (EOQ)",
      "First-In, First-Out (FIFO)"
    ],
    "answer": 1,
    "explanation": "JIT (dipelopori Toyota) menghapus pemborosan biaya gudang dengan mengandalkan koordinasi jadwal pengiriman yang sangat presisi dengan pemasok."
  }
];
