# Implementasi MNK102 TM15

Masukan otoritatif: 05_student_learning_version.md; SHA256 c08a525c791bb31555b63c45dfdec826ef7162113fbf08054e215b5781f1f920.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm15.ts, ekspor TM15_READING, Reading.layout layered, kunci 15. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.

```visual
id: V-TM15-01
jenis: map
judul: Corporate Failure dan Analisis Kesulitan Keuangan: peta keputusan
sumber: Disusun dari Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)
isi: ["Kas dan nilai usaha", "Populasi model", "Rasio X1-X5", "Varian Z", "Reorganisasi dan likuidasi"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Corporate Failure dan Analisis Kesulitan Keuangan: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```

```visual
id: V-TM15-02
jenis: map
judul: Original Z-Score: komponen rasio
sumber: Altman 2002, Figure 2 [PDF 10-12]
isi: ["1,2 × X1: modal kerja/aset", "1,4 × X2: laba ditahan/aset", "3,3 × X3: EBIT/aset", "0,6 × X4: nilai pasar ekuitas/total kewajiban", "1,0 × X5: penjualan/aset"]
hubungan: Lima kontribusi dijumlahkan; semua definisi dan koefisien harus mengikuti varian yang sama
pesan utama: Jumlah kontribusi menghasilkan skor tanpa satuan; skor belum menjadi probabilitas gagal.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Original Z-Score: komponen rasio. Jumlah kontribusi menghasilkan skor tanpa satuan; skor belum menjadi probabilitas gagal.
```


## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.
