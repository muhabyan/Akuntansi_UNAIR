# AKA201 TM03: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

## 1. Judul

- Judul katalog: **Etika Profesi, Independensi, dan Lingkungan Hukum Auditor**
- Subjudul: Ch.3 Arens (pp.50–71) · KEPAP 2025 Seksi 110, 120, 420 · UU 5/2011

## 2. Pemetaan blok

| # | Section (05) | Jenis blok | Canonical |
|---|---|---|---|
| 0 | Callout "Catatan sumber" | callout info | aturan konten 04 |
| 1 | Kasus pembuka Scott London | paragraf | C-001 |
| 2 | Mengapa etika lebih tinggi | paragraf | C-002, C-003 |
| 3 | Lima prinsip dasar | tabel + callout beda pengelompokan | C-010–C-012 |
| 4 | Dilema etis dan kerangka lima langkah | tabel + paragraf + list | C-020–C-026 |
| 5 | Kerangka konseptual, lima ancaman, level dapat diterima, cara mengatasi, dua sisi independensi | tabel ×3 + list | C-030–C-037, C-043–C-045 |
| 6 | Hadiah dan jamuan + panduan role play | callout aturan + tabel + contoh kalimat berlabel Interpretasi | C-050, C-051 |
| 7 | UU 5/2011 | tabel | C-070–C-073 |
| 8 | Contoh aturan Kanada | list, diberi label "Aturan Kanada menurut buku" | C-041, C-042, C-060 |
| 9 | Expectations gap dan tanggung gugat | tabel ×2 | C-080–C-085 |
| 10 | Kasus latihan (Kasus 2 dan 3 berlabel Interpretasi) | worked case | lihat 05 |
| 11 | Exam toolkit | list + tabel | seluruh TM |

## 2b. Tambahan revisi fondasi (v2)

| Section baru (05) | Posisi | Jenis blok |
|---|---|---|
| 0. Fondasi (termasuk tabel "Kesalahpahaman umum") | Paling awal, sebelum section 1 | paragraf + tabel; blok Interpretasi bila ada |
| Uji pemahaman | Sebelum Exam toolkit | soal terbuka dengan jawaban tersembunyi |

## 3. Konvensi render

- Sama dengan TM01/TM02: tanpa `$`, tanpa LaTeX; nilai rupiah ditulis "Rp300 juta".
- Section 6 memakai callout aturan (gaya yang sama dengan callout definisi) untuk kutipan parafrase P420.3.
- Section 8 wajib diberi label yang menegaskan bahwa aturannya adalah aturan Kanada.
- Rujukan KEPAP ditulis dengan nomor paragraf, misalnya `(KEPAP P120.10)`.

- **Uji pemahaman** dirender sebagai soal terbuka: pertanyaan tampil, sedangkan "Contoh jawaban" dan "Tanda belum paham" disembunyikan di balik tombol "Lihat contoh jawaban". Tujuannya memaksa mahasiswa menjawab sendiri dulu. Jangan dijadikan pilihan ganda.
- Tabel "Kesalahpahaman umum" memakai gaya callout peringatan atau tabel biasa dengan kolom "Anggapan yang keliru" diberi penanda visual.

- **Tampilan dan bahasa (v3):** ikuti `shared/panduan_tampilan_dan_bahasa.md`. File 05 kini memuat blok `> **Intinya:**` di awal setiap section bernomor dan penanda `<!-- pendalaman:start/end -->` untuk blok yang tertutup secara default. Kutipan sumber yang sebelumnya ada di judul section dipindah ke baris `*Sumber: ...*` di bawah judul.

## 4. Item latihan

### 4.1 Kuis (8 item)

Sebaran kunci: A = q02, q06; B = q04, q07; C = q01, q08; D = q03, q05.

**aka201-tm03-q01** (C-031)
Auditor yang tahun lalu menyusun laporan keuangan klien lalu tahun ini mengaudit laporan tersebut menghadapi ancaman:
- A. Advokasi
- B. Intimidasi
- C. Telaah pribadi ✅
- D. Kedekatan
Penjelasan: menilai pekerjaan sendiri (KEPAP 120.6-A3(b)).

**aka201-tm03-q02** (C-050)
Menurut KEPAP Seksi 420, anggota tim audit boleh menerima hadiah dari klien audit jika:
- A. Nilainya trivial dan tidak memiliki konsekuensi, serta tidak dimaksudkan memengaruhi perilaku secara tidak patut ✅
- B. Hadiah diberikan setelah laporan audit terbit
- C. Hadiah disetujui oleh CFO klien
- D. Nilainya di bawah fee audit
Penjelasan: KEPAP P420.3 dan 420.3-A2.

**aka201-tm03-q03** (C-032)
Tolok ukur untuk menentukan apakah ancaman berada pada level yang dapat diterima menurut KEPAP adalah:
- A. Pendapat engagement partner
- B. Persetujuan komite audit klien
- C. Batas nominal yang ditetapkan KAP
- D. Pengujian pihak ketiga yang rasional dan memiliki informasi yang memadai ✅
Penjelasan: KEPAP 120.7-A1.

**aka201-tm03-q04** (C-010)
Prinsip dasar etika yang mensyaratkan pertimbangan tidak dikompromikan oleh bias, benturan kepentingan, atau pengaruh yang tidak semestinya adalah:
- A. Integritas
- B. Objektivitas ✅
- C. Perilaku profesional
- D. Kerahasiaan
Penjelasan: KEPAP 110.1-A1(b).

**aka201-tm03-q05** (C-082)
Perusahaan klien bangkrut akibat resesi, dan laporan keuangannya ternyata disajikan wajar serta audit dilakukan sesuai standar. Ini adalah contoh:
- A. Audit failure
- B. Deficient performance gap
- C. Pelanggaran due care
- D. Business failure tanpa audit failure ✅
Penjelasan: ARENS pp.70–71.

**aka201-tm03-q06** (C-033)
Menurut KEPAP, jika ancaman berada pada level yang tidak dapat diterima dan tidak ada pengamanan yang dapat diterapkan, serta keadaannya tidak dapat dihilangkan, Anggota harus:
- A. Menolak atau mengakhiri aktivitas profesional tersebut ✅
- B. Melanjutkan dengan menambah jumlah sampel
- C. Meminta persetujuan tertulis manajemen klien
- D. Mengungkapkan ancaman di laporan auditor
Penjelasan: KEPAP P120.10 dan 120.10-A1.

**aka201-tm03-q07** (C-072)
Menurut UU 5/2011 Pasal 30, Akuntan Publik dilarang:
- A. Memberikan jasa reviu
- B. Menerima imbalan jasa bersyarat ✅
- C. Menjadi dosen akuntansi
- D. Membuat kertas kerja
Penjelasan: Pasal 30 ayat (1) huruf h.

**aka201-tm03-q08** (C-080, C-081)
Anggapan publik bahwa opini wajar tanpa pengecualian menjamin laporan keuangan bebas kesalahan adalah contoh:
- A. Deficient standards gap
- B. Deficient performance gap
- C. Reasonableness gap ✅
- D. Audit risk
Penjelasan: harapan yang melebihi apa yang wajar diharapkan dari auditor (ARENS pp.68–69).

### 4.2 Flashcard (12 kartu; v2: kartu definisi hafalan diganti kartu "kenapa" dan "contoh")

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm03-fc01 | Apa beda objektivitas dan independensi? | Objektivitas adalah sikap mental; independensi mencakup sikap mental dan penampilan | C-036, C-037 |
| aka201-tm03-fc02 | Lima langkah kerangka keputusan etis | Fakta; isu etis; pihak terdampak; evaluasi alternatif; laksanakan dan dokumentasikan | C-021 |
| aka201-tm03-fc03 | Ethical fading | Dimensi etis hilang karena keputusan dibingkai sebagai soal hukum atau biaya saja | C-025 |
| aka201-tm03-fc04 | Situasi tidak dilarang secara spesifik oleh kode etik. Berarti boleh? | Tidak otomatis. Anggota tetap wajib mengidentifikasi, mengevaluasi, dan mengatasi ancaman (KEPAP P120.3) | C-030 |
| aka201-tm03-fc05 | Klien mengancam ganti KAP jika catatan tidak dihapus. Ancaman apa, dan kenapa? | Intimidasi: tekanan nyata atau dirasakan yang menghalangi auditor bertindak objektif | C-031, C-043 |
| aka201-tm03-fc06 | Tiga cara mengatasi ancaman | Hilangkan keadaan; terapkan pengamanan; tolak atau akhiri | C-033 |
| aka201-tm03-fc07 | Auditor yakin tetap objektif walau sering liburan bersama CFO klien. Kenapa tetap masalah? | Independensi dalam penampilan: pihak ketiga yang rasional kemungkinan menyimpulkan objektivitasnya dikompromikan (contoh kasus EY) | C-036, C-044 |
| aka201-tm03-fc08 | Aturan hadiah dari klien audit | Tidak boleh diterima kecuali trivial dan tidak berkonsekuensi; trivial pun dilarang jika untuk memengaruhi | C-050 |
| aka201-tm03-fc09 | Tiga sumber pengamanan (buku) | Profesi/regulasi; klien; KAP | C-045 |
| aka201-tm03-fc10 | Larangan etika UU 5/2011 Pasal 30 (contoh) | Imbalan jasa bersyarat; komisi; manipulasi atau pemalsuan data | C-072 |
| aka201-tm03-fc11 | Dua komponen expectations gap (Porter) | Reasonableness gap; performance gap (deficient standards, deficient performance) | C-081 |
| aka201-tm03-fc12 | Audit failure vs audit risk | Opini keliru karena tidak patuh standar vs opini keliru walau sudah patuh standar | C-082 |

### 4.3 Bank soal esai (3 soal)

**aka201-tm03-bs01** (C-030–C-036, C-050), untuk role play Week 3
Klien menawarkan makan malam di restoran mewah dan tiket konser kepada tim audit dua hari sebelum fieldwork akhir tahun. Analisis ancaman yang muncul, jelaskan aturan KEPAP yang relevan, dan jelaskan tindakan yang seharusnya diambil anggota tim.
Poin jawaban: tidak trivial; waktu memperkuat kesan memengaruhi; ancaman kepentingan pribadi, kedekatan, intimidasi; P420.3 dan 420.3-A2; menolak dengan sopan, melapor ke senior/partner, dokumentasi; independensi dalam penampilan.

**aka201-tm03-bs02** (C-021–C-024), pembahasan berlabel Interpretasi
Kamu staf audit yang diminta senior bekerja lembur tanpa mencatat jam agar audit tidak melewati anggaran. Terapkan kerangka lima langkah pengambilan keputusan etis dan tentukan tindakanmu.
Poin jawaban: lima langkah lengkap; pihak terdampak (diri sendiri, rekan, senior, KAP, tim berikutnya, klien); rasionalisasi "semua orang melakukannya"; minimal dua uji tindakan; tindakan yang dipilih beserta alasan. Pilihan akhir bersifat Interpretasi.

**aka201-tm03-bs03** (C-080–C-082)
Setelah sebuah perusahaan terbuka bangkrut, publik menuding auditornya gagal. Jelaskan konsep expectations gap dan bedakan audit failure, business failure, dan audit risk untuk menilai tudingan tersebut.
Poin jawaban: definisi gap; minimal tiga contoh harapan vs standar; reasonableness vs performance gap; tiga konsep; kebangkrutan tidak otomatis berarti audit gagal; audit failure ditentukan oleh kepatuhan pada standar.

## 5. Yang tidak boleh dilakukan

- Menyajikan aturan Kanada (rotasi 7 tahun, batas 15 persen fee, dan sebagainya) sebagai aturan Indonesia.
- Menyalin paragraf KEPAP atau IESBA secara utuh; gunakan parafrase dengan nomor paragraf.
- Menambahkan batas nominal rupiah untuk "trivial"; KEPAP tidak menetapkannya.
