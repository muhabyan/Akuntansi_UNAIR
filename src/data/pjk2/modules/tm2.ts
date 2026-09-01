import type { Reading } from '../../../types';
import { CASE_INVENTORY_VALUATION_FISCAL } from '../pjk2PracticeCases';

const SVG_INVENTORY_FISCAL = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">METODE PENILAIAN PERSEDIAAN &amp; PENGALIHAN HARTA SECARA FISKAL</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="177" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">METODE DIIZINKAN FISKAL</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Pasal 10 ayat 6 UU PPh):</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 1. Metode Rata-Rata (Average Method)</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 2. Metode Masuk Pertama Keluar Pertama (FIFO)</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Asas konsistensi (taat asas) pembukuan</text>
  <text x="177" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Standar Resmi Fiskal</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="497" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">METODE DILARANG FISKAL</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Dilarang Keras dalam Perpajakan):</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Metode LIFO (Last-In, First-Out)</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Alasan: Menggelembungkan HPP saat inflasi</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengakibatkan penghasilan kena pajak tertekan</text>
  <text x="497" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Wajib Koreksi HPP ke FIFO/Average</text>
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
