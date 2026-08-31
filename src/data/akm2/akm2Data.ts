// =============================================================
// src/data/akm2/akm2Data.ts
// Rangkuman KOMPREHENSIF AKM II (AKK202) - FEB UNAIR
// Sumber: Kieso, Weygandt & Warfield, Intermediate Accounting IFRS 5th Ed (2024),
//         PSAK 16, 13, 26, 48, 19, 57, 71, 50, 56, 15, 65.
// =============================================================
import type { Reading } from '../../types';
import { TM1_READING } from './modules/tm1';
import { TM2_READING } from './modules/tm2';
import { TM3_READING } from './modules/tm3';
import { TM4_READING } from './modules/tm4';
import { TM5_READING } from './modules/tm5';
import { TM6_READING } from './modules/tm6';
import { TM7_READING } from './modules/tm7';
import { TM9_READING } from './modules/tm9';
import { TM10_READING } from './modules/tm10';
import { TM11_READING } from './modules/tm11';
import { TM12_READING } from './modules/tm12';
import { TM13_READING } from './modules/tm13';
import { TM14_READING } from './modules/tm14';

export const AKK202_READINGS: Record<number, Reading> = {
  1: TM1_READING,
  2: TM2_READING,
  3: TM3_READING,
  4: TM4_READING,
  5: TM5_READING,
  6: TM6_READING,
  7: TM7_READING,
  8: {
    tm: 8,
    title: 'Pemantapan & Review Ujian Tengah Semester (UTS)',
    ref: 'Kieso IFRS 5e Ch. 10-13 | PSAK 16, 13, 19, 26, 48, 57',
    intro: 'Rangkuman terpadu bab 10 s.d 13 untuk persiapan Ujian Tengah Semester AKM II.',
    objectives: [
      'Mengintegrasikan pemahaman Aset Tetap, Depresiasi, Intangibles, Liabilitas Lancar, dan Provisi.',
      'Mengerjakan simulasi soal komprehensif UTS.'
    ],
    blocks: [
      { kind: 'h2', text: 'Peta Konsep Utama Pra-UTS AKM II' },
      {
        kind: 'ul',
        items: [
          '**TM 1 (Aset Tetap & Properti Investasi)**: WAAE pinjaman konstruksi, alokasi lump-sum, PV provisi pembongkaran.',
          '**TM 2 (Subsequent Costs & Disposisi)**: Substitusi komponen mesin, pertukaran non-moneter commercial vs non-commercial.',
          '**TM 3 (Depresiasi & Deplesi)**: Komparasi 4 metode, depresiasi parsial, revisi estimasi prospektif, dan ekstraksi tambang.',
          '**TM 4 (Penurunan Nilai Aset)**: Recoverable Amount = Higher of FVLCD vs Value in Use, alokasi rugi CGU & batas pembalikan.',
          '**TM 5 (Aset Tak Berwujud)**: Pemisahan riset vs pengembangan (PIRATE criteria), amortisasi limited life, dan goodwill penggabungan usaha.',
          '**TM 6 (Liabilitas Lancar)**: Diskonto wesel bayar, utang kompensasi cuti berbayar, dan syarat kontrak refinansiasi.',
          '**TM 7 (Provisi & Kontinjensi)**: Matriks keputusan Probable/Possible/Remote, Assurance Warranty, Onerous contracts, dan adjusting events.'
        ]
      }
    ]
  },
  9: TM9_READING,
  10: TM10_READING,
  11: TM11_READING,
  12: TM12_READING,
  13: TM13_READING,
  14: TM14_READING,
};

export const AKM2_REVIEW_READINGS: Record<string, Reading> = {
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS AKM II',
    ref: 'Kompilasi TM 1 s.d TM 7 | Kieso Ch. 10-13',
    intro: 'Cheat sheet dan peta rumus esensial untuk menghadapi Ujian Tengah Semester AKM II.',
    objectives: [
      'Menguasai formula WAAE & Avoidable Interest.',
      'Memahami perbandingan metode depresiasi.',
      'Membedakan provisi garansi vs kontinjensi.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS AKM II' },
      {
        kind: 'ul',
        items: [
          '**WAAE**: Selalu kalikan pengeluaran dengan (bulan sisa / 12).',
          '**Bunga Kapitalisasi**: Pilih yang lebih kecil antara Avoidable Interest dan Actual Interest.',
          '**Lump-Sum**: Alokasikan harga beli bersih berdasarkan appraisal value.',
          '**Properti Investasi**: Jika pakai Fair Value Model, tidak ada depresiasi dan selisih FV masuk ke Laba Rugi.',
          '**Pertukaran Non-Moneter**: Jika ada substansi komersial, akui semua untung/rugi. Jika tanpa substansi komersial, tangguhkan keuntungan.',
          '**Impairment**: Recoverable Amount = Max(FVLCD, Value in Use). Rugi = Carrying - Recoverable.',
          '**R&D**: Riset = Beban; Pengembangan = Kapitalisasi jika penuhi 6 syarat kelayakan.',
          '**Goodwill**: Hanya diakui dari transaksi akuisisi bisnis eksternal, tidak diamortisasi.',
          '**Provisi**: Diakui jika Probable (>50%) dan estimasi andal.'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS AKM II',
    ref: 'Kompilasi TM 9 s.d TM 14 | Kieso Ch. 14-17',
    intro: 'Cheat sheet dan peta rumus esensial untuk menghadapi Ujian Akhir Semester AKM II.',
    objectives: [
      'Menguasai amortisasi obligasi metode bunga efektif.',
      'Menguasai perhitungan EPS Dasar dan Dilusian.',
      'Membedakan perlakuan investasi FVOCI vs FVTPL vs Equity Method.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS AKM II' },
      {
        kind: 'ul',
        items: [
          '**Obligasi (TM 9)**: Beban Bunga = Carrying Value awal × Suku Bunga Efektif Pasar; Kas = Face Value × Stated Coupon Rate.',
          '**Pelunasan Dini (TM 10)**: Untung/Rugi = Net Carrying Amount - Reacquisition Price.',
          '**Saham Treasuri (TM 11)**: Dicatat dengan Cost Method. Defisit penjualan di bawah kos mengurangi Agio Treasuri lalu Saldo Laba.',
          '**Obligasi Konversi (TM 12)**: Pisahkan nilai liabilitas (PV arus kas) dan ekuitas dengan With-and-Without Method. Konversi tidak menimbulkan laba/rugi.',
          '**Basic EPS (TM 13)**: (Laba Bersih - Dividen Preferen Kumulatif) / WASO.',
          '**Diluted EPS (TM 13)**: Gunakan If-Converted untuk Obligasi/Saham Preferen Konversi, dan Treasury Stock Method untuk Opsi/Waran.',
          '**Metode Ekuitas (TM 14)**: Kepemilikan 20%-50%. Bagian Laba Asosiasi = +Investasi; Dividen Kas Diterima = -Investasi (Pengembalian Modal).'
        ]
      }
    ]
  }
};