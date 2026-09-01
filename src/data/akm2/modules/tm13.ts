import type { Reading } from '../../../types';
import {
  CASE_EPS_COMPLEX,
} from '../akm2PracticeCases';

const SVG_EPS_STRUCTURE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KERANGKA PERHITUNGAN LABA PER SAHAM (EPS - PSAK 56)</text>

  <rect x="30" y="55" width="290" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="175" y="78" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. EPS DASAR (BASIC EPS)</text>
  <line x1="45" y1="90" x2="305" y2="90" stroke="#334155"/>
  <text x="175" y="115" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Laba Bersih - Dividen Saham Preferen</text>
  <line x1="60" y1="125" x2="290" y2="125" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="175" y="145" fill="#34d399" font-size="10.5" font-weight="600" text-anchor="middle">Rata-Rata Tertimbang Saham Beredar (WASC)</text>
  <text x="175" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">(Wajib disajikan di Wajah Laporan Laba Rugi)</text>

  <rect x="360" y="55" width="290" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="78" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">2. EPS DILUSIAN (DILUTED EPS)</text>
  <line x1="375" y1="90" x2="635" y2="90" stroke="#334155"/>
  <text x="505" y="115" fill="#f1f5f9" font-size="10.5" font-weight="600" text-anchor="middle">Laba Dasar + Bunga Obligasi Konversi (Net Pajak)</text>
  <line x1="375" y1="125" x2="635" y2="125" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="145" fill="#34d399" font-size="10.5" font-weight="600" text-anchor="middle">WASC + Saham Tambahan Konversi &amp; Opsi</text>
  <text x="505" y="175" fill="#f87171" font-size="9" text-anchor="middle">(Hanya disajikan jika Dilutif: Diluted EPS &lt; Basic EPS)</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Laba Per Saham (Earnings Per Share - Basic & Diluted EPS)',
  ref: 'Kieso IFRS 5e Ch. 16 | PSAK 56 (IAS 33)',
  intro: 'TM 13 membedah indikator kinerja keuangan terpenting bagi investor publik: perhitungan Laba Per Saham Dasar (Basic EPS) dengan pembobotan WASC dan perlakuan retrospektif dividen saham/stock split, dividen saham preferen kumulatif vs non-kumulatif, serta perhitungan EPS Dilusian (Diluted EPS) menggunakan Metode If-Converted dan Treasury Stock Method beserta uji antidilutif.',
  objectives: [
    'Menghitung Rata-Rata Tertimbang Jumlah Saham Beredar (Weighted-Average Shares Outstanding - WASC).',
    'Menerapkan perlakuan retrospektif atas Dividen Saham dan Pemecahan Saham (Stock Split) seolah-olah terjadi sejak awal periode.',
    'Menghitung Laba Bersih yang Tersedia untuk Pemegang Saham Biasa dengan mengurangkan Dividen Saham Preferen (Kumulatif vs Non-Kumulatif).',
    'Menerapkan Metode If-Converted untuk Obligasi Konversi (penyesuaian beban bunga neto pajak) dan Saham Preferen Konversi.',
    'Menerapkan Treasury Stock Method untuk Opsi Saham dan Waran (asumsi kas hasil eksekusi dipakai beli saham treasuri pada harga pasar rata-rata).',
    'Menguji efek Antidilutif (Antidilutive Test) untuk memastikan hanya sekuritas yang menurunkan EPS yang dimasukkan ke Diluted EPS.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Kerangka Penghitungan EPS Dasar vs EPS Dilusian',
      svg: SVG_EPS_STRUCTURE,
      caption: 'Gambar 13.1: Formula fundamental penentuan EPS Dasar dan EPS Dilusian sesuai PSAK 56.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 13'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Hitung WASC Dasar', 'Berapa lembar saham beredar dikalikan bobot bulan beredar + efek retrospektif stock split?', 'Menetapkan angka penyebut (denominator) EPS Dasar.'],
        ['2', 'Laba untuk Saham Biasa', 'Apakah saham preferen bersifat kumulatif (kurangkan meski belum deklarasi) atau non-kumulatif?', 'Menetapkan angka pembilang (numerator) EPS Dasar.'],
        ['3', 'If-Converted Method', 'Berapa beban bunga obligasi konversi neto pajak yang dihemat jika obligasi dikonversi?', 'Menyesuaikan pembilang dan penyebut untuk efek obligasi konversi.'],
        ['4', 'Treasury Stock Method', 'Berapa lembar saham inkremental dari opsi (Saham Terbit - Saham Dibeli Kembali)?', 'Menambahkan lembar saham tambahan dari opsi saham ke penyebut.'],
        ['5', 'Uji Antidilutif', 'Apakah EPS Dilusian akhir lebih kecil daripada EPS Dasar?', 'Jika hasil lebih besar (antidilutif), abaikan sekuritas tersebut.']
      ],
      caption: 'Tabel 13.0: Roadmap belajar Laba Per Saham Dasar dan Dilusian.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 13'
    },
    {
      kind: 'formula',
      text: '\\text{Basic EPS} = \\frac{\\text{Laba Bersih} - \\text{Dividen Saham Preferen}}{\\text{WASC (Weighted-Average Shares)}}',
      note: 'Dividen Preferen Kumulatif SELALU dikurangkan 1 tahun penuh (meskipun direksi tidak mendeklarasikan dividen tahun ini).'
    },
    {
      kind: 'formula',
      text: '\\text{Penyesuaian If-Converted} = \\text{Beban Bunga Obligasi yang Dihemat} \\times (1 - \\text{Tarif Pajak})',
      note: 'Ditambahkan kembali ke Laba Bersih di pembilang, sedangkan jumlah lembar saham hasil konversi ditambahkan ke penyebut.'
    },
    {
      kind: 'formula',
      text: '\\text{Saham Tambahan Opsi} = \\text{Jumlah Opsi Dieksekusi} - \\left( \\frac{\\text{Jumlah Opsi} \\times \\text{Harga Eksekusi}}{\\text{Harga Pasar Rata-Rata Saham}} \\right)',
      note: 'Hanya bersifat dilutif jika Harga Pasar Rata-Rata Saham > Harga Eksekusi Opsi (In-the-Money).'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Perhitungan EPS PT Astra Otoparts Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'PT Astra Otoparts membukukan Laba Bersih Rp 1.500.000.000 pada tahun 2026. Data modal:\n• 1.000.000 lembar saham biasa beredar sejak 1 Jan 2026.\n• 100.000 lembar saham preferen 8% kumulatif (nominal Rp 10.000/lbr).\n• Obligasi konversi 7% nominal Rp 500.000.000 (dapat dikonversi menjadi 50.000 lembar saham biasa). Beban bunga obligasi 2026 = Rp 35.000.000. Tarif pajak 20%.\n• 40.000 lembar opsi saham dengan harga eksekusi Rp 2.000/lbr (Harga pasar rata-rata saham 2026 = Rp 2.500/lbr).'
        },
        {
          kind: 'formula',
          text: 'Dividen Saham Preferen = 100.000 × Rp 10.000 × 8% = Rp 80.000.000\nLaba Bersih untuk Saham Biasa = 1.500.000.000 - 80.000.000 = Rp 1.420.000.000\nBasic EPS = 1.420.000.000 / 1.000.000 lembar = Rp 1.420 per lembar\n\nPenyesuaian Diluted EPS:\n• Penghematan Bunga Obligasi (Net Pajak) = 35.000.000 × (1 - 0,20) = Rp 28.000.000\n• Tambahan Saham Obligasi = 50.000 lembar\n• Kas Hasil Opsi (40.000 × Rp 2.000) = Rp 80.000.000\n• Saham Dibeli Kembali (80 jt / Rp 2.500) = 32.000 lembar\n• Tambahan Saham Opsi (40.000 - 32.000) = 8.000 lembar\n\nDiluted EPS = (1.420.000.000 + 28.000.000) / (1.000.000 + 50.000 + 8.000)\nDiluted EPS = 1.448.000.000 / 1.058.000 lembar = Rp 1.368,62 per lembar'
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Kesimpulan Uji Dilusi',
          text: 'Karena Diluted EPS (Rp 1.368,62) lebih kecil dari Basic EPS (Rp 1.420), seluruh sekuritas bersifat DILUTIF dan wajib disajikan berdampingan di laporan laba rugi.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Efek Stock Split dan Dividen Saham pada WASC',
      prompt: 'PT Cemerlang memulai tahun 2026 dengan 200.000 lembar saham. Transaksi:\n• 1 Mei: Menerbitkan 60.000 lembar saham baru secara tunai.\n• 1 Agustus: Mengumumkan Stock Split 2-for-1.\n• 1 November: Membeli kembali 20.000 lembar saham treasuri.\nHitunglah WASC tahun 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Periode 1 Jan - 1 Mei (4 bulan)**: 200.000 lembar × **2 (Stock Split)** × 4/12 = **133.333 lembar**.',
            '**Periode 1 Mei - 1 Nov (6 bulan)**: (200.000 + 60.000 = 260.000 lembar) × **2 (Stock Split)** × 6/12 = **260.000 lembar**.',
            '**Periode 1 Nov - 31 Des (2 bulan)**: (520.000 - 20.000 treasuri = 500.000 lembar) × 2/12 = **83.333 lembar**.',
            '**Total WASC Tahun 2026**: 133.333 + 260.000 + 83.333 = **476.666 lembar**.'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UAS WASC',
          text: 'Stock split dan dividen saham diberlakukan secara **RETROSPEKTIF** ke seluruh saldo saham yang ada sebelum tanggal split terjadi (dikalikan faktor split untuk seluruh bulan sebelum tanggal split)!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 13'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Perhitungan WASC Dasar', 'Pembobotan waktu dan penyesuaian retrospektif stock split/dividen saham.', 'Menghitung penyebut WASC secara akurat.'],
        ['2', 'Dividen Saham Preferen', 'Perlakuan dividen preferen kumulatif vs non-kumulatif.', 'Menghitung pembilang laba bersih untuk pemegang saham biasa.'],
        ['3', 'Metode If-Converted Obligasi', 'Penyesuaian bunga bersih pajak di pembilang dan saham konversi di penyebut.', 'Menghitung efek dilutif obligasi konversi.'],
        ['4', 'Treasury Stock Method Opsi', 'Asumsi penerimaan kas eksekusi untuk membeli kembali saham di harga pasar.', 'Menghitung lembar saham tambahan inkremental opsi.'],
        ['5', 'Penyajian Resmi di Wajah Laba Rugi', 'Penyajian Basic EPS dan Diluted EPS untuk laba operasi dan laba bersih.', 'Menyajikan angka EPS sesuai ketentuan PSAK 56.']
      ],
      caption: 'Tabel 13.1: Matriks kompetensi komprehensif materi TM 13 AKM II.'
    },
    { kind: 'h2', text: '1. Perhitungan Komprehensif Laba Per Saham' },
    {
      kind: 'p',
      text: '==Laba per saham (EPS) menunjukkan porsi laba bersih entitas yang dapat diatribusikan kepada setiap lembar saham biasa yang beredar selama periode pelaporan.=='
    },
    CASE_EPS_COMPLEX,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Stock Split / Stock Dividend**: Diberlakukan retrospektif sejak awal periode untuk perhitungan WASC.',
        '**Dividen Preferen Kumulatif**: Selalu dikurangkan dari laba bersih, terlepas dari apakah dideklarasikan atau tidak.',
        '**If-Converted Method**: Tambahkan kembali Beban Bunga × (1 - Tax) ke laba, tambahkan saham konversi ke WASC.',
        '**Treasury Stock Method**: Saham tambahan = Saham Opsi - (Kas Eksekusi / Harga Pasar Rata-Rata).',
        `**Antidilutif**: Jika Diluted EPS > Basic EPS, abaikan efek dilusi dan laporkan EPS Dasar.`
      ]
    }
  ]
};