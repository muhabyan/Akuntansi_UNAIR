# Spesifikasi kanonik MNK102 TM14

Status: READY_WITH_SCOPE_LIMITATION

SHA256 05 (CRLF): 4d35100c65a028ffe93c7a68149bfbdc1b8bef619e01dd6e7ed48da566618f5c

Brigham & Houston, FFM 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809)

## Batas sumber

Bab 21 memakai equity residual method pada kasus Apex. Alternatif FCF/WACC dijelaskan sebagai model berbeda; sinergi dalam proyeksi Apex tidak dihitung ulang.

## Unit dan cakupan


| Unit | Bagian 05 | Rujukan | Isi terverifikasi |
| --- | --- | --- | --- |
| U14-01 | 1. Alasan penggabungan dan bentuk transaksi | [hal. 742-744; PDF784-786] [hal. 742-744; PDF784-786] | Merger adalah penggabungan perusahaan; acquisition adalah pengambilalihan kepemilikan atau aset. Sinergi berarti nilai b |
| U14-02 | 1. Alasan penggabungan dan bentuk transaksi | [hal. 746-757; PDF788-799] [hal. 746-757; PDF788-799] | Friendly takeover disetujui manajemen target; hostile takeover ditentang manajemen target dan dapat melibatkan penawaran |
| U14-03 | 2. Bedakan nilai operasi dan nilai ekuitas | [hal. 748-752; PDF790-794] [hal. 748-752; PDF790-794] | Pilih arus kas yang jelas. FCF operasi tersedia untuk seluruh penyedia modal dan didiskonto dengan WACC. FCFE, kas kepad |
| U14-04 | 2. Bedakan nilai operasi dan nilai ekuitas | [hal. 751-753; PDF793-795] | Valuasi multiple memakai perusahaan pembanding dan ukuran yang cocok: multiple harga/earnings untuk ekuitas, atau nilai  |
| U14-05 | 3. Batas tawaran dan siapa memperoleh sinergi | [hal. 750; PDF 792] [hal. 752; PDF 794] | Pembayaran dengan saham menukar kepemilikan pemegang saham lama. Harga tawaran menentukan pembagian manfaat sinergi anta |
| U14-06 | 4. Alternatif dan pemeriksaan pelaksanaan | [hal. 757-763; PDF799-805] | Corporate alliance dapat bekerja sama tanpa merger penuh; private equity melibatkan pemilik dengan strategi investasi da |


## Rumus dan contoh


```formula
V_E=\sum_{t=1}^{n}\frac{CF_{E,t}}{(1+r_s)^t}+\frac{TV_n}{(1+r_s)^n}
CF E adalah kas kepada ekuitas, rs biaya ekuitas target, g pertumbuhan jangka panjang. Terminal value, nilai kelanjutan, berada di akhir proyeksi dan masuk satu kali. [hal. 749; PDF 791] [hal. 751; PDF 793]
```

```formula
TV_n=\frac{CF_{E,n+1}}{r_s-g}\qquad r_s>g
CF E adalah kas kepada ekuitas, rs biaya ekuitas target, g pertumbuhan jangka panjang. Terminal value, nilai kelanjutan, berada di akhir proyeksi dan masuk satu kali. [hal. 749; PDF 791] [hal. 751; PDF 793]
```

```formula
NPV_A=Synergy-Premium-Cost_{integrasi}\qquad Bid_{max}=V_B+Synergy-Cost_{integrasi}
CF E adalah kas kepada ekuitas, rs biaya ekuitas target, g pertumbuhan jangka panjang. Terminal value, nilai kelanjutan, berada di akhir proyeksi dan masuk satu kali. [hal. 749; PDF 791] [hal. 751; PDF 793]
```

**Kasus 1: Nilai ekuitas Apex** Table 21.2: kas kepada Hightech tahun 1 sampai 5 sebesar 6,4; 8,8; 9,8; 10,2; 139,0 juta USD. Angka terakhir sudah memuat continuing value 127,8. Diskonto ekuitas 14,2%. [hal. 749; PDF 791] [hal. 751; PDF 793]

*Pembahasan:*


```formula
V_E=\frac{6.4}{1.142}+\frac{8.8}{1.142^2}+\frac{9.8}{1.142^3}+\frac{10.2}{1.142^4}+\frac{139.0}{1.142^5}=96.501539
Hasil dibulatkan 96,5 juta USD, sesuai buku. Kas setelah bunga memakai biaya ekuitas. [hal. 751; PDF 793]
```
Table 21.2 menghitung continuing value dari (23,2 - 12,0) × 1,05 / (0,142 - 0,05) = 127,826087, lalu membulatkannya menjadi 127,8. Kas 139,0 sudah termasuk terminal, sehingga terminal tidak ditambahkan lagi. [hal. 749; PDF 791]


**Kasus 2: Pembagian sinergi Apex** Apex memiliki 10 juta saham pada harga 6,25 USD, nilai bagi Hightech 96,5 juta USD. Buku memberi contoh tawaran 86,5 juta USD. Siapa memperoleh manfaat? [hal. 752; PDF 794]

*Pembahasan:*


```formula
V_{standalone}=10(6.25)=62.5\qquad Synergy=96.5-62.5=34
Satuan juta USD; standalone berarti nilai perusahaan ketika beroperasi sendiri. [hal. 752; PDF 794]
```

```formula
Gain_A=96.5-86.5=10\qquad Gain_B=86.5-62.5=24
Manfaat 10 + 24 = 34 juta USD. [hal. 752; PDF 794]
```
Tawaran maksimum 96,5 memberi manfaat nol pada pengakuisisi dalam model ini. Sinergi sudah dimuat dalam proyeksi kas Apex, sehingga tidak ditambahkan sekali lagi. Due diligence memeriksa kewajaran proyeksi sebelum tawaran ditetapkan. [hal. 750; PDF 792]

## Spesifikasi diagram

```visual
id: V-TM14-01
jenis: map
judul: Merger dan Akuisisi: peta keputusan
sumber: Disusun dari Brigham & Houston, FFM 16e (2022), Bab 21, hal. cetak 741-767 (PDF 783-809)
isi: ["Alasan dan bentuk merger", "Kas target", "Diskonto konsisten", "Harga tawaran", "Alternatif transaksi"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Merger dan Akuisisi: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```

```visual
id: V-TM14-02
jenis: flow
judul: Equity Residual Method: kas target kepada pemilik
sumber: [hal. 749; PDF 791]
isi: ["EBIT dikurangi bunga dan pajak", "Tambahkan kembali depresiasi", "Kurangi retensi untuk penggantian dan pertumbuhan", "Tambahkan continuing value hanya pada akhir proyeksi", "Diskontokan dengan biaya ekuitas target"]
hubungan: Tahapan berurutan sesuai sumber
pesan utama: Kas setelah bunga dan pajak memakai biaya ekuitas, bukan WACC.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Equity Residual Method: kas target kepada pemilik. Kas setelah bunga dan pajak memakai biaya ekuitas, bukan WACC.
```

```visual
id: V-TM14-03
jenis: chart
judul: A View of Merger Analysis: rentang tawaran
sumber: Figure 21.1 [hal. 752; PDF 794]
isi: ["Nilai standalone 62,5 juta USD", "Nilai bagi pengakuisisi 96,5 juta USD", "Sinergi 34 juta USD", "Tawaran 86,5: manfaat A 10; B 24 juta USD"]
hubungan: Dua garis berlawanan; titik manfaat nol 62,5 dan 96,5; rentang 34 adalah sinergi. Ujung garis adalah perpanjangan fungsi sumber, bukan harga transaksi
pesan utama: Tawaran membagi total manfaat antara pemilik kedua perusahaan.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: A View of Merger Analysis: rentang tawaran. Tawaran membagi total manfaat antara pemilik kedua perusahaan.
data: {"panels":[{"title":"Manfaat pemegang saham","xlabel":"Harga target (juta USD)","ylabel":"Perubahan kekayaan (juta USD)","series":[{"label":"Hightech (acquirer)","points":[[52.5,44],[106.5,-10]]},{"label":"Apex (target)","points":[[52.5,-10],[106.5,44]]}],"xmin":52.5,"xmax":106.5,"ymin":-15,"ymax":45,"xticks":[62.5,86.5,96.5]}]}
```
