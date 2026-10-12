# Spesifikasi kanonik MNK102 TM12

Status: READY_WITH_SCOPE_LIMITATION

SHA256 05 (CRLF): 391ce96382564ce5849a5cb0aeb143c850db9aba9460fc506feecee3587d99c2

Brigham & Houston, FFM 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631)

## Batas sumber

Web Appendix 16A dan 16B tidak tersedia. EOQ, discount interest, dan compensating balance tidak dijadikan teori kanonik. Latihan pengembangan arus kas ditandai sebagai asumsi buatan dan bukan contoh buku.

## Unit dan cakupan


| Unit | Bagian 05 | Rujukan | Isi terverifikasi |
| --- | --- | --- | --- |
| U12-01 | 1. Persediaan menyediakan layanan sekaligus menyerap dana | [hal. 577-578; PDF619-620] [hal. 577-578; PDF619-620] | Persediaan mencakup bahan, barang dalam proses, dan barang jadi. Peramalan penjualan, waktu pasokan, keusangan, biaya pe |
| U12-02 | 2. Diskon pemasok adalah keputusan biaya pendanaan | [hal. 581-584; PDF623-626] [hal. 581-584; PDF623-626] | Syarat 2/10, net 30 berarti diskon 2% bila membayar pada hari 10, atau harga penuh pada hari 30. Melepas diskon seolah m |
| U12-03 | 3. Biaya bank ditentukan dari arus kas bersih | [hal. 587; PDF 629] [hal. 587; PDF 629] | Pinjaman bunga sederhana menghitung bunga dari pokok, tingkat harian, dan jumlah hari. EAR berubah menurut frekuensi pem |
| U12-04 | 4. Fasilitas dan risiko pembiayaan jangka pendek | [hal. 584-589; PDF626-631] [hal. 584-589; PDF626-631] | Promissory note adalah janji pembayaran yang merinci kewajiban; line of credit menunjukkan batas fasilitas; revolving cr |
| U12-05 | 4. Fasilitas dan risiko pembiayaan jangka pendek | [hal. 584-589; PDF626-631] | Pilihan dana perlu memeriksa tenor, bunga tetap/mengambang, biaya fasilitas, syarat jaminan, covenant atau pembatasan ko |


## Rumus dan contoh


```formula
r_{nom}=\frac{d}{1-d}\frac{365}{n}\qquad EAR=\left(1+\frac{d}{1-d}\right)^{365/n}-1
d adalah proporsi diskon; n jeda hari diskon sampai pelunasan penuh. EAR berarti tingkat efektif tahunan; r nominal belum memperhitungkan penggandaan. [hal. 582; PDF 624] [hal. 587; PDF 629]
```

**Kasus 1: Melepas diskon** Syarat 2/10, net 30 pada PCC: diskon 2% dapat diperoleh hari ke-10. Berapa biaya tahunan jika diskon dilepas? [hal. 582; PDF 624]

*Pembahasan:*


```formula
r_{nom}=\frac{0.02}{0.98}\frac{365}{30-10}=0.37244898
Periode tambahan 20 hari; basis 365 hari sesuai contoh buku. [hal. 582; PDF 624]
```

```formula
EAR=\left(1+\frac{0.02}{0.98}\right)^{365/20}-1=0.44585293
Nominal 37,24%; efektif 44,59%, dibulatkan dua desimal. [hal. 582; PDF 624]
```
Biaya ini berasal dari diskon yang hilang dibanding dana yang ditunda, bukan bunga 2% per tahun. Bandingkan dengan pinjaman tersedia pada basis nominal atau efektif yang sepadan. [hal. 583; PDF 625]


**Kasus 2: Bunga sederhana buku** Pinjaman 10.000 USD, nominal 3,25%, basis 360 hari, bunga dibayar tiap bulan. Hitung bunga untuk bulan 30 hari dan EAR. [hal. 587; PDF 629]

*Pembahasan:*


```formula
I_{30}=10{,}000\frac{0.0325}{360}(30)=27.083333\ \mathrm{USD}
Bunga bulan 30 hari dibulatkan 27,08 USD; basis 360 tidak boleh diganti 365 diam-diam. [hal. 587; PDF 629]
```

```formula
EAR=(1+0.0325/12)^{12}-1=0.032989
EAR 3,2989% mengikuti angka buku. Tarif tersebut adalah asumsi historis contoh, bukan harga kredit kini. [hal. 587; PDF 629]
```
Perbandingan biaya perlu mengetahui frekuensi pembayaran bunga. Pokok pinjaman dibayar sesuai kontrak; risiko bank menolak perpanjangan dibahas pada sumber. [hal. 585; PDF 627]

## Spesifikasi diagram

```visual
id: V-TM12-01
jenis: map
judul: Modal Kerja II: Persediaan dan Pendanaan: peta keputusan
sumber: Disusun dari Brigham & Houston, FFM 16e (2022), Bab 16, hal. cetak 577-589 (PDF 619-631)
isi: ["Persediaan", "Diskon pemasok", "Bunga bank", "Fasilitas kredit", "Risiko pembaruan dana"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Modal Kerja II: Persediaan dan Pendanaan: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```

```visual
id: V-TM12-02
jenis: flow
judul: Trade Credit: diskon atau pendanaan
sumber: [hal. 582; PDF 624]
isi: ["Hari 0: pembelian kredit", "Hari 10: bayar 98% untuk mengambil diskon", "Hari 30: bayar 100% bila diskon dilepas"]
hubungan: Tahapan berurutan sesuai sumber
pesan utama: Tambahan pendanaan 20 hari memiliki biaya 2/98.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Trade Credit: diskon atau pendanaan. Tambahan pendanaan 20 hari memiliki biaya 2/98.
```
