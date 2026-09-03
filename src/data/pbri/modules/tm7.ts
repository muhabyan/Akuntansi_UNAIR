import type { Reading } from '../../../types';
import { CASE_ANALYTICAL_PROCEDURES } from '../pbriPracticeCases';

const SVG_ANALYTICAL_FLOW = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="step1Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="step2Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="step3Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="step4Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">4 TAHAP PROSEDUR ANALITIS SUBSTANTIF DALAM AUDIT LAPORAN KEUANGAN (SA 520)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ANALYTICAL FLOW</text>

  <!-- 4 Sequential Stepped Cards -->
  <!-- Step 1 -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#step1Grad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">TAHAP 1: EKSPEKTASI</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Menentukan Ekspektasi Auditor</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Membangun angka perkiraan</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  yang independen</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Sumber: Tren historis, anggaran,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  benchmark rasio industri kompetitor</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Hubungan keuangan &amp; non-keuangan</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Prediksi Independen Auditor</text>
  </g>

  <polygon points="237,185 245,190 237,195" fill="#38bdf8"/>

  <!-- Step 2 -->
  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#step2Grad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">TAHAP 2: BATAS AMBANG</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Menetapkan Threshold Selisih</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Menentukan selisih maksimal yang</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  dapat diterima tanpa investigasi</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Didasarkan pada materialitas</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  pelaksanaan (Performance Materiality)</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Misal: Selisih &gt; 5% atau &gt; Rp 100jt</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Ambang Batas Toleransi Selisih</text>
  </g>

  <polygon points="452,185 460,190 452,195" fill="#a78bfa"/>

  <!-- Step 3 -->
  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#step3Grad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">TAHAP 3: BANDINGKAN</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Bandingkan Angka Tercatat</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bandingkan angka riil klien</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  dengan ekspektasi auditor</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Identifikasi fluktuasi tidak wajar</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  atau ketiadaan fluktuasi wajar</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Hitung besaran selisih (Variance)</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Identifikasi Fluktuasi Anomali</text>
  </g>

  <polygon points="667,185 675,190 667,195" fill="#fbbf24"/>

  <!-- Step 4 -->
  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="30" rx="10" fill="url(#step4Grad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="92" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">TAHAP 4: INVESTIGASI</text>
    <rect class="svg-subcard" x="10" y="38" width="165" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="92" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Investigasi &amp; Konfirmasi</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Inquiry penjelasan ke direksi</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">WAJIB</tspan> peroleh bukti audit</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">  pendukung yang menguatkan</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Lakukan pengujian rincian jika</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">  penjelasan tidak memadai</text>
    <rect class="svg-badge-green" x="10" y="185" width="165" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="92" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Bukti Penguat &amp; Simpulan</text>
  </g>
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
