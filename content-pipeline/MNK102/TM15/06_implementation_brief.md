# Implementasi MNK102 TM15

Masukan otoritatif: 05_student_learning_version.md; SHA256 2f7059b66735ea263c1fcd7b7f638f60542557fe52707cc2c86f833a3b736e73.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm15.ts, ekspor TM15_READING, Reading.layout layered, kunci 15. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.




## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.

## Revisi substantif 12 Oktober 2026

## 4a. Hubungkan sinyal skor dengan keputusan

Z-score menghasilkan klasifikasi berdasarkan gabungan rasio dan sampel model. Jangan mengubah skor menjadi persentase peluang bangkrut. Rasio yang buruk menunjukkan kebutuhan pemeriksaan kas, laba operasi, kewajiban dan aset; keputusan hukum maupun pendanaan memerlukan bukti tambahan. Kesalahan tipe I berarti perusahaan bermasalah diklasifikasi sehat; tipe II berarti perusahaan sehat diklasifikasi bermasalah pada pembahasan artikel. [Altman 2002, PDF 13-15, bagian 5-7]

Pilihan reorganisasi menilai kelangsungan usaha setelah utang dan operasi ditata ulang. Likuidasi menjual aset serta membagi hasil menurut hak pihak terkait. Buku membahas Chapter 11 dan Chapter 7 Amerika Serikat. Materi ini tidak menentukan prosedur kepailitan Indonesia. Artikel Corporate Failure yang ditugaskan dosen tetap belum teridentifikasi. [FFM16e hal. 261-262; PDF 303-304; Kontrak Sheet1 B32:E32]

<!-- self-check question="Apakah Z-score di zona distress otomatis berarti perusahaan pailit?" -->
Tidak. Zona skor adalah hasil model dalam populasi tertentu. Periksa arus kas, kelayakan usaha, data rasio dan prosedur hukum yang berlaku. Artikel dosen belum tersedia, sehingga prioritas ujian TM15 masih memiliki batas sumber. [Altman 2002, PDF 13-15; FFM16e hal. 261-262, PDF 303-304]
<!-- self-check:end -->

## Spesifikasi visual revisi

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
