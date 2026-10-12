# Regresi & Korelasi — Bagian 2

Menilai seberapa baik model regresi dan memperkenalkan regresi berganda.

A. Kualitas Model

R² = proporsi variasi Y yang dijelaskan oleh X

0–1; makin dekat 1 makin baik. R² = 0,8 → 80% variasi Y dijelaskan model.

**Uji-t/uji-F** menilai apakah hubungan signifikan secara statistik (p-value < α).

**Analisis residual** mengecek asumsi (linearitas, normalitas, homoskedastisitas).

B. Regresi Linear Berganda

Ŷ = a + b₁X₁ + b₂X₂ + … + bₖXₖ

Beberapa prediktor sekaligus; gunakan Adjusted R² untuk membandingkan model.

Multikolinearitas

Jika antar-prediktor sangat berkorelasi, koefisien menjadi tidak stabil. Periksa dengan VIF.

Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan

Catatan kurator

Bagian di bawah ini menambah materi inti TM 10 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.

Regresi dan Korelasi Bagian 2 Evaluasi model, residual, asumsi, dan prediksi

Setelah memperoleh persamaan regresi, analis tidak boleh berhenti pada p-value. Model perlu diperiksa dari sisi kelayakan, residual, asumsi, potensi outlier, dan batas penggunaan prediksi. Week 10 berfokus pada cara membaca model secara kritis.

Pentingnya Evaluasi Model

Dalam analisis keuangan, model prediksi yang tampak signifikan dapat menyesatkan jika residualnya bermasalah.

Dalam audit, pola residual dapat menunjukkan bahwa hubungan variabel tidak linier atau ada observasi ekstrem.

Dalam akuntansi manajemen, model biaya yang buruk dapat menghasilkan keputusan anggaran yang salah.

Target Kompetensi

Membaca Model Summary, ANOVA, Coefficients, dan residual plot.

Menjelaskan asumsi regresi dalam bahasa sederhana.

Membedakan signifikansi statistik dan kelayakan praktis model.

Menjelaskan risiko extrapolation dan overinterpretation.

Residual

Selisih antara nilai aktual dan nilai prediksi.

Homoskedastisitas

Kondisi ketika sebaran residual relatif konstan.

Heteroskedastisitas

Kondisi ketika sebaran residual makin melebar atau mengecil.

P-P Plot

Grafik untuk melihat apakah residual mendekati normal.

Durbin-Watson

Indikator autokorelasi residual, terutama untuk data runtut waktu.

VIF

Indikator multikolinearitas dalam regresi berganda.

Extrapolation

Prediksi di luar rentang data yang diamati.

Adjusted R²

R² yang disesuaikan dengan jumlah prediktor.

Lakukan evaluasi model

Setiap kali menggunakan regresi untuk interpretasi atau prediksi.

Hati-hati

Jika data runtut waktu, outlier ekstrem, atau jumlah observasi kecil.

Perlu model lain

Jika scatterplot melengkung, residual berpola, atau prediksi jauh meleset.

Data lanjutan dari Week 9 digunakan untuk menyimpan predicted value dan residual.

Bulan | Y Aktual | Ŷ Prediksi | Residual

1 | 110 | 110,77 | -0,77

2 | 125 | 122,31 | 2,69

3 | 130 | 133,85 | -3,85

4 | 145 | 145,39 | -0,39

5 | 160 | 156,93 | 3,07

6 | 168 | 168,47 | -0,47

7 | 181 | 180,01 | 0,99

8 | 190 | 191,55 | -1,55

Residual Plot (Acak tanpa pola jelas)

Prediksi nilai Ŷ (Y-topi) dihitung dengan memasukkan nilai X ke dalam persamaan regresi.

Residual (e) = Y - Ŷ

Selisih antara nilai Y aktual (data lapangan nyata) dengan nilai Ŷ hasil prediksi model regresi.

Residual seharusnya menyebar acak, bukan membentuk pola.

Gunakan histogram atau P-P Plot residual.

Model signifikan tetap harus masuk akal secara bisnis.

Ringkasan Regresi Berganda & Residual

**Rumus Residual:** e = Y − Ŷ
**Persamaan Regresi Berganda:** Ŷ = a + b₁X₁ + b₂X₂ + ... + bkXk

**Multikolinearitas (VIF):** Nilai VIF > 10 menunjukkan antar variabel independen (X) saling tumpang tindih berkorelasi sangat kuat (bermasalah).
**Asumsi Linearitas:** Hubungan seluruh prediktor terhadap variabel Y sebaiknya bersifat linier.

Independensi residual

Residual antarobservasi tidak saling memengaruhi.

Homoskedastisitas

Sebaran residual relatif stabil.

Normalitas residual

Residual mendekati normal untuk inferensi koefisien.

Tidak ada multikolinearitas berat

Khusus regresi berganda.

Jebakan Ujian & Kesalahan Umum

Hanya melihat Sig. tanpa memeriksa residual.

Menganggap R² tinggi selalu berarti model terbaik.

Memakai model untuk prediksi jauh di luar rentang data.

Mengabaikan multikolinearitas pada regresi berganda.

Langkah Analisis di SPSS

Analyze → Regression → Linear.

Klik Statistics: centang Estimates, Model fit, Confidence intervals, Collinearity diagnostics jika regresi berganda.

Klik Plots: masukkan ZPRED ke X dan ZRESID ke Y.

Klik Save: centang Unstandardized Predicted Values dan Unstandardized Residuals.

Gunakan Graphs atau Explore untuk melihat histogram/P-P Plot residual.

Baca apakah residual menyebar acak.

Langkah Analisis di Excel

Gunakan Data Analysis → Regression.

Centang Residuals dan Residual Plots jika tersedia.

Buat kolom Ŷ secara manual menggunakan persamaan regresi.

Buat kolom residual = Y aktual − Ŷ.

Buat scatterplot residual terhadap predicted value.

Model Summary

R² dan Adjusted R² menunjukkan daya jelas model.

ANOVA

F dan Sig. menunjukkan kelayakan model secara keseluruhan.

Coefficients

B menunjukkan arah dan besar hubungan tiap X.

Residual plot

Pola acak lebih baik daripada pola kipas atau lengkung.

Collinearity diagnostics

VIF dipakai jika terdapat lebih dari satu X.

Pembahasan: Residual menunjukkan pola kesalahan prediksi. Jika residual berpola, model mungkin tidak sesuai.

Pembahasan: Residual = 150 − 143 = 7.

Pembahasan: Itu extrapolation. Model dipaksa bekerja di luar wilayah data yang diamati sehingga prediksi dapat menyesatkan.

## Flashcard

Apa arti R squared?

Proporsi variasi Y terhadap rata-rata yang dijelaskan model pada sampel; bukan ukuran sebab atau jaminan forecast. Rujukan: Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4

Apa adjusted R squared?

Ukuran yang menyesuaikan jumlah prediktor dan ukuran sampel; dapat turun ketika prediktor ditambah. Rujukan: Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4

Apa uji F regresi?

Menguji hipotesis bersama koefisien slope yang ditentukan, dengan alpha dan df sesuai spesifikasi. Rujukan: Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4

Apa uji t koefisien?

Menguji satu koefisien bersyarat pada prediktor lain dalam model; jangan menyamakan dengan korelasi sederhana. Rujukan: Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4

Apa multikolinearitas?

Prediktor sangat berkaitan sehingga estimasi individual dapat tidak stabil atau standard error besar. Rujukan: Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4

Apa risiko ekstrapolasi?

Prediksi di luar rentang data dapat mengandalkan hubungan yang belum didukung; nyatakan domain dan ketidakpastian. Rujukan: Lind 17e Ch.13-14, Regression Analysis dan Multiple Regression; RPP PDF 4

## Kuis TM terdaftar


