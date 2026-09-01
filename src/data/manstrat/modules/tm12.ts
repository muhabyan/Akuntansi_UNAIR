import type { Reading } from '../../../types';
import { CASE_ZARA_FAST_FASHION_SUPPLY } from '../manstratPracticeCases';

const SVG_ZARA_SUPPLY_CHAIN = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">RANTAI PASOK RESPON CEPAT ZARA INDITEX VS STRATEGI KEMEWAHAN LVMH</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. DESAIN KILAT</text>
  <text x="125" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Feedback Toko Real-Time):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 300+ desainer internal</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pantau tren runway &amp; media</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sketsa pola selesai 24 jam</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Respon Selera Konsumen</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">2. PRODUKSI FLEKSIBEL</text>
  <text x="340" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Near-Shoring Spanyol/Portugal):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pabrik otomatis sendiri (50%)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kain polos dicelup belakangan</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Batch produksi kecil (Scarcity)</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Hindari Stok Menumpuk</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3. LOGISTIK TERBANG</text>
  <text x="555" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Distribusi Global 48 Jam):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Hub logistik La Coruna Spanyol</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kirim udara 2x seminggu</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Total siklus: Hanya 15 HARI!</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Keunggulan Waktu Kilat</text>
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
