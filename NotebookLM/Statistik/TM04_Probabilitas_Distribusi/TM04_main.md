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
