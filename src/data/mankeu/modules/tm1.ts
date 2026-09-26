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
  intro: 'TM 1 membahas dasar-dasar manajemen keuangan: apa sih sebenarnya tugas seorang CFO, bedanya Treasurer sama Controller, kenapa bentuk badan usaha (Perseorangan, CV, PT) itu penting buat keputusan keuangan, dan yang paling sering keluar di ujian — Teori Keagenan (Agency Theory). Intinya, pemegang saham dan manajer itu punya kepentingan beda, dan perusahaan harus punya mekanisme supaya manajer nggak seenaknya sendiri.',
  objectives: [
    'Paham 3 bidang utama keuangan (Corporate Finance, Pasar Modal, Investasi) dan bedanya tugas Treasurer vs Controller.',
    'Tahu kelebihan-kekurangan tiap bentuk badan usaha: soal tanggung jawab hukum (unlimited vs limited liability) dan pajaknya.',
    'Ngerti kenapa tujuan perusahaan itu bukan cuma "cari laba sebesar-besarnya", tapi memaksimalkan nilai saham jangka panjang.',
    'Bisa bedain Nilai Intrinsik saham (fundamental value) sama Harga Pasar — kapan saham undervalued, overvalued, atau equilibrium.',
    'Paham konflik keagenan: Pemegang Saham vs Manajer, dan cara ngatasinnya (stock options, dewan komisaris, ancaman takeover).',
    'Paham konflik Pemegang Saham vs Kreditor (masalah asset substitution) dan cara ngatasinnya lewat Debt Covenants.',
    'Tahu pentingnya etika bisnis, Sarbanes-Oxley Act (SOX), dan tanggung jawab sosial (ESG) buat nilai perusahaan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Segitiga konflik keagenan dan cara perusahaan mengatasinya.',
      svg: SVG_AGENCY_GOVERNANCE,
      transcript: [
        "1. PEMEGANG SAHAM (PRINCIPAL)",
        "Tujuan: Maksimalkan Nilai Saham & Dividen",
        "2. MANAJEMEN (AGENT)",
        "Tujuan: Gaji, Fasilitas, & Kekuasaan",
        "3. KREDITOR / PERBANKAN",
        "Tujuan: Keamanan Pokok & Bunga Utang",
        "Konflik 1: Saham vs Manajer",
        "Konflik 2: Saham vs Kreditor",
        "1. KOMPENSASI BERBASIS KINERJA (ESOP)",
        "Memberikan opsi saham kepada direksi agar kepentingan manajer sejalan dengan pemegang saham untuk memacu harga saham.",
        "2. PENGAWASAN DEWAN KOMISARIS INDEPENDEN",
        "Audit eksternal independen dan komite audit untuk membatasi pengeluaran fasilitas berlebihan (Perquisites) oleh direksi.",
        "3. PERJANJIAN PEMBATASAN UTANG (DEBT COVENANTS)",
        "Kreditor mensyaratkan batas rasio leverage (DER < 2x) & saldo kas minimum sebelum perusahaan boleh membagikan dividen tunai.",
        "Mekanisme tata kelola yang efektif menekan Biaya Keagenan (Agency Cost) dan memaksimalkan nilai intrinsik perusahaan."
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Poin Paling Penting: Nilai Intrinsik vs Laba Akuntansi',
      text: '1. **Tujuan utama** manajemen keuangan bukan sekadar cari laba, tapi meningkatkan nilai intrinsik saham jangka panjang (Shareholder Wealth Maximization).\n2. **Nilai Intrinsik** itu perkiraan nilai "asli" suatu saham berdasarkan arus kas bebas (Free Cash Flow) dan risiko perusahaan di masa depan — bukan cuma angka di layar bursa.\n3. **Kenapa laba akuntansi bisa menipu?** Karena laba bersih (Net Income) nggak memperhitungkan nilai waktu uang, nggak memperhitungkan risiko, dan bisa dimanipulasi lewat kebijakan akuntansi (misal: menunda biaya R&D biar laba tahun ini keliatan gede).'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Yang Sering Keluar di Ujian FEB UNAIR',
      text: '1. **Teori Keagenan**: Dosen suka nanya kenapa manajer bisa bertindak nggak sesuai kepentingan pemegang saham, dan apa solusinya (Stock Options, Performance Shares, Vesting Period).\n2. **Valuasi Saham**: Soal tentang kapan saham undervalued vs overvalued sering muncul — paham konsep Harga Pasar vs Nilai Intrinsik itu wajib.\n3. **Bentuk Badan Usaha**: Bedain tanggung jawab hukum (Unlimited Liability di CV vs Limited Liability di PT) dan masalah pajak berganda (Double Taxation) di PT.'
    },
    {
      kind: 'h2',
      text: '1. Ruang Lingkup Keuangan & Posisi CFO dalam Korporasi'
    },
    {
      kind: 'p',
      text: 'Keuangan (Finance) itu sebenernya ada tiga bidang besar yang saling nyambung:'
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
        ['Fokus Utama Aktivitas', '🎯 **Forward-Looking (Masa Depan)**\nPengelolaan kas, modal, likuiditas, dan hubungan pasar modal.', '📊 **Backward-Looking (Historis)**\nPencatatan akuntansi historis, pelaporan berkala, dan kepatuhan regulasi.'],
        ['Manajemen Kas & Likuiditas', '💰 **Strategi Saldo Kas & Kredit**\nMenjaga saldo kas optimal, investasi jangka pendek, dan fasilitas kredit bank.', '📝 **Verifikasi Transaksi Harian**\nMelakukan rekonsiliasi bank harian, pencatatan jurnal kas, dan verifikasi faktur.'],
        ['Keputusan Penganggaran Modal', '📈 **Evaluasi Proyek & Pendanaan**\nMengevaluasi kelayakan investasi (NPV/IRR) dan mencari sumber pendanaan modal.', '📑 **Akuntansi Aset Tetap**\nMencatat pengeluaran modal (CapEx) dan menghitung beban depresiasi komersial/fiskal.'],
        ['Hubungan Mitra Eksternal', '🤝 **Pelaku Pasar Modal**\nBerinteraksi langsung dengan bankir investasi, analis sekuritas, dan agen pemeringkat kredit.', '⚖️ **Auditor & Otoritas Fiskal**\nBerinteraksi dengan auditor eksternal (KAP independen) dan pemeriksa pajak (DJP).'],
        ['Manajemen Risiko Finansial', '🛡️ **Lindung Nilai (Hedging)**\nMerancang lindung nilai suku bunga dan risiko valuta asing (pasar derivatif).', '🔒 **Pengendalian Internal**\nMengembangkan sistem pengendalian internal (SOP/COSO) dan audit kepatuhan.']
      ],
      caption: 'Tabel 1.1: Pembagian tanggung jawab eksekutif antara Treasurer dan Controller di bawah arahan CFO.'
    },
    {
      kind: 'h2',
      text: '2. Bentuk-Bentuk Badan Usaha (Forms of Business Organization)'
    },
    {
      kind: 'p',
      text: 'Ada tiga bentuk badan usaha utama yang perlu kamu tahu — masing-masing beda soal tanggung jawab hukum, akses modal, dan pajaknya:'
    },
    {
      kind: 'table',
      headers: ['Kriteria Evaluasi', 'Perusahaan Perseorangan (Proprietorship)', 'Persekutuan (Partnership / CV)', 'Perseroan Terbatas (Corporation / PT)'],
      rows: [
        ['Kemudahan & Biaya Pendirian', '🟢 **Sangat Mudah & Murah**\nTidak memerlukan akta formal rumit atau izin khusus.', '🟡 **Moderat**\nMemerlukan akta notaris & kesepakatan pembagian laba para sekutu.', '🔴 **Formal & Kompleks**\nMemerlukan akta notaris, pengesahan Kemenkumham, & anggaran dasar.'],
        ['Tanggung Jawab Hukum', '⚠️ **Tanggung Jawab Tak Terbatas**\nHarta pribadi disita penuh jika usaha mengalami kepailitan.', '⚠️ **Tanggung Jawab Campuran**\nSekutu aktif tak terbatas; sekutu pasif terbatas modal disetor.', '✅ **Tanggung Jawab Terbatas**\nPemegang saham hanya menanggung risiko sebesar modal saham disetor.'],
        ['Akses Modal & Skalabilitas', '❌ **Sangat Terbatas**\nHanya bergantung kekayaan pemilik & utang bank skala kecil.', '⚠️ **Terbatas**\nTerbatas pada modal sekutu; sulit danai proyek ekspansi raksasa.', '✅ **Sangat Luas (Akses IPO)**\nDapat menerbitkan saham & obligasi ke ribuan investor publik.'],
        ['Kelangsungan Hidup (Going Concern)', '❌ **Terbatas Umur Pemilik**\nUsaha otomatis bubar secara hukum bila pemilik meninggal dunia.', '⚠️ **Rentan Pembubaran**\nPersekutuan bubar jika ada sekutu yang mundur, pailit, atau wafat.', '✅ **Abadi (Perpetual Life)**\nEntitas hukum terpisah tetap berjalan meski pemegang saham berganti.'],
        ['Likuiditas Pengalihan Hak', '❌ **Sangat Sulit**\nMemerlukan penjualan seluruh aset fisik atau mencari pembeli baru.', '⚠️ **Sulit**\nPengalihan bagian sekutu wajib disetujui bulat oleh seluruh sekutu lain.', '✅ **Sangat Likuid**\nSaham emiten publik dapat diperjualbelikan seketika di bursa efek.'],
        ['Perlakuan Pajak Penghasilan', '✅ **Pajak Tunggal (Pass-Through)**\nDikenakan sekali pada SPT Tahunan Orang Pribadi pemilik usaha.', '✅ **Pajak Tunggal (Pass-Through)**\nLaba CV bukan objek pajak saat dibagikan ke sekutu (Ps. 4 (3) i).', '⚠️ **Pajak Berganda (Double Taxation)**\nPPh Badan 22% atas laba usaha + PPh Final 10% atas dividen pemegang saham.']
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
      text: 'Tujuan utama manajer keuangan itu satu: bikin kekayaan pemegang saham makin besar (Shareholder Wealth Maximization). Caranya? Dengan membuat nilai intrinsik saham perusahaan naik dalam jangka panjang.'
    },
    {
      kind: 'h3',
      text: 'Mengapa Maksimalisasi Nilai Saham Berbeda dari Maksimalisasi Laba Akuntansi?'
    },
    {
      kind: 'p',
      text: 'Banyak yang ngira tujuan perusahaan itu cuma "cari laba sebanyak-banyaknya". Tapi di mata mankeu, cuma fokus ke laba bersih (Net Income) itu salah besar. Kenapa? Ada 3 alasan:'
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
      headers: ['Kondisi Pasar', 'Hubungan Harga vs Nilai', 'Status Valuasi', 'Tindakan Investor Rasional', 'Dinamika Koreksi Pasar'],
      rows: [
        ['Harga Pasar < Nilai Intrinsik', '$P_0 < P_0^*$', '🟢 **Undervalued (Diskon)**', '🛍️ **BUY / Akumulasi**\nBeli saham karena harga pasar berada di bawah nilai wajar riil.', 'Lonjakan permintaan beli mendorong harga pasar naik kembali menuju nilai intrinsik.'],
        ['Harga Pasar = Nilai Intrinsik', '$P_0 = P_0^*$', '⚖️ **Equilibrium (Wajar)**', '⏸️ **HOLD / Pertahankan**\nPertahankan portofolio sesuai tingkat imbal hasil yang disyaratkan.', 'Pasar berada dalam ekuilibrium stabil tanpa tekanan aksi beli atau jual panik.'],
        ['Harga Pasar > Nilai Intrinsik', '$P_0 > P_0^*$', '🔴 **Overvalued (Gelembung)**', '🏷️ **SELL / Ambil Laba**\nJual saham atau kurangi eksposur sebelum terjadi koreksi harga turun.', 'Aksi jual masif mendorong harga pasar turun terkoreksi menuju nilai fundamentalnya.']
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
      title: 'Kasus 1: Evaluasi Pemilihan Bentuk Usaha & Pajak Berganda',
      prompt: 'Tuan Baskara dan Nyonya Citra mendirikan usaha rintisan konsultan teknologi finansial dengan modal awal Rp 1 Miliar. Pada tahun pertama operasional, usaha menghasilkan laba sebelum pajak sebesar Rp 800.000.000. Seluruh laba bersih setelah pajak direncanakan akan ditarik oleh kedua pendiri sebagai penghasilan pribadi (bagi rata 50:50).\n\nBandingkan total kas bersih yang diterima pendiri jika memilih bentuk usaha: (1) Persekutuan / CV, dibandingkan dengan (2) Perseroan Terbatas (PT) dengan tarif PPh Badan 22% dan dividen Orang Pribadi dikenakan PPh Final 10%!',
      blocks: [
        {
          kind: 'h3',
          text: 'Langkah 1: Perhitungan Kas Bersih Bentuk Persekutuan (CV)'
        },
        {
          kind: 'p',
          text: 'Berdasarkan Pasal 4 ayat (3) huruf i UU PPh Indonesia, bagian laba yang diterima oleh anggota persekutuan komanditer (CV) yang modalnya tidak terbagi atas saham **bukan merupakan objek pajak** (bebas pajak dividen):'
        },
        {
          kind: 'formula',
          text: `\\text{Laba Sebelum Pajak CV} = \\text{Rp } 800.000.000
\\text{PPh Badan (22\\%)} = 22\\% \\times \\text{Rp } 800.000.000 = \\text{Rp } 176.000.000
\\text{Sisa Laba Bersih Setelah Pajak} = \\text{Rp } 800.000.000 - \\text{Rp } 176.000.000 = \\mathbf{Rp\\ 624.000.000}
\\text{Pajak Dividen Pribadi} = \\text{Rp 0 (Bukan Objek Pajak)}
\\text{Total Kas Bersih Diterima Pemilik} = \\mathbf{Rp\\ 624.000.000}\\ (\\text{Masing-masing Rp 312.000.000})`
        },
        {
          kind: 'h3',
          text: 'Langkah 2: Perhitungan Kas Bersih Bentuk Perseroan Terbatas (PT)'
        },
        {
          kind: 'p',
          text: 'Pada perseroan terbatas, laba korporasi dikenakan **Pajak Berganda (Double Taxation)**: pertama pada tingkat entitas perseroan (PPh Badan 22%), kedua pada tingkat pemegang saham saat dividen dibagikan (PPh Final 10%):'
        },
        {
          kind: 'formula',
          text: `\\text{Laba Sebelum Pajak PT} = \\text{Rp } 800.000.000
\\text{PPh Badan (22\\%)} = 22\\% \\times \\text{Rp } 800.000.000 = \\text{Rp } 176.000.000
\\text{Laba Bersih Setelah Pajak (EAT)} = \\text{Rp } 624.000.000
\\text{PPh Final Dividen OP (10\\%)} = 10\\% \\times \\text{Rp } 624.000.000 = \\text{Rp } 62.400.000
\\text{Total Kas Bersih Diterima Pemilik} = \\text{Rp } 624.000.000 - \\text{Rp } 62.400.000 = \\mathbf{Rp\\ 561.600.000}\\ (\\text{Masing-masing Rp 280.800.000})`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Evaluasi Finansial & Pertimbangan Yuridis',
          text: '1. Efisiensi Arus Kas: Memilih bentuk CV menghasilkan tambahan kas bersih sebesar Rp 62.400.000 (+11,1%) karena terbebas dari pajak dividen berganda.\n2. Trade-Off Tanggung Jawab Hukum: Meskipun bentuk CV lebih hemat pajak, sekutu pengurus CV memikul tanggung jawab hukum pribadi tak terbatas (Unlimited Liability). Bentuk PT memberikan perisai Tanggung Jawab Terbatas (Limited Liability) yang melindungi aset pribadi pendiri dari risiko tuntutan kepailitan bisnis.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Nilai Intrinsik Saham vs Harga Pasar (Ekuilibrium)',
      prompt: 'Analis riset ekuitas mengevaluasi saham PT Telekom Nusantara Tbk. Proyeksi arus kas bebas (Free Cash Flow) tahun depan adalah Rp 500 Miliar dan diharapkan tumbuh konstan 5% per tahun selamanya. Biaya modal rata-rata tertimbang (WACC) adalah 10%. Perusahaan memiliki utang berbunga sebesar Rp 2.000 Miliar dan 200 juta lembar saham biasa beredar. Saat ini saham diperdagangkan di Bursa Efek Indonesia pada harga Rp 3.500 per lembar.\n\nHitung nilai intrinsik saham per lembar dan tentukan rekomendasi investasi bagi nasabah!',
      blocks: [
        {
          kind: 'h3',
          text: 'Langkah 1: Menghitung Nilai Total Perusahaan (Total Firm Value)'
        },
        {
          kind: 'formula',
          text: `\\text{Nilai Perusahaan} = \\frac{\\text{FCF}_1}{\\text{WACC} - g} = \\frac{\\text{Rp } 500 \\text{ Miliar}}{0,10 - 0,05} = \\frac{\\text{Rp } 500 \\text{ Miliar}}{0,05} = \\mathbf{Rp\\ 10.000 \\text{ Miliar}}`
        },
        {
          kind: 'h3',
          text: 'Langkah 2: Menghitung Nilai Ekuitas Pemegang Saham'
        },
        {
          kind: 'formula',
          text: `\\text{Nilai Ekuitas} = \\text{Total Nilai Perusahaan} - \\text{Total Nilai Utang}
\\text{Nilai Ekuitas} = \\text{Rp } 10.000 \\text{ Miliar} - \\text{Rp } 2.000 \\text{ Miliar} = \\mathbf{Rp\\ 8.000 \\text{ Miliar}}`
        },
        {
          kind: 'h3',
          text: 'Langkah 3: Menghitung Nilai Intrinsik Saham per Lembar'
        },
        {
          kind: 'formula',
          text: `P_0^* = \\frac{\\text{Nilai Ekuitas}}{\\text{Jumlah Lembar Saham}} = \\frac{\\text{Rp } 8.000 \\text{ Miliar}}{200 \\text{ Juta Lembar}} = \\mathbf{Rp\\ 4.000 \\text{ per lembar}}`
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Keputusan Investasi & Rekomendasi Analis',
          text: '1. Status Valuasi: Nilai Intrinsik ($P_0^* = \\text{Rp } 4.000$) lebih tinggi dari Harga Pasar Aktual ($P_0 = \\text{Rp } 3.500$). Saham berstatus **Undervalued** (diperdagangkan dengan diskon Rp 500 atau 12,5% di bawah nilai fundamentalnya).\n2. Rekomendasi: **BUY (Beli / Akumulasi)**. Dalam pasar modal yang efisien, aksi akumulasi beli investor rasional akan mendongkrak harga pasar naik kembali menuju nilai wajar intrinsiknya di level Rp 4.000.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 3: Desain Kompensasi Manajemen & Mitigasi Horizon Problem',
      prompt: 'Dewan Komisaris PT Bio Farma Sejahtera mengamati Direktur Utama menolak proyek riset vaksin baru ber-NPV Rp 120 Miliar dalam 7 tahun ke depan, yang memerlukan belanja modal (CapEx) Rp 50 Miliar saat ini. CEO menolak karena ia akan pensiun dalam 2 tahun, dan biaya riset akan memangkas laba akrual kuartalan serta mengurangi bonus kas tahunannya.\n\nRancanglah restrukturisasi paket kompensasi untuk mengatasi konflik keagenan ini!',
      blocks: [
        {
          kind: 'h3',
          text: 'Langkah 1: Diagnosis Masalah Keagenan (Agency Conflict)'
        },
        {
          kind: 'p',
          text: 'Terjadi **Horizon Problem** dan **Risk Aversion**. Karena insentif eksekutif terikat pada laba akuntansi jangka pendek (Net Income), manajer termotivasi mengorbankan proyek investasi ber-NPV sangat positif demi mengamankan bonus kas tahunan sebelum masa pensiunnya tiba.'
        },
        {
          kind: 'h3',
          text: 'Langkah 2: Restrukturisasi Paket Kompensasi Eksekutif'
        },
        {
          kind: 'ol',
          items: [
            '**Kurangi Porsi Bonus Kas Tahunan Murni**: Batasi ketergantungan insentif pada laba akrual tahun berjalan agar direksi tidak tergoda menunda pengeluaran belanja modal penting.',
            '**Berikan Restricted Stock Units (RSU) / Performance Shares**: Alokasikan saham hibah yang didasarkan pada metrik penciptaan nilai jangka panjang (Economic Value Added / EVA).',
            '**Terapkan Masa Tunggu (Vesting Period) 5 Tahun**: Hak pencairan saham ditangguhkan minimal 5 tahun. Ketentuan ini tetap berlaku mengikat meskipun sang CEO telah pensiun pada tahun kedua.'
          ]
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Efek Penyelarasan Kepentingan & Klausul Clawback',
          text: '1. Penyelarasan Horizon: Dengan masa vesting 5 tahun, kekayaan pensiun CEO tetap bergantung pada harga saham perusahaan di pasar modal di tahun ke-5. Hal ini mendorong CEO menyetujui proyek vaksin bernilai tambah tinggi.\n2. Klausul Clawback: Sertakan hak bagi Dewan Komisaris untuk membatalkan dan menarik kembali bonus jika terbukti terjadi manipulasi laba akrual atau pengabaian aset strategis di masa jabatannya.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 4: Risiko Asset Substitution Debtholders vs Shareholders',
      prompt: 'PT Garuda Ekspres menghadapi kesulitan keuangan. Perusahaan memiliki utang obligasi Rp 80 Miliar yang jatuh tempo dalam 1 tahun dan sisa aset bernilai Rp 85 Miliar. Manajemen ditawari proyek investasi spekulatif yang membutuhkan seluruh aset Rp 85 Miliar: memiliki probabilitas 20% menghasilkan kas Rp 200 Miliar dan 80% menghasilkan kas hanya Rp 10 Miliar.\n\nHitung expected payoff pemegang saham vs kreditor jika proyek diambil vs ditolak, serta jelaskan mengapa timbul konflik keagenan!',
      blocks: [
        {
          kind: 'h3',
          text: 'Skenario A: Proyek Spekulatif DITOLAK (Aset Likuid Rp 85 Miliar)'
        },
        {
          kind: 'p',
          text: 'Jika proyek ditolak dan kas dipertahankan likuid hingga jatuh tempo obligasi:'
        },
        {
          kind: 'formula',
          text: `\\text{Kas Likuid Tersedia} = \\text{Rp } 85 \\text{ Miliar}
\\text{Klaim Kreditor (Pelunasan Pokok Utang)} = \\mathbf{Rp\\ 80 \\text{ Miliar}}
\\text{Klaim Pemegang Saham (Sisa Ekuitas)} = \\text{Rp } 85 \\text{ M} - \\text{Rp } 80 \\text{ M} = \\mathbf{Rp\\ 5 \\text{ Miliar}}`
        },
        {
          kind: 'h3',
          text: 'Skenario B: Proyek Spekulatif DIAMBIL (Expected Payoff)'
        },
        {
          kind: 'p',
          text: 'Karena pemegang saham memiliki Tanggung Jawab Terbatas (Limited Liability), kerugian maksimal mereka terlindungi pada angka Rp 0 jika proyek gagal total:'
        },
        {
          kind: 'formula',
          text: `\\text{E(Payoff Saham)} = [0,20 \\times (\\text{Rp } 200 \\text{ M} - \\text{Rp } 80 \\text{ M})] + [0,80 \\times \\text{Rp } 0] = \\mathbf{Rp\\ 24 \\text{ Miliar}}
\\text{E(Payoff Kreditor)} = [0,20 \\times \\text{Rp } 80 \\text{ M}] + [0,80 \\times \\text{Rp } 10 \\text{ M}] = \\text{Rp } 16 \\text{ M} + \\text{Rp } 8 \\text{ M} = \\mathbf{Rp\\ 24 \\text{ Miliar}}`
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Inti Konflik Asset Substitution & Mitigasi Debt Covenants',
          text: '1. Pergeseran Risiko (Risk Shifting): Pemegang saham melonjakkan nilai ekspektasi kekayaannya dari Rp 5 Miliar menjadi Rp 24 Miliar (+Rp 19 Miliar) dengan mempertaruhkan uang kreditor. Sebaliknya, kreditor menderita potensi kerugian masif karena nilai ekspektasi klaim anjlok dari Rp 80 Miliar menjadi Rp 24 Miliar (-Rp 56 Miliar).\n2. Mitigasi Kreditor: Lembaga keuangan dan pemegang obligasi wajib menyertakan Klausul Pembatasan Utang (Debt Covenants) dalam kontrak pinjaman, termasuk larangan penggantian lini bisnis berisiko tinggi dan batas rasio likuiditas minimum.'
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
