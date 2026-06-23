# Audit Kesiapan 4 Folder NotebookLM untuk Video Overview

Cakupan: `NotebookLM/Perpajakan/`, `NotebookLM/Pengantar_Bisnis/`, `NotebookLM/PTE/`, `NotebookLM/Statistik/`

---

## TL;DR — Verdict per folder

| Folder | Status | Catatan |
|---|---|---|
| **Perpajakan** | 🟢 **SIAP** | Konten paling kaya (PDF asli + chunks markdown per TM). Cocok untuk video 8–12 menit |
| **Pengantar Bisnis** | 🟢 **SIAP** | Dua file per TM (main + chunk source), pasangan saling melengkapi. TM 5–7 lebih ringkas, TM 8–14 kaya |
| **PTE** | 🟢 **SIAP** | SVG grafik + rumus matematika preserved. TM 1–7 lebih ringkas, TM 8–14 sangat detail |
| **Statistik** | 🟡 **SIAP dengan catatan** | TM 1–7 paling ringkas (1.0–1.4 KB), tapi rumus persis + bank soal kompensasi. TM 8–14 kaya dengan SPSS output |

---

## Detail audit (12 checkpoint)

### ✅ 1. Struktur folder (semua lulus)

| Folder | TM dirs | Root files | README | PROMPT |
|---|---|---|---|---|
| Perpajakan | 14 | 3 (incl. 1 referensi) | ✅ | ✅ |
| Pengantar_Bisnis | 14 | 6 (incl. Case Bank, Glossary, Cheat Sheet, Esai) | ✅ | ✅ |
| PTE | 14 | 6 (incl. Bank Soal, Formula, Exam Map, Referensi) | ✅ | ✅ |
| Statistik | 14 | 7 (incl. Bank Soal, Formula, Tabel, Flashcards, Exam Map) | ✅ | ✅ |

### ✅ 2. File integrity (semua lulus)

- 0 file dengan NUL bytes
- Semua code block markdown tertutup
- Semua tabel markdown valid (header + separator)
- Semua SVG seimbang (open/close tags match)
- Tidak ada karakter aneh di filename (false positive di awal sudah diverifikasi)

### ✅ 3. Konten minimum per TM (semua TM punya ≥ 1 KB markdown)

Semua 4 × 14 = 56 TM folder punya konten markdown ≥ 1 KB → cukup untuk video overview minimum.

### 📊 4. Kekayaan konten per TM

| Folder | Avg size/TM | Min | Max | Distribusi |
|---|---|---|---|---|
| **Perpajakan** | **~75 KB** (PDF + .md) | 4.8 KB (TM 3) | 140 KB (TM 14) | TM 1–7 markdown only (5–10 KB), TM 8–14 PDF + chunks (70–140 KB) |
| **Pengantar Bisnis** | **~11 KB** (2 file) | 4.3 KB (TM 6) | 22 KB (TM 8) | TM 1–7 ringkas (4–9 KB), TM 8–14 kaya (13–22 KB) |
| **PTE** | **~8.7 KB** | 1.7 KB (TM 7) | 25 KB (TM 8) | TM 1–7 sangat ringkas (1.7–3.8 KB), TM 8–14 sangat kaya (6.8–25 KB) |
| **Statistik** | **~3.4 KB** | 1.0 KB (TM 6) | 6.8 KB (TM 8) | TM 1–7 paling ringkas (1.0–1.4 KB), TM 8–14 lumayan (5.3–6.8 KB) |

### ⚠️ 5. Konten ringkas (potensial issue ringan)

TM yang **mungkin perlu file pendamping** untuk video 6+ menit yang berbobot:

| Folder | TM ringkas (< 2 KB) | Mitigasi |
|---|---|---|
| PTE | TM 4 (1.9), TM 5 (2.0), TM 6 (1.7), TM 7 (1.7) | Upload `00_Formula_Sheet.md` (1.8 KB rumus) bersamaan |
| Statistik | TM 1 (1.4), TM 2 (1.0), TM 3 (1.2), TM 4 (1.3), TM 5 (1.1), TM 6 (1.0), TM 7 (1.1) | Upload `00_Formula_Sheet.md` + `00_Tabel_Komparasi.md` + `00_Flashcards.md` (TM 1–7 ada 42 kartu) bersamaan |

Catatan: NotebookLM cukup cerdas untuk membuat 5–6 menit video dari 1 KB markdown padat, tapi hasil terbaik kalau ada source pendamping ≥ 3 KB total.

### ✅ 6. Notasi & format khusus (preserved)

**Notasi Yunani & matematika** (PTE, Statistik): ✅ Preserved persis (Σ, μ, σ, ×, ÷, ≥, ≤, √, π, χ², β, ρ, p̂)

Contoh dari PTE TM 8:
```
Nominal GDP = Σ(P_t × Q_t)
GDP Deflator = (Nominal GDP / Real GDP) × 100
Inflation rate = [(Price Index_t − Price Index_{t−1}) / Price Index_{t−1}] × 100%
```

Contoh dari Statistik TM 3:
```
s² = Σ(x − x̄) ÷ (n − 1)
s = √s²
CV = (s/x̄) × 100%
```

**SVG grafik** (PTE): ✅ Inline embedded, 18 grafik di TM files + 6 di bank soal. NotebookLM akan baca `<title>` & `<desc>` untuk narasi.

### ✅ 7. Prompt customize per TM

| Folder | Section per TM | Status |
|---|---|---|
| Perpajakan | 8 (TM 8–14 + pola umum, TM 1–7 pakai pola umum) | ⚠️ Tidak per-TM individual tapi cukup dengan pola umum |
| Pengantar_Bisnis | **14** (1 per TM) | ✅ Lengkap |
| PTE | **14** (1 per TM, plus tips khusus grafik/rumus/soal) | ✅ Sangat lengkap |
| Statistik | **14** (1 per TM, plus tips khusus SPSS/asumsi/jebakan) | ✅ Sangat lengkap |

### ✅ 8. Limit upload NotebookLM (semua jauh di bawah batas)

- **NotebookLM limit:** 50 sources/notebook, 500 MB total/notebook, ~50 MB/file
- **Reality 4 folder:**
  - File terbesar: TM14 Perpajakan PDF (87 KB) — **0.17% of 50 MB limit** ✅
  - Folder TM terbesar: TM14 Perpajakan (140 KB) — **0.03% of 500 MB** ✅
  - Max files per TM folder: 2 — **4% of 50 sources** ✅

Verdict: Tidak ada masalah upload size sama sekali.

### ✅ 9. File pendamping (root files)

| Folder | Bank Soal | Formula | Glossary/Tabel | Exam Map | Flashcards | Total root |
|---|---|---|---|---|---|---|
| Perpajakan | ❌ | ❌ | ❌ | ❌ | ❌ | 1 (referensi dasar hukum) |
| Pengantar_Bisnis | ✅ (Case Bank) | ❌ | ✅ Glossary + Cheat | ❌ | ❌ | 4 |
| PTE | ✅ (64 soal + 6 SVG) | ✅ | ❌ | ✅ | ❌ | 4 |
| Statistik | ✅ (39 soal) | ✅ | ✅ Tabel Komparasi | ✅ | ✅ (84 kartu) | 5 |

Perpajakan paling minim file pendamping — tapi karena konten PDF + chunks per-TM sudah sangat kaya, ini tidak masalah.

### ✅ 10. README quality

| Folder | Size | Cara pakai | Daftar TM | Tips khusus |
|---|---|---|---|---|
| Perpajakan | 3.3 KB | ✅ | ✅ Tabel topik | ✅ Prompt customize |
| Pengantar_Bisnis | 4.2 KB | ✅ | ✅ Tabel topik + sumber | ✅ Tips video |
| PTE | 5.7 KB | ✅ | ✅ Tabel + coverage grafik/rumus | ✅ Tips khusus grafik & rumus |
| Statistik | 6.8 KB | ✅ | ✅ Tabel + coverage rumus | ✅ Tips khusus rumus + SPSS + asumsi |

### ✅ 11. Konsistensi naming

Format `TMxx_<Topik_Snake_Case>/TMxx_<file>.md` konsisten di semua folder. Mudah diidentifikasi user.

### ✅ 12. Cross-folder konsistensi

Pola yang konsisten di semua 4 folder:
- `_README_NotebookLM.md` (petunjuk)
- `_PROMPT_VideoOverview_per_TM.md` (prompt customize)
- `TMxx_<Slug>/TMxx_<file>.md` (per-TM content)
- `00_*` prefix untuk file pendamping (alfabetis sort ke atas)

---

## Skenario penggunaan & kesiapan

### Skenario A: Generate 1 Video Overview per TM (14 video per matkul)

| Folder | Workflow | Estimasi waktu setup | Hasil |
|---|---|---|---|
| Perpajakan | Drag folder TMxx → upload 2 file (PDF + .md) | 2 menit/TM | Video 8–12 menit dengan dasar hukum lengkap |
| Pengantar_Bisnis | Drag folder TMxx → upload 2 file | 1 menit/TM | Video 6–10 menit dengan case + framework |
| PTE | Drag folder TMxx + (opsional) Formula Sheet → 1–2 file | 1–2 menit/TM | Video 6–12 menit dengan grafik dibahas |
| Statistik | Drag folder TMxx + (opsional) Formula Sheet & Tabel → 1–3 file | 2 menit/TM | Video 6–10 menit dengan rumus + SPSS output |

### Skenario B: Review pra-UTS / pra-UAS menyeluruh (1 video panjang)

| Folder | File yang diupload | Hasil |
|---|---|---|
| Pengantar_Bisnis | Semua chunk source + Case Bank + Glossary | Video review 20–30 menit |
| PTE | Formula Sheet + Exam Map + Bank Soal | Video review pra-UAS |
| Statistik | Formula Sheet + Tabel Komparasi + Exam Map + Bank Soal | Video review pra-UAS |

### Skenario C: Drill latihan soal

| Folder | File | Hasil |
|---|---|---|
| Pengantar_Bisnis | Case Bank + Latihan Esai | Video pembahasan kasus |
| PTE | Bank Soal Pra-UAS (64 soal + SVG) | Video pembahasan top-10 soal |
| Statistik | Bank Soal (39 soal) + Flashcards (84 kartu) | Video drill + audio Q&A |

---

## Issue minor (opsional perbaikan)

### Issue 1: Perpajakan PROMPT hanya 8 section vs 14
**Severity:** 🟡 Minor — saat ini PROMPT pakai pola umum + 7 prompt khusus TM 8–14, plus 1 pola TM 8-14 tips. User tetap bisa generate video, hanya butuh edit prompt sendiri untuk TM 1–7.  
**Fix kalau perlu:** Tambah 7 prompt section khusus untuk TM 1–7 di `_PROMPT_VideoOverview_per_TM.md`.

### Issue 2: Statistik TM 1–7 paling ringkas (1.0–1.4 KB)
**Severity:** 🟡 Minor — masih cukup untuk video 5–6 menit, tapi dosen yang kuat di topic akan minta lebih.  
**Fix kalau perlu:** Source `statistikData.ts` sendiri sudah ringkas — tidak ada yang bisa di-extract lebih. User bisa enrich dengan upload buku Lind/Anderson PDF chapter relevan sebagai source pendamping di NotebookLM.

### Issue 3: PTE TM 1–7 ringkas (1.7–3.8 KB)
**Severity:** 🟡 Minor — sama seperti Statistik, source `pteData.ts` TM 1–7 memang ringkas (mikro).  
**Fix kalau perlu:** Upload `00_Formula_Sheet.md` (1.8 KB) bersamaan supaya konten total >= 4 KB.

---

## Rekomendasi pakai (urutan ideal)

1. **Mulai dari Perpajakan TM 8** (paling kaya, paling siap, dasar hukum lengkap) — uji rasa hasil video.
2. **Lanjut Pengbis TM 8** (case Chobani/Dunkin/Domino di source — bagus untuk demo).
3. **Lanjut PTE TM 8** (Pendapatan Nasional — paling banyak SVG + rumus, test apakah NotebookLM bahas grafik dengan baik).
4. **Lanjut Statistik TM 8** (ANOVA dengan SPSS output — test apakah AI bahas asumsi & jebakan).
5. Kalau 4 video TM 8 hasilnya OK, lanjut TM lain dengan prompt yang sama.

---

## Final verdict

🟢 **SEMUA 4 FOLDER SIAP** untuk di-upload ke NotebookLM dan dibuatkan Video Overview.

- 56 TM (14 × 4 matkul) punya konten minimal cukup.
- 0 file korup, 0 issue format markdown.
- File terbesar 0.17% dari batas NotebookLM — tidak ada concern teknis.
- Prompt customize disiapkan per TM untuk 3 dari 4 folder; Perpajakan pakai pola umum + 7 khusus (acceptable).

Issue minor di atas adalah polish opsional, bukan blocking.
