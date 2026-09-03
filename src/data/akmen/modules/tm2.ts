// src/data/akmen/modules/tm2.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 2
import type { Reading } from '../../../types';

export const TM2_READING: Reading = {
  tm: 2,
  title: "Perilaku Biaya & Analisis Cost-Volume-Profit (CVP)",
  ref: "Garrison Ch. 5 | Hansen & Mowen Ch. 3",
  intro: "Analisis Cost-Volume-Profit (CVP) merupakan salah satu alat paling kuat bagi manajer untuk memahami keterkaitan antara biaya, volume aktivitas penjualan, dan laba operasional perusahaan.",
  objectives: [
  "Memisahkan biaya semivariabel (mixed cost) menggunakan metode High-Low.",
  "Menghitung Contribution Margin (CM) per unit dan Contribution Margin Ratio (CMR).",
  "Menghitung Titik Impas (Break-Even Point / BEP) dalam unit fisik dan nilai rupiah.",
  "Menentukan volume penjualan yang dibutuhkan untuk mencapai Target Laba (sebelum & sesudah pajak).",
  "Menghitung Margin of Safety (MoS) dan Tingkat Leverage Operasi (Degree of Operating Leverage / DOL)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Perilaku Biaya & Analisis Cost-Volume-Profit (CVP)",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 320\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"cvpBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"300\" rx=\"16\" fill=\"url(#cvpBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">GRAFIK COST-VOLUME-PROFIT &amp; TITIK IMPAS (BREAK-EVEN POINT)</text>\n      \n      <!-- Axis -->\n      <line x1=\"80\" y1=\"260\" x2=\"820\" y2=\"260\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"260\" x2=\"80\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <text x=\"820\" y=\"280\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"end\">Volume Penjualan (Unit)</text>\n      <text x=\"75\" y=\"65\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"start\">Rupiah (Rp)</text>\n\n      <!-- Fixed Cost Line -->\n      <line x1=\"80\" y1=\"200\" x2=\"800\" y2=\"200\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/>\n      <text x=\"810\" y=\"204\" fill=\"#fbbf24\" font-size=\"10\">Biaya Tetap (FC)</text>\n\n      <!-- Total Cost Line -->\n      <line x1=\"80\" y1=\"200\" x2=\"780\" y2=\"90\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n      <text x=\"790\" y=\"95\" fill=\"#f87171\" font-size=\"10\" font-weight=\"700\">Total Biaya (TC = FC + VC)</text>\n\n      <!-- Total Revenue Line -->\n      <line x1=\"80\" y1=\"260\" x2=\"720\" y2=\"80\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n      <text x=\"730\" y=\"80\" fill=\"#34d399\" font-size=\"10\" font-weight=\"700\">Total Pendapatan (TR)</text>\n\n      <!-- BEP Intersection point -->\n      <circle cx=\"475\" cy=\"149\" r=\"6\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n      <line x1=\"475\" y1=\"149\" x2=\"475\" y2=\"260\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n      <line x1=\"80\" y1=\"149\" x2=\"475\" y2=\"149\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n      \n      <rect x=\"420\" y=\"110\" width=\"110\" height=\"28\" rx=\"6\" fill=\"#0284c7\" fill-opacity=\"0.9\"/>\n      <text x=\"475\" y=\"128\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">BEP: TR = TC</text>\n\n      <text x=\"475\" y=\"278\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">Q_bep (Unit)</text>\n      <text x=\"40\" y=\"153\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">Rp_bep</text>\n\n      <!-- Profit Area & Loss Area -->\n      <text x=\"620\" y=\"130\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\">AREA LABA</text>\n      <text x=\"250\" y=\"220\" fill=\"#f87171\" font-size=\"11\" font-weight=\"700\">AREA RUGI</text>\n    </svg>",
    "caption": "Gambar 2.1: Titik Impas (BEP) dan Struktur Pendapatan-Biaya."
  },
  {
    "kind": "h2",
    "text": "Metode Pemisahan Biaya Campuran (High-Low Method)"
  },
  {
    "kind": "p",
    "text": "Biaya campuran (mixed cost) memiliki elemen tetap dan variabel (Y = a + bX). Metode High-Low memisahkan komponen ini berdasarkan tingkat aktivitas tertinggi dan terendah dalam periode observasi."
  },
  {
    "kind": "p",
    "text": "Tarif variabel per unit (b) = (Biaya Aktivitas Tertinggi - Biaya Aktivitas Terendah) / (Aktivitas Tertinggi - Aktivitas Terendah). Komponen biaya tetap (a) dihitung dengan mensubstitusikan nilai b ke salah satu titik ekstrim."
  },
  {
    "kind": "h2",
    "text": "Persamaan Fundamental CVP & Peran Contribution Margin"
  },
  {
    "kind": "p",
    "text": "Contribution Margin (CM) adalah selisih antara Pendapatan Penjualan dengan Total Biaya Variabel. CM menunjukkan jumlah sisa pendapatan yang tersedia untuk menutup Biaya Tetap dan menghasilkan Laba Bersih Operasional."
  },
  {
    "kind": "p",
    "text": "Rasio CM (CM Ratio) dihitung dari CM dibagi Penjualan. Setiap penambahan Rp 1 penjualan akan menambah laba sebesar rasio CM tersebut setelah titik impas terlampaui."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Contribution Margin (CM) = Pendapatan Penjualan - Total Biaya Variabel\n• CM Ratio = CM / Penjualan = CM per unit / Harga Jual per unit\n• BEP (unit) = Total Biaya Tetap / CM per unit\n• BEP (Rupiah) = Total Biaya Tetap / CM Ratio\n• Penjualan untuk Target Laba = (Total Biaya Tetap + Target Laba Operasi) / CM per unit\n• Margin of Safety (MoS) = Penjualan Aktual/Anggaran - Penjualan BEP\n• Degree of Operating Leverage (DOL) = Total Contribution Margin / Laba Bersih Operasi"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
