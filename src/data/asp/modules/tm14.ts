import type { Reading } from '../../../types';
import { CASE_DIGITAL_SIPD_SPAN_GOVERNANCE } from '../aspPracticeCases';

const SVG_DIGITAL_TRENDS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="dt1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="dt2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="dt3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp14)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">TREN DIGITALISASI &amp; MASA DEPAN AKUNTANSI SEKTOR PUBLIK: SIPD, SPAN, &amp; GREEN BUDGETING</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FUTURE TRENDS</text>

  <!-- 3 Pillars Grid -->
  <!-- 1. SIPD & SPAN Integration -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#dt1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">1. INTEGRASI SIPD &amp; SPAN</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="55" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Sistem Informasi Satu Data Keuangan</text>
    
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• SIPD-RI (Kemendagri): Menyatukan perencanaan, penganggaran, penatausahaan, &amp; akuntansi 542 Pemda se-Indonesia</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">• SPAN &amp; SAKTI (Kemenkeu): ERP Keuangan Negara APBN terintegrasi Single Treasury Account</text>
    <text class="text-accent-blue" x="14" y="142" fill="#38bdf8" font-size="7.5" font-weight="700">• Menghilangkan data silo dan manipulasi anggaran</text>

    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">ERP Sektor Publik Terintegrasi</text>
  </g>

  <!-- 2. Green Budgeting & SDGs -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#dt2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">2. GREEN BUDGETING &amp; CLIMATE</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="55" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Penandaan Anggaran Iklim (Climate Tagging)</text>
    
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• Climate Budget Tagging (CBT): Melacak belanja mitigasi dan adaptasi perubahan iklim di APBN/APBD</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">• Penerbitan Green Sukuk (Surat Berharga Syariah Hijau) untuk proyek energi terbarukan</text>
    <text class="text-accent-green" x="14" y="142" fill="#34d399" font-size="7.5" font-weight="700">• Pelaporan Capaian 17 Target SDGs PBB</text>

    <rect class="svg-badge-green" x="14" y="185" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Fiskal Berkelanjutan &amp; Ramah Lingkungan</text>
  </g>

  <!-- 3. AI & Continuous Auditing -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#dt3)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">3. AUDIT DIGITAL &amp; ANALITIK</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="55" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Continuous Auditing &amp; AI Forensik</text>
    
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• Big Data Analytics BPK &amp; BPKP untuk mendeteksi transaksi janggal, split billing pengadaan, &amp; vendor fiktif</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">• Pemantauan real-time transaksi e-Purchasing &amp; transaksi nontunai (Cashless Pemda)</text>
    <text class="text-accent-purple" x="14" y="142" fill="#a78bfa" font-size="7.5" font-weight="700">• Transparansi Open Government Data bagi publik</text>

    <rect class="svg-badge-purple" x="14" y="185" width="237" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Pencegahan Korupsi Berbasis Kecerdasan Buatan</text>
  </g>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Topik Kontemporer & Tren Riset Akuntansi Sektor Publik (Digital Governance, Green Budgeting, Anti-Fraud)',
  ref: 'Permendagri 70/2019 SIPD | Kebijakan Climate Budget Tagging Kemenkeu | Tren Tata Kelola Publik Digital',
  intro: 'TM 14 membahas lanskap masa depan akuntansi sektor publik: integrasi sistem informasi digital berbasis cloud (Sistem Informasi Pemerintahan Daerah / SIPD-RI dan Sistem Perbendaharaan dan Anggaran Negara / SPAN), standarisasi Bagan Akun Standar (BAS), implementasi Green Budgeting (Climate Budget Tagging dan Green Sukuk), akuntabilitas keberlanjutan sosial (SDGs), serta strategi pencegahan kecurangan anggaran menggunakan Whistleblowing System (WBS) dan audit investigatif forensik digital.',
  objectives: [
    'Menganalisis dampak penerapan SIPD-RI terhadap konsistensi dokumen perencanaan dan pencegahan ghost budgeting.',
    'Menjelaskan konsep Climate Budget Tagging (Green Budgeting) dalam struktur APBN dan APBD.',
    'Mengevaluasi peran akuntabilitas digital dalam meningkatkan Skor Indeks Persepsi Korupsi (IPK) Indonesia.',
    'Mengidentifikasi topik-topik riset kontemporer skripsi dan tesis di bidang Akuntansi Sektor Publik.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 14.1: Tiga Dimensi Tren Kontemporer Akuntansi Sektor Publik di Era Digital.',
      svg: SVG_DIGITAL_TRENDS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 14'
    },
    {
      kind: 'table',
      headers: ['Tren Kontemporer', 'Inisiatif Kebijakan Pemerintah', 'Dampak Akuntabilitas', 'Tantangan Lapangan'],
      rows: [
        ['Digital Governance (SIPD)', 'Sistem Informasi Pemerintahan Daerah RI (Permendagri 70/2019).', 'Seluruh siklus dari Musrenbang hingga SP2D terkunci dalam satu basis data.', 'Kesiapan infrastruktur internet di daerah 3T dan resistensi birokrasi lama.'],
        ['Green Budgeting', 'Climate Budget Tagging (CBT) dan penerbitan Green Sukuk Kemenkeu.', 'Transparansi porsi belanja negara untuk mitigasi perubahan iklim dan emisi karbon.', 'Standar taksonomi hijau daerah yang belum seragam antar-organisasi perangkat daerah.'],
        ['Anti-Corruption Governance', 'Integrasi e-Katalog LKPP, MCP KPK (Monitoring Center for Prevention).', 'Meniadakan transaksi tatap muka tunai pada pengadaan proyek barang dan jasa.', 'Modus suap kickback di luar sistem perbankan resmi (Under-the-table transfer).'],
        ['SDGs Accounting', 'Penyelarasan program APBD dengan 17 Tujuan Pembangunan Berkelanjutan.', 'Pengukuran dampak nyata pengeluaran publik terhadap kemiskinan dan pendidikan.', 'Keterbatasan data statistik mikro di tingkat pemerintah desa.']
      ],
      caption: 'Tabel 14.0: Matriks tren kontemporer dan arah kebijakan akuntansi sektor publik masa depan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Climate Budget Tagging & Integritas Fiskal'
    },
    {
      kind: 'formula',
      text: `\\text{Rasio Green Budgeting (Climate Tagging Ratio)} = \\frac{\\text{Total Belanja Terkait Mitigasi & Adaptasi Iklim}}{\\text{Total Belanja APBN / APBD}} \\times 100\\%
\\text{Prinsip Locking System SIPD}: \\quad \\text{Belanja RKA Wajib Berelasi 1-to-1 dengan Sub-Kegiatan di RKPD}
\\text{Jika } \\text{Program } \\notin \\text{ RKPD} \\implies \\text{Sistem Menolak Input Anggaran Otomatis (Anti-Ghost Budgeting)}`,
      note: 'Teknologi digital governance mentransformasikan akuntansi sektor publik dari sekadar pencatatan administratif historis menjadi instrumen pencegahan kecurangan (Fraud Prevention) secara real-time.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Analisis Studi Kasus Pokok Pikiran (Pokir) DPRD Siluman',
      prompt: 'Sebuah anggota DPRD memasukkan usulan proyek pengadaan tenda pesta sebesar Rp 2 Miliar pada malam hari menjelang penetapan Perda APBD tanpa melalui tahapan Musrenbang dan RKPD. Mengapa sistem SIPD modern secara otomatis menggagalkan upaya penyelundupan anggaran ini?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Fitur Digital Locking System**: Dalam arsitektur SIPD terpadu, setiap sub-kegiatan belanja di RKA-SKPD wajib merujuk pada kode ID usulan yang telah diverifikasi pada tahap RKPD.',
            '**2. Ketiadaan Rekam Jejak (No Digital Trail)**: Karena usulan tersebut tidak memiliki riwayat input sejak Musrenbang atau e-Pokir terdaftar di awal tahun, database SIPD akan menolak pembentukan DPA untuk pos tersebut.',
            '**3. Transparansi Jejak Audit**: Upaya memaksakan mata anggaran di luar sistem akan langsung terekam pada audit log sistem yang dapat diakses oleh KPK dan BPKP.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Arsitektur SIPD dan SPAN', 'Interkoneksi data perencanaan, penganggaran, penatausahaan, dan pelaporan.', 'Mampu menganalisis efektivitas tata kelola keuangan digital.'],
        ['2', 'Konsep Green Budgeting', 'Mekanisme climate budget tagging dan instrumen green bond/sukuk negara.', 'Mampu mengevaluasi kebijakan fiskal ramah lingkungan.'],
        ['3', 'Pemberantasan Korupsi & WBS', 'Peran akuntansi forensik, audit investigatif, dan Whistleblowing System.', 'Mampu merancang sistem deteksi kecurangan anggaran publik.']
      ],
      caption: 'Tabel 14.2: Peta penguasaan submateri TM 14 Akuntansi Sektor Publik.'
    },
    CASE_DIGITAL_SIPD_SPAN_GOVERNANCE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**SIPD Mewujudkan Satu Data Indonesia**: Integrasi SIPD menghilangkan duplikasi sistem pembukuan daerah yang sebelumnya berbeda-beda antar-kabupaten/kota.',
        '**Green Sukuk Indonesia Pelopor Dunia**: Indonesia merupakan negara pertama di dunia yang menerbitkan Green Sukuk di pasar global untuk membiayai proyek energi terbarukan dan transportasi ramah lingkungan.',
        '**Masa Depan Profesi Akuntan Publik**: Akuntan sektor publik masa depan dituntut menguasai data analytics, pemahaman hukum tata kelola publik, serta kemampuan mengaudit sistem informasi digital pemerintahan.'
      ]
    }
  ]
};
