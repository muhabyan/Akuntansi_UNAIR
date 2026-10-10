# AKA201 TM02: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

Metadata mata kuliah: lihat TM01/06_implementation_brief.md.

## 1. Judul

- Judul katalog: **Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu**
- Subjudul: Ch.2 Arens (pp.25–43) · ISQM 1 / SMM 1 · ISA 220 (Revised) · UU 5/2011 · PP 20/2015

## 2. Pemetaan blok

| # | Section (05) | Jenis blok | Canonical |
|---|---|---|---|
| 0 | Callout pembuka "Perhatikan sebelum membaca" | callout info | C-060 |
| 1 | Kualitas audit itu apa | paragraf | C-001 |
| 2 | KAP dan jenjang auditor | paragraf + tabel | C-002–C-005 |
| 3 | Lembaga (buku, Indonesia, pembatasan jasa audit) | tabel ×3 + list + callout jebakan | C-010–C-017, C-070–C-080 |
| 4 | Kerangka standar dan empat prinsip | tabel ×2 + list | C-020–C-028 |
| 5 | Pendorong kualitas, kasus KPMG | tabel + paragraf | C-030–C-032, C-044 |
| 6 | Quality control vs quality management; tingkat KAP vs perikatan | tabel ×4 + label Perbandingan | C-040–C-061 |
| 7 | Kasus latihan (Kasus 3 berlabel Interpretasi) | worked case | lihat 05 |
| 8 | Exam toolkit | list + tabel | seluruh TM |

## 2b. Tambahan revisi fondasi (v2)

| Section baru (05) | Posisi | Jenis blok |
|---|---|---|
| 0. Fondasi (termasuk tabel "Kesalahpahaman umum") | Paling awal, sebelum section 1 | paragraf + tabel; blok Interpretasi bila ada |
| Uji pemahaman | Sebelum Exam toolkit | soal terbuka dengan jawaban tersembunyi |

## 3. Konvensi render

- Sama dengan TM01: angka mata uang sebagai kata, tanpa `$`; tanpa LaTeX.
- Label **Perbandingan** memakai gaya yang sama dengan label Interpretasi, dengan teks "Perbandingan: disusun dari dua sumber". Jika situs belum punya varian ini, pakai gaya Interpretasi dan tulis "Perbandingan" di judulnya.
- Rujukan regulasi ditulis `(UUAP Pasal X)` dan `(PPAP Pasal X)`; pada penyebutan pertama di halaman, tampilkan nama lengkap regulasi.
- Tabel di ponsel dirender sebagai kartu (lihat spec §2).

- **Uji pemahaman** dirender sebagai soal terbuka: pertanyaan tampil, sedangkan "Contoh jawaban" dan "Tanda belum paham" disembunyikan di balik tombol "Lihat contoh jawaban". Tujuannya memaksa mahasiswa menjawab sendiri dulu. Jangan dijadikan pilihan ganda.
- Tabel "Kesalahpahaman umum" memakai gaya callout peringatan atau tabel biasa dengan kolom "Anggapan yang keliru" diberi penanda visual.

- **Tampilan dan bahasa (v3):** ikuti `shared/panduan_tampilan_dan_bahasa.md`. File 05 kini memuat blok `> **Intinya:**` di awal setiap section bernomor dan penanda `<!-- pendalaman:start/end -->` untuk blok yang tertutup secara default. Kutipan sumber yang sebelumnya ada di judul section dipindah ke baris `*Sumber: ...*` di bawah judul.

## 4. Item latihan

### 4.1 Kuis (8 item)

Sebaran kunci: A = q03, q07; B = q01, q06; C = q04, q08; D = q02, q05.

**aka201-tm02-q01** (C-051)
Komponen sistem manajemen mutu yang TIDAK ada dalam enam elemen pengendalian mutu versi lama adalah:
- A. Relevant ethical requirements
- B. The firm's risk assessment process ✅
- C. Engagement performance
- D. Acceptance and continuance of client relationships
Penjelasan: proses penilaian risiko KAP serta informasi dan komunikasi adalah komponen baru di ISQM 1 / SMM 1.

**aka201-tm02-q02** (C-080)
Menurut PP 20/2015, seorang Akuntan Publik yang telah mengaudit perusahaan asuransi selama 5 tahun buku berturut-turut dapat kembali mengauditnya setelah:
- A. 1 tahun buku
- B. 3 tahun buku
- C. 5 tahun buku
- D. 2 tahun buku berturut-turut tidak memberikan jasa audit ✅
Penjelasan: PPAP Pasal 11 ayat (4).

**aka201-tm02-q03** (C-071)
Menurut UU 5/2011, jasa audit atas informasi keuangan historis:
- A. Hanya dapat diberikan oleh Akuntan Publik ✅
- B. Dapat diberikan oleh setiap akuntan beregister
- C. Dapat diberikan oleh Rekan non-Akuntan Publik
- D. Dapat diberikan oleh internal auditor bersertifikat
Penjelasan: UUAP Pasal 3 ayat (2).

**aka201-tm02-q04** (C-058, C-059)
Standar yang mengatur tanggung jawab engagement partner atas mutu satu perikatan audit adalah:
- A. ISQM 1
- B. ISQM 2
- C. ISA 220 (Revised) ✅
- D. ISA 200
Penjelasan: ISQM 1 di tingkat KAP; ISA 220 di tingkat perikatan.

**aka201-tm02-q05** (C-015)
Perbedaan utama PCAOB dengan CPAB menurut buku adalah bahwa PCAOB:
- A. Tidak melakukan inspeksi
- B. Hanya mengawasi KAP kecil
- C. Diangkat oleh AICPA
- D. Juga menetapkan standar audit untuk perusahaan publik ✅
Penjelasan: ARENS p.31.

**aka201-tm02-q06** (C-076)
Kewenangan menyusun dan menetapkan SPAP di Indonesia ada pada:
- A. Menteri Keuangan
- B. Asosiasi Profesi Akuntan Publik ✅
- C. Komite Profesi Akuntan Publik
- D. Otoritas pasar modal
Penjelasan: UUAP Pasal 44 ayat (1) huruf a; PPAP Pasal 8.

**aka201-tm02-q07** (C-030)
Menurut buku, pendorong utama kualitas audit adalah:
- A. Budaya KAP yang menyeimbangkan komersialisme dan profesionalisme ✅
- B. Ukuran KAP
- C. Besarnya fee audit
- D. Jumlah kantor cabang
Penjelasan: ARENS p.39.

**aka201-tm02-q08** (C-052)
Tiga langkah pendekatan berbasis risiko dalam ISQM 1 / SMM 1 secara berurutan adalah:
- A. Merencanakan, melaksanakan, melaporkan
- B. Menilai risiko audit, menetapkan materialitas, mengumpulkan bukti
- C. Menetapkan tujuan mutu, menilai risiko mutu, merancang respons ✅
- D. Menerima klien, menugaskan tim, mereviu kertas kerja
Penjelasan: ISQM1 para. 8.

### 4.2 Flashcard (12 kartu; v2: kartu definisi hafalan diganti kartu "kenapa" dan "contoh")

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm02-fc01 | Kenapa struktur berjenjang di KAP mendukung kualitas? | Setiap jenjang mereviu pekerjaan di bawahnya; staf yang kurang berpengalaman mengerjakan sebagian besar pekerjaan sehingga supervisi penting | C-005, C-026 |
| aka201-tm02-fc02 | Peran IAASB | Menyusun ISA; memfasilitasi konvergensi standar internasional dan nasional | C-013 |
| aka201-tm02-fc03 | Empat prinsip yang mendasari audit | Purpose, personal responsibilities, performance responsibilities, reporting responsibilities | C-022 |
| aka201-tm02-fc04 | Empat pendorong kualitas audit | Right teams, right support, in-process reviews, accountability and monitoring | C-031 |
| aka201-tm02-fc05 | Kenapa enam elemen di buku tidak boleh dijawab sebagai standar yang berlaku? | Itu quality control versi lama (CSQC 1). Yang berlaku ISQM 1 / SMM 1: delapan komponen berbasis risiko; SMM 1 efektif 31 Desember 2025 | C-042, C-057, C-060 |
| aka201-tm02-fc06 | Delapan komponen manajemen mutu | Proses penilaian risiko KAP; tata kelola dan kepemimpinan; etika; penerimaan dan keberlanjutan klien; pelaksanaan perikatan; sumber daya; informasi dan komunikasi; pemantauan dan remediasi | C-051 |
| aka201-tm02-fc07 | Tujuan sistem manajemen mutu | Keyakinan memadai bahwa KAP dan personel patuh standar dan hukum, dan laporan yang diterbitkan sesuai kondisinya | C-055 |
| aka201-tm02-fc08 | Engagement quality review | Evaluasi objektif atas pertimbangan signifikan tim perikatan, selesai paling lambat pada tanggal laporan | C-056 |
| aka201-tm02-fc09 | Rekan KAP yang bukan Akuntan Publik ingin menandatangani laporan audit. Boleh? | Tidak. Jasa asurans hanya dapat diberikan oleh Akuntan Publik (UU 5/2011 Pasal 3) | C-071 |
| aka201-tm02-fc10 | Siapa memberi izin Akuntan Publik, dan apa peran Asosiasi Profesi? | Menteri Keuangan memberi izin; Asosiasi Profesi menyusun SPAP, menyelenggarakan ujian dan PPL, serta reviu mutu anggota | C-072, C-076 |
| aka201-tm02-fc11 | Pembatasan jasa audit PP 20/2015 | 5 tahun buku berturut-turut; bank umum, pasar modal, dana pensiun, asuransi/reasuransi, BUMN; jeda 2 tahun buku | C-080 |
| aka201-tm02-fc12 | Tanggal efektif SMM 1 | 31 Desember 2025 (disahkan 17 September 2024) | C-057 |

### 4.3 Bank soal esai (3 soal)

**aka201-tm02-bs01** (C-040–C-061)
Jelaskan perbedaan pengendalian mutu (quality control) dalam buku dengan manajemen mutu (quality management) menurut ISQM 1 / SMM 1. Sebutkan komponen yang baru dan jelaskan pendekatan berbasis risikonya.
Poin jawaban: 6 elemen vs 8 komponen; dua komponen baru; perubahan human resources ke resources, monitoring ke monitoring and remediation; tujuan mutu, risiko mutu, respons; evaluasi tahunan; SMM 1 efektif 31 Desember 2025.

**aka201-tm02-bs02** (C-070–C-080)
Jelaskan peran Menteri Keuangan, Asosiasi Profesi Akuntan Publik, dan Komite Profesi Akuntan Publik dalam mengatur profesi akuntan publik di Indonesia, lalu jelaskan ketentuan pembatasan jasa audit dalam PP 20/2015.
Poin jawaban: izin, pembinaan, pengawasan, sanksi (Menteri); SPAP, ujian, PPL, reviu mutu (Asosiasi); pertimbangan dan banding (Komite); 5 tahun buku, lima jenis entitas, Pihak Terasosiasi, jeda 2 tahun buku; yang dibatasi AP, bukan KAP.

**aka201-tm02-bs03** (C-030, C-031, C-059), pembahasan berlabel Interpretasi
Seorang partner diminta memangkas jam audit agar fee kompetitif, padahal klien baru mengganti sistem akuntansinya. Analisis dampaknya terhadap kualitas audit dan jelaskan tanggung jawab engagement partner.
Poin jawaban: komersialisme vs profesionalisme; tim dengan waktu yang cukup; perubahan sistem menaikkan risiko; tanggung jawab menyeluruh engagement partner; konsultasi dan dokumentasi keputusan. Rekomendasi akhir adalah Interpretasi.

## 5. Yang tidak boleh dilakukan

- Menambahkan nomor keputusan Menteri yang menetapkan IAPI.
- Menambahkan aturan rotasi sektoral selain PP 20/2015.
- Menyajikan enam elemen buku sebagai standar yang berlaku.
- Menyalin paragraf SMM 1 atau ISQM 1 secara utuh; gunakan parafrase dan daftar komponen.
