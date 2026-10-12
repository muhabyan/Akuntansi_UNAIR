# Implementasi MNK102 TM13

Masukan otoritatif: 05_student_learning_version.md; SHA256 d0068fe5262287a70b1c63426d697b59d1e0338c74ff1a8257e2e45a92222979.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm13.ts, ekspor TM13_READING, Reading.layout layered, kunci 13. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.

```visual
id: V-TM13-01
jenis: map
judul: Manajemen Keuangan Multinasional: peta keputusan
sumber: Disusun dari Brigham & Houston, FFM 16e (2022), Bab 18, hal. cetak 625-661 (PDF 667-703)
isi: ["Operasi global", "Sistem kurs", "Kuotasi dan forward", "Paritas bunga dan daya beli", "Risiko proyek induk"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Manajemen Keuangan Multinasional: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```

```visual
id: V-TM13-02
jenis: flow
judul: Covered Investment: investasi dengan kurs terkunci
sumber: [hal. 640; PDF 682]
isi: ["Tukar mata uang pada spot", "Investasikan dana pada bunga setenor", "Jual penerimaan asing secara forward", "Bandingkan hasil domestik pada risiko sama"]
hubungan: Tahapan berurutan sesuai sumber
pesan utama: Urutan ini menjelaskan paritas suku bunga.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Covered Investment: investasi dengan kurs terkunci. Urutan ini menjelaskan paritas suku bunga.
```


## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.
