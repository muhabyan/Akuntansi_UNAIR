// src/data/pjk2/pjk2PracticeCases.ts
// 14 Studi Kasus Riil Komprehensif Perpajakan II (PJK202)
// Berdasarkan Standar UU HPP No. 7/2021, PP 58/2023, PMK 168/2023, PMK 66/2023, & PMK 172/2023
import type { ContentBlock } from '../../types';

// TM 1
export const CASE_EXPENSE_DEDUCTIBILITY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Evaluasi Biaya 3M (Deductible vs Non-Deductible Expense) di PT Semen Perkasa',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dalam laporan laba rugi komersial tahun 2026, PT Semen Perkasa mencatatkan beberapa pos beban:\n1. Beban jamuan makan malam relasi bisnis sebesar Rp 150.000.000 (tidak dibuatkan Daftar Nominatif).\n2. Sumbangan bencana alam gempa bumi yang disalurkan melalui Badan Nasional Penanggulangan Bencana (BNPB) sebesar Rp 200.000.000 dengan bukti transfer resmi.\n3. Premi asuransi kebakaran pabrik sebesar Rp 80.000.000.\n4. Sanksi administrasi bunga Surat Tagihan Pajak (STP) PPh Badan sebesar Rp 30.000.000.\n5. Pembagian dividen kepada pemegang saham sebesar Rp 500.000.000 yang dibukukan sebagai beban operasional.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Tentukan status fiskal masing-masing pos (Deductible Expense Pasal 6 atau Non-Deductible Expense Pasal 9 UU PPh) dan hitung total koreksi fiskal positif yang harus dilakukan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Beban Jamuan Makan Relasi (Rp 150 Jt)**: **Non-Deductible Expense (Koreksi Fiskal Positif)**. Sesuai PMK No. 02/PMK.03/2010, biaya promosi/entertainment wajib melampirkan Daftar Nominatif; tanpa daftar tersebut, biaya tidak boleh dikurangkan.',
            '**2. Sumbangan Bencana BNPB (Rp 200 Jt)**: **Deductible Expense (Boleh Dikurangkan)**. Sesuai Pasal 6 ayat (1) huruf i UU PPh dan PP No. 93/2010, sumbangan penanggulangan bencana nasional melalui lembaga resmi berhak menjadi pengurang penghasilan bruto.',
            '**3. Premi Asuransi Kebakaran Pabrik (Rp 80 Jt)**: **Deductible Expense (Boleh Dikurangkan)**. Merupakan biaya 3M (Mendapatkan, Menagih, Memelihara penghasilan) untuk mengamankan aset produktif perusahaan (Pasal 6 ayat (1) huruf a).',
            '**4. Sanksi Administrasi STP Pajak (Rp 30 Jt)**: **Non-Deductible Expense (Koreksi Fiskal Positif)**. Berdasarkan Pasal 9 ayat (1) huruf k UU PPh, sanksi administrasi perpajakan (bunga, denda, kenaikan) mutlak tidak boleh dikurangkan.',
            '**5. Pembagian Dividen (Rp 500 Jt)**: **Non-Deductible Expense (Koreksi Fiskal Positif)**. Berdasarkan Pasal 9 ayat (1) huruf a UU PPh, dividen adalah pembagian laba, bukan beban operasional.',
            '**Total Koreksi Fiskal Positif**: Rp 150 Jt + Rp 30 Jt + Rp 500 Jt = **Rp 680.000.000** (meningkatkan Penghasilan Kena Pajak).'
          ]
        }
      ]
    }
  ]
};

// TM 2
export const CASE_INVENTORY_VALUATION_FISCAL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Penilaian Persediaan Fiskal (FIFO vs Average) & Larangan LIFO di PT Mayora Jaya',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Mayora Jaya menggunakan metode LIFO (Last-In, First-Out) dalam pembukuan internal untuk menghitung persediaan barang dagang biskuit karena sedang terjadi inflasi harga gandum. Data tahun 2026: Persediaan Awal = 1.000 unit @ Rp 10.000. Pembelian: 4.000 unit @ Rp 15.000. Penjualan selama setahun: 3.500 unit dengan harga jual Rp 25.000 per unit.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung HPP dan Nilai Persediaan Akhir menurut: (1) Metode LIFO internal perusahaan, (2) Metode FIFO sesuai ketentuan Pasal 10 ayat (6) UU PPh, dan (3) Tentukan nilai koreksi fiskal atas HPP tersebut!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Metode LIFO (Komersial)**:\n- Penjualan 3.500 unit diambil dari pembelian terakhir: 3.500 unit @ Rp 15.000 = **HPP LIFO Rp 52.500.000**.\n- Persediaan Akhir = (1.000 unit @ Rp 10.000) + (500 unit @ Rp 15.000) = 10.000.000 + 7.500.000 = **Rp 17.500.000**.',
            '**2. Metode FIFO (Ketentuan Fiskal UU PPh)**:\n- Penjualan 3.500 unit diambil dari awal: (1.000 unit @ Rp 10.000) + (2.500 unit @ Rp 15.000) = 10.000.000 + 37.500.000 = **HPP FIFO Rp 47.500.000**.\n- Persediaan Akhir = Sisa 1.500 unit @ Rp 15.000 = **Rp 22.500.000**.',
            '**3. Koreksi Fiskal atas HPP**:\n- Pasal 10 ayat (6) UU PPh HANYA membolehkan metode **Rata-Rata (Average)** atau **FIFO**; metode LIFO dilarang keras secara fiskal.\n- HPP komersial terlalu tinggi Rp 5.000.000 (Rp 52,5 Jt - Rp 47,5 Jt).\n- Dilakukan **Koreksi Fiskal Positif atas HPP sebesar Rp 5.000.000**, yang menaikkan laba kena pajak sebesar Rp 5.000.000.'
          ]
        }
      ]
    }
  ]
};

// TM 3
export const CASE_TRANSFER_PRICING_ALP: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Pengujian Prinsip Kewajaran Transfer Pricing (ALP) Sesuai PMK 172/2023',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Otomotif Nusantara (Indonesia) mengekspor 1.000 unit komponen mesin kepada anak usahanya di Singapura (Singa Ltd) dengan harga transfer USD 50 per unit. Pada saat yang sama, PT Otomotif Nusantara menjual komponen yang identik kepada pihak ketiga independen di Malaysia (Malaya Corp) dengan volume dan syarat transaksi yang setara seharga USD 80 per unit. Biaya produksi per unit adalah USD 40.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Apakah terdapat indikasi praktik transfer pricing tidak wajar?, (2) Terapkan metode transfer pricing yang paling tepat menurut PMK 172/2023 (CUP, RPM, CPM, TNMM, atau PSM), dan (3) Hitung penyesuaian penghasilan kena pajak (Primary Adjustment) oleh Ditjen Pajak!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Indikasi Transfer Pricing**: Terdapat transaksi hubungan istimewa (parent-subsidiary) dengan harga transfer USD 50 yang jauh lebih rendah daripada harga pasar wajar kepada pihak ketiga independen USD 80, bertujuan menggeser laba kena pajak dari Indonesia (tarif 22%) ke Singapura (tarif 17%).',
            '**2. Penentuan Metode Terbaik (The Most Appropriate Method)**: Menggunakan **Comparable Uncontrolled Price (CUP) Method** karena terdapat transaksi pembanding independen yang identik (karakteristik produk mesin sama persis dan kondisi kontrak setara).',
            '**3. Penyesuaian Laba Fiskal (Primary Adjustment)**:\n- Harga Pasar Wajar (Arms Length Price) = 1.000 unit × USD 80 = USD 80.000.\n- Nilai Transaksi Hubungan Istimewa yang Dibukukan = 1.000 unit × USD 50 = USD 50.000.\n- Ditjen Pajak melakukan **Koreksi Fiskal Positif Peredaran Usaha sebesar USD 30.000** (ditambah sanksi bunga Pasal 13 KUP dan potensi Secondary Adjustment sebagai dividen terselubung).'
          ]
        }
      ]
    }
  ]
};

// TM 4
export const CASE_DEPRECIATION_REVALUATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Penyusutan Fiskal Aset Tetap Kelompok 2 & Revaluasi Aset Tetap PT Semen Prima',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Semen Prima membeli mesin operasional pabrik pada tanggal 10 April 2026 seharga Rp 800.000.000. Sesuai PMK No. 72/PMK.03/2023, mesin tersebut masuk dalam Harta Berwujud **Kelompok 2** (Masa manfaat fiskal 8 tahun, tarif saldo menurun 25% atau garis lurus 12,5%). Perusahaan memilih metode Saldo Menurun Ganda (Declining Balance).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Beban penyusutan fiskal tahun 2026 (proporsional bulan perolehan), (2) Beban penyusutan fiskal tahun 2027, dan (3) Nilai sisa buku fiskal per 31 Desember 2027!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penyusutan Fiskal Tahun 2026 (April - Desember = 9 Bulan)**:\n- Tarif Saldo Menurun Kelompok 2 = 25% per tahun.\n- Penyusutan 2026 = $\\frac{9}{12} \\times 25\\% \\times Rp 800.000.000 = \\mathbf{Rp 150.000.000}$.\n- Nilai Sisa Buku per 31 Des 2026 = Rp 800 Jt - Rp 150 Jt = **Rp 650.000.000**.',
            '**2. Penyusutan Fiskal Tahun 2027 (Penuh 12 Bulan)**:\n- Penyusutan 2027 = $25\\% \\times \\text{Nilai Sisa Buku Awal 2027} = 25\\% \\times Rp 650.000.000 = \\mathbf{Rp 162.500.000}$.',
            '**3. Nilai Sisa Buku Fiskal per 31 Desember 2027**:\n- Nilai Sisa Buku Akhir 2027 = Rp 650.000.000 - Rp 162.500.000 = **Rp 487.500.000**.'
          ]
        }
      ]
    }
  ]
};

// TM 5
export const CASE_WITHHOLDING_PPH22_23_UMKM: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Pemungutan PPh 22 Impor, Pemotongan PPh 23 Jasa, & PPh Final UMKM 0,5%',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Selama bulan Mei 2026, PT Cemerlang (memiliki API dan ber-NPWP) melakukan 3 transaksi:\n1. Mengimpor bahan baku dengan nilai CIF USD 100.000 (Kurs KMK USD 1 = Rp 16.000). Bea Masuk 10% dari CIF.\n2. Membayar jasa manajemen konsultasi bisnis kepada PT Solusi Konsultan sebesar Rp 100.000.000.\n3. Membayar jasa katering makan siang karyawan kepada CV Berkah Rasa (Wajib Pajak UMKM dengan Surat Keterangan PP 55/2022) sebesar Rp 50.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung pemotongan/pemungutan PPh untuk ketiga transaksi tersebut dan jelaskan status kredit pajaknya bagi PT Cemerlang!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. PPh Pasal 22 Impor (Memiliki API Tarif 2,5%)**:\n- Nilai CIF = USD 100.000 × Rp 16.000 = Rp 1.600.000.000.\n- Bea Masuk (10%) = 10% × Rp 1.600.000.000 = Rp 160.000.000.\n- Nilai Impor (DPP) = CIF + Bea Masuk = Rp 1.760.000.000.\n- **PPh Pasal 22 Terutang** = 2,5% × Rp 1.760.000.000 = **Rp 44.000.000** (Dapat dikreditkan di SPT Tahunan PPh Badan PT Cemerlang).',
            '**2. PPh Pasal 23 Jasa Manajemen Konsultasi (Tarif 2%)**:\n- PT Cemerlang memotong PPh 23 = 2% × Rp 100.000.000 = **Rp 2.000.000**.\n- Kas yang dibayarkan ke PT Solusi Konsultan = Rp 98.000.000. PT Cemerlang menerbitkan Bukti Potong PPh 23 Unifikasi.',
            '**3. PPh Final PP 55/2022 UMKM Katering (Tarif 0,5%)**:\n- Karena CV Berkah Rasa menyerahkan fotokopi Surat Keterangan (Suket) PP 55/2022, transaksi TIDAK dipotong PPh 23 jasa (2%), melainkan dipotong PPh Final UMKM: 0,5% × Rp 50.000.000 = **Rp 250.000**.'
          ]
        }
      ]
    }
  ]
};

// TM 6
export const CASE_FINAL_TAX_CONSTRUCTION_RENT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Pemotongan PPh Final Pasal 4 ayat (2) Jasa Konstruksi & Sewa Gedung',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Bangun Megah (PKP) membayar sewa gedung kantor selama 2 tahun kepada Tuan Hartono sebesar Rp 300.000.000 pada tanggal 1 Agustus 2026. Selain itu, PT Bangun Megah membayar tagihan kontrak pekerjaan konstruksi renovasi pabrik sebesar Rp 1.000.000.000 kepada PT Wika Adhi yang memiliki Sertifikat Badan Usaha (SBU) Kualifikasi Menengah (PP No. 9 Tahun 2022).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung pemotongan PPh Final Pasal 4 ayat (2) untuk kedua transaksi tersebut dan jelaskan apakah PPh Final dapat dikreditkan pada akhir tahun!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Sewa Gedung Kantor (Tarif PPh Final 10%)**:\n- DPP Sewa = Rp 300.000.000.\n- **PPh Final Pasal 4 ayat (2) Dipotong** = 10% × Rp 300.000.000 = **Rp 30.000.000**.\n- Jumlah kas bersih yang dibayarkan ke Tuan Hartono = Rp 270.000.000.',
            '**2. Jasa Pelaksanaan Konstruksi Kualifikasi Menengah (Tarif 2,65%)**:\n- Sesuai PP No. 9 Tahun 2022, tarif pelaksanaan konstruksi dengan kualifikasi menengah adalah **2,65%**.\n- **PPh Final Pasal 4 ayat (2) Dipotong** = 2,65% × Rp 1.000.000.000 = **Rp 26.500.000**.',
            '**3. Status Kredit Pajak**: Pajak yang bersifat **FINAL MUTLAK TIDAK DAPAT DIKREDITKAN** terhadap PPh Badan terutang di akhir tahun. Penghasilan yang telah dikenai PPh Final dikeluarkan (dikoreksi negatif) dari penghasilan kena pajak di Lampiran I SPT 1771.'
          ]
        }
      ]
    }
  ]
};

// TM 7
export const CASE_PPH24_ARTICLE_31E: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Kredit Pajak Luar Negeri PPh Pasal 24 & Fasilitas Tarif Pasal 31E PT Kalbe Farma',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Nusantara Farma memperoleh Penghasilan Kena Pajak (PKP) tahun 2026 sebesar Rp 10.000.000.000. Peredaran bruto (omzet) total setahun adalah Rp 30.000.000.000 (30 Miliar). Di dalam PKP tersebut terdapat penghasilan dari cabang di Filipina sebesar Rp 2.000.000.000 yang telah dipotong pajak di Filipina sebesar 25% (Rp 500.000.000). Tarif PPh Badan domestik di Indonesia = 22%.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Fasilitas pengurangan tarif Pasal 31E UU PPh, (2) Total PPh Badan Terutang, dan (3) Batas maksimum kredit pajak luar negeri PPh Pasal 24 yang boleh dikreditkan di Indonesia!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Fasilitas Tarif Pasal 31E (Omzet antara 4,8 M s/d 50 M)**:\n- Bagian PKP yang memperoleh fasilitas diskon tarif 50%:\n$PKP_{Fasilitas} = \\frac{Rp 4,8 \\text{ Miliar}}{Rp 30 \\text{ Miliar}} \\times Rp 10.000.000.000 = \\mathbf{Rp 1.600.000.000}$.\n- Bagian PKP Non-Fasilitas: Rp 10.000.000.000 - Rp 1.600.000.000 = **Rp 8.400.000.000**.',
            '**2. Perhitungan PPh Badan Terutang**:\n- PPh Fasilitas = $50\\% \\times 22\\% \\times Rp 1.600.000.000 = 11\\% \\times 1,6 \\text{ M} = Rp 176.000.000$.\n- PPh Non-Fasilitas = $22\\% \\times Rp 8.400.000.000 = Rp 1.848.000.000$.\n- **Total PPh Terutang** = Rp 176 Jt + Rp 1.848 Jt = **Rp 2.024.000.000**.',
            '**3. Maksimum Kredit Pajak PPh Pasal 24 (Ordinary Credit)**:\n- Batas Maksimum = $\\frac{\\text{Penghasilan LN}}{\\text{Total PKP}} \\times \\text{Total PPh Terutang} = \\frac{Rp 2.000.000.000}{Rp 10.000.000.000} \\times Rp 2.024.000.000 = \\mathbf{Rp 404.800.000}$.\n- Pajak riil yang dibayar di Filipina = Rp 500.000.000.\n- **Kredit Pajak PPh 24 yang Boleh Dikurangkan**: Pilih yang **TERKECIL** antara pajak riil dibayar (500 Jt) vs batas maksimum teoritis (404,8 Jt) $\\rightarrow$ **Rp 404.800.000**. Selisih Rp 95,2 Jt tidak boleh dikreditkan dan tidak boleh dibebankan.'
          ]
        }
      ]
    }
  ]
};

// TM 8
export const CASE_UTS_PJK2_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Integrasi Pemotongan/Pemungutan Pajak & Rekonsiliasi Fiskal Pra-UTS',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dalam soal ujian UTS, disajikan data laba komersial PT Makmur Abadi sebesar Rp 2 Miliar. Akuntan menemukan koreksi: Beban natura paket sembako karyawan yang bukan di daerah tertentu Rp 80 Jt (Deductible PMK 66/2023 jika memenuhi kriteria), rugi cabang usaha luar negeri Rp 100 Jt, dan penghasilan dividen dari PT Anak (kepemilikan 30%) sebesar Rp 250 Jt yang belum dieliminasi.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun rekonsiliasi fiskal dan tentukan dasar hukum perlakuan dividen antar-perusahaan sesuai UU Cipta Kerja / UU HPP!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dividen Antar-Badan Usaha (Pasal 4 ayat (3) huruf f UU PPh)**: Dividen yang diterima oleh Wajib Pajak Badan dalam negeri dari perseroan terbatas lain di Indonesia berstatus **BUKAN OBJEK PAJAK (Non-Taxable Income)** tanpa syarat persentase kepemilikan saham minimum. Dilakukan **Koreksi Fiskal Negatif sebesar Rp 250.000.000**.',
            '**2. Kerugian Usaha Cabang Luar Negeri**: Berdasarkan Pasal 24 UU PPh, kerugian yang diderita di luar negeri **TIDAK BOLEH DIGABUNGKAN** untuk mengurangi penghasilan dalam negeri (Koreksi Fiskal Positif Rp 100.000.000).',
            '**3. Evaluasi Natura PMK 66/2023**: Makanan dan minuman bagi seluruh pegawai di tempat kerja adalah deductible (beban boleh dikurangkan), sehingga tidak perlu dikoreksi positif.'
          ]
        }
      ]
    }
  ]
};

// TM 9
export const CASE_NATURA_TER_CONCEPT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Objek Pajak Natura Kenikmatan (PMK 66/2023) & Konsep TER PP 58/2023',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Bintang Sejahtera memberikan fasilitas kepada karyawannya selama tahun 2026:\n1. Kupon makan siang bagi seluruh karyawan kantor senilai Rp 2.000.000 per orang per bulan.\n2. Mobil dinas jabatan sedan beserta sopir untuk Direktur Utama senilai Rp 800.000.000 (biaya operasional bensin dan servis Rp 15.000.000/bulan).\n3. Parsel hari raya Idul Fitri senilai Rp 1.500.000 per orang per tahun bagi seluruh staf.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis perlakuan fiskal ketiga fasilitas tersebut menurut PMK No. 66/2023 bagi perusahaan (Deductible/Non-Deductible) dan bagi karyawan (Objek PPh 21 / Bukan Objek PPh 21)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kupon Makan Siang Karyawan (Rp 2 Jt/bulan)**:\n- *Bagi Perusahaan*: **Deductible Expense 100%** (Boleh dibebankan).\n- *Bagi Karyawan*: **Bukan Objek PPh Pasal 21** karena makanan/minuman yang disediakan untuk seluruh pegawai di tempat kerja dikecualikan dari objek pajak tanpa batas nilai.',
            '**2. Mobil Dinas Jabatan Direktur Utama**:\n- *Bagi Perusahaan*: Biaya penyusutan mobil sedan dan biaya bensin/servis diakui sebagai **Deductible Expense 100%** jika terkait dengan tugas kedinasan (aturan pembatasan 50% KEP-220/2002 telah diselaraskan oleh PMK 66/2023).\n- *Bagi Direktur Utama*: Merupakan **Objek Pajak Kenikmatan (PPh 21)** atas pemanfaatan aset non-tunai yang dinilai berdasarkan biaya riil pemeliharaan dan amortisasi yang diterima direktur.',
            '**3. Parsel Bingkisan Hari Raya (Rp 1,5 Jt/tahun)**:\n- *Bagi Perusahaan*: **Deductible Expense 100%**.\n- *Bagi Karyawan*: **Bukan Objek PPh Pasal 21** karena bingkisan hari raya keagamaan bagi seluruh pegawai dikecualikan dari objek PPh tanpa batasan nilai tertentu.'
          ]
        }
      ]
    }
  ]
};

// TM 10
export const CASE_PPH21_TER_DECEMBER_CALC: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Kalkulasi Komprehensif PPh 21 Pegawai Tetap (TER Jan-Nov vs Rekalkulasi Des)',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Tuan Bambang (status menikah dengan 1 anak kandung / K/1, PTKP = Rp 63.000.000) bekerja sebagai pegawai tetap di PT Citra Abadi. Gaji bruto Tuan Bambang dari Januari s/d November 2026 adalah Rp 10.000.000 per bulan. Pada bulan Desember 2026, Tuan Bambang menerima gaji Rp 10.000.000 ditambah bonus akhir tahun sebesar Rp 20.000.000 (Total bruto Desember = Rp 30.000.000). Berdasarkan PP 58/2023, status K/1 masuk **TER Kategori A**.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Pemotongan PPh 21 per bulan untuk Januari s/d November menggunakan tabel TER Kategori A, (2) Rekalkulasi PPh 21 setahun di bulan Desember menggunakan Tarif Progresif Pasal 17 UU HPP, dan (3) PPh 21 yang dipotong khusus pada bulan Desember 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Pemotongan PPh 21 Januari s/d November (11 Bulan)**:\n- Bruto bulanan = Rp 10.000.000.\n- Tabel TER Kategori A untuk rentang Rp 9.650.001 - Rp 10.050.000 memiliki tarif = **2,0%**.\n- PPh 21 per bulan (Jan - Nov) = 2,0% × Rp 10.000.000 = **Rp 200.000** per bulan.\n- Total PPh 21 disetor Jan - Nov (11 bulan) = 11 × Rp 200.000 = **Rp 2.200.000**.',
            '**2. Rekalkulasi PPh 21 Setahun di Bulan Desember (Tarif Pasal 17)**:\n- Total Penghasilan Bruto Setahun = (11 × 10 Jt) + 30 Jt (Desember) = **Rp 140.000.000**.\n- Pengurang Biaya Jabatan (5% max Rp 500.000/bln = Rp 6.000.000/thn):\nBiaya Jabatan = 5% × Rp 140.000.000 = Rp 7.000.000 $\\rightarrow$ Dibatasi maksimum **Rp 6.000.000**.\n- Penghasilan Neto Setahun = Rp 140.000.000 - Rp 6.000.000 = **Rp 134.000.000**.\n- PTKP K/1 = **Rp 63.000.000**.\n- Penghasilan Kena Pajak (PKP) Setahun = Rp 134.000.000 - Rp 63.000.000 = **Rp 71.000.000**.\n- PPh 21 Terutang Setahun (Tarif Pasal 17 UU HPP):\n  * Lapisan I (5% × Rp 60.000.000) = Rp 3.000.000\n  * Lapisan II (15% × Rp 11.000.000) = Rp 1.650.000\n  * **Total PPh 21 Terutang Setahun** = Rp 3.000.000 + Rp 1.650.000 = **Rp 4.650.000**.',
            '**3. PPh 21 yang Dipotong Khusus Bulan Desember 2026**:\nPPh 21 Desember = PPh 21 Setahun - PPh 21 Jan-Nov yang Sudah Dipotong\nPPh 21 Desember = Rp 4.650.000 - Rp 2.200.000 = **Rp 2.450.000**.'
          ]
        }
      ]
    }
  ]
};

// TM 11
export const CASE_CORPORATE_TAX_RETURN_1771: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Rekonsiliasi Fiskal Komprehensif & Penyusunan SPT Tahunan 1771 PT Surya Madistrindo',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Surya Madistrindo menyajikan Laba Bersih Komersial sebelum pajak sebesar Rp 5.000.000.000 untuk tahun pajak 2026. Temuan audit internal:\n1. Pendapatan bunga deposito bank Rp 100.000.000 (telah dipotong PPh Final 20%).\n2. Beban sumbangan HUT Kemerdekaan RI ke RT/RW Rp 25.000.000.\n3. Beban penyusutan komersial Rp 400.000.000, sedangkan penyusutan menurut aturan fiskal adalah Rp 480.000.000.\n4. Kredit pajak tahun berjalan: PPh 22 = Rp 50.000.000; PPh 23 = Rp 70.000.000; Angsuran PPh 25 = Rp 600.000.000. Omzet perusahaan Rp 80 Miliar (Tarif normal 22%).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung: (1) Penghasilan Kena Pajak (PKP) setelah koreksi fiskal positif & negatif, (2) PPh Badan Terutang tahun 2026, dan (3) PPh Kurang Bayar (Pasal 29) atau Lebih Bayar (Pasal 28A)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kertas Kerja Rekonsiliasi Fiskal**:\n- Laba Bersih Komersial Sebelum Pajak = **Rp 5.000.000.000**.\n- **Koreksi Positif**:\n  * Beban sumbangan RT/RW (Pasal 9 ayat 1 huruf g) = +Rp 25.000.000.\n- **Koreksi Negatif**:\n  * Pendapatan Bunga Deposito PPh Final (Pasal 4 ayat 2) = -Rp 100.000.000.\n  * Selisih Penyusutan Fiskal > Komersial (Rp 480 Jt - Rp 400 Jt) = -Rp 80.000.000.\n- **Penghasilan Kena Pajak (PKP)** = 5.000.000.000 + 25.000.000 - 100.000.000 - 80.000.000 = **Rp 4.845.000.000**.',
            '**2. PPh Badan Terutang (Tarif 22%)**:\nKarena omzet > Rp 50 Miliar, berlaku tarif tunggal penuh: 22% × Rp 4.845.000.000 = **Rp 1.065.900.000**.',
            '**3. Perhitungan PPh Pasal 29 (Kurang Bayar)**:\n- Total Kredit Pajak = PPh 22 (50 Jt) + PPh 23 (70 Jt) + PPh 25 (600 Jt) = **Rp 720.000.000**.\n- **PPh Kurang Bayar (Pasal 29)** = PPh Terutang - Kredit Pajak = Rp 1.065.900.000 - Rp 720.000.000 = **Rp 345.900.000** (Wajib disetor ke Kas Negara sebelum lapor SPT 1771).'
          ]
        }
      ]
    }
  ]
};

// TM 12
export const CASE_VAT_PKP_OBJECTS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Penyerahan BKP/JKP, Fasilitas Dibebaskan, & Tarif PPN 11% PT Retail Mart',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Retail Mart (PKP) mencatatkan rincian penjualan selama satu bulan:\n1. Penjualan barang elektronik kulkas dan TV seharga Rp 500.000.000.\n2. Penjualan beras premium dan telur ayam mentah di area supermarket seharga Rp 200.000.000.\n3. Penyerahan jasa perbaikan AC gedung kepada pelanggan seharga Rp 50.000.000.\n4. Ekspor mie instan ke Timor Leste dengan nilai ekspor Rp 300.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Klasifikasikan objek penyerahan dan hitung Pajak Keluaran (PPN Terutang) yang wajib dipungut PT Retail Mart sesuai UU HPP!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penjualan Barang Elektronik (BKP Umum Tarif 11%)**:\nPPN Keluaran = 11% × Rp 500.000.000 = **Rp 55.000.000**.',
            '**2. Penjualan Beras dan Telur Mentah (Barang Kebutuhan Pokok)**:\nSesuai Pasal 4A jo Pasal 16B UU PPN (UU HPP), beras dan telur adalah barang kebutuhan pokok yang sangat dibutuhkan rakyat banyak yang mendapat fasilitas **Dibebaskan dari Pengenaan PPN** $\\rightarrow$ **PPN Rp 0**.',
            '**3. Jasa Perbaikan AC (JKP Dalam Negeri Tarif 11%)**:\nPPN Keluaran = 11% × Rp 50.000.000 = **Rp 5.500.000**.',
            '**4. Ekspor Mie Instan (Ekspor BKP Berwujud Tarif 0%)**:\nSesuai Pasal 7 ayat (2) UU PPN, ekspor BKP berwujud dikenai tarif **0%** $\\rightarrow$ **PPN Rp 0** (Namun Pajak Masukan terkait ekspor tetap dapat dikreditkan/direstitusi).',
            '**Total Pajak Keluaran (PPN Wajib Dipungut)** = Rp 55.000.000 + Rp 5.500.000 = **Rp 60.500.000**.'
          ]
        }
      ]
    }
  ]
};

// TM 13
export const CASE_EFAKTUR_INPUT_CREDIT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Mekanisme e-Faktur & Pengkreditan Pajak Masukan Pasal 9 ayat (8) UU PPN',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Pabrik Tekstil (PKP) pada bulan September 2026 memiliki Pajak Keluaran yang dipungut sebesar Rp 200.000.000. Selama bulan tersebut, perusahaan menerima Faktur Pajak Masukan elektronik:\n1. Pembelian bahan baku benang tenun pabrik = PPN Masukan Rp 120.000.000.\n2. Pembelian mobil sedan untuk Direktur Pemasaran = PPN Masukan Rp 44.000.000.\n3. Pembelian mesin pemotong kain = PPN Masukan Rp 30.000.000.\n4. Biaya perbaikan inventaris yang Faktur Pajaknya cacat (tidak mencantumkan NPWP pembeli) = PPN Masukan Rp 5.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Tentukan Pajak Masukan mana yang Dapat Dikreditkan dan Tidak Dapat Dikreditkan, serta hitung PPN Kurang/Lebih Bayar pada SPT Masa PPN 1111!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Pajak Masukan Benang Tenun (Rp 120 Jt)**: **Dapat Dikreditkan** karena berhubungan langsung dengan kegiatan usaha 3M menghasilkan BKP tekstil.',
            '**2. Pajak Masukan Mobil Sedan Direktur (Rp 44 Jt)**: **Dapat Dikreditkan** sesuai ketentuan UU HPP Pasal 9 ayat (8) huruf c yang telah menghapus larangan pengkreditan sedan sepanjang digunakan untuk kegiatan operasional perusahaan.',
            '**3. Pajak Masukan Mesin Pemotong (Rp 30 Jt)**: **Dapat Dikreditkan** sebagai perolehan barang modal pabrik.',
            '**4. Faktur Pajak Cacat Tanpa NPWP (Rp 5 Jt)**: **TIDAK DAPAT DIKREDITKAN** berdasarkan Pasal 9 ayat (8) huruf f UU PPN karena tidak memenuhi syarat formal faktur pajak lengkap.',
            '**Total Pajak Masukan yang Dapat Dikreditkan** = 120 Jt + 44 Jt + 30 Jt = **Rp 194.000.000**.',
            '**Perhitungan SPT Masa PPN 1111**:\nPPN Kurang Bayar = Pajak Keluaran - Pajak Masukan = Rp 200.000.000 - Rp 194.000.000 = **Rp 6.000.000** (Wajib disetor paling lambat akhir bulan Oktober 2026).'
          ]
        }
      ]
    }
  ]
};

// TM 14
export const CASE_VAT_REFUND_CARBON_TAX: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: Restitusi PPN Pengembalian Pendahuluan Pasal 17C & Pajak Karbon UU HPP',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: PT Eksportir Baja Utama berstatus Wajib Pajak Kriteria Tertentu (Pasal 17C UU KUP) dan PKP Berisiko Rendah. Pada SPT Masa PPN bulan Oktober 2026, akumulasi Pajak Masukan melampaui Pajak Keluaran sehingga terjadi Lebih Bayar sebesar Rp 1.500.000.000 karena mayoritas penjualan adalah ekspor tarif 0%. Di samping itu, unit pembangkit listrik PLTU milik perusahaan menghasilkan emisi karbon 10.000 ton CO2e melampaui batas batas emisi (Cap) yang ditetapkan pemerintah.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Mekanisme dan jangka waktu Pengembalian Pendahuluan Restitusi PPN Pasal 17C KUP, dan (2) Hitung estimasi Pajak Karbon terutang sesuai tarif minimum UU HPP (Rp 30 per kg CO2e)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Pengembalian Pendahuluan Restitusi PPN (Pasal 17C KUP / PMK 209/2021)**:\n- Karena berstatus PKP Berisiko Rendah, PT Eksportir Baja berhak memperoleh **Surat Keputusan Pengembalian Pendahuluan Kelebihan Pajak (SKPPKP)** tanpa melalui pemeriksaan lapangan terlebih dahulu.\n- Jangka waktu penerbitan SKPPKP untuk restitusi PPN dipercepat menjadi paling lambat **1 (satu) bulan** sejak permohonan SPT Masa lengkap diterima (pemeriksaan kepatuhan mendalam baru dilakukan pasca restitusi/post-audit).',
            '**2. Perhitungan Pajak Karbon (UU HPP)**:\n- Emisi berlebih = 10.000 ton CO2e = 10.000 × 1.000 kg = **10.000.000 kg CO2e**.\n- Tarif Pajak Karbon Minimum UU HPP = **Rp 30 per kilogram CO2e** (atau Rp 30.000 per ton CO2e).\n- **Pajak Karbon Terutang** = 10.000.000 kg × Rp 30/kg = **Rp 300.000.000**.\n- Pajak karbon ini dapat dikurangi jika perusahaan membeli Sertifikat Pengurangan Emisi (SPE) dari bursa karbon (Carbon Offsetting).'
          ]
        }
      ]
    }
  ]
};
