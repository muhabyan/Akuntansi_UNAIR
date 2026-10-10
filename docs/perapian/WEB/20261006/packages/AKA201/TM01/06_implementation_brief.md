# AKA201 TM01: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

## 1. Metadata mata kuliah (dari RPP AKA201)

| Field | Nilai |
|---|---|
| Kode | AKA201 |
| Kode baru FEB | FEB25603017 |
| Nama | Pengauditan Berbasis Risiko I |
| SKS / semester | 3 / 3 |
| Jenis / level | Wajib (M) / Introduced |
| Prasyarat | AKK106 Akuntansi Dasar |
| PJMK | Dr. Devi Sulistyo Kalanjati |
| Archetype | audit-judgment |
| Jadwal | 7 minggu kuliah, UTS (minggu 8), 7 minggu kuliah, UAS |
| UTS | Esai, Sub-CPMK 1–2 (TM01–TM07), bobot 25% |
| UAS | Studi kasus komprehensif program audit berbasis risiko, bobot 35% |

Catatan untuk implementer: AKA201 kemungkinan belum ada di katalog. Pendaftaran mata kuliah baru mengikuti pola PJK301 (courseData, courseRegistry, registry kuis/flashcard/bank soal, `newCode`). Periksa dulu di Phase 1, jangan diasumsikan.

## 2. Judul TM01

- Judul katalog: **Sifat Audit, Permintaan atas Audit, dan Jenis Auditor**
- Subjudul: Ch.1 Arens (pp.1–19) · ISA/SA 200 (konseptual)

## 3. Pemetaan blok bacaan

Gunakan renderer dan jenis blok yang sudah ada. Satu baris = satu section.

| # | Section (05) | Isi utama | Jenis blok yang disarankan | Canonical |
|---|---|---|---|---|
| 1 | Kasus pembuka UPS | Dua jenis laporan asurans | paragraf + list | C-012, C-013 |
| 2 | Assurance engagement | Definisi, hubungan tiga pihak | definisi + tabel | C-001–C-005 |
| 3 | Tingkat keyakinan | Reasonable vs limited; materialitas pengantar | tabel + callout jebakan | C-010–C-016 |
| 4 | Definisi auditing | Empat unsur, tabel buku vs ISA, contoh CRA | definisi + tabel | C-020–C-029 |
| 5 | Auditing vs assurance | Pekerjaan vs hasil | paragraf | C-030 |
| 6 | Tujuan audit ISA 200 | Tujuan, tujuan keseluruhan, premis, kewajiban umum | list | C-031–C-035 |
| 7 | Information risk | Tiga komponen bunga, empat penyebab, tiga cara mengurangi, Theranos, catatan cakupan | tabel + callout | C-040–C-048 |
| 8 | Tiga jenis audit | Tabel perbandingan | tabel | C-050–C-052 |
| 9 | Jenis auditor | Tabel lima jenis, audit committee, blok Interpretasi | tabel + callout Interpretasi | C-060–C-066, C-090 |
| 10 | Akuntansi vs auditing | Tabel | tabel | C-070–C-072 |
| 11 | Jasa asurans dan nonasurans | Hierarki audit/review/compilation | list + tabel | C-080–C-084 |
| 12 | Kasus latihan | 3 kasus dengan pembahasan; kasus 3 berlabel Interpretasi | worked case | lihat 05 |
| 13 | Exam toolkit | Kerangka esai, pasangan konsep | list + tabel | seluruh TM |

## 4. Konvensi render

- Angka mata uang ditulis sebagai kata ("10 juta dolar"), tanpa simbol `$`, supaya tidak perlu escape.
- Tidak ada LaTeX di TM01.
- Callout "Jebakan ujian" memakai jenis callout peringatan yang sudah ada.
- Blok **Interpretasi** memakai gaya label Interpretasi yang sama dengan AKM II. Kasus 3 dan blok padanan Indonesia wajib tampil dengan label itu.
- Rujukan `(ARENS p.X)` dan `(ISA200 para. X)` ditampilkan sebagai teks kecil/sitasi sesuai konvensi situs.
- Agency theory (section 7) tampil dari Jensen & Meckling (1976); bagian "Biaya keagenan dan asimetri informasi" ada di blok pendalaman.

## 5. Item latihan

Semua jawaban harus dapat ditelusuri ke canonical yang disebut. Sebarkan posisi jawaban benar; urutan opsi di bawah boleh diacak ulang, asalkan kunci ikut dipetakan.

### 5.1 Kuis pilihan ganda (8 item)

Sebaran kunci: A = q02, q06; B = q03, q07; C = q01, q04; D = q05, q08.

**aka201-tm01-q01** (C-042)
Audit atas laporan keuangan debitur paling langsung menurunkan komponen suku bunga yang mana?
- A. Risk-free interest rate
- B. Business risk debitur
- C. Information risk ✅
- D. Ketiganya dalam proporsi yang sama
Penjelasan: audit tidak berpengaruh pada risk-free rate dan business risk; pengaruhnya pada information risk.

**aka201-tm01-q02** (C-014)
Reasonable assurance tidak bersifat absolut terutama karena:
- A. Sebagian besar bukti audit bersifat persuasive, bukan conclusive ✅
- B. Auditor tidak independen dari klien yang membayarnya
- C. Standar audit hanya mewajibkan limited assurance
- D. Manajemen tidak bertanggung jawab atas laporan keuangan
Penjelasan: ISA 200 para. 5.

**aka201-tm01-q03** (C-044)
Sebuah BUMN besar memproses ratusan ribu faktur per bulan, dan kelebihan bayar kecil kepada pemasok tidak terdeteksi. Penyebab information risk yang paling tepat:
- A. Remoteness of information
- B. Voluminous data ✅
- C. Complex exchange transactions
- D. Biases and motives of the provider
Penjelasan: volume transaksi besar membuat kesalahan terkubur (contoh buku: kelebihan bayar 2.000 dolar).

**aka201-tm01-q04** (C-050, C-052)
Menilai apakah proses penggajian terkomputerisasi anak usaha berjalan ekonomis, efisien, dan efektif adalah contoh:
- A. Financial statement audit
- B. Compliance audit
- C. Operational audit ✅
- D. Review engagement
Penjelasan: Table 1-1.

**aka201-tm01-q05** (C-061)
Perbedaan utama internal auditor dengan auditor eksternal adalah:
- A. Internal auditor tidak boleh melakukan compliance audit
- B. Internal auditor tidak memerlukan pengetahuan akuntansi
- C. Internal auditor melapor kepada otoritas pajak
- D. Tingkat independensi terhadap entitas ✅
Penjelasan: ARENS p.12.

**aka201-tm01-q06** (C-012, C-080, C-081)
Kesimpulan berbentuk "tidak ada hal yang menjadi perhatian kami yang menunjukkan bahwa..." menunjukkan jenis keyakinan:
- A. Limited assurance ✅
- B. Reasonable assurance
- C. Absolute assurance
- D. Tidak ada asurans
Penjelasan: keyakinan negatif dari perikatan limited assurance, misalnya review.

**aka201-tm01-q07** (C-072)
Pernyataan yang BENAR tentang perbedaan akuntansi dan auditing:
- A. Auditor mencatat transaksi yang belum dicatat klien
- B. Auditor menilai kewajaran informasi yang sudah dicatat dalam batas materialitas ✅
- C. Auditor tidak perlu memahami standar akuntansi
- D. Akuntansi dan auditing sama-sama bertujuan memberi opini
Penjelasan: ARENS pp.14–15.

**aka201-tm01-q08** (C-083, C-084)
Jasa KAP yang tidak memberikan asurans sama sekali atas laporan keuangan:
- A. Audit
- B. Review
- C. Audit atas satu akun tertentu
- D. Compilation ✅
Penjelasan: ARENS p.18.

### 5.2 Flashcard (12 kartu)

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm01-fc01 | Beri contoh perikatan asurans selain audit laporan keuangan, dengan informasi dan kriterianya | Asurans atas laporan emisi gas rumah kaca (informasi: laporan emisi; kriteria: kerangka pelaporan yang disepakati) atau audit SPT (informasi: SPT; kriteria: undang-undang pajak) | C-005, C-013, C-029 |
| aka201-tm01-fc02 | Tiga pihak dalam audit laporan keuangan | Klien (manajemen), pengguna eksternal, auditor; auditor akuntabel kepada pengguna | C-004 |
| aka201-tm01-fc03 | Reasonable vs limited assurance | Tinggi tapi tidak absolut, opini positif vs moderat, keyakinan negatif | C-012, C-013 |
| aka201-tm01-fc04 | Kenapa definisi auditing tidak menyebut "laporan keuangan"? | Karena berlaku untuk informasi apa pun yang dapat diverifikasi terhadap kriteria; audit laporan keuangan hanya salah satu jenis. Bagi akuntan publik, "audit" biasanya menyebut audit laporan keuangan, dan itulah asal kebingungannya | C-020, C-066 |
| aka201-tm01-fc05 | Petakan empat unsur auditing pada audit kepatuhan covenant bank | Informasi: catatan perusahaan; kriteria: ketentuan perjanjian pinjaman; bukti: laporan keuangan dan perhitungan auditor; oleh orang kompeten dan independen; hasilnya dilaporkan | C-022–C-028, C-050 |
| aka201-tm01-fc06 | Professional skepticism (ISA 200) | Pikiran yang mempertanyakan, waspada terhadap kondisi yang mengindikasikan salah saji karena error atau fraud, penilaian kritis atas bukti | C-026 |
| aka201-tm01-fc07 | Tujuan keseluruhan auditor (ISA 200 para. 11) | Keyakinan memadai bahwa laporan keuangan bebas salah saji material karena fraud atau error, lalu melaporkan dan berkomunikasi sesuai temuan | C-032 |
| aka201-tm01-fc08 | Kenapa audit bisa menurunkan bunga pinjaman tetapi tidak menurunkan risiko bisnis? | Audit memperbaiki keandalan informasi (information risk), tidak mengubah kondisi usaha atau ekonomi debitur | C-041, C-042 |
| aka201-tm01-fc09 | Empat penyebab information risk | Remoteness, biases and motives of provider, voluminous data, complex exchange transactions | C-044 |
| aka201-tm01-fc10 | Tiga cara mengurangi information risk | Pengguna verifikasi sendiri; berbagi risiko dengan manajemen; laporan keuangan diaudit | C-046 |
| aka201-tm01-fc11 | Tiga jenis audit | Financial statement, compliance, operational (economy, efficiency, effectiveness) | C-050 |
| aka201-tm01-fc12 | Audit vs review vs compilation | Reasonable assurance; limited assurance; tanpa asurans | C-084 |

### 5.3 Bank soal esai (3 soal, format UTS)

**aka201-tm01-bs01** (C-041–C-046)
Seorang manajer bank menolak memberi bunga rendah kepada calon debitur yang laporan keuangannya belum diaudit. Jelaskan alasan manajer itu dengan konsep information risk, termasuk penyebabnya dan cara-cara menguranginya.
Poin jawaban: tiga komponen suku bunga; audit hanya memengaruhi information risk; minimal dua penyebab relevan (remoteness, bias/motif penyedia); tiga cara mengurangi; audit sebagai cara paling umum.

**aka201-tm01-bs02** (C-020–C-029)
Jelaskan definisi auditing dan petakan keempat unsurnya pada pemeriksaan SPT badan oleh auditor otoritas pajak.
Poin jawaban: definisi; informasi = SPT; kriteria = undang-undang pajak; orang kompeten dan independen = auditor pajak; bukti = penilaian risiko lalu pemeriksaan catatan dan informasi pihak ketiga; laporan = hasil pemeriksaan.

**aka201-tm01-bs03** (C-012, C-013, C-080, C-081, C-084), berlabel Interpretasi pada pembahasan
Sebuah perusahaan privat kecil ragu memilih audit atau review untuk laporan keuangannya. Bandingkan keduanya dari sisi tingkat keyakinan, pekerjaan auditor, dan biaya, lalu jelaskan kapan masing-masing lebih tepat.
Poin jawaban: reasonable vs limited; audit memeriksa dokumen dan catatan, review terutama inquiry dan analitis; biaya; pilihan bergantung pada kebutuhan asurans pengguna. Rekomendasi akhir bersifat Interpretasi dan bergantung pada siapa penggunanya.

## 6. Yang tidak boleh dilakukan

- Menambahkan fakta, angka, atau nomor regulasi Indonesia yang tidak ada di 04.
- Menambahkan materi agency theory di luar yang ada di 05 dan C-095–C-099.
- Mengubah teks definisi ISA 200 di luar parafrase yang ada di 04.
- Menyentuh mata kuliah lain atau UI bersama di luar yang diperlukan untuk mendaftarkan AKA201.
