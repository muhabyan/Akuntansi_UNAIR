import type { ContentBlock, Reading } from '../../../types';
import {
  CASE_DECOMMISSIONING_RESTORE,
  CASE_LUMP_SUM_PPE
} from '../akm2PracticeCases';

const SVG_PPE_CLASSIFICATION = `
<svg class="course-diagram-svg" viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <rect class="svg-bg" x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="660" height="38" rx="12" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="48" x2="670" y2="48" stroke="#334155"/>
  <text class="svg-title" x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KLASIFIKASI PROPERTI BERDASARKAN TUJUAN PENGGUNAAN</text>
  <rect class="svg-card" x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="79" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">ASET TETAP (PSAK 216)</text>
  <text x="125" y="104" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Dipakai dalam operasi</text>
  <text x="125" y="121" fill="#cbd5e1" font-size="10.5" text-anchor="middle">atau administrasi</text>
  <line x1="45" y1="138" x2="205" y2="138" stroke="#334155"/>
  <text x="125" y="159" fill="#94a3b8" font-size="10" text-anchor="middle">Cost model atau</text>
  <text x="125" y="176" fill="#94a3b8" font-size="10" text-anchor="middle">revaluation model</text>
  <rect class="svg-card" x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="79" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">PROPERTI INVESTASI</text>
  <text x="340" y="96" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">PSAK 240</text>
  <text x="340" y="121" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Sewa / kenaikan nilai</text>
  <line x1="260" y1="138" x2="420" y2="138" stroke="#334155"/>
  <text x="340" y="159" fill="#94a3b8" font-size="10" text-anchor="middle">Fair value: perubahan</text>
  <text x="340" y="176" fill="#94a3b8" font-size="10" text-anchor="middle">langsung ke laba rugi</text>
  <rect class="svg-card" x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="79" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">PERSEDIAAN</text>
  <text x="555" y="96" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">PROPERTI</text>
  <text x="555" y="121" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Dijual dalam kegiatan biasa</text>
  <line x1="475" y1="138" x2="635" y2="138" stroke="#334155"/>
  <text x="555" y="159" fill="#94a3b8" font-size="10" text-anchor="middle">Contoh: kavling milik</text>
  <text x="555" y="176" fill="#94a3b8" font-size="10" text-anchor="middle">pengembang real estat</text>
</svg>`;

const EQUIPMENT_ACQUISITION_EXAMPLE: ContentBlock = {
  kind: 'example',
  title: 'Contoh: Biaya Perolehan Mesin PT Semen Gresik',
  blocks: [
    {
      kind: 'p',
      text: 'Mesin berharga faktur Rp800.000.000 dengan diskon tunai 2% yang dimanfaatkan. Bea masuk Rp45.000.000, angkut Rp25.000.000, pondasi khusus Rp35.000.000, dan pengujian Rp15.000.000. Pelatihan operator Rp12.000.000 serta peresmian Rp8.000.000 tidak membawa mesin ke kondisi siap digunakan.'
    },
    {
      kind: 'formula',
      text: '\\text{Harga beli bersih}=Rp800.000.000-Rp16.000.000=Rp784.000.000\\\\\\text{Biaya atribusi langsung}=Rp45.000.000+Rp25.000.000+Rp35.000.000+Rp15.000.000=Rp120.000.000\\\\\\text{Biaya perolehan mesin}=Rp904.000.000',
      note: 'Hasil penjualan output pengujian tidak digunakan dalam perhitungan ini karena perlakuan tersebut tidak terverifikasi dalam lapisan sumber kanonis TM1.'
    },
    {
      kind: 'journal',
      caption: 'Pencatatan perolehan dan biaya periode',
      lines: [
        { account: 'Mesin', debit: 'Rp904.000.000' },
        { account: 'Beban Pelatihan', debit: 'Rp12.000.000' },
        { account: 'Beban Peresmian', debit: 'Rp8.000.000' },
        { account: 'Kas / Utang Usaha', credit: 'Rp924.000.000', isCredit: true }
      ]
    }
  ]
};

const NON_MONETARY_EXCHANGE_CASES: ContentBlock = {
  kind: 'example',
  title: 'Pertukaran Aset Non-Moneter: Putuskan Substansi Komersial Lebih Dulu',
  blocks: [
    {
      kind: 'table',
      headers: ['Keputusan', 'Dasar aset baru', 'Gain / loss pada tanggal pertukaran'],
      rows: [
        ['Memiliki substansi komersial', 'Nilai wajar aset yang diserahkan ± kas; gunakan nilai wajar aset diterima bila lebih jelas', 'Diakui segera di laba rugi'],
        ['Tidak memiliki substansi komersial', 'Nilai buku aset yang diserahkan + kas dibayar − kas diterima', 'Tidak ada gain atau loss yang diakui']
      ],
      caption: 'PSAK 216 / IAS 16.24–26; Lecturer PPT slide 54–66; Kieso IFRS 5e Ch. 9.'
    },
    {
      kind: 'solution-reveal',
      title: 'Information Processing SA — substansi komersial, rugi',
      prompt: 'Aset lama: cost €12.000, akumulasi depresiasi €4.000, nilai buku €8.000, nilai wajar €6.000. Kas dibayar €7.000. Hitung aset baru dan rugi.',
      blocks: [
        { kind: 'formula', text: '\\text{Aset baru}=€6.000+€7.000=€13.000\\\\\\text{Rugi}=€8.000-€6.000=€2.000' },
        {
          kind: 'journal',
          caption: 'Pertukaran dengan substansi komersial',
          lines: [
            { account: 'Equipment — New', debit: '€13.000' },
            { account: 'Accumulated Depreciation — Old', debit: '€4.000' },
            { account: 'Loss on Disposal', debit: '€2.000' },
            { account: 'Equipment — Old', credit: '€12.000', isCredit: true },
            { account: 'Cash', credit: '€7.000', isCredit: true }
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Interstate Transportation — substansi komersial, laba',
      prompt: 'Truk lama: cost \\$64.000, akumulasi depresiasi \\$22.000, nilai buku \\$42.000, nilai wajar \\$49.000. Kas dibayar \\$11.000.',
      blocks: [
        { kind: 'formula', text: '\\text{Truk baru}=\\text{USD }49.000+\\text{USD }11.000=\\text{USD }60.000\\\\\\text{Gain}=\\text{USD }49.000-\\text{USD }42.000=\\text{USD }7.000' },
        {
          kind: 'journal',
          caption: 'Pertukaran dengan substansi komersial',
          lines: [
            { account: 'Semi-Truck — New', debit: '$60.000' },
            { account: 'Accumulated Depreciation — Old', debit: '$22.000' },
            { account: 'Truck — Old', credit: '$64.000', isCredit: true },
            { account: 'Gain on Disposal', credit: '$7.000', isCredit: true },
            { account: 'Cash', credit: '$11.000', isCredit: true }
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Interstate Transportation — tanpa substansi komersial, kas dibayar',
      prompt: 'Gunakan data Interstate yang sama, tetapi transaksi tidak memiliki substansi komersial.',
      blocks: [
        { kind: 'formula', text: '\\text{Truk baru}=\\text{USD }42.000+\\text{USD }11.000=\\text{USD }53.000', note: 'Gain belum terealisasi USD 7.000 tidak diakui pada tanggal pertukaran.' },
        {
          kind: 'journal',
          caption: 'Basis nilai buku; tanpa akun gain atau loss',
          lines: [
            { account: 'Semi-Truck — New', debit: '$53.000' },
            { account: 'Accumulated Depreciation — Old', debit: '$22.000' },
            { account: 'Truck — Old', credit: '$64.000', isCredit: true },
            { account: 'Cash', credit: '$11.000', isCredit: true }
          ]
        }
      ]
    },
    {
      kind: 'journal',
      caption: 'Tanpa substansi komersial dan tanpa kas: pertukaran langsung pada nilai buku $42.000',
      lines: [
        { account: 'Semi-Truck — New', debit: '$42.000' },
        { account: 'Accumulated Depreciation — Old', debit: '$22.000' },
        { account: 'Truck — Old', credit: '$64.000', isCredit: true }
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Batas sumber untuk kas diterima',
      text: 'Mekanik contoh kas diterima pada pertukaran tanpa substansi komersial sengaja tidak diberikan. Sumber mata kuliah menetapkan basis umum, tetapi tidak menyediakan mekanik jurnal parsial yang cukup untuk contoh kerja kanonis.'
    }
  ]
};

const SHALLA_BORROWING_COST_CASE: ContentBlock = {
  kind: 'example',
  title: 'Shalla Company — Kapitalisasi Biaya Pinjaman 2025',
  blocks: [
    {
      kind: 'table',
      headers: ['Sumber pendanaan', 'Pokok', 'Suku bunga', 'Bunga aktual'],
      rows: [
        ['Utang konstruksi spesifik', '$750,000', '15%', '$112,500'],
        ['Wesel umum 5 tahun', '$500,000', '10%', '$50,000'],
        ['Obligasi umum 10 tahun', '$1,500,000', '12%', '$180,000'],
        ['Total', '$2,750,000', '—', '$342,500']
      ],
      caption: 'Dana spesifik yang menganggur menghasilkan pendapatan investasi $40,000.'
    },
    {
      kind: 'table',
      headers: ['Tanggal', 'Pengeluaran', 'Ke utang spesifik', 'Ke utang umum', 'Bobot', 'WAAE umum'],
      rows: [
        ['1 Jan', '$210,000', '$210,000', '$0', '—', '$0'],
        ['1 Mar', '$300,000', '$300,000', '$0', '—', '$0'],
        ['1 Mei', '$540,000', '$240,000', '$300,000', '8/12', '$200,000'],
        ['31 Des', '$450,000', '$0', '$450,000', '0/12', '$0'],
        ['Total', '$1,500,000', '$750,000', '$750,000', '—', '$200,000']
      ],
      caption: 'General WAAE hanya berasal dari pengeluaran yang melebihi kapasitas utang spesifik selama periode kapitalisasi.'
    },
    {
      kind: 'formula',
      text: '\\text{Kapitalisasi rate umum}=\\frac{\\text{USD }50{,}000+\\text{USD }180{,}000}{\\text{USD }500{,}000+\\text{USD }1{,}500{,}000}=11.5\\%'
    },
    {
      kind: 'formula',
      text: '\\text{Net borrowing cost capitalized}=(\\text{USD }750{,}000\\times15\\%)-\\text{USD }40{,}000+(\\text{USD }200{,}000\\times11.5\\%)=\\text{USD }95{,}500',
      note: 'Gross specific interest \\$112,500; general borrowing capitalization \\$23,000.'
    },
    {
      kind: 'journal',
      caption: 'Mencatat bunga aktual dan bagian yang dikapitalisasi',
      lines: [
        { account: 'Building / Construction in Progress', debit: '$135,500' },
        { account: 'Interest Expense', debit: '$207,000' },
        { account: 'Cash / Interest Payable', credit: '$342,500', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: 'Mengakui pendapatan investasi sebagai pengurang biaya aset',
      lines: [
        { account: 'Cash', debit: '$40,000' },
        { account: 'Building / Construction in Progress', credit: '$40,000', isCredit: true }
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Hasil akhir yang dipakai',
      text: '**General WAAE \\$200,000**, **capitalization rate 11.5%**, dan **biaya pinjaman neto yang dikapitalisasi \\$95,500**. Sumber: Lecturer PPT slide 33–37 dan Kieso IFRS 5e Illustration 9.4–9.5.'
    }
  ]
};

const COMPONENT_DEPRECIATION_CASE: ContentBlock = {
  kind: 'example',
  title: 'Pesawat Komersial €100 Juta — Depresiasi Komponen',
  blocks: [
    {
      kind: 'table',
      headers: ['Komponen', 'Biaya', 'Umur manfaat', 'Depresiasi tahunan'],
      rows: [
        ['Airframe', '€60.000.000', '20 tahun', '€3.000.000'],
        ['Engines', '€30.000.000', '10 tahun', '€3.000.000'],
        ['Interior / avionics', '€10.000.000', '5 tahun', '€2.000.000'],
        ['Total', '€100.000.000', '—', '€8.000.000']
      ],
      caption: 'IAS 16.43 / PSAK 216; Kieso IFRS 5e Ch. 9 p. 9-22.'
    },
    { kind: 'formula', text: '€60.000.000/20+€30.000.000/10+€10.000.000/5=€8.000.000' },
    {
      kind: 'journal',
      caption: 'Jurnal agregat depresiasi tahun pertama',
      lines: [
        { account: 'Depreciation Expense', debit: '€8.000.000' },
        { account: 'Accumulated Depreciation — Airframe', credit: '€3.000.000', isCredit: true },
        { account: 'Accumulated Depreciation — Engines', credit: '€3.000.000', isCredit: true },
        { account: 'Accumulated Depreciation — Interior', credit: '€2.000.000', isCredit: true }
      ]
    },
    { kind: 'callout', variant: 'info', title: 'Dampak laporan keuangan', text: 'Pesawat disajikan pada biaya €100.000.000 dikurangi akumulasi depresiasi €8.000.000 = nilai buku neto €92.000.000. Rincian komponen disajikan dalam catatan.' }
  ]
};

const REVALUATION_CASE: ContentBlock = {
  kind: 'example',
  title: 'Revaluasi Peralatan — Metode Eliminasi',
  blocks: [
    {
      kind: 'p',
      text: 'Peralatan dibeli €1.000.000, umur lima tahun, garis lurus. Setelah depresiasi tahun pertama €200.000, nilai buku €800.000 dan nilai wajar €850.000. Kenaikan €50.000 diakui di OCI.'
    },
    {
      kind: 'journal',
      caption: '1. Eliminasi akumulasi depresiasi',
      lines: [
        { account: 'Accumulated Depreciation — Equipment', debit: '€200.000' },
        { account: 'Equipment', credit: '€200.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '2. Sesuaikan nilai buku €800.000 ke nilai wajar €850.000',
      lines: [
        { account: 'Equipment', debit: '€50.000' },
        { account: 'Unrealized Gain on Revaluation — OCI', credit: '€50.000', isCredit: true }
      ]
    },
    { kind: 'formula', text: '\\text{Depresiasi tahun berikutnya}=€850.000/4=€212.500\\\\\\text{Transfer tahunan}=€212.500-€200.000=€12.500' },
    {
      kind: 'journal',
      caption: '3. Depresiasi tahun berikutnya',
      lines: [
        { account: 'Depreciation Expense', debit: '€212.500' },
        { account: 'Accumulated Depreciation — Equipment', credit: '€212.500', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '4. Transfer selisih depresiasi langsung dalam ekuitas',
      lines: [
        { account: 'Accumulated OCI — Revaluation Surplus', debit: '€12.500' },
        { account: 'Retained Earnings', credit: '€12.500', isCredit: true }
      ]
    },
    { kind: 'callout', variant: 'warning', title: 'Jangan lewat laba rugi', text: 'Transfer €12.500 dari AOCI ke saldo laba dilakukan langsung dalam ekuitas. Transfer ini tidak membalik beban depresiasi dan tidak masuk laba rugi.' }
  ]
};

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Akuntansi Aset Tetap, Properti Investasi, dan Tanah',
  ref: 'Lecturer PPT IA IFRS Ch. 9 | Kieso IFRS 5e Ch. 9–10 | PSAK 216, 220, 223, 240; ISAK 336',
  intro: 'TM1 membangun satu alur keputusan: klasifikasikan aset, tentukan biaya perolehan, catat transaksi khusus, lalu pilih pengukuran setelah pengakuan dan penyajiannya. Urutan ini dirancang untuk latihan ujian tanpa memutus hubungan antara konsep, perhitungan, jurnal, dan dampak laporan keuangan.',
  objectives: [
    'Mengklasifikasikan properti sebagai aset tetap, properti investasi, tanah, atau persediaan berdasarkan tujuan penggunaan.',
    'Menentukan biaya perolehan awal dan membedakan pengeluaran yang dikapitalisasi dari beban periode.',
    'Mencatat perolehan khusus, biaya pinjaman, pengeluaran setelah perolehan, depresiasi komponen, dan revaluasi.',
    'Menerapkan perlakuan properti investasi, hak atas tanah Indonesia, pelepasan, serta penyajian dan pengungkapan.',
    'Menggunakan formula, pola jurnal, perangkap ujian, dan perbandingan kerangka untuk review cepat.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'figure',
      title: 'Peta Keputusan Properti dan Aset Berwujud',
      svg: SVG_PPE_CLASSIFICATION,
      caption: 'Mulai dari tujuan penggunaan aset; standar pengukuran mengikuti klasifikasinya.'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['Klasifikasi', 'Aset dipakai, disewakan, ditahan untuk apresiasi, atau dijual?', 'PPE / properti investasi / persediaan'],
        ['Pengakuan awal', 'Biaya mana yang membawa aset ke lokasi dan kondisi siap digunakan?', 'Biaya perolehan dan beban periode'],
        ['Perolehan khusus', 'Apa basis ukur dan kapan gain/loss diakui?', 'Perhitungan dan jurnal yang tepat'],
        ['Setelah pengakuan', 'Cost model, revaluation model, atau fair value model?', 'Nilai buku dan dampak laba rugi/OCI'],
        ['Pelaporan', 'Apa yang disajikan di laporan dan diungkapkan di catatan?', 'Penyajian neto dan rekonsiliasi kelas aset']
      ],
      caption: 'Quick map TM1: klasifikasi → pengakuan → pengukuran → pelaporan.'
    },
    { kind: 'callout', variant: 'tip', title: 'Cara menggunakan materi', text: 'Pada soal hitungan, tulis lebih dulu: **klasifikasi aset → dasar pengukuran → perhitungan → jurnal → dampak laporan keuangan**. Langkah ini mencegah rumus yang benar dipakai pada konteks yang salah.' },

    { kind: 'h2', text: '2. Classification: PPE, Investment Property, Land, Inventory' },
    {
      kind: 'table',
      headers: ['Klasifikasi', 'Tujuan utama', 'Contoh', 'Rujukan'],
      rows: [
        ['PPE / Aset Tetap', 'Produksi, penyediaan jasa, disewakan sebagai bagian operasi, atau administrasi; digunakan lebih dari satu periode', 'Pabrik, mesin, kantor yang dipakai sendiri', 'PSAK 216 / IAS 16'],
        ['Properti Investasi', 'Menghasilkan sewa atau kenaikan nilai', 'Gedung yang disewakan; tanah untuk apresiasi', 'PSAK 240 / IAS 40'],
        ['Tanah sebagai PPE', 'Lokasi operasi atau pabrik', 'Lahan pabrik', 'PSAK 216'],
        ['Persediaan', 'Dijual dalam kegiatan usaha biasa', 'Kavling milik pengembang real estat', 'Standar persediaan yang berlaku']
      ]
    },
    { kind: 'callout', variant: 'key', title: 'Properti mixed-use', text: 'Pisahkan bagian yang dapat dijual atau disewakan secara terpisah. Jika nilai wajar tidak dapat diukur tanpa biaya atau upaya berlebihan, sumber SAK Entitas Privat mengarahkan seluruh properti ke Aset Tetap Bab 17 / PSAK 216.' },
    { kind: 'callout', variant: 'info', title: 'Batas ruang lingkup', text: 'TM1 berfokus pada PPE, properti investasi, tanah, dan persediaan properti. Aset biologis, hak mineral, serta aset eksplorasi/evaluasi mengikuti standar khusus dan tidak diperlakukan sebagai PPE hanya karena berwujud.' },

    { kind: 'h2', text: '3. Recognition & Initial Measurement' },
    { kind: 'p', text: 'Biaya suatu aset tetap diakui jika manfaat ekonomik masa depan **probable** mengalir ke entitas dan biaya dapat **diukur secara andal**. Pada pengakuan awal, aset diukur sebesar biaya perolehan.' },
    {
      kind: 'table',
      headers: ['Elemen', 'Perlakuan', 'Contoh'],
      rows: [
        ['Harga beli neto', 'Kapitalisasi', 'Harga faktur setelah diskon/rabat, bea impor, pajak tidak dapat dikreditkan'],
        ['Biaya atribusi langsung', 'Kapitalisasi', 'Persiapan lokasi, angkut, instalasi, trial run, jasa profesional'],
        ['Estimasi awal pembongkaran/restorasi', 'Kapitalisasi pada nilai kini dan akui provisi', 'Kewajiban restorasi lokasi'],
        ['Biaya setelah siap digunakan', 'Beban', 'Pelatihan, pembukaan fasilitas, iklan, administrasi umum, pemeliharaan rutin']
      ],
      caption: 'PSAK 216.7 / IAS 16.7 dan PSAK 237 untuk provisi terkait.'
    },
    { kind: 'formula', text: '\\text{Biaya perolehan}=\\text{harga beli neto}+\\text{biaya atribusi langsung}+\\text{PV restorasi}' },
    CASE_DECOMMISSIONING_RESTORE,

    { kind: 'h2', text: '4. Land, Land Improvements, Buildings, Equipment' },
    {
      kind: 'table',
      headers: ['Kelompok', 'Biaya yang masuk', 'Catatan'],
      rows: [
        ['Land', 'Harga tunai, closing costs, legal/recording fees, clearing, grading, filling, kewajiban/pajak tertunggak yang diambil alih, special assessments', 'Tanah umumnya tidak disusutkan'],
        ['Land Improvements', 'Pagar, jalan masuk, area parkir, penerangan', 'Catat terpisah dan susutkan karena umur terbatas'],
        ['Buildings', 'Material, tenaga kerja, overhead konstruksi, izin, jasa arsitek, penggalian fondasi', 'Termasuk biaya langsung konstruksi'],
        ['Equipment', 'Harga beli, angkut, asuransi transit, perakitan, instalasi, dudukan khusus, trial runs', 'Pelatihan operator adalah beban'],
        ['Self-constructed assets', 'Biaya langsung dan overhead dengan full-costing', 'Laba internal tidak dikapitalisasi; abnormal waste dan learning-curve inefficiency dibebankan']
      ]
    },
    { kind: 'callout', variant: 'warning', title: 'Dua hasil berbeda untuk pembongkaran', text: 'Gedung lama yang ada pada tanah yang baru dibeli dan memang akan dibongkar: biaya pembongkaran neto menambah **Land**. Gedung lama milik sendiri yang kemudian dibongkar: nilai buku dan biaya terkait diperlakukan sebagai **loss on disposal**.' },
    CASE_LUMP_SUM_PPE,
    EQUIPMENT_ACQUISITION_EXAMPLE,

    { kind: 'h2', text: '5. Special Acquisition' },
    {
      kind: 'table',
      headers: ['Bentuk perolehan', 'Dasar pengukuran', 'Perangkap utama'],
      rows: [
        ['Cash discount', 'Harga setelah diskon kas yang tersedia', 'Diskon yang hilang karena terlambat bayar adalah beban bunga/discount lost, bukan aset'],
        ['Deferred payment', 'Present value pembayaran masa depan pada suku bunga pasar', 'Selisih nominal dan PV diamortisasi sebagai beban bunga efektif'],
        ['Lump-sum', 'Alokasi harga total berdasarkan nilai wajar relatif', 'Jangan memakai nilai buku penjual'],
        ['Share issuance', 'Harga pasar saham yang diterbitkan; bila tidak tersedia, nilai wajar aset yang diterima', 'Par value bukan dasar pengukuran'],
        ['Non-monetary exchange', 'Nilai wajar atau nilai buku sesuai substansi komersial', 'Tentukan substansi komersial sebelum menghitung'],
        ['Government grant / donated assets', 'Income approach dan nilai wajar sesuai kerangka', 'Periksa perbedaan Full SAK dan SAK Entitas Privat']
      ]
    },
    { kind: 'formula', text: '\\text{Alokasi lump-sum}=\\frac{\\text{FV aset individual}}{\\text{total FV seluruh aset}}\\times\\text{harga beli total}' },
    NON_MONETARY_EXCHANGE_CASES,
    { kind: 'h3', text: 'Government Grants / Donated Assets' },
    { kind: 'p', text: 'Full SAK melalui PSAK 220 / IAS 20 memakai income approach. Hibah terkait aset dapat disajikan sebagai pendapatan hibah tangguhan atau sebagai pengurang nilai aset. SAK Entitas Privat Bab 24 mengaitkan pengakuan dengan kondisi kinerja dan tidak memperkenankan reduction-of-asset method.' },
    {
      kind: 'example',
      title: 'Interest-Free Loan Grant',
      blocks: [
        { kind: 'p', text: 'Pinjaman pemerintah USD 10.000.000, 10 tahun, bunga 0%, dengan suku bunga pasar 9%. Nilai kini USD 6.499.300; manfaat hibah USD 3.500.700. Amortisasi tahunan yang diverifikasi: USD 584.937.' },
        {
          kind: 'journal',
          caption: 'Pengakuan awal pinjaman dan hibah',
          lines: [
            { account: 'Cash', debit: '$10.000.000' },
            { account: 'Loan Payable', credit: '$6.499.300', isCredit: true },
            { account: 'Deferred Grant Revenue', credit: '$3.500.700', isCredit: true }
          ]
        },
        {
          kind: 'journal',
          caption: 'Pengakuan tahunan: dampak neto laba rugi $0',
          lines: [
            { account: 'Interest Expense', debit: '$584.937' },
            { account: 'Deferred Grant Revenue', debit: '$584.937' },
            { account: 'Loan Payable', credit: '$584.937', isCredit: true },
            { account: 'Grant Revenue', credit: '$584.937', isCredit: true }
          ]
        }
      ]
    },
    { kind: 'callout', variant: 'info', title: 'Donated assets', text: 'Aset yang diterima sebagai sumbangan diukur pada nilai wajar dengan kredit Grant Revenue. Jika entitas memberikan aset, akui Contribution Expense sebesar nilai wajar dan selisih antara nilai wajar serta nilai buku sebagai gain/loss disposal.' },

    { kind: 'h2', text: '6. Borrowing Costs' },
    { kind: 'p', text: 'Menurut PSAK 223 / IAS 23, biaya pinjaman yang dapat diatribusikan langsung pada aset kualifikasian dikapitalisasi selama pengeluaran, aktivitas penyiapan aset, dan biaya pinjaman terjadi. Kapitalisasi ditangguhkan saat penghentian aktivitas yang berkepanjangan dan berakhir ketika aset secara substansial siap digunakan.' },
    {
      kind: 'table',
      headers: ['Kerangka', 'Perlakuan biaya pinjaman'],
      rows: [
        ['Full SAK / PSAK 223', 'Wajib dikapitalisasi untuk aset kualifikasian; jumlah tidak melebihi bunga aktual'],
        ['SAK Entitas Privat Bab 25.2', 'Seluruh biaya pinjaman dibebankan saat terjadi; kapitalisasi tidak diperkenankan'],
        ['SAK ETAP lama', 'Dibebankan saat terjadi']
      ]
    },
    { kind: 'formula', text: '\\text{Kapitalisasi}=\\min(\\text{avoidable interest},\\text{actual interest})' },
    SHALLA_BORROWING_COST_CASE,

    { kind: 'h2', text: '7. Subsequent Expenditure' },
    { kind: 'p', text: 'Setelah perolehan, kapitalisasi hanya jika biaya dapat diukur andal dan probable meningkatkan manfaat ekonomik masa depan—misalnya umur, kapasitas, atau kualitas. Selain itu, pengeluaran menjadi beban periode.' },
    {
      kind: 'table',
      headers: ['Pengeluaran', 'Perlakuan', 'Mekanik'],
      rows: [
        ['Addition', 'Kapitalisasi', 'Tambahkan ke aset terkait'],
        ['Improvement / replacement', 'Kapitalisasi komponen baru', 'Substitution approach: hapus cost dan akumulasi depresiasi komponen lama; akui gain/loss bila ada'],
        ['Rearrangement / reorganization', 'Beban segera', 'Tidak dikapitalisasi di bawah IFRS/PSAK'],
        ['Ordinary repair', 'Beban periode', 'Mempertahankan kondisi normal'],
        ['Major overhaul', 'Kapitalisasi jika kriteria pengakuan terpenuhi', 'Derecognize inspeksi/komponen lama jika teridentifikasi']
      ]
    },
    { kind: 'callout', variant: 'warning', title: 'Exam trap', text: 'Label manajemen bukan penentu. “Perbaikan besar” tetap harus diuji terhadap manfaat ekonomik masa depan dan pengukuran andal; “reorganisasi layout” tetap dibebankan menurut sumber TM1.' },

    { kind: 'h2', text: '8. Component Depreciation' },
    { kind: 'p', text: 'Setiap bagian aset tetap yang biayanya signifikan terhadap total biaya harus disusutkan terpisah bila umur atau pola manfaatnya berbeda. Komponen boleh disajikan agregat pada laporan posisi keuangan, tetapi perhitungannya tetap terpisah.' },
    COMPONENT_DEPRECIATION_CASE,

    { kind: 'h2', text: '9. Cost Model vs Revaluation Model' },
    {
      kind: 'table',
      headers: ['Dimensi', 'Cost Model', 'Revaluation Model'],
      rows: [
        ['Nilai buku', 'Cost − akumulasi depresiasi − akumulasi impairment', 'Fair value pada tanggal revaluasi − depresiasi dan impairment setelahnya'],
        ['Kenaikan pertama', 'Tidak diakui', 'OCI → revaluation surplus'],
        ['Penurunan pertama', 'Impairment di laba rugi', 'Laba rugi'],
        ['Reversal berurutan', 'Ikuti aturan impairment', 'Kenaikan memulihkan rugi lama di P/L lalu OCI; penurunan memakai surplus OCI lalu P/L'],
        ['Cakupan', 'Diterapkan konsisten', 'Revaluasi seluruh kelas aset, bukan aset pilihan']
      ]
    },
    REVALUATION_CASE,

    { kind: 'h2', text: '10. Investment Property' },
    { kind: 'p', text: 'Properti investasi adalah tanah atau bangunan yang dikuasai untuk menghasilkan rental income, kenaikan nilai, atau keduanya—bukan untuk dipakai sendiri atau dijual dalam kegiatan normal.' },
    {
      kind: 'table',
      headers: ['Isu', 'Full SAK — PSAK 240', 'SAK Entitas Privat — Bab 16'],
      rows: [
        ['Model setelah pengakuan', 'Pilih fair value model atau cost model', 'Fair value model wajib kecuali menimbulkan undue cost or effort'],
        ['Perubahan fair value', 'Langsung Profit or Loss, bukan OCI', 'Langsung Profit or Loss bila fair value model diterapkan'],
        ['Depresiasi', 'Tidak disusutkan dalam fair value model; cost model mengikuti pola biaya', 'Ikuti model yang berlaku'],
        ['Jika fair value terlalu membebani', 'Kebijakan Full SAK tetap mengikuti PSAK 240', 'Gunakan cost-depreciation-impairment pada PSAK 216 / Bab 17']
      ]
    },
    { kind: 'callout', variant: 'key', title: 'Bedakan dari persediaan', text: 'Properti untuk sewa atau apresiasi adalah properti investasi. Properti yang dibangun atau dimiliki untuk dijual dalam kegiatan biasa adalah persediaan. Niat dan penggunaan aktual menentukan klasifikasi.' },

    { kind: 'h2', text: '11. Indonesian Land Rights' },
    {
      kind: 'table',
      headers: ['Jenis biaya / hak', 'Perlakuan terverifikasi', 'Fokus ujian'],
      rows: [
        ['Hak Milik', 'Masa berlaku tidak terbatas; tanah tidak diamortisasi', 'Pisahkan tanah dari land improvements yang berumur terbatas'],
        ['Biaya legal awal HGB/HGU/Hak Pakai', 'Dikapitalisasi sebagai bagian biaya perolehan tanah', 'Biaya memperoleh hak pertama kali berbeda dari perpanjangan'],
        ['Biaya pembaruan/perpanjangan HGB/HGU/Hak Pakai', 'Diakui sebagai aset hak-guna/beban tangguhan dan diamortisasi selama masa legal hak', 'Jangan menambahkannya kembali ke land cost tanpa batas waktu']
      ],
      caption: 'ISAK 336 (dahulu ISAK 25) dan PSAK 216.'
    },
    { kind: 'callout', variant: 'warning', title: 'Batas cakupan SAK Entitas Privat', text: 'Sumber kanonis TM1 tidak menyelesaikan seluruh mekanik hak atas tanah untuk SAK Entitas Privat. Materi ini membatasi perlakuan pada perbedaan biaya legal awal dan biaya pembaruan/perpanjangan yang telah terverifikasi.' },

    { kind: 'h2', text: '12. Disposal' },
    {
      kind: 'ol',
      items: [
        'Perbarui depresiasi sampai tanggal pelepasan.',
        'Hapus cost dan akumulasi depresiasi aset.',
        'Catat kas atau piutang yang diterima.',
        'Akui selisih antara imbalan neto dan nilai buku sebagai gain/loss disposal di laba rugi.'
      ]
    },
    { kind: 'formula', text: '\\text{Gain/Loss disposal}=\\text{imbalan neto}-\\text{nilai buku pada tanggal pelepasan}' },
    {
      kind: 'table',
      headers: ['Periode', 'Involuntary conversion / casualty', 'Dampak'],
      rows: [
        ['Periode bencana', 'Derecognize aset dan akui casualty loss sebesar nilai buku', 'Loss di laba rugi'],
        ['Periode klaim cair', 'Catat kas/piutang asuransi dan gain on insurance recovery', 'Gain di laba rugi periode pemulihan']
      ],
      caption: 'Pisahkan kehilangan aset dan pemulihan asuransi bila penyelesaiannya terjadi pada dua periode.'
    },

    { kind: 'h2', text: '13. Presentation & Disclosure' },
    { kind: 'formula', text: '\\text{Net book value}=\\text{gross carrying amount}-\\text{accumulated depreciation}-\\text{accumulated impairment}' },
    {
      kind: 'table',
      headers: ['Lokasi pelaporan', 'Informasi'],
      rows: [
        ['Statement of Financial Position', 'PPE sebagai aset tidak lancar pada nilai buku neto'],
        ['Notes — rekonsiliasi', 'Saldo awal, penambahan, pelepasan, depresiasi, impairment/reversal, revaluasi, saldo akhir per kelas'],
        ['Notes — kebijakan', 'Basis pengukuran per kelas, metode depresiasi, umur manfaat atau tarif'],
        ['Notes — pembatasan', 'Aset yang dijaminkan, jumlah pledge/lien, dan pembatasan hak/title'],
        ['Notes — penyajian', 'Kelas utama seperti land, buildings, equipment, dan construction in progress; tidak melakukan offsetting yang tidak diizinkan']
      ],
      caption: 'Kieso IFRS 5e Ch. 9–10; PSAK 216 / IAS 16.73–79.'
    },
    { kind: 'callout', variant: 'info', title: 'Disclosure bukan transaksi', text: 'Penyajian dan pengungkapan tidak dengan sendirinya menghasilkan jurnal. Jurnal hanya dibuat jika ada transaksi atau penyesuaian yang mendasarinya.' },

    { kind: 'h2', text: '14. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Initial cost}=\\text{net purchase price}+\\text{directly attributable cost}+\\text{PV restoration}' },
    { kind: 'formula', text: '\\text{Lump-sum allocation}=\\frac{\\text{individual FV}}{\\text{total FV}}\\times\\text{total price}' },
    { kind: 'formula', text: '\\text{WAAE}=\\sum(\\text{construction expenditure}\\times\\text{time weight})' },
    { kind: 'formula', text: '\\text{Borrowing cost capitalized}=\\min(\\text{avoidable interest},\\text{actual interest})' },
    { kind: 'formula', text: '\\text{New asset without commercial substance}=\\text{BV given up}+\\text{cash paid}-\\text{cash received}' },
    { kind: 'formula', text: '\\text{Annual component depreciation}=\\frac{\\text{component cost}-\\text{residual value}}{\\text{component useful life}}' },
    { kind: 'h3', text: 'Journal Sheet' },
    {
      kind: 'table',
      headers: ['Transaksi', 'Debit utama', 'Kredit utama'],
      rows: [
        ['Perolehan tunai', 'PPE sebesar biaya perolehan', 'Cash / Payable'],
        ['Kewajiban restorasi awal', 'PPE sebesar PV', 'Provision'],
        ['Deferred payment', 'PPE sebesar PV; interest expense selama tenor', 'Note payable; cash'],
        ['Borrowing cost', 'Construction in progress untuk bagian kapitalisasi; interest expense untuk sisa', 'Cash / interest payable'],
        ['Revaluasi naik pertama', 'PPE', 'OCI — revaluation surplus'],
        ['Pelepasan', 'Cash; accumulated depreciation; loss bila ada', 'PPE; gain bila ada']
      ]
    },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'ul',
      items: [
        'Pertukaran **tanpa substansi komersial** di bawah IFRS/PSAK 216: tidak ada gain maupun loss yang diakui pada tanggal pertukaran.',
        'Pembongkaran gedung lama saat membeli tanah untuk dibersihkan masuk **Land** neto salvage; pembongkaran gedung milik sendiri adalah **loss on disposal**.',
        'Bunga mesin siap pakai tidak dikapitalisasi; kapitalisasi hanya untuk aset kualifikasian selama aktivitas penyiapan berlangsung.',
        'Laba internal pada konstruksi sendiri tidak boleh dikapitalisasi.',
        'Perubahan fair value properti investasi masuk langsung **Profit or Loss**, bukan OCI.',
        'Rearrangement atau reorganization layout dibebankan segera menurut sumber TM1.',
        'Biaya legal awal hak atas tanah berbeda dari biaya pembaruan/perpanjangan yang diamortisasi.'
      ]
    },
    { kind: 'h3', text: 'Framework Comparison' },
    {
      kind: 'table',
      headers: ['Topik', 'Full SAK / IFRS', 'SAK Entitas Privat', 'SAK ETAP lama'],
      rows: [
        ['PPE setelah pengakuan', 'Cost atau revaluation model', 'Cost atau revaluation model — Bab 17', 'Cost model; revaluasi bila aturan pemerintah'],
        ['Properti investasi', 'Fair value atau cost model — PSAK 240', 'Fair value kecuali undue cost or effort — Bab 16', 'Cost model'],
        ['Biaya pinjaman', 'Kapitalisasi wajib untuk aset kualifikasian — PSAK 223', 'Beban segera — Bab 25.2', 'Beban segera'],
        ['Depresiasi komponen', 'Wajib untuk komponen signifikan', 'Wajib bila pola manfaat berbeda', 'Tidak dirinci setara Full SAK'],
        ['Hibah pemerintah', 'Income approach — PSAK 220', 'Berdasarkan kondisi kinerja; reduction-of-asset dilarang — Bab 24', 'Ikuti ketentuan kerangka lama']
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Klasifikasikan aset dari tujuan penggunaan, bukan bentuk fisiknya.',
        'Kapitalisasi hanya biaya yang memenuhi pengakuan dan membawa aset ke kondisi/lokasi siap digunakan.',
        'Untuk transaksi khusus, tetapkan basis pengukuran sebelum menyusun jurnal.',
        'Pisahkan P/L, OCI, dan perubahan langsung dalam ekuitas.',
        'Akhiri jawaban dengan nilai buku, dampak laporan keuangan, dan pengungkapan yang relevan.'
      ]
    },
    { kind: 'callout', variant: 'key', title: 'Checklist 60 detik sebelum mengumpulkan', text: 'Apakah klasifikasi benar? Apakah journal debit = credit? Apakah fair-value change masuk P/L atau OCI yang tepat? Apakah angka Shalla yang dipakai **\\$200,000, 11.5%, \\$95,500**? Apakah transaksi tanpa substansi komersial bebas dari gain/loss pada tanggal pertukaran?' }
  ]
};
