import type { Reading } from '../../../types';
import { CASE_AUDIT_RISK_MODEL } from '../pbriPracticeCases';

const SVG_AUDIT_RISK_MODEL = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="irGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="crGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="drGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb9)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL RISIKO AUDIT: AR = IR × CR × DR (SA 200 &amp; SA 315)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">RISK MODEL</text>

  <!-- Formula Banner on Top -->
  <g transform="translate(35, 70)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="42" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="415" y="26" fill="#f8fafc" font-size="10.5" font-weight="800" text-anchor="middle">
      AUDIT RISK (AR) = [ <tspan class="text-accent-red" fill="#f87171">INHERENT RISK (IR)</tspan> × <tspan class="text-accent-amber" fill="#fbbf24">CONTROL RISK (CR)</tspan> ] × <tspan class="text-accent-blue" fill="#38bdf8">DETECTION RISK (DR)</tspan>
    </text>
  </g>

  <!-- 3 Components Pillars -->
  <!-- Pillar 1: Inherent Risk -->
  <g transform="translate(35, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#irGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="132" y="20" fill="#f87171" font-size="10" font-weight="800" text-anchor="middle">1. INHERENT RISK (IR)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-red" x="132" y="56" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Risiko Bawaan Alami Saldo Akun</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="7.5">• Kerentanan akun terhadap salah saji tanpa SPI</text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="7.5">• Dipengaruhi kompleksitas transaksi, estimasi nilai</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">  wajar, instrumen derivatif, &amp; tekanan pasar</text>
    <text class="svg-muted" x="14" y="128" fill="#94a3b8" font-size="7.5">• Di luar kendali auditor (Karakteristik klien)</text>
    <rect class="svg-badge-red" x="14" y="148" width="237" height="20" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="132" y="162" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Risiko Lingkungan Bisnis Klien</text>
  </g>

  <!-- Pillar 2: Control Risk -->
  <g transform="translate(318, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#crGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. CONTROL RISK (CR)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="132" y="56" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Risiko Pengendalian Internal (SPI)</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="7.5">• Risiko SPI klien gagal mencegah atau mendeteksi</text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="7.5">  salah saji material secara tepat waktu</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">• Keterbatasan bawaan: Kolusi &amp; kelalaian manusia</text>
    <text class="svg-muted" x="14" y="128" fill="#94a3b8" font-size="7.5">• IR × CR = Risk of Material Misstatement (RMM)</text>
    <rect class="svg-badge-amber" x="14" y="148" width="237" height="20" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="162" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Efektivitas Sistem Pengendalian Internal</text>
  </g>

  <!-- Pillar 3: Detection Risk -->
  <g transform="translate(600, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#drGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">3. DETECTION RISK (DR)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Risiko Deteksi Prosedur Auditor</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="7.5">• Risiko prosedur audit gagal menemukan salah saji</text>
    <text class="text-accent-green" x="14" y="96" fill="#34d399" font-size="7.5" font-weight="700">• SATU-SATUNYA risiko yang BISA dikendalikan</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">  oleh auditor via sampel &amp; kompetensi tim</text>
    <text class="text-accent-blue" x="14" y="128" fill="#38bdf8" font-size="7.5">• Jika RMM Tinggi →DR Ditekan Rendah (Uji Luas)</text>
    <rect class="svg-badge-blue" x="14" y="148" width="237" height="20" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="162" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Hubungan Terbalik (Inverse) dengan RMM</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Hubungan Terbalik: Semakin tinggi risiko bawaan dan kegagalan SPI klien (RMM tinggi), auditor wajib memperluas sampel pengujian agar DR rendah.</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Penilaian Risiko Audit, Risiko Bawaan, & Audit Risk Model (SA 315 & SA 330)',
  ref: 'Arens 16e Ch. 9 | SA 315 (Revisi 2019), SA 330, SA 200 | Audit Risk Model',
  intro: 'TM 9 membahas model risiko audit kuantitatif dan kualitatif: Acceptable Audit Risk (AAR), Inherent Risk (IR), Control Risk (CR), dan Planned Detection Risk (PDR). Serta pengaruh tingkat PDR terhadap kuantitas, sifat (nature), saat (timing), dan luas (extent) pengujian substantif auditor.',
  objectives: [
    'Menghitung Planned Detection Risk (PDR) menggunakan rumus Audit Risk Model.',
    'Menganalisis hubungan berbanding terbalik (invers) antara PDR dan Jumlah Bukti Substantif yang Diperlukan.',
    'Mengidentifikasi faktor-faktor penentu Tingkat Risiko Bawaan (Inherent Risk) spesifik akun.',
    'Menghubungkan Risk of Material Misstatement (RMM = IR × CR) dengan respons auditor sesuai SA 330.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Hubungan Komponen Model Risiko Audit (SA 315 & SA 330).',
      svg: SVG_AUDIT_RISK_MODEL
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Komponen Model Risiko', 'Definisi & Sifat Pengendalian', 'Faktor Penentu Utama', 'Dampak terhadap Bukti Audit'],
      rows: [
        ['Acceptable Audit Risk (AAR)', 'Tingkat kesediaan auditor menerima kemungkinan laporan keuangan mengandung salah saji material setelah audit selesai.', 'Ketergantungan pengguna eksternal (emiten publik), kesehatan finansial klien, integritas manajemen.', 'AAR Rendah -> Auditor ekstra hati-hati -> Bukti audit BANYAK.'],
        ['Inherent Risk (IR)', 'Kerentanan asersi terhadap salah saji material dengan asumsi tidak ada pengendalian internal terkait.', 'Sifat bisnis, transaksi pihak berelasi, estimasi akuntansi kompleks, kerentanan aset dicuri (kas/emas).', 'IR Tinggi -> RMM Tinggi -> PDR Rendah -> Bukti audit BANYAK.'],
        ['Control Risk (CR)', 'Risiko pengendalian internal klien gagal mencegah atau mendeteksi salah saji material secara tepat waktu.', 'Efektivitas desain dan operasi pengendalian internal (diuji melalui Test of Controls).', 'CR Tinggi -> Kontrol klien buruk -> Auditor tidak bisa mengandalkan kontrol -> Bukti substantif BANYAK.'],
        ['Planned Detection Risk (PDR)', 'Risiko bukti pengujian audit gagal mendeteksi salah saji yang melampaui performance materiality.', 'Dihitung secara matematis: PDR = AAR / (IR × CR).', 'PDR Rendah -> Toleransi risiko deteksi kecil -> Sampel audit BESAR & pengujian RINCI.']
      ],
      caption: 'Tabel 9.0: Matriks komponen Audit Risk Model.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Audit Risk Model'
    },
    {
      kind: 'formula',
      text: `\\text{Audit Risk Model}: \\quad AAR = IR \\times CR \\times PDR \\quad \\Longleftr→ \\quad PDR = \\frac{AAR}{IR \\times CR}
\\text{Risk of Material Misstatement (RMM)} = IR \\times CR
\\text{Hubungan Kunci}: \\quad PDR \\downarrow \\quad \\Longr→ \\quad \\text{Jumlah Bukti Substantif (Sample Size)} \\uparrow`,
      note: 'Auditor tidak dapat mengubah IR dan CR klien (faktor independen klien), namun auditor MENGENDALIKAN PDR dengan mengatur luas bukti substantif yang dikumpulkan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan PDR PT Nusantara Tech',
      prompt: 'KAP menetapkan AAR = 2% untuk PT Nusantara Tech (klien IPO). Auditor menilai Inherent Risk akun Pendapatan = 80% dan Control Risk = 50%. Hitung Planned Detection Risk (PDR) dan jelaskan dampaknya terhadap pengujian saldo piutang!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan PDR**: PDR = 2% / (80% × 50%) = 0,02 / 0,40 = **5,0% (Sangat Rendah)**.',
            '**Dampak terhadap Pengujian**: PDR yang sangat rendah (5%) mengharuskan auditor mengumpulkan bukti substantif dalam jumlah sangat besar: mengirim konfirmasi positif dengan cakupan >80% total nilai piutang, melakukan uji pisah batas ketat 10 hari sebelum & sesudah tanggal neraca, serta memeriksa bukti penerimaan kas setelah tanggal neraca.'
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
        ['1', 'Rumus Audit Risk Model', 'Kalkulasi matematis PDR, AAR, IR, dan CR.', 'Mampu menghitung PDR dan menganalisis dampak kenaikan/penurunan risiko.'],
        ['2', 'Faktor Penentu Inherent Risk', 'Identifikasi faktor risiko industri, kompleksitas transaksi, dan estimasi.', 'Mampu menetapkan IR tinggi vs rendah pada akun aset dan liabilitas.'],
        ['3', 'Hubungan PDR vs Bukti Audit', 'Logika hubungan berbanding terbalik PDR terhadap ukuran sampel pengujian.', 'Mampu menyusun strategi pengujian berbasis risiko sesuai SA 330.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 PBR I.'
    },
    CASE_AUDIT_RISK_MODEL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Hubungan Invers PDR & Bukti**: PDR berbanding TERBALIK dengan jumlah bukti audit. Semakin rendah PDR, semakin banyak bukti substantif yang wajib dikumpulkan.',
        '**AAR vs Planned Evidence**: Semakin rendah AAR yang diinginkan (semakin tinggi kehati-hatian auditor), semakin banyak bukti audit yang diperlukan.',
        '**RMM di Tingkat Asersi**: Penilaian IR dan CR dilakukan pada tingkat asersi spesifik untuk setiap saldo akun material (SA 315).'
      ]
    }
  ]
};
