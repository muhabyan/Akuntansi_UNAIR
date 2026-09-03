// src/data/akmen/modules/tm8.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 8
import type { Reading } from '../../../types';

export const TM8_READING: Reading = {
  tm: 8,
  title: "Desentralisasi, Evaluasi Kinerja (ROI, RI, EVA) & Balanced Scorecard",
  ref: "Garrison Ch. 11 | Hansen & Mowen Ch. 12",
  intro: "Membuka paruh kedua perkuliahan (Pra-UAS) dengan fokus pada pengendalian manajemen organisasi desentralisasi. Evaluasi pusat pertanggungjawaban investasi menggunakan metrik keuangan (ROI, Residual Income, EVA) dan integrasi Balanced Scorecard.",
  objectives: [
  "Mengidentifikasi 4 jenis pusat pertanggungjawaban: Biaya, Pendapatan, Laba, dan Investasi.",
  "Menghitung Return on Investment (ROI) dengan dekomposisi Margin × Asset Turnover.",
  "Menghitung Residual Income (RI) dan memahami keunggulannya dibanding ROI dalam menghindari sub-optimasi.",
  "Memahami konsep Economic Value Added (EVA) berbasis biaya modal tertimbang (WACC).",
  "Menguraikan 4 perspektif Balanced Scorecard (Keuangan, Pelanggan, Proses Internal, Pembelajaran & Pertumbuhan)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Desentralisasi, Evaluasi Kinerja (ROI, RI, EVA) & Balanced Scorecard",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"bscBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"280\" rx=\"16\" fill=\"url(#bscBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">EMPAT PERSPEKTIF BALANCED SCORECARD (KAPLAN &amp; NORTON)</text>\n      \n      <g transform=\"translate(60, 60)\">\n        <rect x=\"230\" y=\"0\" width=\"320\" height=\"48\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"390\" y=\"24\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1. PERSPEKTIF KEUANGAN (FINANCIAL)</text>\n        <text x=\"390\" y=\"38\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">\"Bagaimana kita memandang pemegang saham?\" (ROI, Laba, EVA)</text>\n\n        <line x1=\"390\" y1=\"48\" x2=\"390\" y2=\"68\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n\n        <rect x=\"230\" y=\"68\" width=\"320\" height=\"48\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"390\" y=\"92\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">2. PERSPEKTIF PELANGGAN (CUSTOMER)</text>\n        <text x=\"390\" y=\"106\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">\"Bagaimana pandangan pelanggan?\" (Retensi, Kepuasan, Pangsa Pasar)</text>\n\n        <line x1=\"390\" y1=\"116\" x2=\"390\" y2=\"136\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n\n        <rect x=\"230\" y=\"136\" width=\"320\" height=\"48\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"390\" y=\"160\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">3. PERSPEKTIF PROSES BISNIS INTERNAL</text>\n        <text x=\"390\" y=\"174\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">\"Dalam proses apa kita harus unggul?\" (Cycle Time, Yield, Cacat)</text>\n\n        <line x1=\"390\" y1=\"184\" x2=\"390\" y2=\"204\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n\n        <rect x=\"230\" y=\"204\" width=\"320\" height=\"48\" rx=\"8\" fill=\"#1e293b\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/>\n        <text x=\"390\" y=\"228\" fill=\"#a78bfa\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">4. PEMBELAJARAN &amp; PERTUMBUHAN (LEARNING &amp; GROWTH)</text>\n        <text x=\"390\" y=\"242\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">\"Bagaimana kita terus berinovasi &amp; tumbuh?\" (Pelatihan, IT, Budaya)</text>\n      </g>\n    </svg>",
    "caption": "Gambar 8.1: Hubungan Kausal Sebab-Akibat pada Balanced Scorecard."
  },
  {
    "kind": "h2",
    "text": "ROI vs Residual Income (RI)"
  },
  {
    "kind": "p",
    "text": "ROI = Laba Bersih Operasi / Rata-Rata Aset Operasi = Margin × Asset Turnover."
  },
  {
    "kind": "p",
    "text": "Kelemahan ROI: Manajer divisi cenderung menolak proyek investasi yang memiliki return di atas target perusahaan (misal 15%) jika return proyek tersebut di bawah ROI divisinya saat ini (misal 20%). Ini disebut fenomena sub-optimasi."
  },
  {
    "kind": "p",
    "text": "Residual Income (RI) mengatasi masalah ini: RI = Laba Operasi - (Rata-rata Aset Operasi × Tingkat Pengembalian Minimum). Manajer akan menerima seluruh proyek selama menghasilkan RI positif."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• ROI = Laba Operasi / Rata-rata Aset Operasi = (Laba / Penjualan) × (Penjualan / Aset Operasi)\n• Residual Income (RI) = Laba Bersih Operasi - (Rata-rata Aset Operasi × Required Rate of Return)\n• EVA = NOPAT - (Total Capital Employed × WACC)"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
