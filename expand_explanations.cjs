const fs = require('fs');
const file = 'src/data/quizzes/mas122.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. Regression Equation
const oldReg = `"Rata-rata X = 5.6, Y = 5.8. Covarians = 2.65, Varians X = 7.3. Slope b = Cov/VarX = 2.65 / 7.3 = 0.363. Intercept a = 5.8 - (0.363 × 5.6) = 3.767. Maka Y = 3.77 + 0.36X."`;
const newReg = `\`Untuk menyusun persamaan regresi $Y = a + bX$, kita perlu mencari *slope* ($b$) dan konstanta ($a$).\\n\\n**Langkah 1: Mencari Nilai Rata-rata**\\n- $\\\\bar{X} = \\\\frac{4 + 5 + 3 + 6 + 10}{5} = \\\\frac{28}{5} = 5.6$\\n- $\\\\bar{Y} = \\\\frac{4 + 6 + 5 + 7 + 7}{5} = \\\\frac{29}{5} = 5.8$\\n\\n**Langkah 2: Mencari Varians X dan Covarians**\\nBerdasarkan data tabel, kita dapatkan:\\n- Varians $X$ ($S_x^2$) $\\\\approx 7.3$\\n- Covarians ($X,Y$) $\\\\approx 2.65$\\n\\n**Langkah 3: Menghitung Slope ($b$)**\\n$$b = \\\\frac{\\\\text{Cov}(X,Y)}{\\\\text{Var}(X)} = \\\\frac{2.65}{7.3} = 0.363$$\\n\\n**Langkah 4: Menghitung Intercept ($a$)**\\n$$a = \\\\bar{Y} - b\\\\bar{X}$$\\n$$a = 5.8 - (0.363 \\\\times 5.6) = 5.8 - 2.0328 = 3.767$$\\n\\nSehingga, dengan pembulatan 2 angka desimal, persamaan regresi adalah:\\n**$Y = 3.77 + 0.36 X$**\``;
content = content.replace(oldReg, newReg);

// 2. Spearman Correlation
const oldSpearman = `"Seperti perhitungan di awal, jumlah kuadrat selisih d² = 156, sehingga rs = 1 - 936/504 = -0.857. (Jawaban C pada dokumen PDF salah)."`;
const newSpearman = `\`Untuk mencari Koefisien Korelasi Spearman ($r_s$), kita hitung selisih peringkat ($d$) untuk setiap jenis karir antara kelas pagi dan malam:\\n\\n| Jenis Karir | Kelas Pagi | Kelas Malam | Selisih ($d$) | Kuadrat Selisih ($d^2$) |\\n|---|:---:|:---:|:---:|:---:|\\n| Akuntan | 6 | 3 | 3 | 9 |\\n| Programer | 7 | 2 | 5 | 25 |\\n| Manager Bank | 2 | 6 | -4 | 16 |\\n| Admin RS | 5 | 4 | 1 | 1 |\\n| Ahli Statistik | 1 | 7 | -6 | 36 |\\n| Peneliti Pasar | 4 | 8 | -4 | 16 |\\n| Analis Saham | 3 | 5 | -2 | 4 |\\n| Manager Prod. | 8 | 1 | 7 | 49 |\\n| **Total** | | | | **$\\\\sum d^2 = 156$** |\\n\\nJumlah data ($n$) = 8. Masukkan ke rumus Spearman:\\n$$r_s = 1 - \\\\frac{6 \\\\sum d^2}{n(n^2 - 1)}$$\\n$$r_s = 1 - \\\\frac{6 \\\\times 156}{8(64 - 1)}$$\\n$$r_s = 1 - \\\\frac{936}{504}$$\\n$$r_s = 1 - 1.857 = -0.857$$\\n\\nKorelasi bernilai **-0.857** (korelasi negatif dan sangat kuat).\``;
content = content.replace(oldSpearman, newSpearman);

// 3. T-Test Correlation
const oldTtest = `"t = r√(n-2) / √(1-r²) = 0.816 * 1.732 / 0.578 = 1.413 / 0.578 = 2.44. t-tabel (alpha 5%, df 3) adalah 3.182. Karena 2.44 < 3.182, maka Terima H0 (korelasi tidak signifikan)."`;
const newTtest = `\`**Langkah 1: Menghitung Korelasi Pearson ($r$)**\\nBerdasarkan data tabel yang diberikan, nilai korelasi Pearson adalah $r \\\\approx 0.816$.\\n\\n**Langkah 2: Menghitung Nilai t-hitung**\\nKita diberikan rumus uji t korelasi:\\n$$t = \\\\frac{r\\\\sqrt{n-2}}{\\\\sqrt{1-r^2}}$$\\n\\nMasukkan nilai $r = 0.816$ dan $n = 5$ (karena ada 5 pasang data X dan Y):\\n$$t = \\\\frac{0.816\\\\sqrt{5-2}}{\\\\sqrt{1-0.816^2}}$$\\n$$t = \\\\frac{0.816 \\\\times \\\\sqrt{3}}{\\\\sqrt{1 - 0.666}}$$\\n$$t = \\\\frac{0.816 \\\\times 1.732}{\\\\sqrt{0.334}} = \\\\frac{1.413}{0.578} \\\\approx 2.44$$\\n\\n**Langkah 3: Kesimpulan**\\nDerajat kebebasan ($df$) $= n - 2 = 3$. \\nNilai t-tabel pada taraf signifikansi 5% ($a = 0.05$) untuk $df = 3$ adalah **3.182**.\\n\\nKarena nilai t-hitung (**2.44**) < t-tabel (**3.182**), maka kita **Menerima H0**.\\n**Kesimpulan:** Korelasi positif antara biaya pemeliharaan mesin dan umur mesin **TIDAK SIGNIFIKAN**.\``;
content = content.replace(oldTtest, newTtest);

fs.writeFileSync(file, content);
console.log("Explanations expanded");
