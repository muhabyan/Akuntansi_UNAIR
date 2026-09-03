// src/data/akmen/modules/tm1.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 1
import type { Reading } from '../../../types';

export const TM1_READING: Reading = {
  tm: 1,
  title: "Konsep Dasar Akuntansi Manajemen & Klasifikasi Biaya",
  ref: "Garrison Ch. 1 & 2 | Hansen & Mowen Ch. 1 & 2",
  intro: "Tatap muka pertama membangun fondasi perbedaan antara akuntansi keuangan (berorientasi eksternal) dan akuntansi manajemen (berorientasi internal). Fokus mencakup klasifikasi biaya berdasarkan fungsi, ketelusuran, perilaku, dan pengambilan keputusan.",
  objectives: [
  "Membedakan tujuan, pengguna, dan aturan akuntansi manajemen vs akuntansi keuangan.",
  "Mengklasifikasikan biaya manufaktur (Direct Materials, Direct Labor, Manufacturing Overhead).",
  "Membedakan Biaya Produk (inventoriable) vs Biaya Periode (expensed immediately).",
  "Menguasai konsep Prime Cost (Biaya Utama) dan Conversion Cost (Biaya Konversi).",
  "Memahami biaya diferensial, opportunity cost (biaya peluang), dan sunk cost (biaya tertanam)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Konsep Dasar Akuntansi Manajemen & Klasifikasi Biaya",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 320\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"akmBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"300\" rx=\"16\" fill=\"url(#akmBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">STRUKTUR KLASIFIKASI BIAYA MANUFAKTUR &amp; PERIODE</text>\n      \n      <rect x=\"35\" y=\"60\" width=\"390\" height=\"230\" rx=\"10\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n      <text x=\"230\" y=\"86\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">BIAYA PRODUK (PRODUCT COSTS)</text>\n      <text x=\"230\" y=\"106\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Masuk Persediaan (Neraca) sampai barang terjual</text>\n      <line x1=\"55\" y1=\"118\" x2=\"405\" y2=\"118\" stroke=\"#334155\"/>\n      \n      <rect x=\"55\" y=\"130\" width=\"105\" height=\"70\" rx=\"6\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n      <text x=\"107\" y=\"152\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">Bahan Langsung</text>\n      <text x=\"107\" y=\"170\" fill=\"#94a3b8\" font-size=\"8.5\" text-anchor=\"middle\">(Direct Materials)</text>\n      <text x=\"107\" y=\"188\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">Dapat ditelusuri</text>\n\n      <rect x=\"175\" y=\"130\" width=\"110\" height=\"70\" rx=\"6\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n      <text x=\"230\" y=\"152\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">TKL</text>\n      <text x=\"230\" y=\"170\" fill=\"#94a3b8\" font-size=\"8.5\" text-anchor=\"middle\">(Direct Labor)</text>\n      <text x=\"230\" y=\"188\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">Upah perakit</text>\n\n      <rect x=\"300\" y=\"130\" width=\"105\" height=\"70\" rx=\"6\" fill=\"#0f172a\" stroke=\"#0284c7\"/>\n      <text x=\"352\" y=\"152\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">Overhead (BOP)</text>\n      <text x=\"352\" y=\"170\" fill=\"#94a3b8\" font-size=\"8.5\" text-anchor=\"middle\">(Mfg Overhead)</text>\n      <text x=\"352\" y=\"188\" fill=\"#cbd5e1\" font-size=\"8\" text-anchor=\"middle\">Bahan &amp; TKL tdk lgsg</text>\n\n      <rect x=\"55\" y=\"215\" width=\"165\" height=\"60\" rx=\"6\" fill=\"#0369a1\" fill-opacity=\"0.2\" stroke=\"#38bdf8\"/>\n      <text x=\"137\" y=\"238\" fill=\"#38bdf8\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">BIAYA UTAMA (PRIME COST)</text>\n      <text x=\"137\" y=\"256\" fill=\"#e0f2fe\" font-size=\"9\" text-anchor=\"middle\">Bahan Langsung + TKL</text>\n\n      <rect x=\"235\" y=\"215\" width=\"170\" height=\"60\" rx=\"6\" fill=\"#0369a1\" fill-opacity=\"0.2\" stroke=\"#38bdf8\"/>\n      <text x=\"320\" y=\"238\" fill=\"#38bdf8\" font-size=\"9.5\" font-weight=\"700\" text-anchor=\"middle\">BIAYA KONVERSI (CONVERSION)</text>\n      <text x=\"320\" y=\"256\" fill=\"#e0f2fe\" font-size=\"9\" text-anchor=\"middle\">TKL + Overhead Pabrik</text>\n\n      <rect x=\"475\" y=\"60\" width=\"390\" height=\"230\" rx=\"10\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <text x=\"670\" y=\"86\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">BIAYA PERIODE (PERIOD COSTS)</text>\n      <text x=\"670\" y=\"106\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Langsung dibebankan ke Laporan Laba Rugi periode berjalan</text>\n      <line x1=\"495\" y1=\"118\" x2=\"845\" y2=\"118\" stroke=\"#334155\"/>\n\n      <rect x=\"500\" y=\"140\" width=\"165\" height=\"120\" rx=\"6\" fill=\"#0f172a\" stroke=\"#d97706\"/>\n      <text x=\"582\" y=\"170\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">Biaya Penjualan</text>\n      <text x=\"582\" y=\"195\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">• Komisi penjualan</text>\n      <text x=\"582\" y=\"215\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">• Iklan &amp; pemasaran</text>\n      <text x=\"582\" y=\"235\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">• Ongkos kirim keluar</text>\n\n      <rect x=\"685\" y=\"140\" width=\"165\" height=\"120\" rx=\"6\" fill=\"#0f172a\" stroke=\"#d97706\"/>\n      <text x=\"767\" y=\"170\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">Biaya Administrasi</text>\n      <text x=\"767\" y=\"195\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">• Gaji eksekutif &amp; legal</text>\n      <text x=\"767\" y=\"215\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">• Depresiasi kantor pusat</text>\n      <text x=\"767\" y=\"235\" fill=\"#cbd5e1\" font-size=\"9\" text-anchor=\"middle\">• Biaya audit &amp; konsultasi</text>\n    </svg>",
    "caption": "Gambar 1.1: Pemetaan Biaya Produk (Manufaktur) vs Biaya Periode (Komersial)."
  },
  {
    "kind": "h2",
    "text": "Perbedaan Akuntansi Manajemen vs Akuntansi Keuangan"
  },
  {
    "kind": "p",
    "text": "Akuntansi manajemen berfokus pada penyediaan informasi bagi pihak internal (manajer) untuk perencanaan, pengendalian, dan pengambilan keputusan operasional. Tidak terikat standar kaku seperti SAK/IFRS, melainkan berorientasi ke masa depan (future-oriented) dengan fleksibilitas tinggi."
  },
  {
    "kind": "p",
    "text": "Sebaliknya, akuntansi keuangan berorientasi pada pihak eksternal (investor, kreditor, otoritas pajak) dengan menyajikan laporan historis yang tunduk patuh pada Standar Akuntansi Keuangan (SAK) dan prinsip objektivitas."
  },
  {
    "kind": "h2",
    "text": "Klasifikasi Biaya untuk Penilaian Persediaan & Laba Rugi"
  },
  {
    "kind": "p",
    "text": "Biaya manufaktur terdiri dari tiga elemen: Bahan Baku Langsung (Direct Materials), Tenaga Kerja Langsung (Direct Labor), dan Biaya Overhead Pabrik (Manufacturing Overhead). Ketiganya membentuk Biaya Produk."
  },
  {
    "kind": "p",
    "text": "Biaya Non-manufaktur mencakup Biaya Penjualan dan Biaya Administrasi Umum, yang langsung diakui sebagai Biaya Periode (beban pada periode terjadinya)."
  },
  {
    "kind": "table",
    "caption": "Tabel 1.1: Perbandingan Karakteristik Akuntansi Keuangan vs Manajemen",
    "headers": [
      "Dimensi",
      "Akuntansi Keuangan",
      "Akuntansi Manajemen"
    ],
    "rows": [
      [
        "Pengguna Utama",
        "Eksternal (pemegang saham, bankir, regulator)",
        "Internal (manajer dan direksi organisasi)"
      ],
      [
        "Orientasi Waktu",
        "Historis (fakta transaksi masa lalu)",
        "Masa Depan (proyeksi, estimasi, anggaran)"
      ],
      [
        "Kepatuhan Standar",
        "Wajib patuh SAK / GAAP / IFRS",
        "Tidak wajib; bebas mengikuti kebutuhan manajer"
      ],
      [
        "Fokus Informasi",
        "Entitas secara keseluruhan (agregat)",
        "Segmen, lini produk, wilayah, atau departemen"
      ],
      [
        "Sifat Informasi",
        "Objektif, dapat diverifikasi, moneter",
        "Relevan, tepat waktu, moneter & non-moneter"
      ]
    ]
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Biaya Utama (Prime Cost) = Bahan Baku Langsung + Tenaga Kerja Langsung\n• Biaya Konversi (Conversion Cost) = Tenaga Kerja Langsung + Biaya Overhead Pabrik (BOP)\n• Total Biaya Manufaktur = Bahan Baku Langsung + Tenaga Kerja Langsung + BOP"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
