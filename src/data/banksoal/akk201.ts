import type { BankSoal } from '../../types';

// Bank soal AKM I mengikuti struktur esai praktik AKBI, tetapi seluruh
// substansi/format output diturunkan dari Kieso IFRS Fifth Edition.
export const AKK201_BANK_UTS: BankSoal[] = [
  {
    type: 'case', scope: 'UTS · TM 1', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UTS-1. Analisis conceptual framework: klasifikasikan kebutuhan informasi dan keputusan pelaporan.',
    context: 'Seorang analis membutuhkan informasi yang dapat membantunya memperkirakan arus kas, mengonfirmasi penilaian sebelumnya, dan membandingkan kinerja dua entitas. Pada saat yang sama, perusahaan mempertimbangkan apakah pengungkapan tambahan layak disajikan jika biayanya tinggi.',
    data: [
      'Informasi A digunakan untuk memperkirakan future net cash inflows.',
      'Informasi B mengonfirmasi atau mengubah evaluasi tahun lalu.',
      'Informasi C memudahkan perbandingan antar-entitas.',
      'Informasi D lengkap, netral, dan bebas dari kesalahan.',
      'Pengungkapan E bermanfaat, tetapi cost penyajiannya diperkirakan lebih besar daripada manfaat pengguna.'
    ],
    instructions: ['Klasifikasikan A–E menggunakan istilah conceptual framework.', 'Jelaskan posisi relevance dan faithful representation sebagai fundamental qualities.', 'Berikan keputusan atas pengungkapan E berdasarkan cost constraint.'],
    outputFormat: ['Tabel: informasi/situasi, konsep IFRS, alasan.', 'Kesimpulan analitis 1 paragraf.'],
    rubric: ['Ketepatan klasifikasi konsep 50%.', 'Alasan akademik 30%.', 'Kejelasan penyajian 20%.'],
    answerGuide: 'A = predictive value dalam relevance; B = confirmatory value dalam relevance; C = comparability; D = faithful representation; E = cost constraint. Relevance dan faithful representation merupakan fundamental qualities. Pengungkapan E tidak wajib bila cost secara rasional melebihi benefit.'
  },
  {
    type: 'journal', scope: 'UTS · TM 2', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UTS-2. Jurnalkan transaksi terpilih Snyder Miniature Golf and Driving Range plc.',
    context: 'Snyder memulai usaha dan melakukan transaksi awal sebagaimana Exercise E2.17 Kieso.',
    data: ['Investasi kas untuk ordinary shares £60.000.', 'Akuisisi land £10.000, buildings £22.000, dan equipment £6.000 secara tunai.', 'Pembelian equipment kredit £2.500.', 'Penerimaan cash atas golf fees £1.200.', 'Pembayaran dividend £1.000 dan pelunasan utang £2.500.'],
    instructions: ['Buat general journal untuk seluruh transaksi.', 'Gunakan akun Service Revenue untuk penerimaan fees.', 'Pastikan jurnal seimbang per transaksi.'],
    outputFormat: ['General Journal: date/description, debit, credit.'],
    rubric: ['Ketepatan akun 45%.', 'Ketepatan nominal 40%.', 'Kerapian format jurnal 15%.'],
    answerGuide: 'Dr Cash 60.000/Cr Share Capital—Ordinary 60.000; Dr Land 10.000, Buildings 22.000, Equipment 6.000/Cr Cash 38.000; Dr Equipment 2.500/Cr Accounts Payable 2.500; Dr Cash 1.200/Cr Service Revenue 1.200; Dr Dividends 1.000/Cr Cash 1.000; Dr Accounts Payable 2.500/Cr Cash 2.500.'
  },
  {
    type: 'journal', scope: 'UTS · TM 3', difficulty: 'Komprehensif', estimatedTime: '30–35 menit',
    question: 'UTS-3. Susun adjusting entries Yazici Advertising A.Ş.',
    context: 'Pada akhir periode, Yazici harus membuat penyesuaian deferrals dan accruals sebelum laporan keuangan disiapkan.',
    data: ['Supplies used UM15.000.', 'Insurance expired UM500.', 'Depreciation expense UM400.', 'Unearned revenue earned UM4.000.', 'Accrued service revenue UM2.000.', 'Accrued interest UM500.', 'Accrued salaries and wages UM6.000.'],
    instructions: ['Buat seluruh adjusting entries.', 'Kelompokkan antara deferral dan accrual.', 'Sebutkan dampak umum bila masing-masing adjustment diabaikan.'],
    outputFormat: ['Jurnal penyesuaian.', 'Tabel klasifikasi deferral/accrual.', 'Catatan dampak omission.'],
    rubric: ['Jurnal dan nominal 55%.', 'Klasifikasi 20%.', 'Analisis dampak 15%.', 'Format 10%.'],
    answerGuide: 'Jurnal utama: Dr Supplies Expense/Cr Supplies 15.000; Dr Insurance Expense/Cr Prepaid Insurance 500; Dr Depreciation Expense/Cr Accumulated Depreciation—Equipment 400; Dr Unearned Service Revenue/Cr Service Revenue 4.000; Dr Accounts Receivable/Cr Service Revenue 2.000; Dr Interest Expense/Cr Interest Payable 500; Dr Salaries and Wages Expense/Cr Salaries and Wages Payable 6.000.'
  },
  {
    type: 'worksheet', scope: 'UTS · TM 3', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UTS-4. Lengkapi bagian terpilih ten-column worksheet Ciner Cabinets.',
    context: 'Ciner menggunakan worksheet untuk memindahkan saldo trial balance, penyesuaian, adjusted trial balance, income statement, dan statement of financial position.',
    data: ['Prepaid Insurance sebelum penyesuaian $900; expired insurance $360.', 'Allowance for Doubtful Accounts sebelum penyesuaian $2.000 kredit; adjustment $1.000 kredit.', 'Accumulated Depreciation—Equipment sebelum penyesuaian $12.000 kredit; depreciation $6.700.', 'Accrued Interest Receivable $800.', 'Accrued Property Taxes Payable $2.000.'],
    instructions: ['Masukkan adjustment.', 'Hitung adjusted balances.', 'Tempatkan akun hasil penyesuaian ke kolom laporan yang benar.'],
    outputFormat: ['Ten-column worksheet lima pasangan kolom.'],
    rubric: ['Adjustment 30%.', 'Adjusted trial balance 30%.', 'Alokasi laporan 25%.', 'Format 15%.'],
    answerGuide: 'Prepaid Insurance adjusted debit $540; Allowance adjusted credit $3.000; Accumulated Depreciation—Equipment adjusted credit $18.700; Interest Receivable debit $800; Property Taxes Payable credit $2.000. Expense adjustments masuk Income Statement; asset/liability balances masuk Statement of Financial Position.'
  },
  {
    type: 'journal', scope: 'UTS · TM 3', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UTS-5. Susun closing entries Yazici berdasarkan adjusted trial balance.',
    context: 'Setelah laporan dibuat, akun temporer Yazici harus ditutup.',
    data: ['Service Revenue UM106.000.', 'Salaries and Wages Expense UM46.000; Supplies Expense UM15.000; Rent Expense UM9.000.', 'Insurance Expense UM500; Interest Expense UM500; Depreciation Expense UM400; Bad Debt Expense UM1.600.', 'Total expenses UM73.000; Net income UM33.000; Dividends UM5.000.'],
    instructions: ['Tutup revenue ke Income Summary.', 'Tutup masing-masing expense account ke Income Summary.', 'Pindahkan net income ke Retained Earnings.', 'Tutup Dividends.'],
    outputFormat: ['Closing journal entries formal dengan rincian akun beban.'],
    rubric: ['Alur closing 40%.', 'Ketepatan rincian akun dan nominal 45%.', 'Kerapian 15%.'],
    answerGuide: 'Dr Service Revenue 106.000/Cr Income Summary 106.000; Dr Income Summary 73.000/Cr Salaries and Wages Expense 46.000, Supplies Expense 15.000, Rent Expense 9.000, Insurance Expense 500, Interest Expense 500, Depreciation Expense 400, Bad Debt Expense 1.600; Dr Income Summary 33.000/Cr Retained Earnings 33.000; Dr Retained Earnings 5.000/Cr Dividends 5.000.'
  },
  {
    type: 'report', scope: 'UTS · TM 4', difficulty: 'Komprehensif', estimatedTime: '40–50 menit',
    question: 'UTS-6. Susun Income Statement dan Statement of Comprehensive Income Braun Company.',
    context: 'Braun memiliki operasi berkelanjutan, discontinued operation, EPS, OCI, dan informasi perubahan estimated useful lives.',
    data: ['Sales revenue $2.700.000; cost of goods sold $1.150.000; selling and administrative expenses $480.000.', 'Other items: interest revenue $15.000; gain on extinguishment of debt $28.000; loss from abandonment of plant assets $45.000; loss from earthquake $30.000.', 'Gain on disposal of discontinued operation $50.000; tax rate 30%; ordinary shares outstanding 100.000.', 'Effect of change in estimated useful lives $35.000 adalah data change in estimate prospektif; unrealized holding loss on non-trading equity securities, net of tax, $12.000.'],
    instructions: ['Susun income statement dengan subtotal formal.', 'Hitung/laporkan EPS continuing operations, discontinued operations, dan net income.', 'Susun comprehensive income.', 'Jelaskan mengapa perubahan estimated useful lives tidak menjadi baris khusus.'],
    outputFormat: ['Income Statement.', 'EPS section.', 'Statement of Comprehensive Income.', 'Catatan accounting estimate.'],
    rubric: ['Format laporan 30%.', 'Angka/subtotal/EPS 45%.', 'Penjelasan estimate 15%.', 'Kerapian 10%.'],
    answerGuide: 'Gross profit $1.550.000; income from continuing operations $726.600; discontinued operation net $35.000; net income $761.600; EPS $7,27/$0,35/$7,62; comprehensive income $749.600. Change in estimate diperlakukan prospektif.'
  },
  {
    type: 'case', scope: 'UTS · TM 4', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UTS-7. Terapkan lima langkah revenue recognition pada kontrak bundel barang dan layanan.',
    context: 'Entitas menjual satu paket yang berisi perangkat dan layanan purnajual terpisah. Setiap komponen dapat memberi manfaat sendiri kepada pelanggan.',
    data: ['Satu kontrak telah disetujui pelanggan.', 'Perangkat dan layanan merupakan performance obligations terpisah.', 'Transaction price telah disepakati.', 'Perangkat diserahkan lebih dahulu, layanan dipenuhi sepanjang periode kontrak.'],
    instructions: ['Tuliskan lima langkah revenue recognition.', 'Tentukan kapan revenue perangkat dan layanan diakui.', 'Jelaskan alasan pemisahan performance obligations.'],
    outputFormat: ['Tabel langkah IFRS/relevansi kasus.', 'Kesimpulan pengakuan pendapatan.'],
    rubric: ['Lima langkah 40%.', 'Timing recognition 35%.', 'Penalaran 25%.'],
    answerGuide: 'Identifikasi kontrak; identifikasi dua performance obligations; tentukan transaction price; alokasikan berdasarkan basis yang tepat; akui pendapatan perangkat ketika control berpindah dan layanan seiring kewajiban dipenuhi.'
  },
  {
    type: 'case', scope: 'UTS · TM 4', difficulty: 'Menengah', estimatedTime: '20 menit',
    question: 'UTS-8. Analisis reporting treatment perubahan prinsip, perubahan estimasi, dan error.',
    context: 'Manajemen meminta klasifikasi tiga kejadian yang memengaruhi laporan.',
    data: ['Kejadian A: perubahan accounting principle.', 'Kejadian B: estimasi useful life aset berubah karena informasi baru.', 'Kejadian C: kesalahan material periode sebelumnya baru ditemukan.'],
    instructions: ['Klasifikasikan treatment retrospektif/prospektif.', 'Jelaskan penggunaan retained earnings.'],
    outputFormat: ['Tabel kejadian, treatment, dampak retained earnings.'],
    rubric: ['Ketepatan klasifikasi 60%.', 'Alasan 40%.'],
    answerGuide: 'A umumnya retrospective dengan penyesuaian retained earnings; B prospective tanpa prior-period adjustment; C correction of error melalui retained earnings untuk dampak periode lalu.'
  },
  {
    type: 'report', scope: 'UTS · TM 5', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UTS-9. Susun Statement of Financial Position Cassy Corporation.',
    context: 'Cassy harus menyajikan aset, equity, dan liabilities dengan current assets sebagai plug figure sesuai Practice Problem Chapter 4.',
    data: ['Saldo akhir 2024: Land $36.000; Buildings $144.000; Equipment $108.000; Accumulated depreciation—buildings $(36.000); Accumulated depreciation—equipment $(13.200); Patents $48.000; Current assets $282.000.', 'Equity/liabilities akhir 2024: Share capital—ordinary $216.000; Retained earnings $52.800; Bonds payable $120.000; Current liabilities $180.000.', 'Perubahan 2025: treasury shares dibeli $13.200; dividends dibayar $36.000; long-term investment dibeli $19.200; current assets selain cash naik $34.800; current liabilities naik $15.600; depreciation building/equipment $4.800/$10.800; net income $66.000; bonds issued $60.000; addition to building $32.400; patent amortization $3.000; equipment cost $24.000 dengan accumulated depreciation $9.600 dijual $12.000.'],
    instructions: ['Susun format classified statement of financial position.', 'Tampilkan total aset dan total equity and liabilities.', 'Berikan catatan tentang plug figure current assets.'],
    outputFormat: ['Statement of Financial Position formal.'],
    rubric: ['Klasifikasi 30%.', 'Subtotal/total 45%.', 'Catatan plug figure 15%.', 'Format 10%.'],
    answerGuide: 'Long-term investments $19.200; PPE $241.200; patents $45.000; current assets $355.800; total assets $661.200; equity $285.600; liabilities $375.600; total equity and liabilities $661.200.'
  },
  {
    type: 'report', scope: 'UTS · TM 6', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UTS-10. Susun Statement of Cash Flows Cassy Corporation dengan metode tidak langsung.',
    context: 'Gunakan data Cassy untuk menyusun arus kas operasi, investasi, dan pendanaan serta menjelaskan transaksi nonkas.',
    data: ['Net income $66.000; equipment dengan cost $24.000 dan accumulated depreciation $9.600 dijual tunai $12.000.', 'Depreciation building $4.800 dan equipment $10.800; patent amortization $3.000; current assets selain cash naik $34.800; current liabilities naik $15.600.', 'Long-term investment dibeli $19.200; addition to building $32.400; bonds issued $60.000; dividends dibayar $36.000; treasury shares dibeli $13.200.'],
    instructions: ['Susun tiga section arus kas.', 'Tampilkan net increase in cash.', 'Jelaskan perlakuan transaksi investasi/pendanaan nonkas apabila material.'],
    outputFormat: ['Statement of Cash Flows — indirect method.', 'Catatan noncash disclosure.'],
    rubric: ['Format tiga section 35%.', 'Angka akhir 40%.', 'Disclosure noncash 15%.', 'Kerapian 10%.'],
    answerGuide: 'Operating $67.800; Investing $(39.600); Financing $10.800; net increase $39.000. Transaksi nonkas diungkapkan terpisah, bukan dimasukkan ke badan arus kas.'
  },
  {
    type: 'calculation', scope: 'UTS · TM 7', difficulty: 'Komprehensif', estimatedTime: '40–50 menit',
    question: 'UTS-11. Kerjakan worksheet Time Value of Money Vesper Inc.',
    context: 'Vesper mengaplikasikan TVM pada security deposit, bond pricing, sinking fund, dan deferred pension annuity.',
    data: ['Security deposit $12.000; term 10 tahun; bunga majemuk tahunan 10%.', 'Bonds face value $3.000.000; stated rate 11%; term 15 tahun; pembayaran bunga semiannual; market rate 10%.', 'Sinking fund: setoran akhir tahun $90.000 selama 15 tahun dengan yield 10%.', 'Pension obligation: $800.000 per tahun setelah retirement; retirement 15 tahun lagi; 10 pembayaran; discount rate 8%.'],
    instructions: ['Identifikasi tipe TVM setiap kebutuhan.', 'Tampilkan nilai akhir per bagian.', 'Tulis formula ordinary annuity yang relevan.'],
    outputFormat: ['TVM worksheet: kebutuhan, formula/faktor, hasil.'],
    rubric: ['Pemilihan model TVM 30%.', 'Hasil akhir 45%.', 'Formula/format 15%.', 'Kerapian 10%.'],
    answerGuide: 'Gunakan FV/PV single sum dan ordinary/deferred annuity sesuai bagian. Hasil akhir mengikuti data: $31.125; $3.230.594; $2.859.523; $140.477; $1.692.228.'
  },
  {
    type: 'case', scope: 'UTS · TM 1–7', difficulty: 'Komprehensif', estimatedTime: '50–60 menit',
    question: 'UTS-12. Integrasikan journalizing, adjustment, presentation, cash-flow classification, dan TVM.',
    context: 'Tugas integratif ini menilai apakah mahasiswa mampu memilih format output yang benar untuk berbagai permasalahan financial accounting Pra-UTS.',
    data: ['Snyder: shareholders invest cash £60.000 for ordinary shares; land £10.000, buildings £22.000, dan equipment £6.000 diperoleh tunai; cash diterima untuk Service Revenue £1.200.', 'Yazici: saldo Supplies sebelum adjustment UM25.000; physical supplies on hand pada akhir periode UM10.000.', 'Cassy: long-term investment dibeli tunai $19.200; addition to building $32.400; equipment dijual tunai $12.000; bonds diterbitkan tunai $60.000; dividends dibayar $36.000; treasury shares diperoleh $13.200.', 'Vesper: security deposit $12.000 diinvestasikan selama 10 tahun pada bunga majemuk tahunan 10%; gunakan faktor FV single sum dari tabel TVM modul.'],
    instructions: ['Jurnalkan tiga transaksi Snyder.', 'Buat adjusting entry supplies Yazici.', 'Klasifikasikan transaksi Cassy sebagai investing atau financing activities dan hitung net cash tiap section berdasarkan data yang disediakan.', 'Hitung future value security deposit Vesper.', 'Jelaskan perbedaan output jurnal, klasifikasi arus kas, dan worksheet TVM.'],
    outputFormat: ['General journal Snyder.', 'Adjusting entry Yazici.', 'Partial Statement of Cash Flows Cassy — investing dan financing sections.', 'TVM worksheet Vesper.', 'Kesimpulan integratif.'],
    rubric: ['Ketepatan jurnal dan adjustment 25%.', 'Ketepatan cash-flow classification dan net cash 30%.', 'Ketepatan TVM 25%.', 'Format dan penalaran 20%.'],
    answerGuide: 'Snyder: Dr Cash/Cr Share Capital—Ordinary £60.000; Dr Land £10.000, Buildings £22.000, Equipment £6.000/Cr Cash £38.000; Dr Cash/Cr Service Revenue £1.200. Yazici: supplies used UM15.000 sehingga Dr Supplies Expense/Cr Supplies UM15.000. Cassy: investing = $12.000 − $19.200 − $32.400 = $(39.600); financing = $60.000 − $36.000 − $13.200 = $10.800. Vesper: FV security deposit = $31.125.'
  }
];

export const AKK201_BANK_UAS: BankSoal[] = [
  {
    type: 'journal', scope: 'UAS · TM 8', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UAS-1. Susun jurnal petty cash imprest system berdasarkan Appendix 6A.',
    context: 'Perusahaan membentuk petty cash fund, melakukan reimbursement, lalu mengurangi ukuran dana.',
    data: ['Pembentukan petty cash fund $300.', 'Reimbursement: Supplies Expense $42, Postage Expense $53, Miscellaneous Expense $76, Cash Over and Short $2; cash reimbursement $173.', 'Pengurangan dana petty cash $50.'],
    instructions: ['Buat jurnal pembentukan dana.', 'Buat jurnal reimbursement.', 'Buat jurnal pengurangan dana.'],
    outputFormat: ['General journal petty cash.'],
    rubric: ['Akun dan nominal 80%.', 'Format 20%.'],
    answerGuide: 'Dr Petty Cash 300/Cr Cash 300; Dr Supplies Expense 42, Postage Expense 53, Miscellaneous Expense 76, Cash Over and Short 2/Cr Cash 173; Dr Cash 50/Cr Petty Cash 50.'
  },
  {
    type: 'report', scope: 'UAS · TM 8', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UAS-2. Susun bank reconciliation dan jurnal sisi buku Nugget Mining Company.',
    context: 'Nugget harus merekonsiliasi saldo bank dan saldo buku sebelum cash disajikan.',
    data: ['Balance per bank $22.190; deposit in transit $3.680; bank error $175; outstanding checks $(5.001).', 'Balance per books $20.502; interest collected $600; recording error $180; service charge $(18); NSF check $(220).'],
    instructions: ['Susun rekonsiliasi dua sisi.', 'Tentukan correct cash balance.', 'Buat jurnal hanya untuk item sisi buku.', 'Jelaskan item sisi bank yang tidak dijurnal.'],
    outputFormat: ['Bank reconciliation.', 'Adjusting journal entries.'],
    rubric: ['Rekonsiliasi 50%.', 'Jurnal 35%.', 'Penjelasan 15%.'],
    answerGuide: 'Correct cash balance = $21.044 pada kedua sisi. Jurnal sisi buku mencakup interest collected dan correction of book error, service charge, serta NSF check; deposit in transit/outstanding checks/bank error tidak dijurnal oleh perusahaan.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 8', difficulty: 'Menengah', estimatedTime: '25–30 menit',
    question: 'UAS-2A. Drill rekonsiliasi bank BOC-style dan identifikasi jurnal penyesuaian.',
    context: 'Latihan ini mengikuti pola umum soal UAS tentang deposit in transit, outstanding checks, NSF check, dan bank service charge. Angka dibuat sebagai varian latihan, bukan sekadar hafalan soal.',
    data: ['Balance per bank statement Rp39.140.', 'Deposit in transit Rp5.000.', 'Outstanding checks Rp5.200.', 'Balance per books sebelum adjustment Rp39.410.', 'NSF check dikembalikan bank Rp450.', 'Bank service charge Rp20.'],
    instructions: ['Susun rekonsiliasi sisi bank.', 'Susun rekonsiliasi sisi buku.', 'Tentukan correct cash balance.', 'Buat jurnal penyesuaian sisi buku saja.', 'Jelaskan mengapa deposit in transit dan outstanding checks tidak dijurnal perusahaan.'],
    outputFormat: ['Bank reconciliation dua sisi.', 'Adjusting journal entries.', 'Penjelasan book-side vs bank-side items.'],
    rubric: ['Correct cash balance 35%.', 'Klasifikasi item 25%.', 'Jurnal penyesuaian 30%.', 'Penjelasan 10%.'],
    answerGuide: 'Sisi bank: Rp39.140 + Rp5.000 − Rp5.200 = Rp38.940. Sisi buku: Rp39.410 − Rp450 − Rp20 = Rp38.940. Jurnal: Dr Accounts Receivable Rp450; Dr Bank Service Charge Expense Rp20; Cr Cash Rp470. Deposit in transit dan outstanding checks sudah dicatat perusahaan sehingga tidak dijurnal lagi.'
  },
  {
    type: 'journal', scope: 'UAS · TM 8', difficulty: 'Menengah', estimatedTime: '15–20 menit',
    question: 'UAS-2B. Reimbursement petty cash dengan cash over and short.',
    context: 'Perusahaan memakai imprest petty cash system. Pada akhir periode, kas fisik dan bukti pengeluaran tidak sama persis dengan dana imprest.',
    data: ['Petty cash fund sebesar $400.', 'Cash on hand saat pemeriksaan $44.', 'Receipts/documents for miscellaneous expenses $364.'],
    instructions: ['Hitung total accounted for.', 'Tentukan apakah cash over atau cash short.', 'Hitung cash yang harus dibayarkan untuk replenishment.', 'Susun jurnal reimbursement.'],
    outputFormat: ['Perhitungan cash over/short.', 'Journal entry.'],
    rubric: ['Perhitungan 40%.', 'Akun jurnal 40%.', 'Format 20%.'],
    answerGuide: 'Receipts $364 + cash $44 = $408, sehingga cash over $8. Cash yang dibayar untuk replenishment = $400 − $44 = $356. Jurnal: Dr Miscellaneous Expense $364; Cr Cash Over and Short $8; Cr Cash $356.'
  },
  {
    type: 'journal', scope: 'UAS · TM 9', difficulty: 'Menengah', estimatedTime: '25–30 menit',
    question: 'UAS-3A. Cash discount gross method dan net method untuk accounts receivable.',
    context: 'Perusahaan menjual barang secara kredit dengan syarat 1/10, n/30. Mahasiswa harus membedakan pengakuan awal dan jurnal pelunasan menurut gross method serta net method.',
    data: ['Credit sales Rp300.000.', 'Credit term 1/10, n/30.', 'Skenario A: pelanggan membayar dalam periode diskon.', 'Skenario B: pelanggan membayar setelah periode diskon.'],
    instructions: ['Buat jurnal saat penjualan dengan gross method.', 'Buat jurnal penerimaan kas dalam periode diskon dengan gross method.', 'Buat jurnal saat penjualan dengan net method.', 'Buat jurnal penerimaan kas setelah periode diskon dengan net method.', 'Jelaskan akun Sales Discounts Forfeited.'],
    outputFormat: ['General journal per metode dan skenario.', 'Catatan konsep 1 paragraf.'],
    rubric: ['Gross method 30%.', 'Net method 35%.', 'Akun diskon 20%.', 'Penjelasan 15%.'],
    answerGuide: 'Gross sale: Dr A/R Rp300.000; Cr Sales Revenue Rp300.000. Gross payment dalam periode diskon: Dr Cash Rp297.000; Dr Sales Discount Rp3.000; Cr A/R Rp300.000. Net sale: Dr A/R Rp297.000; Cr Sales Revenue Rp297.000. Net payment terlambat: Dr Cash Rp300.000; Cr A/R Rp297.000; Cr Sales Discounts Forfeited Rp3.000.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 9', difficulty: 'Komprehensif', estimatedTime: '30–40 menit',
    question: 'UAS-3. Susun aging schedule dan adjustment allowance Wilson & Co.',
    context: 'Wilson menggunakan aging receivables untuk mengestimasi required ending allowance.',
    data: ['Under 30 days €345.000 at 0,8%; 30–60 days €115.000 at 4%; 61–90 days €18.000 at 15%; 91–120 days €14.000 at 20%; over 120 days €55.000 at 25%.', 'Existing credit balance in Allowance for Doubtful Accounts €800.'],
    instructions: ['Hitung allowance setiap aging category.', 'Hitung required ending allowance.', 'Hitung dan jurnal adjustment.'],
    outputFormat: ['Aging schedule.', 'Adjusting entry.'],
    rubric: ['Schedule 55%.', 'Jurnal 30%.', 'Format 15%.'],
    answerGuide: 'Required allowance = €26.610; adjustment = €25.810. Jurnal: Dr Bad Debt Expense €25.810; Cr Allowance for Doubtful Accounts €25.810.'
  },
  {
    type: 'journal', scope: 'UAS · TM 9', difficulty: 'Menengah', estimatedTime: '20 menit',
    question: 'UAS-4. Catat write-off dan recovery piutang Brown Furniture/Randall plc.',
    context: 'Brown menggunakan allowance method dan kemudian menerima kembali piutang yang telah dihapus.',
    data: ['Piutang Randall £1.000 dihapus pada 1 Maret 2026.', 'Piutang dipulihkan dan diterima kas pada 1 Juli 2026.'],
    instructions: ['Catat write-off.', 'Catat reinstatement saat recovery.', 'Catat penerimaan kas.', 'Jelaskan mengapa Bad Debt Expense tidak didebit saat write-off.'],
    outputFormat: ['Journal entries dan penjelasan singkat.'],
    rubric: ['Jurnal 70%.', 'Penjelasan metode allowance 30%.'],
    answerGuide: 'Write-off: Dr Allowance/Cr A/R—Randall £1.000. Reinstatement: Dr A/R—Randall/Cr Allowance £1.000. Collection: Dr Cash/Cr A/R—Randall £1.000. Expense telah diestimasi sebelumnya.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 9', difficulty: 'Komprehensif', estimatedTime: '30–40 menit',
    question: 'UAS-5. Susun amortization schedule zero-interest-bearing note Jeremiah Company.',
    context: 'Jeremiah menerima note dengan face value yang melebihi present value awal sehingga discount diamortisasi menggunakan effective interest.',
    data: ['Face value note $10.000; present value pada pengakuan awal $7.721,80; effective-interest rate 9%.', 'Note berjangka tiga tahun dan tidak memberikan pembayaran kas sebelum maturity.'],
    instructions: ['Buat schedule carrying amount dan interest revenue.', 'Buat jurnal recognition awal dan interest revenue tahun pertama.'],
    outputFormat: ['Amortization schedule.', 'Journal entries.'],
    rubric: ['Schedule 55%.', 'Jurnal 30%.', 'Format 15%.'],
    answerGuide: 'Interest revenue tahun pertama $694,96; carrying amount akhir tahun pertama $8.416,76; akhir tahun kedua $9.174,27; maturity $10.000. Recognition awal berdasarkan PV dan discount diamortisasi melalui interest revenue.'
  },
  {
    type: 'journal', scope: 'UAS · TM 9', difficulty: 'Komprehensif', estimatedTime: '25–30 menit',
    question: 'UAS-6. Analisis dan jurnal transfer receivables Slamar Ltd.',
    context: 'Slamar menghadapi factoring tanpa guarantee, assignment receivables sebagai borrowing, dan penyesuaian allowance.',
    data: ['Factoring receivables ¥50.000 dengan charge 11%.', 'Assignment untuk loan ¥75.000 dengan charge 9%.', 'Gross receivables ¥338.000; required allowance 6%; saldo kredit awal allowance ¥4.240.'],
    instructions: ['Tentukan apakah sale atau secured borrowing.', 'Buat jurnal masing-masing situasi.', 'Hitung adjustment allowance.'],
    outputFormat: ['Tabel analisis transfer.', 'Journal entries.'],
    rubric: ['Klasifikasi 25%.', 'Jurnal 50%.', 'Allowance adjustment 25%.'],
    answerGuide: 'Factoring: Dr Cash ¥44.500; Dr Loss on Sale ¥5.500; Cr A/R ¥50.000. Borrowing: Dr Cash ¥68.250; Dr Interest Expense ¥6.750; Cr Notes Payable ¥75.000. Required allowance = ¥20.280, adjustment = ¥16.040.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 10', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UAS-7. Tentukan proper ending inventory dan correcting entries Werth Company.',
    context: 'Werth menggunakan periodic inventory method dan memiliki sejumlah masalah ownership dan pencatatan akhir periode.',
    data: ['Physical count $234.890.', 'Browser FOB shipping point $10.420; Minsky $8.540; Jackel consignment $10.438; Sims FOB shipping point sale $11.520; returned goods baik $1.500.', 'Bubbey sale terlalu dini $12.800; Dudley purchase belum dicatat $15.630; customer return credit belum dicatat $2.600.'],
    instructions: ['Susun corrected ending inventory schedule.', 'Buat correcting entries akun terkait.', 'Jelaskan hubungan ownership dengan saldo inventory.'],
    outputFormat: ['Inventory schedule.', 'Correcting journal entries.', 'Kesimpulan ownership.'],
    rubric: ['Schedule 45%.', 'Jurnal 35%.', 'Analisis 20%.'],
    answerGuide: 'Proper ending inventory $233.392. Correcting entries: Bubbey Dr Sales Revenue/Cr A/R $12.800; Dudley Dr Purchases/Cr A/P $15.630; return Dr Sales Returns and Allowances/Cr A/R $2.600.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 11', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UAS-8. Susun cost-flow comparison Call-Mart SpA.',
    context: 'Call-Mart memiliki harga pembelian yang meningkat dan memerlukan perbandingan specific identification, FIFO, weighted-average, dan moving-average.',
    data: ['March 2: purchase 2.000 units @ €4,00; March 15: purchase 6.000 units @ €4,40; March 19: sold/issued 4.000 units; March 30: purchase 2.000 units @ €4,75.', 'Goods available for sale €43.900; ending inventory quantity 6.000 units.', 'Untuk specific identification, unit tersisa terdiri dari 1.000 unit pembelian March 2, 3.000 unit pembelian March 15, dan 2.000 unit pembelian March 30.'],
    instructions: ['Susun tabel perbandingan ending inventory dan COGS.', 'Analisis dampak harga meningkat.', 'Jelaskan kapan specific identification digunakan.'],
    outputFormat: ['Cost-flow comparison table.', 'Interpretasi metode.'],
    rubric: ['Tabel angka 50%.', 'Analisis 30%.', 'Specific identification 20%.'],
    answerGuide: 'Dalam ilustrasi harga meningkat, FIFO menghasilkan ending inventory tertinggi dan COGS terendah. Specific identification dipakai bila unit dapat diidentifikasi secara khusus; IFRS tidak mengizinkan LIFO.'
  },
  {
    type: 'case', scope: 'UAS · TM 11', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UAS-9. Analisis inventory errors dan abnormal inventory costs.',
    context: 'Mahasiswa harus membedakan error kuantitas inventory dari cost yang tidak boleh dikapitalisasi.',
    data: ['Ending inventory understated.', 'Ending inventory overstated.', 'Normal transportation untuk membawa inventory siap dijual.', 'Abnormal freight, handling, dan wasted materials.'],
    instructions: ['Tentukan dampak error pada COGS dan net income.', 'Klasifikasikan normal vs abnormal costs.', 'Jelaskan perlakuan abnormal cost.'],
    outputFormat: ['Tabel kondisi dan accounting effect.'],
    rubric: ['Inventory error 50%.', 'Cost classification 35%.', 'Alasan 15%.'],
    answerGuide: 'Understated ending inventory menghasilkan COGS overstated dan net income understated; overstated sebaliknya. Normal acquisition transportation dapat menjadi inventory cost, sedangkan abnormal freight/handling/waste menjadi period expense.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 12', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UAS-10. Terapkan LCNRV dan jurnal write-down/recovery.',
    context: 'Gunakan Mander, Jinn-Feng, dan Ricardo untuk menunjukkan computation, basis penerapan, serta jurnal allowance method.',
    data: ['Mander: cost €950; estimated selling price €1.000; cost to complete €50; cost to sell €200.', 'Jinn-Feng frozen group: Spinach cost ¥80.000 / NRV ¥120.000; Carrots cost ¥100.000 / NRV ¥110.000; Cut beans cost ¥50.000 / NRV ¥40.000.', 'Jinn-Feng canned group: Peas cost ¥90.000 / NRV ¥72.000; Mixed vegetables cost ¥95.000 / NRV ¥92.000.', 'Ricardo: ending inventory at cost €82.000; ending inventory at NRV €70.000; pada periode berikutnya NRV naik menjadi €74.000; gunakan allowance method.'],
    instructions: ['Hitung NRV dan loss Mander.', 'Bandingkan tiga basis Jinn-Feng.', 'Buat jurnal Ricardo.'],
    outputFormat: ['LCNRV computation.', 'Comparison table.', 'Journal entries.'],
    rubric: ['Perhitungan 40%.', 'Perbandingan basis 25%.', 'Jurnal 25%.', 'Format 10%.'],
    answerGuide: 'Mander NRV €750 dan loss €200. Jinn-Feng item/group/total = ¥384.000/¥394.000/¥415.000. Ricardo: Dr Loss/Cr Allowance €12.000; Dr Allowance/Cr Recovery €4.000.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 13', difficulty: 'Komprehensif', estimatedTime: '40–50 menit',
    question: 'UAS-11. Kerjakan gross profit method dan retail inventory method.',
    context: 'Cetus, Debenhams, dan In-Fusion menunjukkan tiga kebutuhan estimasi/pengukuran inventory.',
    data: ['Cetus: beginning inventory at cost €60.000; purchases at cost €200.000; sales at selling price €280.000; estimated gross profit rate 30% dari sales.', 'Debenhams: beginning inventory cost £14.000 dan retail £20.000; purchases cost £63.000 dan retail £90.000; sales at retail £85.000.', 'In-Fusion: beginning inventory cost €500 dan retail €1.000; purchases net cost €20.000 dan retail €35.000; markups €3.000; markup cancellations €1.000; markdowns €2.500; markdown cancellations €2.000; net sales €25.000.'],
    instructions: ['Buat schedule Cetus.', 'Buat retail schedule Debenhams.', 'Jelaskan perbedaan conventional retail In-Fusion terkait markdowns.'],
    outputFormat: ['Tiga worksheet terpisah.', 'Penjelasan metode.'],
    rubric: ['Cetus 30%.', 'Debenhams 30%.', 'In-Fusion 30%.', 'Kerapian 10%.'],
    answerGuide: 'Cetus goods available €260.000, estimated COGS €196.000, ending €64.000. Debenhams ratio 70%, ending cost £17.500. In-Fusion memasukkan net markups tetapi mengecualikan markdowns dalam denominator ratio; approximate LCNRV €6.737,50.'
  },
  {
    type: 'case', scope: 'UAS · TM 8–14', difficulty: 'Komprehensif', estimatedTime: '50–60 menit',
    question: 'UAS-12. Integrasikan cash, receivables, dan inventories dalam paket review Norwood-linked.',
    context: 'Paket akhir meminta mahasiswa menggabungkan ketelitian rekonsiliasi, valuation receivables, ownership inventory, LCNRV, dan analisis turnover.',
    data: ['Nugget: balance per bank $22.190; deposit in transit $3.680; bank error $175; outstanding checks $(5.001); balance per books $20.502; interest collected $600; recording error $180; service charge $(18); NSF check $(220).', 'Wilson: under 30 days €345.000 at 0,8%; 30–60 days €115.000 at 4%; 61–90 days €18.000 at 15%; 91–120 days €14.000 at 20%; over 120 days €55.000 at 25%; existing credit balance in allowance €800.', 'Werth: physical inventory count $234.890; add Browser FOB shipping point $10.420; add Minsky $8.540; deduct Jackel consignment $10.438; deduct Sims FOB shipping point sale $11.520; add returned goods in good condition $1.500.', 'Norwood: beginning inventory $1.026.000; ending inventory before adjustments $1.007.000; COGS before adjustments $11.776.000; consigned goods excluded $22.000; goods in transit FOB destination $25.000; inventory item cost $112.000 dengan NRV $100.800.'],
    instructions: ['Susun correct cash balance Nugget dan tentukan item jurnal sisi buku.', 'Hitung required allowance dan adjustment Wilson.', 'Hitung proper ending inventory Werth.', 'Hitung adjusted ending inventory, adjusted COGS, dan inventory turnover Norwood.', 'Jelaskan risiko salah klasifikasi atau salah pengukuran pada cash, receivables, dan inventory.'],
    outputFormat: ['Tabel integrasi hasil per kasus.', 'Ringkasan jurnal/adjustment yang diperlukan.', 'Analisis akhir 3–4 paragraf.'],
    rubric: ['Hasil utama 45%.', 'Integrasi konsep dan jurnal/adjustment 30%.', 'Analisis risiko 15%.', 'Format 10%.'],
    answerGuide: 'Nugget: correct cash balance $21.044; jurnal sisi buku menyesuaikan interest collected, recording error, service charge, dan NSF. Wilson: required allowance €26.610 dan adjustment €25.810. Werth: proper ending inventory $233.392. Norwood: LCNRV loss $11.200; adjusted ending inventory $1.042.800; adjusted COGS $11.740.200; turnover 11,3 kali. Kesalahan cash memerlukan reconciliation/journal; receivables menuntut allowance atau amortized cost; inventory menuntut ownership, cost flow, LCNRV, dan analysis.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 10', difficulty: 'Menengah', estimatedTime: '25–30 menit',
    question: 'UAS-13. Klasifikasikan goods included in inventory dan inventoriable cost PT Lumin.',
    context: 'Latihan ini menutup gap antara ownership barang dan kapitalisasi biaya inventory.',
    data: ['Barang dibeli FOB shipping point senilai Rp42.000 sudah dikirim 29 Desember tetapi baru diterima 3 Januari.', 'Barang dijual FOB destination senilai cost Rp31.000 masih dalam perjalanan ke pelanggan pada 31 Desember.', 'Barang konsinyasi milik PT Lumin di gudang consignee senilai Rp18.000 belum terjual.', 'Invoice price barang dagang Rp120.000; purchase return Rp5.000; purchase discount Rp2.400; freight-in normal Rp7.500; normal handling Rp3.000; abnormal storage Rp1.200; delivery to customers Rp4.000.'],
    instructions: ['Tentukan barang yang masuk inventory PT Lumin pada 31 Desember.', 'Hitung inventoriable cost pembelian.', 'Pisahkan period expense.', 'Jelaskan alasan berdasarkan ownership dan normality of cost.'],
    outputFormat: ['Tabel ownership termasuk subtotal barang yang masuk inventory PT Lumin.', 'Schedule inventoriable cost.', 'Kesimpulan 1 paragraf.'],
    rubric: ['Ownership 35%.', 'Perhitungan cost 35%.', 'Klasifikasi period expense 20%.', 'Alasan 10%.'],
    answerGuide: 'Barang yang masuk inventory PT Lumin: FOB shipping point purchase Rp42.000, FOB destination sale in transit Rp31.000, dan consigned goods Rp18.000; subtotal ownership inventory = Rp91.000. Inventoriable cost pembelian = Rp120.000 − Rp5.000 − Rp2.400 + Rp7.500 + Rp3.000 = Rp123.100. Abnormal storage Rp1.200 dan delivery to customers Rp4.000 menjadi period expense.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 11', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UAS-14. Bandingkan FIFO, weighted-average periodic, dan moving-average perpetual PT Lumin.',
    context: 'PT Lumin memiliki pembelian dengan harga meningkat dan satu transaksi penjualan di tengah periode.',
    data: ['Beginning inventory 100 unit @ Rp10.', 'Purchase pertama 200 unit @ Rp12.', 'Sale 180 unit.', 'Purchase kedua 100 unit @ Rp14.', 'Total cost available Rp4.800; total units available 400; ending units 220.'],
    instructions: ['Hitung ending inventory dan COGS FIFO.', 'Hitung ending inventory dan COGS weighted-average periodic.', 'Hitung ending inventory dan COGS moving-average perpetual.', 'Jelaskan mengapa hasil weighted-average periodic berbeda dari moving-average perpetual.'],
    outputFormat: ['Cost-flow comparison table.', 'Perhitungan pendukung.', 'Penjelasan metode 1 paragraf.'],
    rubric: ['FIFO 25%.', 'Weighted-average periodic 25%.', 'Moving-average perpetual 30%.', 'Penjelasan 20%.'],
    answerGuide: 'FIFO: ending inventory Rp2.840 dan COGS Rp1.960. Weighted-average periodic: average Rp12, ending Rp2.640 dan COGS Rp2.160. Moving-average perpetual: COGS Rp2.040 dan ending Rp2.760 karena average diperbarui setelah purchase pertama sebelum sale.'
  },
  {
    type: 'case', scope: 'UAS · TM 11', difficulty: 'Menengah', estimatedTime: '20–25 menit',
    question: 'UAS-15. Analisis dampak dua tahun dari inventory error.',
    context: 'Kesalahan ending inventory satu periode akan menjadi kesalahan beginning inventory periode berikutnya bila tidak dikoreksi langsung.',
    data: ['Skenario A: ending inventory 2025 overstated Rp18.000.', 'Skenario B: ending inventory 2025 understated Rp12.000.', 'Asumsikan tidak ada koreksi retrospektif dan error berbalik melalui physical count normal tahun 2026.'],
    instructions: ['Tentukan dampak pada COGS dan net income 2025.', 'Tentukan dampak pada COGS dan net income 2026.', 'Jelaskan mengapa total dampak dua tahun menjadi nol apabila tidak ada error lanjutan.'],
    outputFormat: ['Tabel dua skenario dan dua tahun.', 'Penjelasan ringkas.'],
    rubric: ['Dampak 2025 35%.', 'Dampak 2026 35%.', 'Penjelasan reversal 20%.', 'Format 10%.'],
    answerGuide: 'Skenario A: net income 2025 overstated Rp18.000 dan 2026 understated Rp18.000. Skenario B: net income 2025 understated Rp12.000 dan 2026 overstated Rp12.000. Error berbalik karena ending inventory tahun pertama menjadi beginning inventory tahun berikutnya.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 12', difficulty: 'Menengah', estimatedTime: '25–30 menit',
    question: 'UAS-16. Latihan cepat LCNRV per unit dan jurnal write-down per unit.',
    context: 'Soal UAS sering menguji perbedaan NRV dan LCNRV. Mahasiswa harus menghitung NRV terlebih dahulu, lalu membandingkannya dengan cost.',
    data: ['Produk Z: cost Rp150; selling price Rp190; cost to complete Rp20; cost to sell Rp11.', 'Produk ALPHA: cost Rp85; selling price Rp97; cost to complete Rp8; cost to sell Rp6.', 'Produk 2005WSC: cost Rp18; selling price Rp25; cost to complete Rp4; cost to sell Rp6.', 'Asumsikan perusahaan menggunakan loss method dengan allowance account jika terjadi write-down. Data tidak memberikan quantity, sehingga jurnal dibuat per unit; jika quantity tersedia, loss per unit dikalikan jumlah unit.'],
    instructions: ['Hitung NRV masing-masing produk.', 'Tentukan carrying amount menurut LCNRV.', 'Hitung loss per unit jika ada.', 'Buat jurnal umum per unit untuk produk yang mengalami write-down; jika soal memberi quantity, kalikan loss per unit dengan jumlah unit. Gunakan akun Loss Due to Decline of Inventory to NRV dan Allowance to Reduce Inventory to NRV.'],
    outputFormat: ['Tabel cost, NRV, carrying amount, dan loss per unit.', 'Jurnal ringkas untuk item yang turun nilai.'],
    rubric: ['NRV 30%.', 'LCNRV/carrying amount 30%.', 'Jurnal 25%.', 'Penjelasan 15%.'],
    answerGuide: 'Produk Z: NRV Rp159, carrying amount Rp150, tidak ada write-down. ALPHA: NRV Rp83, carrying amount Rp83, loss Rp2. 2005WSC: NRV Rp15, carrying amount Rp15, loss Rp3. Jurnal loss method per unit untuk item yang turun: ALPHA Dr Loss Due to Decline of Inventory to NRV Rp2; Cr Allowance to Reduce Inventory to NRV Rp2. 2005WSC Dr Loss Due to Decline of Inventory to NRV Rp3; Cr Allowance to Reduce Inventory to NRV Rp3. Jika quantity diberikan, gunakan total loss = loss per unit × quantity.'
  },
  {
    type: 'worksheet', scope: 'UAS · TM 13', difficulty: 'Menengah', estimatedTime: '25–30 menit',
    question: 'UAS-17. Gross profit method dan konversi markup.',
    context: 'Latihan ini menggabungkan pola soal gross profit method dan pertanyaan markup on cost versus markup on selling price.',
    data: ['Glaus Inc.: beginning inventory Rp800.000; purchases Rp1.600.000; sales Rp2.000.000; gross profit rate 25% dari sales.', 'Pertanyaan markup: markup 40% atas cost.'],
    instructions: ['Hitung goods available for sale Glaus.', 'Hitung gross profit dan estimated COGS.', 'Hitung estimated ending inventory.', 'Konversikan markup 40% on cost menjadi markup on selling price.'],
    outputFormat: ['Schedule gross profit method.', 'Perhitungan markup conversion.'],
    rubric: ['Schedule Glaus 65%.', 'Markup conversion 25%.', 'Kerapian 10%.'],
    answerGuide: 'Goods available = Rp2.400.000. Gross profit = 25% × Rp2.000.000 = Rp500.000. Estimated COGS = Rp1.500.000. Ending inventory = Rp900.000. Jika cost = 100, markup = 40, selling price = 140, maka markup on selling price = 40/140 = 28,57% ≈ 29%.'
  },
  {
    type: 'case', scope: 'UAS · TM 13', difficulty: 'Komprehensif', estimatedTime: '35–45 menit',
    question: 'UAS-18. Audit retail inventory worksheet: cost method versus conventional LCNRV.',
    context: 'Mahasiswa diminta membaca retail worksheet dan mengidentifikasi kesalahan umum: memasukkan markdown ke denominator conventional retail method.',
    data: ['Beginning inventory: cost €500, retail €1.000.', 'Purchases net: cost €20.000, retail €35.000.', 'Markups €3.000; markup cancellations €1.000.', 'Markdowns €2.500; markdown cancellations €2.000.', 'Net sales €25.000.'],
    instructions: ['Hitung net markup dan net markdown.', 'Hitung cost-to-retail ratio menurut conventional retail method.', 'Hitung ending inventory at retail.', 'Hitung ending inventory at approximate LCNRV.', 'Jelaskan apa yang berubah jika markdown ikut dimasukkan ke denominator seperti cost method.'],
    outputFormat: ['Retail inventory worksheet.', 'Audit note 1 paragraf.'],
    rubric: ['Ratio conventional 35%.', 'Ending inventory 30%.', 'Audit note 25%.', 'Format 10%.'],
    answerGuide: 'Merchandise before markups: cost €20.500 dan retail €36.000. Net markup €2.000 sehingga denominator ratio conventional = €38.000. Ratio = €20.500/€38.000 = 53,9%. Net markdown €500. Ending retail = €38.000 − €500 − €25.000 = €12.500. Ending approximate LCNRV = €12.500 × 53,9% = €6.737,50. Jika net markdown dimasukkan ke denominator, pendekatan bergeser ke cost method dan tidak lagi mencerminkan conventional LCNRV.'
  },

];

export const AKK201_BANK: BankSoal[] = [...AKK201_BANK_UTS, ...AKK201_BANK_UAS];
