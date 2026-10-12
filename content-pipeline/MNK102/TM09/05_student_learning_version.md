# TM09: Struktur Modal dan Leverage

Brigham & Houston, FFM 16e (2022), Bab 14, hal. cetak 478-520 (PDF 520-562). Halaman cetak buku memiliki selisih 42 dari halaman PDF.

**Setelah TM ini kamu bisa:**
1. Memilih konsep dan asumsi yang sesuai kasus.
2. Menunjukkan langkah hitungan, satuan, pembulatan, dan keputusan.
3. Menjelaskan batas model serta rujukannya.

## Kilat


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
- Bobot pasar membandingkan nilai utang dan ekuitas hari ini.
- Biaya tetap operasi membuat EBIT lebih peka terhadap penjualan.
- Bunga menambah risiko yang ditanggung pemilik saham.
- Hamada menghubungkan D/E dengan beta ekuitas pada asumsi model.
- WACC terendah dan harga tertinggi menentukan struktur optimal, dengan arus kas sepadan.
- EPS maksimum dapat terjadi pada utang yang lebih tinggi daripada struktur optimal.

Brigham & Houston, FFM 16e (2022), Bab 14, hal. cetak 478-520 (PDF 520-562)

> **Kalau cuma sempat ingat satu hal:** arus kas, tingkat, satuan, dan periode harus konsisten sebelum kamu mengambil keputusan.

> **Catatan sumber:** Edisi 15 pada kontrak belum tersedia; pemetaan topik memakai 16e. DOL merupakan rumus turunan EBIT dalam latihan, bukan definisi bernomor pada bab. Arsip ujian tidak tersedia.

## Inti

Baca konsep, kerjakan cek pemahaman, lalu periksa contoh sumber. Pendalaman menyimpan rincian tambahan.

## 0. Baca bobot buku, pasar, dan target

Kamu melihat utang buku dan harga saham hari ini. Bobot mana yang dipakai dalam WACC?

Bobot buku berasal dari laporan akuntansi. Bobot pasar memakai nilai pasar klaim utang dan ekuitas. Target adalah bauran yang ingin dipertahankan perusahaan. Perbedaan harga saham dapat mengubah bobot pasar walaupun saldo utang tetap. [hal. 480; PDF 522]

| Bobot | Dasar | Cara membaca |
| --- | --- | --- |
| Buku | Nilai tercatat | Menjelaskan laporan historis |
| Pasar | Harga klaim sekarang | Digunakan dalam analisis biaya modal |
| Target | Kebijakan bauran modal | Menjadi sasaran pendanaan baru |

[hal. 482; PDF 524]

<!-- self-check question="Mengapa bobot pasar dapat berubah tanpa pinjaman baru?" -->
Harga saham mengubah nilai pasar ekuitas dan penyebut total modal. [hal. 482; PDF 524]
<!-- self-check:end -->

## 1. Pisahkan risiko operasi dari risiko pendanaan

Apa beda risiko bisnis dan risiko keuangan?

Capital structure adalah bauran utang dan ekuitas yang mendanai perusahaan. Risiko bisnis berasal dari ketidakpastian penjualan, harga input, teknologi, persaingan, dan biaya tetap operasi. Risiko itu tetap ada pada perusahaan tanpa utang. [hal. 483-494; PDF 525-536]

Financial risk adalah tambahan risiko bagi pemegang saham karena bunga dan pembayaran utang harus dipenuhi sebelum sisa kas tersedia bagi ekuitas. Dua perusahaan dengan operasi sama dapat mempunyai risiko bisnis sama dan risiko ekuitas berbeda. [hal. 483-494; PDF 525-536]

Operating leverage, pengungkit operasi, membuat EBIT atau laba sebelum bunga dan pajak peka terhadap penjualan. Rumus DOL menggunakan margin kontribusi dibagi EBIT pada tingkat penjualan tertentu. Jika EBIT mendekati nol, DOL dapat sangat besar; jika EBIT nol, rasionya tidak terdefinisi. [hal. 484-493; PDF 526-535]

Perubahan DOL tidak boleh ditafsirkan sebagai probabilitas bangkrut. Financial leverage, pengungkit keuangan, menambahkan kepekaan laba bersih melalui bunga. ROIC memakai laba operasi setelah pajak dan modal operasi, sedangkan ROE memakai laba bersih dan ekuitas. [hal. 484-493; PDF 526-535]


```formula
\operatorname{DOL}=\frac{S-VC}{EBIT}\qquad ROIC=\frac{EBIT(1-T)}{IC}\qquad ROE=\frac{(EBIT-I)(1-T)}{E}
S pendapatan penjualan; VC biaya variabel; EBIT laba operasi sebelum bunga dan pajak; IC modal investasi; I bunga; E ekuitas. T adalah pajak pada asumsi kasus. DOL diturunkan dari perubahan EBIT dengan harga dan biaya variabel tetap. [hal. 487; PDF 529] [hal. 491; PDF 533]
```

<!-- self-check question="Apa beda risiko bisnis dan risiko keuangan?" -->
Risiko bisnis berasal dari operasi dan sudah ada tanpa utang. Risiko keuangan adalah tambahan risiko ekuitas akibat kewajiban pendanaan, terutama bunga. [hal. 483-494; PDF 525-536]
<!-- self-check:end -->

## 2. Cari nilai maksimum, lalu periksa EPS

Mengapa EPS maksimum dapat berbeda dari struktur optimal?

Struktur optimal mendukung nilai perusahaan atau harga saham maksimum. Dengan arus kas operasi tetap, bauran itu juga menghasilkan WACC minimum. EPS, laba per saham, dapat meningkat ketika utang dipakai membeli kembali saham, tetapi bunga dan risiko ekuitas naik. [hal. 494-498; PDF 536-540]

Jangan memilih utang tertinggi hanya karena EPS tertinggi. Tabel alternatif perlu menyajikan bobot pasar, bunga utang, biaya ekuitas, WACC, kapasitas pembayaran dan nilai. [hal. 494-498; PDF 536-540]


```formula
\beta_L=\beta_U\left[1+(1-T)\frac{D}{E}\right]\qquad r_s=r_{RF}+\beta_L RP_M
Beta L adalah beta ekuitas dengan utang; beta U adalah beta tanpa utang. D/E membagi nilai pasar utang dengan ekuitas; rRF tingkat bebas risiko dan RPM premi risiko pasar. [hal. 495; PDF 537] [hal. 496; PDF 538]
```


```formula
WACC=w_Dr_D(1-T)+w_Er_E\qquad w_D+w_E=1
WACC adalah rata-rata tertimbang biaya modal. wD/wE adalah bobot pasar utang/ekuitas; rD/rE biaya utang/ekuitas; T pajak asumsi model. Tingkat bunga harus memakai basis waktu sama. [hal. 495; PDF 537] [hal. 496; PDF 538]
```


| Kesalahan | Perbaikan |
| --- | --- |
| Memasukkan bobot utang 40% langsung ke Hamada | Ubah menjadi D/E = 40/60 = 0,6667. |
| Mengalikan seluruh WACC dengan (1-T) | Pajak model diterapkan pada bunga utang, bukan biaya ekuitas. |
| Menganggap EPS naik berarti harga pasti naik | Nilai juga mencerminkan risiko dan kas masa depan. |
| Menganggap ROIC berubah hanya karena buyback | Pisahkan operasi dari perubahan pendanaan. |

[hal. cetak 480-498, PDF 522-540.]

<!-- self-check question="Mengapa EPS maksimum dapat berbeda dari struktur optimal?" -->
Struktur optimal mendukung nilai perusahaan atau harga saham maksimum. Dengan arus kas operasi tetap, bauran itu juga menghasilkan WACC minimum. [hal. cetak 494-498; PDF 536-540]
<!-- self-check:end -->

## 3. MM, biaya distress, informasi dan fleksibilitas

Kapan manfaat perisai pajak tidak cukup membenarkan utang tambahan?

MM tanpa pajak memakai pasar ideal: cara membagi klaim pendanaan tidak mengubah nilai operasi. Dalam model sederhana dengan pajak perusahaan dan utang permanen, nilai sekarang perisai bunga dapat ditulis TD. Hasil ini memerlukan bunga yang dapat mengurangi pajak dan manfaat yang benar-benar dapat digunakan. [hal. 500-505; PDF 542-547]

Trade-off memasukkan biaya kesulitan keuangan: biaya legal, gangguan pemasok, hilangnya pelanggan dan keputusan investasi yang terganggu. Kesimpulan model pajak sederhana tidak menjadi anjuran utang 100% pada perusahaan nyata. [hal. 500-505; PDF 542-547]

Signaling menjelaskan bagaimana emisi saham atau pilihan utang dapat ditafsirkan pasar ketika informasi manajemen dan investor berbeda. Pecking order adalah kecenderungan memakai dana internal, lalu utang, lalu ekuitas baru ketika informasi dan biaya emisi berperan. Fleksibilitas mempertahankan kemampuan memperoleh dana saat peluang atau guncangan muncul. [hal. 503-510; PDF 545-552]

Target struktur modal perlu mempertimbangkan stabilitas kas, jaminan, kendali, keadaan pasar, serta kemampuan membayar pada skenario buruk. [hal. 503-510; PDF 545-552]


```formula
V_L=V_U+TD
[hal. 501; PDF 543]
```

<!-- self-check question="Kapan manfaat perisai pajak tidak cukup membenarkan utang tambahan?" -->
Ketika tambahan biaya kesulitan keuangan melebihi tambahan manfaat pajak. Pada D2 keduanya sama secara marginal; melewati D2 nilai turun dalam grafik trade-off. [hal. 502-503; PDF 544-545]
<!-- self-check:end -->

## 4. Kerangka pengerjaan kasus

Data apa yang harus ditetapkan sebelum menghitung?

- Susun EBIT dan NOPAT dengan unit mata uang yang konsisten.
- Hitung saham dibeli, saham tersisa, bunga, laba bersih dan EPS.
- Ubah rasio total modal menjadi D/E sebelum menghitung beta.
- Bandingkan WACC serta nilai pada arus kas yang dinyatakan.
- Uji penurunan EBIT, kenaikan bunga dan keterbatasan manfaat pajak. Semua tarif adalah asumsi kasus.


<!-- self-check question="Data apa yang harus ditetapkan sebelum menghitung?" -->
Ikuti urutan data, satuan, rumus, dan interpretasi pada sumber. [hal. 487; PDF 529] [hal. 491; PDF 533] [hal. 487; PDF 529] [hal. 491; PDF 533]
<!-- self-check:end -->


## 3a. Baca MM dengan asumsi yang terpisah

Mengapa utang yang lebih murah belum tentu menurunkan WACC?

MM 1958 mempertahankan kegiatan operasi yang sama saat utang diganti dengan ekuitas. Buku menyebut enam asumsi: tanpa biaya broker, tanpa pajak, tanpa biaya kebangkrutan, investor dapat meminjam dengan bunga yang sama dengan perusahaan, informasi investor sama dengan manajemen, dan EBIT tidak berubah akibat utang. Hilangnya salah satu asumsi dapat mengubah hasil. [hal. 500; PDF 542]

Pada model tanpa pajak, nilai total perusahaan tetap. Pemilik ekuitas menanggung risiko lebih tinggi saat utang bertambah. Kenaikan biaya ekuitas mengimbangi bobot dana utang yang lebih murah, sehingga WACC tetap. Penjelasan biaya modal ini merupakan pelengkap universitas untuk teori MM pada buku. [hal. 500; PDF 542; Damodaran, Capital Structure, bagian The Miller-Modigliani Theorem; MIT 15.415, ringkasan rumus, PDF 4]

```formula
V_L=V_U\qquad WACC=r_U\qquad r_E=r_U+(r_U-r_D)\frac{D}{E}
Model MM tanpa pajak, utang berbiaya tetap dan operasi tetap. rU biaya modal tanpa utang, rD biaya utang dan rE biaya ekuitas, semuanya per tahun. D/E memakai nilai pasar, bukan D/(D+E). Rumus biaya ekuitas diturunkan dengan menyusun ulang WACC = rU. [hal. 500; PDF 542; MIT 15.415, PDF 4; Damodaran, Capital Structure, bagian The Miller-Modigliani Theorem]
```

MM 1963 memasukkan pajak perusahaan. Bunga dapat mengurangi laba kena pajak, sedangkan dividen tidak. Dalam penyederhanaan utang permanen, pajak konstan dan seluruh penghematan dapat dipakai, nilai sekarang perisai pajak adalah T dikali D. Biaya kebangkrutan tetap dikesampingkan. Hasil model mendorong utang sangat tinggi; hasil itu tidak menjadi rekomendasi pendanaan perusahaan nyata. [hal. 501-503; PDF 543-545]

| Model | Nilai perusahaan | Biaya modal | Batas |
| --- | --- | --- | --- |
| MM tanpa pajak | VL = VU | rE naik; WACC tetap | Operasi, informasi dan pasar ideal tetap |
| MM dengan pajak perusahaan | VL = VU + TD | Perisai bunga menekan WACC pada penyederhanaan model | Utang permanen, manfaat pajak terpakai, tanpa biaya distress |
| Trade-off | Manfaat pajak dikurangi biaya distress | Ada titik terbaik dalam hubungan skematis | D1/D2 bergantung pada risiko dan biaya kesulitan |
| Miller dengan pajak pribadi | Manfaat pajak perusahaan dapat terimbangi pajak pemegang klaim | Jangan memakai hasil MM pajak perusahaan secara langsung | Perlakuan pajak saham dan bunga berbeda menurut konteks sumber |

[hal. 500-503; PDF 542-545]

Ilustrasi buatan berikut menggunakan rU = 12% per tahun dan rD = 6% per tahun. Tidak ada biaya gagal bayar pada rentang D/E = 0 sampai 2. Panel nilai tanpa pajak memakai indeks VU = 100. Kurva berasal dari rumus model, dengan parameter ilustrasi; buku tidak menyediakan angka-angka kurva ini. [hal. 500; PDF 542; Damodaran, Capital Structure, bagian The Miller-Modigliani Theorem]


```visual
id: V-TM09-11
jenis: chart
judul: MM tanpa pajak: biaya klaim dan nilai operasi
sumber: Disusun dari hal. 500 (PDF 542); pelengkap Damodaran, The Miller-Modigliani Theorem dan MIT 15.415 PDF 4. Parameter ilustrasi buatan, bukan data buku.
isi: ["D/E 0: biaya ekuitas 12% per tahun", "D/E 1: biaya ekuitas 18%; WACC 12%", "Nilai operasi tetap pada asumsi MM tanpa pajak"]
hubungan: Sumbu, satuan, legenda dan penanda dibaca bersama asumsi pada teks
pesan utama: Kenaikan biaya ekuitas mengimbangi dana utang; WACC dan nilai tetap pada model ini.
versi HP: grafik 360 unit dengan label 16 unit; rincian desktop dapat dibuka
alt text: MM tanpa pajak: biaya klaim dan nilai operasi. Kenaikan biaya ekuitas mengimbangi dana utang; WACC dan nilai tetap pada model ini.
data: {"panels": [{"title": "Biaya modal: MM tanpa pajak", "xlabel": "D/E nilai pasar (kali)", "ylabel": "Biaya (% per tahun)", "series": [{"label": "Biaya ekuitas rE", "points": [[0, 12], [0.5, 15.0], [1, 18], [1.5, 21.0], [2, 24]]}, {"label": "WACC = rU", "points": [[0, 12], [2, 12]]}, {"label": "Biaya utang rD", "points": [[0, 6], [2, 6]]}], "xmin": 0, "xmax": 2, "ymin": 0, "ymax": 26, "xticks": [0, 0.5, 1, 1.5, 2], "markers": [{"x": 1, "y": 18, "label": "D/E 1: rE 18%; WACC 12%"}]}, {"title": "Nilai perusahaan: MM tanpa pajak", "xlabel": "D/E nilai pasar (kali)", "ylabel": "Indeks nilai (VU = 100)", "series": [{"label": "VL = VU", "points": [[0, 100], [2, 100]]}], "xmin": 0, "xmax": 2, "ymin": 0, "ymax": 125, "xticks": [0, 0.5, 1, 1.5, 2]}]}
```


Cara membaca: pada D/E = 1, utang sama besar dengan ekuitas. Biaya ekuitas menjadi 18%, bobot masing-masing 50%, dan WACC = 0,5(6%) + 0,5(18%) = 12%. Kurva rE yang naik tidak berarti nilai operasi ikut naik. Jangan memakai kurva WACC datar ini untuk Bigbee yang memiliki pajak dan bunga utang berubah. [hal. 495 dan 500; PDF 537 dan 542; turunan ilustrasi dari rumus di atas]

Panel trade-off pada Figure 14.8 menunjukkan nilai saham, bukan nilai total perusahaan VL. Garis MM dengan pajak berada di atas garis dasar; jarak vertikal ke kurva trade-off menggambarkan biaya distress. Sebelum D1 biaya tersebut belum material. D2 berada tepat pada puncak kurva: manfaat pajak marginal sama dengan biaya distress marginal. Grafik ini skematis dan tidak menetapkan persentase utang D1/D2. [hal. 502-503; PDF 544-545]

<!-- self-check question="Mengapa rE naik tetapi WACC tetap pada MM tanpa pajak?" -->
Utang membuat ekuitas lebih berisiko. Pada ilustrasi D/E = 1, rE 18% dan rD 6%, sehingga rata-rata berbobot tetap 12%. Kesimpulan memerlukan asumsi MM tanpa pajak dan operasi tetap. [hal. 500; PDF 542; Damodaran, Capital Structure, bagian The Miller-Modigliani Theorem]
<!-- self-check:end -->

## 3b. Teori pendanaan untuk keputusan nyata

Utang dapat mendisiplinkan manajer karena kas perlu disisihkan untuk pembayaran wajib. Disiplin ini dapat mengurangi pengeluaran yang tidak menambah nilai, tetapi tekanan utang juga dapat menghambat proyek yang layak. Pecking order mendahulukan dana internal, lalu utang, lalu saham baru. Windows of opportunity berarti manajer mempertimbangkan penilaian pasar saat memilih penerbitan klaim. Ketiganya memberi penjelasan berbeda dari trade-off pajak dan distress. [hal. 504-506; PDF 546-548]

| Faktor daftar keputusan buku | Implikasi yang diperiksa |
| --- | --- |
| Stabilitas penjualan | Kas yang lebih stabil memudahkan pemenuhan bunga |
| Struktur aset | Aset yang layak dijaminkan membantu akses utang |
| Operating leverage | Beban tetap operasi tinggi menambah risiko sebelum bunga |
| Pertumbuhan | Kebutuhan dana dan biaya penerbitan meningkat |
| Profitabilitas | Dana internal dapat mengurangi kebutuhan utang |
| Pajak | Nilai manfaat bunga bergantung pada kemampuan memakai pengurangan |
| Kendali | Saham baru dapat mengubah hak pemilik |
| Sikap manajemen | Toleransi risiko memengaruhi pilihan bauran |
| Pemberi pinjaman dan pemeringkat | Penilaian eksternal memengaruhi akses dan harga dana |
| Kondisi pasar | Dana tertentu dapat sulit tersedia pada saat dibutuhkan |
| Kondisi internal | Informasi prospek dapat berbeda dari penilaian pasar |
| Fleksibilitas keuangan | Sisakan kemampuan mendanai peluang dan kejutan |

[hal. 506-508; PDF 548-550]

Perbandingan industri memakai definisi rasio yang sama. Net debt, utang dikurangi kas, berbeda dari total utang. TIE, times interest earned, membandingkan EBIT dengan bunga dan tidak memasukkan seluruh pembayaran pokok. Data industri pada Table 14.5 adalah konteks historis sumber. [hal. 509-510; PDF 551-552]

<!-- self-check question="Mengapa perusahaan yang untung besar masih dapat memilih utang rendah?" -->
Laba menyediakan dana internal; perusahaan juga dapat menjaga fleksibilitas untuk proyek mendatang. Pecking order dan kebutuhan dana membantu menjelaskan pilihan ini. Data industri tidak menetapkan satu target utang untuk semua perusahaan. [hal. 505-510; PDF 547-552]
<!-- self-check:end -->

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

## 3c. MM dengan pajak perusahaan: manfaat bunga

Dalam ilustrasi pajak perusahaan, T = 25%, rU = 12% dan rD = 6% setahun. Setiap titik membandingkan perusahaan dengan operasi tetap dan utang permanen tersendiri. Tidak ada pajak pribadi, biaya distress, biaya transaksi atau perubahan risiko utang. Seluruh perisai bunga dapat dipakai. Parameter buatan ini berbeda dari estimasi Bigbee. [hal. 501-503; PDF 543-545; turunan WACC dan VL = VU + TD]

```formula
r_E=r_U+(1-T)(r_U-r_D)\frac{D}{E}\qquad WACC=r_U\left(1-T\frac{D}{D+E}\right)
Hubungan biaya ekuitas dan WACC pada penyederhanaan utang tetap dan penghematan bunga terpakai. Diturunkan dengan menyamakan kas operasi tetap pada VL = VU + TD dan pembobotan biaya modal. [hal. 495 dan 501; PDF 537 dan 543]
```


```visual
id: V-TM09-12
jenis: chart
judul: MM dengan pajak perusahaan: biaya modal dan nilai
sumber: Disusun dari hal. 495 dan 501 (PDF 537 dan 543). Parameter ilustrasi buatan T 25%, rU 12%, rD 6%, VU 100.
isi: ["D/E 1: biaya ekuitas 16,5% per tahun", "D/E 1: WACC 10,5% per tahun", "VL lebih tinggi dari VU melalui perisai bunga"]
hubungan: Sumbu, satuan, legenda dan penanda dibaca bersama asumsi pada teks
pesan utama: Kurva pajak perusahaan berbeda dari MM tanpa pajak dan belum memuat biaya distress.
versi HP: grafik 360 unit dengan label 16 unit; rincian desktop dapat dibuka
alt text: MM dengan pajak perusahaan: biaya modal dan nilai. Kurva pajak perusahaan berbeda dari MM tanpa pajak dan belum memuat biaya distress.
data: {"panels": [{"title": "Biaya modal: pajak perusahaan 25%", "xlabel": "D/E nilai pasar (kali)", "ylabel": "Biaya (% per tahun)", "series": [{"label": "Biaya ekuitas rE", "points": [[0, 12.0], [0.5, 14.25], [1, 16.5], [1.5, 18.75], [2, 21.0]]}, {"label": "WACC", "points": [[0, 12.0], [0.5, 11.0], [1, 10.5], [1.5, 10.2], [2, 10.0]]}, {"label": "Utang setelah pajak", "points": [[0, 4.5], [2, 4.5]]}], "xmin": 0, "xmax": 2, "ymin": 0, "ymax": 24, "xticks": [0, 0.5, 1, 1.5, 2], "markers": [{"x": 1, "y": 10.5, "label": "D/E 1: WACC 10,5%"}]}, {"title": "Nilai operasi plus perisai bunga", "xlabel": "D/E nilai pasar (kali)", "ylabel": "Indeks nilai (VU = 100)", "series": [{"label": "VL dengan pajak perusahaan", "points": [[0, 100.0], [0.5, 109.0909090909091], [1, 114.28571428571429], [1.5, 117.6470588235294], [2, 120.0]]}, {"label": "VU tanpa utang", "points": [[0, 100], [2, 100]]}], "xmin": 0, "xmax": 2, "ymin": 0, "ymax": 130, "xticks": [0, 0.5, 1, 1.5, 2]}]}
```

Cara membaca: pada D/E = 1, VL = 114,2857 dan D = 57,1429 dalam satuan indeks. Perisai pajak 0,25D = 14,2857 menjembatani VU 100 dengan VL. D/E berbeda dari utang/modal, sehingga jangan membaca x = 1 sebagai utang 100% dari total modal. Kenaikan nilai ini berasal dari manfaat pajak yang diasumsikan, bukan perubahan EBIT. [hal. 500-503; PDF 542-545; turunan ilustrasi]

## 3d. Grafik sumber untuk risiko dan struktur optimal

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
data: {"panels":[{"title":"Plan A","xlabel":"Penjualan (ribu unit)","ylabel":"Pendapatan/biaya (ribu USD)","series":[{"label":"Penjualan","points":[[0,0],[120,240]]},{"label":"Biaya total","points":[[0,25],[120,205]]},{"label":"Biaya tetap","points":[[0,25],[120,25]]}],"xmin":0,"xmax":120,"ymin":0,"ymax":250,"markers":[{"x": 50, "y": 100, "label": "Impas A: 50 ribu unit"}],"xticks":[0,120]},{"title":"Plan B","xlabel":"Penjualan (ribu unit)","ylabel":"Pendapatan/biaya (ribu USD)","series":[{"label":"Penjualan","points":[[0,0],[120,240]]},{"label":"Biaya total","points":[[0,70],[120,190]]},{"label":"Biaya tetap","points":[[0,70],[120,70]]}],"xmin":0,"xmax":120,"ymin":0,"ymax":250,"markers":[{"x": 70, "y": 140, "label": "Impas B: 70 ribu unit"}],"xticks":[0,120]}]}
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
data: {"panels":[{"title":"ROIC pada lima skenario permintaan","discrete":true,"xlabel":"ROIC (%)","ylabel":"Probabilitas","series":[{"label":"Plan A","points":[[-9.38,0.05],[-1.88,0.2],[9.38,0.5],[20.63,0.2],[28.13,0.05]]},{"label":"Plan B","points":[[-26.25,0.05],[-11.25,0.2],[11.25,0.5],[33.75,0.2],[48.75,0.05]]}],"xmin":-30,"xmax":50,"ymin":0,"ymax":0.55,"xticks":[-30,50]}]}
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
data: {"panels":[{"title":"Probabilitas ROE pada skenario yang sama","discrete":true,"xlabel":"ROE (%)","ylabel":"Probabilitas","series":[{"label":"Tanpa utang","points":[[-26.25,0.05],[-11.25,0.2],[11.25,0.5],[33.75,0.2],[48.75,0.05]]},{"label":"Utang 50%","points":[[-57.9,0.05],[-27.9,0.2],[17.1,0.5],[62.1,0.2],[92.1,0.05]]}],"xmin":-60,"xmax":100,"ymin":0,"ymax":0.55,"xticks":[-60,100]}]}
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

Cara membaca Figure 14.2: pendapatan dan biaya berpotongan pada EBIT nol. Plan A impas pada 50 ribu unit; Plan B pada 70 ribu unit. Setelah titik itu, jarak pendapatan di atas biaya adalah EBIT positif. [hal. 487; PDF 529]

Pada distribusi ROIC/ROE, batang menunjukkan probabilitas setiap skenario permintaan dari tabel. Tinggi batang tidak berarti density dari kurva kontinu. Leverage dapat memperlebar sebaran hasil tanpa menghilangkan risiko operasi. [hal. 487-492; PDF 529-534]

Figure 14.7 menunjukkan EPS tertinggi pada utang 50%, sementara WACC terendah 10,86% dan harga tertinggi 20,81 USD berada pada utang 30%. Tabel menggunakan payout seluruh laba, g nol dan estimasi biaya modal. Titik tertinggi EPS tidak dapat menggantikan penilaian harga dan risiko. [hal. 495-499; PDF 537-541]

<!-- pendalaman:start judul="Pendalaman: model dan bukti sumber" -->
### Pendalaman: model dan bukti sumber



















<!-- pendalaman:end -->

## Kasus latihan

Contoh berikut memakai angka atau bukti pada sumber. USD ditulis sebagai nama mata uang agar tidak tertukar dengan delimiter rumus.

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

## Persiapan Ujian

Prioritas ini adalah perkiraan dari kontrak dan contoh sumber. Arsip ujian belum tersedia.


| Jebakan | Pemeriksaan jawaban |
| --- | --- |
| Apa beda risiko bisnis dan risiko keuangan? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |
| Mengapa EPS maksimum dapat berbeda dari struktur optimal? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |
| Kapan manfaat perisai pajak tidak cukup membenarkan utang tambahan? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |
| Data apa yang harus ditetapkan sebelum menghitung? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |

Brigham & Houston, FFM 16e (2022), Bab 14, hal. cetak 478-520 (PDF 520-562)

Latihan pra-UAS terpisah memuat 12 kuis, 6 flashcard, dan 2 kasus bank soal pada TM ini. Angka pengembangan latihan adalah asumsi buatan yang dinyatakan, bukan angka buku atau kondisi pasar sekarang.
