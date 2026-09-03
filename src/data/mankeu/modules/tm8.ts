import type { Reading } from '../../../types';
import { CASE_UTS_MANKEU_INTEGRATED } from '../mankeuPracticeCases';

const SVG_UTS_MANKEU_SUMMARY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgUtsMankeu" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="m1Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="m2Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="m3Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="m4Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgUtsMankeu)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS PRA-UTS MANAJEMEN KEUANGAN (TM 1 s.d. TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FINANCIAL ROADMAP</text>

  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m1Grad)"/>
    <text class="text-accent-blue" x="14" y="28" fill="#38bdf8" font-size="10" font-weight="800">1. RASIO & DUPONT</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 1 & TM 2 | Rasio & Analisis</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Teori Keagenan & Tata Kelola</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Likuiditas: Current & Quick</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Solvabilitas: DER & TIE Ratio</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Profitabilitas: ROA & ROE</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• DuPont 3-Way: PM x TATO x EM</text>
    <text class="text-accent-blue" x="18" y="195" fill="#38bdf8" font-size="7.5" font-weight="700">Fokus: Dekomposisi Kinerja</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m2Grad)"/>
    <text class="text-accent-green" x="14" y="28" fill="#34d399" font-size="10" font-weight="800">2. TVM & VALUASI</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 3 | Nilai Waktu dari Uang</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Present Value & Future Value</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Ordinary Annuity vs Annuity Due</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Perpetuitas: PV = PMT / r</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Suku Bunga Efektif (EAR / EFF%)</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Tabel Amortisasi Pinjaman Bank</text>
    <text class="text-accent-green" x="18" y="195" fill="#34d399" font-size="7.5" font-weight="700">Fokus: Matematika Keuangan</text>
  </g>

  <g transform="translate(460, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m3Grad)"/>
    <text class="text-accent-amber" x="14" y="28" fill="#fbbf24" font-size="10" font-weight="800">3. RISIKO, CAPM, & WACC</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 4 & TM 5 | Risk & Return</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Diversifikasi & Risiko Sistematik</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Koefisien Beta (β) Portofolio</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• SML / CAPM: r_s = r_RF + β(r_M - r_RF)</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Cost of Debt Setelah Pajak: r_d(1-T)</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• WACC = w_d r_d(1-T) + w_p r_p + w_s r_s</text>
    <text class="text-accent-amber" x="18" y="195" fill="#fbbf24" font-size="7.5" font-weight="700">Fokus: Biaya Modal Rata-rata</text>
  </g>

  <g transform="translate(675, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m4Grad)"/>
    <text class="text-accent-purple" x="14" y="28" fill="#a78bfa" font-size="10" font-weight="800">4. CAPITAL BUDGETING</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 6 & TM 7 | Evaluasi Proyek</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• NPV: Metode Evaluasi Emas</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• IRR vs MIRR (Tingkat Reinvestasi)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Profitability Index (PI) & Payback</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Crossover Rate Mutually Exclusive</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• OCF & Tax Shield Depresiasi</text>
    <text class="text-accent-purple" x="18" y="195" fill="#a78bfa" font-size="7.5" font-weight="700">Fokus: Kelayakan Investasi</text>
  </g>

  <text class="svg-muted" x="450" y="328" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Sintesis Terpadu Manajemen Keuangan Pra-UTS: Integrasi menyeluruh analisis rasio, nilai waktu uang, risiko portofolio, biaya modal, dan keputusan investasi modal.</text>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan Materi & Strategi Sukses Ujian Tengah Semester (UTS) Manajemen Keuangan',
  ref: 'Kompilasi Teori & Rumus TM 1 s/d TM 7 | Brigham & Ehrhardt Ch. 1, 3, 5, 6, 9, 10, 11',
  intro: 'TM 8 adalah sesi review komprehensif integrasi materi Pra-UTS Manajemen Keuangan: sintesis keterkaitan antara Teori Keagenan & Tata Kelola, Analisis Rasio & Dekomposisi DuPont, Time Value of Money & Amortisasi, Risiko & Portofolio CAPM/SML, Struktur Biaya Modal WACC, Metode Evaluasi Penganggaran Modal (NPV, IRR, MIRR, Crossover Rate), serta Estimasi Arus Kas Proyek.',
  objectives: [
    'Mengintegrasikan seluruh rumus dan logika finansial Pra-UTS dalam satu kerangka keputusan.',
    'Mendiagnosis kekuatan dan kelemahan finansial perusahaan melalui sistem analisis DuPont.',
    'Menghitung biaya modal rata-rata tertimbang (WACC) sebagai hurdle rate investasi.',
    'Mengevaluasi keputusan penganggaran modal (Capital Budgeting) pada proyek independen vs saling meniadakan (mutually exclusive).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Alur Manajemen Keuangan (Pra-UTS TM 1 s.d. TM 7).',
      svg: SVG_UTS_MANKEU_SUMMARY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) Pra-UTS Manajemen Keuangan'
    },
    {
      kind: 'table',
      headers: ['Topik Finansial', 'Formula / Model Kunci', 'Fokus Pengujian di UTS', 'Output yang Dikuasai'],
      rows: [
        ['Analisis Rasio & DuPont', 'ROE = Profit Margin x Total Asset Turnover x Equity Multiplier', 'Dekomposisi pemicu kenaikan/penurunan ROE perusahaan.', 'Mampu mengidentifikasi efisiensi operasional vs leverage.'],
        ['Time Value of Money (TVM)', 'PV = FV / (1 + r)^n ; PV Annuity = PMT x [1 - (1+r)^-n] / r', 'Perhitungan angsuran KPR/obligasi dan tabungan pensiun.', 'Mampu menyusun tabel amortisasi pinjaman bank.'],
        ['Risiko & CAPM', 'r_s = r_RF + β x (r_M - r_RF)', 'Penghitungan expected return saham berdasarkan risiko pasar sistematik.', 'Mampu menghitung biaya ekuitas CAPM.'],
        ['Struktur Biaya Modal (WACC)', 'WACC = w_d r_d (1 - T) + w_p r_p + w_s r_s', 'Penentuan bobot struktur modal pasar dan pengaruh tax shield utang.', 'Mampu menghitung diskonto standar proyek.'],
        ['Capital Budgeting', 'NPV = ∑ [CF_t / (1+WACC)^t] - CF_0 ; IRR (NPV=0)', 'Konflik peringkat proyek mutually exclusive dan titik crossover rate.', 'Mampu merekomendasikan proyek yang memaksimalkan nilai pemegang saham.']
      ],
      caption: 'Tabel 8.0: Matriks penguasaan materi Ujian Tengah Semester Manajemen Keuangan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Master Formula Pra-UTS Manajemen Keuangan'
    },
    {
      kind: 'formula',
      text: 'ROE (DuPont 3-Way) = (Net Income / Sales) x (Sales / Total Assets) x (Total Assets / Equity)\nWACC = w_d x r_d x (1 - T) + w_p x r_p + w_s x r_s\nOperating Cash Flow (OCF) = (EBIT x [1 - T]) + Depresiasi = (Sales - Costs) x (1 - T) + (Depresiasi x T)\nCrossover Rate = IRR dari selisih arus kas proyek (ΔCF_t = CF_A,t - CF_B,t)',
      note: 'Ketika terjadi konflik peringkat antara NPV dan IRR pada proyek mutually exclusive, keputusan SELALU didasarkan pada NPV tertinggi karena NPV langsung mengukur tambahan nilai riil bagi pemegang saham.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Keputusan Proyek Mutually Exclusive dengan Konflik NPV vs IRR',
      prompt: 'Perusahaan mengevaluasi dua proyek investasi saling meniadakan (Mutually Exclusive) dengan WACC 10%:\n• Proyek X: Investasi Awal Rp 100 Juta, Arus Kas Rp 40 Jt/tahun selama 4 tahun (NPV = Rp 26,79 Juta, IRR = 21,86%)\n• Proyek Y: Investasi Awal Rp 300 Juta, Arus Kas Rp 110 Jt/tahun selama 4 tahun (NPV = Rp 48,69 Juta, IRR = 17,46%)\nTentukan proyek mana yang wajib dipilih manajemen dan jelaskan rasionalisasinya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perbandingan Hasil Evaluasi**: Proyek X memiliki IRR lebih tinggi (21,86% > 17,46%), tetapi Proyek Y menghasilkan NPV jauh lebih besar (Rp 48,69 Juta > Rp 26,79 Juta).',
            '**Penyebab Konflik**: Konflik terjadi karena perbedaan skala investasi (Proyek Y berukuran 3x lipat Proyek X).',
            '**Keputusan Finansial Tepat**: Manajemen **WAJIB MEMILIH PROYEK Y**. Alasan: Tujuan utama manajemen keuangan adalah memaksimalkan kekayaan pemegang saham (Shareholder Wealth Maximization). Proyek Y menambah nilai perusahaan sebesar Rp 48,69 Juta (lebih besar Rp 21,9 Juta dibanding Proyek X).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 8'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Dekomposisi Laporan Keuangan', 'Analisis 5 kelompok rasio keuangan dan pembedahan 3 komponen DuPont.', 'Mampu menganalisis akar masalah efisiensi perusahaan.'],
        ['2', 'Time Value of Money (TVM)', 'Kalkulasi PV, FV, Annuity Due, Perpetuitas, dan tabel cicilan pinjaman.', 'Mampu menghitung nilai arus kas bertahap.'],
        ['3', 'Penilaian Portofolio & CAPM', 'Perhitungan return ekspektasian, deviasi standar, beta, dan premi risiko pasar.', 'Mampu menghitung return yang disyaratkan investor.'],
        ['4', 'Evaluasi Capital Budgeting', 'Kalkulasi komparatif NPV, IRR, MIRR, PI, Payback, dan OCF setelah pajak.', 'Mampu menyusun rekomendasi investasi proyek modal.']
      ],
      caption: 'Tabel 8.2: Peta penguasaan submateri TM 8 Manajemen Keuangan.'
    },
    CASE_UTS_MANKEU_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**NPV Adalah Tolok Ukur Mutlak**: Jangan pernah terkecoh oleh angka IRR yang tinggi. Jika dua proyek mutually exclusive berkonflik, pilihlah proyek dengan NPV terbesar.',
        '**Tax Shield Depresiasi Menghemat Kas**: Depresiasi adalah beban non-kas yang memberikan penghematan pajak riil sebesar Depresiasi x Tarif Pajak (T).',
        '**Biaya Utang Wajib Disesuaikan Pajak**: Dalam perhitungan WACC, hanya komponen biaya utang (Cost of Debt) yang dikalikan (1 - T) karena bunga utang adalah beban pengurang pajak (tax deductible), sedangkan dividen saham bukan pengurang pajak.'
      ]
    }
  ]
};
