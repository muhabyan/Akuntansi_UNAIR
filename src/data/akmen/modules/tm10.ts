// src/data/akmen/modules/tm10.ts
// Materi komprehensif Akuntansi Manajemen (AKM202) TM 10
import type { Reading } from '../../../types';

export const TM10_READING: Reading = {
  tm: 10,
  title: "Analisis Informasi Diferensial & Pengambilan Keputusan Taktis",
  ref: "Garrison Ch. 12 | Hansen & Mowen Ch. 13",
  intro: "Pengambilan keputusan taktis jangka pendek menggunakan konsep biaya relevan (relevant costs) dan manfaat relevan. Memisahkan biaya yang dapat dihindari (avoidable) dari biaya tertanam (sunk costs).",
  objectives: [
  "Mengidentifikasi biaya relevan vs tidak relevan untuk keputusan taktis.",
  "Menganalisis keputusan Membuat atau Membeli (Make-or-Buy / Outsourcing).",
  "Mengevaluasi pesanan khusus (Special Order) di bawah harga normal.",
  "Memutuskan apakah akan mempertahankan atau menghentikan lini produk (Keep-or-Drop).",
  "Mengalokasikan sumber daya terbatas (Constrained Resource Allocation).",
  "Menganalisis keputusan Menjual Langsung atau Memproses Lebih Lanjut (Sell or Process Further)."
],
  blocks: [
  {
    "kind": "figure",
    "title": "Analisis Informasi Diferensial & Pengambilan Keputusan Taktis",
    "svg": "<svg class=\"course-diagram-svg\" viewBox=\"0 0 900 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,-apple-system,sans-serif\">\n      <defs>\n        <linearGradient id=\"diffBg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#0b1329\"/><stop offset=\"100%\" stop-color=\"#0f172a\"/></linearGradient>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"880\" height=\"240\" rx=\"16\" fill=\"url(#diffBg)\" stroke=\"#1e293b\" stroke-width=\"1.5\"/>\n      <text x=\"450\" y=\"38\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">POHON KEPUTUSAN TAKTIS (RELEVANT COSTING)</text>\n      \n      <g transform=\"translate(45, 60)\">\n        <rect x=\"0\" y=\"15\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"90\" y=\"40\" fill=\"#38bdf8\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">MAKE OR BUY</text>\n        <text x=\"90\" y=\"58\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">Biaya terhindarkan vs harga beli</text>\n\n        <rect x=\"210\" y=\"15\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n        <text x=\"300\" y=\"40\" fill=\"#34d399\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">SPECIAL ORDER</text>\n        <text x=\"300\" y=\"58\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">Harga &gt; Biaya Variabel tambahan</text>\n\n        <rect x=\"420\" y=\"15\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n        <text x=\"510\" y=\"40\" fill=\"#fbbf24\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">KEEP OR DROP</text>\n        <text x=\"510\" y=\"58\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">Segment Margin &gt; 0 ? Pertahankan</text>\n\n        <rect x=\"630\" y=\"15\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f87171\" stroke-width=\"1.5\"/>\n        <text x=\"720\" y=\"40\" fill=\"#f87171\" font-size=\"10.5\" font-weight=\"800\" text-anchor=\"middle\">SELL OR PROCESS FURTHER</text>\n        <text x=\"720\" y=\"58\" fill=\"#cbd5e1\" font-size=\"8.5\" text-anchor=\"middle\">Pendapatan tambahan &gt; Biaya lanjutan</text>\n      </g>\n    </svg>",
    "caption": "Gambar 10.1: Empat Tipe Keputusan Taktis Berbasis Biaya Relevan."
  },
  {
    "kind": "h2",
    "text": "Prinsip Kunci Biaya Relevan"
  },
  {
    "kind": "p",
    "text": "Biaya relevan harus memenuhi dua kriteria: (1) Biaya tersebut akan terjadi di masa depan, dan (2) Berbeda di antara alternatif keputusan yang dihadapi."
  },
  {
    "kind": "p",
    "text": "Sunk Cost (biaya historis yang sudah terjadi) dan Biaya Masa Depan yang tidak berbeda antar alternatif SELALU tidak relevan dan harus diabaikan."
  },
  {
    "kind": "h3",
    "text": "Rumus & Formula Kunci"
  },
  {
    "kind": "callout",
    "variant": "key",
    "title": "Formula Penting",
    "text": "• Keuntungan Keputusan Khusus = Tambahan Pendapatan Diferensial - Tambahan Biaya Diferensial\n• CM per Unit Kendala = CM per unit / Jam Mesin (atau unit sumber daya terbatas) yang Dibutuhkan"
  },
  {
    "kind": "callout",
    "variant": "tip",
    "title": "Kunci Penguasaan Materi",
    "text": "Pahami konsep logis di balik angka dan formula. Dalam ujian akuntansi manajemen, penalaran strategis dan implikasi keputusan memiliki bobot tinggi selain ketepatan kalkulasi matematis."
  }
]
};
