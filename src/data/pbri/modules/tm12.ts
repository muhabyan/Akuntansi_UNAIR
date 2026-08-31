import type { Reading } from '../../../types';

const SVG_COSO_FRAMEWORK = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA KOMPONEN PENGENDALIAN INTERNAL COSO (2013 FRAMEWORK)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. Control Env.</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Lingkungan</text>
  <text x="82" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">Pengendalian</text>
  <line x1="35" y1="122" x2="130" y2="122" stroke="#334155"/>
  <text x="82" y="140" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Tone at the top</text>
  <text x="82" y="156" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Integritas &amp; etika</text>
  <text x="82" y="172" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Struktur organisasi</text>
  <text x="82" y="188" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Komite audit</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. Risk Assess.</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Penilaian</text>
  <text x="212" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">Risiko Klien</text>
  <line x1="165" y1="122" x2="260" y2="122" stroke="#334155"/>
  <text x="212" y="140" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Identifikasi risiko</text>
  <text x="212" y="156" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Estimasi dampak</text>
  <text x="212" y="172" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Risiko fraud</text>
  <text x="212" y="188" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Perubahan bisnis</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">3. Control Act.</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Aktivitas</text>
  <text x="342" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">Pengendalian</text>
  <line x1="295" y1="122" x2="390" y2="122" stroke="#334155"/>
  <text x="342" y="140" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Otorisasi transaksi</text>
  <text x="342" y="156" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Segregasi tugas</text>
  <text x="342" y="172" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Kontrol fisik aset</text>
  <text x="342" y="188" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Rekonsiliasi</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">4. Info &amp; Comm.</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Informasi &amp;</text>
  <text x="472" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">Komunikasi</text>
  <line x1="425" y1="122" x2="520" y2="122" stroke="#334155"/>
  <text x="472" y="140" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Sistem akuntansi</text>
  <text x="472" y="156" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Jejak audit (audit trail)</text>
  <text x="472" y="172" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Saluran pelaporan</text>
  <text x="472" y="188" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Whistleblowing</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="10" font-weight="700" text-anchor="middle">5. Monitoring</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Pemantauan</text>
  <text x="602" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">Berkelanjutan</text>
  <line x1="555" y1="122" x2="650" y2="122" stroke="#334155"/>
  <text x="602" y="140" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Evaluasi berkala</text>
  <text x="602" y="156" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Internal audit review</text>
  <text x="602" y="172" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Tindak lanjut temuan</text>
  <text x="602" y="188" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pengawasan komite</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Pengendalian Internal COSO & General IT Controls (GITC)',
  ref: 'Arens Ch. 10 & 12 | COSO 2013 Framework, SA 315',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 12: Menguasai 5 komponen dan 17 prinsip Pengendalian Internal COSO (2013), konsep segregasi tugas yang memadai, keterbatasan bawaan pengendalian internal, serta pengendalian pada lingkungan Teknologi Informasi (General IT Controls & Application Controls).',
  objectives: [
    'Menjelaskan tujuan pengendalian internal bagi manajemen dan auditor.',
    'Menguasai 5 komponen COSO: Lingkungan Pengendalian, Penilaian Risiko, Aktivitas Pengendalian, Informasi & Komunikasi, serta Pemantauan.',
    'Menerapkan 4 pilar Segregasi Tugas yang Memadai (Custody, Authorization, Recording, Reconciliation).',
    'Memahami keterbatasan bawaan pengendalian internal (Inherent Limitations of Internal Control).',
    'Membedakan Pengendalian Umum TI (General IT Controls - GITC) vs Pengendalian Aplikasi TI (Application Controls).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Komponen Pengendalian Internal Terintegrasi COSO',
      svg: SVG_COSO_FRAMEWORK,
      caption: 'Gambar 12.1: Kerangka kerja pengendalian internal COSO 2013 yang diadopsi dalam standar audit.'
    },

    { kind: 'h2', text: '1. Lima Komponen & Prinsip COSO Framework' },
    {
      kind: 'table',
      headers: ['Komponen COSO', 'Peran Kunci dalam Pengendalian', 'Fokus Utama Pengujian Auditor'],
      rows: [
        ['1. Lingkungan Pengendalian (Control Environment)', 'Landasan bagi seluruh struktur pengendalian (*Tone at the Top*).', 'Komitmen manajemen terhadap integritas, nilai etika, dan independensi Komite Audit.'],
        ['2. Penilaian Risiko (Risk Assessment)', 'Proses entitas mengidentifikasi dan mengelola risiko pencapaian tujuan pelaporan.', 'Mekanisme manajemen mengantisipasi risiko perubahan regulasi dan teknologi baru.'],
        ['3. Aktivitas Pengendalian (Control Activities)', 'Kebijakan dan prosedur yang memastikan arahan manajemen dilaksanakan.', 'Otorisasi transaksi, pemisahan fungsi tugas (*segregation of duties*), dan kontrol fisik.'],
        ['4. Informasi & Komunikasi (Info & Comm)', 'Pertukaran informasi yang relevan untuk mendukung berfungsinya kontrol.', 'Jejak audit (*audit trail*) dalam perangkat lunak ERP (SAP/Oracle) dan pelaporan tepat waktu.'],
        ['5. Pemantauan (Monitoring Activities)', 'Evaluasi berkelanjutan atas efektivitas desain dan operasi kontrol.', 'Fungsi Internal Audit yang independen dan penanganan rekomendasi auditor eksternal.']
      ],
      caption: 'Tabel 12.1: Karakteristik 5 komponen pengendalian internal COSO.'
    },

    { kind: 'h2', text: '2. Segregasi Tugas yang Memadai (Segregation of Duties)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Aturan Emas Pemisahan Empat Fungsi (C-A-R-R)',
      text: 'Untuk mencegah kekeliruan dan kecurangan, individu yang berbeda HARUS menangani:\n1. **Custody (Penyimpanan Fisik Aset)**: Misal kasir yang memegang uang kas atau penjaga gudang stok barang.\n2. **Authorization (Otorisasi Transaksi)**: Manajer yang menyetujui pesanan pembelian atau kredit pelanggan.\n3. **Recording (Pencatatan Akuntansi)**: Bagian akuntansi yang membukukan jurnal dan buku besar.\n4. **Reconciliation (Rekonsiliasi Independen)**: Bagian yang mencocokkan fisik dengan catatan buku besar.'
    },

    { kind: 'h2', text: '3. Pengendalian Teknologi Informasi: GITC vs Application Controls' },
    {
      kind: 'table',
      headers: ['Kategori Kontrol TI', 'Lingkup Penerapan', 'Contoh Pengendalian Kunci'],
      rows: [
        ['General IT Controls (GITC)', 'Berlaku untuk seluruh infrastruktur sistem TI perusahaan.', '• Kontrol Akses Logis (Password, MFA, Privileged Access).\n• Manajemen Perubahan Program (Change Management).\n• Operasi Komputer & Backup Data Disaster Recovery.'],
        ['Application Controls', 'Melekat pada modul pemrosesan transaksi bisnis tertentu.', '• Input Controls: Limit test, validasi format field, check digits.\n• Processing Controls: Batch totals, matching 3-way match otomatis.\n• Output Controls: Distribusi laporan hasil proses hanya ke pihak berhak.']
      ],
      caption: 'Tabel 12.2: Perbandingan GITC dan Application Controls dalam audit TI.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 12' },
    {
      kind: 'ul',
      items: [
        '**Tone at the Top**: Jika lingkungan pengendalian lemah, komponen kontrol lainnya tidak akan efektif.',
        '**GITC Efektif**: Menjadi prasyarat sebelum auditor dapat mengandalkan *Automated Application Controls*.',
        '**Keterbatasan Bawaan**: Kolusi antar karyawan dan pengabaian oleh manajemen (*management override*) tidak dapat dicegah 100% oleh kontrol internal.'
      ]
    }
  ]
};