// src/data/flashcards/akk202.ts
// Flashcard komprehensif Akuntansi Keuangan Menengah II (AKK202) — 82 kartu (6 kartu per TM, TM 6 memuat 10 kartu; kartu TM 8 lama dihapus)
// Kartu TM 1-7 mengikuti bacaan kanonik src/data/akm2/modules/tm1.ts-tm7.ts; kartu yang isinya berubah memakai id akk202-v2-tmXX-YY.
import type { AdvancedStudyCard } from '../../types';

export const AKK202_FC: AdvancedStudyCard[] = [
  {
    "id": "akk202-v2-tm01-01",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "category": "Rumus",
    "front": "Biaya Perolehan Awal Aset Tetap (PSAK 216)",
    "back": "Harga beli neto + biaya atribusi langsung (persiapan lokasi, angkut, instalasi, trial run, jasa profesional) + nilai kini estimasi pembongkaran/restorasi. Pelatihan, pembukaan fasilitas, iklan, dan administrasi umum adalah beban periode."
  },
  {
    "id": "akk202-v2-tm01-02",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "category": "Perbandingan",
    "front": "Pembongkaran Gedung Lama: Masuk Tanah atau Rugi?",
    "back": "Gedung pada tanah yang baru dibeli dan memang akan dibongkar: biaya pembongkaran neto (dikurangi hasil puing) menambah Land. Gedung milik sendiri yang kemudian dibongkar: nilai buku dan biaya terkait menjadi loss on disposal."
  },
  {
    "id": "akk202-v2-tm01-03",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "category": "Hukum",
    "front": "Kapitalisasi Biaya Pinjaman (PSAK 223)",
    "back": "Wajib dikapitalisasi untuk aset kualifikasian sebesar min(avoidable interest, actual interest) selama aktivitas penyiapan berlangsung; pendapatan investasi dana spesifik yang menganggur mengurangi jumlahnya. SAK Entitas Privat Bab 25.2 membebankan seluruh biaya pinjaman."
  },
  {
    "id": "akk202-tm01-04",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "category": "Mekanisme",
    "front": "Model Nilai Wajar Properti Investasi",
    "back": "Perubahan nilai wajar diakui langsung dalam Laporan Laba Rugi pada periode terjadinya, dan aset TIDAK disusutkan."
  },
  {
    "id": "akk202-v2-tm01-05",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "category": "Standar",
    "front": "Hak atas Tanah Indonesia (ISAK 336)",
    "back": "Hak Milik tidak diamortisasi. Biaya legal awal HGB/HGU/Hak Pakai dikapitalisasi ke biaya perolehan tanah. Biaya pembaruan/perpanjangan hak diakui sebagai aset hak-guna/beban tangguhan dan diamortisasi selama masa legal hak."
  },
  {
    "id": "akk202-v2-tm01-06",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "category": "Mekanisme",
    "front": "Cost Model vs Revaluation Model Aset Tetap",
    "back": "Revaluasi berlaku untuk seluruh kelas aset. Kenaikan pertama ke OCI (revaluation surplus); penurunan pertama ke laba rugi. Selisih depresiasi berbasis nilai wajar dan berbasis cost ditransfer dari AOCI ke saldo laba langsung dalam ekuitas, tidak melalui laba rugi."
  },
  {
    "id": "akk202-v2-tm02-01",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "category": "Konsep",
    "front": "Uji Kapitalisasi Pengeluaran setelah Perolehan",
    "back": "Kapitalisasi hanya bila manfaat ekonomi masa depan probable (umur, kapasitas, mutu naik, atau biaya operasi turun) dan biaya dapat diukur andal: additions, improvements, replacements, overhaul besar. Perawatan rutin dan rearrangement dibebankan."
  },
  {
    "id": "akk202-v2-tm02-02",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "category": "Prosedur",
    "front": "Substitution Approach saat Mengganti Komponen",
    "back": "Hapus cost dan akumulasi depresiasi komponen lama, akui gain/loss = hasil pelepasan neto − nilai tercatat komponen lama, lalu kapitalisasi cost komponen baru. Contoh Instinct Enterprises: pipa lama nilai buku £15.000, scrap £1.000, rugi £14.000."
  },
  {
    "id": "akk202-v2-tm02-03",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "category": "Mekanisme",
    "front": "Konversi Terpaksa (Involuntary Conversion) Dua Tahap",
    "back": "Tahap 1 (tanggal bencana): hapus aset dan akui casualty loss sebesar nilai buku. Tahap 2 (klaim disepakati): catat kas/piutang asuransi dan gain from insurance settlement. Klaim yang belum disepakati adalah aset kontinjensi, jadi belum diakui."
  },
  {
    "id": "akk202-v2-tm02-04",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "category": "Prosedur",
    "front": "Pelepasan (Disposal) Aset Tetap",
    "back": "Perbarui depresiasi sampai tanggal pelepasan lebih dulu. Lalu debit kas/piutang dan seluruh akumulasi depresiasi, kredit aset sebesar cost, dan akui gain/loss = imbalan neto − nilai buku pada tanggal pelepasan."
  },
  {
    "id": "akk202-tm02-05",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "category": "Hukum",
    "front": "Pertukaran Aset Memiliki Substansi Komersial",
    "back": "Aset baru dicatat pada nilai wajar aset yang diserahkan (atau aset diterima), dan seluruh laba atau rugi pertukaran diakui seketika."
  },
  {
    "id": "akk202-v2-tm02-06",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "category": "Hukum",
    "front": "Pertukaran Tanpa Substansi Komersial (IFRS)",
    "back": "Tidak ada gain maupun loss yang diakui pada tanggal pertukaran. Basis aset baru = nilai buku aset diserahkan + kas dibayar − kas diterima (Interstate: $42.000 + $11.000 = $53.000). Nilai wajar di bawah nilai tercatat dievaluasi sebagai impairment (IAS 36), bukan rugi pertukaran."
  },
  {
    "id": "akk202-v2-tm03-01",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "category": "Konsep",
    "front": "Depresiasi dan Tiga Faktor Penentunya",
    "back": "Alokasi sistematis cost (bukan penilaian ke nilai pasar) selama umur manfaat; beban nonkas yang tidak mencadangkan dana penggantian. Tiga faktor: dasar depresiasi (cost − residu), estimasi umur manfaat, dan metode yang mencerminkan pola konsumsi manfaat."
  },
  {
    "id": "akk202-v2-tm03-02",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "category": "Rumus",
    "front": "Saldo Menurun Ganda (DDB)",
    "back": "Beban = nilai buku awal tahun × 2/n. Residu tidak dikurangkan di awal; residu hanya batas bawah nilai buku pada tahun akhir. Lockard SE: €80.000 × 2/8 = €20.000 pada tahun pertama."
  },
  {
    "id": "akk202-v2-tm03-03",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "category": "Rumus",
    "front": "SYD untuk Pembelian Tengah Tahun",
    "back": "Tahun kalender 2 = (service year 1 × (12 − m)/12) + (service year 2 × m/12), dengan m = bulan pemakaian tahun pertama. Charleston (m = 7): (€21.000 × 5/12) + (€18.000 × 7/12) = €19.250."
  },
  {
    "id": "akk202-v2-tm03-04",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "category": "Rumus",
    "front": "Dasar dan Tarif Deplesi",
    "back": "Dasar = akuisisi + eksplorasi + pengembangan tidak berwujud + kewajiban restorasi − nilai residu; peralatan berwujud disusutkan terpisah. Tarif = dasar ÷ total cadangan. Deplesi didebit ke persediaan saat ekstraksi, lalu menjadi beban pokok penjualan saat terjual."
  },
  {
    "id": "akk202-v2-tm03-05",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "category": "Hukum",
    "front": "Impairment Aset Individual dan Batas Pemulihan",
    "back": "Rugi = carrying amount − recoverable amount, dengan recoverable amount = max(FVLCD, VIU). Pemulihan ke laba rugi dibatasi ceiling: nilai tercatat seandainya tidak pernah ada impairment setelah depresiasi normal. US GAAP melarang pemulihan untuk aset held and used."
  },
  {
    "id": "akk202-v2-tm03-06",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "category": "Mekanisme",
    "front": "Metode Eliminasi pada Revaluasi",
    "back": "Debit akumulasi depresiasi sampai nol, sesuaikan akun aset ke nilai wajar. Kenaikan pertama ke OCI; penurunan pertama ke Loss on Revaluation (Falcetto: €1.000). Kenaikan yang membalik rugi lama masuk laba rugi dulu; penurunan yang membalik surplus memakai OCI dulu."
  },
  {
    "id": "akk202-v2-tm04-01",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "category": "Prosedur",
    "front": "Alokasi Rugi Penurunan Nilai CGU",
    "back": "Tingkat 1: kurangi goodwill CGU sampai nol. Tingkat 2: sisa rugi pro-rata ke aset lain berdasarkan nilai tercatat relatif. Batas bawah tiap aset = max(FVLCD, VIU, 0); rugi yang tidak terserap dialokasikan ulang ke aset lain."
  },
  {
    "id": "akk202-v2-tm04-02",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "category": "Hukum",
    "front": "Aset Dimiliki untuk Dilepas (Held for Disposal)",
    "back": "Diukur pada lower of cost/nilai tercatat or nilai realisasi neto dan TIDAK didepresiasi. Dinilai ulang setiap akhir periode; write-up dibatasi nilai tercatat saat reklasifikasi. Roland 2026: tanpa depresiasi, penurunan ke €4.900.000 adalah rugi tambahan €700.000."
  },
  {
    "id": "akk202-v2-tm04-03",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "category": "Mekanisme",
    "front": "Revaluasi Tanah Multi-Periode",
    "back": "Kenaikan di atas cost ke OCI. Penurunan memakai AOCI tanah itu dulu sampai nol, sisanya ke laba rugi (AOCI tidak boleh negatif). Pemulihan berikutnya ke laba rugi dulu sebesar rugi lama (Recovery of Prior Revaluation Loss), kelebihannya ke OCI."
  },
  {
    "id": "akk202-v2-tm04-04",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "category": "Miskonsepsi",
    "front": "Surplus Revaluasi saat Aset Dijual atau Dipakai",
    "back": "Sisa AOCI ditransfer langsung ke Retained Earnings (debit AOCI, kredit Retained Earnings) dan tidak didaur ulang ke laba rugi. Transfer bertahap boleh dilakukan tiap tahun sebesar depresiasi nilai wajar − depresiasi cost historis (Su Ltd.: ¥1.100 − ¥1.000 = ¥100)."
  },
  {
    "id": "akk202-tm04-05",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "category": "Definisi",
    "front": "Unit Penghasil Kas (Cash Generating Unit / CGU)",
    "back": "Kelompok aset terkecil yang menghasilkan arus kas masuk yang sebagian besar independen dari arus kas aset lainnya."
  },
  {
    "id": "akk202-v2-tm04-06",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "category": "Konsep",
    "front": "Pemilihan Model per Kelas Aset",
    "back": "Revaluasi diterapkan pada seluruh aset dalam satu kelas, tetapi kelas berbeda boleh memakai model berbeda (mis. peralatan direvaluasi, tanah dan bangunan tetap cost). Alasan manajerial: biaya penilaian tinggi, volatilitas ekuitas, dan kesederhanaan operasional."
  },
  {
    "id": "akk202-tm05-01",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "category": "Definisi",
    "front": "Kriteria Aset Tidak Berwujud",
    "back": "Aset non-moneter yang dapat diidentifikasi, tidak memiliki wujud fisik, dan dikendalikan oleh entitas untuk menghasilkan manfaat ekonomi."
  },
  {
    "id": "akk202-v2-tm05-02",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "category": "Hukum",
    "front": "Amortisasi: Umur Terbatas vs Tidak Terbatas",
    "back": "Umur terbatas: diamortisasi selama yang lebih pendek antara umur legal dan umur manfaat, residu umumnya nol, revisi umur prospektif. Umur tidak terbatas (mis. lisensi yang dapat diperpanjang dengan biaya nominal): tidak diamortisasi, diuji penurunan nilai setiap tahun."
  },
  {
    "id": "akk202-v2-tm05-03",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "category": "Rumus",
    "front": "Goodwill dan Pembelian Murah",
    "back": "Goodwill = harga beli − nilai wajar aset neto teridentifikasi; hanya dari kombinasi bisnis, goodwill internal tidak dikapitalisasi, dan goodwill tidak diamortisasi. Bila harga beli di bawah nilai wajar aset neto, selisihnya diakui pembeli sebagai gain pembelian murah."
  },
  {
    "id": "akk202-v2-tm05-04",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "category": "Perbandingan",
    "front": "Pemulihan Impairment: Goodwill vs Aset Tidak Berwujud Lain",
    "back": "Aset tidak berwujud selain goodwill: pemulihan boleh, dibatasi nilai tercatat seandainya tidak pernah ada impairment, dilaporkan di Other income and expense. Goodwill diuji setiap tahun pada tingkat CGU dan rugi impairment-nya tidak boleh dibalik."
  },
  {
    "id": "akk202-v2-tm05-05",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "category": "Klasifikasi",
    "front": "Perlakuan Biaya Riset dan Pengembangan",
    "back": "Riset: beban. Pengembangan sebelum viabilitas ekonomi: beban R&D. Pengembangan setelah seluruh kriteria viabilitas terpenuhi: dikapitalisasi. Biaya legal memperoleh paten dikapitalisasi. Start-up, biaya organisasi, rugi operasi awal, dan iklan dibebankan."
  },
  {
    "id": "akk202-v2-tm05-06",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "category": "Miskonsepsi",
    "front": "Biaya Pembelaan Paten yang Berhasil",
    "back": "Dibebankan sebagai legal fees karena hanya mempertahankan manfaat yang diharapkan (Kieso Illustration 11.13 item 13), sehingga pada P11.1 €12.650 menjadi Legal Expense. Serupa, pembayaran tahunan dalam perjanjian waralaba adalah beban operasi, bukan aset."
  },
  {
    "id": "akk202-v2-tm06-01",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Definisi",
    "front": "Liabilitas dan Kriteria Liabilitas Jangka Pendek",
    "back": "Liabilitas: kewajiban kini untuk mengalihkan sumber daya ekonomi akibat peristiwa masa lalu. Jangka pendek bila diselesaikan dalam siklus operasi normal, dimiliki untuk diperdagangkan, jatuh tempo dalam 12 bulan, atau entitas tidak berhak menunda penyelesaian minimal 12 bulan."
  },
  {
    "id": "akk202-v2-tm06-02",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Perbandingan",
    "front": "Utang Usaha: Metode Bruto vs Neto",
    "back": "Bruto: pembelian dicatat harga faktur penuh; diskon yang dimanfaatkan dikredit ke Purchase Discounts. Neto: pembelian dicatat setelah diskon; diskon yang terlewat didebit ke Purchase Discounts Lost sebagai beban pembiayaan."
  },
  {
    "id": "akk202-v2-tm06-03",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Mekanisme",
    "front": "Wesel Bayar Tanpa Bunga (Zero-Interest-Bearing)",
    "back": "Kas diterima sebesar nilai kini; selisih dengan nominal didebit ke Discount on Notes Payable (kontra-liabilitas) dan diamortisasi ke beban bunga. Liabilitas neto = nominal − diskonto yang belum diamortisasi (Darby: $81.000 − $4.500 = $76.500)."
  },
  {
    "id": "akk202-v2-tm06-04",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Hukum",
    "front": "Pembiayaan Kembali Utang Jangka Pendek (IFRS)",
    "back": "Boleh disajikan jangka panjang hanya bila hak membiayai kembali minimal 12 bulan sudah ada pada atau sebelum tanggal pelaporan. Perjanjian yang ditandatangani setelah tanggal pelaporan tidak mengubah klasifikasi jangka pendek; cukup diungkapkan dalam catatan."
  },
  {
    "id": "akk202-v2-tm06-05",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Hukum",
    "front": "Pengakuan dan Pengukuran Provisi (IAS 37)",
    "back": "Diakui bila ada kewajiban kini (hukum atau konstruktif) dari peristiwa masa lalu, arus keluar probable (lebih dari 50%), dan estimasi andal. Diukur dengan nilai harapan (populasi besar), hasil paling mungkin (kewajiban tunggal), titik tengah rentang, atau nilai kini bila material."
  },
  {
    "id": "akk202-v2-tm06-06",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Klasifikasi",
    "front": "Spektrum Kontinjensi",
    "back": "Liabilitas kontinjensi (possible) hanya diungkapkan dan tidak pernah diakui; yang probable dengan estimasi andal menjadi provisi. Aset kontinjensi probable hanya diungkapkan; aset baru diakui bila virtually certain. Kondisi remote tidak diakui maupun diungkapkan."
  },
  {
    "id": "akk202-v2-tm06-07",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Mekanisme",
    "front": "Rantai PPN: PPN yang Disetor (Illustration 12.2)",
    "back": "PPN disetor = keluaran − masukan: Hill Farms €100; Sunshine Baking €200 − €100 = €100; Halo €240 − €200 = €40. Total disetor €240 ditanggung konsumen; €540 = total dipungut (p. 1029). Jurnal pembelian dan penyetoran (VAT Taxes Recoverable) adalah Interpretasi (pp. 1028–1029)."
  },
  {
    "id": "akk202-v2-tm06-08",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Jurnal",
    "front": "Garansi Jaminan: Biaya Aktual Tahun Penjualan (Example 12.6)",
    "back": "Biaya aktual tahun penjualan didebit ke Warranty Expense, bukan Warranty Liability. Penyesuaian 31 Desember mengkredit Warranty Liability sebesar estimasi − biaya aktual (Denson: $20.000 − $4.000 = $16.000). Biaya tahun berikutnya mendebit Warranty Liability (p. 1042)."
  },
  {
    "id": "akk202-v2-tm06-09",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Perbandingan",
    "front": "Garansi Jasa Dijual Terpisah (Example 12.7)",
    "back": "Hamlin memisah kas €30.900 menurut harga yang dinyatakan: Sales Revenue €30.000 dan Unearned Warranty Revenue €900 (alokasi harga jual berdiri sendiri relatif: bab lain). Pendapatan €900 ÷ 3 = €300 per tahun, 2028–2030 (p. 1044). Jurnal 2029–2030 adalah Interpretasi."
  },
  {
    "id": "akk202-v2-tm06-10",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "category": "Rumus",
    "front": "Premium Liability (Example 12.8)",
    "back": "Premium Liability = estimasi biaya neto penukaran − biaya penukaran yang sudah terjadi. Fluffy: 300.000 × 60% = 180.000 tutup; 180.000 ÷ 10 × (£2 − £1) = £18.000; dikurangi £6.000 = £12.000. Premium Expense 2025 £18.000 (Kieso p. 1047)."
  },
  {
    "id": "akk202-v2-tm07-01",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "category": "Rumus",
    "front": "Harga Obligasi",
    "back": "Nilai kini pokok + nilai kini anuitas kupon, keduanya didiskontokan pada tarif efektif (pasar) per periode. Kupon = tarif efektif: pari; kupon di bawah tarif efektif: diskonto; kupon di atas tarif efektif: premi."
  },
  {
    "id": "akk202-v2-tm07-02",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "category": "Mekanisme",
    "front": "Metode Bunga Efektif (IFRS 9)",
    "back": "Beban bunga = nilai tercatat awal periode × tarif efektif; kas = nominal × tarif kupon; selisihnya adalah amortisasi. Diskonto menambah dan premi mengurangi nilai tercatat sampai sama dengan nominal saat jatuh tempo; periode terakhir menyerap pembulatan."
  },
  {
    "id": "akk202-v2-tm07-03",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "category": "Perbandingan",
    "front": "Pencatatan Diskonto/Premi: IFRS vs US GAAP",
    "back": "IFRS mencatat obligasi secara neto: diskonto atau premi langsung menambah/mengurangi Bonds Payable. US GAAP memakai akun terpisah Discount/Premium on Bonds Payable. Beban bunga dan nilai tercatat neto keduanya sama."
  },
  {
    "id": "akk202-v2-tm07-04",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "category": "Prosedur",
    "front": "Penerbitan di Antara Tanggal Bunga dan Biaya Penerbitan",
    "back": "Di antara tanggal bunga, pembeli membayar harga ditambah bunga berjalan; bunga berjalan dikredit ke Interest Expense atau Interest Payable. Biaya penerbitan mengurangi kas bersih dan nilai tercatat awal Bonds Payable (bukan aset tangguhan) sehingga tarif efektif naik."
  },
  {
    "id": "akk202-v2-tm07-05",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "category": "Hukum",
    "front": "Penghentian dan Modifikasi Utang",
    "back": "Gain (loss) = nilai tercatat bersih − harga penebusan, ke laba rugi. Pertukaran utang dengan saham (IFRIC 19): saham pada nilai wajar. Modifikasi dengan selisih nilai kini 10% atau lebih bersifat substansial: utang lama dihentikan dan utang baru dicatat pada nilai wajar."
  },
  {
    "id": "akk202-v2-tm07-06",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "category": "Standar",
    "front": "Opsi Nilai Wajar dan Penyajian Utang Jangka Panjang",
    "back": "Dengan opsi nilai wajar, perubahan akibat risiko kredit entitas sendiri masuk OCI dan sisanya laba rugi. Bagian yang jatuh tempo dalam 12 bulan dipindahkan ke liabilitas jangka pendek. Solvabilitas: debt to assets dan times interest earned."
  },
  {
    "id": "akk202-tm09-01",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "category": "Definisi",
    "front": "Metode Bunga Efektif (Effective Interest Method)",
    "back": "Metode amortisasi yang menghasilkan tingkat suku bunga periodik yang konstan terhadap nilai tercatat liabilitas obligasi."
  },
  {
    "id": "akk202-tm09-02",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "category": "Rumus",
    "front": "Formula Beban Bunga Periodik",
    "back": "Beban Bunga = Nilai Tercatat Awal Periode (Carrying Amount) × Suku Bunga Pasar Efektif saat penerbitan."
  },
  {
    "id": "akk202-tm09-03",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "category": "Rumus",
    "front": "Formula Kas Pembayaran Bunga Kupon",
    "back": "Kas Bunga = Nilai Nominal Obligasi (Par Value) × Suku Bunga Kupon Kontraktual per periode."
  },
  {
    "id": "akk202-tm09-04",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "category": "Mekanisme",
    "front": "Amortisasi Diskonto Obligasi",
    "back": "Amortisasi Diskonto = Beban Bunga Efektif - Kas Bunga Kupon; nilai ini menambah nilai tercatat obligasi menuju nilai nominal saat jatuh tempo."
  },
  {
    "id": "akk202-tm09-05",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "category": "Mekanisme",
    "front": "Amortisasi Premium Obligasi",
    "back": "Amortisasi Premium = Kas Bunga Kupon - Beban Bunga Efektif; nilai ini mengurangi nilai tercatat obligasi menuju nilai nominal saat jatuh tempo."
  },
  {
    "id": "akk202-tm09-06",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "category": "Konsep",
    "front": "Wesel Bayar Jangka Panjang Diterbitkan Kas & Aset",
    "back": "Dicatat pada nilai wajar kas atau nilai wajar aset non-kas yang diserahkan/diterima, menggunakan tingkat bunga pasar yang wajar."
  },
  {
    "id": "akk202-tm10-01",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Ekuitas: Modal Saham & Saham Treasuri",
    "category": "Definisi",
    "front": "Komponen Utama Ekuitas Pemegang Saham",
    "back": "Modal Disetor (Saham Biasa, Saham Preferen, Agio Saham/Additional Paid-in Capital), Saldo Laba (Retained Earnings), dan OCI Terakumulasi."
  },
  {
    "id": "akk202-tm10-02",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Ekuitas: Modal Saham & Saham Treasuri",
    "category": "Konsep",
    "front": "Hak Istimewa Saham Preferen",
    "back": "Prioritas pembagian dividen tetap sebelum saham biasa dan prioritas klaim atas aset perusahaan saat likuidasi."
  },
  {
    "id": "akk202-tm10-03",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Ekuitas: Modal Saham & Saham Treasuri",
    "category": "Mekanisme",
    "front": "Saham Preferen Kumulatif",
    "back": "Jika dividen tidak dibagikan pada tahun tertentu (dividends in arrears), dividen tersebut terakumulasi dan wajib dilunasi sebelum saham biasa menerima dividen."
  },
  {
    "id": "akk202-tm10-04",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Ekuitas: Modal Saham & Saham Treasuri",
    "category": "Jurnal",
    "front": "Metode Biaya Saham Treasuri (Cost Method)",
    "back": "Pembelian kembali saham sendiri didebit ke akun Saham Treasuri (kontra ekuitas) sebesar kas yang dibayarkan, tanpa membatalkan nilai nominal saham."
  },
  {
    "id": "akk202-tm10-05",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Ekuitas: Modal Saham & Saham Treasuri",
    "category": "Jurnal",
    "front": "Penjualan Kembali Saham Treasuri di Atas Biaya",
    "back": "Kelebihan kas atas harga perolehan treasuri dikreditkan ke Agio Saham Treasuri (Share Premium - Treasury Shares), BUKAN Laba Bersih."
  },
  {
    "id": "akk202-tm10-06",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Ekuitas: Modal Saham & Saham Treasuri",
    "category": "Jurnal",
    "front": "Penjualan Kembali Saham Treasuri di Bawah Biaya",
    "back": "Defisit didebit ke Agio Saham Treasuri hingga saldo habis, sisanya didebit ke Saldo Laba (Retained Earnings)."
  },
  {
    "id": "akk202-tm11-01",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "category": "Prosedur",
    "front": "Tiga Tanggal Kunci Dividen Kas",
    "back": "(1) Declaration Date (terbentuk liabilitas Utang Dividen), (2) Record Date (pencatatan pemegang saham yang berhak), (3) Payment Date (kas dibayarkan)."
  },
  {
    "id": "akk202-tm11-02",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "category": "Jurnal",
    "front": "Jurnal Tanggal Pengumuman Dividen",
    "back": "Debit: Saldo Laba (Retained Earnings); Kredit: Utang Dividen (Dividends Payable). Tidak ada jurnal pada tanggal pencatatan."
  },
  {
    "id": "akk202-tm11-03",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "category": "Hukum",
    "front": "Dividen Saham Kecil (Small Stock Dividend < 20%)",
    "back": "Saldo Laba didebit sebesar NILAI WAJAR pasar saham pada tanggal pengumuman dividen saham."
  },
  {
    "id": "akk202-tm11-04",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "category": "Hukum",
    "front": "Dividen Saham Besar (Large Stock Dividend ≥ 20-25%)",
    "back": "Saldo Laba didebit sebesar NILAI NOMINAL (Par Value) saham yang diterbitkan."
  },
  {
    "id": "akk202-tm11-05",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "category": "Mekanisme",
    "front": "Pemecahan Saham (Stock Split 2-for-1)",
    "back": "Jumlah saham beredar bertambah dua kali lipat, nilai nominal per saham berkurang setengahnya; TIDAK ADA jurnal akuntansi."
  },
  {
    "id": "akk202-tm11-06",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "category": "Konsep",
    "front": "Pembatasan Saldo Laba (Appropriation of Retained Earnings)",
    "back": "Mengalokasikan saldo laba untuk tujuan spesifik (ekspansi pabrik, cadangan hukum) sehingga tidak dapat dibagikan sebagai dividen kas."
  },
  {
    "id": "akk202-tm12-01",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif & Kompensasi Saham (PSAK 56 & 71)",
    "category": "Definisi",
    "front": "Definisi Sekuritas Dilutif",
    "back": "Instrumen keuangan yang dapat dikonversi menjadi saham biasa dan berpotensi mengurangi Laba Per Saham (misal: Obligasi Konversi, Opsi Saham)."
  },
  {
    "id": "akk202-tm12-02",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif & Kompensasi Saham (PSAK 56 & 71)",
    "category": "Hukum",
    "front": "Akuntansi Pemisahan Obligasi Konversi",
    "back": "Pendekatan Komponen Ganda (Split Accounting): Pisahkan nilai komponen liabilitas (PV bunga + pokok) dan sisanya diakui sebagai ekuitas konversi."
  },
  {
    "id": "akk202-tm12-03",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif & Kompensasi Saham (PSAK 56 & 71)",
    "category": "Konsep",
    "front": "Kompensasi Berbasis Saham (Share-Based Payments - PSAK 53)",
    "back": "Beban kompensasi diukur pada Nilai Wajar opsi saham pada Tanggal Pemberian (Grant Date) dan diamortisasi selama Masa Kerja (Vesting Period)."
  },
  {
    "id": "akk202-tm12-04",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif & Kompensasi Saham (PSAK 56 & 71)",
    "category": "Jurnal",
    "front": "Jurnal Beban Opsi Saham Tahunan",
    "back": "Debit: Beban Kompensasi (Laba Rugi); Kredit: Modal Saham - Opsi Saham (Ekuitas)."
  },
  {
    "id": "akk202-tm12-05",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif & Kompensasi Saham (PSAK 56 & 71)",
    "category": "Jurnal",
    "front": "Pelaksanaan Opsi Saham (Exercise of Stock Options)",
    "back": "Debit: Kas (harga eksekusi) + Opsi Saham; Kredit: Modal Saham Biasa + Agio Saham Biasa."
  },
  {
    "id": "akk202-tm12-06",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif & Kompensasi Saham (PSAK 56 & 71)",
    "category": "Mekanisme",
    "front": "Waran Saham yang Dapat Dipisahkan (Detachable Warrants)",
    "back": "Hasil penerbitan obligasi dialokasikan antara utang obligasi dan waran menggunakan metode nilai wajar proporsional atau incremental."
  },
  {
    "id": "akk202-tm13-01",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Laba Per Saham (Basic & Diluted EPS - PSAK 56)",
    "category": "Rumus",
    "front": "Formula Laba Per Saham Dasar (Basic EPS)",
    "back": "Basic EPS = (Laba Bersih - Dividen Saham Preferen) / Rata-Rata Tertimbang Jumlah Saham Biasa Beredar (WANOS)."
  },
  {
    "id": "akk202-tm13-02",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Laba Per Saham (Basic & Diluted EPS - PSAK 56)",
    "category": "Mekanisme",
    "front": "Perhitungan WANOS dengan Dividen Saham",
    "back": "Dividen saham dan pemecahan saham diperlakukan secara retrospektif seolah-olah telah beredar sejak awal tahun berjalan."
  },
  {
    "id": "akk202-tm13-03",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Laba Per Saham (Basic & Diluted EPS - PSAK 56)",
    "category": "Hukum",
    "front": "Pengujian Efek Antidilutif",
    "back": "Jika konversi sekuritas justru MENAIKKAN EPS atau memperkecil rugi per saham, sekuritas tersebut bersifat antidilutif dan WAJIB DIABAIKAN dari Diluted EPS."
  },
  {
    "id": "akk202-tm13-04",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Laba Per Saham (Basic & Diluted EPS - PSAK 56)",
    "category": "Rumus",
    "front": "Metode Jika Dikonversi (If-Converted Method)",
    "back": "Untuk Obligasi Konversi: Pembilang ditambah Penghematan Beban Bunga Setelah Pajak; Penyebut ditambah Saham Konversi."
  },
  {
    "id": "akk202-tm13-05",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Laba Per Saham (Basic & Diluted EPS - PSAK 56)",
    "category": "Rumus",
    "front": "Metode Saham Treasuri (Treasury Stock Method)",
    "back": "Untuk Opsi/Waran: Diasumsikan kas dari eksekusi opsi digunakan untuk membeli kembali saham treasuri di harga pasar rata-rata tahun berjalan."
  },
  {
    "id": "akk202-tm13-06",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Laba Per Saham (Basic & Diluted EPS - PSAK 56)",
    "category": "Rumus",
    "front": "Tambahan Saham Tambahan Opsi Treasuri",
    "back": "Saham Inkremental = Saham Diterbitkan dari Opsi - [(Saham Opsi × Strike Price) / Rata-Rata Harga Pasar Saham]."
  },
  {
    "id": "akk202-tm14-01",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "category": "Hukum",
    "front": "Tiga Klasifikasi Aset Keuangan Efek Utang",
    "back": "(1) Amortised Cost (AC), (2) Fair Value through Other Comprehensive Income (FVOCI), (3) Fair Value through Profit or Loss (FVTPL)."
  },
  {
    "id": "akk202-tm14-02",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "category": "Konsep",
    "front": "Uji Model Bisnis & Karakteristik Arus Kas (SPPI)",
    "back": "Klasifikasi AC/FVOCI mensyaratkan arus kas instrumen semata-mata berasal dari pokok dan bunga (Solely Payments of Principal and Interest)."
  },
  {
    "id": "akk202-tm14-03",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "category": "Hukum",
    "front": "Efek Ekuitas Non-Trading (Pilihan FVOCI)",
    "back": "Entitas dapat memilih opsi FVOCI yang tidak dapat dibatalkan (irrevocable); keuntungan/kerugian nilai wajar di OCI TIDAK PERNAH direklasifikasi ke laba rugi."
  },
  {
    "id": "akk202-tm14-04",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "category": "Konsep",
    "front": "Metode Ekuitas (Equity Method - PSAK 15)",
    "back": "Diterapkan saat investor memiliki Pengaruh Signifikan (Significant Influence), umumnya kepemilikan saham 20% hingga 50% hak suara."
  },
  {
    "id": "akk202-tm14-05",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "category": "Jurnal",
    "front": "Jurnal Laba Asosiasi pada Metode Ekuitas",
    "back": "Debit: Investasi pada Entitas Asosiasi; Kredit: Bagian Laba atas Entitas Asosiasi (diakui proporsional sebesar % kepemilikan)."
  },
  {
    "id": "akk202-tm14-06",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "category": "Jurnal",
    "front": "Jurnal Dividen yang Diterima pada Metode Ekuitas",
    "back": "Debit: Kas; Kredit: Investasi pada Entitas Asosiasi (dividen mengurangi nilai tercatat investasi, bukan pendapatan dividen)."
  }
];
