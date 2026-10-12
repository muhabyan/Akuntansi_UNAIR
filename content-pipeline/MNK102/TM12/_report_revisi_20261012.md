# Revisi MNK102 TM12

Rujukan langsung dan perbaikan ada pada 04/05/06. SHA256 05: 737dda1913a632ed12210a74fa94dc1a283fdaf3f9ce6ffa2f7f9af8b4dc435a.

## 4a. Bandingkan biaya fasilitas dan cicilan

Line of credit informal pada contoh buku tidak mengikat bank. Revolving credit agreement memberi komitmen formal dan mengenakan commitment fee, biaya atas bagian fasilitas yang belum dipakai. Contoh fasilitas 100 juta USD dengan biaya 0,25% setahun menghasilkan 250.000 USD saat tidak dipakai. Jika 50 juta USD digunakan sejak awal tahun, biaya atas saldo yang tidak dipakai menjadi 125.000 USD, di luar bunga atas pinjaman. Semua angka ini konteks buku, bukan penawaran bank kini. [hal. 585-586; PDF 627-628]

```formula
Biaya_{komitmen}=Tarif\,(Batas\ fasilitas-Pinjaman\ terpakai)
Nilai uang dan periode tarif harus konsisten. Saldo fasilitas yang berubah perlu dihitung sesuai waktu kontrak. [hal. 586; PDF 628]
```

Add-on interest pada contoh sumber: pinjaman 10.000 USD, bunga nominal 3% dan 12 cicilan bulanan. Bunga 300 USD ditambahkan ke pokok, sehingga cicilan 10.300/12 = 858,33 USD. Pokok terus berkurang, sementara bunga tetap dihitung dari pokok awal. Aproksimasi biaya tahunan 300/(10.000/2) = 6%. [hal. 587; PDF 629]

```formula
10{,}000=\sum_{t=1}^{12}\frac{10{,}300/12}{(1+r_m)^t}\qquad APR=12r_m\qquad EAR=(1+r_m)^{12}-1
Dengan cicilan pada akhir tiap bulan dan tanpa biaya tambahan, rm sekitar 0,457646% per bulan; APR 5,49% dan EAR 5,63%. Angka 6% adalah aproksimasi, bukan hasil tingkat internal eksak. [hal. 587, catatan kaki 26; PDF 629]
```

Commercial paper memberi akses pasar kepada peminjam bereputasi baik, tetapi pembaruan pasar tetap berisiko. Accruals muncul secara spontan dari operasi dan jadwal kewajiban. Jaminan dapat membantu akses kredit; itu tidak menghilangkan biaya atau hak pemberi pinjaman menurut kontrak. [hal. 588-589; PDF 630-631]

<!-- self-check question="Mengapa bunga add-on 3% berbeda dari APR 5,49%?" -->
Bunga 300 USD dihitung dari pokok awal 10.000 USD, padahal pokok dilunasi lewat cicilan. Tingkat bulanan diperoleh dari nilai sekarang 12 cicilan, lalu dikali 12 untuk APR. EAR menambahkan penggandaan bulanan. [hal. 587 dan catatan kaki 26; PDF 629]
<!-- self-check:end -->


Temuan lintas grafik: legenda diberi sampel garis, grafik numerik mendapat versi ponsel, skenario diskret memakai batang probabilitas, dan batas model dijelaskan. Jumlah latihan dipertahankan.
