import type { Reading } from '../../../types';
import { CASE_COSO_INTERNAL_CONTROL } from '../pbriPracticeCases';

const SVG_COSO_CUBE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5 KOMPONEN PENGENDALIAN INTERNAL COSO (2013 FRAMEWORK)</text>
  
  <rect x="25" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="84" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. CONTROL ENV</text>
  <text x="84" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Lingkungan Pengendalian:</text>
  <text x="84" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Integritas &amp; Etika</text>
  <text x="84" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tone at the Top</text>
  <text x="84" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengawasan BoD</text>
  <text x="84" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Fondasi Pengendalian</text>

  <rect x="153" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="212" y="78" fill="#f87171" font-size="10" font-weight="700" text-anchor="middle">2. RISK ASSESS</text>
  <text x="212" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Penilaian Risiko:</text>
  <text x="212" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Identifikasi risiko</text>
  <text x="212" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Evaluasi potensi fraud</text>
  <text x="212" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Analisis perubahan</text>
  <text x="212" y="175" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">Mitigasi Ancaman</text>

  <rect x="281" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">3. CONTROL ACT</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Aktivitas Pengendalian:</text>
  <text x="340" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Segregasi CARP</text>
  <text x="340" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Otorisasi transaksi</text>
  <text x="340" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengamanan fisik</text>
  <text x="340" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Kebijakan &amp; Prosedur</text>

  <rect x="409" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="468" y="78" fill="#a78bfa" font-size="10" font-weight="700" text-anchor="middle">4. INFO &amp; COMM</text>
  <text x="468" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Informasi &amp; Komunikasi:</text>
  <text x="468" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kualitas data ERP</text>
  <text x="468" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Whistleblowing line</text>
  <text x="468" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Komunikasi eksternal</text>
  <text x="468" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Transmisi Data Akurat</text>

  <rect x="537" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="596" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">5. MONITORING</text>
  <text x="596" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Pemantauan:</text>
  <text x="596" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Audit Internal</text>
  <text x="596" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Evaluasi berkala</text>
  <text x="596" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tindak lanjut audit</text>
  <text x="596" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Evaluasi Berkelanjutan</text>
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
