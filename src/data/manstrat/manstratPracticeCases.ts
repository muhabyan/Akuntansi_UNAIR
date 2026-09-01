// src/data/manstrat/manstratPracticeCases.ts
// 14 Studi Kasus Riil Komprehensif Manajemen Strategik (MNS301)
// Berdasarkan Standar Gregory G. Dess, G.T. Lumpkin, Alan B. Eisner & Gerry McNamara
import type { ContentBlock } from '../../types';

// TM 1
export const CASE_COMPETITIVE_ADVANTAGE_STAKEHOLDER: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Keunggulan Bersaing Berkelanjutan & Simbiosis Pemangku Kepentingan di PT Astra International',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Astra International Tbk mengelola konglomerasi dengan 7 lini bisnis. Dalam merumuskan strategi korporasi, dewan direksi menghadapi benturan antara pemegang saham yang menuntut dividen maksimal (Shareholder View) dengan komunitas lingkar operasi yang menuntut program kelestarian lingkungan dan penyerapan tenaga kerja lokal (Stakeholder View). Astra mengadopsi filosofi Catur Dharma untuk menciptakan Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Bandingkan pandangan Zero-Sum vs Stakeholder Symbiosis dalam manajemen strategik, (2) Bagaimana kepemimpinan strategik di 3 tingkatan (Corporate, Business, Functional) menyelaraskan keunggulan bersaing, dan (3) Mengapa efektivitas operasional (Operational Effectiveness) saja tidak cukup untuk menciptakan keunggulan bersaing berkelanjutan menurut Michael Porter?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Zero-Sum vs Stakeholder Symbiosis**:\n- *Zero-Sum View*: Memandang pemangku kepentingan saling bersaing merebut porsi kue ekonomi (contoh: setiap kenaikan gaji buruh dianggap memotong laba dividen pemegang saham).\n- *Stakeholder Symbiosis*: Memandang kepentingan berbagai pemangku kepentingan saling bergantung; memuaskan pekerja dan mitra pemasok justru memperbesar total ukuran kue ekonomi (*creating shared value*), menghasilkan loyalitas dan produktivitas yang pada akhirnya mendongkrak dividen pemegang saham.',
            '**2. Tiga Tingkatan Strategi**:\n- *Corporate-Level Strategy*: Menjawab "Bisnis apa yang harus kita masuki?" (Astra mendiversifikasi portofolio dari otomotif ke agribisnis dan energi hijau).\n- *Business-Level Strategy*: Menjawab "Bagaimana cara kita bersaing dan menang di pasar ini?" (Honda Astra menerapkan diferensiasi jaringan bengkel resmi).\n- *Functional-Level Strategy*: Menjawab "Bagaimana departemen operasional mendukung strategi bisnis?" (efisiensi rantai pasok dan pelatihan teknisi mekanik).',
            '**3. Operational Effectiveness vs Strategic Positioning (Porter)**: Efektivitas operasional berarti melakukan aktivitas serupa lebih baik/cepat daripada pesaing (contoh: Six Sigma, TQM). Ini penting, tetapi mudah ditiru oleh kompetitor sehingga memicu perang harga (keunggulan lenyap). Keunggulan bersaing berkelanjutan menuntut *Strategic Positioning*: melakukan aktivitas yang berbeda dari pesaing atau melakukan aktivitas serupa dengan cara yang unik dan khas.'
          ]
        }
      ]
    }
  ]
};

// TM 2
export const CASE_PORTER_FIVE_FORCES_GROUPS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Analisis 5 Kekuatan Porter & Peta Kelompok Strategis Industri Telekomunikasi RI',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Industri operator seluler di Indonesia pasca konsolidasi (merger Indosat-Tri, penguatan Telkomsel, dan XL Axiata-Smartfren) menghadapi perang tarif paket data, penurunan pendapatan suara/SMS tradisional akibat aplikasi Over-the-Top (WhatsApp, YouTube), serta biaya investasi belanja modal raksasa untuk jaringan serat optik dan menara BTS 5G.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Petakan profitabilitas industri telekomunikasi menggunakan Model 5 Kekuatan Bersaing Porter (Porters Five Forces), (2) Buat Peta Kelompok Strategis (Strategic Groups Map) berdasarkan cakupan geografis dan kualitas jaringan vs tarif harga, dan (3) Identifikasi faktor PESTEL utama yang mendorong merger korporasi!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Analisis 5 Kekuatan Bersaing Porter**:\n- *Ancaman Pendatang Baru (Threat of New Entrants)*: **Sangat Rendah**. Hambatan masuk sangat masif (kebutuhan lisensi spektrum frekuensi pemerintah dan biaya belanja modal triliunan rupiah).\n- *Kekuatan Tawar Pembeli (Bargaining Power of Buyers)*: **Tinggi**. Biaya beralih (Switching Costs) konsumen sangat rendah; pengguna dapat dengan mudah mengganti kartu SIM prabayar demi kuota internet termurah.\n- *Kekuatan Tawar Pemasok (Bargaining Power of Suppliers)*: **Sedang-Tinggi**. Ketergantungan pada vendor penyedia teknologi radio seluler global (Ericsson, Huawei, Nokia) dan perusahaan menara (Mitratel, Tower Bersama).\n- *Ancaman Produk Substitusi (Threat of Substitutes)*: **Sangat Tinggi**. Aplikasi OTT (WhatsApp Call, Telegram, Zoom) dan internet satelit (Starlink) mendisrupsi pendapatan suara dan data tradisional.\n- *Rivalitas Antar-Pesaing (Rivalry Among Existing Firms)*: **Sangat Sengit**. Pertarungan kuota data tanpa henti antar operator besar di pasar yang pertumbuhannya mulai melambat.',
            '**2. Strategic Groups Map**: Kelompok A (High Price / High Quality & Coverage: Telkomsel) memimpin segmen enterprise dan luar Jawa; Kelompok B (Competitive Price / Broad Coverage: Indosat Ooredoo Hutchison dan XL Axiata) bersaing agresif di pulau Jawa.',
            '**3. Faktor PESTEL Pendorong Merger**: Faktor Teknologi (urgensi penggabungan spektrum frekuensi demi menggelar efisiensi 5G) dan Faktor Ekonomi (tekanan laba akibat perang tarif data).'
          ]
        }
      ]
    }
  ]
};

// TM 3
export const CASE_VRIO_ANALYSIS_RESOURCES: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Rantai Nilai (Value Chain) & Analisis VRIO Kapabilitas Riset PT Kalbe Farma',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Kalbe Farma Tbk adalah perusahaan farmasi terbesar di Asia Tenggara. Keunggulan Kalbe ditopang oleh fasilitas riset biologi molekuler mutakhir, portofolio paten obat resep, jaringan distribusi logistik rantai dingin (Cold-Chain Enseval) yang menjangkau 100% apotek dan rumah sakit di Indonesia, serta merek dagang legendaris (Promag, Extra Joss, Milna).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Evaluasi: (1) Uraikan Aktivitas Utama vs Aktivitas Pendukung dalam Rantai Nilai (Value Chain Porter) Kalbe Farma, (2) Uji jaringan distribusi Cold-Chain dan fasilitas riset biologis menggunakan Kerangka VRIO (Valuable, Rare, Inimitable, Organized), dan (3) Tentukan apakah kapabilitas tersebut menghasilkan Keunggulan Bersaing Berkelanjutan (Sustainable Competitive Advantage)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Analisis Rantai Nilai (Porters Value Chain)**:\n- *Aktivitas Utama (Primary Activities)*: Inbound Logistics (pengadaan bahan baku farmasi kimia/biotek), Operations (produksi steril berstandar cGMP di pabrik Cikarang), Outbound Logistics (distribusi cepat oleh Enseval), Marketing & Sales (edukasi dokter, pemasaran ritel), Service (layanan konsultasi medis).\n- *Aktivitas Pendukung (Support Activities)*: Technology Development (riset formulasi sel punca/onkologi), Human Resource Management (rekrutmen apoteker dan ilmuwan PhD), Procurement (kontrak bahan baku global), Firm Infrastructure (tata kelola kepatuhan BPOM).',
            '**2. Evaluasi Kerangka Kerja VRIO**:\n- *Valuable (Bernilai)*: **Ya**. Mengamankan pasokan obat kritis ke ribuan pulau, memangkas biaya perantara, dan mengunci kepercayaan dokter.\n- *Rare (Langka)*: **Ya**. Sangat sedikit perusahaan farmasi di Indonesia yang memiliki armada logistik pendingin mandiri dan lab bioteknologi terakreditasi internasional.\n- *Inimitable (Sulit Ditiru)*: **Ya**. Memerlukan akumulasi modal triliunan rupiah dan pembelajaran historis puluhan tahun (*path dependency* & *causal ambiguity*).\n- *Organized to Exploit (Terorganisir)*: **Ya**. Didukung oleh struktur tata kelola Enseval dan sistem Enterprise Resource Planning (ERP) terintegrasi.',
            '**3. Kesimpulan Keunggulan Bersaing**: Karena lolos keempat kriteria VRIO (V-R-I-O bernilai "Ya"), kapabilitas distribusi dan riset Kalbe Farma menghasilkan **Keunggulan Bersaing Berkelanjutan (Sustainable Competitive Advantage)** yang tidak mudah diruntuhkan kompetitor.'
          ]
        }
      ]
    }
  ]
};

// TM 4
export const CASE_GENERIC_STRATEGIES_LIFECYCLE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Strategi Bersaing Generik Porter & Siklus Hidup Industri Mobil Listrik (EV)',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Industri otomotif global dan Indonesia sedang bertransisi dari kendaraan bensin konvensional (Internal Combustion Engine / ICE) yang berada pada Tahap Kedewasaan (Maturity Stage) menuju Kendaraan Listrik Berbasis Baterai (BEV) yang berada pada Tahap Pertumbuhan (Growth Stage). Pabrikan Cina (Wuling, BYD) menerapkan strategi keunggulan biaya agresif, sementara Tesla dan Hyundai menonjolkan fitur otonom diferensiasi.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Bandingkan Strategi Cost Leadership vs Differentiation pada industri mobil listrik, (2) Bagaimana karakteristik 4 Tahap Siklus Hidup Industri (Introduction, Growth, Maturity, Decline) mempengaruhi alokasi anggaran litbang dan pemasaran, dan (3) Bagaimana strategi Integrated Low-Cost and Differentiation dijalankan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Cost Leadership vs Differentiation pada BEV**:\n- *Cost Leadership (Wuling Air ev, BYD Dolphin)*: Memanfaatkan rantai pasok baterai terintegrasi di Tiongkok dan skala produksi massal untuk menawarkan mobil listrik dengan harga terjangkau bagi konsumen kelas menengah.\n- *Differentiation (Tesla Model S/3, Hyundai Ioniq 5)*: Membangun daya tarik melalui desain futuristik, akselerasi ultra-cepat, jaringan pengisian daya super cepat terintegrasi, dan pembaruan perangkat lunak Over-the-Air (OTA).',
            '**2. Siklus Hidup Industri (Industry Life Cycle)**:\n- *Tahap Perkenalan (Introduction)*: R&D sangat tinggi, penjualan rendah, konsumen early adopters; fokus mengedukasi pasar.\n- *Tahap Pertumbuhan (Growth)*: Penjualan melonjak eksponensial, masuknya banyak kompetitor baru; fokus memperluas kapasitas pabrik dan membangun jaringan dealer.\n- *Tahap Kedewasaan (Maturity)*: Pertumbuhan pasar melambat, persaingan harga sengit; fokus pada efisiensi biaya, rasionalisasi lini produk, dan loyalitas pelanggan.\n- *Tahap Penurunan (Decline)*: Penjualan menyusut karena substitusi teknologi baru; strategi panen kas (*harvesting*) atau divestasi.',
            '**3. Strategi Terintegrasi (Integrated Low-Cost/Differentiation)**: Produsen menggunakan manufaktur fleksibel dan arsitektur modular bersama (contoh: platform E-GMP Hyundai) untuk menghasilkan beragam model diferensiasi dengan biaya produksi massal rendah.'
          ]
        }
      ]
    }
  ]
};

// TM 5
export const CASE_CORPORATE_DIVERSIFICATION_MA: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Diversifikasi Korporasi Terkait vs Tak Terkait & Sinergi M&A di Grup Salim',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Konglomerasi Grup Salim mengelola portofolio multi-industri: mulai dari perkebunan kelapa sawit (Salim Ivomas), pabrik tepung terigu (Bogasari), produsen mie instan terbesar dunia (PT Indofood Sukses Makmur), jaringan minimarket ritel (Indomaret), hingga perbankan (Bank Ina). Di masa lalu, Salim juga memiliki bisnis semen (Indocement) dan otomotif (Indomobil).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Bedakan Diversifikasi Terkait (Related Diversification) vs Tak Terkait (Unrelated Diversification), (2) Jelaskan konsep Sinergi Ekonomi Lingkup (Economies of Scope) dan Kekuatan Pasar (Market Power) pada integrasi vertikal Salim (Hulu ke Hilir), dan (3) Apa saja risiko kegagalan merger & akuisisi (M&A) korporasi?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Diversifikasi Terkait vs Tak Terkait**:\n- *Related Diversification (Vertikal/Horizontal)*: Integrasi agribisnis sawit -> minyak goreng Bimoli -> mie instan Indomie -> toko Indomaret. Unit-unit bisnis saling berbagi kapabilitas bahan baku, rantai distribusi, dan teknologi manufaktur (*sharing activities & core competencies*).\n- *Unrelated Diversification (Konglomerat)*: Memiliki bisnis perbankan, telekomunikasi, dan properti yang tidak memiliki hubungan operasional rantai nilai langsung, semata-mata mengandalkan sinergi pasar modal internal (*internal capital market*).',
            '**2. Sinergi Ekonomi Lingkup & Integrasi Vertikal**:\n- *Economies of Scope*: Biaya produksi mie instan Indofood menjadi sangat murah karena pasokan tepung terigu Bogasari dan minyak goreng dari kebun sendiri (memangkas margin perantara).\n- *Market Power & Pooled Negotiating Power*: Skala pembelian massal memberi daya tawar raksasa atas pemasok kemasan serta mengunci rak display minimarket Indomaret (menguasai akses ke konsumen akhir).',
            '**3. Risiko Kegagalan M&A (Merger & Acquisition)**: Membayar premi akuisisi terlalu mahal (Winner Curse), benturan budaya organisasi antar-entitas yang digabung, kepergian eksekutif kunci pasca akuisisi, serta penumpukan utang obligasi yang menekan likuiditas kas korporasi.'
          ]
        }
      ]
    }
  ]
};

// TM 6
export const CASE_GOVERNANCE_AGENCY_CONTROL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Tata Kelola Perusahaan, Teori Keagenan, & Pengendalian Strategik di BUMN',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Krakatau Steel Tbk (Persero) pernah mengalami kerugian beruntun dan tumpukan utang belasan triliun rupiah akibat proyek pembangunan pabrik blast furnace bernilai mahal yang akhirnya mangkrak dan tidak efisien. Masalah ini mencerminkan Masalah Keagenan (Agency Problem) di mana manajer BUMN mengambil keputusan belanja modal berisiko demi gengsi proyek tanpa pengawasan ketat dari Dewan Komisaris.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Jelaskan Teori Keagenan (Agency Theory) dan konflik kepentingan Principal vs Agent, (2) Evaluasi peran Dewan Komisaris Independen dan Komite Audit sebagai mekanisme Tata Kelola Internal (Internal Governance Mechanism), dan (3) Bedakan Pengendalian Informasi (Informational Control) vs Pengendalian Perilaku (Behavioral Control)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Teori Keagenan (Agency Theory)**: Terjadi pemisahan antara Pemilik/Prinsipal (Pemerintah/Rakyat dan Pemegang Saham Publik) dengan Agen/Manajer (Direksi). Manajer memiliki asimetri informasi dan berpotensi bertindak mengejar kepentingan pribadi (status, bonus, proyek megah) yang merugikan kekayaan jangka panjang prinsipal.',
            '**2. Mekanisme Tata Kelola Internal (Internal Governance)**:\n- *Dewan Komisaris Independen*: Bertugas mengawasi keputusan direksi secara objektif tanpa benturan kepentingan politik.\n- *Komite Audit*: Memeriksa laporan keuangan, mengawasi kepatuhan audit internal, dan mengevaluasi manajemen risiko proyek bernilai material sebelum anggaran disetujui.',
            '**3. Pengendalian Strategik (Strategic Control)**:\n- *Informational Control*: Mengawasi apakah asumsi strategis di lingkungan eksternal masih valid (contoh: memantau penurunan drastis harga baja impor dari Tiongkok yang membuat proyek blast furnace tidak layak).\n- *Behavioral Control*: Mengarahkan tindakan harian karyawan melalui 3 tuas: Budaya Perusahaan (nilai AKHLAK), Penghargaan/Insentif berbasis kinerja objektif, dan Batasan/Aturan Kepatuhan (SOP anti-fraud).'
          ]
        }
      ]
    }
  ]
};

// TM 7
export const CASE_AMBIDEXTROUS_ORGANIZATIONAL_DESIGN: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Desain Organisasi Ambidextrous & Kewirausahaan Korporasi di Telkom Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Telkom Indonesia Tbk menghadapi dilema inovator: bisnis telekomunikasi suara/SMS dan pita lebar kabel (IndiHome/Telkomsel) adalah mesin pencetak uang tunai yang membutuhkan kontrol efisiensi ketat, sementara bisnis platform digital masa depan (data center, cloud, fintech, AI) menuntut kultur startup yang lincah, berani bereksperimen, dan toleran terhadap kegagalan.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Mengapa Struktur Ambidextrous (Ambidextrous Organizational Design) merupakan solusi terbaik bagi konglomerasi telekomunikasi?, (2) Bagaimana kepemimpinan strategik menyeimbangkan eksploitasi vs eksplorasi, dan (3) Bagaimana Corporate Venture Capital (MDI Ventures) mendorong Corporate Entrepreneurship?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Desain Organisasi Ambidextrous (OReilly & Tushman)**: Memisahkan unit inovasi eksplorasi baru dari unit operasional eksploitasi tradisional secara struktural (tim, budaya, dan KPI berbeda), namun tetap mengintegrasikannya di tingkat manajemen puncak melalui satu visi strategis bersama dan akses sumber daya modal korporasi.',
            '**2. Keseimbangan Eksploitasi vs Eksplorasi**:\n- *Eksploitasi (Bisnis Inti)*: Menerapkan struktur mekanistik efisien, perbaikan bertahap (incremental improvement), dan disiplin biaya ketat untuk memaksimalkan margin laba.\n- *Eksplorasi (Bisnis Digital)*: Menerapkan struktur organik lincah (*agile squads*), eksperimen radikal (*breakthrough innovation*), dan fleksibilitas model bisnis.',
            '**3. Peran Corporate Venture Capital (CVC - MDI Ventures)**: Bertindak sebagai kendaraan *Corporate Entrepreneurship* yang menginjeksi modal ke startup eksternal, menyerap wawasan teknologi terkini dari ekosistem digital, serta menjalin sinergi kemitraan strategis dengan unit bisnis Telkom Group.'
          ]
        }
      ]
    }
  ]
};

// TM 8
export const CASE_UTS_MANSTRAT_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Integrasi Analisis Industri, VRIO, & Strategi Korporasi Pra-UTS',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Di ruang ujian, mahasiswa disajikan kasus korporasi: PT Kopi Nusantara menghadapi kejenuhan pasar ritel kafe dalam negeri. Direksi ingin mengevaluasi 5 Kekuatan Porter industri F&B, menguji keunggulan rantai nilai pasok biji kopi dengan kerangka VRIO, serta merumuskan strategi diversifikasi ke produk kopi siap minum (Ready-to-Drink) kalengan dan ekspansi ekspor.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun: (1) Evaluasi kekuatan tawar pembeli dan ancaman substitusi pada industri kafe, (2) Uji VRIO sumber daya biji kopi single-origin organik, dan (3) Rekomendasi moda ekspansi internasional (Ekspor vs Lisensi vs JV) yang paling minim risiko modal!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Analisis 5 Kekuatan Porter Industri Kafe**:\n- *Kekuatan Tawar Pembeli*: Sangat tinggi karena biaya beralih (switching cost) konsumen mendekati nol (banyak pilihan merek kopi lain dalam radius 100 meter).\n- *Ancaman Produk Substitusi*: Tinggi; kopi sachet instan di minimarket dan minuman boba/teh kekinian menjadi alternatif pemuas dahaga.',
            '**2. Uji VRIO Pasokan Biji Kopi Organik Eksklusif**:\n- *Valuable*: Ya, menghasilkan cita rasa khas yang memikat lidah penikmat kopi premium.\n- *Rare*: Ya, perkebunan dataran tinggi dengan sertifikasi organik internasional sangat terbatas.\n- *Inimitable*: Ya, kondisi mikroklimat tanah vulkanik dan tradisi pemetikan petik merah sulit diduplikasi pesaing.\n- *Organized*: Ya, jika diikat dengan kontrak pasokan eksklusif jangka panjang petani mitra.\n- *Hasil*: Menghasilkan **Keunggulan Bersaing Berkelanjutan** pada lini kopi premium.',
            '**3. Rekomendasi Ekspansi Global**: Memulai dengan **Ekspor Tidak Langsung / Ekspor Langsung** biji kopi sangrai dalam kemasan vakum ke distributor lokal di Jepang/Eropa, guna memvalidasi penerimaan pasar tanpa harus menanggung risiko modal belanja fisik mendirikan gerai kafe di luar negeri.'
          ]
        }
      ]
    }
  ]
};

// TM 9
export const CASE_BLUE_OCEAN_ERRC_CANVAS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Value Innovation, Strategy Canvas, & Matriks ERRC Kopi Kenangan',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Kopi Kenangan berhasil menciptakan ruang pasar baru (Blue Ocean) di industri kopi Indonesia yang sebelumnya merupakan Red Ocean berdarah-darah: terjepit antara kafe premium mahal bergaya barat (Starbucks seharga Rp 50.000) dan kopi sachet warung pinggir jalan (seharga Rp 4.000). Dengan menciptakan menu "Kopi Kenangan Mantan" berbasis gula aren dan konsep "Grab-and-Go" berbasis aplikasi ponsel, Kopi Kenangan menjadi startup F&B unicorn pertama di Asia Tenggara.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis menggunakan Kerangka Blue Ocean Strategy: (1) Jelaskan konsep Inovasi Nilai (Value Innovation) yang mematahkan trade-off biaya vs diferensiasi, (2) Petakan Kanvas Strategi (Strategy Canvas) Kopi Kenangan vs Starbucks vs Kopi Sachet, dan (3) Rinci 4 Tindakan Matriks ERRC (Eliminate, Reduce, Raise, Create)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Konsep Inovasi Nilai (Value Innovation - Kim & Mauborgne)**: Blue Ocean Strategy mematahkan doktrin konvensional bahwa perusahaan harus memilih antara diferensiasi berbiaya mahal ATAU keunggulan biaya rendah. Value Innovation mengejar **Diferensiasi dan Biaya Rendah secara simultan** dengan mengeliminasi faktor persaingan yang tidak penting bagi konsumen dan menaikkan faktor nilai esensial.',
            '**2. Matriks 4 Tindakan ERRC Kopi Kenangan**:\n- *Eliminate (Hapuskan)*: Menghapuskan area tempat duduk luas yang mahal (sofa, colokan listrik kerja, sewa gerai mal raksasa ribuan meter persegi).\n- *Reduce (Kurangi)*: Mengurangi kemewahan cangkir keramik dan variasi menu pastry rumit.\n- *Raise (Tingkatkan)*: Meningkatkan cita rasa kopi susu lokal autentik (espresso segar + gula aren asli) dan kecepatan pelayanan barista (*Grab-and-Go*).\n- *Create (Ciptakan)*: Menciptakan aplikasi pemesanan digital tanpa antri dan nama produk yang emosional dan viral ("Kenangan Mantan", "Mantan Menikah").',
            '**3. Strategy Canvas**: Kurva nilai Kopi Kenangan berdivergensi tajam dari Starbucks (harga jauh lebih murah, gerai minimalis) dan unggul jauh di atas warung sachet (kualitas biji kopi espresso segar dan kenyamanan aplikasi mobile).'
          ]
        }
      ]
    }
  ]
};

// TM 10
export const CASE_BALANCED_SCORECARD_MAP: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Strategy Map & Balanced Scorecard 4 Perspektif di Bank Mandiri',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Bank Mandiri menyusun Rencana Strategis Jangka Panjang untuk menjadi bank digital dan wholesale terkemuka di Asia Tenggara. Manajemen menyadari bahwa target keuangan (Laba Bersih dan ROE) adalah indikator tertinggal (Lagging Indicators). Untuk memastikan eksekusi visi berhasil, direksi merancang Peta Strategi (Strategy Map) dan Balanced Scorecard (BSC) yang menghubungkan 4 perspektif kinerja.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun: (1) Rantai Hubungan Sebab-Akibat (Cause-and-Effect Chain) lintas 4 Perspektif Balanced Scorecard (Financial, Customer, Internal Business Process, Learning & Growth), (2) Identifikasi Lead Indicators vs Lag Indicators pada Strategy Map, dan (3) Bagaimana Strategy Map menyelaraskan aset tak berwujud (Intangible Assets) dengan penciptaan nilai finansial?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Rantai Hubungan Sebab-Akibat 4 Perspektif (Kaplan & Norton)**:\n- *Learning & Growth Perspective (Fondasi)*: Jika Bank Mandiri meningkatkan pelatihan digital talent dan menanamkan budaya lincah (Agile Culture)...\n- *Internal Business Process Perspective*: ...Maka proses internal peluncuran aplikasi mobile (Livin dan Kopra) menjadi cepat, stabil, aman, dan tanpa celah siber...\n- *Customer Perspective*: ...Maka kepuasan nasabah (CSAT) dan pengguna aktif bulanan (Monthly Active Users) melonjak drastis...\n- *Financial Perspective (Puncak)*: ...Sehingga pendapatan berbasis komisi (Fee-Based Income) meningkat dan Return on Equity (ROE) korporasi mencapai rekor tertinggi.',
            '**2. Lead vs Lag Indicators**:\n- *Lagging Indicators (Hasil Akhir)*: Laba Bersih, ROE, NPL (Kredit Bermasalah), dan Pangsa Pasar (mengevaluasi apa yang sudah terjadi di masa lalu).\n- *Leading Indicators (Pendorong Masa Depan)*: Jam pelatihan kompetensi AI staf, kecepatan waktu persetujuan kredit digital (Turnaround Time), dan skor retensi pengguna aplikasi.',
            '**3. Penyelarasan Aset Tak Berwujud**: Balanced Scorecard membuktikan bahwa aset tak berwujud (modal manusia, modal informasi, modal organisasi) yang semula tidak tercatat di neraca akuntansi merupakan motor sejati penggerak seluruh laba finansial nyata di puncak piramida.'
          ]
        }
      ]
    }
  ]
};

// TM 11
export const CASE_PLATFORM_ECOSYSTEM_NETWORK: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Efek Jaringan (Network Effects) & Model Bisnis Platform di GoTo & Shopee',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Platform digital seperti Shopee dan Gojek beroperasi dengan model bisnis dua sisi (Two-Sided / Multi-Sided Platforms). Keberhasilan platform bukan ditentukan oleh penguasaan aset fisik (pabrik atau kendaraan), melainkan oleh kekuatan Efek Jaringan (Network Effects): semakin banyak pedagang/mitra driver yang bergabung, semakin bernilai aplikasi tersebut bagi jutaan pembeli/penumpang, dan sebaliknya.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Bedakan Efek Jaringan Langsung (Direct / Same-Side Network Effects) vs Efek Jaringan Tidak Langsung (Indirect / Cross-Side Network Effects), (2) Masalah "Ayam dan Telur" (Chicken-and-Egg Dilemma) saat meluncurkan platform dan taktik subsidinya, serta (3) Bagaimana fenomena Winner-Take-All terjadi di pasar digital?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Direct vs Indirect Network Effects**:\n- *Direct (Same-Side) Effects*: Nilai layanan bagi pengguna meningkat seiring bertambahnya pengguna lain di sisi yang sama (contoh: semakin banyak teman memakai WhatsApp, semakin berguna aplikasi tersebut bagi Anda).\n- *Indirect (Cross-Side) Effects*: Pertambahan pengguna di satu sisi meningkatkan nilai bagi pengguna di sisi lain yang berbeda (contoh: semakin banyak restoran mendaftar di GoFood, semakin puas konsumen pembeli; semakin banyak pembeli lapar, semakin banyak orderan bagi mitra driver).',
            '**2. Dilema Ayam dan Telur & Strategi Subsidi**: Pada awal berdiri, tidak ada pembeli jika tidak ada penjual, dan tidak ada penjual jika tidak ada pembeli.\nTaktik: Platform menyubsidi satu sisi (memberikan pendaftaran gratis dan voucher promosi kepada pembeli) sambil memungut komisi dari sisi penjual yang monetisasinya tinggi.',
            '**3. Fenomena Winner-Take-All (Pemenang Menguasai Segalanya)**: Pasar platform digital memiliki dinamika skala pengembalian meningkat (Increasing Returns to Scale); begitu satu platform melewati ambang batas kritis (Critical Mass), efek jaringan menciptakan lingkaran kebaikan (*virtuous cycle*) raksasa yang menyingkirkan kompetitor kecil hingga tersisa monopoli/duopoli dominan.'
          ]
        }
      ]
    }
  ]
};

// TM 12
export const CASE_ZARA_FAST_FASHION_SUPPLY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Keunggulan Rantai Pasok Cepat Zara Inditex vs Kemewahan Abadi LVMH',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Industri mode global dikuasai oleh dua raksasa dengan logika strategis bertolak belakang: Inditex (Zara) menerapkan model Fast Fashion yang mampu mendesain, memproduksi, dan mendistribusikan tren baju baru dari catwalk Paris ke rak toko di seluruh dunia hanya dalam waktu 15 hari. Sebaliknya, LVMH (Louis Vuitton Moet Hennessy) menerapkan Strategi Kemewahan (Luxury Strategy) yang mengandalkan warisan sejarah, kelangkaan buatan, pengerjaan tangan pengrajin, dan penolakan diskon harga.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Bandingkan: (1) Sistem Rantai Pasok Respon Cepat (Quick Response Supply Chain) Zara vs Model Bisnis Kemewahan LVMH, (2) Bagaimana Zara meminimalkan resiko stok menumpuk (Markdown / Deadstock), dan (3) Mengapa barang mewah LVMH menolak hukum elastisitas harga permintaan normal (Veblen Good)?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Logika Strategis Zara vs LVMH**:\n- *Zara (Agile Supply Chain)*: Mempertahankan 50% fasilitas pabrik di dekat kantor pusat Spanyol/Portugal untuk fleksibilitas respon kilat, batch produksi kecil, pengiriman udara 2x seminggu ke seluruh gerai global.\n- *LVMH (Timeless Luxury)*: Mempertahankan bengkel pengrajin tradisional di Prancis/Italia, siklus hidup produk puluhan tahun, menolak produksi massal demi menjaga eksklusivitas citra prestise.',
            '**2. Pengendalian Risiko Deadstock Zara**: Dengan memproduksi pakaian dalam jumlah terbatas (Artificial Scarcity) dan siklus rak hanya 3-4 minggu, konsumen terdorong untuk segera membeli saat itu juga (*Buy Now or Its Gone Forever*). Akibatnya, diskon obral (markdown) Zara hanya 15-20%, jauh di bawah rata-rata industri fashion (40-50%).',
            '**3. Efek Barang Veblen (Veblen Goods)**: Tas Louis Vuitton berfungsi sebagai simbol status sosial (Conspicuous Consumption). Ketika harga tas dinaikkan 10-20%, permintaan dari konsumen elit jutawan justru MENINGKAT karena harga mahal menjamin bahwa barang tersebut tetap eksklusif dan tidak mampu dibeli oleh masyarakat biasa.'
          ]
        }
      ]
    }
  ]
};

// TM 13
export const CASE_EMIRATES_AIRLINE_STRATEGY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Inovasi Hub-and-Spoke Emirates Airline vs Maskapai LCC',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Emirates Airline yang berbasis di Dubai bertransformasi menjadi maskapai penerbangan internasional raksasa dengan memanfaatkan lokasi geografis strategis Dubai (berjarak tempuh 8 jam terbang dari dua pertiga populasi bumi). Emirates mengoperasikan armada pesawat berbadan lebar raksasa (Airbus A380 dan Boeing 777) dengan model jaringan Hub-and-Spoke global dan pengalaman kabin mewah, berbeda dari maskapai bertarif rendah (LCC) seperti Ryanair dan AirAsia yang menerapkan model Point-to-Point.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Keunggulan ekonomi model jaringan Hub-and-Spoke global Emirates vs model Point-to-Point LCC, (2) Strategi Diferensiasi Premium (kabin first-class shower spa, sistem hiburan ICE) dalam merebut segmen pelancong bisnis bernilai tinggi, dan (3) Analisis kerentanan strategi terhadap gejolak harga avtur dan konflik geopolitik Timur Tengah!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Hub-and-Spoke vs Point-to-Point**:\n- *Hub-and-Spoke Emirates*: Menghubungkan kota-kota sekunder dunia (contoh: Manchester ke Bali, Sao Paulo ke Tokyo) melalui transfer satu atap di hub megah Dubai International Airport, memaksimalkan faktor muatan penumpang (*passenger load factor*) pada armada pesawat raksasa.\n- *Point-to-Point LCC (Ryanair, AirAsia)*: Terbang langsung antar kota padat tanpa transfer transit, memangkas biaya bagasi, menggunakan bandara sekunder murah, dan perputaran pesawat cepat 30 menit.',
            '**2. Diferensiasi Premium Berkelanjutan**: Emirates merebut pasar penumpang bisnis dan kelas satu yang menghasilkan marjin laba terbesar melalui fasilitas mewah legendaris (shower spa di udara, bar lounge A380, menu hidangan koki berbintang), membangun loyalitas tinggi yang membuat korporasi multinasional bersedia membayar tiket mahal.',
            '**3. Kerentanan Strategis**: Ketergantungan pada armada pesawat jumbo A380 membutuhkan volume penumpang masif agar balik modal; lonjakan harga minyak mentah global dan ketegangan perang di kawasan Timur Tengah dapat melumpuhkan ruang udara penerbangan transit Dubai secara mendadak.'
          ]
        }
      ]
    }
  ]
};

// TM 14
export const CASE_SAMSUNG_TECH_PORTFOLIO: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: Kepemimpinan Teknologi Semi-Konduktor & Portofolio Samsung vs Apple',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Samsung Electronics dan Apple Inc. terlibat dalam dinamika persaingan unik (Co-opetition / Bekerja Sama Sekaligus Bersaing). Di pasar ponsel pintar global, seri Samsung Galaxy bersaing sengit merebut pangsa pasar dari Apple iPhone. Namun di balik layar, Samsung adalah salah satu pemasok komponen terpenting bagi Apple, memproduksi layar OLED fleksibel dan cip memori NAND flash tercanggih untuk iPhone.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis menggunakan manajemen strategik: (1) Konsep "Co-opetition" (Kooperasi dan Kompetisi Simultan) dalam ekosistem teknologi tinggi, (2) Strategi Integrasi Vertikal manufaktur semi-konduktor Samsung vs Model Fabless / Outsourcing Apple, dan (3) Bagaimana manajemen portofolio melindungi laba korporasi dari siklus penurunan harga komoditas cip memori?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Konsep Co-opetition (Brandenburger & Nalebuff)**: Samsung dan Apple bekerja sama memperbesar nilai kue ekosistem teknologi (*Cooperation*), sekaligus bersaing merebut porsi keuntungan terbesar di mata konsumen (*Competition*). Keuntungan divisi layar dan memori Samsung justru disubsidi oleh rekor penjualan iPhone Apple.',
            '**2. Integrasi Vertikal vs Model Fabless**:\n- *Samsung (Integrated Device Manufacturer / IDM)*: Menguasai pabrik fabrikasi chip semi-konduktor fisik (*fabs*) sendiri bernilai puluhan miliar dolar; mengendalikan seluruh rantai pasok dari silikon mentah hingga smartphone jadi di tangan konsumen.\n- *Apple (Fabless & Ekosistem Tertutup)*: Fokus pada desain arsitektur cip (Apple Silicon), R&D perangkat lunak iOS, dan pemasaran merek, sementara seluruh perakitan dan fabrikasi fisik di-outsource ke TSMC dan Foxconn.',
            '**3. Manajemen Portofolio Pelindung Siklus**: Industri memori semi-konduktor bersifat sangat volatil (siklus boom-and-bust). Portofolio terdiversifikasi Samsung (Consumer Electronics, Panel Display, Peralatan Rumah Tangga, Jaringan 5G, Smartphone) bertindak sebagai peredam guncangan (*portfolio hedge*) ketika harga cip dunia jatuh.'
          ]
        }
      ]
    }
  ]
};
