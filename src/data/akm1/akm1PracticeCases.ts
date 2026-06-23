import type { ContentBlock } from '../../types';

export interface Akm1PracticeCase {
  id: string;
  caseTitle: string;
  source: string;
  linkedTm: number[];
  linkedReportIds: string[];
  learningGoal: string;
  promptBlocks: ContentBlock[];
  guideBlocks?: ContentBlock[];
  explanationBlock: ContentBlock;
}

const sourceCase = (text: string): ContentBlock => ({
  kind: 'callout',
  variant: 'info',
  title: 'Sumber dan konteks kasus',
  text,
});

const attemptFirst = (text: string): ContentBlock => ({
  kind: 'callout',
  variant: 'tip',
  title: 'Kerjakan sebelum membuka pembahasan',
  text,
});

const CASSY_OPENING_BALANCES: ContentBlock = {
  kind: 'table',
  headers: ['Saldo Cassy Corporation per 31 Desember 2024', 'Jumlah'],
  rows: [
    ['Land', '$36.000'],
    ['Buildings', '$144.000'],
    ['Equipment', '$108.000'],
    ['Accumulated depreciation—buildings', '($36.000)'],
    ['Accumulated depreciation—equipment', '($13.200)'],
    ['Patents', '$48.000'],
    ['Current assets', '$282.000'],
    ['Total assets', '$568.800'],
    ['Share capital—ordinary', '$216.000'],
    ['Retained earnings', '$52.800'],
    ['Bonds payable', '$120.000'],
    ['Current liabilities', '$180.000'],
    ['Total equity and liabilities', '$568.800'],
  ],
  caption: 'Given data - opening statement of financial position pada Cassy Corporation Practice Problem, Kieso IFRS 5e Chapter 4.',
};

const CASSY_2025_FACTS: ContentBlock = {
  kind: 'table',
  headers: ['Informasi tersedia untuk tahun 2025', 'Jumlah / fakta'],
  rows: [
    ['Treasury shares purchased at cost', '$13.200'],
    ['Cash dividends declared and paid', '$36.000'],
    ['Long-term investment in shares purchased', '$19.200'],
    ['Current assets other than cash increased', '$34.800'],
    ['Current liabilities increased', '$15.600'],
    ['Depreciation expense - building / equipment', '$4.800 / $10.800'],
    ['Net income', '$66.000'],
    ['Bonds payable issued', '$60.000'],
    ['Addition to building completed', '$32.400'],
    ['Patent amortization', '$3.000'],
    ['Equipment sold: cost / accumulated depreciation / proceeds', '$24.000 / $9.600 / $12.000'],
  ],
  caption: 'Given data - sepuluh informasi Cassy untuk penyusunan laporan 2025. Data ini digunakan bersama oleh TM 5, TM 6, dan fitur Laporan.',
};

export const CASSY_SFP_CASE: Akm1PracticeCase = {
  id: 'cassy-sfp-2025',
  caseTitle: 'Cassy Corporation - Statement of Financial Position',
  source: 'Kieso IFRS 5e · Chapter 4 · Practice Problem · PDF physical pages 400-402',
  linkedTm: [5],
  linkedReportIds: ['financial-statement-financial-position'],
  learningGoal: 'Menyusun classified statement of financial position dari opening balances dan perubahan periode berjalan.',
  promptBlocks: [
    sourceCase('**Cassy Corporation** memiliki statement of financial position pada akhir 2024 dan sepuluh informasi perubahan selama 2025. Gunakan data yang terlihat di bawah ini untuk menyusun classified statement of financial position pada 31 Desember 2025.'),
    CASSY_OPENING_BALANCES,
    CASSY_2025_FACTS,
    { kind: 'h3', text: 'Requirements - Statement of Financial Position' },
    { kind: 'ol', items: [
      'Hitung saldo akhir buildings, accumulated depreciation, equipment, patents, retained earnings, bonds payable, dan current liabilities.',
      'Tentukan total equity setelah memperhitungkan treasury shares yang diperoleh kembali.',
      'Tentukan current assets sebagai **plug figure** setelah total equity and liabilities dapat dihitung.',
      'Susun classified statement of financial position Cassy Corporation per 31 Desember 2025 pada workspace di bawah.',
    ] },
    attemptFirst('Isi seluruh baris input laporan lebih dahulu. Setelah memeriksa jawaban, buka pembahasan untuk menelusuri asal setiap saldo akhir dan plug figure current assets.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan langkah demi langkah - Cassy Statement of Financial Position',
    prompt: 'Buka setelah Anda mencoba menyusun laporan dan memeriksa total assets dengan total equity and liabilities.',
    blocks: [
      { kind: 'table', headers: ['Saldo yang diturunkan', 'Perhitungan', 'Hasil'], rows: [
        ['Buildings', '$144.000 + $32.400', '$176.400'],
        ['Accumulated depreciation—buildings', '$36.000 + $4.800', '$40.800'],
        ['Equipment', '$108.000 - $24.000', '$84.000'],
        ['Accumulated depreciation—equipment', '$13.200 - $9.600 + $10.800', '$14.400'],
        ['Net property, plant, and equipment', '$36.000 + ($176.400 - $40.800) + ($84.000 - $14.400)', '$241.200'],
        ['Patents', '$48.000 - $3.000', '$45.000'],
        ['Retained earnings', '$52.800 + $66.000 - $36.000', '$82.800'],
        ['Total equity', '$216.000 + $82.800 - $13.200', '$285.600'],
        ['Bonds payable', '$120.000 + $60.000', '$180.000'],
        ['Current liabilities', '$180.000 + $15.600', '$195.600'],
      ], caption: 'Derivasi saldo yang tersedia langsung dari informasi kasus Cassy.' },
      { kind: 'formula', text: 'Total equity and liabilities = $285.600 + $180.000 + $195.600 = $661.200', note: 'Total ini menentukan total assets karena statement of financial position harus seimbang.' },
      { kind: 'formula', text: 'Current assets = $661.200 - $19.200 - $241.200 - $45.000 = $355.800', note: 'Kieso menentukan current assets sebagai plug figure karena rincian perubahan kas tidak diberikan sebagai saldo akhir tersendiri.' },
      { kind: 'callout', variant: 'key', title: 'Logika laporan', text: 'Plug figure bukan tebakan. Current assets baru ditentukan setelah seluruh non-current assets serta equity and liabilities dapat dihitung secara independen dari data kasus.' },
    ],
  },
};

export const CASSY_SCF_CASE: Akm1PracticeCase = {
  id: 'cassy-scf-2025',
  caseTitle: 'Cassy Corporation - Statement of Cash Flows',
  source: 'Kieso IFRS 5e · Chapter 4 · Practice Problem · PDF physical pages 401-403',
  linkedTm: [6],
  linkedReportIds: ['financial-statement-cash-flows'],
  learningGoal: 'Menyusun statement of cash flows indirect method dari data laba, transaksi aset, dan aktivitas pembiayaan.',
  promptBlocks: [
    sourceCase('Gunakan **informasi Cassy tahun 2025** yang sama dengan TM 5. Untuk statement of cash flows, jangan langsung menyalin jawaban laporan: tentukan dahulu adjustment operating, kas investing, dan kas financing dari fakta transaksi.'),
    CASSY_2025_FACTS,
    { kind: 'h3', text: 'Requirements - Statement of Cash Flows' },
    { kind: 'ol', items: [
      'Hitung gain atau loss atas penjualan equipment dari cost, accumulated depreciation, dan cash proceeds.',
      'Susun cash flows from operating activities menggunakan **indirect method**, dimulai dari net income.',
      'Klasifikasikan purchase/sale of long-term assets sebagai investing activities serta bonds, dividends, dan treasury shares sebagai financing activities.',
      'Hitung net increase in cash untuk tahun 2025.',
    ] },
    attemptFirst('Builder hanya menguji hasil. Fakta transaksi di atas adalah data soal; nilai seperti loss on sale dan net cash flows harus Anda turunkan terlebih dahulu.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan langkah demi langkah - Cassy Statement of Cash Flows',
    prompt: 'Buka setelah mencoba mengklasifikasikan transaksi dan mengisi operating, investing, serta financing sections.',
    blocks: [
      { kind: 'formula', text: 'Carrying amount of equipment sold = $24.000 - $9.600 = $14.400; Loss on sale = $14.400 - $12.000 = $2.400', note: 'Loss ditambahkan kembali pada indirect method karena sudah mengurangi net income tetapi bukan operating cash outflow.' },
      { kind: 'table', headers: ['Section', 'Derivasi', 'Net cash flow'], rows: [
        ['Operating activities', '$66.000 + $2.400 + $15.600 + $3.000 - $34.800 + $15.600', '$67.800'],
        ['Investing activities', '$12.000 - $32.400 - $19.200', '($39.600)'],
        ['Financing activities', '$60.000 - $36.000 - $13.200', '$10.800'],
      ], caption: 'Indirect-method reconciliation dan pengelompokan kas Cassy Corporation.' },
      { kind: 'formula', text: 'Net increase in cash = $67.800 - $39.600 + $10.800 = $39.000', note: 'Nilai ini menjelaskan komponen kas yang termasuk dalam plug figure current assets pada statement of financial position.' },
      { kind: 'callout', variant: 'key', title: 'Hubungan TM 5 dan TM 6', text: 'Cassy dirancang sebagai satu kasus terpadu: arus kas bersih $39.000 adalah informasi yang membantu menjelaskan current assets pada laporan posisi keuangan, sementara transaksi nonkas tidak masuk sebagai cash flow.' },
    ],
  },
};

export const VESPER_TVM_CASE: Akm1PracticeCase = {
  id: 'vesper-tvm',
  caseTitle: 'Vesper Inc. - Time Value of Money Decisions',
  source: 'Kieso IFRS 5e · Chapter 5 · Practice Problem · PDF physical pages 483-484',
  linkedTm: [7],
  linkedReportIds: [],
  learningGoal: 'Memilih model TVM yang tepat dan menghitung single sum, bond price, sinking fund, serta deferred pension annuity.',
  promptBlocks: [
    sourceCase('**Vesper Inc.**, produsen scooters, menghadapi empat keputusan yang memerlukan time value of money. Bulatkan hasil akhir ke satuan terdekat seperti pada sumber Kieso.'),
    { kind: 'table', headers: ['Bagian', 'Data diketahui', 'Yang diminta'], rows: [
      ['a. Security deposit', 'Deposit $12.000; dikembalikan setelah 10 tahun; bunga majemuk 10% per tahun.', 'Jumlah yang diterima saat masa sewa berakhir.'],
      ['b. Bond issue', 'Face value $3.000.000; stated rate 11%; jatuh tempo 15 tahun; bunga tiap 6 bulan; market rate 10%.', 'Selling price obligasi pada tanggal penerbitan.'],
      ['c. Sinking fund', 'Setoran akhir tahun $90.000; 15 tahun; return 10% per tahun.', 'Apakah dana cukup melunasi bonds; jika tidak, hitung deficiency.'],
      ['d. Pension obligation', 'Pembayaran pensiun total $800.000 per tahun; retirement 15 tahun lagi; pembayaran selama 10 tahun; discount rate 8%.', 'Present value pension liability pada awal 2025.'],
    ], caption: 'Lembar soal Vesper Inc. - seluruh angka yang diperlukan untuk workspace disajikan sebelum user mulai menghitung.' },
    { kind: 'h3', text: 'Requirements - pilih model sebelum menghitung' },
    { kind: 'ol', items: [
      'Identifikasi apakah tiap bagian memakai single sum, ordinary annuity, atau deferred annuity.',
      'Tentukan jumlah periode dan tingkat bunga per periode, terutama untuk bond yang membayar bunga semiannual.',
      'Tulis formula dan faktor yang digunakan sebelum memasukkan jawaban akhir pada worksheet.',
    ] },
  ],
  guideBlocks: [
    { kind: 'h3', text: 'Guided Calculation - model dan faktor yang digunakan' },
    { kind: 'table', headers: ['Bagian', 'Model perhitungan', 'Faktor Kieso yang dipakai'], rows: [
      ['a. Deposit', 'FV single sum = PV × FVFn,i', 'FVF 10 tahun, 10% = 2,59374'],
      ['b. Bunga bonds', 'PV ordinary annuity = R × PVF-OAn,i; R = $3.000.000 × 11% ÷ 2', '30 periode, 5% = 15,37245'],
      ['b. Principal bonds', 'PV single sum = FV × PVFn,i', '30 periode, 5% = 0,23138'],
      ['c. Sinking fund', 'FV ordinary annuity = R × FVF-OAn,i', '15 periode, 10% = 31,77248'],
      ['d. Pension saat retirement', 'PV ordinary annuity = R × PVF-OAn,i', '10 periode, 8% = 6,71008'],
      ['d. Pension pada awal 2025', 'PV single sum dari nilai pada retirement', '15 periode, 8% = 0,31524'],
    ], caption: 'Faktor tabel berasal dari solusi Practice Problem Vesper pada Kieso Chapter 5. Tahap ini memberi jalur hitung tanpa mengganti kewajiban user untuk menghitung output akhir.' },
    attemptFirst('Gunakan formula dan faktor di atas untuk mengisi worksheet. Pembahasan akhir menampilkan substitusi dan hasil hanya setelah Anda memilih membuka solusi.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan langkah demi langkah - Vesper Time Value of Money',
    prompt: 'Buka setelah Anda menentukan model, periode, interest rate per period, dan mencoba seluruh output Vesper.',
    blocks: [
      { kind: 'table', headers: ['Bagian', 'Substitusi', 'Hasil akhir'], rows: [
        ['a. Future value deposit', '$12.000 × 2,59374', '$31.125'],
        ['b. PV interest payments', '$165.000 × 15,37245', '$2.536.454'],
        ['b. PV principal', '$3.000.000 × 0,23138', '$694.140'],
        ['b. Selling price of bonds', '$2.536.454 + $694.140', '$3.230.594'],
        ['c. Sinking fund at maturity', '$90.000 × 31,77248', '$2.859.523'],
        ['c. Deficiency', '$3.000.000 - $2.859.523', '$140.477'],
        ['d. Pension value at retirement', '$800.000 × 6,71008', '$5.368.064'],
        ['d. Pension liability at beginning of 2025', '$5.368.064 × 0,31524', '$1.692.228'],
      ], caption: 'Substitusi dan pembulatan mengikuti solusi Practice Problem Vesper pada Kieso IFRS 5e Chapter 5.' },
      { kind: 'callout', variant: 'key', title: 'Kunci pemilihan model', text: 'Bonds menggunakan dua present values karena terdiri dari rangkaian bunga dan satu principal. Pension Vesper adalah deferred annuity: nilai anuitas dihitung pada tanggal retirement, kemudian didiskontokan kembali ke awal 2025.' },
    ],
  },
};

export const CINER_FULL_CYCLE_CASE: Akm1PracticeCase = {
  id: 'ciner-full-cycle-2025',
  caseTitle: 'Ciner Cabinets - Full Accounting Cycle Bridge',
  source: 'Kieso IFRS 5e · Chapter 2 · Illustration 2C.1 and Illustrations 2.44-2.46 · PDF physical pages 182-184, 196-197',
  linkedTm: [3],
  linkedReportIds: [],
  learningGoal: 'Menelusuri alur unadjusted trial balance, adjusting entries, adjusted trial balance, laporan, dan saldo akhir pada perusahaan dagang perpetual.',
  promptBlocks: [
    sourceCase('**Ciner Cabinets** menggunakan perpetual inventory system. Kasus ini menghubungkan worksheet 10 kolom dengan hasil laporan perusahaan dagang: inventory dan cost of goods sold sudah menjadi bagian dari alur sebelum penutupan.'),
    { kind: 'h3', text: 'Given Data - Unadjusted Trial Balance Ciner Cabinets' },
    { kind: 'table', headers: ['Akun', 'Debit', 'Credit'], rows: [
      ['Cash', '$1.200', '-'],
      ['Notes receivable', '$16.000', '-'],
      ['Accounts receivable', '$41.000', '-'],
      ['Allowance for doubtful accounts', '-', '$2.000'],
      ['Inventory - year-end under perpetual system', '$40.000', '-'],
      ['Prepaid insurance', '$900', '-'],
      ['Equipment', '$67.000', '-'],
      ['Accumulated depreciation-equipment', '-', '$12.000'],
      ['Notes payable', '-', '$20.000'],
      ['Accounts payable', '-', '$13.500'],
      ['Bonds payable', '-', '$30.000'],
      ['Share capital-ordinary', '-', '$50.000'],
      ['Retained earnings, January 1, 2025', '-', '$16.200'],
      ['Dividends', '$2.000', '-'],
      ['Sales revenue', '-', '$400.000'],
      ['Cost of goods sold', '$316.000', '-'],
      ['Salaries and wages expense (sales)', '$20.000', '-'],
      ['Advertising expense', '$10.200', '-'],
      ['Salaries and wages expense (general)', '$19.000', '-'],
      ['Telephone and Internet expense', '$600', '-'],
      ['Rent expense', '$4.800', '-'],
      ['Property tax expense', '$3.300', '-'],
      ['Interest expense', '$1.700', '-'],
      ['Total trial balance', '$543.700', '$543.700'],
    ], caption: 'Transcription of the trial balance portion of Kieso Illustration 2C.1. Inventory $40.000 is the year-end inventory produced by a perpetual inventory system.' },
    { kind: 'h3', text: 'Adjustment Facts - December 31, 2025' },
    { kind: 'table', headers: ['Ref.', 'Adjustment fact', 'Amount / computation'], rows: [
      ['a', 'Depreciation of equipment at 10% of original cost $67.000', '$6.700'],
      ['b', 'Bad debt expense needed to bring allowance to $3.000', '$1.000'],
      ['c', 'Insurance expired during the year', '$360'],
      ['d', 'Interest accrued on notes receivable', '$800'],
      ['e', 'Rent Expense contains rent paid in advance applicable to next year', '$500 prepaid rent'],
      ['f', 'Property taxes accrued at December 31', '$2.000'],
      ['g', 'Income taxes payable estimated', '$3.440'],
    ], caption: 'Adjustment facts transcribed from Kieso Appendix 2C, accompanying Illustration 2C.1.' },
    { kind: 'h3', text: 'Requirements - trace the full accounting cycle' },
    { kind: 'ol', items: [
      'Lengkapi kolom adjustments dan adjusted trial balance pada worksheet baris terpilih di bawah.',
      'Pindahkan saldo yang telah disesuaikan ke kolom income statement atau statement of financial position yang benar.',
      'Gunakan checkpoint setelah worksheet untuk menentukan total adjustments, adjusted trial balance, net income, ending retained earnings, total assets, serta total equity and liabilities.',
      'Jelaskan mengapa Inventory $40.000 tidak diperoleh dari adjusting entry periodik pada kasus ini: Ciner memakai perpetual inventory system.',
    ] },
    attemptFirst('Data trial balance dan adjustment facts di atas adalah lembar soal. Kerjakan worksheet dan checkpoint sebelum membuka pembahasan siklus Ciner.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan langkah demi langkah - Ciner full accounting cycle',
    prompt: 'Buka setelah Anda menyelesaikan adjustment rows dan checkpoint laporan Ciner.',
    blocks: [
      { kind: 'table', headers: ['Tahap siklus', 'Hasil penting', 'Makna'], rows: [
        ['Adjustments columns', 'Debit = Credit = $14.800', 'Tujuh adjustment facts dimasukkan tanpa melibatkan Cash.'],
        ['Adjusted trial balance', 'Debit = Credit = $557.640', 'Saldo yang sudah disesuaikan menjadi dasar laporan.'],
        ['Income statement', 'Net sales $400.000; COGS $316.000; gross profit $84.000; net income $12.200', 'Perusahaan dagang menampilkan gross profit karena mempunyai inventory dan COGS.'],
        ['Retained earnings statement', '$16.200 + $12.200 - $2.000 = $26.400', 'Net income ditutup ke retained earnings setelah dividends.'],
        ['Statement of financial position', 'Total assets = total equity and liabilities = $145.340', 'Keseimbangan laporan mengonfirmasi alur worksheet ke laporan formal.'],
      ], caption: 'Checkpoint output mengikuti Kieso Illustrations 2.44-2.46 dan Illustration 2C.1.' },
      { kind: 'callout', variant: 'key', title: 'Perpetual inventory pada Ciner', text: 'Inventory $40.000 telah tercermin sebagai ending inventory di trial balance karena Ciner menggunakan perpetual inventory system. Karena itu, latihan ini tidak membuat jurnal periodik untuk memperbarui inventory dan cost of goods sold pada akhir periode.' },
    ],
  },
};

export const SKIPPER_REVENUE_ALLOCATION_CASE: Akm1PracticeCase = {
  id: 'skipper-revenue-allocation',
  caseTitle: 'Skipper Marine - Allocate Transaction Price',
  source: 'Kieso IFRS 5e · Chapter 3 · Example 3.5 · PDF physical pages 290-291',
  linkedTm: [4],
  linkedReportIds: [],
  learningGoal: 'Mengalokasikan transaction price bundle ke performance obligations berdasarkan relative standalone selling prices.',
  promptBlocks: [
    sourceCase('**Skipper Marine** menjual boat dan menyediakan mooring facilities. Boat dan satu tahun jasa mooring merupakan dua **separate performance obligations** dalam kontrak bundle.'),
    { kind: 'table', headers: ['Data kontrak Skipper Marine', 'Jumlah'], rows: [
      ['Standalone selling price - boat', '$30.000'],
      ['Standalone selling price - one year mooring services', '$5.000'],
      ['Total standalone selling prices', '$35.000'],
      ['Bundled transaction price', '$32.500'],
      ['Discount in bundle', '$2.500'],
    ], caption: 'Given data dari Kieso Example 3.5. Discount tidak diberikan seluruhnya kepada satu obligation; ia dialokasikan proporsional.' },
    { kind: 'h3', text: 'Requirements - Step 4 Revenue Recognition' },
    { kind: 'ol', items: [
      'Tentukan rasio relative standalone selling price untuk boat dan mooring services.',
      'Alokasikan transaction price $32.500 kepada dua performance obligations tersebut.',
      'Jelaskan mengapa jumlah alokasi harus tetap sama dengan transaction price kontrak.',
    ] },
    attemptFirst('Isi allocation worksheet sebelum membuka pembahasan. Gunakan denominator $35.000, bukan bundled transaction price.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Skipper Marine allocation',
    prompt: 'Buka setelah mengalokasikan harga kontrak ke boat dan mooring services.',
    blocks: [
      { kind: 'table', headers: ['Performance obligation', 'Relative allocation', 'Allocated revenue'], rows: [
        ['Boat', '$32.500 x ($30.000 / $35.000)', '$27.857'],
        ['Mooring services - one year', '$32.500 x ($5.000 / $35.000)', '$4.643'],
        ['Total allocated transaction price', '-', '$32.500'],
      ], caption: 'Kieso Example 3.5 mengalokasikan bundle discount secara proporsional berdasarkan standalone selling prices.' },
      { kind: 'callout', variant: 'key', title: 'Makna langkah alokasi', text: 'Boat menghasilkan revenue ketika control boat berpindah. Mooring services diakui ketika jasa diberikan; alokasi memastikan masing-masing obligation menerima bagian harga kontrak yang tepat.' },
    ],
  },
};

export const AMAZON_WARRANTY_REVENUE_CASE: Akm1PracticeCase = {
  id: 'amazon-warranty-revenue-timing',
  caseTitle: 'Amazon - Recognize Revenue for Fitness Tracker and Extended Warranty',
  source: 'Kieso IFRS 5e · Chapter 3 · Example 3.6 · PDF physical page 292',
  linkedTm: [4],
  linkedReportIds: [],
  learningGoal: 'Membedakan revenue recognized at a point in time dari revenue recognized over time untuk service-type warranty.',
  promptBlocks: [
    sourceCase('Pada 1 Januari 2025, **Amazon** menjual 100 fitness trackers seharga $36 per unit. Amazon juga menjual extended warranty dua tahun untuk 40 tracker, seharga $12 per warranty. Extended warranty baru berlaku setelah assurance warranty satu tahun berakhir.'),
    { kind: 'table', headers: ['Data diketahui', 'Jumlah / periode'], rows: [
      ['Fitness trackers sold', '100 unit x $36 = $3.600'],
      ['Extended warranty sold', '40 warranty x $12 = $480'],
      ['Warranty service period', 'Dua tahun: 2026 dan 2027'],
      ['Revenue pattern', 'Tracker: point in time; extended warranty: over time'],
    ], caption: 'Given data dari Kieso Example 3.6.' },
    { kind: 'h3', text: 'Requirements - Step 5 Revenue Recognition' },
    { kind: 'ol', items: [
      'Tentukan revenue dari penjualan fitness trackers yang diakui pada 2025.',
      'Tentukan extended warranty revenue yang diakui pada 2025, 2026, dan 2027.',
      'Jelaskan perbedaan timing recognition antara penyerahan produk dan pemberian jasa warranty.',
    ] },
    attemptFirst('Extended warranty bukan assurance warranty bawaan produk. Ia merupakan service-type warranty yang diakui sepanjang jasa tersedia.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Amazon revenue timing',
    prompt: 'Buka setelah melengkapi revenue recognition schedule 2025-2027.',
    blocks: [
      { kind: 'table', headers: ['Year', 'Fitness tracker revenue', 'Extended warranty revenue', 'Penjelasan'], rows: [
        ['2025', '$3.600', '$0', 'Control tracker berpindah pada penjualan; extended service belum dimulai.'],
        ['2026', '$0', '$240', 'Tahun pertama jasa warranty: 40 x $6.'],
        ['2027', '$0', '$240', 'Tahun kedua jasa warranty: 40 x $6.'],
      ], caption: 'Revenue timing mengikuti solusi Kieso Example 3.6.' },
      { kind: 'callout', variant: 'key', title: 'Point in time vs over time', text: 'Produk diakui saat control berpindah kepada pelanggan. Extended warranty memberikan stand-ready service sepanjang periode pertanggungan sehingga revenue diakui selama jasa diberikan.' },
    ],
  },
};


export const NUGGET_BANK_RECONCILIATION_CASE: Akm1PracticeCase = {
  id: 'nugget-bank-reconciliation-2025',
  caseTitle: 'Nugget Mining Company - Bank Reconciliation',
  source: 'Kieso IFRS 5e · Chapter 6 Appendix 6A · Illustrations 6A.1-6A.2 · PDF physical pages 555-557',
  linkedTm: [8],
  linkedReportIds: ['financial-bank-reconciliation'],
  learningGoal: 'Menyusun rekonsiliasi bank dua sisi dan jurnal penyesuaian sisi buku.',
  promptBlocks: [
    sourceCase('**Nugget Mining Company** memakai rekening Denver National Bank. Buku perusahaan menunjukkan saldo cash **$20.502** pada 30 November 2025, sedangkan bank statement menunjukkan saldo akhir **$22.190**. Gunakan data rekonsiliasi yang terlihat di bawah ini sebelum mengisi workspace.'),
    { kind: 'table', headers: ['Data diketahui Nugget', 'Jumlah / fakta', 'Letak rekonsiliasi'], rows: [
      ['Balance per bank statement', '$22.190', 'Saldo awal sisi bank'],
      ['Balance per depositor books', '$20.502', 'Saldo awal sisi buku'],
      ['Deposit mailed November 30, not on bank statement', '$3.680', 'Tambah sisi bank'],
      ['Outstanding checks #7327, #7348, #7349', '$150 + $4.820 + $31 = $5.001', 'Kurang sisi bank'],
      ['Interest collected by bank on Sequoia Co. bonds', '$600', 'Tambah sisi buku dan dijurnal'],
      ['Bank service charges', '$18', 'Kurang sisi buku dan dijurnal'],
      ['Customer NSF check returned by bank', '$220', 'Kurang sisi buku dan dijurnal'],
      ['Check #7322 recorded by Nugget as $311; correct amount was $131', '$180 overrecorded cash payment', 'Tambah sisi buku dan dijurnal'],
      ['Nugent Oil Co. check charged by bank to Nugget in error', '$175', 'Tambah sisi bank; bank yang mengoreksi'],
    ], caption: 'Given data harus dibaca sebagai lembar soal. Tidak semua item menghasilkan jurnal perusahaan.' },
    { kind: 'h3', text: 'Requirements - Nugget Bank Reconciliation' },
    { kind: 'ol', items: [
      'Susun rekonsiliasi dari balance per bank statement menuju correct cash balance.',
      'Susun rekonsiliasi dari balance per depositor books menuju correct cash balance.',
      'Pastikan kedua sisi berakhir pada correct cash balance yang sama.',
      'Susun jurnal penyesuaian hanya untuk item pada sisi buku.',
    ] },
    attemptFirst('Kerjakan rekonsiliasi dan jurnal Nugget sebelum membuka pembahasan. Deposit in transit, outstanding checks, dan bank error tidak dijurnal oleh Nugget karena bukan kesalahan atau transaksi yang belum dicatat di buku perusahaan.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Nugget bank reconciliation',
    prompt: 'Buka setelah kedua sisi rekonsiliasi menghasilkan correct cash balance yang sama.',
    blocks: [
      { kind: 'table', headers: ['Sisi rekonsiliasi', 'Perhitungan', 'Correct cash balance'], rows: [
        ['Bank statement', '$22.190 + $3.680 + $175 - $5.001', '$21.044'],
        ['Depositor books', '$20.502 + $600 + $180 - $18 - $220', '$21.044'],
      ], caption: 'Kedua sisi harus bertemu pada saldo kas benar yang sama.' },
      { kind: 'table', headers: ['Jurnal sisi buku', 'Debit', 'Credit'], rows: [
        ['Cash', '$780', ''],
        ['Interest Revenue', '', '$600'],
        ['Accounts Payable', '', '$180'],
        ['Accounts Receivable', '$220', ''],
        ['Bank Service Charge Expense', '$18', ''],
        ['Cash', '', '$238'],
      ], caption: 'Jurnal hanya dibuat untuk bank credit, book error, bank service charge, dan NSF check.' },
      { kind: 'callout', variant: 'key', title: 'Logika audit kas', text: 'Rekonsiliasi bank bukan sekadar menyamakan angka. Item sisi bank menjelaskan timing/error pada catatan bank. Item sisi buku mengubah general ledger perusahaan sehingga harus dijurnal.' },
    ],
  },
};

export const WILSON_RECEIVABLES_AGING_CASE: Akm1PracticeCase = {
  id: 'wilson-receivables-aging',
  caseTitle: 'Wilson & Co. - Accounts Receivable Aging Schedule',
  source: 'Kieso IFRS 5e · Chapter 6 · Illustration 6.6 · PDF physical pages 532-533',
  linkedTm: [9],
  linkedReportIds: ['financial-receivables-aging'],
  learningGoal: 'Menghitung required allowance berdasarkan umur piutang dan menyusun adjusting entry.',
  promptBlocks: [
    sourceCase('**Wilson & Co.** menggunakan aging schedule untuk mengestimasi expected uncollectible receivables. Tarif kerugian meningkat ketika umur piutang makin lama. Angka pada tabel berikut adalah data soal, bukan kunci tersembunyi.'),
    { kind: 'table', headers: ['Age category', 'Accounts receivable balance', 'Estimated uncollectible rate'], rows: [
      ['Under 30 days', '€345.000', '0,8%'],
      ['30-60 days', '€115.000', '4,0%'],
      ['61-90 days', '€18.000', '15,0%'],
      ['91-120 days', '€14.000', '20,0%'],
      ['Over 120 days', '€55.000', '25,0%'],
      ['Total accounts receivable', '€547.000', '-'],
    ], caption: 'Aging schedule menentukan saldo akhir Allowance for Doubtful Accounts yang dibutuhkan.' },
    { kind: 'h3', text: 'Requirements - Wilson Aging Schedule' },
    { kind: 'ol', items: [
      'Hitung required allowance setiap age category.',
      'Jumlahkan required allowance akhir tahun.',
      'Jika saldo Allowance for Doubtful Accounts sebelum adjustment adalah kredit €800, tentukan Bad Debt Expense.',
      'Susun adjusting entry akhir tahun.'
    ] },
    attemptFirst('Jangan langsung menjadikan total required allowance sebagai expense jika allowance sudah memiliki saldo. Expense adalah jumlah penyesuaian yang diperlukan agar saldo akhir allowance mencapai saldo target.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Wilson aging schedule',
    prompt: 'Buka setelah mengisi required allowance dan jurnal penyesuaian.',
    blocks: [
      { kind: 'table', headers: ['Age category', 'Perhitungan', 'Required allowance'], rows: [
        ['Under 30 days', '€345.000 x 0,8%', '€2.760'],
        ['30-60 days', '€115.000 x 4,0%', '€4.600'],
        ['61-90 days', '€18.000 x 15,0%', '€2.700'],
        ['91-120 days', '€14.000 x 20,0%', '€2.800'],
        ['Over 120 days', '€55.000 x 25,0%', '€13.750'],
        ['Year-end allowance required', '-', '€26.610'],
      ] },
      { kind: 'formula', text: 'Bad Debt Expense = required allowance €26.610 - existing credit allowance €800 = €25.810', note: 'Jika existing balance debit, jumlahnya ditambahkan ke required allowance.' },
      { kind: 'callout', variant: 'key', title: 'Makna allowance method', text: 'Aging schedule menghasilkan estimasi saldo kontra-aset. Karena piutang dilaporkan pada cash realizable value, allowance tidak ditutup pada akhir periode.' },
    ],
  },
};

export const JEREMIAH_NOTES_RECEIVABLE_CASE: Akm1PracticeCase = {
  id: 'jeremiah-zero-interest-note',
  caseTitle: 'Jeremiah Company - Zero-Interest-Bearing Note',
  source: 'Kieso IFRS 5e · Chapter 6 · Illustrations 6.9-6.10 · PDF physical pages 537-539',
  linkedTm: [9],
  linkedReportIds: ['financial-notes-receivable'],
  learningGoal: 'Mengukur long-term note receivable pada present value dan mengamortisasi diskon dengan effective-interest method.',
  promptBlocks: [
    sourceCase('**Jeremiah Company** menerima three-year zero-interest-bearing note dengan face value **$10.000**. Present value note saat diterima adalah **$7.721,80**. Implicit interest rate yang menyamakan future cash flow dengan present value adalah **9%**.'),
    { kind: 'table', headers: ['Data diketahui Jeremiah', 'Jumlah'], rows: [
      ['Face value due at maturity', '$10.000'],
      ['Cash paid / present value at issue date', '$7.721,80'],
      ['Term', '3 tahun'],
      ['Cash interest received each year', '$0'],
      ['Effective interest rate', '9%'],
      ['Discount to be amortized', '$2.278,20'],
    ], caption: 'Zero-interest-bearing note tidak berarti tanpa interest revenue. Interest dihasilkan dari amortisasi diskon.' },
    { kind: 'h3', text: 'Requirements - Jeremiah Note Receivable' },
    { kind: 'ol', items: [
      'Catat penerimaan note pada present value, bukan face value.',
      'Susun schedule amortisasi diskon selama tiga tahun.',
      'Catat interest revenue akhir tahun pertama menggunakan effective-interest method.',
      'Pastikan carrying amount naik sampai face value pada maturity.'
    ] },
    attemptFirst('Gunakan carrying amount awal setiap periode dikalikan 9%. Karena cash interest adalah nol, seluruh interest revenue menambah carrying amount note receivable.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Jeremiah zero-interest-bearing note',
    prompt: 'Buka setelah mengisi amortization schedule dan jurnal tahun pertama.',
    blocks: [
      { kind: 'table', headers: ['Period', 'Cash received', 'Interest revenue', 'Discount amortized', 'Carrying amount'], rows: [
        ['Date of issue', '-', '-', '-', '$7.721,80'],
        ['End of year 1', '$0', '$694,96', '$694,96', '$8.416,76'],
        ['End of year 2', '$0', '$757,51', '$757,51', '$9.174,27'],
        ['End of year 3', '$0', '$825,73', '$825,73', '$10.000,00'],
      ], caption: 'Angka akhir tahun ketiga memuat penyesuaian pembulatan kecil seperti pada sumber Kieso.' },
      { kind: 'formula', text: 'Interest revenue year 1 = $7.721,80 x 9% = $694,96', note: 'Jurnal: debit Notes Receivable dan kredit Interest Revenue sebesar $694,96.' },
      { kind: 'callout', variant: 'key', title: 'Substansi ekonomi', text: 'Walaupun note tidak membayar bunga tunai periodik, pemberi pinjaman tetap memperoleh imbal hasil melalui selisih antara present value saat pengakuan awal dan face value saat jatuh tempo.' },
    ],
  },
};

export const SLAMAR_RECEIVABLE_TRANSFER_CASE: Akm1PracticeCase = {
  id: 'slamar-receivable-transfer',
  caseTitle: 'Slamar Ltd. - Factoring, Secured Borrowing, and Allowance',
  source: 'Kieso IFRS 5e · Chapter 6 · Practice Problem · PDF physical pages 560-561',
  linkedTm: [9],
  linkedReportIds: ['financial-transfer-receivables'],
  learningGoal: 'Membedakan transfer piutang sebagai sale without guarantee, secured borrowing, dan penyesuaian allowance.',
  promptBlocks: [
    sourceCase('**Slamar Ltd.** memiliki tiga situasi independen terkait receivables. Perlakukan setiap situasi secara terpisah karena tujuan soalnya adalah membandingkan konsekuensi akuntansi dari factoring, secured borrowing, dan allowance adjustment.'),
    { kind: 'table', headers: ['Situasi independen Slamar', 'Data diketahui', 'Akibat akuntansi'], rows: [
      ['1. Factoring without guarantee', 'Accounts receivable ¥50.000; finance charge 11%', 'Derecognize receivable dan akui loss on sale'],
      ['2. Secured borrowing', 'Loan ¥75.000 secured by ¥80.000 receivables; finance charge 9%', 'Receivables tetap ada; akui notes payable'],
      ['3. Allowance adjustment', 'Gross accounts receivable ¥338.000; existing allowance credit ¥4.240; required allowance 6%', 'Catat Bad Debt Expense sebesar penyesuaian menuju saldo target'],
    ] },
    { kind: 'h3', text: 'Requirements - Slamar Receivables' },
    { kind: 'ol', items: [
      'Buat jurnal factoring without guarantee.',
      'Buat jurnal secured borrowing.',
      'Hitung required allowance dan jurnal bad debt adjustment.',
      'Jelaskan dampak bila situasi pertama diperlakukan sebagai secured borrowing terhadap current ratio dan receivable turnover.'
    ] },
    attemptFirst('Kunci utamanya adalah risiko dan manfaat. Jika receivable dijual tanpa guarantee, receivable keluar dari buku. Jika hanya dijaminkan untuk pinjaman, receivable tetap diakui dan kewajiban dicatat.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Slamar transfer of receivables',
    prompt: 'Buka setelah menyusun jurnal untuk tiga situasi independen.',
    blocks: [
      { kind: 'table', headers: ['Situasi', 'Perhitungan', 'Jurnal inti'], rows: [
        ['Factoring without guarantee', 'Finance charge = ¥50.000 x 11% = ¥5.500; cash = ¥44.500', 'Dr Cash ¥44.500; Dr Loss on Sale ¥5.500; Cr Accounts Receivable ¥50.000'],
        ['Secured borrowing', 'Interest/finance charge = ¥75.000 x 9% = ¥6.750; cash = ¥68.250', 'Dr Cash ¥68.250; Dr Interest Expense ¥6.750; Cr Notes Payable ¥75.000'],
        ['Allowance adjustment', 'Required allowance = ¥338.000 x 6% = ¥20.280; adjustment = ¥20.280 - ¥4.240', 'Dr Bad Debt Expense ¥16.040; Cr Allowance ¥16.040'],
      ] },
      { kind: 'callout', variant: 'key', title: 'Dampak analisis rasio', text: 'Jika transfer pada situasi pertama diperlakukan sebagai secured borrowing, receivables tetap diakui dan notes payable bertambah. Kieso menyatakan kondisi ini menurunkan current ratio dan accounts receivable turnover.' },
    ],
  },
};

export const WERTH_INVENTORY_OWNERSHIP_CASE: Akm1PracticeCase = {
  id: 'werth-inventory-ownership',
  caseTitle: 'Werth Company - Corrected Ending Inventory',
  source: 'Kieso IFRS 5e · Chapter 7 · Exercise E7.13 · PDF physical pages 659-660',
  linkedTm: [10],
  linkedReportIds: ['financial-corrected-inventory'],
  learningGoal: 'Menentukan proper ending inventory berdasarkan ownership, FOB terms, consignment, cutoff, dan returned goods.',
  promptBlocks: [
    sourceCase('**Werth Company** menggunakan periodic method. Physical count pada 31 Desember 2025 menunjukkan inventory **$234.890**, tetapi beberapa barang belum diperlakukan benar. Gunakan data berikut sebagai lembar soal sebelum mengisi schedule.'),
    { kind: 'table', headers: ['No.', 'Fakta kasus Werth', 'Nilai'], rows: [
      ['1', 'Physical inventory count on hand', '$234.890'],
      ['2', 'Browser merchandise purchased Dec. 15; shipped FOB shipping point Dec. 29; arrived in January; invoice recorded Dec. 31; not counted', '$10.420'],
      ['3', 'Bubbey sale recorded Dec. 31; shipped FOB destination; counted; cost of merchandise', '$7.350 cost; sale $12.800'],
      ['4', 'Dudley merchandise received Dec. 31; shipped FOB destination; invoice not recorded; included in count', '$15.630'],
      ['5', 'Minsky merchandise received after count on Dec. 31; invoice received and recorded Dec. 30; not counted', '$8.540'],
      ['6', 'Jackel goods held on consignment included in Werth count', '$10.438'],
      ['7', 'Sims sale FOB shipping point; shipped after count; included in count; invoice recorded Dec. 31', '$11.520 cost; sale $18.900'],
      ['8', 'Returned goods accepted for credit; not counted; no entry made', '$1.500 cost; sale $2.600'],
    ], caption: 'FOB terms, consignment, dan cutoff menentukan apakah inventory ditambah, dikurang, atau tidak mengubah count.' },
    { kind: 'h3', text: 'Requirements - Werth Company' },
    { kind: 'ol', items: [
      'Tentukan proper ending inventory pada 31 Desember 2025.',
      'Bedakan item yang mengubah corrected inventory schedule dan item yang hanya memerlukan correcting entry.',
      'Susun correcting entries untuk transaksi terkait bila buku belum ditutup.',
      'Jelaskan mengapa periodic method membuat beberapa koreksi inventory ditangani lewat schedule, bukan jurnal Inventory langsung.'
    ] },
    attemptFirst('Mulai dari physical count $234.890. Tambahkan barang milik Werth yang belum dihitung. Kurangkan barang bukan milik Werth atau barang yang sudah berpindah control tetapi masih ikut dihitung.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Werth corrected ending inventory',
    prompt: 'Buka setelah mengisi schedule inventory dan correcting entries.',
    blocks: [
      { kind: 'table', headers: ['Item', 'Perlakuan pada inventory', 'Dampak'], rows: [
        ['Physical count', 'Starting point', '$234.890'],
        ['Browser FOB shipping point', 'Add: title sudah berpindah ke Werth saat shipment', '+ $10.420'],
        ['Bubbey FOB destination', 'No schedule change: masih milik Werth dan sudah counted', '$0'],
        ['Dudley FOB destination received Dec. 31', 'No schedule change: sudah received dan counted', '$0'],
        ['Minsky received after count', 'Add: invoice recorded dan barang diterima Dec. 31 tetapi belum counted', '+ $8.540'],
        ['Jackel consignment', 'Deduct: Werth hanya consignee', '- $10.438'],
        ['Sims FOB shipping point sale', 'Deduct: title berpindah saat shipment; masih counted', '- $11.520'],
        ['Customer return accepted', 'Add: barang kembali menjadi milik Werth dan belum counted', '+ $1.500'],
        ['Proper ending inventory', 'Total', '$233.392'],
      ] },
      { kind: 'table', headers: ['Correcting entry', 'Debit', 'Credit'], rows: [
        ['Sales Revenue - Bubbey', '$12.800', ''],
        ['Accounts Receivable - Bubbey', '', '$12.800'],
        ['Purchases - Dudley', '$15.630', ''],
        ['Accounts Payable - Dudley', '', '$15.630'],
        ['Sales Returns and Allowances - returned goods', '$2.600', ''],
        ['Accounts Receivable', '', '$2.600'],
      ], caption: 'Correcting entries memperbaiki akun transaksi. Proper ending inventory dipakai dalam proses periodic closing.' },
      { kind: 'callout', variant: 'key', title: 'Aturan kepemilikan', text: 'FOB shipping point memindahkan title saat barang diserahkan ke carrier. FOB destination memindahkan title saat barang diterima pembeli. Goods held on consignment tetap menjadi inventory consignor, bukan consignee.' },
    ],
  },
};

export const CALL_MART_COST_FLOW_CASE: Akm1PracticeCase = {
  id: 'call-mart-cost-flow',
  caseTitle: 'Call-Mart SpA - Inventory Cost Flow Comparison',
  source: 'Kieso IFRS 5e · Chapter 7 · Illustrations 7.8-7.10 · PDF physical pages 623-626',
  linkedTm: [11],
  linkedReportIds: ['financial-inventory-cost-flow'],
  learningGoal: 'Membandingkan ending inventory dan cost of goods sold berdasarkan specific identification, weighted-average periodic, moving-average perpetual, dan FIFO.',
  promptBlocks: [
    sourceCase('**Call-Mart SpA** memiliki transaksi inventory pada bulan pertama operasinya. Kasus ini dipakai Kieso untuk membandingkan specific identification, average-cost, moving-average, dan FIFO.'),
    { kind: 'table', headers: ['Date', 'Purchases', 'Sold or issued', 'Balance units'], rows: [
      ['March 2', '2.000 units @ €4,00', '-', '2.000 units'],
      ['March 15', '6.000 units @ €4,40', '-', '8.000 units'],
      ['March 19', '-', '4.000 units', '4.000 units'],
      ['March 30', '2.000 units @ €4,75', '-', '6.000 units'],
      ['Total available', '10.000 units; total cost €43.900', '4.000 units', 'Ending inventory 6.000 units'],
    ], caption: 'Cost of goods available for sale = (2.000 x €4,00) + (6.000 x €4,40) + (2.000 x €4,75) = €43.900.' },
    { kind: 'table', headers: ['Specific identification assumption', 'Units remaining', 'Unit cost', 'Total'], rows: [
      ['March 2 purchase', '1.000', '€4,00', '€4.000'],
      ['March 15 purchase', '3.000', '€4,40', '€13.200'],
      ['March 30 purchase', '2.000', '€4,75', '€9.500'],
      ['Ending inventory', '6.000', '-', '€26.700'],
    ], caption: 'Specific identification mengikuti unit aktual yang tersisa.' },
    { kind: 'h3', text: 'Requirements - Call-Mart Cost Flow' },
    { kind: 'ol', items: [
      'Hitung ending inventory dan cost of goods sold dengan weighted-average periodic.',
      'Hitung ending inventory dan cost of goods sold dengan moving-average perpetual.',
      'Hitung ending inventory dan cost of goods sold dengan FIFO.',
      'Bandingkan dampak metode ketika unit cost meningkat sepanjang periode.'
    ] },
    attemptFirst('Gunakan data transaksi sebagai dasar. Weighted-average periodic memakai average unit cost untuk seluruh goods available. Moving-average perpetual menghitung average baru setelah pembelian. FIFO menempatkan unit terbaru dalam ending inventory.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Call-Mart cost-flow comparison',
    prompt: 'Buka setelah mengisi comparison schedule.',
    blocks: [
      { kind: 'table', headers: ['Method', 'Ending inventory', 'Cost of goods sold', 'Reasoning'], rows: [
        ['Specific identification', '€26.700', '€17.200', 'Unit tersisa: 1.000 @ €4,00; 3.000 @ €4,40; 2.000 @ €4,75.'],
        ['Weighted-average periodic', '€26.340', '€17.560', 'Average unit cost €43.900 / 10.000 = €4,39; ending inventory 6.000 x €4,39.'],
        ['Moving-average perpetual', '€26.700', '€17.200', 'Average baru setelah March 15 adalah €4,30; setelah March 30 menjadi €4,45.'],
        ['FIFO periodic/perpetual', '€27.100', '€16.800', 'Ending inventory berasal dari unit terbaru: 2.000 @ €4,75 dan 4.000 @ €4,40.'],
      ] },
      { kind: 'callout', variant: 'key', title: 'Dampak harga meningkat', text: 'Ketika harga pembelian meningkat, FIFO menghasilkan ending inventory tertinggi dan cost of goods sold terendah dibanding average-cost. Dampaknya gross profit dan net income lebih tinggi, dengan asumsi faktor lain tetap.' },
    ],
  },
};


export const MANDER_NRV_CASE: Akm1PracticeCase = {
  id: 'mander-nrv-lcnrv',
  caseTitle: 'Mander AG - Net Realizable Value and LCNRV',
  source: 'Kieso IFRS 5e · Chapter 8 · Illustration 8.1 · PDF physical page 689',
  linkedTm: [12],
  linkedReportIds: ['financial-lcnrv'],
  learningGoal: 'Menghitung net realizable value, menentukan LCNRV, dan menurunkan loss on inventory write-down dari data selling price, completion cost, dan selling cost.',
  promptBlocks: [
    sourceCase('**Mander AG** memiliki unfinished inventory. Kasus ini menguji apakah mahasiswa dapat membedakan estimated selling price, estimated cost of completion, estimated cost to sell, NRV, LCNRV, dan loss on inventory write-down.'),
    { kind: 'table', headers: ['Data diketahui Mander AG', 'Jumlah'], rows: [
      ['Inventory cost', '€950'],
      ['Estimated selling price in normal course of business', '€1.000'],
      ['Estimated cost of completion', '€50'],
      ['Estimated cost to sell', '€200'],
    ], caption: 'Data ini harus digunakan sebelum mengisi builder NRV. NRV bukan selling price bruto.' },
    { kind: 'h3', text: 'Requirements - Mander AG' },
    { kind: 'ol', items: [
      'Hitung net realizable value dengan mengurangkan cost of completion dan cost to sell dari estimated selling price.',
      'Bandingkan inventory cost dengan NRV untuk menentukan carrying amount inventory.',
      'Hitung loss on inventory write-down jika cost lebih tinggi daripada NRV.',
      'Jelaskan mengapa loss diakui pada periode penurunan nilai, bukan menunggu periode penjualan.'
    ] },
    attemptFirst('Kerjakan dari data sumber, bukan dari nilai akhir. Kesalahan umum pada kasus ini adalah memakai €1.000 sebagai NRV tanpa mengurangkan estimated completion cost dan selling cost.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Mander NRV dan LCNRV',
    prompt: 'Buka setelah menghitung NRV dan loss write-down pada builder.',
    blocks: [
      { kind: 'formula', text: 'NRV = €1.000 - €50 - €200 = €750', note: 'Estimated selling price harus dikurangi seluruh biaya yang masih diperlukan sampai inventory siap dijual dan biaya untuk menjualnya.' },
      { kind: 'formula', text: 'LCNRV carrying amount = lower of €950 cost and €750 NRV = €750', note: 'Inventory tidak boleh disajikan di atas jumlah kas bersih yang diharapkan dari penjualan atau penggunaan.' },
      { kind: 'formula', text: 'Loss on inventory write-down = €950 - €750 = €200', note: 'Loss diakui ketika utility inventory turun di bawah cost.' },
      { kind: 'callout', variant: 'key', title: 'Alasan konseptual', text: 'LCNRV menjaga faithful representation karena inventory yang manfaat ekonominya turun tidak tetap dilaporkan pada historical cost yang sudah tidak recoverable.' },
    ],
  },
};

export const JINN_FENG_LCNRV_CASE: Akm1PracticeCase = {
  id: 'jinn-feng-lcnrv-item-by-item',
  caseTitle: 'Jinn-Feng Foods - LCNRV Item-by-Item',
  source: 'Kieso IFRS 5e · Chapter 8 · Illustrations 8.3-8.4 · PDF physical pages 690-691',
  linkedTm: [12],
  linkedReportIds: ['financial-lcnrv'],
  learningGoal: 'Menerapkan lower-of-cost-or-net realizable value pada setiap item inventory dan membandingkan hasilnya dengan pendekatan major groups serta total inventory.',
  promptBlocks: [
    sourceCase('**Jinn-Feng Foods** memiliki lima kelompok inventory makanan. Untuk setiap item, pilih nilai yang lebih rendah antara cost dan NRV. Setelah itu bandingkan hasil item-by-item dengan major group dan total inventory.'),
    { kind: 'table', headers: ['Food item', 'Cost', 'Net realizable value', 'Basis LCNRV item-by-item'], rows: [
      ['Spinach', '¥80.000', '¥120.000', 'Pilih cost'],
      ['Carrots', '¥100.000', '¥110.000', 'Pilih cost'],
      ['Cut beans', '¥50.000', '¥40.000', 'Pilih NRV'],
      ['Peas', '¥90.000', '¥72.000', 'Pilih NRV'],
      ['Mixed vegetables', '¥95.000', '¥92.000', 'Pilih NRV'],
    ], caption: 'Data dalam ribuan yen sesuai ilustrasi Kieso. Nilai final per item adalah angka yang lebih rendah.' },
    { kind: 'h3', text: 'Requirements - Jinn-Feng Foods' },
    { kind: 'ol', items: [
      'Tentukan final inventory value untuk setiap food item.',
      'Jumlahkan final inventory value dengan basis item-by-item.',
      'Bandingkan hasil item-by-item dengan major groups dan total inventory.',
      'Jelaskan mengapa pendekatan item-by-item biasanya menghasilkan carrying amount paling rendah.'
    ] },
    attemptFirst('Jangan menjumlahkan cost dan NRV dahulu. Pada pendekatan item-by-item, keputusan lower amount dibuat per item, lalu baru dijumlahkan.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Jinn-Feng LCNRV',
    prompt: 'Buka setelah mengisi final inventory value per item.',
    blocks: [
      { kind: 'table', headers: ['Food item', 'Lower amount selected', 'Alasan'], rows: [
        ['Spinach', '¥80.000', 'Cost lebih rendah daripada NRV ¥120.000.'],
        ['Carrots', '¥100.000', 'Cost lebih rendah daripada NRV ¥110.000.'],
        ['Cut beans', '¥40.000', 'NRV lebih rendah daripada cost ¥50.000.'],
        ['Peas', '¥72.000', 'NRV lebih rendah daripada cost ¥90.000.'],
        ['Mixed vegetables', '¥92.000', 'NRV lebih rendah daripada cost ¥95.000.'],
        ['Total item-by-item', '¥384.000', 'Jumlah lower amount setiap item.'],
      ] },
      { kind: 'table', headers: ['Basis LCNRV', 'Carrying amount', 'Interpretasi'], rows: [
        ['Individual items', '¥384.000', 'Tidak meng-offset penurunan satu item dengan kenaikan item lain.'],
        ['Major groups', '¥394.000', 'Offset terjadi di dalam kelompok frozen dan canned.'],
        ['Total inventory', '¥415.000', 'Kenaikan NRV seluruh item meng-offset seluruh penurunan.'],
      ] },
      { kind: 'callout', variant: 'key', title: 'Implikasi pengukuran', text: 'Pendekatan item-by-item memberi sinyal kerugian inventory lebih cepat. Pendekatan kelompok atau total dapat menunda pengakuan loss karena kenaikan NRV item lain menutup penurunan item tertentu.' },
    ],
  },
};

export const RICARDO_LCNRV_RECOVERY_CASE: Akm1PracticeCase = {
  id: 'ricardo-lcnrv-recovery',
  caseTitle: 'Ricardo SpA - Inventory Write-Down and Recovery',
  source: 'Kieso IFRS 5e · Chapter 8 · Loss method illustration · PDF physical pages 693-695',
  linkedTm: [12],
  linkedReportIds: ['financial-lcnrv'],
  learningGoal: 'Mencatat inventory write-down dan recovery menggunakan allowance account dengan batas recovery tidak melebihi write-down sebelumnya.',
  promptBlocks: [
    sourceCase('**Ricardo SpA** digunakan untuk melatih jurnal LCNRV dengan loss method dan allowance account. Kasus ini memisahkan loss akibat penurunan inventory dari cost of goods sold.'),
    { kind: 'table', headers: ['Data Ricardo SpA', 'Jumlah'], rows: [
      ['Ending inventory at cost', '€82.000'],
      ['Ending inventory at NRV pada tanggal laporan', '€70.000'],
      ['Required allowance / write-down awal', '€12.000'],
      ['Subsequent NRV setelah pemulihan', '€74.000'],
      ['Allowance yang masih diperlukan setelah recovery', '€8.000'],
      ['Recovery yang dapat diakui', '€4.000'],
    ], caption: 'Recovery mengurangi allowance, tetapi inventory tetap tidak boleh melebihi original cost.' },
    { kind: 'h3', text: 'Requirements - Ricardo SpA' },
    { kind: 'ol', items: [
      'Buat jurnal write-down awal dengan loss method dan allowance account.',
      'Buat jurnal recovery ketika NRV naik dari €70.000 menjadi €74.000.',
      'Tentukan allowance balance setelah recovery.',
      'Jelaskan mengapa recovery tidak dicatat langsung menaikkan inventory di atas original cost.'
    ] },
    attemptFirst('Perhatikan arah jurnal. Write-down mengkredit allowance. Recovery mendebit allowance dan mengkredit recovery income/loss reversal.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Ricardo write-down dan recovery',
    prompt: 'Buka setelah menyusun jurnal write-down dan recovery.',
    blocks: [
      { kind: 'table', headers: ['Tahap', 'Perhitungan', 'Jurnal inti'], rows: [
        ['Write-down awal', '€82.000 - €70.000 = €12.000', 'Dr Loss Due to Decline of Inventory to NRV €12.000; Cr Allowance €12.000'],
        ['Recovery', 'NRV naik €4.000; allowance turun dari €12.000 menjadi €8.000', 'Dr Allowance €4.000; Cr Recovery of Inventory Loss €4.000'],
      ] },
      { kind: 'callout', variant: 'warning', title: 'Batas recovery', text: 'Pemulihan NRV hanya membalik write-down yang pernah diakui. Jika NRV naik di atas original cost, inventory tetap dibatasi pada original cost.' },
    ],
  },
};

export const APRES_PURCHASE_COMMITMENT_CASE: Akm1PracticeCase = {
  id: 'apres-onerous-purchase-commitment',
  caseTitle: 'Apres Paper AG - Onerous Purchase Commitment',
  source: 'Kieso IFRS 5e · Chapter 8 · Purchase commitment illustration · PDF physical page 701',
  linkedTm: [12],
  linkedReportIds: ['financial-lcnrv'],
  learningGoal: 'Mencatat kerugian firm purchase commitment ketika contract price melebihi market value dan kerugian diharapkan terjadi.',
  promptBlocks: [
    sourceCase('**Apres Paper AG** memiliki firm purchase commitment untuk timber-cutting rights. Pada tanggal laporan, market price turun di bawah contract price sehingga kontrak menjadi merugi.'),
    { kind: 'table', headers: ['Data Apres Paper AG', 'Jumlah'], rows: [
      ['Contract price / cash paid when executed', '€10.000.000'],
      ['Market price pada tanggal laporan', '€7.000.000'],
      ['Expected loss / purchase commitment liability', '€3.000.000'],
      ['Jurnal ketika kontrak dieksekusi', 'Inventory/Purchases diakui pada market value; liability dibalik; cash dibayar sesuai contract price'],
    ], caption: 'Firm purchase commitment yang merugi diperlakukan sebagai kewajiban ketika loss probable dan measurable.' },
    { kind: 'h3', text: 'Requirements - Apres Paper AG' },
    { kind: 'ol', items: [
      'Catat unrealized holding loss dan purchase commitment liability pada tanggal laporan.',
      'Catat pembelian ketika kontrak dieksekusi pada periode berikutnya.',
      'Tunjukkan bagaimana liability €3.000.000 dibalik pada saat pembelian.',
      'Jelaskan hubungan kasus ini dengan konsep onerous contract.'
    ] },
    attemptFirst('Pisahkan dua tanggal. Pada tanggal laporan hanya loss dan liability yang diakui. Saat kontrak dieksekusi, inventory/purchases dicatat pada market value, liability dibalik, dan cash keluar sebesar contract price.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Apres purchase commitment',
    prompt: 'Buka setelah menyusun dua kelompok jurnal Apres.',
    blocks: [
      { kind: 'table', headers: ['Tanggal', 'Jurnal inti', 'Alasan'], rows: [
        ['31 Desember 2025', 'Dr Unrealized Holding Gain or Loss—Income €3.000.000; Cr Purchase Commitment Liability €3.000.000', 'Contract price melebihi market value sehingga kerugian diakui sebelum pembelian.'],
        ['Saat kontrak dieksekusi', 'Dr Purchases/Inventory €7.000.000; Dr Purchase Commitment Liability €3.000.000; Cr Cash €10.000.000', 'Inventory dicatat pada market value dan liability yang sudah diakui dibalik.'],
      ] },
      { kind: 'callout', variant: 'key', title: 'Substansi ekonomi', text: 'Kewajiban timbul bukan karena barang sudah diterima, tetapi karena entitas terikat kontrak yang secara ekonomi merugi pada tanggal laporan.' },
    ],
  },
};

export const CETUS_GROSS_PROFIT_CASE: Akm1PracticeCase = {
  id: 'cetus-gross-profit-method',
  caseTitle: 'Cetus SE - Gross Profit Method',
  source: 'Kieso IFRS 5e · Chapter 8 · Illustration 8.13 · PDF physical page 703',
  linkedTm: [13],
  linkedReportIds: ['financial-gross-profit'],
  learningGoal: 'Mengestimasi ending inventory dengan gross profit method dari beginning inventory, purchases, sales, dan gross profit rate.',
  promptBlocks: [
    sourceCase('**Cetus SE** digunakan untuk menerapkan gross profit method. Metode ini menghasilkan estimasi inventory ketika physical count tidak praktis, misalnya untuk interim reporting atau kerugian inventory.'),
    { kind: 'table', headers: ['Data Cetus SE', 'Jumlah'], rows: [
      ['Beginning inventory, at cost', '€60.000'],
      ['Purchases, at cost', '€200.000'],
      ['Sales, at selling price', '€280.000'],
      ['Estimated gross profit rate on sales', '30%'],
    ], caption: 'Gross profit rate diterapkan pada sales, bukan pada cost.' },
    { kind: 'h3', text: 'Requirements - Cetus SE' },
    { kind: 'ol', items: [
      'Hitung goods available at cost.',
      'Hitung estimated gross profit sebagai 30% dari sales.',
      'Turunkan estimated cost of goods sold.',
      'Hitung approximate ending inventory.'
    ] },
    attemptFirst('Jangan memakai 30% dari purchases. Gross profit rate dalam kasus ini adalah persentase dari sales.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Cetus gross profit method',
    prompt: 'Buka setelah melengkapi schedule Cetus.',
    blocks: [
      { kind: 'table', headers: ['Langkah', 'Perhitungan', 'Hasil'], rows: [
        ['Goods available at cost', '€60.000 + €200.000', '€260.000'],
        ['Estimated gross profit', '30% × €280.000', '€84.000'],
        ['Estimated COGS', '€280.000 - €84.000', '€196.000'],
        ['Approximate ending inventory', '€260.000 - €196.000', '€64.000'],
      ] },
      { kind: 'callout', variant: 'warning', title: 'Batas metode', text: 'Gross profit method menghasilkan estimasi. Metode ini tidak menggantikan physical count dan dapat bias jika gross profit rate historis tidak lagi representatif.' },
    ],
  },
};

export const DEBENHAMS_RETAIL_INVENTORY_CASE: Akm1PracticeCase = {
  id: 'debenhams-retail-inventory-method',
  caseTitle: 'Debenhams - Retail Inventory Method',
  source: 'Kieso IFRS 5e · Chapter 8 · Illustration 8.18 · PDF physical pages 708-709',
  linkedTm: [13],
  linkedReportIds: ['financial-retail-inventory'],
  learningGoal: 'Menggunakan cost-to-retail ratio untuk mengonversi ending inventory at retail menjadi ending inventory at cost.',
  promptBlocks: [
    sourceCase('**Debenhams** digunakan untuk menunjukkan struktur dasar retail inventory method. Data cost dan retail dijumlahkan untuk goods available, lalu ending inventory at retail dikonversi menjadi cost.'),
    { kind: 'table', headers: ['Item', 'Cost', 'Retail'], rows: [
      ['Beginning inventory', '£14.000', '£20.000'],
      ['Purchases', '£63.000', '£90.000'],
      ['Sales', '—', '£85.000'],
    ], caption: 'Retail inventory method memerlukan kolom cost dan retail. Sales hanya mengurangi kolom retail.' },
    { kind: 'h3', text: 'Requirements - Debenhams' },
    { kind: 'ol', items: [
      'Hitung goods available for sale pada cost dan retail.',
      'Hitung ending inventory at retail setelah sales dikurangkan.',
      'Hitung cost-to-retail ratio.',
      'Konversi ending inventory at retail menjadi ending inventory at cost.'
    ] },
    attemptFirst('Rasio cost-to-retail dihitung dari goods available: £77.000 ÷ £110.000. Jangan membagi ending inventory cost dengan ending inventory retail sebelum cost akhir dihitung.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Debenhams retail inventory method',
    prompt: 'Buka setelah mengisi retail inventory schedule.',
    blocks: [
      { kind: 'table', headers: ['Langkah', 'Perhitungan', 'Hasil'], rows: [
        ['Goods available at cost', '£14.000 + £63.000', '£77.000'],
        ['Goods available at retail', '£20.000 + £90.000', '£110.000'],
        ['Ending inventory at retail', '£110.000 - £85.000', '£25.000'],
        ['Cost-to-retail ratio', '£77.000 ÷ £110.000', '70%'],
        ['Ending inventory at cost', '£25.000 × 70%', '£17.500'],
      ] },
      { kind: 'callout', variant: 'key', title: 'Logika retail method', text: 'Metode ini mengasumsikan hubungan cost dan retail pada goods available dapat dipakai untuk mengestimasi cost dari ending inventory yang masih tercatat pada retail.' },
    ],
  },
};

export const INFUSION_CONVENTIONAL_RETAIL_CASE: Akm1PracticeCase = {
  id: 'infusion-conventional-retail-lcnrv',
  caseTitle: 'In-Fusion SA - Conventional Retail Method',
  source: 'Kieso IFRS 5e · Chapter 8 · Illustration 8.19 · PDF physical pages 710-711',
  linkedTm: [13],
  linkedReportIds: ['financial-retail-inventory'],
  learningGoal: 'Menerapkan conventional retail method dengan memasukkan net markups ke denominator ratio dan mengecualikan net markdowns agar menghasilkan approximate LCNRV.',
  promptBlocks: [
    sourceCase('**In-Fusion SA** digunakan untuk membedakan cost method dan conventional retail method. Conventional method memakai ratio setelah net markups, tetapi sebelum markdowns, sehingga hasilnya mengaproksimasi LCNRV.'),
    { kind: 'table', headers: ['Data In-Fusion SA', 'Cost', 'Retail'], rows: [
      ['Beginning inventory', '€500', '€1.000'],
      ['Purchases, net', '€20.000', '€35.000'],
      ['Markups', '—', '€3.000'],
      ['Markup cancellations', '—', '€1.000'],
      ['Markdowns', '—', '€2.500'],
      ['Markdown cancellations', '—', '€2.000'],
      ['Sales, net', '—', '€25.000'],
    ], caption: 'Net markups = €2.000. Net markdowns = €500. Conventional retail method mengecualikan markdowns dari denominator ratio.' },
    { kind: 'h3', text: 'Requirements - In-Fusion SA' },
    { kind: 'ol', items: [
      'Hitung merchandise available before markups.',
      'Tambahkan net markups untuk memperoleh retail basis of LCNRV ratio.',
      'Hitung cost-to-retail ratio conventional method.',
      'Kurangkan net markdowns dan sales untuk menentukan ending inventory at retail.',
      'Hitung ending inventory at approximate LCNRV.'
    ] },
    attemptFirst('Kunci kasus ini adalah treatment markdowns. Untuk conventional retail method, markdowns tidak masuk denominator ratio, tetapi tetap mengurangi ending inventory at retail.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - In-Fusion conventional retail method',
    prompt: 'Buka setelah menghitung ratio dan approximate LCNRV.',
    blocks: [
      { kind: 'table', headers: ['Langkah', 'Perhitungan', 'Hasil'], rows: [
        ['Merchandise available before markups', 'Cost €500 + €20.000; retail €1.000 + €35.000', 'Cost €20.500; retail €36.000'],
        ['Net markups', '€3.000 - €1.000', '€2.000'],
        ['Retail basis for LCNRV ratio', '€36.000 + €2.000', '€38.000'],
        ['Cost-to-retail ratio', '€20.500 ÷ €38.000', '53,9%'],
        ['Net markdowns', '€2.500 - €2.000', '€500'],
        ['Ending inventory at retail', '€38.000 - €500 - €25.000', '€12.500'],
        ['Approximate LCNRV', '€12.500 × 53,9%', '€6.737,50'],
      ] },
      { kind: 'callout', variant: 'warning', title: 'Markdowns dan LCNRV', text: 'Jika markdowns dimasukkan ke denominator ratio, hasilnya mendekati cost method. Conventional retail method sengaja mengecualikan markdowns dari ratio untuk mencerminkan penurunan utility inventory.' },
    ],
  },
};

export const TATE_INVENTORY_ANALYSIS_CASE: Akm1PracticeCase = {
  id: 'tate-inventory-analysis',
  caseTitle: 'Tate & Lyle plc - Inventory Turnover Analysis',
  source: 'Kieso IFRS 5e · Chapter 8 · Illustration 8.26 · PDF physical page 718',
  linkedTm: [13],
  linkedReportIds: ['financial-inventory-analysis'],
  learningGoal: 'Menghitung average inventory, inventory turnover, dan average days to sell inventory sebagai ukuran likuiditas inventory.',
  promptBlocks: [
    sourceCase('**Tate & Lyle plc** digunakan untuk menunjukkan analisis inventory berbasis rasio. Rasio ini mengukur seberapa cepat inventory berputar menjadi cost of goods sold.'),
    { kind: 'table', headers: ['Data Tate & Lyle plc', 'Jumlah'], rows: [
      ['Cost of goods sold', '£1.621 juta'],
      ['Beginning inventory', '£419 juta'],
      ['Ending inventory', '£434 juta'],
    ], caption: 'Gunakan average inventory sederhana karena tidak ada informasi musiman tambahan.' },
    { kind: 'h3', text: 'Requirements - Tate & Lyle plc' },
    { kind: 'ol', items: [
      'Hitung average inventory.',
      'Hitung inventory turnover.',
      'Hitung average days to sell inventory.',
      'Berikan interpretasi singkat atas inventory turnover dan days to sell.'
    ] },
    attemptFirst('Inventory turnover menggunakan cost of goods sold, bukan sales. Average days to sell memakai 365 dibagi inventory turnover.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Tate & Lyle inventory analysis',
    prompt: 'Buka setelah menghitung turnover dan days to sell.',
    blocks: [
      { kind: 'table', headers: ['Ukuran', 'Perhitungan', 'Hasil'], rows: [
        ['Average inventory', '(£419 juta + £434 juta) ÷ 2', '£426,5 juta'],
        ['Inventory turnover', '£1.621 juta ÷ £426,5 juta', '3,80 kali'],
        ['Average days to sell inventory', '365 ÷ 3,80', '±96 hari'],
      ] },
      { kind: 'callout', variant: 'key', title: 'Interpretasi', text: 'Turnover 3,80 kali berarti inventory rata-rata berubah menjadi cost of goods sold sekitar 3,8 kali setahun. Rata-rata hari jual sekitar 96 hari menunjukkan lamanya inventory tertahan sebelum dijual.' },
    ],
  },
};

export const NORWOOD_INVENTORY_TURNOVER_CASE: Akm1PracticeCase = {
  id: 'norwood-integrated-inventory-turnover',
  caseTitle: 'Norwood Company - Integrated Inventory Turnover Review',
  source: 'Kieso IFRS 5e · Chapter 8 · Practice Problem · PDF physical pages 721-722',
  linkedTm: [14],
  linkedReportIds: ['financial-inventory-analysis'],
  learningGoal: 'Mengintegrasikan ownership inventory, goods in transit, LCNRV write-down, adjusted cost of goods sold, dan inventory turnover.',
  promptBlocks: [
    sourceCase('**Norwood Company** digunakan sebagai kasus integratif TM 14 karena menggabungkan tiga area UAS: ownership inventory, LCNRV, dan inventory analysis. Kasus ini cocok sebagai jembatan terakhir sebelum Simulasi UAS.'),
    { kind: 'table', headers: ['Data awal Norwood Company', 'Jumlah'], rows: [
      ['Beginning inventory', '$1.026.000'],
      ['Ending inventory before adjustments', '$1.007.000'],
      ['Cost of goods sold before adjustments', '$11.776.000'],
      ['Inventory valuation policy', 'Lower of cost using FIFO cost flow assumption or net realizable value'],
      ['Inventory write-down method', 'Cost-of-goods-sold method'],
    ], caption: 'Data awal dipakai untuk turnover sebelum adjustment dan menjadi dasar adjustment akhir tahun.' },
    { kind: 'table', headers: ['Adjustment item', 'Data diketahui', 'Dampak yang harus dianalisis'], rows: [
      ['Consigned goods', 'Sales dan COGS sudah dicatat atas goods $22.000 yang masih berada di consignee dan belum terjual.', 'Tambahkan kembali ending inventory dan kurangi COGS.'],
      ['Goods in transit', 'Shipping terms berubah menjadi FOB destination; goods $25.000 masih dalam perjalanan ke China.', 'Tambahkan ending inventory dan kurangi COGS karena control belum berpindah.'],
      ['LCNRV', 'Inventory cost $112.000 memiliki NRV $100.800.', 'Akui write-down $11.200; kurangi ending inventory dan tambah COGS.'],
    ], caption: 'Ketiga adjustment memengaruhi numerator dan/atau denominator inventory turnover.' },
    { kind: 'h3', text: 'Requirements - Norwood Integrated Review' },
    { kind: 'ol', items: [
      'Hitung inventory turnover sebelum adjustment.',
      'Tentukan adjustment ending inventory untuk consignment, goods in transit, dan LCNRV.',
      'Hitung adjusted ending inventory dan adjusted cost of goods sold.',
      'Hitung adjusted inventory turnover dan jelaskan dampak adjustment terhadap rasio.'
    ] },
    attemptFirst('Kerjakan turnover awal lebih dulu. Setelah itu koreksi ending inventory dan COGS secara simultan karena consigned goods dan goods in transit mengurangi COGS, sedangkan LCNRV write-down menambah COGS.'),
  ],
  explanationBlock: {
    kind: 'solution-reveal',
    title: 'Pembahasan - Norwood integrated inventory turnover',
    prompt: 'Buka setelah menghitung turnover awal dan turnover setelah adjustment.',
    blocks: [
      { kind: 'formula', text: 'Inventory turnover before adjustment = $11.776.000 ÷ [($1.026.000 + $1.007.000) ÷ 2] = 11,6 kali', note: 'Perhitungan awal memakai inventory dan COGS sebelum koreksi akhir tahun.' },
      { kind: 'table', headers: ['Adjustment', 'Ending inventory', 'Cost of goods sold', 'Alasan'], rows: [
        ['Consigned goods', '+$22.000', '-$22.000', 'Goods masih milik Norwood karena consignee belum menjualnya.'],
        ['Goods in transit FOB destination', '+$25.000', '-$25.000', 'Barang belum mencapai destination, sehingga control belum berpindah.'],
        ['LCNRV write-down', '-$11.200', '+$11.200', 'Cost $112.000 melebihi NRV $100.800.'],
      ] },
      { kind: 'formula', text: 'Adjusted ending inventory = $1.007.000 + $22.000 + $25.000 - $11.200 = $1.042.800', note: 'Ending inventory naik bersih $35.800.' },
      { kind: 'formula', text: 'Adjusted COGS = $11.776.000 - $22.000 - $25.000 + $11.200 = $11.740.200', note: 'Consignment dan goods in transit membalik COGS yang terlalu besar; LCNRV menambah COGS.' },
      { kind: 'formula', text: 'Adjusted turnover = $11.740.200 ÷ [($1.026.000 + $1.042.800) ÷ 2] = 11,3 kali', note: 'Rasio turun karena COGS turun dan average inventory naik.' },
    ],
  },
};

