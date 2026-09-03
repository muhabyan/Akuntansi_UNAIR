import type { Reading } from '../../../types';
import {
  CASE_CONVERTIBLE_BONDS,
  CASE_STOCK_OPTIONS_SHARE_BASED_PAYMENT } from '../akm2PracticeCases';

const SVG_CONVERTIBLES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PEMISAHAN INSTRUMEN KEUANGAN MAJEMUK (PSAK 50 / IAS 32)</text>

  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. TOTAL PROCEEDS</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Total Kas Penerbitan</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Harga jual gabungan</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">obligasi + hak konversi</text>
  <text x="125" y="168" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">Kas yang Diterima (100%)</text>

  <text x="235" y="130" fill="#f59e0b" font-size="16" font-weight="800" text-anchor="middle">=</text>

  <rect x="255" y="55" width="185" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="347" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. KOMPONEN LIABILITAS</text>
  <text x="347" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">PV Obligasi Tanpa Konversi</text>
  <line x1="265" y1="110" x2="430" y2="110" stroke="#334155"/>
  <text x="347" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Dihitung dari PV kupon +</text>
  <text x="347" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">PV pokok pada yield pasar</text>
  <text x="347" y="168" fill="#f59e0b" font-size="9.5" font-weight="600" text-anchor="middle">Utang Obligasi</text>

  <text x="455" y="130" fill="#f59e0b" font-size="16" font-weight="800" text-anchor="middle">+</text>

  <rect x="475" y="55" width="175" height="145" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="562" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">3. KOMPONEN EKUITAS</text>
  <text x="562" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Nilai Residu Opsi Konversi</text>
  <line x1="485" y1="110" x2="640" y2="110" stroke="#334155"/>
  <text x="562" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Total Kas Diterima</text>
  <text x="562" y="148" fill="#f87171" font-size="9.5" text-anchor="middle">(-) Komponen Liabilitas</text>
  <text x="562" y="168" fill="#a855f7" font-size="9.5" font-weight="600" text-anchor="middle">Premi Konversi Ekuitas</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Sekuritas Dilutif, Obligasi Konversi, Waran Saham, dan Kompensasi Saham',
  ref: 'Kieso IFRS 5e Ch. 16 | PSAK 50, PSAK 53 (IFRS 2), PSAK 71',
  intro: 'TM 12 mengupas sekuritas yang berpotensi mengurangi kepemilikan pemegang saham lama (Sekuritas Dilutif): pemisahan komponen Liabilitas dan Ekuitas pada Obligasi Konversi (Metode Residu PSAK 50), akuntansi konversi saham, insentif konversi (Sweetener), waran saham terpisah vs melekat, serta opsi saham karyawan (Share-Based Payment - PSAK 53).',
  objectives: [
    'Menerapkan Metode Residu (With-and-Without Method) untuk memisahkan Komponen Liabilitas dan Komponen Ekuitas pada Obligasi Konversi sesuai PSAK 50.',
    'Menjurnal pelaksanaan hak konversi obligasi menjadi saham biasa menggunakan Metode Nilai Buku (Book Value Method).',
    'Menghitung dan mencatat Biaya Tambahan Pemanis Konversi (Sweetener Expense) untuk mempercepat konversi.',
    'Membedakan perlakuan Waran Saham yang Dapat Dipisahkan (Detachable Warrants) vs Waran Melekat.',
    'Menghitung Beban Kompensasi Opsi Saham Karyawan (PSAK 53) sepanjang Periode Jasa (Vesting Period) berdasarkan Nilai Wajar Model Black-Scholes.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pemisahan Komponen Liabilitas & Ekuitas Instrumen Keuangan Majemuk',
      svg: SVG_CONVERTIBLES,
      caption: 'Gambar 12.1: Metode residu (with-and-without) pemisahan obligasi konversi sesuai PSAK 50.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 12'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Hitung PV Liabilitas Murni', 'Berapa PV pokok dan bunga jika obligasi diterbitkan tanpa hak konversi?', 'Menetapkan nilai wajar komponen Utang Obligasi.'],
        ['2', 'Hitung Residu Ekuitas', 'Berapa selisih Total Kas Diterima dikurangi PV Liabilitas Murni?', 'Mencatat Agio Saham - Opsi Konversi (Ekuitas).'],
        ['3', 'Konversi Menjadi Saham', 'Bagaimana memindahkan carrying value utang dan opsi konversi ke modal saham biasa?', 'Menjurnal konversi metode nilai buku tanpa mengakui gain/loss.'],
        ['4', 'Insentif Sweetener', 'Berapa kas tambahan yang dibayar perusahaan untuk membujuk investor segera konversi?', 'Mendebit Beban Konversi (Sweetener Expense) di Laba Rugi.'],
        ['5', 'Opsi Saham PSAK 53', 'Berapa nilai wajar opsi pada grant date dan berapa tahun periode vesting?', 'Menjurnal beban kompensasi tahunan ke Agio Saham - Opsi Saham.']
      ],
      caption: 'Tabel 12.0: Roadmap belajar sekuritas dilutif dan kompensasi saham.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 12'
    },
    {
      kind: 'formula',
      text: '\\text{Komponen Ekuitas (Opsi Konversi)} = \\text{Total Kas Penerbitan} - \\text{PV Liabilitas Tanpa Opsi Konversi}',
      note: 'PV Liabilitas dihitung menggunakan suku bunga pasar untuk obligasi non-konversi yang serupa risikonya.'
    },
    {
      kind: 'formula',
      text: '\\text{Beban Kompensasi Tahunan} = \\frac{\\text{Total Estimasi Opsi yang Vested} \\times \\text{Nilai Wajar Opsi pada Grant Date}}{\\text{Jumlah Tahun Periode Jasa (Vesting Period)}}',
      note: 'Nilai wajar opsi dikunci pada Grant Date (tanggal pemberian) dan tidak disesuaikan lagi terhadap fluktuasi harga pasar saham.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Penerbitan Obligasi Konversi PT Bank Central Asia Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'PT Bank Central Asia menerbitkan 2.000 lembar obligasi konversi 5 tahun (nominal Rp 1.000.000/lembar, total nominal Rp 2.000.000.000) pada harga par 100%. Kupon bunga 6% dibayar tahunan. Obligasi non-konversi serupa memiliki suku bunga pasar 9%.'
        },
        {
          kind: 'formula',
          text: 'PV Pokok (9%, 5 thn: 0,64993) = 2.000.000.000 × 0,64993 = Rp 1.299.860.000\nPV Kupon (120 jt × PVIFA 9%, 5 thn: 3,88965) = Rp 466.758.000\nTotal Nilai Wajar Komponen Liabilitas = 1.299.860.000 + 466.758.000 = Rp 1.766.618.000\n\nKomponen Ekuitas (Opsi Konversi) = 2.000.000.000 - 1.766.618.000 = Rp 233.382.000'
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Jurnal Penerbitan oleh PT BCA',
          text: 'Debit: Kas Rp 2.000.000.000\nKredit: Utang Obligasi (Komponen Liabilitas) Rp 1.766.618.000\nKredit: Premi Saham - Opsi Konversi (Ekuitas) Rp 233.382.000'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Pelaksanaan Konversi Obligasi Menjadi Saham',
      prompt: 'Jika pada akhir tahun ke-2 seluruh obligasi PT BCA di atas dikonversi menjadi 200.000 lembar saham biasa (nominal Rp 5.000/lbr), dan pada tanggal konversi carrying value utang obligasi adalah Rp 1.847.000.000, buat jurnal konversinya menggunakan Book Value Method!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Hapus Liabilitas Obligasi**: Debit Utang Obligasi sebesar **Rp 1.847.000.000**.',
            '**Hapus Opsi Konversi Ekuitas**: Debit Premi Saham - Opsi Konversi sebesar **Rp 233.382.000**.',
            '**Terbitkan Modal Saham Biasa**: 200.000 lembar × Rp 5.000 nominal = **Rp 1.000.000.000**.',
            '**Agio Saham Biasa (Penyama Seimbang)**: (1.847.000.000 + 233.382.000) - 1.000.000.000 = **Rp 1.080.382.000**.',
            '**Jurnal Akuntansi**:\nDebit: Utang Obligasi Rp 1.847.000.000\nDebit: Premi Saham - Opsi Konversi Rp 233.382.000\nKredit: Modal Saham Biasa Rp 1.000.000.000\nKredit: Premi Saham - Biasa Rp 1.080.382.000'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UAS Book Value Method',
          text: 'Pada Metode Nilai Buku, **DILARANG MENGAKUI KEUNTUNGAN ATAU KERUGIAN (NO GAIN/LOSS)** pada saat konversi obligasi dilakukan! Seluruh nilai buku dialihkan ke ekuitas saham biasa.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Pemisahan Instrumen Majemuk PSAK 50', 'Metode Residu untuk obligasi konversi dan waran saham.', 'Menghitung PV liabilitas dan saldo ekuitas opsi konversi.'],
        ['2', 'Konversi Obligasi (Book Value Method)', 'Penghapusan akun utang obligasi dan pemindahan ke modal saham.', 'Menjurnal transaksi konversi tanpa gain/loss.'],
        ['3', 'Insentif Konversi (Sweetener)', 'Perlakuan kas pemanis konversi sebagai beban periode berjalan.', 'Menjurnal beban konversi di laba rugi.'],
        ['4', 'Waran Saham Terpisah vs Melekat', 'Metode Penambahan (Incremental) vs Proporsional untuk penerbitan waran.', 'Mencatat ekuitas waran saham.'],
        ['5', 'Opsi Saham Karyawan (PSAK 53)', 'Model Nilai Wajar pada Grant Date dan amortisasi sepanjang Vesting Period.', 'Menjurnal beban kompensasi dan penerbitan saham saat opsi dieksekusi.']
      ],
      caption: 'Tabel 12.1: Matriks kompetensi komprehensif materi TM 12 AKM II.'
    },
    { kind: 'h2', text: '1. Akuntansi Sekuritas Dilutif & Obligasi Konversi' },
    {
      kind: 'p',
      text: '==Sekuritas dilutif adalah instrumen keuangan yang memberikan hak kepada pemegangnya untuk memperoleh saham biasa, yang jika dieksekusi akan menurunkan laba per saham (EPS) pemegang saham yang ada.=='
    },
    CASE_CONVERTIBLE_BONDS,
    { kind: 'h2', text: "2. Kompensasi Berbasis Saham (Opsi Saham Karyawan - PSAK 53 / IFRS 2)" },
    {
      kind: 'p',
      text: "==PSAK 53 mewajibkan nilai wajar opsi saham diukur pada tanggal hibah (Grant Date) menggunakan model penetapan harga opsi (Black-Scholes). Nilai wajar tersebut diakui sebagai Beban Kompensasi secara bertahap sepanjang masa bakti (Vesting Period) dengan kredit ke akun Ekuitas Modal Saham - Opsi Saham.=="
    },
    CASE_STOCK_OPTIONS_SHARE_BASED_PAYMENT,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Pemisahan Obligasi Konversi**: Total Kas - PV Liabilitas Murni = Komponen Ekuitas.',
        '**Konversi Book Value**: Tidak ada laba atau rugi yang diakui.',
        '**Sweetener Expense**: Kas insentif tambahan langsung dibebankan ke Laba Rugi.',
        `**PSAK 53 Opsi Saham**: Nilai wajar dikunci pada Grant Date dan diamortisasi sepanjang Vesting Period.`
      ]
    }
  ]
};