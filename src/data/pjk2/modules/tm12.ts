import type { Reading } from '../../../types';
import { CASE_VAT_PKP_OBJECTS } from '../pjk2PracticeCases';

const SVG_VAT_MECHANISM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MEKANISME PENGKREDITAN PAJAK PERTAMBAHAN NILAI (PPN KELUARAN VS MASUKAN)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. PAJAK KELUARAN (PK)</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">PPN Dipungut dari Pembeli:</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif Normal: 11% (UU HPP)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penyerahan BKP / JKP domestik</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ekspor BKP / JKP: Tarif 0%</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Kewajiban Setor Kas</text>

  <text x="232" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">-</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">2. PAJAK MASUKAN (PM)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">PPN Dibayar ke Pemasok:</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pembelian bahan baku &amp; mesin</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPN Impor PIB tervalidasi</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Syarat Pasal 9 ayat 8 terpenuhi</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Pengurang Kewajiban</text>

  <text x="447" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">=</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3. SALDO PPN BULANAN</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Status SPT Masa 1111:</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PK &gt; PM → <tspan fill="#fca5a5" font-weight="700">PPN Kurang Bayar</tspan></text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PK &lt; PM → <tspan fill="#86efac" font-weight="700">PPN Lebih Bayar</tspan></text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Opsi Lebih Bayar: Kompensasi / Restitusi</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Multi-Stage Non-Kumulatif</text>
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
