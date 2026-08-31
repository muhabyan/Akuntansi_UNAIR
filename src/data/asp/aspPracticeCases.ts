// =============================================================
// src/data/asp/aspPracticeCases.ts
// Kasus Praktik Interaktif Akuntansi Sektor Publik (AKS201)
// Acuan: PP 71/2010 (SAP Berbasis Akrual), Permendagri 77/2020, ISAK 35
// =============================================================
import type { ContentBlock } from '../../types';

// -------------------------------------------------------------
// KASUS 1: Jurnal Finansial LO vs Jurnal Anggaran LRA (TM 7 & 9)
// -------------------------------------------------------------
export const CASE_GOVERNMENT_JOURNALS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Sistem Pembukuan Ganda (Dual Entry): Jurnal Finansial (LO) vs Jurnal Anggaran (LRA)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Transaksi Pembelian Kendaraan Dinas Dinas Kesehatan (SKPD)',
      text: 'Pada 15 Mei 2026, Dinas Kesehatan Pemkab Sejahtera membeli 2 unit mobil ambulans operasional seharga Rp 800.000.000 melalui mekanisme Surat Perintah Pencairan Dana Langsung (SP2D-LS) yang dibayarkan langsung oleh Rekening Kas Umum Daerah (BUD/PPKD) kepada rekanan vendor.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Pembahasan Jurnal Finansial Akrual vs Jurnal Anggaran Kas',
      prompt: 'Pahami mengapa SAP berbasis akrual menghasilkan dua pasang jurnal sekaligus:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Jurnal Finansial (Basis Akrual - Untuk Laporan Operasional & Neraca)'
        },
        {
          kind: 'p',
          text: 'Mencatat perolehan aset tetap ambulans di Neraca dan pengakuan transaksi timbal-balik dengan Kas Daerah (RK PPKD):'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Finansial SKPD (Neraca)',
          lines: [
            { account: 'Aset Tetap - Kendaraan Operasional / Ambulans', debit: 'Rp 800.000.000' },
            { account: 'R/K PPKD (Rekening Koran Pusat Kas Daerah)', credit: 'Rp 800.000.000', isCredit: true }
          ]
        },
        {
          kind: 'h3',
          text: '2. Jurnal Pelaksanaan Anggaran (Basis Kas - Untuk Laporan Realisasi Anggaran / LRA)'
        },
        {
          kind: 'p',
          text: 'Mencatat realisasi belanja modal pada DPA-SKPD yang mempengaruhi Saldo Anggaran Lebih (SAL):'
        },
        {
          kind: 'journal',
          caption: 'Jurnal Anggaran SKPD (LRA)',
          lines: [
            { account: 'Belanja Modal Pengadaan Kendaraan Operasional (LRA)', debit: 'Rp 800.000.000' },
            { account: 'Perubahan SAL (Estimasi Perubahan SAL)', credit: 'Rp 800.000.000', isCredit: true }
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 2: Pengukuran Kinerja Value for Money 3E (TM 10)
// -------------------------------------------------------------
export const CASE_VALUE_FOR_MONEY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Analisis Kinerja Value for Money (Ekonomi, Efisiensi, Efektivitas)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Program Imunisasi Anak Dinas Kesehatan',
      text: '• Anggaran Input Biaya Program: Rp 500.000.000 (Realisasi Input Aktual: Rp 450.000.000).\n• Target Output Pelayanan: 10.000 anak tervaksinasi (Realisasi Output Aktual: 12.000 anak).\n• Target Outcome Penurunan Kasus Campak: 80% penurunan (Realisasi Outcome: 90% penurunan kasus).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Tiga Rasio Value for Money',
      prompt: 'Evaluasi kinerja program sektor publik berbasis 3E:',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Rasio Ekonomis (Input Aktual / Anggaran Input)**: $\\frac{Rp\\ 450.000.000}{Rp\\ 500.000.000} = 90,0\\%$ *(EKONOMIS, karena realisasi biaya < 100% anggaran, hemat Rp 50jt)*.',
            '**2. Rasio Efisiensi (Input Aktual / Output Aktual)**: $\\frac{Rp\\ 450.000.000}{12.000\\ \\text{anak}} = Rp\\ 37.500\\ /\\text{anak}$ *(Dibandingkan standar anggaran Rp 50.000/anak $\\rightarrow$ SANGAT EFISIEN)*.',
            '**3. Rasio Efektivitas (Outcome Aktual / Target Outcome)**: $\\frac{90\\%}{80\\%} = 112,5\\%$ *(EFEKTIF, karena capaian manfaat melebihi 100% target dampak publik)*.'
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 3: Laporan Keuangan Entitas Nonlaba ISAK 35 (TM 2 & 12)
// -------------------------------------------------------------
export const CASE_NONPROFIT_ISAK35: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Penyusunan Laporan Penghasilan Komprehensif Nonlaba (ISAK 35)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Keuangan Yayasan Peduli Pendidikan',
      text: 'Sepanjang tahun 2026 yayasan menerima:\n1. Donasi umum masyarakat tanpa pembatasan dari pemberi donor: Rp 600.000.000.\n2. Hibah khusus dari CSR Korporasi dengan batasan terikat (hanya boleh untuk beasiswa mahasiswa yatim): Rp 400.000.000.\n3. Realisasi penyaluran beasiswa yatim sepanjang tahun: Rp 250.000.000.\n4. Beban operasional administrasi yayasan: Rp 150.000.000.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Reklasifikasi Aset Neto Terikat & Tidak Terikat',
      prompt: 'Pahami pemisahan Aset Neto Tanpa Pembatasan vs Dengan Pembatasan:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perubahan Aset Neto dengan Pembatasan Sumber Daya (With Donor Restrictions)'
        },
        {
          kind: 'ul',
          items: [
            'Penerimaan Hibah Beasiswa Terikat: +Rp 400.000.000',
            'Pelepasan Pembatasan (Reclassification due to satisfaction of program): (Rp 250.000.000)',
            '**Kenaikan Bersih Aset Neto dengan Pembatasan**: **+Rp 150.000.000**'
          ]
        },
        {
          kind: 'h3',
          text: '2. Perubahan Aset Neto Tanpa Pembatasan (Without Donor Restrictions)'
        },
        {
          kind: 'ul',
          items: [
            'Donasi Umum Tidak Terikat: +Rp 600.000.000',
            'Pindahan dari Pelepasan Pembatasan: +Rp 250.000.000',
            'Dikurangi Beban Beasiswa: (Rp 250.000.000)',
            'Dikurangi Beban Operasional Administrasi: (Rp 150.000.000)',
            '**Kenaikan Bersih Aset Neto Tanpa Pembatasan**: **+Rp 450.000.000**'
          ]
        }
      ]
    }
  ]
};