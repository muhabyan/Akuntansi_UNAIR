import type { Reading } from '../../../types';
export const TM11_READING: Reading = {
  "tm": 11,
  "title": "Modal Kerja I: Siklus dan Anggaran Kas",
  "ref": "Brigham & Houston, FFM 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan modal kerja i: siklus dan anggaran kas secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi modal kerja i: siklus dan anggaran kas.",
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
      "text": "TM11 mengikuti Kontrak MK2026 Sheet 1 baris 28. Fokus: Modal Kerja I: Siklus dan Anggaran Kas. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Brigham & Houston, FFM16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 8 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "h2",
      "text": "1. Bedakan kebijakan investasi dengan kebijakan pendanaan"
    },
    {
      "kind": "p",
      "text": "Working capital adalah investasi pada aset lancar; net working capital adalah aset lancar dikurangi kewajiban lancar. Kebijakan investasi memilih tingkat kas, persediaan dan piutang: relaxed atau longgar mempertahankan aset lebih besar, restricted atau ketat menekan aset lancar, moderate berada di antara keduanya. Aset kecil dapat meningkatkan efisiensi tetapi mengganggu layanan atau penjualan jika terlalu rendah. Keputusan pendanaan memilih sumber dan tenor dana; istilah agresif/konservatif dalam pendanaan tidak otomatis sama dengan kebijakan aset lancar. [hal. cetak 559-565; PDF 601-607]"
    },
    {
      "kind": "table",
      "headers": [
        "Pendanaan",
        "Struktur",
        "Risiko utama"
      ],
      "rows": [
        [
          "Maturity matching",
          "Dana mengikuti umur manfaat aset atau siklus musiman.",
          "Perkiraan umur aset dan sumber kas bisa meleset."
        ],
        [
          "Aggressive",
          "Dana pendek membiayai bagian lebih besar dari aset.",
          "Bunga berubah dan kredit perlu diperbarui."
        ],
        [
          "Conservative",
          "Dana panjang membiayai aset permanen dan sebagian musiman.",
          "Ada biaya dana atau kas menganggur."
        ]
      ],
      "caption": "Rujukan: hal. cetak 562-565, PDF 604-607."
    },
    {
      "kind": "h2",
      "text": "2. Siklus konversi kas dan unit harian"
    },
    {
      "kind": "p",
      "text": "Cash conversion cycle adalah jeda antara pembayaran kas untuk operasi dan penerimaan kas pelanggan. Persediaan menambah waktu sampai barang terjual, piutang menambah waktu sampai kas diterima, sementara utang pemasok menyediakan pendanaan sementara. Gunakan saldo rata-rata yang sebanding dengan arus setahun; jangan mencampur penjualan dengan COGS atau pembelian tanpa menjelaskan pendekatan. [hal. cetak 565-569; PDF 607-611]"
    },
    {
      "kind": "formula",
      "text": "CCC=DIO+DSO-DPO",
      "note": "Contoh DIO60, DSO45, DPO30 memberi CCC75 hari. Tahun365 atau360 hari harus disebut dan dipakai konsisten. Rujukan: hal. cetak 565-569, PDF 607-611."
    },
    {
      "kind": "formula",
      "text": "DIO=\\frac{Persediaan}{COGS/365}\\qquad DSO=\\frac{Piutang}{Penjualan\\ kredit/365}\\qquad DPO=\\frac{Utang\\ pemasok}{Pembelian\\ kredit/365}",
      "note": "Saldo rata-rata dipakai dalam contoh. Buku juga menunjukkan pendekatan memakai COGS pada DPO ketika data pembelian tidak tersedia; kasus harus menyatakan pilihan penyebut. Rujukan: hal. cetak 566-569, PDF 608-611."
    },
    {
      "kind": "p",
      "text": "Jika penjualan kredit Rp 36,5 miliar setahun, arus harian Rp 100 juta. Menurunkan DSO dari 45 menjadi 30 hari mengurangi piutang dari Rp 4,5 menjadi Rp 3 miliar. Dana Rp 1,5 miliar dilepas sekali; pada biaya dana 10% penghematan Rp 150 juta setahun. Diskon pelanggan, bad debt dan biaya penagihan dapat mengurangi manfaat ini. Menunda pemasok tanpa kesepakatan dapat merusak pasokan atau menghilangkan diskon. [hal. cetak 565-569 dan 578-584; PDF607-611 dan 620-626]"
    },
    {
      "kind": "h2",
      "text": "3. Anggaran kas menunjukkan kebutuhan dana tepat waktu"
    },
    {
      "kind": "p",
      "text": "Cash budget menempatkan penerimaan dan pembayaran pada bulan benar-benar terjadi. Penjualan kredit masuk kas saat tertagih, belanja modal dan pelunasan utang merupakan pembayaran meski bukan seluruhnya biaya laba periode itu. Hitung kas sebelum pendanaan, bandingkan saldo minimum, lalu masukkan pinjaman atau pelunasan. Periksa pola intrabulan jika arus besar terjadi sebelum pelanggan membayar. [hal. cetak 570-573; PDF 612-615]"
    },
    {
      "kind": "formula",
      "text": "Kas_{pra}=Kas_{awal}+Penerimaan-Pembayaran\\qquad Pinjaman=\\max(0,Kas_{minimum}-Kas_{pra})",
      "note": "Kas minimum adalah saldo setelah pendanaan. Awal20+penerimaan80-pembayaran105=-5 juta; minimum10 berarti pinjaman15 juta. Rujukan: hal. cetak 570-573, PDF612-615."
    },
    {
      "kind": "h2",
      "text": "4. Kebijakan kas, sekuritas dan piutang"
    },
    {
      "kind": "p",
      "text": "Kas diperlukan untuk transaksi dan menghadapi ketidakpastian. Penempatan sementara pada marketable securities, sekuritas mudah diperdagangkan, menimbang likuiditas, keamanan, imbal hasil dan biaya transaksi. Tidak semua saldo kas dapat bebas dipakai jika ada pembatasan kontrak. Dana menganggur terlalu besar mempunyai biaya peluang, sementara saldo terlalu kecil dapat mengganggu pembayaran. [hal. cetak 573-577; PDF 615-619]"
    },
    {
      "kind": "p",
      "text": "Empat unsur kebijakan kredit adalah jangka pembayaran, diskon, standar pelanggan yang layak, dan prosedur penagihan. Standar terlalu longgar menambah piutang bermasalah; terlalu ketat dapat kehilangan pelanggan yang menguntungkan. DSO dan aging schedule, daftar umur piutang, membantu menemukan keterlambatan. Evaluasi perubahan kebijakan dengan tambahan margin kontribusi, kerugian piutang, biaya penagihan dan biaya dana atas investasi tambahan, lalu uji risiko yang tidak tertangkap rata-rata. [hal. cetak 578-581; PDF620-623]"
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: Mengurai siklus konversi kas dan perbaikan penagihan"
    },
    {
      "kind": "ul",
      "items": [
        "Setahun 365 hari; seluruh penjualan kredit Rp 36,5 miliar; COGS dan pembelian kredit masing-masing Rp 36,5 miliar.",
        "Persediaan rata-rata Rp 6 miliar, piutang Rp 4,5 miliar, utang pemasok Rp 3 miliar.",
        "DSO dapat turun menjadi 30 hari tanpa biaya/penjualan hilang; DIO dan DPO tetap. Biaya dana 10% setahun."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung DIO, DSO, DPO dan CCC awal. Hitung CCC baru, dana piutang yang dilepas, dan penghematan biaya dana setahun. Jelaskan risiko jika pengurangan CCC berasal dari menunda pemasok melewati syarat pembayaran. Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil.",
      "blocks": [
        {
          "kind": "p",
          "text": "Arus harian penjualan, COGS, dan pembelian masing-masing 36,5/365=Rp 0,1 miliar. DIO=6/0,1=60 hari; DSO=4,5/0,1=45; DPO=3/0,1=30. CCC=60+45-30=75 hari. DSO baru 30 memberi piutang 3 miliar; CCC baru 60 hari. Dana dilepas 4,5-3=Rp 1,5 miliar, penghematan biaya 1,5×10%=Rp 0,15 miliar/tahun atau Rp 150 juta. Pelepasan investasi 1,5 miliar sekali terjadi berbeda dari penghematan tahunan 150 juta. Soal menyederhanakan pembelian sama dengan COGS; jika pembelian berbeda, gunakan pembelian kredit yang relevan untuk DPO. Pengurangan DSO dapat memakai standar kredit, penagihan, atau diskon, dengan biaya dan dampak penjualan yang perlu dihitung. Menunda pemasok berisiko kehilangan diskon, pasokan, dan reputasi sehingga CCC pendek sendiri belum menjamin keputusan terbaik."
        },
        {
          "kind": "p",
          "text": "Pembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 565-569 (PDF 607-611). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 578-581 (PDF 620-623)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Anggaran kas dan pilihan membayar utang"
    },
    {
      "kind": "ul",
      "items": [
        "Semua angka Rp juta: Januari kas awal 20, penerimaan 80, pembayaran 105. Februari penerimaan 100, pembayaran 80.",
        "Minimum kas 10; fasilitas pinjaman dapat dipakai pada akhir Januari. Bunga Januari/Februari diabaikan khusus pada kasus ini.",
        "Aturan model: saat surplus, lunasi pinjaman sepanjang minimum kas tetap terpenuhi."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Susun anggaran kas Januari dan Februari dengan penerimaan, pembayaran, pinjaman dan pelunasan. Hitung saldo pinjaman serta kas akhir masing-masing bulan. Uji jika penerimaan Februari hanya 70; jelaskan mengapa laba penjualan tidak mengganti anggaran kas. Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil.",
      "blocks": [
        {
          "kind": "p",
          "text": "Januari sebelum pendanaan 20+80-105=-5. Tambahan pinjaman 10-(-5)=15; kas akhir 10 dan saldo pinjaman 15. Februari dimulai dengan kas 10, sehingga kas sebelum pendanaan 10+100-80=30. Surplus di atas minimum 20 cukup melunasi 15; kas akhir 15, utang nol. Skenario penerimaanFebruari 70: kas sebelum pendanaan 10+70-80=0; perlu pinjaman tambahan 10 untuk minimum 10. Utang akhir menjadi 25, kas 10. Bunga diabaikan sesuai syarat; jika dimasukkan, bunga harus menjadi pembayaran dan kebutuhan dana meningkat. Penjualan kredit masuk penerimaan hanya saat tertagih, sehingga laba dapat positif saat kas defisit. Jadwal pembayaran utang, keterlambatan piutang, kapasitas kredit bank, dan saldo minimum perlu dicek setiap bulan. Perbedaan akhir bulan dan transaksi intrabulan dapat membuat defisit sementara lebih tinggi daripada yang terlihat pada ringkasan."
        },
        {
          "kind": "p",
          "text": "Pembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615)."
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
        "Cash conversion cycle: CCC = DIO + DSO - DPO. Umur persediaan 60, piutang 45, dan utang pemasok 30 memberi CCC 75 hari. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623).",
        "DIO, DSO, dan DPO: DIO = persediaan rata-rata/(COGS/365); DSO = piutang rata-rata/(penjualan kredit/365); DPO = utang pemasok rata-rata/(pembelian kredit/365). Nyatakan pendekatan jika pembelian diganti COGS. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623).",
        "Anggaran kas bulanan: Kas sebelum pendanaan = awal + penerimaan - pembayaran. Jika kas -Rp 5 juta dan minimum Rp 10 juta, pinjaman diperlukan Rp 15 juta. Pelunasan juga arus kas. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623).",
        "Investasi lancar dan pendanaan lancar: Kebijakan aset lancar mengatur jumlah kas/piutang/persediaan. Kebijakan pendanaan mengatur tenor dan sumber dana. Keduanya terpisah meski saling memengaruhi likuiditas. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623).",
        "Matching, aggressive, conservative: Matching menyelaraskan tenor aset dan pendanaan. Agresif memakai dana pendek lebih banyak, menambah risiko pembaruan. Konservatif memakai dana panjang untuk sebagian aset musiman dengan biaya peluang. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623).",
        "Evaluasi kebijakan kredit: Manfaat tahunan = tambahan kontribusi - bad debt - biaya penagihan - biaya modal atas tambahan investasi. Jangan mengurangkan investasi piutang penuh seolah biaya satu tahun. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623)."
      ]
    }
  ]
};
