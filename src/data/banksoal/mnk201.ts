// src/data/banksoal/mnk201.ts
// Bank Soal Esai & Studi Kasus Manajemen Keuangan (MNK201)
import type { BankSoal } from '../../types';

export const MNK201_BANK_UTS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 4–6: Biaya Modal WACC & Kelayakan Investasi NPV",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Penentuan Biaya Modal Tertimbang (WACC) dan Penganggaran Modal Proyek",
    "context": "PT Samudra Energi berencana membangun stasiun pengisian energi baru senilai Rp 5.000.000.000. Struktur modal optimal perusahaan: 30% Utang dan 70% Ekuitas. Data pasar keuangan: Suku bunga bebas risiko 6%, return pasar 14%, dan Beta saham 1,25. Biaya utang sebelum pajak 9% dengan tarif pajak badan 22%. Proyek ini diproyeksikan menghasilkan arus kas masuk bersih Rp 1.500.000.000 per tahun selama 5 tahun.",
    "data": [
      "Investasi Awal: Rp 5.000.000.000.",
      "Struktur Modal: w_d = 30%, w_e = 70%.",
      "Kredit Pajak Utang: r_d = 9%, Tax = 22%.",
      "Parameter CAPM: r_RF = 6%, r_M = 14%, Beta = 1,25.",
      "Arus Kas Masuk: Rp 1.500.000.000/tahun (5 tahun)."
    ],
    "instructions": [
      "Hitung biaya ekuitas (r_s) menggunakan model CAPM.",
      "Hitung biaya utang setelah pajak (after-tax cost of debt).",
      "Hitung Weighted Average Cost of Capital (WACC) perusahaan.",
      "Hitung Net Present Value (NPV) proyek dan tentukan apakah proyek layak diterima."
    ],
    "outputFormat": [
      "Kalkulasi r_s dan WACC",
      "Tabel PV arus kas dan keputusan investasi"
    ],
    "rubric": [
      "Ketepatan perhitungan CAPM (25%)",
      "Kebenaran formula WACC (25%)",
      "Kalkulasi NPV dan penarikan kesimpulan (50%)"
    ],
    "answerGuide": "1. Biaya Ekuitas (CAPM):\nr_s = r_RF + β × (r_M - r_RF)\nr_s = 6% + 1,25 × (14% - 6%) = 6% + (1,25 × 8%) = 6% + 10% = 16,00%.\n\n2. Biaya Utang Setelah Pajak:\nr_d (after-tax) = r_d × (1 - T)\nr_d (after-tax) = 9% × (1 - 0,22) = 9% × 0,78 = 7,02%.\n\n3. WACC Perusahaan:\nWACC = (w_d × r_d_after_tax) + (w_e × r_s)\nWACC = (0,30 × 7,02%) + (0,70 × 16,00%)\nWACC = 2,106% + 11,20% = 13,306% (dibulatkan 13,31%).\n\n4. Kelayakan Investasi Proyek (NPV):\n- Tingkat diskonto = 13,31%.\n- Faktor Anuitas PV (PVIFA 13,31%, 5 tahun):\n  PVIFA = [1 - (1 + 0,1331)^(-5)] / 0,1331 = [1 - 0,5353] / 0,1331 = 3,4913.\n- Nilai Sekarang Arus Kas (PV of Inflows) = Rp 1.500.000.000 × 3,4913 = Rp 5.236.950.000.\n- NPV = PV Arus Kas Masuk - Investasi Awal\n  NPV = Rp 5.236.950.000 - Rp 5.000.000.000 = Rp 236.950.000.\n\nKeputusan:\nNPV bernilai POSITIF (+ Rp 236.950.000). Proyek pembangunan stasiun energi LAYAK DITERIMA karena menghasilkan tingkat pengembalian melebihi biaya modal (WACC) dan menambah nilai kekayaan pemegang saham."
  }
];

export const MNK201_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 9–11: Teori Modigliani-Miller & Model Kas BAT",
    "difficulty": "Tinggi",
    "estimatedTime": "25–35 menit",
    "question": "Analisis Struktur Modal MM dengan Pajak & Saldo Kas Optimal Baumol",
    "context": "PT Graha Finansial saat ini adalah perusahaan tanpa utang (all-equity) dengan laba operasi (EBIT) stabil Rp 1.200.000.000 per tahun. Biaya ekuitas perusahaan saat ini adalah 15% dan tarif pajak perseroan adalah 22%. Perusahaan berencana menerbitkan obligasi sebesar Rp 2.000.000.000 dengan kupon 8% untuk membeli kembali sebagian sahamnya.",
    "data": [
      "EBIT = Rp 1.200.000.000; Biaya modal tanpa utang (r_0) = 15%; Pajak T_c = 22%.",
      "Rencana Utang (D) = Rp 2.000.000.000 @ 8%."
    ],
    "instructions": [
      "Hitung nilai perusahaan tanpa utang (V_U) menurut teori Modigliani-Miller.",
      "Hitung nilai perusahaan setelah berutang (V_L) dengan adanya perisai pajak bunga.",
      "Hitung biaya modal ekuitas baru (r_sL) setelah perusahaan memiliki utang."
    ],
    "outputFormat": [
      "Kalkulasi nilai perusahaan V_U, V_L, dan r_sL"
    ],
    "rubric": [
      "Ketepatan perhitungan V_U (30%)",
      "Kebenaran PV of tax shield dan V_L (35%)",
      "Kalkulasi r_sL proposisi II MM (35%)"
    ],
    "answerGuide": "1. Nilai Perusahaan Tanpa Utang (V_U):\nLaba Bersih setelah Pajak = EBIT × (1 - T_c) = Rp 1.200.000.000 × (1 - 0,22) = Rp 936.000.000.\nV_U = [EBIT × (1 - T_c)] / r_0\nV_U = Rp 936.000.000 / 0,15 = Rp 6.240.000.000.\n\n2. Nilai Perusahaan Berutang (V_L):\nSesuai Teori MM dengan Pajak:\nV_L = V_U + (T_c × D)\nV_L = Rp 6.240.000.000 + (22% × Rp 2.000.000.000)\nV_L = Rp 6.240.000.000 + Rp 440.000.000 = Rp 6.680.000.000.\n(Nilai perusahaan meningkat sebesar Rp 440 juta akibat nilai sekarang perisai pajak bunga utang).\n\n3. Biaya Ekuitas Baru (r_sL):\nNilai Pasar Ekuitas setelah utang (S) = V_L - D = Rp 6.680.000.000 - Rp 2.000.000.000 = Rp 4.680.000.000.\nRasio Utang terhadap Ekuitas (D / S) = Rp 2.000.000.000 / Rp 4.680.000.000 = 0,4274.\nMenurut MM Proposisi II dengan Pajak:\nr_sL = r_0 + (r_0 - r_d) × (1 - T_c) × (D / S)\nr_sL = 15% + (15% - 8%) × (1 - 0,22) × 0,4274\nr_sL = 15% + (7% × 0,78 × 0,4274) = 15% + 2,33% = 17,33%."
  }
];

export const MNK201_BANK: BankSoal[] = [...MNK201_BANK_UTS, ...MNK201_BANK_UAS];
