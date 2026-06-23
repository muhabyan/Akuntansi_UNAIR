// =============================================================
// Simulasi UAS AKM I — Website Mode 2 Jam (Batch 10)
// 80 soal berbasis pola UAS website TM 8–14: kas, piutang, notes, transfer receivables,
// inventory cost-basis, LCNRV, gross profit method, retail inventory method, dan analysis.
// =============================================================
import type { QuizQuestion } from '../../types';

export const AKK201_QUIZ_UAS_SIMULATOR: QuizQuestion[] = [
  {
    "topic": "Cash & Cash Equivalents",
    "skill": "Klasifikasi item kas",
    "difficulty": "basic",
    "q": "Manakah item yang tidak boleh diklasifikasikan sebagai kas untuk tujuan pelaporan keuangan?",
    "options": [
      "Money order dan certified check",
      "Coin, currency, dan dana yang tersedia di bank",
      "Postdated check dari pelanggan",
      "Petty cash fund dan change fund"
    ],
    "answer": 2,
    "explanation": "Postdated check belum dapat dicairkan sampai tanggal yang tertera sehingga lebih tepat diperlakukan sebagai receivable, bukan cash."
  },
  {
    "topic": "Cash & Cash Equivalents",
    "skill": "Cash equivalent original maturity",
    "difficulty": "basic",
    "q": "Treasury bills dibeli 1 Desember 20X1 dan jatuh tempo 31 Maret 20X2. Perlakuan yang paling tepat adalah...",
    "options": [
      "Cash equivalent karena surat berharga pemerintah selalu setara kas",
      "Cash equivalent karena jatuh tempo kurang dari satu tahun",
      "Bukan cash equivalent karena original maturity dari tanggal pembelian lebih dari tiga bulan",
      "Inventory karena akan dijual kembali"
    ],
    "answer": 2,
    "explanation": "Cash equivalent mensyaratkan investasi sangat likuid dengan original maturity tiga bulan atau kurang dari tanggal akuisisi."
  },
  {
    "topic": "Cash & Cash Equivalents",
    "skill": "Restricted cash classification",
    "difficulty": "basic",
    "q": "Cash restricted for plant expansion umumnya dilaporkan sebagai...",
    "options": [
      "Current liabilities",
      "Current assets",
      "Equity",
      "Non-current assets"
    ],
    "answer": 3,
    "explanation": "Pembatasan untuk ekspansi pabrik bersifat jangka panjang sehingga umumnya disajikan sebagai non-current asset."
  },
  {
    "topic": "Cash & Cash Equivalents",
    "skill": "Compensating balance",
    "difficulty": "basic",
    "q": "Compensating balance paling tepat didefinisikan sebagai...",
    "options": [
      "Saldo tabungan bebas yang dapat ditarik kapan saja",
      "Saldo minimum yang harus dipertahankan di bank sebagai syarat pinjaman",
      "Investasi jangka pendek yang selalu setara kas",
      "Rekening margin untuk transaksi saham"
    ],
    "answer": 1,
    "explanation": "Compensating balance adalah saldo minimum yang dibatasi penggunaannya karena perjanjian kredit atau pinjaman."
  },
  {
    "topic": "Cash & Cash Equivalents",
    "skill": "Bank overdraft presentation",
    "difficulty": "medium",
    "q": "Bank overdraft yang tidak memiliki hak saling hapus dengan rekening lain di bank yang sama biasanya disajikan sebagai...",
    "options": [
      "Cash and cash equivalents",
      "Current liabilities",
      "Non-current assets",
      "Other comprehensive income"
    ],
    "answer": 1,
    "explanation": "Bank overdraft umumnya dilaporkan sebagai current liability kecuali terdapat hak offset yang memenuhi syarat dengan saldo positif di bank yang sama."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "Item rekonsiliasi yang dijurnal perusahaan",
    "difficulty": "medium",
    "q": "Dalam rekonsiliasi bank, item mana yang biasanya memerlukan jurnal penyesuaian oleh perusahaan?",
    "options": [
      "Deposit in transit dan outstanding checks",
      "NSF checks dan bank service charge",
      "Outstanding checks dan saldo rekening koran",
      "Deposit in transit dan saldo rekening koran"
    ],
    "answer": 1,
    "explanation": "NSF checks dan service charge baru diketahui dari bank statement sehingga perlu dicatat di pembukuan perusahaan."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "Adjusted bank balance",
    "difficulty": "medium",
    "q": "BOC Co. memiliki saldo bank Rp39.140, deposit in transit Rp5.000, dan outstanding checks Rp5.200. Adjusted bank balance adalah...",
    "options": [
      "Rp39.370",
      "Rp38.940",
      "Rp38.470",
      "Rp44.140"
    ],
    "answer": 1,
    "explanation": "Adjusted bank balance = 39.140 + 5.000 − 5.200 = 38.940."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "Book-side adjustment",
    "difficulty": "medium",
    "q": "Pada BOC Co., NSF checks Rp450 dan bank service charge Rp20 ditemukan dari rekening koran. Dampak pada saldo kas buku adalah...",
    "options": [
      "Menambah Rp470",
      "Mengurangi Rp470",
      "Menambah Rp430",
      "Tidak ada pengaruh karena hanya item bank side"
    ],
    "answer": 1,
    "explanation": "NSF checks dan service charge mengurangi saldo kas menurut pembukuan sebesar 450 + 20 = 470."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "Adjusted cash balance",
    "difficulty": "medium",
    "q": "BOD Co. memiliki saldo per bank Rp30.000, deposit in transit Rp5.400, dan outstanding checks Rp4.900. Saldo kas yang benar adalah...",
    "options": [
      "Rp30.500",
      "Rp31.750",
      "Rp35.400",
      "Rp29.250"
    ],
    "answer": 0,
    "explanation": "Adjusted cash balance dari sisi bank = 30.000 + 5.400 − 4.900 = 30.500."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "Bank collection journal",
    "difficulty": "medium",
    "q": "Jika bank menagih notes receivable pelanggan sebesar Rp1.250 untuk perusahaan, jurnal perusahaan yang tepat adalah...",
    "options": [
      "Debit Notes Receivable; Kredit Cash",
      "Debit Cash; Kredit Notes Receivable dan/atau Interest Revenue",
      "Debit Cash; Kredit Deposit in Transit",
      "Debit Accounts Payable; Kredit Cash"
    ],
    "answer": 1,
    "explanation": "Penagihan oleh bank menambah kas perusahaan dan mengurangi notes receivable; bila ada bunga, bagian bunga dikreditkan ke interest revenue."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "Error correction on books",
    "difficulty": "advanced",
    "q": "Saldo kas buku DEF Co. Rp45.000. Bank menagih piutang Rp940, NSF check Rp320, cek pelanggan Rp450 salah dicatat Rp540, dan cek yang ditulis Rp79 salah dicatat Rp97. Correct cash balance adalah...",
    "options": [
      "Rp47.848",
      "Rp45.548",
      "Rp45.728",
      "Rp45.512"
    ],
    "answer": 1,
    "explanation": "Correct cash = 45.000 + 940 − 320 − 90 + 18 = 45.548."
  },
  {
    "topic": "Petty Cash",
    "skill": "Petty cash responsibility",
    "difficulty": "basic",
    "q": "Siapa yang bertanggung jawab setiap saat atas jumlah dana kas kecil?",
    "options": [
      "General office manager",
      "Petty cash custodian",
      "President",
      "General cashier"
    ],
    "answer": 1,
    "explanation": "Petty cash custodian bertanggung jawab menjaga kas dan bukti pengeluaran kas kecil."
  },
  {
    "topic": "Petty Cash",
    "skill": "Petty cash replenishment credit",
    "difficulty": "medium",
    "q": "Dana kas kecil dibentuk Rp250. Saat replenishment, kas tersisa Rp150 dan voucher pengeluaran Rp95. Kredit dalam jurnal replenishment adalah...",
    "options": [
      "Cash Rp95 dan Cash Over and Short Rp5",
      "Cash Rp100",
      "Petty Cash Rp100",
      "Petty Cash Rp75"
    ],
    "answer": 1,
    "explanation": "Dana harus kembali ke Rp250, sehingga kas yang dikeluarkan untuk replenishment adalah 250 − 150 = 100."
  },
  {
    "topic": "Petty Cash",
    "skill": "Cash over and short",
    "difficulty": "medium",
    "q": "Dengan data petty cash Rp250, kas tersisa Rp150, dan voucher Rp95, kondisi yang terjadi adalah...",
    "options": [
      "Cash over Rp5",
      "Cash short Rp5",
      "Tidak ada selisih",
      "Cash short Rp100"
    ],
    "answer": 1,
    "explanation": "Kas + voucher = 150 + 95 = 245, lebih rendah Rp5 dari dana kas kecil Rp250; selisih dicatat sebagai cash short."
  },
  {
    "topic": "Receivables",
    "skill": "Allowance method",
    "difficulty": "basic",
    "q": "Beban piutang tak tertagih diestimasi pada akhir periode saat laporan keuangan disusun. Metode yang digunakan adalah...",
    "options": [
      "Direct write-off method",
      "Gross method",
      "Net method",
      "Allowance method"
    ],
    "answer": 3,
    "explanation": "Allowance method mengakui bad debt expense melalui estimasi agar matching dengan periode penjualan."
  },
  {
    "topic": "Receivables",
    "skill": "Direct write-off method",
    "difficulty": "basic",
    "q": "Pernyataan yang benar mengenai direct write-off method adalah...",
    "options": [
      "Allowance dicatat saat pelanggan benar-benar tidak tertagih",
      "Bad debt expense dicatat saat terdapat bukti piutang tidak dapat ditagih",
      "Saat write-off, debit Allowance dan kredit Sales",
      "Metode ini ideal untuk jumlah piutang besar dan material"
    ],
    "answer": 1,
    "explanation": "Direct write-off mencatat beban ketika piutang tertentu dipastikan tidak tertagih; metode ini biasanya tidak ideal untuk piutang material."
  },
  {
    "topic": "Receivables",
    "skill": "Cash realizable value",
    "difficulty": "basic",
    "q": "Cash realizable value dari accounts receivable dihitung sebagai...",
    "options": [
      "Accounts receivable + allowance for doubtful accounts",
      "Accounts receivable − allowance for doubtful accounts",
      "Sales revenue − sales returns",
      "Cash sales + credit sales"
    ],
    "answer": 1,
    "explanation": "Cash realizable value adalah nilai piutang yang diperkirakan dapat direalisasi menjadi kas, yaitu piutang bruto dikurangi allowance."
  },
  {
    "topic": "Receivables",
    "skill": "Percentage of receivables method",
    "difficulty": "medium",
    "q": "Dalam percentage-of-receivables method, persentase diterapkan untuk menentukan...",
    "options": [
      "Bad debt expense langsung tanpa melihat saldo allowance",
      "Saldo akhir allowance yang diinginkan",
      "Sales discount forfeited",
      "Jumlah kas yang diterima dari pelanggan"
    ],
    "answer": 1,
    "explanation": "Metode persentase piutang berfokus pada saldo akhir allowance yang diperlukan; bad debt expense adalah penyesuaian dari saldo allowance saat ini."
  },
  {
    "topic": "Receivables",
    "skill": "Allowance change posting",
    "difficulty": "basic",
    "q": "Perubahan allowance for doubtful accounts dari tahun ke tahun umumnya memengaruhi akun...",
    "options": [
      "Bad Debt Expense",
      "Revenue",
      "Cash Flow Statement secara langsung",
      "Share Capital"
    ],
    "answer": 0,
    "explanation": "Penyesuaian allowance dicatat melalui Bad Debt Expense, meskipun saldo allowance sendiri disajikan sebagai kontra aset."
  },
  {
    "topic": "Receivables",
    "skill": "Recovery of written-off receivable",
    "difficulty": "medium",
    "q": "Ketika piutang yang sebelumnya telah dihapus kemudian berhasil ditagih, urutan jurnal yang tepat adalah...",
    "options": [
      "Debit Cash; Kredit Bad Debt Expense saja",
      "Pulihkan piutang terlebih dahulu, lalu catat penerimaan kas",
      "Debit Allowance; Kredit Cash",
      "Debit Sales; Kredit Accounts Receivable"
    ],
    "answer": 1,
    "explanation": "Recovery biasanya dicatat dengan membalik write-off terlebih dahulu, kemudian mencatat penerimaan kas."
  },
  {
    "topic": "Receivables",
    "skill": "Cash discount methods",
    "difficulty": "basic",
    "q": "Pendekatan pencatatan cash discount atas accounts receivable yang secara teoritis lebih tepat adalah...",
    "options": [
      "Net method",
      "Gross method",
      "Semua pendekatan sama secara teoritis",
      "Allowance method"
    ],
    "answer": 0,
    "explanation": "Net method dianggap lebih tepat secara teoritis karena piutang diukur pada jumlah yang diharapkan diterima jika diskon dimanfaatkan."
  },
  {
    "topic": "Receivables",
    "skill": "Credit terms net method",
    "difficulty": "medium",
    "q": "Perusahaan menjual kredit Rp300.000 dengan syarat 1/10, n/30 dan menggunakan net method. Pada saat penjualan, Accounts Receivable dicatat sebesar...",
    "options": [
      "Rp300.000",
      "Rp303.000",
      "Rp297.000",
      "Rp3.000"
    ],
    "answer": 2,
    "explanation": "Net method mencatat piutang sebesar jumlah setelah diskon: 300.000 × 99% = 297.000."
  },
  {
    "topic": "Receivables",
    "skill": "Sales discounts forfeited",
    "difficulty": "medium",
    "q": "Dalam net method, jika pelanggan tidak memanfaatkan diskon dalam periode diskon, selisih diskon yang gagal dimanfaatkan biasanya dicatat sebagai...",
    "options": [
      "Sales Discounts Forfeited",
      "Bad Debt Expense",
      "Allowance for Doubtful Accounts",
      "Freight-out"
    ],
    "answer": 0,
    "explanation": "Selisih antara net receivable dan kas yang diterima karena diskon tidak dimanfaatkan dicatat sebagai Sales Discounts Forfeited atau akun pendapatan sejenis."
  },
  {
    "topic": "Receivables",
    "skill": "Receivables turnover interpretation",
    "difficulty": "medium",
    "q": "Receivables turnover dapat memberi sinyal hal berikut, kecuali...",
    "options": [
      "COGS perusahaan understated",
      "Piutang overstated",
      "Kemungkinan lapping",
      "Poor collection"
    ],
    "answer": 0,
    "explanation": "Receivables turnover berkaitan dengan penagihan piutang, bukan langsung dengan COGS."
  },
  {
    "kind": "report-fill",
    "topic": "Transfer of Receivables",
    "skill": "Factoring without recourse — cash proceeds, holdback, and loss",
    "difficulty": "advanced",
    "q": "Rinjani Inc. memfaktorkan piutang Rp5.000.000 without recourse. Factor mengenakan finance charge 5% dan menahan holdback 10%.",
    "data": [
      "Transfer memenuhi syarat sebagai sale without recourse.",
      "Tidak ada recourse liability tambahan.",
      "Hitung cash proceeds, due from factor, dan loss on transfer."
    ],
    "instruction": "Isi angka tanpa titik/koma ribuan; sistem menerima format rupiah biasa.",
    "blanks": [
      {
        "id": "uas-factor-rinjani-cash",
        "label": "Cash proceeds",
        "answer": 4250000,
        "prefix": "Rp"
      },
      {
        "id": "uas-factor-rinjani-due",
        "label": "Due from Factor",
        "answer": 500000,
        "prefix": "Rp"
      },
      {
        "id": "uas-factor-rinjani-loss",
        "label": "Loss on Transfer",
        "answer": 250000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Finance charge = 5% × 5.000.000 = 250.000. Holdback = 10% × 5.000.000 = 500.000. Cash = 5.000.000 − 250.000 − 500.000 = 4.250.000; loss = 250.000."
  },
  {
    "kind": "multi-select",
    "topic": "Transfer of Receivables",
    "skill": "Sale of receivables vs secured borrowing",
    "difficulty": "advanced",
    "q": "Pilih pernyataan yang benar mengenai transfer piutang dalam AKM I.",
    "options": [
      "Jika transfer memenuhi syarat sebagai sale, piutang dikeluarkan dari pembukuan penjual.",
      "Jika risiko/manfaat substansial tetap berada pada transferor, transaksi dapat diperlakukan sebagai secured borrowing.",
      "Holdback dari factor dapat dicatat sebagai Due from Factor jika masih menjadi hak transferor.",
      "Setiap transfer piutang otomatis menghasilkan gain karena kas diterima lebih cepat."
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Transfer piutang harus dinilai apakah merupakan sale atau borrowing. Holdback tetap menjadi klaim transferor, sedangkan finance charge/recourse dapat menimbulkan loss."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Notes receivable terms",
    "difficulty": "basic",
    "q": "Berikut istilah yang berkaitan dengan notes receivable, kecuali...",
    "options": [
      "Cash realizable value",
      "Face value",
      "Carrying amount",
      "Discount atau premium"
    ],
    "answer": 0,
    "explanation": "Face value, carrying amount, dan discount/premium lazim dalam notes receivable; cash realizable value lebih umum untuk piutang usaha setelah allowance."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Non-interest-bearing note measurement",
    "difficulty": "advanced",
    "q": "Mailing Co. menjual tanah yang fair value-nya $40.000 dan cost-nya $30.000 dengan menerima five-year note tanpa stated interest bernilai jatuh tempo $70.000. Note receivable awal dicatat sebesar...",
    "options": [
      "$70.000",
      "$40.000",
      "$30.000",
      "$10.000"
    ],
    "answer": 1,
    "explanation": "Note tanpa stated interest dicatat pada fair value pertukaran, yaitu fair value tanah $40.000."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Gain on disposal with note",
    "difficulty": "medium",
    "q": "Dengan data Mailing Co., gain on disposal of land adalah...",
    "options": [
      "$70.000",
      "$40.000",
      "$30.000",
      "$10.000"
    ],
    "answer": 3,
    "explanation": "Gain = fair value land $40.000 − carrying amount/cost $30.000 = $10.000."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Discount amortization",
    "difficulty": "medium",
    "q": "Discount pada long-term note receivable diamortisasi dengan metode...",
    "options": [
      "Straight-line selalu wajib",
      "Effective interest method",
      "Retail inventory method",
      "Gross profit method"
    ],
    "answer": 1,
    "explanation": "Effective interest method digunakan untuk mengakui interest revenue dan mengamortisasi discount/premium pada note."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Stated rate equals market rate",
    "difficulty": "basic",
    "q": "Jika note receivable diterbitkan dengan stated interest rate sama dengan market rate, note awalnya dicatat pada...",
    "options": [
      "Face value",
      "Zero",
      "Maturity value dikurangi seluruh bunga",
      "NRV"
    ],
    "answer": 0,
    "explanation": "Jika stated rate sama dengan market rate, present value note sama dengan face value."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Stated rate below market rate",
    "difficulty": "medium",
    "q": "Jika stated interest rate pada note lebih rendah daripada market rate, note receivable diterbitkan pada...",
    "options": [
      "Premium",
      "Discount",
      "Face value tanpa diskon",
      "Nilai lebih tinggi dari maturity value"
    ],
    "answer": 1,
    "explanation": "Rate stated yang lebih rendah dari rate pasar membuat present value cash flows lebih rendah dari face value, sehingga note dicatat dengan discount."
  },
  {
    "topic": "Notes Receivable",
    "skill": "Interest calculation",
    "difficulty": "basic",
    "q": "Notes receivable Rp120.000, bunga 12% per tahun, jangka waktu 4 bulan. Interest revenue adalah...",
    "options": [
      "Rp4.800",
      "Rp14.400",
      "Rp40.000",
      "Rp3.600"
    ],
    "answer": 0,
    "explanation": "Interest = 120.000 × 12% × 4/12 = 4.800."
  },
  {
    "topic": "Inventory Ownership",
    "skill": "FOB shipping point",
    "difficulty": "basic",
    "q": "Goods in transit dengan syarat FOB shipping point pada tanggal laporan harus dimasukkan ke inventory...",
    "options": [
      "Pembeli",
      "Penjual",
      "Freight company",
      "Tidak ada pihak"
    ],
    "answer": 0,
    "explanation": "FOB shipping point memindahkan ownership saat barang dikirim, sehingga barang masuk inventory pembeli."
  },
  {
    "topic": "Inventory Ownership",
    "skill": "FOB destination",
    "difficulty": "basic",
    "q": "Goods in transit dengan syarat FOB destination yang belum diterima pembeli pada tanggal laporan masih menjadi inventory...",
    "options": [
      "Pembeli",
      "Penjual",
      "Bank",
      "Auditor"
    ],
    "answer": 1,
    "explanation": "FOB destination memindahkan ownership saat barang sampai di tujuan, sehingga sebelum diterima masih milik penjual."
  },
  {
    "topic": "Inventory Ownership",
    "skill": "Consignment",
    "difficulty": "basic",
    "q": "Barang konsinyasi yang berada di consignee tetapi belum dijual kepada pelanggan akhir harus dilaporkan sebagai inventory...",
    "options": [
      "Consignee",
      "Consignor",
      "Pelanggan akhir",
      "Tidak ada pihak"
    ],
    "answer": 1,
    "explanation": "Dalam konsinyasi, consignor tetap pemilik barang sampai terjadi penjualan kepada pihak luar."
  },
  {
    "topic": "Inventory Ownership",
    "skill": "Goods held for others",
    "difficulty": "basic",
    "q": "Barang milik pelanggan yang hanya dititipkan sementara di gudang perusahaan harus...",
    "options": [
      "Diakui sebagai inventory perusahaan",
      "Diakui sebagai revenue",
      "Tidak dimasukkan ke inventory perusahaan",
      "Diakui sebagai cash equivalent"
    ],
    "answer": 2,
    "explanation": "Inventory mengikuti hak kepemilikan; barang titipan milik pelanggan tidak boleh diakui sebagai persediaan perusahaan."
  },
  {
    "topic": "Inventory Cost-Basis",
    "skill": "Inventoriable cost",
    "difficulty": "basic",
    "q": "Komponen yang termasuk inventoriable cost adalah...",
    "options": [
      "Purchase price setelah diskon dan retur, freight-in, serta handling normal",
      "Freight-out dan advertising expense",
      "Abnormal storage cost",
      "Interest expense umum kantor"
    ],
    "answer": 0,
    "explanation": "Inventoriable cost mencakup biaya pembelian dan biaya lain yang diperlukan untuk membawa inventory ke lokasi dan kondisi siap dijual."
  },
  {
    "topic": "Inventory Cost-Basis",
    "skill": "Abnormal storage cost",
    "difficulty": "basic",
    "q": "Abnormal storage cost dalam pembelian inventory diperlakukan sebagai...",
    "options": [
      "Inventoriable cost",
      "Period expense",
      "Contra revenue",
      "Cash equivalent"
    ],
    "answer": 1,
    "explanation": "Abnormal waste atau storage tidak dikapitalisasi ke inventory, tetapi dibebankan sebagai period expense."
  },
  {
    "topic": "Inventory Cost-Basis",
    "skill": "Purchase returns",
    "difficulty": "basic",
    "q": "Purchase returns dalam sistem persediaan periodik akan...",
    "options": [
      "Menambah net purchases",
      "Mengurangi net purchases",
      "Tidak memengaruhi purchases",
      "Menambah freight-in"
    ],
    "answer": 1,
    "explanation": "Net purchases = purchases − purchase returns and allowances − purchase discounts + freight-in."
  },
  {
    "topic": "Inventory Cost-Basis",
    "skill": "Freight-out",
    "difficulty": "basic",
    "q": "Freight-out untuk pengiriman barang kepada pelanggan diperlakukan sebagai...",
    "options": [
      "Inventoriable cost",
      "Selling expense",
      "Purchase discount",
      "Inventory loss recovery"
    ],
    "answer": 1,
    "explanation": "Freight-out terjadi setelah barang siap dijual dan terkait aktivitas penjualan, sehingga menjadi selling expense."
  },
  {
    "topic": "Inventory Cost Flow",
    "skill": "Periodic FIFO",
    "difficulty": "medium",
    "q": "Dalam periodic FIFO, ending inventory biasanya terdiri dari...",
    "options": [
      "Unit paling lama dibeli",
      "Unit paling baru dibeli",
      "Rata-rata semua unit selalu sama dengan LIFO",
      "Unit rusak yang belum dijual"
    ],
    "answer": 1,
    "explanation": "FIFO mengasumsikan barang pertama dibeli pertama dijual; ending inventory berasal dari pembelian terbaru."
  },
  {
    "topic": "Inventory Cost Flow",
    "skill": "Weighted-average periodic",
    "difficulty": "medium",
    "q": "Weighted-average periodic menghitung cost per unit dengan cara...",
    "options": [
      "Total cost of goods available dibagi total unit available",
      "Cost pembelian terakhir dibagi unit terjual",
      "Beginning inventory saja dibagi unit ending",
      "Sales dibagi average inventory"
    ],
    "answer": 0,
    "explanation": "Average cost periodic = total cost available for sale / total units available for sale."
  },
  {
    "topic": "Inventory Cost Flow",
    "skill": "Moving-average perpetual",
    "difficulty": "medium",
    "q": "Dalam moving-average perpetual, average cost diperbarui...",
    "options": [
      "Hanya pada akhir tahun",
      "Setiap terjadi pembelian baru",
      "Setiap terjadi penjualan saja tanpa pembelian",
      "Tidak pernah diperbarui"
    ],
    "answer": 1,
    "explanation": "Dalam perpetual moving-average, average unit cost dihitung ulang setelah setiap pembelian."
  },
  {
    "kind": "report-fill",
    "topic": "Inventory Errors",
    "skill": "Ending inventory overstatement — numerical effect on COGS and income",
    "difficulty": "advanced",
    "q": "Ending inventory 20X1 seharusnya Rp180.000 tetapi dicatat Rp210.000. Sales 20X1 Rp900.000; goods available for sale Rp650.000.",
    "instruction": "Hitung COGS dan gross profit yang dilaporkan, lalu tentukan overstatement net income sebelum pajak.",
    "blanks": [
      {
        "id": "uas-inverr-over-cogs-reported",
        "label": "COGS yang dilaporkan",
        "answer": 440000,
        "prefix": "Rp"
      },
      {
        "id": "uas-inverr-over-gp-reported",
        "label": "Gross profit yang dilaporkan",
        "answer": 460000,
        "prefix": "Rp"
      },
      {
        "id": "uas-inverr-over-ni-effect",
        "label": "Net income overstatement",
        "answer": 30000,
        "prefix": "Rp"
      }
    ],
    "explanation": "COGS dilaporkan = 650.000 − 210.000 = 440.000. COGS benar = 650.000 − 180.000 = 470.000. Karena COGS terlalu rendah 30.000, gross profit dan net income 20X1 terlalu tinggi 30.000."
  },
  {
    "kind": "multi-select",
    "topic": "Inventory Errors",
    "skill": "Two-period reversal of inventory errors",
    "difficulty": "advanced",
    "q": "Ending inventory 20X1 overstated dan tidak dikoreksi sampai awal 20X2. Pilih dampak yang benar.",
    "options": [
      "COGS 20X1 understated.",
      "Net income 20X1 overstated.",
      "Beginning inventory 20X2 overstated.",
      "Jika tidak ada error baru, net income 20X2 understated."
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ending inventory yang terlalu tinggi menurunkan COGS dan menaikkan income tahun berjalan. Pada tahun berikutnya, error masuk sebagai beginning inventory yang terlalu tinggi sehingga COGS 20X2 terlalu tinggi dan income 20X2 terlalu rendah."
  },
  {
    "topic": "Inventory Cost-Basis",
    "skill": "Relative sales value allocation",
    "difficulty": "advanced",
    "q": "RXY membeli 3.000 unit LF dan 7.000 unit AB dengan total cost $50.000. LF dijual $15/unit dan AB $5/unit. Jika 1.000 unit LF dijual, gross profit yang diakui adalah...",
    "options": [
      "$10.000",
      "$11.875",
      "$5.625",
      "$1.875"
    ],
    "answer": 2,
    "explanation": "Relative sales value LF = 45.000 dari total 80.000, sehingga cost LF = 50.000 × 45/80 = 28.125 atau 9,375/unit. Gross profit 1.000 unit = 15.000 − 9.375 = 5.625."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "LCNRV definition",
    "difficulty": "basic",
    "q": "LCNRV yang diterapkan pada inventory paling tepat digambarkan sebagai...",
    "options": [
      "Metode penentuan harga pokok penjualan",
      "Asumsi aliran biaya persediaan",
      "Perubahan nilai inventory menjadi NRV setiap kali harga jual naik",
      "Pelaporan kerugian ketika utilitas masa depan inventory turun di bawah cost"
    ],
    "answer": 3,
    "explanation": "LCNRV mengakui write-down saat NRV lebih rendah dari cost karena manfaat ekonomi masa depan inventory menurun."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "Product Z LCNRV",
    "difficulty": "medium",
    "q": "Produk Z memiliki cost Rp150, selling price Rp190, cost to complete Rp20, dan selling cost Rp11. Nilai inventory per unit berdasarkan LCNRV adalah...",
    "options": [
      "Rp159",
      "Rp130",
      "Rp150",
      "Rp139"
    ],
    "answer": 2,
    "explanation": "NRV = 190 − 20 − 11 = 159. Lower of cost Rp150 and NRV Rp159 adalah Rp150."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "Product ALPHA LCNRV",
    "difficulty": "medium",
    "q": "Produk ALPHA memiliki cost Rp85, selling price Rp97, cost to complete Rp8, dan selling cost Rp6. Nilai inventory per unit adalah...",
    "options": [
      "Rp83",
      "Rp85",
      "Rp89",
      "Rp79"
    ],
    "answer": 0,
    "explanation": "NRV = 97 − 8 − 6 = 83. Lower of cost Rp85 and NRV Rp83 adalah Rp83."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "Write-down per unit",
    "difficulty": "medium",
    "q": "Berdasarkan data ALPHA, write-down per unit adalah...",
    "options": [
      "Rp0",
      "Rp2",
      "Rp6",
      "Rp14"
    ],
    "answer": 1,
    "explanation": "Write-down = cost 85 − NRV 83 = 2 per unit."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "Loss method journal",
    "difficulty": "medium",
    "q": "Dalam loss method, penurunan inventory dari cost ke NRV biasanya dicatat dengan...",
    "options": [
      "Debit Loss Due to Decline of Inventory to NRV; Kredit Allowance to Reduce Inventory to NRV",
      "Debit Inventory; Kredit Sales",
      "Debit Cash; Kredit Recovery of Inventory Loss",
      "Debit COGS; Kredit Sales"
    ],
    "answer": 0,
    "explanation": "Loss method memisahkan kerugian penurunan nilai inventory dari COGS melalui akun loss dan allowance."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "COGS method",
    "difficulty": "medium",
    "q": "Dalam cost-of-goods-sold method, kerugian penurunan inventory ke NRV biasanya...",
    "options": [
      "Dilaporkan sebagai gain terpisah",
      "Dimasukkan ke Cost of Goods Sold",
      "Tidak dicatat sampai inventory dijual",
      "Dicatat sebagai dividend"
    ],
    "answer": 1,
    "explanation": "COGS method memperlakukan write-down inventory sebagai bagian dari COGS."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "IFRS recovery of inventory loss",
    "difficulty": "medium",
    "q": "Inventory PT ABC turun dari Rp240.000 menjadi Rp200.000 pada 2018. Pada 2019 NRV membaik menjadi Rp216.000. Recovery yang dicatat adalah...",
    "options": [
      "Debit Recovery of Inventory Loss Rp16.000",
      "Kredit Allowance to Reduce Inventory to NRV Rp24.000",
      "Kredit Recovery of Inventory Loss Rp24.000",
      "Debit Allowance to Reduce Inventory to NRV Rp16.000"
    ],
    "answer": 3,
    "explanation": "IFRS mengizinkan reversal write-down sampai batas original cost. Carrying amount naik dari 200.000 ke 216.000 sehingga allowance didebit Rp16.000 dan recovery dikreditkan Rp16.000."
  },
  {
    "topic": "LCNRV & NRV",
    "skill": "Recovery limit",
    "difficulty": "basic",
    "q": "Jika NRV inventory pulih melebihi original cost, recovery write-down menurut IFRS dibatasi sampai...",
    "options": [
      "NRV tertinggi",
      "Selling price bruto",
      "Original cost",
      "Nol, karena reversal tidak pernah boleh"
    ],
    "answer": 2,
    "explanation": "Reversal write-down tidak boleh menyebabkan carrying amount inventory melebihi cost awal."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Core formula",
    "difficulty": "basic",
    "q": "Dalam gross profit method, estimated ending inventory dihitung sebagai...",
    "options": [
      "Sales − gross profit",
      "Goods available for sale − estimated COGS",
      "Purchases − sales returns",
      "Average inventory × turnover"
    ],
    "answer": 1,
    "explanation": "Ending inventory estimasian = goods available for sale − estimated cost of goods sold."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Glaus calculation",
    "difficulty": "medium",
    "q": "Glaus Inc. memiliki beginning inventory Rp800.000, purchases Rp1.600.000, sales Rp2.000.000, dan gross profit rate 25% dari sales. Ending inventory adalah...",
    "options": [
      "Rp1.500.000",
      "Rp900.000",
      "Rp400.000",
      "Rp500.000"
    ],
    "answer": 1,
    "explanation": "COGS = 75% × 2.000.000 = 1.500.000. Goods available = 2.400.000. Ending inventory = 900.000."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Markup conversion",
    "difficulty": "medium",
    "q": "Markup 40% on cost ekuivalen dengan markup on selling price sebesar sekitar...",
    "options": [
      "29%",
      "60%",
      "71%",
      "40%"
    ],
    "answer": 0,
    "explanation": "Jika cost 100, selling price 140, markup sebagai persentase selling price = 40/140 = 28,57%, dibulatkan 29%."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Use limitation",
    "difficulty": "basic",
    "q": "Pernyataan yang tidak tepat mengenai gross profit method adalah...",
    "options": [
      "Dapat digunakan untuk estimasi inventory interim",
      "Dapat menggantikan inventory fisik untuk laporan tahunan secara penuh",
      "Dapat digunakan saat inventory rusak karena kebakaran",
      "Dapat digunakan auditor sebagai prosedur analitis"
    ],
    "answer": 1,
    "explanation": "Gross profit method hanya estimasi; untuk laporan tahunan tetap dibutuhkan pengukuran inventory yang lebih andal."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Disaster estimation",
    "difficulty": "basic",
    "q": "Gross profit method sangat berguna ketika...",
    "options": [
      "Perusahaan ingin menghitung petty cash",
      "Inventory hancur karena kebakaran atau bencana dan perlu estimasi nilai inventory",
      "Perusahaan menagih notes receivable",
      "Perusahaan mengklasifikasikan compensating balance"
    ],
    "answer": 1,
    "explanation": "Metode laba kotor sering digunakan untuk memperkirakan inventory yang hilang atau rusak akibat bencana."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Gross profit rate on sales",
    "difficulty": "medium",
    "q": "Jika gross profit rate 30% dari sales Rp800.000, beginning inventory Rp200.000, dan purchases Rp700.000, estimated ending inventory adalah...",
    "options": [
      "Rp560.000",
      "Rp340.000",
      "Rp240.000",
      "Rp100.000"
    ],
    "answer": 1,
    "explanation": "COGS = 70% × 800.000 = 560.000. Goods available = 900.000. Ending inventory = 340.000."
  },
  {
    "topic": "Gross Profit Method",
    "skill": "Gross profit vs markup",
    "difficulty": "medium",
    "q": "Gross profit rate 25% on sales berarti COGS adalah...",
    "options": [
      "25% dari sales",
      "75% dari sales",
      "125% dari sales",
      "Tidak dapat dihitung"
    ],
    "answer": 1,
    "explanation": "Jika gross profit 25% dari sales, maka COGS adalah 75% dari sales."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Conventional denominator",
    "difficulty": "basic",
    "q": "Dalam conventional retail inventory method, perhitungan cost-to-retail ratio biasanya...",
    "options": [
      "Memasukkan markdowns tetapi tidak markups",
      "Memasukkan markups tetapi tidak markdowns",
      "Mengabaikan markups dan markdowns",
      "Memasukkan markups dan markdowns"
    ],
    "answer": 1,
    "explanation": "Conventional retail method mengecualikan markdowns dari denominator untuk menghasilkan angka yang mendekati LCNRV."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Cost-to-retail ratio meaning",
    "difficulty": "basic",
    "q": "Cost-to-retail ratio dalam retail inventory method digunakan untuk...",
    "options": [
      "Mengubah ending inventory at retail menjadi estimated ending inventory at cost",
      "Menghitung bank service charge",
      "Menghitung bad debt expense",
      "Menghitung note maturity value"
    ],
    "answer": 0,
    "explanation": "Ending inventory pada retail dikalikan cost-to-retail ratio untuk mendapatkan estimasi cost inventory."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Ending inventory at retail",
    "difficulty": "medium",
    "q": "Ending inventory at retail umumnya dihitung sebagai...",
    "options": [
      "Goods available at retail − net sales − net markdowns",
      "Sales − cost of goods sold",
      "Beginning inventory at cost + purchases at cost",
      "Average inventory × turnover"
    ],
    "answer": 0,
    "explanation": "Ending inventory at retail dihitung dari barang tersedia pada retail setelah memperhitungkan sales dan markdowns sesuai format retail method."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Net markups",
    "difficulty": "basic",
    "q": "Net markups dalam retail method akan...",
    "options": [
      "Mengurangi retail value barang tersedia",
      "Menambah retail value barang tersedia",
      "Selalu dikeluarkan dari semua perhitungan",
      "Menjadi bank charge"
    ],
    "answer": 1,
    "explanation": "Markup meningkatkan harga retail barang yang tersedia untuk dijual."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Markdown exclusion",
    "difficulty": "medium",
    "q": "Alasan net markdowns dikeluarkan dari denominator conventional retail method adalah...",
    "options": [
      "Agar ratio lebih rendah dan mendekati LCNRV",
      "Agar ratio lebih tinggi dari cost",
      "Karena markdown adalah cash equivalent",
      "Karena markdown dicatat sebagai accounts receivable"
    ],
    "answer": 0,
    "explanation": "Mengecualikan markdown dari denominator menurunkan cost-to-retail ratio sehingga hasil estimasi mendekati lower of cost and NRV."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Conventional retail calculation",
    "difficulty": "advanced",
    "q": "Data retail: cost of goods available Rp60.000, retail before markups/markdowns Rp100.000, net markup Rp10.000, net markdown Rp4.000, net sales Rp76.000. Conventional cost-to-retail denominator adalah...",
    "options": [
      "Rp100.000",
      "Rp110.000",
      "Rp106.000",
      "Rp76.000"
    ],
    "answer": 1,
    "explanation": "Denominator conventional = retail before markups/markdowns 100.000 + net markup 10.000 = 110.000; markdown tidak masuk denominator."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Ending inventory retail calculation",
    "difficulty": "advanced",
    "q": "Dengan data retail yang sama, ending inventory at retail adalah...",
    "options": [
      "Rp30.000",
      "Rp34.000",
      "Rp24.000",
      "Rp20.000"
    ],
    "answer": 0,
    "explanation": "Ending inventory at retail = 100.000 + 10.000 − 4.000 − 76.000 = 30.000."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "Ending inventory cost calculation",
    "difficulty": "advanced",
    "q": "Dengan data retail yang sama, estimated ending inventory at cost menggunakan conventional method mendekati...",
    "options": [
      "Rp16.364",
      "Rp18.000",
      "Rp30.000",
      "Rp24.000"
    ],
    "answer": 0,
    "explanation": "Cost-to-retail ratio = 60.000/110.000 = 54,545%. Ending inventory at cost = 30.000 × 54,545% = 16.364."
  },
  {
    "topic": "Retail Inventory Method",
    "skill": "LCNRV approximation",
    "difficulty": "basic",
    "q": "Conventional retail inventory method menghasilkan estimasi yang mendekati...",
    "options": [
      "Historical cost murni",
      "Lower of cost and NRV",
      "Cash realizable value receivables",
      "Effective interest rate"
    ],
    "answer": 1,
    "explanation": "Karena perlakuan markdowns, conventional retail method dirancang untuk mendekati lower of cost and NRV."
  },
  {
    "topic": "Inventory Analysis",
    "skill": "Inventory turnover formula",
    "difficulty": "basic",
    "q": "Inventory turnover dihitung sebagai...",
    "options": [
      "Net sales / average receivables",
      "COGS / average inventory",
      "Average inventory / COGS",
      "Gross profit / sales"
    ],
    "answer": 1,
    "explanation": "Inventory turnover = cost of goods sold dibagi average inventory."
  },
  {
    "topic": "Inventory Analysis",
    "skill": "Days to sell formula",
    "difficulty": "basic",
    "q": "Days to sell inventory dihitung sebagai...",
    "options": [
      "365 / inventory turnover",
      "Inventory turnover / 365",
      "COGS / 365",
      "365 / receivables turnover"
    ],
    "answer": 0,
    "explanation": "Days to sell menunjukkan rata-rata hari inventory tertahan sebelum dijual: 365 dibagi inventory turnover."
  },
  {
    "topic": "Inventory Analysis",
    "skill": "Inventory turnover calculation",
    "difficulty": "medium",
    "q": "COGS Rp1.200.000, beginning inventory Rp300.000, dan ending inventory Rp500.000. Inventory turnover adalah...",
    "options": [
      "2 kali",
      "3 kali",
      "4 kali",
      "6 kali"
    ],
    "answer": 1,
    "explanation": "Average inventory = (300.000 + 500.000)/2 = 400.000. Turnover = 1.200.000/400.000 = 3 kali."
  },
  {
    "topic": "Inventory Analysis",
    "skill": "Days to sell calculation",
    "difficulty": "medium",
    "q": "Dengan inventory turnover 3 kali, days to sell kira-kira...",
    "options": [
      "30 hari",
      "90 hari",
      "121,7 hari",
      "365 hari"
    ],
    "answer": 2,
    "explanation": "Days to sell = 365/3 = 121,7 hari."
  },
  {
    "kind": "account-match",
    "topic": "Inventory Errors",
    "skill": "Match inventory error to current-year income effect",
    "difficulty": "medium",
    "q": "Pasangkan jenis error inventory dengan dampak laba tahun berjalan sebelum pajak.",
    "instruction": "Asumsikan error terjadi pada tahun berjalan dan belum dikoreksi.",
    "choices": [
      "Net income overstated",
      "Net income understated",
      "No direct effect on sales revenue",
      "Beginning inventory next year affected"
    ],
    "pairs": [
      {
        "prompt": "Ending inventory tahun berjalan overstated",
        "answer": "Net income overstated"
      },
      {
        "prompt": "Ending inventory tahun berjalan understated",
        "answer": "Net income understated"
      },
      {
        "prompt": "Inventory error tidak mengubah angka sales revenue",
        "answer": "No direct effect on sales revenue"
      },
      {
        "prompt": "Ending inventory tahun ini menjadi saldo awal inventory tahun berikutnya",
        "answer": "Beginning inventory next year affected"
      }
    ],
    "explanation": "Inventory error memengaruhi COGS dan laba, bukan sales. Efeknya berbalik pada periode berikutnya melalui beginning inventory."
  },
  {
    "kind": "report-fill",
    "topic": "Inventory Errors",
    "skill": "Ending inventory understatement — COGS and income effect",
    "difficulty": "advanced",
    "q": "Ending inventory 20X1 seharusnya Rp260.000 tetapi dicatat Rp225.000. Goods available for sale Rp800.000.",
    "instruction": "Hitung COGS yang dilaporkan, COGS yang benar, dan understatement net income.",
    "blanks": [
      {
        "id": "uas-inverr-under-cogs-reported",
        "label": "COGS yang dilaporkan",
        "answer": 575000,
        "prefix": "Rp"
      },
      {
        "id": "uas-inverr-under-cogs-correct",
        "label": "COGS yang benar",
        "answer": 540000,
        "prefix": "Rp"
      },
      {
        "id": "uas-inverr-under-ni-effect",
        "label": "Net income understatement",
        "answer": 35000,
        "prefix": "Rp"
      }
    ],
    "explanation": "COGS dilaporkan = 800.000 − 225.000 = 575.000. COGS benar = 800.000 − 260.000 = 540.000. Karena COGS terlalu tinggi 35.000, net income understated 35.000."
  },
  {
    "topic": "Bank Reconciliation",
    "skill": "NSF journal",
    "difficulty": "basic",
    "q": "NSF check yang dikembalikan bank biasanya dijurnal oleh perusahaan dengan...",
    "options": [
      "Debit Accounts Receivable; Kredit Cash",
      "Debit Cash; Kredit Accounts Receivable",
      "Debit Bank; Kredit Service Charge",
      "Debit Inventory; Kredit Cash"
    ],
    "answer": 0,
    "explanation": "NSF check membatalkan penerimaan kas sebelumnya sehingga kas dikredit dan piutang pelanggan dipulihkan."
  },
  {
    "kind": "account-match",
    "topic": "Transfer of Receivables",
    "skill": "Classify receivable transfer arrangements",
    "difficulty": "medium",
    "q": "Pasangkan bentuk transfer piutang dengan perlakuan umum yang paling tepat.",
    "choices": [
      "Sale without recourse",
      "Sale with recourse",
      "Secured borrowing",
      "Assignment of receivables"
    ],
    "pairs": [
      {
        "prompt": "Piutang dijual ke factor dan transferor tidak menanggung risiko gagal tagih",
        "answer": "Sale without recourse"
      },
      {
        "prompt": "Piutang dijual tetapi transferor memberi jaminan terbatas kepada factor",
        "answer": "Sale with recourse"
      },
      {
        "prompt": "Piutang dijaminkan untuk pinjaman dan tetap diakui oleh borrower",
        "answer": "Secured borrowing"
      },
      {
        "prompt": "Piutang tertentu ditetapkan sebagai jaminan pinjaman",
        "answer": "Assignment of receivables"
      }
    ],
    "explanation": "Tidak semua transfer piutang berarti derecognition. Assignment/secured borrowing tetap mempertahankan piutang dan mengakui liability."
  },
  {
    "kind": "report-fill",
    "topic": "Transfer of Receivables",
    "skill": "Factoring with recourse — loss measurement in sale accounting",
    "difficulty": "advanced",
    "q": "PT Loka mentransfer piutang Rp4.000.000 kepada factor. Finance charge 4%, holdback 8%, dan recourse liability diestimasi Rp120.000. Transfer memenuhi kriteria sale.",
    "instruction": "Hitung cash proceeds, due from factor, dan loss on sale of receivables.",
    "blanks": [
      {
        "id": "uas-factor-loka-cash",
        "label": "Cash proceeds",
        "answer": 3520000,
        "prefix": "Rp"
      },
      {
        "id": "uas-factor-loka-due",
        "label": "Due from Factor",
        "answer": 320000,
        "prefix": "Rp"
      },
      {
        "id": "uas-factor-loka-loss",
        "label": "Loss on Sale of Receivables",
        "answer": 280000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Finance charge = 4% × 4.000.000 = 160.000. Holdback = 8% × 4.000.000 = 320.000. Cash = 4.000.000 − 160.000 − 320.000 = 3.520.000. Loss = finance charge 160.000 + recourse liability 120.000 = 280.000."
  }
];
