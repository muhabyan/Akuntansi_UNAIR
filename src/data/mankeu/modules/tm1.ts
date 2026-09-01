import type { Reading } from '../../../types';
import { CASE_AGENCY_CORPORATE_GOVERNANCE } from '../mankeuPracticeCases';

const SVG_AGENCY_GOVERNANCE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TRIANGLE TATA KELOLA KORPORASI &amp; TEORI KEAGENAN (AGENCY THEORY)</text>
  
  <rect x="35" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">PEMEGANG SAHAM</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Principals / Owners)</text>
  <text x="125" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tujuan: Maksimalkan</text>
  <text x="125" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Nilai Intrinsik Saham</text>
  <text x="125" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menanggung risiko modal</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Hak Residual Nilai</text>

  <rect x="250" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="340" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">MANAJEMEN EKSEKUTIF</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Agents / Decision Makers)</text>
  <text x="340" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Risiko: Horizon Problem</text>
  <text x="340" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengejaran bonus kas</text>
  <text x="340" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Konsumsi perquisites</text>
  <text x="340" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Konflik Keagenan</text>

  <rect x="465" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="555" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">MITIGASI GOVERNANCE</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Corporate Safeguards)</text>
  <text x="555" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• ESOP / Stock Options</text>
  <text x="555" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengawasan BoD / Audit</text>
  <text x="555" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ancaman Takeover</text>
  <text x="555" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Penyelarasan Insentif</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'An Overview of Financial Management, Corporate Goals, & Agency Theory',
  ref: 'Brigham & Ehrhardt (Financial Management 15e/16e Ch. 1) | Teori Keagenan Jensen & Meckling (1976)',
  intro: 'TM 1 membahas fondasi filosofis manajemen keuangan korporasi: tujuan utama pembentukan nilai pemegang saham (Shareholder Wealth Maximization vs Stakeholder Welfare), pemisahan kepemilikan dan pengendalian (Separation of Ownership and Control), konflik keagenan (Stockholders vs Managers & Stockholders vs Debtholders), serta mekanisme tata kelola korporasi modern.',
  objectives: [
    'Membedakan tujuan Maksimalisasi Nilai Saham Intrinsik jangka panjang vs Maksimalisasi Laba Akuntansi jangka pendek.',
    'Menganalisis dinamika Teori Keagenan (Agency Theory) dan biaya keagenan (Agency Costs).',
    'Merancang sistem kompensasi eksekutif (ESOP, Restricted Stock Units) yang menyelaraskan insentif.',
    'Mengevaluasi peran pasar keuangan, lembaga intermediasi, dan struktur hukum entitas bisnis (PT vs CV/Firma).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Kerangka Konflik Keagenan dan Mitigasi Tata Kelola Korporasi.',
      svg: SVG_AGENCY_GOVERNANCE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Dimensi Keuangan', 'Maksimalisasi Laba Akuntansi', 'Maksimalisasi Kekayaan Pemegang Saham (Nilai Intrinsik)'],
      rows: [
        ['Fokus Waktu', 'Jangka Pendek (Kuartalan / Tahunan).', 'Jangka Panjang (Sepanjang umur hidup perusahaan).'],
        ['Pertimbangan Nilai Waktu Uang', 'Mengabaikan Time Value of Money (TVM).', 'Sepenuhnya memperhitungkan diskonto TVM seluruh arus kas masa depan.'],
        ['Pertimbangan Risiko', 'Mengabaikan profil risiko arus kas.', 'Secara eksplisit memasukkan premi risiko ke dalam biaya modal (WACC).'],
        ['Pengambilan Keputusan', 'Rentan terhadap manipulasi laba akrual dan penundaan biaya riset.', 'Berbasis pada Arus Kas Bebas (Free Cash Flow / FCF) riil yang dihasilkan.']
      ],
      caption: 'Tabel 1.0: Perbandingan tujuan laba akuntansi vs maksimalisasi nilai pemegang saham.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Nilai Intrinsik Perusahaan'
    },
    {
      kind: 'formula',
      text: `\\text{Nilai Intrinsik Perusahaan (Corporate Value)} = \\sum_{t=1}^{\\infty} \\frac{\\text{Free Cash Flow}_t (FCF_t)}{(1 + WACC)^t}
\\text{Free Cash Flow (FCF)} = [EBIT \\times (1 - T)] + \\text{Depresiasi} - [\\Delta \\text{Net Working Capital} + \\text{Capital Expenditures (CapEx)}]`,
      note: 'Setiap keputusan manajer keuangan (investasi, pendanaan, dan operasional) dinilai baik HANYA jika keputusan tersebut meningkatkan FCF atau menurunkan WACC, sehingga menaikkan Nilai Intrinsik.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Konflik Pemegang Saham vs Pemegang Obligasi (Debtholders)',
      prompt: 'Mengapa pemegang obligasi (Debtholders) sangat membatasi perusahaan berutang tinggi untuk mengambil proyek investasi yang memiliki variansi risiko luar biasa besar (Asset Substitution Problem)?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Karakteristik Klaim Debtholders**: Pemegang obligasi hanya menerima imbal hasil tetap (Fixed Claims: Kupon & Pokok). Jika proyek sukses besar, seluruh kelebihan laba menjadi hak pemegang saham (Residual Claims).',
            '**Risiko Gagal Bayar (Default Risk)**: Jika proyek gagal total, perusahaan dapat bangkrut dan pemegang obligasi menanggung kerugian pokok pinjaman.',
            '**Mitigasi Debtholders**: Pemegang obligasi melindungi diri dengan mencantumkan Klausul Pembatasan (Debt Covenants), seperti batas maksimum rasio Debt-to-Equity dan syarat minimum Interest Coverage Ratio.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Tujuan Manajemen Keuangan', 'Pembedaan nilai intrinsik vs harga pasar dan laba akuntansi.', 'Mampu menganalisis tujuan optimalisasi keputusan korporasi.'],
        ['2', 'Teori Keagenan & Biaya Keagenan', 'Identifikasi konflik manajer vs pemegang saham vs debtholder.', 'Mampu merancang solusi kontrak dan insentif manajemen.'],
        ['3', 'Bentuk Badan Usaha & Pasar Modal', 'Karakteristik PT, CV, Pasar Perdana vs Sekunder, Money vs Capital Market.', 'Menguasai struktur hukum perpajakan dan likuiditas modal.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Manajemen Keuangan.'
    },
    CASE_AGENCY_CORPORATE_GOVERNANCE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Maksimalisasi Nilai Saham $\\neq$ Maksimalisasi Laba**: Laba akuntansi dapat dimanipulasi dengan akrual dan mengabaikan risiko serta nilai waktu uang; nilai intrinsik berjangkar pada Free Cash Flow.',
        '**Agency Costs**: Terdiri dari pengeluaran pemantauan oleh pemegang saham (audit eksternal), pengeluaran ikatan oleh manajemen (bonding costs), dan kerugian residual (residual loss).',
        '**Efisiensi Pasar Modal**: Harga saham di pasar yang efisien mencerminkan seluruh informasi relevan yang tersedia (Efficient Market Hypothesis / EMH).'
      ]
    }
  ]
};
