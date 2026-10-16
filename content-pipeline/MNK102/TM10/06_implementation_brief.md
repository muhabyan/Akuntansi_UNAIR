# Implementasi MNK102 TM10

Masukan otoritatif: 05_student_learning_version.md; SHA256 76b54ff8c3608cd8c3776686c4d76be5ad7adea9277c0287ccc3669ace5ea107.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm10.ts, ekspor TM10_READING, Reading.layout layered, kunci 10. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.





## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.

## Revisi substantif 12 Oktober 2026

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

## Spesifikasi visual revisi

```visual
id: V-TM10-01
jenis: map
judul: Distribusi kepada Pemegang Saham: peta keputusan
sumber: Disusun dari Brigham & Houston, FFM 16e (2022), Bab 15, hal. cetak 521-556 (PDF 563-598)
isi: ["Preferensi investor", "Dividen residual", "Sinyal dan clientele", "Tanggal distribusi", "Split dan buyback"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Distribusi kepada Pemegang Saham: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```
```visual
id: V-TM10-02
jenis: flow
judul: Residual Dividend Model: urutan keputusan
sumber: [hal. 529; PDF 571]
isi: ["Pilih anggaran investasi layak", "Hitung porsi ekuitas sesuai target", "Gunakan laba ditahan untuk kebutuhan ekuitas", "Bagikan sisa laba sebagai dividen"]
hubungan: Tahapan berurutan sesuai sumber
pesan utama: Perhitungan dimulai dari investasi dan bauran modal.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Residual Dividend Model: urutan keputusan. Perhitungan dimulai dari investasi dan bauran modal.
```
```visual
id: V-TM10-03
jenis: flow
judul: Dividend Procedure: tanggal dan hak
sumber: [hal. 536; PDF 578] [hal. 537; PDF 579]
isi: ["Declaration: keputusan dividen", "Ex-dividend: pemisahan hak transaksi", "Record: daftar pemegang saham", "Payment: pembayaran"]
hubungan: Tahapan berurutan sesuai sumber
pesan utama: Urutan mengikuti prosedur pasar buku; jeda bukan aturan BEI.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Dividend Procedure: tanggal dan hak. Urutan mengikuti prosedur pasar buku; jeda bukan aturan BEI.
```
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
## Elaborasi 14 Oktober 2026

Sumber 05 diperbarui untuk tujuan spesifik, contoh terbimbing dekat rumus, dan alur penalaran. Angka ilustrasi baru diberi label penulis; tabel, rumus, gambar dan dua kasus sumber dipertahankan. TM09 mengurutkan teori sebelum kerangka kasus. SHA256 05: 76b54ff8c3608cd8c3776686c4d76be5ad7adea9277c0287ccc3669ace5ea107. Validasi terakhir dicatat di docs/pra-uas-elaboration-progress.md.
