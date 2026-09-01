import type { Reading } from '../../../types';
import { CASE_ANALYTICAL_PROCEDURES } from '../pbriPracticeCases';

const SVG_ANALYTICAL_FLOW = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">4 TAHAP PROSEDUR ANALITIS SUBSTANTIF (SA 520)</text>
  
  <rect x="30" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. FORMULASI</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Bentuk Ekspektasi:</text>
  <text x="97" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Berdasarkan tren,</text>
  <text x="97" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">anggaran, industri,</text>
  <text x="97" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">atau data non-keu.</text>

  <rect x="185" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="252" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">2. THRESHOLD</text>
  <text x="252" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Batas Toleransi:</text>
  <text x="252" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tentukan batas</text>
  <text x="252" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">selisih yg dapat</text>
  <text x="252" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">diterima tanpa audit.</text>

  <rect x="340" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="412" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">3. BANDINGKAN</text>
  <text x="412" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Hitung Selisih:</text>
  <text x="412" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Selisih = Saldo</text>
  <text x="412" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tercatat Klien</text>
  <text x="412" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">vs Ekspektasi Auditor.</text>

  <rect x="505" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="577" y="78" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">4. INVESTIGASI</text>
  <text x="577" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Tindak Lanjut:</text>
  <text x="577" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Wawancara Direksi &amp;</text>
  <text x="577" y="134" fill="#fca5a5" font-size="8.5" text-anchor="middle">verifikasi bukti</text>
  <text x="577" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">koraboratif mandatori.</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Prosedur Analitis, Analisis Rasio Keuangan, & Uji Kelayakan Total (SA 520)',
  ref: 'Arens 16e Ch. 8 | SA 520, SA 315 | Rasio Likuiditas, Profitabilitas, Solvabilitas',
  intro: 'TM 7 membahas penerapan Prosedur Analitis (Analytical Procedures) dalam 3 tahapan audit: tahap perencanaan (wajib/mandatori), tahap pengujian substantif (opsional/SAP), dan tahap penyelesaian akhir (wajib/mandatori). Termasuk teknik analisis tren, analisis rasio komparatif, dan pengujian kelayakan total (Proof in Total).',
  objectives: [
    'Membedakan tujuan dan sifat mandatori Prosedur Analitis pada 3 tahap audit: Perencanaan, Pengujian Substantif, dan Reviu Akhir.',
    'Menyusun ekspektasi auditor independen menggunakan data historis, anggaran, rata-rata industri, dan data non-keuangan.',
    'Menerapkan teknik Proof in Total (Uji Kelayakan Total) untuk akun pendapatan kamar hotel, beban bunga, dan beban gaji.',
    'Melakukan investigasi atas fluktuasi anomali dan selisih yang melampaui batas toleransi (Acceptable Difference).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: 4 Tahap Pelaksanaan Prosedur Analitis Substantif (SA 520).',
      svg: SVG_ANALYTICAL_FLOW
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Tahap Pelaksanaan Audit', 'Status Kewajiban Standar', 'Tujuan Pokok Pelaksanaan', 'Contoh Prosedur Lapangan'],
      rows: [
        ['Tahap Perencanaan (Planning)', 'WAJIB (Mandatory SA 315)', 'Memahami bisnis klien dan mengidentifikasi area berisiko tinggi salah saji.', 'Analisis perbandingan saldo neraca tahun lalu vs tahun berjalan.'],
        ['Tahap Pengujian (Substantive / SAP)', 'OPSIONAL (Substantive Test)', 'Mengumpulkan bukti substantif efisien untuk mendukung asersi saldo akun.', 'Proof in Total beban penyusutan = Tarif % × Rata-rata Aset Tetap.'],
        ['Tahap Reviu Akhir (Completion)', 'WAJIB (Mandatory SA 520)', 'Menilai kewajaran laporan keuangan secara keseluruhan sebelum opini diterbitkan.', 'Reviu akhir rasio likuiditas dan solvabilitas atas risiko kelangsungan usaha.']
      ],
      caption: 'Tabel 7.0: Perbandingan prosedur analitis pada 3 tahap audit.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Proof in Total & Analisis Rasio'
    },
    {
      kind: 'formula',
      text: `\\text{Proof in Total Pendapatan Kamar Hotel} = \\text{Jumlah Kamar} \\times \\text{Tarif Rata-rata/Malam} \\times \\text{Tingkat Okupansi (Occupancy Rate)} \\times 365 \\text{ Hari}
\\text{Proof in Total Beban Bunga} = \\text{Rata-rata Saldo Utang Pokok} \\times \\text{Tingkat Suku Bunga Efektif Tahunan}
\\text{Selisih Tak Terjelaskan (Unexplained Difference)} = |\\text{Saldo Buku Klien} - \\text{Ekspektasi Auditor}|`,
      note: 'Jika Selisih Tak Terjelaskan melampaui Acceptable Difference, auditor dilarang langsung menerima alasan lisan manajemen tanpa menguji dokumen bukti fisik (Corroborating Evidence).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Proof in Total Pendapatan Hotel Bintang 4',
      prompt: 'Hotel Permata memiliki 200 kamar dengan rata-rata tarif Rp 800.000/malam. Rata-rata tingkat okupansi tahun 2026 adalah 70%. Klien mencatat Pendapatan Kamar sebesar Rp 48 Miliar. Hitung ekspektasi auditor dan selisihnya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Ekspektasi Auditor**: 200 kamar × Rp 800.000 × 70% × 365 hari = **Rp 40.880.000.000**.',
            '**Saldo Tercatat Klien**: **Rp 48.000.000.000**.',
            '**Selisih Anomali**: Rp 48.000.000.000 - Rp 40.880.000.000 = **Rp 7.120.000.000 (Overstatement)**.',
            '**Tindak Lanjut**: Selisih Rp 7,12 Miliar sangat signifikan. Auditor wajib melakukan pengujian substantif rinci ke sistem reservasi dan bukti pembayaran tamu.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 7'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '3 Tahap Prosedur Analitis', 'Kewajiban SA 315 dan SA 520 pada Perencanaan vs Reviu Akhir.', 'Mampu menjelaskan kapan prosedur analitis wajib dan opsional.'],
        ['2', 'Teknik Proof in Total', 'Perhitungan estimasi independen akun pendapatan dan beban.', 'Mampu menghitung ekspektasi numerik dan menganalisis selisih.'],
        ['3', 'Analisis Rasio Finansial', 'Interpretasi Days Sales Outstanding (DSO), Inventory Turnover, Gross Margin.', 'Mampu mendeteksi potensi fraud/error dari pergeseran rasio keuangan.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 PBR I.'
    },
    CASE_ANALYTICAL_PROCEDURES,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Prosedur Analitis Mandatori**: Wajib pada Perencanaan (untuk risk assessment) dan Penyelesaian Audit (untuk overall review).',
        '**Keandalan Data Dasar**: Keandalan ekspektasi auditor sangat bergantung pada apakah data pendukung berasal dari sumber independen dan sistem TI yang teruji.',
        '**Bukan Pengganti Bukti Fisik**: Prosedur analitis mengindikasikan AREA BERISIKO, namun pembuktian final salah saji moneter tetap membutuhkan Test of Details.'
      ]
    }
  ]
};
