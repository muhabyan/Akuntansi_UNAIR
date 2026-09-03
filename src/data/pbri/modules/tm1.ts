import type { Reading } from '../../../types';
import { CASE_ASSURANCE_DEMAND } from '../pbriPracticeCases';

const SVG_ASSURANCE_SPECTRUM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="audGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="revGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="aupGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="comGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SPEKTRUM JASA ASSURANCE DAN NON-ASSURANCE AKUNTAN PUBLIK (IAPI / IFAC)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ASSURANCE SPECTRUM</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#audGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">1. AUDIT (SA 200 - 700)</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Keyakinan Memadai (High)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bentuk Opini: <tspan class="text-accent-green" fill="#34d399" font-weight="700">Positif</tspan></text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  "Menyajikan secara wajar..."</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Prosedur: Uji SPI, Vouching,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  Tracing, Konfirmasi, Stock Opname</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Pengguna: Investor, OJK, Bank</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Tingkat Keyakinan Tertinggi</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#revGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">2. REVIEW (SPR 2400)</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Keyakinan Terbatas (Moderate)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bentuk Opini: <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Negatif</tspan></text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  "Tidak ada hal yang menyebabkan..."</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Prosedur: Tanya Jawab (Inquiry)</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  &amp; Prosedur Analitis saja</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Tanpa uji fisik/konfirmasi bank</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Hemat Waktu &amp; Biaya Audit</text>
  </g>

  <g transform="translate(455, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#aupGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">3. AUP (SJTN 4400)</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Tanpa Keyakinan (Factual)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bentuk Laporan: <tspan class="text-accent-amber" fill="#fbbf24" font-weight="700">Faktual</tspan></text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  Laporan Temuan Faktual semata</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Prosedur disepakati bersama</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  antara klien &amp; pihak ketiga</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Pengguna menarik simpulan sendiri</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Prosedur yang Disepakati</text>
  </g>

  <g transform="translate(665, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#comGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">4. KOMPILASI (SJK 4410)</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Tanpa Keyakinan (No Assurance)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bentuk Laporan: <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Kompilasi</tspan></text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  Membantu menyusun format lapkeu</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Berdasarkan data mentah manajemen</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Tidak menguji akurasi angka data</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Jasa Akuntansi Non-Assurance</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Penyusunan Format Laporan</text>
  </g>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Permintaan Jasa Asurans, Audit Laporan Keuangan, & Regulasi Profesi',
  ref: 'Arens 16e Ch. 1 | SA 200 | Kerangka Kerja Asurans IAPI/IAASB',
  intro: 'TM 1 membahas dasar fundamental profesi pengauditan: teori agensi dan permintaan jasa asurans, perbedaan esensial antara akuntansi vs auditing, spektrum perikatan asurans (Audit, Reviu, dan Non-Asurans AUP/Kompilasi), serta penyebab utama timbulnya risiko informasi bagi pemangku kepentingan.',
  objectives: [
    'Membedakan peran, metodologi, dan produk akhir antara Akuntansi vs Pengauditan.',
    'Menjelaskan 4 penyebab utama timbulnya Risiko Informasi (Information Risk) dalam dunia bisnis modern.',
    'Mengklasifikasikan spektrum tingkat asurans: Keyakinan Memadai (Audit), Keyakinan Terbatas (Reviu), dan Tanpa Asurans (AUP/Kompilasi).',
    'Mengidentifikasi 3 pilar profesi akuntan publik di Indonesia: IAPI, P2PK Kemenkeu, dan OJK.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Spektrum Tingkat Keyakinan (Assurance Spectrum) Standar IAPI/IAASB.',
      svg: SVG_ASSURANCE_SPECTRUM
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Konsep Inti', 'Definisi & Esensi Teoretis', 'Dasar Standar / Regulasi', 'Jebakan Ujian Terpopuler'],
      rows: [
        ['Permintaan Asurans', 'Pemisahan kepemilikan (Prinsipal) dan pengelola (Agen) menciptakan asimetri informasi dan konflik kepentingan.', 'Teori Keagenan (Agency Theory)', 'Mahasiswa sering lupa bahwa audit diminta untuk mereduksi Risiko Informasi, BUKAN Risiko Bisnis.'],
        ['Akuntansi vs Auditing', 'Akuntansi mengidentifikasi, mengukur, dan mencatat transaksi; Auditing mengumpulkan dan mengevaluasi bukti untuk menilai kesesuaian dengan kriteria (SAK).', 'SA 200 Butir 4', 'Auditor BUKAN pembuat laporan keuangan. Laporan keuangan adalah tanggung jawab penuh Manajemen!'],
        ['Spektrum Asurans', 'Tingkat keyakinan: Reasonable (Audit/Opini Positif) -> Limited (Reviu/Kesimpulan Negatif) -> None (AUP/Temuan Faktual).', 'Kerangka Asurans IAASB', 'Salah kaprah menganggap Reviu memberikan opini wajar; Reviu hanya menghasilkan kesimpulan negatif.'],
        ['Penyebab Risiko Informasi', '1. Jarak informasi (Remoteness)\n2. Bias & motif penyedia data\n3. Volume data masif\n4. Transaksi kompleks', 'Arens 16e Ch. 1', 'Cara paling efektif mereduksi risiko informasi bagi investor adalah Audit Independen Tahunan.']
      ],
      caption: 'Tabel 1.0: Matriks konsep fundamental TM 1 Pengauditan Berbasis Risiko I.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Reduksi Risiko Informasi'
    },
    {
      kind: 'formula',
      text: `\\text{Tingkat Bunga Pinjaman Bank} = \\text{Risk-Free Rate} + \\text{Business Risk Premium} + \\text{Information Risk Premium}
\\text{Peran Audit Independen} \\r→ \\text{Mereduksi } \\text{Information Risk Premium} \\approx 0, \\text{ sehingga Menurunkan Biaya Modal (Cost of Capital)}`,
      note: 'Audit independen tidak dapat menghapus Risiko Bisnis (kebangkrutan/kondisi ekonomi makro), namun secara langsung menekan Risiko Informasi laporan keuangan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Perbedaan Akuntansi vs Auditing',
      prompt: 'Jelaskan perbedaan mendasar antara Akuntansi dan Pengauditan ditinjau dari (1) Tujuan, (2) Tanggung Jawab Akhir, (3) Kriteria Standar yang Digunakan, dan (4) Produk Akhir yang Dihasilkan.',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Tujuan**: Akuntansi menyajikan posisi keuangan dan kinerja ekonomi; Auditing mengevaluasi kewajaran penyajian laporan tersebut terhadap standar baku (SAK).',
            '**Tanggung Jawab**: Akuntansi adalah tanggung jawab Direksi / Manajemen; Auditing adalah tanggung jawab Kantor Akuntan Publik (Auditor Independen).',
            '**Kriteria**: Akuntan berpedoman pada SAK/IFRS; Auditor berpedoman pada Standar Audit (SA / ISA).',
            '**Produk Akhir**: Akuntansi menghasilkan Laporan Keuangan (Posisi Keuangan, Laba Rugi, Perubahan Ekuitas, Arus Kas, CALK); Auditing menghasilkan Laporan Auditor Independen (LAI).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Teori Permintaan Jasa Audit', 'Hubungan prinsipal-agen dan mitigasi risiko asimetri informasi.', 'Mampu menganalisis alasan investor & kreditur mewajibkan audit independen.'],
        ['2', 'Karakteristik 4 Jasa KAP', 'Perbedaan Audit, Reviu, Kompilasi, dan Agreed-Upon Procedures (AUP).', 'Mampu memilih jenis perikatan yang tepat untuk kebutuhan klien bisnis.'],
        ['3', 'Regulasi Profesi AP di Indonesia', 'Peran OJK, P2PK Kemenkeu, BPK, dan Institut Akuntan Publik Indonesia (IAPI).', 'Menguasai wewenang dan dasar hukum profesi Akuntan Publik (UU No. 5/2011).']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 PBR I.'
    },
    CASE_ASSURANCE_DEMAND,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Reasonable Assurance**: Auditor memberikan keyakinan memadai, bukan mutlak (bukan penjamin 100% bebas dari segala fraud kecil).',
        '**Tanggung Jawab Manajemen**: Penyusunan laporan keuangan dan perancangan pengendalian internal mutlak ada di tangan Manajemen, bukan Auditor.',
        '**Laporan Reviu**: Menghasilkan Negative Assurance (\"Tidak ada hal yang menyebabkan kami percaya bahwa laporan keuangan tidak wajar...\").',
        '**Laporan AUP**: Bersifat Factual Findings tanpa kesimpulan opini dan ditujukan khusus bagi pihak yang menandatangani perikatan.'
      ]
    }
  ]
};
