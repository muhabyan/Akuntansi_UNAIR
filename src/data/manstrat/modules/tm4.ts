import type { Reading } from '../../../types';

const SVG_GENERIC_STRATEGIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRATEGI TINGKAT BISNIS GENERIK (BUSINESS-LEVEL STRATEGIES - DESS CH. 5)</text>
  
  <!-- Overall Cost Leadership -->
  <rect x="40" y="50" width="280" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="180" y="72" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Overall Cost Leadership</text>
  <text x="180" y="88" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keunggulan Biaya Rendah &amp; Target Pasar Luas</text>
  <text x="180" y="102" fill="#34d399" font-size="8.5" font-weight="600" text-anchor="middle">(Walmart, IKEA, AirAsia)</text>

  <!-- Broad Differentiation -->
  <rect x="360" y="50" width="280" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="500" y="72" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. Broad Differentiation</text>
  <text x="500" y="88" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keunikan Produk Premium &amp; Target Pasar Luas</text>
  <text x="500" y="102" fill="#fbbf24" font-size="8.5" font-weight="600" text-anchor="middle">(Apple, BMW, Starbucks)</text>

  <!-- Cost Focus -->
  <rect x="40" y="125" width="280" height="65" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="180" y="147" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">3. Cost Focus (Fokus Biaya)</text>
  <text x="180" y="163" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keunggulan Biaya pada Segmen Ceruk Sempit</text>
  <text x="180" y="177" fill="#7dd3fc" font-size="8.5" font-weight="600" text-anchor="middle">(Aldi di segmen diskon ekstrem lokal)</text>

  <!-- Differentiation Focus -->
  <rect x="360" y="125" width="280" height="65" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="500" y="147" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">4. Differentiation Focus (Fokus Unik)</text>
  <text x="500" y="163" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keunikan Produk pada Segmen Ceruk Mewah</text>
  <text x="500" y="177" fill="#c084fc" font-size="8.5" font-weight="600" text-anchor="middle">(Ferrari, Rolex, Patek Philippe)</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Business-Level Strategy: Keunggulan Bersaing Generik & Siklus Hidup Industri',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 5',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 4: Menguasai formulasi Strategi Tingkat Bisnis (*Business-Level Strategy*), Tiga Strategi Bersaing Generik Michael Porter (*Overall Cost Leadership, Differentiation, Focus*), bahaya terjebak di tengah (*Stuck in the Middle*), Strategi Kombinasi (*Integrated Low-Cost and Differentiation* melalui Kustomisasi Massal / *Mass Customization*), serta Strategi Penyesuaian Tahapan Siklus Hidup Industri (*Introduction, Growth, Maturity, Decline*).',
  objectives: [
    'Menganalisis strategi Keunggulan Biaya Menyeluruh (Overall Cost Leadership: skala ekonomi, kurva pengalaman / *experience curve*, pengendalian biaya overhead ketat).',
    'Menganalisis strategi Diferensiasi (Diferensiasi prestise merek, kualitas desain, inovasi teknologi, dan layanan unggul).',
    'Membandingkan strategi Fokus Biaya vs Fokus Diferensiasi dalam melayani pasar ceruk (*niche market*).',
    'Menjelaskan risiko strategis terjebak di tengah (Stuck in the Middle) dan cara mencapainya melalui Integrated Low-Cost and Differentiation.',
    'Merumuskan strategi bisnis pada 4 Tahap Siklus Hidup Industri: Pengenalan (Diferensiasi R&D), Pertumbuhan (Pembangunan Merek), Kematangan (Efisiensi Biaya), dan Penurunan (Harvesting, Consolidation, Divestment).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Empat Strategi Tingkat Bisnis Generik Michael Porter',
      svg: SVG_GENERIC_STRATEGIES,
      caption: 'Gambar 4.1: Matriks basis keunggulan bersaing vs cakupan target pasar yang dilayani.'
    },

    { kind: 'h2', text: '1. Komparasi Tiga Strategi Generik Porter' },
    {
      kind: 'table',
      headers: ['Strategi Bisnis', 'Keunggulan Utama', 'Persyaratan Rantai Nilai', 'Risiko Utama'],
      rows: [
        ['**1. Overall Cost Leadership**', 'Biaya per unit paling rendah di industri.', 'Fasilitas skala efisien, otomatisasi tinggi, rekayasa proses, pengawasan biaya ketat.', 'Pesaing meniru metode produksi; perang harga mengikis margin; mengabaikan diferensiasi penting.'],
        ['**2. Differentiation**', 'Presepsi keunikan nilai yang bernilai tinggi bagi pembeli (*Willingness-to-Pay* tinggi).', 'R&D terdepan, pemasaran kreatif, material premium, layanan pelanggan luar biasa.', 'Selisih harga terlalu mahal; pemalsuan/imitasi merek; selera konsumen berubah menjadi komoditas.'],
        ['**3. Focus (Cost / Differentiation)**', 'Melayani kebutuhan spesifik segmen pasar sempit secara mendalam.', 'Keahlian ceruk mendalam, fleksibilitas kustomisasi tinggi.', 'Pesaing generik memasuki ceruk pasar; perbedaan segmen ceruk dengan pasar massal memudar.']
      ],
      caption: 'Tabel 4.1: Keunggulan, syarat, dan risiko strategi bersaing generik.'
    },

    { kind: 'h2', text: '2. Strategi Berdasarkan Siklus Hidup Industri (Industry Life Cycle)' },
    {
      kind: 'table',
      headers: ['Tahap Siklus Hidup', 'Karakteristik Pertumbuhan & Pesaing', 'Fokus Strategi Bisnis yang Tepat'],
      rows: [
        ['**1. Introduction (Pengenalan)**', 'Pertumbuhan lambat, produk belum terstandardisasi, sedikit pesaing, margin operasi rendah.', '**Diferensiasi Produk**: Edukasi pasar, investasi R&D, dan uji coba fitur awal.'],
        ['**2. Growth (Pertumbuhan)**', 'Permintaan melonjak cepat, muncul desain standar dominan, banyak pendatang baru.', '**Diferensiasi Merek & Perluasan Distribusi**: Membangun loyalitas konsumen dan mengamankan saluran ritel.'],
        ['**3. Maturity (Kematangan)**', 'Pertumbuhan pasar melambat/jenuh, persaingan harga meningkat sengit, konsolidasi industri.', '**Efisiensi Biaya & Inovasi Proses**: Mengoptimalkan rantai pasok dan menekan biaya produksi per unit.'],
        ['**4. Decline (Penurunan)**', 'Penjualan menurun drastis akibat teknologi substitusi baru.', '**Memilih 4 Opsi**: Mempertahankan (*Maintain*), Memanen (*Harvesting*), Menghentikan/Menjual (*Divesting*), atau Konsolidasi akuisisi.']
      ],
      caption: 'Tabel 4.2: Evolusi strategi sepanjang siklus hidup industri.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**Experience Curve (Kurva Pengalaman)**: Biaya produksi unit menurun secara proporsional seiring bertambahnya volume output kumulatif perusahaan berkat pembelajaran operasional.',
        '**Mass Customization**: Kemampuan memproduksi produk yang dipersonalisasi sesuai pesanan konsumen individual dengan efisiensi biaya skala massal (misal Dell PC atau Nike By You).',
        '**Platform Businesses**: Model bisnis dua sisi (*Two-Sided Markets*) yang menghubungkan produsen dan konsumen dengan efek jaringan (*Network Effects*, misal Uber, Tokopedia, Airbnb).'
      ]
    }
  ]
};