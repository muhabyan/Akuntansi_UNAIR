// =============================================================
// src/data/pjk2/pjk2Data.ts
// Rangkuman KOMPREHENSIF Perpajakan II (PJK202 / PJK301)
// Sumber: UU HPP (UU 7/2021), PP 55/2022, PP 58/2023 (TER PPh 21),
//         PMK 168/2023, PMK 66/2023 (Natura), PMK 172/2023 (TP),
//         PMK 72/2023 (Penyusutan), UU PPN jo. UU HPP, Pajak Karbon.
// =============================================================
import type { Reading } from '../../types';
import { TM1_READING } from './modules/tm1';
import { TM2_READING } from './modules/tm2';
import { TM3_READING } from './modules/tm3';
import { TM4_READING } from './modules/tm4';
import { TM5_READING } from './modules/tm5';
import { TM6_READING } from './modules/tm6';
import { TM7_READING } from './modules/tm7';
import { TM8_READING } from './modules/tm8';
import { TM9_READING } from './modules/tm9';
import { TM10_READING } from './modules/tm10';
import { TM11_READING } from './modules/tm11';
import { TM12_READING } from './modules/tm12';
import { TM13_READING } from './modules/tm13';
import { TM14_READING } from './modules/tm14';

export const PJK202_READINGS: Record<number, Reading> = {
  1: TM1_READING,
  2: TM2_READING,
  3: TM3_READING,
  4: TM4_READING,
  5: TM5_READING,
  6: TM6_READING,
  7: TM7_READING,
  8: TM8_READING,
  9: TM9_READING,
  10: TM10_READING,
  11: TM11_READING,
  12: TM12_READING,
  13: TM13_READING,
  14: TM14_READING,
};

export const PJK202_REVIEW_READINGS: Record<string, Reading> = {
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS Perpajakan II',
    ref: 'Kompilasi TM 1 s.d TM 7 | UU PPh jo. UU HPP | PP 55/2022',
    intro: 'Cheat sheet dan peta rumus esensial untuk menghadapi Ujian Tengah Semester Perpajakan II.',
    objectives: [
      'Menguasai konsep biaya 3M Deductible vs Non-Deductible.',
      'Menguasai tarif PPh OP (5 lapis) dan Badan (22%).',
      'Menguasai Transfer Pricing PMK 172/2023.',
      'Menguasai Penyusutan Fiskal PMK 72/2023.',
      'Menguasai Withholding Tax PPh 22, 23/26, PPh UMKM 0,5%, PPh Final 4(2), Kredit PPh 24, dan Fasilitas Pasal 31E.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS Perpajakan II' },
      {
        kind: 'ul',
        items: [
          '**Deductible (Pasal 6)**: Biaya 3M, penyusutan fiskal, kerugian kurs. **Non-Deductible (Pasal 9)**: Dividen, sanksi denda pajak, kepentingan pribadi.',
          '**Tarif PPh**: OP 5 lapis (5%, 15%, 25%, 30%, 35%); Badan 22%. Persediaan: Hanya FIFO & Average (LIFO dilarang).',
          '**Hubungan Istimewa**: Saham $\\ge 25\\%$, Penguasaan, Keluarga; Batas DER 4:1.',
          '**Penyusutan Fiskal**: Kel. 1 (4 th / 25%), Kel. 2 (8 th / 12,5%), Kel. 3 (16 th / 6,25%), Kel. 4 (20 th / 5%), Bangunan 20 th (5% Garis Lurus).',
          '**Withholding Tax**: PPh 22 Impor (API 2,5%, Non-API 7,5%), Bendahara (1,5%); PPh 23 Bunga/Royalti (15%), Sewa Mesin/Jasa (2%); PPh UMKM 0,5% (WP OP omzet s.d Rp 500jt bebas pajak).',
          '**PPh Final 4(2)**: Sewa Tanah/Bangunan 10%; Jual Beli Tanah 2,5%; Jasa Konstruksi Pelaksanaan SBU Kecil 1,75%, Menengah/Besar 2,65%, Non-SBU 4%.',
          '**Fasilitas 31E**: Diskon tarif 50% (efektif 11%) untuk porsi PKP dari omzet s.d Rp 4,8 Miliar (bagi WP Badan omzet < Rp 50 Miliar).'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS Perpajakan II',
    ref: 'Kompilasi TM 9 s.d TM 14 | PP 58/2023 TER PPh 21 | UU PPN UU HPP | Pajak Karbon',
    intro: 'Cheat sheet dan peta rumus esensial untuk menghadapi Ujian Akhir Semester Perpajakan II.',
    objectives: [
      'Menguasai Skema TER Bulanan & Pelunasan Masa Des PPh 21.',
      'Menguasai Rekonsiliasi Fiskal & SPT Badan 1771.',
      'Menguasai Mekanisme PPN 11%/12% & Pengkreditan Pajak Masukan.',
      'Memahami Kode Faktur Pajak e-Faktur & PPN WAPU.',
      'Menguasai Ketentuan Pajak Karbon UU HPP.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS Perpajakan II' },
      {
        kind: 'ul',
        items: [
          '**PPh 21 TER (PP 58/2023)**: Masa Jan-Nov = Bruto × TER (Kategori A/B/C); Masa Des = PKP Setahun × Tarif Pasal 17 - PPh Jan-Nov. Bukan Pegawai: DPP = 50% × Bruto.',
          '**Natura (PMK 66/2023)**: Objek PPh bagi penerima dan Deductible Expense bagi pemberi kerja (kecuali makanan bersama, seragam K3, sarana daerah terpencil).',
          '**Rekonsiliasi Fiskal**: Beda Tetap (Koreksi permanen) vs Beda Waktu (Penyusutan/amortisasi). Batas lapor SPT 1771: 30 April.',
          '**PPN & PPnBM**: PPN bersifat multi-stage indirect tax; PPnBM dipungut 1x di tingkat pabrikan/impor. Fasilitas Tidak Dipungut (PM dapat dikreditkan); Dibebaskan (PM tidak dapat dikreditkan).',
          '**e-Faktur (PER-03/2022)**: Kode 01 (Umum), 02 (Instansi Pemerintah), 03 (BUMN), 07 (Tidak Dipungut), 08 (Dibebaskan). Batas upload tanggal 15 bulan berikutnya. PM dapat dikreditkan maks 3 bulan berikutnya.',
          '**Pajak Karbon (UU HPP)**: Cap-and-Tax dengan tarif minimal Rp 30 / kg CO2e (Rp 30.000 / ton CO2e); terintegrasi dengan Bursa Karbon (IDXCarbon).'
        ]
      }
    ]
  }
};