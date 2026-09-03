import type { Reading } from '../../../types';
import { CASE_INVENTORY_VALUATION_FISCAL } from '../pjk2PracticeCases';

const SVG_INVENTORY_FISCAL = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="fifoGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="avgGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="lifoGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">METODE PENILAIAN PERSEDIAAN FISKAL (PASAL 10 AYAT 6 UU PPH)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">INVENTORY RULES</text>

  <!-- 3 Method Comparison Cards -->
  <!-- 1. FIFO (Allowed) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#fifoGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. FIFO (FIRST IN FIRST OUT)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle">STATUS: DIIZINKAN FISKAL (LEGAL)</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• Barang masuk pertama dianggap keluar pertama</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="7.5">• Persediaan akhir dinilai pada harga beli terkini</text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7.5">• Saat inflasi harga: HPP lebih rendah &amp; laba fiskal</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">  lebih tinggi (Pajak terutang optimal bagi negara)</text>
    <text class="svg-text" x="14" y="144" fill="#cbd5e1" font-size="7.5">• Mencerminkan arus fisik riil mayoritas industri</text>
    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Penilaian Harga Pembelian Terkini</text>
  </g>

  <!-- 2. AVERAGE (Allowed) -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#avgGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. AVERAGE (RATA-RATA)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle">STATUS: DIIZINKAN FISKAL (LEGAL)</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• Rata-rata tertimbang (Weighted Average)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="7.5">  atau rata-rata bergerak (Moving Average)</text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7.5">• Menghaluskan fluktuasi lonjakan harga bahan</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Menghasilkan nilai HPP yang moderat dan stabil</text>
    <text class="svg-text" x="14" y="144" fill="#cbd5e1" font-size="7.5">• Wajib diterapkan secara taat asas (Konsisten)</text>
    <rect class="svg-badge-green" x="14" y="185" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Menstabilkan Fluktuasi Harga Pasar</text>
  </g>

  <!-- 3. LIFO (Prohibited) -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#lifoGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="132" y="20" fill="#f87171" font-size="10" font-weight="800" text-anchor="middle">3. LIFO (LAST IN FIRST OUT)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-red" x="132" y="56" fill="#f87171" font-size="8.5" font-weight="800" text-anchor="middle">STATUS: DILARANG KERAS (HARAM)</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">DILARANG</tspan> oleh Pasal 10 ayat (6) UU PPh</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="7.5">• Dilarang pula dalam SAK / IFRS (PSAK 14)</text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7.5">• LIFO menggelembungkan HPP saat inflasi</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">  sehingga memperkecil laba kena pajak secara semu</text>
    <text class="svg-text" x="14" y="144" fill="#cbd5e1" font-size="7.5">• Wajib rekonsiliasi fiskal jika komersial pakai LIFO</text>
    <rect class="svg-badge-red" x="14" y="185" width="237" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="132" y="201" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Ditolak Ditjen Pajak &amp; Standar IFRS</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Pasal 10 (6) UU PPh tegas membatasi metode persediaan HANYA pada FIFO atau Rata-rata demi kepastian penerimaan negara.</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Penilaian Harta Pengalihan/Restrukturisasi, Metode Persediaan Fiskal, & Tarif PPh Badan',
  ref: 'UU PPh Pasal 10 & Pasal 17 | PMK Penilaian Harta & Nilai Sisa Buku | Tarif PPh Badan 22%',
  intro: 'TM 2 membahas penilaian harta dalam konteks transaksi khusus perpajakan: pengalihan harta dalam rangka likuidasi, merger, pemekaran, pemecahan, atau pengambilalihan usaha (Nilai Pasar vs Nilai Sisa Buku fiskal), ketentuan kaku penilaian persediaan menurut Pasal 10 ayat (6) UU PPh (Hanya FIFO dan Average), larangan metode LIFO, serta struktur tarif umum PPh Badan (22%) pasca UU HPP.',
  objectives: [
    'Menerapkan penilaian harta pengalihan: harga pasar vs nilai sisa buku (Pooling of Interest) pada merger usaha.',
    'Menghitung HPP dan saldo persediaan akhir menggunakan metode FIFO dan Rata-Rata Fiskal.',
    'Menjelaskan dampak koreksi fiskal jika perusahaan menggunakan metode LIFO komersial.',
    'Menghitung PPh Badan terutang menggunakan tarif normal 22%.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Ketentuan Penilaian Persediaan Barang Dagangan menurut Ketentuan Fiskal.',
      svg: SVG_INVENTORY_FISCAL
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 10 ayat (6) UU PPh (Penilaian Persediaan)',
      text: '"Persediaan dan pemakaian persediaan untuk menghitung harga pokok dinilai berdasarkan harga perolehan yang dilakukan secara rata-rata (Average Method) atau dengan cara mendahulukan persediaan yang diperoleh pertama (FIFO / First In First Out). Penjelasan Pasal 10 ayat (6): Penggunaan metode Last In First Out (LIFO) tidak diperkenankan karena dalam kondisi harga yang cenderung naik, metode LIFO menghasilkan nilai persediaan akhir yang rendah dan HPP yang tinggi sehingga memperkecil laba kena pajak secara artifisial."'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 17 ayat (1) huruf b UU PPh s.t.d.t.d UU HPP (Tarif PPh Badan)',
      text: '"Tarif pajak yang diterapkan atas Penghasilan Kena Pajak bagi Wajib Pajak badan dalam negeri dan bentuk usaha tetap adalah sebesar 22% (dua puluh dua persen) yang mulai berlaku pada tahun pajak 2022. Wajib Pajak badan dalam negeri yang berbentuk Perseroan Terbuka (Go Public) dengan jumlah keseluruhan saham yang disetor diperdagangkan pada bursa efek di Indonesia paling rendah 40% dan memenuhi persyaratan tertentu memperoleh tarif 3% lebih rendah (menjadi 19%)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 2'
    },
    {
      kind: 'table',
      headers: ['Jenis Transaksi Pengalihan Harta', 'Dasar Penilaian Komersial', 'Dasar Penilaian Fiskal UU PPh', 'Perlakuan Keuntungan/Kerugian'],
      rows: [
        ['Jual Beli Reguler Tanpa Hub. Istimewa', 'Harga transaksi yang disepakati pembeli-penjual.', 'Jumlah yang sesungguhnya dikeluarkan / diterima (Pasal 10 ayat 1).', 'Gain/Loss = Harga Jual Riil - Nilai Sisa Buku Fiskal.'],
        ['Pengalihan dengan Hubungan Istimewa', 'Harga faktur transfer internal.', 'Jumlah yang seharusnya dikeluarkan / diterima pasar wajar (Pasal 10 ayat 1).', 'Wajib disesuaikan dengan Prinsip Kewajaran (Arms Length Price).'],
        ['Tukar Menukar Harta (Barter)', 'Nilai wajar aset yang diserahkan/diterima.', 'Jumlah yang seharusnya dikeluarkan berdasarkan nilai pasar (Pasal 10 ayat 2).', 'Diakui keuntungan/kerugian selisih nilai pasar vs nilai buku.'],
        ['Restrukturisasi Usaha (Merger Buka Izin)', 'Nilai pasar wajar aset penggabungan.', 'Dapat menggunakan Nilai Sisa Buku (Pooling of Interest) dengan izin Menkeu.', 'Tidak ada keuntungan fiskal yang terutang PPh saat merger (Tax-Neutral).']
      ],
      caption: 'Tabel 2.0: Matriks penilaian harta pengalihan dan persediaan fiskal.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: HPP Fiskal & Tarif PPh Badan'
    },
    {
      kind: 'formula',
      text: `\\text{Harga Pokok Penjualan (HPP)} = \\text{Persediaan Awal} + \\text{Pembelian Bersih} - \\text{Persediaan Akhir}
\\text{Metode Persediaan Sah Fiskal}: \\quad \\text{FIFO (First-In, First-Out)} \\quad \\text{atau} \\quad \\text{Rata-Rata Bergerak / Tertimbang (Average)}
\\text{Tarif PPh Wajib Pajak Badan Dalam Negeri (UU HPP)} = 22\\% \\times \\text{Penghasilan Kena Pajak (PKP)}`,
      note: 'Penggunaan metode persediaan wajib taat asas (konsisten). Perubahan metode dari Average ke FIFO atau sebaliknya wajib memperoleh persetujuan tertulis dari Direktur Jenderal Pajak.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penilaian Pengalihan Harta Hibah Antar-Perusahaan',
      prompt: 'PT Induk menghibahkan sebidang tanah dengan nilai sisa buku Rp 1 Miliar dan nilai pasar Rp 3 Miliar kepada anak usahanya. Apakah pengalihan ini merupakan objek pajak dan bagaimana dasar penilaiannya bagi anak usaha?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Ketentuan Pasal 4 ayat (3) huruf a UU PPh**: Hibah HANYA dikecualikan dari objek pajak jika diberikan kepada keluarga sedarah satu derajat atau badan keagamaan/sosial sepanjang **TIDAK ADA HUBUNGAN USAHA, PEKERJAAN, KEPEMILIKAN, ATAU PENGUASAAN**.',
            '**Analisis Hubungan Istimewa**: Karena PT Induk memiliki anak usaha, terdapat hubungan kepemilikan/penguasaan. Maka, hibah tanah tersebut **MERUPAKAN OBJEK PPh BAGI PENERIMA**.',
            '**Dasar Penilaian**: Dinilai berdasarkan **Nilai Pasar Wajar (Rp 3 Miliar)**. PT Induk mengakui keuntungan pengalihan harta sebesar Rp 2 Miliar (Rp 3 M - Rp 1 M), dan anak usaha mencatat tanah sebesar Rp 3 Miliar.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Penilaian Pengalihan Harta', 'Penilaian jual beli, barter, likuidasi, dan merger buku vs pasar.', 'Mampu menghitung keuntungan pengalihan harta fiskal.'],
        ['2', 'Metode Persediaan FIFO & Average', 'Kalkulasi HPP fiskal dan koreksi atas penggunaan metode LIFO.', 'Mampu membuat rekonsiliasi HPP komersial ke fiskal.'],
        ['3', 'Tarif PPh Badan 22%', 'Perhitungan PPh terutang badan usaha normal tanpa fasilitas.', 'Mampu menghitung kewajiban PPh Badan terutang.']
      ],
      caption: 'Tabel 2.2: Peta penguasaan submateri TM 2 Perpajakan II.'
    },
    CASE_INVENTORY_VALUATION_FISCAL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**LIFO Dilarang Demi Keadilan Pajak**: Di masa inflasi, LIFO membuat HPP tinggi dan laba rendah secara artifisial, sehingga dilarang oleh DJP dan PSAK/IFRS.',
        '**Syarat Nilai Buku pada Merger**: Perusahaan yang merger dapat menggunakan nilai buku (bebas PPh keuntungan pengalihan) hanya jika lolos Business Purpose Test dan disetujui DJP.',
        '**Tarif PPh Badan 22%**: Sesuai UU HPP No. 7 Tahun 2021, tarif PPh Badan ditetapkan tetap 22% (pembatalan penurunan tarif 20% yang semula direncanakan di UU 2/2020).'
      ]
    }
  ]
};
