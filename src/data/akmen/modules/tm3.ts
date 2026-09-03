// src/data/akmen/modules/tm3.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 3
import type { Reading } from '../../../types';

export const TM3_READING: Reading = {
  tm: 3,
  title: "Variable Costing & Pelaporan Segmen",
  ref: "Garrison Ch. 6 | Hansen & Mowen Ch. 7",
  intro: "Pembahasan mendalam mengenai perbandingan Variable Costing (metode kontribusi untuk keputusan manajerial) versus Absorption Costing (metode kalkulasi biaya penuh untuk laporan eksternal). Memahami bagaimana perubahan volume produksi memengaruhi laba bersih.",
  objectives: [
  "Membandingkan perlakuan Biaya Overhead Pabrik Tetap (FMOH) pada Variable vs Absorption Costing.",
  "Melakukan rekonsiliasi selisih laba bersih antara kedua metode berdasarkan perubahan persediaan.",
  "Menyusun Laporan Laba Rugi Bersegmen dengan memisahkan Traceable vs Common Fixed Costs.",
  "Menganalisis Segment Margin untuk mengevaluasi kinerja divisi, produk, atau wilayah geografis.",
  "Menghindari kesalahan fatal alokasi biaya tetap bersama (common costs) ke segmen individual."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Variable Costing & Pelaporan Segmen",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"vcBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"280\" rx=\"16\" fill=\"url(#vcBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">VARIABLE COSTING VS ABSORPTION COSTING: PERLAKUAN BIAYA BOP TETAP</text>\n      \n      <!-- Absorption side -->\n      <rect x=\"50\" y=\"65\" width=\"370\" height=\"200\" rx=\"10\" fill=\"#1e293b\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n      <text x=\"235\" y=\"92\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">ABSORPTION COSTING (Kalkulasi Biaya Penuh)</text>\n      <text x=\"235\" y=\"112\" fill=\"#94a3b8\" font-size=\"9.5\" text-anchor=\"middle\">Standar Pelaporan Eksternal (SAK / PSAK)</text>\n      <line x1=\"70\" y1=\"124\" x2=\"400\" y2=\"124\" stroke=\"#334155\"/>\n      <text x=\"80\" y=\"148\" fill=\"#cbd5e1\" font-size=\"10\">Biaya Produk: Bahan Baku + TKL + BOP Variabel + <tspan fill=\"#f59e0b\" font-weight=\"700\">BOP TETAP</tspan></text>\n      <text x=\"80\" y=\"172\" fill=\"#cbd5e1\" font-size=\"9.5\">• BOP Tetap <tspan fill=\"#34d399\">dikapitalisasi</tspan> ke persediaan akhir.</text>\n      <text x=\"80\" y=\"194\" fill=\"#cbd5e1\" font-size=\"9.5\">• Jika Produksi &gt; Penjualan: Laba Absorption &gt; Variable</text>\n      <text x=\"80\" y=\"214\" fill=\"#cbd5e1\" font-size=\"9.5\">  (karena sebagian BOP tetap tertahan di neraca).</text>\n      <text x=\"80\" y=\"240\" fill=\"#f87171\" font-size=\"9.5\">⚠️ Risiko: Manajer tergoda memproduksi berlebih!</text>\n\n      <!-- Variable side -->\n      <rect x=\"480\" y=\"65\" width=\"370\" height=\"200\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n      <text x=\"665\" y=\"92\" fill=\"#34d399\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">VARIABLE COSTING (Kalkulasi Biaya Langsung)</text>\n      <text x=\"665\" y=\"112\" fill=\"#94a3b8\" font-size=\"9.5\" text-anchor=\"middle\">Khusus Pengambilan Keputusan Manajerial</text>\n      <line x1=\"500\" y1=\"124\" x2=\"830\" y2=\"124\" stroke=\"#334155\"/>\n      <text x=\"510\" y=\"148\" fill=\"#cbd5e1\" font-size=\"10\">Biaya Produk: Hanya Bahan Baku + TKL + BOP Variabel</text>\n      <text x=\"510\" y=\"172\" fill=\"#cbd5e1\" font-size=\"9.5\">• BOP Tetap diakui sebagai <tspan fill=\"#f59e0b\" font-weight=\"700\">BIAYA PERIODE</tspan> seutuhnya.</text>\n      <text x=\"510\" y=\"194\" fill=\"#cbd5e1\" font-size=\"9.5\">• Laba tidak dipengaruhi oleh manipulasi volume produksi.</text>\n      <text x=\"510\" y=\"214\" fill=\"#cbd5e1\" font-size=\"9.5\">• Format laporan berbasis Contribution Margin.</text>\n      <text x=\"510\" y=\"240\" fill=\"#38bdf8\" font-size=\"9.5\">✅ Sangat ideal untuk CVP, penetapan harga, &amp; evaluasi.</text>\n    </svg>",
    "caption": "Gambar 3.1: Perbandingan Perlakuan BOP Tetap dan Dampak Laba."
  },
  {
    "kind": "h2",
    "text": "Formula Rekonsiliasi Laba Bersih"
  },
  {
    "kind": "p",
    "text": "Hubungan antara Laba Bersih Absorption dan Variable ditentukan oleh perubahan saldo persediaan (Unit Diproduksi vs Unit Terjual):"
  },
  {
    "kind": "p",
    "text": "Laba Operasi Absorption = Laba Operasi Variable + (BOP Tetap per Unit × Perubahan Unit Persediaan). Jika persediaan bertambah (Produksi > Penjualan), Absorption melaporkan laba lebih tinggi."
  },
  {
    "kind": "h2",
    "text": "Pelaporan Laba Rugi Segmen & Segment Margin"
  },
  {
    "kind": "p",
    "text": "Segment Margin dihitung dari Contribution Margin segmen dikurangi Biaya Tetap yang Dapat Ditelusuri (Traceable Fixed Costs). Segment margin adalah ukuran terbaik untuk mengevaluasi profitabilitas jangka panjang suatu segmen."
  },
  {
    "kind": "p",
    "text": "Biaya Tetap Bersama (Common Fixed Costs) tidak boleh dialokasikan secara sembarangan ke segmen karena biaya ini akan tetap ada meskipun segmen tersebut dihentikan."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Unit Persediaan Berubah = Unit Diproduksi - Unit Terjual\n• Selisih Laba = Laba Absorption - Laba Variable = Perubahan Persediaan × Tarif BOP Tetap per Unit\n• Segment Margin = Segment Contribution Margin - Traceable Fixed Costs"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
