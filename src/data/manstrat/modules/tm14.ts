import type { Reading } from '../../../types';

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Studi Kasus Strategik IV: Kepemimpinan Teknologi & Portofolio Konsumer (Samsung Electronics & Procter & Gamble)',
  ref: 'Silabus Resmi Manajemen Stratejik FEB UNAIR | Case Study: Samsung & P&G',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 14: Menganalisis studi kasus dua raksasa industri global: Kepemimpinan Teknologi Vertikal Samsung Electronics (*Integrasi Vertikal Komponen Semikonduktor DRAM/NAND Flash, Panel Layar OLED, hingga Produk Konsumen Akhir Smartphone Galaxy & TV; Strategi Fast-Follower Menjadi First-Mover Inovasi; Budaya Krisis Abadi Lee Kun-hee*) dan Manajemen Portofolio Multibrand Procter & Gamble / P&G (*Strategi Merek Billion-Dollar Brands: Pampers, Tide, Gillette; Model Inovasi Terbuka Connect + Develop; Rasionalisasi Merek & Transformasi Digital D2C*).',
  objectives: [
    'Menganalisis strategi integrasi vertikal internal Samsung Electronics yang menciptakan keunggulan biaya dan kecepatan peluncuran teknologi.',
    'Mengevaluasi transformasi budaya korporasi Samsung dari produsen OEM berbiaya murah menjadi salah satu merek teknologi paling berharga di dunia (*New Management Initiative 1993*).',
    'Menganalisis arsitektur portofolio multi-merek Procter & Gamble dalam mendominasi lorong ritel barang kebutuhan sehari-hari (*FMCG*).',
    'Menjelaskan model inovasi terbuka P&G (Connect + Develop) yang mengalihdayakan 50%+ ide produk baru dari luar perusahaan.',
    'Mendiagnosis ancaman disrupsi model bisnis langsung-ke-konsumen (*Direct-to-Consumer / D2C Brands*) dan label privat supermarket (*Private Labels*) terhadap P&G.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Integrasi Vertikal & Kepemimpinan Teknologi Samsung Electronics' },
    {
      kind: 'table',
      headers: ['Pilar Strategis Samsung', 'Implementasi Rantai Nilai', 'Dampak Keunggulan Bersaing'],
      rows: [
        ['**1. Integrasi Komponen Vertikal**', 'Samsung memproduksi sendiri chip memori (DRAM/NAND), prosesor Exynos, sensor kamera, dan layar AMOLED untuk perangkat Galaxy-nya, sekaligus menjualnya ke pesaing (termasuk Apple).', 'Skala ekonomis pabrik semikonduktor raksasa menekan biaya komponen internal dan memberikan intelijen tren teknologi pasar lebih awal.'],
        ['**2. Investasi R&D Kontra-Siklikal**', 'Melipatgandakan belanja modal (*Capex*) fasilitas pabrik semikonduktor saat industri sedang lesu/krisis.', 'Saat pasar memulih, Samsung siap dengan kapasitas terbesar dan teknologi terdepan, menyingkirkan pesaing yang memotong anggaran.'],
        ['**3. Kecepatan Eksekusi (Speed-to-Market)**', 'Menggabungkan keputusan terpusat hierarkis ala *Chaebol* Korea dengan tim desain global di London, San Francisco, dan Seoul.', 'Mampu mengomersialkan inovasi layar lipat (*Foldable Displays*) jauh mendahului seluruh pesaing global.']
      ],
      caption: 'Tabel 14.1: Analisis keunggulan kompetitif Samsung Electronics.'
    },

    { kind: 'h2', text: '2. Manajemen Portofolio Merek & Inovasi Terbuka P&G (Connect + Develop)' },
    {
      kind: 'table',
      headers: ['Strategi Korporat P&G', 'Mekanisme Operasional', 'Hasil Kinerja Bisnis'],
      rows: [
        ['**1. Fokus pada Merek Miliaran Dolar**', 'Merampingkan portofolio dengan menjual 100 merek kecil yang tidak efisien dan fokus pada 65 merek unggulan (*Core Brands*) yang menyumbang 90% laba (Pampers, Ariel, Head & Shoulders, Oral-B).', 'Meningkatkan profitabilitas margin operasi, memperkuat posisi tawar dengan peritel besar (Walmart), dan memfokuskan belanja iklan global.'],
        ['**2. Open Innovation (Connect + Develop)**', 'Membuka pintu kolaborasi dengan penemu, universitas, dan laboratorium independen di seluruh dunia untuk mencari solusi formula kimia dan kemasan ramah lingkungan.', 'Memangkas separuh biaya R&D internal dan mempercepat waktu peluncuran produk inovasi baru ke pasar.'],
        ['**3. Respon terhadap Ancaman D2C**', 'Mengakuisisi merek-merek D2C ramah lingkungan (misal Native Deodorant) dan mendigitalkan saluran distribusi e-commerce langsung.', 'Membendung migrasi konsumen muda generasi Z ke merek rintisan baru.']
      ],
      caption: 'Tabel 14.2: Transformasi strategi bisnis konsumen Procter & Gamble.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**Chaebol Governance**: Struktur konglomerasi keluarga Korea yang memungkinkan pengambilan keputusan investasi jangka panjang berisiko tinggi tanpa tekanan laba kuartalan pemegang saham jangka pendek.',
        '**Category Management P&G**: Mengelola seluruh kategori barang di supermarket sebagai satu kesatuan strategis untuk mendikte ruang rak terbaik (*Eye-Level Shelf Space*).',
        '**Integrasi Teori Menuju Kasus**: UAS menguji kemampuan mahasiswa menghubungkan teori formal (Five Forces, VRIO, Generic Strategies, Blue Ocean, Strategy Maps) untuk memecahkan masalah riil di 7 kasus perusahaan global.'
      ]
    }
  ]
};