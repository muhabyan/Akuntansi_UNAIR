# Implementasi MNK102 TM13

Masukan otoritatif: 05_student_learning_version.md; SHA256 460b96777fa1d82515764fd3bad34e964458a8d064accc092d55e95cd0d451ea.

Konverter scripts/convert-mnk102.mjs menghasilkan src/data/mankeu/modules/tm13.ts, ekspor TM13_READING, Reading.layout layered, kunci 13. Output CRLF. Jangan mengedit teks TypeScript hasil konverter.

Urutan: Kilat, Inti, konsep dan self-check, Pendalaman tertutup, Kasus latihan dengan pembahasan tertutup, Persiapan Ujian. CoreReadingMinutes 15 mencakup baca, pemeriksaan diagram dan pengerjaan cek konsep.

## Visual

SVG memakai token tema svg-bg, svg-card, svg-text, svg-muted. Overview tersedia untuk semua diagram; proses memiliki mobileFlow kartu. Lebar 375px wajib diperiksa dalam terang dan gelap; overflow halaman nol. Grafik sumber yang kurvanya berupa aproksimasi kontinu diberi bentuk diskret dengan data tabel dan penjelasan, tidak mengarang koordinat distribusi.




## Lampiran A

Cek pemahaman menggunakan self-check, jawaban tertutup. Diskusi dan kasus menggunakan solution-reveal. Teks, tabel, rumus, rujukan, pembulatan, alt text, dan pesan utama berasal dari 05 secara verbatim.

## Penerimaan

Regenerasi byte identik; seluruh rumus diterima KaTeX strict; rujukan per unit; hitungan contoh sumber diperiksa independen; diagram memiliki overview dan caption; pra-UTS identik; 60/42/14 latihan tetap; bank dan pengacakan kunci diuji melalui komponen aplikasi.

## Revisi substantif 12 Oktober 2026

## 5a. Baca pasar dana dan kas yang kembali ke induk

Eurodollar berarti simpanan USD pada bank di luar Amerika Serikat, termasuk bank di luar Eropa. Eurobond diterbitkan dalam mata uang yang berbeda dari mata uang negara tempat penawaran, sedangkan foreign bond diterbitkan dalam mata uang negara pasar tujuan oleh penerbit asing. Nama instrumen tidak cukup menentukan risiko kurs; cocokkan mata uang kewajiban dengan kas pelunasan. [hal. 647-649; PDF 689-691]

ADR, American depositary receipt, mewakili saham asing melalui mekanisme penyimpanan dan dapat diperdagangkan di pasar Amerika. Diversifikasi lintas negara dapat mengurangi sebagian risiko, tetapi korelasi berubah dan risiko negara tetap ada. Data return lintas negara pada Table 18.4 bersifat historis dan tidak meramalkan hasil investasi berikutnya. [hal. 649-652; PDF 691-694]

International capital budgeting menilai kas yang benar-benar dapat dikirim kepada induk, setelah pajak dan hambatan pemulangan dana. Repatriation berarti pemulangan dana tersebut. Nilai proyek anak dapat berbeda dari nilai bagi induk bila kas tertahan. Periksa kurs tiap periode, risiko politik, biaya modal dan hak menerima kas. [hal. 653-654; PDF 695-696]

| Pemeriksaan proyek | Risiko bila diabaikan |
| --- | --- |
| Mata uang kas dan diskonto | NPV dapat berubah hanya karena satuan dicampur |
| Dana dapat dipulangkan | Laba anak disamakan dengan kas yang diterima induk |
| Pajak dan aturan negara sumber | Kas bersih terlalu tinggi |
| Risiko politik dan negara | Pembatasan atau perubahan aturan mengganggu proyeksi |
| Ukuran leverage lintas negara | Perbedaan akuntansi disangka perbedaan risiko pendanaan |

[hal. 653-656; PDF 695-698]

Table 18.5 membedakan total kewajiban dari utang berbunga serta nilai buku dari nilai pasar. Contoh buku: kewajiban 10 juta USD dan aset 20 juta USD memberi rasio 50%. Jika aset dan kewajiban pensiun masing-masing 10 juta USD dilaporkan bruto, rasionya menjadi 20/30 = 66,67%, walaupun pensiun didanai penuh. Perbedaan pelaporan perlu dikendalikan sebelum membandingkan negara. [hal. 655-656; PDF 697-698]

<!-- self-check question="Mengapa laba anak perusahaan belum sama dengan nilai kas untuk induk?" -->
Kas dapat tertahan oleh pajak, pembatasan transfer atau kebutuhan operasi anak. Valuasi induk memakai arus yang dapat dikirim, kurs dan diskonto yang konsisten. [hal. 653-654; PDF 695-696]
<!-- self-check:end -->

## Spesifikasi visual revisi

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
## Elaborasi 14 Oktober 2026

Sumber 05 diperbarui untuk tujuan spesifik, contoh terbimbing dekat rumus, dan alur penalaran. Angka ilustrasi baru diberi label penulis; tabel, rumus, gambar dan dua kasus sumber dipertahankan. TM09 mengurutkan teori sebelum kerangka kasus. SHA256 05: 460b96777fa1d82515764fd3bad34e964458a8d064accc092d55e95cd0d451ea. Validasi terakhir dicatat di docs/pra-uas-elaboration-progress.md.
