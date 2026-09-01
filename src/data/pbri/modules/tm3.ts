import type { Reading } from '../../../types';
import { CASE_MANAGEMENT_ASSERTIONS } from '../pbriPracticeCases';

const SVG_ASSERTIONS_DIRECTION = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ARAH PENGUJIAN AUDIT: TRACING (COMPLETENESS) VS VOUCHING (OCCURRENCE)</text>
  
  <rect x="30" y="55" width="200" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="130" y="78" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">DOKUMEN SUMBER</text>
  <text x="130" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Surat Jalan, Faktur,</text>
  <text x="130" y="116" fill="#94a3b8" font-size="10" text-anchor="middle">Bukti Kas, Slip Gaji,</text>
  <text x="130" y="134" fill="#94a3b8" font-size="10" text-anchor="middle">Laporan Penerimaan Barang</text>
  <text x="130" y="165" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">Fakta Riil Terjadi</text>

  <rect x="450" y="55" width="200" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="550" y="78" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">JURNAL &amp; BUKU BESAR</text>
  <text x="550" y="98" fill="#94a3b8" font-size="10" text-anchor="middle">Jurnal Penjualan,</text>
  <text x="550" y="116" fill="#94a3b8" font-size="10" text-anchor="middle">Jurnal Pengeluaran Kas,</text>
  <text x="550" y="134" fill="#94a3b8" font-size="10" text-anchor="middle">Buku Besar Piutang/Utang</text>
  <text x="550" y="165" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Pencatatan Akuntansi</text>

  <text x="340" y="76" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TRACING (Maju: Kelengkapan)</text>
  <text x="340" y="96" fill="#94a3b8" font-size="9" text-anchor="middle">Cek Transaksi Riil yg Hilang</text>

  <text x="340" y="138" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">VOUCHING (Mundur: Keterjadian)</text>
  <text x="340" y="158" fill="#94a3b8" font-size="9" text-anchor="middle">Cek Transaksi Fiktif/Ganda</text>
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
      text: `\\text{Vouching (Buku Besar } \\rightarrow \\text{ Dokumen)} \\Longrightarrow \\text{Uji Asersi OCCURRENCE / EXISTENCE (Cegah Overstatement)}
\\text{Tracing (Dokumen } \\rightarrow \\text{ Buku Besar)} \\Longrightarrow \\text{Uji Asersi COMPLETENESS (Cegah Understatement)}`,
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
