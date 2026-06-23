# Formula Sheet MAS122 Statistik untuk Akuntan

*Kompilasi semua rumus dari TM 1–14. Gunakan sebagai pendamping NotebookLM bila perlu konfirmasi rumus pasti.*


**Total rumus: 14**


## TM 2 — Statistik Deskriptif — Tendensi Sentral

**📐 Rumus.** `Mean (rata-rata): x̄ = Σx ÷ n`
  
*Catatan: Paling umum, tetapi sensitif terhadap outlier.*


## TM 3 — Statistik Deskriptif — Dispersi (Penyebaran)

**📐 Rumus.** `Varians sampel: s² = Σ(x − x̄)² ÷ (n − 1)`
  
*Catatan: Populasi memakai pembagi N dan rata-rata μ.*


## TM 3 — Statistik Deskriptif — Dispersi (Penyebaran)

**📐 Rumus.** `Standar deviasi: s = √s²`
  
*Catatan: Satuan sama dengan data; makin besar = makin menyebar.*


## TM 4 — Probabilitas & Distribusi

**📐 Rumus.** `P(X = x) = C(n,x) · pˣ · (1 − p)ⁿ⁻ˣ`
  
*Catatan: n percobaan, peluang sukses p, x jumlah sukses. Mean = np.*


## TM 4 — Probabilitas & Distribusi

**📐 Rumus.** `Z = (x − μ) ÷ σ`
  
*Catatan: Z menyatakan berapa standar deviasi suatu nilai dari mean; pakai tabel Z untuk peluang.*


## TM 5 — Estimasi (Poin & Interval)

**📐 Rumus.** `CI = x̄ ± Z(σ/√n)`
  
*Catatan: jika σ populasi diketahui (atau n besar).*


## TM 5 — Estimasi (Poin & Interval)

**📐 Rumus.** `CI = x̄ ± t(s/√n)`
  
*Catatan: jika σ tidak diketahui & sampel kecil → pakai distribusi t dengan df = n − 1.*


## TM 5 — Estimasi (Poin & Interval)

**📐 Rumus.** `CI proporsi = p̂ ± Z·√[p̂(1−p̂)/n]`


## TM 7 — Uji Hipotesis — Bagian 2 (Perbedaan Rata-rata)

**📐 Rumus.** `t = (x̄₁ − x̄₂) ÷ standard error selisih`
  
*Catatan: Bentuk SE berbeda untuk paired vs independen.*


## TM 8 — Analisis Varians (ANOVA)

**📐 Rumus.** `F = Variansi antar kelompok ÷ Variansi dalam kelompok`
  
*Catatan: F besar → tolak H₀ (minimal satu rata-rata berbeda).*


## TM 9 — Regresi & Korelasi — Bagian 1

**📐 Rumus.** `Ŷ = a + bX`
  
*Catatan: a = intercept (nilai Y saat X=0); b = slope (perubahan Y per unit X).*


## TM 10 — Regresi & Korelasi — Bagian 2

**📐 Rumus.** `R² = proporsi variasi Y yang dijelaskan oleh X`
  
*Catatan: 0–1; makin dekat 1 makin baik. R² = 0,8 → 80% variasi Y dijelaskan model.*


## TM 10 — Regresi & Korelasi — Bagian 2

**📐 Rumus.** `Ŷ = a + b₁X₁ + b₂X₂ + … + bₖXₖ`
  
*Catatan: Beberapa prediktor sekaligus; gunakan Adjusted R² untuk membandingkan model.*


## TM 12 — Metode Non-parametrik

**📐 Rumus.** `χ² = Σ [(O − E)² ÷ E]`
  
*Catatan: O = frekuensi observasi, E = frekuensi harapan. Untuk uji kebaikan-suai (goodness of fit) & independensi (tabel kontingensi).*
