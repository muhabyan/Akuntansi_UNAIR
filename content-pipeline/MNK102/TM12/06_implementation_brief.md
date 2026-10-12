# Implementasi MNK102 TM12

Masukan otoritatif: 05_student_learning_version.md; SHA256 391ce96382564ce5849a5cb0aeb143c850db9aba9460fc506feecee3587d99c2.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm12.ts, ekspor TM12_READING, Reading.layout layered, kunci 12. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.

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


## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.
