import type { Reading } from '../../../types';

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Studi Kasus Strategik II: Fast Fashion vs Luxury Strategy (H&M Dilemma & Louis Vuitton LVMH)',
  ref: 'Silabus Resmi Manajemen Stratejik FEB UNAIR | Case Study: H&M & Louis Vuitton (LVMH)',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 12: Menganalisis studi kasus komparatif industri fashion global: Dilema Fast Fashion H&M (ketergantungan rantai pasok alih daya Asia yang lambat, krisis penumpukan inventaris barang tak terjual / *inventory write-downs*, dan tekanan keberlanjutan lingkungan) vs Kecepatan Inditex/Zara (rantai pasok vertikal terintegrasi 15 hari) serta Strategi Kemewahan Ekstrem Louis Vuitton / LVMH (*Luxury Strategy: Artisan Craftsmanship, Kelangkaan Terencana / Planned Scarcity, No Discounts Policy, & Brand Heritage*).',
  objectives: [
    'Menganalisis akar penyebab masalah strategis H&M (Lead time pasokan 6 bulan vs pergeseran tren busana cepat).',
    'Membandingkan rantai pasok H&M (Outsourcing Asia berbiaya murah tapi lambat) vs Zara (Pabrik lokal di Spanyol/Portugal yang super responsif).',
    'Menjelaskan Hukum Anti-Hukum Pemasaran dalam Strategi Kemewahan (Luxury Strategy) Louis Vuitton: Tidak pernah memberikan diskon, mengendalikan distribusi ritel 100%, dan mempertahankan persepsi kelangkaan.',
    'Menganalisis strategi korporasi konglomerasi LVMH (Bernard Arnault) dalam mengelola portofolio 75 *Maison* mewah dengan otonomi kreatif desainer.',
    'Mengevaluasi tantangan keberlanjutan (ESG), daur ulang pakaian, dan ekonomi sirkular pada industri pakaian global.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Perbandingan Rantai Pasok: H&M vs Inditex (Zara)' },
    {
      kind: 'table',
      headers: ['Dimensi Strategis', 'Model Rantai Pasok H&M', 'Model Rantai Pasok Inditex (Zara)'],
      rows: [
        ['Lokasi Manufaktur', '100% dialihdayakan ke pabrik pihak ketiga di Asia (Bangladesh, Kamboja, Tiongkok).', '50%+ diproduksi secara internal / dekat kantor pusat (Spanyol, Portugal, Maroko, Turki).'],
        ['Waktu Siklus Desain ke Toko (Lead Time)', '**Lama (4 s.d 6 Bulan)**: Merancang busana jauh sebelum musim tiba berdasarkan ramalan tren.', '**Super Cepat (15 s.d 21 Hari)**: Merespons data penjualan kasir harian secara real-time.'],
        ['Fleksibilitas Produksi', 'Komitmen volume besar di awal musim demi menekan harga satuan terendah.', 'Produksi dalam batch kecil (*Small Batches*); hanya menambah stok model yang laris manis.'],
        ['Tingkat Diskon & Sisa Stok', 'Tinggi: Sering melakukan diskon obral besar untuk cuci gudang inventaris mati.', '**Sangat Rendah**: Konsumen tahu barang cepat habis (*Artificial Scarcity*) sehingga membeli dengan harga penuh.']
      ],
      caption: 'Tabel 12.1: Komparasi strategi operasi H&M vs Zara.'
    },

    { kind: 'h2', text: '2. Strategi Kemewahan Louis Vuitton (LVMH)' },
    {
      kind: 'table',
      headers: ['Prinsip Strategi Kemewahan', 'Penerapan Praktik Louis Vuitton', 'Tujuan Keunggulan Bersaing'],
      rows: [
        ['**1. No Discounts / No Sales**', 'Produk LV tidak pernah didiskon atau dijual di toko outlet; stok sisa dihancurkan atau didaur ulang secara internal.', 'Menjaga nilai prestise, kebanggaan pemilik, dan daya tahan harga sekunder di pasar lelang.'],
        ['**2. Kontrol Distribusi Ritel Eksklusif**', '100% gerai toko dimiliki dan dioperasikan langsung oleh LV (*Company-Owned Stores*); tidak ada perantara/distributor pihak ketiga.', 'Menjamin pengalaman berbelanja bintang lima dan kendali penuh atas harga.'],
        ['**3. Warisan Keahlian Tangan (Artisan Heritage)**', 'Dibuat oleh perajin ahli di bengkel kerja Prancis dengan bahan kulit premium dan inspeksi manual ketat.', 'Membenarkan pengenaan marjin harga ultra-premium (*Extreme Willingness-to-Pay*).'],
        ['**4. Sinergi Konglomerasi LVMH**', 'LVMH menyediakan kekuatan tawar finansial untuk mengamankan lokasi ritel termewah di dunia (Champs-Élysées, Fifth Avenue).', 'Skala ekonomis korporat tanpa mengurangi eksklusivitas merek individual.']
      ],
      caption: 'Tabel 12.2: Empat pilar keunggulan bersaing berkelanjutan Louis Vuitton.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Diskusi Kasus TM 12' },
    {
      kind: 'ul',
      items: [
        '**H&M Dilemma**: Terjebak di antara tekanan efisiensi biaya outsourcing Asia yang kaku dengan tuntutan pasar generasi muda yang menginginkan kecepatan tren dan transparansi ramah lingkungan.',
        '**Luxury vs Fashion**: Fashion menjual tren yang cepat usang; Kemewahan (Luxury) menjual keabadian, warisan budaya, dan simbol status sosial tak lekang waktu.',
        '**ESG in Fashion**: Merek fashion masa depan wajib bertransisi menuju rantai pasok sirkular (*Closed-Loop Recycling*) dan bahan baku organik terverifikasi.'
      ]
    }
  ]
};