// src/data/akmen/modules/tm9.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 9
import type { Reading } from '../../../types';

export const TM9_READING: Reading = {
  tm: 9,
  title: "Transfer Pricing (Harga Transfer Antar Divisi)",
  ref: "Garrison Ch. 11 Appendix | Hansen & Mowen Ch. 12",
  intro: "Penentuan harga transfer barang/jasa antar divisi independen dalam satu entitas korporasi, dampaknya terhadap otonomi manajer, evaluasi laba divisi, dan perencanaan pajak penghasilan internasional.",
  objectives: [
  "Menetapkan batas bawah (floor/minimum) harga transfer dari perspektif divisi penjual.",
  "Menetapkan batas atas (ceiling/maximum) harga transfer dari perspektif divisi pembeli.",
  "Menganalisis 3 pendekatan transfer pricing: Market Price, Negotiated, dan Cost-Based.",
  "Memahami motivasi transfer pricing internasional untuk mengalihkan laba ke yurisdiksi bertarif pajak rendah."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Transfer Pricing (Harga Transfer Antar Divisi)",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"tpBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"220\" rx=\"16\" fill=\"url(#tpBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">RANGE OF ACCEPTABLE TRANSFER PRICES (RENTANG HARGA TRANSFER)</text>\n      \n      <g transform=\"translate(80, 60)\">\n        <rect x=\"0\" y=\"40\" width=\"220\" height=\"85\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"1.5\"/>\n        <text x=\"110\" y=\"65\" fill=\"#f87171\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">DIVISI PENJUAL (MINIMUM)</text>\n        <text x=\"110\" y=\"85\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">Batas Bawah (Floor Price)</text>\n        <text x=\"110\" y=\"105\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">Biaya Variabel + Opportunity Cost</text>\n\n        <rect x=\"520\" y=\"40\" width=\"220\" height=\"85\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"630\" y=\"65\" fill=\"#34d399\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">DIVISI PEMBELI (MAKSIMUM)</text>\n        <text x=\"630\" y=\"85\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">Batas Atas (Ceiling Price)</text>\n        <text x=\"630\" y=\"105\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">Harga Pasar Luar (Outside Price)</text>\n\n        <line x1=\"220\" y1=\"82\" x2=\"520\" y2=\"82\" stroke=\"#fbbf24\" stroke-width=\"3\"/>\n        <circle cx=\"370\" cy=\"82\" r=\"7\" fill=\"#fbbf24\"/>\n        <rect x=\"290\" y=\"105\" width=\"160\" height=\"30\" rx=\"6\" fill=\"#0284c7\"/>\n        <text x=\"370\" y=\"125\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">AREA KESEPAKATAN</text>\n      </g>\n    </svg>",
    "caption": "Gambar 9.1: Penentuan Rentang Harga Transfer yang Saling Menguntungkan."
  },
  {
    "kind": "h2",
    "text": "Kondisi Kapasitas Menganggur vs Kapasitas Penuh"
  },
  {
    "kind": "p",
    "text": "Jika Divisi Penjual memiliki kapasitas menganggur (idle capacity), Opportunity Cost = Rp 0. Maka harga transfer minimum adalah sebesar Biaya Variabel per unit."
  },
  {
    "kind": "p",
    "text": "Jika Divisi Penjual beroperasi pada kapasitas penuh, Opportunity Cost adalah Contribution Margin luar yang dikorbankan. Maka harga transfer minimum = Biaya Variabel + CM Luar = Harga Pasar Luar."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Harga Transfer Minimum (Penjual) = Biaya Variabel per unit + Opportunity Cost per unit\n• Opportunity Cost (Kapasitas Penuh) = Total CM yang Dikorbankan Penjualan Luar / Unit Ditransfer\n• Harga Transfer Maksimum (Pembeli) = Harga Beli Pasar Eksternal"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
