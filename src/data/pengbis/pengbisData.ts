// =============================================================
// src/data/readings/mnu101.ts
// Rangkuman KOMPREHENSIF — Pengantar Bisnis (MNU101)
// TM1–7 dari catatan UTS; TM8–14 dari RPS (model sama).
// Sumber: Pride, Foundations of Business (6th); Nickels, Understanding Business (13th).
// =============================================================
import type { Reading } from '../../types';

const tm1: Reading = {
  tm: 1,
  title: 'Business: Definisi, Siklus Bisnis, Sistem Ekonomi & Persaingan',
  ref: 'Pride Ch. 1 · Nickels Ch. 2',
  intro:
    'Bisnis adalah aktivitas terorganisasi untuk menghasilkan barang/jasa demi **laba** sambil memenuhi kebutuhan masyarakat. Untuk memahaminya, kita perlu membaca lingkungan ekonomi tempat bisnis beroperasi.',
  objectives: [
    'Mendefinisikan bisnis, laba, dan risiko.',
    'Menjelaskan tahap-tahap siklus bisnis.',
    'Membaca 5 indikator kondisi ekonomi.',
    'Membandingkan sistem ekonomi & jenis persaingan pasar.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Apa itu Bisnis?' },
    { kind: 'p', text: '**Bisnis** = upaya terorganisasi menyediakan barang & jasa yang diinginkan pelanggan untuk memperoleh **laba** (revenue − biaya). Laba adalah imbalan atas **risiko** yang ditanggung wirausaha.' },
    { kind: 'h2', text: 'B. Siklus Bisnis (Business Cycle)' },
    { kind: 'ol', items: [
      '**Expansion / Prosperity:** GDP naik, pengangguran rendah, konsumsi tinggi.',
      '**Peak:** titik tertinggi sebelum menurun.',
      '**Recession:** GDP turun 2+ kuartal berturut-turut; pengangguran naik.',
      '**Depression:** resesi parah & berkepanjangan (mis. Great Depression 1929).',
      '**Recovery:** ekonomi pulih kembali ke ekspansi.',
    ] },
    { kind: 'h2', text: 'C. 5 Indikator Kondisi Ekonomi' },
    { kind: 'table', headers: ['Indikator', 'Mengukur'], rows: [
      ['GDP', 'Total output; GDP = C + I + G + (X − M)'],
      ['Tingkat pengangguran', 'Friksional, struktural, siklikal; full employment ≈ 4–5%'],
      ['Tingkat inflasi', 'Kenaikan harga umum (CPI); ideal 2–3%'],
      ['Neraca perdagangan', 'Ekspor vs impor (surplus/defisit)'],
      ['Suku bunga', 'Biaya meminjam uang (kebijakan moneter)'],
    ], caption: 'Jembatan keledai: G-U-I-T-B (GDP, Unemployment, Inflation, Trade, Bunga).' },
    { kind: 'h2', text: 'D. Sistem Ekonomi & Persaingan' },
    { kind: 'ul', items: [
      '**Kapitalisme:** kepemilikan privat, kompetisi bebas, harga oleh pasar (AS).',
      '**Sosialisme:** sektor kunci dikuasai negara, kesejahteraan sosial kuat.',
      '**Komunisme:** seluruh sumber daya milik negara (Korea Utara).',
      '**Ekonomi campuran:** kombinasi pasar + intervensi pemerintah (Indonesia) — paling umum.',
    ] },
    { kind: 'table', headers: ['Jenis Persaingan', 'Ciri', 'Contoh'], rows: [
      ['Perfect competition', 'Banyak penjual, produk identik, bebas keluar-masuk', 'Komoditas pertanian'],
      ['Monopolistic competition', 'Banyak penjual, produk terdiferensiasi', 'Restoran, fashion'],
      ['Oligopoly', 'Sedikit pemain besar, saling bergantung, barrier tinggi', 'Telekomunikasi, otomotif'],
      ['Monopoly', 'Satu penjual, price maker, tanpa substitusi', 'PLN, PDAM'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Monopoli vs Oligopoli', text: 'Monopoli = **1 pemain** (kontrol harga penuh). Oligopoli = **beberapa pemain besar** yang saling memengaruhi (interdependensi), cenderung bersaing lewat iklan/inovasi, berisiko **kolusi**.' },
  ],
};

const tm2: Reading = {
  tm: 2,
  title: 'Etika Bisnis & Tanggung Jawab Sosial',
  ref: 'Pride Ch. 2 · Nickels Ch. 3',
  intro:
    'Etika bisnis adalah standar perilaku benar–salah dalam dunia usaha — melakukan yang **benar** bahkan ketika tidak ada hukum yang memaksa. Tanggung jawab sosial memperluasnya ke masyarakat & lingkungan.',
  objectives: [
    'Mendefinisikan etika & etika bisnis serta isu-isu utamanya.',
    'Menjelaskan 3 faktor yang memengaruhi perilaku etis.',
    'Membandingkan dua pandangan CSR & menjelaskan green business.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Isu Etika Utama' },
    { kind: 'ul', items: [
      '**Conflict of interest**, **fairness & honesty**, **false advertising**, **insider trading**, **relationship exploitation**.',
      'Muncul dengan: investor (manipulasi laporan), pelanggan (kualitas palsu), karyawan (diskriminasi), pemasok, pesaing (predatory pricing).',
    ] },
    { kind: 'h2', text: 'B. 3 Faktor Perilaku Etis' },
    { kind: 'ol', items: [
      '**Individual factors:** nilai pribadi, karakter moral, pendidikan etika, agama.',
      '**Social factors:** budaya organisasi, tekanan rekan (peer pressure), budaya industri.',
      '**Opportunity:** seberapa besar peluang melanggar tanpa ketahuan.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Tone at the top', text: 'Iklim etika perusahaan ditentukan dari atas. Code of ethics yang kuat + manajemen puncak berintegritas → budaya etis menyebar ke bawah.' },
    { kind: 'h2', text: 'C. Mendorong Perilaku Etis' },
    { kind: 'ul', items: [
      '**Government:** regulasi (mis. Sarbanes-Oxley Act 2002 pasca Enron — CEO menandatangani laporan secara personal).',
      '**Code of ethics**, **whistle-blowing** (dilindungi hukum), **ethics training**.',
    ] },
    { kind: 'h2', text: 'D. Tanggung Jawab Sosial (CSR)' },
    { kind: 'table', headers: ['Pandangan', 'Inti'], rows: [
      ['Economic model (Friedman)', 'Tanggung jawab bisnis = maksimalkan laba untuk pemegang saham'],
      ['Socioeconomic model', 'Bisnis bertanggung jawab pada masyarakat, lingkungan, & generasi mendatang'],
    ] },
    { kind: 'ul', items: [
      '**Green business:** meminimalkan dampak lingkungan (energi terbarukan, kurangi limbah). Contoh: Tesla, Patagonia, IKEA.',
      '**Social audit:** evaluasi berkala atas kinerja sosial & CSR perusahaan.',
    ] },
  ],
};

const tm3: Reading = {
  tm: 3,
  title: 'Bisnis Skala Global',
  ref: 'Pride Ch. 3 · Nickels Ch. 4',
  intro:
    'Globalisasi membuka pasar dunia. Bab ini menjelaskan dasar perdagangan internasional, cara memasuki pasar global, dan hambatan yang menghadang.',
  objectives: [
    'Membedakan keunggulan absolut & komparatif.',
    'Mengurutkan metode masuk pasar internasional berdasarkan risiko.',
    'Mengidentifikasi hambatan perdagangan internasional.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Dasar Perdagangan' },
    { kind: 'ul', items: [
      '**Absolute advantage:** mampu memproduksi lebih efisien secara absolut (mis. Arab Saudi — minyak).',
      '**Comparative advantage:** berspesialisasi pada produk dengan **opportunity cost terendah** — dasar utama perdagangan.',
    ] },
    { kind: 'h2', text: 'B. Metode Masuk Pasar Internasional (urut risiko ↑)' },
    { kind: 'table', headers: ['Metode', 'Risiko', 'Kontrol', 'Contoh'], rows: [
      ['Exporting', 'Rendah', 'Rendah', 'Batik ke Eropa'],
      ['Licensing', 'Rendah', 'Rendah', 'Disney → produsen mainan'],
      ['Franchising', 'Sedang', 'Sedang', "McDonald's, KFC"],
      ['Contract manufacturing', 'Sedang', 'Sedang', 'Apple → Foxconn'],
      ['Strategic alliance', 'Sedang', 'Bersama', 'Star Alliance'],
      ['Joint venture', 'Sedang–Tinggi', 'Bersama', 'Toyota + Astra'],
      ['Direct investment (FDI)', 'Tinggi', 'Penuh', 'Pabrik Toyota di Indonesia'],
    ] },
    { kind: 'h2', text: 'C. Hambatan Perdagangan' },
    { kind: 'table', headers: ['Hambatan', 'Penjelasan'], rows: [
      ['Tariff', 'Pajak atas barang impor'],
      ['Import quota', 'Batas kuantitas impor'],
      ['Embargo', 'Larangan total perdagangan (alasan politik)'],
      ['Exchange controls', 'Pembatasan penggunaan mata uang asing'],
      ['Dumping', 'Ekspor di bawah harga domestik untuk merusak pasar lawan'],
    ] },
  ],
};

const tm4: Reading = {
  tm: 4,
  title: 'Bentuk Kepemilikan Bisnis & Kewirausahaan',
  ref: 'Pride Ch. 4–5 · Nickels Ch. 5',
  intro:
    'Memilih bentuk kepemilikan menentukan tanggung jawab hukum, pajak, akses modal, dan kelangsungan usaha. Bab ini juga membahas kewirausahaan & waralaba.',
  objectives: [
    'Membandingkan tiga bentuk kepemilikan utama.',
    'Menjelaskan keunggulan & kelemahan masing-masing.',
    'Menjelaskan franchising & kewirausahaan.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Tiga Bentuk Kepemilikan' },
    { kind: 'table', headers: ['Bentuk', 'Keunggulan', 'Kelemahan'], rows: [
      ['Sole proprietorship', 'Mudah didirikan, kontrol penuh, semua laba milik sendiri, pajak sederhana', 'Unlimited liability, modal & keahlian terbatas, usaha berakhir jika pemilik tiada'],
      ['Partnership', 'Modal & keahlian gabungan, mudah didirikan, beban berbagi', 'Unlimited liability (umum), potensi konflik, laba dibagi'],
      ['Corporation (PT)', 'Limited liability, modal besar (saham), kontinuitas, transfer kepemilikan mudah', 'Pendirian rumit & mahal, pajak ganda, regulasi ketat'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Limited vs Unlimited liability', text: 'Pada **perseorangan & persekutuan umum**, utang bisnis = utang pribadi (aset pribadi berisiko). Pada **korporasi**, tanggung jawab pemegang saham terbatas pada modal yang disetor.' },
    { kind: 'h2', text: 'B. Bentuk Lain' },
    { kind: 'ul', items: [
      '**Joint venture & sindikat:** kerja sama untuk proyek/tujuan tertentu.',
      '**Franchising:** franchisor memberi hak memakai merek & sistem kepada franchisee dengan imbalan fee/royalti (mis. KFC). Risiko lebih rendah, sistem teruji.',
    ] },
    { kind: 'h2', text: 'C. Kewirausahaan' },
    { kind: 'p', text: '**Wirausaha** menanggung risiko untuk menciptakan nilai & inovasi. UMKM menjadi tulang punggung ekonomi (lapangan kerja, inovasi, fleksibilitas), meski menghadapi tantangan modal & manajemen.' },
  ],
};

const tm5: Reading = {
  tm: 5,
  title: 'Proses Manajemen',
  ref: 'Pride Ch. 6 · Nickels Ch. 7',
  intro:
    'Manajemen adalah proses mencapai tujuan organisasi melalui sumber daya secara efektif & efisien. Inti prosesnya: empat fungsi dasar manajemen.',
  objectives: [
    'Menyebutkan empat fungsi dasar manajemen.',
    'Membedakan tingkatan & keterampilan manajer (model Katz).',
    'Mengenali gaya kepemimpinan & pengambilan keputusan.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Empat Fungsi Dasar (POLC)' },
    { kind: 'ol', items: [
      '**Planning:** menetapkan tujuan & strategi.',
      '**Organizing:** menyusun sumber daya & struktur.',
      '**Leading (directing):** memotivasi & mengarahkan orang.',
      '**Controlling:** mengukur kinerja & koreksi.',
    ] },
    { kind: 'h2', text: 'B. Tingkatan Manajer & Keterampilan Katz' },
    { kind: 'table', headers: ['Keterampilan', 'Paling penting bagi'], rows: [
      ['Technical skills', 'Manajer lini pertama (first-line)'],
      ['Human (interpersonal) skills', 'Semua tingkatan'],
      ['Conceptual skills', 'Manajer puncak (top)'],
    ] },
    { kind: 'h2', text: 'C. Kepemimpinan & Keputusan' },
    { kind: 'ul', items: [
      'Gaya kepemimpinan: **autocratic**, **democratic/participative**, **free-rein (laissez-faire)**.',
      '**Empowering workers:** mendelegasikan wewenang agar karyawan ikut mengambil keputusan.',
      'Pengambilan keputusan rasional: definisikan masalah → cari alternatif → evaluasi → pilih → implementasi → kontrol.',
    ] },
  ],
};

const tm6: Reading = {
  tm: 6,
  title: 'Organisasi yang Fleksibel',
  ref: 'Pride Ch. 7 · Nickels Ch. 8',
  intro:
    'Setelah merencanakan, manajer menyusun **struktur organisasi**: bagaimana pekerjaan dibagi, dikelompokkan, dan dikoordinasikan agar gesit menghadapi perubahan.',
  objectives: [
    'Menjelaskan job design & departemensiasi.',
    'Membedakan sentralisasi, desentralisasi, & rentang kendali.',
    'Mengenali struktur organisasi & organisasi virtual.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Pembagian & Pengelompokan Kerja' },
    { kind: 'ul', items: [
      '**Job design** & spesialisasi: memecah pekerjaan agar efisien.',
      '**Delegasi:** pelimpahan wewenang; **sentralisasi** vs **desentralisasi** keputusan.',
      '**Span of management (rentang kendali):** jumlah bawahan yang diawasi satu manajer.',
    ] },
    { kind: 'h2', text: 'B. 5 Jenis Departementalisasi' },
    { kind: 'ol', items: [
      '**Functional** (per fungsi: pemasaran, keuangan).',
      '**Product** (per lini produk).',
      '**Geographic** (per wilayah).',
      '**Customer** (per segmen pelanggan).',
      '**Process** (per tahap proses produksi).',
    ] },
    { kind: 'h2', text: 'C. Struktur & Tren' },
    { kind: 'ul', items: [
      'Struktur: **line**, **line-and-staff**, **matrix**, **tim lintas fungsi**.',
      '**Organisasi virtual:** jaringan perusahaan independen yang bekerja sama via teknologi — fleksibel & ramping.',
    ] },
  ],
};

const tm7: Reading = {
  tm: 7,
  title: 'Memproduksi Barang & Jasa Berkualitas',
  ref: 'Pride Ch. 8 · Nickels Ch. 9',
  intro:
    'Manajemen operasi mengubah input menjadi output bernilai. Fokusnya: merencanakan produksi, mengendalikan operasi, dan menjaga **kualitas** & produktivitas.',
  objectives: [
    'Menjelaskan proses produksi/konversi.',
    'Menjelaskan perencanaan & pengendalian operasi.',
    'Mengenali metode pengendalian kualitas.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Proses Produksi (Konversi)' },
    { kind: 'p', text: 'Operasi mengubah **input** (bahan, tenaga kerja, modal) menjadi **output** (barang/jasa). Keputusan kunci: lokasi pabrik, tata letak (layout), perencanaan kapasitas, dan manajemen rantai pasok.' },
    { kind: 'h2', text: 'B. Perencanaan & Pengendalian Operasi' },
    { kind: 'ul', items: [
      'Perencanaan: peramalan permintaan, penjadwalan (mis. Gantt/PERT), MRP.',
      'Pengendalian operasi: memastikan produksi tepat waktu, jumlah, & biaya.',
      '**Teknologi & otomasi** meningkatkan produktivitas.',
    ] },
    { kind: 'h2', text: 'C. Pengendalian Kualitas' },
    { kind: 'ul', items: [
      '**TQM (Total Quality Management):** kualitas tanggung jawab semua orang, perbaikan berkelanjutan.',
      '**Six Sigma:** menekan cacat hingga sangat minim (3,4 per juta).',
      '**PDCA (Plan-Do-Check-Act)** & **ISO 9000:** standar & siklus perbaikan mutu.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Kualitas vs biaya', text: 'Investasi pada pencegahan kualitas menurunkan biaya kegagalan (retur, garansi, reputasi) yang jauh lebih mahal di kemudian hari.' },
  ],
};


export const MNU101_TM1_7_READINGS: Record<number, Reading> = {
  1: tm1, 2: tm2, 3: tm3, 4: tm4, 5: tm5, 6: tm6, 7: tm7,
};

const MNU101_REVIEW_UAS_READING: Reading = {
  tm: 15,
  title: 'Bocoran UAS Pengantar Bisnis',
  ref: 'UAS 2024 / Pra-UAS TM 8-14',
  intro: 'Bocoran poin-poin utama ujian TM8-14 beserta kesalahan umum mahasiswa dan analisis real case dari ujian sebelumnya.',
  objectives: ['Menganalisis case Chobani, Dunkin Donuts, Dominos, FedEx, Zappos', 'Mampu menghindari jebakan job description vs job specification', 'Menerapkan bauran pemasaran (4P) dalam menjawab esai'],
  blocks: [
    { kind: 'h2', text: 'A. Jebakan Umum / Kesalahan Esai' },
    { kind: 'callout', variant: 'warning', title: 'Job Description vs Job Specification', text: 'Banyak mahasiswa tertukar. **Job Description** berisi tentang *pekerjaan* (tugas, tanggung jawab, target). Sedangkan **Job Specification** berisi tentang *orangnya* (pendidikan, keahlian, karakter).' },
    { kind: 'callout', variant: 'warning', title: 'Pricing Strategy', text: 'Harga tidak berdiri sendiri. Saat menjawab esai pricing, harus dikaitkan dengan target market, tahapan Product Life Cycle, dan positioning. Jangan menjawab "hanya ikut harga pasar".' },
    { kind: 'h2', text: 'B. Analisis Kasus Esai (High Probability)' },
    { kind: 'example', title: 'HRM - Kasus Chobani', blocks: [
      { kind: 'p', text: '**Fokus:** Menarik, mempertahankan, dan memotivasi karyawan sambil menjaga growth bisnis.' },
      { kind: 'p', text: '**Kerangka Jawaban:** Gaji saja tidak cukup (itu hygiene factor). Perusahaan perlu career path, pengakuan, empowermen, dan budaya inklusif.' }
    ]},
    { kind: 'example', title: 'Marketing - Kasus Dunkin Donuts', blocks: [
      { kind: 'p', text: '**Fokus:** Mempertahankan relevansi di pasar F&B.' },
      { kind: 'p', text: '**Kerangka Jawaban:** Harus bahas STP (Segmentation, Targeting, Positioning). Value proposition Dunkin: cepat, affordable, mudah diakses. Hubungkan dengan CRM dan CLV (Customer Lifetime Value).' }
    ]},
    { kind: 'example', title: 'Product & Pricing - Kasus Dominos', blocks: [
      { kind: 'p', text: '**Fokus:** Penciptaan produk dan strategi harga.' },
      { kind: 'p', text: '**Kerangka Jawaban:** Hubungkan bauran produk (Product Mix) dan tahapan PLC (Product Life Cycle). Jika di tahap maturity, terapkan discount selektif dan diferensiasi.' }
    ]},
    { kind: 'example', title: 'Distribution - Kasus FedEx', blocks: [
      { kind: 'p', text: '**Fokus:** Saluran distribusi (Place) dan SCM.' },
      { kind: 'p', text: '**Kerangka Jawaban:** Bahas enam utilities dan intermediasi. Rantai pasok (Supply Chain) yang tangguh jadi kunci nilai lebih ke pelanggan.' }
    ]},
    { kind: 'example', title: 'E-Business - Kasus Zappos', blocks: [
      { kind: 'p', text: '**Fokus:** E-commerce dan kepuasan pelanggan.' },
      { kind: 'p', text: '**Kerangka Jawaban:** Strategi sosial media, CRM yang berbasis pada teknologi, dan layanan after-sales untuk memenangkan loyalitas pelanggan di dunia online.' }
    ]}
  ]
};

export const MNU101_REVIEW_READINGS: Partial<Record<'uts' | 'uas', Reading>> = {
  uas: MNU101_REVIEW_UAS_READING
};
