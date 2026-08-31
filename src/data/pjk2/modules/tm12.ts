import type { Reading } from '../../../types';

const SVG_VAT_MECHANISM = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MEKANISME MULTI-STAGE CREDIT METHOD PPN (UU HPP)</text>
  
  <!-- Pabrikan Box -->
  <rect x="30" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Pabrikan Manufaktur</text>
  <line x1="40" y1="92" x2="200" y2="92" stroke="#334155"/>
  <text x="120" y="112" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Jual ke Distributor: Rp 100jt</text>
  <text x="120" y="130" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">PK = 11% &times; 100jt = Rp 11jt</text>
  <text x="120" y="150" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Pajak Masukan (PM): Rp 4jt</text>
  <text x="120" y="172" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Setor Kas Negara = Rp 7jt</text>
  <text x="120" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">(PK - PM = 11jt - 4jt)</text>

  <!-- Distributor Box -->
  <rect x="250" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Distributor Grosir</text>
  <line x1="260" y1="92" x2="420" y2="92" stroke="#334155"/>
  <text x="340" y="112" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Jual ke Pengecer: Rp 150jt</text>
  <text x="340" y="130" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">PK = 11% &times; 150jt = Rp 16,5jt</text>
  <text x="340" y="150" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Kredit PM: (Rp 11jt)</text>
  <text x="340" y="172" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Setor Kas Negara = Rp 5,5jt</text>
  <text x="340" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">(16,5jt - 11jt = Nilai Tambah)</text>

  <!-- Pengecer Box -->
  <rect x="470" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="560" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Konsumen Akhir</text>
  <line x1="480" y1="92" x2="640" y2="92" stroke="#334155"/>
  <text x="560" y="112" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Harga Toko: Rp 200jt</text>
  <text x="560" y="130" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="middle">PPN Dibayar = Rp 22jt</text>
  <text x="560" y="150" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Total Kas Negara:</text>
  <text x="560" y="172" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">7jt + 5,5jt + 5,5jt = Rp 22jt</text>
  <text x="560" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Beban Pajak Tidak Bertingkat)</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Dasar Hukum PPN & PPnBM, Karakteristik, Pengusaha Kena Pajak (PKP), & Objek BKP/JKP',
  ref: 'UU PPN No. 8/1983 jo. UU HPP (UU 7/2021) | PMK No. 197/PMK.03/2013 Batasan PKP',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 12: Menguasai dasar hukum dan karakteristik Pajak Pertambahan Nilai (PPN) dan Pajak Penjualan atas Barang Mewah (PPnBM), sifat pajak tidak langsung, multi-stage non-kumulatif, metode pengkreditan faktur (*Indirect Subtraction / Credit Method*), kriteria Pengusaha Kena Pajak (PKP - ambang batas omzet Rp 4,8 Miliar), objek Barang Kena Pajak (BKP) dan Jasa Kena Pajak (JKP), fasilitas PPN (Dibebaskan vs Tidak Dipungut), serta dinamika penyesuaian tarif PPN (11% mulai April 2022 dan 12% menurut UU HPP).',
  objectives: [
    'Menjelaskan latar belakang penggantian PPn 1951 menjadi PPN 1984 (menghindari *Cascading Effect* / efek pajak berganda bergulir).',
    'Menganalisis 4 karakteristik utama PPN: Pajak Tidak Langsung, Pajak Objektif, *Multi-Stage Non-Cumulative*, dan menganut Prinsip Tempat Tujuan (*Destination Principle*).',
    'Menjelaskan syarat dan kewajiban pengukuhan Pengusaha Kena Pajak (PKP) menurut PMK 197/2013.',
    'Mengidentifikasi objek penyerahan BKP dan JKP menurut Pasal 4, Pasal 16C (KMS - Kegiatan Membangun Sendiri), dan Pasal 16D UU PPN.',
    'Membedakan Fasilitas PPN Tidak Dipungut (Pajak Masukan tetap dapat dikreditkan) vs Fasilitas PPN Dibebaskan (Pajak Masukan tidak dapat dikreditkan).',
    'Menjelaskan karakteristik PPnBM sebagai pungutan satu kali (*Single-Stage*) di tingkat pabrikan/impor untuk mengendalikan pola konsumsi barang mewah.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Mekanisme Pengkreditan Pajak Masukan dan Keluaran PPN (Multi-Stage Credit)',
      svg: SVG_VAT_MECHANISM,
      caption: 'Gambar 12.1: Alur pemungutan PPN pada setiap rantai distribusi tanpa menimbulkan efek pajak berganda bagi konsumen akhir.'
    },

    { kind: 'h2', text: '1. Karakteristik Pokok PPN & PPnBM' },
    {
      kind: 'table',
      headers: ['Dimensi Karakteristik', 'Pajak Pertambahan Nilai (PPN)', 'Pajak Penjualan atas Barang Mewah (PPnBM)'],
      rows: [
        ['Tahapan Pemungutan', '**Multi-Stage Tax** (Dipungut pada setiap mata rantai penyerahan: Pabrikan $\\rightarrow$ Distributor $\\rightarrow$ Pengecer).', '**Single-Stage Tax** (Hanya dipungut **SATU KALI SAJA** pada saat impor atau penyerahan pertama oleh pabrikan penghasil).'],
        ['Mekanisme Pengkreditan', '**Dapat Dikreditkan** melalui mekanisme Pajak Keluaran (PK) dikurangi Pajak Masukan (PM).', '**TIDAK DAPAT DIKREDITKAN** dengan PPN maupun PPnBM lainnya (merupakan unsur biaya/harga pokok).'],
        ['Prinsip Perdagangan Internasional', '**Destination Principle** (Ekspor dikenai tarif 0%; Impor dikenai tarif normal PPN).', '**Destination Principle** (Ekspor BKP Mewah dibebaskan / tarif 0%).'],
        ['Tarif Pajak', '**11%** (Mulai 1 April 2022) dan **12%** (Mulai 1 Januari 2025/UU HPP); Ekspor = **0%**.', '**10% s.d 200%** (Tergantung tingkat kemewahan barang).']
      ],
      caption: 'Tabel 12.1: Perbandingan esensial antara PPN dan PPnBM.'
    },

    { kind: 'h2', text: '2. Fasilitas Perpajakan PPN: Tidak Dipungut vs Dibebaskan' },
    {
      kind: 'table',
      headers: ['Jenis Fasilitas PPN', 'Perlakuan atas Penyerahan Output', 'Perlakuan Pajak Masukan (PM) atas Input Terkait'],
      rows: [
        ['**PPN Tidak Dipungut** (Kawasan Berikat, Kawasan Ekonomi Khusus / KEK, Batam)', 'Tidak ada PPN yang dipungut dari pembeli faktur.', '**PAJAK MASUKAN TETAP DAPAT DIKREDITKAN** oleh PKP penjual.'],
        ['**PPN Dibebaskan** (Buku pelajaran, vaksin, barang kebutuhan pokok, air bersih, listrik rumah)', 'Pembeli dibebaskan dari pembayaran PPN.', '**PAJAK MASUKAN TIDAK DAPAT DIKREDITKAN** (harus dibebankan sebagai biaya / HPP).']
      ],
      caption: 'Tabel 12.2: Pembedaan krusial dampak pengkreditan PM antara fasilitas Tidak Dipungut vs Dibebaskan.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 12' },
    {
      kind: 'ul',
      items: [
        '**PKP Wajib**: Pengusaha dengan omzet penyerahan BKP/JKP > Rp 4,8 Miliar wajib dikukuhkan sebagai PKP dan memungut PPN.',
        '**Pasal 16C (KMS)**: Kegiatan Membangun Sendiri bangunan permanen luas $\\ge 200\\text{ m}^2$ terutang PPN dengan tarif efektif $20\\% \\times 11\\% = 2,2\\%$.',
        '**Pasal 16D**: Penyerahan aset tetap bekas (kendaraan/mesin) yang tujuan semula tidak untuk diperjualbelikan terutang PPN sepanjang PM-nya dulu memenuhi syarat pengkreditan.'
      ]
    }
  ]
};