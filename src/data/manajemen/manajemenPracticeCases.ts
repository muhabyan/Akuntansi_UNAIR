// src/data/manajemen/manajemenPracticeCases.ts
// 14 Studi Kasus Riil Komprehensif Pengantar Manajemen (MNM101)
// Berdasarkan Standar Richard L. Daft (Management 13e/14e) & Stephen P. Robbins
import type { ContentBlock } from '../../types';

// TM 1
export const CASE_POAC_MANAGERIAL_ROLES: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Transformasi Fungsi POAC & 10 Peran Mintzberg di PT GoTo Gojek Tokopedia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Pasca merger Gojek dan Tokopedia membentuk grup GoTo, manajemen puncak menghadapi tekanan untuk mencapai profitabilitas (EBITDA positif). CEO baru harus menjalankan restrukturisasi operasional, menyelaraskan sasaran strategis dua entitas besar (Planning), menata ulang divisi logistik dan fintech (Organizing), menginspirasi ribuan talenta digital yang cemas akan PHK (Leading/Actuating), serta memantau Key Performance Indicators mingguan (Controlling).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Bagaimana integrasi 4 fungsi manajemen POAC diterapkan dalam restrukturisasi GoTo?, (2) Identifikasi 3 kategori peran manajerial Mintzberg yang paling dominan dijalankan CEO saat restrukturisasi, dan (3) Mengapa keahlian konseptual (Conceptual Skills) menjadi keterampilan paling vital bagi manajemen puncak (Top Management) dibandingkan keahlian teknis?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Integrasi 4 Fungsi Manajemen POAC**:\n- *Planning*: Menetapkan target baru mencapai EBITDA disesuaikan positif dan memilih fokus pada unit bisnis inti (on-demand services & e-commerce).\n- *Organizing*: Melakukan konsolidasi divisi teknologi informasi dan menyatukan tim pemasaran untuk mengeliminasi duplikasi peran.\n- *Leading*: Mengkomunikasikan visi keberlanjutan baru secara transparan melalui Town Hall meeting untuk meredakan kepanikan karyawan.\n- *Controlling*: Menerapkan dashboard analitik real-time guna memantau burn-rate kas dan produktivitas per karyawan.',
            '**2. Tiga Kategori Peran Manajerial Mintzberg**:\n- *Decisional Roles (Terutama Resource Allocator & Disturbance Handler)*: Mengalokasikan kembali anggaran modal ke divisi yang menghasilkan laba dan menangani krisis moral pasca perampingan.\n- *Interpersonal Roles (Leader)*: Membangun motivasi dan komitmen tim dalam iklim ketidakpastian.\n- *Informational Roles (Spokesperson)*: Menyampaikan prospek keuangan kepada investor publik dan regulator bursa.',
            '**3. Keunggulan Keahlian Konseptual bagi Top Management**: Menurut Robert L. Katz, manajer puncak beroperasi pada level strategis makro. Keahlian konseptual memungkinkan eksekutif melihat organisasi secara holistik, memahami interaksi antar-divisi, serta memprediksi dampak perubahan industri teknologi dan lanskap makroekonomi terhadap kelangsungan hidup korporasi.'
          ]
        }
      ]
    }
  ]
};

// TM 2
export const CASE_CULTURE_ENVIRONMENT_DAFT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Analisis Lingkungan Eksternal (PESTEL) & Tipologi Budaya Organisasi Daft di BCA',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Bank Central Asia (BCA) menghadapi guncangan disrupsi bank digital dan fintech peer-to-peer lending (Lingkungan Tugas) serta regulasi perlindungan data pribadi dan suku bunga acuan Bank Indonesia (Lingkungan Umum). Di sisi internal, BCA dikenal memiliki budaya disiplin operasional dan kehati-hatian risiko (Prudential Banking) yang sangat kuat, namun dituntut bergerak lincah dan berinovasi cepat meluncurkan aplikasi mobile baru.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Petakan faktor-faktor Lingkungan Umum (General Environment) vs Lingkungan Tugas (Task Environment) yang dihadapi BCA, (2) Berdasarkan Tipologi 4 Budaya Organisasi Daft (Adaptability, Achievement, Involvement, Consistency), tentukan orientasi budaya BCA saat ini dan pergeseran yang dibutuhkan, serta (3) Bagaimana manajemen menanamkan nilai budaya inovasi tanpa merusak kepatuhan regulasi perbankan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Lingkungan Umum vs Tugas**:\n- *Lingkungan Umum*: Faktor Teknologi (pesatnya AI dan open banking API), Faktor Hukum/Politik (UU Perlindungan Data Pribadi dan POJK Keamanan Siber), Faktor Ekonomi (inflasi dan fluktuasi BI-Rate).\n- *Lingkungan Tugas*: Pesaing (Bank Mandiri, Bank Jago, SeaBank), Konsumen (nasabah Gen Z yang menuntut pengalaman digital instan), dan Regulator (OJK & Bank Indonesia).',
            '**2. Tipologi Budaya Organisasi Daft**:\n- *Budaya Saat Ini*: **Consistency Culture** (Fokus internal, lingkungan stabil) yang menekankan metodis, kepatuhan prosedur baku (SOP), kontrol risiko ketat, dan keandalan sistem transaksi.\n- *Pergeseran yang Dibutuhkan*: Bergerak ke arah **Adaptability Culture** (Fokus eksternal, fleksibilitas tinggi) atau **Achievement Culture** untuk memfasilitasi eksperimen produk digital baru tanpa menghilangkan prinsip kehati-hatian.',
            '**3. Pembentukan Ambidextrous Culture**: Manajemen dapat menerapkan unit inovasi digital terpisah (Agile Squad / BCA Digital) yang mengadopsi budaya kerja lincah dan berani mengambil risiko terkendali, sementara operasional bank inti tetap mempertahankan Consistency Culture untuk menjaga kepercayaan nasabah.'
          ]
        }
      ]
    }
  ]
};

// TM 3
export const CASE_GLOBAL_HOFSTEDE_ENTRY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Strategi Pasar Global & Dimensi Budaya Hofstede PT Indofood CBP di Nigeria',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Indofood CBP Sukses Makmur berhasil menjadikan produk Indomie sebagai makanan pokok di Nigeria melalui anak perusahaan patungan Dufil Prima Foods. Namun, dalam mengelola ribuan tenaga kerja lokal dan rantai distribusi di Afrika Barat, para ekspatriat Indonesia menghadapi perbedaan norma budaya kerja, relasi hirarki, dan gaya komunikasi yang berbeda dari masyarakat Asia.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Tentukan strategi masuk pasar global yang diterapkan Indofood (Ekspor, Lisensi, Joint Venture, atau Greenfield) beserta alasannya, (2) Gunakan Dimensi Budaya Geert Hofstede (Power Distance, Individualism, Uncertainty Avoidance) untuk membandingkan karakteristik budaya kerja, dan (3) Rumuskan strategi kepemimpinan lintas budaya (Cross-Cultural Leadership) yang efektif!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Strategi Masuk Pasar Global**: Indofood menerapkan strategi **Joint Venture / Direct Investment (Greenfield)** dengan mendirikan pabrik manufaktur lokal bersama mitra lokal (Tolaram Group). Hal ini memangkas biaya logistik lintas benua, menghindari tarif impor tinggi, dan memastikan ketersediaan bahan baku gandum lokal.',
            '**2. Analisis Dimensi Budaya Hofstede**:\n- *Power Distance*: Baik Indonesia maupun Nigeria memiliki skor Power Distance tinggi; bawahan menghormati otoritas pemimpin dan hierarki formal, sehingga arahan yang jelas dari atasan sangat dihargai.\n- *Individualism vs Collectivism*: Kedua negara bersifat kolektivis; loyalitas kelompok, hubungan interpersonal yang hangat, dan kerja tim lebih diutamakan daripada pencapaian individu egois.\n- *Uncertainty Avoidance*: Masyarakat lokal cenderung adaptif dan fleksibel terhadap situasi informal, berbeda dengan SOP manufaktur Jepang/Barat yang sangat kaku.',
            '**3. Kepemimpinan Lintas Budaya**: Manajemen ekspatriat harus mengadopsi gaya kepemimpinan paternalistik yang mengayomi, mengintegrasikan kearifan lokal dalam komunikasi tim, memberdayakan manajer lokal Nigeria di level pengawasan garis depan, serta menunjukkan rasa hormat terhadap nilai-nilai keagamaan dan komunitas setempat.'
          ]
        }
      ]
    }
  ]
};

// TM 4
export const CASE_ETHICAL_DECISION_CSR: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Dilema Etika Keputusan Manajerial & Kerangka ESG di PT Vale Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Manajemen operasi tambang nikel PT Vale Indonesia menghadapi dilema etika bisnis: pemasangan teknologi penyaring emisi cerobong peleburan (smelter) baru berstandar nol-karbon membutuhkan belanja modal ratusan miliar rupiah yang akan memangkas dividen kuartalan investor. Namun, tanpa teknologi ini, masyarakat lingkar tambang berisiko terpapar polusi debu silika jangka panjang.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Evaluasi dilema tersebut menggunakan: (1) 4 Pendekatan Etika Manajerial (Utilitarian, Individualism, Moral-Rights, Justice Approach), (2) Piramida Tanggung Jawab Sosial Archie Carroll, dan (3) Dampak kepatuhan Environmental, Social, and Governance (ESG) terhadap valuasi saham perusahaan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Evaluasi 4 Pendekatan Etika**:\n- *Utilitarian Approach*: Menghasilkan kebaikan terbesar bagi jumlah orang terbanyak; memasang penyaring melindungi kesehatan ribuan warga dan keberlanjutan bumi, mengungguli kepentingan segelintir pemegang saham yang hanya menginginkan dividen jangka pendek.\n- *Moral-Rights Approach*: Setiap manusia memiliki hak asasi dasar untuk hidup sehat dan menghirup udara bersih yang tidak boleh dilanggar demi keuntungan korporasi.\n- *Justice Approach (Distributive Justice)*: Tidak adil jika beban dampak polusi ditanggung oleh masyarakat lokal, sementara seluruh keuntungan dinikmati oleh pemegang saham di kota besar.\n- *Individualism Approach*: Menjaga reputasi perusahaan demi kelangsungan izin tambang jangka panjang (Social License to Operate).',
            '**2. Piramida CSR Carroll**: Keputusan ini melampaui tanggung jawab ekonomi (laba) dan hukum (kepatuhan standar minimum), melainkan menyentuh **Tanggung Jawab Etis (Ethical Responsibility)** dan **Filantropis (Philanthropic Responsibility)** untuk berbuat benar dan adil bagi ekosistem.',
            '**3. Manfaat Finansial ESG**: Investor institusional global (seperti BlackRock) saat ini hanya mengalirkan modal ke emiten dengan skor ESG tinggi. Komitmen nol-karbon justru menurunkan biaya modal (Cost of Capital) perusahaan dan mendongkrak valuasi saham jangka panjang.'
          ]
        }
      ]
    }
  ]
};

// TM 5
export const CASE_STRATEGIC_PLANNING_PORTER: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Analisis Matriks BCG & Strategi Keunggulan Bersaing Porter di PT Astra International',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Astra International Tbk mengelola portofolio konglomerasi multi-sektor:\n1. Bisnis Otomotif Roda Dua (Honda): Pangsa pasar sangat dominan (> 75%) di industri yang pasarnya telah matang dan bertumbuh lambat.\n2. Bisnis Kendaraan Listrik (EV Ecosystem): Pangsa pasar masih berkembang di industri yang sedang bertumbuh pesat (> 50% per tahun).\n3. Bisnis Pertambangan Batu Bara (PAMA): Menghasilkan arus kas likuid sangat besar di tengah tren transisi energi hijau dunia.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Petakan unit-unit bisnis tersebut ke dalam Matriks Portofolio BCG (Cash Cow, Star, Question Mark, Dog), (2) Rumuskan alokasi arus kas strategis antar-unit bisnis, dan (3) Tentukan Strategi Bersaing Generik Porter (Cost Leadership, Differentiation, Focus) yang diterapkan pada masing-masing lini!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Pemetaan Matriks BCG (Boston Consulting Group)**:\n- *Bisnis Otomotif Roda Dua (Honda)*: **Cash Cow (Sapi Perah)**. Pangsa pasar relatif tinggi di pasar pertumbuhan rendah; menghasilkan arus kas melimpah dengan kebutuhan investasi baru minimal.\n- *Bisnis Kendaraan Listrik (EV)*: **Star (Bintang) atau Question Mark**. Berada di pasar pertumbuhan tinggi; membutuhkan suntikan investasi modal masif untuk merebut kepemimpinan pasar infrastruktur baterai.\n- *Bisnis Alat Berat/Batu Bara (PAMA)*: **Cash Cow**. Arus kas tinggi yang harus dimanfaatkan sebelum transisi energi global menurunkannya menjadi Dog.',
            '**2. Alokasi Arus Kas Strategis**: Arus kas surplus yang diperah dari Cash Cow (Honda dan PAMA) dialirkan untuk mendanai investasi R&D, pembangunan stasiun pengisian daya (SPKLU), dan perakitan ekosistem kendaraan listrik (Star/Question Mark) agar Astra tetap relevan di masa depan.',
            '**3. Strategi Generik Porter**:\n- *Honda*: **Cost Leadership & Differentiation terintegrasi** (skala ekonomis raksasa dengan jaringan bengkel resmi AHASS di seluruh pelosok Indonesia).\n- *Kendaraan Listrik Premium*: **Differentiation Strategy** yang mengedepankan keandalan teknologi baterai, fitur pintar, dan layanan purnajual prima.'
          ]
        }
      ]
    }
  ]
};

// TM 6
export const CASE_DECISION_MAKING_BIAS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Bounded Rationality & Bias Kognitif Keputusan Manajemen di Garuda Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Di masa lalu, manajemen maskapai nasional Garuda Indonesia memutuskan untuk terus menyewa armada pesawat berbadan lebar jenis tertentu meskipun utilisasi rute internasionalnya sangat rendah dan merugi ratusan miliar rupiah per tahun. Direksi saat itu merasa bahwa pembatalan sewa akan mengakibatkan hilangnya uang muka yang sudah disetor ratusan juta dolar dan merusak gengsi maskapai bendera nasional.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Jelaskan konsep Rasionalitas Terbatas (Bounded Rationality) dan Satisficing menurut Herbert Simon, (2) Identifikasi bias kognitif yang menjebak manajemen (Sunk-Cost Fallacy, Escalation of Commitment, Confirmation Bias), dan (3) Bagaimana teknik Devils Advocacy dapat mencegah jebakan keputusan serupa?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Bounded Rationality & Satisficing (Herbert Simon)**: Manajer tidak memiliki informasi sempurna, waktu tak terbatas, atau kapasitas kognitif super untuk memproses seluruh alternatif (berbeda dari Model Keputusan Klasik/Rasional murni). Akibatnya, manajer mengambil keputusan yang *Satisficing* (cukup memuaskan dan memenuhi batas minimal), bukan alternatif yang benar-benar optimal secara matematis.',
            '**2. Identifikasi Bias Kognitif**:\n- *Sunk-Cost Fallacy & Escalation of Commitment*: Keengganan menghentikan proyek rugi karena merasa telah menginvestasikan terlalu banyak uang, waktu, dan reputasi di masa lalu, sehingga terus mengalirkan uang kas baru untuk menutupi kesalahan lama.\n- *Overconfidence & Status Quo Bias*: Terlalu percaya diri bahwa rute internasional akan segera ramai tanpa didukung data riset pasar objektif.',
            '**3. Teknik Devils Advocacy**: Manajemen wajib menunjuk satu orang atau tim independen yang bertugas resmi sebagai Pengkritik Utama (Devils Advocate) untuk menantang setiap asumsi optimis, membeberkan skenario terburuk, dan membuktikan mengapa keputusan sewa armada pesawat tersebut berisiko menghancurkan likuiditas maskapai.'
          ]
        }
      ]
    }
  ]
};

// TM 7
export const CASE_ORG_STRUCTURE_ADAPTIVE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Redesain Struktur Organisasi Fungsional ke Matriks Divisional di PT Unilever Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Unilever Indonesia memproduksi ratusan produk yang terbagi dalam kategori Personal Care, Home Care, dan Foods & Refreshment. Ketika masih menggunakan Struktur Fungsional murni, terjadi koordinasi yang lambat (Silo Effect): manajer divisi pemasaran, keuangan, dan R&D bertengkar mengenai alokasi prioritas produk, sehingga peluncuran sampo baru tertunda hingga kompetitor lokal merebut pangsa pasar.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Jelaskan kelemahan struktur fungsional murni (Silo Mentality), (2) Bandingkan kelebihan dan risiko Struktur Divisional vs Struktur Matriks (Dual-Command Chain), dan (3) Tentukan rentang kendali (Span of Control) yang ideal bagi manajer produk di era digital!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kelemahan Struktur Fungsional Murni**: Karyawan terkotak-kotak dalam fungsi spesialisasi (Pemasaran, Produksi, Keuangan). Muncul ego sektoral (Silo Mentality) di mana manajer fungsional lebih memedulikan target departemennya sendiri daripada kesuksesan produk di mata konsumen, menyebabkan respon pasar menjadi sangat lambat.',
            '**2. Struktur Divisional vs Struktur Matriks**:\n- *Struktur Divisional (Product-Based)*: Membagi perusahaan berdasarkan lini produk mandiri (Divisi Personal Care, Divisi Home Care) yang memiliki tim pemasaran dan litbang sendiri. Respon cepat terhadap kebutuhan konsumen, tetapi memicu duplikasi biaya staf antar-divisi.\n- *Struktur Matriks (Matrix Structure)*: Menggabungkan keahlian fungsional dengan fokus produk melalui sistem komando ganda (Dual Authority). Karyawan bertanggung jawab kepada Manajer Fungsional dan Manajer Produk sekaligus. Fleksibel dan optimal memanfaatkan SDM, namun rawan konflik perebutan wewenang dan stres peran ganda.',
            '**3. Rentang Kendali (Span of Control)**: Di era digital dengan otomatisasi data dan tim kerja yang terampil (Self-Directed Teams), rentang kendali dapat dirancang lebih melebar (Flat Organization) dengan 1 manajer membawahi 10-15 orang staf, meningkatkan otonomi dan kecepatan eksekusi inovasi.'
          ]
        }
      ]
    }
  ]
};

// TM 8
export const CASE_UTS_MANAJEMEN_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Integrasi Fungsi POAC, Analisis SWOT, & Struktur Organisasi Pra-UTS',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Peserta ujian menghadapi soal kasus terpadu: Perusahaan retail konvensional PT Ritel Megah mengalami penurunan laba 40% akibat persaingan e-commerce dan maraknya live-shopping media sosial. Direktur baru ingin menyusun rencana strategis MBO, merumuskan matriks SWOT, dan mendesain ulang rentang kendali organisasi agar lebih responsif terhadap pelanggan.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun: (1) Matriks SWOT 4 kuadran (SO, WO, ST, WT), (2) 4 Langkah Siklus Management by Objectives (MBO), dan (3) Identifikasi 3 faktor kontinjensi yang menentukan pilihan struktur organisasi mekanistik vs organik!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Matriks SWOT PT Ritel Megah**:\n- *Strengths (Kekuatan)*: Jaringan toko fisik luas di lokasi premium dan merek yang terpercaya.\n- *Weaknesses (Kelemahan)*: Biaya sewa gerai tinggi dan sistem IT logistik yang tertinggal.\n- *Opportunities (Peluang)*: Pasar online shopping yang tumbuh eksponensial dan integrasi omnichannel (Click-and-Collect).\n- *Threats (Ancaman)*: Perang harga diskon e-commerce dan pergeseran perilaku belanja generasi muda.\n- *Strategi WO*: Mengembangkan platform digital e-commerce sendiri menggunakan mitra logistik pihak ketiga.',
            '**2. Empat Langkah Siklus MBO (Peter Drucker)**:\n1. Menetapkan sasaran organisasi secara berjenjang dari pucuk pimpinan hingga level staf.\n2. Merumuskan rencana tindakan (Action Plans) bersama antara atasan dan bawahan.\n3. Meninjau kemajuan berkala (Periodic Progress Review) secara objektif.\n4. Menilai kinerja akhir dan memberikan penghargaan (Appraisal and Rewards).',
            '**3. Faktor Kontinjensi Pilihan Struktur Organisasi**:\n- *Ketidakpastian Lingkungan*: Lingkungan yang dinamis dan bergejolak menuntut struktur **Organik** (desentralisasi, aturan fleksibel, tim lintas fungsi).\n- *Teknologi Produksi*: Produksi pesanan khusus (unit/small-batch) membutuhkan struktur organik, sedangkan produksi massal rutin cocok dengan struktur mekanistik kaku.\n- *Strategi Perusahaan*: Strategi inovasi diferensiasi memerlukan fleksibilitas organik, sedangkan strategi keunggulan biaya (cost leadership) menuntut efisiensi mekanistik.'
          ]
        }
      ]
    }
  ]
};

// TM 9
export const CASE_INNOVATION_CHANGE_LEWIN: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Model 3 Tahap Perubahan Kurt Lewin & Ambidextrous Organization di PT Pos Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Pos Indonesia bertransformasi dari perusahaan pengantar surat tradisional yang merugi menjadi penyedia jasa logistik kurir digital dan layanan jasa keuangan modern (PosPay). Namun, inisiatif digitalisasi sempat ditolak oleh serikat pekerja pos senior yang khawatir akan kehilangan pekerjaan dan enggan mempelajari aplikasi smartphone baru (Resistensi Perubahan).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Terapkan Model 3 Tahap Perubahan Kurt Lewin (Unfreezing, Changing, Refreezing) dalam transformasi PT Pos Indonesia, (2) Evaluasi 5 taktik mengatasi resistensi perubahan menurut Richard L. Daft, dan (3) Jelaskan konsep Ambidextrous Organization dalam menyeimbangkan eksploitasi bisnis lama vs eksplorasi bisnis baru!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Model Tiga Tahap Perubahan Kurt Lewin**:\n- *Tahap 1: Unfreezing (Mencairkan)*: Manajemen menciptakan rasa urgensi (Sense of Urgency) dengan memaparkan data kerugian riil jika tidak berubah, serta menyadarkan karyawan bahwa bisnis surat fisik sudah punah.\n- *Tahap 2: Changing / Moving (Mengubah)*: Mengimplementasikan sistem operasional baru (aplikasi PosPay & PosAja), melatih keterampilan digital karyawan, dan mengubah alur proses sortir paket otomatis.\n- *Tahap 3: Refreezing (Membekukan Kembali)*: Mengunci perubahan menjadi budaya baru melalui KPI berbasis performa digital, insentif bonus bagi staf yang mencapai target digital, dan pembaharuan SOP resmi.',
            '**2. Lima Taktik Mengatasi Resistensi Perubahan**:\n- *Komunikasi & Edukasi*: Menjelaskan alasan logis di balik transformasi.\n- *Partisipasi & Keterlibatan*: Melibatkan perwakilan serikat pekerja dalam perancangan antarmuka aplikasi kerja baru.\n- *Fasilitasi & Dukungan*: Memberikan pelatihan komputer sabar tanpa ancaman PHK.\n- *Negosiasi & Kesepakatan*: Memberikan paket insentif khusus bagi pegawai yang bersedia beralih peran.\n- *Koersi Eksplisit/Implisit (Opsi Terakhir)*: Memberikan peringatan tegas jika ada pihak yang sengaja menyabotase sistem baru.',
            '**3. Ambidextrous Organization**: Kemampuan perusahaan untuk bersikap luwes: tetap mengeksploitasi efisiensi pada layanan pos reguler yang sudah mapan (*exploitation*) sambil secara agresif mengeksplorasi inovasi digital dan fintech baru (*exploration*) melalui tim inkubator terpisah.'
          ]
        }
      ]
    }
  ]
};

// TM 10
export const CASE_HR_TALENT_DIVERSITY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Manajemen Bakat Human Capital, Penilaian 360-Derajat, & Kebijakan DE&I di Shopee',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Perusahaan e-commerce Shopee Indonesia mempekerjakan ribuan talenta muda lintas generasi (Gen Z dan Milenial) dari berbagai latar belakang etnis, budaya, dan disabilitas. Bagian HRD merancang sistem Manajemen SDM strategis: mulai dari Talent Acquisition berbasis AI, program retensi kompensasi kompetitif, evaluasi kinerja multi-sumber (360-Degree Feedback), hingga kebijakan Diversity, Equity, and Inclusion (DE&I).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Apa keunggulan dan kelemahan Penilaian Kinerja 360-Derajat dibandingkan penilaian atasan tunggal?, (2) Identifikasi bias persepsi yang sering mengaburkan penilaian kinerja (Halo Effect, Leniency Error, Recency Bias), dan (3) Bagaimana keberagaman tenaga kerja (Workforce Diversity) memberikan keunggulan kompetitif bagi inovasi produk?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Evaluasi 360-Degree Performance Feedback**:\n- *Keunggulan*: Penilaian komprehensif dari atasan, rekan sejawat (peers), bawahan langsung, dan diri sendiri, meminimalisir bias subjektivitas manajer tunggal serta memberikan gambaran kepemimpinan yang utuh.\n- *Kelemahan*: Menimbulkan kecemasan politik kantor, potensi kolusi saling memuji antar-teman, dan pemborosan waktu jika instrumen survei terlalu rumit.',
            '**2. Bias Kognitif dalam Penilaian Kinerja**:\n- *Halo / Horn Effect*: Memberikan penilaian tinggi (atau rendah) di semua kriteria hanya karena satu karakteristik menonjol (contoh: pegawai sangat ramah lalu dinilai pintar di semua aspek teknis).\n- *Leniency Error (Kebaikan Berlebih)*: Atasan memberi nilai tinggi kepada semua anak buah untuk menghindari konflik.\n- *Recency Bias*: Hanya mengingat performa pegawai 2 minggu terakhir menjelang evaluasi dan melupakan kinerja buruk di 11 bulan sebelumnya.',
            '**3. Keunggulan Kompetitif Keberagaman (DE&I)**: Tim kerja yang heterogen menghasilkan perspektif ide yang lebih kaya, memahami profil konsumen Indonesia yang majemuk dari Sabang sampai Merauke, serta lebih efektif dalam memecahkan masalah kompleks dibanding tim yang seragam.'
          ]
        }
      ]
    }
  ]
};

// TM 11
export const CASE_INDIVIDUAL_BEHAVIOR_EQ: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Kepribadian Big Five, Teori Atribusi, & Kecerdasan Emosional (EQ) di Ruangguru',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Di perusahaan EdTech Ruangguru, dua orang manajer proyek memiliki gaya kerja yang bertolak belakang. Manajer A memiliki tingkat Conscientiousness dan Neuroticism sangat tinggi, mudah panik saat target meleset, dan menyalahkan faktor kemalasan tim (Internal Attribution). Manajer B memiliki Agreeableness dan Emotional Intelligence (EQ) tinggi, mampu mengendalikan stres kerja, dan mendengarkan keluhan bawahan dengan empati mendalam.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Uraikan Model Kepribadian Big Five (OCEAN) pada kedua manajer tersebut, (2) Jelaskan Teori Atribusi (Internal vs External Attribution) dan fenomena Fundamental Attribution Error, serta (3) Jelaskan 4 dimensi Kecerdasan Emosional Daniel Goleman yang esensial bagi pemimpin!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dimensi Kepribadian Big Five (OCEAN)**:\n- *Openness to Experience*: Keterbukaan terhadap ide baru dan rasa ingin tahu intelektual.\n- *Conscientiousness*: Kehati-hatian, kedisiplinan, keteraturan, dan fokus pencapaian target (Tinggi pada Manajer A).\n- *Extraversion*: Kesenangan bersosialisasi dan ketegasan interpersonal.\n- *Agreeableness*: Keramahan, kepercayaan, kerja sama, dan empati (Tinggi pada Manajer B).\n- *Emotional Stability (Neuroticism)*: Kestabilan emosi; Manajer A memiliki neuroticism tinggi (mudah cemas), sedangkan Manajer B memiliki kestabilan emosi matang.',
            '**2. Teori Atribusi & Fundamental Attribution Error**: Kecenderungan seseorang untuk menilai perilaku orang lain dengan **melebih-lebihkan faktor internal** (karakter malas, tidak kompeten) dan **meremehkan faktor eksternal** (gangguan server, instruksi kabur). Manajer A terjebak bias ini saat menyalahkan anak buahnya tanpa memeriksa hambatan sistem yang dialami tim.',
            '**3. Empat Dimensi Kecerdasan Emosional (EQ Daniel Goleman)**:\n- *Self-Awareness (Kesadaran Diri)*: Mengenali emosi diri sendiri dan dampaknya terhadap orang lain.\n- *Self-Management (Pengelolaan Diri)*: Mengendalikan impuls emosi negatif dan tetap tenang di bawah tekanan.\n- *Social Awareness / Empathy (Kesadaran Sosial)*: Memahami perasaan dan sudut pandang orang lain.\n- *Relationship Management (Manajemen Relasi)*: Kemampuan berkomunikasi jelas, mempengaruhi, dan menyelesaikan konflik secara konstruktif.'
          ]
        }
      ]
    }
  ]
};

// TM 12
export const CASE_LEADERSHIP_TRANSFORMATIONAL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Kepemimpinan Transformasional vs Situasional Hersey-Blanchard di Bank Mandiri',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Direktur Utama Bank Mandiri memimpin transformasi digital Livin by Mandiri. Di satu sisi, ia menyulut visi perubahan besar-besaran yang menginspirasi seluruh jajaran (Transformational Leadership). Di sisi lain, para pimpinan cabang harus mengelola staf teller baru yang belum berpengalaman (butuh arahan instruktif) serta staf senior yang kompeten namun demotivasi (butuh pendekatan partisipatif).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Bandingkan 4 pilar Kepemimpinan Transformasional (4I) vs Kepemimpinan Transaksional, (2) Terapkan Model Kepemimpinan Situasional Hersey-Blanchard (Telling, Selling, Participating, Delegating) sesuai tingkat kesiapan pengikut (Follower Readiness R1-R4), dan (3) Apa itu Servant Leadership?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Empat Pilar Kepemimpinan Transformasional (The 4 Is)**:\n- *Idealized Influence (Karisma)*: Menjadi panutan teladan moral dan integritas bagi pengikut.\n- *Inspirational Motivation*: Mengkomunikasikan visi masa depan yang memikat dan membangkitkan optimisme.\n- *Intellectual Stimulation*: Mendorong bawahan mempertanyakan cara kerja lama dan berpikir inovatif.\n- *Individualized Consideration*: Memberikan perhatian pribadi, membimbing, dan menjadi mentor bagi masing-masing individu.\n- *Perbedaan vs Transaksional*: Kepemimpinan transaksional hanya bertransaksi imbalan-kinerja (Contingent Reward) dan manajemen berbasis eksepsi, sedangkan transformasional membangkitkan potensi intrinsic pengikut melampaui harapan biasa.',
            '**2. Model Kepemimpinan Situasional Hersey-Blanchard**:\n- *Tingkat R1 (Tidak mampu & Ragu)*: Gaya **Directing / Telling** (Tinggi tugas, rendah relasi; instruksi spesifik bagi teller baru).\n- *Tingkat R2 (Tidak mampu tapi Mau)*: Gaya **Coaching / Selling** (Tinggi tugas, tinggi relasi; menjelaskan keputusan dan melatih).\n- *Tingkat R3 (Mampu tapi Ragu/Demotivasi)*: Gaya **Supporting / Participating** (Rendah tugas, tinggi relasi; mendengarkan dan memotivasi staf senior).\n- *Tingkat R4 (Sangat mampu & Percaya Diri)*: Gaya **Delegating** (Rendah tugas, rendah relasi; memberi otonomi penuh kepada tim programmer ahli).',
            '**3. Konsep Servant Leadership (Robert Greenleaf)**: Paradigma kepemimpinan yang membalik piramida hierarki; pemimpin menempatkan dirinya sebagai pelayan kebutuhan pengikut terlebih dahulu, memastikan karyawan berkembang secara profesional dan pribadi.'
          ]
        }
      ]
    }
  ]
};

// TM 13
export const CASE_MOTIVATION_THEORIES_JCM: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Desain Pekerjaan Job Characteristics Model & Teori Ekspektansi Vroom di Tokopedia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Di divisi operasional layanan pelanggan Tokopedia, para staf Customer Support mengalami kejenuhan tinggi (Burnout) dan tingkat turnover mencapai 30% karena pekerjaan bersifat repetitif (menjawab keluhan template). Manajemen HRD ingin mendesain ulang pekerjaan menggunakan Hackman & Oldham Job Characteristics Model serta menyelaraskan skema kompensasi bonus berbasis Teori Ekspektansi Vroom.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Rancang perbaikan kerja menggunakan 5 Dimensi Inti Job Characteristics Model (Skill Variety, Task Identity, Task Significance, Autonomy, Feedback), (2) Evaluasi motivasi staf menggunakan Teori Ekspektansi Vroom (M = E * I * V), dan (3) Bedakan faktor Hygiene vs Motivator menurut Herzberg Two-Factor Theory!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penerapan Job Characteristics Model (Hackman & Oldham)**:\n- *Skill Variety*: Staf tidak hanya membalas chat, tetapi dilatih menganalisis tren komplain dan mengusulkan perbaikan fitur sistem.\n- *Task Identity*: Memberikan wewenang menangani kasus pelanggan dari awal keluhan hingga tuntas (End-to-End Resolution) agar merasakan kepemilikan pekerjaan.\n- *Task Significance*: Mengedukasi staf bahwa resolusi mereka berdampak langsung pada kelangsungan nafkah ribuan UMKM mitra penjual.\n- *Autonomy*: Memberi keleluasaan bagi staf untuk memberikan voucher kompensasi s/d Rp 100.000 secara mandiri tanpa harus meminta persetujuan manajer bertingkat.\n- *Feedback*: Dashboard harian yang menampilkan langsung skor kepuasan pelanggan (CSAT).',
            '**2. Teori Ekspektansi Vroom (Motivation = Expectancy x Instrumentality x Valence)**:\n- *Expectancy (Usaha -> Kinerja)*: Staf harus percaya bahwa kerja kerasnya benar-benar mampu meningkatkan skor performa (memerlukan pelatihan sistem yang handal).\n- *Instrumentality (Kinerja -> Imbalan)*: Staf harus percaya bahwa jika target CSAT tercapai, perusahaan PASTI memberikan bonus uang tunai transparan tanpa manipulasi atasan.\n- *Valence (Nilai Imbalan)*: Imbalan bonus yang ditawarkan harus benar-benar bernilai tinggi dan diinginkan bagi staf.\n- Jika salah satu dari tiga elemen bernilai nol, motivasi total akan runtuh menjadi nol.',
            '**3. Teori Dua Faktor Herzberg**: Gaji pokok yang layak, AC ruangan, dan hubungan harmonis adalah **Hygiene Factors** (hanya mencegah ketidakpuasan, tidak memotivasi); sedangkan pengakuan prestasi, tanggung jawab otonom, dan peluang promosi karier adalah **Motivator Factors** sejati.'
          ]
        }
      ]
    }
  ]
};

// TM 14
export const CASE_TEAM_COMMUNICATION_TQM: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: 5 Tahap Tim Tuckman & Pengendalian Mutu Terpadu (TQM Kaizen) di PT Toyota Motor',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Di pabrik perakitan mobil PT Toyota Motor Manufacturing Indonesia (TMMIN) Karawang, dibentuk Gugus Kendali Mutu (Quality Control Circle / QCC) yang terdiri dari insinyur, teknisi las, dan operator perakitan baru. Tim awalnya mengalami perselisihan pendapat mengenai metode pengelasan pintu mobil (Storming), sebelum akhirnya mampu mencapai standar cacat mendekati nol (Zero Defect) melalui filosofi Kaizen dan sistem lampu Andon.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Jelaskan 5 Tahap Perkembangan Tim menurut Bruce Tuckman (Forming, Storming, Norming, Performing, Adjourning), (2) Bagaimana kepemimpinan memfasilitasi tim melewati tahap Storming menuju Performing?, dan (3) Jelaskan 3 teknik utama Total Quality Management (TQM) yang diterapkan di Toyota (Kaizen, Quality Circles, Six Sigma/Andon Cord)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Lima Tahap Perkembangan Tim Bruce Tuckman**:\n- *Forming (Pembentukan)*: Anggota tim saling berkenalan, merasa canggung, mencari kepastian peran dan tujuan tim.\n- *Storming (Pemberontakan/Konflik)*: Terjadi gesekan pendapat, perebutan pengaruh kepemimpinan informal, dan ketidaksepakatan alur kerja.\n- *Norming (Penetapan Norma)*: Konflik terselesaikan, terbentuk konsensus norma aturan main, kohesivitas tim tumbuh erat.\n- *Performing (Kinerja Optimal)*: Tim berfungsi sebagai unit sinergis berdaya saing tinggi yang fokus menyelesaikan masalah tanpa friksi emosional.\n- *Adjourning (Pembubaran)*: Tim dibubarkan setelah proyek selesai dengan evaluasi perayaan pencapaian.',
            '**2. Peran Kepemimpinan Mengatasi Storming**: Pemimpin harus bersikap terbuka, memfasilitasi dialog konstruktif tanpa menyalahkan pribadi, memfokuskan kembali tim pada sasaran bersama (Superordinate Goals), serta memperjelas pembagian peran kerja yang adil.',
            '**3. Tiga Pilar TQM Toyota**:\n- *Kaizen (Continuous Improvement)*: Perbaikan bertahap dan berkesinambungan setiap hari yang melibatkan partisipasi seluruh lini pekerja dari operator lantai pabrik hingga direksi.\n- *Quality Circles (Gugus Kendali Mutu)*: Kelompok kecil pekerja garis depan yang bertemu secara sukarela untuk mengidentifikasi dan memecahkan masalah cacat produksi.\n- *Andon Cord & Jidoka*: Pemberdayaan operator lini perakitan untuk menarik tali lampu Andon guna menghentikan ban berjalan seketika saat menemukan cacat produk, mencegah produk cacat diteruskan ke proses berikutnya.'
          ]
        }
      ]
    }
  ]
};
