// src/data/akmen/modules/tm5.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 5
import type { Reading } from '../../../types';

export const TM5_READING: Reading = {
  tm: 5,
  title: "Penganggaran Induk (Master Budget) & Perencanaan Laba",
  ref: "Garrison Ch. 8 | Hansen & Mowen Ch. 8",
  intro: "Master budget adalah rencana operasional kuantitatif yang mengoordinasikan seluruh aktivitas perusahaan dalam satu periode ke depan, mulai dari anggaran penjualan hingga proyeksi laporan keuangan.",
  objectives: [
  "Memahami fungsi anggaran: Perencanaan (Planning) dan Pengendalian (Control).",
  "Menyusun rangkaian anggaran operasional secara berurutan: Penjualan → Produksi → DM/DL/MOH.",
  "Menyusun Anggaran Kas (Cash Budget) dengan 4 komponen utama (Penerimaan, Pengeluaran, Defisit/Surplus, dan Pembiayaan).",
  "Menghasilkan Laporan Laba Rugi dan Neraca Proforma."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Penganggaran Induk (Master Budget) & Perencanaan Laba",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 270\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"mbBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"250\" rx=\"16\" fill=\"url(#mbBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">ALUR SIKLUS PENGANGGARAN INDUK (MASTER BUDGET SEQUENCE)</text>\n      \n      <g transform=\"translate(40, 60)\">\n        <rect x=\"0\" y=\"40\" width=\"140\" height=\"50\" rx=\"8\" fill=\"#0284c7\" stroke=\"#38bdf8\"/>\n        <text x=\"70\" y=\"65\" fill=\"#ffffff\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">1. ANGGARAN</text>\n        <text x=\"70\" y=\"80\" fill=\"#ffffff\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">PENJUALAN</text>\n\n        <line x1=\"140\" y1=\"65\" x2=\"180\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n\n        <rect x=\"180\" y=\"40\" width=\"140\" height=\"50\" rx=\"8\" fill=\"#0f172a\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"250\" y=\"65\" fill=\"#34d399\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">2. ANGGARAN</text>\n        <text x=\"250\" y=\"80\" fill=\"#34d399\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">PRODUKSI</text>\n\n        <!-- Branch to 3 manufacturing budgets -->\n        <path d=\"M 320 65 L 350 65 L 350 15 L 380 15\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n        <path d=\"M 320 65 L 380 65\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n        <path d=\"M 320 65 L 350 65 L 350 115 L 380 115\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n\n        <rect x=\"380\" y=\"0\" width=\"130\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"445\" y=\"20\" fill=\"#e0f2fe\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">Bahan Baku (DM)</text>\n\n        <rect x=\"380\" y=\"50\" width=\"130\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"445\" y=\"70\" fill=\"#e0f2fe\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">Tenaga Kerja (DL)</text>\n\n        <rect x=\"380\" y=\"100\" width=\"130\" height=\"32\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"445\" y=\"120\" fill=\"#e0f2fe\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">Overhead (MOH)</text>\n\n        <!-- Convergence to cash budget -->\n        <path d=\"M 510 15 L 540 15 L 540 65 L 570 65\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n        <path d=\"M 510 65 L 570 65\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n        <path d=\"M 510 115 L 540 115 L 540 65 L 570 65\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n\n        <rect x=\"570\" y=\"38\" width=\"120\" height=\"54\" rx=\"8\" fill=\"#d97706\" stroke=\"#fbbf24\"/>\n        <text x=\"630\" y=\"62\" fill=\"#ffffff\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">ANGGARAN</text>\n        <text x=\"630\" y=\"78\" fill=\"#ffffff\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">KAS</text>\n\n        <line x1=\"690\" y1=\"65\" x2=\"730\" y2=\"65\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n\n        <rect x=\"730\" y=\"30\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#0f172a\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/>\n        <text x=\"780\" y=\"55\" fill=\"#a78bfa\" font-size=\"9.5\" font-weight=\"800\" text-anchor=\"middle\">PROYEKSI</text>\n        <text x=\"780\" y=\"70\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">Laba Rugi &amp;</text>\n        <text x=\"780\" y=\"85\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">Neraca Akhir</text>\n      </g>\n    </svg>",
    "caption": "Gambar 5.1: Keterkaitan Logis Modul-Modul Master Budget."
  },
  {
    "kind": "h2",
    "text": "Formula Kunci Anggaran Produksi dan Pembelian Bahan"
  },
  {
    "kind": "p",
    "text": "Kebutuhan Produksi = Target Penjualan (unit) + Target Persediaan Akhir Barang Jadi - Saldo Awal Barang Jadi."
  },
  {
    "kind": "p",
    "text": "Kebutuhan Pembelian Bahan Baku = Kebutuhan Bahan Baku untuk Produksi + Target Persediaan Akhir Bahan Baku - Saldo Awal Bahan Baku."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Unit Harus Diproduksi = Target Penjualan + Persediaan Akhir Barang Jadi - Persediaan Awal Barang Jadi\n• Pembelian Bahan Baku (kg/unit) = Kebutuhan Produksi + Target Persediaan Akhir Bahan - Persediaan Awal Bahan\n• Kas Akhir = Kas Awal + Total Penerimaan Kas - Total Pengeluaran Kas ± Pembiayaan"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
