import type { Reading } from '../../../types';
import { CASE_BLUE_OCEAN_ERRC_CANVAS } from '../manstratPracticeCases';

const SVG_BLUE_OCEAN_ERRC = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="elGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="raiGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="creGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns9)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KERANGKA KERJA 4 LANGKAH BLUE OCEAN (ERRC GRID - KIM &amp; MAUBORGNE)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">BLUE OCEAN</text>

  <!-- 1. ELIMINATE (Top-Left) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="400" height="115" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="400" height="28" rx="12" fill="url(#elGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="16" y="20" fill="#f87171" font-size="11" font-weight="800">ELIMINATE (HAPUSKAN)</text>
    <text class="text-accent-red" x="385" y="20" fill="#f87171" font-size="8" font-weight="700" text-anchor="end">Faktor Apa yang Harus Dihapus Total?</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Faktor-faktor yang sudah lama diperebutkan di industri</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Menguras biaya tinggi namun sudah diabaikan nilainya oleh pembeli</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh Cirque du Soleil: Hapus pertunjukan bintang hewan &amp; 3 ring sirkus</text>
    <rect x="16" y="90" width="120" height="18" rx="9" fill="#dc2626" fill-opacity="0.3"/>
    <text class="text-accent-red" x="76" y="102" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Tekan Beban Biaya</text>
  </g>

  <!-- 2. REDUCE (Bottom-Left) -->
  <g transform="translate(35, 205)">
    <rect class="svg-card" x="0" y="0" width="400" height="115" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="400" height="28" rx="12" fill="url(#redGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="16" y="20" fill="#fbbf24" font-size="11" font-weight="800">REDUCE (KURANGI)</text>
    <text class="text-accent-amber" x="385" y="20" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="end">Faktor Apa yang Diturunkan di Bawah Standar?</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Faktor yang dirancang berlebihan dalam perlombaan mengalahkan lawan</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Mengurangi fitur rumit yang tidak disadari/dibutuhkan mayoritas konsumen</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh Cirque du Soleil: Kurangi humor lelucon slapstick sirkus tradisional</text>
    <rect x="16" y="90" width="120" height="18" rx="9" fill="#d97706" fill-opacity="0.3"/>
    <text class="text-accent-amber" x="76" y="102" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Sederhanakan Produk</text>
  </g>

  <!-- 3. RAISE (Top-Right) -->
  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="400" height="115" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="400" height="28" rx="12" fill="url(#raiGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="11" font-weight="800">RAISE (TINGKATKAN)</text>
    <text class="text-accent-blue" x="385" y="20" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="end">Faktor Apa yang Ditingkatkan Jauh di Atas Standar?</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Menghilangkan kompromi yang dipaksakan industri kepada konsumen</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Meningkatkan nilai manfaat kunci yang sangat didambakan pelanggan</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh Cirque du Soleil: Tingkatkan kenyamanan gedung &amp; kualitas teater</text>
    <rect x="16" y="90" width="120" height="18" rx="9" fill="#0284c7" fill-opacity="0.3"/>
    <text class="text-accent-blue" x="76" y="102" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Tingkatkan Manfaat</text>
  </g>

  <!-- 4. CREATE (Bottom-Right) -->
  <g transform="translate(465, 205)">
    <rect class="svg-card" x="0" y="0" width="400" height="115" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="400" height="28" rx="12" fill="url(#creGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="11" font-weight="800">CREATE (CIPTAKAN)</text>
    <text class="text-accent-green" x="385" y="20" fill="#34d399" font-size="8" font-weight="700" text-anchor="end">Faktor Baru Apa yang Belum Pernah Ada?</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Menemukan sumber nilai baru yang membuka permintaan baru (Non-customers)</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Memadukan unsur teater musikal Broadway dengan keahlian akrobatik atletis</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh Cirque du Soleil: Ciptakan alur cerita bertema emosional &amp; musik orkestra</text>
    <rect x="16" y="90" width="120" height="18" rx="9" fill="#059669" fill-opacity="0.3"/>
    <text class="text-accent-green" x="76" y="102" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Inovasi Nilai Unik</text>
  </g>

  <text class="svg-muted" x="450" y="332" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Dengan memadukan Diferensiasi (Raise/Create) dan Biaya Rendah (Eliminate/Reduce), perusahaan keluar dari "Red Ocean" berdarah.</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Blue Ocean Strategy: Value Innovation, Strategy Canvas, & Kerangka Kerja ERRC',
  ref: 'W. Chan Kim & Renée Mauborgne (Blue Ocean Strategy) | Harvard Business Review | Inovasi Nilai vs Red Ocean',
  intro: 'TM 9 membahas paradigma revolusioner Blue Ocean Strategy karya W. Chan Kim & Renée Mauborgne: perbandingan Samudra Merah (Red Ocean yang berdarah-darah akibat perang harga di ruang pasar yang sudah padat) vs Samudra Biru (Blue Ocean yang menciptakan ruang pasar baru tanpa pesaing), fondasi Inovasi Nilai (Value Innovation yang mengejar diferensiasi dan biaya rendah secara simultan), alat diagnostik Kanvas Strategi (Strategy Canvas) dan Kurva Nilai (Value Curve), Kerangka Kerja 4 Tindakan (Four Actions Framework: Eliminate, Reduce, Raise, Create / ERRC), serta 6 Jalur Menembus Batas Pasar (Six Paths Framework).',
  objectives: [
    'Membedakan logika strategis Samudra Merah (Red Ocean) vs Samudra Biru (Blue Ocean).',
    'Menjelaskan konsep Inovasi Nilai (Value Innovation) dalam mematahkan trade-off biaya vs diferensiasi.',
    'Mendiagnosa kurva nilai perusahaan dan pesaing menggunakan Kanvas Strategi (Strategy Canvas).',
    'Merancang inovasi ruang pasar baru menggunakan Matriks 4 Tindakan ERRC (Eliminate, Reduce, Raise, Create).',
    'Menerapkan Kerangka Kerja 6 Jalur (Six Paths Framework) untuk menemukan industri alternatif dan pembeli non-pelanggan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Kerangka Kerja Empat Tindakan ERRC: Menghapuskan, Mengurangi, Menaikkan, dan Menciptakan Faktor Nilai.',
      svg: SVG_BLUE_OCEAN_ERRC
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Dimensi Strategis', 'Strategi Samudra Merah (Red Ocean)', 'Strategi Samudra Biru (Blue Ocean)'],
      rows: [
        ['Ruang Pasar', 'Bersaing dalam ruang pasar yang sudah ada dan padat.', 'Menciptakan ruang pasar baru yang belum tersentuh pesaing.'],
        ['Dinamika Kompetisi', 'Mengalahkan dan merebut pangsa pasar dari kompetitor.', 'Menjadikan kompetisi tidak relevan sama sekali (*making the competition irrelevant*).'],
        ['Eksploitasi Permintaan', 'Mengeksploitasi dan berebut kue permintaan pasar yang ada.', 'Menciptakan dan menangkap permintaan pasar baru (*non-customers*).'],
        ['Trade-off Nilai vs Biaya', 'Memilih trade-off: Biaya Rendah ATAU Diferensiasi (doktrin Porter klasik).', 'Mematahkan trade-off: Mengejar Biaya Rendah DAN Diferensiasi secara bersamaan.'],
        ['Fokus Penyelarasan Sistem', 'Menyelaraskan seluruh sistem perusahaan dengan pilihan strategis biaya rendah atau diferensiasi.', 'Menyelaraskan seluruh sistem perusahaan dalam mengejar diferensiasi sekaligus biaya rendah.']
      ],
      caption: 'Tabel 9.0: Perbandingan fundamental Red Ocean vs Blue Ocean Strategy.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Karakteristik Kurva Nilai Unggul (Good Strategy Characteristics)'
    },
    {
      kind: 'table',
      headers: ['Karakteristik Kurva Nilai', 'Definisi pada Strategy Canvas', 'Tanda Peringatan Jika Hilang'],
      rows: [
        ['1. Fokus (Focus)', 'Perusahaan tidak menyebarkan anggarannya secara merata di semua faktor persaingan, melainkan berfokus tajam pada beberapa faktor keunggulan kunci.', 'Jika kurva nilai datar atau mencoba unggul di semua faktor, perusahaan terjebak pemborosan kas tanpa identitas.'],
        ['2. Divergensi (Divergence)', 'Bentuk kurva nilai perusahaan berbeda secara radikal dari profil rata-rata industri konvensional (berkat eliminasi dan kreasi baru).', 'Jika kurva nilai sejajar dan mirip dengan pesaing ("me-too strategy"), perusahaan berada di tengah samudra merah perang tarif.'],
        ['3. Tagline yang Memikat (Compelling Tagline)', 'Strategi dapat diringkas dalam satu kalimat slogan iklan yang kuat, jelas, jujur, dan berkesan di benak publik.', 'Jika strategi tidak dapat dijelaskan dalam satu kalimat singkat, berarti proposisi nilai belum jelas bagi konsumen.']
      ],
      caption: 'Tabel 9.1: Tiga kriteria kurva nilai strategi samudra biru yang kuat.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penerapan ERRC pada Kasus Sirkus Cirque du Soleil',
      prompt: 'Sirkus tradisional (Ringling Bros) mengalami kebangkrutan akibat tingginya biaya pemeliharaan gajah/singa, biaya bintang sirkus mahal, dan protes pecinta hewan. Cirque du Soleil merevolusi industri ini menjadi samudra biru bernilai miliaran dolar. Bagaimana rincian 4 tindakan ERRC yang mereka lakukan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Eliminate (Hapuskan)**: Menghapuskan pertunjukan binatang sirkus (memangkas biaya makan dan kandang hewan serta menghindari kecaman publik) dan menghapuskan konsep 3 arena terpisah yang membingungkan penonton.',
            '**Reduce (Kurangi)**: Mengurangi sensasi bahaya fisik ekstrim dan atraksi slapstick badut murahan.',
            '**Raise (Tingkatkan)**: Meningkatkan kenyamanan tenda megah teater dan estetika artistik kostum panggung.',
            '**Create (Ciptakan)**: Menciptakan tema cerita dramatis teater musikal Broadway, tarian balet kontemporer, dan musik orkestra orisinal secara langsung, membidik penonton dewasa berduit yang bersedia membayar tiket mahal setara gedung opera.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep Value Innovation', 'Mekanisme pengejaran diferensiasi dan biaya rendah simultan.', 'Mampu menjelaskan pematahan trade-off biaya vs nilai.'],
        ['2', 'Strategy Canvas & Kurva Nilai', 'Teknik plotting kanvas strategi dan evaluasi fokus/divergensi.', 'Mampu menggambar dan menginterpretasikan kurva nilai industri.'],
        ['3', 'Matriks 4 Tindakan ERRC', 'Penerapan Eliminate, Reduce, Raise, Create pada model bisnis baru.', 'Mampu menyusun matriks ERRC untuk memecahkan kebekuan pasar.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 Manajemen Strategik.'
    },
    CASE_BLUE_OCEAN_ERRC_CANVAS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Jangan Bersaing dengan Pesaing**: Tujuan tertinggi dari Blue Ocean Strategy bukan untuk memenangkan persaingan, melainkan untuk membuat kompetisi menjadi sama sekali tidak relevan.',
        '**Eliminasi Memotong Biaya**: Sebagian besar perusahaan hanya memikirkan apa yang harus ditambahkan (*Raise/Create*); inovator Blue Ocean memikirkan apa yang harus berani dihapuskan (*Eliminate*) untuk memangkas biaya.',
        '**Bidik Non-Pelanggan (Non-Customers)**: Sumber pertumbuhan terbesar tidak berada pada pelanggan yang sudah ada di industri, melainkan pada mereka yang selama ini menolak menggunakan produk karena mahal atau rumit.'
      ]
    }
  ]
};
