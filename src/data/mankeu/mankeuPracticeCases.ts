// src/data/mankeu/mankeuPracticeCases.ts
// 14 Studi Kasus Riil Komprehensif Manajemen Keuangan (MNK201)
// Berdasarkan Standar Brigham & Ehrhardt (Financial Management 15e/16e)
import type { ContentBlock } from '../../types';

// TM 1
export const CASE_AGENCY_CORPORATE_GOVERNANCE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Konflik Keagenan & Desain Insentif Manajemen di PT Kalbe Prima',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dewan Komisaris PT Kalbe Prima mengamati bahwa Direktur Utama cenderung menolak proyek investasi R&D berisiko tinggi yang memiliki NPV sangat positif jangka panjang demi mengejar laba kuartalan agar bonus tahunan tunai tercapai. Pemegang saham menginginkan maksimalisasi nilai intrinsik jangka panjang, sementara manajer mengutamakan perlindungan bonus jangka pendek (Horizon Problem).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Identifikasi jenis konflik keagenan yang terjadi, (2) Jelaskan 3 mekanisme tata kelola (Corporate Governance) untuk menyelaraskan kepentingan manajer dan pemegang saham, dan (3) Evaluasi dampak Employee Stock Option Plan (ESOP) vesting 4 tahun.',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Identifikasi Konflik Keagenan**: Terjadi *Agency Conflict between Stockholders and Managers* (Horizon Problem & Risk Aversion). Manajer memilih proyek jangka pendek berisiko rendah yang mengamankan bonus tahunan, mengorbankan proyek ber-NPV positif yang meningkatkan kekayaan pemegang saham jangka panjang.',
            '**2. Tiga Mekanisme Corporate Governance**: (a) *Struktur Kompensasi Berbasis Saham (Performance Shares / Stock Options)* untuk mengikat insentif kekayaan manajer dengan harga saham jangka panjang, (b) *Intervensi Langsung Pemegang Saham Institusional* dan pengawasan aktif oleh Komite Audit independen, (c) *Ancaman Pengambilalihan Secara Paksa (Hostile Takeover Threat)* yang mendisiplinkan manajemen berkinerja buruk.',
            '**3. Evaluasi ESOP dengan Masa Vesting 4 Tahun**: Opsi saham vesting 4 tahun mewajibkan manajer bertahan dan meningkatkan nilai perusahaan setidaknya 4 tahun sebelum opsi dapat dieksekusi. Hal ini secara efektif mengatasi horizon problem karena manajer termotivasi memilih proyek investasi jangka panjang ber-NPV positif.'
          ]
        }
      ]
    }
  ]
};

// TM 2
export const CASE_DUPONT_ANALYSIS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Analisis Kinerja Keuangan & Dekomposisi 3-Step DuPont PT Indofood vs PT Mayora',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Indofood Makmur dan PT Mayora Indah bersaing ketat di industri makanan kemasan (FMCG). Data keuangan tahun 2026 menunjukkan:\n- PT Indofood: Penjualan = Rp 100 Triliun; Laba Bersih = Rp 8 Triliun; Total Aset = Rp 80 Triliun; Total Ekuitas = Rp 40 Triliun.\n- PT Mayora: Penjualan = Rp 60 Triliun; Laba Bersih = Rp 6 Triliun; Total Aset = Rp 30 Triliun; Total Ekuitas = Rp 12 Triliun.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung dan dekomposisikan Return on Equity (ROE) kedua perusahaan menggunakan formula 3-Step DuPont Analysis (Net Profit Margin, Total Asset Turnover, Equity Multiplier). Evaluasi strategi keuangan mana yang mendorong ROE masing-masing perusahaan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dekomposisi DuPont PT Indofood**:\n- Net Profit Margin (NPM) = Rp 8T / Rp 100T = **8,0%**.\n- Total Asset Turnover (TATO) = Rp 100T / Rp 80T = **1,25x**.\n- Equity Multiplier (EM) = Total Aset / Ekuitas = Rp 80T / Rp 40T = **2,00x**.\n- ROE Indofood = 8,0% × 1,25 × 2,00 = **20,0%** (atau ROA = 10,0% × 2,00).',
            '**2. Dekomposisi DuPont PT Mayora**:\n- Net Profit Margin (NPM) = Rp 6T / Rp 60T = **10,0%**.\n- Total Asset Turnover (TATO) = Rp 60T / Rp 30T = **2,00x**.\n- Equity Multiplier (EM) = Total Aset / Ekuitas = Rp 30T / Rp 12T = **2,50x**.\n- ROE Mayora = 10,0% × 2,00 × 2,50 = **50,0%** (atau ROA = 20,0% × 2,50).',
            '**3. Evaluasi Strategis**: PT Mayora menghasilkan ROE jauh lebih tinggi (50% vs 20%) karena unggul di seluruh 3 dimensi: efisiensi operasional lebih baik (NPM 10% vs 8%), efisiensi perputaran aset lebih cepat (TATO 2,0x vs 1,25x), serta penggunaan leverage keuangan yang lebih agresif (EM 2,5x vs 2,0x).'
          ]
        }
      ]
    }
  ]
};

// TM 3
export const CASE_TVM_LOAN_AMORTIZATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Skedul Amortisasi Utang Bank & Tingkat Bunga Efektif (EAR) PT Medco Prima',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Medco Prima memperoleh pinjaman investasi bank sebesar Rp 10.000.000.000 (10 Miliar) dengan jangka waktu 4 tahun. Tingkat bunga nominal tahunan adalah 12% per tahun dibayarkan secara cicilan tetap tahunan pada setiap akhir tahun (Ordinary Annuity). Bank juga menawarkan opsi pembayaran kuartalan dengan suku bunga nominal yang sama (12% per tahun, compounded quarterly).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Angsuran tahunan tetap (PMT) untuk skema tahunan, (2) Buat skedul amortisasi lengkap (Bunga, Pokok, Saldo Akhir) selama 4 tahun, dan (3) Hitung Tingkat Suku Bunga Efektif Tahunan (Effective Annual Rate / EAR) jika memilih opsi majemuk kuartalan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Perhitungan Angsuran Tahunan (PMT)**:\nRumus: $PMT = \\frac{PV}{PVIFA_{12\\%, 4}} = \\frac{10.000.000.000}{\\frac{1 - (1+0,12)^{-4}}{0,12}} = \\frac{10.000.000.000}{3,037349} = \\mathbf{Rp 3.292.344.400}$ per tahun.',
            '**2. Skedul Amortisasi Pinjaman**:\n- **Tahun 1**: Saldo Awal = Rp 10 M; Bunga (12%) = Rp 1.200.000.000; Pokok = Rp 2.092.344.400; Saldo Akhir = **Rp 7.907.655.600**.\n- **Tahun 2**: Saldo Awal = Rp 7.907.655.600; Bunga (12%) = Rp 948.918.672; Pokok = Rp 2.343.425.728; Saldo Akhir = **Rp 5.564.229.872**.\n- **Tahun 3**: Saldo Awal = Rp 5.564.229.872; Bunga (12%) = Rp 667.707.585; Pokok = Rp 2.624.636.815; Saldo Akhir = **Rp 2.939.593.057**.\n- **Tahun 4**: Saldo Awal = Rp 2.939.593.057; Bunga (12%) = Rp 352.751.343; Pokok = Rp 2.939.593.057; Saldo Akhir = **Rp 0** (Lunas).',
            '**3. Perhitungan EAR Kuartalan**:\n$EAR = \\left(1 + \\frac{r_{Nom}}{m}\\right)^m - 1 = \\left(1 + \\frac{0,12}{4}\\right)^4 - 1 = (1,03)^4 - 1 = 1,1255088 - 1 = \\mathbf{12,55\\%}$. Suku bunga efektif lebih tinggi 0,55% dibanding nominal karena efek bunga berbunga kuartalan.'
          ]
        }
      ]
    }
  ]
};

// TM 4
export const CASE_CAPM_PORTFOLIO_RISK: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Analisis Beta Portofolio, SML, & Valuasi Saham CAPM PT Astra & PT Telkom',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Manajer Investasi mengelola portofolio senilai Rp 100 Miliar yang terdiri dari 3 saham:\n- Saham A (Astra): Investasi Rp 40 Miliar, Beta $\\beta_A = 1,20$, Ekspektasi Return Analis = 14,0%.\n- Saham B (Telkom): Investasi Rp 40 Miliar, Beta $\\beta_B = 0,80$, Ekspektasi Return Analis = 11,0%.\n- Saham C (Bank BCA): Investasi Rp 20 Miliar, Beta $\\beta_C = 1,50$, Ekspektasi Return Analis = 16,0%.\nData pasar: Risk-free rate ($r_{RF}$) = 6,0%, Market Return ($r_M$) = 12,0% (Equity Risk Premium = 6,0%).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Beta Portofolio ($\\beta_p$), (2) Required Rate of Return masing-masing saham menurut CAPM, dan (3) Tentukan apakah masing-masing saham Undervalued, Fairly Valued, atau Overvalued!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Bobot dan Beta Portofolio**:\n- Bobot: $w_A = 40\\%$, $w_B = 40\\%$, $w_C = 20\\%$.\n- $\\beta_p = (0,40 \\times 1,20) + (0,40 \\times 0,80) + (0,20 \\times 1,50) = 0,48 + 0,32 + 0,30 = \\mathbf{1,10}$.',
            '**2. Required Rate of Return CAPM ($r_i = r_{RF} + \\beta_i (r_M - r_{RF})$)**:\n- Saham A: $r_A = 6,0\\% + 1,20(12,0\\% - 6,0\\%) = 6,0\\% + 7,2\\% = \\mathbf{13,2\\%}$.\n- Saham B: $r_B = 6,0\\% + 0,80(6,0\\%) = 6,0\\% + 4,8\\% = \\mathbf{10,8\\%}$.\n- Saham C: $r_C = 6,0\\% + 1,50(6,0\\%) = 6,0\\% + 9,0\\% = \\mathbf{15,0\\%}$.',
            '**3. Evaluasi Valuasi Saham**:\n- **Saham A**: Ekspektasi Return (14,0%) > CAPM (13,2%) $\\rightarrow$ Terletak di atas SML $\\rightarrow$ **Undervalued (Layak Dibeli / Buy)**.\n- **Saham B**: Ekspektasi Return (11,0%) > CAPM (10,8%) $\\rightarrow$ Terletak di atas SML $\\rightarrow$ **Undervalued (Layak Dibeli / Buy)**.\n- **Saham C**: Ekspektasi Return (16,0%) > CAPM (15,0%) $\\rightarrow$ Terletak di atas SML $\\rightarrow$ **Undervalued (Layak Dibeli / Buy)**.'
          ]
        }
      ]
    }
  ]
};

// TM 5
export const CASE_WACC_COMPREHENSIVE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Struktur Modal Target & Biaya Modal Rata-rata Tertimbang (WACC) PT Barito Renewables',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Barito Renewables merencanakan proyek ekspansi PLT Panas Bumi senilai Rp 50 Triliun. Struktur modal target perusahaan adalah 40% Utang Jangka Panjang, 10% Saham Preferen, dan 50% Saham Biasa. Tarif pajak korporasi adalah 22%. Data pasar modal:\n- Utang: Perusahaan dapat menerbitkan obligasi kupon 9,0% per tahun pada nilai nominal (Yield to Maturity $r_d = 9,0\\%$).\n- Saham Preferen: Dijual seharga Rp 10.000 per lembar, dividen tetap Rp 900 per lembar, flotation cost Rp 200 per lembar.\n- Saham Biasa: Harga pasar saham saat ini $P_0 = Rp 5.000$; Dividen tahun depan $D_1 = Rp 350$; Tingkat pertumbuhan dividen konstan $g = 6,0\\%$.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) After-tax cost of debt ($r_d(1-T)$), (2) Cost of preferred stock ($r_p$), (3) Cost of common equity ($r_s$ via DCF), dan (4) Nilai WACC perusahaan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. After-Tax Cost of Debt**:\n$r_{d, after-tax} = r_d \\times (1 - T) = 9,0\\% \\times (1 - 0,22) = 9,0\\% \\times 0,78 = \\mathbf{7,02\\%}$.',
            '**2. Cost of Preferred Stock**:\n$r_p = \\frac{D_p}{P_n} = \\frac{Rp 900}{Rp 10.000 - Rp 200} = \\frac{900}{9.800} = \\mathbf{9,18\\%}$.',
            '**3. Cost of Common Equity (DCF / Gordon Growth Model)**:\n$r_s = \\frac{D_1}{P_0} + g = \\frac{Rp 350}{Rp 5.000} + 6,0\\% = 7,0\\% + 6,0\\% = \\mathbf{13,00\\%}$.',
            '**4. Perhitungan WACC**:\n$WACC = (w_d \\times r_d(1-T)) + (w_p \\times r_p) + (w_s \\times r_s)$\n$WACC = (0,40 \\times 7,02\\%) + (0,10 \\times 9,18\\%) + (0,50 \\times 13,00\\%)$\n$WACC = 2,808\\% + 0,918\\% + 6,500\\% = \\mathbf{10,226\\% \\approx 10,23\\%}$. Proyek investasi hanya layak diterima jika menghasilkan return > 10,23%.'
          ]
        }
      ]
    }
  ]
};

// TM 6
export const CASE_CAPITAL_BUDGETING_EVAL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Evaluasi Proyek Mutually Exclusive: NPV, IRR, MIRR, & Crossover Rate PT Semen Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Semen Indonesia mempertimbangkan dua proyek pabrik ramah lingkungan yang bersifat saling meniadakan (Mutually Exclusive). Biaya modal (WACC) = 10%.\n- Proyek A (Solar Power Plant): Initial Outlay $CF_0 = -Rp 1.000$ Juta; Arus Kas Tahun 1-4: Tahun 1 = Rp 500 Jt; Tahun 2 = Rp 400 Jt; Tahun 3 = Rp 300 Jt; Tahun 4 = Rp 100 Jt.\n- Proyek B (Waste Heat Recovery): Initial Outlay $CF_0 = -Rp 1.000$ Juta; Arus Kas Tahun 1-4: Tahun 1 = Rp 100 Jt; Tahun 2 = Rp 300 Jt; Tahun 3 = Rp 400 Jt; Tahun 4 = Rp 675 Jt.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Net Present Value (NPV) masing-masing proyek pada WACC 10%, (2) Internal Rate of Return (IRR), (3) Payback Period, dan (4) Tentukan proyek mana yang harus dipilih beserta justifikasi akademiknya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Perhitungan NPV pada WACC 10%**:\n- **Proyek A**: $NPV_A = -1.000 + \\frac{500}{1,10} + \\frac{400}{1,10^2} + \\frac{300}{1,10^3} + \\frac{100}{1,10^4} = -1.000 + 454,55 + 330,58 + 225,39 + 68,30 = \\mathbf{+Rp 78,82 \\text{ Juta}}$.\n- **Proyek B**: $NPV_B = -1.000 + \\frac{100}{1,10} + \\frac{300}{1,10^2} + \\frac{400}{1,10^3} + \\frac{675}{1,10^4} = -1.000 + 90,91 + 247,93 + 300,53 + 461,03 = \\mathbf{+Rp 100,40 \\text{ Juta}}$.',
            '**2. Perhitungan IRR**:\n- **IRR Proyek A**: $\\approx \\mathbf{14,49\\%}$.\n- **IRR Proyek B**: $\\approx \\mathbf{13,51\\%}$.',
            '**3. Payback Period**:\n- **Proyek A**: Tahun 1 (500) + Tahun 2 (400) = 900. Sisa 100 di Tahun 3 $\\rightarrow$ $Payback = 2 + \\frac{100}{300} = \\mathbf{2,33 \\text{ Tahun}}$.\n- **Proyek B**: Tahun 1 (100) + Tahun 2 (300) + Tahun 3 (400) = 800. Sisa 200 di Tahun 4 $\\rightarrow$ $Payback = 3 + \\frac{200}{675} = \\mathbf{3,30 \\text{ Tahun}}$.',
            '**4. Keputusan & Justifikasi**: Terjadi konflik peringkat antara NPV ($NPV_B > NPV_A$) dan IRR ($IRR_A > IRR_B$). Sesuai teori keuangan korporasi, untuk proyek *Mutually Exclusive*, kriteria **NPV adalah raja (Superior Rule)** karena mengukur penambahan nilai kekayaan absolut bagi pemegang saham dengan asumsi reinvestasi wajar pada WACC. Maka, **PILIH PROYEK B**.'
          ]
        }
      ]
    }
  ]
};

// TM 7
export const CASE_CASHFLOW_RISK_ANALYSIS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Estimasi Arus Kas Relevan, Efek Pajak Depresiasi, & Terminal Cash Flow PT United Tractors',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT United Tractors mempertimbangkan pengadaan mesin alat berat senilai Rp 8.000.000.000. Biaya pengiriman dan instalasi = Rp 500.000.000. Tambahan modal kerja bersih (NWC) yang dibutuhkan = Rp 500.000.000. Umur ekonomis proyek = 4 tahun. Mesin disusutkan menggunakan metode Garis Lurus hingga nilai sisa buku Rp 500.000.000. Proyek menghasilkan kenaikan pendapatan sebelum depresiasi dan pajak (EBDIT) sebesar Rp 4.000.000.000 per tahun. Pada akhir tahun ke-4, mesin diperkirakan dapat dijual seharga Rp 1.500.000.000 di pasar sekunder, dan NWC dicairkan kembali 100%. Tarif pajak korporasi = 22%. WACC = 12%.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Initial Outlay ($CF_0$), (2) Annual Operating Cash Flow ($OCF$) Tahun 1-4, (3) Terminal Cash Flow ($TCF$) Akhir Tahun 4, dan (4) NPV Proyek!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Initial Outlay ($CF_0$)**:\nBasis Depresiasi Mesin = Harga Beli (Rp 8.000 Jt) + Instalasi (Rp 500 Jt) = Rp 8.500 Juta.\n$CF_0 = -(\\text{Basis Mesin} + \\text{NWC}) = -(8.500 + 500) = \\mathbf{-Rp 9.000.000.000}$.',
            '**2. Annual Depresiasi & Operating Cash Flow (OCF)**:\n- Depresiasi per tahun = $(8.500 - 500) / 4 = \\mathbf{Rp 2.000.000.000}$ per tahun.\n- $EBIT = EBDIT - \\text{Depresiasi} = 4.000 - 2.000 = Rp 2.000.000.000$.\n- Pajak (22%) = $0,22 \\times 2.000 = Rp 440.000.000$.\n- $NOPAT = 2.000 - 440 = Rp 1.560.000.000$.\n- $OCF = NOPAT + \\text{Depresiasi} = 1.560 + 2.000 = \\mathbf{Rp 3.560.000.000}$ per tahun.',
            '**3. Terminal Cash Flow ($TCF$) Tahun 4**:\n- Nilai Jual Pasar = Rp 1.500 Juta; Nilai Buku Akhir = Rp 500 Juta $\\rightarrow$ Gain = Rp 1.000 Juta.\n- Pajak atas Gain = $22\\% \\times 1.000 = Rp 220.000.000$.\n- Arus Kas Bersih Salvage = $1.500 - 220 = Rp 1.280.000.000$.\n- Pengembalian NWC = Rp 500.000.000.\n- $TCF = 1.280 + 500 = \\mathbf{Rp 1.780.000.000}$. Total Arus Kas Tahun 4 = $3.560 + 1.780 = Rp 5.340.000.000$.',
            '**4. Perhitungan NPV Proyek**:\n$NPV = -9.000 + \\frac{3.560}{1,12^1} + \\frac{3.560}{1,12^2} + \\frac{3.560}{1,12^3} + \\frac{5.340}{1,12^4}$\n$NPV = -9.000 + 3.178,57 + 2.837,97 + 2.533,90 + 3.393,65 = \\mathbf{+Rp 2.944.090.000}$. Proyek Sangat Layak Diterima.'
          ]
        }
      ]
    }
  ]
};

// TM 8
export const CASE_UTS_MANKEU_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Integrasi Valuasi Multi-Periode & Keputusan Penganggaran Modal PT Aneka Tambang Tbk',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Aneka Tambang Tbk menghadapi penawaran proyek hilirisasi nikel berumur 3 tahun. Analisis sensitivitas menyajikan probabilitas: Skenario Optimis (30%, NPV = Rp 150 M), Skenario Moderat (50%, NPV = Rp 60 M), Skenario Pesimis (20%, NPV = -Rp 40 M). Direksi meminta tim finansial menyusun parameter risiko portofolio komprehensif.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Expected NPV ($E(NPV)$), (2) Varians dan Standar Deviasi ($\\sigma$), (3) Koefisien Variasi ($CV$), dan (4) Jelaskan kegunaan CV saat membandingkan proyek dengan skala investasi berbeda!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Expected NPV**:\n$E(NPV) = (0,30 \\times 150) + (0,50 \\times 60) + (0,20 \\times -40) = 45 + 30 - 8 = \\mathbf{Rp 67,00 \\text{ Miliar}}$.',
            '**2. Varians & Standar Deviasi**:\n- $\\sigma^2 = 0,30(150-67)^2 + 0,50(60-67)^2 + 0,20(-40-67)^2$\n- $\\sigma^2 = 0,30(6.889) + 0,50(49) + 0,20(11.449) = 2.066,7 + 24,5 + 2.289,8 = 4.381,0$.\n- $\\sigma = \\sqrt{4.381,0} = \\mathbf{Rp 66,19 \\text{ Miliar}}$.',
            '**3. Koefisien Variasi (Coefficient of Variation)**:\n$CV = \\frac{\\sigma}{E(NPV)} = \\frac{66,19}{67,00} = \\mathbf{0,9879 \\approx 0,99}$.',
            '**4. Kegunaan CV**: Koefisien Variasi mengukur risiko per unit return yang diharapkan ($Risk / Return$). Hal ini sangat krusial saat membandingkan dua proyek dengan skala investasi atau expected return yang berbeda, di mana standar deviasi absolut saja dapat memberikan kesimpulan yang bias.'
          ]
        }
      ]
    }
  ]
};

// TM 9
export const CASE_CAPITAL_STRUCTURE_LEVERAGE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Teori Struktur Modal Modigliani-Miller dengan Pajak & Persamaan Hamada PT Bukit Asam',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Bukit Asam saat ini merupakan perusahaan 100% ekuitas (Unlevered Firm) dengan total nilai pasar $V_U = Rp 20.000.000.000.000$ (20 Triliun) dan Unlevered Beta $\\beta_U = 0,90$. Perusahaan merencanakan rekapitalisasi dengan menerbitkan obligasi jangka panjang sebesar $D = Rp 6.000.000.000.000$ (6 Triliun) untuk membeli kembali saham beredar. Tarif pajak korporasi $T = 22\\%$. Suku bunga bebas risiko $r_{RF} = 6,0\\%$, Market Risk Premium $(r_M - r_{RF}) = 6,0\\%$.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Nilai perusahaan setelah menggunakan utang ($V_L$ menurut MM dengan Pajak), (2) Levered Beta ($\\beta_L$) menggunakan Persamaan Hamada, dan (3) Biaya Ekuitas baru ($r_{sL}$) menurut CAPM!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Nilai Perusahaan Berutang (MM Proposition I with Taxes)**:\n$V_L = V_U + (T \\times D) = Rp 20.000 \\text{ Triliun} + (0,22 \\times Rp 6.000 \\text{ Triliun}) = 20.000 + 1.320 = \\mathbf{Rp 21.320.000.000.000}$ (21,32 Triliun).\nNilai ekuitas baru $S = V_L - D = 21.320 - 6.000 = Rp 15.320 \\text{ Triliun}$.',
            '**2. Levered Beta (Hamada Equation)**:\n$\\beta_L = \\beta_U \\left[1 + (1 - T)\\left(\\frac{D}{S}\\right)\\right] = 0,90 \\left[1 + (1 - 0,22)\\left(\\frac{6.000}{15.320}\\right)\\right] = 0,90 [1 + 0,78(0,3916)] = 0,90(1 + 0,3055) = \\mathbf{1,175}$.',
            '**3. Biaya Ekuitas Baru ($r_{sL}$)**:\n$r_{sL} = r_{RF} + \\beta_L(r_M - r_{RF}) = 6,0\\% + 1,175(6,0\\%) = 6,0\\% + 7,05\\% = \\mathbf{13,05\\%}$. Biaya ekuitas meningkat dari $11,40\\%$ ($6\\% + 0,9 \\times 6\\%$) menjadi $13,05\\%$ akibat penambahan risiko finansial (Financial Leverage Risk).'
          ]
        }
      ]
    }
  ]
};

// TM 10
export const CASE_DIVIDEND_POLICY_REPURCHASE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Model Dividen Residual vs Share Repurchase di PT Bank Rakyat Indonesia Tbk',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Bank Rakyat Indonesia Tbk memproyeksikan laba bersih tahun 2026 sebesar Rp 60 Triliun. Target struktur modal optimal adalah 60% Ekuitas dan 40% Utang. Perusahaan memiliki anggaran belanja modal (Capital Budget) untuk digital banking senilai Rp 50 Triliun.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Kebutuhan ekuitas untuk mendanai Capital Budget, (2) Total dividen yang dibagikan menurut Residual Dividend Model, (3) Dividend Payout Ratio, dan (4) Bandingkan dampak fleksibilitas kas antara pembagian dividen tunai vs share buyback!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kebutuhan Ekuitas Baru**:\nEkuitas yang Dibutuhkan = Target Bobot Ekuitas × Capital Budget = $60\\% \\times Rp 50 \\text{ Triliun} = \\mathbf{Rp 30 \\text{ Triliun}}$.',
            '**2. Total Dividen Residual**:\nDividen = Laba Bersih - Ekuitas yang Dibutuhkan = $Rp 60 \\text{ Triliun} - Rp 30 \\text{ Triliun} = \\mathbf{Rp 30 \\text{ Triliun}}$.',
            '**3. Dividend Payout Ratio (DPR)**:\n$DPR = \\frac{\\text{Dividen}}{\\text{Laba Bersih}} = \\frac{Rp 30 \\text{ Triliun}}{Rp 60 \\text{ Triliun}} = \\mathbf{50,0\\%}$.',
            '**4. Perbandingan Dividen Tunai vs Share Buyback**: Pembagian dividen tunai menciptakan ekspektasi pasar bahwa pembayaran akan berlanjut di masa depan (Sticky Dividend). Sebaliknya, *Share Buyback* memberikan fleksibilitas tinggi bagi bank untuk mengembalikan kelebihan kas tanpa menciptakan komitmen dividen tahunan permanen, sekaligus meningkatkan Earning Per Share (EPS) karena berkurangnya jumlah saham beredar.'
          ]
        }
      ]
    }
  ]
};

// TM 11
export const CASE_WORKING_CAPITAL_CASH_CCC: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Siklus Konversi Kas (CCC) & Manajemen Saldo Kas Miller-Orr PT Alfamart',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Sumber Alfaria Trijaya (Alfamart) mencatat penjualan tahunan sebesar Rp 109,5 Triliun dengan Harga Pokok Penjualan (HPP) = Rp 87,6 Triliun. Saldo neraca rata-rata: Persediaan = Rp 7,2 Triliun; Piutang Usaha = Rp 1,5 Triliun; Utang Usaha Dagang = Rp 12,0 Triliun. Asumsikan 1 tahun = 365 hari.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Inventory Conversion Period (ICP / DSI), (2) Days Sales Outstanding (DSO / ACP), (3) Payables Deferral Period (PDP / DPO), (4) Cash Conversion Cycle (CCC), dan (5) Jelaskan makna strategis jika CCC bernilai negatif!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Inventory Conversion Period (ICP / DSI)**:\n$ICP = \\frac{\\text{Persediaan}}{\\text{HPP / 365}} = \\frac{Rp 7,2 \\text{ Triliun}}{Rp 87,6 \\text{ Triliun} / 365} = \\frac{7,2}{0,24} = \\mathbf{30,0 \\text{ Hari}}$.',
            '**2. Days Sales Outstanding (DSO / ACP)**:\n$DSO = \\frac{\\text{Piutang}}{\\text{Penjualan / 365}} = \\frac{Rp 1,5 \\text{ Triliun}}{Rp 109,5 \\text{ Triliun} / 365} = \\frac{1,5}{0,30} = \\mathbf{5,0 \\text{ Hari}}$.',
            '**3. Payables Deferral Period (PDP / DPO)**:\n$PDP = \\frac{\\text{Utang Usaha}}{\\text{HPP / 365}} = \\frac{Rp 12,0 \\text{ Triliun}}{0,24} = \\mathbf{50,0 \\text{ Hari}}$.',
            '**4. Cash Conversion Cycle (CCC)**:\n$CCC = ICP + DSO - PDP = 30,0 + 5,0 - 50,0 = \\mathbf{-15,0 \\text{ Hari}}$.',
            '**5. Makna Strategis CCC Negatif**: CCC sebesar -15 hari berarti Alfamart telah menerima kas dari konsumen 15 hari SEBELUM harus membayar tagihan barang kepada pemasok. Alfamart menjalankan operasionalnya menggunakan pendanaan gratis tanpa bunga dari pemasok dagang (*Working Capital funded by Vendors*).'
          ]
        }
      ]
    }
  ]
};

// TM 12
export const CASE_INVENTORY_TRADE_CREDIT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Economic Order Quantity (EOQ) & Biaya Kredit Perdagangan PT Mitra Adiperkasa',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Mitra Adiperkasa menjual 100.000 unit sepatu olahraga per tahun secara stabil. Biaya pemesanan per kali pesan ($S$) = Rp 500.000. Biaya penyimpanan per unit per tahun ($H$) = Rp 10.000 per unit. Pemasok menawarkan syarat pembayaran kredit dagang: **2/10, net 30**.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Kuantitas Pesanan Ekonomis (EOQ), (2) Total Biaya Persediaan Tahunan (TIC) pada tingkat EOQ, (3) Frekuensi pemesanan per tahun, dan (4) Biaya Nominal dan Biaya Efektif (EAR) jika perusahaan mengabaikan diskon dan membayar pada hari ke-30!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Perhitungan EOQ**:\n$EOQ = \\sqrt{\\frac{2 \\times D \\times S}{H}} = \\sqrt{\\frac{2 \\times 100.000 \\times 500.000}{10.000}} = \\sqrt{\\frac{100.000.000.000}{10.000}} = \\sqrt{10.000.000} = \\mathbf{3.162,28 \\approx 3.162 \\text{ Unit}}$.',
            '**2. Total Inventory Cost (TIC) pada EOQ**:\n- Biaya Pesan Tahunan = $(100.000 / 3.162,28) \\times 500.000 = Rp 15.811.388$.\n- Biaya Simpan Tahunan = $(3.162,28 / 2) \\times 10.000 = Rp 15.811.388$.\n- $TIC = 15.811.388 + 15.811.388 = \\mathbf{Rp 31.622.776}$. Pada titik EOQ, Biaya Pesan = Biaya Simpan.',
            '**3. Frekuensi Pemesanan**:\n$N = \\frac{D}{EOQ} = \\frac{100.000}{3.162} = \\mathbf{31,6 \\text{ kali/tahun}}$ (sekitar setiap 11,5 hari).',
            '**4. Biaya Mengabaikan Diskon 2/10, net 30**:\n- Suku Bunga Nominal Tahunan (Nominal Annual Rate):\n$r_{Nom} = \\frac{\\text{Diskon}\\}{100 - \\text{Diskon}\} \\times \\frac{365}{\\text{Hari Kredit} - \\text{Hari Diskon}} = \\frac{2}{98} \\times \\frac{365}{30 - 10} = 0,020408 \\times 18,25 = \\mathbf{37,24\\%}$.\n- Suku Bunga Efektif (EAR):\n$EAR = \\left(1 + \\frac{2}{98}\\right)^{365/20} - 1 = (1,020408)^{18,25} - 1 = \\mathbf{44,59\\%}$. Mengabaikan diskon adalah sumber pendanaan yang sangat mahal!'
          ]
        }
      ]
    }
  ]
};

// TM 13
export const CASE_MULTINATIONAL_FX_RISK: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Manajemen Risiko Valas, Forward Hedging, & Interest Rate Parity PT Indah Kiat Pulp',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Indah Kiat Pulp & Paper mengimpor mesin pabrik dari Jerman senilai EUR 10.000.000 dengan jatuh tempo pembayaran 6 bulan ke depan. Data pasar keuangan:\n- Spot Exchange Rate: $S_0 = Rp 17.000 / EUR$.\n- Suku Bunga Bebas Risiko Indonesia (6 bulan): $r_{IDR} = 6,0\\%$ per tahun (3,0% per 6 bulan).\n- Suku Bunga Bebas Risiko Zona Euro (6 bulan): $r_{EUR} = 2,0\\%$ per tahun (1,0% per 6 bulan).\n- 6-Month Forward Exchange Rate di Bank: $F = Rp 17.336,63 / EUR$.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Nilai Kurs Forward teoritis menurut Teori Interest Rate Parity (IRP), (2) Total kewajiban rupiah jika melakukan Forward Contract Hedging, dan (3) Bandingkan risiko Forward Hedging vs Unhedged Position jika kurs spot 6 bulan mendatang melonjak menjadi Rp 18.500/EUR!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kurs Forward Teoritis menurut Interest Rate Parity (IRP)**:\n$F_{6-bulan} = S_0 \\times \\frac{1 + r_{IDR, 6m}}{1 + r_{EUR, 6m}} = 17.000 \\times \\frac{1 + 0,03}{1 + 0,01} = 17.000 \\times \\frac{1,03}{1,01} = \\mathbf{Rp 17.336,63 / EUR}$. Kurs forward pasar sesuai dengan IRP.',
            '**2. Total Kewajiban Rupiah dengan Forward Hedging**:\nKewajiban Pasti = EUR 10.000.000 × Rp 17.336,63 = **Rp 173.366.300.000** (173,37 Miliar).',
            '**3. Analisis Proteksi Hedging**: Jika kurs spot melonjak ke Rp 18.500/EUR tanpa hedging (Unhedged), kewajiban membengkak menjadi EUR 10.000.000 × Rp 18.500 = **Rp 185.000.000.000** (185 Miliar). Dengan Forward Hedging, PT Indah Kiat menghemat kas sebesar **Rp 11.633.700.000** (11,63 Miliar) dan menghilangkan 100% ketidakpastian fluktuasi kurs mata uang asing.'
          ]
        }
      ]
    }
  ]
};

// TM 14
export const CASE_MA_ALTMAN_ZSCORE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: Valuasi Sinergi Merger M&A & Prediksi Kebangkrutan Altman Z-Score PT Garuda Indonesia',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Garuda Indonesia mengevaluasi kondisi kesehatan finansial menggunakan model Altman Z-Score untuk perusahaan non-manufaktur/jasa:\n$Z = 6,56 X_1 + 3,26 X_2 + 6,72 X_3 + 1,05 X_4$\nData keuangan (dalam Triliun Rupiah):\n- Total Aset = Rp 40 Triliun; Total Liabilitas = Rp 36 Triliun; Modal Kerja Bersih (NWC) = -Rp 4 Triliun; Saldo Laba (Retained Earnings) = -Rp 6 Triliun; Laba Sebelum Bunga dan Pajak (EBIT) = Rp 1,2 Triliun; Nilai Pasar Ekuitas = Rp 8 Triliun.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Keempat rasio keuangan $X_1, X_2, X_3, X_4$, (2) Skor Altman Z-Score, dan (3) Tentukan zona status kesehatan finansial (Safe Zone, Grey Zone, atau Distress Zone) beserta implikasi restrukturisasi utang (Chapter 11 Reorganization)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Perhitungan 4 Rasio Altman Z-Score**:\n- $X_1 = \\text{Working Capital} / \\text{Total Aset} = -4 / 40 = \\mathbf{-0,10}$.\n- $X_2 = \\text{Retained Earnings} / \\text{Total Aset} = -6 / 40 = \\mathbf{-0,15}$.\n- $X_3 = \\text{EBIT} / \\text{Total Aset} = 1,2 / 40 = \\mathbf{0,03}$.\n- $X_4 = \\text{Market Value Equity} / \\text{Total Liabilitas} = 8 / 36 = \\mathbf{0,222}$.',
            '**2. Perhitungan Skor Z-Score**:\n$Z = 6,56(-0,10) + 3,26(-0,15) + 6,72(0,03) + 1,05(0,222)$\n$Z = -0,656 - 0,489 + 0,2016 + 0,2331 = \\mathbf{-0,7103}$.',
            '**3. Evaluasi Zona & Restrukturisasi**: Kriteria Z-Score Jasa: $Z < 1,10$ = **Distress Zone (Zona Bahaya Kebangkrutan Tinggi)**. Skor -0,71 menunjukkan defisiensi modal kerja parah dan saldo laba defisit. Perusahaan WAJIB melakukan Restrukturisasi Utang Komprehensif (seperti PKPU / Reorganisasi) melalui Debt-to-Equity Swap, konversi utang menjadi sukuk jangka panjang, serta renegotiasi tarif sewa armada pesawat (Aircraft Lease Restructuring).'
          ]
        }
      ]
    }
  ]
};
