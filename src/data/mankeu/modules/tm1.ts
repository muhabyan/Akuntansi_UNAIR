import type { Reading } from '../../../types';
import { CASE_AGENCY_CORPORATE_GOVERNANCE } from '../mankeuPracticeCases';

const SVG_AGENCY_GOVERNANCE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="shGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="mgGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="crGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">TRIANGLE TEORI KEAGENAN (AGENCY THEORY) &amp; TATA KELOLA KEUANGAN</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">AGENCY MODEL</text>

  <!-- Left: Triangular Stakeholder Conflict Diagram -->
  <g transform="translate(35, 75)">
    <!-- Top: Shareholders -->
    <rect class="svg-card" x="120" y="0" width="200" height="52" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="220" y="22" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. PEMEGANG SAHAM (PRINCIPAL)</text>
    <text class="svg-text" x="220" y="38" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tujuan: Maksimalkan Nilai Saham &amp; Dividen</text>

    <!-- Bottom Left: Management -->
    <rect class="svg-card" x="0" y="150" width="190" height="52" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="95" y="172" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. MANAJEMEN (AGENT)</text>
    <text class="svg-text" x="95" y="188" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tujuan: Gaji, Fasilitas, &amp; Kekuasaan</text>

    <!-- Bottom Right: Creditors -->
    <rect class="svg-card" x="250" y="150" width="190" height="52" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="345" y="172" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">3. KREDITOR / PERBANKAN</text>
    <text class="svg-text" x="345" y="188" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Tujuan: Keamanan Pokok &amp; Bunga Utang</text>

    <!-- Connecting Dynamic Conflict Lines -->
    <line x1="180" y1="52" x2="110" y2="150" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text class="text-accent-red" x="115" y="105" fill="#f87171" font-size="7" font-weight="700">Agency Conflict 1</text>

    <line x1="260" y1="52" x2="330" y2="150" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text class="text-accent-red" x="325" y="105" fill="#f87171" font-size="7" font-weight="700">Agency Conflict 2</text>

    <line x1="190" y1="176" x2="250" y2="176" stroke="#334155" stroke-width="1.5"/>
  </g>

  <!-- Right: 3 Mitigation Solutions Cards -->
  <g transform="translate(500, 75)">
    <rect class="svg-subcard" x="0" y="0" width="365" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="9.5" font-weight="800">1. KOMPENSASI BERBASIS KINERJA (ESOP)</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="8">Memberikan opsi saham kepada direksi agar kepentingan manajer</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">sejalan dengan pemegang saham untuk memacu harga saham.</text>

    <rect class="svg-subcard" x="0" y="78" width="365" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="14" y="98" fill="#fbbf24" font-size="9.5" font-weight="800">2. PENGAWASAN DEWAN KOMISARIS INDEPENDEN</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">Audit eksternal independen dan komite audit untuk membatasi</text>
    <text class="svg-text" x="14" y="130" fill="#cbd5e1" font-size="8">pengeluaran fasilitas berlebihan (Perquisites) oleh direksi.</text>

    <rect class="svg-subcard" x="0" y="156" width="365" height="70" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="14" y="176" fill="#a78bfa" font-size="9.5" font-weight="800">3. PERJANJIAN PEMBATASAN UTANG (DEBT COVENANTS)</text>
    <text class="svg-text" x="14" y="194" fill="#cbd5e1" font-size="8">Kreditor mensyaratkan batas rasio leverage (DER &lt; 2x) &amp; saldo kas</text>
    <text class="svg-text" x="14" y="208" fill="#cbd5e1" font-size="8">minimum sebelum perusahaan boleh membagikan dividen tunai.</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Mekanisme tata kelola yang efektif menekan Biaya Keagenan (Agency Cost) dan memaksimalkan nilai intrinsik perusahaan.</text>
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
