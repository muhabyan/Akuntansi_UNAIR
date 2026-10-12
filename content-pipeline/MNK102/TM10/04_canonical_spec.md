# Spesifikasi kanonik MNK102 TM10

Status: READY_WITH_SCOPE_LIMITATION

SHA256 05 (CRLF): f463c383406b67f844e9e92009c7c2033cd805477e879c6aa9a28ee710f66526

Brigham & Houston, FFM 16e (2022), Bab 15, hal. cetak 521-556 (PDF 563-598)

## Batas sumber

Tanggal dan pajak mengikuti konteks pasar Amerika pada buku. Tidak ada klaim tarif atau tanggal berlaku di Indonesia. Arsip ujian tidak tersedia.

## Unit dan cakupan


| Unit | Bagian 05 | Rujukan | Isi terverifikasi |
| --- | --- | --- | --- |
| U10-01 | 1. Distribusi memerlukan laba, kas, dan peluang investasi | [hal. 519-541; PDF 561-583] [hal. 519-541; PDF 561-583] | Distributions to shareholders adalah pembagian kas atau manfaat kepada pemegang saham melalui dividen dan pembelian kemb |
| U10-02 | 2. Dividen residual secara bertahap | [hal. 527-532; PDF 569-574] [hal. 527-532; PDF 569-574] | Residual dividend model membiayai porsi ekuitas investasi yang layak dari laba terlebih dahulu, kemudian membagikan sisa |
| U10-03 | 4. Prosedur pembayaran dan mekanisme saham | [hal. 536-539; PDF 578-581] | Declaration date adalah tanggal keputusan dividen; record date menentukan pemegang yang dicatat, ex-dividend date membed |
| U10-04 | 4. Prosedur pembayaran dan mekanisme saham | [hal. 541-543; PDF 583-585] [hal. 541-543; PDF 583-585] | Stock split, pemecahan saham, dan stock dividend, pembagian saham tambahan, mengubah jumlah lembar. Pada nilai ekuitas t |


## Rumus dan contoh


```formula
Div=\max(0,NI-w_E\,CapEx)\qquad Payout=\frac{Div}{NI}\qquad DPS=\frac{Div}{N}
NI laba bersih; wE bobot ekuitas target; CapEx anggaran modal; N jumlah saham. Payout adalah rasio dividen terhadap laba; DPS dividen per saham. [hal. 530; PDF 572]
```

```formula
N_{baru}=N_{lama}-\frac{Kas_{buyback}}{P_{buyback}}\qquad EPS=\frac{NI}{N}
NI laba bersih; wE bobot ekuitas target; CapEx anggaran modal; N jumlah saham. Payout adalah rasio dividen terhadap laba; DPS dividen per saham. [hal. 530; PDF 572]
```

**Kasus 1: Dividen residual buku** Laba 100 juta USD, anggaran modal 50 juta USD, target ekuitas 60%. Tentukan kebutuhan ekuitas, utang, dan dividen. [hal. 530; PDF 572]

*Pembahasan:*

Diketahui: NI = 100; anggaran modal = 50; wE = 0,60. Semua nilai uang dalam juta USD sesuai sumber.

```formula
E_{baru}=50(0.60)=30\qquad D_{baru}=50(0.40)=20\qquad Div=100-30=70
Kebutuhan ekuitas didahulukan; dividen berasal dari sisa laba. [hal. 530; PDF 572]
```

```formula
Payout=70/100=70\%\qquad CapEx_{tanpa\ dividen}=100/0.60=166.6667
Batas investasi dibulatkan menjadi 166,67 juta USD. [hal. 530; PDF 572]
```
Anggaran di atas batas itu memerlukan ekuitas baru jika target bauran dipertahankan. Model residual membantu menentukan target jangka panjang; penerapan kaku dapat membuat dividen berfluktuasi. [hal. 531; PDF 573]


**Kasus 2: Split Tillman** Kamu memiliki 100 saham Tillman. EPS 4 USD, DPS 2 USD, harga 60 USD. Hitung penyesuaian mekanis untuk split dua banding satu. [hal. 543; PDF 585]

*Pembahasan:*


```formula
N_1=2(100)=200\qquad EPS_1=4/2=2\qquad DPS_1=2/2=1\qquad P_1=60/2=30
Jumlah saham dalam lembar; EPS, DPS, harga dalam USD per saham. [hal. 543; PDF 585]
```
Nilai mekanis tetap 100 × 60 = 200 × 30 = 6.000 USD. Buku memperkirakan harga bisa sedikit di atas 30 USD bila pasar menerima sinyal positif. Angka 30 adalah penyesuaian teoritis, bukan jaminan harga transaksi. [hal. 543; PDF 585]

## Spesifikasi diagram

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
