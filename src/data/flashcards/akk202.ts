// src/data/flashcards/akk202.ts
// Flashcard komprehensif Akuntansi Keuangan Menengah II (AKK202) - 88 kartu (6 kartu per TM, TM 6 memuat 10 kartu; kartu TM 8 lama dihapus)
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
    "back": "Selisih tercatat − harga penebusan ke laba rugi. Utang ditukar saham (IFRIC 19): saham pada nilai wajar. Modifikasi substansial (selisih nilai kini ≥ 10% atau syarat berubah fundamental): utang lama dihentikan. Non-substansial: selisih ditangguhkan, diamortisasi."
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
    "id": "akk202-v3-tm09-01",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "category": "Konsep",
    "front": "Bond indenture (perjanjian obligasi) (Rujukan: Kieso IFRS 5e, halaman PDF 1104-1105.)",
    "back": "Kontrak menetapkan pokok, kupon, jatuh tempo, dan covenant atau pembatasan penerbit. Rujukan: Kieso IFRS 5e, halaman PDF 1104-1105."
  },
  {
    "id": "akk202-v3-tm09-02",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "category": "Rumus",
    "front": "Present value (nilai kini) dan periode (Rujukan: Kieso IFRS 5e, halaman PDF 1107-1111.)",
    "back": "Harga obligasi adalah nilai kini pokok ditambah kupon. Pembayaran semesteran memakai jumlah periode dua kali tahun dan bunga tahunan dibagi dua. Rujukan: Kieso IFRS 5e, halaman PDF 1107-1111."
  },
  {
    "id": "akk202-v3-tm09-03",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "category": "Konsep",
    "front": "Discount dan premium (diskonto dan premi) (Rujukan: Kieso IFRS 5e, halaman PDF 1108-1113.)",
    "back": "Kupon di bawah yield menghasilkan diskonto; kupon di atas yield menghasilkan premi. Beban bunga efektif memakai nilai tercatat awal. Rujukan: Kieso IFRS 5e, halaman PDF 1108-1113."
  },
  {
    "id": "akk202-v3-tm09-04",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "category": "Contoh",
    "front": "Evermaster: amortisasi diskonto pertama (Rujukan: Kieso IFRS 5e, halaman PDF 1111-1112.)",
    "back": "Kas €4.000, interest expense €4.614, amortisasi €614, dan carrying amount €92.892. Angka dibulatkan mengikuti buku. Rujukan: Kieso IFRS 5e, halaman PDF 1111-1112."
  },
  {
    "id": "akk202-v3-tm09-05",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "category": "Konsep",
    "front": "Accrued interest (bunga berjalan) (Rujukan: Kieso IFRS 5e, halaman PDF 1114-1115.)",
    "back": "Pada penerbitan antar-tanggal, pisahkan harga obligasi dan bunga berjalan. Contoh at par Evermaster memberi beban dua bulan €1.333 setelah kupon €4.000 dikurangi bunga diterima €2.667. Rujukan: Kieso IFRS 5e, halaman PDF 1114-1115."
  },
  {
    "id": "akk202-v3-tm09-06",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "category": "Konsep",
    "front": "Bond issue costs (biaya penerbitan) (Rujukan: Kieso IFRS 5e, halaman PDF 1171-1172.)",
    "back": "Untuk amortized cost, biaya emisi mengurangi nilai awal liabilitas dan diamortisasi melalui penyesuaian bunga efektif. Rujukan: Kieso IFRS 5e, halaman PDF 1171-1172."
  },
  {
    "id": "akk202-v3-tm10-01",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "category": "Konsep",
    "front": "Zero-interest-bearing note (wesel tanpa kupon) (Rujukan: Kieso IFRS 5e, halaman PDF 1118-1119.)",
    "back": "Tidak adanya kupon kas tetap dapat disertai bunga implisit. Selisih nominal dan nilai awal diamortisasi sebagai Interest Expense. Rujukan: Kieso IFRS 5e, halaman PDF 1118-1119."
  },
  {
    "id": "akk202-v3-tm10-02",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "category": "Contoh",
    "front": "Turtle Cove: bunga efektif pertama (Rujukan: Kieso IFRS 5e, halaman PDF 1119.)",
    "back": "USD7.721,80 × 9% = USD694,96. Carrying amount menjadi USD8.416,76, tanpa pembayaran kupon. Rujukan: Kieso IFRS 5e, halaman PDF 1119."
  },
  {
    "id": "akk202-v3-tm10-03",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "category": "Konsep",
    "front": "Early extinguishment (pelunasan dini) (Rujukan: Kieso IFRS 5e, halaman PDF 1126-1128, 1173.)",
    "back": "Mutakhirkan amortisasi dan bunga akrual. Harga tebus di atas nilai tercatat memberi loss; harga tebus di bawah nilai tercatat memberi gain. Rujukan: Kieso IFRS 5e, halaman PDF 1126-1128, 1173."
  },
  {
    "id": "akk202-v3-tm10-04",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "category": "Konsep",
    "front": "Bonn: pelepasan aset dan pelunasan (Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129.)",
    "back": "Utang €20.000.000, aset bernilai buku €21.000.000, nilai wajar €16.000.000. Rugi aset €5.000.000 terpisah dari laba utang €4.000.000. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129."
  },
  {
    "id": "akk202-v3-tm10-05",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "category": "Konsep",
    "front": "Substantial modification (modifikasi substansial) (Rujukan: Kieso IFRS 5e, halaman PDF 1173.)",
    "back": "Catatan 14 memakai bunga efektif historis untuk uji selisih arus kas sekurangnya 10%, atau perubahan fundamental persyaratan. Rumusan modifikasi non-substansial perlu dikonfirmasi sebelum dijadikan aturan jurnal umum. Rujukan: Kieso IFRS 5e, halaman PDF 1173."
  },
  {
    "id": "akk202-v3-tm10-06",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "category": "Konsep",
    "front": "Fair value option (opsi nilai wajar) (Rujukan: Kieso IFRS 5e, halaman PDF 1131-1132.)",
    "back": "Pada contoh Edmonds, perubahan akibat bunga pasar masuk laba rugi. Perubahan risiko kredit sendiri masuk OCI, dengan batasan held for trading pada sumber. Rujukan: Kieso IFRS 5e, halaman PDF 1131-1132."
  },
  {
    "id": "akk202-v3-tm11-01",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "category": "Konsep",
    "front": "Contributed capital dan retained earnings (Rujukan: Kieso IFRS 5e, halaman PDF 1179-1181.)",
    "back": "Contributed capital (modal disetor) berasal dari pemegang saham; retained earnings (saldo laba) berasal dari laba yang ditahan. Rujukan: Kieso IFRS 5e, halaman PDF 1179-1181."
  },
  {
    "id": "akk202-v3-tm11-02",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "category": "Konsep",
    "front": "Treasury shares (saham treasuri) (Rujukan: Kieso IFRS 5e, halaman PDF 1190-1193.)",
    "back": "Saham sendiri yang dibeli kembali mengurangi ekuitas. Cost method mencatat biaya perolehan, dan selisih penerbitan kembali tetap dalam ekuitas. Rujukan: Kieso IFRS 5e, halaman PDF 1190-1193."
  },
  {
    "id": "akk202-v3-tm11-03",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "category": "Konsep",
    "front": "Dividends in arrears (dividen tertunggak) (Rujukan: Kieso IFRS 5e, halaman PDF 1186-1187.)",
    "back": "Saham preferen kumulatif membawa hak dividen tertunggak. Sebelum deklarasi, hak ini diungkapkan dan tidak diakui sebagai liabilitas dividen. Rujukan: Kieso IFRS 5e, halaman PDF 1186-1187."
  },
  {
    "id": "akk202-v3-tm11-04",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "category": "Konsep",
    "front": "Share dividend (dividen saham) Vine (Rujukan: Kieso IFRS 5e, halaman PDF 1202-1204.)",
    "back": "Tambahan 10.000 saham nominal £1 memindahkan £10.000 dari retained earnings ke modal saham. Nilai pasar £8 per saham tidak menjadi dasar transfer. Rujukan: Kieso IFRS 5e, halaman PDF 1202-1204."
  },
  {
    "id": "akk202-v3-tm11-05",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "category": "Konsep",
    "front": "Property dividend (dividen properti) (Rujukan: Kieso IFRS 5e, halaman PDF 1201.)",
    "back": "Pada Tsen, penyesuaian aset HKD750.000 dilakukan sebelum mencatat liabilitas dividen pada nilai wajar HKD2.000.000. Rujukan: Kieso IFRS 5e, halaman PDF 1201."
  },
  {
    "id": "akk202-v3-tm11-06",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "category": "Konsep",
    "front": "Government grant (hibah pemerintah) (Rujukan: Kieso IFRS 5e, halaman PDF 774-775.)",
    "back": "Income approach mengakui hibah secara sistematis sesuai biaya terkait. Hibah aset dapat berupa pendapatan ditangguhkan atau pengurang nilai tercatat aset. Rujukan: Kieso IFRS 5e, halaman PDF 774-775."
  },
  {
    "id": "akk202-v3-tm12-01",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "category": "Konsep",
    "front": "With-and-without method (metode residual) (Rujukan: Kieso IFRS 5e, halaman PDF 1257-1258.)",
    "back": "Komponen utang = nilai kini kas kontraktual dengan yield utang tanpa konversi; komponen ekuitas = hasil emisi dikurangi komponen utang. Rujukan: Kieso IFRS 5e, halaman PDF 1257-1258."
  },
  {
    "id": "akk202-v3-tm12-02",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "category": "Konsep",
    "front": "Roche: komponen utang dan ekuitas (Rujukan: Kieso IFRS 5e, halaman PDF 1258.)",
    "back": "Hasil €2.000.000 dipisahkan menjadi Bonds Payable €1.805.626 dan conversion equity €194.374. Rujukan: Kieso IFRS 5e, halaman PDF 1258."
  },
  {
    "id": "akk202-v3-tm12-03",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "category": "Konsep",
    "front": "Book value method (metode nilai buku) (Rujukan: Kieso IFRS 5e, halaman PDF 1260-1261.)",
    "back": "Konversi normal memindahkan nilai tercatat utang dan ekuitas konversi ke modal serta agio saham. Laba rugi konversi tidak diakui. Rujukan: Kieso IFRS 5e, halaman PDF 1260-1261."
  },
  {
    "id": "akk202-v3-tm12-04",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "category": "Konsep",
    "front": "Siemens: share warrants (waran) (Rujukan: Kieso IFRS 5e, halaman PDF 1268-1269.)",
    "back": "Ekuitas waran €492.148 adalah selisih hasil emisi €10.200.000 dan nilai komponen utang €9.707.852. Buku IFRS memakai residual. Rujukan: Kieso IFRS 5e, halaman PDF 1268-1269."
  },
  {
    "id": "akk202-v3-tm12-05",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "category": "Konsep",
    "front": "Grant date dan service period (Rujukan: Kieso IFRS 5e, halaman PDF 1274-1276.)",
    "back": "Equity-settled options diukur pada nilai wajar tanggal hibah, kemudian dibebankan selama masa jasa. Harga saham sesudah hibah tidak mengukur ulang nilai wajar opsi. Rujukan: Kieso IFRS 5e, halaman PDF 1274-1276."
  },
  {
    "id": "akk202-v3-tm12-06",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "category": "Konsep",
    "front": "Conversion dibandingkan repurchase (Rujukan: Kieso IFRS 5e, halaman PDF 1261-1263.)",
    "back": "Konversi normal memakai nilai buku. Pembelian kembali sebelum jatuh tempo memisahkan imbalan ke liabilitas dan ekuitas; laba rugi dihitung atas komponen liabilitas. Rujukan: Kieso IFRS 5e, halaman PDF 1261-1263."
  },
  {
    "id": "akk202-v3-tm13-01",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "category": "Rumus",
    "front": "Basic EPS (EPS dasar) (Rujukan: Kieso IFRS 5e, halaman PDF 1285.)",
    "back": "Laba tersedia bagi saham biasa dibagi saham biasa rata-rata tertimbang. Dividen preferen kumulatif tahun berjalan tetap diperhitungkan walaupun belum dideklarasikan. Rujukan: Kieso IFRS 5e, halaman PDF 1285."
  },
  {
    "id": "akk202-v3-tm13-02",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "category": "Konsep",
    "front": "Weighted-average shares (saham tertimbang) (Rujukan: Kieso IFRS 5e, halaman PDF 1286-1287.)",
    "back": "Terbit dan beli kembali untuk kas dibobot menurut waktu. Share dividend dan share split menyajikan kembali saham sebelum peristiwa. Rujukan: Kieso IFRS 5e, halaman PDF 1286-1287."
  },
  {
    "id": "akk202-v3-tm13-03",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "category": "Konsep",
    "front": "If-converted method (metode jika dikonversi) (Rujukan: Kieso IFRS 5e, halaman PDF 1293-1294.)",
    "back": "Tambahkan beban bunga setelah pajak pada pembilang dan saham konversi berbobot waktu pada penyebut. Gunakan beban efektif, bukan hanya kupon kas. Rujukan: Kieso IFRS 5e, halaman PDF 1293-1294."
  },
  {
    "id": "akk202-v3-tm13-04",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "category": "Konsep",
    "front": "Treasury-share method untuk EPS (Rujukan: Kieso IFRS 5e, halaman PDF 1296-1298.)",
    "back": "Kas asumsi pelaksanaan opsi membeli kembali saham pada harga pasar rata-rata. Hanya selisih neto yang menambah penyebut; tidak ada jurnal pembelian treasuri aktual. Rujukan: Kieso IFRS 5e, halaman PDF 1296-1298."
  },
  {
    "id": "akk202-v3-tm13-05",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "category": "Konsep",
    "front": "Antidilutive (antidilutif) (Rujukan: Kieso IFRS 5e, halaman PDF 1299-1300, 1314-1318.)",
    "back": "Instrumen yang menaikkan EPS atau memperkecil rugi per saham dikeluarkan. Uji instrumen berurutan, dimulai dari incremental EPS terendah. Rujukan: Kieso IFRS 5e, halaman PDF 1299-1300, 1314-1318."
  },
  {
    "id": "akk202-v3-tm13-06",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "category": "Konsep",
    "front": "Share dividend dan EPS (Rujukan: Kieso IFRS 5e, halaman PDF 1287.)",
    "back": "Contoh Vijay dengan 100.000 saham dan dividen saham 25% pada Juni memakai rata-rata 125.000 saham setelah restatement (penyajian kembali). Rujukan: Kieso IFRS 5e, halaman PDF 1287."
  },
  {
    "id": "akk202-v3-tm14-01",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "category": "Konsep",
    "front": "Business model dan SPPI (Rujukan: Kieso IFRS 5e, halaman PDF 1370-1372.)",
    "back": "Periksa tujuan menagih atau menagih serta menjual, kemudian arus kas yang semata berupa pokok dan bunga. Keduanya menentukan kategori efek utang. Rujukan: Kieso IFRS 5e, halaman PDF 1370-1372."
  },
  {
    "id": "akk202-v3-tm14-02",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "category": "Konsep",
    "front": "Amortized cost (biaya diamortisasi) (Rujukan: Kieso IFRS 5e, halaman PDF 1372-1375.)",
    "back": "Pendapatan bunga efektif memakai nilai tercatat awal. Diskonto menambah investasi dan premi menguranginya. Fluktuasi pasar rutin tidak langsung mengubah basis kategori ini. Rujukan: Kieso IFRS 5e, halaman PDF 1372-1375."
  },
  {
    "id": "akk202-v3-tm14-03",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "category": "Konsep",
    "front": "FVOCI untuk efek utang (Rujukan: Kieso IFRS 5e, halaman PDF 1376-1380.)",
    "back": "Bunga efektif masuk laba rugi, perubahan nilai wajar pasar masuk OCI, dan saldo OCI direklasifikasi ke laba rugi saat pelepasan. Rujukan: Kieso IFRS 5e, halaman PDF 1376-1380."
  },
  {
    "id": "akk202-v3-tm14-04",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "category": "Konsep",
    "front": "12-month ECL dan lifetime ECL (Rujukan: Kieso IFRS 5e, halaman PDF 1396-1397.)",
    "back": "Stage 1 memakai 12-month ECL; Stage 2 dan Stage 3 memakai lifetime ECL. Bunga Stage 1 dan 2 berbasis bruto, Stage 3 berbasis neto. Rujukan: Kieso IFRS 5e, halaman PDF 1396-1397."
  },
  {
    "id": "akk202-v3-tm14-05",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "category": "Contoh",
    "front": "Mayhew: satuan dan nilai kini (Rujukan: Kieso IFRS 5e, halaman PDF 1399.)",
    "back": "Jumlah disajikan dalam ribuan yen. Nilai tercatat ¥200.000 dikurangi PV ekspektasian ¥187.320 menghasilkan ECL ¥12.680. Rujukan: Kieso IFRS 5e, halaman PDF 1399."
  },
  {
    "id": "akk202-v3-tm14-06",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "category": "Konsep",
    "front": "Fair value hierarchy (hierarki nilai wajar) (Rujukan: Kieso IFRS 5e, halaman PDF 1429-1431.)",
    "back": "Level 1 memakai harga aktif instrumen identik, Level 2 input lain yang dapat diobservasi, dan Level 3 input tidak dapat diobservasi. Kategori pengukuran investasi berbeda dari level input. Rujukan: Kieso IFRS 5e, halaman PDF 1429-1431."
  },
  {
    "id": "akk202-v3-tm15-01",
    "phase": "pra-uas",
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "category": "Konsep",
    "front": "Significant influence (pengaruh signifikan) (Rujukan: Kieso IFRS 5e, halaman PDF 1390-1391.)",
    "back": "Kepemilikan 20% atau lebih memberi praduga yang dapat diuji. Representasi direksi, kebijakan, transaksi material, dan hubungan manajemen dapat menjadi bukti. Rujukan: Kieso IFRS 5e, halaman PDF 1390-1391."
  },
  {
    "id": "akk202-v3-tm15-02",
    "phase": "pra-uas",
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "category": "Konsep",
    "front": "Non-trading equity OCI (Rujukan: Kieso IFRS 5e, halaman PDF 1387-1389, 1396.)",
    "back": "Pilihan non-trading menempatkan perubahan nilai wajar dalam OCI per investasi. Pada pelepasan, kumulatifnya tidak direklasifikasi ke laba rugi. Rujukan: Kieso IFRS 5e, halaman PDF 1387-1389, 1396."
  },
  {
    "id": "akk202-v3-tm15-03",
    "phase": "pra-uas",
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "category": "Konsep",
    "front": "Dividend Revenue dibandingkan equity method (Rujukan: Kieso IFRS 5e, halaman PDF 1388, 1391-1392.)",
    "back": "Contoh pasif Republic mengakui dividen sebagai pendapatan. Pada equity method, dividen mengurangi investasi karena bagian laba telah diakui. Rujukan: Kieso IFRS 5e, halaman PDF 1388, 1391-1392."
  },
  {
    "id": "akk202-v3-tm15-04",
    "phase": "pra-uas",
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "category": "Contoh",
    "front": "Meredith dan Pirates: mutasi investasi (Rujukan: Kieso IFRS 5e, halaman PDF 1452.)",
    "back": "Interpretasi E16.20: £200.000 + 25% × £80.000 - 25% × £20.000 = £215.000. Investment Revenue £20.000 dan kas dividen £5.000. Rujukan: Kieso IFRS 5e, halaman PDF 1452."
  },
  {
    "id": "akk202-v3-tm15-05",
    "phase": "pra-uas",
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "category": "Konsep",
    "front": "Control (pengendalian) (Rujukan: Kieso IFRS 5e, halaman PDF 1173, 1393-1394.)",
    "back": "Periksa kekuasaan atas investee, hak atau eksposur atas imbal hasil variabel, dan kemampuan memakai kekuasaan untuk memengaruhi imbal hasil. Persentase saham saja belum menyelesaikan analisis. Rujukan: Kieso IFRS 5e, halaman PDF 1173, 1393-1394."
  },
  {
    "id": "akk202-v3-tm15-06",
    "phase": "pra-uas",
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "category": "Konsep",
    "front": "Investee losses (rugi entitas investasi) (Rujukan: Kieso IFRS 5e, halaman PDF 1393.)",
    "back": "Jika bagian rugi melebihi nilai tercatat, buku umumnya menghentikan pengakuan rugi lebih lanjut. Periksa jaminan atau komitmen dukungan tambahan sebelum menyimpulkan batasnya. Rujukan: Kieso IFRS 5e, halaman PDF 1393."
  }
];
