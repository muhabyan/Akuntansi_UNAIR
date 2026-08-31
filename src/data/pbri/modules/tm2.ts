import type { Reading } from '../../../types';
import { CASE_AUDIT_ETHICS_INDEPENDENCE } from '../pbriPracticeCases';

const SVG_ETHICS_THREATS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA ANCAMAN INDEPENDENSI AUDITOR (KODE ETIK IESBA / IAPI)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="82" y="78" fill="#f43f5e" font-size="10.5" font-weight="700" text-anchor="middle">1. Self-Interest</text>
  <text x="82" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Kepentingan</text>
  <text x="82" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Finansial Pribadi</text>
  <text x="82" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Miliki saham klien</text>
  <text x="82" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Contingent fee</text>
  <text x="82" y="164" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Ketergantungan fee</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="212" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">2. Self-Review</text>
  <text x="212" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Mengaudit Hasil</text>
  <text x="212" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Kerja Sendiri</text>
  <text x="212" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Jasa pembukuan</text>
  <text x="212" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Desain sistem TI</text>
  <text x="212" y="164" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Jasa valuasi internal</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="342" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">3. Advocacy</text>
  <text x="342" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Mempromosikan</text>
  <text x="342" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Posisi Klien</text>
  <text x="342" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Kuasa hukum litigasi</text>
  <text x="342" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Promotor saham klien</text>
  <text x="342" y="164" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Menjamin pinjaman</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">4. Familiarity</text>
  <text x="472" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Kedekatan / Hub.</text>
  <text x="472" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Keluarga Akrab</text>
  <text x="472" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Kerabat di klien</text>
  <text x="472" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Terlalu lama audit</text>
  <text x="472" y="164" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Menerima hadiah mahal</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="10.5" font-weight="700" text-anchor="middle">5. Intimidation</text>
  <text x="602" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Tekanan &amp; Ancaman</text>
  <text x="602" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">dari Manajemen</text>
  <text x="602" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Diancam dipecat</text>
  <text x="602" y="148" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Dibatasi fee audit</text>
  <text x="602" y="164" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Ditekan turunkan bukti</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Etika Profesi, Dilema Etis, & Independensi Auditor',
  ref: 'Arens Ch. 4 | Kode Etik IESBA & IAPI',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 2: Menguasai 5 prinsip dasar etika akuntan profesional, kerangka penyelesaian dilema etis, analisis 5 kategori ancaman independensi (Self-interest, Self-review, Advocacy, Familiarity, Intimidation), tindakan pencegahan (Safeguards), serta regulasi rotasi KAP & Akuntan Publik.',
  objectives: [
    'Memahami pentingnya kepercayaan publik dan standar etika tinggi bagi profesi akuntan publik.',
    'Menguasai 5 Prinsip Dasar Etika: Integritas, Objektivitas, Kompetensi & Kehati-hatian Profesional, Kerahasiaan, dan Perilaku Profesional.',
    'Membedakan Independensi dalam Pikiran (Independence of Mind) vs Independensi dalam Penampilan (Independence in Appearance).',
    'Mengidentifikasi dan mengevaluasi 5 ancaman independensi sesuai Kode Etik IESBA / IAPI.',
    'Merancang tindakan pengamanan (Safeguards) yang tepat untuk mengeliminasi atau mereduksi ancaman ke tingkat yang dapat diterima.',
    'Memahami regulasi rotasi Akuntan Publik (AP) dan Kantor Akuntan Publik (KAP) sesuai PP No. 20/2015.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta 5 Kategori Ancaman terhadap Independensi Auditor',
      svg: SVG_ETHICS_THREATS,
      caption: 'Gambar 2.1: Klasifikasi ancaman independensi menurut Kode Etik IAPI dan IESBA.'
    },

    { kind: 'h2', text: '1. Lima Prinsip Dasar Etika Profesi (IESBA & IAPI)' },
    {
      kind: 'table',
      headers: ['Prinsip Etika', 'Definisi & Makna Normatif', 'Contoh Pelanggaran'],
      rows: [
        ['1. Integritas (Integrity)', 'Bersikap lugas, jujur, dan berterus-terang dalam semua hubungan profesional dan bisnis.', 'Menandatangani laporan audit yang disadari berisi data manipulatif.'],
        ['2. Objektivitas (Objectivity)', 'Tidak mengorbankan pertimbangan profesional karena adanya bias, benturan kepentingan, atau pengaruh pihak lain.', 'Menyetujui perlakuan akuntansi keliru karena menerima fasilitas liburan dari klien.'],
        ['3. Kompetensi & Kehati-hatian (Professional Competence and Due Care)', 'Mempertahankan pengetahuan dan keahlian profesional pada tingkat yang disyaratkan serta bertindak cermat.', 'Menerima penugasan audit bank derivatif tanpa memiliki keahlian instrumen keuangan.'],
        ['4. Kerahasiaan (Confidentiality)', 'Menjaga kerahasiaan informasi yang diperoleh selama perikatan tanpa izin tertulis (kecuali ada kewajiban hukum).', 'Membocorkan rencana merger rahasia klien kepada rekanan bisnis.'],
        ['5. Perilaku Profesional (Professional Behavior)', 'Mematuhi peraturan perundang-undangan dan menghindari tindakan yang mendiskreditkan profesi.', 'Membuat iklan yang melebih-lebihkan kemampuan atau meremehkan KAP lain.']
      ],
      caption: 'Tabel 2.1: Lima pilar prinsip etika dasar akuntan profesional.'
    },

    { kind: 'h2', text: '2. Konsep Independensi Auditor' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dua Dimensi Independensi Wajib',
      text: '1. **Independensi dalam Pikiran (Independence of Mind)**: Keadaan pikiran yang memungkinkan pernyataan simpulan tanpa dipengaruhi faktor yang membatalkan pertimbangan profesional (kejujuran internal dan integritas batin).\n2. **Independensi dalam Penampilan (Independence in Appearance)**: Sikap menghindari fakta dan kondisi yang begitu signifikan sehingga pihak ketiga yang berpengetahuan luas akan menyimpulkan integritas auditor telah runtuh.'
    },

    CASE_AUDIT_ETHICS_INDEPENDENCE,

    { kind: 'h2', text: '3. Regulasi Rotasi Partner & KAP (PP No. 20/2015)' },
    {
      kind: 'p',
      text: 'Untuk mengatasi ancaman kedekatan (*Familiarity Threat*), regulasi di Indonesia menetapkan batas masa perikatan (Cooling-off Period):'
    },
    {
      kind: 'ul',
      items: [
        '**Akuntan Publik (Partner Penandatangan)**: Dibatasi maksimal **5 tahun buku berturut-turut** mengaudit klien yang sama, dengan masa jeda (*cooling-off*) sekurang-kurangnya **3 tahun berturut-turut** sebelum boleh kembali mengaudit klien tersebut.',
        '**KAP (Entitas Kantor)**: Dapat mengaudit tanpa batas waktu selama partner yang menandatangani laporan dirotasi secara berkala sesuai ketentuan.'
      ]
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**Contingent Fee**: Dilarang mutlak dalam perikatan audit laporan keuangan.',
        '**Non-Audit Services**: Jasa pembukuan dan penyusunan lapkeu dilarang untuk entitas publik (Tbk) karena menimbulkan *Self-Review Threat*.',
        '**Kerabat Klien**: Anggota tim audit yang memiliki hubungan keluarga langsung dengan manajemen klien wajib dikeluarkan dari tim audit.'
      ]
    }
  ]
};