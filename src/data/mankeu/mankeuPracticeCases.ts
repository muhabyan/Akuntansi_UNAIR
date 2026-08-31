// =============================================================
// src/data/mankeu/mankeuPracticeCases.ts
// Kasus Praktik Interaktif Manajemen Keuangan (MNK201)
// Acuan: Brigham & Houston, Fundamentals of Financial Management 15e/16e
// =============================================================
import type { ContentBlock } from '../../types';

// -------------------------------------------------------------
// KASUS 1: Analisis Rasio Keuangan & DuPont 3-Step (TM 2)
// -------------------------------------------------------------
export const CASE_DUPONT_ANALYSIS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Dekomposisi Profitabilitas Menggunakan Model DuPont 3 Tahap',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Keuangan PT Sinar Abadi',
      text: 'PT Sinar Abadi melaporkan kinerja keuangan tahun 2026 sebagai berikut:\n• Penjualan Bersih (Sales): Rp 50.000.000.000\n• Laba Bersih (Net Income): Rp 4.000.000.000\n• Total Aset Rata-rata: Rp 40.000.000.000\n• Total Ekuitas Rata-rata: Rp 20.000.000.000 (Total Utang = Rp 20.000.000.000).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan DuPont Equation & Analisis Pengungkit',
      prompt: 'Pahami cara membedah ROE menjadi 3 komponen pendorong kinerja:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perhitungan Tiga Komponen DuPont'
        },
        {
          kind: 'ul',
          items: [
            '**Profit Margin (Marjin Laba Bersih)**: $\\frac{\\text{Net Income}}{\\text{Sales}} = \\frac{Rp\\ 4M}{Rp\\ 50M} = 8,0\\%$ (Efisiensi Operasi)',
            '**Total Asset Turnover (Perputaran Total Aset)**: $\\frac{\\text{Sales}}{\\text{Total Assets}} = \\frac{Rp\\ 50M}{Rp\\ 40M} = 1,25\\times$ (Efisiensi Pemanfaatan Aset)',
            '**Equity Multiplier (Pengali Ekuitas)**: $\\frac{\\text{Total Assets}}{\\text{Total Equity}} = \\frac{Rp\\ 40M}{Rp\\ 20M} = 2,0\\times$ (Pengungkit Keuangan / Leverage)'
          ]
        },
        {
          kind: 'formula',
          text: 'ROE = \\text{Profit Margin} \\times \\text{Total Asset Turnover} \\times \\text{Equity Multiplier} = 8,0\\% \\times 1,25 \\times 2,0 = 20,0\\%',
          note: 'Return on Equity (ROE) sebesar 20% didorong oleh kemampuan menghasilkan marjin 8%, utilisasi aset 1,25x, dan penggandaan modal 2,0x.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 2: TVM & Skedul Amortisasi Pinjaman (TM 3)
// -------------------------------------------------------------
export const CASE_LOAN_AMORTIZATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Perhitungan Angsuran Anuitas & Skedul Amortisasi Pinjaman Bank',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Pinjaman Investasi',
      text: 'PT Surya Kencana meminjam Rp 300.000.000 dari bank dengan suku bunga 12% per tahun untuk jangka waktu 3 tahun. Pembayaran angsuran pokok dan bunga dilakukan seragam setiap akhir tahun (Ordinary Annuity). PVIFA (n=3, i=12%) = 2,40183.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Angsuran Tahunan & Tabel Amortisasi',
      prompt: 'Lihat bagaimana porsi pokok bertambah dan porsi bunga berkurang tiap tahun:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perhitungan Pembayaran Angsuran Tahunan (PMT)'
        },
        {
          kind: 'formula',
          text: 'PMT = \\frac{\\text{Pokok Pinjaman}}{PVIFA_{12\\%, 3}} = \\frac{Rp\\ 300.000.000}{2,40183} = Rp\\ 124.904.760\\ /\\text{tahun}'
        },
        {
          kind: 'table',
          headers: ['Tahun', 'Saldo Awal Pinjaman', 'Total Angsuran (PMT)', 'Porsi Bunga (12% × Saldo Awal)', 'Porsi Pelunasan Pokok', 'Saldo Akhir Pinjaman'],
          rows: [
            ['1', 'Rp 300.000.000', 'Rp 124.904.760', 'Rp 36.000.000', 'Rp 88.904.760', 'Rp 211.095.240'],
            ['2', 'Rp 211.095.240', 'Rp 124.904.760', 'Rp 25.331.429', 'Rp 99.573.331', 'Rp 111.521.909'],
            ['3', 'Rp 111.521.909', 'Rp 124.904.760', 'Rp 13.382.629', 'Rp 111.521.909', 'Rp 0']
          ],
          caption: 'Tabel Skedul Amortisasi Pinjaman 3 Tahun (Bunga 12%).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 3: Portofolio Beta & Model CAPM (TM 4)
// -------------------------------------------------------------
export const CASE_CAPM_PORTFOLIO: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Perhitungan Beta Portofolio & Tingkat Pengembalian yang Diisyaratkan (CAPM)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Portofolio Saham',
      text: 'Seorang manajer investasi mengelola portofolio senilai Rp 1.000.000.000 yang terdiri dari 3 saham:\n• Saham A: Investasi Rp 400jt (Bobot 40%), Beta (bA) = 1,50\n• Saham B: Investasi Rp 400jt (Bobot 40%), Beta (bB) = 0,80\n• Saham C: Investasi Rp 200jt (Bobot 20%), Beta (bC) = 1,10\n\nTingkat bebas risiko (Risk-Free Rate / rRF) = 6,0%, dan tingkat pengembalian pasar yang diharapkan (Expected Market Return / rM) = 12,0% (Premi Risiko Pasar = 6,0%).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Beta Portofolio & Required Rate of Return (SML)',
      prompt: 'Gunakan formula Capital Asset Pricing Model (CAPM):',
      blocks: [
        {
          kind: 'h3',
          text: '1. Hitung Rata-rata Tertimbang Beta Portofolio (bp)'
        },
        {
          kind: 'formula',
          text: 'b_p = (0,40 \\times 1,50) + (0,40 \\times 0,80) + (0,20 \\times 1,10) = 0,60 + 0,32 + 0,22 = 1,14'
        },
        {
          kind: 'h3',
          text: '2. Hitung Required Rate of Return Portofolio (r_p) dengan CAPM'
        },
        {
          kind: 'formula',
          text: 'r_p = r_{RF} + b_p(r_M - r_{RF}) = 6,0\\% + 1,14(12,0\\% - 6,0\\%) = 6,0\\% + 6,84\\% = 12,84\\%'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 4: Biaya Modal Rata-rata Tertimbang / WACC (TM 5)
// -------------------------------------------------------------
export const CASE_WACC_COMPREHENSIVE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Perhitungan Biaya Modal Rata-rata Tertimbang (WACC)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Struktur Modal Sasaran PT Megah Pratama',
      text: '• Utang Jangka Panjang (Debt): Bobot wd = 30%, Suku bunga sebelum pajak rd = 10%, Tarif Pajak T = 20%.\n• Saham Preferen (Preferred): Bobot wp = 10%, Harga jual pasar Rp 10.000/lbr, Dividen tahunan Rp 1.100/lbr, Biaya flotasi Rp 1.000/lbr (Kas bersih Rp 9.000).\n• Saham Biasa / Ekuitas (Common Equity): Bobot wc = 60%, Menggunakan CAPM dengan rRF = 6%, Market Return rM = 14%, Beta Saham b = 1,25.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Komponen Biaya & WACC Final',
      prompt: 'Pahami mengapa biaya utang harus disesuaikan dengan penghematan pajak:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Hitung Komponen Biaya Modal Individual'
        },
        {
          kind: 'ul',
          items: [
            '**Biaya Utang Setelah Pajak (After-tax Cost of Debt)**: $r_d(1 - T) = 10\\% \\times (1 - 0,20) = \\mathbf{8,0\\%}$',
            '**Biaya Saham Preferen**: $r_p = \\frac{D_p}{P_n} = \\frac{Rp\\ 1.100}{Rp\\ 9.000} = \\mathbf{12,22\\%}$',
            '**Biaya Ekuitas Saham Biasa (CAPM)**: $r_s = 6\\% + 1,25(14\\% - 6\\%) = 6\\% + 10\\% = \\mathbf{16,0\\%}$'
          ]
        },
        {
          kind: 'h3',
          text: '2. Hitung WACC'
        },
        {
          kind: 'formula',
          text: 'WACC = (w_d \\times r_d(1-T)) + (w_p \\times r_p) + (w_c \\times r_s) = (0,30 \\times 8,0\\%) + (0,10 \\times 12,22\\%) + (0,60 \\times 16,0\\%) = 2,40\\% + 1,22\\% + 9,60\\% = 13,22\\%',
          note: 'WACC sebesar 13,22% menjadi hurdle rate (tingkat diskonto minimum) untuk mengevaluasi usulan proyek investasi baru.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 5: Capital Budgeting: NPV vs IRR (TM 6)
// -------------------------------------------------------------
export const CASE_CAPITAL_BUDGETING_EVAL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Evaluasi Penganggaran Modal (NPV, IRR, Payback, & Konflik Proyek Mutually Exclusive)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Arus Kas Dua Proyek Mutually Exclusive (WACC = 10%)',
      text: '• **Proyek A**: Investasi Awal (Tahun 0) = (Rp 1.000.000.000). Arus kas masuk: Tahun 1 = Rp 500jt, Tahun 2 = Rp 400jt, Tahun 3 = Rp 300jt, Tahun 4 = Rp 200jt.\n• **Proyek B**: Investasi Awal (Tahun 0) = (Rp 1.000.000.000). Arus kas masuk: Tahun 1 = Rp 100jt, Tahun 2 = Rp 300jt, Tahun 3 = Rp 500jt, Tahun 4 = Rp 800jt.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan Metrik Penganggaran Modal & Keputusan Investasi',
      prompt: 'Gunakan kriteria NPV sebagai pedoman tertinggi jika terjadi konflik:',
      blocks: [
        {
          kind: 'table',
          headers: ['Metrik Evaluasi', 'Proyek A (Arus Kas Cepat)', 'Proyek B (Arus Kas Lambat)', 'Kriteria Keputusan'],
          rows: [
            ['1. Payback Period', '2,33 Tahun', '3,13 Tahun', 'Proyek A lebih cepat balik modal.'],
            ['2. Net Present Value (NPV @ 10%)', 'Rp 175.760.000', 'Rp 251.350.000', 'Proyek B menghasilkan nilai tambah kekayaan lebih besar!'],
            ['3. Internal Rate of Return (IRR)', '18,82%', '17,80%', 'Proyek A memiliki persentase imbal hasil lebih tinggi.'],
            ['4. Keputusan Final Mutually Exclusive', 'Ditolak', '**DIPILIH (Proyek B)**', '**ATURAN EMAS**: Jika ada konflik antara NPV dan IRR pada proyek mutually exclusive, **SELALU PILIH PROYEK DENGAN NPV TERTINGGI** karena memaksimumkan kekayaan pemegang saham!']
          ],
          caption: 'Tabel Perbandingan Kriteria Evaluasi Proyek A vs Proyek B.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 6: Struktur Modal & Derajat Leverage (TM 9)
// -------------------------------------------------------------
export const CASE_LEVERAGE_DTL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Analisis Pengungkit Operasi (DOL), Keuangan (DFL), dan Total (DTL)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Laporan Laba Rugi Operasi PT Dinamika Industri',
      text: '• Penjualan: Rp 20.000.000.000\n• Total Biaya Variabel (VC): Rp 12.000.000.000 (Marjin Kontribusi = Rp 8.000.000.000)\n• Total Biaya Tetap Operasi (FC): Rp 4.000.000.000 (EBIT = Rp 4.000.000.000)\n• Beban Bunga Utang Tahunan (I): Rp 1.500.000.000 (EBT = Rp 2.500.000.000).',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan DOL, DFL, dan DTL',
      prompt: 'Pahami bagaimana biaya tetap memperbesar sensitivitas laba per saham terhadap omzet:',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Degree of Operating Leverage (DOL)**: $\\frac{\\text{Marjin Kontribusi}}{\\text{EBIT}} = \\frac{Rp\\ 8M}{Rp\\ 4M} = \\mathbf{2,0\\times}$ *(Setiap 1% kenaikan penjualan menaikkan EBIT sebesar 2%)*',
            '**Degree of Financial Leverage (DFL)**: $\\frac{\\text{EBIT}}{\\text{EBIT} - I} = \\frac{Rp\\ 4M}{Rp\\ 2,5M} = \\mathbf{1,6\\times}$ *(Setiap 1% kenaikan EBIT menaikkan EBT/EPS sebesar 1,6%)*',
            '**Degree of Total Leverage (DTL)**: $\\text{DOL} \\times \\text{DFL} = 2,0 \\times 1,6 = \\mathbf{3,2\\times}$ *(Setiap 1% kenaikan penjualan menaikkan EPS sebesar 3,2%)*'
          ]
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 7: Siklus Konversi Kas & Biaya Diskon Kredit Dagang (TM 11 & 12)
// -------------------------------------------------------------
export const CASE_WORKING_CAPITAL_TRADE_CREDIT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Siklus Konversi Kas (CCC) & Biaya Melepas Diskon Kas (Cost of Trade Credit)',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Data Operasi PT Logistik Cepat',
      text: '1. **Siklus Kas**: Rata-rata Umur Persediaan (DII) = 60 hari. Rata-rata Periode Penagihan Piutang (DSO) = 45 hari. Rata-rata Periode Pembayaran Utang Dagang (DPO) = 35 hari.\n2. **Kredit Dagang Vendor**: Syarat pembayaran pembelian bahan baku adalah 2/10, net 30. Perusahaan mempertimbangkan untuk melepas diskon 2% dan membayar pada hari ke-30.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Perhitungan CCC & Nominal Annual Cost of Trade Credit',
      prompt: 'Hitung siklus putaran kas dan biaya bunga tersirat dari melepas diskon:',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perhitungan Cash Conversion Cycle (CCC)'
        },
        {
          kind: 'formula',
          text: 'CCC = \\text{Days Inventory (DII)} + \\text{Days Sales (DSO)} - \\text{Days Payable (DPO)} = 60 + 45 - 35 = 70\\ \\text{hari}',
          note: 'Perusahaan membutuhkan pembiayaan modal kerja eksternal selama 70 hari sejak kas keluar membayar bahan baku hingga kas masuk dari pelanggan.'
        },
        {
          kind: 'h3',
          text: '2. Biaya Tahunan Melepas Diskon Kas (Nominal Cost of Trade Credit)'
        },
        {
          kind: 'formula',
          text: '\\text{Nominal Annual Cost} = \\frac{\\%\\ \\text{Diskon}}{100 - \\%\\ \\text{Diskon}} \\times \\frac{365}{\\text{Jatuh Tempo} - \\text{Hari Diskon}} = \\frac{2}{98} \\times \\frac{365}{30 - 10} = 2,04\\% \\times 18,25 = 37,24\\%\\ /\\text{tahun}',
          note: 'Biaya melepas diskon sangat mahal (37,24% per tahun). Jika bunga pinjaman bank hanya 12%, perusahaan sebaiknya meminjam ke bank untuk mengambil diskon vendor!'
        }
      ]
    }
  ]
};