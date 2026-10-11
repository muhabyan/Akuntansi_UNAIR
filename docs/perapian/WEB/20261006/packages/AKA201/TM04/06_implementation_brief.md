# AKA201 TM04: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

## 1. Judul

- Judul katalog: **Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional**
- Subjudul: Ch.4 Arens (pp.86–99) · ISA/SA 200

## 2. Pemetaan blok

| # | Section (05) | Jenis blok | Canonical |
|---|---|---|---|
| 1 | Kasus Satyam | paragraf | C-001 |
| 2 | Siapa bertanggung jawab | tabel + paragraf | C-010–C-021 |
| 3 | Keyakinan memadai dan keterbatasan bawaan | list + tabel + callout jebakan | C-030–C-034 |
| 4 | Error dan fraud | tabel ×2 | C-040–C-042 |
| 5 | Area sulit | tabel + paragraf | C-050–C-053 |
| 6 | Pertimbangan profesional, Livent | tabel + paragraf | C-060–C-063 |
| 7 | Skeptisisme | tabel ×2 + list | C-070–C-077 |
| 8 | Panduan role play Week 4 | tabel + list bernomor berlabel Interpretasi | C-062, C-073–C-076 |
| 9 | Kasus latihan (Kasus 3 berlabel Interpretasi) | worked case | lihat 05 |
| 10 | Exam toolkit | list + tabel | seluruh TM |

## 2b. Tambahan revisi fondasi (v2)

| Section baru (05) | Posisi | Jenis blok |
|---|---|---|
| 0. Fondasi (termasuk tabel "Kesalahpahaman umum") | Paling awal, sebelum section 1 | paragraf + tabel; blok Interpretasi bila ada |
| Uji pemahaman | Sebelum Exam toolkit | soal terbuka dengan jawaban tersembunyi |

## 3. Konvensi render

- Sama dengan TM sebelumnya: tanpa `$`, tanpa LaTeX.
- Section 8: daftar pertanyaan probing wajib berlabel Interpretasi; tabel prinsip tidak.
- Nilai rupee ditulis sebagai kata ("50,4 miliar rupee").

- **Uji pemahaman** dirender sebagai soal terbuka: pertanyaan tampil, sedangkan "Contoh jawaban" dan "Tanda belum paham" disembunyikan di balik tombol "Lihat contoh jawaban". Tujuannya memaksa mahasiswa menjawab sendiri dulu. Jangan dijadikan pilihan ganda.
- Tabel "Kesalahpahaman umum" memakai gaya callout peringatan atau tabel biasa dengan kolom "Anggapan yang keliru" diberi penanda visual.

- **Tampilan dan bahasa (v3):** ikuti `shared/panduan_tampilan_dan_bahasa.md`. File 05 kini memuat blok `> **Intinya:**` di awal setiap section bernomor dan penanda `<!-- pendalaman:start/end -->` untuk blok yang tertutup secara default. Kutipan sumber yang sebelumnya ada di judul section dipindah ke baris `*Sumber: ...*` di bawah judul.

## 4. Item latihan

### 4.1 Kuis (8 item)

Sebaran kunci: A = q01, q05; B = q03, q08; C = q02, q06; D = q04, q07.

**aka201-tm04-q01** (C-012)
Auditor menemukan salah saji material pada saldo persediaan. Siapa yang seharusnya membuat jurnal koreksinya?
- A. Manajemen klien ✅
- B. Engagement partner
- C. Senior auditor yang menemukan salah saji
- D. Komite audit
Penjelasan: koreksi oleh auditor menimbulkan ancaman telaah pribadi (ARENS p.95).

**aka201-tm04-q02** (C-033)
Menurut ISA 200, pernyataan yang BENAR tentang keterbatasan bawaan audit adalah:
- A. Keterbatasan bawaan membolehkan auditor melewatkan prosedur yang mahal
- B. Keterbatasan bawaan berarti auditor tidak bertanggung jawab atas fraud
- C. Kesulitan, waktu, atau biaya bukan alasan sah untuk puas dengan bukti yang kurang meyakinkan ✅
- D. Keterbatasan bawaan hanya berlaku untuk entitas kecil
Penjelasan: ISA200 para. A53.

**aka201-tm04-q03** (C-041)
Direktur menunda pencatatan beban agar target laba tercapai. Ini adalah contoh:
- A. Error
- B. Pelaporan keuangan curang ✅
- C. Penyalahgunaan aset
- D. Ketidakpatuhan hukum berdampak tidak langsung
Penjelasan: salah saji disengaja untuk menyesatkan pengguna (ARENS p.90).

**aka201-tm04-q04** (C-075)
Menurut ISA 200, pengalaman bertahun-tahun bahwa manajemen klien jujur:
- A. Membolehkan auditor mengurangi bukti untuk area berisiko tinggi
- B. Menggantikan kebutuhan konfirmasi pihak ketiga
- C. Tidak boleh dipertimbangkan sama sekali
- D. Boleh dipertimbangkan, tetapi tidak membebaskan auditor dari skeptisisme profesional ✅
Penjelasan: ISA200 para. A25.

**aka201-tm04-q05** (C-052)
Untuk hukum dan regulasi yang berdampak tidak langsung pada laporan keuangan, auditor:
- A. Melakukan prosedur tertentu seperti bertanya kepada manajemen dan memeriksa korespondensi dengan regulator ✅
- B. Wajib memperoleh bukti kepatuhan atas setiap ketentuan
- C. Tidak memiliki tanggung jawab apa pun
- D. Wajib mencari semua tindakan ilegal
Penjelasan: ARENS pp.92–93.

**aka201-tm04-q06** (C-072)
Kualitas skeptisisme yang berarti "tidak buru-buru menyimpulkan sebelum ada bukti yang memadai" adalah:
- A. Autonomy
- B. Search for knowledge
- C. Suspension of judgment ✅
- D. Self-esteem
Penjelasan: ARENS Table 4-1.

**aka201-tm04-q07** (C-076)
Auditor memakai prosedur yang sama dengan tahun lalu tanpa mempertimbangkan apakah masih tepat. Jebakan pertimbangan yang paling sesuai:
- A. Availability
- B. Overconfidence
- C. Confirmation
- D. Anchoring ✅
Penjelasan: ARENS pp.98–99.

**aka201-tm04-q08** (C-053)
Tanggung jawab menilai kemampuan entitas melanjutkan usaha berada pada:
- A. Auditor
- B. Manajemen ✅
- C. Regulator pasar modal
- D. Komite audit
Penjelasan: auditor menyimpulkan kelayakan penggunaan basis tersebut, tetapi penilaiannya tanggung jawab manajemen (ARENS p.94).

### 4.2 Flashcard (12 kartu; v2: kartu definisi hafalan diganti kartu "kenapa" dan "contoh")

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm04-fc01 | Kenapa auditor tidak boleh membuat sendiri jurnal koreksi klien? | Koreksi tanggung jawab manajemen; jika auditor yang membuat, ia menelaah pekerjaannya sendiri (ancaman telaah pribadi) | C-012, C-013 |
| aka201-tm04-fc02 | Apa itu tata kelola korporat menurut buku, dan di mana posisi TCWG? | Seperangkat hubungan manajemen, dewan, pemegang saham, dan pemangku kepentingan untuk menetapkan tujuan, cara mencapainya, dan pemantauan; TCWG mengawasi pelaporan keuangan dan audit | C-020, C-021 |
| aka201-tm04-fc03 | Keyakinan audit tidak absolut. Bolehkah auditor melewatkan prosedur yang mahal? | Tidak. Kesulitan, waktu, atau biaya bukan alasan sah untuk melewatkan prosedur yang tidak ada alternatifnya (ISA 200 A53) | C-032, C-033 |
| aka201-tm04-fc04 | Tiga sumber keterbatasan bawaan (ISA 200) | Sifat pelaporan keuangan; sifat prosedur audit; waktu dan biaya yang wajar | C-033 |
| aka201-tm04-fc05 | Error vs fraud | Tidak disengaja vs disengaja; tanggung jawab auditor sama | C-040 |
| aka201-tm04-fc06 | Dua jenis fraud | Penyalahgunaan aset; pelaporan keuangan curang | C-041 |
| aka201-tm04-fc07 | Empat area dengan keterbatasan khusus | Fraud; pihak berelasi; ketidakpatuhan hukum; kelangsungan usaha | C-050 |
| aka201-tm04-fc08 | Empat langkah kerangka pertimbangan profesional | Definisikan masalah; kumpulkan fakta; analisis alternatif; simpulkan dan dokumentasikan | C-062 |
| aka201-tm04-fc09 | Manajer menjawab lancar dan meyakinkan. Kenapa auditor tetap meminta bukti? | Jawaban wawancara juga dinilai keandalannya; keyakinan bahwa manajemen jujur tidak membebaskan dari skeptisisme (ISA 200 A21, A25) | C-073, C-075 |
| aka201-tm04-fc10 | Enam kualitas skeptisisme | Questioning mind, suspension of judgment, search for knowledge, interpersonal understanding, autonomy, self-esteem | C-072 |
| aka201-tm04-fc11 | Empat jebakan pertimbangan | Confirmation, overconfidence, anchoring, availability | C-076 |
| aka201-tm04-fc12 | Pelajaran kasus Satyam | Auditor menyerahkan proses konfirmasi bank kepada manajemen, padahal harus mengendalikannya sendiri | C-001 |

### 4.3 Bank soal esai (3 soal)

**aka201-tm04-bs01** (C-070–C-076), untuk role play Week 4, pembahasan berlabel Interpretasi
Saat mewawancarai manajer keuangan tentang jurnal penyesuaian besar yang dicatat di hari terakhir tahun buku, kamu mendapat penjelasan yang lancar dan meyakinkan. Jelaskan bagaimana skeptisisme profesional harus diterapkan dan langkah apa yang kamu ambil selanjutnya.
Poin jawaban: definisi skeptisisme; jawaban wawancara dinilai keandalannya (A21, A23); suspension of judgment; mencari bukti yang membantah dan sumber di luar akuntansi; dokumen sumber; pertimbangkan motif (bonus); kejujuran masa lalu tidak cukup (A25); dokumentasi dan konsultasi.

**aka201-tm04-bs02** (C-030–C-034)
Jelaskan mengapa auditor hanya dapat memberi keyakinan memadai, dan apakah penemuan salah saji material setelah laporan auditor terbit berarti auditnya gagal.
Poin jawaban: tiga alasan buku; tiga sumber keterbatasan ISA 200; A53; A57; kaitan dengan expectations gap (TM03).

**aka201-tm04-bs03** (C-010–C-021, C-052, C-053)
Bandingkan tanggung jawab manajemen, TCWG, dan auditor atas laporan keuangan, termasuk atas kelangsungan usaha dan kepatuhan terhadap hukum.
Poin jawaban: tabel tiga pihak; premis; koreksi oleh manajemen; going concern (manajemen menilai, auditor menyimpulkan); hukum langsung vs tidak langsung.

## 5. Yang tidak boleh dilakukan

- Menambahkan prosedur teknis pengujian jurnal dari ISA 240.
- Menyajikan daftar pertanyaan role play tanpa label Interpretasi.
