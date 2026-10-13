// src/data/quizzes/mnm101.ts
// Kuis pilihan ganda Pengantar Manajemen (MNU108; nama variabel dan file masih MNM101)
// Sumber: Daft & Marcic, Understanding Management 12e (2023)
// 56 soal Pra-UTS (TM 1-7, setiap penjelasan memuat [hal. X]) dan 60 soal Pra-UAS (TM 9-15, Ch. 8-15 sesuai RPP 2026)
import type { QuizQuestion } from '../../types';

export const MNM101_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Fungsi Manajemen POAC",
    "difficulty": "medium",
    "q": "Manajer menetapkan target penjualan tumbuh 15% untuk tahun depan dan merancang langkah pencapaiannya. Manajer tersebut sedang menjalankan fungsi...",
    "options": [
      "Organizing (Pengorganisasian)",
      "Leading (Kepemimpinan)",
      "Controlling (Pengendalian)",
      "Planning (Perencanaan)"
    ],
    "answer": 3,
    "explanation": "Planning adalah fungsi menetapkan tujuan kinerja masa depan dan cara mencapainya. Organizing menugaskan pekerjaan dan mengalokasikan sumber daya, leading memakai pengaruh untuk memotivasi karyawan, dan controlling memantau aktivitas serta melakukan koreksi [hal. 8–10]."
  },
  {
    "tm": 1,
    "topic": "Keterampilan Manajerial",
    "difficulty": "medium",
    "q": "Menurut Exhibit 1.3, dibandingkan dengan manajer madya, keterampilan yang porsinya PALING besar pada nonmanajer (individual contributor) adalah...",
    "options": [
      "Technical skills",
      "Human skills",
      "Conceptual skills",
      "Ketiga keterampilan sama besar"
    ],
    "answer": 0,
    "explanation": "Exhibit 1.3: pada nonmanajer, technical skills besar, human skills sedang, dan conceptual skills kecil. Pada manajer madya, technical skills kecil sedangkan human dan conceptual skills besar [hal. 12]."
  },
  {
    "tm": 1,
    "topic": "Peran Manajerial Mintzberg",
    "difficulty": "medium",
    "q": "Seorang CEO menyambut tamu kehormatan dan menandatangani dokumen resmi dalam sebuah upacara. Peran manajer menurut Mintzberg yang sedang ia jalankan adalah...",
    "options": [
      "Spokesperson (informational)",
      "Disseminator (informational)",
      "Figurehead (interpersonal)",
      "Liaison (interpersonal)"
    ],
    "answer": 2,
    "explanation": "Figurehead menjalankan tugas seremonial dan simbolis, misalnya menyambut tamu dan menandatangani dokumen resmi. Spokesperson menyampaikan informasi ke pihak luar lewat pidato dan laporan, disseminator meneruskan informasi ke anggota organisasi, dan liaison menjaga jalur informasi di dalam dan di luar organisasi [hal. 21]."
  },
  {
    "tm": 1,
    "topic": "Efisiensi vs Efektivitas",
    "difficulty": "medium",
    "q": "Suatu pabrik berhasil memproduksi 10.000 unit barang dengan biaya bahan baku sangat murah, tetapi produk tersebut tidak laku di pasaran karena tidak sesuai kebutuhan konsumen. Organisasi ini dapat dikategorikan...",
    "options": [
      "Efektif tetapi tidak efisien",
      "Efisien tetapi tidak efektif",
      "Efisien dan efektif",
      "Tidak efisien dan tidak efektif"
    ],
    "answer": 1,
    "explanation": "Efisiensi menyangkut jumlah sumber daya yang dipakai untuk mencapai tujuan; efektivitas menyangkut sejauh mana tujuan tercapai dan produk yang dihasilkan dihargai pelanggan. Pabrik ini hemat sumber daya tetapi produknya tidak dihargai pasar. Buku menegaskan keduanya bisa sama-sama tinggi (Square), dan efisiensi yang berlebihan bisa merusak efektivitas (EMI) [hal. 11–12]."
  },
  {
    "tm": 1,
    "topic": "Kompetensi Manajer Masa Kini",
    "difficulty": "basic",
    "q": "Menurut tabel kompetensi manajer masa kini (Exhibit 1.1), dalam hal \"mengawasi pekerjaan\" (overseeing work), manajer bergeser dari controller menjadi...",
    "options": [
      "Inspector",
      "Gatekeeper",
      "Coordinator",
      "Enabler"
    ],
    "answer": 3,
    "explanation": "Overseeing work: controller → enabler. Enabler membantu orang mendapat apa yang dibutuhkan, menyingkirkan hambatan, dan memberi kesempatan belajar, feedback, dan coaching. Baris lain pada tabel yang sama: supervising individuals → leading teams, conflict and competition → collaboration, autocratic → empowering, maintaining stability → mobilizing for change [hal. 5]."
  },
  {
    "tm": 1,
    "topic": "Perspektif Klasik: Fayol",
    "difficulty": "medium",
    "q": "Lima elemen manajemen menurut Henri Fayol berbeda dari empat fungsi manajemen modern karena Fayol memasukkan...",
    "options": [
      "Commanding dan coordinating",
      "Leading dan staffing",
      "Motivating dan communicating",
      "Directing dan budgeting"
    ],
    "answer": 0,
    "explanation": "Fayol merumuskan lima elemen: planning, organizing, commanding, coordinating, controlling. Empat fungsi modern adalah planning, organizing, leading, controlling. Fungsi-fungsi Fayol mendasari banyak teori manajemen umum saat ini [hal. 30]."
  },
  {
    "tm": 2,
    "topic": "Lingkungan Umum: Dimensi Ekonomi",
    "difficulty": "basic",
    "q": "Perubahan daya beli konsumen, tingkat pengangguran, dan suku bunga merupakan unsur dari...",
    "options": [
      "Lingkungan tugas (task environment)",
      "Lingkungan umum, dimensi economic",
      "Lingkungan internal organisasi",
      "Lingkungan umum, dimensi sociocultural"
    ],
    "answer": 1,
    "explanation": "Dimensi economic pada general environment mencakup kesehatan ekonomi negara atau wilayah, seperti daya beli, pengangguran, dan suku bunga. General environment memengaruhi organisasi secara tidak langsung dan mengenai semua organisasi kurang lebih sama [hal. 55, 60]."
  },
  {
    "tm": 2,
    "topic": "Tipe Budaya Korporat",
    "difficulty": "advanced",
    "q": "Perusahaan rintisan teknologi yang mendorong eksperimen berisiko, fleksibilitas cepat, dan tanggap terhadap perubahan kebutuhan pasar mengadopsi tipe budaya...",
    "options": [
      "Consistency culture",
      "Involvement culture",
      "Adaptability culture",
      "Achievement culture"
    ],
    "answer": 2,
    "explanation": "Adaptability culture berada di kuadran external focus + flexibility (Exhibit 2.6) dan menghargai kreativitas, eksperimen, serta keberanian mengambil risiko. Buku menyebut perusahaan teknologi dan internet sebagai lingkungan yang cocok, dengan TubeMogul sebagai contoh [hal. 71–72]."
  },
  {
    "tm": 2,
    "topic": "Level Budaya Korporat",
    "difficulty": "medium",
    "q": "Pada Exhibit 2.5, nilai seperti \"The HP Way\" dan \"The Penney Idea\" termasuk level budaya...",
    "options": [
      "Artifacts (level terlihat)",
      "Underlying assumptions and deep beliefs",
      "Symbols (level terlihat)",
      "Expressed values (level tak terlihat)"
    ],
    "answer": 3,
    "explanation": "Teks menyebut dua level, visible dan invisible. Exhibit 2.5 memerinci level invisible menjadi expressed values dan underlying assumptions, sehingga ada tiga butir bernomor. Artifacts (pakaian, tata kantor, simbol, slogan, seremoni) terlihat di permukaan; underlying assumptions adalah inti budaya yang tertanam sampai tak disadari [hal. 67]."
  },
  {
    "tm": 2,
    "topic": "Ketidakpastian Lingkungan",
    "difficulty": "advanced",
    "q": "Menurut Exhibit 2.4, ketidakpastian lingkungan (environmental uncertainty) berada pada tingkat TERTINGGI apabila...",
    "options": [
      "Faktor lingkungan banyak dan berubah cepat",
      "Faktor lingkungan sedikit dan relatif stabil",
      "Faktor lingkungan banyak tetapi berubah lambat",
      "Faktor lingkungan sedikit tetapi berubah cepat"
    ],
    "answer": 0,
    "explanation": "Exhibit 2.4 memakai dua sumbu: jumlah faktor dan laju perubahan faktor. High uncertainty berarti banyak faktor yang berubah cepat (contoh buku: perusahaan TV kabel menghadapi streaming); low uncertainty berarti sedikit faktor dan relatif stabil (contoh: pembotol minuman ringan) [hal. 63–64]."
  },
  {
    "tm": 2,
    "topic": "Boundary Spanning",
    "difficulty": "medium",
    "q": "Peran karyawan yang secara aktif mengumpulkan data pesaing dan memantau tren preferensi konsumen eksternal disebut...",
    "options": [
      "Internal whistleblower",
      "Arbitrase manajerial",
      "Boundary-spanning roles",
      "Gatekeeper komando"
    ],
    "answer": 2,
    "explanation": "Boundary spanning adalah mengaitkan dan mengoordinasikan aktivitas organisasi dengan elemen kunci di lingkungan eksternal. Bentuknya business intelligence (memindai lingkungan untuk menemukan pola dan tren) dan upaya memengaruhi lingkungan, misalnya lewat lobi [hal. 64–66]."
  },
  {
    "tm": 2,
    "topic": "Task vs General Environment",
    "difficulty": "basic",
    "q": "Menurut Exhibit 2.1, labor market termasuk ke dalam...",
    "options": [
      "General environment, dimensi economic",
      "Task environment",
      "General environment, dimensi sociocultural",
      "Internal environment"
    ],
    "answer": 1,
    "explanation": "Task environment (memengaruhi langsung, transaksi sehari-hari) terdiri atas customers, competitors, suppliers, dan labor market. General environment (tidak langsung) terdiri atas enam dimensi: international, technological, sociocultural, economic, legal–political, dan natural [hal. 54–55, 57]."
  },
  {
    "tm": 2,
    "topic": "High-Performance Culture",
    "difficulty": "advanced",
    "q": "Pada Exhibit 2.7, high-performance culture berada di kuadran...",
    "options": [
      "Kuadran A: kinerja bisnis tinggi, nilai budaya rendah",
      "Kuadran C: kinerja bisnis rendah, nilai budaya rendah",
      "Kuadran B: kinerja bisnis tinggi dan nilai budaya tinggi",
      "Kuadran D: kinerja bisnis rendah, nilai budaya tinggi"
    ],
    "answer": 2,
    "explanation": "Perusahaan yang sukses di dunia turbulen menilai dan memberi imbalan atas perhatian pada nilai budaya dan kinerja bisnis sekaligus. Kuadran A sulit bertahan karena \"lem\" nilai bersama hilang; kuadran D (contoh LEGO 1990-an) punya budaya kuat tetapi tidak terkait hasil bisnis [hal. 75–77]."
  },
  {
    "tm": 3,
    "topic": "Dimensi Nilai Hofstede",
    "difficulty": "medium",
    "q": "Masyarakat di mana bawahan sangat menghormati instruksi atasan tanpa berani mendebat dan menerima ketimpangan kekuasaan memiliki skor tinggi pada dimensi...",
    "options": [
      "Power distance (jarak kekuasaan)",
      "Individualism",
      "Uncertainty avoidance",
      "Masculinity"
    ],
    "answer": 0,
    "explanation": "Pada power distance tinggi, orang menerima ketimpangan kekuasaan antarlembaga, organisasi, dan orang; pada power distance rendah, orang mengharapkan kesetaraan kekuasaan. Contoh buku: tinggi di Malaysia, India, dan Filipina; rendah di Denmark, Israel, dan Selandia Baru [hal. 102–103]."
  },
  {
    "tm": 3,
    "topic": "Strategi Masuk Pasar Internasional",
    "difficulty": "medium",
    "q": "Pada Exhibit 3.3, urutan tiga strategi masuk arena internasional dari cost to enter dan kepemilikan operasi asing yang terendah ke tertinggi adalah...",
    "options": [
      "Partnerships → global outsourcing → exporting",
      "Global outsourcing → exporting → partnerships",
      "Exporting → partnerships → global outsourcing",
      "Exporting → global outsourcing → partnerships"
    ],
    "answer": 3,
    "explanation": "Exhibit 3.3: exporting (cost to enter dan ownership rendah), global outsourcing (menengah), partnerships (tinggi). Untuk soal tentang exhibit, jawab sesuai exhibit, walau teks menyebut partnership \"often the fastest, cheapest, and least risky way\" [hal. 97–98]."
  },
  {
    "tm": 3,
    "topic": "Tujuan Global Outsourcing",
    "difficulty": "medium",
    "q": "Sebuah perusahaan memindahkan pekerjaan pusat panggilan pelanggannya ke negara dengan tenaga kerja termurah. Strategi ini termasuk...",
    "options": [
      "Exporting, untuk mengembangkan pasar di luar negeri",
      "Global outsourcing (offshoring), untuk memperoleh sumber daya yang lebih murah",
      "Joint venture, untuk berbagi biaya dan risiko",
      "Alliance network, untuk mengembangkan pasar lewat kemitraan"
    ],
    "answer": 1,
    "explanation": "Organisasi punya dua pilihan besar di pasar internasional: mencari sumber daya yang lebih murah (global outsourcing) atau mengembangkan pasar lewat exporting dan partnerships. Contoh awal outsourcing di buku: tekstil, call center, dan pemrosesan kartu kredit [hal. 97–98]."
  },
  {
    "tm": 3,
    "topic": "Global Mind-Set",
    "difficulty": "advanced",
    "q": "Tiga dimensi global mind-set menurut Exhibit 3.2 adalah...",
    "options": [
      "Cognitive, emotional, dan physical",
      "Thinking, doing, dan socializing",
      "Cognitive, psychological, dan social",
      "Cognitive, psychological, dan physical"
    ],
    "answer": 2,
    "explanation": "Global mind-set: cognitive, psychological, social. Cultural intelligence (CQ) berbeda: cognitive, emotional, physical. \"Thinking\" dan \"doing\" adalah cara mengembangkan global mind-set [hal. 90–91, 106]."
  },
  {
    "tm": 3,
    "topic": "Membaca Exhibit 3.4 (Hofstede)",
    "difficulty": "advanced",
    "q": "Pada Exhibit 3.4, Amerika Serikat berperingkat 1 pada dimensi individualism. Artinya...",
    "options": [
      "Amerika Serikat adalah yang paling kolektivis di antara 10 negara",
      "Amerika Serikat adalah yang paling individualis di antara 10 negara dalam exhibit",
      "Skor individualisme Amerika Serikat adalah yang terendah",
      "Skor individualisme Amerika Serikat adalah 1 dari skala 100"
    ],
    "answer": 1,
    "explanation": "Angka pada Exhibit 3.4 adalah peringkat dari 10 negara, dan 1 berarti tertinggi. Individualism berarti kerangka sosial longgar, tiap orang diharapkan mengurus dirinya sendiri; collectivism berarti kerangka sosial erat [hal. 102–103]."
  },
  {
    "tm": 3,
    "topic": "Komunikasi High-Context",
    "difficulty": "medium",
    "q": "Dalam budaya high-context, makna komunikasi terutama diambil dari...",
    "options": [
      "Konteks: setting, status, dan perilaku nonverbal, sehingga hubungan dan kepercayaan didahulukan",
      "Kata-kata eksplisit, sehingga transaksi bisnis didahulukan",
      "Dokumen tertulis dan kontrak formal",
      "Terjemahan harfiah dari bahasa lawan bicara"
    ],
    "answer": 0,
    "explanation": "High-context: komunikasi berfungsi membangun hubungan sosial pribadi, makna berasal dari konteks (setting, status, perilaku nonverbal), contoh wilayah Asia dan Arab. Low-context: komunikasi untuk bertukar fakta dan informasi, makna terutama dari kata-kata, contoh Amerika dan Eropa Utara [hal. 105–106]."
  },
  {
    "tm": 3,
    "topic": "Filosofi Manajemen MNC",
    "difficulty": "medium",
    "q": "Filosofi manajemen MNC yang benar-benar berorientasi dunia dan tidak mengutamakan negara tertentu disebut...",
    "options": [
      "Ethnocentric, yang menekankan negara asal",
      "Polycentric, yang berorientasi pada pasar tiap negara tuan rumah",
      "Domestic mind-set",
      "Geocentric"
    ],
    "answer": 3,
    "explanation": "Tiga orientasi MNC: ethnocentric (negara asal), polycentric (pasar masing-masing negara tuan rumah), geocentric (berorientasi dunia). Jangan tertukar dengan ethnocentrism, yaitu sikap menganggap budaya sendiri lebih unggul [hal. 96, 102]."
  },
  {
    "tm": 4,
    "topic": "Pendekatan Etika Manajerial",
    "difficulty": "advanced",
    "q": "Manajer memutuskan menutup pabrik yang mencemari lingkungan karena memandang bahwa keselamatan hidup ribuan warga lebih utama daripada keuntungan 50 karyawan pabrik. Manajer ini menerapkan pendekatan...",
    "options": [
      "Individualism",
      "Moral-rights",
      "Justice",
      "Utilitarian"
    ],
    "answer": 3,
    "explanation": "Pendekatan utilitarian menyatakan perilaku moral menghasilkan kebaikan terbesar bagi jumlah orang terbesar; pengambil keputusan menimbang efek tiap alternatif pada semua pihak dan memilih yang mengoptimalkan manfaat bagi paling banyak orang [hal. 124]."
  },
  {
    "tm": 4,
    "topic": "Triple Bottom Line",
    "difficulty": "basic",
    "q": "Konsep Triple Bottom Line mengevaluasi keberhasilan organisasi bisnis berdasarkan keseimbangan antara...",
    "options": [
      "Price, Product, Promotion",
      "Planning, Priority, Performance",
      "Profit, People, Planet",
      "Policies, Procedures, Programs"
    ],
    "answer": 2,
    "explanation": "Triple bottom line mengukur kinerja sosial, lingkungan, dan keuangan organisasi; disebut juga three Ps: People, Planet, Profit. Ia mengukur kinerja, bukan sekadar donasi atau filantropi [hal. 135–136]."
  },
  {
    "tm": 4,
    "topic": "Tiga Domain Tindakan (Exh. 4.1)",
    "difficulty": "medium",
    "q": "Seorang manajer berkata, \"Kami tidak melanggar hukum, jadi keputusan ini pasti etis.\" Menurut Exhibit 4.1, pernyataan ini keliru karena...",
    "options": [
      "Etika selalu identik dengan kepatuhan pada hukum",
      "Hukum hanya satu dari tiga domain; domain etika (social standard) tidak diatur hukum khusus tetapi punya standar perilaku dari prinsip dan nilai bersama",
      "Domain etika hanya berlaku bagi pemerintah",
      "Tindakan yang legal otomatis termasuk free choice"
    ],
    "answer": 1,
    "explanation": "Exhibit 4.1 memuat tiga domain: codified law (legal standard), ethics (social standard), dan free choice (personal standard). Contoh buku yang tidak ilegal tetapi merusak reputasi: Facebook memanipulasi news feed untuk studi psikologi, dan Uber memesan lalu membatalkan perjalanan palsu untuk mengganggu Lyft [hal. 118–119]."
  },
  {
    "tm": 4,
    "topic": "Ethical Dilemma",
    "difficulty": "medium",
    "q": "Ciri utama ethical dilemma menurut buku adalah...",
    "options": [
      "Nilai-nilai saling bertentangan, dan benar-salah tidak dapat diidentifikasi dengan jelas (semua alternatif berpotensi berkonsekuensi negatif)",
      "Pilihan antara tindakan yang jelas benar dan yang jelas salah",
      "Pelanggaran hukum yang pasti dapat dituntut di pengadilan",
      "Keputusan pribadi yang tidak melibatkan pihak lain"
    ],
    "answer": 0,
    "explanation": "Buku memberi dua rumusan yang sejalan: situasi benar-salah ketika nilai-nilai saling bertentangan, dan situasi ketika semua alternatif berpotensi membawa konsekuensi negatif. Contoh: limbah pabrik yang mengancam kesehatan warga vs lapangan kerja dari pemberi kerja utama kota [hal. 122–124]."
  },
  {
    "tm": 4,
    "topic": "Jenis Justice",
    "difficulty": "advanced",
    "q": "Aturan dinyatakan dengan jelas serta ditegakkan secara konsisten dan tidak berpihak. Prinsip keadilan ini disebut...",
    "options": [
      "Distributive justice",
      "Compensatory justice",
      "Utilitarian justice",
      "Procedural justice"
    ],
    "answer": 3,
    "explanation": "Tiga jenis justice: distributive (perbedaan perlakuan tidak boleh didasarkan pada karakteristik sewenang-wenang), procedural (aturan dijalankan adil, jelas, konsisten), dan compensatory (pihak yang bertanggung jawab memberi kompensasi atas kerugian). Justice approach adalah pendekatan yang paling dekat dengan domain hukum [hal. 125]."
  },
  {
    "tm": 4,
    "topic": "Perkembangan Moral (Exh. 4.3)",
    "difficulty": "medium",
    "q": "Menurut buku, level perkembangan moral yang dicapai mayoritas manajer adalah...",
    "options": [
      "Preconventional",
      "Conventional",
      "Postconventional",
      "Preconventional yang berubah menjadi principled"
    ],
    "answer": 1,
    "explanation": "Exhibit 4.3 menampilkan versi sederhana dengan tiga level: preconventional (self-interest), conventional (societal expectations), postconventional (internal values). Mayoritas manajer berada di level conventional; hanya sekitar 20% orang dewasa Amerika mencapai postconventional [hal. 127–128]."
  },
  {
    "tm": 4,
    "topic": "Organisasi Etis (Exh. 4.6)",
    "difficulty": "medium",
    "q": "Pada Exhibit 4.6, code of ethics termasuk pendekatan...",
    "options": [
      "Structure-oriented, karena berupa mekanisme formal",
      "Structure-oriented, bersama ethics hotline dan chief ethics officer",
      "Values-oriented, bersama ethical leadership, volunteerism, dan ethics committee",
      "Bukan bagian dari upaya membangun organisasi etis"
    ],
    "answer": 2,
    "explanation": "Values-oriented: ethical leadership, volunteerism, code of ethics, ethics committee. Structure-oriented: chief ethics officer, ethics hotline, ethics training, support for whistle-blowers. Kode etik saja hanya sedikit berpengaruh; ia efektif bila didukung dan ditegakkan manajemen puncak [hal. 138–140]."
  },
  {
    "tm": 4,
    "topic": "Stakeholder (Exh. 4.4)",
    "difficulty": "medium",
    "q": "Pernyataan Business Roundtable akhir 2019 berfokus pada lima stakeholder utama. Manakah daftar yang benar?",
    "options": [
      "Pelanggan, karyawan, pemasok, komunitas, dan pemegang saham",
      "Pelanggan, karyawan, pemasok, pesaing, dan pemegang saham",
      "Pemegang saham, kreditor, auditor, regulator, dan media",
      "Hanya pemegang saham, sebagai satu-satunya prioritas utama"
    ],
    "answer": 0,
    "explanation": "BRT menyebut pemegang saham setelah komitmen pada pelanggan, karyawan, pemasok, dan komunitas. Exhibit 4.4 menampilkan lima stakeholder itu (investors and shareholders, suppliers, customers, employees, communities). Catatan buku: teks hal. 132 menyebut empat primary stakeholders dan komunitas sebagai \"another important stakeholder\" [hal. 131–133]."
  },
  {
    "tm": 5,
    "topic": "Tingkatan Goal dan Plan",
    "difficulty": "medium",
    "q": "Rencana tindakan yang disusun oleh manajer tingkat menengah (middle managers) untuk mengalokasikan anggaran divisi selama satu tahun ke depan dikategorikan sebagai...",
    "options": [
      "Strategic plan",
      "Operational plan",
      "Tactical plan",
      "Mission statement"
    ],
    "answer": 2,
    "explanation": "Exhibit 5.1: strategic plans disusun senior management, umumnya jangka panjang (dua sampai lima tahun); tactical plans disusun middle management dengan horizon sekitar satu tahun untuk menjalankan strategic plan; operational plans disusun lower management untuk departemen dan individu [hal. 152–154]."
  },
  {
    "tm": 5,
    "topic": "Karakteristik Goal Efektif",
    "difficulty": "basic",
    "q": "Menurut Exhibit 5.4, karakteristik goal efektif yang disebut sebagai syarat pertama dan terpenting adalah...",
    "options": [
      "Linked to rewards",
      "Specific and measurable",
      "Defined time period",
      "Cover as many performance areas as possible"
    ],
    "answer": 1,
    "explanation": "Lima karakteristik goal efektif: specific and measurable; defined time period; cover key result areas; challenging but realistic; linked to rewards. Buku menyebut specific and measurable sebagai yang pertama dan terpenting, dan menegaskan kesalahan terbesar adalah mencoba mencapai terlalu banyak goal terlalu cepat [hal. 160–161]."
  },
  {
    "tm": 5,
    "topic": "Management by Objectives (MBO)",
    "difficulty": "medium",
    "q": "Karakteristik esensial dari metode Management by Objectives (MBO) yang membedakannya dari penetapan sasaran tradisional adalah...",
    "options": [
      "Sasaran ditentukan sepihak oleh direktur utama tanpa kompromi",
      "Evaluasi kerja hanya dilakukan setiap lima tahun sekali",
      "Penilaian kinerja kuantitatif ditiadakan",
      "Sasaran ditetapkan secara partisipatif bersama antara atasan dan bawahan"
    ],
    "answer": 3,
    "explanation": "MBO adalah sistem ketika manajer dan karyawan menetapkan goal untuk setiap departemen, proyek, dan orang, lalu memakainya untuk memantau kinerja. Empat langkah (Exh. 5.5): set goals, develop action plans, review progress, appraise overall performance, lalu kembali ke langkah 1 [hal. 161–162]."
  },
  {
    "tm": 5,
    "topic": "Standing Plans",
    "difficulty": "medium",
    "q": "Pedoman umum yang memberikan batasan bagi pengambilan keputusan rutin karyawan (seperti \"Perusahaan tidak menerima pengembalian barang tanpa struk belanja\") merupakan contoh dari...",
    "options": [
      "Kebijakan (policy), sebuah standing plan",
      "Program",
      "Proyek",
      "Anggaran"
    ],
    "answer": 0,
    "explanation": "Buku memberi contoh standing plans berupa kebijakan yang berlaku terus-menerus, misalnya larangan merokok di seluruh taman hiburan Disney dan kebijakan YouTube terhadap video ekstremis. Buku hanya memberi contoh standing plan dan menyebut single-use plans sekilas [hal. 154, 163–164]."
  },
  {
    "tm": 5,
    "topic": "Scenario Building",
    "difficulty": "advanced",
    "q": "Ketika manajemen menyusun simulasi dampak bisnis jika terjadi krisis geopolitik, inflasi 20%, atau lonjakan harga bahan bakar, teknik yang digunakan adalah...",
    "options": [
      "Single-use planning",
      "Scenario building",
      "Operational scheduling",
      "Management by means"
    ],
    "answer": 1,
    "explanation": "Scenario building adalah perluasan contingency planning: melihat tren dan diskontinuitas saat ini lalu memvisualisasikan kemungkinan masa depan, biasanya dua sampai lima skenario dari yang paling optimistis sampai paling pesimistis. Contingency planning berfokus pada respons untuk skenario terburuk [hal. 165–167]."
  },
  {
    "tm": 5,
    "topic": "Porter Five Forces",
    "difficulty": "medium",
    "q": "Pembeli mobil dapat mencari harga grosir, spesifikasi, catatan perbaikan, dan riwayat kecelakaan lewat internet. Menurut Exhibit 5.11, internet menggeser kekuatan persaingan ke arah...",
    "options": [
      "Potential new entrants",
      "Bargaining power of suppliers",
      "Threat of substitute products",
      "Bargaining power of buyers"
    ],
    "answer": 3,
    "explanation": "Lima kekuatan Porter: potential new entrants, bargaining power of buyers, bargaining power of suppliers, threat of substitute products, rivalry among competitors. Pelanggan yang terinformasi menjadi pelanggan yang berdaya; internet shifts greater power to end consumers [hal. 182–183]."
  },
  {
    "tm": 5,
    "topic": "Strategi Kompetitif Porter",
    "difficulty": "medium",
    "q": "Perusahaan membedakan produk atau jasanya dari pesaing lewat iklan kreatif, fitur khas, layanan istimewa, atau teknologi baru (contoh di buku: Apple, Tesla, Gore-Tex). Strategi Porter yang dipakai adalah...",
    "options": [
      "Cost leadership",
      "Focused cost leadership",
      "Differentiation",
      "Related diversification"
    ],
    "answer": 2,
    "explanation": "Differentiation mengurangi persaingan dan ancaman substitusi karena pelanggan loyal pada merek, tetapi butuh riset, desain, iklan, dan karyawan kreatif. Cost leadership mengejar biaya internal rendah, dan tidak selalu berarti harga termurah [hal. 184–185]."
  },
  {
    "tm": 5,
    "topic": "Matriks BCG",
    "difficulty": "advanced",
    "q": "Unit bisnis dengan pangsa pasar besar di industri yang matang dan tumbuh lambat, sehingga tidak lagi memerlukan investasi besar dan kasnya \"diperah\" untuk bisnis lain, dalam BCG matrix (Exhibit 5.10) disebut...",
    "options": [
      "Cash cow",
      "Star",
      "Bright prospect",
      "Dog"
    ],
    "answer": 0,
    "explanation": "Sumbu BCG: business growth rate dan market share. Star (pangsa besar, industri tumbuh cepat), cash cow (pangsa besar, industri matang), bright prospect (pangsa kecil, industri baru tumbuh cepat), dog (pangsa kecil, pasar lambat). Kas cash cow dipakai untuk membiayai bright prospects dan stars [hal. 180]."
  },
  {
    "tm": 5,
    "topic": "Analisis SWOT",
    "difficulty": "basic",
    "q": "Teknologi mesin produksi yang usang dan pergantian karyawan (turnover) yang tinggi dalam matriks SWOT dikategorikan sebagai...",
    "options": [
      "Strengths",
      "Weaknesses",
      "Opportunities",
      "Threats"
    ],
    "answer": 1,
    "explanation": "Strengths dan weaknesses adalah karakteristik internal (weaknesses menghambat atau membatasi kinerja); opportunities dan threats adalah karakteristik lingkungan eksternal. Sumber informasi internal antara lain internal audit atas pemasaran, keuangan, produksi, dan R&D serta karakteristik SDM [hal. 176–178]."
  },
  {
    "tm": 6,
    "topic": "Model Administratif",
    "difficulty": "medium",
    "q": "Konsep \"satisficing\" yang dikemukakan Herbert A. Simon merujuk pada kecenderungan pengambil keputusan untuk...",
    "options": [
      "Mencari alternatif solusi terbaik mutlak dari seluruh kemungkinan",
      "Menyerahkan keputusan kepada undian acak",
      "Memilih alternatif pertama yang memenuhi kriteria keputusan minimal",
      "Menunda keputusan hingga data 100% lengkap"
    ],
    "answer": 2,
    "explanation": "Satisficing: manajer memilih alternatif pertama yang memenuhi kriteria minimal dan tidak mengejar semua alternatif, karena waktu dan biaya informasi lengkap tidak sepadan. Bounded rationality: orang punya batas seberapa rasional mereka bisa bertindak [hal. 201]."
  },
  {
    "tm": 6,
    "topic": "Kondisi Keputusan",
    "difficulty": "medium",
    "q": "Ketika manajer memahami tujuan keputusan dengan jelas dan memiliki informasi untuk memperkirakan probabilitas berhasil atau gagalnya setiap alternatif, kondisi keputusan tersebut berada dalam...",
    "options": [
      "Certainty (kepastian)",
      "Uncertainty (ketidakpastian)",
      "Ambiguity (ambiguitas)",
      "Risk (risiko)"
    ],
    "answer": 3,
    "explanation": "Risk: tujuan jelas dan informasi baik tersedia, tetapi hasil tiap alternatif mengandung peluang rugi atau gagal, dan manajer bisa memperkirakan probabilitasnya. Pada uncertainty manajer tahu tujuan tetapi informasi tentang alternatif dan masa depan tidak lengkap [hal. 196–197]."
  },
  {
    "tm": 6,
    "topic": "Escalating Commitment",
    "difficulty": "advanced",
    "q": "Manajer bersikeras mengucurkan dana tambahan Rp10 miliar ke proyek perangkat lunak yang sudah terbukti gagal hanya karena perusahaan telah menghabiskan Rp50 miliar sebelumnya. Perilaku terus menanamkan sumber daya pada solusi yang gagal ini disebut...",
    "options": [
      "Escalating commitment",
      "Confirmation bias",
      "Anchoring bias",
      "Overconfidence"
    ],
    "answer": 0,
    "explanation": "Escalating commitment adalah kecenderungan terus menanamkan waktu dan uang pada solusi walau bukti kuat menunjukkan solusi itu tidak tepat. Ia berasal dari loss aversion (bereaksi lebih kuat pada potensi rugi daripada potensi untung yang setara). Obatnya: menjaga objektivitas dan tahu kapan berhenti (know when to bail) [hal. 214, 219]."
  },
  {
    "tm": 6,
    "topic": "Keputusan Kelompok",
    "difficulty": "advanced",
    "q": "Peran anggota tim yang ditugaskan secara resmi untuk menantang asumsi mayoritas, mengkritik rencana kerja, dan mencari celah kelemahan keputusan disebut...",
    "options": [
      "Groupthink enforcer",
      "Resource allocator",
      "Devil's advocate",
      "Figurehead"
    ],
    "answer": 2,
    "explanation": "Devil's advocate adalah orang yang ditugasi menantang asumsi dan pernyataan kelompok, sehingga kelompok memikirkan ulang pendekatannya dan tidak terburu-buru menyimpulkan. Ia juga membantu menghindari groupthink [hal. 218–219]."
  },
  {
    "tm": 6,
    "topic": "Model Politik",
    "difficulty": "medium",
    "q": "Model pengambilan keputusan politik (political model) paling sering digunakan dalam organisasi ketika...",
    "options": [
      "Sasaran organisasi disepakati bersama secara mutlak dan data serba lengkap",
      "Manajer punya kepentingan berbeda, tujuan tidak disepakati, dan keputusan lahir dari tawar-menawar koalisi",
      "Keputusan diambil secara terkomputerisasi otomatis",
      "Tidak ada batasan anggaran sama sekali"
    ],
    "answer": 1,
    "explanation": "Political model berguna untuk keputusan nonprogrammed ketika kondisi tidak pasti, informasi terbatas, dan manajer tidak sepakat tentang tujuan atau tindakan. Keputusan adalah hasil tawar-menawar dan diskusi di antara anggota koalisi [hal. 203–204]."
  },
  {
    "tm": 6,
    "topic": "Premortem dan Postmortem",
    "difficulty": "advanced",
    "q": "Sebuah tim hampir memutuskan hal penting tetapi belum resmi berkomitmen. Anggota sengaja membayangkan keputusan itu sudah dijalankan dan gagal total, lalu mencari penyebab kegagalannya. Teknik ini disebut...",
    "options": [
      "Postmortem (after-action review)",
      "Devil's advocate",
      "5 Whys",
      "Premortem"
    ],
    "answer": 3,
    "explanation": "Premortem (usulan Gary Klein) dilakukan sebelum resmi berkomitmen dan membantu mengatasi overconfidence, confirmation bias, dan groupthink. Postmortem atau after-action review dilakukan setelah keputusan dijalankan untuk belajar dari hasilnya [hal. 219]."
  },
  {
    "tm": 6,
    "topic": "Ambiguity",
    "difficulty": "medium",
    "q": "Kondisi keputusan yang PALING sulit, karena tujuan atau masalahnya sendiri tidak jelas dan informasi hasil tidak tersedia, adalah...",
    "options": [
      "Ambiguity",
      "Certainty",
      "Risk",
      "Uncertainty"
    ],
    "answer": 0,
    "explanation": "Exhibit 6.1 mengurutkan kondisi menurut kemungkinan gagal: certainty, risk, uncertainty, ambiguity. Pada ambiguity, tujuan atau masalah tidak jelas dan alternatif sulit didefinisikan; pada uncertainty manajer tahu tujuannya [hal. 196–198]."
  },
  {
    "tm": 6,
    "topic": "Normative vs Descriptive",
    "difficulty": "medium",
    "q": "Menurut buku, model klasik bersifat normative. Model yang bersifat descriptive dan mengakui keterbatasan manusia serta lingkungan adalah...",
    "options": [
      "Model klasik yang dimodifikasi",
      "Model programmed",
      "Model administratif",
      "Model rasional ekonomi murni"
    ],
    "answer": 2,
    "explanation": "Model klasik mendefinisikan bagaimana pengambil keputusan seharusnya memutuskan, bukan cara manajer benar-benar memutuskan. Model administratif menggambarkan cara manajer benar-benar memutuskan dalam situasi kompleks [hal. 200–201]."
  },
  {
    "tm": 6,
    "topic": "Enam Langkah Keputusan",
    "difficulty": "medium",
    "q": "Urutan enam langkah proses pengambilan keputusan manajerial pada Exhibit 6.3 adalah...",
    "options": [
      "Recognition → diagnosis → development of alternatives → selection → implementation → evaluation and feedback",
      "Diagnosis → recognition → selection → development of alternatives → implementation → evaluation",
      "Recognition → development of alternatives → diagnosis → selection → evaluation → implementation",
      "Recognition → diagnosis → selection → development of alternatives → implementation → evaluation"
    ],
    "answer": 0,
    "explanation": "Enam langkah berlaku untuk programmed maupun nonprogrammed decisions dan untuk ketiga model. Recognition: menyadari problem atau opportunity; diagnosis: menganalisis penyebab. Langkah 6 kembali ke langkah 1 [hal. 205–209]."
  },
  {
    "tm": 6,
    "topic": "Gaya Keputusan",
    "difficulty": "medium",
    "q": "Gaya keputusan yang menyukai solusi sederhana dan jelas, memutuskan cepat, dan hanya mempertimbangkan satu atau dua alternatif adalah gaya...",
    "options": [
      "Analytical",
      "Conceptual",
      "Behavioral",
      "Directive"
    ],
    "answer": 3,
    "explanation": "Empat gaya (Exhibit 6.5): directive (solusi sederhana, cepat), analytical (data sebanyak mungkin), conceptual (lebih berorientasi sosial dan kreatif), behavioral (kepedulian mendalam pada orang). Manajer efektif berpindah gaya sesuai situasi [hal. 212–213]."
  },
  {
    "tm": 7,
    "topic": "Struktur Matriks",
    "difficulty": "medium",
    "q": "Karakteristik paling unik dari struktur organisasi matriks (matrix structure) adalah...",
    "options": [
      "Tidak adanya rantai komando sama sekali",
      "Karyawan melapor kepada dua atasan sekaligus (dual lines of authority)",
      "Setiap divisi berdiri sendiri tanpa koordinasi",
      "Rentang kendali tidak terbatas"
    ],
    "answer": 1,
    "explanation": "Matrix menggabungkan aspek struktur functional dan divisional secara bersamaan, dengan dua garis otoritas: hierarki fungsional vertikal dan divisional horizontal. Akibatnya matrix melanggar unity of command dan menghasilkan two-boss employees [hal. 242–244]."
  },
  {
    "tm": 7,
    "topic": "Rentang Kendali",
    "difficulty": "medium",
    "q": "Organisasi dengan struktur datar (flat structure) ditandai oleh...",
    "options": [
      "Banyak tingkatan hierarki dan span of management yang sempit",
      "Pengawasan ketat berjenjang",
      "Sedikit tingkatan hierarki dan span of management yang lebar",
      "Sentralisasi wewenang mutlak di direktur utama"
    ],
    "answer": 2,
    "explanation": "Flat structure: span lebar, tersebar secara horizontal, dan lebih sedikit level hierarki. Tall structure: span keseluruhan sempit dan lebih banyak level hierarki. Span yang lebih lebar memudahkan delegasi [hal. 233–234]."
  },
  {
    "tm": 7,
    "topic": "Struktur Fungsional",
    "difficulty": "basic",
    "q": "Menurut Exhibit 7.10, kelemahan struktur fungsional (functional structure) adalah...",
    "options": [
      "Duplikasi sumber daya antardivisi dan biaya tinggi",
      "Frustrasi dan kebingungan akibat dual chain of command",
      "Kontrol langsung yang lemah karena mitra bertindak demi kepentingannya sendiri",
      "Komunikasi antardepartemen fungsional buruk, respons terhadap perubahan eksternal lambat, dan keputusan menumpuk di puncak"
    ],
    "answer": 3,
    "explanation": "Exhibit 7.10, functional: kelebihan berupa penggunaan sumber daya efisien, skala ekonomi, dan spesialisasi keterampilan; kelemahan berupa komunikasi antardepartemen yang buruk, respons lambat, dan keputusan menumpuk di puncak. Duplikasi adalah kelemahan divisional, dual chain of command kelemahan matrix, kurangnya kendali kelemahan virtual network [hal. 238–240, 250]."
  },
  {
    "tm": 7,
    "topic": "Kesatuan Komando",
    "difficulty": "basic",
    "q": "Prinsip yang menyatakan bahwa setiap karyawan bertanggung jawab kepada hanya satu atasan disebut...",
    "options": [
      "Unity of command (kesatuan komando)",
      "Scalar principle",
      "Division of labor",
      "Span of management"
    ],
    "answer": 0,
    "explanation": "Chain of command didasari dua prinsip: unity of command (setiap karyawan bertanggung jawab kepada hanya satu atasan) dan scalar principle (garis otoritas yang jelas dan mencakup semua karyawan sampai ke puncak) [hal. 230]."
  },
  {
    "tm": 7,
    "topic": "Desentralisasi",
    "difficulty": "medium",
    "q": "Faktor manakah yang mendorong organisasi menerapkan DESENTRALISASI wewenang yang lebih luas?",
    "options": [
      "Organisasi menghadapi krisis kelangsungan hidup mendesak",
      "Lingkungan eksternal sangat dinamis dan menuntut respons cepat dari staf garda depan",
      "Keputusan bersifat rutin dan tidak memiliki konsekuensi biaya besar",
      "Bawahan belum memiliki kompetensi dan tidak ingin memikul tanggung jawab"
    ],
    "answer": 1,
    "explanation": "Perubahan dan ketidakpastian lingkungan yang lebih besar biasanya terkait dengan decentralization (contoh: Mississippi Power setelah Badai Katrina). Pilihan harus sesuai strategi, dan saat krisis authority bisa disentralisasi di puncak (contoh: Boeing) [hal. 237]."
  },
  {
    "tm": 7,
    "topic": "Accountability",
    "difficulty": "medium",
    "q": "Kewajiban orang yang memegang authority dan responsibility untuk melaporkan dan mempertanggungjawabkan hasil tugasnya kepada atasan di chain of command disebut...",
    "options": [
      "Accountability",
      "Responsibility",
      "Delegation",
      "Line authority"
    ],
    "answer": 0,
    "explanation": "Responsibility adalah kewajiban menjalankan tugas yang diberikan (\"sisi lain dari koin authority\"). Accountability menyelaraskan authority dan responsibility. Delegation adalah proses memindahkan authority dan responsibility ke posisi di bawahnya [hal. 231]."
  },
  {
    "tm": 7,
    "topic": "Line dan Staff Authority",
    "difficulty": "medium",
    "q": "Departemen keuangan sebuah perusahaan manufaktur berkoordinasi dengan line departments tentang formulir akuntansi untuk pembelian peralatan. Departemen keuangan itu menjalankan...",
    "options": [
      "Line authority: hak mengarahkan dan mengendalikan bawahan langsung",
      "Staff authority: hak memberi nasihat, rekomendasi, dan konseling (hubungan komunikasi)",
      "Unity of command atas departemen line",
      "Delegasi authority formal dari manajer line"
    ],
    "answer": 1,
    "explanation": "Line authority adalah authority formal untuk mengarahkan dan mengendalikan bawahan langsung. Staff authority lebih sempit: hak memberi nasihat, rekomendasi, dan konseling di bidang keahlian staf, dan merupakan hubungan komunikasi [hal. 231–232]."
  },
  {
    "tm": 7,
    "topic": "Teknologi Woodward",
    "difficulty": "advanced",
    "q": "Menurut Exhibit 7.15 (Joan Woodward), teknologi produksi yang memiliki centralization tinggi dan span supervisor terbesar (48) adalah...",
    "options": [
      "Small batch production",
      "Continuous process production",
      "Ketiga tipe sama besar",
      "Mass production"
    ],
    "answer": 3,
    "explanation": "Centralization tinggi hanya pada mass production, yang overall structure-nya mechanistic. Small batch (span 23) dan continuous process (span 15) berstruktur organic dengan centralization rendah [hal. 258–260]."
  },
  {
    "tm": 7,
    "topic": "Project Manager",
    "difficulty": "advanced",
    "q": "Project manager berbeda dari anggota tim yang dikoordinasikannya karena ia...",
    "options": [
      "Anggota salah satu departemen dan menjadi atasan seluruh anggota tim",
      "Bagian dari relational coordination yang tidak memiliki peran formal",
      "Berada di luar departemen yang dikoordinasikan dan berwenang atas proyek, bukan atas orang-orangnya",
      "Menggantikan line authority manajer departemen"
    ],
    "answer": 2,
    "explanation": "Project manager berada di luar departemen yang dikoordinasikan; garis putus-putus pada Exhibit 7.12 menunjukkan tanggung jawab koordinasi dan komunikasi, sedangkan manajer departemen tetap memegang line authority atas karyawan fungsionalnya [hal. 253]."
  }
];

export const MNM101_QUIZ_UAS: QuizQuestion[] = [
  {
    "id": "mnu108-uas-tm09-01",
    "tm": 9,
    "topic": "Innovation vs creativity",
    "difficulty": "basic",
    "q": "Apa pembeda paling tepat antara creativity dan organizational innovation?",
    "options": [
      "Creativity menghasilkan ide; innovation mencakup penciptaan sekaligus penerapannya.",
      "Creativity menerapkan ide; innovation hanya menyusun alternatif tanpa pemakaian.",
      "Creativity mengadopsi teknologi luar; innovation hanya memperbaiki gagasan lama.",
      "Creativity mengubah seluruh budaya; innovation hanya mengubah sikap individu."
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 268, 273, 285].",
    "sourceAnchors": [
      "Ch. 8; [hal. 268, 273, 285]; PDF 296, 301, 313"
    ],
    "explanation": "Manfaat organisasi menuntut ide digunakan. Creativity menjelaskan lahirnya gagasan, sedangkan innovation juga memuat implementation. Alternatif lain: Pilihan lain membalik hubungan, mempersempit asal ide atau membatasi jenis perubahan. [hal. 268, 273, 285]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-02",
    "tm": 9,
    "topic": "Reverse innovation",
    "difficulty": "basic",
    "q": "Dalam reverse innovation, bagaimana arah utama penyebaran produk yang dijelaskan buku?",
    "options": [
      "Dikembangkan untuk pasar negara maju, lalu dipindahkan ke pasar berkembang.",
      "Dikembangkan untuk pasar berkembang, lalu disesuaikan untuk pasar negara maju.",
      "Dikembangkan hanya untuk unit internal, lalu dihentikan saat mencapai pasar.",
      "Dikembangkan oleh marketing dahulu, lalu diserahkan kepada research perusahaan."
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 270].",
    "sourceAnchors": [
      "Ch. 8; [hal. 270]; PDF 298"
    ],
    "explanation": "Arah ini membalik pola tradisional inovasi dari negara makmur ke pasar berkembang. Alternatif lain: Pola tradisional mempunyai arah kebalikan; dua pilihan terakhir membahas fungsi internal, bukan geografi pasar. [hal. 270]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-03",
    "tm": 9,
    "topic": "Ambidextrous approach",
    "difficulty": "medium",
    "q": "Mengapa organisasi ambidextrous dapat memakai ruang eksplorasi yang longgar dan penerapan yang lebih terstruktur?",
    "options": [
      "Penciptaan ide dan implementasi membutuhkan kebebasan yang sama pada semua kegiatan.",
      "Penciptaan ide harus terpusat ketat, sedangkan implementasi harus tanpa standar kerja.",
      "Penciptaan ide dan implementasi mempunyai kebutuhan struktur serta rutinitas berbeda.",
      "Penciptaan ide dilakukan marketing saja, sedangkan implementasi dilakukan research saja."
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 270–271].",
    "sourceAnchors": [
      "Ch. 8; [hal. 270–271]; PDF 298–299"
    ],
    "explanation": "Exploration mendukung kreativitas/eksperimen; exploitation memakai kemampuan dan rutinitas untuk menjalankan ide. Alternatif lain: Kesamaan struktur mengabaikan kebutuhan yang berbeda; pembalikan dan pembatasan departemen tidak sesuai model. [hal. 270–271]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-04",
    "tm": 9,
    "topic": "Three innovation strategies",
    "difficulty": "medium",
    "q": "Sebuah proyek mempunyai ide baru, tetapi antarfungsi tidak bertukar informasi dan tidak ada pemilik gagasan. Apa diagnosis menurut Exhibit 8.1?",
    "options": [
      "Collaboration telah berjalan; discovery dan penciptaan gagasan masih belum terjadi.",
      "Innovation roles telah lengkap; discovery saja yang menentukan keberhasilan proyek.",
      "Ketiga strategi telah berjalan; penerapan otomatis mengikuti adanya ide baru saja.",
      "Discovery telah berjalan; collaboration dan peran/struktur implementasi masih lemah."
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 272].",
    "sourceAnchors": [
      "Ch. 8; [hal. 272]; PDF 300"
    ],
    "explanation": "Tiga strategi saling melengkapi. Kehadiran gagasan belum menggantikan koordinasi dan dukungan untuk membawanya ke penerapan. Alternatif lain: Pilihan lain mengabaikan bukti tentang ide, memusatkan keberhasilan pada discovery atau menganggap implementasi otomatis. [hal. 272]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-05",
    "tm": 9,
    "topic": "Idea champion",
    "difficulty": "medium",
    "q": "Dalam contoh L'Oréal, peran staf yang terus memperjuangkan pengembangan foundation sesuai kebutuhan pelanggan paling dekat dengan...",
    "options": [
      "Idea champion: orang yang mendorong penerimaan serta pengembangan perubahan.",
      "Idea incubator: program organisasi yang menyediakan ruang pengembangan ide.",
      "New-venture fund: sumber pembiayaan yang mendanai usulan produk perusahaan.",
      "Innovation by acquisition: pembelian usaha lain untuk mendapatkan teknologinya."
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 280–281].",
    "sourceAnchors": [
      "Ch. 8; [hal. 280–281]; PDF 308–309"
    ],
    "explanation": "Peran orang yang mendukung dan memperjuangkan gagasan sesuai definisi idea champion. Alternatif lain: Incubator dan fund adalah mekanisme dukungan; acquisition adalah cara memperoleh inovasi melalui pembelian usaha. [hal. 280–281]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-06",
    "tm": 9,
    "topic": "Organization development",
    "difficulty": "medium",
    "q": "Apa ciri survey-feedback sebagai teknik OD?",
    "options": [
      "Peserta dari seluruh lingkungan dihimpun untuk membuat keputusan sistem secara serentak.",
      "Pendapat pegawai dikumpulkan, dibagikan kembali dan dipakai memecahkan masalah.",
      "Anggota kelompok berlatih komunikasi serta tujuan bersama melalui kegiatan pembentukan tim.",
      "Manajemen memaksa prosedur baru dan memberi sanksi sebelum pendapat pegawai dikumpulkan."
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 283–284].",
    "sourceAnchors": [
      "Ch. 8; [hal. 283–284]; PDF 311–312"
    ],
    "explanation": "Survey bukan akhir kegiatan. Feedback dan pemecahan masalah berdasarkan data adalah bagian penting teknik ini. Alternatif lain: Kelompok besar dan team building menggambarkan teknik lain; paksaan sepihak tidak mendefinisikan survey-feedback. [hal. 283–284]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-07",
    "tm": 9,
    "topic": "Lewin refreezing",
    "difficulty": "advanced",
    "q": "Sesudah pelatihan, perilaku baru dievaluasi, diberi penghargaan, dan dimasukkan ke kebiasaan kerja. Tahap mana yang paling tepat?",
    "options": [
      "Unfreezing: menjelaskan kesenjangan dan membuat pegawai mengenali kebutuhan berubah.",
      "Discovery: menciptakan gagasan produk baru melalui kebebasan bereksperimen.",
      "Refreezing: memperkuat dan melembagakan perilaku serta nilai yang baru.",
      "Changing: baru mulai mencoba perilaku dan mempelajari keterampilan yang dibutuhkan."
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 285–286].",
    "sourceAnchors": [
      "Ch. 8; [hal. 285–286]; PDF 313–314"
    ],
    "explanation": "Tindakan dalam soal menekankan penguatan serta integrasi perubahan menjadi praktik normal. Alternatif lain: Pilihan lain berkaitan dengan kesiapan, penciptaan gagasan atau tahap awal belajar, bukan penguatan pascapenerapan. [hal. 285–286]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm09-08",
    "tm": 9,
    "topic": "Chopper dan resistensi",
    "difficulty": "advanced",
    "q": "Apa manfaat utama task force lintas departemen bagi MRP Chopper's?",
    "options": [
      "Memastikan semua perkiraan penghematan menjadi kas tanpa memeriksa alur kerja pengguna.",
      "Menghilangkan kebutuhan komunikasi karena semua fungsi sudah hadir dalam daftar anggota.",
      "Memindahkan semua keputusan teknis kepada CFO agar fungsi operasi tidak ikut merancang.",
      "Menggabungkan pengetahuan pengguna, menilai risiko dan membangun dukungan penerapan."
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 289–290, 295–296].",
    "sourceAnchors": [
      "Ch. 8; [hal. 289–290, 295–296]; PDF 317–318, 323–324"
    ],
    "explanation": "Task force menjawab kurangnya informasi dan keterlibatan serta mendukung horizontal collaboration dan participation. Alternatif lain: Penghematan tetap perkiraan; keanggotaan tidak menjamin komunikasi; keputusan sepihak mengabaikan fungsi yang terdampak. [hal. 289–290, 295–296]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-01",
    "tm": 10,
    "topic": "Strategic HRM",
    "difficulty": "basic",
    "q": "Apa makna matching process dalam HRM strategis?",
    "options": [
      "Strategi, kebutuhan organisasi dan pendekatan human capital diselaraskan secara terpadu.",
      "Strategi dipilih setelah semua kandidat ditempatkan tanpa melihat kompetensi pekerjaan.",
      "Kebijakan HR ditetapkan hanya untuk administrasi gaji dan data attendance pegawai.",
      "Keberhasilan strategi ditentukan mesin saja, sementara kemampuan pegawai dianggap seragam."
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 300–304].",
    "sourceAnchors": [
      "Ch. 9; [hal. 300–304]; PDF 328–332"
    ],
    "explanation": "Strategi hanya dapat berjalan dengan orang dan sistem HR yang sesuai. Alternatif lain: Penempatan tanpa kebutuhan, reduksi administrasi dan pengabaian kemampuan tidak mencerminkan HRM strategis. [hal. 300–304]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-02",
    "tm": 10,
    "topic": "Social contract",
    "difficulty": "basic",
    "q": "Apa kewajiban perusahaan dalam aspirasi social contract baru pada Exhibit 9.5?",
    "options": [
      "Menjamin pegawai tetap pada tugas rutin yang sama sampai akhir masa kerja.",
      "Memberi kesempatan belajar, tugas menantang dan sumber daya untuk pengembangan.",
      "Menggantikan semua kesempatan pengembangan dengan janji loyalitas seumur hidup.",
      "Membatasi informasi dan kewenangan agar pegawai tidak terlibat perbaikan bisnis."
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 308–309].",
    "sourceAnchors": [
      "Ch. 9; [hal. 308–309]; PDF 336–337"
    ],
    "explanation": "Employability melibatkan upaya kedua pihak, dengan pegawai membangun kemampuan dan perusahaan membuka kesempatan. Alternatif lain: Pilihan lain mencerminkan kontrak lama atau mengabaikan peran perusahaan dalam pengembangan. [hal. 308–309]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-03",
    "tm": 10,
    "topic": "Recruiting and selection",
    "difficulty": "medium",
    "q": "Pasangan istilah mana yang paling tepat?",
    "options": [
      "Job description menjelaskan syarat pribadi; job specification menjelaskan sumber kandidat.",
      "Job description menetapkan benefit; job specification menetapkan urutan promosi karier.",
      "Job description menjelaskan tugas; job specification menjelaskan syarat kompetensi.",
      "Job description menetapkan hasil tes; job specification menetapkan jumlah kandidat pelamar."
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 313–320].",
    "sourceAnchors": [
      "Ch. 9; [hal. 313–320]; PDF 341–348"
    ],
    "explanation": "Job analysis menghasilkan informasi tugas serta persyaratan yang dibutuhkan untuk melakukan pekerjaan. Alternatif lain: Pilihan lain mencampur uraian pekerjaan dengan recruiting, rewards, promotion dan assessment. [hal. 313–320]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-04",
    "tm": 10,
    "topic": "Realistic job preview",
    "difficulty": "medium",
    "q": "Mengapa RJP menyajikan sisi positif sekaligus kesulitan pekerjaan?",
    "options": [
      "Agar semua kandidat menerima tawaran tanpa mempertimbangkan kebutuhan masing-masing.",
      "Agar wawancara dan job analysis dihapus karena seluruh informasi sudah lengkap.",
      "Agar perusahaan dapat menjamin tidak ada pegawai keluar selama kariernya berlangsung.",
      "Agar kandidat dan perusahaan menilai kecocokan berdasarkan ekspektasi yang realistis."
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 314].",
    "sourceAnchors": [
      "Ch. 9; [hal. 314]; PDF 342"
    ],
    "explanation": "RJP membantu self-selection dan fit dengan informasi lengkap. Alternatif lain: RJP tidak menjamin penerimaan/retensi semua orang serta tidak menggantikan keseluruhan proses seleksi. [hal. 314]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-05",
    "tm": 10,
    "topic": "Training vs development",
    "difficulty": "medium",
    "q": "Apa perbedaan training dan development menurut bab 9?",
    "options": [
      "Training menyiapkan tugas sekarang; development mengembangkan kemampuan karier lebih luas.",
      "Training menentukan bayaran; development hanya menetapkan nilai satu jabatan dalam organisasi.",
      "Training menilai ranking relatif; development hanya menetapkan calon yang perlu diberhentikan.",
      "Training memilih pelamar baru; development hanya memberi informasi pekerjaan sebelum seleksi."
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 321–325].",
    "sourceAnchors": [
      "Ch. 9; [hal. 321–325]; PDF 349–353"
    ],
    "explanation": "Perbedaan terletak pada fokus keterampilan tugas saat ini dan pertumbuhan kemampuan yang lebih luas. Alternatif lain: Pilihan lain adalah pay/evaluation, forced ranking atau recruiting/RJP. [hal. 321–325]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-06",
    "tm": 10,
    "topic": "Forced ranking",
    "difficulty": "medium",
    "q": "Apa risiko forced ranking yang relevan pada kasus Whether to Fire Employees?",
    "options": [
      "Penilaian relatif selalu menunjukkan apakah perusahaan mempunyai kas cukup untuk beroperasi.",
      "Persaingan antarpegawai dapat merusak kerja sama dan mengabaikan tujuan pengembangan.",
      "Posisi ranking otomatis mengukur kebutuhan setiap pekerjaan tanpa informasi dari unit kerja.",
      "Proporsi ranking memastikan semua pegawai memiliki peluang promosi dan hasil kerja yang sama."
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 324–325, 358].",
    "sourceAnchors": [
      "Ch. 9; [hal. 324–325, 358]; PDF 352–353, 386"
    ],
    "explanation": "Buku menjelaskan kritik pada morale dan teamwork. Ranking bukan pengganti data kebutuhan bisnis, kemampuan dan pengembangan. Alternatif lain: Pilihan lain memberi ranking kemampuan yang tidak dimilikinya, seperti memastikan cash flow atau kesetaraan hasil. [hal. 324–325, 358]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-07",
    "tm": 10,
    "topic": "Diversity and inclusion",
    "difficulty": "advanced",
    "q": "Sebuah organisasi memiliki pegawai beragam, tetapi hanya kelompok tertentu didengar. Apa diagnosis yang tepat?",
    "options": [
      "Inclusion sudah terpenuhi karena jumlah kelompok dalam workforce sudah beragam.",
      "Cognitive diversity pasti tidak ada karena semua anggota harus memikirkan hal yang sama.",
      "Diversity ada, tetapi inclusion perlu diperbaiki agar keunikan anggota dihargai.",
      "Discrimination pasti tidak dapat terjadi karena anggota kelompok berbeda telah direkrut."
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 335–342].",
    "sourceAnchors": [
      "Ch. 9; [hal. 335–342]; PDF 363–370"
    ],
    "explanation": "Komposisi bukan satu-satunya ukuran. Inclusion berhubungan dengan rasa diterima, dihargai dan dapat berkontribusi. Alternatif lain: Pilihan lain menganggap keberagaman komposisi menjamin inclusion, keseragaman pikiran atau tidak adanya diskriminasi. [hal. 335–342]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm10-08",
    "tm": 10,
    "topic": "Sponsor relationship",
    "difficulty": "advanced",
    "q": "Apa tindakan yang paling jelas membedakan sponsor dari mentor?",
    "options": [
      "Memberi petunjuk informal mengenai norma organisasi tanpa mengadvokasi kesempatan.",
      "Mengisi survei kepuasan untuk mengetahui rata-rata tingkat happiness seluruh pegawai.",
      "Mengumpulkan data alasan pegawai yang keluar untuk memperbaiki angka turnover organisasi.",
      "Aktif memperjuangkan akses pegawai ke proyek penting dan peluang kemajuan karier."
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 350].",
    "sourceAnchors": [
      "Ch. 9; [hal. 350]; PDF 378"
    ],
    "explanation": "Sponsor menggunakan posisi/hubungannya untuk mendukung advancement, sedangkan mentor terutama memberi bimbingan. Alternatif lain: Pilihan lain menggambarkan mentoring, tracking happiness atau exit interview. [hal. 350]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-01",
    "tm": 11,
    "topic": "Self-awareness",
    "difficulty": "basic",
    "q": "Seorang manajer merasa selalu mendengarkan, tetapi anggota mengatakan sering dipotong. Tindakan awal yang sesuai?",
    "options": [
      "Membandingkan feedback spesifik dengan refleksi perilaku diri",
      "Menolak feedback karena niatnya baik",
      "Menyimpulkan anggota memiliki kepribadian buruk",
      "Mengganti refleksi dengan tes kemampuan saja"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 362–363].",
    "sourceAnchors": [
      "Ch. 10; [hal. 362–363]; PDF 390–391"
    ],
    "explanation": "Feedback membantu melihat blind spots dan self-assessment memeriksa pola diri. Alternatif lain: niat tidak membuktikan dampak; label anggota dan tes kemampuan tidak memeriksa kebiasaan mendengarkan. [hal. 362–363]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-02",
    "tm": 11,
    "topic": "Attitudes",
    "difficulty": "basic",
    "q": "Pegawai puas dengan tugasnya namun tidak merasa loyal pada perusahaan. Kesimpulan yang tepat?",
    "options": [
      "Kedua sikap selalu identik",
      "Job satisfaction dan organizational commitment berbeda",
      "Pegawai pasti tidak produktif",
      "Trust tidak relevan bagi commitment"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 365–368].",
    "sourceAnchors": [
      "Ch. 10; [hal. 365–368]; PDF 393–396"
    ],
    "explanation": "Kepuasan mengarah pada pekerjaan, sedangkan commitment pada loyalitas/engagement dengan organisasi. Alternatif lain: kinerja belum diketahui dan trust dapat berkaitan dengan commitment. [hal. 365–368]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-03",
    "tm": 11,
    "topic": "Perception",
    "difficulty": "medium",
    "q": "Urutan model perception pada Exhibit 10.3 adalah…",
    "options": [
      "Observe → Organize → Screen",
      "Screen → Motivate → Reward",
      "Observe → Screen → Organize",
      "Encode → Channel → Decode"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 369].",
    "sourceAnchors": [
      "Ch. 10; [hal. 369]; PDF 397"
    ],
    "explanation": "Informasi diobservasi, disaring dan diorganisasi menjadi pola untuk penafsiran/respons. Alternatif lain: urutan kedua terbalik; motivasi dan komunikasi adalah model berbeda. [hal. 369]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-04",
    "tm": 11,
    "topic": "Attribution",
    "difficulty": "medium",
    "q": "Manajer menyebut keterlambatan anggota sebagai sifat malas, tetapi keterlambatannya sendiri sebagai akibat situasi. Kecenderungan ini?",
    "options": [
      "Emotional stability: kestabilan respons emosi",
      "Cognitive dissonance yang pasti terbukti",
      "Grit: ketekunan pada tujuan jangka panjang",
      "Fundamental attribution error"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 370–371].",
    "sourceAnchors": [
      "Ch. 10; [hal. 370–371]; PDF 398–399"
    ],
    "explanation": "Bias memberi bobot sifat pribadi bagi kegagalan orang lain dan situasi bagi diri sendiri. Alternatif lain: stabilitas emosi dan grit merupakan karakteristik berbeda; dissonance membutuhkan ketidakselarasan cognition yang tidak dinyatakan. [hal. 370–371]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-05",
    "tm": 11,
    "topic": "Personality",
    "difficulty": "medium",
    "q": "Dimensi yang paling langsung terkait dapat diandalkan, bertanggung jawab dan tekun?",
    "options": [
      "Conscientiousness",
      "Extroversion",
      "Openness to experience",
      "Agreeableness"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 372–375].",
    "sourceAnchors": [
      "Ch. 10; [hal. 372–375]; PDF 400–403"
    ],
    "explanation": "Conscientiousness mencakup tanggung jawab, dependability dan ketekunan. Alternatif lain: extroversion menyangkut interaksi; openness gagasan baru; agreeableness kerja sama/kepercayaan. [hal. 372–375]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-06",
    "tm": 11,
    "topic": "Emotional intelligence",
    "difficulty": "medium",
    "q": "Memahami perasaan anggota dan mempertimbangkan sudut pandangnya terutama menunjukkan…",
    "options": [
      "Self-management saja",
      "Social awareness",
      "Machiavellianism",
      "Emotional contagion yang pasti terjadi"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 382–383].",
    "sourceAnchors": [
      "Ch. 10; [hal. 382–383]; PDF 410–411"
    ],
    "explanation": "Social awareness mencakup empati dan pemahaman orang lain. Alternatif lain: self-management fokus emosi diri; manipulasi bukan empati; contagion berarti menyerap emosi dan tidak otomatis terjadi di situasi ini. [hal. 382–383]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-07",
    "tm": 11,
    "topic": "Self-management",
    "difficulty": "advanced",
    "q": "Setelah mengumpulkan komitmen, pegawai hanya memberi label “penting” kepada semuanya. Apa langkah yang hilang?",
    "options": [
      "Menambah jumlah daftar sebanyak mungkin",
      "Menunda seluruh tugas tanpa review",
      "Menentukan next action yang konkret sebelum mengorganisasi jadwal",
      "Menyimpan kembali semua tugas di kepala"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 385–387].",
    "sourceAnchors": [
      "Ch. 10; [hal. 385–387]; PDF 413–415"
    ],
    "explanation": "Decide the next action membuat komitmen menjadi tindakan yang bisa dilakukan/delegasi/tunda. Alternatif lain: banyak daftar menambah kerumitan, penundaan tanpa review dan menyimpan di kepala bertentangan dengan prinsip sumber. [hal. 385–387]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm11-08",
    "tm": 11,
    "topic": "Stress",
    "difficulty": "advanced",
    "q": "Dua atasan memberi instruksi yang tidak kompatibel dan manajer meminta anggota lebih tahan tekanan. Tindakan yang lebih sesuai?",
    "options": [
      "Naikkan tekanan karena kurva menjamin stres selalu menaikkan hasil",
      "Anggap role ambiguity pasti sama dengan role conflict",
      "Tetapkan satu ambang stres numerik bagi semua anggota",
      "Selaraskan tuntutan peran dan beri dukungan serta kontrol kerja yang wajar"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 388–392].",
    "sourceAnchors": [
      "Ch. 10; [hal. 388–392]; PDF 416–420"
    ],
    "explanation": "Tuntutan tidak kompatibel adalah role conflict yang perlu diperbaiki, dengan dukungan dan kontrol relevan. Alternatif lain: kurva bukan jaminan linear, ambiguity berbeda dari konflik, dan sumber tidak memberi ambang universal. [hal. 388–392]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-01",
    "tm": 12,
    "topic": "Leadership",
    "difficulty": "basic",
    "q": "Seseorang tanpa jabatan diikuti karena mampu menjelaskan tujuan dan memberi inspirasi. Ia menunjukkan…",
    "options": [
      "Informal leadership",
      "Legitimate power yang otomatis ada",
      "Tidak mungkin leadership",
      "Management hanya karena popularitas"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 403–406].",
    "sourceAnchors": [
      "Ch. 11; [hal. 403–406]; PDF 431–434"
    ],
    "explanation": "Informal leaders diikuti karena kualitas pribadi, bukan authority jabatan. Alternatif lain: jabatan tidak dinyatakan dan popularitas saja tidak membuktikan management. [hal. 403–406]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-02",
    "tm": 12,
    "topic": "Level 5",
    "difficulty": "basic",
    "q": "Dua kualitas inti Level 5 adalah…",
    "options": [
      "Ego tinggi dan popularitas",
      "Humility dan professional will bagi organisasi",
      "Coercion dan reward semata",
      "Ketiadaan keputusan sulit"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 407].",
    "sourceAnchors": [
      "Ch. 11; [hal. 407]; PDF 435"
    ],
    "explanation": "Humility berpadu dengan tekad kuat bagi keberhasilan organisasi. Alternatif lain: ego, popularitas dan power posisi tidak mendefinisikan Level 5; will membutuhkan keputusan. [hal. 407]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-03",
    "tm": 12,
    "topic": "Behavior",
    "difficulty": "medium",
    "q": "Mengklarifikasi tanggung jawab dan memonitor operasi terutama merupakan…",
    "options": [
      "Consideration saja",
      "Referent power yang pasti terbukti",
      "Initiating structure",
      "Followership alienated"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 415–416].",
    "sourceAnchors": [
      "Ch. 11; [hal. 415–416]; PDF 443–444"
    ],
    "explanation": "Initiating structure adalah task behavior menuju tujuan. Alternatif lain: consideration menyangkut relasi; perilaku ini tidak membuktikan basis power atau gaya pengikut. [hal. 415–416]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-04",
    "tm": 12,
    "topic": "Readiness",
    "difficulty": "medium",
    "q": "Anggota belum mampu melakukan tugas tetapi bersemangat belajar. Model sumber menyarankan…",
    "options": [
      "R1 → S4 delegating: task rendah, relationship rendah",
      "R3 → S1 telling: task tinggi, relationship rendah",
      "R4 → S3 participating: task rendah, relationship tinggi",
      "R2 → S2 selling: task dan relationship tinggi"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 416–417].",
    "sourceAnchors": [
      "Ch. 11; [hal. 416–417]; PDF 444–445"
    ],
    "explanation": "Unable tetapi willing/confident adalah R2; S2 memberi arahan serta penjelasan/klarifikasi. Alternatif lain: pasangan lain tidak cocok dengan readiness dan pemetaan sumber. [hal. 416–417]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-05",
    "tm": 12,
    "topic": "Readiness",
    "difficulty": "medium",
    "q": "Ahli mampu namun insecure terhadap tugas membutuhkan…",
    "options": [
      "S3 participating: relationship tinggi, task rendah",
      "S4 karena ability saja cukup",
      "S1 untuk seluruh ahli",
      "S2 dengan relationship rendah"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 417].",
    "sourceAnchors": [
      "Ch. 11; [hal. 417]; PDF 445"
    ],
    "explanation": "R3 able tetapi unwilling/insecure cocok dengan S3. Alternatif lain: R4 memerlukan willingness/confidence; S1 untuk R1; S2 relationship tinggi. [hal. 417]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-06",
    "tm": 12,
    "topic": "Fiedler",
    "difficulty": "medium",
    "q": "Apa yang menentukan favorability Fiedler?",
    "options": [
      "Ability, willingness dan jenis bonus saja",
      "Leader–member relations, task structure dan position power",
      "Gender, usia dan popularitas",
      "Hanya tingkat struktur tugas"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 418–419].",
    "sourceAnchors": [
      "Ch. 11; [hal. 418–419]; PDF 446–447"
    ],
    "explanation": "Ketiga unsur situasi dipakai mencocokkan gaya relatif tetap. Alternatif lain: readiness model berbeda; atribut pribadi dan satu unsur saja belum menentukan favorability. [hal. 418–419]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-07",
    "tm": 12,
    "topic": "Substitutes",
    "difficulty": "advanced",
    "q": "Aturan tugas rinci memenuhi kebutuhan arah kerja sehingga leader tidak perlu mengulangnya. Ini…",
    "options": [
      "Neutralizer karena semua arahan terhambat",
      "Bukti people-oriented tidak diperlukan",
      "Substitute bagi task-oriented leadership",
      "Coercive power yang pasti terjadi"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 420].",
    "sourceAnchors": [
      "Ch. 11; [hal. 420]; PDF 448"
    ],
    "explanation": "Formalization dapat menyediakan fungsi pengganti task direction. Alternatif lain: neutralizer hanya menghambat; efek pada people berbeda; tidak ada hukuman disebut. [hal. 420]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-08",
    "tm": 12,
    "topic": "Followership",
    "difficulty": "advanced",
    "q": "Anggota berpikir kritis sekaligus aktif menawarkan solusi tergolong…",
    "options": [
      "Alienated follower",
      "Conformist",
      "Passive follower",
      "Effective follower"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 424–428].",
    "sourceAnchors": [
      "Ch. 11; [hal. 424–428]; PDF 452–456"
    ],
    "explanation": "Effective menggabungkan critical independent thinking dengan active engagement. Alternatif lain: alienated kritis tetapi pasif; conformist aktif tanpa kritis; passive keduanya rendah. [hal. 424–428]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm12-09",
    "tm": 12,
    "topic": "Power",
    "difficulty": "advanced",
    "q": "Analis memakai keahlian dan data untuk mengubah keputusan walau tidak berwenang memberi perintah. Kombinasi paling tepat?",
    "options": [
      "Expert power dan rational persuasion",
      "Legitimate power dan coercion",
      "Reward power dan hukuman",
      "Referent power pasti karena setiap ahli dikagumi"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 428–432].",
    "sourceAnchors": [
      "Ch. 11; [hal. 428–432]; PDF 456–460"
    ],
    "explanation": "Keahlian memberi expert power; fakta/alasan mendukung rational persuasion. Alternatif lain: jabatan, reward, hukuman dan kekaguman tidak dinyatakan. [hal. 428–432]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-01",
    "tm": 13,
    "topic": "Rewards",
    "difficulty": "basic",
    "q": "Manajer memberi pujian atas laporan; anggota merasa bangga karena memecahkan masalah. Pasangan yang tepat?",
    "options": [
      "Keduanya intrinsic karena tidak berupa uang",
      "Pujian extrinsic, accomplishment intrinsic",
      "Keduanya punishment",
      "Pujian intrinsic, bangga extrinsic"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 441–442].",
    "sourceAnchors": [
      "Ch. 12; [hal. 441–442]; PDF 469–470"
    ],
    "explanation": "Sumber pujian di luar diri; accomplishment muncul dari aktivitas. Alternatif lain: uang tidak mendefinisikan kategori, hukuman tidak terjadi, pasangan terakhir terbalik. [hal. 441–442]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-02",
    "tm": 13,
    "topic": "ERG",
    "difficulty": "basic",
    "q": "Growth terhambat lalu pegawai makin menekankan penghasilan. ERG menjelaskan ini sebagai…",
    "options": [
      "Kenaikan otomatis ke self-actualization",
      "Punishment: konsekuensi buruk mengurangi perilaku",
      "Frustration-regression",
      "E→P tinggi yang pasti terjadi"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 446–447].",
    "sourceAnchors": [
      "Ch. 12; [hal. 446–447]; PDF 474–475"
    ],
    "explanation": "Frustrasi kebutuhan lebih tinggi dapat mengarahkan ke kebutuhan lebih rendah. Alternatif lain: pilihan lain tidak menjelaskan perubahan perhatian kebutuhan. [hal. 446–447]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-03",
    "tm": 13,
    "topic": "Herzberg",
    "difficulty": "medium",
    "q": "Fasilitas diperbaiki tetapi pekerjaan tetap tanpa growth atau responsibility. Menurut Herzberg…",
    "options": [
      "Hygiene pasti menciptakan motivasi tinggi",
      "Achievement adalah hygiene saja",
      "Pay tidak termasuk model",
      "Dissatisfaction dapat berkurang tanpa satisfaction tinggi"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 447–448].",
    "sourceAnchors": [
      "Ch. 12; [hal. 447–448]; PDF 475–476"
    ],
    "explanation": "Hygiene dan motivators berperan pada area berbeda. Alternatif lain: hygiene tidak menjamin satisfaction; achievement motivator dan pay hygiene. [hal. 447–448]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-04",
    "tm": 13,
    "topic": "Goal setting",
    "difficulty": "medium",
    "q": "Kombinasi criteria motivational goals sumber ialah…",
    "options": [
      "Specific, challenging, accepted dan feedback",
      "Kabur, mustahil, dipaksakan dan tanpa review",
      "Bonus, senioritas dan gender",
      "Specific saja tanpa acceptance"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 451–452].",
    "sourceAnchors": [
      "Ch. 12; [hal. 451–452]; PDF 479–480"
    ],
    "explanation": "Empat kriteria membantu arah, tantangan, penerimaan dan kemajuan. Alternatif lain: target buruk dan atribut lain tidak menggantikan kriteria; specificity saja tidak lengkap. [hal. 451–452]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-05",
    "tm": 13,
    "topic": "Expectancy",
    "difficulty": "medium",
    "q": "Pegawai mampu mencapai target dan ingin bonus, tetapi tidak percaya bonus akan dibayar. Unsur terlemah?",
    "options": [
      "E→P expectancy yang pasti nol",
      "P→O expectancy",
      "Valence yang pasti rendah",
      "Need for affiliation"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 455–456].",
    "sourceAnchors": [
      "Ch. 12; [hal. 455–456]; PDF 483–484"
    ],
    "explanation": "P→O menghubungkan successful performance dengan outcome. Alternatif lain: ability/target mendukung E→P dan bonus diinginkan berarti valence tinggi; affiliation tidak dinyatakan. [hal. 455–456]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-06",
    "tm": 13,
    "topic": "Reinforcement",
    "difficulty": "medium",
    "q": "Teguran berhenti setelah keterlambatan anggota membaik. Mekanismenya…",
    "options": [
      "Punishment: konsekuensi buruk ditambahkan",
      "Extinction atas reward positif",
      "Avoidance learning / negative reinforcement",
      "Positive reinforcement berupa penambahan reward"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 457–458].",
    "sourceAnchors": [
      "Ch. 12; [hal. 457–458]; PDF 485–486"
    ],
    "explanation": "Konsekuensi buruk dihilangkan sehingga perilaku membaik diperkuat. Alternatif lain: punishment menambah konsekuensi buruk; extinction menghentikan positif; positive reinforcement menambah menyenangkan. [hal. 457–458]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-07",
    "tm": 13,
    "topic": "Job design",
    "difficulty": "advanced",
    "q": "Anggota mengerjakan bagian kerja lengkap tetapi belum melihat dampaknya pada pelanggan. Identifikasi tepat?",
    "options": [
      "Task identity dan significance dianggap selalu tinggi",
      "Autonomy dianggap pasti nol tanpa memeriksa kewenangan",
      "Enlargement selalu sama dengan enrichment",
      "Task identity dapat tinggi, task significance belum jelas"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 460–461].",
    "sourceAnchors": [
      "Ch. 12; [hal. 460–461]; PDF 488–489"
    ],
    "explanation": "Keutuhan kerja dan arti/dampaknya adalah dimensi berbeda. Alternatif lain: kondisi tidak memberi data autonomy atau memastikan enrichment. [hal. 460–461]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-08",
    "tm": 13,
    "topic": "Empowerment",
    "difficulty": "advanced",
    "q": "Authority keputusan diberikan tanpa data operasi dan training. Unsur empowerment yang perlu diperbaiki?",
    "options": [
      "Information serta knowledge/skills",
      "Hanya jumlah tugas",
      "Hapus seluruh authority tanpa diagnosis",
      "Pujian saja menggantikan semua elemen"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 462–463].",
    "sourceAnchors": [
      "Ch. 12; [hal. 462–463]; PDF 490–491"
    ],
    "explanation": "Keputusan substantif membutuhkan informasi dan kapasitas. Alternatif lain: jumlah tugas, pencabutan tanpa diagnosis dan pujian saja tidak memperbaiki dua kekurangan. [hal. 462–463]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm13-09",
    "tm": 13,
    "topic": "Morgan/equity",
    "difficulty": "advanced",
    "q": "Mengapa komisi atas belt USD50 dan dress USD2.800 belum dapat dihitung, tetapi fairness tetap dapat dianalisis?",
    "options": [
      "Karena kedua harga selalu memberi komisi sama",
      "Tarif komisi tidak tersedia; perbedaan peluang/input-outcome perlu diperiksa",
      "Karena harga adalah persentase komisi",
      "Karena nominal berbeda otomatis membuktikan diskriminasi"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 453–459, 470].",
    "sourceAnchors": [
      "Ch. 12; [hal. 453–459, 470]; PDF 481–487, 498"
    ],
    "explanation": "Kasus memberi harga dan keluhan peluang, tanpa rate komisi atau ukuran kontribusi lengkap. Alternatif lain: harga bukan rate, hasil tidak pasti sama, perbedaan nominal saja tidak membuktikan penyebab diskriminasi. [hal. 453–459, 470]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-01",
    "tm": 14,
    "topic": "Communication",
    "difficulty": "basic",
    "q": "Bukti paling langsung bahwa makna pesan dipahami bersama adalah…",
    "options": [
      "Notifikasi pesan terkirim saja",
      "Panjang pesan yang diberikan sender kepada receiver",
      "Feedback yang menunjukkan interpretasi dan dapat diklarifikasi",
      "Jumlah emoji serta simbol yang dipakai dalam pesan"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 476–478].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 476–478]; PDF 504–506"
    ],
    "explanation": "Feedback menghubungkan interpretasi receiver dengan sender. Alternatif lain: terkirim, panjang dan simbol tidak membuktikan mutual understanding. [hal. 476–478]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-02",
    "tm": 14,
    "topic": "Richness",
    "difficulty": "basic",
    "q": "Masalah sensitif dan ambigu dengan emosi tinggi paling memerlukan…",
    "options": [
      "Bulletin satu arah sebagai satu-satunya channel",
      "Pesan paling panjang tanpa feedback",
      "Channel dipilih hanya karena biaya termurah",
      "Channel kaya dengan multiple cues dan rapid two-way feedback"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 484–485].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 484–485]; PDF 512–513"
    ],
    "explanation": "Rich channel membantu klarifikasi cepat serta konteks emosional. Alternatif lain: bulletin/monolog miskin feedback dan panjang/biaya saja tidak menentukan kecocokan. [hal. 484–485]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-03",
    "tm": 14,
    "topic": "Candor",
    "difficulty": "medium",
    "q": "Pernyataan yang sesuai candor adalah…",
    "options": [
      "Saya kesulitan menutup laporan ketika data belum masuk; mohon kirim bagian ini sebelum waktu yang disepakati",
      "Anda memang malas dan selalu menyusahkan; saya tidak perlu mendengar alasan Anda",
      "Hindari menyampaikan masalah dan tetap memberi pujian agar anggota menerima pesan tanpa keberatan",
      "Saya marah atas hasil ini, jadi semua anggota pasti bersalah dan perlu diberi tekanan"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 487–488].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 487–488]; PDF 515–516"
    ],
    "explanation": "I statement, fakta/dampak dan permintaan spesifik disampaikan dengan respect. Alternatif lain: label, menghindari masalah dan generalisasi tidak membantu candor. [hal. 487–488]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-04",
    "tm": 14,
    "topic": "Channels",
    "difficulty": "medium",
    "q": "Laporan kendala dari staf kepada manajer melalui chat tugas termasuk…",
    "options": [
      "Downward karena menggunakan chat",
      "Upward formal communication",
      "Informal pasti karena digital",
      "Horizontal karena isinya masalah"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 498–500].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 498–500]; PDF 526–528"
    ],
    "explanation": "Arah bawah→atas mengikuti tanggung jawab tugas. Alternatif lain: medium tidak menentukan arah/status dan isi masalah tidak menjadikannya horizontal. [hal. 498–500]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-05",
    "tm": 14,
    "topic": "Team",
    "difficulty": "medium",
    "q": "Sekumpulan orang baru menjadi team ketika…",
    "options": [
      "Berada dalam ruangan sama dan menjalankan tugas sendiri tanpa tujuan bersama",
      "Memiliki skill identik dan mengikuti arahan yang sama tanpa membutuhkan koordinasi kerja",
      "Berinteraksi/berkoordinasi bagi common goal dengan commitment dan mutual accountability",
      "Menghindari setiap perbedaan pendapat tanpa perlu koordinasi serta mutual accountability"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 511].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 511]; PDF 539"
    ],
    "explanation": "Definisi memerlukan relasi kerja dan shared goal/accountability. Alternatif lain: lokasi/skill identik/harmoni tanpa disagreement tidak memenuhi definisi. [hal. 511]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-06",
    "tm": 14,
    "topic": "Effectiveness",
    "difficulty": "medium",
    "q": "Model work team effectiveness memakai tiga outcomes…",
    "options": [
      "Output, profit dan popularitas saja",
      "Ukuran anggota, diversity keahlian dan roles sebagai ukuran hasil akhir tim",
      "Forming, storming dan norming sebagai hasil akhir pekerjaan tim",
      "Productive output, personal satisfaction, capacity to adapt and learn"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 522–523].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 522–523]; PDF 550–551"
    ],
    "explanation": "Ketiga outcome menilai hasil, anggota serta kemampuan perkembangan. Alternatif lain: composition dan stages adalah faktor/proses, bukan outcome model. [hal. 522–523]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-07",
    "tm": 14,
    "topic": "Dysfunctions",
    "difficulty": "advanced",
    "q": "Tim menyetujui keputusan di rapat karena takut mengungkap keberatan, kemudian kurang mendukung pelaksanaan. Hubungan terdekat?",
    "options": [
      "Fear of conflict dapat melemahkan commitment",
      "Semua agreement membuktikan trust tinggi",
      "Free rider pasti terbukti pada semua anggota",
      "Performing pasti sudah tercapai"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 522].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 522]; PDF 550"
    ],
    "explanation": "Pendapat yang tidak diungkap menghambat buy-in. Alternatif lain: agreement saja tidak membuktikan trust, kontribusi/statusstage belum diketahui. [hal. 522]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-08",
    "tm": 14,
    "topic": "Norms",
    "difficulty": "advanced",
    "q": "Tim sangat kompak tetapi terbiasa menahan informasi dari bagian lain. Kesimpulan tepat?",
    "options": [
      "Cohesion menjamin output tinggi",
      "Cohesion perlu dinilai bersama norms dan tujuan",
      "Setiap cohesion selalu buruk",
      "Norms hanya aturan tertulis"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 530–532].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 530–532]; PDF 558–560"
    ],
    "explanation": "Kekompakan dapat menguatkan norma yang merugikan kerja. Cohesion menjelaskan keinginan bertahan dan relasi, sementara norms menentukan perilaku yang dianggap pantas; keduanya perlu dibandingkan dengan shared goals. Alternatif lain: baik/buruk tidak universal; norms dapat informal. [hal. 530–532]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-09",
    "tm": 14,
    "topic": "Conflict",
    "difficulty": "advanced",
    "q": "Dua concerns penting perlu dipenuhi bersama, dengan waktu mengeksplorasi opsi. Style yang paling cocok?",
    "options": [
      "Accommodating dengan assertiveness tinggi",
      "Avoiding dengan cooperativeness tinggi",
      "Collaborating: assertive dan cooperative tinggi",
      "Dominating demi dua pihak tanpa diskusi"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 535–537].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 535–537]; PDF 563–565"
    ],
    "explanation": "Collaboration menggabungkan perhatian pada concern diri dan pihak lain. Alternatif lain: kombinasi dimensi pilihan lain salah atau tidak memenuhi kedua concerns. [hal. 535–537]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm14-10",
    "tm": 14,
    "topic": "Brainchild",
    "difficulty": "advanced",
    "q": "Mengapa email yang meminta kejujuran tetapi mengancam semua manajer dapat gagal?",
    "options": [
      "Karena email selalu dilarang dalam organisasi",
      "Karena kasus membuktikan seluruh manajer pelaku",
      "Karena apology pasti menghapus seluruh dampak",
      "Threat menghambat feedback/trust dan pesan miskin cues mudah salah tafsir"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 476–488, 506].",
    "sourceAnchors": [
      "Ch. 13–14; [hal. 476–488, 506]; PDF 504–516, 534"
    ],
    "explanation": "Tujuan dan encoding bertentangan; rich channel/feedback serta proses adil diperlukan. Alternatif lain: larangan universal, pelaku dan jaminan pemulihan tidak ada dalam teks. [hal. 476–488, 506]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-01",
    "tm": 15,
    "topic": "Feedback control",
    "difficulty": "basic",
    "q": "Setelah mengukur actual performance, langkah berikutnya adalah…",
    "options": [
      "Membandingkan dengan standards dan memeriksa variance",
      "Langsung menghukum semua anggota",
      "Mengubah target agar sama dengan hasil aktual yang baru diukur",
      "Mengabaikan hasil pengukuran dan memakai standar yang lama"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 549–551].",
    "sourceAnchors": [
      "Ch. 15; [hal. 549–551]; PDF 577–579"
    ],
    "explanation": "Compare memberi dasar diagnosis sebelum tindakan. Selisih dapat berasal dari proses, sumber daya atau ukuran yang tidak tepat; periksa penyebab sebelum menentukan koreksi performance atau standards. Alternatif lain: hukuman, penghapusan target dan pengabaian data melewati diagnosis. [hal. 549–551]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-02",
    "tm": 15,
    "topic": "Scorecard",
    "difficulty": "basic",
    "q": "Perspektif balanced scorecard sumber meliputi…",
    "options": [
      "Cash, inventory, sales dan tax saja",
      "Financial, customers, internal processes, learning/growth",
      "Personality, gender, age dan income",
      "Empat divisi yang otomatis berbobot sama"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 552–554].",
    "sourceAnchors": [
      "Ch. 15; [hal. 552–554]; PDF 580–582"
    ],
    "explanation": "Empat perspektif melengkapi ukuran financial sesuai mission/goals. Alternatif lain: pos akun/atribut bukan perspektif dan equal weights tidak ditentukan. [hal. 552–554]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-03",
    "tm": 15,
    "topic": "Control philosophy",
    "difficulty": "medium",
    "q": "Decentralized control terutama mengandalkan…",
    "options": [
      "Kebebasan tanpa standards atau accountability kerja",
      "Seluruh keputusan software tanpa review",
      "Shared goals/values, norms, socialization dan self-control",
      "Formal inspection dan instruksi terperinci sebagai satu-satunya mekanisme kontrol"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 554–558].",
    "sourceAnchors": [
      "Ch. 15; [hal. 554–558]; PDF 582–586"
    ],
    "explanation": "Budaya/norma serta goals mendukung self-control dengan accountability. Alternatif lain: decentralized bukan tanpa standar; algorithmic dan formal inspection tidak mendefinisikannya. [hal. 554–558]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-04",
    "tm": 15,
    "topic": "TQM",
    "difficulty": "medium",
    "q": "Urutan benchmarking sumber adalah…",
    "options": [
      "Collect → Improve → Plan → Find → Analyze",
      "Define → Punish → Reward → Close",
      "Salin competitor tanpa data",
      "Plan → Find → Collect → Analyze → Improve"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 560–561].",
    "sourceAnchors": [
      "Ch. 15; [hal. 560–561]; PDF 588–589"
    ],
    "explanation": "Lima langkah memulai tujuan/sumber dan berakhir implementasi/monitoring. Alternatif lain: urutan kedua salah; punishment dan copying tidak menggantikan proses. [hal. 560–561]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-05",
    "tm": 15,
    "topic": "Budget",
    "difficulty": "medium",
    "q": "Bisnis mempunyai sales tinggi tetapi cash receipts terlambat. Budget paling langsung memeriksa kemampuan membayar minggu ini?",
    "options": [
      "Cash budget: jadwal receipts dan payments",
      "Revenue budget: forecast dan actual sales saja",
      "Capital budget tanpa receipts",
      "ZBB berarti cash selalu nol"
    ],
    "answer": 0,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 563–566].",
    "sourceAnchors": [
      "Ch. 15; [hal. 563–566]; PDF 591–594"
    ],
    "explanation": "Cash budget mengestimasi timing penerimaan/pembayaran. Alternatif lain: sales bukan cash, investasi saja tidak menjawab timing dan titik nol ZBB bukan saldo cash. [hal. 563–566]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-06",
    "tm": 15,
    "topic": "Financial ratios",
    "difficulty": "medium",
    "q": "Dengan current assets 600.000, inventory 500.000, cash 25.000, receivables 75.000 dan current liabilities 250.000, pasangan rasio sumber?",
    "options": [
      "Current 0,4; quick 2,4",
      "Current 2,4; quick 0,4",
      "Keduanya 2,4 karena inventory cash",
      "Current 4; quick 0,24"
    ],
    "answer": 1,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 567–569].",
    "sourceAnchors": [
      "Ch. 15; [hal. 567–569]; PDF 595–597"
    ],
    "explanation": "Current=600.000/250.000; quick=(25.000+75.000)/250.000. Alternatif lain: pasangan lain tertukar, memasukkan inventory ke quick atau salah aritmetika. [hal. 567–569]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-07",
    "tm": 15,
    "topic": "Financial data",
    "difficulty": "advanced",
    "q": "Mengapa inventory turnover belum bisa dihitung dari inventory akhir USD500.000 saja?",
    "options": [
      "Ending inventory selalu average",
      "Karena turnover sama dengan current ratio",
      "Average inventory belum tersedia dan basis sales/COGS harus dinyatakan",
      "Karena semua rumus turnover selalu identik"
    ],
    "answer": 2,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 568–569].",
    "sourceAnchors": [
      "Ch. 15; [hal. 568–569]; PDF 596–597"
    ],
    "explanation": "Sumber memakai average inventory; bedakan sales-based buku dari cost-based SEC. Alternatif lain: ending belum average dan turnover bukan liquidity ratio. [hal. 568–569]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  },
  {
    "id": "mnu108-uas-tm15-08",
    "tm": 15,
    "topic": "Teacher control",
    "difficulty": "advanced",
    "q": "Mengapa rating 1–5 saja belum menjamin fairness evaluasi guru?",
    "options": [
      "Karena semua angka selalu tidak berguna",
      "Karena kasus membuktikan semua principal curang",
      "Karena bobot boleh otomatis diubah menjadi 100% principal",
      "Rubric, evidence, observer calibration dan context tetap perlu diperiksa"
    ],
    "answer": 3,
    "sourceRef": "Daft dan Marcic, Understanding Management 12e [hal. 549–556, 574–575].",
    "sourceAnchors": [
      "Ch. 15; [hal. 549–556, 574–575]; PDF 577–584, 602–603"
    ],
    "explanation": "Skala perlu proses pengukuran yang valid serta konsisten. Alternatif lain: angka masih dapat berguna, dugaan bukan temuan semua orang dan bobot kasus asli40/30/30. [hal. 549–556, 574–575]",
    "skill": "Diagnosis konsep, bukti dan penerapan"
  }
];

export const MNM101_QUIZ: QuizQuestion[] = [...MNM101_QUIZ_UTS, ...MNM101_QUIZ_UAS];
