import type { Reading } from '../../../types';

// Skema belajar dari Problem 1, Richardson 4e halaman buku 207; bukan gambar terbitan.
const STARBUCKS_FLOW = `<svg class="course-diagram-svg course-diagram-bpmn" viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <rect x="2" y="2" width="1196" height="356" rx="16" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="22" y="30" font-size="18" font-weight="700" fill="#0f172a">Starbucks Drive-Through — alur dasar pada soal buku</text>
  <line x1="790" y1="25" x2="824" y2="25" stroke="#0369a1" stroke-width="3"/><polygon points="830,25 822,20 822,30" fill="#0369a1"/><text x="840" y="30" font-size="13" fill="#334155">sequence flow</text>
  <path d="M970 25 h8 m5 0 h8 m5 0 h8" fill="none" stroke="#b45309" stroke-width="3"/><polygon points="1010,25 1002,20 1002,30" fill="#b45309"/><text x="1020" y="30" font-size="13" fill="#334155">message flow</text>
  <rect x="18" y="50" width="1164" height="118" rx="12" fill="#fff7ed" stroke="#fdba74" stroke-width="2"/>
  <text x="32" y="72" font-size="15" font-weight="700" fill="#9a3412">Pool Customer</text>
  <rect x="18" y="182" width="1164" height="158" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
  <text x="32" y="204" font-size="15" font-weight="700" fill="#1e3a8a">Pool Starbucks · lane Barista</text>
  <g fill="#fff" stroke="#cbd5e1" stroke-width="1.5">
    <rect x="48" y="100" width="145" height="47" rx="8"/><rect x="236" y="100" width="145" height="47" rx="8"/><rect x="424" y="100" width="145" height="47" rx="8"/><rect x="612" y="100" width="145" height="47" rx="8"/><rect x="800" y="100" width="145" height="47" rx="8"/><rect x="988" y="100" width="145" height="47" rx="8"/>
    <rect x="236" y="245" width="145" height="49" rx="8"/><rect x="424" y="245" width="145" height="49" rx="8"/><rect x="612" y="245" width="145" height="49" rx="8"/><rect x="800" y="245" width="145" height="49" rx="8"/><rect x="988" y="245" width="145" height="49" rx="8"/>
  </g>
  <g fill="#0f172a" font-size="13" font-weight="600" text-anchor="middle">
    <text x="120" y="119"><tspan x="120">Tiba, lihat</tspan><tspan x="120" dy="17">menu</tspan></text>
    <text x="308" y="119"><tspan x="308">Pesan kopi</tspan><tspan x="308" dy="17">dan muffin</tspan></text>
    <text x="496" y="128">Ke jendela</text><text x="684" y="119"><tspan x="684">Terima kopi</tspan><tspan x="684" dy="17">dan muffin</tspan></text><text x="872" y="119"><tspan x="872">Bayar dengan</tspan><tspan x="872" dy="17">gift card</tspan></text><text x="1060" y="119"><tspan x="1060">Terima kartu</tspan><tspan x="1060" dy="17">dan struk</tspan></text>
    <text x="308" y="264"><tspan x="308">Catat pesanan</tspan><tspan x="308" dy="17">di kasir</tspan></text><text x="496" y="264"><tspan x="496">Siapkan kopi</tspan><tspan x="496" dy="17">dan muffin</tspan></text><text x="684" y="264"><tspan x="684">Serahkan</tspan><tspan x="684" dy="17">pesanan</tspan></text><text x="872" y="264"><tspan x="872">Catat</tspan><tspan x="872" dy="17">pembayaran</tspan></text><text x="1060" y="264"><tspan x="1060">Kembalikan</tspan><tspan x="1060" dy="17">kartu, struk</tspan></text>
  </g>
  <g fill="none" stroke="#0369a1" stroke-width="2.5">
    <path d="M193 123 H225 M381 123 H413 M569 123 H601 M757 123 H789 M945 123 H977"/>
    <path d="M381 269 H413 M569 269 H601 M757 269 H789 M945 269 H977"/>
  </g>
  <g fill="#0369a1">
    <polygon points="231,123 223,118 223,128"/><polygon points="419,123 411,118 411,128"/><polygon points="607,123 599,118 599,128"/><polygon points="795,123 787,118 787,128"/><polygon points="983,123 975,118 975,128"/>
    <polygon points="419,269 411,264 411,274"/><polygon points="607,269 599,264 599,274"/><polygon points="795,269 787,264 787,274"/><polygon points="983,269 975,264 975,274"/>
  </g>
  <g fill="none" stroke="#b45309" stroke-width="2.5">
    <path d="M308 150 v8 M308 164 v8 M308 178 v8 M308 192 v8 M308 206 v8 M308 220 v8 M308 234 v5"/>
    <path d="M684 237 v-8 M684 223 v-8 M684 209 v-8 M684 195 v-8 M684 181 v-8 M684 167 v-8 M684 153 v-5"/>
    <path d="M872 150 v8 M872 164 v8 M872 178 v8 M872 192 v8 M872 206 v8 M872 220 v8 M872 234 v5"/>
    <path d="M1060 237 v-8 M1060 223 v-8 M1060 209 v-8 M1060 195 v-8 M1060 181 v-8 M1060 167 v-8 M1060 153 v-5"/>
  </g>
  <g fill="#b45309"><polygon points="308,244 303,236 313,236"/><polygon points="684,148 679,156 689,156"/><polygon points="872,244 867,236 877,236"/><polygon points="1060,148 1055,156 1065,156"/></g>
  <text x="600" y="324" font-size="12" text-anchor="middle" fill="#475569">Panah utuh berada dalam pool; panah putus-putus melintasi batas Customer–Starbucks.</text>
</svg>`;

export const SIA_TM3: Reading = {
  tm: 3,
  title: 'Accountants as Business Analysts',
  ref: 'Richardson, Chang & Smith, AIS 4e ISE · Ch. 4, pp. 174–209',
  intro: 'Akuntan modern tidak hanya mencatat transaksi, tetapi juga memetakan, mengevaluasi, dan merancang ulang proses bisnis. Ikuti alur dari peran dan kerangka kompetensi, kewajiban dokumentasi, notasi BPMN 2.0, flowchart dan DFD, hingga perbandingan teknik serta pemetaan pengendalian internal.',
  objectives: [
    'Menjelaskan pergeseran peran akuntan dari stewardship ke business analyst beserta kerangka IMA, CGMA, IFAC, dan CPA Evolution.',
    'Menghubungkan dokumentasi proses bisnis dengan SOX Section 404 dan PCAOB AS 2201.',
    'Membaca dan menyusun model BPMN 2.0: event, activity, gateway, token, pool, lane, sequence flow, dan message flow.',
    'Menggunakan flowchart, opportunity flowchart (PCE), dan DFD serta mendeteksi Black Hole, Miracle, dan Gray Hole.',
    'Membandingkan BPMN, flowchart, dan DFD serta memetakan Segregation of Duties pada swimlane.',
  ],
  blocks: [
    { kind: 'h2', text: '1. Changing Roles of Accountants & Professional Competency Frameworks' },
    { kind: 'p', text: 'Secara tradisional fungsi akuntansi berpusat pada **stewardship**: mencatat transaksi historis, memelihara buku besar, menyusun laporan berkala, menghitung pajak, dan mematuhi audit. Digitalisasi, ERP, dan data analytics mengotomatiskan pencatatan rutin sehingga akuntan bergeser menjadi **business analyst** dan penasihat strategis. Richardson 4e, pp. 176–177.' },
    { kind: 'ol', items: [
      'Menganalisis pemicu operasional, administratif, dan ekonomi atas biaya dan pendapatan.',
      'Memetakan, mengevaluasi, dan merekayasa ulang proses bisnis untuk meningkatkan efisiensi siklus.',
      'Merancang dan menerapkan Internal Control over Financial Reporting (ICFR).',
      'Menyusun kebutuhan bisnis teknis bagi spesialis TI dan perancang database.',
    ] },
    { kind: 'table', headers: ['Tingkat operasional', 'Cakupan'], rows: [
      ['Stewardship and Reporting', 'Kepatuhan statutori, pelaporan regulator (SEC, OJK, DJP), akuntansi keuangan.'],
      ['Accounting/Finance Operations', 'Eksekusi siklus transaksi: Procure-to-Pay, Order-to-Cash, Record-to-Report, Payroll, Treasury.'],
      ['Business Management Support', 'Informasi manajemen, analitik kinerja operasi, pengurangan biaya strategis, capital budgeting, process reengineering.'],
    ], caption: 'Richardson 4e, pp. 176–177; Exhibit 4.1.' },
    { kind: 'h3', text: 'Kerangka kompetensi IMA dan CGMA' },
    { kind: 'table', headers: ['Domain IMA', 'Fokus'], rows: [
      ['Strategy, Planning & Performance', 'Arah strategis, budgeting, penetapan target, analisis varians, perencanaan jangka panjang.'],
      ['Reporting & Control', 'Kepatuhan regulasi dan standar akuntansi; merancang dan mengevaluasi pengendalian internal.'],
      ['Technology & Analytics', 'Navigasi ERP, otomasi proses bisnis, RPA, ekstraksi data, predictive analytics.'],
      ['Business Acumen & Operations', 'Model operasi perusahaan, logistik rantai pasok, lanskap kompetitif, continuous improvement.'],
      ['Leadership', 'Manajemen proyek lintas fungsi, motivasi tim, change management, keselarasan eksekutif.'],
      ['Professional Ethics & Values', 'Prinsip etika, objektivitas, skeptisisme profesional, kerahasiaan.'],
    ], caption: 'Richardson 4e, pp. 176–177; Exhibit 4.3. IMA merumuskan enam domain kompetensi.' },
    { kind: 'table', headers: ['Pilar CGMA', 'Cakupan'], rows: [
      ['Technical Skills', 'Akuntansi keuangan, akuntansi biaya, perpajakan korporat, pengukuran kinerja, kepatuhan.'],
      ['Business Skills', 'Analisis strategis, analisis pasar, manajemen proses, manajemen risiko.'],
      ['People Skills', 'Komunikasi efektif, negosiasi, pengaruh, membangun konsensus pemangku kepentingan.'],
      ['Leadership Skills', 'Visi strategis, manajemen tim organisasi, mendorong transformasi digital.'],
    ], caption: 'Richardson 4e, pp. 177–178; Exhibit 4.4. Dibentuk bersama AICPA dan CIMA; keempat pilar berlandaskan etika, integritas, dan profesionalisme.' },
    { kind: 'h3', text: 'Peran IFAC dalam SIA dan CPA Evolution' },
    { kind: 'table', headers: ['Peran IFAC', 'Aktivitas'], rows: [
      ['User', 'Memasukkan jurnal, memproses invoice pelanggan, menyetujui pembayaran vendor, menarik laporan keuangan, mengoperasikan antarmuka ERP.'],
      ['Manager', 'Mengarahkan operasi akuntansi, merencanakan alur kerja departemen, mengalokasikan staf, meninjau pengendalian internal.'],
      ['Designer', 'Menerjemahkan regulasi dan kebutuhan kontrol menjadi spesifikasi sistem; merancang Chart of Accounts, aturan validasi database, dan alur proses bisnis.'],
      ['Evaluator', 'Menilai kesesuaian sistem dengan tujuan dan regulasi; menguji ICFR, mengaudit IT General Controls (ITGC), menilai pengamanan siber.'],
    ], caption: 'Richardson 4e, p. 178.' },
    { kind: 'ul', items: [
      '**Core (wajib semua kandidat):** Accounting, Auditing, dan Taxation dengan kompetensi teknologi yang terintegrasi di setiap area.',
      '**Pilih satu Discipline Track:** Information Systems and Controls (ISC) — infrastruktur TI, tata kelola, SOC engagement, kontrol sistem; Business Analysis and Reporting (BAR) — data analytics, technical accounting, analisis keuangan; Tax Compliance and Planning (TCP) — perencanaan pajak lanjutan, entitas korporat, teknologi pajak.',
    ] },
    { kind: 'p', text: 'Model **CPA Evolution** AICPA/NASBA memodernisasi struktur lisensi CPA sebagai respons atas perubahan teknologi. Richardson 4e, p. 178.' },

    { kind: 'h2', text: '2. Business Process Documentation Mandates & The Strategic Value of Models' },
    { kind: 'p', text: '**Business process** adalah rangkaian aktivitas dan tugas terkoordinasi yang dijalankan orang, teknologi, dan unit organisasi untuk mengubah input menjadi output yang bernilai ekonomi bagi pelanggan atau pemangku kepentingan. **Business process model** adalah representasi grafis atas aktivitas berurutan, keputusan bisnis, aliran data, dokumen, dan aktor dalam proses tersebut. Richardson 4e, pp. 178–180.' },
    { kind: 'table', headers: ['Siklus transaksi', 'Aktivitas utama'], rows: [
      ['Purchases and Payments (Procure-to-Pay)', 'Permintaan pembelian, pemesanan ke vendor, penerimaan barang, pencatatan invoice, pengeluaran kas.'],
      ['Sales and Collections (Order-to-Cash)', 'Order entry, otorisasi kredit, pengiriman, penagihan pelanggan, penerimaan kas.'],
      ['Human Resources and Payroll', 'Onboarding karyawan, pencatatan waktu, perhitungan gaji, pemotongan, pembayaran.'],
      ['Conversion', 'Pengeluaran bahan baku, pelacakan work-in-process, inspeksi barang jadi, alokasi biaya standar.'],
      ['Financing and Treasury', 'Perolehan modal, pelunasan utang, transaksi ekuitas, pembagian dividen.'],
    ], caption: 'Richardson 4e, pp. 178–179.' },
    { kind: 'table', headers: ['Nilai model proses', 'Manfaat bagi akuntansi dan manajemen'], rows: [
      ['Communication & Training', 'Menyederhanakan alur multi-departemen menjadi narasi visual yang jelas bagi eksekutif, auditor, dan staf garis depan.'],
      ['Process Standardization & Automation', 'Menjadi kebutuhan teknis formal untuk desain ERP dan Robotic Process Automation (RPA).'],
      ['Complexity Management', 'Memungkinkan dekomposisi top-down operasi rumit menjadi subproses modular.'],
      ['Continuous Improvement & BPR', 'Mengungkap bottleneck, gerbang persetujuan berulang, perpindahan kertas berlebihan, dan penundaan yang tidak menambah nilai.'],
    ], caption: 'Richardson 4e, pp. 179–180.' },
    { kind: 'callout', variant: 'key', title: 'SOX Section 404 dan PCAOB AS 2201', text: 'Section 404 Sarbanes-Oxley Act 2002 mewajibkan manajemen dan auditor eksternal independen memberikan atestasi atas desain dan efektivitas operasi **ICFR**. PCAOB AS 2201 mengharuskan auditor melakukan **walkthrough** yang menelusuri transaksi dari awal, melalui catatan perusahaan, hingga laporan keuangan. Tanpa dokumentasi proses yang mutakhir (process map, swimlane diagram, flowchart), manajemen tidak dapat menunjukkan desain kontrol yang efektif sehingga berisiko scope limitation, pengungkapan material weakness, dan ketidakpatuhan. Richardson 4e, pp. 179–180.' },

    { kind: 'h2', text: '3. Activity Modeling with Business Process Model and Notation (BPMN 2.0)' },
    { kind: 'p', text: '**BPMN 2.0** dipelihara oleh Object Management Group (OMG) sebagai standar global pemodelan proses bisnis. Tujuannya menyediakan notasi seragam yang mudah dipahami analis bisnis, pengembang teknis, dan pemangku kepentingan bisnis. Richardson 4e, pp. 180–183.' },
    { kind: 'table', headers: ['Elemen', 'Simbol', 'Fungsi dan aturan eksekusi'], rows: [
      ['Start Event', 'Lingkaran bergaris tipis', 'Menandai dimulainya instance proses dan membuat token awal. Tidak memiliki sequence flow masuk.'],
      ['Intermediate Event', 'Lingkaran bergaris ganda', 'Peristiwa di tengah alur (mis. timer delay, pesan diterima/dikirim); memengaruhi alur tanpa mengakhirinya.'],
      ['End Event', 'Lingkaran bergaris tebal', 'Menandai selesainya instance proses dan mengonsumsi token.'],
      ['Activity (Task)', 'Persegi panjang bersudut bulat', 'Unit kerja oleh aktor atau sistem otomatis. Nama berformat **Active Verb + Noun**, mis. Verify Customer Credit.'],
      ['Subprocess', 'Persegi bersudut bulat dengan tanda [+]', 'Aktivitas yang alur detailnya dimodelkan pada diagram anak terpisah.'],
      ['Sequence Flow', 'Panah garis penuh', 'Urutan eksekusi aktivitas **di dalam satu pool**. Boleh melintasi lane dalam pool yang sama, tetapi tidak pernah melintasi batas pool.'],
      ['Message Flow', 'Panah putus-putus dengan kepala terbuka', 'Komunikasi atau pertukaran dokumen antara **dua partisipan berbeda (pool terpisah)**. Tidak pernah menghubungkan elemen dalam pool yang sama.'],
      ['Association', 'Garis titik-titik', 'Menghubungkan data object, data store, atau anotasi ke aktivitas/event tanpa menyatakan alur eksekusi.'],
    ], caption: 'Richardson 4e, pp. 180–187; Exhibits 4.5–4.6.' },
    { kind: 'h3', text: 'Konsep token dan mekanika eksekusi' },
    { kind: 'ol', items: [
      '**Start Event** membuat token.',
      'Token bergerak melalui sequence flow keluar; activity memproses lalu melepaskan token setelah pekerjaan selesai.',
      'Pada **gateway**, token dirutekan, digandakan, atau disinkronkan.',
      '**End Event** mengonsumsi token yang masuk. Instance proses selesai ketika tidak ada token aktif yang tersisa di diagram.',
    ] },
    { kind: 'p', text: 'Token adalah penanda eksekusi teoretis yang menelusuri sequence flow suatu instance proses. Richardson 4e, p. 181.' },
    { kind: 'h3', text: 'Gateway: logika percabangan' },
    { kind: 'table', headers: ['Gateway', 'Simbol', 'Divergensi (split)', 'Konvergensi (join)'], rows: [
      ['Exclusive (XOR)', 'Diamond kosong atau diamond dengan "X"', 'Mengevaluasi kondisi yang saling eksklusif; tepat **satu** jalur yang kondisinya benar yang dijalankan.', 'Menggabungkan alur alternatif tanpa sinkronisasi; token yang masuk langsung diteruskan.'],
      ['Parallel (AND)', 'Diamond dengan "+"', 'Menggandakan token ke **semua** jalur keluar secara bersamaan.', 'Menunggu token dari **semua** jalur masuk, lalu menggabungkannya menjadi satu token keluar.'],
      ['Inclusive (OR)', 'Diamond dengan "O"', 'Kondisi tidak saling eksklusif; **satu, beberapa, atau semua** jalur yang benar dijalankan.', 'Menyinkronkan hanya cabang yang benar-benar aktif pada instance tersebut.'],
    ], caption: 'Richardson 4e, pp. 180–187; Exhibit 4.7.' },
    { kind: 'h3', text: 'Pool, swimlane, dan aturan batas' },
    { kind: 'table', headers: ['Partisi', 'Makna', 'Contoh'], rows: [
      ['Pool', 'Seluruh entitas organisasi, partisipan eksternal independen, atau entitas korporat berbeda; memuat alur prosesnya sendiri.', 'Customer, Vendor, Bank, Starbucks Corporation.'],
      ['Swimlane (Lane)', 'Departemen, peran, atau unit sistem di dalam satu organisasi (satu pool).', 'Sales, Credit, Warehouse, Billing di dalam pool perusahaan.'],
    ], caption: 'Richardson 4e, pp. 183–187; Exhibit 4.8.' },
    { kind: 'callout', variant: 'warning', title: 'Aturan batas BPMN yang tidak boleh dilanggar', text: '**Aturan 1 — intra-pool:** sequence flow boleh melintasi lane di dalam pool yang sama, tetapi **tidak pernah** melintasi dari satu pool ke pool lain; gunakan message flow antar-pool. **Aturan 2 — inter-pool:** message flow merepresentasikan pertukaran eksternal dan **hanya** menghubungkan pool yang terpisah; message flow **tidak pernah** menghubungkan elemen di dalam pool yang sama; gunakan sequence flow. Richardson 4e, pp. 183–184.' },
    { kind: 'table', headers: ['Elemen data', 'Simbol', 'Makna dan contoh'], rows: [
      ['Data Object', 'Dokumen dengan sudut terlipat', 'Informasi/dokumen yang dibuat, diubah, atau dirujuk selama aktivitas: Sales Order, Vendor Invoice, Paper Receipt.'],
      ['Data Store', 'Ikon silinder database', 'Repositori persisten yang bertahan melampaui umur instance proses: General Ledger Database, Customer Accounts Master.'],
    ], caption: 'Dihubungkan ke aktivitas dengan association titik-titik; arah panah menunjukkan operasi baca atau tulis.' },
    { kind: 'table', headers: ['4V kualitas model', 'Kriteria'], rows: [
      ['Valid', 'Mematuhi sintaks OMG BPMN 2.0, aturan koneksi, dan batasan gateway.'],
      ['Clear', 'Intuitif, tidak berantakan, mengalir logis dari kiri ke kanan, penamaan standar (Active Verb + Noun).'],
      ['Complete', 'Mencakup lingkup end-to-end: inisiasi, hasil keputusan, data store, dan kondisi terminasi.'],
      ['Accurate', 'Mencerminkan alur kerja, kebijakan, dan struktur kontrol yang sebenarnya tanpa penghilangan atau rekaan.'],
    ], caption: 'Richardson 4e, pp. 187–188. Model yang memenuhi 4V dapat menjadi dokumentasi audit dan cetak biru desain teknis.' },
    { kind: 'example', title: 'Starbucks Drive-Through: model proses', blocks: [
      { kind: 'p', text: '**Pool Customer:** partisipan eksternal yang datang, memesan, menerima pesanan, membayar, dan menerima kartu serta struk. **Pool Starbucks:** lane Barista yang mencatat pesanan di kasir, menyiapkan kopi dan muffin, menyerahkan pesanan, lalu mencatat pembayaran. Dasarnya adalah **Problem 1, Richardson 4e, hlm. buku 207**. Exhibit 4.10 pada hlm. 186 membahas jenis gateway, bukan diagram Starbucks.' },
      { kind: 'figure', svg: STARBUCKS_FLOW, altText: 'Skema soal Starbucks drive-through: pool Customer dan pool Starbucks dengan lane Barista. Panah utuh mengurutkan tugas dalam pool; panah putus-putus menunjukkan pertukaran pesanan, barang, pembayaran, serta kartu dan struk antar-pool.', mobileFlow: {
        title: 'Alur Starbucks di layar sempit',
        stages: [
          { actor: 'Customer', actions: ['Tiba dan melihat menu', 'Memesan kopi dan muffin'] },
          { actor: 'Starbucks · Barista', actions: ['Mencatat pesanan di kasir', 'Menyiapkan kopi dan muffin', 'Menyerahkan pesanan'], note: 'Pada waktu yang sama, Customer bergerak ke jendela.' },
          { actor: 'Customer', actions: ['Menerima kopi dan muffin', 'Membayar dengan gift card'] },
          { actor: 'Starbucks · Barista', actions: ['Mencatat pembayaran', 'Mengembalikan gift card dan struk'] },
          { actor: 'Customer', actions: ['Menerima kartu dan struk'] },
        ],
        messages: ['Pesanan dikirim ke barista', 'Kopi dan muffin diserahkan ke customer', 'Pembayaran gift card disampaikan ke barista', 'Kartu dan struk dikembalikan ke customer'],
      }, caption: 'Rekonstruksi alur dasar Problem 1 Richardson 4e hlm. 207; bukan gambar buku. Penyempurnaan loop persiapan tiap item dan cabang menunggu kopi pada bagian (d) soal tidak digambar di skema dasar ini.' },
      { kind: 'ol', items: [
        'Customer masuk drive-through dan melihat menu, lalu memesan Venti coffee of the day dan blueberry muffin kepada barista (**message flow** antar-pool).',
        'Barista mencatat pesanan di cash register (**sequence flow** di pool Starbucks).',
        'Saat customer bergerak ke jendela, barista mengisi cangkir kopi, menutupnya, dan mengambil serta membungkus muffin.',
        'Barista menyerahkan kopi dan muffin kepada customer (**message flow**).',
        'Customer memilih cara bayar; pada narasi buku ia membayar dengan gift card (**message flow**).',
        'Barista mencatat pembayaran dan mengembalikan kartu bersama struk kepada customer (**message flow**).',
        'Proses dasar selesai. Bagian (d) soal meminta pengembangan terpisah untuk loop setiap item serta kondisi kopi belum siap dan timer lima menit.',
      ] },
      { kind: 'p', text: 'Perhatikan: panah utuh di lane Barista menunjukkan sequence flow di dalam pool Starbucks. Pertukaran dengan Customer melintasi batas pool, sehingga memakai message flow. Buku menyebut satu barista pada kasus dasar ini; pemisahan cashier dan barista atau eksekusi paralel bukan fakta dari narasi Problem 1.' },
    ] },

    { kind: 'h2', text: '4. Alternative Process Documentation Techniques' },
    { kind: 'h3', text: 'System dan document flowchart (ANSI X3.5)' },
    { kind: 'table', headers: ['Simbol', 'Bentuk', 'Contoh'], rows: [
      ['Document', 'Persegi panjang dengan dasar bergelombang', 'Purchase Order, Bill of Lading.'],
      ['Manual Operation', 'Trapesium', 'Menandatangani cek secara manual, memeriksa barang.'],
      ['Computer Processing', 'Persegi panjang polos', 'Batch posting ke ledger.'],
      ['Off-Page Connector', 'Pentagon/perisai', 'Alur berlanjut di halaman lain.'],
      ['On-Page Connector', 'Lingkaran kecil berhuruf/berangka', 'Lompatan alur di halaman yang sama.'],
      ['File/Storage', 'Segitiga terbalik', 'N = numerical file, A = alphabetical, C = chronological.'],
    ], caption: 'Richardson 4e, pp. 196–200.' },
    { kind: 'table', headers: ['Jenis flowchart', 'Fokus'], rows: [
      ['Document Flowchart', 'Menelusuri aliran fisik dokumen sumber akuntansi antar-departemen dari awal hingga pengarsipan akhir.'],
      ['System Flowchart', 'Menggambarkan konfigurasi teknologi: input, program komputer, media penyimpanan, dan laporan output.'],
      ['Deployment (Swimlane) Flowchart', 'Menyusun langkah proses dalam kolom atau lajur yang mewakili departemen.'],
      ['Opportunity Flowchart', 'Memisahkan aktivitas yang menambah nilai bagi pelanggan dari aktivitas yang hanya menambah biaya.'],
    ] },
    { kind: 'table', headers: ['Kategori waktu', 'Makna', 'Contoh'], rows: [
      ['Value-Added', 'Langsung mengubah barang atau memberikan layanan yang bersedia dibayar pelanggan.', 'Merakit produk, memanggang makanan.'],
      ['Cost-Added-Only', 'Pengawasan administratif, antrean, pencatatan ganda, atau inspeksi akibat kebutuhan kontrol atau sistem yang tidak efisien.', 'Menunggu persetujuan kredit, antrean transit, waktu menganggur.'],
    ] },
    { kind: 'formula', text: '\\text{PCE} = \\frac{T_{\\text{VA}}}{T_{\\text{Total}}} \\times 100\\%', note: 'Process Cycle Efficiency: T_VA = value-added time; T_Total = total cycle time = value-added time + cost-added-only time. Richardson 4e, p. 200.' },
    { kind: 'example', title: 'Order fulfillment: PCE dan keputusan BPR', blocks: [
      { kind: 'table', headers: ['Komponen', 'Menit'], rows: [
        ['Value-added (pengemasan pesanan, inspeksi kualitas, perakitan mesin)', '40'],
        ['Cost-added-only (menunggu persetujuan kredit, antrean transit, waktu menganggur)', '80'],
        ['Total cycle time', '120'],
      ] },
      { kind: 'formula', text: '\\text{PCE} = \\frac{40\\text{ min}}{120\\text{ min}} \\times 100\\% = 33.33\\%', note: 'Dua pertiga (66.67%) waktu operasi menambah biaya tanpa nilai bagi pelanggan. BPR menargetkan pemeriksaan kredit otomatis untuk menghilangkan penundaan 80 menit. Richardson 4e, p. 200.' },
    ] },
    { kind: 'h3', text: 'Data Flow Diagram (DFD)' },
    { kind: 'p', text: 'DFD berfokus pada **aliran data logis** tanpa menyebut perangkat fisik, personel departemen, atau media penyimpanan. Notasi yang umum: Gane-Sarson dan Yourdon-DeMarco. Richardson 4e, pp. 201–205.' },
    { kind: 'table', headers: ['Simbol DFD', 'Bentuk', 'Contoh'], rows: [
      ['External Entity (source/sink)', 'Persegi', 'Customer, Bank, Vendor.'],
      ['Data Flow', 'Garis/panah berarah berlabel kata benda data', 'Payment Data, Shipping Notice.'],
      ['Process', 'Lingkaran atau persegi bersudut bulat, berlabel frasa kerja dan nomor hierarki', '1.0 Process Payment.'],
      ['Data Store', 'Persegi terbuka atau dua garis sejajar', 'Accounts Receivable Ledger.'],
    ] },
    { kind: 'table', headers: ['Tingkat dekomposisi', 'Isi'], rows: [
      ['Context Diagram', 'Diagram lingkup tingkat tinggi: seluruh sistem sebagai satu proses pusat (0) yang berinteraksi dengan external entity.'],
      ['Level-0 DFD', 'Memecah proses sistem tunggal menjadi modul operasi utama: 1.0, 2.0, 3.0.'],
      ['Level-1 DFD', 'Memecah satu modul menjadi proses anak yang lebih rinci: 1.1, 1.2, 1.3.'],
    ], caption: 'Hierarki: Context Diagram → Level-0 DFD → Level-1 DFD.' },
    { kind: 'table', headers: ['Jebakan logika DFD', 'Ciri', 'Remediasi'], rows: [
      ['Black Hole', 'Proses menerima data flow masuk tetapi tidak menghasilkan data flow keluar.', 'Tambahkan output yang menjadi tujuan transformasi data, atau hapus proses yang tidak berfungsi.'],
      ['Miracle', 'Proses menghasilkan data flow keluar tanpa menerima data flow masuk.', 'Identifikasi dan gambarkan input yang dibutuhkan untuk menghasilkan output tersebut.'],
      ['Gray Hole', 'Output melampaui cakupan atau kemampuan input (mis. input hanya Customer ID, output rincian pajak per item).', 'Tambahkan input yang memadai atau sesuaikan output dengan data yang benar-benar tersedia.'],
    ], caption: 'Richardson 4e, p. 203. Setiap proses DFD harus memiliki minimal satu aliran masuk, minimal satu aliran keluar, dan input yang cukup untuk menghasilkan output.' },

    { kind: 'h2', text: '5. Comparative Evaluation & Cross-Framework Integration' },
    { kind: 'table', headers: ['Dimensi', 'BPMN 2.0', 'System & Document Flowchart', 'Data Flow Diagram'], rows: [
      ['Fokus utama', 'Alur kerja end-to-end, urutan berbasis event, penanganan pengecualian.', 'Perpindahan fisik dokumen, custody manual vs otomatis, jenis media.', 'Pergerakan dan transformasi data logis antar-proses dan data store.'],
      ['Standar', 'OMG (standar terbuka global).', 'ANSI X3.5 dan ISO 5807.', 'Metodologi Gane-Sarson / Yourdon-DeMarco.'],
      ['Urutan & waktu', 'Eksplisit melalui sequence flow, token, dan intermediate timer.', 'Eksplisit melalui flowline berarah.', 'Implisit (ketersediaan data); tanpa batasan waktu, durasi, atau urutan.'],
      ['Konteks organisasi', 'Eksplisit melalui pool (entitas) dan swimlane (peran/departemen).', 'Eksplisit melalui kolom atau swimlane departemen.', 'Tidak ada; aktor hanya muncul sebagai external entity di tepi diagram.'],
      ['Implementasi sistem', 'Dapat dieksekusi di Business Process Management Suite (BPMS) dan RPA.', 'Cetak biru pemrograman prosedural dan jejak audit manual.', 'Cetak biru skema database relasional dan arsitektur data.'],
    ] },
    { kind: 'h3', text: 'Pemetaan pengendalian internal: Segregation of Duties' },
    { kind: 'table', headers: ['Fungsi yang dipisahkan', 'Contoh lane'], rows: [
      ['Authorization — menyetujui transaksi', 'Credit Manager'],
      ['Custody — memegang aset fisik atau kas', 'Warehouse / Cashier'],
      ['Recording — memposting jurnal atau memperbarui ledger', 'General Accounting'],
      ['Reconciliation — mencocokkan catatan dengan aset fisik', 'Internal Audit'],
    ], caption: 'Diagram proses adalah instrumen utama untuk memverifikasi SoD di bawah kerangka COSO dan SOX.' },
    { kind: 'callout', variant: 'warning', title: 'Sinyal kelemahan kontrol', text: 'Kelemahan pengendalian terlihat secara visual ketika satu swimlane menjalankan **custody dan recording**, atau **authorization dan custody** sekaligus. Contoh: Authorize Credit dan Ship Goods berada dalam lane yang sama.' },
    { kind: 'p', text: '**Audit Data Standards (ADS):** model aktivitas menentukan pemicu event bisnis tempat data transaksi terstandar harus dicatat. AICPA ADS mendefinisikan format field seragam untuk siklus Procure-to-Pay, Order-to-Cash, dan General Ledger; model proses menunjukkan di mana data yang sesuai ADS dihasilkan untuk continuous auditing.' },

    { kind: 'h2', text: '6. Worked Practice' },
    { kind: 'solution-reveal', title: '1. Process Cycle Efficiency — order fulfillment manufaktur', prompt: 'Siklus pemenuhan pesanan: verifikasi desain teknis 15 menit; menunggu antrean persetujuan kredit supervisor 50 menit; picking dan pengemasan persediaan otomatis 25 menit; menunggu staging transit dock pengiriman 30 menit. Klasifikasikan aktivitas, hitung total cycle time dan PCE, lalu beri rekomendasi.', blocks: [
      { kind: 'table', headers: ['Aktivitas', 'Klasifikasi', 'Menit'], rows: [
        ['Verifikasi desain teknis', 'Value-Added', '15'],
        ['Antrean persetujuan kredit', 'Cost-Added-Only', '50'],
        ['Picking dan pengemasan persediaan', 'Value-Added', '25'],
        ['Staging transit pengiriman', 'Cost-Added-Only', '30'],
      ] },
      { kind: 'formula', text: 'T_{\\text{VA}} = 15 + 25 = 40\nT_{\\text{CA}} = 50 + 30 = 80\nT_{\\text{Total}} = 40 + 80 = 120\n\\text{PCE} = \\frac{40}{120} \\times 100\\% = 33.33\\%', note: 'Satuan menit.' },
      { kind: 'p', text: 'Hanya 33.33% waktu proses menciptakan nilai; 66.67% adalah penundaan administratif. Terapkan credit scoring otomatis untuk menghilangkan bottleneck persetujuan kredit 50 menit.' },
    ] },
    { kind: 'solution-reveal', title: '2. Starbucks Drive-Through — trace BPMN dan jurnal', prompt: 'Latihan turunan dengan angka asumsi, bukan angka Problem 1 buku: pelanggan memesan kopi dan muffin seharga \\$8.50 di drive-through dan membayar dengan Starbucks Gift Card. Asumsikan biaya persediaan \\$2.75. Telusuri interaksi BPMN dan susun jurnalnya.', blocks: [
      { kind: 'ol', items: [
        'Pool Customer mengirim pesanan melalui message flow ke lane Barista di pool Starbucks.',
        'Barista mencatat pesanan di cash register, kemudian menyiapkan kopi dan muffin (sequence flow dalam pool).',
        'Barista menyerahkan pesanan; setelah itu customer menyerahkan gift card (dua message flow antar-pool).',
        'Barista mencatat pembayaran, lalu mengembalikan kartu dan struk melalui message flow.',
      ] },
      { kind: 'journal', caption: 'Pengakuan pendapatan atas redemption gift card (USD)', lines: [{ account: 'Unearned Gift Card Revenue (Pendapatan Diterima di Muka - Kartu Hadiah)', debit: '$8.50' }, { account: 'Sales Revenue (Pendapatan Penjualan)', credit: '$8.50', isCredit: true }] },
      { kind: 'journal', caption: 'Beban pokok penjualan dan pengurangan persediaan (USD)', lines: [{ account: 'Cost of Goods Sold (Beban Pokok Penjualan)', debit: '$2.75' }, { account: 'Merchandise Inventory (Persediaan Barang Dagang)', credit: '$2.75', isCredit: true }] },
      { kind: 'p', text: 'Dengan asumsi gift card telah dibayar sebelumnya, penukaran kartu mengurangi liabilitas pendapatan diterima di muka, bukan mendebit kas lagi. Nominal, biaya persediaan, dan jurnal di atas adalah asumsi latihan; Problem 1 Richardson 4e hlm. 207 hanya memberikan narasi proses.' },
    ] },
    { kind: 'solution-reveal', title: '3. Identifikasi jebakan DFD', prompt: 'Auditor memeriksa tiga proses DFD: (2.1) menerima Employee Timecard dan memperbarui Employee Master File, tetapi tidak memiliki data flow keluar ke payroll atau laporan; (2.2) menghasilkan Vendor Disbursement Check dan Remittance Advice tanpa data flow masuk dari invoice, purchase order, atau catatan bank; (2.3) menerima Customer Zip Code dan menghasilkan Full Customer Credit History & FICO Score.', blocks: [
      { kind: 'table', headers: ['Proses', 'Jebakan', 'Alasan'], rows: [
        ['2.1', 'Black Hole', 'Data input "ditelan" tanpa menghasilkan output.'],
        ['2.2', 'Miracle', 'Menghasilkan pengeluaran keuangan tanpa input apa pun.'],
        ['2.3', 'Gray Hole', 'Kode pos saja tidak mungkin menghasilkan riwayat kredit pribadi seseorang.'],
      ] },
    ] },

    { kind: 'h2', text: '7. Exam Toolkit' },
    { kind: 'table', headers: ['Aturan emas BPMN 2.0', 'Penjelasan'], rows: [
      ['Jangan melintasi pool dengan sequence flow.', 'Panah garis penuh yang melintasi batas pool adalah pelanggaran notasi; gunakan message flow.'],
      ['Jangan menghubungkan elemen dalam satu pool dengan message flow.', 'Panah putus-putus khusus untuk komunikasi eksternal antar-pool.'],
      ['Gunakan "Active Verb + Noun" untuk nama activity.', 'Validate Purchase Order, bukan Purchase Order Validation.'],
      ['Cabang Exclusive Gateway harus mencakup semua kemungkinan.', 'Setiap XOR split memerlukan jalur keluar yang berbeda untuk seluruh kontingensi logis.'],
      ['Token digandakan pada parallel split dan digabung pada parallel join.', 'Jangan menggunakan exclusive gateway untuk menggabungkan cabang paralel.'],
    ] },
    { kind: 'table', headers: ['Fitur', 'BPMN 2.0', 'ANSI Flowchart', 'DFD'], rows: [
      ['Standar', 'OMG BPMN 2.0', 'ANSI X3.5 / ISO 5807', 'Gane-Sarson / Yourdon'],
      ['Fokus', 'Alur kerja temporal & aktivitas', 'Dokumen fisik & operasi', 'Pergerakan data logis'],
      ['Aktor', 'Pool & swimlane', 'Kolom / swimlane', 'Hanya external entity'],
      ['Waktu', 'Eksplisit (sequence flow/token)', 'Eksplisit (flowline)', 'Tidak ada (hanya ketersediaan data)'],
      ['Peran sistem', 'Dapat dieksekusi di BPMS / RPA', 'Cetak biru jejak audit', 'Cetak biru desain database'],
    ] },
    { kind: 'table', headers: ['Quick reference', 'Ingat'], rows: [
      ['IMA / CGMA / IFAC', '6 domain / 4 pilar (Technical, Business, People, Leadership) / 4 peran (User, Manager, Designer, Evaluator).'],
      ['CPA Evolution', 'Core (Accounting, Auditing, Tax + teknologi) + satu track: ISC, BAR, atau TCP.'],
      ['Gateway', 'XOR = tepat satu jalur; AND = semua jalur bersamaan; OR = satu atau lebih jalur.'],
      ['PCE', 'T_VA / T_Total × 100%; 40 / 120 = 33.33%.'],
      ['DFD', 'Context Diagram → Level-0 → Level-1; jebakan: Black Hole, Miracle, Gray Hole.'],
    ] },
    { kind: 'table', headers: ['Common trap', 'Koreksi'], rows: [
      ['Sequence flow digambar melintasi batas pool.', 'Aturan OMG: sequence flow hanya di dalam satu pool; antar-pool gunakan message flow.'],
      ['Message flow dipakai di dalam satu pool (mis. Sales Lane → Accounting Lane dalam pool Company).', 'Hubungkan task internal dengan sequence flow; message flow hanya untuk komunikasi antar-organisasi.'],
      ['Menyamakan pool dan lane.', 'Pool = entitas (Company, Vendor); lane = departemen internal (Sales, Accounting).'],
      ['SoD dilanggar dalam alokasi swimlane (Authorize Credit dan Ship Goods di lane yang sama).', 'Authorization, custody, dan recording tidak boleh dijalankan aktor/lane yang sama.'],
      ['DFD mengandung Black Hole, Miracle, atau Gray Hole.', 'Setiap proses minimal punya satu aliran masuk, satu aliran keluar, dan input yang cukup untuk output-nya.'],
      ['Mencampur logis dan fisik dalam DFD.', 'DFD tidak menampilkan lemari arsip, truk pos, atau jabatan; hanya data flow, process, data store, dan external entity.'],
    ] },
    { kind: 'callout', variant: 'info', title: 'Batas TM3', text: 'File biner alat CASE (Visio, Signavio, Lucidchart) tidak disertakan; notasi, aturan token, gateway, dan checkpoint kontrol disajikan dalam teks dan tabel. Data modeling dengan REA dan UML Class Diagram dibahas pada TM4. Sumber utama: Richardson, Chang & Smith, AIS 4e ISE, Chapter 4, pp. 174–209.' },
  ],
};
