// scripts/build-sem3-quiz-data.mjs
import fs from 'node:fs';
import path from 'node:path';

function q(tm, topic, question, options, answer, explanation, difficulty = 'medium') {
  return {
    tm,
    topic,
    difficulty,
    q: question,
    options,
    answer,
    explanation
  };
}

// Only the courses listed for this artefact in scripts/test-sem3-generators.mjs may be generated; the rest are edited by hand.
const QUIZ_SPEC = {
  AKM202: {
    courseName: 'Akuntansi Manajemen',
    uts: [
      q(1, 'Konsep Dasar Akuntansi Manajemen', 'Manakah karakteristik yang membedakan Akuntansi Manajemen dari Akuntansi Keuangan?', [
        'Akuntansi manajemen berorientasi pada masa lalu untuk kepatuhan SAK',
        'Akuntansi manajemen fokus pada kebutuhan internal manajemen dan tidak terikat standar baku akuntansi eksternal',
        'Akuntansi manajemen wajib diaudit oleh Kantor Akuntan Publik independen',
        'Akuntansi manajemen menyajikan informasi ringkas untuk seluruh entitas tanpa pelaporan segmen'
      ], 1, 'Akuntansi manajemen dirancang untuk pengambilan keputusan internal, berorientasi masa depan, dan sangat fleksibel tanpa kewajiban tunduk pada SAK/PABU.'),
      q(2, 'Perilaku Biaya & CVP', 'PT Surya menjual produk seharga Rp 50.000 per unit dengan biaya variabel Rp 30.000 per unit. Biaya tetap tahunan adalah Rp 400.000.000. Berapakah volume penjualan (dalam unit) untuk mencapai titik impas (BEP)?', [
        '8.000 unit',
        '13.333 unit',
        '20.000 unit',
        '25.000 unit'
      ], 2, 'CM per unit = Rp 50.000 - Rp 30.000 = Rp 20.000. BEP Unit = Biaya Tetap / CM per unit = Rp 400.000.000 / Rp 20.000 = 20.000 unit.'),
      q(2, 'Perilaku Biaya & CVP', 'Jika perusahaan memiliki Degree of Operating Leverage (DOL) sebesar 4 pada tingkat penjualan saat ini, maka kenaikan penjualan sebesar 10% akan mengakibatkan kenaikan laba bersih operasi sebesar...', [
        '4%',
        '14%',
        '25%',
        '40%'
      ], 3, '% Kenaikan Laba Bersih = DOL × % Kenaikan Penjualan = 4 × 10% = 40%.'),
      q(3, 'Variable Costing vs Absorption Costing', 'Pada tahun di mana jumlah unit yang diproduksi LEBIH BESAR daripada jumlah unit yang terjual, maka...', [
        'Laba bersih Absorption Costing lebih tinggi daripada Variable Costing',
        'Laba bersih Variable Costing lebih tinggi daripada Absorption Costing',
        'Laba bersih kedua metode akan tepat sama',
        'Terjadi selisih varians volume yang tidak dapat direkonsiliasi'
      ], 0, 'Ketika produksi > penjualan, sebagian BOP tetap tertunda di dalam persediaan akhir pada metode absorption costing, sehingga HPP lebih rendah dan laba bersih lebih tinggi.'),
      q(4, 'Activity-Based Management', 'Dalam hierarki biaya ABC, aktivitas perancangan ulang cetakan produk (product redesign) dan perolehan sertifikasi produk termasuk dalam kelompok...', [
        'Unit-level activities',
        'Batch-level activities',
        'Product-level activities',
        'Facility-sustaining activities'
      ], 2, 'Aktivitas yang mendukung lini produk tertentu tanpa tergantung pada volume unit atau batch diklasifikasikan sebagai product-level activities.'),
      q(5, 'Master Budgeting', 'PT Sentosa memproyeksikan penjualan kuartal I sebanyak 10.000 unit. Kebijakan persediaan akhir barang jadi ditetapkan sebesar 20% dari penjualan kuartal berikutnya (kuartal II: 15.000 unit). Persediaan awal adalah 2.000 unit. Berapakah unit yang harus diproduksi?', [
        '9.000 unit',
        '11.000 unit',
        '13.000 unit',
        '15.000 unit'
      ], 1, 'Unit Diproduksi = Target Penjualan (10.000) + Persediaan Akhir (20% × 15.000 = 3.000) - Persediaan Awal (2.000) = 11.000 unit.'),
      q(6, 'Biaya Standar & Analisis Varians', 'Untuk memproduksi 1 unit produk dibutuhkan standar bahan 2 kg @ Rp 10.000. Selama periode berjalan, dibeli dan digunakan 2.200 kg bahan seharga Rp 20.900.000 untuk menghasilkan 1.000 unit produk. Materials Price Variance (MPV) adalah...', [
        'Rp 1.100.000 Favorable',
        'Rp 1.100.000 Unfavorable',
        'Rp 2.000.000 Favorable',
        'Rp 900.000 Unfavorable'
      ], 0, 'Harga aktual per kg = Rp 20.900.000 / 2.200 = Rp 9.500. MPV = AQ × (AP - SP) = 2.200 × (Rp 9.500 - Rp 10.000) = Rp 1.100.000 Favorable (karena harga beli aktual lebih murah).'),
      q(7, 'Review Pra-UTS Akmen', 'Sebuah perusahaan memiliki beberapa segmen bisnis. Manakah biaya yang TIDAK boleh dialokasikan ke segmen individual saat menghitung Segment Margin?', [
        'Biaya iklan khusus divisi yang dapat ditelusuri',
        'Gaji manajer operasional cabang',
        'Gaji Direktur Utama korporat dan biaya pemeliharaan kantor pusat',
        'Penyusutan peralatan khusus lini produk'
      ], 2, 'Common fixed costs (seperti beban kantor pusat korporat) tidak boleh dialokasikan ke segmen individu karena tidak hilang jika segmen ditutup.')
    ],
    uas: [
      q(8, 'Desentralisasi & Kinerja Manajerial', 'Divisi Timur memiliki laba operasi Rp 120.000.000 dan rata-rata aset operasi Rp 600.000.000. Jika tingkat pengembalian minimum yang disyaratkan perusahaan adalah 15%, berapakah Residual Income (RI) divisi tersebut?', [
        'Rp 12.000.000',
        'Rp 30.000.000',
        'Rp 90.000.000',
        'Rp 20.000.000'
      ], 1, 'Return minimum = 15% × Rp 600.000.000 = Rp 90.000.000. RI = Laba Operasi (Rp 120 jt) - Return Minimum (Rp 90 jt) = Rp 30.000.000.'),
      q(9, 'Transfer Pricing Antar Divisi', 'Divisi A memproduksi suku cadang dengan biaya variabel Rp 18.000 dan biaya tetap Rp 7.000. Harga pasar luar Rp 30.000. Jika Divisi A memiliki KAPASITAS MENGANGGUR, berapakah batas bawah harga transfer yang dapat diterima Divisi A?', [
        'Rp 18.000',
        'Rp 25.000',
        'Rp 30.000',
        'Rp 12.000'
      ], 0, 'Saat ada kapasitas menganggur, Opportunity Cost = 0. Batas bawah harga transfer = Biaya Variabel per unit = Rp 18.000.'),
      q(10, 'Analisis Biaya Relevan & Keputusan Taktis', 'PT Logam menerima tawaran pesanan khusus 2.000 unit @ Rp 45.000. Harga jual normal Rp 70.000 dengan biaya variabel Rp 35.000 dan alokasi biaya tetap Rp 20.000. Perusahaan memiliki kapasitas menganggur. Apakah pesanan harus diterima?', [
        'Ditolak, karena harga tawaran Rp 45.000 lebih rendah dari total biaya Rp 55.000',
        'Diterima, karena memberikan tambahan laba kontribusi sebesar Rp 20.000.000',
        'Ditolak, karena merusak reputasi harga normal perusahaan',
        'Diterima, karena seluruh biaya tetap akan terserap habis'
      ], 1, 'Tambahan pendapatan = Rp 45.000; Tambahan biaya variabel = Rp 35.000. Tambahan margin kontribusi = Rp 10.000 per unit × 2.000 unit = Rp 20.000.000 (biaya tetap tidak berubah).'),
      q(11, 'Penetapan Harga & Target Costing', 'Manakah urutan proses yang benar dalam pendekatan Target Costing?', [
        'Desain produk → Hitung biaya manufaktur → Tambahkan markup laba → Tentukan harga jual',
        'Riset pasar tentukan harga jual kompetitif → Tentukan target laba → Tetapkan target cost → Desain produk memenuhi target cost',
        'Tentukan target laba → Desain produk → Hitung alokasi biaya bersama → Rilis produk',
        'Analisis biaya historis → Tambahkan inflasi → Tetapkan harga penawaran'
      ], 1, 'Target Costing berorientasi pasar: Target Cost = Antisipasi Harga Pasar - Target Laba yang Diinginkan.'),
      q(12, 'Investasi Modal (Capital Budgeting)', 'Sebuah proyek memerlukan investasi awal Rp 200.000.000 dan menghasilkan arus kas masuk tahunan Rp 60.000.000 selama 5 tahun. Jika biaya modal 10% (Faktor Anuitas PV 5 tahun, 10% = 3,791), berapakah Net Present Value (NPV)?', [
        'Rp 27.460.000',
        'Rp 30.000.000',
        'Rp (15.000.000)',
        'Rp 100.000.000'
      ], 0, 'PV Arus Kas = Rp 60.000.000 × 3,791 = Rp 227.460.000. NPV = Rp 227.460.000 - Rp 200.000.000 = Rp 27.460.000 (NPV positif, proyek layak diterima).'),
      q(13, 'Lean Operations & Biaya Kualitas', 'Biaya penarikan produk cacat dari pasar (product recall) dan biaya penyelesaian tuntutan hukum pelanggan termasuk dalam kategori biaya kualitas...', [
        'Prevention costs (biaya pencegahan)',
        'Appraisal costs (biaya penilaian)',
        'Internal failure costs (kegagalan internal)',
        'External failure costs (kegagalan eksternal)'
      ], 3, 'External failure costs adalah biaya kualitas yang timbul setelah produk cacat sampai ke tangan pelanggan (klaim garansi, recall, penanganan komplain).'),
      q(14, 'Environmental Management Accounting', 'Manakah dari pos berikut yang merupakan fokus utama dari Physical Environmental Management Accounting (P-EMA)?', [
        'Denda moneter akibat pelanggaran baku mutu limbah cair',
        'Aliran fisik material: konsumsi kilowatt jam listrik, volume kubik air, dan metrik ton limbah padat',
        'Pendapatan penjualan atas produk daur ulang',
        'Penyusutan instalasi pengolahan air limbah (IPAL)'
      ], 1, 'P-EMA melacak aliran fisik energi, air, bahan baku, emisi, dan limbah dalam unit non-moneter.')
    ]
  },
};

const outputCode = `// scripts/sem3-quiz-data.mjs
export const SEM3_QUIZ_DATA = ${JSON.stringify(QUIZ_SPEC, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'scripts/sem3-quiz-data.mjs'), outputCode, 'utf8');
console.log('Successfully wrote sem3-quiz-data.mjs');
