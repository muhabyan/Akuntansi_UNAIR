import type { Reading } from '../../../types';

const SVG_CONTEMPORARY_ISSUES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TOPIK RISET &amp; ISU KONTEMPORER AKUNTANSI SEKTOR PUBLIK</text>
  
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Digital Governance</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">SPBE &amp; Big Data</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• SIPD-RI &amp; e-Procurement</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• AI &amp; Continuous Auditing</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Open Gov Data Portal</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Transparansi Real-Time</text>

  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. Anti-Korupsi</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Integritas &amp; Fraud</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Whistleblowing System</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Audit Forensik Tipikor</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Zona Integritas (WBK/WBBM)</text>
  <text x="340" y="186" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Akuntabilitas Moral</text>

  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. Public Value &amp; ESG</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Keberlanjutan Fiskal</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Green Budgeting / SDGs</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Akuntabilitas Dana Desa</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Public Value Creation</text>
  <text x="555" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Dampak Sosial Luas</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Topik-Topik Riset Kontemporer & Tren Akuntansi Sektor Publik',
  ref: 'Jurnal Akuntansi Sektor Publik (JASP, JPAP) | BPK & Kemenkeu Research Papers',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 14: Menguasai perkembangan teori dan ranah penelitian mutakhir akuntansi sektor publik, digitalisasi Sistem Pemerintahan Berbasis Elektronik (SPBE), penganggaran hijau (*Green Budgeting*), tata kelola akuntabilitas Keuangan Desa (UU Desa), serta pencegahan korupsi dan pembangunan Zona Integritas (WBK/WBBM).',
  objectives: [
    'Mengidentifikasi agenda riset empiris dan kualitatif utama dalam Akuntansi Sektor Publik.',
    'Menganalisis dampak transformasi digital SPBE (SIPD-RI, SAKTI, SPAN, e-Katalog LKPP) terhadap transparansi anggaran.',
    'Menjelaskan konsep Green Budgeting (Climate Budget Tagging) dalam mendukung pencapaian target emisi dan SDGs.',
    'Menganalisis tata kelola dan akuntabilitas akuntansi Keuangan Desa (Siskeudes).',
    'Memahami kerangka pembangunan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Klaster Topik Riset Kontemporer Akuntansi Sektor Publik',
      svg: SVG_CONTEMPORARY_ISSUES,
      caption: 'Gambar 14.1: Area inovasi digital, pencegahan kecurangan, dan keberlanjutan sektor publik.'
    },

    { kind: 'h2', text: '1. Klaster Topik Penelitian Akuntansi Sektor Publik' },
    {
      kind: 'table',
      headers: ['Klaster Riset', 'Fokus Isu Penelitian', 'Metodologi & Teori Utama'],
      rows: [
        ['1. Kualitas Pelaporan Keuangan (LKPD/LKPP)', 'Faktor-faktor penentu opini WTP BPK, kompetensi SDM pengelola keuangan, pemanfaatan SIMDA/SIPD, dan SPI.', 'Institutional Theory, Resource-Based View, Analisis Regresi Logistik.'],
        ['2. Akuntabilitas & Transparansi Keuangan Desa', 'Efektivitas penggunaan Dana Desa untuk pengentasan kemiskinan, partisipasi warga dalam Musrenbangdes, dan penggunaan Siskeudes.', 'Stewardship Theory, Stakeholder Theory, Pendekatan Kualitatif / Studi Kasus.'],
        ['3. Budgetary Slack & Perilaku Penganggaran', 'Kecenderungan dinas/OPD mengelembungkan estimasi biaya belanja atau mengecilkan target penerimaan pendapatan.', 'Agency Theory, Teori Perilaku / Asimetri Informasi.'],
        ['4. Green Budgeting & Keberlanjutan Publik', 'Pengalokasian anggaran daerah berbasis mitigasi perubahan iklim dan audit lingkungan hidup.', 'Public Value Theory, Legitimacy Theory.']
      ],
      caption: 'Tabel 14.1: Pemetaan topik skripsi dan publikasi ilmiah ASP.'
    },

    { kind: 'h2', text: '2. Pembangunan Zona Integritas (WBK & WBBM)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Enam Area Perubahan Reformasi Birokrasi',
      text: '1. **Manajemen Perubahan**: Mengubah pola pikir (*mindset*) dan budaya kerja aparatur sipil negara.\n2. **Penataan Tatalaksana**: Digitalisasi SOP dan integrasi e-Government.\n3. **Penataan Sistem Manajemen SDM**: Penempatan aparatur berbasis meritokrasi kompetensi.\n4. **Penguatan Akuntabilitas**: Peningkatan capaian SAKIP dan LAKIP secara berjenjang.\n5. **Penguatan Pengawasan**: Implementasi *Whistleblowing System* (WBS) dan Pengendalian Gratifikasi.\n6. **Peningkatan Kualitas Pelayanan Publik**: Penyediaan inovasi layanan prima bebas pungli.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**Siskeudes (Sistem Keuangan Desa)**: Aplikasi resmi kolaborasi BPKP dan Kemendagri untuk standardisasi penatausahaan APBDes.',
        '**Climate Budget Tagging (CBT)**: Penandaan pos belanja APBN/APBD yang secara langsung berkontribusi pada penurunan emisi gas rumah kaca.',
        '**Public Value**: Keberhasilan pemerintah dinilai dari nilai publik (*social value*) yang diciptakan bagi kualitas hidup warga negara.'
      ]
    }
  ]
};