// src/data/akmen/modules/tm4.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 4
import type { Reading } from '../../../types';

export const TM4_READING: Reading = {
  tm: 4,
  title: "Activity-Based Management (ABM) & Profitabilitas Pelanggan",
  ref: "Garrison Ch. 7 | Hansen & Mowen Ch. 4 & 11",
  intro: "Membahas pemanfaatan Activity-Based Costing (ABC) dalam pengelolaan aktivitas operasional untuk menciptakan nilai pelanggan dan mengeliminasi pemborosan melalui Activity-Based Management (ABM).",
  objectives: [
  "Mengklasifikasikan aktivitas ke dalam 4 hierarki: Unit-level, Batch-level, Product-sustaining, dan Facility-sustaining.",
  "Mengidentifikasi aktivitas bernilai tambah (Value-Added) vs tidak bernilai tambah (Non-Value-Added).",
  "Menghitung biaya dan profitabilitas pelanggan dengan Whale Curve (Kurva Paus).",
  "Mengaplikasikan Activity-Based Costing untuk menghindari subsidi silang biaya (product cross-subsidization)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Activity-Based Management (ABM) & Profitabilitas Pelanggan",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"abmBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"260\" rx=\"16\" fill=\"url(#abmBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">HIERARKI AKTIVITAS ACTIVITY-BASED COSTING (ABC)</text>\n      \n      <g transform=\"translate(45, 65)\">\n        <rect x=\"0\" y=\"0\" width=\"180\" height=\"175\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"90\" y=\"28\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1. UNIT-LEVEL</text>\n        <text x=\"90\" y=\"48\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Tiap unit produk</text>\n        <line x1=\"15\" y1=\"58\" x2=\"165\" y2=\"58\" stroke=\"#334155\"/>\n        <text x=\"15\" y=\"80\" fill=\"#cbd5e1\" font-size=\"9\">• Listrik mesin pemotong</text>\n        <text x=\"15\" y=\"100\" fill=\"#cbd5e1\" font-size=\"9\">• Jam kerja mesin</text>\n        <text x=\"15\" y=\"120\" fill=\"#cbd5e1\" font-size=\"9\">• Tenaga kerja perakitan</text>\n        <text x=\"15\" y=\"150\" fill=\"#38bdf8\" font-size=\"8.5\" font-style=\"italic\">Driver: Jam Mesin / Unit</text>\n\n        <rect x=\"210\" y=\"0\" width=\"180\" height=\"175\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"300\" y=\"28\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">2. BATCH-LEVEL</text>\n        <text x=\"300\" y=\"48\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Tiap kelompok/batch</text>\n        <line x1=\"225\" y1=\"58\" x2=\"375\" y2=\"58\" stroke=\"#334155\"/>\n        <text x=\"225\" y=\"80\" fill=\"#cbd5e1\" font-size=\"9\">• Setup mesin cetak</text>\n        <text x=\"225\" y=\"100\" fill=\"#cbd5e1\" font-size=\"9\">• Penanganan bahan (handling)</text>\n        <text x=\"225\" y=\"120\" fill=\"#cbd5e1\" font-size=\"9\">• Pengujian sampel batch</text>\n        <text x=\"225\" y=\"150\" fill=\"#34d399\" font-size=\"8.5\" font-style=\"italic\">Driver: Jumlah Setup / Batch</text>\n\n        <rect x=\"420\" y=\"0\" width=\"180\" height=\"175\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"510\" y=\"28\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">3. PRODUCT-LEVEL</text>\n        <text x=\"510\" y=\"48\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Spesifik jenis produk</text>\n        <line x1=\"435\" y1=\"58\" x2=\"585\" y2=\"58\" stroke=\"#334155\"/>\n        <text x=\"435\" y=\"80\" fill=\"#cbd5e1\" font-size=\"9\">• Desain teknik produk</text>\n        <text x=\"435\" y=\"100\" fill=\"#cbd5e1\" font-size=\"9\">• Sertifikasi &amp; uji lab</text>\n        <text x=\"435\" y=\"120\" fill=\"#cbd5e1\" font-size=\"9\">• Promosi merek produk</text>\n        <text x=\"435\" y=\"150\" fill=\"#fbbf24\" font-size=\"8.5\" font-style=\"italic\">Driver: Jam Desain / Tipe</text>\n\n        <rect x=\"630\" y=\"0\" width=\"180\" height=\"175\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"1.5\"/>\n        <text x=\"720\" y=\"28\" fill=\"#f87171\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">4. FACILITY-LEVEL</text>\n        <text x=\"720\" y=\"48\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Kapasitas pabrik umum</text>\n        <line x1=\"645\" y1=\"58\" x2=\"795\" y2=\"58\" stroke=\"#334155\"/>\n        <text x=\"645\" y=\"80\" fill=\"#cbd5e1\" font-size=\"9\">• Keamanan &amp; satpam pabrik</text>\n        <text x=\"645\" y=\"100\" fill=\"#cbd5e1\" font-size=\"9\">• Asuransi bangunan pabrik</text>\n        <text x=\"645\" y=\"120\" fill=\"#cbd5e1\" font-size=\"9\">• Gaji manajer umum pabrik</text>\n        <text x=\"645\" y=\"150\" fill=\"#f87171\" font-size=\"8.5\" font-style=\"italic\">Driver: Luas Lantai / Fasilitas</text>\n      </g>\n    </svg>",
    "caption": "Gambar 4.1: Empat Tingkat Hierarki Aktivitas Penggerak Biaya (ABC)."
  },
  {
    "kind": "h2",
    "text": "Konsep Whale Curve (Kurva Paus) dalam Analisis Pelanggan"
  },
  {
    "kind": "p",
    "text": "Dalam analisis profitabilitas pelanggan berbasis ABC, sering ditemukan pola 20-80: 20% pelanggan paling menguntungkan menghasilkan hingga 150-200% dari total laba operasi perusahaan."
  },
  {
    "kind": "p",
    "text": "Sebagian pelanggan (middle tier) menghasilkan laba impas, sementara 20% pelanggan terbawah justru mengikis laba secara masif karena sering meminta pesanan kustom dalam jumlah kecil, perubahan jadwal mendadak, dan dukungan purna jual berlebihan."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Tarif Aktivitas (Activity Rate) = Total Estimasi Biaya Aktivitas / Total Kapasitas Cost Driver\n• Overhead Dibebankan = Aktivitas Aktual × Tarif Aktivitas"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
