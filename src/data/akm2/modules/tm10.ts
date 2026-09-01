import type { Reading } from '../../../types';
import {
  CASE_EXTINGUISHMENT_BONDS,
} from '../akm2PracticeCases';

const SVG_EXTINGUISHMENT = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MEKANISME PELUNASAN DINI OBLIGASI (PSAK 71)</text>

  <rect x="30" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. CARRYING VALUE</text>
  <text x="120" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Nilai Buku Bersih Obligasi</text>
  <line x1="40" y1="110" x2="200" y2="110" stroke="#334155"/>
  <text x="120" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Nominal Obligasi</text>
  <text x="120" y="148" fill="#f87171" font-size="9.5" text-anchor="middle">(-) Unamortized Discount</text>
  <text x="120" y="166" fill="#34d399" font-size="9.5" text-anchor="middle">(+) Unamortized Premium</text>
  <text x="120" y="184" fill="#64748b" font-size="8.5" text-anchor="middle">(Tepat per tgl pelunasan)</text>

  <text x="235" y="130" fill="#f59e0b" font-size="16" font-weight="800" text-anchor="middle">VS</text>

  <rect x="260" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="350" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. REACQUISITION</text>
  <text x="350" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Harga Beli Kembali (Kas)</text>
  <line x1="270" y1="110" x2="430" y2="110" stroke="#334155"/>
  <text x="350" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Harga Kurs Beli (%)</text>
  <text x="350" y="148" fill="#f59e0b" font-size="9.5" text-anchor="middle">(+) Biaya Penarikan</text>
  <text x="350" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Belum termasuk bunga)</text>

  <rect x="470" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="560" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">3. LABA / (RUGI)</text>
  <text x="560" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Penghentian Liabilitas</text>
  <line x1="480" y1="110" x2="640" y2="110" stroke="#334155"/>
  <text x="560" y="130" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Carrying &gt; Kas = UNTUNG</text>
  <text x="560" y="150" fill="#f87171" font-size="9.5" font-weight="700" text-anchor="middle">Carrying &lt; Kas = RUGI</text>
  <text x="560" y="175" fill="#f1f5f9" font-size="9" text-anchor="middle">Diakui di Laba Rugi Berjalan</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Pelunasan Dini Obligasi, Wesel Bayar Jangka Panjang, dan Restrukturisasi Utang',
  ref: 'Kieso IFRS 5e Ch. 14 | PSAK 71, PSAK 50',
  intro: 'TM 10 memfokuskan pada penghentian pengakuan liabilitas keuangan (Derecognition of Financial Liabilities): pelunasan dini obligasi sebelum jatuh tempo (Early Extinguishment), pembaharuan amortisasi per tanggal transaksi, kalkulasi untung/rugi pelunasan, wesel bayar jangka panjang untuk properti/jasa, serta restrukturisasi utang bermasalah (Troubled Debt Restructuring).',
  objectives: [
    'Menghitung nilai tercatat bersih obligasi pada tanggal pelunasan dini (termasuk amortisasi bunga parsial).',
    'Menghitung dan menjurnal Keuntungan atau Kerugian Pelunasan Dini Obligasi (Gain/Loss on Extinguishment).',
    'Menilai dan mencatat wesel bayar jangka panjang yang diterbitkan untuk memperoleh aset tetap/jasa pada suku bunga pasar wajar.',
    'Memahami perlakuan akuntansi Restrukturisasi Utang Bermasalah (Modifikasi Persyaratan Signifikan vs Transfer Aset/Ekuitas sesuai PSAK 71).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Mekanisme Penentuan Laba/Rugi Pelunasan Dini Obligasi',
      svg: SVG_EXTINGUISHMENT,
      caption: 'Gambar 10.1: Perbandingan Nilai Buku Bersih (Carrying Value) vs Harga Perolehan Kembali (Reacquisition Price).'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 10'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Update Amortisasi', 'Apakah amortisasi diskonto/premi sudah dimutakhirkan hingga tanggal pelunasan persis?', 'Memperbarui saldo nilai tercatat buku (carrying amount) obligasi.'],
        ['2', 'Hitung Kas Pembelian', 'Berapa kurs beli kembali (reacquisition price) ditambah bunga berjalan yang dibayar?', 'Menghitung total pengeluaran kas pelunasan.'],
        ['3', 'Hitung Gain / Loss', 'Apakah Nilai Tercatat Buku lebih besar (Gain) atau lebih kecil (Loss) dari Kas Pokok Pelunasan?', 'Menentukan laba rugi penghentian liabilitas di Laba Rugi.'],
        ['4', 'Wesel Bayar Aset/Jasa', 'Berapa nilai wajar aset yang diterima atau present value wesel jika tanpa bunga?', 'Mencatat perolehan aset dan diskonto wesel bayar jangka panjang.'],
        ['5', 'Restrukturisasi Utang', 'Apakah modifikasi arus kas utang melampaui ambang batas 10% (Substantial Modification)?', 'Menghapus utang lama dan mengakui liabilitas baru pada nilai wajar.']
      ],
      caption: 'Tabel 10.0: Roadmap belajar pelunasan dini obligasi dan restrukturisasi utang.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 10'
    },
    {
      kind: 'formula',
      text: '\\text{Laba / (Rugi) Pelunasan Dini} = \\text{Net Carrying Amount Obligasi} - \\text{Reacquisition Price (Pokok)}',
      note: 'Net Carrying Amount = Nominal Obligasi - Sisa Diskonto Belum Diamortisasi (atau + Sisa Premi Belum Diamortisasi).'
    },
    {
      kind: 'formula',
      text: '\\text{Uji Modifikasi 10% PSAK 71} = \\left| \\frac{\\text{PV Arus Kas Syarat Baru} - \\text{Carrying Amount Utang Lama}}{\\text{Carrying Amount Utang Lama}} \\right| \\ge 10\%',
      note: 'Jika selisih PV >= 10%, modifikasi dianggap substansial (utang lama dihapus, utang baru diakui pada nilai wajar, selisih masuk Laba Rugi).'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Pelunasan Dini Obligasi PT Barito Pacific Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'PT Barito Pacific memiliki obligasi nominal Rp 500.000.000 dengan carrying value per 1 Juli 2026 sebesar Rp 480.000.000 (sisa diskonto Rp 20.000.000). Pada tanggal tersebut, PT Barito melunasi seluruh obligasi dengan membeli kembali di pasar pada kurs 102% ditambah biaya transaksi penarikan Rp 5.000.000.'
        },
        {
          kind: `formula`,
          text: `Net Carrying Amount = Rp 480.000.000
Reacquisition Price = (102% × 500.000.000) + 5.000.000 = Rp 515.000.000
Rugi Pelunasan Dini (Loss on Extinguishment) = 480.000.000 - 515.000.000 = (Rp 35.000.000)`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Pelunasan Dini oleh PT Barito Pacific`,
          text: `Debit: Utang Obligasi (Net Carrying Amount) Rp 480.000.000
Debit: Rugi Pelunasan Dini Obligasi (Laba Rugi) Rp 35.000.000
Kredit: Kas Rp 515.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Pelunasan Obligasi yang Memiliki Premi',
      prompt: 'Jika obligasi PT Barito Pacific di atas memiliki nilai tercatat Rp 525.000.000 (Premi Rp 25.000.000) dan dibeli kembali pada kurs 99% (Kas = Rp 495.000.000), hitung untung/rugi pelunasan dan buat jurnalnya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Net Carrying Amount**: Rp 525.000.000.',
            '**Reacquisition Price**: 99% × 500 jt = **Rp 495.000.000**.',
            `**Keuntungan Pelunasan Dini (Gain on Extinguishment)**: 525 jt - 495 jt = **Rp 30.000.000** (Untung karena entitas melunasi utang Rp 525 jt hanya dengan membayar kas Rp 495 jt).`,
            `**Jurnal Akuntansi**:
Debit: Utang Obligasi Rp 525.000.000
Kredit: Kas Rp 495.000.000
Kredit: Keuntungan Pelunasan Dini Obligasi (Laba Rugi) Rp 30.000.000`
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UAS Pelunasan Dini',
          text: 'Pastikan bunga akrual berjalan (jika ada) dipisahkan dari harga beli pokok kembali. Pembayaran bunga berjalan didebit ke Beban Bunga / Utang Bunga, BUKAN dimasukkan ke dalam perhitungan Gain/Loss on Extinguishment!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Penghentian Liabilitas Keuangan', 'Kriteria derecognition sesuai PSAK 71 saat kewajiban dibatalkan atau kedaluwarsa.', 'Menghapus liabilitas dari laporan posisi keuangan.'],
        ['2', 'Kalkulasi Gain/Loss Extinguishment', 'Membandingkan carrying value terkini dengan reacquisition price kas.', 'Menghitung dan menjurnal laba rugi pelunasan dini.'],
        ['3', 'Wesel Bayar Jangka Panjang Non-Kas', 'Penetapan nilai tunai PV wesel yang diterbitkan untuk tanah/gedung/mesin.', 'Menyusun tabel amortisasi wesel jangka panjang.'],
        ['4', 'Restrukturisasi Utang Bermasalah', 'Uji 10% modifikasi persyaratan vs pelunasan via penyerahan aset/saham.', 'Menjurnal restrukturisasi utang dari sisi debitur.']
      ],
      caption: 'Tabel 10.1: Matriks kompetensi komprehensif materi TM 10 AKM II.'
    },
    { kind: 'h2', text: '1. Pelunasan Dini Obligasi (Early Extinguishment of Debt)' },
    {
      kind: 'p',
      text: '==Penghentian pengakuan liabilitas keuangan terjadi ketika liabilitas tersebut dipadamkan (extinguished), yaitu ketika kewajiban yang ditentukan dalam kontrak dilepaskan, dibatalkan, atau kedaluwarsa.=='
    },
    CASE_EXTINGUISHMENT_BONDS,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Carrying Amount**: Wajib dimutakhirkan dengan amortisasi parsial hingga tanggal pelunasan.',
        '**Gain on Extinguishment**: Terjadi saat Carrying Amount > Kas yang Dibayarkan.',
        '**Loss on Extinguishment**: Terjadi saat Carrying Amount < Kas yang Dibayarkan.',
        `**Restrukturisasi Modifikasi 10%**: Jika selisih PV >= 10%, hapus utang lama dan akui laba rugi restrukturisasi.`
      ]
    }
  ]
};
