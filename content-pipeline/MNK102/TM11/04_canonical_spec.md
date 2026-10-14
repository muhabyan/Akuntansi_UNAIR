# Spesifikasi kanonik MNK102 TM11

Status: READY_WITH_SCOPE_LIMITATION

SHA256 05 (CRLF): c27aea45140182aa5e4bf74fbb49350d4cf0d1ddaff3da7734d8b187843ddccc

Brigham & Houston, FFM 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623)

## Batas sumber

Kontrak membagi Bab 16 menjadi dua pertemuan tanpa batas subbab; paket memilih kebijakan aset, CCC, kas, dan piutang pada TM11, persediaan dan pendanaan pada TM12. Model anggaran buku dibulatkan ke juta USD.

## Unit dan cakupan


| Unit | Bagian 05 | Rujukan | Isi terverifikasi |
| --- | --- | --- | --- |
| U11-01 | 1. Bedakan kebijakan investasi dengan kebijakan pendanaan | [hal. 559-565; PDF 601-607] [hal. 559-565; PDF 601-607] | Working capital adalah investasi pada aset lancar; net working capital adalah aset lancar dikurangi kewajiban lancar. Ke |
| U11-02 | 2. Siklus konversi kas dan unit harian | [hal. 565-569; PDF 607-611] | Cash conversion cycle adalah jeda antara pembayaran kas untuk operasi dan penerimaan kas pelanggan. Persediaan menambah  |
| U11-03 | 3. Anggaran kas menunjukkan kebutuhan dana tepat waktu | [hal. 570-573; PDF 612-615] [hal. 570-573; PDF 612-615] | Cash budget menempatkan penerimaan dan pembayaran pada bulan benar-benar terjadi. Penjualan kredit masuk kas saat tertag |
| U11-04 | 4. Kebijakan kas, sekuritas dan piutang | [hal. 573-577; PDF 615-619] [hal. 573-577; PDF 615-619] | Kas diperlukan untuk transaksi dan menghadapi ketidakpastian. Penempatan sementara pada marketable securities, sekuritas |
| U11-05 | 4. Kebijakan kas, sekuritas dan piutang | [hal. 578-581; PDF 620-623] [hal. 578-581; PDF 620-623] | Empat unsur kebijakan kredit adalah jangka pembayaran, diskon, standar pelanggan yang layak, dan prosedur penagihan. Sta |


## Rumus dan contoh





**Kasus 1: Siklus GFI** GFI memegang barang 60 hari, menagih pelanggan 60 hari, dan membayar pemasok hari ke-40. Biaya barang 100.000 USD. Kapan dana perlu dibiayai? [hal. 566; PDF 608]

*Pembahasan:*


Pembayaran pemasok terjadi pada hari ke-40, penjualan hari ke-60, dan penerimaan kas hari ke-120. Pendanaan 100.000 USD diperlukan selama 80 hari. Memperpendek CCC tetap perlu menjaga penjualan dan hubungan pemasok. [hal. 566; PDF 608]


**Kasus 2: Anggaran Juli Allied** Table 16.1: penjualan Mei 200, Juni 250, Juli 300 juta USD. Penerimaan 20% saat penjualan dengan diskon 2%, 70% bulan berikutnya, 10% dua bulan berikutnya. Pembayaran Juli 265, target kas 10. Hitung kebutuhan pada tabel. [hal. 571; PDF 613]

*Pembahasan:*


Tabel buku membulatkan penerimaan menjadi 254. NCF Juli = 254 - 265 = minus 11 juta USD. Kumulatif NCF Juli juga minus 11, sehingga kebutuhan dibanding target 10 adalah 21 juta USD. [hal. 571; PDF 613]

Jika menghitung tanpa pembulatan tabel, NCF minus 11,2 dan kebutuhan 21,2 juta USD. Nyatakan pilihan pembulatan agar hasil dapat diperiksa. Tabel memakai satuan juta tanpa desimal. Kebutuhan harian dapat melebihi saldo akhir bulan. [hal. 572; PDF 614]

## Spesifikasi diagram





## Revisi substantif 12 Oktober 2026

## 4a. Hubungkan angka dengan keputusan kas

Rasio harian menggunakan pembagi yang sesuai arusnya. Buku menghitung inventory conversion period dengan persediaan dibagi penjualan harian, dan payables deferral period dengan utang dagang dibagi pembelian harian. Buku juga memperbolehkan COGS harian pada kedua rasio tersebut karena persediaan dan utang dicatat pada biaya. Pendekatan biaya perlu dinyatakan, terutama saat margin membuat penjualan berbeda dari biaya. [hal. 567-568; PDF 609-610]

Saldo akhir dipakai pada contoh buku sebagai pendekatan perusahaan stabil. Bila usaha musiman, saldo rata-rata yang mewakili periode lebih berguna. Jangan mengganti 365 hari dengan 360 pada satu rasio saja. CCC yang lebih pendek dapat mengurangi kebutuhan dana, tetapi menunda utang di luar kontrak dapat merusak hubungan pemasok. [hal. 567-569; PDF 609-611]


```visual
id: V-TM11-05
jenis: chart
judul: Allied Cash Budget: kebutuhan pinjaman dan surplus
sumber: Table 16.1 baris 40, hal. 571 (PDF 613), angka bulat juta USD pada buku.
isi: ["Juli minus 21: kebutuhan pinjaman", "September minus 100: kebutuhan terbesar", "Desember 102: surplus untuk investasi"]
hubungan: Sumbu, satuan, legenda dan penanda dibaca bersama asumsi pada teks
pesan utama: Dana diperlukan saat saldo kumulatif berada di bawah target; gunakan angka bulat tabel sumber.
versi HP: grafik 360 unit dengan label 16 unit; rincian desktop dapat dibuka
alt text: Allied Cash Budget: kebutuhan pinjaman dan surplus. Dana diperlukan saat saldo kumulatif berada di bawah target; gunakan angka bulat tabel sumber.
data: {"panels": [{"title": "Kas setelah target saldo minimum", "xlabel": "Bulan: 7 Juli sampai 12 Desember", "ylabel": "Surplus (+)/pinjaman (-), juta USD", "series": [{"label": "Surplus atau kebutuhan pinjaman", "points": [[7, -21], [8, -58], [9, -100], [10, -56], [11, 58], [12, 102]]}], "xmin": 7, "xmax": 12, "ymin": -120, "ymax": 120, "xticks": [7, 8, 9, 10, 11, 12], "markers": [{"x": 9, "y": -100, "label": "September: pinjaman 100 juta USD"}]}]}
```


Cara membaca: nilai negatif pada kurva Allied adalah kebutuhan pinjaman kumulatif setelah mempertahankan kas 10 juta USD. Angka September adalah minus 100 juta USD, kebutuhan terbesar pada tabel. November dan Desember berada di atas nol dan menunjukkan surplus yang tersedia setelah utang berkurang. Grafik memakai angka pembulatan Table 16.1, bukan arus kas harian. [hal. 571-573; PDF 613-615]

Aging schedule mengelompokkan piutang menurut umur. DSO yang sama dapat menyembunyikan pelanggan yang sangat terlambat bila pelanggan lain membayar lebih awal. Credit policy mencakup periode kredit, diskon, standar pelanggan dan kebijakan penagihan; perubahan salah satu unsur perlu menilai penjualan, kerugian piutang dan dana yang tertahan. [hal. 578-581; PDF 620-623]

<!-- self-check question="Apakah anggaran kas akhir bulan cukup menentukan fasilitas bank?" -->
Belum tentu. Pembayaran intrabulan dapat terjadi sebelum penerimaan pelanggan, sehingga kebutuhan puncak dapat lebih besar. Anggaran bulanan memberi dasar; jadwal arus harian perlu diperiksa untuk menetapkan fasilitas. [hal. 572-573; PDF 614-615]
<!-- self-check:end -->

## Spesifikasi visual revisi

```visual
id: V-TM11-01
jenis: map
judul: Modal Kerja I: Siklus dan Anggaran Kas: peta keputusan
sumber: Disusun dari Brigham & Houston, FFM 16e (2022), Bab 16, hal. cetak 559-581 (PDF 601-623)
isi: ["Kebijakan aset", "Tenor pendanaan", "Cash conversion cycle", "Anggaran kas", "Kas dan piutang"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Modal Kerja I: Siklus dan Anggaran Kas: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```
```visual
id: V-TM11-02
jenis: investment
judul: Current Assets Investment: pilihan saldo aset
sumber: Figure 16.1 [hal. 561; PDF 603]
isi: ["Relaxed: saldo terbesar pada penjualan sama", "Moderate: di antara dua kebijakan", "Restricted: saldo terkecil"]
hubungan: Urutan vertikal mengikuti posisi tiga garis pada grafik; tidak ada estimasi angka saldo
pesan utama: Hubungan saldo aset terhadap penjualan; garis pada buku berupa ilustrasi linear.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Current Assets Investment: pilihan saldo aset. Hubungan saldo aset terhadap penjualan; garis pada buku berupa ilustrasi linear.
```
```visual
id: V-TM11-03
jenis: maturity
judul: Current Assets Financing: kecocokan tenor
sumber: Figure 16.2 [hal. 563; PDF 605]
isi: ["Moderate: dana pendek membiayai fluktuasi aset", "Aggressive: sebagian aset permanen memakai dana pendek", "Conservative: dana panjang melebihi aset permanen; surplus di sekuritas"]
hubungan: Tiga panel kebijakan sejajar; uraian menjaga posisi garis pembiayaan pada masing-masing panel
pesan utama: Garis pendanaan jangka panjang dibanding aset tetap, permanen, dan musiman.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Current Assets Financing: kecocokan tenor. Garis pendanaan jangka panjang dibanding aset tetap, permanen, dan musiman.
```
```visual
id: V-TM11-04
jenis: flow
judul: Cash Conversion Cycle: lini waktu GFI
sumber: Figure 16.3 [hal. 566; PDF 608]
isi: ["Hari 0: terima barang", "Hari 40: bayar pemasok", "Hari 60: barang terjual", "Hari 120: tagih kas pelanggan"]
hubungan: Jalur operasi 0-60-120; pembayaran pada hari 40 mengawali masa pendanaan 40-120
pesan utama: DIO 60 + DSO 60 - DPO 40 = CCC 80 hari.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Cash Conversion Cycle: lini waktu GFI. DIO 60 + DSO 60 - DPO 40 = CCC 80 hari.
```
```visual
id: V-TM11-05
jenis: chart
judul: Allied Cash Budget: kebutuhan pinjaman dan surplus
sumber: Table 16.1 baris 40, hal. 571 (PDF 613), angka bulat juta USD pada buku.
isi: ["Juli minus 21: kebutuhan pinjaman", "September minus 100: kebutuhan terbesar", "Desember 102: surplus untuk investasi"]
hubungan: Sumbu, satuan, legenda dan penanda dibaca bersama asumsi pada teks
pesan utama: Dana diperlukan saat saldo kumulatif berada di bawah target; gunakan angka bulat tabel sumber.
versi HP: grafik 360 unit dengan label 16 unit; rincian desktop dapat dibuka
alt text: Allied Cash Budget: kebutuhan pinjaman dan surplus. Dana diperlukan saat saldo kumulatif berada di bawah target; gunakan angka bulat tabel sumber.
data: {"panels": [{"title": "Kas setelah target saldo minimum", "xlabel": "Bulan: 7 Juli sampai 12 Desember", "ylabel": "Surplus (+)/pinjaman (-), juta USD", "series": [{"label": "Surplus atau kebutuhan pinjaman", "points": [[7, -21], [8, -58], [9, -100], [10, -56], [11, 58], [12, 102]]}], "xmin": 7, "xmax": 12, "ymin": -120, "ymax": 120, "xticks": [7, 8, 9, 10, 11, 12], "markers": [{"x": 9, "y": -100, "label": "September: pinjaman 100 juta USD"}]}]}
```

## Rumus dan catatan tersinkron dengan versi 05

```formula
CCC=DIO+DSO-DPO
DIO hari persediaan, DSO hari penagihan piutang, dan DPO hari pembayaran utang pemasok. CCC adalah siklus konversi kas. Semua periode memakai hari. [hal. 566; PDF 608]
```

```formula
DIO=\frac{Persediaan}{COGS/365}\qquad DSO=\frac{Piutang}{Penjualan\ kredit/365}\qquad DPO=\frac{Utang\ pemasok}{Pembelian\ kredit/365}
[hal. 567-568; PDF 609-610]
```

```formula
Kas_{pra}=Kas_{awal}+Penerimaan-Pembayaran\qquad Pinjaman=\max(0,Kas_{minimum}-Kas_{pra})
Kas pada tanggal pembayaran dan penerimaan aktual. [hal. 570-573; PDF 612-615]
```

```formula
CCC=60+60-40=80\ \text{hari}
Persediaan dan piutang menambah waktu; utang pemasok mengurangi waktu. [hal. 566; PDF 608]
```

```formula
Collections=0.20(300)(0.98)+0.70(250)+0.10(200)=253.8
Satuan juta USD; tidak ada bad debt dalam asumsi dasar tabel. [hal. 571; PDF 613]
```
## Elaborasi 14 Oktober 2026

Sumber 05 diperbarui untuk tujuan spesifik, contoh terbimbing dekat rumus, dan alur penalaran. Angka ilustrasi baru diberi label penulis; tabel, rumus, gambar dan dua kasus sumber dipertahankan. TM09 mengurutkan teori sebelum kerangka kasus. SHA256 05: c27aea45140182aa5e4bf74fbb49350d4cf0d1ddaff3da7734d8b187843ddccc. Validasi terakhir dicatat di docs/pra-uas-elaboration-progress.md.
