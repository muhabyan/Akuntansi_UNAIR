// src/data/quizzes/mnm101.ts
// Kuis pilihan ganda Pengantar Manajemen (MNU108; nama variabel dan file masih MNM101)
// Sumber: Daft & Marcic, Understanding Management 12e (2023)
// 56 soal Pra-UTS (TM 1-7, setiap penjelasan memuat [hal. X]) dan 35 soal Pra-UAS (TM 8-14, belum disinkronkan ke 12e)
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
    "tm": 8,
    "topic": "Review Integratif UTS",
    "difficulty": "advanced",
    "q": "Jika perusahaan menerapkan strategi Diferensiasi (Porter) di lingkungan yang dinamis dan kompleks, desain struktur organisasi yang PALING sesuai adalah...",
    "options": [
      "Struktur Mekanistik yang kaku dan sentralistis",
      "Struktur Organik (seperti Tim atau Matriks) yang desentralistis dan fleksibel",
      "Struktur Birokrasi Tradisional Max Weber",
      "Struktur Tall dengan rentang kendali sangat sempit"
    ],
    "answer": 1,
    "explanation": "Strategi diferensiasi di lingkungan dinamis memerlukan kreativitas, inovasi, dan kerja tim lintas batas yang didukung oleh struktur organik yang desentralistis."
  },
  {
    "tm": 8,
    "topic": "Review Integratif UTS",
    "difficulty": "medium",
    "q": "Manajer yang menghadapi masalah baru di mana tidak ada prosedur standar tertulis yang dapat digunakan harus mengambil...",
    "options": [
      "Keputusan Terprogram (Programmed Decision)",
      "Keputusan Tidak Terprogram (Non-programmed Decision)",
      "Keputusan Refleks Otomatis",
      "Standing Operating Procedure"
    ],
    "answer": 1,
    "explanation": "Non-programmed decisions diambil untuk menanggapi situasi unik, rumit, tidak terstruktur, dan memiliki konsekuensi strategis besar."
  },
  {
    "tm": 8,
    "topic": "Review Integratif UTS",
    "difficulty": "medium",
    "q": "Pada siklus manajemen POAC, temuan deviasi bahwa realisasi penjualan berada di bawah target yang direncanakan akan ditindaklanjuti oleh fungsi...",
    "options": [
      "Planning melalui penetapan ulang sasaran atau perbaikan strategi",
      "Controlling melalui tindakan koreksi langsung",
      "Organizing melalui perombakan struktur instan",
      "Pilihan A dan B keduanya benar"
    ],
    "answer": 3,
    "explanation": "Controlling mengambil tindakan koreksi operasional, sementara Planning menggunakan data deviasi tersebut sebagai masukan untuk merevisi target atau strategi berikutnya."
  },
  {
    "tm": 8,
    "topic": "Review Integratif UTS",
    "difficulty": "advanced",
    "q": "Dalam tipologi budaya Daft, organisasi yang menuntut disiplin tinggi, efisiensi operasional, dan kepatuhan penuh terhadap manual regulasi (seperti bank komersial) mencerminkan...",
    "options": [
      "Involvement Culture",
      "Consistency Culture",
      "Adaptability Culture",
      "Adhocracy Culture"
    ],
    "answer": 1,
    "explanation": "Consistency culture mengarahkan fokus internal pada stabilitas, metodis, keteraturan proses, dan kepatuhan standar kerja."
  },
  {
    "tm": 8,
    "topic": "Review Integratif UTS",
    "difficulty": "medium",
    "q": "Berdasarkan matriks BCG, strategi yang paling tepat diterapkan untuk unit bisnis kategori 'Dogs' adalah...",
    "options": [
      "Mengucurkan investasi modal besar untuk promosi",
      "Mempertahankan status quo tanpa evaluasi",
      "Pemanenan kas (harvesting) atau divestasi (dijual/dilikuidasi)",
      "Menjadikannya inti bisnis utama"
    ],
    "answer": 2,
    "explanation": "Dogs memiliki pangsa pasar rendah di industri bertumbuh lambat; perusahaan sebaiknya melakukan likuidasi, menjual unit, atau memangkas biaya semaksimal mungkin."
  },
  {
    "tm": 9,
    "topic": "Model Perubahan Kurt Lewin",
    "difficulty": "medium",
    "q": "Tahap awal dalam model perubahan Kurt Lewin di mana manajer membuat karyawan menyadari adanya urgensi perubahan dan perlunya meninggalkan cara kerja lama disebut...",
    "options": [
      "Refreezing",
      "Changing",
      "Unfreezing (Pencairan)",
      "Restructuring"
    ],
    "answer": 2,
    "explanation": "Unfreezing adalah proses mendobrak rasa puas diri (complacency) dan membangun kesadaran bersama bahwa status quo tidak lagi dapat dipertahankan."
  },
  {
    "tm": 9,
    "topic": "Taktik Mengatasi Resistensi",
    "difficulty": "medium",
    "q": "Taktik mengatasi resistensi perubahan yang paling tepat digunakan ketika penolakan karyawan dipicu oleh kurangnya pemahaman atau kesalahpahaman informasi adalah...",
    "options": [
      "Koersi dan ancaman pemecatan",
      "Edukasi dan Komunikasi terbuka",
      "Manipulasi dan kooptasi",
      "Negosiasi kompensasi finansial"
    ],
    "answer": 1,
    "explanation": "Edukasi dan komunikasi efektif menjernihkan kesalahpahaman serta membantu karyawan melihat logika dan manfaat positif dari perubahan yang direncanakan."
  },
  {
    "tm": 9,
    "topic": "Analisis Medan Kekuatan Lewin",
    "difficulty": "advanced",
    "q": "Menurut Force Field Analysis Kurt Lewin, perubahan yang sukses PALING EFEKTIF dicapai dengan cara...",
    "options": [
      "Menambah kekuatan pendorong (driving forces) sekuat mungkin tanpa mempedulikan hambatan",
      "Mengurangi atau menghilangkan kekuatan penghambat (restraining forces) sembari menjaga kekuatan pendorong",
      "Mengabaikan kedua kekuatan dan membiarkan proses alami",
      "Merekrut seluruh konsultan eksternal baru"
    ],
    "answer": 1,
    "explanation": "Menambah driving forces sering kali hanya memicu perlawanan balik yang lebih keras. Mengurangi restraining forces meredakan ketakutan dan membuka jalan perubahan tanpa konflik destruktif."
  },
  {
    "tm": 9,
    "topic": "Pendekatan Inovasi Ambidextrous",
    "difficulty": "advanced",
    "q": "Pendekatan Ambidextrous dalam organisasi inovatif mengacu pada kemampuan korporasi untuk...",
    "options": [
      "Merekrut karyawan yang memiliki keahlian tangan kanan dan kiri",
      "Menyeimbangkan antara mengeksplorasi ide terobosan baru dan mengeksploitasi efisiensi kapabilitas bisnis yang sudah ada",
      "Memecah seluruh divisi menjadi perusahaan terpisah",
      "Menghilangkan fungsi riset dan pengembangan"
    ],
    "answer": 1,
    "explanation": "Organisasi ambidextrous mampu menciptakan struktur organik yang bebas berkreasi untuk inovasi masa depan, sembari menjalankan struktur mekanistik yang ketat untuk mengoperasikan bisnis harian."
  },
  {
    "tm": 9,
    "topic": "Pengembangan Organisasi (OD)",
    "difficulty": "basic",
    "q": "Intervensi Pengembangan Organisasi (OD) yang mengumpulkan data dari karyawan melalui survei kuesioner lalu mendiskusikan hasilnya bersama tim kerja untuk menyusun rencana perbaikan disebut...",
    "options": [
      "Survey Feedback",
      "Team Building",
      "Large-Group Intervention",
      "Direct Coercion"
    ],
    "answer": 0,
    "explanation": "Survey Feedback adalah teknik intervensi OD di mana data sikap karyawan dikumpulkan dan diumpanbalikkan kepada anggota tim untuk memandu pemecahan masalah bersama."
  },
  {
    "tm": 10,
    "topic": "Analisis Jabatan",
    "difficulty": "medium",
    "q": "Dokumen yang memuat rincian kualifikasi minimal pelamar kerja seperti tingkat pendidikan, sertifikasi profesional, dan pengalaman kerja 5 tahun disebut...",
    "options": [
      "Job Description",
      "Job Specification",
      "Job Evaluation",
      "Performance Appraisal"
    ],
    "answer": 1,
    "explanation": "Job Specification mendeskripsikan kualifikasi pengetahuan, keterampilan, dan karakteristik personal yang wajib dimiliki calon pemegang jabatan."
  },
  {
    "tm": 10,
    "topic": "Metode Penilaian Kinerja",
    "difficulty": "medium",
    "q": "Penilaian kinerja yang menghimpun evaluasi dari atasan langsung, rekan kerja sejawat, bawahan, serta penilaian mandiri (self-assessment) dikenal sebagai...",
    "options": [
      "Graphic Rating Scale",
      "Behaviorally Anchored Rating Scale (BARS)",
      "360-Degree Feedback",
      "Ranking Method"
    ],
    "answer": 2,
    "explanation": "360-degree feedback memberikan gambaran performa kerja yang komprehensif dan obyektif dari berbagai perspektif pemangku kepentingan interaksi kerja."
  },
  {
    "tm": 10,
    "topic": "Keragaman & Inklusi",
    "difficulty": "medium",
    "q": "Hambatan artifisial tak terlihat yang didasari oleh bias sikap atau stereotip organisasi yang menghalangi perempuan menduduki jabatan manajer puncak disebut...",
    "options": [
      "Glass Ceiling",
      "Sticky Floor",
      "Tokenism",
      "Affirmative Action"
    ],
    "answer": 0,
    "explanation": "Glass Ceiling merujuk pada batasan tak kasat mata yang mendiskriminasi perempuan dan minoritas untuk meraih posisi kepemimpinan eksekutif tertinggi."
  },
  {
    "tm": 10,
    "topic": "Kompensasi Karyawan",
    "difficulty": "basic",
    "q": "Proses sistematis untuk menentukan nilai relatif suatu pekerjaan di dalam organisasi guna memastikan keadilan internal gaji disebut...",
    "options": [
      "Job Analysis",
      "Job Evaluation (Evaluasi Jabatan)",
      "Wage Survey",
      "Benchmarking"
    ],
    "answer": 1,
    "explanation": "Job Evaluation mengevaluasi bobot tanggung jawab dan kompleksitas setiap posisi untuk menetapkan struktur skala upah yang adil di internal perusahaan."
  },
  {
    "tm": 10,
    "topic": "Alat Seleksi Karyawan",
    "difficulty": "advanced",
    "q": "Metode seleksi di mana pelamar disimulasikan menghadapi tugas manajerial nyata seperti latihan kotak surat masuk (in-basket exercise) dan permainan bisnis kelompok disebut...",
    "options": [
      "Wawancara Terstruktur",
      "Assessment Center",
      "Tes Bakat Kognitif",
      "Pemeriksaan Latar Belakang"
    ],
    "answer": 1,
    "explanation": "Assessment Center menggunakan serangkaian simulasi perilaku kerja riil untuk mengevaluasi potensi manajerial pelamar dengan validitas prediksi yang tinggi."
  },
  {
    "tm": 11,
    "topic": "Teori Kontinjensi Fiedler",
    "difficulty": "advanced",
    "q": "Menurut model kontinjensi Fred Fiedler, pemimpin yang berorientasi tugas (Task-Oriented) akan bekerja PALING EFEKTIF pada kondisi situasi kontrol yang...",
    "options": [
      "Sangat menguntungkan (highly favorable) atau sangat tidak menguntungkan (highly unfavorable)",
      "Cukup menguntungkan (moderately favorable)",
      "Netral tanpa pengawasan",
      "Tidak bergantung pada situasi kontrol"
    ],
    "answer": 0,
    "explanation": "Fiedler membuktikan pemimpin berorientasi tugas unggul pada situasi ekstrem (sangat baik atau sangat buruk), sedangkan pemimpin berorientasi hubungan unggul pada situasi moderat."
  },
  {
    "tm": 11,
    "topic": "Situational Leadership Hersey-Blanchard",
    "difficulty": "medium",
    "q": "Jika seorang karyawan memiliki kemampuan teknis yang tinggi tetapi merasa tidak yakin atau kurang termotivasi untuk menjalankan tugas mandiri, gaya kepemimpinan yang tepat adalah...",
    "options": [
      "Telling (Mengarahkan)",
      "Selling (Melatih)",
      "Participating (Mendukung)",
      "Delegating (Mendelegasikan)"
    ],
    "answer": 2,
    "explanation": "Gaya Participating / Supporting cocok untuk bawahan dengan tingkat kesiapan R3 (mampu tetapi ragu/kurang percaya diri), di mana pemimpin berbagi keputusan dan memberi dorongan moral."
  },
  {
    "tm": 11,
    "topic": "Kepemimpinan Transformasional",
    "difficulty": "medium",
    "q": "Pemimpin yang mampu mengartikulasikan visi masa depan yang memikat, merangsang pemikiran kreatif bawahan, dan membangkitkan komitmen luar biasa melampaui kepentingan pribadi adalah...",
    "options": [
      "Pemimpin Transaksional",
      "Pemimpin Transformasional",
      "Pemimpin Otokratis",
      "Pemimpin Laissez-faire"
    ],
    "answer": 1,
    "explanation": "Kepemimpinan Transformasional menginspirasi pengikut untuk mencapai hasil luar biasa melalui karisma, stimulasi intelektual, dan pertimbangan individual."
  },
  {
    "tm": 11,
    "topic": "Sumber Kekuasaan French & Raven",
    "difficulty": "basic",
    "q": "Kekuasaan yang bersumber dari keahlian teknis khusus, pengetahuan istimewa, atau keterampilan mendalam yang diakui oleh orang lain disebut...",
    "options": [
      "Legitimate Power",
      "Reward Power",
      "Coercive Power",
      "Expert Power"
    ],
    "answer": 3,
    "explanation": "Expert Power adalah salah satu bentuk kekuasaan personal (soft power) yang berasal dari kompetensi dan kapabilitas unggul seseorang."
  },
  {
    "tm": 11,
    "topic": "Kisi-Kisi Manajerial Blake-Mouton",
    "difficulty": "advanced",
    "q": "Pada Managerial Grid Blake dan Mouton, gaya kepemimpinan 'Team Management' (posisi 9,9) ditandai oleh...",
    "options": [
      "Perhatian tinggi terhadap produksi dan perhatian tinggi terhadap manusia",
      "Perhatian tinggi terhadap produksi tetapi mengabaikan manusia",
      "Perhatian tinggi terhadap manusia tetapi mengabaikan produksi",
      "Tingkat perhatian minimal terhadap kedua aspek"
    ],
    "answer": 0,
    "explanation": "Gaya 9,9 (Team Management) dianggap paling ideal karena mengintegrasikan dedikasi tinggi terhadap pencapaian target kerja dan komitmen mendalam terhadap kesejahteraan karyawan."
  },
  {
    "tm": 12,
    "topic": "Teori Dua Faktor Herzberg",
    "difficulty": "medium",
    "q": "Menurut Frederick Herzberg, menaikkan gaji karyawan dan memperbaiki kondisi pendingin ruangan kantor akan...",
    "options": [
      "Meningkatkan kepuasan dan motivasi kerja secara drastis",
      "Menghilangkan ketidakpuasan kerja, namun TIDAK secara otomatis memotivasi kerja",
      "Menurunkan produktivitas kerja",
      "Memenuhi kebutuhan aktualisasi diri"
    ],
    "answer": 1,
    "explanation": "Gaji dan kondisi fisik kerja adalah Hygiene Factors. Pemenuhannya hanya menetralkan rasa tidak puas, sedangkan motivasi sejati hanya dipicu oleh faktor Motivators (tanggung jawab, prestasi)."
  },
  {
    "tm": 12,
    "topic": "Teori Ekspektansi Vroom",
    "difficulty": "advanced",
    "q": "Karyawan merasa yakin bahwa jika ia bekerja lembur menyelesaikan proyek, kinerjanya akan dinilai sangat baik (E-ke-P tinggi). Namun ia pesimis bahwa kinerja baik tersebut akan diganjar bonus kenaikan gaji (P-ke-O rendah). Komponen yang lemah menurut Vroom adalah...",
    "options": [
      "Expectancy",
      "Instrumentality",
      "Valence",
      "Equity"
    ],
    "answer": 1,
    "explanation": "Instrumentality adalah keyakinan probabilitas bahwa pencapaian kinerja kerja yang sukses akan membuahkan hasil imbalan organisasi yang diharapkan."
  },
  {
    "tm": 12,
    "topic": "Job Characteristics Model",
    "difficulty": "medium",
    "q": "Pekerjaan seorang dokter bedah yang menyelamatkan nyawa pasien memiliki skor sangat tinggi pada dimensi inti pekerjaan...",
    "options": [
      "Skill Variety",
      "Task Identity",
      "Task Significance",
      "Autonomy"
    ],
    "answer": 2,
    "explanation": "Task Significance adalah sejauh mana pekerjaan tersebut memiliki dampak nyata dan bermakna bagi kehidupan atau kesejahteraan orang lain."
  },
  {
    "tm": 12,
    "topic": "Teori Keadilan Adams",
    "difficulty": "medium",
    "q": "Ketika karyawan merasa bahwa rasio antara pengorbanannya (waktu, tenaga) dan imbalannya (gaji) lebih rendah dibandingkan rekan kerjanya yang setara, karyawan tersebut akan cenderung...",
    "options": [
      "Meningkatkan kualitas kerjanya secara sukarela",
      "Mengurangi usaha kerja atau meminta kenaikan imbalan untuk memulihkan keadilan",
      "Merasa sangat bersyukur dan loyal",
      "Mengabaikan perbedaan tersebut"
    ],
    "answer": 1,
    "explanation": "Ketidakadilan yang dirasakan (underreward inequity) memicu ketegangan psikologis yang mendorong individu mengurangi input usahanya atau menuntut kompensasi lebih."
  },
  {
    "tm": 12,
    "topic": "Teori Penguatan Skinner",
    "difficulty": "basic",
    "q": "Manajer menghentikan teguran harian kepada karyawan setelah karyawan tersebut mulai hadir tepat waktu setiap pagi. Teknik penguatan ini disebut...",
    "options": [
      "Positive Reinforcement",
      "Avoidance Learning (Negative Reinforcement)",
      "Punishment",
      "Extinction"
    ],
    "answer": 1,
    "explanation": "Negative reinforcement (avoidance learning) memperkuat perilaku yang diinginkan dengan cara meniadakan atau menghentikan stimulus yang tidak menyenangkan."
  },
  {
    "tm": 13,
    "topic": "Kekayaan Saluran Komunikasi",
    "difficulty": "medium",
    "q": "Ketika seorang manajer harus menyampaikan berita duka atau pemutusan hubungan kerja (PHK) yang sarat muatan emosional, saluran komunikasi yang PALING tepat digunakan adalah...",
    "options": [
      "Surat Edaran Memo Tertulis",
      "Pesan Singkat WhatsApp",
      "Komunikasi Tatap Muka Langsung (Face-to-Face)",
      "Pengumuman di Papan Buletin"
    ],
    "answer": 2,
    "explanation": "Face-to-face adalah saluran paling kaya (highest richness) karena memungkinkan transmisi isyarat visual non-verbal, nada suara personal, dan umpan balik empatik seketika."
  },
  {
    "tm": 13,
    "topic": "Tahap Perkembangan Tim Tuckman",
    "difficulty": "medium",
    "q": "Anggota tim proyek mulai berdebat sengit mengenai siapa yang berhak menjadi ketua dan bagaimana pembagian tugas kerja dilakukan. Tim ini sedang berada pada tahap...",
    "options": [
      "Forming",
      "Storming",
      "Norming",
      "Performing"
    ],
    "answer": 1,
    "explanation": "Tahap Storming ditandai oleh konflik intrapersonal, kompetisi peran, dan perebutan pengaruh kepemimpinan sebelum norma kebersamaan terbentuk."
  },
  {
    "tm": 13,
    "topic": "Manajemen Konflik Thomas-Kilmann",
    "difficulty": "advanced",
    "q": "Gaya penyelesaian konflik di mana kedua belah pihak bekerja sama secara terbuka untuk mencari solusi integratif yang memuaskan kepentingan kedua pihak sepenuhnya (Win-Win) adalah...",
    "options": [
      "Avoiding",
      "Accommodating",
      "Collaborating",
      "Competing"
    ],
    "answer": 2,
    "explanation": "Collaborating mencerminkan tingkat ketegasan (assertiveness) dan kerja sama (cooperativeness) yang sama-sama tinggi untuk mencapai integrasi tujuan bersama."
  },
  {
    "tm": 13,
    "topic": "Fenomena Social Loafing",
    "difficulty": "basic",
    "q": "Fenomena di mana anggota tim menurunkan kontribusi usahanya karena merasa kinerjanya tertutup oleh kerja kelompok disebut...",
    "options": [
      "Group Polarization",
      "Social Loafing",
      "Free-Rider Syndromic",
      "Pilihan B dan C keduanya benar"
    ],
    "answer": 3,
    "explanation": "Social loafing (atau free-rider effect) adalah kecenderungan kemalasan sosial individu saat berada dalam tim jika tidak ada akuntabilitas kinerja individu yang jelas."
  },
  {
    "tm": 13,
    "topic": "Komunikasi Organisasi",
    "difficulty": "medium",
    "q": "Arus komunikasi yang terjadi antara anggota dari departemen yang berbeda pada tingkat hierarki yang sama (misalnya manajer keuangan berdiskusi dengan manajer pemasaran) disebut...",
    "options": [
      "Downward Communication",
      "Upward Communication",
      "Horizontal Communication",
      "Diagonal Command"
    ],
    "answer": 2,
    "explanation": "Horizontal communication adalah pertukaran pesan secara lateral di antara rekan kerja pada level yang setara untuk memfasilitasi koordinasi lintas fungsi."
  },
  {
    "tm": 14,
    "topic": "Jenis Pengendalian Manajerial",
    "difficulty": "medium",
    "q": "Pemeriksaan ketat atas mutu bahan baku gandum di pintu gudang sebelum diproses ke lini penggilingan merupakan contoh dari...",
    "options": [
      "Feedforward Control",
      "Concurrent Control",
      "Feedback Control",
      "Post-action Audit"
    ],
    "answer": 0,
    "explanation": "Feedforward control (pengendalian awal/input) berfokus pada pencegahan timbulnya cacat produk sebelum proses transformasi operasional dimulai."
  },
  {
    "tm": 14,
    "topic": "Balanced Scorecard",
    "difficulty": "advanced",
    "q": "Pelatihan peningkatan kompetensi literasi digital karyawan dan perbaikan budaya kerja pada Balanced Scorecard dicatat dalam perspektif...",
    "options": [
      "Perspektif Finansial",
      "Perspektif Pelanggan",
      "Perspektif Proses Bisnis Internal",
      "Perspektif Pembelajaran dan Pertumbuhan (Learning & Growth)"
    ],
    "answer": 3,
    "explanation": "Perspektif Pembelajaran dan Pertumbuhan berfokus pada modal manusia, budaya organisasi, dan infrastruktur sistem informasi yang menjadi pondasi kesuksesan jangka panjang."
  },
  {
    "tm": 14,
    "topic": "Total Quality Management (TQM)",
    "difficulty": "medium",
    "q": "Filosofi perbaikan berkesinambungan dan bertahap secara terus-menerus yang melibatkan setiap orang dalam organisasi disebut...",
    "options": [
      "Kaizen",
      "Benchmarking",
      "Six Sigma Black Belt",
      "Outsourcing"
    ],
    "answer": 0,
    "explanation": "Kaizen adalah istilah Jepang untuk perbaikan terus-menerus (continuous improvement) yang menjadi pilar fundamental Total Quality Management (TQM)."
  },
  {
    "tm": 14,
    "topic": "Proses Pengendalian",
    "difficulty": "basic",
    "q": "Langkah pertama yang mutlak harus dilakukan dalam siklus pengendalian manajerial adalah...",
    "options": [
      "Mengukur kinerja aktual karyawan",
      "Menetapkan standar kinerja strategis",
      "Membandingkan hasil dengan target",
      "Mengambil tindakan disiplin"
    ],
    "answer": 1,
    "explanation": "Tanpa penetapan standar kinerja (standards of performance) terlebih dahulu, manajer tidak memiliki tolok ukur acuan untuk menilai kinerja aktual."
  },
  {
    "tm": 14,
    "topic": "Sintesis Pengendalian Strategis",
    "difficulty": "advanced",
    "q": "Bahaya utama dari sistem pengendalian organisasi yang terlalu kaku dan berorientasi sempit pada angka metrik jangka pendek adalah...",
    "options": [
      "Biaya audit menjadi nol",
      "Karyawan memanipulasi data untuk memenuhi target kuantitatif dan mematikan inovasi kreatif",
      "Terjadinya desentralisasi total tanpa arahan",
      "Meningkatnya kepuasan kerja karyawan secara drastis"
    ],
    "answer": 1,
    "explanation": "Pengendalian yang terlalu birokratis dan menuntut kepatuhan kaku sering memicu perilaku disfungsional (gaming the system) dan menghambat fleksibilitas inovasi."
  }
];

export const MNM101_QUIZ: QuizQuestion[] = [...MNM101_QUIZ_UTS, ...MNM101_QUIZ_UAS];
