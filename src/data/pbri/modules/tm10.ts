import type { Reading } from '../../../types';
import { CASE_FRAUD_RISK_ASSESSMENT } from '../pbriPracticeCases';

const SVG_FRAUD_TRIANGLE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb10)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SEGITIGA KECURANGAN KORPORASI: THE FRAUD TRIANGLE (DONALD R. CRESSEY &amp; SA 240)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FRAUD TRIANGLE</text>

  <!-- Left: Triangular Graphic Layout (Width 450px) -->
  <g transform="translate(50, 75)">
    <!-- Top: Pressure / Incentive -->
    <rect class="svg-card" x="120" y="0" width="200" height="52" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="2"/>
    <text class="text-accent-red" x="220" y="22" fill="#f87171" font-size="9.5" font-weight="800" text-anchor="middle">1. TEKANAN (PRESSURE)</text>
    <text class="svg-text" x="220" y="38" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Motivasi Finansial / Target Berat</text>

    <!-- Bottom Left: Opportunity -->
    <rect class="svg-card" x="0" y="160" width="190" height="52" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
    <text class="text-accent-amber" x="95" y="182" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">2. PELUANG (OPPORTUNITY)</text>
    <text class="svg-text" x="95" y="198" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Kelemahan SPI / Celah Sistem</text>

    <!-- Bottom Right: Rationalization -->
    <rect class="svg-card" x="250" y="160" width="190" height="52" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="text-accent-blue" x="345" y="182" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">3. RASIONALISASI</text>
    <text class="svg-text" x="345" y="198" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Pembenaran Moral Internal</text>

    <!-- Triangle Connector Lines -->
    <line x1="180" y1="52" x2="110" y2="160" stroke="#f87171" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="260" y1="52" x2="330" y2="160" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="190" y1="186" x2="250" y2="186" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 4"/>
  </g>

  <!-- Right: 3 Fraud Condition Cards -->
  <g transform="translate(520, 75)">
    <rect class="svg-subcard" x="0" y="0" width="345" height="70" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1"/>
    <text class="text-accent-red" x="14" y="20" fill="#f87171" font-size="9.5" font-weight="800">1. TEKANAN / INSENTIF (INCENTIVE)</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="8">• Gaya hidup mewah di luar kemampuan gaji, utang judi</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Tekanan direksi mencapai target laba agresif dari analis pasar</text>

    <rect class="svg-subcard" x="0" y="80" width="345" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="14" y="100" fill="#fbbf24" font-size="9.5" font-weight="800">2. KELUASAN PELUANG (OPPORTUNITY)</text>
    <text class="svg-text" x="14" y="118" fill="#cbd5e1" font-size="8">• Tidak adanya pemisahan fungsi (Segregation of Duties)</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Lemahnya pengawasan komisaris &amp; pengabaian kontrol oleh bos</text>

    <rect class="svg-subcard" x="0" y="160" width="345" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="180" fill="#38bdf8" font-size="9.5" font-weight="800">3. SIKAP RASIONALISASI (RATIONALIZATION)</text>
    <text class="svg-text" x="14" y="198" fill="#cbd5e1" font-size="8">• "Saya hanya meminjam sementara, nanti diganti"</text>
    <text class="svg-text" x="14" y="212" fill="#cbd5e1" font-size="8">• "Perusahaan labanya miliaran, gaji saya tidak sebanding kerja keras"</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Auditor paling mampu memitigasi elemen PELUANG melalui pengujian dan rekomendasi perbaikan Pengendalian Internal.</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Risiko Kecurangan (Fraud Risk), Segitiga Kecurangan, & Journal Entry Testing (SA 240)',
  ref: 'Arens 16e Ch. 10 | SA 240 | ACFE Fraud Tree | Journal Entry Testing (JET)',
  intro: 'TM 10 membedah pengauditan atas kecurangan: dua jenis fraud laporan keuangan (Pelaporan Keuangan Curang vs Penyalahgunaan Aset), 3 elemen Segitiga Kecurangan (Tekanan, Peluang, Rasionalisasi), pengabaian pengendalian oleh manajemen (Management Override of Controls), serta prosedur wajib Journal Entry Testing (JET).',
  objectives: [
    'Mendiagnosis 3 unsur Fraud Triangle (Pressure, Opportunity, Rationalization) dalam kasus bisnis riil.',
    'Menerapkan asumsi risiko kecurangan wajib pada pengakuan pendapatan (Presumption of Revenue Fraud Risk SA 240).',
    'Merancang prosedur pengujian Journal Entry Testing (JET) untuk mendeteksi jurnal penyesuaian fiktif akhir tahun.',
    'Mengevaluasi tanda bahaya (Red Flags) kecurangan operasional dan pelaporan finansial.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: 3 Unsur Segitiga Kecurangan (Fraud Triangle SA 240).',
      svg: SVG_FRAUD_TRIANGLE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Elemen Fraud SA 240', 'Karakteristik & Indikator', 'Respons Prosedur Wajib Auditor', 'Jebakan Ujian Terpopuler'],
      rows: [
        ['Pelaporan Keuangan Curang', 'Manipulasi sengaja angka laporan keuangan untuk mengelabui investor (overstate laba/aset).', 'Review menyeluruh estimasi akuntansi manajemen dan uji jurnal manual akhir tahun.', 'Sering tertukar dengan kekeliruan; pembeda utama adalah INTENSI (kesengajaan) dan penyembunyian.'],
        ['Penyalahgunaan Aset', 'Pencurian aset fisik (kas, persediaan, aset tetap) oleh karyawan/manajemen.', 'Pengujian fisik mendadak (surprise count) dan rekonsiliasi kas/bank berkala.', 'Penyalahgunaan aset biasanya dilakukan staf, sedangkan pelaporan curang dilakukan manajemen puncak.'],
        ['Management Override', 'Kemampuan manajemen memanipulasi catatan akuntansi dan mengesampingkan kontrol yang ada.', 'Wajib lakukan: (1) Journal Entry Testing, (2) Review estimasi bias, (3) Uji transaksi luar biasa.', 'Auditor DILARANG berasumsi manajemen 100% jujur; skeptisisme profesional wajib dijaga!'],
        ['Presumption of Fraud in Revenue', 'SA 240 mewajibkan auditor selalu berasumsi ada risiko fraud pada pengakuan pendapatan.', 'Pengujian pisah batas penjualan ketat, konfirmasi positif piutang, dan analisis retur Januari.', 'Jika auditor menyimpulkan tidak ada risiko fraud pendapatan, auditor WAJIB mendokumentasikan alasannya di KKP.']
      ],
      caption: 'Tabel 10.0: Matriks risiko kecurangan dan respons audit SA 240.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Prosedur Mandatori Mengatasi Management Override'
    },
    {
      kind: 'formula',
      text: `\\text{3 Prosedur Wajib SA 240 Menghadapi Management Override}:
1. \\mathbf{\\text{Journal Entry Testing (JET)}}: \\text{Uji jurnal penyesuaian manual akhir pekan, malam hari, akun tidak lazim, angka bulat.}
2. \\mathbf{\\text{Review Estimasi Akuntansi}}: \\text{Evaluasi apakah cadangan kerugian/nilai wajar memiliki bias manajemen (Retrospective Review).}
3. \\mathbf{\\text{Uji Transaksi Luar Biasa}}: \\text{Pemeriksaan substansi bisnis transaksi non-operasional bernilai besar di akhir periode.}`,
      note: 'Journal Entry Testing (JET) merupakan prosedur wajib yang tidak boleh ditiadakan pada seluruh perikatan audit umum laporan keuangan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Karakteristik Jurnal Anomali (JET)',
      prompt: 'Sebutkan 4 kriteria jurnal penyesuaian yang dikategorikan sebagai Jurnal Berisiko Tinggi (High-Risk Journal Entries) yang wajib diuji dalam Journal Entry Testing!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Jurnal Dibuat di Luar Jam Kerja**: Diposting pada larut malam, akhir pekan, atau hari libur nasional.',
            '**Jurnal Berangka Bulat**: Nilai transaksi bulat tidak lazim (contoh: Rp 5.000.000.000,00 pas).',
            '**Jurnal oleh Pejabat Non-Akuntansi**: Diposting langsung oleh Direktur/Eksekutif tanpa melalui staf akuntansi pembukuan.',
            '**Jurnal Menggunakan Akun Siluman/Pembersih**: Menghubungkan akun pendapatan langsung ke pos aset tanpa dokumen penyerahan barang.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Segitiga Kecurangan (Fraud Triangle)', 'Analisis Pressure, Opportunity, dan Rationalization.', 'Mampu mendiagnosis celah risiko fraud pada skenario perikatan.'],
        ['2', 'Presumsi Risiko Fraud Pendapatan', 'Ketentuan SA 240 paragraf 26 dan perlakuan auditnya.', 'Menguasai prosedur pengujian pendapatan fiktif (Side Agreements/Channel Stuffing).'],
        ['3', 'Prosedur Journal Entry Testing (JET)', 'Metodologi audit berbasis data analitik untuk menguji jurnal manual.', 'Mampu merancang kriteria seleksi sampel jurnal berisiko tinggi.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 PBR I.'
    },
    CASE_FRAUD_RISK_ASSESSMENT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Skeptisisme Profesional**: Auditor tidak boleh bersikap curiga tanpa dasar, namun tidak boleh pula berasumsi bahwa manajemen pasti jujur.',
        '**Komunikasi Fraud**: Kecurangan yang melibatkan manajemen puncak (bahkan bernilai kecil) WAJIB dilaporkan langsung kepada Komite Audit / TCWG (SA 240).',
        '**Channel Stuffing & Bill-and-Hold**: Praktik memaksa pengiriman barang sebelum waktunya atau menjurnal penjualan sebelum barang dikirim merupakan bentuk fraud pendapatan paling sering dijumpai.'
      ]
    }
  ]
};
