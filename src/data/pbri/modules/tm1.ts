import type { Reading } from '../../../types';

const SVG_ASSURANCE_SPECTRUM = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SPEKTRUM JASA ASURANS &amp; NON-ASURANS AKUNTAN PUBLIK</text>
  
  <!-- Audit: Reasonable -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Audit Laporan Keuangan</text>
  <text x="125" y="102" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">REASONABLE ASSURANCE</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">(Keyakinan Memadai/Tinggi)</text>
  <line x1="45" y1="135" x2="205" y2="135" stroke="#334155"/>
  <text x="125" y="155" fill="#f8fafc" font-size="10" text-anchor="middle">Bentuk Opini Positif:</text>
  <text x="125" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">"Menyajikan secara wajar</text>
  <text x="125" y="188" fill="#94a3b8" font-size="9" text-anchor="middle">dalam semua hal material"</text>

  <!-- Review: Limited -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">2. Perikatan Reviu (Review)</text>
  <text x="340" y="102" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">LIMITED ASSURANCE</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">(Keyakinan Terbatas/Moderat)</text>
  <line x1="260" y1="135" x2="420" y2="135" stroke="#334155"/>
  <text x="340" y="155" fill="#f8fafc" font-size="10" text-anchor="middle">Bentuk Opini Negatif:</text>
  <text x="340" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">"Tidak ada hal yang membuat</text>
  <text x="340" y="188" fill="#94a3b8" font-size="9" text-anchor="middle">kami percaya ada salah saji"</text>

  <!-- Non-Assurance -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#94a3b8" font-size="11.5" font-weight="700" text-anchor="middle">3. Jasa Non-Asurans</text>
  <text x="555" y="102" fill="#fca5a5" font-size="10.5" font-weight="700" text-anchor="middle">NO ASSURANCE</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">(Tanpa Keyakinan/Opini)</text>
  <line x1="475" y1="135" x2="635" y2="135" stroke="#334155"/>
  <text x="555" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">• Kompilasi Lap Keuangan</text>
  <text x="555" y="172" fill="#cbd5e1" font-size="10" text-anchor="middle">• Agreed-Upon Procedures (AUP)</text>
  <text x="555" y="190" fill="#cbd5e1" font-size="10" text-anchor="middle">• Konsultasi Pajak &amp; Sistem</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Konsep Dasar Audit, Jasa Asurans, & Profesi Akuntan Publik',
  ref: 'Arens Ch. 1 & 2 | SA 200, ISQM 1',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 1: Memahami esensi pengauditan sebagai pengumpulan dan evaluasi bukti sistematik, landasan teori keagenan (Agency Theory) dan asimetri informasi, spektrum jasa asurans vs non-asurans, struktur profesi KAP, serta Standar Manajemen Mutu (ISQM 1 & 2).',
  objectives: [
    'Mendefinisikan pengauditan dan membedakannya secara tegas dari proses akuntansi.',
    'Menjelaskan permintaan ekonomik atas jasa audit berbasis Teori Keagenan (Agency Theory) dan pengurangan Risiko Informasi.',
    'Membedakan 3 kategori utama audit: Audit Laporan Keuangan, Audit Kepatuhan, dan Audit Operasional.',
    'Membandingkan tingkat keyakinan (Assurance Level): Reasonable vs Limited vs No Assurance.',
    'Memahami kerangka regulasi profesi akuntan publik di Indonesia (UU No. 5/2011, IAPI, IAASB).',
    'Mengidentifikasi komponen Sistem Manajemen Mutu KAP berdasarkan ISQM 1 dan ISQM 2.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Spektrum Keyakinan Jasa Akuntan Publik (Assurance Spectrum)',
      svg: SVG_ASSURANCE_SPECTRUM,
      caption: 'Gambar 1.1: Perbedaan tingkat keyakinan dan bentuk simpulan pada jasa audit, reviu, dan non-asurans.'
    },

    { kind: 'h2', text: '1. Hakikat Pengauditan vs Akuntansi' },
    {
      kind: 'table',
      headers: ['Dimensi Pembeda', 'Akuntansi (Accounting)', 'Pengauditan (Auditing)'],
      rows: [
        ['Tujuan Utama', 'Mengidentifikasi, mengukur, mencatat, dan mengikhtisarkan transaksi keuangan menjadi laporan keuangan.', 'Mengumpulkan dan mengevaluasi bukti secara independen untuk menentukan apakah laporan keuangan telah sesuai kriteria SAK/IFRS.'],
        ['Pedoman / Acuan', 'Standar Akuntansi Keuangan (SAK / IFRS).', 'Standar Profesional Akuntan Publik (SPAP / ISA).'],
        ['Tanggung Jawab', 'Tanggung jawab penuh berada pada **Manajemen Entitas**.', 'Tanggung jawab **Auditor Independen** adalah merumuskan opini atas kewajaran penyajian laporan keuangan.']
      ],
      caption: 'Tabel 1.1: Perbandingan esensial antara proses akuntansi dan proses pengauditan.'
    },

    { kind: 'h2', text: '2. Permintaan Ekonomik atas Jasa Audit' },
    {
      kind: 'p',
      text: 'Dalam korporasi modern, terdapat pemisahan antara pemilik modal (*Principal/Shareholders*) dan pengelola perusahaan (*Agent/Management*). Hal ini menimbulkan **Asimetri Informasi** dan **Konflik Kepentingan (Agency Conflict)**. Audit independen dibutuhkan untuk mereduksi **Risiko Informasi (Information Risk)** — yaitu risiko bahwa laporan keuangan mengandung salah saji material yang menyesatkan keputusan investor dan kreditor.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Empat Penyebab Utama Risiko Informasi',
      text: '1. **Kemungkinan Bias Manajemen (Biases and Motives of Provider)**: Manajemen memiliki insentif pribadi untuk mempercantik kinerja keuangan.\n2. **Kerumitan Transaksi (Voluminous Data)**: Volume transaksi ribuan/jutaan meningkatkan risiko kekeliruan pencatatan.\n3. **Jauhnya Akses Informasi (Remoteness of Information)**: Pemegang saham tidak dapat memeriksa operasional harian secara langsung.\n4. **Kompleksitas Standar Akuntansi (Complex Exchange Transactions)**: Transaksi derivatif, sewa, dan penggabungan usaha membutuhkan pertimbangan estimasi rumit.'
    },

    { kind: 'h2', text: '3. Sistem Manajemen Mutu KAP (ISQM 1 & ISQM 2)' },
    {
      kind: 'p',
      text: 'Sejak berlakunya *International Standard on Quality Management (ISQM)*, KAP wajib menerapkan pendekatan berbasis risiko untuk mengelola mutu perikatan audit:'
    },
    {
      kind: 'ul',
      items: [
        '**ISQM 1**: Mengatur tanggung jawab tata kelola KAP, kepemimpinan etis, penerimaan klien, pelaksanaan perikatan, dan proses pemantauan internal berkelanjutan.',
        '**ISQM 2**: Mengatur pengangkatan dan pelaksanaan **Penelaahan Mutu Perikatan (Engagement Quality Review - EQR)** oleh partner independen sebelum laporan audit diterbitkan.'
      ]
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 1' },
    {
      kind: 'ul',
      items: [
        '**Audit Laporan Keuangan**: Memberikan *Reasonable Assurance* (bukan jaminan mutlak/absolut karena adanya keterbatasan bawaan audit).',
        '**Agency Theory**: Auditor bertindak sebagai pihak ketiga independen yang memverifikasi akuntabilitas agen kepada prinsipal.',
        '**ISQM 1 & 2**: Standar mutu wajib KAP untuk memastikan audit dilakukan sesuai SPAP/ISA.'
      ]
    }
  ]
};