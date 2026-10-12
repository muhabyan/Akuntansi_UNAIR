# Implementasi MNK102 TM10

Masukan otoritatif: 05_student_learning_version.md; SHA256 f463c383406b67f844e9e92009c7c2033cd805477e879c6aa9a28ee710f66526.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm10.ts, ekspor TM10_READING, Reading.layout layered, kunci 10. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.

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


## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.
