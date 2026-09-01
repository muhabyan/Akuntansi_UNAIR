import type { Reading } from '../../../types';
import { CASE_ASSURANCE_DEMAND } from '../pbriPracticeCases';

const SVG_ASSURANCE_SPECTRUM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SPEKTRUM TINGKAT KEYAKINAN JASA ASURANS &amp; NON-ASURANS</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">AUDIT LAPORAN KEUANGAN</text>
  <text x="125" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Standar: SA / ISA</text>
  <text x="125" y="118" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">Reasonable Assurance</text>
  <text x="125" y="136" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Tingkat Keyakinan Tinggi</text>
  <text x="125" y="154" fill="#fbbf24" font-size="9.5" text-anchor="middle">Opini Positif (Wajar)</text>
  <text x="125" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Pengujian Substantif Lengkap</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
  <text x="340" y="78" fill="#818cf8" font-size="11.5" font-weight="700" text-anchor="middle">PERIKATAN REVIU</text>
  <text x="340" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Standar: SPR / ISRE</text>
  <text x="340" y="118" fill="#a78bfa" font-size="11" font-weight="700" text-anchor="middle">Limited Assurance</text>
  <text x="340" y="136" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Tingkat Keyakinan Moderat</text>
  <text x="340" y="154" fill="#fbbf24" font-size="9.5" text-anchor="middle">Kesimpulan Negatif</text>
  <text x="340" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Hanya Inquiry &amp; Analitis</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="1.5"/>
  <text x="555" y="78" fill="#f472b6" font-size="11.5" font-weight="700" text-anchor="middle">NON-ASURANS (AUP / KOMPILASI)</text>
  <text x="555" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Standar: SJTT / ISRS</text>
  <text x="555" y="118" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">No Assurance</text>
  <text x="555" y="136" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Tanpa Pemberian Keyakinan</text>
  <text x="555" y="154" fill="#fbbf24" font-size="9.5" text-anchor="middle">Temuan Faktual Sahaja</text>
  <text x="555" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Sesuai Prosedur Tertentu</text>
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
\\text{Peran Audit Independen} \\rightarrow \\text{Mereduksi } \\text{Information Risk Premium} \\approx 0, \\text{ sehingga Menurunkan Biaya Modal (Cost of Capital)}`,
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
