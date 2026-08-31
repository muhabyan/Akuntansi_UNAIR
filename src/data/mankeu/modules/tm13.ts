import type { Reading } from '../../../types';

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Multinational Financial Management & Currency Risk',
  ref: 'Brigham & Houston Ch. 19',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 13: Menguasai dinamika manajemen keuangan multinasional (MNCs), sistem nilai tukar mata uang (*Exchange Rates*), teori-teori paritas pasar internasional (Interest Rate Parity / IRP dan Purchasing Power Parity / PPP), serta manajemen 3 eksposur risiko valuta asing (Transaction, Translation, Economic Exposure).',
  objectives: [
    'Menjelaskan perbedaan utama antara Manajemen Keuangan Domestik vs Multinasional (Enam faktor pembeda: mata uang berbeda, struktur hukum/politik, hambatan tarif, bahasa/budaya, peran pemerintah, dan pasar modal global).',
    'Mengonversi kuotasi kurs mata uang langsung (Direct Quotation) vs tidak langsung (Indirect Quotation).',
    'Menerapkan Teori Paritas Suku Bunga (Interest Rate Parity - IRP) pada kontrak Forward mata uang.',
    'Menerapkan Teori Paritas Daya Beli (Purchasing Power Parity - PPP) dan Hukum Satu Harga (Law of One Price).',
    'Mengidentifikasi dan merancang lindung nilai (Hedging) atas 3 jenis risiko valas: Transaksi, Translasi, dan Ekonomi.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Teori Paritas Keuangan Internasional' },
    {
      kind: 'table',
      headers: ['Teori Paritas', 'Formula Hubungan Keseimbangan', 'Makna Teoretis'],
      rows: [
        ['1. Interest Rate Parity (IRP)', '$\\frac{\\text{Forward Rate}}{\\text{Spot Rate}} = \\frac{1 + r_h}{1 + r_f}$', 'Selisih antara kurs forward dan kurs spot mata uang mencerminkan selisih suku bunga nominal antara negara domestik ($r_h$) dan negara asing ($r_f$). Mencegah arbitrase tertutup (*Covered Interest Arbitrage*).'],
        ['2. Purchasing Power Parity (PPP)', '$\\text{Spot Akhir} = \\text{Spot Awal} \\times \\frac{1 + I_h}{1 + I_f}$', 'Mata uang dari negara dengan laju inflasi lebih tinggi ($I_h$) akan terdepresiasi relatif terhadap mata uang negara dengan inflasi lebih rendah ($I_f$).']
      ],
      caption: 'Tabel 13.1: Dua teori paritas fundamental pasar valuta asing.'
    },

    { kind: 'h2', text: '2. Tiga Jenis Eksposur Risiko Valuta Asing (Forex Risk)' },
    {
      kind: 'table',
      headers: ['Jenis Eksposur Valas', 'Definisi Risiko', 'Teknik Pengelolaan / Hedging'],
      rows: [
        ['1. Eksposur Transaksi (Transaction Exposure)', 'Risiko fluktuasi kurs antara tanggal timbulnya piutang/utang valas (misal impor/ekspor) dengan tanggal penyelesaian kas aktual.', '• Forward / Futures Contract Hedging\n• Money Market Hedge\n• Currency Options (Hak opsi beli/jual).'],
        ['2. Eksposur Translasi (Translation Exposure)', 'Risiko perubahan nilai ekuitas konsolidasi saat mengonversi laporan keuangan anak perusahaan luar negeri ke mata uang induk (IDR).', 'Melakukan penyeimbangan aset dan liabilitas valas (Balance Sheet Hedging).'],
        ['3. Eksposur Ekonomi / Operasi (Economic Exposure)', 'Dampak perubahan kurs terhadap daya saing produk dan nilai sekarang arus kas jangka panjang perusahaan.', 'Diversifikasi lokasi fasilitas produksi dan diversifikasi basis pasar ekspor.']
      ],
      caption: 'Tabel 13.2: Klasifikasi dan strategi lindung nilai eksposur valas.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 13' },
    {
      kind: 'ul',
      items: [
        '**IRP**: Negara dengan suku bunga lebih tinggi akan memperdagangkan mata uangnya dengan diskonto pada pasar forward (*Forward Discount*).',
        '**Hedging**: Menghilangkan ketidakpastian fluktuasi nilai tukar kas masuk dan keluar di masa depan.',
        '**Risiko Politik**: Ancaman pengambilalihan aset oleh pemerintah asing (Expropriation) atau pembatasan repatriasi dividen valas.'
      ]
    }
  ]
};