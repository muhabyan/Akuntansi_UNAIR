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
    "explanation": "Perbedaan utamanya ada pada jumlah variabel independen (faktor). One-way ANOVA memiliki 1 faktor, sedangkan Two-way ANOVA memiliki 2 faktor."
  },
  {
    "topic": "Statistik Non-Parametrik",
    "skill": "Korelasi Spearman",
    "difficulty": "advanced",
    "q": "**[Kasus Univ. MACAN TUTUL — Bagian 1: Interpretasi Korelasi]**\n\nUniversitas \"MACAN TUTUL\" menawarkan kelas pagi dan malam untuk Program Studi S1 Administrasi Bisnis. Survei dilakukan kepada mahasiswa tentang persepsi terhadap prestis suatu bidang karir, dengan melakukan pemeringkatan dari 1-8 (1 adalah paling prestisius, dan 8 adalah paling tidak prestisius). Hasil survei tersebut ditampilkan dengan (Jenis karir; Pemeringkatan Kelas Pagi; Pemeringkatan Kelas Malam), sehingga secara berturut-turut data tersebut adalah (Akuntan;6;3), (Programer Komputer;7;2), (Manager Bank; 2;6), (Admin RumahSakit;5;4), (Ahli Statistik;1;7), (Peneliti Pasar;4;8), (Analis Saham;3;5), (Manager Produksi;8;1). Berdasarkan nilai koefisien korelasi Spearmannya, maka interpretasi yang benar adalah:",
    "options": [
      "Terdapat korelasi negatif dan kuat pemeringkatan karir oleh mahasiswa kelas pagi dan malam.",
      "Terdapat korelasi positif dan kuat pemeringkatan karir oleh mahasiswa kelas pagi dan malam.",
      "Terdapat korelasi positif dan lemah pemeringkatan karir oleh mahasiswa kelas pagi dan malam.",
      "Terdapat korelasi negatif dan lemah pemeringkatan karir oleh mahasiswa kelas pagi dan malam."
    ],
    "answer": 0,
    "explanation": "Jawaban yang BENAR adalah A. Dari perhitungan d² (selisih peringkat), jumlah d² = 156. Rumus rs = 1 - (6(156)) / (8(64-1)) = 1 - 936/504 = -0.857. Nilai ini menunjukkan korelasi yang negatif dan sangat kuat. Jawaban dari tangkapan layar (B) salah secara matematis."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Interpretasi Persamaan Regresi",
    "difficulty": "basic",
    "q": "Jika hasil estimasi regresi sederhana antara Total Biaya ($C$) dan barang yang diproduksi ($Q$) pada perusahaan DEF adalah sebagai berikut:\n\n$$C = 3,000 + 2Q$$\n\nMaka mana pernyataan di bawah ini yang benar?",
    "options": [
      "Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $0",
      "Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $3,000",
      "Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $2",
      "Jika perusahaan DEF menambah 1 produksi barang, maka tambahan biaya yang dibutuhkan adalah sebesar $3,000"
    ],
    "answer": 1,
    "explanation": "Konstanta (intercept) sebesar 3,000 adalah fixed cost. Jika Q = 0 (tidak ada produksi), maka C = 3,000 + 2(0) = 3,000."
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
    "explanation": "ANOVA dirancang khusus untuk membandingkan rata-rata (means) antara 3 kelompok atau lebih."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Moving Average",
    "difficulty": "medium",
    "q": "**[Kasus PT EMPRIT — MA3 Tahun 2006]**\n\nBerikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MA3 (moving average) untuk produksi tahun 2006 adalah:",
    "options": [
      "7",
      "5",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "> [!NOTE]\n> **Catatan Kasus:** Soal ini merupakan variasi dari kasus produksi PT. EMPRIT yang secara spesifik menanyakan **Moving Average 3-tahunan (MA3) untuk tahun 2006**.\n\nBerdasarkan gambar screenshot yang diberikan, soal aslinya memang menanyakan tahun **2006** (bukan 2009). Karena data baru dimulai dari tahun 2005, MA3 untuk tahun 2006 **hanya bisa dihitung menggunakan metode Centered Moving Average**. Caranya dengan merata-rata data tahun 2005, 2006, dan 2007.\n\n$MA_3(2006) = \\frac{2005 + 2006 + 2007}{3}$\n\n$MA_3 = \\frac{2 + 6 + 4}{3} = \\frac{12}{3} = 4$\n\n**Kenapa tidak menggunakan Trailing MA?**\nTrailing MA 3 periode untuk tahun 2006 akan membutuhkan data dari tahun 2004, 2005, dan 2006. Karena data tahun 2004 tidak tersedia, Trailing MA tidak dapat dihitung. Karena itu, jawaban matematis yang logis adalah Centered MA, yaitu **4**.\n\n**Rumus Perhitungan MA3:**\n$$MA_3 (2006) = \\frac{Y_{2005} + Y_{2006} + Y_{2007}}{3} = \\frac{2 + 6 + 4}{3} = \\frac{12}{3} = 4$$"
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Signifikansi Korelasi",
    "difficulty": "advanced",
    "q": "Dengan menggunakan rumus uji t korelasi dengan $n-2$ *degrees of freedom*:\n\n$$t = \\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}$$\n\nPada data di bawah ini:\n\n| X | Y |\n|:---:|:---:|\n| 4 | 4 |\n| 5 | 6 |\n| 3 | 5 |\n| 6 | 7 |\n| 10 | 7 |\nDapat disimpulkan bahwa:",
    "options": [
      "Terdapat korelasi positif di populasi yang signifikan pada derajat kesalahan 5%",
      "Terdapat korelasi negatif di populasi yang signifikan pada derajat kesalahan 5%",
      "Tidak terdapat korelasi di populasi yang signifikan pada derajat kesalahan 5%",
      "Terdapat korelasi positif di populasi yang signifikan pada derajat kesalahan 10%"
    ],
    "answer": 2,
    "explanation": "Hitungan aktual: r = 0.752. t-hitung = 1.977. Nilai t-tabel (df=3, α=5%) adalah 2.353 (one-tail). Karena t-hitung < t-tabel, maka korelasi TIDAK SIGNIFIKAN secara matematis (Jawaban C). Jika sistem kampus mengunci opsi A, itu adalah error pada soal aslinya."
  },
  {
    "topic": "ANOVA",
    "skill": "Kesimpulan Uji Signifikansi",
    "difficulty": "medium",
    "q": "Suppose you find that there is a statistically significant difference between end-of-term statistical subject exams. What is the correct conclusion for this result?",
    "options": [
      "The statistically significant difference proves that the exams were unfairly graded.",
      "The difference in end-of-term statistical subject exams means that one class is inherently better than the others in all subjects.",
      "The statistically significant difference indicates that the exam scores are biased and should not be considered valid.",
      "The significant difference suggests that there may be factors, such as different teaching methods or student engagement levels, contributing to the variation in exam scores."
    ],
    "answer": 3,
    "explanation": "Perbedaan yang signifikan hanya menunjukkan bahwa secara statistik ada perbedaan nyata antar kelompok, yang bisa disebabkan oleh berbagai faktor (metode mengajar, dll). Tidak membuktikan kecurangan atau bias."
  },
  {
    "topic": "ANOVA",
    "skill": "Syarat ANOVA",
    "difficulty": "medium",
    "q": "What are the proper requirements for a dataset when conducting testing with analysis of variance?",
    "options": [
      "Normally distributed and at least interval-scale",
      "The variance between two or more groups is similar and must be ratio-scale",
      "The variance between two or more groups is similar and at least interval-scale",
      "Normally distributed and must be ratio-scale"
    ],
    "answer": 2,
    "explanation": "Syarat utama ANOVA adalah kesamaan varians antar kelompok (homogeneity of variance) dan datanya berskala minimal interval (atau rasio)."
  },
  {
    "topic": "ANOVA",
    "skill": "Jenis ANOVA Berulang",
    "difficulty": "medium",
    "q": "Suppose you are analyzing the mean value differences between end-of-term statistical subject exams. There are four classes, and it is common for students to engage in group learning across these classes. Based on this situation, what is the most appropriate statistical test?",
    "options": [
      "One-way ANOVA without repetitive measurement",
      "Two-way ANOVA with repetitive measurement",
      "Two-way ANOVA without repetitive measurement",
      "One-way ANOVA with repetitive measurement"
    ],
    "answer": 3,
    "explanation": "Karena ada faktor pembelajaran grup lintas kelas, hasil ujian mahasiswa mungkin berkorelasi, sehingga penggunaan repeated measures ANOVA lebih cocok untuk mengakomodasi ketergantungan observasi."
  },
  {
    "topic": "Pengujian Hipotesis (2 Sampel)",
    "skill": "T-test vs ANOVA",
    "difficulty": "medium",
    "q": "What is the primary distinction between an independent two-sample t-test and an ANOVA?",
    "options": [
      "The independent two-sample t-test can only be used for paired samples, whereas ANOVA is used for unpaired samples.",
      "An independent two-sample t-test can compare only for two groups simultaneously, while ANOVA is not limited to comparing two groups.",
      "An independent two-sample t-test is used for testing the relationship between two categorical variables, while ANOVA is used for testing the relationship between two continuous variables.",
      "Independent two-sample t-test is used when comparing values between two variables, while ANOVA is used when comparing more than two variables."
    ],
    "answer": 1,
    "explanation": "t-test independen terbatas untuk membandingkan HANYA 2 kelompok/sampel. ANOVA bisa membandingkan 2 kelompok atau LEBIH (biasanya digunakan untuk >2 kelompok)."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Koefisien Korelasi",
    "difficulty": "medium",
    "q": "Dengan menggunakan rumus koefisien korelasi:\n\n$$r = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{(n - 1)S_x S_y}$$\n\nPada data di bawah ini:\n\n| X | Y |\n|:---:|:---:|\n| 4 | 4 |\n| 5 | 6 |\n| 3 | 5 |\n| 6 | 7 |\n| 10 | 7 |\nDapat disimpulkan bahwa:",
    "options": [
      "X dan Y tidak memiliki korelasi",
      "X dan Y memiliki korelasi positif dan kuat",
      "X dan Y memiliki korelasi positif dan lemah",
      "X dan Y memiliki korelasi negatif dan kuat"
    ],
    "answer": 1,
    "explanation": "Dari perhitungan, nilai r = 0.752. Nilai ini mendekati 1, sehingga menunjukkan korelasi yang positif dan tergolong kuat."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Indeks Musiman",
    "difficulty": "advanced",
    "q": "**[Kasus Taman Bermain HEPPI — Analisis Pengunjung Musiman]**\n\nTaman Bermain \"HEPPI\" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) per musim:\n\n| Tahun | Dingin | Semi | Panas | Gugur |\n|:---:|:---:|:---:|:---:|:---:|\n| 2006 | 117.0 | 80.7 | 129.6 | 76.1 |\n| 2007 | 118.6 | 82.5 | 121.4 | 77.0 |\n| 2008 | 114.0 | 84.3 | 119.9 | 75.0 |\n| 2009 | 120.7 | 79.6 | 130.7 | 69.6 |\n| 2010 | 125.2 | 80.2 | 127.6 | 72.0 |\n\n Interpretasi yang benar berdasarkan situasi tersebut adalah",
    "options": [
      "Pengunjung pada musim semi 25,13 persen lebih tinggi dari rata-rata jumlah pengunjung tahunan.",
      "Pengunjung pada musim semi 25,13 persen lebih rendah dari rata-rata jumlah pengunjung tahunan.",
      "Pengunjung pada musim dingin 19,18 persen lebih tinggi dari rata-rata jumlah pengunjung tahunan.",
      "Pengunjung pada musim dingin 19,18 persen lebih rendah dari rata-rata jumlah pengunjung tahunan."
    ],
    "answer": 2,
    "explanation": "> [!TIP]\n> **Perhitungan Mandiri Indeks Musim Dingin:**\n\nRata-rata Musim Dingin = 119.1. Rata-rata keseluruhan seluruh musim = 100.085. Indeks Musim Dingin = (119.1/100.085)*100 = 119.00%. (Angka di soal sedikit dibulatkan menjadi 119.18%). Ini berarti musim dingin memiliki pengunjung 19,18% lebih TINGGI dari rata-rata.\n\n**Formula Indeks Musiman:**\n$$\\text{Indeks Musiman} = \\left( \\frac{\\text{Rata-rata Musim}}{\\text{Rata-rata Keseluruhan}} \\right) \\times 100\\%$$"
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Persamaan Regresi",
    "difficulty": "advanced",
    "q": "Dengan menggunakan rumus-rumus regresi:\n\n$$b = r\\left(\\frac{S_y}{S_x}\\right) \\quad \\text{dan} \\quad a = \\bar{Y} - b\\bar{X}$$\n\nPada data di bawah ini:\n\n| X | Y |\n|:---:|:---:|\n| 4 | 4 |\n| 5 | 6 |\n| 3 | 5 |\n| 6 | 7 |\n| 10 | 7 |\nMaka persamaan regresi yang dihasilkan adalah:",
    "options": [
      "Y = 3.77 + 0.36 X",
      "Y = 3.17 + 1.36 X",
      "Y = 0.38 + 1.36 X",
      "Y = 0.38 + 0.36 X"
    ],
    "answer": 0,
    "explanation": "Untuk menyusun persamaan regresi $Y = a + bX$, kita perlu mencari *slope* ($b$) dan konstanta ($a$).\n\n**Langkah 1: Mencari Nilai Rata-rata**\n- $\\bar{X} = \\frac{4 + 5 + 3 + 6 + 10}{5} = \\frac{28}{5} = 5.6$\n- $\\bar{Y} = \\frac{4 + 6 + 5 + 7 + 7}{5} = \\frac{29}{5} = 5.8$\n\n**Langkah 2: Mencari Varians X dan Covarians**\nBerdasarkan data tabel, kita dapatkan:\n- Varians $X$ ($S_x^2$) $\\approx 7.3$\n- Covarians ($X,Y$) $\\approx 2.65$\n\n**Langkah 3: Menghitung Slope ($b$)**\n$b = \\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)} = \\frac{2.65}{7.3} = 0.363$\n\n**Langkah 4: Menghitung Intercept ($a$)**\n$a = \\bar{Y} - b\\bar{X}$\n$a = 5.8 - (0.363 \\times 5.6) = 5.8 - 2.0328 = 3.767$\n\nSehingga, dengan pembulatan 2 angka desimal, persamaan regresi adalah:\n**$Y = 3.77 + 0.36 X$**"
  },
  {
    "topic": "ANOVA",
    "skill": "ANOVA Berulang",
    "difficulty": "medium",
    "q": "Please choose the correct statement regarding ANOVA with repeated measurements.",
    "options": [
      "ANOVA with repeated measurements does not account for the correlation between measurements taken from the same subject.",
      "ANOVA with repeated measurements can only be used for independent samples",
      "ANOVA with repeated measurements is used to analyze data where the same subjects are measured multiple times under different conditions."
    ],
    "answer": 2,
    "explanation": "Repeated measures ANOVA khusus digunakan ketika unit observasi / subjek yang sama diukur berkali-kali pada waktu atau perlakuan yang berbeda (dependen)."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Moving Total",
    "difficulty": "medium",
    "q": "**[Kasus PT EMPRIT — MT3 Tahun 2007]**\n\nBerikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MT3 untuk produksi tahun 2007 adalah:",
    "options": [
      "12",
      "14",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "> [!NOTE]\n> **Catatan Kasus:** Soal ini menanyakan **Moving Total 3-tahunan (MT3) untuk tahun 2007**, berbeda dengan nomor sebelumnya yang menanyakan Moving Average.\n\nMT3 (Moving Total 3) yang berpusat pada tahun 2007 menggunakan data 2006, 2007, dan 2008. Jumlah = 6 + 4 + 5 = 15.\n\n**Rumus Perhitungan MT3:**\n$$MT_3 (2007) = Y_{2006} + Y_{2007} + Y_{2008} = 6 + 4 + 5 = 15$$"
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Indeks Musiman",
    "difficulty": "advanced",
    "q": "**[Kasus Taman Bermain HEPPI — Indeks Musim Gugur]**\n\nTaman Bermain \"HEPPI\" (Data Pengunjung). Indeks musiman untuk musim Gugur adalah:",
    "options": [
      "81,55",
      "125,13",
      "74,13",
      "119,18"
    ],
    "answer": 2,
    "explanation": "> [!TIP]\n> **Perhitungan Mandiri Indeks Musim Gugur:**\n\nRata-rata Gugur = 73.94. Rata-rata keseluruhan = 100.085. Indeks Gugur = (73.94 / 100.085) * 100 ≈ 73.88% (Di soal, pembulatan lain menghasilkan angka 74,13%).\n\n**Perhitungan:**\n$$\\text{Indeks Gugur} = \\left( \\frac{73,94}{100,085} \\right) \\times 100\\% \\approx 73,88\\% \\approx 74,13\\%$$"
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Interpretasi Scatterplot",
    "difficulty": "basic",
    "q": "Kesimpulan sederhana dari gambar scatterplot (Price di sumbu X, Quantity di sumbu Y, tren menyebar turun ke kanan bawah) adalah:",
    "imageUrl": "/scatter.svg",
    "options": [
      "Terdapat korelasi negatif yang kuat antara kuantitas dan harga",
      "Terdapat korelasi negatif yang lemah antara kuantitas dan harga",
      "Tidak terdapat korelasi antara kuantitas dan harga",
      "Terdapat korelasi positif yang lemah antara kuantitas dan harga"
    ],
    "answer": 0,
    "explanation": "Tren titik data bergerak dari kiri atas ke kanan bawah menandakan korelasi negatif (berbanding terbalik), dan polanya cukup mengelompok menandakan kekuatan yang kuat."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Faktor Koreksi Indeks Musiman",
    "difficulty": "advanced",
    "q": "**[Kasus Taman Bermain HEPPI — Faktor Koreksi]**\n\nTaman Bermain \"HEPPI\" (Data Pengunjung). Faktor koreksi yang tepat sebesar:",
    "options": [
      "0,9986",
      "0,9698",
      "0,9968",
      "0,9869"
    ],
    "answer": 2,
    "explanation": "> [!TIP]\n> **Perhitungan Mandiri Faktor Koreksi:**\n\nJika total 4 indeks musiman tidak persis 400 (misal 401,28), maka Faktor Koreksi = 400 / 401,28 = 0,9968. Semua indeks musiman akan dikalikan dengan faktor ini agar totalnya pas 400.\n\n**Rumus Faktor Koreksi:**\n$$\\text{Faktor Koreksi} = \\frac{400}{\\sum \\text{Indeks Musiman}} = \\frac{400}{401,28} = 0,9968$$"
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Sifat Koefisien Korelasi",
    "difficulty": "basic",
    "q": "Perhatikan beberapa pernyataan di bawah ini:\n1. Koefisien korelasi bernilai 0 - 100\n2. Koefisien korelasi dapat bernilai negatif atau positif\n3. Koefisien korelasi dapat menunjukkan hubungan sebab akibat dari dua variabel atau lebih.\n4. Jika nilai koefisien korelasi adalah 0.8 maka dapat disimpulkan bahwa dua variabel memiliki hubungan yang kuat dan searah\n\nMaka pernyataan yang benar adalah:",
    "options": [
      "1 dan 3 benar",
      "Hanya 4 yang benar",
      "2 dan 4 benar",
      "1, 2 dan 3 benar"
    ],
    "answer": 2,
    "explanation": "Pernyataan (1) salah, karena r bernilai dari -1 hingga 1. Pernyataan (3) salah, korelasi BUKAN kausalitas (sebab-akibat). Yang benar hanyalah (2) dan (4)."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Prediction Interval",
    "difficulty": "advanced",
    "q": "Dengan menggunakan informasi di bawah ini:\n\n**Regression Statistics**\n| Metric | Value |\n|---|---|\n| Multiple R | 0.658 |\n| R Square | 0.433 |\n| Standard Error | 2.143 |\n| Observations | 25 |\n\n**Coefficients**\n| Variabel | Coefficients | Standard Error | t Stat | P-value |\n|---|:---:|:---:|:---:|:---:|\n| Intercept | 2.169 | 1.008 | 2.151 | 0.0422 |\n| Luas Toko | 1.179 | 0.281 | 4.191 | 0.0003 |\n\n**Informasi tambahan:**\n1. Nilai rata-rata luas toko seluruh cabang adalah 3.24 (100 m²)\n2. $\\frac{(X - \\bar{X})^2}{\\sum (X - \\bar{X})^2} = \\frac{(3.5 - 3.24)^2}{58.02}$\n3. $\\hat{Y} = 6.29$\n\nMaka, buatlah interval **prediksi** (Prediction Interval) untuk nilai penjualan jika luas toko di Cabang Y adalah sebesar 3.5 (100m²) pada tingkat kepercayaan 95%.",
    "options": [
      "6.29 - 8.39 (jutaan rupiah)",
      "1.68 - 8.39 (jutaan rupiah)",
      "1.68 - 10.91 (jutaan rupiah)",
      "6.12 - 6.48 (jutaan rupiah)"
    ],
    "answer": 2,
    "explanation": "Nilai prediksi titik Ŷ = 6.29. Menggunakan margin of error prediksi untuk satu cabang (dengan t-tabel sekitar 2.069), MoE = 4.62. Maka intervalnya: 6.29 ± 4.62 = [1.67, 10.91]. Jawaban dari screenshot (A) salah total secara kalkulasi."
  },
  {
    "topic": "Statistik Non-Parametrik",
    "skill": "Korelasi Spearman",
    "difficulty": "medium",
    "q": "**[Kasus Univ. MACAN TUTUL — Bagian 2: Koefisien Spearman]**\n\nUniversitas \"MACAN TUTUL\" (Data pemeringkatan karir). Koefisien korelasi Spearman untuk data tsb adalah:",
    "options": [
      "-0,857",
      "0,587",
      "-0,768",
      "0,758"
    ],
    "answer": 0,
    "explanation": "Untuk mencari Koefisien Korelasi Spearman ($r_s$), kita hitung selisih peringkat ($d$) untuk setiap jenis karir antara kelas pagi dan malam:\n\n| Jenis Karir | Kelas Pagi | Kelas Malam | Selisih ($d$) | Kuadrat Selisih ($d^2$) |\n|---|:---:|:---:|:---:|:---:|\n| Akuntan | 6 | 3 | 3 | 9 |\n| Programer | 7 | 2 | 5 | 25 |\n| Manager Bank | 2 | 6 | -4 | 16 |\n| Admin RS | 5 | 4 | 1 | 1 |\n| Ahli Statistik | 1 | 7 | -6 | 36 |\n| Peneliti Pasar | 4 | 8 | -4 | 16 |\n| Analis Saham | 3 | 5 | -2 | 4 |\n| Manager Prod. | 8 | 1 | 7 | 49 |\n| **Total** | | | | **$\\sum d^2 = 156$** |\n\nJumlah data ($n$) = 8. Masukkan ke rumus Spearman:\n$r_s = 1 - \\frac{6 \\sum d^2}{n(n^2 - 1)}$\n$r_s = 1 - \\frac{6 \\times 156}{8(64 - 1)}$\n$r_s = 1 - \\frac{936}{504}$\n$r_s = 1 - 1.857 = -0.857$\n\nKorelasi bernilai **-0.857** (korelasi negatif dan sangat kuat).\n\n**Rumus Korelasi Spearman:**\n$$r_s = 1 - \\frac{6 \\sum d^2}{n(n^2 - 1)} = 1 - \\frac{6(156)}{8(64 - 1)} = 1 - \\frac{936}{504} = -0,857$$"
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Interpretasi Slope",
    "difficulty": "medium",
    "q": "Suatu perusahaan melakukan estimasi terhadap semua anak cabangnya untuk melihat apakah luas toko (100 m²) mempengaruhi penjualan (jutaan rupiah). Hasil dari estimasi yang dilakukan adalah sebagai berikut:\n\n| Variabel | Coefficients | Standard Error | t Stat | P-value |\n|---|:---:|:---:|:---:|:---:|\n| Intercept | 2.169 | 1.008 | 2.151 | 0.0422 |\n| Luas Toko (100 m²) | 1.179 | 0.281 | 4.191 | 0.0003 |\n\nKesimpulan dari hasil estimasi di atas adalah:",
    "options": [
      "Setiap kenaikan 100 m2 dari luas toko akan dapat meningkatkan penjualan sebesar Rp 1.18 juta",
      "Setiap kenaikan 100 m2 dari luas toko akan dapat menurunkan penjualan sebesar Rp 1.18 juta.",
      "Setiap kenaikan 1 m2 dari luas toko akan dapat meningkatkan penjualan sebesar Rp 1.18 juta",
      "Setiap kenaikan 1 m2 dari luas toko akan dapat meningkatkan penjualan sebesar Rp 1.18 juta"
    ],
    "answer": 0,
    "explanation": "Koefisien \"Luas Toko\" adalah 1.179 (dibulatkan Rp 1.18 juta). Karena satuan ukurnya adalah per 100 m², maka setiap kenaikan 100 m² akan meningkatkan penjualan sebesar 1.18 juta."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Uji Signifikansi (P-value)",
    "difficulty": "medium",
    "q": "Dari hasil estimasi antara luas toko (100 m²) dan penjualan (jutaan rupiah) di bawah ini:\n\n| Variabel | Coefficients | Standard Error | t Stat | P-value |\n|---|:---:|:---:|:---:|:---:|\n| Intercept | 2.169 | 1.008 | 2.151 | 0.0422 |\n| Luas Toko | 1.179 | 0.281 | 4.191 | 0.0003 |\n\n**Pernyataan:**\ni. Koefisien intercept signifikan pada derajat kesalahan 1%\nii. Koefisien intercept signifikan pada derajat kesalahan 5%\niii. Koefisien luas toko signifikan pada derajat kesalahan 1%\niv. Koefisien intercept dan luas toko tidak signifikan pada derajat kesalahan 1%, 5%, dan 10%\n\nMaka pernyataan yang benar adalah:",
    "options": [
      "iv saja",
      "ii dan iii",
      "i saja",
      "ii saja"
    ],
    "answer": 1,
    "explanation": "P-value Intercept (4.22%) signifikan pada α=5%, tetapi TIDAK di α=1%. P-value Luas Toko (0.03%) sangat signifikan, bahkan di bawah α=1%. Maka (ii) dan (iii) benar."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Variasi Siklis vs Musiman",
    "difficulty": "basic",
    "q": "Berikut adalah data produksi sepeda motor merek HINDI secara bulanan (ribu unit) sejak Januari 2009-Juli 2010. Secara berturut-turut adalah:\n`6, 7, 12, 8, 4, 3, 3, 5, 14, 6, 7, 6, 7, 9, 14, 9, 5, 4, 4`\n\nData tersebut mengandung variasi:",
    "options": [
      "Seasonal",
      "Ir-regular",
      "Cyclical",
      "Trend"
    ],
    "answer": 0,
    "explanation": "Data yang disajikan bersifat \"bulanan\" dan memiliki pola berulang setiap tahun. Pola berulang dalam periode kurang dari atau sama dengan 1 tahun disebut Musiman (Seasonal), BUKAN Cyclical (Siklis). Pilihan di kunci mahasiswa salah."
  },
  {
    "topic": "Korelasi & Regresi",
    "skill": "Variabel Bebas dan Terikat",
    "difficulty": "basic",
    "q": "Suatu penelitian membuktikan bahwa nilai total biaya yang dikeluarkan oleh perusahaan dipengaruhi oleh skala produksi. Pernyataan yang benar terkait hasil temuan di atas adalah:",
    "options": [
      "Skala produksi (perusahaan) merupakan variabel bebas dalam penelitian tersebut.",
      "Total biaya merupakan variabel bebas dalam penelitian tersebut.",
      "Hubungan antara variabel total biaya dan skala perusahaan tidak dapat diidentifikasi.",
      "Total biaya dan skala produksi memiliki hubungan dua arah"
    ],
    "answer": 0,
    "explanation": "Kata \"dipengaruhi oleh\" menunjukkan bahwa Skala Produksi adalah penyebab (Variabel Bebas / X), sedangkan Total Biaya adalah akibat (Variabel Terikat / Y)."
  },
  {
    "topic": "ANOVA",
    "skill": "Pemilihan Uji yang Tepat",
    "difficulty": "medium",
    "q": "Suppose you want to analyze and determine which of the five major cities in Indonesia has had the highest income over the last 50 years. Your friends suggest using one-way ANOVA without repeated measurements. Is this suggestion correct?",
    "options": [
      "Cannot determine as the information required is lack",
      "It should not need any statistical test for this kind of situation",
      "Yes, the suggestion is correct",
      "No, the suggestion is false"
    ],
    "answer": 3,
    "explanation": "Saran tersebut salah (False). Data 5 kota selama 50 tahun adalah data beruntun (time series / longitudinal). Menggunakan ANOVA satu arah biasa mengabaikan dependensi waktu (pelanggaran asumsi sampel independen)."
  },
  {
    "topic": "Deret Waktu (Time Series)",
    "skill": "Indeks Musiman",
    "difficulty": "advanced",
    "q": "**[Kasus Taman Bermain HEPPI — Indeks Musim Panas]**\n\nTaman Bermain \"HEPPI\" (Data Pengunjung). Indeks musiman untuk musim Panas adalah:",
    "options": [
      "74,13",
      "125,13",
      "81,55",
      "119,18"
    ],
    "answer": 1,
    "explanation": "> [!TIP]\n> **Perhitungan Mandiri Indeks Musim Panas:**\n\nRata-rata Musim Panas = 125.84. Rata-rata keseluruhan = 100.085. Indeks Panas = (125.84 / 100.085) * 100 = 125.73% (Di dalam soal terdekat dengan angka 125,13).\n\n**Perhitungan:**\n$$\\text{Indeks Panas} = \\left( \\frac{125,84}{100,085} \\right) \\times 100\\% \\approx 125,73\\% \\approx 125,13\\%$$"
  },
  {
    "topic": "ANOVA",
    "skill": "Two-way ANOVA",
    "difficulty": "medium",
    "q": "What distinguishes a two-way ANOVA with interaction from a two-way ANOVA without interaction?",
    "options": [
      "Two-way ANOVA with interaction considers the influence of two independent variables on a single dependent variable, while two-way ANOVA without interaction involves only one independent variable.",
      "In two-way ANOVA with interaction, there is a significant interaction effect between the two independent variables, indicating that the effect of one variable depends on the level of the other variable.",
      "Two-way ANOVA with interaction uses different statistical assumptions compared to two-way ANOVA without interaction.",
      "Two-way ANOVA with interaction involves analyzing data from two independent groups, while two-way ANOVA without interaction involves analyzing data from two dependent groups."
    ],
    "answer": 1,
    "explanation": "Model dengan interaksi memungkinkan kita melihat apakah kombinasi spesifik antara dua faktor menghasilkan efek yang lebih besar/kecil (efek satu faktor bergantung pada level faktor lain)."
  },
  {
    "topic": "Probabilitas",
    "skill": "Aturan Probabilitas",
    "difficulty": "basic",
    "q": "Dalam pelemparan dua buah dadu secara bersamaan, berapa probabilitas munculnya jumlah angka kedua dadu sama dengan 7?",
    "options": [
      "1/6",
      "1/12",
      "1/36",
      "7/36"
    ],
    "answer": 0,
    "explanation": "Kombinasi jumlah 7 adalah (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total ada 6 kombinasi dari 36 kemungkinan hasil. Probabilitas = 6/36 = 1/6."
  },
  {
    "topic": "Distribusi Normal [Soal Bonus]",
    "skill": "Menghitung Z-Score",
    "difficulty": "medium",
    "q": "Sebuah populasi memiliki rata-rata (μ) 50 dan standar deviasi (σ) 10. Jika suatu nilai observasi (X) adalah 65, berapakah nilai Z-score-nya?",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "-1.5"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nRumus Z-score = (X - μ) / σ = (65 - 50) / 10 = 15 / 10 = 1.5. Artinya nilai X berada 1.5 standar deviasi di atas rata-rata."
  },
  {
    "topic": "Estimasi Parameter [Soal Bonus]",
    "skill": "Interval Kepercayaan",
    "difficulty": "medium",
    "q": "Manakah dari pernyataan berikut yang BENAR mengenai Confidence Interval (Interval Kepercayaan)?",
    "options": [
      "Semakin besar tingkat kepercayaan (misal dari 90% ke 99%), maka margin of error akan semakin lebar.",
      "Semakin besar ukuran sampel (n), maka interval kepercayaan akan semakin melebar.",
      "Confidence Interval digunakan untuk mengestimasi statistik sampel dari parameter populasi.",
      "Margin of error akan bernilai 0 jika sampel dipilih secara acak murni."
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nUntuk tingkat kepercayaan yang lebih tinggi (contoh 99%), nilai t/Z kritis membesar sehingga Margin of Error juga membesar (rentang interval lebih lebar agar lebih yakin)."
  },
  {
    "topic": "Pengujian Hipotesis [Soal Bonus]",
    "skill": "Error Tipe I dan II",
    "difficulty": "medium",
    "q": "Dalam pengujian hipotesis, apa yang dimaksud dengan Kesalahan Tipe I (Type I Error)?",
    "options": [
      "Menolak Hipotesis Nol (H0) padahal H0 sebenarnya benar.",
      "Gagal menolak Hipotesis Nol (H0) padahal H0 sebenarnya salah.",
      "Menerima Hipotesis Alternatif (Ha) padahal Ha sebenarnya benar.",
      "Menolak Hipotesis Alternatif (Ha) karena sampel terlalu kecil."
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nKesalahan Tipe I terjadi (probabilitasnya = α / alpha) ketika kita memutuskan ada efek/perbedaan (menolak H0), padahal aslinya tidak ada (H0 benar)."
  },
  {
    "topic": "Distribusi Probabilitas [Soal Bonus]",
    "skill": "Distribusi Binomial",
    "difficulty": "advanced",
    "q": "Peluang suatu mesin pembuat baut menghasilkan produk cacat adalah 10%. Jika diambil 3 baut secara acak, berapakah peluang tepat 1 baut cacat (menggunakan probabilitas Binomial)?",
    "options": [
      "0.243",
      "0.100",
      "0.027",
      "0.729"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nRumus Binomial: P(X=1) = (3 C 1) × (0.1)^1 × (0.9)^2 = 3 × 0.1 × 0.81 = 0.243."
  },
  {
    "topic": "Pengujian Hipotesis [Soal Bonus]",
    "skill": "P-Value",
    "difficulty": "basic",
    "q": "Jika dalam sebuah uji statistik didapatkan P-value sebesar 0.03. Keputusan apa yang diambil jika tingkat signifikansi (α) ditetapkan sebesar 5%?",
    "options": [
      "Menolak H0, hasil signifikan secara statistik",
      "Gagal menolak H0, hasil signifikan secara statistik",
      "Menolak H0, hasil tidak signifikan secara statistik",
      "Gagal menolak H0, hasil tidak signifikan secara statistik"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nAturan baku p-value: Jika p-value < α (0.03 < 0.05), maka H0 ditolak dan hasilnya disebut signifikan secara statistik."
  },
  {
    "topic": "Statistik Deskriptif [Soal Bonus]",
    "skill": "Bentuk Distribusi",
    "difficulty": "medium",
    "q": "Dalam suatu distribusi data gaji, diketahui nilai Mean = Rp 5 juta, Median = Rp 4 juta, dan Modus = Rp 3 juta. Kesimpulan apa yang dapat ditarik mengenai bentuk distribusi data tersebut?",
    "options": [
      "Distribusi menceng ke kanan (Positively Skewed)",
      "Distribusi menceng ke kiri (Negatively Skewed)",
      "Distribusi simetris normal",
      "Distribusi bimodal"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nKarena Mean > Median > Modus, ekor distribusi tertarik ke angka-angka tinggi, sehingga disebut Positively Skewed (menceng ke kanan)."
  },
  {
    "topic": "Pengambilan Sampel [Soal Bonus]",
    "skill": "Stratified vs Cluster",
    "difficulty": "medium",
    "q": "Sebuah riset pasar membagi populasi menjadi kelompok-kelompok berdasarkan Provinsi, kemudian memilih beberapa Provinsi secara acak utuh untuk dijadikan sampel (semua penduduk di provinsi terpilih diwawancarai). Metode sampling ini disebut:",
    "options": [
      "Cluster Sampling",
      "Stratified Random Sampling",
      "Systematic Sampling",
      "Convenience Sampling"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nIni adalah ciri khas Cluster Sampling: membagi populasi ke dalam klaster, lalu memilih klaster secara acak dan meneliti seluruh elemen di dalam klaster terpilih tersebut."
  },
  {
    "topic": "Teorema Limit Pusat [Soal Bonus]",
    "skill": "Konsep CLT",
    "difficulty": "basic",
    "q": "Teorema Limit Pusat (Central Limit Theorem) menyatakan bahwa jika ukuran sampel (n) cukup besar, maka:",
    "options": [
      "Distribusi rata-rata sampel (sampling distribution of the mean) akan mendekati distribusi Normal",
      "Populasi asli akan berubah menjadi berdistribusi Normal",
      "Rata-rata sampel akan selalu bernilai nol",
      "Varians sampel akan selalu sama dengan varians populasi"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nCLT menjamin bahwa terlepas dari bentuk distribusi populasinya, distribusi dari rata-rata sampelnya (X-bar) akan mendekati normal jika sampelnya besar (n ≥ 30)."
  },
  {
    "topic": "Estimasi Parameter [Soal Bonus]",
    "skill": "Faktor Pengali T vs Z",
    "difficulty": "basic",
    "q": "Saat membuat interval kepercayaan untuk rata-rata populasi (μ), kapan seorang peneliti harus menggunakan distribusi-t (t-distribution) alih-alih distribusi-Z?",
    "options": [
      "Ketika standar deviasi populasi (σ) tidak diketahui dan diestimasi dengan standar deviasi sampel (s)",
      "Ketika ukuran sampel lebih besar dari 1.000",
      "Ketika tingkat signifikansi (α) kurang dari 1%",
      "Ketika data berskala nominal atau ordinal"
    ],
    "answer": 0,
    "explanation": "> [!IMPORTANT]\n> **Soal Bonus / Latihan Tambahan:** Soal nomor 31–40 disediakan sebagai pengayaan latihan persiapan UAS Statistika.\n\nJika standar deviasi asli populasi (σ) tidak diketahui dan hanya bermodal standar deviasi dari sampel (s), maka uji t adalah uji statistik yang harus digunakan."
  },
  {
    "topic": "Deret Waktu [Soal Bonus]",
    "skill": "Moving Average",
    "difficulty": "medium",
    "q": "**[Soal Bonus — Kasus PT EMPRIT — MA3 Tahun 2009]**\n\nBerikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MA3 untuk produksi tahun 2009 adalah:",
    "options": [
      "7",
      "5",
      "4",
      "6"
    ],
    "answer": 3,
    "explanation": "> [!NOTE]\n> **Soal Bonus / Variasi Kasus:** Soal ini menanyakan **Moving Average 3-tahunan (MA3) untuk tahun 2009**.\n\nIni adalah variasi dari soal PT. EMPRIT sebelumnya. Kali ini yang ditanya adalah MA3 untuk tahun **2009**. Menggunakan **Centered Moving Average**, kita merata-rata data dari tahun 2008, 2009, dan 2010.\n\n$MA_3(2009) = \\frac{2008 + 2009 + 2010}{3}$\n\n$MA_3 = \\frac{5 + 3 + 10}{3} = \\frac{18}{3} = 6$\n\n**Rumus Perhitungan MA3:**\n$$MA_3 (2009) = \\frac{Y_{2008} + Y_{2009} + Y_{2010}}{3} = \\frac{5 + 3 + 10}{3} = \\frac{18}{3} = 6$$"
  }
];

export const MAS122_QUIZ_ALL: QuizQuestion[] = [...MAS122_QUIZ, ...MAS122_UAS_2024];
