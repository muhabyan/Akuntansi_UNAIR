import type { Reading } from '../../../types';
import { CASE_CURRENT_LIABILITIES } from '../akm2PracticeCases';

const SVG_LIABILITIES_CYCLE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR UTAMA LIABILITAS JANGKA PENDEK (PSAK 71 / IAS 1)</text>
  
  <rect x="30" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="122" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Liabilitas Dagang &amp; Operasi</text>
  <text x="122" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">• Utang Usaha (A/P)</text>
  <text x="122" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">• Wesel Bayar Jangka Pendek</text>
  <text x="122" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">• Pendapatan Diterima di Muka</text>
  <text x="122" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">• Uang Muka Pelanggan</text>

  <rect x="245" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="337" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Utang Karyawan &amp; Pajak</text>
  <text x="337" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">• Utang Gaji &amp; Upah (Wages)</text>
  <text x="337" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">• PPh 21 / PPh 23 Terutang</text>
  <text x="337" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">• PPN Keluaran Net</text>
  <text x="337" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">• Cuti Berbayar &amp; Bonus</text>

  <rect x="460" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="552" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Utang Pembiayaan Jatuh Tempo</text>
  <text x="552" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">• Bagian Lancar Utang Jk Panjang</text>
  <text x="552" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">• Utang Dividen Kas Terutang</text>
  <text x="552" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">• Refinansiasi Jangka Pendek</text>
  <text x="552" y="165" fill="#cbd5e1" font-size="10" text-anchor="middle">• Utang Bunga Berjalan</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Liabilitas Jangka Pendek (Current Liabilities)',
  ref: 'Kieso IFRS 5e Ch. 13 | PSAK 71, PSAK 1',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 6: Menguasai definisi, kriteria klasifikasi 12 bulan/siklus operasi, pencatatan Utang Usaha (Gross vs Net), Wesel Bayar Diskonto (Zero-Interest Notes), Utang Penggajian & Perpajakan, serta ketentuan reklasifikasi utang yang direfinansiasi.',
  objectives: [
    'Mengidentifikasi liabilitas yang memenuhi kriteria Liabilitas Jangka Pendek (Current Liabilities) menurut PSAK 1.',
    'Membedakan metode Gross vs Net dalam pencatatan Utang Usaha dan pemanfaatan diskon pembelian.',
    'Menghitung dan menjurnal penerbitan Wesel Bayar Tanpa Bunga (Zero-Interest-Bearing Notes) beserta amortisasi diskonto.',
    'Mencatat liabilitas terkait kompensasi karyawan: Utang Gaji, Potongan PPh 21, BPJS, Cuti Berbayar (Compensated Absences), dan Bagi Hasil/Bonus.',
    'Memahami perlakuan PPN Kurang Bayar / Lebih Bayar pada Laporan Posisi Keuangan.',
    'Menguasai syarat ketat penyajian Liabilitas Jangka Pendek yang Dibiayai Kembali (Refinanced Short-term Obligations).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Struktur Klasifikasi Liabilitas Jangka Pendek',
      svg: SVG_LIABILITIES_CYCLE,
      caption: 'Gambar 6.1: Tiga pilar utama liabilitas lancar yang jatuh tempo dalam 12 bulan atau 1 siklus operasi normal.'
    },

    { kind: 'h2', text: '1. Definisi & Kriteria Liabilitas Jangka Pendek (PSAK 1)' },
    {
      kind: 'p',
      text: 'Liabilitas adalah kewajiban kini entitas yang timbul dari peristiwa masa lalu, yang penyelesaiannya diperkirakan mengakibatkan arus keluar sumber daya yang mengandung manfaat ekonomik. Suatu liabilitas diklasifikasikan sebagai **Liabilitas Jangka Pendek (Current Liabilities)** jika memenuhi salah satu dari 4 kriteria:'
    },
    {
      kind: 'ol',
      items: [
        'Diperkirakan akan diselesaikan dalam **siklus operasi normal** entitas;',
        'Dimiliki untuk tujuan **diperdagangkan** (trading);',
        'Jatuh tempo untuk diselesaikan dalam jangka waktu **12 bulan setelah tanggal pelaporan**; ATAU',
        'Entitas tidak memiliki hak tanpa syarat untuk menangguhkan penyelesaian liabilitas selama sekurang-kurangnya 12 bulan setelah periode pelaporan.'
      ]
    },

    { kind: 'h2', text: '2. Utang Usaha & Wesel Bayar (Trade Accounts & Notes Payable)' },
    {
      kind: 'table',
      headers: ['Jenis Liabilitas', 'Karakteristik Transaksi', 'Pengukuran & Penjurnalan'],
      rows: [
        ['Utang Usaha (Accounts Payable)', 'Kewajiban lisan atau faktur tanpa jaminan formal atas pembelian barang/jasa secara kredit dagang (30-60 hari).', 'Dapat dicatat dengan **Metode Bruto (Gross Method)** atau **Metode Neto (Net Method)** untuk mencerminkan diskon tunai (2/10, n/30).'],
        ['Wesel Bayar Berbunga (Interest-Bearing Note)', 'Janji tertulis formal untuk membayar pokok utang ditambah bunga pada tanggal tertentu.', 'Bunga dihitung = Pokok × Suku Bunga × (Waktu / 12).'],
        ['Wesel Bayar Tanpa Bunga (Zero-Interest Note)', 'Wesel tidak mencantumkan suku bunga eksplisit, tetapi kas yang diterima di awal lebih kecil dari nilai nominal saat jatuh tempo.', 'Selisih kas dan nominal dicatat sebagai **Diskonto Wesel Bayar (Discount on Notes Payable)** dan diamortisasi menjadi Beban Bunga!']
      ],
      caption: 'Tabel 6.1: Perbandingan Utang Usaha dan Wesel Bayar Jangka Pendek.'
    },

    CASE_CURRENT_LIABILITIES,

    { kind: 'h2', text: '3. Liabilitas Terkait Karyawan & Perpajakan' },
    {
      kind: 'p',
      text: 'Entitas bertindak sebagai pemotong/pemungut pajak dan iuran wajib karyawan yang harus disetorkan ke kas negara atau pengelola dana:'
    },
    {
      kind: 'ul',
      items: [
        '**Gaji & Upah Bersih**: Beban Gaji (Debit) diakui penuh, sedangkan potongan PPh 21, BPJS Ketenagakerjaan & Kesehatan dikreditkan ke Utang Pajak / Iuran, dan sisanya dibayarkan kas.',
        '**Cuti Berbayar (Compensated Absences - PSAK 24)**: Diakui sebagai beban dan liabilitas jika hak cuti terakumulasi (*accumulating*) dan menjadi hak pasti (*vested*).',
        '**Bonus Karyawan**: Diakui sebagai beban operasional (bukan distribusi laba) dan diukur berdasarkan persentase laba sebelum/setelah pajak sesuai kontrak manajerial.'
      ]
    },

    { kind: 'h2', text: '4. Reklasifikasi Utang Jangka Pendek yang Direfinansiasi' },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Syarat Ketat Penyajian Utang Jangka Pendek sebagai Liabilitas Jangka Panjang',
      text: 'Utang jangka pendek yang akan jatuh tempo dalam 12 bulan HANYA boleh disajikan sebagai Liabilitas Jangka Panjang jika:\n1. Entitas memiliki **niat (intent)** untuk mendanai kembali kewajiban tersebut atas dasar jangka panjang; DAN\n2. Entitas memiliki **hak kontraktual tanpa syarat** yang sudah disepakati **SEBELUM atau PADA tanggal pelaporan neraca (31 Desember)** untuk memperpanjang jatuh tempo utang melebihi 12 bulan.\n*(Perjanjian refinansiasi yang baru ditandatangani setelah tanggal neraca tidak mengubah klasifikasi utang lancar!)*'
    },

    { kind: 'h2', text: '5. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**Kriteria Lancar**: Siklus operasi atau 12 bulan setelah tanggal neraca.',
        '**Diskonto Wesel**: Merupakan akun kontra liabilitas; amortisasinya meningkatkan nilai buku utang dan menambah Beban Bunga.',
        '**Cuti Berbayar**: Wajib diakrualkan di periode berjalan jika hak cuti bersifat vesting / accumulating.',
        '**Refinansiasi**: Kontrak perpanjangan utang wajib sudah efektif sebelum/pada tanggal tutup buku neraca.'
      ]
    }
  ]
};