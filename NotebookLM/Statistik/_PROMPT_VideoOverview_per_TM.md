# Prompt Customize NotebookLM — Video Overview per TM (MAS122 Statistik)

Saat klik **Studio → Video Overview → Customize**, paste prompt yang sesuai TM-nya.

## Pola umum Statistik (PENTING)

> Bahasa Indonesia, durasi 6–10 menit (TM 1–7) atau 8–12 menit (TM 8–14),
> gaya dosen S1 Akuntansi UNAIR menjelaskan mahasiswa sebelum UTS/UAS.
> **Hanya gunakan isi source yang aku upload**, jangan menambah materi dari luar.
> Susun: (1) definisi & framework, (2) **rumus dengan notasi matematika persis**
> (μ, σ, x̄, s, β, ρ, p̂ — jangan ganti simbol Yunani jadi huruf Latin),
> (3) tabel komparasi sebagai slide visual, (4) contoh numerik kalau ada,
> (5) **asumsi** uji, (6) **jebakan ujian**. Untuk TM 8–14, **bahas SPSS output**
> per istilah dengan interpretasi praktis.

---

---

## 🎬 PROMPT UNTUK VIDEO KOMPREHENSIF (1 video per fase)

> Pakai prompt ini kalau ingin **1 video untuk seluruh Pra-UTS (TM 1-7)** atau **1 video untuk seluruh Pra-UAS (TM 8-14)**.  
> Upload **hanya** `00_Pra_UTS_TM1-7_Gabungan.md` atau `00_Pra_UAS_TM8-14_Gabungan.md` sebagai source.

### Video Komprehensif Pra-UTS (TM 1–7)

```
Bahasa Indonesia, durasi **18–25 menit**, gaya dosen Pra-UTS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UTS_TM1-7_Gabungan.md`). 

⚠️ **WAJIB:** Sebut **rumus dengan notasi matematika persis** (μ, σ, x̄, s, p̂, β, ρ, χ²) — jangan ganti simbol Yunani jadi huruf Latin.

**Struktur video (7 segmen TM dasar inferensial):**
1. **TM 1 — Pengenalan Statistik** (2 cabang deskriptif vs inferensial, populasi vs sampel, parameter vs statistik, skala NOIR)
2. **TM 2 — Tendensi Sentral** (mean `x̄ = Σx ÷ n`, median, modus, weighted mean, kapan pakai apa)
3. **TM 3 — Dispersi** (range, IQR, **varians `s² = Σ(x − x̄)² ÷ (n − 1)`**, **std dev `s = √s²`**, CV, aturan empiris 68-95-99,7%, skewness)
4. **TM 4 — Probabilitas & Distribusi** (3 aturan, binomial `P(X=x) = C(n,x)·pˣ·(1−p)ⁿ⁻ˣ`, normal, standardisasi `Z = (x − μ) ÷ σ`, CLT)
5. **TM 5 — Estimasi** (titik vs interval, **3 rumus CI**: σ diketahui, σ tidak diketahui (t, df=n-1), proporsi `p̂ ± Z·√[p̂(1−p̂)/n]`, margin of error)
6. **TM 6 — Uji Hipotesis 1** (5 langkah uji, H₀ vs H₁ one/two-tailed, p-value vs α, error tipe I (α) vs II (β))
7. **TM 7 — Uji Hipotesis 2** (uji-t 1 sampel `t = (x̄ − μ₀) ÷ (s/√n)`, 2 sampel independen, paired t-test, power = 1−β)

**Tone:** Setiap rumus disebut **notasinya persis**. Tabel "kapan pakai uji apa" jadikan slide utama. Tutup dengan **5 jebakan ujian UTS** (mean vs median pada outlier, df salah, CI vs PI, salah tail).
```

### Video Komprehensif Pra-UAS (TM 8–14)

```
Bahasa Indonesia, durasi **22–30 menit**, gaya dosen Pra-UAS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UAS_TM8-14_Gabungan.md`). 

⚠️ **WAJIB:** Sebut **rumus dengan notasi persis** + **bahas setiap istilah SPSS** (Descriptives, Levene, ANOVA table, Post Hoc, Coefficients, Model Summary, Durbin-Watson, VIF, dll) dengan **interpretasi praktis**, bukan hanya definisi.

**Struktur video (7 segmen TM analisis multivariat):**
1. **TM 8 — ANOVA** (`F = Var antar ÷ Var dalam`, kapan pakai (≥3 grup), kenapa bukan banyak uji-t, **SPSS output**: Descriptives/Levene/ANOVA/Post Hoc Tukey, asumsi normalitas+homogenitas, alternatif Kruskal-Wallis, glossary Factor/Level/Between/Within/F-statistic/Eta squared)
2. **TM 9 — Regresi & Korelasi 1** (Pearson r dari −1 sampai +1, korelasi ≠ kausalitas, regresi `Ŷ = a + bX`, kuadrat terkecil, interpretasi intercept-slope-R², **SPSS: Correlation table, Coefficients**)
3. **TM 10 — Regresi 2** (berganda `Ŷ = b₀ + b₁X₁ + ... + bₖXₖ`, Adjusted R², **5 asumsi**: linearitas/independensi residual (Durbin-Watson)/homoskedastisitas/normalitas residual (P-P Plot)/multikolinearitas (VIF<10), heteroskedastisitas sebagai jebakan, **SPSS: Model Summary, ANOVA regression, Coefficients+VIF, Residual stats**)
4. **TM 11 — Time Series** (trend/seasonal/cyclical/irregular, moving average, exponential smoothing, peramalan, MAD/MAPE)
5. **TM 12 — Non-Parametrik** (Mann-Whitney (vs t 2-sample indep), Wilcoxon (vs paired t), Kruskal-Wallis (vs ANOVA), **Chi-square `χ² = Σ((O−E)² ÷ E)`** independensi & goodness-of-fit)
6. **TM 13 — Software & Persiapan Proyek** (SPSS workflow Variable→Data→Analyze, JASP/R alternative, workflow proyek akademik, etika data)
7. **TM 14 — Presentasi Proyek** (5 bagian laporan: latar→data&metode→hasil→interpretasi→kesimpulan, prinsip visualisasi, etika sajikan apa adanya)

**Tone:** Setiap uji disertai **asumsi** dan **jebakan**. Setiap istilah SPSS diinterpretasi (contoh: "Levene p=0.07 → varians homogen → asumsi ANOVA terpenuhi"; "VIF>10 → multikolinearitas serius"). Tutup dengan **strategi memilih uji 4-langkah**: (1) berapa kelompok? (2) skala data? (3) berpasangan/independen? (4) asumsi terpenuhi? → pilih uji.
```

---

## 🎯 PROMPT PER TM (workflow lama: 14 video per matkul)

Bagian di bawah ini untuk workflow lama (1 video = 1 TM). Pakai kalau ingin video pendek per topik.

## TM 01 — Pengenalan Statistik
> Fokus ke: **2 cabang statistik** (deskriptif vs inferensial), **populasi vs
> sampel** (parameter vs statistik), **jenis data** (kualitatif vs kuantitatif,
> diskrit vs kontinu), **skala pengukuran NOIR** (Nominal, Ordinal, Interval,
> Rasio) dengan contoh akuntansi/bisnis. Mnemonic NOIR sebagai punchline.

## TM 02 — Tendensi Sentral
> Fokus ke: **mean** (rumus `x̄ = Σx ÷ n`), **median**, **modus**, **weighted mean**
> (`x̄ = Σ(w·x) ÷ Σw`), **kapan pakai mean vs median vs modus** (tabel
> komparasi: data simetris → mean, ada outlier → median, kategorik → modus).
> Contoh hitungan dengan outlier (data gaji 4, 5, 5, 6, 30).

## TM 03 — Dispersi (Penyebaran) 🔑
> Fokus ke: **range, IQR, varians, std deviation, CV**. **Rumus persis**:
> `s² = Σ(x − x̄)² ÷ (n − 1)` (sample), `s = √s²`. **Aturan empiris 68-95-99,7%**
> untuk data normal. **Koefisien variasi CV = (s ÷ x̄) × 100%** untuk
> bandingkan variabilitas antar-kelompok. **Skewness**: mean > median = miring
> kanan, mean < median = miring kiri.

## TM 04 — Probabilitas & Distribusi 🔑
> Fokus ke: **3 aturan probabilitas** (penjumlahan, perkalian independen,
> komplemen), **distribusi binomial** (`P(X=x) = C(n,x)·pˣ·(1−p)ⁿ⁻ˣ`, mean = np),
> **distribusi normal** (bell, μ, σ), **standardisasi Z** (`Z = (x − μ) ÷ σ`),
> dan **Teorema Limit Pusat (CLT)** — kunci kenapa distribusi sampel mean
> mendekati normal untuk n ≥ 30. Jelaskan kenapa CLT jadi fondasi inferensial.

## TM 05 — Estimasi (Poin & Interval) 🔑
> Fokus ke: **estimasi titik vs interval**, **3 rumus CI**: `CI = x̄ ± Z(σ/√n)`
> (σ diketahui), `CI = x̄ ± t(s/√n)` (σ tidak diketahui, df=n-1), `CI proporsi
> = p̂ ± Z·√[p̂(1−p̂)/n]`. **Margin of error**, hubungan tingkat keyakinan vs
> lebar interval (95% lebih lebar dari 90%), **ukuran sampel** untuk margin
> tertentu.

## TM 06 — Uji Hipotesis (Bagian 1): Mean & Proporsi
> Fokus ke: **5 langkah uji hipotesis** (rumuskan H₀ & H₁, tetapkan α, hitung
> statistik uji, bandingkan/p-value, putuskan), **H₀ vs H₁** (one-tailed vs
> two-tailed), **error tipe I (α)** vs **tipe II (β)**, **p-value vs α**
> (tolak H₀ bila p < α), uji untuk **mean (Z atau t)** dan **proporsi (Z)**.
> Tabel langkah-langkah jadi slide utama.

## TM 07 — Uji Hipotesis (Bagian 2): Perbedaan Rata-rata
> Fokus ke: **uji-t 1 sampel** vs **2 sampel independen** vs **paired t-test**.
> **Rumus uji-t 1 sampel**: `t = (x̄ − μ₀) ÷ (s/√n)`. Pilih uji berdasar:
> berapa kelompok, berpasangan/tidak, skala data. **Power = 1 − β**, hubungan
> dengan n dan effect size. Jebakan: salah pilih uji = kesimpulan keliru.

## TM 08 — ANOVA 🔑🔑
> Fokus ke: **logika ANOVA** (variasi between vs within), **F-statistic**
> (`F = Variansi antar kelompok ÷ Variansi dalam kelompok`), **kapan ANOVA**
> (≥ 3 kelompok), kenapa bukan banyak uji-t (error tipe I kumulatif).
> **Wajib bahas SPSS output**: Descriptives, Levene's Test, ANOVA table,
> Post Hoc (Tukey). **Asumsi**: independensi, normalitas residual, homogenitas
> varians (Levene). Bila dilanggar → Kruskal-Wallis. **Glossary istilah**:
> Factor, Level, Between groups, Within groups, F-statistic, Post hoc,
> Eta squared.

## TM 09 — Regresi & Korelasi (Bagian 1) 🔑
> Fokus ke: **korelasi Pearson r** (rentang −1 sampai +1), interpretasi
> kekuatan & arah, **scatterplot** sebelum hitung r, **korelasi ≠ kausalitas**.
> **Regresi linear sederhana** `Ŷ = a + bX`, **metode kuadrat terkecil**
> (minimasi Σ(Y − Ŷ)²), interpretasi **intercept** (Y saat X=0), **slope**
> (perubahan Y per unit X), **R²** (proporsi variasi Y dijelaskan X).
> **SPSS output**: Correlation table, Coefficients.

## TM 10 — Regresi & Korelasi (Bagian 2) 🔑🔑
> Fokus ke: **regresi linear berganda** `Ŷ = b₀ + b₁X₁ + b₂X₂ + ... + bₖXₖ`,
> **Adjusted R²** (penyesuaian jumlah prediktor), **5 asumsi**:
> (1) linearitas, (2) independensi residual (cek Durbin-Watson dekat 2),
> (3) homoskedastisitas (varians residual konstan), (4) normalitas residual
> (P-P Plot), (5) **multikolinearitas** (VIF < 10). **Heteroskedastisitas**
> sebagai jebakan. **Extrapolation** = bahaya. **Wajib bahas SPSS output
> lengkap**: Model Summary, ANOVA regression, Coefficients, Residual statistics.

## TM 11 — Time Series (Analisis Seri Waktu) 🔑
> Fokus ke: **4 komponen time series**: trend (jangka panjang), seasonal
> (pola tahunan), cyclical (siklus ekonomi), irregular (acak). **Smoothing
> methods** (moving average, exponential smoothing), **peramalan/forecasting**.
> Contoh: peramalan penjualan, audit revenue, deteksi anomali transaksi.
> Hubungkan dengan akuntansi (siklus bisnis → laporan keuangan).

## TM 12 — Metode Non-parametrik 🔑
> Fokus ke: **kapan pakai non-parametrik** (data ordinal, distribusi tidak
> normal, sampel kecil), **uji-uji utama**:
> - **Mann-Whitney U** (alternatif uji-t 2 sampel independen)
> - **Wilcoxon signed-rank** (alternatif paired t-test)
> - **Kruskal-Wallis** (alternatif ANOVA satu arah)
> - **Chi-square independensi** (`χ² = Σ((O − E)² ÷ E)`)
> - **Chi-square goodness-of-fit**
>
> Tabel: parametrik vs non-parametrik (kapan, asumsi, statistik uji).

## TM 13 — Perangkat Lunak Statistik & Persiapan Proyek
> Fokus ke: **SPSS workflow** (Variable View → Data View → Analyze menu),
> **alternatif** (JASP gratis, R untuk reproducibility), workflow proyek
> akademik: rumusan masalah → metode → data collection → analysis →
> interpretation → write-up. Etika: tidak cherry-pick data, tidak
> menyembunyikan hasil tidak signifikan.

## TM 14 — Presentasi Proyek
> Fokus ke: **5 bagian laporan/presentasi**:
> (1) latar belakang & pertanyaan penelitian,
> (2) data & metode (uji + alasan),
> (3) hasil (tabel/grafik + nilai uji + p-value),
> (4) interpretasi & keterbatasan,
> (5) kesimpulan & rekomendasi.
>
> **Prinsip visualisasi**: pilih grafik sesuai tujuan (bar = kategori,
> garis = tren, scatter = hubungan), jujur dengan skala sumbu, sorot
> temuan utama. **Etika data**: sajikan apa adanya, termasuk hasil tidak
> signifikan.

---

## Tips khusus Statistik

### Untuk rumus (TM 2, 3, 4, 5, 7, 8, 9, 10, 12)
> "Sebutkan setiap rumus dengan **notasi matematika persis**. Simbol Yunani
> (μ, σ, β, ρ, χ²) jangan diganti huruf Latin. Jelaskan setiap variabel.
> Beri contoh hitungan numerik kalau ada di source. Untuk rumus dengan
> akar/pangkat, tulis dengan benar (`s = √s²`, `n²`)."

### Untuk SPSS output (TM 8, 9, 10, 11, 12)
> "Bahas setiap **istilah SPSS** (Descriptives, Levene, ANOVA, Post Hoc,
> Coefficients, Model Summary, Durbin-Watson, VIF, dll) dengan **interpretasi
> praktis** — bukan hanya definisi. Contoh: 'Levene p=0.07 → varians homogen
> → asumsi ANOVA terpenuhi'. 'VIF > 10 → multikolinearitas serius'."

### Untuk asumsi & jebakan
> "Setiap uji harus disertai **asumsi**-nya dan **jebakan ujian** kalau ada.
> Contoh: ANOVA mensyaratkan normalitas residual; kalau dilanggar → pakai
> Kruskal-Wallis. Regresi mensyaratkan tidak ada multikolinearitas; cek VIF."

### Tips umum

1. **1 notebook = 1 TM**.
2. Untuk **TM 8, TM 10, TM 12**: durasi 10–12 menit supaya bisa bahas SPSS lengkap.
3. Untuk **TM 1–7**: durasi 5–8 menit cukup.
4. **Notebook khusus latihan**: upload hanya `00_Bank_Soal.md` + `00_Formula_Sheet.md`,
   minta "pembahasan 5 soal langkah-demi-langkah dengan rumus persis".
5. **Notebook review menyeluruh**: upload hanya `00_Tabel_Komparasi.md` +
   `00_Formula_Sheet.md`, minta "video review 15 menit semua uji statistik:
   kapan pakai apa, rumus, asumsi".
6. Pakai **Audio Overview** dulu (~3 menit) untuk uji prompt, baru naikin ke Video.
