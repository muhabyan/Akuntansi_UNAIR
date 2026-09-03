import type { Reading } from '../../../types';
import { CASE_ZARA_FAST_FASHION_SUPPLY } from '../manstratPracticeCases';

const SVG_ZARA_SUPPLY_CHAIN = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="zaraGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="luxGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns12)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KOMPARASI STRATEGI RANTAI PASOK: ZARA FAST FASHION VS CLASSIC LUXURY (LVMH)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">SUPPLY CHAIN</text>

  <!-- Left: ZARA AGILE PULL MODEL -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#zaraGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">ZARA INDITEX: FAST FASHION AGILE PULL SYSTEM</text>
    
    <!-- Timeline Badge -->
    <rect class="svg-subcard" x="16" y="44" width="363" height="36" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="197" y="60" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">KECEPATAN SIKLUS: 15 HARI (DESAIN KE TOKO)</text>
    <text class="svg-muted" x="197" y="72" fill="#94a3b8" font-size="7.5" text-anchor="middle">Respon Cepat Mengikuti Tren Viral TikTok / Runway</text>

    <text class="svg-text" x="16" y="100" fill="#cbd5e1" font-size="8">• Produksi batch kecil (Artificial Scarcity) →Minim diskon obral</text>
    <text class="svg-text" x="16" y="118" fill="#cbd5e1" font-size="8">• Pabrikasi dekat Spanyol/Portugal/Maroko (Near-shoring lincah)</text>
    <text class="svg-text" x="16" y="136" fill="#cbd5e1" font-size="8">• Data penjualan POS harian langsung memicu pesanan jahit baru</text>
    <text class="svg-text" x="16" y="154" fill="#cbd5e1" font-size="8">• Distribusi logistik udara 48 jam ke seluruh gerai dunia</text>
    <rect class="svg-badge-blue" x="16" y="180" width="363" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="196" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Keunggulan: Perputaran Persediaan Sangat Cepat &amp; Full Margin</text>
  </g>

  <!-- Right: CLASSIC LUXURY PUSH MODEL -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="225" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#luxGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="16" y="20" fill="#fbbf24" font-size="10.5" font-weight="800">CLASSIC LUXURY (LVMH / HERMÈS): HERITAGE PUSH</text>
    
    <!-- Timeline Badge -->
    <rect class="svg-subcard" x="16" y="44" width="363" height="36" rx="6" fill="#1e293b" stroke="#fbbf24"/>
    <text class="text-accent-amber" x="197" y="60" fill="#fbbf24" font-size="9" font-weight="800" text-anchor="middle">KECEPATAN SIKLUS: 6 - 12 BULAN (TIMELESS HERITAGE)</text>
    <text class="svg-muted" x="197" y="72" fill="#94a3b8" font-size="7.5" text-anchor="middle">Menciptakan Tren &amp; Menjaga Citra Keabadian Merek</text>

    <text class="svg-text" x="16" y="100" fill="#cbd5e1" font-size="8">• Keahlian tangan perajin Eropa (Artisanal Craftsmanship)</text>
    <text class="svg-text" x="16" y="118" fill="#cbd5e1" font-size="8">• Kelangkaan absolut terkendali (Daftar tunggu tas Birkin bertahun-tahun)</text>
    <text class="svg-text" x="16" y="136" fill="#cbd5e1" font-size="8">• Tidak pernah melakukan diskon harga (Proteksi nilai prestise)</text>
    <text class="svg-text" x="16" y="154" fill="#cbd5e1" font-size="8">• Penetapan harga ultra-premi dengan margin laba kotor 70%+</text>
    <rect class="svg-badge-amber" x="16" y="180" width="363" height="24" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="197" y="196" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Keunggulan: Pricing Power Mutlak &amp; Nilai Investasi Kolektor</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Zara memenangkan persaingan melalui kecepatan respon waktu (Time-based), sedangkan Luxury memenangkan persaingan melalui mitologi warisan &amp; prestise.</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Studi Kasus Strategik II: Fast Fashion vs Luxury Strategy (H&M Dilemma & Louis Vuitton LVMH)',
  ref: 'Ferdows, Lewis, & Machuca (Rapid-Fire Fulfillment - Zara) | Jean-Noel Kapferer (The Luxury Strategy) | Kasus Inditex vs LVMH',
  intro: 'TM 12 menyajikan studi kasus komparatif dua kutub strategi industri fashion dunia: Model Respon Cepat Fast Fashion (Inditex Zara) vs Strategi Kemewahan Murni (LVMH Louis Vuitton): arsitektur rantai pasok berbasis waktu (Time-Based Competition), kedekatan lokasi manufaktur (Near-Shoring vs Far-Shoring), pengelolaan kelangkaan buatan (Artificial Scarcity), minimalisasi potongan harga (Markdown Avoidance), serta logika anti-hukum ekonomi tradisional pada strategi barang mewah Veblen (The Anti-Laws of Marketing).',
  objectives: [
    'Menganalisis sistem rantai pasok Quick Response Zara yang memangkas siklus desain ke rak toko menjadi 15 hari.',
    'Menjelaskan mengapa Zara mempertahankan fasilitas manufaktur di Eropa berupah tinggi (Near-Shoring) demi fleksibilitas.',
    'Membedakan Strategi Mode Cepat (Fast Fashion) vs Strategi Kemewahan (Luxury Strategy LVMH).',
    'Menganalisis fenomena Barang Veblen (Veblen Goods) dan penolakan terhadap hukum elastisitas harga permintaan.',
    'Mengevaluasi risiko keberlanjutan lingkungan (ESG) dari model bisnis pakaian sekali pakai (Fast Fashion Waste).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Rantai Pasok Respon Cepat (Quick Response) Tiga Tahap Inditex Zara.',
      svg: SVG_ZARA_SUPPLY_CHAIN
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Dimensi Strategis', 'Model Fast Fashion (Zara / Inditex)', 'Model Luxury Strategy (Louis Vuitton / LVMH)'],
      rows: [
        ['Proposisi Nilai Inti', 'Tren mode catwalk terkini dengan harga terjangkau dan ketersediaan cepat.', 'Kemewahan abadi, prestise simbol status sosial, pengerjaan tangan adiluhung.'],
        ['Siklus Hidup Produk', 'Sangat pendek (3 s/d 4 minggu di rak toko).', 'Sangat panjang (puluhan tahun / produk warisan lintas generasi).'],
        ['Kebijakan Diskon / Obral', 'Minim (hanya 15-20% karena stok diproduksi dalam batch terbatas).', 'DILARANG KERAS; produk sisa dibakar atau ditarik, tidak pernah diobral murah.'],
        ['Lokasi Manufaktur', 'Near-shoring di Spanyol/Portugal/Maroko demi kecepatan respon waktu.', 'Bengkel pengrajin tradisional di Prancis dan Italia demi menjaga otentisitas asal usul.'],
        ['Strategi Periklanan', 'Hampir 0% iklan TV/majalah; mengandalkan lokasi toko gerai prima di jalan utama.', 'Kampanye iklan artistik bernilai ratusan juta dolar di majalah mode elit.'],
        ['Dinamika Elastisitas Harga', 'Sensitif terhadap kisaran harga terjangkau konsumen kelas menengah.', 'Barang Veblen: Kenaikan harga justru mendongkrak persepsi eksklusivitas dan permintaan.']
      ],
      caption: 'Tabel 12.0: Matriks komparasi strategi Fast Fashion vs Luxury.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 5 Anti-Hukum Pemasaran Barang Mewah (Kapferer)'
    },
    {
      kind: 'table',
      headers: ['Anti-Hukum Pemasaran Mewah', 'Aturan Tradisional yang Dilanggar', 'Rasionalitas Strategi Kemewahan'],
      rows: [
        ['1. Jangan Memuaskan Permintaan Secara Penuh', 'Bisnis biasa berusaha memproduksi sebanyak mungkin untuk memenuhi pesanan.', 'Kemewahan menuntut daftar tunggu (waiting list) panjang agar produk tetap langka dan diburu.'],
        ['2. Jadikan Pembelian Sulit Dijangkau', 'Bisnis biasa mempermudah akses pembayaran dan kredit instan.', 'Konsumen harus berusaha keras untuk mendapatkan tas Birkin Hermes agar merasa istimewa.'],
        ['3. Naikkan Harga Seiring Berjalannya Waktu', 'Bisnis biasa menurunkan harga saat produk menua.', 'Menaikkan harga tahunan membuktikan bahwa tas mewah adalah aset investasi yang bernilai.'],
        ['4. Jangan Pernah Melakukan Relokasi Pabrik ke Negara Murah', 'Bisnis biasa mencari upah buruh termurah di Asia Tenggara.', 'Tas Louis Vuitton harus dibuat di Prancis; relokasi ke pabrik murah akan membunuh jiwa merek.'],
        ['5. Jangan Berkompromi Demi Menyenangkan Semua Orang', 'Bisnis biasa melakukan riset fokus grup untuk menyenangkan mayoritas.', 'Kemewahan mendikte selera (*luxury dictates taste*), bukan mengikuti kemauan pasar.']
      ],
      caption: 'Tabel 12.1: Karakteristik anti-hukum pemasaran barang mewah Jean-Noel Kapferer.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema H&M Terjebak Stok Menumpuk (Deadstock Markdown)',
      prompt: 'H&M meng-outsource 100% produksinya ke pabrik di Bangladesh dan Tiongkok dengan waktu tunggu (lead time) 6-9 bulan untuk mengincar biaya tenaga kerja termurah. Ketika musim panas tiba dan tren warna neon tiba-tiba digantikan oleh warna pastel, apa bencana bisnis yang dialami H&M dibanding Zara?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Kelemahan Rantai Pasok Jarak Jauh (Far-Shoring)**: Keputusan desain H&M telah dikunci 9 bulan sebelum musim penjualan. Mereka tidak bisa mengubah pesanan jutaan baju warna neon yang sudah telanjur dikapalkan di tengah samudra.',
            '**Bencana Finansial (Deadstock)**: Baju warna neon tidak laku di toko karena tren telah bergeser ke pastel. H&M terpaksa melakukan diskon obral cuci gudang besar-besaran (hingga diskon 70%), yang menghancurkan margin laba dan citra merek.',
            '**Keunggulan Zara**: Karena pabrik Zara dekat (Near-Shoring), Zara baru memotong kain warna pastel setelah melihat data penjualan minggu pertama, sehingga mereka tidak pernah menimbun baju yang tidak disukai pasar.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Rantai Pasok Respon Cepat Zara', 'Near-shoring, batch kecil, penghindaran diskon, dan logistik terpusat.', 'Mampu menguraikan keunggulan bersaing berbasis waktu.'],
        ['2', 'Strategi Kemewahan (Luxury)', 'Anti-laws of marketing Kapferer dan efek barang Veblen.', 'Mampu menjelaskan penolakan diskon pada industri barang mewah.'],
        ['3', 'Evaluasi Dampak ESG Fashion', 'Kritik limbah tekstil fast fashion vs warisan kerajinan berkelanjutan.', 'Mampu merumuskan respon strategis terhadap regulasi lingkungan.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 Manajemen Strategik.'
    },
    CASE_ZARA_FAST_FASHION_SUPPLY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Kecepatan Mengalahkan Biaya Murah**: Keberhasilan Zara membuktikan bahwa membayar upah buruh Eropa yang lebih mahal dapat menghasilkan laba lebih tinggi karena mengeliminasi biaya potongan diskon obral.',
        '**Kemewahan Menjual Mimpi, Bukan Fungsi**: Tas mewah tidak dinilai dari kapasitas muatannya, melainkan dari status sosial dan emosi kepemilikan yang disematkan padanya.',
        '**Artificial Scarcity Memicu Pembelian**: Membatasi jumlah barang yang dipajang di toko menciptakan urgensi psikologis bagi pembeli untuk tidak menunda transaksi.'
      ]
    }
  ]
};
