// =============================================================
// Kuis Interaktif AKM I (AKK201)
// Model interaksi mengikuti AKBI; substansi mengikuti Kieso IFRS 5e
// dan mapping resmi AKM I: UTS TM 1–7, UAS TM 8–14.
// =============================================================
import type { QuizQuestion } from '../../types';

export const AKK201_QUIZ_UTS: QuizQuestion[] = [
  {
    kind: 'account-match',
    q: 'Pasangkan konsep Conceptual Framework dengan deskripsi penerapannya.',
    instruction: 'Gunakan terminologi Chapter 1 Kieso IFRS Fifth Edition.',
    choices: ['Relevance', 'Faithful representation', 'Comparability', 'Periodicity assumption', 'Cost constraint'],
    pairs: [
      { prompt: 'Informasi membantu memprediksi atau mengonfirmasi keputusan pengguna.', answer: 'Relevance' },
      { prompt: 'Representasi lengkap, netral, dan bebas dari kesalahan.', answer: 'Faithful representation' },
      { prompt: 'Pengguna dapat membandingkan informasi antar entitas atau antarperiode.', answer: 'Comparability' },
      { prompt: 'Kegiatan perusahaan dibagi ke dalam periode pelaporan.', answer: 'Periodicity assumption' },
      { prompt: 'Manfaat pelaporan seharusnya melebihi biaya penyajiannya.', answer: 'Cost constraint' },
    ],
    explanation: 'Kualitas fundamental adalah relevance dan faithful representation; comparability memperkuat kegunaan informasi, sementara periodicity dan cost constraint berada pada level implementasi.'
  },
  {
    kind: 'multi-select',
    q: 'Pilih pernyataan yang benar mengenai general-purpose financial reporting.',
    options: [
      'Tujuan utamanya membantu investor, pemberi pinjaman, dan kreditor lain membuat keputusan penyediaan sumber daya.',
      'Notes merupakan bagian integral dari laporan keuangan.',
      'Financial reporting hanya ditujukan untuk manajemen internal.',
      'Statement of financial position, income/comprehensive income, cash flows, dan changes in equity merupakan laporan utama yang lazim disediakan.'
    ],
    answers: [0, 1, 3],
    explanation: 'Kieso menempatkan external resource providers sebagai pengguna utama general-purpose financial reporting; notes menjadi bagian integral.'
  },
  {
    kind: 'report-fill',
    q: 'Isi nilai jurnal transaksi Snyder pada 3 Maret: akuisisi land, buildings, dan equipment secara tunai.',
    data: ["3 Maret: Snyder memperoleh land £10.000, buildings £22.000, dan equipment £6.000 secara tunai; total kas dibayar £38.000."],
    instruction: 'Gunakan Exercise E2.17; isi nominal debit masing-masing aset dan kredit kas.',
    blanks: [
      { id: 'uts-snyder-land', label: 'Land — debit', answer: 10000, prefix: '£' },
      { id: 'uts-snyder-buildings', label: 'Buildings — debit', answer: 22000, prefix: '£' },
      { id: 'uts-snyder-equipment', label: 'Equipment — debit', answer: 6000, prefix: '£' },
      { id: 'uts-snyder-cash', label: 'Cash — credit', answer: 38000, prefix: '£' },
    ],
    explanation: 'Debit aset = £38.000 dan kredit Cash = £38.000. Distribusi aset harus mengikuti data Snyder, bukan sekadar totalnya.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan transaksi Snyder dengan akun kredit atau debit lawannya.',
    instruction: 'Fokus pada transaksi yang digunakan dalam latihan jurnal TM 2.',
    choices: ['Cash', 'Accounts Payable', 'Service Revenue', 'Dividends'],
    pairs: [
      { prompt: 'Pembelian equipment secara kredit dari Young Company', answer: 'Accounts Payable' },
      { prompt: 'Penerimaan cash atas golf fees', answer: 'Service Revenue' },
      { prompt: 'Pembayaran dividen tunai', answer: 'Dividends' },
      { prompt: 'Pelunasan utang kepada Young Company', answer: 'Cash' },
    ],
    explanation: 'Dalam sumber Snyder, pendapatan fee dicatat sebagai Service Revenue.'
  },
  {
    kind: 'report-fill',
    q: 'Isi jumlah adjusting entries utama Yazici Advertising A.Ş.',
    data: ["Supplies sebelum adjustment UM20.000; supplies tersisa pada akhir periode UM5.000.", "Depreciation equipment periode berjalan UM400.", "Dari unearned service revenue, jasa yang telah diberikan UM4.000.", "Jasa telah diberikan tetapi belum ditagih UM2.000; salaries and wages terutang UM6.000."],
    instruction: 'Masukkan jumlah adjustment yang menjadi dasar adjusted trial balance.',
    blanks: [
      { id: 'uts-yaz-sup', label: 'Supplies used', answer: 15000, prefix: 'UM' },
      { id: 'uts-yaz-dep', label: 'Depreciation expense—equipment', answer: 400, prefix: 'UM' },
      { id: 'uts-yaz-unearned', label: 'Unearned revenue earned', answer: 4000, prefix: 'UM' },
      { id: 'uts-yaz-accrued-rev', label: 'Accrued service revenue', answer: 2000, prefix: 'UM' },
      { id: 'uts-yaz-sal', label: 'Accrued salaries and wages', answer: 6000, prefix: 'UM' },
    ],
    explanation: 'Adjustment Yazici mencakup deferrals dan accruals; depresiasi dikreditkan ke Accumulated Depreciation—Equipment.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi angka terpilih worksheet 10 kolom Ciner Cabinets setelah penyesuaian.',
    data: ["Prepaid Insurance trial balance $900; insurance expired $360.", "Allowance for Doubtful Accounts memiliki saldo kredit $2.000; adjustment kredit $1.000.", "Accumulated Depreciation—Equipment sebelum adjustment $12.000 kredit; depreciation expense periode berjalan $6.700.", "Accrued interest receivable $800; accrued property taxes payable $2.000."],
    instruction: 'Isi saldo adjusted trial balance yang berasal dari Appendix 2C.',
    blanks: [
      { id: 'uts-ciner-prepaid', label: 'Prepaid Insurance — adjusted debit', answer: 540, prefix: '$' },
      { id: 'uts-ciner-allow', label: 'Allowance for Doubtful Accounts — adjusted credit', answer: 3000, prefix: '$' },
      { id: 'uts-ciner-accdep', label: 'Accumulated Depreciation—Equipment — adjusted credit', answer: 18700, prefix: '$' },
      { id: 'uts-ciner-interest', label: 'Interest Receivable — adjusted debit', answer: 800, prefix: '$' },
      { id: 'uts-ciner-taxpay', label: 'Property Taxes Payable — adjusted credit', answer: 2000, prefix: '$' },
    ],
    explanation: 'Worksheet menghubungkan trial balance, adjustments, adjusted trial balance, income statement, dan statement of financial position.'
  },
  {
    kind: 'multi-select',
    q: 'Pilih perlakuan yang benar untuk accounting changes dan errors menurut Appendix Chapter 3.',
    options: [
      'Change in accounting principle umumnya diterapkan secara retrospektif melalui retained earnings.',
      'Correction of error dikoreksi melalui retained earnings bila berkaitan dengan periode lalu.',
      'Change in estimate diperlakukan secara prospektif.',
      'Change in estimate selalu dilaporkan sebagai discontinued operation.'
    ],
    answers: [0, 1, 2],
    explanation: 'Perubahan estimasi bukan error dan ditangani pada periode berjalan serta masa depan tanpa penyesuaian retained earnings sebelumnya.'
  },
  {
    kind: 'report-fill',
    q: 'Susun subtotal dan hasil akhir income statement Braun Company.',
    data: ["Sales revenue $2.700.000; cost of goods sold $1.150.000; selling and administrative expenses $480.000.", "Interest revenue $15.000; gain from extinguishment of debt $28.000; loss from abandonment of plant assets $45.000; loss from earthquake $30.000.", "Gain on disposal of discontinued operation $50.000; tax rate 30%.", "Effect of change in estimated useful lives $35.000 merupakan change in estimate prospektif, bukan baris terpisah dalam income statement."],
    instruction: 'Gunakan format Chapter 3 Practice Problem; effect of change in estimated useful lives bukan baris terpisah.',
    blanks: [
      { id: 'uts-braun-gp', label: 'Gross profit', answer: 1550000, prefix: '$' },
      { id: 'uts-braun-oper', label: 'Income from operations', answer: 1038000, prefix: '$' },
      { id: 'uts-braun-cont', label: 'Income from continuing operations', answer: 726600, prefix: '$' },
      { id: 'uts-braun-disc', label: 'Discontinued operation, net of tax', answer: 35000, prefix: '$' },
      { id: 'uts-braun-net', label: 'Net income', answer: 761600, prefix: '$' },
    ],
    explanation: 'Braun memisahkan discontinued operation setelah income from continuing operations; perubahan useful lives merupakan change in estimate prospektif.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi EPS dan comprehensive income Braun Company.',
    data: ["Gunakan data income statement Braun: sales $2.700.000; COGS $1.150.000; selling and administrative expenses $480.000; net other expense berasal dari interest revenue, gain debt extinguishment, loss plant abandonment, dan earthquake loss.", "Discontinued-operation gain before tax $50.000; tax rate 30%; ordinary shares outstanding 100.000.", "Unrealized holding loss on non-trading equity securities, net of tax, $12.000."],
    blanks: [
      { id: 'uts-braun-eps-cont', label: 'EPS — continuing operations', answer: 7.27, prefix: '$', tolerance: 0.01 },
      { id: 'uts-braun-eps-disc', label: 'EPS — discontinued operations', answer: 0.35, prefix: '$', tolerance: 0.01 },
      { id: 'uts-braun-eps-net', label: 'EPS — net income', answer: 7.62, prefix: '$', tolerance: 0.01 },
      { id: 'uts-braun-ci', label: 'Comprehensive income', answer: 749600, prefix: '$' },
    ],
    explanation: 'Comprehensive income = net income $761.600 dikurangi OCI loss net of tax $12.000.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi Statement of Comprehensive Income Gill SpA.',
    data: ["Sales revenue €800.000; cost of goods sold €600.000; operating expenses €90.000.", "Unrealized holding gain on non-trading equity securities, net of tax, €30.000."],
    instruction: 'Gunakan format two-statement example Chapter 3.',
    blanks: [
      { id: 'uts-gill-net', label: 'Net income', answer: 110000, prefix: '€' },
      { id: 'uts-gill-oci', label: 'Other comprehensive income', answer: 30000, prefix: '€' },
      { id: 'uts-gill-ci', label: 'Comprehensive income', answer: 140000, prefix: '€' },
    ],
    explanation: 'Gill menunjukkan bahwa comprehensive income dapat disajikan dalam statement kedua yang dimulai dari net income lalu menambahkan OCI.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan item pelaporan dengan penyajian yang tepat.',
    choices: ['Income from operations', 'Discontinued operations, net of tax', 'Other comprehensive income', 'Retained earnings adjustment'],
    pairs: [
      { prompt: 'Unusual loss yang tetap merupakan bagian operasi berkelanjutan', answer: 'Income from operations' },
      { prompt: 'Disposal of component yang memenuhi definisi discontinued operation', answer: 'Discontinued operations, net of tax' },
      { prompt: 'Unrealized holding loss yang disajikan di luar net income', answer: 'Other comprehensive income' },
      { prompt: 'Correction of material prior-period error', answer: 'Retained earnings adjustment' },
    ],
    explanation: 'Format income statement dan related equity statements harus membedakan net income, OCI, dan prior-period adjustment.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi Statement of Financial Position Cassy Corporation.',
    data: ["Saldo 31 Desember 2024: Land $36.000; Buildings $144.000; Equipment $108.000; Accumulated depreciation—buildings $(36.000); Accumulated depreciation—equipment $(13.200); Patents $48.000; Current assets $282.000.", "Saldo equity/liabilities 2024: Share capital—ordinary $216.000; Retained earnings $52.800; Bonds payable $120.000; Current liabilities $180.000.", "Perubahan 2025: treasury shares $13.200; dividends $36.000; long-term investment $19.200; current assets selain cash naik $34.800; current liabilities naik $15.600; depreciation building/equipment $4.800/$10.800; net income $66.000; bonds issued $60.000; addition to building $32.400; patent amortization $3.000; equipment cost $24.000 dengan accumulated depreciation $9.600 dijual $12.000."],
    blanks: [
      { id: 'uts-cassy-invest', label: 'Long-term investments', answer: 19200, prefix: '$' },
      { id: 'uts-cassy-ppe', label: 'Total property, plant, and equipment', answer: 241200, prefix: '$' },
      { id: 'uts-cassy-current', label: 'Current assets (plug figure)', answer: 355800, prefix: '$' },
      { id: 'uts-cassy-assets', label: 'Total assets', answer: 661200, prefix: '$' },
      { id: 'uts-cassy-equity', label: 'Total equity', answer: 285600, prefix: '$' },
      { id: 'uts-cassy-liab', label: 'Total liabilities', answer: 375600, prefix: '$' },
    ],
    explanation: 'Cassy menggunakan current assets sebagai plug figure untuk menyeimbangkan total assets dengan equity and liabilities.'
  },
  {
    kind: 'account-match',
    q: 'Klasifikasikan aktivitas dalam statement of cash flows Cassy.',
    choices: ['Operating activity', 'Investing activity', 'Financing activity', 'Noncash disclosure'],
    pairs: [
      { prompt: 'Depreciation expense ditambahkan kembali pada metode tidak langsung', answer: 'Operating activity' },
      { prompt: 'Addition to building secara tunai', answer: 'Investing activity' },
      { prompt: 'Issuance of bonds secara tunai', answer: 'Financing activity' },
      { prompt: 'Perolehan equipment melalui penerbitan saham tanpa kas', answer: 'Noncash disclosure' },
    ],
    explanation: 'Transaksi investasi/pendanaan nonkas tidak masuk dalam tiga arus kas utama, tetapi diungkapkan bila material.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi Statement of Cash Flows Cassy Corporation menggunakan metode tidak langsung.',
    data: ["Net income $66.000; equipment dengan cost $24.000 dan accumulated depreciation $9.600 dijual dengan kas $12.000.", "Depreciation building $4.800 dan equipment $10.800; patent amortization $3.000; current assets selain cash naik $34.800; current liabilities naik $15.600.", "Investment in shares $19.200; addition to building $32.400; bonds issued $60.000; dividends paid $36.000; treasury shares purchased $13.200."],
    blanks: [
      { id: 'uts-cassy-cfo', label: 'Net cash provided by operating activities', answer: 67800, prefix: '$' },
      { id: 'uts-cassy-cfi', label: 'Net cash used by investing activities', answer: -39600, prefix: '$' },
      { id: 'uts-cassy-cff', label: 'Net cash provided by financing activities', answer: 10800, prefix: '$' },
      { id: 'uts-cassy-increase', label: 'Net increase in cash', answer: 39000, prefix: '$' },
    ],
    explanation: 'CFO + CFI + CFF = $67.800 − $39.600 + $10.800 = $39.000.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi worksheet Time Value of Money Vesper Inc.',
    data: ["Security deposit $12.000 ditempatkan selama 10 tahun dengan bunga majemuk tahunan 10%.", "Bonds face value $3.000.000, stated rate 11%, term 15 tahun, bunga semiannual, market rate 10%.", "Sinking fund: setoran akhir tahun $90.000 selama 15 tahun, yield 10%.", "Pension obligation: $800.000 per tahun setelah retirement; retirement 15 tahun lagi; 10 pembayaran; discount rate 8%."],
    instruction: 'Isilah hasil akhir terpilih dari single sum, bond pricing, sinking fund, dan deferred pension annuity.',
    blanks: [
      { id: 'uts-vesper-deposit', label: 'FV security deposit', answer: 31125, prefix: '$' },
      { id: 'uts-vesper-bond', label: 'Selling price of bonds', answer: 3230594, prefix: '$' },
      { id: 'uts-vesper-sinking', label: 'FV sinking fund', answer: 2859523, prefix: '$' },
      { id: 'uts-vesper-def', label: 'Deficiency sinking fund', answer: 140477, prefix: '$' },
      { id: 'uts-vesper-pension', label: 'PV pension liability at beginning of 2025', answer: 1692228, prefix: '$' },
    ],
    explanation: 'Chapter 5 menerapkan PV/FV untuk jumlah tunggal, annuity, bonds, sinking funds, dan deferred pension annuity.'
  },
  {
    q: 'Dalam income statement, item discontinued operation dilaporkan...',
    options: ['Sebelum gross profit', 'Setelah income from continuing operations dan net of tax', 'Sebagai OCI', 'Sebagai koreksi retained earnings tanpa melewati income statement'],
    answer: 1,
    explanation: 'Discontinued operations disajikan terpisah setelah income from continuing operations dan dilaporkan net of tax.'
  },
  {
    q: 'Perubahan estimated useful lives sebesar $35.000 pada data Braun tidak ditampilkan sebagai baris terpisah karena...',
    options: ['Selalu dihapus dari laporan keuangan', 'Merupakan perubahan estimasi yang diperlakukan secara prospektif', 'Merupakan OCI', 'Merupakan discontinued operation'],
    answer: 1,
    explanation: 'Change in estimate ditangani secara prospektif; efeknya melekat dalam pengukuran beban pada periode kini dan masa depan.'
  },
  {
    q: 'Pada cash flow metode tidak langsung, depreciation expense diperlakukan sebagai...',
    options: ['Cash inflow investasi', 'Penambah kembali terhadap net income karena noncash expense', 'Cash outflow pendanaan', 'OCI'],
    answer: 1,
    explanation: 'Depreciation telah mengurangi net income tanpa mengurangi kas sehingga ditambahkan kembali pada operating section.'
  },
  {
    q: 'Present value ordinary annuity digunakan ketika pembayaran terjadi...',
    options: ['Pada awal setiap periode', 'Pada akhir setiap periode', 'Hanya setelah maturity bond', 'Tanpa pola waktu tetap'],
    answer: 1,
    explanation: 'Ordinary annuity memiliki pembayaran pada akhir setiap periode; annuity due memiliki pembayaran pada awal periode.'
  },
  {
    q: 'Dalam proses revenue recognition lima langkah, tindakan setelah menentukan transaction price adalah...',
    options: ['Mengakui laba komprehensif', 'Mengalokasikan transaction price ke performance obligations', 'Menutup retained earnings', 'Mencatat goodwill'],
    answer: 1,
    explanation: 'Lima langkah IFRS revenue recognition menempatkan allocation setelah penentuan transaction price.'
  },
];

export const AKK201_QUIZ_UAS: QuizQuestion[] = [
  {
    kind: 'account-match',
    q: 'Klasifikasikan item kas dan rekonsiliasi bank.',
    choices: ['Cash equivalent', 'Restricted cash', 'Book-side adjustment', 'Bank-side reconciling item'],
    pairs: [
      { prompt: 'Investasi sangat likuid, original maturity tiga bulan atau kurang, risiko perubahan nilai tidak signifikan', answer: 'Cash equivalent' },
      { prompt: 'Kas disisihkan untuk tujuan jangka panjang tertentu', answer: 'Restricted cash' },
      { prompt: 'Bank service charge yang belum dicatat perusahaan', answer: 'Book-side adjustment' },
      { prompt: 'Outstanding checks', answer: 'Bank-side reconciling item' },
    ],
    explanation: 'Jurnal rekonsiliasi dibuat hanya untuk item sisi buku; cash equivalents harus sangat likuid dengan risiko nilai yang tidak signifikan.'
  },
  {
    kind: 'account-match',
    q: 'Klasifikasikan cash-related items yang sering muncul pada UAS.',
    choices: ['Cash', 'Receivable / prepaid / supplies, bukan cash', 'Non-current restricted asset', 'Current liability'],
    pairs: [
      { prompt: 'Petty cash fund dan change fund yang tersedia untuk operasi', answer: 'Cash' },
      { prompt: 'Postdated check, IOU karyawan, travel advances, dan stamps on hand', answer: 'Receivable / prepaid / supplies, bukan cash' },
      { prompt: 'Cash restricted for plant expansion yang material', answer: 'Non-current restricted asset' },
      { prompt: 'Bank overdraft yang tidak dapat dioffset', answer: 'Current liability' },
    ],
    explanation: 'Cash harus tersedia sekarang dan tidak dibatasi; restricted cash jangka panjang dipisahkan sebagai non-current, sedangkan overdraft umumnya current liability.'
  },
  {
    kind: 'report-fill',
    q: 'Hitung bank reconciliation drill BOC Training Co.',
    data: ['Balance per bank statement Rp39.140; deposit in transit Rp5.000; outstanding checks Rp5.200.', 'Balance per books sebelum adjustment Rp39.410; NSF check Rp450; bank service charge Rp20.'],
    blanks: [
      { id: 'uas-boc-bank', label: 'Correct cash balance — bank side', answer: 38940, prefix: 'Rp' },
      { id: 'uas-boc-book', label: 'Correct cash balance — book side', answer: 38940, prefix: 'Rp' },
      { id: 'uas-boc-book-adj', label: 'Total book-side deduction requiring journal entry', answer: 470, prefix: 'Rp' },
    ],
    explanation: 'Sisi bank: 39.140 + 5.000 − 5.200 = 38.940. Sisi buku: 39.410 − 450 − 20 = 38.940. Jurnal dibuat untuk NSF check dan service charge.'
  },
  {
    kind: 'report-fill',
    q: 'Hitung reimbursement petty cash dan cash over/short.',
    data: ['Petty cash fund ditetapkan sebesar $400. Saat diperiksa terdapat bukti pengeluaran $364 dan cash on hand $44.'],
    blanks: [
      { id: 'uas-pc-total', label: 'Total accounted for', answer: 408, prefix: '$' },
      { id: 'uas-pc-over', label: 'Cash over', answer: 8, prefix: '$' },
      { id: 'uas-pc-reimburse', label: 'Cash paid to replenish fund', answer: 356, prefix: '$' },
    ],
    explanation: 'Receipts $364 + cash $44 = $408, lebih $8 dari imprest $400. Reimbursement cash = $400 − $44 = $356; Cash Over and Short dikredit $8.'
  },
  {
    kind: 'report-fill',
    q: 'Cash discount: bandingkan gross method dan net method untuk credit term 1/10, n/30.',
    data: ['Penjualan kredit Rp300.000 dengan credit term 1/10, n/30. Pelanggan dapat mengambil diskon Rp3.000 jika membayar dalam 10 hari.'],
    blanks: [
      { id: 'uas-disc-gross-ar', label: 'Gross method — A/R saat penjualan', answer: 300000, prefix: 'Rp' },
      { id: 'uas-disc-gross-discount', label: 'Gross method — Sales Discount jika dibayar dalam periode diskon', answer: 3000, prefix: 'Rp' },
      { id: 'uas-disc-net-ar', label: 'Net method — A/R saat penjualan', answer: 297000, prefix: 'Rp' },
      { id: 'uas-disc-forfeited', label: 'Net method — Sales Discounts Forfeited jika terlambat bayar', answer: 3000, prefix: 'Rp' },
    ],
    explanation: 'Gross method mencatat penjualan bruto dan diskon saat diambil. Net method mencatat penjualan net; jika diskon gagal diambil, selisih dikredit ke Sales Discounts Forfeited.'
  },
  {
    kind: 'multi-select',
    q: 'Pilih faktor yang memengaruhi pengukuran transaction price accounts receivable, bukan valuation allowance.',
    options: ['Trade discount', 'Cash discount', 'Sales returns and allowances', 'Allowance for doubtful accounts'],
    answers: [0, 1, 2],
    explanation: 'Trade discount, cash discount, dan returns/allowances memengaruhi jumlah transaction price yang diakui. Allowance for doubtful accounts adalah valuation account setelah piutang diakui.'
  },
  {
    kind: 'report-fill',
    q: 'Susun angka akhir bank reconciliation Nugget Mining Company.',
    data: ["Bank statement balance $22.190; deposit in transit $3.680; bank error $175; outstanding checks $5.001.", "Book balance $20.502; interest collected by bank $600; error in recording check $180; bank service charges $18; NSF check $220."],
    blanks: [
      { id: 'uas-nugget-bank', label: 'Correct cash balance — bank side', answer: 21044, prefix: '$' },
      { id: 'uas-nugget-books', label: 'Correct cash balance — book side', answer: 21044, prefix: '$' },
      { id: 'uas-nugget-interest', label: 'Interest collected by bank', answer: 600, prefix: '$' },
      { id: 'uas-nugget-error', label: 'Error in recording check', answer: 180, prefix: '$' },
      { id: 'uas-nugget-nsf', label: 'NSF check returned', answer: 220, prefix: '$' },
    ],
    explanation: 'Nugget berakhir pada saldo kas benar $21.044 di kedua sisi.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi aging schedule Wilson & Co. serta adjustment allowance.',
    data: ["A/R under 30 days €345.000 pada 0,8%; 30–60 days €115.000 pada 4%; 61–90 days €18.000 pada 15%; 91–120 days €14.000 pada 20%; over 120 days €55.000 pada 25%.", "Allowance for Doubtful Accounts memiliki saldo kredit sebelum adjustment sebesar €800."],
    blanks: [
      { id: 'uas-wilson-under30', label: 'Allowance under 30 days', answer: 2760, prefix: '€' },
      { id: 'uas-wilson-30-60', label: 'Allowance 30–60 days', answer: 4600, prefix: '€' },
      { id: 'uas-wilson-over120', label: 'Allowance over 120 days', answer: 13750, prefix: '€' },
      { id: 'uas-wilson-required', label: 'Required ending allowance', answer: 26610, prefix: '€' },
      { id: 'uas-wilson-adj', label: 'Adjustment with existing credit balance €800', answer: 25810, prefix: '€' },
    ],
    explanation: 'Percentage-of-receivables/aging menentukan target ending Allowance for Doubtful Accounts.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan tahap allowance method Brown Furniture/Randall dengan akun yang didebit.',
    choices: ['Allowance for Doubtful Accounts', 'Accounts Receivable—Randall plc', 'Cash', 'Bad Debt Expense'],
    pairs: [
      { prompt: 'Write-off piutang Randall £1.000', answer: 'Allowance for Doubtful Accounts' },
      { prompt: 'Recovery: reinstatement piutang yang sebelumnya dihapuskan', answer: 'Accounts Receivable—Randall plc' },
      { prompt: 'Recovery: penerimaan kas setelah reinstatement', answer: 'Cash' },
    ],
    explanation: 'Di bawah allowance method, write-off dan recovery tidak mendebit Bad Debt Expense kembali.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi amortization schedule zero-interest-bearing note Jeremiah Company.',
    data: ["Jeremiah menerima three-year zero-interest-bearing note dengan face value $10.000.", "Present value note pada pengakuan awal $7.721,80; effective-interest rate 9%; tidak ada pembayaran kas sebelum maturity."],
    blanks: [
      { id: 'uas-jer-pv', label: 'Initial present value', answer: 7721.80, prefix: '$', tolerance: 0.01 },
      { id: 'uas-jer-int1', label: 'Interest revenue year 1', answer: 694.96, prefix: '$', tolerance: 0.01 },
      { id: 'uas-jer-carry1', label: 'Carrying amount end of year 1', answer: 8416.76, prefix: '$', tolerance: 0.01 },
      { id: 'uas-jer-carry2', label: 'Carrying amount end of year 2', answer: 9174.27, prefix: '$', tolerance: 0.01 },
      { id: 'uas-jer-maturity', label: 'Carrying amount at maturity', answer: 10000, prefix: '$' },
    ],
    explanation: 'Discount diamortisasi menjadi interest revenue dengan effective-interest rate 9% sampai carrying amount mencapai face value.'
  },
  {
    kind: 'account-match',
    q: 'Klasifikasikan transfers of receivables pada kasus Slamar Ltd.',
    choices: ['Sale / factoring', 'Secured borrowing', 'Allowance adjustment'],
    pairs: [
      { prompt: 'Receivables ¥50.000 ditransfer tanpa guarantee dengan finance charge 11%', answer: 'Sale / factoring' },
      { prompt: 'Receivables digunakan sebagai jaminan loan ¥75.000 dengan charge 9%', answer: 'Secured borrowing' },
      { prompt: 'Required allowance 6% dari gross receivables ¥338.000', answer: 'Allowance adjustment' },
    ],
    explanation: 'Factoring dapat menghasilkan derecognition; pledging/assignment sebagai jaminan diperlakukan sebagai borrowing.'
  },
  {
    kind: 'report-fill',
    q: 'Tentukan proper ending inventory Werth Company setelah seluruh ownership adjustment.',
    data: ["Physical inventory count $234.890.", "Browser: barang in transit FOB shipping point $10.420; Minsky: barang diterima setelah count $8.540; Jackel: barang konsinyasi yang ikut dihitung $10.438; Sims: sale FOB shipping point yang masih ikut dihitung $11.520; returned goods dalam kondisi baik $1.500."],
    blanks: [
      { id: 'uas-werth-physical', label: 'Physical inventory count', answer: 234890, prefix: '$' },
      { id: 'uas-werth-browser', label: 'Add: Browser — FOB shipping point', answer: 10420, prefix: '$' },
      { id: 'uas-werth-minsky', label: 'Add: Minsky', answer: 8540, prefix: '$' },
      { id: 'uas-werth-jackel', label: 'Deduct: Jackel consigned inventory', answer: 10438, prefix: '$' },
      { id: 'uas-werth-sims', label: 'Deduct: Sims FOB shipping point sale', answer: 11520, prefix: '$' },
      { id: 'uas-werth-final', label: 'Proper ending inventory', answer: 233392, prefix: '$' },
    ],
    explanation: 'Werth menuntut analisis ownership sebelum menghitung saldo inventory yang benar.'
  },
  {
    kind: 'multi-select',
    q: 'Pilih biaya yang tidak boleh dikapitalisasi sebagai inventory cost.',
    options: ['Normal freight-in untuk membawa inventory ke lokasi siap dijual', 'Abnormal freight', 'Abnormal handling cost', 'Abnormal wasted materials/spoilage'],
    answers: [1, 2, 3],
    explanation: 'Kieso mengecualikan abnormal freight, handling, dan waste dari inventory cost; biaya abnormal menjadi period expense.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi cost-flow comparison Call-Mart SpA.',
    data: ["March 2: purchase 2.000 units @ €4,00; March 15: purchase 6.000 units @ €4,40; March 19: sold/issued 4.000 units; March 30: purchase 2.000 units @ €4,75.", "Goods available for sale €43.900; ending inventory quantity 6.000 units."],
    blanks: [
      { id: 'uas-call-wa-end', label: 'Weighted-average periodic — ending inventory', answer: 26340, prefix: '€' },
      { id: 'uas-call-wa-cogs', label: 'Weighted-average periodic — COGS', answer: 17560, prefix: '€' },
      { id: 'uas-call-ma-end', label: 'Moving-average perpetual — ending inventory', answer: 26700, prefix: '€' },
      { id: 'uas-call-fifo-end', label: 'FIFO — ending inventory', answer: 27100, prefix: '€' },
      { id: 'uas-call-fifo-cogs', label: 'FIFO — COGS', answer: 16800, prefix: '€' },
    ],
    explanation: 'Pada data harga meningkat Call-Mart, FIFO memberikan ending inventory tertinggi dan COGS terendah dibanding average-cost.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan kondisi inventory error dengan dampak periode berjalan.',
    choices: ['COGS overstated; net income understated', 'COGS understated; net income overstated'],
    pairs: [
      { prompt: 'Ending inventory understated', answer: 'COGS overstated; net income understated' },
      { prompt: 'Ending inventory overstated', answer: 'COGS understated; net income overstated' },
    ],
    explanation: 'Ending inventory adalah pengurang dalam perhitungan COGS sehingga kesalahannya berlawanan arah dengan net income.'
  },
  {
    kind: 'report-fill',
    q: 'Hitung inventoriable cost dan period expense PT Lumin.',
    data: ['Invoice price Rp120.000; purchase returns Rp5.000; purchase discount Rp2.400.', 'Freight-in normal Rp7.500; normal handling Rp3.000; abnormal storage Rp1.200; delivery to customers Rp4.000.'],
    blanks: [
      { id: 'uas-lumin-net-purchase', label: 'Net purchase price sebelum freight/handling', answer: 112600, prefix: 'Rp' },
      { id: 'uas-lumin-inventoriable', label: 'Total inventoriable cost', answer: 123100, prefix: 'Rp' },
      { id: 'uas-lumin-period', label: 'Period expense', answer: 5200, prefix: 'Rp' },
    ],
    explanation: 'Inventoriable cost = 120.000 − 5.000 − 2.400 + 7.500 + 3.000 = 123.100. Abnormal storage dan delivery to customers menjadi period expense.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan transaksi inventory dengan perlakuan periodic dan perpetual.',
    choices: ['Dr Inventory', 'Dr Purchases', 'COGS dicatat saat penjualan', 'COGS ditentukan pada akhir periode'],
    pairs: [
      { prompt: 'Pembelian barang dagang dalam perpetual system', answer: 'Dr Inventory' },
      { prompt: 'Pembelian barang dagang dalam periodic system', answer: 'Dr Purchases' },
      { prompt: 'Penjualan barang dagang dalam perpetual system', answer: 'COGS dicatat saat penjualan' },
      { prompt: 'Penjualan barang dagang dalam periodic system', answer: 'COGS ditentukan pada akhir periode' },
    ],
    explanation: 'Perpetual memperbarui Inventory dan COGS secara berjalan; periodic menunggu ending physical count untuk menghitung COGS.'
  },
  {
    kind: 'report-fill',
    q: 'Mini cost-flow drill PT Lumin: FIFO, weighted-average periodic, dan moving-average perpetual.',
    data: ['Beginning inventory 100 unit @ Rp10; purchase 200 unit @ Rp12; sale 180 unit; purchase 100 unit @ Rp14.', 'Total cost available Rp4.800; total units available 400; ending units 220.'],
    blanks: [
      { id: 'uas-lumin-fifo-end', label: 'FIFO ending inventory', answer: 2840, prefix: 'Rp' },
      { id: 'uas-lumin-fifo-cogs', label: 'FIFO COGS', answer: 1960, prefix: 'Rp' },
      { id: 'uas-lumin-wa-end', label: 'Weighted-average periodic ending inventory', answer: 2640, prefix: 'Rp' },
      { id: 'uas-lumin-ma-end', label: 'Moving-average perpetual ending inventory', answer: 2760, prefix: 'Rp' },
    ],
    explanation: 'FIFO memakai unit terbaru untuk ending inventory. Weighted-average periodic memakai average Rp12. Moving-average perpetual memperbarui average setelah purchase pertama sebelum sale.'
  },
  {
    kind: 'multi-select',
    q: 'Asumsikan entitas pelapor adalah PT Lumin: pembeli pada item 1, seller pada item 2, dan consignor pada item 3. Pilih item yang masuk inventory PT Lumin pada tanggal laporan.',
    options: ['Barang dibeli PT Lumin dengan syarat FOB shipping point yang sudah dikirim tetapi belum diterima', 'Barang dijual PT Lumin dengan syarat FOB destination yang masih dalam perjalanan ke pelanggan', 'Barang konsinyasi milik PT Lumin yang dipegang consignee dan belum terjual', 'Barang konsinyasi milik pihak lain yang dipegang PT Lumin sebagai consignee'],
    answers: [0, 1, 2],
    explanation: 'Ownership, bukan lokasi fisik, menentukan inventory. Consignee tidak memasukkan barang konsinyasi sebagai inventory miliknya.'
  },
  {
    kind: 'report-fill',
    q: 'Hitung dampak dua tahun dari inventory error.',
    data: ['Ending inventory 2025 overstated Rp18.000. Asumsikan error baru berbalik melalui physical count normal pada 2026 dan tidak ada koreksi retrospektif.'],
    blanks: [
      { id: 'uas-error-2025', label: 'Dampak net income 2025', answer: 18000, prefix: 'Rp' },
      { id: 'uas-error-2026', label: 'Dampak net income 2026', answer: -18000, prefix: 'Rp' },
    ],
    explanation: 'Ending inventory overstated membuat COGS understated dan net income 2025 overstated. Pada 2026, beginning inventory overstated membuat COGS overstated dan net income understated.'
  },
  {
    kind: 'report-fill',
    q: 'Hitung NRV dan loss on inventory write-down Mander AG.',
    data: ["Inventory cost €950; estimated selling price €1.000; estimated cost of completion €50; estimated cost to sell €200."],
    blanks: [
      { id: 'uas-mander-nrv', label: 'Net realizable value', answer: 750, prefix: '€' },
      { id: 'uas-mander-loss', label: 'Inventory write-down loss', answer: 200, prefix: '€' },
    ],
    explanation: 'NRV = €1.000 − €50 − €200 = €750; cost €950 diturunkan sebesar €200.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi final inventory LCNRV Jinn-Feng Foods.',
    data: ["Frozen: Spinach cost ¥80.000 / NRV ¥120.000; Carrots cost ¥100.000 / NRV ¥110.000; Cut beans cost ¥50.000 / NRV ¥40.000.", "Canned: Peas cost ¥90.000 / NRV ¥72.000; Mixed vegetables cost ¥95.000 / NRV ¥92.000.", "Hitung carrying amount menurut individual items, major groups (frozen/canned), dan total inventory."],
    blanks: [
      { id: 'uas-jinn-item', label: 'Individual items basis', answer: 384000, prefix: '¥' },
      { id: 'uas-jinn-group', label: 'Major groups basis', answer: 394000, prefix: '¥' },
      { id: 'uas-jinn-total', label: 'Total inventory basis', answer: 415000, prefix: '¥' },
    ],
    explanation: 'Item-by-item menghasilkan nilai terendah karena kenaikan NRV item lain tidak meng-offset penurunan item tertentu.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan jurnal Ricardo SpA dengan nominalnya.',
    choices: ['€12.000', '€4.000'],
    pairs: [
      { prompt: 'Write-down: debit Loss Due to Decline of Inventory to NRV', answer: '€12.000' },
      { prompt: 'Recovery: debit Allowance to Reduce Inventory to NRV', answer: '€4.000' },
    ],
    explanation: 'Recovery tidak boleh menaikkan inventory di atas original cost dan tidak boleh melebihi write-down sebelumnya.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi gross profit method Cetus SE.',
    data: ["Beginning inventory at cost €60.000; purchases at cost €200.000; sales at selling price €280.000.", "Estimated gross profit rate adalah 30% dari sales."],
    blanks: [
      { id: 'uas-cetus-avail', label: 'Goods available at cost', answer: 260000, prefix: '€' },
      { id: 'uas-cetus-gp', label: 'Gross profit, 30% of sales', answer: 84000, prefix: '€' },
      { id: 'uas-cetus-cogs', label: 'Estimated COGS', answer: 196000, prefix: '€' },
      { id: 'uas-cetus-ending', label: 'Approximate ending inventory', answer: 64000, prefix: '€' },
    ],
    explanation: 'Gross profit method digunakan untuk estimasi, bukan menggantikan physical count untuk laporan akhir.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi retail inventory method Debenhams.',
    data: ["Beginning inventory: cost £14.000, retail £20.000; purchases: cost £63.000, retail £90.000.", "Sales at retail £85.000."],
    blanks: [
      { id: 'uas-deb-ratio', label: 'Cost-to-retail ratio', answer: 70, suffix: '%' },
      { id: 'uas-deb-ending-retail', label: 'Ending inventory at retail', answer: 25000, prefix: '£' },
      { id: 'uas-deb-ending-cost', label: 'Ending inventory at cost', answer: 17500, prefix: '£' },
    ],
    explanation: 'Debenhams mengonversi ending inventory at retail ke cost menggunakan rasio 70%.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi conventional retail LCNRV In-Fusion SA.',
    data: ["Beginning inventory: cost €500, retail €1.000; purchases net: cost €20.000, retail €35.000.", "Markups €3.000; markup cancellations €1.000; markdowns €2.500; markdown cancellations €2.000; sales net €25.000.", "Untuk conventional retail method, net markdowns tidak dimasukkan ke denominator cost-to-retail ratio."],
    blanks: [
      { id: 'uas-inf-ratio-base', label: 'Retail basis for LCNRV ratio', answer: 38000, prefix: '€' },
      { id: 'uas-inf-ratio', label: 'Cost-to-retail ratio', answer: 53.9, suffix: '%', tolerance: 0.1 },
      { id: 'uas-inf-ending-retail', label: 'Ending inventory at retail', answer: 12500, prefix: '€' },
      { id: 'uas-inf-lcnrv', label: 'Approximate LCNRV', answer: 6737.50, prefix: '€', tolerance: 0.01 },
    ],
    explanation: 'Conventional retail memasukkan net markups, tetapi mengecualikan markdowns dari denominator rasio LCNRV.'
  },
  {
    kind: 'report-fill',
    q: 'Lengkapi analisis inventory Norwood Company setelah adjustment ownership dan LCNRV.',
    data: ["Beginning inventory $1.026.000; ending inventory before adjustments $1.007.000; COGS before adjustments $11.776.000.", "Consigned goods yang salah dicatat sebagai sales/COGS $22.000; goods in transit FOB destination yang belum tercermin $25.000.", "Inventory dengan historical cost $112.000 memiliki NRV $100.800; entitas memakai FIFO dan LCNRV cost-of-goods-sold method."],
    blanks: [
      { id: 'uas-nor-inv', label: 'Adjusted ending inventory', answer: 1042800, prefix: '$' },
      { id: 'uas-nor-cogs', label: 'Adjusted COGS', answer: 11740200, prefix: '$' },
      { id: 'uas-nor-turn', label: 'Adjusted inventory turnover', answer: 11.3, suffix: '×', tolerance: 0.1 },
    ],
    explanation: 'Norwood mengintegrasikan ownership, LCNRV, COGS, dan turnover dalam satu review UAS.'
  },
  {
    q: 'Specific identification paling tepat digunakan ketika...',
    options: ['Unit inventory tidak ordinarily interchangeable atau dialokasikan ke proyek khusus', 'Seluruh inventory massal identik dan tidak dapat ditelusuri', 'Perusahaan ingin memakai LIFO dalam IFRS', 'Tidak ada data cost aktual'],
    answer: 0,
    explanation: 'Specific identification mengikuti biaya aktual item yang ditelusuri; jika tidak praktis, IFRS menggunakan FIFO atau average-cost.'
  },
  {
    q: 'Di bawah IFRS, LIFO untuk pelaporan financial statement...',
    options: ['Diwajibkan saat harga meningkat', 'Dilarang', 'Selalu sama dengan FIFO', 'Digunakan hanya untuk cash equivalents'],
    answer: 1,
    explanation: 'IFRS tidak memperbolehkan LIFO untuk financial reporting.'
  },
  {
    q: 'Pada conventional retail LCNRV method, markdowns dalam perhitungan ratio...',
    options: ['Dimasukkan ke denominator bersama net markups', 'Dikecualikan dari denominator rasio lalu dikurangkan saat menentukan ending retail inventory', 'Dikapitalisasi ke cost', 'Tidak pernah dicatat'],
    answer: 1,
    explanation: 'Metode conventional retail mempertahankan LCNRV dengan mengecualikan markdowns dari denominator rasio.'
  },
  {
    kind: 'report-fill',
    q: 'UAS-style LCNRV per unit: Produk Z, ALPHA, dan 2005WSC.',
    data: ['Produk Z: cost Rp150; selling price Rp190; cost to complete Rp20; cost to sell Rp11.', 'Produk ALPHA: cost Rp85; selling price Rp97; cost to complete Rp8; cost to sell Rp6.', 'Produk 2005WSC: cost Rp18; selling price Rp25; cost to complete Rp4; cost to sell Rp6.'],
    blanks: [
      { id: 'uas4-z-nrv', label: 'Produk Z — NRV', answer: 159, prefix: 'Rp' },
      { id: 'uas4-z-carry', label: 'Produk Z — LCNRV carrying amount', answer: 150, prefix: 'Rp' },
      { id: 'uas4-alpha-carry', label: 'Produk ALPHA — LCNRV carrying amount', answer: 83, prefix: 'Rp' },
      { id: 'uas4-2005-carry', label: '2005WSC — LCNRV carrying amount', answer: 15, prefix: 'Rp' },
    ],
    explanation: 'NRV = selling price − completion cost − selling cost; LCNRV memilih yang lebih rendah antara cost dan NRV.'
  },
  {
    q: 'Markup 40% on cost setara dengan markup berapa persen atas selling price?',
    options: ['29%', '40%', '60%', '71%'],
    answer: 0,
    explanation: 'Misalkan cost 100, markup 40, selling price 140. Markup on selling price = 40/140 = 28,57% ≈ 29%.'
  },
  {
    kind: 'report-fill',
    q: 'Gross profit method: Glaus Inc. memiliki beginning inventory Rp800.000, purchases Rp1.600.000, sales Rp2.000.000, gross profit rate 25% dari sales.',
    data: ["Beginning inventory Rp800.000; purchases Rp1.600.000.", "Sales Rp2.000.000; gross profit rate 25% dari sales."],
    blanks: [
      { id: 'uas4-glaus-avail', label: 'Goods available for sale', answer: 2400000, prefix: 'Rp' },
      { id: 'uas4-glaus-gp', label: 'Gross profit', answer: 500000, prefix: 'Rp' },
      { id: 'uas4-glaus-cogs', label: 'Estimated COGS', answer: 1500000, prefix: 'Rp' },
      { id: 'uas4-glaus-ending', label: 'Estimated ending inventory', answer: 900000, prefix: 'Rp' },
    ],
    explanation: 'COGS = sales − gross profit = 2.000.000 − 500.000 = 1.500.000. Ending inventory = 2.400.000 − 1.500.000 = 900.000.'
  },
  {
    kind: 'account-match',
    q: 'Pasangkan perlakuan LCNRV dengan metode pencatatannya.',
    choices: ['Loss method', 'Cost-of-goods-sold method', 'Tidak ada write-down'],
    pairs: [
      { prompt: 'Akun Loss Due to Decline of Inventory to NRV muncul eksplisit.', answer: 'Loss method' },
      { prompt: 'Penurunan NRV diserap ke Cost of Goods Sold.', answer: 'Cost-of-goods-sold method' },
      { prompt: 'Cost lebih rendah daripada NRV.', answer: 'Tidak ada write-down' },
    ],
    explanation: 'Metode pencatatan memengaruhi akun income statement, sedangkan carrying amount inventory tetap mengikuti lower of cost or NRV.'
  },
  {
    kind: 'report-fill',
    q: 'Conventional retail denominator check: hitung net markup, net markdown, denominator ratio, dan ending inventory at retail In-Fusion.',
    data: ["Beginning inventory cost €500 dan retail €1.000; purchases net cost €20.000 dan retail €35.000.", "Markups €3.000; markup cancellations €1.000; markdowns €2.500; markdown cancellations €2.000; net sales €25.000.", "Conventional retail method mengecualikan net markdowns dari denominator ratio, tetapi markdown tetap mengurangi ending inventory at retail."],
    blanks: [
      { id: 'uas-inf-net-markup-check', label: 'Net markup', answer: 2000, prefix: '€' },
      { id: 'uas-inf-net-markdown-check', label: 'Net markdown', answer: 500, prefix: '€' },
      { id: 'uas-inf-denominator-check', label: 'Denominator conventional ratio', answer: 38000, prefix: '€' },
      { id: 'uas-inf-ending-retail-check', label: 'Ending inventory at retail', answer: 12500, prefix: '€' },
    ],
    explanation: 'Net markup = €3.000 − €1.000 = €2.000. Net markdown = €2.500 − €2.000 = €500. Denominator conventional = €36.000 + €2.000 = €38.000; ending retail = €38.000 − €500 − €25.000 = €12.500.'
  },
  {
    kind: 'multi-select',
    q: 'Pilih pernyataan yang benar tentang gross profit method.',
    options: ['Dapat digunakan untuk estimasi inventory interim.', 'Dapat membantu memperkirakan inventory yang hilang akibat bencana.', 'Menggantikan physical count untuk laporan tahunan final tanpa pembatasan.', 'Sensitif terhadap gross profit rate yang tidak representatif.'],
    answers: [0, 1, 3],
    explanation: 'Gross profit method adalah estimasi. Untuk laporan tahunan final, physical count dan prosedur inventory tetap diperlukan.'
  },

];


export const AKK201_QUIZ_UAS_DIAGNOSTIC: QuizQuestion[] = [
  {
    kind: 'account-match',
    topic: 'Cash & Bank Reconciliation',
    skill: 'Klasifikasi cash, restricted cash, dan reconciling items',
    difficulty: 'basic',
    q: 'Diagnostic UAS: klasifikasikan item cash dan rekonsiliasi bank.',
    instruction: 'Pilih perlakuan yang paling tepat untuk setiap item sebelum membuat jurnal atau perhitungan.',
    choices: ['Cash', 'Cash equivalent', 'Restricted cash', 'Bank-side reconciling item', 'Book-side adjustment', 'Bukan cash'],
    pairs: [
      { prompt: 'Petty cash fund yang dipakai untuk pengeluaran kecil operasional.', answer: 'Cash' },
      { prompt: 'Treasury bills yang dibeli 1 Desember dan jatuh tempo 31 Maret tahun berikutnya.', answer: 'Bukan cash' },
      { prompt: 'Deposit in transit yang sudah dicatat perusahaan tetapi belum masuk rekening koran.', answer: 'Bank-side reconciling item' },
      { prompt: 'NSF check pelanggan yang dikembalikan bank.', answer: 'Book-side adjustment' },
      { prompt: 'Dana ekspansi pabrik yang dibatasi penggunaannya lebih dari satu tahun.', answer: 'Restricted cash' },
    ],
    explanation: 'Diagnostic ini menguji urutan berpikir: definisi cash, batas cash equivalent tiga bulan atau kurang sejak tanggal akuisisi, restricted cash, lalu bank-side/book-side items. Treasury bills pada soal ini dibeli 1 Desember dan jatuh tempo 31 Maret sehingga original maturity-nya lebih dari tiga bulan; karena itu tidak diklasifikasikan sebagai cash equivalent.'
  },
  {
    kind: 'report-fill',
    topic: 'Cash & Bank Reconciliation',
    skill: 'Menghitung saldo kas benar dari rekonsiliasi bank',
    difficulty: 'medium',
    q: 'Diagnostic UAS: hitung saldo kas benar BOC Co. dari sisi bank dan sisi buku.',
    data: ['Saldo bank Rp39.140; deposit in transit Rp5.000; outstanding checks Rp5.200.', 'NSF check Rp450 dan bank service charge Rp20 belum dicatat perusahaan.'],
    instruction: 'Isi saldo benar dan book-side adjustment bersih.',
    blanks: [
      { id: 'diag-boc-bank', label: 'Correct cash balance dari sisi bank', answer: 38940, prefix: 'Rp' },
      { id: 'diag-boc-book-deduction', label: 'Total pengurang sisi buku yang dijurnal', answer: 470, prefix: 'Rp' },
    ],
    explanation: 'Bank side: 39.140 + 5.000 − 5.200 = 38.940. Book side harus mengurangi cash untuk NSF 450 dan service charge 20.'
  },
  {
    kind: 'report-fill',
    topic: 'Cash & Bank Reconciliation',
    skill: 'Petty cash reimbursement dan cash over/short',
    difficulty: 'medium',
    q: 'Diagnostic UAS: petty cash fund Rp400 berisi receipts Rp364 dan cash on hand Rp44.',
    instruction: 'Isi reimbursement cash dan cash over/short. Gunakan positif untuk cash over.',
    blanks: [
      { id: 'diag-petty-reimb', label: 'Cash reimbursement', answer: 356, prefix: 'Rp' },
      { id: 'diag-petty-over', label: 'Cash over', answer: 8, prefix: 'Rp' },
    ],
    explanation: 'Reimbursement = imprest 400 − cash 44 = 356. Receipts 364 + cash 44 = 408, lebih Rp8 daripada imprest sehingga cash over.'
  },
  {
    kind: 'report-fill',
    topic: 'Receivables — Transaction Price',
    skill: 'Gross method vs net method pada cash discount',
    difficulty: 'medium',
    q: 'Diagnostic UAS: penjualan kredit Rp300.000 dengan term 1/10, n/30.',
    data: ['Bandingkan pencatatan awal piutang pada gross method dan net method.'],
    blanks: [
      { id: 'diag-disc-gross-ar', label: 'Accounts Receivable pada gross method', answer: 300000, prefix: 'Rp' },
      { id: 'diag-disc-net-ar', label: 'Accounts Receivable pada net method', answer: 297000, prefix: 'Rp' },
      { id: 'diag-disc-forfeit', label: 'Sales Discounts Forfeited jika net method dan pelanggan terlambat bayar', answer: 3000, prefix: 'Rp' },
    ],
    explanation: 'Gross method mencatat invoice penuh. Net method mengasumsikan diskon diambil sehingga piutang awal 99% × 300.000 = 297.000; jika pelanggan terlambat, selisih 3.000 menjadi Sales Discounts Forfeited.'
  },
  {
    kind: 'report-fill',
    topic: 'Receivables — Valuation',
    skill: 'Allowance method dan cash realizable value',
    difficulty: 'medium',
    q: 'Diagnostic UAS: aging schedule menghasilkan required allowance €26.610 dan saldo AFDA sebelum penyesuaian €800 kredit.',
    blanks: [
      { id: 'diag-afda-expense', label: 'Bad Debt Expense adjustment', answer: 25810, prefix: '€' },
      { id: 'diag-afda-ending', label: 'Ending AFDA setelah adjustment', answer: 26610, prefix: '€' },
    ],
    explanation: 'Allowance method menargetkan ending allowance. Karena saldo awal kredit €800, adjustment expense = €26.610 − €800 = €25.810.'
  },
  {
    kind: 'report-fill',
    topic: 'Notes Receivable',
    skill: 'Initial measurement dan interest revenue saat stated rate sama dengan market rate',
    difficulty: 'medium',
    q: 'Diagnostic UAS: notes receivable Rp100.000 berbunga 8% ketika market rate juga 8%.',
    data: ['Note diterbitkan pada face value. Tidak ada discount/premium karena stated rate = market rate.'],
    blanks: [
      { id: 'diag-note-carrying', label: 'Initial carrying amount', answer: 100000, prefix: 'Rp' },
      { id: 'diag-note-interest', label: 'Interest revenue tahun pertama', answer: 8000, prefix: 'Rp' },
    ],
    explanation: 'Jika stated interest sama dengan market interest, present value sama dengan face value dan interest revenue sama dengan cash interest.'
  },
  {
    kind: 'report-fill',
    topic: 'Transfer Receivables',
    skill: 'Factoring receivables without recourse',
    difficulty: 'advanced',
    q: 'Diagnostic UAS: factoring piutang Rp5.000.000 without recourse, finance charge 5%, holdback 10%.',
    instruction: 'Hitung cash proceeds, due from factor, dan loss on transfer.',
    blanks: [
      { id: 'diag-factor-cash', label: 'Cash proceeds', answer: 4250000, prefix: 'Rp' },
      { id: 'diag-factor-due', label: 'Due from factor', answer: 500000, prefix: 'Rp' },
      { id: 'diag-factor-loss', label: 'Loss on transfer', answer: 250000, prefix: 'Rp' },
    ],
    explanation: 'Finance charge = 5% × 5.000.000 = 250.000. Holdback = 500.000. Cash = 5.000.000 − 250.000 − 500.000 = 4.250.000; loss = 250.000.'
  },
  {
    kind: 'account-match',
    topic: 'Inventory Ownership',
    skill: 'FOB shipping point/destination dan consignment',
    difficulty: 'basic',
    q: 'Diagnostic UAS: tentukan siapa yang memasukkan barang ke inventory akhir.',
    choices: ['Pembeli', 'Penjual', 'Consignor', 'Tidak termasuk inventory entitas'],
    pairs: [
      { prompt: 'Goods in transit FOB shipping point pada tanggal laporan.', answer: 'Pembeli' },
      { prompt: 'Goods in transit FOB destination yang belum diterima pembeli.', answer: 'Penjual' },
      { prompt: 'Barang konsinyasi yang masih berada di consignee.', answer: 'Consignor' },
      { prompt: 'Barang pelanggan yang hanya dititipkan sementara di gudang entitas.', answer: 'Tidak termasuk inventory entitas' },
    ],
    explanation: 'Inventory mengikuti ownership/legal title, bukan lokasi fisik semata.'
  },
  {
    kind: 'report-fill',
    topic: 'Inventory Cost-Basis',
    skill: 'Inventoriable cost vs period expense',
    difficulty: 'medium',
    q: 'Diagnostic UAS: PT Lumin membeli barang Rp120.000, purchase discount Rp2.400, purchase returns Rp5.000, freight-in Rp7.500, handling normal Rp3.000, abnormal storage Rp5.200.',
    blanks: [
      { id: 'diag-lumin-cost', label: 'Inventoriable cost', answer: 123100, prefix: 'Rp' },
      { id: 'diag-lumin-period', label: 'Period expense', answer: 5200, prefix: 'Rp' },
    ],
    explanation: 'Inventoriable cost = 120.000 − 5.000 − 2.400 + 7.500 + 3.000 = 123.100. Abnormal storage menjadi period expense.'
  },
  {
    kind: 'report-fill',
    topic: 'Inventory Cost-Basis',
    skill: 'Cost flow assumption — FIFO vs average',
    difficulty: 'advanced',
    q: 'Diagnostic UAS: PT Lumin memiliki 60 unit @Rp20, membeli 100 unit @Rp24, lalu menjual 70 unit.',
    instruction: 'Gunakan periodic FIFO dan weighted-average periodic.',
    blanks: [
      { id: 'diag-flow-fifo-ending', label: 'FIFO ending inventory', answer: 2160, prefix: 'Rp' },
      { id: 'diag-flow-wa-ending', label: 'Weighted-average ending inventory', answer: 2025, prefix: 'Rp' },
    ],
    explanation: 'Goods available = 160 unit dengan cost Rp3.600. Ending 90 unit. FIFO ending = 90 × 24 = 2.160. Average cost = 3.600/160 = 22,5; ending = 90 × 22,5 = 2.025.'
  },
  {
    kind: 'multi-select',
    topic: 'Inventory Errors',
    skill: 'Dampak overstatement/understatement inventory dua periode',
    difficulty: 'medium',
    q: 'Diagnostic UAS: ending inventory tahun 20X1 overstated. Pilih dampak yang benar.',
    options: ['COGS 20X1 understated.', 'Net income 20X1 overstated.', 'Beginning inventory 20X2 overstated.', 'Net income 20X2 understated, jika error tidak dikoreksi.'],
    answers: [0, 1, 2, 3],
    explanation: 'Ending inventory overstated menurunkan COGS dan menaikkan income tahun berjalan; error berbalik pada periode berikutnya melalui beginning inventory.'
  },
  {
    kind: 'report-fill',
    topic: 'LCNRV & Inventory Write-down',
    skill: 'NRV, LCNRV, dan write-down per unit',
    difficulty: 'medium',
    q: 'Diagnostic UAS: Produk ALPHA memiliki cost Rp85, selling price Rp97, cost to complete Rp8, dan selling cost Rp6.',
    blanks: [
      { id: 'diag-alpha-nrv', label: 'NRV', answer: 83, prefix: 'Rp' },
      { id: 'diag-alpha-write', label: 'Write-down per unit', answer: 2, prefix: 'Rp' },
    ],
    explanation: 'NRV = 97 − 8 − 6 = 83. Karena cost 85 lebih tinggi daripada NRV 83, write-down per unit = 2.'
  },
  {
    kind: 'report-fill',
    topic: 'LCNRV & Inventory Write-down',
    skill: 'Recovery inventory loss under IFRS',
    difficulty: 'medium',
    q: 'Diagnostic UAS: inventory turun dari Rp240.000 ke Rp200.000, lalu NRV membaik menjadi Rp216.000.',
    blanks: [
      { id: 'diag-recovery', label: 'Recovery of Inventory Loss', answer: 16000, prefix: 'Rp' },
      { id: 'diag-recovery-carrying', label: 'Carrying amount setelah recovery', answer: 216000, prefix: 'Rp' },
    ],
    explanation: 'IFRS memperbolehkan reversal write-down sampai batas original cost. Kenaikan dari 200.000 ke 216.000 menghasilkan recovery 16.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Gross Profit Method',
    skill: 'Estimasi ending inventory dengan gross profit method',
    difficulty: 'medium',
    q: 'Diagnostic UAS: Glaus Inc. memiliki beginning inventory Rp800.000, purchases Rp1.600.000, sales Rp2.000.000, gross profit rate 25% dari sales.',
    blanks: [
      { id: 'diag-glaus-cogs', label: 'Estimated COGS', answer: 1500000, prefix: 'Rp' },
      { id: 'diag-glaus-ending', label: 'Estimated ending inventory', answer: 900000, prefix: 'Rp' },
    ],
    explanation: 'COGS = 75% × sales = 1.500.000. Goods available = 2.400.000 sehingga ending inventory = 900.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Retail Inventory Method',
    skill: 'Conventional retail method denominator dan ending inventory',
    difficulty: 'advanced',
    q: 'Diagnostic UAS: In-Fusion memiliki retail basis €36.000 sebelum markup/markdown; net markup €2.000, net markdown €500, net sales €25.000.',
    instruction: 'Untuk conventional retail method, net markdown tidak masuk denominator ratio tetapi tetap mengurangi ending inventory at retail.',
    blanks: [
      { id: 'diag-retail-denom', label: 'Conventional denominator', answer: 38000, prefix: '€' },
      { id: 'diag-retail-ending-retail', label: 'Ending inventory at retail', answer: 12500, prefix: '€' },
    ],
    explanation: 'Denominator conventional = 36.000 + 2.000 = 38.000. Ending inventory at retail = 38.000 − 500 − 25.000 = 12.500.'
  },
  {
    kind: 'report-fill',
    topic: 'Inventory Analysis',
    skill: 'Inventory turnover dan days to sell',
    difficulty: 'medium',
    q: 'Diagnostic UAS: COGS Rp1.200.000, beginning inventory Rp300.000, ending inventory Rp500.000.',
    blanks: [
      { id: 'diag-turnover', label: 'Inventory turnover', answer: 3, suffix: '×' },
      { id: 'diag-days', label: 'Days to sell', answer: 121.67, suffix: 'hari', tolerance: 0.1 },
    ],
    explanation: 'Average inventory = (300.000 + 500.000)/2 = 400.000. Turnover = 1.200.000/400.000 = 3×. Days to sell = 365/3 = 121,67 hari.'
  },
];

export const AKK201_QUIZ: QuizQuestion[] = [...AKK201_QUIZ_UTS, ...AKK201_QUIZ_UAS, ...AKK201_QUIZ_UAS_DIAGNOSTIC];
