// scripts/build-super-mnm101-bank-data.mjs
// 14 Studi Kasus Esai Komprehensif Pengantar Manajemen (MNM101) - 1 kasus per TM

export const MNM101_SUPER_BANK_UTS = [
  {
    type: "analysis",
    scope: "TM 1: Fungsi POAC & Keterampilan Manajerial Robert L. Katz",
    difficulty: "Menengah",
    estimatedTime: "25–35 menit",
    question: "Studi Kasus 1: Evaluasi Transisi Peran Manajerial dari Spesialis Teknis ke Manajer Lini Pertama",
    context: "Andi adalah insinyur perangkat lunak paling cemerlang di PT Inovasi Solusi. Karena prestasi teknisnya, ia dipromosikan menjadi Manajer Tim Rekayasa Perangkat Lunak yang membawahi 12 staf insinyur. Tiga bulan pasca promosi, Andi mengalami stres berat: proyek sering terlambat, anggota tim mengeluh karena Andi terlalu mencampuri pekerjaan teknis mikro (micromanagement) daripada memotivasi tim, dan komunikasi antar-divisi macet. Direktur Operasional meminta Anda mengevaluasi ketidakseimbangan keterampilan manajerial Andi.",
    data: [
      "Profil Awal: Insinyur senior berkinerja teknis bintang 5.",
      "Posisi Baru: First-line Manager (Manajer Tim Rekayasa).",
      "Keluhan Tim: Micromanagement, ketiadaan delegasi wewenang, evaluasi tugas emosional, koordinasi proyek buruk.",
      "Model Acuan: Tiga Keterampilan Manajerial Robert L. Katz (Technical, Human, Conceptual)."
    ],
    instructions: [
      "Berdasarkan model Robert L. Katz, analisis pergeseran proporsi keterampilan yang harus dikembangkan Andi saat beralih dari staf teknis ke posisi manajerial.",
      "Identifikasi dua peran Mintzberg yang gagal dijalankan Andi dan jelaskan dampaknya terhadap tim.",
      "Susun rekomendasi tindakan nyata (action plan) bagi Andi untuk mendelegasikan wewenang dan menjalankan 4 fungsi POAC secara efektif."
    ],
    outputFormat: [
      "Analisis Pergeseran Keterampilan Katz",
      "Evaluasi 2 Peran Kritis Mintzberg",
      "Matriks Rencana Aksi POAC Manajerial"
    ],
    rubric: [
      "Ketepatan analisis pergeseran keterampilan teknis ke human skills (35%)",
      "Ketajaman identifikasi peran Mintzberg (Leader & Resource Allocator) (35%)",
      "Aplikabilitas rencana aksi perbaikan manajerial POAC (30%)"
    ],
    answerGuide: `1. Analisis Model Keterampilan Katz:
• Sebagai insinyur individu, keahlian teknis (Technical Skills) adalah 80% penentu suksesnya.
• Saat menjadi First-line Manager, porsi keahlian hubungan manusiawi (Human/Interpersonal Skills) meningkat drastis menjadi yang paling krusial (sekitar 50-60%), sementara porsi teknis harus dikurangi agar memberi ruang bagi kepemimpinan.
• Kesalahan Andi: Ia terjebak dalam perangkap teknis (over-relying on technical skills) sehingga gagal mendengarkan, memotivasi, dan membangun kerja sama tim.

2. Evaluasi Peran Mintzberg:
• Peran Leader (Interpersonal): Gagal membimbing dan memberdayakan anggota tim, menciptakan iklim kerja yang cemas akibat kontrol berlebihan.
• Peran Resource Allocator (Decisional): Gagal mengalokasikan sumber daya manusia secara proporsional melalui delegasi tugas yang terstruktur.

3. Rencana Aksi POAC:
• Planning: Buat target mingguan berbasis hasil akhir (deliverables), bukan mendikte cara coding.
• Organizing: Terapkan pembagian tugas yang jelas sesuai spesialisasi masing-masing insinyur.
• Leading: Adakan sesi one-on-one mingguan untuk mendengarkan hambatan kerja dan memberi apresiasi.
• Controlling: Gunakan project dashboard (seperti Jira) untuk memantau kemajuan secara transparan tanpa intervensi mikro harian.`
  },
  {
    type: "analysis",
    scope: "TM 2: PESTEL & Tipologi Budaya Organisasi Daft",
    difficulty: "Komprehensif",
    estimatedTime: "30–40 menit",
    question: "Studi Kasus 2: Penyelarasan Budaya Organisasi BCA Menghadapi Disrupsi Bank Digital",
    context: "Bank Central Asia (BCA) menghadapi guncangan disrupsi dari bank digital dan aplikasi fintech. Di satu sisi, industri perbankan menuntut kepatuhan regulasi ketat (Prudential Banking) dari OJK dan Bank Indonesia yang selama ini membentuk budaya keteraturan dan kepatuhan (Consistency Culture). Di sisi lain, preferensi nasabah generasi baru menuntut inovasi fitur aplikasi instan, yang menuntut fleksibilitas budaya adaptif (Adaptability Culture).",
    data: [
      "Karakteristik Industri: Regulasi moneter ketat, ancaman serangan siber, persaingan fintech.",
      "Budaya Eksisting: Disiplin proses, hierarki berlapis, mitigasi risiko tinggi (Consistency Culture).",
      "Tuntutan Baru: Kecepatan rilis produk, eksperimen berbasis data, kegesitan (Agile development)."
    ],
    instructions: [
      "Petakan faktor Lingkungan Umum (PESTEL) dan Lingkungan Tugas yang paling mengancam model bisnis perbankan konvensional.",
      "Berdasarkan Tipologi Budaya Daft, evaluasi konflik antara Consistency Culture dan Adaptability Culture di BCA.",
      "Rancang strategi kepemimpinan untuk menyelaraskan budaya kepatuhan dan budaya inovasi tanpa melanggar regulasi perbankan."
    ],
    outputFormat: [
      "Tabel Pemetaan PESTEL vs Task Environment",
      "Analisis Tipologi Budaya Daft",
      "Solusi Manajemen Budaya Hibrida"
    ],
    rubric: [
      "Kelengkapan pemetaan faktor lingkungan eksternal (30%)",
      "Ketepatan analisis Tipologi Budaya Daft (35%)",
      "Realisme solusi integrasi budaya kehati-hatian vs inovasi (35%)"
    ],
    answerGuide: `1. Pemetaan Lingkungan:
• Lingkungan Umum (PESTEL): Faktor Teknologi (Artificial Intelligence, Open API), Faktor Hukum/Regulasi (UU Perlindungan Data Pribadi), Faktor Ekonomi (fluktuasi suku bunga BI-Rate).
• Lingkungan Tugas: Pesaing (Bank Digital baru seperti Jago, SeaBank), Pelanggan (Gen Z yang mengutamakan UI/UX seamless), Regulator (OJK & BI).

2. Tipologi Budaya Daft:
• Consistency Culture menekankan fokus internal dan stabilitas. Sangat unggul untuk menjaga keandalan transaksi core-banking dan kepatuhan anti-fraud.
• Namun, ketergantungan mutlak pada Consistency Culture membuat birokrasi persetujuan produk baru lambat dan enggan mengambil risiko inovasi (risk-averse).
• Dibutuhkan suntikan Adaptability Culture yang berorientasi eksternal dan tangkas merespons kebutuhan pasar digital.

3. Strategi Budaya Hibrida (Ambidextrous Culture):
• Terapkan pendekatan organisasi ambidextrous: Bentuk unit inovasi digital otonom (misal BCA Digital / Lab Inovasi) yang beroperasi dengan budaya Adaptability (kerja tim lintas fungsi, agile sprint mingguan).
• Sementara operasional transaksi utama (core banking) tetap dijaga ketat oleh Consistency Culture dengan tata kelola risiko nol-toleransi (zero-defect).`
  },
  {
    type: "framework",
    scope: "TM 3: Budaya Global Hofstede & Tanggung Jawab Sosial Carroll",
    difficulty: "Komprehensif",
    estimatedTime: "30–35 menit",
    question: "Studi Kasus 3: Analisis Lintas Budaya Ekspansi Indofood ke Nigeria & Piramida CSR",
    context: "PT Indofood Sukses Makmur berhasil mendominasi pasar mi instan di Nigeria melalui merek Indomie. Keberhasilan ini tidak diraih dengan mudah, karena manajer ekspatriat Indonesia harus beradaptasi dengan dinamika budaya lokal Nigeria yang multietnis serta tingginya ekspektasi masyarakat sekitar pabrik terkait pengentasan kemiskinan dan penyediaan air bersih.",
    data: [
      "Subjek: Ekspansi global PT Indofood di Afrika Barat (Nigeria).",
      "Dimensi Hofstede: Karakteristik Power Distance dan Kolektivisme lokal.",
      "Isu Komunitas: Harapan pembangunan infrastruktur dasar, pembukaan lapangan kerja lokal, dan pelestarian lingkungan."
    ],
    instructions: [
      "Bandingkan 2 dimensi budaya Hofstede antara Indonesia dan Nigeria, serta implikasinya bagi gaya kepemimpinan manajer pabrik.",
      "Terapkan 4 tingkatan Piramida Tanggung Jawab Sosial Archie Carroll (Ekonomi, Hukum, Etika, Filantropi) pada operasional Indofood di Nigeria.",
      "Berikan rekomendasi pendekatan etika manajerial yang harus dipegang teguh saat menghadapi tuntutan pungutan liar dari oknum setempat."
    ],
    outputFormat: [
      "Analisis Komparatif Hofstede",
      "Matriks 4 Tingkat CSR Carroll",
      "Kebijakan Etika Bisnis Anti-Suap"
    ],
    rubric: [
      "Akurasi penerapan dimensi Hofstede (35%)",
      "Penerapan komprehensif piramida Carroll (35%)",
      "Ketegasan solusi etika hukum/prinsipil (30%)"
    ],
    answerGuide: `1. Analisis Hofstede:
• Baik Indonesia maupun Nigeria memiliki skor Power Distance yang relatif tinggi (menghormati status hierarki dan pemimpin formal) serta Kolektivisme yang kuat (loyalitas kelompok/komunitas sangat diutamakan).
• Implikasi: Manajer ekspatriat harus menjalin hubungan personal yang erat dengan kepala suku/tokoh masyarakat lokal (relationship-building), memimpin dengan wibawa kebapakan yang mengayomi, dan memperhatikan kesejahteraan keluarga karyawan.

2. Piramida CSR Carroll:
• Tanggung Jawab Ekonomi: Membangun rantai pasok lokal gandum/minyak sawit, mempekerjakan ribuan tenaga kerja lokal, dan menjaga harga mi instan terjangkau.
• Tanggung Jawab Hukum: Mematuhi regulasi ketenagakerjaan dan standar keamanan pangan NAFDAC Nigeria secara mutlak.
• Tanggung Jawab Etis: Menyediakan upah layak di atas UMR regional dan memastikan kondisi pabrik sehat tanpa eksploitasi.
• Tanggung Jawab Filantropis: Menyediakan sumur air bersih komunal, beasiswa pendidikan bagi anak warga sekitar, dan bantuan pangan saat bencana.

3. Pendekatan Etika Anti-Suap:
• Menerapkan Pendekatan Hukum & Hak Moral (Justice & Moral-Rights): Menolak pungutan liar dengan mengalihkan kontribusi ke dalam program CSR kemasyarakatan formal yang diawasi bersama perwakilan warga dan aparat resmi.`
  },
  {
    type: "decision",
    scope: "TM 4: Perencanaan Strategis, Sasaran SMART & MBO",
    difficulty: "Menengah",
    estimatedTime: "25–35 menit",
    question: "Studi Kasus 4: Restrukturisasi Sistem Penetapan Sasaran Rumah Sakit Melalui MBO",
    context: "Rumah Sakit Citra Medika mengalami penurunan kepuasan pasien dari 85% menjadi 62%. Evaluasi menemukan bahwa sasaran yang ditetapkan direksi terlalu kabur ('Tingkatkan pelayanan pasien sebaik mungkin') dan tidak terintegrasi antar unit kerja (dokter, perawat, apotek, dan administrasi kasir bekerja tanpa koordinasi target terukur). Direktur Utama ingin menerapkan sistem Management by Objectives (MBO).",
    data: [
      "Sasaran Lama: 'Meningkatkan kualitas layanan rawat jalan secepatnya' (Tidak SMART).",
      "Keluhan Pasien: Waktu tunggu obat apotek rata-rata 90 menit, antrean pendaftaran kasir 45 menit, dokter sering terlambat.",
      "Target Manajemen Baru: Waktu tunggu obat maksimal 20 menit, kepuasan pasien kembali di atas 90% dalam 6 bulan."
    ],
    instructions: [
      "Ubah sasaran lama yang tidak efektif menjadi minimal 2 rumusan sasaran kerja yang memenuhi seluruh kriteria SMART.",
      "Uraikan 4 langkah proses implementasi Management by Objectives (MBO) yang harus dijalankan Kepala Instalasi Farmasi bersama stafnya.",
      "Jelaskan dua potensi kelemahan MBO yang harus diantisipasi manajemen rumah sakit."
    ],
    outputFormat: [
      "Formulasi Sasaran SMART",
      "Runtutan 4 Langkah MBO",
      "Mitigasi Kelemahan MBO"
    ],
    rubric: [
      "Ketepatan formulasi SMART (35%)",
      "Kejelasan runtutan langkah MBO Peter Drucker (35%)",
      "Antisipasi kelemahan MBO (30%)"
    ],
    answerGuide: `1. Formulasi Sasaran SMART:
• Sasaran 1 (Unit Farmasi): 'Menurunkan rata-rata waktu penyiapan resep obat pasien rawat jalan dari 90 menit menjadi maksimal 20 menit per resep dalam jangka waktu 3 bulan ke depan.'
• Sasaran 2 (Kepuasan Pelanggan): 'Meningkatkan skor indeks kepuasan pasien poliklinik rawat jalan dari 62% menjadi minimal 90% berdasarkan survei digital berkala pada akhir kuartal II 2026.'

2. Empat Langkah Proses MBO:
• Langkah 1 (Menetapkan Sasaran Bersama): Kepala Farmasi berdialog dengan apoteker dan asisten apoteker menyepakati target waktu 20 menit per obat.
• Langkah 2 (Menyusun Rencana Aksi): Menata ulang tata letak rak obat fast-moving, menerapkan sistem antrean digital, dan membagi shift jam sibuk.
• Langkah 3 (Memantau Kemajuan): Mengadakan evaluasi mingguan untuk melihat log waktu tunggu sistem dan mengidentifikasi resep yang tertunda.
• Langkah 4 (Evaluasi Kinerja Akhir & Apresiasi): Mengevaluasi pencapaian akhir 3 bulan, memberikan bonus kinerja tim jika target tercapai, dan merumuskan target baru.

3. Antisipasi Kelemahan MBO:
• Terlalu fokus pada metrik kuantitatif (waktu cepat) sehingga mengorbankan akurasi dispensing obat (bahaya salah obat). Mitigasi: Tambahkan standar kontrol kualitas zero-defect pada verifikasi ganda etiket obat.
• Beban administrasi dokumen yang berlebihan jika pemantauan terlalu birokratis.`
  },
  {
    type: "framework",
    scope: "TM 5: Manajemen Strategis (SWOT, Porter Generic, Matriks BCG)",
    difficulty: "Komprehensif",
    estimatedTime: "30–40 menit",
    question: "Studi Kasus 5: Analisis Posisi Portofolio Bisnis & Strategi Bersaing PT Kalbe Farma Tbk",
    context: "PT Kalbe Farma Tbk memiliki berbagai Strategic Business Units (SBU): (1) Obat Resep Generik & Bioteknologi, (2) Produk Kesehatan Konsumen (Promag, Woods), (3) Produk Nutrisi (Morinaga, Diabetasol), dan (4) Divisi Distribusi & Logistik. Persaingan industri farmasi semakin ketat dengan masuknya produk impor murah dan perubahan skema BPJS Kesehatan.",
    data: [
      "SBU Nutrisi Diabetes: Pertumbuhan pasar tinggi (14% per tahun), Kalbe memimpin pangsa pasar dominan 65%.",
      "SBU Obat Bebas Tradisional (Promag): Pertumbuhan pasar stabil rendah (3%), pangsa pasar Kalbe sangat dominan 75%.",
      "SBU Terapi Onkologi Baru: Pertumbuhan industri obat kanker sangat tinggi (20%), namun pangsa pasar Kalbe masih kecil (8%) karena dominasi pemain multinasional."
    ],
    instructions: [
      "Petakan ketiga SBU tersebut ke dalam kuadran Matriks Portofolio BCG (Stars, Cash Cows, Question Marks, Dogs) beserta alasan analitisnya.",
      "Tentukan strategi pemanfaatan arus kas antar unit bisnis berdasarkan matriks BCG tersebut.",
      "Pilihlah salah satu Strategi Generik Porter (Cost Leadership atau Differentiation) yang paling cocok diterapkan untuk divisi Terapi Onkologi Baru dan berikan alasannya."
    ],
    outputFormat: [
      "Tabel Pemetaan Kuadran BCG",
      "Rekomendasi Aliran Arus Kas Korporat",
      "Justifikasi Strategi Generik Porter"
    ],
    rubric: [
      "Akurasi penempatan kuadran BCG ketiga unit bisnis (35%)",
      "Kelogisan strategi pergeseran kas (Cash Cow ke Question Mark) (35%)",
      "Ketajaman justifikasi Strategi Generik Porter (30%)"
    ],
    answerGuide: `1. Pemetaan Matriks BCG:
• SBU Obat Bebas (Promag) = CASH COW. Pertumbuhan pasar rendah (3%), tetapi pangsa pasar dominan (75%). Menghasilkan laba stabil dan arus kas surplus dengan kebutuhan investasi modal minimal.
• SBU Nutrisi Diabetes (Diabetasol) = STAR. Pertumbuhan pasar tinggi (14%) dan pangsa pasar sangat tinggi (65%). Pemimpin pasar yang menghasilkan laba besar namun memerlukan investasi berkelanjutan untuk mempertahankan dominasi.
• SBU Terapi Onkologi Baru = QUESTION MARK. Pertumbuhan industri sangat pesat (20%), namun pangsa pasar Kalbe masih kecil (8%). Berpotensi besar menjadi Star jika disuntik investasi riset masif, atau menjadi Dog jika gagal bersaing.

2. Strategi Arus Kas Korporat:
• Lakukan pemanenan kas dari Cash Cow (Promag) untuk mendanai riset klinis dan ekspansi pemasaran SBU Question Mark (Terapi Onkologi) agar berhasil meraih pangsa pasar signifikan dan bermutasi menjadi Star.
• Pertahankan posisi SBU Nutrisi Diabetes (Star) dengan mendanai ekspansi dari labanya sendiri agar siap menjadi Cash Cow masa depan saat industri memasuki fase matang.

3. Strategi Generik Porter untuk Terapi Onkologi:
• Strategi yang Tepat: DIFERENSIASI (Differentiation).
• Alasan: Produk obat onkologi (kanker) menuntut efikasi klinis superior, sertifikasi bioteknologi tinggi, dan reputasi medis yang terpercaya. Dokter dan pasien mengutamakan tingkat kesembuhan dan minim efek samping daripada harga murah. Kalbe harus berinvestasi pada formula biologis spesifik ras Asia yang tidak dimiliki kompetitor global.`
  },
  {
    type: "decision",
    scope: "TM 6: Pengambilan Keputusan Manajerial & Bias Kognitif",
    difficulty: "Menengah",
    estimatedTime: "25–35 menit",
    question: "Studi Kasus 6: Analisis Bias Kognitif dan Model Pengambilan Keputusan Ekspansi Gerai Ritel",
    context: "Direktur Ritel PT Sumber Pangan memaksakan keputusan membuka 50 gerai baru di wilayah Kalimantan. Meskipun tim analis kelayakan bisnis telah memaparkan data bahwa daya beli masyarakat setempat sedang menurun akibat anjloknya harga komoditas tambang, sang Direktur mengabaikan laporan tersebut. Ia berargumen: 'Saya sudah 25 tahun di bisnis ini, intuisi saya tidak pernah salah! Selain itu, kita sudah membayar uang sewa lahan Rp 15 miliar, pantang bagi kita untuk mundur!'",
    data: [
      "Kondisi Keputusan: Keputusan strategis berbiaya tinggi di bawah kondisi ketidakpastian ekonomi.",
      "Sikap Direktur: Menolak data riset analis, mengandalkan intuisi personal, dan menolak membatalkan sewa lahan Rp 15 M.",
      "Model Teori: Model Administratif Herbert Simon dan Bias Kognitif Keputusan."
    ],
    instructions: [
      "Identifikasi minimal dua Bias Kognitif yang menjangkiti Direktur Ritel tersebut dan jelaskan buktinya dari kutipan kasus.",
      "Jelaskan bagaimana konsep Bounded Rationality dan Satisficing (Herbert Simon) dapat membantu dewan direksi memahami keterbatasan pertimbangan sang Direktur.",
      "Rekomendasikan prosedur pengambilan keputusan yang lebih objektif untuk mencegah keputusan fatal tersebut (misal: Devil's Advocate, Delphi Method)."
    ],
    outputFormat: [
      "Identifikasi & Bukti Bias Kognitif",
      "Penerapan Konsep Herbert Simon",
      "Rekomendasi Prosedur Pencegahan Bias"
    ],
    rubric: [
      "Ketepatan identifikasi bias (Overconfidence & Sunk Cost Fallacy) (35%)",
      "Ketepatan penerapan teori Simon (35%)",
      "Kualitas solusi prosedural mitigasi bias keputusan (30%)"
    ],
    answerGuide: `1. Identifikasi Bias Kognitif:
• Sunk Cost Fallacy: Direktur bersikeras melanjutkan proyek ekspansi karena merasa telah mengeluarkan uang sewa lahan Rp 15 miliar ('pantang untuk mundur'). Seharusnya uang Rp 15 miliar diperlakukan sebagai biaya hangus masa lalu yang tidak boleh mendikte kelayakan investasi masa depan yang berisiko menelan kerugian operasional jauh lebih besar.
• Overconfidence Bias: Direktur merasa intuisinya 100% sempurna selama 25 tahun sehingga menutup telinga terhadap data riset obyektif analis.

2. Konsep Bounded Rationality (Herbert Simon):
• Direktur memiliki rasionalitas yang terbatas (keterbatasan kapasitas kognitif manusia dalam memproses variabel makroekonomi yang kompleks dan dinamis).
• Sikap Direktur mencerminkan pengambilan keputusan intuitif yang tidak terkontrol, di mana ia melakukan satisficing semu demi membenarkan persepsi ego pribadinya.

3. Prosedur Rekomendasi:
• Tunjuk tim Devil's Advocate: Berikan mandat resmi kepada tim independen untuk mengkritisi setiap asumsi pendapatan dan memetakan skenario terburuk jika proyek tetap dilanjutkan.
• Terapkan Stage-Gate Process: Lakukan uji coba pembukaan 3 gerai percontohan terlebih dahulu selama 6 bulan. Jika metrik penjualan per gerai tidak mencapai target kelayakan, kontrak sewa lahan dihentikan tanpa perlu membangun 47 gerai sisanya.`
  },
  {
    type: "analysis",
    scope: "TM 7: Struktur & Desain Organisasi (Fungsional, Divisional, Matriks)",
    difficulty: "Komprehensif",
    estimatedTime: "30–40 menit",
    question: "Studi Kasus 7: Reorganisasi Struktur PT Mega Elektronik Menghadapi Ledakan Produk Baru",
    context: "PT Mega Elektronik berkembang pesat dari produsen radio sederhana menjadi konglomerasi yang memproduksi TV cerdas, pendingin ruangan (AC), mesin cuci pintar, dan panel surya perumahan. Struktur organisasi yang digunakan saat ini masih berupa Struktur Fungsional Tradisional (Direktur Pemasaran, Direktur Produksi, Direktur Keuangan, Direktur R&D). Akibatnya, Direktur Pemasaran kewalahan karena harus menangani strategi produk yang sangat berbeda karakteristiknya, konflik perebutan prioritas lini pabrik sering terjadi, dan peluncuran produk baru terlambat hingga 8 bulan dibandingkan pesaing.",
    data: [
      "Struktur Lama: Fungsional Terpusat (Sentralisasi di jajaran direktur fungsional).",
      "Keragaman Produk: 4 lini produk dengan teknologi, siklus hidup, dan segmen pasar yang sangat heterogen.",
      "Permasalahan: Silo fungsional, lambatnya koordinasi, kelebihan beban kerja di pucuk pimpinan."
    ],
    instructions: [
      "Evaluasi mengapa struktur fungsional tidak lagi memadai bagi PT Mega Elektronik berdasarkan konsep ukuran organisasi dan diferensiasi produk.",
      "Rancang usulan desain Struktur Organisasi Divisional (berdasarkan Lini Produk) dan gambarkan bagan alur komandonya.",
      "Bandingkan kelebihan dan kekurangan struktur divisional usulan Anda terhadap struktur fungsional lama."
    ],
    outputFormat: [
      "Evaluasi Kegagalan Struktur Fungsional",
      "Rancangan Bagan Struktur Divisional Produk",
      "Tabel Analisis Kelebihan vs Kekurangan Komparatif"
    ],
    rubric: [
      "Ketajaman diagnosis kelemahan struktur fungsional (35%)",
      "Kerapian rancangan pembagian divisi berbasis produk (35%)",
      "Kelengkapan komparasi kelebihan dan kelemahan (30%)"
    ],
    answerGuide: `1. Evaluasi Struktur Fungsional:
• Struktur fungsional sangat efisien saat organisasi masih berukuran kecil dan hanya memproduksi satu lini produk homogen.
• Ketika keragaman lini produk meledak (TV, AC, Mesin Cuci, Panel Surya), diferensiasi horizontal antar fungsi menjadi terlalu rumit. Para manajer fungsional kehilangan fokus strategis karena harus membagi perhatian ke 4 pasar yang berbeda. Terjadi 'information overload' di puncak manajemen dan koordinasi lintas fungsi macet total.

2. Usulan Struktur Divisional Berbasis Produk:
• CEO / Direktur Utama membawahi 4 Divisi Produk Mandiri:
  1. Divisi Consumer Electronics (TV Cerdas)
  2. Divisi Home Appliances (AC & Mesin Cuci)
  3. Divisi Renewable Energy (Panel Surya)
  4. Kantor Pusat Korporat (Keuangan Terpusat & Legal)
• Setiap Divisi Produk dipimpin oleh General Manager (Vice President) yang memiliki departemen fungsional sendiri: Pemasaran Divisi, R&D Divisi, Operasi Pabrik Divisi, dan SDM Divisi.

3. Analisis Komparatif:
• Kelebihan Struktur Divisional: Respons sangat cepat terhadap dinamika pasar masing-masing produk; akuntabilitas laba-rugi per divisi jelas; membebaskan CEO dari urusan operasional harian untuk fokus pada strategi korporasi.
• Kelemahan: Terjadi duplikasi fungsi (setiap divisi memiliki tim pemasaran dan pabrik sendiri sehingga biaya overhead naik); berkurangnya efisiensi skala ekonomis dibandingkan fungsional tunggal.`
  }
];

export const MNM101_SUPER_BANK_UAS = [
  {
    type: "analysis",
    scope: "TM 8: Pemantapan Review Terpadu Silabus Pra-UTS",
    difficulty: "Komprehensif",
    estimatedTime: "35–45 menit",
    question: "Studi Kasus 8: Simulasi Ujian Kasus Integratif Pra-UTS Transformasi Retail Hero Group",
    context: "Hero Group menghadapi guncangan disrupsi belanja e-commerce dan perubahan preferensi belanja konsumen yang beralih dari hypermarket besar (Giant) ke gerai minimarket dekat rumah. Manajemen puncak harus merumuskan arah baru: menutup gerai Giant yang merugi, mengalihkan modal ke gerai Hero Supermarket premium dan IKEA, merampingkan organisasi dari struktur birokrasi piramida menjadi tim lincah, serta menyelaraskan budaya kerja para karyawan veteran.",
    data: [
      "Dimensi Analisis: Integrasi POAC, Analisis SWOT & PESTEL, Matriks BCG, dan Desain Organisasi.",
      "Konteks: Transformasi korporasi ritel modern Indonesia."
    ],
    instructions: [
      "Lakukan sintesis bagaimana keempat fungsi manajemen POAC bekerja saling terkait dalam proses transformasi Hero Group.",
      "Berdasarkan Matriks BCG, jelaskan status Giant Hypermarket dan justifikasi logis keputusan manajemen untuk melakukan divestasi/penutupan.",
      "Jelaskan bagaimana manajer puncak harus menggunakan perpaduan Keterampilan Konseptual dan Keterampilan Hubungan Manusia (Katz) saat mengumumkan keputusan restrukturisasi yang berdampak pada penutupan gerai."
    ],
    outputFormat: [
      "Sintesis Alur Siklus POAC",
      "Analisis Portofolio BCG & Divestasi",
      "Penerapan Keterampilan Katz dalam Manajemen Krisis"
    ],
    rubric: [
      "Kerapian integrasi 4 fungsi POAC (35%)",
      "Ketepatan analisis BCG dan justifikasi divestasi Dog (35%)",
      "Aplikabilitas penerapan kepemimpinan Katz (30%)"
    ],
    answerGuide: `1. Sintesis Alur Siklus POAC:
• Planning: Menetapkan visi baru beralih dari mass-hypermarket ke specialty premium grocery (Hero) dan perabot rumah tangga (IKEA).
• Organizing: Merestrukturisasi portofolio toko, menutup badan usaha Giant, dan menata ulang rantai pasok logistik terpusat.
• Leading: Berkomunikasi secara jujur dan empatik dengan serikat pekerja, memimpin program pelatihan transisi peran karyawan, dan meredam kepanikan.
• Controlling: Menetapkan metrik kinerja baru per meter persegi ruang ritel (sales per square meter) dan memantau pemotongan kerugian secara mingguan.

2. Analisis Matriks BCG:
• Giant Hypermarket berada pada kuadran DOGS. Pertumbuhan pasar hypermarket di Indonesia negatif/menurun drastis (konsumen enggan berkeliling toko raksasa), dan pangsa pasar Giant terus tergerus oleh Indomaret/Alfamart.
• Keputusan divestasi/penutupan total adalah tindakan manajerial yang tepat dan rasional menurut teori BCG untuk menghentikan pendarahan kas (cash drain) dan memfokuskan sumber daya ke unit bisnis yang prospektif (IKEA sebagai Star).

3. Keterampilan Katz dalam Krisis:
• Conceptual Skills digunakan untuk melihat gambaran besar pergeseran tren demografi konsumen Indonesia 5-10 tahun ke depan dan berani mengambil keputusan strategis yang menyakitkan demi kelangsungan hidup induk korporasi.
• Human Skills digunakan untuk memperlakukan karyawan terdampak penutupan secara manusiawi: memastikan pemenuhan hak pesangon di atas standar regulasi ketenagakerjaan, mengadakan program alih profesi/outplacement, dan menjaga moral tim yang bertahan.`
  },
  {
    type: "analysis",
    scope: "TM 9: Manajemen Perubahan & Inovasi (Kurt Lewin & Ambidextrous)",
    difficulty: "Menengah",
    estimatedTime: "25–35 menit",
    question: "Studi Kasus 9: Mengatasi Resistensi Perubahan Digitalisasi Pabrik PT Semen Padang",
    context: "PT Semen Padang meluncurkan program otomatisasi pabrik berbasis Internet of Things (IoT) untuk menggantikan pencatatan manual suhu kiln semen. Namun, para operator pabrik senior yang sudah bekerja lebih dari 20 tahun menolak menggunakan tablet digital. Mereka mengeluhkan sistem baru 'terlalu ribet', sengaja mengabaikan alarm tablet, dan tetap memakai buku catatan kertas lama.",
    data: [
      "Inovasi: Digitalisasi pencatatan operasional pabrik via sensor IoT dan tablet.",
      "Resistensi: Penolakan operator senior, kebiasaan lama yang mengakar, ketakutan dianggap tidak kompeten.",
      "Model Acuan: Model Tiga Tahap Perubahan Kurt Lewin & Taktik Kotter-Schlesinger."
    ],
    instructions: [
      "Analisis akar penyebab penolakan operator senior berdasarkan teori resistensi perubahan.",
      "Rancang tahapan implementasi perubahan menggunakan Model 3 Tahap Kurt Lewin (Unfreezing, Changing, Refreezing).",
      "Pilihlah dua taktik penanganan resistensi perubahan dari Kotter dan Schlesinger yang paling manusiawi dan efektif untuk diterapkan manajer pabrik."
    ],
    outputFormat: [
      "Diagnosis Sumber Resistensi",
      "Rencana Aksi 3 Tahap Kurt Lewin",
      "Taktik Penanganan Resistensi Terpilih"
    ],
    rubric: [
      "Ketajaman diagnosis resistensi psikologis karyawan (30%)",
      "Kesesuaian penerapan 3 tahap Kurt Lewin (40%)",
      "Realisme taktik Kotter-Schlesinger (30%)"
    ],
    answerGuide: `1. Diagnosis Sumber Resistensi:
• Kebiasaan yang Mengakar (Habit): Operator telah bekerja dengan buku kertas selama 20 tahun; mengubah kebiasaan fisik menimbulkan disorientasi kenyamanan.
• Ketakutan akan Ketidakmampuan (Fear of Incompetence): Operator senior khawatir dianggap gagap teknologi dan takut posisi mereka akan digantikan oleh mesin otomatis.
• Ketidakpastian: Kurangnya pemahaman bahwa tablet bukan untuk mengawasi/menghukum mereka, melainkan mencegah kegagalan mesin yang berbahaya.

2. Model 3 Tahap Kurt Lewin:
• Unfreezing (Pencairan): Tunjukkan data nyata insiden kerusakan mesin kiln masa lalu yang disebabkan keterlambatan membaca suhu buku kertas. Sadarkan operator bahwa metode manual membahayakan keselamatan seluruh pabrik dan kelangsungan kerja mereka.
• Changing (Perubahan): Berikan pelatihan antarmuka tablet dengan pendampingan personal (buddy system) dari staf muda; buat desain aplikasi sangat sederhana dengan tombol besar dan panduan visual.
• Refreezing (Pembekuan Ulang): Tarik seluruh buku catatan kertas dari area pabrik; jadikan pencatatan digital sebagai satu-satunya prosedur resmi (SOP); berikan penghargaan 'Operator Teladan Digital' bulanan.

3. Taktik Kotter & Schlesinger:
• Edukasi & Komunikasi: Menjelaskan manfaat sistem bagi keamanan kerja operator secara sabar dan berkelanjutan.
• Partisipasi & Keterlibatan: Libatkan operator senior dalam mendesain tata letak menu tablet agar sesuai dengan alur kerja nyata mereka, sehingga mereka merasa memiliki sistem tersebut.`
  },
  {
    type: "framework",
    scope: "TM 10: Manajemen Sumber Daya Manusia & Penilaian Kinerja",
    difficulty: "Komprehensif",
    estimatedTime: "30–40 menit",
    question: "Studi Kasus 10: Redesain Sistem Evaluasi Kinerja Karyawan PT Telkom Menuju 360-Degree Feedback",
    context: "PT Telkom Indonesia bertransformasi dari perusahaan telekomunikasi kabel menjadi perusahaan digital telecommunication terdepan. Namun, sistem evaluasi kinerja yang ada masih bersifat tradisional (top-down rating oleh satu atasan langsung). Akibatnya, banyak karyawan berperilaku mencari muka (kiss-up to boss) tetapi tidak kooperatif dengan rekan kerja lintas divisi dan bersikap arogan terhadap bawahan.",
    data: [
      "Sistem Lama: Penilaian tahunan sepihak oleh atasan langsung (rentan bias halo effect dan subjektivitas).",
      "Kebutuhan Baru: Kolaborasi agile lintas unit, kepemimpinan memberdayakan, dan budaya inovasi.",
      "Solusi yang Diusulkan: Penerapan 360-Degree Performance Appraisal."
    ],
    instructions: [
      "Jelaskan kelemahan sistem penilaian tradisional satu arah dan mengapa sistem tersebut memicu perilaku disfungsional dalam tim kerja digital.",
      "Rancang mekanisme penilaian 360-Degree Feedback yang mencakup 5 sumber evaluator.",
      "Uraikan langkah-langkah mitigasi agar sistem 360 derajat tidak disalahgunakan menjadi ajang balas dendam pribadi antar-karyawan."
    ],
    outputFormat: [
      "Evaluasi Kelemahan Sistem Tradisional",
      "Desain 5 Sumber Penilai 360-Degree",
      "Protokol Keamanan & Objektivitas Penilaian"
    ],
    rubric: [
      "Ketajaman diagnosis kelemahan penilaian searah (30%)",
      "Kelengkapan rancangan 5 sumber 360 derajat (35%)",
      "Kualitas protokol mitigasi bias dan balas dendam (35%)"
    ],
    answerGuide: `1. Kelemahan Sistem Tradisional:
• Penilaian atasan tunggal sering terkena 'Halo Effect' (kesan umum positif/negatif mendikte seluruh skor) dan 'Recency Bias' (hanya mengingat kejadian 2 minggu terakhir sebelum penilaian).
• Memicu perilaku politis karyawan yang hanya rajin saat dilihat atasan, namun enggan membantu rekan kerja dan bersikap tiran terhadap bawahan karena bawahan tidak memiliki hak suara.

2. Rancangan 5 Sumber Evaluator 360-Degree:
• Atasan Langsung (Immediate Supervisor): Menilai ketercapaian target KPI strategis dan kepatuhan arah divisi.
• Rekan Sejawat (Peers/Coworkers): Menilai kemampuan kolaborasi tim, keandalan menuntaskan tugas bersama, dan komunikasi horizontal.
• Bawahan Langsung (Subordinates): Menilai gaya kepemimpinan, keadilan delegasi tugas, empati, dan bimbingan pengembangan karier.
• Pelanggan Internal/Eksternal: Menilai responsivitas layanan dan orientasi kepuasan pengguna.
• Penilaian Diri Sendiri (Self-Appraisal): Refleksi mandiri karyawan mengenai pencapaian dan area perbaikan diri.

3. Protokol Mitigasi Balas Dendam:
• Jaminan Anonimitas Penuh: Skor dari rekan sejawat dan bawahan diagregasikan tanpa menampilkan identitas individu (hanya skor rata-rata).
• Fokus pada Pengembangan (Developmental Tool), Bukan Semata-mata Pemotongan Gaji: Gunakan 360 derajat terutama untuk rencana pelatihan dan pembinaan kepemimpinan.
• Pelatihan Memberikan Umpan Balik Konstruktif: Berikan panduan bahwa komentar harus berbasis perilaku kerja konkret, bukan serangan personal.`
  },
  {
    type: "analysis",
    scope: "TM 11: Teori Kepemimpinan Kontinjensi Fiedler & Transformasional",
    difficulty: "Komprehensif",
    estimatedTime: "30–40 menit",
    question: "Studi Kasus 11: Transformasi Kepemimpinan Satya Nadella di Microsoft",
    context: "Ketika Satya Nadella diangkat menjadi CEO Microsoft pada 2014, perusahaan sedang terpuruk: internal sarat permusuhan antar divisi (dog-eat-dog culture akibat sistem rating berjenjang), tertinggal dalam revolusi mobile dan komputasi awan (cloud), serta dipandang arogan oleh industri. Nadella mengubah kultur 'Know-it-all' (merasa tahu segalanya) menjadi 'Learn-it-all' (kultur pembelajar yang rendah hati), menghentikan perselisihan internal, dan mengarahkan fokus ke Azure Cloud.",
    data: [
      "Era Sebelumnya (Steve Ballmer): Sangat fokus tugas, agresif, kompetitif internal, kepemimpinan transaksional keras.",
      "Era Nadella: Empatik, kepemimpinan transformasional, kolaboratif, orientasi pertumbuhan jangka panjang.",
      "Hasil: Nilai kapitalisasi pasar Microsoft melesat dari $300 miliar menjadi lebih dari $3 triliun."
    ],
    instructions: [
      "Bandingkan gaya kepemimpinan Transaksional Ballmer vs Transformasional Nadella menggunakan 4 pilar kepemimpinan transformasional (Idealized Influence, Inspirational Motivation, Intellectual Stimulation, Individualized Consideration).",
      "Analisis situasi Microsoft tahun 2014 menggunakan Model Kontinjensi Fred Fiedler: mengapa gaya kepemimpinan hubungan (Relationship-Oriented) Nadella jauh lebih sukses memulihkan organisasi?",
      "Jelaskan bagaimana konsep 'Servant Leadership' diterapkan Nadella dalam memulihkan moral insinyur Microsoft."
    ],
    outputFormat: [
      "Matriks Komparasi 4 Pilar Transformasional",
      "Analisis Situasi Kontrol Fiedler",
      "Penerapan Konsep Servant Leadership"
    ],
    rubric: [
      "Penerapan mendalam 4 pilar transformasional (35%)",
      "Kesesuaian penerapan teori kontinjensi Fiedler (35%)",
      "Kualitas ulasan Servant Leadership (30%)"
    ],
    answerGuide: `1. Empat Pilar Transformasional Nadella:
• Idealized Influence (Pengaruh Ideal/Karisma): Menjadi teladan kerendahan hati; mengakui kesalahan Microsoft di masa lalu dan menjalin kemitraan dengan rival (seperti membawa Office ke Apple iOS).
• Inspirational Motivation: Mengartikulasikan visi mulia baru: 'Memberdayakan setiap orang dan setiap organisasi di planet ini untuk mencapai lebih banyak.'
• Intellectual Stimulation: Mendorong kultur 'Growth Mindset' di mana kegagalan eksperimen dipandang sebagai proses belajar, bukan aib yang dihukum.
• Individualized Consideration: Mendengarkan kegelisahan para insinyur, mempraktikkan empati mendalam (berakar dari pengalaman membesarkan putranya yang berkebutuhan khusus).

2. Model Kontinjensi Fiedler:
• Situasi Microsoft tahun 2014 berada pada tingkat kontrol 'Moderat': Struktur tugas sedang bertransformasi ke cloud yang belum terdefinisi pasti, dan hubungan pemimpin-anggota retak akibat perang saudara antar-divisi Windows vs Hardware.
• Fiedler membuktikan bahwa pada situasi kontrol moderat, pemimpin berorientasi hubungan (Relationship-Oriented / High LPC) seperti Nadella jauh lebih efektif karena mampu merekatkan kembali hubungan antar-manusia, meredakan kecurigaan internal, dan membangun kepercayaan tim.

3. Servant Leadership:
• Nadella membalik piramida organisasi: Peran CEO bukan dilayani oleh para wakil presiden dan staf, melainkan melayani dan menyingkirkan hambatan birokrasi agar para pengembang perangkat lunak garda depan dapat berinovasi secara leluasa bagi konsumen.`
  },
  {
    type: "framework",
    scope: "TM 12: Teori Motivasi (Herzberg, Vroom, Hackman-Oldham)",
    difficulty: "Komprehensif",
    estimatedTime: "30–35 menit",
    question: "Studi Kasus 12: Mengatasi Demotivasi Desainer Grafis Menggunakan Job Characteristics Model",
    context: "Sebuah agensi periklanan digital mengalami eksodus desainer grafis muda. Manajemen mengira masalahnya adalah gaji, lalu menaikkan upah sebesar 15%. Namun sebulan kemudian, pergantian staf tetap tinggi dan desainer mengeluh bosan. Investigasi mengungkap bahwa para desainer hanya disuruh memotong gambar banner sederhana secara berulang-ulang tanpa tahu untuk kampanye iklan apa, tidak pernah bertemu klien, dan seluruh revisi ditentukan sepihak oleh manajer akun.",
    data: [
      "Tindakan Manajemen: Menaikkan gaji 15% (hanya menyentuh Hygiene Factors Herzberg).",
      "Kondisi Pekerjaan: Monoton, tugas terpecah-pecah (tanpa Task Identity), tidak memahami dampak karyanya (tanpa Task Significance), dan nol otonomi.",
      "Model Solusi: Job Characteristics Model (Hackman & Oldham)."
    ],
    instructions: [
      "Jelaskan kegagalan kebijakan kenaikan gaji manajemen menggunakan Teori Dua Faktor Frederick Herzberg.",
      "Evaluasi pekerjaan desainer menggunakan 5 Dimensi Inti Pekerjaan Hackman & Oldham (Skill Variety, Task Identity, Task Significance, Autonomy, Feedback).",
      "Rancang program 'Job Enrichment' konkret untuk mendesain ulang pekerjaan desainer agar memicu motivasi internal yang tinggi."
    ],
    outputFormat: [
      "Analisis Hygiene vs Motivators Herzberg",
      "Audit 5 Dimensi Hackman-Oldham",
      "Rancangan Program Job Enrichment"
    ],
    rubric: [
      "Ketepatan analisis Herzberg (30%)",
      "Akurasi audit 5 dimensi JCM (35%)",
      "Kreativitas dan aplikabilitas program Job Enrichment (35%)"
    ],
    answerGuide: `1. Analisis Teori Dua Faktor Herzberg:
• Gaji merupakan faktor pemeliharaan (Hygiene Factor). Menaikkan gaji 15% hanya menghilangkan ketidakpuasan gaji, tetapi TIDAK menghasilkan motivasi kerja atau kepuasan intrinsik.
• Manajemen mengabaikan faktor Motivators: desainer kekurangan rasa berprestasi (achievement), tanggung jawab (responsibility), dan pengakuan (recognition) atas karya kreatif mereka.

2. Audit 5 Dimensi Hackman & Oldham:
• Skill Variety: SANGAT RENDAH (hanya memotong ukuran gambar secara repetitif).
• Task Identity: SANGAT RENDAH (tidak mengerjakan proyek kampanye dari hulu ke hilir).
• Task Significance: SANGAT RENDAH (tidak tahu dampak karyanya bagi kesuksesan merek klien).
• Autonomy: NOL (semua keputusan kreatif didikte sepihak oleh manajer akun).
• Feedback: RENDAH (hanya menerima komplain revisi tanpa tahu data konversi penjualan iklan).

3. Program Job Enrichment Konkret:
• Membentuk Tim Proyek Utuh (Task Identity): Berikan tanggung jawab satu kampanye iklan utuh kepada seorang desainer dari tahap konsep hingga visual final.
• Hubungan Klien Langsung (Autonomy & Significance): Libatkan desainer dalam sesi pitching presentasi ide langsung kepada klien.
• Dashboard Analitik Iklan (Feedback): Berikan akses analitik kampanye kepada desainer untuk melihat seberapa viral dan efektif desain yang mereka ciptakan.`
  },
  {
    type: "decision",
    scope: "TM 13: Dinamika Tim (Tuckman), Komunikasi & Manajemen Konflik",
    difficulty: "Menengah",
    estimatedTime: "25–35 menit",
    question: "Studi Kasus 13: Resolusi Konflik Destruktif pada Tim Proyek Merger Finansial",
    context: "Sebuah tim proyek merger beranggotakan 8 analis senior dari dua bank yang berbeda dibentuk untuk menyatukan sistem akuntansi. Pada minggu ke-4, proyek macet total. Rapat diwarnai adu mulut sengit, sindir-menyindir personal, saling menahan dokumen rahasia antar kelompok asal bank, dan dua analis menolak hadir rapat.",
    data: [
      "Usia Tim: 4 minggu pasca pembentukan.",
      "Status: Perdebatan peran kepemimpinan, norma kerja belum disepakati, timbul permusuhan emosional (Relationship Conflict).",
      "Model Analisis: 5 Tahap Tuckman dan Manajemen Konflik Thomas-Kilmann."
    ],
    instructions: [
      "Identifikasi tahap perkembangan tim mana yang sedang dialami kelompok ini menurut model Bruce Tuckman dan jelaskan karakteristiknya.",
      "Bedakan antara Konflik Tugas (Task Conflict) dan Konflik Hubungan (Relationship Conflict) dalam kasus ini.",
      "Sebagai Manajer Proyek, terapkan Gaya Kolaborasi (Collaborating) dari Thomas-Kilmann untuk menyelesaikan kemelut tersebut."
    ],
    outputFormat: [
      "Identifikasi Tahap Tuckman",
      "Pembedaan Jenis Konflik",
      "Protokol Resolusi Konflik Win-Win"
    ],
    rubric: [
      "Ketepatan identifikasi tahap Storming Tuckman (30%)",
      "Ketajaman pembedaan Task vs Relationship Conflict (35%)",
      "Aplikasi konkret metode Collaborating Thomas-Kilmann (35%)"
    ],
    answerGuide: `1. Tahap Perkembangan Tim Tuckman:
• Tim berada pada tahap STORMING.
• Karakteristik: Munculnya konflik peran kepemimpinan, benturan ego budaya kerja asal perusahaan, persaingan kekuasaan, dan resistensi terhadap kendali tim sebelum norma kebersamaan terbentuk. Jika tahap ini gagal dikelola, tim akan hancur sebelum mencapai tahap Norming apalagi Performing.

2. Pembedaan Konflik:
• Konflik Tugas (Task Conflict): Perbedaan sudut pandang teknis mengenai modul akuntansi mana yang lebih efisien untuk diadopsi (bersifat sehat jika diarahkan pada data).
• Konflik Hubungan (Relationship Conflict): Permusuhan personal, saling sindir, ketidakpercayaan emosional, dan menahan dokumen (sangat destruktif dan menjadi biang keladi kebuntuan proyek).

3. Protokol Resolusi Kolaborasi (Thomas-Kilmann - Collaborating Style):
• Fasilitasi Off-site Workshop Khusus: Kumpulkan seluruh anggota di luar kantor, sepakati aturan dasar (ground rules) bahwa tujuan proyek adalah keberhasilan merger bersama, bukan menang-kalahan bank asal.
• Pisahkan Masalah dari Orang: Redakan konflik hubungan dengan mendengarkan keluhan masing-masing pihak tanpa menghakimi.
• Fokus pada Sasaran Integratif (Superordinate Goal): Satukan analis ke dalam sub-tim campuran (1 orang Bank A + 1 orang Bank B) untuk menyelesaikan modul bersama, sehingga memecah kubu kelompok dan memicu empati kolegial.`
  },
  {
    type: "framework",
    scope: "TM 14: Sistem Pengendalian Organisasi & Balanced Scorecard",
    difficulty: "Komprehensif",
    estimatedTime: "30–40 menit",
    question: "Studi Kasus 14: Perancangan Balanced Scorecard Rumah Sakit Menghadapi Akreditasi Internasional",
    context: "RSUD Sehat Mandiri selama ini hanya mengendalikan rumah sakit menggunakan metrik keuangan tradisional (Realisasi Anggaran & Pendapatan Retribusi Pasien). Akibatnya, meskipun laba tercapai, antrean pasien membludak, perawat kelelahan (burnout) hingga mengundurkan diri massal, dan angka infeksi nosokomial pasca operasi meningkat. Direktur baru memutuskan mengadopsi kerangka Balanced Scorecard (Kaplan & Norton).",
    data: [
      "Kondisi Saat Ini: Pengendalian murni finansial (lagging indicators).",
      "Dampak Negatif: Kualitas layanan klinis merosot, komplain pasien melonjak, modal manusia (perawat/dokter) terabaikan.",
      "Kerangka Solusi: Balanced Scorecard dengan 4 Perspektif Berimbang."
    ],
    instructions: [
      "Jelaskan mengapa pengendalian berbasis finansial semata dapat merusak kelangsungan hidup jangka panjang organisasi jasa pelayanan.",
      "Rancang minimal 2 Key Performance Indicators (KPI) terukur untuk masing-masing 4 perspektif Balanced Scorecard (Finansial, Pelanggan, Proses Internal, Pembelajaran & Pertumbuhan).",
      "Gambarkan rantai sebab-akibat (Strategy Map) yang menghubungkan Perspektif Pembelajaran & Pertumbuhan hingga bermuara pada Kinerja Finansial."
    ],
    outputFormat: [
      "Kritik Pengendalian Finansial Tunggal",
      "Tabel 8 KPI Balanced Scorecard",
      "Uraian Naratif Peta Strategi (Cause-and-Effect Chain)"
    ],
    rubric: [
      "Ketajaman kritik keterbatasan metrik keuangan tradisional (30%)",
      "Ketepatan dan keterukuran 8 indikator KPI 4 perspektif (40%)",
      "Kelogisan rantai sebab-akibat Strategy Map (30%)"
    ],
    answerGuide: `1. Bahaya Pengendalian Finansial Tunggal:
• Metrik keuangan bersifat 'Lagging Indicators' (indikator historis masa lalu) yang hanya mencatat hasil akhir tanpa menunjukkan pemicu masa depan (leading indicators).
• Memangkas biaya pelatihan dan menekan rasio perawat demi laba jangka pendek justru merusak kepuasan pasien dan meningkatkan malpraktik, yang pada akhirnya akan menghancurkan reputasi dan keuangan rumah sakit di masa depan.

2. Tabel Indikator Kunci (KPI) 4 Perspektif Balanced Scorecard:
• 1. Perspektif Finansial:
  - Rasio Efisiensi Biaya Operasional terhadap Pendapatan (BOPO < 80%).
  - Pertumbuhan Pendapatan Layanan Medis Non-Subsidi (+10% per tahun).
• 2. Perspektif Pelanggan:
  - Skor Indeks Kepuasan Pasien (Net Promoter Score > 85%).
  - Rata-rata waktu tunggu antrean layanan rawat jalan (< 30 menit).
• 3. Perspektif Proses Bisnis Internal:
  - Angka Kejadian Infeksi Nosokomial Rumah Sakit (< 1,5%).
  - Waktu tunggu hasil laboratorium kritis (< 45 menit).
• 4. Perspektif Pembelajaran & Pertumbuhan:
  - Jam pelatihan kompetensi klinis per perawat per tahun (minimal 40 jam).
  - Skor kepuasan kerja dan retensi tenaga medis spesialis (> 90%).

3. Rantai Sebab-Akibat (Strategy Map):
Pelatihan klinis perawat yang intensif (Pembelajaran & Pertumbuhan) -> meningkatkan kecermatan sanitasi dan mempercepat proses diagnostik (Proses Internal) -> menghasilkan kesembuhan pasien yang lebih cepat dan bebas infeksi (Pelanggan) -> meningkatkan reputasi rumah sakit, lonjakan kunjungan rujukan, dan kepatuhan pembayaran (Finansial yang Berkelanjutan).`
  }
];
