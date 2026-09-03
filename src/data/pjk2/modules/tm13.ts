import type { Reading } from '../../../types';
import { CASE_EFAKTUR_INPUT_CREDIT } from '../pjk2PracticeCases';

const SVG_INPUT_TAX_RULES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk13)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ATURAN PENGKREDITAN PAJAK MASUKAN: PASAL 9 AYAT (8) UU PPN / HPP</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PAJAK MASUKAN</text>

  <!-- Left: Dapat Dikreditkan -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="197" y="24" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">SYARAT PAJAK MASUKAN DAPAT DIKREDITKAN</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Keterkaitan Usaha 3M:</tspan> Terkait langsung dengan kegiatan penyerahan BKP/JKP</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Faktur Pajak Lengkap:</tspan> Memenuhi syarat formal &amp; material (Kode 010 e-Faktur)</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Masa Pengkreditan:</tspan> Dapat dikreditkan pada masa pajak yang sama atau paling lambat 3 bulan setelah masa pajak berakhir</text>
    <text class="svg-text" x="14" y="122" fill="#cbd5e1" font-size="8">• Pembelian mesin pabrik, bahan baku, sewa gudang pabrikasi, &amp; jasa logistik</text>
    
    <rect class="svg-badge-green" x="14" y="175" width="367" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Memenuhi Syarat Formal &amp; Material Menurut UU PPN</text>
  </g>

  <!-- Right: TIDAK DAPAT DIKREDITKAN (Pasal 9 ayat 8) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <text class="text-accent-red" x="197" y="24" fill="#f87171" font-size="10.5" font-weight="800" text-anchor="middle">PAJAK MASUKAN TIDAK DAPAT DIKREDITKAN (PASAL 9 AYAT 8)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Perolehan BKP/JKP <tspan class="text-accent-red" fill="#f87171" font-weight="700">sebelum pengusaha dikukuhkan sebagai PKP</tspan></text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• Perolehan yang <tspan class="text-accent-red" fill="#f87171" font-weight="700">TIDAK mempunyai hubungan langsung</tspan> dengan kegiatan usaha</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• Perolehan dan pemeliharaan kendaraan sedan dan station wagon</text>
    <text class="svg-muted" x="14" y="106" fill="#94a3b8" font-size="7.5">  (Kecuali barang dagangan atau disewakan)</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Faktur Pajak Cacat: Tidak mencantumkan nama, alamat, NPWP pembeli</text>
    <text class="svg-text" x="14" y="142" fill="#cbd5e1" font-size="8">• Perolehan BKP/JKP yang Pajak Masukannya ditagih dengan SKP</text>
    
    <rect class="svg-badge-red" x="14" y="175" width="367" height="30" rx="6" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="197" y="194" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Pajak Masukan Gugur / Tidak Boleh Dikurangkan</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Pajak Masukan yang tidak dapat dikreditkan dapat dibiayakan (Deductible) pada PPh Badan sepanjang memenuhi Pasal 6 UU PPh.</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Mekanisme Faktur Pajak Elektronik (e-Faktur), DPP Nilai Lain, & Pengkreditan Pajak Masukan',
  ref: 'PER-03/PJ/2022 jo PER-11/PJ/2022 e-Faktur | Pasal 9 ayat (8) UU PPN | PMK DPP Nilai Lain',
  intro: 'TM 13 membahas tata kelola administrasi dan pengkreditan PPN: mekanisme penerbitan Faktur Pajak Elektronik (e-Faktur) menggunakan Nomor Seri Faktur Pajak (NSFP) resmi dari DJP, ketentuan Faktur Pajak Pengganti dan Pembatalan, jenis-jenis Dasar Pengenaan Pajak (DPP Nilai Lain: Pemakaian Sendiri, Pemberian Cuma-cuma, Jasa Ekspedisi/Kargo), serta rincian larangan pengkreditan Pajak Masukan menurut Pasal 9 ayat (8) UU PPN.',
  objectives: [
    'Menerapkan ketentuan formal dan material pembuatan e-Faktur menurut PER-03/PJ/2022.',
    'Menghitung PPN dengan Dasar Pengenaan Pajak (DPP) Nilai Lain (Pemberian Cuma-cuma & Jasa Pengiriman).',
    'Menganalisis daftar larangan pengkreditan Pajak Masukan menurut Pasal 9 ayat (8) UU PPN pasca UU HPP.',
    'Menjelaskan ketentuan batas waktu pengkreditan Pajak Masukan maksimal 3 bulan setelah masa faktur terbit.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 13.1: Ketentuan Pengkreditan Pajak Masukan menurut Pasal 9 ayat (8) UU PPN.',
      svg: SVG_INPUT_TAX_RULES
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 9 ayat (8) UU PPN s.t.d.t.d UU HPP (Pajak Masukan Non-Kredit)',
      text: '"Pengkreditan Pajak Masukan tidak dapat diberlakukan bagi pengeluaran untuk:\na. [dihapus UU HPP];\nb. perolehan BKP atau JKP yang tidak mempunyai hubungan langsung dengan kegiatan usaha;\nc. perolehan dan pemeliharaan kendaraan bermotor berupa sedan dan station wagon, kecuali merupakan barang dagangan atau digunakan secara langsung sesuai bidang usahanya;\nd. [dihapus]; e. [dihapus];\nf. perolehan BKP/JKP yang Faktur Pajaknya tidak memenuhi ketentuan formal/material (cacat) atau tidak mencantumkan nama, alamat, dan NPWP pembeli;\ng. pemanfaatan BKP Tidak Berwujud/JKP dari luar Daerah Pabean yang faktur pajaknya tidak memenuhi ketentuan;\nh. [dihapus];\ni. perolehan BKP/JKP yang Pajak Masukannya ditagih dengan penerbitan ketetapan pajak (SKP);\nj. perolehan BKP/JKP yang Pajak Masukannya tidak dilaporkan dalam SPT Masa PPN dan ditemukan saat pemeriksaan;\nk. perolehan BKP selain barang modal atau JKP sebelum Pengusaha Kena Pajak berproduksi."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 13'
    },
    {
      kind: 'table',
      headers: ['Jenis Transaksi PPN', 'Dasar Pengenaan Pajak (DPP)', 'Formula PPN Terutang', 'Status Pengkreditan Pajak Masukan'],
      rows: [
        ['Penyerahan Normal', 'Harga Jual / Penggantian Kas.', '$PPN = 11\\% \\times \\text{Harga Jual}$.', 'Dapat dikreditkan oleh pembeli PKP.'],
        ['Pemberian Cuma-cuma BKP', 'Harga Jual dikurangi laba kotor (HPP Barang).', '$PPN = 11\\% \\times HPP$.', 'Pajak Masukan pembelian barang awal tetap dapat dikreditkan.'],
        ['Pemakaian Sendiri (Produktif)', 'Harga Jual dikurangi laba kotor (HPP).', '$PPN = 11\\% \\times HPP$.', 'Tidak terutang PPN jika dipakai untuk kegiatan 3M produktif.'],
        ['Jasa Pengiriman Paket / Kargo', '10% dari jumlah yang ditagihkan (Nilai Lain).', '$PPN = 11\\% \\times (10\\% \\times \\text{Tagihan}) = 1,1\\%$.', 'Pajak Masukan perusahaan kurir tidak dapat dikreditkan.'],
        ['Jasa Biro Perjalanan Wisata', '10% dari jumlah tagihan paket wisata.', '$PPN = 1,1\\% \\times \\text{Total Tagihan Paket Tour}$.', 'Pajak Masukan paket wisata tidak dapat dikreditkan.']
      ],
      caption: 'Tabel 13.0: Matriks penentuan DPP Nilai Lain dan formula PPN efektif.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Pengkreditan Pajak Masukan Terlambat'
    },
    {
      kind: 'formula',
      text: `\\text{Batas Waktu Pengkreditan Pajak Masukan (Pasal 9 ayat 9 UU PPN)}:
\\text{Pajak Masukan dapat dikreditkan pada Masa Pajak yang TIDAK SAMA, paling lambat } \\mathbf{3 \\text{ bulan}}
\\text{setelah berakhirnya Masa Pajak saat Faktur Pajak dibuat, sepanjang belum dibiayakan.}
\\text{Contoh}: \\text{Faktur Pajak Masa Maret dapat dikreditkan di Masa Maret, April, Mei, atau Juni.}`
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: PPN atas Pemberian Cuma-cuma Sampel Produk Baru',
      prompt: 'PT Kosmetik Cantik (PKP) membagikan 1.000 paket kosmetik baru sebagai sampel cuma-cuma kepada pengunjung pameran. Harga jual normal per paket adalah Rp 100.000 (margin laba 25%, sehingga HPP per paket adalah Rp 75.000). Hitung Dasar Pengenaan Pajak (DPP) Nilai Lain dan PPN yang wajib disetor PT Kosmetik Cantik!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Dasar Pengenaan Pajak (DPP) Nilai Lain**: Sesuai PMK No. 75/PMK.03/2010, DPP pemberian cuma-cuma adalah **Harga Pokok Penjualan (HPP)**.\nDPP = 1.000 paket × Rp 75.000 = **Rp 75.000.000**.',
            '**Perhitungan PPN Terutang (11%)**: PPN Keluaran = 11% × Rp 75.000.000 = **Rp 8.250.000**.',
            '**Penerbitan e-Faktur**: PT Kosmetik Cantik menerbitkan Faktur Pajak Elektronik dengan kode transaksi **04 (DPP Nilai Lain)** dengan identitas pembeli digunggung atau nama masyarakat penerima sampel.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 13'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Administrasi e-Faktur', 'Ketentuan kode transaksi 01 s/d 09 dan prosedur faktur pengganti/batal.', 'Mampu mengidentifikasi kode faktur pajak transaksi khusus.'],
        ['2', 'DPP Nilai Lain', 'Kalkulasi HPP cuma-cuma dan tarif efektif 1,1% jasa kargo/ekspedisi.', 'Mampu menghitung PPN dengan dasar pengenaan nilai lain.'],
        ['3', 'Larangan Pengkreditan Pasal 9 ayat (8)', 'Pengecualian pengkreditan faktur cacat, sebelum PKP, dan penyerahan bebas.', 'Mampu memutuskan kelayakan pengkreditan Pajak Masukan di SPT 1111.']
      ],
      caption: 'Tabel 13.2: Peta penguasaan submateri TM 13 Perpajakan II.'
    },
    CASE_EFAKTUR_INPUT_CREDIT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Mobil Sedan Direksi Kini Boleh Dikreditkan**: Di bawah UU HPP, larangan pengkreditan Pajak Masukan untuk perolehan mobil sedan/station wagon telah dicabut sepanjang kendaraan tersebut digunakan untuk kegiatan operasional perusahaan.',
        '**Faktur Pajak Masa Lalu**: Pajak Masukan tetap sah dikreditkan hingga 3 bulan setelah masa faktur terbit asalkan belum pernah diperiksa oleh kantor pajak dan belum dibiayakan di laporan laba rugi.',
        '**Pemberian Cuma-cuma Tetap Terutang PPN**: Membagikan produk secara gratis tetap dianggap sebagai penyerahan kena pajak yang wajib diterbitkan Faktur Pajak PPN (beban PPN ditanggung sendiri oleh produsen).'
      ]
    }
  ]
};
