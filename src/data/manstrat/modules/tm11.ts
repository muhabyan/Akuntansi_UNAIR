import type { Reading } from '../../../types';

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Studi Kasus Strategik I: Model Bisnis Platform & Ekosistem Digital (TheoryBridge.com & Alibaba Group)',
  ref: 'Silabus Resmi Manajemen Stratejik FEB UNAIR | Case Study: Alibaba & TheoryBridge',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 11: Menganalisis studi kasus nyata model bisnis platform dua sisi (*Two-Sided Platform Businesses*) dan ekosistem digital raksasa Asia (Alibaba Group: Taobao, Tmall, Alipay/Ant Financial, Cainiao Logistics, Alibaba Cloud) serta kasus startup analitik TheoryBridge.com. Mengupas efek jaringan (*Network Effects: Direct vs Indirect*), monetisasi data, strategi mengatasi masalah ayam-dan-telur (*Chicken-and-Egg Problem*), serta ketahanan regulasi antimonopoli platform.',
  objectives: [
    'Menganalisis perbedaan fundamental Model Bisnis Linier (Pipeline) vs Model Bisnis Platform (Platform Ecosystems).',
    'Menjelaskan mekanisme Efek Jaringan Langsung (Direct Network Effects) dan Efek Jaringan Silang (Indirect / Cross-Side Network Effects).',
    'Mengevaluasi strategi Alibaba Group dalam membangun ekosistem perdagangan digital terintegrasi (E-Commerce + Fintech + Logistik Pintar + Cloud AI).',
    'Mendiagnosis tantangan monetisasi dan penentuan harga pada platform digital rintisan (TheoryBridge.com).',
    'Merumuskan strategi defensif platform digital menghadapi ancaman regulasi antimonopoli dan perang privasi data konsumen.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Model Bisnis Pipeline vs Model Bisnis Platform' },
    {
      kind: 'table',
      headers: ['Dimensi Model Bisnis', 'Model Linier Tradisional (Pipeline)', 'Model Ekosistem Platform (Platform)'],
      rows: [
        ['Penciptaan Nilai', '**Linier Berurutan**: Produsen merancang produk $\\rightarrow$ pabrik memproduksi $\\rightarrow$ toko menjual ke konsumen.', '**Jaringan Multiarah**: Memfasilitasi interaksi langsung dan pertukaran nilai antarpengguna independen (pembeli & penjual).'],
        ['Aset Kunci Organisasi', 'Aset fisik berwujud (Pabrik, inventaris gudang, gerai toko).', '**Aset Tak Berwujud & Data**: Algoritma pencocokan (*Matching Algorithms*), data pengguna, dan komunitas aktif.'],
        ['Skalabilitas Bisnis', 'Terbatas oleh biaya modal fisik (*High Marginal Costs*).', '**Skalabilitas Eksponensial**: Biaya marginal penambahan pengguna baru mendekati Rp 0 (*Zero Marginal Cost*).']
      ],
      caption: 'Tabel 11.1: Pergeseran paradigma dari pipeline konvensional ke platform digital.'
    },

    { kind: 'h2', text: '2. Studi Kasus Alibaba Group: Anatomi Ekosistem Digital' },
    {
      kind: 'table',
      headers: ['Pilar Ekosistem Alibaba', 'Fungsi Strategis Platform', 'Peran dalam Menciptakan Efek Jaringan Silang'],
      rows: [
        ['**Taobao (C2C) & Tmall (B2C)**', 'Pasar e-commerce tempat bertemunya jutaan penjual UMKM/merek global dengan ratusan juta pembeli.', 'Makin banyak pembeli $\\rightarrow$ makin banyak penjual bergabung $\\rightarrow$ variasi barang makin lengkap $\\rightarrow$ pembeli makin puas (*Flywheel Effect*).'],
        ['**Alipay / Ant Group**', 'Infrastruktur pembayaran digital terpercaya dan layanan kredit mikro (*Escrow Service*).', 'Menghilangkan friksi ketidakpercayaan dalam transaksi online (mengatasi risiko penipuan awal di Tiongkok).'],
        ['**Cainiao Network**', 'Platform logistik data cerdas yang mengoordinasikan puluhan mitra kurir independen.', 'Mempercepat pengiriman barang dalam 24 jam ke seluruh pelosok tanpa harus memiliki seluruh armada truk sendiri.'],
        ['**Alibaba Cloud**', 'Infrastruktur komputasi awan dan analitik big data AI.', 'Menopang lonjakan jutaan transaksi per detik saat festival belanja *Single\'s Day (11.11)*.']
      ],
      caption: 'Tabel 11.2: Empat pilar penggerak ekosistem digital Alibaba.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Diskusi Kasus TM 11' },
    {
      kind: 'ul',
      items: [
        '**Chicken-and-Egg Problem**: Masalah klasik platform saat memulai (penjual tidak mau masuk karena belum ada pembeli; pembeli tidak mau datang karena belum ada barang). Solusi: Memberikan subsidi gratis pada satu sisi (*Subsidized Side*, misal gratis biaya daftar penjual awal).',
        '**Multi-Homing Costs**: Biaya yang dikeluarkan pengguna untuk menggunakan beberapa platform kompetitor sekaligus. Strategi platform adalah menaikkan biaya berpindah (*Lock-in Mechanisms*) melalui program loyalitas data terintegrasi.',
        '**Studi Kasus TheoryBridge.com**: Startup harus membuktikan proposisi nilai analitik yang tajam (*Product-Market Fit*) sebelum mencoba memonetisasi biaya langganan ke pengguna awal.'
      ]
    }
  ]
};