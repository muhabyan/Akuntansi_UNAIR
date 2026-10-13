// src/data/banksoal/mnm101.ts
// Bank Soal Esai & Studi Kasus Pengantar Manajemen (MNU108; nama variabel dan file masih MNM101)
// Sumber: Daft & Marcic, Understanding Management 12e (2023)
// 7 kasus Pra-UTS (satu Ethical Dilemma per TM 1-7, diparafrasekan; panduan jawaban lima langkah) dan 14 kasus Pra-UAS (7 kasus RPP buku dan 7 latihan berasumsi, TM 9-15)
import type { BankSoal } from '../../types';

export const MNM101_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 1: Bureaucracy, Human Skills, dan Seleksi Supervisor",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 1 (Ethical Dilemma \"The New Test\", Ch. 1 hal. 48–49): Promosi Supervisor antara Pengalaman dan Peringkat Tes Tertulis",
    "context": "Sebuah kota mewajibkan tes tertulis untuk promosi supervisor. Manajer agensi, Maxine Othman, sudah menunjuk Sheryl Hines secara sementara: 17 tahun bekerja di agensi dan terbukti memimpin dengan baik. Di tes terbuka, Sheryl berada di peringkat 12, sedangkan seorang klerk baru berperingkat 1. Keputusan akhir ada di tangan Maxine.",
    "data": [
      "Opsi (1): abaikan tes dan beri jabatan kepada Sheryl.",
      "Opsi (2): beri jabatan kepada peserta dengan skor tertinggi.",
      "Opsi (3): dorong Civil Service Board menyusun kriteria seleksi yang lebih komprehensif.",
      "Kerangka acuan: Weberian bureaucracy [hal. 28–30]; technical, human, dan conceptual skills [hal. 12–15]; things vs humanity of production [hal. 25–26]."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification) dari fakta kasus.",
      "Analisis dengan Weberian bureaucracy (seleksi berdasarkan kualifikasi teknis, aturan impersonal) dan dengan keterampilan manajer (technical, human, conceptual).",
      "Jawab: (Q1) apa dasar bureaucracy untuk dan melawan setiap opsi? (Q2) keterampilan apa yang relevan bagi supervisor dan apa yang mungkin tidak terukur oleh tes tertulis? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai ciri bureaucracy dan tiga keterampilan dengan [hal. X] (40%)",
      "Kelogisan analisis tiap opsi (30%)",
      "Ketegasan rekomendasi dan alasannya (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): Maxine harus memilih pengisi jabatan supervisor. Sheryl berpengalaman dan terbukti memimpin baik tetapi peringkat tesnya 12; seorang klerk baru berperingkat 1.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: konflik antara aturan seleksi yang berlaku sama untuk semua dan bukti kepemimpinan nyata.\nP2: tes tertulis mungkin hanya mengukur sebagian dari yang dibutuhkan supervisor.\nP3: keputusan ada pada satu orang, sehingga risiko pilih kasih atau kaku mekanis.\n3. Analisis Kasus: Bureaucracy memilih dan mempromosikan personel berdasarkan kualifikasi teknis dan menerapkan aturan yang sama untuk semua [hal. 29–30]. Weber ingin mengatasi organisasi yang dikelola secara personal [hal. 28–29]; mengabaikan tes demi orang tertentu berlawanan dengan semangat itu. Namun buku juga mengingatkan bahwa fokus pada things of production bisa mengabaikan humanity of production [hal. 26], dan pada tingkat manajer human skills makin dibutuhkan (Exh. 1.3), sedangkan technical skill hanya di urutan 8 pada perilaku manajer Google (Exh. 1.4) [hal. 12–13].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: opsi 1 melanggar aturan impersonal, opsi 2 patuh aturan tetapi hanya mengukur kualifikasi teknis [hal. 29].\nQ2: supervisor membutuhkan human skills (komunikasi, coaching) selain technical [hal. 13–15]; kepemimpinan yang sudah terbukti pada Sheryl adalah bukti human skills, yang belum tentu tertangkap tes tertulis (hasil analisis).\nQ3: opsi 3.\n5. Rekomendasi Manajerial: Pilih opsi 3. Maxine tidak mengabaikan hasil tes secara sepihak dan tidak mengangkat peringkat 1 secara mekanis, tetapi mengusulkan kriteria yang memasukkan bukti kepemimpinan, sehingga aturan tetap berlaku sama untuk semua. Selama proses berjalan, Sheryl tetap pada penugasan sementaranya yang sudah sah."
  },
  {
    "type": "case",
    "scope": "TM 2: Boundary Spanning, Business Intelligence, dan Cultural Leadership",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 2 (Ethical Dilemma \"Boundary Spanning Predicament\", Ch. 2 hal. 81): Dokumen Rahasia Pesaing dari Atasan",
    "context": "Miquel Vasquez, product manager baru di sebuah start-up bioteknologi, menerima dari atasannya setumpuk dokumen strategis rahasia milik pesaing terdekat. Atasannya semula mengaku mengunduhnya dari bagian privat intranet pesaing, lalu belakangan hanya menyebut mendapat \"electronic access\" lewat seorang kolega. Miquel tidak menemukan kebijakan perusahaan yang memberi panduan.",
    "data": [
      "Opsi (1): pakai dokumennya, tetapi minta atasan tidak memberi informasi rahasia lagi.",
      "Opsi (2): konfrontasi atasan secara privat soal cara memperoleh dokumen dan artinya bagi budaya perusahaan.",
      "Opsi (3): konsultasi ke penasihat hukum dan asosiasi profesional intelijen kompetitif, lalu menemui atasan.",
      "Kerangka acuan: boundary spanning dan empat sumber business intelligence [hal. 64–65]; cultural leadership [hal. 77]; tiga domain tindakan dan dilema etis [hal. 119, 122]."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification).",
      "Klasifikasikan cara atasan memperoleh dokumen memakai empat sumber business intelligence, lalu nilai apakah termasuk pemindaian lingkungan yang wajar.",
      "Jawab: (Q1) apa yang dikomunikasikan tindakan atasan tentang nilai perusahaan menurut konsep cultural leadership? (Q2) mengapa hukum saja tidak cukup memutuskan kasus ini? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai business intelligence dan cultural leadership dengan [hal. X] (40%)",
      "Ketajaman membedakan hukum, etika, dan pilihan bebas (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): Miquel menerima dokumen strategis rahasia pesaing dari atasannya. Cara atasan memperolehnya dijelaskan tidak konsisten, dan tidak ada kebijakan perusahaan yang jelas.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: asal dokumen dan keabsahannya belum jelas.\nP2: memakai dokumen berarti Miquel ikut menanggung akibatnya.\nP3: tidak ada panduan perusahaan, sehingga nilai ditentukan oleh contoh atasan.\n3. Analisis Kasus: Business intelligence memindai lingkungan dari empat sumber: personal internal, personal external, organizational internal, dan organizational external [hal. 65]; boundary spanning juga mencakup upaya memengaruhi lingkungan [hal. 66]. Mengunduh dokumen dari bagian privat intranet pesaing sulit disebut pemindaian dari sumber terbuka (hasil analisis). Cultural leader memperhatikan aktivitas sehari-hari agar orang, prosedur, dan imbalan cocok dengan nilai, dan pernyataan nilai tanpa perilaku manajemen tidak bermakna [hal. 77]. Buku sendiri menyebut hukum tentang pengumpulan informasi pesaing tidak tegas dan pendapat tentang etikanya terbelah [hal. 122], dan domain etika ada di antara hukum dan pilihan bebas [hal. 119].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: tindakan atasan mengajarkan bahwa hasil boleh dikejar dengan cara apa pun; ini mengarah ke kuadran A pada Exhibit 2.7 (kinerja dikejar, nilai budaya diabaikan) [hal. 75–77].\nQ2: karena hukum tidak tegas, domain etika (social standard) ikut menentukan [hal. 119, 122].\nQ3: opsi 3.\n5. Rekomendasi Manajerial: Pilih opsi 3. Miquel tidak memakai dokumen itu sebelum mendapat nasihat hukum, lalu menemui atasan dengan dasar yang jelas. Opsi 1 membuatnya ikut menikmati hasilnya; opsi 2 tanpa nasihat hukum hanya berupa konfrontasi tanpa dasar."
  },
  {
    "type": "case",
    "scope": "TM 3: Global Outsourcing, Legal-Political, dan Keputusan Etis Lintas Negara",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 3 (Ethical Dilemma \"AH Biotech\", Ch. 3 hal. 112–113): Uji Klinis Obat Baru di Negara dengan Biaya Lebih Rendah",
    "context": "Dr. Abraham Hassan, CEO perusahaan rintisan bioteknologi di New Jersey, harus memutuskan lokasi uji klinis skala besar untuk obat baru serangan panik. Kepala R&D mengusulkan Albania: lebih cepat, lebih mudah, dan menurut kasus menghemat setidaknya 25%, karena hambatan hukum dan politik sedikit dan dokter setempat dibayar lebih baik sebagai peneliti. Namun setelah uji selesai, obat itu tidak akan dipasarkan di Albania, sehingga pengobatan peserta harus dihentikan.",
    "data": [
      "Opsi (1): uji di Albania.",
      "Opsi (2): uji di Amerika Serikat, walau lebih mahal dan lama.",
      "Opsi (3): uji di Albania dan, bila obat disetujui, memakai sebagian laba untuk program pengobatan lanjutan bagi warga Albania.",
      "Kerangka acuan: global outsourcing [hal. 97–98]; ethnocentrism [hal. 102]; lima pendekatan etika [hal. 124–126]; compensatory justice [hal. 125]."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification).",
      "Klasifikasikan usulan Albania dalam Exhibit 3.3 dan jelaskan tujuannya menurut buku.",
      "Jawab: (Q1) mengapa usulan ini termasuk global outsourcing dan apa tujuan strategi itu? (Q2) bagaimana penilaian pendekatan utilitarian, moral-rights, dan justice atas tiap opsi? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan klasifikasi strategi dan pendekatan etika dengan [hal. X] (40%)",
      "Kelogisan penilaian tiap opsi (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): CEO memilih antara menguji obat di Albania yang lebih murah, cepat, dan mudah atau di AS yang lebih mahal. Obat tidak akan dipasarkan di Albania, sehingga pengobatan peserta berhenti setelah uji.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: penghematan biaya vs kewajiban terhadap peserta uji.\nP2: pengobatan peserta berhenti begitu uji selesai.\nP3: hambatan hukum yang lebih ringan bisa menjadi alasan memilih lokasi, bukan hanya alasan efisiensi.\n3. Analisis Kasus: Memindahkan pekerjaan ke negara berbiaya lebih rendah adalah global outsourcing, yang bertujuan memperoleh sumber daya lebih murah, bukan mengembangkan pasar [hal. 97–98]. Dengan pendekatan utilitarian, manfaat bagi banyak orang (obat baru, biaya lebih rendah) ditimbang dengan efek pada semua pihak [hal. 124]. Dengan moral-rights, hak persetujuan bebas (free consent) peserta harus dijaga [hal. 124–125]. Compensatory justice menuntut pihak yang bertanggung jawab memberi kompensasi atas kerugian [hal. 125]. Tes practical: rela keputusan itu diberitakan dan dijelaskan kepada keluarga [hal. 126]. Pertimbangkan pula kecenderungan menilai lokasi dari sudut pandang sendiri (ethnocentrism) [hal. 102].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: pekerjaan uji dipindahkan ke negara dengan hambatan lebih rendah dan biaya lebih murah, sesuai tujuan mencari sumber daya lebih murah [hal. 97–98].\nQ2: utilitarian condong ke opsi 1 atau 3, moral-rights menuntut informed consent penuh, justice condong ke opsi 3 karena ada kompensasi (hasil analisis).\nQ3: opsi 3.\n5. Rekomendasi Manajerial: Pilih opsi 3, dengan syarat program pengobatan lanjutan disepakati sebelum uji dimulai dan dikomunikasikan dalam persetujuan peserta, bukan baru dijanjikan bila obat lolos. Bila syarat itu tidak bisa dipenuhi, pilih opsi 2."
  },
  {
    "type": "case",
    "scope": "TM 4: Legal vs Etis, Justice, Practical Approach, dan Whistle-Blowing",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 4 (Ethical Dilemma \"Should We Go Beyond the Law?\", Ch. 4 hal. 145–146): Limbah ke Sungai dalam Batas Hukum",
    "context": "Nathan Rosillo, pengembang produk utama di Chem-Tech Corporation, dan timnya mengembangkan pelumas baru yang dianggap titik balik perusahaan. Produk itu bisa dibuat jauh lebih murah karena regulasi lingkungan dilonggarkan, sehingga perusahaan kini boleh membuang limbah langsung ke sebuah sungai. Nathan menyampaikan keberatan; manajer pabrik menjawab perusahaan memenuhi standar pemerintah dan melindungi air adalah urusan pemerintah. Atasannya sudah menuduhnya bukan pemain tim.",
    "data": [
      "Opsi (1): bicara dengan wakil presiden manufaktur dan usulkan pengurangan polusi sukarela sebagai alat pemasaran.",
      "Opsi (2): diam dan bekerja saja, karena perusahaan tidak melanggar hukum dan banyak orang bisa kehilangan pekerjaan.",
      "Opsi (3): hubungi kelompok advokasi lingkungan agar memprotes perusahaan.",
      "Kerangka acuan: tiga domain tindakan [hal. 119]; justice dan practical approach [hal. 125–126]; komunitas sebagai stakeholder [hal. 132–133]; whistle-blowing [hal. 141]."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification).",
      "Tempatkan tindakan perusahaan pada Exhibit 4.1 dan nilai dengan justice dan practical approach serta perspektif stakeholder.",
      "Jawab: (Q1) apakah \"tidak melanggar hukum\" sama dengan etis? (Q2) siapa stakeholder yang terdampak dan apa kepentingannya? (Q3) opsi mana yang Anda pilih, dan kapan opsi 3 baru layak?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai Exh. 4.1, pendekatan etika, dan stakeholder dengan [hal. X] (40%)",
      "Kelogisan urutan langkah internal sebelum eksternal (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): Chem-Tech dapat membuang limbah langsung ke sungai dengan sah dan menghemat biaya. Nathan keberatan, manajer pabrik menyatakan perusahaan patuh hukum, dan Nathan dicap bukan pemain tim.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: tindakan legal tetapi berpotensi merugikan komunitas.\nP2: konflik antara lapangan kerja dan kesehatan lingkungan.\nP3: risiko pribadi bagi Nathan bila bersuara.\n3. Analisis Kasus: Exhibit 4.1: hukum (codified law) hanya satu domain; domain etika punya standar sosial yang tidak diatur hukum khusus, jadi tidak melanggar hukum belum tentu etis [hal. 119]. Justice approach paling dekat dengan hukum, sedangkan practical approach mengajukan tes: diterima komunitas profesi, rela diberitakan, nyaman dijelaskan kepada keluarga dan teman [hal. 125–126]. Komunitas adalah stakeholder utama dengan kepentingan pada kepatuhan hukum, dampak sosial positif, dan perlindungan lingkungan [hal. 132–133]. Dilema limbah vs lapangan kerja adalah konflik antara kebutuhan bagian dan keseluruhan [hal. 123–124]. Triple bottom line menuntut People dan Planet ikut diukur [hal. 135–136]. Whistle-blower sering melapor ke pihak luar, tetapi perusahaan yang sehat menyediakan jalur internal [hal. 141].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: tidak; ada domain etika di luar hukum [hal. 119].\nQ2: komunitas sekitar sungai (kesehatan, lingkungan), karyawan (pekerjaan), pemegang saham (efisiensi), pelanggan [hal. 132–133].\nQ3: opsi 1; opsi 3 baru layak bila jalur internal sudah ditempuh dan ditolak (hasil analisis).\n5. Rekomendasi Manajerial: Pilih opsi 1: bicara dengan wakil presiden manufaktur dan ajukan pengurangan polusi sukarela sebagai nilai pemasaran, yang menjaga pekerjaan sekaligus melindungi komunitas. Opsi 2 gagal pada tes practical (sulit rela diberitakan); opsi 3 dipertimbangkan hanya setelah jalur internal buntu."
  },
  {
    "type": "case",
    "scope": "TM 5: Goal Setting, MBO, dan Keterbatasan Perencanaan",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 5 (Ethical Dilemma \"Inspire Learning Corporation\", Ch. 5 hal. 188–189): Target Penjualan dan Sumbangan Sebesar Selisihnya",
    "context": "Marge Brygay, sales rep sebuah perusahaan software pendidikan yang menargetkan menjadi nomor satu dalam lima tahun, punya target penjualan satu juta dolar. Beberapa hari sebelum akhir tahun, penjualannya kurang $1.000 karena satu penjualan besar batal akibat pemotongan anggaran sebuah sistem sekolah. Ia terpikir menyumbang $1.000 ke sebuah SMA pusat kota yang paling membutuhkan software itu agar sekolah bisa membelinya; tercapainya target akan memberinya bonus $10.000 untuk biaya kuliah anaknya.",
    "data": [
      "Opsi (1): menyumbang dan menganggap bonus sebagai imbal hasil, karena tidak ada yang ilegal.",
      "Opsi (2): menerima bahwa target tidak tercapai dan bekerja lebih cerdas tahun depan.",
      "Opsi (3): tidak menyumbang, tetapi mencari cara lain membantu sekolah itu mengumpulkan dana.",
      "Kerangka acuan: tingkatan goal (Exh. 5.1) dan goal efektif yang dikaitkan reward (Exh. 5.4) [hal. 151–154, 160–161]; MBO dan keterbatasannya [hal. 161–163]; tekanan berlebihan [hal. 165]; legal vs etis [hal. 119]."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification).",
      "Tempatkan target Marge dalam rantai goal dari strategic sampai operasional dan nilai karakteristik goal efektif serta hubungannya dengan reward.",
      "Jawab: (Q1) bagaimana target individu ini terkait strategic goal perusahaan? (Q2) apa keterbatasan MBO dan perencanaan yang tampak pada kasus? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai Exh. 5.1, 5.4, dan keterbatasan MBO dengan [hal. X] (40%)",
      "Kelogisan hubungan target, reward, dan cara mencapainya (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): Marge kurang $1.000 dari target dan bisa menutup selisih itu dengan menyumbang ke sekolah yang kemudian membeli software, sehingga ia meraih bonus $10.000.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: target ditutup lewat cara yang mengubah arti pencapaian.\nP2: reward besar terikat pada satu angka.\nP3: pembatalan penjualan berada di luar kendalinya.\n3. Analisis Kasus: Target Marge adalah operational goal yang diturunkan dari strategic goal perusahaan (Exh. 5.1) [hal. 151–154]. Goal efektif dikaitkan dengan reward [hal. 161], tetapi penekanan berlebihan pada memenuhi target dapat mengaburkan cara mencapainya sehingga orang memotong jalan atau berperilaku tidak etis demi target [hal. 163]; buku menyebut tekanan berlebihan sebagai keterbatasan perencanaan [hal. 165]. MBM (management by means) menekankan cara sama pentingnya dengan hasil [hal. 163]. Tidak ilegal belum berarti etis [hal. 119]; tes practical: rela diberitakan dan nyaman dijelaskan kepada keluarga [hal. 126].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: target individu adalah operational goal yang mendukung tactical dan strategic goals (Exh. 5.1) [hal. 152–154].\nQ2: tekanan berlebihan dan penekanan pada hasil di atas cara [hal. 163, 165].\nQ3: opsi 3.\n5. Rekomendasi Manajerial: Pilih opsi 3: tidak menyumbang untuk menutup selisih, tetapi membantu sekolah itu mencari dana lewat jalur lain, dan menerima bahwa bonus bergantung pada hasil penjualan yang sesungguhnya (opsi 2 sebagai konsekuensinya). Menyumbang agar sekolah membeli produknya untuk memenuhi target sendiri gagal pada tes practical."
  },
  {
    "type": "case",
    "scope": "TM 6: Keputusan Nonprogrammed, Enam Langkah, dan Gaya Keputusan",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 6 (Ethical Dilemma \"The No-Show Consultant\", Ch. 6 hal. 223): Konsultan Andalan yang Tidak Hadir dan Klien yang Menuntut",
    "context": "Jeffrey Moses, manajer baru di sebuah perusahaan konsultan software, menghadapi masalah dengan salah satu konsultan terbaiknya, Andrew Carpenter, yang bekerja dari rumah. Carpenter tidak datang ke kantor pusat klien besar di New York saat sistem baru akan dipakai, beberapa kali absen di Senin pagi, dan pergi tanpa pamit dari kantor klien. Klien ingin Carpenter tetap menyelesaikan proyek, tetapi menuntut perusahaan menanggung separuh fee konsultan $250.000. Carpenter mengaku sedang mengalami masalah keluarga dan minum berlebihan, dan berjanji memperbaiki diri; Moses sudah mengatakan semuanya dimaafkan bila proyek selesai. Ketua tim ingin memberinya kesempatan; wakil presiden operasi menyarankan pemecatan.",
    "data": [
      "Opsi (1): memberi pemberitahuan sebulan lalu memberhentikannya.",
      "Opsi (2): membiarkan karena ini kesalahan besar pertamanya.",
      "Opsi (3): menunjukkan kepedulian tetapi mewajibkan cuti berbayar singkat dan konseling, dengan syarat program perawatan atau keluar bila masalah berlanjut.",
      "Kerangka acuan: nonprogrammed decision dan uncertainty [hal. 195–197]; enam langkah [hal. 205–209]; gaya behavioral vs directive [hal. 212–213]; lima pendekatan etika [hal. 124–126]. Kasus ditulis sebatas fakta; tidak ada penilaian medis."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification).",
      "Klasifikasikan keputusan (programmed atau nonprogrammed) dan kondisinya, lalu petakan ke enam langkah.",
      "Jawab: (Q1) mengapa ini nonprogrammed decision dalam kondisi uncertainty? (Q2) apa alternatif tambahan yang bisa dikembangkan di langkah 3? (Q3) opsi mana yang Anda pilih, dan gaya keputusan apa yang tercermin?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan klasifikasi keputusan, kondisi, dan enam langkah dengan [hal. X] (40%)",
      "Kelogisan penilaian alternatif dan pendekatan etika (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): Carpenter beberapa kali tidak hadir dan mengaku bermasalah, klien menuntut perusahaan menanggung separuh fee, dan dua pihak internal berbeda saran (beri kesempatan atau berhentikan). Moses harus memilih.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: keandalan proyek dan hubungan klien.\nP2: biaya $250.000 yang dituntut klien.\nP3: kepedulian pada karyawan vs ketegasan disiplin.\nP4: janji pemaafan yang sudah diucapkan.\n3. Analisis Kasus: Situasi ini unik dan berdampak penting, sehingga nonprogrammed decision [hal. 195]. Informasi tentang masa depan Carpenter tidak lengkap, jadi kondisinya uncertainty [hal. 197]. Enam langkah: recognition (ada problem), diagnosis (penyebab), pengembangan alternatif (membatasi alternatif adalah penyebab utama keputusan gagal; riset Nutt) [hal. 205–207], selection, implementation (butuh buy-in), evaluation [hal. 205–209]. Ketua tim condong ke gaya behavioral, wakil presiden operasi ke directive [hal. 212–213] (hasil analisis). Emosi dan kecenderungan membenarkan janji yang sudah diucapkan adalah bias yang perlu diwaspadai [hal. 214–215].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: keputusan tidak berulang, berdampak besar, dan hasilnya tidak bisa diprediksi.\nQ2: misalnya mengganti konsultan pada proyek itu sementara Carpenter menjalani perawatan, atau bernegosiasi soal fee dengan klien (hasil analisis).\nQ3: opsi 3; pemberhentian langsung mencerminkan gaya directive, sedangkan opsi 3 memadukan kepedulian dengan syarat tertulis.\n5. Rekomendasi Manajerial: Pilih opsi 3: cuti berbayar singkat, konseling, dan syarat tertulis (ikut program perawatan atau keluar bila masalah berlanjut), sambil menyiapkan pengganti untuk proyek klien dan menegosiasikan tuntutan fee. Opsi 2 tanpa syarat mengabaikan klien; opsi 1 mengabaikan pengembangan alternatif."
  },
  {
    "type": "case",
    "scope": "TM 7: Authority, Responsibility, Accountability, dan Chain of Command",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 7 (Ethical Dilemma \"LionCub Toys\", Ch. 7 hal. 263): Pedoman Keselamatan Baru dan Atasan yang Diam",
    "context": "Tom Harold, asisten quality control officer di LionCub Toys, baru bekerja setelah enam bulan menganggur dan ingin memberi kesan baik kepada atasannya, Frank Taandil. Salah satu tugasnya memastikan lini produk baru memenuhi pedoman keselamatan federal. Harold tahu ada banyak perubahan pedoman yang memengaruhi mainan baru; Taandil juga tahu, tetapi tidak bertindak. Harold tidak yakin atasannya mengharapkan ia menjalankan prosedur baru, dan tanggung jawab akhir ada pada atasannya. Ia menghindari pertanyaan dari lantai pabrik untuk melindungi atasannya, sementara musim Natal makin dekat.",
    "data": [
      "Opsi (1): menyiapkan memo kepada Taandil yang merangkum pedoman baru dan meminta otorisasi pelaksanaan.",
      "Opsi (2): diam karena Taandil belum mengatakan apa-apa dan ia tidak ingin melampaui kewenangannya.",
      "Opsi (3): mengirim salinan laporan secara anonim kepada manajer operasi, atasan Taandil.",
      "Kerangka acuan: authority, responsibility, accountability, delegation [hal. 230–231]; chain of command dan scalar principle [hal. 230]; whistle-blowing [hal. 141]."
    ],
    "instructions": [
      "Susun Ringkasan Kasus (Case Summary) dan Identifikasi Permasalahan (Problem Identification).",
      "Petakan posisi Harold dan Taandil dengan authority, responsibility, accountability, dan chain of command.",
      "Jawab: (Q1) siapa yang memegang accountability atas kepatuhan keselamatan dan apa batas authority Harold? (Q2) apa risiko tiap opsi terhadap chain of command? (Q3) opsi mana yang Anda pilih dan apa langkah eskalasinya?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Ringkasan Kasus (Case Summary)",
      "2. Identifikasi Permasalahan (Problem Identification)",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban atas Pertanyaan Kasus",
      "5. Rekomendasi Manajerial (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai authority, responsibility, accountability dengan [hal. X] (40%)",
      "Kelogisan analisis chain of command dan eskalasi (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Ringkasan Kasus (Case Summary): Harold tahu pedoman keselamatan berubah dan atasannya juga tahu tetapi belum bertindak. Ia ragu melampaui kewenangannya, sementara musim penjualan Natal mendekat.\n2. Identifikasi Permasalahan (Problem Identification):\nP1: pedoman keselamatan baru belum dijalankan.\nP2: kejelasan siapa berwenang bertindak.\nP3: bahaya bagi konsumen bila lini mainan dijual tanpa pengecekan.\nP4: keinginan Harold menyenangkan atasan.\n3. Analisis Kasus: Authority melekat pada posisi dan mengalir ke bawah hierarki [hal. 231]; responsibility adalah kewajiban menjalankan tugas, accountability adalah kewajiban melaporkan hasil tugas kepada atasan di chain of command, dan delegation memindahkan authority dan responsibility ke bawah [hal. 231]. Menurut scalar principle, setiap orang harus tahu kepada siapa ia melapor sampai ke puncak [hal. 230]. Responsibility Harold adalah memastikan kepatuhan; authority untuk memerintahkan perubahan ada pada atasannya (hasil analisis). Buku mencontohkan kekacauan bila tidak jelas siapa yang berwenang (Deepwater Horizon) [hal. 232] dan whistle-blower sering melapor ke pihak luar bila jalur internal tidak efektif [hal. 141].\n4. Jawaban atas Pertanyaan Kasus:\nQ1: accountability akhir ada pada Taandil sebagai atasan; Harold memegang responsibility atas tugas pengecekan tetapi authority-nya terbatas pada posisinya [hal. 231].\nQ2: opsi 2 membiarkan celah accountability; opsi 3 melompati chain of command tanpa lebih dulu menyampaikan ke atasan langsung [hal. 230].\nQ3: opsi 1, dengan eskalasi bertahap bila tidak ada respons.\n5. Rekomendasi Manajerial: Pilih opsi 1: memo tertulis kepada Taandil yang merangkum pedoman baru dan meminta otorisasi pelaksanaan, sehingga responsibility Harold terpenuhi dan accountability atasan jelas. Bila memo tidak ditanggapi, eskalasi ke manajer operasi secara terbuka lewat chain of command sebelum menimbang laporan anonim."
  }
];

export const MNM101_BANK_UAS: BankSoal[] = [
  {
    "type": "analysis",
    "scope": "TM 9: Chopper's Sausage House: MRP tertahan",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Chopper's Sausage House: MRP tertahan",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. Wakil presiden operasi mengembangkan proyek material requirements planning terutama seorang diri. Komite eksekutif menolak peluncuran: keuangan ragu, penjualan mempertanyakan perkiraan kebutuhan bahan, dan logistik mengingat gangguan di tempat kerja sebelumnya. CEO mengusulkan task force lintas departemen, tetapi pengusul merasa tim itu akan memperlambat proyek. [hal. 285–290, 295–296]",
    "data": [
      "350 pegawai; setidaknya 25 manajer/pegawai perlu mengubah cara kerja.",
      "Perkiraan pengusul: kenaikan kas tahunan USD600.000 dan penghematan waste sampai USD200.000. Keduanya belum merupakan hasil realisasi.",
      "Data untuk mock-up sulit didapat; sebagian manajer tidak menghadiri pertemuan.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 285–290, 295–296]."
    ],
    "instructions": [
      "Jelaskan resistensi dengan bukti yang berbeda untuk tiap pihak.",
      "Nilai kegunaan task force lintas departemen.",
      "Pilih taktik implementasi dan susun tahapan Lewin yang dapat dievaluasi."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: 1. Kekhawatiran penjualan/logistik menunjukkan penilaian manfaat dan risiko yang berbeda; riwayat implementasi gagal mendukung ketidakpercayaan atau ketidakpastian. Ketidakhadiran merupakan tanda keterlibatan lemah, tetapi teks tidak membuktikan semua pihak sengaja menyabotase. 2. Task force menambah informasi dari pengguna dan koordinasi, serta membantu menguji kebutuhan bahan, forecast dan pengiriman. Waktu rapat adalah biaya yang perlu ditimbang terhadap risiko peluncuran sepihak. 3. Dukungan CEO memberi legitimasi; komunikasi/pendidikan menjawab kekhawatiran teknis; participation melibatkan pengguna dalam rancangan. Unfreezing menguji kebutuhan serta masalah, changing melakukan uji coba/pelatihan, refreezing mengevaluasi dan mempertahankan perilaku yang berhasil. Memaksa peluncuran sebelum kendala diketahui dapat meningkatkan risiko operasi. Perkiraan kas/penghematan perlu diuji dan tidak otomatis dijumlahkan sebagai manfaat bersih. [hal. 285–290, 295–296]"
  },
  {
    "type": "analysis",
    "scope": "TM 9: Latihan: ide banyak, penerapan tersendat",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: ide banyak, penerapan tersendat",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Sebuah unit layanan menerima usulan perbaikan antrean dari staf. Tim kreatif bebas menguji ide, tetapi belum ada pemilik implementasi dan koordinasi antara layanan, teknologi dan administrasi. Staf khawatir cara baru akan menambah pekerjaan. [hal. 270–281, 285–290]",
    "data": [
      "Asumsi latihan: kebutuhan layanan dan kewenangan masing-masing unit masih perlu diklarifikasi.",
      "Tidak ada data yang membuktikan besarnya penghematan.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 270–281, 285–290]."
    ],
    "instructions": [
      "Pisahkan kebutuhan exploration dan exploitation.",
      "Pilih peran/struktur untuk membawa ide ke penerapan.",
      "Rancang diagnosis resistensi dan indikator keberhasilan."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Exploration memerlukan kesempatan mencoba gagasan; exploitation memerlukan rutinitas, tanggung jawab dan dukungan implementasi. Idea champion dapat membawa gagasan dan membangun dukungan, sementara hubungan horizontal menyelaraskan kebutuhan pengguna dan kelayakan teknis. Libatkan staf untuk memetakan beban kerja dan lakukan pelatihan sebelum penggunaan penuh. Evaluasi waktu layanan, kesalahan dan beban kerja dengan ukuran awal yang disepakati. Menambah kontes ide tanpa pemilik implementasi tidak menyelesaikan hambatan tersebut; penggunaan paksaan tanpa diagnosis dapat menurunkan keterlibatan. [hal. 270–281, 285–290]"
  },
  {
    "type": "analysis",
    "scope": "TM 10: Whether to Fire Employees?: keputusan saat krisis",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Whether to Fire Employees?: keputusan saat krisis",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. Perusahaan pemasok otomotif mengalami penurunan keuangan setelah pandemi mengganggu produksi dan pemenuhan pesanan. Seorang manajer senior ingin mempertahankan sebanyak mungkin pegawai melalui penyederhanaan kerja, evaluasi situasi individu dan kemungkinan pengurangan gaji. Manajer lain mengusulkan pemotongan pegawai segera melalui forced ranking. [hal. 308–309, 324–328, 358]",
    "data": [
      "Teks tidak menyediakan angka kas, besarnya pengurangan biaya yang wajib, atau data kinerja tiap pegawai.",
      "Ada dua pandangan mengenai relasi perusahaan-pegawai dan cara menjaga kinerja.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 308–309, 324–328, 358]."
    ],
    "instructions": [
      "Identifikasi social contract yang diasumsikan kedua pihak.",
      "Pilih rekomendasi sebagai manajer HR dengan alasan dan syarat pelaksanaan.",
      "Jelaskan dampak pada human capital dan performance, serta kelemahan alternatif."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Manajer senior mencerminkan kontrak yang menekankan loyalitas, keamanan kerja dan hubungan jangka panjang; usul lain menekankan kecocokan kebutuhan perusahaan dan fleksibilitas tenaga kerja. Rekomendasi yang kuat memulai evaluasi kebutuhan bisnis dan kinerja dengan data, mempertimbangkan streamlining serta alternatif penghematan, dan menetapkan kriteria keputusan yang relevan pekerjaan. Pendekatan mempertahankan talenta lebih dekat dengan investasi human capital, selama perusahaan mampu menjalankan alternatif tersebut. Data kasus tidak cukup untuk menjamin semua pekerjaan dapat dipertahankan atau menyatakan pemotongan pasti tidak perlu. Forced ranking mendadak dapat mengorbankan pengetahuan, kerja sama dan trust; mempertahankan setiap orang tanpa evaluasi juga berisiko bagi kelangsungan organisasi. Komunikasi, evaluasi yang konsisten dan dukungan bagi pegawai perlu menyertai keputusan. [hal. 308–309, 324–328, 358]"
  },
  {
    "type": "analysis",
    "scope": "TM 10: Latihan: seleksi relevan, pengembangan dan inclusion",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: seleksi relevan, pengembangan dan inclusion",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Unit layanan membutuhkan staf untuk menangani keluhan pelanggan dan memeriksa dokumen. Panel seleksi menilai kandidat berdasarkan kesan pribadi, sementara pegawai baru menerima sedikit feedback dan tidak mendapat akses proyek untuk berkembang. [hal. 312–325, 335–342, 350]",
    "data": [
      "Asumsi: tugas memerlukan ketelitian, komunikasi dan kemampuan mempelajari sistem.",
      "Belum ada data yang membuktikan kesan panel memprediksi hasil kerja.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 312–325, 335–342, 350]."
    ],
    "instructions": [
      "Susun dasar seleksi yang relevan dan cara mengurangi bias.",
      "Hubungkan program pengembangan dengan kebutuhan unit.",
      "Bedakan mentor, sponsor dan coaching serta ukuran inclusion."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Gunakan job analysis untuk merumuskan tugas dan job specification, kemudian wawancara terstruktur dan work sample pemeriksaan dokumen/penanganan keluhan. Berikan realistic job preview agar kedua pihak memahami kecocokan pekerjaan. Training menangani tugas sekarang; development menyiapkan kemampuan lebih luas. Mentor memberi arahan; sponsor memperjuangkan akses ke kesempatan/pengembangan karier; coaching memberikan percakapan serta feedback teratur. Tinjau apakah staf mendapat suara, feedback spesifik dan kesempatan yang relevan. Menyamakan inclusion dengan komposisi pegawai saja atau memilih berdasarkan stereotip belum menjawab mutu proses. [hal. 312–325, 335–342, 350]"
  },
  {
    "type": "analysis",
    "scope": "TM 11: Conficio Industries: nice, tanggung jawab dan promosi",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Conficio Industries: nice, tanggung jawab dan promosi",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. Panel menilai kandidat promosi manajemen di San Antonio setelah mengamati kerja, menerima peer feedback dan mewawancarai kandidat. Salah satu kandidat memulihkan morale serta trust ketika beredar rumor PHK. Pegawai menyebutnya nice dan selalu membantu. Panel mempertanyakan apakah bantuan itu mengambil alih tugas, membiarkan tenggat longgar dan menghindari batas. Panel dalam teks memilih melanjutkan seleksi serta mengembangkan kandidat ini untuk kesempatan berikutnya. [hal. 367–375, 382–383, 398–399]",
    "data": [
      "Nice merupakan penilaian sosial; catatan panel memuat bukti positif dan kekhawatiran yang perlu dibedakan.",
      "Teks tidak membuktikan profil Big Five atau skor EI kandidat.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 367–375, 382–383, 398–399]."
    ],
    "instructions": [
      "Jelaskan makna nice bagi manajer dengan menghubungkan agreeableness, conscientiousness dan EI.",
      "Pisahkan pengamatan dan atribusi panel.",
      "Usulkan pengembangan yang mempertahankan trust sekaligus meningkatkan akuntabilitas."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Agreeableness membantu kerja sama dan relasi, tetapi popularitas belum membuktikan pengelolaan tugas. Conscientiousness menuntut tanggung jawab, ketekunan dan pencapaian. EI dapat membantu memahami kebutuhan pegawai, mengatur emosi saat berkata tidak, dan memberi feedback dengan hormat. Rumor PHK yang diredakan adalah bukti trust; dugaan menutupi kelemahan atau mengambil alih kerja perlu dikonfirmasi lewat deadline, pembagian tanggung jawab dan contoh keputusan. Jangan menyimpulkan kelemahan bawaan hanya dari label nice. Saran: delegasi dengan ekspektasi jelas, pemeriksaan kemajuan, coaching atas kekurangan, batas yang konsisten serta latihan percakapan sulit. Evaluasi hasil dan perilaku bersama; keputusan panel yang tertulis tidak sama dengan pembuktian bahwa kandidat pasti gagal sebagai pemimpin. [hal. 367–375, 382–383, 398–399]"
  },
  {
    "type": "analysis",
    "scope": "TM 11: Latihan: keterlambatan, atribusi dan beban kerja",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: keterlambatan, atribusi dan beban kerja",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Seorang anggota terlambat menyerahkan laporan. Manajer langsung menyebutnya malas, namun ketika laporan manajer sendiri terlambat ia menyalahkan perubahan permintaan. Anggota menerima instruksi berbeda dari dua atasan. [hal. 369–371, 382–387, 388–392]",
    "data": [
      "Asumsi: kedua atasan memberi prioritas yang saling bertentangan.",
      "Belum tersedia bukti penyebab keterlambatan atau sifat anggota.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 369–371, 382–387, 388–392]."
    ],
    "instructions": [
      "Identifikasi bias dan jenis masalah peran.",
      "Susun pemeriksaan fakta dan tindakan pengelolaan stres.",
      "Tunjukkan penggunaan EI dan self-management."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Penilaian kegagalan orang lain sebagai sifat dan kegagalan sendiri sebagai keadaan menunjukkan fundamental attribution error. Mengambil kredit pribadi untuk keberhasilan sambil menolak tanggung jawab kegagalan akan menunjukkan self-serving bias; ilustrasi belum menyebut keberhasilan, sehingga label kedua ini perlu bukti tambahan. Instruksi yang tidak kompatibel merupakan role conflict, sementara role ambiguity membutuhkan bukti ketidakjelasan ekspektasi. Periksa urutan instruksi, kapasitas dan deadline; selaraskan prioritas dua atasan. Gunakan empati, feedback yang spesifik, dukungan dan kontrol yang wajar atas pekerjaan. Catat komitmen, tentukan next action dan jadwal, lalu review. Menambah tekanan tanpa memperbaiki konflik tidak menyelesaikan penyebab. [hal. 369–371, 382–387, 388–392]"
  },
  {
    "type": "analysis",
    "scope": "TM 12: Pulse Exercise Systems: tenggat CRM dan kepemimpinan",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Pulse Exercise Systems: tenggat CRM dan kepemimpinan",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. Perusahaan perlu memperbaiki follow-up layanan penjualan melalui CRM. Pemimpin proyek menangani implementasi untuk Los Angeles dan Chicago dengan tenggat sepuluh minggu, termasuk instalasi dan training. Ia memprioritaskan kemampuan teknis, kurang menghargai people/team skills, dan seorang anggota mengundurkan diri. Anggota Chicago yang tersisa bertengkar atau saling menghindar; pemimpin baru mengetahui dari pihak sales. [hal. 415–420, 428–432, 435–437]",
    "data": [
      "Teks menyebut sales force 310 orang, bukan 310 anggota tim implementasi.",
      "Tim proyek awal terdiri dari dua orang Los Angeles dan tiga Chicago; satu Chicago keluar.",
      "Tenggat sepuluh minggu adalah target, bukan bukti proyek selesai.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 415–420, 428–432, 435–437]."
    ],
    "instructions": [
      "Nilai task-oriented dan people-oriented behavior dengan bukti.",
      "Susun langkah pemulihan kerja sama dan komunikasi.",
      "Jelaskan pengembangan pemimpin untuk tanggung jawab yang lebih luas."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Pemimpin sangat menekankan keahlian teknis, urgency dan hasil tetapi kurang consideration serta pemantauan relasi. Tekanan, kehilangan anggota dan perbedaan situasi tim perlu diagnosis, bukan tuduhan kurang passion. Saran: dengarkan kedua lokasi, tetapkan prioritas/ruang lingkup dan tanggung jawab, periksa kapasitas serta negosiasikan sumber daya/tenggat bila diperlukan. Adakan komunikasi dan feedback lintas lokasi, bantu konflik Chicago secara spesifik, dan beri pengakuan pada kontribusi teknis maupun kerja sama. Gaya dapat disesuaikan dengan readiness tiap tugas; teks tidak cukup untuk memberi semua anggota satu kode R. Untuk jabatan lebih tinggi, kembangkan delegasi, consideration, hubungan lintas fungsi dan penilaian risiko. Tidak ada jaminan rekomendasi membuat deadline terpenuhi. [hal. 415–420, 428–432, 435–437]"
  },
  {
    "type": "analysis",
    "scope": "TM 12: Latihan: readiness berbeda dan pengaruh tanpa jabatan",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: readiness berbeda dan pengaruh tanpa jabatan",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Tim mempunyai anggota baru yang bersemangat tetapi belum mampu memakai sistem, serta ahli yang mampu namun ragu mengambil keputusan. Seorang analis tanpa jabatan membantu menjelaskan risiko dengan data. [hal. 416–417, 428–432]",
    "data": [
      "Asumsi: kemampuan dan willingness diamati untuk tugas sistem yang sama.",
      "Ahli belum menunjukkan willingness/confidence tinggi.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 416–417, 428–432]."
    ],
    "instructions": [
      "Pilih gaya bagi dua anggota dengan dua dimensi perilaku.",
      "Identifikasi power analis dan taktik pengaruhnya.",
      "Jelaskan tindak lanjut ketika readiness berubah."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Anggota unable tetapi willing termasuk R2: S2 selling, task dan relationship tinggi, dengan penjelasan serta kesempatan klarifikasi. Ahli able tetapi insecure termasuk R3: S3 participating, relationship tinggi dan task rendah, dengan fasilitasi keputusan. Analis menggunakan expert power dan rational persuasion; pengaruh tidak harus bersumber dari legitimate power. Evaluasi kemampuan, confidence dan hasil tugas; sesuaikan dukungan/instruksi ketika readiness berubah. Delegating untuk semua orang atau telling kepada ahli tanpa diagnosis dapat merusak morale. [hal. 416–417, 428–432]"
  },
  {
    "type": "analysis",
    "scope": "TM 13: Morgan’s Department Store: komisi, layanan dan keadilan",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Morgan’s Department Store: komisi, layanan dan keadilan",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. Toko mengubah seluruh sales team dari hourly pay ke straight commission untuk mendorong layanan personal serta clientele. Eksperimen dua tahun mendapat respons positif dan peningkatan penjualan, tetapi muncul penjualan agresif, kompetisi, penolakan tugas di luar sales floor serta ketimpangan peluang antarbagian. [hal. 451–459, 462–466, 469–470]",
    "data": [
      "Kasus membandingkan belt USD50 dan designer dress USD2.800, tanpa memberi tarif komisi.",
      "Komisi per transaksi tidak dapat dihitung hanya dari harga tersebut.",
      "Customer referrals, repeat business, sales dan comment cards dipantau selama program.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 451–459, 462–466, 469–470]."
    ],
    "instructions": [
      "Nilai manfaat/risiko melalui expectancy, equity dan reinforcement.",
      "Usulkan penyesuaian insentif yang tetap mendorong layanan personal dan kerja sama.",
      "Jelaskan risiko loyalitas pelanggan pada individu dan rencana evaluasi."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Komisi memperjelas hubungan performance–outcome dan memberi autonomy/ownership psikologis, tetapi E→P dipengaruhi kesempatan menjual dan kemampuan. Valence pendapatan pasti berbeda dari valence penghasilan berisiko. Keluhan bagian berharga rendah layak diperiksa sebagai perbedaan peluang serta persepsi rasio input/outcome. Rewards penjualan individu saja dapat memperkuat pushy selling dan mengabaikan bantuan tim. Saran: evaluasi peluang dan kontribusi antarbagian, pertimbangkan komponen penghasilan dasar serta insentif individu/tim dan ukuran layanan/kerja sama, dengan aturan transparan. Ini rekomendasi analisis, bukan program final dalam teks. Pantau referrals, repeat business, keluhan, mutu layanan, tugas pendukung dan turnover. Pelanggan dapat mengikuti sales associate favorit ketika ia pindah; perkuat hubungan pelanggan dengan layanan serta informasi organisasi dengan menjaga privasi, tanpa menyatakan perpindahan pasti terjadi. [hal. 451–459, 462–466, 469–470]"
  },
  {
    "type": "analysis",
    "scope": "TM 13: Latihan: reward menarik, tetapi jalur usaha tidak jelas",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: reward menarik, tetapi jalur usaha tidak jelas",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Unit layanan menawarkan bonus atas target penyelesaian. Pegawai menghargai bonus tetapi merasa sistem sering rusak, standar berubah dan manajer kadang membatalkan reward setelah target tercapai. [hal. 447–448, 451–456, 460–461]",
    "data": [
      "Asumsi: pegawai ingin bonus, jadi valence tinggi.",
      "Tidak tersedia angka probabilitas effort/performance/outcome.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 447–448, 451–456, 460–461]."
    ],
    "instructions": [
      "Diagnosis E→P, P→O dan valence.",
      "Bedakan perbaikan fasilitas dengan job enrichment.",
      "Susun goal dan feedback yang masuk akal."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Sistem rusak menghambat E→P; reward dibatalkan melemahkan P→O. Valence tinggi tidak menutup dua kelemahan ini. Perbaiki fasilitas, sumber daya dan standar; pastikan kaitan performance/reward konsisten serta dapat dipercaya. Fasilitas memadai termasuk hygiene; enrichment menambah responsibility, growth dan achievement dalam kerja. Gunakan tujuan specific, challenging namun realistis, accepted serta feedback kemajuan. Tidak ada dasar menghitung motivational force numerik; evaluasi persepsi dan perilaku sebelum mengubah skema. [hal. 447–448, 451–456, 460–461]"
  },
  {
    "type": "analysis",
    "scope": "TM 14: Brainchild: mencari fakta tanpa menghancurkan trust",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Brainchild: mencari fakta tanpa menghancurkan trust",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. CEO perusahaan mainan marah setelah merasa desain produk rahasia bocor. Ia mengirim pesan emosional kepada penasihat dan pesan bernada ancaman kepada semua manajer sambil meminta TOTALLY HONEST findings. Manajer merasa diserang. Pesan privat ikut beredar kepada pegawai dan pers; email permintaan maaf berikutnya belum menghentikan dampak. [hal. 475–488, 494–500, 511, 519–523, 506]",
    "data": [
      "Kasus tidak mengungkap pelaku atau bukti lengkap kebocoran.",
      "Informasi desain dikembangkan piecemeal antarbagian untuk kerahasiaan.",
      "Stock price disebut mendapat minor hit, tanpa angka persentase.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 475–488, 494–500, 511, 519–523, 506]."
    ],
    "instructions": [
      "Diagnosis masalah pesan, channel, emosi dan feedback.",
      "Susun komunikasi awal yang lebih sesuai.",
      "Usulkan pemulihan trust dan kerja sama tanpa menyimpulkan semua manajer bersalah."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Tujuan mencari fakta dilemahkan encoding yang mengancam dan generalisasi semua orang suspect. Email mudah beredar, miskin cues dan berisiko salah tafsir pada isu emosional. Ancaman mengurangi psychological safety serta kejujuran upward communication. Awali pertemuan/rich channel dengan pihak relevan, sampaikan fakta yang diketahui, batas informasi, kebutuhan investigasi dan proses yang adil. Ikuti dengan catatan tertulis yang jelas, akses terbatas sesuai kebutuhan dan saluran feedback. Kini akui kesalahan pesan serta dampaknya, hentikan tuduhan tanpa bukti, dengarkan kekhawatiran, klarifikasi proses dan lakukan tindak lanjut konsisten. Jaga kebutuhan security dan koordinasi lintas bagian; jangan menganggap apology email saja memulihkan trust atau menemukan pelaku. Teks berakhir dengan pertanyaan tindakan berikutnya; solusi ini adalah analisis. [hal. 475–488, 494–500, 511, 519–523, 506]"
  },
  {
    "type": "analysis",
    "scope": "TM 14: Latihan: tim lintas fungsi, konflik dan feedback",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: tim lintas fungsi, konflik dan feedback",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Tim layanan jarak jauh berisi staf operasi dan administrasi. Instruksi hanya disiarkan lewat chat; anggota tidak memeriksa pemahaman. Mereka berbeda pendapat tentang prioritas, menyimpan informasi perbagian dan berusaha menghindari konflik agar tampak kompak. [hal. 476–490, 519–523, 525–537]",
    "data": [
      "Asumsi: mereka mempunyai tujuan bersama dan tugas interdependent.",
      "Belum ada data yang membuktikan stage atau penyebab tunggal masalah.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 476–490, 519–523, 525–537]."
    ],
    "instructions": [
      "Pilih channel serta siklus feedback untuk isu kompleks.",
      "Hubungkan dysfunction, norms dan pembagian roles.",
      "Bedakan collaborating, compromising dan pola ekspresi konflik."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Gunakan video/percakapan untuk isu ambigu, minta paraphrase dan pertanyaan, lalu catat keputusan secara tertulis. Fear of conflict dapat menghalangi commitment; withholding information dapat mencerminkan norma serta orientasi perbagian. Tetapkan mission, roles, sharing norms dan accountability; bangun safety untuk berbeda pendapat. Task-specialist membantu fakta/solusi; socioemotional membantu relasi dan rekonsiliasi. Collaborating mencari solusi bagi dua kepentingan penting, sedangkan compromising membagi perbedaan. Ekspresikan konflik dengan high directness–low intensity: jelas, tenang, berbasis masalah. Label stage hanya diberi setelah bukti proses tambahan. Evaluasi output, satisfaction dan adaptation/learning bersama. [hal. 476–490, 519–523, 525–537]"
  },
  {
    "type": "analysis",
    "scope": "TM 15: Grading the Teachers: feedback yang fair dan akurat",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Grading the Teachers: feedback yang fair dan akurat",
    "context": "Kasus buku yang ditugaskan RPP, diparafrasekan. Sistem evaluasi memakai observasi principal, observasi master teacher dan gains tes siswa. Tiga guru dari distrik metropolitan, upper-income dan rural membahas perbedaan context serta rating. Mereka mengkhawatirkan subjektivitas, tekanan ekspektasi, observasi yang tidak lengkap dan kebutuhan siswa yang berbeda. [hal. 549–556, 573–575]",
    "data": [
      "Bobot dalam kasus: principal 40%, master teacher 30%, gains tes 30%; rating 1–5.",
      "Kasus menyebut rencana observasi principal dua pada fall dan dua pada spring; master teacher dua setahun.",
      "Dugaan principal memalsukan observasi disampaikan salah satu tokoh, belum hasil investigasi.",
      "Angka 60% rating 5 pada distrik affluent adalah pernyataan tokoh kasus, bukan statistik semua sekolah.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 549–556, 573–575]."
    ],
    "instructions": [
      "Petakan empat langkah feedback control dan kelemahan pengukurannya.",
      "Nilai fungsi rating 1–5 dan bobot evaluasi.",
      "Usulkan kontrol atas proses principal serta feedback pengembangan."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Standards dan performance goals sudah ada; pengukuran menggabungkan tiga sumber sehingga tidak bergantung satu indikator. Namun reliability, kelengkapan observasi, expertise observer dan comparability context dipertanyakan. Rating 1–5 dapat menjadi bagian sistem jika tiap level memiliki rubric operasional, bukti dan kalibrasi; angka saja memberi kesan presisi tanpa menjamin akurasi. Saran: jadwalkan/documentasikan observasi, latih serta kalibrasi observer, audit sampel catatan, sediakan review/appeal, periksa bias dan gunakan ukuran progress yang mempertimbangkan starting point serta kebutuhan siswa. Bedakan dugaan dari temuan audit. Beri feedback spesifik dan rencana pengembangan; jangan menggunakan context sebagai alasan menghapus semua accountability atau rating untuk hukuman semata. Bobot asli tetap 40/30/30; rekomendasi perubahan bobot memerlukan alasan/data, bukan angka rekaan. [hal. 549–556, 573–575]"
  },
  {
    "type": "analysis",
    "scope": "TM 15: Latihan: standar layanan dan scorecard seimbang",
    "difficulty": "Menengah",
    "estimatedTime": "20–30 menit",
    "question": "Latihan: standar layanan dan scorecard seimbang",
    "context": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Unit layanan menargetkan ketepatan penyelesaian 95%. Hasil minggu ini 90%, tetapi biaya turun karena pemeriksaan dokumen dipersingkat. Keluhan pengguna naik dan pegawai belum mendapat training prosedur baru. [hal. 549–554, 560–563]",
    "data": [
      "Asumsi: definisi ketepatan dan periode pembanding sama.",
      "Selisih 90%−95%=−5 percentage points, bukan otomatis penurunan relatif 5%.",
      "Belum ada data yang membuktikan pemeriksaan singkat satu-satunya penyebab keluhan.",
      "Dasar konsep: Daft dan Marcic 12e [hal. 549–554, 560–563]."
    ],
    "instructions": [
      "Petakan feedback control dengan tindakan setelah diagnosis.",
      "Susun empat perspektif balanced scorecard.",
      "Pilih langkah improvement dan evaluasinya."
    ],
    "outputFormat": [
      "Pisahkan fakta/asumsi dan penafsiran.",
      "Tulis keputusan dengan bukti dan dasar konsep.",
      "Jelaskan kelemahan alternatif dan cara mengevaluasi keputusan."
    ],
    "rubric": [
      "Ketepatan fakta/asumsi dan konsep (30%)",
      "Alasan keputusan serta kelemahan alternatif (45%)",
      "Kelayakan tindak lanjut dan evaluasi (25%)"
    ],
    "answerGuide": "Hasil analisis untuk pembanding jawaban: Tetapkan standards dari strategy, ukur actual performance serta mutu data, bandingkan −5 percentage points dan periksa penyebab sebelum tindakan. Evaluasi prosedur, kapasitas/training dan dampak pada accuracy. Scorecard: financial biaya layanan; customer keluhan/satisfaction; internal process ketepatan/error; learning/growth penguasaan prosedur dan training. Tentukan target serta cara mengukur, lalu evaluasi outcomes/corrections. Benchmarking atau DMAIC dapat membantu perbaikan proses; pilih sesuai masalah. Biaya turun sendiri belum membuktikan keberhasilan. Standard hanya diubah bila bukti menunjukkan target/ukuran tidak sesuai, bukan agar hasil tampak memenuhi target. [hal. 549–554, 560–563]"
  }
];

export const MNM101_BANK: BankSoal[] = [...MNM101_BANK_UTS, ...MNM101_BANK_UAS];
