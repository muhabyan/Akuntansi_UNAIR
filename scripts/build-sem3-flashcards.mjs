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
