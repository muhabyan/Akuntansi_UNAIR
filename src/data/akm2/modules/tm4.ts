import type { ContentBlock, Reading } from '../../../types';

const ROLAND_USE_VS_DISPOSAL_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Roland SE: Held for Use vs Held for Disposal (P10.9, Kieso p. 922)',
  prompt: 'Roland SE membeli peralatan pengemasan pada Januari 2024 seharga €10.000.000, umur 8 tahun, residu €0, garis lurus (€1.250.000 per tahun). Per 31 Desember 2025 depresiasi 2 tahun €2.500.000 sudah dicatat, sehingga nilai tercatat €7.500.000. Teknologi baru mempercepat keusangan: VIU €5.300.000; FVLCD €5.600.000; sisa umur 4 tahun. Per 31 Desember 2026 recoverable amount €4.900.000. Catat 2025 dan 2026 bila aset (A) tetap digunakan dan (B) dimiliki untuk dilepas.',
  blocks: [
    {
      kind: 'formula',
      text: '\\text{Recoverable amount 2025}=\\max(\\text{€5.300.000},\\text{€5.600.000})=\\text{€5.600.000}\\\\\\text{Loss on impairment 2025}=\\text{€7.500.000}-\\text{€5.600.000}=\\text{€1.900.000}'
    },
    {
      kind: 'table',
      headers: ['Aspek', 'Kasus A: held for use', 'Kasus B: held for disposal'],
      rows: [
        ['Penilaian 31 Des 2025', 'Recoverable amount €5.600.000; rugi €1.900.000', 'Nilai wajar dikurangi biaya pelepasan €5.600.000; rugi €1.900.000'],
        ['Depresiasi 2026', '€5.600.000 ÷ 4 = €1.400.000', '€0 (tidak ada depresiasi)'],
        ['Nilai tercatat sebelum penyesuaian 2026', '€5.600.000 − €1.400.000 = €4.200.000', 'Tetap €5.600.000'],
        ['Recoverable amount / nilai realisasi neto 31 Des 2026', '€4.900.000', '€4.900.000'],
        ['Penyesuaian akhir 2026', 'Pemulihan +€700.000 (ceiling €10.000.000 − 3 × €1.250.000 = €6.250.000 tidak terlampaui)', 'Rugi tambahan −€700.000 (€5.600.000 − €4.900.000)'],
        ['Nilai tercatat akhir 2026', '€4.900.000', '€4.900.000']
      ],
      caption: 'Kontras simetris: depresiasi pada aset held for use membuat penyesuaian 2026 menjadi pemulihan; tanpa depresiasi, aset held for disposal mencatat rugi tambahan.'
    },
    { kind: 'h3', text: 'Kasus A — aset tetap digunakan' },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — rugi penurunan nilai',
      lines: [
        { account: 'Loss on Impairment', debit: '€1.900.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€1.900.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — depresiasi €5.600.000 ÷ 4',
      lines: [
        { account: 'Depreciation Expense', debit: '€1.400.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€1.400.000', isCredit: true }
      ]
    },
    {
      kind: 'formula',
      text: '\\text{Ceiling}=\\text{€10.000.000}-(3\\times\\text{€1.250.000})=\\text{€6.250.000}\\\\\\text{Pemulihan}=\\text{€4.900.000}-\\text{€4.200.000}=\\text{€700.000}'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — pemulihan sampai recoverable amount €4.900.000',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '€700.000' },
        { account: 'Recovery of Impairment Loss', credit: '€700.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Kasus B — aset dimiliki untuk dilepas' },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — penurunan ke nilai wajar dikurangi biaya pelepasan',
      lines: [
        { account: 'Loss on Impairment', debit: '€1.900.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€1.900.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — tanpa depresiasi; turunkan ke nilai realisasi neto baru €4.900.000',
      lines: [
        { account: 'Loss on Impairment', debit: '€700.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '€700.000', isCredit: true }
      ]
    }
  ]
};

const SUGEHDEWE_LAND_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Latihan UTS Tutor — PT Sugehdewe: Revaluasi Tanah 5 Tahun (Latsol UTS p. 3)',
  prompt: 'Tanah dibeli tahun 2017 seharga Rp1.000.000 (dalam ribuan rupiah) dan diukur dengan model revaluasi. Nilai wajar 31 Desember: 2017 Rp1.125.000; 2018 Rp900.000; 2019 Rp962.500; 2020 Rp1.025.000; 2021 Rp1.150.000. Lengkapi skedul OCI, AOCI, dan laba rugi, lalu susun jurnalnya.',
  blocks: [
    {
      kind: 'table',
      headers: ['Tahun', 'Nilai 31 Des', 'Nilai tercatat sebelum revaluasi', 'OCI', 'AOCI', 'Laba rugi'],
      rows: [
        ['2017', 'Rp1.125.000', 'Rp1.000.000', '+Rp125.000', 'Rp125.000', 'Rp0'],
        ['2018', 'Rp900.000', 'Rp1.125.000', '−Rp125.000', 'Rp0', '−Rp100.000'],
        ['2019', 'Rp962.500', 'Rp900.000', 'Rp0', 'Rp0', '+Rp62.500'],
        ['2020', 'Rp1.025.000', 'Rp962.500', '+Rp25.000', 'Rp25.000', '+Rp37.500'],
        ['2021', 'Rp1.150.000', 'Rp1.025.000', '+Rp125.000', 'Rp150.000', 'Rp0']
      ],
      caption: 'Dalam ribuan rupiah. Penurunan menghabiskan AOCI dulu; kenaikan memulihkan rugi laba rugi sebelumnya dulu.'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2017 — kenaikan di atas cost ke OCI (dalam ribuan rupiah)',
      lines: [
        { account: 'Land', debit: 'Rp125.000' },
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', credit: 'Rp125.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2018 — hapus AOCI Rp125.000, sisa penurunan Rp100.000 ke laba rugi',
      lines: [
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', debit: 'Rp125.000' },
        { account: 'Loss on Revaluation', debit: 'Rp100.000' },
        { account: 'Land', credit: 'Rp225.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2019 — pulihkan rugi sebelumnya Rp62.500; sisa rugi belum pulih Rp37.500',
      lines: [
        { account: 'Land', debit: 'Rp62.500' },
        { account: 'Recovery of Prior Revaluation Loss', credit: 'Rp62.500', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2020 — pulihkan sisa rugi Rp37.500, kelebihan Rp25.000 ke OCI',
      lines: [
        { account: 'Land', debit: 'Rp62.500' },
        { account: 'Recovery of Prior Revaluation Loss', credit: 'Rp37.500', isCredit: true },
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', credit: 'Rp25.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2021 — kenaikan di atas cost ke OCI',
      lines: [
        { account: 'Land', debit: 'Rp125.000' },
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', credit: 'Rp125.000', isCredit: true }
      ]
    }
  ]
};

const MENTARI_LAND_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Latihan UTS Tutor — PT Mentari Jaya: Revaluasi Tanah 6 Tahun (Latsol UTS p. 4)',
  prompt: 'Tanah dibeli tahun 2016 seharga Rp800.000 (dalam ribuan rupiah) dan diukur dengan model revaluasi. Nilai wajar 31 Desember: 2016 Rp800.000; 2017 Rp950.000; 2018 Rp700.000; 2019 Rp650.000; 2020 Rp780.000; 2021 Rp900.000. Lengkapi skedul dan jurnalnya.',
  blocks: [
    {
      kind: 'table',
      headers: ['Tahun', 'Nilai 31 Des', 'Nilai tercatat sebelum revaluasi', 'OCI', 'AOCI', 'Laba rugi'],
      rows: [
        ['2016', 'Rp800.000', 'Rp800.000', 'Rp0', 'Rp0', 'Rp0'],
        ['2017', 'Rp950.000', 'Rp800.000', '+Rp150.000', 'Rp150.000', 'Rp0'],
        ['2018', 'Rp700.000', 'Rp950.000', '−Rp150.000', 'Rp0', '−Rp100.000'],
        ['2019', 'Rp650.000', 'Rp700.000', 'Rp0', 'Rp0', '−Rp50.000'],
        ['2020', 'Rp780.000', 'Rp650.000', 'Rp0', 'Rp0', '+Rp130.000'],
        ['2021', 'Rp900.000', 'Rp780.000', '+Rp100.000', 'Rp100.000', '+Rp20.000']
      ],
      caption: 'Dalam ribuan rupiah. Tahun 2016 tidak memerlukan jurnal revaluasi.'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2017 — surplus revaluasi Rp150.000',
      lines: [
        { account: 'Land', debit: 'Rp150.000' },
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', credit: 'Rp150.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2018 — hapus AOCI Rp150.000, sisa penurunan Rp100.000 ke laba rugi',
      lines: [
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', debit: 'Rp150.000' },
        { account: 'Loss on Revaluation', debit: 'Rp100.000' },
        { account: 'Land', credit: 'Rp250.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2019 — AOCI sudah nol, seluruh penurunan ke laba rugi',
      lines: [
        { account: 'Loss on Revaluation', debit: 'Rp50.000' },
        { account: 'Land', credit: 'Rp50.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2020 — pulihkan rugi sebelumnya sampai Rp130.000',
      lines: [
        { account: 'Land', debit: 'Rp130.000' },
        { account: 'Recovery of Prior Revaluation Loss', credit: 'Rp130.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2021 — pulihkan sisa rugi Rp20.000, kelebihan Rp100.000 ke OCI',
      lines: [
        { account: 'Land', debit: 'Rp120.000' },
        { account: 'Recovery of Prior Revaluation Loss', credit: 'Rp20.000', isCredit: true },
        { account: 'Unrealized Gain on Revaluation—Land (OCI)', credit: 'Rp100.000', isCredit: true }
      ]
    }
  ]
};

const SU_LTD_REVALUATION_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Su Ltd.: Revaluasi Ekskavator Multi-Periode (E10.29, Kieso p. 913)',
  prompt: 'Su Ltd. membeli ekskavator pada 1 Januari 2023 seharga ¥10.000 (dalam ribuan), umur 10 tahun, residu ¥0, garis lurus (¥1.000 per tahun), dan memakai model revaluasi. Nilai wajar 31 Desember 2023 dan 2025 mendekati nilai tercatat; nilai wajar 31 Desember 2024 = ¥8.800 dan 31 Desember 2026 = ¥5.000. Susun jurnal 2023–2026.',
  blocks: [
    { kind: 'h3', text: 'Tahun 2023' },
    {
      kind: 'journal',
      caption: '1 Januari 2023 — pembelian (dalam ribuan)',
      lines: [
        { account: 'Equipment', debit: '¥10.000' },
        { account: 'Cash', credit: '¥10.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2023 — depresiasi; nilai tercatat ¥9.000, tanpa revaluasi',
      lines: [
        { account: 'Depreciation Expense', debit: '¥1.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '¥1.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Tahun 2024 — surplus revaluasi pertama' },
    {
      kind: 'journal',
      caption: '31 Desember 2024 — depresiasi',
      lines: [
        { account: 'Depreciation Expense', debit: '¥1.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '¥1.000', isCredit: true }
      ]
    },
    { kind: 'formula', text: '\\text{Nilai tercatat}=\\text{¥10.000}-\\text{¥2.000}=\\text{¥8.000}\\\\\\text{Surplus (OCI)}=\\text{¥8.800}-\\text{¥8.000}=\\text{¥800}' },
    {
      kind: 'journal',
      caption: '31 Desember 2024 — eliminasi: Equipment dari ¥10.000 menjadi ¥8.800, akumulasi depresiasi menjadi ¥0',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '¥2.000' },
        { account: 'Equipment', credit: '¥1.200', isCredit: true },
        { account: 'Unrealized Gain on Revaluation—Equipment (OCI)', credit: '¥800', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Tahun 2025 — depresiasi atas nilai revaluasian' },
    { kind: 'formula', text: '\\text{Sisa umur 1 Jan 2025}=10-2=8\\text{ tahun}\\\\\\text{Depresiasi}=\\frac{\\text{¥8.800}}{8}=\\text{¥1.100 per tahun}' },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — depresiasi; nilai tercatat ¥8.800 − ¥1.100 = ¥7.700',
      lines: [
        { account: 'Depreciation Expense', debit: '¥1.100' },
        { account: 'Accumulated Depreciation—Equipment', credit: '¥1.100', isCredit: true }
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Interpretasi A dan B — transfer surplus tahunan',
      text: 'Kieso Appendix 10A (pp. 881–882): "Under IFRS, Nokia may transfer from AOCI the difference between depreciation based on the revalued carrying amount of the equipment and depreciation based on the asset\'s original cost to retained earnings."\n\nKarena soal E10.29 tidak menyatakan apakah Su Ltd. melakukan transfer tahunan tersebut, dua interpretasi yang sah disajikan: **Interpretasi A** dengan transfer surplus tahunan dan **Interpretasi B** tanpa transfer surplus tahunan.'
    },
    { kind: 'h3', text: 'Interpretasi A — dengan transfer surplus tahunan' },
    { kind: 'formula', text: '\\text{Transfer tahunan}=\\text{¥1.100}-\\text{¥1.000}=\\text{¥100}' },
    {
      kind: 'journal',
      caption: 'Interpretasi A, 31 Desember 2025 — transfer selisih depresiasi langsung ke saldo laba',
      lines: [
        { account: 'Accumulated Other Comprehensive Income', debit: '¥100' },
        { account: 'Retained Earnings', credit: '¥100', isCredit: true }
      ]
    },
    {
      kind: 'p',
      text: 'Tahun 2026 (Interpretasi A): depresiasi ¥1.100 dan transfer ¥100 dicatat lagi. Sebelum revaluasi 31 Desember 2026: Equipment ¥8.800, akumulasi depresiasi ¥2.200, nilai buku **¥6.600**; sisa AOCI ¥800 − ¥100 − ¥100 = **¥600**.'
    },
    {
      kind: 'journal',
      caption: 'Interpretasi A, 31 Desember 2026 — depresiasi',
      lines: [
        { account: 'Depreciation Expense', debit: '¥1.100' },
        { account: 'Accumulated Depreciation—Equipment', credit: '¥1.100', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: 'Interpretasi A, 31 Desember 2026 — transfer surplus tahunan',
      lines: [
        { account: 'Accumulated Other Comprehensive Income', debit: '¥100' },
        { account: 'Retained Earnings', credit: '¥100', isCredit: true }
      ]
    },
    { kind: 'formula', text: '\\text{Total penurunan}=\\text{¥6.600}-\\text{¥5.000}=\\text{¥1.600}\\\\\\text{Ke OCI (sisa AOCI)}=\\text{¥600}\\qquad\\text{Ke laba rugi}=\\text{¥1.600}-\\text{¥600}=\\text{¥1.000}' },
    {
      kind: 'journal',
      caption: 'Interpretasi A, 31 Desember 2026 — eliminasi; serap AOCI ¥600, rugi ¥1.000, Equipment menjadi ¥5.000',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '¥2.200' },
        { account: 'Unrealized Gain on Revaluation—Equipment (OCI)', debit: '¥600' },
        { account: 'Loss on Revaluation', debit: '¥1.000' },
        { account: 'Equipment', credit: '¥3.800', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Interpretasi B — tanpa transfer surplus tahunan' },
    {
      kind: 'p',
      text: 'Tidak ada jurnal transfer AOCI pada 2025 maupun 2026, sehingga AOCI tetap utuh **¥800**. Depresiasi 2025 dan 2026 tetap ¥1.100 per tahun, dan nilai buku sebelum revaluasi 31 Desember 2026 tetap **¥6.600**.'
    },
    {
      kind: 'journal',
      caption: 'Interpretasi B, 31 Desember 2026 — depresiasi (tanpa transfer AOCI)',
      lines: [
        { account: 'Depreciation Expense', debit: '¥1.100' },
        { account: 'Accumulated Depreciation—Equipment', credit: '¥1.100', isCredit: true }
      ]
    },
    { kind: 'formula', text: '\\text{Total penurunan}=\\text{¥6.600}-\\text{¥5.000}=\\text{¥1.600}\\\\\\text{Ke OCI (seluruh AOCI)}=\\text{¥800}\\qquad\\text{Ke laba rugi}=\\text{¥1.600}-\\text{¥800}=\\text{¥800}' },
    {
      kind: 'journal',
      caption: 'Interpretasi B, 31 Desember 2026 — eliminasi; serap AOCI ¥800, rugi ¥800, Equipment menjadi ¥5.000',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '¥2.200' },
        { account: 'Unrealized Gain on Revaluation—Equipment (OCI)', debit: '¥800' },
        { account: 'Loss on Revaluation', debit: '¥800' },
        { account: 'Equipment', credit: '¥3.800', isCredit: true }
      ]
    }
  ]
};

const SPRAGUE_IMPAIRMENT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Sprague Inc.: Impairment dan Pemulihan (E10.20, Kieso p. 909)',
  prompt: 'Per 31 Desember 2025 peralatan Sprague Inc. memiliki cost \\$900.000 dan akumulasi depresiasi \\$400.000. Nilai kini arus kas neto masa depan (VIU) \\$300.000; FVLCD \\$280.000. Sisa umur 4 tahun, residu \\$0. Per 31 Desember 2026 recoverable amount \\$270.000. (a) Jurnal impairment 2025. (b) Penyajian rugi. (c) Jurnal 2026. (d) Isu akuntansi yang dihadapi manajemen.',
  blocks: [
    { kind: 'h3', text: '(a) Jurnal penurunan nilai 31 Desember 2025' },
    {
      kind: 'formula',
      text: '\\text{Carrying amount}=\\text{USD }900.000-\\text{USD }400.000=\\text{USD }500.000\\\\\\text{Recoverable amount}=\\max(\\text{USD }300.000,\\text{USD }280.000)=\\text{USD }300.000\\\\\\text{Loss on impairment}=\\text{USD }500.000-\\text{USD }300.000=\\text{USD }200.000'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — nilai tercatat baru \\$300.000',
      lines: [
        { account: 'Loss on Impairment', debit: '$200.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '$200.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(b) Penyajian' },
    { kind: 'p', text: 'Rugi penurunan nilai disajikan di laporan laba rugi pada pos **"Other income and expense"** (Kieso pp. 854, 864, 909).' },
    { kind: 'h3', text: '(c) Depresiasi dan pemulihan 31 Desember 2026' },
    {
      kind: 'formula',
      text: '\\text{Depresiasi 2026}=\\frac{\\text{USD }300.000}{4}=\\text{USD }75.000\\\\\\text{Nilai tercatat sebelum pemulihan}=\\text{USD }300.000-\\text{USD }75.000=\\text{USD }225.000\\\\\\text{Ceiling tanpa impairment}=\\text{USD }500.000-\\text{USD }125.000=\\text{USD }375.000\\\\\\text{Pemulihan}=\\text{USD }270.000-\\text{USD }225.000=\\text{USD }45.000',
      note: 'Recoverable amount \\$270.000 tidak melebihi ceiling \\$375.000, sehingga pemulihan diakui penuh.'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — depresiasi atas dasar baru',
      lines: [
        { account: 'Depreciation Expense', debit: '$75.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: '$75.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2026 — nilai tercatat akhir \\$225.000 + \\$45.000 = \\$270.000',
      lines: [
        { account: 'Accumulated Depreciation—Equipment', debit: '$45.000' },
        { account: 'Recovery of Impairment Loss', credit: '$45.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: '(d) Isu akuntansi bagi manajemen' },
    {
      kind: 'ul',
      items: [
        'Estimasi arus kas masa depan dan tingkat diskonto untuk menghitung value-in-use sangat subjektif.',
        'Nilai wajar aset bekas di pasar aktif sering sulit diperoleh (input nilai wajar Level 3).',
        'Perlu membedakan keusangan fungsional normal (diserap melalui depresiasi) dari penurunan nilai permanen.'
      ]
    }
  ]
};

const FRIEDRICH_IMPAIRMENT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Latihan UTS Tutor — PT Friedrich: Uji Penurunan Nilai Peralatan (Latsol UTS p. 8)',
  prompt: 'Peralatan dibeli 1 Januari 2018 dengan cost Rp3.060.000.000, umur 12 tahun, residu Rp0, garis lurus. Pada 31 Desember 2018 terdapat indikasi penurunan nilai: FVLCD Rp2.600.000.000; VIU Rp2.365.000.000. Hitung dan jurnal rugi penurunan nilainya.',
  blocks: [
    {
      kind: 'formula',
      text: '\\text{Depresiasi 2018}=\\frac{\\text{Rp3.060.000.000}}{12}=\\text{Rp255.000.000}\\\\\\text{Nilai tercatat}=\\text{Rp3.060.000.000}-\\text{Rp255.000.000}=\\text{Rp2.805.000.000}\\\\\\text{Recoverable amount}=\\max(\\text{Rp2.600.000.000},\\text{Rp2.365.000.000})=\\text{Rp2.600.000.000}\\\\\\text{Rugi penurunan nilai}=\\text{Rp2.805.000.000}-\\text{Rp2.600.000.000}=\\text{Rp205.000.000}'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2018 — rugi penurunan nilai',
      lines: [
        { account: 'Loss on Impairment', debit: 'Rp205.000.000' },
        { account: 'Accumulated Depreciation—Equipment', credit: 'Rp205.000.000', isCredit: true }
      ]
    }
  ]
};

const NUSANTARA_IMPAIRMENT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Latihan UTS Tutor — PT Nusantara Prima: Impairment Mesin dan Depresiasi 2022 (Latsol UTS p. 9)',
  prompt: 'Mesin dibeli 1 Januari 2019 dengan cost Rp4.800.000.000, umur 10 tahun, residu Rp0, garis lurus. Per 31 Desember 2021 (setelah 3 tahun pemakaian): FVLCD Rp3.100.000.000; VIU Rp3.250.000.000; sisa umur 7 tahun. Hitung rugi penurunan nilai 2021 dan depresiasi 2022.',
  blocks: [
    {
      kind: 'formula',
      text: '\\text{Akumulasi depresiasi}=\\frac{\\text{Rp4.800.000.000}}{10}\\times3=\\text{Rp1.440.000.000}\\\\\\text{Nilai tercatat}=\\text{Rp4.800.000.000}-\\text{Rp1.440.000.000}=\\text{Rp3.360.000.000}\\\\\\text{Recoverable amount}=\\max(\\text{Rp3.100.000.000},\\text{Rp3.250.000.000})=\\text{Rp3.250.000.000}\\\\\\text{Rugi penurunan nilai}=\\text{Rp3.360.000.000}-\\text{Rp3.250.000.000}=\\text{Rp110.000.000}'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2021 — rugi penurunan nilai',
      lines: [
        { account: 'Loss on Impairment', debit: 'Rp110.000.000' },
        { account: 'Accumulated Depreciation—Machinery', credit: 'Rp110.000.000', isCredit: true }
      ]
    },
    { kind: 'formula', text: '\\text{Depresiasi 2022}=\\frac{\\text{Rp3.250.000.000}}{7}=\\text{Rp464.285.714}' },
    {
      kind: 'journal',
      caption: '31 Desember 2022 — depresiasi setelah penurunan nilai',
      lines: [
        { account: 'Depreciation Expense', debit: 'Rp464.285.714' },
        { account: 'Accumulated Depreciation—Machinery', credit: 'Rp464.285.714', isCredit: true }
      ]
    }
  ]
};

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS',
  ref: 'Kieso IFRS 5e Ch. 10 (pp. 852–866) & Appendix 10A; E10.20, E10.29, P10.9 | Latsol UTS AKM II | IAS 16, IAS 36, IFRS 5',
  intro: 'TM4 memperdalam penurunan nilai dan revaluasi: unit penghasil kas (CGU), aset yang dimiliki untuk dilepas, revaluasi tanah multi-periode, dan revaluasi aset tersusutkan dengan transfer surplus. Soal dosen E10.20, E10.29, dan P10.9 serta empat soal latihan UTS tutor dibahas lengkap dengan skedul dan jurnal.',
  objectives: [
    'Mengidentifikasi CGU dan mengalokasikan rugi penurunan nilainya ke goodwill lalu aset lain dengan batas bawah.',
    'Mengukur aset yang dimiliki untuk dilepas tanpa depresiasi dan membandingkannya dengan aset yang tetap digunakan.',
    'Menyusun skedul OCI, AOCI, dan laba rugi untuk revaluasi tanah multi-periode beserta jurnalnya.',
    'Mencatat revaluasi aset tersusutkan dengan metode eliminasi, dengan dan tanpa transfer surplus tahunan.',
    'Menyelesaikan soal impairment dosen dan latihan UTS tutor, termasuk depresiasi setelah penurunan nilai.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['CGU', 'Apakah aset menghasilkan arus kas masuk yang independen?', 'Level pengujian dan alokasi rugi'],
        ['Aset dilepas', 'Apakah aset masih digunakan atau menunggu dijual?', 'Depresiasi berhenti; penilaian lower of cost or NRV'],
        ['Revaluasi tanah', 'Apakah perubahan nilai membalik OCI atau rugi laba rugi sebelumnya?', 'Skedul OCI/AOCI/laba rugi dan jurnal'],
        ['Revaluasi aset tersusutkan', 'Apakah surplus ditransfer bertahap ke saldo laba?', 'Jurnal eliminasi dan alokasi defisit'],
        ['Latihan UTS', 'Mana yang lebih tinggi: FVLCD atau VIU?', 'Rugi penurunan nilai dan depresiasi baru']
      ],
      caption: 'Alur TM4: CGU → aset dilepas → revaluasi tanah → revaluasi aset tersusutkan → latihan UTS.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Kelanjutan TM3',
      text: 'TM3 berfokus pada impairment aset individual (E10.18) dan siklus revaluasi dasar (E10.27). TM4 melanjutkan ke CGU, aset yang dimiliki untuk dilepas, serta revaluasi multi-periode dengan surplus dan defisit.'
    },

    { kind: 'h2', text: '2. Cash-Generating Units' },
    {
      kind: 'p',
      text: '**Unit penghasil kas (cash-generating unit / CGU)** adalah kelompok aset terkecil yang dapat diidentifikasi dan menghasilkan arus kas masuk yang sebagian besar independen dari aset atau kelompok aset lain (Kieso p. 853).'
    },
    {
      kind: 'callout',
      variant: 'tip',
      title: 'Kasus Santos SpA (Kieso p. 853)',
      text: 'Divisi pemesinan (machining division) memproduksi komponen setengah jadi yang ditransfer ke divisi pengemasan (packing division), lalu dijual ke pelanggan akhir. Arus kas aset divisi pemesinan bergantung pada divisi pengemasan, sehingga mesin tidak dapat diuji terpisah; kedua divisi dievaluasi bersama sebagai satu CGU.'
    },
    {
      kind: 'table',
      headers: ['Urutan', 'Alokasi rugi penurunan nilai CGU', 'Catatan'],
      rows: [
        ['Tingkat 1', 'Kurangi goodwill yang dialokasikan ke CGU sampai nol', 'Goodwill menyerap rugi lebih dulu'],
        ['Tingkat 2', 'Alokasikan sisa rugi secara pro-rata ke aset lain dalam CGU berdasarkan nilai tercatat relatif', 'Berlaku batas bawah per aset'],
        ['Batas bawah', 'Nilai tercatat aset tidak boleh turun di bawah nilai tertinggi dari FVLCD, VIU, dan nol', 'Sisa rugi yang tidak terserap dialokasikan ulang pro-rata ke aset lain yang masih memenuhi syarat']
      ],
      caption: 'Hierarki dua tingkat dan batas bawah alokasi (Kieso p. 853).'
    },
    { kind: 'formula', text: '\\text{Batas bawah aset individual}=\\max(\\text{FVLCD},\\text{VIU},0)' },

    { kind: 'h2', text: '3. Assets Held for Disposal' },
    {
      kind: 'p',
      text: 'Aset tetap yang tidak lagi digunakan dalam operasi dan ditujukan untuk dilepas dilaporkan pada nilai yang lebih rendah antara **cost/nilai tercatat** dan **nilai realisasi neto (fair value less costs to sell)**. Karena nilai aset dipulihkan melalui penjualan, nilai realisasi neto lebih relevan (kasus Kroger, Kieso pp. 853–854).'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Depresiasi berhenti',
      text: 'Entitas **tidak mencatat depresiasi atau amortisasi** atas aset yang dimiliki untuk dilepas selama aset diklasifikasikan demikian (Kieso p. 854). Alokasi periodik atas manfaat operasi tidak relevan lagi karena aset tidak beroperasi dan sudah dinilai pada nilai realisasi neto, serupa dengan persediaan.'
    },
    {
      kind: 'ul',
      items: [
        'Aset dinilai kembali setiap akhir periode pada lower of cost or NRV; penurunan lanjutan (write-down) maupun pemulihan (write-up) dapat dicatat.',
        'Pemulihan **tidak boleh melebihi nilai tercatat sebelum penurunan nilai awal**, yaitu nilai tercatat ketika aset pertama kali direklasifikasi sebagai dimiliki untuk dilepas.',
        'Gain atau loss terkait aset yang dilepas disajikan dalam operating income pada pos "Other income and expense" (Kieso p. 854).'
      ]
    },
    ROLAND_USE_VS_DISPOSAL_CASE,

    { kind: 'h2', text: '4. Multi-Period Land Revaluation' },
    {
      kind: 'table',
      headers: ['Perubahan nilai wajar tanah', 'Perlakuan', 'Akun'],
      rows: [
        ['Kenaikan di atas cost historis', 'Kredit OCI; diakumulasikan di ekuitas sebagai AOCI / revaluation surplus', 'Unrealized Gain on Revaluation—Land'],
        ['Penurunan', 'Debit OCI dulu sampai saldo AOCI tanah tersebut nol; kelebihan penurunan di bawah cost ke laba rugi. AOCI tidak boleh negatif.', 'Unrealized Gain on Revaluation—Land, lalu Loss on Revaluation'],
        ['Pemulihan berikutnya', 'Laba rugi dulu sebesar rugi yang pernah dibebankan; kelebihan di atas cost historis ke OCI', 'Recovery of Prior Revaluation Loss, lalu Unrealized Gain on Revaluation—Land']
      ],
      caption: 'Tanah tidak disusutkan; model revaluasi tanah mengikuti Kieso Appendix 10A (pp. 875–880).'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Saat tanah revaluasian dijual',
      text: 'Tanah dikredit sebesar nilai tercatatnya dan kas didebit sebesar penerimaan; bila dijual pada nilai wajar, tidak ada gain atau loss. Sisa AOCI untuk tanah tersebut **ditransfer langsung ke Retained Earnings** (debit Accumulated Other Comprehensive Income, kredit Retained Earnings) dan tidak didaur ulang ke laba rugi (Kieso p. 879).'
    },
    SUGEHDEWE_LAND_CASE,
    MENTARI_LAND_CASE,

    { kind: 'h2', text: '5. Depreciable Asset Revaluation' },
    {
      kind: 'ol',
      items: [
        '**Metode eliminasi:** akumulasi depresiasi sejak revaluasi terakhir didebit sampai nol, akun aset disesuaikan ke nilai wajar, dan selisihnya dicatat ke OCI atau laba rugi.',
        '**Realisasi bertahap:** seiring pemakaian aset, selisih depresiasi berbasis nilai wajar dan berbasis cost historis dapat ditransfer setiap akhir tahun dari AOCI langsung ke Retained Earnings (Kieso pp. 881–882).',
        '**Surplus berbalik menjadi defisit:** eliminasi akumulasi depresiasi, debit OCI sebesar sisa AOCI aset, debit Loss on Revaluation untuk sisa defisit, dan kredit aset ke nilai wajar baru.'
      ]
    },
    { kind: 'formula', text: '\\text{Transfer tahunan}=\\text{Depresiasi berbasis nilai wajar}-\\text{Depresiasi berbasis cost historis}' },
    SU_LTD_REVALUATION_CASE,

    { kind: 'h2', text: '6. Class-by-Class Policy Selection' },
    {
      kind: 'p',
      text: 'Model revaluasi diterapkan pada **seluruh aset dalam kelas yang sama**, tetapi kelas berbeda boleh memakai model berbeda (Kieso pp. 862–863). Entitas dapat merevaluasi peralatan dan mesin sambil mempertahankan model biaya untuk tanah dan bangunan. Alasan manajerial utama:'
    },
    {
      kind: 'table',
      headers: ['Alasan', 'Penjelasan'],
      rows: [
        ['Biaya penilaian tinggi', 'Penilaian berkala properti dan gedung memerlukan penilai independen bersertifikat yang mahal.'],
        ['Volatilitas ekuitas', 'Fluktuasi harga properti komersial menciptakan volatilitas OCI, ekuitas, dan rasio solvabilitas.'],
        ['Kesederhanaan operasional', 'Model biaya historis sederhana, stabil, dan terhindar dari kompleksitas rekonsiliasi pajak tangguhan.']
      ]
    },

    { kind: 'h2', text: '7. Land and Land Rights' },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Tanah tidak disusutkan',
      text: 'Kieso p. 839: "Land is not depreciated because its utility usually does not diminish over time."\n\nPerlakuan hak atas tanah di Indonesia sudah dibahas pada **TM1, bagian 11 (Indonesian Land Rights)**; buka TM1 untuk pembahasannya.'
    },

    { kind: 'h2', text: '8. Impairment Practice: Lecturer & Tutor UTS Cases' },
    {
      kind: 'p',
      text: 'Gunakan urutan yang sama untuk setiap soal: hitung nilai tercatat → recoverable amount = nilai tertinggi FVLCD dan VIU → rugi penurunan nilai → depresiasi atas dasar baru → cek ceiling bila ada pemulihan.'
    },
    SPRAGUE_IMPAIRMENT_CASE,
    FRIEDRICH_IMPAIRMENT_CASE,
    NUSANTARA_IMPAIRMENT_CASE,

    { kind: 'h2', text: '9. Standards Comparison' },
    {
      kind: 'table',
      headers: ['Aspek', 'IFRS (Kieso IFRS 5e)', 'US GAAP'],
      rows: [
        ['Model revaluasi', 'Diperbolehkan untuk seluruh aset dalam kelas yang sama (pp. 874–875)', 'Tidak diperbolehkan; hanya model biaya historis'],
        ['Level pengujian impairment', 'Aset individual atau CGU (p. 853)', 'Aset individual atau asset group'],
        ['Metode uji penurunan nilai', 'Satu tahap: nilai tercatat dibandingkan recoverable amount = max(FVLCD, VIU) (pp. 852–853)', 'Dua tahap: uji keterpulihan arus kas tak terdiskonto, lalu rugi diukur dari nilai wajar'],
        ['Pemulihan rugi penurunan nilai', 'Diperbolehkan dengan batas nilai buku tanpa impairment (pp. 855–856)', 'Dilarang untuk aset yang tetap digunakan (held and used)'],
        ['Aset dimiliki untuk dilepas', 'Lower of cost or NRV; tidak disusutkan (p. 854)', 'Lower of cost or NRV; tidak disusutkan']
      ]
    },

    { kind: 'h2', text: '10. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Recoverable amount}=\\max(\\text{FVLCD},\\text{VIU})\\qquad\\text{Impairment loss}=\\text{Carrying amount}-\\text{Recoverable amount}' },
    { kind: 'formula', text: '\\text{Alokasi CGU: goodwill sampai nol, lalu pro-rata aset lain dengan batas }\\max(\\text{FVLCD},\\text{VIU},0)' },
    { kind: 'formula', text: '\\text{Depresiasi setelah impairment}=\\frac{\\text{Recoverable amount baru}-\\text{Residu}}{\\text{Sisa umur baru}}' },
    { kind: 'formula', text: '\\text{Ceiling pemulihan}=\\text{Nilai buku seandainya tidak pernah ada impairment}' },
    { kind: 'formula', text: '\\text{Transfer bertahap}=\\text{Depresiasi nilai wajar}-\\text{Depresiasi cost historis}\\quad(\\text{AOCI ke Retained Earnings})' },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'table',
      headers: ['Jebakan', 'Kesalahan umum', 'Perlakuan benar'],
      rows: [
        ['Depresiasi aset held for disposal', 'Mencatat depresiasi 2026 €1.400.000 pada P10.9(c) sebelum membandingkan dengan recoverable amount', 'Tidak ada depresiasi (Kieso p. 854). Nilai tercatat tetap €5.600.000, sehingga penyesuaian ke €4.900.000 adalah rugi tambahan €700.000, bukan pemulihan.'],
        ['Saldo AOCI negatif', 'Mendebit seluruh penurunan ke OCI walaupun surplus tidak cukup', 'Debit OCI hanya sebesar sisa saldo AOCI aset; kelebihannya ke laba rugi sebagai Loss on Revaluation.'],
        ['Recycling surplus saat tanah dijual', 'Mendebit AOCI dan mengkredit gain penjualan tanah di laba rugi', 'Saldo AOCI ditransfer langsung dalam ekuitas ke Retained Earnings (Kieso p. 879).'],
        ['Batas bawah alokasi CGU', 'Mengalokasikan rugi CGU pro-rata tanpa memeriksa FVLCD masing-masing aset', 'Nilai buku aset tidak boleh di bawah nilai tertinggi FVLCD, VIU, atau nol (Kieso p. 853); sisa rugi dialokasikan ke aset lain.'],
        ['Salah memilih recoverable amount', 'Pada PT Friedrich otomatis memakai VIU Rp2.365.000.000', 'Recoverable amount adalah nilai tertinggi: FVLCD Rp2.600.000.000.']
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Uji di level CGU bila aset tidak menghasilkan arus kas masuk independen.',
        'Hentikan depresiasi saat aset diklasifikasikan dimiliki untuk dilepas.',
        'Untuk revaluasi tanah, lacak AOCI dan rugi laba rugi kumulatif setiap tahun.',
        'Untuk aset tersusutkan, nyatakan apakah surplus ditransfer bertahap (Interpretasi A) atau tidak (Interpretasi B).',
        'Selalu pilih nilai tertinggi antara FVLCD dan VIU.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Checklist 60 detik sebelum mengumpulkan',
      text: 'Sugehdewe: laba rugi 2019 **+Rp62.500**, OCI 2020 **+Rp25.000**. Su Ltd. 2026: Interpretasi A **¥600 OCI / ¥1.000 rugi**, Interpretasi B **¥800 / ¥800**. Roland 2026: held for use **pemulihan €700.000**, held for disposal **rugi €700.000**. Apakah setiap jurnal debit = kredit?'
    }
  ]
};
