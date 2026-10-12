# Spesifikasi kanonik MNK102 TM09

Status: READY_WITH_SCOPE_LIMITATION

SHA256 05 (CRLF): afb0e81f3ae21c9cd077d640bee54c70aab737d32dd473659c4dc1cc4ffefc39

Brigham & Houston, FFM 16e (2022), Bab 14, hal. cetak 478-520 (PDF 520-562)

## Batas sumber

Edisi 15 pada kontrak belum tersedia; pemetaan topik memakai 16e. DOL merupakan rumus turunan EBIT dalam latihan, bukan definisi bernomor pada bab. Arsip ujian tidak tersedia.

## Unit dan cakupan


| Unit | Bagian 05 | Rujukan | Isi terverifikasi |
| --- | --- | --- | --- |
| U9-01 | 1. Pisahkan risiko operasi dari risiko pendanaan | [hal. 483-494; PDF 525-536] [hal. 483-494; PDF 525-536] | Capital structure adalah bauran utang dan ekuitas yang mendanai perusahaan. Risiko bisnis berasal dari ketidakpastian pe |
| U9-02 | 1. Pisahkan risiko operasi dari risiko pendanaan | [hal. 484-493; PDF 526-535] [hal. 484-493; PDF 526-535] | Operating leverage, pengungkit operasi, membuat EBIT atau laba sebelum bunga dan pajak peka terhadap penjualan. Rumus DO |
| U9-03 | 2. Cari nilai maksimum, lalu periksa EPS | [hal. 494-498; PDF 536-540] [hal. 494-498; PDF 536-540] | Struktur optimal mendukung nilai perusahaan atau harga saham maksimum. Dengan arus kas operasi tetap, bauran itu juga me |
| U9-04 | 3. MM, biaya distress, informasi dan fleksibilitas | [hal. 500-505; PDF 542-547] [hal. 500-505; PDF 542-547] | MM tanpa pajak memakai pasar ideal: cara membagi klaim pendanaan tidak mengubah nilai operasi. Dalam model sederhana den |
| U9-05 | 3. MM, biaya distress, informasi dan fleksibilitas | [hal. 503-510; PDF 545-552] [hal. 503-510; PDF 545-552] | Signaling menjelaskan bagaimana emisi saham atau pilihan utang dapat ditafsirkan pasar ketika informasi manajemen dan in |


## Rumus dan contoh


```formula
\operatorname{DOL}=\frac{S-VC}{EBIT}\qquad ROIC=\frac{EBIT(1-T)}{IC}\qquad ROE=\frac{(EBIT-I)(1-T)}{E}
S pendapatan penjualan; VC biaya variabel; EBIT laba operasi sebelum bunga dan pajak; IC modal investasi; I bunga; E ekuitas. T adalah pajak pada asumsi kasus. DOL diturunkan dari perubahan EBIT dengan harga dan biaya variabel tetap. [hal. 487; PDF 529] [hal. 491; PDF 533]
```

```formula
\beta_L=\beta_U\left[1+(1-T)\frac{D}{E}\right]\qquad r_s=r_{RF}+\beta_L RP_M
Beta L adalah beta ekuitas dengan utang; beta U adalah beta tanpa utang. D/E membagi nilai pasar utang dengan ekuitas; rRF tingkat bebas risiko dan RPM premi risiko pasar. [hal. 495; PDF 537] [hal. 496; PDF 538]
```

```formula
WACC=w_Dr_D(1-T)+w_Er_E\qquad w_D+w_E=1
WACC adalah rata-rata tertimbang biaya modal. wD/wE adalah bobot pasar utang/ekuitas; rD/rE biaya utang/ekuitas; T pajak asumsi model. Tingkat bunga harus memakai basis waktu sama. [hal. 495; PDF 537] [hal. 496; PDF 538]
```

```formula
V_L=V_U+TD
[hal. 501; PDF 543]
```

**Kasus 1: Beta Barnes** Barnes memakai 40% utang dan 60% ekuitas, beta 1,5, dan pajak 25%. Bagaimana beta berubah pada utang 20%? Angka Quick Question buku. [hal. 497; PDF 539]

*Pembahasan:*

Diketahui: beta levered 1,5; D/E awal = 0,4/0,6. Pajak 25% mengikuti asumsi buku, bukan tarif pajak Indonesia.

```formula
\beta_U=\frac{1.5}{1+(1-0.25)(0.4/0.6)}=1.0
Beta tidak memiliki satuan. [hal. 497; PDF 539]
```

```formula
\beta_{L,baru}=1.0[1+0.75(0.2/0.8)]=1.1875
Jangan memasukkan bobot utang 0,2 sebagai D/E. [hal. 497; PDF 539]
```
Hasil 1,1875 memakai empat desimal. Leverage yang lebih rendah mengurangi risiko ekuitas pada operasi yang sama. [hal. 497; PDF 539]


**Kasus 2: EPS Bigbee** Table 14.3 memberi EBIT 30.000 USD, pajak 25%, dan 10.000 saham tanpa utang. Pada utang 50%, bunga 7.200 USD dan saham 5.000. Bandingkan EPS. [hal. 491; PDF 533]

*Pembahasan:*


```formula
EPS_0=\frac{30{,}000(0.75)}{10{,}000}=2.25\qquad EPS_{50}=\frac{(30{,}000-7{,}200)(0.75)}{5{,}000}=3.42
Hasil USD per saham; angka akhir dua desimal. [hal. 491; PDF 533]
```
EPS naik, tetapi simpangan bakunya juga naik dari 3,70 menjadi 7,41 USD per saham. Struktur optimal Bigbee tetap utang 30%, tempat WACC minimum 10,86% dan harga maksimum 20,81 USD. [hal. 493; PDF 535] [hal. 498; PDF 540]

## Spesifikasi diagram

```visual
id: V-TM09-01
jenis: map
judul: Struktur Modal dan Leverage: peta keputusan
sumber: Disusun dari Brigham & Houston, FFM 16e (2022), Bab 14, hal. cetak 478-520 (PDF 520-562)
isi: ["Risiko bisnis", "Leverage keuangan", "Bobot modal", "Hamada dan WACC", "Teori dan target modal"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Struktur Modal dan Leverage: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```

```visual
id: V-TM09-02
jenis: chart
judul: Return on Invested Capital: variasi hasil operasi
sumber: Figure 14.1 [hal. 484; PDF 526]
isi: ["ROIC rata-rata 9,0%", "Simpangan baku 12,9%", "Variasi historis menggambarkan risiko bisnis"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Rata-rata yang sama dapat disertai variasi hasil berbeda.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Return on Invested Capital: variasi hasil operasi. Rata-rata yang sama dapat disertai variasi hasil berbeda.
data: {"panels":[{"title":"ROIC Bigbee 2012-2020","xlabel":"Tahun","ylabel":"ROIC (%)","series":[{"label":"ROIC","points":[[2012,-12.4],[2013,12.8],[2014,21.9],[2015,6.4],[2016,19.6],[2017,15.7],[2018,11.5],[2019,-12.2],[2020,18]]}],"xmin":2012,"xmax":2020,"ymin":-15,"ymax":25,"xticks":[2012,2013,2014,2015,2016,2017,2018,2019,2020]},{"title":"Distribusi ROIC: skema pada buku","schematicDistribution":true}]}
```

```visual
id: V-TM09-03
jenis: chart
judul: Operating Leverage: biaya tetap dan titik impas
sumber: Figure 14.2 [hal. 487; PDF 529]
isi: ["Plan A: harga 2; VC 1,5; FC 25.000 USD", "Plan B: harga 2; VC 1; FC 70.000 USD", "Impas A 50.000 unit; B 70.000 unit"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Plan B memiliki biaya tetap lebih tinggi dan EBIT lebih peka.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Operating Leverage: biaya tetap dan titik impas. Plan B memiliki biaya tetap lebih tinggi dan EBIT lebih peka.
data: {"panels":[{"title":"Plan A","xlabel":"Penjualan (ribu unit)","ylabel":"Pendapatan/biaya (ribu USD)","series":[{"label":"Penjualan","points":[[0,0],[120,240]]},{"label":"Biaya total","points":[[0,25],[120,205]]},{"label":"Biaya tetap","points":[[0,25],[120,25]]}],"xmin":0,"xmax":120,"ymin":0,"ymax":250,"xticks":[0,120]},{"title":"Plan B","xlabel":"Penjualan (ribu unit)","ylabel":"Pendapatan/biaya (ribu USD)","series":[{"label":"Penjualan","points":[[0,0],[120,240]]},{"label":"Biaya total","points":[[0,70],[120,190]]},{"label":"Biaya tetap","points":[[0,70],[120,70]]}],"xmin":0,"xmax":120,"ymin":0,"ymax":250,"xticks":[0,120]}]}
```

```visual
id: V-TM09-04
jenis: chart
judul: Business Risk: distribusi ROIC Plan A dan B
sumber: Figure 14.3 [hal. 488; PDF 530]; data Figure 14.2 [hal. 487; PDF 529]
isi: ["Penjualan harapan kedua rencana 200.000 USD", "ROIC harapan A 9,38%; B 11,25%", "Sebaran B lebih lebar"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Grafik memakai titik diskret tabel; kurva buku merupakan aproksimasi kontinu.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Business Risk: distribusi ROIC Plan A dan B. Grafik memakai titik diskret tabel; kurva buku merupakan aproksimasi kontinu.
data: {"panels":[{"title":"ROIC pada lima skenario permintaan","xlabel":"ROIC (%)","ylabel":"Probabilitas","series":[{"label":"Plan A","points":[[-9.38,0.05],[-1.88,0.2],[9.38,0.5],[20.63,0.2],[28.13,0.05]]},{"label":"Plan B","points":[[-26.25,0.05],[-11.25,0.2],[11.25,0.5],[33.75,0.2],[48.75,0.05]]}],"xmin":-30,"xmax":50,"ymin":0,"ymax":0.55,"xticks":[-30,50]}]}
```

```visual
id: V-TM09-05
jenis: chart
judul: Financial Leverage: distribusi ROE
sumber: Figure 14.4 [hal. 492; PDF 534]; data Table 14.3 [hal. 491; PDF 533]
isi: ["Tanpa utang: ROE harapan 11,25%", "Utang 50%: ROE harapan 17,10%", "Simpangan baku ROE 18,52% menjadi 37,05%"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Grafik diskret tabel mengganti aproksimasi kurva kontinu buku; risiko ekuitas bertambah.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Financial Leverage: distribusi ROE. Grafik diskret tabel mengganti aproksimasi kurva kontinu buku; risiko ekuitas bertambah.
data: {"panels":[{"title":"Probabilitas ROE pada skenario yang sama","xlabel":"ROE (%)","ylabel":"Probabilitas","series":[{"label":"Tanpa utang","points":[[-26.25,0.05],[-11.25,0.2],[11.25,0.5],[33.75,0.2],[48.75,0.05]]},{"label":"Utang 50%","points":[[-57.9,0.05],[-27.9,0.2],[17.1,0.5],[62.1,0.2],[92.1,0.05]]}],"xmin":-60,"xmax":100,"ymin":0,"ymax":0.55,"xticks":[-60,100]}]}
```

```visual
id: V-TM09-06
jenis: chart
judul: EPS and Risk: hasil dan variasi laba per saham
sumber: Figure 14.5 [hal. 493; PDF 535]
isi: ["EPS maksimum 3,42 USD pada utang 50%", "CV EPS naik dari 1,65 ke 2,74", "Risiko bisnis tetap ada pada utang nol"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Utang meningkatkan EPS dan risiko; EPS bukan satu-satunya kriteria.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: EPS and Risk: hasil dan variasi laba per saham. Utang meningkatkan EPS dan risiko; EPS bukan satu-satunya kriteria.
data: {"panels":[{"title":"EPS harapan","xlabel":"Debt/Capital (%)","ylabel":"EPS (USD/saham)","series":[{"label":"EPS","points":[[0,2.25],[10,2.43],[20,2.65],[30,2.89],[40,3.17],[50,3.42],[60,3.38]]}],"xmin":0,"xmax":60,"ymin":0,"ymax":4,"xticks":[0,10,20,30,40,50,60]},{"title":"Risiko EPS","xlabel":"Debt/Capital (%)","ylabel":"Koefisien variasi","series":[{"label":"CV EPS","points":[[0,1.65],[10,1.69],[20,1.75],[30,1.83],[40,1.95],[50,2.17],[60,2.74]]}],"xmin":0,"xmax":60,"ymin":0,"ymax":3,"xticks":[0,10,20,30,40,50,60]}]}
```

```visual
id: V-TM09-07
jenis: chart
judul: Required Equity Return: komponen biaya ekuitas
sumber: Figure 14.6 [hal. 497; PDF 539]; Table 14.4 [hal. 495; PDF 537]
isi: ["Bebas risiko 3%", "Premi bisnis 8,25%", "Premi keuangan naik bersama utang"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Biaya ekuitas terdiri atas dasar bebas risiko dan dua premi risiko.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Required Equity Return: komponen biaya ekuitas. Biaya ekuitas terdiri atas dasar bebas risiko dan dua premi risiko.
data: {"panels":[{"title":"Komponen biaya ekuitas Bigbee","xlabel":"Debt/Capital (%)","ylabel":"Tingkat (%)","series":[{"label":"Biaya ekuitas rs","points":[[0,11.25],[10,11.94],[20,12.8],[30,13.9],[40,15.38],[50,17.44],[60,20.53]]},{"label":"Bebas risiko + premi bisnis","points":[[0,11.25],[60,11.25]]},{"label":"Bebas risiko","points":[[0,3],[60,3]]}],"xmin":0,"xmax":60,"ymin":0,"ymax":25,"xticks":[0,10,20,30,40,50,60]}]}
```

```visual
id: V-TM09-08
jenis: chart
judul: Optimal Capital Structure: EPS, WACC, harga
sumber: Figure 14.7 [hal. 499; PDF 541]; Table 14.4 [hal. 495; PDF 537]
isi: ["EPS tertinggi: utang 50%", "WACC terendah 10,86%: utang 30%", "Harga tertinggi 20,81 USD: utang 30%"]
hubungan: Sumbu, label, dan angka mengikuti sumber; pembulatan data buku dipertahankan
pesan utama: Struktur optimal menilai harga saham, dengan WACC dan risiko yang sepadan.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Optimal Capital Structure: EPS, WACC, harga. Struktur optimal menilai harga saham, dengan WACC dan risiko yang sepadan.
data: {"panels":[{"title":"EPS harapan","xlabel":"Debt/Capital (%)","ylabel":"EPS (USD/saham)","series":[{"label":"EPS","points":[[0,2.25],[10,2.43],[20,2.65],[30,2.89],[40,3.17],[50,3.42],[60,3.38]]}],"xmin":0,"xmax":60,"ymin":0,"ymax":4,"xticks":[0,10,20,30,40,50,60]},{"title":"Komponen biaya modal","xlabel":"Debt/Capital (%)","ylabel":"Tingkat (%)","series":[{"label":"Biaya ekuitas","points":[[0,11.25],[10,11.94],[20,12.8],[30,13.9],[40,15.38],[50,17.44],[60,20.53]]},{"label":"WACC","points":[[0,11.25],[10,11.04],[20,10.88],[30,10.86],[40,10.97],[50,11.42],[60,12.71]]},{"label":"Utang setelah pajak","points":[[0,3],[10,3],[20,3.23],[30,3.75],[40,4.35],[50,5.4],[60,7.5]]}],"xmin":0,"xmax":60,"ymin":0,"ymax":25,"xticks":[0,10,20,30,40,50,60]},{"title":"Harga saham","xlabel":"Debt/Capital (%)","ylabel":"USD/saham","series":[{"label":"Harga","points":[[0,20],[10,20.38],[20,20.72],[30,20.81],[40,20.62],[50,19.61],[60,16.44]]}],"xmin":0,"xmax":60,"ymin":0,"ymax":25,"xticks":[0,10,20,30,40,50,60]}]}
```

```visual
id: V-TM09-09
jenis: tradeoff
judul: Tax Shield and Distress Costs: perisai pajak dan biaya kesulitan
sumber: Figure 14.8 [hal. 503; PDF 545]
isi: ["Nilai dasar tanpa utang 20 USD", "Perisai bunga menambah nilai", "Biaya distress mengurangi nilai", "D1 ambang biaya; D2 titik optimal"]
hubungan: Kurva pajak di atas kurva aktual; selisih adalah biaya distress
pesan utama: Bentuk kurva bersifat konseptual; tidak menyatakan harga pada setiap tingkat utang.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Tax Shield and Distress Costs: perisai pajak dan biaya kesulitan. Bentuk kurva bersifat konseptual; tidak menyatakan harga pada setiap tingkat utang.
```

```visual
id: V-TM09-10
jenis: tradeoff
judul: Campus Deli: hubungan struktur modal dan harga
sumber: Figure IC 14.1 [hal. 519; PDF 561]
isi: ["Manfaat pajak utang", "Biaya kesulitan keuangan", "Struktur optimal D2"]
hubungan: Label dan interpretasi mengikuti Figure 14.8; diagram latihan buku meminta mahasiswa memberi label
pesan utama: Sintesis label untuk diagram kosong latihan Campus Deli; bukan kunci resmi penerbit.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Campus Deli: hubungan struktur modal dan harga. Sintesis label untuk diagram kosong latihan Campus Deli; bukan kunci resmi penerbit.
```
