import type { Reading } from '../../../types';
import { CASE_VAT_PKP_OBJECTS } from '../pjk2PracticeCases';

const SVG_VAT_MECHANISM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="pkGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="pmGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk12)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MEKANISME PENGKREDITAN PAJAK PERTAMBAHAN NILAI: PAJAK KELUARAN (PK) VS PAJAK MASUKAN (PM)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">MEKANISME PPN</text>

  <!-- Left: Pajak Keluaran (Penjualan) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="150" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="28" rx="10" fill="url(#pkGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="19" fill="#38bdf8" font-size="10.5" font-weight="800">1. PAJAK KELUARAN (PK) - PENYERAHAN BKP / JKP</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8">• PPN 11% (UU HPP) yang dipungut PKP Penjual saat menjual barang/jasa</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8">• Menerbitkan Faktur Pajak Elektronik (e-Faktur) kode 010 / 020 / 030 / 040</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8">• Merupakan utang titipan kas dari pembeli yang wajib disetor ke kas negara</text>
    <rect class="svg-badge-blue" x="16" y="105" width="363" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="121" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Kewajiban Setor Pajak Pertambahan Nilai</text>
  </g>

  <!-- Right: Pajak Masukan (Pembelian) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="150" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="28" rx="10" fill="url(#pmGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="19" fill="#34d399" font-size="10.5" font-weight="800">2. PAJAK MASUKAN (PM) - PEROLEHAN BKP / JKP</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8">• PPN 11% yang telah dibayar PKP saat membeli bahan baku / barang dagang</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8">• Menerima Faktur Pajak Masukan sah &amp; tervalidasi di sistem e-Faktur DJP</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8">• Berfungsi sebagai kredit pajak pengurang atas Pajak Keluaran</text>
    <rect class="svg-badge-green" x="16" y="105" width="363" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="121" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Hak Kredit Pajak Pengurang (Prepaid Tax)</text>
  </g>

  <!-- Bottom Outcomes (Kurang Bayar vs Lebih Bayar) -->
  <g transform="translate(35, 238)">
    <rect class="svg-subcard" x="0" y="0" width="395" height="75" rx="8" fill="#1e293b" stroke="#f87171"/>
    <text class="text-accent-red" x="14" y="20" fill="#f87171" font-size="9.5" font-weight="800">KONDISI A: PAJAK KELUARAN &gt; PAJAK MASUKAN (PK &gt; PM)</text>
    <text class="text-accent-red" x="14" y="38" fill="#f87171" font-size="8.5" font-weight="700">STATUS: PPN KURANG BAYAR</text>
    <text class="svg-text" x="14" y="54" fill="#cbd5e1" font-size="7.5">Selisih wajib disetor ke kas negara via Kode Billing sebelum SPT Masa PPN 1111 dilaporkan pada akhir bulan berikutnya.</text>

    <rect class="svg-subcard" x="435" y="0" width="395" height="75" rx="8" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="449" y="20" fill="#34d399" font-size="9.5" font-weight="800">KONDISI B: PAJAK KELUARAN &lt; PAJAK MASUKAN (PK &lt; PM)</text>
    <text class="text-accent-green" x="449" y="38" fill="#34d399" font-size="8.5" font-weight="700">STATUS: PPN LEBIH BAYAR</text>
    <text class="svg-text" x="449" y="54" fill="#cbd5e1" font-size="7.5">PKP berhak memilih: (1) Dikompensasikan ke masa pajak berikutnya (Default), atau (2) Diajukan Permohonan Restitusi pengembalian kas.</text>
  </g>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Dasar Hukum PPN & PPnBM, Karakteristik, Pengusaha Kena Pajak (PKP), & Objek BKP/JKP',
  ref: 'UU PPN No. 8/1983 jo UU HPP No. 7/2021 | PMK 197/2013 Batasan PKP 4,8 M | Tarif PPN 11% (12%)',
  intro: 'TM 12 membahas arsitektur Pajak Pertambahan Nilai (PPN) dan Pajak Penjualan atas Barang Mewah (PPnBM) di Indonesia: karakteristik PPN sebagai pajak objektif, tidak langsung, multi-stage non-kumulatif dengan credit method, kriteria pengukuhan Pengusaha Kena Pajak (PKP threshold omzet > Rp 4,8 Miliar), klasifikasi Barang Kena Pajak (BKP) dan Jasa Kena Pajak (JKP), fasilitas PPN Dibebaskan vs Tidak Dipungut, serta struktur tarif PPN (11% menuju 12%).',
  objectives: [
    'Menjelaskan karakteristik PPN: Pajak Tidak Langsung, Pajak Objektif, Multi-Stage, dan Destination Principle.',
    'Menganalisis batasan peredaran bruto pengukuhan Pengusaha Kena Pajak (PKP) sebesar Rp 4,8 Miliar.',
    'Membedakan fasilitas PPN: Dibebaskan (Pajak Masukan tidak dapat dikreditkan) vs Tidak Dipungut (PM dapat dikreditkan).',
    'Menghitung PPN dan PPnBM atas penyerahan barang mewah kendaraan bermotor dan hunian mewah.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Mekanisme Pengkreditan PPN: Pajak Keluaran dikurangi Pajak Masukan (Credit Method).',
      svg: SVG_VAT_MECHANISM
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 1 angka 2, Pasal 3A, Pasal 4, & Pasal 7 UU PPN s.t.d.t.d UU HPP',
      text: '"Pasal 1 angka 2: Barang Kena Pajak (BKP) adalah barang berwujud atau tidak berwujud yang dikenai pajak berdasarkan Undang-Undang ini.\n\nPasal 3A ayat (1): Pengusaha yang melakukan penyerahan BKP/JKP wajib melaporkan usahanya untuk dikukuhkan sebagai Pengusaha Kena Pajak (PKP) dan wajib memungut, menyetor, dan melaporkan PPN/PPnBM, kecuali pengusaha kecil dengan omzet tahunan di bawah Rp 4,8 Miliar.\n\nPasal 4 ayat (1): PPN dikenakan atas penyerahan BKP/JKP di dalam Daerah Pabean oleh Pengusaha, impor BKP, pemanfaatan BKP Tidak Berwujud/JKP dari luar Daerah Pabean, dan ekspor BKP/JKP oleh PKP.\n\nPasal 7 ayat (1): Tarif Pajak Pertambahan Nilai yaitu: a. sebesar 11% yang mulai berlaku pada tanggal 1 April 2022; b. sebesar 12% yang mulai berlaku paling lambat pada tanggal 1 Januari 2025; c. tarif 0% diterapkan atas ekspor BKP Berwujud, BKP Tidak Berwujud, dan JKP."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Aspek PPN & PPnBM', 'Ketentuan Regulasi UU HPP', 'Implikasi Finansial bagi PKP', 'Dampak bagi Konsumen Akhir'],
      rows: [
        ['Tarif PPN Penyerahan DN', 'Tarif tunggal 11% (berlaku sejak 1 April 2022, menuju 12%).', 'Dipungut sebagai Pajak Keluaran (PK) pada saat faktur terbit.', 'Menjadi penambah harga beli riil yang dibayar konsumen.'],
        ['Tarif PPN Ekspor', 'Tarif 0% atas ekspor BKP berwujud, BKP tidak berwujud, & JKP.', 'Pajak Keluaran nol, tetapi Pajak Masukan terkait tetap dapat dikreditkan/restitusi.', 'Komoditas ekspor Indonesia berdaya saing bebas beban PPN.'],
        ['Fasilitas PPN Dibebaskan', 'Diberikan untuk barang kebutuhan pokok, vaksin, air bersih, jasa medis/pendidikan.', 'Pajak Masukan yang dibayar TIDAK DAPAT DIKREDITKAN (dibiayakan).', 'Masyarakat memperoleh kebutuhan pokok tanpa tambahan PPN.'],
        ['Fasilitas PPN Tidak Dipungut', 'Diberikan di Kawasan Bebas (FTZ Batam), Kawasan Berikat, KEK.', 'Pajak Masukan yang dibayar TETAP DAPAT DIKREDITKAN.', 'Mendorong arus investasi industri manufaktur berorientasi ekspor.'],
        ['Karakteristik PPnBM', 'Pungutan satu kali saja di tingkat pabrikan atau saat impor barang mewah (10% s/d 200%).', 'PPnBM BUKAN Pajak Masukan dan MUTLAK TIDAK DAPAT DIKREDITKAN.', 'Menangkal konsumsi barang mewah yang mencolok.']
      ],
      caption: 'Tabel 12.0: Matriks karakteristik dan tarif PPN serta PPnBM di Indonesia.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Mekanisme Pajak Keluaran - Masukan'
    },
    {
      kind: 'formula',
      text: `\\text{Pajak Keluaran (PK)} = \\text{Dasar Pengenaan Pajak (DPP)} \\times 11\\%
\\text{Pajak Masukan (PM)} = \\text{PPN yang Telah Dibayar saat Beli Bahan Baku / Impor}
\\text{Status SPT Masa PPN 1111}: \\quad \\begin{cases}
PK - PM > 0 & \\implies \\text{PPN Kurang Bayar (Wajib Setor Akhir Bulan Berikutnya)} \\\\
PK - PM < 0 & \\implies \\text{PPN Lebih Bayar (Kompensasi ke Bulan Depan / Restitusi)}
\\end{cases}`,
      note: 'Pengusaha yang omzetnya belum mencapai Rp 4,8 Miliar dikategorikan sebagai Pengusaha Kecil yang tidak wajib dikukuhkan sebagai PKP dan dilarang menerbitkan Faktur Pajak.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penyerahan BKP Mewah Dikenai PPN dan PPnBM',
      prompt: 'Pabrikan mobil PT Otomotif Prima menyerahkan mobil sedan mewah dengan harga jual (DPP) Rp 1.000.000.000 kepada konsumen. Berdasarkan peraturan perpajakan, mobil tersebut dikenai PPN 11% dan PPnBM tarif 40%. Hitung total harga yang harus dibayar konsumen!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan PPN (11%)**: 11% × Rp 1.000.000.000 = **Rp 110.000.000**.',
            '**Perhitungan PPnBM (40%)**: 40% × Rp 1.000.000.000 = **Rp 400.000.000**.',
            '**Total yang Wajib Dibayar Konsumen**:\nHarga Jual (1.000.000.000) + PPN (110.000.000) + PPnBM (400.000.000) = **Rp 1.510.000.000**.',
            '**Catatan Finansial**: Konsumen pembeli tidak dapat mengkreditkan PPnBM Rp 400 Jt tersebut; PPnBM dikapitalisasi menambah harga perolehan aset mobil.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Karakteristik & Subjek PKP', 'Threshold omzet Rp 4,8 Miliar dan hak/kewajiban pengukuhan PKP.', 'Mampu mengidentifikasi status kewajiban PKP suatu entitas.'],
        ['2', 'Objek BKP dan JKP', 'Pengecualian objek dan fasilitas PPN Dibebaskan vs Tidak Dipungut.', 'Mampu membedakan barang kebutuhan pokok bebas PPN vs BKP umum.'],
        ['3', 'Kalkulasi PPN & PPnBM', 'Perhitungan Pajak Keluaran, Pajak Masukan, dan PPnBM satu kali pungut.', 'Mampu menghitung tagihan faktur penjualan komprehensif.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 Perpajakan II.'
    },
    CASE_VAT_PKP_OBJECTS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**PPN Adalah Beban Konsumen Akhir**: Bagi PKP yang berada di tengah rantai distribusi, PPN bukanlah beban biaya karena Pajak Masukan yang dibayar dapat dikurangkan dari Pajak Keluaran.',
        '**Perbedaan Dibebaskan vs Tidak Dipungut**: Fasilitas Dibebaskan melarang pengkreditan Pajak Masukan (PM hangus/menjadi beban); Fasilitas Tidak Dipungut MEMBOLEHKAN pengkreditan Pajak Masukan.',
        '**Batas Waktu Pelaporan SPT PPN**: SPT Masa PPN 1111 wajib dilaporkan paling lambat akhir bulan berikutnya setelah berakhirnya masa pajak berkenaan.'
      ]
    }
  ]
};
