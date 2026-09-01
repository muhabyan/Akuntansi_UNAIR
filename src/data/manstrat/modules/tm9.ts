import type { Reading } from '../../../types';
import { CASE_BLUE_OCEAN_ERRC_CANVAS } from '../manstratPracticeCases';

const SVG_BLUE_OCEAN_ERRC = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KERANGKA KERJA 4 TINDAKAN ERRC: BLUE OCEAN STRATEGY (KIM &amp; MAUBORGNE)</text>
  
  <rect x="35" y="50" width="285" height="70" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="177" y="72" fill="#f43f5e" font-size="10.5" font-weight="700" text-anchor="middle">ELIMINATE (HAPUSKAN)</text>
  <text x="177" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">Faktor apa yang sudah lama diperebutkan industri</text>
  <text x="177" y="105" fill="#fca5a5" font-size="8" text-anchor="middle">namun harus DIHAPUSKAN sama sekali? (Memotong Biaya)</text>

  <rect x="355" y="50" width="285" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="497" y="72" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">REDUCE (KURANGI)</text>
  <text x="497" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">Faktor apa yang harus DIKURANGI jauh di bawah</text>
  <text x="497" y="105" fill="#fde047" font-size="8" text-anchor="middle">standar industri konvensional? (Memotong Biaya)</text>

  <rect x="35" y="128" width="285" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="150" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">RAISE (TINGKATKAN)</text>
  <text x="177" y="168" fill="#cbd5e1" font-size="8" text-anchor="middle">Faktor apa yang harus DITINGKATKAN jauh melampaui</text>
  <text x="177" y="183" fill="#7dd3fc" font-size="8" text-anchor="middle">standar rata-rata industri? (Menciptakan Nilai)</text>

  <rect x="355" y="128" width="285" height="70" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="150" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">CREATE (CIPTAKAN)</text>
  <text x="497" y="168" fill="#cbd5e1" font-size="8" text-anchor="middle">Faktor apa yang BELUM PERNAH DITAWARKAN industri</text>
  <text x="497" y="183" fill="#86efac" font-size="8" text-anchor="middle">dan harus DICIPTAKAN baru? (Membuka Pasar Baru)</text>
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
