import type { Reading } from '../../../types';
import { CASE_UTS_MANKEU_INTEGRATED } from '../mankeuPracticeCases';

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan Materi & Strategi Sukses Ujian Tengah Semester (UTS) Manajemen Keuangan',
  ref: 'Kompilasi Teori & Rumus TM 1 s/d TM 7 | Brigham & Ehrhardt Ch. 1, 3, 5, 6, 9, 10, 11',
  intro: 'TM 8 adalah sesi review komprehensif integrasi materi Pra-UTS Manajemen Keuangan: sintesis keterkaitan antara Teori Keagenan & Tata Kelola, Analisis Rasio & Dekomposisi DuPont, Time Value of Money & Amortisasi, Risiko & Portofolio CAPM/SML, Struktur Biaya Modal WACC, Metode Evaluasi Penganggaran Modal (NPV, IRR, MIRR, Crossover Rate), serta Estimasi Arus Kas Proyek.',
  objectives: [
    'Mengintegrasikan seluruh rumus dan logika finansial TM 1 s/d TM 7 dalam satu kerangka kerja terpadu.',
    'Menguasai strategi cepat menyelesaikan soal kuantitatif bertingkat pada lembar ujian UTS.',
    'Menghindari 10 jebakan umum ujian tengah semester Manajemen Keuangan.',
    'Mencapai target nilai maksimal A pada Ujian Tengah Semester Manajemen Keuangan.'
  ],
  blocks: [
    {
      kind: 'h2',
      text: 'Peta Integrasi 7 Pilar Pra-UTS Manajemen Keuangan'
    },
    {
      kind: 'table',
      headers: ['Pilar Topik UTS', 'Konsep Kunci yang Diuji', 'Formula Pokok Pengujian', 'Kunci Jawaban Ujian'],
      rows: [
        ['1. Tata Kelola & Keagenan', 'Horizon problem & kompensasi eksekutif.', 'Nilai Intrinsik $= \\sum FCF_t / (1+WACC)^t$', 'Maksimalisasi nilai intrinsik saham jangka panjang > Laba akuntansi.'],
        ['2. Analisis DuPont', 'Dekomposisi pendorong ROE.', '$ROE = NPM \\times TATO \\times EM$', 'Identifikasi apakah keunggulan ROE berasal dari efisiensi atau beban leverage utang.'],
        ['3. Nilai Waktu Uang (TVM)', 'Ordinary vs Due & Skedul Amortisasi.', '$PV_{Due} = PV_{Ord}(1+i)$; $EAR = (1 + r/m)^m - 1$', 'Porsi bunga menurun setiap tahun, porsi pokok meningkat.'],
        ['4. Risiko & Model CAPM', 'Beta portofolio & SML Valuation.', '$r_i = r_{RF} + \\beta_i(r_M - r_{RF})$', 'Return aktual > SML = Undervalued (Buy); Return < SML = Overvalued (Sell).'],
        ['5. Biaya Modal (WACC)', 'After-tax cost of debt & 3 metode $r_s$.', '$WACC = w_d r_d(1-T) + w_p r_p + w_s r_s$', 'Gunakan bobot nilai pasar; utang satu-satunya yang dikalikan $(1-T)$.'],
        ['6. Capital Budgeting', 'Konflik NPV vs IRR & Crossover Rate.', '$NPV = \\sum CF_t/(1+k)^t - CF_0$', 'NPV adalah kriteria mutlak (Superior); Crossover rate adalah IRR selisih arus kas.'],
        ['7. Arus Kas Proyek', 'Initial Outlay, OCF, & Terminal CF.', '$OCF = EBIT(1-T) + Dep$; $TCF = Salvage_{AT} + NWC$', 'Abaikan Sunk Cost & Bunga; Tambahkan Opportunity Cost & NWC Recovery.']
      ],
      caption: 'Tabel 8.1: Peta sintesis integrasi 7 pilar materi persiapan UTS Manajemen Keuangan.'
    },
    {
      kind: 'h2',
      text: 'Checklist 10 Jebakan Terpopuler UTS Manajemen Keuangan'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Daftar 10 Jebakan Fatal Ujian',
      text: '1. Sunk Costs (biaya riset masa lalu) DILARANG dimasukkan ke dalam Initial Outlay proyek.\n2. Beban bunga DILARANG dikurangkan dari pendapatan saat menghitung OCF proyek (karena sudah diperhitungkan dalam WACC).\n3. Modal Kerja Bersih (NWC) selalu dikembalikan PENUH 100% pada Terminal Cash Flow tanpa dipotong pajak.\n4. Dalam proyek Mutually Exclusive yang berkonflik, keputusan selalu mengikuti METODE NPV, bukan IRR.\n5. Hanya Biaya Utang ($r_d$) yang dikalikan $(1 - T)$ dalam rumus WACC; Saham Preferen dan Saham Biasa TIDAK dikalikan $(1 - T)$.\n6. Bobot WACC ($w_d, w_p, w_s$) WAJIB berbasis Nilai Pasar (Market Value), BUKAN Nilai Buku.\n7. Anuitas Dimuka (Annuity Due) selalu bernilai LEBIH BESAR daripada Anuitas Biasa dengan faktor pengali $(1 + i)$.\n8. Saham dengan Ekspektasi Return DI ATAS Garis SML berstatus UNDERVALUED (Layak Dibeli).\n9. Diversifikasi HANYA menghilangkan Unsystematic/Firm-Specific Risk, TIDAK BISA menghilangkan Market Risk.\n10. Pada skedul amortisasi utang cicilan tetap, porsi cicilan pokok MENINGKAT dan beban bunga MENURUN setiap tahun.'
    },
    CASE_UTS_MANKEU_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Tuliskan Formula & Definisi Simbol**: Pada lembar jawaban esai UTS, selalu tuliskan formula baku terlebih dahulu sebelum memasukkan angka numerik.',
        '**Satuan & Desimal**: Pastikan konsistensi satuan (Juta vs Miliar vs Triliun) dan gunakan pembulatan 2-4 desimal untuk suku bunga dan beta.',
        '**Kombinasi Logika Bisnis & Matematika**: Setiap kesimpulan angka harus disertai interpretasi manajerial (misalnya: \"Proyek B dipilih karena menghasilkan tambahan kekayaan pemegang saham Rp 100,4 Juta...\").'
      ]
    }
  ]
};
