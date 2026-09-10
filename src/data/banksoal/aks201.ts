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
    "type": "calculation",
    "scope": "TM 8: Pemantapan Pra-UTS, Penyusunan LRA SKPD, & Jurnal Penutup",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 8: Simulasi Pra-UTS: Penyusunan Laporan Realisasi Anggaran (LRA) SKPD dan Prosedur Jurnal Penutup Akhir Tahun",
    "context": "Dinas Pendidikan Kabupaten Sejahtera pada akhir tahun anggaran 2025 menyajikan data anggaran dan realisasi kas sebagai berikut:\n• Pagu Anggaran Pendapatan Retribusi Jasa Usaha (Penyewaan Gedung Pertemuan): Rp 200.000.000 (Realisasi Kas: Rp 220.000.000)\n• Pagu Belanja Pegawai (Gaji dan Tunjangan): Rp 8.000.000.000 (Realisasi Kas: Rp 7.800.000.000)\n• Pagu Belanja Barang dan Jasa (ATK, Listrik, Pelatihan Guru): Rp 2.500.000.000 (Realisasi Kas: Rp 2.350.000.000)\n• Pagu Belanja Modal Pengadaan Perangkat Komputer Laboratorium: Rp 1.500.000.000 (Realisasi Kas: Rp 1.500.000.000)",
    "data": [
      "Anggaran Pendapatan Retribusi: Target Rp 200.000.000 | Realisasi Rp 220.000.000 (110,0%).",
      "Anggaran Belanja Pegawai: Pagu Rp 8.000.000.000 | Realisasi Rp 7.800.000.000 (97,5%).",
      "Anggaran Belanja Barang & Jasa: Pagu Rp 2.500.000.000 | Realisasi Rp 2.350.000.000 (94,0%).",
      "Anggaran Belanja Modal: Pagu Rp 1.500.000.000 | Realisasi Rp 1.500.000.000 (100,0%).",
      "Total Anggaran Belanja = Rp 12.000.000.000 | Total Realisasi Belanja = Rp 11.650.000.000."
    ],
    "instructions": [
      "Susun Laporan Realisasi Anggaran (LRA) Dinas Pendidikan untuk periode yang berakhir 31 Desember 2025 dengan menyajikan kolom Anggaran, Realisasi, Selisih (Varian), dan Persentase Capaian.",
      "Hitung nilai Defisit Riil Anggaran Dinas Pendidikan (selisih total pendapatan dan total belanja LRA). Mengapa SKPD dinas daerah wajar mengalami defisit besar?",
      "Hitung total efisiensi penghematan anggaran belanja (sisa pagu belanja yang tidak terserap) Dinas Pendidikan.",
      "Buat Jurnal Penutup Anggaran (Closing Entries) pada akhir tahun untuk menutup akun-akun anggaran LRA SKPD ke akun Estimasi Perubahan SAL."
    ],
    "outputFormat": [
      "Format Tabel Laporan Realisasi Anggaran (LRA) Resmi",
      "Analisis Defisit SKPD dan Peran Pendanaan PPKD",
      "Kalkulasi Penghematan Belanja Daerah",
      "Daftar Ayat Jurnal Penutup LRA Lengkap"
    ],
    "rubric": [
      "Ketepatan penyusunan format dan angka tabel LRA (35%)",
      "Kejelasan analisis defisit anggaran SKPD vs PPKD (20%)",
      "Akurasi perhitungan varian penghematan belanja (15%)",
      "Ketepatan ayat jurnal penutup anggaran akhir tahun (30%)"
    ],
    "answerGuide": "1. Tabel Laporan Realisasi Anggaran (LRA) Dinas Pendidikan per 31 Desember 2025:\n\nPos / Akun | Anggaran (Rp) | Realisasi (Rp) | Selisih/Varian (Rp) | %\n--------------------------------------------------------------------\nPENDAPATAN DAERAH:\n- Pendapatan Retribusi Daerah - LRA | 200.000.000 | 220.000.000 | +20.000.000 | 110,0%\nTOTAL PENDAPATAN | 200.000.000 | 220.000.000 | +20.000.000 | 110,0%\n\nBELANJA DAERAH:\n- Belanja Pegawai | 8.000.000.000 | 7.800.000.000 | -200.000.000 | 97,5%\n- Belanja Barang dan Jasa | 2.500.000.000 | 2.350.000.000 | -150.000.000 | 94,0%\n- Belanja Modal | 1.500.000.000 | 1.500.000.000 | 0 | 100,0%\nTOTAL BELANJA | 12.000.000.000 | 11.650.000.000 | -350.000.000 | 97,1%\n--------------------------------------------------------------------\nDEFISIT LRA | (11.800.000.000) | (11.430.000.000) | +370.000.000 | 96,9%\n\n2. Analisis Defisit SKPD:\n• Defisit Riil Anggaran Dinas Pendidikan = Rp 220.000.000 - Rp 11.650.000.000 = (Rp 11.430.000.000).\n• Mengapa Wajar: SKPD teknis seperti Dinas Pendidikan, Dinas Kesehatan, dan Dinas Sosial adalah entitas 'Pusat Biaya' (Cost Center) yang menjalankan fungsi pelayanan publik dasar tanpa memungut pajak. Defisit ini sepenuhnya ditutup oleh penerimaan pendapatan transfer (DAU/DAK) dan pajak daerah yang dikelola terpusat oleh PPKD (selaku Pusat Pendapatan/Kasda).\n\n3. Penghematan Belanja (Efisiensi):\n• Total Pagu Belanja = Rp 12.000.000.000\n• Total Realisasi Belanja = Rp 11.650.000.000\n• Sisa Anggaran Belanja yang Tidak Terserap = Rp 350.000.000 (Efisiensi 2,9% dari pagu).\n\n4. Jurnal Penutup Anggaran (Closing Entries per 31 Desember):\n• Jurnal Menutup Akun Pendapatan-LRA:\n  (D) Pendapatan Retribusi Daerah - LRA ................ Rp 220.000.000\n      (K) Estimasi Perubahan SAL ....................... Rp 220.000.000\n• Jurnal Menutup Akun Belanja-LRA:\n  (D) Estimasi Perubahan SAL ........................... Rp 11.650.000.000\n      (K) Belanja Pegawai .............................. Rp 7.800.000.000\n      (K) Belanja Barang dan Jasa ...................... Rp 2.350.000.000\n      (K) Belanja Modal ................................ Rp 1.500.000.000\n(Setelah jurnal penutup ini diposting, seluruh akun nominal anggaran LRA bersaldo nol)."
  },
  {
    "type": "journal",
    "scope": "TM 9: Akuntansi Konsolidasi HOBO & Jurnal Eliminasi Pemda",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 9: Akuntansi Hubungan Timbal Balik Kantor Pusat - Kantor Cabang (HOBO) antara PPKD dan SKPD serta Jurnal Eliminasi Konsolidasian",
    "context": "Pemerintah Kota Metropolitan menerapkan sistem akuntansi desentralisasi berbasis HOBO. PPKD bertindak sebagai Kantor Pusat (Home Office / BUD) dan SKPD Dinas Perhubungan bertindak sebagai Kantor Cabang (Branch Office). Selama tahun anggaran 2025 terjadi transaksi resiprokal berikut:\n1. 15 Januari: PPKD menerbitkan SP2D Uang Persediaan (UP) sebesar Rp 100.000.000 ke rekening Bendahara Pengeluaran Dinas Perhubungan.\n2. 18 Agustus: Dinas Perhubungan menerima uang retribusi parkir Rp 60.000.000 di Bendahara Penerimaan, dan pada 19 Agustus menyetorkan seluruh uang kas tersebut ke Kas Daerah (Kasda).\n3. 10 Oktober: Pengadaan rambu lalu lintas dan marka jalan senilai Rp 500.000.000 dilaksanakan rekanan. Tagihan dibayar langsung oleh Kasda via SP2D-LS (Belanja Modal Dinas Perhubungan).\n4. 31 Desember: Saldo akun RK-SKPD pada buku besar PPKD tercatat Debet Rp 540.000.000 dan saldo akun RK-PPKD pada buku besar Dinas Perhubungan tercatat Kredit Rp 540.000.000.",
    "data": [
      "Transaksi 1: SP2D-UP Kasda ke SKPD Rp 100.000.000.",
      "Transaksi 2: Penerimaan Retribusi Rp 60.000.000 dan Penyetoran ke Kasda Rp 60.000.000.",
      "Transaksi 3: Pengadaan Aset Tetap SP2D-LS Rp 500.000.000.",
      "Saldo Akhir Resiprokal: RK-SKPD (Debet Rp 540 juta) dan RK-PPKD (Kredit Rp 540 juta)."
    ],
    "instructions": [
      "Susun ayat jurnal finansial yang dicatat oleh Dinas Perhubungan (SKPD) untuk Transaksi 1, 2, dan 3.",
      "Susun ayat jurnal finansial berpasangan yang dicatat oleh PPKD (BUD) untuk Transaksi 1, 2, dan 3.",
      "Buktikan rekonsiliasi saldo akun RK-PPKD di SKPD dan akun RK-SKPD di PPKD per 31 Desember sehingga menghasilkan angka resiprokal Rp 540.000.000.",
      "Susun Jurnal Eliminasi yang wajib dibuat oleh Tim Konsolidasi Pemda pada Kertas Kerja Konsolidasian (Consolidation Worksheet) agar akun perantara ini tidak muncul di Neraca Kota Metropolitan."
    ],
    "outputFormat": [
      "Tabel Jurnal Finansial Komparatif SKPD vs PPKD",
      "Rekonsiliasi Buku Besar Akun Resiprokal HOBO",
      "Ayat Jurnal Eliminasi Konsolidasian Akhir Tahun",
      "Penjelasan Dampak terhadap Neraca Konsolidasi"
    ],
    "rubric": [
      "Ketepatan jurnal finansial pada pembukuan SKPD (30%)",
      "Ketepatan jurnal finansial pasangan pada pembukuan PPKD (30%)",
      "Akurasi perhitungan rekonsiliasi saldo resiprokal (20%)",
      "Kebenaran jurnal eliminasi konsolidasi pemda (20%)"
    ],
    "answerGuide": "1. Jurnal Finansial pada SKPD Dinas Perhubungan:\n• Transaksi 1 (Terima UP):\n  (D) Kas di Bendahara Pengeluaran ..................... Rp 100.000.000\n      (K) RK-PPKD ...................................... Rp 100.000.000\n• Transaksi 2 (Terima & Setor Retribusi):\n  Saat terima di bendahara:\n  (D) Kas di Bendahara Penerimaan ...................... Rp 60.000.000\n      (K) Pendapatan Retribusi Parkir - LO ............. Rp 60.000.000\n  Saat setor ke Kasda:\n  (D) RK-PPKD .......................................... Rp 60.000.000\n      (K) Kas di Bendahara Penerimaan .................. Rp 60.000.000\n• Transaksi 3 (Pengadaan Rambu SP2D-LS):\n  (D) Aset Tetap - Rambu & Marka Jalan ................. Rp 500.000.000\n      (K) RK-PPKD ...................................... Rp 500.000.000\n\n2. Jurnal Finansial Berpasangan pada PPKD (BUD):\n• Transaksi 1 (Penerbitan SP2D-UP):\n  (D) RK-SKPD Dinas Perhubungan ........................ Rp 100.000.000\n      (K) Kas di Kasda ................................. Rp 100.000.000\n• Transaksi 2 (Terima Setoran Retribusi di Kasda):\n  (D) Kas di Kasda ..................................... Rp 60.000.000\n      (K) RK-SKPD Dinas Perhubungan .................... Rp 60.000.000\n• Transaksi 3 (Penerbitan SP2D-LS Belanja Modal SKPD):\n  (D) RK-SKPD Dinas Perhubungan ........................ Rp 500.000.000\n      (K) Kas di Kasda ................................. Rp 500.000.000\n\n3. Rekonsiliasi Saldo Resiprokal per 31 Desember:\n• Buku Besar RK-PPKD di SKPD (Kredit = Menambah Ekuitas/Kewajiban ke Pusat):\n  - Kredit UP: +Rp 100.000.000\n  - Debet Setoran Retribusi: -Rp 60.000.000\n  - Kredit Belanja Modal LS: +Rp 500.000.000\n  - Saldo Akhir RK-PPKD = Kredit Rp 540.000.000.\n• Buku Besar RK-SKPD di PPKD (Debet = Tagihan Aset ke Cabang):\n  - Debet Kirim UP: +Rp 100.000.000\n  - Kredit Terima Retribusi: -Rp 60.000.000\n  - Debet Bayar Belanja Modal LS: +Rp 500.000.000\n  - Saldo Akhir RK-SKPD = Debet Rp 540.000.000.\n• Kedua saldo saling mencerminkan (mirror balance) secara presisi.\n\n4. Jurnal Eliminasi Konsolidasian Pemda:\n• Pada kertas kerja konsolidasi laporan keuangan pemda per 31 Desember:\n  (D) RK-PPKD (Ekuitas) ................................ Rp 540.000.000\n      (K) RK-SKPD (Aset) ............................... Rp 540.000.000\n• Dampak: Akun RK-PPKD dan RK-SKPD tereliminasi menjadi nol. Pada Neraca Konsolidasi Pemda, yang muncul murni adalah Aset Tetap Rp 500 juta, Kas di Bendahara Rp 100 juta, dan Kas di Kasda (berkurang bersih Rp 540 juta)."
  },
  {
    "type": "case",
    "scope": "TM 10: Pengukuran Kinerja Value for Money (Ekonomis, Efisiensi, Efektivitas)",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 10: Analisis Komprehensif Kinerja Pelayanan Publik Berbasis Paradigma Value for Money (3E) dan Indeks Standar Pelayanan Minimal",
    "context": "Dinas Kesehatan Kabupaten Sukamaju mengelola 'Program Penurunan Stunting Anak Balita' pada tahun anggaran 2025 dengan pagu alokasi anggaran Rp 10.000.000.000. Target output program adalah mendistribusikan 200.000 paket makanan tambahan gizi (PMT) untuk 20.000 balita sasaran. Target outcome adalah menurunkan prevalensi stunting daerah dari 24% menjadi minimal 16% (penurunan 8% poin). Setelah program selesai dievaluasi pada akhir tahun, data realisasi menunjukkan: Realisasi belanja aktual adalah Rp 8.800.000.000; Jumlah paket PMT yang berhasil diproduksi dan didistribusikan adalah 220.000 paket; dan Berdasarkan survei kesehatan nasional (SKI), prevalensi stunting berhasil turun menjadi 14% (penurunan 10% poin).",
    "data": [
      "Data Input:\n• Anggaran Pagu: Rp 10.000.000.000\n• Realisasi Belanja Aktual: Rp 8.800.000.000",
      "Data Output:\n• Target Produksi Paket PMT: 200.000 paket (Biaya Standar = Rp 50.000/paket)\n• Realisasi Produksi Aktual: 220.000 paket",
      "Data Outcome:\n• Target Penurunan Stunting: Dari 24% ke 16% (Target Capaian = Penurunan 8% poin)\n• Realisasi Penurunan Stunting Aktual: Dari 24% ke 14% (Realisasi Capaian = Penurunan 10% poin)",
      "Kriteria Penilaian Kemenkeu/Kemendagri:\n  - Ekonomis: Realisasi Belanja ≤ Anggaran (Rasio < 100% = Ekonomis)\n  - Efisiensi: Biaya Aktual per Unit Output ≤ Standar (Rasio Biaya Satuan < 100% = Efisien)\n  - Efektivitas: Realisasi Capaian Outcome / Target Outcome ≥ 100% = Sangat Efektif"
    ],
    "instructions": [
      "Hitung Rasio Ekonomis belanja program dan berikan kesimpulannya.",
      "Hitung biaya satuan (unit cost) aktual per paket PMT dan bandingkan dengan biaya standar anggaran. Hitung Rasio Efisiensi output dan berikan kesimpulannya.",
      "Hitung Rasio Efektivitas pencapaian outcome penurunan angka stunting dan berikan kesimpulannya.",
      "Berdasarkan analisis 3E (Ekonomis, Efisiensi, Efektivitas) secara simultan, evaluasi apakah Program Penurunan Stunting Dinas Kesehatan telah mencapai Value for Money.",
      "Jelaskan faktor-faktor kunci yang menyebabkan sebuah program publik bisa berstatus 'Efisien' tetapi 'Tidak Efektif', dan mengapa hal tersebut tidak terjadi pada kasus ini."
    ],
    "outputFormat": [
      "Kalkulasi Rasio Ekonomis",
      "Kalkulasi Rasio Efisiensi (Unit Cost Analysis)",
      "Kalkulasi Rasio Efektivitas Capaian Outcome",
      "Matriks Evaluasi Kinerja Value for Money (VFM)",
      "Analisis Teoretis Hubungan Efisiensi versus Efektivitas"
    ],
    "rubric": [
      "Ketepatan perhitungan rasio ekonomis belanja (20%)",
      "Akurasi perhitungan analisis unit cost dan rasio efisiensi (30%)",
      "Ketepatan perhitungan rasio efektivitas outcome (25%)",
      "Kedalaman sintesis evaluasi Value for Money menyeluruh (25%)"
    ],
    "answerGuide": "1. Kalkulasi Rasio Ekonomis (Spending Less):\n• Rasio Ekonomis = (Realisasi Belanja / Anggaran Pagu) × 100%\n• Rasio Ekonomis = (Rp 8.800.000.000 / Rp 10.000.000.000) × 100% = 88,00%.\n• Kesimpulan: EKONOMIS (Penghematan kas sebesar Rp 1.200.000.000 atau 12% di bawah pagu).\n\n2. Kalkulasi Rasio Efisiensi (Spending Well):\n• Biaya Satuan Standar Anggaran = Rp 10.000.000.000 / 200.000 paket = Rp 50.000 per paket.\n• Biaya Satuan Aktual = Realisasi Belanja / Realisasi Paket Output = Rp 8.800.000.000 / 220.000 paket = Rp 40.000 per paket.\n• Rasio Efisiensi Biaya Satuan = (Biaya Satuan Aktual / Biaya Satuan Standar) × 100% = (Rp 40.000 / Rp 50.000) × 100% = 80,00%.\n• Kesimpulan: SANGAT EFISIEN. Dengan biaya yang lebih rendah (hemat Rp 10.000/paket), dinas justru mampu memproduksi output 20.000 paket lebih banyak (110% dari target fisik output).\n\n3. Kalkulasi Rasio Efektivitas (Spending Wisely):\n• Target Capaian Outcome = Penurunan prevalensi stunting 8,00% poin.\n• Realisasi Capaian Outcome Aktual = Penurunan prevalensi stunting 10,00% poin (dari 24% menjadi 14%).\n• Rasio Efektivitas = (Realisasi Capaian / Target Capaian) × 100% = (10,0% / 8,0%) × 100% = 125,00%.\n• Kesimpulan: SANGAT EFEKTIF (Melebihi target yang ditetapkan sebesar 125%).\n\n4. Sintesis Kinerja Value for Money:\n• Program Penurunan Stunting Kabupaten Sukamaju MEMENUHI SELURUH KRITERIA VALUE FOR MONEY secara paripurna:\n  - Ekonomis: Menghabiskan biaya 12% lebih rendah dari pagu APBD.\n  - Efisien: Menghasilkan output fisik 110% dengan biaya satuan 20% lebih murah.\n  - Efektif: Mencapai dampak penurunan stunting 125% melampaui target strategis daerah.\n• Program ini layak dijadikan benchmark percontohan program nasional (best practice).\n\n5. Teori Efisiensi vs Efektivitas:\n• Program publik dapat menjadi 'Efisien tapi Tidak Efektif' apabila instansi berhasil memproduksi barang/jasa dengan biaya murah dan jumlah banyak, namun barang/jasa tersebut salah sasaran, salah formula, atau tidak menyelesaikan akar permasalahan publik (misal membeli buku murah dalam jumlah jutaan tetapi buku tersebut tidak sesuai kurikulum sehingga menumpuk di gudang).\n• Pada kasus Dinas Kesehatan ini, efektivitas berhasil dicapai bersamaan dengan efisiensi karena distribusi paket PMT dipantau secara klinis oleh kader Posyandu langsung ke mulut balita sasaran, sehingga output tambahan benar-benar bertransformasi menjadi perbaikan gizi nyata."
  },
  {
    "type": "analysis",
    "scope": "TM 11: Audit Sektor Publik, Opini BPK RI, & SPKN",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 11: Analisis Laporan Hasil Pemeriksaan (LHP) BPK RI, Penentuan Kategori Opini Audit, dan Penyusunan Action Plan Tindak Lanjut 60 Hari",
    "context": "Badan Pemeriksa Keuangan (BPK RI) Perwakilan Provinsi menyelesaikan audit atas Laporan Keuangan Pemerintah Daerah (LKPD) Kabupaten Sejahtera Tahun Anggaran 2024. Dalam draf temuan audit, tim pemeriksa BPK menemukan 3 masalah signifikan:\n1. Kelemahan SPI Aset Tetap: Aset Tetap Peralatan dan Mesin senilai Rp 85 miliar tidak didukung Kartu Inventaris Barang (KIB) yang memadai dan fisik barang senilai Rp 32 miliar tidak diketahui keberadaannya.\n2. Ketidakpatuhan Perundang-undangan: Ditemukan kekurangan volume pekerjaan fisik pada 12 paket proyek peningkatan jalan di Dinas Bina Marga sebesar Rp 14 miliar yang telah dibayar penuh 100% kepada kontraktor.\n3. Kas di Bendahara Pengeluaran: Terdapat tekor kas (kas tekor) di Sekretariat DPRD senilai Rp 3,5 miliar yang digunakan bendahara untuk kepentingan pribadi tanpa SPJ sah.\nTotal belanja modal pemda adalah Rp 400 miliar dan total aset tetap tercatat Rp 2.500 miliar.",
    "data": [
      "Temuan 1 (Aset Tetap): Fisik aset Rp 32 miliar tidak dapat ditelusuri keberadaannya (dari total aset tetap Rp 2,5 triliun).\n• Materialitas: Dampak material pada akun Neraca Aset Tetap.",
      "Temuan 2 (Kelebihan Bayar Kontraktor): Kekurangan volume pekerjaan jalan Rp 14 miliar (telah dibayar kas 100%).\n• Pelanggaran hukum dan potensi kerugian daerah.",
      "Temuan 3 (Tekor Kas Bendahara): Penggelapan kas kasda Rp 3,5 miliar di Setwan.",
      "Ketentuan Regulasi: UU No. 15 Tahun 2004 Pasal 16 & Pasal 20 (Opini Audit dan Kewajiban Tindak Lanjut 60 Hari Kalender)."
    ],
    "instructions": [
      "Berdasarkan 4 kriteria pemberian opini audit oleh BPK RI (Kesesuaian SAP, Kecukupan Pengungkapan, Kepatuhan Peraturan, dan Efektivitas SPI), analisislah kriteria mana saja yang dilanggar oleh Pemkab Sejahtera.",
      "Tentukan rekomendasi jenis opini audit yang paling tepat diberikan oleh BPK RI atas LKPD Kabupaten Sejahtera (WTP, WTP dengan Paragraf Penjelas, WDP, TW, atau TMP/Disclaimer) beserta dasar pertimbangan materialitasnya.",
      "Berdasarkan UU No. 15 Tahun 2004, jelaskan tenggat waktu maksimal bagi Bupati untuk menindaklanjuti rekomendasi temuan BPK dan sanksi hukum jika tidak ditindaklanjuti.",
      "Susun Rencana Aksi (Action Plan) konkret 60 hari bagi Inspektorat Daerah dan SKPD terkait untuk menyelesaikan ketiga temuan audit tersebut."
    ],
    "outputFormat": [
      "Evaluasi 4 Kriteria Audit BPK",
      "Penetapan dan Justifikasi Opini Audit BPK",
      "Ketentuan Hukum Tindak Lanjut Rekomendasi LHP",
      "Matriks Rencana Aksi (Action Plan) 60 Hari"
    ],
    "rubric": [
      "Ketajaman analisis 4 kriteria audit BPK (25%)",
      "Ketepatan justifikasi penetapan opini audit WDP vs TMP (35%)",
      "Akurasi regulasi kewajiban 60 hari UU 15/2004 (15%)",
      "Kualitas matriks rencana aksi penyelesaian kerugian daerah (25%)"
    ],
    "answerGuide": "1. Evaluasi Empat Kriteria Pemberian Opini BPK RI:\n• Kesesuaian dengan SAP: Dilanggar. Akun Aset Tetap Peralatan & Mesin tidak dapat diyakini kewajaran saldonya karena fisik aset Rp 32 miliar tidak ditemukan (melanggar PSAP 07 Aset Tetap).\n• Kecukupan Pengungkapan (Adequacy of Disclosures): Dilanggar. CaLK tidak memuat rincian keberadaan fisik dan status hukum aset tetap yang hilang.\n• Kepatuhan terhadap Peraturan Perundang-undangan: Dilanggar berat. Terjadi kekurangan volume fisik pekerjaan jalan Rp 14 miliar yang melanggar kontrak pengadaan dan kelebihan bayar, serta tindak pidana penyalahgunaan kas Rp 3,5 miliar di Setwan.\n• Efektivitas Sistem Pengendalian Intern (SPI): Dilanggar. Pengendalian aset dinas dan rekonsiliasi kas bendahara tidak berfungsi preventif.\n\n2. Rekomendasi Jenis Opini Audit BPK RI:\n• OPINI AUDIT: WAJAR DENGAN PENGECUALIAN (WDP / Qualified Opinion).\n• Dasar Pertimbangan: Masalah aset tetap Rp 32 miliar dan kekurangan volume jalan Rp 14 miliar bernilai material terhadap akun terkait, namun pengaruhnya TIDAK PERVASIF (tidak merusak kewajaran laporan keuangan pemda secara menyeluruh, karena akun pendapatan, belanja pegawai, dan kasda utama masih dapat diyakini keandalannya). Oleh karena itu, BPK mengecualikan pos Aset Tetap dan pos Beban Belanja Modal Jalan, sementara pos laporan lainnya dinilai wajar.\n\n3. Ketentuan Hukum Tindak Lanjut (UU 15/2004):\n• Berdasarkan Pasal 20 ayat (3) UU No. 15/2004, Bupati/pejabat yang diperiksa WAJIB memberikan jawaban tindak lanjut atas rekomendasi BPK selambat-lambatnya 60 (enam puluh) hari setelah LHP diterima.\n• Sanksi: Pejabat yang tidak melaksanakan kewajiban tindak lanjut dapat dikenai sanksi administratif kepegawaian dan sanksi pidana penjara paling lama 1 tahun 6 bulan dan/atau denda paling banyak Rp 500 juta (Pasal 26 UU 15/2004), serta temuan kerugian daerah dilimpahkan BPK ke Kejaksaan/Kepolisian/KPK.\n\n4. Matriks Action Plan Tindak Lanjut 60 Hari:\n• Temuan 1 (Aset Tetap Rp 32 M): Bentuk Tim Sensus Aset Khusus; lakukan penelusuran fisik aset ke seluruh dinas; jika rusak berat buat usulan SK Penghapusan Aset Bupati; jika hilang oleh pejabat terbitkan Surat Keterangan Tanggung Jawab Mutlak (SKTJM).\n• Temuan 2 (Kekurangan Volume Jalan Rp 14 M): Terbitkan Surat Tagihan Kerugian Daerah (STKD) kepada 12 rekanan kontraktor; wajibkan setor kembali uang kas Rp 14 miliar ke Rekening Kasda paling lambat 60 hari; jika ingkar, blokir jaminan pemeliharaan di bank dan blacklist perusahaan.\n• Temuan 3 (Tekor Kas Setwan Rp 3,5 M): Copot bendahara dari jabatan; tandatangani SKTJM penyitaan aset pribadi pelaku; jika kas tidak dikembalikan dalam 60 hari, serahkan kasus ke Aparat Penegak Hukum (APH) sebagai tindak pidana korupsi."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Akuntansi Partai Politik, Bantuan APBN/APBD, & Audit BPK",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 12: Akuntansi Bantuan Keuangan Partai Politik dari APBD Berdasarkan Permendagri 78/2020 dan Pemeriksaan Kepatuhan",
    "context": "Dewan Pimpinan Cabang (DPC) Partai Amanat Rakyat di Kabupaten Sejahtera memperoleh 80.000 suara sah pada pemilu legislatif terakhir. Berdasarkan Peraturan Bupati, nilai bantuan keuangan partai politik per suara sah ditetapkan sebesar Rp 3.000 per suara. Pada tahun anggaran 2025, DPC menerima pencairan dana bantuan keuangan APBD sebesar Rp 240.000.000. Sepanjang tahun, bendahara partai mencatat pengeluaran sebagai berikut:\n• Kegiatan Workshop dan Pendidikan Politik Kader Perempuan & Pemuda: Rp 120.000.000\n• Pembelian Kaos, Bendera, dan Spanduk Kampanye Pilkada: Rp 45.000.000\n• Sewa Kantor Sekretariat DPC dan Tagihan Listrik/Internet: Rp 55.000.000\n• Pembelian Alat Tulis Kantor dan Komputer Sekretariat: Rp 20.000.000",
    "data": [
      "Suara Sah Pemilu: 80.000 suara sah.",
      "Nilai Bantuan: Rp 3.000 / suara sah (Total Dana Cair APBD = Rp 240.000.000).",
      "Realisasi Belanja Partai:\n  - Workshop Pendidikan Politik: Rp 120.000.000 (50,0%)\n  - Alat Peraga Kampanye Pilkada: Rp 45.000.000 (18,75%)\n  - Sewa Kantor & Utilitas Sekretariat: Rp 55.000.000 (22,92%)\n  - ATK & Komputer Sekretariat: Rp 20.000.000 (8,33%)\n  - Total Pengeluaran = Rp 240.000.000 (100%).",
      "Ketentuan Regulasi: UU No. 2 Tahun 2011 Pasal 34 & Permendagri No. 78 Tahun 2020 (Alokasi minimal 60% untuk pendidikan politik, maksimal 40% untuk operasional kesekretariatan; Larangan keras penggunaan dana bantuan APBD untuk kegiatan kampanye pemilu/pilkada)."
    ],
    "instructions": [
      "Hitung alokasi batas minimal dana untuk Pendidikan Politik (minimal 60%) dan batas maksimal untuk Operasional Kesekretariatan (maksimal 40%) dari total bantuan Rp 240.000.000.",
      "Klasifikasikan realisasi pengeluaran DPC Partai Amanat Rakyat ke dalam kelompok yang sah (Eligible) dan kelompok yang dilarang/tidak sah (Ineligible).",
      "Evaluasi apakah DPC mematuhi ketentuan proporsi 60% pendidikan politik.",
      "Jelaskan temuan audit apa yang akan diterbitkan oleh BPK RI atas penggunaan dana bantuan tersebut dan konsekuensi hukum/sanksi finansial bagi partai politik pada tahun anggaran berikutnya."
    ],
    "outputFormat": [
      "Perhitungan Plafon Alokasi Regulasi (60% vs 40%)",
      "Tabel Klasifikasi Belanja Partai (Eligible vs Ineligible)",
      "Evaluasi Kepatuhan terhadap Permendagri 78/2020",
      "Temuan Pemeriksaan BPK RI dan Sanksi Hukum"
    ],
    "rubric": [
      "Ketepatan perhitungan proporsi regulasi 60% vs 40% (25%)",
      "Ketepatan identifikasi pos belanja yang dilarang/kampanye (35%)",
      "Akurasi evaluasi kepatuhan persentase pendidikan politik (20%)",
      "Ketajaman analisis konsekuensi audit BPK dan sanksi administratif (20%)"
    ],
    "answerGuide": "1. Plafon Alokasi Berdasarkan Permendagri 78/2020:\n• Total Bantuan Diterima = Rp 240.000.000\n• Alokasi Minimal Pendidikan Politik (60%) = 60% × Rp 240.000.000 = Rp 144.000.000.\n• Alokasi Maksimal Operasional Sekretariat (40%) = 40% × Rp 240.000.000 = Rp 96.000.000.\n\n2. Klasifikasi Belanja Partai:\n• Kelompok Belanja Sah (Eligible Expenses):\n  - Workshop Pendidikan Politik = Rp 120.000.000 (Kategori: Pendidikan Politik)\n  - Sewa Kantor Sekretariat & Utilitas = Rp 55.000.000 (Kategori: Operasional Sekretariat)\n  - ATK & Komputer Kantor = Rp 20.000.000 (Kategori: Operasional Sekretariat)\n  - Total Belanja Operasional Sah = Rp 55 M + Rp 20 M = Rp 75.000.000 (Memenuhi batas < Rp 96 juta).\n• Kelompok Belanja Dilarang (Ineligible / Illegal Expenses):\n  - Pembelian Kaos, Bendera, dan Spanduk Kampanye Pilkada = Rp 45.000.000.\n  - Alasan: UU No. 2/2011 Pasal 34 ayat (3) secara eksplisit MELARANG penggunaan dana bantuan keuangan APBN/APBD untuk membiayai kampanye politik, kontestasi pilkada, atau kegiatan mencari keuntungan komersial.\n\n3. Evaluasi Kepatuhan Proporsi Pendidikan Politik:\n• Realisasi Pendidikan Politik Sah = Rp 120.000.000.\n• Persentase Realisasi = (Rp 120.000.000 / Rp 240.000.000) × 100% = 50,00%.\n• Evaluasi: TIDAK PATUH / MELANGGAR HUKUM. Partai hanya mengalokasikan 50,00% (kurang 10,0% poin atau tekor Rp 24.000.000 dari syarat minimal 60% yaitu Rp 144.000.000).\n\n4. Temuan Pemeriksaan BPK RI dan Sanksi:\n• Temuan Audit BPK: (1) Penggunaan dana bantuan APBD untuk belanja kampanye pilkada yang dilarang sebesar Rp 45.000.000; dan (2) Ketidakpatuhan pemenuhan alokasi wajib pendidikan politik minimal 60%.\n• Konsekuensi Finansial: DPC Partai Amanat Rakyat WAJIB menyetorkan kembali uang kas sebesar Rp 45.000.000 ke Rekening Kas Umum Daerah (Kasda) sebagai pemulihan kerugian keuangan daerah.\n• Sanksi Hukum: Berdasarkan Permendagri 78/2020 Pasal 28, jika partai politik tidak menindaklanjuti rekomendasi BPK untuk mengembalikan dana yang tidak sah, pemerintah daerah akan MENANGGUHKAN / MENGHENTIKAN PENCAIRAN bantuan keuangan partai politik untuk tahun anggaran berikutnya sampai kewajiban diselesaikan."
  },
  {
    "type": "calculation",
    "scope": "TM 13: Pola Pengelolaan Keuangan BLU/BLUD & Fleksibilitas RBA",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 13: Pola Pengelolaan Keuangan BLUD Rumah Sakit: Fleksibilitas Penggunaan Pendapatan Langsung, RBA, dan Ambang Batas Belanja",
    "context": "RSUD Sehat Mandiri adalah Rumah Sakit Umum Daerah yang menerapkan Pola Pengelolaan Keuangan Badan Layanan Umum Daerah (PPK-BLUD) penuh. Pada DPA-RBA Tahun Anggaran 2025, target Pendapatan Layanan Medis ditetapkan Rp 50.000.000.000 dengan pagu Belanja Operasional sebesar Rp 48.000.000.000. Kepala Daerah menetapkan Ambang Batas Fleksibilitas Belanja (Flexibility Threshold) sebesar 10% dari pagu belanja DPA. Sepanjang tahun 2025, karena lonjakan pasien rawat inap, realisasi Pendapatan Layanan Medis RSUD melonjak menjadi Rp 58.000.000.000 (melampaui target sebesar Rp 8.000.000.000 atau tumbuh 16%). Manajemen rumah sakit menambah pembelian obat-obatan dan insentif tenaga medis sehingga realisasi belanja operasional menjadi Rp 53.500.000.000.",
    "data": [
      "Target Pendapatan Jasa Layanan DPA: Rp 50.000.000.000.",
      "Realisasi Pendapatan Aktual: Rp 58.000.000.000 (Kenaikan Rp 8.000.000.000 atau 16%).",
      "Pagu Belanja DPA Awal: Rp 48.000.000.000.",
      "Ambang Batas Fleksibilitas Belanja: 10,00% dari pagu belanja awal.",
      "Realisasi Belanja Aktual: Rp 53.500.000.000 (Melampaui pagu belanja awal sebesar Rp 5.500.000.000).",
      "Ketentuan Regulasi: Permendagri No. 79 Tahun 2018 tentang Badan Layanan Umum Daerah (Penggunaan langsung pendapatan BLUD dan mekanisme perubahan RBA)."
    ],
    "instructions": [
      "Jelaskan prinsip 'fleksibilitas penggunaan langsung' pendapatan pada BLUD dibandingkan SKPD dinas daerah biasa.",
      "Hitung batas maksimal pengeluaran belanja operasional yang diizinkan menggunakan formula Ambang Batas Fleksibilitas (Pagu Awal + Ambang Batas Fleksibilitas 10%).",
      "Bandingkan realisasi belanja aktual RSUD (Rp 53,5 miliar) dengan batas maksimal belanja fleksibilitas tersebut. Apakah kelebihan belanja sebesar Rp 5,5 miliar tersebut masih berada dalam koridor fleksibilitas hukum BLUD?",
      "Hitung Surplus Operasional BLUD tahun berjalan.",
      "Jelaskan prosedur administratif yang wajib dilakukan Direktur RSUD dalam melaporkan kelebihan belanja fleksibilitas tersebut kepada Pejabat Pengelola Keuangan Daerah (PPKD) untuk penyusunan Laporan Keuangan Pemda Konsolidasian."
    ],
    "outputFormat": [
      "Penjelasan Teoretis Fleksibilitas PPK-BLUD",
      "Kalkulasi Batas Maksimal Belanja Ambang Fleksibilitas",
      "Analisis Kepatuhan Hukum Belanja Operasional",
      "Kalkulasi Surplus Kas Operasional BLUD",
      "Prosedur Akuntansi Konsolidasi ke PPKD"
    ],
    "rubric": [
      "Ketepatan penjelasan konsep fleksibilitas BLUD (20%)",
      "Akurasi perhitungan ambang batas belanja fleksibilitas (30%)",
      "Ketepatan analisis kepatuhan hukum realisasi belanja (25%)",
      "Akurasi surplus dan kejelasan prosedur pelaporan RBA ke PPKD (25%)"
    ],
    "answerGuide": "1. Fleksibilitas Penggunaan Langsung PPK-BLUD:\n• SKPD Biasa (Non-BLUD): Seluruh pendapatan retribusi wajib disetor utuh ke Kas Daerah (Kasda) terlebih dahulu, dan pengeluaran belanja harus menunggu SP2D dari BUD yang dibatasi ketat oleh pagu DPA murni.\n• Satker BLUD: Pendapatan fungsional jasa medis dapat langsung digunakan untuk mendanai kebutuhan operasional rumah sakit (beli obat, oksigen, honor dokter spesialis) tanpa harus disetor ke Kasda terlebih dahulu, menjamin kontinuitas dan keselamatan layanan pasien 24 jam.\n\n2. Kalkulasi Ambang Batas Fleksibilitas Belanja:\n• Pagu Belanja DPA Awal = Rp 48.000.000.000.\n• Persentase Ambang Batas Fleksibilitas = 10,00%.\n• Toleransi Tambahan Belanja Maksimal = 10% × Rp 48.000.000.000 = Rp 4.800.000.000 (syarat: kenaikan pendapatan harus mampu menutupnya).\n• Batas Maksimal Belanja Tanpa Perubahan APBD = Pagu Awal + Toleransi = Rp 48.000.000.000 + Rp 4.800.000.000 = Rp 52.800.000.000.\n\n3. Analisis Kepatuhan Realisasi Belanja:\n• Realisasi Belanja Aktual = Rp 53.500.000.000.\n• Batas Maksimal Fleksibilitas = Rp 52.800.000.000.\n• Kelebihan Belanja di Atas Ambang Batas = Rp 53.500.000.000 - Rp 52.800.000.000 = Rp 700.000.000.\n• Evaluasi Kepatuhan: Belanja sebesar Rp 4,8 miliar sah secara otomatis di bawah instrumen fleksibilitas belanja. Namun, kelebihan belanja sebesar Rp 700 juta MELEBIHI ambang batas fleksibilitas 10%. Untuk kelebihan di atas ambang batas (Rp 700 juta), Direktur RSUD WAJIB memperoleh persetujuan terlebih dahulu dari Kepala Daerah (Bupati/Walikota) melalui usulan Perubahan RBA sebelum dibelanjakan.\n\n4. Kalkulasi Surplus Operasional BLUD:\n• Realisasi Pendapatan Jasa Layanan = Rp 58.000.000.000\n• Realisasi Belanja Operasional = Rp 53.500.000.000\n• Surplus Operasional Bersih BLUD = Rp 58.000.000.000 - Rp 53.500.000.000 = +Rp 4.500.000.000 (Rp 4,5 miliar).\n• Surplus kas ini menjadi Saldo Kas BLUD yang dapat dikelola secara mandiri untuk investasi sarana medis tahun depan sesuai regulasi Permendagri 79/2018.\n\n5. Prosedur Pelaporan Konsolidasi ke PPKD:\n• Surat Pengesahan Pendapatan dan Belanja (SP2B-BLUD): Direktur RSUD setiap triwulan menyampaikan laporan realisasi pendapatan dan belanja BLUD kepada PPKD melalui dokumen SP2B-BLUD.\n• Pengesahan SP3B: PPKD menerbitkan Surat Pengesahan Pendapatan, Belanja, dan Pembiayaan (SP3B) sebagai dasar pembukuan di buku besar kas pemda.\n• Konsolidasi PSAP 13: Angka pendapatan dan belanja RSUD dikonsolidasikan ke dalam LRA dan LO Pemerintah Daerah secara bruto, dan saldo kas BLUD disajikan sebagai pos 'Kas pada BLUD' di kelompok Aset Lancar Neraca Pemda."
  },
  {
    "type": "analysis",
    "scope": "TM 14: Topik Kontemporer, SIPD, Green Budgeting, & Anti-Fraud Pengadaan",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 14: Integrasi Sistem Informasi Pemerintahan Daerah (SIPD), Climate Budget Tagging, dan Mitigasi Fraud Pengadaan Barang dan Jasa",
    "context": "Pemerintah Kota Hijau Lestari sedang melakukan modernisasi tata kelola fiskal daerah dengan mengintegrasikan sistem perencanaan dan penatausahaan keuangan ke dalam Sistem Informasi Pemerintahan Daerah (SIPD RI). Pada APBD 2026, Walikota berkomitmen menerapkan 'Green Budgeting' melalui metodologi Climate Budget Tagging (CBT) untuk menandai belanja mitigasi bencana banjir dan penurunan emisi karbon. Namun di sisi lain, hasil evaluasi integritas KPK menunjukkan celah risiko fraud pengadaan barang dan jasa pada tahap perencanaan e-Katalog dan pemecahan paket pekerjaan (split contracts) untuk menghindari tender terbuka.",
    "data": [
      "Total Belanja APBD Kota: Rp 3.000.000.000.000 (Rp 3 triliun).",
      "Inisiatif Climate Budget Tagging (CBT):\n  - Sub-kegiatan Mitigasi Iklim Ter-tagging (Ruang Terbuka Hijau, Transportasi Listrik massal): Rp 180 miliar.\n  - Sub-kegiatan Adaptasi Iklim (Normalisasi tanggul sungai, drainase porus): Rp 270 miliar.\n  - Total Belanja Perubahan Iklim = Rp 450 miliar.",
      "Indikasi Fraud Pengadaan Barang/Jasa (PBJ):\n  - Pemecahan 40 paket pengadaan paving jalan lingkungan masing-masing bernilai Rp 195.000.000 (total Rp 7,8 miliar) melalui Pengadaan Langsung non-tender kepada 3 rekanan yang terafiliasi dengan keluarga pejabat dinas.\n  - Penggelembungan harga satuan (mark-up) pada e-Katalog lokal untuk komoditas bibit pohon penghijauan sebesar 50% di atas harga pasar wajar."
    ],
    "instructions": [
      "Hitung persentase alokasi Green Budgeting (Climate Budget Tagging) terhadap total APBD Kota Hijau Lestari. Jelaskan signifikansi pelacakan fiskal ini dalam mendukung target Nationally Determined Contribution (NDC) Indonesia.",
      "Jelaskan bagaimana interoperabilitas data pada aplikasi SIPD RI (dari e-Planning, e-Budgeting, hingga e-Penatausahaan) secara teknis mampu membatasi intervensi 'anggaran siluman' (pokir liar tak berdasar) yang kerap muncul di luar Musrenbang.",
      "Berdasarkan Perpres No. 16 Tahun 2018 jo. Perpres No. 12 Tahun 2021 tentang Pengadaan Barang/Jasa Pemerintah, analisislah modus 'pemecahan paket pengadaan' (paving Rp 195 juta) dan penggelembungan e-Katalog tersebut. Aturan apa yang dilanggar?",
      "Rancang strategi pengendalian intern (SPIP) dan peran pengawasan Inspektorat Daerah (APIP) berbasis Audit Digital dan Whistleblowing System (WBS) untuk mencegah fraud pengadaan hijau tersebut."
    ],
    "outputFormat": [
      "Kalkulasi Rasio Green Budgeting (CBT) & Analisis Kebijakan",
      "Analisis Peran Sistemik SIPD dalam Integritas Anggaran",
      "Analisis Yuridis Pelanggaran Fraud Pengadaan (PBJ)",
      "Strategi Pengendalian Intern APIP & Whistleblowing System"
    ],
    "rubric": [
      "Ketepatan perhitungan dan pemahaman konsep Climate Budget Tagging (25%)",
      "Kedalaman analisis peran teknologi SIPD dalam pencegahan korupsi anggaran (25%)",
      "Ketajaman analisis hukum modus fraud pemecahan paket pengadaan (25%)",
      "Kualitas desain strategi pengawasan APIP dan WBS digital (25%)"
    ],
    "answerGuide": "1. Kalkulasi Green Budgeting (Climate Budget Tagging):\n• Total Belanja Perubahan Iklim = Mitigasi (Rp 180 M) + Adaptasi (Rp 270 M) = Rp 450 miliar.\n• Total Belanja APBD = Rp 3.000 miliar (Rp 3 triliun).\n• Rasio Green Budgeting = (Rp 450 M / Rp 3.000 M) × 100% = 15,00%.\n• Signifikansi Kebijakan: Penandaan anggaran (tagging) 15% membuktikan komitmen politik anggaran daerah dalam mendukung komitmen global dan target NDC nasional untuk menurunkan emisi karbon serta memitigasi dampak bencana hidrometeorologi secara terukur, transparan, dan dapat diaudit secara akuntabel.\n\n2. Peran Sistemik Aplikasi SIPD RI:\n• Kuncian Data Terintegrasi (Data Locking): SIPD mengunci integrasi pohon kinerja dari RPJMD -> Renstra -> Renja -> KUA-PPAS -> RKA. Sub-kegiatan yang tidak memiliki keterkaitan logis pada dokumen perencanaan tidak dapat diinput ke dalam sistem anggaran.\n• Digital Audit Trail: Setiap perubahan angka dan penambahan pos belanja terekam jejak digitalnya (siapa user, waktu, dan IP address penginput), sehingga modus penyelundupan 'anggaran siluman' atau pokok pikiran (pokir) ilegal tanpa berita acara Musrenbang otomatis tertolak oleh sistem validasi SIPD.\n\n3. Analisis Pelanggaran Yuridis Pengadaan (Perpres PBJ):\n• Modus Pemecahan Paket (Split Contracts): Pasal 20 Perpres 16/2018 secara tegas melarang Pengguna Anggaran (PA/PPK) 'memecah pengadaan barang/jasa menjadi beberapa paket dengan maksud menghindari tender/seleksi'. Batas maksimal Pengadaan Langsung tanpa tender adalah Rp 200 juta. Memecah proyek paving Rp 7,8 miliar menjadi 40 paket @ Rp 195 juta kepada pihak terafiliasi merupakan tindak pidana persekongkolan dan penyalahgunaan wewenang untuk menghindari tender lelang terbuka LPSE.\n• Penggelembungan E-Katalog (Mark-up 50%): Melanggar prinsip dasar pengadaan (efisien dan akuntabel) serta etika pengadaan. PPK dan Pokja Pemilihan wajib melakukan mini-kompetisi harga dan negosiasi harga wajar dengan mengacu pada struktur biaya riil produsen bibit tanaman, bukan langsung mengeklik penyedia yang menetapkan harga tidak wajar.\n\n4. Strategi Pengendalian Intern APIP & Whistleblowing System:\n• Continuous Auditing via Digital Analytic: Inspektorat mengintegrasikan tools analytics pada basis data SIPD dan LPSE untuk memicu 'Red Flag' otomatis jika ada paket belanja berulang di bawah batas Rp 200 juta dengan penyedia yang sama/terafiliasi.\n• Probity Audit Pengadaan Strategis: Terapkan audit kepatutan (probity audit) sejak reviu Rencana Umum Pengadaan (RUP) dan penyusunan HPS pengadaan hijau.\n• Saluran Whistleblowing System (WBS) Independen: Bangun portal WBS terenkripsi yang menjamin kerahasiaan identitas pelapor (whistleblower protection) dan terkoneksi langsung dengan platform JAGA KPK, memungkinkan staf internal dan masyarakat melaporkan persekongkolan tender secara aman."
  }
];

export const AKS201_BANK: BankSoal[] = [...AKS201_BANK_UTS, ...AKS201_BANK_UAS];
