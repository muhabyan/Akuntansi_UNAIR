// =============================================================
// src/data/akbi/akbiMasterReadingsTm8Tm11.ts
// Data master AKBI tahap 1C revisi + Batch 9 patch: TM 8 sampai TM 11.
// Sumber utama: RPS AKBI, Tutor AKBI TM 8 Joint Cost, Tutor AKBI TM 9 Bahan Baku, Tutor Akuntansi Biaya TM 11 Biaya Tenaga Kerja, Tutor AKBI TM 12 FOH, dan AKBI master content.
// Catatan: file ini hanya data. Tidak mengubah UI, CourseLayout, styling, registry, atau course lain.
// =============================================================
import type { ContentBlock, Reading } from '../../types';
import { applyAkbiReadingUxPolish } from './akbiReadingUxPolish';

export type AkbiMasterReading = Reading & {
  id: string;
  phase: 'pra_uts' | 'pra_uas';
  source: string;
  manualCheckCount: number;
};

const warningManual = (text: string): ContentBlock => ({
  kind: 'callout',
  variant: 'warning',
  title: '[Perlu pemeriksaan manual]',
  text,
});

export const AKBI_TM8_TM11_READINGS: Record<number, AkbiMasterReading> = {
  8: {
    id: 'akbi-tm-8',
    tm: 8,
    title: 'Penentuan Kos Produk Bersama dan Produk Sampingan',
    ref: 'CU 8 · IMN 7 · Tutor AKBI TM 8',
    source: 'SILABI-Akuntansi Biaya-2026.doc; TUTOR AKBI TM 8_JOINT COST.pdf; AKBI_Master_Content_Bagian_1_TM1-TM11.md',
    phase: 'pra_uas',
    manualCheckCount: 2,
    intro:
      'Satu proses produksi dapat menghasilkan lebih dari satu produk. Biaya sebelum produk dipisahkan disebut kos bersama. Kos bersama dialokasikan untuk penentuan laba dan persediaan. Produk sampingan memiliki nilai jual relatif kecil dibanding produk utama.',
    objectives: [
      'Menjelaskan kos bersama dan kos bergabung.',
      'Menjelaskan produk bersama, produk sekutu, produk bergabung, dan produk sampingan.',
      'Menentukan split-off point dalam proses produksi bersama.',
      'Mengalokasikan kos bersama dengan metode nilai jual relatif.',
      'Mengalokasikan kos bersama dengan metode harga jual hipotetis.',
      'Mengalokasikan kos bersama dengan metode satuan fisik.',
      'Mengalokasikan kos bersama dengan metode rata-rata kos per satuan.',
      'Mengalokasikan kos bersama dengan metode rata-rata tertimbang.',
      'Menjelaskan perlakuan akuntansi produk sampingan dengan metode non-cost dan metode cost.',
      'Membedakan reversal cost method dan replacement cost method untuk produk sampingan.',
    ],
    blocks: [
      { kind: 'h2', text: 'Tujuan Pembelajaran' },
      {
        kind: 'p',
        text:
          'Mahasiswa mampu menjelaskan kos bersama, kos bergabung, produk bersama, produk sampingan, split-off point, metode alokasi kos bersama, dan perlakuan akuntansi produk sampingan.',
      },
      { kind: 'h2', text: 'Gambaran Umum' },
      {
        kind: 'p',
        text:
          'Satu proses produksi dapat menghasilkan lebih dari satu produk. Biaya sebelum produk dipisahkan disebut kos bersama. Kos bersama dialokasikan untuk penentuan laba dan persediaan. Produk sampingan memiliki nilai jual relatif kecil dibanding produk utama.',
      },
      {
        kind: 'p',
        text:
          'Masalah utama pada produk bersama adalah penentuan proporsi total kos produksi yang harus dibebankan ke setiap produk. Kos tersebut terjadi sejak bahan baku mulai diolah sampai berbagai produk dapat dipisahkan identitasnya. Setelah titik pisah, biaya yang muncul diperlakukan sebagai biaya proses lanjutan masing-masing produk.',
      },
      { kind: 'h2', text: 'Alur Belajar Cepat Batch 6' },
      {
        kind: 'table',
        headers: ['Langkah', 'Fokus Belajar', 'Output yang Harus Bisa Dibuat'],
        rows: [
          ['1', 'Identifikasi proses bersama', 'Menentukan main product, joint product, by-product, split-off point, dan separable cost'],
          ['2', 'Pisahkan biaya', 'Membedakan joint cost sebelum split-off dari separable cost setelah split-off'],
          ['3', 'Pilih metode alokasi', 'Menentukan apakah soal meminta unit produksi, rata-rata per unit, NRV/harga jual relatif, atau weighted average'],
          ['4', 'Hitung dasar alokasi', 'Menyusun nilai jual, NRV, unit fisik, atau unit tertimbang sebagai pembagi alokasi'],
          ['5', 'Alokasikan joint cost', 'Membuktikan total alokasi sama dengan total joint cost'],
          ['6', 'Tentukan cost per unit', 'Membagi alokasi joint cost dengan unit produksi masing-masing produk'],
          ['7', 'Perlakukan by-product', 'Menentukan apakah by-product tidak menerima joint cost dan bagaimana pendapatannya disajikan'],
          ['8', 'Ambil keputusan lanjutan', 'Mengabaikan joint cost dalam keputusan proses lanjut dan memakai incremental revenue serta separable cost'],
        ],
        caption: 'Peta belajar TM 8 agar mahasiswa tidak langsung masuk ke angka tanpa memahami titik pisah dan dasar alokasi.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Inti UAS TM 8',
        text: 'Soal TM 8 biasanya tidak sulit karena rumusnya panjang, tetapi karena mahasiswa salah memilih dasar alokasi. Baca instruksi metode dulu. Jika soal menyebut bobot, gunakan weighted average. Jika soal menyebut nilai jual akhir dan separable cost, gunakan NRV/harga jual hipotetis. Jika hanya unit fisik yang diminta, gunakan metode unit produksi atau rata-rata per unit.',
      },
      { kind: 'h2', text: 'Peta Submateri' },
      {
        kind: 'table',
        headers: ['Submateri', 'Pembahasan'],
        rows: [
          ['Kos bersama', 'Biaya sebelum split-off'],
          ['Kos bergabung', 'Overhead bersama yang digunakan oleh beberapa objek biaya'],
          ['Produk bersama', 'Produk utama dengan nilai jual relatif material'],
          ['Produk sekutu', 'Produk yang diproduksi bersamaan, tetapi tidak berasal dari proses atau bahan baku yang sama'],
          ['Produk sampingan', 'Produk dengan nilai jual relatif kecil dibanding produk utama'],
          ['Split-off point', 'Titik produk dapat dipisah dan diidentifikasi'],
          ['Metode nilai jual relatif', 'Alokasi berdasarkan nilai jual setiap produk'],
          ['Metode harga jual hipotetis', 'Alokasi berdasarkan nilai jual akhir dikurangi biaya proses lanjutan'],
          ['Metode satuan fisik', 'Alokasi berdasarkan unit, berat, volume, atau ukuran fisik lain'],
          ['Metode rata-rata kos per satuan', 'Total kos bersama dibagi total unit'],
          ['Metode rata-rata tertimbang', 'Unit dikalikan bobot setiap produk'],
          ['Produk sampingan', 'Non-cost methods, reversal cost method, dan replacement cost method'],
        ],
      },
      { kind: 'h2', text: 'Materi Teori' },
      {
        kind: 'p',
        text:
          'Kos bersama adalah biaya dari satu proses sebelum produk dapat dipisahkan. Kos ini mencakup bahan baku, tenaga kerja, dan overhead pabrik yang terjadi dalam proses bersama. Kos bergabung berbeda dari kos bersama karena kos bergabung lebih berkaitan dengan overhead bersama yang digunakan oleh proses atau departemen yang berbeda.',
      },
      {
        kind: 'p',
        text:
          'Produk bersama adalah dua produk atau lebih yang dihasilkan dari satu rangkaian proses dan memiliki nilai jual relatif material. Tidak ada satu produk yang dipandang hanya sebagai sampingan. Produk sampingan adalah hasil produksi yang memiliki nilai jual relatif kecil dibanding produk utama.',
      },
      {
        kind: 'p',
        text:
          'Split-off point adalah titik ketika produk bersama sudah dapat dikenali secara terpisah. Biaya sebelum titik ini disebut kos bersama. Biaya setelah titik ini disebut biaya proses lanjutan dan hanya berkaitan dengan produk yang diproses lebih lanjut.',
      },
      {
        kind: 'p',
        text:
          'Alokasi kos bersama diperlukan untuk penentuan laba, penilaian persediaan, dan penyajian laporan biaya. Alokasi tersebut tidak dipakai sebagai dasar utama keputusan menjual pada split-off atau memproses lebih lanjut. Keputusan proses lanjut harus menggunakan tambahan pendapatan dan tambahan biaya setelah titik pisah.',
      },
      { kind: 'h3', text: 'Metode Nilai Jual Relatif' },
      {
        kind: 'p',
        text:
          'Metode nilai jual relatif mengalokasikan kos bersama berdasarkan nilai jual setiap produk pada titik pisah. Dasar logikanya adalah produk dengan nilai jual lebih besar dianggap menerima proporsi kos bersama lebih besar. Metode ini sering dipakai ketika harga jual produk pada titik pisah sudah diketahui.',
      },
      { kind: 'h3', text: 'Metode Harga Jual Hipotetis' },
      {
        kind: 'p',
        text:
          'Metode harga jual hipotetis dipakai jika satu atau beberapa produk bersama masih memerlukan proses lanjutan setelah split-off sehingga nilai jual pada titik pisah belum tersedia. Nilai jual hipotetis dihitung dari nilai jual akhir dikurangi biaya proses lanjutan. Proporsi nilai jual hipotetis kemudian dipakai untuk mengalokasikan kos bersama.',
      },
      { kind: 'h3', text: 'Metode Satuan Fisik' },
      {
        kind: 'p',
        text:
          'Metode satuan fisik mengalokasikan kos bersama berdasarkan ukuran fisik produk, seperti unit, kilogram, liter, barel, atau ukuran produksi lain. Metode ini mudah dipakai, tetapi dapat kurang mencerminkan kemampuan produk menghasilkan pendapatan jika nilai jual antar produk sangat berbeda.',
      },
      { kind: 'h3', text: 'Metode Rata-Rata Kos per Satuan' },
      {
        kind: 'p',
        text:
          'Metode rata-rata kos per satuan membagi total kos bersama dengan total satuan produk yang dihasilkan. Hasil rata-rata tersebut menjadi kos per unit untuk semua produk. Metode ini lebih cocok jika produk relatif seragam atau satuan fisiknya dapat dibandingkan secara wajar.',
      },
      { kind: 'h3', text: 'Metode Rata-Rata Tertimbang' },
      {
        kind: 'p',
        text:
          'Metode rata-rata tertimbang mengalokasikan kos bersama berdasarkan unit tertimbang. Bobot dapat ditentukan dari tingkat kesulitan produksi, jumlah bahan yang digunakan, waktu produksi, perbedaan tenaga kerja, ukuran fisik, atau karakteristik lain yang relevan.',
      },
      { kind: 'h3', text: 'Perlakuan Produk Sampingan' },
      {
        kind: 'p',
        text:
          'Produk sampingan dapat diperlakukan dengan pendekatan non-cost atau pendekatan cost. Dalam pendekatan non-cost, produk sampingan tidak dibebani kos produksi secara rinci. Pendapatan produk sampingan dapat disajikan sebagai penjualan, pendapatan lain-lain, pengurang harga pokok penjualan, atau pengurang total kos produksi.',
      },
      {
        kind: 'p',
        text:
          'Dalam pendekatan cost, produk sampingan dibebani kos produksi. Dua metode yang digunakan adalah metode nilai pasar atau reversal cost method dan metode nilai ganti atau replacement cost method. Reversal cost method menghitung kos produk sampingan secara mundur dari nilai pasar, dikurangi taksiran laba, biaya pemasaran, biaya administrasi, dan biaya proses setelah titik pisah jika ada.',
      },
      {
        kind: 'p',
        text:
          'Replacement cost method biasanya digunakan jika produk sampingan dipakai kembali dalam perusahaan. Nilai produk sampingan dapat diperlakukan sebagai pengganti bahan atau sumber daya lain yang seharusnya dibeli dari luar.',
      },
      { kind: 'h2', text: 'Materi Praktik' },
      {
        kind: 'ol',
        items: [
          'Tentukan apakah perusahaan menghasilkan produk bersama, produk sekutu, produk bergabung, atau produk sampingan.',
          'Tentukan titik pisah atau split-off point.',
          'Pisahkan kos bersama dan biaya proses lanjutan.',
          'Identifikasi metode alokasi yang diminta soal.',
          'Hitung dasar alokasi, seperti nilai jual, nilai jual hipotetis, satuan fisik, atau unit tertimbang.',
          'Hitung proporsi setiap produk.',
          'Alokasikan total kos bersama ke setiap produk.',
          'Hitung kos per unit jika diminta.',
          'Untuk produk sampingan, tentukan apakah pendekatan yang dipakai adalah non-cost method atau cost method.',
          'Untuk keputusan proses lanjut, abaikan joint cost dan bandingkan tambahan pendapatan dengan tambahan biaya setelah split-off.',
        ],
      },
      { kind: 'h2', text: 'Format Cost dan Laporan Biaya' },
      {
        kind: 'table',
        headers: ['Produk', 'Unit', 'Harga Jual per Unit', 'Nilai Jual', 'Proporsi Nilai Jual', 'Alokasi Kos Bersama', 'Kos per Unit'],
        rows: [
          ['Produk A', 'Data dari soal', 'Data dari soal', 'Unit × harga jual', 'Nilai jual ÷ total nilai jual', 'Proporsi × total kos bersama', 'Alokasi ÷ unit'],
          ['Produk B', 'Data dari soal', 'Data dari soal', 'Unit × harga jual', 'Nilai jual ÷ total nilai jual', 'Proporsi × total kos bersama', 'Alokasi ÷ unit'],
          ['Produk C', 'Data dari soal', 'Data dari soal', 'Unit × harga jual', 'Nilai jual ÷ total nilai jual', 'Proporsi × total kos bersama', 'Alokasi ÷ unit'],
          ['Total', '', '', 'Total nilai jual', '100%', 'Total kos bersama', ''],
        ],
        caption: 'Format alokasi kos bersama dengan metode nilai jual relatif.',
      },
      {
        kind: 'table',
        headers: ['Produk', 'Nilai Jual Akhir', 'Biaya Proses Lanjutan', 'Nilai Jual Hipotetis', 'Proporsi', 'Alokasi Kos Bersama'],
        rows: [
          ['Produk A', 'Data dari soal', 'Data dari soal', 'Nilai jual akhir - biaya proses lanjutan', 'Nilai jual hipotetis ÷ total', 'Proporsi × total kos bersama'],
          ['Produk B', 'Data dari soal', 'Data dari soal', 'Nilai jual akhir - biaya proses lanjutan', 'Nilai jual hipotetis ÷ total', 'Proporsi × total kos bersama'],
          ['Total', '', '', 'Total nilai jual hipotetis', '100%', 'Total kos bersama'],
        ],
        caption: 'Format alokasi kos bersama dengan metode harga jual hipotetis.',
      },
      {
        kind: 'table',
        headers: ['Perlakuan Produk Sampingan', 'Penyajian'],
        rows: [
          ['Sebagai penjualan', 'Pendapatan produk sampingan disajikan sebagai penjualan tambahan'],
          ['Sebagai pendapatan lain-lain', 'Pendapatan produk sampingan disajikan di luar penjualan utama'],
          ['Sebagai pengurang HPP', 'Pendapatan produk sampingan mengurangi harga pokok penjualan'],
          ['Sebagai pengurang total kos produksi', 'Pendapatan produk sampingan mengurangi total kos produksi produk utama'],
          ['Reversal cost method', 'Kos produk sampingan ditaksir mundur dari nilai pasar'],
          ['Replacement cost method', 'Produk sampingan dinilai sebagai pengganti sumber daya yang digunakan perusahaan'],
        ],
      },
      warningManual('Format laporan produk sampingan dari scan asli tetap perlu dicek jika ingin disalin persis sebagai tabel final.'),
      { kind: 'h2', text: 'Rumus Penting' },
      { kind: 'formula', text: 'Nilai jual = Unit × Harga jual per unit', note: 'Menghitung nilai jual setiap produk' },
      { kind: 'formula', text: 'Proporsi nilai jual = Nilai jual produk ÷ Total nilai jual seluruh produk', note: 'Dasar alokasi metode nilai jual relatif' },
      { kind: 'formula', text: 'Alokasi kos bersama = Proporsi × Total kos bersama', note: 'Mengalokasikan kos bersama' },
      { kind: 'formula', text: 'Kos per unit = Alokasi kos bersama ÷ Unit produk', note: 'Menghitung kos per unit produk bersama' },
      { kind: 'formula', text: 'Nilai jual hipotetis = Nilai jual akhir - Biaya proses lanjutan', note: 'Metode harga jual hipotetis' },
      { kind: 'formula', text: 'Proporsi fisik = Unit fisik produk ÷ Total unit fisik seluruh produk', note: 'Metode satuan fisik' },
      { kind: 'formula', text: 'Rata-rata kos per satuan = Total kos bersama ÷ Total unit', note: 'Metode rata-rata kos per satuan' },
      { kind: 'formula', text: 'Unit tertimbang = Unit produk × Bobot', note: 'Metode rata-rata tertimbang' },
      { kind: 'formula', text: 'Tambahan laba atau rugi = Tambahan pendapatan - Biaya proses lanjutan', note: 'Keputusan menjual pada split-off atau memproses lebih lanjut' },
      { kind: 'h3', text: 'Formula Sheet Batch 6 - Joint Costing' },
      { kind: 'formula', text: 'Joint cost = seluruh biaya produksi sebelum split-off point', note: 'Joint cost dialokasikan hanya ke joint products, bukan ke by-product yang nilainya tidak material' },
      { kind: 'formula', text: 'Separable cost = biaya tambahan setelah split-off point', note: 'Biaya ini ditelusuri langsung ke produk yang diproses lebih lanjut' },
      { kind: 'formula', text: 'Final sales value = unit produksi × harga jual akhir per unit', note: 'Dasar awal untuk metode NRV jika produk dijual setelah proses lanjutan' },
      { kind: 'formula', text: 'NRV / nilai jual hipotetis = final sales value - separable cost', note: 'Dipakai ketika harga jual pada titik pisah tidak tersedia' },
      { kind: 'formula', text: 'Alokasi NRV = (NRV produk ÷ total NRV seluruh joint product) × total joint cost', note: 'Sering disebut metode harga jual relatif berbasis NRV' },
      { kind: 'formula', text: 'Alokasi weighted average = (unit × bobot produk ÷ total unit tertimbang) × total joint cost', note: 'Bobot mencerminkan karakteristik produk, bukan harga jual langsung' },
      { kind: 'formula', text: 'By-product net revenue = nilai jual by-product - separable cost by-product', note: 'Pendapatan bersih by-product dapat disajikan sesuai kebijakan yang diminta soal' },
      { kind: 'formula', text: 'Keputusan proses lanjut = incremental revenue - separable processing cost', note: 'Joint cost diabaikan karena sudah terjadi sebelum keputusan dibuat' },
      warningManual('Rumus dan angka dalam contoh nilai jual relatif, harga jual hipotetis, satuan fisik, dan rata-rata tertimbang perlu dicocokkan kembali jika menggunakan tabel scan asli.'),
      {
        kind: 'example',
        title: 'Contoh Kasus PT Berjaya Raya - Alokasi Kos Bersama',
        blocks: [
          { kind: 'p', text: 'PT Berjaya Raya memproduksi tiga produk utama melalui proses bersama. Kos bersama berjumlah Rp960.000.000.' },
          {
            kind: 'table',
            headers: ['Produk', 'Produksi Unit', 'Harga Jual per Unit saat Split-off'],
            rows: [
              ['A', '60.000', 'Rp30.000'],
              ['B', '90.000', 'Rp36.000'],
              ['C', '90.000', 'Rp24.000'],
            ],
          },
          { kind: 'h3', text: 'Langkah Penyelesaian Metode Nilai Jual Relatif' },
          {
            kind: 'ol',
            items: [
              'Hitung nilai jual setiap produk dengan mengalikan unit dan harga jual per unit.',
              'Jumlahkan nilai jual seluruh produk.',
              'Hitung proporsi nilai jual setiap produk.',
              'Kalikan proporsi setiap produk dengan total kos bersama Rp960.000.000.',
              'Hitung kos per unit dengan membagi alokasi kos bersama dengan jumlah unit.',
            ],
          },
          {
            kind: 'table',
            headers: ['Produk', 'Nilai Jual', 'Proporsi', 'Alokasi', 'Kos per Unit'],
            rows: [
              ['A', 'Rp1.800.000.000', '25%', 'Rp240.000.000', 'Rp4.000'],
              ['B', 'Rp3.240.000.000', '45%', 'Rp432.000.000', 'Rp4.800'],
              ['C', 'Rp2.160.000.000', '30%', 'Rp288.000.000', 'Rp3.200'],
            ],
          },
          { kind: 'h3', text: 'Metode Satuan Fisik' },
          {
            kind: 'table',
            headers: ['Produk', 'Unit', 'Proporsi', 'Alokasi'],
            rows: [
              ['A', '60.000', '25%', 'Rp240.000.000'],
              ['B', '90.000', '37,5%', 'Rp360.000.000'],
              ['C', '90.000', '37,5%', 'Rp360.000.000'],
            ],
          },
          { kind: 'p', text: 'Metode rata-rata kos per satuan = Rp960.000.000 ÷ 240.000 = Rp4.000 per unit.' },
          { kind: 'h3', text: 'Metode Rata-Rata Tertimbang' },
          {
            kind: 'table',
            headers: ['Produk', 'Unit', 'Bobot', 'Unit Tertimbang', 'Alokasi'],
            rows: [
              ['A', '60.000', '3', '180.000', 'Rp160.000.000'],
              ['B', '90.000', '4', '360.000', 'Rp320.000.000'],
              ['C', '90.000', '6', '540.000', 'Rp480.000.000'],
            ],
          },
          warningManual('Tabel asli dari scan perlu diperiksa ulang jika ingin digunakan sebagai tabel final akademik.'),
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Format Metode Harga Jual Hipotetis',
        blocks: [
          {
            kind: 'p',
            text:
              'Metode harga jual hipotetis dipakai ketika nilai jual pada titik pisah belum diketahui karena produk masih diproses lebih lanjut. Nilai jual akhir dikurangi biaya proses lanjutan untuk memperoleh nilai jual hipotetis.',
          },
          {
            kind: 'table',
            headers: ['Produk', 'Produksi Unit', 'Harga Jual Akhir', 'Biaya Pengolahan Lanjutan', 'Nilai Jual Hipotetis', 'Alokasi Kos Bersama'],
            rows: [
              ['A', 'Data dari soal', 'Data dari soal', 'Data dari soal', 'Nilai jual akhir - biaya proses lanjutan', 'Diisi berdasarkan proporsi hipotetis'],
              ['B', 'Data dari soal', 'Data dari soal', 'Data dari soal', 'Nilai jual akhir - biaya proses lanjutan', 'Diisi berdasarkan proporsi hipotetis'],
              ['C', 'Data dari soal', 'Data dari soal', 'Data dari soal', 'Nilai jual akhir - biaya proses lanjutan', 'Diisi berdasarkan proporsi hipotetis'],
            ],
          },
          warningManual('Angka contoh harga jual hipotetis harus mengikuti data soal atau tabel scan asli. Jangan mengisi angka baru jika tidak tersedia.'),
        ],
      },
      { kind: 'h2', text: 'Produk Sampingan' },
      {
        kind: 'p',
        text:
          'Produk sampingan dapat dijual langsung setelah terpisah dari produk utama atau perlu pengolahan lebih lanjut. Produk sampingan yang tidak memerlukan pengolahan lebih lanjut dapat langsung diakui sesuai perlakuan pendapatannya. Produk sampingan yang perlu pengolahan lebih lanjut memerlukan pencatatan biaya setelah titik pisah.',
      },
      {
        kind: 'p',
        text:
          'Pendapatan produk sampingan dapat diperlakukan sebagai penjualan, pendapatan lain-lain, pengurang HPP, atau pengurang total biaya produksi. Pada kasus PT Naranuansa, perlakuan berbeda memengaruhi letak penyajian, tetapi laba operasi akhir pada contoh tetap Rp20.100.000.',
      },
      {
        kind: 'p',
        text:
          'Reversal cost method menghitung kos produk sampingan dengan pendekatan mundur dari nilai pasar. Nilai pasar dikurangi taksiran laba, biaya pemasaran, biaya administrasi, dan biaya proses lanjutan untuk memperoleh taksiran kos produk sampingan. Replacement cost method digunakan ketika produk sampingan dipakai sebagai pengganti bahan atau sumber daya lain di dalam perusahaan.',
      },
      warningManual('Tabel reversal cost method, replacement cost method, dan laporan produk sampingan asli dari scan tetap perlu pemeriksaan manual.'),
      { kind: 'h2', text: 'Format Laporan Produk Sampingan' },
      {
        kind: 'p',
        text:
          'Pada produk sampingan, letak penyajian pendapatan memengaruhi struktur laporan laba rugi walaupun laba akhir dapat sama. Modul dan soal latihan menampilkan empat perlakuan: pendapatan penjualan, pendapatan lain-lain, pengurang harga pokok penjualan, dan pengurang jumlah biaya produksi produk utama. Bagian ini wajib ada karena mahasiswa sering salah menempatkan produk sampingan di laporan.',
      },
      {
        kind: 'example',
        title: 'PT Naranuansa - Produk Sampingan sebagai Pendapatan Penjualan',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Jumlah'],
            rows: [
              ['Penjualan produk utama', 'Rp60.075.000'],
              ['Pendapatan penjualan produk sampingan', 'Rp25.000.000'],
              ['Penjualan bersih', 'Rp85.075.000'],
              ['Harga pokok penjualan produk utama', '(Rp60.075.000)'],
              ['Laba kotor', 'Rp25.000.000'],
              ['Beban pemasaran dan administrasi', '(Rp4.900.000)'],
              ['Laba operasi', 'Rp20.100.000'],
            ],
          },
          { kind: 'p', text: 'Jika pendapatan produk sampingan disajikan sebagai bagian penjualan, pendapatan tersebut menambah penjualan bersih. Harga pokok penjualan produk utama tetap ditampilkan sebesar kos produk utama yang terjual.' },
        ],
      },
      {
        kind: 'example',
        title: 'PT Naranuansa - Produk Sampingan sebagai Pendapatan Lain-lain',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Jumlah'],
            rows: [
              ['Penjualan produk utama', 'Rp60.075.000'],
              ['Harga pokok penjualan produk utama', '(Rp60.075.000)'],
              ['Laba kotor', 'Rp0'],
              ['Beban pemasaran dan administrasi', '(Rp4.900.000)'],
              ['Rugi operasi sebelum pendapatan lain-lain', '(Rp4.900.000)'],
              ['Pendapatan penjualan produk sampingan', 'Rp25.000.000'],
              ['Laba sebelum pajak', 'Rp20.100.000'],
            ],
          },
          { kind: 'p', text: 'Jika diperlakukan sebagai pendapatan lain-lain, produk sampingan tidak mengubah penjualan produk utama dan tidak mengurangi HPP. Pendapatan baru diakui setelah laba atau rugi operasi.' },
        ],
      },
      {
        kind: 'example',
        title: 'PT Naranuansa - Produk Sampingan sebagai Pengurang HPP',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Jumlah'],
            rows: [
              ['Penjualan produk utama', 'Rp60.075.000'],
              ['Harga pokok penjualan sebelum pengurang', 'Rp60.075.000'],
              ['Dikurangi pendapatan produk sampingan', '(Rp25.000.000)'],
              ['Harga pokok penjualan setelah pengurang', '(Rp35.075.000)'],
              ['Laba kotor', 'Rp25.000.000'],
              ['Beban pemasaran dan administrasi', '(Rp4.900.000)'],
              ['Laba operasi', 'Rp20.100.000'],
            ],
          },
          { kind: 'p', text: 'Dalam perlakuan ini, pendapatan produk sampingan tidak ditampilkan sebagai pendapatan terpisah, tetapi mengurangi HPP produk utama.' },
        ],
      },
      {
        kind: 'example',
        title: 'PT Naranuansa - Produk Sampingan sebagai Pengurang Biaya Produksi',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Jumlah'],
            rows: [
              ['Penjualan produk utama', 'Rp60.075.000'],
              ['Persediaan awal produk utama', 'Rp22.275.000'],
              ['Biaya produksi produk utama', 'Rp48.375.000'],
              ['Dikurangi pendapatan produk sampingan', '(Rp25.000.000)'],
              ['Barang tersedia untuk dijual setelah pengurang', 'Rp45.650.000'],
              ['Persediaan akhir produk utama', '(Rp10.575.000)'],
              ['Harga pokok penjualan', '(Rp35.075.000)'],
              ['Laba kotor', 'Rp25.000.000'],
              ['Beban pemasaran dan administrasi', '(Rp4.900.000)'],
              ['Laba operasi', 'Rp20.100.000'],
            ],
          },
          { kind: 'p', text: 'Dalam perlakuan ini, pendapatan produk sampingan mengurangi biaya produksi produk utama sebelum perhitungan barang tersedia untuk dijual dan HPP.' },
        ],
      },
      { kind: 'h3', text: 'Keputusan Menjual pada Split-off atau Memproses Lebih Lanjut' },
      {
        kind: 'p',
        text:
          'Alokasi joint cost diperlukan untuk penilaian persediaan dan laba periodik, tetapi tidak boleh dijadikan dasar utama keputusan proses lanjut. Joint cost sudah terjadi sebelum split-off sehingga tidak berubah oleh keputusan setelah split-off. Keputusan memproses lebih lanjut harus membandingkan tambahan pendapatan dengan tambahan biaya proses lanjutan.',
      },
      { kind: 'formula', text: 'Tambahan manfaat proses lanjut = Harga jual setelah proses lanjut - Harga jual pada split-off', note: 'Mengukur tambahan pendapatan setelah split-off' },
      { kind: 'formula', text: 'Tambahan laba proses lanjut = Tambahan manfaat proses lanjut - Biaya proses lanjutan', note: 'Jika positif, proses lanjut secara ekonomi layak; jika negatif, jual pada split-off lebih tepat' },
      {
        kind: 'table',
        headers: ['Kondisi', 'Keputusan'],
        rows: [
          ['Tambahan pendapatan > biaya proses lanjutan', 'Proses lebih lanjut dapat diterima'],
          ['Tambahan pendapatan < biaya proses lanjutan', 'Jual pada split-off lebih tepat'],
          ['Tambahan pendapatan = biaya proses lanjutan', 'Kedua alternatif memberi hasil ekonomi yang sama sebelum faktor kualitatif'],
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace TM 8 - Alokasi Joint Cost dengan Nilai Jual Relatif',
          instruction: 'Gunakan data terlihat: Produk A 1.000 unit × Rp40.000; Produk B 500 unit × Rp60.000; joint cost Rp49.000.000.',
          currency: 'Rp',
          headers: ['Komponen', 'Produk A', 'Produk B', 'Total'],
          rows: [
            { id: 'tm8-joint-sales', label: 'Nilai jual relatif', cells: [
              { id: 'tm8-joint-sales-a', answer: 40000000, placeholder: '1.000 × 40.000' },
              { id: 'tm8-joint-sales-b', answer: 30000000, placeholder: '500 × 60.000' },
              { id: 'tm8-joint-sales-total', answer: 70000000, placeholder: 'Total nilai jual' },
            ] },
            { id: 'tm8-joint-allocation', label: 'Alokasi joint cost', cells: [
              { id: 'tm8-joint-alloc-a', answer: 28000000, placeholder: '40/70 × 49.000.000' },
              { id: 'tm8-joint-alloc-b', answer: 21000000, placeholder: '30/70 × 49.000.000' },
              { id: 'tm8-joint-alloc-total', answer: 49000000, placeholder: 'Total joint cost' },
            ] },
          ],
        },
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace TM 8 - Nilai Jual Hipotetis',
          instruction: 'Gunakan data terlihat: Produk X nilai jual akhir Rp80.000.000 dan biaya proses lanjutan Rp14.000.000; Produk Y nilai jual akhir Rp60.000.000 dan biaya proses lanjutan Rp10.000.000; joint cost Rp58.000.000.',
          currency: 'Rp',
          headers: ['Komponen', 'Produk X', 'Produk Y', 'Total'],
          rows: [
            { id: 'tm8-hypo-nrv', label: 'Nilai jual hipotetis', cells: [
              { id: 'tm8-hypo-x', answer: 66000000, placeholder: '80.000.000 - 14.000.000' },
              { id: 'tm8-hypo-y', answer: 50000000, placeholder: '60.000.000 - 10.000.000' },
              { id: 'tm8-hypo-total', answer: 116000000, placeholder: 'Total nilai jual hipotetis' },
            ] },
            { id: 'tm8-hypo-allocation', label: 'Alokasi joint cost', cells: [
              { id: 'tm8-hypo-alloc-x', answer: 33000000, placeholder: '66/116 × 58.000.000' },
              { id: 'tm8-hypo-alloc-y', answer: 25000000, placeholder: '50/116 × 58.000.000' },
              { id: 'tm8-hypo-alloc-total', answer: 58000000, placeholder: 'Total joint cost' },
            ] },
          ],
        },
      },
      {
        kind: 'example',
        title: 'Mini Lab Batch 6 - PT Susu Nusantara',
        blocks: [
          { kind: 'p', text: 'PT Susu Nusantara memproses susu segar dan menghasilkan tiga joint product: Susu UHT, Keju, dan Yogurt. Joint cost bulan November sebesar Rp8.000.000. Data produksi, separable cost, bobot, dan harga jual akhir digunakan untuk membandingkan empat metode alokasi joint cost.' },
          {
            kind: 'table',
            headers: ['Produk', 'Produksi', 'Separable Cost', 'Bobot', 'Harga Jual Akhir'],
            rows: [
              ['A - Susu UHT', '2.000 liter', 'Rp400.000', '2', 'Rp3.500/liter'],
              ['B - Keju', '1.500 liter', 'Rp600.000', '4', 'Rp9.000/liter'],
              ['C - Yogurt', '500 liter', 'Rp200.000', '1', 'Rp5.500/liter'],
            ],
          },
          {
            kind: 'table',
            headers: ['Metode', 'Dasar Alokasi', 'Produk A', 'Produk B', 'Produk C'],
            rows: [
              ['Unit produksi', 'Liter diproduksi', 'Rp4.000.000', 'Rp3.000.000', 'Rp1.000.000'],
              ['Biaya rata-rata per unit', 'Rp8.000.000 ÷ 4.000 liter = Rp2.000/liter', 'Rp4.000.000', 'Rp3.000.000', 'Rp1.000.000'],
              ['NRV/harga jual relatif', 'Nilai jual akhir - separable cost', 'Rp2.394.558', 'Rp4.680.272', 'Rp925.170'],
              ['Weighted average', 'Unit × bobot', 'Rp3.047.619', 'Rp4.571.429', 'Rp380.952'],
            ],
          },
          { kind: 'p', text: 'Pada metode unit produksi dan biaya rata-rata per unit, hasil alokasi sama karena seluruh produk memakai satuan liter dan tidak ada bobot tambahan. Pada metode NRV, Keju menerima alokasi terbesar karena nilai jual akhirnya tinggi. Pada weighted average, bobot membuat Keju tetap menerima alokasi terbesar, sedangkan Yogurt paling kecil karena unit dan bobotnya paling rendah.' },
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace Batch 6 - PT Susu Nusantara Metode NRV',
          instruction: 'Hitung nilai jual akhir, NRV, dan alokasi joint cost Rp8.000.000. Toleransi pembulatan Rp2 diperbolehkan.',
          currency: 'Rp',
          headers: ['Komponen', 'Susu UHT', 'Keju', 'Yogurt', 'Total'],
          rows: [
            { id: 'b6-susu-sales', label: 'Nilai jual akhir', cells: [
              { id: 'b6-susu-sales-a', answer: 7000000, placeholder: '2.000 × 3.500' },
              { id: 'b6-susu-sales-b', answer: 13500000, placeholder: '1.500 × 9.000' },
              { id: 'b6-susu-sales-c', answer: 2750000, placeholder: '500 × 5.500' },
              { id: 'b6-susu-sales-total', answer: 23250000, placeholder: 'Total nilai jual' },
            ] },
            { id: 'b6-susu-nrv', label: 'NRV / nilai jual hipotetis', cells: [
              { id: 'b6-susu-nrv-a', answer: 6600000, placeholder: '7.000.000 - 400.000' },
              { id: 'b6-susu-nrv-b', answer: 12900000, placeholder: '13.500.000 - 600.000' },
              { id: 'b6-susu-nrv-c', answer: 2550000, placeholder: '2.750.000 - 200.000' },
              { id: 'b6-susu-nrv-total', answer: 22050000, placeholder: 'Total NRV' },
            ] },
            { id: 'b6-susu-nrv-allocation', label: 'Alokasi joint cost metode NRV', cells: [
              { id: 'b6-susu-nrv-alloc-a', answer: 2394558, tolerance: 2, placeholder: '6.600.000/22.050.000 × 8.000.000' },
              { id: 'b6-susu-nrv-alloc-b', answer: 4680272, tolerance: 2, placeholder: '12.900.000/22.050.000 × 8.000.000' },
              { id: 'b6-susu-nrv-alloc-c', answer: 925170, tolerance: 2, placeholder: '2.550.000/22.050.000 × 8.000.000' },
              { id: 'b6-susu-nrv-alloc-total', answer: 8000000, tolerance: 2, placeholder: 'Total joint cost' },
            ] },
          ],
        },
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace Batch 6 - PT Susu Nusantara Weighted Average',
          instruction: 'Gunakan bobot A:B:C = 2:4:1. Hitung unit tertimbang dan alokasi joint cost Rp8.000.000. Toleransi pembulatan Rp2 diperbolehkan.',
          currency: 'Rp',
          headers: ['Komponen', 'Susu UHT', 'Keju', 'Yogurt', 'Total'],
          rows: [
            { id: 'b6-susu-weighted-units', label: 'Unit tertimbang', cells: [
              { id: 'b6-susu-wu-a', answer: 4000, placeholder: '2.000 × 2' },
              { id: 'b6-susu-wu-b', answer: 6000, placeholder: '1.500 × 4' },
              { id: 'b6-susu-wu-c', answer: 500, placeholder: '500 × 1' },
              { id: 'b6-susu-wu-total', answer: 10500, placeholder: 'Total unit tertimbang' },
            ] },
            { id: 'b6-susu-weighted-allocation', label: 'Alokasi joint cost weighted average', cells: [
              { id: 'b6-susu-wa-alloc-a', answer: 3047619, tolerance: 2, placeholder: '4.000/10.500 × 8.000.000' },
              { id: 'b6-susu-wa-alloc-b', answer: 4571429, tolerance: 2, placeholder: '6.000/10.500 × 8.000.000' },
              { id: 'b6-susu-wa-alloc-c', answer: 380952, tolerance: 2, placeholder: '500/10.500 × 8.000.000' },
              { id: 'b6-susu-wa-total', answer: 8000000, tolerance: 2, placeholder: 'Total joint cost' },
            ] },
          ],
        },
      },
      {
        kind: 'solution-reveal',
        title: 'Pembahasan Workspace TM 8',
        prompt: 'Buka setelah menghitung alokasi joint cost.',
        blocks: [
          { kind: 'p', text: 'Metode nilai jual relatif memakai nilai jual pada split-off. Produk A menghasilkan Rp40.000.000 dan Produk B Rp30.000.000, sehingga proporsinya 40/70 dan 30/70. Joint cost Rp49.000.000 dialokasikan menjadi Rp28.000.000 untuk A dan Rp21.000.000 untuk B.' },
          { kind: 'p', text: 'Metode nilai jual hipotetis memakai nilai jual akhir dikurangi biaya proses lanjutan. Nilai hipotetis X Rp66.000.000 dan Y Rp50.000.000. Total Rp116.000.000 menjadi dasar alokasi joint cost Rp58.000.000, sehingga X mendapat Rp33.000.000 dan Y Rp25.000.000.' },
        ],
      },
      { kind: 'h2', text: 'Kesalahan Umum' },
      {
        kind: 'table',
        headers: ['Kesalahan', 'Koreksi'],
        rows: [
          ['Mencampur kos bersama dan kos bergabung', 'Kos bersama berasal dari satu proses sebelum split-off, sedangkan kos bergabung terutama berkaitan dengan overhead bersama'],
          ['Tidak menentukan split-off point', 'Tentukan titik pisah sebelum menghitung kos bersama dan biaya proses lanjutan'],
          ['Memakai joint cost untuk keputusan proses lanjut', 'Keputusan proses lanjut memakai tambahan pendapatan dan tambahan biaya setelah split-off'],
          ['Menganggap produk sampingan selalu sama dengan produk bersama', 'Produk sampingan memiliki nilai jual relatif kecil dibanding produk utama'],
          ['Menyalin tabel buram tanpa pemeriksaan manual', 'Beri warning dan cek sumber asli'],
        ],
      },
      {
        kind: 'interactive-match',
        spec: {
          title: 'Latihan Aktif Batch 6 - Pilih Metode Alokasi',
          instruction: 'Pasangkan petunjuk soal dengan metode alokasi yang paling tepat.',
          choices: ['Unit produksi', 'Biaya rata-rata per unit', 'NRV / harga jual hipotetis', 'Weighted average', 'Non-cost method by-product', 'Keputusan proses lanjut'],
          pairs: [
            { id: 'b6-match-unit', prompt: 'Soal hanya memberikan jumlah kilogram atau liter tiap joint product dan meminta alokasi berdasarkan kuantitas fisik.', answer: 'Unit produksi' },
            { id: 'b6-match-average', prompt: 'Soal meminta total joint cost dibagi total unit lalu hasil per unit dipakai ke seluruh produk.', answer: 'Biaya rata-rata per unit' },
            { id: 'b6-match-nrv', prompt: 'Soal memberikan harga jual akhir dan separable cost setelah split-off.', answer: 'NRV / harga jual hipotetis' },
            { id: 'b6-match-weighted', prompt: 'Soal memberikan bobot 2:4:1 atau faktor tertimbang untuk tiap produk.', answer: 'Weighted average' },
            { id: 'b6-match-byproduct', prompt: 'Produk sampingan bernilai kecil dan pendapatannya diminta sebagai pengurang HPP.', answer: 'Non-cost method by-product' },
            { id: 'b6-match-further', prompt: 'Soal bertanya apakah produk sebaiknya dijual pada split-off atau diproses lebih lanjut.', answer: 'Keputusan proses lanjut' },
          ],
          feedback: 'Kunci TM 8 adalah membaca kata pemicu. Bobot mengarah ke weighted average, harga jual akhir dikurangi separable cost mengarah ke NRV, sedangkan keputusan proses lanjut tidak memakai joint cost.',
        },
      },
      {
        kind: 'callout',
        variant: 'warning',
        title: 'Jebakan UAS Batch 6',
        text: 'Jangan mengalokasikan joint cost ke by-product jika soal menyatakan by-product bernilai tidak material. Jangan memakai joint cost untuk keputusan proses lanjut. Jangan memasukkan separable cost ke dalam joint cost; separable cost hanya muncul setelah split-off dan dipakai dalam metode NRV atau keputusan proses lanjut.',
      },
      {
        kind: 'example',
        title: 'Latihan Pemahaman TM 8',
        blocks: [
          {
            kind: 'ol',
            items: [
              'Jelaskan perbedaan kos bersama dan kos bergabung.',
              'Tentukan split-off point dalam kasus proses bersama.',
              'Hitung alokasi kos bersama dengan metode nilai jual relatif.',
              'Hitung alokasi kos bersama dengan metode harga jual hipotetis jika biaya proses lanjutan tersedia.',
              'Hitung alokasi kos bersama dengan metode satuan fisik.',
              'Hitung alokasi kos bersama dengan metode rata-rata kos per satuan.',
              'Hitung alokasi kos bersama dengan metode rata-rata tertimbang.',
              'Jelaskan perlakuan pendapatan produk sampingan sebagai penjualan, pendapatan lain-lain, pengurang HPP, atau pengurang kos produksi.',
              'Jelaskan reversal cost method dan replacement cost method.',
            ],
          },
        ],
      },
      { kind: 'h2', text: 'Ringkasan' },
      {
        kind: 'p',
        text:
          'TM 8 membahas produk yang muncul dari satu proses produksi, yaitu produk bersama dan produk sampingan. Kos bersama terjadi sebelum titik pisah dan harus dialokasikan untuk penentuan laba serta persediaan. Metode alokasi utama meliputi nilai jual relatif, harga jual hipotetis, satuan fisik, rata-rata kos per satuan, dan rata-rata tertimbang.',
      },
      {
        kind: 'p',
        text:
          'Produk sampingan diperlakukan berbeda dari produk bersama karena nilai jualnya relatif kecil. Perlakuan produk sampingan dapat memakai pendekatan non-cost atau pendekatan cost. Reversal cost method dan replacement cost method digunakan ketika produk sampingan perlu diberi nilai kos tertentu.',
      },
      { kind: 'h2', text: 'Checklist Kelengkapan' },
      {
        kind: 'table',
        headers: ['Komponen', 'Status'],
        rows: [
          ['Kos bersama dan kos bergabung', 'Lengkap'],
          ['Produk bersama, produk sekutu, produk bergabung, dan produk sampingan', 'Lengkap'],
          ['Split-off point', 'Lengkap'],
          ['Metode nilai jual relatif', 'Lengkap'],
          ['Metode harga jual hipotetis', 'Lengkap sebagai konsep dan format'],
          ['Metode satuan fisik', 'Lengkap'],
          ['Metode rata-rata kos per satuan', 'Lengkap'],
          ['Metode rata-rata tertimbang', 'Lengkap'],
          ['Perlakuan produk sampingan', 'Lengkap'],
          ['Reversal cost method', '[Perlu pemeriksaan manual] untuk tabel scan asli'],
          ['Replacement cost method', '[Perlu pemeriksaan manual] untuk tabel scan asli'],
          ['Latihan dan ringkasan', 'Lengkap'],
        ],
        caption: 'Checklist Kelengkapan TM 8',
      },
    ],
  },

  9: {
    id: 'akbi-tm-9',
    tm: 9,
    title: 'Perencanaan, Pengendalian, dan Penentuan Kos Bahan Baku',
    ref: 'CU 9 · IMN 8 · Tutor AKBI TM 9',
    source: 'SILABI-Akuntansi Biaya-2026.doc; TUTOR AKBI_TM 9.pdf; AKBI_Master_Content_Bagian_1_TM1-TM11.md',
    phase: 'pra_uas',
    manualCheckCount: 4,
    intro:
      'Bahan baku harus direncanakan, dikendalikan, dicatat, dan dinilai dengan benar. Kesalahan bahan akan memengaruhi harga pokok produksi.',
    objectives: [
      'Menjelaskan alur pengadaan bahan baku.',
      'Menjelaskan dokumen yang digunakan dalam pengadaan dan pemakaian bahan.',
      'Menjelaskan unsur kos bahan baku.',
      'Menjelaskan kos akuisisi bahan dan alternatif pembebanannya.',
      'Membedakan metode pencatatan fisik dan perpetual.',
      'Menerapkan FIFO, LIFO, rata-rata, dan moving average.',
      'Menjelaskan EOQ atau KPE.',
      'Menjelaskan TPK, safety stock, dan reorder point.',
      'Menjelaskan metode siklus pemesanan, metode min-max, dan two-bin method.',
      'Menjelaskan pendekatan selektif atau ABC dalam pengendalian bahan baku.',
      'Menghitung ukuran produksi optimum atau production runs jika data tersedia.',
      'Menjelaskan JIT dan Backflush Costing.',
      'Menyusun jurnal dan akun T untuk contoh JIT dan Backflush Costing.',
    ],
    blocks: [
      { kind: 'h2', text: 'Tujuan Pembelajaran' },
      {
        kind: 'p',
        text:
          'Mahasiswa mampu menjelaskan alur pengadaan bahan, dokumen bahan, kos bahan, metode fisik, metode perpetual, FIFO, LIFO, rata-rata, moving average, EOQ/KPE, TPK, safety stock, metode siklus pemesanan, metode min-max, two-bin method, pengendalian selektif/ABC, production runs, JIT, dan Backflush Costing.',
      },
      { kind: 'h2', text: 'Gambaran Umum' },
      {
        kind: 'p',
        text:
          'Bahan baku harus direncanakan, dikendalikan, dicatat, dan dinilai dengan benar. Kesalahan bahan akan memengaruhi harga pokok produksi. Sistem bahan baku mencakup perencanaan kebutuhan, pembelian, penerimaan, penyimpanan, pemakaian, pencatatan, penilaian, dan pengendalian persediaan.',
      },
      { kind: 'h2', text: 'Alur Belajar Cepat Batch 7' },
      {
        kind: 'table',
        headers: ['Langkah', 'Fokus Belajar', 'Output yang Harus Bisa Dibuat'],
        rows: [
          ['1', 'Klasifikasi bahan', 'Membedakan bahan baku langsung dari bahan tidak langsung dan menentukan akun pembebanannya'],
          ['2', 'Alur dokumen', 'Membaca purchase requisition, purchase order, receiving report, material requisition, dan material record card'],
          ['3', 'Kos bahan', 'Menghitung pembelian bersih, bahan tersedia, dan bahan baku dipakai'],
          ['4', 'Penilaian persediaan', 'Menyusun kartu FIFO, LIFO, weighted-average, dan moving average sesuai sistem pencatatan'],
          ['5', 'Pengendalian persediaan', 'Menghitung EOQ/KPE, jumlah pesanan, reorder point, dan safety stock'],
          ['6', 'Sistem pengendalian', 'Membedakan cycle order, min-max, two-bin method, ABC inventory, JIT, dan backflush costing'],
          ['7', 'Jurnal bahan', 'Membuat jurnal pembelian, freight-in, pemakaian direct materials, indirect materials, dan backflush'],
        ],
        caption: 'Peta belajar TM 9 disusun agar mahasiswa tidak langsung masuk ke rumus EOQ sebelum memahami dokumen, akun, dan alur bahan.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Inti UAS TM 9',
        text: 'Fokus utama TM 9 adalah menjaga hubungan antara dokumen, angka, dan akun. Purchase requisition memicu pembelian; receiving report memvalidasi bahan diterima; material requisition menjadi dasar pemakaian bahan ke WIP atau FOH. Jika soal meminta FIFO/LIFO/moving average, susun kartu bahan terlebih dahulu sebelum menghitung bahan dipakai atau persediaan akhir.',
      },
      { kind: 'h2', text: 'Formula Sheet Batch 7' },
      {
        kind: 'table',
        headers: ['Area', 'Formula', 'Catatan Ujian'],
        rows: [
          ['Pembelian bersih', 'Pembelian + Freight-in - Diskon pembelian - Retur pembelian', 'Freight-in menambah kos bahan jika dikapitalisasi ke material'],
          ['Bahan tersedia', 'Persediaan awal bahan + Pembelian bersih', 'Jangan langsung memakai angka pembelian sebagai bahan dipakai'],
          ['Bahan baku dipakai', 'Bahan tersedia - Persediaan akhir bahan', 'Bahan langsung masuk WIP; bahan tidak langsung masuk FOH'],
          ['Weighted average periodic', 'Total kos tersedia ÷ Total unit tersedia', 'Dipakai satu kali untuk periode, setelah total unit dan kos tersedia diketahui'],
          ['Moving average perpetual', 'Saldo kos setelah pembelian ÷ Saldo unit setelah pembelian', 'Harga rata-rata diperbarui setiap pembelian, bukan setiap pemakaian'],
          ['EOQ/KPE', '√((2 × D × S) ÷ H)', 'D = kebutuhan periode; S = biaya pesan/setup; H = biaya simpan per unit per periode'],
          ['Reorder point/TPK', 'Kebutuhan selama lead time + Safety stock', 'Gunakan pemakaian selama masa tunggu, bukan kebutuhan tahunan penuh'],
          ['Jumlah pesanan', 'Kebutuhan periode ÷ EOQ', 'Hasil dapat dibulatkan sesuai instruksi soal'],
        ],
        caption: 'Formula sheet ringkas untuk perhitungan bahan baku langsung dan pengendalian persediaan.',
      },
      {
        kind: 'example',
        title: 'Mini Lab Batch 7 - PT Melati Materials Control',
        blocks: [
          {
            kind: 'table',
            headers: ['Data', 'Nilai'],
            rows: [
              ['Persediaan awal bahan baku', 'Rp18.000.000'],
              ['Pembelian bahan baku', 'Rp96.000.000'],
              ['Freight-in pembelian', 'Rp4.000.000'],
              ['Retur pembelian', 'Rp3.000.000'],
              ['Diskon pembelian', 'Rp1.000.000'],
              ['Persediaan akhir bahan baku', 'Rp22.000.000'],
              ['Dari bahan yang dipakai, bahan tidak langsung', 'Rp6.000.000'],
            ],
          },
          { kind: 'formula', text: 'Pembelian bersih = 96.000.000 + 4.000.000 - 3.000.000 - 1.000.000 = Rp96.000.000', note: 'Freight-in menambah kos; retur dan diskon mengurangi kos.' },
          { kind: 'formula', text: 'Bahan tersedia = 18.000.000 + 96.000.000 = Rp114.000.000', note: 'Jumlah bahan yang siap dipakai selama periode.' },
          { kind: 'formula', text: 'Total bahan dipakai = 114.000.000 - 22.000.000 = Rp92.000.000', note: 'Ini masih mencakup bahan langsung dan tidak langsung.' },
          { kind: 'formula', text: 'Bahan baku langsung dipakai = 92.000.000 - 6.000.000 = Rp86.000.000', note: 'Bahan tidak langsung dipindahkan ke Factory Overhead Control.' },
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace Batch 7 - Kos Bahan PT Melati',
          instruction: 'Gunakan data Mini Lab PT Melati. Isi angka kunci materials control. Masukkan angka tanpa simbol mata uang.',
          currency: 'Rp',
          headers: ['Komponen', 'Jawaban'],
          rows: [
            { id: 'b7-melati-net-purchase', label: 'Pembelian bersih', cells: [{ id: 'b7-melati-net-purchase-value', answer: 96000000, placeholder: 'Pembelian + freight-in - retur - diskon' }] },
            { id: 'b7-melati-available', label: 'Bahan tersedia untuk dipakai', cells: [{ id: 'b7-melati-available-value', answer: 114000000, placeholder: 'Persediaan awal + pembelian bersih' }] },
            { id: 'b7-melati-total-used', label: 'Total bahan dipakai', cells: [{ id: 'b7-melati-total-used-value', answer: 92000000, placeholder: 'Bahan tersedia - persediaan akhir' }] },
            { id: 'b7-melati-direct-used', label: 'Bahan langsung dipakai', cells: [{ id: 'b7-melati-direct-used-value', answer: 86000000, placeholder: 'Total bahan dipakai - bahan tidak langsung' }] },
            { id: 'b7-melati-indirect-used', label: 'Bahan tidak langsung ke FOH', cells: [{ id: 'b7-melati-indirect-used-value', answer: 6000000, placeholder: 'Data bahan tidak langsung' }] },
          ],
        },
      },
      {
        kind: 'journal-builder',
        spec: {
          title: 'Journal Builder Batch 7 - Pemakaian Bahan PT Melati',
          instruction: 'Susun jurnal pemakaian bahan jika total bahan dipakai Rp92.000.000 dan bahan tidak langsung Rp6.000.000.',
          lines: [
            { id: 'b7-melati-wip', account: 'Work in Process / Barang Dalam Proses', debit: 86000000 },
            { id: 'b7-melati-foh', account: 'Factory Overhead Control', debit: 6000000 },
            { id: 'b7-melati-materials', account: 'Materials Inventory / Persediaan Bahan', credit: 92000000 },
          ],
        },
      },
      {
        kind: 'callout',
        variant: 'tip',
        title: 'Pembahasan jurnal pemakaian bahan',
        text: 'Bahan langsung dipakai masuk WIP, sedangkan bahan tidak langsung masuk FOH Control. Kredit Materials Inventory sebesar total bahan yang keluar dari gudang.',
      },
      {
        kind: 'interactive-match',
        spec: {
          title: 'Dokumen Bahan Baku dan Fungsi Kontrol',
          instruction: 'Pasangkan dokumen dengan fungsi pengendalian yang paling tepat.',
          feedback: 'Urutkan alurnya: kebutuhan bahan diminta, pembelian dipesan, barang diterima, bahan dikeluarkan, lalu mutasi dicatat.',
          choices: ['Purchase requisition', 'Purchase order', 'Receiving report', 'Material requisition', 'Material record card'],
          pairs: [
            { id: 'b7-doc-pr', prompt: 'Permintaan internal agar bagian pembelian memesan bahan.', answer: 'Purchase requisition', feedback: 'Purchase requisition adalah otorisasi awal pembelian dari unit yang membutuhkan bahan.' },
            { id: 'b7-doc-po', prompt: 'Dokumen resmi kepada pemasok tentang jenis, jumlah, harga, dan jadwal pengiriman.', answer: 'Purchase order', feedback: 'Purchase order adalah pesanan formal kepada vendor.' },
            { id: 'b7-doc-rr', prompt: 'Bukti bahan sudah diterima dan diperiksa kuantitas/kualitasnya.', answer: 'Receiving report', feedback: 'Receiving report dibuat oleh bagian penerimaan.' },
            { id: 'b7-doc-mr', prompt: 'Dasar pengeluaran bahan dari gudang ke job, proses, atau departemen.', answer: 'Material requisition', feedback: 'Material requisition menghubungkan pemakaian bahan dengan WIP atau FOH.' },
            { id: 'b7-doc-card', prompt: 'Catatan mutasi dan saldo bahan per item.', answer: 'Material record card', feedback: 'Material record card membantu kontrol saldo dan penilaian bahan.' },
          ],
        },
      },
      { kind: 'h2', text: 'Peta Submateri' },
      {
        kind: 'table',
        headers: ['Submateri', 'Pembahasan'],
        rows: [
          ['Pengadaan bahan', 'Product engineering, budgeting, purchase requisition, purchase order'],
          ['Dokumen bahan', 'Receiving report, material requisition, material record card'],
          ['Kos bahan', 'Harga, diskon, retur, freight-in, kos akuisisi'],
          ['Kos akuisisi', 'Biaya pembelian, penerimaan, pembongkaran, inspeksi, asuransi, penyimpanan, dan akuntansi'],
          ['Pencatatan', 'Metode fisik dan metode perpetual'],
          ['Penilaian', 'Identifikasi khusus, FIFO, LIFO, rata-rata, moving average'],
          ['Pengendalian persediaan', 'EOQ/KPE, TPK, safety stock, reorder point'],
          ['Metode pengendalian bahan', 'Metode siklus pemesanan, metode min-max, two-bin method, dan JIT'],
          ['Pengendalian selektif/ABC', 'Kelas A, B, C berdasarkan gradasi nilai dan kuantitas'],
          ['Production runs', 'Ukuran produksi optimum jika bahan atau item diproduksi sendiri'],
          ['JIT dan Backflush', 'Persediaan minimum, pencatatan ringkas, jurnal backflush, dan akun T'],
        ],
      },
      { kind: 'h2', text: 'Materi Teori' },
      { kind: 'h3', text: 'Pengadaan Bahan Baku' },
      {
        kind: 'p',
        text:
          'Pengadaan bahan dimulai dari desain produk dan rencana produksi. Bagian rekayasa produk membuat prototype, menentukan routing, menyusun urutan operasi, dan membuat permintaan bahan baku. Informasi ini menjadi masukan bagi bagian produksi dalam menyusun anggaran produksi.',
      },
      {
        kind: 'p',
        text:
          'Setelah anggaran produksi dibuat, bagian pembelian menerima permintaan pembelian, mencari sumber penawaran, menilai harga dan kualitas, mengatur jadwal pengiriman, menyiapkan purchase order, serta menyediakan data pembelian bagi bagian akuntansi. Bagian penerimaan memeriksa kuantitas dan kualitas bahan yang datang lalu membuat receiving report.',
      },
      {
        kind: 'table',
        headers: ['Tahap', 'Dokumen', 'Fungsi'],
        rows: [
          ['Product engineering', 'Daftar kebutuhan bahan', 'Menentukan bahan, routing, dan urutan operasi'],
          ['Budgeting', 'Anggaran produksi', 'Menentukan kebutuhan bahan sesuai rencana produksi'],
          ['Permintaan pembelian', 'Purchase requisition', 'Dasar bagi bagian pembelian untuk memesan bahan'],
          ['Pemesanan', 'Purchase order', 'Pesanan resmi kepada pemasok'],
          ['Penerimaan', 'Receiving report', 'Mencatat kuantitas dan kualitas bahan yang diterima'],
          ['Pemakaian bahan', 'Material requisition', 'Dasar pengeluaran bahan dari gudang ke produksi'],
          ['Pencatatan bahan', 'Material record card', 'Mencatat mutasi dan saldo bahan'],
        ],
      },
      warningManual('Gambar alur pengadaan bahan asli perlu dicek dari sumber jika ingin ditampilkan sebagai visual final.'),
      { kind: 'h3', text: 'Kos Bahan dan Kos Akuisisi' },
      {
        kind: 'p',
        text:
          'Kos bahan tidak hanya terdiri dari harga faktur. Kos bahan dapat mencakup harga bahan, diskon, retur pembelian, freight-in, serta kos akuisisi lain sampai bahan siap digunakan dalam produksi. Diskon dan retur mengurangi kos bahan, sedangkan freight-in menambah kos bahan.',
      },
      {
        kind: 'p',
        text:
          'Kos akuisisi mencakup biaya untuk fungsi pembelian, penerimaan, pembongkaran, inspeksi, asuransi, penyimpanan, dan akuntansi. Karena sulit ditelusuri langsung ke item bahan tertentu, kos akuisisi dapat dibebankan dengan tarif tunggal atau tarif berdasarkan aktivitas.',
      },
      {
        kind: 'table',
        headers: ['Komponen Kos Bahan', 'Pengaruh terhadap Kos Bahan'],
        rows: [
          ['Harga bahan', 'Menambah kos bahan'],
          ['Diskon harga', 'Mengurangi kos bahan'],
          ['Retur pembelian', 'Mengurangi kos bahan'],
          ['Freight-in atau kos angkut pembelian', 'Menambah kos bahan'],
          ['Kos akuisisi', 'Dapat dialokasikan ke bahan atau diperlakukan sebagai overhead'],
        ],
      },
      {
        kind: 'p',
        text:
          'Freight-in dapat diperlakukan dengan beberapa cara. Pertama, langsung ditambahkan ke bahan yang dibeli berdasarkan nilai atau berat. Kedua, dicatat dalam akun kos angkut pembelian lalu dibebankan saat bahan digunakan. Ketiga, diperlakukan sebagai overhead dan dimasukkan dalam tarif periode berjalan.',
      },
      warningManual('Tabel 9.1 atau visual pencatatan kos akuisisi perlu dicek dari sumber asli jika akan ditampilkan secara final.'),
      { kind: 'h3', text: 'Metode Pencatatan Bahan' },
      {
        kind: 'p',
        text:
          'Metode fisik mencatat bahan yang dipakai pada akhir periode berdasarkan perhitungan fisik. Bahan yang tersedia untuk digunakan dihitung dari persediaan awal ditambah pembelian bersih, lalu dikurangi persediaan akhir.',
      },
      {
        kind: 'p',
        text:
          'Metode perpetual mencatat setiap mutasi bahan saat transaksi terjadi. Setiap pembelian, pemakaian, dan saldo bahan dicatat pada kartu persediaan atau sistem persediaan sehingga saldo bahan dapat diketahui setiap saat.',
      },
      {
        kind: 'table',
        headers: ['Metode', 'Ciri', 'Dampak Praktik'],
        rows: [
          ['Fisik', 'Pemakaian bahan dihitung pada akhir periode', 'Membutuhkan perhitungan fisik akhir periode'],
          ['Perpetual', 'Mutasi bahan dicatat setiap transaksi', 'Saldo bahan dapat dipantau terus-menerus'],
        ],
      },
      { kind: 'h3', text: 'Metode Penilaian Bahan' },
      {
        kind: 'p',
        text:
          'Metode penilaian bahan meliputi identifikasi khusus, FIFO, LIFO, rata-rata, dan moving average. FIFO menganggap bahan yang pertama masuk sebagai bahan yang pertama dipakai. LIFO menganggap bahan yang terakhir masuk sebagai bahan yang pertama dipakai. Rata-rata menggunakan harga rata-rata bahan tersedia. Moving average digunakan dalam sistem perpetual dan harga rata-rata diperbarui setiap terjadi pembelian.',
      },
      {
        kind: 'table',
        headers: ['Metode Penilaian', 'Inti Perlakuan'],
        rows: [
          ['Identifikasi khusus', 'Kos mengikuti unit bahan tertentu'],
          ['FIFO', 'Bahan yang pertama masuk dianggap pertama dipakai'],
          ['LIFO', 'Bahan yang terakhir masuk dianggap pertama dipakai'],
          ['Rata-rata tertimbang', 'Total kos tersedia dibagi total unit tersedia'],
          ['Moving average', 'Harga rata-rata diperbarui setiap pembelian dalam sistem perpetual'],
        ],
      },
      { kind: 'h3', text: 'Pengendalian Persediaan: EOQ/KPE, TPK, Safety Stock, dan Reorder Point' },
      {
        kind: 'p',
        text:
          'EOQ atau KPE digunakan untuk menentukan kuantitas pemesanan ekonomis. Tujuannya adalah menyeimbangkan biaya pemesanan dan biaya penyimpanan. TPK atau titik pemesanan kembali menentukan kapan perusahaan harus memesan lagi agar produksi tidak terganggu.',
      },
      {
        kind: 'p',
        text:
          'Safety stock adalah persediaan pengaman untuk menghadapi ketidakpastian pemakaian bahan atau keterlambatan pengiriman. Reorder point dapat dihitung dari kebutuhan selama lead time ditambah safety stock jika data tersedia.',
      },
      { kind: 'h3', text: 'Metode Pengendalian Bahan Baku' },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Inti Pengendalian Bahan',
        text:
          'Pengendalian bahan tidak hanya menentukan berapa banyak bahan yang dibeli, tetapi juga menentukan kapan bahan ditelaah, kapan dipesan kembali, dan tingkat pengawasan yang layak untuk setiap jenis bahan. Bahan bernilai tinggi memerlukan pengawasan lebih ketat dibanding bahan bernilai rendah.',
      },
      {
        kind: 'table',
        headers: ['Metode', 'Cara Kerja', 'Cocok Digunakan Ketika', 'Catatan Praktik'],
        rows: [
          ['Metode siklus pemesanan / cycle review method', 'Status kuantitas bahan ditelaah secara periodik, misalnya tiap 30, 60, atau 90 hari.', 'Perusahaan ingin menjadwalkan review persediaan secara teratur.', 'Siklus review dapat dibuat pendek untuk bahan bernilai tinggi dan lebih panjang untuk bahan bernilai rendah.'],
          ['Metode min-max', 'Perusahaan menetapkan batas minimum dan maksimum untuk setiap item bahan.', 'Kuantitas item dapat ditentukan batas amannya secara tegas.', 'Batas minimum menjadi sinyal TPK; pesanan biasanya mengembalikan persediaan sampai level maksimum.'],
          ['Two-bin method', 'Bahan disimpan dalam dua tempat, tumpukan, atau bundel.', 'Perusahaan memakai observasi fisik sederhana untuk memicu pemesanan kembali.', 'Saat tempat pertama kosong dan tempat kedua mulai dipakai, permintaan pembelian berikutnya disiapkan.'],
          ['JIT', 'Bahan diusahakan datang mendekati saat dibutuhkan produksi.', 'Sistem produksi dan pemasok cukup stabil.', 'Dibahas ringkas di TM 9 dan diperdalam bersama Backflush Costing.'],
        ],
        caption: 'Ringkasan metode pengendalian bahan baku.',
      },
      {
        kind: 'table',
        headers: ['Komponen Min-Max', 'Makna', 'Hubungan dengan Sistem'],
        rows: [
          ['Batas minimum', 'Titik keamanan untuk mencegah kekurangan sediaan selama siklus pesanan.', 'Berfungsi sebagai TPK atau titik pemesanan kembali.'],
          ['Batas maksimum', 'Jumlah tertinggi yang ditargetkan setelah pemesanan dilakukan.', 'Pesanan berikutnya biasanya membawa sediaan kembali ke level maksimum.'],
          ['Bin pertama', 'Berisi jumlah bahan untuk pemakaian normal sampai titik pemesanan berikutnya.', 'Menjadi sumber pemakaian awal.'],
          ['Bin kedua', 'Berisi kebutuhan selama waktu tunggu ditambah sediaan pengaman.', 'Saat bin kedua mulai dipakai, pembelian berikutnya harus disiapkan.'],
          ['Sistem akuntansi', 'Catatan bahan dapat memicu pembelian saat saldo turun ke TPK.', 'Efektif pada perusahaan dengan sistem pemrosesan data elektronik.'],
        ],
        caption: 'Format baca min-max dan two-bin method.',
      },
      { kind: 'h3', text: 'Pengendalian Selektif / ABC Inventory Control' },
      {
        kind: 'p',
        text:
          'Pengendalian selektif digunakan ketika perusahaan memiliki banyak jenis bahan dengan nilai yang berbeda-beda. Pendekatan ini juga disebut rancangan ABC karena persediaan dikelompokkan menjadi kelas A, B, dan C berdasarkan nilai dan kuantitasnya. ABC inventory control berbeda dari Activity-Based Costing.',
      },
      {
        kind: 'table',
        headers: ['Kelas', 'Karakteristik Nilai', 'Karakteristik Kuantitas', 'Pengendalian yang Disarankan'],
        rows: [
          ['A', 'Nilai tinggi.', 'Jumlah item relatif kecil.', 'Pengendalian paling ketat; tanggung jawab dan pengetahuan karyawan lebih tinggi.'],
          ['B', 'Nilai sedang.', 'Jumlah item sedang.', 'Pengendalian menengah; tidak seketat kelas A.'],
          ['C', 'Nilai rendah.', 'Jumlah item relatif banyak.', 'Pengendalian lebih sederhana karena risiko nilai per item lebih rendah.'],
        ],
        caption: 'Karakteristik kelompok persediaan dalam pengendalian selektif/ABC.',
      },
      {
        kind: 'ol',
        items: [
          'Taksir kuantitas pemakaian bahan untuk periode mendatang.',
          'Proyeksikan harga beli setiap jenis bahan.',
          'Hitung total kos pembelian bahan yang dibutuhkan.',
          'Urutkan bahan berdasarkan nilai total kos pembelian.',
          'Hitung persentase setiap bahan terhadap total kos dan total kuantitas.',
          'Tentukan bahan yang masuk kelompok A, B, atau C.',
        ],
      },
      { kind: 'h3', text: 'JIT dan Backflush Costing' },
      {
        kind: 'p',
        text:
          'JIT menekankan persediaan minimum dan pengadaan bahan tepat saat dibutuhkan. Dalam lingkungan JIT, perusahaan berusaha mengurangi persediaan, waktu tunggu, dan aktivitas yang tidak memberi nilai tambah. Backflush Costing adalah pencatatan ringkas yang sering digunakan dalam sistem produksi yang sangat efisien karena pencatatan rinci pada setiap tahap dapat dikurangi.',
      },
      {
        kind: 'example',
        title: 'Contoh Kasus Terpandu: MAMAMIA Manufacturing Company — JIT dan Backflush Costing',
        blocks: [
          {
            kind: 'callout',
            variant: 'key',
            title: 'Konteks sistem produksi',
            text:
              'MAMAMIA Manufacturing Company menggunakan sistem produksi JIT yang matang. Rata-rata waktu siklus kurang dari 1 hari dan total waktu dari penerimaan bahan baku sampai barang jadi kurang dari 4 hari. Dalam kondisi seperti ini, pencatatan dapat diringkas melalui Backflush Costing karena persediaan relatif cepat bergerak dan saldo akhir disesuaikan pada akhir periode.',
          },
          {
            kind: 'table',
            headers: ['Akun / Informasi', 'Saldo 30 April 2005', 'Saldo 31 Mei 2005', 'Keterangan'],
            rows: [
              ['RIP', 'Rp240.300.000', 'Rp445.200.000', 'Akun persediaan untuk bahan yang masuk proses dalam sistem JIT'],
              ['Barang Jadi', 'Rp430.600.000', 'Rp788.000.000', 'Akun persediaan produk selesai'],
              ['Perlengkapan', 'Rp94.000.000', 'Rp104.000.000', 'Akun terpisah untuk bahan baku tidak langsung'],
              ['Komponen bahan baku RIP', 'Rp215.200.000', 'Rp397.000.000', 'Digunakan untuk menghitung backflush dari RIP ke Barang Jadi'],
              ['Komponen konversi RIP', 'Rp25.100.000', 'Rp48.200.000', 'Selisihnya menjadi penyesuaian biaya konversi'],
              ['Komponen bahan baku Barang Jadi', 'Rp278.000.000', 'Rp520.000.000', 'Digunakan untuk menghitung backflush dari Barang Jadi ke COGS'],
              ['Komponen konversi Barang Jadi', 'Rp152.600.000', 'Rp268.000.000', 'Selisihnya menjadi penyesuaian biaya konversi'],
            ],
            caption: 'Data saldo yang digunakan dalam contoh Backflush Costing MAMAMIA.',
          },
          {
            kind: 'table',
            headers: ['Transaksi', 'Jumlah', 'Akun utama yang terlibat'],
            rows: [
              ['Bahan baku diterima dan dibeli secara kredit', 'Rp603.240.000', 'RIP dan Account Payable'],
              ['Bahan baku tidak langsung digunakan', 'Rp2.000.000', 'FOH-Control dan Indirect Material'],
              ['Tenaga kerja langsung', 'Rp534.000.000', 'COGS'],
              ['Tenaga kerja tidak langsung', 'Rp680.000.000', 'FOH-Control'],
              ['Gaji pemasaran', 'Rp580.000.000', 'Marketing Expense'],
              ['Gaji administrasi', 'Rp546.000.000', 'Administration Expense'],
              ['Overhead: penyusutan', 'Rp76.200.000', 'FOH-Control'],
              ['Overhead: asuransi', 'Rp48.300.000', 'FOH-Control'],
              ['Overhead lain-lain', 'Rp60.900.000', 'FOH-Control, Cash, dan Account Payable'],
              ['FOH-Control dibebankan ke COGS', 'Rp867.400.000', 'COGS dan FOH-Control'],
            ],
            caption: 'Ringkasan transaksi terpilih pada contoh MAMAMIA.',
          },
          {
            kind: 'callout',
            variant: 'tip',
            title: 'Rumus backflush bahan baku dari RIP ke Barang Jadi',
            text:
              'Bahan baku yang di-backflush ke Barang Jadi = Komponen bahan baku awal RIP + Bahan baku masuk RIP - Komponen bahan baku akhir RIP = Rp215.200.000 + Rp603.240.000 - Rp397.000.000 = Rp421.440.000.',
          },
          {
            kind: 'callout',
            variant: 'tip',
            title: 'Rumus backflush bahan baku dari Barang Jadi ke COGS',
            text:
              'Bahan baku yang di-backflush ke COGS = Komponen bahan baku awal Barang Jadi + Bahan baku masuk Barang Jadi - Komponen bahan baku akhir Barang Jadi = Rp278.000.000 + Rp421.440.000 - Rp520.000.000 = Rp179.440.000.',
          },
          {
            kind: 'table',
            headers: ['Penyesuaian biaya konversi', 'Perhitungan', 'Arah jurnal'],
            rows: [
              ['RIP', 'Rp48.200.000 - Rp25.100.000 = Rp23.100.000', 'Debit RIP'],
              ['Barang Jadi', 'Rp268.000.000 - Rp152.600.000 = Rp115.400.000', 'Debit Barang Jadi'],
              ['COGS', 'Rp23.100.000 + Rp115.400.000 = Rp138.500.000', 'Kredit COGS'],
            ],
            caption: 'Penyesuaian saldo akhir biaya konversi pada Backflush Costing.',
          },
          {
            kind: 'journal',
            caption: '1. Pembelian bahan baku secara kredit.',
            lines: [
              { account: 'RIP', debit: 'Rp603.240.000' },
              { account: 'Account Payable', credit: 'Rp603.240.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '2. Pemakaian bahan baku tidak langsung.',
            lines: [
              { account: 'FOH-Control', debit: 'Rp2.000.000' },
              { account: 'Indirect Material', credit: 'Rp2.000.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '3. Pembebanan biaya gaji ke produksi, pemasaran, dan administrasi.',
            lines: [
              { account: 'COGS', debit: 'Rp534.000.000' },
              { account: 'FOH-Control', debit: 'Rp680.000.000' },
              { account: 'Marketing Expense', debit: 'Rp580.000.000' },
              { account: 'Administration Expense', debit: 'Rp546.000.000' },
              { account: 'Salaries and Wages Expense', credit: 'Rp2.340.000.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '4. Akumulasi overhead pabrik aktual.',
            lines: [
              { account: 'FOH-Control', debit: 'Rp185.400.000' },
              { account: 'Depreciation Expense', credit: 'Rp76.200.000', isCredit: true },
              { account: 'Insurance Expense', credit: 'Rp48.300.000', isCredit: true },
              { account: 'Cash', credit: 'Rp48.000.000', isCredit: true },
              { account: 'Account Payable', credit: 'Rp12.900.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '5. FOH-Control dibebankan ke Harga Pokok Penjualan.',
            lines: [
              { account: 'COGS', debit: 'Rp867.400.000' },
              { account: 'FOH-Control', credit: 'Rp867.400.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '6. Backflush bahan baku pekerjaan selesai dari RIP ke Barang Jadi.',
            lines: [
              { account: 'Finished Goods', debit: 'Rp421.440.000' },
              { account: 'RIP', credit: 'Rp421.440.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '7. Backflush bahan baku pekerjaan terjual dari Barang Jadi ke COGS.',
            lines: [
              { account: 'COGS', debit: 'Rp179.440.000' },
              { account: 'Finished Goods', credit: 'Rp179.440.000', isCredit: true },
            ],
          },
          {
            kind: 'journal',
            caption: '8. Penyesuaian biaya konversi akhir periode.',
            lines: [
              { account: 'RIP', debit: 'Rp23.100.000' },
              { account: 'Finished Goods', debit: 'Rp115.400.000' },
              { account: 'COGS', credit: 'Rp138.500.000', isCredit: true },
            ],
          },
          {
            kind: 'table',
            headers: ['Akun T', 'Debit', 'Kredit', 'Saldo akhir / Catatan'],
            rows: [
              ['RIP', 'Saldo awal Rp240.300.000; pembelian bahan Rp603.240.000; penyesuaian konversi Rp23.100.000', 'Backflush ke Barang Jadi Rp421.440.000', 'Saldo akhir Rp445.200.000'],
              ['FOH-Control', 'Bahan tidak langsung Rp2.000.000; tenaga kerja tidak langsung Rp680.000.000; overhead aktual Rp185.400.000', 'Dibebankan ke COGS Rp867.400.000', 'Saldo akhir Rp0'],
              ['Finished Goods', 'Saldo awal Rp430.600.000; backflush dari RIP Rp421.440.000; penyesuaian konversi Rp115.400.000', 'Backflush ke COGS Rp179.440.000', 'Saldo akhir Rp788.000.000'],
              ['COGS', 'Tenaga kerja langsung Rp534.000.000; FOH dibebankan Rp867.400.000; backflush dari Finished Goods Rp179.440.000', 'Penyesuaian konversi Rp138.500.000', 'Saldo akhir Rp1.442.340.000'],
            ],
            caption: 'Akun T ringkas untuk RIP, FOH-Control, Finished Goods, dan COGS.',
          },
          {
            kind: 'callout',
            variant: 'warning',
            title: 'Kontrol pengerjaan',
            text:
              'Dalam contoh ini, penyesuaian konversi akhir periode mengurangi COGS karena sebagian biaya konversi harus dipindahkan kembali ke RIP dan Barang Jadi agar saldo persediaan akhir sesuai estimasi. Nama akun dapat disesuaikan dengan istilah dosen, tetapi arah debit-kredit dan total harus tetap konsisten dengan kunci sumber.',
          },
        ],
      },
      warningManual('Pada sumber pendukung, konteks utama menyebut bulan Mei 2005, tetapi kalimat transaksi tertulis bulan April 2005. Periode perlu diperiksa manual. Sumber juga menulis overhead lain-lain Rp66.900.000, tetapi rincian kredit Cash Rp48.000.000 + Account Payable Rp12.900.000 dan jurnal FOH-Control Rp185.400.000 menghasilkan overhead lain-lain efektif Rp60.900.000; angka tabel mengikuti rekonsiliasi jurnal kunci dan tetap perlu pemeriksaan manual.'),
      { kind: 'h2', text: 'Materi Praktik' },
      {
        kind: 'ol',
        items: [
          'Susun alur dokumen bahan dari perencanaan sampai pemakaian.',
          'Tentukan komponen kos bahan yang menambah atau mengurangi kos bahan.',
          'Hitung pembelian bersih.',
          'Hitung bahan tersedia untuk dipakai.',
          'Hitung kos bahan baku dipakai.',
          'Buat kartu persediaan jika soal meminta FIFO, LIFO, rata-rata, atau moving average.',
          'Hitung EOQ/KPE jika kebutuhan, biaya pesan, dan biaya simpan tersedia.',
          'Hitung TPK atau reorder point jika lead time usage dan safety stock tersedia.',
          'Tentukan apakah soal memakai metode siklus pemesanan, metode min-max, two-bin method, atau JIT.',
          'Klasifikasikan persediaan ke kelas A, B, atau C jika data nilai tersedia.',
          'Hitung ukuran production run optimum jika item diproduksi sendiri dan data setup cost, kebutuhan tahunan, biaya produksi variabel, serta biaya simpan tersedia.',
          'Susun jurnal dan akun T untuk kasus JIT dan Backflush jika data saldo awal, saldo akhir, dan transaksi tersedia.',
        ],
      },
      { kind: 'h2', text: 'Format Cost dan Rumus' },
      {
        kind: 'table',
        headers: ['Keterangan', 'Jumlah'],
        rows: [
          ['Persediaan awal bahan baku', 'Data dari soal'],
          ['Pembelian bahan baku', 'Data dari soal'],
          ['Freight-in', 'Data dari soal jika tersedia'],
          ['Diskon pembelian', 'Data dari soal jika tersedia'],
          ['Retur pembelian', 'Data dari soal jika tersedia'],
          ['Pembelian bersih', 'Pembelian + freight-in - diskon - retur'],
          ['Bahan tersedia untuk dipakai', 'Persediaan awal + pembelian bersih'],
          ['Persediaan akhir bahan baku', 'Data dari soal'],
          ['Kos bahan baku dipakai', 'Bahan tersedia - persediaan akhir'],
        ],
        caption: 'Format kos bahan baku dipakai.',
      },
      {
        kind: 'table',
        headers: ['Tanggal', 'Keterangan', 'Masuk Unit', 'Masuk Harga', 'Masuk Jumlah', 'Keluar Unit', 'Keluar Harga', 'Keluar Jumlah', 'Saldo Unit', 'Saldo Jumlah'],
        rows: [
          ['Data dari soal', 'Persediaan awal', 'Data dari soal', 'Data dari soal', 'Data dari soal', '', '', '', 'Data dari soal', 'Data dari soal'],
          ['Data dari soal', 'Pembelian', 'Data dari soal', 'Data dari soal', 'Data dari soal', '', '', '', 'Diisi berdasarkan metode', 'Diisi berdasarkan metode'],
          ['Data dari soal', 'Pemakaian', '', '', '', 'Data dari soal', 'Sesuai metode', 'Hasil perhitungan', 'Diisi berdasarkan metode', 'Diisi berdasarkan metode'],
        ],
        caption: 'Format kartu persediaan bahan untuk FIFO, LIFO, rata-rata, moving average, atau identifikasi khusus.',
      },
      {
        kind: 'table',
        headers: ['Format', 'Rumus'],
        rows: [
          ['Tarif kos akuisisi tunggal', 'Estimasi total kos akuisisi ÷ Estimasi dasar pembebanan'],
          ['Tarif kos akuisisi aktivitas', 'Anggaran kos aktivitas ÷ Estimasi jumlah aktivitas'],
          ['Alokasi freight-in berdasarkan nilai', 'Nilai item ÷ Total nilai pembelian × Total freight-in'],
          ['Alokasi freight-in berdasarkan berat', 'Berat item ÷ Total berat × Total freight-in'],
        ],
      },
      {
        kind: 'table',
        headers: ['Format Pengendalian', 'Input yang Dibutuhkan', 'Output Praktik'],
        rows: [
          ['Siklus pemesanan', 'Item bahan, saldo saat review, target pasokan, periode review', 'Keputusan jumlah bahan yang harus dipesan pada periode review'],
          ['Min-max', 'Batas minimum, batas maksimum, saldo bahan saat ini', 'Keputusan apakah bahan sudah perlu dipesan kembali'],
          ['Two-bin method', 'Isi bin pertama, isi bin kedua, lead time, safety stock', 'Sinyal pembelian saat bin pertama kosong dan bin kedua mulai digunakan'],
          ['Pengendalian selektif/ABC', 'Kuantitas pemakaian, harga beli, total nilai bahan', 'Klasifikasi A, B, C dan tingkat pengawasan yang sesuai'],
          ['Production runs', 'Kebutuhan tahunan, setup cost, biaya produksi variabel per unit, tarif biaya simpan', 'Jumlah unit optimum per sekali run dan jumlah run per tahun'],
        ],
        caption: 'Template format praktik pengendalian bahan baku.',
      },
      { kind: 'formula', text: 'Pembelian bersih = Pembelian + Freight-in - Diskon pembelian - Retur pembelian', note: 'Menghitung kos pembelian bersih bahan' },
      { kind: 'formula', text: 'Bahan tersedia untuk dipakai = Persediaan awal bahan + Pembelian bersih', note: 'Menghitung total bahan yang siap dipakai' },
      { kind: 'formula', text: 'Kos bahan baku dipakai = Bahan tersedia untuk dipakai - Persediaan akhir bahan', note: 'Menghitung kos bahan yang masuk produksi' },
      { kind: 'formula', text: 'Kos rata-rata per unit = Total kos tersedia ÷ Total unit tersedia', note: 'Metode rata-rata' },
      { kind: 'formula', text: 'EOQ/KPE = √((2 × Kebutuhan × Biaya pemesanan) ÷ Biaya penyimpanan per unit)', note: '[Perlu pemeriksaan manual] untuk notasi dosen' },
      { kind: 'formula', text: 'TPK = Kebutuhan selama lead time + Sediaan pengaman', note: '[Perlu pemeriksaan manual] untuk simbol dan istilah yang digunakan dosen' },
      { kind: 'formula', text: 'Reorder point = Lead time usage + Safety stock', note: 'Dipakai jika data lead time usage dan safety stock tersedia' },
      { kind: 'formula', text: 'Sediaan maksimum = KPE + Safety stock', note: 'Menghitung batas maksimum persediaan' },
      { kind: 'formula', text: 'Ukuran production run optimum = √((2 × Kebutuhan tahunan × Setup cost) ÷ Biaya simpan per unit)', note: 'Adaptasi KPE ketika item diproduksi sendiri' },
      { kind: 'formula', text: 'Jumlah production runs = Kebutuhan tahunan ÷ Ukuran produksi optimum per run', note: 'Menghitung berapa kali produksi dilakukan dalam satu periode' },
      warningManual('Rumus EOQ/KPE, TPK, safety stock, dan reorder point perlu disesuaikan dengan notasi dosen jika modul asli memakai simbol berbeda.'),
      {
        kind: 'example',
        title: 'Contoh Penilaian Bahan FIFO dan LIFO',
        blocks: [
          {
            kind: 'table',
            headers: ['Lapisan', 'Unit', 'Harga'],
            rows: [
              ['Sediaan awal', '10', 'Rp15'],
              ['Pembelian 1', '15', 'Rp17'],
              ['Pembelian 2', '20', 'Rp20'],
              ['Pembelian 3', '14', 'Rp22'],
            ],
          },
          { kind: 'p', text: 'Bahan dipakai 30 unit.' },
          {
            kind: 'ol',
            items: [
              'FIFO bahan dipakai = 10 × Rp15 + 15 × Rp17 + 5 × Rp20 = Rp505.',
              'Sediaan akhir FIFO = 15 × Rp20 + 14 × Rp22 = Rp608.',
              'LIFO bahan dipakai = 14 × Rp22 + 16 × Rp20 = Rp628.',
              'Sediaan akhir LIFO = 10 × Rp15 + 15 × Rp17 + 4 × Rp20 = Rp485.',
            ],
          },
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Safety Stock dan Sediaan Maksimum',
        blocks: [
          { kind: 'p', text: 'Jika KPE 600 kg dan safety stock 100 kg, maka sediaan maksimum = 600 kg + 100 kg = 700 kg.' },
          warningManual('Detail tabel safety stock dari sumber perlu diperiksa manual jika ingin disalin sebagai tabel final.'),
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Production Runs - Ukuran Produksi Optimum',
        blocks: [
          {
            kind: 'table',
            headers: ['Data', 'Nilai'],
            rows: [
              ['Kebutuhan setahun', '6.000 unit'],
              ['Setup cost per run', 'Rp65.000'],
              ['Biaya produksi variabel per unit', 'Rp15.600'],
              ['Tarif biaya penyimpanan', '20%'],
              ['Biaya simpan per unit', '20% × Rp15.600 = Rp3.120'],
            ],
            caption: 'Data contoh item yang diproduksi sendiri.',
          },
          { kind: 'formula', text: 'Ukuran produksi optimum = √((2 × 6.000 × 65.000) ÷ 3.120) = 500 unit', note: 'Jumlah unit optimum untuk sekali run' },
          { kind: 'formula', text: 'Jumlah production runs = 6.000 ÷ 500 = 12 kali', note: 'Jumlah run produksi dalam satu tahun' },
          {
            kind: 'callout',
            variant: 'key',
            title: 'Makna Praktik',
            text: 'Jika item dibuat sendiri, biaya pemesanan dalam model KPE diperlakukan setara dengan setup cost. Keputusan tidak lagi hanya membeli berapa unit, tetapi menentukan berapa unit yang paling efisien untuk diproduksi setiap kali run.',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Format Praktik Moving Average',
        blocks: [
          {
            kind: 'p',
            text:
              'Moving average digunakan dalam sistem perpetual. Setiap pembelian baru akan memperbarui harga rata-rata bahan. Pemakaian bahan setelah pembelian memakai harga rata-rata terbaru.',
          },
          {
            kind: 'table',
            headers: ['Transaksi', 'Unit', 'Harga', 'Jumlah', 'Harga Rata-Rata Baru'],
            rows: [
              ['Persediaan awal', 'Data dari soal', 'Data dari soal', 'Data dari soal', 'Data dari soal'],
              ['Pembelian', 'Data dari soal', 'Data dari soal', 'Data dari soal', 'Total kos tersedia ÷ total unit tersedia'],
              ['Pemakaian', 'Data dari soal', 'Harga rata-rata terbaru', 'Unit keluar × harga rata-rata', 'Saldo kos ÷ saldo unit'],
            ],
          },
          warningManual('Moving average lengkap perlu mengikuti tabel soal atau sumber asli. Jangan mengisi angka baru jika tidak tersedia.'),
        ],
      },
      { kind: 'h2', text: 'Jurnal dan Pengendalian Bahan Baku' },
      {
        kind: 'p',
        text:
          'Pencatatan bahan harus menjaga hubungan antara dokumen pembelian, penerimaan, kartu bahan, dan pemakaian produksi. Dalam sistem perpetual, pembelian bahan menambah Materials Inventory, sedangkan pemakaian bahan langsung masuk ke Work in Process dan pemakaian bahan tidak langsung masuk ke Factory Overhead Control.',
      },
      {
        kind: 'journal',
        caption: 'Jurnal pembelian bahan secara kredit dalam sistem perpetual.',
        lines: [
          { account: 'Materials Inventory', debit: 'Data dari soal' },
          { account: 'Accounts Payable', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal pemakaian bahan langsung untuk produksi.',
        lines: [
          { account: 'Work in Process', debit: 'Data dari soal' },
          { account: 'Materials Inventory', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal pemakaian bahan tidak langsung.',
        lines: [
          { account: 'Factory Overhead Control', debit: 'Data dari soal' },
          { account: 'Materials Inventory', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal retur pembelian jika bahan dikembalikan kepada pemasok.',
        lines: [
          { account: 'Accounts Payable', debit: 'Data dari soal' },
          { account: 'Materials Inventory', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal freight-in jika biaya angkut dikapitalisasi ke bahan.',
        lines: [
          { account: 'Materials Inventory', debit: 'Data dari soal' },
          { account: 'Cash atau Accounts Payable', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'table',
        headers: ['Pengendalian', 'Dokumen/Akun', 'Tujuan'],
        rows: [
          ['Otorisasi pembelian', 'Purchase requisition dan purchase order', 'Mencegah pembelian bahan yang tidak dibutuhkan'],
          ['Pemeriksaan penerimaan', 'Receiving report', 'Memastikan kuantitas dan kualitas bahan sesuai pesanan'],
          ['Pengeluaran bahan', 'Material requisition', 'Mencegah pengeluaran bahan tanpa dasar produksi'],
          ['Pencatatan persediaan', 'Material record card', 'Mengetahui saldo dan mutasi bahan'],
          ['Pemisahan fungsi', 'Purchasing, receiving, warehouse, accounting', 'Mengurangi risiko kelemahan pengendalian internal'],
        ],
        caption: 'Checklist pengendalian bahan baku dari permintaan sampai pemakaian.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Catatan Pengendalian Internal',
        text: 'Fungsi pemesanan, penerimaan, penyimpanan, dan pencatatan tidak ideal jika dilakukan oleh orang atau unit yang sama. Jika bagian pembelian juga menyetujui pembayaran vendor, pengendalian internal melemah karena otorisasi dan verifikasi berada pada fungsi yang sama.',
      },
      { kind: 'h2', text: 'Kesalahan Umum' },
      {
        kind: 'table',
        headers: ['Kesalahan', 'Koreksi'],
        rows: [
          ['Menganggap kos bahan hanya harga faktur', 'Tambahkan freight-in dan kos akuisisi jika relevan, kurangi diskon dan retur'],
          ['Mencampur bahan langsung dan bahan penolong', 'Bahan langsung masuk WIP, bahan penolong masuk overhead'],
          ['Salah lapisan FIFO atau LIFO', 'Urutkan lapisan pembelian sesuai metode'],
          ['Menyamakan moving average dengan rata-rata sederhana', 'Moving average diperbarui setiap pembelian'],
          ['Menyamakan ABC inventory dengan Activity-Based Costing', 'ABC inventory adalah klasifikasi persediaan A, B, C'],
          ['Mengabaikan safety stock', 'Safety stock diperlukan saat ada ketidakpastian pemakaian atau lead time'],
          ['Mengisi angka JIT dan backflush tanpa sumber', 'Gunakan warning manual jika angka berasal dari scan buram'],
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace TM 9 - EOQ/KPE dan Reorder Point',
          instruction: 'Gunakan data terlihat: kebutuhan tahunan 6.000 unit; biaya pesan Rp65.000; harga bahan Rp15.600 per unit; carrying cost 20% dari harga; kebutuhan harian 20 unit; lead time 5 hari; safety stock 40 unit.',
          currency: 'Rp',
          headers: ['Komponen', 'Jawaban'],
          rows: [
            { id: 'tm9-carrying', label: 'Carrying cost per unit per tahun', cells: [{ id: 'tm9-carrying-cost', answer: 3120, placeholder: '20% × 15.600' }] },
            { id: 'tm9-eoq', label: 'EOQ / KPE', cells: [{ id: 'tm9-eoq-qty', answer: 500, placeholder: '√((2×D×S)/H)' }] },
            { id: 'tm9-orders', label: 'Jumlah pesanan per tahun', cells: [{ id: 'tm9-order-count', answer: 12, placeholder: '6.000 ÷ EOQ' }] },
            { id: 'tm9-rop', label: 'Reorder point', cells: [{ id: 'tm9-rop-value', answer: 140, placeholder: '(20×5)+40' }] },
          ],
        },
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace TM 9 - JIT dan Backflush MAMAMIA',
          instruction: 'Gunakan data terlihat: RIP awal Rp215.200.000; pembelian bahan langsung ke RIP Rp603.240.000; RIP akhir Rp397.000.000; bahan dari Barang Jadi ke COGS Rp179.440.000; FOH-Control ke COGS Rp867.400.000; penyesuaian konversi kredit COGS Rp138.500.000.',
          currency: 'Rp',
          headers: ['Komponen', 'Jawaban'],
          rows: [
            { id: 'tm9-mamamia-rip', label: 'Backflush bahan dari RIP ke Barang Jadi', cells: [{ id: 'tm9-mamamia-rip-to-fg', answer: 421440000, placeholder: '215.200.000 + 603.240.000 - 397.000.000' }] },
            { id: 'tm9-mamamia-fg', label: 'Backflush bahan dari Barang Jadi ke COGS', cells: [{ id: 'tm9-mamamia-fg-to-cogs', answer: 179440000, placeholder: 'Data kasus' }] },
            { id: 'tm9-mamamia-foh', label: 'FOH-Control dibebankan ke COGS', cells: [{ id: 'tm9-mamamia-foh-to-cogs', answer: 867400000, placeholder: 'Data kasus' }] },
            { id: 'tm9-mamamia-conv', label: 'Penyesuaian konversi kredit COGS', cells: [{ id: 'tm9-mamamia-conv-adjustment', answer: 138500000, placeholder: 'Data kasus' }] },
            { id: 'tm9-mamamia-cogs', label: 'Saldo akhir COGS', cells: [{ id: 'tm9-mamamia-ending-cogs', answer: 1442340000, placeholder: 'Saldo setelah penyesuaian' }] },
          ],
        },
      },
      {
        kind: 'solution-reveal',
        title: 'Pembahasan Workspace TM 9',
        prompt: 'Buka setelah menghitung EOQ, reorder point, dan ringkasan backflush.',
        blocks: [
          { kind: 'p', text: 'Carrying cost adalah 20% × Rp15.600 = Rp3.120 per unit per tahun. EOQ dihitung dengan akar dari (2 × 6.000 × 65.000) ÷ 3.120, sehingga hasilnya 500 unit. Jumlah pesanan per tahun adalah 6.000 ÷ 500 = 12 kali.' },
          { kind: 'p', text: 'Reorder point memakai kebutuhan selama lead time ditambah safety stock. Perhitungannya 20 × 5 + 40 = 140 unit.' },
          { kind: 'p', text: 'Pada MAMAMIA, bahan yang di-backflush dari RIP ke Barang Jadi dihitung dari bahan tersedia di RIP dikurangi RIP akhir: Rp215.200.000 + Rp603.240.000 - Rp397.000.000 = Rp421.440.000.' },
        ],
      },
      {
        kind: 'example',
        title: 'Latihan Pemahaman TM 9',
        blocks: [
          {
            kind: 'ol',
            items: [
              'Jelaskan alur dokumen bahan dari product engineering sampai material record card.',
              'Hitung kos bahan baku dipakai jika tersedia persediaan awal, pembelian, freight-in, diskon, retur, dan persediaan akhir.',
              'Buat kartu bahan dengan metode FIFO.',
              'Buat kartu bahan dengan metode LIFO.',
              'Buat kartu bahan dengan metode moving average.',
              'Hitung EOQ/KPE jika data kebutuhan, biaya pesan, dan biaya simpan tersedia.',
              'Hitung TPK atau reorder point jika data lead time dan safety stock tersedia.',
              'Bandingkan metode siklus pemesanan, metode min-max, dan two-bin method.',
              'Klasifikasikan persediaan ke kelas A, B, dan C.',
              'Hitung production runs optimum jika item diproduksi sendiri.',
              'Jelaskan hubungan JIT dengan persediaan minimum.',
              'Jelaskan mengapa backflush costing membutuhkan sistem produksi yang efisien.',
            ],
          },
        ],
      },

      { kind: 'h2', text: 'Pengayaan Praktik — JIT: Waste dan Pembelian JIT' },
      { kind: 'callout', variant: 'info', title: 'Catatan kelas tambahan', text: 'Blok ini adalah pengayaan praktik terkait JIT dan backflush untuk membantu memahami pengendalian bahan dalam lingkungan produksi yang ramping.' },
      { kind: 'h3', text: 'Jenis Waste dalam Sistem JIT' },
      { kind: 'table', headers: ['Jenis waste', 'Makna praktis', 'Dampak biaya'], rows: [
        ['Waiting', 'Tenaga kerja atau mesin menunggu bahan, instruksi, atau proses sebelumnya.', 'Waktu produktif hilang dan kapasitas tidak terpakai.'],
        ['Transportation', 'Bahan/barang berpindah terlalu sering antar area atau gudang sementara.', 'Biaya pemindahan naik dan risiko kerusakan meningkat.'],
        ['Inventory', 'Persediaan melebihi kebutuhan minimum produksi.', 'Biaya gudang, risiko usang/rusak, asuransi, dan modal tertahan.'],
        ['Processing', 'Metode kerja berulang atau tidak perlu karena prosedur tidak efisien.', 'Biaya proses naik tanpa menambah nilai bagi pelanggan.'],
        ['Motion', 'Gerakan pekerja yang tidak menambah nilai, misalnya mencari alat terlalu lama.', 'Waktu kerja terbuang dan produktivitas turun.'],
        ['Defective products', 'Produk cacat atau tidak sesuai spesifikasi sehingga perlu rework.', 'Biaya perbaikan, scrap, keterlambatan, dan potensi komplain pelanggan.'],
      ], caption: 'Pengayaan catatan kelas: klasifikasi waste membantu mahasiswa membaca JIT sebagai sistem pengurangan aktivitas non-value-added, bukan sekadar teknik persediaan rendah.' },
      { kind: 'h3', text: 'Pembelian Konvensional vs Pembelian JIT' },
      { kind: 'table', headers: ['Aspek', 'Pembelian konvensional', 'Pembelian JIT'], rows: [
        ['Ukuran lot', 'Relatif besar untuk mengamankan stok.', 'Kecil dan mengikuti kebutuhan produksi aktual.'],
        ['Supplier', 'Bisa banyak dan tersebar.', 'Lebih sedikit, dekat, dan berhubungan jangka panjang.'],
        ['Evaluasi supplier', 'Lebih banyak setelah barang diterima.', 'Kualitas dan ketepatan waktu dikendalikan sejak hubungan pemasok.'],
        ['Inspeksi penerimaan', 'Inspeksi setelah barang datang lebih dominan.', 'Kualitas diupayakan benar sejak supplier sehingga inspeksi dapat ditekan.'],
        ['Dokumen dan administrasi', 'Relatif lebih banyak karena batch dan gudang lebih besar.', 'Disederhanakan karena aliran bahan lebih cepat.'],
        ['Risiko utama', 'Holding cost, usang, dan biaya gudang.', 'Stockout bila supplier, kualitas, atau jadwal produksi tidak stabil.'],
      ], caption: 'Tabel ini tidak mengganti contoh MAMAMIA; fungsinya sebagai jembatan konsep sebelum latihan backflush.' },
      { kind: 'interactive-match', spec: {
        title: 'Klasifikasi Waste JIT',
        instruction: 'Pasangkan contoh aktivitas dengan jenis waste yang paling tepat. Fokuskan pada sumber pemborosan, bukan pada nama departemennya.',
        feedback: 'Cek sumber pemborosan utamanya. Transportation berkaitan dengan perpindahan bahan/barang, sedangkan Motion berkaitan dengan gerakan pekerja yang tidak menambah nilai.',
        choices: ['Waiting', 'Transportation', 'Inventory', 'Processing', 'Motion', 'Defective products'],
        pairs: [
          { id: 'jit-waiting', prompt: 'Pekerja menunggu bahan baku datang sebelum produksi dapat dimulai.', answer: 'Waiting', feedback: 'Waiting terjadi ketika tenaga kerja atau mesin menunggu input sebelum proses dapat berjalan.' },
          { id: 'jit-transport', prompt: 'Bahan berpindah beberapa kali antar gudang sementara sebelum dipakai.', answer: 'Transportation', feedback: 'Transportation adalah perpindahan bahan/barang yang tidak menambah nilai, bukan gerakan pekerja.' },
          { id: 'jit-inventory', prompt: 'Perusahaan menyimpan bahan terlalu banyak sehingga muncul biaya gudang dan risiko usang.', answer: 'Inventory', feedback: 'Inventory waste muncul ketika persediaan berlebih menimbulkan biaya simpan, risiko usang/rusak, dan modal tertahan.' },
          { id: 'jit-motion', prompt: 'Operator berjalan ke beberapa sudut ruangan hanya untuk mencari alat yang seharusnya tersedia di stasiun kerja.', answer: 'Motion', feedback: 'Motion adalah gerakan pekerja yang tidak menambah nilai; bedakan dari transportation yang memindahkan bahan/barang.' },
          { id: 'jit-defect', prompt: 'Produk harus dikerjakan ulang karena tidak sesuai spesifikasi teknis.', answer: 'Defective products', feedback: 'Produk cacat menimbulkan rework, scrap, keterlambatan, dan biaya kualitas yang seharusnya bisa dicegah.' },
        ],
      } },
      { kind: 'callout', variant: 'warning', title: 'PT ABC backflush', text: 'Catatan kelas memuat ilustrasi PT ABC dan akun T. Karena sebagian angka berasal dari gambar, latihan final PT ABC belum dimasukkan sebagai kunci otomatis. Statusnya tetap [Perlu pemeriksaan manual] sampai angka diverifikasi penuh. Latihan otomatis tetap memakai MAMAMIA yang sudah diaudit.' },
      { kind: 'h2', text: 'Ringkasan' },
      {
        kind: 'p',
        text:
          'TM 9 membahas perencanaan, pengadaan, pencatatan, penilaian, dan pengendalian bahan baku. Kos bahan mencakup harga bahan dan biaya lain sampai bahan siap dipakai, dikurangi diskon dan retur. Pencatatan bahan dapat menggunakan metode fisik atau perpetual. Penilaian bahan dapat memakai identifikasi khusus, FIFO, LIFO, rata-rata, atau moving average.',
      },
      {
        kind: 'p',
        text:
          'Pengendalian bahan meliputi EOQ/KPE, TPK, safety stock, reorder point, metode siklus pemesanan, metode min-max, two-bin method, pengendalian selektif/ABC, production runs, JIT, dan Backflush Costing. Contoh MAMAMIA menunjukkan bahwa dalam sistem JIT yang matang, bahan baku dapat di-backflush dari RIP ke Barang Jadi dan dari Barang Jadi ke COGS, sedangkan biaya konversi disesuaikan pada akhir periode. Bagian visual EOQ/TPK, safety stock, dan moving average lengkap tetap perlu pemeriksaan manual dari sumber asli.',
      },
      { kind: 'h2', text: 'Checklist Kelengkapan' },
      {
        kind: 'table',
        headers: ['Komponen', 'Status'],
        rows: [
          ['Pengadaan bahan baku', 'Lengkap'],
          ['Dokumen bahan', 'Lengkap'],
          ['Kos bahan dan kos akuisisi', 'Lengkap'],
          ['Freight-in, diskon, dan retur', 'Lengkap'],
          ['Metode fisik dan perpetual', 'Lengkap'],
          ['FIFO, LIFO, rata-rata, moving average', 'Lengkap'],
          ['EOQ/KPE', '[Perlu pemeriksaan manual] untuk notasi dan visual'],
          ['TPK dan reorder point', '[Perlu pemeriksaan manual] untuk notasi dan visual'],
          ['Safety stock', '[Perlu pemeriksaan manual] untuk tabel rinci'],
          ['Metode siklus pemesanan', 'Lengkap'],
          ['Metode min-max', 'Lengkap'],
          ['Two-bin method', 'Lengkap'],
          ['Pengendalian selektif / ABC inventory control', 'Lengkap'],
          ['Production runs', 'Lengkap'],
          ['JIT dan Backflush Costing', 'Lengkap dengan contoh MAMAMIA, jurnal, backflush, penyesuaian konversi, dan akun T'],
          ['Latihan dan ringkasan', 'Lengkap'],
        ],
        caption: 'Checklist Kelengkapan TM 9',
      },
    ],
  },

  10: {
    id: 'akbi-tm-10',
    tm: 10,
    title: 'Perencanaan, Pengendalian, dan Penentuan Kos Tenaga Kerja Langsung',
    ref: 'CU 10 · IMN 9 · Tutor AKBI Biaya Tenaga Kerja',
    source: 'SILABI-Akuntansi Biaya-2026.doc; Tutor Akuntansi Biaya TM 11.pdf.pdf; AKBI_Master_Content_Bagian_1_TM1-TM11.md',
    phase: 'pra_uas',
    manualCheckCount: 5,
    intro:
      'Tenaga kerja langsung mengolah produk secara langsung dan biayanya dapat ditelusuri ke produk. Tenaga kerja tidak langsung mendukung produksi dan masuk factory overhead.',
    objectives: [
      'Menjelaskan labor cost dalam produksi.',
      'Membedakan direct labor dan indirect labor.',
      'Menjelaskan clock card dan labor time ticket.',
      'Menjelaskan payroll register dan labor cost distribution.',
      'Menghitung upah dasar, insentif output, premi lembur, premi shift, bonus, vacation pay, dan holiday pay.',
      'Menyusun daftar gaji dan upah berbasis standar produksi serta jurnal pembebanannya.',
      'Menjelaskan idle time dan fringe benefits.',
      'Membedakan basic rate dan wage plans: hourly-rate, piece-rate, modified-rate, straight piecework, one-hundred-percent bonus, dan group bonus plan.',
      'Menyusun jurnal saat gaji terjadi, distribusi gaji, dan pembayaran gaji.',
      'Menganalisis perlakuan premi umum dan premi yang disebabkan pesanan khusus.',
    ],
    blocks: [
      { kind: 'h2', text: 'Tujuan Pembelajaran' },
      {
        kind: 'p',
        text:
          'Mahasiswa mampu menjelaskan direct labor, indirect labor, clock card, labor time ticket, payroll register, labor cost distribution, upah dasar, wage plans, insentif output, premi lembur, idle time, fringe benefits, daftar gaji berbasis standar produksi, dan jurnal gaji.',
      },
      { kind: 'h2', text: 'Gambaran Umum' },
      {
        kind: 'p',
        text:
          'Tenaga kerja langsung mengolah produk secara langsung dan biayanya dapat ditelusuri ke produk. Tenaga kerja tidak langsung mendukung produksi dan masuk factory overhead. Biaya tenaga kerja harus direncanakan, dicatat, didistribusikan, dan dikendalikan agar kos produk tidak salah.',
      },
      { kind: 'h2', text: 'Alur Belajar Cepat Batch 8' },
      {
        kind: 'table',
        headers: ['Langkah', 'Fokus Belajar', 'Output yang Harus Bisa Dibuat'],
        rows: [
          ['1', 'Klasifikasi pekerja', 'Membedakan direct labor, indirect labor, marketing labor, dan administrative labor'],
          ['2', 'Baca dokumen sumber', 'Memisahkan fungsi clock card, labor time ticket, payroll register, dan labor cost distribution'],
          ['3', 'Hitung gross payroll', 'Menghitung upah reguler, tarif lembur, overtime premium, insentif, dan total gaji'],
          ['4', 'Pisahkan premium', 'Menentukan premium lembur masuk job khusus atau FOH-Control'],
          ['5', 'Distribusikan labor cost', 'Membuat jurnal ke WIP, FOH-Control, Marketing Expense, Administrative Expense, dan Factory Payroll'],
          ['6', 'Kontrol trap UAS', 'Tidak mencampur gaji kotor, gaji bersih, potongan, dan pembebanan biaya produksi'],
        ],
        caption: 'Peta belajar TM 10 agar mahasiswa tidak hanya menghitung gaji, tetapi juga tahu akun pembebanannya.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Inti UAS TM 10',
        text: 'Soal tenaga kerja biasanya menjebak pada klasifikasi akun. Direct labor masuk Work in Process. Indirect labor, overtime premium umum, dan idle time normal masuk FOH-Control. Marketing dan administrasi bukan product cost, melainkan period cost. Setelah klasifikasi benar, baru hitung upah reguler, premi, insentif, potongan, dan utang gaji.',
      },
      { kind: 'h2', text: 'Formula Sheet Batch 8' },
      { kind: 'formula', text: 'Regular wage = total jam yang dipakai produksi × tarif reguler', note: 'Dalam banyak soal, bagian tarif reguler untuk jam lembur tetap menjadi direct labor jika pekerja mengerjakan produk secara langsung.' },
      { kind: 'formula', text: 'Overtime premium = jam lembur × (tarif lembur − tarif reguler)', note: 'Premium ini dipisahkan dari upah reguler agar perlakuannya dapat dibebankan ke job khusus atau FOH-Control.' },
      { kind: 'formula', text: 'Gross payroll = regular wage + overtime premium + bonus + allowance lain sebelum potongan', note: 'Gross payroll berbeda dari take-home pay. Take-home pay adalah gaji bersih setelah potongan.' },
      { kind: 'formula', text: 'Net payroll payable = gross payroll − potongan karyawan', note: 'Potongan dapat berupa pajak, iuran, pinjaman, asuransi, atau potongan lain sesuai data soal.' },
      { kind: 'formula', text: 'Labor efficiency = standard hours allowed − actual hours', note: 'Jika soal belum masuk standard costing, gunakan hanya sebagai logika kontrol efisiensi, bukan sebagai topik varians utama.' },
      {
        kind: 'example',
        title: 'Mini Lab Batch 8: PT Semeru — Upah Reguler, Premi Lembur, dan Distribusi Biaya',
        blocks: [
          {
            kind: 'table',
            headers: ['Data', 'Nilai'],
            rows: [
              ['Jam kerja operator langsung minggu ini', '46 jam'],
              ['Jam normal maksimum', '40 jam'],
              ['Tarif reguler', 'Rp25.000 per jam'],
              ['Tarif lembur', 'Rp37.500 per jam'],
              ['Jam lembur karena pesanan khusus Job 510', '4 jam'],
              ['Jam lembur karena jadwal umum produksi', '2 jam'],
            ],
            caption: 'Data ini memisahkan bagian reguler dan bagian premium dari lembur.',
          },
          {
            kind: 'table',
            headers: ['Komponen', 'Perhitungan', 'Jumlah', 'Perlakuan'],
            rows: [
              ['Upah reguler untuk semua jam produksi', '46 × Rp25.000', 'Rp1.150.000', 'WIP karena operator mengerjakan produk secara langsung'],
              ['Premium lembur Job 510', '4 × (Rp37.500 − Rp25.000)', 'Rp50.000', 'WIP Job 510 karena lembur terjadi akibat pesanan khusus'],
              ['Premium lembur umum', '2 × (Rp37.500 − Rp25.000)', 'Rp25.000', 'FOH-Control karena muncul dari jadwal umum produksi'],
              ['Gross payroll', 'Rp1.150.000 + Rp50.000 + Rp25.000', 'Rp1.225.000', 'Kredit Factory Payroll atau Wages Payable sesuai tahap jurnal'],
            ],
          },
          {
            kind: 'journal',
            caption: 'Jurnal distribusi biaya tenaga kerja PT Semeru.',
            lines: [
              { account: 'Work in Process - Job 510 dan job produksi lain', debit: 'Rp1.200.000' },
              { account: 'Factory Overhead Control', debit: 'Rp25.000' },
              { account: 'Factory Payroll', credit: 'Rp1.225.000', isCredit: true },
            ],
          },
          {
            kind: 'callout',
            variant: 'tip',
            title: 'Kontrol angka',
            text: 'Debit WIP Rp1.200.000 berasal dari upah reguler Rp1.150.000 ditambah premium khusus Job 510 Rp50.000. FOH hanya menerima premium umum Rp25.000. Total debit sama dengan gross payroll Rp1.225.000.',
          },
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace Batch 8 - Hitung Gross Payroll PT Semeru',
          instruction: 'Gunakan data mini lab: 46 jam kerja, tarif reguler Rp25.000, tarif lembur Rp37.500, 4 jam lembur khusus Job 510, dan 2 jam lembur umum.',
          currency: 'Rp',
          headers: ['Komponen', 'Jumlah'],
          rows: [
            { id: 'b8-labor-regular', label: 'Upah reguler untuk 46 jam', cells: [{ id: 'b8-labor-regular-amount', answer: 1150000, placeholder: '46 × 25.000' }] },
            { id: 'b8-labor-premium-special', label: 'Premium lembur khusus Job 510', cells: [{ id: 'b8-labor-premium-special-amount', answer: 50000, placeholder: '4 × 12.500' }] },
            { id: 'b8-labor-premium-general', label: 'Premium lembur umum', cells: [{ id: 'b8-labor-premium-general-amount', answer: 25000, placeholder: '2 × 12.500' }] },
            { id: 'b8-labor-gross', label: 'Gross payroll', cells: [{ id: 'b8-labor-gross-amount', answer: 1225000, placeholder: 'Jumlah seluruh komponen' }] },
            { id: 'b8-labor-wip', label: 'Debit WIP', cells: [{ id: 'b8-labor-wip-amount', answer: 1200000, placeholder: 'Regular wage + special premium' }] },
            { id: 'b8-labor-foh', label: 'Debit FOH-Control', cells: [{ id: 'b8-labor-foh-amount', answer: 25000, placeholder: 'General premium' }] },
          ],
        },
      },
      {
        kind: 'journal-builder',
        spec: {
          title: 'Journal Builder Batch 8 - Distribusi Labor Cost PT Semeru',
          instruction: 'Susun jurnal distribusi biaya tenaga kerja. Gunakan pilihan akun yang tersedia dan masukkan nominal debit/kredit yang benar.',
          currency: 'Rp',
          accountChoices: ['Work in Process', 'Factory Overhead Control', 'Factory Payroll', 'Wages Payable', 'Marketing Expense', 'Administrative Expense'],
          lines: [
            { id: 'b8-jr-wip', account: 'Work in Process', debit: 1200000, feedback: 'WIP menerima upah reguler direct labor dan premium lembur yang disebabkan pesanan khusus.' },
            { id: 'b8-jr-foh', account: 'Factory Overhead Control', debit: 25000, feedback: 'FOH menerima premium lembur umum yang tidak spesifik ke satu job.' },
            { id: 'b8-jr-payroll', account: 'Factory Payroll', credit: 1225000, feedback: 'Factory Payroll dikredit sebesar total gross payroll yang didistribusikan.' },
          ],
        },
      },
      {
        kind: 'interactive-match',
        spec: {
          title: 'Match Dokumen Tenaga Kerja dan Fungsi Kontrol',
          instruction: 'Pasangkan dokumen atau istilah dengan fungsi akuntansi biaya yang paling tepat.',
          choices: ['Mencatat jam hadir', 'Menelusuri jam ke job/aktivitas', 'Meringkas gaji, potongan, dan gaji bersih', 'Mendistribusikan biaya ke WIP, FOH, marketing, dan administrasi', 'Biaya produksi tidak langsung'],
          pairs: [
            { id: 'b8-match-clock', prompt: 'Clock card', answer: 'Mencatat jam hadir' },
            { id: 'b8-match-ticket', prompt: 'Labor time ticket', answer: 'Menelusuri jam ke job/aktivitas' },
            { id: 'b8-match-register', prompt: 'Payroll register', answer: 'Meringkas gaji, potongan, dan gaji bersih' },
            { id: 'b8-match-distribution', prompt: 'Labor cost distribution', answer: 'Mendistribusikan biaya ke WIP, FOH, marketing, dan administrasi' },
            { id: 'b8-match-indirect', prompt: 'Indirect labor', answer: 'Biaya produksi tidak langsung' },
          ],
          feedback: 'Kunci utamanya adalah membedakan dokumen kehadiran, dokumen penelusuran job, daftar gaji, dan distribusi biaya.',
        },
      },
      { kind: 'h2', text: 'Jebakan UAS Batch 8' },
      {
        kind: 'table',
        headers: ['Jebakan', 'Cara Aman Membaca Soal'],
        rows: [
          ['Gaji kotor disamakan dengan gaji bersih', 'Pisahkan gross payroll dari net payroll payable setelah potongan'],
          ['Semua lembur dimasukkan ke WIP', 'Premium lembur khusus job masuk WIP/job; premium lembur umum masuk FOH-Control'],
          ['Clock card dipakai untuk membebankan job', 'Clock card hanya jam hadir; labor time ticket yang menelusuri jam ke job'],
          ['Indirect labor dianggap direct labor karena bekerja di pabrik', 'Pekerja pabrik yang tidak menelusuri produk spesifik tetap masuk FOH'],
          ['Marketing labor dimasukkan ke product cost', 'Tenaga kerja pemasaran adalah period cost, bukan biaya produksi'],
        ],
      },

      { kind: 'h2', text: 'Peta Submateri' },
      {
        kind: 'table',
        headers: ['Submateri', 'Pembahasan'],
        rows: [
          ['Labor cost', 'Kontribusi manusia dalam kegiatan produksi'],
          ['Direct labor', 'Pekerja langsung yang mengolah produk'],
          ['Indirect labor', 'Supervisor, maintenance, gudang, dan pekerja pendukung produksi'],
          ['Clock card', 'Dokumen jam hadir pekerja'],
          ['Labor time ticket', 'Dokumen jam kerja per job atau aktivitas'],
          ['Payroll register', 'Daftar gaji dan potongan karyawan'],
          ['Labor cost distribution', 'Distribusi biaya ke WIP, FOH, marketing, dan administrasi'],
          ['Premi lembur', 'Tambahan upah karena jam kerja melebihi jam normal'],
          ['Premi shift', 'Tambahan upah karena shift tertentu'],
          ['Bonus', 'Kompensasi berdasarkan laba atau kinerja'],
          ['Vacation pay dan holiday pay', 'Hak cuti dan hari libur berbayar'],
          ['Idle time', 'Waktu menganggur normal dan abnormal'],
          ['Fringe benefits', 'Tunjangan karyawan seperti asuransi dan pensiun'],
          ['Basic rate', 'Tarif dasar upah sebelum premi, bonus, atau tunjangan tambahan'],
          ['Wage plans', 'Rencana upah berbasis jam, unit, kombinasi jam-unit, atau bonus kelompok'],
          ['Insentif', 'Output di atas standar dan bonus produktivitas'],
          ['Daftar gaji berbasis standar produksi', 'Format perhitungan upah dasar, insentif output, total gaji, dan jurnal pembebanan'],
        ],
      },
      { kind: 'h2', text: 'Materi Teori' },
      {
        kind: 'p',
        text:
          'Labor cost merupakan harga yang dibebankan untuk usaha fisik dan mental yang dilakukan karyawan dalam kegiatan perusahaan. Dalam konteks produksi, direct labor masuk ke Work in Process, sedangkan indirect labor masuk ke Factory Overhead Control.',
      },
      {
        kind: 'p',
        text:
          'Clock card mencatat jam hadir pekerja. Labor time ticket menunjukkan pekerjaan yang dilakukan, job yang dikerjakan, waktu yang digunakan, dan menjadi dasar distribusi biaya tenaga kerja. Payroll register memuat daftar gaji, potongan, pajak, asuransi, pensiun, dan jumlah bersih yang harus dibayar.',
      },
      {
        kind: 'p',
        text:
          'Masalah akuntansi tenaga kerja biasanya terjadi dalam tiga tahap. Tahap pertama adalah saat gaji dan upah terjadi. Tahap kedua adalah distribusi atau pembebanan gaji ke Barang Dalam Proses, Overhead Pabrik, Beban Pemasaran, dan Beban Administrasi. Tahap ketiga adalah saat pembayaran gaji dan potongan terkait.',
      },
      {
        kind: 'table',
        headers: ['Kategori Tenaga Kerja', 'Perlakuan Biaya'],
        rows: [
          ['Tenaga kerja langsung', 'Barang Dalam Proses'],
          ['Tenaga kerja tidak langsung', 'Biaya Overhead Pabrik'],
          ['Tenaga kerja pemasaran', 'Beban Pemasaran'],
          ['Tenaga kerja administrasi', 'Beban Administrasi dan Umum'],
        ],
      },
      { kind: 'h3', text: 'Premi Lembur' },
      {
        kind: 'p',
        text:
          'Premi lembur adalah tambahan biaya karena tarif lembur lebih tinggi dari tarif reguler. Jika lembur terjadi karena pesanan khusus pelanggan, premi lembur dapat dibebankan ke job pelanggan. Jika lembur terjadi karena kebutuhan umum produksi, premi lembur biasanya dibebankan ke Factory Overhead Control.',
      },
      { kind: 'h3', text: 'Premi Shift' },
      {
        kind: 'p',
        text:
          'Premi shift muncul ketika pekerja pada shift tertentu, misalnya shift malam, dibayar dengan tarif lebih tinggi. Selisih antara tarif shift dan tarif reguler diperlakukan sebagai premi shift. Perlakuan premi shift bergantung pada kebijakan dan penyebab shift tersebut.',
      },
      { kind: 'h3', text: 'Bonus, Vacation Pay, Holiday Pay, dan Fringe Benefits' },
      {
        kind: 'p',
        text:
          'Bonus dapat dihitung berdasarkan laba, efisiensi, output di atas standar, atau kebijakan tertentu. Vacation pay dan holiday pay adalah hak pekerja atas cuti dan hari libur berbayar. Fringe benefits mencakup tunjangan seperti asuransi, pensiun, dan manfaat lain yang terkait karyawan.',
      },
      { kind: 'h3', text: 'Idle Time' },
      {
        kind: 'p',
        text:
          'Idle time adalah waktu menganggur pekerja. Idle time normal dapat dibebankan ke Factory Overhead Control. Idle time abnormal perlu diperlakukan hati-hati karena dapat menjadi kerugian atau memerlukan perlakuan khusus sesuai kebijakan dan soal.',
      },
      {
        kind: 'table',
        headers: ['Komponen', 'Penyebab', 'Perlakuan'],
        rows: [
          ['Premi lembur pesanan khusus', 'Permintaan pelanggan', 'Job pelanggan'],
          ['Premi lembur umum', 'Jadwal produksi umum', 'FOH-Control'],
          ['Premi shift', 'Perbedaan shift kerja', 'FOH atau sesuai penyebab dan kebijakan'],
          ['Idle time normal', 'Waktu menganggur wajar', 'FOH-Control'],
          ['Idle time abnormal', 'Gangguan tidak wajar', '[Perlu pemeriksaan manual]'],
          ['Fringe benefits produksi', 'Tunjangan pekerja produksi', 'FOH atau sesuai kebijakan, [Perlu pemeriksaan manual]'],
        ],
      },
      warningManual('Rumus insentif khusus seperti Taylor, Halsey, Rowan, atau sistem bonus lain perlu diperiksa manual jika akan dimasukkan sebagai formula final.'),
      { kind: 'h3', text: 'Kerangka Visual Labor Cost dari Materi Dosen' },
      {
        kind: 'p',
        text:
          'Slide labor cost menekankan bahwa biaya tenaga kerja tidak otomatis menjadi biaya produksi langsung. Pertama, tentukan dulu fungsi pekerja dalam organisasi. Pekerja produksi langsung masuk direct labor cost. Pekerja produksi tidak langsung masuk factory overhead. Tenaga kerja pemasaran masuk marketing expense, sedangkan tenaga kerja administrasi umum masuk general and administrative expense.',
      },
      {
        kind: 'table',
        headers: ['Fungsi Tenaga Kerja', 'Klasifikasi', 'Akun/Perlakuan', 'Kelompok Biaya'],
        rows: [
          ['Production - direct', 'Direct labor', 'Barang Dalam Proses / Work in Process', 'Production cost'],
          ['Production - indirect', 'Indirect labor', 'Factory Overhead / FOH Control', 'Production cost'],
          ['Marketing', 'Marketing labor', 'Marketing Expense', 'Operating expense'],
          ['General & Administrative', 'Administrative labor', 'General & Administrative Expense', 'Operating expense'],
        ],
        caption: 'Ringkasan logika klasifikasi labor cost berdasarkan slide labor: direct, indirect, marketing, dan general & administrative.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Kunci Membaca Labor Cost',
        text: 'Jangan mulai dari nama orang atau jabatan saja. Mulailah dari fungsi biaya: apakah pekerja menghasilkan produk secara langsung, mendukung proses produksi, menjual produk, atau menjalankan administrasi umum. Fungsi biaya menentukan akun pembebanannya.',
      },
      { kind: 'h3', text: 'Basic Pay dan Fringe Benefit' },
      {
        kind: 'table',
        headers: ['Komponen Labor Cost', 'Isi Materi', 'Implikasi Akuntansi'],
        rows: [
          ['Basic pay', 'Upah dasar berdasarkan jam, unit, atau tarif dasar lain', 'Menjadi dasar perhitungan gross payroll'],
          ['Holiday pay', 'Pembayaran untuk hari libur', 'Diakui sebagai biaya tenaga kerja sesuai fungsi pekerja'],
          ['Vacation pay', 'Pembayaran hak cuti', 'Dapat diakrualkan agar biaya tidak melonjak saat cuti diambil'],
          ['Overtime premium pay', 'Tambahan karena tarif lembur lebih tinggi dari tarif normal', 'Dibebankan ke job khusus atau FOH sesuai penyebab lembur'],
          ['Insurance benefits', 'Tunjangan atau kewajiban asuransi', 'Dibebankan sesuai kebijakan dan fungsi pekerja'],
          ['Pensions', 'Iuran atau kewajiban pensiun', 'Dicatat sebagai kewajiban dan biaya terkait tenaga kerja'],
        ],
      },
      { kind: 'h3', text: 'Basic Rate dan Wage Plans' },
      {
        kind: 'p',
        text:
          'Basic rate adalah tarif dasar yang dipakai sebagai titik awal perhitungan upah. Dalam materi labor, basic rate tidak hanya berbentuk tarif per jam. Perusahaan dapat memakai hourly-rate plans, piece-rate plans, modified-rate plans, atau skema bonus yang menggabungkan standar waktu, unit output, dan efisiensi kerja.',
      },
      {
        kind: 'table',
        headers: ['Jenis Wage Plan', 'Dasar Perhitungan', 'Cara Membaca dalam Soal'],
        rows: [
          ['Hourly-rate plans (HRP)', 'Tarif per jam × jumlah jam kerja', 'Fokus pada waktu kerja. Output tidak langsung mengubah upah, kecuali ada premi, bonus, atau ketentuan lain.'],
          ['Piece-rate plans (PRP)', 'Tarif per unit × jumlah unit yang dihasilkan', 'Fokus pada kuantitas output. Semakin banyak unit yang memenuhi syarat, semakin besar upah.'],
          ['Modified-rate plans (MRP)', 'Kombinasi unsur hourly-rate dan piece-rate', 'Soal biasanya memberi tarif dasar/jaminan minimum dan tambahan berbasis output atau efisiensi.'],
        ],
        caption: 'Klasifikasi dasar wage plans: hourly-rate, piece-rate, dan modified-rate.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Logika Basic Rate',
        text: 'Pisahkan dulu upah dasar dari premi atau bonus. Upah dasar menunjukkan kompensasi minimum atau normal, sedangkan premi dan bonus muncul karena lembur, shift, output di atas standar, atau efisiensi kerja.',
      },
      { kind: 'h3', text: 'Straight Piecework Plan' },
      {
        kind: 'p',
        text:
          'Straight piecework plan adalah program upah yang membayar pekerja berdasarkan jumlah unit yang dihasilkan. Skema ini tetap dapat memiliki guaranteed hourly rate atau upah minimum per jam, sehingga pekerja tetap memperoleh upah minimum jika output rendah.',
      },
      {
        kind: 'table',
        headers: ['Elemen', 'Penjelasan'],
        rows: [
          ['Dasar utama', 'Jumlah unit yang dihasilkan pekerja'],
          ['Rumus dasar', 'Tarif per unit × jumlah unit yang diproduksi'],
          ['Jaminan minimum', 'Guaranteed hourly rate dapat digunakan sebagai batas bawah upah'],
          ['Implikasi pengendalian', 'Mendorong output individual, tetapi kualitas dan standar produk tetap perlu diawasi'],
        ],
        caption: 'Ringkasan straight piecework plan.',
      },
      { kind: 'h3', text: 'One-Hundred-Percent Bonus Plan' },
      {
        kind: 'p',
        text:
          'One-hundred-percent bonus plan adalah variasi dari straight piecework. Perbedaannya, standar tidak dinyatakan langsung dalam nilai uang per unit, tetapi dalam waktu standar per unit output. Pekerja tetap memperoleh upah dasar, lalu menerima bonus jika efisiensi kerjanya melebihi 100 persen.',
      },
      {
        kind: 'table',
        headers: ['Elemen', 'Penjelasan'],
        rows: [
          ['Dasar utama', 'Rasio efisiensi terhadap standar waktu'],
          ['Rumus konseptual', 'Base rate × efficiency, sesuai ketentuan soal'],
          ['Syarat bonus', 'Efisiensi pekerja lebih dari 100 persen atau melampaui standar'],
          ['Implikasi pengendalian', 'Cocok jika perusahaan memiliki standar waktu kerja yang jelas dan dapat diukur'],
        ],
        caption: 'Ringkasan one-hundred-percent bonus plan.',
      },
      { kind: 'h3', text: 'Perbedaan Straight Piecework dan One-Hundred-Percent Bonus Plan' },
      {
        kind: 'table',
        headers: ['Aspek', 'Straight Piecework Plan', 'One-Hundred-Percent Bonus Plan'],
        rows: [
          ['Basis pengukuran', 'Jumlah unit yang diproduksi', 'Rasio efisiensi terhadap standar waktu'],
          ['Hubungan output dengan upah', 'Setiap tambahan unit menambah upah sesuai tarif per unit', 'Bonus muncul jika kinerja melampaui standar efisiensi'],
          ['Fokus pengendalian', 'Output absolut pekerja', 'Pencapaian standar dan efisiensi kerja'],
          ['Rumus ringkas', 'Tarif per unit × unit', 'Base rate × efficiency'],
          ['Kondisi penggunaan', 'Cocok untuk pekerjaan individual yang outputnya mudah dihitung', 'Cocok jika standar kerja dan waktu standar tersedia dengan jelas'],
        ],
        caption: 'Perbedaan dua skema insentif berbasis output dan efisiensi.',
      },
      { kind: 'h3', text: 'Group Bonus Plan' },
      {
        kind: 'p',
        text:
          'Group bonus plan memberikan bonus kepada kelompok ketika output kelompok melampaui standar atau ketika kelompok menyelesaikan pekerjaan lebih cepat dari waktu standar. Unit di atas standar diperlakukan sebagai waktu yang dihemat, kemudian bonus atas waktu hemat tersebut dibagi kepada anggota kelompok secara proporsional sesuai kebijakan perusahaan.',
      },
      {
        kind: 'table',
        headers: ['Aspek', 'Penjelasan'],
        rows: [
          ['Objek bonus', 'Kelompok kerja, bukan hanya pekerja individual'],
          ['Dasar bonus', 'Output di atas standar atau waktu yang dihemat kelompok'],
          ['Pembagian bonus', 'Biasanya dibagi proporsional kepada anggota kelompok'],
          ['Kelebihan', 'Mendorong kerja sama dan tanggung jawab kelompok'],
          ['Risiko', 'Perlu standar output dan dasar pembagian yang adil agar tidak menimbulkan konflik'],
        ],
        caption: 'Ringkasan group bonus plan.',
      },
      { kind: 'h3', text: 'Tiga Tahap Akuntansi Labor' },
      {
        kind: 'p',
        text:
          'Materi labor cost dalam slide disusun melalui tiga tahap pencatatan. Tahap pertama adalah pengakuan payroll dan potongan. Tahap kedua adalah distribusi biaya ke objek biaya yang benar. Tahap ketiga adalah pembayaran kewajiban kepada karyawan dan pihak terkait.',
      },
      {
        kind: 'table',
        headers: ['Tahap', 'Fokus', 'Debit Utama', 'Kredit Utama'],
        rows: [
          ['Saat terjadinya', 'Mengakui gross payroll dan potongan', 'Gaji dan Upah', 'Utang Gaji dan Upah, Utang PPh, Utang Askes, Utang Pensiun'],
          ['Saat distribusi/pembebanan', 'Membebankan gaji ke fungsi biaya', 'BDP, BOP, Biaya Pemasaran, Biaya Administrasi dan Umum', 'Gaji dan Upah'],
          ['Saat pembayaran', 'Membayar gaji bersih dan kewajiban potongan', 'Utang Gaji dan Upah serta utang potongan', 'Kas'],
        ],
      },
      {
        kind: 'journal',
        caption: 'Contoh tahap 1: saat gaji dan upah terjadi sebesar Rp1.000.000 dengan potongan payroll.',
        lines: [
          { account: 'Gaji dan Upah', debit: 'Rp1.000.000' },
          { account: 'Utang Gaji dan Upah', credit: 'Rp650.000', isCredit: true },
          { account: 'Utang PPh', credit: 'Rp150.000', isCredit: true },
          { account: 'Utang Askes', credit: 'Rp75.000', isCredit: true },
          { account: 'Utang Pensiun', credit: 'Rp125.000', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Contoh tahap 2: distribusi gaji ke produksi langsung, produksi tidak langsung, pemasaran, dan administrasi umum.',
        lines: [
          { account: 'Barang Dalam Proses', debit: 'Rp500.000' },
          { account: 'Biaya Overhead Pabrik', debit: 'Rp100.000' },
          { account: 'Biaya Pemasaran', debit: 'Rp250.000' },
          { account: 'Biaya Administrasi dan Umum', debit: 'Rp150.000' },
          { account: 'Gaji dan Upah', credit: 'Rp1.000.000', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Contoh tahap 3: saat pembayaran gaji bersih dan kewajiban potongan.',
        lines: [
          { account: 'Utang Gaji dan Upah', debit: 'Rp650.000' },
          { account: 'Utang PPh', debit: 'Rp150.000' },
          { account: 'Utang Askes', debit: 'Rp75.000' },
          { account: 'Utang Pensiun', debit: 'Rp125.000' },
          { account: 'Kas', credit: 'Rp1.000.000', isCredit: true },
        ],
      },
      { kind: 'h3', text: 'Pendalaman Premi Lembur, Premi Shift, dan Bonus' },
      {
        kind: 'p',
        text:
          'Pada contoh lembur, total pembayaran dapat dihitung dengan dua cara yang ekuivalen. Cara pertama menghitung 40 jam reguler dan 5 jam lembur dengan tarif lembur. Cara kedua menghitung seluruh 45 jam dengan tarif reguler, lalu menambahkan premi lembur sebesar selisih tarif untuk 5 jam. Cara kedua berguna karena memisahkan bagian upah langsung dari bagian premi lembur.',
      },
      {
        kind: 'table',
        headers: ['Komponen', 'Perhitungan', 'Jumlah'],
        rows: [
          ['Gaji reguler', 'Rp25.000 × 45 jam', 'Rp1.125.000'],
          ['Premi lembur', '(Rp30.000 - Rp25.000) × 5 jam', 'Rp25.000'],
          ['Jumlah gaji dan upah', 'Rp1.125.000 + Rp25.000', 'Rp1.150.000'],
        ],
        caption: 'Contoh premi lembur dari slide: pekerja bekerja 45 jam, tarif reguler Rp25.000, dan tarif lembur Rp30.000.',
      },
      {
        kind: 'example',
        title: 'Pendalaman PT SAMs: Lembur karena Pesanan Besar',
        blocks: [
          {
            kind: 'table',
            headers: ['Komponen', 'Perhitungan', 'Jumlah'],
            rows: [
              ['Gaji dan upah langsung', '10 karyawan × 5 jam × Rp5.000', 'Rp250.000'],
              ['Premi lembur', '10 karyawan × 5 jam × Rp1.000', 'Rp50.000'],
              ['Bonus', '20% × Rp5.000 × 5 jam × 10 karyawan', 'Rp50.000'],
              ['Gaji supervisor tenaga tidak langsung', 'Data dari soal', 'Rp75.000'],
              ['Jumlah gaji dan upah', 'Total seluruh komponen', 'Rp425.000'],
            ],
          },
          {
            kind: 'journal',
            caption: 'Jurnal contoh PT SAMs sesuai struktur slide.',
            lines: [
              { account: 'Gaji dan Upah Langsung', debit: 'Rp250.000' },
              { account: 'Gaji dan Upah Supervisor - FOH Control', debit: 'Rp75.000' },
              { account: 'Premi Lembur - FOH Control', debit: 'Rp50.000' },
              { account: 'Bonus - FOH Control', debit: 'Rp50.000' },
              { account: 'Utang Gaji dan Upah', credit: 'Rp425.000', isCredit: true },
            ],
          },
        ],
      },
      {
        kind: 'example',
        title: 'Pendalaman Premi Shift',
        blocks: [
          {
            kind: 'table',
            headers: ['Komponen', 'Perhitungan', 'Jumlah'],
            rows: [
              ['Gaji dan upah langsung', '40 jam × 2 shift × Rp20.000', 'Rp1.600.000'],
              ['Premi shift', '40 jam × (Rp25.000 - Rp20.000)', 'Rp200.000'],
              ['Jumlah gaji dan upah', 'Rp1.600.000 + Rp200.000', 'Rp1.800.000'],
            ],
          },
          {
            kind: 'journal',
            caption: 'Jurnal premi shift ketika premi diperlakukan sebagai FOH Control.',
            lines: [
              { account: 'Gaji dan Upah Langsung', debit: 'Rp1.600.000' },
              { account: 'Premi Shift - FOH Control', debit: 'Rp200.000' },
              { account: 'Utang Gaji dan Upah', credit: 'Rp1.800.000', isCredit: true },
            ],
          },
        ],
      },
      {
        kind: 'example',
        title: 'Pendalaman Bonus Mingguan',
        blocks: [
          {
            kind: 'table',
            headers: ['Komponen', 'Perhitungan', 'Jumlah'],
            rows: [
              ['Gaji dan upah mingguan', 'Data dari soal', 'Rp200.000'],
              ['Bonus setahun', '0,5% × Rp52.000.000', 'Rp260.000'],
              ['Bonus mingguan', 'Rp260.000 ÷ 52 minggu', 'Rp5.000'],
            ],
          },
          {
            kind: 'journal',
            caption: 'Jurnal mingguan untuk gaji dan bonus.',
            lines: [
              { account: 'Gaji dan Upah Langsung', debit: 'Rp200.000' },
              { account: 'Bonus - FOH Control', debit: 'Rp5.000' },
              { account: 'Utang Gaji dan Upah', credit: 'Rp200.000', isCredit: true },
              { account: 'Utang Bonus', credit: 'Rp5.000', isCredit: true },
            ],
          },
        ],
      },
      { kind: 'h2', text: 'Materi Praktik' },
      {
        kind: 'ol',
        items: [
          'Pisahkan tenaga kerja produksi dan nonproduksi.',
          'Klasifikasikan tenaga kerja produksi menjadi direct labor dan indirect labor.',
          'Gunakan clock card untuk mengetahui jam hadir.',
          'Gunakan labor time ticket untuk mendistribusikan jam kerja ke job atau aktivitas.',
          'Hitung upah reguler berdasarkan jam reguler dan tarif reguler.',
          'Jika soal memakai standar produksi, hitung standar output lebih dulu sebelum menghitung insentif.',
          'Hitung upah lembur berdasarkan jam lembur dan tarif lembur.',
          'Susun daftar gaji dan upah dalam tabel agar upah dasar, insentif, dan total gaji tidak tercampur.',
          'Pisahkan premi lembur jika soal meminta tambahan lembur saja.',
          'Tentukan apakah premi lembur dibebankan ke job atau overhead.',
          'Hitung premi shift, bonus, vacation pay, holiday pay, dan fringe benefits jika data tersedia.',
          'Buat jurnal saat gaji terjadi, saat distribusi, dan saat pembayaran.',
        ],
      },
      { kind: 'h2', text: 'Format Cost dan Rumus' },
      { kind: 'h3', text: 'Labor Time Ticket' },
      {
        kind: 'table',
        headers: ['Kolom', 'Isi'],
        rows: [
          ['Nama karyawan', 'Identitas pekerja'],
          ['Nomor karyawan', 'Kode pekerja'],
          ['Tanggal', 'Tanggal kerja'],
          ['Nomor job atau aktivitas', 'Objek biaya yang dikerjakan'],
          ['Jam mulai dan selesai', 'Waktu kerja'],
          ['Total jam', 'Dasar penghitungan upah'],
          ['Tarif', 'Tarif per jam atau tarif lain'],
          ['Klasifikasi', 'Direct labor atau indirect labor'],
        ],
      },
      { kind: 'h3', text: 'Payroll Register' },
      {
        kind: 'table',
        headers: ['Komponen Payroll', 'Isi'],
        rows: [
          ['Gross pay', 'Total gaji sebelum potongan'],
          ['PPh atau pajak', 'Potongan pajak karyawan'],
          ['Asuransi atau Askes', 'Potongan atau kewajiban terkait asuransi'],
          ['Pensiun', 'Potongan atau kewajiban dana pensiun'],
          ['Net pay', 'Gaji bersih yang dibayarkan'],
        ],
      },
      { kind: 'h3', text: 'Format Distribusi Biaya Tenaga Kerja' },
      {
        kind: 'table',
        headers: ['Kategori Tenaga Kerja', 'Jumlah', 'Perlakuan'],
        rows: [
          ['Tenaga kerja langsung', 'Data dari soal', 'Barang Dalam Proses'],
          ['Tenaga kerja tidak langsung', 'Data dari soal', 'Biaya Overhead Pabrik'],
          ['Tenaga kerja pemasaran', 'Data dari soal', 'Beban Pemasaran'],
          ['Tenaga kerja administrasi', 'Data dari soal', 'Beban Administrasi dan Umum'],
          ['Total gaji dan upah', 'Total', 'Rekonsiliasi'],
        ],
      },
      { kind: 'h3', text: 'Format Daftar Gaji dan Upah Berbasis Standar Produksi' },
      {
        kind: 'p',
        text:
          'Gunakan format tabel ringkas ketika soal memberikan standar produksi per jam, jam kerja harian, tarif upah, dan insentif atas output di atas standar. Tujuannya adalah memisahkan upah dasar dari insentif sehingga jurnal pembebanan lebih mudah dibuat.',
      },
      {
        kind: 'table',
        headers: ['Kolom', 'Isi yang Diisi', 'Fungsi Kontrol'],
        rows: [
          ['Hari atau tanggal', 'Hari kerja karyawan', 'Memastikan seluruh hari kerja masuk perhitungan'],
          ['Output aktual', 'Jumlah unit yang diselesaikan', 'Dasar pembanding dengan standar'],
          ['Jam kerja', 'Jam kerja aktual per hari', 'Dasar upah dasar'],
          ['Output standar', 'Standar per jam × jam kerja', 'Batas normal sebelum insentif'],
          ['Unit di atas standar', 'max(0, output aktual - output standar)', 'Dasar insentif; gunakan 0 jika output tidak melampaui standar'],
          ['Upah dasar', 'Jam kerja × tarif per jam', 'Bagian gaji langsung normal'],
          ['Insentif output', 'Tambahan karena output melebihi standar', 'Bagian premi atau insentif sesuai akun soal'],
          ['Total gaji', 'Upah dasar + insentif', 'Jumlah yang dikreditkan ke utang gaji dan upah'],
        ],
        caption: 'Template daftar gaji dan upah untuk soal berbasis standar produksi.',
      },
      { kind: 'formula', text: 'Standar output harian = Standar unit per jam × Jam kerja harian', note: 'Menentukan batas output normal sebelum insentif' },
      { kind: 'formula', text: 'Unit di atas standar = max(0, Output aktual - Output standar)', note: 'Jika output aktual tidak melebihi standar, gunakan 0 agar insentif tidak menjadi negatif' },
      { kind: 'formula', text: 'Insentif output = (Unit di atas standar ÷ Standar unit per jam) × Persentase insentif × Tarif per jam', note: 'Dipakai pada soal daftar gaji berbasis standar produksi' },
      { kind: 'formula', text: 'Upah dasar = Jam kerja × Tarif per jam', note: 'Menghitung upah normal sebelum insentif' },
      { kind: 'formula', text: 'Total gaji harian = Upah dasar + Insentif output', note: 'Menghasilkan jumlah gaji per hari' },
      { kind: 'formula', text: 'Upah reguler = Jam reguler × Tarif reguler', note: 'Menghitung upah normal' },
      { kind: 'formula', text: 'Upah lembur = Jam lembur × Tarif lembur', note: 'Menghitung pembayaran lembur' },
      { kind: 'formula', text: 'Premi lembur = Jam lembur × (Tarif lembur - Tarif reguler)', note: 'Menghitung tambahan lembur saja' },
      { kind: 'formula', text: 'Total upah = Upah reguler + Upah lembur', note: 'Menghitung total gaji pekerja jika tidak ada komponen lain' },
      { kind: 'formula', text: 'Premi shift = Jam shift × Tambahan tarif shift', note: 'Menghitung tambahan tarif shift' },
      { kind: 'formula', text: 'Bonus berbasis laba = Persentase bonus × Laba', note: 'Menghitung bonus dari laba' },
      { kind: 'formula', text: 'Vacation pay mingguan = Hak vacation pay tahunan ÷ Jumlah minggu kerja', note: 'Mengakui vacation pay secara berkala' },
      { kind: 'h3', text: 'Jurnal Tenaga Kerja' },
      {
        kind: 'table',
        headers: ['Tahap', 'Debit', 'Kredit'],
        rows: [
          ['Saat gaji terjadi', 'Gaji dan Upah', 'Utang Gaji, Utang PPh, Utang Askes, Utang Pensiun'],
          ['Saat distribusi', 'Barang Dalam Proses, Biaya Overhead Pabrik, Biaya Pemasaran, Biaya Administrasi dan Umum', 'Gaji dan Upah'],
          ['Saat pembayaran', 'Utang Gaji dan potongan terkait', 'Kas'],
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Jurnal Gaji dan Distribusi Tenaga Kerja',
        blocks: [
          { kind: 'p', text: 'Gaji dan upah sebesar Rp1.000.000 memiliki potongan sebagai berikut.' },
          {
            kind: 'table',
            headers: ['Komponen', 'Nilai'],
            rows: [
              ['Utang Gaji dan Upah', 'Rp650.000'],
              ['Utang PPh', 'Rp150.000'],
              ['Utang Askes', 'Rp75.000'],
              ['Utang Pensiun', 'Rp125.000'],
              ['Total', 'Rp1.000.000'],
            ],
          },
          {
            kind: 'table',
            headers: ['Distribusi Gaji dan Upah', 'Nilai', 'Akun Perlakuan'],
            rows: [
              ['Gaji produksi langsung', 'Rp500.000', 'Barang Dalam Proses'],
              ['Gaji produksi tidak langsung', 'Rp100.000', 'Biaya Overhead Pabrik'],
              ['Gaji pemasaran', 'Rp250.000', 'Biaya Pemasaran'],
              ['Gaji administrasi dan umum', 'Rp150.000', 'Biaya Administrasi dan Umum'],
              ['Total', 'Rp1.000.000', 'Gaji dan Upah'],
            ],
          },
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Premi Lembur',
        blocks: [
          {
            kind: 'p',
            text:
              'Sebuah perusahaan membayar tarif reguler Rp25.000 per jam sampai dengan 40 jam kerja. Jika jam kerja melebihi 40 jam, kelebihan jam dianggap lembur dan dibayar Rp30.000 per jam. Seorang karyawan bekerja 45 jam dalam minggu ini.',
          },
          {
            kind: 'ol',
            items: [
              'Upah reguler = 40 × Rp25.000 = Rp1.000.000.',
              'Upah lembur = 5 × Rp30.000 = Rp150.000.',
              'Total upah = Rp1.000.000 + Rp150.000 = Rp1.150.000.',
              'Premi lembur = 5 × (Rp30.000 - Rp25.000) = Rp25.000 jika soal meminta premi lembur saja.',
            ],
          },
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Premi Lembur Pesanan Khusus',
        blocks: [
          {
            kind: 'p',
            text:
              'PT SAMs menerima pesanan dalam jumlah besar sehingga sepuluh orang karyawan bekerja lembur selama 5 jam. Upah normal Rp5.000 per jam, upah luar jam normal Rp6.000 per jam, dan bonus 20% dari upah normal. Supervisor dibayar Rp75.000 selama masa lembur.',
          },
          {
            kind: 'p',
            text:
              'Langkah penyelesaian harus memisahkan upah normal, tambahan lembur, bonus, dan biaya supervisor. Perlakuan biaya bergantung pada apakah lembur terjadi karena pesanan khusus pelanggan atau karena kebutuhan umum produksi.',
          },
          warningManual('Detail angka akhir contoh PT SAMs perlu dicek dari slide sumber sebelum dijadikan data final.'),
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Praktik: Daftar Gaji Berbasis Standar Produksi',
        blocks: [
          {
            kind: 'table',
            headers: ['Data Soal', 'Nilai'],
            rows: [
              ['Standar produksi', '35 unit per jam'],
              ['Jam kerja normal', '6 jam per hari'],
              ['Output standar per hari', '35 unit × 6 jam = 210 unit'],
              ['Tarif upah', 'Rp1.500 per jam'],
              ['Upah dasar per hari', '6 jam × Rp1.500 = Rp9.000'],
              ['Insentif atas kelebihan output', '70% dari tarif upah untuk ekuivalen jam output di atas standar'],
            ],
            caption: 'Data dasar sebelum menyusun daftar gaji dan upah.',
          },
          {
            kind: 'table',
            headers: ['Hari', 'Unit Aktual', 'Jam', 'Unit Standar', 'Unit di Atas Standar', 'Upah Dasar', 'Insentif', 'Total Gaji'],
            rows: [
              ['Senin', '220', '6', '210', '10', 'Rp9.000', '(10 ÷ 35) × 70% × Rp1.500 = Rp300', 'Rp9.300'],
              ['Selasa', '190', '6', '210', '0', 'Rp9.000', 'Tidak ada insentif', 'Rp9.000'],
              ['Rabu', '210', '6', '210', '0', 'Rp9.000', 'Rp0', 'Rp9.000'],
              ['Kamis', '205', '6', '210', '0', 'Rp9.000', 'Tidak ada insentif', 'Rp9.000'],
              ['Jumat', '230', '6', '210', '20', 'Rp9.000', '(20 ÷ 35) × 70% × Rp1.500 = Rp600', 'Rp9.600'],
              ['Total', '—', '30', '—', '—', 'Rp45.000', 'Rp900', 'Rp45.900'],
            ],
            caption: 'Daftar gaji dan upah minggu pertama bulan Maret.',
          },
          {
            kind: 'table',
            headers: ['Komponen', 'Jumlah', 'Perlakuan Akun'],
            rows: [
              ['Gaji dan upah langsung', 'Rp45.000', 'Debit karena berasal dari 5 hari × Rp9.000'],
              ['Premi lembur / insentif output - FOH Control', 'Rp900', 'Debit sesuai kunci soal sumber'],
              ['Utang gaji dan upah', 'Rp45.900', 'Kredit sebesar total gaji yang harus dibayar'],
            ],
            caption: 'Rekonsiliasi sebelum jurnal.',
          },
          {
            kind: 'journal',
            caption: 'Jurnal umum untuk mencatat gaji dan upah pada contoh standar produksi.',
            lines: [
              { account: 'Gaji dan Upah Langsung', debit: 'Rp45.000' },
              { account: 'Premi Lembur - FOH Control', debit: 'Rp900' },
              { account: 'Utang Gaji dan Upah', credit: 'Rp45.900', isCredit: true },
            ],
          },
          {
            kind: 'callout',
            variant: 'tip',
            title: 'Kontrol Pengerjaan',
            text: 'Jangan memberi insentif saat output aktual tidak melebihi standar. Untuk hari Selasa dan Kamis, gaji tetap Rp9.000 karena output berada di bawah 210 unit. Untuk hari Rabu, output tepat standar sehingga insentif Rp0. Nama akun mengikuti kunci soal sumber; jika dosen memakai istilah lain seperti FOH-Control, Biaya Overhead Pabrik, atau Factory Payroll, sesuaikan label akun tanpa mengubah perhitungan.',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Contoh Premi Shift, Bonus, Vacation Pay, dan Holiday Pay',
        blocks: [
          {
            kind: 'p',
            text:
              'Premi shift dihitung dari perbedaan tarif shift. Bonus dapat dihitung dari persentase laba atau ukuran kinerja. Vacation pay dan holiday pay diakui sebagai hak pekerja atas cuti dan hari libur berbayar. Jika data angka tersedia, hitung setiap komponen secara terpisah sebelum menentukan akun pembebanannya.',
          },
          warningManual('Contoh rinci premi shift, bonus, vacation pay, dan holiday pay perlu dicek dari slide sumber jika akan memakai angka final.'),
        ],
      },
      { kind: 'h2', text: 'Jurnal Lengkap Biaya Tenaga Kerja' },
      {
        kind: 'p',
        text:
          'Jurnal tenaga kerja biasanya dipisah menjadi tiga tahap: saat payroll diakui, saat biaya didistribusikan ke objek biaya, dan saat kewajiban dibayar. Pemisahan ini penting karena akun payroll hanya bersifat sementara sebelum biaya dialokasikan ke WIP, FOH, marketing, atau administrasi.',
      },
      {
        kind: 'journal',
        caption: 'Tahap 1 - mengakui gaji dan potongan payroll.',
        lines: [
          { account: 'Factory Payroll', debit: 'Data dari soal' },
          { account: 'Employee Income Tax Payable', credit: 'Data dari soal', isCredit: true },
          { account: 'Insurance Payable', credit: 'Data dari soal', isCredit: true },
          { account: 'Pension Payable', credit: 'Data dari soal', isCredit: true },
          { account: 'Wages Payable', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Tahap 2 - distribusi biaya tenaga kerja ke akun biaya.',
        lines: [
          { account: 'Work in Process', debit: 'Direct labor dari labor time ticket' },
          { account: 'Factory Overhead Control', debit: 'Indirect labor, premi umum, idle time normal, atau fringe benefits produksi' },
          { account: 'Marketing Expense', debit: 'Tenaga kerja pemasaran jika ada' },
          { account: 'Administrative Expense', debit: 'Tenaga kerja administrasi jika ada' },
          { account: 'Factory Payroll', credit: 'Total payroll yang didistribusikan', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Tahap 3 - pembayaran gaji bersih.',
        lines: [
          { account: 'Wages Payable', debit: 'Data dari soal' },
          { account: 'Cash', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'table',
        headers: ['Sumber Data', 'Akun Debit', 'Kriteria Pembebanan'],
        rows: [
          ['Labor time ticket untuk job tertentu', 'Work in Process', 'Jam kerja dapat ditelusuri langsung ke pesanan atau produk'],
          ['Jam supervisor dan mandor pabrik', 'Factory Overhead Control', 'Mendukung produksi tetapi tidak menelusuri unit spesifik'],
          ['Premi lembur karena pesanan khusus', 'Work in Process atau job khusus', 'Tambahan biaya muncul karena permintaan pelanggan tertentu'],
          ['Premi lembur karena jadwal umum produksi', 'Factory Overhead Control', 'Tambahan biaya tidak dapat dibebankan ke satu job secara adil'],
          ['Idle time normal', 'Factory Overhead Control', 'Bagian normal dari operasi pabrik'],
          ['Idle time abnormal', '[Perlu pemeriksaan manual]', 'Perlu mengikuti kebijakan soal atau modul'],
        ],
        caption: 'Dasar distribusi labor cost agar tidak salah masuk akun.',
      },
      {
        kind: 'callout',
        variant: 'tip',
        title: 'Cara Cepat Membaca Soal Tenaga Kerja',
        text: 'Cari dulu penyebab biayanya. Jika pekerja mengerjakan produk atau job tertentu, masuk WIP. Jika pekerja mendukung pabrik, masuk FOH. Jika berkaitan dengan penjualan atau kantor umum, masuk period cost. Setelah itu baru hitung upah reguler, lembur, premi, bonus, dan potongan payroll.',
      },
      { kind: 'h2', text: 'Kesalahan Umum' },
      {
        kind: 'table',
        headers: ['Kesalahan', 'Koreksi'],
        rows: [
          ['Semua gaji pabrik dimasukkan ke direct labor', 'Pisahkan direct labor dan indirect labor'],
          ['Clock card disamakan dengan labor time ticket', 'Clock card untuk jam hadir, labor time ticket untuk distribusi pekerjaan'],
          ['Insentif dihitung untuk output yang tidak melebihi standar', 'Baca standar output dan syarat bonus'],
          ['Premi umum dimasukkan ke WIP', 'Premi umum biasanya masuk FOH-Control'],
          ['Tenaga kerja pemasaran dimasukkan ke biaya produksi', 'Pemasaran adalah period cost'],
          ['Idle time abnormal diperlakukan sama seperti idle time normal', 'Idle time abnormal perlu pemeriksaan perlakuan khusus'],
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace TM 10 - Daftar Gaji Berbasis Standar Produksi',
          instruction: 'Gunakan data terlihat: standar 35 unit per jam; 6 jam per hari; tarif Rp1.500 per jam; insentif 70% dari tarif upah untuk output di atas standar; output Senin sampai Jumat adalah 220, 190, 210, 205, dan 230 unit.',
          currency: 'Rp',
          headers: ['Hari', 'Gaji'],
          rows: [
            { id: 'tm10-pay-mon', label: 'Senin', cells: [{ id: 'tm10-pay-monday', answer: 9300, placeholder: 'Upah dasar + insentif' }] },
            { id: 'tm10-pay-tue', label: 'Selasa', cells: [{ id: 'tm10-pay-tuesday', answer: 9000, placeholder: 'Upah dasar' }] },
            { id: 'tm10-pay-wed', label: 'Rabu', cells: [{ id: 'tm10-pay-wednesday', answer: 9000, placeholder: 'Upah dasar' }] },
            { id: 'tm10-pay-thu', label: 'Kamis', cells: [{ id: 'tm10-pay-thursday', answer: 9000, placeholder: 'Upah dasar' }] },
            { id: 'tm10-pay-fri', label: 'Jumat', cells: [{ id: 'tm10-pay-friday', answer: 9600, placeholder: 'Upah dasar + insentif' }] },
            { id: 'tm10-pay-total', label: 'Total gaji minggu pertama', cells: [{ id: 'tm10-pay-total-week', answer: 45900, placeholder: 'Jumlah Senin sampai Jumat' }] },
          ],
        },
      },
      {
        kind: 'journal-builder',
        spec: {
          title: 'Workspace TM 10 - Jurnal Daftar Gaji Standar Produksi',
          instruction: 'Gunakan hasil daftar gaji: gaji dan upah langsung Rp45.000; premi/insentif Rp900; utang gaji Rp45.900.',
          currency: 'Rp',
          accountChoices: ['Work in Process', 'Factory Overhead Control', 'Wages Payable'],
          lines: [
            { id: 'tm10-journal-wip', group: 'Distribusi gaji produksi', account: 'Work in Process', debit: 45000 },
            { id: 'tm10-journal-foh', group: 'Distribusi gaji produksi', account: 'Factory Overhead Control', debit: 900 },
            { id: 'tm10-journal-payable', group: 'Distribusi gaji produksi', account: 'Wages Payable', credit: 45900 },
          ],
        },
      },
      {
        kind: 'solution-reveal',
        title: 'Pembahasan Workspace TM 10',
        prompt: 'Buka setelah menghitung gaji dan menyusun jurnal.',
        blocks: [
          { kind: 'p', text: 'Output standar harian adalah 35 unit × 6 jam = 210 unit. Upah dasar harian adalah 6 × Rp1.500 = Rp9.000. Insentif hanya muncul untuk output di atas 210 unit.' },
          { kind: 'p', text: 'Senin menghasilkan 220 unit, sehingga kelebihan 10 unit menghasilkan insentif Rp300. Jumat menghasilkan 230 unit, sehingga kelebihan 20 unit menghasilkan insentif Rp600. Total upah dasar minggu kerja adalah Rp45.000 dan total insentif Rp900, sehingga utang gaji Rp45.900.' },
          { kind: 'p', text: 'Dalam jurnal distribusi, upah dasar tenaga kerja langsung dibebankan ke Work in Process. Premi atau insentif yang diperlakukan sebagai overhead masuk Factory Overhead Control. Kreditnya adalah Wages Payable sebesar total Rp45.900.' },
        ],
      },
      {
        kind: 'example',
        title: 'Latihan Pemahaman TM 10',
        blocks: [
          {
            kind: 'ol',
            items: [
              'Klasifikasikan tenaga kerja ke direct labor, indirect labor, marketing labor, dan administrative labor.',
              'Hitung upah reguler, upah lembur, dan premi lembur.',
              'Hitung premi shift jika tersedia tarif shift berbeda.',
              'Hitung bonus berbasis laba jika persentase bonus dan laba tersedia.',
              'Hitung vacation pay atau holiday pay jika data tersedia.',
              'Klasifikasikan skema upah ke hourly-rate, piece-rate, modified-rate, straight piecework, one-hundred-percent bonus, atau group bonus plan.',
              'Buat jurnal saat gaji terjadi.',
              'Buat jurnal distribusi biaya tenaga kerja.',
              'Buat jurnal pembayaran gaji dan potongan.',
              'Analisis apakah premi lembur masuk job pelanggan atau FOH-Control.',
            ],
          },
        ],
      },
      { kind: 'h2', text: 'Ringkasan' },
      {
        kind: 'p',
        text:
          'TM 10 membahas biaya tenaga kerja langsung dan perlakuan akuntansinya. Direct labor masuk Barang Dalam Proses, sedangkan indirect labor masuk Overhead Pabrik. Dokumen pentingnya adalah clock card, labor time ticket, payroll register, dan labor cost distribution.',
      },
      {
        kind: 'p',
        text:
          'Komponen tenaga kerja yang perlu dikuasai mencakup upah dasar, wage plans, daftar gaji berbasis standar produksi, insentif output, lembur, premi shift, bonus, vacation pay, holiday pay, idle time, dan fringe benefits. Wage plans mencakup hourly-rate, piece-rate, modified-rate, straight piecework, one-hundred-percent bonus, dan group bonus plan. Jurnal tenaga kerja harus dipisahkan antara saat gaji terjadi, saat distribusi, dan saat pembayaran.',
      },
      { kind: 'h2', text: 'Checklist Kelengkapan' },
      {
        kind: 'table',
        headers: ['Komponen', 'Status'],
        rows: [
          ['Labor cost', 'Lengkap'],
          ['Direct labor dan indirect labor', 'Lengkap'],
          ['Clock card dan labor time ticket', 'Lengkap'],
          ['Payroll register', '[Perlu pemeriksaan manual] untuk format asli'],
          ['Labor cost distribution', 'Lengkap'],
          ['Premi lembur', 'Lengkap'],
          ['Premi shift', '[Perlu pemeriksaan manual] untuk contoh angka final'],
          ['Bonus', '[Perlu pemeriksaan manual] untuk contoh angka final'],
          ['Vacation pay dan holiday pay', '[Perlu pemeriksaan manual] untuk contoh angka final'],
          ['Idle time normal dan abnormal', '[Perlu pemeriksaan manual] untuk idle time abnormal'],
          ['Fringe benefits', '[Perlu pemeriksaan manual] untuk rincian'],
          ['Basic rate dan wage plans', 'Lengkap'],
          ['Straight Piecework Plan', 'Lengkap'],
          ['One-Hundred-Percent Bonus Plan', 'Lengkap'],
          ['Group Bonus Plan', 'Lengkap'],
          ['Daftar gaji berbasis standar produksi', 'Lengkap'],
          ['Jurnal tenaga kerja', 'Lengkap'],
          ['Latihan dan ringkasan', 'Lengkap'],
        ],
        caption: 'Checklist Kelengkapan TM 10',
      },
    ],
  },

  11: {
    id: 'akbi-tm-11',
    tm: 11,
    title: 'Biaya Overhead Pabrik: Perencanaan, Dibebankan, dan Aktual',
    ref: 'CU 11 · IMN 10 · Tutor AKBI TM 12 FOH',
    source: 'SILABI-Akuntansi Biaya-2026.doc; TUTOR AKBI TM 12 FOH.pdf; AKBI_Master_Content_Bagian_1_TM1-TM11.md',
    phase: 'pra_uas',
    manualCheckCount: 2,
    intro:
      'Overhead pabrik adalah biaya produksi selain direct materials dan direct labor. Overhead tetap product cost, tetapi tidak praktis ditelusuri langsung ke produk. Karena overhead aktual sering baru diketahui di akhir periode, perusahaan memakai predetermined overhead rate untuk membebankan overhead.',
    objectives: [
      'Menjelaskan overhead pabrik.',
      'Menjelaskan planned FOH, actual FOH, dan applied FOH.',
      'Menghitung predetermined overhead rate.',
      'Menghitung overhead dibebankan.',
      'Membedakan underapplied dan overapplied overhead.',
      'Menjelaskan penutupan selisih overhead.',
      'Menjelaskan departementalisasi overhead.',
      'Membedakan plantwide rate dan departmental rate.',
      'Menjelaskan pengantar ABC, ABM, dan cost hierarchy.',
    ],
    blocks: [
      { kind: 'h2', text: 'Tujuan Pembelajaran' },
      {
        kind: 'p',
        text:
          'Mahasiswa mampu menjelaskan overhead pabrik, planned FOH, actual FOH, applied FOH, predetermined overhead rate, underapplied, overapplied, penutupan selisih overhead, departementalisasi overhead, plantwide rate, departmental rate, serta pengantar ABC, ABM, dan cost hierarchy.',
      },
      { kind: 'h2', text: 'Gambaran Umum' },
      {
        kind: 'p',
        text:
          'Overhead pabrik adalah biaya produksi selain direct materials dan direct labor. Overhead tetap product cost, tetapi tidak praktis ditelusuri langsung ke produk. Karena overhead aktual sering baru diketahui di akhir periode, perusahaan memakai predetermined overhead rate untuk membebankan overhead.',
      },
      {
        kind: 'callout',
        variant: 'info',
        title: 'Catatan Sinkronisasi Urutan Materi',
        text:
          'Dalam struktur website, materi labor cost ditempatkan pada TM 10 sesuai daftar AKM201 TM8-14. Jika di kelas dosen membahas labor pada pertemuan yang disebut TM 11, gunakan materi TM 10 sebagai rujukan utama labor cost, lalu lanjutkan TM 11 untuk overhead pabrik.',
      },
      { kind: 'h2', text: 'Alur Belajar Cepat Batch 9' },
      {
        kind: 'table',
        headers: ['Langkah', 'Fokus Belajar', 'Output Praktik'],
        rows: [
          ['1', 'Pisahkan biaya produksi langsung dan tidak langsung', 'Menentukan DM, DL, dan FOH tanpa mencampur period cost'],
          ['2', 'Susun anggaran FOH', 'Mengelompokkan FOH variabel, FOH tetap, dan kapasitas yang dipakai sebagai denominator'],
          ['3', 'Pilih dasar pembebanan', 'Menentukan unit, BBB, BTKL, JTKL, jam mesin, atau driver lain yang paling representatif'],
          ['4', 'Hitung tarif BOP', 'Predetermined FOH rate berdasarkan taksiran FOH dan taksiran aktivitas'],
          ['5', 'Bebankan FOH ke produksi', 'Applied FOH = tarif × aktivitas aktual'],
          ['6', 'Kumpulkan FOH aktual', 'Mencatat biaya bahan tidak langsung, tenaga kerja tidak langsung, depresiasi, utilitas, pajak, asuransi, dan reparasi pabrik'],
          ['7', 'Bandingkan aktual dengan applied', 'Menentukan underapplied atau overapplied FOH'],
          ['8', 'Tutup selisih overhead', 'Membuat jurnal koreksi ke COGS atau alokasi ke WIP, Finished Goods, dan COGS jika diminta'],
        ],
        caption: 'Peta kerja TM 11. Urutan ini mengikuti logika overhead: direncanakan dahulu, dibebankan selama produksi, lalu direkonsiliasi dengan aktual.',
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Inti UAS TM 11',
        text: 'Overhead pabrik tidak dicatat ke produk berdasarkan angka aktual saat biaya terjadi. Dalam normal costing, produk menerima applied FOH berdasarkan tarif. Pada akhir periode, applied FOH dibandingkan dengan actual FOH untuk menentukan selisih underapplied atau overapplied.',
      },
      { kind: 'h2', text: 'Peta Submateri' },
      {
        kind: 'table',
        headers: ['Submateri', 'Pembahasan'],
        rows: [
          ['Overhead pabrik', 'Biaya produksi tidak langsung'],
          ['Planned FOH', 'Overhead direncanakan'],
          ['Actual FOH', 'Overhead aktual'],
          ['Applied FOH', 'Overhead dibebankan'],
          ['Predetermined rate', 'Estimated FOH ÷ estimated base'],
          ['Underapplied', 'Actual > Applied'],
          ['Overapplied', 'Applied > Actual'],
          ['Penutupan selisih overhead', 'Ditutup ke COGS atau dialokasikan sesuai kebijakan'],
          ['Departementalisasi', 'Departemen produksi dan departemen jasa'],
          ['Plantwide vs departmental', 'Satu tarif pabrik vs tarif departemen'],
          ['ABC, ABM, cost hierarchy', 'Pengantar materi lanjut'],
        ],
      },
      { kind: 'h2', text: 'Materi Teori' },
      {
        kind: 'p',
        text:
          'Factory Overhead Control mencatat overhead aktual. Applied Factory Overhead mencatat overhead yang dibebankan. Underapplied overhead terjadi jika actual overhead lebih besar daripada applied overhead. Overapplied overhead terjadi jika applied overhead lebih besar daripada actual overhead.',
      },
      {
        kind: 'p',
        text:
          'Predetermined overhead rate dihitung sebelum periode berjalan. Tarif ini memakai estimasi overhead dan estimasi dasar pembebanan. Dasar pembebanan dapat berupa jam tenaga kerja langsung, biaya tenaga kerja langsung, jam mesin, unit produksi, atau dasar lain yang relevan dengan penyebab overhead.',
      },
      {
        kind: 'p',
        text:
          'Overhead dibebankan dihitung dengan mengalikan tarif overhead dengan dasar pembebanan aktual. Pada akhir periode, overhead dibebankan dibandingkan dengan overhead aktual. Selisihnya menunjukkan overhead lebih dibebankan atau kurang dibebankan.',
      },
      {
        kind: 'p',
        text:
          'Departementalisasi overhead membebankan overhead berdasarkan departemen. Departemen produksi mengolah produk langsung. Departemen jasa mendukung departemen produksi, seperti pemeliharaan, gudang, listrik, kantin pabrik, atau fungsi pendukung lain.',
      },
      {
        kind: 'p',
        text:
          'Plantwide rate memakai satu tarif untuk seluruh pabrik. Departmental rate memakai tarif berbeda untuk setiap departemen. Departmental rate lebih rinci dan dapat mengurangi distorsi biaya jika produk memakai departemen secara berbeda.',
      },
      {
        kind: 'p',
        text:
          'TM 11 juga menjadi jembatan menuju TM 12 dan TM 13. TM 12 memperinci overhead melalui departementalisasi. TM 13 memperinci pembebanan overhead melalui Activity Based Costing, Activity Based Management, dan cost hierarchy.',
      },
      { kind: 'h2', text: 'Materi Praktik' },
      {
        kind: 'ol',
        items: [
          'Identifikasi biaya yang termasuk overhead pabrik.',
          'Tentukan estimasi overhead pabrik.',
          'Tentukan estimasi dasar pembebanan.',
          'Hitung predetermined overhead rate.',
          'Ambil dasar pembebanan aktual dari data soal.',
          'Hitung overhead dibebankan.',
          'Bandingkan overhead aktual dengan overhead dibebankan.',
          'Tentukan underapplied atau overapplied overhead.',
          'Buat jurnal overhead aktual, overhead dibebankan, dan penutupan selisih jika diminta.',
          'Jika soal memakai departementalisasi, pisahkan departemen produksi dan departemen jasa.',
        ],
      },
      { kind: 'h2', text: 'Format Cost dan Rumus' },
      {
        kind: 'table',
        headers: ['Keterangan', 'Jumlah'],
        rows: [
          ['Estimasi overhead pabrik', 'Data dari soal'],
          ['Estimasi dasar pembebanan', 'Data dari soal'],
          ['Tarif overhead', 'Estimasi overhead ÷ estimasi dasar'],
          ['Dasar pembebanan aktual', 'Data dari soal'],
          ['Overhead dibebankan', 'Tarif overhead × dasar aktual'],
          ['Overhead aktual', 'Data dari soal'],
          ['Selisih overhead', 'Overhead aktual - overhead dibebankan'],
          ['Keterangan', 'Overapplied atau underapplied berdasarkan hasil selisih'],
        ],
        caption: 'Format perhitungan overhead pabrik.',
      },
      { kind: 'formula', text: 'Predetermined overhead rate = Estimated factory overhead ÷ Estimated allocation base', note: 'Menghitung tarif overhead ditentukan di muka' },
      { kind: 'formula', text: 'Applied overhead = Predetermined overhead rate × Actual allocation base', note: 'Menghitung overhead dibebankan' },
      { kind: 'formula', text: 'Selisih overhead = Actual overhead - Applied overhead', note: 'Menentukan underapplied atau overapplied' },
      { kind: 'formula', text: 'Jika Actual overhead > Applied overhead, terjadi underapplied overhead', note: 'Overhead kurang dibebankan' },
      { kind: 'formula', text: 'Jika Actual overhead < Applied overhead, terjadi overapplied overhead', note: 'Overhead lebih dibebankan' },
      { kind: 'h3', text: 'Actual FOH dan Applied FOH' },
      {
        kind: 'table',
        headers: ['Jenis Overhead', 'Akun', 'Makna'],
        rows: [
          ['Actual FOH', 'Factory Overhead Control', 'Biaya overhead yang benar-benar terjadi'],
          ['Applied FOH', 'Applied Factory Overhead', 'Overhead yang dibebankan ke produksi dengan tarif'],
          ['Underapplied overhead', 'Selisih jika actual > applied', 'Overhead kurang dibebankan'],
          ['Overapplied overhead', 'Selisih jika applied > actual', 'Overhead lebih dibebankan'],
        ],
      },
      { kind: 'h3', text: 'Alokasi Departemen Jasa' },
      {
        kind: 'table',
        headers: ['Departemen Jasa', 'Total Overhead', 'Dasar Alokasi', 'Departemen Penerima', 'Alokasi'],
        rows: [
          ['Pemeliharaan', 'Data dari soal', 'Jam pemeliharaan', 'Produksi A', 'Diisi berdasarkan data soal'],
          ['Gudang', 'Data dari soal', 'Jumlah permintaan bahan', 'Produksi B', 'Diisi berdasarkan data soal'],
        ],
        caption: 'Format alokasi departemen jasa tanpa angka final karena data harus mengikuti soal.',
      },
      warningManual('Metode langsung, bertahap, atau resiprokal jika tersedia di modul perlu dicek manual pada sumber TM 12. Untuk TM 11 bagian ini hanya pengantar.'),
      { kind: 'h3', text: 'Penutupan Selisih Overhead' },
      {
        kind: 'table',
        headers: ['Kondisi', 'Debit', 'Kredit'],
        rows: [
          ['Underapplied langsung ke COGS', 'Cost of Goods Sold', 'Factory Overhead Control'],
          ['Overapplied langsung ke COGS', 'Factory Overhead Control', 'Cost of Goods Sold'],
        ],
      },
      {
        kind: 'table',
        headers: ['Tahap', 'Debit', 'Kredit'],
        rows: [
          ['Tutup applied ke control', 'Applied Factory Overhead', 'Factory Overhead Control'],
          ['Underapplied', 'Cost of Goods Sold', 'Factory Overhead Control'],
          ['Overapplied', 'Factory Overhead Control', 'Cost of Goods Sold'],
        ],
        caption: 'Pola penutupan jika memakai Applied Factory Overhead.',
      },
      warningManual('Jika modul memakai Factory Overhead Summary atau akun lain, format jurnal perlu disesuaikan dengan sumber asli.'),
      {
        kind: 'example',
        title: 'Format Latihan Overhead Pabrik',
        blocks: [
          warningManual('Angka resmi E11-1 belum tersedia utuh. Gunakan data soal resmi jika tersedia.'),
          {
            kind: 'table',
            headers: ['Komponen', 'Data'],
            rows: [
              ['Estimated FOH', 'Data dari soal'],
              ['Estimated base', 'Data dari soal'],
              ['Actual base', 'Data dari soal'],
              ['Actual FOH', 'Data dari soal'],
            ],
          },
          {
            kind: 'ol',
            items: [
              'Hitung predetermined overhead rate.',
              'Hitung applied overhead.',
              'Bandingkan actual overhead dengan applied overhead.',
              'Tentukan underapplied atau overapplied overhead.',
              'Buat jurnal overhead aktual jika diminta.',
              'Buat jurnal overhead dibebankan jika diminta.',
              'Buat jurnal penutupan selisih jika diminta.',
            ],
          },
        ],
      },
      { kind: 'h2', text: 'Skedul dan Jurnal Overhead Pabrik' },
      {
        kind: 'p',
        text:
          'Overhead perlu ditampilkan dalam skedul agar mahasiswa dapat melihat hubungan antara estimasi overhead, tarif overhead, overhead dibebankan, overhead aktual, dan selisih akhir periode. Skedul ini menjadi jembatan antara perhitungan tarif dan jurnal akuntansi biaya.',
      },
      {
        kind: 'table',
        headers: ['Tahap', 'Data yang Dibutuhkan', 'Hasil'],
        rows: [
          ['Perencanaan overhead', 'Estimated factory overhead dan estimated allocation base', 'Predetermined overhead rate'],
          ['Pembebanan overhead', 'Predetermined rate dan actual allocation base', 'Applied factory overhead'],
          ['Pencatatan overhead aktual', 'Biaya overhead sesungguhnya', 'Factory Overhead Control'],
          ['Perbandingan akhir periode', 'Actual FOH dan Applied FOH', 'Underapplied atau overapplied overhead'],
          ['Penutupan selisih', 'Kebijakan langsung ke COGS atau prorata', 'Jurnal penyesuaian akhir periode'],
        ],
        caption: 'Skedul kerja overhead pabrik dari rencana sampai penutupan selisih.',
      },
      {
        kind: 'journal',
        caption: 'Jurnal overhead aktual, contoh biaya overhead dibayar atau masih terutang.',
        lines: [
          { account: 'Factory Overhead Control', debit: 'Data dari soal' },
          { account: 'Cash, Accounts Payable, Accumulated Depreciation, atau akun terkait', credit: 'Data dari soal', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal overhead dibebankan ke produksi.',
        lines: [
          { account: 'Work in Process', debit: 'Applied overhead' },
          { account: 'Applied Factory Overhead', credit: 'Applied overhead', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal penutupan overhead kurang dibebankan jika langsung ditutup ke COGS.',
        lines: [
          { account: 'Cost of Goods Sold', debit: 'Selisih underapplied' },
          { account: 'Factory Overhead Control', credit: 'Selisih underapplied', isCredit: true },
        ],
      },
      {
        kind: 'journal',
        caption: 'Jurnal penutupan overhead lebih dibebankan jika langsung ditutup ke COGS.',
        lines: [
          { account: 'Factory Overhead Control', debit: 'Selisih overapplied' },
          { account: 'Cost of Goods Sold', credit: 'Selisih overapplied', isCredit: true },
        ],
      },
      {
        kind: 'table',
        headers: ['Metode Penutupan Selisih', 'Kapan Dipakai', 'Dampak'],
        rows: [
          ['Langsung ke Cost of Goods Sold', 'Selisih tidak material', 'COGS langsung dinaikkan atau diturunkan'],
          ['Prorata ke WIP, Finished Goods, dan COGS', 'Selisih material dan persediaan signifikan', 'Selisih dibagi ke akun yang masih mengandung overhead'],
          ['Dibiarkan sementara untuk analisis', 'Untuk evaluasi tarif dan pengendalian internal', 'Tidak boleh menggantikan penyesuaian laporan akhir jika diperlukan'],
        ],
      },
      {
        kind: 'callout',
        variant: 'key',
        title: 'Logika Underapplied dan Overapplied',
        text: 'Underapplied berarti produk menerima overhead terlalu kecil karena actual FOH lebih besar daripada applied FOH. Overapplied berarti produk menerima overhead terlalu besar karena applied FOH lebih besar daripada actual FOH. Jangan membaca dari sisi nama akun saja; selalu bandingkan actual dengan applied.',
      },
      { kind: 'h2', text: 'Kesalahan Umum' },
      {
        kind: 'table',
        headers: ['Kesalahan', 'Koreksi'],
        rows: [
          ['Overhead dianggap bukan product cost', 'Overhead adalah biaya produksi'],
          ['Biaya pemasaran masuk overhead', 'Pemasaran adalah period cost'],
          ['Predetermined rate dihitung dari actual overhead', 'Gunakan estimated overhead'],
          ['Applied dan actual disamakan', 'Applied berdasarkan tarif, actual biaya nyata'],
          ['Underapplied dan overapplied tertukar', 'Actual > Applied berarti underapplied'],
          ['Plantwide dipakai untuk produk sangat berbeda', 'Pertimbangkan departmental rate'],
          ['Placeholder angka diisi tanpa sumber', 'Gunakan data soal atau beri label [Perlu pemeriksaan manual]'],
        ],
      },
      {
        kind: 'table-fill',
        spec: {
          title: 'Workspace TM 11 - Planned, Applied, dan Actual FOH',
          instruction: 'Gunakan data terlihat: FOH dianggarkan Rp240.000.000; kapasitas normal 60.000 jam mesin; jam mesin aktual 58.000 jam; FOH aktual Rp236.000.000.',
          currency: 'Rp',
          headers: ['Komponen', 'Jawaban'],
          rows: [
            { id: 'tm11-rate', label: 'Predetermined overhead rate per jam mesin', cells: [{ id: 'tm11-foh-rate', answer: 4000, placeholder: '240.000.000 ÷ 60.000' }] },
            { id: 'tm11-applied', label: 'FOH dibebankan ke produksi', cells: [{ id: 'tm11-foh-applied', answer: 232000000, placeholder: '58.000 × 4.000' }] },
            { id: 'tm11-variance', label: 'Selisih overhead', cells: [{ id: 'tm11-foh-variance', answer: 4000000, placeholder: '236.000.000 - 232.000.000' }] },
            { id: 'tm11-underapplied', label: 'Nilai underapplied overhead', cells: [{ id: 'tm11-foh-underapplied', answer: 4000000, placeholder: 'Actual lebih besar dari applied' }] },
          ],
        },
      },
      {
        kind: 'journal-builder',
        spec: {
          title: 'Workspace TM 11 - Jurnal Applied dan Underapplied FOH',
          instruction: 'Gunakan hasil perhitungan: FOH applied Rp232.000.000 dan underapplied overhead Rp4.000.000. Selisih ditutup langsung ke COGS.',
          currency: 'Rp',
          accountChoices: ['Work in Process', 'Applied Factory Overhead', 'Cost of Goods Sold', 'Factory Overhead Control'],
          lines: [
            { id: 'tm11-journal-applied-wip', group: 'Membebankan overhead ke produksi', account: 'Work in Process', debit: 232000000 },
            { id: 'tm11-journal-applied-credit', group: 'Membebankan overhead ke produksi', account: 'Applied Factory Overhead', credit: 232000000 },
            { id: 'tm11-journal-close-cogs', group: 'Menutup underapplied overhead', account: 'Cost of Goods Sold', debit: 4000000 },
            { id: 'tm11-journal-close-foh', group: 'Menutup underapplied overhead', account: 'Factory Overhead Control', credit: 4000000 },
          ],
        },
      },
      {
        kind: 'solution-reveal',
        title: 'Pembahasan Workspace TM 11',
        prompt: 'Buka setelah menghitung tarif, applied FOH, dan selisih overhead.',
        blocks: [
          { kind: 'p', text: 'Predetermined overhead rate dihitung dari FOH dianggarkan dibagi kapasitas normal: Rp240.000.000 ÷ 60.000 jam mesin = Rp4.000 per jam mesin.' },
          { kind: 'p', text: 'Applied FOH dihitung dari tarif dikali dasar aktual: 58.000 jam × Rp4.000 = Rp232.000.000. FOH aktual Rp236.000.000 lebih besar daripada applied FOH, sehingga terjadi underapplied overhead Rp4.000.000.' },
          { kind: 'p', text: 'Jika selisih tidak material dan ditutup langsung ke COGS, jurnal penutupnya adalah debit Cost of Goods Sold Rp4.000.000 dan kredit Factory Overhead Control Rp4.000.000.' },
        ],
      },
      {
        kind: 'example',
        title: 'Latihan Pemahaman TM 11',
        blocks: [
          {
            kind: 'ol',
            items: [
              'Jelaskan perbedaan planned FOH, actual FOH, dan applied FOH.',
              'Hitung predetermined overhead rate jika tersedia estimated FOH dan estimated base.',
              'Hitung applied overhead jika tersedia actual base.',
              'Tentukan apakah overhead lebih dibebankan atau kurang dibebankan.',
              'Buat jurnal overhead aktual.',
              'Buat jurnal overhead dibebankan.',
              'Buat jurnal penutupan selisih overhead.',
              'Jelaskan kapan plantwide rate kurang tepat digunakan.',
              'Jelaskan perbedaan plantwide rate dan departmental rate.',
            ],
          },
        ],
      },

      { kind: 'h2', text: 'Pengayaan Praktik — Predetermined FOH Rate, Kapasitas, dan PT Notesshimi' },
      { kind: 'callout', variant: 'info', title: 'Catatan kelas tambahan', text: 'Blok ini adalah pengayaan praktik tentang perencanaan, pengendalian, dan penentuan tarif BOP agar mahasiswa dapat membedakan planned FOH, actual FOH, applied FOH, serta selisih overapplied atau underapplied.' },
      { kind: 'h3', text: 'Jenis Kapasitas untuk Menyusun Anggaran BOP' },
      { kind: 'table', headers: ['Jenis kapasitas', 'Makna', 'Risiko jika dipakai tanpa analisis'], rows: [
        ['Teoritis', 'Kapasitas penuh pada kecepatan maksimum tanpa hambatan.', 'Terlalu ideal; tarif bisa terlalu rendah karena denominator terlalu besar.'],
        ['Praktis', 'Kapasitas teoritis dikurangi hambatan internal normal seperti pemeliharaan dan hari libur.', 'Lebih realistis, tetapi tetap perlu pembaruan jika kondisi operasi berubah.'],
        ['Normal', 'Kapasitas praktis yang mempertimbangkan tren penjualan jangka panjang.', 'Cocok menstabilkan tarif, tetapi bisa bias jika tren pasar berubah drastis.'],
        ['Sesungguhnya', 'Kapasitas yang diperkirakan dapat dicapai pada tahun mendatang.', 'Tarif dapat fluktuatif jika volume aktual tidak stabil.'],
      ], caption: 'Kapasitas adalah denominator tarif BOP. Kesalahan memilih kapasitas dapat menggeser cost produk secara material.' },
      { kind: 'h3', text: 'Dasar Pembebanan BOP' },
      { kind: 'table', headers: ['Dasar pembebanan', 'Rumus tarif', 'Cocok digunakan jika'], rows: [
        ['Satuan fisik/unit', 'Taksiran BOP ÷ taksiran unit produksi', 'Produk homogen dan konsumsi overhead relatif seragam.'],
        ['Biaya bahan baku langsung (BBB)', 'Taksiran BOP ÷ taksiran BBB', 'Overhead bergerak searah dengan nilai bahan.'],
        ['Biaya tenaga kerja langsung (BTKL)', 'Taksiran BOP ÷ taksiran BTKL', 'Tenaga kerja langsung masih menjadi pemicu overhead yang kuat.'],
        ['Jam tenaga kerja langsung (JTKL)', 'Taksiran BOP ÷ taksiran JTKL', 'Overhead lebih terkait waktu kerja daripada nilai upah.'],
        ['Jam mesin', 'Taksiran BOP ÷ taksiran jam mesin', 'Produksi padat mesin dan konsumsi overhead mengikuti penggunaan mesin.'],
      ], caption: 'Pemilihan dasar pembebanan harus mengikuti driver yang paling merepresentasikan konsumsi overhead.' },
      { kind: 'table-fill', spec: {
        title: 'Worksheet Dasar Tarif BOP — Catatan Kelas',
        instruction: 'Hitung tarif BOP dari lima dasar pembebanan. Untuk BBB dan BTKL, isi jawaban dalam format persentase.',
        feedback: 'Cek kembali dasar pembebanan. Unit, JTKL, dan jam mesin menghasilkan rupiah per dasar; BBB dan BTKL menghasilkan persentase.',
        currency: 'Rp',
        headers: ['Dasar', 'Data', 'Tarif'],
        rows: [
          { id: 'bop-unit', label: 'Satuan fisik', cells: [{ id: 'bop-unit-data', readonly: true, display: 'Rp2.000.000 ÷ 4.000 unit' }, { id: 'bop-unit-answer', answer: 500, feedback: 'Tarif unit = taksiran BOP ÷ taksiran unit produksi.' }] },
          { id: 'bop-bbb', label: 'BBB', cells: [{ id: 'bop-bbb-data', readonly: true, display: 'Rp2.000.000 ÷ Rp4.000.000' }, { id: 'bop-bbb-answer', answer: '50%', answerType: 'percent', feedback: 'Rp2.000.000 ÷ Rp4.000.000 = 0,5 atau 50% dari BBB.' }] },
          { id: 'bop-btkl', label: 'BTKL', cells: [{ id: 'bop-btkl-data', readonly: true, display: 'Rp2.000.000 ÷ Rp5.000.000' }, { id: 'bop-btkl-answer', answer: '40%', answerType: 'percent', feedback: 'Rp2.000.000 ÷ Rp5.000.000 = 0,4 atau 40% dari BTKL.' }] },
          { id: 'bop-jtkl', label: 'JTKL', cells: [{ id: 'bop-jtkl-data', readonly: true, display: 'Rp2.000.000 ÷ 2.000 jam' }, { id: 'bop-jtkl-answer', answer: 1000, feedback: 'Tarif JTKL = taksiran BOP ÷ taksiran jam tenaga kerja langsung.' }] },
          { id: 'bop-jam-mesin', label: 'Jam mesin', cells: [{ id: 'bop-jam-mesin-data', readonly: true, display: 'Rp2.000.000 ÷ 10.000 jam mesin' }, { id: 'bop-jam-mesin-answer', answer: 200, feedback: 'Tarif jam mesin = taksiran BOP ÷ taksiran jam mesin.' }] },
        ],
      } },
      { kind: 'h3', text: 'Kasus PT Notesshimi — Tarif BOP Variabel dan Tetap' },
      { kind: 'table', headers: ['Komponen', 'Nilai'], rows: [
        ['Kapasitas normal', '80.000 jam mesin'],
        ['Anggaran BOP variabel', 'Rp5.800.000'],
        ['Anggaran BOP tetap', 'Rp5.400.000'],
        ['Jam mesin aktual', '75.000 jam'],
        ['BOP aktual total', 'Rp10.700.000'],
        ['BOP aktual variabel', 'Rp5.300.000'],
        ['BOP aktual tetap', 'Rp5.400.000'],
      ], caption: 'Data PT Notesshimi dari catatan kelas. Angka dipakai sebagai latihan tambahan BOP planned/applied/actual.' },
      { kind: 'table-fill', spec: {
        title: 'PT Notesshimi — Applied FOH dan Selisih',
        instruction: 'Hitung tarif, applied FOH, dan selisih overhead. Gunakan tanda status underapplied/overapplied sesuai perbandingan applied dengan actual.',
        feedback: 'Applied lebih kecil dari actual berarti underapplied; applied lebih besar dari actual berarti overapplied. Full costing memakai tarif total, variable costing hanya tarif variabel.',
        currency: 'Rp',
        headers: ['Output', 'Jawaban'],
        rows: [
          { id: 'note-var-rate', label: 'Tarif BOP variabel per jam mesin', cells: [{ id: 'note-var-rate-a', answer: 72.5, tolerance: 0.01, feedback: 'Tarif variabel = Rp5.800.000 ÷ 80.000 jam mesin.' }] },
          { id: 'note-fix-rate', label: 'Tarif BOP tetap per jam mesin', cells: [{ id: 'note-fix-rate-a', answer: 67.5, tolerance: 0.01, feedback: 'Tarif tetap = Rp5.400.000 ÷ 80.000 jam mesin.' }] },
          { id: 'note-total-rate', label: 'Tarif BOP total per jam mesin', cells: [{ id: 'note-total-rate-a', answer: 140, feedback: 'Tarif total = tarif variabel Rp72,5 + tarif tetap Rp67,5.' }] },
          { id: 'note-full-applied', label: 'Applied FOH full costing', cells: [{ id: 'note-full-applied-a', answer: 10500000, feedback: 'Full costing applied FOH = tarif total Rp140 × 75.000 jam.' }] },
          { id: 'note-variable-applied', label: 'Applied FOH variable costing', cells: [{ id: 'note-variable-applied-a', answer: 5437500, feedback: 'Variable costing applied FOH = tarif variabel Rp72,5 × 75.000 jam.' }] },
          { id: 'note-total-variance', label: 'Selisih total FOH', cells: [{ id: 'note-total-variance-a', answer: 200000, feedback: 'Selisih total = BOP aktual Rp10.700.000 − applied Rp10.500.000.' }, { id: 'note-total-variance-status', answer: 'underapplied', feedback: 'Karena actual lebih besar daripada applied, statusnya underapplied.' }] },
          { id: 'note-var-variance', label: 'Selisih BOP variabel', cells: [{ id: 'note-var-variance-a', answer: 137500, feedback: 'Selisih variabel = applied Rp5.437.500 − actual variabel Rp5.300.000.' }, { id: 'note-var-variance-status', answer: 'overapplied', feedback: 'Karena applied variabel lebih besar daripada actual variabel, statusnya overapplied.' }] },
        ],
      } },
      { kind: 'journal-builder', spec: {
        title: 'PT Notesshimi — Jurnal Applied FOH',
        instruction: 'Susun jurnal BOP applied. Full costing memakai tarif total; variable costing memakai tarif variabel saja.',
        feedback: 'Akun Barang Dalam Proses–BOP didebit ketika overhead dibebankan ke produk; BOP Applied dikredit sebesar overhead yang dibebankan.',
        currency: 'Rp',
        accountChoices: ['Barang Dalam Proses–BOP', 'BOP Applied', 'BOP Aktual', 'Selisih BOP'],
        lines: [
          { id: 'note-full-dr', group: 'Full costing applied FOH', account: 'Barang Dalam Proses–BOP', debit: 10500000, feedback: 'Full costing mendebit Barang Dalam Proses–BOP sebesar tarif total × jam aktual.' },
          { id: 'note-full-cr', group: 'Full costing applied FOH', account: 'BOP Applied', credit: 10500000, feedback: 'BOP Applied dikredit sebesar overhead yang dibebankan.' },
          { id: 'note-var-dr', group: 'Variable costing applied FOH', account: 'Barang Dalam Proses–BOP', debit: 5437500, feedback: 'Variable costing hanya memakai tarif BOP variabel × jam aktual.' },
          { id: 'note-var-cr', group: 'Variable costing applied FOH', account: 'BOP Applied', credit: 5437500, feedback: 'Kredit BOP Applied mengikuti jumlah overhead variabel yang dibebankan.' },
        ],
      } },
      { kind: 'callout', variant: 'key', title: 'Rule selisih overhead', text: 'Applied < actual berarti underapplied. Applied > actual berarti overapplied. Full costing membebankan BOP variabel dan tetap; variable costing hanya membebankan BOP variabel.' },
      { kind: 'h2', text: 'Mini Lab Batch 9 — PT Gama Overhead Control' },
      { kind: 'p', text: 'PT Gama memakai normal costing dan membebankan overhead berdasarkan jam mesin. Data anggaran dan aktual dipakai untuk menunjukkan hubungan planned FOH, applied FOH, actual FOH, dan closing variance.' },
      { kind: 'table', headers: ['Data', 'Nilai'], rows: [
        ['Estimated factory overhead', 'Rp360.000.000'],
        ['Estimated machine hours', '90.000 jam'],
        ['Actual machine hours', '86.000 jam'],
        ['Actual factory overhead', 'Rp352.500.000'],
        ['Dasar pembebanan', 'Jam mesin'],
      ], caption: 'Data PT Gama untuk latihan overhead pabrik.' },
      { kind: 'table-fill', spec: {
        title: 'PT Gama — Predetermined Rate, Applied FOH, dan Variance',
        instruction: 'Lengkapi angka utama overhead. Gunakan tarif overhead yang ditentukan di muka berdasarkan estimasi awal periode.',
        feedback: 'Tarif dihitung dari estimated FOH, bukan actual FOH. Applied FOH memakai actual machine hours. Selisih dihitung dari actual FOH dibanding applied FOH.',
        currency: 'Rp',
        headers: ['Output', 'Jawaban'],
        rows: [
          { id: 'gama-rate', label: 'Predetermined FOH rate per jam mesin', cells: [{ id: 'gama-rate-a', answer: 4000, feedback: 'Rp360.000.000 ÷ 90.000 jam = Rp4.000 per jam mesin.' }] },
          { id: 'gama-applied', label: 'Applied FOH', cells: [{ id: 'gama-applied-a', answer: 344000000, feedback: 'Applied FOH = Rp4.000 × 86.000 jam.' }] },
          { id: 'gama-variance', label: 'Selisih FOH', cells: [{ id: 'gama-variance-a', answer: 8500000, feedback: 'Selisih = actual FOH Rp352.500.000 − applied FOH Rp344.000.000.' }] },
          { id: 'gama-status', label: 'Status selisih', cells: [{ id: 'gama-status-a', answer: 'underapplied', feedback: 'Actual lebih besar daripada applied, sehingga overhead kurang dibebankan.' }] },
        ],
      } },
      { kind: 'journal-builder', spec: {
        title: 'PT Gama — Jurnal Actual, Applied, dan Closing FOH',
        instruction: 'Susun jurnal ringkas untuk mengakui actual FOH, membebankan FOH ke produksi, dan menutup underapplied FOH langsung ke COGS.',
        feedback: 'Actual FOH dicatat di Factory Overhead Control. Applied FOH dibebankan ke Work in Process. Underapplied ditutup dengan mendebit COGS dan mengkredit FOH Control.',
        currency: 'Rp',
        accountChoices: ['Factory Overhead Control', 'Work in Process', 'Applied Factory Overhead', 'Accounts Payable/Cash/Accumulated Depreciation', 'Cost of Goods Sold'],
        lines: [
          { id: 'gama-actual-dr', group: 'Mencatat actual FOH', account: 'Factory Overhead Control', debit: 352500000, feedback: 'FOH aktual didebit ke Factory Overhead Control.' },
          { id: 'gama-actual-cr', group: 'Mencatat actual FOH', account: 'Accounts Payable/Cash/Accumulated Depreciation', credit: 352500000, feedback: 'Kredit mengikuti sumber overhead aktual, misalnya kas, utang, atau akumulasi depresiasi.' },
          { id: 'gama-applied-dr', group: 'Membebankan FOH ke produksi', account: 'Work in Process', debit: 344000000, feedback: 'Applied FOH menambah biaya produksi dalam WIP.' },
          { id: 'gama-applied-cr', group: 'Membebankan FOH ke produksi', account: 'Applied Factory Overhead', credit: 344000000, feedback: 'Applied Factory Overhead dikredit sebesar overhead dibebankan.' },
          { id: 'gama-close-dr', group: 'Menutup underapplied FOH', account: 'Cost of Goods Sold', debit: 8500000, feedback: 'Underapplied FOH menambah COGS jika langsung ditutup ke COGS.' },
          { id: 'gama-close-cr', group: 'Menutup underapplied FOH', account: 'Factory Overhead Control', credit: 8500000, feedback: 'FOH Control dikredit untuk menutup saldo underapplied.' },
        ],
      } },
      { kind: 'interactive-match', spec: {
        title: 'Cocokkan Komponen FOH dengan Perlakuan Akuntansinya',
        instruction: 'Pasangkan istilah overhead dengan perlakuan yang tepat.',
        choices: ['Actual FOH', 'Applied FOH', 'Underapplied FOH', 'Overapplied FOH', 'Allocation base'],
        pairs: [
          { id: 'gama-match-actual', prompt: 'Biaya overhead yang benar-benar terjadi dan dikumpulkan di FOH Control.', answer: 'Actual FOH' },
          { id: 'gama-match-applied', prompt: 'Overhead yang dibebankan ke produk dengan tarif ditentukan di muka.', answer: 'Applied FOH' },
          { id: 'gama-match-under', prompt: 'Kondisi ketika actual FOH lebih besar daripada applied FOH.', answer: 'Underapplied FOH' },
          { id: 'gama-match-over', prompt: 'Kondisi ketika applied FOH lebih besar daripada actual FOH.', answer: 'Overapplied FOH' },
          { id: 'gama-match-base', prompt: 'Dasar kegiatan yang dipakai untuk membebankan overhead, misalnya jam mesin.', answer: 'Allocation base' },
        ],
        feedback: 'Kunci TM 11 adalah tidak menyamakan actual FOH dengan applied FOH. Actual FOH dikumpulkan; applied FOH dibebankan ke produk.',
      } },
      { kind: 'callout', variant: 'warning', title: 'Trap UAS Batch 9', text: 'Jangan menghitung tarif overhead dengan actual FOH. Tarif dihitung dari estimated FOH dan estimated base. Actual FOH baru dipakai pada akhir periode untuk menentukan underapplied atau overapplied overhead.' },
      { kind: 'h2', text: 'Ringkasan' },
      {
        kind: 'p',
        text:
          'TM 11 membahas overhead pabrik dari rencana, aktual, pembebanan, selisih, dan departementalisasi. Overhead tetap menjadi product cost, tetapi pembebanannya memerlukan tarif karena tidak mudah ditelusuri langsung ke produk. Predetermined overhead rate membantu perusahaan membebankan overhead sebelum seluruh overhead aktual diketahui.',
      },
      {
        kind: 'p',
        text:
          'Selisih antara overhead aktual dan overhead dibebankan menghasilkan underapplied atau overapplied overhead. TM 11 juga memberi pengantar plantwide rate, departmental rate, ABC, ABM, dan cost hierarchy sebagai transisi ke TM 12 dan TM 13.',
      },
      { kind: 'h2', text: 'Checklist Kelengkapan' },
      {
        kind: 'table',
        headers: ['Komponen', 'Status'],
        rows: [
          ['Planned, actual, applied overhead', 'Lengkap'],
          ['Predetermined overhead rate', 'Lengkap'],
          ['Underapplied dan overapplied', 'Lengkap'],
          ['Penutupan selisih overhead', 'Lengkap'],
          ['Departementalisasi overhead', 'Lengkap sebagai pengantar'],
          ['Plantwide dan departmental rate', 'Lengkap'],
          ['ABC, ABM, cost hierarchy', 'Pengantar'],
          ['E11-1 dan varians overhead rinci', '[Perlu pemeriksaan manual]'],
          ['Placeholder angka', 'Sudah diganti dengan Data dari soal atau [Perlu pemeriksaan manual]'],
        ],
        caption: 'Checklist Kelengkapan TM 11',
      },
    ],
  },
};


// Batch 14 UX polish: navigasi baca dan checkpoint TM 8-11.
applyAkbiReadingUxPolish(AKBI_TM8_TM11_READINGS[8], {
  tm: 8,
  phase: 'pra_uas',
  focus: 'joint product, by-product, split-off point, separable cost, NRV, dan weighted average allocation',
  theory: 'Bisa membedakan main product, joint product, co-product, by-product, joint cost, dan separable cost.',
  formula: 'Bisa menghitung alokasi joint cost dengan unit production, average cost, NRV, dan weighted average.',
  example: 'Bisa mengikuti alokasi joint cost sampai cost per unit setiap produk gabungan.',
  practice: 'Bisa mengisi tabel NRV dan weighted average allocation dari data split-off.',
  trap: 'Tidak mengalokasikan joint cost ke by-product bila by-product diperlakukan sebagai hasil sampingan bernilai kecil.',
  sourceAlignment: 'RPS TM 8, Tutor AKBI TM 8 Joint Cost, Carter Ch. 8, dan Batch 6.',
  nextAction: 'Setelah TM 8, lanjut ke TM 9 karena pengendalian bahan baku menjadi dasar biaya produksi langsung.',
});

applyAkbiReadingUxPolish(AKBI_TM8_TM11_READINGS[9], {
  tm: 9,
  phase: 'pra_uas',
  focus: 'materials control, pembelian bahan, pemakaian bahan, EOQ/KPE, reorder point, dan jurnal bahan',
  theory: 'Bisa membedakan bahan langsung, bahan tidak langsung, dokumen pembelian, dan dokumen pemakaian bahan.',
  formula: 'Bisa menghitung pembelian bersih, bahan tersedia, bahan dipakai, EOQ/KPE, dan reorder point.',
  example: 'Bisa membaca materials control report dari saldo awal sampai bahan langsung dan tidak langsung dipakai.',
  practice: 'Bisa menyusun jurnal pemakaian bahan ke WIP dan FOH Control.',
  trap: 'Tidak memasukkan bahan tidak langsung ke WIP sebagai direct material.',
  sourceAlignment: 'RPS TM 9, Tutor AKBI TM 9 Materials, dan Batch 7.',
  nextAction: 'Setelah TM 9, lanjut ke TM 10 untuk mengendalikan biaya tenaga kerja langsung dan tenaga kerja tidak langsung.',
});

applyAkbiReadingUxPolish(AKBI_TM8_TM11_READINGS[10], {
  tm: 10,
  phase: 'pra_uas',
  focus: 'labor classification, payroll, regular wage, overtime premium, labor time ticket, dan labor cost distribution',
  theory: 'Bisa membedakan direct labor, indirect labor, fungsi produksi, pemasaran, dan administrasi.',
  formula: 'Bisa menghitung regular wage, overtime premium, gross payroll, WIP labor, dan FOH labor.',
  example: 'Bisa membaca kasus payroll dan memisahkan biaya tenaga kerja ke WIP dan FOH Control.',
  practice: 'Bisa menyusun labor cost distribution dan jurnal Factory Payroll.',
  trap: 'Tidak otomatis memasukkan seluruh lembur ke direct labor; premium lembur umum dapat masuk FOH.',
  sourceAlignment: 'RPS TM 10, Tutor AKBI Biaya Tenaga Kerja, dan Batch 8.',
  nextAction: 'Setelah TM 10, lanjut ke TM 11 karena overhead mencakup biaya produksi tidak langsung, termasuk indirect labor.',
});

applyAkbiReadingUxPolish(AKBI_TM8_TM11_READINGS[11], {
  tm: 11,
  phase: 'pra_uas',
  focus: 'planned FOH, actual FOH, applied FOH, predetermined overhead rate, dan under/overapplied overhead',
  theory: 'Bisa menjelaskan mengapa FOH perlu dibebankan dengan tarif dan mengapa actual FOH berbeda dari applied FOH.',
  formula: 'Bisa menghitung predetermined FOH rate, applied FOH, dan selisih underapplied/overapplied.',
  example: 'Bisa membaca kasus overhead dari anggaran, jam aktual, applied FOH, actual FOH, sampai closing variance.',
  practice: 'Bisa menyusun jurnal actual FOH, applied FOH, dan penutupan selisih ke COGS.',
  trap: 'Tidak menghitung tarif overhead dengan actual FOH periode berjalan.',
  sourceAlignment: 'RPS TM 11, Tutor AKBI TM 12 FOH, dan Batch 9.',
  nextAction: 'Setelah TM 11, lanjut ke TM 12 untuk membebankan overhead per departemen, bukan hanya plantwide rate.',
});

export default AKBI_TM8_TM11_READINGS;
