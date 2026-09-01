import type { Reading } from '../../../types';
import { CASE_CAPITAL_STRUCTURE_LEVERAGE } from '../mankeuPracticeCases';

const SVG_CAPITAL_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TEORI STRUKTUR MODAL: TRADE-OFF THEORY &amp; NILAI PERUSAHAAN (V_L)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">MM TANPA PAJAK (1958)</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Irrelevance Proposition:</text>
  <text x="97" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• V_L = V_U (Sama)</text>
  <text x="97" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• WACC konstan</text>
  <text x="97" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Struktur modal tdk relevan</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Pasar Sempurna</text>

  <rect x="185" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="260" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">MM DENGAN PAJAK (1963)</text>
  <text x="260" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Tax Shield Maximization:</text>
  <text x="260" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• V_L = V_U + (T × D)</text>
  <text x="260" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• WACC turun terus</text>
  <text x="260" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Optimal: 100% Utang</text>
  <text x="260" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Manfaat Pajak Bunga</text>

  <rect x="350" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="425" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">TRADE-OFF THEORY</text>
  <text x="425" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Keseimbangan Riil:</text>
  <text x="425" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tax Shield vs Distress</text>
  <text x="425" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Biaya Kebangkrutan</text>
  <text x="425" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ada D/E Rasio Optimal</text>
  <text x="425" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Titik Optimal WACC</text>

  <rect x="515" y="55" width="140" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="585" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">PECKING ORDER</text>
  <text x="585" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Asimetri Informasi:</text>
  <text x="585" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">1. Laba Ditahan</text>
  <text x="585" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">2. Utang / Obligasi</text>
  <text x="585" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">3. Emisi Saham Baru</text>
  <text x="585" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Hierarki Pendanaan</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Capital Structure Decisions, Financial Leverage, & Modigliani-Miller Theories',
  ref: 'Brigham & Ehrhardt Ch. 13 | Teori Struktur Modal MM (1958 & 1963) | Trade-Off Theory & Persamaan Hamada',
  intro: 'TM 9 membahas pilihan bauran pendanaan utang vs ekuitas: Teori Modigliani-Miller tanpa pajak (Struktur Modal Tidak Relevan) dan dengan pajak (Manfaat Tax Shield Bunga), Teori Trade-Off (Keseimbangan Penghematan Pajak vs Biaya Kebangkrutan / Financial Distress), Teori Pecking Order, Teori Sinyal (Signaling), serta Persamaan Hamada untuk menghitung kenaikan risiko ekuitas (Levered Beta).',
  objectives: [
    'Menganalisis Proposisi MM I & II (tanpa pajak dan dengan pajak korporasi).',
    'Menghitung nilai perusahaan ter-leverage ($V_L = V_U + T \\times D$) dan penghematan pajak bunga.',
    'Menerapkan Persamaan Hamada untuk mengkonversi Unlevered Beta ($\\beta_U$) menjadi Levered Beta ($\\beta_L$).',
    'Menjelaskan hierarki pendanaan Teori Pecking Order (Internal Funds $\\rightarrow$ Debt $\\rightarrow$ External Equity).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Evolusi Teori Struktur Modal: Dari MM hingga Trade-Off dan Pecking Order.',
      svg: SVG_CAPITAL_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Teori Struktur Modal', 'Asumsi Dasar', 'Implikasi terhadap Nilai Perusahaan ($V_L$)', 'Implikasi terhadap WACC'],
      rows: [
        ['MM Tanpa Pajak (1958)', 'Pasar modal sempurna, tanpa pajak, tanpa biaya kebangkrutan.', '$V_L = V_U$ (Struktur modal sama sekali TIDAK mempengaruhi nilai).', 'WACC konstan pada seluruh rentang rasio utang.'],
        ['MM Dengan Pajak (1963)', 'Bunga utang dapat dikurangkan dari pajak penghasilan korporasi.', '$V_L = V_U + (T \\times D)$ (Nilai bertambah sebesar present value tax shield).', 'WACC turun terus mendekati biaya utang; modal optimal 100% utang.'],
        ['Trade-Off Theory (Static Trade-off)', 'Ada penghematan pajak bunga DAN ada biaya kebangkrutan (Financial Distress Costs).', '$V_L = V_U + (T \\times D) - PV(\\text{Distress Costs})$.', 'WACC berbentuk kurva U; titik minimum kurva adalah Struktur Modal Optimal.'],
        ['Pecking Order Theory', 'Asimetri informasi antara manajer (insider) dan investor publik.', 'Tidak ada target rasio D/E tetap; struktur modal mengikuti kebutuhan kas.', 'Pendanaan diprioritaskan: 1. Kas Internal, 2. Utang, 3. Saham Baru.']
      ],
      caption: 'Tabel 9.0: Ringkasan 4 teori utama struktur modal korporasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Modigliani-Miller & Persamaan Hamada'
    },
    {
      kind: 'formula',
      text: `\\text{MM with Taxes (Proposisi I)}: \\quad V_L = V_U + (T \\times D)
\\text{Persamaan Hamada (Levered Beta)}: \\quad \\beta_L = \\beta_U \\left[1 + (1 - T)\\left(\\frac{D}{S}\\right)\\right]
\\text{Unlevered Beta (Asset Beta)}: \\quad \\beta_U = \\frac{\\beta_L}{1 + (1 - T)(D/S)}
\\text{Cost of Equity under MM II with Taxes}: \\quad r_{sL} = r_{sU} + (r_{sU} - r_d)(1 - T)\\left(\\frac{D}{S}\\right)`,
      note: 'Penambahan utang meningkatkan risiko finansial yang ditanggung pemegang saham biasa, sehingga menaikkan Beta ($\\beta_L$) dan biaya ekuitas ($r_{sL}$).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Persamaan Hamada & Efek Perubahan Rasio D/E',
      prompt: 'PT Cemerlang saat ini 100% ekuitas dengan $\\beta_U = 0,80$. Tarif pajak $T = 22\\%$. Perusahaan ingin mengubah struktur modal menjadi $D/S = 50\\%$ (Debt-to-Equity = 0,50). Jika $r_{RF} = 5,5\\%$ dan Market Risk Premium = 6,0%, berapa Levered Beta dan Biaya Ekuitas baru perusahaan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan Levered Beta ($\\beta_L$)**:\n$\\beta_L = 0,80 \\left[1 + (1 - 0,22)(0,50)\\right] = 0,80 [1 + 0,78(0,50)] = 0,80(1 + 0,39) = 0,80 \\times 1,39 = \\mathbf{1,112}$.',
            '**Perhitungan Biaya Ekuitas Baru ($r_{sL}$ via CAPM)**:\n$r_{sL} = 5,5\\% + 1,112(6,0\\%) = 5,5\\% + 6,672\\% = \\mathbf{12,172\\% \\approx 12,17\\%}$.',
            '**Kenaikan Biaya Ekuitas**: Biaya ekuitas naik dari $10,30\\%$ ($5,5\\% + 0,80 \\times 6\\%$) menjadi $12,17\\%$ sebagai kompensasi atas risiko penambahan beban utang 50% D/E.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Teori MM Tanpa & Dengan Pajak', 'Kalkulasi $V_L$, penghematan pajak, dan biaya modal.', 'Mampu menganalisis dampak restrukturisasi modal pada nilai perusahaan.'],
        ['2', 'Persamaan Hamada', 'Konversi $\\beta_U$ ke $\\beta_L$ dan sebaliknya.', 'Mampu menghitung perubahan beta akibat perubahan rasio D/E.'],
        ['3', 'Trade-off vs Pecking Order', 'Analisis Trade-Off Theory, Financial Distress, dan Signaling.', 'Mampu menjelaskan fenomena pemilihan sumber dana korporasi riil.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 Manajemen Keuangan.'
    },
    CASE_CAPITAL_STRUCTURE_LEVERAGE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Interest Tax Shield**: Merupakan nilai tambah utama dari penggunaan utang ($T \\times D$), namun dibatasi oleh potensi biaya kebangkrutan.',
        '**Business Risk vs Financial Risk**: Business Risk melekat pada operasional aset ($\\beta_U$); Financial Risk timbul dari keputusan mendanai aset dengan utang ($\\beta_L - \\beta_U$).',
        '**Signaling Theory**: Pengumuman penerbitan saham baru sering dipandang pasar sebagai sinyal negatif bahwa saham sedang overvalued, memicu penurunan harga saham.'
      ]
    }
  ]
};
