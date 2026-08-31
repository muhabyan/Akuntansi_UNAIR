import type { Reading } from '../../../types';
import {
  CASE_DEPRECIATION_METHODS,
  CASE_DEPLETION_MINING,
} from '../akm2PracticeCases';

const SVG_DEPRECIATION_CURVES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">POLA ALOKASI BEBAN METODE DEPRESIASI</text>
  
  <!-- Axis -->
  <line x1="60" y1="180" x2="620" y2="180" stroke="#475569" stroke-width="1.5"/>
  <line x1="60" y1="50" x2="60" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="50" y="55" fill="#94a3b8" font-size="9" text-anchor="end">Beban (Rp)</text>
  <text x="620" y="195" fill="#94a3b8" font-size="9" text-anchor="end">Tahun (1..5)</text>

  <!-- Straight Line: Constant -->
  <line x1="70" y1="120" x2="600" y2="120" stroke="#38bdf8" stroke-width="3"/>
  <text x="605" y="124" fill="#38bdf8" font-size="10" font-weight="700">Garis Lurus (Konstan)</text>

  <!-- Accelerated: DDB & SYD -->
  <path d="M 70 60 Q 250 140 600 170" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <text x="605" y="170" fill="#f43f5e" font-size="10" font-weight="700">DDB / SYD (Menurun Cepat)</text>

  <!-- Activity Units: Fluctuating -->
  <path d="M 70 140 L 200 80 L 330 150 L 460 70 L 600 130" fill="none" stroke="#34d399" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="605" y="138" fill="#34d399" font-size="10" font-weight="700">Unit Aktivitas (Fluktuatif)</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Depresiasi dan Deplesi Sumber Daya Alam',
  ref: 'Kieso IFRS 5e Ch. 11 | PSAK 16',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 3: Menguasai esensi depresiasi sebagai alokasi kos, 4 metode kalkulasi (Garis Lurus, Unit Aktivitas, Saldo Menurun Ganda, Jumlah Angka Tahun), perhitungan depresiasi parsial, revisi estimasi prospektif (PSAK 25), dan akuntansi deplesi sumber daya alam.',
  objectives: [
    'Memahami hakikat depresiasi sebagai proses alokasi biaya sistematis dan rasional, bukan penilaian aset.',
    'Mengidentifikasi 3 faktor penentu: Dasar Depresiasi (Cost - Residual Value), Masa Manfaat Ekonomis, dan Pola Pemanfaatan.',
    'Menghitung dan membandingkan beban depresiasi tahunan menggunakan 4 metode utama.',
    'Menguasai perhitungan depresiasi periode parsial (bulan perolehan pertengahan tahun).',
    'Menerapkan perlakuan Prospektif atas revisi estimasi umur manfaat dan nilai residu (PSAK 25).',
    'Menghitung tarif deplesi sumber daya alam per unit ekstraksi dan menjurnal persediaan hasil tambang.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Perbandingan Kurva Pola Beban Depresiasi Antarmetode',
      svg: SVG_DEPRECIATION_CURVES,
      caption: 'Gambar 3.1: Pola beban konstan (Garis Lurus), dipercepat (DDB/SYD), dan berbasis penggunaan (Unit Aktivitas).'
    },

    { kind: 'h2', text: '1. Hakikat Konsep Depresiasi (PSAK 16)' },
    {
      kind: 'p',
      text: 'Depresiasi **BUKANLAH** proses penilaian pasar (*valuation*), melainkan proses **alokasi biaya perolehan aset secara sistematis dan rasional** ke periode-periode yang menikmati manfaat ekonomik dari aset tersebut. Nilai tercatat di neraca mencerminkan sisa biaya historis yang belum dialokasikan, bukan harga jual wajar aset di pasar saat ini.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Tiga Faktor Penentu Perhitungan Depresiasi',
      text: '1. **Dasar Depresiasi (Depreciable Base)**: Biaya Perolehan Historis dikurangi Estimasi Nilai Residu/Sisa (Cost - Residual Value).\n2. **Masa Manfaat (Estimated Useful Life)**: Jangka waktu aset diperkirakan dapat digunakan oleh entitas, atau jumlah produksi/unit yang diharapkan diperoleh dari aset.\n3. **Metode Alokasi Biaya**: Metode yang mencerminkan ekspektasi pola konsumsi manfaat ekonomik masa depan dari aset.'
    },

    { kind: 'h2', text: '2. Komparasi 4 Metode Depresiasi Utama' },
    {
      kind: 'table',
      headers: ['Metode', 'Rumus Beban Depresiasi', 'Karakteristik & Kesesuaian Penggunaan'],
      rows: [
        ['1. Garis Lurus (Straight-Line)', '(Cost - Residual Value) / Masa Manfaat', 'Beban seragam tiap tahun. Cocok untuk aset yang kemampuannya menurun secara fungsi waktu (misal: bangunan, furnitur).'],
        ['2. Unit Aktivitas (Units-of-Activity)', '[(Cost - Residual Value) / Total Estimasi Unit] × Unit Aktual', 'Beban berfluktuasi sesuai intensitas pemakaian aktual. Sangat cocok untuk mesin pabrik dan armada kendaraan angkut.'],
        ['3. Saldo Menurun Ganda (Double-Declining Balance - DDB)', 'Nilai Buku Awal Tahun × (2 / Masa Manfaat)', 'Metode dipercepat (accelerated). Beban tinggi di tahun-tahun awal. **PERHATIAN**: Nilai residu TIDAK dikurangkan di awal perhitungan tarif!'],
        ['4. Jumlah Angka Tahun (Sum-of-the-Years\'-Digits - SYD)', '(Cost - Residual Value) × (Sisa Umur / SYD)', 'Metode dipercepat dengan pecahan menurun bertahap. SYD dihitung dengan rumus n(n+1)/2.']
      ],
      caption: 'Tabel 3.1: Matriks perbandingan formula dan karakteristik 4 metode depresiasi.'
    },

    {
      kind: 'callout',
      variant: 'warning',
      title: 'Jebakan Ujian Terbesar: Nilai Residu pada Metode DDB',
      text: 'Pada metode Saldo Menurun Ganda (DDB), nilai residu **JANGAN PERNAH DIKURANGKAN** saat mengalikan tarif dengan Nilai Buku awal tahun. Namun, pada tahun-tahun akhir masa manfaat, beban depresiasi **HARUS DIBATASI (DI-PLAFON)** agar Nilai Buku akhir tidak pernah turun di bawah nilai residu!'
    },

    CASE_DEPRECIATION_METHODS,

    { kind: 'h2', text: '3. Perubahan Estimasi Akuntansi: Umur & Nilai Residu (PSAK 25)' },
    {
      kind: 'p',
      text: 'Seiring berjalannya waktu, entitas dapat memperbarui estimasi masa manfaat atau nilai residu aset. Berdasarkan PSAK 25, perubahan estimasi ini diperlakukan secara **PROSPEKTIF**:'
    },
    {
      kind: 'ul',
      items: [
        '**Tidak ada penyesuaian retrospektif** ke laporan keuangan tahun-tahun sebelumnya.',
        '**Tidak ada jurnal penyesuaian** ke akun Saldo Laba (Retained Earnings).',
        'Alokasikan sisa **Nilai Buku Tercatat Terkini (dikurangi nilai residu baru)** ke **sisa masa manfaat baru** mulai periode berjalan ke depan.'
      ]
    },

    { kind: 'h2', text: '4. Akuntansi Deplesi Sumber Daya Alam (Natural Resources)' },
    {
      kind: 'p',
      text: 'Sumber daya alam (minyak bumi, gas alam, batubara, tambang emas, dan kayu hutan) memiliki dua karakteristik utama: (1) habis secara fisik karena ekstraksi, dan (2) penggantian hanya terjadi melalui proses alamiah.'
    },
    {
      kind: 'table',
      headers: ['Elemen Biaya Tambang', 'Deskripsi Komponen', 'Perlakuan Akuntansi'],
      rows: [
        ['1. Biaya Akuisisi Lahan', 'Harga pembelian hak mengeksplorasi dan mengekstrak sumber daya alam di lahan.', 'Masuk Dasar Deplesi (dikurangi nilai sisa lahan setelah tambang ditutup).'],
        ['2. Biaya Eksplorasi', 'Biaya menemukan lokasi cadangan (geologis, seismik, pemboran uji).', 'Dikapitalisasi ke akun Aset Eksplorasi (jika terbukti ada cadangan komersial).'],
        ['3. Biaya Pengembangan', 'Peralatan berwujud (mesin bor, truk) didepresiasi terpisah; jalan/terowongan bawah tanah masuk deplesi.', 'Tangible asset didepresiasi; Intangible development cost dideplesi.'],
        ['4. Biaya Restorasi Lokasi', 'Estimasi Nilai Sekarang (PV) kewajiban reklamasi dan penutupan tambang (PSAK 57).', 'Dikapitalisasi mendebit Aset Tambang & kredit Provisi Restorasi.']
      ],
      caption: 'Tabel 3.2: 4 elemen pembentuk dasar deplesi sumber daya alam.'
    },

    CASE_DEPLETION_MINING,

    { kind: 'h2', text: '5. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**Depresiasi Parsial**: Selalu hitung pecahan bulan operasi aktual dari tanggal akuisisi sampai tutup buku.',
        '**DDB**: Kalikan tarif ganda dengan Nilai Buku awal, dan awasi batas bawah nilai residu di tahun akhir.',
        '**Revisi Estimasi**: Hitung prospektif = (Nilai Buku Terkini - Residu Baru) / Sisa Umur Baru.',
        '**Deplesi Ekstraksi**: Biaya deplesi dialokasikan ke **Persediaan Bahan Tambang**, dan baru menjadi Beban Pokok Penjualan saat hasil tambang tersebut **terjual**.'
      ]
    }
  ]
};