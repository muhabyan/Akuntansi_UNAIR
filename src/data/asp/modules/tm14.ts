import type { Reading } from '../../../types';
import { CASE_DIGITAL_SIPD_SPAN_GOVERNANCE } from '../aspPracticeCases';

const SVG_DIGITAL_TRENDS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TREN KONTEMPORER AKUNTANSI SEKTOR PUBLIK: DIGITALISASI, TATA KELOLA, &amp; SUSTAINABILITY</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">SIPD &amp; SPAN DIGITAL</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Integrated Financial System):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• SIPD-RI Kemendagri Terpadu</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• SPAN Kemenkeu Real-Time</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menghapus 'Anggaran Siluman'</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Single Source of Truth</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">GREEN BUDGETING</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Sustainability &amp; ESG):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penandaan Anggaran Iklim</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penerbitan Green Sukuk Negara</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Akuntansi Emisi Karbon Pemda</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Keberlanjutan Fiskal</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">INTEGRITAS &amp; ANTI-FRAUD</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Public Governance):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Whistleblowing System (WBS)</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kolaborasi KPK &amp; BPKP</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Audit Investigatif Berbasis AI</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Clean Government</text>
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
