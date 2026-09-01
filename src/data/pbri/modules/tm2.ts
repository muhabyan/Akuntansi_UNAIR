import type { Reading } from '../../../types';
import { CASE_AUDIT_ETHICS_INDEPENDENCE } from '../pbriPracticeCases';

const SVG_ETHICS_THREATS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5 ANCAMAN ETIKA &amp; INDEPENDENSI AUDITOR (KODE ETIK IAPI / IESBA)</text>
  
  <rect x="25" y="52" width="118" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="84" y="75" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">SELF-INTEREST</text>
  <text x="84" y="94" fill="#94a3b8" font-size="9" text-anchor="middle">Kepentingan Pribadi:</text>
  <text x="84" y="112" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Memiliki saham klien,</text>
  <text x="84" y="128" fill="#cbd5e1" font-size="8.5" text-anchor="middle">fee kontinjensi, atau</text>
  <text x="84" y="144" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ketergantungan fee</text>
  <text x="84" y="160" fill="#fca5a5" font-size="8.5" text-anchor="middle">&gt;15% dr klien.</text>

  <rect x="153" y="52" width="118" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="212" y="75" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">SELF-REVIEW</text>
  <text x="212" y="94" fill="#94a3b8" font-size="9" text-anchor="middle">Telaah Pribadi:</text>
  <text x="212" y="112" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Mengaudit sistem</text>
  <text x="212" y="128" fill="#cbd5e1" font-size="8.5" text-anchor="middle">atau pembukuan yg</text>
  <text x="212" y="144" fill="#cbd5e1" font-size="8.5" text-anchor="middle">dibuat sendiri oleh</text>
  <text x="212" y="160" fill="#fde68a" font-size="8.5" text-anchor="middle">tim/KAP yg sama.</text>

  <rect x="281" y="52" width="118" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="340" y="75" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">ADVOCACY</text>
  <text x="340" y="94" fill="#94a3b8" font-size="9" text-anchor="middle">Advokasi:</text>
  <text x="340" y="112" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Mempromosikan</text>
  <text x="340" y="128" fill="#cbd5e1" font-size="8.5" text-anchor="middle">saham klien atau</text>
  <text x="340" y="144" fill="#cbd5e1" font-size="8.5" text-anchor="middle">menjadi saksi ahli</text>
  <text x="340" y="160" fill="#ddd6fe" font-size="8.5" text-anchor="middle">membela klien.</text>

  <rect x="409" y="52" width="118" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="468" y="75" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">FAMILIARITY</text>
  <text x="468" y="94" fill="#94a3b8" font-size="9" text-anchor="middle">Kedekatan:</text>
  <text x="468" y="112" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keluarga kandung</text>
  <text x="468" y="128" fill="#cbd5e1" font-size="8.5" text-anchor="middle">menjabat CFO atau</text>
  <text x="468" y="144" fill="#cbd5e1" font-size="8.5" text-anchor="middle">perikatan audit</text>
  <text x="468" y="160" fill="#bae6fd" font-size="8.5" text-anchor="middle">&gt;7 thn tanpa rotasi.</text>

  <rect x="537" y="52" width="118" height="145" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="596" y="75" fill="#ec4899" font-size="10.5" font-weight="700" text-anchor="middle">INTIMIDATION</text>
  <text x="596" y="94" fill="#94a3b8" font-size="9" text-anchor="middle">Intimidasi:</text>
  <text x="596" y="112" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Diancam diganti,</text>
  <text x="596" y="128" fill="#cbd5e1" font-size="8.5" text-anchor="middle">diancam dituntut,</text>
  <text x="596" y="144" fill="#cbd5e1" font-size="8.5" text-anchor="middle">atau ditekan fee</text>
  <text x="596" y="160" fill="#fbcfe8" font-size="8.5" text-anchor="middle">scr tidak wajar.</text>
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
\\text{Masa Perikatan Maksimum Partner Audit (Audit Partner Rotation)} = 7 \\text{ Tahun} \\rightarrow \\text{Cooling-off Period} = 5 \\text{ Tahun (IESBA)}`,
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
