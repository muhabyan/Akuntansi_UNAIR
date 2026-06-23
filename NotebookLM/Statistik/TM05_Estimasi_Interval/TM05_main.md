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
