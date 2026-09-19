// scripts/build-sem3-flashcards.mjs
import fs from 'node:fs';
import path from 'node:path';

const flashcardsDir = path.join(process.cwd(), 'src/data/flashcards');

const VALID_CATEGORIES = new Set([
  'Definisi', 'Rumus', 'Grafik', 'Mekanisme', 'Asumsi', 'Perbandingan',
  'Miskonsepsi', 'Jurnal', 'Standar', 'Konsep', 'Contoh', 'Dokumen',
  'Pengendalian', 'Tarif', 'Objek', 'Sejarah', 'Teori', 'Klasifikasi',
  'Hukum', 'Prinsip', 'Prosedur', 'Subjek', 'Sanksi', 'Dasar Hukum',
  'Pengecualian', 'Lainnya'
]);

function sanitizeCategory(cat) {
  if (VALID_CATEGORIES.has(cat)) return cat;
  if (cat === 'Kalkulasi' || cat === 'Formula') return 'Rumus';
  if (cat === 'Aturan' || cat === 'Regulasi' || cat === 'Hukum') return 'Hukum';
  if (cat === 'Struktur' || cat === 'Hierarki') return 'Klasifikasi';
  if (cat === 'Penyajian' || cat === 'Formulir') return 'Dokumen';
  if (cat === 'Analisis' || cat === 'Evaluasi' || cat === 'Strategi' || cat === 'Konteks' || cat === 'Motif' || cat === 'Fokus' || cat === 'Tips' || cat === 'Modern' || cat === 'Kriteria' || cat === 'Alat' || cat === 'Teknologi' || cat === 'Pilar' || cat === 'Gerbang' || cat === 'Notasi' || cat === 'Database' || cat === 'Sikap' || cat === 'Asersi' || cat === 'Opini' || cat === 'Dimensi' || cat === 'Pengembangan' || cat === 'Cloud' || cat === 'AI' || cat === 'Kriptografi') return 'Konsep';
  if (cat === 'Fasilitas' || cat === 'Pajak Final' || cat === 'Angka') return 'Tarif';
  if (cat === 'Kelembagaan' || cat === 'Peran' || cat === 'BCP' || cat === 'Otomatisasi' || cat === 'Instrumen' || cat === 'Alternatif' || cat === 'Bentuk' || cat === 'Sistem Desa' || cat === 'TI Pemerintah' || cat === 'Internal Audit') return 'Mekanisme';
  if (cat === 'Tahapan' || cat === 'Langkah' || cat === 'Alur' || cat === 'Metode' || cat === 'Teknik' || cat === 'Wajib') return 'Prosedur';
  if (cat === 'Fraud Control') return 'Pengendalian';
  if (cat === 'Konstitusi') return 'Hukum';
  if (cat === 'Kasus' || cat === 'Contoh Kasus') return 'Contoh';
  return 'Konsep';
}

function card(code, tm, seq, topic, category, front, back) {
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  const id = `${code.toLowerCase()}-tm${String(tm).padStart(2, '0')}-${String(seq).padStart(2, '0')}`;
  return { id, phase, tm, topic, category: sanitizeCategory(category), front, back };
}

// Data spesifik per mata kuliah (14 TM x 6 kartu = 84 kartu per MK)
// Only the courses listed for this artefact in scripts/test-sem3-generators.mjs may be generated; the rest are edited by hand.
const COURSES_DATA = {
  AKM202: {
    name: 'Akuntansi Manajemen',
    tms: [
      { tm: 1, topic: 'Konsep Dasar & Klasifikasi Biaya', cards: [
        ['Tujuan Utama Akuntansi Manajemen', 'Konsep', 'Menyediakan informasi akurat dan tepat waktu bagi manajer internal untuk perencanaan, pengendalian operasional, dan pengambilan keputusan.'],
        ['Biaya Produk vs Biaya Periode', 'Klasifikasi', 'Biaya Produk melekat pada persediaan hingga produk terjual (Bahan Langsung, TKL, BOP). Biaya Periode dibebankan langsung ke laba rugi periode berjalan.'],
        ['Biaya Utama (Prime Cost)', 'Kalkulasi', 'Prime Cost = Bahan Baku Langsung + Tenaga Kerja Langsung.'],
        ['Biaya Konversi (Conversion Cost)', 'Kalkulasi', 'Conversion Cost = Tenaga Kerja Langsung + Biaya Overhead Pabrik (BOP).'],
        ['Biaya Peluang (Opportunity Cost)', 'Definisi', 'Manfaat potensial yang dikorbankan saat satu alternatif dipilih dibandingkan alternatif terbaik lainnya.'],
        ['Biaya Tertanam (Sunk Cost)', 'Prinsip', 'Biaya masa lalu yang telah terjadi dan tidak dapat diubah oleh keputusan apapun di masa depan; selalu TIDAK RELEVAN dalam keputusan.']
      ]},
      { tm: 2, topic: 'Perilaku Biaya & Analisis CVP', cards: [
        ['Metode High-Low untuk Mixed Cost', 'Kalkulasi', 'Tarif Variabel (b) = (Biaya Tertinggi - Biaya Terendah) / (Aktivitas Tertinggi - Aktivitas Terendah). Biaya Tetap (a) = Total Biaya - (b × Aktivitas).'],
        ['Contribution Margin (CM)', 'Definisi', 'Selisih antara Pendapatan Penjualan dengan Total Biaya Variabel; jumlah yang tersedia untuk menutup Biaya Tetap dan menghasilkan Laba Operasi.'],
        ['Titik Impas (Break-Even Point / BEP)', 'Kalkulasi', 'BEP Unit = Total Biaya Tetap / CM per unit. BEP Rupiah = Total Biaya Tetap / CM Ratio.'],
        ['Penjualan untuk Target Laba', 'Kalkulasi', 'Unit Target = (Total Biaya Tetap + Target Laba Operasi) / CM per unit.'],
        ['Margin of Safety (MoS)', 'Definisi', 'Kelebihan penjualan yang dianggarkan di atas penjualan titik impas; menunjukkan batas penurunan penjualan sebelum perusahaan menderita rugi.'],
        ['Degree of Operating Leverage (DOL)', 'Formula', 'DOL = Total Contribution Margin / Laba Bersih Operasi. Mengukur sensitivitas persentase perubahan laba terhadap persentase perubahan penjualan.']
      ]},
      { tm: 3, topic: 'Variable Costing & Pelaporan Segmen', cards: [
        ['Perlakuan BOP Tetap pada Variable Costing', 'Regulasi', 'BOP Tetap diperlakukan sebagai BIAYA PERIODE seutuhnya dan langsung dibebankan pada periode terjadinya.'],
        ['Perlakuan BOP Tetap pada Absorption Costing', 'Regulasi', 'BOP Tetap diperlakukan sebagai BIAYA PRODUK dan dikapitalisasi ke dalam persediaan barang di neraca.'],
        ['Kondisi Produksi > Penjualan', 'Analisis', 'Laba Bersih Absorption Costing AKAN LEBIH BESAR daripada Variable Costing karena sebagian BOP tetap tertahan di persediaan akhir.'],
        ['Kondisi Penjualan > Produksi', 'Analisis', 'Laba Bersih Variable Costing AKAN LEBIH BESAR daripada Absorption Costing karena persediaan awal melepaskan BOP tetap masa lalu ke HPP.'],
        ['Segment Margin', 'Kalkulasi', 'Segment Margin = Contribution Margin Segmen - Biaya Tetap yang Dapat Ditelusuri (Traceable Fixed Costs).'],
        ['Alokasi Common Fixed Costs', 'Aturan', 'Biaya tetap bersama tidak boleh dialokasikan secara arbiter ke segmen individual karena akan mendistorsi profitabilitas divisi yang sesungguhnya.']
      ]},
      { tm: 4, topic: 'Activity-Based Management (ABM)', cards: [
        ['Hierarki Aktivitas Unit-Level', 'Klasifikasi', 'Aktivitas yang dilakukan setiap kali satu unit produk diproduksi (misal: listrik mesin pabrik, konsumsi bahan baku).'],
        ['Hierarki Aktivitas Batch-Level', 'Klasifikasi', 'Aktivitas yang dilakukan setiap kali satu batch produk diproses, terlepas dari jumlah unit per batch (misal: setup mesin, inspeksi sampel).'],
        ['Hierarki Aktivitas Product-Level', 'Klasifikasi', 'Aktivitas yang mendukung lini produk tertentu tanpa memedulikan volume produksi (misal: perancangan desain teknik produk, sertifikasi).'],
        ['Hierarki Aktivitas Facility-Level', 'Klasifikasi', 'Aktivitas penopang seluruh fasilitas pabrik secara umum (misal: pemeliharaan gedung, satpam, asuransi pabrik).'],
        ['Aktivitas Bernilai Tambah (Value-Added)', 'Definisi', 'Aktivitas yang mengubah bentuk produk atau layanan sehingga pelanggan bersedia membayar untuk nilai tersebut.'],
        ['Kurva Paus (Whale Curve)', 'Konsep', 'Grafik yang menunjukkan bahwa 20% pelanggan menghasilkan hingga 150-200% laba, sementara sebagian pelanggan lainnya mengikis laba secara signifikan.']
      ]},
      { tm: 5, topic: 'Master Budgeting & Perencanaan Laba', cards: [
        ['Titik Awal Master Budget', 'Prosedur', 'Anggaran Penjualan (Sales Budget) merupakan titik awal utama karena seluruh anggaran produksi, pembelian, dan kas bergantung pada volume penjualan.'],
        ['Formula Anggaran Produksi', 'Kalkulasi', 'Unit Diproduksi = Target Penjualan Unit + Target Persediaan Akhir Barang Jadi - Persediaan Awal Barang Jadi.'],
        ['Formula Pembelian Bahan Baku Langsung', 'Kalkulasi', 'Bahan Baku Dibeli = Kebutuhan Produksi + Target Persediaan Akhir Bahan - Persediaan Awal Bahan Baku.'],
        ['Empat Seksi Utama Anggaran Kas', 'Struktur', '(1) Seksi Penerimaan Kas, (2) Seksi Pengeluaran Kas, (3) Seksi Kelebihan/Kekurangan Kas, dan (4) Seksi Pembiayaan (Pinjaman/Pelunasan).'],
        ['Anggaran Fleksibel vs Statis', 'Konsep', 'Anggaran Statis disusun untuk satu tingkat aktivitas tertentu; Anggaran Fleksibel disesuaikan dengan tingkat aktivitas aktual yang terjadi.'],
        ['Budgetary Slack (Kelonggaran Anggaran)', 'Etika', 'Praktik manipulasi manajer yang sengaja merendahkan proyeksi pendapatan atau melebihkan anggaran biaya agar target mudah dicapai.']
      ]},
      { tm: 6, topic: 'Biaya Standar & Analisis Varians', cards: [
        ['Materials Price Variance (MPV)', 'Kalkulasi', 'MPV = AQ (Kuantitas Dibeli) × (AP - SP). Favorable jika harga aktual lebih rendah dari standar.'],
        ['Materials Quantity Variance (MQV)', 'Kalkulasi', 'MQV = SP (Harga Standar) × (AQ Digunakan - SQ Standar untuk Output Aktual).'],
        ['Labor Rate Variance (LRV)', 'Kalkulasi', 'LRV = AH (Jam Kerja Aktual) × (AR - SR). Menilai efisiensi tarif upah per jam kerja.'],
        ['Labor Efficiency Variance (LEV)', 'Kalkulasi', 'LEV = SR (Tarif Upah Standar) × (AH - SH Jam Standar untuk Output Aktual).'],
        ['Varians Pengeluaran BOP Variabel', 'Kalkulasi', 'V-MOH Spending Variance = AH × (Aktual V-MOH Rate - Standar V-MOH Rate).'],
        ['Varians Volume BOP Tetap', 'Kalkulasi', 'Fixed Overhead Volume Variance = BOP Tetap Anggaran - BOP Tetap yang Dibebankan (SH × Tarif Standar Tetap). Mengukur utilisasi kapasitas pabrik.']
      ]},
      { tm: 7, topic: 'Review Pra-UTS Akuntansi Manajemen', cards: [
        ['Sales Mix dalam Analisis CVP Multi-Produk', 'Kalkulasi', 'Proporsi relatif dari total unit produk yang terjual; BEP dihitung menggunakan Weighted-Average Contribution Margin per unit.'],
        ['Dampak Penurunan Biaya Tetap terhadap BEP', 'Analisis', 'Penurunan Biaya Tetap akan menurunkan kuantitas titik impas (BEP) dan memperluas Margin of Safety (MoS).'],
        ['Perbedaan HPP Absorption vs Variable', 'Kalkulasi', 'HPP Absorption mencakup alokasi BOP Tetap; HPP Variable hanya mencakup biaya manufaktur variabel (DM, DL, VMOH).'],
        ['Tanggung Jawab Pembelian atas Varians MPV', 'Evaluasi', 'Departemen Pembelian bertanggung jawab atas MPV; Departemen Produksi bertanggung jawab atas MQV.'],
        ['Jadwal Penerimaan Kas dari Piutang', 'Kalkulasi', 'Dihitung berdasarkan persentase penerimaan tunai bulan berjalan dan persentase penagihan piutang dari bulan-bulan sebelumnya.'],
        ['Kunci Sukses Ujian Tengah Semester (UTS)', 'Tips', 'Perhatikan perbedaan unit diproduksi vs unit terjual; jangan gunakan biaya tetap dalam keputusan diferensial jika biaya tersebut tidak berubah.']
      ]},
      { tm: 8, topic: 'Desentralisasi & Balanced Scorecard', cards: [
        ['Empat Pusat Pertanggungjawaban', 'Klasifikasi', '(1) Pusat Biaya (Cost Center), (2) Pusat Pendapatan (Revenue Center), (3) Pusat Laba (Profit Center), dan (4) Pusat Investasi (Investment Center).'],
        ['Return on Investment (ROI)', 'Kalkulasi', 'ROI = Laba Operasi / Rata-Rata Aset Operasi = Margin Laba (Laba/Penjualan) × Perputaran Aset (Penjualan/Aset).'],
        ['Residual Income (RI)', 'Kalkulasi', 'RI = Laba Bersih Operasi - (Rata-rata Aset Operasi × Minimum Required Rate of Return).'],
        ['Keunggulan RI Dibandingkan ROI', 'Analisis', 'RI menghindari masalah sub-optimasi: manajer termotivasi menerima seluruh proyek yang menghasilkan return di atas biaya modal perusahaan.'],
        ['Economic Value Added (EVA)', 'Konsep', 'EVA = NOPAT - (Total Modal Yang Digunakan × Weighted Average Cost of Capital / WACC).'],
        ['Empat Perspektif Balanced Scorecard', 'Struktur', '(1) Perspektif Keuangan, (2) Perspektif Pelanggan, (3) Perspektif Proses Bisnis Internal, dan (4) Perspektif Pembelajaran & Pertumbuhan.']
      ]},
      { tm: 9, topic: 'Transfer Pricing (Harga Transfer)', cards: [
        ['Tujuan Sistem Harga Transfer', 'Konsep', 'Mendorong evaluasi kinerja divisi otonom secara adil, menyelaraskan tujuan divisi dengan korporasi (goal congruence), dan menjaga otonomi manajer.'],
        ['Batas Bawah Harga Transfer (Floor Price)', 'Aturan', 'Harga Transfer Minimum (Divisi Penjual) = Biaya Variabel per unit + Opportunity Cost per unit.'],
        ['Opportunity Cost saat Kapasitas Menganggur', 'Analisis', 'Jika penjual memiliki kapasitas menganggur (idle capacity), Opportunity Cost = 0; batas bawah sama dengan Biaya Variabel per unit.'],
        ['Opportunity Cost saat Kapasitas Penuh', 'Analisis', 'Jika penjual pada kapasitas penuh, Opportunity Cost = Contribution Margin penjualan luar; batas bawah sama dengan Harga Pasar Luar.'],
        ['Batas Atas Harga Transfer (Ceiling Price)', 'Aturan', 'Harga Transfer Maksimum (Divisi Pembeli) = Harga Beli yang ditawarkan pemasok pasar luar.'],
        ['Transfer Pricing Internasional & Arbitrase Pajak', 'Strategi', 'Korporasi multinasional menetapkan harga transfer untuk mengalihkan laba ke anak perusahaan di negara dengan tarif pajak penghasilan terendah.']
      ]},
      { tm: 10, topic: 'Analisis Diferensial & Keputusan Taktis', cards: [
        ['Dua Kriteria Biaya Relevan', 'Konsep', '(1) Biaya akan terjadi di masa depan, dan (2) Biaya berbeda di antara alternatif keputusan yang sedang dipertimbangkan.'],
        ['Keputusan Membuat atau Membeli (Make-or-Buy)', 'Analisis', 'Bandingkan Biaya yang Dapat Dihindari (Avoidable Cost) jika membeli dari luar dengan Harga Beli Pemasok Eksternal.'],
        ['Keputusan Pesanan Khusus (Special Order)', 'Aturan', 'Diterima jika tambahan pendapatan melebihi tambahan biaya variabel (inkremental), asalkan perusahaan memiliki kapasitas menganggur dan tidak merusak pasar reguler.'],
        ['Keputusan Mempertahankan atau Menutup Lini Produk', 'Aturan', 'Lini produk harus dipertahankan selama Segment Margin bernilai POSITIF, karena menutup lini produk tidak menghilangkan biaya tetap bersama.'],
        ['Alokasi Sumber Daya Terbatas (Constrained Resource)', 'Strategi', 'Prioritaskan produk yang menghasilkan Contribution Margin per Unit Sumber Daya Terbatas (misal: CM per jam mesin) paling tinggi.'],
        ['Keputusan Jual Langsung vs Proses Lanjut', 'Aturan', 'Biaya bersama (Joint Cost) sebelum titik pisah (Split-off) selalu TIDAK RELEVAN; proses lanjut jika tambahan pendapatan > biaya proses tambahan.']
      ]},
      { tm: 11, topic: 'Penetapan Harga & Target Costing', cards: [
        ['Target Costing (Biaya Target)', 'Konsep', 'Penetapan biaya berbasis pasar: Target Cost = Antisipasi Harga Jual Pasar Kompetitif dikurangi Target Laba Operasi yang Diharapkan.'],
        ['Cost-Plus Pricing', 'Formula', 'Harga Jual = Basis Biaya + (Basis Biaya × Persentase Markup).'],
        ['Markup Persentase Berbasis Absorption Costing', 'Kalkulasi', 'Markup % = (Target Laba + Beban Penjualan & Administrasi) / Total Biaya Manufaktur.'],
        ['Value Engineering (Rekayasa Nilai)', 'Prosedur', 'Analisis sistematis selama tahap desain untuk memangkas biaya produk hingga mencapai Target Cost tanpa mengorbankan fungsi dan kualitas.'],
        ['Life-Cycle Costing (Biaya Siklus Hidup)', 'Konsep', 'Pelacakan seluruh biaya produk sepanjang siklus hidupnya: R&D, desain, produksi, pemasaran, dukungan purna jual, hingga pembuangan akhir.'],
        ['Peak-Load Pricing', 'Strategi', 'Mengenakan harga lebih tinggi saat periode permintaan puncak dan kapasitas mendekati batas maksimum (misal: tarif listrik hotel atau pesawat).']
      ]},
      { tm: 12, topic: 'Investasi Modal (Capital Budgeting)', cards: [
        ['Payback Period', 'Definisi', 'Jangka waktu yang dibutuhkan untuk mengembalikan pengeluaran investasi awal dari arus kas masuk bersih proyek; mengabaikan Time Value of Money.'],
        ['Accounting Rate of Return (ARR)', 'Formula', 'ARR = Estimasi Laba Akrual Bersih Tahunan Rata-Rata / Nilai Investasi Rata-Rata Proyek.'],
        ['Net Present Value (NPV)', 'Regulasi', 'Selisih antara Nilai Sekarang (PV) arus kas masa depan dengan pengeluaran investasi awal. Proyek diterima jika NPV ≥ 0.'],
        ['Internal Rate of Return (IRR)', 'Definisi', 'Tingkat diskonto yang menghasilkan NPV tepat sama dengan NOL. Proyek diterima jika IRR ≥ Hurdle Rate (biaya modal).'],
        ['Profitability Index (PI)', 'Formula', 'PI = Nilai Sekarang Arus Kas Masa Depan / Investasi Awal. Digunakan untuk meranking proyek investasi yang saling bersaing saat dana terbatas.'],
        ['Depreciation Tax Shield (Perisai Pajak Penyusutan)', 'Kalkulasi', 'Arus kas masuk riil dari penghematan pajak akibat beban depresiasi non-kas: Penghematan Kas = Beban Depresiasi × Tarif Pajak Penghasilan.']
      ]},
      { tm: 13, topic: 'Lean Operations, JIT, & Biaya Kualitas', cards: [
        ['Filosofi Lean Manufacturing', 'Konsep', 'Pendekatan eliminasi pemborosan (waste/Muda) secara konsisten dan perbaikan berkelanjutan (Kaizen) untuk memaksimalkan nilai pelanggan.'],
        ['Sistem Tarik Just-in-Time (Pull System)', 'Mekanisme', 'Bahan baku hanya dibeli dan barang hanya diproduksi saat ada pesanan nyata dari proses hilir atau pelanggan akhir.'],
        ['Theory of Constraints (TOC)', 'Strategi', 'Mengidentifikasi bottleneck (kendala paling sempit yang membatasi output pabrik) dan mengoptimalkan ritme seluruh operasi sesuai kecepatan kendala tersebut.'],
        ['Biaya Pencegahan Kualitas (Prevention Costs)', 'Kategori', 'Biaya untuk mencegah timbulnya cacat: pelatihan mutu karyawan, rekayasa desain produk anti-salah (Poka-Yoke), evaluasi kualifikasi pemasok.'],
        ['Biaya Penilaian Kualitas (Appraisal Costs)', 'Kategori', 'Biaya untuk menguji dan menginspeksi produk sebelum dikirim: pengujian laboratorium, kalibrasi alat ukur, inspeksi lini produksi.'],
        ['Kegagalan Internal vs Eksternal', 'Perbandingan', 'Kegagalan Internal terjadi sebelum produk dikirim (Scrap, Rework, Downtime). Kegagalan Eksternal terjadi setelah barang di tangan konsumen (Garansi, Recall, Tuntutan).']
      ]},
      { tm: 14, topic: 'Environmental Management Accounting (EMA) & Review UAS', cards: [
        ['Definisi Environmental Management Accounting (EMA)', 'Definisi', 'Identifikasi, pengumpulan, analisis, dan penggunaan informasi biaya lingkungan (moneter) dan aliran energi/material (fisik) untuk pengambilan keputusan manajerial.'],
        ['Physical EMA (P-EMA)', 'Dimensi', 'Pelacakan aliran fisik: input bahan baku, air, dan energi versus output produk jadi, limbah beracun, dan emisi gas rumah kaca (CO2e).'],
        ['Monetary EMA (M-EMA)', 'Dimensi', 'Pelacakan biaya moneter dampak lingkungan: biaya kepatuhan amdal, pengolahan limbah B3, denda regulasi polusi, dan penghematan inisiatif sirkular.'],
        ['Integrasi ESG & Akuntansi Manajemen', 'Tren', 'Penyelarasan metrik kinerja operasional pabrik dengan target Environmental, Social, and Governance (ESG) dan standar pelaporan ISSB S1/S2.'],
        ['Materi Dominan Ujian Akhir Semester (UAS)', 'Fokus', 'Kuasai Capital Budgeting (NPV/IRR/Tax shield), Analisis Biaya Relevan Keputusan Taktis, Transfer Pricing, dan Evaluasi Desentralisasi (ROI/RI/EVA).'],
        ['Strategi Pengerjaan Soal Kasus UAS', 'Tips', 'Tulis langkah perhitungan secara terstruktur, nyatakan asumsi secara eksplisit, dan berikan rekomendasi manajerial yang solutif di bagian akhir jawaban.']
      ]}
    ]
  },
  AKS201: {
    name: 'Akuntansi Sektor Publik',
    tms: [
      { tm: 1, topic: 'Karakteristik Organisasi Sektor Publik', cards: [
        ['Tujuan Utama Sektor Publik', 'Konsep', 'Pelayanan publik (public service) dan kesejahteraan masyarakat, bukan memaksimalkan laba keuangan.'],
        ['Sumber Pendanaan Sektor Publik', 'Definisi', 'Pajak, retribusi, pinjaman negara, subsidi, dan hibah; bukan dari setoran modal pemegang saham.'],
        ['Struktur Akuntabilitas Publik', 'Mekanisme', 'Akuntabilitas vertikal (kepada otoritas yang lebih tinggi) dan akuntabilitas horizontal (kepada masyarakat luas / publik).'],
        ['Basis Kas Menuju Akrual (Cash toward Accrual)', 'Regulasi', 'Basis transisi SAP sebelum 2010 di mana pendapatan dan belanja dicatat basis kas, sementara aset dan kewajiban dicatat basis akrual.'],
        ['Basis Akrual Penuh (PP 71/2010)', 'Standar', 'Seluruh pendapatan, beban, aset, kewajiban, dan ekuitas diakui pada saat terjadinya transaksi, terlepas dari saat kas diterima atau dibayarkan.'],
        ['Peran Anggaran di Sektor Publik', 'Prinsip', 'Anggaran di sektor publik merupakan dokumen hukum (Undang-Undang/Perda) yang mengikat dan membatasi otoritas pengeluaran pemerintah.']
      ]},
      { tm: 2, topic: 'Regulasi Sektor Publik & ISAK 35', cards: [
        ['Ruang Lingkup ISAK 35', 'Standar', 'Interpretasi Standar Akuntansi Keuangan untuk Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba (Yayasan, Ormas, LSM).'],
        ['Empat Laporan Keuangan ISAK 35', 'Struktur', '(1) Laporan Posisi Keuangan, (2) Laporan Penghasilan Komprehensif, (3) Laporan Perubahan Aset Neto, dan (4) Laporan Arus Kas.'],
        ['Klasifikasi Aset Neto ISAK 35', 'Klasifikasi', 'Aset neto diklasifikasikan menjadi dua: (1) Aset Neto Tanpa Pembatasan dari Pemberi Sumber Daya, dan (2) Aset Neto Dengan Pembatasan.'],
        ['Pembeda Utama ISAK 35 vs PSAK Entitas Bisnis', 'Konsep', 'Tidak adanya kepemilikan saham yang dapat dialihkan dan tidak adanya pembagian dividen atas sisa hasil usaha.'],
        ['UU Pengelolaan Keuangan Negara', 'Hukum', 'Paket regulasi keuangan negara Indonesia: UU No. 17/2003, UU No. 1/2004 (Perbendaharaan), dan UU No. 15/2004 (Pemeriksaan).'],
        ['Prinsip Universalitas Anggaran', 'Prinsip', 'Semua pendapatan dan belanja negara harus dimasukkan dalam anggaran dan disajikan secara bruto tanpa kompensasi netto.']
      ]},
      { tm: 3, topic: 'Kerangka Regulasi Keuangan Negara & SAP', cards: [
        ['PP No. 71 Tahun 2010', 'Regulasi', 'Landasan hukum Standar Akuntansi Pemerintahan (SAP) Berbasis Akrual yang berlaku wajib bagi seluruh Pemerintah Pusat dan Daerah.'],
        ['Struktur Lampiran PP 71/2010', 'Struktur', 'Lampiran I berisi Pernyataan Standar Akuntansi Pemerintahan (PSAP) Berbasis Akrual; Lampiran II berisi basis kas menuju akrual (masa transisi).'],
        ['Peran KSAP (Komite Standar Akuntansi Pemerintahan)', 'Kelembagaan', 'Lembaga independen yang dibentuk oleh Presiden untuk menyusun dan mengembangkan Standar Akuntansi Pemerintahan.'],
        ['Asas Akuntabilitas Keuangan Negara', 'Hukum', 'Setiap rupiah uang negara yang dibelanjakan harus dapat dipertanggungjawabkan manfaat dan efektivitasnya kepada rakyat melalui DPR/DPRD.'],
        ['Pengguna Anggaran (PA) vs Bendahara Umum Negara (BUN)', 'Peran', 'Menteri/Pimpinan Lembaga adalah Pengguna Anggaran (PA); Menteri Keuangan adalah Bendahara Umum Negara (BUN).'],
        ['Batas Waktu Penyampaian LKPP Audited', 'Regulasi', 'Presiden menyampaikan RUU Pertanggungjawaban APBN (LKPP) kepada DPR paling lambat 6 bulan setelah tahun anggaran berakhir.']
      ]},
      { tm: 4, topic: 'Perencanaan & Sistem Penganggaran', cards: [
        ['Siklus Anggaran Pemerintah', 'Tahapan', '(1) Perencanaan & Penyusunan (RPJMN/RKP), (2) Pembahasan & Penetapan (APBN), (3) Pelaksanaan (DIPA), (4) Pelaporan & Audit.'],
        ['Pendekatan Anggaran Tradisional (Line-Item)', 'Karakteristik', 'Penyusunan anggaran berbasis mata anggaran rincian pos belanja dan bersifat inkremental (incremental budgeting); mengabaikan kinerja.'],
        ['Anggaran Berbasis Kinerja (Performance-Based)', 'Karakteristik', 'Mengaitkan alokasi pendanaan pengeluaran secara langsung dengan capaian output dan outcome program kerja.'],
        ['Zero-Based Budgeting (ZBB)', 'Konsep', 'Setiap program dan mata anggaran dievaluasi dari nol (dasar nol) setiap tahun tanpa berasumsi bahwa anggaran tahun lalu otomatis berlanjut.'],
        ['Medium-Term Expenditure Framework (MTEF / KPJM)', 'Konsep', 'Kerangka Pengeluaran Jangka Menengah: proyeksi anggaran belanja multi-tahun (3-5 tahun ke depan) untuk menjamin kesinambungan fiskal.'],
        ['Klasifikasi Anggaran Pemerintah', 'Struktur', 'Anggaran belanja diklasifikasikan menurut: (1) Organisasi, (2) Fungsi, dan (3) Jenis Belanja (Ekonomi).']
      ]},
      { tm: 5, topic: 'Teknik & Basis Akuntansi Sektor Publik', cards: [
        ['Akuntansi Dana (Fund Accounting)', 'Definisi', 'Sistem akuntansi yang memisahkan sumber daya keuangan ke dalam kesatuan dana independen (funds) yang dibatasi oleh aturan hukum atau mandat khusus.'],
        ['General Fund vs Special Revenue Fund', 'Klasifikasi', 'General Fund untuk operasi rutin umum pemerintah. Special Revenue Fund untuk pendapatan khusus yang dibatasi penggunaan legalnya (misal: dana perbaikan jalan).'],
        ['Akuntansi Anggaran (Budgetary Accounting)', 'Mekanisme', 'Mencatat otorisasi pagu anggaran ke dalam buku besar akuntansi untuk memantau sisa pagu belanja agar tidak terlampaui.'],
        ['Akuntansi Komitmen (Commitment Accounting)', 'Mekanisme', 'Mencatat pemesanan barang atau kontrak proyek sebagai komitmen pengurang anggaran sebelum barang diterima atau dibayar.'],
        ['Jurnal Penyelaras SAP Akrual', 'Jurnal', 'Pemerintah membukukan transaksi secara dualistis: Jurnal Finansial (LO & Neraca) dan Jurnal Anggaran (LRA berbasis kas).'],
        ['Single Entry vs Double Entry', 'Sejarah', 'Akuntansi pemerintahan modern telah beralih sepenuhnya dari single entry (pencatatan buku kas tunggal) ke double entry akrual.']
      ]},
      { tm: 6, topic: 'Laporan Keuangan Pemerintah Berbasis Akrual', cards: [
        ['Tujuh Komponen Laporan Keuangan SAP Akrual', 'Struktur', '(1) LRA, (2) Laporan Perubahan SAL, (3) Neraca, (4) Laporan Operasional (LO), (5) Laporan Arus Kas, (6) LPE, (7) Catatan atas Laporan Keuangan (CaLK).'],
        ['Laporan Realisasi Anggaran (LRA)', 'Fungsi', 'Menyajikan perbandingan pagu anggaran dengan realisasi Pendapatan-LRA, Belanja, dan Pembiayaan berbasis KAS.'],
        ['Laporan Operasional (LO)', 'Fungsi', 'Menyajikan pendapatan operasional, beban operasional, dan surplus/defisit operasional berbasis AKRUAL selama satu periode.'],
        ['Perbedaan Belanja (LRA) vs Beban (LO)', 'Konsep', 'Belanja adalah pengeluaran kas dari Rekening Kas Umum Negara/Daerah. Beban adalah penurunan manfaat ekonomi atau potensi jasa dalam periode pelaporan.'],
        ['Laporan Perubahan Saldo Anggaran Lebih (LP-SAL)', 'Struktur', 'Menyajikan kenaikan/penurunan SAL yang berasal dari SilPA/SiKPA tahun berjalan dan koreksi pembukuan kas.'],
        ['Ekuitas pada Neraca Pemerintah', 'Penyajian', 'Disajikan dalam baris tunggal (Ekuitas) yang merupakan selisih antara Total Aset dengan Total Kewajiban; tidak ada pemisahan modal saham.']
      ]},
      { tm: 7, topic: 'Review Pra-UTS Akuntansi Sektor Publik', cards: [
        ['Pembeda SilPA vs SiKPA pada LRA', 'Definisi', 'SilPA (Sisa Lebih Pembiayaan Anggaran) terjadi jika realisasi penerimaan > pengeluaran. SiKPA (Sisa Kurang) jika penerimaan < pengeluaran.'],
        ['Jurnal Korolari (Legacy) vs Jurnal Akrual', 'Perbandingan', 'Jurnal korolari adalah mekanisme lama di era kas menuju akrual; di PP 71/2010 telah digantikan oleh pencatatan Jurnal Finansial berpasangan.'],
        ['PSAP 01: Penyajian Laporan Keuangan', 'Standar', 'Mengatur struktur, komponen minimum, dan prinsip penyajian wajar laporan keuangan pemerintah pusat dan daerah.'],
        ['Kriteria Kapitalisasi Aset Tetap Pemerintah', 'Aturan', 'Barang belanja modal dikapitalisasi ke Neraca jika memenuhi batas minimum nilai perolehan (capitalization threshold) dan berumur > 12 bulan.'],
        ['Kewajiban Pengungkapan CaLK', 'Fungsi', 'CaLK menyajikan penjelasan naratif, rincian angka laporan keuangan, dasar hukum, serta kepatuhan pada regulasi keuangan negara.'],
        ['Checklist Kesiapan UTS ASP', 'Tips', 'Pahami perbedaan akun-akun LRA (akhiran -LRA) dengan akun-akun LO (akhiran -LO), serta alur pengakuan pendapatan pajak dan transfer dana.']
      ]},
      { tm: 8, topic: 'Sistem Akuntansi Pemerintah Pusat (SAPP) & Daerah (SAPD)', cards: [
        ['Sistem Akuntansi Pemerintah Pusat (SAPP)', 'Struktur', 'Terdiri dari: SiAP (Sistem Akuntansi Bendahara Umum Negara) dan SAI (Sistem Akuntansi Instansi pada tiap Kementerian/Lembaga).'],
        ['Aplikasi SPAN & SAKTI di Kemenkeu', 'TI Pemerintah', 'Sistem Perbendaharaan dan Anggaran Negara (SPAN) dan SAKTI mengintegrasikan proses penganggaran, komitmen, pembayaran, dan akuntansi secara real-time.'],
        ['Permendagri No. 77 Tahun 2020', 'Regulasi', 'Pedoman Teknis Pengelolaan Keuangan Daerah terbaru yang mengatur siklus APBD, penatausahaan kas, dan sistem akuntansi pemerintah daerah.'],
        ['Pejabat Pengelola Keuangan Daerah (PPKD)', 'Peran', 'Kepala BPKAD yang bertindak sebagai Bendahara Umum Daerah (BUD) dan menyusun laporan keuangan konsolidasian Pemda.'],
        ['Satuan Kerja Perangkat Daerah (SKPD)', 'Peran', 'Entitas akuntansi di daerah (Dinas, Badan, Kantor) yang dipimpin Pengguna Anggaran (PA) dan wajib menyusun laporan keuangan unit kerja.'],
        ['Hubungan Kantor Pusat - Kantor Cabang (HO-BO)', 'Mekanisme', 'Transaksi antara PPKD dan SKPD dicatat menggunakan akun timbal-balik (reciprocal accounts): Rekening Koran (RK) PPKD dan RK SKPD.']
      ]},
      { tm: 9, topic: 'Pengukuran Kinerja Pemerintah & Value for Money (3E)', cards: [
        ['Konsep Value for Money (3E)', 'Definisi', 'Tiga indikator utama kinerja sektor publik: Ekonomis (kehematan biaya), Efisien (rasio output/input), dan Efektif (capaian target outcome).'],
        ['Definisi Ekonomis (Economy)', 'Konsep', 'Memperoleh input (sumber daya manusia, material, peralatan) dengan kualitas terbaik pada harga perolehan yang paling wajar/hemat.'],
        ['Definisi Efisiensi (Efficiency)', 'Konsep', 'Memaksimalkan output yang dihasilkan dari jumlah input tertentu, atau meminimalkan input untuk memproduksi tingkat output yang ditargetkan.'],
        ['Definisi Efektivitas (Effectiveness)', 'Konsep', 'Tingkat keberhasilan pencapaian tujuan dan dampak nyata (outcome) dari program terhadap kebutuhan masyarakat luas.'],
        ['Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)', 'Regulasi', 'Sistem terintegrasi dari perencanaan kinerja, pengukuran kinerja, pelaporan kinerja (LAKIP), hingga evaluasi akuntabilitas instansi pemerintah.'],
        ['Indikator Kinerja Utama (IKU / KPI)', 'Alat', 'Ukuran keberhasilan kinerja kunci yang ditetapkan instansi untuk mengukur target prioritas organisasi pada perjanjian kinerja tahunan.']
      ]},
      { tm: 10, topic: 'Audit Sektor Publik: APIP & BPK RI', cards: [
        ['Peran BPK RI (Badan Pemeriksa Keuangan)', 'Konstitusi', 'Lembaga negara independen yang berwenang memeriksa pengelolaan dan tanggung jawab keuangan negara (Pasal 23E UUD 1945).'],
        ['Aparat Pengawasan Intern Pemerintah (APIP)', 'Internal Audit', 'Inspektorat Jenderal Kementerian, BPKP, dan Inspektorat Daerah yang bertugas melakukan pengawasan dan pembinaan intern.'],
        ['Tiga Jenis Pemeriksaan BPK RI', 'Standar', '(1) Pemeriksaan Keuangan (opini atas LK), (2) Pemeriksaan Kinerja (efektivitas program), dan (3) Pemeriksaan dengan Tujuan Tertentu (PDTT/investigasi).'],
        ['Empat Jenis Opini BPK atas Laporan Keuangan', 'Standar', '(1) Wajar Tanpa Pengecualian (WTP), (2) Wajar Dengan Pengecualian (WDP), (3) Tidak Wajar (Adverse), dan (4) Menolak Memberikan Opini (Disclaimer).'],
        ['Standar Pemeriksaan Keuangan Negara (SPKN)', 'Regulasi', 'Peraturan BPK No. 1/2017 yang menjadi panduan baku bagi seluruh auditor dalam melaksanakan penugasan pemeriksaan keuangan negara.'],
        ['Tindak Lanjut Hasil Pemeriksaan (TLHP)', 'Kewajiban', 'Pejabat yang diperiksa wajib menindaklanjuti rekomendasi laporan pemeriksaan BPK dalam waktu paling lambat 60 hari.']
      ]},
      { tm: 11, topic: 'Akuntansi Nirlaba, Parpol & Keuangan Desa', cards: [
        ['Akuntansi Dana Desa (UU No. 6/2014)', 'Regulasi', 'Pengelolaan keuangan dan pendapatan desa (APBDesa) bersumber dari Dana Desa (APBN), Alokasi Dana Desa (APBD), dan PADes.'],
        ['Aplikasi SISKEUDES', 'Sistem Desa', 'Sistem Informasi Keuangan Desa yang dikembangkan BPKP dan Kemendagri untuk memudahkan tata kelola dan pelaporan keuangan desa.'],
        ['Akuntansi Partai Politik (UU No. 2/2011)', 'Regulasi', 'Parpol wajib menyusun laporan pertanggungjawaban penerimaan dan penggunaan bantuan keuangan negara/daerah yang diaudit oleh BPK.'],
        ['Transparansi Donasi Politik', 'Aturan', 'Partai politik dilarang menerima sumbangan dari pihak anonim, BUMN, atau asing, dan wajib membatasi batas sumbangan individu/korporasi.'],
        ['Laporan Dana Kampanye', 'Pemilu', 'Laporan Awal Dana Kampanye (LADK) dan Laporan Penerimaan dan Pengeluaran Dana Kampanye (LPPDK) yang diaudit KAP independen.'],
        ['Akuntansi Rumah Sakit Nonlaba', 'Penerapan', 'Penerapan ISAK 35 dengan pemisahan pendapatan operasional pelayanan medis, hibah bersyarat, dan donasi alat kesehatan.']
      ]},
      { tm: 12, topic: 'Pengelolaan Keuangan BLU & BLUD (PP 23/2005)', cards: [
        ['Definisi Badan Layanan Umum (BLU/BLUD)', 'Regulasi', 'Instansi di lingkungan pemerintah yang dibentuk untuk memberikan pelayanan kepada masyarakat dengan pola pengelolaan keuangan fleksibel.'],
        ['Fleksibilitas Pengelolaan Keuangan BLU', 'Keistimewaan', 'Pendapatan fungsional non-pajak (tarif layanan) dapat langsung digunakan untuk belanja operasional tanpa harus disetor dulu ke kas negara.'],
        ['Remunerasi Pegawai BLU', 'Ketentuan', 'BLU dapat memberikan remunerasi bagi pejabat dan pegawai berdasarkan tingkat tanggung jawab dan tuntutan profesionalisme.'],
        ['PSAP 13: Akuntansi Badan Layanan Umum', 'Standar', 'Standar akuntansi yang mengatur penyusunan laporan keuangan BLU yang dikonsolidasikan ke kementerian pembina.'],
        ['Contoh Entitas BLU / BLUD', 'Contoh', 'Perguruan Tinggi Negeri Badan Layanan Umum (PTN-BLU), Rumah Sakit Umum Daerah (RSUD BLUD), dan Politeknik Kedinasan.'],
        ['Ambang Batas Belanja (Flexibility Budget Threshold)', 'Mekanisme', 'Persentase toleransi pelampauan pagu belanja anggaran operasional BLU yang ditetapkan Menteri Keuangan/Kepala Daerah.']
      ]},
      { tm: 13, topic: 'Isu Kontemporer Akuntansi Sektor Publik', cards: [
        ['Sistem Pemerintahan Berbasis Elektronik (SPBE)', 'Tren', 'Penyelenggaraan tata kelola pemerintahan yang memanfaatkan teknologi informasi dan komunikasi terintegrasi (Perpres 95/2018).'],
        ['Pengadaan Barang/Jasa Elektronik (e-Catalog LKPP)', 'Transparansi', 'Digitalisasi pengadaan pemerintah melalui e-Purchasing untuk menekan celah korupsi dan meningkatkan efisiensi belanja APBN/APBD.'],
        ['Akuntansi Aset Warisan Budaya (Heritage Assets)', 'Tantangan', 'Perlakuan akuntansi atas monumen, candi, dan situs bersejarah yang sulit diukur nilai pasarnya namun wajib diungkapkan di CaLK.'],
        ['Sustainability Reporting di Sektor Publik', 'ESG Pemerintah', 'Penerapan inisiatif Green Budgeting (Penandaan Anggaran Perubahan Iklim / Climate Budget Tagging) pada APBN.'],
        ['Fraud di Sektor Publik & Pengadaan', 'Investigasi', 'Modus mark-up harga, proyek fiktif, gratifikasi tender, dan korupsi dana bantuan sosial yang ditangani oleh KPK, Kejaksaan, dan BPKP.'],
        ['Penerapan PSAK Non-Laba Internasional (IPSAS)', 'Standar Global', 'International Public Sector Accounting Standards (IPSAS) sebagai kiblat konvergensi SAP akrual Indonesia di masa depan.']
      ]},
      { tm: 14, topic: 'Review Komprehensif UAS Akuntansi Sektor Publik', cards: [
        ['Fokus Utama Ujian Akhir Semester (UAS)', 'Fokus', 'Kuasai SAPP vs SAPD (Jurnal RK-PPKD dan RK-SKPD), Akuntansi BLU/BLUD, Audit BPK (SPKN & jenis opini), serta Indikator 3E Value for Money.'],
        ['Jurnal Penerimaan Kas Pajak di Daerah', 'Jurnal', 'SKPD mencatat: Debit Kas di Bendahara Penerimaan; Kredit Pendapatan Pajak-LO (Finansial) dan Perubahan SAL (Anggaran).'],
        ['Jurnal Transfer Dana dari BUD ke SKPD', 'Jurnal', 'SKPD: Debit Kas di Bendahara Pengeluaran; Kredit RK PPKD. PPKD: Debit RK SKPD; Kredit Kas di Kas Daerah.'],
        ['Analisis Kasus Kinerja Value for Money', 'Kalkulasi', 'Hitung rasio efisiensi (Biaya Aktual / Biaya Anggaran × 100%) dan efektivitas (Output Aktual / Target Output × 100%).'],
        ['Kriteria Perolehan Opini WTP BPK', 'Kriteria', '(1) Kesesuaian dengan SAP, (2) Kecukupan pengungkapan, (3) Kepatuhan perundang-undangan, dan (4) Efektivitas sistem pengendalian intern (SPI).'],
        ['Saran Ujian Akhir Semester ASP', 'Tips', 'Pahami posisi akun dalam laporan keuangan: jangan mencampuradukkan pendapatan LRA dengan pendapatan LO pada lembar jawaban ujian.']
      ]}
    ]
  },
  MNK201: {
    name: 'Manajemen Keuangan',
    tms: [
      { tm: 1, topic: 'Tinjauan Manajemen Keuangan & Agency Theory', cards: [
        ['Tujuan Utama Manajemen Keuangan', 'Konsep', 'Memaksimalkan nilai intrinsik perusahaan dan kekayaan pemegang saham jangka panjang (Shareholder Wealth Maximization), bukan sekadar laba akuntansi jangka pendek.'],
        ['Masalah Keagenan (Agency Conflict)', 'Teori', 'Konflik kepentingan antara Pemegang Saham (Principal) dengan Manajemen (Agent) yang cenderung mengejar kepentingan pribadi (gaji, fasilitas, kekuasaan).'],
        ['Biaya Keagenan (Agency Costs)', 'Definisi', 'Biaya pemantauan (audit independen), biaya ikatan struktural (board of directors), dan residual loss akibat keputusan suboptimal manajer.'],
        ['Mekanisme Mitigasi Agency Problem', 'Solusi', 'Kompensasi opsi saham (ESOP), dewan komisaris independen, pengawasan kreditor melalui debt covenants, dan ancaman pengambilalihan bermusuhan (hostile takeover).'],
        ['Tanggung Jawab Sosial Perusahaan (CSR) & ESG', 'Modern', 'Penciptaan nilai jangka panjang mensyaratkan perusahaan memperhatikan pemangku kepentingan (stakeholders), lingkungan, dan etika tata kelola.'],
        ['Peran Pasar Finansial dalam Alokasi Modal', 'Fungsi', 'Menjembatani entitas yang memiliki surplus dana (penabung/investor) dengan entitas yang membutuhkan modal produktif (korporasi).']
      ]},
      { tm: 2, topic: 'Analisis Laporan Keuangan & DuPont System', cards: [
        ['Rasio Likuiditas: Current Ratio vs Quick Ratio', 'Formula', 'Current Ratio = Aset Lancar / Liabilitas Lancar. Quick Ratio (Acid-Test) = (Kas + Efek + Piutang) / Liabilitas Lancar (mengeluarkan persediaan).'],
        ['Rasio Solvabilitas: Debt to Equity Ratio (DER)', 'Formula', 'DER = Total Utang / Total Ekuitas. Mengukur proporsi pendanaan perusahaan yang dibiayai oleh utang dibandingkan modal sendiri.'],
        ['Rasio Profitabilitas: Return on Equity (ROE)', 'Formula', 'ROE = Laba Bersih / Total Ekuitas Pemegang Saham. Mengukur efektivitas modal pemegang saham dalam menghasilkan laba bersih.'],
        ['Dekomposisi DuPont 3 Faktor', 'Formula', 'ROE = Profit Margin (Laba Bersih / Penjualan) × Total Asset Turnover (Penjualan / Total Aset) × Equity Multiplier (Total Aset / Ekuitas).'],
        ['Equity Multiplier & Financial Leverage', 'Konsep', 'Equity Multiplier mencerminkan tingkat penggunaan utang; semakin tinggi leverage keuangan, semakin besar amplifikasi ROE (sekaligus risiko finansial).'],
        ['Cash Conversion Cycle (CCC)', 'Kalkulasi', 'CCC = Days Sales Outstanding (DSO) + Days Sales of Inventory (DSI) - Days Payable Outstanding (DPO). Mengukur durasi kas terikat dalam siklus operasi.']
      ]},
      { tm: 3, topic: 'Nilai Waktu Uang (Time Value of Money - TVM)', cards: [
        ['Prinsip Nilai Waktu Uang', 'Konsep', 'Satu rupiah hari ini lebih bernilai daripada satu rupiah di masa depan karena potensi kapasitas menghasilkan bunga (earning power).'],
        ['Future Value (Nilai Masa Depan) Majemuk', 'Formula', 'FV_n = PV × (1 + r)^n. Bunga majemuk memperhitungkan bunga atas pokok ditambah akumulasi bunga periode sebelumnya.'],
        ['Present Value (Nilai Sekarang) Diskonto', 'Formula', 'PV = FV_n / (1 + r)^n = FV_n × (1 + r)^(-n). Nilai sekarang dari arus kas masa depan yang didiskontokan pada suku bunga r.'],
        ['Ordinary Annuity vs Annuity Due', 'Perbedaan', 'Ordinary Annuity membayarkan arus kas di AKHIR periode (misal: bunga obligasi). Annuity Due membayarkan di AWAL periode (misal: sewa properti).'],
        ['Perpetuitas (Perpetuity)', 'Formula', 'PV Perpetuitas = Arus Kas Berkala (PMT) / Suku Bunga (r). Untuk dividen bertumbuh: PV = PMT_1 / (r - g).'],
        ['Effective Annual Rate (EAR)', 'Formula', 'EAR = [1 + (r_nominal / m)]^m - 1, di mana m adalah frekuensi pemajemukan per tahun. EAR lebih tinggi jika pemajemukan lebih sering.']
      ]},
      { tm: 4, topic: 'Risiko, Tingkat Pengembalian & Model CAPM', cards: [
        ['Risiko Sistematis (Market Risk) vs Spesifik (Diversifiable)', 'Konsep', 'Risiko Spesifik perusahaan dapat dieliminasi melalui diversifikasi portofolio. Risiko Sistematis (makroekonomi) tidak dapat didiversifikasi.'],
        ['Koefisien Beta (β)', 'Definisi', 'Ukuran sensitivitas atau volatilitas pengembalian saham relatif terhadap pergerakan portofolio pasar secara keseluruhan. Beta pasar = 1.0.'],
        ['Formula Capital Asset Pricing Model (CAPM)', 'Formula', 'r_i = r_RF + β_i × (r_M - r_RF), di mana r_RF adalah suku bunga bebas risiko dan (r_M - r_RF) adalah Market Risk Premium.'],
        ['Security Market Line (SML)', 'Grafik', 'Garis grafis CAPM yang menghubungkan risiko sistematis (Beta) dengan tingkat return yang diharapkan. Saham di atas SML dinilai undervalued.'],
        ['Diversifikasi Portofolio Markowitz', 'Teori', 'Penggabungan aset dengan korelasi pengembalian negatif atau rendah (< +1.0) akan menurunkan deviasi standar risiko portofolio tanpa mengorbankan return.'],
        ['Reward to Risk Ratio & Alpha Saham', 'Evaluasi', 'Alpha positif menunjukkan bahwa saham memberikan tingkat pengembalian aktual yang melebihi estimasi model CAPM berdasarkan risikonya.']
      ]},
      { tm: 5, topic: 'Biaya Modal & WACC (Weighted Average Cost of Capital)', cards: [
        ['Biaya Utang Setelah Pajak (After-Tax Cost of Debt)', 'Formula', 'r_d (after-tax) = r_d × (1 - T), di mana T adalah tarif pajak penghasilan badan. Pengurangan terjadi karena bunga utang dapat mengurangi beban pajak.'],
        ['Biaya Saham Preferen', 'Formula', 'r_p = Dividen Preferen (D_p) / Harga Bersih Penerbitan Saham Preferen (P_n). Tidak ada pengurang pajak karena dividen bukan beban fiskal.'],
        ['Biaya Ekuitas Internal (Retained Earnings)', 'Metode', 'Dihitung menggunakan: (1) Model CAPM, (2) Model Diskonto Dividen Gordon: r_s = (D_1 / P_0) + g, atau (3) Bond Yield plus Risk Premium.'],
        ['Formula Weighted Average Cost of Capital (WACC)', 'Formula', 'WACC = (w_d × r_d × (1 - T)) + (w_p × r_p) + (w_s × r_s), di mana w adalah bobot target struktur modal perusahaan.'],
        ['Biaya Emisi Saham Baru (Flotation Costs)', 'Dampak', 'Biaya perbankan investasi dan legalitas emisi saham baru menaikkan biaya ekuitas eksternal (r_e) dibandingkan ekuitas internal (r_s).'],
        ['Hurdle Rate Proyek Baru Berbasis WACC', 'Aplikasi', 'WACC korporasi hanya boleh digunakan sebagai hurdle rate untuk proyek investasi yang memiliki profil risiko yang setara dengan bisnis inti perusahaan saat ini.']
      ]},
      { tm: 6, topic: 'Penganggaran Modal (Capital Budgeting Basics)', cards: [
        ['Metode Net Present Value (NPV)', 'Aturan', 'Kriteria utama: Terima proyek jika NPV > 0. NPV mengukur secara langsung tambahan nilai kekayaan moneter yang diciptakan bagi pemegang saham.'],
        ['Metode Internal Rate of Return (IRR)', 'Aturan', 'Tingkat diskonto yang menghasilkan NPV = 0. Terima proyek jika IRR > WACC (biaya modal). Mengasumsikan arus kas diinvestasikan kembali pada tingkat IRR.'],
        ['Konflik Ranking NPV vs IRR pada Proyek Mutually Exclusive', 'Teori', 'Jika proyek saling meniadakan, keputusan SELALU mengikuti NPV tertinggi karena asumsi reinvestasi NPV pada tingkat WACC jauh lebih realistis.'],
        ['Modified Internal Rate of Return (MIRR)', 'Solusi', 'Menyelesaikan kelemahan IRR konvensional dengan mengasumsikan arus kas masuk diinvestasikan kembali pada tingkat WACC perusahaan.'],
        ['Profitability Index (PI)', 'Formula', 'PI = Nilai Sekarang Arus Kas Masuk / Investasi Awal. Proyek diterima jika PI > 1.0; sangat berguna saat menghadapi capital rationing.'],
        ['Payback Period & Discounted Payback', 'Evaluasi', 'Payback Period mengukur likuiditas dan kecepatan modal kembali; Discounted Payback memperhitungkan nilai waktu uang.']
      ]},
      { tm: 7, topic: 'Arus Kas Proyek & Analisis Risiko Investasi', cards: [
        ['Arus Kas Inkremental (Incremental Cash Flows)', 'Prinsip', 'Hanya arus kas bersih yang timbul secara langsung akibat keputusan menerima proyek yang boleh dimasukkan dalam kalkulasi capital budgeting.'],
        ['Biaya Kanibalisasi (Erosion / Cannibalization)', 'Mekanisme', 'Penurunan penjualan produk lama akibat peluncuran produk baru wajib diperhitungkan sebagai arus kas keluar proyek baru.'],
        ['Kebutuhan Modal Kerja Bersih (NWC)', 'Arus Kas', 'Investasi awal dalam persediaan dan piutang merupakan arus kas keluar di tahun ke-0, dan seluruhnya dipulihkan (recovered) di akhir umur proyek.'],
        ['Depreciation Tax Shield (Perisai Pajak Depresiasi)', 'Kalkulasi', 'Arus Kas Operasional = (Pendapatan - Beban Kas) × (1 - T) + (Depresiasi × T). Depresiasi adalah beban non-kas yang menghemat pajak tunai.'],
        ['Analisis Sensitivitas vs Analisis Skenario', 'Metode', 'Analisis Sensitivitas mengubah satu variabel kunci (misal: unit terjual) sementara yang lain tetap. Analisis Skenario mengubah beberapa variabel sekaligus (Best, Base, Worst).'],
        ['Opsi Riil (Real Options) dalam Investasi', 'Modern', 'Nilai strategis fleksibilitas manajer: Opsi Ekspansi, Opsi Pengabaian (Abandonment), dan Opsi Penundaan Waktu Investasi.']
      ]},
      { tm: 8, topic: 'Review Komprehensif Pra-UTS Manajemen Keuangan', cards: [
        ['Fokus Utama Soal Ujian Tengah Semester (UTS)', 'Fokus', 'Kuasai perhitungan TVM (amortisasi pinjaman), analisis rasio DuPont, perhitungan Beta dan WACC, serta perbandingan kelayakan proyek NPV vs IRR.'],
        ['Hubungan Terbalik Harga Obligasi dan Suku Bunga', 'Prinsip', 'Jika suku bunga pasar naik, nilai sekarang arus kas obligasi turun (harga obligasi turun di bawah nilai nominal menjadi diskonto).'],
        ['Penentuan Suku Bunga Bebas Risiko (Risk-Free Rate)', 'Aplikasi', 'Menggunakan imbal hasil (yield) Surat Utang Negara / Surat Perbendaharaan Negara (SPN) jangka panjang yang diterbitkan pemerintah.'],
        ['Sinking Fund Obligasi', 'Kreditor', 'Kewajiban emiten menyisihkan dana tunai secara berkala ke rekening perwalian untuk melunasi sebagian pokok obligasi secara teratur sebelum jatuh tempo.'],
        ['Kelemahan Analisis Rasio Keuangan', 'Keterbatasan', 'Distorsi akibat inflasi, praktik window dressing pada akhir tahun, perbedaan kebijakan akuntansi antar perusahaan, dan penggunaan data historis.'],
        ['Saran Pengerjaan Kasus Finansial UTS', 'Tips', 'Gunakan rumus TVM dengan parameter eksak; pisahkan dengan cermat arus kas operasi tahunan dari pengeluaran modal awal tahun ke-0.']
      ]},
      { tm: 9, topic: 'Struktur Modal & Teori Modigliani-Miller (MM)', cards: [
        ['Teori Modigliani-Miller Proposisi I (Tanpa Pajak - 1958)', 'Teori', 'Pada pasar modal sempurna tanpa pajak dan biaya transaksi, nilai perusahaan independen dari struktur modalnya (V_L = V_U).'],
        ['Teori MM Proposisi II (Tanpa Pajak)', 'Formula', 'Biaya ekuitas perusahaan berutang meningkat sebanding dengan rasio utang/ekuitas: r_sL = r_sU + (r_sU - r_d) × (D / E).'],
        ['Teori MM dengan Pajak Perusahaan (1963)', 'Dampak Pajak', 'Nilai perusahaan berutang lebih tinggi sebesar Nilai Sekarang Penghematan Pajak Bunga: V_L = V_U + (T_c × D). Struktur modal optimal adalah 100% utang.'],
        ['Trade-off Theory (Teori Pertukaran Struktur Modal)', 'Optimalitas', 'Struktur modal optimal tercapai saat manfaat marjinal perisai pajak bunga tepat seimbang dengan nilai sekarang biaya kesulitan keuangan (financial distress).'],
        ['Pecking Order Theory (Myers & Majluf)', 'Hierarki', 'Urutan pendanaan preferensi manajer: (1) Dana internal (laba ditahan), (2) Utang emisi baru (debt), dan terakhir (3) Emisi saham ekuitas baru.'],
        ['Biaya Kebangkrutan Langsung vs Tidak Langsung', 'Risiko', 'Biaya langsung: biaya legal, akuntan pengadilan pailit. Biaya tidak langsung: hilangnya pelanggan, pemasok mencabut kredit dagang, dan kepergian karyawan kunci.']
      ]},
      { tm: 10, topic: 'Kebijakan Dividen & Pembelian Kembali Saham', cards: [
        ['Teori Ketidakrelevanan Dividen (MM 1961)', 'Teori', 'Pada pasar sempurna, nilai perusahaan ditentukan oleh kapasitas menghasilkan laba dari asetnya, bukan bagaimana laba dibagi antara dividen dan saldo laba.'],
        ['Bird-in-the-Hand Theory (Gordon & Lintner)', 'Teori', 'Investor memandang dividen tunai saat ini lebih pasti dan kurang berisiko dibanding potensi capital gain masa depan; dividen tinggi menaikkan nilai saham.'],
        ['Tax Preference Theory', 'Teori', 'Jika tarif pajak capital gain lebih rendah atau pajaknya dapat ditangguhkan hingga saham dijual, investor lebih menyukai perusahaan menahan laba daripada bagi dividen.'],
        ['Signaling Hypothesis (Kandungan Informasi Dividen)', 'Informasi', 'Kenaikan dividen yang tidak terduga diartikan investor sebagai sinyal positif optimisme manajemen bahwa laba masa depan akan melonjak.'],
        ['Pembelian Kembali Saham (Share Repurchase)', 'Alternatif', 'Mendistribusikan kas kepada pemegang saham dengan membeli kembali saham beredar; menaikkan EPS dan memberi fleksibilitas pajak bagi investor.'],
        ['Kebijakan Dividen Residual (Residual Dividend Policy)', 'Strategi', 'Dividen hanya dibayarkan dari sisa laba setelah seluruh proyek penganggaran modal yang menguntungkan (NPV positif) terpenuhi pendanaannya.']
      ]},
      { tm: 11, topic: 'Manajemen Modal Kerja: Kas & Piutang', cards: [
        ['Tiga Strategi Pendanaan Modal Kerja', 'Strategi', '(1) Pendekatan Maturitas (Maturity Matching), (2) Pendekatan Konservatif (dana jangka panjang mendanai aset permanen & fluktuatif), (3) Pendekatan Agresif.'],
        ['Motif Memegang Kas (Keynes)', 'Motif', '(1) Motif Transaksi (pembayaran operasional harian), (2) Motif Berjaga-jaga (kontinjensi darurat), dan (3) Motif Spekulasi (memanfaatkan peluang diskon).'],
        ['Model Manajemen Kas Baumol-Allais-Tobin (BAT)', 'Formula', 'Menentukan saldo kas optimal (C*) dengan menyeimbangkan biaya transaksi penarikan dana dengan biaya peluang bunga yang hilang: C* = √[(2 × T × F) / r].'],
        ['Model Miller-Orr untuk Arus Kas Berfluktuasi', 'Formula', 'Menetapkan batas atas (Upper Limit) dan batas bawah (Lower Limit) saldo kas; kas hanya dikonversi ke sekuritas saat menyentuh batas batas tersebut.'],
        ['Kebijakan Kredit & 5C of Credit', 'Evaluasi', 'Evaluasi kelayakan kredit pelanggan berdasarkan: Character (karakter), Capacity (kapasitas bayar), Capital (modal), Collateral (jaminan), dan Conditions (kondisi ekonomi).'],
        ['Aging Schedule Piutang Usaha', 'Analisis', 'Pengelompokan akun piutang berdasarkan lamanya tunggakan jatuh tempo untuk mengestimasi risiko kredit macet dan efektivitas penagihan.']
      ]},
      { tm: 12, topic: 'Manajemen Persediaan & Pendanaan Jangka Pendek', cards: [
        ['Model Economic Order Quantity (EOQ)', 'Formula', 'EOQ = √[(2 × D × S) / H], di mana D adalah permintaan tahunan, S adalah biaya pemesanan per order, dan H adalah biaya penyimpanan per unit per tahun.'],
        ['Reorder Point (ROP) & Safety Stock', 'Kalkulasi', 'ROP = (Tingkat Penggunaan Harian × Lead Time Pengiriman) + Persediaan Pengaman (Safety Stock).'],
        ['Biaya Kredit Dagang Terselubung (Trade Credit Cost)', 'Formula', 'Biaya diskon kas yang dilepas: Nominal Cost = [Diskon % / (100% - Diskon %)] × [365 / (Jatuh Tempo - Periode Diskon)]. Misal syarat 2/10, net 30.'],
        ['Kredit Bank Jangka Pendek & Compensating Balance', 'Kalkulasi', 'Saldo kompensasi minimum yang ditahan bank menaikkan tingkat bunga efektif pinjaman: Effective Rate = Bunga Tahunan / (Pinjaman - Saldo Kompensasi).'],
        ['Anjak Piutang (Factoring) dengan/tanpa Regress', 'Instrumen', 'Menjual piutang usaha kepada lembaga keuangan faktor untuk memperoleh kas seketika; factoring with recourse menanggung risiko piutang macet.'],
        ['Surat Berharga Komersial (Commercial Paper)', 'Pasar Uang', 'Surat utang jangka pendek tanpa jaminan yang diterbitkan korporasi berperingkat kredit tinggi untuk memenuhi likuiditas jangka pendek.']
      ]},
      { tm: 13, topic: 'Manajemen Keuangan Multinasional & Risiko Valas', cards: [
        ['Perusahaan Multinasional (MNC) vs Domestik', 'Konteks', 'MNC menghadapi risiko fluktuasi nilai tukar mata uang asing, perbedaan rezim hukum/pajak internasional, dan risiko politik negara tuan rumah.'],
        ['Tiga Jenis Eksposur Valuta Asing', 'Klasifikasi', '(1) Transaction Exposure (transaksi perdagangan valas), (2) Translation/Accounting Exposure (konsolidasi laporan luar negeri), (3) Operating/Economic Exposure.'],
        ['Purchasing Power Parity (PPP)', 'Teori', 'Menyatakan bahwa nilai tukar antara dua mata uang disesuaikan untuk mencerminkan perbedaan tingkat inflasi di kedua negara.'],
        ['Interest Rate Parity (IRP)', 'Teori', 'Premi atau diskon forward mata uang mencerminkan perbedaan suku bunga nominal antar kedua negara, mencegah arbitrase suku bunga tanpa risiko.'],
        ['Lindung Nilai (Hedging) dengan Forward vs Opsi', 'Instrumen', 'Kontrak Forward mengunci kurs tukar masa depan secara pasti (kewajiban mengikat). Kontrak Opsi memberi hak tanpa kewajiban untuk membeli/menjual valas.'],
        ['Transfer Pricing & Pemulangan Laba (Repatriation)', 'Strategi', 'MNC merancang alur transfer dividen, royalti, dan biaya manajemen untuk memaksimalkan arus kas global setelah pajak.']
      ]},
      { tm: 14, topic: 'Merger, Akuisisi & Financial Distress (Review UAS)', cards: [
        ['Motivasi Merger & Sinergi Korporasi', 'Motif', 'Menciptakan Sinergi Operasional (skala ekonomis) dan Sinergi Finansial (biaya modal lebih rendah, kapasitas utang meningkat): Nilai Gabungan (V_AB) > V_A + V_B.'],
        ['Merger Horizontal, Vertikal & Konglomerat', 'Bentuk', 'Horizontal (perusahaan di industri yang sama), Vertikal (dengan pemasok/distributor), Konglomerat (perusahaan di industri yang tidak saling terkait).'],
        ['Model Prediksi Kebangkrutan Altman Z-Score', 'Prediksi', 'Model diskriminan keuangan yang menggabungkan 5 rasio kunci untuk memprediksi probabilitas kebangkrutan perusahaan manufaktur.'],
        ['Restrukturisasi Keuangan & Reorganisasi Pailit', 'Prosedur', 'Menegosiasikan perpanjangan jatuh tempo utang (extension) atau pengurangan nilai utang pokok (composition) dengan kreditor.'],
        ['Fokus Utama Ujian Akhir Semester (UAS) Mankeu', 'Fokus', 'Kuasai Teori Struktur Modal MM (dengan & tanpa pajak), Kebijakan Dividen, Manajemen Modal Kerja (BAT & EOQ), serta Perhitungan Eksposur Valas & WACC.'],
        ['Kiat Sukses Ujian Akhir Semester Manajemen Keuangan', 'Tips', 'Perhatikan konsistensi satuan mata uang dan periode waktu (tahunan vs bulanan); jabarkan implikasi manajerial di samping kalkulasi matematis.']
      ]}
    ]
  },
  AKA201: {
    name: 'Pengauditan Berbasis Risiko I',
    tms: [
      { tm: 1, topic: 'Konsep Dasar Audit & Jasa Asurans', cards: [
        ['Definisi Audit Laporan Keuangan', 'Definisi', 'Proses sistematis untuk memperoleh dan mengevaluasi bukti secara objektif mengenai asersi manajemen guna menentukan tingkat kesesuaian dengan kriteria yang ditetapkan (SAK/IFRS).'],
        ['Jasa Asurans vs Non-Asurans', 'Klasifikasi', 'Jasa Asurans meningkatkan kredibilitas informasi bagi pengambil keputusan (Audit, Reviu). Jasa Non-Asurans mencakup Kompilasi, Jasa Perpajakan, dan Konsultasi Manajemen.'],
        ['Penyebab Timbulnya Risiko Informasi', 'Konsep', 'Jarak informasi yang jauh antara pengguna dan manajemen, bias dan motif penyaji, volume data yang sangat masif, dan kompleksitas transaksi ekonomi.'],
        ['Hubungan Agensi dalam Auditing', 'Teori', 'Auditor independen bertindak sebagai pihak ketiga tepercaya untuk menjembatani konflik kepentingan antara pemilik modal (prinsipal) dan pengelola perusahaan (agen).'],
        ['Standar Pengendalian Mutu KAP (ISQM 1)', 'Regulasi', 'Firma audit wajib merancang, mengimplementasikan, dan mengoperasikan sistem manajemen mutu yang menjamin kepatuhan pada standar profesional dan laporan yang tepat.'],
        ['Tanggung Jawab Auditor vs Manajemen', 'Prinsip', 'Manajemen bertanggung jawab atas penyusunan laporan keuangan dan perancangan pengendalian internal. Auditor bertanggung jawab menyatakan opini independen atas laporan keuangan.']
      ]},
      { tm: 2, topic: 'Etika Profesi, Dilema Etis & Independensi', cards: [
        ['Lima Prinsip Dasar Etika IESBA / IAPI', 'Prinsip', '(1) Integritas, (2) Objektivitas, (3) Kompetensi dan Kehati-hatian Profesional, (4) Kerahasian, dan (5) Perilaku Profesional.'],
        ['Independence in Fact vs in Appearance', 'Konsep', 'Independence in Fact (pikiran) adalah keadaan mental yang bebas dari bias. Independence in Appearance (penampilan) adalah persepsi pihak ketiga yang berpengetahuan bahwa auditor independen.'],
        ['Lima Ancaman terhadap Independensi Auditor', 'Ancaman', '(1) Self-Interest Threat, (2) Self-Review Threat, (3) Advocacy Threat, (4) Familiarity Threat, dan (5) Intimidation Threat.'],
        ['Safeguards (Pencegahan) Ancaman Etika', 'Mekanisme', 'Pencegahan yang dibuat profesi/regulasi (rotasi auditor, larangan jasa non-audit tertentu) dan pencegahan dalam lingkungan kerja KAP (reviu mutu independen).'],
        ['Larangan Kepemilikan Keuangan Klien', 'Regulasi', 'Auditor dan anggota tim penugasan dilarang memiliki kepentingan keuangan langsung (saham/obligasi) pada klien audit karena menciptakan Self-Interest Threat berat.'],
        ['Rotasi Partner Audit (SA 220 & Regulasi OJK)', 'Regulasi', 'Kewajiban rotasi Partner Penandatangan Laporan Audit setelah periode tertentu (misal: 5-7 tahun) untuk memitigasi Familiarity Threat.']
      ]},
      { tm: 3, topic: 'Tanggung Jawab Audit & Asersi Manajemen', cards: [
        ['Konsep Skeptisisme Profesional (SA 200)', 'Sikap', 'Sikap yang mencakup pikiran yang selalu mempertanyakan, waspada terhadap kondisi yang mengindikasikan kemungkinan salah saji, dan penilaian kritis atas bukti audit.'],
        ['Asersi Transaksi dan Peristiwa (Laba Rugi)', 'Asersi', 'Keterjadian (Occurrence), Kelengkapan (Completeness), Keakurasian (Accuracy), Pisah Batas (Cutoff), dan Klasifikasi (Classification).'],
        ['Asersi Saldo Akun Akhir Periode (Neraca)', 'Asersi', 'Keberadaan (Existence), Hak dan Kewajiban (Rights & Obligations), Kelengkapan (Completeness), serta Penilaian dan Alokasi (Valuation & Allocation).'],
        ['Asersi Penyajian dan Pengungkapan', 'Asersi', 'Keterjadian serta Hak & Kewajiban, Kelengkapan, Klasifikasi & Keterpahaman, serta Keakurasian & Penilaian dalam Catatan atas Laporan Keuangan.'],
        ['Keyakinan Memadai (Reasonable Assurance)', 'Konsep', 'Tingkat keyakinan tinggi namun bukan absolut, karena adanya keterbatasan bawaan audit (penggunaan sampel dan pertimbangan subjektif estimasi akuntansi).'],
        ['Ekspektasi Publik (Expectation Gap)', 'Isu', 'Kesenjangan antara apa yang diharapkan publik dari auditor (jaminan bebas mutlak dari fraud) dengan tanggung jawab riil auditor menurut standar profesional.']
      ]},
      { tm: 4, topic: 'Laporan Audit Independen & Key Audit Matters', cards: [
        ['Struktur Baku Laporan Auditor Independen (SA 700)', 'Struktur', 'Judul Independen, Pihak yang Dituju, Paragraf Opini (paling atas), Dasar Opini, Kelangsungan Usaha, Key Audit Matters (KAM), Tanggung Jawab Manajemen & Auditor.'],
        ['Opini Wajar Tanpa Pengecualian (Unmodified Opinion)', 'Opini', 'Diterbitkan saat auditor menyimpulkan bahwa laporan keuangan disajikan secara wajar, dalam semua hal yang material, sesuai dengan SAK.'],
        ['Opini Wajar Dengan Pengecualian (Qualified Opinion)', 'Opini', 'Diterbitkan saat salah saji adalah material tetapi TIDAK pervasif, atau auditor tidak dapat memperoleh bukti yang cukup namun dampaknya tidak pervasif.'],
        ['Opini Tidak Wajar (Adverse Opinion)', 'Opini', 'Diterbitkan saat salah saji laporan keuangan bersifat MATERIAL dan PERVASIF terhadap laporan keuangan secara keseluruhan.'],
        ['Opini Tidak Menyatakan Pendapat (Disclaimer)', 'Opini', 'Diterbitkan saat auditor tidak dapat memperoleh bukti audit yang cukup dan tepat, dan potensi dampaknya bersifat MATERIAL dan PERVASIF.'],
        ['Key Audit Matters (KAM - SA 701)', 'Regulasi', 'Hal-hal yang menurut pertimbangan profesional auditor paling signifikan dalam audit laporan keuangan entitas publik (emiten) periode berjalan.']
      ]},
      { tm: 5, topic: 'Konsep Materialitas Audit (SA 320 & SA 450)', cards: [
        ['Definisi Materialitas Audit', 'Definisi', 'Besaran salah saji yang secara individual atau agregat diperkirakan dapat memengaruhi keputusan ekonomi yang diambil pengguna laporan keuangan.'],
        ['Materialitas Keseluruhan (Planning Materiality)', 'Kalkulasi', 'Batas materialitas laporan keuangan secara keseluruhan; umumnya dihitung 0.5-1% dari Total Aset atau 5% dari Laba Sebelum Pajak entitas berorientasi laba.'],
        ['Materialitas Pelaksanaan (Performance Materiality)', 'Kalkulasi', 'Jumlah yang ditetapkan auditor di bawah materialitas keseluruhan (misal 50-75% dari Planning Materiality) untuk mengurangi risiko akumulasi salah saji kecil.'],
        ['Ambang Batas Sepele (Trivial Threshold / Clearly Trivial)', 'Aturan', 'Batas nilai di bawah mana salah saji dianggap sepele (misal 3-5% dari Planning Materiality) dan tidak perlu diakumulasikan ke tabel salah saji.'],
        ['Materialitas Kualitatif', 'Konsep', 'Salah saji dengan nilai rupiah kecil tetapi material karena sifatnya (misal: fraud direksi, pelanggaran klausul utang, mengubah rugi menjadi laba).'],
        ['Evaluasi Dampak Salah Saji Belum Dikoreksi (SA 450)', 'Prosedur', 'Auditor menguji apakah total salah saji yang tidak dikoreksi manajemen melebihi batas materialitas; jika melebihi, auditor wajib memodifikasi opini.']
      ]},
      { tm: 6, topic: 'Bukti Audit, 8 Prosedur & Kertas Kerja (SA 500 & SA 230)', cards: [
        ['Dua Kriteria Bukti Audit: Cukup & Tepat', 'Prinsip', 'Cukup (Sufficiency) mengukur kuantitas bukti yang dibutuhkan. Tepat (Appropriateness) mengukur kualitas bukti (relevansi dan keandalan).'],
        ['Hierarki Keandalan Bukti Audit', 'Aturan', 'Bukti pihak ketiga independen > Bukti langsung auditor > Bukti internal klien dengan SPI kuat > Bukti dokumenter tertulis > Pernyataan lisan manajemen.'],
        ['Delapan Prosedur Audit Bukti (SA 500)', 'Prosedur', '(1) Inspeksi, (2) Pengamatan/Observasi, (3) Konfirmasi Eksternal, (4) Rekalkulasi, (5) Pelaksanaan Kembali (Reperformance), (6) Prosedur Analitis, (7) Permintaan Keterangan (Inquiry), (8) Tracing & Vouching.'],
        ['Tracing vs Vouching', 'Metode', 'Tracing (dokumen sumber ke jurnal) menguji asersi KELENGKAPAN. Vouching (jurnal ke dokumen pendukung) menguji asersi KETERJADIAN / KEBERADAAN.'],
        ['Konfirmasi Eksternal Positif vs Negatif (SA 505)', 'Standar', 'Konfirmasi Positif meminta responden menjawab setuju atau tidak. Konfirmasi Negatif meminta jawaban HANYA jika responden tidak setuju dengan saldo.'],
        ['Dokumentasi Audit & Kertas Kerja (SA 230)', 'Dokumentasi', 'Kertas kerja audit adalah milik KAP; harus memungkinkan auditor berpengalaman lainnya memahami sifat, waktu, luas prosedur, dan temuan audit.']
      ]},
      { tm: 7, topic: 'Prosedur Analitis (SA 520) & Review Pra-UTS', cards: [
        ['Tiga Tahap Penggunaan Prosedur Analitis', 'Wajib', '(1) Tahap Perencanaan (wajib - menilai risiko), (2) Tahap Pengujian Substantif (opsional - mengumpulkan bukti), (3) Tahap Reviu Akhir (wajib - kesimpulan menyeluruh).'],
        ['Definisi Prosedur Analitis', 'Definisi', 'Evaluasi informasi keuangan yang dilakukan melalui analisis hubungan yang masuk akal antara data keuangan dan non-keuangan.'],
        ['Empat Teknik Prosedur Analitis', 'Teknik', '(1) Analisis Tren (Trend Analysis), (2) Analisis Rasio, (3) Analisis Kelayakan/Reasonableness Test, dan (4) Pemodelan Regresi/Data Analytics.'],
        ['Investigasi Fluktuasi Signifikan', 'Prosedur', 'Jika hasil analitis berbeda signifikan dari ekspektasi auditor, auditor wajib meminta keterangan manajemen dan melakukan pengujian substantif tambahan.'],
        ['Fokus Utama Ujian Tengah Semester (UTS) Audit', 'Fokus', 'Kuasai Kode Etik IESBA (5 prinsip & 5 ancaman), Asersi Manajemen Laba Rugi/Neraca, Jenis-jenis Opini Audit, dan Perhitungan Materialitas SA 320.'],
        ['Tips Menjawab Kasus Etika dan Asersi', 'Tips', 'Sebutkan jenis ancaman etika secara spesifik, identifikasi asersi yang terancam salah saji, dan usulkan prosedur audit yang paling tepat untuk mengujinya.']
      ]},
      { tm: 8, topic: 'Perencanaan Audit & Pemahaman Bisnis Klien', cards: [
        ['Tahapan Perencanaan Audit (SA 300)', 'Tahapan', '(1) Memutuskan menerima/melanjutkan klien, (2) Memahami bisnis dan industri klien, (3) Menilai risiko bisnis, (4) Menentukan materialitas, (5) Menyusun strategi audit menyeluruh.'],
        ['Pemahaman Entitas & Lingkungannya (SA 315 R)', 'Ruang Lingkup', 'Faktor industri, kondisi regulasi eksternal, sifat entitas dan struktur permodalan, pemilihan kebijakan akuntansi, serta tujuan dan strategi bisnis klien.'],
        ['Prosedur Penilaian Risiko (Risk Assessment Procedures)', 'Prosedur', 'Permintaan keterangan dari manajemen, prosedur analitis awal, serta observasi dan inspeksi langsung atas fasilitas dan dokumen klien.'],
        ['Surat Perikatan Audit (Engagement Letter - SA 210)', 'Kontrak', 'Kesepakatan tertulis antara KAP dan klien yang menetapkan tujuan audit, ruang lingkup, tanggung jawab masing-masing pihak, dan dasar penetapan imbalan jasa.'],
        ['Komunikasi dengan Auditor Pendahulu', 'Kewajiban Etis', 'Auditor baru wajib meminta izin klien untuk berkomunikasi dengan auditor sebelumnya guna mencari informasi tentang integritas manajemen dan sengketa akuntansi.'],
        ['Penggunaan Tenaga Ahli Auditor (SA 620)', 'Ketentuan', 'Auditor dapat menggunakan jasa aktuaris, penilai independen, atau pakar hukum; auditor wajib mengevaluasi kompetensi, kapabilitas, dan objektivitas ahli tersebut.']
      ]},
      { tm: 9, topic: 'Model Risiko Audit (Audit Risk Model - SA 200)', cards: [
        ['Formula Model Risiko Audit (Audit Risk Model)', 'Formula', 'AAR = IR × CR × PDR, atau PDR = AAR / (IR × CR), di mana AAR = Acceptable Audit Risk, IR = Inherent Risk, CR = Control Risk, PDR = Planned Detection Risk.'],
        ['Risiko Bawaan (Inherent Risk / IR)', 'Definisi', 'Kerentanan suatu saldo akun terhadap salah saji material dengan asumsi tidak ada pengendalian internal yang terkait.'],
        ['Risiko Pengendalian (Control Risk / CR)', 'Definisi', 'Risiko bahwa salah saji material tidak dapat dicegah atau dideteksi dan dikoreksi secara tepat waktu oleh pengendalian internal entitas.'],
        ['Risiko Salah Saji Material (Risk of Material Misstatement / RMM)', 'Konsep', 'RMM = IR × CR. Merupakan risiko yang berada di dalam entitas klien dan tidak dapat dikendalikan langsung oleh auditor.'],
        ['Risiko Deteksi yang Direncanakan (Planned Detection Risk / PDR)', 'Kalkulasi', 'Risiko bahwa prosedur audit yang dilaksanakan auditor gagal mendeteksi salah saji material. PDR berbanding terbalik dengan bukti audit yang harus dikumpulkan.'],
        ['Hubungan Antara RMM dan Luas Pengujian Substantif', 'Hubungan', 'Jika RMM (IR × CR) dinilai TINGGI, maka PDR harus ditetapkan RENDAH, yang berarti auditor wajib mengumpulkan BUKTI AUDIT LEBIH BANYAK dan kompeten.']
      ]},
      { tm: 10, topic: 'Pertimbangan Risiko Kecurangan (Fraud Risk - SA 240)', cards: [
        ['Tanggung Jawab Auditor atas Fraud (SA 240)', 'Standar', 'Auditor bertanggung jawab memperoleh keyakinan memadai bahwa laporan keuangan bebas dari salah saji material, baik yang disebabkan oleh kecurangan (fraud) maupun kesalahan (error).'],
        ['Dua Jenis Fraud dalam Audit Laporan Keuangan', 'Klasifikasi', '(1) Pelaporan Keuangan Curang (Fraudulent Financial Reporting), dan (2) Penyalahgunaan Aset (Misappropriation of Assets / Embezzlement).'],
        ['Segitiga Kecurangan (Fraud Triangle - Cressey)', 'Teori', '(1) Tekanan (Pressure/Incentive), (2) Kesempatan (Opportunity - akibat lemahnya kontrol), dan (3) Rasionalisasi (Rationalization/Attitude).'],
        ['Sesi Brainstorming Tim Audit atas Fraud', 'Wajib', 'SA 240 mewajibkan seluruh anggota tim audit penugasan mendiskusikan bagaimana dan di mana laporan keuangan klien rentan terhadap kecurangan manajemen.'],
        ['Risiko Penolakan Pengendalian oleh Manajemen (Management Override)', 'Risiko Bawaan', 'Risiko bahwa manajemen memotong pengendalian internal; wajib diuji melalui pengujian jurnal penyesuaian akhir tahun dan reviu bias estimasi akuntansi.'],
        ['Tindakan Auditor Saat Menemukan Indikasi Fraud', 'Prosedur', 'Mengevaluasi implikasi integritas manajemen, memperluas prosedur audit substantif, dan mengomunikasikannya kepada Komite Audit / Dewan Komisaris.']
      ]},
      { tm: 11, topic: 'Pengendalian Internal COSO & GITC', cards: [
        ['Lima Komponen Pengendalian Internal COSO (2013)', 'Struktur', '(1) Lingkungan Pengendalian, (2) Penilaian Risiko, (3) Aktivitas Pengendalian, (4) Informasi & Komunikasi, dan (5) Pemantauan.'],
        ['Pemisahan Tugas yang Memadai (Segregation of Duties)', 'Prinsip', 'Memisahkan 4 fungsi independen: Otorisasi Transaksi (Authorization), Pencatatan Akuntansi (Recording), Penyimpanan Fisik Aset (Custody), dan Rekonsiliasi Independen.'],
        ['Pengendalian TI Umum (General IT Controls / GITC)', 'Cakupan', 'Pengendalian akses logis (password, firewall), manajemen perubahan program komputer, backup dan pemulihan bencana pusat data.'],
        ['Pengendalian Aplikasi TI (Application Controls)', 'Cakupan', 'Pengendalian input (validity check, limit check), pengendalian pemrosesan, dan pengendalian output yang melekat langsung pada software transaksi akuntansi.'],
        ['Surat Manajemen (Management Letter)', 'Komunikasi', 'Surat rekomendasi tertulis dari auditor kepada manajemen klien yang berisi temuan kelemahan pengendalian internal dan saran perbaikannya.'],
        ['Defisiensi Signifikan vs Kelemahan Material (Material Weakness)', 'Definisi', 'Material Weakness adalah defisiensi pengendalian internal sedemikian rupa sehingga ada kemungkinan wajar salah saji material tidak dicegah atau terdeteksi tepat waktu.']
      ]},
      { tm: 12, topic: 'Pengujian Pengendalian (TOC) & Pengujian Substantif', cards: [
        ['Pengujian Pengendalian (Tests of Controls / TOC)', 'Tujuan', 'Menguji efektivitas operasional pengendalian internal dalam mencegah atau mendeteksi salah saji material.'],
        ['Pengujian Substantif Transaksi (Substantive Tests of Transactions)', 'Tujuan', 'Menguji kebenaran moneter transaksi individual yang dicatat dalam jurnal pembukuan klien.'],
        ['Pengujian Rincian Saldo (Tests of Details of Balances)', 'Tujuan', 'Fokus pada kebenaran moneter saldo akhir buku besar neraca (misal: konfirmasi saldo fisik piutang, opname persediaan).'],
        ['Pengurangan Pengujian Substantif Akibat TOC Efektif', 'Strategi', 'Jika hasil TOC membuktikan pengendalian internal klien sangat efektif (CR Rendah), auditor dapat membatasi dan mengurangi luas pengujian substantif saldo.'],
        ['Hubungan Prosedur Audit Dual-Purpose', 'Metode', 'Prosedur audit yang sekaligus menguji pengendalian dan kebenaran substantif transaksi secara bersamaan pada satu sampel dokumen.'],
        ['Penyusunan Program Audit (Audit Program)', 'Struktur', 'Daftar rinci prosedur audit spesifik yang akan dilaksanakan, ukuran sampel yang dipilih, item spesifik yang diuji, dan waktu pelaksanaan pengujian.']
      ]},
      { tm: 13, topic: 'Teknik Audit Berbantuan Komputer (CAATs)', cards: [
        ['Computer-Assisted Audit Techniques (CAATs)', 'Definisi', 'Penggunaan perangkat lunak komputer khusus (misal: ACL, IDEA, Python, SQL) untuk mengotomatisasi pengujian dan analisis data audit.'],
        ['Metode Uji Data (Test Data Approach)', 'Metode', 'Auditor memproses data uji buatan (transaksi valid dan tidak valid) ke dalam program komputer klien untuk memverifikasi apakah kontrol aplikasi bekerja menolak data cacat.'],
        ['Fasilitas Uji Terpadu (Integrated Test Facility / ITF)', 'Metode', 'Membuat entitas/rekening tiruan (dummy entity) di dalam sistem live klien untuk memproses transaksi audit secara berkelanjutan berdampingan dengan transaksi riil.'],
        ['Simulasi Paralel (Parallel Simulation)', 'Metode', 'Auditor menulis program independen yang meniru logika pemrosesan software klien, lalu membandingkan hasil outputnya dengan hasil produksi klien.'],
        ['Modul Audit Tertanam (Embedded Audit Module / EAM)', 'Metode', 'Kode program audit yang ditanamkan langsung ke dalam sistem aplikasi klien untuk menangkap dan mencatat transaksi berisiko tinggi secara real-time.'],
        ['Pemanfaatan Audit Data Analytics (ADA)', 'Modern', 'Analisis 100% populasi transaksi jurnal buku besar untuk mengidentifikasi anomali, nomor urut ganda, dan pola transaksi mencurigakan di luar jam kerja.']
      ]},
      { tm: 14, topic: 'Review Komprehensif UAS Pengauditan I', cards: [
        ['Fokus Utama Soal Ujian Akhir Semester (UAS) Audit', 'Fokus', 'Kuasai Model Risiko Audit (AAR = IR × CR × PDR), Prosedur Deteksi Fraud SA 240, Perancangan TOC vs Substantif, serta Penerapan CAATs.'],
        ['Dampak Penurunan Acceptable Audit Risk (AAR)', 'Kalkulasi', 'Jika auditor ingin risiko audit lebih rendah (AAR turun), Planned Detection Risk (PDR) menurun, sehingga bukti audit yang wajib dikumpulkan BERTAMBAH.'],
        ['Dampak Peningkatan Kualitas Pengendalian Internal', 'Kalkulasi', 'Jika SPI klien sangat kuat, Control Risk (CR) turun, yang menaikkan batas PDR, sehingga auditor dapat MENGURANGI pengujian substantif saldo.'],
        ['Prosedur Menghadapi Risiko Salah Saji Manajemen', 'Prosedur', 'Auditor wajib menugaskan staf yang lebih berpengalaman, meningkatkan skeptisisme profesional, memasukkan elemen kejutan, dan mengubah sifat prosedur menjadi lebih substantif.'],
        ['Perbedaan Tracing untuk Kelengkapan vs Vouching untuk Keberadaan', 'Konsep', 'Ingat rumus emas: Dokumen Pengiriman ke Buku Jurnal = Uji Kelengkapan (Understatement). Jurnal Penjualan ke Faktur = Uji Keberadaan (Overstatement).'],
        ['Kunci Sukses Ujian Akhir Semester Pengauditan I', 'Tips', 'Gunakan terminologi standar audit ISA/SPAP yang tepat (Asersi, Materialitas, Skeptisisme, Bukti yang Cukup dan Tepat, PDR) dalam memberikan argumentasi kasus.']
      ]}
    ]
  },
};

// Eksekusi penulisan file
for (const [code, data] of Object.entries(COURSES_DATA)) {
  const cards = [];
  data.tms.forEach((tmObj) => {
    tmObj.cards.forEach((c, idx) => {
      cards.push(card(code, tmObj.tm, idx + 1, tmObj.topic, c[1], c[0], c[2]));
    });
  });

  const exportName = `${code.toUpperCase()}_FC`;
  const fileContent = `// src/data/flashcards/${code.toLowerCase()}.ts
// Flashcard komprehensif ${data.name} (${code}) — 84 kartu lengkap (6 kartu per TM)
import type { AdvancedStudyCard } from '../../types';

export const ${exportName}: AdvancedStudyCard[] = ${JSON.stringify(cards, null, 2)};
`;

  fs.writeFileSync(path.join(flashcardsDir, `${code.toLowerCase()}.ts`), fileContent, 'utf8');
  console.log(`Successfully generated ${code}.ts (${cards.length} cards)`);
}
