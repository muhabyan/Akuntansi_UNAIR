import type { Reading } from '../../../types';

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Penilaian Harta Pengalihan/Restrukturisasi, Metode Persediaan Fiskal, & Tarif PPh',
  ref: 'UU PPh Pasal 10, Pasal 17 jo. UU HPP | PP 55/2022',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 2: Menguasai penilaian harga perolehan/penjualan harta dalam transaksi jual-beli, tukar-menukar, hibah/warisan, dan restrukturisasi korporasi (merger/likuidasi), metode penilaian persediaan fiskal (Hanya diperbolehkan metode FIFO dan Rata-rata / Average), Norma Penghitungan Penghasilan Neto (NPPN), serta struktur tarif PPh Orang Pribadi & Badan terbaru.',
  objectives: [
    'Menentukan harga perolehan atau harga penjualan harta dalam transaksi jual beli pihak independen vs pihak terafiliasi (Harga Pasar Wajar).',
    'Menjelaskan perlakuan penilaian harta dalam transaksi hibah, bantuan, dan warisan.',
    'Menerapkan metode penilaian persediaan fiskal menurut Pasal 10 ayat (6) UU PPh (Wajib FIFO atau Rata-rata; metode LIFO dilarang keras).',
    'Menjelaskan syarat penggunaan Norma Penghitungan Penghasilan Neto (NPPN - Wajib Pajak Orang Pribadi dengan peredaran bruto < Rp 4,8 Miliar).',
    'Menguasai struktur tarif progresif PPh Orang Pribadi 5 lapis (UU HPP: 5%, 15%, 25%, 30%, 35%) dan tarif tunggal PPh Badan 22%.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Penilaian Harta dalam Transaksi Khusus (Pasal 10 UU PPh)' },
    {
      kind: 'table',
      headers: ['Jenis Transaksi Pengalihan Harta', 'Dasar Penilaian bagi Pihak yang Menerima', 'Dasar Penilaian bagi Pihak yang Mengalihkan'],
      rows: [
        ['1. Jual Beli Biasa (Bebas Hubungan Istimewa)', 'Jumlah yang sesungguhnya dikeluarkan (Harga Beli + Biaya Terkait).', 'Jumlah yang sesungguhnya diterima (Harga Jual Kas).'],
        ['2. Jual Beli dengan Hubungan Istimewa', '**Jumlah yang seharusnya dikeluarkan (Harga Pasar Wajar)**.', '**Jumlah yang seharusnya diterima (Harga Pasar Wajar)**.'],
        ['3. Tukar Menukar Harta (Barter)', 'Nilai Pasar Wajar dari harta yang diperoleh.', 'Nilai Pasar Wajar dari harta yang diserahkan.'],
        ['4. Penggabungan / Peleburan Usaha (Merger)', 'Nilai Pasar Wajar (atau Nilai Buku jika mendapat persetujuan Ditjen Pajak / *Pooling of Interests*).', 'Nilai Pasar Wajar (atau Nilai Sisa Buku).'],
        ['5. Hibah / Bantuan Bukan Objek Pajak', 'Nilai Sisa Buku dari pihak yang mengalihkan.', 'Tidak diakui keuntungan/kerugian fiskal.']
      ],
      caption: 'Tabel 2.1: Penilaian fiskal atas berbagai skema pengalihan harta.'
    },

    { kind: 'h2', text: '2. Metode Penilaian Persediaan Fiskal' },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Larangan Metode LIFO dalam Perpajakan Indonesia',
      text: 'Pasal 10 ayat (6) UU PPh secara tegas hanya membolehkan **dua metode penilaian persediaan** untuk menghitung Harga Pokok Penjualan (HPP):\n1. **Metode Rata-rata (Average Method)**.\n2. **Metode Masuk Pertama Keluar Pertama (FIFO Method)**.\n• **Metode LIFO (Last-In First-Out) DILARANG KERAS** karena pada masa inflasi akan memperbesar HPP dan memperkecil laba kena pajak secara semu.'
    },

    { kind: 'h2', text: '3. Struktur Lapisan Tarif PPh Orang Pribadi & Badan (UU HPP)' },
    {
      kind: 'table',
      headers: ['Lapisan Penghasilan Kena Pajak (PKP) Wajib Pajak Orang Pribadi', 'Tarif PPh Pasal 17 UU HPP'],
      rows: [
        ['Sampai dengan Rp 60.000.000', '**5%** (Batas dinaikkan dari sebelumnya Rp 50jt)'],
        ['Di atas Rp 60.000.000 s.d Rp 250.000.000', '**15%**'],
        ['Di atas Rp 250.000.000 s.d Rp 500.000.000', '**25%**'],
        ['Di atas Rp 500.000.000 s.d Rp 5.000.000.000', '**30%**'],
        ['Di atas Rp 5.000.000.000 (Rp 5 Miliar)', '**35%** (Lapisan Baru Orang Super Kaya / *High Net Worth Individuals*)']
      ],
      caption: 'Tabel 2.2: Lapisan tarif progresif PPh Orang Pribadi berdasarkan UU HPP.'
    },
    {
      kind: 'p',
      text: '**Tarif PPh Wajib Pajak Badan**: Ditetapkan sebesar tarif tunggal proporsional **22%** mulai Tahun Pajak 2022 dan seterusnya.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**NPPN**: Wajib memberitahukan ke DJP dalam 3 bulan pertama tahun pajak (paling lambat 31 Maret) jika ingin menggunakan Norma Penghitungan Neto.',
        '**Tarif Tertinggi OP 35%**: Berlaku untuk bagian PKP yang melampaui Rp 5 Miliar setahun.',
        '**Restrukturisasi Usaha**: Dapat menggunakan nilai sisa buku jika memenuhi syarat *Business Purpose Test* dari DJP.'
      ]
    }
  ]
};