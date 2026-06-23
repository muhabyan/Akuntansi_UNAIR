import type { BankSoal } from '../../types';

export const AKM201_BANK_UTS: BankSoal[] = [
  {
    type: 'report',
    scope: 'UTS · TM 1–3',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'UTS-1. Susun laporan Harga Pokok Produksi dan Harga Pokok Penjualan PT Shion secara lengkap.',
    context: 'PT Shion adalah perusahaan manufaktur yang ingin menutup buku periode berjalan. Manajemen meminta laporan biaya yang memisahkan bahan baku langsung, tenaga kerja langsung, overhead pabrik, barang dalam proses, barang jadi, dan harga pokok penjualan.',
    data: [
      'Persediaan bahan baku awal Rp1.300; pembelian bahan baku Rp12.500; persediaan bahan baku akhir Rp1.600.',
      'Tenaga kerja langsung Rp15.200 dan overhead pabrik Rp12.400.',
      'Barang dalam proses awal Rp3.400 dan barang dalam proses akhir Rp3.800.',
      'Barang jadi awal Rp2.400 dan barang jadi akhir Rp2.600.'
    ],
    instructions: [
      'Hitung bahan baku langsung yang digunakan.',
      'Hitung total biaya manufaktur periode berjalan.',
      'Susun laporan Harga Pokok Produksi.',
      'Susun laporan Harga Pokok Penjualan sampai nilai COGS akhir.',
      'Tulis minimal dua kalimat interpretasi tentang perbedaan Harga Pokok Produksi dan Harga Pokok Penjualan.'
    ],
    outputFormat: [
      'Statement of Cost of Goods Manufactured.',
      'Statement of Cost of Goods Sold.',
      'Interpretasi singkat setelah laporan.'
    ],
    rubric: [
      'Ketepatan susunan laporan 30%.',
      'Ketepatan perhitungan bahan, COGM, dan COGS 45%.',
      'Kejelasan interpretasi 15%.',
      'Kerapian format 10%.'
    ],
    answerGuide: 'Bahan baku digunakan = 1.300 + 12.500 - 1.600 = Rp12.200. Total biaya manufaktur = 12.200 + 15.200 + 12.400 = Rp39.800. Harga pokok produksi = 3.400 + 39.800 - 3.800 = Rp39.400. Barang tersedia dijual = 2.400 + 39.400 = Rp41.800. Harga pokok penjualan = 41.800 - 2.600 = Rp39.200. Jawaban harus tampil sebagai laporan, bukan hanya daftar hasil akhir.'
  },
  {
    type: 'calculation',
    scope: 'UTS · TM 2',
    difficulty: 'Menengah',
    estimatedTime: '20–25 menit',
    question: 'UTS-2. Buat worksheet high-low method PT Scodelario dan susun persamaan biaya.',
    context: 'PT Scodelario ingin memisahkan biaya campuran menjadi unsur biaya tetap dan biaya variabel untuk kepentingan perencanaan biaya periode berikutnya.',
    data: [
      'Januari: aktivitas 1.600 unit, total biaya Rp9.650.',
      'Februari: aktivitas 1.900 unit, total biaya Rp11.225.',
      'Maret direncanakan memproduksi 2.100 unit.'
    ],
    instructions: [
      'Pilih titik aktivitas tertinggi dan terendah berdasarkan volume aktivitas.',
      'Hitung biaya variabel per unit.',
      'Hitung biaya tetap.',
      'Susun persamaan biaya total.',
      'Gunakan persamaan tersebut untuk menaksir biaya bulan Maret.'
    ],
    outputFormat: [
      'Tabel high-low berisi perubahan biaya dan perubahan aktivitas.',
      'Persamaan biaya total dalam bentuk Y = a + bX.',
      'Estimasi biaya Maret.'
    ],
    rubric: [
      'Pemilihan titik aktivitas benar 20%.',
      'Perhitungan biaya variabel dan tetap benar 45%.',
      'Persamaan biaya dan estimasi benar 25%.',
      'Penjelasan konsep relevan 10%.'
    ],
    answerGuide: 'Biaya variabel per unit = (11.225 - 9.650) / (1.900 - 1.600) = Rp5,25. Biaya tetap = 11.225 - (5,25 × 1.900) = Rp1.250. Persamaan biaya: Y = 1.250 + 5,25X. Estimasi Maret pada 2.100 unit = 1.250 + (5,25 × 2.100) = Rp12.275.'
  },
  {
    type: 'cost-sheet',
    scope: 'UTS · TM 4',
    difficulty: 'Komprehensif',
    estimatedTime: '30–40 menit',
    question: 'UTS-3. Susun job cost sheet PT Koyomi dan tentukan status Work in Process, Finished Goods, dan Cost of Goods Sold.',
    context: 'PT Koyomi menggunakan job order costing. Pada akhir periode, beberapa job sudah selesai, sebagian masih dalam proses, dan sebagian sudah terjual.',
    data: [
      'Job 201 total cost Rp3.000; Job 202 total cost Rp3.500; Job 203 total cost Rp4.500.',
      'Job 204 total cost Rp1.500; Job 205 total cost Rp1.000.',
      'Job 201, 202, dan 203 sudah selesai diproduksi.',
      'Job 204 dan 205 masih dalam proses.',
      'Hanya Job 201 yang sudah diserahkan kepada pelanggan dan diakui sebagai penjualan.'
    ],
    instructions: [
      'Buat tabel status setiap job.',
      'Hitung ending Work in Process.',
      'Hitung ending Finished Goods.',
      'Hitung Cost of Goods Sold.',
      'Jelaskan mengapa job selesai tetapi belum terjual tidak boleh masuk COGS.'
    ],
    outputFormat: [
      'Tabel job cost sheet: nomor job, cost, status produksi, status penjualan, akun akhir.',
      'Ringkasan WIP, Finished Goods, dan COGS.',
      'Penjelasan konsep satu paragraf.'
    ],
    rubric: [
      'Klasifikasi status job 35%.',
      'Perhitungan akun akhir 40%.',
      'Argumentasi akuntansi biaya 15%.',
      'Format tabel 10%.'
    ],
    answerGuide: 'Ending WIP = Job 204 + Job 205 = Rp2.500. Ending Finished Goods = Job 202 + Job 203 = Rp8.000. COGS = Job 201 = Rp3.000. Job yang selesai tetapi belum dijual tetap berada pada Finished Goods, bukan COGS.'
  },
  {
    type: 'journal',
    scope: 'UTS · TM 3–4',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'UTS-4. Buat jurnal siklus biaya produksi untuk perusahaan job order costing.',
    context: 'Sebuah perusahaan manufaktur mencatat pemakaian bahan, tenaga kerja, overhead, transfer barang selesai, dan pengakuan HPP. Anda diminta menyusun jurnal dasar agar alur biaya terlihat jelas.',
    data: [
      'Bahan baku langsung digunakan Rp18.000 dan bahan tidak langsung digunakan Rp2.500.',
      'Tenaga kerja langsung Rp22.000 dan tenaga kerja tidak langsung Rp4.000.',
      'Overhead pabrik lain-lain yang terjadi Rp7.500.',
      'Overhead dibebankan ke produksi Rp13.000.',
      'Produk selesai ditransfer ke Finished Goods Rp48.000.',
      'Produk dengan cost Rp32.000 telah terjual.'
    ],
    instructions: [
      'Buat jurnal pemakaian bahan baku.',
      'Buat jurnal distribusi tenaga kerja.',
      'Buat jurnal overhead aktual.',
      'Buat jurnal overhead dibebankan.',
      'Buat jurnal transfer produk selesai dan jurnal HPP saat barang terjual.',
      'Tentukan apakah overhead overapplied atau underapplied sebelum penutupan.'
    ],
    outputFormat: [
      'Jurnal umum dengan debit dan kredit.',
      'Ringkasan Factory Overhead Control dan Applied Overhead.',
      'Kesimpulan overapplied/underapplied.'
    ],
    rubric: [
      'Ketepatan akun debit/kredit 45%.',
      'Ketepatan alur WIP-FG-COGS 25%.',
      'Analisis overhead 20%.',
      'Kerapian jurnal 10%.'
    ],
    answerGuide: 'Bahan langsung didebit ke WIP dan bahan tidak langsung ke FOH Control. Tenaga kerja langsung didebit ke WIP dan tenaga kerja tidak langsung ke FOH Control. Overhead aktual didebit ke FOH Control. Overhead dibebankan: Dr WIP, Cr Applied FOH. Transfer selesai: Dr Finished Goods, Cr WIP. Saat terjual: Dr COGS, Cr Finished Goods. Overhead aktual = 2.500 + 4.000 + 7.500 = Rp14.000, applied = Rp13.000, sehingga underapplied Rp1.000.'
  },
  {
    type: 'report',
    scope: 'UTS · TM 5',
    difficulty: 'Komprehensif',
    estimatedTime: '40–50 menit',
    question: 'UTS-5. Susun Cost of Production Report metode weighted average untuk Departemen Pemotongan PT Alexandra.',
    context: 'PT Alexandra memakai process costing. Laporan biaya produksi harus menunjukkan arus unit fisik, equivalent unit, biaya per equivalent unit, dan cost reconciliation.',
    data: [
      'BDP awal 250 unit; unit dimasukkan periode berjalan 1.250 unit.',
      'Unit selesai dan ditransfer 1.000 unit.',
      'BDP akhir memiliki tingkat penyelesaian 50%.',
      'Biaya BDP awal Rp1.000.000 dan biaya ditambahkan periode berjalan Rp6.500.000.',
      'Untuk penyederhanaan, perlakukan biaya sebagai satu kelompok biaya konversi gabungan.'
    ],
    instructions: [
      'Susun quantity schedule.',
      'Hitung unit fisik BDP akhir.',
      'Hitung equivalent unit metode weighted average.',
      'Hitung cost per equivalent unit.',
      'Alokasikan biaya ke unit ditransfer dan BDP akhir.',
      'Rekonsiliasi total biaya yang dipertanggungjawabkan.'
    ],
    outputFormat: [
      'Quantity Data.',
      'Equivalent Units.',
      'Cost per Equivalent Unit.',
      'Cost Assigned and Reconciliation.'
    ],
    rubric: [
      'Quantity schedule 20%.',
      'Equivalent unit 25%.',
      'Cost per EUP 20%.',
      'Cost assignment dan rekonsiliasi 25%.',
      'Format laporan 10%.'
    ],
    answerGuide: 'Unit tersedia = 250 + 1.250 = 1.500. BDP akhir = 1.500 - 1.000 = 500 unit. EUP = 1.000 + (500 × 50%) = 1.250. Total biaya = 1.000.000 + 6.500.000 = Rp7.500.000. Cost per EUP = Rp6.000. Biaya ditransfer = Rp6.000.000. Biaya BDP akhir = Rp1.500.000. Total cost assigned = Rp7.500.000.'
  },
  {
    type: 'report',
    scope: 'UTS · TM 6',
    difficulty: 'Komprehensif',
    estimatedTime: '45–55 menit',
    question: 'UTS-6. Susun Cost of Production Report metode FIFO untuk PT Alicia dengan dua elemen biaya.',
    context: 'PT Alicia ingin membandingkan metode FIFO dengan weighted average. Dalam FIFO, pekerjaan yang sudah diselesaikan pada BDP awal tidak dihitung ulang sebagai pekerjaan periode berjalan.',
    data: [
      'BDP awal 200 unit, bahan 100% selesai dan konversi 40% selesai.',
      'Unit dimulai periode berjalan 1.800 unit.',
      'Unit selesai dan ditransfer 1.500 unit.',
      'BDP akhir 500 unit, bahan 80% selesai dan konversi 60% selesai.',
      'Biaya BDP awal Rp2.000.000.',
      'Biaya bahan ditambahkan Rp4.800.000 dan biaya konversi ditambahkan Rp3.400.000.'
    ],
    instructions: [
      'Buat quantity schedule FIFO.',
      'Pisahkan unit yang menyelesaikan BDP awal, unit started and completed, dan BDP akhir.',
      'Hitung EUP bahan dan EUP konversi hanya untuk pekerjaan periode berjalan.',
      'Hitung cost per EUP bahan dan konversi.',
      'Alokasikan biaya ke completed and transferred serta BDP akhir.',
      'Tutup dengan rekonsiliasi total biaya.'
    ],
    outputFormat: [
      'Quantity Data FIFO.',
      'Equivalent Units: materials dan conversion.',
      'Cost Calculation.',
      'Cost Reconciliation.'
    ],
    rubric: [
      'Pemilahan unit FIFO 25%.',
      'EUP bahan dan konversi 25%.',
      'Cost per EUP 20%.',
      'Rekonsiliasi biaya 20%.',
      'Kerapian format 10%.'
    ],
    answerGuide: 'Started and completed = 1.500 - 200 = 1.300 unit. EUP bahan = BDP awal 0 + started and completed 1.300 + BDP akhir 400 = 1.700. EUP konversi = BDP awal 120 + started and completed 1.300 + BDP akhir 300 = 1.720. Cost per EUP bahan = 4.800.000/1.700 ≈ Rp2.823,53. Cost per EUP konversi = 3.400.000/1.720 ≈ Rp1.976,74. Jawaban harus menunjukkan logika FIFO dan rekonsiliasi; pembulatan boleh dijelaskan.'
  },
  {
    type: 'worksheet',
    scope: 'UTS · TM 5–6',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'UTS-7. Bandingkan equivalent unit metode weighted average dan FIFO dalam satu tabel analitis.',
    context: 'Dosen meminta Anda menjelaskan mengapa angka equivalent unit bisa berbeda antara weighted average dan FIFO meskipun data unit fisiknya sama.',
    data: [
      'BDP awal 300 unit, tingkat penyelesaian bahan 100% dan konversi 30%.',
      'Unit dimulai 1.200 unit; unit selesai 1.100 unit.',
      'BDP akhir 400 unit, tingkat penyelesaian bahan 80% dan konversi 50%.'
    ],
    instructions: [
      'Hitung EUP bahan dan konversi dengan weighted average.',
      'Hitung EUP bahan dan konversi dengan FIFO.',
      'Tulis tabel perbandingan.',
      'Jelaskan mengapa BDP awal diperlakukan berbeda.'
    ],
    outputFormat: [
      'Tabel EUP weighted average.',
      'Tabel EUP FIFO.',
      'Paragraf analisis perbedaan metode.'
    ],
    rubric: [
      'EUP weighted average 30%.',
      'EUP FIFO 35%.',
      'Analisis konsep 25%.',
      'Format 10%.'
    ],
    answerGuide: 'Weighted average: bahan = 1.100 + (400 × 80%) = 1.420; konversi = 1.100 + (400 × 50%) = 1.300. FIFO: started and completed = 1.100 - 300 = 800. Bahan = BDP awal 0 + 800 + 320 = 1.120; konversi = BDP awal 210 + 800 + 200 = 1.210. FIFO hanya menghitung pekerjaan yang dilakukan periode berjalan.'
  },
  {
    type: 'case',
    scope: 'UTS · TM 1',
    difficulty: 'Dasar-Menengah',
    estimatedTime: '20–25 menit',
    question: 'UTS-8. Klasifikasikan biaya produksi dan nonproduksi dalam kasus pabrik kemeja.',
    context: 'Sebuah pabrik kemeja ingin mengelompokkan biaya agar laporan internal dan laporan eksternal tidak salah saji.',
    data: [
      'Upah penjahit.',
      'Gaji kepala gudang bahan baku.',
      'Benang dan kancing yang dapat ditelusuri ke produk.',
      'Gaji bagian pemasaran.',
      'Gaji direktur utama.',
      'Penyusutan mesin jahit.',
      'Listrik pabrik dan listrik kantor administrasi.'
    ],
    instructions: [
      'Klasifikasikan setiap biaya menjadi direct materials, direct labor, factory overhead, selling expense, atau administrative expense.',
      'Beri alasan singkat untuk setiap klasifikasi.',
      'Pisahkan biaya produk dan biaya periode.'
    ],
    outputFormat: [
      'Tabel tiga kolom: item biaya, klasifikasi, alasan.',
      'Ringkasan biaya produk vs biaya periode.'
    ],
    rubric: [
      'Ketepatan klasifikasi 55%.',
      'Alasan klasifikasi 25%.',
      'Pemisahan produk/periode 10%.',
      'Kerapian 10%.'
    ],
    answerGuide: 'Upah penjahit = direct labor. Kepala gudang bahan baku umumnya factory overhead bila mendukung produksi secara tidak langsung. Benang dan kancing yang dapat ditelusuri = direct materials. Gaji pemasaran = selling expense. Gaji direktur utama = administrative expense. Penyusutan mesin jahit dan listrik pabrik = factory overhead. Listrik kantor administrasi = administrative expense.'
  },
  {
    type: 'report',
    scope: 'UTS · TM 7',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'UTS-9. Susun Cost of Quality Report dan analisis prioritas perbaikan kualitas.',
    context: 'PT Liora ingin mengetahui komposisi biaya kualitas agar dapat memutuskan apakah perlu meningkatkan aktivitas pencegahan dan penilaian.',
    data: [
      'Training kualitas Rp4.000.',
      'Inspeksi bahan baku Rp3.500.',
      'Rework produk cacat sebelum dikirim Rp5.500.',
      'Klaim garansi pelanggan Rp7.000.',
      'Desain ulang proses untuk mencegah cacat Rp2.500.',
      'Uji produk akhir Rp3.000.'
    ],
    instructions: [
      'Klasifikasikan biaya ke prevention, appraisal, internal failure, dan external failure.',
      'Hitung total tiap kategori dan total biaya kualitas.',
      'Hitung persentase tiap kategori terhadap total.',
      'Beri rekomendasi perbaikan berbasis data.'
    ],
    outputFormat: [
      'Cost of Quality Report.',
      'Tabel persentase per kategori.',
      'Rekomendasi manajerial satu paragraf.'
    ],
    rubric: [
      'Klasifikasi kategori 35%.',
      'Perhitungan total dan persentase 35%.',
      'Analisis rekomendasi 20%.',
      'Kerapian laporan 10%.'
    ],
    answerGuide: 'Prevention = training 4.000 + desain ulang 2.500 = Rp6.500. Appraisal = inspeksi 3.500 + uji produk akhir 3.000 = Rp6.500. Internal failure = rework Rp5.500. External failure = garansi Rp7.000. Total biaya kualitas Rp25.500. Rekomendasi seharusnya menekankan peningkatan prevention/appraisal untuk menekan failure cost, terutama external failure.'
  },
  {
    type: 'report',
    scope: 'UTS · TM 7',
    difficulty: 'Komprehensif',
    estimatedTime: '35–45 menit',
    question: 'UTS-10. Selesaikan kasus spoiled goods normal dan abnormal dalam process costing.',
    context: 'Departemen produksi menemukan unit rusak pada akhir proses. Manajemen ingin membedakan perlakuan kerugian normal dan abnormal agar biaya produk tidak salah dibebankan.',
    data: [
      'Unit masuk proses 2.000 unit.',
      'Unit baik selesai 1.700 unit.',
      'BDP akhir 200 unit, 60% selesai untuk konversi.',
      'Unit rusak 100 unit terdeteksi pada akhir proses.',
      'Batas normal spoilage adalah 3% dari unit baik selesai.',
      'Biaya periode berjalan: bahan Rp8.000.000 dan konversi Rp6.000.000.',
      'Bahan ditambahkan pada awal proses; konversi terjadi merata.'
    ],
    instructions: [
      'Hitung unit rusak normal dan abnormal.',
      'Hitung equivalent unit bahan dan konversi dengan memperhatikan titik deteksi spoilage.',
      'Hitung cost per EUP.',
      'Tentukan biaya spoilage normal dan abnormal.',
      'Jelaskan perlakuan akuntansi untuk spoilage normal dan abnormal.'
    ],
    outputFormat: [
      'Tabel unit fisik.',
      'Tabel equivalent unit.',
      'Cost assignment untuk good units, ending WIP, normal spoilage, dan abnormal spoilage.',
      'Penjelasan jurnal/perlakuan biaya.'
    ],
    rubric: [
      'Pemisahan normal-abnormal 20%.',
      'Equivalent unit 30%.',
      'Cost assignment 30%.',
      'Penjelasan perlakuan akuntansi 20%.'
    ],
    answerGuide: 'Normal spoilage = 3% × 1.700 = 51 unit; abnormal spoilage = 100 - 51 = 49 unit. Karena spoilage terdeteksi akhir proses, unit rusak mendapat 100% bahan dan 100% konversi. EUP bahan = 1.700 + 200 + 100 = 2.000. EUP konversi = 1.700 + (200 × 60%) + 100 = 1.920. Cost per EUP bahan = Rp4.000; konversi ≈ Rp3.125. Biaya per unit rusak penuh ≈ Rp7.125. Normal spoilage dibebankan ke produk baik, sedangkan abnormal spoilage dilaporkan sebagai kerugian periode.'
  },
  {
    type: 'case',
    scope: 'UTS · TM 3–4',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'UTS-11. Analisis pemilihan sistem akumulasi biaya untuk empat jenis organisasi.',
    context: 'Anda diminta memberi rekomendasi sistem biaya untuk organisasi dengan karakter output berbeda.',
    data: [
      'Kilang minyak.',
      'Kantor pengacara.',
      'Rumah sakit.',
      'Pabrik mie telur.'
    ],
    instructions: [
      'Tentukan apakah tiap organisasi lebih cocok memakai job order costing atau process costing.',
      'Jelaskan cost object utama pada tiap organisasi.',
      'Sebutkan dokumen/laporan biaya yang paling relevan.',
      'Beri alasan berdasarkan homogenitas output dan cara biaya ditelusuri.'
    ],
    outputFormat: [
      'Tabel rekomendasi sistem biaya.',
      'Paragraf argumentasi untuk tiap organisasi.'
    ],
    rubric: [
      'Ketepatan rekomendasi 40%.',
      'Alasan berdasarkan karakter output 35%.',
      'Kelengkapan cost object dan dokumen 15%.',
      'Kerapian 10%.'
    ],
    answerGuide: 'Kilang minyak dan pabrik mie telur lebih cocok process costing karena output homogen dan diproduksi massal. Kantor pengacara lebih cocok job order costing karena setiap kasus/klien berbeda. Rumah sakit dapat memakai job order untuk pasien/layanan tertentu karena treatment bervariasi, meskipun beberapa unit layanan dapat memiliki process-like costing. Jawaban harus menekankan cost object dan heterogenitas output.'
  },
  {
    type: 'journal',
    scope: 'UTS · TM 4–6',
    difficulty: 'Komprehensif',
    estimatedTime: '35–45 menit',
    question: 'UTS-12. Susun paket jurnal dari pemakaian biaya sampai transfer produk dalam sistem process costing.',
    context: 'PT Natsume memproses produk melalui Departemen A dan Departemen B. Anda diminta menulis jurnal dasar yang menunjukkan perpindahan biaya antar departemen.',
    data: [
      'Departemen A menggunakan bahan langsung Rp30.000.000, tenaga kerja langsung Rp18.000.000, dan overhead dibebankan Rp12.000.000.',
      'Biaya produk selesai dari Departemen A yang ditransfer ke Departemen B Rp55.000.000.',
      'Departemen B menambahkan bahan Rp8.000.000, tenaga kerja Rp14.000.000, dan overhead Rp9.000.000.',
      'Produk selesai dari Departemen B ditransfer ke Finished Goods Rp80.000.000.',
      'Produk dengan cost Rp62.000.000 terjual.'
    ],
    instructions: [
      'Buat jurnal biaya masuk Departemen A.',
      'Buat jurnal transfer dari Departemen A ke Departemen B.',
      'Buat jurnal biaya tambahan Departemen B.',
      'Buat jurnal transfer ke Finished Goods.',
      'Buat jurnal COGS saat barang terjual.',
      'Jelaskan perbedaan jurnal process costing dengan job order costing.'
    ],
    outputFormat: [
      'Jurnal umum lengkap.',
      'Alur biaya Departemen A → Departemen B → Finished Goods → COGS.',
      'Penjelasan singkat.'
    ],
    rubric: [
      'Ketepatan jurnal departemen 45%.',
      'Ketepatan transfer biaya 30%.',
      'Penjelasan konsep 15%.',
      'Format 10%.'
    ],
    answerGuide: 'Jurnal biaya Departemen A: Dr WIP-Dept A untuk bahan, tenaga kerja, dan FOH; kredit Materials/Payroll/Applied FOH sesuai sumber. Transfer A ke B: Dr WIP-Dept B Rp55.000.000, Cr WIP-Dept A Rp55.000.000. Tambahan Departemen B didebit ke WIP-Dept B. Transfer selesai: Dr Finished Goods Rp80.000.000, Cr WIP-Dept B Rp80.000.000. Penjualan dari sisi HPP: Dr COGS Rp62.000.000, Cr Finished Goods Rp62.000.000.'
  }
];

export const AKM201_BANK_UAS: BankSoal[] = [
  {
    type: 'report',
    scope: 'UAS · TM 8',
    difficulty: 'Komprehensif',
    estimatedTime: '45–60 menit',
    question: 'UAS-1. Susun empat bentuk laporan laba rugi produk sampingan PT Naranuansa.',
    context: 'PT Naranuansa menghasilkan produk utama dan produk sampingan. Manajemen ingin melihat dampak penyajian pendapatan produk sampingan dalam empat alternatif perlakuan.',
    data: [
      'Persediaan awal 4.950 unit × Rp4.500 = Rp22.275.000.',
      'Jumlah biaya produksi 10.750 unit × Rp4.500 = Rp48.375.000.',
      'Penjualan produk utama 13.350 unit × Rp4.500 = Rp60.075.000.',
      'Pendapatan penjualan produk sampingan Rp25.000.000.',
      'Beban pemasaran dan administrasi Rp4.900.000.',
      'Persediaan akhir 2.350 unit × Rp4.500 = Rp10.575.000.'
    ],
    instructions: [
      'Susun laporan jika pendapatan produk sampingan diperlakukan sebagai pendapatan penjualan.',
      'Susun laporan jika diperlakukan sebagai pendapatan lain-lain.',
      'Susun laporan jika diperlakukan sebagai pengurang harga pokok penjualan produk utama.',
      'Susun laporan jika diperlakukan sebagai pengurang jumlah biaya produksi produk utama.',
      'Bandingkan posisi penyajian dan laba akhir dari keempat alternatif.'
    ],
    outputFormat: [
      'Empat laporan laba rugi terpisah.',
      'Tabel rekonsiliasi laba akhir.',
      'Paragraf interpretasi perbedaan penyajian.'
    ],
    rubric: [
      'Ketepatan struktur empat laporan 40%.',
      'Ketepatan angka dan subtotal 40%.',
      'Analisis perbandingan 10%.',
      'Kerapian format 10%.'
    ],
    answerGuide: 'Penjualan produk utama Rp60.075.000. HPP dasar = 22.275.000 + 48.375.000 - 10.575.000 = Rp60.075.000. Pendapatan produk sampingan Rp25.000.000 dan beban pemasaran-administrasi Rp4.900.000. Laba akhir yang direkonsiliasi dalam empat penyajian adalah Rp20.100.000, tetapi posisi pendapatan produk sampingan berbeda sesuai metode.'
  },
  {
    type: 'journal',
    scope: 'UAS · TM 9',
    difficulty: 'Komprehensif',
    estimatedTime: '50–65 menit',
    question: 'UAS-2. Buat jurnal utama sistem JIT/backflush MAMAMIA Manufacturing Company.',
    context: 'MAMAMIA memiliki sistem JIT matang dan memakai akun RIP serta Finished Goods sebagai akun persediaan. Biaya konversi dibebankan ke COGS dan saldo persediaan disesuaikan pada akhir bulan.',
    data: [
      'Saldo awal RIP Rp240.300.000 terdiri dari bahan Rp215.200.000 dan konversi Rp25.100.000.',
      'Saldo awal Finished Goods Rp430.600.000 terdiri dari bahan Rp278.000.000 dan konversi Rp152.600.000.',
      'Saldo akhir RIP Rp445.200.000 terdiri dari bahan Rp397.000.000 dan konversi Rp48.200.000.',
      'Saldo akhir Finished Goods Rp788.000.000 terdiri dari bahan Rp520.000.000 dan konversi Rp268.000.000.',
      'Bahan baku dibeli kredit Rp603.240.000; bahan tidak langsung digunakan Rp2.000.000.',
      'Tenaga kerja langsung Rp534.000.000; tenaga kerja tidak langsung Rp680.000.000; pemasaran Rp580.000.000; administrasi Rp546.000.000.',
      'Overhead aktual: penyusutan Rp76.200.000, asuransi Rp48.300.000, lain-lain Rp60.900.000 berdasarkan rekonsiliasi jurnal sumber.'
    ],
    instructions: [
      'Buat jurnal pembelian bahan baku ke RIP.',
      'Buat jurnal bahan tidak langsung ke FOH-Control.',
      'Buat jurnal distribusi payroll.',
      'Buat jurnal overhead aktual.',
      'Buat jurnal pembebanan FOH-Control ke COGS.',
      'Hitung dan buat jurnal backflush bahan dari RIP ke Finished Goods.',
      'Hitung dan buat jurnal backflush bahan dari Finished Goods ke COGS.',
      'Buat jurnal penyesuaian komponen konversi akhir bulan.'
    ],
    outputFormat: [
      'Jurnal umum berurutan.',
      'Perhitungan pendukung backflush bahan.',
      'Perhitungan pendukung penyesuaian konversi.'
    ],
    rubric: [
      'Ketepatan jurnal 45%.',
      'Perhitungan backflush 30%.',
      'Penyesuaian konversi 15%.',
      'Kerapian 10%.'
    ],
    answerGuide: 'Jurnal inti: Dr RIP Cr AP Rp603.240.000; Dr FOH-Control Cr Indirect Material Rp2.000.000; payroll debit COGS Rp534.000.000, FOH-Control Rp680.000.000, Marketing Expense Rp580.000.000, Administration Expense Rp546.000.000, kredit Salaries and Wages Rp2.340.000.000; Dr FOH-Control Rp185.400.000; Dr COGS Cr FOH-Control Rp867.400.000; Dr Finished Goods Cr RIP Rp421.440.000; Dr COGS Cr Finished Goods Rp179.440.000; Dr RIP Rp23.100.000 dan Dr Finished Goods Rp115.400.000, Cr COGS Rp138.500.000.'
  },
  {
    type: 't-account',
    scope: 'UAS · TM 9',
    difficulty: 'Komprehensif',
    estimatedTime: '40–50 menit',
    question: 'UAS-3. Buat akun T RIP, FOH-Control, Finished Goods, dan COGS untuk kasus MAMAMIA.',
    context: 'Setelah jurnal dibuat, auditor meminta akun T agar saldo akhir persediaan dan COGS dapat diperiksa secara visual.',
    data: [
      'Gunakan seluruh data MAMAMIA pada UAS-2.',
      'Saldo akhir yang harus dicapai: RIP Rp445.200.000; Finished Goods Rp788.000.000.',
      'FOH-Control harus tertutup ke COGS.',
      'COGS akhir setelah penyesuaian konversi harus dapat direkonsiliasi.'
    ],
    instructions: [
      'Buat akun T RIP dengan saldo awal, debit bahan, debit konversi, kredit backflush, dan saldo akhir.',
      'Buat akun T FOH-Control dengan debit bahan tidak langsung, tenaga kerja tidak langsung, overhead aktual, dan kredit pembebanan ke COGS.',
      'Buat akun T Finished Goods dengan saldo awal, debit backflush dari RIP, debit konversi, kredit backflush ke COGS, dan saldo akhir.',
      'Buat akun T COGS dengan debit tenaga kerja langsung, debit FOH, debit bahan terjual, kredit penyesuaian konversi, dan saldo akhir.'
    ],
    outputFormat: [
      'Empat akun T.',
      'Saldo akhir tiap akun.',
      'Catatan rekonsiliasi satu paragraf.'
    ],
    rubric: [
      'Kelengkapan akun T 35%.',
      'Ketepatan debit/kredit 35%.',
      'Saldo akhir 20%.',
      'Catatan rekonsiliasi 10%.'
    ],
    answerGuide: 'RIP: debit 240.300.000 + 603.240.000 + 23.100.000, kredit 421.440.000, saldo 445.200.000. FOH-Control: debit 2.000.000 + 680.000.000 + 185.400.000, kredit 867.400.000, saldo nol. Finished Goods: debit 430.600.000 + 421.440.000 + 115.400.000, kredit 179.440.000, saldo 788.000.000. COGS: debit 534.000.000 + 867.400.000 + 179.440.000, kredit 138.500.000, saldo 1.442.340.000.'
  },
  {
    type: 'report',
    scope: 'UAS · TM 10',
    difficulty: 'Menengah',
    estimatedTime: '30–40 menit',
    question: 'UAS-4. Susun daftar gaji dan jurnal tenaga kerja berdasarkan standar produksi.',
    context: 'Departemen Penyempurnaan memberi insentif kepada karyawan yang melebihi standar produksi harian. Hari yang tidak mencapai standar tidak diberi insentif negatif.',
    data: [
      'Standar produksi 35 unit per jam selama 6 jam per hari.',
      'Tarif upah Rp1.500 per jam.',
      'Insentif 70% dari tarif upah untuk kelebihan output yang dikonversi ke jam standar.',
      'Output: Senin 220 unit, Selasa 190 unit, Rabu 210 unit, Kamis 205 unit, Jumat 230 unit.'
    ],
    instructions: [
      'Hitung output standar per hari.',
      'Hitung upah dasar setiap hari.',
      'Hitung insentif hanya untuk output di atas standar.',
      'Susun daftar gaji mingguan.',
      'Buat jurnal distribusi gaji dan upah.'
    ],
    outputFormat: [
      'Tabel daftar gaji per hari.',
      'Total upah dasar, total insentif, dan total gaji.',
      'Jurnal umum.'
    ],
    rubric: [
      'Perhitungan standar dan insentif 45%.',
      'Daftar gaji 25%.',
      'Jurnal 20%.',
      'Format 10%.'
    ],
    answerGuide: 'Standar harian = 35 × 6 = 210 unit. Senin Rp9.300; Selasa Rp9.000; Rabu Rp9.000; Kamis Rp9.000; Jumat Rp9.600. Total gaji Rp45.900. Jurnal: Dr Gaji dan Upah Langsung Rp45.000; Dr Premi Lembur/FOH Control Rp900; Cr Utang Gaji dan Upah Rp45.900.'
  },
  {
    type: 'journal',
    scope: 'UAS · TM 10',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'UAS-5. Buat jurnal distribusi payroll berdasarkan klasifikasi tenaga kerja.',
    context: 'Perusahaan ingin memastikan gaji tenaga kerja langsung, tidak langsung, pemasaran, dan administrasi dibebankan ke akun yang tepat.',
    data: [
      'Tenaga kerja langsung Rp500.000.',
      'Tenaga kerja tidak langsung Rp100.000.',
      'Gaji bagian pemasaran Rp250.000.',
      'Gaji bagian administrasi umum Rp150.000.',
      'Total gaji dan upah Rp1.000.000.'
    ],
    instructions: [
      'Klasifikasikan setiap komponen gaji.',
      'Buat jurnal distribusi payroll.',
      'Jelaskan perbedaan direct labor dan indirect labor dalam konteks biaya produk.'
    ],
    outputFormat: [
      'Tabel klasifikasi gaji.',
      'Jurnal umum.',
      'Penjelasan singkat.'
    ],
    rubric: [
      'Klasifikasi 30%.',
      'Jurnal debit/kredit 45%.',
      'Penjelasan konsep 15%.',
      'Format 10%.'
    ],
    answerGuide: 'Jurnal: Dr Work in Process Rp500.000; Dr Factory Overhead Rp100.000; Dr Marketing Expense Rp250.000; Dr Administrative Expense Rp150.000; Cr Salaries and Wages Payable/Expense Rp1.000.000. Direct labor ditelusuri langsung ke produk; indirect labor mendukung produksi dan masuk FOH.'
  },
  {
    type: 'calculation',
    scope: 'UAS · TM 9',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'UAS-6. Hitung production run optimum dan jumlah run per tahun.',
    context: 'Perusahaan memproduksi komponen sendiri. Manajemen ingin menentukan ukuran produksi ekonomis agar setup cost dan carrying cost seimbang.',
    data: [
      'Kebutuhan tahunan 6.000 unit.',
      'Setup cost Rp65.000 per run.',
      'Biaya produksi variabel Rp15.600 per unit.',
      'Carrying cost 20% dari biaya produksi variabel per unit per tahun.'
    ],
    instructions: [
      'Hitung carrying cost per unit.',
      'Hitung production run optimum.',
      'Hitung jumlah run per tahun.',
      'Jelaskan perbedaan production run model dan EOQ pembelian.'
    ],
    outputFormat: [
      'Rumus dan perhitungan production run optimum.',
      'Jumlah run per tahun.',
      'Penjelasan konsep.'
    ],
    rubric: [
      'Rumus 20%.',
      'Perhitungan 50%.',
      'Interpretasi 20%.',
      'Format 10%.'
    ],
    answerGuide: 'Carrying cost = 20% × 15.600 = Rp3.120. Production run optimum = √((2 × 6.000 × 65.000) / 3.120) = 500 unit. Jumlah run = 6.000 / 500 = 12 kali. Production run dipakai untuk barang yang diproduksi sendiri, sedangkan EOQ umum dipakai untuk pembelian persediaan.'
  },
  {
    type: 'report',
    scope: 'UAS · TM 11',
    difficulty: 'Menengah',
    estimatedTime: '30–40 menit',
    question: 'UAS-7. Hitung tarif FOH, applied FOH, actual FOH, dan over/underapplied overhead.',
    context: 'Perusahaan memakai predetermined overhead rate berdasarkan jam tenaga kerja langsung. Pada akhir periode, FOH aktual tidak sama dengan FOH yang dibebankan.',
    data: [
      'Estimasi FOH tahunan Rp240.000.000.',
      'Estimasi jam tenaga kerja langsung 12.000 jam.',
      'Jam tenaga kerja langsung aktual 10.500 jam.',
      'FOH aktual periode berjalan Rp225.000.000.'
    ],
    instructions: [
      'Hitung predetermined overhead rate.',
      'Hitung applied overhead.',
      'Tentukan overapplied atau underapplied overhead.',
      'Buat jurnal penutupan sederhana ke COGS.'
    ],
    outputFormat: [
      'Tabel FOH planned, applied, actual, dan selisih.',
      'Jurnal penutupan over/underapplied overhead.',
      'Penjelasan singkat.'
    ],
    rubric: [
      'Tarif dan applied FOH 35%.',
      'Analisis selisih 30%.',
      'Jurnal 25%.',
      'Format 10%.'
    ],
    answerGuide: 'Tarif FOH = 240.000.000 / 12.000 = Rp20.000 per jam. Applied FOH = 10.500 × 20.000 = Rp210.000.000. Actual FOH Rp225.000.000, sehingga underapplied Rp15.000.000. Jika ditutup ke COGS: Dr COGS Rp15.000.000; Cr Factory Overhead Control/Overhead Variance Rp15.000.000.'
  },
  {
    type: 'report',
    scope: 'UAS · TM 12',
    difficulty: 'Komprehensif',
    estimatedTime: '40–50 menit',
    question: 'UAS-8. Alokasikan biaya departemen jasa dengan Direct Method.',
    context: 'Perusahaan memiliki dua departemen jasa dan dua departemen produksi. Auditor menyarankan dasar alokasi berbasis jam kerja yang lebih relevan daripada penjualan tahunan.',
    data: [
      'Departemen jasa: Pemeliharaan biaya Rp120.000 dan Teknik biaya Rp540.000.',
      'Departemen produksi: Perakitan biaya Rp800.000 dan Pengemasan biaya Rp900.000.',
      'Jam Pemeliharaan: Teknik 400, Perakitan 800, Pengemasan 200.',
      'Jam Teknik: Pemeliharaan 400, Perakitan 800, Pengemasan 400.'
    ],
    instructions: [
      'Abaikan jasa antar departemen jasa sesuai direct method.',
      'Alokasikan biaya Pemeliharaan hanya ke Perakitan dan Pengemasan.',
      'Alokasikan biaya Teknik hanya ke Perakitan dan Pengemasan.',
      'Hitung anggaran akhir Perakitan dan Pengemasan.',
      'Tulis penjelasan kelemahan direct method.'
    ],
    outputFormat: [
      'Tabel dasar alokasi.',
      'Tabel alokasi biaya jasa.',
      'Anggaran akhir departemen produksi.',
      'Catatan kelemahan metode.'
    ],
    rubric: [
      'Rasio alokasi 30%.',
      'Perhitungan alokasi 35%.',
      'Anggaran akhir 25%.',
      'Penjelasan 10%.'
    ],
    answerGuide: 'Pemeliharaan dialokasikan ke Perakitan dan Pengemasan berdasarkan 800:200, sehingga Perakitan Rp96.000 dan Pengemasan Rp24.000. Teknik dialokasikan berdasarkan 800:400, sehingga Perakitan Rp360.000 dan Pengemasan Rp180.000. Anggaran akhir: Perakitan = 800.000 + 96.000 + 360.000 = Rp1.256.000; Pengemasan = 900.000 + 24.000 + 180.000 = Rp1.104.000.'
  },
  {
    type: 'report',
    scope: 'UAS · TM 12',
    difficulty: 'Komprehensif',
    estimatedTime: '45–55 menit',
    question: 'UAS-9. Alokasikan biaya departemen jasa dengan Sequential Method.',
    context: 'Perusahaan ingin memakai metode bertahap karena jasa Pemeliharaan kepada Teknik dianggap material. Pemeliharaan dialokasikan lebih dulu.',
    data: [
      'Gunakan data departemen dan jam kerja pada UAS-8.',
      'Urutan alokasi: Pemeliharaan terlebih dahulu ke Teknik, Perakitan, dan Pengemasan.',
      'Setelah menerima alokasi dari Pemeliharaan, biaya Teknik dialokasikan ke Perakitan dan Pengemasan.'
    ],
    instructions: [
      'Alokasikan biaya Pemeliharaan dengan dasar jam pemeliharaan ke Teknik, Perakitan, dan Pengemasan.',
      'Tambahkan alokasi yang diterima ke biaya Teknik.',
      'Alokasikan total biaya Teknik ke Perakitan dan Pengemasan.',
      'Hitung anggaran akhir Perakitan dan Pengemasan.',
      'Tunjukkan rekonsiliasi total agar tetap Rp2.360.000.'
    ],
    outputFormat: [
      'Tabel tahap 1: alokasi Pemeliharaan.',
      'Tabel tahap 2: alokasi Teknik.',
      'Tabel anggaran akhir dan rekonsiliasi.'
    ],
    rubric: [
      'Tahap alokasi Pemeliharaan 30%.',
      'Tahap alokasi Teknik 30%.',
      'Rekonsiliasi total 25%.',
      'Format 15%.'
    ],
    answerGuide: 'Tahap 1: total jam pemeliharaan yang menerima alokasi = 400 + 800 + 200 = 1.400. Teknik menerima sekitar Rp34.286; Perakitan Rp68.571; Pengemasan Rp17.143. Biaya Teknik menjadi sekitar Rp574.286. Tahap 2: Teknik dialokasikan ke Perakitan dan Pengemasan dengan rasio 800:400. Hasil akhir setelah pembulatan: Perakitan Rp1.251.428 dan Pengemasan Rp1.108.572; total Rp2.360.000.'
  },
  {
    type: 'report',
    scope: 'UAS · TM 13',
    difficulty: 'Komprehensif',
    estimatedTime: '50–65 menit',
    question: 'UAS-10. Selesaikan laporan Activity Based Costing Bangtan Company.',
    context: 'Bangtan Company memproduksi Boneka dan Bantal. Perusahaan memakai ABC untuk membebankan overhead berdasarkan aktivitas, bukan satu tarif pabrik tunggal.',
    data: [
      'Unit produksi: Boneka 750 unit dan Bantal 500 unit.',
      'Direct material: Boneka Rp22.500.000 dan Bantal Rp12.500.000.',
      'Direct labor: Boneka Rp25.000.000 dan Bantal Rp20.000.000.',
      'Setup hours: Boneka 375 dan Bantal 250.',
      'Design change: Boneka 150 dan Bantal 100.',
      'Luas area: Boneka 2.000 m2 dan Bantal 2.000 m2.',
      'Estimasi overhead: setup cost Rp8.000.000, design cost Rp3.950.000, lighting cost Rp3.300.000.'
    ],
    instructions: [
      'Klasifikasikan aktivitas setup, design, dan lighting ke level aktivitas.',
      'Hitung tarif aktivitas untuk setup, design, dan lighting.',
      'Hitung FOH ABC untuk Boneka dan Bantal.',
      'Hitung total kos tiap produk.',
      'Hitung kos per unit tiap produk.',
      'Beri komentar mengapa ABC dapat menghasilkan informasi kos yang lebih tajam.'
    ],
    outputFormat: [
      'Tabel klasifikasi aktivitas.',
      'Tabel tarif aktivitas.',
      'ABC cost assignment per produk.',
      'Total kos dan kos per unit.',
      'Komentar manajerial.'
    ],
    rubric: [
      'Klasifikasi aktivitas 15%.',
      'Tarif aktivitas 25%.',
      'Pembebanan FOH 30%.',
      'Total kos dan unit cost 20%.',
      'Komentar 10%.'
    ],
    answerGuide: 'Setup = batch-level; design = product-level; lighting = facility-level. Tarif setup = 8.000.000/625 = Rp12.800; tarif design = 3.950.000/250 = Rp15.800; tarif lighting = 3.300.000/4.000 = Rp825. FOH Boneka = (375×12.800)+(150×15.800)+(2.000×825)=Rp8.820.000. FOH Bantal = Rp6.430.000. Total kos Boneka Rp56.320.000 dan kos per unit Rp75.093,33. Total kos Bantal Rp38.930.000 dan kos per unit Rp77.860.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 13',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'UAS-11. Tulis analisis ABC dan ABM berdasarkan aktivitas setup, design change, dan lighting.',
    context: 'Setelah laporan ABC dibuat, manajemen meminta analisis tindakan. Anda harus menjelaskan bagaimana informasi ABC digunakan dalam Activity Based Management.',
    data: [
      'Setup dipicu oleh jumlah setup hours.',
      'Design change dipicu oleh jumlah perubahan desain.',
      'Lighting dipicu oleh luas area yang digunakan.',
      'Boneka menggunakan setup hours dan design change lebih besar daripada Bantal.'
    ],
    instructions: [
      'Jelaskan mengapa setup tidak tepat dibebankan hanya berdasarkan unit produksi.',
      'Jelaskan mengapa design change merupakan product-level activity.',
      'Jelaskan mengapa lighting biasanya facility-sustaining activity.',
      'Berikan tiga rekomendasi ABM untuk mengurangi biaya tanpa menurunkan kualitas.'
    ],
    outputFormat: [
      'Esai 4–6 paragraf.',
      'Tabel ringkas aktivitas, driver, level, dan rekomendasi.'
    ],
    rubric: [
      'Ketepatan konsep ABC 35%.',
      'Hubungan driver dan level aktivitas 25%.',
      'Rekomendasi ABM 25%.',
      'Kejelasan tulisan 15%.'
    ],
    answerGuide: 'Jawaban harus menekankan bahwa ABC menelusuri overhead ke aktivitas lalu ke produk berdasarkan driver. Setup adalah batch-level karena dipicu oleh batch/setup, design adalah product-level karena terkait keberadaan/kompleksitas produk, dan lighting adalah facility-level karena mendukung fasilitas secara umum. ABM dapat diarahkan pada pengurangan setup, standarisasi desain, dan efisiensi penggunaan area/fasilitas.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 8',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'UAS-12. Analisis perlakuan by-product revenue dalam laporan laba rugi.',
    context: 'Perusahaan menghasilkan produk sampingan dengan nilai jual material, tetapi manajemen belum menentukan apakah pendapatannya akan disajikan sebagai pendapatan atau pengurang biaya.',
    data: [
      'Produk utama tetap menjadi pusat laba utama perusahaan.',
      'Produk sampingan dijual secara rutin setiap bulan.',
      'Nilai penjualan produk sampingan cukup besar untuk memengaruhi gross profit.',
      'Manajemen ingin laporan tetap mudah dipahami oleh pemakai internal.'
    ],
    instructions: [
      'Jelaskan empat alternatif perlakuan by-product revenue.',
      'Bandingkan dampak masing-masing terhadap posisi penjualan, HPP, laba kotor, dan laba operasi.',
      'Berikan rekomendasi penyajian untuk laporan internal dan alasan akuntansi biayanya.'
    ],
    outputFormat: [
      'Tabel perbandingan empat perlakuan.',
      'Esai rekomendasi 3–4 paragraf.'
    ],
    rubric: [
      'Kelengkapan alternatif 35%.',
      'Analisis dampak laporan 35%.',
      'Rekomendasi 20%.',
      'Kejelasan tulisan 10%.'
    ],
    answerGuide: 'Sebagai pendapatan penjualan, by-product menambah penjualan bersih. Sebagai pendapatan lain-lain, by-product dipisahkan dari operasi utama. Sebagai pengurang HPP, by-product menurunkan HPP. Sebagai pengurang biaya produksi, by-product mengurangi biaya produksi produk utama sebelum HPP dihitung. Rekomendasi tergantung tujuan laporan; untuk analisis biaya internal, penyajian sebagai pengurang biaya produksi atau HPP sering membantu menunjukkan pengaruh terhadap biaya produk utama.'
  }
];


export const AKM201_BANK_BATCH3_JOB_ORDER: BankSoal[] = [
  {
    type: 'cost-sheet',
    scope: 'UTS · TM 4',
    difficulty: 'Komprehensif',
    estimatedTime: '35–45 menit',
    question: 'B3-1. Susun job cost sheet, jurnal, dan analisis overhead PT Rengganis untuk Job 77.',
    context: 'PT Rengganis menggunakan job order costing dengan normal costing. Manajemen ingin memastikan mahasiswa dapat menghubungkan dokumen bahan, labor time ticket, applied overhead, job selesai, dan selisih overhead periode.',
    data: [
      'Estimasi overhead tahunan Rp360.000.000 dan estimasi jam mesin 90.000 jam.',
      'Job 77 memakai bahan langsung Rp18.000.000 dan bahan tidak langsung Rp1.200.000.',
      'Tenaga kerja langsung Job 77 300 jam dengan tarif Rp40.000 per jam.',
      'Tenaga kerja tidak langsung periode berjalan Rp2.000.000.',
      'Job 77 memakai 500 jam mesin.',
      'Overhead aktual total periode Rp375.000.000 dan overhead dibebankan seluruh job Rp368.000.000.',
      'Job 77 sudah selesai diproduksi tetapi belum terjual.'
    ],
    instructions: [
      'Hitung predetermined overhead rate.',
      'Hitung direct labor Job 77, applied FOH Job 77, total job cost, dan cost per unit jika Job 77 terdiri dari 80 unit.',
      'Buat jurnal pemakaian bahan langsung dan bahan tidak langsung.',
      'Buat jurnal distribusi tenaga kerja langsung dan tidak langsung.',
      'Buat jurnal overhead dibebankan ke Job 77.',
      'Buat jurnal saat Job 77 selesai tetapi belum dijual.',
      'Tentukan apakah overhead periode underapplied atau overapplied dan jumlahnya.'
    ],
    outputFormat: [
      'Job cost sheet ringkas.',
      'Jurnal umum dengan debit dan kredit.',
      'Analisis underapplied/overapplied overhead.',
      'Catatan jebakan: status job dan perlakuan biaya tidak langsung.'
    ],
    rubric: [
      'Perhitungan tarif dan job cost 35%.',
      'Ketepatan jurnal bahan, labor, applied FOH, dan job selesai 40%.',
      'Analisis selisih overhead 15%.',
      'Kerapian format 10%.'
    ],
    answerGuide: 'Tarif FOH = 360.000.000/90.000 = Rp4.000 per jam mesin. Direct labor = 300×40.000 = Rp12.000.000. Applied FOH Job 77 = 500×4.000 = Rp2.000.000. Total job cost = 18.000.000 + 12.000.000 + 2.000.000 = Rp32.000.000. Cost per unit jika 80 unit = Rp400.000. Jurnal bahan: Dr WIP 18.000.000; Dr FOH Control 1.200.000; Cr Materials 19.200.000. Jurnal labor: Dr WIP 12.000.000; Dr FOH Control 2.000.000; Cr Factory Payroll 14.000.000. Applied FOH: Dr WIP 2.000.000; Cr Applied FOH 2.000.000. Job selesai: Dr Finished Goods 32.000.000; Cr WIP 32.000.000. Selisih overhead = 375.000.000 - 368.000.000 = underapplied Rp7.000.000.'
  },
  {
    type: 'journal',
    scope: 'UTS · TM 4',
    difficulty: 'Menengah-Komprehensif',
    estimatedTime: '30–40 menit',
    question: 'B3-2. Koreksi jurnal job order costing PT Nara berdasarkan status job dan jenis biaya.',
    context: 'PT Nara sedang melakukan review jurnal. Beberapa staf baru sering mencatat bahan tidak langsung ke WIP dan mencatat job selesai langsung ke COGS. Anda diminta menyusun jurnal yang benar.',
    data: [
      'Bahan langsung dipakai Job 88 Rp25.000.000.',
      'Bahan tidak langsung dipakai pabrik Rp3.500.000.',
      'Tenaga kerja langsung Job 88 Rp16.000.000.',
      'Tenaga kerja tidak langsung Rp4.000.000.',
      'Tarif FOH Rp6.000 per jam mesin dan Job 88 memakai 1.250 jam mesin.',
      'Job 88 menghasilkan 100 unit, selesai diproduksi, tetapi belum terjual.'
    ],
    instructions: [
      'Hitung applied FOH Job 88.',
      'Hitung total job cost dan cost per unit.',
      'Buat jurnal pemakaian bahan.',
      'Buat jurnal distribusi tenaga kerja.',
      'Buat jurnal applied overhead.',
      'Buat jurnal transfer job selesai.',
      'Jelaskan dua kesalahan jurnal yang harus dihindari.'
    ],
    outputFormat: [
      'Perhitungan job cost sheet.',
      'Jurnal umum lengkap.',
      'Penjelasan koreksi jurnal.'
    ],
    rubric: [
      'Perhitungan applied FOH dan unit cost 30%.',
      'Jurnal bahan/labor/FOH 45%.',
      'Jurnal job selesai dan status akun 15%.',
      'Penjelasan kesalahan umum 10%.'
    ],
    answerGuide: 'Applied FOH = 1.250×6.000 = Rp7.500.000. Total job cost = 25.000.000 + 16.000.000 + 7.500.000 = Rp48.500.000. Cost per unit = Rp485.000. Jurnal bahan: Dr WIP 25.000.000; Dr FOH Control 3.500.000; Cr Materials Inventory 28.500.000. Jurnal labor: Dr WIP 16.000.000; Dr FOH Control 4.000.000; Cr Factory Payroll 20.000.000. Applied FOH: Dr WIP 7.500.000; Cr Applied FOH 7.500.000. Job selesai belum terjual: Dr Finished Goods 48.500.000; Cr WIP 48.500.000. Hindari memasukkan indirect materials ke WIP dan hindari mencatat job selesai belum terjual ke COGS.'
  },
  {
    type: 'case',
    scope: 'UTS · TM 4',
    difficulty: 'Menengah',
    estimatedTime: '20–30 menit',
    question: 'B3-3. Analisis dokumen sumber dalam job order costing dan dampaknya pada akun biaya.',
    context: 'Perusahaan percetakan memakai job order costing. Supervisor produksi ingin memastikan dokumen yang dipakai oleh bagian gudang, payroll, dan akuntansi biaya sudah dipahami dengan benar.',
    data: [
      'Materials requisition No. MR-21 menunjukkan kertas khusus dipakai untuk Job 12 sebesar Rp8.000.000.',
      'Materials requisition No. MR-22 menunjukkan lem dan pelumas pabrik sebesar Rp900.000.',
      'Labor time ticket menunjukkan operator A bekerja 40 jam pada Job 12 dengan tarif Rp50.000 per jam.',
      'Labor time ticket mandor produksi menunjukkan supervisi umum pabrik Rp1.400.000.',
      'Tarif FOH ditentukan di muka Rp30.000 per jam tenaga kerja langsung.'
    ],
    instructions: [
      'Identifikasi dokumen yang mendukung biaya bahan langsung dan bahan tidak langsung.',
      'Identifikasi dokumen yang mendukung tenaga kerja langsung dan tidak langsung.',
      'Hitung applied FOH Job 12.',
      'Jelaskan akun debit untuk setiap biaya.',
      'Tulis ringkasan total biaya yang masuk ke Job 12.'
    ],
    outputFormat: [
      'Tabel dokumen, jenis biaya, akun debit.',
      'Perhitungan applied FOH.',
      'Ringkasan biaya Job 12.'
    ],
    rubric: [
      'Identifikasi dokumen 25%.',
      'Klasifikasi biaya langsung/tidak langsung 30%.',
      'Perhitungan applied FOH dan job cost 25%.',
      'Penjelasan akun 20%.'
    ],
    answerGuide: 'Kertas khusus untuk Job 12 adalah direct materials: debit WIP Rp8.000.000. Lem dan pelumas adalah indirect materials: debit FOH Control Rp900.000. Operator A adalah direct labor: 40×50.000 = Rp2.000.000 debit WIP. Mandor produksi adalah indirect labor: debit FOH Control Rp1.400.000. Applied FOH = 40×30.000 = Rp1.200.000 debit WIP dan kredit Applied FOH. Total biaya Job 12 = 8.000.000 + 2.000.000 + 1.200.000 = Rp11.200.000.'
  }
];


export const AKM201_BANK_BATCH4_PROCESS_COSTING: BankSoal[] = [
  {
    type: 'report',
    scope: 'UTS · TM 5',
    difficulty: 'Komprehensif',
    estimatedTime: '40–50 menit',
    question: 'B4-1. Susun Cost of Production Report weighted-average Departemen Mixing PT Sora.',
    context: 'PT Sora memproduksi barang homogen melalui Departemen Mixing. Perusahaan ingin melihat laporan biaya produksi yang memisahkan bahan dan konversi agar cost per equivalent unit tidak keliru.',
    data: [
      'BDP awal 200 unit: materials 100% selesai dan conversion 50% selesai. Biaya BDP awal: materials Rp1.000.000 dan conversion Rp600.000.',
      'Unit dimulai periode berjalan 1.000 unit.',
      'Unit selesai dan ditransfer 900 unit.',
      'BDP akhir 300 unit: materials 100% selesai dan conversion 40% selesai.',
      'Current cost: materials Rp5.000.000 dan conversion Rp4.200.000.'
    ],
    instructions: [
      'Susun quantity schedule.',
      'Hitung EUP materials dan conversion dengan weighted-average method.',
      'Hitung cost per EUP materials dan conversion.',
      'Hitung cost of units transferred out.',
      'Hitung cost of ending WIP.',
      'Buat cost reconciliation.'
    ],
    outputFormat: [
      'Quantity schedule.',
      'Equivalent units schedule.',
      'Cost per EUP schedule.',
      'Cost assignment and reconciliation.'
    ],
    rubric: [
      'Quantity schedule 15%.',
      'Equivalent units 25%.',
      'Cost per EUP 25%.',
      'Cost assignment dan rekonsiliasi 25%.',
      'Format laporan 10%.'
    ],
    answerGuide: 'Unit tersedia = 200 + 1.000 = 1.200; unit selesai 900 dan BDP akhir 300. EUP materials average = 900 + 300×100% = 1.200. EUP conversion average = 900 + 300×40% = 1.020. Total cost materials = 1.000.000 + 5.000.000 = Rp6.000.000 sehingga cost per EUP materials Rp5.000. Total cost conversion = 600.000 + 4.200.000 = Rp4.800.000 sehingga cost per EUP conversion Rp4.705,88. Transferred out = 900×(5.000+4.705,88) = Rp8.735.294,12. Ending WIP = materials 300×5.000 + conversion 120×4.705,88 = Rp2.064.705,88. Total biaya direkonsiliasi = Rp10.800.000.'
  },
  {
    type: 'report',
    scope: 'UTS · TM 6',
    difficulty: 'Komprehensif',
    estimatedTime: '45–55 menit',
    question: 'B4-2. Susun Cost of Production Report FIFO Departemen Assembly PT Liora.',
    context: 'PT Liora memakai FIFO untuk memisahkan pekerjaan periode lalu dari pekerjaan periode berjalan. Bahan ditambahkan pada awal proses dan conversion cost terjadi merata selama proses.',
    data: [
      'BDP awal 100 unit: materials 100% selesai dan conversion 30% selesai. Biaya BDP awal Rp1.500.000.',
      'Unit dimulai periode berjalan 900 unit.',
      'Unit selesai dan ditransfer 800 unit.',
      'BDP akhir 200 unit: materials 100% selesai dan conversion 50% selesai.',
      'Current cost: materials Rp9.000.000 dan conversion Rp8.700.000.'
    ],
    instructions: [
      'Susun quantity schedule FIFO.',
      'Hitung unit started and completed.',
      'Hitung EUP materials dan conversion FIFO.',
      'Hitung cost per EUP materials dan conversion dari current cost saja.',
      'Bebankan biaya ke completed beginning WIP, started and completed, dan ending WIP.',
      'Buat rekonsiliasi biaya.'
    ],
    outputFormat: [
      'FIFO quantity schedule.',
      'FIFO equivalent units.',
      'Current cost per EUP.',
      'Cost assignment and reconciliation.'
    ],
    rubric: [
      'Pemecahan unit FIFO 20%.',
      'EUP FIFO 25%.',
      'Cost per EUP 20%.',
      'Cost assignment 25%.',
      'Kerapian laporan 10%.'
    ],
    answerGuide: 'Unit started and completed = 800 - 100 = 700. EUP materials = 0 + 700 + 200 = 900. EUP conversion = 100×70% + 700 + 200×50% = 870. Cost per EUP materials = 9.000.000/900 = Rp10.000. Cost per EUP conversion = 8.700.000/870 = Rp10.000. Completed beginning WIP = 1.500.000 + 70×10.000 = Rp2.200.000. Started and completed = 700×20.000 = Rp14.000.000. Transferred out = Rp16.200.000. Ending WIP = 200×10.000 + 100×10.000 = Rp3.000.000. Total assigned = Rp19.200.000, sama dengan biaya BDP awal 1.500.000 + current cost 17.700.000.'
  },
  {
    type: 'case',
    scope: 'UTS · TM 5–6',
    difficulty: 'Menengah-Komprehensif',
    estimatedTime: '30–40 menit',
    question: 'B4-3. Analisis perbedaan weighted-average dan FIFO pada BDP awal dan cost per EUP.',
    context: 'Manajer produksi bingung mengapa dua metode process costing dapat menghasilkan cost per EUP berbeda padahal memakai data produksi yang sama. Anda diminta menjelaskan konsepnya sekaligus menunjukkan titik hitung yang berbeda.',
    data: [
      'Metode weighted-average menggabungkan biaya BDP awal dan biaya periode berjalan.',
      'Metode FIFO memisahkan pekerjaan yang sudah dilakukan pada BDP awal dan hanya menghitung current work dalam EUP FIFO.',
      'Bahan dapat ditambahkan pada awal proses, sedangkan conversion cost biasanya terjadi merata selama proses.',
      'Kedua metode tetap harus merekonsiliasi total biaya.'
    ],
    instructions: [
      'Jelaskan perbedaan perlakuan BDP awal pada weighted-average dan FIFO.',
      'Jelaskan perbedaan rumus EUP pada kedua metode.',
      'Jelaskan mengapa cost per EUP FIFO memakai current cost saja.',
      'Buat satu contoh sederhana EUP FIFO untuk BDP awal, started and completed, dan BDP akhir.',
      'Tutup jawaban dengan dua jebakan ujian yang harus dihindari.'
    ],
    outputFormat: [
      'Esai konsep 3–5 paragraf.',
      'Mini schedule EUP FIFO.',
      'Daftar jebakan ujian.'
    ],
    rubric: [
      'Ketepatan konsep average vs FIFO 35%.',
      'Ketepatan contoh EUP 30%.',
      'Analisis cost per EUP 20%.',
      'Kejelasan bahasa dan jebakan ujian 15%.'
    ],
    answerGuide: 'Weighted-average menyatukan BDP awal dan biaya periode berjalan sehingga EUP mencakup unit selesai ditransfer ditambah EUP BDP akhir. FIFO memisahkan biaya dan pekerjaan periode lalu; EUP FIFO hanya mencakup pekerjaan sisa BDP awal, unit started and completed, dan pekerjaan pada BDP akhir. Cost per EUP FIFO memakai current cost karena hanya current work yang menjadi dasar pembagian. Jebakan utama: memasukkan pekerjaan yang sudah selesai pada BDP awal ke EUP FIFO, dan memakai total biaya termasuk BDP awal untuk cost per EUP FIFO.'
  }
];

export const AKM201_BANK_BATCH5_QUALITY_LOSS: BankSoal[] = [
  {
    type: 'report',
    scope: 'UTS · TM 7',
    difficulty: 'Menengah-Komprehensif',
    estimatedTime: '30–40 menit',
    question: 'B5-1. Susun laporan biaya kualitas PT Aruna dan interpretasikan pola biayanya.',
    context: 'PT Aruna sedang mengevaluasi apakah biaya kualitasnya lebih banyak dipakai untuk mencegah cacat atau justru menanggung kegagalan produk. Penjualan periode berjalan sebesar Rp240.000.000.',
    data: [
      'Pelatihan kualitas Rp6.000.000.',
      'Evaluasi pemasok Rp2.000.000.',
      'Inspeksi bahan Rp3.500.000.',
      'Pengujian produk Rp4.500.000.',
      'Scrap internal Rp5.000.000.',
      'Rework Rp7.000.000.',
      'Klaim garansi Rp9.000.000.',
      'Retur pelanggan Rp3.000.000.'
    ],
    instructions: [
      'Klasifikasikan setiap pos ke prevention, appraisal, internal failure, atau external failure.',
      'Hitung total tiap kategori.',
      'Hitung total cost of quality.',
      'Hitung quality cost percentage terhadap penjualan.',
      'Tulis interpretasi apakah biaya lebih berat pada conformance atau nonconformance cost.'
    ],
    outputFormat: [
      'Tabel laporan biaya kualitas.',
      'Perhitungan persentase terhadap penjualan.',
      'Interpretasi manajerial 1 paragraf.'
    ],
    rubric: [
      'Klasifikasi biaya kualitas 35%.',
      'Perhitungan total dan persentase 35%.',
      'Interpretasi pola biaya 20%.',
      'Kerapian format 10%.'
    ],
    answerGuide: 'Prevention = pelatihan kualitas 6.000.000 + evaluasi pemasok 2.000.000 = Rp8.000.000. Appraisal = inspeksi bahan 3.500.000 + pengujian produk 4.500.000 = Rp8.000.000. Internal failure = scrap internal 5.000.000 + rework 7.000.000 = Rp12.000.000. External failure = klaim garansi 9.000.000 + retur pelanggan 3.000.000 = Rp12.000.000. Total cost of quality = Rp40.000.000. Persentase terhadap penjualan = 40.000.000/240.000.000 = 16,67%. Cost of nonconformance = 24.000.000 atau 60% dari total biaya kualitas, sehingga perusahaan perlu memperkuat pencegahan dan perbaikan proses.'
  },
  {
    type: 'journal',
    scope: 'UTS · TM 7',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'B5-2. Buat jurnal scrap, spoilage abnormal, dan rework khusus pelanggan.',
    context: 'PT Haruka menemukan beberapa kerugian produksi dalam sistem job order costing. Manajemen ingin perlakuan akuntansi dipisahkan agar kerugian abnormal tidak tersembunyi dalam biaya unit baik.',
    data: [
      'Scrap umum dijual tunai Rp1.200.000 dan kebijakan perusahaan memperlakukan hasil penjualan scrap sebagai pengurang Factory Overhead Control.',
      'Spoilage abnormal ditemukan pada Job 31 dengan nilai biaya Rp3.400.000.',
      'Rework terjadi karena permintaan khusus pelanggan Job 31. Biaya rework terdiri dari bahan Rp900.000, payroll Rp700.000, dan applied FOH Rp400.000.'
    ],
    instructions: [
      'Buat jurnal penjualan scrap umum.',
      'Buat jurnal spoilage abnormal.',
      'Buat jurnal rework khusus pelanggan.',
      'Jelaskan mengapa perlakuan spoilage abnormal berbeda dari rework pelanggan.'
    ],
    outputFormat: [
      'Jurnal umum lengkap debit/kredit.',
      'Penjelasan konsep 1 paragraf.'
    ],
    rubric: [
      'Ketepatan akun jurnal 45%.',
      'Ketepatan jumlah debit/kredit 30%.',
      'Penjelasan konsep normalitas dan penyebab 15%.',
      'Format jurnal 10%.'
    ],
    answerGuide: 'Scrap umum: Dr Cash Rp1.200.000; Cr Factory Overhead Control Rp1.200.000. Spoilage abnormal: Dr Loss from Abnormal Spoilage Rp3.400.000; Cr Work in Process - Job 31 Rp3.400.000. Rework pelanggan: Dr Work in Process - Job 31 Rp2.000.000; Cr Materials Inventory Rp900.000; Cr Payroll Rp700.000; Cr Applied Factory Overhead Rp400.000. Spoilage abnormal dipisahkan sebagai kerugian agar tidak membebani unit baik, sedangkan rework karena permintaan pelanggan menjadi biaya job pelanggan.'
  },
  {
    type: 'case',
    scope: 'UTS · TM 7',
    difficulty: 'Komprehensif',
    estimatedTime: '35–45 menit',
    question: 'B5-3. Analisis normal loss dan abnormal loss dalam process costing.',
    context: 'Departemen Finishing PT Natsume memproses produk homogen. Pemeriksaan kualitas dilakukan pada akhir proses, sehingga unit cacat yang ditemukan dianggap telah menyerap biaya penuh.',
    data: [
      'Unit yang masuk pemeriksaan akhir 10.000 unit.',
      'Batas normal loss yang diperkenankan adalah 2% dari unit yang diperiksa.',
      'Actual spoiled units sebanyak 320 unit.',
      'Cost per equivalent unit pada titik inspeksi Rp18.500.',
      'Tidak ada nilai jual scrap dari unit cacat.'
    ],
    instructions: [
      'Hitung normal loss allowed dalam unit.',
      'Hitung abnormal loss dalam unit.',
      'Hitung nilai abnormal loss.',
      'Tentukan perlakuan akuntansi abnormal loss.',
      'Jelaskan mengapa abnormal loss tidak boleh diserap ke unit baik.'
    ],
    outputFormat: [
      'Perhitungan unit normal loss dan abnormal loss.',
      'Perhitungan nilai kerugian abnormal.',
      'Jurnal atau penjelasan akun.',
      'Interpretasi pengendalian biaya.'
    ],
    rubric: [
      'Perhitungan unit loss 30%.',
      'Perhitungan nilai abnormal loss 25%.',
      'Perlakuan akun 25%.',
      'Interpretasi pengendalian 20%.'
    ],
    answerGuide: 'Normal loss allowed = 2% × 10.000 = 200 unit. Actual spoiled units = 320 unit, sehingga abnormal loss = 120 unit. Nilai abnormal loss = 120 × Rp18.500 = Rp2.220.000. Perlakuan: Dr Loss from Abnormal Spoilage Rp2.220.000; Cr Work in Process Rp2.220.000. Abnormal loss tidak diserap ke unit baik karena merupakan inefisiensi di luar batas normal dan harus terlihat sebagai sinyal pengendalian proses.'
  }
];


export const AKM201_BANK_BATCH6_JOINT_COST: BankSoal[] = [
  {
    type: 'calculation',
    scope: 'UAS · TM 8',
    difficulty: 'Menengah',
    estimatedTime: '30–40 menit',
    question: 'B6-1. Hitung alokasi joint cost PT Susu Nusantara dengan empat metode.',
    context: 'PT Susu Nusantara memproses susu segar menjadi Susu UHT, Keju, dan Yogurt. Manajemen ingin membandingkan hasil alokasi joint cost berdasarkan metode fisik, rata-rata per unit, NRV, dan weighted average.',
    data: [
      'Joint cost bulan November Rp8.000.000.',
      'Produk A Susu UHT: produksi 2.000 liter, separable cost Rp400.000, bobot 2, harga jual akhir Rp3.500/liter.',
      'Produk B Keju: produksi 1.500 liter, separable cost Rp600.000, bobot 4, harga jual akhir Rp9.000/liter.',
      'Produk C Yogurt: produksi 500 liter, separable cost Rp200.000, bobot 1, harga jual akhir Rp5.500/liter.'
    ],
    instructions: [
      'Hitung alokasi joint cost dengan metode unit produksi.',
      'Hitung biaya rata-rata per unit dan alokasinya.',
      'Hitung NRV tiap produk dan alokasi joint cost berbasis NRV.',
      'Hitung unit tertimbang dan alokasi joint cost weighted average.',
      'Bandingkan produk mana yang menerima alokasi terbesar pada tiap metode.'
    ],
    outputFormat: [
      'Tabel alokasi per metode.',
      'Perhitungan dasar alokasi.',
      'Kesimpulan perbandingan hasil alokasi.'
    ],
    rubric: [
      'Ketepatan dasar alokasi 30%.',
      'Ketepatan perhitungan alokasi 40%.',
      'Pembulatan dan total rekonsiliasi ke joint cost 15%.',
      'Interpretasi perbandingan metode 15%.'
    ],
    answerGuide: 'Unit produksi: total 4.000 liter, alokasi A Rp4.000.000, B Rp3.000.000, C Rp1.000.000. Biaya rata-rata per unit = Rp8.000.000/4.000 = Rp2.000/liter, sehingga hasilnya sama dengan metode unit produksi. NRV: A Rp6.600.000, B Rp12.900.000, C Rp2.550.000, total Rp22.050.000; alokasi A Rp2.394.558, B Rp4.680.272, C Rp925.170. Weighted units: A 4.000, B 6.000, C 500, total 10.500; alokasi A Rp3.047.619, B Rp4.571.429, C Rp380.952. Produk B menerima alokasi terbesar pada NRV dan weighted average, sedangkan metode unit produksi membebankan terbesar ke A karena unit A paling banyak.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 8',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'B6-2. Analisis perlakuan by-product dalam laporan laba rugi.',
    context: 'PT Nara menghasilkan produk utama dan by-product dari satu proses produksi. By-product memiliki nilai jual relatif kecil sehingga tidak diberi alokasi joint cost. Manajemen meminta penjelasan dampak penyajian pendapatan by-product.',
    data: [
      'Penjualan produk utama Rp80.000.000.',
      'Harga pokok penjualan produk utama sebelum pengurang Rp52.000.000.',
      'Pendapatan by-product Rp6.000.000.',
      'Beban pemasaran dan administrasi Rp10.000.000.',
      'Tidak ada separable cost by-product dalam soal.'
    ],
    instructions: [
      'Susun laba operasi jika by-product disajikan sebagai pendapatan lain-lain.',
      'Susun laba operasi jika by-product disajikan sebagai pengurang HPP.',
      'Jelaskan mengapa laba operasi akhir dapat sama tetapi struktur laporan berbeda.',
      'Jelaskan mengapa by-product tidak diperlakukan sama dengan joint product dalam kasus ini.'
    ],
    outputFormat: [
      'Dua format laporan laba ringkas.',
      'Penjelasan konsep by-product 1 paragraf.'
    ],
    rubric: [
      'Ketepatan format pendapatan lain-lain 25%.',
      'Ketepatan format pengurang HPP 25%.',
      'Perhitungan laba operasi 25%.',
      'Penjelasan konsep 25%.'
    ],
    answerGuide: 'Sebagai pendapatan lain-lain: penjualan 80.000.000 - HPP 52.000.000 = laba kotor 28.000.000; dikurangi beban 10.000.000 = laba operasi sebelum pendapatan lain-lain 18.000.000; ditambah pendapatan by-product 6.000.000 = laba 24.000.000. Sebagai pengurang HPP: HPP bersih = 52.000.000 - 6.000.000 = 46.000.000; laba kotor = 80.000.000 - 46.000.000 = 34.000.000; dikurangi beban 10.000.000 = laba operasi 24.000.000. Laba akhir sama, tetapi letak penyajian berbeda. By-product tidak menerima alokasi joint cost karena nilai jualnya relatif kecil dibanding produk utama.'
  },
  {
    type: 'analysis',
    scope: 'UAS · TM 8',
    difficulty: 'Dasar-Menengah',
    estimatedTime: '20–30 menit',
    question: 'B6-3. Tentukan keputusan menjual pada split-off atau memproses lebih lanjut.',
    context: 'PT Delta menghasilkan produk X dari proses bersama. Joint cost sudah terjadi sebelum produk X mencapai split-off point. Produk X dapat langsung dijual atau diproses lebih lanjut.',
    data: [
      'Harga jual pada split-off Rp40.000.000.',
      'Harga jual setelah proses lanjutan Rp55.000.000.',
      'Biaya proses lanjutan Rp12.000.000.',
      'Alokasi joint cost ke produk X Rp18.000.000.'
    ],
    instructions: [
      'Hitung incremental revenue dari proses lanjutan.',
      'Hitung incremental profit atau loss.',
      'Tentukan apakah produk X sebaiknya dijual pada split-off atau diproses lebih lanjut.',
      'Jelaskan mengapa alokasi joint cost tidak digunakan dalam keputusan ini.'
    ],
    outputFormat: [
      'Perhitungan incremental revenue.',
      'Perhitungan incremental profit/loss.',
      'Keputusan dan alasan.'
    ],
    rubric: [
      'Perhitungan incremental revenue 25%.',
      'Perhitungan incremental profit/loss 25%.',
      'Keputusan 25%.',
      'Penjelasan relevansi joint cost 25%.'
    ],
    answerGuide: 'Incremental revenue = Rp55.000.000 - Rp40.000.000 = Rp15.000.000. Incremental profit = Rp15.000.000 - Rp12.000.000 = Rp3.000.000. Produk X sebaiknya diproses lebih lanjut karena memberi tambahan laba Rp3.000.000. Alokasi joint cost Rp18.000.000 tidak relevan untuk keputusan karena sudah terjadi sebelum split-off dan tidak berubah oleh pilihan setelah split-off.'
  }
];


export const AKM201_BANK_BATCH7_MATERIALS: BankSoal[] = [
  {
    type: 'report',
    scope: 'UAS · TM 9',
    difficulty: 'Menengah',
    estimatedTime: '30–40 menit',
    question: 'B7-1. Susun laporan materials control PT Melati dan jurnal pemakaian bahan.',
    context: 'PT Melati ingin memastikan pemakaian bahan baku langsung dan bahan tidak langsung dicatat secara benar. Data pembelian dan persediaan harus dipisahkan dari bahan yang benar-benar masuk produksi.',
    data: [
      'Persediaan awal bahan baku Rp18.000.000.',
      'Pembelian bahan baku Rp96.000.000.',
      'Freight-in pembelian Rp4.000.000.',
      'Retur pembelian Rp3.000.000 dan diskon pembelian Rp1.000.000.',
      'Persediaan akhir bahan baku Rp22.000.000.',
      'Dari total bahan yang dipakai, bahan tidak langsung sebesar Rp6.000.000.'
    ],
    instructions: [
      'Hitung pembelian bersih bahan baku.',
      'Hitung bahan tersedia untuk dipakai.',
      'Hitung total bahan dipakai.',
      'Pisahkan bahan baku langsung dan bahan tidak langsung.',
      'Buat jurnal pemakaian bahan.'
    ],
    outputFormat: [
      'Laporan materials control ringkas.',
      'Perhitungan direct materials used dan indirect materials used.',
      'Jurnal umum pemakaian bahan.'
    ],
    rubric: [
      'Ketepatan pembelian bersih 20%.',
      'Ketepatan bahan tersedia dan bahan dipakai 25%.',
      'Pemisahan direct dan indirect materials 25%.',
      'Ketepatan jurnal 20%.',
      'Format laporan 10%.'
    ],
    answerGuide: 'Pembelian bersih = 96.000.000 + 4.000.000 - 3.000.000 - 1.000.000 = Rp96.000.000. Bahan tersedia = 18.000.000 + 96.000.000 = Rp114.000.000. Total bahan dipakai = 114.000.000 - 22.000.000 = Rp92.000.000. Bahan tidak langsung Rp6.000.000, sehingga bahan baku langsung Rp86.000.000. Jurnal: Dr Work in Process Rp86.000.000; Dr Factory Overhead Control Rp6.000.000; Cr Materials Inventory Rp92.000.000.'
  },
  {
    type: 'calculation',
    scope: 'UAS · TM 9',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'B7-2. Hitung EOQ/KPE, jumlah pesanan, dan reorder point PT Melati.',
    context: 'Manajemen PT Melati ingin menentukan kuantitas pemesanan ekonomis agar biaya pesan dan biaya simpan seimbang, sekaligus menentukan titik pemesanan kembali agar produksi tidak kehabisan bahan.',
    data: [
      'Kebutuhan tahunan 6.000 unit.',
      'Biaya pesan Rp65.000 per order.',
      'Harga bahan Rp15.600 per unit.',
      'Carrying cost 20% dari harga bahan per tahun.',
      'Kebutuhan harian 20 unit.',
      'Lead time 5 hari.',
      'Safety stock 40 unit.'
    ],
    instructions: [
      'Hitung carrying cost per unit per tahun.',
      'Hitung EOQ/KPE.',
      'Hitung jumlah pesanan per tahun.',
      'Hitung kebutuhan selama lead time.',
      'Hitung reorder point/TPK.'
    ],
    outputFormat: [
      'Tabel input dan formula.',
      'Perhitungan EOQ dan reorder point.',
      'Interpretasi keputusan pembelian.'
    ],
    rubric: [
      'Ketepatan carrying cost 20%.',
      'Ketepatan EOQ 30%.',
      'Ketepatan reorder point 30%.',
      'Interpretasi 20%.'
    ],
    answerGuide: 'Carrying cost = 20% × Rp15.600 = Rp3.120. EOQ = √((2 × 6.000 × 65.000) ÷ 3.120) = 500 unit. Jumlah pesanan per tahun = 6.000 ÷ 500 = 12 kali. Kebutuhan selama lead time = 20 × 5 = 100 unit. Reorder point = 100 + 40 = 140 unit. Artinya perusahaan mulai memesan kembali ketika saldo bahan mencapai 140 unit.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 9',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'B7-3. Analisis dokumen dan pengendalian internal bahan baku.',
    context: 'Dalam audit internal gudang PT Sakura, ditemukan bahwa staf pembelian juga menerima barang, mencatat kartu persediaan, dan menyetujui pembayaran vendor. Perusahaan sering mengalami selisih stok dan keterlambatan laporan bahan.',
    data: [
      'Pembelian bahan sering dilakukan tanpa purchase requisition dari bagian produksi.',
      'Receiving report kadang dibuat oleh bagian pembelian, bukan bagian penerimaan terpisah.',
      'Material requisition tidak selalu disetujui supervisor produksi.',
      'Material record card diperbarui hanya saat akhir bulan.',
      'Tidak ada batas minimum persediaan untuk bahan kelas A.'
    ],
    instructions: [
      'Identifikasi minimal empat kelemahan pengendalian internal.',
      'Jelaskan dokumen yang seharusnya digunakan pada setiap tahap.',
      'Berikan rekomendasi pemisahan fungsi pembelian, penerimaan, gudang, dan akuntansi.',
      'Jelaskan mengapa bahan kelas A perlu pengawasan lebih ketat.'
    ],
    outputFormat: [
      'Tabel temuan, risiko, dan rekomendasi.',
      'Penjelasan singkat alur dokumen bahan.',
      'Kesimpulan prioritas perbaikan.'
    ],
    rubric: [
      'Identifikasi kelemahan 30%.',
      'Ketepatan dokumen dan fungsi 30%.',
      'Rekomendasi pengendalian 25%.',
      'Kejelasan interpretasi 15%.'
    ],
    answerGuide: 'Kelemahan utama: pembelian tanpa purchase requisition, tidak ada pemisahan fungsi pembelian dan penerimaan, material requisition tanpa otorisasi, kartu bahan tidak perpetual, dan bahan kelas A tanpa batas minimum. Rekomendasi: purchase requisition dari produksi/gudang, purchase order oleh pembelian, receiving report oleh penerimaan independen, material requisition disetujui supervisor, material record card diperbarui setiap mutasi, dan bahan kelas A dikontrol dengan min-max/reorder point serta stock opname lebih sering.'
  }
];


export const AKM201_BANK_BATCH8_LABOR: BankSoal[] = [
  {
    type: 'calculation',
    scope: 'UAS · TM 10',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'B8-1. Hitung upah reguler, premi lembur, dan jurnal distribusi labor cost PT Semeru.',
    context: 'PT Semeru memiliki operator langsung yang bekerja melebihi jam normal. Sebagian lembur terjadi karena pesanan khusus pelanggan, sedangkan sisanya terjadi karena jadwal umum produksi.',
    data: [
      'Jam kerja operator langsung minggu ini 46 jam.',
      'Jam normal maksimum 40 jam.',
      'Tarif reguler Rp25.000 per jam.',
      'Tarif lembur Rp37.500 per jam.',
      'Dari 6 jam lembur, 4 jam disebabkan oleh pesanan khusus Job 510.',
      'Sisa 2 jam lembur disebabkan oleh jadwal umum produksi.'
    ],
    instructions: [
      'Hitung upah reguler untuk seluruh jam produksi pada tarif reguler.',
      'Hitung overtime premium total.',
      'Pisahkan premium lembur Job 510 dan premium lembur umum.',
      'Hitung gross payroll.',
      'Buat jurnal distribusi biaya tenaga kerja ke WIP, FOH-Control, dan Factory Payroll.'
    ],
    outputFormat: [
      'Tabel perhitungan regular wage dan overtime premium.',
      'Jurnal distribusi labor cost.',
      'Penjelasan singkat alasan premium khusus masuk WIP dan premium umum masuk FOH.'
    ],
    rubric: [
      'Ketepatan perhitungan upah reguler 20%.',
      'Ketepatan pemisahan overtime premium 30%.',
      'Ketepatan gross payroll 20%.',
      'Ketepatan jurnal 20%.',
      'Penjelasan konsep 10%.'
    ],
    answerGuide: 'Upah reguler = 46 × 25.000 = Rp1.150.000. Premium lembur = 6 × (37.500 − 25.000) = Rp75.000. Premium khusus Job 510 = 4 × 12.500 = Rp50.000 dan premium umum = 2 × 12.500 = Rp25.000. Gross payroll = Rp1.225.000. Jurnal distribusi: Dr Work in Process Rp1.200.000; Dr Factory Overhead Control Rp25.000; Cr Factory Payroll Rp1.225.000. WIP menerima upah reguler direct labor plus premium khusus job; FOH menerima premium umum.'
  },
  {
    type: 'journal',
    scope: 'UAS · TM 10',
    difficulty: 'Menengah',
    estimatedTime: '20–30 menit',
    question: 'B8-2. Susun labor cost distribution PT Nawasena.',
    context: 'PT Nawasena ingin memisahkan biaya tenaga kerja produksi langsung, produksi tidak langsung, pemasaran, dan administrasi agar laporan biaya produk tidak tercampur dengan period cost.',
    data: [
      'Direct labor operator produksi Rp80.000.000.',
      'Indirect labor mandor dan maintenance pabrik Rp15.000.000.',
      'Gaji bagian pemasaran Rp12.000.000.',
      'Gaji staf administrasi kantor pusat Rp10.000.000.',
      'Seluruh payroll sudah diakui sebelumnya dalam akun Factory Payroll dan Salary Payroll sesuai kebijakan perusahaan.'
    ],
    instructions: [
      'Klasifikasikan setiap komponen tenaga kerja.',
      'Tentukan akun debit yang tepat untuk setiap komponen.',
      'Buat jurnal distribusi ringkas.',
      'Jelaskan mengapa gaji pemasaran dan administrasi tidak masuk product cost.'
    ],
    outputFormat: [
      'Tabel klasifikasi labor cost.',
      'Jurnal distribusi biaya.',
      'Penjelasan product cost vs period cost.'
    ],
    rubric: [
      'Klasifikasi direct dan indirect labor 30%.',
      'Klasifikasi period cost 25%.',
      'Ketepatan jurnal 30%.',
      'Penjelasan konsep 15%.'
    ],
    answerGuide: 'Direct labor Rp80.000.000 didebit ke Work in Process. Indirect labor Rp15.000.000 didebit ke Factory Overhead Control. Gaji pemasaran Rp12.000.000 didebit ke Marketing Expense. Gaji administrasi Rp10.000.000 didebit ke Administrative Expense. Kredit payroll/payable total Rp117.000.000 sesuai akun penampung yang dipakai. Pemasaran dan administrasi adalah period cost karena tidak melekat pada produksi persediaan.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 10',
    difficulty: 'Dasar-Menengah',
    estimatedTime: '20–25 menit',
    question: 'B8-3. Analisis dokumen clock card, labor time ticket, dan payroll register.',
    context: 'Dalam review sistem tenaga kerja, PT Lestari menemukan bahwa jam hadir karyawan, jam yang dibebankan ke job, dan daftar gaji sering dicampur dalam satu dokumen sehingga pembebanan biaya ke pesanan sering salah.',
    data: [
      'Clock card hanya menunjukkan jam masuk dan jam pulang karyawan.',
      'Labor time ticket menunjukkan karyawan, job, aktivitas, dan jam kerja pada tiap job.',
      'Payroll register berisi gross payroll, potongan, dan gaji bersih.',
      'Labor cost distribution digunakan untuk membebankan biaya ke WIP, FOH, marketing, dan administrasi.'
    ],
    instructions: [
      'Jelaskan fungsi empat dokumen tersebut.',
      'Tentukan dokumen mana yang paling relevan untuk membebankan direct labor ke job.',
      'Jelaskan risiko jika clock card dipakai langsung sebagai dasar pembebanan job.',
      'Berikan rekomendasi alur dokumen yang lebih aman.'
    ],
    outputFormat: [
      'Tabel dokumen dan fungsi.',
      'Analisis risiko salah pembebanan.',
      'Rekomendasi alur kontrol tenaga kerja.'
    ],
    rubric: [
      'Ketepatan fungsi dokumen 40%.',
      'Ketepatan pemilihan dokumen direct labor 20%.',
      'Analisis risiko 20%.',
      'Rekomendasi kontrol 20%.'
    ],
    answerGuide: 'Clock card hanya membuktikan kehadiran. Labor time ticket adalah dokumen utama untuk membebankan direct labor ke job karena menunjukkan job dan jam yang dikerjakan. Payroll register meringkas gaji, potongan, dan gaji bersih. Labor cost distribution membebankan biaya ke WIP, FOH, marketing, dan administrasi. Jika clock card dipakai langsung untuk job, jam hadir bisa salah dibebankan karena belum tentu seluruh jam hadir dipakai untuk job tertentu.'
  }
];


export const AKM201_BANK_BATCH9_OVERHEAD: BankSoal[] = [
  {
    type: 'calculation',
    scope: 'UAS · TM 11',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'B9-1. Hitung tarif BOP, BOP dibebankan, dan selisih overhead PT Gama.',
    context: 'PT Gama menggunakan normal costing dan membebankan overhead pabrik berdasarkan jam mesin. Manajemen ingin mengetahui apakah overhead periode berjalan kurang atau lebih dibebankan.',
    data: [
      'Estimated factory overhead Rp360.000.000.',
      'Estimated machine hours 90.000 jam.',
      'Actual machine hours 86.000 jam.',
      'Actual factory overhead Rp352.500.000.',
      'Selisih overhead ditutup langsung ke Cost of Goods Sold.'
    ],
    instructions: [
      'Hitung predetermined factory overhead rate per jam mesin.',
      'Hitung applied factory overhead.',
      'Bandingkan actual FOH dan applied FOH.',
      'Tentukan status underapplied atau overapplied.',
      'Buat jurnal penutupan selisih overhead langsung ke Cost of Goods Sold.'
    ],
    outputFormat: [
      'Tabel perhitungan tarif, applied FOH, actual FOH, dan variance.',
      'Kesimpulan status selisih overhead.',
      'Jurnal penutupan overhead variance.'
    ],
    rubric: [
      'Ketepatan tarif overhead 20%.',
      'Ketepatan applied FOH 25%.',
      'Ketepatan variance dan status 30%.',
      'Ketepatan jurnal penutupan 15%.',
      'Kejelasan interpretasi 10%.'
    ],
    answerGuide: 'Predetermined FOH rate = Rp360.000.000 ÷ 90.000 jam = Rp4.000 per jam mesin. Applied FOH = Rp4.000 × 86.000 jam = Rp344.000.000. Actual FOH Rp352.500.000 lebih besar daripada applied FOH Rp344.000.000, sehingga underapplied FOH Rp8.500.000. Jika ditutup langsung ke COGS: Dr Cost of Goods Sold Rp8.500.000; Cr Factory Overhead Control Rp8.500.000.'
  },
  {
    type: 'journal',
    scope: 'UAS · TM 11',
    difficulty: 'Menengah',
    estimatedTime: '25–30 menit',
    question: 'B9-2. Susun jurnal actual FOH dan applied FOH PT Nirmala.',
    context: 'PT Nirmala mengumpulkan overhead aktual selama periode dan membebankan overhead ke produksi memakai tarif yang sudah ditentukan di muka.',
    data: [
      'Bahan tidak langsung dipakai Rp18.000.000.',
      'Tenaga kerja tidak langsung Rp24.000.000.',
      'Penyusutan mesin pabrik Rp30.000.000.',
      'Utilitas pabrik Rp12.000.000.',
      'Tarif BOP ditentukan di muka Rp7.500 per jam mesin.',
      'Jam mesin aktual 10.800 jam.'
    ],
    instructions: [
      'Hitung total actual FOH.',
      'Hitung applied FOH.',
      'Buat jurnal pengumpulan actual FOH secara ringkas.',
      'Buat jurnal pembebanan applied FOH ke Work in Process.',
      'Tentukan apakah terjadi underapplied atau overapplied sebelum penutupan.'
    ],
    outputFormat: [
      'Tabel actual FOH dan applied FOH.',
      'Jurnal actual FOH.',
      'Jurnal applied FOH.',
      'Kesimpulan selisih overhead.'
    ],
    rubric: [
      'Ketepatan total actual FOH 20%.',
      'Ketepatan applied FOH 20%.',
      'Ketepatan jurnal actual FOH 25%.',
      'Ketepatan jurnal applied FOH 25%.',
      'Kesimpulan variance 10%.'
    ],
    answerGuide: 'Actual FOH = 18.000.000 + 24.000.000 + 30.000.000 + 12.000.000 = Rp84.000.000. Applied FOH = Rp7.500 × 10.800 = Rp81.000.000. Jurnal actual FOH ringkas: Dr Factory Overhead Control Rp84.000.000; Cr Materials Inventory/Factory Payroll/Accumulated Depreciation/Cash or Payable Rp84.000.000. Jurnal applied FOH: Dr Work in Process Rp81.000.000; Cr Applied Factory Overhead Rp81.000.000. Karena actual lebih besar daripada applied, terjadi underapplied FOH Rp3.000.000.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 11',
    difficulty: 'Menengah',
    estimatedTime: '20–30 menit',
    question: 'B9-3. Evaluasi pemilihan dasar pembebanan overhead PT Laksana.',
    context: 'PT Laksana memproduksi dua produk. Produk A menggunakan banyak tenaga kerja langsung, sedangkan Produk B menggunakan mesin otomatis dan inspeksi teknis. Selama ini perusahaan memakai satu tarif overhead berdasarkan biaya tenaga kerja langsung.',
    data: [
      'Overhead pabrik meningkat karena depresiasi mesin otomatis, listrik mesin, maintenance, dan inspeksi kualitas.',
      'Produk A memakai 70% biaya tenaga kerja langsung tetapi hanya 30% jam mesin.',
      'Produk B memakai 30% biaya tenaga kerja langsung tetapi 70% jam mesin.',
      'Manajemen mengeluh biaya Produk A terlihat terlalu tinggi, sedangkan Produk B sering dijual dengan margin rendah.'
    ],
    instructions: [
      'Jelaskan kelemahan memakai satu tarif berbasis biaya tenaga kerja langsung.',
      'Tentukan dasar pembebanan yang lebih relevan untuk overhead yang dominan berbasis mesin.',
      'Jelaskan risiko distorsi biaya produk.',
      'Berikan rekomendasi apakah plantwide rate masih cukup atau perlu departmental rate/ABC sebagai pengembangan berikutnya.'
    ],
    outputFormat: [
      'Analisis kelemahan tarif lama.',
      'Rekomendasi dasar pembebanan overhead.',
      'Kesimpulan dampak pada Produk A dan Produk B.',
      'Saran pengembangan sistem biaya.'
    ],
    rubric: [
      'Ketepatan diagnosis dasar pembebanan 30%.',
      'Analisis distorsi biaya 30%.',
      'Rekomendasi tarif/departemen/ABC 25%.',
      'Kejelasan argumentasi 15%.'
    ],
    answerGuide: 'Satu tarif berbasis biaya tenaga kerja langsung berisiko salah karena overhead dominan berasal dari mesin, maintenance, listrik, depresiasi, dan inspeksi. Jam mesin lebih representatif untuk overhead yang mengikuti penggunaan mesin. Dengan tarif berbasis DL, Produk A dapat overcosted karena memakai banyak DL tetapi sedikit mesin, sedangkan Produk B dapat undercosted karena memakai banyak mesin tetapi sedikit DL. Rekomendasi minimal adalah mengganti dasar pembebanan menjadi jam mesin atau memakai departmental rate. Jika aktivitas semakin beragam, ABC dapat dipertimbangkan pada TM 13.'
  }
];


export const AKM201_BANK_BATCH10_DEPARTMENTALIZATION: BankSoal[] = [
  {
    type: 'calculation',
    scope: 'UAS · TM 12',
    difficulty: 'Menengah-Lanjut',
    estimatedTime: '30–40 menit',
    question: 'B10-1. Hitung alokasi service department PT Valora dengan direct method dan tarif overhead departemen.',
    context: 'PT Valora memiliki dua service department, yaitu Maintenance dan Power, serta dua producing department, yaitu Fabrication dan Finishing. Manajemen ingin membandingkan biaya produksi setelah biaya service department dialokasikan.',
    data: [
      'Overhead awal: Maintenance Rp240.000.000; Power Rp180.000.000; Fabrication Rp600.000.000; Finishing Rp420.000.000.',
      'Jam pemeliharaan dari Maintenance: Power 300 jam, Fabrication 900 jam, Finishing 600 jam.',
      'kWh dari Power: Maintenance 20.000 kWh, Fabrication 50.000 kWh, Finishing 30.000 kWh.',
      'Direct method mengabaikan jasa antar service department.',
      'Basis pembebanan setelah alokasi: Fabrication 57.100 jam mesin dan Finishing 29.175 jam tenaga kerja langsung.'
    ],
    instructions: [
      'Pisahkan service department dan producing department.',
      'Hitung alokasi Maintenance ke Fabrication dan Finishing dengan direct method.',
      'Hitung alokasi Power ke Fabrication dan Finishing dengan direct method.',
      'Hitung total overhead akhir Fabrication dan Finishing.',
      'Hitung tarif overhead departemen masing-masing producing department.'
    ],
    outputFormat: [
      'Tabel alokasi Maintenance dan Power.',
      'Tabel overhead akhir producing department.',
      'Tabel tarif overhead departemen.'
    ],
    rubric: [
      'Ketepatan rasio direct method 25%.',
      'Ketepatan alokasi service department 30%.',
      'Ketepatan total overhead akhir 20%.',
      'Ketepatan tarif overhead departemen 15%.',
      'Kontrol rekonsiliasi total 10%.'
    ],
    answerGuide: 'Maintenance direct method: Fabrication = 900/(900+600)×240.000.000 = Rp144.000.000; Finishing = Rp96.000.000. Power direct method: Fabrication = 50.000/(50.000+30.000)×180.000.000 = Rp112.500.000; Finishing = Rp67.500.000. Overhead akhir: Fabrication = 600.000.000 + 144.000.000 + 112.500.000 = Rp856.500.000; Finishing = 420.000.000 + 96.000.000 + 67.500.000 = Rp583.500.000. Tarif: Fabrication = 856.500.000/57.100 = Rp15.000 per jam mesin; Finishing = 583.500.000/29.175 = Rp20.000 per jam TKL.'
  },
  {
    type: 'calculation',
    scope: 'UAS · TM 12',
    difficulty: 'Lanjut',
    estimatedTime: '35–45 menit',
    question: 'B10-2. Bandingkan direct method dan step method PT Valora.',
    context: 'Manajemen PT Valora ingin mengetahui dampak pengakuan sebagian jasa antar service department terhadap biaya akhir producing department.',
    data: [
      'Gunakan data PT Valora yang sama dengan B10-1.',
      'Step method: Maintenance dialokasikan terlebih dahulu ke Power, Fabrication, dan Finishing.',
      'Setelah Maintenance ditutup, Power dialokasikan hanya ke Fabrication dan Finishing.',
      'Maintenance basis: Power 300 jam, Fabrication 900 jam, Finishing 600 jam.',
      'Power basis setelah Maintenance ditutup: Fabrication 50.000 kWh dan Finishing 30.000 kWh.'
    ],
    instructions: [
      'Hitung alokasi Maintenance dengan step method.',
      'Hitung biaya Power setelah menerima alokasi Maintenance.',
      'Alokasikan biaya Power baru ke Fabrication dan Finishing.',
      'Hitung overhead akhir Fabrication dan Finishing dengan step method.',
      'Bandingkan hasil akhir direct method dan step method.'
    ],
    outputFormat: [
      'Tabel tahap 1 alokasi Maintenance.',
      'Tabel tahap 2 alokasi Power.',
      'Tabel overhead akhir step method.',
      'Analisis singkat perbedaan direct dan step method.'
    ],
    rubric: [
      'Ketepatan alokasi Maintenance 25%.',
      'Ketepatan biaya Power revisi 20%.',
      'Ketepatan alokasi Power 25%.',
      'Ketepatan total akhir 20%.',
      'Analisis metode 10%.'
    ],
    answerGuide: 'Step method: Maintenance total basis = 300+900+600 = 1.800 jam. Alokasi Maintenance: Power Rp40.000.000; Fabrication Rp120.000.000; Finishing Rp80.000.000. Biaya Power revisi = 180.000.000 + 40.000.000 = Rp220.000.000. Power dialokasikan ke Fabrication = 50.000/(50.000+30.000)×220.000.000 = Rp137.500.000; Finishing = Rp82.500.000. Overhead akhir step method: Fabrication = 600.000.000 + 120.000.000 + 137.500.000 = Rp857.500.000; Finishing = 420.000.000 + 80.000.000 + 82.500.000 = Rp582.500.000. Direct method menghasilkan Fabrication Rp856.500.000 dan Finishing Rp583.500.000. Total tetap Rp1.440.000.000, tetapi distribusinya berbeda.'
  },
  {
    type: 'journal',
    scope: 'UAS · TM 12',
    difficulty: 'Menengah',
    estimatedTime: '20–30 menit',
    question: 'B10-3. Susun jurnal applied FOH departemental Job V-21.',
    context: 'Setelah service department cost dialokasikan dengan direct method, PT Valora memakai tarif overhead departemen untuk membebankan overhead ke job.',
    data: [
      'Tarif overhead Fabrication Rp15.000 per jam mesin.',
      'Tarif overhead Finishing Rp20.000 per jam tenaga kerja langsung.',
      'Job V-21 menggunakan 120 jam mesin di Fabrication.',
      'Job V-21 menggunakan 40 jam tenaga kerja langsung di Finishing.',
      'Perusahaan memakai akun Applied Factory Overhead terpisah per departemen.'
    ],
    instructions: [
      'Hitung applied FOH Fabrication untuk Job V-21.',
      'Hitung applied FOH Finishing untuk Job V-21.',
      'Hitung total applied FOH.',
      'Buat jurnal pembebanan overhead ke Work in Process.',
      'Jelaskan mengapa applied FOH menggunakan tarif departemen, bukan actual FOH.'
    ],
    outputFormat: [
      'Perhitungan applied FOH per departemen.',
      'Jurnal pembebanan overhead departemental.',
      'Penjelasan normal costing.'
    ],
    rubric: [
      'Ketepatan applied FOH Fabrication 25%.',
      'Ketepatan applied FOH Finishing 25%.',
      'Ketepatan jurnal 30%.',
      'Penjelasan konsep 20%.'
    ],
    answerGuide: 'Applied FOH Fabrication = 120 × Rp15.000 = Rp1.800.000. Applied FOH Finishing = 40 × Rp20.000 = Rp800.000. Total applied FOH = Rp2.600.000. Jurnal: Dr Work in Process Rp2.600.000; Cr Applied Factory Overhead - Fabrication Rp1.800.000; Cr Applied Factory Overhead - Finishing Rp800.000. Applied FOH menggunakan tarif departemen karena normal costing membebankan overhead selama periode berjalan berdasarkan tarif yang sudah ditentukan sebelumnya.'
  }
];


export const AKM201_BANK_BATCH11_ABC: BankSoal[] = [
  {
    type: 'calculation',
    scope: 'UAS · TM 13',
    difficulty: 'Menengah-Lanjut',
    estimatedTime: '35–45 menit',
    question: 'B11-1. Bandingkan traditional costing dan Activity Based Costing PT Aksara.',
    context: 'PT Aksara memproduksi Reguler dan Custom. Perusahaan memakai satu tarif overhead berbasis direct labor hours, tetapi manajemen ingin mengecek apakah produk Custom selama ini undercosted karena mengonsumsi banyak setup, inspeksi, dan perubahan desain.',
    data: [
      'Reguler: 10.000 unit, DM Rp120.000.000, DL Rp80.000.000, direct labor hours 8.000, machine hours 5.000, setup 20, inspeksi 30, design changes 5.',
      'Custom: 1.000 unit, DM Rp35.000.000, DL Rp25.000.000, direct labor hours 2.000, machine hours 3.000, setup 40, inspeksi 70, design changes 15.',
      'Activity cost pools: machine operation Rp96.000.000 untuk 8.000 machine hours; setup Rp90.000.000 untuk 60 setup; inspection Rp60.000.000 untuk 100 inspeksi; product design Rp80.000.000 untuk 20 design changes.',
      'Total FOH Rp326.000.000. Sistem tradisional memakai direct labor hours.'
    ],
    instructions: [
      'Hitung plantwide overhead rate berbasis direct labor hours.',
      'Hitung FOH tradisional dan kos per unit tradisional untuk Reguler dan Custom.',
      'Hitung activity rate untuk setiap cost pool.',
      'Hitung FOH ABC dan kos per unit ABC untuk setiap produk.',
      'Tentukan produk yang overcosted dan undercosted dalam sistem tradisional.'
    ],
    outputFormat: [
      'Tabel tarif tradisional dan tarif aktivitas.',
      'Tabel pembebanan FOH tradisional.',
      'Tabel pembebanan FOH ABC.',
      'Tabel kos per unit dan analisis distorsi.'
    ],
    rubric: [
      'Ketepatan plantwide rate 15%.',
      'Ketepatan activity rate 25%.',
      'Ketepatan FOH ABC 25%.',
      'Ketepatan unit cost 20%.',
      'Analisis overcosted/undercosted 15%.'
    ],
    answerGuide: 'Plantwide rate = Rp326.000.000/10.000 DLH = Rp32.600 per DLH. FOH tradisional: Reguler Rp260.800.000 dan Custom Rp65.200.000. Activity rate: machine Rp12.000 per MH, setup Rp1.500.000 per setup, inspection Rp600.000 per inspeksi, design Rp4.000.000 per design change. FOH ABC Reguler = 60.000.000 + 30.000.000 + 18.000.000 + 20.000.000 = Rp128.000.000. FOH ABC Custom = 36.000.000 + 60.000.000 + 42.000.000 + 60.000.000 = Rp198.000.000. Unit cost tradisional: Reguler Rp46.080 dan Custom Rp125.200. Unit cost ABC: Reguler Rp32.800 dan Custom Rp258.000. Reguler overcosted dalam sistem tradisional; Custom undercosted.'
  },
  {
    type: 'case',
    scope: 'UAS · TM 13',
    difficulty: 'Menengah',
    estimatedTime: '25–35 menit',
    question: 'B11-2. Analisis hierarchy of activities dan cost driver dalam sistem ABC.',
    context: 'Manajer produksi meminta Anda menyusun rancangan ABC awal untuk perusahaan dengan produk standar dan produk pesanan khusus. Perusahaan memiliki aktivitas operasi mesin, setup, inspeksi, perubahan desain, penerangan pabrik, dan keamanan pabrik.',
    data: [
      'Machine operation meningkat seiring pemakaian machine hours.',
      'Setup terjadi setiap kali batch baru disiapkan.',
      'Inspection dilakukan per batch dan lebih banyak pada produk khusus.',
      'Design change muncul untuk mendukung jenis produk tertentu.',
      'Lighting dan security mendukung fasilitas pabrik secara umum.'
    ],
    instructions: [
      'Klasifikasikan setiap aktivitas ke unit-level, batch-level, product-level, atau facility-level.',
      'Tentukan activity driver yang paling masuk akal untuk setiap aktivitas.',
      'Jelaskan mengapa satu plantwide rate dapat mendistorsi kos produk khusus.',
      'Jelaskan bagaimana ABC membantu manajemen mengambil keputusan harga atau lini produk.'
    ],
    outputFormat: [
      'Tabel aktivitas, level aktivitas, dan driver.',
      'Analisis singkat risiko plantwide rate.',
      'Rekomendasi penggunaan informasi ABC.'
    ],
    rubric: [
      'Ketepatan klasifikasi aktivitas 35%.',
      'Ketepatan driver 25%.',
      'Analisis distorsi biaya 25%.',
      'Kejelasan rekomendasi manajerial 15%.'
    ],
    answerGuide: 'Machine operation dapat diklasifikasikan unit-level dengan driver machine hours. Setup dan inspection umumnya batch-level dengan driver jumlah setup atau jumlah inspeksi. Design change adalah product-level dengan driver jumlah perubahan desain. Lighting dan security adalah facility-level dengan driver luas area atau dasar alokasi fasilitas lain. Plantwide rate mendistorsi kos ketika produk khusus memakai banyak aktivitas non-volume tetapi hanya sedikit unit atau DLH. ABC membantu harga jual, evaluasi profitabilitas produk, dan pengurangan aktivitas tidak bernilai tambah.'
  },
  {
    type: 'calculation',
    scope: 'UAS · TM 13',
    difficulty: 'Lanjut',
    estimatedTime: '30–40 menit',
    question: 'B11-3. Susun laporan Activity Based Costing dan rekomendasi ABM PT Nirmala.',
    context: 'PT Nirmala ingin menggunakan informasi ABC untuk Activity Based Management. Dua produk menggunakan tiga aktivitas utama: setup, order processing, dan inspection.',
    data: [
      'Produk Alpha: 4.000 unit, DM Rp72.000.000, DL Rp48.000.000, setup 12, order 80, inspeksi 30.',
      'Produk Beta: 800 unit, DM Rp28.000.000, DL Rp20.000.000, setup 28, order 120, inspeksi 70.',
      'Setup cost Rp60.000.000 untuk 40 setup.',
      'Order processing cost Rp40.000.000 untuk 200 order.',
      'Inspection cost Rp50.000.000 untuk 100 inspeksi.'
    ],
    instructions: [
      'Hitung activity rate setup, order processing, dan inspection.',
      'Hitung FOH ABC untuk Alpha dan Beta.',
      'Hitung total kos produk dan kos per unit masing-masing produk.',
      'Berikan rekomendasi ABM untuk mengurangi aktivitas mahal.'
    ],
    outputFormat: [
      'Tabel activity rate.',
      'Tabel FOH ABC per produk.',
      'Tabel total kos dan kos per unit.',
      'Rekomendasi ABM.'
    ],
    rubric: [
      'Ketepatan activity rate 25%.',
      'Ketepatan FOH ABC 30%.',
      'Ketepatan unit cost 25%.',
      'Kualitas rekomendasi ABM 20%.'
    ],
    answerGuide: 'Activity rate: setup Rp1.500.000 per setup, order processing Rp200.000 per order, inspection Rp500.000 per inspeksi. FOH Alpha = 12×1.500.000 + 80×200.000 + 30×500.000 = Rp49.000.000. FOH Beta = 28×1.500.000 + 120×200.000 + 70×500.000 = Rp101.000.000. Total kos Alpha = 72.000.000 + 48.000.000 + 49.000.000 = Rp169.000.000; kos/unit Alpha = Rp42.250. Total kos Beta = 28.000.000 + 20.000.000 + 101.000.000 = Rp149.000.000; kos/unit Beta = Rp186.250. Rekomendasi ABM: kurangi setup melalui batch planning, sederhanakan order processing, dan tingkatkan kualitas proses agar inspeksi berkurang.'
  }
];

export const AKM201_BANK: BankSoal[] = [...AKM201_BANK_BATCH11_ABC, ...AKM201_BANK_BATCH10_DEPARTMENTALIZATION, ...AKM201_BANK_BATCH9_OVERHEAD, ...AKM201_BANK_BATCH8_LABOR, ...AKM201_BANK_BATCH7_MATERIALS, ...AKM201_BANK_BATCH6_JOINT_COST, ...AKM201_BANK_BATCH5_QUALITY_LOSS, ...AKM201_BANK_BATCH4_PROCESS_COSTING, ...AKM201_BANK_BATCH3_JOB_ORDER, ...AKM201_BANK_UTS, ...AKM201_BANK_UAS];
