import type { Reading } from '../../../types';
export const TM12_READING: Reading = {
  "tm": 12,
  "title": "Modal Kerja II: Persediaan dan Pendanaan",
  "ref": "Brigham & Houston, FFM 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan modal kerja ii: persediaan dan pendanaan secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi modal kerja ii: persediaan dan pendanaan.",
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
      "text": "TM12 mengikuti Kontrak MK2026 Sheet 1 baris 29. Fokus: Modal Kerja II: Persediaan dan Pendanaan. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Brigham & Houston, FFM16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 8 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "h2",
      "text": "1. Persediaan menyediakan layanan sekaligus menyerap dana"
    },
    {
      "kind": "p",
      "text": "Persediaan mencakup bahan, barang dalam proses, dan barang jadi. Peramalan penjualan, waktu pasokan, keusangan, biaya penyimpanan dan biaya kekurangan stok menentukan kebutuhan. Menurunkan saldo hanya menguntungkan jika penghematan dana dan biaya operasi melebihi kehilangan penjualan serta gangguan produksi. Finansial harus bekerja bersama produksi dan pemasaran. Sistem persediaan membantu memantau tingkat, perputaran dan kapan memesan. [hal. cetak 577-578; PDF619-620]"
    },
    {
      "kind": "p",
      "text": "Contoh: rata-rata turun Rp 800 ke Rp 600 juta; biaya tahunan 20% menghasilkan penghematan Rp 40 juta. Jika kekurangan stok menambah biaya Rp 50 juta setahun, manfaat bersihminus Rp 10 juta. Dana investasi Rp 200 juta yang dilepas sekali berbeda dari manfaat berulang Rp 40 juta. Buku menunjuk Web Appendix 16 A untuk model persediaan lanjutan; paket ini memusatkan soal pada bagian bab yang tersedia dan menandai model lanjut sebagai pendalaman, bukan mengklaim halaman yang tidak ada. [hal. cetak 577-578; PDF619-620]"
    },
    {
      "kind": "h2",
      "text": "2. Diskon pemasok adalah keputusan biaya pendanaan"
    },
    {
      "kind": "p",
      "text": "Syarat 2/10, net 30 berarti diskon 2% bila membayar pada hari 10, atau harga penuh pada hari 30. Melepas diskon seolah meminjam harga setelah diskon selama 20 hari dengan biaya diskon yang dilepas. Bandingkan biaya nominal dengan nominal, atau biaya efektif dengan efektif, pada tenor dan basis hari yang sama. Jika perusahaan membayar terlambat melewati kontrak, dampak pemasok dan penalti perlu dihitung tersendiri. [hal. cetak 581-584; PDF623-626]"
    },
    {
      "kind": "formula",
      "text": "r_{nom}=\\frac{d}{1-d}\\frac{365}{n}\\qquad EAR=\\left(1+\\frac{d}{1-d}\\right)^{365/n}-1",
      "note": "d adalah pecahan diskon; n selisih tanggal pembayaran penuh dan tanggal diskon. Syarat2/10 net30 memberi nominal37,24% dan efektif44,59% setahun. Rujukan: hal. cetak582-584, PDF624-626."
    },
    {
      "kind": "h2",
      "text": "3. Biaya bank ditentukan dari arus kas bersih"
    },
    {
      "kind": "p",
      "text": "Catat nominal kontrak, kas yang benar-benar bebas dipakai, pembayaran bunga, pengembalian saldo tertahan dan pelunasan. Bunga sederhana pada nominal tidak selalu sama dengan biaya efektif. Jika bunga dipotong awal, kas diterima lebih kecil; jika bank menahan saldo kompensasi tambahan tanpa bunga, dana dapat dipakai juga berkurang. Contoh saldo kompensasi dan potongan adalah pengembangan perhitungan arus kas berdasarkan syarat kasus; rincian model lanjut pada buku dirujuk ke Web Appendix 16 B. [hal. cetak 586-587; PDF628-629]"
    },
    {
      "kind": "formula",
      "text": "r_{efektif,1 tahun}=\\frac{Pembayaran\\ bersih_{akhir}}{Kas\\ bebas_{awal}}-1",
      "note": "Berlaku pada contoh satu arus awal dan satu arus akhir satu tahun. Jadwal bertahap memerlukan penilaian arus kas yang sesuai. Rujukan dasar biaya bank: hal. cetak586-587, PDF628-629."
    },
    {
      "kind": "table",
      "headers": [
        "Kontrak hipotetis Rp 100 juta, 1 tahun, bunga 12%",
        "Kas bebas awal",
        "Pembayaran bersih akhir",
        "Biaya efektif"
      ],
      "rows": [
        [
          "Bunga akhir, tanpa potongan",
          "Rp 100 juta",
          "Rp 112 juta",
          "12,00%"
        ],
        [
          "Bunga dipotong awal",
          "Rp 88 juta",
          "Rp 100 juta",
          "13,64%"
        ],
        [
          "Bunga awal dan saldo tambahan Rp 10 juta",
          "Rp 78 juta",
          "Rp 90 juta setelah saldo kembali",
          "15,38%"
        ]
      ],
      "caption": "Pengembangan contoh arus kas dari hal. cetak 586-587, PDF628-629; syarat merupakan asumsi soal."
    },
    {
      "kind": "h2",
      "text": "4. Fasilitas dan risiko pembiayaan jangka pendek"
    },
    {
      "kind": "p",
      "text": "Promissory note adalah janji pembayaran yang merinci kewajiban; line of credit menunjukkan batas fasilitas; revolving credit agreement dalam contoh buku merupakan komitmen fasilitas dengan biaya komitmen. Istilah ini perlu dibaca bersama kontrak, kemampuan bank dan syarat pencairan. Commercial paper adalah utang pendek yang umumnya memerlukan reputasi kredit kuat. Accruals, kewajiban biaya yang belum dibayar, juga menyediakan pendanaan spontan sesuai jadwal operasi. [hal. cetak 584-589; PDF626-631]"
    },
    {
      "kind": "p",
      "text": "Pilihan dana perlu memeriksa tenor, bunga tetap/mengambang, biaya fasilitas, syarat jaminan, covenant atau pembatasan kontrak, dan ketersediaan saat tekanan kas meningkat. Risiko rollover berarti fasilitas tidak dapat diperbarui saat jatuh tempo. Hindari memakai angka bunga atau acuan pasar historis dari contoh buku sebagai harga pinjaman tahun berjalan; semua angka latihan diberikan secara eksplisit. [hal. cetak 584-589; PDF626-631]"
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: Diskon pemasok versus pinjaman bank"
    },
    {
      "kind": "ul",
      "items": [
        "Faktur Rp 100 juta; syarat 2/10, net 30; tahun 365 hari.",
        "Bank menyediakan Rp 98 juta dengan bunga efektif tahunan 12%; tenor 20 hari, tanpa biaya tambahan."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung biaya nominal dan efektif kehilangan diskon. Hitung bunga bank 20 hari dan selisih biaya dengan pembayaran penuh hari 30. Jelaskan syarat dan risiko keputusan mengambil diskon. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. Pembayaran dengan diskon Rp 98 juta pada hari 10, atau Rp 100 juta pada hari 30. Biaya periodik kehilangan diskon = 2/98 = 2,040816% selama 20 hari. Nominal tahunan = (2/98)(365/20) = 37,244898%; EAR = (100/98)^(365/20)-1 = 44,585293%."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Bunga bank 20 hari memakai tingkat efektif: (1,12)^(20/365)-1 = 0,0062291117. Bunga = Rp 98 juta × faktor = Rp 0,61045295 juta. Pelunasan Rp 98,61045295 juta, sehingga penghematan dibanding Rp 100 juta = Rp 1,38954705 juta."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Gunakan bank untuk mengambil diskon pada asumsi ini. Dana harus tersedia pada hari 10, diskon harus benar-benar diperoleh, dan tidak ada biaya tambahan. Menggunakan 12% × 20/365 akan mencampur tingkat efektif dengan bunga sederhana. Penundaan di luar hari 30 mempunyai konsekuensi kontrak dan pemasok yang belum dimasukkan."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-587 (PDF 623-629)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Membaca biaya pinjaman dan investasi persediaan"
    },
    {
      "kind": "ul",
      "items": [
        "A, B, C: nominal pinjaman Rp 100 juta, satu tahun, bunga 12%.",
        "A: bunga akhir tahun; B: bunga Rp 12 juta dipotong awal; C: bunga awal dan saldo tambahan Rp 10 juta tanpa bunga yang kembali akhir tahun.",
        "Persediaan rata-rata Rp 800 menjadi Rp 600 juta; biaya 20% setahun; tambahan biaya kekurangan stok Rp 50 juta setahun."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung kas bebas awal, pembayaran bersih akhir, dan biaya efektif A, B, C. Hitung penghematan dan manfaat bersih kebijakan persediaan. Pisahkan pilihan pendanaan dari keputusan persediaan dan jelaskan risikonya. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. A menerima Rp 100 juta dan membayar Rp 112 juta: 112/100-1 = 12%. B menerima Rp 88 juta dan membayar Rp 100 juta: 100/88-1 = 13,636364%. C menerima Rp 78 juta; pokok Rp 100 juta dikurangi saldo yang kembali Rp 10 juta membuat pembayaran bersih Rp 90 juta: 90/78-1 = 15,384615%. A termurah jika fasilitas serta risiko setara."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Pengurangan investasi persediaan = Rp 200 juta. Penghematan biaya tahunan = 200 × 20% = Rp 40 juta. Setelah biaya kekurangan stok Rp 50 juta, manfaat bersih = minus Rp 10 juta per tahun; kebijakan ini tidak layak pada asumsi."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Pelepasan investasi Rp 200 juta sekali terjadi berbeda dari penghematan Rp 40 juta per tahun. Evaluasi permintaan, lead time atau waktu pasokan, layanan pelanggan, risiko rollover kredit, dan potongan kontrak sebelum memilih."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-578 (PDF 619-620). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629)."
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
        "Biaya nominal kredit dagang: Untuk d diskon dan tambahan tenor n hari: nominal = d/(1-d) × 365/n. Syarat 2/10 net 30: (0,02/0,98) × 365/20 = 37,24% per tahun. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631).",
        "Biaya efektif kredit dagang: EAR = [1+d/(1-d)]^(365/n)-1. Syarat 2/10 net 30 memberi 44,59% per tahun. Bandingkan sumber dana memakai konvensi yang sama. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631).",
        "Potongan bunga awal: Nominal Rp 100 juta, bunga awal Rp 12 juta, kas diterima Rp 88 juta. Pelunasan Rp 100 juta setahun kemudian memberi biaya 100/88-1 = 13,64%. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631).",
        "Saldo kompensasi tambahan: Pinjaman Rp 100 juta, bunga akhir Rp 12 juta, saldo tertahan Rp 20 juta berarti kas tersedia Rp 80 juta; biaya dana 12/80 = 15%. Perlakukan arus pengembalian saldo dengan konsisten. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631).",
        "Persediaan dan biaya dana: Menurunkan persediaan rata-rata Rp 200 juta pada tarif biaya 20% menghemat Rp 40 juta per tahun. Dana Rp 200 juta yang dilepas berbeda dari penghematan tahunan; periksa biaya kekurangan stok. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631).",
        "Line of credit dan revolving credit: Line of credit adalah batas fasilitas kredit. Dalam contoh buku, revolver adalah fasilitas yang dikomitmenkan dengan biaya komitmen. Baca syarat kontrak, tenor, bunga, jaminan, dan dana yang benar-benar tersedia. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631)."
      ]
    }
  ]
};
