# Peta Materi & Prediksi UAS MAS122 Statistik

*Peta konsep lintas-TM 8–14, checklist persiapan UAS, dan prediksi tipe soal yang sering muncul.*


## 🗺️ Peta Materi TM 8–14 (Pra-UAS)

| TM | Topik | Konsep Inti | SPSS Output Wajib Tahu |
|---|---|---|---|
| TM8 | ANOVA | F = Variansi antar/dalam kelompok; bandingkan ≥ 3 grup | Descriptives, Levene, ANOVA, Post Hoc (Tukey) |
| TM9 | Regresi Sederhana | Ŷ = a + bX, kuadrat terkecil, R² | Correlation table, Coefficients, Model Summary |
| TM10 | Regresi Berganda | Ŷ = b₀ + b₁X₁ + ..., 5 asumsi | Coefficients (+ VIF), Durbin-Watson, P-P Plot, Residual stats |
| TM11 | Time Series | Trend + seasonal + cyclical + irregular | Trend line, seasonal index, MAD/MAPE |
| TM12 | Non-Parametrik | Mann-Whitney, Wilcoxon, Kruskal-Wallis, χ² | Test Statistics, Asymp. Sig. |
| TM13 | SPSS Workflow | Variable View → Data View → Analyze | Recoding, computing variables, output reading |
| TM14 | Presentasi | Struktur laporan: latar→data→hasil→interp→kesimpulan | Tabel & grafik publikasi |

## ✅ Checklist Persiapan UAS

### Konsep Wajib
- [ ] Bisa membedakan **ANOVA vs Kruskal-Wallis** (kapan parametrik vs non-parametrik)
- [ ] Bisa menghitung **F-statistic** secara konseptual (rasio variasi)
- [ ] Bisa menafsirkan **R², Adjusted R², Durbin-Watson, VIF**
- [ ] Bisa membedakan **regresi sederhana vs berganda**
- [ ] Bisa menyebut **5 asumsi regresi** (linearitas, independensi, homoskedastisitas, normalitas residual, no multikolinearitas)
- [ ] Bisa memilih uji non-parametrik yang tepat per situasi
- [ ] Bisa membaca output SPSS lengkap (signifikansi, koefisien, residual)

### Skill Hitungan
- [ ] Hitung **F-statistic** dari MS_between / MS_within
- [ ] Hitung **slope dan intercept** regresi dengan kuadrat terkecil
- [ ] Hitung **chi-square** dengan tabel observed vs expected
- [ ] Hitung **moving average** dan trend
- [ ] Interpretasi **p-value** vs α

## 🎯 Prediksi Topik UAS

Berdasarkan distribusi materi & jam tatap muka:

1. **ANOVA (TM 8)** — sangat sering: soal hitung F, post hoc, asumsi Levene
2. **Regresi Berganda (TM 10)** — sering: interpretasi coefficients, VIF, R² vs Adj R²
3. **Non-parametrik (TM 12)** — sering: pilih uji yang tepat, chi-square independensi
4. **Time Series (TM 11)** — kadang: hitung trend & seasonal
5. **Regresi Sederhana (TM 9)** — kadang: interpretasi slope & R²

## ⚠️ Jebakan Ujian yang Sering Muncul

1. **Salah memilih uji**: ANOVA dipakai untuk 2 grup (seharusnya uji-t), atau uji-t dipakai untuk 3+ grup (seharusnya ANOVA).
2. **Lupa cek asumsi**: langsung jalankan regresi tanpa cek multikolinearitas (VIF) atau heteroskedastisitas.
3. **Confuse R² dan p-value**: R² rendah tapi p-value signifikan → ada hubungan tapi lemah.
4. **Korelasi ≠ kausalitas**: koefisien korelasi tinggi tidak berarti X menyebabkan Y.
5. **Salah baca Durbin-Watson**: nilai mendekati 2 = no autokorelasi; <1.5 atau >2.5 = problem.
6. **VIF**: >10 = multikolinearitas serius; >5 = perlu perhatian.

## 📚 Strategi Belajar Pra-UAS

1. **Day 1–2**: Drill flashcards Pra-UAS (42 kartu di `00_Flashcards.md`)
2. **Day 3–4**: Kerjakan 8 Quiz UAS di `00_Bank_Soal.md` — fokus topic ANOVA & Regresi
3. **Day 5**: Kerjakan 5 Case/Essay di `00_Bank_Soal.md` — latih jawaban terstruktur
4. **Day 6**: Review `00_Formula_Sheet.md` + `00_Tabel_Komparasi.md`
5. **Day 7**: Latihan baca SPSS output dari TM 8 & TM 10 main.md
