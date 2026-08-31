import type { Reading } from '../../../types';

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Distributions to Shareholders: Dividends and Share Repurchases',
  ref: 'Brigham & Houston Ch. 15',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 10: Menguasai kebijakan distribusi kas kepada pemegang saham, teori dividen (Dividend Irrelevance vs Bird-in-the-Hand vs Tax Preference Theory), Teori Sinyal Dividen (*Information Content / Signaling Hypothesis*), Model Residual Dividend, serta perbandingan Dividen Kas vs Pembelian Kembali Saham (*Share Repurchases*).',
  objectives: [
    'Membandingkan 3 teori preferensi dividen: Teori Ketidakrelevanan MM, Teori Burung di Tangan (Bird-in-the-Hand), dan Teori Preferensi Pajak.',
    'Menjelaskan Efek Sinyal Dividen (Signaling Hypothesis) dan Efek Klien (Clientele Effect).',
    'Menerapkan Model Dividen Residual (Residual Dividend Policy).',
    'Membandingkan mekanisme Dividen Kas vs Pembelian Kembali Saham (Stock Buyback).',
    'Menjelaskan Rencana Reinvestasi Dividen (Dividend Reinvestment Plans - DRIPs).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Tiga Teori Kebijakan Dividen' },
    {
      kind: 'table',
      headers: ['Teori Dividen', 'Pencetus / Tokoh', 'Intisari Argumen Teoretis'],
      rows: [
        ['1. Dividend Irrelevance Theory', 'Modigliani & Miller (1961)', 'Kebijakan dividen **TIDAK MEMPENGARUHI** nilai perusahaan atau harga saham. Nilai murni ditentukan oleh kemampuan menghasilkan laba aset (earning power) dan kebijakan investasi.'],
        ['2. Bird-in-the-Hand Theory', 'Myron Gordon & John Lintner', 'Investor lebih menghargai dividen kas pasti hari ini (*bird in the hand*) daripada keuntungan modal masa depan yang belum pasti (*two in the bush*). Pembayaran dividen tinggi menaikkan harga saham.'],
        ['3. Tax Preference Theory', 'Peneliti Pasar Finansial Modern', 'Karena tarif pajak keuntungan modal (*Capital Gains*) dapat ditunda hingga saham dijual dan seringkali lebih rendah dari pajak dividen, investor lebih menyukai perusahaan menahan laba daripada membagikan dividen kas.']
      ],
      caption: 'Tabel 10.1: Tiga pandangan utama mengenai pengaruh kebijakan dividen.'
    },

    { kind: 'h2', text: '2. Kebijakan Dividen Residual (Residual Dividend Model)' },
    {
      kind: 'p',
      text: 'Berdasarkan kebijakan ini, dividen hanya dibayarkan dari **sisa laba bersih (residual)** setelah seluruh usulan anggaran modal yang menguntungkan (NPV positif) terpenuhi sesuai porsi target struktur modal ekuitas:'
    },
    {
      kind: 'formula',
      text: '\\text{Dividen Dibayar} = \\text{Laba Bersih} - (\\text{Total Anggaran Belanja Modal} \\times w_c)',
      note: 'wc = Bobot modal ekuitas dalam struktur modal target. Jika kebutuhan modal ekuitas melebihi laba bersih, dividen = 0.'
    },

    { kind: 'h2', text: '3. Dividen Kas vs Pembelian Kembali Saham (Stock Repurchase)' },
    {
      kind: 'table',
      headers: ['Dimensi Pembeda', 'Dividen Kas (Cash Dividend)', 'Pembelian Kembali Saham (Share Buyback)'],
      rows: [
        ['Dampak Lembar Saham', 'Jumlah lembar saham beredar tetap sama.', 'Jumlah lembar saham beredar berkurang $\\rightarrow$ **EPS dan Nilai Intrinsik per Lembar Naik**.'],
        ['Fleksibilitas Manajemen', 'Kurang fleksibel; pemotongan dividen dianggap sinyal negatif buruk oleh pasar.', 'Sangat fleksibel; dilakukan saat saham dinilai terlalu murah (*undervalued*) tanpa komitmen rutin.'],
        ['Fleksibilitas Pajak Investor', 'Seluruh investor wajib membayar pajak dividen saat deklarasi.', 'Hanya investor yang memilih menjual sahamnya yang dikenakan pajak capital gain.']
      ],
      caption: 'Tabel 10.2: Komparasi strategis Dividen Kas vs Stock Buyback.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**Signaling Effect**: Kenaikan dividen di atas ekspektasi dipandang pasar sebagai sinyal optimisme manajemen bahwa laba masa depan akan melonjak.',
        '**Clientele Effect**: Perusahaan menarik kelompok investor tertentu (misal pensiunan menyukai saham high-dividend payout).',
        '**Residual Policy**: Mengutamakan pendanaan proyek modal menguntungkan terlebih dahulu sebelum membagikan sisa kas sebagai dividen.'
      ]
    }
  ]
};