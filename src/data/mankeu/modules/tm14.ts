import type { Reading } from '../../../types';
export const TM14_READING: Reading = {
  "tm": 14,
  "title": "Merger dan Akuisisi",
  "ref": "Brigham & Houston, FFM 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan merger dan akuisisi secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi merger dan akuisisi.",
    "Menghitung hasil dengan satuan, tenor dan pembulatan yang tepat.",
    "Menilai keputusan serta batas model dan rujukannya."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pintu masuk: cakupan dan sumber"
    },
    {
      "kind": "p",
      "text": "TM14 mengikuti Kontrak MK2026 Sheet 1 baris 31. Fokus: Merger dan Akuisisi. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Brigham & Houston, FFM16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 8 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "h2",
      "text": "1. Alasan penggabungan dan bentuk transaksi"
    },
    {
      "kind": "p",
      "text": "Merger adalah penggabungan perusahaan; acquisition adalah pengambilalihan kepemilikan atau aset. Sinergi berarti nilai bersama melebihi jumlah nilai operasi terpisah, misalnya biaya operasi lebih rendah, jaringan lebih luas atau kemampuan pendanaan membaik. Diversifikasi dan dorongan manajer memperbesar perusahaan tidak otomatis menciptakan nilai pemegang saham. Pertimbangkan biaya integrasi, perbedaan budaya dan realisasi kas, bukan hanya ukuran pendapatan gabungan. [hal. cetak 742-744; PDF784-786]"
    },
    {
      "kind": "table",
      "headers": [
        "Jenis",
        "Hubungan",
        "Pertanyaan finansial"
      ],
      "rows": [
        [
          "Horizontal",
          "Industri sama",
          "Apakah efisiensi bersih dan kas tambahan dapat dibuktikan?"
        ],
        [
          "Vertikal",
          "Pemasok atau distributor",
          "Apakah kendali rantai pasok menambah nilai setelah biaya?"
        ],
        [
          "Congeneric",
          "Bisnis terkait tanpa hubungan pemasok langsung",
          "Apakah kemampuan atau pasar dapat dimanfaatkan bersama?"
        ],
        [
          "Conglomerate",
          "Bisnis berbeda",
          "Mengapa perusahaan dapat mencipta nilai di luar diversifikasi pemilik?"
        ]
      ],
      "caption": "Rujukan: hal. cetak 744-746, PDF786-788."
    },
    {
      "kind": "p",
      "text": "Friendly takeover disetujui manajemen target; hostile takeover ditentang manajemen target dan dapat melibatkan penawaran kepada pemegang saham. Mekanisme pertahanan dan penawaran di buku mencerminkan contoh pasar/yurisdiksi yang dibahas. Materi ini menggunakan prinsip keputusan dan informasi, tanpa menyatakan aturan merger Amerika berlaku diIndonesia. Peran bank investasi mencakup penyusunan transaksi, penilaian, dukungan pendanaan dan pemeriksaan kewajaran. [hal. cetak 746-757; PDF788-799]"
    },
    {
      "kind": "h2",
      "text": "2. Bedakan nilai operasi dan nilai ekuitas"
    },
    {
      "kind": "p",
      "text": "Pilih arus kas yang jelas. FCF operasi tersedia untuk seluruh penyedia modal dan didiskonto dengan WACC. FCFE, kas kepada ekuitas setelah konsekuensi utang, didiskonto dengan biaya ekuitas. Jangan mengurangi bunga dalam kas lalu mendiskonto dengan WACC tanpa penyesuaian yang benar. Pada model operasi, nilai ekuitas diperoleh dengan mengurangkan utang dan menambahkan kas nonoperasi. Rujukan kasus buku menggunakan kas dan tingkat diskonto yang sepadan; latihan mengembangkan kedua cara dengan asumsi eksplisit. [hal. cetak 748-752; PDF790-794]"
    },
    {
      "kind": "formula",
      "text": "V_{operasi}=\\sum_{t=1}^{n}\\frac{FCF_t}{(1+WACC)^t}+\\frac{TV_n}{(1+WACC)^n}\\qquad V_E=V_{operasi}-D+Kas_{nonoperasi}",
      "note": "FCF t dan TV n terpisah; jangan menghitung kas nonoperasi yang sudah masuknilai operasi dua kali. Rujukan: hal. cetak748-752, PDF790-794."
    },
    {
      "kind": "formula",
      "text": "TV_n=\\frac{FCF_{n+1}}{WACC-g}\\qquad WACC>g",
      "note": "Terminal value berada pada akhir tahunn, sehingga masih harus didiskonto. Asumsi pertumbuhan tetap harus layak dan konsisten. Rujukan: hal. cetak750-752, PDF792-794."
    },
    {
      "kind": "p",
      "text": "Valuasi multiple memakai perusahaan pembanding dan ukuran yang cocok: multiple harga/earnings untuk ekuitas, atau nilai perusahaan/ukuran operasi dengan penyesuaian utang/kas yang benar. Perbedaan risiko, pertumbuhan, kebijakan akuntansi dan fase usaha memengaruhi kecocokan pembanding. Jangan menggunakan harga per saham sebagai nilai seluruh perusahaan atau menambahkan sinergi dua kali ketika kas proyeksi sudah memuatnya. [hal. cetak 751-753; PDF793-795]"
    },
    {
      "kind": "h2",
      "text": "3. Batas tawaran dan siapa memperoleh sinergi"
    },
    {
      "kind": "formula",
      "text": "NPV_A=Synergy-Premium-Cost_{integrasi}\\qquad Bid_{max}=V_B+Synergy-Cost_{integrasi}",
      "note": "VB nilai standalone target; sinergi belum termasukVB. Harga maksimum memberi NPV nol kepada pengakuisisi. Rujukan: hal. cetak748-753, PDF790-795."
    },
    {
      "kind": "p",
      "text": "Sinergi Rp 80 miliar, premium Rp 40 miliar dan biaya integrasi Rp 10 miliar menghasilkan NPV pengakuisisi Rp 30 miliar. Pembayaran dengan saham tetap mempunyai biaya ekonomis meski tidak mengeluarkan kas pada tanggal itu: pemilik lama berbagi kepemilikan dengan saham baru. Rasio pertukaran dan harga saham pembayaran perlu dicatat pada tanggal asumsi. EPS gabungan dapat naik sementara NPV negatif, sehingga EPS accretion, kenaikan EPS, tidak menggantikan valuasi. [hal. cetak 751-757; PDF793-799]"
    },
    {
      "kind": "h2",
      "text": "4. Alternatif dan pemeriksaan pelaksanaan"
    },
    {
      "kind": "p",
      "text": "Corporate alliance dapat bekerja sama tanpa merger penuh; private equity melibatkan pemilik dengan strategi investasi dan pengendalian tertentu; divestiture melepaskan bagian bisnis ketika nilai atau fokus dapat diperbaiki. Analisis juga memerlukan rencana integrasi, milestone atau tonggak capaian, sensitivitas sinergi, biaya yang tidak terduga dan kapasitas pendanaan. Contoh empiris buku menunjukkan keputusan perlu bukti, bukan asumsi seluruh merger berhasil. [hal. cetak 757-763; PDF799-805]"
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: DCF target, premium dan pembagian sinergi"
    },
    {
      "kind": "ul",
      "items": [
        "Semua angka Rp miliar: FCF operasi 20 pada akhir tahun 1, 2, 3; terminal value akhir tahun 3 sebesar 200, di luar FCF3.",
        "WACC10%; utang 60; kas nonoperasi 10; PV sinergi tambahan 40 belum masuk proyeksi; biaya integrasi saat ini 5.",
        "Harga pembelian ekuitas 170."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung nilai operasi dan ekuitas standalone. Hitung premium, NPV pengakuisisi, dan harga maksimum. Jelaskan perlakuan terminal, kas nonoperasi, utang, dan sinergi. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. PV FCF = 20/1,1 + 20/1,1^2 + 20/1,1^3 = Rp 49,737040 miliar. PV terminal = 200/1,1^3 = Rp 150,262960 miliar. Nilai operasi Rp 200 miliar; ekuitas = 200-60+10 = Rp 150 miliar."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Premium = 170-150 = Rp 20 miliar. NPV pengakuisisi = sinergi 40-premium 20-biaya 5 = Rp 15 miliar. Harga maksimum = 150+40-5 = Rp 185 miliar, pada NPV nol."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Sinergi dinyatakan belum masuk kas, sehingga boleh ditambahkan sekali. Jika sudah masuk proyeksi, penambahan lagi menghitung ganda. Terminal berada pada akhir tahun 3 dan harus didiskonto; FCF3 tetap terpisah. FCF operasi memakai WACC; FCFE memakai biaya ekuitas. Kas nonoperasi ditambahkan hanya jika belum termasuk operasi; utang harus dinilai pada tanggal dan basis yang konsisten."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Pembayaran saham, kenaikan EPS dan NPV yang bertentangan"
    },
    {
      "kind": "ul",
      "items": [
        "Target: nilai standalone Rp 90 juta, saham 5 juta.",
        "Tawaran 2 juta saham pengakuisisi pada Rp 50/lembar; sinergiPV8 juta; biaya integrasi 3 juta.",
        "Pengakuisisi: saham 10 juta, laba 20 juta. Target laba 10 juta. Untuk contoh EPS, laba gabungan tetap 30 juta setelah semua penyesuaian berulang."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung nilai tawaran, premium, dan NPV. Hitung rasio pertukaran, EPS sebelum/sesudah, dan pertumbuhan EPS. Jelaskan konflik hasil EPS dengan nilai serta batas harga yang layak. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. Nilai tawaran = 2 juta × Rp 50 = Rp 100 juta. Premium = 100-90 = Rp 10 juta. NPV = 8-10-3 = minus Rp 5 juta."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Rasio pertukaran = 2/5 = 0,40 saham pengakuisisi per saham target. Harga ekuivalen target Rp 20, dibanding nilai standalone Rp 18. EPS awal pengakuisisi = 20/10 = Rp 2; EPS gabungan = 30/(10+2) = Rp 2,50, naik 25%."
        },
        {
          "kind": "p",
          "text": "Langkah 3. EPS accretion terjadi secara akuntansi tetapi NPV negatif; tawaran ditolak atau dinegosiasi. Harga maksimum yang setara kas = 90+8-3 = Rp 95 juta. Tawaran harus turun minimal Rp 5 juta agar NPV tidak negatif menurut asumsi. Saham pembayaran mempunyai biaya ekonomis karena pemilik lama berbagi nilai dengan pemilik baru; harganya dapat berubah akibat informasi akuisisi."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-757 (PDF 790-799)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Cek pemahaman sebelum berpindah TM"
    },
    {
      "kind": "ul",
      "items": [
        "Nilai sinergi: Sinergi = nilai gabungan - nilai standalone A - nilai standalone B. Rp 880 - Rp 500 - Rp 300 miliar = Rp 80 miliar. Sinergi perlu berasal dari kas tambahan atau perubahan risiko yang dapat dijelaskan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809).",
        "NPV pengakuisisi: NPV = PV sinergi - premium - biaya integrasi. Sinergi Rp 80, premium Rp 40, biaya Rp 10 miliar memberi Rp 30 miliar bagi pengakuisisi. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809).",
        "Penawaran maksimum: Harga maksimum = nilai standalone target + sinergi - biaya integrasi. Pada maksimum NPV nol. Jangan menambahkan sinergi lagi jika sudah masuk proyeksi kas target. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809).",
        "DCF operasi dan ekuitas: FCF operasi didiskonto WACC; ekuitas = nilai operasi - utang + kas nonoperasi. FCFE, kas untuk ekuitas, didiskonto biaya ekuitas. Pilih arus dan diskonto yang sepadan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809).",
        "Terminal value: TV t = FCF(t+1)/(WACC-g), dengan WACC>g. Jika FCF3=30, g=2%, WACC=12%, TV3=306; TV masih didiskonto ke hari ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809).",
        "EPS accretion dan nilai: EPS accretion berarti EPS gabungan naik; hal itu tidak membuktikan NPV positif. Periksa premium, harga saham pembayaran, risiko, biaya integrasi, dan realisasi sinergi. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809)."
      ]
    }
  ]
};
