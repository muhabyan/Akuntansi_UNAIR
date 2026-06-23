# Statistik untuk Akuntan (MAS122) — Materi per TM (Siap NotebookLM)

Folder ini berisi materi MAS122 dipisah **per Tatap Muka (TM 1–14)** untuk
di-upload ke [NotebookLM](https://notebooklm.google.com) supaya bisa
digenerate **Video Overview** (slide + narasi audio AI) per TM.

> ⚠️ **Statistik wajib mendalam karena banyak rumus, notasi matematika, dan
> output SPSS.** Tiap `TMxx_main.md` sudah berisi:
> - **Rumus** dengan notasi persis (μ, σ, x̄, s, β, ρ, p̂, χ², dll)
> - **Tabel komparasi** (kapan pakai uji apa, asumsi, jebakan)
> - **Glossary istilah SPSS** (Factor, Level, Between, Within, F-statistic, dll)
> - **Contoh SPSS output** (Descriptives, Levene, ANOVA, Coefficients, dll)
> - **Asumsi & jebakan ujian**

## Cara pakai

1. Buka NotebookLM → **New notebook** (1 notebook = 1 TM).
2. Beri nama: misal `Stat — TM 8 — ANOVA`.
3. Klik **Add source** → upload `TMxx_main.md` di folder TM yang sesuai.
4. **Untuk TM dengan banyak rumus** (TM 3, 4, 5, 9, 10), tambahkan
   `00_Formula_Sheet.md` sebagai pendamping → AI menyebut rumus persis.
5. Untuk overview lintas-TM, tambahkan `00_Tabel_Komparasi.md` (12 tabel) +
   `00_Exam_Map_Prediksi_UAS.md`.
6. Untuk drill latihan, tambahkan `00_Bank_Soal.md` (39 soal) +
   `00_Flashcards.md` (84 kartu).
7. Setelah source ter-index → **Studio** → **Video Overview** → Generate.

---

## 🎬 DUA WORKFLOW: pilih yang sesuai gaya belajarmu

### Workflow A — VIDEO KOMPREHENSIF (Recommended untuk review pra-ujian)

> **2 video per matkul** (1 untuk Pra-UTS TM 1–7, 1 untuk Pra-UAS TM 8–14).
> Cocok kalau ingin video panjang yang nyambungin antar-TM jadi cerita utuh.

**Langkah:**
1. Buka NotebookLM → **New notebook**. Beri nama: `Statistik — Pra-UTS Komprehensif`.
2. **Add source** → upload `00_Pra_UTS_TM1-7_Gabungan.md` saja (sudah berisi seluruh TM 1–7).
3. Buka **Studio → Video Overview → Customize** → paste prompt **"Video Komprehensif Pra-UTS"** dari `_PROMPT_VideoOverview_per_TM.md`.
4. Generate. Durasi video ~18–35 menit (tergantung matkul).
5. Ulangi untuk Pra-UAS: upload `00_Pra_UAS_TM8-14_Gabungan.md`, pakai prompt **"Video Komprehensif Pra-UAS"**.

**Hasil:** 2 video komprehensif. Hemat waktu setup tapi durasi video lebih panjang.

### Workflow B — VIDEO PER TM (workflow lama)

> **14 video per matkul** (1 per TM). Cocok kalau ingin video pendek yang fokus 1 topik dan mudah dicari ulang.

Drag folder `TMxx_*` ke notebook → pakai prompt **per TM** dari `_PROMPT_VideoOverview_per_TM.md`. Durasi 5–12 menit per video.

**Hasil:** 14 video pendek. Lebih banyak setup tapi gampang scan saat butuh review topik tertentu.

> 💡 **Saran:** mulai dengan Workflow A untuk video Pra-UTS dulu. Kalau hasilnya kurang fokus per topik, fallback ke Workflow B untuk topik kritis.


## Struktur konten per TM

### Pra-UTS (TM 1–7) — Statistik Inferensial Dasar

| Folder | Topik | Sumber | Konten |
|---|---|---|---|
| `TM01_Pengenalan_Statistik` | Cabang statistik, populasi vs sampel, skala NOIR | DA 1 · AA 1 | 1.4K, 0 rumus, 1 tabel |
| `TM02_Tendensi_Sentral` | Mean, median, modus, weighted mean | DA 2–3 · AA 3 | 1.0K, 1 rumus, 1 tabel |
| `TM03_Dispersi_Penyebaran` | Range, IQR, varians, std deviation, CV, aturan empiris 68-95-99,7% | DA 2–3 · AA 4 | 1.1K, 2 rumus |
| `TM04_Probabilitas_Distribusi` | Aturan probabilitas, binomial, distribusi normal, Z-score, CLT | DA 5–7 · AA 6–9 | 1.2K, 2 rumus |
| `TM05_Estimasi_Interval` | Estimasi titik vs interval, CI mean (Z/t), CI proporsi, margin of error | DA 9 · AA 11 | 1.0K, **3 rumus** |
| `TM06_Uji_Hipotesis_1_Mean_Proporsi` | 5 langkah uji hipotesis, H₀ vs H₁, p-value vs α, error tipe I/II | DA 10 · AA 12 | 1.0K, 1 tabel |
| `TM07_Uji_Hipotesis_2_Perbedaan_Rata-rata` | Uji-t 1 sampel, 2 sampel independen, paired t-test, power | DA 11 · AA 12 | 1.1K, 1 rumus, 1 tabel |

### Pra-UAS (TM 8–14) — Analisis Multivariat & SPSS

| Folder | Topik | Sumber | Konten |
|---|---|---|---|
| `TM08_ANOVA` | ANOVA satu arah, F-statistic, post hoc, asumsi (normalitas, homogenitas), Levene's Test | DA 12 + modul terpadu | **6.8K**, 1 rumus, 1 tabel, **glossary 8 istilah, SPSS output**, jebakan |
| `TM09_Regresi_Korelasi_1` | Pearson r, regresi linear sederhana, kuadrat terkecil, intercept-slope-R² | DA 13 · AA 15 + modul | **5.4K**, 1 rumus, 1 tabel, glossary, SPSS output |
| `TM10_Regresi_Korelasi_2` | Regresi berganda, asumsi (linearitas, homoskedastisitas, multikolinearitas, autokorelasi), Durbin-Watson, VIF, Adjusted R² | DA 13 + modul | **5.6K**, 2 rumus, 1 tabel, glossary, SPSS output |
| `TM11_Time_Series` | Komponen trend/seasonal/cyclical/irregular, smoothing, peramalan | DA 18 + modul | **5.3K**, 1 tabel, glossary, contoh |
| `TM12_Non_Parametrik` | Mann-Whitney, Wilcoxon, Kruskal-Wallis, Chi-square (independensi & goodness-of-fit) | DA 16 + modul | **5.5K**, 1 rumus, 2 tabel, glossary, SPSS output |
| `TM13_Software_Statistik_Proyek` | SPSS workflow, JASP, R basics, persiapan proyek akhir akademik | AA 16 + modul | **5.6K**, 1 tabel, contoh proyek |
| `TM14_Presentasi_Proyek` | Struktur laporan & presentasi, visualisasi, etika data | (RPS) + modul | **5.4K**, 1 tabel, contoh kerangka presentasi |

**Total inti: 14 rumus, 12 tabel komparasi, glossary istilah SPSS lengkap di TM 8–14.**

## Coverage notasi & rumus penting

Materi sudah memuat semua notasi matematika persis:

- **TM 2 (mean):** `x̄ = Σx ÷ n`
- **TM 3 (varians, std dev):** `s² = Σ(x − x̄)² ÷ (n − 1)`, `s = √s²`, `CV = (s/x̄) × 100%`
- **TM 4 (Z-score, binomial):** `Z = (x − μ) ÷ σ`, `P(X=x) = C(n,x)·pˣ·(1−p)ⁿ⁻ˣ`
- **TM 5 (CI):** `CI = x̄ ± Z(σ/√n)`, `CI = x̄ ± t(s/√n)`, `CI proporsi = p̂ ± Z·√[p̂(1−p̂)/n]`
- **TM 7 (uji-t):** `t = (x̄ − μ₀) ÷ (s/√n)`
- **TM 8 (F-statistic):** `F = Variansi antar kelompok ÷ Variansi dalam kelompok`
- **TM 9 (regresi):** `Ŷ = a + bX`
- **TM 10 (regresi berganda):** `Ŷ = b₀ + b₁X₁ + b₂X₂ + ... + bₖXₖ`
- **TM 12 (chi-square):** `χ² = Σ((O − E)² ÷ E)`

## File pendamping di root (SETARA PTE)

| File | Isi | Pakai untuk |
|---|---|---|
| `00_Formula_Sheet.md` | **14 rumus** dari TM 1–14, dikelompokkan per TM | Pendamping konfirmasi rumus pasti |
| `00_Tabel_Komparasi.md` | **12 tabel** ringkasan (kapan pakai uji apa, asumsi, perbandingan) | Video overview lintas-TM atau review menyeluruh |
| `00_Bank_Soal.md` | **39 soal kurasi**: 26 Quiz UTS (TM 1–7) + 8 Quiz UAS (TM 8–14, topic+skill+difficulty) + 5 Case/Essay | Video pembahasan latihan, drill mandiri |
| `00_Flashcards.md` | **84 flashcards Q&A** (42 Pra-UTS + 42 Pra-UAS) per TM, per kategori (Definisi/Rumus/Konsep/Perbandingan) | Video drill cepat atau audio review menjelang ujian |
| `00_Exam_Map_Prediksi_UAS.md` | Peta materi TM 8–14, checklist persiapan, prediksi topik, jebakan ujian, strategi belajar 7-hari | Video review pra-UAS / planning |

## Tips khusus Statistik

### Untuk rumus
> **Wajib di prompt customize:** "Sebutkan setiap rumus dengan **notasi matematika
> persis** (μ, σ, x̄, s, β, ρ, p̂, χ², dll). Jelaskan setiap variabel dan beri
> contoh hitungan numerik kalau ada di source. Jangan ganti simbol Yunani
> jadi huruf Latin."

### Untuk SPSS output (TM 8–14)
> **Wajib di prompt:** "Bahas setiap glossary SPSS (Descriptives, Levene, ANOVA,
> Post Hoc, Coefficients, Model Summary, Durbin-Watson, VIF, dll) dengan
> **interpretasi praktis** — bukan hanya definisi. Contoh: 'Levene's Test p=0.07
> berarti varians homogen → asumsi ANOVA terpenuhi'."

### Untuk asumsi & jebakan
> **Wajib di prompt:** "Setiap uji harus disertai **asumsi**-nya dan **jebakan
> ujian** kalau ada. Contoh: ANOVA mensyaratkan normalitas residual; kalau
> dilanggar → pakai Kruskal-Wallis."

### Untuk latihan soal
> "Pilih 5–10 soal yang paling representatif dari bank soal, bahas satu per
> satu: baca pertanyaan, tunjukkan opsi, pilih jawaban, jelaskan kenapa benar
> dan kenapa opsi lain salah. Sebut **dasar teori** dan **rumus** yang dipakai."

### Tips umum

1. **1 notebook = 1 TM**.
2. **TM 8–14 lebih kaya** dari TM 1–7. Video durasi:
   - TM 1–7: 5–8 menit cukup
   - TM 8–14: 8–12 menit (banyak SPSS output + glossary)
3. Untuk **TM