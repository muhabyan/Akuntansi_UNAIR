# Audit Kelengkapan Materi Website E-Learning Akuntansi

Tanggal audit: 23 Juni 2026  
Cakupan: semua mata kuliah Semester 1–2 yang sudah dibuka di `courseData.ts`.  
Metodologi: bandingkan **(A)** data yang dipakai website (`src/data/<matkul>/`) **vs** **(B)** sumber materi fisik (`C:\cek\<Matkul>\`) **vs** **(C)** silabus resmi di `courseData.ts`.

---

## TL;DR — Skor kelengkapan

| Matkul | Kode | Sem | TM 1–7 | TM 8–14 | Review UTS | Review UAS | Skor |
|---|---|---|---|---|---|---|---|
| Akuntansi Keuangan Dasar | **AKK106** | 1 | ✅ Lengkap | ❌ **KOSONG (placeholder)** | ⚠️ partial | ❌ tidak ada | 🟠 50% |
| AKM I | AKK201 | 2 | ✅ Lengkap | ✅ Lengkap | ✅ ada | ✅ ada | 🟢 100% |
| Akuntansi Biaya (AKBI) | AKM201 | 2 | ✅ Lengkap | ✅ Lengkap | ✅ ada | ✅ ada | 🟢 100% |
| Etika & Ket. Profesional (EKPA) | AKA103 | 2 | ✅ Lengkap | ✅ Lengkap (2 sumber) | ⚠️ ringkas | ❌ tidak ada | 🟢 90% |
| Pengantar Bisnis | MNU101 | 2 | ⚠️ Ringkas | ✅ Lengkap | ❌ tidak ada | ❌ tidak ada | 🟡 80% |
| Pengantar Teori Ekonomi (PTE) | EKT109 | 2 | ✅ Lengkap | ✅ Lengkap + Toolkit Pra-UAS | ❌ tidak ada | ⚠️ toolkit only | 🟢 90% |
| Perpajakan I | PJK201 | 2 | ✅ Lengkap | ✅ Lengkap | ❌ tidak ada | ❌ tidak ada | 🟢 90% |
| Statistik untuk Akuntan | MAS122 | 2 | ⚠️ Sangat ringkas | ⚠️ Sangat ringkas | ❌ tidak ada | ❌ tidak ada | 🟠 60% |
| 8 matkul PDB Sem 1 | — | 1 | ❌ placeholder | ❌ placeholder | ❌ | ❌ | 🔴 0% |

**Highlight:**
- 🟢 **Sehat:** AKM I, AKBI, EKPA, PTE, Perpajakan
- 🟠 **Perlu dilengkapi:** AKK106 (TM8–14), Statistik (konten tipis)
- 🟡 **Perlu enrichment:** Pengantar Bisnis TM 1–7 (placeholder-ish)
- 🔴 **Belum ada konten:** 8 matkul PDB Sem 1 (Agama, Pancasila, dll) — by design (bukan prioritas)

---

## 1. AKK106 — Akuntansi Keuangan Dasar (Semester 1)

### Status data website
- **Sumber:** `src/data/akdas/akdasPraUTS.ts` (1.782 baris)
- **TM ter-cover di reading:** TM 1, 2, 3, 4, 5, 6, 7 (lengkap dengan `MeetingContent` struktur kaya: sections, worked examples, practice reports, templates, common mistakes, quick summary)
- **TM 8–14:** ❌ **TIDAK ADA DATA**. `courseData.ts` ngedaftar judul TM 8–14 lengkap (Receivables, Plant Assets, dll), tapi `akdasPraUTS.ts` cuma berisi `meetings` untuk TM 1–7. Saat user buka TM 8 di website, akan muncul placeholder kosong / fallback.
- **Review:** Hanya "Paket Latihan UTS" (bukan UAS).

### Sumber fisik di `C:\cek\`
- ❌ **Tidak ada folder dedicated** `AKK106/` atau `AKDAS/`. Tidak ada PDF/PPT sumber untuk TM 1–14.

### Gap & Rekomendasi
| Item | Status | Aksi |
|---|---|---|
| TM 8–14 reading | ❌ Kosong | **Prioritas tinggi**: tulis materi TM 8–14 (rujuk WKK Ch. 8–14: Receivables, Plant Assets, Liabilities, Corporations, Investments, Cash Flows, Financial Statement Analysis) |
| Review UAS | ❌ Belum ada | Tambah `akdasPraUAS.ts` mengikut pola `akdasPraUTS.ts` |
| Bahan sumber | ❌ Tidak ada | Tambah PDF/PPT/buku referensi di `C:\cek\AKDAS\` atau `C:\cek\AKK106\` |

---

## 2. AKK201 — Akuntansi Keuangan Menengah I / AKM I (Semester 2)

### Status data website
- **Sumber:** `src/data/akm1/akm1Data.ts` (8.937 baris — sangat rich) + `akm1FinancialReports.ts` (690 baris) + `akm1PracticeCases.ts` (1.010 baris)
- **TM ter-cover:** **TM 1–14 lengkap** di `AKK201_READINGS`
- **Review:** `AKM1_REVIEW_READINGS` punya simulasi UTS dan UAS ✅
- **Avg content per TM:** ~280–650 baris (TM 14 = 650 baris, terbesar). Sangat komprehensif.

### Sumber fisik di `C:\cek\AKM I\`
- ✅ Buku Kieso IFRS 5th Edition (PDF lengkap, compressed)
- ✅ `LATSOL TUTOR CORNEL AKM 1.pdf`
- ✅ `UTS AKM 2024.pdf`
- ✅ `akm1_uts_guide (1).html`
- ✅ `AKM 1 Pra UAS.html` + folder `AKM pra UAS/` dengan merge_pack lengkap (chunks markdown TM 8-9, 10-11, 12-13)

### Verdict
✅ **Sehat. Tidak ada gap signifikan.** Hanya catatan: chunks `AKM pra UAS/akm1_pra_uas_merge_pack/` masih dikelompokin (tm89, tm1011, tm1213). Untuk NotebookLM lebih bagus dipecah jadi per-TM individu.

---

## 3. AKM201 — Akuntansi Biaya / AKBI (Semester 2)

### Status data website
- **Sumber:** 4 file modular di `src/data/akbi/`:
  - `akbiMasterReadingsTm1Tm3.ts` (2.992 baris)
  - `akbiMasterReadingsTm4Tm7ReviewUts.ts` (3.853 baris) — termasuk Review UTS
  - `akbiMasterReadingsTm8Tm11.ts` (3.018 baris)
  - `akbiMasterReadingsTm12Uas.ts` (9.260 baris) — termasuk Review UAS (TM 12 sangat detail)
- **TM ter-cover:** **TM 1–14 lengkap** + Review UTS + Review UAS
- **Tambahan:** `akbiManagementReports.ts` (875 baris) untuk Laporan; `akbiReadingUxPolish.ts` untuk polish UX
- **Bank rumus:** auto-generated di `buildAkbiFormulaBank()` di `courseRegistry.ts`

### Sumber fisik di `C:\cek\AKBI\`
- ✅ Cost Accounting (Carter/Usry) ch01–07 PPT
- ✅ `9-LABOR.ppt` (ch9)
- ✅ `Modul AKBI TM 8.pdf`, `Modul AKBI TM 9.pdf`
- ✅ `MHS - TM 8 (1).pptx`
- ✅ `AKBI KASUS MODUL 14.xlsx`
- ✅ Soal/Jawaban Kuis Pra-UTS & Pra-UAS lengkap
- ✅ `UTS AKBI 2024.pdf`, `UAS 2022 AKBI.xlsx`, `REVIEW UTS AKBI (1).pdf`
- ✅ Buku Carter 14e (PDF)
- ✅ SILABI 2026 + folder `chunks/` (HTML chunks per TM 8-14) + `AKBI pra UAS/` dengan akbi_content_bundle.json

### Verdict
✅ **Sehat. Coverage paling lengkap dari semua matkul.** Source sangat banyak dan sudah masuk ke data website.

---

## 4. AKA103 — Etika & Keterampilan Profesional / EKPA (Semester 2)

### Status data website
EKPA punya **2 jalur data** (dual-source):

1. **Jalur courseRegistry (default):** `src/data/ekpa/ekpaReadings.ts` (366 baris untuk 14 TM)
   - TM 1–14 semua ada, ringkas (avg ~25 baris per TM).
   - Format `Reading` standar dengan blocks.

2. **Jalur EkpaView.tsx (renderer premium TM 8-14):** `src/data/ekpa/ekpaData.ts` (1.461 baris)
   - Export `ekpaPraUasTm8_14` dengan `modules`, `cases`, `quiz`, `references`.
   - Konten **jauh lebih rich** (markdown + html), tiap modul ada tabel kompetensi/aksioma, contoh kasus, dan jebakan ujian.
   - Hanya dipakai untuk TM 8–14 via komponen `EkpaView.tsx`.

### Sumber fisik di `C:\cek\EKPA\`
- ✅ Banyak PDF reading per TM (Duska, Stuart, Byars BusinessEthics, Kode Etik Akuntan Indonesia 2021)
- ✅ Per TM specifically: TM 7 Fraud Triangle, TM 8 Etika Bisnis Islam + Santiago Sia, TM 10 Bridging Gap Skills, TM 11 Corporate Governance, TM 12 Ethical Leadership + Gentleness, TM 13 Communication skills
- ✅ Case EY Indonesia 2017
- ✅ `RPS EKPA SMT 2.pdf`
- ✅ `EKPA_Pra_UAS_Study_Guide_TM8-14_SUPER_LENGKAP.html` + folder `EKPA pra UAS/ekpa_merge_pack/` dengan chunks per TM 8-14 (markdown + HTML fragment)

### Gap & Rekomendasi
| Item | Status | Catatan |
|---|---|---|
| TM 1–7 reading | ✅ ada | Konten ringkas tapi cukup |
| TM 8–14 reading (default) | ⚠️ ringkas di `ekpaReadings.ts` | Tapi sudah ada renderer premium di `EkpaView.tsx` |
| Review UTS | ⚠️ Tidak eksplisit | Hanya "TM 7 = Review & Studi Kasus UTS" |
| Review UAS | ❌ Tidak ada | Bisa di-generate dari `ekpaPraUasTm8_14.quiz` |
| Konsistensi 2 sumber | ⚠️ Potensi divergence | `ekpaReadings.ts` dan `ekpaData.ts` perlu di-sync supaya tidak konflik |

---

## 5. MNU101 — Pengantar Bisnis (Semester 2)

### Status data website
- **Sumber utama TM 1–7:** `src/data/pengbis/pengbisData.ts` (266 baris untuk 7 TM ≈ **38 baris per TM**). Format `Reading` ringkas (intro + objectives + sedikit blocks). **Sangat tipis dibanding TM 8–14**.
- **Sumber utama TM 8–14:** `src/data/pengbis/Pengantar_Bisnis_Pra_UAS.md` (markdown raw) di-parse runtime via `parseMarkdownToBlocks()` di `courseRegistry.ts`. Coverage TM 1–14 di MD tapi **hanya TM 8–14 yang dipakai** untuk merge (TM 1–7 tetap pakai pengbisData.ts).
- **Asset pendukung:** `pengbis_module_data.ts` (235 baris), folder `chunks/` (markdown chunks per TM 1–14 + Case Bank + Glossary + Cheat Sheet).
- **TM ter-cover:** TM 1–14 ✅
- **Review:** ❌ tidak ada simulasi UTS/UAS terpisah.

### Sumber fisik di `C:\cek\Pengantar Bisnis\`
- ✅ Buku Nickels (Understanding Business) — PDF compressed
- ✅ Buku Pride (Foundations of Business 2018) — PDF compressed
- ✅ `NEW RPS PENGANTAR BISNIS 2026.pdf`
- ✅ `Pengantar Bisnis Pra UAS.html` + `Pengantar_Bisnis_Pra_UAS_revisi.html`
- ✅ `UTS_Survival_Guide_BYAN_v2_Super.html`
- ✅ `Pengbis pra UAS/pengbis_import_pack/` dengan chunks TM01–14 + Case Bank + Glossary + Cheat Sheet (lengkap)

### Gap & Rekomendasi
| Item | Status | Aksi |
|---|---|---|
| TM 1–7 reading | ⚠️ Ringkas (~38 baris/TM) | **Enrich** dengan source `UTS_Survival_Guide_BYAN_v2_Super.html` atau chunks `TM01–TM07*.md` (sudah ada di `pengbis_import_pack/chunks/` tapi belum dipakai untuk TM 1–7) |
| TM 8–14 reading | ✅ Lengkap | OK, sumber MD lengkap |
| Review UTS/UAS | ❌ Tidak ada | Bisa generate dari `pengbis_master_TM1-14_FULL.md` atau Case Bank |
| Bank Soal | ⚠️ Belum integrasi | `pengbis_CASE_DAN_LATIHAN.md` belum dipakai courseRegistry |

---

## 6. EKT109 — Pengantar Teori Ekonomi / PTE (Semester 2)

### Status data website
- **Sumber TM 1–7 (micro):** `src/data/pte/pteData.ts` lokasi `tm1`–`tm7` (legacy)
- **Sumber TM 8–14 (macro):** `src/data/pte/ptePraUAS.ts` (2.048 baris, sangat rich) lokasi `PTE_PRA_UAS_READINGS`. Di-merge ke `EKT109_READINGS` via `...PTE_PRA_UAS_READINGS` ✅
- **Toolkit:** `EKT109_PRA_UAS_TOOLKIT` = formula sheet + exam map + references (dari `PTE_PRA_UAS_SUPPLEMENT`). Dipakai sebagai `customReferensi`.
- **Question source:** `ptePraUASQuestionSource.ts` (832 baris) — ❌ **tidak diimpor dari mana-mana**. Mungkin draft bank soal yang belum diintegrasikan.
- **TM ter-cover:** TM 1–14 ✅
- **Review:** UAS toolkit ada (formula + exam map), tapi tidak ada simulasi soal terpisah.

### Sumber fisik di `C:\cek\PTE\`
- ✅ `Economics-Mankiw.pdf`, `Economics.pdf` (Samuelson?)
- ✅ `Principles of Microeconomics-Mankiw-7th ed. (1).pdf`
- ✅ `PTE Pra UAS.html`, `PTE_UAS_Semester2_Study_Hub.html`
- ✅ `PTE pra UAS/pte-pra-uas-package/` (index.html + merge-ready)

### Gap & Rekomendasi
| Item | Status | Aksi |
|---|---|---|
| TM 1–14 reading | ✅ Lengkap | OK |
| Bank soal Pra-UAS | ⚠️ Ada file tapi tidak diintegrasi | Import `ptePraUASQuestionSource.ts` ke courseRegistry atau bikin tab Bank Soal |
| Review UTS | ❌ Tidak ada | Tambah jika perlu |

---

## 7. PJK201 — Perpajakan I (Semester 2)

### Status data website
- **Sumber TM 1–7:** `src/data/perpajakan/perpajakanPraUTS.ts` (515 baris) — punya `blocks[]` dengan TM 1–7 + `referensi` (Dasar Hukum).
- **Sumber TM 8–14:** `src/data/perpajakan/perpajakanPraUAS.ts` (2.251 baris) — punya `modules[]` TM 8–14, masing-masing dengan `lawBasis`, `body_markdown`, dan `pages[]` per halaman. **Sangat detail.**
- **TM ter-cover:** TM 1–14 ✅
- **Custom referensi:** Dasar Hukum dari `perpajakanPraUTS.ts` di-load sebagai `customReferensi` ✅
- **Review:** ❌ Tidak ada simulasi UTS/UAS terpisah.

### Sumber fisik di `C:\cek\Perpajakan\`
- ✅ TM 9–15 PDF terpisah per TM (sebelumnya sudah kuekstrak ke `C:\cek\NotebookLM\Perpajakan\`)
- ✅ `Perpajakan_I_UAS_Interactive_Study_Guide_AZ_Enhanced_plus_Latihan_UAS.html`
- ✅ `Perpajakan pra UAS/PERPAJAKAN_PRA_UAS_TM9-15_SOURCE_CHUNKS.md` (5.490 baris source)

### Gap & Rekomendasi
| Item | Status | Aksi |
|---|---|---|
| TM 1–14 reading | ✅ Lengkap & detail | OK |
| Review UTS/UAS | ❌ Belum ada | Bisa generate dari interactive study guide HTML |
| Konsistensi numbering | ⚠️ PDF asli pakai TM 9–15; website pakai TM 8–14 | Sudah konsisten di data (TM 8–14), aman |

---

## 8. MAS122 — Statistik untuk Akuntan (Semester 2)

### Status data website
- **Sumber:** `src/data/statistik/statistikData.ts` (318 baris untuk 14 TM ≈ **~23 baris/TM**). Sangat ringkas.
- **TM ter-cover:** TM 1–14 ✅ (semua ada, tapi konten per TM cuma title + ref + sedikit blocks)
- **Review:** ❌ Tidak ada
- **Tidak ada file pendukung lain** di `src/data/statistik/`

### Sumber fisik di `C:\cek\Statistik\`
- ✅ Buku Lind 17th ed. (PDF, sangat besar)
- ✅ Buku Anderson For Dummies 2024 (PDF)
- ✅ `Silabus Statistik untuk Akuntan2024.pdf`
- ✅ `statistik-akuntan-week-8-14-modul-terpadu-10-FIX (1).html` (modul Pra-UAS terpadu)
- ✅ Folder `Statistik pra UAS/statistik_akuntan_integrasi/` (HTML lengkap, component.js, panduan integrasi)
- ✅ `UAS STATIS 2024.pdf` (di root /cek, soal UAS asli)

### Gap & Rekomendasi
| Item | Status | Aksi |
|---|---|---|
| TM 1–14 reading | ⚠️ **Sangat ringkas** (avg 23 baris/TM) | **Prioritas tinggi**: enrich pakai isi `statistik-akuntan-week-8-14-modul-terpadu-10-FIX.html` dan buku Lind/Anderson |
| TM 1–7 detail | ⚠️ Belum ada modul terpadu | Bahan ajar TM 1–7 belum dijadikan source seperti TM 8–14. Perlu split & enrich |
| Review UTS/UAS | ❌ Tidak ada | Tambahkan dari `UAS STATIS 2024.pdf` |
| Practice cases | ❌ Tidak ada | Bisa dari buku Lind chapter exercises |

---

## 9. 8 Matkul PDB & Wajib Universitas (Semester 1)

Yaitu: Agama, Pancasila, Bahasa Indonesia, Kewarganegaraan, Data dan Pustaka, Logika dan Pemikiran Kritis, Pengantar Kolaborasi Keilmuan, Pengembangan Diri Kewirausahaan.

### Status
- Semua pakai `makeMateri('<prefix>', 1, 7/14)` di `courseData.ts` → hanya placeholder dengan title `"<prefix> — Tatap Muka N"`.
- ❌ Tidak ada file `*Data.ts` dedicated.
- ❌ Tidak ada folder sumber di `C:\cek\`.

### Rekomendasi
By design ini bukan prioritas (matkul wajib univ bersifat sama untuk semua prodi & jadwal/materi sering ganti). Bisa diabaikan kecuali ingin "lengkap 100%".

---

## 10. Inventaris file yang BELUM dipakai (potensi enrichment)

| File / Folder | Matkul | Status |
|---|---|---|
| `C:\cek\src\data\pte\ptePraUASQuestionSource.ts` (832 baris) | PTE | ⚠️ Tidak diimpor — bank soal Pra-UAS PTE menggantung |
| `C:\cek\Pengantar Bisnis\Pengbis pra UAS\pengbis_import_pack\chunks\TM01-TM07*.md` | Pengbis | ⚠️ Tidak dipakai (TM 1-7 pakai pengbisData.ts ringkas) |
| `C:\cek\Pengantar Bisnis\Pengbis pra UAS\pengbis_import_pack\pengbis_CASE_DAN_LATIHAN.md` | Pengbis | ⚠️ Belum integrasi bank soal |
| `C:\cek\Pengantar Bisnis\UTS_Survival_Guide_BYAN_v2_Super.html` | Pengbis | ⚠️ Sumber UTS belum dijadikan reading |
| `C:\cek\Statistik\Statistik pra UAS\statistik_akuntan_integrasi\*` | Statistik | ⚠️ Konten kaya tapi `statistikData.ts` masih ringkas |
| `C:\cek\UAS STATIS 2024.pdf` | Statistik | ⚠️ Belum jadi review UAS |
| `C:\cek\AKM I\AKM pra UAS\akm1_pra_uas_merge_pack\chunks_markdown\*` | AKM I | ✅ Sudah ada di `akm1Data.ts` (chunks legacy, bisa diabaikan) |
| `C:\cek\AKBI\AKBI pra UAS\AKBI_Pra_UAS_Integrasi_Website\akbi_content_bundle.json` | AKBI | ✅ Mungkin sudah di-merge ke `akbiMasterReadings*.ts` |

---

## Rekomendasi prioritas

### 🔴 P0 (urgent — gap konten)
1. **AKK106 TM 8–14**: Tulis materi reading TM 8–14 (rujuk WKK Ch. 8–14). Tambah `akdasPraUAS.ts` mengikut pola `akdasPraUTS.ts` yang sudah ada.

### 🟠 P1 (enrichment penting)
2. **Statistik TM 1–14**: Enrich pakai sumber `statistik-akuntan-week-8-14-modul-terpadu-10-FIX.html` (untuk TM 8–14) dan buku Lind/Anderson untuk TM 1–7. Sangat tipis sekarang.
3. **Pengbis TM 1–7**: Enrich pakai `pengbis_import_pack/chunks/TM01–07*.md` yang sudah ada (hanya perlu dipakai di registry). Saat ini avg 38 baris/TM, padahal sumber siap.

### 🟡 P2 (penyempurnaan)
4. **EKPA review UTS/UAS**: Generate simulasi UTS dari TM 1–6 dan UAS dari `ekpaPraUasTm8_14.quiz`.
5. **PTE bank soal**: Import `ptePraUASQuestionSource.ts` ke registry atau bikin tab Bank Soal.
6. **PJK simulasi UTS/UAS**: Tambah review reading dari `Perpajakan_I_UAS_Interactive_Study_Guide_AZ_Enhanced_plus_Latihan_UAS.html`.

### 🔵 P3 (opsional)
7. **8 matkul PDB Sem 1**: Hanya kalau memang ingin lengkap 100%. By design bukan prioritas.

---

## Catatan teknis

- Audit ini hanya melihat **data layer** (`src/data/`). Tidak mengaudit komponen UI yang merender data tersebut.
- Untuk verifikasi visual, jalankan `npm run dev` lalu buka tiap mata kuliah → tab Materi → cek setiap TM apakah blocks ter-render.
- Folder `C:\cek\NotebookLM\Perpajakan\` yang sebelumnya kubuat adalah hasil ekstraksi untuk NotebookLM, **bukan** bagian dari data website (terpisah).
