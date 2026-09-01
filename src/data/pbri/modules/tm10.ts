import type { Reading } from '../../../types';
import { CASE_FRAUD_RISK_ASSESSMENT } from '../pbriPracticeCases';

const SVG_FRAUD_TRIANGLE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SEGITIGA KECURANGAN (FRAUD TRIANGLE) &amp; RESPONS AUDIT (SA 240)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="125" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">1. TEKANAN (PRESSURE)</text>
  <text x="125" y="100" fill="#94a3b8" font-size="9.5" text-anchor="middle">Incentives / Pressures:</text>
  <text x="125" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Target laba bonus direksi</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Ancaman delisting saham</text>
  <text x="125" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Masalah utang pribadi</text>
  <text x="125" y="178" fill="#fca5a5" font-size="9" text-anchor="middle">Motivasi Finansial</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">2. PELUANG (OPPORTUNITY)</text>
  <text x="340" y="100" fill="#94a3b8" font-size="9.5" text-anchor="middle">Opportunities:</text>
  <text x="340" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Kontrol internal lemah</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Management Override</text>
  <text x="340" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Transaksi pihak berelasi</text>
  <text x="340" y="178" fill="#fde68a" font-size="9" text-anchor="middle">Celah dalam Sistem</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="555" y="78" fill="#a78bfa" font-size="11" font-weight="700" text-anchor="middle">3. RASIONALISASI</text>
  <text x="555" y="100" fill="#94a3b8" font-size="9.5" text-anchor="middle">Attitudes / Rationalization:</text>
  <text x="555" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• "Hanya pinjam sementara"</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• "Perusahaan berutang budi"</text>
  <text x="555" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• "Semua orang melakukannya"</text>
  <text x="555" y="178" fill="#ddd6fe" font-size="9" text-anchor="middle">Pembenaran Moral</text>
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
