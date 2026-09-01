import type { Reading } from '../../../types';
import {
  CASE_DEPRECIATION_METHODS,
  CASE_DEPLETION_MINING,
  CASE_IMPAIRMENT_TEST,
} from '../akm2PracticeCases';

const SVG_DEPRECIATION_CURVES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">POLA ALOKASI BEBAN METODE DEPRESIASI</text>
  
  <line x1="60" y1="180" x2="620" y2="180" stroke="#475569" stroke-width="1.5"/>
  <line x1="60" y1="50" x2="60" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="50" y="55" fill="#94a3b8" font-size="9" text-anchor="end">Beban (Rp)</text>
  <text x="620" y="195" fill="#94a3b8" font-size="9" text-anchor="end">Tahun (1..5)</text>

  <line x1="70" y1="120" x2="600" y2="120" stroke="#38bdf8" stroke-width="3"/>
  <text x="605" y="124" fill="#38bdf8" font-size="10" font-weight="700">Garis Lurus (Konstan)</text>

  <path d="M 70 60 Q 250 140 600 170" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <text x="605" y="170" fill="#f43f5e" font-size="10" font-weight="700">DDB / SYD (Menurun Cepat)</text>

  <path d="M 70 140 L 200 80 L 330 150 L 460 70 L 600 130" fill="none" stroke="#34d399" stroke-width="2.5" stroke-dasharray="4"/>
  <text x="605" y="130" fill="#34d399" font-size="10" font-weight="700">Aktivitas (Fluktuatif)</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Depresiasi, Penurunan Nilai (Impairment), dan Deplesi Sumber Daya Alam',
  ref: 'Kieso IFRS 5e Ch. 11 | PSAK 16, PSAK 48, PSAK 64',
  intro: 'TM 3 membahas alokasi biaya perolehan aset secara sistematis dan uji pemulihan nilai aset: 4 metode depresiasi (Garis Lurus, Unit Aktivitas, Saldo Menurun Ganda, Jumlah Angka Tahun), revisi estimasi akuntansi prospektif, deplesi tambang migas, serta uji penurunan nilai (Impairment Test - PSAK 48) berbasis Nilai Terpulihkan.',
  objectives: [
    'Menghitung dan membandingkan beban depresiasi menggunakan 4 metode utama sesuai PSAK 16.',
    'Menerapkan perlakuan akuntansi atas Perubahan Estimasi Umur Manfaat & Nilai Sisa (Metode Prospektif - PSAK 25).',
    'Menghitung tarif dan beban Deplesi Sumber Daya Alam serta biaya pemulihan lingkungan (PSAK 64 / PSAK 57).',
    'Menguasai 2 langkah pengujian Penurunan Nilai (Impairment Test) berdasarkan PSAK 48 (Nilai Wajar Neto vs Nilai Pakai).',
    'Menjurnal Rugi Penurunan Nilai dan Pembalikan Penurunan Nilai (Reversal of Impairment) aset tetap.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pola Kurva Alokasi Beban Depresiasi',
      svg: SVG_DEPRECIATION_CURVES,
      caption: 'Gambar 3.1: Perbandingan profil pembebanan laba rugi antar metode depresiasi.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 3'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Dasar Penyusutan (Depreciable Base)', 'Berapa Biaya Perolehan dikurangi Estimasi Nilai Sisa (Residual Value)?', 'Menghitung basis nilai yang akan dialokasikan sepanjang umur ekonomis.'],
        ['2', 'Pemilihan Metode Depresiasi', 'Apakah pola konsumsi manfaat aset bersifat konstan, akselerasi, atau proporsional unit?', 'Mampu menyusun tabel amortisasi depresiasi tahun 1 sampai akhir masa manfaat.'],
        ['3', 'Perubahan Estimasi (Revisi)', 'Bagaimana jika pada tahun ke-3 umur aset diperpanjang atau nilai sisa berubah?', 'Menghitung depresiasi baru secara prospektif (tanpa merevisi tahun lalu).'],
        ['4', 'Deplesi Tambang (PSAK 64)', 'Berapa tarif deplesi per ton/barel cadangan terbukti dan biaya restorasi?', 'Menjurnal deplesi ke persediaan mineral/batubara.'],
        ['5', 'Uji Penurunan Nilai (PSAK 48)', 'Apakah Nilai Tercatat > Nilai Terpulihkan (Recoverable Amount)?', 'Menghitung dan menjurnal Impairment Loss di Laba Rugi.']
      ],
      caption: 'Tabel 3.0: Roadmap belajar depresiasi, deplesi, dan impairment.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 3'
    },
    {
      kind: 'formula',
      text: 'Beban Garis Lurus = \\frac{\\text{Biaya Perolehan} - \\text{Nilai Sisa}}{\\text{Umur Manfaat (Tahun)}}',
      note: 'Metode paling sederhana dan menghasilkan pembebanan konstan setiap periode.'
    },
    {
      kind: 'formula',
      text: 'Beban DDB = 2 \\times \\left( \\frac{1}{\\text{Umur Manfaat}} \\right) \\times \\text{Nilai Buku Awal Tahun (Carrying Value)}',
      note: 'DDB (Double-Declining Balance) MENGABAIKAN nilai sisa pada perhitungan awal, tetapi tidak boleh menyusutkan aset di bawah nilai sisa.'
    },
    {
      kind: 'formula',
      text: 'Beban SYD = (\\text{Biaya Perolehan} - \\text{Nilai Sisa}) \\times \\frac{\\text{Sisa Umur Awal Tahun}}{\\frac{n(n+1)}{2}}',
      note: 'SYD (Sum-of-the-Years-Digits) menghasilkan pola pembebanan menurun secara bertahap.'
    },
    {
      kind: 'formula',
      text: 'Nilai Terpulihkan (Recoverable Amount) = \\max(\\text{Fair Value less Costs of Disposal}, \\text{Value in Use})',
      note: 'Jika Carrying Amount > Recoverable Amount, selisihnya diakui sebagai Rugi Penurunan Nilai (Impairment Loss).'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Uji Penurunan Nilai Mesin Robotik PT Astra International Tbk',
      blocks: [
        {
          kind: `p`,
          text: `PT Astra memiliki mesin robotik perakitan mobil per 31 Desember 2026 dengan nilai tercatat (carrying amount) Rp 450.000.000 (Harga perolehan Rp 800 jt, Akumulasi Depresiasi Rp 350 jt). Karena perubahan tren mobil listrik, terindikasi penurunan nilai. Data penilai independen:
• Nilai wajar pasar mesin: Rp 380.000.000 (biaya penjualan pelepasan Rp 20.000.000).
• Nilai pakai (Value in Use - PV arus kas operasi masa depan): Rp 390.000.000.`
        },
        {
          kind: `formula`,
          text: `Fair Value less Costs of Disposal = 380.000.000 - 20.000.000 = Rp 360.000.000
Value in Use = Rp 390.000.000
Nilai Terpulihkan (Recoverable Amount) = \\max(360.000.000, 390.000.000) = Rp 390.000.000
Rugi Penurunan Nilai (Impairment Loss) = 450.000.000 - 390.000.000 = Rp 60.000.000`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Penurunan Nilai oleh PT Astra`,
          text: `Debit: Rugi Penurunan Nilai (Laba Rugi) Rp 60.000.000
Kredit: Akumulasi Penurunan Nilai / Mesin Robotik Rp 60.000.000
Nilai tercatat baru mesin di neraca menjadi Rp 390.000.000 dan menjadi dasar depresiasi sisa umur.`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Revisi Estimasi Umur & Nilai Sisa (Metode Prospektif)',
      prompt: 'Gedung kantor dibeli 1 Jan 2023 seharga Rp 1.000.000.000 (estimasi umur 20 tahun, nilai sisa Rp 100 jt, metode garis lurus). Pada 1 Jan 2026 (setelah 3 tahun), manajemen merevisi total umur sisa menjadi 25 tahun lagi dari sekarang dan nilai sisa menjadi Rp 40 jt. Hitung beban depresiasi tahun 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Depresiasi Tahunan Lama (2023-2025)**: (1.000.000.000 - 100.000.000) / 20 = **Rp 45.000.000/tahun**.',
            '**Akumulasi Depresiasi per 31 Des 2025 (3 tahun)**: 3 × Rp 45 jt = **Rp 135.000.000**.',
            '**Nilai Buku per 1 Jan 2026**: 1.000.000.000 - 135.000.000 = **Rp 865.000.000**.',
            '**Beban Depresiasi Baru Tahun 2026**: (865.000.000 - 40.000.000) / 25 tahun = **Rp 33.000.000/tahun**.'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UTS',
          text: 'Perubahan estimasi akuntansi (umur/nilai sisa) SELALU diperlakukan secara **PROSPEKTIF** (ke depan). DILARANG MENYESUAIKAN laba ditahan atau merevisi jurnal depresiasi tahun-tahun sebelumnya!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 3'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Metode Depresiasi PSAK 16', 'Perhitungan Garis Lurus, Aktivitas, DDB, dan SYD serta depresiasi tahun parsial.', 'Mampu menyusun skedul depresiasi penuh hingga akhir masa manfaat.'],
        ['2', 'Revisi Estimasi (PSAK 25)', 'Mekanisme perhitungan beban depresiasi baru pasca-perubahan estimasi umur/nilai sisa.', 'Menghitung nilai buku terkini dan beban depresiasi periode berjalan.'],
        ['3', 'Deplesi Sumber Daya Alam (PSAK 64)', 'Perhitungan tarif deplesi per unit cadangan terbukti dan biaya restorasi tambang.', 'Menjurnal deplesi ke akun persediaan hasil tambang.'],
        ['4', 'Indikator Penurunan Nilai (PSAK 48)', 'Indikator internal (keusangan fisik) vs eksternal (penurunan suku bunga/pasar).', 'Mengidentifikasi kapan pengujian impairment wajib dilakukan.'],
        ['5', 'Uji Nilai Terpulihkan (Recoverable)', 'Memilih nilai tertinggi antara Fair Value less Cost of Disposal vs Value in Use.', 'Menghitung nilai terpulihkan dan selisih impairment loss.'],
        ['6', 'Pembalikan Penurunan Nilai', 'Syarat pemulihan nilai aset tetap dan batas maksimal nilai tercatat baru.', 'Menjurnal pemulihan rugi penurunan nilai ke laba rugi.']
      ],
      caption: 'Tabel 3.1: Matriks kompetensi komprehensif materi TM 3 AKM II.'
    },
    { kind: 'h2', text: '1. Perbandingan Empat Metode Depresiasi' },
    {
      kind: 'p',
      text: '==Depresiasi adalah proses alokasi biaya perolehan aset berwujud menjadi beban secara sistematis dan rasional sepanjang periode yang menikmati manfaat aset, BUKAN proses penilaian pasar.=='
    },
    CASE_DEPRECIATION_METHODS,
    { kind: 'h2', text: '2. Deplesi Sumber Daya Alam (PSAK 64 / IFRS 6)' },
    {
      kind: 'p',
      text: 'Deplesi adalah alokasi biaya perolehan sumber daya alam (seperti tambang minyak, batu bara, emas, dan kayu hutan) berdasarkan unit fisik yang diekstraksi dari alam.'
    },
    CASE_DEPLETION_MINING,
    { kind: 'h2', text: '3. Uji Penurunan Nilai Aset (Impairment of Assets - PSAK 48)' },
    {
      kind: 'p',
      text: 'Sesuai PSAK 48, jika nilai tercatat (*carrying amount*) suatu aset melebihi jumlah terpulihkannya (*recoverable amount*), aset tersebut mengalami penurunan nilai (*impaired*) dan entitas wajib mengakui rugi penurunan nilai di Laba Rugi.'
    },
    CASE_IMPAIRMENT_TEST,
    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Depresiasi DDB**: Mengalikan tarif 2/n dengan nilai buku awal tahun (tanpa dikurangi nilai sisa di awal).',
        '**Perubahan Estimasi**: Diperlakukan prospektif, nilai buku sisa dialokasikan ke sisa umur baru.',
        '**Deplesi Tambang**: Menjadi bagian dari kos persediaan mineral (Aset Persediaan), bukan langsung ke beban laba rugi jika belum terjual.',
        '**Recoverable Amount PSAK 48**: Nilai TERTINGGI antara Nilai Wajar Neto vs Nilai Pakai (Value in Use).',
        `**Impairment Reversal**: Pembalikan rugi penurunan nilai aset tetap dibatasi sampai nilai buku seandainya tidak pernah terjadi impairment.`
      ]
    }
  ]
};
