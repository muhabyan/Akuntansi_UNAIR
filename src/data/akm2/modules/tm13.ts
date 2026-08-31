import type { Reading } from '../../../types';
import { CASE_EPS_COMPLEX } from '../akm2PracticeCases';

const SVG_EPS_FRAMEWORK = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KERANGKA LABA PER SAHAM DASAR VS DILUSIAN (PSAK 56 / IAS 33)</text>
  
  <!-- Basic EPS -->
  <rect x="40" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="180" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. Basic EPS (Laba Per Saham Dasar)</text>
  <text x="180" y="105" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Pembilang / Numerator:</text>
  <text x="180" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">Laba Bersih - Dividen Saham Preferen</text>
  <line x1="60" y1="135" x2="300" y2="135" stroke="#334155"/>
  <text x="180" y="152" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">Penyebut / Denominator:</text>
  <text x="180" y="170" fill="#cbd5e1" font-size="10" text-anchor="middle">WASO (Rata-rata Tertimbang Saham Beredar)</text>
  <text x="180" y="190" fill="#94a3b8" font-size="9" text-anchor="middle">(Stock dividend/split dihitung retroaktif)</text>

  <!-- Diluted EPS -->
  <rect x="360" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="500" y="80" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">2. Diluted EPS (Laba Per Saham Dilusian)</text>
  <text x="500" y="105" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">Metode Penyesuaian Efek Potensial:</text>
  <text x="500" y="125" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">• If-Converted Method</text>
  <text x="500" y="140" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Obligasi Konversi (+Bunga neto pajak / +Saham)</text>
  <text x="500" y="160" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">• Treasury Stock Method</text>
  <text x="500" y="175" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Opsi Saham / Waran (Tambahan lembar bersih)</text>
  <text x="500" y="193" fill="#34d399" font-size="9" font-weight="600" text-anchor="middle">Hanya disajikan jika bersifat DILUTIF (&lt; Basic)</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Laba Per Saham (Earnings Per Share - Basic & Diluted)',
  ref: 'Kieso IFRS 5e Ch. 16 | PSAK 56',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 13: Menguasai perhitungan Laba Per Saham Dasar (Basic EPS), pembobotan WASO termasuk dividen saham/split retroaktif, penyesuaian dividen preferen kumulatif, serta pengujian efek dilutif dan kalkulasi Diluted EPS menggunakan If-Converted Method dan Treasury Stock Method.',
  objectives: [
    'Membedakan Struktur Modal Sederhana (Simple Capital Structure) vs Struktur Modal Kompleks (Complex Capital Structure).',
    'Menghitung Rata-rata Tertimbang Jumlah Saham Biasa Beredar (WASO) dengan pembobotan waktu transaksi saham.',
    'Menerapkan perlakuan restatement retroaktif untuk Dividen Saham (Stock Dividends) dan Pemecahan Saham (Stock Splits).',
    'Menghitung Laba Per Saham Dasar (Basic EPS) dengan mengurangkan dividen preferen kumulatif/non-kumulatif.',
    'Menerapkan Metode Pengandaian Konversi (If-Converted Method) untuk Obligasi Konversi dan Saham Preferen Konversi.',
    'Menerapkan Metode Saham Treasuri (Treasury Stock Method) untuk Opsi Saham dan Waran.',
    'Membedakan efek sekuritas Dilutif (menurunkan EPS) vs Anti-Dilutif (menaikkan EPS dan wajib diabaikan).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Kerangka Kerja Laba Per Saham Dasar dan Dilusian',
      svg: SVG_EPS_FRAMEWORK,
      caption: 'Gambar 13.1: Alur kalkulasi Basic EPS dan penyesuaian sekuritas dilutif.'
    },

    { kind: 'h2', text: '1. Laba Per Saham Dasar (Basic EPS)' },
    {
      kind: 'p',
      text: 'Basic EPS mencerminkan bagian laba bersih entitas yang menjadi hak setiap lembar saham biasa yang beredar sepanjang periode pelaporan:'
    },
    {
      kind: 'formula',
      text: '\\text{Basic EPS} = \\frac{\\text{Laba Bersih} - \\text{Dividen Saham Preferen}}{\\text{Rata-rata Tertimbang Saham Biasa Beredar (WASO)}}',
      note: 'Dividen Saham Preferen: Dikurangkan penuh jika Kumulatif (meskipun belum diumumkan), dan hanya dikurangkan jika diumumkan bila Non-Kumulatif.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Aturan Khusus Perhitungan WASO (Weighted-Average Shares Outstanding)',
      text: '• **Penerbitan/Pembelian Saham Baru**: Dibobotkan berdasarkan pecahan bulan beredar (misal: terbit 1 Mei = bobot 8/12 bulan).\n• **Dividen Saham & Stock Split**: Diperlakukan seolah-olah **SUDAH TERJADI SEJAK AWAL TAHUN (RETROAKTIF)**, sehingga seluruh saldo sebelum tanggal split/dividen dikalikan faktor pengali split!'
    },

    { kind: 'h2', text: '2. Laba Per Saham Dilusian (Diluted EPS)' },
    {
      kind: 'p',
      text: 'Jika entitas memiliki sekuritas berpotensi saham biasa (Obligasi Konversi, Opsi Saham, Waran), entitas wajib menyajikan Diluted EPS dengan mengasumsikan seluruh sekuritas tersebut dikonversi pada tanggal yang paling awal:'
    },
    {
      kind: 'table',
      headers: ['Jenis Sekuritas Potensial', 'Metode Penyesuaian', 'Dampak pada Pembilang (Laba) & Penyebut (Saham)'],
      rows: [
        ['Obligasi Konversi (Convertible Bonds)', 'If-Converted Method', '• **Pembilang**: Ditambah Beban Bunga yang dihemat neto pajak: `+ Beban Bunga × (1 - Tarif Pajak)`.\n• **Penyebut**: Ditambah jumlah lembar saham hasil konversi.'],
        ['Saham Preferen Konversi (Convertible Preference)', 'If-Converted Method', '• **Pembilang**: Ditambah kembali dividen saham preferen (tidak dikurangkan).\n• **Penyebut**: Ditambah lembar saham hasil konversi.'],
        ['Opsi Saham / Waran (Options & Warrants)', 'Treasury Stock Method', '• **Pembilang**: Tidak berubah.\n• **Penyebut**: `+ Lembar Opsi - Lembar yang dapat dibeli kembali di pasar (Dana Eksekusi / Harga Pasar Rata-rata)`.\n*(Hanya dilutif jika Harga Pasar > Harga Eksekusi)*.']
      ],
      caption: 'Tabel 13.1: Matriks penyesuaian sekuritas dilutif pada Diluted EPS.'
    },

    CASE_EPS_COMPLEX,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 13' },
    {
      kind: 'ul',
      items: [
        '**Dividen Preferen Kumulatif**: Selalu kurangkan 1 tahun dividen dari Laba Bersih di pembilang Basic EPS.',
        '**Stock Split / Dividen Saham**: Selalu kalikan seluruh transaksi sebelumnya dari awal tahun.',
        '**Penghematan Bunga Obligasi**: Selalu kalikan dengan `(1 - Tarif Pajak)` sebelum ditambah ke pembilang Diluted EPS.',
        '**Anti-Dilutif**: Jika konversi sekuritas justru menaikkan EPS atau memperkecil rugi per saham, sekuritas tersebut **DIABAIKAN** dalam penyajian Diluted EPS.'
      ]
    }
  ]
};