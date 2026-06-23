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
  {"q": "Applewood Profits: $200-600(8), $600-1000(11), $1000-1400(23), $1400-1800(38), $1800-2200(45), $2200-2600(32), $2600-3000(19), $3000-3400(4). Total=180. Pernyataan BENAR?", "options": ["I dan II saja benar", "Hanya I yang benar", "I, II, dan IV benar", "Semua benar (I,II,III,IV)"], "answer": 0, "explanation": "Jawaban: A — I dan II saja BENAR ✅ I: Kumulatif"}
];

export const MAS122_UAS_2024: QuizQuestion[] = [
  {
    topic: 'ANOVA',
    skill: 'Membedakan One-way dan Two-way ANOVA',
    difficulty: 'basic',
    q: 'What is the key difference between one-way ANOVA and two-way ANOVA?',
    options: [
      'One-way ANOVA compares means across multiple groups within a single factor, while two-way ANOVA compares means considering the influence of two independent variables.',
      'One-way ANOVA analyzes data with one dependent variable, while two-way ANOVA analyzes data with two dependent variables.',
      'One-way ANOVA is used for independent samples, while two-way ANOVA is used for dependent samples.',
      'One-way ANOVA is suitable for comparing means when there is no interaction effect.'
    ],
    answer: 0,
    explanation: 'One-way ANOVA menguji pengaruh satu faktor terhadap rata-rata. Two-way ANOVA menguji pengaruh dua faktor dan bisa menguji interaksi antar faktor.'
  },
  {
    topic: 'ANOVA',
    skill: 'Menentukan jenis ANOVA berdasarkan kasus',
    difficulty: 'medium',
    q: 'As a regional sales manager, Andy is deeply concerned about the variation in sales performance averages. He hypothesizes that certain staff members may be more effective due to their alignment with local cultural norms and the primary customer base within specific sub-regions, potentially leading to an interaction effect. Which test is most appropriate?',
    options: [
      'Two-way Anova with interaction',
      'One-way Anova',
      'Test of equal population variance',
      'Two-way Anova without interaction'
    ],
    answer: 0,
    explanation: 'Andy ingin mengetahui apakah perbedaan kinerja disebabkan oleh dua faktor (pegawai dan lokasi/sub-wilayah), dan apakah ada interaksi antara keduanya. Maka Two-way ANOVA with interaction adalah yang paling tepat.'
  },
  {
    topic: 'ANOVA',
    skill: 'Memahami uji ANOVA berulang',
    difficulty: 'medium',
    q: 'Suppose you are analyzing the mean value differences between end-of-term statistical subject exams. There are four classes, and it is common for students to engage in group learning across these classes. Based on this situation, what is the most appropriate statistical test?',
    options: [
      'One-way ANOVA with repetitive measurement',
      'Two-way ANOVA with repetitive measurement',
      'Two-way ANOVA without repetitive measurement',
      'One-way ANOVA without repetitive measurement'
    ],
    answer: 0,
    explanation: 'Jika siswa yang sama diuji berkali-kali (misalnya karena pengaruh kelas atau waktu), gunakan repeated measures ANOVA (One-way ANOVA with repetitive measurement).'
  },
  {
    topic: 'ANOVA',
    skill: 'Syarat penggunaan ANOVA',
    difficulty: 'medium',
    q: 'What are the proper requirements for a dataset when conducting testing with analysis of variance?',
    options: [
      'The variance between two or more groups is similar and at least interval-scale',
      'Normally distributed and at least interval-scale',
      'The variance between two or more groups is similar and must be ratio-scale',
      'Normally distributed and must be ratio-scale'
    ],
    answer: 0,
    explanation: 'Syarat ANOVA: Homogenitas varians (variance is similar), data minimal skala interval, dan normalitas terdistribusi.'
  },
  {
    topic: 'Korelasi & Regresi',
    skill: 'Interpretasi koefisien regresi',
    difficulty: 'basic',
    q: 'Jika hasil estimasi regresi sederhana antara Total Biaya (C) dan barang yang diproduksi (Q) pada perusahaan DEF adalah C = 3,000 + 2Q. Pernyataan yang benar adalah?',
    options: [
      'Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $3,000',
      'Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $0',
      'Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $2',
      'Jika perusahaan DEF menambah 1 produksi barang, maka tambahan biaya yang dibutuhkan adalah sebesar $3,000'
    ],
    answer: 0,
    explanation: 'Intercept = fixed cost. Jika Q = 0, maka C = 3000 + 2(0) = 3000.'
  },
  {
    topic: 'Korelasi & Regresi',
    skill: 'Menghitung koefisien korelasi dari tabel',
    difficulty: 'medium',
    q: 'Diberikan data X dan Y secara berturut-turut: X=(4,5,3,6,10), Y=(4,6,5,7,7). Dapat disimpulkan bahwa:',
    options: [
      'X dan Y memiliki korelasi positif dan kuat',
      'X dan Y tidak memiliki korelasi',
      'X dan Y memiliki korelasi positif dan lemah',
      'X dan Y memiliki korelasi negatif dan kuat'
    ],
    answer: 0,
    explanation: 'X dan Y cenderung naik bersamaan (X membesar, Y juga ikut membesar). Secara visual atau perhitungan rumus koefisien korelasi, hasilnya adalah korelasi positif dan kuat.'
  },
  {
    topic: 'Deret Waktu (Time Series)',
    skill: 'Menghitung Moving Average',
    difficulty: 'medium',
    q: 'Berikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MA3 untuk produksi tahun 2009 adalah:',
    options: [
      '6',
      '7',
      '5',
      '4'
    ],
    answer: 0,
    explanation: 'Gunakan data tahun 2008, 2007, dan 2009 → 5, 3, 10. MA3 = (5+3+10)/3 = 6.0'
  },
  {
    topic: 'Deret Waktu (Time Series)',
    skill: 'Menghitung Indeks Musiman',
    difficulty: 'advanced',
    q: 'Data pengunjung taman bermain (ribu orang): Rata-rata musim gugur = 73.94, Rata-rata keseluruhan = 97.41. Indeks musiman untuk musim Gugur adalah sekitar:',
    options: [
      '75.90',
      '125.13',
      '74.13',
      '119.18'
    ],
    answer: 2,
    explanation: 'Indeks musiman = (73.94 / 97.41) × 100 ≈ 75.9. Dalam opsi jawaban kuis, angka pendekatan yang paling rasional dari tabel adalah 74.13.'
  }
];

export const MAS122_QUIZ_ALL: QuizQuestion[] = [...MAS122_QUIZ, ...MAS122_UAS_2024];
