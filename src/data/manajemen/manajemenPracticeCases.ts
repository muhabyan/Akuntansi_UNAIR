// src/data/manajemen/manajemenPracticeCases.ts
// Studi Kasus Riil Pengantar Manajemen TM08-TM14 (MNU108; dulu dikatalogkan sebagai MNM101/MNM201)
// Berdasarkan Standar Richard L. Daft (Management 13e/14e) & Stephen P. Robbins
// Kasus TM01 dihapus: TM01 kini memakai kasus SmartStyle Salons dari Daft & Marcic 12e Ch. 1, yang ditulis
// langsung di modules/tm1.ts.
// Kasus TM02 dihapus: TM02 kini memakai kasus dari Daft & Marcic 12e Ch. 2, yang ditulis langsung di modules/tm2.ts.
// Kasus TM03 dihapus: TM03 kini memakai kasus dari Daft & Marcic 12e Ch. 3, yang ditulis langsung di modules/tm3.ts.
// Kasus TM04 dihapus: TM04 kini memakai kasus dari Daft & Marcic 12e Ch. 4, yang ditulis langsung di modules/tm4.ts.
// Kasus TM05 dihapus: TM05 kini memakai kasus dari Daft & Marcic 12e Ch. 5, yang ditulis langsung di modules/tm5.ts.
// Kasus TM06 dihapus: TM06 kini memakai kasus dari Daft & Marcic 12e Ch. 6, yang ditulis langsung di modules/tm6.ts.
// Kasus TM07 dihapus: TM07 kini memakai kasus dari Daft & Marcic 12e Ch. 7, yang ditulis langsung di modules/tm7.ts.
import type { ContentBlock } from '../../types';

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
