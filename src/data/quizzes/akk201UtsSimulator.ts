// =============================================================
// Simulasi UTS AKM I — Website Mode 2 Jam (Batch 11)
// 70 soal berbasis pola website TM 1–7: conceptual framework, AIS,
// adjustment, income statement, SFP, SCF, dan time value of money.
// =============================================================
import type { QuizQuestion } from '../../types';

export const AKK201_QUIZ_UTS_SIMULATOR: QuizQuestion[] = [
  {
    "kind": "account-match",
    "topic": "Conceptual Framework",
    "skill": "Objective and qualitative characteristics of financial reporting",
    "difficulty": "medium",
    "q": "Pasangkan konsep conceptual framework dengan deskripsi yang benar.",
    "choices": [
      "Decision-usefulness",
      "Relevance",
      "Faithful representation",
      "Cost constraint"
    ],
    "pairs": [
      {
        "prompt": "Tujuan general-purpose financial reporting bagi investor, lenders, dan creditors",
        "answer": "Decision-usefulness"
      },
      {
        "prompt": "Informasi mampu membuat perbedaan dalam keputusan pengguna",
        "answer": "Relevance"
      },
      {
        "prompt": "Informasi lengkap, netral, dan bebas dari kesalahan material",
        "answer": "Faithful representation"
      },
      {
        "prompt": "Manfaat informasi seharusnya melebihi biaya penyediaannya",
        "answer": "Cost constraint"
      }
    ],
    "explanation": "Conceptual framework menekankan informasi yang berguna untuk keputusan, dengan relevance dan faithful representation sebagai kualitas fundamental."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Qualitative characteristics",
    "difficulty": "basic",
    "q": "Karakteristik kualitatif fundamental dalam conceptual framework adalah...",
    "options": [
      "Comparability dan verifiability",
      "Relevance dan faithful representation",
      "Timeliness dan understandability",
      "Materiality dan conservatism"
    ],
    "answer": 1,
    "explanation": "Dua fundamental qualitative characteristics adalah relevance dan faithful representation."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Predictive/confirmatory value",
    "difficulty": "basic",
    "q": "Informasi memiliki relevance jika...",
    "options": [
      "Selalu disajikan dalam format tabel",
      "Memiliki predictive value, confirmatory value, atau keduanya",
      "Tidak pernah menggunakan estimasi",
      "Hanya digunakan oleh auditor internal"
    ],
    "answer": 1,
    "explanation": "Relevance terkait kemampuan informasi memengaruhi keputusan melalui predictive atau confirmatory value."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Faithful representation",
    "difficulty": "basic",
    "q": "Faithful representation paling tepat berarti informasi...",
    "options": [
      "Lengkap, netral, dan bebas dari kesalahan material",
      "Selalu menggunakan historical cost",
      "Hanya berupa angka yang sudah diaudit",
      "Lebih cepat diterbitkan daripada periode sebelumnya"
    ],
    "answer": 0,
    "explanation": "Faithful representation mencakup completeness, neutrality, dan freedom from error."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Materiality",
    "difficulty": "medium",
    "q": "Salah saji dianggap material jika...",
    "options": [
      "Jumlahnya selalu lebih dari 5% aset",
      "Dapat memengaruhi keputusan pengguna laporan keuangan",
      "Terjadi pada akun kas saja",
      "Ditemukan setelah laporan diterbitkan"
    ],
    "answer": 1,
    "explanation": "Materiality bersifat entity-specific dan berhubungan dengan pengaruhnya terhadap keputusan pengguna."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Assumptions",
    "difficulty": "basic",
    "q": "Asumsi periodicity berarti...",
    "options": [
      "Perusahaan akan dilikuidasi dalam waktu dekat",
      "Aktivitas ekonomi dapat dibagi ke periode pelaporan buatan",
      "Semua transaksi harus diukur dengan fair value",
      "Pemilik dan perusahaan dianggap satu entitas"
    ],
    "answer": 1,
    "explanation": "Periodicity membagi life of business ke periode pelaporan agar kinerja dapat dilaporkan secara periodik."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Constraints",
    "difficulty": "basic",
    "q": "Cost constraint dalam pelaporan keuangan berarti...",
    "options": [
      "Seluruh informasi harus disajikan meskipun mahal",
      "Manfaat informasi seharusnya melebihi biaya penyediaannya",
      "Biaya historis selalu lebih relevan daripada nilai kini",
      "Perusahaan tidak boleh menyajikan notes"
    ],
    "answer": 1,
    "explanation": "Cost constraint menyeimbangkan manfaat informasi dengan biaya menghasilkan dan menggunakan informasi tersebut."
  },
  {
    "topic": "Conceptual Framework",
    "skill": "Recognition criteria",
    "difficulty": "medium",
    "q": "Sebuah item paling layak diakui dalam laporan keuangan ketika...",
    "options": [
      "Hanya disebutkan dalam kontrak tanpa dampak ekonomi",
      "Memenuhi definisi elemen laporan keuangan dan dapat diukur secara relevan serta faithfully represented",
      "Diminta oleh pemegang saham mayoritas saja",
      "Selalu memiliki nilai pasar aktif"
    ],
    "answer": 1,
    "explanation": "Recognition mensyaratkan item memenuhi definisi elemen dan pengukurannya bermanfaat secara relevan serta faithfully represented."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Debit-credit rule",
    "difficulty": "basic",
    "q": "Jika perusahaan membeli equipment secara kredit, jurnal yang benar adalah...",
    "options": [
      "Debit Equipment; kredit Accounts Payable",
      "Debit Accounts Payable; kredit Equipment",
      "Debit Cash; kredit Equipment",
      "Debit Equipment; kredit Service Revenue"
    ],
    "answer": 0,
    "explanation": "Pembelian aset secara kredit menambah aset melalui debit dan menambah liabilitas melalui kredit Accounts Payable."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Revenue transaction",
    "difficulty": "basic",
    "q": "Perusahaan menerima kas Rp8.000.000 dari jasa yang telah diberikan. Jurnal yang benar adalah...",
    "options": [
      "Debit Service Revenue; kredit Cash",
      "Debit Cash; kredit Service Revenue",
      "Debit Accounts Receivable; kredit Cash",
      "Debit Unearned Revenue; kredit Cash"
    ],
    "answer": 1,
    "explanation": "Kas bertambah di debit dan pendapatan jasa diakui di kredit ketika jasa telah diberikan."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Prepaid expense",
    "difficulty": "medium",
    "q": "Perusahaan membayar asuransi 12 bulan Rp12.000.000 pada 1 Oktober. Pada 31 Desember, beban asuransi yang harus diakui adalah...",
    "options": [
      "Rp0",
      "Rp3.000.000",
      "Rp9.000.000",
      "Rp12.000.000"
    ],
    "answer": 1,
    "explanation": "Oktober sampai Desember = 3 bulan. Beban = 3/12 × 12.000.000 = 3.000.000."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Unearned revenue",
    "difficulty": "medium",
    "q": "Saldo Unearned Service Revenue Rp15.000.000. Pada akhir periode, jasa senilai Rp9.000.000 sudah diberikan. Adjustment yang benar adalah...",
    "options": [
      "Debit Unearned Service Revenue Rp9.000.000; kredit Service Revenue Rp9.000.000",
      "Debit Service Revenue Rp9.000.000; kredit Unearned Service Revenue Rp9.000.000",
      "Debit Cash Rp9.000.000; kredit Unearned Service Revenue Rp9.000.000",
      "Debit Accounts Receivable Rp9.000.000; kredit Cash Rp9.000.000"
    ],
    "answer": 0,
    "explanation": "Liabilitas unearned revenue berkurang di debit dan pendapatan yang sudah earned diakui di kredit."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Accrued revenue",
    "difficulty": "medium",
    "q": "Jasa Rp6.500.000 telah diberikan tetapi belum ditagih. Adjustment yang benar adalah...",
    "options": [
      "Debit Cash; kredit Service Revenue",
      "Debit Accounts Receivable; kredit Service Revenue",
      "Debit Service Revenue; kredit Accounts Receivable",
      "Debit Unearned Revenue; kredit Service Revenue"
    ],
    "answer": 1,
    "explanation": "Accrued revenue mencatat hak tagih dengan debit Accounts Receivable dan kredit Service Revenue."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Accrued expense",
    "difficulty": "medium",
    "q": "Gaji Rp4.200.000 sudah menjadi beban tetapi belum dibayar. Adjustment yang benar adalah...",
    "options": [
      "Debit Salaries Expense; kredit Salaries Payable",
      "Debit Salaries Payable; kredit Salaries Expense",
      "Debit Cash; kredit Salaries Expense",
      "Debit Salaries Expense; kredit Cash"
    ],
    "answer": 0,
    "explanation": "Accrued expense menambah beban dan menambah liabilitas terutang."
  },
  {
    "kind": "report-fill",
    "topic": "Accounting Information System",
    "skill": "Supplies adjustment and ending balance",
    "difficulty": "medium",
    "q": "Supplies awal Rp2.500.000; pembelian supplies Rp7.500.000; supplies tersisa akhir periode Rp3.200.000.",
    "instruction": "Hitung supplies expense dan saldo Supplies setelah adjustment.",
    "blanks": [
      {
        "id": "uts-sim-sup-exp",
        "label": "Supplies Expense",
        "answer": 6800000,
        "prefix": "Rp"
      },
      {
        "id": "uts-sim-sup-ending",
        "label": "Supplies ending balance",
        "answer": 3200000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Supplies available = 2.500.000 + 7.500.000 = 10.000.000. Supplies used = 10.000.000 − 3.200.000 = 6.800.000."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Depreciation adjustment",
    "difficulty": "medium",
    "q": "Equipment Rp120.000.000 memiliki estimasi umur manfaat 5 tahun dan nilai residu Rp20.000.000. Depresiasi tahunan straight-line adalah...",
    "options": [
      "Rp20.000.000",
      "Rp24.000.000",
      "Rp28.000.000",
      "Rp100.000.000"
    ],
    "answer": 0,
    "explanation": "Depresiasi = (cost 120.000.000 − residual 20.000.000)/5 = 20.000.000 per tahun."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Trial balance limitation",
    "difficulty": "basic",
    "q": "Trial balance yang seimbang tidak menjamin laporan bebas salah karena...",
    "options": [
      "Debit dan kredit tidak pernah digunakan",
      "Kesalahan seperti transaksi tidak dicatat atau salah akun masih dapat terjadi",
      "Semua jurnal otomatis salah",
      "Trial balance hanya berisi akun nominal"
    ],
    "answer": 1,
    "explanation": "Trial balance hanya menguji kesamaan total debit dan kredit, bukan kelengkapan atau klasifikasi transaksi."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Closing entries",
    "difficulty": "basic",
    "q": "Akun yang ditutup pada akhir periode adalah...",
    "options": [
      "Cash dan Equipment",
      "Share Capital dan Bonds Payable",
      "Revenues, expenses, dan dividends",
      "Land dan Buildings"
    ],
    "answer": 2,
    "explanation": "Temporary accounts seperti revenues, expenses, dan dividends ditutup ke equity/retained earnings."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Worksheet purpose",
    "difficulty": "basic",
    "q": "Fungsi utama worksheet 10 kolom adalah...",
    "options": [
      "Menggantikan general ledger secara permanen",
      "Membantu proses adjustment dan penyusunan laporan keuangan",
      "Menghapus kebutuhan jurnal penyesuaian",
      "Menentukan harga saham perusahaan"
    ],
    "answer": 1,
    "explanation": "Worksheet adalah alat bantu untuk mengorganisasi trial balance, adjustments, adjusted trial balance, income statement, dan financial position."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Error correction",
    "difficulty": "medium",
    "q": "Jika revenue Rp5.000.000 belum dicatat sama sekali, dampaknya sebelum koreksi adalah...",
    "options": [
      "Aset dan income overstated",
      "Aset dan income understated",
      "Liabilitas dan expense understated",
      "Equity dan expense overstated"
    ],
    "answer": 1,
    "explanation": "Revenue yang belum dicatat biasanya menyebabkan receivable/cash dan income understated."
  },
  {
    "topic": "Revenue Recognition",
    "skill": "Five-step model dalam kasus kontrak campuran",
    "difficulty": "advanced",
    "q": "PT Aruna menandatangani kontrak Rp120.000.000 untuk menyerahkan mesin dan instalasi. Mesin dapat digunakan tanpa instalasi khusus, tetapi instalasi dijual terpisah oleh penyedia lain. Langkah awal yang paling tepat sebelum mengakui revenue adalah...",
    "options": [
      "Mengakui seluruh Rp120.000.000 saat kontrak ditandatangani",
      "Mengidentifikasi kontrak, performance obligation, dan transaction price sebelum menentukan waktu pengakuan revenue",
      "Menunda semua revenue sampai kas diterima penuh",
      "Mengakui revenue sebesar biaya produksi karena barang sudah selesai dibuat"
    ],
    "answer": 1,
    "explanation": "Pada model lima langkah, entitas harus mengidentifikasi kontrak dan performance obligation, menentukan transaction price, mengalokasikan harga, lalu mengakui revenue ketika control dialihkan."
  },
  {
    "topic": "Revenue Recognition",
    "skill": "Distinct performance obligation",
    "difficulty": "advanced",
    "q": "Kontrak software Rp90.000.000 mencakup lisensi yang dapat langsung digunakan dan jasa update wajib selama 1 tahun. Jika lisensi dan update memberi manfaat berbeda bagi pelanggan, simpulan paling tepat adalah...",
    "options": [
      "Seluruh kontrak selalu satu performance obligation",
      "Lisensi dan update dapat menjadi performance obligations terpisah jika masing-masing distinct",
      "Revenue lisensi tidak boleh diakui karena ada jasa update",
      "Update wajib selalu dicatat sebagai expense saja tanpa revenue"
    ],
    "answer": 1,
    "explanation": "Performance obligation terpisah bila barang/jasa distinct dan pelanggan dapat memperoleh manfaat dari masing-masing komponen secara terpisah atau bersama sumber daya lain yang tersedia."
  },
  {
    "topic": "Revenue Recognition",
    "skill": "Transaction price",
    "difficulty": "medium",
    "q": "Barang dijual Rp100.000.000 dengan expected rebate Rp6.000.000. Transaction price yang digunakan adalah...",
    "options": [
      "Rp94.000.000",
      "Rp100.000.000",
      "Rp106.000.000",
      "Rp6.000.000"
    ],
    "answer": 0,
    "explanation": "Transaction price mempertimbangkan variable consideration seperti rebate yang diperkirakan."
  },
  {
    "kind": "report-fill",
    "topic": "Revenue Recognition",
    "skill": "Allocate transaction price to performance obligations",
    "difficulty": "advanced",
    "q": "Kontrak berisi Produk A standalone selling price Rp60.000.000 dan Produk B Rp40.000.000. Harga kontrak total Rp90.000.000.",
    "instruction": "Alokasikan transaction price berdasarkan relative standalone selling price.",
    "blanks": [
      {
        "id": "uts-sim-rev-alloc-a",
        "label": "Allocation to Product A",
        "answer": 54000000,
        "prefix": "Rp"
      },
      {
        "id": "uts-sim-rev-alloc-b",
        "label": "Allocation to Product B",
        "answer": 36000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Total standalone price = 100.000.000. Produk A mendapat 60% × 90.000.000 = 54.000.000; Produk B mendapat 40% × 90.000.000 = 36.000.000."
  },
  {
    "topic": "Revenue Recognition",
    "skill": "Revenue recognized when control transfers",
    "difficulty": "advanced",
    "q": "PT Bima menerima uang muka Rp75.000.000 untuk barang yang baru akan dikirim bulan depan. Pada tanggal penerimaan kas, perlakuan yang paling tepat adalah...",
    "options": [
      "Debit Cash; kredit Sales Revenue karena kas sudah diterima",
      "Debit Cash; kredit Contract Liability/Unearned Revenue karena control belum berpindah",
      "Debit Accounts Receivable; kredit Sales Revenue karena kontrak sudah ada",
      "Tidak ada jurnal karena barang belum dikirim"
    ],
    "answer": 1,
    "explanation": "Penerimaan kas sebelum performance obligation dipenuhi dicatat sebagai liability. Revenue baru diakui ketika control barang/jasa dialihkan kepada pelanggan."
  },
  {
    "topic": "Income Statement",
    "skill": "Gross profit",
    "difficulty": "basic",
    "q": "Sales revenue Rp500.000.000 dan cost of goods sold Rp320.000.000. Gross profit adalah...",
    "options": [
      "Rp180.000.000",
      "Rp320.000.000",
      "Rp500.000.000",
      "Rp820.000.000"
    ],
    "answer": 0,
    "explanation": "Gross profit = Sales revenue − Cost of goods sold = 180.000.000."
  },
  {
    "topic": "Income Statement",
    "skill": "Income from operations",
    "difficulty": "medium",
    "q": "Gross profit Rp180.000.000, selling expense Rp40.000.000, administrative expense Rp25.000.000. Income from operations adalah...",
    "options": [
      "Rp115.000.000",
      "Rp155.000.000",
      "Rp180.000.000",
      "Rp245.000.000"
    ],
    "answer": 0,
    "explanation": "Income from operations = 180.000.000 − 40.000.000 − 25.000.000 = 115.000.000."
  },
  {
    "topic": "Income Statement",
    "skill": "Discontinued operation",
    "difficulty": "basic",
    "q": "Discontinued operation disajikan...",
    "options": [
      "Sebelum gross profit",
      "Setelah income from continuing operations dan net of tax",
      "Sebagai retained earnings langsung tanpa income statement",
      "Sebagai current liability"
    ],
    "answer": 1,
    "explanation": "Discontinued operation dilaporkan terpisah setelah continuing operations dan net of tax."
  },
  {
    "kind": "multi-select",
    "topic": "Income Statement",
    "skill": "OCI and FVOCI/non-trading equity securities",
    "difficulty": "advanced",
    "q": "Entitas memiliki investasi equity yang diklasifikasikan non-trading/FVOCI. Pilih perlakuan yang benar ketika terjadi unrealized holding gain/loss.",
    "options": [
      "Unrealized holding gain/loss disajikan sebagai OCI, bukan bagian dari income from operations.",
      "OCI memengaruhi comprehensive income.",
      "Net income dan comprehensive income dapat berbeda karena adanya OCI.",
      "Unrealized holding gain/loss FVOCI selalu dicatat sebagai sales revenue."
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "FVOCI/non-trading equity securities menyebabkan unrealized holding gain/loss masuk OCI, sehingga comprehensive income dapat berbeda dari net income."
  },
  {
    "topic": "Income Statement",
    "skill": "EPS",
    "difficulty": "medium",
    "q": "Net income Rp240.000.000 dan weighted-average ordinary shares 120.000 lembar. Basic EPS adalah...",
    "options": [
      "Rp500",
      "Rp1.200",
      "Rp2.000",
      "Rp2.400"
    ],
    "answer": 2,
    "explanation": "Basic EPS = net income / weighted-average shares = 240.000.000 / 120.000 = 2.000 per share."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Current assets",
    "difficulty": "basic",
    "q": "Manakah yang paling tepat diklasifikasikan sebagai current asset?",
    "options": [
      "Land held for long-term use",
      "Inventory yang diharapkan dijual dalam siklus operasi normal",
      "Bonds payable jatuh tempo lima tahun",
      "Share capital ordinary"
    ],
    "answer": 1,
    "explanation": "Inventory yang akan direalisasi dalam siklus operasi normal diklasifikasikan sebagai current asset."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Non-current assets",
    "difficulty": "basic",
    "q": "Patent yang memberikan manfaat selama beberapa tahun biasanya dilaporkan sebagai...",
    "options": [
      "Current liability",
      "Intangible non-current asset",
      "Equity",
      "Cash equivalent"
    ],
    "answer": 1,
    "explanation": "Patent adalah intangible asset dan biasanya non-current jika manfaatnya lebih dari satu periode."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Current liabilities",
    "difficulty": "basic",
    "q": "Utang usaha yang akan dibayar dalam 30 hari dilaporkan sebagai...",
    "options": [
      "Current liability",
      "Non-current asset",
      "Share premium",
      "Other comprehensive income"
    ],
    "answer": 0,
    "explanation": "Accounts payable yang jatuh tempo dalam siklus operasi normal diklasifikasikan sebagai current liability."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Working capital",
    "difficulty": "medium",
    "q": "Current assets Rp270.000.000 dan current liabilities Rp160.000.000. Working capital adalah...",
    "options": [
      "Rp110.000.000",
      "Rp160.000.000",
      "Rp270.000.000",
      "Rp430.000.000"
    ],
    "answer": 0,
    "explanation": "Working capital = current assets − current liabilities = 110.000.000."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Current ratio",
    "difficulty": "medium",
    "q": "Current assets Rp300.000.000 dan current liabilities Rp120.000.000. Current ratio adalah...",
    "options": [
      "0,40 : 1",
      "1,50 : 1",
      "2,50 : 1",
      "3,50 : 1"
    ],
    "answer": 2,
    "explanation": "Current ratio = 300.000.000/120.000.000 = 2,5 : 1."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Contra asset",
    "difficulty": "basic",
    "q": "Accumulated Depreciation—Equipment dilaporkan sebagai...",
    "options": [
      "Contra asset yang mengurangi equipment",
      "Revenue akun",
      "Current liability",
      "Share capital"
    ],
    "answer": 0,
    "explanation": "Accumulated depreciation adalah contra asset yang mengurangi carrying amount aset tetap terkait."
  },
  {
    "kind": "report-fill",
    "topic": "Statement of Financial Position",
    "skill": "Retained earnings roll-forward",
    "difficulty": "medium",
    "q": "Retained earnings awal Rp80.000.000, net income Rp35.000.000, dan dividends Rp12.000.000.",
    "instruction": "Hitung retained earnings akhir.",
    "blanks": [
      {
        "id": "uts-sim-re-ending",
        "label": "Retained earnings ending",
        "answer": 103000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Retained earnings akhir = 80.000.000 + 35.000.000 − 12.000.000 = 103.000.000."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Classified statement",
    "difficulty": "basic",
    "q": "Classified statement of financial position membantu pengguna dengan cara...",
    "options": [
      "Mengelompokkan aset dan liabilitas menjadi current dan non-current",
      "Menghapus notes atas laporan keuangan",
      "Menyajikan hanya akun kas",
      "Mengganti income statement"
    ],
    "answer": 0,
    "explanation": "Klasifikasi current/non-current meningkatkan analisis likuiditas dan struktur keuangan."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Operating activity",
    "difficulty": "basic",
    "q": "Penerimaan kas dari pelanggan diklasifikasikan sebagai...",
    "options": [
      "Operating activity",
      "Investing activity",
      "Financing activity",
      "Noncash disclosure"
    ],
    "answer": 0,
    "explanation": "Cash received from customers berasal dari operasi utama entitas."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Investing activity",
    "difficulty": "basic",
    "q": "Pembelian equipment secara tunai diklasifikasikan sebagai...",
    "options": [
      "Operating activity",
      "Investing activity",
      "Financing activity",
      "OCI"
    ],
    "answer": 1,
    "explanation": "Pembelian aset jangka panjang merupakan investing cash outflow."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Financing activity",
    "difficulty": "basic",
    "q": "Penerbitan bonds payable secara tunai diklasifikasikan sebagai...",
    "options": [
      "Operating activity",
      "Investing activity",
      "Financing activity",
      "Cost of goods sold"
    ],
    "answer": 2,
    "explanation": "Penerbitan obligasi menghasilkan kas dari kegiatan pendanaan."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Noncash activity",
    "difficulty": "basic",
    "q": "Pembelian equipment dengan menerbitkan saham biasa harus...",
    "options": [
      "Masuk operating cash inflow",
      "Masuk investing cash outflow",
      "Diungkapkan sebagai aktivitas nonkas material",
      "Tidak pernah dilaporkan"
    ],
    "answer": 2,
    "explanation": "Transaksi investing/financing nonkas signifikan tidak masuk arus kas, tetapi diungkapkan."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Indirect method depreciation",
    "difficulty": "medium",
    "q": "Dalam metode tidak langsung, depreciation expense diperlakukan sebagai...",
    "options": [
      "Dikurangkan dari net income karena cash outflow",
      "Ditambahkan kembali ke net income karena noncash expense",
      "Masuk investing activity",
      "Masuk financing activity"
    ],
    "answer": 1,
    "explanation": "Depresiasi mengurangi laba tanpa mengurangi kas, sehingga ditambahkan kembali."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Accounts receivable change",
    "difficulty": "medium",
    "q": "Dalam metode tidak langsung, kenaikan accounts receivable selama periode berarti...",
    "options": [
      "Ditambahkan ke net income",
      "Dikurangkan dari net income",
      "Masuk financing activity",
      "Tidak berdampak pada CFO"
    ],
    "answer": 1,
    "explanation": "Kenaikan receivables berarti sebagian revenue belum diterima kas, sehingga dikurangkan dari net income."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Accounts payable change",
    "difficulty": "medium",
    "q": "Dalam metode tidak langsung, kenaikan accounts payable berarti...",
    "options": [
      "Ditambahkan ke net income",
      "Dikurangkan dari net income",
      "Selalu investing outflow",
      "Selalu financing inflow"
    ],
    "answer": 0,
    "explanation": "Kenaikan payables menunjukkan beban/pembelian belum dibayar kas, sehingga menambah CFO."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Gain on sale adjustment",
    "difficulty": "medium",
    "q": "Equipment dijual dengan gain Rp7.000.000. Dalam CFO metode tidak langsung, gain tersebut...",
    "options": [
      "Ditambahkan ke net income",
      "Dikurangkan dari net income",
      "Diabaikan sepenuhnya",
      "Dimasukkan sebagai dividend"
    ],
    "answer": 1,
    "explanation": "Gain sudah termasuk net income tetapi arus kas penjualan aset adalah investing; gain dikurangkan dari CFO."
  },
  {
    "kind": "report-fill",
    "topic": "Statement of Cash Flows",
    "skill": "CFO indirect method computation",
    "difficulty": "advanced",
    "q": "Net income Rp90.000.000; depreciation Rp15.000.000; accounts receivable naik Rp8.000.000; inventory turun Rp5.000.000; accounts payable naik Rp6.000.000.",
    "instruction": "Hitung cash flows from operating activities dengan metode tidak langsung.",
    "blanks": [
      {
        "id": "uts-sim-cfo-indirect",
        "label": "Cash flows from operating activities",
        "answer": 108000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "CFO = 90.000.000 + 15.000.000 − 8.000.000 + 5.000.000 + 6.000.000 = 108.000.000."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Direct vs indirect",
    "difficulty": "basic",
    "q": "Perbedaan utama direct dan indirect method pada statement of cash flows terletak pada...",
    "options": [
      "Penyajian operating activities",
      "Penyajian investing activities saja",
      "Penyajian financing activities saja",
      "Tidak ada perbedaan sama sekali"
    ],
    "answer": 0,
    "explanation": "Direct dan indirect method berbeda pada bagian operating activities; investing dan financing umumnya sama."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Future value single sum",
    "difficulty": "medium",
    "q": "Uang Rp10.000.000 diinvestasikan 3 tahun pada 10% per tahun. Jika FV factor 10%, 3 tahun = 1,331, nilai masa depan adalah...",
    "options": [
      "Rp7.513.000",
      "Rp10.000.000",
      "Rp13.310.000",
      "Rp30.000.000"
    ],
    "answer": 2,
    "explanation": "FV = 10.000.000 × 1,331 = 13.310.000."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Present value single sum",
    "difficulty": "medium",
    "q": "Perusahaan akan menerima Rp50.000.000 tiga tahun lagi. Jika PV factor 8%, 3 tahun = 0,7938, present value adalah...",
    "options": [
      "Rp39.690.000",
      "Rp46.000.000",
      "Rp50.000.000",
      "Rp62.989.000"
    ],
    "answer": 0,
    "explanation": "PV = 50.000.000 × 0,7938 = 39.690.000."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Ordinary annuity",
    "difficulty": "medium",
    "q": "Setoran akhir tahun Rp5.000.000 selama 4 tahun pada 8%. Jika FV ordinary annuity factor = 4,5061, future value adalah...",
    "options": [
      "Rp18.385.000",
      "Rp20.000.000",
      "Rp22.530.500",
      "Rp25.000.000"
    ],
    "answer": 2,
    "explanation": "FV ordinary annuity = 5.000.000 × 4,5061 = 22.530.500."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Present value annuity",
    "difficulty": "medium",
    "q": "Pembayaran akhir tahun Rp12.000.000 selama 5 tahun didiskontokan 10%. Jika PV ordinary annuity factor = 3,7908, present value adalah...",
    "options": [
      "Rp31.656.000",
      "Rp45.489.600",
      "Rp60.000.000",
      "Rp75.000.000"
    ],
    "answer": 1,
    "explanation": "PV ordinary annuity = 12.000.000 × 3,7908 = 45.489.600."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Annuity due",
    "difficulty": "advanced",
    "q": "Mengapa annuity due bernilai lebih besar daripada ordinary annuity dengan jumlah, tingkat bunga, dan periode yang sama?",
    "options": [
      "Karena pembayaran annuity due terjadi di akhir periode",
      "Karena setiap pembayaran annuity due menerima satu periode bunga tambahan",
      "Karena annuity due tidak didiskontokan",
      "Karena ordinary annuity tidak memiliki bunga"
    ],
    "answer": 1,
    "explanation": "Annuity due dibayar di awal periode sehingga setiap pembayaran memiliki satu periode compounding/discounting lebih sedikit dibanding ordinary annuity."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Effective annual rate",
    "difficulty": "medium",
    "q": "Jika bunga nominal 12% dikompon semiannual, tingkat bunga per periode adalah...",
    "options": [
      "6% per semiannual period",
      "12% per semiannual period",
      "24% per semiannual period",
      "3% per semiannual period"
    ],
    "answer": 0,
    "explanation": "Nominal rate dibagi jumlah periode compounding: 12%/2 = 6% per semiannual period."
  },
  {
    "kind": "report-fill",
    "topic": "Time Value of Money",
    "skill": "Bond pricing using PV of principal and interest annuity",
    "difficulty": "advanced",
    "q": "Obligasi face Rp100.000.000, stated rate 10% dibayar tahunan, jatuh tempo 3 tahun, market rate 12%. PV factor 12%, 3 tahun = 0,7118; PV ordinary annuity factor 12%, 3 tahun = 2,4018.",
    "instruction": "Hitung present value principal, present value interest annuity, dan issue price.",
    "blanks": [
      {
        "id": "uts-sim-bond-pv-principal",
        "label": "PV principal",
        "answer": 71180000,
        "prefix": "Rp"
      },
      {
        "id": "uts-sim-bond-pv-interest",
        "label": "PV interest annuity",
        "answer": 24018000,
        "prefix": "Rp"
      },
      {
        "id": "uts-sim-bond-price",
        "label": "Issue price",
        "answer": 95198000,
        "prefix": "Rp"
      }
    ],
    "explanation": "PV principal = 100.000.000 × 0,7118 = 71.180.000. Cash interest = 10.000.000; PV interest = 10.000.000 × 2,4018 = 24.018.000. Issue price = 95.198.000."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Bond discount",
    "difficulty": "medium",
    "q": "Obligasi diterbitkan pada discount ketika...",
    "options": [
      "Stated rate lebih tinggi dari market rate",
      "Stated rate sama dengan market rate",
      "Stated rate lebih rendah dari market rate",
      "Face value lebih rendah dari cash interest"
    ],
    "answer": 2,
    "explanation": "Jika stated rate lebih rendah dari market rate, investor membayar kurang dari face value sehingga obligasi diterbitkan pada discount."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Bond premium",
    "difficulty": "medium",
    "q": "Obligasi diterbitkan pada premium ketika...",
    "options": [
      "Stated rate lebih tinggi dari market rate",
      "Stated rate lebih rendah dari market rate",
      "Tidak membayar bunga",
      "Jatuh tempo kurang dari satu bulan"
    ],
    "answer": 0,
    "explanation": "Kupon yang lebih tinggi dari market yield membuat investor bersedia membayar lebih dari face value."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Interest component",
    "difficulty": "medium",
    "q": "Bonds face Rp200.000.000, stated rate 9%, bunga dibayar semiannual. Cash interest setiap semester adalah...",
    "options": [
      "Rp9.000.000",
      "Rp18.000.000",
      "Rp4.500.000",
      "Rp90.000.000"
    ],
    "answer": 0,
    "explanation": "Cash interest semiannual = 200.000.000 × 9% × 6/12 = 9.000.000."
  },
  {
    "topic": "Time Value of Money",
    "skill": "PV concept",
    "difficulty": "basic",
    "q": "Dalam time value of money, discounting berarti...",
    "options": [
      "Mengubah nilai saat ini menjadi nilai masa depan",
      "Mengubah nilai masa depan menjadi nilai saat ini",
      "Menghapus bunga dari jurnal",
      "Menjumlahkan semua pembayaran tanpa bunga"
    ],
    "answer": 1,
    "explanation": "Discounting menghitung present value dari jumlah yang diterima/dibayar di masa depan."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Choosing table factor",
    "difficulty": "medium",
    "q": "Untuk menghitung present value dari serangkaian pembayaran sama besar setiap akhir tahun, faktor yang paling tepat adalah...",
    "options": [
      "Future value of 1",
      "Present value of 1",
      "Present value of an ordinary annuity",
      "Future value of an annuity due only"
    ],
    "answer": 2,
    "explanation": "Pembayaran sama besar setiap akhir periode menggunakan present value of an ordinary annuity."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Adjusting entry omission",
    "difficulty": "medium",
    "q": "Jika accrued salaries Rp2.500.000 tidak dicatat, dampak sebelum koreksi adalah...",
    "options": [
      "Expense understated dan liabilities understated",
      "Expense overstated dan liabilities overstated",
      "Revenue understated dan assets understated",
      "Assets overstated dan revenue overstated"
    ],
    "answer": 0,
    "explanation": "Tidak mencatat accrued salaries menyebabkan salaries expense dan salaries payable sama-sama understated."
  },
  {
    "topic": "Accounting Information System",
    "skill": "Prepaid account after adjustment",
    "difficulty": "medium",
    "q": "Prepaid rent awal Rp18.000.000 untuk 6 bulan. Setelah 2 bulan berlalu, saldo Prepaid Rent yang tersisa adalah...",
    "options": [
      "Rp6.000.000",
      "Rp12.000.000",
      "Rp18.000.000",
      "Rp24.000.000"
    ],
    "answer": 1,
    "explanation": "Beban 2/6 × 18.000.000 = 6.000.000, sehingga prepaid tersisa 12.000.000."
  },
  {
    "topic": "Income Statement",
    "skill": "Quality of earnings dan sustainable income",
    "difficulty": "advanced",
    "q": "Manajemen menaikkan laba tahun berjalan dengan menunda pengakuan expense yang seharusnya sudah terjadi dan mempercepat revenue yang belum memenuhi performance obligation. Dampak utama terhadap kualitas laba adalah...",
    "options": [
      "Kualitas laba meningkat karena net income lebih besar",
      "Kualitas laba menurun karena income kurang merepresentasikan kinerja yang berkelanjutan dan faithful",
      "Tidak ada dampak karena total kas belum berubah",
      "Laba menjadi lebih comparable karena semua akun revenue naik"
    ],
    "answer": 1,
    "explanation": "Quality of earnings menurun ketika laba didorong oleh timing agresif atau estimasi yang tidak faithful. Ujian AKM sering menguji substansi, bukan hanya angka laba."
  },
  {
    "topic": "Income Statement",
    "skill": "Single-step vs multiple-step income statement",
    "difficulty": "medium",
    "q": "PT Cakra ingin menonjolkan gross profit, income from operations, dan pemisahan other income/expense. Format income statement yang paling informatif untuk tujuan tersebut adalah...",
    "options": [
      "Single-step income statement",
      "Multiple-step income statement",
      "Statement of financial position",
      "Statement of changes in equity saja"
    ],
    "answer": 1,
    "explanation": "Multiple-step income statement menyajikan subtotal seperti gross profit dan income from operations sehingga lebih sesuai untuk analisis kinerja operasional."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Current asset ordering dan liquidity",
    "difficulty": "advanced",
    "q": "Dalam classified statement of financial position, urutan current assets umumnya mengikuti tingkat likuiditas. Urutan yang paling tepat adalah...",
    "options": [
      "Inventory, prepaid expenses, cash, accounts receivable",
      "Cash, accounts receivable, inventory, prepaid expenses",
      "Prepaid expenses, inventory, cash, accounts receivable",
      "Accounts receivable, cash, prepaid expenses, inventory"
    ],
    "answer": 1,
    "explanation": "Current assets lazim disajikan berdasarkan likuiditas: cash, receivables, inventory, lalu prepaid expenses."
  },
  {
    "topic": "Statement of Financial Position",
    "skill": "Debt to assets ratio interpretation",
    "difficulty": "advanced",
    "q": "Total liabilities PT Dahana Rp360.000.000 dan total assets Rp900.000.000. Interpretasi debt to assets ratio yang paling tepat adalah...",
    "options": [
      "40% aset dibiayai oleh kreditor",
      "40% aset dibiayai oleh laba tahun berjalan",
      "60% aset dibiayai oleh liabilitas",
      "Rasio ini mengukur gross profit margin"
    ],
    "answer": 0,
    "explanation": "Debt to assets ratio = total liabilities / total assets = 360.000.000 / 900.000.000 = 40%. Rasio ini mengukur proporsi aset yang dibiayai kreditor."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Loss on sale adjustment",
    "difficulty": "medium",
    "q": "Dalam metode tidak langsung, loss on sale of equipment diperlakukan sebagai...",
    "options": [
      "Dikurangkan dari net income",
      "Ditambahkan kembali ke net income",
      "Dimasukkan sebagai financing outflow",
      "Tidak boleh muncul dalam rekonsiliasi CFO"
    ],
    "answer": 1,
    "explanation": "Loss sudah menurunkan net income tetapi arus kas penjualan aset diklasifikasikan sebagai investing; loss ditambahkan kembali pada CFO."
  },
  {
    "topic": "Statement of Cash Flows",
    "skill": "Inventory change",
    "difficulty": "medium",
    "q": "Dalam metode tidak langsung, kenaikan inventory selama periode biasanya...",
    "options": [
      "Ditambahkan ke net income",
      "Dikurangkan dari net income",
      "Tidak memengaruhi operating cash flow",
      "Selalu financing activity"
    ],
    "answer": 1,
    "explanation": "Kenaikan inventory berarti kas/utang digunakan untuk membeli persediaan yang belum menjadi COGS, sehingga mengurangi CFO."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Present value of bond principal",
    "difficulty": "advanced",
    "q": "Face value obligasi Rp100.000.000 jatuh tempo 4 tahun lagi. Jika PV factor 9%, 4 tahun = 0,7084, present value principal adalah...",
    "options": [
      "Rp70.840.000",
      "Rp91.600.000",
      "Rp100.000.000",
      "Rp141.163.000"
    ],
    "answer": 0,
    "explanation": "PV principal = face value × PV factor = 100.000.000 × 0,7084 = 70.840.000."
  },
  {
    "topic": "Time Value of Money",
    "skill": "Present value of bond interest annuity",
    "difficulty": "advanced",
    "q": "Bunga obligasi tahunan Rp8.000.000 selama 4 tahun. Jika PV ordinary annuity factor 9%, 4 tahun = 3,2397, present value interest adalah...",
    "options": [
      "Rp24.000.000",
      "Rp25.917.600",
      "Rp32.000.000",
      "Rp35.239.700"
    ],
    "answer": 1,
    "explanation": "PV interest = 8.000.000 × 3,2397 = 25.917.600. Nilai obligasi biasanya merupakan PV principal + PV interest."
  }
];
