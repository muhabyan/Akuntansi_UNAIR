# Revisi MNK102 TM10

Rujukan langsung dan perbaikan ada pada 04/05/06. SHA256 05: bc7bc3142867f044bbc32534bb8e336337a37288e95d4f2f351134256fd4489b.

## 5a. Uji pembagian kas terhadap kebutuhan investor

Dalam dividend irrelevance, investor yang membutuhkan kas dapat menjual sedikit saham, sedangkan investor yang menerima dividen dapat membelinya kembali. Mekanisme homemade dividend, dividen yang dibentuk sendiri, mengandalkan ketiadaan pajak dan biaya transaksi. Dalam kenyataan, biaya transaksi, pajak, kebutuhan pendapatan dan informasi membuat kebijakan distribusi relevan bagi kelompok investor tertentu. [hal. 523-527; PDF 565-569]

Buyback yang dibayar dengan kas mengurangi aset kas dan jumlah saham. EPS dapat naik karena pembaginya mengecil, walaupun nilai perusahaan tidak bertambah. Contoh ADC memakai laba 4,4 juta USD dan pembelian 110.000 saham pada 20 USD, sehingga saham tersisa 990.000 dan EPS menjadi sekitar 4,44 USD. Buku mempertahankan harga 20 USD dalam perhitungan P/E; kenaikan EPS sendiri belum menetapkan harga baru. Harga buyback yang terlalu tinggi dapat merugikan pemilik yang tetap memegang saham. [hal. 545-548; PDF 587-590]

Payout ratio, rasio pembayaran terhadap laba, tidak terdefinisi saat laba nol dan sulit ditafsirkan saat laba negatif. Rasio di atas 100% menunjukkan pembayaran melebihi laba periode itu. Kas operasi dapat berbeda dari laba; periksa kebutuhan investasi sebelum menyimpulkan dividen aman. Figure 15.1 memakai EPS, CFPS dan DPS historis ExxonMobil, dengan penyesuaian stock split. Data mentah per tahun tidak disajikan, sehingga angka kurva tidak ditaksir ulang. [hal. 533-534; PDF 575-576]


```visual
id: V-TM10-04
jenis: chart
judul: Residual Dividend: investasi dan sisa laba
sumber: Turunan Eq. 15.1 dan contoh hal. 530 (PDF 572). NI 100 juta USD dan wE 60%; kurva hasil perhitungan, bukan data historis.
isi: ["Anggaran 50: dividen 70 juta USD", "Anggaran 100: dividen 40 juta USD", "Anggaran 166,67: dividen nol"]
hubungan: Sumbu, satuan, legenda dan penanda dibaca bersama asumsi pada teks
pesan utama: Investasi layak mendapat porsi ekuitas target dahulu; dividen memakai sisa laba.
versi HP: grafik 360 unit dengan label 16 unit; rincian desktop dapat dibuka
alt text: Residual Dividend: investasi dan sisa laba. Investasi layak mendapat porsi ekuitas target dahulu; dividen memakai sisa laba.
data: {"panels": [{"title": "Laba 100; target ekuitas 60%", "xlabel": "Anggaran modal (juta USD)", "ylabel": "Dividen (juta USD)", "series": [{"label": "Dividen residual", "points": [[0, 100], [50, 70], [100, 40], [150, 10], [166.6666667, 0], [200, 0]]}], "xmin": 0, "xmax": 200, "ymin": 0, "ymax": 110, "xticks": [0, 50, 100, 150, 200], "markers": [{"x": 50, "y": 70, "label": "Contoh buku: 50 menghasilkan 70"}, {"x": 166.6666667, "y": 0, "label": "Dividen nol: 100/0,60 = 166,67"}]}]}
```


Cara membaca: kurva berhenti pada dividen nol saat anggaran modal mencapai 166,67 juta USD. Angka tersebut berasal dari 100/0,60, dengan laba dan target ekuitas tetap. Kenaikan belanja modal selanjutnya membutuhkan dana ekuitas tambahan. Grafik merupakan turunan mekanis model residual, dengan input contoh buku; titik 166,67 merupakan hasil hitungan. [hal. 530; PDF 572]

| Pilihan | Mekanisme sumber | Konsekuensi |
| --- | --- | --- |
| Dividen rutin | Komitmen kas yang relatif stabil | Pemotongan dapat ditafsirkan negatif |
| Buyback | Pemilik memilih menjual atau tetap memegang | Fleksibel, tetapi harga pembelian perlu diuji |
| DRIP saham beredar | Dividen dipakai membeli saham melalui pasar | Kas sudah dibagikan; tidak menambah modal baru emiten |
| DRIP saham baru | Dividen ditukar dengan saham yang diterbitkan emiten | Menyediakan ekuitas baru dan mengubah lembar |
| Stock split/dividend | Jumlah saham dan harga teoritis menyesuaikan | Tidak menciptakan kas operasi baru |

[hal. 538-548; PDF 580-590]

<!-- self-check question="Mengapa rasio pembayaran 120% perlu diperiksa bersama arus kas?" -->
Dividen melebihi laba sebesar 20% pada periode itu. Laba dan kas berbeda, sehingga periksa kas operasi, kebutuhan investasi, dana lain dan kestabilan pembayaran. Rasio ini sendiri belum menetapkan kemampuan pembayaran berikutnya. [hal. 533-534; PDF 575-576]
<!-- self-check:end -->


Temuan lintas grafik: legenda diberi sampel garis, grafik numerik mendapat versi ponsel, skenario diskret memakai batang probabilitas, dan batas model dijelaskan. Jumlah latihan dipertahankan.
