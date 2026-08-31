import type { Reading } from '../../../types';

const SVG_FAKTUR_PAJAK = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MEKANISME E-FAKTUR PAJAK &amp; KODE TRANSAKSI (PER-03/PJ/2022)</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">Kode 01 &amp; 04</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Penyerahan Umum</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 01: Penyerahan BKP</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  kepada selain WAPU</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 04: Penyerahan DPP</text>
  <text x="97" y="174" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Nilai Lain</text>
  <text x="97" y="192" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Standar Komersial)</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">Kode 02 &amp; 03</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Pemungut (WAPU)</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 02: Instansi Pemerintah</text>
  <text x="257" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  (Bendahara APBN/D)</text>
  <text x="257" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 03: Pemungut BUMN /</text>
  <text x="257" y="174" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Kontraktor Migas</text>
  <text x="257" y="192" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(WAPU Menyetor Kas)</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">Kode 07 &amp; 08</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Fasilitas Khusus</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 07: Penyerahan BKP</text>
  <text x="417" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  TIDAK DIPUNGUT</text>
  <text x="417" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 08: Penyerahan BKP</text>
  <text x="417" y="174" fill="#94a3b8" font-size="8.5" text-anchor="middle">  DIBEBASKAN</text>
  <text x="417" y="192" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Insentif Pemerintah)</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">Kode 09 &amp; Lainnya</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Aktiva 16D &amp; Retur</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 09: Penyerahan Aktiva</text>
  <text x="580" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Pasal 16D</text>
  <text x="580" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Nota Retur &amp; Nota</text>
  <text x="580" y="174" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Pembatalan</text>
  <text x="580" y="192" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Penyesuaian Mutasi)</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Mekanisme Faktur Pajak Elektronik (e-Faktur), DPP Nilai Lain, & Pengkreditan Pajak Masukan',
  ref: 'PER-03/PJ/2022 jo. PER-11/PJ/2022 Faktur Pajak | PMK 71/2022 Besaran Tertentu',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 13: Menguasai pembuatan Faktur Pajak Elektronik (e-Faktur), saat dan tempat terutang PPN, kode jenis transaksi Faktur Pajak (01 s.d 09), konsep Dasar Pengenaan Pajak (DPP: Harga Jual, Penggantian, Nilai Impor, Nilai Ekspor, dan Nilai Lain), PPN Besaran Tertentu (Deemed PPN), serta 10 kriteria Pajak Masukan yang tidak dapat dikreditkan (Pasal 9 ayat 8 UU PPN).',
  objectives: [
    'Menentukan Saat Terutang PPN (saat penyerahan BKP/JKP atau saat pembayaran diterima jika pembayaran mendahului penyerahan).',
    'Menjelaskan fungsi dan syarat formal/material Faktur Pajak menurut PER-03/PJ/2022.',
    'Menerapkan 9 Kode Jenis Transaksi pada Nomor Seri Faktur Pajak (NSFP).',
    'Menghitung PPN dengan DPP Nilai Lain (Pemakaian sendiri, pemberian cuma-cuma = HPP / Harga Pokok; Jasa pengiriman paket / travel = DPP Nilai Lain).',
    'Menerapkan PPN Besaran Tertentu (PMK 71/2022: Jasa pengiriman paket tarif efektif 1,1%, jasa travel haji/umrah, jasa notaris).',
    'Menganalisis 10 pos Pajak Masukan (PM) yang dilarang dikreditkan menurut Pasal 9 ayat (8) UU PPN.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Struktur Kode Jenis Transaksi pada e-Faktur Pajak',
      svg: SVG_FAKTUR_PAJAK,
      caption: 'Gambar 13.1: Klasifikasi kode transaksi faktur pajak elektronik sesuai PER-03/PJ/2022.'
    },

    { kind: 'h2', text: '1. Sepuluh Pajak Masukan (PM) yang TIDAK DAPAT DIKREDITKAN' },
    {
      kind: 'table',
      headers: ['Pasal 9 ayat (8) UU PPN', 'Kondisi / Pos Pengeluaran yang Pajak Masukannya Dilarang Dikreditkan'],
      rows: [
        ['Huruf a', 'Perolehan BKP/JKP **sebelum pengusaha dikukuhkan sebagai PKP** (kecuali menggunakan pedoman pengkreditan 80% UU HPP).'],
        ['Huruf b', 'Perolehan BKP/JKP yang **tidak mempunyai hubungan langsung dengan kegiatan usaha 3M** (misal belanja pribadi direksi).'],
        ['Huruf c', 'Perolehan dan pemeliharaan kendaraan bermotor berupa sedan dan station wagon (kecuali barang dagangan atau disewakan).'],
        ['Huruf d', 'Pemanfaatan BKP Tak Berwujud / JKP dari luar daerah pabean sebelum pengusaha dikukuhkan sebagai PKP.'],
        ['Huruf e', 'Perolehan BKP/JKP yang Faktur Pajaknya **tidak memenuhi ketentuan formal/material** (cacat atau tidak lengkap).'],
        ['Huruf f', 'Perolehan BKP/JKP yang Pajak Masukannya ditagih dengan penerbitan ketetapan pajak (SKP).'],
        ['Huruf g', 'Perolehan BKP/JKP yang Pajak Masukannya tidak dilaporkan dalam SPT Masa PPN dan ditemukan saat pemeriksaan.']
      ],
      caption: 'Tabel 13.1: Larangan pengkreditan Pajak Masukan menurut undang-undang.'
    },

    { kind: 'h2', text: '2. PPN Besaran Tertentu (PMK No. 71/PMK.03/2022)' },
    {
      kind: 'table',
      headers: ['Jenis Jasa Kena Pajak Tertentu', 'Tarif Efektif PPN (Besaran Tertentu)', 'Keterangan Pengkreditan PM'],
      rows: [
        ['Jasa Pengiriman Paket / Ekspedisi (Kurir)', '**1,1%** (10% × Tarif PPN 11%)', 'Pajak Masukan atas perolehan operasional **TIDAK DAPAT DIKREDITKAN**.'],
        ['Jasa Biro Perjalanan Wisata / Agen Tur', '**1,1%** (10% × Tarif PPN 11%)', 'Pajak Masukan atas perolehan operasional **TIDAK DAPAT DIKREDITKAN**.'],
        ['Jasa Pengurusan Transportasi (Freight Forwarding)', '**1,1%** (10% × Tarif PPN 11%)', 'Pajak Masukan atas perolehan operasional **TIDAK DAPAT DIKREDITKAN**.'],
        ['Penyerahan Kendaraan Bermotor Bekas oleh Pedagang', '**1,1%** (10% × Tarif PPN 11%)', 'Pajak Masukan atas perolehan mobil bekas **TIDAK DAPAT DIKREDITKAN**.']
      ],
      caption: 'Tabel 13.2: Skema PPN Besaran Tertentu untuk sektor-sektor khusus.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 13' },
    {
      kind: 'ul',
      items: [
        '**Faktur Pajak Gabungan**: Dapat dibuat untuk seluruh penyerahan BKP/JKP kepada pembeli yang sama selama 1 bulan kalender paling lambat akhir bulan penyerahan.',
        '**Masa Pengkreditan PM**: Faktur Pajak Masukan dapat dikreditkan pada Masa Pajak yang sama atau **paling lambat 3 masa pajak berikutnya** sepanjang belum dibiayakan.',
        '**Batas Waktu Upload e-Faktur**: Faktur pajak elektronik wajib di-upload dan memperoleh approval DJP paling lambat **tanggal 15 bulan berikutnya**.'
      ]
    }
  ]
};