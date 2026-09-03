import type { Reading } from '../../../types';
import { CASE_AUDIT_MATERIALITY } from '../pbriPracticeCases';

const SVG_MATERIALITY_LEVELS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="omGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="pmGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="sumGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">3 TINGKATAN AMBANG MATERIALITAS AUDIT LAPORAN KEUANGAN (SA 320)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">MATERIALITY CASCADE</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#omGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">1. OVERALL MATERIALITY (OM)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="56" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Benchmark: 5% Laba Sebelum Pajak (EBT)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Tolok ukur materialitas lapkeu secara keseluruhan</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Besaran salah saji yang dapat mempengaruhi</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">  keputusan ekonomi pengguna laporan keuangan</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Acuan penentuan jenis opini akhir auditor</text>
    <rect class="svg-badge-purple" x="14" y="185" width="237" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="201" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Ambang Batas Opini Laporan Keuangan</text>
  </g>

  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#pmGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">2. PERFORMANCE MATERIALITY (PM)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Kisaran: 50% - 75% dari OM</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Berfungsi sebagai "Bantalan Pengaman" (Safety Cushion)</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Digunakan dalam menentukan lingkup pengujian</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">  saldo akun spesifik &amp; ukuran sampel audit</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Mencegah akumulasi salah saji kecil melampaui OM</text>
    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Alat Ukur Luas Pengujian Sampel</text>
  </g>

  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#sumGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">3. CLEARLY TRIVIAL (SUM)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Batas Ambang: 3% - 5% dari OM</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Batas salah saji yang dapat diabaikan</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Salah saji di bawah angka ini tidak perlu</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">  dimasukkan dalam daftar akumulasi koreksi (SUM)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Di atas batas ini, wajib dicatat &amp; diminta koreksi</text>
    <rect class="svg-badge-green" x="14" y="185" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Ambang Batas Pengabaian Salah Saji</text>
  </g>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Perencanaan Audit, Penilaian Risiko Awal, & Penentuan Materialitas (SA 300 & SA 320)',
  ref: 'Arens 16e Ch. 8 & 9 | SA 300, SA 315, SA 320, SA 450',
  intro: 'TM 6 membahas tahap awal proses audit berbasis risiko: perikatan audit & surat perikatan (Engagement Letter SA 210), strategi audit menyeluruh (Overall Audit Strategy), penentuan tolok ukur materialitas (Overall Materiality, Performance Materiality, dan Clearly Trivial Threshold), serta evaluasi salah saji gabungan (Summary of Unadjusted Differences SA 450).',
  objectives: [
    'Menyusun strategi audit menyeluruh dan rencana audit terinci (Overall Audit Strategy & Audit Plan SA 300).',
    'Menghitung Overall Materiality (OM) menggunakan benchmark laba sebelum pajak, pendapatan, atau total aset.',
    'Menetapkan Performance Materiality (PM / Tolerable Misstatement) untuk memitigasi risiko akumulasi salah saji tak terdeteksi.',
    'Mengevaluasi salah saji yang belum dikoreksi terhadap opini audit menggunakan SA 450.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: 3 Tingkatan Materialitas Audit Laporan Keuangan (SA 320 & SA 450).',
      svg: SVG_MATERIALITY_LEVELS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Tingkatan Materialitas', 'Tolok Ukur / Benchmark Umum', 'Tujuan Penggunaan di Lapangan', 'Aturan Evaluasi Akhir'],
      rows: [
        ['Overall Materiality (OM)', '5% Laba Sebelum Pajak Normal (Entitas Komersial) ATAU 0,5% - 1% Total Pendapatan/Aset.', 'Menentukan batas ambang salah saji yang mempengaruhi keputusan ekonomi pengguna laporan.', 'Jika total salah saji gabungan > OM dan klien menolak koreksi -> Opini WDP atau Tidak Wajar.'],
        ['Performance Materiality (PM)', '50% - 75% dari Overall Materiality.', 'Digunakan auditor untuk menentukan ukuran sampel pengujian dan menilai salah saji di tingkat saldo akun.', 'Mencegah akumulasi salah saji kecil yang tak terdeteksi melampaui OM secara keseluruhan.'],
        ['Clearly Trivial (PAAD)', '3% - 5% dari Overall Materiality.', 'Batas salah saji yang benar-benar sepele dan tidak perlu dicatat dalam ringkasan koreksi.', 'Salah saji di bawah angka ini dianggap tidak memiliki konsekuensi material sama sekali.']
      ],
      caption: 'Tabel 6.0: Parameter penetapan 3 tingkat materialitas audit.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Kalkulasi Parameter Materialitas SA 320'
    },
    {
      kind: 'formula',
      text: `\\text{Overall Materiality (OM)} = 5\\% \\times \\text{Laba Sebelum Pajak (Profit Before Tax Normal)}
\\text{Performance Materiality (PM)} = 75\\% \\times \\text{OM (Jika Risiko Klien Rendah)} \\quad \\text{atau} \\quad 50\\% \\times \\text{OM (Jika Risiko Klien Tinggi)}
\\text{Ambang Batas Sepele (Clearly Trivial / PAAD)} = 5\\% \\times \\text{OM}`,
      note: 'Jika entitas dalam posisi rugi atau laba sangat fluktuatif, auditor beralih menggunakan benchmark 0,5% - 1% dari Total Pendapatan atau Total Aset.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan Materialitas PT Sentosa',
      prompt: 'PT Sentosa mencatat Laba Sebelum Pajak Rp 40 Miliar. Klien memiliki kontrol internal yang baik dan riwayat salah saji masa lalu yang rendah. Hitung: (1) Overall Materiality, (2) Performance Materiality, dan (3) Batas Salah Saji Sepele (Clearly Trivial)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Overall Materiality (OM)**: 5% × Rp 40.000.000.000 = **Rp 2.000.000.000**.',
            '**Performance Materiality (PM)**: Karena risiko rendah, gunakan 75% × Rp 2.000.000.000 = **Rp 1.500.000.000**.',
            '**Clearly Trivial (PAAD)**: 5% × Rp 2.000.000.000 = **Rp 100.000.000**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Surat Perikatan Audit (SA 210)', 'Isi pokok terms of engagement dan pembatasan tanggung jawab.', 'Memahami kewajiban penandatanganan surat perikatan sebelum audit.'],
        ['2', 'Penetapan Benchmark OM', 'Pemilihan basis laba vs pendapatan vs aset pada berbagai industri.', 'Mampu menghitung OM, PM, dan Clearly Trivial secara presisi.'],
        ['3', 'Evaluasi Salah Saji SA 450', 'Agregasi salah saji faktual, proyeksi, dan pertimbangan (judgmental).', 'Mampu memutuskan dampak salah saji belum dikoreksi terhadap opini.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 PBR I.'
    },
    CASE_AUDIT_MATERIALITY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Materialitas Bersifat Kualitatif & Kuantitatif**: Salah saji bernilai kecil tetap MATERIAL jika mengubah posisi rugi menjadi laba atau mempengaruhi kepatuhan rasio pinjaman bank.',
        '**Revisi Materialitas**: Materialitas adalah angka dinamis; jika laba aktual akhir tahun jauh berbeda dari estimasi awal, auditor WAJIB merevisi OM dan PM.',
        '**Tolerable Misstatement**: Istilah praktis untuk Performance Materiality saat diaplikasikan ke saldo akun tertentu.'
      ]
    }
  ]
};
