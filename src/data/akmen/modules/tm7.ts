// src/data/akmen/modules/tm7.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 7
import type { Reading } from '../../../types';

export const TM7_READING: Reading = {
  tm: 7,
  title: "Review Komprehensif Pra-UTS & Simulasi Kasus Manajerial",
  ref: "Garrison Ch. 1-10 | Kompilasi TM 1-6",
  intro: "Pemadatan seluruh konsep Pra-UTS: klasifikasi biaya, CVP komprehensif (multiple products & operating leverage), perbandingan laba absorption vs variable costing, serta penganggaran dan perhitungan varians terintegrasi.",
  objectives: [
  "Mengintegrasikan model CVP multi-produk menggunakan Sales Mix tertimbang.",
  "Menyelesaikan studi kasus rekonsiliasi laba absorption-variable saat produksi berfluktuasi.",
  "Melakukan analisis varians komprehensif dua arah (two-way variance analysis).",
  "Menyiapkan kesiapan mental dan ketelitian hitungan untuk Ujian Tengah Semester (UTS)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Review Komprehensif Pra-UTS & Simulasi Kasus Manajerial",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"revBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"220\" rx=\"16\" fill=\"url(#revBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">PETA INTEGRASI MATERI UJIAN TENGAH SEMESTER (UTS)</text>\n      \n      <g transform=\"translate(40, 65)\">\n        <rect x=\"0\" y=\"0\" width=\"185\" height=\"120\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"92\" y=\"28\" fill=\"#38bdf8\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">1. CVP &amp; BEP MULTI-PRODUK</text>\n        <text x=\"15\" y=\"55\" fill=\"#cbd5e1\" font-size=\"9\">• Bauran Penjualan (Sales Mix)</text>\n        <text x=\"15\" y=\"75\" fill=\"#cbd5e1\" font-size=\"9\">• Weighted-Average CM Ratio</text>\n        <text x=\"15\" y=\"95\" fill=\"#cbd5e1\" font-size=\"9\">• Titik Impas Kombinasi</text>\n\n        <rect x=\"210\" y=\"0\" width=\"185\" height=\"120\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\"/>\n        <text x=\"302\" y=\"28\" fill=\"#34d399\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">2. VARIABLE VS ABSORPTION</text>\n        <text x=\"225\" y=\"55\" fill=\"#cbd5e1\" font-size=\"9\">• Inventoriable FMOH</text>\n        <text x=\"225\" y=\"75\" fill=\"#cbd5e1\" font-size=\"9\">• Rekonsiliasi Perubahan Unit</text>\n        <text x=\"225\" y=\"95\" fill=\"#cbd5e1\" font-size=\"9\">• Segment Margin Divisi</text>\n\n        <rect x=\"420\" y=\"0\" width=\"185\" height=\"120\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\"/>\n        <text x=\"512\" y=\"28\" fill=\"#fbbf24\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">3. MASTER BUDGETING</text>\n        <text x=\"435\" y=\"55\" fill=\"#cbd5e1\" font-size=\"9\">• Anggaran Penjualan &amp; Produksi</text>\n        <text x=\"435\" y=\"75\" fill=\"#cbd5e1\" font-size=\"9\">• Anggaran Kas Bulanan</text>\n        <text x=\"435\" y=\"95\" fill=\"#cbd5e1\" font-size=\"9\">• Jadwal Pelunasan Utang</text>\n\n        <rect x=\"630\" y=\"0\" width=\"185\" height=\"120\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f87171\"/>\n        <text x=\"722\" y=\"28\" fill=\"#f87171\" font-size=\"10.5\" font-weight=\"700\" text-anchor=\"middle\">4. ANALISIS VARIANS</text>\n        <text x=\"645\" y=\"55\" fill=\"#cbd5e1\" font-size=\"9\">• Price &amp; Quantity Variances</text>\n        <text x=\"645\" y=\"75\" fill=\"#cbd5e1\" font-size=\"9\">• Labor Rate &amp; Efficiency</text>\n        <text x=\"645\" y=\"95\" fill=\"#cbd5e1\" font-size=\"9\">• Spending &amp; Volume MOH</text>\n      </g>\n    </svg>",
    "caption": "Gambar 7.1: Empat Pilar Soal Utama Ujian Tengah Semester Akuntansi Manajemen."
  },
  {
    "kind": "h2",
    "text": "Checklist Pemantapan UTS"
  },
  {
    "kind": "p",
    "text": "Pastikan tidak tertukar antara biaya manufaktur vs biaya periode saat menyusun absorption costing."
  },
  {
    "kind": "p",
    "text": "Ingat bahwa saat menghitung Materials Price Variance (MPV), kuantitas yang digunakan adalah Kuantitas yang DIBELI (AQ Purchased), sedangkan pada Materials Quantity Variance (MQV), kuantitas yang dipakai adalah Kuantitas yang DIGUNAKAN (AQ Used)."
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
