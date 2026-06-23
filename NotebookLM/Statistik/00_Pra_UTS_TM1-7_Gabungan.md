# Statistik untuk Akuntan (MAS122) — Modul Pra UTS TM1-7 (TM 1–7)

*Modul gabungan untuk Video Overview komprehensif. Berisi seluruh konten TM 1 sampai TM 7 dalam 1 file.*

**Cara pakai NotebookLM:** Upload **hanya file ini** sebagai satu source. Lalu Studio → Video Overview → Customize → paste prompt komprehensif dari `_PROMPT_VideoOverview_per_TM.md`.

---

## Daftar Isi
- [TM 1 — Pengenalan Statistik](#tm-1)
- [TM 2 — Tendensi Sentral](#tm-2)
- [TM 3 — Dispersi (Penyebaran)](#tm-3)
- [TM 4 — Probabilitas & Distribusi](#tm-4)
- [TM 5 — Estimasi (Poin & Interval)](#tm-5)
- [TM 6 — Uji Hipotesis (1): Mean & Proporsi](#tm-6)
- [TM 7 — Uji Hipotesis (2): Perbedaan Rata-rata](#tm-7)

---

<a id="tm-1"></a>

# TM 1 — Pengenalan Statistik


*Referensi: DA 1 · AA 1*

Statistik adalah ilmu mengumpulkan, mengolah, menyajikan, dan menafsirkan data untuk pengambilan keputusan. Dalam akuntansi & bisnis, statistik dipakai untuk audit sampling, peramalan, dan analisis kinerja.

## 🎯 Tujuan Pembelajaran
- Membedakan statistik deskriptif & inferensial.
- Membedakan populasi vs sampel, parameter vs statistik.
- Mengklasifikasikan jenis data & skala pengukuran.

---

## A. Dua Cabang Statistik


- **Statistik deskriptif:** meringkas & menyajikan data (tabel, grafik, mean, standar deviasi).
- **Statistik inferensial:** menarik kesimpulan tentang **populasi** berdasarkan **sampel** (estimasi & uji hipotesis).


| Istilah | Makna |
|---|---|
| Populasi | Seluruh objek yang diteliti |
| Sampel | Sebagian populasi yang diamati |
| Parameter | Ukuran populasi (μ, σ, p) |
| Statistik | Ukuran sampel (x̄, s, p̂) |


## B. Jenis Data & Skala Pengukuran


- **Kualitatif (kategorik)** vs **Kuantitatif (numerik: diskrit/kontinu).**
- **Nominal:** kategori tanpa urutan (jenis kelamin).
- **Ordinal:** kategori berurutan (peringkat kepuasan).
- **Interval:** jarak bermakna, tanpa nol mutlak (suhu °C).
- **Rasio:** ada nol mutlak (pendapatan, berat).


> **💡 Mnemonic skala: NOIR**
> **N**ominal → **O**rdinal → **I**nterval → **R**asio (makin ke kanan makin tinggi tingkat pengukurannya).



---

<a id="tm-2"></a>

# TM 2 — Tendensi Sentral


*Referensi: DA 2–3 · AA 3*

Ukuran pemusatan menggambarkan "nilai khas" suatu data: rata-rata, nilai tengah, dan nilai tersering.

## 🎯 Tujuan Pembelajaran
- Menghitung mean, median, modus.
- Memilih ukuran pemusatan yang tepat.
- Memahami pengaruh outlier.

---

## A. Tiga Ukuran Utama


**📐 Rumus.** `Mean (rata-rata): x̄ = Σx ÷ n`  
*Catatan: Paling umum, tetapi sensitif terhadap outlier.*


- **Median:** nilai tengah data terurut; tahan terhadap outlier.
- **Modus:** nilai paling sering muncul; cocok untuk data kategorik.


## B. Memilih yang Tepat


| Situasi | Ukuran terbaik |
|---|---|
| Data simetris, tanpa outlier | Mean |
| Ada outlier / data miring (skewed) | Median |
| Data kategorik | Modus |


> **🔑 Mean tertimbang**
> Untuk data dengan bobot berbeda (mis. IPK): x̄ = Σ(w·x) ÷ Σw.


#### 💡 Contoh: Contoh

Data gaji (juta): 4, 5, 5, 6, 30. Mean = 50÷5 = **10** (terdistorsi outlier 30). Median = **5**, Modus = **5** → median lebih mewakili.



---

<a id="tm-3"></a>

# TM 3 — Dispersi (Penyebaran)


*Referensi: DA 2–3 · AA 4*

Ukuran penyebaran menunjukkan seberapa jauh data tersebar dari pusatnya — kunci menilai risiko & konsistensi.

## 🎯 Tujuan Pembelajaran
- Menghitung range, varians, standar deviasi.
- Menafsirkan koefisien variasi.
- Memahami aturan empiris (empirical rule).

---

## A. Ukuran Penyebaran


**📐 Rumus.** `Varians sampel: s² = Σ(x − x̄)² ÷ (n − 1)`  
*Catatan: Populasi memakai pembagi N dan rata-rata μ.*


**📐 Rumus.** `Standar deviasi: s = √s²`  
*Catatan: Satuan sama dengan data; makin besar = makin menyebar.*


- **Range** = nilai maks − min (paling sederhana).
- **IQR** = Q3 − Q1 (rentang antarkuartil, tahan outlier).
- **Koefisien variasi (CV)** = (s ÷ x̄) × 100% — membandingkan variabilitas relatif antar kelompok.


## B. Aturan Empiris (data normal)


- ≈ **68%** data dalam ±1 standar deviasi dari mean.
- ≈ **95%** dalam ±2 standar deviasi.
- ≈ **99,7%** dalam ±3 standar deviasi.


> **💡 Skewness**
> Mean > Median → miring **kanan** (positif). Mean < Median → miring **kiri** (negatif). Mean ≈ Median → simetris.



---

<a id="tm-4"></a>

# TM 4 — Probabilitas & Distribusi


*Referensi: DA 5–7 · AA 6–9*

Probabilitas mengukur ketidakpastian (0–1). Distribusi peluang menjelaskan bagaimana nilai variabel acak tersebar — fondasi seluruh statistik inferensial.

## 🎯 Tujuan Pembelajaran
- Menerapkan aturan dasar probabilitas.
- Menggunakan distribusi binomial.
- Menggunakan distribusi normal & standardisasi Z.

---

## A. Aturan Dasar Probabilitas


- **Aturan penjumlahan:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- **Aturan perkalian (independen):** P(A ∩ B) = P(A) × P(B).
- **Komplemen:** P(Aᶜ) = 1 − P(A).


## B. Distribusi Binomial (diskrit)


**📐 Rumus.** `P(X = x) = C(n,x) · pˣ · (1 − p)ⁿ⁻ˣ`  
*Catatan: n percobaan, peluang sukses p, x jumlah sukses. Mean = np.*


## C. Distribusi Normal (kontinu)


Berbentuk lonceng simetris, ditentukan oleh **μ** (pusat) dan **σ** (sebaran). Untuk menghitung peluang, nilai distandardisasi menjadi skor **Z**.


**📐 Rumus.** `Z = (x − μ) ÷ σ`  
*Catatan: Z menyatakan berapa standar deviasi suatu nilai dari mean; pakai tabel Z untuk peluang.*


> **🔑 Teorema Limit Pusat (CLT)**
> Untuk n cukup besar (≥ 30), distribusi rata-rata sampel mendekati **normal** apa pun bentuk populasinya — dasar estimasi & uji hipotesis.



---

<a id="tm-5"></a>

# TM 5 — Estimasi (Poin & Interval)


*Referensi: DA 9 · AA 11*

Estimasi menggunakan data sampel untuk menebak parameter populasi, lengkap dengan tingkat keyakinan (confidence).

## 🎯 Tujuan Pembelajaran
- Membedakan estimasi titik & interval.
- Membentuk confidence interval untuk mean & proporsi.
- Menentukan ukuran sampel.

---

## A. Titik vs Interval


- **Estimasi titik:** satu nilai (x̄ menaksir μ).
- **Confidence interval (CI):** rentang yang diyakini memuat parameter dengan tingkat keyakinan tertentu (mis. 95%).


## B. CI untuk Rata-rata


**📐 Rumus.** `CI = x̄ ± Z(σ/√n)`  
*Catatan: jika σ populasi diketahui (atau n besar).*


**📐 Rumus.** `CI = x̄ ± t(s/√n)`  
*Catatan: jika σ tidak diketahui & sampel kecil → pakai distribusi t dengan df = n − 1.*


## C. CI untuk Proporsi & Ukuran Sampel


**📐 Rumus.** `CI proporsi = p̂ ± Z·√[p̂(1−p̂)/n]`


> **💡 Margin of error (E)**
> Setengah lebar interval. CI 95% lebih lebar daripada 90% (lebih yakin = lebih lebar). Memperbesar n mempersempit interval.



---

<a id="tm-6"></a>

# TM 6 — Uji Hipotesis (1): Mean & Proporsi


*Referensi: DA 10 · AA 12*

Uji hipotesis adalah prosedur formal untuk menguji klaim tentang populasi memakai bukti sampel.

## 🎯 Tujuan Pembelajaran
- Merumuskan H₀ & H₁.
- Memahami error tipe I & II serta α.
- Mengambil keputusan dengan p-value.

---

## A. Lima Langkah Uji Hipotesis


1. Rumuskan **H₀** (tidak ada efek) & **H₁** (ada efek).
2. Tentukan taraf signifikansi **α** (mis. 0,05).
3. Hitung **statistik uji** (Z atau t).
4. Bandingkan dengan nilai kritis / hitung **p-value**.
5. Ambil keputusan: tolak H₀ bila **p-value < α**.


## B. Dua Jenis Kesalahan


| Keputusan | H₀ benar | H₀ salah |
|---|---|---|
| Tolak H₀ | Error Tipe I (α) | Benar (power) |
| Gagal tolak H₀ | Benar | Error Tipe II (β) |


> **🔑 Aturan keputusan**
> **p-value < α → tolak H₀** (hasil signifikan). One-tailed vs two-tailed ditentukan arah H₁. Error tipe I = "menghukum yang tak bersalah"; tipe II = "membebaskan yang bersalah".



---

<a id="tm-7"></a>

# TM 7 — Uji Hipotesis (2): Perbedaan Rata-rata


*Referensi: DA 11 · AA 12*

Memperluas uji hipotesis untuk membandingkan **dua kelompok**: berpasangan vs independen.

## 🎯 Tujuan Pembelajaran
- Membedakan sampel berpasangan & independen.
- Memilih uji yang tepat.
- Memahami trade-off error I & II.

---

## A. Berpasangan vs Independen


| Jenis | Contoh | Uji |
|---|---|---|
| Paired (berpasangan) | Sebelum vs sesudah pelatihan pada orang sama | Paired t-test (uji selisih) |
| Independent | Gaji pria vs wanita (kelompok berbeda) | Independent t-test |


**📐 Rumus.** `t = (x̄₁ − x̄₂) ÷ standard error selisih`  
*Catatan: Bentuk SE berbeda untuk paired vs independen.*


## B. Trade-off Error & Power


- Menurunkan α (mis. 0,05 → 0,01) mengurangi error tipe I tetapi **menambah** error tipe II.
- **Power = 1 − β** = peluang mendeteksi efek yang benar-benar ada; naik bila n besar atau efek besar.


> **💡 Pilih uji yang benar**
> Tentukan dulu: berapa kelompok? berpasangan/independen? skala data? Salah memilih uji = kesimpulan keliru — sering jadi jebakan ujian.



---
