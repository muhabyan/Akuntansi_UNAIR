import type { Reading } from '../../../types';
import {
  CASE_IMPAIRMENT_TEST,
  CASE_HELD_FOR_SALE_LAND } from '../akm2PracticeCases';

const SVG_IMPAIRMENT_FLOW = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ALUR UJI PENURUNAN NILAI (IMPAIRMENT TEST - PSAK 48)</text>

  <rect x="30" y="55" width="180" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. CARRYING AMOUNT</text>
  <text x="120" y="98" fill="#cbd5e1" font-size="10" text-anchor="middle">Nilai Tercatat di Buku</text>

  <text x="235" y="90" fill="#f59e0b" font-size="14" font-weight="800" text-anchor="middle">VS</text>

  <rect x="260" y="55" width="220" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="370" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. RECOVERABLE AMOUNT</text>
  <text x="370" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">PILIH NILAI TERTINGGI ANTARA:</text>
  <rect x="275" y="110" width="190" height="38" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="370" y="126" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">A. Fair Value less Cost to Sell</text>
  <text x="370" y="140" fill="#64748b" font-size="8.5" text-anchor="middle">(Harga pasar neto pelepasan)</text>
  <rect x="275" y="155" width="190" height="38" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="370" y="171" fill="#38bdf8" font-size="9.5" font-weight="600" text-anchor="middle">B. Value in Use</text>
  <text x="370" y="185" fill="#64748b" font-size="8.5" text-anchor="middle">(PV arus kas masa depan)</text>

  <rect x="500" y="55" width="155" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="577" y="78" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">3. KESIMPULAN</text>
  <text x="577" y="105" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Jika Carrying &gt; Recoverable:</text>
  <text x="577" y="125" fill="#f87171" font-size="11" font-weight="800" text-anchor="middle">IMPAIRMENT!</text>
  <text x="577" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Akui Rugi di Laba Rugi</text>
  <text x="577" y="170" fill="#34d399" font-size="9" text-anchor="middle">Jika Sebaliknya:</text>
  <text x="577" y="188" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">NO IMPAIRMENT</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Penurunan Nilai Aset (Impairment), Hak Tanah & Penyajian Aset Tetap',
  ref: 'Kieso IFRS 5e Ch. 11 | PSAK 48, PSAK 16, ISAK 25',
  intro: 'TM 4 membedah prosedur komprehensif pengujian penurunan nilai aset individual dan Unit Penghasil Kas (CGU - Cash-Generating Units), pengalokasian rugi penurunan nilai ke Goodwill dan aset lain, pembalikan rugi (reversal), serta pengungkapan resmi laporan keuangan.',
  objectives: [
    'Menganalisis indikasi penurunan nilai internal dan eksternal sesuai PSAK 48.',
    'Menghitung Nilai Terpulihkan (Recoverable Amount) dari Nilai Wajar Neto dan Nilai Pakai (Value in Use).',
    'Menghitung dan mengalokasikan rugi penurunan nilai pada tingkat Unit Penghasil Kas (Cash-Generating Unit - CGU).',
    'Menjurnal pemulihan rugi penurunan nilai (Impairment Reversal) dan batas maksimum nilai tercatat baru.',
    'Memahami penyajian aset tetap di Laporan Posisi Keuangan dan Catatan atas Laporan Keuangan (CALK).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Alur Sistematis Pengujian Penurunan Nilai Berdasarkan PSAK 48',
      svg: SVG_IMPAIRMENT_FLOW,
      caption: 'Gambar 4.1: Logika dua langkah menentukan apakah aset mengalami impairment.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 4'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Identifikasi Indikasi', 'Apakah terdapat bukti keusangan fisik, penurunan pasar tajam, atau restrukturisasi?', 'Menentukan apakah entitas wajib melakukan uji kuantitatif penurunan nilai.'],
        ['2', 'Hitung Nilai Terpulihkan', 'Berapa Fair Value less Cost of Disposal vs Value in Use (PV Arus Kas)?', 'Menetapkan angka Recoverable Amount (ambil nilai tertinggi).'],
        ['3', 'Uji Selisih & Jurnal', 'Apakah Nilai Tercatat Buku > Recoverable Amount?', 'Menjurnal Beban Penurunan Nilai dan menyesuaikan akun akumulasi impairment.'],
        ['4', 'Alokasi CGU & Goodwill', 'Bagaimana jika pengujian dilakukan per kelompok unit bisnis (CGU)?', 'Mengalokasikan rugi ke Goodwill terlebih dahulu, sisanya prorata ke aset lain.'],
        ['5', 'Pembalikan (Reversal)', 'Apakah kondisi yang menyebabkan impairment telah pulih di masa depan?', 'Mencatat pemulihan laba penurunan nilai (khusus aset selain Goodwill).']
      ],
      caption: 'Tabel 4.0: Roadmap belajar pengujian penurunan nilai aset dan CGU.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 4'
    },
    {
      kind: 'formula',
      text: 'Recoverable Amount = \\max(\\text{Fair Value} - \\text{Costs of Disposal}, \\text{Value in Use})',
      note: 'Value in Use dihitung dengan mendiskontokan estimasi arus kas masa depan menggunakan suku bunga diskonto sebelum pajak.'
    },
    {
      kind: 'formula',
      text: 'Impairment Loss = \\text{Carrying Amount} - \\text{Recoverable Amount}',
      note: 'Hanya diakui jika Carrying Amount > Recoverable Amount. Jika Carrying Amount < Recoverable Amount, tidak ada pencatatan (tidak boleh mencatat kenaikan nilai pada Cost Model).'
    },
    {
      kind: 'formula',
      text: 'Batas Maksimum Reversal = \\text{Nilai Buku Historis Seandainya Tidak Pernah Impairment} - \\text{Akumulasi Depresiasi Normal}',
      note: 'Pembalikan penurunan nilai dilarang menaikkan nilai aset melampaui nilai buku normal aset jika tidak pernah diturunkan nilainya.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Alokasi Impairment Unit Penghasil Kas (CGU) PT Telkom Indonesia Tbk',
      blocks: [
        {
          kind: `p`,
          text: `PT Telkom menguji Unit Bisnis Satelit (CGU) dengan nilai tercatat total Rp 1.200.000.000, terdiri dari:
• Goodwill: Rp 200.000.000
• Perangkat Satelit: Rp 600.000.000
• Stasiun Bumi: Rp 400.000.000
Berdasarkan penilaian independen, Nilai Terpulihkan (Recoverable Amount) CGU tersebut adalah Rp 850.000.000.`
        },
        {
          kind: `formula`,
          text: `Total Impairment Loss CGU = 1.200.000.000 - 850.000.000 = Rp 350.000.000
Tahap 1 (Hapus Goodwill Penuh) = Rp 200.000.000 (Sisa Impairment: Rp 150.000.000)
Tahap 2 (Alokasi Prorata ke Satelit & Stasiun Bumi):
• Satelit (600/1000 × 150 jt) = Rp 90.000.000 (Nilai Buku Baru: Rp 510 jt)
• Stasiun Bumi (400/1000 × 150 jt) = Rp 60.000.000 (Nilai Buku Baru: Rp 340 jt)`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Aturan Emas Alokasi Impairment CGU',
          text: 'Rugi penurunan nilai pada Unit Penghasil Kas WAJIB dialokasikan pertama kali untuk MENGHAPUS GOODWILL sampai habis (Rp 0), baru kemudian sisanya dibagi proporsional ke aset berwujud lainnya.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Pembalikan Penurunan Nilai (Reversal of Impairment)',
      prompt: 'Mesin dibeli Rp 500 jt (umur 5 tahun, tanpa nilai sisa, garis lurus = Rp 100 jt/thn). Pada akhir Tahun ke-1, mesin mengalami impairment sebesar Rp 80 jt sehingga nilai buku menjadi Rp 320 jt. Pada akhir Tahun ke-2, kondisi membaik dan nilai terpulihkan melonjak menjadi Rp 360 jt. Berapa nilai reversal yang boleh diakui di Laba Rugi?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Depresiasi Tahun ke-2 pasca-impairment**: Rp 320 jt / 4 tahun sisa = **Rp 80 jt**.',
            '**Nilai Buku per Akhir Tahun ke-2 (sebelum reversal)**: Rp 320 jt - Rp 80 jt = **Rp 240.000.000**.',
            '**Batas Maksimum Nilai Buku Normal (tanpa impairment)**: Rp 500 jt - (2 × Rp 100 jt) = **Rp 300.000.000**.',
            '**Nilai Terpulihkan Aktual**: Rp 360.000.000 (melampaui plafon normal).',
            '**Maksimal Nilai Tercatat Baru**: **Rp 300.000.000** (bukan Rp 360 jt!).',
            '**Keuntungan Pembalikan Impairment (Laba Rugi)**: Rp 300 jt - Rp 240 jt = **Rp 60.000.000**.'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan Ujian Reversal',
          text: 'Pembalikan penurunan nilai TIDAK BOLEH mencatat aset hingga Rp 360 jt karena akan melanggar prinsip kos historis (dilarang menciptakan revaluasi terselubung pada Cost Model).'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Prinsip Penurunan Nilai PSAK 48', 'Indikator internal vs eksternal dan waktu pelaksanaan uji penurunan nilai.', 'Menentukan kapan impairment test wajib dilakukan.'],
        ['2', 'Penentuan Recoverable Amount', 'Perhitungan Fair Value less Cost of Disposal vs Value in Use.', 'Memilih nilai tertinggi sebagai dasar pemulihan nilai.'],
        ['3', 'Impairment Unit Penghasil Kas (CGU)', 'Alokasi rugi penurunan nilai bertingkat: Goodwill lalu prorata aset lain.', 'Menghitung nilai tercatat akhir masing-masing aset dalam CGU.'],
        ['4', 'Pembalikan Penurunan Nilai Aset Tetap', 'Perhitungan batas plafon nilai buku normal seandainya tidak pernah impaired.', 'Menjurnal pemulihan rugi penurunan nilai ke laba rugi.'],
        ['5', 'Penyajian & Pengungkapan', 'Penyajian rugi impairment di laporan laba rugi dan rekonsiliasi di CALK.', 'Menyajikan posisi aset neto secara wajar di neraca.']
      ],
      caption: 'Tabel 4.1: Matriks kompetensi komprehensif materi TM 4 AKM II.'
    },
    { kind: 'h2', text: '1. Pengujian Penurunan Nilai Aset Tunggal (Individual Asset Impairment)' },
    {
      kind: 'p',
      text: '==Sesuai PSAK 48, entitas menilai pada setiap akhir periode pelaporan apakah terdapat indikasi bahwa aset mengalami penurunan nilai. Jika indikasi tersebut ada, maka entitas mengestimasi jumlah terpulihkan aset tersebut.=='
    },
    CASE_IMPAIRMENT_TEST,
    { kind: 'h2', text: '2. Penurunan Nilai Unit Penghasil Kas (CGU) dan Goodwill' },
    {
      kind: 'p',
      text: 'Jika tidak memungkinkan mengestimasi jumlah terpulihkan untuk aset individual (karena aset tidak menghasilkan arus kas masuk independen), maka entitas menguji **Unit Penghasil Kas (Cash-Generating Unit - CGU)** terkecil yang menaungi aset tersebut.'
    },
    { kind: 'h2', text: "2. Aset Tidak Lancar Dimiliki untuk Dijual (PSAK 58) & Hak Tanah (ISAK 25)" },
    {
      kind: 'p',
      text: "==PSAK 58 menetapkan bahwa aset tidak lancar yang dimiliki untuk dijual tidak boleh lagi disusutkan sejak tanggal reklasifikasi, dan diukur pada nilai yang lebih rendah antara nilai tercatat vs nilai wajar setelah dikurangi biaya pelepasan (FVLCD). Sementara itu, ISAK 25 menegaskan bahwa hak legal atas tanah di Indonesia (HGB/HGU) pada hakikatnya diamortisasi jika umur haknya terbatas.=="
    },
    CASE_HELD_FOR_SALE_LAND,
    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Recoverable Amount**: Selalu ambil yang TERTINGGI antara Nilai Wajar Neto dan Nilai Pakai.',
        '**Urutan Alokasi CGU**: Goodwill dihabiskan terlebih dahulu, baru kemudian sisa rugi dibagi prorata.',
        '**Goodwill Impairment**: Rugi penurunan nilai yang telah dialokasikan ke Goodwill **TIDAK BOLEH DIBALIKKAN (NON-REVERSIBLE)** pada periode berikutnya!',
        `**Plafon Pembalikan Aset Tetap**: Dibatasi sebesar nilai buku historis dikurangi akumulasi depresiasi normal.`
      ]
    }
  ]
};
