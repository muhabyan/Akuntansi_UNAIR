const fs = require('fs');

const raw = [
  // TM 1: Business, Economy
  [1, 'Konsep', 'Definisi Bisnis', 'Organisasi yang mengkombinasikan faktor produksi untuk menciptakan barang atau jasa demi mendapat keuntungan.'],
  [1, 'Perbandingan', 'Profit vs Non-Profit', 'Profit bertujuan mencari laba finansial bagi pemilik. Non-profit bertujuan melayani masyarakat tanpa motif laba finansial.'],
  [1, 'Definisi', 'Faktor Produksi', 'Sumber daya yang digunakan: Land (alam), Labor (tenaga kerja), Capital (modal), dan Entrepreneurship (kewirausahaan).'],
  [1, 'Definisi', 'Capitalism', 'Sistem ekonomi di mana individu memiliki alat produksi dan pasar menentukan alokasi sumber daya.'],
  [1, 'Definisi', 'Command Economy', 'Sistem ekonomi di mana pemerintah yang menentukan apa yang diproduksi, bagaimana, dan untuk siapa.'],
  [1, 'Mekanisme', 'Business Cycle', 'Siklus fluktuasi ekonomi: Expansion (pertumbuhan), Peak (puncak), Contraction/Recession (penurunan), dan Trough (titik terendah).'],
  [1, 'Definisi', 'Perfect Competition', 'Bentuk pasar di mana banyak pembeli dan penjual, produk identik, dan tidak ada yang bisa menentukan harga.'],
  // TM 2: Ethics
  [2, 'Definisi', 'Business Ethics', 'Standar dan prinsip moral yang memandu perilaku dalam dunia bisnis.'],
  [2, 'Mekanisme', 'Corporate Social Responsibility (CSR)', 'Kewajiban perusahaan untuk meminimalkan dampak negatif dan memaksimalkan dampak positif terhadap masyarakat.'],
  [2, 'Konsep', 'Stakeholder Model', 'Perusahaan bertanggung jawab tidak hanya kepada pemegang saham (stockholders), tetapi juga kepada karyawan, konsumen, lingkungan, dan masyarakat luas.'],
  [2, 'Definisi', 'Whistleblowing', 'Tindakan karyawan atau pihak dalam yang melaporkan praktik ilegal atau tidak etis yang dilakukan perusahaan.'],
  [2, 'Konsep', 'Code of Ethics', 'Dokumen formal yang merinci nilai-nilai dan panduan etis yang harus dipatuhi oleh seluruh anggota perusahaan.'],
  [2, 'Perbandingan', 'Economic Model vs Socioeconomic Model', 'Economic model fokus pada maksimalisasi laba untuk pemegang saham. Socioeconomic model berpendapat bisnis harus melayani seluruh masyarakat.'],
  // TM 3: Global Business
  [3, 'Definisi', 'International Business', 'Semua aktivitas bisnis yang melibatkan pertukaran melewati batas negara.'],
  [3, 'Definisi', 'Absolute Advantage', 'Kemampuan suatu negara untuk memproduksi barang secara spesifik dengan lebih efisien dibandingkan negara lain.'],
  [3, 'Definisi', 'Comparative Advantage', 'Kemampuan memproduksi barang dengan biaya peluang (opportunity cost) yang lebih rendah dibandingkan negara lain.'],
  [3, 'Mekanisme', 'Balance of Trade', 'Total nilai ekspor suatu negara dikurangi total nilai impornya. Jika ekspor > impor, terjadi surplus perdagangan.'],
  [3, 'Mekanisme', 'Tariff', 'Pajak atau bea yang dikenakan pada barang-barang impor untuk melindungi industri domestik.'],
  [3, 'Konsep', 'Joint Venture', 'Kemitraan antara dua atau lebih perusahaan (biasanya beda negara) untuk membentuk entitas bisnis baru demi proyek tertentu.'],
  // TM 4: Forms of Business
  [4, 'Definisi', 'Sole Proprietorship', 'Bisnis yang dimiliki dan dijalankan oleh satu orang, laba milik sendiri tapi menanggung liabilitas tak terbatas.'],
  [4, 'Perbandingan', 'General vs Limited Partnership', 'General: semua mitra menanggung kewajiban penuh. Limited: mitra pasif hanya menanggung kerugian sebatas modal yang disetor.'],
  [4, 'Definisi', 'Corporation (Korporasi)', 'Entitas bisnis yang secara hukum terpisah dari pemiliknya, memberikan perlindungan liabilitas terbatas pada pemegang saham.'],
  [4, 'Konsep', 'Double Taxation', 'Kelemahan korporasi di mana laba dikenakan pajak penghasilan perusahaan, dan dividen yang dibagikan juga dikenakan pajak pribadi pemegang saham.'],
  [4, 'Definisi', 'Merger', 'Penggabungan dua perusahaan menjadi satu entitas bisnis yang baru.'],
  [4, 'Definisi', 'Entrepreneurship', 'Proses menciptakan dan mengelola bisnis baru, biasanya dengan risiko, untuk mencapai tujuan profit dan inovasi.'],
  [4, 'Mekanisme', 'Franchising', 'Lisensi di mana pihak pemilik merek (franchisor) mengizinkan pihak lain (franchisee) menggunakan merek dan sistem operasinya dengan imbalan biaya.'],
  // TM 5: Management Process
  [5, 'Definisi', 'Management', 'Proses merencanakan, mengorganisasi, memimpin, dan mengendalikan sumber daya untuk mencapai tujuan organisasi.'],
  [5, 'Konsep', 'Empat Fungsi Manajemen', 'Planning (perencanaan), Organizing (pengorganisasian), Leading (kepemimpinan), dan Controlling (pengendalian).'],
  [5, 'Perbandingan', 'Strategic vs Tactical Planning', 'Strategic: rencana jangka panjang (1-5 tahun) oleh top management. Tactical: implementasi jangka pendek (kurang dari 1 tahun) oleh middle management.'],
  [5, 'Konsep', 'SWOT Analysis', 'Identifikasi Strengths (Kekuatan) dan Weaknesses (Kelemahan) internal, serta Opportunities (Peluang) dan Threats (Ancaman) eksternal.'],
  [5, 'Perbandingan', 'Autocratic vs Democratic Leadership', 'Autocratic: manajer membuat keputusan sendiri. Democratic: manajer melibatkan karyawan dalam pengambilan keputusan.'],
  [5, 'Mekanisme', 'Controlling Process', '1. Tetapkan standar, 2. Ukur kinerja, 3. Bandingkan dengan standar, 4. Ambil tindakan korektif jika perlu.'],
  // TM 6: Flexible Organization
  [6, 'Definisi', 'Organization Chart', 'Diagram visual yang menunjukkan struktur organisasi, rantai komando, dan hubungan antar departemen.'],
  [6, 'Konsep', 'Chain of Command', 'Garis wewenang yang mengalir dari manajemen puncak ke tingkat terbawah.'],
  [6, 'Mekanisme', 'Span of Management (Span of Control)', 'Jumlah bawahan yang melapor secara langsung kepada seorang manajer.'],
  [6, 'Perbandingan', 'Centralization vs Decentralization', 'Sentralisasi: wewenang terpusat di top management. Desentralisasi: pendelegasian wewenang ke level manajemen bawah.'],
  [6, 'Konsep', 'Matrix Structure', 'Struktur organisasi di mana karyawan melapor pada dua manajer (fungsional dan manajer proyek), sangat fleksibel namun bisa memicu konflik wewenang.'],
  [6, 'Definisi', 'Corporate Culture', 'Nilai-nilai, keyakinan, dan tradisi bersama yang membentuk perilaku staf dan atmosfir kerja dalam sebuah perusahaan.'],
  // TM 7: Producing Quality Goods
  [7, 'Definisi', 'Operations Management', 'Semua kegiatan yang diperlukan untuk mengubah input (bahan, tenaga kerja) menjadi output (barang/jasa).'],
  [7, 'Konsep', 'Form Utility', 'Nilai guna yang diciptakan oleh orang-orang yang mengubah bahan mentah menjadi produk jadi.'],
  [7, 'Mekanisme', 'Mass Production', 'Pembuatan produk yang seragam secara besar-besaran dengan biaya rendah.'],
  [7, 'Konsep', 'Just-in-Time (JIT) Inventory', 'Sistem produksi di mana persediaan bahan baku tiba tepat pada saat dibutuhkan untuk diproduksi, menekan biaya penyimpanan.'],
  [7, 'Mekanisme', 'Quality Control', 'Proses untuk memastikan barang dan jasa diproduksi sesuai spesifikasi dan standar desain.'],
  [7, 'Konsep', 'Six Sigma', 'Pendekatan kualitas disiplin tinggi yang berupaya mengeleminasi cacat hingga hanya 3.4 cacat per satu juta peluang.'],
  // TM 8: Human Resource Management
  [8, 'Definisi', 'Human Resource Management (HRM)', 'Semua kegiatan mempekerjakan, melatih, mengevaluasi, dan mengkompensasi karyawan.'],
  [8, 'Konsep', 'Job Analysis', 'Studi sistematis untuk menentukan elemen dan persyaratan suatu pekerjaan (menghasilkan Job Description dan Job Specification).'],
  [8, 'Mekanisme', 'Recruiting', 'Proses menarik kandidat pelamar yang memenuhi kualifikasi (bisa dari internal atau eksternal).'],
  [8, 'Definisi', 'Performance Appraisal', 'Evaluasi kinerja karyawan secara periodik untuk umpan balik dan dasar keputusan promosi/kompensasi.'],
  [8, 'Konsep', 'Maslow Hierarchy of Needs', 'Teori motivasi: Fisiologis, Keamanan, Sosial, Penghargaan, Aktualisasi Diri. Kebutuhan dasar harus dipenuhi sebelum yang lebih tinggi.'],
  [8, 'Perbandingan', 'Theory X vs Theory Y (McGregor)', 'Theory X: menganggap karyawan malas dan harus dipaksa. Theory Y: menganggap karyawan suka bekerja, mandiri, dan bertanggung jawab.'],
  [8, 'Konsep', 'Herzberg Two-Factor Theory', 'Motivator factors (prestasi, pengakuan) meningkatkan kepuasan. Hygiene factors (gaji, kondisi kerja) mencegah ketidakpuasan namun tidak otomatis memotivasi.'],
  // TM 9: Customer Relations & Marketing
  [9, 'Definisi', 'Marketing', 'Proses menciptakan, mendistribusikan, mempromosikan, dan menetapkan harga barang/jasa untuk memuaskan hubungan pelanggan.'],
  [9, 'Konsep', 'Marketing Mix (4P)', 'Kombinasi empat variabel yang dikendalikan perusahaan: Product, Price, Place (Distribution), dan Promotion.'],
  [9, 'Konsep', 'Target Market', 'Sekelompok individu atau organisasi di mana sebuah perusahaan mengarahkan upaya pemasarannya.'],
  [9, 'Mekanisme', 'Market Segmentation', 'Proses membagi pasar yang luas menjadi kelompok pembeli dengan kebutuhan, karakteristik, atau perilaku yang mirip.'],
  [9, 'Definisi', 'Consumer Behavior', 'Proses keputusan dan tindakan pembeli dalam membeli dan menggunakan produk.'],
  [9, 'Konsep', 'Customer Relationship Management (CRM)', 'Strategi mengelola data pelanggan untuk memaksimalkan kepuasan dan kesetiaan pelanggan jangka panjang.'],
  // TM 10: Product Creation & Pricing
  [10, 'Definisi', 'Product Life Cycle', 'Serangkaian tahap yang dilalui produk: Introduction, Growth, Maturity, dan Decline.'],
  [10, 'Konsep', 'Product Line vs Product Mix', 'Product Line: sekumpulan produk serupa (misal varian shampo). Product Mix: seluruh produk yang ditawarkan perusahaan.'],
  [10, 'Definisi', 'Brand Loyalty', 'Sejauh mana pelanggan menyukai, memilih, dan secara konsisten membeli suatu merek dibanding merek pesaing.'],
  [10, 'Mekanisme', 'Price Skimming', 'Strategi menetapkan harga tertinggi yang mungkin dibayar konsumen untuk produk baru saat tahap perkenalan.'],
  [10, 'Mekanisme', 'Penetration Pricing', 'Strategi menetapkan harga rendah untuk produk baru guna segera menarik pangsa pasar yang besar.'],
  [10, 'Konsep', 'Breakeven Analysis', 'Menghitung titik impas di mana total pendapatan (TR) sama dengan total biaya (TC).'],
  // TM 11: Product Distribution & Promotion
  [11, 'Definisi', 'Distribution Channel', 'Rangkaian perusahaan atau individu yang mengarahkan pergerakan produk dari produsen ke konsumen akhir.'],
  [11, 'Perbandingan', 'Wholesaler vs Retailer', 'Wholesaler (grosir): menjual ke bisnis lain atau pengecer. Retailer (pengecer): menjual langsung ke konsumen akhir.'],
  [11, 'Definisi', 'Physical Distribution', 'Aktivitas pengemasan, penanganan, penyimpanan, dan transportasi produk ke titik konsumsi.'],
  [11, 'Konsep', 'Promotion Mix', 'Kombinasi alat promosi: Advertising, Personal Selling, Sales Promotion, dan Public Relations.'],
  [11, 'Perbandingan', 'Advertising vs PR', 'Advertising: komunikasi non-personal berbayar via media. Public Relations: komunikasi yang berfokus membangun citra baik dan tidak selalu berbayar.'],
  [11, 'Mekanisme', 'Personal Selling', 'Penyajian dan komunikasi pribadi secara langsung antara tenaga penjual dengan calon pembeli.'],
  // TM 12: E-Business
  [12, 'Definisi', 'E-Business', 'Penyelenggaraan seluruh proses bisnis melalui medium internet, tidak hanya sekadar jual beli (e-commerce).'],
  [12, 'Perbandingan', 'B2B vs B2C', 'B2B (Business-to-Business): transaksi antraperusahaan. B2C (Business-to-Consumer): transaksi perusahaan ke konsumen akhir.'],
  [12, 'Konsep', 'Revenue Model', 'Cara perusahaan e-business menghasilkan uang, misal melalui iklan, langganan, komisi transaksi, atau penjualan produk.'],
  [12, 'Mekanisme', 'SEO (Search Engine Optimization)', 'Upaya optimasi agar website bisnis muncul di urutan atas hasil mesin pencari untuk meningkatkan traffic.'],
  [12, 'Definisi', 'Cloud Computing', 'Penggunaan server internet untuk menyimpan dan mengolah data tanpa memerlukan server fisik lokal di perusahaan.'],
  [12, 'Konsep', 'Data Mining', 'Pencarian data elektronik dalam skala besar untuk menemukan pola atau hubungan guna memprediksi perilaku konsumen.'],
  // TM 13: Managerial & Accounting Information
  [13, 'Definisi', 'Accounting', 'Proses mencatat, mengukur, mengklasifikasi, dan merangkum informasi finansial untuk pengambilan keputusan.'],
  [13, 'Perbandingan', 'Financial vs Managerial Accounting', 'Financial: untuk pihak eksternal (investor, kreditor). Managerial: untuk manajer internal demi perencanaan & pengendalian.'],
  [13, 'Konsep', 'Accounting Equation', 'Assets = Liabilities + Owner\'s Equity. Merupakan dasar sistem pencatatan double-entry.'],
  [13, 'Definisi', 'Balance Sheet (Laporan Posisi Keuangan)', 'Laporan yang menunjukkan aset, kewajiban, dan ekuitas perusahaan pada satu titik waktu (tanggal tertentu).'],
  [13, 'Definisi', 'Income Statement (Laporan Laba Rugi)', 'Laporan yang menunjukkan pendapatan, beban, dan laba/rugi bersih perusahaan selama satu periode tertentu.'],
  [13, 'Konsep', 'Liquidity', 'Kemampuan aset untuk segera diubah menjadi uang tunai (kas). Kas adalah aset yang paling likuid.'],
  [13, 'Mekanisme', 'Ratio Analysis', 'Perhitungan dari angka-angka laporan keuangan untuk mengevaluasi likuiditas, profitabilitas, aktivitas, dan solvabilitas.'],
  // TM 14: Financial Management
  [14, 'Definisi', 'Financial Management', 'Aktivitas memperoleh dan mengelola dana bagi perusahaan untuk mencapai tujuan bisnis.'],
  [14, 'Perbandingan', 'Debt vs Equity Financing', 'Debt: modal dari meminjam (harus dilunasi dengan bunga). Equity: modal dari pemilik/saham (tidak ada kewajiban bunga/pelunasan wajib).'],
  [14, 'Konsep', 'Trade Credit', 'Fasilitas kredit jangka pendek di mana pemasok mengizinkan pembeli untuk membayar di kemudian hari (misal term 2/10, n/30).'],
  [14, 'Definisi', 'Corporate Bond', 'Surat utang jangka panjang yang diterbitkan korporasi untuk meminjam uang dari investor dengan janji bayar pokok & bunga.'],
  [14, 'Konsep', 'Initial Public Offering (IPO)', 'Momen pertama kali perusahaan menawarkan sahamnya secara publik di pasar modal (go public).'],
  [14, 'Mekanisme', 'Capital Budgeting', 'Proses menganalisis dan memilih investasi jangka panjang yang diharapkan memberi pengembalian terbesar bagi perusahaan.']
];

const cards = [];
raw.forEach((r, i) => {
  const tm = r[0];
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  cards.push(`  {
    id: "mnu101-tm${tm < 10 ? '0'+tm : tm}-${i < 10 ? '0'+i : i}",
    phase: "${phase}",
    tm: ${tm},
    topic: "${r[2].replace(/"/g, '\\"')}",
    category: "${r[1]}",
    front: "${r[2].replace(/"/g, '\\"')}",
    back: "${r[3].replace(/"/g, '\\"')}"
  }`);
});

const content = `import type { AdvancedStudyCard } from '../../types';

export const MNU101_FC: AdvancedStudyCard[] = [
${cards.join(',\n')}
];
`;

fs.writeFileSync('c:/cek/src/data/flashcards/mnu101.ts', content);
console.log('Generated MNU101 cards: ' + cards.length);
