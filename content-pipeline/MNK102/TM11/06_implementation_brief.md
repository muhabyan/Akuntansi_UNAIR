# Implementasi MNK102 TM11

Masukan otoritatif: 05_student_learning_version.md; SHA256 517517eca2a1b72934e148b42f44d61334c699722236fcf82bfe4e300c018aa8.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm11.ts, ekspor TM11_READING, Reading.layout layered, kunci 11. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.

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


## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.
