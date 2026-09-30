// src/data/banksoal/mnm101.ts
// Bank Soal Esai & Studi Kasus Pengantar Manajemen (MNU108; nama variabel dan file masih MNM101)
// Sumber: Daft & Marcic, Understanding Management 12e (2023)
// 7 kasus Pra-UTS (satu Ethical Dilemma per TM 1-7, diparafrasekan; panduan jawaban lima langkah) dan 7 kasus Pra-UAS (belum disinkronkan ke 12e)
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
      "Susun Case Summary dan Problem Identification dari fakta kasus.",
      "Analisis dengan Weberian bureaucracy (seleksi berdasarkan kualifikasi teknis, aturan impersonal) dan dengan keterampilan manajer (technical, human, conceptual).",
      "Jawab: (Q1) apa dasar bureaucracy untuk dan melawan setiap opsi? (Q2) keterampilan apa yang relevan bagi supervisor dan apa yang mungkin tidak terukur oleh tes tertulis? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai ciri bureaucracy dan tiga keterampilan dengan [hal. X] (40%)",
      "Kelogisan analisis tiap opsi (30%)",
      "Ketegasan rekomendasi dan alasannya (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: Maxine harus memilih pengisi jabatan supervisor. Sheryl berpengalaman dan terbukti memimpin baik tetapi peringkat tesnya 12; seorang klerk baru berperingkat 1.\n2. Problem Identification: P1: konflik antara aturan seleksi yang berlaku sama untuk semua dan bukti kepemimpinan nyata. P2: tes tertulis mungkin hanya mengukur sebagian dari yang dibutuhkan supervisor. P3: keputusan ada pada satu orang, sehingga risiko pilih kasih atau kaku mekanis.\n3. Analisis Kasus: Bureaucracy memilih dan mempromosikan personel berdasarkan kualifikasi teknis dan menerapkan aturan yang sama untuk semua [hal. 29–30]. Weber ingin mengatasi organisasi yang dikelola secara personal [hal. 28–29]; mengabaikan tes demi orang tertentu berlawanan dengan semangat itu. Namun buku juga mengingatkan bahwa fokus pada things of production bisa mengabaikan humanity of production [hal. 26], dan pada tingkat manajer human skills makin dibutuhkan (Exh. 1.3), sedangkan technical skill hanya di urutan 8 pada perilaku manajer Google (Exh. 1.4) [hal. 12–13].\n4. Jawaban Pertanyaan: Q1: opsi 1 melanggar aturan impersonal, opsi 2 patuh aturan tetapi hanya mengukur kualifikasi teknis [hal. 29]. Q2: supervisor membutuhkan human skills (komunikasi, coaching) selain technical [hal. 13–15]; kepemimpinan yang sudah terbukti pada Sheryl adalah bukti human skills, yang belum tentu tertangkap tes tertulis (hasil analisis). Q3: opsi 3.\n5. Rekomendasi: Pilih opsi 3. Maxine tidak mengabaikan hasil tes secara sepihak dan tidak mengangkat peringkat 1 secara mekanis, tetapi mengusulkan kriteria yang memasukkan bukti kepemimpinan, sehingga aturan tetap berlaku sama untuk semua. Selama proses berjalan, Sheryl tetap pada penugasan sementaranya yang sudah sah."
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
      "Susun Case Summary dan Problem Identification.",
      "Klasifikasikan cara atasan memperoleh dokumen memakai empat sumber business intelligence, lalu nilai apakah termasuk pemindaian lingkungan yang wajar.",
      "Jawab: (Q1) apa yang dikomunikasikan tindakan atasan tentang nilai perusahaan menurut konsep cultural leadership? (Q2) mengapa hukum saja tidak cukup memutuskan kasus ini? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai business intelligence dan cultural leadership dengan [hal. X] (40%)",
      "Ketajaman membedakan hukum, etika, dan pilihan bebas (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: Miquel menerima dokumen strategis rahasia pesaing dari atasannya. Cara atasan memperolehnya dijelaskan tidak konsisten, dan tidak ada kebijakan perusahaan yang jelas.\n2. Problem Identification: P1: asal dokumen dan keabsahannya belum jelas. P2: memakai dokumen berarti Miquel ikut menanggung akibatnya. P3: tidak ada panduan perusahaan, sehingga nilai ditentukan oleh contoh atasan.\n3. Analisis Kasus: Business intelligence memindai lingkungan dari empat sumber: personal internal, personal external, organizational internal, dan organizational external [hal. 65]; boundary spanning juga mencakup upaya memengaruhi lingkungan [hal. 66]. Mengunduh dokumen dari bagian privat intranet pesaing sulit disebut pemindaian dari sumber terbuka (hasil analisis). Cultural leader memperhatikan aktivitas sehari-hari agar orang, prosedur, dan imbalan cocok dengan nilai, dan pernyataan nilai tanpa perilaku manajemen tidak bermakna [hal. 77]. Buku sendiri menyebut hukum tentang pengumpulan informasi pesaing tidak tegas dan pendapat tentang etikanya terbelah [hal. 122], dan domain etika ada di antara hukum dan pilihan bebas [hal. 119].\n4. Jawaban Pertanyaan: Q1: tindakan atasan mengajarkan bahwa hasil boleh dikejar dengan cara apa pun; ini mengarah ke kuadran A pada Exhibit 2.7 (kinerja dikejar, nilai budaya diabaikan) [hal. 75–77]. Q2: karena hukum tidak tegas, domain etika (social standard) ikut menentukan [hal. 119, 122]. Q3: opsi 3.\n5. Rekomendasi: Pilih opsi 3. Miquel tidak memakai dokumen itu sebelum mendapat nasihat hukum, lalu menemui atasan dengan dasar yang jelas. Opsi 1 membuatnya ikut menikmati hasilnya; opsi 2 tanpa nasihat hukum hanya berupa konfrontasi tanpa dasar."
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
      "Susun Case Summary dan Problem Identification.",
      "Klasifikasikan usulan Albania dalam Exhibit 3.3 dan jelaskan tujuannya menurut buku.",
      "Jawab: (Q1) mengapa usulan ini termasuk global outsourcing dan apa tujuan strategi itu? (Q2) bagaimana penilaian pendekatan utilitarian, moral-rights, dan justice atas tiap opsi? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan klasifikasi strategi dan pendekatan etika dengan [hal. X] (40%)",
      "Kelogisan penilaian tiap opsi (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: CEO memilih antara menguji obat di Albania yang lebih murah, cepat, dan mudah atau di AS yang lebih mahal. Obat tidak akan dipasarkan di Albania, sehingga pengobatan peserta berhenti setelah uji.\n2. Problem Identification: P1: penghematan biaya vs kewajiban terhadap peserta uji. P2: pengobatan peserta berhenti begitu uji selesai. P3: hambatan hukum yang lebih ringan bisa menjadi alasan memilih lokasi, bukan hanya alasan efisiensi.\n3. Analisis Kasus: Memindahkan pekerjaan ke negara berbiaya lebih rendah adalah global outsourcing, yang bertujuan memperoleh sumber daya lebih murah, bukan mengembangkan pasar [hal. 97–98]. Dengan pendekatan utilitarian, manfaat bagi banyak orang (obat baru, biaya lebih rendah) ditimbang dengan efek pada semua pihak [hal. 124]. Dengan moral-rights, hak persetujuan bebas (free consent) peserta harus dijaga [hal. 124–125]. Compensatory justice menuntut pihak yang bertanggung jawab memberi kompensasi atas kerugian [hal. 125]. Tes practical: rela keputusan itu diberitakan dan dijelaskan kepada keluarga [hal. 126]. Pertimbangkan pula kecenderungan menilai lokasi dari sudut pandang sendiri (ethnocentrism) [hal. 102].\n4. Jawaban Pertanyaan: Q1: pekerjaan uji dipindahkan ke negara dengan hambatan lebih rendah dan biaya lebih murah, sesuai tujuan mencari sumber daya lebih murah [hal. 97–98]. Q2: utilitarian condong ke opsi 1 atau 3, moral-rights menuntut informed consent penuh, justice condong ke opsi 3 karena ada kompensasi (hasil analisis). Q3: opsi 3.\n5. Rekomendasi: Pilih opsi 3, dengan syarat program pengobatan lanjutan disepakati sebelum uji dimulai dan dikomunikasikan dalam persetujuan peserta, bukan baru dijanjikan bila obat lolos. Bila syarat itu tidak bisa dipenuhi, pilih opsi 2."
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
      "Susun Case Summary dan Problem Identification.",
      "Tempatkan tindakan perusahaan pada Exhibit 4.1 dan nilai dengan justice dan practical approach serta perspektif stakeholder.",
      "Jawab: (Q1) apakah \"tidak melanggar hukum\" sama dengan etis? (Q2) siapa stakeholder yang terdampak dan apa kepentingannya? (Q3) opsi mana yang Anda pilih, dan kapan opsi 3 baru layak?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai Exh. 4.1, pendekatan etika, dan stakeholder dengan [hal. X] (40%)",
      "Kelogisan urutan langkah internal sebelum eksternal (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: Chem-Tech dapat membuang limbah langsung ke sungai dengan sah dan menghemat biaya. Nathan keberatan, manajer pabrik menyatakan perusahaan patuh hukum, dan Nathan dicap bukan pemain tim.\n2. Problem Identification: P1: tindakan legal tetapi berpotensi merugikan komunitas. P2: konflik antara lapangan kerja dan kesehatan lingkungan. P3: risiko pribadi bagi Nathan bila bersuara.\n3. Analisis Kasus: Exhibit 4.1: hukum (codified law) hanya satu domain; domain etika punya standar sosial yang tidak diatur hukum khusus, jadi tidak melanggar hukum belum tentu etis [hal. 119]. Justice approach paling dekat dengan hukum, sedangkan practical approach mengajukan tes: diterima komunitas profesi, rela diberitakan, nyaman dijelaskan kepada keluarga dan teman [hal. 125–126]. Komunitas adalah stakeholder utama dengan kepentingan pada kepatuhan hukum, dampak sosial positif, dan perlindungan lingkungan [hal. 132–133]. Dilema limbah vs lapangan kerja adalah konflik antara kebutuhan bagian dan keseluruhan [hal. 123–124]. Triple bottom line menuntut People dan Planet ikut diukur [hal. 135–136]. Whistle-blower sering melapor ke pihak luar, tetapi perusahaan yang sehat menyediakan jalur internal [hal. 141].\n4. Jawaban Pertanyaan: Q1: tidak; ada domain etika di luar hukum [hal. 119]. Q2: komunitas sekitar sungai (kesehatan, lingkungan), karyawan (pekerjaan), pemegang saham (efisiensi), pelanggan [hal. 132–133]. Q3: opsi 1; opsi 3 baru layak bila jalur internal sudah ditempuh dan ditolak (hasil analisis).\n5. Rekomendasi: Pilih opsi 1: bicara dengan wakil presiden manufaktur dan ajukan pengurangan polusi sukarela sebagai nilai pemasaran, yang menjaga pekerjaan sekaligus melindungi komunitas. Opsi 2 gagal pada tes practical (sulit rela diberitakan); opsi 3 dipertimbangkan hanya setelah jalur internal buntu."
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
      "Susun Case Summary dan Problem Identification.",
      "Tempatkan target Marge dalam rantai goal dari strategic sampai operasional dan nilai karakteristik goal efektif serta hubungannya dengan reward.",
      "Jawab: (Q1) bagaimana target individu ini terkait strategic goal perusahaan? (Q2) apa keterbatasan MBO dan perencanaan yang tampak pada kasus? (Q3) opsi mana yang Anda pilih?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai Exh. 5.1, 5.4, dan keterbatasan MBO dengan [hal. X] (40%)",
      "Kelogisan hubungan target, reward, dan cara mencapainya (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: Marge kurang $1.000 dari target dan bisa menutup selisih itu dengan menyumbang ke sekolah yang kemudian membeli software, sehingga ia meraih bonus $10.000.\n2. Problem Identification: P1: target ditutup lewat cara yang mengubah arti pencapaian. P2: reward besar terikat pada satu angka. P3: pembatalan penjualan berada di luar kendalinya.\n3. Analisis Kasus: Target Marge adalah operational goal yang diturunkan dari strategic goal perusahaan (Exh. 5.1) [hal. 151–154]. Goal efektif dikaitkan dengan reward [hal. 161], tetapi penekanan berlebihan pada memenuhi target dapat mengaburkan cara mencapainya sehingga orang memotong jalan atau berperilaku tidak etis demi target [hal. 163]; buku menyebut tekanan berlebihan sebagai keterbatasan perencanaan [hal. 165]. MBM (management by means) menekankan cara sama pentingnya dengan hasil [hal. 163]. Tidak ilegal belum berarti etis [hal. 119]; tes practical: rela diberitakan dan nyaman dijelaskan kepada keluarga [hal. 126].\n4. Jawaban Pertanyaan: Q1: target individu adalah operational goal yang mendukung tactical dan strategic goals (Exh. 5.1) [hal. 152–154]. Q2: tekanan berlebihan dan penekanan pada hasil di atas cara [hal. 163, 165]. Q3: opsi 3.\n5. Rekomendasi: Pilih opsi 3: tidak menyumbang untuk menutup selisih, tetapi membantu sekolah itu mencari dana lewat jalur lain, dan menerima bahwa bonus bergantung pada hasil penjualan yang sesungguhnya (opsi 2 sebagai konsekuensinya). Menyumbang agar sekolah membeli produknya untuk memenuhi target sendiri gagal pada tes practical."
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
      "Susun Case Summary dan Problem Identification.",
      "Klasifikasikan keputusan (programmed atau nonprogrammed) dan kondisinya, lalu petakan ke enam langkah.",
      "Jawab: (Q1) mengapa ini nonprogrammed decision dalam kondisi uncertainty? (Q2) apa alternatif tambahan yang bisa dikembangkan di langkah 3? (Q3) opsi mana yang Anda pilih, dan gaya keputusan apa yang tercermin?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan klasifikasi keputusan, kondisi, dan enam langkah dengan [hal. X] (40%)",
      "Kelogisan penilaian alternatif dan pendekatan etika (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: Carpenter beberapa kali tidak hadir dan mengaku bermasalah, klien menuntut perusahaan menanggung separuh fee, dan dua pihak internal berbeda saran (beri kesempatan atau berhentikan). Moses harus memilih.\n2. Problem Identification: P1: keandalan proyek dan hubungan klien. P2: biaya $250.000 yang dituntut klien. P3: kepedulian pada karyawan vs ketegasan disiplin. P4: janji pemaafan yang sudah diucapkan.\n3. Analisis Kasus: Situasi ini unik dan berdampak penting, sehingga nonprogrammed decision [hal. 195]. Informasi tentang masa depan Carpenter tidak lengkap, jadi kondisinya uncertainty [hal. 197]. Enam langkah: recognition (ada problem), diagnosis (penyebab), pengembangan alternatif (membatasi alternatif adalah penyebab utama keputusan gagal; riset Nutt) [hal. 205–207], selection, implementation (butuh buy-in), evaluation [hal. 205–209]. Ketua tim condong ke gaya behavioral, wakil presiden operasi ke directive [hal. 212–213] (hasil analisis). Emosi dan kecenderungan membenarkan janji yang sudah diucapkan adalah bias yang perlu diwaspadai [hal. 214–215].\n4. Jawaban Pertanyaan: Q1: keputusan tidak berulang, berdampak besar, dan hasilnya tidak bisa diprediksi. Q2: misalnya mengganti konsultan pada proyek itu sementara Carpenter menjalani perawatan, atau bernegosiasi soal fee dengan klien (hasil analisis). Q3: opsi 3; pemberhentian langsung mencerminkan gaya directive, sedangkan opsi 3 memadukan kepedulian dengan syarat tertulis.\n5. Rekomendasi: Pilih opsi 3: cuti berbayar singkat, konseling, dan syarat tertulis (ikut program perawatan atau keluar bila masalah berlanjut), sambil menyiapkan pengganti untuk proyek klien dan menegosiasikan tuntutan fee. Opsi 2 tanpa syarat mengabaikan klien; opsi 1 mengabaikan pengembangan alternatif."
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
      "Susun Case Summary dan Problem Identification.",
      "Petakan posisi Harold dan Taandil dengan authority, responsibility, accountability, dan chain of command.",
      "Jawab: (Q1) siapa yang memegang accountability atas kepatuhan keselamatan dan apa batas authority Harold? (Q2) apa risiko tiap opsi terhadap chain of command? (Q3) opsi mana yang Anda pilih dan apa langkah eskalasinya?",
      "Tutup dengan satu rekomendasi yang tegas."
    ],
    "outputFormat": [
      "1. Case Summary",
      "2. Problem Identification",
      "3. Analisis Kasus (dengan kerangka buku dan [hal. X])",
      "4. Jawaban Pertanyaan",
      "5. Rekomendasi (satu opsi, tegas, dengan alasan)"
    ],
    "rubric": [
      "Ketepatan memakai authority, responsibility, accountability dengan [hal. X] (40%)",
      "Kelogisan analisis chain of command dan eskalasi (30%)",
      "Ketegasan rekomendasi (30%)"
    ],
    "answerGuide": "Hasil analisis AkuntansiHub, bukan kunci dari buku (buku hanya memberi tiga opsi tanpa jawaban; kerangka dan halaman berasal dari Daft & Marcic 12e).\n1. Case Summary: Harold tahu pedoman keselamatan berubah dan atasannya juga tahu tetapi belum bertindak. Ia ragu melampaui kewenangannya, sementara musim penjualan Natal mendekat.\n2. Problem Identification: P1: pedoman keselamatan baru belum dijalankan. P2: kejelasan siapa berwenang bertindak. P3: bahaya bagi konsumen bila lini mainan dijual tanpa pengecekan. P4: keinginan Harold menyenangkan atasan.\n3. Analisis Kasus: Authority melekat pada posisi dan mengalir ke bawah hierarki [hal. 231]; responsibility adalah kewajiban menjalankan tugas, accountability adalah kewajiban melaporkan hasil tugas kepada atasan di chain of command, dan delegation memindahkan authority dan responsibility ke bawah [hal. 231]. Menurut scalar principle, setiap orang harus tahu kepada siapa ia melapor sampai ke puncak [hal. 230]. Responsibility Harold adalah memastikan kepatuhan; authority untuk memerintahkan perubahan ada pada atasannya (hasil analisis). Buku mencontohkan kekacauan bila tidak jelas siapa yang berwenang (Deepwater Horizon) [hal. 232] dan whistle-blower sering melapor ke pihak luar bila jalur internal tidak efektif [hal. 141].\n4. Jawaban Pertanyaan: Q1: accountability akhir ada pada Taandil sebagai atasan; Harold memegang responsibility atas tugas pengecekan tetapi authority-nya terbatas pada posisinya [hal. 231]. Q2: opsi 2 membiarkan celah accountability; opsi 3 melompati chain of command tanpa lebih dulu menyampaikan ke atasan langsung [hal. 230]. Q3: opsi 1, dengan eskalasi bertahap bila tidak ada respons.\n5. Rekomendasi: Pilih opsi 1: memo tertulis kepada Taandil yang merangkum pedoman baru dan meminta otorisasi pelaksanaan, sehingga responsibility Harold terpenuhi dan accountability atasan jelas. Bila memo tidak ditanggapi, eskalasi ke manajer operasi secara terbuka lewat chain of command sebelum menimbang laporan anonim."
  }
];

export const MNM101_BANK_UAS: BankSoal[] = [
  {
    "type": "analysis",
    "scope": "TM 8: Pemantapan Review Terpadu Silabus Pra-UTS",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 8: Simulasi Ujian Kasus Integratif Pra-UTS Transformasi Retail Hero Group",
    "context": "Hero Group menghadapi guncangan disrupsi belanja e-commerce dan perubahan preferensi belanja konsumen yang beralih dari hypermarket besar (Giant) ke gerai minimarket dekat rumah. Manajemen puncak harus merumuskan arah baru: menutup gerai Giant yang merugi, mengalihkan modal ke gerai Hero Supermarket premium dan IKEA, merampingkan organisasi dari struktur birokrasi piramida menjadi tim lincah, serta menyelaraskan budaya kerja para karyawan veteran.",
    "data": [
      "Dimensi Analisis: Integrasi POAC, Analisis SWOT & PESTEL, Matriks BCG, dan Desain Organisasi.",
      "Konteks: Transformasi korporasi ritel modern Indonesia."
    ],
    "instructions": [
      "Lakukan sintesis bagaimana keempat fungsi manajemen POAC bekerja saling terkait dalam proses transformasi Hero Group.",
      "Berdasarkan Matriks BCG, jelaskan status Giant Hypermarket dan justifikasi logis keputusan manajemen untuk melakukan divestasi/penutupan.",
      "Jelaskan bagaimana manajer puncak harus menggunakan perpaduan Keterampilan Konseptual dan Keterampilan Hubungan Manusia (Katz) saat mengumumkan keputusan restrukturisasi yang berdampak pada penutupan gerai."
    ],
    "outputFormat": [
      "Sintesis Alur Siklus POAC",
      "Analisis Portofolio BCG & Divestasi",
      "Penerapan Keterampilan Katz dalam Manajemen Krisis"
    ],
    "rubric": [
      "Kerapian integrasi 4 fungsi POAC (35%)",
      "Ketepatan analisis BCG dan justifikasi divestasi Dog (35%)",
      "Aplikabilitas penerapan kepemimpinan Katz (30%)"
    ],
    "answerGuide": "1. Sintesis Alur Siklus POAC:\n• Planning: Menetapkan visi baru beralih dari mass-hypermarket ke specialty premium grocery (Hero) dan perabot rumah tangga (IKEA).\n• Organizing: Merestrukturisasi portofolio toko, menutup badan usaha Giant, dan menata ulang rantai pasok logistik terpusat.\n• Leading: Berkomunikasi secara jujur dan empatik dengan serikat pekerja, memimpin program pelatihan transisi peran karyawan, dan meredam kepanikan.\n• Controlling: Menetapkan metrik kinerja baru per meter persegi ruang ritel (sales per square meter) dan memantau pemotongan kerugian secara mingguan.\n\n2. Analisis Matriks BCG:\n• Giant Hypermarket berada pada kuadran DOGS. Pertumbuhan pasar hypermarket di Indonesia negatif/menurun drastis (konsumen enggan berkeliling toko raksasa), dan pangsa pasar Giant terus tergerus oleh Indomaret/Alfamart.\n• Keputusan divestasi/penutupan total adalah tindakan manajerial yang tepat dan rasional menurut teori BCG untuk menghentikan pendarahan kas (cash drain) dan memfokuskan sumber daya ke unit bisnis yang prospektif (IKEA sebagai Star).\n\n3. Keterampilan Katz dalam Krisis:\n• Conceptual Skills digunakan untuk melihat gambaran besar pergeseran tren demografi konsumen Indonesia 5-10 tahun ke depan dan berani mengambil keputusan strategis yang menyakitkan demi kelangsungan hidup induk korporasi.\n• Human Skills digunakan untuk memperlakukan karyawan terdampak penutupan secara manusiawi: memastikan pemenuhan hak pesangon di atas standar regulasi ketenagakerjaan, mengadakan program alih profesi/outplacement, dan menjaga moral tim yang bertahan."
  },
  {
    "type": "analysis",
    "scope": "TM 9: Manajemen Perubahan & Inovasi (Kurt Lewin & Ambidextrous)",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 9: Mengatasi Resistensi Perubahan Digitalisasi Pabrik PT Semen Padang",
    "context": "PT Semen Padang meluncurkan program otomatisasi pabrik berbasis Internet of Things (IoT) untuk menggantikan pencatatan manual suhu kiln semen. Namun, para operator pabrik senior yang sudah bekerja lebih dari 20 tahun menolak menggunakan tablet digital. Mereka mengeluhkan sistem baru 'terlalu ribet', sengaja mengabaikan alarm tablet, dan tetap memakai buku catatan kertas lama.",
    "data": [
      "Inovasi: Digitalisasi pencatatan operasional pabrik via sensor IoT dan tablet.",
      "Resistensi: Penolakan operator senior, kebiasaan lama yang mengakar, ketakutan dianggap tidak kompeten.",
      "Model Acuan: Model Tiga Tahap Perubahan Kurt Lewin & Taktik Kotter-Schlesinger."
    ],
    "instructions": [
      "Analisis akar penyebab penolakan operator senior berdasarkan teori resistensi perubahan.",
      "Rancang tahapan implementasi perubahan menggunakan Model 3 Tahap Kurt Lewin (Unfreezing, Changing, Refreezing).",
      "Pilihlah dua taktik penanganan resistensi perubahan dari Kotter dan Schlesinger yang paling manusiawi dan efektif untuk diterapkan manajer pabrik."
    ],
    "outputFormat": [
      "Diagnosis Sumber Resistensi",
      "Rencana Aksi 3 Tahap Kurt Lewin",
      "Taktik Penanganan Resistensi Terpilih"
    ],
    "rubric": [
      "Ketajaman diagnosis resistensi psikologis karyawan (30%)",
      "Kesesuaian penerapan 3 tahap Kurt Lewin (40%)",
      "Realisme taktik Kotter-Schlesinger (30%)"
    ],
    "answerGuide": "1. Diagnosis Sumber Resistensi:\n• Kebiasaan yang Mengakar (Habit): Operator telah bekerja dengan buku kertas selama 20 tahun; mengubah kebiasaan fisik menimbulkan disorientasi kenyamanan.\n• Ketakutan akan Ketidakmampuan (Fear of Incompetence): Operator senior khawatir dianggap gagap teknologi dan takut posisi mereka akan digantikan oleh mesin otomatis.\n• Ketidakpastian: Kurangnya pemahaman bahwa tablet bukan untuk mengawasi/menghukum mereka, melainkan mencegah kegagalan mesin yang berbahaya.\n\n2. Model 3 Tahap Kurt Lewin:\n• Unfreezing (Pencairan): Tunjukkan data nyata insiden kerusakan mesin kiln masa lalu yang disebabkan keterlambatan membaca suhu buku kertas. Sadarkan operator bahwa metode manual membahayakan keselamatan seluruh pabrik dan kelangsungan kerja mereka.\n• Changing (Perubahan): Berikan pelatihan antarmuka tablet dengan pendampingan personal (buddy system) dari staf muda; buat desain aplikasi sangat sederhana dengan tombol besar dan panduan visual.\n• Refreezing (Pembekuan Ulang): Tarik seluruh buku catatan kertas dari area pabrik; jadikan pencatatan digital sebagai satu-satunya prosedur resmi (SOP); berikan penghargaan 'Operator Teladan Digital' bulanan.\n\n3. Taktik Kotter & Schlesinger:\n• Edukasi & Komunikasi: Menjelaskan manfaat sistem bagi keamanan kerja operator secara sabar dan berkelanjutan.\n• Partisipasi & Keterlibatan: Libatkan operator senior dalam mendesain tata letak menu tablet agar sesuai dengan alur kerja nyata mereka, sehingga mereka merasa memiliki sistem tersebut."
  },
  {
    "type": "framework",
    "scope": "TM 10: Manajemen Sumber Daya Manusia & Penilaian Kinerja",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 10: Redesain Sistem Evaluasi Kinerja Karyawan PT Telkom Menuju 360-Degree Feedback",
    "context": "PT Telkom Indonesia bertransformasi dari perusahaan telekomunikasi kabel menjadi perusahaan digital telecommunication terdepan. Namun, sistem evaluasi kinerja yang ada masih bersifat tradisional (top-down rating oleh satu atasan langsung). Akibatnya, banyak karyawan berperilaku mencari muka (kiss-up to boss) tetapi tidak kooperatif dengan rekan kerja lintas divisi dan bersikap arogan terhadap bawahan.",
    "data": [
      "Sistem Lama: Penilaian tahunan sepihak oleh atasan langsung (rentan bias halo effect dan subjektivitas).",
      "Kebutuhan Baru: Kolaborasi agile lintas unit, kepemimpinan memberdayakan, dan budaya inovasi.",
      "Solusi yang Diusulkan: Penerapan 360-Degree Performance Appraisal."
    ],
    "instructions": [
      "Jelaskan kelemahan sistem penilaian tradisional satu arah dan mengapa sistem tersebut memicu perilaku disfungsional dalam tim kerja digital.",
      "Rancang mekanisme penilaian 360-Degree Feedback yang mencakup 5 sumber evaluator.",
      "Uraikan langkah-langkah mitigasi agar sistem 360 derajat tidak disalahgunakan menjadi ajang balas dendam pribadi antar-karyawan."
    ],
    "outputFormat": [
      "Evaluasi Kelemahan Sistem Tradisional",
      "Desain 5 Sumber Penilai 360-Degree",
      "Protokol Keamanan & Objektivitas Penilaian"
    ],
    "rubric": [
      "Ketajaman diagnosis kelemahan penilaian searah (30%)",
      "Kelengkapan rancangan 5 sumber 360 derajat (35%)",
      "Kualitas protokol mitigasi bias dan balas dendam (35%)"
    ],
    "answerGuide": "1. Kelemahan Sistem Tradisional:\n• Penilaian atasan tunggal sering terkena 'Halo Effect' (kesan umum positif/negatif mendikte seluruh skor) dan 'Recency Bias' (hanya mengingat kejadian 2 minggu terakhir sebelum penilaian).\n• Memicu perilaku politis karyawan yang hanya rajin saat dilihat atasan, namun enggan membantu rekan kerja dan bersikap tiran terhadap bawahan karena bawahan tidak memiliki hak suara.\n\n2. Rancangan 5 Sumber Evaluator 360-Degree:\n• Atasan Langsung (Immediate Supervisor): Menilai ketercapaian target KPI strategis dan kepatuhan arah divisi.\n• Rekan Sejawat (Peers/Coworkers): Menilai kemampuan kolaborasi tim, keandalan menuntaskan tugas bersama, dan komunikasi horizontal.\n• Bawahan Langsung (Subordinates): Menilai gaya kepemimpinan, keadilan delegasi tugas, empati, dan bimbingan pengembangan karier.\n• Pelanggan Internal/Eksternal: Menilai responsivitas layanan dan orientasi kepuasan pengguna.\n• Penilaian Diri Sendiri (Self-Appraisal): Refleksi mandiri karyawan mengenai pencapaian dan area perbaikan diri.\n\n3. Protokol Mitigasi Balas Dendam:\n• Jaminan Anonimitas Penuh: Skor dari rekan sejawat dan bawahan diagregasikan tanpa menampilkan identitas individu (hanya skor rata-rata).\n• Fokus pada Pengembangan (Developmental Tool), Bukan Semata-mata Pemotongan Gaji: Gunakan 360 derajat terutama untuk rencana pelatihan dan pembinaan kepemimpinan.\n• Pelatihan Memberikan Umpan Balik Konstruktif: Berikan panduan bahwa komentar harus berbasis perilaku kerja konkret, bukan serangan personal."
  },
  {
    "type": "analysis",
    "scope": "TM 11: Teori Kepemimpinan Kontinjensi Fiedler & Transformasional",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 11: Transformasi Kepemimpinan Satya Nadella di Microsoft",
    "context": "Ketika Satya Nadella diangkat menjadi CEO Microsoft pada 2014, perusahaan sedang terpuruk: internal sarat permusuhan antar divisi (dog-eat-dog culture akibat sistem rating berjenjang), tertinggal dalam revolusi mobile dan komputasi awan (cloud), serta dipandang arogan oleh industri. Nadella mengubah kultur 'Know-it-all' (merasa tahu segalanya) menjadi 'Learn-it-all' (kultur pembelajar yang rendah hati), menghentikan perselisihan internal, dan mengarahkan fokus ke Azure Cloud.",
    "data": [
      "Era Sebelumnya (Steve Ballmer): Sangat fokus tugas, agresif, kompetitif internal, kepemimpinan transaksional keras.",
      "Era Nadella: Empatik, kepemimpinan transformasional, kolaboratif, orientasi pertumbuhan jangka panjang.",
      "Hasil: Nilai kapitalisasi pasar Microsoft melesat dari $300 miliar menjadi lebih dari $3 triliun."
    ],
    "instructions": [
      "Bandingkan gaya kepemimpinan Transaksional Ballmer vs Transformasional Nadella menggunakan 4 pilar kepemimpinan transformasional (Idealized Influence, Inspirational Motivation, Intellectual Stimulation, Individualized Consideration).",
      "Analisis situasi Microsoft tahun 2014 menggunakan Model Kontinjensi Fred Fiedler: mengapa gaya kepemimpinan hubungan (Relationship-Oriented) Nadella jauh lebih sukses memulihkan organisasi?",
      "Jelaskan bagaimana konsep 'Servant Leadership' diterapkan Nadella dalam memulihkan moral insinyur Microsoft."
    ],
    "outputFormat": [
      "Matriks Komparasi 4 Pilar Transformasional",
      "Analisis Situasi Kontrol Fiedler",
      "Penerapan Konsep Servant Leadership"
    ],
    "rubric": [
      "Penerapan mendalam 4 pilar transformasional (35%)",
      "Kesesuaian penerapan teori kontinjensi Fiedler (35%)",
      "Kualitas ulasan Servant Leadership (30%)"
    ],
    "answerGuide": "1. Empat Pilar Transformasional Nadella:\n• Idealized Influence (Pengaruh Ideal/Karisma): Menjadi teladan kerendahan hati; mengakui kesalahan Microsoft di masa lalu dan menjalin kemitraan dengan rival (seperti membawa Office ke Apple iOS).\n• Inspirational Motivation: Mengartikulasikan visi mulia baru: 'Memberdayakan setiap orang dan setiap organisasi di planet ini untuk mencapai lebih banyak.'\n• Intellectual Stimulation: Mendorong kultur 'Growth Mindset' di mana kegagalan eksperimen dipandang sebagai proses belajar, bukan aib yang dihukum.\n• Individualized Consideration: Mendengarkan kegelisahan para insinyur, mempraktikkan empati mendalam (berakar dari pengalaman membesarkan putranya yang berkebutuhan khusus).\n\n2. Model Kontinjensi Fiedler:\n• Situasi Microsoft tahun 2014 berada pada tingkat kontrol 'Moderat': Struktur tugas sedang bertransformasi ke cloud yang belum terdefinisi pasti, dan hubungan pemimpin-anggota retak akibat perang saudara antar-divisi Windows vs Hardware.\n• Fiedler membuktikan bahwa pada situasi kontrol moderat, pemimpin berorientasi hubungan (Relationship-Oriented / High LPC) seperti Nadella jauh lebih efektif karena mampu merekatkan kembali hubungan antar-manusia, meredakan kecurigaan internal, dan membangun kepercayaan tim.\n\n3. Servant Leadership:\n• Nadella membalik piramida organisasi: Peran CEO bukan dilayani oleh para wakil presiden dan staf, melainkan melayani dan menyingkirkan hambatan birokrasi agar para pengembang perangkat lunak garda depan dapat berinovasi secara leluasa bagi konsumen."
  },
  {
    "type": "framework",
    "scope": "TM 12: Teori Motivasi (Herzberg, Vroom, Hackman-Oldham)",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 12: Mengatasi Demotivasi Desainer Grafis Menggunakan Job Characteristics Model",
    "context": "Sebuah agensi periklanan digital mengalami eksodus desainer grafis muda. Manajemen mengira masalahnya adalah gaji, lalu menaikkan upah sebesar 15%. Namun sebulan kemudian, pergantian staf tetap tinggi dan desainer mengeluh bosan. Investigasi mengungkap bahwa para desainer hanya disuruh memotong gambar banner sederhana secara berulang-ulang tanpa tahu untuk kampanye iklan apa, tidak pernah bertemu klien, dan seluruh revisi ditentukan sepihak oleh manajer akun.",
    "data": [
      "Tindakan Manajemen: Menaikkan gaji 15% (hanya menyentuh Hygiene Factors Herzberg).",
      "Kondisi Pekerjaan: Monoton, tugas terpecah-pecah (tanpa Task Identity), tidak memahami dampak karyanya (tanpa Task Significance), dan nol otonomi.",
      "Model Solusi: Job Characteristics Model (Hackman & Oldham)."
    ],
    "instructions": [
      "Jelaskan kegagalan kebijakan kenaikan gaji manajemen menggunakan Teori Dua Faktor Frederick Herzberg.",
      "Evaluasi pekerjaan desainer menggunakan 5 Dimensi Inti Pekerjaan Hackman & Oldham (Skill Variety, Task Identity, Task Significance, Autonomy, Feedback).",
      "Rancang program 'Job Enrichment' konkret untuk mendesain ulang pekerjaan desainer agar memicu motivasi internal yang tinggi."
    ],
    "outputFormat": [
      "Analisis Hygiene vs Motivators Herzberg",
      "Audit 5 Dimensi Hackman-Oldham",
      "Rancangan Program Job Enrichment"
    ],
    "rubric": [
      "Ketepatan analisis Herzberg (30%)",
      "Akurasi audit 5 dimensi JCM (35%)",
      "Kreativitas dan aplikabilitas program Job Enrichment (35%)"
    ],
    "answerGuide": "1. Analisis Teori Dua Faktor Herzberg:\n• Gaji merupakan faktor pemeliharaan (Hygiene Factor). Menaikkan gaji 15% hanya menghilangkan ketidakpuasan gaji, tetapi TIDAK menghasilkan motivasi kerja atau kepuasan intrinsik.\n• Manajemen mengabaikan faktor Motivators: desainer kekurangan rasa berprestasi (achievement), tanggung jawab (responsibility), dan pengakuan (recognition) atas karya kreatif mereka.\n\n2. Audit 5 Dimensi Hackman & Oldham:\n• Skill Variety: SANGAT RENDAH (hanya memotong ukuran gambar secara repetitif).\n• Task Identity: SANGAT RENDAH (tidak mengerjakan proyek kampanye dari hulu ke hilir).\n• Task Significance: SANGAT RENDAH (tidak tahu dampak karyanya bagi kesuksesan merek klien).\n• Autonomy: NOL (semua keputusan kreatif didikte sepihak oleh manajer akun).\n• Feedback: RENDAH (hanya menerima komplain revisi tanpa tahu data konversi penjualan iklan).\n\n3. Program Job Enrichment Konkret:\n• Membentuk Tim Proyek Utuh (Task Identity): Berikan tanggung jawab satu kampanye iklan utuh kepada seorang desainer dari tahap konsep hingga visual final.\n• Hubungan Klien Langsung (Autonomy & Significance): Libatkan desainer dalam sesi pitching presentasi ide langsung kepada klien.\n• Dashboard Analitik Iklan (Feedback): Berikan akses analitik kampanye kepada desainer untuk melihat seberapa viral dan efektif desain yang mereka ciptakan."
  },
  {
    "type": "decision",
    "scope": "TM 13: Dinamika Tim (Tuckman), Komunikasi & Manajemen Konflik",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 13: Resolusi Konflik Destruktif pada Tim Proyek Merger Finansial",
    "context": "Sebuah tim proyek merger beranggotakan 8 analis senior dari dua bank yang berbeda dibentuk untuk menyatukan sistem akuntansi. Pada minggu ke-4, proyek macet total. Rapat diwarnai adu mulut sengit, sindir-menyindir personal, saling menahan dokumen rahasia antar kelompok asal bank, dan dua analis menolak hadir rapat.",
    "data": [
      "Usia Tim: 4 minggu pasca pembentukan.",
      "Status: Perdebatan peran kepemimpinan, norma kerja belum disepakati, timbul permusuhan emosional (Relationship Conflict).",
      "Model Analisis: 5 Tahap Tuckman dan Manajemen Konflik Thomas-Kilmann."
    ],
    "instructions": [
      "Identifikasi tahap perkembangan tim mana yang sedang dialami kelompok ini menurut model Bruce Tuckman dan jelaskan karakteristiknya.",
      "Bedakan antara Konflik Tugas (Task Conflict) dan Konflik Hubungan (Relationship Conflict) dalam kasus ini.",
      "Sebagai Manajer Proyek, terapkan Gaya Kolaborasi (Collaborating) dari Thomas-Kilmann untuk menyelesaikan kemelut tersebut."
    ],
    "outputFormat": [
      "Identifikasi Tahap Tuckman",
      "Pembedaan Jenis Konflik",
      "Protokol Resolusi Konflik Win-Win"
    ],
    "rubric": [
      "Ketepatan identifikasi tahap Storming Tuckman (30%)",
      "Ketajaman pembedaan Task vs Relationship Conflict (35%)",
      "Aplikasi konkret metode Collaborating Thomas-Kilmann (35%)"
    ],
    "answerGuide": "1. Tahap Perkembangan Tim Tuckman:\n• Tim berada pada tahap STORMING.\n• Karakteristik: Munculnya konflik peran kepemimpinan, benturan ego budaya kerja asal perusahaan, persaingan kekuasaan, dan resistensi terhadap kendali tim sebelum norma kebersamaan terbentuk. Jika tahap ini gagal dikelola, tim akan hancur sebelum mencapai tahap Norming apalagi Performing.\n\n2. Pembedaan Konflik:\n• Konflik Tugas (Task Conflict): Perbedaan sudut pandang teknis mengenai modul akuntansi mana yang lebih efisien untuk diadopsi (bersifat sehat jika diarahkan pada data).\n• Konflik Hubungan (Relationship Conflict): Permusuhan personal, saling sindir, ketidakpercayaan emosional, dan menahan dokumen (sangat destruktif dan menjadi biang keladi kebuntuan proyek).\n\n3. Protokol Resolusi Kolaborasi (Thomas-Kilmann - Collaborating Style):\n• Fasilitasi Off-site Workshop Khusus: Kumpulkan seluruh anggota di luar kantor, sepakati aturan dasar (ground rules) bahwa tujuan proyek adalah keberhasilan merger bersama, bukan menang-kalahan bank asal.\n• Pisahkan Masalah dari Orang: Redakan konflik hubungan dengan mendengarkan keluhan masing-masing pihak tanpa menghakimi.\n• Fokus pada Sasaran Integratif (Superordinate Goal): Satukan analis ke dalam sub-tim campuran (1 orang Bank A + 1 orang Bank B) untuk menyelesaikan modul bersama, sehingga memecah kubu kelompok dan memicu empati kolegial."
  },
  {
    "type": "framework",
    "scope": "TM 14: Sistem Pengendalian Organisasi & Balanced Scorecard",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 14: Perancangan Balanced Scorecard Rumah Sakit Menghadapi Akreditasi Internasional",
    "context": "RSUD Sehat Mandiri selama ini hanya mengendalikan rumah sakit menggunakan metrik keuangan tradisional (Realisasi Anggaran & Pendapatan Retribusi Pasien). Akibatnya, meskipun laba tercapai, antrean pasien membludak, perawat kelelahan (burnout) hingga mengundurkan diri massal, dan angka infeksi nosokomial pasca operasi meningkat. Direktur baru memutuskan mengadopsi kerangka Balanced Scorecard (Kaplan & Norton).",
    "data": [
      "Kondisi Saat Ini: Pengendalian murni finansial (lagging indicators).",
      "Dampak Negatif: Kualitas layanan klinis merosot, komplain pasien melonjak, modal manusia (perawat/dokter) terabaikan.",
      "Kerangka Solusi: Balanced Scorecard dengan 4 Perspektif Berimbang."
    ],
    "instructions": [
      "Jelaskan mengapa pengendalian berbasis finansial semata dapat merusak kelangsungan hidup jangka panjang organisasi jasa pelayanan.",
      "Rancang minimal 2 Key Performance Indicators (KPI) terukur untuk masing-masing 4 perspektif Balanced Scorecard (Finansial, Pelanggan, Proses Internal, Pembelajaran & Pertumbuhan).",
      "Gambarkan rantai sebab-akibat (Strategy Map) yang menghubungkan Perspektif Pembelajaran & Pertumbuhan hingga bermuara pada Kinerja Finansial."
    ],
    "outputFormat": [
      "Kritik Pengendalian Finansial Tunggal",
      "Tabel 8 KPI Balanced Scorecard",
      "Uraian Naratif Peta Strategi (Cause-and-Effect Chain)"
    ],
    "rubric": [
      "Ketajaman kritik keterbatasan metrik keuangan tradisional (30%)",
      "Ketepatan dan keterukuran 8 indikator KPI 4 perspektif (40%)",
      "Kelogisan rantai sebab-akibat Strategy Map (30%)"
    ],
    "answerGuide": "1. Bahaya Pengendalian Finansial Tunggal:\n• Metrik keuangan bersifat 'Lagging Indicators' (indikator historis masa lalu) yang hanya mencatat hasil akhir tanpa menunjukkan pemicu masa depan (leading indicators).\n• Memangkas biaya pelatihan dan menekan rasio perawat demi laba jangka pendek justru merusak kepuasan pasien dan meningkatkan malpraktik, yang pada akhirnya akan menghancurkan reputasi dan keuangan rumah sakit di masa depan.\n\n2. Tabel Indikator Kunci (KPI) 4 Perspektif Balanced Scorecard:\n• 1. Perspektif Finansial:\n  - Rasio Efisiensi Biaya Operasional terhadap Pendapatan (BOPO < 80%).\n  - Pertumbuhan Pendapatan Layanan Medis Non-Subsidi (+10% per tahun).\n• 2. Perspektif Pelanggan:\n  - Skor Indeks Kepuasan Pasien (Net Promoter Score > 85%).\n  - Rata-rata waktu tunggu antrean layanan rawat jalan (< 30 menit).\n• 3. Perspektif Proses Bisnis Internal:\n  - Angka Kejadian Infeksi Nosokomial Rumah Sakit (< 1,5%).\n  - Waktu tunggu hasil laboratorium kritis (< 45 menit).\n• 4. Perspektif Pembelajaran & Pertumbuhan:\n  - Jam pelatihan kompetensi klinis per perawat per tahun (minimal 40 jam).\n  - Skor kepuasan kerja dan retensi tenaga medis spesialis (> 90%).\n\n3. Rantai Sebab-Akibat (Strategy Map):\nPelatihan klinis perawat yang intensif (Pembelajaran & Pertumbuhan) -> meningkatkan kecermatan sanitasi dan mempercepat proses diagnostik (Proses Internal) -> menghasilkan kesembuhan pasien yang lebih cepat dan bebas infeksi (Pelanggan) -> meningkatkan reputasi rumah sakit, lonjakan kunjungan rujukan, dan kepatuhan pembayaran (Finansial yang Berkelanjutan)."
  }
];

export const MNM101_BANK: BankSoal[] = [...MNM101_BANK_UTS, ...MNM101_BANK_UAS];
