import type { Reading } from '../../../types';
import { CASE_MANAGEMENT_ASSERTIONS } from '../pbriPracticeCases';

const SVG_ASSERTIONS_DIRECTION = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARAH PENGUJIAN AUDIT: VOUCHING (KEBERADAAN) VS TRACING (KELENGKAPAN)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DIRECTION TESTING</text>

  <g transform="translate(45, 120)">
    <rect class="svg-card" x="0" y="0" width="220" height="120" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="110" y="24" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">DOKUMEN SUMBER</text>
    <text class="svg-muted" x="110" y="38" fill="#94a3b8" font-size="8" text-anchor="middle">(Source Documents)</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="8">• Faktur Pembelian Vendor</text>
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="8">• Surat Jalan Pengiriman</text>
    <text class="svg-text" x="14" y="94" fill="#cbd5e1" font-size="8">• Rekening Koran Bank</text>
    <text class="svg-text" x="14" y="110" fill="#cbd5e1" font-size="8">• Berita Acara Penerimaan</text>
  </g>

  <g transform="translate(635, 120)">
    <rect class="svg-card" x="0" y="0" width="220" height="120" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="110" y="24" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">CATATAN AKUNTANSI</text>
    <text class="svg-muted" x="110" y="38" fill="#94a3b8" font-size="8" text-anchor="middle">(Journals / General Ledger)</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="8">• Jurnal Penjualan / Pembelian</text>
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="8">• Buku Besar Pembantu Piutang</text>
    <text class="svg-text" x="14" y="94" fill="#cbd5e1" font-size="8">• Neraca Saldo (Trial Balance)</text>
    <text class="svg-text" x="14" y="110" fill="#cbd5e1" font-size="8">• Laporan Keuangan Neraca</text>
  </g>

  <g transform="translate(285, 95)">
    <line x1="330" y1="20" x2="20" y2="20" stroke="#38bdf8" stroke-width="3"/>
    <polygon points="15,20 28,14 28,26" fill="#38bdf8"/>
    <rect class="svg-subcard" x="50" y="0" width="240" height="38" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="170" y="16" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">VOUCHING (UJI KEBERADAAN / OCCURRENCE)</text>
    <text class="svg-text" x="170" y="30" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Mendeteksi Salah Saji Lebih (Overstatement / Fiktif)</text>
  </g>

  <g transform="translate(285, 195)">
    <line x1="20" y1="20" x2="330" y2="20" stroke="#34d399" stroke-width="3"/>
    <polygon points="335,20 322,14 322,26" fill="#34d399"/>
    <rect class="svg-subcard" x="50" y="0" width="240" height="38" rx="6" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="170" y="16" fill="#34d399" font-size="9" font-weight="800" text-anchor="middle">TRACING (UJI KELENGKAPAN / COMPLETENESS)</text>
    <text class="svg-text" x="170" y="30" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Mendeteksi Salah Saji Kurang (Understatement / Hilang)</text>
  </g>

  <g transform="translate(45, 275)">
    <rect class="svg-subcard" x="0" y="0" width="810" height="45" rx="8" fill="#1e293b"/>
    <text class="text-accent-blue" x="405" y="18" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">
      Kaidah Emas Audit: Vouching membuktikan bahwa angka tercatat benar-benar ADA transaksi riilnya.
    </text>
    <text class="text-accent-green" x="405" y="34" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">
      Sedangkan Tracing membuktikan seluruh transaksi riil sudah LENGKAP dibukukan tanpa ada utang disembunyikan.
    </text>
  </g>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Tanggung Jawab Auditor, Tujuan Audit, & Asersi Manajemen',
  ref: 'Arens 16e Ch. 6 | SA 200, SA 240, SA 250, SA 315 | Asersi ISA',
  intro: 'TM 3 membahas pembagian tanggung jawab auditor vs manajemen dalam pencegahan dan pendeteksian salah saji (Error vs Fraud), kepatuhan terhadap regulasi (SA 250), serta pemetaan asersi manajemen ke tujuan audit transaksi, saldo akun, dan penyajian/pengungkapan.',
  objectives: [
    'Membedakan tanggung jawab auditor atas Kekeliruan Tidak Sengaja (Errors) vs Kecurangan yang Disengaja (Fraud).',
    'Menguasai klasifikasi asersi manajemen: Golongan Transaksi, Saldo Akun Akhir Periode, serta Penyajian & Pengungkapan.',
    'Menentukan arah pengujian audit (Audit Testing Direction): Tracing vs Vouching.',
    'Menerapkan skeptisisme profesional dalam mendeteksi indikasi ketidakpatuhan hukum (SA 250).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Arah Pengujian Audit Substantif (Tracing vs Vouching).',
      svg: SVG_ASSERTIONS_DIRECTION
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Kategori Asersi', 'Asersi Spesifik ISA', 'Pertanyaan Uji Auditor', 'Risiko Utama Salah Saji'],
      rows: [
        ['Golongan Transaksi (Laba Rugi)', 'Keterjadian (Occurrence)', 'Apakah transaksi pendapatan yang dicatat benar-benar terjadi?', 'Overstatement (Pendapatan Fiktif).'],
        ['Golongan Transaksi (Laba Rugi)', 'Kelengkapan (Completeness)', 'Apakah seluruh beban dan penjualan riil telah dicatat tanpa ada yang tertinggal?', 'Understatement (Beban Sengaja Dihilangkan).'],
        ['Golongan Transaksi (Laba Rugi)', 'Akurasi & Pisah Batas (Accuracy & Cut-off)', 'Apakah angka dicatat sesuai faktur dan dicatat pada periode yang benar?', 'Salah Saji Aritmatika / Jurnal Prematur.'],
        ['Saldo Akun (Neraca)', 'Eksistensi (Existence)', 'Apakah persediaan fisik dan kas di bank benar-benar ada per 31 Desember?', 'Overstatement Aset (Aset Siluman).'],
        ['Saldo Akun (Neraca)', 'Hak & Kewajiban (Rights & Obligations)', 'Apakah aset yang tercatat merupakan hak sah klien dan bukan titipan (konsinyasi)?', 'Aset Pihak Ketiga Diakui Milik Sendiri.'],
        ['Saldo Akun (Neraca)', 'Penilaian & Alokasi (Valuation & Allocation)', 'Apakah piutang disajikan pada NRV setelah cadangan ECL dan aset tetap disusutkan benar?', 'Overstatement Nilai Tercatat Aset.']
      ],
      caption: 'Tabel 3.0: Matriks pemetaan asersi manajemen terhadap risiko audit.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Hubungan Asersi, Arah Uji, & Risiko Salah Saji'
    },
    {
      kind: 'formula',
      text: `\\text{Vouching (Buku Besar } \\r→ \\text{ Dokumen)} \\Longr→ \\text{Uji Asersi OCCURRENCE / EXISTENCE (Cegah Overstatement)}
\\text{Tracing (Dokumen } \\r→ \\text{ Buku Besar)} \\Longr→ \\text{Uji Asersi COMPLETENESS (Cegah Understatement)}`,
      note: 'Menghafal arah pengujian adalah kunci menjawab 80% soal kasus pengujian substantif siklus akuntansi di UTS.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Identifikasi Asersi & Prosedur Audit',
      prompt: 'Auditor ingin memastikan bahwa PT Barito tidak mencatat barang konsinyasi milik PT Antara sebagai bagian dari saldo persediaannya sendiri per 31 Desember 2026. Sebutkan asersi yang diuji dan prosedur audit yang harus dilakukan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Asersi yang Diuji**: Hak dan Kewajiban (Rights & Obligations).',
            '**Prosedur Audit**: (1) Memeriksa perjanjian konsinyasi fisik dan dokumen penerimaan barang, (2) Meminta konfirmasi tertulis kepada pemilik barang konsinyasi (PT Antara), (3) Menginstruksikan tim stock opname untuk memisahkan dan menandai area barang titipan agar tidak dimasukkan ke dalam daftar inventaris milik klien.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 3'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Tanggung Jawab Auditor atas Fraud (SA 240)', 'Pembedaan kecurangan laporan keuangan vs penyalahgunaan aset.', 'Memahami keterbatasan inheren audit dalam mendeteksi kolusi.'],
        ['2', 'Asersi Manajemen Lengkap', 'Klasifikasi Transaksi, Saldo Akun, dan Pengungkapan.', 'Mampu menghubungkan asersi dengan prosedur audit lapangan.'],
        ['3', 'Arah Pengujian Substantif', 'Diferensiasi Tracing vs Vouching.', 'Mampu merancang prosedur pengujian overstatement dan understatement.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 PBR I.'
    },
    CASE_MANAGEMENT_ASSERTIONS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Fraud vs Error**: Pembeda utama adalah NIAT (Intent). Fraud melibatkan kesengajaan dan upaya penyembunyian (Concealment).',
        '**Asersi Transaksi vs Saldo**: Occurrence hanya berlaku untuk transaksi laba rugi; Existence hanya berlaku untuk saldo neraca.',
        '**Cut-Off**: Pengujian pisah batas menguji apakah transaksi dicatat pada periode akuntansi yang tepat (umumnya 5 hari sebelum & sesudah tanggal neraca).'
      ]
    }
  ]
};
