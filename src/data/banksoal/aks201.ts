// src/data/banksoal/aks201.ts
// Bank Soal Esai & Studi Kasus Akuntansi Sektor Publik (AKS201)
// Berdasarkan PP 71/2010 (SAP Akrual), Permendagri 77/2020, ISAK 35, & Mardiasmo/Nordiawan
// 14 Kasus Lengkap: 7 Kasus Pra-UTS (TM 1–7) & 7 Kasus Pra-UAS (TM 8–14)
import type { BankSoal } from '../../types';

export const AKS201_BANK_UTS: BankSoal[] = [
  {
    "type": "analysis",
    "scope": "TM 1: Karakteristik Sektor Publik & Dimensi Akuntabilitas",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Evaluasi 4 Dimensi Akuntabilitas Publik pada Pelaksanaan Program Bantuan Sosial Daerah",
    "context": "Pemerintah Kota Mandiri meluncurkan Program Bantuan Pangan Daerah senilai Rp 15 miliar untuk 30.000 keluarga prasejahtera. Dalam pelaksanaannya, Ombudsman dan Inspektorat Daerah menemukan sejumlah masalah: (1) Terjadi keterlambatan penyaluran selama 3 bulan karena petunjuk teknis lambat disahkan Kepala Daerah; (2) Ditemukan 2.500 paket bantuan beras berkualitas buruk yang tidak sesuai spesifikasi kontrak lelang; (3) Terdapat 1.200 penerima ganda akibat data DTKS tidak diverifikasi faktual; dan (4) Warga mengeluhkan bantuan diserahkan dengan stiker promosi petahana menjelang pilkada. Komisi A DPRD memanggil Kepala Dinas Sosial untuk audit akuntabilitas publik.",
    "data": [
      "Total Alokasi Anggaran: Rp 15.000.000.000 (30.000 KPM @ Rp 500.000/paket).",
      "Temuan Lapangan: Keterlambatan distribusi 3 bulan, 2.500 paket beras sub-standar, 1.200 data penerima ganda/anomali, politisasi stiker kampanye.",
      "Kerangka Acuan: Empat Dimensi Akuntabilitas Publik Hopwood (Akuntabilitas Kejujuran & Hukum, Proses, Program, dan Kebijakan) — Mardiasmo Bab 1."
    ],
    "instructions": [
      "Petakan dan analisis temuan-temuan di atas ke dalam Empat Dimensi Akuntabilitas Publik (Akuntabilitas Kejujuran/Hukum, Proses, Program, dan Kebijakan).",
      "Jelaskan mengapa akuntabilitas pada sektor publik tidak cukup hanya dinilai dari terserapnya anggaran kas 100% di akhir tahun.",
      "Susun 3 rekomendasi konkret bagi Kepala Dinas Sosial dan Inspektorat untuk memulihkan akuntabilitas dan kepercayaan masyarakat."
    ],
    "outputFormat": [
      "Matriks Pemetaan 4 Dimensi Akuntabilitas Publik",
      "Analisis Keterbatasan Penyerapan Anggaran Formal",
      "Rencana Aksi Korektif Tata Kelola Bansos"
    ],
    "rubric": [
      "Ketepatan pemetaan temuan ke dalam 4 dimensi akuntabilitas (35%)",
      "Kedalaman analisis perbedaan penyerapan anggaran vs akuntabilitas substansial (30%)",
      "Kualitas dan aplikabilitas rekomendasi perbaikan tata kelola (35%)"
    ],
    "answerGuide": "1. Pemetaan Empat Dimensi Akuntabilitas Publik:\n• Akuntabilitas Kejujuran dan Hukum (Probity & Legal Accountability): Pelanggaran spesifikasi beras (potensi tindak pidana korupsi/fraud pengadaan) dan politisasi bansos dengan stiker kampanye melanggar asas netralitas aparatur dan UU Pemilu.\n• Akuntabilitas Proses (Process Accountability): Kelemahan verifikasi data DTKS (1.200 penerima ganda) dan lambatnya penerbitan petunjuk teknis mencerminkan buruknya Standard Operating Procedures (SOP) dan lemahnya sistem pengendalian intern (SPI).\n• Akuntabilitas Program (Program Accountability): Bantuan pangan berkualitas buruk gagal memberikan asupan gizi layak bagi penerima, sehingga target efektivitas program tidak tercapai optimal.\n• Akuntabilitas Kebijakan (Policy Accountability): Kebijakan penyaluran bantuan langsung pangan perlu dievaluasi apakah lebih efektif dibandingkan program pemberdayaan ekonomi atau bantuan tunai bersyarat.\n\n2. Keterbatasan Tolok Ukur Penyerapan Anggaran:\n• Penyerapan anggaran 100% hanya mengukur kepatuhan administratif pencairan uang kas (input), tetapi buta terhadap mutu barang yang dibeli, ketepatan sasaran penerima, dan hasil nyata bagi masyarakat.\n• Anggaran dapat terserap sempurna melalui penggelembungan harga atau pengadaan barang cacat tanpa menghasilkan nilai publik (public value).\n\n3. Rekomendasi Perbaikan Tata Kelola:\n• Digitalisasi Data Bansos: Integrasikan data penerima secara real-time dengan NIK Dukcapil berbasis biometrik untuk mengeliminasi penerima fiktif dan ganda.\n• Penguatan Pengawasan APIP: Wajibkan Inspektorat melakukan audit probity (probity audit) sejak tahap penyusunan HPS dan uji laboratorium acak mutu beras sebelum serah terima barang (PHO).\n• Saluran Pengaduan Masyarakat (WBS/SP4N-LAPOR!): Buka posko pengaduan independen yang dapat diakses warga secara anonim untuk melaporkan pungutan liar dan penurunan kualitas bantuan."
  },
  {
    "type": "journal",
    "scope": "TM 2: Akuntansi Nirlaba Non-Pemerintah (ISAK 35)",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 2: Siklus Akuntansi Entitas Nirlaba Berdasarkan ISAK 35: Penerimaan Hibah Terikat dan Reklasifikasi Aset Neto",
    "context": "Yayasan Bina Harapan Mandiri (organisasi nonlaba pendidikan) pada tahun 2025 melaksanakan transaksi berikut:\n1. Tanggal 15 Januari: Menerima sumbangan dana tunai dari donor internasional sebesar Rp 800.000.000 yang dibatasi penggunaannya secara spesifik untuk pembangunan laboratorium komputer sekolah vokasi.\n2. Tanggal 20 Februari: Menerima sumbangan operasional tunai tanpa pembatasan dari masyarakat umum sebesar Rp 250.000.000.\n3. Tanggal 10 Juni: Membayar biaya kontraktor pembangunan fisik gedung laboratorium komputer sebesar Rp 600.000.000 secara tunai, dan laboratorium tersebut resmi selesai serta mulai digunakan.\n4. Tanggal 15 Juli: Membayar beban gaji guru dan operasional kantor yayasan sebesar Rp 180.000.000.",
    "data": [
      "Transaksi 1 (15 Jan): Kas masuk Rp 800.000.000 (Terikat: Pembangunan Lab Komputer).",
      "Transaksi 2 (20 Feb): Kas masuk Rp 250.000.000 (Tanpa Pembatasan).",
      "Transaksi 3 (10 Jun): Belanja modal lab komputer Rp 600.000.000 tunai; Lab selesai digunakan.",
      "Transaksi 4 (15 Jul): Beban gaji dan operasional Rp 180.000.000 tunai.",
      "Standar Acuan: ISAK 35 Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba."
    ],
    "instructions": [
      "Susun ayat jurnal untuk mencatat Transaksi 1 dan Transaksi 2 pada pembukuan Yayasan.",
      "Susun ayat jurnal untuk mencatat Transaksi 3, termasuk pengakuan aset tetap dan jurnal reklasifikasi aset neto karena terpenuhinya pembatasan donor.",
      "Susun ayat jurnal untuk mencatat Transaksi 4.",
      "Sajikan ringkasan saldo akhir akun Kas, Aset Tetap, Aset Neto Tanpa Pembatasan, dan Aset Neto Dengan Pembatasan pada Laporan Posisi Keuangan."
    ],
    "outputFormat": [
      "Daftar Ayat Jurnal Lengkap (Debet & Kredit)",
      "Penjelasan Mekanisme Jurnal Reklasifikasi ISAK 35",
      "Tabel Ringkasan Saldo Posisi Keuangan Pasca-Transaksi"
    ],
    "rubric": [
      "Ketepatan pencatatan jurnal penerimaan sumbangan terikat vs tidak terikat (30%)",
      "Akurasi jurnal perolehan aset tetap dan jurnal reklasifikasi aset neto (35%)",
      "Kebenaran pencatatan beban operasional (15%)",
      "Ketepatan kalkulasi saldo akhir posisi keuangan (20%)"
    ],
    "answerGuide": "1. Jurnal Transaksi 1 dan 2:\n• 15 Jan (Penerimaan Hibah Terikat Lab):\n  (D) Kas ................................................. Rp 800.000.000\n      (K) Pendapatan Sumbangan - Dengan Pembatasan ..... Rp 800.000.000\n• 20 Feb (Penerimaan Sumbangan Bebas):\n  (D) Kas ................................................. Rp 250.000.000\n      (K) Pendapatan Sumbangan - Tanpa Pembatasan ....... Rp 250.000.000\n\n2. Jurnal Transaksi 3 (Pengadaan Lab & Reklasifikasi):\n• 10 Jun (Pencatatan Perolehan Gedung/Aset Tetap):\n  (D) Aset Tetap - Gedung Lab Komputer .................... Rp 600.000.000\n      (K) Kas ................................................. Rp 600.000.000\n• 10 Jun (Jurnal Reklasifikasi Pemenuhan Syarat Pembatasan):\n  (D) Aset Neto Berkurang Melalui Pemenuhan Pembatasan ... Rp 600.000.000\n      (K) Aset Neto Dibebaskan dari Pembatasan ........... Rp 600.000.000\n  (Catatan: Pada Laporan Penghasilan Komprehensif, pos ini memindahkan Rp 600 juta dari kelompok 'Dengan Pembatasan' ke kelompok 'Tanpa Pembatasan' karena aset telah selesai dibangun dan digunakan).\n\n3. Jurnal Transaksi 4 (Beban Operasional):\n• 15 Jul (Beban Operasional Tanpa Pembatasan):\n  (D) Beban Gaji & Operasional ............................ Rp 180.000.000\n      (K) Kas ................................................. Rp 180.000.000\n\n4. Ringkasan Saldo Akhir Neraca / Laporan Posisi Keuangan:\n• Saldo Kas = Penerimaan (800M + 250M) - Pengeluaran (600M + 180M) = Rp 1.050.000.000 - Rp 780.000.000 = Rp 270.000.000.\n• Saldo Aset Tetap = Rp 600.000.000.\n• Total Aset = Rp 270.000.000 + Rp 600.000.000 = Rp 870.000.000.\n• Aset Neto Dengan Pembatasan (Sisa dana lab yang belum terpakai) = Rp 800.000.000 - Rp 600.000.000 = Rp 200.000.000.\n• Aset Neto Tanpa Pembatasan = Pendapatan Bebas (250M) + Reklasifikasi Masuk (600M) - Beban Operasional (180M) = Rp 670.000.000.\n• Total Liabilitas dan Aset Neto = Rp 200.000.000 + Rp 670.000.000 = Rp 870.000.000 (Balance seimbang sempurna)."
  },
  {
    "type": "calculation",
    "scope": "TM 3: Regulasi Keuangan Negara & Batas Ambang Fiskal UU 17/2003",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 3: Analisis Batas Ambang Defisit Anggaran dan Batas Maksimal Pinjaman Daerah Berdasarkan UU 17/2003",
    "context": "Pemerintah Provinsi Cemerlang merancang RAPBD Tahun Anggaran 2026. Produk Domestik Regional Bruto (PDRB) provinsi tersebut tercatat sebesar Rp 120.000.000.000.000. Rencana Pendapatan Daerah ditargetkan Rp 14.000.000.000.000 dan Rencana Belanja Daerah dianggarkan sebesar Rp 17.500.000.000.000. Untuk menutup selisih defisit belanja tersebut, Tim Anggaran Pemerintah Daerah (TAPD) mengusulkan penerbitan Obligasi Daerah (Municipal Bonds) senilai Rp 3.500.000.000.000. Saat ini, sisa saldo utang pinjaman daerah masa lalu yang belum lunas adalah Rp 1.500.000.000.000. DPRD meminta pendapat ahli keuangan publik untuk menguji kepatuhan terhadap regulasi perundang-undangan.",
    "data": [
      "PDRB Provinsi: Rp 120.000.000.000.000 (Rp 120 triliun).",
      "Target Pendapatan Daerah: Rp 14.000.000.000.000 (Rp 14 triliun).",
      "Rencana Belanja Daerah: Rp 17.500.000.000.000 (Rp 17,5 triliun).",
      "Defisit Anggaran yang Direncanakan: Rp 3.500.000.000.000 (Rp 3,5 triliun).",
      "Rencana Pinjaman Baru: Rp 3.500.000.000.000.",
      "Saldo Utang Lama Eksisting: Rp 1.500.000.000.000 (Rp 1,5 triliun).",
      "Batas Ambang Regulasi: UU No. 17 Tahun 2003 dan PP No. 56 Tahun 2018 tentang Pinjaman Daerah (Batas defisit kumulatif dan Debt Service Coverage Ratio / DSCR minimal 2,5 kali)."
    ],
    "instructions": [
      "Hitung persentase defisit anggaran RAPBD terhadap PDRB Provinsi. Bandingkan dengan batas ambang maksimal 3% yang diatur dalam UU No. 17 Tahun 2003. Apakah defisit tersebut legal?",
      "Hitung total kumulatif utang daerah jika pinjaman baru disetujui, dan hitung persentasenya terhadap PDRB. Bandingkan dengan batas maksimal 60% PDB/PDRB.",
      "Jika diketahui proyeksi Pendapatan Asli Daerah (PAD) dan Dana Bagi Hasil (DBH) yang dapat digunakan untuk membayar cicilan utang adalah Rp 2.000.000.000.000/tahun dan total kewajiban pokok + bunga pinjaman tahunan adalah Rp 900.000.000.000, hitung Debt Service Coverage Ratio (DSCR). Apakah daerah memenuhi syarat kelayakan pinjaman (DSCR ≥ 2,5)?",
      "Susun kesimpulan dan rekomendasi penyesuaian bagi Gubernur dan TAPD."
    ],
    "outputFormat": [
      "Analisis Batas Defisit terhadap PDRB",
      "Analisis Batas Kumulatif Utang Daerah",
      "Kalkulasi Kelayakan Finansial DSCR Pinjaman",
      "Rekomendasi Kebijakan Fiskal"
    ],
    "rubric": [
      "Ketepatan perhitungan rasio defisit terhadap PDRB (30%)",
      "Akurasi perhitungan rasio utang kumulatif (20%)",
      "Ketepatan kalkulasi dan interpretasi DSCR (30%)",
      "Ketajaman rekomendasi penyesuaian postur APBD (20%)"
    ],
    "answerGuide": "1. Analisis Batas Defisit Anggaran:\n• Defisit Anggaran = Belanja Daerah - Pendapatan Daerah = Rp 17,5 T - Rp 14,0 T = Rp 3,5 triliun.\n• Rasio Defisit terhadap PDRB = (Rp 3,5 triliun / Rp 120 triliun) × 100% = 2,92%.\n• Kesimpulan: Rasio 2,92% masih berada di bawah batas ambang legal maksimal 3,00% yang diatur dalam UU No. 17/2003 Pasal 12. Dari sisi batas PDRB murni, defisit ini memenuhi syarat batas atas, namun berada di zona sangat berisiko (hanya berjarak 0,08% dari batas pelanggaran hukum).\n\n2. Analisis Batas Kumulatif Utang Daerah:\n• Total Utang Pasca Pinjaman Baru = Utang Lama (Rp 1,5 T) + Pinjaman Baru (Rp 3,5 T) = Rp 5,0 triliun.\n• Rasio Kumulatif Utang terhadap PDRB = (Rp 5,0 triliun / Rp 120 triliun) × 100% = 4,17%.\n• Batas maksimal nasional adalah 60% PDB/PDRB. Dengan demikian, rasio 4,17% masih sangat aman dari batas plafon 60%.\n\n3. Kalkulasi Debt Service Coverage Ratio (DSCR):\n• DSCR = Pendapatan Bersih Tersedia untuk Membayar Utang / Total Kewajiban Angsuran Pokok + Bunga\n• DSCR = Rp 2.000.000.000.000 / Rp 900.000.000.000 = 2,22 kali.\n• Regulasi PP No. 56/2018 menetapkan syarat batas minimal DSCR adalah 2,50 kali.\n• Evaluasi: Karena DSCR (2,22 kali) < 2,50 kali, maka Provinsi Cemerlang TIDAK MEMENUHI SYARAT KELAYAKAN untuk menerbitkan pinjaman sebesar Rp 3,5 triliun. Kemampuan fiskal daerah dinilai rentan gagal bayar dalam melayani cicilan utang tahunan.\n\n4. Rekomendasi Kebijakan:\n• Pangkas Belanja Kurang Prioritas: TAPD harus merasionalisasi belanja operasi (seperti perjalanan dinas dan seremonial) minimal sebesar Rp 500 miliar - Rp 1 triliun untuk memperkecil defisit.\n• Turunkan Nilai Pinjaman: Kurangi pengajuan pinjaman baru menjadi maksimal Rp 2,2 triliun agar beban angsuran tahunan turun di bawah Rp 800 miliar sehingga DSCR naik kembali di atas 2,50 kali.\n• Optimalkan Pendapatan Asli Daerah (PAD) melalui intensifikasi retribusi dan digitalisasi pajak daerah."
  },
  {
    "type": "analysis",
    "scope": "TM 4: Penganggaran APBD & Evaluasi Belanja Permendagri 77/2020",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 4: Evaluasi Struktur Postur APBD Berdasarkan Permendagri 77/2020 dan Analisis Keseimbangan Fiskal",
    "context": "Dalam penyusunan KUA-PPAS Kabupaten Berdikari Tahun Anggaran 2026, Badan Pengelola Keuangan dan Aset Daerah (BPKAD) menyajikan rancangan struktur APBD sebagai berikut:\n• Pendapatan Asli Daerah (PAD): Rp 300 miliar\n• Pendapatan Transfer (Dana Bagi Hasil, DAU, DAK): Rp 1.500 miliar\n• Lain-lain Pendapatan Daerah yang Sah: Rp 100 miliar\n• Belanja Operasi: Rp 1.400 miliar (terdiri dari Belanja Pegawai Rp 950 miliar, Barang/Jasa Rp 350 miliar, Hibah/Bansos Rp 100 miliar)\n• Belanja Modal: Rp 450 miliar\n• Belanja Tidak Terduga (BTT): Rp 50 miliar\n• Belanja Transfer (Bagi Hasil Desa): Rp 150 miliar\n• Penerimaan Pembiayaan (Estimasi SiLPA): Rp 200 miliar\n• Pengeluaran Pembiayaan (Penyertaan Modal BUMD): Rp 50 miliar",
    "data": [
      "Total Pendapatan: Rp 300 M + Rp 1.500 M + Rp 100 M = Rp 1.900 miliar.",
      "Total Belanja: Rp 1.400 M + Rp 450 M + Rp 50 M + Rp 150 M = Rp 2.050 miliar.",
      "Pembiayaan: Penerimaan Rp 200 M, Pengeluaran Rp 50 M.",
      "Ketentuan Regulasi Wajib (Mandatory Spending):\n  - Batas Belanja Pegawai maksimal 30% dari Total Belanja APBD (UU No. 1 Tahun 2022 tentang HKPD).\n  - Alokasi Belanja Infrastruktur Pelayanan Publik minimal 40% dari Total Belanja APBD di luar belanja pegawai dan bagi hasil desa."
    ],
    "instructions": [
      "Hitung Surplus atau Defisit Anggaran APBD Kabupaten Berdikari.",
      "Hitung Pembiayaan Netto dan buktikan apakah Sisa Lebih Pembiayaan Anggaran Tahun Berkenaan (SiLPA akhir) berada pada posisi berimbang (nihil).",
      "Hitung persentase Belanja Pegawai terhadap Total Belanja APBD. Evaluasi apakah telah mematuhi batas maksimal 30% sesuai UU HKPD No. 1/2022.",
      "Hitung rasio Derajat Desentralisasi Fiskal (PAD / Total Pendapatan). Jelaskan tingkat kemandirian keuangan Kabupaten Berdikari dalam mendanai pembangunan daerahnya.",
      "Berikan rekomendasi restrukturisasi alokasi belanja kepada Tim Anggaran Pemerintah Daerah (TAPD)."
    ],
    "outputFormat": [
      "Tabel Ringkasan Struktur APBD Permendagri 77/2020",
      "Kalkulasi Surplus/Defisit dan Pembiayaan Netto",
      "Evaluasi Mandatory Spending Belanja Pegawai UU HKPD",
      "Analisis Derajat Desentralisasi Fiskal & Rekomendasi"
    ],
    "rubric": [
      "Ketepatan penyusunan struktur APBD dan kalkulasi surplus/defisit (30%)",
      "Kebenaran perhitungan pembiayaan netto dan SiLPA (20%)",
      "Akurasi evaluasi mandatory spending UU HKPD (25%)",
      "Kedalaman analisis desentralisasi fiskal dan rekomendasi TAPD (25%)"
    ],
    "answerGuide": "1. Struktur APBD dan Surplus / Defisit:\n• Total Pendapatan Daerah = Rp 1.900 miliar\n• Total Belanja Daerah = Rp 2.050 miliar\n• Surplus / (Defisit) = Pendapatan - Belanja = Rp 1.900 M - Rp 2.050 M = (Rp 150 miliar) -> DEFISIT ANGGARAN.\n\n2. Pembiayaan Netto & Saldo Akhir SiLPA:\n• Penerimaan Pembiayaan = Rp 200 miliar\n• Pengeluaran Pembiayaan = Rp 50 miliar\n• Pembiayaan Netto = Rp 200 M - Rp 50 M = +Rp 150 miliar.\n• SiLPA Akhir Tahun Berkenaan = Surplus/(Defisit) + Pembiayaan Netto = (Rp 150 M) + Rp 150 M = Rp 0 (Anggaran Berimbang Sempurna).\n\n3. Evaluasi Mandatory Spending Belanja Pegawai (UU HKPD):\n• Belanja Pegawai = Rp 950 miliar.\n• Total Belanja APBD = Rp 2.050 miliar.\n• Porsi Belanja Pegawai = (Rp 950 M / Rp 2.050 M) × 100% = 46,34%.\n• Evaluasi Kepatuhan: UU No. 1/2022 (HKPD) Pasal 146 membatasi belanja pegawai pemerintah daerah maksimal 30% dari total APBD. Porsi 46,34% melanggar batas regulasi secara signifikan (+16,34% di atas plafon). Struktur ini sangat tidak sehat karena hampir separuh APBD habis hanya untuk menggaji aparatur birokrasi.\n\n4. Analisis Derajat Desentralisasi Fiskal:\n• Rasio Desentralisasi = (PAD / Total Pendapatan) × 100% = (Rp 300 M / Rp 1.900 M) × 100% = 15,79%.\n• Evaluasi: Rasio 15,79% tergolong Kurang/Rendah. Lebih dari 78,9% penerimaan daerah masih bergantung pada transfer pemerintah pusat (Dana Bagi Hasil, DAU, DAK). Ketergantungan fiskal ini membuat daerah sangat rentan terhadap fluktuasi kebijakan transfer pusat.\n\n5. Rekomendasi untuk TAPD:\n• Moratorium & Restrukturisasi Belanja Pegawai: Terapkan kebijakan minus growth untuk formasi non-esensial dan integrasikan sistem digitalisasi birokrasi guna menurunkan porsi belanja pegawai menuju target 30% secara bertahap.\n• Realokasi ke Belanja Modal Infrastruktur: Alihkan belanja operasional seremonial ke belanja modal jalan, jembatan, dan irigasi pertanian untuk meningkatkan multiplier effect ekonomi daerah.\n• Peningkatan PAD: Lakukan intensifikasi pemungutan PBB-P2 dan BPHTB serta digitalisasi retribusi pasar untuk menaikkan kontribusi PAD di atas 25%."
  },
  {
    "type": "analysis",
    "scope": "TM 5: Sistem Penganggaran PBK vs Tradisional & Analisis Standar Belanja",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 5: Analisis Transisi Anggaran Tradisional ke Penganggaran Berbasis Kinerja (PBK) dan Penerapan Standar Biaya Masukan (SBM)",
    "context": "Dinas Tenaga Kerja mengajukan Rencana Kerja dan Anggaran (RKA) tahun 2026 untuk 'Program Pelatihan Kerja Berbasis Vokasi'. Anggaran yang diajukan adalah Rp 2.500.000.000 untuk 500 orang peserta pelatihan (biaya Rp 5.000.000/peserta). Rincian belanja: Honor instruktur Rp 400 juta, uang saku dan seragam peserta Rp 1.100 juta, sewa gedung hotel Rp 600 juta, dan ATK/konsumsi rapat panitia Rp 400 juta. Indikator kinerja yang diajukan hanyalah: 'Terlaksananya pelatihan 500 orang'. TAPD mengkritik rancangan ini masih berpola Tradisional/Line-item dan meminta diselaraskan dengan prinsip Penganggaran Berbasis Kinerja (PBK) serta Standar Biaya Masukan (SBM).",
    "data": [
      "Usulan Anggaran Dinas: Rp 2.500.000.000 untuk 500 peserta (biaya Rp 5 juta/orang).",
      "Struktur Belanja Usulan: Hotel/Konsumsi/Panitia menghabiskan Rp 1.000.000.000 (40% anggaran).",
      "Benchmark Standar Biaya Masukan (SBM) Resmi:\n  - Pelatihan di Balai Latihan Kerja (BLK) milik pemda gratis biaya sewa gedung.\n  - Standar paket bahan ajar & seragam vokasi resmi: Rp 1.200.000/peserta.\n  - Standar honor instruktur kompeten: Rp 300.000.000 total.\n  - Biaya sertifikasi kompetensi BNSP resmi: Rp 800.000/peserta.",
      "Tolok Ukur Kinerja PBK Baru yang Dituntut:\n  - Input: Biaya efisien berbasis standar.\n  - Output: Jumlah peserta yang lulus uji sertifikasi kompetensi BNSP.\n  - Outcome: Persentase lulusan pelatihan yang terserap bekerja di industri mitra dalam waktu 6 bulan (minimal 80%)."
    ],
    "instructions": [
      "Analisis kelemahan mendasar dari usulan RKA Dinas Tenaga Kerja berdasarkan prinsip Value for Money dan logika New Public Management.",
      "Susun ulang rincian struktur belanja kegiatan tersebut dengan memanfaatkan Balai Latihan Kerja (BLK) pemda (menghapus sewa hotel) dan memasukkan pos sertifikasi profesi BNSP sesuai ketentuan SBM.",
      "Hitung efisiensi penghematan anggaran yang berhasil dicapai dari restrukturisasi tersebut.",
      "Rumuskan matriks Indikator Kinerja Utama (IKU) kegiatan pelatihan berbasis kerangka logis PBK (Input, Output, Outcome, dan Impact)."
    ],
    "outputFormat": [
      "Evaluasi Kritis RKA Usulan Lama",
      "Tabel Restrukturisasi Anggaran Berbasis SBM & BLK",
      "Kalkulasi Efisiensi Penghematan Dana APBD",
      "Matriks Rantai Hasil Kinerja PBK (Input-Output-Outcome-Impact)"
    ],
    "rubric": [
      "Ketajaman identifikasi inefisiensi anggaran tradisional (30%)",
      "Kebenaran restrukturisasi pos belanja berbasis SBM (35%)",
      "Akurasi perhitungan efisiensi anggaran (15%)",
      "Ketepatan penyusunan rantai kinerja PBK (Input-Outcome) (20%)"
    ],
    "answerGuide": "1. Kelemahan Mendasar RKA Usulan Lama:\n• Orientasi Belanja Konsumtif: Alokasi sewa hotel mewah dan konsumsi rapat panitia menyerap Rp 1 M (40% total dana), mengorbankan kualitas substansi vokasi.\n• Ketiadaan Akuntabilitas Hasil (No Outcome Orientation): Indikator kinerja hanya berupa 'terlaksananya kegiatan', tanpa mengukur apakah peserta memperoleh sertifikat kompetensi atau apakah mereka mendapatkan pekerjaan pasca-pelatihan.\n• Incremental Fluff: RKA disusun sekadar menghabiskan plafon anggaran tanpa justifikasi standar biaya satuan yang wajar.\n\n2. Restrukturisasi Anggaran Berbasis SBM & Pemanfaatan BLK Pemda:\n• Sewa Gedung: Dialihkan ke BLK Daerah = Rp 0 (Aset Pemda dioptimalkan).\n• Honorarium Instruktur Kompeten = Rp 300.000.000.\n• Paket Bahan Praktik, APD, dan Seragam Vokasi = 500 peserta × Rp 1.200.000 = Rp 600.000.000.\n• Uji Sertifikasi Kompetensi Resmi BNSP = 500 peserta × Rp 800.000 = Rp 400.000.000.\n• Uang Saku Transport Peserta Pelatihan = 500 peserta × Rp 500.000 = Rp 250.000.000.\n• Operasional Administrasi & Pelaporan Panitia (Sesuai SBM) = Rp 50.000.000.\n• TOTAL ANGGARAN PBK BARU = Rp 1.600.000.000.\n\n3. Kalkulasi Efisiensi Penghematan:\n• Anggaran Lama = Rp 2.500.000.000\n• Anggaran Restrukturisasi PBK = Rp 1.600.000.000\n• Penghematan Kas APBD = Rp 2.500.000.000 - Rp 1.600.000.000 = Rp 900.000.000 (Hemat 36,0%!).\n• Selain menghemat Rp 900 juta, program kini menghasilkan nilai tambah berupa sertifikat kompetensi BNSP bagi seluruh peserta.\n\n4. Matriks Rantai Kinerja PBK:\n• Input: Dana kas APBD sebesar Rp 1.600.000.000 dan sarana bengkel kerja BLK Daerah.\n• Output: 500 orang tenaga kerja muda terlatih dan memegang Sertifikat Kompetensi Kerja Resmi BNSP.\n• Outcome: Minimal 80% (400 orang) lulusan pelatihan terserap bekerja di sektor industri manufaktur dalam kurun waktu 6 bulan setelah pelatihan.\n• Impact: Penurunan angka Tingkat Pengangguran Terbuka (TPT) Kabupaten dan peningkatan kesejahteraan keluarga rentan kemiskinan."
  },
  {
    "type": "calculation",
    "scope": "TM 6: Akuntansi Komitmen & Pengendalian Sisa Pagu Bebas",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 6: Penerapan Akuntansi Komitmen (Encumbrance Accounting) dalam Pengendalian Pagu Anggaran Belanja Modal",
    "context": "Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) mengelola mata anggaran 'Belanja Modal Pembangunan Gedung Rawat Inap RSUD' dengan total pagu DPA sebesar Rp 10.000.000.000 untuk tahun anggaran 2025. Sepanjang semester pertama, dinas melakukan transaksi berikut:\n1. 10 Februari: Menerbitkan Kontrak/SPK Pembangunan Struktur kepada PT Beton Jaya senilai Rp 5.500.000.000 (Commitment/Encumbrance dicatat).\n2. 15 Maret: Menerbitkan Kontrak/SPK Pengadaan Instalasi Lift kepada PT Elevasi Prima senilai Rp 2.000.000.000.\n3. 20 Mei: PT Beton Jaya menyelesaikan Termin 1 (bobot 40%) senilai Rp 2.200.000.000. Berita acara disahkan dan BUD menerbitkan SP2D-LS untuk pelunasan pembayaran termin tersebut.\n4. 25 Juni: Kepala Dinas menerima proposal tambahan pekerjaan instalasi genset darurat dari rekanan senilai Rp 1.800.000.000.",
    "data": [
      "Pagu Apropriasi Anggaran DPA: Rp 10.000.000.000.",
      "Kontrak 1 (PT Beton Jaya): Rp 5.500.000.000 (Realisasi SP2D Termin 1 = Rp 2.200.000.000).",
      "Kontrak 2 (PT Elevasi Prima): Rp 2.000.000.000 (Belum ada tagihan/realisasi).",
      "Usulan Kontrak Baru: Rp 1.800.000.000."
    ],
    "instructions": [
      "Jelaskan fungsi utama akun Cadangan Komitmen (Encumbrance) dalam sistem akuntansi sektor publik dan bagaimana jurnal pencatatannya saat SPK diterbitkan.",
      "Hitung posisi Saldo Komitmen Terikat (Outstanding Encumbrances) per 20 Mei setelah pembayaran Termin 1 PT Beton Jaya diselesaikan.",
      "Hitung Sisa Pagu Anggaran Bebas (Unencumbered Balance) per 20 Mei.",
      "Berdasarkan analisis sisa pagu anggaran bebas, apakah Pejabat Pembuat Komitmen (PPK) diizinkan secara hukum untuk menerbitkan Kontrak Pengadaan Genset senilai Rp 1.800.000.000 pada tanggal 25 Juni? Jelaskan risikonya jika sistem tidak menerapkan akuntansi komitmen."
    ],
    "outputFormat": [
      "Penjelasan Konseptual Akuntansi Komitmen & Jurnal",
      "Perhitungan Saldo Komitmen Berjalan (Encumbrance)",
      "Perhitungan Sisa Pagu Anggaran Bebas (Unencumbered Balance)",
      "Keputusan Persetujuan Kontrak Baru & Analisis Risiko"
    ],
    "rubric": [
      "Ketepatan penjelasan konsep dan jurnal akuntansi komitmen (30%)",
      "Akurasi perhitungan saldo komitmen dan realisasi belanja (30%)",
      "Ketepatan kalkulasi sisa pagu bebas (20%)",
      "Ketajaman keputusan manajerial dan mitigasi risiko overspending (20%)"
    ],
    "answerGuide": "1. Konsep & Jurnal Akuntansi Komitmen:\n• Fungsi: Mencegah terjadinya pengikatan kontrak belanja yang melampaui sisa pagu anggaran yang sah (overcommitment / overspending). Tanpa akuntansi komitmen, dinas hanya melihat kas keluar dan berisiko menandatangani kontrak melebihi batas DPA.\n• Jurnal Saat Kontrak Diterbitkan (10 Feb):\n  (D) Cadangan Belanja Komitmen (Encumbrances) ........... Rp 5.500.000.000\n      (K) Cadangan untuk Komitmen (Reserve for Encumbrances) Rp 5.500.000.000\n\n2. Saldo Komitmen Berjalan (Outstanding Encumbrances) per 20 Mei:\n• Kontrak 1 Awal = Rp 5.500.000.000.\n• Realisasi Belanja Definitif Termin 1 = Rp 2.200.000.000 (Komitmen dibatalkan/dibalik sebesar realisasi).\n• Sisa Komitmen Kontrak 1 = Rp 5.500.000.000 - Rp 2.200.000.000 = Rp 3.300.000.000.\n• Komitmen Kontrak 2 = Rp 2.000.000.000.\n• Total Komitmen Terikat Berjalan = Rp 3.300.000.000 + Rp 2.000.000.000 = Rp 5.300.000.000.\n\n3. Kalkulasi Sisa Pagu Bebas (Unencumbered Balance) per 20 Mei:\n• Pagu Anggaran DPA Awal = Rp 10.000.000.000\n• Dikurangi: Realisasi Belanja SP2D = Rp 2.200.000.000\n• Dikurangi: Saldo Komitmen Terikat Berjalan = Rp 5.300.000.000\n• Sisa Pagu Bebas = Rp 10.000.000.000 - Rp 2.200.000.000 - Rp 5.300.000.000 = Rp 2.500.000.000.\n\n4. Keputusan & Analisis Risiko:\n• Usulan Kontrak Pengadaan Genset = Rp 1.800.000.000.\n• Karena Sisa Pagu Bebas yang tersedia (Rp 2.500.000.000) > Nilai Kontrak Baru (Rp 1.800.000.000), maka kontrak pengadaan genset SECARA HUKUM DISETUJUI / DAPAT DITERBITKAN.\n• Pasca-penerbitan kontrak genset, sisa pagu anggaran bebas dinas tersisa Rp 700.000.000 (Rp 2,5 M - Rp 1,8 M).\n• Risiko Tanpa Akuntansi Komitmen: Jika hanya berbasis kas (Cash Basis murni), dinas akan mengira anggaran yang belum terpakai masih Rp 7.800.000.000 (Rp 10 M - Rp 2,2 M belanja riil), sehingga berpotensi menerbitkan kontrak tambahan hingga Rp 6 miliar yang pada akhir tahun akan memicu gagal bayar (utang pihak ketiga) karena komitmen Kontrak 1 dan Kontrak 2 sebenarnya sudah mengikat Rp 5,3 miliar."
  },
  {
    "type": "journal",
    "scope": "TM 7: Laporan Keuangan SAP Akrual PP 71/2010 & Jurnal Dualistis",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 7: Pencatatan Transaksi Dualistis (Jurnal Finansial & Jurnal Anggaran) SKPD dan Rekonsiliasi LRA ke LO",
    "context": "Dinas Kesehatan Kabupaten Sejahtera (SKPD) pada tahun anggaran 2025 melaksanakan rangkaian transaksi operasional berikut:\n1. 5 Maret: Menerbitkan Surat Ketetapan Retribusi Daerah (SKRD) atas pelayanan kesehatan laboratorium Puskesmas sebesar Rp 80.000.000.\n2. 10 Maret: Menerima uang tunai pelunasan retribusi sebesar Rp 70.000.000 di Bendahara Penerimaan.\n3. 12 Maret: Bendahara Penerimaan menyetorkan kas retribusi Rp 70.000.000 tersebut ke Rekening Kas Daerah (Kasda).\n4. 20 April: Menerima tagihan dan berita acara pengadaan obat-obatan medis senilai Rp 200.000.000. Pembayaran diterbitkan oleh BUD melalui mekanisme SP2D-LS kepada rekanan farmasi.\n5. 31 Desember: Berdasarkan inventarisasi fisik (stock opname), sisa persediaan obat-obatan yang belum terpakai di gudang dinas adalah Rp 50.000.000 (sebelumnya saldo awal persediaan adalah Rp 0).",
    "data": [
      "Entitas: SKPD Dinas Kesehatan.",
      "Transaksi 1: SKRD Terbit Rp 80.000.000.",
      "Transaksi 2: Kas Retribusi Masuk Rp 70.000.000.",
      "Transaksi 3: Setor Kas Retribusi ke Kasda Rp 70.000.000.",
      "Transaksi 4: Pengadaan Obat SP2D-LS Rp 200.000.000.",
      "Transaksi 5: Penyesuaian Stock Opname Persediaan Akhir Obat Rp 50.000.000."
    ],
    "instructions": [
      "Buat Jurnal Finansial (Laporan Operasional & Neraca) untuk transaksi 1 sampai dengan transaksi 4.",
      "Buat Jurnal Anggaran (Laporan Realisasi Anggaran / LRA) untuk transaksi 1 sampai dengan transaksi 4. Jelaskan jika ada transaksi yang tidak dijurnal di anggaran.",
      "Buat Jurnal Penyesuaian Akhir Tahun per 31 Desember untuk mencatat persediaan akhir obat-obatan (Jurnal Finansial).",
      "Sajikan perbandingan nilai Pendapatan dan Belanja/Beban antara LRA dan LO, serta jelaskan penyebab timbulnya selisih perbedaan angka di antara kedua laporan tersebut."
    ],
    "outputFormat": [
      "Tabel Jurnal Finansial Lengkap (LO & Neraca)",
      "Tabel Jurnal Anggaran Lengkap (LRA)",
      "Jurnal Penyesuaian Akhir Tahun",
      "Tabel Rekonsiliasi Silang LRA versus LO & Analisis"
    ],
    "rubric": [
      "Ketepatan jurnal finansial pendapatan dan belanja LS (30%)",
      "Ketepatan jurnal anggaran dan identifikasi transaksi kas vs non-kas (30%)",
      "Kebenaran jurnal penyesuaian persediaan akhir (20%)",
      "Ketajaman rekonsiliasi dan penjelasan perbedaan basis LRA vs LO (20%)"
    ],
    "answerGuide": "1. Jurnal Finansial (LO & Neraca):\n• 5 Maret (Penetapan SKRD):\n  (D) Piutang Retribusi Daerah ......................... Rp 80.000.000\n      (K) Pendapatan Retribusi Pelayanan Kesehatan - LO . Rp 80.000.000\n• 10 Maret (Penerimaan Kas Retribusi):\n  (D) Kas di Bendahara Penerimaan ...................... Rp 70.000.000\n      (K) Piutang Retribusi Daerah ..................... Rp 70.000.000\n• 12 Maret (Penyetoran Kas ke Kasda):\n  (D) RK-PPKD .......................................... Rp 70.000.000\n      (K) Kas di Bendahara Penerimaan .................. Rp 70.000.000\n• 20 April (Pengadaan Obat SP2D-LS):\n  (D) Beban Persediaan Obat-obatan ..................... Rp 200.000.000\n      (K) RK-PPKD ...................................... Rp 200.000.000\n\n2. Jurnal Anggaran (LRA):\n• 5 Maret: Tidak ada jurnal anggaran (karena belum ada penerimaan uang kas).\n• 10 Maret: Tidak ada jurnal anggaran (karena uang kas baru di bendahara SKPD, belum masuk Rekening Kas Umum Daerah / Kasda).\n• 12 Maret (Penyetoran ke Kasda = Sah menjadi Kas Daerah):\n  (D) Estimasi Perubahan SAL ........................... Rp 70.000.000\n      (K) Pendapatan Retribusi Pelayanan Kesehatan - LRA Rp 70.000.000\n• 20 April (Pengadaan Obat SP2D-LS):\n  (D) Belanja Barang dan Jasa - Obat ................... Rp 200.000.000\n      (K) Estimasi Perubahan SAL ....................... Rp 200.000.000\n\n3. Jurnal Penyesuaian Akhir Tahun (31 Desember):\n• Persediaan akhir obat yang masih tersisa Rp 50.000.000 harus dipindahkan dari beban menjadi aset lancar di Neraca:\n  (D) Persediaan Obat-obatan (Neraca) .................. Rp 50.000.000\n      (K) Beban Persediaan Obat-obatan (LO) ............. Rp 50.000.000\n  (Akibatnya: Beban Obat di LO turun dari Rp 200 juta menjadi Rp 150 juta, yaitu persis sejumlah obat yang habis terpakai).\n\n4. Rekonsiliasi Silang LRA versus LO:\n• Pendapatan:\n  - LRA: Rp 70.000.000 (Hanya kas yang disetor ke Kasda).\n  - LO: Rp 80.000.000 (Seluruh hak retribusi yang timbul sesuai SKRD).\n  - Selisih Rp 10.000.000: Menjadi pos 'Piutang Retribusi' di Neraca.\n• Belanja / Beban:\n  - LRA (Belanja Barang & Jasa): Rp 200.000.000 (Seluruh pengeluaran kas SP2D-LS).\n  - LO (Beban Persediaan): Rp 150.000.000 (Rp 200 M - Rp 50 M persediaan tersisa).\n  - Selisih Rp 50.000.000: Menjadi pos 'Persediaan Obat' di Neraca.\n• Kesimpulan: LRA mengukur kepatuhan realisasi arus kas anggaran, sedangkan LO mengukur beban sumber daya ekonomi yang riil dikonsumsi selama periode berjalan."
  }
];

export const AKS201_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 8: Latihan buatan: desain penggabungan laporan",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: desain penggabungan laporan",
    "context": "Satker mempunyai catatan kas, BMN, dan laporan anggaran yang belum cocok. Diasumsikan berada dalam K/L pemerintah pusat. Rujukan: PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27",
    "data": [
      "Keuangan dan barang mempunyai jalur pelaporan terkait.",
      "Selisih nilai aset belum dijelaskan."
    ],
    "instructions": [
      "Susun urutan pemeriksaan dan penggabungan.",
      "Jelaskan peran SAI, SABUN, UAPA dan LKPP."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: dua jalur memberi nilai berbeda. Asumsi: dokumen tersedia dan unit berada dalam K/L. Analisis: rekonsiliasi UAKPA dengan barang, identifikasi koreksi, kemudian penggabungan sesuai struktur. UAPA menghasilkan LK K/L; LK K/L dan LK BUN dikonsolidasikan menjadi LKPP. Keputusan: tunda penggabungan saldo yang belum andal sampai selisih dijelaskan. Mengandalkan aplikasi tanpa memeriksa bukti mempertahankan salah saji. Memasukkan laporan satker langsung ke LKPD mencampur pusat dan daerah. Rujukan: PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27"
  },
  {
    "type": "case",
    "scope": "TM 8: Latihan buatan: worksheet eliminasi daerah",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: worksheet eliminasi daerah",
    "context": "Pasangan RK dalam satu daerah mempunyai saldo debit RK-SKPD Rp 100 juta dan kredit RK-PPKD Rp 98 juta. Selisih adalah penerimaan SKPD belum tercatat, didukung bukti sah. Rujukan: Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75",
    "data": [
      "Nilai rupiah bulat; periode sama.",
      "Bukti Rp 2 juta telah dikonfirmasi."
    ],
    "instructions": [
      "Hitung selisih.",
      "Jelaskan koreksi sebelum eliminasi dan tunjukkan jurnal konsolidasi."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: Rp 100 juta dan Rp 98 juta. Asumsi: bukti Rp 2 juta valid, satu periode, satu pemda. Selisih = Rp 2 juta. Koreksi pencatatan unit yang belum lengkap menurut transaksi sumber, lalu verifikasi dua saldo Rp 100 juta. Pada worksheet: debit RK-PPKD Rp 100 juta; kredit RK-SKPD Rp 100 juta. Debit/kredit seimbang dan akun internal menjadi nol. Jangan memakai pendapatan baru untuk menutup selisih tanpa transaksi. Eliminasi Rp 98 juta sebelum koreksi menyisakan hubungan internal. Angka latihan tidak berasal dari xxx pada lampiran. Rujukan: Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75"
  },
  {
    "type": "case",
    "scope": "TM 9: Adaptasi ilustrasi sumber JP, sekolah A Eutopia",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Adaptasi ilustrasi sumber: menilai sekolah A di Eutopia",
    "context": "Kota Eutopia adalah rekaan buku. Anggaran 20x2 sekolah A £3.000.000 untuk 450 murid dan 70 guru penuh waktu. Seluruh sekolah kota memakai £10.000.000, 1.950 murid dan 350 guru penuh waktu. Rujukan: Jones-Pendlebury ed.6 (2010), Exhibit 2.1-2.6, cetak 22-26/PDF 33-37.",
    "data": [
      "Inspeksi terakhir memberi nilai 3 dari skala 4 sampai 1, berarti baik dalam ilustrasi buku.",
      "Hasil tes sekolah di bawah target nasional; latar murid memengaruhi hasil.",
      "Guru paruh waktu dan asisten digunakan tetapi jumlahnya tidak diberikan."
    ],
    "instructions": [
      "Hitung anggaran per murid dan murid per guru penuh waktu.",
      "Nilai apakah kesimpulan sekolah pasti buruk dapat diterima."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: anggaran, murid, guru dan penilaian inspeksi berasal dari ilustrasi buku. Asumsi hitungan: anggaran dipakai sebagai proksi biaya, bukan realisasi; murid dan guru penuh waktu memakai periode yang sama. Analisis: sekolah A 3.000.000/450 = £6.666,67 per murid; kota 10.000.000/1.950 = £5.128,21. Buku menampilkan £6.666 dan £5.128. Rasio murid/guru 450/70 = 6,43 dan 1.950/350 = 5,57; buku menampilkan 6,4 dan 5,6. Pembulatan hitungan ulang dua desimal. Inspeksi baik dan hasil tes di bawah target memberi sinyal yang perlu dijelaskan. Keputusan: periksa biaya aktual, mutu serta latar murid sebelum membuat peringkat. Alternatif menyatakan buruk dari anggaran per murid mengabaikan mutu; menyatakan efisien dari rasio guru mengabaikan guru paruh waktu/asisten; inspeksi baik tidak meniadakan kelemahan capaian tes. Rujukan: Jones-Pendlebury ed.6 (2010), Exhibit 2.1-2.6, cetak 22-26/PDF 33-37."
  },
  {
    "type": "case",
    "scope": "TM 9: Adaptasi format sumber: susun perjanjian kinerja",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Adaptasi format sumber: susun perjanjian kinerja",
    "context": "Gunakan format perjanjian kinerja SKPD pada sumber. Angka berikut buatan: sasaran waktu tunggu, target 20 menit, realisasi 25 menit. Rujukan: Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13 Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22",
    "data": [
      "Satuan: menit; lebih rendah diinginkan.",
      "Jumlah rapat tercatat naik, mutu data antrean belum direviu."
    ],
    "instructions": [
      "Tetapkan indikator dan sumber data.",
      "Jelaskan analisis capaian dan rekomendasi."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: waktu 25 menit dibanding target 20. Asumsi: pencatatan konsisten, populasi sama. Susun sasaran layanan lebih cepat, indikator rata-rata waktu tunggu dengan definisi titik mulai/akhir, target 20 menit, penanggung jawab dan anggaran. Selisih 5 menit atau 25% lebih lama. Verifikasi data sebelum menyimpulkan sebab. Keputusan: analisis hambatan layanan dan lakukan perbaikan yang diuji pada periode berikutnya. Jumlah rapat hanya kegiatan pendukung; menggantikan outcome dengan rapat mengubah sasaran. Mengubah target setelah hasil diketahui tanpa penjelasan merusak perbandingan. Rujukan: Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13 Permen PAN-RB 53/2014 Lampiran II. A-F dan Anak Lampiran II/1; cetak 15-18, PDF 19-22"
  },
  {
    "type": "case",
    "scope": "TM 10: Latihan buatan: desain pemeriksaan layanan",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: desain pemeriksaan layanan",
    "context": "Laporan keuangan sudah mendapat WTP, tetapi waktu tunggu layanan melebihi sasaran. Angka layanan dan bukti belum ditelaah. Rujukan: UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28 PP 60/2008 Ps.2-3,47-54; cetak/PDF 3-4,21-25 Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25",
    "data": [
      "Opini menjawab kewajaran LK.",
      "Pertanyaan penugasan adalah efektivitas layanan."
    ],
    "instructions": [
      "Tentukan jenis pemeriksaan dan kriteria.",
      "Susun bukti serta batas kesimpulan."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: WTP dan informasi waktu tunggu. Asumsi: tujuan penugasan menilai layanan. Pemeriksaan kinerja relevan; tetapkan target, definisi waktu, populasi, periode dan mutu sebagai kriteria. Kumpulkan catatan antrean, observasi, konfirmasi serta analisis penyebab. WTP tidak membuktikan efektivitas. Keputusan: nilai kinerja melalui bukti yang tepat tanpa mengubah makna opini LK. Alternatif sekadar menyalin opini tidak menjawab masalah. Menyimpulkan fraud dari keterlambatan tanpa bukti juga melampaui fakta. Rujukan: UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28 PP 60/2008 Ps.2-3,47-54; cetak/PDF 3-4,21-25 Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25"
  },
  {
    "type": "case",
    "scope": "TM 10: Latihan buatan: bukti dan jawaban tindak lanjut",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: bukti dan jawaban tindak lanjut",
    "context": "Hari ke 45, pejabat belum menyelesaikan rekomendasi perbaikan daftar aset. Dokumen pembelian sebagian hilang, konfirmasi belum dilakukan. Rujukan: UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28 Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25",
    "data": [
      "Tenggat jawaban adalah 60 hari sejak penerimaan LHP.",
      "Rp 8 miliar adalah nilai aset buatan untuk latihan."
    ],
    "instructions": [
      "Jelaskan langkah bukti alternatif.",
      "Susun isi jawaban yang layak dan jelaskan risiko alternatif."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: hari 45, dokumen tidak lengkap, prosedur alternatif belum selesai. Asumsi: bukti tambahan masih dapat diperoleh dan tidak ada simpulan materialitas final. Lakukan konfirmasi, observasi dan pemeriksaan catatan terkait; nilai cakupan serta hasilnya. Sampaikan jawaban/penjelasan dalam 60 hari dengan tindakan, bukti, sisa masalah dan alasan sah. Tidak dapat menentukan opini dari nominalRp 8 miliar saja. Menunggu semua selesai tanpa menjawab berisiko melampaui tenggat. Surat tanpa bukti tidak menyatakan rekomendasi selesai. BPK tetap memantau. Rujukan: UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28 Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25"
  },
  {
    "type": "case",
    "scope": "TM 11: Latihan buatan: paket laporan LSM",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: paket laporan LSM",
    "context": "Model penyajian historis dalam juta Rp: donasi 200 tanpa pembatasan dan 100 untuk program, beban umum 120, program 60, peralatan 50. Rujukan: IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis",
    "data": [
      "saldo awal/liabilitas/OCI nol; seluruh transaksi tunai.",
      "Pengakuan penghasilan diasumsikan terpenuhi; peralatan belum siap digunakan.",
      "Pembatasan program 60 terpenuhi."
    ],
    "instructions": [
      "Susun surplus, perubahan aset neto, posisi, arus kas dan Ca LK.",
      "Verifikasi keseimbangan dan batas klaim SAK."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: data kasus. Asumsi: pengakuan terpenuhi, tanpa OCI/liabilitas, peralatan belum siap digunakan. Surplus 300-180=120. Reklasifikasi 60 memberi tanpa 80 dan dengan 40; total 120. Kas 300-180-50=70;peralatan 50;aset 120=liabilitas 0+neto 120. Arusoperasi 120, investasi-50, pendanaan 0, kas akhir 70. Ca LK: kerangka/periode/satuan, kebijakan pengakuan yang diasumsikan, pembatasan 100, pembebasan 60 dan sisa 40, rincian beban/peralatan. Tidak ada pembulatan. Alternatif mengakui reklasifikasi sebagai donasi baru menduplikasi 60. Menganggap pembelian aset sebagai beban mengubah surplus tanpa dasar data. Ini latihan adaptasi DE 2018 dan tidak mengesahkan kepatuhan final SAK 2026. Rujukan: IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis"
  },
  {
    "type": "case",
    "scope": "TM 11: Latihan buatan: laporan tahunan dan audit",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: laporan tahunan dan audit",
    "context": "Yayasan menerima bantuanRp 400 juta dalam satu tahun buku dan memiliki kekayaanRp 25 miliar di luar wakaf. Rujukan: UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10",
    "data": [
      "Tidak ada informasi kontrak tambahan.",
      "Data kekayaan diasumsikan benar."
    ],
    "instructions": [
      "Tentukan kewajibanPasal 52.",
      "Jelaskan dokumen dan pihak terkait."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: 400 juta dan 25 miliar. Asumsi: bantuan satu tahun buku, kekayaan mengecualikan wakaf. Bantuan tidak mencapai 500 juta, tetapi kekayaan melampaui 20 miliar. Pasal 52 menggunakan atau; ketentuan audit akuntan publik dan publikasi ikhtisar keuangan terpenuhi. Hasil audit disampaikan kepada Pembina dengan tembusan Menteri/instansi terkait. Laporan tahunan sesuai Pasal 49-50 tetap perlu disusun, ditandatangani dan disahkan. Meminta kedua syarat sekaligus meniadakan kewajiban yang ditetapkan UU. Membaca satu angka tanpa tahun buku/ruang kekayaan menghasilkan kesimpulan keliru. Rujukan: UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10"
  },
  {
    "type": "case",
    "scope": "TM 12: Latihan buatan: laporan entitas dan LPJ bantuan",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: laporan entitas dan LPJ bantuan",
    "context": "Gunakan bantuan 75, iuran 25, donasi 50 serta beban pendidikan 50, sekretariat 25, kegiatan lain 25, seluruhnya juta Rp. Rujukan: UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011 Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020 IAI DE ISAK 35(2018) CI 01-04 dan contoh laporan, PDF 19-33; ilustrasi penyajian historis, pengakuan diasumsikan dalam latihan",
    "data": [
      "saldo awal/liabilitas/nonkas nol. Pengakuan penghasilan diasumsikan terpenuhi.",
      "Bantuan 75 digunakan untuk pendidikan 50 dan sekretariat 25."
    ],
    "instructions": [
      "Susun laporan entitas dan LPJ bantuan.",
      "Jelaskan perbedaan saldo dan pemeriksa."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: penerimaan 150, beban 100. Asumsi: pengakuan telah terpenuhi, seluruhnya tunai, liabilitas/nonkas nol. Surplus 150-100=50, kas akhir 50 dan aset neto 50;aset 50=liabilitas 0+neto 50. Arusoperasi 50, investasi/pendanaan 0. LPJ bantuan 75-50-25=0. Rincian sumber menjelaskan kas entitas 50 berasal sumber lain. laporan realisasi anggaran entitas membandingkan seluruh anggaran/realisasi sesuai Pasal 39, sementara LPJ memerinci dana publik. Audit entitas olehakuntan publik berbeda dari BPK bantuan. Menyalin 50 sebagai sisa bantuan mencampur ruang. Model berbasis asumsi dan ilustrasi DE 2018 tidak menggantikan standar final SAK atau kontrak bantuan. Rujukan: UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011 Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020 IAI DE ISAK 35(2018) CI 01-04 dan contoh laporan, PDF 19-33; ilustrasi penyajian historis, pengakuan diasumsikan dalam latihan"
  },
  {
    "type": "case",
    "scope": "TM 12: Latihan buatan: bantuan dan pengendalian donor",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: bantuan dan pengendalian donor",
    "context": "Partai tingkat kabupaten memperoleh 50.000 suara dan kursi, tarif dasar 1.500. Seorang donor bukan anggota memberi 600 juta dua kali dalam satu tahun. Rujukan: UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011 PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018",
    "data": [
      "Tidak ada kenaikan tarif daerah dalam asumsi.",
      "Penerimaan donor melalui rekening, nilai rupiahbulat."
    ],
    "instructions": [
      "Hitung bantuan dan akumulasi donor.",
      "Jelaskan keputusan penerimaan dan kelemahan alternatif."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Bantuan=50.000×Rp 1.500=Rp 75 juta pada syarat tingkat kabupaten dan satu tahun penuh. Donor=600+600=Rp 1,2 miliar, melebihi batasRp 1 miliar per orang setahun menurut Pasal 35. Keputusan: periksa bukti identitas/akumulasi dan tangani penerimaan sesuai aturan; penggunaan rekening tidak melegalkan kelebihan. Menilai per transfer mengabaikan tahun anggaran; memakai batas perusahaan mengubah kategori donor. tarif provinsi/pusat menghasilkan angka untuk tingkat berbeda. Tidak ada pembulatan;angka 50.000/600 juta buatan, tarif danbatas berasal aturan. Rujukan: UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011 PP 5/2009 sebagaimana diubah PP 1/2018 Ps.5,9,16; cetak/PDF 2-4 PP 1/2018"
  },
  {
    "type": "case",
    "scope": "TM 13: Latihan buatan: tujuh laporan BLU",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: tujuh laporan BLU",
    "context": "Gunakan hak layanan 120, kas diterima 100, beban tunai 70, pembelian aset 20, seluruhnya juta Rp. Rujukan: SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273",
    "data": [
      "Awal kas/SAL/ekuitas/kewajiban nihil.",
      "Hak sah, kas disahkan, aset belum siap dipakai, penyusutan/transaksi lain nihil."
    ],
    "instructions": [
      "Susun hubungan tujuh laporan.",
      "Periksa kas, akrual dan keseimbangan."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: layanan 120, kas 100, beban 70, aset 20. Asumsi: seluruh kondisi kasus terpenuhi. LO surplus 50; piutang 20. LRA 100-90=10; LPSAL 0+10=10 tanpa koreksi lain. LPE 0+50=50. Neraca kas 10+piutang 20+aset 20=0+ekuitas 50. LAK operasi 30, investasi-20, akhir 10. Ca LK memuat pengakuan/pengesahan dan asumsi. Menganggap surplus 50 sebagai kas atau membebankan seluruh aset 20 pada LO memberi salah hubungan. Angka buatan, tanpa pembulatan; SAL=kas hanya pada kasus ini. Rujukan: SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273"
  },
  {
    "type": "case",
    "scope": "TM 13: Latihan buatan: konsolidasi dan fleksibilitas rumah sakit",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: konsolidasi dan fleksibilitas rumah sakit",
    "context": "Pendapatan/beban internal 40 juta Rp cocok; BLUD memiliki ambang kasus 10%, belanja bertambah 12% dan kas cukup. Rujukan: SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273 PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007",
    "data": [
      "Lingkup konsolidasi sama; tidak ada selisih internal.",
      "Ambang 10% ditetapkan dalam asumsi RBA/DPA, bukan angka aturan universal."
    ],
    "instructions": [
      "Buat jurnal eliminasi LO serta batas penerapannya.",
      "Putuskan langkah belanja dan kelemahan alternatif."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Eliminasi kertas kerja: debit pendapatan 40, kredit beban 40;debit=kredit. Tidak ada kas baru; jangan menyalin ke LRA yang memiliki ketentuan berbeda. BLUD: 12%-10%=2 poin persentase di atas ambang. Periksa persetujuan kepala daerah dan dasar pendapatan/layanan. Kas cukup tidak menggantikan persetujuan; menolak seluruh fleksibilitas juga mengabaikan aturan. PMK 128 untuk sistem pusat, Permendagri 79/kebijakan daerah untuk BLUD;status entitas harus jelas. Rujukan: SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273 PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007"
  },
  {
    "type": "case",
    "scope": "TM 14: Latihan sumber: ulasan hasil audit desa",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan sumber: ulasan hasil audit desa",
    "context": "Table 4 jalan: kontrol 0,277, perlakuan 0,192, efek-0,085, p 0,058, N 477. Rujukan: Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21",
    "data": [
      "Ambang 5% dipilih dalam soal.",
      "Model lain: insinyur-0,076, p 0,039;strata-0,048, p 0,123."
    ],
    "instructions": [
      "Hitung selisih poin dan perubahan relatif.",
      "Nilai ketidakpastian serta sensitivitas model."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta angkaTable 4. Selisih 0,085=8,5 poin;turunan relatif 0,085/0,277×100=30,69% dibulatkan dua desimal. Ambang 5% adalah asumsi soal: p 0,058 tidak melewati. model insinyur melewati, strata tidak. Kesimpulan efek negatif dengan ketidakpastian/model disebut;tidak semua signifikan 5%. Menulis 8,5%relatif salah satuan;membuktikan korupsi individu melampaui proksi. Buku/artikel dosen belum tersedia, artikel ini tambahan pilihan. Rujukan: Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21"
  },
  {
    "type": "case",
    "scope": "TM 14: Latihan buatan: usulan penelitian BLUD",
    "difficulty": "Komprehensif",
    "estimatedTime": "20-30 menit",
    "question": "Latihan buatan: usulan penelitian BLUD",
    "context": "Mahasiswa mengusulkan audit 100% semua rumah sakit hanya berdasarkan eksperimen jalan desa 2003. Rujukan: Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18 Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21",
    "data": [
      "Belum ada data rumah sakit atau biaya implementasi.",
      "Usulan lanjutan dapat meneliti rekonsiliasi dan selisih laporan, belum ada hasil."
    ],
    "instructions": [
      "Pisahkan fakta, asumsi dan klaim.",
      "Susun rancangan yang dapat diuji serta batas rekomendasi."
    ],
    "outputFormat": [
      "Pisahkan fakta, asumsi, analisis dan keputusan.",
      "Tunjukkan hitungan atau bukti, lalu jelaskan batas kesimpulan."
    ],
    "rubric": [
      "Ketepatan kerangka dan sumber: 30%.",
      "Langkah, bukti dan pemeriksaan: 40%.",
      "Keputusan serta kelemahan alternatif: 30%."
    ],
    "answerGuide": "Fakta: randomisasi dan proksi dalam konteks jalan desa historis. Asumsi transfer tanpa bukti harus diuji. Rancangan buatan: tetapkan unit penugasan, perlakuan jadwal rekonsiliasi, kelompok pembanding, periode, ukuran selisih, galat baku berkelompok dan akses data. Rekomendasi perlu biaya, kapasitas, mutu layanan dan validitas eksternal. Klaim pasti menghapus korupsi terlalu kuat;menolak semua bukti mengabaikan validitas internal sumber. Tidak ada angka hasil baru yang diklaim. Rujukan: Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18 Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21"
  }
];

export const AKS201_BANK: BankSoal[] = [...AKS201_BANK_UTS, ...AKS201_BANK_UAS];
