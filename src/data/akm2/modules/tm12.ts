import type { Reading } from '../../../types';
import { CASE_CONVERTIBLE_BONDS } from '../akm2PracticeCases';

const SVG_COMPOUND_INSTRUMENT = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PEMISAHAN INSTRUMEN KEUANGAN MAJEMUK (PSAK 50: WITH-AND-WITHOUT)</text>
  
  <rect x="40" y="55" width="200" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="140" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Total Penerbitan</text>
  <text x="140" y="105" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">TOTAL PROCEEDS</text>
  <text x="140" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Kas yang Diterima dari</text>
  <text x="140" y="148" fill="#cbd5e1" font-size="10" text-anchor="middle">Investor Obligasi Konversi</text>
  <text x="140" y="175" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">100% Nilai Penerbitan</text>

  <line x1="240" y1="130" x2="280" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <text x="260" y="122" fill="#94a3b8" font-size="14" font-weight="700" text-anchor="middle">=</text>

  <rect x="280" y="55" width="170" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="365" y="80" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. Komponen Liabilitas</text>
  <text x="365" y="105" fill="#f8fafc" font-size="11" font-weight="700" text-anchor="middle">LIABILITY COMPONENT</text>
  <text x="365" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">PV Arus Kas Pokok &amp; Bunga</text>
  <text x="365" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">pada suku bunga pasar</text>
  <text x="365" y="165" fill="#cbd5e1" font-size="9.5" text-anchor="middle">obligasi tanpa konversi</text>

  <line x1="450" y1="130" x2="480" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <text x="465" y="122" fill="#94a3b8" font-size="14" font-weight="700" text-anchor="middle">+</text>

  <rect x="480" y="55" width="160" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="560" y="80" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">3. Komponen Ekuitas</text>
  <text x="560" y="105" fill="#f8fafc" font-size="11" font-weight="700" text-anchor="middle">EQUITY COMPONENT</text>
  <text x="560" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Nilai Residu (Sisa):</text>
  <text x="560" y="148" fill="#34d399" font-size="10" font-weight="600" text-anchor="middle">Proceeds - Liabilitas</text>
  <text x="560" y="172" fill="#7dd3fc" font-size="9" text-anchor="middle">(Agio Opsi Konversi)</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Sekuritas Dilutif & Kompensasi Berbasis Saham',
  ref: 'Kieso IFRS 5e Ch. 16 | PSAK 50, PSAK 71, PSAK 53',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 12: Menguasai akuntansi instrumen keuangan majemuk (Obligasi Konversi & Saham Preferen Konversi) dengan pendekatan With-and-Without, penjurnalan konversi saat jatuh tempo vs dipercepat, Waran Saham, serta opsi saham karyawan (PSAK 53).',
  objectives: [
    'Memisahkan komponen liabilitas dan komponen ekuitas pada instrumen keuangan majemuk menggunakan With-and-Without Method (PSAK 50).',
    'Menjurnal penerbitan dan konversi obligasi konversi menggunakan Book Value Method (tanpa laba/rugi konversi).',
    'Mencatat konversi terinduksi (Induced Conversion / Sweetener) sebagai beban periode berjalan.',
    'Menguasai penerbitan obligasi dengan Waran Saham (Metode Proporsional vs Inkremental).',
    'Menghitung beban kompensasi berbasis saham (Share Options) sepanjang masa bakti (Service/Vesting Period) sesuai PSAK 53 / IFRS 2.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pemisahan Nilai Komponen Liabilitas dan Ekuitas Obligasi Konversi',
      svg: SVG_COMPOUND_INSTRUMENT,
      caption: 'Gambar 12.1: Metode With-and-Without untuk menentukan nilai wajar opsi ekuitas konversi.'
    },

    { kind: 'h2', text: '1. Akuntansi Obligasi Konversi (Convertible Bonds)' },
    {
      kind: 'p',
      text: 'Obligasi Konversi menggabungkan manfaat utang (pembayaran bunga terjamin) dengan hak istimewa ekuitas (opsi menukar obligasi menjadi saham biasa). Sesuai PSAK 50, instrumen ini **wajib dipisahkan menjadi komponen Liabilitas dan Ekuitas saat penerbitan**.'
    },

    CASE_CONVERTIBLE_BONDS,

    { kind: 'h2', text: '2. Konversi Obligasi Menjadi Saham Biasa' },
    {
      kind: 'p',
      text: 'Ketika investor melaksanakan hak konversi, entitas menggunakan **Metode Nilai Buku (Book Value Method)**:'
    },
    {
      kind: 'ul',
      items: [
        'Hapus akun `Utang Obligasi` sebesar nilai tercatat terkini pada tanggal konversi.',
        'Hapus akun `Premi Saham - Opsi Konversi Ekuitas` yang diakui saat penerbitan awal.',
        'Terbitkan `Modal Saham Biasa` sebesar nilai pari lembar saham yang diserahkan.',
        'Selisih kredit dialokasikan ke `Agio Saham - Biasa (Share Premium - Ordinary)`.',
        '**TIDAK ADA KEUNTUNGAN ATAU KERUGIAN** yang diakui pada saat konversi normal!'
      ]
    },

    { kind: 'h2', text: '3. Kompensasi Berbasis Saham (Share-Based Payment - PSAK 53)' },
    {
      kind: 'p',
      text: 'Entitas sering memberikan opsi saham kepada direksi dan karyawan kunci sebagai insentif kinerja. Beban kompensasi diukur sebesar **Nilai Wajar Opsi pada Tanggal Pemberian (Grant Date Fair Value)** dan diakui secara proporsional sepanjang **Masa Vesting (Service Period)**:'
    },
    {
      kind: 'formula',
      text: '\\text{Beban Kompensasi Tahunan} = \\frac{\\text{Total Nilai Wajar Opsi di Grant Date}}{\\text{Jumlah Tahun Masa Vesting}}',
      note: 'Jurnal tahunan: Debit Beban Kompensasi (Laba Rugi) & Kredit Agio Saham - Opsi Saham (Ekuitas).'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 12' },
    {
      kind: 'ul',
      items: [
        '**With-and-Without**: Nilai Liabilitas dihitung dari PV arus kas tanpa konversi; Nilai Ekuitas = Selisih sisa proceeds.',
        '**Konversi Normal**: Gunakan Book Value Method; tidak pernah mencatat laba/rugi.',
        '**Sweetener / Insentif Konversi**: Tambahan kas yang dibayar untuk membujuk konversi dibebankan di Laba Rugi.',
        '**Opsi Saham Karyawan**: Nilai wajar dikunci pada Grant Date dan diamortisasi sepanjang masa kerja vesting.'
      ]
    }
  ]
};