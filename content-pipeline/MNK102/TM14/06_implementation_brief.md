# Implementasi MNK102 TM14

Masukan otoritatif: 05_student_learning_version.md; SHA256 4d35100c65a028ffe93c7a68149bfbdc1b8bef619e01dd6e7ed48da566618f5c.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm14.ts, ekspor TM14_READING, Reading.layout layered, kunci 14. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.

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


## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.
