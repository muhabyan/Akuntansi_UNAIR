import type { Reading } from '../../../types';
import { CASE_AUDIT_MATERIALITY } from '../pbriPracticeCases';

const SVG_MATERIALITY_LEVELS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">HIERARKI TIGA TINGKATAN MATERIALITAS AUDIT (SA 320)</text>
  
  <!-- Overall Materiality -->
  <rect x="40" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="130" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Overall Materiality</text>
  <text x="130" y="102" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">(Materialitas Tingkat Lapkeu)</text>
  <text x="130" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">Benchmark Kuantitatif:</text>
  <text x="130" y="145" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">5% Laba Sblm Pajak</text>
  <text x="130" y="165" fill="#cbd5e1" font-size="9.5" text-anchor="middle">atau 0.5-1% Total Aset</text>
  <text x="130" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">Batas Opini Laporan</text>

  <!-- Performance Materiality -->
  <rect x="250" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Performance Mat.</text>
  <text x="340" y="102" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">(Materialitas Pelaksanaan)</text>
  <text x="340" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">Batas Toleransi Akun:</text>
  <text x="340" y="145" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">50% - 75% dari OM</text>
  <text x="340" y="165" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Untuk merancang luas</text>
  <text x="340" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">pengujian substantif</text>

  <!-- Clearly Trivial -->
  <rect x="460" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="550" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Clearly Trivial</text>
  <text x="550" y="102" fill="#f8fafc" font-size="11" font-weight="600" text-anchor="middle">(Ambang Batas Sepele)</text>
  <text x="550" y="125" fill="#cbd5e1" font-size="10" text-anchor="middle">Batas Salah Saji Kecil:</text>
  <text x="550" y="145" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3% - 5% dari OM</text>
  <text x="550" y="165" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Salah saji diabaikan,</text>
  <text x="550" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">tidak diakumulasikan</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Konsep Materialitas Audit: Perencanaan, Pelaksanaan, & Ambang Batas',
  ref: 'Arens Ch. 9 | SA 320, SA 450',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 5: Menguasai konsep materialitas dalam audit (SA 320), penentuan tolak ukur kuantitatif (Benchmark) dan faktor kualitatif, perhitungan Materialitas Pelaksanaan (Performance Materiality), penentuan ambang batas salah saji sepele (Clearly Trivial Threshold), serta evaluasi salah saji yang belum dikoreksi (SA 450).',
  objectives: [
    'Mendefinisikan materialitas dan memahami pengaruhnya terhadap pertimbangan pengguna laporan keuangan.',
    'Memilih tolak ukur (Benchmark) kuantitatif yang tepat: Laba Sebelum Pajak, Total Pendapatan, atau Total Aset.',
    'Menghitung Materialitas Keseluruhan (Overall Materiality) pada tahap perencanaan audit.',
    'Menghitung Materialitas Pelaksanaan (Performance Materiality) untuk menekan risiko agregasi salah saji.',
    'Menetapkan Ambang Batas Salah Saji yang Jelas Sepele (Clearly Trivial Threshold).',
    'Mengevaluasi akumulasi salah saji yang belum dikoreksi (*Summary of Unadjusted Differences*) pada tahap penyelesaian audit sesuai SA 450.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Tingkatan Penetapan Materialitas Audit',
      svg: SVG_MATERIALITY_LEVELS,
      caption: 'Gambar 5.1: Hubungan antara Overall Materiality, Performance Materiality, dan Clearly Trivial Threshold.'
    },

    { kind: 'h2', text: '1. Hakikat Materialitas dalam Pengauditan' },
    {
      kind: 'p',
      text: 'Kesalahan penyajian, termasuk penghilangan, dianggap **material** jika kesalahan penyajian tersebut, secara individual atau agregat, diperkirakan **dapat mempengaruhi keputusan ekonomik pengguna** yang diambil berdasarkan laporan keuangan. Materialitas mencakup dimensi **kuantitatif** (jumlah rupiah) dan **kualitatif** (sifat salah saji, misal: kecurangan manajemen, pelanggaran regulasi, atau dampak terhadap rasio perjanjian utang/covenant).'
    },

    { kind: 'h2', text: '2. Pemilihan Tolak Ukur (Benchmark Kuantitatif)' },
    {
      kind: 'table',
      headers: ['Karakteristik Entitas Klien', 'Benchmark Acuan yang Lazim', 'Rentang Persentase yang Digunakan'],
      rows: [
        ['Entitas Komersial Berorientasi Laba', 'Laba Sebelum Pajak dari Operasi Berkelanjutan (PBT)', '3% hingga 5% PBT'],
        ['Entitas Nirlaba / Yayasan', 'Total Beban atau Total Pendapatan Operasi', '1% hingga 2% Pendapatan/Beban'],
        ['Entitas Padat Aset (Real Estate / Investasi)', 'Total Aset Bersih (Ekuitas) atau Total Aset', '0,5% hingga 1% Total Aset'],
        ['Entitas dalam Kondisi Laba Berfluktuasi/Rugi', 'Total Pendapatan Bruto (Revenues)', '0,5% hingga 1% Pendapatan']
      ],
      caption: 'Tabel 5.1: Panduan pemilihan tolak ukur materialitas menurut pedoman IAPI.'
    },

    CASE_AUDIT_MATERIALITY,

    { kind: 'h2', text: '3. Evaluasi Salah Saji yang Belum Dikoreksi (SA 450)' },
    {
      kind: 'p',
      text: 'Auditor mengumpulkan seluruh salah saji yang diidentifikasi selama audit (kecuali yang di bawah batas *Clearly Trivial*) ke dalam **Daftar Rincian Salah Saji (Summary of Unadjusted Audit Differences - SUD)**:'
    },
    {
      kind: 'ul',
      items: [
        '**Factual Misstatements (Salah Saji Faktual)**: Salah saji yang tidak diragukan lagi (misal: faktur salah hitung).',
        '**Judgmental Misstatements (Salah Saji Pertimbangan)**: Selisih estimasi manajemen dengan estimasi wajar auditor (misal: cadangan piutang tak tertagih).',
        '**Projected Misstatements (Salah Saji Terproyeksi)**: Estimasi terbaik auditor atas salah saji dalam populasi berdasarkan sampel audit.'
      ]
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**Overall Materiality (OM)**: Batas maksimal salah saji agregat untuk mempertahankan opini WTP.',
        '**Performance Materiality (PM)**: Ditetapkan 50-75% dari OM untuk mengantisipasi akumulasi salah saji tak terdeteksi.',
        '**Clearly Trivial Threshold (CTT)**: Salah saji < 5% OM diabaikan dari daftar SUD.',
        '**Kualitatif**: Salah saji bernilai kecil tetap material jika menyangkut tindakan korupsi/fraud direksi!'
      ]
    }
  ]
};