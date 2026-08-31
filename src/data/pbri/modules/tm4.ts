import type { Reading } from '../../../types';
import { CASE_AUDIT_OPINIONS } from '../pbriPracticeCases';

const SVG_OPINION_MATRIX = `
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="230" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MATRIKS PENENTUAN OPINI AUDIT MODIFIKASIAN (SA 705)</text>
  
  <!-- Header Columns -->
  <rect x="230" y="55" width="200" height="35" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="330" y="77" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">Material, Tdk Pervasif</text>

  <rect x="445" y="55" width="215" height="35" rx="6" fill="#1e293b" stroke="#f43f5e"/>
  <text x="552" y="77" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">Material &amp; PERVASIF</text>

  <!-- Row 1: Misstatement -->
  <rect x="25" y="98" width="190" height="60" rx="6" fill="#1e293b" stroke="#334155"/>
  <text x="120" y="122" fill="#f8fafc" font-size="10.5" font-weight="700" text-anchor="middle">Salah Saji Material</text>
  <text x="120" y="140" fill="#94a3b8" font-size="9.5" text-anchor="middle">(Penyimpangan SAK)</text>

  <rect x="230" y="98" width="200" height="60" rx="6" fill="#0369a1" opacity="0.3"/>
  <rect x="230" y="98" width="200" height="60" rx="6" fill="none" stroke="#0284c7"/>
  <text x="330" y="125" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">OPINI WDP (QUALIFIED)</text>
  <text x="330" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">"Kecuali untuk dampak..."</text>

  <rect x="445" y="98" width="215" height="60" rx="6" fill="#9f1239" opacity="0.3"/>
  <rect x="445" y="98" width="215" height="60" rx="6" fill="none" stroke="#e11d48"/>
  <text x="552" y="125" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">OPINI TIDAK WAJAR (ADVERSE)</text>
  <text x="552" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">"Tidak menyajikan secara wajar"</text>

  <!-- Row 2: Scope limitation -->
  <rect x="25" y="165" width="190" height="60" rx="6" fill="#1e293b" stroke="#334155"/>
  <text x="120" y="188" fill="#f8fafc" font-size="10.5" font-weight="700" text-anchor="middle">Pembatasan Lingkup</text>
  <text x="120" y="206" fill="#94a3b8" font-size="9.5" text-anchor="middle">(Bukti Tdk Cukup/Tepat)</text>

  <rect x="230" y="165" width="200" height="60" rx="6" fill="#0369a1" opacity="0.3"/>
  <rect x="230" y="165" width="200" height="60" rx="6" fill="none" stroke="#0284c7"/>
  <text x="330" y="192" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">OPINI WDP (QUALIFIED)</text>
  <text x="330" y="209" fill="#cbd5e1" font-size="9.5" text-anchor="middle">"Kecuali dampak potensial..."</text>

  <rect x="445" y="165" width="215" height="60" rx="6" fill="#881337" opacity="0.4"/>
  <rect x="445" y="165" width="215" height="60" rx="6" fill="none" stroke="#be123c"/>
  <text x="552" y="192" fill="#fca5a5" font-size="10.5" font-weight="700" text-anchor="middle">TIDAK MEMBERIKAN PENDAPAT</text>
  <text x="552" y="209" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(DISCLAIMER OF OPINION)</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Laporan Audit Independen, Jenis Opini, & Hal Audit Utama (KAM)',
  ref: 'Arens Ch. 3 | SA 700, 701, 705, 706',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 4: Menguasai struktur format laporan auditor independen standar (SA 700 Revisi), kriteria perumusan 4 jenis opini audit (WTP, WDP, Tidak Wajar, Disclaimer), pengomunikasian Hal Audit Utama (Key Audit Matters - SA 701), Paragraf Penekanan Suatu Hal (Emphasis of Matter - SA 706), dan Paragraf Hal Lain (Other Matter).',
  objectives: [
    'Memahami struktur baku Laporan Auditor Independen sesuai SA 700 (Revisi).',
    'Menjelaskan 4 jenis opini audit: Wajar Tanpa Pengecualian (Unmodified), Wajar Dengan Pengecualian (Qualified), Tidak Wajar (Adverse), dan Tidak Memberikan Pendapat (Disclaimer).',
    'Menerapkan konsep Pervasiveness dalam menentukan modifikasi opini sesuai SA 705.',
    'Menjelaskan tujuan dan persyaratan pengungkapan Hal Audit Utama (Key Audit Matters/KAM) untuk entitas publik (SA 701).',
    'Membedakan Paragraf Penekanan Suatu Hal (Emphasis of Matter - SA 706) vs Paragraf Hal Lain (Other Matter).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Matriks Penentuan Opini Audit Modifikasian Berdasarkan Sifat Masalah & Pervasiveness',
      svg: SVG_OPINION_MATRIX,
      caption: 'Gambar 4.1: Logika perumusan opini modifikasian menurut Standar Audit 705.'
    },

    { kind: 'h2', text: '1. Struktur Laporan Audit Standar (SA 700 Revisi)' },
    {
      kind: 'p',
      text: 'Sesuai format internasional terkini, paragraf **Opini Auditor diletakkan di bagian paling awal laporan**, diikuti langsung oleh **Basis Opini**:'
    },
    {
      kind: 'ol',
      items: [
        '**Judul**: Wajib mencantumkan kata "Independen" (Laporan Auditor Independen).',
        '**Pihak yang Dituju**: Ditujukan kepada Pemegang Saham dan Dewan Komisaris entitas.',
        '**Paragraf Opini**: Menyatakan identitas laporan keuangan yang diaudit dan simpulan opini kewajaran.',
        '**Basis Opini**: Menyatakan audit dilakukan sesuai Standar Audit (SA) dan auditor telah mematuhi independensi etis.',
        '**Kelangsungan Usaha (Going Concern)** (jika ada ketidakpastian material).',
        '**Hal Audit Utama (Key Audit Matters - SA 701)** (Wajib untuk emiten publik/Tbk).',
        '**Tanggung Jawab Manajemen & TCWG atas Laporan Keuangan**.',
        '**Tanggung Jawab Auditor atas Audit Laporan Keuangan**.',
        '**Tanda Tangan Akuntan Publik, Nomor Registrasi AP/KAP, dan Tanggal Laporan**.'
      ]
    },

    CASE_AUDIT_OPINIONS,

    { kind: 'h2', text: '2. Hal Audit Utama (Key Audit Matters / KAM - SA 701)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Konsep & Persyaratan SA 701',
      text: 'KAM adalah hal-hal yang, menurut pertimbangan profesional auditor, merupakan **hal yang paling signifikan** dalam audit laporan keuangan periode berjalan. KAM dipilih dari hal-hal yang dikomunikasikan dengan TCWG (Komite Audit/Komisaris), meliputi:\n• Area dengan risiko kesalahan penyajian material yang dinilai tinggi (signifikan).\n• Area yang melibatkan pertimbangan manajemen yang signifikan (misal: estimasi nilai wajar, penurunan nilai goodwill).\n• Pengaruh peristiwa atau transaksi signifikan yang terjadi selama periode.'
    },

    { kind: 'h2', text: '3. Paragraf Penekanan Suatu Hal vs Hal Lain' },
    {
      kind: 'table',
      headers: ['Jenis Paragraf Tambahan', 'Acuan Standar', 'Tujuan & Kondisi Penggunaan'],
      rows: [
        ['Paragraf Penekanan Suatu Hal (Emphasis of Matter)', 'SA 706', 'Menarik perhatian pengguna pada suatu hal yang **SUDAH DISAJIKAN/DIUNGKAPKAN DENGAN TEPAT** dalam laporan keuangan yang sedemikian penting bagi pemahaman pengguna (misal: litigasi besar masa depan, bencana alam yang merusak aset setelah tanggal neraca). **TIDAK MENGUBAH OPINI WTP**!'],
        ['Paragraf Hal Lain (Other Matter)', 'SA 706', 'Menarik perhatian pengguna pada suatu hal **SELAIN YANG DISAJIKAN** dalam laporan keuangan yang relevan bagi pemahaman audit, tanggung jawab auditor, atau laporan audit (misal: laporan tahun lalu diaudit KAP lain).']
      ],
      caption: 'Tabel 4.1: Perbandingan Emphasis of Matter vs Other Matter Paragraph.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**WTP (Unmodified)**: Laporan menyajikan secara wajar dalam semua hal material.',
        '**WDP (Qualified)**: Ada salah saji atau pembatasan lingkup yang material, tetapi **TIDAK PERVASIF**.',
        '**Tidak Wajar (Adverse)**: Salah saji material dan **PERVASIF** (laporan menyesatkan).',
        '**Disclaimer**: Tidak memperoleh bukti yang cukup & tepat yang sifatnya material dan **PERVASIF**.',
        '**KAM**: Hanya berlaku untuk entitas yang terdaftar di bursa efek (Listed Entities).'
      ]
    }
  ]
};