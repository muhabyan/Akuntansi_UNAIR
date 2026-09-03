// src/data/akmen/modules/tm12.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 12
import type { Reading } from '../../../types';

export const TM12_READING: Reading = {
  tm: 12,
  title: "Keputusan Investasi Modal (Capital Budgeting)",
  ref: "Garrison Ch. 13 | Hansen & Mowen Ch. 15",
  intro: "Evaluasi pengeluaran modal jangka panjang untuk aset tetap dan proyek ekspansi. Meliputi metode non-diskonto (Payback Period, ARR) dan metode diskonto arus kas (Net Present Value / NPV, Internal Rate of Return / IRR).",
  objectives: [
  "Membedakan proyek independen vs proyek saling meniadakan (mutually exclusive).",
  "Menghitung Payback Period dan Accounting Rate of Return (ARR).",
  "Menghitung Net Present Value (NPV) menggunakan Time Value of Money.",
  "Menentukan Internal Rate of Return (IRR) dan Profitability Index (PI).",
  "Menganalisis dampak pajak dan penyusutan (tax shield) pada arus kas modal."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Keputusan Investasi Modal (Capital Budgeting)",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"cbBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"220\" rx=\"16\" fill=\"url(#cbBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">SPEKTRUM METODE EVALUASI CAPITAL BUDGETING</text>\n      \n      <g transform=\"translate(60, 65)\">\n        <rect x=\"0\" y=\"0\" width=\"370\" height=\"120\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <text x=\"185\" y=\"28\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">METODE NON-DISKONTO (SEDERHANA)</text>\n        <line x1=\"20\" y1=\"38\" x2=\"350\" y2=\"38\" stroke=\"#334155\"/>\n        <text x=\"30\" y=\"62\" fill=\"#cbd5e1\" font-size=\"9.5\">1. <tspan font-weight=\"700\">Payback Period:</tspan> Mengukur likuiditas &amp; kecepatan modal kembali.</text>\n        <text x=\"30\" y=\"80\" fill=\"#94a3b8\" font-size=\"8.5\">   ⚠️ Mengabaikan TVM dan arus kas setelah payback.</text>\n        <text x=\"30\" y=\"102\" fill=\"#cbd5e1\" font-size=\"9.5\">2. <tspan font-weight=\"700\">ARR (Accounting Rate of Return):</tspan> Berbasis laba akrual buku.</text>\n\n        <rect x=\"410\" y=\"0\" width=\"370\" height=\"120\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"595\" y=\"28\" fill=\"#34d399\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">METODE DISKONTO (DISCOUNTED CASH FLOW / DCF)</text>\n        <line x1=\"430\" y1=\"38\" x2=\"760\" y2=\"38\" stroke=\"#334155\"/>\n        <text x=\"430\" y=\"62\" fill=\"#cbd5e1\" font-size=\"9.5\">1. <tspan font-weight=\"700\">NPV (Net Present Value):</tspan> Standar baku terbaik (Kriteria: NPV ≥ 0).</text>\n        <text x=\"430\" y=\"84\" fill=\"#cbd5e1\" font-size=\"9.5\">2. <tspan font-weight=\"700\">IRR (Internal Rate of Return):</tspan> Tingkat diskonto yang membuat NPV = 0.</text>\n        <text x=\"430\" y=\"106\" fill=\"#cbd5e1\" font-size=\"9.5\">3. <tspan font-weight=\"700\">Profitability Index (PI):</tspan> PV Arus Masuk / Investasi Awal.</text>\n      </g>\n    </svg>",
    "caption": "Gambar 12.1: Klasifikasi Metode Evaluasi Proyek Investasi Modal."
  },
  {
    "kind": "h2",
    "text": "Aturan Keputusan NPV dan Arus Kas Relevan"
  },
  {
    "kind": "p",
    "text": "Arus kas yang relevan mencakup: (1) Biaya perolehan investasi awal dan modal kerja bersih, (2) Penghematan biaya operasional atau arus kas masuk setelah pajak tahunan, (3) Manfaat perisai pajak depresiasi (Depreciation Tax Shield = Beban Depresiasi × Tarif Pajak), dan (4) Nilai sisa pelepasan aset di akhir umur proyek."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Payback Period (Arus Kas Rata) = Investasi Awal / Arus Kas Masuk Bersih Tahunan\n• NPV = ∑ [CF_t / (1 + r)^t] - Investasi Awal\n• Profitability Index (PI) = Nilai Sekarang Arus Kas Masa Depan / Investasi Awal"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
