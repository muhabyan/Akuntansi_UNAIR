import type { Reading } from '../../../types';
import { CASE_BLUE_OCEAN_ERRC } from '../manstratPracticeCases';

const SVG_BLUE_OCEAN = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">RED OCEAN VS BLUE OCEAN STRATEGY (KIM &amp; MAUBORGNE)</text>
  
  <!-- Red Ocean Box -->
  <rect x="30" y="45" width="290" height="155" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="175" y="68" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">RED OCEAN STRATEGY</text>
  <text x="175" y="84" fill="#cbd5e1" font-size="9" text-anchor="middle">(Bersaing di Ruang Pasar Saat Ini)</text>
  <line x1="45" y1="94" x2="305" y2="94" stroke="#334155"/>
  <text x="50" y="112" fill="#cbd5e1" font-size="8.5">• Mengalahkan kompetisi yang ada</text>
  <text x="50" y="128" fill="#cbd5e1" font-size="8.5">• Mengeksploitasi permintaan yang sudah ada</text>
  <text x="50" y="144" fill="#cbd5e1" font-size="8.5">• Melakukan trade-off Biaya vs Nilai</text>
  <text x="50" y="160" fill="#cbd5e1" font-size="8.5">• Menyelaraskan sistem dengan Diferensiasi ATAU Low-Cost</text>
  <text x="175" y="185" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">Persaingan Berdarah Zero-Sum</text>

  <!-- Blue Ocean Box -->
  <rect x="360" y="45" width="290" height="155" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="505" y="68" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">BLUE OCEAN STRATEGY</text>
  <text x="505" y="84" fill="#cbd5e1" font-size="9" text-anchor="middle">(Menciptakan Ruang Pasar Tanpa Pesaing)</text>
  <line x1="375" y1="94" x2="635" y2="94" stroke="#334155"/>
  <text x="380" y="112" fill="#cbd5e1" font-size="8.5">• Menjadikan kompetisi tidak relevan</text>
  <text x="380" y="128" fill="#cbd5e1" font-size="8.5">• Menciptakan dan menangkap permintaan baru</text>
  <text x="380" y="144" fill="#cbd5e1" font-size="8.5">• Mendobrak trade-off Biaya vs Nilai</text>
  <text x="380" y="160" fill="#cbd5e1" font-size="8.5">• Mengejar Diferensiasi DAN Low-Cost serentak</text>
  <text x="505" y="185" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Inovasi Nilai (Value Innovation)</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Blue Ocean Strategy: Value Innovation, Strategy Canvas, & Kerangka Kerja ERRC',
  ref: 'W. Chan Kim & Renée Mauborgne, Blue Ocean Strategy (Harvard Business School Press)',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 9: Menguasai paradigma Blue Ocean Strategy (BOS), pembedaan fundamental Red Ocean vs Blue Ocean, Inovasi Nilai (*Value Innovation* - mendobrak trade-off antara Diferensiasi dan Biaya Rendah), Kanvas Strategi (*Strategy Canvas & Value Curve*), Kerangka Kerja Empat Tindakan (*Four Actions Framework / ERRC Grid: Eliminate, Reduce, Raise, Create*), Enam Jalur Rekonstruksi Batas Pasar (*Six Paths Framework*), Tiga Tingkatan Non-Konsumen (*Three Tiers of Noncustomers*), serta Pengurutan Strategis yang Tepat (*Strategic Sequence: Buyer Utility, Price, Cost, Adoption*).',
  objectives: [
    'Membedakan logika strategis Red Ocean (bersaing memperebutkan pangsa pasar yang ada) vs Blue Ocean (menciptakan ruang pasar baru yang belum terjamah).',
    'Menjelaskan konsep Inovasi Nilai (Value Innovation) sebagai batu penjuru Blue Ocean Strategy.',
    'Menyusun Kanvas Strategi (Strategy Canvas) untuk mendiagnosis profil kurva nilai industri saat ini.',
    'Menerapkan Matriks ERRC Grid (Eliminate, Reduce, Raise, Create) untuk merombak struktur biaya dan nilai pembeli.',
    'Menganalisis Enam Jalur Penjelajahan Pasar Baru (Six Paths Framework).',
    'Mengidentifikasi Tiga Tingkatan Non-Konsumen untuk memperluas batas permintaan pasar.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Perbandingan Paradigma Red Ocean vs Blue Ocean Strategy',
      svg: SVG_BLUE_OCEAN,
      caption: 'Gambar 9.1: Pergeseran dari persaingan kompetitif konvensional menuju penciptaan pasar baru yang tidak memiliki pesaing.'
    },

    { kind: 'h2', text: '1. Inovasi Nilai (Value Innovation): Mendobrak Trade-Off' },
    {
      kind: 'p',
      text: 'Strategi konvensional percaya bahwa perusahaan harus memilih antara menciptakan nilai lebih tinggi dengan biaya lebih mahal (Diferensiasi) ATAU menciptakan nilai standar dengan biaya murah (Low-Cost). **Blue Ocean Strategy mendobrak trade-off ini melalui Value Innovation**:'
    },
    {
      kind: 'ul',
      items: [
        '**Pengurangan Biaya (Cost Savings)**: Dicapai dengan **Menghapuskan (*Eliminating*)** dan **Mengurangi (*Reducing*)** faktor-faktor persaingan industri yang selama ini dianggap baku namun tidak lagi dihargai konsumen.',
        '**Peningkatan Nilai Pembeli (Buyer Value)**: Dicapai dengan **Menaikkan (*Raising*)** dan **Menciptakan (*Creating*)** elemen-elemen baru yang belum pernah ditawarkan oleh industri sebelumnya.'
      ]
    },

    CASE_BLUE_OCEAN_ERRC,

    { kind: 'h2', text: '2. Enam Jalur Menembus Batas Pasar (Six Paths Framework)' },
    {
      kind: 'table',
      headers: ['Jalur Eksplorasi Pasar', 'Fokus Konvensional Red Ocean', 'Pendekatan Blue Ocean Baru'],
      rows: [
        ['**Jalur 1: Industri Alternatif**', 'Fokus hanya pada pesaing di industri yang sama.', 'Melihat industri alternatif yang memecahkan masalah sama (misal Bioskop vs Restoran untuk hiburan malam).'],
        ['**Jalur 2: Kelompok Strategis**', 'Menerima posisi dalam kelompok strategis saat ini.', 'Melihat antarkelompok strategis (misal mobil sport mewah vs mobil keluarga murah).'],
        ['**Jalur 3: Rantai Pembeli**', 'Fokus pada target pembeli tradisional (misal dokter yang meresepkan obat).', 'Mengalihkan fokus ke pengguna langsung atau pemengaruh keputusan (misal pasien penderita diabetes).'],
        ['**Jalur 4: Produk & Jasa Pelengkap**', 'Fokus memaksimalkan nilai produk di dalam batas industri.', 'Melihat apa yang terjadi sebelum, saat, dan sesudah produk digunakan (misal fasilitas parkir dan penitipan anak).'],
        ['**Jalur 5: Daya Tarik Emosional vs Fungsional**', 'Menerima orientasi fungsional (harga murah) atau emosional industri.', 'Mengubah produk fungsional menjadi emosional (Swatch) atau emosional menjadi fungsional (QB House potong rambut 10 menit).'],
        ['**Jalur 6: Waktu & Tren Eksternal**', 'Bereaksi pasif terhadap tren saat tren sudah terjadi.', 'Membentuk tren masa depan secara proaktif (misal iTunes mengubah industri musik digital).']
      ],
      caption: 'Tabel 9.1: Enam jalur sistematis menciptakan Blue Ocean.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**Strategy Canvas**: Alat diagnostik visual yang menggambarkan faktor-faktor persaingan industri pada sumbu horizontal dan tingkat penawaran pembeli pada sumbu vertikal.',
        '**Tiga Ciri Kurva Nilai yang Hebat**: Fokus yang tajam (*Focus*), Divergensi/Perbedaan mencolok dari kurva nilai pesaing (*Divergence*), dan Tagline/Slogan yang memikat (*Compelling Tagline*).',
        '**Three Tiers of Noncustomers**: Tier 1 (Nonkonsumen yang hampir membeli / segera pergi jika ada opsi lain), Tier 2 (Nonkonsumen yang secara sadar menolak industri), Tier 3 (Nonkonsumen yang belum terjamah).'
      ]
    }
  ]
};