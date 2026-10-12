import type { Reading } from '../../../types';
export const TM10_READING: Reading = {
  "tm": 10,
  "title": "Distribusi kepada Pemegang Saham",
  "ref": "Brigham & Houston, FFM 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan distribusi kepada pemegang saham secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi distribusi kepada pemegang saham.",
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
      "text": "TM10 mengikuti Kontrak MK2026 Sheet 1 baris 27. Fokus: Distribusi kepada Pemegang Saham. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Brigham & Houston, FFM16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 10 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "h2",
      "text": "1. Distribusi memerlukan laba, kas, dan peluang investasi"
    },
    {
      "kind": "p",
      "text": "Distributions to shareholders adalah pembagian kas atau manfaat kepada pemegang saham melalui dividen dan pembelian kembali saham. Laba bersih bukan saldo kas: laba dapat tertahan dalam piutang atau aset lain. Keputusan distribusi perlu menilai proyek bernilai positif, kebutuhan modal, target utang/ekuitas, pembatasan kontrak dan kemampuan kas. Buku membahas model pasar ideal dan preferensi investor; contoh pajak Amerika pada buku tidak otomatis menjadi ketentuan pajak Indonesia sekarang. [hal. cetak 519-541; PDF 561-583]"
    },
    {
      "kind": "h2",
      "text": "2. Dividen residual secara bertahap"
    },
    {
      "kind": "p",
      "text": "Residual dividend model membiayai porsi ekuitas investasi yang layak dari laba terlebih dahulu, kemudian membagikan sisanya. Hitung kebutuhan ekuitas dari target porsi ekuitas dikali anggaran investasi. Jika kebutuhan melebihi laba, dividen residual nol dan terdapat kebutuhan dana tambahan. Jangan menghasilkan dividen negatif. Target investasi harus sudah dinilai layak; model ini bukan perintah menerima seluruh belanja modal. [hal. cetak 527-532; PDF 569-574]"
    },
    {
      "kind": "formula",
      "text": "Div=\\max(0,NI-w_E\\,CapEx)\\qquad Payout=\\frac{Div}{NI}\\qquad DPS=\\frac{Div}{N}",
      "note": "NI laba bersih; N jumlah lembar saham. Payout tidak terdefinisi jika laba nol; bila laba negatif, rasio biasa dapat menyesatkan. Rujukan: hal. cetak 527-533, PDF 569-575."
    },
    {
      "kind": "p",
      "text": "Contoh: laba Rp 150 juta, investasi Rp 200 juta, ekuitas target 60%. Kebutuhan ekuitas Rp 120 juta, utang Rp 80 juta, dividen Rp 30 juta, payout 20%. Dengan 10 juta lembar, DPS Rp 3. Jika investasi naik menjadi Rp 300 juta, ekuitas Rp 180 juta; laba hanya Rp 150 juta sehingga kekurangan Rp 30 juta dan dividen nol. Kestabilan dividen dapat dipertimbangkan melalui target payout jangka panjang dan distribusi tambahan ketika kas benar-benar tersedia. [hal. cetak 527-535; PDF 569-577]"
    },
    {
      "kind": "h2",
      "text": "3. Teori dividen dan penafsiran informasi"
    },
    {
      "kind": "table",
      "headers": [
        "Kerangka",
        "Makna",
        "Batas"
      ],
      "rows": [
        [
          "Dividend irrelevance",
          "Dalam pasar ideal, nilai berasal dari kas operasi dan risiko.",
          "Asumsi tanpa friksi diperlukan."
        ],
        [
          "Preferensi dividen atau keuntungan modal",
          "Investor dapat mempunyai preferensi risiko, kebutuhan pendapatan, atau perlakuan pajak.",
          "Tidak memberi kesimpulan universal dividen tinggi selalu menaikkan harga."
        ],
        [
          "Signaling",
          "Perubahan dividen dapat membawa informasi tentang kas masa depan.",
          "Sinyal bukan kepastian hasil."
        ],
        [
          "Clientele effect",
          "Investor dengan kebutuhan distribusi serupa cenderung memilih kebijakan yang cocok.",
          "Perubahan kebijakan dapat mengubah kelompok pemilik."
        ]
      ],
      "caption": "Rujukan: hal. cetak 521-527, PDF 563-569."
    },
    {
      "kind": "h2",
      "text": "4. Prosedur pembayaran dan mekanisme saham"
    },
    {
      "kind": "p",
      "text": "Declaration date adalah tanggal keputusan dividen; record date menentukan pemegang yang dicatat, ex-dividend date membedakan transaksi saham yang masih membawa hak dividen menurut pasar terkait, dan payment date adalah pembayaran. Urutan dan jeda mengikuti mekanisme pasar, sehingga contoh prosedur pasar Amerika dalam buku tidak dipakai sebagai kalender Bursa Efek Indonesia terbaru. DRIP, dividend reinvestment plan, menginvestasikan dividen kembali ke saham. [hal. cetak 536-539; PDF 578-581]"
    },
    {
      "kind": "p",
      "text": "Stock split, pemecahan saham, dan stock dividend, pembagian saham tambahan, mengubah jumlah lembar. Pada nilai ekuitas tetap, harga teoritis menyesuaikan berbanding terbalik. Split 2-untuk-1: N menjadi 2 N dan P menjadi P/2. Dividen saham 20%: N menjadi 1,20 N dan P menjadi P/1,20. Perubahan jumlah lembar tidak menciptakan kas. Harga aktual dapat merespons informasi baru atau kondisi pasar. [hal. cetak 541-543; PDF 583-585]"
    },
    {
      "kind": "h2",
      "text": "5. Buyback dan nilai"
    },
    {
      "kind": "formula",
      "text": "N_{baru}=N_{lama}-\\frac{Kas_{buyback}}{P_{buyback}}\\qquad EPS=\\frac{NI}{N}",
      "note": "Jumlah saham dalam lembar, harga dalam uang per lembar. Rujukan: hal. cetak 543-548, PDF 585-590."
    },
    {
      "kind": "p",
      "text": "Pembelian kembali menggunakan kas dan mengurangi jumlah saham. Jika kas Rp 200 juta keluar dari ekuitas Rp 1 miliar dan 4 juta dari 20 juta saham dibeli pada Rp 50, tersisa ekuitas Rp 800 juta dan 16 juta saham: harga teoritis tetap Rp 50. EPS bisa naik bila laba sengaja diasumsikan tetap, tetapi biaya peluang kas, tambahan utang, pajak dan harga beli perlu diuji. Buyback terlalu mahal dapat merugikan pemilik yang tetap memegang saham. [hal. cetak 544-548; PDF 586-590]"
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: Dividen residual, kekurangan dana, dan payout"
    },
    {
      "kind": "ul",
      "items": [
        "Laba bersih Rp 150 juta; kas tersedia untuk keputusan ini cukup.",
        "Proyek dasar Rp 200 juta; target ekuitas 60%, utang 40%; saham 10 juta lembar.",
        "Alternatif perluasan proyek Rp 300 juta dengan target sama."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung kebutuhan ekuitas dan utang, dividen, payout dan DPS rencana dasar. Hitung dana ekuitas tambahan serta dividen rencana perluasan. Jelaskan pengaruh kebijakan residual pada kestabilan dividen dan sinyal pasar. Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil.",
      "blocks": [
        {
          "kind": "p",
          "text": "Dasar: ekuitas 0,60×200=Rp 120 juta; utang 0,40×200=Rp 80 juta. Residual 150-120=Rp 30 juta; payout 30/150=20%; retention 80%; DPS30 juta/10 juta=Rp 3/lembar. Perluasan: ekuitas 180, utang 120 juta; laba 150 menyisakan kekurangan 30 juta, sehingga dividen residual nol. Kekurangan memerlukan emisi ekuitas, pengurangan proyek, atau penyesuaian target yang dinilai terpisah. Laba akuntansi tidak identik dengan kas: kasus sengaja menyatakan kas mencukupi. Dividen residual dapat berfluktuasi bersama peluang investasi; manajemen perlu mengomunikasikan alasan perubahan. Payout bukan persentase investasi; kebutuhan dana ekuitas dihitung lebih dahulu. Keputusan proyek mengasumsikan semua proyek sudah layak berdasarkan NPV, sehingga laba ditahan diarahkan ke investasi yang menciptakan nilai. Sinyal kenaikan/penurunan dividen tetap harus diuji terhadap kemampuan menghasilkan kas."
        },
        {
          "kind": "p",
          "text": "Pembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 525-533 (PDF 567-575)."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Distribusi kas: membandingkan dividen, buyback, dan split"
    },
    {
      "kind": "ul",
      "items": [
        "Ekuitas pasar Rp 1 miliar; saham 20 juta; harga Rp 50/lembar.",
        "Kas surplus untuk distribusi Rp 200 juta; tanpa pajak, biaya transaksi, atau sinyal baru.",
        "Untuk perhitungan EPS terpisah, laba tetap Rp 40 juta setahun; tidak ada pengaruh biaya peluang kas dalam model."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Bandingkan dividen tunai Rp 200 juta dengan buyback Rp 200 juta pada harga wajar. Hitung saham dan harga teoritis sesudah distribusi serta kekayaan pemilik 1.000 saham yang tidak menjual pada buyback. Hitung EPS buyback dan akibat split 2-untuk-1; jelaskan batas kesimpulan nilai. Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil.",
      "blocks": [
        {
          "kind": "p",
          "text": "Dividen: DPS=200 juta/20 juta=Rp 10. Ekuitas ex-distribusi 800 juta; harga=800 juta/20 juta=Rp 40. Pemilik 1.000 saham memegang saham Rp 40.000 dan dividen Rp 10.000, total Rp 50.000. Buyback: jumlah dibeli 200 juta/50=4 juta; tersisa 16 juta; nilai 800 juta; harga Rp 50. Pemilik 1.000 saham yang tetap memegang memiliki Rp 50.000. Total kekayaan sama menurut asumsi harga wajar dan pasar tanpa friksi. EPS lama 40 juta/20 juta=Rp 2; EPS setelah buyback 40 juta/16 juta=Rp 2,50, dengan laba sengaja tetap. Split 2-untuk-1 sesudah buyback menghasilkan 32 juta saham dan harga Rp 25; EPSRp 1,25. Jumlah lembar meningkat dan EPS berubah secara mekanis, tanpa penciptaan kas. Jika pajak, informasi baru atau bunga kas berubah, kesetaraan ini perlu dihitung ulang; jangan menerapkan angka teori sebagai prediksi harga sesungguhnya."
        },
        {
          "kind": "p",
          "text": "Pembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-548 (PDF 583-590)."
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
        "Dividen residual: Dividen = max(0, laba - kebutuhan ekuitas investasi). Investasi Rp 200 juta × 60% ekuitas = Rp 120 juta; laba Rp 150 juta menyisakan Rp 30 juta. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597).",
        "Payout, retention, dan DPS: Payout = dividen/laba; retention = 1-payout; DPS = dividen/jumlah saham. Dividen Rp 30 juta, laba Rp 150 juta, 10 juta saham memberi 20%, 80%, dan Rp 3/lembar. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597).",
        "Buyback dan EPS: Pembelian kembali Rp 300 juta pada Rp 30/lembar mengurangi 10 juta lembar. EPS dapat naik jika laba tetap; kas dan biaya peluangnya juga berubah. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597).",
        "Stock split tanpa perubahan nilai: Split 2-untuk-1 menggandakan jumlah lembar dan membagi harga teoritis dua. Lima juta saham Rp 80 menjadi sepuluh juta saham Rp 40, dengan total Rp 400 juta. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597).",
        "Signaling dan clientele: Signaling adalah sinyal informasi dividen; clientele adalah kelompok investor dengan preferensi distribusi tertentu. Reaksi harga bergantung ekspektasi, keberlanjutan kas, dan keadaan investor. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597).",
        "Preferensi pajak dividen: Pengaruh pajak bergantung tarif, jenis investor, penangguhan, dan yurisdiksi. Model pajak pada contoh buku tidak otomatis menjadi aturan pajak Indonesia terbaru. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 519-555 (PDF 561-597)."
      ]
    }
  ]
};
