import type { ContentBlock, Reading } from '../../../types';

const CHARLESTON_PARTIAL_YEAR_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Latihan — Charleston, SA: Depresiasi Sebagian Periode (P10.2, Kieso p. 914)',
  prompt: 'Charleston, SA membeli peralatan pada **1 Juni 2025** seharga €89.000. Nilai residu €5.000 dan umur manfaat 7 tahun. Hitung beban depresiasi 2025 dan 2026 dengan metode garis lurus, jumlah angka tahun (SYD), dan saldo menurun ganda (DDB), lalu buat jurnal 31 Desember 2025.',
  blocks: [
    {
      kind: 'p',
      text: 'Dasar depresiasi = €89.000 − €5.000 = €84.000. Periode kepemilikan 2025 (1 Juni–31 Desember) = **7 bulan**.'
    },
    {
      kind: 'table',
      headers: ['Metode', 'Perhitungan', 'Beban 2025', 'Beban 2026'],
      rows: [
        ['Garis lurus', '€84.000 ÷ 7 = €12.000 per tahun; 2025: €12.000 × 7/12', '€7.000', '€12.000'],
        ['Jumlah angka tahun (SYD)', 'S = 7 × 8 ÷ 2 = 28. Service year 1 = €84.000 × 7/28 = €21.000; service year 2 = €84.000 × 6/28 = €18.000', '€21.000 × 7/12 = €12.250', '(€21.000 × 5/12) + (€18.000 × 7/12) = €8.750 + €10.500 = €19.250'],
        ['Saldo menurun ganda (DDB)', 'Tarif 2/7; residu diabaikan di awal. 2025: €89.000 × 2/7 × 7/12 = €89.000 ÷ 6', '€14.833,33 ≈ €14.833', 'Nilai buku awal 2026 €89.000 − €14.833,33 = €74.166,67; × 2/7 = €21.190,48 ≈ €21.190']
      ],
      caption: 'Service year 1 berjalan 1 Juni 2025–31 Mei 2026; service year 2 berjalan 1 Juni 2026–31 Mei 2027.'
    },
    {
      kind: 'formula',
      text: '\\text{SYD 2026}=\\left(\\text{€21.000}\\times\\frac{5}{12}\\right)+\\left(\\text{€18.000}\\times\\frac{7}{12}\\right)=\\text{€19.250}\\\\\\text{DDB 2025}=\\text{€89.000}\\times\\frac{2}{7}\\times\\frac{7}{12}=\\text{€14.833,33}'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — garis lurus (7 bulan)',
      lines: [
        { account: 'Depreciation Expense', debit: '€7.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€7.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — SYD (€21.000 × 7/12)',
      lines: [
        { account: 'Depreciation Expense', debit: '€12.250' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€12.250', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — DDB (€89.000 × 2/7 × 7/12, dibulatkan)',
      lines: [
        { account: 'Depreciation Expense', debit: '€14.833' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€14.833', isCredit: true }
      ]
    }
  ]
};

const lockardJournal = (caption: string, amount: string): ContentBlock => ({
  kind: 'journal',
  caption,
  lines: [
    { account: 'Depreciation Expense', debit: amount },
    { account: 'Accumulated Depreciation—Machinery', credit: amount, isCredit: true }
  ]
});

const LOCKARD_FIRST_YEAR_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Kuis Kelas — Lockard SE: Depresiasi Tahun Pertama (BE10.2–BE10.4, Kieso p. 898)',
  prompt: 'Lockard SE membeli mesin pada **1 Januari 2025** seharga €80.000. Nilai residu €8.000 dan umur manfaat 8 tahun. Hitung beban depresiasi 2025 dengan (BE10.2) garis lurus, (BE10.3) jumlah angka tahun (SYD), dan (BE10.4) saldo menurun ganda (DDB). Untuk bagian (b), asumsikan mesin dibeli **1 September 2025** (garis lurus), **1 April 2025** (SYD), dan **1 Oktober 2025** (DDB). Buat jurnal penyesuaian 31 Desember 2025.',
  blocks: [
    {
      kind: 'p',
      text: 'Dasar depresiasi = €80.000 − €8.000 = €72.000. Bagian (a) memakai setahun penuh; bagian (b) memakai bulan pemakaian sampai 31 Desember 2025.'
    },
    {
      kind: 'table',
      headers: ['Soal', 'Beban tahun pertama pemakaian', '(a) 1 Januari 2025', '(b) Pembelian tengah tahun'],
      rows: [
        ['BE10.2 garis lurus', '€72.000 ÷ 8 = €9.000', '€9.000', '1 September: €9.000 × 4/12 = €3.000'],
        ['BE10.3 SYD', 'S = 8 × 9 ÷ 2 = 36; €72.000 × 8/36 = €16.000', '€16.000', '1 April: €16.000 × 9/12 = €12.000'],
        ['BE10.4 DDB', 'Tarif 2/8 = 25%; €80.000 × 25% = €20.000', '€20.000', '1 Oktober: €20.000 × 3/12 = €5.000']
      ],
      caption: 'Pada DDB residu €8.000 tidak dikurangkan; nilai buku akhir 2025 (€60.000 atau €75.000) masih di atas batas residu.'
    },
    {
      kind: 'formula',
      text: '\\text{SYD (b)}=\\text{€72.000}\\times\\frac{8}{36}\\times\\frac{9}{12}=\\text{€12.000}\\\\\\text{DDB (b)}=\\text{€80.000}\\times\\frac{2}{8}\\times\\frac{3}{12}=\\text{€5.000}'
    },
    { kind: 'h3', text: 'Jurnal penyesuaian 31 Desember 2025' },
    lockardJournal('BE10.2 (a) — garis lurus setahun penuh (€72.000 ÷ 8)', '€9.000'),
    lockardJournal('BE10.2 (b) — garis lurus 4 bulan (€9.000 × 4/12)', '€3.000'),
    lockardJournal('BE10.3 (a) — SYD setahun penuh (€72.000 × 8/36)', '€16.000'),
    lockardJournal('BE10.3 (b) — SYD 9 bulan (€16.000 × 9/12)', '€12.000'),
    lockardJournal('BE10.4 (a) — DDB setahun penuh (€80.000 × 25%)', '€20.000'),
    lockardJournal('BE10.4 (b) — DDB 3 bulan (€20.000 × 3/12)', '€5.000')
  ]
};

const EVERLY_DEPLETION_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Kuis Kelas — Everly Corporation: Dasar dan Tarif Deplesi (BE10.10, Kieso p. 899)',
  prompt: 'Everly Corporation membeli tambang batubara seharga \\$400.000. Biaya pengembangan tidak berwujud \\$100.000, estimasi kewajiban restorasi lingkungan \\$80.000, dan tanah bekas tambang diperkirakan dapat dijual \\$160.000. Estimasi cadangan 4.000 ton; pada tahun pertama diekstraksi 700 ton. Hitung dasar deplesi, tarif per ton, deplesi tahun pertama, dan jurnalnya.',
  blocks: [
    {
      kind: 'formula',
      text: '\\text{Dasar deplesi}=\\text{USD }400.000+\\text{USD }100.000+\\text{USD }80.000-\\text{USD }160.000=\\text{USD }420.000\\\\\\text{Tarif per ton}=\\frac{\\text{USD }420.000}{4.000\\text{ ton}}=\\text{USD }105\\text{ per ton}\\\\\\text{Deplesi tahun pertama}=700\\text{ ton}\\times\\text{USD }105=\\text{USD }73.500'
    },
    {
      kind: 'journal',
      caption: 'Deplesi 700 ton dikapitalisasi ke persediaan batubara',
      lines: [
        { account: 'Inventory (Coal)', debit: '$73.500' },
        { account: 'Accumulated Depletion—Coal Mine', credit: '$73.500', isCredit: true }
      ]
    }
  ]
};

const HENRIK_DEPLETION_CASE: ContentBlock = {
  kind: 'example',
  title: 'Henrik Mining — Deplesi ke Persediaan dan Beban Pokok Penjualan (E10.22, Kieso p. 911)',
  blocks: [
    {
      kind: 'p',
      text: 'Tanah tambang dibeli €1.250.000 dengan estimasi cadangan 60.000 ton. Estimasi kewajiban restorasi €90.000, nilai jual tanah setelah penambangan €100.000, dan biaya pengembangan €200.000. Pada 2025 diekstraksi 30.000 ton dan dijual 24.000 ton.'
    },
    {
      kind: 'formula',
      text: '\\text{Dasar deplesi}=\\text{€1.250.000}+\\text{€200.000}+\\text{€90.000}-\\text{€100.000}=\\text{€1.440.000}\\\\\\text{Tarif per ton}=\\frac{\\text{€1.440.000}}{60.000\\text{ ton}}=\\text{€24}\\\\\\text{Deplesi 2025}=30.000\\times\\text{€24}=\\text{€720.000}'
    },
    {
      kind: 'table',
      headers: ['Alokasi', 'Ton', 'Jumlah'],
      rows: [
        ['Persediaan mineral 31 Des 2025', '30.000 − 24.000 = 6.000', '6.000 × €24 = €144.000'],
        ['Beban pokok penjualan 2025', '24.000', '24.000 × €24 = €576.000'],
        ['Total deplesi 2025', '30.000', '€144.000 + €576.000 = €720.000']
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — cost mineral yang terjual (24.000 ton × €24)',
      lines: [
        { account: 'Cost of Goods Sold', debit: '€576.000' },
        { account: 'Inventory (Minerals)', credit: '€576.000', isCredit: true }
      ]
    }
  ]
};

const PUJOLS_IMPAIRMENT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Pujols SpA: Impairment, Depresiasi Baru, dan Pemulihan (E10.18, Kieso p. 910)',
  prompt: 'Per 31 Desember 2025 peralatan Pujols SpA memiliki cost €9.000.000 dan akumulasi depresiasi €1.000.000. Value-in-use €7.000.000; fair value less costs of disposal €4.400.000. Sisa umur 4 tahun, residu €0. Pada 31 Desember 2026 recoverable amount menjadi €6.000.000. (a) Jurnal impairment 2025. (b) Depresiasi 2026. (c) Jurnal pemulihan 2026.',
  blocks: [
    { kind: 'h3', text: '(a) Rugi penurunan nilai 31 Desember 2025' },
    {
      kind: 'formula',
      text: '\\text{Carrying amount}=\\text{€9.000.000}-\\text{€1.000.000}=\\text{€8.000.000}\\\\\\text{Recoverable amount}=\\max(\\text{€7.000.000},\\text{€4.400.000})=\\text{€7.000.000}\\\\\\text{Loss on impairment}=\\text{€8.000.000}-\\text{€7.000.000}=\\text{€1.000.000}'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — nilai tercatat baru €7.000.000',
      lines: [
        { account: 'Loss on Impairment', debit: '€1.000.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€1.000.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(b) Depresiasi 2026' },
    { kind: 'formula', text: '\\text{Depresiasi 2026}=\\frac{\\text{€7.000.000}}{4}=\\text{€1.750.000}\\\\\\text{Nilai tercatat sebelum pemulihan}=\\text{€7.000.000}-\\text{€1.750.000}=\\text{€5.250.000}' },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — depresiasi atas dasar baru',
      lines: [
        { account: 'Depreciation Expense', debit: '€1.750.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€1.750.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(c) Pemulihan dengan batas atas (ceiling)' },
    {
      kind: 'formula',
      text: '\\text{Depresiasi tanpa impairment}=\\frac{\\text{€8.000.000}}{4}=\\text{€2.000.000}\\\\\\text{Ceiling 31 Des 2026}=\\text{€8.000.000}-\\text{€2.000.000}=\\text{€6.000.000}\\\\\\text{Pemulihan}=\\text{€6.000.000}-\\text{€5.250.000}=\\text{€750.000}',
      note: 'Recoverable amount €6.000.000 sama dengan ceiling tanpa impairment €6.000.000, sehingga pemulihan diakui penuh.'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — nilai tercatat akhir €5.250.000 + €750.000 = €6.000.000',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '€750.000' },
        { account: 'Recovery of Impairment Loss', credit: '€750.000', isCredit: true }
      ]
    }
  ]
};

const FALCETTO_REVALUATION_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Falcetto Company: Revaluasi dengan Penurunan (E10.27, Kieso p. 911)',
  prompt: 'Falcetto Company membeli peralatan pada 1 Januari 2024 seharga €12.000, umur 6 tahun, residu €0, garis lurus (€2.000 per tahun), dan memakai model revaluasi. Nilai wajar pada 31 Desember 2024 dan 2026 mendekati nilai tercatat; nilai wajar 31 Desember 2025 = €7.000. Susun jurnal 2024, 2025, dan depresiasi 2026.',
  blocks: [
    { kind: 'h3', text: 'Tahun 2024' },
    {
      kind: 'journal',
      caption: '1 Januari 2024 — pembelian',
      lines: [
        { account: 'Equipment', debit: '€12.000' },
        { account: 'Cash', credit: '€12.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2024 — depresiasi; nilai tercatat €10.000, tanpa jurnal revaluasi',
      lines: [
        { account: 'Depreciation Expense', debit: '€2.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€2.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Tahun 2025' },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — depresiasi',
      lines: [
        { account: 'Depreciation Expense', debit: '€2.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€2.000', isCredit: true }
      ]
    },
    {
      kind: 'formula',
      text: '\\text{Akumulasi depresiasi}=\\text{€2.000}+\\text{€2.000}=\\text{€4.000}\\\\\\text{Nilai tercatat sebelum revaluasi}=\\text{€12.000}-\\text{€4.000}=\\text{€8.000}\\\\\\text{Defisit revaluasi}=\\text{€8.000}-\\text{€7.000}=\\text{€1.000}',
      note: 'Belum ada surplus revaluasi sebelumnya, sehingga defisit €1.000 didebit ke laba rugi sebagai Loss on Revaluation (Kieso Appendix 10A, pp. 876, 880).'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — metode eliminasi: akumulasi depresiasi ke nol, Equipment €12.000 − €5.000 = €7.000',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '€4.000' },
        { account: 'Loss on Revaluation', debit: '€1.000' },
        { account: 'Equipment', credit: '€5.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Tahun 2026' },
    { kind: 'formula', text: '\\text{Sisa umur}=6-2=4\\text{ tahun}\\\\\\text{Depresiasi 2026}=\\frac{\\text{€7.000}}{4}=\\text{€1.750}' },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — depresiasi atas nilai wajar revaluasian',
      lines: [
        { account: 'Depreciation Expense', debit: '€1.750' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€1.750', isCredit: true }
      ]
    }
  ]
};

const EASTMAN_RATIO_CASE: ContentBlock = {
  kind: 'example',
  title: 'Eastman plc — Analisis Rasio Aset (E10.28, Kieso p. 912)',
  blocks: [
    {
      kind: 'p',
      text: 'Dalam jutaan £: total aset akhir tahun berjalan £13.659, total aset awal tahun £14.320, penjualan neto £10.301, dan laba bersih £676.'
    },
    {
      kind: 'formula',
      text: '\\text{Rata-rata total aset}=\\frac{\\text{£13.659}+\\text{£14.320}}{2}=\\text{£13.989,50 juta}\\\\\\text{Asset turnover}=\\frac{\\text{£10.301}}{\\text{£13.989,50}}=0{,}736\\text{ kali}\\\\\\text{Profit margin}=\\frac{\\text{£676}}{\\text{£10.301}}=6{,}562\\%\\\\\\text{ROA}=\\frac{\\text{£676}}{\\text{£13.989,50}}=4{,}832\\%'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Verifikasi DuPont',
      text: 'Asset turnover × profit margin = 0,7363 × 0,065625 = 0,04832 (4,832%), sama dengan ROA.'
    }
  ]
};

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi',
  ref: 'Kieso IFRS 5e Ch. 10 (pp. 838–916) & Appendix 10A | IAS 16, IAS 36, IFRS 6, IAS 37',
  intro: 'TM3 membahas pengukuran aset tetap setelah perolehan: mengalokasikan cost melalui depresiasi (termasuk sebagian periode), menghitung deplesi sumber daya alam, menguji dan memulihkan penurunan nilai aset individual, menerapkan model revaluasi dasar, lalu menganalisis penyajian dan rasio aset. Soal dosen E10.18 dan E10.27, kuis kelas BE10.2–BE10.4 (Lockard SE) dan BE10.10, serta latihan P10.2 dibahas langkah demi langkah.',
  objectives: [
    'Menjelaskan depresiasi sebagai alokasi cost dan tiga faktor penentu beban depresiasi.',
    'Menghitung depresiasi garis lurus, aktivitas, SYD, dan DDB, termasuk untuk sebagian periode.',
    'Menghitung dasar deplesi, tarif per unit, serta alokasinya ke persediaan dan beban pokok penjualan.',
    'Mengukur rugi penurunan nilai aset individual, depresiasi setelahnya, dan pemulihan dengan batas atas.',
    'Mencatat revaluasi dengan metode eliminasi, transfer surplus ke saldo laba, serta menghitung rasio aset.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['Depresiasi', 'Berapa dasar depresiasi, umur, dan metode yang mencerminkan pola konsumsi manfaat?', 'Beban depresiasi dan nilai buku'],
        ['Sebagian periode', 'Berapa bulan aset digunakan pada tahun kalender?', 'Beban tahun pertama dan kedua'],
        ['Deplesi', 'Biaya apa yang masuk dasar deplesi dan berapa unit yang diekstraksi atau dijual?', 'Persediaan dan beban pokok penjualan'],
        ['Penurunan nilai', 'Apakah carrying amount melebihi recoverable amount?', 'Rugi impairment, depresiasi baru, pemulihan'],
        ['Revaluasi', 'Apakah perubahan nilai wajar masuk OCI atau laba rugi?', 'Jurnal eliminasi dan transfer surplus'],
        ['Penyajian', 'Apa yang diungkapkan dan bagaimana efisiensi aset dinilai?', 'Pengungkapan dan rasio']
      ],
      caption: 'Alur TM3: alokasi cost → deplesi → penurunan nilai → revaluasi → penyajian.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Batas cakupan TM3',
      text: 'Pengujian penurunan nilai unit penghasil kas (CGU) yang melibatkan goodwill dan alokasi pro-rata ke banyak aset (Kieso pp. 856–857, P10.9, P10.10) dibahas di TM4; TM3 berfokus pada aset individual (E10.18). Revaluasi multi-aset dengan surplus dan defisit silang (E10.29, P10.5) juga dibahas di TM4; TM3 berfokus pada siklus revaluasi dasar (E10.27 dan Appendix 10A).'
    },

    { kind: 'h2', text: '2. Depreciation Concept & Three Factors' },
    {
      kind: 'p',
      text: 'Depresiasi adalah alokasi sistematis dan rasional atas jumlah yang dapat disusutkan (depreciable amount) suatu aset tetap selama umur manfaatnya (Kieso p. 839).'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dua prinsip utama',
      text: '**Cost allocation, not valuation:** depresiasi tidak mengukur penurunan nilai pasar wajar aset pada tanggal pelaporan; depresiasi mencocokkan cost historis dengan pendapatan yang dihasilkan aset.\n\n**Depresiasi tidak menghasilkan kas:** beban depresiasi adalah beban nonkas dan tidak mencadangkan dana untuk mengganti aset.'
    },
    {
      kind: 'table',
      headers: ['Faktor', 'Penjelasan', 'Kieso'],
      rows: [
        ['Dasar depresiasi (depreciable base)', 'Cost historis dikurangi estimasi nilai residu. Nilai residu adalah estimasi jumlah neto yang akan diperoleh saat ini dari pelepasan aset, setelah dikurangi biaya pelepasan, jika aset sudah mencapai umur dan kondisi akhir masa manfaatnya.', 'pp. 839–841'],
        ['Estimasi umur manfaat', 'Periode aset diharapkan digunakan atau jumlah unit produksi yang diharapkan. Umur fisik dibatasi keausan dan faktor alam; umur ekonomis dibatasi inadequacy, supersession, dan obsolescence. Aset dihentikan saat umur ekonomis berakhir walaupun secara fisik masih berfungsi.', 'pp. 839–841'],
        ['Metode alokasi', 'Metode harus mencerminkan pola konsumsi manfaat ekonomi masa depan aset.', 'pp. 839–841']
      ]
    },
    { kind: 'formula', text: '\\text{Dasar depresiasi}=\\text{Cost}-\\text{estimasi nilai residu}' },

    { kind: 'h2', text: '3. Depreciation Methods' },
    {
      kind: 'table',
      headers: ['Metode', 'Dasar pengali', 'Pola beban', 'Rumus beban', 'Nilai residu'],
      rows: [
        ['Garis lurus', 'Cost − residu', 'Konstan setiap tahun', '(Cost − residu) ÷ umur (tahun)', 'Dikurangkan sejak awal'],
        ['Unit output', 'Cost − residu', 'Mengikuti produksi', 'Unit aktual × (cost − residu) ÷ total estimasi unit', 'Dikurangkan sejak awal'],
        ['Jam kerja', 'Cost − residu', 'Mengikuti jam mesin', 'Jam aktual × (cost − residu) ÷ total estimasi jam', 'Dikurangkan sejak awal'],
        ['Jumlah angka tahun (SYD)', 'Cost − residu', 'Dipercepat: tinggi di awal lalu menurun', '(Cost − residu) × sisa umur awal tahun ÷ [n(n + 1) ÷ 2]', 'Dikurangkan sejak awal'],
        ['Saldo menurun ganda (DDB)', 'Nilai buku awal tahun', 'Dipercepat maksimum', 'Nilai buku awal tahun × 2/n', 'Diabaikan di awal; menjadi batas bawah nilai buku pada tahun akhir']
      ],
      caption: 'Kieso pp. 841–846.'
    },
    { kind: 'formula', text: '\\text{Garis lurus}=\\frac{\\text{Cost}-\\text{Nilai residu}}{\\text{Umur (tahun)}}' },
    { kind: 'formula', text: '\\text{Tarif per unit}=\\frac{\\text{Cost}-\\text{Nilai residu}}{\\text{Total estimasi unit output}}\\qquad\\text{Beban}=\\text{Unit periode berjalan}\\times\\text{Tarif per unit}' },
    { kind: 'formula', text: 'S=\\frac{n(n+1)}{2}\\qquad\\text{Beban SYD}=(\\text{Cost}-\\text{Nilai residu})\\times\\frac{\\text{Sisa umur awal tahun}}{S}' },
    { kind: 'formula', text: '\\text{Tarif DDB}=\\frac{2}{n}\\qquad\\text{Beban DDB}=\\text{Nilai buku awal tahun}\\times\\frac{2}{n}' },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Kaidah nilai residu pada DDB',
      text: 'Nilai residu **tidak dikurangkan** dari cost saat menerapkan tarif DDB. Nilai residu hanya menjadi batas bawah: nilai buku tidak boleh turun di bawah residu, sehingga beban tahun terakhir dibatasi sebesar nilai buku awal tahun dikurangi residu (Kieso p. 844).'
    },
    {
      kind: 'p',
      text: '**Depresiasi komponen:** setiap bagian aset tetap yang cost-nya signifikan terhadap total cost dan umurnya berbeda wajib disusutkan terpisah (Kieso pp. 847–852). Contoh: badan pesawat 20 tahun, mesin jet 8 tahun, interior kabin 5 tahun; pada truk berat (BE10.6) rangka/bodi 12 tahun, mesin/transmisi 5 tahun, dan ban 2 tahun.'
    },

    { kind: 'h2', text: '4. Partial-Period Depreciation' },
    {
      kind: 'p',
      text: 'Aset jarang dibeli tepat 1 Januari. Bila aset dibeli di tengah tahun, depresiasi dialokasikan proporsional terhadap jumlah bulan pemakaian dalam tahun buku, dengan m = bulan dari bulan pembelian sampai akhir tahun buku (Kieso pp. 849–852).'
    },
    {
      kind: 'table',
      headers: ['Metode', 'Tahun kalender 1', 'Tahun kalender 2'],
      rows: [
        ['Garis lurus', 'Depresiasi tahunan × m/12', 'Depresiasi tahunan penuh'],
        ['SYD (straddling)', 'Depresiasi service year 1 × m/12', '(Service year 1 × (12 − m)/12) + (service year 2 × m/12)'],
        ['DDB', 'Cost × 2/n × m/12', '(Cost − depresiasi tahun 1) × 2/n × 12/12']
      ],
      caption: 'Service year aset tidak bertepatan dengan tahun kalender laporan keuangan.'
    },
    {
      kind: 'formula',
      text: '\\text{SYD tahun 2}=\\left(\\text{Service year 1}\\times\\frac{12-m}{12}\\right)+\\left(\\text{Service year 2}\\times\\frac{m}{12}\\right)'
    },
    CHARLESTON_PARTIAL_YEAR_CASE,
    LOCKARD_FIRST_YEAR_CASE,

    { kind: 'h2', text: '5. Depletion of Natural Resources' },
    {
      kind: 'p',
      text: 'Sumber daya alam mencakup minyak bumi, gas alam, mineral tambang, dan kayu hutan (Kieso pp. 857–862). Dasar deplesi disusun dari komponen berikut:'
    },
    {
      kind: 'table',
      headers: ['Komponen', 'Isi', 'Perlakuan'],
      rows: [
        ['Biaya akuisisi', 'Harga perolehan hak properti atau hak sewa untuk mencari dan mengekstraksi sumber daya alam', 'Masuk dasar deplesi'],
        ['Biaya eksplorasi (IFRS 6)', 'Biaya mencari dan mengidentifikasi cadangan setelah hak legal diperoleh', 'Masuk dasar deplesi'],
        ['Pengembangan: peralatan berwujud', 'Mesin pengeboran, truk tambang berat', 'Tidak masuk dasar deplesi; dikapitalisasi sebagai aset tetap terpisah dan disusutkan sesuai umurnya'],
        ['Pengembangan tidak berwujud', 'Terowongan, poros tambang, pondasi sumur bor, jalur pipa tetap yang tidak bernilai saat tambang habis', 'Masuk dasar deplesi'],
        ['Kewajiban restorasi (IAS 37)', 'Estimasi nilai kini kewajiban memulihkan lingkungan setelah penambangan', 'Menambah dasar deplesi, dengan kredit ke provisi restorasi'],
        ['Nilai residu', 'Nilai jual tanah bekas tambang setelah direstorasi', 'Mengurangi dasar deplesi']
      ]
    },
    { kind: 'formula', text: '\\text{Dasar deplesi}=\\text{Akuisisi}+\\text{Eksplorasi}+\\text{Pengembangan tidak berwujud}+\\text{Kewajiban restorasi}-\\text{Nilai residu}' },
    { kind: 'formula', text: '\\text{Tarif deplesi per unit}=\\frac{\\text{Dasar deplesi}}{\\text{Total estimasi cadangan yang dapat dipulihkan}}\\qquad\\text{Deplesi}=\\text{Unit diekstraksi}\\times\\text{Tarif}' },
    {
      kind: 'table',
      headers: ['Saat', 'Debit', 'Kredit', 'Jumlah'],
      rows: [
        ['Ekstraksi', 'Inventory (Coal / Minerals)', 'Accumulated Depletion—[Resource]', 'Unit diekstraksi × tarif per unit'],
        ['Penjualan', 'Cost of Goods Sold', 'Inventory (Coal / Minerals)', 'Unit terjual × tarif per unit']
      ],
      caption: 'Deplesi dikapitalisasi ke persediaan saat ekstraksi, lalu menjadi beban pokok penjualan saat komoditas terjual.'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Interpretasi — akun kredit deplesi',
      text: 'Penggunaan akun kontra **Accumulated Depletion** sebagai akun kredit deplesi adalah interpretasi praktik terbaik atas teks Kieso (p. 860).'
    },
    {
      kind: 'p',
      text: 'Perubahan estimasi cadangan akibat survei geologis baru adalah perubahan estimasi akuntansi (IAS 8) yang diterapkan secara **prospektif** (Kieso p. 860).'
    },
    { kind: 'formula', text: '\\text{Tarif deplesi baru}=\\frac{\\text{Nilai tercatat sisa cadangan}\\pm\\text{Pengembangan baru}-\\text{Residu}}{\\text{Revisi estimasi sisa cadangan}}' },
    EVERLY_DEPLETION_CASE,
    HENRIK_DEPLETION_CASE,

    { kind: 'h2', text: '6. Land and Land Rights' },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Tanah tidak disusutkan',
      text: 'Kieso p. 839: "Land is not depreciated because its utility usually does not diminish over time."\n\nPerlakuan hak atas tanah di Indonesia sudah dibahas pada **TM1, bagian 11 (Indonesian Land Rights)**; buka TM1 untuk pembahasannya.'
    },

    { kind: 'h2', text: '7. Impairments' },
    {
      kind: 'p',
      text: 'Entitas menilai indikasi penurunan nilai pada setiap akhir periode pelaporan. Aset mengalami penurunan nilai bila **carrying amount > recoverable amount** (Kieso pp. 852–854).'
    },
    { kind: 'formula', text: '\\text{Recoverable amount}=\\max(\\text{Fair value less costs of disposal},\\text{Value-in-use})' },
    {
      kind: 'table',
      headers: ['Ukuran', 'Definisi'],
      rows: [
        ['Fair value less costs of disposal (FVLCD)', 'Nilai pasar wajar aset dalam transaksi teratur dikurangi biaya pelepasan langsung (hukum, transportasi, pembongkaran)'],
        ['Value-in-use (VIU)', 'Nilai kini estimasi arus kas masa depan dari pemakaian berkelanjutan aset ditambah arus kas pelepasan akhir']
      ]
    },
    { kind: 'formula', text: '\\text{Loss on impairment}=\\text{Carrying amount}-\\text{Recoverable amount}\\\\\\text{Depresiasi baru per tahun}=\\frac{\\text{Recoverable amount baru}-\\text{Nilai residu baru}}{\\text{Sisa umur}}' },
    {
      kind: 'table',
      headers: ['Peristiwa', 'Debit', 'Kredit'],
      rows: [
        ['Rugi penurunan nilai (laba rugi periode berjalan)', 'Loss on Impairment', 'Accumulated Depreciation—[Asset Class]'],
        ['Pemulihan rugi penurunan nilai', 'Accumulated Depreciation—[Asset Class]', 'Recovery of Impairment Loss']
      ],
      caption: 'Pola jurnal impairment dan pemulihannya (Kieso pp. 854–855).'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Batas atas pemulihan (ceiling rule)',
      text: 'Rugi penurunan nilai dapat dipulihkan ke laba rugi bila nilai ekonomi membaik. Nilai tercatat setelah pemulihan **tidak boleh melebihi nilai tercatat seandainya aset tidak pernah mengalami penurunan nilai**, yaitu setelah memperhitungkan depresiasi normal (Kieso p. 855). Di bawah US GAAP, pemulihan rugi penurunan nilai untuk aset yang tetap digunakan dilarang.'
    },
    PUJOLS_IMPAIRMENT_CASE,

    { kind: 'h2', text: '8. Revaluation Accounting' },
    {
      kind: 'p',
      text: 'Entitas dapat mengukur suatu kelas aset tetap pada nilai wajar revaluasian dikurangi akumulasi depresiasi dan akumulasi rugi penurunan nilai setelah tanggal revaluasi. Revaluasi harus dilakukan konsisten untuk **seluruh aset dalam kelas yang sama** (Kieso pp. 862–863, Appendix 10A).'
    },
    {
      kind: 'ol',
      items: [
        'Akumulasi depresiasi pada tanggal revaluasi didebit hingga bersaldo nol.',
        'Akun aset didebit atau dikredit sehingga saldo netonya sama dengan nilai wajar.',
        'Selisih penyesuaian dicatat sesuai aturan kenaikan atau penurunan revaluasi.'
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Interpretasi — metode eliminasi pada E10.27',
      text: 'Penerapan metode eliminasi (elimination method) pada E10.27 adalah interpretasi atas teks Kieso Appendix 10A (pp. 880–883).'
    },
    {
      kind: 'table',
      headers: ['Situasi', 'Perlakuan', 'Akun'],
      rows: [
        ['Kenaikan pertama kali', 'Kredit OCI; diakumulasikan di ekuitas sebagai AOCI / revaluation surplus', 'Unrealized Gain on Revaluation'],
        ['Penurunan pertama kali', 'Debit laba rugi (Kieso Appendix 10A, pp. 876, 880)', 'Loss on Revaluation'],
        ['Kenaikan yang membalik penurunan sebelumnya', 'Laba rugi sebesar penurunan yang dulu dibebankan; kelebihannya ke OCI', 'Pemulihan di laba rugi, lalu Unrealized Gain on Revaluation'],
        ['Penurunan yang membalik surplus sebelumnya', 'Debit OCI sampai surplus aset tersebut habis; kelebihannya ke laba rugi', 'Unrealized Gain on Revaluation, lalu Loss on Revaluation']
      ]
    },
    { kind: 'formula', text: '\\text{Transfer tahunan AOCI ke saldo laba}=\\text{Depresiasi berbasis nilai wajar}-\\text{Depresiasi berbasis cost historis}' },
    {
      kind: 'table',
      headers: ['Debit', 'Kredit', 'Catatan'],
      rows: [
        ['Accumulated Other Comprehensive Income', 'Retained Earnings', 'Transfer langsung dalam ekuitas saat aset digunakan (Kieso p. 881); tidak pernah melalui laba rugi']
      ],
      caption: 'Realisasi surplus revaluasi secara bertahap.'
    },
    FALCETTO_REVALUATION_CASE,

    { kind: 'h2', text: '9. Presentation & Ratio Analysis' },
    {
      kind: 'ol',
      items: [
        'Basis pengukuran yang digunakan (model biaya atau model revaluasi).',
        'Metode depresiasi dan deplesi yang diterapkan.',
        'Umur manfaat atau tarif depresiasi/deplesi.',
        'Jumlah tercatat bruto dan akumulasi depresiasi/deplesi pada awal dan akhir periode.',
        'Rekonsiliasi nilai tercatat awal ke akhir: penambahan, pelepasan, revaluasi, rugi penurunan nilai, pemulihan, depresiasi.'
      ]
    },
    { kind: 'p', text: 'Daftar pengungkapan di atas mengikuti Kieso pp. 863–864.' },
    { kind: 'formula', text: '\\text{Asset turnover}=\\frac{\\text{Penjualan neto}}{\\text{Rata-rata total aset}}\\qquad\\text{Profit margin}=\\frac{\\text{Laba bersih}}{\\text{Penjualan neto}}' },
    { kind: 'formula', text: '\\text{ROA}=\\frac{\\text{Laba bersih}}{\\text{Rata-rata total aset}}=\\text{Asset turnover}\\times\\text{Profit margin}' },
    EASTMAN_RATIO_CASE,

    { kind: 'h2', text: '10. Standards Comparison' },
    {
      kind: 'table',
      headers: ['Aspek', 'IFRS (Kieso IFRS 5e)', 'US GAAP'],
      rows: [
        ['Model setelah pengakuan', 'Cost model atau revaluation model untuk seluruh aset dalam kelas yang sama', 'Hanya cost model; revaluasi tidak diperkenankan'],
        ['Depresiasi komponen', 'Wajib untuk bagian signifikan dengan umur berbeda', 'Diizinkan, tetapi jarang dipraktikkan; metode kelompok lebih umum'],
        ['Uji penurunan nilai', 'Satu tahap: carrying amount dibandingkan dengan recoverable amount = max(FVLCD, VIU)', 'Dua tahap: uji keterpulihan arus kas tak terdiskonto, lalu rugi diukur dari nilai wajar'],
        ['Pemulihan rugi penurunan nilai', 'Diperbolehkan, dibatasi ceiling nilai tercatat tanpa impairment', 'Dilarang untuk aset yang tetap digunakan (held and used)'],
        ['Tanah', 'Tidak didepresiasi (Kieso p. 839); hak sewa tanah diperlakukan sebagai aset hak guna (IFRS 16)', 'Tanah tidak disusutkan; sewa tanah diamortisasi sesuai aturan sewa (ASC 842)'],
        ['Realisasi surplus revaluasi', 'Ditransfer langsung dari AOCI ke saldo laba, tidak melalui laba rugi', 'Tidak ada karena revaluasi tidak diakui']
      ]
    },

    { kind: 'h2', text: '11. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Dasar depresiasi}=\\text{Cost}-\\text{Nilai residu}\\qquad\\text{Garis lurus}=\\frac{\\text{Dasar depresiasi}}{\\text{Umur}}' },
    { kind: 'formula', text: '\\text{Unit output}=\\frac{\\text{Unit diproduksi}}{\\text{Total estimasi unit}}\\times\\text{Dasar depresiasi}\\qquad\\text{Jam kerja}=\\frac{\\text{Jam operasi}}{\\text{Total estimasi jam}}\\times\\text{Dasar depresiasi}' },
    { kind: 'formula', text: '\\text{SYD}=\\text{Dasar depresiasi}\\times\\frac{\\text{Sisa umur}}{n(n+1)/2}\\qquad\\text{DDB}=\\text{Nilai buku awal}\\times\\frac{2}{n}' },
    { kind: 'formula', text: '\\text{Dasar deplesi}=\\text{Akuisisi}+\\text{Eksplorasi}+\\text{Pengembangan tidak berwujud}+\\text{Restorasi}-\\text{Residu}\\qquad\\text{Tarif per ton}=\\frac{\\text{Dasar deplesi}}{\\text{Total ton}}' },
    { kind: 'formula', text: '\\text{Recoverable amount}=\\max(\\text{FVLCD},\\text{VIU})\\qquad\\text{Impairment loss}=\\text{Carrying amount}-\\text{Recoverable amount}' },
    { kind: 'formula', text: '\\text{Ceiling pemulihan}=\\text{Nilai tercatat tanpa impairment setelah depresiasi normal}' },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'table',
      headers: ['Jebakan', 'Kesalahan umum', 'Perlakuan benar', 'Kieso'],
      rows: [
        ['Residu pada DDB', 'Menghitung (cost − residu) × 2/n pada tahun awal', 'Tarif 2/n dikalikan langsung dengan nilai buku awal tahun; residu hanya batas bawah pada tahun akhir', 'p. 844'],
        ['SYD sebagian periode', 'Mengalikan fraksi SYD tahun kedua langsung dengan fraksi bulan berjalan', 'Gabungkan sisa service year 1 dengan awal service year 2 (straddling)', 'p. 850; P10.2'],
        ['Ceiling pemulihan', 'Membalik seluruh rugi sehingga nilai buku melampaui nilai buku tanpa impairment', 'Pemulihan dibatasi nilai tercatat seandainya depresiasi normal berjalan tanpa impairment (kecuali model revaluasi)', 'p. 855; E10.18(c)'],
        ['Recycling surplus revaluasi', 'Mengakui transfer surplus atau pelepasan aset revaluasian sebagai gain di laba rugi', 'Transfer surplus hanya langsung dari AOCI ke saldo laba', 'p. 881; Appendix 10A'],
        ['Peralatan tambang dalam dasar deplesi', 'Memasukkan mesin bor dan alat berat ke dasar deplesi', 'Peralatan berwujud yang dapat dipindahkan atau punya kegunaan alternatif disusutkan terpisah; hanya biaya pengembangan tidak berwujud dan estimasi kewajiban restorasi (IAS 37) yang masuk dasar deplesi', 'p. 858; BE10.10']
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Tentukan dasar depresiasi, umur, dan metode sebelum menghitung.',
        'Untuk pembelian tengah tahun, hitung bulan pemakaian dan pisahkan service year pada SYD.',
        'Kapitalisasi deplesi ke persediaan; bebankan saat komoditas terjual.',
        'Recoverable amount adalah nilai tertinggi antara FVLCD dan VIU; cek ceiling sebelum memulihkan rugi.',
        'Penurunan revaluasi pertama ke laba rugi, kenaikan pertama ke OCI, dan transfer surplus langsung ke saldo laba.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Checklist 60 detik sebelum mengumpulkan',
      text: 'Charleston 2025: **€7.000 / €12.250 / €14.833**. Everly: **\\$420.000**, **\\$105 per ton**, **\\$73.500**. Pujols: rugi **€1.000.000**, depresiasi 2026 **€1.750.000**, pemulihan **€750.000**. Falcetto: Loss on Revaluation **€1.000**. Apakah setiap jurnal debit = kredit?'
    }
  ]
};
