// src/data/akmen/modules/tm6.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 6
import type { Reading } from '../../../types';

export const TM6_READING: Reading = {
  tm: 6,
  title: "Anggaran Fleksibel, Biaya Standar & Analisis Varians",
  ref: "Garrison Ch. 9 & 10 | Hansen & Mowen Ch. 9 & 10",
  intro: "Evaluasi pengendalian operasional melalui perbandingan antara hasil aktual dan Anggaran Fleksibel (yang disesuaikan dengan tingkat aktivitas aktual), serta dekomposisi varians biaya standar.",
  objectives: [
  "Membedakan Static Budget (Anggaran Statis) dan Flexible Budget (Anggaran Fleksibel).",
  "Menghitung Activity Variance dan Revenue & Spending Variance.",
  "Menghitung Varians Bahan Baku: Materials Price Variance (MPV) dan Materials Quantity Variance (MQV).",
  "Menghitung Varians Tenaga Kerja: Labor Rate Variance (LRV) dan Labor Efficiency Variance (LEV).",
  "Menghitung Varians Overhead Pabrik: Spending Variance dan Volume Variance."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Anggaran Fleksibel, Biaya Standar & Analisis Varians",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"varBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"260\" rx=\"16\" fill=\"url(#varBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">MODEL 3 KOLOM ANALISIS VARIANS BIAYA STANDAR</text>\n      \n      <g transform=\"translate(60, 65)\">\n        <!-- Column 1 -->\n        <rect x=\"0\" y=\"0\" width=\"220\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"110\" y=\"28\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">KOLOM 1: AKTUAL</text>\n        <text x=\"110\" y=\"52\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">AQ × AP</text>\n        <text x=\"110\" y=\"74\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Kuantitas Aktual × Harga Aktual</text>\n\n        <!-- Column 2 -->\n        <rect x=\"280\" y=\"0\" width=\"220\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"390\" y=\"28\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">KOLOM 2: HYBRID</text>\n        <text x=\"390\" y=\"52\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">AQ × SP</text>\n        <text x=\"390\" y=\"74\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Kuantitas Aktual × Harga Standar</text>\n\n        <!-- Column 3 -->\n        <rect x=\"560\" y=\"0\" width=\"220\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"670\" y=\"28\" fill=\"#34d399\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">KOLOM 3: STANDAR</text>\n        <text x=\"670\" y=\"52\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">SQ × SP</text>\n        <text x=\"670\" y=\"74\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Kuantitas Standar × Harga Standar</text>\n\n        <!-- Variances below -->\n        <line x1=\"110\" y1=\"90\" x2=\"110\" y2=\"135\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <line x1=\"390\" y1=\"90\" x2=\"390\" y2=\"135\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <line x1=\"110\" y1=\"135\" x2=\"390\" y2=\"135\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n        <rect x=\"185\" y=\"145\" width=\"130\" height=\"35\" rx=\"6\" fill=\"#0284c7\"/>\n        <text x=\"250\" y=\"167\" fill=\"#ffffff\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">VARIANS HARGA (PRICE)</text>\n\n        <line x1=\"670\" y1=\"90\" x2=\"670\" y2=\"135\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <line x1=\"390\" y1=\"135\" x2=\"670\" y2=\"135\" stroke=\"#34d399\" stroke-width=\"2\"/>\n        <rect x=\"465\" y=\"145\" width=\"130\" height=\"35\" rx=\"6\" fill=\"#059669\"/>\n        <text x=\"530\" y=\"167\" fill=\"#ffffff\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">VARIANS KUANTITAS (QTY)</text>\n      </g>\n    </svg>",
    "caption": "Gambar 6.1: Dekomposisi Varians Harga vs Varians Kuantitas / Efisiensi."
  },
  {
    "kind": "h2",
    "text": "Klasifikasi Varians: Favorable (F) vs Unfavorable (U)"
  },
  {
    "kind": "p",
    "text": "Varians bernilai Favorable (F) jika biaya aktual lebih kecil dari biaya standar atau pendapatan aktual lebih besar dari standar."
  },
  {
    "kind": "p",
    "text": "Sebaliknya, Unfavorable (U) mengindikasikan pemborosan harga beli, inefisiensi jam kerja tenaga kerja, atau kapasitas menganggur pada overhead pabrik."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Materials Price Variance (MPV) = AQ × (AP - SP)\n• Materials Quantity Variance (MQV) = SP × (AQ - SQ)\n• Labor Rate Variance (LRV) = AH × (AR - SR)\n• Labor Efficiency Variance (LEV) = SR × (AH - SH)"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
