// =============================================================
// src/data/readings/aka103.ts — Etika & Keterampilan Profesional untuk Akuntan (AKA103)
// TM1–7 (pra-UTS) & TM8–14 (pra-UAS). Sumber: Duska Accounting Ethics, AICPA, RPS FEB UNAIR.
// =============================================================
import type { Reading } from '../../types';

const tm1: Reading = {
  tm: 1, title: 'Hakikat Akuntansi & Kesulitan Etis Utama: True Disclosure', ref: 'Duska Ch. 1',
  intro: 'Akuntansi pada dasarnya adalah aktivitas **pengungkapan kebenaran** tentang kondisi keuangan entitas. Tantangan etis terbesarnya muncul justru di sini: sampai sejauh mana, dan dengan cara apa, kebenaran itu diungkapkan.',
  objectives: [
    'Menjelaskan hakikat akuntansi sebagai pengungkapan informasi keuangan.',
    'Menjelaskan kesulitan etis utama: true disclosure.',
    'Mengenali praktik "cooking the books".',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Hakikat Akuntansi' },
    { kind: 'p', text: 'Akuntansi adalah penyediaan informasi keuangan kepada pihak yang berkepentingan agar mereka dapat mengambil keputusan. Karena banyak pihak **bergantung** pada informasi ini, kejujuran penyusunnya menjadi syarat mutlak.' },
    { kind: 'callout', variant: 'key', title: 'Chief ethical difficulty', text: 'Kesulitan etis utama akuntan adalah **true disclosure** — mengungkapkan kondisi keuangan secara benar, lengkap, dan tidak menyesatkan, bahkan ketika ada tekanan untuk menampilkan keadaan lebih baik dari kenyataan.' },
    { kind: 'h2', text: 'B. "Cooking the Books"' },
    { kind: 'p', text: '"Cooking the books" adalah manipulasi laporan keuangan agar tampak lebih baik — mempercepat pengakuan pendapatan, menunda/menyembunyikan beban, atau menyembunyikan utang. Praktik ini melanggar inti etika akuntansi dan merusak kepercayaan publik (mis. skandal Enron, WorldCom).' },
    { kind: 'ul', items: [
      'Mengakui pendapatan yang belum benar-benar dihasilkan.',
      'Menyembunyikan atau menunda beban & kewajiban.',
      'Menggunakan entitas bertujuan khusus untuk menyembunyikan utang.',
    ] },
    { kind: 'callout', variant: 'warning', title: 'Mengapa berbahaya', text: 'Investor & kreditor mengambil keputusan berdasarkan laporan keuangan. Manipulasi = menipu pengambil keputusan dan dapat menghancurkan perusahaan serta merugikan banyak pihak.' },
  ],
};

const tm2: Reading = {
  tm: 2, title: 'Pengukuran & Pelaporan: Laporan Keuangan, Nilai Aset, COGS', ref: 'Duska Ch. 1–2',
  intro: 'Untuk menilai etika pelaporan, akuntan harus paham apa yang dilaporkan dan bagaimana mengukurnya. Pilihan metode pengukuran membawa konsekuensi etis.',
  objectives: [
    'Menyebutkan empat laporan keuangan utama & 5 peran akuntan.',
    'Menjelaskan faktor penentu nilai aset & konsep pengukuran.',
    'Membedakan tiga metode COGS dan implikasinya.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Empat Laporan Keuangan Utama' },
    { kind: 'ul', items: [
      '**Laporan laba rugi** — kinerja selama periode.',
      '**Laporan perubahan ekuitas** — perubahan hak pemilik.',
      '**Laporan posisi keuangan (neraca)** — aset, liabilitas, ekuitas pada satu titik.',
      '**Laporan arus kas** — aliran kas operasi/investasi/pendanaan.',
    ] },
    { kind: 'h2', text: 'B. Nilai Aset & Konsep Pengukuran' },
    { kind: 'p', text: 'Nilai aset dipengaruhi oleh **biaya perolehan**, **manfaat ekonomi masa depan**, dan **kondisi pasar**. Pengukuran bisa berbasis biaya historis atau nilai wajar — pilihan ini memengaruhi angka laba & memberi ruang pertimbangan (judgment) yang berimplikasi etis.' },
    { kind: 'h2', text: 'C. Tiga Metode COGS' },
    { kind: 'table', headers: ['Metode', 'Dasar'], rows: [
      ['FIFO', 'Biaya tertua dibebankan lebih dulu'],
      ['Average', 'Biaya rata-rata tertimbang'],
      ['Specific identification', 'Biaya aktual tiap unit'],
    ], caption: 'Pemilihan metode mengubah angka laba & persediaan — harus diungkapkan & konsisten.' },
    { kind: 'h2', text: 'D. Lima Peran Akuntan' },
    { kind: 'ul', items: [
      'Pencatat & penyusun laporan keuangan.', 'Auditor (pemberi keyakinan).', 'Penasihat pajak.',
      'Akuntan manajemen (pendukung keputusan internal).', 'Penjaga kepentingan publik (public watchdog).',
    ] },
    { kind: 'callout', variant: 'info', title: 'Kronologi regulasi (hafal)', text: 'Perkembangan standar: dari praktik bebas → pembentukan badan standar (mis. AICPA, FASB/IASB) → regulasi pasca-skandal seperti **Sarbanes-Oxley Act (2002)** yang memperketat tanggung jawab manajemen & auditor.' },
  ],
};

const tm3: Reading = {
  tm: 3, title: 'Pengantar Etika: Definisi, Dimensi & Tingkatan', ref: 'Duska Ch. 2',
  intro: 'Sebelum menerapkan etika pada akuntansi, kita perlu memahami apa itu etika, bagaimana ia bekerja, dan pada level mana penilaian etis dilakukan.',
  objectives: [
    'Mendefinisikan etika dan dua dimensinya (Duska).',
    'Menjelaskan etika sebagai intellectual enterprise.',
    'Menyebutkan alasan mempelajari etika.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Apa itu Etika?' },
    { kind: 'p', text: 'Secara etimologis, **"etika"** berasal dari bahasa Yunani **ethos** (kebiasaan, watak, cara berpikir). Etika adalah cabang filsafat yang mengkaji benar–salah dan baik–buruk dalam tindakan manusia.' },
    { kind: 'h2', text: 'B. Dua Dimensi Etika (Duska)' },
    { kind: 'ul', items: [
      '**Dimensi tindakan (apa yang benar untuk dilakukan):** menilai apakah suatu tindakan benar/salah.',
      '**Dimensi karakter (menjadi orang seperti apa):** menilai watak/keutamaan (virtue) pelaku.',
    ] },
    { kind: 'h2', text: 'C. Tiga Tingkatan Penilaian Etika' },
    { kind: 'ol', items: [
      'Tindakan individu (apakah tindakan ini benar?).',
      'Praktik/aturan (apakah aturan/kebijakan ini adil?).',
      'Sistem/institusi (apakah sistem ekonomi-sosialnya etis?).',
    ] },
    { kind: 'h2', text: 'D. Mengapa Belajar Etika?' },
    { kind: 'ul', items: [
      'Menjaga kepercayaan publik pada profesi.',
      'Membantu mengambil keputusan saat menghadapi dilema.',
      'Melindungi akuntan dari tekanan & sanksi hukum.',
      'Memperkuat integritas & reputasi pribadi.',
      'Menyadari bahwa etika adalah **intellectual enterprise** — memerlukan penalaran, bukan sekadar perasaan.',
    ] },
  ],
};

const tm4: Reading = {
  tm: 4, title: 'Kode Etik Profesi & Prinsip AICPA', ref: 'AICPA · Duska Ch. 3',
  intro: 'Profesi akuntan memiliki kode etik formal. AICPA Code of Professional Conduct menetapkan prinsip-prinsip yang menjadi kompas perilaku profesional.',
  objectives: [
    'Menyebutkan tujuh prinsip AICPA Code of Ethics.',
    'Menerapkan pertanyaan pembenar tindakan.',
    'Mengenali dilema moral klasik.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Tujuh Prinsip AICPA' },
    { kind: 'ol', items: [
      '**Responsibilities** — bertanggung jawab dalam menjalankan tugas profesional.',
      '**The Public Interest** — melayani kepentingan publik & menjaga kepercayaan.',
      '**Integrity** — jujur & berterus terang.',
      '**Objectivity & Independence** — bebas dari konflik kepentingan, terutama auditor.',
      '**Due Care** — kompeten & tekun sesuai standar teknis.',
      '**Scope & Nature of Services** — hanya memberikan jasa yang sesuai prinsip.',
      '(Prinsip-prinsip ini saling menguatkan; **independensi** sangat krusial bagi auditor.)',
    ] },
    { kind: 'h2', text: 'B. Lima Pertanyaan Pembenar Tindakan' },
    { kind: 'p', text: 'Untuk menguji apakah suatu tindakan etis, tanyakan: (1) Apakah legal? (2) Apakah adil bagi semua pihak? (3) Bagaimana perasaanku jika ini diketahui publik? (4) Apakah sesuai nilai & kode etik? (5) Apakah aku rela orang lain memperlakukanku begitu?' },
    { kind: 'h2', text: 'C. Tiga Dilema Moral Klasik' },
    { kind: 'ul', items: [
      'Konflik antara loyalitas pada perusahaan vs kepentingan publik.',
      'Tekanan atasan vs integritas profesional.',
      'Kepentingan pribadi (insentif/bonus) vs kebenaran laporan.',
    ] },
    { kind: 'callout', variant: 'key', title: 'Independensi', text: 'Auditor harus **independen** secara fakta dan penampilan. Hilangnya independensi (mis. kepentingan finansial pada klien) membatalkan nilai audit.' },
  ],
};

const tm5: Reading = {
  tm: 5, title: 'Teori Moral untuk Akuntan', ref: 'Duska Ch. 3',
  intro: 'Ketika kode etik tidak memberi jawaban langsung, akuntan bersandar pada teori moral untuk menalar keputusan. Tiga teori besar paling sering dipakai.',
  objectives: [
    'Membedakan egoisme, utilitarianisme, dan deontologi.',
    'Menjelaskan virtue ethics.',
    'Menerapkan teori pada kasus akuntansi.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Tiga Teori Utama' },
    { kind: 'table', headers: ['Teori', 'Dasar penilaian', 'Tokoh'], rows: [
      ['Egoisme', 'Kepentingan diri sendiri', '—'],
      ['Utilitarianisme', 'Konsekuensi: manfaat terbesar untuk terbanyak', 'Bentham, Mill'],
      ['Deontologi', 'Kewajiban & aturan moral (terlepas dari hasil)', 'Immanuel Kant'],
    ] },
    { kind: 'ul', items: [
      '**Utilitarianisme** = konsekuensialis: tindakan benar bila memaksimalkan kebaikan bersih.',
      '**Deontologi (Kant):** ada kewajiban moral mutlak; "categorical imperative" — bertindaklah dengan prinsip yang bisa menjadi hukum universal; jangan jadikan orang sekadar alat.',
      '**Virtue ethics:** fokus pada **karakter** (kejujuran, integritas) — "orang baik akan bertindak baik".',
    ] },
    { kind: 'h2', text: 'B. Penerapan' },
    { kind: 'example', title: 'Kasus: tekanan memanipulasi laba', blocks: [
      { kind: 'p', text: '**Utilitarian:** manipulasi merugikan banyak pihak (investor, karyawan) → salah. **Deontologi:** berbohong melanggar kewajiban kejujuran → salah tanpa syarat. **Virtue:** akuntan berintegritas menolak. Ketiganya menuju kesimpulan sama: **jangan manipulasi.**' },
    ] },
  ],
};

const tm6: Reading = {
  tm: 6, title: 'Etika Pengungkapan & Penerapan pada Profesi Akuntan', ref: 'Duska Ch. 4',
  intro: 'Inti praktik etis akuntan adalah pengungkapan yang benar. Duska merumuskan pertanyaan kunci untuk menilai kecukupan pengungkapan.',
  objectives: [
    'Menerapkan tiga pertanyaan etika pengungkapan (Duska).',
    'Menghubungkan pengungkapan dengan karakteristik informasi.',
    'Menilai kasus pengungkapan.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Tiga Pertanyaan Kunci Pengungkapan (Duska)' },
    { kind: 'ol', items: [
      'Apa yang **harus** diungkapkan (informasi yang relevan bagi pengguna)?',
      'Kepada **siapa** informasi itu diungkapkan?',
      '**Seberapa banyak** dan dengan cara apa diungkapkan agar tidak menyesatkan?',
    ] },
    { kind: 'h2', text: 'B. Pengungkapan yang Baik' },
    { kind: 'ul', items: [
      '**Lengkap** — tidak menyembunyikan informasi material.',
      '**Jujur/akurat** — bebas dari salah saji yang disengaja.',
      '**Tepat waktu & dapat dipahami** — berguna untuk keputusan.',
    ] },
    { kind: 'callout', variant: 'warning', title: 'Material omission', text: 'Menghilangkan informasi **material** (yang dapat memengaruhi keputusan pengguna) sama tidak etisnya dengan menyatakan informasi palsu.' },
    { kind: 'h2', text: 'C. Penerapan pada Profesi' },
    { kind: 'p', text: 'Akuntan menyeimbangkan kepentingan klien (kerahasiaan) dengan kepentingan publik (transparansi). Ketika keduanya berbenturan, **kepentingan publik & kebenaran** menjadi prioritas profesional.' },
  ],
};

const tm7: Reading = {
  tm: 7, title: 'Review & Studi Kasus UTS', ref: 'Rangkuman TM 1–6',
  intro: 'Ikhtisar materi pra-UTS Etika Profesi: dari hakikat akuntansi, pengukuran, pengantar etika, kode etik, teori moral, hingga etika pengungkapan.',
  objectives: ['Menghubungkan seluruh konsep.', 'Menerapkan kerangka analisis kasus.', 'Mengantisipasi pola soal.'],
  blocks: [
    { kind: 'h2', text: 'A. Peta Materi' },
    { kind: 'table', headers: ['TM', 'Inti'], rows: [
      ['1', 'Hakikat akuntansi & true disclosure; cooking the books'],
      ['2', '4 laporan keuangan, nilai aset, 3 metode COGS, 5 peran akuntan'],
      ['3', 'Definisi etika, 2 dimensi (Duska), 3 tingkatan, alasan belajar etika'],
      ['4', 'AICPA 7 prinsip, 5 pertanyaan pembenar, dilema moral'],
      ['5', 'Teori moral: egoisme, utilitarianisme, deontologi, virtue'],
      ['6', 'Etika pengungkapan: 3 pertanyaan Duska'],
    ] },
    { kind: 'h2', text: 'B. Kerangka Analisis Kasus Etika' },
    { kind: 'ol', items: [
      'Identifikasi fakta & pihak yang terdampak (stakeholder).',
      'Identifikasi isu etis & aturan/kode yang relevan.',
      'Analisis dengan teori moral (utilitarian, deontologi, virtue).',
      'Pertimbangkan alternatif & konsekuensinya.',
      'Putuskan & beri alasan; uji dengan 5 pertanyaan pembenar.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Pola soal', text: 'Sering muncul: definisi & etimologi etika, beda teori moral, prinsip AICPA, dan analisis kasus "cooking the books"/independensi.' },
  ],
};

const tm8: Reading = {
  tm: 8, title: 'Hubungan Etika dengan Moral & Agama (termasuk Etika Bisnis Islam)', ref: 'RPS 8',
  intro: 'Etika, moral, dan agama saling terkait tetapi berbeda. Memahami relasinya membantu akuntan menavigasi nilai dalam konteks masyarakat yang beragam.',
  objectives: ['Membedakan etika, moral, dan agama.', 'Menjelaskan empat posisi hubungan etika-agama.', 'Menyebutkan aksioma etika bisnis Islam.'],
  blocks: [
    { kind: 'h2', text: 'A. Definisi Operasional' },
    { kind: 'ul', items: [
      '**Etika:** kajian rasional tentang baik–buruk.',
      '**Moral:** nilai & norma yang dianut/dipraktikkan masyarakat.',
      '**Agama:** sistem keyakinan yang juga memuat ajaran moral.',
    ] },
    { kind: 'h2', text: 'B. Empat Posisi Analitis (Etika & Agama)' },
    { kind: 'ol', items: [
      'Etika **bergantung penuh** pada agama.',
      'Etika **terpisah** dari agama (otonom).',
      'Etika & agama **saling melengkapi**.',
      'Etika & agama **kadang berbenturan** dan perlu dialog.',
    ] },
    { kind: 'h2', text: 'C. Aksioma Etika Bisnis Islam' },
    { kind: 'ul', items: [
      '**Tauhid (kesatuan):** kesadaran bahwa semua dipertanggungjawabkan kepada Tuhan.',
      '**Keseimbangan (’adl):** adil & proporsional.',
      '**Kehendak bebas (free will):** tanggung jawab atas pilihan.',
      '**Tanggung jawab (responsibility):** amanah atas perbuatan.',
      '**Kebajikan (ihsan):** berbuat baik melebihi kewajiban.',
    ] },
    { kind: 'callout', variant: 'info', title: 'Relevansi profesi', text: 'Nilai-nilai ini menguatkan integritas, kejujuran, dan keadilan yang juga menjadi inti kode etik akuntan profesional.' },
  ],
};

const tm9: Reading = {
  tm: 9, title: 'Sikap Etis: Diversity, Inclusion, Equity & Penghormatan Hak', ref: 'RPS 9',
  intro: 'Profesional etis menghormati hak semua orang dan merangkul keberagaman di tempat kerja modern.',
  objectives: ['Membedakan diversity, inclusion, equity.', 'Menjelaskan kerangka analisis hak.', 'Menerapkan sikap etis terhadap keberagaman.'],
  blocks: [
    { kind: 'h2', text: 'A. DEI' },
    { kind: 'table', headers: ['Konsep', 'Makna'], rows: [
      ['Diversity (keberagaman)', 'Adanya perbedaan (gender, suku, latar belakang) dalam organisasi'],
      ['Inclusion (inklusi)', 'Semua merasa dihargai & dilibatkan'],
      ['Equity (kesetaraan)', 'Memberi sesuai kebutuhan agar peluang adil (bukan sekadar sama rata)'],
    ] },
    { kind: 'h2', text: 'B. Kerangka Analisis Hak' },
    { kind: 'ul', items: [
      'Identifikasi hak yang terlibat (hak atas informasi, privasi, perlakuan adil).',
      'Pastikan tindakan tidak melanggar hak pihak lain.',
      'Seimbangkan hak yang berbenturan secara adil.',
    ] },
    { kind: 'callout', variant: 'key', title: 'Equality vs Equity', text: '**Equality** = perlakuan sama untuk semua. **Equity** = perlakuan disesuaikan kebutuhan agar hasil/peluang setara. Keduanya berbeda dan keduanya penting.' },
  ],
};

const tm10: Reading = {
  tm: 10, title: 'Kebutuhan Industri terhadap Keahlian Profesional Akuntan', ref: 'RPS 10',
  intro: 'Selain kompetensi teknis, industri menuntut keterampilan lunak dan sikap profesional. Bagian ini memetakan keahlian yang dicari pemberi kerja.',
  objectives: ['Membedakan hard skills, soft skills, professional attitude.', 'Menyebutkan kompetensi yang dicari HR.', 'Menyiapkan diri sesuai kebutuhan industri.'],
  blocks: [
    { kind: 'h2', text: 'A. Tiga Kelompok Keahlian' },
    { kind: 'table', headers: ['Kelompok', 'Contoh'], rows: [
      ['Hard skills', 'Akuntansi, perpajakan, software (Excel/ERP), analisis data'],
      ['Soft skills', 'Komunikasi, kerja tim, problem solving, manajemen waktu'],
      ['Professional attitude', 'Integritas, tanggung jawab, etos kerja, adaptif'],
    ] },
    { kind: 'h2', text: 'B. Kompetensi yang Dicari HR & User' },
    { kind: 'ul', items: [
      'Kemampuan analitis & berpikir kritis.',
      'Komunikasi tertulis & lisan yang jelas.',
      'Integritas & etika kerja.',
      'Kemampuan belajar (learning agility) di era digital.',
      'Kolaborasi lintas fungsi.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'T-shaped professional', text: 'Idealnya akuntan adalah **T-shaped**: dalam pada keahlian teknis akuntansi, sekaligus luas pada soft skills & wawasan bisnis.' },
  ],
};

const tm11: Reading = {
  tm: 11, title: 'Tata Kelola Perusahaan & Kepatuhan Etika Bisnis', ref: 'RPS 11',
  intro: 'Tata kelola perusahaan (corporate governance) memastikan perusahaan dikelola secara bertanggung jawab demi kepentingan pemangku kepentingan.',
  objectives: ['Menjelaskan prinsip tata kelola.', 'Membedakan agency, stakeholder, dan stewardship theory.', 'Mengaitkan governance dengan etika & kepatuhan.'],
  blocks: [
    { kind: 'h2', text: 'A. Prinsip Tata Kelola (TARIF)' },
    { kind: 'ul', items: [
      '**Transparency** (keterbukaan informasi).',
      '**Accountability** (akuntabilitas).',
      '**Responsibility** (tanggung jawab pada hukum & masyarakat).',
      '**Independency** (independensi pengambilan keputusan).',
      '**Fairness** (kesetaraan perlakuan pemangku kepentingan).',
    ] },
    { kind: 'h2', text: 'B. Tiga Teori Dasar' },
    { kind: 'table', headers: ['Teori', 'Inti'], rows: [
      ['Agency theory', 'Konflik kepentingan principal (pemilik) vs agent (manajer); perlu pengawasan & insentif'],
      ['Stakeholder theory', 'Perusahaan bertanggung jawab pada semua pemangku kepentingan, bukan hanya pemegang saham'],
      ['Stewardship theory', 'Manajer dipercaya bertindak sebagai "penatalayan" yang loyal pada kepentingan organisasi'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Peran akuntan', text: 'Akuntan & auditor adalah pilar governance: laporan yang andal & audit independen menekan masalah keagenan dan menjaga kepercayaan pasar.' },
  ],
};

const tm12: Reading = {
  tm: 12, title: 'Kepemimpinan Etis, Leadership 4.0 & Soft-Skilled Leadership', ref: 'RPS 12',
  intro: 'Pemimpin menentukan iklim etika organisasi. Di era digital, kepemimpinan menuntut adaptasi baru — Leadership 4.0.',
  objectives: ['Menjelaskan kepemimpinan & kepemimpinan etis.', 'Menjelaskan Leadership 4.0.', 'Menghubungkan soft skills dengan kepemimpinan.'],
  blocks: [
    { kind: 'h2', text: 'A. Kepemimpinan Etis' },
    { kind: 'p', text: '**Kepemimpinan** adalah proses memengaruhi orang untuk mencapai tujuan. **Kepemimpinan etis** menambahkan dimensi nilai: pemimpin menjadi **teladan moral**, mengambil keputusan adil, dan membangun budaya integritas ("tone at the top").' },
    { kind: 'h2', text: 'B. Leadership 4.0' },
    { kind: 'ul', items: [
      'Kepemimpinan di era Industri 4.0: digital, gesit (agile), berbasis data.',
      'Menekankan **kolaborasi**, **inovasi**, **pemberdayaan**, dan **adaptasi** terhadap perubahan cepat.',
      'Pemimpin sebagai fasilitator & coach, bukan sekadar pemberi perintah.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Soft-skilled leadership', text: 'Kepemimpinan modern bertumpu pada soft skills: empati, komunikasi, kecerdasan emosional, dan kemampuan membangun kepercayaan.' },
  ],
};

const tm13: Reading = {
  tm: 13, title: 'Atribut Komunikasi yang Diharapkan Industri', ref: 'RPS 13',
  intro: 'Akuntan tidak hanya mengolah angka, tetapi juga mengomunikasikan informasi keuangan secara jelas kepada beragam pihak.',
  objectives: ['Menyebutkan atribut komunikasi profesional.', 'Membedakan komunikasi lisan & tertulis efektif.', 'Mengaitkan komunikasi dengan etika.'],
  blocks: [
    { kind: 'h2', text: 'A. Atribut Komunikasi Profesional' },
    { kind: 'ul', items: [
      '**Jelas (clarity):** menyampaikan informasi kompleks secara sederhana.',
      '**Akurat:** sesuai fakta, tidak menyesatkan.',
      '**Ringkas (concise):** tepat sasaran tanpa bertele-tele.',
      '**Sesuai audiens:** menyesuaikan bahasa untuk manajemen, klien, atau regulator.',
      '**Mendengarkan aktif (active listening).**',
    ] },
    { kind: 'h2', text: 'B. Lisan vs Tertulis' },
    { kind: 'table', headers: ['Bentuk', 'Kunci efektif'], rows: [
      ['Tertulis (laporan, email)', 'Struktur rapi, bukti pendukung, bebas ambiguitas'],
      ['Lisan (presentasi, rapat)', 'Percaya diri, visual jelas, responsif pada pertanyaan'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Komunikasi = etika', text: 'Komunikasi yang menyesatkan (membesar-besarkan/menyembunyikan) adalah pelanggaran etika. Transparansi adalah bentuk komunikasi yang etis.' },
  ],
};

const tm14: Reading = {
  tm: 14, title: 'Integrasi Etika, Kepemimpinan & Komunikasi + Review', ref: 'RPS 14',
  intro: 'Penutup: menyatukan etika, kepemimpinan, dan komunikasi menjadi profil akuntan profesional yang utuh, lalu mengulas keseluruhan materi.',
  objectives: ['Mengintegrasikan tiga pilar profesionalisme.', 'Mengaitkan seluruh materi.', 'Menyiapkan diri menghadapi dunia kerja & UAS.'],
  blocks: [
    { kind: 'h2', text: 'A. Integrasi Tiga Pilar' },
    { kind: 'p', text: 'Akuntan profesional yang ideal menyatukan **etika** (kompas nilai), **kepemimpinan** (memengaruhi secara positif), dan **komunikasi** (menyampaikan kebenaran secara efektif). Ketiganya saling menguatkan dalam praktik nyata.' },
    { kind: 'h2', text: 'B. Peta Materi Pra-UAS' },
    { kind: 'table', headers: ['TM', 'Inti'], rows: [
      ['8', 'Etika, moral & agama; aksioma etika bisnis Islam'],
      ['9', 'Diversity, Inclusion, Equity & hak'],
      ['10', 'Hard/soft skills & professional attitude'],
      ['11', 'Tata kelola: agency, stakeholder, stewardship'],
      ['12', 'Kepemimpinan etis & Leadership 4.0'],
      ['13', 'Atribut komunikasi profesional'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Pesan kunci', text: 'Kompetensi teknis membuka pintu, tetapi **integritas, kepemimpinan, dan komunikasi** yang menentukan karier jangka panjang seorang akuntan.' },
  ],
};

export const AKA103_READINGS: Record<number, Reading> = {
  1: tm1, 2: tm2, 3: tm3, 4: tm4, 5: tm5, 6: tm6, 7: tm7,
  8: tm8, 9: tm9, 10: tm10, 11: tm11, 12: tm12, 13: tm13, 14: tm14,
};

// =============================================================
// SIMULASI UTS & UAS (Review Reading)
// Disusun mandiri dari TM 1–7 dan TM 8–14 yang sudah ada di file ini.
// Tidak mengimpor ekpaData.ts agar tetap tidak menambah konsumen baru.
// =============================================================

const AKA103_REVIEW_UTS_READING: Reading = {
  tm: 0,
  title: 'Simulasi UTS',
  ref: 'Rangkuman TM 1–7 + Studi Kasus + Jebakan Ujian',
  intro:
    'Review akhir Pra-UTS: rangkuman konsep inti TM 1–6, kerangka jawab kasus, jebakan ujian, dan kotak refleksi sebelum hari-H.',
  objectives: [
    'Meringkas tema utama TM 1–6 dalam satu kerangka jawaban etis.',
    'Mengenali jebakan ujian yang sering muncul pada esai dan kasus.',
    'Berlatih menjawab kasus dengan pola: prinsip → fakta → analisis → keputusan → tindakan korektif.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Peta Konsep TM 1–6' },
    { kind: 'table', headers: ['TM', 'Tema utama', 'Konsep yang harus hafal'], rows: [
      ['1', 'Hakikat Akuntansi & True Disclosure', 'Cooking the books, fungsi informasi, kepercayaan publik'],
      ['2', 'Pengukuran & Pelaporan', 'Nilai aset, COGS, batas estimasi vs manipulasi'],
      ['3', 'Pengantar Etika', 'Definisi etika, moral, dimensi & tingkatan etika'],
      ['4', 'Kode Etik AICPA', 'Integritas, objektivitas, kompetensi, kerahasiaan, perilaku profesional'],
      ['5', 'Teori Moral', 'Egoisme, utilitarianisme, deontologi — kapan dipakai'],
      ['6', 'Etika Pengungkapan', 'True disclosure pada profesi akuntan, whistleblowing'],
    ] },
    { kind: 'h2', text: 'B. Pola Jawaban Esai/Kasus (5 langkah)' },
    { kind: 'ol', items: [
      'Identifikasi **prinsip etika** yang relevan (AICPA / teori moral).',
      'Uraikan **fakta material** dari kasus tanpa penilaian.',
      'Lakukan **analisis** menggunakan teori yang dipilih + konteks profesi akuntan.',
      'Tarik **keputusan etis** yang konsisten dengan prinsip.',
      'Sebutkan **tindakan korektif & pencegahan** (kontrol, kebijakan, pelaporan).',
    ] },
    { kind: 'callout', variant: 'warning', title: 'Jebakan ujian Pra-UTS', text: 'Jangan menjawab kasus hanya dengan "harus jujur" tanpa menyebut prinsip AICPA / teori moral. Jangan rancukan etika dan hukum: tindakan legal belum tentu etis. Jangan abaikan stakeholder lain (kreditor, masyarakat, regulator) ketika menjawab "kepada siapa akuntan loyal".' },
    { kind: 'h2', text: 'C. Bank Studi Kasus Singkat' },
    { kind: 'example', title: 'Kasus 1 — Enron Cooking the Books', blocks: [
      { kind: 'p', text: '**Inti:** manajemen menggunakan SPE untuk menyembunyikan utang dan mengakui pendapatan fiktif.' },
      { kind: 'p', text: '**Pertanyaan ujian:** prinsip AICPA mana yang dilanggar, dan apa peran auditor eksternal?' },
      { kind: 'p', text: '**Kerangka jawab:** Integritas dan objektivitas dilanggar; auditor harus skeptis profesional, bukan kepanjangan tangan klien. Lihat juga teori deontologi: kebenaran sebagai kewajiban.' },
    ] },
    { kind: 'example', title: 'Kasus 2 — Tekanan Manajemen di Akhir Periode', blocks: [
      { kind: 'p', text: '**Inti:** atasan minta akuntan mengakui pendapatan sebelum kontrak ditandatangani agar target tahun ini tercapai.' },
      { kind: 'p', text: '**Pertanyaan ujian:** evaluasi tindakan tersebut dengan utilitarianisme vs deontologi.' },
      { kind: 'p', text: '**Kerangka jawab:** Utilitarianisme — jangka pendek manajer untung tetapi investor dan kreditor menanggung kerugian → net negatif. Deontologi — kewajiban menyajikan kebenaran tidak boleh dilanggar terlepas dari konsekuensi. Tindakan: tolak, eskalasi melalui jalur formal, dokumentasikan.' },
    ] },
    { kind: 'h2', text: 'D. Cek Diri Sebelum Ujian' },
    { kind: 'ol', items: [
      'Bisa membedakan etika, moral, hukum, dan agama dalam satu kalimat?',
      'Bisa menyebut 5 prinsip AICPA tanpa lihat?',
      'Bisa membandingkan utilitarianisme, deontologi, dan etika kebajikan dalam satu paragraf?',
      'Bisa membuat kerangka 5 langkah untuk satu kasus kontemporer (mis. greenwashing, manipulasi laporan ESG)?',
    ] },
    { kind: 'callout', variant: 'key', title: 'Mindset hari-H', text: 'Jawaban yang dinilai baik bukan yang terpanjang, melainkan yang **runtut**: prinsip → fakta → analisis → keputusan → tindakan.' },
  ],
};

const AKA103_REVIEW_UAS_READING: Reading = {
  tm: 15,
  title: 'Simulasi UAS',
  ref: 'Rangkuman TM 8–14 + Studi Kasus + Jebakan Ujian',
  intro:
    'Review akhir Pra-UAS: rangkuman tema-tema TM 8–14 (etika & agama, DEI, kompetensi industri, tata kelola, kepemimpinan, komunikasi, integrasi), jebakan ujian, dan kasus latihan.',
  objectives: [
    'Meringkas tema utama TM 8–14 dalam satu kerangka jawaban.',
    'Menghubungkan etika, kepemimpinan, dan komunikasi dengan praktik profesi akuntan.',
    'Berlatih menjawab kasus dengan kerangka stakeholder + governance.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Peta Konsep TM 8–14' },
    { kind: 'table', headers: ['TM', 'Tema utama', 'Konsep yang harus hafal'], rows: [
      ['8', 'Etika, Moral & Agama (termasuk Islam)', 'Empat posisi etika-agama, aksioma etika bisnis Islam (Tauhid, Adil, Free will, Tanggung jawab, Ihsan)'],
      ['9', 'Sikap Etis: DEI & Hak', 'Diversity, Inclusion, Equity; akomodasi agama & disabilitas; kerangka analisis hak'],
      ['10', 'Kebutuhan Industri', 'Hard skills, soft skills, professional attitude; ranking kompetensi yang dicari'],
      ['11', 'Tata Kelola & Etika Bisnis', 'Agency, stakeholder, stewardship; peran dewan & komite audit'],
      ['12', 'Kepemimpinan Etis', 'Effective vs ethical leader; Leadership 4.0; tone at the top'],
      ['13', 'Komunikasi Profesional', 'Komunikasi tertulis, oral, bukti, diplomasi profesional'],
      ['14', 'Integrasi Etika-Kepemimpinan-Komunikasi', 'Kerangka holistik akuntan profesional'],
    ] },
    { kind: 'h2', text: 'B. Pola Jawaban Esai/Kasus (5 langkah)' },
    { kind: 'ol', items: [
      'Identifikasi **prinsip / teori** (etika bisnis Islam, DEI, governance, kepemimpinan etis).',
      'Uraikan **fakta material** + pihak yang terdampak (stakeholder map).',
      'Lakukan **analisis** — hubungkan ke teori + konteks akuntan/auditor.',
      'Tarik **keputusan etis** yang dapat dipertanggungjawabkan.',
      'Sebutkan **tindakan korektif & pencegahan sistemik** (kontrol, kebijakan, komunikasi).',
    ] },
    { kind: 'callout', variant: 'warning', title: 'Jebakan ujian Pra-UAS', text: 'Jangan menjawab "perusahaan bebas membuat aturan apa pun" pada kasus DEI — kebebasan manajemen dibatasi prinsip nondiskriminasi. Jangan campur etika dan kepatuhan: pemimpin efektif belum tentu etis. Jangan lupakan **stakeholder publik** (regulator, masyarakat) saat menjawab tata kelola.' },
    { kind: 'h2', text: 'C. Bank Studi Kasus Singkat' },
    { kind: 'example', title: 'Kasus 1 — Fraud Garuda Indonesia', blocks: [
      { kind: 'p', text: '**Inti:** pengakuan pendapatan piutang dari Mahata diakui penuh meski belum cair; opini auditor menjadi sorotan.' },
      { kind: 'p', text: '**Pertanyaan ujian:** evaluasi peran dewan, komite audit, dan auditor eksternal dari sudut tata kelola.' },
      { kind: 'p', text: '**Kerangka jawab:** Dewan komisaris gagal melakukan oversight; komite audit tidak independen; auditor seharusnya skeptis terhadap pengakuan pendapatan tanpa arus kas. Hubungkan agency theory dan tone at the top.' },
    ] },
    { kind: 'example', title: 'Kasus 2 — Diskriminasi Agama dalam Rekrutmen', blocks: [
      { kind: 'p', text: '**Inti:** kandidat ditolak karena mengenakan atribut agama tertentu.' },
      { kind: 'p', text: '**Pertanyaan ujian:** evaluasi dari prinsip DEI dan hak pekerja.' },
      { kind: 'p', text: '**Kerangka jawab:** Perusahaan gagal membedakan kompetensi dan identitas; kebijakan tidak proporsional terhadap tujuan operasional; bertentangan dengan prinsip equity. Implikasi: risiko hukum, biaya gugatan, reputasi.' },
    ] },
    { kind: 'example', title: 'Kasus 3 — Presentasi Temuan Audit Sensitif', blocks: [
      { kind: 'p', text: '**Inti:** auditor menemukan invoice fiktif vendor; harus disampaikan ke direksi.' },
      { kind: 'p', text: '**Pertanyaan ujian:** susun pendekatan komunikasi profesional.' },
      { kind: 'p', text: '**Kerangka jawab:** Bahasa berbasis fakta + bukti; hindari tuduhan personal; jelaskan risiko hukum/reputasi; usulkan kontrol baru (pemisahan tugas, vendor master); jaga kerahasiaan + jalur eskalasi formal.' },
    ] },
    { kind: 'h2', text: 'D. Cek Diri Sebelum Ujian' },
    { kind: 'ol', items: [
      'Bisa menjelaskan 5 aksioma etika bisnis Islam dengan contoh praktik akuntan?',
      'Bisa membedakan diversity, inclusion, dan equity dalam satu paragraf?',
      'Bisa menyebut perbedaan agency, stakeholder, stewardship dalam tata kelola?',
      'Bisa membandingkan pemimpin efektif vs etis dalam satu kalimat?',
      'Bisa menyusun memo audit 1 paragraf yang faktual, sopan, dan menutup dengan rekomendasi?',
    ] },
    { kind: 'callout', variant: 'key', title: 'Mindset hari-H', text: 'Hubungkan **etika → kepemimpinan → komunikasi** — tiga pilar yang menjadi tema akhir TM 14. Jawaban yang terintegrasi lebih bernilai daripada jawaban yang menjawab satu pilar saja.' },
  ],
};

export const AKA103_REVIEW_READINGS: Partial<Record<'uts' | 'uas', Reading>> = {
  uts: AKA103_REVIEW_UTS_READING,
  uas: AKA103_REVIEW_UAS_READING,
};
