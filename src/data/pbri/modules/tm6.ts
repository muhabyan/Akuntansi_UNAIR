import type { Reading } from '../../../types';
import { CASE_AUDIT_MATERIALITY } from '../pbriPracticeCases';

const SVG_MATERIALITY_LEVELS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">3 TINGKATAN MATERIALITAS AUDIT LAPORAN KEUANGAN (SA 320 &amp; SA 450)</text>
  
  <rect x="40" y="55" width="600" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="55" y="80" fill="#38bdf8" font-size="11" font-weight="700">1. OVERALL MATERIALITY (OM)</text>
  <text x="380" y="80" fill="#cbd5e1" font-size="10">Ambang batas kewajaran laporan keseluruhan (5% PBT)</text>

  <rect x="70" y="105" width="540" height="40" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="85" y="130" fill="#fbbf24" font-size="11" font-weight="700">2. PERFORMANCE MATERIALITY (PM)</text>
  <text x="390" y="130" fill="#cbd5e1" font-size="10">Alokasi untuk pengujian saldo akun (50% - 75% OM)</text>

  <rect x="100" y="155" width="480" height="40" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="115" y="180" fill="#4ade80" font-size="11" font-weight="700">3. CLEARLY TRIVIAL (PAAD)</text>
  <text x="400" y="180" fill="#cbd5e1" font-size="10">Batas salah saji sepele yg diabaikan (3% - 5% OM)</text>
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
