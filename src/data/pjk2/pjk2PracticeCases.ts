// =============================================================
// src/data/pjk2/pjk2PracticeCases.ts
// Kasus Praktik Interaktif Perpajakan II (PJK202 / PJK301)
// Acuan: UU HPP (UU 7/2021), PP 55/2022, PP 58/2023, PMK 168/2023, PMK 172/2023
// =============================================================
import type { ContentBlock } from '../../types';

// -------------------------------------------------------------
// KASUS 1: Perhitungan PPh 21 TER Skema Bulanan & Masa Des (TM 9 & 10)
// -------------------------------------------------------------
export const CASE_PPH21_TER: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Perhitungan PPh Pasal 21 Pegawai Tetap (Skema TER Bulanan & Masa Pajak Terakhir Des)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Profil Karyawan PT Graha Sejahtera',
      text: 'Bapak Rian (Status K/1: Kawin 1 Tanggungan $\\rightarrow$ Kategori TER A):\n• Gaji pokok + Tunjangan tetap: Rp 10.000.000 / bulan (Januari s.d November).\n• Iuran BPJS Ketenagakerjaan dibayar pemberi kerja (JKK & JKM): Rp 100.000 / bulan (Bruto = Rp 10.100.000/bln).\n• Pada bulan Desember 2026, Bapak Rian menerima bonus tahunan sebesar Rp 20.000.000 (Total Bruto Des = Rp 30.100.000).\n• Tarif Efektif Rata-rata (TER Kategori A untuk Bruto Rp 10.100.000) = **2,25%**.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan PPh 21 Masa Jan-Nov & Pelunasan Masa Des',
      prompt: 'Pahami mekanisme penerapan TER PP 58/2023 dan PMK 168/2023:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Pemotongan PPh 21 Masa Januari s.d November (Metode TER)'
        },
        {
          kind: 'formula',
          text: '\\text{PPh 21 per Bulan} = \\text{Penghasilan Bruto} \\times \\text{TER} = Rp\\ 10.100.000 \\times 2,25\\% = Rp\\ 227.250\\ /\\text{bulan}'
        },
        {
          kind: 'p',
          text: 'Total PPh 21 yang telah dipotong selama 11 bulan (Jan-Nov): $11 \\times Rp\\ 227.250 = \\mathbf{Rp\\ 2.499.750}$.'
        },
        {
          kind: 'h3',
          text: '2. Perhitungan PPh 21 Masa Desember (Metode Tarif Pasal 17 Tahunan)'
        },
        {
          kind: 'ul',
          items: [
            'Total Penghasilan Bruto Setahun: $(11 \\times Rp\\ 10.100.000) + Rp\\ 30.100.000 = Rp\\ 141.200.000$',
            'Pengurang Biaya Jabatan (5% maks Rp 6jt/thn): $(Rp\\ 6.000.000)$',
            'Penghasilan Neto Setahun: $Rp\\ 141.200.000 - Rp\\ 6.000.000 = Rp\\ 135.200.000$',
            'PTKP K/1 (WP Sendiri Rp 54jt + Kawin Rp 4,5jt + 1 Anak Rp 4,5jt): $(Rp\\ 63.000.000)$',
            '**Penghasilan Kena Pajak (PKP) Setahun**: $Rp\\ 135.200.000 - Rp\\ 63.000.000 = \\mathbf{Rp\\ 72.200.000}$'
          ]
        },
        {
          kind: 'h3',
          text: '3. PPh 21 Terutang Setahun (Lapisan Tarif Pasal 17 UU HPP)'
        },
        {
          kind: 'ul',
          items: [
            'Lapisan 1 (5% × Rp 60.000.000): $Rp\\ 3.000.000$',
            'Lapisan 2 (15% × Rp 12.200.000): $Rp\\ 1.830.000$',
            '**Total PPh 21 Terutang Setahun 2026**: **Rp 4.830.000**'
          ]
        },
        {
          kind: 'formula',
          text: '\\text{PPh 21 Masa Desember} = \\text{PPh Terutang Setahun} - \\text{PPh Jan-Nov} = Rp\\ 4.830.000 - Rp\\ 2.499.750 = Rp\\ 2.330.250',
          note: 'Pemotongan masa Desember menyelaraskan total pemotongan TER dengan beban pajak riil pasal 17 setahun.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 2: Rekonsiliasi Fiskal & PPh Badan Pasal 31E (TM 7 & 11)
// -------------------------------------------------------------
export const CASE_REKONSILIASI_FISKAL_31E: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Rekonsiliasi Fiskal & Perhitungan PPh Badan dengan Fasilitas Pasal 31E UU PPh',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Laporan Keuangan Komersial PT Cahaya Abadi (Peredaran Bruto = Rp 30.000.000.000)',
      text: '• Laba Bersih Komersial Sebelum Pajak: Rp 3.500.000.000\n• Biaya representasi/entertainment tanpa daftar nominatif: Rp 150.000.000 (Koreksi Positif)\n• Beban sanksi denda bunga STP Pajak: Rp 50.000.000 (Koreksi Positif)\n• Pendapatan bunga deposito bank (sudah dipotong PPh Final): Rp 200.000.000 (Koreksi Negatif)\n• Penyusutan komersial Rp 400jt, sedangkan Penyusutan fiskal Rp 500jt (Koreksi Negatif Rp 100jt).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Kertas Kerja Rekonsiliasi Fiskal & Perhitungan PPh Terutang',
      prompt: 'Hitung Penghasilan Kena Pajak dan manfaatkan fasilitas tarif reduksi 50%:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Kertas Kerja Rekonsiliasi Fiskal'
        },
        {
          kind: 'table',
          headers: ['Keterangan Rekonsiliasi', 'Nilai (Rp)', 'Sifat Koreksi Fiskal'],
          rows: [
            ['Laba Bersih Komersial Sebelum Pajak', 'Rp 3.500.000.000', 'Dasar Laba Akuntansi'],
            ['(+) Biaya Entertainment Tanpa Daftar Nominatif', '+Rp 150.000.000', 'Koreksi Positif Beda Tetap (Pasal 9)'],
            ['(+) Sanksi Denda Bunga Pajak', '+Rp 50.000.000', 'Koreksi Positif Beda Tetap (Pasal 9)'],
            ['(-) Pendapatan Bunga Deposito (PPh Final)', '-Rp 200.000.000', 'Koreksi Negatif Beda Tetap (Pasal 4(2))'],
            ['(-) Selisih Penyusutan Fiskal > Komersial', '-Rp 100.000.000', 'Koreksi Negatif Beda Waktu (PMK 72/2023)'],
            ['**Penghasilan Kena Pajak (PKP) Fiskal**', '**Rp 3.400.000.000**', '**Dasar Pengenaan Pajak**']
          ],
          caption: 'Tabel Rekonsiliasi Fiskal Laba Komersial ke Laba Fiskal.'
        },
        {
          kind: 'h3',
          text: '2. Perhitungan PPh Badan Fasilitas Pasal 31E (Omzet Rp 30 Miliar / Antara Rp 4,8M - Rp 50M)'
        },
        {
          kind: 'ul',
          items: [
            '**Porsi PKP Mendapat Fasilitas (Diskon Tarif 50%)**:\n$$\\text{PKP Fasilitas} = \\frac{Rp\\ 4.800.000.000}{\\text{Omzet Total}} \\times \\text{PKP} = \\frac{Rp\\ 4,8M}{Rp\\ 30M} \\times Rp\\ 3,4M = \\mathbf{Rp\\ 544.000.000}$$',
            '**Porsi PKP Tanpa Fasilitas (Tarif Normal 22%)**:\n$$\\text{PKP Non-Fasilitas} = Rp\\ 3.400.000.000 - Rp\\ 544.000.000 = \\mathbf{Rp\\ 2.856.000.000}$$'
          ]
        },
        {
          kind: 'h3',
          text: '3. Total PPh Badan Terutang'
        },
        {
          kind: 'formula',
          text: '\\text{PPh Terutang} = (50\\% \\times 22\\% \\times Rp\\ 544.000.000) + (22\\% \\times Rp\\ 2.856.000.000) = Rp\\ 59.840.000 + Rp\\ 628.320.000 = Rp\\ 688.160.000',
          note: 'Fasilitas Pasal 31E memberikan penghematan pajak sebesar Rp 59.840.000 kepada wajib pajak badan UMKM/menengah.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 3: Kredit Pajak Luar Negeri PPh Pasal 24 (TM 7)
// -------------------------------------------------------------
export const CASE_PPH24_FOREIGN_CREDIT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Kredit Pajak Luar Negeri PPh Pasal 24 (Per-Country Limitation)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Penghasilan Global PT Nusantara Global (Tarif PPh Badan 22%)',
      text: '• Penghasilan Neto Dalam Negeri: Rp 6.000.000.000\n• Penghasilan Luar Negeri dari Negara A: Rp 2.000.000.000 (Tarif Pajak Negara A = 15% $\\rightarrow$ Pajak dibayar di Negara A = Rp 300.000.000)\n• Penghasilan Luar Negeri dari Negara B: Rp 2.000.000.000 (Tarif Pajak Negara B = 30% $\\rightarrow$ Pajak dibayar di Negara B = Rp 600.000.000)\n• Total Penghasilan Kena Pajak Gabungan = Rp 10.000.000.000.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Batas Maksimum Kredit Pajak Luar Negeri (KMK)',
      prompt: 'Hitung batas kredit per negara (Ordinary Credit Per Country):',
      blocks: [
        {
          kind: 'h3',
          text: '1. Total PPh Terutang di Indonesia'
        },
        {
          kind: 'formula',
          text: '\\text{Total PPh Terutang} = 22\\% \\times Rp\\ 10.000.000.000 = Rp\\ 2.200.000.000'
        },
        {
          kind: 'h3',
          text: '2. Evaluasi Kredit Pajak Negara A'
        },
        {
          kind: 'ul',
          items: [
            'Batas Maksimum Kredit Pajak (BKM): $\\frac{Rp\\ 2M}{Rp\\ 10M} \\times Rp\\ 2.200.000.000 = \\mathbf{Rp\\ 440.000.000}$',
            'Pajak Aktual Dibayar di Negara A: $\\mathbf{Rp\\ 300.000.000}$',
            '**Kredit Pajak yang Boleh Dikreditkan (Pilih Terendah)**: **Rp 300.000.000**'
          ]
        },
        {
          kind: 'h3',
          text: '3. Evaluasi Kredit Pajak Negara B'
        },
        {
          kind: 'ul',
          items: [
            'Batas Maksimum Kredit Pajak (BKM): $\\frac{Rp\\ 2M}{Rp\\ 10M} \\times Rp\\ 2.200.000.000 = \\mathbf{Rp\\ 440.000.000}$',
            'Pajak Aktual Dibayar di Negara B: $\\mathbf{Rp\\ 600.000.000}$',
            '**Kredit Pajak yang Boleh Dikreditkan (Pilih Terendah)**: **Rp 440.000.000** *(Selisih Rp 160jt hangus dan tidak dapat dikembalikan/dikreditkan)*'
          ]
        },
        {
          kind: 'formula',
          text: '\\text{Total Kredit PPh 24 Boleh Dikurangkan} = Rp\\ 300.000.000 + Rp\\ 440.000.000 = Rp\\ 740.000.000'
        }
      ]
    }
  ]
};