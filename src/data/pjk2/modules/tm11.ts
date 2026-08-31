import type { Reading } from '../../../types';

const SVG_RECON_DIAGRAM = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KERANGKA KERJA REKONSILIASI FISKAL PPH BADAN (SPT TAHUNAN 1771)</text>
  
  <!-- Step 1 -->
  <rect x="30" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Laba Komersial</text>
  <text x="120" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Laporan Keuangan SAK</text>
  <line x1="40" y1="110" x2="200" y2="110" stroke="#334155"/>
  <text x="120" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penjualan Bruto</text>
  <text x="120" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• HPP Komersial</text>
  <text x="120" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Beban Usaha &amp; Luar Usaha</text>
  <text x="120" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Net Income Before Tax</text>

  <!-- Step 2 -->
  <rect x="250" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. Koreksi Fiskal</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Penyesuaian UU PPh</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">(+) Koreksi Positif</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9" text-anchor="middle">  (Biaya Pasal 9, Beda Waktu)</text>
  <text x="340" y="168" fill="#86efac" font-size="9.5" font-weight="700" text-anchor="middle">(-) Koreksi Negatif</text>
  <text x="340" y="186" fill="#cbd5e1" font-size="9" text-anchor="middle">  (PPh Final, Non-Objek)</text>

  <!-- Step 3 -->
  <rect x="470" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="560" y="80" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">3. Laba Fiskal &amp; PPh</text>
  <text x="560" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Dasar Pajak Terutang</text>
  <line x1="480" y1="110" x2="640" y2="110" stroke="#334155"/>
  <text x="560" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penghasilan Neto Fiskal</text>
  <text x="560" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• - Kompensasi Rugi</text>
  <text x="560" y="166" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">= PKP &times; Tarif 22%</text>
  <text x="560" y="186" fill="#fbbf24" font-size="9.5" text-anchor="middle">- Kredit Pajak 22/23/24/25</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Rekonsiliasi Fiskal & Penyusunan SPT Tahunan PPh Wajib Pajak Badan (Formulir 1771)',
  ref: 'UU PPh jo. UU HPP | Lampiran Khusus & Formulir 1771 DJP | PSAK 46 Pajak Penghasilan',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 11: Menguasai teknik penyusunan Kertas Kerja Rekonsiliasi Fiskal (*Fiskal Reconciliation / Tax Adjustment*), pembedaan Beda Tetap (*Permanent Differences*) vs Beda Waktu (*Timing / Temporary Differences*), pengisian Formulir SPT Tahunan PPh Badan 1771 (Induk, Lampiran I Laporan Keuangan, Lampiran II HPP, Lampiran III Kredit Pajak, Lampiran IV PPh Final & Bukan Objek, Lampiran V Daftar Pemegang Saham, Lampiran VI Hubungan Istimewa), serta keterkaitannya dengan PSAK 46 (Pajak Tangguhan / *Deferred Tax*).',
  objectives: [
    'Menjelaskan penyebab terjadinya perbedaan antara Laba Akuntansi Komersial (SAK) dengan Laba Fiskal (UU PPh).',
    'Membedakan Koreksi Fiskal Positif (menambah laba fiskal) vs Koreksi Fiskal Negatif (mengurangi laba fiskal).',
    'Mengklasifikasikan Beda Tetap (Permanent Difference) dan Beda Waktu (Timing Difference).',
    'Menyusun Kertas Kerja Rekonsiliasi Fiskal dari Laba Komersial menjadi Penghasilan Kena Pajak (PKP).',
    'Menghitung PPh Kurang/Lebih Bayar (PPh Pasal 29 / 28A) setelah memperhitungkan seluruh kredit pajak.',
    'Memahami struktur lampiran-lampiran SPT Tahunan PPh Badan 1771.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Alur Tiga Tahap Rekonsiliasi Fiskal Laporan Keuangan Badan',
      svg: SVG_RECON_DIAGRAM,
      caption: 'Gambar 11.1: Transformasi dari laba bersih komersial menuju Penghasilan Kena Pajak dan PPh Kurang Bayar.'
    },

    { kind: 'h2', text: '1. Taksonomi Koreksi Fiskal: Beda Tetap vs Beda Waktu' },
    {
      kind: 'table',
      headers: ['Jenis Beda', 'Penyebab Terjadinya Koreksi', 'Sifat Koreksi Fiskal', 'Contoh Pos Transaksi Riil'],
      rows: [
        ['**1. Beda Tetap (Permanent)**', 'Transaksi diakui menurut akuntansi komersial tetapi selamanya **TIDAK DIAKUI** menurut ketentuan UU PPh (atau sebaliknya).', '**Koreksi Positif (+)** atau **Koreksi Negatif (-)**', '• Biaya entertainment tanpa daftar nominatif (+)\n• Sanksi denda pajak (+)\n• Pendapatan bunga deposito (-)\n• Dividen WP Badan DN (-)'],
        ['**2. Beda Waktu (Temporary / Timing)**', 'Transaksi diakui menurut akuntansi komersial dan perpajakan, namun terjadi **PERBEDAAN PERIODE WAKTU ALOKASI PEMBEBANAN**.', '**Koreksi Positif (+)** (jika beban fiskal < komersial) atau **Koreksi Negatif (-)** (jika beban fiskal > komersial)', '• Selisih metode & masa manfaat penyusutan fiskal vs komersial\n• Pembentukan cadangan penurunan nilai piutang vs penghapusan piutang nyata']
      ],
      caption: 'Tabel 11.1: Matriks perbedaan karakteristik Beda Tetap vs Beda Waktu.'
    },

    { kind: 'h2', text: '2. Struktur Formulir SPT Tahunan PPh Badan 1771' },
    {
      kind: 'table',
      headers: ['Formulir SPT 1771', 'Nama Lampiran / Bagian', 'Konten Utama yang Dilaporkan'],
      rows: [
        ['**Induk SPT 1771**', 'Surat Pemberitahuan Tahunan', 'Ringkasan Penghasilan Neto Fiskal, Kompensasi Rugi, PKP, PPh Terutang, Kredit Pajak, dan **PPh Kurang/Lebih Bayar (Pasal 29/28A)**.'],
        ['**Lampiran I (1771-I)**', 'Penghitungan Penghasilan Neto Fiskal', 'Laporan Laba Rugi Komersial, Penyesuaian Koreksi Fiskal Positif, dan Penyesuaian Koreksi Fiskal Negatif.'],
        ['**Lampiran II (1771-II)**', 'Perincian HPP, Biaya Usaha Lainnya, dan Biaya dari Luar Usaha', 'Rincian biaya gaji, sewa, bunga, perjalanan, promosi, dan biaya operasional lainnya secara komersial.'],
        ['**Lampiran III (1771-III)**', 'Kredit Pajak Dalam Negeri', 'Daftar pemotongan/pemungutan PPh Pasal 22 dan PPh Pasal 23 yang telah dipotong oleh pihak ketiga.'],
        ['**Lampiran IV (1771-IV)**', 'PPh Final dan Penghasilan yang Tidak Termasuk Objek Pajak', 'Rincian penghasilan yang dikenai PPh Final (bunga, sewa tanah) dan penghasilan bukan objek (hibah/dividen).'],
        ['**Lampiran V (1771-V)**', 'Daftar Pemegang Saham / Pengurus & Susunan Pengurus', 'Nama, alamat, NPWP, dan persentase kepemilikan modal seluruh pemegang saham dan direksi.'],
        ['**Lampiran VI (1771-VI)**', 'Daftar Penyertaan Modal & Hubungan Istimewa', 'Daftar anak perusahaan dan pinjaman dari/kepada pemegang saham.']
      ],
      caption: 'Tabel 11.2: Struktur kelengkapan formulir SPT 1771.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 11' },
    {
      kind: 'ul',
      items: [
        '**Koreksi Positif**: Menambah Laba Fiskal $\\rightarrow$ Mengakibatkan PKP naik dan Pajak Terutang naik.',
        '**Koreksi Negatif**: Mengurangi Laba Fiskal $\\rightarrow$ Mengakibatkan PKP turun dan Pajak Terutang turun.',
        '**Batas Waktu Lapor SPT 1771**: Paling lambat **4 bulan setelah akhir tahun pajak** (30 April untuk tahun buku Januari-Desember).'
      ]
    }
  ]
};