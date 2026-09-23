import type { Reading } from '../../../types';

const SVG_AGENCY_GOVERNANCE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="shGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="mgGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="crGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">TRIANGLE TEORI KEAGENAN (AGENCY THEORY) &amp; TATA KELOLA KEUANGAN</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TM01 AGENCY MODEL</text>

  <!-- Left: Triangular Stakeholder Conflict Diagram -->
  <g transform="translate(35, 75)">
    <!-- Top: Shareholders -->
    <rect class="svg-card" x="120" y="0" width="200" height="52" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="220" y="22" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. PEMEGANG SAHAM (PRINCIPAL)</text>
    <text class="svg-text" x="220" y="38" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tujuan: Maksimalkan Nilai Saham &amp; Dividen</text>

    <!-- Bottom Left: Management -->
    <rect class="svg-card" x="0" y="150" width="190" height="52" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="95" y="172" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. MANAJEMEN (AGENT)</text>
    <text class="svg-text" x="95" y="188" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tujuan: Gaji, Fasilitas, &amp; Kekuasaan</text>

    <!-- Bottom Right: Creditors -->
    <rect class="svg-card" x="250" y="150" width="190" height="52" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="345" y="172" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">3. KREDITOR / PERBANKAN</text>
    <text class="svg-text" x="345" y="188" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tujuan: Keamanan Pokok &amp; Bunga Utang</text>

    <!-- Connecting Dynamic Conflict Lines -->
    <line x1="180" y1="52" x2="110" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text class="text-accent-red" x="115" y="105" fill="#f87171" font-size="7" font-weight="700">Konflik 1: Saham vs Manajer</text>

    <line x1="260" y1="52" x2="330" y2="150" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text class="text-accent-red" x="325" y="105" fill="#f87171" font-size="7" font-weight="700">Konflik 2: Saham vs Kreditor</text>

    <line x1="190" y1="176" x2="250" y2="176" stroke="#334155" stroke-width="1.5"/>
  </g>

  <!-- Right: 3 Mitigation Solutions Cards -->
  <g transform="translate(500, 75)">
    <rect class="svg-subcard" x="0" y="0" width="365" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="9.5" font-weight="800">1. KOMPENSASI BERBASIS KINERJA (ESOP)</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="8">Memberikan opsi saham kepada direksi agar kepentingan manajer</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">sejalan dengan pemegang saham untuk memacu harga saham.</text>

    <rect class="svg-subcard" x="0" y="78" width="365" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="14" y="98" fill="#fbbf24" font-size="9.5" font-weight="800">2. PENGAWASAN DEWAN KOMISARIS INDEPENDEN</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">Audit eksternal independen dan komite audit untuk membatasi</text>
    <text class="svg-text" x="14" y="130" fill="#cbd5e1" font-size="8">pengeluaran fasilitas berlebihan (Perquisites) oleh direksi.</text>

    <rect class="svg-subcard" x="0" y="156" width="365" height="70" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="14" y="176" fill="#a78bfa" font-size="9.5" font-weight="800">3. PERJANJIAN PEMBATASAN UTANG (DEBT COVENANTS)</text>
    <text class="svg-text" x="14" y="194" fill="#cbd5e1" font-size="8">Kreditor mensyaratkan batas rasio leverage (DER &lt; 2x) &amp; saldo kas</text>
    <text class="svg-text" x="14" y="208" fill="#cbd5e1" font-size="8">minimum sebelum perusahaan boleh membagikan dividen tunai.</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Mekanisme tata kelola yang efektif menekan Biaya Keagenan (Agency Cost) dan memaksimalkan nilai intrinsik perusahaan.</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'An Overview of Financial Management, Corporate Goals, & Agency Theory',
  ref: 'Brigham & Houston (Fundamentals of Financial Management 16e/2022 Ch. 1) | Silabus FEB UNAIR 2026 | Jensen & Meckling (1976)',
  intro: 'Modul TM 1 membedah fondasi filosofis dan arsitektur keputusan manajemen keuangan korporasi modern: pembagian 3 pilar utama keuangan, posisi strategis Chief Financial Officer (CFO) serta perbedaan peran Treasurer vs Controller, evaluasi komparatif bentuk badan usaha (Perusahaan Perseorangan, Persekutuan/CV, dan Perseroan Terbatas/PT), penetapan tujuan normatif Shareholder Wealth Maximization dan model penentuan Nilai Intrinsik berbasis Free Cash Flow (FCF) & WACC, dinamika Teori Keagenan (Agency Theory) mencakup konflik Stockholders vs Managers dan Stockholders vs Debtholders beserta instrumen mitigasinya, hingga relevansi etika bisnis dan tata kelola korporasi (Corporate Governance).',
  objectives: [
    'Membedakan 3 area utama keuangan (Financial Management, Capital Markets, Investments) dan fungsi strategis CFO (Treasurer vs Controller).',
    'Menganalisis kelebihan, kelemahan, tanggung jawab hukum (unlimited vs limited liability), dan implikasi pajak bentuk-bentuk badan usaha.',
    'Membuktikan mengapa Maksimalisasi Nilai Saham Intrinsik jangka panjang lebih unggul dibanding Maksimalisasi Laba Akuntansi kuartalan.',
    'Menganalisis konsep Ekuilibrium Pasar: perbedaan antara Nilai Intrinsik (fundamental value) dengan Harga Pasar Saham (market price).',
    'Membedah konflik keagenan Pemegang Saham vs Manajer serta instrumen mitigasinya (paket kompensasi ber-vesting, intervensi pemegang saham, ancaman pemecatan, dan hostile takeover).',
    'Membedah konflik keagenan Pemegang Saham vs Kreditor (Asset Substitution & Debt Dilution) serta instrumen mitigasinya melalui Debt Covenants.',
    'Mengevaluasi peran etika bisnis, kepatuhan regulasi Sarbanes-Oxley Act (SOX), dan tanggung jawab sosial (ESG) terhadap nilai korporasi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Arsitektur Konflik Keagenan Segitiga dan Mekanisme Solusi Tata Kelola Korporasi.',
      svg: SVG_AGENCY_GOVERNANCE
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Pondasi Filosofis: Intrinsic Value vs Accounting Profit',
      text: '1. Tujuan Utama Manajemen Finansial: Mengambil keputusan investasi, pendanaan, dan operasional yang memaksimalkan nilai intrinsik saham jangka panjang bagi pemegang saham (Shareholder Wealth Maximization).\n2. Nilai Intrinsik (Fundamental Value): Estimasi nilai wajar riil saham berdasarkan analisis fundamental atas arus kas bebas (Free Cash Flow) dan risiko objektif masa depan.\n3. Perbedaan Kritis dengan Laba Akuntansi: Laba akrual bersih (Net Income) mengabaikan nilai waktu uang (TVM), mengabaikan premi risiko, serta rentan dimanipulasi dengan kebijakan akuntansi agresif atau penundaan biaya riset jangka panjang.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Fokus Ujian & Panduan Silabus FEB UNAIR',
      text: '1. Pengujian Teoretis: Ujian Manajemen Keuangan kerap menguji pemahaman mendalam atas alasan manajer bertindak tidak selaras dengan pemegang saham (Agency Problem) serta instrumen kontrak kompensasi (Stock Options, Performance Shares, Vesting Periods).\n2. Pengujian Konsep Pasar Modal: Soal ujian sering menanyakan kondisi ekuilibrium pasar (Kapan saham berstatus Undervalued vs Overvalued) dan peran analis sekuritas.\n3. Pertimbangan Bentuk Entitas: Pembedaan aspek pertanggungjawaban hukum (Unlimited Liability pada CV/Perseorangan vs Limited Liability pada PT) dan aspek pajak berganda (Double Taxation).'
    },
    {
      kind: 'h2',
      text: '1. Ruang Lingkup Keuangan & Posisi CFO dalam Korporasi'
    },
    {
      kind: 'p',
      text: 'Keuangan (Finance) dalam dunia bisnis terbagi ke dalam tiga pilar utama yang saling terhubung erat:'
    },
    {
      kind: 'ul',
      items: [
        '**Manajemen Keuangan (Financial Management / Corporate Finance)**: Berfokus pada keputusan internal perusahaan mengenai jenis aktiva apa yang harus dibeli (Capital Budgeting), bagaimana mendanai pembelian aktiva tersebut dengan utang atau ekuitas (Capital Structure), dan bagaimana mengelola operasional harian perusahaan (Working Capital Management).',
        '**Pasar Modal & Lembaga Keuangan (Capital Markets & Institutions)**: Mempelajari pasar tempat bunga dan harga sekuritas ditentukan, serta lembaga intermediasi (perbankan, perusahaan asuransi, reksa dana, dana pensiun) yang menyalurkan modal dari pihak surplus dana (penabung) kepada pihak defisit dana (korporasi).',
        '**Investasi (Investments)**: Berkaitan erat dengan keputusan investor individual maupun institusional dalam memilih portofolio sekuritas keuangan (saham, obligasi, derivatif). Mencakup analisis sekuritas (Security Analysis), teori portofolio (Portfolio Theory), dan analisis pasar modal (Market Analysis).'
      ]
    },
    {
      kind: 'h3',
      text: 'Hierarki Struktur Finansial: Peran CFO, Treasurer, dan Controller'
    },
    {
      kind: 'p',
      text: 'Dalam perseroan terbuka modern, Chief Executive Officer (CEO) membawahi Chief Operating Officer (COO - memimpin divisi pemasaran, produksi, dan SDM) serta Chief Financial Officer (CFO - memimpin seluruh fungsi strategis keuangan). Di bawah CFO, tanggung jawab operasional dibagi tegas menjadi dua peran kepemimpinan:'
    },
    {
      kind: 'table',
      headers: ['Dimensi Tanggung Jawab', 'Treasurer (Bendahara Perusahaan)', 'Controller (Kepala Akuntansi)'],
      rows: [
        ['Fokus Utama Aktivitas', 'Pengelolaan kas, modal, likuiditas, dan hubungan pasar modal.', 'Pencatatan akuntansi historis, pelaporan, dan kepatuhan regulasi.'],
        ['Manajemen Kas & Likuiditas', 'Menjaga saldo kas optimal, investasi jangka pendek, dan fasilitas kredit bank.', 'Melakukan rekonsiliasi bank, pencatatan jurnal kas, dan verifikasi faktur.'],
        ['Keputusan Penganggaran Modal', 'Mengevaluasi kelayakan investasi (NPV/IRR) dan mencari sumber pendanaan modal.', 'Mencatat pengeluaran modal (CapEx) dan menghitung beban depresiasi fiskal/komersial.'],
        ['Hubungan Eksternal', 'Berinteraksi langsung dengan bankir investasi, investor saham, dan lembaga pemeringkat kredit.', 'Berinteraksi dengan auditor eksternal independen dan otoritas perpajakan (DJP/IRS).'],
        ['Manajemen Risiko Finansial', 'Merancang lindung nilai (hedging) risiko suku bunga dan risiko valuta asing.', 'Mengembangkan sistem pengendalian internal (internal controls) dan audit kepatuhan.']
      ],
      caption: 'Tabel 1.1: Pembagian tanggung jawab eksekutif antara Treasurer dan Controller di bawah arahan CFO.'
    },
    {
      kind: 'h2',
      text: '2. Bentuk-Bentuk Badan Usaha (Forms of Business Organization)'
    },
    {
      kind: 'p',
      text: 'Berdasarkan hukum korporasi dan literatur keuangan standar Brigham & Houston, terdapat tiga bentuk badan usaha utama yang memiliki karakteristik yuridis, hak kepemilikan, dan implikasi perpajakan yang sangat berbeda:'
    },
    {
      kind: 'table',
      headers: ['Kriteria Evaluasi', 'Perusahaan Perseorangan (Proprietorship)', 'Persekutuan (Partnership / Firma / CV)', 'Perseroan Terbatas (Corporation / PT)'],
      rows: [
        ['Kemudahan & Biaya Pendirian', 'Sangat mudah dan berbiaya minimal; tidak memerlukan akta formal rumit.', 'Cukup mudah; membutuhkan perjanjian persekutuan/akta notaris mengenai bagi laba.', 'Relatif kompleks; membutuhkan akta notaris, pengesahan Kemenkumham, dan anggaran dasar formal.'],
        ['Pertanggungjawaban Hukum Pemilik', 'Tanggung jawab pribadi tak terbatas (Unlimited Personal Liability); harta pribadi disita jika pailit.', 'Sekutu aktif memikul tanggung jawab tak terbatas; sekutu pasif terbatas pada modal yang disetor.', 'Tanggung jawab terbatas (Limited Liability); pemegang saham hanya bertanggung jawab sebesar modal saham disetor.'],
        ['Akses Pasar Modal & Skalabilitas', 'Sangat terbatas; bergantung semata-mata pada kekayaan pribadi pemilik dan pinjaman bank kecil.', 'Terbatas pada kekayaan para sekutu; sulit menghimpun modal skala raksasa untuk proyek ekspansi.', 'Sangat luas; mampu menerbitkan saham dan obligasi ke publik (IPO) serta menarik ribuan investor global.'],
        ['Kelangsungan Hidup (Going Concern)', 'Terbatas pada umur pemilik; usaha otomatis bubar secara hukum bila pemilik meninggal dunia.', 'Terbatas; persekutuan bubar jika ada sekutu yang mengundurkan diri, bangkrut, atau wafat.', 'Tidak terbatas (Perpetual / Unlimited Life); entitas hukum terpisah tetap berjalan meski pemegang saham berganti.'],
        ['Likuiditas Pengalihan Kepemilikan', 'Sulit; memerlukan penjualan seluruh aset fisik atau pencarian pembeli baru dari awal.', 'Sulit; pengalihan bagian sekutu wajib memperoleh persetujuan bulat dari seluruh sekutu lainnya.', 'Sangat likuid dan mudah; saham perusahaan publik dapat diperjualbelikan seketika di bursa efek.'],
        ['Perlakuan Pajak Penghasilan', 'Pass-Through Taxation (pajak dikenakan sekali pada level Surat Pemberitahuan Tahunan pemilik).', 'Pass-Through Taxation (penghasilan dibagi kepada sekutu, laba CV modal tak terbagi bukan objek PPh).', 'Pajak Berganda (Double Taxation): Laba korporasi kena PPh Badan 22%, dividen kena PPh Orang Pribadi.']
      ],
      caption: 'Tabel 1.2: Matriks perbandingan yuridis dan finansial bentuk-bentuk organisasi bisnis.'
    },
    {
      kind: 'h3',
      text: 'Bentuk Usaha Hibrida: LLC dan S-Corporation'
    },
    {
      kind: 'p',
      text: 'Dalam lanskap bisnis modern, berkembang bentuk organisasi hibrida seperti Limited Liability Company (LLC) dan Limited Liability Partnership (LLP). Struktur ini menggabungkan keuntungan tanggung jawab terbatas (seperti pada PT) dengan keuntungan efisiensi pajak pass-through tanpa pajak berganda (seperti pada persekutuan). Di Indonesia, analogi pendekatan ini tercermin pada perlakuan pajak perseroan perorangan dan ketentuan dividen bukan objek pajak sepanjang diinvestasikan kembali (UU HPP).'
    },
    {
      kind: 'h2',
      text: '3. Tujuan Utama Finansial: Shareholder Wealth Maximization & Model Nilai Intrinsik'
    },
    {
      kind: 'p',
      text: 'Sasaran normatif utama bagi manajer keuangan adalah memaksimalkan kekayaan pemegang saham (Shareholder Wealth Maximization), yang diterjemahkan secara langsung ke dalam upaya memaksimalkan nilai intrinsik saham jangka panjang perusahaan.'
    },
    {
      kind: 'h3',
      text: 'Mengapa Maksimalisasi Nilai Saham Berbeda dari Maksimalisasi Laba Akuntansi?'
    },
    {
      kind: 'p',
      text: 'Banyak orang awam mengira tujuan perusahaan adalah sekadar "memperoleh laba sebesar-besarnya". Namun, dalam teori keuangan korporasi, memusatkan perhatian semata-mata pada laba bersih akuntansi (Net Income) adalah kekeliruan fatal karena tiga alasan fundamental:'
    },
    {
      kind: 'ol',
      items: [
        '**Mengabaikan Nilai Waktu Uang (Time Value of Money)**: Laba Rp 10 Miliar yang diterima hari ini memiliki nilai ekonomi yang jauh lebih tinggi dibanding laba Rp 10 Miliar yang baru diterima 5 tahun mendatang.',
        '**Mengabaikan Profil Risiko Arus Kas (Risk Consideration)**: Dua proyek investasi bisa menghasilkan laba akrual yang sama di atas kertas, namun proyek pertama memiliki arus kas pasti sementara proyek kedua memiliki variabilitas kegagalan tinggi. Orientasi laba menganggap kedua proyek sama, padahal pasar akan mendiskonto proyek kedua dengan biaya modal yang jauh lebih tinggi.',
        '**Mendorong Perilaku Manajerial Jangka Pendek (Short-Termism & Earnings Manipulation)**: Manajer yang dinilai berdasarkan laba tahun berjalan tergoda memotong anggaran riset & pengembangan (R&D), menunda perawatan rutin mesin pabrik, dan menurunkan biaya pelatihan karyawan. Laba tahun berjalan melonjak sesaat, namun nilai jangka panjang perusahaan hancur.'
      ]
    },
    {
      kind: 'h3',
      text: 'Formula Valuasi Korporasi: Determinan Nilai Intrinsik'
    },
    {
      kind: 'formula',
      text: `\\text{Nilai Perusahaan (Firm Value)} = \\sum_{t=1}^{\\infty} \\frac{\\text{Free Cash Flow}_t (FCF_t)}{(1 + \\text{WACC})^t}
\\text{Free Cash Flow (FCF)} = [\\text{EBIT} \\times (1 - T)] + \\text{Depresiasi} - [\\Delta \\text{Net Working Capital} + \\text{CapEx}]`,
      note: 'Dimana: EBIT = Laba Operasi Sebelum Bunga & Pajak; T = Tarif Pajak Korporasi; CapEx = Belanja Modal Aktiva Tetap; WACC = Weighted Average Cost of Capital (Biaya Modal Rata-Rata Tertimbang). Nilai intrinsik hanya meningkat jika FCF bertambah atau WACC menurun.'
    },
    {
      kind: 'h3',
      text: 'Ekuilibrium Pasar: Nilai Intrinsik vs Harga Pasar Saham'
    },
    {
      kind: 'p',
      text: 'Dalam pasar modal riil, kita membedakan dua konsep nilai saham:'
    },
    {
      kind: 'ul',
      items: [
        '**Nilai Intrinsik (Fundamental / "True" Value)**: Estimasi nilai wajar riil suatu saham yang dihitung oleh analis profesional independen menggunakan data fundamental terlengkap mengenai arus kas masa depan dan risiko aktual perusahaan.',
        '**Harga Pasar Saham (Observed Market Price)**: Harga aktual yang terbentuk di bursa efek, yang dipengaruhi oleh informasi yang tersedia untuk umum serta persepsi (yang terkadang keliru atau emosional) dari para investor marjinal.',
        '**Ekuilibrium Pasar Modal**: Kondisi ideal di mana Harga Pasar sama persis dengan Nilai Intrinsik (Market Price = Intrinsic Value). Ketika terjadi ekuilibrium, investor tidak memiliki dorongan kuat untuk melakukan aksi beli panik maupun jual panik.'
      ]
    },
    {
      kind: 'table',
      headers: ['Kondisi Pasar', 'Hubungan Harga vs Nilai', 'Status Valuasi Saham', 'Tindakan Investor Rasional', 'Tekanan Pasar Menuju Ekuilibrium'],
      rows: [
        ['Harga Pasar < Nilai Intrinsik', 'Market Price < Intrinsic Value', 'Undervalued (Saham Terlalu Murah / Bargain)', 'Melakukan aksi beli akumulasi (Buy / Long).', 'Permintaan meningkat mendongkrak harga pasar naik kembali mendekati nilai intrinsik.'],
        ['Harga Pasar = Nilai Intrinsik', 'Market Price = Intrinsic Value', 'Equilibrium (Nilai Wajar Pasar)', 'Hold (Pertahankan portofolio sesuai imbal hasil yang disyaratkan).', 'Pasar berada dalam kondisi stabil tanpa tekanan koreksi ekstrem.'],
        ['Harga Pasar > Nilai Intrinsik', 'Market Price > Intrinsic Value', 'Overvalued (Saham Terlalu Mahal / Gelembung)', 'Melakukan aksi jual atau short-selling.', 'Penjualan masif mendorong harga pasar turun terkoreksi menuju nilai fundamentalnya.']
      ],
      caption: 'Tabel 1.3: Dinamika ekuilibrium pasar modal berdasarkan perbandingan harga pasar terhadap nilai intrinsik.'
    },
    {
      kind: 'h2',
      text: '4. Dinamika Teori Keagenan (Agency Theory) & Tata Kelola Korporasi'
    },
    {
      kind: 'p',
      text: 'Hubungan keagenan (Agency Relationship) tercipta ketika satu pihak (Principal) mempekerjakan pihak lain (Agent) untuk memberikan jasa dan mendelegasikan wewenang pengambilan keputusan bisnis (Jensen & Meckling, 1976). Di dalam korporasi modern, terdapat dua jenis konflik keagenan utama yang menjadi fokus analisis manajemen keuangan:'
    },
    {
      kind: 'h3',
      text: 'Konflik Keagenan 1: Pemegang Saham vs Manajer'
    },
    {
      kind: 'p',
      text: 'Pemisahan kepemilikan saham dari kendali operasional harian memicu potensi benturan kepentingan di mana manajer cenderung bertindak demi kepentingan pribadinya dibanding memaksimalkan kekayaan pemegang saham:'
    },
    {
      kind: 'ul',
      items: [
        '**Empire Building (Ekspansi Kerajaan Bisnis)**: Manajer menyukai pertumbuhan ukuran perusahaan yang masif melalui akuisisi agresif, meskipun akuisisi tersebut menghancurkan nilai pemegang saham, karena kompensasi dan prestise eksekutif seringkali berkorelasi positif dengan ukuran aset perusahaan.',
        '**Konsumsi Fasilitas Berlebihan (Perquisites Consumption)**: Penggunaan dana perusahaan untuk jet pribadi, kantor mewah, dan fasilitas rekreasi eksklusif yang membebani kas korporasi tanpa kontribusi terhadap laba operasi.',
        '**Penolakan Risiko Berlebihan (Risk Aversion / Career Concerns)**: Manajer enggan mengambil proyek investasi berisiko sehat yang memiliki NPV sangat positif karena takut kehilangan pekerjaan jika proyek gagal, padahal portofolio pemegang saham terdiversifikasi.',
        '**Horizon Problem**: Manajer yang mendekati masa pensiun hanya peduli pada kinerja laba jangka pendek demi bonus tahunan, dan mengabaikan investasi jangka panjang yang hasilnya baru berbuah setelah ia purnatugas.'
      ]
    },
    {
      kind: 'p',
      text: 'Untuk menyelaraskan kepentingan manajer dengan pemegang saham, tata kelola korporasi modern menerapkan 4 mekanisme mitigasi:'
    },
    {
      kind: 'ol',
      items: [
        '**Struktur Paket Kompensasi Eksekutif yang Terkalibrasi**: Pemberian paket kompensasi berbasis kinerja jangka panjang, seperti opsi saham (Stock Options) dan Restricted Stock Units (RSU) yang memiliki masa tunggu (Vesting Period) minimal 3–5 tahun. Dengan demikian, eksekutif hanya menjadi kaya jika harga saham perusahaan naik berkelanjutan.',
        '**Intervensi Langsung Pemegang Saham Institusional**: Dana pensiun, reksa dana, dan pengelola aset besar (seperti BlackRock atau Vanguard) memegang porsi saham signifikan sehingga memiliki kekuatan voting untuk menegur direksi dan melakukan pertarungan suara (Proxy Fight).',
        '**Pengawasan dan Ancaman Pemecatan oleh Dewan Komisaris**: Dewan Komisaris yang independen (Board of Directors) bersama Komite Audit memiliki kewenangan formal untuk memberhentikan CEO dan direksi yang tidak mencapai target kinerja nilai intrinsik.',
        '**Ancaman Pengambilalihan Paksa (Hostile Takeover Threat)**: Perusahaan yang salah kelola akan mengalami penurunan harga saham. Harga saham yang undervalued memicu minat para pembeli korporasi (Corporate Raiders) untuk mengambil alih kendali saham mayoritas dan seketika memecat manajemen lama yang tidak efisien.'
      ]
    },
    {
      kind: 'h3',
      text: 'Konflik Keagenan 2: Pemegang Saham vs Pemegang Utang / Kreditor'
    },
    {
      kind: 'p',
      text: 'Pemegang saham dan pemegang obligasi (Debtholders) memiliki struktur hak keuangan yang bertolak belakang:'
    },
    {
      kind: 'ul',
      items: [
        '**Sifat Klaim Kreditor (Fixed Claim)**: Kreditor hanya berhak atas pembayaran bunga tetap dan pengembalian pokok pinjaman sesuai jatuh tempo. Kreditor TIDAK menerima bagian keuntungan jika perusahaan mencetak laba luar biasa.',
        '**Sifat Klaim Pemegang Saham (Residual Claim)**: Pemegang saham menerima seluruh sisa laba setelah kewajiban utang dilunasi (apresiasi nilai saham tak terbatas).'
      ]
    },
    {
      kind: 'p',
      text: 'Perbedaan struktur klaim ini melahirkan dua bentuk konflik serius:'
    },
    {
      kind: 'ol',
      items: [
        '**Asset Substitution Problem (Risk Shifting)**: Setelah berhasil mendapatkan pinjaman utang dengan tingkat bunga rendah, pemegang saham mendorong manajemen untuk menginvestasikan dana pinjaman ke proyek berisiko sangat tinggi (spekulatif). Jika proyek sukses, pemegang saham menikmati seluruh keuntungan raksasa. Namun jika proyek gagal, kreditor menanggung risiko kebangkrutan perusahaan.',
        '**Debt Dilution (Penerbitan Utang Tambahan)**: Manajemen menerbitkan utang baru dalam jumlah masif dengan tingkat prioritas yang sama atau menggunakan aset yang sama sebagai jaminan. Hal ini menurunkan peringkat kredit obligasi lama (Rating Downgrade) dan merugikan kreditor terdahulu.'
      ]
    },
    {
      kind: 'p',
      text: 'Mitigasi Kreditor: **Klausul Pembatasan Kontraktual (Debt Covenants)**. Kreditor melindungi hak dan modalnya dengan mencantumkan klausul ketat dalam perjanjian kredit (Bond Indenture), antara lain:'
    },
    {
      kind: 'ul',
      items: [
        'Kewajiban menjaga rasio likuiditas minimum (Current Ratio $\\ge 1,5\\times$).',
        'Batas maksimum rasio utang modal (Debt-to-Equity Ratio $\\le 2,0\\times$).',
        'Batas minimum rasio kecukupan bunga operasional (Interest Coverage Ratio / TIE $\\ge 3,0\\times$).',
        'Larangan membagikan dividen tunai kepada pemegang saham sebelum kewajiban kupon dan pokok terbayar penuh.',
        'Klausul larangan penjaminan ganda (Negative Pledge) yang melarang perusahaan menjaminkan aset strategis yang sama kepada kreditor baru.'
      ]
    },
    {
      kind: 'h2',
      text: '5. Etika Bisnis, Tanggung Jawab Sosial (CSR / ESG), & Nilai Korporasi'
    },
    {
      kind: 'p',
      text: 'Apakah pengejaran tujuan Shareholder Wealth Maximization bertentangan dengan kepentingan masyarakat umum dan prinsip etika bisnis? Brigham & Houston menegaskan bahwa dalam jangka panjang, kedua hal ini berjalan beriringan secara selaras:'
    },
    {
      kind: 'ul',
      items: [
        '**Modal Reputasi (Reputational Capital)**: Perusahaan yang menjaga integritas etika bisnis, memproduksi barang aman berkualitas, dan menghormati hak pekerja akan dipercaya oleh konsumen dan investor, sehingga menurunkan biaya modal (WACC) dan meningkatkan loyalitas pasar.',
        '**Konsekuensi Perilaku Tidak Etis**: Skandal kecurangan akuntansi (seperti Enron, WorldCom, dan kasus fraud korporasi) berujung pada kebangkrutan, hilangnya ribuan lapangan kerja, dan hukuman pidana bagi para eksekutif.',
        '**Sarbanes-Oxley Act (SOX) Tahun 2002**: Regulasi federal di AS yang mewajibkan CEO dan CFO menandatangani secara pribadi keabsahan laporan keuangan korporasi, memperketat audit internal, dan melindungi pelapor pelanggaran (Whistleblower). Di Indonesia, prinsip serupa ditegakkan melalui regulasi OJK mengenai penerapan prinsip Good Corporate Governance (GCG) bagi emiten publik.',
        '**Environmental, Social, and Governance (ESG)**: Investor institusional global saat ini menempatkan skor ESG sebagai kriteria penentu alokasi modal. Perusahaan yang mengabaikan dampak lingkungan menghadapi risiko denda berat dan penarikan modal investasi.'
      ]
    },
    {
      kind: 'h2',
      text: '6. Kumpulan Kasus & Latihan Terapan Komprehensif (Worked Practice Cases)'
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: Evaluasi Pemilihan Bentuk Usaha & Analisis Pajak Berganda',
      prompt: 'Tuan Baskara dan Nyonya Citra mendirikan usaha rintisan konsultan teknologi finansial dengan modal awal Rp 1 Miliar. Pada tahun pertama operasional, usaha menghasilkan laba sebelum pajak sebesar Rp 800.000.000. Seluruh laba bersih setelah pajak direncanakan akan ditarik oleh kedua pendiri sebagai penghasilan pribadi (bagi rata 50:50). Bandingkan total kas bersih yang diterima pendiri jika memilih bentuk usaha: (1) Persekutuan / CV, dibandingkan dengan (2) Perseroan Terbatas (PT) dengan tarif PPh Badan 22% dan dividen Orang Pribadi dikenakan PPh Final 10%!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Analisis Skenario 1 (Bentuk Persekutuan / CV)**:\n- Laba Operasional Usaha = Rp 800.000.000.\n- Berdasarkan Pasal 4 ayat (3) huruf i UU PPh Indonesia, bagian laba yang diterima oleh anggota persekutuan komanditer (CV) yang modalnya tidak terbagi atas saham BUKAN merupakan objek pajak (bebas pajak dividen).\n- Pajak Badan CV (PPh Badan 22%) = 22% × Rp 800.000.000 = Rp 176.000.000.\n- Sisa Laba Bersih = Rp 800.000.000 - Rp 176.000.000 = **Rp 624.000.000**.\n- Saat ditarik oleh Tuan Baskara dan Nyonya Citra, tidak ada potongan pajak dividen tambahan.\n- **Total Kas Bersih Diterima Pemilik** = **Rp 624.000.000** (masing-masing Rp 312.000.000).',
            '**2. Analisis Skenario 2 (Bentuk Perseroan Terbatas / PT)**:\n- Laba Sebelum Pajak PT = Rp 800.000.000.\n- PPh Badan (22%) = 22% × Rp 800.000.000 = Rp 176.000.000.\n- Laba Bersih Setelah Pajak (EAT) = Rp 800.000.000 - Rp 176.000.000 = Rp 624.000.000.\n- Jika dibagikan sebagai Dividen Kas kepada pemegang saham Orang Pribadi dan tidak diinvestasikan kembali, dikenakan PPh Final Dividen 10%:\n  Pajak Dividen = 10% × Rp 624.000.000 = Rp 62.400.000.\n- Sisa Kas Diterima = Rp 624.000.000 - Rp 62.400.000 = **Rp 561.600.000** (masing-masing Rp 280.800.000).',
            '**3. Evaluasi Finansial & Trade-Off Yuridis**:\n- Bentuk CV menghasilkan kas bersih lebih besar Rp 62.400.000 karena terhindar dari pajak berganda (Double Taxation) atas pembagian laba.\n- Namun, bentuk PT memberikan perlindungan hukum Tanggung Jawab Terbatas (Limited Liability) yang melindungi kekayaan pribadi pendiri dari tuntutan hukum pihak ketiga di masa depan.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Penentuan Nilai Intrinsik Saham vs Harga Pasar (Market Equilibrium)',
      prompt: 'Analis riset ekuitas PT Danareksa mengevaluasi saham PT Telekom Nusantara Tbk. Proyeksi arus kas bebas (Free Cash Flow) tahun depan adalah Rp 500 Miliar dan diharapkan tumbuh konstan 5% per tahun selamanya. Biaya modal rata-rata tertimbang (WACC) perusahaan adalah 10%. Perusahaan memiliki utang berbunga sebesar Rp 2.000 Miliar dan 200 juta lembar saham biasa beredar. Saat ini, saham diperdagangkan di Bursa Efek Indonesia pada harga Rp 3.500 per lembar. Hitung nilai intrinsik saham per lembar dan tentukan rekomendasi investasi bagi nasabah!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Menghitung Total Nilai Korporasi (Total Firm Value)**:\nDengan asumsi pertumbuhan konstan (Constant Growth Model):\n$$\\text{Nilai Perusahaan} = \\frac{\\text{FCF}_1}{\\text{WACC} - g} = \\frac{\\text{Rp } 500 \\text{ Miliar}}{0,10 - 0,05} = \\frac{\\text{Rp } 500 \\text{ Miliar}}{0,05} = \\mathbf{Rp\\ 10.000 \\text{ Miliar}}$$',
            '**2. Menghitung Nilai Ekuitas Pemegang Saham (Value of Equity)**:\n$$\\text{Nilai Ekuitas} = \\text{Total Nilai Perusahaan} - \\text{Total Nilai Utang}$$\n$$\\text{Nilai Ekuitas} = \\text{Rp } 10.000 \\text{ Miliar} - \\text{Rp } 2.000 \\text{ Miliar} = \\mathbf{Rp\\ 8.000 \\text{ Miliar}}$$',
            '**3. Menghitung Nilai Intrinsik Per Lembar Saham ($P_0^*$)**:\n$$\\text{Nilai Intrinsik per Lembar} = \\frac{\\text{Nilai Ekuitas}}{\\text{Jumlah Saham Beredar}} = \\frac{\\text{Rp } 8.000 \\text{ Miliar}}{200 \\text{ Juta Lembar}} = \\mathbf{Rp\\ 4.000 \\text{ per lembar}}$$',
            '**4. Evaluasi Kondisi Pasar & Rekomendasi Investasi**:\n- Nilai Intrinsik ($P_0^* = \\text{Rp } 4.000$) > Harga Pasar Aktual ($P_0 = \\text{Rp } 3.500$).\n- **Status Saham**: **Undervalued** (diperdagangkan dengan diskon Rp 500 atau 12,5% di bawah nilai fundamentalnya).\n- **Rekomendasi Analis**: **BUY (Beli / Akumulasi)**. Dalam kondisi efisiensi pasar yang wajar, tekanan aksi beli akan mendorong harga pasar naik menuju nilai intrinsiknya di Rp 4.000.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 3: Desain Kompensasi Manajemen & Mitigasi Horizon Problem',
      prompt: 'Dewan Komisaris PT Bio Farma Sejahtera mengamati bahwa Direktur Utama menolak proyek riset vaksin baru yang membutuhkan investasi CapEx Rp 50 Miliar hari ini namun diperkirakan menghasilkan nilai tambah NPV sebesar Rp 120 Miliar dalam 7 tahun ke depan. CEO menolak karena ia akan pensiun dalam 2 tahun, dan pengeluaran riset saat ini akan menurunkan laba bersih kuartalan serta memangkas bonus tunai tahunannya. Rancanglah restrukturisasi paket kompensasi untuk mengatasi konflik keagenan ini!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Diagnosis Masalah Keagenan**:\nTerjadi **Horizon Problem** dan **Risk Aversion**. Insentif manajer terkunci pada bonus tunai berbasis laba akuntansi jangka pendek (Net Income), sehingga ia mengorbankan proyek investasi ber-NPV positif yang sebenarnya memaksimalkan kekayaan pemegang saham.',
            '**2. Restrukturisasi Struktur Kompensasi**:\n- **Kurangi Porsi Bonus Kas Tahunan Murni**: Batasi ketergantungan kompensasi pada laba akuntansi kuartalan agar direksi tidak termotivasi memotong belanja modal penting.\n- **Pemberian Restricted Stock Units (RSU) / Performance Shares**: Berikan hibah saham bersyarat yang didasarkan pada pencapaian indikator nilai tambah ekonomis (Economic Value Added / EVA) jangka panjang.\n- **Penerapan Masa Tunggu (Vesting Period) 5 Tahun**: Saham atau opsi saham yang diberikan dilarang dijual sebelum 5 tahun, bahkan jika sang eksekutif telah pensiun pada tahun kedua. Ketentuan ini memaksa CEO mengambil keputusan yang menjaga nilai saham tetap tinggi pasca-pensiunnya.',
            '**3. Klausul Pengembalian Bonus (Clawback Provision)**:\nSertakan klausul pembatalan dan penarikan kembali bonus jika di kemudian hari terbukti laba masa lalu merupakan hasil manipulasi akrual atau penundaan biaya strategis.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 4: Dilema Pengambilan Risiko (Asset Substitution) Debtholders vs Shareholders',
      prompt: 'PT Garuda Ekspres menghadapi kesulitan keuangan. Perusahaan memiliki utang obligasi Rp 80 Miliar yang jatuh tempo dalam 1 tahun dan aset yang tersisa saat ini bernilai Rp 85 Miliar. Manajemen dihadapkan pada peluang Proyek Investasi Spekulatif yang membutuhkan seluruh aset Rp 85 Miliar: Proyek memiliki probabilitas 20% menghasilkan kas Rp 200 Miliar dan probabilitas 80% menghasilkan kas hanya Rp 10 Miliar. Hitung expected payoff pemegang saham dan kreditor jika proyek diambil vs tidak diambil, serta jelaskan mengapa terjadi konflik keagenan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kondisi Jika Proyek DITOLAK (Aset Tetap Likuid Rp 85 Miliar)**:\n- Kas Tersedia = Rp 85 Miliar.\n- Kreditor menerima hak utang pokok penuh = **Rp 80 Miliar**.\n- Pemegang Saham menerima sisa ekuitas = $\\text{Rp } 85 \\text{ Miliar} - \\text{Rp } 80 \\text{ Miliar} = \\mathbf{Rp\\ 5 \\text{ Miliar}}$.',
            '**2. Kondisi Jika Proyek Spekulatif DIAMBIL**:\n- **Skenario Sukses (Probabilitas 20%, Kas Rp 200 Miliar)**:\n  Kreditor menerima pembayaran utang penuh = Rp 80 Miliar.\n  Pemegang Saham menerima sisa laba = $\\text{Rp } 200 \\text{ Miliar} - \\text{Rp } 80 \\text{ Miliar} = \\text{Rp } 120 \\text{ Miliar}$.\n- **Skenario Gagal (Probabilitas 80%, Kas Rp 10 Miliar)**:\n  Kreditor menerima seluruh kas sisa likuidasi = Rp 10 Miliar (mengalami kerugian/haircut Rp 70 Miliar).\n  Pemegang Saham menerima = Rp 0 (karena tanggung jawab terbatas/limited liability).\n- **Expected Payoff Pemegang Saham**:\n  $$\\text{E(Payoff)} = (0,20 \\times \\text{Rp } 120 \\text{ Miliar}) + (0,80 \\times \\text{Rp } 0) = \\mathbf{Rp\\ 24 \\text{ Miliar}}$$\n- **Expected Payoff Kreditor**:\n  $$\\text{E(Payoff)} = (0,20 \\times \\text{Rp } 80 \\text{ Miliar}) + (0,80 \\times \\text{Rp } 10 \\text{ Miliar}) = \\text{Rp } 16 \\text{ Miliar} + \\text{Rp } 8 \\text{ Miliar} = \\mathbf{Rp\\ 24 \\text{ Miliar}}$$',
            '**3. Analisis Konflik Keagenan (Asset Substitution Problem)**:\n- Bagi Pemegang Saham, mengambil proyek spekulatif menaikkan nilai ekspektasi dari **Rp 5 Miliar menjadi Rp 24 Miliar** (keuntungan bersih +Rp 19 Miliar). Pemegang saham bermain dengan uang kreditor (*Heads I win, Tails the bank loses*).\n- Bagi Kreditor, nilai ekspektasi klaim anjlok drastis dari **Rp 80 Miliar menjadi Rp 24 Miliar** (kerugian masif -Rp 56 Miliar).\n- **Mitigasi**: Kreditor wajib melindungi diri sejak awal dengan **Debt Covenants** (larangan pergantian lini bisnis berisiko dan larangan pelepasan aset likuid).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: '7. Rangkuman & Kunci Sukses Ujian (Key Exam Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Shareholder Wealth Maximization adalah Kompas Utama**: Seluruh keputusan keuangan (investasi CapEx, rasio utang modal, kebijakan modal kerja) dinilai baik hanya jika keputusan tersebut meningkatkan nilai intrinsik saham jangka panjang.',
        '**Laba Akuntansi $\\neq$ Arus Kas Bebas (FCF)**: Laba bersih dapat dipercantik dengan metode akrual, mengabaikan biaya modal ekuitas, dan mengabaikan nilai waktu uang. FCF adalah uang riil yang tersedia bagi seluruh penyedia modal.',
        '**Bentuk Korporasi (PT) Unggul dalam Skalabilitas**: Meskipun menanggung beban pajak berganda, PT adalah satu-satunya bentuk organisasi yang mampu menghimpun triliunan rupiah modal publik berkat fitur Limited Liability dan likuiditas saham di bursa efek.',
        '**Dua Front Konflik Keagenan**: Konflik Tipe 1 (Pemegang Saham vs Manajer) dimitigasi dengan paket opsi saham ber-vesting dan ancaman akuisisi; Konflik Tipe 2 (Pemegang Saham vs Kreditor) dimitigasi dengan Debt Covenants yang membatasi rasio leverage dan penarikan dividen tunai.',
        '**Etika Menopang Nilai Intrinsik**: Praktik tata kelola (GCG) dan etika bisnis yang sehat menurunkan premi risiko korporasi, memangkas biaya modal WACC, dan mencegah kerugian reputasi fatal.'
      ]
    }
  ]
};
