// scripts/build-super-mnm101-quizzes-data.mjs
// 70 Soal Pilihan Ganda Komprehensif Pengantar Manajemen (MNM101) - 5 soal per TM

export const MNM101_SUPER_QUIZ_UTS = [
  // --- TM 1: Fungsi POAC & Keterampilan Manajerial (5 Soal) ---
  {
    tm: 1, topic: "Fungsi Manajemen POAC", difficulty: "medium",
    q: "Manajer menetapkan target penjualan tumbuh 15% untuk tahun depan dan merancang langkah pencapaiannya. Manajer tersebut sedang menjalankan fungsi...",
    options: ["Planning (Perencanaan)", "Organizing (Pengorganisasian)", "Leading (Kepemimpinan)", "Controlling (Pengendalian)"],
    answer: 0,
    explanation: "Planning adalah fungsi manajemen yang mendefinisikan sasaran organisasi di masa depan dan menentukan sumber daya serta tugas yang diperlukan untuk mencapainya."
  },
  {
    tm: 1, topic: "Keterampilan Manajerial Katz", difficulty: "medium",
    q: "Menurut Robert L. Katz, keterampilan manajerial yang proporsinya PALING dominan dibutuhkan oleh seorang manajer lini pertama (first-line supervisor) adalah...",
    options: ["Conceptual Skills", "Technical Skills", "Human Skills", "Political Skills"],
    answer: 1,
    explanation: "Manajer lini pertama mengawasi langsung staf operasional, sehingga keahlian teknis (Technical Skills) untuk memandu metode dan prosedur kerja harian sangat dominan."
  },
  {
    tm: 1, topic: "Peran Manajerial Mintzberg", difficulty: "advanced",
    q: "Ketika seorang CEO menghadiri acara peresmian pabrik baru dan memberikan pidato sambutan formal mewakili perusahaan, ia sedang menjalankan peran Mintzberg dalam kategori...",
    options: ["Figurehead (Interpersonal)", "Spokesperson (Informational)", "Disseminator (Informational)", "Liaison (Interpersonal)"],
    answer: 0,
    explanation: "Figurehead adalah peran simbolis dan seremonial di mana manajer mewakili organisasi dalam kewajiban hukum atau sosial formal."
  },
  {
    tm: 1, topic: "Efisiensi vs Efektivitas", difficulty: "medium",
    q: "Suatu pabrik berhasil memproduksi 10.000 unit barang dengan biaya bahan baku sangat murah, tetapi produk tersebut tidak laku di pasaran karena tidak sesuai kebutuhan konsumen. Organisasi ini dapat dikategorikan...",
    options: ["Efisien tetapi tidak efektif", "Efektif tetapi tidak efisien", "Efisien dan efektif", "Tidak efisien dan tidak efektif"],
    answer: 0,
    explanation: "Pabrik meminimalkan biaya sumber daya (efisien), namun gagal mencapai sasaran pasar yang tepat (tidak efektif)."
  },
  {
    tm: 1, topic: "Manajemen Kontemporer", difficulty: "basic",
    q: "Ciri utama dari lingkungan kerja modern (New Workplace) dibandingkan manajemen tradisional adalah...",
    options: ["Pengawasan ketat dan hierarki komando kaku", "Pemberdayaan karyawan (empowerment) dan kolaborasi tim", "Fokus eksklusif pada laba jangka pendek tanpa peduli etika", "Penghapusan seluruh peran manajer puncak"],
    answer: 1,
    explanation: "New Workplace menekankan fleksibilitas, ketangkasan (agility), pemberdayaan staf, dan kepemimpinan yang melayani (servant leadership)."
  },

  // --- TM 2: Lingkungan Eksternal & Budaya Organisasi (5 Soal) ---
  {
    tm: 2, topic: "Analisis Lingkungan PESTEL", difficulty: "medium",
    q: "Kenaikan suku bunga acuan bank sentral dan laju inflasi nasional merupakan komponen dari lingkungan...",
    options: ["Lingkungan Tugas (Task Environment)", "Lingkungan Umum - Dimensi Ekonomi", "Lingkungan Internal Organisasi", "Lingkungan Budaya Korporat"],
    answer: 1,
    explanation: "Inflasi dan suku bunga adalah bagian dari Dimensi Ekonomi pada Lingkungan Umum (General Environment) yang mempengaruhi seluruh industri secara makro."
  },
  {
    tm: 2, topic: "Tipologi Budaya Daft", difficulty: "advanced",
    q: "Perusahaan rintisan (startup) teknologi yang mendorong eksperimen berisiko, fleksibilitas cepat, dan tanggap terhadap perubahan kebutuhan pasar mengadopsi tipe budaya...",
    options: ["Consistency Culture", "Involvement Culture", "Adaptability Culture", "Achievement Culture"],
    answer: 2,
    explanation: "Adaptability Culture berorientasi pada responsivitas strategis terhadap lingkungan eksternal yang dinamis melalui inovasi dan fleksibilitas cepat."
  },
  {
    tm: 2, topic: "Tingkatan Budaya Schein", difficulty: "medium",
    q: "Pernyataan visi misi resmi yang tertera pada lobi kantor dan piagam etika kerja perusahaan diklasifikasikan oleh Edgar Schein sebagai tingkatan budaya...",
    options: ["Visible Artifacts", "Espoused Values", "Underlying Assumptions", "Corporate Rituals"],
    answer: 1,
    explanation: "Espoused Values adalah nilai-nilai, strategi, dan filosofi yang secara sadar dinyatakan dan diumumkan secara resmi oleh kepemimpinan organisasi."
  },
  {
    tm: 2, topic: "Ketidakpastian Lingkungan", difficulty: "advanced",
    q: "Kondisi lingkungan organisasi berada pada tingkat ketidakpastian tertinggi (highest uncertainty) apabila karakteristik lingkungannya...",
    options: ["Sederhana dan Stabil", "Kompleks dan Stabil", "Sederhana dan Dinamis", "Kompleks dan Dinamis"],
    answer: 3,
    explanation: "Ketidakpastian tertinggi terjadi ketika jumlah faktor eksternal sangat banyak dan saling terkait (kompleks) serta faktor-faktor tersebut terus berubah cepat (dinamis)."
  },
  {
    tm: 2, topic: "Boundary-Spanning Roles", difficulty: "medium",
    q: "Peran karyawan yang secara aktif mengumpulkan data pesaing dan memantau tren preferensi konsumen eksternal disebut...",
    options: ["Boundary-Spanning Roles", "Internal Whistleblower", "Arbitrase Manajerial", "Gatekeeper Komando"],
    answer: 0,
    explanation: "Boundary-spanning menghubungkan dan mengkoordinasikan organisasi dengan elemen-elemen kunci di lingkungan eksternal melalui riset pasar dan intelijen kompetitif."
  },

  // --- TM 3: Manajemen Global & Etika / CSR (5 Soal) ---
  {
    tm: 3, topic: "Dimensi Budaya Hofstede", difficulty: "medium",
    q: "Masyarakat di mana bawahan sangat menghormati instruksi atasan tanpa berani mendebat dan menerima ketimpangan kekuasaan memiliki skor tinggi pada dimensi...",
    options: ["Individualism", "Power Distance (Jarak Kekuasaan)", "Uncertainty Avoidance", "Masculinity"],
    answer: 1,
    explanation: "High Power Distance mencerminkan penerimaan masyarakat terhadap distribusi kekuasaan yang tidak merata dalam institusi dan organisasi."
  },
  {
    tm: 3, topic: "Piramida Tanggung Jawab Sosial Carroll", difficulty: "medium",
    q: "Menurut Archie Carroll, fondasi paling dasar dari piramida Tanggung Jawab Sosial Perusahaan (CSR) yang menopang seluruh tanggung jawab lainnya adalah...",
    options: ["Tanggung Jawab Filantropis", "Tanggung Jawab Etis", "Tanggung Jawab Hukum", "Tanggung Jawab Ekonomi"],
    answer: 3,
    explanation: "Tanggung jawab ekonomi (menghasilkan laba dan bertahan hidup finansial) adalah syarat dasar keberadaan organisasi sebelum dapat memenuhi tanggung jawab lainnya."
  },
  {
    tm: 3, topic: "Pendekatan Etika Manajerial", difficulty: "advanced",
    q: "Manajer memutuskan menutup pabrik yang mencemari lingkungan karena memandang bahwa keselamatan hidup ribuan warga lebih utama daripada keuntungan 50 karyawan pabrik. Manajer ini menerapkan pendekatan...",
    options: ["Utilitarian Approach", "Individualism Approach", "Moral-Rights Approach", "Justice Approach"],
    answer: 0,
    explanation: "Pendekatan Utilitarian menyatakan bahwa keputusan moral harus menghasilkan kebaikan terbesar bagi jumlah orang terbanyak (the greatest good for the greatest number)."
  },
  {
    tm: 3, topic: "Strategi Masuk Pasar Global", difficulty: "medium",
    q: "Strategi ekspansi internasional dengan mendirikan fasilitas pabrik baru dari nol di negara tujuan (greenfield venture) memiliki karakteristik...",
    options: ["Biaya dan risiko terendah", "Kendali penuh atas operasional namun biaya dan risiko paling tinggi", "Hanya memerlukan royalti tahunan", "Tidak membutuhkan izin pemerintah lokal"],
    answer: 1,
    explanation: "Wholly-owned greenfield venture memberikan kendali kepemilikan 100%, tetapi menuntut investasi modal terbesar dan membawa risiko politik/ekonomi tertinggi."
  },
  {
    tm: 3, topic: "Konsep Keberlanjutan", difficulty: "basic",
    q: "Konsep Triple Bottom Line mengevaluasi keberhasilan organisasi bisnis berdasarkan keseimbangan antara...",
    options: ["Price, Product, Promotion", "Profit, People, Planet", "Planning, Priority, Performance", "Policies, Procedures, Programs"],
    answer: 1,
    explanation: "Triple Bottom Line (3P) mengukur kinerja finansial (Profit), sosial-kemanusiaan (People), dan kelestarian ekologis (Planet)."
  },

  // --- TM 4: Perencanaan Sasaran & MBO (5 Soal) ---
  {
    tm: 4, topic: "Tingkatan Perencanaan", difficulty: "medium",
    q: "Rencana tindakan yang disusun oleh manajer tingkat menengah (Middle Managers) untuk mengalokasikan anggaran divisi selama 1 tahun ke depan dikategorikan sebagai...",
    options: ["Rencana Strategis", "Rencana Taktis", "Rencana Operasional", "Rencana Kebijakan Dasar"],
    answer: 1,
    explanation: "Rencana Taktis (Tactical Plans) dirancang oleh manajer madya untuk menerjemahkan rencana strategis menjadi rencana kerja konkret departemen dalam jangka menengah (1 tahun)."
  },
  {
    tm: 4, topic: "Kriteria Sasaran SMART", difficulty: "basic",
    q: "Manakah rumusan sasaran berikut yang memenuhi seluruh kriteria SMART?",
    options: [
      "Meningkatkan kepuasan pelanggan semaksimal mungkin secepatnya",
      "Meningkatkan penjualan produk sebesar 12% di wilayah Jawa Timur pada kuartal IV 2026",
      "Bekerja lebih giat dan mengurangi biaya operasional pabrik",
      "Menjadi perusahaan terbaik di dunia"
    ],
    answer: 1,
    explanation: "Sasaran tersebut Spesifik (wilayah Jatim), Terukur (12%), Dapat Dicapai, Relevan (penjualan), dan memiliki Batasan Waktu jelas (Kuartal IV 2026)."
  },
  {
    tm: 4, topic: "Management by Objectives (MBO)", difficulty: "medium",
    q: "Karakteristik esensial dari metode Management by Objectives (MBO) yang membedakannya dari penetapan sasaran tradisional adalah...",
    options: [
      "Sasaran ditentukan sepihak oleh direktur utama tanpa kompromi",
      "Sasaran ditetapkan secara partisipatif bersama antara atasan dan bawahan",
      "Evaluasi kerja hanya dilakukan setiap 5 tahun sekali",
      "Meniadakan penilaian kuantitatif"
    ],
    answer: 1,
    explanation: "MBO melibatkan kolaborasi aktif di mana manajer dan karyawan bersama-sama merumuskan target kerja, sehingga membangun komitmen dan tanggung jawab internal."
  },
  {
    tm: 4, topic: "Rencana Operasional", difficulty: "medium",
    q: "Pedoman umum yang memberikan batasan bagi pengambilan keputusan rutin karyawan (seperti 'Perusahaan tidak menerima pengembalian barang tanpa struk belanja') merupakan contoh dari...",
    options: ["Program", "Proyek", "Kebijakan (Policy)", "Anggaran (Budget)"],
    answer: 2,
    explanation: "Kebijakan (Policy) adalah contoh Standing Plan yang memberikan panduan umum bagi anggota organisasi dalam merespons situasi yang berulang."
  },
  {
    tm: 4, topic: "Perencanaan Skenario", difficulty: "advanced",
    q: "Ketika manajemen menyusun simulasi dampak bisnis jika terjadi krisis geopolitik, inflasi 20%, atau lonjakan harga bahan bakar, teknik yang digunakan adalah...",
    options: ["Scenario Building", "Single-use Planning", "Operational Scheduling", "Management by Exception"],
    answer: 0,
    explanation: "Scenario building mengantisipasi berbagai kondisi masa depan yang mungkin terjadi dengan menyusun skenario alternatif dan respons strategis yang adaptif."
  },

  // --- TM 5: Manajemen Strategis (5 Soal) ---
  {
    tm: 5, topic: "Analisis Porter Five Forces", difficulty: "medium",
    q: "Jika dalam suatu industri pembeli dapat dengan sangat mudah dan murah berpindah ke merek lain (low switching cost), maka kekuatan kompetitif yang TINGGI adalah...",
    options: ["Daya tawar pemasok", "Daya tawar pembeli", "Ancaman hambatan masuk", "Regulasi pemerintah"],
    answer: 1,
    explanation: "Biaya peralihan yang rendah memberikan daya tawar besar bagi pembeli (Bargaining Power of Buyers) untuk menuntut harga murah atau mutu lebih tinggi."
  },
  {
    tm: 5, topic: "Strategi Generik Porter", difficulty: "medium",
    q: "Apple Inc. berfokus pada desain estetika premium, ekosistem perangkat lunak eksklusif, dan citra merek prestisius sehingga pelanggan bersedia membayar harga mahal. Apple menerapkan strategi...",
    options: ["Cost Leadership", "Differentiation (Diferensiasi)", "Cost Focus", "Diversifikasi Konglomerat"],
    answer: 1,
    explanation: "Strategi Diferensiasi membedakan produk atau layanan organisasi dari pesaing melalui inovasi, kualitas, atau fitur unik yang dinilai tinggi oleh pasar."
  },
  {
    tm: 5, topic: "Matriks Portofolio BCG", difficulty: "advanced",
    q: "Unit Bisnis Strategis (SBU) yang memiliki pangsa pasar relatif tinggi di industri yang tingkat pertumbuhannya sudah melambat/rendah dikategorikan dalam BCG sebagai...",
    options: ["Stars", "Cash Cows", "Question Marks", "Dogs"],
    answer: 1,
    explanation: "Cash Cows menghasilkan arus kas berlebih (surplus) yang dapat dialokasikan untuk mendanai riset dan pengembangan unit Question Marks atau Stars."
  },
  {
    tm: 5, topic: "Analisis SWOT", difficulty: "basic",
    q: "Teknologi mesin produksi yang usang dan pergantian karyawan (turnover) yang tinggi dalam matriks SWOT dikategorikan sebagai...",
    options: ["Strengths", "Weaknesses", "Opportunities", "Threats"],
    answer: 1,
    explanation: "Kelemahan (Weaknesses) adalah karakteristik internal organisasi yang menghambat pencapaian kinerja kompetitif yang optimal."
  },
  {
    tm: 5, topic: "Strategi Tingkat Korporasi", difficulty: "advanced",
    q: "Perusahaan produsen mi instan yang mengakuisisi perkebunan gandum dan pabrik tepung terigu sedang menjalankan strategi...",
    options: ["Integrasi Vertikal ke Belakang (Backward Vertical Integration)", "Integrasi Horizontal", "Diversifikasi Konglomerat", "Likuidasi Aset"],
    answer: 0,
    explanation: "Backward vertical integration terjadi saat perusahaan memperluas operasinya ke arah rantai pasok hulu (memproduksi bahan bakunya sendiri)."
  },

  // --- TM 6: Pengambilan Keputusan Manajerial (5 Soal) ---
  {
    tm: 6, topic: "Model Keputusan Simon", difficulty: "medium",
    q: "Konsep 'Satisficing' yang dikemukakan Herbert A. Simon merujuk pada kecenderungan pengambil keputusan untuk...",
    options: [
      "Mencari alternatif solusi terbaik mutlak dari seluruh kemungkinan",
      "Memilih alternatif pertama yang memenuhi kriteria minimal yang memuaskan",
      "Menyerahkan keputusan kepada undian acak",
      "Menunda keputusan hingga data 100% lengkap"
    ],
    answer: 1,
    explanation: "Satisficing adalah memilih solusi pertama yang cukup baik (good enough) karena adanya keterbatasan kognitif dan waktu (Bounded Rationality)."
  },
  {
    tm: 6, topic: "Kondisi Keputusan", difficulty: "medium",
    q: "Ketika manajer memahami tujuan keputusan dengan jelas dan memiliki informasi probabilitas atas setiap kemungkinan hasil alternatif, kondisi keputusan tersebut berada dalam...",
    options: ["Kepastian (Certainty)", "Risiko (Risk)", "Ketidakpastian (Uncertainty)", "Ambiguitas (Ambiguity)"],
    answer: 1,
    explanation: "Kondisi Risiko (Risk) berarti sasaran jelas dan alternatif diketahui, tetapi hasil masa depan bergantung pada estimasi probabilitas statistik."
  },
  {
    tm: 6, topic: "Bias Kognitif Keputusan", difficulty: "advanced",
    q: "Manajer bersikeras mengucurkan dana tambahan sebesar Rp 10 miliar ke proyek perangkat lunak yang sudah terbukti gagal hanya karena perusahaan telah menghabiskan Rp 50 miliar sebelumnya. Bias ini disebut...",
    options: ["Sunk Cost Fallacy", "Confirmation Bias", "Anchoring Bias", "Overconfidence Bias"],
    answer: 0,
    explanation: "Sunk Cost Fallacy (eskalasi komitmen) adalah bias melanjutkan investasi yang merugi semata-mata karena enggan mengakui kerugian atas biaya historis yang sudah tertanam."
  },
  {
    tm: 6, topic: "Pengambilan Keputusan Kelompok", difficulty: "advanced",
    q: "Peran anggota tim yang ditugaskan secara resmi untuk menantang asumsi mayoritas, mengkritik rencana kerja, dan mencari celah kelemahan keputusan disebut...",
    options: ["Groupthink Enforcer", "Devil's Advocate", "Resource Allocator", "Figurehead"],
    answer: 1,
    explanation: "Devil's Advocate bertugas mengkritisi pemikiran kelompok untuk mencegah timbulnya kesepakatan semu (Groupthink) dan mendorong analisis kritis mendalam."
  },
  {
    tm: 6, topic: "Model Keputusan Politik", difficulty: "medium",
    q: "Model pengambilan keputusan Politik (Political Model) paling sering digunakan dalam organisasi ketika...",
    options: [
      "Sasaran organisasi disepakati bersama secara mutlak dan data serba lengkap",
      "Kondisi manajer memiliki kepentingan berbeda, sasaran tidak disepakati, dan terjadi tawar-menawar koalisi",
      "Keputusan diambil secara terkomputerisasi otomatis",
      "Tidak ada batasan anggaran sama sekali"
    ],
    answer: 1,
    explanation: "Model politik mencerminkan lingkungan nyata di mana para manajer membentuk koalisi aliansi untuk menegosiasikan keputusan saat terjadi pertentangan tujuan."
  },

  // --- TM 7: Struktur & Desain Organisasi (5 Soal) ---
  {
    tm: 7, topic: "Struktur Matriks", difficulty: "medium",
    q: "Karakteristik paling unik dari Struktur Organisasi Matriks (Matrix Structure) adalah...",
    options: [
      "Tidak adanya rantai komando sama sekali",
      "Karyawan bertanggung jawab kepada dua atasan sekaligus (Dual Authority)",
      "Setiap divisi berdiri sendiri tanpa koordinasi",
      "Rentang kendali tidak terbatas"
    ],
    answer: 1,
    explanation: "Struktur matriks menggabungkan rantai komando fungsional vertikal dan rantai komando proyek horizontal, sehingga karyawan melapor kepada dua manajer."
  },
  {
    tm: 7, topic: "Rentang Kendali (Span of Control)", difficulty: "medium",
    q: "Organisasi dengan struktur datar (Flat Structure) ditandai oleh...",
    options: [
      "Banyak tingkatan hierarki dan rentang kendali sempit",
      "Sedikit tingkatan hierarki dan rentang kendali lebar",
      "Pengawasan ketat berjenjang",
      "Sentralisasi wewenang mutlak di direktur utama"
    ],
    answer: 1,
    explanation: "Flat structure memiliki rentang kendali lebar (manajer membawahi banyak staf) sehingga lapisan manajemen lebih ramping dan komunikasi lebih cepat."
  },
  {
    tm: 7, topic: "Struktur Fungsional", difficulty: "basic",
    q: "Kelemahan terbesar yang sering muncul pada Struktur Organisasi Fungsional adalah...",
    options: [
      "Biaya operasional sangat mahal karena duplikasi departemen",
      "Terbentuknya sekat ego-sektoral ('silo mentality') dan koordinasi lintas fungsi yang buruk",
      "Karyawan kehilangan keahlian teknis spesialisasi",
      "Ketiadaan aturan kerja tertulis"
    ],
    answer: 1,
    explanation: "Dalam struktur fungsional, anggota departemen (misal bagian produksi) cenderung memprioritaskan sasaran divisinya sendiri daripada sasaran organisasi secara menyeluruh."
  },
  {
    tm: 7, topic: "Prinsip Kesatuan Komando", difficulty: "basic",
    q: "Prinsip klasik organisasi yang menyatakan bahwa seorang karyawan hanya boleh menerima perintah dari dan bertanggung jawab kepada satu atasan langsung disebut...",
    options: ["Unity of Command (Kesatuan Komando)", "Scalar Chain (Rantai Skalar)", "Division of Labor", "Span of Control"],
    answer: 0,
    explanation: "Unity of Command menegaskan bahwa setiap individu hanya bertanggung jawab kepada satu penyelia untuk mencegah kebingungan instruksi kerja."
  },
  {
    tm: 7, topic: "Desentralisasi Organisasi", difficulty: "medium",
    q: "Faktor manakah yang mendorong organisasi untuk menerapkan DESENTRALISASI wewenang yang lebih luas?",
    options: [
      "Organisasi menghadapi krisis kelangsungan hidup mendesak",
      "Lingkungan eksternal sangat dinamis, kompleks, dan menuntut respons cepat dari staf garda depan",
      "Keputusan bersifat rutin dan tidak memiliki konsekuensi biaya besar",
      "Bawahan belum memiliki kompetensi dan tidak ingin memikul tanggung jawab"
    ],
    answer: 1,
    explanation: "Desentralisasi memberikan keleluasaan bagi karyawan garis depan yang paling dekat dengan konsumen untuk segera bertindak merespons perubahan pasar."
  }
];

export const MNM101_SUPER_QUIZ_UAS = [
  // --- TM 8: Review Terpadu UTS (5 Soal) ---
  {
    tm: 8, topic: "Review Integratif UTS", difficulty: "advanced",
    q: "Jika perusahaan menerapkan strategi Diferensiasi (Porter) di lingkungan yang dinamis dan kompleks, desain struktur organisasi yang PALING sesuai adalah...",
    options: ["Struktur Mekanistik yang kaku dan sentralistis", "Struktur Organik (seperti Tim atau Matriks) yang desentralistis dan fleksibel", "Struktur Birokrasi Tradisional Max Weber", "Struktur Tall dengan rentang kendali sangat sempit"],
    answer: 1,
    explanation: "Strategi diferensiasi di lingkungan dinamis memerlukan kreativitas, inovasi, dan kerja tim lintas batas yang didukung oleh struktur organik yang desentralistis."
  },
  {
    tm: 8, topic: "Review Integratif UTS", difficulty: "medium",
    q: "Manajer yang menghadapi masalah baru di mana tidak ada prosedur standar tertulis yang dapat digunakan harus mengambil...",
    options: ["Keputusan Terprogram (Programmed Decision)", "Keputusan Tidak Terprogram (Non-programmed Decision)", "Keputusan Refleks Otomatis", "Standing Operating Procedure"],
    answer: 1,
    explanation: "Non-programmed decisions diambil untuk menanggapi situasi unik, rumit, tidak terstruktur, dan memiliki konsekuensi strategis besar."
  },
  {
    tm: 8, topic: "Review Integratif UTS", difficulty: "medium",
    q: "Pada siklus manajemen POAC, temuan deviasi bahwa realisasi penjualan berada di bawah target yang direncanakan akan ditindaklanjuti oleh fungsi...",
    options: ["Planning melalui penetapan ulang sasaran atau perbaikan strategi", "Controlling melalui tindakan koreksi langsung", "Organizing melalui perombakan struktur instan", "Pilihan A dan B keduanya benar"],
    answer: 3,
    explanation: "Controlling mengambil tindakan koreksi operasional, sementara Planning menggunakan data deviasi tersebut sebagai masukan untuk merevisi target atau strategi berikutnya."
  },
  {
    tm: 8, topic: "Review Integratif UTS", difficulty: "advanced",
    q: "Dalam tipologi budaya Daft, organisasi yang menuntut disiplin tinggi, efisiensi operasional, dan kepatuhan penuh terhadap manual regulasi (seperti bank komersial) mencerminkan...",
    options: ["Involvement Culture", "Consistency Culture", "Adaptability Culture", "Adhocracy Culture"],
    answer: 1,
    explanation: "Consistency culture mengarahkan fokus internal pada stabilitas, metodis, keteraturan proses, dan kepatuhan standar kerja."
  },
  {
    tm: 8, topic: "Review Integratif UTS", difficulty: "medium",
    q: "Berdasarkan matriks BCG, strategi yang paling tepat diterapkan untuk unit bisnis kategori 'Dogs' adalah...",
    options: ["Mengucurkan investasi modal besar untuk promosi", "Mempertahankan status quo tanpa evaluasi", "Pemanenan kas (harvesting) atau divestasi (dijual/dilikuidasi)", "Menjadikannya inti bisnis utama"],
    answer: 2,
    explanation: "Dogs memiliki pangsa pasar rendah di industri bertumbuh lambat; perusahaan sebaiknya melakukan likuidasi, menjual unit, atau memangkas biaya semaksimal mungkin."
  },

  // --- TM 9: Manajemen Perubahan & Inovasi (5 Soal) ---
  {
    tm: 9, topic: "Model Perubahan Kurt Lewin", difficulty: "medium",
    q: "Tahap awal dalam model perubahan Kurt Lewin di mana manajer membuat karyawan menyadari adanya urgensi perubahan dan perlunya meninggalkan cara kerja lama disebut...",
    options: ["Refreezing", "Changing", "Unfreezing (Pencairan)", "Restructuring"],
    answer: 2,
    explanation: "Unfreezing adalah proses mendobrak rasa puas diri (complacency) dan membangun kesadaran bersama bahwa status quo tidak lagi dapat dipertahankan."
  },
  {
    tm: 9, topic: "Taktik Mengatasi Resistensi", difficulty: "medium",
    q: "Taktik mengatasi resistensi perubahan yang paling tepat digunakan ketika penolakan karyawan dipicu oleh kurangnya pemahaman atau kesalahpahaman informasi adalah...",
    options: ["Koersi dan ancaman pemecatan", "Edukasi dan Komunikasi terbuka", "Manipulasi dan kooptasi", "Negosiasi kompensasi finansial"],
    answer: 1,
    explanation: "Edukasi dan komunikasi efektif menjernihkan kesalahpahaman serta membantu karyawan melihat logika dan manfaat positif dari perubahan yang direncanakan."
  },
  {
    tm: 9, topic: "Analisis Medan Kekuatan Lewin", difficulty: "advanced",
    q: "Menurut Force Field Analysis Kurt Lewin, perubahan yang sukses PALING EFEKTIF dicapai dengan cara...",
    options: [
      "Menambah kekuatan pendorong (driving forces) sekuat mungkin tanpa mempedulikan hambatan",
      "Mengurangi atau menghilangkan kekuatan penghambat (restraining forces) sembari menjaga kekuatan pendorong",
      "Mengabaikan kedua kekuatan dan membiarkan proses alami",
      "Merekrut seluruh konsultan eksternal baru"
    ],
    answer: 1,
    explanation: "Menambah driving forces sering kali hanya memicu perlawanan balik yang lebih keras. Mengurangi restraining forces meredakan ketakutan dan membuka jalan perubahan tanpa konflik destruktif."
  },
  {
    tm: 9, topic: "Pendekatan Inovasi Ambidextrous", difficulty: "advanced",
    q: "Pendekatan Ambidextrous dalam organisasi inovatif mengacu pada kemampuan korporasi untuk...",
    options: [
      "Merekrut karyawan yang memiliki keahlian tangan kanan dan kiri",
      "Menyeimbangkan antara mengeksplorasi ide terobosan baru dan mengeksploitasi efisiensi kapabilitas bisnis yang sudah ada",
      "Memecah seluruh divisi menjadi perusahaan terpisah",
      "Menghilangkan fungsi riset dan pengembangan"
    ],
    answer: 1,
    explanation: "Organisasi ambidextrous mampu menciptakan struktur organik yang bebas berkreasi untuk inovasi masa depan, sembari menjalankan struktur mekanistik yang ketat untuk mengoperasikan bisnis harian."
  },
  {
    tm: 9, topic: "Pengembangan Organisasi (OD)", difficulty: "basic",
    q: "Intervensi Pengembangan Organisasi (OD) yang mengumpulkan data dari karyawan melalui survei kuesioner lalu mendiskusikan hasilnya bersama tim kerja untuk menyusun rencana perbaikan disebut...",
    options: ["Survey Feedback", "Team Building", "Large-Group Intervention", "Direct Coercion"],
    answer: 0,
    explanation: "Survey Feedback adalah teknik intervensi OD di mana data sikap karyawan dikumpulkan dan diumpanbalikkan kepada anggota tim untuk memandu pemecahan masalah bersama."
  },

  // --- TM 10: Manajemen Sumber Daya Manusia (5 Soal) ---
  {
    tm: 10, topic: "Analisis Jabatan", difficulty: "medium",
    q: "Dokumen yang memuat rincian kualifikasi minimal pelamar kerja seperti tingkat pendidikan, sertifikasi profesional, dan pengalaman kerja 5 tahun disebut...",
    options: ["Job Description", "Job Specification", "Job Evaluation", "Performance Appraisal"],
    answer: 1,
    explanation: "Job Specification mendeskripsikan kualifikasi pengetahuan, keterampilan, dan karakteristik personal yang wajib dimiliki calon pemegang jabatan."
  },
  {
    tm: 10, topic: "Metode Penilaian Kinerja", difficulty: "medium",
    q: "Penilaian kinerja yang menghimpun evaluasi dari atasan langsung, rekan kerja sejawat, bawahan, serta penilaian mandiri (self-assessment) dikenal sebagai...",
    options: ["Graphic Rating Scale", "Behaviorally Anchored Rating Scale (BARS)", "360-Degree Feedback", "Ranking Method"],
    answer: 2,
    explanation: "360-degree feedback memberikan gambaran performa kerja yang komprehensif dan obyektif dari berbagai perspektif pemangku kepentingan interaksi kerja."
  },
  {
    tm: 10, topic: "Keragaman & Inklusi", difficulty: "medium",
    q: "Hambatan artifisial tak terlihat yang didasari oleh bias sikap atau stereotip organisasi yang menghalangi perempuan menduduki jabatan manajer puncak disebut...",
    options: ["Glass Ceiling", "Sticky Floor", "Tokenism", "Affirmative Action"],
    answer: 0,
    explanation: "Glass Ceiling merujuk pada batasan tak kasat mata yang mendiskriminasi perempuan dan minoritas untuk meraih posisi kepemimpinan eksekutif tertinggi."
  },
  {
    tm: 10, topic: "Kompensasi Karyawan", difficulty: "basic",
    q: "Proses sistematis untuk menentukan nilai relatif suatu pekerjaan di dalam organisasi guna memastikan keadilan internal gaji disebut...",
    options: ["Job Analysis", "Job Evaluation (Evaluasi Jabatan)", "Wage Survey", "Benchmarking"],
    answer: 1,
    explanation: "Job Evaluation mengevaluasi bobot tanggung jawab dan kompleksitas setiap posisi untuk menetapkan struktur skala upah yang adil di internal perusahaan."
  },
  {
    tm: 10, topic: "Alat Seleksi Karyawan", difficulty: "advanced",
    q: "Metode seleksi di mana pelamar disimulasikan menghadapi tugas manajerial nyata seperti latihan kotak surat masuk (in-basket exercise) dan permainan bisnis kelompok disebut...",
    options: ["Wawancara Terstruktur", "Assessment Center", "Tes Bakat Kognitif", "Pemeriksaan Latar Belakang"],
    answer: 1,
    explanation: "Assessment Center menggunakan serangkaian simulasi perilaku kerja riil untuk mengevaluasi potensi manajerial pelamar dengan validitas prediksi yang tinggi."
  },

  // --- TM 11: Kepemimpinan Organisasi (5 Soal) ---
  {
    tm: 11, topic: "Teori Kontinjensi Fiedler", difficulty: "advanced",
    q: "Menurut model kontinjensi Fred Fiedler, pemimpin yang berorientasi tugas (Task-Oriented) akan bekerja PALING EFEKTIF pada kondisi situasi kontrol yang...",
    options: [
      "Sangat menguntungkan (highly favorable) atau sangat tidak menguntungkan (highly unfavorable)",
      "Cukup menguntungkan (moderately favorable)",
      "Netral tanpa pengawasan",
      "Tidak bergantung pada situasi kontrol"
    ],
    answer: 0,
    explanation: "Fiedler membuktikan pemimpin berorientasi tugas unggul pada situasi ekstrem (sangat baik atau sangat buruk), sedangkan pemimpin berorientasi hubungan unggul pada situasi moderat."
  },
  {
    tm: 11, topic: "Situational Leadership Hersey-Blanchard", difficulty: "medium",
    q: "Jika seorang karyawan memiliki kemampuan teknis yang tinggi tetapi merasa tidak yakin atau kurang termotivasi untuk menjalankan tugas mandiri, gaya kepemimpinan yang tepat adalah...",
    options: ["Telling (Mengarahkan)", "Selling (Melatih)", "Participating (Mendukung)", "Delegating (Mendelegasikan)"],
    answer: 2,
    explanation: "Gaya Participating / Supporting cocok untuk bawahan dengan tingkat kesiapan R3 (mampu tetapi ragu/kurang percaya diri), di mana pemimpin berbagi keputusan dan memberi dorongan moral."
  },
  {
    tm: 11, topic: "Kepemimpinan Transformasional", difficulty: "medium",
    q: "Pemimpin yang mampu mengartikulasikan visi masa depan yang memikat, merangsang pemikiran kreatif bawahan, dan membangkitkan komitmen luar biasa melampaui kepentingan pribadi adalah...",
    options: ["Pemimpin Transaksional", "Pemimpin Transformasional", "Pemimpin Otokratis", "Pemimpin Laissez-faire"],
    answer: 1,
    explanation: "Kepemimpinan Transformasional menginspirasi pengikut untuk mencapai hasil luar biasa melalui karisma, stimulasi intelektual, dan pertimbangan individual."
  },
  {
    tm: 11, topic: "Sumber Kekuasaan French & Raven", difficulty: "basic",
    q: "Kekuasaan yang bersumber dari keahlian teknis khusus, pengetahuan istimewa, atau keterampilan mendalam yang diakui oleh orang lain disebut...",
    options: ["Legitimate Power", "Reward Power", "Coercive Power", "Expert Power"],
    answer: 3,
    explanation: "Expert Power adalah salah satu bentuk kekuasaan personal (soft power) yang berasal dari kompetensi dan kapabilitas unggul seseorang."
  },
  {
    tm: 11, topic: "Kisi-Kisi Manajerial Blake-Mouton", difficulty: "advanced",
    q: "Pada Managerial Grid Blake dan Mouton, gaya kepemimpinan 'Team Management' (posisi 9,9) ditandai oleh...",
    options: [
      "Perhatian tinggi terhadap produksi dan perhatian tinggi terhadap manusia",
      "Perhatian tinggi terhadap produksi tetapi mengabaikan manusia",
      "Perhatian tinggi terhadap manusia tetapi mengabaikan produksi",
      "Tingkat perhatian minimal terhadap kedua aspek"
    ],
    answer: 0,
    explanation: "Gaya 9,9 (Team Management) dianggap paling ideal karena mengintegrasikan dedikasi tinggi terhadap pencapaian target kerja dan komitmen mendalam terhadap kesejahteraan karyawan."
  },

  // --- TM 12: Motivasi Karyawan (5 Soal) ---
  {
    tm: 12, topic: "Teori Dua Faktor Herzberg", difficulty: "medium",
    q: "Menurut Frederick Herzberg, menaikkan gaji karyawan dan memperbaiki kondisi pendingin ruangan kantor akan...",
    options: [
      "Meningkatkan kepuasan dan motivasi kerja secara drastis",
      "Menghilangkan ketidakpuasan kerja, namun TIDAK secara otomatis memotivasi kerja",
      "Menurunkan produktivitas kerja",
      "Memenuhi kebutuhan aktualisasi diri"
    ],
    answer: 1,
    explanation: "Gaji dan kondisi fisik kerja adalah Hygiene Factors. Pemenuhannya hanya menetralkan rasa tidak puas, sedangkan motivasi sejati hanya dipicu oleh faktor Motivators (tanggung jawab, prestasi)."
  },
  {
    tm: 12, topic: "Teori Ekspektansi Vroom", difficulty: "advanced",
    q: "Karyawan merasa yakin bahwa jika ia bekerja lembur menyelesaikan proyek, kinerjanya akan dinilai sangat baik (E-ke-P tinggi). Namun ia pesimis bahwa kinerja baik tersebut akan diganjar bonus kenaikan gaji (P-ke-O rendah). Komponen yang lemah menurut Vroom adalah...",
    options: ["Expectancy", "Instrumentality", "Valence", "Equity"],
    answer: 1,
    explanation: "Instrumentality adalah keyakinan probabilitas bahwa pencapaian kinerja kerja yang sukses akan membuahkan hasil imbalan organisasi yang diharapkan."
  },
  {
    tm: 12, topic: "Job Characteristics Model", difficulty: "medium",
    q: "Pekerjaan seorang dokter bedah yang menyelamatkan nyawa pasien memiliki skor sangat tinggi pada dimensi inti pekerjaan...",
    options: ["Skill Variety", "Task Identity", "Task Significance", "Autonomy"],
    answer: 2,
    explanation: "Task Significance adalah sejauh mana pekerjaan tersebut memiliki dampak nyata dan bermakna bagi kehidupan atau kesejahteraan orang lain."
  },
  {
    tm: 12, topic: "Teori Keadilan Adams", difficulty: "medium",
    q: "Ketika karyawan merasa bahwa rasio antara pengorbanannya (waktu, tenaga) dan imbalannya (gaji) lebih rendah dibandingkan rekan kerjanya yang setara, karyawan tersebut akan cenderung...",
    options: [
      "Meningkatkan kualitas kerjanya secara sukarela",
      "Mengurangi usaha kerja atau meminta kenaikan imbalan untuk memulihkan keadilan",
      "Merasa sangat bersyukur dan loyal",
      "Mengabaikan perbedaan tersebut"
    ],
    answer: 1,
    explanation: "Ketidakadilan yang dirasakan (underreward inequity) memicu ketegangan psikologis yang mendorong individu mengurangi input usahanya atau menuntut kompensasi lebih."
  },
  {
    tm: 12, topic: "Teori Penguatan Skinner", difficulty: "basic",
    q: "Manajer menghentikan teguran harian kepada karyawan setelah karyawan tersebut mulai hadir tepat waktu setiap pagi. Teknik penguatan ini disebut...",
    options: ["Positive Reinforcement", "Avoidance Learning (Negative Reinforcement)", "Punishment", "Extinction"],
    answer: 1,
    explanation: "Negative reinforcement (avoidance learning) memperkuat perilaku yang diinginkan dengan cara meniadakan atau menghentikan stimulus yang tidak menyenangkan."
  },

  // --- TM 13: Komunikasi & Dinamika Tim (5 Soal) ---
  {
    tm: 13, topic: "Kekayaan Saluran Komunikasi", difficulty: "medium",
    q: "Ketika seorang manajer harus menyampaikan berita duka atau pemutusan hubungan kerja (PHK) yang sarat muatan emosional, saluran komunikasi yang PALING tepat digunakan adalah...",
    options: ["Surat Edaran Memo Tertulis", "Pesan Singkat WhatsApp", "Komunikasi Tatap Muka Langsung (Face-to-Face)", "Pengumuman di Papan Buletin"],
    answer: 2,
    explanation: "Face-to-face adalah saluran paling kaya (highest richness) karena memungkinkan transmisi isyarat visual non-verbal, nada suara personal, dan umpan balik empatik seketika."
  },
  {
    tm: 13, topic: "Tahap Perkembangan Tim Tuckman", difficulty: "medium",
    q: "Anggota tim proyek mulai berdebat sengit mengenai siapa yang berhak menjadi ketua dan bagaimana pembagian tugas kerja dilakukan. Tim ini sedang berada pada tahap...",
    options: ["Forming", "Storming", "Norming", "Performing"],
    answer: 1,
    explanation: "Tahap Storming ditandai oleh konflik intrapersonal, kompetisi peran, dan perebutan pengaruh kepemimpinan sebelum norma kebersamaan terbentuk."
  },
  {
    tm: 13, topic: "Manajemen Konflik Thomas-Kilmann", difficulty: "advanced",
    q: "Gaya penyelesaian konflik di mana kedua belah pihak bekerja sama secara terbuka untuk mencari solusi integratif yang memuaskan kepentingan kedua pihak sepenuhnya (Win-Win) adalah...",
    options: ["Avoiding", "Accommodating", "Collaborating", "Competing"],
    answer: 2,
    explanation: "Collaborating mencerminkan tingkat ketegasan (assertiveness) dan kerja sama (cooperativeness) yang sama-sama tinggi untuk mencapai integrasi tujuan bersama."
  },
  {
    tm: 13, topic: "Fenomena Social Loafing", difficulty: "basic",
    q: "Fenomena di mana anggota tim menurunkan kontribusi usahanya karena merasa kinerjanya tertutup oleh kerja kelompok disebut...",
    options: ["Group Polarization", "Social Loafing", "Free-Rider Syndromic", "Pilihan B dan C keduanya benar"],
    answer: 3,
    explanation: "Social loafing (atau free-rider effect) adalah kecenderungan kemalasan sosial individu saat berada dalam tim jika tidak ada akuntabilitas kinerja individu yang jelas."
  },
  {
    tm: 13, topic: "Komunikasi Organisasi", difficulty: "medium",
    q: "Arus komunikasi yang terjadi antara anggota dari departemen yang berbeda pada tingkat hierarki yang sama (misalnya manajer keuangan berdiskusi dengan manajer pemasaran) disebut...",
    options: ["Downward Communication", "Upward Communication", "Horizontal Communication", "Diagonal Command"],
    answer: 2,
    explanation: "Horizontal communication adalah pertukaran pesan secara lateral di antara rekan kerja pada level yang setara untuk memfasilitasi koordinasi lintas fungsi."
  },

  // --- TM 14: Pengendalian Organisasi & Review UAS (5 Soal) ---
  {
    tm: 14, topic: "Jenis Pengendalian Manajerial", difficulty: "medium",
    q: "Pemeriksaan ketat atas mutu bahan baku gandum di pintu gudang sebelum diproses ke lini penggilingan merupakan contoh dari...",
    options: ["Feedforward Control", "Concurrent Control", "Feedback Control", "Post-action Audit"],
    answer: 0,
    explanation: "Feedforward control (pengendalian awal/input) berfokus pada pencegahan timbulnya cacat produk sebelum proses transformasi operasional dimulai."
  },
  {
    tm: 14, topic: "Balanced Scorecard", difficulty: "advanced",
    q: "Pelatihan peningkatan kompetensi literasi digital karyawan dan perbaikan budaya kerja pada Balanced Scorecard dicatat dalam perspektif...",
    options: ["Perspektif Finansial", "Perspektif Pelanggan", "Perspektif Proses Bisnis Internal", "Perspektif Pembelajaran dan Pertumbuhan (Learning & Growth)"],
    answer: 3,
    explanation: "Perspektif Pembelajaran dan Pertumbuhan berfokus pada modal manusia, budaya organisasi, dan infrastruktur sistem informasi yang menjadi pondasi kesuksesan jangka panjang."
  },
  {
    tm: 14, topic: "Total Quality Management (TQM)", difficulty: "medium",
    q: "Filosofi perbaikan berkesinambungan dan bertahap secara terus-menerus yang melibatkan setiap orang dalam organisasi disebut...",
    options: ["Kaizen", "Benchmarking", "Six Sigma Black Belt", "Outsourcing"],
    answer: 0,
    explanation: "Kaizen adalah istilah Jepang untuk perbaikan terus-menerus (continuous improvement) yang menjadi pilar fundamental Total Quality Management (TQM)."
  },
  {
    tm: 14, topic: "Proses Pengendalian", difficulty: "basic",
    q: "Langkah pertama yang mutlak harus dilakukan dalam siklus pengendalian manajerial adalah...",
    options: ["Mengukur kinerja aktual karyawan", "Menetapkan standar kinerja strategis", "Membandingkan hasil dengan target", "Mengambil tindakan disiplin"],
    answer: 1,
    explanation: "Tanpa penetapan standar kinerja (standards of performance) terlebih dahulu, manajer tidak memiliki tolok ukur acuan untuk menilai kinerja aktual."
  },
  {
    tm: 14, topic: "Sintesis Pengendalian Strategis", difficulty: "advanced",
    q: "Bahaya utama dari sistem pengendalian organisasi yang terlalu kaku dan berorientasi sempit pada angka metrik jangka pendek adalah...",
    options: [
      "Biaya audit menjadi nol",
      "Karyawan memanipulasi data untuk memenuhi target kuantitatif dan mematikan inovasi kreatif",
      "Terjadinya desentralisasi total tanpa arahan",
      "Meningkatnya kepuasan kerja karyawan secara drastis"
    ],
    answer: 1,
    explanation: "Pengendalian yang terlalu birokratis dan menuntut kepatuhan kaku sering memicu perilaku disfungsional (gaming the system) dan menghambat fleksibilitas inovasi."
  }
];
