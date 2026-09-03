import type { Reading } from '../../../types';
import { CASE_AUDIT_ETHICS_INDEPENDENCE } from '../pbriPracticeCases';

const SVG_ETHICS_THREATS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 ANCAMAN KODE ETIK PROFESI AKUNTAN PUBLIK &amp; PENGAMANANNYA (IESBA / IAPI)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ETHICAL THREATS</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="160" height="150" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <text class="text-accent-red" x="80" y="20" fill="#f87171" font-size="9" font-weight="800" text-anchor="middle">1. DIRI SENDIRI</text>
    <text class="text-accent-red" x="80" y="34" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">(Self-Interest)</text>
    <text class="svg-text" x="8" y="56" fill="#cbd5e1" font-size="7">• Memiliki saham klien</text>
    <text class="svg-text" x="8" y="70" fill="#cbd5e1" font-size="7">• Ketergantungan fee dominan</text>
    <text class="svg-text" x="8" y="84" fill="#cbd5e1" font-size="7">• Fee kontinjen hasil audit</text>
    <text class="svg-text" x="8" y="98" fill="#cbd5e1" font-size="7">• Takut kehilangan klien</text>
    <rect class="svg-badge-red" x="8" y="115" width="144" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="80" y="131" fill="#f87171" font-size="7" font-weight="700" text-anchor="middle">Kepentingan Finansial</text>

    <rect class="svg-card" x="168" y="0" width="160" height="150" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="248" y="20" fill="#fbbf24" font-size="9" font-weight="800" text-anchor="middle">2. TELAAH SENDIRI</text>
    <text class="text-accent-amber" x="248" y="34" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">(Self-Review)</text>
    <text class="svg-text" x="176" y="56" fill="#cbd5e1" font-size="7">• Mengaudit lapkeu buatan KAP</text>
    <text class="svg-text" x="176" y="70" fill="#cbd5e1" font-size="7">• Desain implementasi TI klien</text>
    <text class="svg-text" x="176" y="84" fill="#cbd5e1" font-size="7">• Mantan auditor jadi CFO</text>
    <text class="svg-text" x="176" y="98" fill="#cbd5e1" font-size="7">• Jasa pembukuan akuntansi</text>
    <rect class="svg-badge-amber" x="176" y="115" width="144" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="248" y="131" fill="#fbbf24" font-size="7" font-weight="700" text-anchor="middle">Bias Menguji Hasil Sendiri</text>

    <rect class="svg-card" x="336" y="0" width="160" height="150" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="416" y="20" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">3. ADVOKASI</text>
    <text class="text-accent-blue" x="416" y="34" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">(Advocacy Threat)</text>
    <text class="svg-text" x="344" y="56" fill="#cbd5e1" font-size="7">• Mempromosikan saham klien</text>
    <text class="svg-text" x="344" y="70" fill="#cbd5e1" font-size="7">• Saksi ahli pembela klien</text>
    <text class="svg-text" x="344" y="84" fill="#cbd5e1" font-size="7">  dalam sengketa pajak</text>
    <text class="svg-text" x="344" y="98" fill="#cbd5e1" font-size="7">• Juru bicara negosiasi klien</text>
    <rect class="svg-badge-blue" x="344" y="115" width="144" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="416" y="131" fill="#38bdf8" font-size="7" font-weight="700" text-anchor="middle">Objektivitas Terkompromi</text>

    <rect class="svg-card" x="504" y="0" width="160" height="150" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="584" y="20" fill="#34d399" font-size="9" font-weight="800" text-anchor="middle">4. KEDEKATAN</text>
    <text class="text-accent-green" x="584" y="34" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">(Familiarity Threat)</text>
    <text class="svg-text" x="512" y="56" fill="#cbd5e1" font-size="7">• Hubungan keluarga dekat</text>
    <text class="svg-text" x="512" y="70" fill="#cbd5e1" font-size="7">• Partner audit &gt; 5 tahun</text>
    <text class="svg-text" x="512" y="84" fill="#cbd5e1" font-size="7">• Menerima hadiah bernilai</text>
    <text class="svg-text" x="512" y="98" fill="#cbd5e1" font-size="7">• Terlalu percaya manajemen</text>
    <rect class="svg-badge-green" x="512" y="115" width="144" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="584" y="131" fill="#34d399" font-size="7" font-weight="700" text-anchor="middle">Sikap Skeptis Menurun</text>

    <rect class="svg-card" x="672" y="0" width="160" height="150" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="752" y="20" fill="#a78bfa" font-size="9" font-weight="800" text-anchor="middle">5. INTIMIDASI</text>
    <text class="text-accent-purple" x="752" y="34" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">(Intimidation Threat)</text>
    <text class="svg-text" x="680" y="56" fill="#cbd5e1" font-size="7">• Ancaman pemecatan KAP</text>
    <text class="svg-text" x="680" y="70" fill="#cbd5e1" font-size="7">• Ancaman gugatan perdata</text>
    <text class="svg-text" x="680" y="84" fill="#cbd5e1" font-size="7">• Tekanan menurunkan fee</text>
    <text class="svg-text" x="680" y="98" fill="#cbd5e1" font-size="7">• Pembatasan gerak auditor</text>
    <rect class="svg-badge-purple" x="680" y="115" width="144" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="752" y="131" fill="#a78bfa" font-size="7" font-weight="700" text-anchor="middle">Tekanan Psikologis</text>
  </g>

  <g transform="translate(35, 238)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="75" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="9" font-weight="800">TINDAKAN PENGAMANAN PROFESI (SAFEGUARDS):</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="7.5">1. <tspan class="text-accent-green" fill="#34d399" font-weight="700">Rotasi Partner Audit:</tspan> Wajib rotasi maksimal 5-7 tahun untuk memutus ancaman kedekatan.</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="7.5">2. <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Review Kendali Mutu (EQCR):</tspan> Partner penelaah independen memeriksa kertas kerja sebelum opini rilis.</text>
    <text class="text-accent-red" x="14" y="66" fill="#f87171" font-size="7.5">3. <tspan class="text-accent-amber" fill="#fbbf24" font-weight="700">Menolak Perikatan:</tspan> Jika ancaman tidak dapat ditekan ke tingkat aman, auditor WAJIB mengundurkan diri.</text>
  </g>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Etika Profesi Akuntan Publik, Independensi, & Pengendalian Mutu KAP',
  ref: 'Arens 16e Ch. 2 & 4 | Kode Etik Profesi Akuntan Publik IAPI | SPM 1 / ISQC 1 / ISQM 1',
  intro: 'TM 2 membahas landasan etika dan independensi akuntan publik: 5 prinsip dasar etika profesi (Integritas, Objektivitas, Kompetensi, Kerahasiaan, Perilaku Profesional), 5 kategori ancaman independensi, kerangka kerja tindakan pengamanan (Safeguards), serta Sistem Manajemen Mutu KAP (ISQM 1).',
  objectives: [
    'Menerapkan 5 prinsip dasar etika profesi akuntan publik dalam situasi dilema audit riil.',
    'Mendiagnosis 5 kategori ancaman terhadap independensi dan menentukan tindakan pengamanan (safeguards) yang tepat.',
    'Membedakan konsep Independensi dalam Pemikiran (In Mind) vs Independensi dalam Penampilan (In Appearance).',
    'Memahami aturan rotasi Partner Audit (maksimal 7 tahun berturut-turut) dan pembatasan jasa non-asurans.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: 5 Ancaman Utama Etika & Independensi Auditor menurut Kode Etik IAPI.',
      svg: SVG_ETHICS_THREATS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 2'
    },
    {
      kind: 'table',
      headers: ['Prinsip / Konsep', 'Makna Operasional Standar', 'Pelanggaran Fatal', 'Tindakan Pengamanan (Safeguard)'],
      rows: [
        ['Integritas (Integrity)', 'Bersikap lugas, jujur, dan berterus terang dalam semua hubungan profesional.', 'Menandatangani LAI meski mengetahui laporan keuangan memuat salah saji fiktif.', 'Wajib menolak atau mengundurkan diri dari perikatan (Withdrawal).'],
        ['Objektivitas (Objectivity)', 'Tidak membiarkan bias, benturan kepentingan, atau pengaruh pihak ketiga menodai pertimbangan profesional.', 'Menilai kewajaran estimasi manajemen berdasarkan iming-iming fee tambahan.', 'Penugasan tim audit yang bebas dari keterkaitan finansial/emosional dengan klien.'],
        ['Independensi (In Mind vs In Appearance)', 'In Mind: Kondisi mental berintegritas dan skeptis; In Appearance: Persepsi publik/pihak ketiga bahwa auditor objektif.', 'Partner audit berlibur mewah dibiayai klien publik.', 'Rotasi partner audit, telaah mutu pra-penerbitan (EQCR), dan larangan menerima hadiah bernilai tidak sepele.'],
        ['Sistem Pengendalian Mutu (ISQM 1)', 'KAP wajib memiliki sistem manajemen mutu terpadu untuk memastikan seluruh perikatan mematuhi standar profesi.', 'KAP menerbitkan opini tanpa reviu oleh partner kedua (Engagement Quality Reviewer).', 'Pembentukan unit kendali mutu independen di internal KAP.']
      ],
      caption: 'Tabel 2.0: Matriks etika profesi, independensi, dan manajemen mutu KAP.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Batasan Konsentrasi Fee & Rotasi Partner'
    },
    {
      kind: 'formula',
      text: `\\text{Batas Konsentrasi Fee (Public Interest Entity)} \\le 15\\% \\text{ dari Total Pendapatan KAP Selama 2 Tahun Berturut-turut}
\\text{Masa Perikatan Maksimum Partner Audit (Audit Partner Rotation)} = 7 \\text{ Tahun} \\r→ \\text{Cooling-off Period} = 5 \\text{ Tahun (IESBA)}`,
      note: 'Jika fee dari satu klien publik melampaui 15%, KAP wajib menginformasikan kepada Komite Audit klien dan melakukan evaluasi pengamanan independensi pra-penerbitan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Kasus Hadiah & Saham Klien',
      prompt: 'Seorang Senior Auditor menerima tawaran diskon 50% pembelian mobil dari klien dealer otomotif yang sedang diauditnya. Pada saat yang sama, adik kandungnya bekerja sebagai staf gudang klien. Apakah independensi auditor terganggu?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Diskon Pembelian Mobil**: Merupakan pemberian keuntungan ekonomi bernilai material (bukan sepele). Ini melanggar prinsip independensi (Self-Interest Threat) dan WAJIB DITOLAK.',
            '**Adik sebagai Staf Gudang**: Posisi staf gudang bukan merupakan jabatan pengambil keputusan akuntansi/finansial (Key Management Position), sehingga ancaman kedekatan bersifat rendah. Namun, senior auditor sebaiknya tidak ditugaskan menguji stock opname gudang tempat adiknya bekerja.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '5 Prinsip Dasar Etika IAPI', 'Penerapan Integritas, Objektivitas, Kerahasiaan, Kompetensi, Perilaku.', 'Mampu menganalisis kasus pelanggaran etika auditor di dunia nyata.'],
        ['2', '5 Ancaman & Safeguards', 'Identifikasi Self-interest, Self-review, Advocacy, Familiarity, Intimidation.', 'Mampu merancang langkah mitigasi yang diwajibkan standar profesi.'],
        ['3', 'Regulasi Rotasi & Jasa Non-Audit', 'Aturan rotasi partner audit dan larangan perangkapan jasa audit + pembukuan.', 'Menguasai batasan hukum UU AP No. 5/2011 dan POJK terkait.']
      ],
      caption: 'Tabel 2.2: Peta penguasaan submateri TM 2 PBR I.'
    },
    CASE_AUDIT_ETHICS_INDEPENDENCE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Fee Kontinjensi**: DILARANG MUTLAK dalam audit laporan keuangan (misalnya fee berdasarkan persentase laba bersih klien).',
        '**Kerahasiaan Data Klien**: Auditor wajib menjaga kerahasiaan informasi klien KECUALI jika diwajibkan oleh proses peradilan hukum atau reviu kendali mutu resmi IAPI.',
        '**Skeptisisme Profesional**: Sikap yang selalu mempertanyakan bukti audit secara kritis dan waspada terhadap kondisi yang mengindikasikan kemungkinan salah saji karena kecurangan.',
        '**Independensi In Appearance**: Tidak cukup hanya jujur di dalam hati (in mind), auditor harus terlihat independen di mata publik yang rasional.'
      ]
    }
  ]
};
