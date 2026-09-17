import type { ContentBlock, Reading } from '../../../types';

const PALMIERO_AMORTIZATION_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Palmiero Company: Amortisasi Empat Situasi (E11.4, Kieso pp. 990–991)',
  prompt: '(1) Paten dibeli dari Vania Co. **1 Januari 2023** seharga \\$1.500.000, diamortisasi selama sisa umur legal 10 tahun (berakhir 1 Januari 2033). Selama 2025 ditentukan bahwa manfaat ekonominya tidak lebih dari 6 tahun sejak tanggal perolehan. Berapa nilai paten neto pada 31 Desember 2025? (2) Waralaba dibeli dari Dougherty Co. **1 Januari 2024** seharga \\$350.000 (nilai tercatat di Dougherty \\$500.000); umur perjanjian 30 tahun, tetapi Palmiero harus ikut lelang kompetitif pada akhir 2033. Berapa amortisasi 2025? (3) Biaya organisasi \\$275.000 pada 1 Januari 2023. Berapa beban organisasi 2025? (4) Lisensi distribusi dibeli **1 Januari 2025** seharga \\$150.000; masa awal 5 tahun, dapat diperpanjang tanpa batas dengan biaya nominal. Berapa amortisasi 2025?',
  blocks: [
    {
      kind: 'table',
      headers: ['Situasi', 'Analisis', 'Jawaban'],
      rows: [
        ['(1) Paten', 'Amortisasi 2023–2024: \\$1.500.000 ÷ 10 × 2 = \\$300.000; nilai buku 1 Januari 2025 \\$1.200.000. Sisa umur direvisi prospektif: 6 − 2 = 4 tahun; amortisasi 2025 = \\$1.200.000 ÷ 4 = \\$300.000.', 'Paten neto 31 Desember 2025 **\\$900.000**'],
        ['(2) Waralaba', 'Cost pembeli \\$350.000 (nilai tercatat penjual tidak relevan). Periode manfaat dibatasi lelang akhir 2033: 2024–2033 = 10 tahun.', 'Amortisasi 2025 **\\$35.000**'],
        ['(3) Biaya organisasi', 'Biaya start-up dan organisasi dibebankan saat terjadi (2023).', 'Beban organisasi 2025 **\\$0**'],
        ['(4) Lisensi', 'Dapat diperpanjang tanpa batas dengan biaya nominal: umur manfaat tidak terbatas; tidak diamortisasi, diuji penurunan nilai setiap tahun.', 'Amortisasi 2025 **\\$0**']
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — amortisasi paten (sisa umur direvisi)',
      lines: [
        { account: 'Amortization Expense', debit: '$300.000' },
        { account: 'Accumulated Amortization—Patents', credit: '$300.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — amortisasi waralaba sampai batas lelang',
      lines: [
        { account: 'Amortization Expense', debit: '$35.000' },
        { account: 'Accumulated Amortization—Franchises', credit: '$35.000', isCredit: true }
      ]
    }
  ]
};

const TERRELL_GOODWILL_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Fred Graf / Terrell Galleries: Pencatatan Goodwill (E11.12, Kieso pp. 994–995)',
  prompt: 'Fred Graf (Graf Interiors) membeli Terrell Galleries seharga **\\$380.000**. Laporan posisi keuangan Terrell per 31 Desember 2025: Buildings (net) \\$200.000; Equipment (net) \\$175.000; Copyrights (net) \\$30.000; Land \\$70.000; Cash \\$100.000; Accounts payable \\$50.000; Long-term notes payable \\$300.000. Disepakati: tanah undervalued \\$50.000 dan peralatan overvalued \\$5.000. Buat jurnal pembelian di buku Graf.',
  blocks: [
    {
      kind: 'formula',
      text: '\\text{Aset teridentifikasi}=\\text{USD }200.000+\\text{USD }170.000+\\text{USD }30.000+\\text{USD }120.000+\\text{USD }100.000=\\text{USD }620.000\\\\\\text{Aset neto}=\\text{USD }620.000-(\\text{USD }50.000+\\text{USD }300.000)=\\text{USD }270.000\\\\\\text{Goodwill}=\\text{USD }380.000-\\text{USD }270.000=\\text{USD }110.000'
    },
    {
      kind: 'journal',
      caption: 'Pembelian Terrell Galleries: aset dan liabilitas pada nilai wajar, sisanya goodwill',
      lines: [
        { account: 'Buildings', debit: '$200.000' },
        { account: 'Equipment', debit: '$170.000' },
        { account: 'Copyrights', debit: '$30.000' },
        { account: 'Land', debit: '$120.000' },
        { account: 'Cash', debit: '$100.000' },
        { account: 'Goodwill', debit: '$110.000' },
        { account: 'Accounts Payable', credit: '$50.000', isCredit: true },
        { account: 'Long-Term Notes Payable', credit: '$300.000', isCredit: true },
        { account: 'Cash', credit: '$380.000', isCredit: true }
      ]
    }
  ]
};

const BOTTICELLI_IMPAIRMENT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Botticelli Company: Impairment dan Pemulihan Hak Cipta (E11.14, Kieso p. 995)',
  prompt: 'Informasi hak cipta Botticelli Company per **31 Desember 2025**: cost \\$8.600.000; nilai tercatat \\$4.300.000; recoverable amount \\$3.400.000. Hak cipta tetap digunakan, sisa umur manfaat 10 tahun. Perusahaan tidak memakai akun akumulasi amortisasi. (a) Jurnal impairment 31 Desember 2025. (b) Jurnal amortisasi 2026. (c) Nilai wajar hak cipta 31 Desember 2026 \\$3.500.000; buat jurnal kenaikan nilainya (jika ada).',
  blocks: [
    {
      kind: 'table',
      headers: ['Langkah', 'Perhitungan', 'Hasil'],
      rows: [
        ['(a) Rugi impairment 2025', '\\$4.300.000 − \\$3.400.000', '**\\$900.000**'],
        ['(b) Amortisasi 2026', '\\$3.400.000 ÷ 10', '**\\$340.000**; nilai tercatat \\$3.060.000'],
        ['Ceiling 31 Des 2026', 'Tanpa impairment: \\$4.300.000 − (\\$4.300.000 ÷ 10) = \\$3.870.000', 'Nilai \\$3.500.000 di bawah ceiling'],
        ['(c) Pemulihan', '\\$3.500.000 − \\$3.060.000', '**\\$440.000**; nilai tercatat \\$3.500.000']
      ],
      caption: 'Pemulihan dilaporkan di "Other income and expense" (Kieso p. 966).'
    },
    {
      kind: 'journal',
      caption: '(a) 31 Desember 2025 — rugi impairment (kredit aset langsung)',
      lines: [
        { account: 'Loss on Impairment', debit: '$900.000' },
        { account: 'Copyright', credit: '$900.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '(b) 31 Desember 2026 — amortisasi atas nilai tercatat baru',
      lines: [
        { account: 'Amortization Expense', debit: '$340.000' },
        { account: 'Copyright', credit: '$340.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '(c) 31 Desember 2026 — pemulihan rugi impairment sampai \\$3.500.000',
      lines: [
        { account: 'Copyright', debit: '$440.000' },
        { account: 'Recovery of Impairment Loss', credit: '$440.000', isCredit: true }
      ]
    }
  ]
};

const DOGWOOD_DEVELOPMENT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Dogwood Electronics: Biaya Pengembangan (CA11.1, Kieso pp. 1001–1002)',
  prompt: 'Dogwood Electronics mengembangkan teknologi paten untuk backup hard drive. **1 Maret:** biaya legal dan pemrosesan untuk mengajukan dan mencatat paten €10.000. **5 April:** biaya laboratorium dan bahan untuk mengidentifikasi sistem yang berfungsi €23.000. **15 Mei:** pengembangan dan pengujian prototipe €34.000. **1 Juni:** ambang viabilitas ekonomi tercapai saat menerima kontrak pasti. **30 Juni:** pengembangan akhir produk €45.000. (a) Jadwal biaya dibebankan vs dikapitalisasi. (b) Dampak pada laporan keuangan kini dan mendatang. (c) Kriteria viabilitas ekonomi.',
  blocks: [
    {
      kind: 'table',
      headers: ['Tanggal', 'Aktivitas', 'Jumlah', 'Perlakuan', 'Alasan'],
      rows: [
        ['1 Maret', 'Biaya legal dan pemrosesan paten', '€10.000', 'Kapitalisasi (Patents)', 'Biaya langsung memperoleh paten (Kieso p. 954; Illustration 11.13 item 9)'],
        ['5 April', 'Laboratorium dan bahan', '€23.000', 'Beban R&D', 'Aktivitas riset (Kieso p. 973)'],
        ['15 Mei', 'Prototipe dan pengujian', '€34.000', 'Beban R&D', 'Viabilitas ekonomi belum tercapai (Illustration 11.13 item 7–8)'],
        ['30 Juni', 'Pengembangan akhir', '€45.000', 'Kapitalisasi (Development Costs)', 'Setelah viabilitas ekonomi tercapai (Illustration 11.13 item 12)']
      ],
      caption: '(a) Dibebankan €23.000 + €34.000 = **€57.000**; dikapitalisasi €10.000 + €45.000 = **€55.000**.'
    },
    {
      kind: 'journal',
      caption: '1 Maret — biaya legal dan pemrosesan paten',
      lines: [
        { account: 'Patents', debit: '€10.000' },
        { account: 'Cash', credit: '€10.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '5 April dan 15 Mei — biaya riset dan prototipe sebelum viabilitas',
      lines: [
        { account: 'Research and Development Expense', debit: '€57.000' },
        { account: 'Cash', credit: '€57.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '30 Juni — pengembangan setelah viabilitas ekonomi',
      lines: [
        { account: 'Development Costs', debit: '€45.000' },
        { account: 'Cash', credit: '€45.000', isCredit: true }
      ]
    },
    {
      kind: 'p',
      text: '**(b)** Laba periode berjalan turun €57.000; laporan posisi keuangan menyajikan aset tidak berwujud €55.000. Pada periode mendatang, €55.000 diamortisasi selama umur manfaat sejak produk mulai dijual, sehingga beban dicocokkan dengan pendapatan produk. **(c)** Lihat lima kriteria di bagian 7 (Kieso p. 1013, catatan 17); di sini kontrak pasti 1 Juni membuktikan adanya pasar.'
    }
  ]
};

const REICHENBACH_CORRECTION_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Reichenbach Co.: Koreksi Akun Intangible Assets (P11.1, Kieso p. 997)',
  prompt: 'Reichenbach Co., didirikan 2024, memakai satu akun untuk semua aset tidak berwujud. Buat jurnal per 31 Desember 2025 untuk mengosongkan akun Intangible Assets, membentuk akun terpisah, mencatat amortisasi yang diperlukan, dan menyajikan semua saldo dengan benar (abaikan pajak penghasilan). Debit yang tercatat selama 2024 dan 2025:',
  blocks: [
    {
      kind: 'table',
      headers: ['Tanggal', 'Intangible Assets (debit)', 'Jumlah'],
      rows: [
        ['7/1/24', '8-year franchise; expiration date 6/30/32', '€48.000'],
        ['10/1/24', 'Advance payment on laboratory space (2-year lease)', '€24.000'],
        ['12/31/24', 'Net loss for 2024 including governmental business fee, €1.000, and related legal fees of organizing, €5.000 (all fees incurred in 2024)', '€16.000'],
        ['1/2/25', 'Patent purchased (10-year life)', '€84.000'],
        ['3/1/25', 'Cost of developing a secret formula (indefinite life)', '€75.000'],
        ['4/1/25', 'Goodwill purchased (indefinite life)', '€278.400'],
        ['6/1/25', 'Legal fee for successful defense of patent purchased above', '€12.650'],
        ['9/1/25', 'Research and development costs (development costs of €45.000 incurred related to 1/2/25 patent, which has achieved economic viability)', '€160.000'],
        ['', '**Saldo akun**', '**€698.050**']
      ],
      caption: 'Data soal P11.1 (Kieso p. 997).'
    },
    {
      kind: 'table',
      headers: ['Pos', 'Analisis', 'Akun dan jumlah'],
      rows: [
        ['Waralaba', '€48.000 ÷ 96 bulan = €500 per bulan; 2024 (6 bulan) €3.000 ke saldo laba; 2025 €6.000', 'Franchise €48.000; Franchise Amortization Expense €6.000; Accumulated Amortization—Franchise €9.000'],
        ['Sewa laboratorium', '€24.000 ÷ 24 bulan = €1.000 per bulan; 2024 (3 bulan) €3.000 ke saldo laba; 2025 €12.000; sisa 9 bulan dibayar di muka', 'Rent Expense €12.000; Prepaid Rent €9.000'],
        ['Rugi bersih 2024', 'Rugi operasi awal dan biaya organisasi bukan aset (Kieso pp. 977–978)', 'Retained Earnings €16.000'],
        ['Paten dibeli', '€84.000 ÷ 10 = €8.400 amortisasi 2025', 'Patents €84.000'],
        ['Pengembangan terkait paten', 'Data soal: €45.000 dari biaya 9/1/25 sudah mencapai viabilitas ekonomi; lihat Interpretasi di bawah', 'Patents €45.000; amortisasi 2025 €1.607'],
        ['Formula rahasia', 'Biaya pengembangan internal tanpa viabilitas ekonomi dalam data', 'Research and Development Expense €75.000'],
        ['Goodwill', 'Dibeli; umur tidak terbatas, tidak diamortisasi', 'Goodwill €278.400'],
        ['Biaya pembelaan paten', 'Illustration 11.13 item 13: expense as legal fees (Kieso p. 976)', 'Legal Expense €12.650'],
        ['Sisa R&D 9/1/25', '€160.000 − €45.000', 'Research and Development Expense €115.000']
      ],
      caption: 'Retained Earnings = €3.000 + €3.000 + €16.000 = €22.000. Research and Development Expense = €75.000 + €115.000 = €190.000. Patent amortization = €8.400 + €1.607 = €10.007.'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Interpretasi — kapitalisasi dan amortisasi €45.000 (P11.1)',
      text: 'Soal menyatakan €45.000 adalah biaya pengembangan terkait paten 1/2/25 yang telah mencapai viabilitas ekonomi, tetapi **tidak menyatakan** akun tempat biaya itu dikapitalisasi maupun periode amortisasinya. Pembahasan ini menambahkannya ke Patents dan mengamortisasinya selama sisa umur paten sejak 1 September 2025: 120 − 8 = 112 bulan; €45.000 ÷ 112 × 4 bulan = €1.607,14 ≈ **€1.607**.'
    },
    {
      kind: 'formula',
      text: '\\text{Amortisasi paten 2025}=\\frac{\\text{€84.000}}{10}+\\frac{\\text{€45.000}}{112}\\times 4=\\text{€8.400}+\\text{€1.607}=\\text{€10.007}'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — koreksi akun Intangible Assets',
      lines: [
        { account: 'Franchise', debit: '€48.000' },
        { account: 'Prepaid Rent', debit: '€9.000' },
        { account: 'Patents', debit: '€129.000' },
        { account: 'Goodwill', debit: '€278.400' },
        { account: 'Retained Earnings', debit: '€22.000' },
        { account: 'Rent Expense', debit: '€12.000' },
        { account: 'Franchise Amortization Expense', debit: '€6.000' },
        { account: 'Patent Amortization Expense', debit: '€10.007' },
        { account: 'Legal Expense', debit: '€12.650' },
        { account: 'Research and Development Expense', debit: '€190.000' },
        { account: 'Intangible Assets', credit: '€698.050', isCredit: true },
        { account: 'Accumulated Amortization—Franchise', credit: '€9.000', isCredit: true },
        { account: 'Accumulated Amortization—Patents', credit: '€10.007', isCredit: true }
      ]
    },
    {
      kind: 'p',
      text: 'Total debit = total kredit = **€717.057**. Nilai tercatat akhir 2025: waralaba €48.000 − €9.000 = €39.000; paten €129.000 − €10.007 = €118.993.'
    }
  ]
};

const DEVON_HARRIS_REPORTING_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Devon Harris Company: Paten, Waralaba, dan R&D (E11.9, Kieso pp. 992–993)',
  prompt: 'Paten dibeli dari Bradtke Company **1 Januari 2024** seharga \\$2.500.000 (nilai buku di Bradtke \\$2.000.000), sisa umur 10 tahun. Pada **1 Januari 2025** sisa umur paten diperkirakan tinggal 5 tahun. Selama 2025 waralaba dibeli dari Greene Company \\$580.000, umur 10 tahun, amortisasi setahun penuh pada tahun pembelian; 5% pendapatan waralaba wajib dibayar ke Greene (pendapatan 2025 \\$2.500.000). Biaya R&D 2025: bahan dan peralatan tanpa kegunaan alternatif \\$142.000, personel \\$189.000, biaya tidak langsung \\$102.000; viabilitas ekonomi belum tercapai. (a) Bagian aset tidak berwujud pada laporan posisi keuangan 31 Desember 2025. (b) Beban yang dilaporkan pada laporan laba rugi 2025.',
  blocks: [
    {
      kind: 'table',
      headers: ['(a) Aset tidak berwujud, 31 Desember 2025', 'Perhitungan', 'Jumlah'],
      rows: [
        ['Paten', '\\$2.500.000 − \\$250.000 (2024) = \\$2.250.000; 2025: \\$2.250.000 ÷ 5 = \\$450.000', '\\$1.800.000'],
        ['Waralaba', '\\$580.000 − \\$580.000 ÷ 10', '\\$522.000'],
        ['**Total aset tidak berwujud**', '', '**\\$2.322.000**']
      ],
      caption: 'Disajikan neto; akumulasi amortisasi (paten \\$700.000, waralaba \\$58.000) diungkapkan dalam catatan (Kieso p. 969).'
    },
    {
      kind: 'table',
      headers: ['(b) Beban 2025', 'Jumlah'],
      rows: [
        ['Amortisasi paten', '\\$450.000'],
        ['Amortisasi waralaba', '\\$58.000'],
        ['Beban waralaba berjalan (5% × \\$2.500.000)', '\\$125.000'],
        ['Research and development expense', '\\$433.000'],
        ['**Total**', '**\\$1.066.000**']
      ],
      caption: 'Pembayaran tahunan berdasarkan perjanjian waralaba adalah beban operasi periode berjalan, bukan aset (Kieso p. 953).'
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — amortisasi paten dan waralaba',
      lines: [
        { account: 'Amortization Expense—Patents', debit: '$450.000' },
        { account: 'Amortization Expense—Franchises', debit: '$58.000' },
        { account: 'Accumulated Amortization—Patents', credit: '$450.000', isCredit: true },
        { account: 'Accumulated Amortization—Franchises', credit: '$58.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '2025 — fee waralaba 5% dari pendapatan',
      lines: [
        { account: 'Franchise Fee Expense', debit: '$125.000' },
        { account: 'Cash', credit: '$125.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '2025 — biaya R&D tanpa viabilitas ekonomi',
      lines: [
        { account: 'Research and Development Expense', debit: '$433.000' },
        { account: 'Cash', credit: '$433.000', isCredit: true }
      ]
    }
  ]
};

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan',
  ref: 'Kieso IFRS 5e Ch. 11 (pp. 941–1002) | IAS 38, IAS 36, IFRS 3',
  intro: 'TM5 membahas Kieso Bab 11: karakteristik dan penilaian aset tidak berwujud, amortisasi aset berumur terbatas dan tidak terbatas, jenis-jenis aset tidak berwujud, goodwill dalam kombinasi bisnis, penurunan nilai dan pemulihannya, biaya riset dan pengembangan beserta biaya serupa, serta penyajiannya. Soal dosen P11.1, CA11.1, E11.4, E11.9, E11.12, dan E11.14 dibahas langkah demi langkah.',
  objectives: [
    'Menjelaskan tiga karakteristik aset tidak berwujud serta pengukuran aset yang dibeli dan yang dihasilkan internal.',
    'Menghitung amortisasi aset berumur terbatas, termasuk revisi umur secara prospektif, dan membedakannya dari aset berumur tidak terbatas.',
    'Menghitung dan mencatat goodwill atau keuntungan pembelian murah dalam kombinasi bisnis.',
    'Mengukur rugi penurunan nilai aset tidak berwujud dan goodwill, serta pemulihan dengan batas atas.',
    'Membedakan biaya riset, pengembangan, dan biaya serupa R&D, lalu mengoreksi dan menyajikan akun aset tidak berwujud.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['Pengakuan', 'Apakah pos dapat diidentifikasi, tanpa wujud fisik, dan nonmoneter?', 'Aset tidak berwujud atau beban'],
        ['Amortisasi', 'Umurnya terbatas atau tidak terbatas? Berapa sisa umurnya?', 'Beban amortisasi dan nilai tercatat'],
        ['Goodwill', 'Berapa harga beli dibanding nilai wajar aset neto teridentifikasi?', 'Goodwill atau gain pembelian murah'],
        ['Penurunan nilai', 'Apakah nilai tercatat melebihi recoverable amount?', 'Rugi, amortisasi baru, pemulihan'],
        ['R&D', 'Riset, pengembangan sebelum viabilitas, atau setelah viabilitas?', 'Beban R&D atau kapitalisasi'],
        ['Penyajian', 'Bagaimana aset dan beban dilaporkan?', 'Bagian aset tidak berwujud dan pengungkapan']
      ],
      caption: 'Alur TM5: pengakuan → amortisasi → goodwill → penurunan nilai → R&D → penyajian.'
    },

    { kind: 'h2', text: '2. Characteristics & Valuation' },
    {
      kind: 'table',
      headers: ['Karakteristik', 'Penjelasan'],
      rows: [
        ['Dapat diidentifikasi (identifiable)', 'Dapat dipisahkan (dijual, dialihkan, dilisensikan, disewakan, ditukar) atau timbul dari hak kontraktual atau hukum. Atribut ini membedakan aset tidak berwujud lain dari goodwill.'],
        ['Tanpa substansi fisik', 'Nilainya berasal dari hak dan keistimewaan yang diberikan kepada pemiliknya.'],
        ['Bukan aset moneter', 'Bukan hak atas sejumlah uang yang tetap atau dapat ditentukan, seperti kas atau piutang.']
      ],
      caption: 'Kieso pp. 942–943.'
    },
    {
      kind: 'ul',
      items: [
        '**Dibeli dari pihak lain:** dicatat sebesar cost, yaitu seluruh biaya perolehan dan biaya untuk menyiapkannya: harga beli, biaya hukum, dan biaya insidental lain (Kieso p. 943).',
        '**Diperoleh dalam kombinasi bisnis:** diakui pada nilai wajar.',
        '**Dihasilkan internal:** biaya fase riset dibebankan; biaya pengembangan dikapitalisasi hanya sejak kriteria viabilitas ekonomi terpenuhi (Kieso p. 944).'
      ]
    },

    { kind: 'h2', text: '3. Amortization' },
    {
      kind: 'table',
      headers: ['Umur manfaat', 'Perlakuan', 'Contoh'],
      rows: [
        ['Terbatas (limited life)', 'Diamortisasi selama umur yang lebih pendek antara umur legal dan umur manfaat; pola konsumsi, atau garis lurus bila pola tidak dapat ditentukan; uji impairment bila ada indikasi', 'Paten, hak cipta, daftar pelanggan, waralaba berjangka'],
        ['Tidak terbatas (indefinite life)', 'Tidak diamortisasi; diuji penurunan nilai paling sedikit setiap tahun', 'Merek dagang atau lisensi yang dapat diperpanjang dengan biaya nominal']
      ],
      caption: 'Kieso pp. 944–948.'
    },
    {
      kind: 'ul',
      items: [
        '**Nilai residu** diasumsikan nol kecuali aset masih bernilai bagi perusahaan lain pada akhir umur manfaatnya (Kieso p. 946).',
        '**Pencatatan:** perusahaan umumnya mengkredit akun aset langsung; akun akumulasi amortisasi juga dapat dipakai (Kieso p. 946).',
        '**Revisi estimasi umur** diterapkan secara prospektif: nilai tercatat saat revisi dibagi sisa umur baru.',
        '**Batas ekonomis lain**, misalnya lelang kompetitif pada E11.4, membatasi periode amortisasi.'
      ]
    },
    { kind: 'formula', text: '\\text{Amortisasi}=\\frac{\\text{Cost}-\\text{Nilai residu}}{\\min(\\text{umur legal},\\text{umur manfaat})}\\qquad\\text{Setelah revisi}=\\frac{\\text{Nilai tercatat saat revisi}}{\\text{Sisa umur baru}}' },
    PALMIERO_AMORTIZATION_CASE,

    { kind: 'h2', text: '4. Types of Intangible Assets' },
    {
      kind: 'table',
      headers: ['Kategori', 'Contoh', 'Perlakuan khusus', 'Kieso'],
      rows: [
        ['Marketing-related', 'Merek dagang, nama dagang, nama domain', 'Biaya mengamankan merek (termasuk biaya pembelaan hukum yang berhasil) dikapitalisasi; merek yang dapat diperpanjang tanpa batas umumnya tidak diamortisasi', 'p. 949'],
        ['Customer-related', 'Daftar pelanggan, order backlog', 'Umur terbatas; diamortisasi', 'p. 950'],
        ['Artistic-related', 'Hak cipta', 'Hak berlaku seumur hidup pencipta + 70 tahun; biaya memperoleh dan mempertahankan hak cipta dikapitalisasi dan diamortisasi selama umur manfaat', 'p. 951'],
        ['Contract-related', 'Waralaba, lisensi, izin', 'Diamortisasi selama masa kontrak bila terbatas; **pembayaran tahunan** berdasarkan perjanjian waralaba adalah beban operasi, bukan aset', 'pp. 952–953'],
        ['Technology-related', 'Paten, rahasia dagang', 'Paten umumnya 20 tahun; cost mencakup harga beli, registrasi, dan biaya pengacara untuk mengamankan paten', 'pp. 953–956']
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Biaya pembelaan paten yang berhasil',
      text: 'Kieso Illustration 11.13 (Next Century Incorporated), item 13: "Costs of successfully defending patent on laser scanner. Expense as legal fees. Such expenditures only maintain expected benefits." (Kieso p. 976). Perlakuan ini diterapkan pada P11.1: biaya pembelaan paten €12.650 dibebankan sebagai Legal Expense.'
    },

    { kind: 'h2', text: '5. Goodwill' },
    {
      kind: 'formula',
      text: '\\text{Goodwill}=\\text{Harga beli}-(\\text{Nilai wajar aset teridentifikasi}-\\text{Nilai wajar liabilitas})',
      note: 'Goodwill hanya diakui dari kombinasi bisnis (Kieso pp. 958–961).'
    },
    {
      kind: 'ul',
      items: [
        '**Goodwill internal** tidak dikapitalisasi karena komponennya terlalu sulit diukur dan dikaitkan dengan manfaat masa depan (Kieso p. 959).',
        '**Pembelian murah (bargain purchase):** bila harga beli di bawah nilai wajar aset neto teridentifikasi, selisihnya dicatat sebagai gain oleh pembeli (Kieso p. 962).',
        '**Goodwill tidak diamortisasi**; goodwill diuji penurunan nilai setiap tahun.'
      ]
    },
    TERRELL_GOODWILL_CASE,

    { kind: 'h2', text: '6. Impairment of Intangible Assets' },
    {
      kind: 'table',
      headers: ['Aset', 'Uji penurunan nilai', 'Pemulihan', 'Kieso'],
      rows: [
        ['Umur terbatas', 'Bila ada indikasi: rugi = nilai tercatat − recoverable amount; amortisasi selanjutnya dari nilai tercatat baru', 'Boleh, dibatasi nilai tercatat seandainya tidak pernah ada impairment; dilaporkan di Other income and expense', 'pp. 964–966'],
        ['Umur tidak terbatas selain goodwill', 'Setiap tahun, dengan uji yang sama seperti aset umur terbatas', 'Boleh, dengan aturan yang sama seperti aset umur terbatas', 'pp. 966–967'],
        ['Goodwill', 'Setiap tahun pada tingkat CGU: kurangi goodwill sampai nol, lalu alokasikan sisa rugi ke aset lain secara proporsional', '**Tidak boleh dibalik**', 'pp. 967–969']
      ]
    },
    { kind: 'formula', text: '\\text{Recoverable amount}=\\max(\\text{FVLCD},\\text{VIU})\\qquad\\text{Pemulihan}=\\min(\\text{nilai baru},\\text{ceiling})-\\text{nilai tercatat}' },
    BOTTICELLI_IMPAIRMENT_CASE,

    { kind: 'h2', text: '7. Research & Development Costs' },
    {
      kind: 'table',
      headers: ['Tahap atau pos', 'Perlakuan', 'Kieso'],
      rows: [
        ['Fase riset', 'Dibebankan saat terjadi', 'pp. 973–974'],
        ['Pengembangan sebelum viabilitas ekonomi', 'Dibebankan sebagai R&D', 'p. 975 (item 7–8)'],
        ['Pengembangan setelah viabilitas ekonomi', 'Dikapitalisasi', 'p. 976 (item 12)'],
        ['Fasilitas atau peralatan dengan kegunaan alternatif', 'Dikapitalisasi; depresiasinya menjadi beban R&D', 'p. 974'],
        ['Biaya legal untuk memperoleh paten', 'Dikapitalisasi sebagai paten', 'p. 975 (item 9)'],
        ['Start-up dan biaya organisasi, rugi operasi awal, iklan', 'Dibebankan saat terjadi', 'pp. 977–978']
      ]
    },
    {
      kind: 'ol',
      items: [
        'Proyek mencapai kelayakan teknis untuk menyelesaikan aset sehingga siap digunakan atau dijual.',
        'Perusahaan berniat dan mampu menyelesaikan aset serta menggunakan atau menjualnya.',
        'Aset akan menghasilkan manfaat ekonomi masa depan yang probable (ada pasar untuk aset atau outputnya).',
        'Perusahaan memiliki sumber daya teknis, keuangan, dan lainnya yang memadai untuk menyelesaikan pengembangan.',
        'Perusahaan dapat mengukur biaya pengembangan secara andal.'
      ]
    },
    { kind: 'p', text: 'Seluruh kriteria viabilitas ekonomi di atas harus terpenuhi sebelum biaya pengembangan dikapitalisasi (Kieso p. 1013, catatan 17).' },
    DOGWOOD_DEVELOPMENT_CASE,
    REICHENBACH_CORRECTION_CASE,

    { kind: 'h2', text: '8. Presentation & Disclosure' },
    {
      kind: 'ul',
      items: [
        'Semua aset tidak berwujud selain goodwill disajikan sebagai pos terpisah; goodwill disajikan tersendiri. Akun kontra tidak ditampilkan untuk aset tidak berwujud di laporan posisi keuangan (Kieso p. 969).',
        'Beban amortisasi dan rugi penurunan nilai dilaporkan dalam beban operasi; pemulihan rugi di Other income and expense.',
        'Catatan mengungkapkan rekonsiliasi nilai tercatat, umur dan metode amortisasi, dasar penetapan umur tidak terbatas, serta total biaya R&D yang dibebankan setiap periode (Kieso p. 979).'
      ]
    },
    DEVON_HARRIS_REPORTING_CASE,

    { kind: 'h2', text: '9. Standards Comparison' },
    {
      kind: 'table',
      headers: ['Aspek', 'IFRS (Kieso IFRS 5e)', 'US GAAP'],
      rows: [
        ['Biaya riset', 'Dibebankan (p. 973)', 'Dibebankan'],
        ['Biaya pengembangan', 'Dikapitalisasi setelah kriteria viabilitas ekonomi terpenuhi (p. 1013, catatan 17)', 'Dibebankan, kecuali biaya perangkat lunak tertentu'],
        ['Pemulihan impairment aset tidak berwujud selain goodwill', 'Diperbolehkan dengan batas atas (pp. 965–967)', 'Dilarang untuk aset yang tetap digunakan'],
        ['Pemulihan impairment goodwill', 'Dilarang (p. 969)', 'Dilarang'],
        ['Model setelah pengakuan', 'Model biaya atau model revaluasi bila ada pasar aktif', 'Hanya model biaya'],
        ['Uji impairment goodwill', 'Pada tingkat CGU', 'Membandingkan nilai wajar unit pelaporan dengan nilai tercatatnya']
      ]
    },

    { kind: 'h2', text: '10. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Goodwill}=\\text{Harga beli}-\\text{Nilai wajar aset neto teridentifikasi}\\qquad\\text{Gain pembelian murah}=\\text{Nilai wajar aset neto}-\\text{Harga beli}' },
    { kind: 'formula', text: '\\text{Amortisasi}=\\frac{\\text{Cost}-\\text{Residu}}{\\min(\\text{umur legal},\\text{umur manfaat})}\\qquad\\text{Rugi impairment}=\\text{Nilai tercatat}-\\text{Recoverable amount}' },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'table',
      headers: ['Jebakan', 'Kesalahan umum', 'Perlakuan benar', 'Kieso'],
      rows: [
        ['Pembelaan paten yang berhasil', 'Menambahkan €12.650 ke Patents pada P11.1', 'Expense as legal fees (Illustration 11.13 item 13)', 'p. 976'],
        ['Amortisasi goodwill', 'Membagi goodwill dengan umur tertentu', 'Goodwill tidak diamortisasi; hanya diuji penurunan nilai', 'p. 961'],
        ['Pemulihan goodwill', 'Mencatat pemulihan rugi impairment goodwill', 'Tidak boleh dibalik', 'p. 969'],
        ['Pengembangan sebelum viabilitas', 'Mengkapitalisasi prototipe €34.000 pada CA11.1', 'Dibebankan; hanya €45.000 setelah 1 Juni yang dikapitalisasi', 'pp. 975–976'],
        ['Biaya organisasi dan rugi awal', 'Membiarkan rugi 2024 €16.000 di Intangible Assets pada P11.1', 'Dibebankan saat terjadi; koreksi ke Retained Earnings', 'pp. 977–978']
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Cek tiga karakteristik sebelum mengakui aset tidak berwujud.',
        'Umur terbatas diamortisasi selama umur terpendek; umur tidak terbatas hanya diuji impairment.',
        'Goodwill = harga beli − nilai wajar aset neto teridentifikasi; tidak diamortisasi dan impairment-nya tidak dibalik.',
        'Riset dan pengembangan sebelum viabilitas dibebankan; pengembangan setelah viabilitas dikapitalisasi.',
        'Pemulihan impairment aset selain goodwill dibatasi nilai tercatat tanpa impairment.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Checklist 60 detik sebelum mengumpulkan',
      text: 'Terrell: goodwill **\\$110.000**. Botticelli: rugi **\\$900.000**, amortisasi 2026 **\\$340.000**, pemulihan **\\$440.000**. Devon Harris: total aset tidak berwujud **\\$2.322.000**. Reichenbach: R&D **€190.000**, Legal Expense **€12.650**, total jurnal **€717.057**. Apakah setiap jurnal debit = kredit?'
    }
  ]
};
