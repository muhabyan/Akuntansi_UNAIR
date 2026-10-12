# Implementasi MNK102 TM12

Masukan otoritatif: 05_student_learning_version.md; SHA256 737dda1913a632ed12210a74fa94dc1a283fdaf3f9ce6ffa2f7f9af8b4dc435a.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm12.ts, ekspor TM12_READING, Reading.layout layered, kunci 12. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.




## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.

## Revisi substantif 12 Oktober 2026

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

## Spesifikasi visual revisi

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
