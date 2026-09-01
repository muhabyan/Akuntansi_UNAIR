import type { Reading } from '../../../types';
import {
  CASE_NON_MONETARY_EXCHANGE,
  CASE_INVOLUNTARY_CONVERSION,
} from '../akm2PracticeCases';

const SVG_EXCHANGE_DECISION = `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="220" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#a855f7" font-size="13" font-weight="700" text-anchor="middle">POHON KEPUTUSAN PERTUKARAN ASET NON-MONETER (PSAK 16)</text>
  
  <rect x="230" y="50" width="220" height="34" rx="6" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
  <text x="340" y="72" fill="#f3e8ff" font-size="11" font-weight="700" text-anchor="middle">Memiliki Substansi Komersial?</text>

  <line x1="280" y1="84" x2="160" y2="110" stroke="#a855f7" stroke-width="1.5"/>
  <rect x="50" y="110" width="220" height="105" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="160" y="130" fill="#10b981" font-size="11.5" font-weight="700" text-anchor="middle">YA (COMMERCIAL SUBSTANCE)</text>
  <text x="160" y="148" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akui SEMUA Keuntungan (Gain)</text>
  <text x="160" y="164" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akui SEMUA Kerugian (Loss)</text>
  <text x="160" y="184" fill="#38bdf8" font-size="9.5" text-anchor="middle">Aset Baru = Fair Value Aset Diserahkan</text>
  <text x="160" y="198" fill="#38bdf8" font-size="9.5" text-anchor="middle">(+/- Kas yang Diberikan/Diterima)</text>

  <line x1="400" y1="84" x2="520" y2="110" stroke="#a855f7" stroke-width="1.5"/>
  <rect x="410" y="110" width="220" height="105" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="520" y="130" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">TIDAK (LACKS SUBSTANCE)</text>
  <text x="520" y="148" fill="#f87171" font-size="10" text-anchor="middle">• Akui SEMUA Kerugian (Loss)</text>
  <text x="520" y="164" fill="#fbbf24" font-size="10" text-anchor="middle">• TANGGUHKAN Keuntungan (Gain)</text>
  <text x="520" y="184" fill="#94a3b8" font-size="9.5" text-anchor="middle">Aset Baru = Carrying Value Aset Lama</text>
  <text x="520" y="198" fill="#94a3b8" font-size="9.5" text-anchor="middle">(Gain mengurangi harga aset baru)</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Pertukaran Aset Non-Moneter, Hibah Pemerintah, dan Pelepasan Aset',
  ref: 'Kieso IFRS 5e Ch. 10 | PSAK 16, PSAK 61, ISAK 25',
  intro: 'TM 2 memperdalam transaksi khusus aset tetap: pertukaran aset non-moneter (kapan keuntungan boleh diakui vs ditangguhkan berbasis Commercial Substance), akuntansi hibah pemerintah (Government Grants - PSAK 61), serta pelepasan aset sukarela maupun terpaksa (Involuntary Conversion akibat bencana/asuransi).',
  objectives: [
    'Mengevaluasi keberadaan Substansi Komersial (Commercial Substance) dalam transaksi pertukaran aset non-moneter (PSAK 16).',
    'Menghitung dan menjurnal perolehan aset pertukaran dalam kondisi Untung (Gain) maupun Rugi (Loss).',
    'Menerapkan perlakuan akuntansi Hibah Pemerintah (PSAK 61) menggunakan Pendekatan Modal vs Pendekatan Penghasilan (Metode Bersih vs Metode Kotor).',
    'Menjurnal penghentian dan pelepasan aset tetap akibat penjualan, pembongkaran, maupun konversi terpaksa (asuransi).',
    'Membedakan biaya perbaikan normal (Revenue Expenditure) vs perbaikan besar/penambahan yang memperpanjang umur (Capital Expenditure).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pohon Keputusan Perlakuan Akuntansi Pertukaran Aset Non-Moneter',
      svg: SVG_EXCHANGE_DECISION,
      caption: 'Gambar 2.1: Logika pengakuan keuntungan dan dasar pengukuran aset baru pada pertukaran aset non-moneter.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 2'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Uji Substansi Komersial', 'Apakah arus kas masa depan (jumlah, waktu, risiko) berubah signifikan setelah pertukaran?', 'Menentukan apakah transaksi masuk skema Commercial Substance atau Lacks Substance.'],
        ['2', 'Kalkulasi Gain / Loss', 'Apakah Nilai Wajar aset lama lebih tinggi atau lebih rendah dari Nilai Buku (Carrying Value)?', 'Menghitung realisasi keuntungan atau kerugian pertukaran.'],
        ['3', 'Penentuan Nilai Aset Baru', 'Berapa nilai awal aset baru yang masuk ke neraca?', 'Menerapkan formula Fair Value Aset Lama (+/- Kas) atau Carrying Value Aset Lama.'],
        ['4', 'Hibah Pemerintah (PSAK 61)', 'Apakah hibah dicatat sebagai Penghasilan Tangguhan (Deferred Income) atau Pengurang Aset?', 'Membuat jurnal penerimaan hibah dan amortisasi/depresiasinya.'],
        ['5', 'Pelepasan & Involuntary Conversion', 'Bagaimana perlakuan klaim ganti rugi asuransi atas pabrik yang terbakar?', 'Menghapus aset lama + akumulasi depresiasi dan mengakui gain/loss pelepasan.']
      ],
      caption: 'Tabel 2.0: Alur berpikir sistematis pertukaran dan pelepasan aset tetap.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 2'
    },
    {
      kind: 'formula',
      text: 'Gain / (Loss) Pertukaran = Nilai Wajar Aset Lama Diserahkan - Nilai Buku (Carrying Value) Aset Lama',
      note: 'Jika selisih positif = Untung (Gain). Jika selisih negatif = Rugi (Loss). Rugi SELALU diakui penuh tanpa kecuali.'
    },
    {
      kind: 'formula',
      text: 'Nilai Aset Baru (Commercial Substance) = Nilai Wajar Aset Lama Diserahkan + Kas Dibayar (atau - Kas Diterima)',
      note: 'Jika nilai wajar aset baru lebih andal terbukti, maka nilai wajar aset baru yang menjadi dasar perolehan.'
    },
    {
      kind: 'formula',
      text: 'Nilai Aset Baru (Lacks Substance - Ada Gain) = Nilai Buku Aset Lama + Kas Dibayar - Gain yang Ditangguhkan',
      note: 'Penangguhan keuntungan secara otomatis menurunkan nilai perolehan aset baru sehingga beban depresiasi masa depan menjadi lebih kecil.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Pertukaran Truk Distribusi PT Indofood Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'PT Indofood menukar 5 unit truk lama (Harga perolehan Rp 600.000.000, Akumulasi Depresiasi Rp 420.000.000, Nilai Wajar Rp 230.000.000) dengan mesin sortir otomatis baru. PT Indofood membayar tambahan kas Rp 120.000.000. Transaksi ini memiliki Substansi Komersial karena profil arus kas berubah signifikan.'
        },
        {
          kind: `formula`,
          text: `Nilai Buku Truk Lama = 600.000.000 - 420.000.000 = Rp 180.000.000
Gain Pertukaran = Nilai Wajar (230.000.000) - Nilai Buku (180.000.000) = Rp 50.000.000 (Diakui di Laba Rugi)
Nilai Perolehan Mesin Sortir Baru = 230.000.000 + 120.000.000 = Rp 350.000.000`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Transaksi oleh PT Indofood`,
          text: `Debit: Mesin Sortir Baru Rp 350.000.000
Debit: Akumulasi Depresiasi - Truk Rp 420.000.000
Kredit: Truk (Aset Lama) Rp 600.000.000
Kredit: Kas Rp 120.000.000
Kredit: Keuntungan Pelepasan Aset (Laba Rugi) Rp 50.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Pertukaran Tanpa Substansi Komersial (Lacks Substance)',
      prompt: 'Jika dalam kasus PT Indofood di atas transaksi dianggap TIDAK memiliki substansi komersial (misal tukar tambah truk sejenis yang fungsinya sama persis), hitunglah nilai perolehan mesin baru dan buat jurnalnya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Realisasi Gain**: Gain sebesar Rp 50.000.000 **DITANGGUHKAN** (tidak diakui di Laba Rugi).',
            `**Nilai Mesin Baru**: Nilai Buku Truk Lama (Rp 180 jt) + Kas Dibayar (Rp 120 jt) = **Rp 300.000.000** (atau Rp 350 jt - Gain Rp 50 jt = Rp 300 jt).`,
            `**Jurnal Akuntansi**:
Debit: Mesin Baru Rp 300.000.000
Debit: Akumulasi Depresiasi - Truk Rp 420.000.000
Kredit: Truk (Harga Perolehan) Rp 600.000.000
Kredit: Kas Rp 120.000.000`
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan Ujian',
          text: 'Jika pertukaran menghasilkan RUGI (Loss), maka rugi WAJIB diakui penuh SEKETIKA di Laba Rugi, baik transaksi memiliki substansi komersial maupun TIDAK memiliki substansi komersial!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Substansi Komersial (PSAK 16)', 'Kriteria perubahan konfigurasi arus kas masa depan entitas.', 'Mampu mengidentifikasi status transaksi pertukaran aset.'],
        ['2', 'Pertukaran Menghasilkan Rugi', 'Pengakuan seketika rugi penurunan nilai pada seluruh kondisi pertukaran.', 'Menghitung rugi dan menjurnal aset baru dengan benar.'],
        ['3', 'Pertukaran Menghasilkan Untung', 'Diferensiasi perlakuan akui untung (has substance) vs tunda untung (lacks substance).', 'Menghitung basis nilai tercatat aset baru yang disesuaikan gain tangguhan.'],
        ['4', 'Hibah Pemerintah (PSAK 61)', 'Metode Deferred Income vs Metode Pengurang Nilai Aset Awal.', 'Menjurnal penerimaan hibah tanah/mesin dan alokasi ke laba rugi tahunan.'],
        ['5', 'Konversi Terpaksa (Involuntary)', 'Pelepasan aset akibat kebakaran/bencana dan pengakuan klaim asuransi.', 'Menghapus aset lama dan mencatat piutang/kas klaim asuransi serta laba rugi konversi.'],
        ['6', 'Pengeluaran Setelah Perolehan', 'Kriteria kapitalisasi (major overhaul/penambahan) vs beban (pemeliharaan rutin).', 'Mengklasifikasikan transaksi perbaikan mesin/gedung ke laba rugi vs neraca.']
      ],
      caption: 'Tabel 2.1: Matriks kompetensi komprehensif materi TM 2 AKM II.'
    },
    { kind: 'h2', text: '1. Pertukaran Aset Non-Moneter (Non-Monetary Asset Exchange)' },
    {
      kind: 'p',
      text: '==Pertukaran aset non-moneter pada umumnya diukur berdasarkan Nilai Wajar (Fair Value) dari aset yang diserahkan, kecuali jika transaksi tidak memiliki substansi komersial atau nilai wajar kedua aset tidak dapat diukur secara andal.=='
    },
    CASE_NON_MONETARY_EXCHANGE,
    { kind: 'h2', text: '2. Akuntansi Hibah Pemerintah (Government Grants - PSAK 61)' },
    {
      kind: 'p',
      text: 'Hibah pemerintah adalah bantuan dari pemerintah dalam bentuk transfer sumber daya kepada entitas sebagai imbalan atas kepatuhan di masa lalu atau masa depan dengan kondisi tertentu.'
    },
    {
      kind: 'table',
      headers: ['Metode Penyajian', 'Pencatatan Saat Perolehan', 'Dampak ke Laba Rugi Tahunan'],
      rows: [
        ['1. Pendekatan Pendapatan Tangguhan (Deferred Income)', 'Mendebit Aset sebesar Nilai Wajar, Mengkredit Pendapatan Hibah Tangguhan (Liabilitas).', 'Aset didepresiasi normal, Pendapatan Hibah diamortisasi ke Laba Rugi proporsional dengan depresiasi.'],
        ['2. Pendekatan Pengurang Aset (Net Method)', 'Mendebit Aset sebesar Nilai Wajar dikurangi Nilai Hibah (Kos Neto).', 'Beban depresiasi tahunan menjadi lebih kecil karena dasar nilai tercatat aset sudah berkurang sejak awal.']
      ],
      caption: 'Tabel 2.2: Dua metode penyajian hibah pemerintah terkait aset sesuai PSAK 61.'
    },
    { kind: 'h2', text: '3. Pelepasan Aset & Konversi Terpaksa (Involuntary Conversion)' },
    {
      kind: 'p',
      text: 'Ketika aset tetap dilepaskan secara terpaksa (misal akibat kebakaran, banjir, atau pembebasan lahan oleh negara untuk jalan tol), entitas mengakui selisih antara **Klaim Ganti Rugi Kas/Asuransi yang Diterima** dengan **Nilai Buku Aset yang Terkena Bencana** sebagai **Keuntungan/Kerugian Pelepasan Aset** di Laba Rugi.'
    },
    CASE_INVOLUNTARY_CONVERSION,
    { kind: 'h2', text: '4. Pengeluaran Setelah Perolehan (Subsequent Expenditures)' },
    {
      kind: 'table',
      headers: ['Jenis Pengeluaran', 'Karakteristik Transaksi', 'Perlakuan Akuntansi'],
      rows: [
        ['Penambahan (Additions)', 'Menambah unit fisik baru (misal menambah sayap gedung baru).', 'DIKAPITALISASI ke nilai Aset Gedung.'],
        ['Penyempurnaan & Penggantian (Betterments & Replacements)', 'Mengganti komponen lama dengan komponen baru yang meningkatkan kapasitas/efisiensi.', 'DIKAPITALISASI (Nilai buku komponen lama yang diganti dihapusbukukan).'],
        ['Penataan Ulang Fasilitas (Rearrangement & Reinstallation)', 'Mengatur ulang letak mesin di pabrik untuk alur produksi lebih lancar.', 'DIKAPITALISASI jika memberi manfaat masa depan terbukti, jika tidak dibebankan.'],
        ['Perbaikan Rutin & Pemeliharaan (Repairs & Maintenance)', 'Penggantian oli, pengecatan berkala, perbaikan kecil agar aset tetap berfungsi normal.', 'DIBEBANKAN LANGSUNG (Revenue Expenditure) ke Beban Pemeliharaan Laba Rugi.']
      ],
      caption: 'Tabel 2.3: Klasifikasi pengeluaran setelah perolehan aset tetap.'
    },
    { kind: 'h2', text: '5. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Rugi Pertukaran**: Selalu diakui penuh, tanpa memandang apakah ada substansi komersial atau tidak.',
        '**Untung Pertukaran Tanpa Substansi**: Tidak boleh diakui di laba rugi, melainkan mengurangi nilai perolehan aset baru.',
        '**Hibah Pemerintah**: Wajib diakui secara sistematis ke laba rugi sepanjang periode masa manfaat aset terkait.',
        '**Involuntary Conversion**: Hasil ganti rugi asuransi yang melampaui nilai buku diakui sebagai keuntungan di laba rugi periode berjalan.',
        `**Perbaikan Rutin**: Masuk beban operasional (expense), dilarang dikapitalisasi ke aset tetap.`
      ]
    }
  ]
};
