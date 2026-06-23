# TM 7 — Uji Hipotesis — Bagian 2 (Perbedaan Rata-rata)

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
