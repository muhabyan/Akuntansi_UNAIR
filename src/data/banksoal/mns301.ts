// src/data/banksoal/mns301.ts
// Bank soal kasus Manajemen Stratejik (MNS301; kode fakultas MNU307): 14 kasus TM 1–7 (dua kasus per TM, perusahaan rekaan).
// Sumber: Dess dkk. (2024) Ch. 1–12; Kim & Mauborgne (2005); Kaplan & Norton (2004).
import type { BankSoal } from '../../types';

export const MNS301_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 1: Atribut strategic management dan strategi yang berubah di jalan",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Target Penjualan Agresif dan Kejatuhan Luckin Coffee",
    "context": "Luckin Coffee berdiri pada 2017 untuk menantang Starbucks di pasar kopi China dengan gerai kecil dan pesanan lewat aplikasi. Perusahaan tercatat di Nasdaq dalam waktu kurang dari dua tahun. Pada April 2020 Luckin mengakui penjualan 2019 digelembungkan dan harga sahamnya anjlok 75 persen dalam semalam. Menurut buku, target agresif mendorong karyawan membuat transaksi palsu sekitar 310 juta dolar, kepemimpinan gagal membangun kontrol internal yang andal, dan CEO ikut menyetujui pembayaran tidak sah. Kantor akuntan publik tidak memberi tanda bahaya, dan regulator AS tidak mampu memeriksa catatan perusahaan asing itu dengan baik.",
    "data": [
      "Latar: ekspansi cepat dengan target penjualan agresif untuk mengalahkan pesaing.",
      "Temuan buku: transaksi palsu sekitar 310 juta dolar, harga saham turun 75 persen, delisting dari Nasdaq pada Juni 2020.",
      "Kontrol: kontrol internal lemah, CEO menyetujui pembayaran tidak sah, auditor dan regulator tidak memberi peringatan.",
      "Rujukan: Dess dkk. (2024), Ch. 1, hal. 3-7."
    ],
    "instructions": [
      "Atribut strategic management mana yang tampak terabaikan oleh target penjualan agresif ini? Jelaskan dengan bahasa atribut menurut buku.",
      "Unsur governance atau kontrol mana yang menurut buku gagal berfungsi? Bedakan kontrol internal dan eksternal.",
      "Gunakan romantic view dan external control view untuk menjelaskan kejatuhan Luckin. Apakah satu pandangan saja cukup?"
    ],
    "outputFormat": [
      "Atribut yang terabaikan beserta alasannya",
      "Pemetaan kontrol internal dan eksternal yang gagal",
      "Penilaian dua pandangan kepemimpinan"
    ],
    "rubric": [
      "Menyebut atribut ketiga (jangka pendek dan jangka panjang) dengan penjelasan yang tepat (30%)",
      "Membedakan kontrol internal (kepemimpinan dan kontrol) dari eksternal (auditor, regulator) (35%)",
      "Memakai kedua pandangan secara seimbang dan menandai mana fakta buku, mana analisis sendiri (35%)"
    ],
    "answerGuide": "(a) Atribut ketiga: target agresif demi mengalahkan pesaing mendorong angka penjualan semu demi hasil jangka pendek, sedangkan nilai jangka panjang runtuh ketika terbongkar. Atribut kedua (banyak stakeholder) ikut terabaikan karena investor, regulator, dan karyawan dirugikan. (b) Kontrol internal: kepemimpinan gagal membangun kontrol yang andal dan CEO ikut menyetujui pembayaran tidak sah. Kontrol eksternal: auditor tidak memberi tanda bahaya dan regulator tidak mampu memeriksa catatan perusahaan asing [hal. 3, 17]. (c) Keduanya relevan. Romantic view menyoroti peran CEO dan kepemimpinan yang gagal, sedangkan external control view menyoroti tekanan pesaing kuat dan keterbatasan regulator. Buku menyebut penekanan pada pemimpin hanya sebagian gambaran [hal. 4-5]. Hasil analisis ini disusun dari fakta buku, bukan fakta tambahan."
  },
  {
    "type": "case",
    "scope": "TM 1: Hierarchy of goals dan kriteria strategic objectives",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 2: Visi Alibaba 2007 dan Menilai Kualitas Tujuan Perusahaan",
    "context": "Alibaba dimulai pada 1999 sebagai portal B2B yang menghubungkan produsen China dengan dunia, lalu masuk ke pasar C2C lewat Taobao pada 2003. Baru pada 2007 manajemen menyepakati visi baru: \"Foster the development of an open, coordinated, prosperous e-commerce ecosystem.\" Menurut buku, visi itu mengubah model bisnis dari sekadar menghubungkan penjual dan pembeli menjadi ekosistem yang menyediakan semua sumber daya bagi bisnis online China. Di bagian lain buku, daftar tujuan strategis (Exhibit 1.8) memuat contoh seperti \"Cut corporate overhead costs by $30 million per year\" (AutoNation).",
    "data": [
      "Visi Alibaba 2007: \"Foster the development of an open, coordinated, prosperous e-commerce ecosystem.\"",
      "Tujuan contoh A: \"Cut corporate overhead costs by $30 million per year.\"",
      "Tujuan contoh B (rekaan): \"Menjadi perusahaan yang disukai pelanggan.\"",
      "Rujukan: Dess dkk. (2024), Ch. 1, hal. 25-30."
    ],
    "instructions": [
      "Tempatkan visi Alibaba pada hierarchy of goals dan jelaskan ciri yang membuatnya vision, bukan mission statement.",
      "Nilai tujuan A dan B memakai lima kriteria strategic objectives dalam buku. Kriteria mana yang terpenuhi dan mana yang belum?",
      "Jelaskan satu alasan visi bisa gagal menurut buku dan kaitkan dengan peran strategic objectives."
    ],
    "outputFormat": [
      "Penempatan visi dalam hierarki beserta alasan",
      "Tabel penilaian lima kriteria untuk tujuan A dan B",
      "Kesimpulan tentang koherensi vision, mission, dan objectives"
    ],
    "rubric": [
      "Menempatkan visi di puncak hierarki dengan ciri umum dan jangka panjang (30%)",
      "Menerapkan lima kriteria secara tepat dan tidak memakai istilah SMART sebagai istilah buku (40%)",
      "Mengaitkan alasan kegagalan visi dengan fungsi objectives (30%)"
    ],
    "answerGuide": "(a) Visi Alibaba berada di tingkat teratas hierarki: luas, jangka panjang, dan memunculkan gambaran mental, bukan target terukur [hal. 25-27]. Mission statement akan memuat dasar persaingan dan lebih spesifik. (b) Tujuan A: measurable (angka 30 juta dolar) dan timely (per tahun) terpenuhi, specific cukup jelas; appropriate dan realistic baru bisa dinilai bila mission dan kemampuan perusahaan diketahui. Tujuan B: belum measurable, belum specific, belum timely; appropriate dan realistic belum bisa dinilai [hal. 29-30]. (c) Contoh alasan: irrelevance atau the walk doesn't match the talk. Objectives mengoperasionalkan mission sehingga karyawan tahu apa yang dikerjakan besok pagi; tanpa objectives yang selaras, visi tinggal poster [hal. 24, 26-28]."
  },
  {
    "type": "case",
    "scope": "TM 2: Analisis lingkungan eksternal dan Porter five forces",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Menilai Daya Tarik Industri Kopi Gerai Kecil dengan Five Forces",
    "context": "Sebuah perusahaan rekaan, Kopi Sudut, ingin membuka jaringan gerai kopi kecil di kota-kota menengah. Biaya masuk rendah karena peralatan standar dan sewa ruko murah. Pembeli mudah berpindah karena produk serupa dan harga hampir sama. Pemasok biji kopi berkualitas terbatas dan beberapa di antaranya mulai membuka gerai sendiri. Es teh kemasan dan kopi sachet menjadi pilihan murah yang memenuhi kebutuhan serupa. Banyak gerai baru dibuka dan pertumbuhan pasar mulai melambat. Seluruh data di bawah adalah rekaan untuk latihan.",
    "data": [
      "Entry barriers: modal kecil, tanpa merek kuat, ruko sewa murah.",
      "Pembeli: banyak pilihan, switching costs rendah, sensitif harga.",
      "Pemasok biji kopi: jumlah terbatas, sebagian melakukan forward integration.",
      "Substitusi: kopi sachet dan teh kemasan. Rivalry: banyak pesaing, pertumbuhan melambat."
    ],
    "instructions": [
      "Nilai kelima kekuatan Porter satu per satu: apakah tekanannya tinggi atau rendah, dan sebutkan kondisi dari buku yang mendukung penilaian itu.",
      "Jelaskan akibat gabungan kelima kekuatan terhadap laba industri.",
      "Tuliskan dua caveat dalam memakai five forces sebelum menyimpulkan bahwa industri ini sebaiknya dihindari."
    ],
    "outputFormat": [
      "Tabel lima kekuatan: tingkat tekanan dan alasannya",
      "Kesimpulan tentang tekanan terhadap laba",
      "Dua caveat analisis"
    ],
    "rubric": [
      "Menerapkan kelima kekuatan dengan kondisi yang tepat dari buku (45%)",
      "Menyebut forward integration pemasok dan switching costs buyer dengan benar (25%)",
      "Menyebut caveat: perusahaan kuat bisa untung di industri laba rendah, analisis bersifat gambaran satu waktu atau tidak selalu zero-sum (30%)"
    ],
    "answerGuide": "Threat of new entrants: tinggi karena hambatan masuk (capital requirements, differentiation) rendah [hal. 54-55]. Bargaining power of buyers: tinggi karena produk tidak terdiferensiasi dan switching costs rendah [hal. 55-57]. Bargaining power of suppliers: sedang sampai tinggi karena jumlah pemasok terbatas dan sebagian melakukan forward integration. Threat of substitutes: tinggi karena kopi sachet dan teh kemasan memenuhi kebutuhan serupa dan membatasi harga. Rivalry: tinggi karena pesaing banyak dan pertumbuhan lambat [hal. 57-58]. Akibatnya, laba industri tertekan dari sisi harga jual maupun biaya input. Caveat: perusahaan yang kuat masih bisa meraih hasil baik di industri berlaba rendah, dan analisis industri adalah gambaran satu waktu sehingga perlu diperiksa ulang [hal. 58-60]. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 2: Value chain, RBV, dan balanced scorecard",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 2: Menguji Keunggulan Berkelanjutan dan Kinerja Perusahaan Distribusi Rekaan",
    "context": "PT Lintas Niaga (rekaan) adalah distributor makanan beku. Keunggulan utamanya adalah jaringan gudang berpendingin yang dibangun sepuluh tahun dan hubungan erat dengan ratusan toko pelanggan. Pesaing baru bisa menyewa gudang berpendingin, tetapi butuh waktu lama untuk membangun kepercayaan toko. Tahun ini laba bersih naik, tetapi manajemen memangkas pelatihan sopir dan perawatan armada untuk menjaga margin. Rasio lancar perusahaan 1,5 kali, sedangkan rata-rata industri 1,2 kali.",
    "data": [
      "Sumber daya: gudang berpendingin (sewa tersedia di pasar), hubungan dengan toko (dibangun selama sepuluh tahun).",
      "Tindakan manajemen: pemangkasan pelatihan sopir dan perawatan armada.",
      "Current ratio perusahaan 1,5 kali, rata-rata industri 1,2 kali (rekaan).",
      "Rujukan: Dess dkk. (2024), Ch. 3, hal. 72-95."
    ],
    "instructions": [
      "Uji dua sumber daya (gudang dan hubungan toko) memakai empat kriteria RBV, lalu tentukan profil pada Exhibit 3.7 untuk masing-masing.",
      "Tentukan kegiatan primary dan support mana pada value chain yang terkena pemangkasan, dan jelaskan risikonya.",
      "Nilai kondisi perusahaan memakai current ratio dan empat perspektif balanced scorecard. Apa risiko denominator management dalam kasus ini?"
    ],
    "outputFormat": [
      "Tabel uji empat kriteria dan profil keunggulan",
      "Pemetaan kegiatan value chain yang terdampak",
      "Penilaian balanced scorecard dan risiko denominator management"
    ],
    "rubric": [
      "Memakai empat kriteria dan profil Exhibit 3.7 secara tepat (35%)",
      "Memetakan kegiatan (service/operations dan human resource management) dengan benar (25%)",
      "Menafsirkan rasio dengan pembanding dan menjelaskan denominator management (40%)"
    ],
    "answerGuide": "Gudang berpendingin: valuable, tetapi tidak rare dan mudah ditiru (disewa), sehingga competitive parity [hal. 83-87]. Hubungan toko: valuable, rare, sulit ditiru karena path dependency (dibangun sepuluh tahun) dan social complexity, tanpa substitusi setara, sehingga berpotensi sustainable advantage bila keempat kriteria terpenuhi. Pemangkasan pelatihan sopir menyentuh human resource management (support), perawatan armada menyentuh operations dan outbound logistics (primary); risikonya layanan memburuk dan merusak hubungan toko, yang justru sumber keunggulan [hal. 73-77]. Current ratio 1,5 kali lebih tinggi dari rata-rata industri 1,2 kali, tetapi satu rasio tidak cukup; pembanding historis dan pesaing perlu diperiksa, serta perspektif customer dan innovation and learning. Denominator management: rasio tampak membaik karena biaya dipangkas, sementara kemampuan masa depan melemah [hal. 90-95]. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 3: Business-level strategy dan pitfalls",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Memilih Posisi Bersaing Toko Elektronik Rekaan",
    "context": "Toko Elektra (rekaan) menjual perangkat elektronik rumah tangga. Awalnya Elektra bersaing lewat harga murah, tetapi biaya sewa dan stok yang membengkak membuat laba tipis. Lalu Elektra menambah layanan pasang gratis dan garansi panjang, sehingga biaya naik, sementara pembeli di daerahnya lebih memilih toko daring yang murah. Pesaing besar kini membuka outlet kecil di kota yang sama dan menawarkan harga serupa. Seluruh data adalah rekaan untuk latihan.",
    "data": [
      "Strategi awal: harga murah tanpa dasar biaya yang jelas.",
      "Strategi tambahan: layanan pasang gratis dan garansi panjang, biaya naik.",
      "Pembeli: sensitif harga, mudah pindah ke toko daring.",
      "Rujukan: Dess dkk. (2024), Ch. 5, hal. 142-157."
    ],
    "instructions": [
      "Tempatkan Elektra pada dimensi strategi generik Exhibit 5.1. Apakah ia termasuk stuck in the middle? Beri alasan.",
      "Identifikasi satu pitfall cost leadership dan satu pitfall differentiation yang tampak pada kasus ini.",
      "Usulkan dua perbaikan yang menghubungkan kegiatan value chain dengan pilihan strategi, serta satu syarat agar kombinasi biaya rendah dan diferensiasi berhasil."
    ],
    "outputFormat": [
      "Penempatan posisi strategi dan alasannya",
      "Pitfall yang teridentifikasi",
      "Dua perbaikan dan satu syarat kombinasi"
    ],
    "rubric": [
      "Menerapkan dimensi dasar keunggulan dan luas pasar dengan benar (30%)",
      "Menyebut pitfall yang sesuai dengan kondisi kasus (35%)",
      "Perbaikan menghubungkan kegiatan value chain dan memenuhi syarat kombinasi (35%)"
    ],
    "answerGuide": "Elektra mengejar harga murah tanpa dasar biaya dan sekaligus menambah layanan mahal, sehingga tidak membangun keunggulan yang jelas; ini mendekati stuck in the middle [hal. 142-143, 155-157]. Pitfall cost leadership: parity diferensiasi atau biaya total tidak terkendali (harga murah tanpa dasar biaya menghabiskan laba) [hal. 144-147]. Pitfall differentiation: keunikan atau premi yang tidak dihargai pembeli, yang sensitif harga [hal. 150-151]. Perbaikan: pilih satu posisi, misalnya cost focus pada segmen tertentu dengan mengurangi biaya sewa dan stok, atau differentiation focus dengan layanan yang dihargai segmen yang bersedia membayar. Kombinasi hanya berhasil bila kegiatan saling mendukung dan biaya koordinasi tertutup oleh manfaat [hal. 155-157]. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 3: Corporate-level strategy, BCG, dan cara diversifikasi",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 2: Portofolio Bisnis dan Pilihan Cara Masuk Bisnis Baru",
    "context": "Grup Nusa Lestari (rekaan) memiliki tiga unit: pabrik kemasan (pangsa relatif tinggi, pasar tumbuh lambat), distribusi makanan beku (pangsa relatif rendah, pasar tumbuh cepat), dan percetakan buku (pangsa relatif rendah, pasar menyusut). Manajemen ingin masuk ke bisnis pengiriman logistik dingin dan sedang menimbang tiga cara: mengakuisisi pemain regional dengan premi tinggi, membentuk joint venture dengan operator gudang dingin, atau membangun sendiri. Direktur utama juga ingin segera menjual percetakan karena dianggap dog.",
    "data": [
      "Pabrik kemasan: pangsa relatif tinggi, pertumbuhan pasar lambat.",
      "Distribusi beku: pangsa relatif rendah, pertumbuhan pasar tinggi.",
      "Percetakan buku: pangsa relatif rendah, pasar menyusut, memakai sebagian mesin yang sama dengan pabrik kemasan.",
      "Rujukan: Dess dkk. (2024), Ch. 6, hal. 177-199."
    ],
    "instructions": [
      "Petakan ketiga unit ke kuadran BCG dan jelaskan arah alokasi kas yang umum.",
      "Jelaskan lima keterbatasan BCG yang relevan sebelum memutuskan menjual percetakan.",
      "Bandingkan tiga cara masuk bisnis logistik dingin berdasarkan manfaat dan batasnya, lalu pilih satu dengan alasan."
    ],
    "outputFormat": [
      "Tabel kuadran BCG dan arah kas",
      "Analisis keterbatasan BCG untuk keputusan percetakan",
      "Perbandingan tiga cara masuk bisnis dan rekomendasi"
    ],
    "rubric": [
      "Kuadran dan arah kas benar (30%)",
      "Mengaitkan keterbatasan BCG dengan hubungan antarunit (mesin yang dipakai bersama) (30%)",
      "Perbandingan tiga cara masuk bisnis lengkap dan rekomendasi beralasan (40%)"
    ],
    "answerGuide": "Pabrik kemasan: cash cow (pangsa tinggi, pasar lambat), menghasilkan kas. Distribusi beku: question mark (pangsa rendah, pasar tumbuh), butuh investasi untuk menjadi star. Percetakan: dog (pangsa rendah, pasar lambat atau menyusut) [hal. 187-188]. Divestasi dogs adalah implikasi umum, tetapi BCG hanya memakai dua dimensi dan mengabaikan hubungan antarunit; percetakan memakai mesin bersama dengan pabrik kemasan sehingga ada kemungkinan sharing activities yang hilang bila dijual [hal. 188]. Cara masuk: akuisisi cepat tetapi premi tinggi dan risiko integrasi serta budaya; joint venture membagi kontribusi tetapi butuh mitra yang kompatibel dan dipercaya; internal development mempertahankan nilai tetapi lambat [hal. 189-198]. Rekomendasi dapat berbeda asalkan beralasan; misalnya joint venture bila perusahaan belum punya kemampuan logistik dingin. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 4: Strategi internasional dan entry mode",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Ford World Car di Pasar China dan Pilihan Strategi Internasional",
    "context": "Ford memakai pendekatan mobil serupa di berbagai negara untuk menghemat biaya. Menurut buku, pelanggan China meminta fitur dan pilihan yang berbeda, dan kegiatan desain yang jauh dari pasar menyulitkan pembacaan kebutuhan lokal. Kasus ini menunjukkan bahwa skala global harus diperiksa bersama pengetahuan lokal. Anggap manajemen sedang menimbang apakah tetap memakai strategi yang sama atau mengubah pendekatan.",
    "data": [
      "Strategi semula: satu model untuk banyak negara demi skala dan penghematan biaya.",
      "Masalah: pelanggan China menuntut fitur berbeda; desain jauh dari pasar.",
      "Dua tekanan: pressures to lower costs dan pressures for local adaptation.",
      "Rujukan: Dess dkk. (2024), Ch. 7, hal. 207-208, 221-227."
    ],
    "instructions": [
      "Nilai tingkat tekanan biaya dan tekanan adaptasi pada kasus ini, lalu tentukan strategi dasar yang tampaknya dipakai dan alasannya.",
      "Bandingkan strategi yang tampaknya tepat sekarang (multidomestic atau transnational) berdasarkan strengths dan limitations dalam buku.",
      "Jelaskan syarat implementasi transnational agar tidak sekadar menjadi label."
    ],
    "outputFormat": [
      "Penilaian dua tekanan dan strategi saat ini",
      "Perbandingan alternatif strategi",
      "Syarat implementasi dan risiko"
    ],
    "rubric": [
      "Memakai dua sumbu tekanan dengan benar dan tidak membaca sumbu biaya sebagai biaya perusahaan (30%)",
      "Membandingkan strengths dan limitations secara akurat (40%)",
      "Menjelaskan lokasi kegiatan dan transfer pengetahuan sebagai tantangan transnational (30%)"
    ],
    "answerGuide": "Tekanan biaya tinggi karena skala standar menghemat biaya, tetapi tekanan adaptasi juga tinggi karena pelanggan China menuntut fitur berbeda. Pendekatan satu model untuk semua negara mendekati global strategy, yang kuat pada economies of scale tetapi adaptasinya terbatas [hal. 222-227]. Multidomestic mengutamakan adaptasi lokal tetapi mengorbankan scale economies dan transfer pengetahuan; transnational mencoba menggabungkan efisiensi, adaptasi, dan learning. Syarat transnational: menentukan lokasi kegiatan untuk biaya dan kualitas, serta memfasilitasi transfer pengetahuan antarunit; membentuk unit saja tidak otomatis menghasilkan learning (contoh Panasonic lifestyle center) [hal. 225-227]. Jawaban ini analisis dari fakta buku, bukan fakta tambahan tentang Ford."
  },
  {
    "type": "case",
    "scope": "TM 4: Peluang usaha baru dan competitive dynamics",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 2: Menilai Peluang Aplikasi Surplus Pangan dan Respons Pesaing",
    "context": "Sebuah usaha rintisan rekaan, PanganKita, menghubungkan restoran yang punya surplus makanan dengan panti dan dapur umum lewat aplikasi dan armada kurir. Pendapatan datang dari biaya layanan kepada restoran. Pendiri punya pengalaman logistik tetapi belum punya jaringan restoran. Dana awal berasal dari tabungan pendiri dan keluarga. Setelah mulai berjalan, sebuah perusahaan pesan-antar makanan besar menyatakan akan menambah fitur donasi makanan di aplikasinya. Seluruh data adalah rekaan untuk latihan.",
    "data": [
      "Model: aplikasi, kurir, biaya layanan restoran.",
      "Pendiri: pengalaman logistik, jaringan restoran terbatas, dana dari tabungan dan keluarga.",
      "Pesaing potensial: pesan-antar besar dengan banyak pelanggan dan sumber daya.",
      "Rujukan: Dess dkk. (2024), Ch. 8, hal. 242-263."
    ],
    "instructions": [
      "Uji peluang dengan empat kriteria evaluasi (attractive, achievable, durable, value creating) memakai fakta yang tersedia.",
      "Nilai kecocokan peluang, sumber daya, dan pendiri (Exhibit 8.1), lalu sebutkan jenis entry strategy yang paling sesuai.",
      "Lakukan threat analysis atas pesaing besar dan pilih respons: strategic action, tactical action, forbearance, atau co-opetition. Beri alasan memakai tiga faktor likelihood of reaction."
    ],
    "outputFormat": [
      "Tabel empat kriteria peluang",
      "Penilaian kecocokan tiga unsur dan entry strategy",
      "Threat analysis dan keputusan respons"
    ],
    "rubric": [
      "Menerapkan empat kriteria dengan fakta kasus (30%)",
      "Menilai kecocokan opportunity, resources, entrepreneur dan menyebut entry strategy yang tepat (30%)",
      "Threat analysis dan alasan respons memakai konsep buku (40%)"
    ],
    "answerGuide": "Attractive: ada kebutuhan karena surplus makanan dan penerima yang membutuhkan; achievable: aplikasi dan kurir memberi mekanisme praktis; durable: bergantung hubungan pasokan dan permintaan yang berkelanjutan; value creating: biaya layanan harus melampaui biaya pengembangan dengan margin cukup [hal. 245-246]. Kecocokan: peluang menarik, tetapi jaringan restoran (social capital) terbatas dan dana kecil; kepemimpinan perlu vision, dedication, dan commitment to excellence [hal. 242-250]. Entry strategy: imitative atau adaptive, karena model menghubungkan surplus dengan penerima sudah ada (Goodr di buku) dan dimodifikasi untuk pasar lokal [hal. 252-255]. Threat analysis: market commonality tinggi karena pelanggan restoran sama, resource similarity rendah karena pesaing jauh lebih besar; pesaing besar bisa membalas cepat. Respons: tactical action (menjaga hubungan restoran, layanan khusus) atau co-opetition bila kerja sama menguntungkan; nilai market dependence, resources rival, dan reputasi aktor [hal. 259-264]. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 5: Strategic control dan behavioral control",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Budaya Sukses yang Menutup Kabar Buruk dan Sistem Bonus Penjualan",
    "context": "PT Ragam Teknik (rekaan) selama bertahun-tahun merayakan keberhasilan dalam rapat bulanan. Manajer unit enggan melaporkan kendala karena yang membawa kabar buruk dianggap menghambat target. Bonus tenaga penjual dihitung hanya dari volume penjualan, sehingga sebagian penjual menerima pesanan yang margin dan risiko pembayarannya buruk. Penjualan tahun ini sesuai target, tetapi dua pelanggan terbesar mulai menguji produk pesaing dengan teknologi baru. Direksi menilai kontrol sudah berjalan karena target tercapai. Data kasus adalah rekaan.",
    "data": [
      "Budaya: keberhasilan dipentaskan, kritik sulit naik ke pimpinan (mirip kasus GE dalam buku).",
      "Reward: bonus hanya dari volume penjualan.",
      "Hasil: penjualan sesuai target; pelanggan utama menguji teknologi pesaing.",
      "Rujukan: Dess dkk. (2024), Ch. 9, hal. 273-282."
    ],
    "instructions": [
      "Jelaskan mengapa pencapaian target belum membuktikan kontrol strategis efektif. Gunakan konsep single-loop dan double-loop learning.",
      "Nilai tiga tuas behavioral control (culture, rewards, boundaries) pada kasus ini dan tunjukkan mana yang tidak konsisten.",
      "Rancang tiga perbaikan, termasuk dua ciri sistem reward efektif yang perlu dipenuhi."
    ],
    "outputFormat": [
      "Analisis single-loop vs double-loop",
      "Penilaian tiga tuas behavioral control",
      "Tiga perbaikan dengan rujukan ciri reward efektif"
    ],
    "rubric": [
      "Membedakan informational dan behavioral control dengan tepat (30%)",
      "Menilai culture, rewards, boundaries dengan fakta kasus (40%)",
      "Perbaikan konkret dan terhubung dengan enam ciri reward (30%)"
    ],
    "answerGuide": "Target tercapai belum cukup: perusahaan hanya mengoreksi hasil terhadap sasaran awal (single-loop) dan belum menguji asumsi bahwa teknologi dan kebutuhan pelanggan masih sama; informational control perlu memeriksa perubahan teknologi pelanggan dan double-loop dapat mengubah arah meski hasil lama baik [hal. 273-274]. Budaya sukses menghambat kabar buruk, sehingga ongoing debate dan face-to-face interpretation tidak terjadi [hal. 274-276]. Reward berbasis volume tidak terkait perilaku yang diinginkan (margin dan kualitas pesanan), sehingga tidak konsisten dengan tujuan; boundaries (aturan penerimaan pesanan) lemah [hal. 278-280]. Perbaikan: (1) forum yang memberi penghargaan pada pembawa concerns, (2) bonus yang menghubungkan imbalan dengan margin dan perilaku yang diinginkan (link to performance and desired behavior; fair and equitable), (3) review rutin atas asumsi teknologi pelanggan. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 5: Corporate governance, struktur, dan desain ambidextrous",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 2: Pengendali Dominan, Struktur Divisi, dan Unit Inovasi",
    "context": "Grup Karya Mandala (rekaan) dikendalikan satu keluarga dengan kepemilikan 62%. Beberapa kali perusahaan induk menjual bahan baku ke perusahaan lain milik keluarga dengan harga di bawah pasar, sementara pemegang saham minoritas tidak dapat memeriksa transaksi itu. Ketua dewan juga menjabat sebagai CEO. Grup mengoperasikan tiga divisi produk dengan fungsi masing-masing; ada keluhan duplikasi biaya dan persaingan antardivisi. Manajemen ingin membangun unit usaha digital baru dan menimbang apakah unit itu cukup dipisah sebagai perusahaan terpisah tanpa dukungan korporat. Seluruh data adalah rekaan.",
    "data": [
      "Kepemilikan pengendali: 62%; transaksi terkait dengan perusahaan keluarga.",
      "CEO duality: CEO juga ketua dewan.",
      "Struktur: tiga divisi produk dengan fungsi masing-masing; duplikasi biaya dan kompetisi antardivisi.",
      "Rujukan: Dess dkk. (2024), Ch. 9-10, hal. 283-297, 306-329."
    ],
    "instructions": [
      "Klasifikasikan konflik utama sebagai principal-agent atau principal-principal, jelaskan tiga kondisi yang mendukungnya, dan nilai trade-off CEO duality.",
      "Sebutkan satu mekanisme internal dan dua mekanisme eksternal yang dapat membatasi masalah ini, beserta batasnya.",
      "Nilai kelebihan dan kekurangan struktur divisional pada grup ini, lalu jelaskan syarat agar unit digital menjadi desain ambidextrous, bukan unsupported team."
    ],
    "outputFormat": [
      "Klasifikasi konflik dan analisis CEO duality",
      "Mekanisme tata kelola yang diusulkan dan batasnya",
      "Analisis struktur divisional dan syarat desain ambidextrous"
    ],
    "rubric": [
      "Klasifikasi PP dengan tiga kondisi dan trade-off duality benar (35%)",
      "Mekanisme internal dan eksternal dengan batasnya tepat (30%)",
      "Analisis divisional dan syarat ambidextrous lengkap (35%)"
    ],
    "answerGuide": "Konflik utamanya principal-principal: pengendali (62%) mengambil manfaat dari minoritas lewat transaksi terkait (expropriation). Tiga kondisi: kepentingan pengendali berbeda, motivasi menggunakan dominasi, dan lemahnya pembatas formal atau informal [hal. 295-297]. CEO duality: unity of command memberi arah jelas, tetapi perspektif agency menekankan pemisahan agar dewan dapat mengawasi CEO; lead director dapat membantu tetapi tidak menghapus konflik [hal. 291-292]. Mekanisme: internal berupa dewan yang terlibat dengan direktur independen atau shareholder activism; eksternal berupa auditor yang independen dan regulator dengan disclosure; batasnya, independensi auditor dapat terpengaruh hubungan bisnis dan disclosure adalah versi buku [hal. 284-295]. Divisional: respons pasar cepat dan fokus produk, tetapi duplikasi biaya dan kompetisi antarunit [hal. 309-314]. Unit digital menjadi ambidextrous bila memiliki proses, struktur, dan budaya sendiri sekaligus terintegrasi pada senior management dengan sumber daya bersama; tanpa dukungan ia menjadi unsupported team [hal. 328-329]. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 6: Hambatan perubahan, learning organization, dan etika",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Pemimpin Berpengaruh, Penolakan Perubahan, dan Bonus Berbasis Laba",
    "context": "PT Sentra Mitra (rekaan) dipimpin direktur utama yang sangat berpengaruh dan berhasil memulihkan laba. Keputusannya jarang ditantang karena bawahan takut. Manajer regional menahan data penjualan antarwilayah karena data itu menentukan peringkat bonus. Rapat strategis sering ditunda karena manajer sibuk menyelesaikan masalah harian. Bonus manajer dihitung dari laba, dan beberapa wilayah mencapainya dengan menunda pembayaran vendor dan memotong biaya perawatan. Pelatihan sudah ditambah, tetapi pengetahuan dari tiap wilayah tidak dibagikan. Seluruh data adalah rekaan.",
    "data": [
      "Kepemimpinan: pemimpin berpengaruh, kritik sulit naik, perilakunya menjadi contoh.",
      "Hambatan: data ditahan antarunit, rapat strategis tertunda, peringkat bonus menentukan perilaku.",
      "Etika: bonus dari laba tanpa memeriksa cara mencapai laba.",
      "Rujukan: Dess dkk. (2024), Ch. 11, hal. 338-358."
    ],
    "instructions": [
      "Petakan tiga kegiatan kepemimpinan dan tunjukkan kegiatan mana yang tidak selaras.",
      "Identifikasi dua hambatan perubahan dan dua basis kuasa yang relevan; jelaskan risiko penyalahgunaan kuasa.",
      "Nilai kondisi etika organisasi memakai empat unsur organisasi etis dan lima unsur learning organization, lalu usulkan tiga perbaikan."
    ],
    "outputFormat": [
      "Pemetaan kegiatan kepemimpinan",
      "Hambatan perubahan dan basis kuasa",
      "Penilaian etika dan pembelajaran beserta tiga perbaikan"
    ],
    "rubric": [
      "Pemetaan kegiatan kepemimpinan dan hubungan antarkegiatan benar (25%)",
      "Hambatan dan basis kuasa dipilih dan dijelaskan dengan tepat (35%)",
      "Analisis etika dan learning organization lengkap dengan perbaikan konkret (40%)"
    ],
    "answerGuide": "Setting a direction cukup kuat (pemulihan laba), tetapi designing the organization (rewards dan integrasi) dan nurturing culture tidak selaras: bonus berbasis laba mendorong perilaku merugikan dan budaya takut menahan kritik [hal. 338-343]. Hambatan: political barriers (data ditahan demi peringkat) dan personal time constraints/Gresham's law (rapat strategis tertunda); systemic barriers juga mungkin karena aliran informasi antarwilayah buruk [hal. 343-345]. Basis kuasa: legitimate dan reward power dari direktur utama, information power pada manajer yang menahan data; penyalahgunaan membuat kepatuhan karena takut, bukan komitmen, dan menghambat kritik [hal. 345-346]. Etika: role models (pemimpin yang tidak ditantang), reward/evaluation yang tidak memeriksa cara mencapai hasil, serta policies/procedures yang lemah [hal. 356-358]. Learning organization: tidak ada berbagi internal knowledge dan dissent tanpa pembalasan [hal. 348-353]. Perbaikan: ubah bonus agar memeriksa cara mencapai hasil, bangun forum berbagi data dan kritik tanpa hukuman, sisihkan waktu refleksi strategis. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 6: Inovasi, corporate entrepreneurship, dan real options",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 2: Menilai Proyek Inovasi Internal dengan Tahapan Pendanaan",
    "context": "PT Cipta Nusa (rekaan), produsen peralatan dapur, memiliki tim kecil yang mengusulkan sensor yang dapat memantau suhu makanan lewat aplikasi. Tim itu diberi unit terpisah dengan anggaran terbatas. Direksi ragu apakah harus mendanai penuh sejak awal atau bertahap. Ketua tim, seorang product champion, sangat yakin; sementara itu proyek serupa dua tahun lalu terus didanai walau penerimaan pasar buruk karena direktur yang mendukungnya enggan menghentikannya. Direksi juga ingin memakai teknologi sensor untuk pasar lain, misalnya penyimpanan vaksin. Seluruh data adalah rekaan.",
    "data": [
      "Proyek: sensor suhu dan aplikasi, unit terpisah, anggaran terbatas.",
      "Pelajaran lama: proyek serupa terus didanai walau penerimaan pasar buruk.",
      "Peluang tambahan: aplikasi teknologi sensor ke pasar lain.",
      "Rujukan: Dess dkk. (2024), Ch. 12, hal. 366-389."
    ],
    "instructions": [
      "Klasifikasikan inovasi sensor menurut tiga cara klasifikasi dan jelaskan alasan Anda.",
      "Tentukan apakah unit terpisah ini termasuk focused atau dispersed corporate entrepreneurship, dan nilai risikonya. Jelaskan peran product champion dan exit champion.",
      "Susun rencana pendanaan bertahap memakai real options analysis (tollgate dan empat pilihan keputusan) serta sebutkan dua pitfalls yang harus diwaspadai."
    ],
    "outputFormat": [
      "Klasifikasi inovasi dan alasannya",
      "Analisis bentuk CE dan peran champion",
      "Rencana pendanaan bertahap dan pitfalls"
    ],
    "rubric": [
      "Klasifikasi tiga sumbu dengan alasan benar (25%)",
      "Analisis focused CE, risiko isolasi, dan peran dua champion benar (35%)",
      "Rencana tollgate dan dua pitfalls tepat (40%)"
    ],
    "answerGuide": "Klasifikasi: produk (mengubah tawaran bagi pengguna); derajat condong incremental sampai radical menengah pada continuum; lintasan pasar bergantung pembeli: sustaining bila memperluas pasar yang ada, disruptive bila melayani pembeli kurang menuntut dengan solusi sederhana [hal. 366-369]. Unit terpisah dengan anggaran sendiri adalah focused CE; manfaatnya bebas dari rutinitas lama, risikonya isolasi sumber daya dan dukungan [hal. 379-381]. Product champion membawa ide dan sumber daya; exit champion menguji kelayakan dengan hard data dan menegakkan kriteria penghentian, yang tidak ada pada proyek lama [hal. 382-383]. Real options: investasi awal kecil, tollgate dengan kriteria jelas, lalu pilih grow/accelerate, delay/learn, shrink, atau abandon [hal. 383-386]. Pitfalls: escalation of commitment (kasus proyek lama) dan overconfidence pada investasi kecil atau back-solver dilemma. Aplikasi sensor ke pasar lain mengikuti langkah redefine, identify, select, choose entry mode [hal. 378-379]. Data kasus adalah rekaan."
  },
  {
    "type": "case",
    "scope": "TM 7: Blue Ocean Strategy (ERRC, noncustomers, dan strategic sequence)",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 1: Studio Kebugaran Rumahan yang Ingin Keluar dari Persaingan Harga",
    "context": "PT Raga Sehat (rekaan) mengelola studio kebugaran di kota besar. Pesaingnya bersaing pada tiga hal yang sama: alat canggih, jumlah kelas, dan diskon keanggotaan. Survei kecil menemukan tiga kelompok: anggota lama yang mulai jarang datang dan mempertimbangkan pindah ke alternatif lain; pekerja kantoran yang pernah mencoba lalu berhenti karena jadwal kaku dan biaya tinggi; serta orang yang tidak pernah menganggap kebugaran sebagai kebutuhan mereka karena merasa canggung di gym. Manajemen mengusulkan konsep studio kecil bertema latihan singkat 30 menit tanpa alat rumit, tanpa kolam renang, dengan pelatih tetap dan komunitas kecil. Harga keanggotaan diusulkan di bawah klub penuh dan di atas aplikasi latihan di rumah.",
    "data": [
      "Faktor pesaing: alat canggih, jumlah kelas, diskon keanggotaan, fasilitas tambahan.",
      "Kelompok: anggota lama yang mulai pergi, pekerja yang berhenti, orang yang canggung dan tidak pernah mencoba.",
      "Konsep: latihan 30 menit, tanpa alat rumit, tanpa kolam renang, pelatih tetap, komunitas kecil.",
      "Harga: di bawah klub penuh, di atas aplikasi latihan di rumah.",
      "Rujukan: Kim dan Mauborgne (2005), hal. 25-41, 103-115, 117-142."
    ],
    "instructions": [
      "Susun ERRC grid untuk konsep tersebut dengan menyebut faktor yang di-eliminate, reduce, raise, dan create, lalu jelaskan hubungannya dengan value innovation.",
      "Klasifikasikan tiga kelompok ke tier noncustomers, tentukan commonalities, dan jelaskan mengapa nomor tier tidak otomatis menjadi urutan prioritas.",
      "Uji konsep dengan strategic sequence (utility, price, cost, adoption), jelaskan cara menentukan target cost, dan tunjukkan dua hambatan adoption yang harus ditangani."
    ],
    "outputFormat": [
      "ERRC grid dan penjelasan value innovation",
      "Klasifikasi tier dan commonalities",
      "Pengujian strategic sequence dan hambatan adoption"
    ],
    "rubric": [
      "ERRC grid konsisten dengan fakta kasus dan menjelaskan nilai naik serta biaya turun (30%)",
      "Klasifikasi tier benar (anggota lama = first, pekerja yang berhenti = second, orang yang canggung = third) dengan commonalities dan biggest catchment (30%)",
      "Urutan utility, price, cost, adoption benar, target cost dihitung dari strategic price dikurangi target profit, dan hambatan adoption masuk akal (40%)"
    ],
    "answerGuide": "ERRC: eliminate alat canggih, kolam renang, dan diskon keanggotaan sebagai alat bersaing; reduce jumlah kelas dan fasilitas tambahan; raise kemudahan memulai dan keterlibatan pelatih; create latihan 30 menit dan komunitas kecil. Penghapusan dan pengurangan faktor mahal menurunkan biaya, sedangkan pelatih tetap dan kemudahan menaikkan nilai bagi pembeli, sehingga value innovation terpenuhi [BOS hal. 29-36]. Tier: anggota lama yang mulai pergi adalah first tier (soon-to-be); pekerja yang berhenti karena jadwal dan biaya adalah second tier (refusing); orang yang canggung dan tidak pernah mencoba adalah third tier (unexplored) [BOS hal. 103-106]. Commonalities: waktu singkat, tidak canggung, biaya terjangkau. Nomor tier menunjukkan jarak dari pasar, sehingga pilih biggest catchment, misalnya kelompok pekerja yang berhenti bila jumlahnya terbesar [BOS hal. 114-115]. Sequence: utility (apakah hambatan waktu dan canggung hilang), price (harga di antara klub penuh dan aplikasi berada dalam price corridor massa), cost (target cost = strategic price dikurangi target profit; studio kecil dan tanpa kolam renang membantu, lever streamlining), adoption (pelatih dan anggota lama perlu penjelasan; mitra penyewa lokasi dan komunitas sekitar perlu diajak bicara) [BOS hal. 118-119, 131-139]. Tidak ada angka laba dalam kasus, sehingga kelayakan komersial dinyatakan sebagai syarat yang masih harus diuji, bukan hasil."
  },
  {
    "type": "case",
    "scope": "TM 7: Strategy Maps (proposisi nilai, cluster proses, dan strategic readiness)",
    "difficulty": "Menengah",
    "estimatedTime": "30 menit",
    "question": "Studi Kasus 2: Peta Strategi Bank Daerah yang Beralih ke Solusi Keuangan Lengkap",
    "context": "Bank Nusa Tengah (rekaan) ingin beralih dari penjual produk tabungan menjadi penyedia solusi keuangan lengkap bagi pelaku usaha kecil. Manajemen menulis peta dengan tujuan: meningkatkan pendapatan, menambah pelanggan baru, dan meningkatkan kompetensi pegawai. Tidak ada proses internal yang tertulis di antara tujuan pelanggan dan tujuan pegawai. Strategi membutuhkan 50 relationship manager bersertifikat perencana keuangan; sampai saat ini 30 orang memenuhi syarat. Sistem data pelanggan masih terpisah per produk, dan insentif pegawai masih dihitung per produk terjual. Pelatihan sebesar Rp1,2 miliar sudah dianggarkan dan manajemen menilai hal itu cukup menunjukkan kesiapan.",
    "data": [
      "Proposisi yang dipilih: solusi keuangan lengkap untuk usaha kecil.",
      "Peta saat ini: pendapatan, pelanggan baru, kompetensi pegawai; tanpa proses internal.",
      "Kebutuhan: 50 relationship manager bersertifikat; yang memenuhi syarat: 30.",
      "Sistem data: terpisah per produk. Insentif: per produk terjual.",
      "Anggaran pelatihan: Rp1,2 miliar.",
      "Rujukan: Kaplan dan Norton (2004), hal. PDF 24-28, 54-59, 202-215, 355-356."
    ],
    "instructions": [
      "Nilai kelengkapan peta: sebutkan hubungan yang hilang, objektif pelanggan dan proses customer management yang sesuai dengan proposisi, serta perspektif tempat setiap tujuan berada.",
      "Hitung strategic job readiness dan kekurangannya, lalu jelaskan mengapa anggaran Rp1,2 miliar belum membuktikan kesiapan dan apa yang harus dinilai untuk information capital serta organization capital.",
      "Susun tema dan waktu manfaatnya serta urutan campaign enam langkah, dan beri satu kesimpulan tegas tentang kesiapan strategi."
    ],
    "outputFormat": [
      "Penilaian kelengkapan peta dan objektif",
      "Perhitungan readiness dan tiga kebutuhan aset",
      "Tema, waktu manfaat, dan kesimpulan"
    ],
    "rubric": [
      "Hubungan yang hilang (proses internal dan perspektif customer) serta objektif sesuai complete customer solutions teridentifikasi (30%)",
      "Readiness 60% dengan gap 20 orang dihitung benar, serta penjelasan anggaran dibandingkan kesiapan dan kebutuhan information serta organization capital (40%)",
      "Tema, horizon waktu, urutan campaign, dan kesimpulan tegas tanpa mengarang data (30%)"
    ],
    "answerGuide": "Peta melompat dari tujuan pelanggan ke kompetensi pegawai tanpa proses internal, padahal nilai dihasilkan lewat proses [SM hal. PDF 24-28]. Proposisi complete customer solutions menuntut objektif pelanggan: mutu solusi, jumlah produk atau jasa per pelanggan, retensi, dan profitabilitas sepanjang hubungan [SM hal. PDF 54-55]. Proses yang sesuai berada di customer management: selection, acquisition, retention, dan terutama growth (cross-selling dan solution selling) [SM hal. PDF 57-59]. Pendapatan berada di perspektif financial, pelanggan baru di customer, proses di internal, kompetensi di learning and growth. Readiness = 30 ÷ 50 × 100% = 60%, gap = 50 − 30 = 20 orang; pembagi adalah kebutuhan strategi [SM hal. PDF 215]. Anggaran Rp1,2 miliar hanya menunjukkan investasi; readiness memerlukan bukti kompetensi yang tersedia terhadap kebutuhan [SM hal. PDF 213-215]. Information capital: sistem data pelanggan terintegrasi (saat ini terpisah per produk); organization capital: insentif dan tujuan pribadi yang selaras dengan solusi, bukan per produk, serta budaya kemitraan dan teamwork [SM hal. PDF 210-212, 269-271]. Tema: perbaikan layanan dan data (operasi serta customer management) memberi manfaat lebih awal, pengembangan penawaran baru dan kontribusi komunitas memberi manfaat lebih lama; horizon 6–12, 12–24, dan 24–48 bulan hanya ilustrasi buku [SM hal. PDF 60-61]. Campaign: value gap, customer value proposition, time line, proses, asset readiness, inisiatif yang didanai [SM hal. PDF 355-356]. Kesimpulan: strategi belum siap karena readiness human capital baru 60%, sistem dan insentif belum selaras, dan peta belum mencantumkan proses; keputusan investasi pelatihan sebaiknya ditahan sampai kebutuhan proses dan aset dipetakan. Data kasus tidak memuat angka pendapatan, sehingga dampak laba tidak dapat dinilai."
  }
];

export const MNS301_BANK: BankSoal[] = [...MNS301_BANK_UTS];
