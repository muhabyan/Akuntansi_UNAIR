import type { Reading } from '../../../types';

const SVG_FIVE_FORCES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PORTER'S FIVE FORCES OF INDUSTRY COMPETITION (DESS ET AL. CH. 2)</text>
  
  <!-- Top: Threat of New Entrants -->
  <rect x="240" y="45" width="200" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="62" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. Ancaman Pendatang Baru</text>
  <text x="340" y="76" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Hambatan Masuk &amp; Skala Ekonomi)</text>

  <!-- Left: Bargaining Power of Suppliers -->
  <rect x="25" y="95" width="180" height="50" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="115" y="115" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. Daya Tawar Pemasok</text>
  <text x="115" y="130" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Diferensiasi &amp; Switching Cost)</text>

  <!-- Center: Industry Rivalry -->
  <rect x="230" y="95" width="220" height="50" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
  <text x="340" y="116" fill="#f43f5e" font-size="11" font-weight="800" text-anchor="middle">3. PERSAINGAN ANTAR PESAING</text>
  <text x="340" y="132" fill="#fca5a5" font-size="8.5" text-anchor="middle">(Pertumbuhan Industri &amp; Biaya Tetap)</text>

  <!-- Right: Bargaining Power of Buyers -->
  <rect x="475" y="95" width="180" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="565" y="115" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">4. Daya Tawar Pembeli</text>
  <text x="565" y="130" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Volume Pembelian &amp; Substitusi)</text>

  <!-- Bottom: Threat of Substitute Products -->
  <rect x="240" y="155" width="200" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="340" y="172" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">5. Ancaman Produk Pengganti</text>
  <text x="340" y="186" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Rasio Harga-Kinerja Alternatif)</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Analisis Lingkungan Eksternal: PESTEL, Porter\'s Five Forces, & Kelompok Strategis',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 2',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 2: Menguasai pemindaian lingkungan makro (*Environmental Scanning, Monitoring, Competitive Intelligence, & Forecasting*), 6 segmen analisis PESTEL (Politik, Ekonomi, Sosial-Budaya, Teknologi, Lingkungan Alami / *Ecological*, dan Hukum), Model Lima Kekuatan Bersaing Michael Porter (*Porter\'s Five Forces of Industry Competition*), konsep Produk Komplementer (*Complements / Sixth Force*), serta pemetaan Kelompok Strategis (*Strategic Groups Mapping*).',
  objectives: [
    'Menerapkan 4 aktivitas pemindaian lingkungan eksternal: Scanning, Monitoring, Competitive Intelligence, dan Forecasting.',
    'Menganalisis 6 segmen Lingkungan Makro PESTEL untuk mengidentifikasi peluang dan ancaman bisnis.',
    'Menganalisis Model Lima Kekuatan Bersaing Michael Porter untuk menilai profitabilitas dan daya tarik industri.',
    'Menjelaskan dampak Produk Komplementer (Sixth Force) terhadap dinamika nilai pasar.',
    'Menyusun peta Kelompok Strategis (Strategic Groups) untuk mengidentifikasi pesaing terdekat dan hambatan mobilitas (*Mobility Barriers*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Model Lima Kekuatan Bersaing Industri (Porter\'s Five Forces)',
      svg: SVG_FIVE_FORCES,
      caption: 'Gambar 2.1: Analisis struktural penentu profitabilitas dan intensitas persaingan dalam suatu industri.'
    },

    { kind: 'h2', text: '1. Enam Dimensi Lingkungan Makro PESTEL' },
    {
      kind: 'table',
      headers: ['Segmen PESTEL', 'Faktor-Faktor Kunci', 'Contoh Dampak Strategis Industri'],
      rows: [
        ['**Political (Politik)**', 'Kebijakan pemerintah, perpajakan, stabilitas politik, dan tarif perang dagang.', 'Kenaikan tarif impor komponen baterai mobil listrik.'],
        ['**Economic (Ekonomi)**', 'Tingkat suku bunga BI, inflasi, nilai tukar mata uang, dan pertumbuhan PDB.', 'Pelemahan rupiah menaikkan biaya impor bahan baku farmasi.'],
        ['**Sociocultural (Sosial-Budaya)**', 'Perubahan demografi usia, gaya hidup sehat, dan urbanisasi.', 'Lonjakan permintaan produk makanan nabati (*plant-based*).'],
        ['**Technological (Teknologi)**', 'AI generatif, komputasi awan, robotika, dan bioteknologi.', 'Disrupsi kecerdasan buatan terhadap layanan operasional perbankan.'],
        ['**Ecological / Natural (Lingkungan)**', 'Pemanasan global, target emisi karbon, dan keberlanjutan ESG.', 'Peralihan ke sumber energi baru terbarukan (EBT).'],
        ['**Legal (Hukum)**', 'Undang-undang perlindungan data pribadi (UU PDP) dan hukum ketenagakerjaan.', 'Kewajiban kepatuhan keamanan data digital konsumen.']
      ],
      caption: 'Tabel 2.1: Enam segmen analisis lingkungan makro PESTEL.'
    },

    { kind: 'h2', text: '2. Lima Kekuatan Bersaing Michael Porter (Five Forces Model)' },
    {
      kind: 'table',
      headers: ['Kekuatan Bersaing Porter', 'Kondisi yang Memperkuat Tekanan Persaingan', 'Dampak terhadap Profitabilitas Industri'],
      rows: [
        ['1. Ancaman Pendatang Baru', 'Hambatan masuk (*barriers to entry*) rendah, skala ekonomi kecil, biaya beralih (*switching costs*) rendah.', 'Menurunkan harga pasar dan memicu perang promosi.'],
        ['2. Daya Tawar Pemasok', 'Pemasok terkonsentrasi sedikit, produk unik/terdiferensiasi, tidak ada produk pengganti bahan baku.', 'Menaikkan harga pasokan dan menekan marjin laba produsen.'],
        ['3. Daya Tawar Pembeli', 'Pembeli membeli dalam volume besar, produk standar komoditas, pembeli memiliki ancaman integrasi ke belakang (*backward integration*).', 'Menuntut diskon harga tinggi dan peningkatan kualitas layanan gratis.'],
        ['4. Ancaman Produk Pengganti', 'Produk dari industri lain menawarkan rasio harga-kinerja yang lebih menarik bagi konsumen.', 'Membatasi batas atas (*price ceiling*) yang dapat dikenakan produsen.'],
        ['5. Persaingan Antar Pesaing', 'Banyak pesaing berukuran seimbang, pertumbuhan industri lambat, biaya tetap (*fixed costs*) tinggi, hambatan keluar (*exit barriers*) tinggi.', '**Paling Merusak**: Memicu perang harga agresif yang menguras laba seluruh pemain industri.']
      ],
      caption: 'Tabel 2.2: Matriks evaluasi daya tarik dan kekuatan bersaing industri.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**Strategic Groups**: Sekelompok perusahaan dalam satu industri yang mengikuti strategi serupa di sepanjang dimensi strategis yang sama (misal harga vs cakupan geografis).',
        '**Mobility Barriers**: Faktor-faktor yang menyulitkan perusahaan untuk berpindah dari satu kelompok strategis ke kelompok strategis lain yang lebih menguntungkan.',
        '**Complements**: Produk atau jasa yang memiliki dampak positif terhadap nilai produk perusahaan kita sendiri (misal aplikasi perangkat lunak yang meningkatkan penjualan smartphone).'
      ]
    }
  ]
};