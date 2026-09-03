// src/data/akmen/modules/tm11.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 11
import type { Reading } from '../../../types';

export const TM11_READING: Reading = {
  tm: 11,
  title: "Penetapan Harga (Pricing Decisions) & Manajemen Biaya Siklus Hidup",
  ref: "Garrison Ch. 12 Appendix | Hansen & Mowen Ch. 14",
  intro: "Strategi penentuan harga jual produk berdasarkan kekuatan pasar dan struktur biaya internal. Meliputi Target Costing, Cost-Plus Pricing, dan Life-Cycle Costing.",
  objectives: [
  "Membedakan penetapan harga berbasis pasar (Market-Based Pricing) vs biaya (Cost-Based Pricing).",
  "Menerapkan metodologi Target Costing pada tahap desain produk.",
  "Menghitung markup persentase pada Cost-Plus Pricing (Absorption vs Variable approach).",
  "Memahami Life-Cycle Costing dan Whole-Life Costing dari perspektif produsen dan konsumen."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Penetapan Harga (Pricing Decisions) & Manajemen Biaya Siklus Hidup",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"priceBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"220\" rx=\"16\" fill=\"url(#priceBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">TARGET COSTING: REVERSE ENGINEERING PRICING MODEL</text>\n      \n      <g transform=\"translate(80, 65)\">\n        <rect x=\"0\" y=\"30\" width=\"200\" height=\"65\" rx=\"8\" fill=\"#0284c7\"/>\n        <text x=\"100\" y=\"55\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">HARGA PASAR ANTISIPASIAN</text>\n        <text x=\"100\" y=\"75\" fill=\"#e0f2fe\" font-size=\"9\" text-anchor=\"middle\">Ditetapkan oleh daya beli konsumen</text>\n\n        <text x=\"240\" y=\"70\" fill=\"#f59e0b\" font-size=\"24\" font-weight=\"900\" text-anchor=\"middle\">−</text>\n\n        <rect x=\"280\" y=\"30\" width=\"180\" height=\"65\" rx=\"8\" fill=\"#d97706\"/>\n        <text x=\"370\" y=\"55\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">TARGET LABA YANG DIINGINKAN</text>\n        <text x=\"370\" y=\"75\" fill=\"#fef3c7\" font-size=\"9\" text-anchor=\"middle\">Return on Investment (ROI)</text>\n\n        <text x=\"500\" y=\"70\" fill=\"#10b981\" font-size=\"24\" font-weight=\"900\" text-anchor=\"middle\">=</text>\n\n        <rect x=\"540\" y=\"30\" width=\"190\" height=\"65\" rx=\"8\" fill=\"#059669\"/>\n        <text x=\"635\" y=\"55\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">TARGET COST (BIAYA TARGET)</text>\n        <text x=\"635\" y=\"75\" fill=\"#d1fae5\" font-size=\"9\" text-anchor=\"middle\">Batas maksimum biaya produk</text>\n      </g>\n    </svg>",
    "caption": "Gambar 11.1: Logika Penetapan Biaya Target (Target Costing)."
  },
  {
    "kind": "h2",
    "text": "Value Engineering dalam Menutup Biaya Target"
  },
  {
    "kind": "p",
    "text": "Jika estimasi biaya produk awal melebihi Target Cost, perusahaan menggunakan Value Engineering (rekayasa nilai) selama fase desain untuk memangkas biaya tanpa menurunkan fungsionalitas dan kualitas yang dihargai konsumen."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Target Cost = Antisipasi Harga Jual - Target Laba\n• Harga Jual Cost-Plus = Biaya Dasar + (Biaya Dasar × Markup %)\n• Markup % (Absorption) = (Target Laba + Biaya Penjualan & Admin) / Total Biaya Manufaktur"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
