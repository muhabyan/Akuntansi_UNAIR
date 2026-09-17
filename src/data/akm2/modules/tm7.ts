import type { ContentBlock, Reading } from '../../../types';

const FOREMAN_BOND_DISCOUNT_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Foreman Cleaners: Obligasi Diskonto Semesteran (E13.5 dengan data E13.4, Kieso p. 1150)',
  prompt: 'Data E13.4: Foreman Cleaners menerbitkan obligasi **€800.000**, bunga kupon 10% per tahun dibayar setiap **1 Juli dan 1 Januari**, jangka waktu 20 tahun, tertanggal **1 Januari 2025**, pada harga **84,95** untuk menghasilkan yield 12%. E13.5: dengan metode bunga efektif, catat (a) penerbitan 1 Januari 2025, (b) pembayaran bunga dan amortisasi 1 Juli 2025, dan (c) akrual bunga dan amortisasi 31 Desember 2025.',
  blocks: [
    {
      kind: 'table',
      headers: ['Tanggal', 'Kas bunga (5%)', 'Beban bunga (6%)', 'Amortisasi diskonto', 'Nilai tercatat'],
      rows: [
        ['1 Januari 2025', '—', '—', '—', '€679.600'],
        ['1 Juli 2025', '€40.000', '€679.600 × 6% = €40.776', '€776', '€680.376'],
        ['31 Desember 2025', '€40.000', '€680.376 × 6% = €40.822,56 ≈ €40.823', '€823', '€681.199']
      ],
      caption: 'Harga = 0,8495 × €800.000 = €679.600; diskonto awal €120.400. Kupon semesteran = €800.000 × 10% ÷ 2 = €40.000; tarif efektif semesteran = 12% ÷ 2 = 6%.'
    },
    {
      kind: 'journal',
      caption: '(a) 1 Januari 2025 — penerbitan pada 84,95',
      lines: [
        { account: 'Cash', debit: '€679.600' },
        { account: 'Bonds Payable', credit: '€679.600', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '(b) 1 Juli 2025 — pembayaran bunga dan amortisasi diskonto',
      lines: [
        { account: 'Interest Expense', debit: '€40.776' },
        { account: 'Bonds Payable', credit: '€776', isCredit: true },
        { account: 'Cash', credit: '€40.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '(c) 31 Desember 2025 — akrual bunga (dibayar 1 Januari 2026) dan amortisasi diskonto',
      lines: [
        { account: 'Interest Expense', debit: '€40.823' },
        { account: 'Interest Payable', credit: '€40.000', isCredit: true },
        { account: 'Bonds Payable', credit: '€823', isCredit: true }
      ]
    }
  ]
};

const SPENCER_AMORTIZATION_SCHEDULE_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Soal Dosen — Spencer plc: Tarif Efektif dan Skedul Amortisasi (E13.6, Kieso p. 1150)',
  prompt: 'Spencer plc menjual obligasi 10% bernilai jatuh tempo **£3.000.000** seharga **£2.783.724**. Obligasi tertanggal **1 Januari 2025**, jatuh tempo **1 Januari 2030**, bunga dibayar tahunan setiap 1 Januari. Susun skedul beban bunga dan amortisasi diskonto dengan metode bunga efektif (petunjuk: tarif efektif harus dihitung).',
  blocks: [
    { kind: 'h3', text: 'Langkah 1 — tarif efektif' },
    {
      kind: 'formula',
      text: '\\text{£2.783.724}=\\text{£3.000.000}\\times(1+i)^{-5}+\\text{£300.000}\\times\\frac{1-(1+i)^{-5}}{i}'
    },
    {
      kind: 'formula',
      text: 'i=12\\%:\\quad\\text{£3.000.000}\\times 0{,}56743+\\text{£300.000}\\times 3{,}60478=\\text{£1.702.290}+\\text{£1.081.434}=\\text{£2.783.724}',
      note: 'Harga di bawah nominal berarti tarif efektif di atas 10%. Dengan faktor tabel nilai kini 5 desimal seperti Kieso, 12% menghasilkan tepat harga jual.'
    },
    { kind: 'h3', text: 'Langkah 2 — skedul amortisasi' },
    {
      kind: 'table',
      headers: ['Tanggal', 'Kas dibayar (10%)', 'Beban bunga (12%)', 'Amortisasi diskonto', 'Nilai tercatat'],
      rows: [
        ['1/1/2025', '—', '—', '—', '£2.783.724'],
        ['1/1/2026', '£300.000', '£334.047', '£34.047', '£2.817.771'],
        ['1/1/2027', '£300.000', '£338.133', '£38.133', '£2.855.904'],
        ['1/1/2028', '£300.000', '£342.708', '£42.708', '£2.898.612'],
        ['1/1/2029', '£300.000', '£347.833', '£47.833', '£2.946.445'],
        ['1/1/2030', '£300.000', '£353.555', '£53.555', '£3.000.000'],
        ['Total', '£1.500.000', '£1.716.276', '£216.276', '—']
      ],
      caption: 'Beban bunga = nilai tercatat awal × 12%, dibulatkan ke pound terdekat (2025: £2.783.724 × 12% = £334.046,88 ≈ £334.047).'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Pembulatan tahun terakhir',
      text: 'Amortisasi tahun terakhir (£3.000.000 − £2.946.445 = £53.555) menyerap selisih pembulatan, sehingga beban bunga 2029 menjadi £353.555 dan nilai tercatat tepat £3.000.000 saat jatuh tempo (Kieso p. 1113).'
    },
    { kind: 'h3', text: 'Langkah 3 — jurnal terkait' },
    {
      kind: 'journal',
      caption: '1 Januari 2025 — penerbitan',
      lines: [
        { account: 'Cash', debit: '£2.783.724' },
        { account: 'Bonds Payable', credit: '£2.783.724', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '31 Desember 2025 — akrual bunga tahun pertama dan amortisasi diskonto',
      lines: [
        { account: 'Interest Expense', debit: '£334.047' },
        { account: 'Interest Payable', credit: '£300.000', isCredit: true },
        { account: 'Bonds Payable', credit: '£34.047', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '1 Januari 2026 — pembayaran bunga',
      lines: [
        { account: 'Interest Payable', debit: '£300.000' },
        { account: 'Cash', credit: '£300.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '1 Januari 2030 — pelunasan pokok saat jatuh tempo',
      lines: [
        { account: 'Bonds Payable', debit: '£3.000.000' },
        { account: 'Cash', credit: '£3.000.000', isCredit: true }
      ]
    }
  ]
};

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar',
  ref: 'Kieso IFRS 5e Ch. 13 (pp. 1100–1170) | IFRS 9, IAS 1, IFRIC 19',
  intro: 'TM7 membahas Kieso Bab 13: karakteristik dan jenis obligasi, penilaian dengan nilai kini, metode bunga efektif, akrual akhir tahun, penerbitan di antara tanggal bunga dan biaya penerbitan, wesel bayar jangka panjang, penghentian utang, opsi nilai wajar, serta penyajian dan analisis solvabilitas. Soal dosen E13.5 (dengan data E13.4) dan E13.6 dibahas langkah demi langkah.',
  objectives: [
    'Menjelaskan perjanjian obligasi, jenis-jenis obligasi, dan hubungan tarif kupon dengan tarif efektif.',
    'Menghitung harga obligasi dari nilai kini pokok dan anuitas kupon, serta menurunkan tarif efektif dari harga.',
    'Menyusun skedul amortisasi diskonto atau premi dengan metode bunga efektif dan mencatat jurnalnya secara neto di Bonds Payable.',
    'Mencatat akrual bunga akhir tahun, penerbitan di antara tanggal bunga, biaya penerbitan, dan wesel bayar jangka panjang.',
    'Menghitung gain atau loss penghentian utang dan menilai penyajian serta rasio solvabilitas.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['Karakteristik', 'Apa isi perjanjian obligasi dan jenis obligasinya?', 'Klasifikasi obligasi'],
        ['Penilaian', 'Berapa nilai kini pokok dan kupon pada tarif efektif?', 'Harga penerbitan: pari, diskonto, atau premi'],
        ['Metode bunga efektif', 'Berapa beban bunga, kas kupon, dan amortisasi per periode?', 'Skedul amortisasi dan jurnal'],
        ['Situasi khusus', 'Akhir tahun di antara tanggal bunga? Biaya penerbitan?', 'Jurnal akrual dan nilai tercatat awal'],
        ['Wesel jangka panjang', 'Apakah wesel berbunga realistis?', 'Nilai kini dan tarif imputasi'],
        ['Penghentian', 'Nilai tercatat bersih dibanding harga penebusan?', 'Gain atau loss di laba rugi'],
        ['Penyajian', 'Bagian mana yang jatuh tempo dalam 12 bulan?', 'Pengungkapan dan rasio solvabilitas']
      ],
      caption: 'Alur TM7: obligasi → penilaian → bunga efektif → situasi khusus → wesel → penghentian → penyajian.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Penempatan topik dalam RPP',
      text: 'RPP AKM II mencantumkan liabilitas jangka panjang pada pertemuan 9–10 dengan peta bab edisi lama ("KW ch 14"). Dosen menugaskan topik ini (Kieso IFRS 5e Bab 13, soal E13.5 dan E13.6) untuk pertemuan 7.'
    },

    { kind: 'h2', text: '2. Nature of Non-Current Liabilities & Bond Types' },
    {
      kind: 'p',
      text: 'Liabilitas jangka panjang adalah kewajiban kini yang penyelesaiannya tidak diharapkan dalam 12 bulan setelah periode pelaporan atau dalam siklus operasi normal (Kieso p. 1101). Penerbitan obligasi diatur oleh **perjanjian obligasi (bond indenture)** yang memuat jumlah nominal yang diizinkan, tarif kupon, tanggal pembayaran bunga, tanggal jatuh tempo, ketentuan penebusan atau konversi, dan kovenan pembatas.'
    },
    {
      kind: 'table',
      headers: ['Jenis', 'Ciri'],
      rows: [
        ['Secured vs unsecured', 'Secured bonds dijamin aset tertentu (mortgage bonds, collateral trust bonds); unsecured bonds (debentures) hanya bersandar pada kredit umum penerbit.'],
        ['Term vs serial', 'Term bonds jatuh tempo pada satu tanggal; serial bonds jatuh tempo bertahap.'],
        ['Callable', 'Penerbit berhak menebus sebelum jatuh tempo pada call price.'],
        ['Convertible', 'Pemegang dapat menukar obligasi menjadi saham penerbit.'],
        ['Zero-interest / deep-discount', 'Tanpa kupon berkala; dijual jauh di bawah nominal.']
      ],
      caption: 'Kieso pp. 1102–1103.'
    },

    { kind: 'h2', text: '3. Bond Valuation' },
    {
      kind: 'formula',
      text: '\\text{Harga obligasi}=\\text{Nominal}\\times(1+i)^{-n}+\\text{Kupon periodik}\\times\\frac{1-(1+i)^{-n}}{i}',
      note: 'i = tarif efektif (pasar) per periode; n = jumlah periode bunga (Kieso pp. 1104–1108).'
    },
    {
      kind: 'table',
      headers: ['Hubungan tarif', 'Harga', 'Amortisasi'],
      rows: [
        ['Tarif kupon = tarif efektif', 'Pari (100% nominal)', 'Tidak ada'],
        ['Tarif kupon < tarif efektif', 'Diskonto (di bawah nominal)', 'Menambah nilai tercatat sampai nominal'],
        ['Tarif kupon > tarif efektif', 'Premi (di atas nominal)', 'Mengurangi nilai tercatat sampai nominal']
      ]
    },

    { kind: 'h2', text: '4. Effective-Interest Method' },
    {
      kind: 'p',
      text: 'Di bawah IFRS 9, diskonto dan premi **wajib** diamortisasi dengan metode bunga efektif, sehingga beban bunga merupakan persentase konstan dari nilai tercatat (Kieso p. 1109). IFRS mencatat obligasi **secara neto**: diskonto atau premi tidak dicatat di akun terpisah, melainkan langsung menambah atau mengurangi Bonds Payable (Kieso p. 1112).'
    },
    {
      kind: 'formula',
      text: '\\text{Beban bunga}=\\text{Nilai tercatat awal}\\times\\text{tarif efektif}\\qquad\\text{Kas kupon}=\\text{Nominal}\\times\\text{tarif kupon}'
    },
    {
      kind: 'formula',
      text: '\\text{Amortisasi diskonto}=\\text{Beban bunga}-\\text{Kas kupon}\\qquad\\text{Amortisasi premi}=\\text{Kas kupon}-\\text{Beban bunga}'
    },
    SPENCER_AMORTIZATION_SCHEDULE_CASE,

    { kind: 'h2', text: '5. Year-End Accrual, Issuance Between Interest Dates & Issue Costs' },
    {
      kind: 'table',
      headers: ['Situasi', 'Perlakuan', 'Kieso'],
      rows: [
        ['Akhir tahun di antara tanggal bunga', 'Debit Interest Expense (nilai tercatat × tarif efektif × bulan/12); kredit Interest Payable (kupon berjalan) dan Bonds Payable (amortisasi diskonto) atau debit Bonds Payable (amortisasi premi)', 'pp. 1114–1115'],
        ['Penerbitan di antara tanggal bunga', 'Pembeli membayar harga obligasi ditambah bunga berjalan sejak tanggal bunga terakhir; kas didebit sebesar keduanya, Bonds Payable dikredit sebesar harga, dan bunga berjalan dikredit ke Interest Expense (atau Interest Payable)', 'pp. 1115–1117'],
        ['Biaya penerbitan', 'Mengurangi kas bersih dan nilai tercatat awal Bonds Payable; tidak dicatat sebagai aset tangguhan; menaikkan tarif efektif', 'pp. 1118–1119']
      ]
    },
    FOREMAN_BOND_DISCOUNT_CASE,

    { kind: 'h2', text: '6. Long-Term Notes Payable' },
    {
      kind: 'table',
      headers: ['Jenis wesel', 'Pengukuran', 'Kieso'],
      rows: [
        ['Wesel tanpa bunga', 'Nilai kini arus kas (kas yang diterima); selisih dengan nominal adalah diskonto yang diamortisasi ke beban bunga', 'p. 1122'],
        ['Wesel dengan bunga tidak realistis', 'Didiskontokan pada tarif pasar (imputed interest rate); diskonto atau premi diamortisasi', 'pp. 1122–1124'],
        ['Wesel untuk properti, barang, atau jasa', 'Nilai wajar barang/jasa atau nilai wajar wesel, mana yang lebih andal; bila tidak ada, gunakan tarif imputasi', 'p. 1124'],
        ['Wesel hipotek (mortgage notes)', 'Dijamin properti; setiap angsuran memuat bunga dan pelunasan pokok', 'p. 1128']
      ]
    },

    { kind: 'h2', text: '7. Extinguishment of Liabilities' },
    {
      kind: 'formula',
      text: '\\text{Gain (loss) penghentian}=\\text{Nilai tercatat bersih}-\\text{Harga penebusan}',
      note: 'Nilai tercatat bersih mencakup nominal yang disesuaikan dengan sisa diskonto/premi dan biaya penerbitan; gain atau loss diakui di laba rugi (Kieso p. 1129).'
    },
    {
      kind: 'table',
      headers: ['Cara penghentian', 'Perlakuan', 'Kieso'],
      rows: [
        ['Pelunasan dengan kas sebelum jatuh tempo', 'Selisih nilai tercatat bersih dan harga penebusan ke laba rugi', 'p. 1129'],
        ['Pertukaran utang dengan saham (IFRIC 19)', 'Saham diukur pada nilai wajarnya; selisih dengan nilai tercatat utang ke laba rugi', 'p. 1131'],
        ['Modifikasi persyaratan', 'Bandingkan nilai kini arus kas baru (didiskontokan dengan tarif efektif awal) dengan nilai tercatat; selisih ≥ 10% berarti substansial: utang lama dihentikan dan utang baru dicatat pada nilai wajar. Selisih < 10%: utang tetap, nilai tercatat disesuaikan dan gain/loss ke laba rugi', 'p. 1133']
      ]
    },

    { kind: 'h2', text: '8. Fair Value Option, Presentation & Analysis' },
    {
      kind: 'ul',
      items: [
        '**Opsi nilai wajar:** liabilitas keuangan boleh diukur pada nilai wajar; perubahan akibat **risiko kredit entitas sendiri** ke OCI, sisanya ke laba rugi (Kieso p. 1137).',
        '**Penyajian:** bagian yang jatuh tempo dalam 12 bulan dipindahkan ke liabilitas jangka pendek.',
        '**Pengungkapan:** sifat liabilitas, tarif, jatuh tempo, ketentuan penebusan dan konversi, kovenan, aset yang dijaminkan, dan jatuh tempo pokok lima tahun ke depan.'
      ]
    },
    {
      kind: 'formula',
      text: '\\text{Debt to assets}=\\frac{\\text{Total liabilitas}}{\\text{Total aset}}\\qquad\\text{Times interest earned}=\\frac{\\text{Laba sebelum pajak dan beban bunga}}{\\text{Beban bunga}}',
      note: 'Kieso pp. 1142–1143.'
    },

    { kind: 'h2', text: '9. Standards Comparison' },
    {
      kind: 'table',
      headers: ['Aspek', 'IFRS (Kieso IFRS 5e)', 'US GAAP'],
      rows: [
        ['Pencatatan diskonto dan premi', 'Neto langsung di Bonds Payable', 'Akun terpisah: Discount on Bonds Payable (kontra) atau Premium on Bonds Payable (tambahan)'],
        ['Metode amortisasi', 'Wajib metode bunga efektif', 'Metode bunga efektif; garis lurus diizinkan bila perbedaannya tidak material'],
        ['Biaya penerbitan', 'Mengurangi nilai tercatat awal liabilitas', 'Sama: dikurangkan dari nilai tercatat liabilitas'],
        ['Opsi nilai wajar dan risiko kredit sendiri', 'Porsi risiko kredit sendiri ke OCI', 'Porsi risiko kredit sendiri ke OCI']
      ]
    },
    {
      kind: 'table',
      headers: ['Tanggal (Foreman Cleaners, E13.5)', 'IFRS: neto di Bonds Payable', 'US GAAP: akun diskonto terpisah'],
      rows: [
        ['1 Januari 2025', 'Dr Cash €679.600; Cr Bonds Payable €679.600', 'Dr Cash €679.600, Dr Discount on Bonds Payable €120.400; Cr Bonds Payable €800.000'],
        ['1 Juli 2025', 'Dr Interest Expense €40.776; Cr Bonds Payable €776, Cr Cash €40.000', 'Dr Interest Expense €40.776; Cr Discount on Bonds Payable €776, Cr Cash €40.000'],
        ['31 Desember 2025', 'Dr Interest Expense €40.823; Cr Interest Payable €40.000, Cr Bonds Payable €823', 'Dr Interest Expense €40.823; Cr Interest Payable €40.000, Cr Discount on Bonds Payable €823']
      ],
      caption: 'Catatan perbandingan (Kieso p. 1171): beban bunga dan nilai tercatat neto sama; yang berbeda hanya akun tempat diskonto dicatat.'
    },

    { kind: 'h2', text: '10. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Kas kupon}=\\text{Nominal}\\times\\text{tarif kupon}\\times\\frac{\\text{bulan}}{12}\\qquad\\text{Beban bunga}=\\text{Nilai tercatat awal}\\times\\text{tarif efektif}\\times\\frac{\\text{bulan}}{12}' },
    { kind: 'formula', text: '\\text{Amortisasi}=|\\text{Beban bunga}-\\text{Kas kupon}|\\qquad\\text{Gain (loss) penghentian}=\\text{Nilai tercatat bersih}-\\text{Harga penebusan}' },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'table',
      headers: ['Jebakan', 'Kesalahan umum', 'Perlakuan benar', 'Kieso'],
      rows: [
        ['Tarif untuk beban bunga', 'Nilai tercatat × tarif kupon', 'Beban bunga = nilai tercatat × tarif efektif; kas = nominal × tarif kupon', 'p. 1109'],
        ['Arah amortisasi', 'Mengurangkan amortisasi diskonto dari nilai tercatat', 'Diskonto menambah nilai tercatat; premi mengurangi', 'p. 1113'],
        ['Biaya penerbitan', 'Mencatat Deferred Bond Issue Costs sebagai aset', 'Kurangi kas bersih dan nilai tercatat awal liabilitas', 'p. 1118'],
        ['Bunga semesteran', 'Memakai tarif tahunan penuh', 'Bagi tarif kupon dan tarif efektif dengan 2 (E13.5: 5% dan 6%)', 'E13.5'],
        ['Opsi nilai wajar', 'Seluruh perubahan nilai wajar ke laba rugi', 'Porsi risiko kredit sendiri ke OCI', 'p. 1137']
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Bandingkan tarif kupon dan tarif efektif untuk menentukan pari, diskonto, atau premi.',
        'Hitung beban bunga dari nilai tercatat awal periode, bukan dari nominal.',
        'Di bawah IFRS, amortisasi dicatat langsung ke Bonds Payable.',
        'Pada akhir tahun di antara tanggal bunga, akrualkan kupon ke Interest Payable dan catat amortisasinya.',
        'Nilai tercatat harus tepat sama dengan nominal pada jatuh tempo; periode terakhir menyerap pembulatan.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Checklist 60 detik sebelum mengumpulkan',
      text: 'Foreman: kas **€679.600**, beban bunga **€40.776** (1 Juli) dan **€40.823** (31 Desember). Spencer: tarif efektif **12%**, total beban bunga **£1.716.276**, nilai tercatat akhir **£3.000.000**. Apakah setiap jurnal debit = kredit?'
    }
  ]
};
