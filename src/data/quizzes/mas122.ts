// Soal diekstrak dari guide UTS mahasiswa lalu dibersihkan; verifikasi dgn modul/dosen.
import type { QuizQuestion } from '../../types';

export const MAS122_QUIZ: QuizQuestion[] = [
  {"q": "Penelitian pada bidang ekonomi dan bisnis pada umumnya menggunakan confidence interval sebesar...", "options": ["90%", "95%", "35%", "99%"], "answer": 1, "explanation": "Jawaban: B — 95% Standar penelitian bisnis & ekonomi adalah CI 95% (α=0.05). Artinya kita 95% yakin interval mengandung parameter populasi, dengan risiko salah hanya 5%. CI 99% lebih konservatif dan CI 90% lebih longgar."},
  {"q": "Lengkapi tabel: Untuk ARITHMETIC MEAN, karakteristiknya adalah... Dan HARMONIC MEAN, deskripsinya adalah...", "options": ["Arithmetic: untuk pertumbuhan berurutan; Harmonic: untuk data rasio kecepatan", "Arithmetic: untuk data normal & simetris, tidak ada outlier besar; Harmonic: tiap data berpengaruh berbeda terhadap rata-rata, data berbentuk rasio per satuan waktu/unit", "Arithmetic: untuk data fisika & teknik; Harmonic: untuk data nominal", "Arithmetic: untuk data keuangan; Harmonic: data pertumbuhan"], "answer": 1, "explanation": "Jawaban: B Arithmetic Mean: Paling umum, cocok untuk data terdistribusi normal dan simetris, tidak memiliki outlier terlalu besar. Contoh: rata-rata nilai ujian. Harmonic Mean: Tiap data memiliki pengaruh berbeda terhadap rata-rata keseluruhan, terutama saat data berbentuk rasio per satuan waktu/unit. Contoh: rata-rata ke"},
  {"q": "Berdasarkan gambar kurva lonceng. Pernyataan yang paling tepat: (1)~99% dalam 4σ; (2)~99.7% dalam 3σ; (3)~68% dalam 1σ; (4)disebut \"Hypothesis Rule\"; (5)95% dalam 2σ terlepas dari bentuk distribusi; (6)~95% dalam 2σ; (7)hanya untuk distribusi normal; (8)disebut 68-95-99.7 rule", "options": ["Statement 1,4,7 tidak benar; tapi 3,6,8 benar", "Statement 2 tidak benar tapi 4 benar", "Statement 1,2,3 benar tapi 8 tidak benar", "Semua benar kecuali statement 4"], "answer": 0, "explanation": "Jawaban: A — Statement 1, 4, 5 tidak benar; yang lain benar ❌ (1) \"~99% dalam 4σ\" — SALAH, seharusnya 99.7% dalam 3σ ✅ (2) ~99.7% dalam 3σ — BENAR ✅ (3) ~68% dalam 1σ — BENAR ❌ (4) \"Hypothesis Rule\" — SALAH, namanya Empirical Rule / 68-95-99.7 Rule ❌ (5) 95% dalam 2σ terlepas dari bentuk — SALAH, hanya untuk distribusi NORMAL ✅ (6"},
  {"q": "Pernyataan yang BENAR tentang teori probabilitas: (i) membantu predict likelihood of events; (ii) cornerstone of ML; (iii) Bayesian methods are unnecessary; (iv) quantifying likelihood; (v) instrumental in designing experiments; (vi) irrelevant since statistics is deterministic; (vii) relevant in economics/sociology", "options": ["i,ii,iv,v,vi,vii benar", "ii,v,vii benar", "i,ii,iv,v,vii benar", "Semua benar"], "answer": 2, "explanation": "Jawaban: C — i, ii, iv, v, vii BENAR ✅ (i) Membantu prediksi lebih akurat ✅ (ii) Cornerstone ML & statistik modern ✅ (iv) Mengukur likelihood berbagai outcome ✅ (v) Berguna desain eksperimen & survei ✅ (vii) Relevan di ekonomi, sosiologi, epidemiologi ❌ (iii) Bayesian \"unnecessary\" — SALAH, sangat berguna! ❌ (vi) Probability irrelevant ka…"},
  {"q": "Compute the geometric mean dari monthly percent increases: 12 dan 14. (Bulatkan 2 desimal)", "options": ["13.00", "12.96", "13.50", "14.00"], "answer": 1, "explanation": "Jawaban: B — 12.96 GM = √(12 × 14) = √168 = 12.9615... ≈ 12.96Langkah: 12 × 14 = 168 → √168 ≈ 12.96 Geometric mean untuk data pertumbuhan berurutan (keuangan, return investasi)."},
  {"q": "10 salesperson Midtown Ford menjual: 15, 23, 4, 19, 18, 10, 10, 8, 28, 19. Pernyataan yang BENAR (bisa lebih dari satu)?", "options": ["i.Interval; ii.Mean=15.4; iii.Populasi parameter; iv.Rasio", "ii.Mean=15.4; iii.Populasi parameter; iv.Rasio", "i.Interval; iii.Populasi; v.Mean=154", "Hanya iv yang benar"], "answer": 1, "explanation": "Jawaban: B — ii, iii, iv BENAR x̄ = (15+23+4+19+18+10+10+8+28+19)/10 = 154/10 = 15.4✅ ii: Mean = 15.4 ✅ iii: Data mencakup SEMUA 10 salesperson → populasi (bukan sampel) ✅ iv: Skala rasio — ada titik nol mutlak (0 = tidak ada mobil) ❌ i: Bukan interval tapi rasio | ❌ v: Mean adalah 15.4 (buka"},
  {"q": "Sifat-sifat arithmetic mean yang BENAR: (i) bisa dihitung dari nominal/ordinal/interval/ratio; (ii) sum of deviations from mean is NEVER zero; (iii) the mean is unique; (iv) all values are included", "options": ["i,ii,iii,iv semua benar", "iii dan iv benar", "Hanya ii dan iii benar", "i dan iv benar"], "answer": 1, "explanation": "Jawaban: B — iii dan iv BENAR ✅ (iii) Mean selalu UNIK — satu dataset punya tepat satu nilai mean ✅ (iv) Semua nilai data dilibatkan dalam penghitungan mean ❌ (i) Mean hanya untuk Interval & Ratio, bukan nominal/ordinal! ❌ (ii) \"Never zero\" — SALAH. Σ(xᵢ−x̄) SELALU = 0 — ini sifat matematika pasti."},
  {"q": "1.000 warga Minnesota: 100 Winter, 300 Spring, 400 Summer, 200 Fall. Tabel frekuensi & relative frequency yang benar?", "options": ["Tabel a: dengan Relative Frequency (%) — total = 1.00", "Tabel b: hanya Season dan Frequency saja", "Tabel c: Season|Frequency|Relative Frequency — Winter=100|0.10, Total=1000|1.00", "Tabel d: tidak ada yang benar"], "answer": 2, "explanation": "Jawaban: C ✅ Tabel yang benar memiliki: Season | Frequency | Relative Frequency (desimal 0-1) Winter: 100 | 0.10 | Spring: 300 | 0.30 | Summer: 400 | 0.40 | Fall: 200 | 0.20 | Total: 1000 | 1.00 Kunci: Total Relative Frequency = 1.00 (bukan 100%)"},
  {"q": "Match definitions: \"A graph in which classes on horizontal axis and class frequencies on vertical axis\" = ? | \"Middle value when values arranged in order\" = ?", "options": ["Histogram; Median", "Bar Chart; Mean", "Histogram; Mode", "Ogive; Median"], "answer": 0, "explanation": "Jawaban: A — Histogram; Median • Kelas di horizontal + frekuensi di vertikal = Histogram • Nilai tengah data terurut = Median • Seluruh kumpulan individu = Population | Spread 50% tengah = IQR • Rata-rata nilai = Mean | Rata-rata aritmatik deviasi kuadrat = Vari"},
  {"q": "Carter Construction: 14 karyawan @$16.50, 10 @$19.00, 2 @$25.00. Berapa mean hourly rate dari 26 karyawan?", "options": ["$18.1154", "Tidak bisa diselesaikan", "$60.5", "$2.32"], "answer": 0, "explanation": "Jawaban: A — $18.1154 x̄w = (14×$16.50 + 10×$19.00 + 2×$25.00) / (14+10+2) = ($231 + $190 + $50) / 26 = $471 / 26 = $18.1154Weighted mean karena setiap kelompok karyawan memiliki jumlah (bobot) yang berbeda."},
  {"q": "From 52 cards, probability of drawing red card THEN black card, WITHOUT replacement?", "options": ["26/52", "1/2", "26/51", "2/51", "1/4"], "answer": 2, "explanation": "Jawaban: C — 26/51 P = P(merah) × P(hitam | setelah merah diambil) = (26/52) × (26/51) = (1/2) × (26/51) = 26/102 = 13/51 ≈ 0.255Kunci: \"WITHOUT replacement\" → setelah kartu merah diambil, total tersisa 51 kartu (26 hitam di antaranya)."},
  {"q": "Rata-rata nilai matakuliah statistik dari sampel mahasiswa akuntansi di Universitas Airlangga bisa kita sebut dengan...", "options": ["Standard deviation", "Confidence Interval", "Point estimate", "Error"], "answer": 2, "explanation": "Jawaban: C — Point estimate ✅ Point estimate = satu nilai tunggal yang mengestimasi parameter populasi. x̄ (sample mean) = point estimate untuk μ (mean populasi). Berbeda dengan CI yang memberikan range, point estimate hanya satu angka."},
  {"q": "Koran: rata-rata jual properti=60 hari. Sampel 20 rumah: x̄=65 hari, CI 95%=[62,68]. Interpretasi yang tepat?", "options": ["Perhitungan statistik salah", "Rata-rata penjualan rumah antara 62 sampai 68 hari", "Rata-rata penjualan adalah 60 hari", "Pernyataan koran sudah benar"], "answer": 1, "explanation": "Jawaban: B ✅ — Rata-rata antara 62 sampai 68 hari CI 95% = [62,68]: kita 95% yakin μ populasi ada di antara 62 dan 68 hari. ❌ A: Tidak ada bukti perhitungan salah ❌ C: 60 hari adalah klaim koran, bukan hasil sampel ❌ D: CI [62,68] tidak mencakup 60 → ada indikasi klaim koran tidak akurat"},
  {"q": "Match definisi: \"Probability of event = fraction of time similar events happened in past\" = ? | \"A particular result of experiment\" = ? | \"Over large trials, empirical prob → true prob\" = ?", "options": ["Empirical Probability; Outcome; Law of Large Numbers", "Subjective Probability; Event; CLT", "Classical Probability; Outcome; LLN", "Empirical; Event; Bayes Theorem"], "answer": 0, "explanation": "Jawaban: A ✅ • Fraksi waktu kejadian serupa di masa lalu = Empirical Probability • Hasil tertentu dari eksperimen = Outcome • Percobaan banyak → mendekati probabilitas sejati = Law of Large Numbers • Independence, Collectively Exhaustive, Mutually Exclusive, Experiment, Event, Probability, Subjective Pr"},
  {"q": "PT Heinz sirup 660ml (μ=660, σ=7, normal). Sampel 50 botol, x̄=663. Ingin buktikan rata-rata BERBEDA dari 660ml (α=5%). Pernyataan yang sesuai?", "options": ["Semua pernyataan 1,3,5,6 benar", "Semua pernyataan 1,3,5,6 benar (bukan 2,4)", "Semua pernyataan benar", "Dari 1,3,5,6 ada yang salah", "Pernyataan 2,3,5 saja benar"], "answer": 1, "explanation": "Jawaban: B — Pernyataan 1, 3, 5, 6 BENAR z = (663-660) / (7/√50) = 3/0.990 ≈ 3.03✅ (1) Pakai rumus z (σ=7 diketahui) | ✅ (3) Decision rule two-tail (H₁: μ ≠ 660) ✅ (5) P(Type I) = α = 5% bisa diketahui | ✅ (6) P(Type II) tidak mudah diketahui ❌ (2) Pakai t — salah, σ diketahui → pakai Z ❌ (4) One-tail — salah, \"berbeda"},
  {"q": "Divisi Klaim (kasus Q24). Sampel 26 klaim. Pilih 4 BENAR dari 8: (1)df=26, (2)P(TypeI)=1%, (3)pakai t-test jika normal, (4)pakai z-test jika normal, (5)one-tail kanan, (6)pakai t-test jika normal & σ tidak diketahui, (7)one-tail kiri, (8)df=25", "options": ["2,3,7,8 benar", "2,3,6,7 benar (4 pernyataan)", "Pilih 4: 2,3,7,8", "Pilih 4: 2,3,6,8"], "answer": 2, "explanation": "Jawaban: C — 2, 3, 7, 8 BENAR ✅ (2) P(Type I error) = significance level = 1% ✅ (3) Pakai t-test jika distribusi biaya klaim normal ✅ (7) Decision rule one-tail KIRI (H₁: μ < 60 → menguji apakah kurang dari 60) ✅ (8) df = n-1 = 26-1 = 25 ❌ (1) df=26 → salah, df=25 | ❌ (4) z-test jika normal → salah (z hanya jika σ DIKETAHUI)<b"},
  {"q": "Hourly wages part-time employees Home Depot: $12, $20, $16, $18, $19. What is the sample variance?", "options": ["10 in dollars squared", "3.16 in dollars squared", "10 in dollars", "3.16 in dollars"], "answer": 0, "explanation": "Jawaban: A — 10 dollars squared ✅ n=5, Σx = 12+20+16+18+19 = 85, x̄ = 85/5 = 17 Σ(xᵢ-x̄)² = (12-17)²+(20-17)²+(16-17)²+(18-17)²+(19-17)² = 25 + 9 + 1 + 1 + 4 = 40 s² = 40/(5-1) = 40/4 = 10 dollars squareds = √10 ≈ 3.16 dollars (bukan dollars squared)"},
  {"q": "Divisi Klaim: t_kritis=-2.49, t_hitung=-1.82, signifikansi 1%. Hasil pengujian hipotesis yang tepat?", "options": ["Tidak cukup bukti menyangkal Ha", "Tidak cukup bukti menyangkal Ho", "Tidak bisa membuat kesimpulan", "Ho ditolak dan Ha diterima"], "answer": 1, "explanation": "Jawaban: B ✅ — Tidak cukup bukti untuk menyangkal H₀ Decision rule: Tolak H₀ jika t_hitung < -2.49 t_hitung = -1.82 > -2.49 → GAGAL MENOLAK H₀ Kesimpulan: Tidak ada cukup bukti bahwa biaya rata-rata klaim kurang dari Rp60."},
  {"q": "Wellstone cell phone covers: Bright white=130, Metallic black=104, Magnetic lime=325, Tangerine orange=455, Fusion red=286. Total=1300. Jika produksi 1 juta unit, berapa bright white dan magnetic lime?", "options": ["80.000 white dan 220.000 lime", "100.000 white dan 250.000 lime", "220.000 white dan 350.000 lime", "200.000 white dan 100.000 lime"], "answer": 2, "explanation": "Jawaban: C — 220.000 white dan 350.000 lime (sesuai jawaban UTS) Konsep: gunakan frekuensi relatif sebagai proporsi produksi. Proporsi Bright white = 130/1300 = 0.10 → 0.10 × 1.000.000 = 100.000 Proporsi Magnetic Lime = 325/1300 = 0.25 → 0.25 × 1.000.000 = 250.000Catatan: Jawaban C yang ditandai di UTS (220.000 & 350.000) berbeda"},
  {"q": "Manajer Penjualan: sales laki-laki Rp1.400/hari (σ=200), sales perempuan Rp1.500/hari (σ=250). Ingin buktikan penjualan perempuan LEBIH BESAR. Pernyataan yang TIDAK SESUAI?", "options": ["Sampel bersifat independen", "Uji statistik yang digunakan adalah uji z", "Daerah penolakan Ho di tail sebelah kanan", "Daerah penolakan Ho di tail sebelah kiri dan kanan"], "answer": 3, "explanation": "Jawaban: D — TIDAK SESUAI H₁: μ_perempuan > μ_laki → one-tailed test (kanan) ✅ A: Sampel independen (dua kelompok berbeda) ✅ B: Uji z (σ populasi diketahui) ✅ C: Daerah penolakan di KANAN (right-tailed) ❌ D: \"Kiri dan kanan\" = two-tailed → TIDAK SESUAI untuk kasus ini yang one-tailed kanan!"},
  {"q": "P(bisnis sukses) = 0.5. Berapa probabilitas sukses TEPAT pada percobaan ke-4?", "options": ["6.25%", "50%", "12.5%", "25%"], "answer": 0, "explanation": "Jawaban: A — 6.25% ✅ P(sukses tepat di percobaan ke-4) = P(gagal)³ × P(sukses) = (0.5)³ × (0.5) = (0.5)⁴ = 0.0625 = 6.25%Formula geometric probability: P(X=k) = (1-p)^(k-1) × p 50% adalah P(sukses per satu percobaan), bukan P(sukses tepat di percobaan ke-4)."},
  {"q": "Manajer Penjualan (sampel 50 hari perempuan). Pernyataan yang TIDAK SESUAI dari kasusnya?", "options": ["Sampel bersifat independen", "Uji statistik yang digunakan adalah uji z", "Daerah penolakan Ho berada pada tail sebelah kanan", "Daerah penolakan Ho berada pada tail sebelah kiri dan kanan"], "answer": 3, "explanation": "Jawaban: D — TIDAK SESUAI Sama seperti Q27 — H₁: μ_perempuan > μ_laki → one-tailed test kanan. Opsi D \"kiri dan kanan\" mendeskripsikan two-tailed yang TIDAK sesuai untuk hipotesis ini."},
  {"q": "Lengkapi tabel: Nominal=? | Ordinal=only for grouping/labeling | Interval=constant distance, no absolute zero | Ratio=order has meaning but distance unknown", "options": ["Nominal: has absolute zero; Ordinal: Competition rank; Interval: Distance to class; Ratio: Temperature", "Nominal: only grouping/labeling; Ordinal: has absolute zero; Interval: Car color; Ratio: Competition rank", "Nominal: only grouping/labeling; Ordinal: Competition rank; Interval: Distance to class; Ratio: Temperature", "Nominal: constant distance; Ordinal: Car color; Interval: Temperature; Ratio: Distance"], "answer": 2, "explanation": "Jawaban: C ✅ • Nominal: Hanya pengelompokan, tidak ada urutan. Contoh: Car color • Ordinal: Ada urutan/peringkat, tapi jarak tidak sama. Contoh: Competition rank • Interval: Jarak konstan, tidak ada nol mutlak. Contoh: Distance to class, suhu Celsius • Ratio: Semua sifat interval + nol"},
  {"q": "\"Drag the text\": Symmetric=Ages, Positively Skewed=Monthly Salaries, Negatively Skewed=Test Scores, Bimodal=Outside Diameter. Apakah semua benar?", "options": ["Semua benar", "Hanya Ages dan Monthly Salaries benar", "Monthly Salaries seharusnya Negatively Skewed", "Test Scores seharusnya Positively Skewed"], "answer": 0, "explanation": "Jawaban: A — Semua benar ✅ • Symmetric → Ages: distribusi usia cenderung simetris • Positively Skewed → Monthly Salaries: banyak gaji menengah, sedikit sangat tinggi (ekor kanan, Mean>Median) • Negatively Skewed → Test Scores: ujian mudah → banyak nilai tinggi (ekor kiri, Mode>Median>Mean) • Bimodal → Outside Diameter: mesin dengan dua ta…"},
  {"q": "Divisi Klaim: t_kritis=2.49, t_hitung=-1.82. Manajer menerima H₀. Pernyataan yang TIDAK SESUAI?", "options": ["Selisih Rp3.6 bisa disebabkan sampling error", "Terdapat cukup bukti bahwa upaya pemotongan biaya telah efektif", "Hasil menyiratkan upaya pemotongan biaya belum efektif", "Secara statistik tidak ada penurunan biaya klaim dari Rp60"], "answer": 1, "explanation": "Jawaban: B — TIDAK SESUAI Menerima H₀ (Fail to Reject) berarti tidak ada cukup bukti bahwa biaya turun. ✅ A: Selisih Rp3.6 bisa sampling error — SESUAI ❌ B: \"Cukup bukti efektif\" — TIDAK SESUAI! Justru sebaliknya! ✅ C: Upaya belum terbukti efektif — SESUAI | ✅ D: Tidak terbukti ada penurunan — SESUAI"},
  {"q": "Applewood Profits: $200-600(8), $600-1000(11), $1000-1400(23), $1400-1800(38), $1800-2200(45), $2200-2600(32), $2600-3000(19), $3000-3400(4). Total=180. Pernyataan BENAR?", "options": ["I dan II saja benar", "Hanya I yang benar", "I, II, dan IV benar", "Semua benar (I,II,III,IV)"], "answer": 0, "explanation": "Jawaban: A — I dan II saja BENAR ✅ I dan II merupakan pernyataan yang paling sesuai dengan distribusi frekuensi di atas."}
];

export const MAS122_UAS_2024: QuizQuestion[] = [
  {
    "topic": "Regresi Linear",
    "skill": "Interpretasi Output Regresi",
    "difficulty": "medium",
    "q": "Suatu perusahaan melakukan estimasi antara luas toko (ratusan meter persegi) dan penjualan (dalam miliar). Hasil estimasi ditunjukkan dengan output berikut:\n\n**Coefficients**\n| | Coefficients | Standard Error | t Stat | P-value |\n|---|---|---|---|---|\n| Intercept | 2.1695 | 1.0084 | 2.1513 | 0.0422 |\n| Luas Toko | 1.1795 | 0.2813 | 4.1917 | 0.0003 |\n\nEstimasi untuk penjualan jika luas toko adalah 3.5 (ratusan m2) adalah:",
    "options": [
      "2.1695",
      "1.1795",
      "3.5",
      "6.29775"
    ],
    "answer": 3,
    "explanation": "Persamaan regresi: Y = 2.1695 + 1.1795(X).\nJika X = 3.5, maka Y = 2.1695 + 1.1795(3.5) = 2.1695 + 4.12825 = 6.29775."
  },
  {
    "topic": "Time Series",
    "skill": "Interpretasi Data Deret Waktu",
    "difficulty": "medium",
    "q": "Taman Bermain \"HEPPI\" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) per musim:\n\n| Tahun | Dingin | Semi | Panas | Gugur |\n|:---:|:---:|:---:|:---:|:---:|\n| 2006 | 117.0 | 80.7 | 129.6 | 76.1 |\n| 2007 | 118.6 | 82.5 | 121.4 | 77.0 |\n| 2008 | 114.0 | 84.3 | 119.9 | 75.0 |\n| 2009 | 120.7 | 79.6 | 130.7 | 69.6 |\n| 2010 | 125.2 | 80.2 | 127.6 | 72.0 |\n\nPernyataan di bawah ini yang paling tepat adalah:",
    "options": [
      "Musim gugur menyumbang pengunjung paling banyak.",
      "Musim panas menyumbang pengunjung paling sedikit.",
      "Musim dingin menyumbang pengunjung lebih banyak daripada musim semi.",
      "Tren rata-rata pengunjung mengalami penurunan setiap tahunnya."
    ],
    "answer": 2,
    "explanation": "Dari data, total pengunjung per musim selama 5 tahun:\nDingin: 595.5\nSemi: 407.3\nPanas: 629.2\nGugur: 369.7\nMusim Panas adalah yang paling banyak, dan Musim Gugur yang paling sedikit. Karena itu opsi A dan B salah. Opsi C menyatakan Musim dingin (595.5) lebih banyak dari musim semi (407.3) adalah pernyataan yang BENAR secara faktual."
  },
  {
    "topic": "Regresi Linear",
    "skill": "Koefisien Determinasi (R-Square)",
    "difficulty": "medium",
    "q": "Berdasarkan output ANOVA pada regresi:\n\n**ANOVA**\n| | df | SS | MS | F | Sig. |\n|---|---|---|---|---|---|\n| Regression | 1 | 13.92 | 13.92 | 50.08 | 0.0001 |\n| Residual | 8 | 2.22 | 0.28 | | |\n| Total | 9 | 16.14 | | | |\n\nBerapa persentase variasi variabel dependen yang dapat dijelaskan oleh variabel independen?",
    "options": [
      "86.25%",
      "13.75%",
      "50.08%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Persentase variasi yang dapat dijelaskan adalah R-Square (R²). \nR² = SS Regression / SS Total = 13.92 / 16.14 = 0.86245... atau sekitar 86.25%."
  },
  {
    "topic": "ANOVA",
    "skill": "Tabel Two-way ANOVA",
    "difficulty": "medium",
    "q": "The result of a two-way ANOVA table is shown below. To find whether there is a difference in the average test scores based on teaching method, the correct interpretation is:\n\n| Source | SS | df | MS | F |\n|---|---|---|---|---|\n| Teaching Method | 150 | 2 | 75 | 5.0 |\n| Student Group | 200 | 3 | 66.67 | 4.44 |\n| Error | 90 | 6 | 15 | |\n| Total | 440 | 11 | | |",
    "options": [
      "Compare F = 5.0 with the critical value of F with df=2 and df=6.",
      "Compare F = 4.44 with the critical value of F with df=3 and df=6.",
      "Compare MS = 75 with MS = 15.",
      "The test score does not depend on the teaching method."
    ],
    "answer": 0,
    "explanation": "Untuk menguji efek Teaching Method, kita melihat nilai F untuk baris tersebut, yaitu F = 5.0. Derajat bebas pembilang adalah df untuk Teaching Method (2), dan penyebut adalah df untuk Error (6). Oleh karena itu, kita membandingkan F = 5.0 dengan F kritis berderajat bebas (2, 6)."
  },
  {
    "topic": "Regresi Multiple",
    "skill": "Membentuk Persamaan",
    "difficulty": "basic",
    "q": "Dengan menggunakan informasi di bawah ini:\n\n**Coefficients**\n| Variabel | Coefficients |\n|---|---|\n| Intercept | 45.6 |\n| Promosi (X1) | 3.2 |\n| Harga (X2) | -1.5 |\n\nPersamaan regresinya adalah:",
    "options": [
      "Y = 45.6 + 3.2X1 - 1.5X2",
      "Y = 45.6 - 3.2X1 + 1.5X2",
      "Y = 3.2X1 - 1.5X2",
      "Y = 45.6 + 3.2X1 + 1.5X2"
    ],
    "answer": 0,
    "explanation": "Persamaan regresi berganda dibentuk dari nilai koefisien (b). Konstanta (Intercept) = 45.6, koefisien X1 = 3.2, koefisien X2 = -1.5. Jadi, persamaan: Y = 45.6 + 3.2X1 - 1.5X2."
  },
  {
    "topic": "Regresi Linear",
    "skill": "Koefisien Korelasi",
    "difficulty": "medium",
    "q": "Sebuah penelitian dilakukan untuk melihat hubungan antara biaya promosi dan penjualan. Didapatkan nilai SS Regression = 45, dan SS Total = 100. Jika arah hubungannya positif, nilai koefisien korelasi (r) yang tepat adalah:",
    "options": [
      "0.45",
      "0.67",
      "-0.67",
      "2.22"
    ],
    "answer": 1,
    "explanation": "Pertama, hitung R-Square (Koefisien Determinasi): R² = SS Regression / SS Total = 45 / 100 = 0.45. \nNilai koefisien korelasi (r) adalah akar kuadrat dari R². \nr = √0.45 = 0.6708...\nKarena disebutkan arah hubungan positif, maka r = +0.67."
  },
  {
    "topic": "Regresi Multiple",
    "skill": "Prediksi",
    "difficulty": "medium",
    "q": "Jika sebuah perusahaan ritel (X) memiliki persamaan regresi Y = 10.5 + 2.4X1 + 1.2X2, di mana Y adalah penjualan (dalam puluhan juta IDR), X1 adalah biaya iklan (dalam puluhan juta IDR), dan X2 adalah luas toko (dalam ratusan m2). Jika perusahaan menghabiskan 30,000,000 IDR untuk iklan dan memiliki luas toko 500 m2, estimasi penjualan adalah:",
    "options": [
      "23.7 (237 juta IDR)",
      "10.5 (105 juta IDR)",
      "75.5 (755 juta IDR)",
      "23.7 (23.7 juta IDR)"
    ],
    "answer": 0,
    "explanation": "Skalakan nilai variabel: X1 = 30 juta / 10 juta = 3. X2 = 500 / 100 = 5. \nY = 10.5 + 2.4(3) + 1.2(5) = 10.5 + 7.2 + 6.0 = 23.7.\nKarena Y dalam satuan puluhan juta, maka hasilnya adalah 23.7 x 10,000,000 = 237,000,000 IDR (atau 23.7 puluhan juta)."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Asumsi Regresi",
    "difficulty": "basic",
    "q": "Manakah dari pernyataan berikut yang merupakan salah satu dari asumsi dasar regresi linear OLS?",
    "options": [
      "Variabel independen harus terdistribusi normal.",
      "Varians residual (error) bersifat konstan di sepanjang nilai prediksi (Homoskedastisitas).",
      "Terdapat multikolinearitas yang tinggi antar variabel independen.",
      "Hubungan antara variabel dependen dan independen bersifat non-linear."
    ],
    "answer": 1,
    "explanation": "Asumsi regresi linear klasik (OLS) mencakup: 1) Linearitas, 2) Independensi error (tidak ada autokorelasi), 3) Homoskedastisitas (varians error konstan), 4) Error terdistribusi normal. Tidak ada syarat bahwa variabel independen harus normal, melainkan residualnya."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Pilihan Metode",
    "difficulty": "medium",
    "q": "The researcher would like to see whether there is any correlation between a manager's performance ranking (ranked 1st, 2nd, 3rd, etc.) and the morale level of their department (High, Medium, Low). Which test should the researcher use?",
    "options": [
      "Pearson Correlation",
      "Spearman Rank Correlation",
      "Independent T-Test",
      "Analysis of Variance (ANOVA)"
    ],
    "answer": 1,
    "explanation": "Kedua variabel berupa data ordinal (ranking performa dan level semangat kerja ordinal). Korelasi yang tepat untuk data berskala ordinal adalah Spearman Rank Correlation."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Interpretasi Scatter Plot",
    "difficulty": "basic",
    "q": "Kesimpulan sederhana dari grafik scatter plot yang menunjukkan titik-titik menyebar dari kiri atas ke kanan bawah secara merata adalah:",
    "options": [
      "Terdapat hubungan positif yang kuat.",
      "Terdapat hubungan negatif yang kuat.",
      "Tidak terdapat hubungan linear antara kedua variabel.",
      "Hubungan bersifat eksponensial positif."
    ],
    "answer": 1,
    "explanation": "Pola penyebaran dari kiri atas ke kanan bawah (garis lurus menurun) mengindikasikan adanya hubungan linear yang negatif (semakin besar X, semakin kecil Y). Jika titik-titik tersebut merata dan rapat mengikuti garis lurus, maka hubungannya negatif dan kuat."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Interval Prediksi",
    "difficulty": "advanced",
    "q": "Dengan menggunakan informasi di bawah ini:\n\n**Regression Statistics**\n| Metric | Value |\n|---|---|\n| Standard Error | 2.143 |\n| Observations | 25 |\n\n**Coefficients**\n| Variabel | Coefficients |\n|---|---|\n| Intercept | 2.169 |\n| Luas Toko | 1.179 |\n\nNilai rata-rata luas toko seluruh cabang adalah 3.24 (100 m²), dan fraksi jarak kuadrat (leverage) untuk X=3.5 adalah 0.00116. Prediksi ($\\hat{Y}$) untuk X=3.5 adalah 6.29. Jika nilai t-kritis untuk tingkat kepercayaan 95% adalah 2.069, buatlah interval **prediksi** (Prediction Interval) untuk penjualan cabangan Y pada X=3.5.",
    "options": [
      "1.85 hingga 10.74",
      "1.76 hingga 10.82",
      "6.02 hingga 6.56",
      "5.98 hingga 6.60"
    ],
    "answer": 1,
    "explanation": "Rumus batas margin of error untuk Prediction Interval (PI): \nE = t_kritis * S_e * √[1 + (1/n) + leverage].\nE = 2.069 * 2.143 * √[1 + (1/25) + 0.00116]\nE = 4.4338 * √[1 + 0.04 + 0.00116]\nE = 4.4338 * √[1.04116] = 4.4338 * 1.02037 = 4.524.\nBatas bawah: 6.29 - 4.524 = 1.766.\nBatas atas: 6.29 + 4.524 = 10.814.\nJadi, nilai interval prediksi yang mendekati adalah 1.76 hingga 10.82."
  },
  {
    "topic": "Time Series",
    "skill": "Indeks Musiman",
    "difficulty": "advanced",
    "q": "Taman Bermain \"HEPPI\" mencatat indeks rata-rata pengunjung sementara (unadjusted) per musim adalah: Dingin = 1.25, Semi = 0.85, Panas = 1.30, Gugur = 0.75. \nFaktor koreksi (correction factor) yang tepat untuk menyesuaikan indeks musiman ini adalah:",
    "options": [
      "1.00",
      "4.00",
      "0.9638",
      "1.037"
    ],
    "answer": 2,
    "explanation": "Jumlah dari indeks rata-rata (unadjusted) 4 kuartal (musim) seharusnya adalah 4.0. \nTotal indeks sementara = 1.25 + 0.85 + 1.30 + 0.75 = 4.15.\nFaktor koreksi = 4.0 / Total indeks sementara = 4.0 / 4.15 = 0.963855..."
  },
  {
    "topic": "Time Series",
    "skill": "Indeks Musiman",
    "difficulty": "advanced",
    "q": "Berdasarkan faktor koreksi pada soal Taman Bermain \"HEPPI\" sebelumnya (Faktor Koreksi = 0.96385), berapakah indeks musiman final untuk musim Panas?",
    "options": [
      "1.253",
      "1.300",
      "1.152",
      "0.722"
    ],
    "answer": 0,
    "explanation": "Indeks musiman final = Indeks sementara x Faktor Koreksi.\nUntuk Musim Panas: 1.30 * (4.0 / 4.15) = 1.30 * 0.963855 = 1.25301... (sekitar 1.253)."
  },
  {
    "topic": "Regresi Linear",
    "skill": "Membaca Output",
    "difficulty": "medium",
    "q": "Dari hasil estimasi antara luas toko (X) dan penjualan (Y), jika didapatkan P-value untuk koefisien Luas Toko sebesar 0.0003, maka pernyataan yang benar adalah (asumsikan tingkat signifikansi 5%):",
    "options": [
      "Luas toko tidak memiliki pengaruh yang signifikan terhadap penjualan.",
      "Luas toko memiliki pengaruh yang signifikan terhadap penjualan.",
      "Uji F pasti tidak signifikan.",
      "Hipotesis nol (H0: koefisien = 0) gagal ditolak."
    ],
    "answer": 1,
    "explanation": "P-value (0.0003) < α (0.05), yang berarti H0 ditolak. Oleh karena itu, terdapat cukup bukti bahwa luas toko (X) memiliki pengaruh yang signifikan secara statistik terhadap penjualan (Y)."
  },
  {
    "topic": "ANOVA",
    "skill": "Memilih Uji ANOVA",
    "difficulty": "medium",
    "q": "As a regional sales manager, Andy is deeply concerned about the variation in sales performance averages among his sales staff across different branches under his jurisdiction. With five salespersons operating in distinct branches, each representing a sub-region within Andy's jurisdiction, he hypothesizes that certain staff members may be more effective due to their alignment with local cultural norms and the primary customer base within specific sub-regions, potentially leading to an interaction effect. To thoroughly assess his hypothesis, which statistical test would be most appropriate for Andy?",
    "options": [
      "Two-way Anova with interaction",
      "One-way Anova",
      "Test of equal population variance",
      "Two-way Anova without interaction"
    ],
    "answer": 0,
    "explanation": "Andy ingin menguji dua faktor (salesperson dan sub-region) dan menduga adanya efek interaksi (pengaruh satu faktor bergantung pada faktor lain), sehingga Two-way ANOVA with interaction adalah uji yang paling tepat."
  },
  {
    "topic": "ANOVA",
    "skill": "Perbedaan One-way dan Two-way ANOVA",
    "difficulty": "basic",
    "q": "What is the key difference between one-way ANOVA and two-way ANOVA?",
    "options": [
      "One-way ANOVA analyzes data with one dependent variable, while two-way ANOVA analyzes data with two dependent variables.",
      "One-way ANOVA is suitable for comparing means when there is no interaction effect, while two-way ANOVA examines only the interaction effects between two independent variables.",
      "One-way ANOVA is used for independent samples, while two-way ANOVA is used for dependent samples.",
      "One-way ANOVA compares means across multiple groups within a single factor, while two-way ANOVA compares means considering the influence of two independent variables."
    ],
    "answer": 3,
    "explanation": "Perbedaan utamanya ada pada jumlah variabel independen (faktor). One-way ANOVA membandingkan nilai mean antar grup dalam 1 faktor. Two-way ANOVA menganalisis efek dari 2 faktor independen terhadap 1 variabel dependen, serta interaksinya."
  },
  {
    "topic": "Statistik Non-Parametrik",
    "skill": "Korelasi Spearman",
    "difficulty": "advanced",
    "q": "Universitas \"MACAN TUTUL\" menawarkan kelas pagi dan malam untuk Program Studi S1 Administrasi Bisnis. Survei dilakukan kepada mahasiswa tentang persepsi terhadap prestis suatu bidang karir, dengan melakukan pemeringkatan dari 1-8 (1 adalah paling prestisius, dan 8 adalah paling tidak prestisius). Hasil survei tersebut ditampilkan dengan (Jenis karir; Pemeringkatan Kelas Pagi; Pemeringkatan Kelas Malam), sehingga secara berturut-turut data tersebut adalah (Akuntan;6;3), (Programer Komputer;7;2), (Manager Bank; 2;6), (Admin RumahSakit;5;4), (Ahli Statistik;1;7), (Peneliti Pasar;4;8), (Analis Saham;3;5), (Manager Produksi;8;1). Berdasarkan nilai koefisien korelasi Spearmannya, maka interpretasi yang benar adalah:",
    "options": [
      "Terdapat korelasi negatif dan kuat pemeringkatan karir oleh mahasiswa kelas pagi dan malam.",
      "Terdapat korelasi positif dan kuat pemeringkatan karir oleh mahasiswa kelas pagi dan malam.",
      "Terdapat korelasi positif dan lemah pemeringkatan karir oleh mahasiswa kelas pagi dan malam.",
      "Terdapat korelasi negatif dan lemah pemeringkatan karir oleh mahasiswa kelas pagi dan malam."
    ],
    "answer": 0,
    "explanation": "Selisih peringkat (d): (6-3=3), (7-2=5), (2-6=-4), (5-4=1), (1-7=-6), (4-8=-4), (3-5=-2), (8-1=7).\nd² = 9 + 25 + 16 + 1 + 36 + 16 + 4 + 49 = 156.\nrs = 1 - [ (6 * 156) / (8 * (64-1)) ] = 1 - (936 / 504) = 1 - 1.857 = -0.857.\nKorelasi negatif (-0.857) yang mendekati -1 berarti ada korelasi negatif yang sangat kuat antar pemeringkatan dua kelas tersebut."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Interpretasi Persamaan Regresi",
    "difficulty": "basic",
    "q": "Jika hasil estimasi regresi sederhana antara Total Biaya ($C$) dan barang yang diproduksi ($Q$) pada perusahaan DEF adalah sebagai berikut:\n\n$C = 3,000 + 2Q$\n\nMaka mana pernyataan di bawah ini yang benar?",
    "options": [
      "Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $0",
      "Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $3,000",
      "Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $2",
      "Jika perusahaan DEF menambah 1 produksi barang, maka tambahan biaya yang dibutuhkan adalah sebesar $3,000"
    ],
    "answer": 1,
    "explanation": "Konstanta (intercept) sebesar 3,000 adalah komponen biaya tetap (fixed cost). Jika Q = 0 (tidak ada produksi), maka total biaya C = 3,000 + 2(0) = 3,000. Sementara, gradien (2) menunjukkan tambahan biaya jika memproduksi tambahan 1 barang."
  },
  {
    "topic": "ANOVA",
    "skill": "Tujuan Penggunaan ANOVA",
    "difficulty": "basic",
    "q": "Which statistical test is appropriate for comparing means across multiple groups?",
    "options": [
      "Analysis of Variance (Anova)",
      "Pearson correlation coefficient",
      "Chi-square test",
      "t-test"
    ],
    "answer": 0,
    "explanation": "ANOVA (Analysis of Variance) adalah uji statistik parametrik yang secara khusus didesain untuk membandingkan perbedaan rata-rata populasi (means) antara 3 kelompok atau lebih. Jika hanya ada dua kelompok, t-test digunakan."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Moving Average",
    "difficulty": "medium",
    "q": "Berikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MA3 (moving average) untuk produksi tahun 2006 adalah:",
    "options": [
      "7",
      "5",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Untuk menghitung Moving Average 3 periode (MA3) di tahun tertentu, kita dapat menggunakan Trailing MA (rata-rata 3 tahun berakhir di tahun tersebut) atau Centered MA (rata-rata 3 tahun yang berpusat di tahun tersebut). Karena seri dimulai dari 2005, kita tidak memiliki data untuk 2004 atau sebelumnya. Sehingga Trailing MA untuk 2006 (rata-rata 2004, 2005, 2006) tidak mungkin dihitung. Maka metode Centered MA yang digunakan: MA3(2006) = rata-rata (2005, 2006, 2007) = (2 + 6 + 4) / 3 = 12 / 3 = 4."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Signifikansi Korelasi",
    "difficulty": "advanced",
    "q": "Dengan menggunakan rumus uji t korelasi dengan $n-2$ *degrees of freedom*:\n\n$t = \\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}$\n\nPada data di bawah ini:\n\n| X | Y |\n|:---:|:---:|\n| 4 | 4 |\n| 5 | 6 |\n| 3 | 5 |\n| 6 | 7 |\n| 10 | 7 |\n\nDapat disimpulkan bahwa (pada tingkat kesalahan 5%, t-tabel uji dua sisi, df=3 adalah sekitar 3.182):",
    "options": [
      "Terdapat korelasi positif di populasi yang signifikan pada derajat kesalahan 5%",
      "Terdapat korelasi negatif di populasi yang signifikan pada derajat kesalahan 5%",
      "Tidak terdapat korelasi di populasi yang signifikan pada derajat kesalahan 5%",
      "Terdapat korelasi positif di populasi yang signifikan pada derajat kesalahan 10%"
    ],
    "answer": 2,
    "explanation": "Pertama kita hitung koefisien korelasi pearson (r). Dari hasil perhitungan X={4,5,3,6,10} dan Y={4,6,5,7,7}, kita temukan r ≈ 0.752. Lalu kita hitung t-statistik: t = 0.752 * √3 / √(1 - 0.752²) = 0.752 * 1.732 / √0.434 = 1.302 / 0.658 ≈ 1.977. Karena t-hitung (1.977) lebih kecil dari t-tabel kritis 3.182, kita gagal menolak H0. Jadi tidak ada cukup bukti (tidak signifikan pada α=5%) bahwa terdapat korelasi di populasi."
  },
  {
    "topic": "ANOVA",
    "skill": "Kesimpulan Uji Signifikansi",
    "difficulty": "medium",
    "q": "Suppose you find that there is a statistically significant difference between end-of-term statistical subject exams across several sections. What is the correct conclusion for this result?",
    "options": [
      "The statistically significant difference proves that the exams were unfairly graded.",
      "The difference in end-of-term statistical subject exams means that one class is inherently better than the others in all subjects.",
      "The statistically significant difference indicates that the exam scores are biased and should not be considered valid.",
      "The significant difference suggests that there may be factors, such as different teaching methods or student engagement levels, contributing to the variation in exam scores."
    ],
    "answer": 3,
    "explanation": "Signifikansi statistik (menolak H0) hanya memberi tahu kita bahwa secara matematis terdapat perbedaan nyata antar kelompok populasi. Kesimpulan inferensial murni tidak bisa 'membuktikan' adanya ketidakadilan, bias ekstrim, atau kemampuan inherent. Perbedaan tersebut membuka ruang bahwa ada faktor penjelas potensial yang mempengaruhi perbedaan tersebut (contoh: metode ajar, usaha mahasiswa, kualitas bahan studi)."
  },
  {
    "topic": "ANOVA",
    "skill": "Syarat ANOVA",
    "difficulty": "medium",
    "q": "What are the proper requirements for a dataset when conducting hypothesis testing with Analysis of Variance (ANOVA)?",
    "options": [
      "Normally distributed residuals and at least interval-scale for the dependent variable",
      "The variance between two or more groups is similar and the dependent variable must be nominal-scale",
      "The independent variables must be continuous and dependent variable is categorical",
      "Normally distributed and must be ratio-scale only"
    ],
    "answer": 0,
    "explanation": "Asumsi utama ANOVA untuk variabel dependen (Y) meliputi: (1) Sampel bersifat acak dan saling bebas (independent). (2) Residu (atau data per grup) terdistribusi mendekati normal. (3) Memiliki varians populasi yang sama antar kelompok (Homogeneity of Variance / Homoscedasticity). (4) Skala data dependen bersifat interval atau rasio."
  },
  {
    "topic": "ANOVA",
    "skill": "Jenis ANOVA Berulang",
    "difficulty": "medium",
    "q": "Suppose you are analyzing the mean value differences between end-of-term statistical subject exams. There are four classes, and it is common for the same group of students to take multiple related assessments over time, leading to non-independent measurements. Based on this situation, what is the most appropriate statistical test?",
    "options": [
      "One-way ANOVA without repetitive measurement",
      "Repeated measures ANOVA",
      "Two-way ANOVA without repetitive measurement",
      "Independent two-sample t-test"
    ],
    "answer": 1,
    "explanation": "Jika observasi bersifat terkait atau berulang (misal: subjek yang sama diukur pada titik waktu/kondisi yang berbeda), maka kita tidak bisa menggunakan ANOVA standar karena melanggar asumsi independensi kelompok. Metode yang tepat adalah Repeated Measures ANOVA (analisis varians pengukuran berulang)."
  },
  {
    "topic": "Pengujian Hipotesis (2 Sampel)",
    "skill": "T-test vs ANOVA",
    "difficulty": "medium",
    "q": "What is the primary distinction between an independent two-sample t-test and a One-Way ANOVA?",
    "options": [
      "The independent two-sample t-test can only be used for paired samples, whereas ANOVA is used for unpaired samples.",
      "An independent two-sample t-test can compare only for two groups simultaneously, while ANOVA is not limited to comparing two groups and is typically used for three or more.",
      "An independent two-sample t-test is used for testing the relationship between two categorical variables, while ANOVA is used for testing the relationship between two continuous variables.",
      "Independent two-sample t-test is used when comparing values between two variables, while ANOVA is used when comparing more than two variables."
    ],
    "answer": 1,
    "explanation": "Independent t-test khusus dibuat untuk membandingkan rata-rata dari tepat 2 kelompok independen (misal: kelas A vs kelas B). Sementara ANOVA dirancang sebagai perluasan dari t-test, yang dapat membandingkan rata-rata untuk 2 atau lebih kelompok sekaligus tanpa meningkatkan risiko terjadinya Type I Error berantai."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Koefisien Korelasi",
    "difficulty": "medium",
    "q": "Dengan menggunakan rumus koefisien korelasi:\n\n$r = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{(n - 1)s_x s_y}$\n\nPada data (X, Y) berikut: (4, 4), (5, 6), (3, 5), (6, 7), (10, 7). \nNilai koefisien korelasinya adalah sekitar 0.752. Berdasarkan nilai ini, dapat disimpulkan bahwa:",
    "options": [
      "X dan Y tidak memiliki korelasi",
      "X dan Y memiliki korelasi positif dan tergolong kuat",
      "X dan Y memiliki korelasi positif dan tergolong lemah",
      "X dan Y memiliki korelasi negatif dan tergolong kuat"
    ],
    "answer": 1,
    "explanation": "Nilai r = +0.752. Karena nilainya positif, arah hubungannya berbanding lurus (saat X naik, Y cenderung naik). Nilai tersebut lebih dari 0.7, sehingga secara umum (sebagai rule-of-thumb empiris) masuk dalam kategori hubungan linier positif yang kuat (strong positive correlation)."
  },
  {
    "topic": "Time Series",
    "skill": "Model Komponen",
    "difficulty": "basic",
    "q": "Dalam analisis deret waktu klasik (Time Series), pola pergerakan data ke atas atau ke bawah secara konsisten dalam jangka waktu yang sangat panjang (lebih dari satu siklus bisnis penuh) dikenal dengan komponen:",
    "options": [
      "Seasonal variation",
      "Cyclical variation",
      "Secular trend",
      "Irregular fluctuation"
    ],
    "answer": 2,
    "explanation": "Secular Trend mencerminkan arah pergerakan dasar (jangka panjang) dari suatu deret waktu (meningkat rata, menurun rata, dsb). Seasonal (berulang dalam 1 tahun), Cyclical (gelombang ekspansi dan resesi lintas tahunan yang lebih dinamis dari sekadar tren linier), Irregular (acak)."
  },
  {
    "topic": "Statistik Non-Parametrik",
    "skill": "Uji Kecocokan (Goodness of Fit)",
    "difficulty": "medium",
    "q": "Seorang manager swalayan ingin mengevaluasi apakah jumlah pengunjung terdistribusi secara merata (sama banyak) ke setiap harinya dari Senin hingga Minggu. Manajer tersebut mencatat frekuensi pengunjung aktual per hari selama sebulan. Uji statistik apakah yang tepat untuk membandingkan pola distribusi yang diamati dengan distribusi pemerataan sempurna?",
    "options": [
      "Chi-Square Goodness-of-Fit test",
      "Kruskal-Wallis test",
      "Wilcoxon signed-rank test",
      "Spearman correlation test"
    ],
    "answer": 0,
    "explanation": "Karena datanya berbentuk frekuensi pengamatan pada beberapa kategori nominal (hari dalam seminggu), dan tujuannya adalah mencocokkan distribusi aktual (observed) dengan distribusi ekspektasi teoretis (rata), maka uji yang paling sesuai adalah Chi-Square Goodness-of-Fit test."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Standard Error of Estimate",
    "difficulty": "medium",
    "q": "The Standard Error of the Estimate (Se) dalam sebuah persamaan regresi linear sederhana mengukur...",
    "options": [
      "Tingkat korelasi antara X dan Y.",
      "Varians yang dapat dijelaskan oleh variabel independen.",
      "Keseragaman sebaran nilai data Y aktual di sekitar garis regresi (predicted Y).",
      "Peluang slope (gradien) dari persamaan regresi tersebut bernilai sama dengan nol."
    ],
    "answer": 2,
    "explanation": "Standard error of the estimate (S_yx) adalah ukuran rata-rata penyimpangan standar (deviasi) dari titik data aktual (Y) terhadap garis prediksi (Y-topi/fitted line). Nilai ini membantu kita mengetahui tingkat akurasi prediksi model."
  },
  {
    "topic": "ANOVA",
    "skill": "Interpretasi P-value ANOVA",
    "difficulty": "basic",
    "q": "Dari output SPSS untuk One-way ANOVA perbandingan rata-rata kecepatan layanan 4 kasir, didapatkan P-value (Sig.) sebesar 0.012. Jika manajemen menggunakan tingkat signifikansi 5%, maka kesimpulan akhir adalah:",
    "options": [
      "Menerima H0, berarti semua kasir memiliki rata-rata kecepatan layanan yang identik.",
      "Menerima H0, berarti setidaknya dua kasir memiliki rata-rata kecepatan yang berbeda.",
      "Menolak H0, berarti semua kasir memiliki rata-rata kecepatan yang berbeda satu sama lain (setiap pasangan pasti berbeda).",
      "Menolak H0, berarti setidaknya ada satu rata-rata kecepatan kasir yang secara signifikan berbeda dibanding yang lainnya."
    ],
    "answer": 3,
    "explanation": "P-value (0.012) < alpha (0.05) → Tolak hipotesis nol (H0). Dalam ANOVA, hipotesis alternatif (H1) menyatakan bahwa 'minimal terdapat satu mean populasi (kelompok) yang berbeda'. Hal ini tidak serta merta mengimplikasikan bahwa SEMUA mean berbeda. Untuk mengecek grup mana yang berbeda, uji lanjut post-hoc (seperti Tukey) diperlukan."
  },
  {
    "topic": "Bonus: Uji Asumsi Klasik",
    "skill": "Autokorelasi",
    "difficulty": "advanced",
    "q": "[BONUS] Suatu studi regresi deret waktu menghasilkan uji Durbin-Watson (DW) sebesar 0.45. Secara teoretis dengan asumsi ambang batas aman DW, interpretasi terbaik adalah:",
    "options": [
      "Tidak terjadi autokorelasi (error saling bebas).",
      "Terjadi indikasi autokorelasi positif yang sangat kuat pada residual.",
      "Terjadi indikasi autokorelasi negatif yang sangat kuat pada residual.",
      "Terdapat gejala multikolinearitas ekstrim antar variabel independen."
    ],
    "answer": 1,
    "explanation": "Uji Durbin-Watson berkisar dari 0 hingga 4. Nilai di sekitar 2 menunjukkan tidak ada autokorelasi. Nilai yang sangat kecil (mendekati 0) menunjukkan autokorelasi positif (error periode n berkorelasi dengan error periode n-1), sedangkan nilai mendekati 4 menunjukkan autokorelasi negatif."
  },
  {
    "topic": "Bonus: Time Series",
    "skill": "Smoothing Method",
    "difficulty": "advanced",
    "q": "[BONUS] Manakah metode peramalan yang memberikan bobot lebih berat (lebih tinggi) secara eksponensial kepada observasi data historis yang paling baru?",
    "options": [
      "Simple Moving Average",
      "Weighted Moving Average",
      "Exponential Smoothing",
      "Linear Trend Equation"
    ],
    "answer": 2,
    "explanation": "Metode Exponential Smoothing (Penghalusan Eksponensial) menggunakan konstanta smoothing (alpha) untuk memberikan pembobotan yang menurun secara eksponensial terhadap data masa lalu. Data yang paling baru mendapatkan porsi bobot (perhatian) paling besar dibanding data yang sangat lampau."
  },
  {
    "topic": "Bonus: Non-Parametrik",
    "skill": "Kruskal-Wallis Test",
    "difficulty": "advanced",
    "q": "[BONUS] Uji non-parametrik Kruskal-Wallis adalah alternatif langsung yang paling tepat digunakan apabila analisis parametrik untuk... tidak memenuhi syarat.",
    "options": [
      "Independent two-sample t-test",
      "Paired two-sample t-test",
      "One-Way ANOVA",
      "Pearson Correlation"
    ],
    "answer": 2,
    "explanation": "Kruskal-Wallis test digunakan untuk membandingkan tiga atau lebih grup (sampel) independen apabila data tidak memenuhi asumsi normalitas. Ini merupakan padanan langsung (non-parametric counterpart) dari One-Way ANOVA."
  },
  {
    "topic": "Bonus: Multiple Regression",
    "skill": "Adjusted R-Square",
    "difficulty": "advanced",
    "q": "[BONUS] Mengapa Adjusted R-Square lebih disukai daripada R-Square biasa saat mengevaluasi model regresi linear berganda?",
    "options": [
      "Adjusted R-Square selalu lebih besar dari R-Square.",
      "Adjusted R-Square hanya mempertimbangkan variabel yang benar-benar linier secara sempurna.",
      "Adjusted R-Square memberikan penalti (hukuman) atas penambahan variabel independen yang tidak memiliki daya prediksi nyata ke dalam model.",
      "Adjusted R-Square mengubah distribusi non-normal menjadi normal."
    ],
    "answer": 2,
    "explanation": "R-Square murni selalu bertambah (atau setidaknya tetap) setiap kali ada penambahan variabel independen baru, meskipun variabel itu tidak berguna. Adjusted R-Square memasukkan koreksi jumlah derajat bebas sehingga menyeimbangkan kompleksitas model dengan tambahan prediktivitas riil (terkena penalti jika menambah variabel ampas)."
  },
  {
    "topic": "Bonus: Korelasi",
    "skill": "Korelasi vs Kausalitas",
    "difficulty": "medium",
    "q": "[BONUS] Ditemukan korelasi positif (r = 0.91) antara tingginya angka penjualan es krim di sebuah kota wisata dan tingginya angka kecelakaan tenggelam di laut. Berdasarkan prinsip statistika, pernyataan paling kritis adalah:",
    "options": [
      "Memakan es krim secara langsung memicu risiko keram saat berenang.",
      "Pemerintah kota sebaiknya melarang penjualan es krim untuk menurunkan angka tenggelam.",
      "Hubungan tersebut kuat, sehingga korelasi di sini sama dengan kausalitas absolut.",
      "Korelasi yang tinggi bisa jadi disebabkan oleh faktor ketiga (confounding variable), misalnya meningkatnya suhu/cuaca musim panas."
    ],
    "answer": 3,
    "explanation": "Prinsip dasar 'Correlation does not imply causation' (Korelasi tidak menyiratkan sebab-akibat). Faktor eksternal seperti musim panas (suhu naik) memicu orang beramai-ramai membeli es krim DAN juga beramai-ramai berenang ke pantai, menyebabkan kedua variabel (yang tidak terkait langsung) tampak berkorelasi tinggi."
  },
  {
    "topic": "Bonus: Time Series",
    "skill": "Deseasonalization",
    "difficulty": "advanced",
    "q": "[BONUS] Dalam proses memprediksi deret waktu bulanan, mengapa analis sering melakukan prosedur 'deseasonalizing' (menghilangkan efek musim) pada data historis penjualan terlebih dahulu?",
    "options": [
      "Agar total omset tahunan terlihat lebih kecil dan lebih hemat pajak.",
      "Untuk dapat melihat trend penjualan murni dan fluktuasi siklis tanpa tertutupi oleh efek fluktuasi rutin musiman.",
      "Karena siklus musiman membuat error eksponensial menjadi tak berhingga.",
      "Agar data dapat dikonversi menjadi skala rasio."
    ],
    "answer": 1,
    "explanation": "Efek musiman berulang-ulang menciptakan gelombang yang sering menyembunyikan gambaran riil dari perkembangan bisnis. Dengan menghapus efek musiman (deseasonalizing), analis bisa mendapatkan visibilitas yang jernih untuk mengevaluasi Secular Trend (apakah bisnis ini sejatinya sedang bertumbuh atau menyusut)."
  },
  {
    "topic": "Bonus: Hipotesis",
    "skill": "Type I Error",
    "difficulty": "advanced",
    "q": "[BONUS] Dalam sistem peradilan kriminal, hipotesis nol (H0) biasanya adalah 'Terdakwa tidak bersalah (Innocent)'. Apa konsekuensi dari melakukan Type I Error dalam kasus ini?",
    "options": [
      "Membebaskan seorang terdakwa yang sebenarnya terbukti bersalah.",
      "Memenjarakan seorang terdakwa yang sebenarnya tidak bersalah.",
      "Hakim gagal memutuskan sehingga sidang ditunda.",
      "Terdakwa mengakui kesalahannya sendiri."
    ],
    "answer": 1,
    "explanation": "Type I Error (alpha) adalah kesalahan 'Menolak H0 yang sebenarnya Benar'. Jika H0 (Tidak bersalah) ternyata benar, tapi pengadilan menolaknya, berarti orang yang tidak bersalah telah divonis hukuman (dinyatakan bersalah)."
  },
  {
    "topic": "Bonus: Hipotesis",
    "skill": "One-tail vs Two-tail",
    "difficulty": "medium",
    "q": "[BONUS] Seorang ahli gizi menguji klaim perusahaan bahwa formula diet baru dapat menurunkan berat badan pasien. Ahli tersebut tidak peduli jika ternyata diet tersebut membuat pasien makin gemuk atau tidak berdampak; ia HANYA peduli jika diet benar-benar MENURUNKAN berat badan. Pengujian apakah yang ia lakukan?",
    "options": [
      "Two-tailed hypothesis test",
      "One-tailed hypothesis test (Left/Lower tail)",
      "One-tailed hypothesis test (Right/Upper tail)",
      "Non-parametric interval test"
    ],
    "answer": 1,
    "explanation": "Fokus pada satu arah tertentu (menurunkan berat badan/perubahan < 0) berarti ini adalah One-tailed test. Karena arah yang dicari adalah penurunan (negatif/lebih rendah), ini masuk kategori Left/Lower-tailed test."
  },
  {
    "topic": "Bonus: ANOVA",
    "skill": "Post-hoc Test",
    "difficulty": "advanced",
    "q": "[BONUS] Setelah mendapatkan P-value = 0.003 pada hasil uji ANOVA perbandingan mutu lima merek beras, seorang peneliti perlu mengaplikasikan Tukey's HSD (Honestly Significant Difference). Tujuan dari uji Tukey adalah:",
    "options": [
      "Menentukan apakah varians dari kelima merek beras setara atau tidak.",
      "Mendeteksi jika ada residu antar sampel yang saling berkorelasi.",
      "Menemukan pasangan merek beras mana saja yang persisnya memiliki perbedaan mean yang signifikan.",
      "Meningkatkan P-value ANOVA sehingga menjadi tidak signifikan."
    ],
    "answer": 2,
    "explanation": "ANOVA hanya mengindikasikan H1 'setidaknya ada satu pasang (atau lebih) rata-rata kelompok yang berbeda', tetapi tidak memberi tahu spesifik grup mana saja yang berbeda. Uji post-hoc seperti Tukey HSD bertujuan mencari pasangan (pairwise comparison) kelopok mana yang meannya berbeda signifikan."
  },
  {
    "topic": "Bonus: Regresi",
    "skill": "Multikolinearitas",
    "difficulty": "advanced",
    "q": "[BONUS] Tanda utama yang sering mengindikasikan adanya masalah Multikolinearitas (Kolinearitas Ganda) yang serius di dalam model regresi linear berganda adalah:",
    "options": [
      "R-Square sangat tinggi, tetapi sebagian besar uji-t individu (p-value variabel) gagal menolak H0 (tidak signifikan).",
      "Varians residu dari observasi menurun drastis pada titik data ke-N.",
      "Uji F dari model regresi menunjukkan nilai yang tidak signifikan secara absolut.",
      "Semua variabel independen memiliki uji-t individu yang sangat tinggi dan signifikan secara bersamaan."
    ],
    "answer": 0,
    "explanation": "Multikolinearitas terjadi ketika variabel-variabel independen berkorelasi terlampau kuat satu sama lain. Indikasi klasiknya adalah model keseluruhan terlihat sangat bagus (R² tinggi dan F-test kuat secara global), namun ketika dilihat per variabel (t-test), standar error membengkak sehingga hampir tidak ada satupun prediktor yang signifikan karena mereka 'berebut' menjelaskan hal yang sama."
  }
];

export const MAS122_QUIZ_ALL: QuizQuestion[] = [...MAS122_QUIZ, ...MAS122_UAS_2024];
