import type { Reading } from '../../../types';
import { CASE_COSO_INTERNAL_CONTROL } from '../pbriPracticeCases';

const SVG_COSO_CUBE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="c1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="c2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="c3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="c4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="c5" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb11)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 KOMPONEN PENGENDALIAN INTERNAL COSO FRAMEWORK &amp; 17 PRINSIP (SA 315)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">COSO FRAMEWORK</text>

  <!-- 5 Horizontal Stepped Layers Cascade (Bottom to Top) -->
  <!-- 5. Monitoring (Top) -->
  <g transform="translate(45, 68)">
    <rect class="svg-card" x="0" y="0" width="810" height="42" rx="6" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="16" rx="6" fill="url(#c5)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="14" y="13" fill="#34d399" font-size="8.5" font-weight="800">5. PEMANTAUAN (MONITORING ACTIVITIES) - 2 Prinsip</text>
    <text class="svg-text" x="14" y="30" fill="#cbd5e1" font-size="7.5">Evaluasi berkelanjutan oleh Internal Audit &amp; Komite Audit; pelaporan defisiensi kepada Dewan Direksi &amp; Komisaris.</text>
  </g>

  <!-- 4. Information & Communication -->
  <g transform="translate(45, 116)">
    <rect class="svg-card" x="0" y="0" width="810" height="42" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="16" rx="6" fill="url(#c4)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="14" y="13" fill="#fbbf24" font-size="8.5" font-weight="800">4. INFORMASI DAN KOMUNIKASI (INFORMATION &amp; COMMUNICATION) - 3 Prinsip</text>
    <text class="svg-text" x="14" y="30" fill="#cbd5e1" font-size="7.5">Sistem informasi akuntansi yang andal, saluran pelaporan pelanggaran (Whistleblowing System), komunikasi eksternal regulator.</text>
  </g>

  <!-- 3. Control Activities -->
  <g transform="translate(45, 164)">
    <rect class="svg-card" x="0" y="0" width="810" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="16" rx="6" fill="url(#c3)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="14" y="13" fill="#38bdf8" font-size="8.5" font-weight="800">3. AKTIVITAS PENGENDALIAN (CONTROL ACTIVITIES) - 3 Prinsip</text>
    <text class="svg-text" x="14" y="30" fill="#cbd5e1" font-size="7.5">Pemisahan tugas (Segregation of Duties), otorisasi bertingkat, verifikasi berkas, rekonsiliasi bank, &amp; kontrol fisik aset.</text>
  </g>

  <!-- 2. Risk Assessment -->
  <g transform="translate(45, 212)">
    <rect class="svg-card" x="0" y="0" width="810" height="42" rx="6" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="16" rx="6" fill="url(#c2)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="14" y="13" fill="#f87171" font-size="8.5" font-weight="800">2. PENILAIAN RISIKO (RISK ASSESSMENT) - 4 Prinsip</text>
    <text class="svg-text" x="14" y="30" fill="#cbd5e1" font-size="7.5">Identifikasi risiko bisnis makro, penilaian signifikansi risiko kecurangan (Fraud Risk Assessment), &amp; respon risiko perubahan.</text>
  </g>

  <!-- 1. Control Environment (Foundation) -->
  <g transform="translate(45, 260)">
    <rect class="svg-card" x="0" y="0" width="810" height="48" rx="6" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
    <rect x="0" y="0" width="810" height="16" rx="6" fill="url(#c1)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="14" y="13" fill="#a78bfa" font-size="8.5" font-weight="800">1. LINGKUNGAN PENGENDALIAN (CONTROL ENVIRONMENT) - FONDASI 5 Prinsip</text>
    <text class="svg-text" x="14" y="32" fill="#cbd5e1" font-size="7.5">Integritas &amp; etika, "Tone at the Top" dari direksi, independensi Dewan Komisaris, struktur organisasi hierarki, komitmen kompetensi SDM.</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Lingkungan Pengendalian adalah fondasi penentu: Jika "Tone at the Top" rusak, 4 komponen di atasnya tidak akan efektif.</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Pengendalian Internal COSO 2013, 17 Prinsip, & Segregasi Tugas (CARP)',
  ref: 'Arens 16e Ch. 11 & 12 | COSO Internal Control 2013 | SA 315, SA 265',
  intro: 'TM 11 membahas evaluasi pengendalian internal: 5 komponen dan 17 prinsip kerangka COSO 2013, pemisahan tugas mutlak (Segregation of Duties CARP), teknik pendokumentasian kontrol (Flowchart, Kuesioner Pengendalian Internal/ICQ, Naratif), serta klasifikasi defisiensi kontrol menurut SA 265 (Control Deficiency, Significant Deficiency, Material Weakness).',
  objectives: [
    'Mengidentifikasi 5 komponen dan 17 prinsip COSO Internal Control Framework 2013.',
    'Menerapkan prinsip segregasi tugas CARP (Custody, Authorization, Recording, Periodic Reconciliation).',
    'Menilai efektivitas rancangan pengendalian (Design Effectiveness) vs efektivitas operasi (Operating Effectiveness).',
    'Mengklasifikasikan defisiensi kontrol dan menyusun Surat Manajemen (Management Letter SA 265).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 11.1: 5 Komponen Pengendalian Internal menurut COSO Framework 2013.',
      svg: SVG_COSO_CUBE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 11'
    },
    {
      kind: 'table',
      headers: ['5 Komponen COSO', 'Prinsip Kunci Terkait', 'Aktivitas Pengendalian Riil', 'Dampak Jika Kontrol Lemah'],
      rows: [
        ['Lingkungan Pengendalian', 'Tone at the top, independensi dewan komisaris, struktur organisasi.', 'Kode etik karyawan ditegakkan dan sanksi tegas atas pelanggaran.', 'Budaya kerja korup, risiko fraud pelaporan keuangan sangat tinggi.'],
        ['Penilaian Risiko', 'Identifikasi dan analisis risiko bisnis dan risiko kecurangan.', 'Pemetaan berkala risiko fluktuasi harga bahan baku dan kurs.', 'Klien rentan mengalami kerugian tak terduga tanpa mitigasi.'],
        ['Aktivitas Pengendalian', 'Segregasi tugas, otorisasi, dokumen bernomor urut cetak, pengamanan fisik.', 'Pemisahan kasir (penyimpan kas) dari akuntan (pencatat jurnal).', 'Risiko penggelapan aset (lapping, kiting, ghost employees).'],
        ['Informasi & Komunikasi', 'Penggunaan sistem informasi akurat dan saluran whistleblowing.', 'Sistem ERP memvalidasi otomatis 3-way matching PO-GR-Invoice.', 'Laporan keuangan memuat salah saji data transaksi ganda/keliru.'],
        ['Pemantauan (Monitoring)', 'Evaluasi berkelanjutan dan fungsi audit internal independen.', 'Internal Audit menguji kepatuhan operasional seluruh cabang.', 'Kelemahan kontrol berlangsung bertahun-tahun tanpa perbaikan.']
      ],
      caption: 'Tabel 11.0: Matriks 5 komponen COSO dan implikasi auditnya.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Matriks Segregasi Tugas CARP'
    },
    {
      kind: 'formula',
      text: `\\text{Segregasi Tugas Mutlak (CARP)}:
\\mathbf{C} - \\text{Custody (Penyimpanan Fisik)} \\quad \\neq \\quad \\mathbf{A} - \\text{Authorization (Otorisasi Transaksi)}
\\neq \\quad \\mathbf{R} - \\text{Recording (Pencatatan Pembukuan)} \\quad \\neq \\quad \\mathbf{P} - \\text{Periodic Reconciliation (Rekonsiliasi Periodik)}`,
      note: 'Jika satu orang memegang 2 fungsi sekaligus (misalnya Custody + Recording), potensi pencurian aset dan penyembunyian manipulasi jurnal terbuka lebar.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Klasifikasi Defisiensi Kontrol SA 265',
      prompt: 'Di sebuah perusahaan dagang, staf pembuat pesanan pembelian (PO) juga berwenang menandatangani cek pembayaran ke pemasok. Tidak ada reviu independen atas pencairan cek. Klasifikasikan defisiensi ini (Control Deficiency, Significant Deficiency, atau Material Weakness) dan jelaskan dampaknya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Klasifikasi SA 265**: Kelemahan Material (Material Weakness).',
            '**Justifikasi**: Terjadi pelanggaran segregasi tugas fatal antara Otorisasi Pembelian (Authorization) dan Pengeluaran Kas (Custody/Disbursement). Hal ini membuka peluang bagi staf untuk menerbitkan PO fiktif ke rekening pribadi dan mencairkan cek tanpa deteksi, yang dapat menimbulkan salah saji material terhadap kas dan beban perusahaan.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 11'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '5 Komponen & 17 Prinsip COSO', 'Penerapan kerangka COSO 2013 pada entitas bisnis.', 'Mampu menganalisis efektivitas sistem pengendalian internal entitas.'],
        ['2', 'Matriks Segregasi CARP', 'Pemisahan 4 fungsi operasional akuntansi.', 'Mampu mendeteksi perangkapan tugas ilegal pada siklus bisnis.'],
        ['3', 'Klasifikasi SA 265', 'Kriteria Defisiensi, Significant Deficiency, dan Material Weakness.', 'Mampu menyusun Management Letter dan laporan ke Komite Audit.']
      ],
      caption: 'Tabel 11.2: Peta penguasaan submateri TM 11 PBR I.'
    },
    CASE_COSO_INTERNAL_CONTROL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Material Weakness**: Merupakan defisiensi kontrol internal yang sedemikian rupa sehingga terdapat kemungkinan wajar bahwa salah saji material tidak akan tercegah atau terdeteksi tepat waktu.',
        '**Komunikasi Tertulis SA 265**: Significant Deficiency dan Material Weakness WAJIB dikomunikasikan secara tertulis kepada Komite Audit dan Dewan Komisaris (TCWG).',
        '**Keterbatasan Inheren Kontrol**: Pengendalian internal sebaik apapun tidak dapat mencegah Kolusi antar-karyawan dan Pengabaian oleh Manajemen (Management Override).'
      ]
    }
  ]
};
