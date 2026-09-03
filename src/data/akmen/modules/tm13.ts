// src/data/akmen/modules/tm13.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 13
import type { Reading } from '../../../types';

export const TM13_READING: Reading = {
  tm: 13,
  title: "Operasi Ramping (Lean Operations), JIT, TOC, & Biaya Kualitas",
  ref: "Garrison Ch. 1 & 14 | Hansen & Mowen Ch. 16",
  intro: "Strategi manufaktur modern: Just-in-Time (JIT), sistem tarik (pull system), Theory of Constraints (TOC) oleh Goldratt, serta pelaporan Cost of Quality (COQ).",
  objectives: [
  "Memahami filosofi Lean Manufacturing dan eliminasi 7 pemborosan (Muda).",
  "Menjelaskan mekanisme Just-In-Time (JIT) dan akuntansi Backflush Costing.",
  "Mengidentifikasi dan mengoptimalkan faktor kendala operasi dengan Theory of Constraints (TOC).",
  "Mengklasifikasikan 4 kategori Biaya Kualitas (Pencegahan, Penilaian, Kegagalan Internal, Kegagalan Eksternal)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Operasi Ramping (Lean Operations), JIT, TOC, & Biaya Kualitas",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"leanBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"220\" rx=\"16\" fill=\"url(#leanBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">MATRIKS 4 KATEGORI BIAYA KUALITAS (COST OF QUALITY / COQ)</text>\n      \n      <g transform=\"translate(60, 60)\">\n        <rect x=\"0\" y=\"0\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"185\" y=\"24\" fill=\"#34d399\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">1. BIAYA PENCEGAHAN (PREVENTION)</text>\n        <text x=\"185\" y=\"44\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">Pelatihan kualitas, desain produk anti-salah (Poka-Yoke)</text>\n\n        <rect x=\"410\" y=\"0\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"595\" y=\"24\" fill=\"#38bdf8\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">2. BIAYA PENILAIAN (APPRAISAL / INSPECTION)</text>\n        <text x=\"595\" y=\"44\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">Pengujian bahan baku, inspeksi lini, kalibrasi alat ukur</text>\n\n        <rect x=\"0\" y=\"75\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"185\" y=\"99\" fill=\"#fbbf24\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">3. KEGAGALAN INTERNAL (INTERNAL FAILURE)</text>\n        <text x=\"185\" y=\"119\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">Barang cacat sebelum kirim: Rework, Scrap, Downtime mesin</text>\n\n        <rect x=\"410\" y=\"75\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"1.5\"/>\n        <text x=\"595\" y=\"99\" fill=\"#f87171\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">4. KEGAGALAN EKSTERNAL (EXTERNAL FAILURE)</text>\n        <text x=\"595\" y=\"119\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">Klaim garansi, penarikan produk (recall), tuntutan hukum hukum</text>\n      </g>\n    </svg>",
    "caption": "Gambar 13.1: Empat Kategori Biaya Kualitas (Biaya Kesesuaian vs Biaya Ketidaksesuaian)."
  },
  {
    "kind": "h2",
    "text": "Keseimbangan Biaya Kualitas"
  },
  {
    "kind": "p",
    "text": "Investasi pada Biaya Pencegahan dan Penilaian (Biaya Kesesuaian / Conformance Costs) akan menekan secara drastis timbulnya Biaya Kegagalan Internal dan Eksternal (Non-conformance Costs) yang jauh lebih merusak reputasi perusahaan."
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
