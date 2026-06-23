# TM 10 — Regresi & Korelasi — Bagian 2

*Referensi: DA 13 · AA 15*

Menilai seberapa baik model regresi dan memperkenalkan regresi berganda.

## 🎯 Tujuan Pembelajaran
- Menafsirkan koefisien determinasi R².
- Menguji signifikansi regresi.
- Mengenal regresi linear berganda.

---

## A. Kualitas Model


**📐 Rumus.** `R² = proporsi variasi Y yang dijelaskan oleh X`  
*Catatan: 0–1; makin dekat 1 makin baik. R² = 0,8 → 80% variasi Y dijelaskan model.*


- **Uji-t/uji-F** menilai apakah hubungan signifikan secara statistik (p-value < α).
- **Analisis residual** mengecek asumsi (linearitas, normalitas, homoskedastisitas).


## B. Regresi Linear Berganda


**📐 Rumus.** `Ŷ = a + b₁X₁ + b₂X₂ + … + bₖXₖ`  
*Catatan: Beberapa prediktor sekaligus; gunakan Adjusted R² untuk membandingkan model.*


> **⚠️ Multikolinearitas**
> Jika antar-prediktor sangat berkorelasi, koefisien menjadi tidak stabil. Periksa dengan VIF.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 10 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Regresi dan Korelasi Bagian 2 Evaluasi model, residual, asumsi, dan prediksi


Setelah memperoleh persamaan regresi, analis tidak boleh berhenti pada p-value. Model perlu diperiksa dari sisi kelayakan, residual, asumsi, potensi outlier, dan batas penggunaan prediksi. Week 10 berfokus pada cara membaca model secara kritis.


- Dalam analisis keuangan, model prediksi yang tampak signifikan dapat menyesatkan jika residualnya bermasalah.
- Dalam audit, pola residual dapat menunjukkan bahwa hubungan variabel tidak linier atau ada observasi ekstrem.
- Dalam akuntansi manajemen, model biaya yang buruk dapat menghasilkan keputusan anggaran yang salah.


- Membaca Model Summary, ANOVA, Coefficients, dan residual plot.
- Menjelaskan asumsi regresi dalam bahasa sederhana.
- Membedakan signifikansi statistik dan kelayakan praktis model.
- Menjelaskan risiko extrapolation dan overinterpretation.


### Residual


Selisih antara nilai aktual dan nilai prediksi.


### Homoskedastisitas


Kondisi ketika sebaran residual relatif konstan.


### Heteroskedastisitas


Kondisi ketika sebaran residual makin melebar atau mengecil.


### P-P Plot


Grafik untuk melihat apakah residual mendekati normal.


### Durbin-Watson


Indikator autokorelasi residual, terutama untuk data runtut waktu.


### VIF


Indikator multikolinearitas dalam regresi berganda.


### Extrapolation


Prediksi di luar rentang data yang diamati.


### Adjusted R²


R² yang disesuaikan dengan jumlah prediktor.


### Lakukan evaluasi model


Setiap kali menggunakan regresi untuk interpretasi atau prediksi.


### Hati-hati


Jika data runtut waktu, outlier ekstrem, atau jumlah observasi kecil.


### Perlu model lain


Jika scatterplot melengkung, residual berpola, atau prediksi jauh meleset.


Data lanjutan dari Week 9 digunakan untuk menyimpan predicted value dan residual.


| Bulan | Y Aktual | Ŷ Prediksi | Residual |
|---|---|---|---|
| 1 | 110 | 110,77 | -0,77 |
| 2 | 125 | 122,31 | 2,69 |
| 3 | 130 | 133,85 | -3,85 |
| 4 | 145 | 145,39 | -0,39 |
| 5 | 160 | 156,93 | 3,07 |
| 6 | 168 | 168,47 | -0,47 |
| 7 | 181 | 180,01 | 0,99 |
| 8 | 190 | 191,55 | -1,55 |


Masukkan nilai X ke persamaan regresi.


Residual = Y aktual − Ŷ prediksi.


Residual seharusnya menyebar acak, bukan membentuk pola.


Gunakan histogram atau P-P Plot residual.


Model signifikan tetap harus masuk akal secara bisnis.


e = Y − Ŷ Regresi berganda Ŷ = a + b₁X₁ + b₂X₂ + ... + bkXk VIF VIF tinggi menunjukkan prediktor saling tumpang tindih kuat Asumsi dan Catatan Metode Linearitas Hubungan prediktor dan Y sebaiknya linier.


### Independensi residual


Residual antarobservasi tidak saling memengaruhi.


### Homoskedastisitas


Sebaran residual relatif stabil.


### Normalitas residual


Residual mendekati normal untuk inferensi koefisien.


### Tidak ada multikolinearitas berat


Khusus regresi berganda.


- Hanya melihat Sig. tanpa memeriksa residual.
- Menganggap R² tinggi selalu berarti model terbaik.
- Memakai model untuk prediksi jauh di luar rentang data.
- Mengabaikan multikolinearitas pada regresi berganda.


1. Analyze → Regression → Linear.
2. Klik Statistics: centang Estimates, Model fit, Confidence intervals, Collinearity diagnostics jika regresi berganda.
3. Klik Plots: masukkan ZPRED ke X dan ZRESID ke Y.
4. Klik Save: centang Unstandardized Predicted Values dan Unstandardized Residuals.
5. Gunakan Graphs atau Explore untuk melihat histogram/P-P Plot residual.
6. Baca apakah residual menyebar acak.


1. Gunakan Data Analysis → Regression.
2. Centang Residuals dan Residual Plots jika tersedia.
3. Buat kolom Ŷ secara manual menggunakan persamaan regresi.
4. Buat kolom residual = Y aktual − Ŷ.
5. Buat scatterplot residual terhadap predicted value.


### Model Summary


R² dan Adjusted R² menunjukkan daya jelas model.


### ANOVA


F dan Sig. menunjukkan kelayakan model secara keseluruhan.


### Coefficients


B menunjukkan arah dan besar hubungan tiap X.


### Residual plot


Pola acak lebih baik daripada pola kipas atau lengkung.


### Collinearity diagnostics


VIF dipakai jika terdapat lebih dari satu X.


Pembahasan: Residual menunjukkan pola kesalahan prediksi. Jika residual berpola, model mungkin tidak sesuai.


Pembahasan: Residual = 150 − 143 = 7.


Pembahasan: Itu extrapolation. Model dipaksa bekerja di luar wilayah data yang diamati sehingga prediksi dapat menyesatkan.
