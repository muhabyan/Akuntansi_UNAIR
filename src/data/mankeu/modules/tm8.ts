import type { Reading } from '../../../types';

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Manajemen Keuangan',
  ref: 'Kompilasi TM 1 s.d TM 7 | Brigham & Houston Ch. 1-12',
  intro: 'Rangkuman terpadu dan intisari rumus matematis penting Pra-UTS Manajemen Keuangan: Pengantar & Agency Problem, Rasio Keuangan & DuPont 3-Step, Time Value of Money & Amortisasi, Risiko & Portofolio CAPM, WACC, Capital Budgeting (NPV vs IRR), serta Estimasi Arus Kas Proyek.',
  objectives: [
    'Mengintegrasikan seluruh konsep dasar manajemen keuangan dari TM 1 s.d TM 7.',
    'Menguasai perhitungan matematis cepat untuk ujian UTS (DuPont, TVM, CAPM, WACC, NPV/IRR, OCF).'
  ],
  blocks: [
    { kind: 'h2', text: 'Peta Rumus Kritis Ujian UTS Manajemen Keuangan' },
    {
      kind: 'ul',
      items: [
        '**DuPont 3-Step (TM 2)**: $ROE = \\text{Profit Margin} \\times \\text{Asset Turnover} \\times \\text{Equity Multiplier}$.',
        '**TVM (TM 3)**: $PV = \\frac{FV}{(1+I)^N}$; $PVA_{\\text{due}} = PVA_{\\text{ordinary}} \\times (1+I)$; $EAR = (1 + \\frac{I_{\\text{nom}}}{m})^m - 1$.',
        '**CAPM & SML (TM 4)**: $r_i = r_{RF} + b_i(r_M - r_{RF})$; $b_p = \\sum w_i b_i$.',
        '**WACC (TM 5)**: $WACC = w_d r_d(1-T) + w_p r_p + w_c r_s$; Hanya biaya utang yang dikali `(1 - T)`.',
        '**Capital Budgeting (TM 6)**: Jika Proyek Mutually Exclusive bentrok antara NPV dan IRR $\\rightarrow$ **Selalu pilih NPV tertinggi**!',
        '**Arus Kas Proyek (TM 7)**: $OCF = \\text{EBIT}(1-T) + \\text{Depr}$; $CF_N = OCF_N + \\text{Salvage Net Tax} + \\text{NOWC Recovery}$; Sunk costs diabaikan.'
      ]
    }
  ]
};