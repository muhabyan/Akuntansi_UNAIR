// =============================================================
// src/data/readings/mas122.ts — Statistik untuk Akuntan (MAS122)
// TM1–7 (pra-UTS) & TM8–14 (pra-UAS). Sumber: Lind (DA), Anderson (AA) + RPS.
// =============================================================
import type { Reading } from '../../types';
import { MAS122_TM8_14_SUPPLEMENT } from './statistikPraUasSupplement';

/** Gabungkan blocks reading existing dengan suplemen Pra-UAS bila ada untuk TM tersebut. */
function withSupplement(reading: Reading): Reading {
  const extra = MAS122_TM8_14_SUPPLEMENT[reading.tm];
  if (!extra || extra.length === 0) return reading;
  return { ...reading, blocks: [...reading.blocks, ...extra] };
}

const tm1: Reading = {
  tm: 1, title: 'Pengenalan Statistik dalam Akuntansi & Bisnis', ref: 'DA 1 · AA 1',
  intro: 'Statistik adalah ilmu mengumpulkan, mengolah, menyajikan, dan menafsirkan data untuk pengambilan keputusan. Dalam akuntansi & bisnis, statistik dipakai untuk audit sampling, peramalan, dan analisis kinerja.',
  objectives: [
    'Membedakan statistik deskriptif & inferensial.',
    'Membedakan populasi vs sampel, parameter vs statistik.',
    'Mengklasifikasikan jenis data & skala pengukuran.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Dua Cabang Statistik' },
    { kind: 'ul', items: [
      '**Statistik deskriptif:** meringkas & menyajikan data (tabel, grafik, mean, standar deviasi).',
      '**Statistik inferensial:** menarik kesimpulan tentang **populasi** berdasarkan **sampel** (estimasi & uji hipotesis).',
    ] },
    { kind: 'table', headers: ['Istilah', 'Makna'], rows: [
      ['Populasi', 'Seluruh objek yang diteliti'],
      ['Sampel', 'Sebagian populasi yang diamati'],
      ['Parameter', 'Ukuran populasi (μ, σ, p)'],
      ['Statistik', 'Ukuran sampel (x̄, s, p̂)'],
    ] },
    { kind: 'h2', text: 'B. Jenis Data & Skala Pengukuran' },
    { kind: 'ul', items: [
      '**Kualitatif (kategorik)** vs **Kuantitatif (numerik: diskrit/kontinu).**',
      '**Nominal:** kategori tanpa urutan (jenis kelamin).',
      '**Ordinal:** kategori berurutan (peringkat kepuasan).',
      '**Interval:** jarak bermakna, tanpa nol mutlak (suhu °C).',
      '**Rasio:** ada nol mutlak (pendapatan, berat).',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Mnemonic skala: NOIR', text: '**N**ominal → **O**rdinal → **I**nterval → **R**asio (makin ke kanan makin tinggi tingkat pengukurannya).' },
  ],
};

const tm2: Reading = {
  tm: 2, title: 'Statistik Deskriptif — Tendensi Sentral', ref: 'DA 2–3 · AA 3',
  intro: 'Ukuran pemusatan menggambarkan "nilai khas" suatu data: rata-rata, nilai tengah, dan nilai tersering.',
  objectives: ['Menghitung mean, median, modus.', 'Memilih ukuran pemusatan yang tepat.', 'Memahami pengaruh outlier.'],
  blocks: [
    { kind: 'h2', text: 'A. Tiga Ukuran Utama' },
    { kind: 'formula', text: 'Mean (rata-rata): x̄ = Σx ÷ n', note: 'Paling umum, tetapi sensitif terhadap outlier.' },
    { kind: 'ul', items: [
      '**Median:** nilai tengah data terurut; tahan terhadap outlier.',
      '**Modus:** nilai paling sering muncul; cocok untuk data kategorik.',
    ] },
    { kind: 'h2', text: 'B. Memilih yang Tepat' },
    { kind: 'table', headers: ['Situasi', 'Ukuran terbaik'], rows: [
      ['Data simetris, tanpa outlier', 'Mean'],
      ['Ada outlier / data miring (skewed)', 'Median'],
      ['Data kategorik', 'Modus'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Mean tertimbang', text: 'Untuk data dengan bobot berbeda (mis. IPK): x̄ = Σ(w·x) ÷ Σw.' },
    { kind: 'example', title: 'Contoh', blocks: [
      { kind: 'p', text: 'Data gaji (juta): 4, 5, 5, 6, 30. Mean = 50÷5 = **10** (terdistorsi outlier 30). Median = **5**, Modus = **5** → median lebih mewakili.' },
    ] },
  ],
};

const tm3: Reading = {
  tm: 3, title: 'Statistik Deskriptif — Dispersi (Penyebaran)', ref: 'DA 2–3 · AA 4',
  intro: 'Ukuran penyebaran menunjukkan seberapa jauh data tersebar dari pusatnya — kunci menilai risiko & konsistensi.',
  objectives: ['Menghitung range, varians, standar deviasi.', 'Menafsirkan koefisien variasi.', 'Memahami aturan empiris (empirical rule).'],
  blocks: [
    { kind: 'h2', text: 'A. Ukuran Penyebaran' },
    { kind: 'formula', text: 'Varians sampel: s² = Σ(x − x̄)² ÷ (n − 1)', note: 'Populasi memakai pembagi N dan rata-rata μ.' },
    { kind: 'formula', text: 'Standar deviasi: s = √s²', note: 'Satuan sama dengan data; makin besar = makin menyebar.' },
    { kind: 'ul', items: [
      '**Range** = nilai maks − min (paling sederhana).',
      '**IQR** = Q3 − Q1 (rentang antarkuartil, tahan outlier).',
      '**Koefisien variasi (CV)** = (s ÷ x̄) × 100% — membandingkan variabilitas relatif antar kelompok.',
    ] },
    { kind: 'h2', text: 'B. Aturan Empiris (data normal)' },
    { kind: 'ul', items: [
      '≈ **68%** data dalam ±1 standar deviasi dari mean.',
      '≈ **95%** dalam ±2 standar deviasi.',
      '≈ **99,7%** dalam ±3 standar deviasi.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Skewness', text: 'Mean > Median → miring **kanan** (positif). Mean < Median → miring **kiri** (negatif). Mean ≈ Median → simetris.' },
  ],
};

const tm4: Reading = {
  tm: 4, title: 'Probabilitas & Distribusi', ref: 'DA 5–7 · AA 6–9',
  intro: 'Probabilitas mengukur ketidakpastian (0–1). Distribusi peluang menjelaskan bagaimana nilai variabel acak tersebar — fondasi seluruh statistik inferensial.',
  objectives: ['Menerapkan aturan dasar probabilitas.', 'Menggunakan distribusi binomial.', 'Menggunakan distribusi normal & standardisasi Z.'],
  blocks: [
    { kind: 'h2', text: 'A. Aturan Dasar Probabilitas' },
    { kind: 'ul', items: [
      '**Aturan penjumlahan:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
      '**Aturan perkalian (independen):** P(A ∩ B) = P(A) × P(B).',
      '**Komplemen:** P(Aᶜ) = 1 − P(A).',
    ] },
    { kind: 'h2', text: 'B. Distribusi Binomial (diskrit)' },
    { kind: 'formula', text: 'P(X = x) = C(n,x) · pˣ · (1 − p)ⁿ⁻ˣ', note: 'n percobaan, peluang sukses p, x jumlah sukses. Mean = np.' },
    { kind: 'h2', text: 'C. Distribusi Normal (kontinu)' },
    { kind: 'p', text: 'Berbentuk lonceng simetris, ditentukan oleh **μ** (pusat) dan **σ** (sebaran). Untuk menghitung peluang, nilai distandardisasi menjadi skor **Z**.' },
    { kind: 'formula', text: 'Z = (x − μ) ÷ σ', note: 'Z menyatakan berapa standar deviasi suatu nilai dari mean; pakai tabel Z untuk peluang.' },
    { kind: 'callout', variant: 'key', title: 'Teorema Limit Pusat (CLT)', text: 'Untuk n cukup besar (≥ 30), distribusi rata-rata sampel mendekati **normal** apa pun bentuk populasinya — dasar estimasi & uji hipotesis.' },
  ],
};

const tm5: Reading = {
  tm: 5, title: 'Estimasi (Poin & Interval)', ref: 'DA 9 · AA 11',
  intro: 'Estimasi menggunakan data sampel untuk menebak parameter populasi, lengkap dengan tingkat keyakinan (confidence).',
  objectives: ['Membedakan estimasi titik & interval.', 'Membentuk confidence interval untuk mean & proporsi.', 'Menentukan ukuran sampel.'],
  blocks: [
    { kind: 'h2', text: 'A. Titik vs Interval' },
    { kind: 'ul', items: [
      '**Estimasi titik:** satu nilai (x̄ menaksir μ).',
      '**Confidence interval (CI):** rentang yang diyakini memuat parameter dengan tingkat keyakinan tertentu (mis. 95%).',
    ] },
    { kind: 'h2', text: 'B. CI untuk Rata-rata' },
    { kind: 'formula', text: 'CI = x̄ ± Z(σ/√n)', note: 'jika σ populasi diketahui (atau n besar).' },
    { kind: 'formula', text: 'CI = x̄ ± t(s/√n)', note: 'jika σ tidak diketahui & sampel kecil → pakai distribusi t dengan df = n − 1.' },
    { kind: 'h2', text: 'C. CI untuk Proporsi & Ukuran Sampel' },
    { kind: 'formula', text: 'CI proporsi = p̂ ± Z·√[p̂(1−p̂)/n]' },
    { kind: 'callout', variant: 'tip', title: 'Margin of error (E)', text: 'Setengah lebar interval. CI 95% lebih lebar daripada 90% (lebih yakin = lebih lebar). Memperbesar n mempersempit interval.' },
  ],
};

const tm6: Reading = {
  tm: 6, title: 'Uji Hipotesis — Bagian 1 (Mean & Proporsi)', ref: 'DA 10 · AA 12',
  intro: 'Uji hipotesis adalah prosedur formal untuk menguji klaim tentang populasi memakai bukti sampel.',
  objectives: ['Merumuskan H₀ & H₁.', 'Memahami error tipe I & II serta α.', 'Mengambil keputusan dengan p-value.'],
  blocks: [
    { kind: 'h2', text: 'A. Lima Langkah Uji Hipotesis' },
    { kind: 'ol', items: [
      'Rumuskan **H₀** (tidak ada efek) & **H₁** (ada efek).',
      'Tentukan taraf signifikansi **α** (mis. 0,05).',
      'Hitung **statistik uji** (Z atau t).',
      'Bandingkan dengan nilai kritis / hitung **p-value**.',
      'Ambil keputusan: tolak H₀ bila **p-value < α**.',
    ] },
    { kind: 'h2', text: 'B. Dua Jenis Kesalahan' },
    { kind: 'table', headers: ['Keputusan', 'H₀ benar', 'H₀ salah'], rows: [
      ['Tolak H₀', 'Error Tipe I (α)', 'Benar (power)'],
      ['Gagal tolak H₀', 'Benar', 'Error Tipe II (β)'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Aturan keputusan', text: '**p-value < α → tolak H₀** (hasil signifikan). One-tailed vs two-tailed ditentukan arah H₁. Error tipe I = "menghukum yang tak bersalah"; tipe II = "membebaskan yang bersalah".' },
  ],
};

const tm7: Reading = {
  tm: 7, title: 'Uji Hipotesis — Bagian 2 (Perbedaan Rata-rata)', ref: 'DA 11 · AA 12',
  intro: 'Memperluas uji hipotesis untuk membandingkan **dua kelompok**: berpasangan vs independen.',
  objectives: ['Membedakan sampel berpasangan & independen.', 'Memilih uji yang tepat.', 'Memahami trade-off error I & II.'],
  blocks: [
    { kind: 'h2', text: 'A. Berpasangan vs Independen' },
    { kind: 'table', headers: ['Jenis', 'Contoh', 'Uji'], rows: [
      ['Paired (berpasangan)', 'Sebelum vs sesudah pelatihan pada orang sama', 'Paired t-test (uji selisih)'],
      ['Independent', 'Gaji pria vs wanita (kelompok berbeda)', 'Independent t-test'],
    ] },
    { kind: 'formula', text: 't = (x̄₁ − x̄₂) ÷ standard error selisih', note: 'Bentuk SE berbeda untuk paired vs independen.' },
    { kind: 'h2', text: 'B. Trade-off Error & Power' },
    { kind: 'ul', items: [
      'Menurunkan α (mis. 0,05 → 0,01) mengurangi error tipe I tetapi **menambah** error tipe II.',
      '**Power = 1 − β** = peluang mendeteksi efek yang benar-benar ada; naik bila n besar atau efek besar.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Pilih uji yang benar', text: 'Tentukan dulu: berapa kelompok? berpasangan/independen? skala data? Salah memilih uji = kesimpulan keliru — sering jadi jebakan ujian.' },
  ],
};

const tm8: Reading = {
  tm: 8, title: 'Analisis Varians (ANOVA)', ref: 'DA 12',
  intro: 'ANOVA membandingkan rata-rata **tiga kelompok atau lebih** sekaligus, tanpa menambah risiko error tipe I seperti uji-t berulang.',
  objectives: ['Menjelaskan logika ANOVA satu arah.', 'Menafsirkan F-statistic & post hoc.', 'Mengecek asumsi ANOVA.'],
  blocks: [
    { kind: 'h2', text: 'A. Konsep' },
    { kind: 'p', text: 'ANOVA memecah total variasi menjadi variasi **antar kelompok (between)** dan variasi **dalam kelompok (within)**. Jika variasi antar kelompok jauh lebih besar, rata-rata kelompok berbeda nyata.' },
    { kind: 'formula', text: 'F = Variansi antar kelompok ÷ Variansi dalam kelompok', note: 'F besar → tolak H₀ (minimal satu rata-rata berbeda).' },
    { kind: 'ul', items: [
      '**Factor** = variabel pengelompokan; **Level** = kategori dalam factor.',
      '**Post hoc** (mis. Tukey) = mengidentifikasi kelompok mana yang berbeda **setelah** F signifikan.',
      '**Eta squared** = ukuran besar efek (proporsi variasi yang dijelaskan).',
    ] },
    { kind: 'h2', text: 'B. Asumsi' },
    { kind: 'ul', items: [
      'Independensi antar pengamatan.',
      'Normalitas residual.',
      'Homogenitas varians (cek **Levene’s Test**); bila dilanggar → alternatif non-parametrik (Kruskal-Wallis).',
    ] },
    { kind: 'callout', variant: 'warning', title: 'Kenapa bukan banyak uji-t?', text: 'Melakukan uji-t berkali-kali menaikkan peluang error tipe I secara akumulatif. ANOVA mengujinya sekaligus dengan α terkendali.' },
  ],
};

const tm9: Reading = {
  tm: 9, title: 'Regresi & Korelasi — Bagian 1', ref: 'DA 13 · AA 15',
  intro: 'Korelasi mengukur kekuatan hubungan dua variabel; regresi membangun model untuk **memprediksi** satu variabel dari variabel lain.',
  objectives: ['Menafsirkan koefisien korelasi Pearson.', 'Menyusun persamaan regresi linear sederhana.', 'Memahami metode kuadrat terkecil.'],
  blocks: [
    { kind: 'h2', text: 'A. Korelasi (Pearson r)' },
    { kind: 'ul', items: [
      'r berkisar **−1 sampai +1**. Dekat +1 = hubungan positif kuat; dekat −1 = negatif kuat; 0 = tak ada hubungan linear.',
      '**Scatterplot** membantu melihat pola sebelum menghitung r.',
      '**Korelasi ≠ kausalitas** — hubungan kuat belum tentu sebab-akibat.',
    ] },
    { kind: 'h2', text: 'B. Regresi Linear Sederhana' },
    { kind: 'formula', text: 'Ŷ = a + bX', note: 'a = intercept (nilai Y saat X=0); b = slope (perubahan Y per unit X).' },
    { kind: 'p', text: 'Garis terbaik dipilih dengan **metode kuadrat terkecil (least squares)**: meminimalkan jumlah kuadrat selisih nilai aktual dan prediksi (residual).' },
    { kind: 'example', title: 'Contoh', blocks: [
      { kind: 'p', text: 'Model biaya: Ŷ = 5.000.000 + 2.000·X (X = unit produksi). Artinya biaya tetap Rp5.000.000 dan biaya variabel **Rp2.000/unit** — persis konsep cost behavior pada Akuntansi Biaya.' },
    ] },
  ],
};

const tm10: Reading = {
  tm: 10, title: 'Regresi & Korelasi — Bagian 2', ref: 'DA 13 · AA 15',
  intro: 'Menilai seberapa baik model regresi dan memperkenalkan regresi berganda.',
  objectives: ['Menafsirkan koefisien determinasi R².', 'Menguji signifikansi regresi.', 'Mengenal regresi linear berganda.'],
  blocks: [
    { kind: 'h2', text: 'A. Kualitas Model' },
    { kind: 'formula', text: 'R² = proporsi variasi Y yang dijelaskan oleh X', note: '0–1; makin dekat 1 makin baik. R² = 0,8 → 80% variasi Y dijelaskan model.' },
    { kind: 'ul', items: [
      '**Uji-t/uji-F** menilai apakah hubungan signifikan secara statistik (p-value < α).',
      '**Analisis residual** mengecek asumsi (linearitas, normalitas, homoskedastisitas).',
    ] },
    { kind: 'h2', text: 'B. Regresi Linear Berganda' },
    { kind: 'formula', text: 'Ŷ = a + b₁X₁ + b₂X₂ + … + bₖXₖ', note: 'Beberapa prediktor sekaligus; gunakan Adjusted R² untuk membandingkan model.' },
    { kind: 'callout', variant: 'warning', title: 'Multikolinearitas', text: 'Jika antar-prediktor sangat berkorelasi, koefisien menjadi tidak stabil. Periksa dengan VIF.' },
  ],
};

const tm11: Reading = {
  tm: 11, title: 'Analisis Seri Waktu (Time Series)', ref: 'DA 18',
  intro: 'Data deret waktu (penjualan bulanan, harga saham) dianalisis untuk mengenali pola dan **meramalkan** masa depan.',
  objectives: ['Mengidentifikasi komponen deret waktu.', 'Menerapkan rata-rata bergerak.', 'Mengenal model ARIMA.'],
  blocks: [
    { kind: 'h2', text: 'A. Komponen Deret Waktu' },
    { kind: 'ul', items: [
      '**Trend (T):** arah jangka panjang.',
      '**Seasonal (S):** pola berulang musiman.',
      '**Cyclical (C):** fluktuasi siklus bisnis.',
      '**Irregular (I):** acak/tak terduga.',
    ] },
    { kind: 'h2', text: 'B. Metode Peramalan' },
    { kind: 'ul', items: [
      '**Moving average (rata-rata bergerak):** menghaluskan fluktuasi.',
      '**Exponential smoothing:** memberi bobot lebih pada data terbaru.',
      '**ARIMA:** model gabungan AutoRegressive + Integrated + Moving Average untuk data yang sudah stasioner.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Stasioneritas', text: 'Sebelum ARIMA, data sering perlu dibuat **stasioner** (rata-rata & varians stabil) lewat differencing.' },
  ],
};

const tm12: Reading = {
  tm: 12, title: 'Metode Non-parametrik', ref: 'DA 16',
  intro: 'Saat asumsi normalitas tidak terpenuhi atau data berskala ordinal/nominal, uji non-parametrik menjadi alternatif yang valid.',
  objectives: ['Mengetahui kapan memakai uji non-parametrik.', 'Mencocokkan uji non-parametrik dengan padanan parametriknya.', 'Menerapkan uji chi-square.'],
  blocks: [
    { kind: 'h2', text: 'A. Kapan Dipakai?' },
    { kind: 'p', text: 'Saat data tidak normal, sampel kecil, atau berskala **ordinal/nominal**. Uji ini berbasis peringkat/frekuensi, bukan nilai aktual.' },
    { kind: 'table', headers: ['Parametrik', 'Padanan Non-parametrik'], rows: [
      ['Uji-t satu sampel', 'Uji tanda / Wilcoxon signed-rank'],
      ['Uji-t independen', 'Mann-Whitney U'],
      ['ANOVA satu arah', 'Kruskal-Wallis'],
      ['Korelasi Pearson', 'Korelasi Spearman'],
    ] },
    { kind: 'h2', text: 'B. Uji Chi-Square' },
    { kind: 'formula', text: 'χ² = Σ [(O − E)² ÷ E]', note: 'O = frekuensi observasi, E = frekuensi harapan. Untuk uji kebaikan-suai (goodness of fit) & independensi (tabel kontingensi).' },
    { kind: 'callout', variant: 'info', title: 'Trade-off', text: 'Uji non-parametrik lebih fleksibel tetapi umumnya **kurang kuat (lower power)** dibanding parametrik bila asumsi parametrik sebenarnya terpenuhi.' },
  ],
};

const tm13: Reading = {
  tm: 13, title: 'Perangkat Lunak Statistik & Persiapan Proyek Akhir', ref: 'AA 16',
  intro: 'Analisis modern memakai perangkat lunak. Bagian ini menyiapkan alur kerja analisis data untuk proyek akhir.',
  objectives: ['Mengenal perangkat lunak statistik umum.', 'Memahami alur kerja analisis data.', 'Menyiapkan proyek akhir.'],
  blocks: [
    { kind: 'h2', text: 'A. Perangkat Lunak' },
    { kind: 'ul', items: [
      '**Excel:** analisis dasar, PivotTable, Data Analysis ToolPak.',
      '**SPSS:** populer untuk uji statistik bermenu (deskriptif, t-test, ANOVA, regresi).',
      '**R / Python:** fleksibel & gratis untuk analisis lanjutan & otomasi.',
    ] },
    { kind: 'h2', text: 'B. Alur Kerja Analisis' },
    { kind: 'ol', items: [
      'Rumuskan pertanyaan & hipotesis penelitian.',
      'Kumpulkan & bersihkan data (data cleaning).',
      'Eksplorasi (statistik deskriptif & visualisasi).',
      'Pilih & jalankan uji yang sesuai.',
      'Tafsirkan hasil & tarik kesimpulan.',
      'Sajikan temuan secara jujur & jelas.',
    ] },
    { kind: 'callout', variant: 'tip', title: 'Peta memilih metode', text: 'Tentukan: (1) tujuan (deskripsi/hubungan/perbedaan/prediksi), (2) jumlah & skala variabel, (3) asumsi terpenuhi atau tidak → barulah pilih uji.' },
  ],
};

const tm14: Reading = {
  tm: 14, title: 'Presentasi Proyek Akhir', ref: '—',
  intro: 'Analisis yang baik harus dikomunikasikan dengan baik. TM ini menutup mata kuliah dengan keterampilan menyajikan hasil statistik.',
  objectives: ['Menyusun laporan analisis yang runtut.', 'Memvisualisasikan data secara efektif.', 'Menyampaikan kesimpulan berbasis bukti.'],
  blocks: [
    { kind: 'h2', text: 'A. Struktur Laporan/Presentasi' },
    { kind: 'ol', items: [
      'Latar belakang & pertanyaan penelitian.',
      'Data & metode (uji yang dipakai + alasannya).',
      'Hasil (tabel/grafik yang relevan, nilai uji & p-value).',
      'Interpretasi & keterbatasan.',
      'Kesimpulan & rekomendasi.',
    ] },
    { kind: 'h2', text: 'B. Prinsip Visualisasi' },
    { kind: 'ul', items: [
      'Pilih grafik sesuai tujuan (bar untuk kategori, garis untuk tren, scatter untuk hubungan).',
      'Jangan menyesatkan (skala sumbu jujur, hindari grafik 3D yang membingungkan).',
      'Sorot temuan utama, bukan membanjiri angka.',
    ] },
    { kind: 'callout', variant: 'key', title: 'Etika data', text: 'Sajikan hasil apa adanya — termasuk yang tidak signifikan. Memanipulasi atau "cherry-picking" data melanggar integritas (bersinggungan dengan mata kuliah Etika).' },
  ],
};

export const MAS122_READINGS: Record<number, Reading> = {
  1: tm1, 2: tm2, 3: tm3, 4: tm4, 5: tm5, 6: tm6, 7: tm7,
  8: withSupplement(tm8),
  9: withSupplement(tm9),
  10: withSupplement(tm10),
  11: withSupplement(tm11),
  12: withSupplement(tm12),
  13: withSupplement(tm13),
  14: withSupplement(tm14),
};

const MAS122_REVIEW_UAS_READING: Reading = {
  tm: 15,
  title: 'Bocoran Pola Ujian UAS Statistik (MAS122)',
  ref: 'UAS STATIS 2024.pdf',
  intro: 'Rekap pola penyelesaian, rumus, serta visualisasi grafik yang diujikan dalam UAS Statistik berdasarkan arsip soal nyata.',
  objectives: [
    'Membaca grafik 4 komponen Time Series (Trend, Seasonal, Cyclical, Irregular)',
    'Menavigasi pohon keputusan pemilihan uji statistik (Parametrik vs Non-Parametrik)',
    'Menghitung Moving Average, Weighted Moving Average, dan Seasonal Index',
    'Menganalisis hasil Regresi Berganda dan Asumsi Klasik (VIF)'
  ],
  blocks: [
    { kind: 'h2', text: 'A. Visualisasi 4 Komponen Time Series & Peramalan' },
    {
      kind: 'figure',
      title: 'Grafik Pergerakan 4 Komponen Deret Waktu (Time Series)',
      altText: 'Grafik menunjukkan Secular Trend naik mulus, gelombang Seasonal musiman tahunan, gelombang Cyclical siklus ekonomi jangka panjang, dan fluktuasi Irregular acak',
      svg: `<svg viewBox="0 0 600 250" class="w-full h-auto font-sans"><rect width="600" height="250" rx="12" fill="#0f172a"/><line x1="50" y1="210" x2="550" y2="210" stroke="#475569" stroke-width="2"/><line x1="50" y1="210" x2="50" y2="20" stroke="#475569" stroke-width="2"/><line x1="50" y1="190" x2="550" y2="40" stroke="#10b981" stroke-width="3" stroke-dasharray="6,6"/><text x="360" y="45" fill="#10b981" font-size="11" font-weight="bold">1. Secular Trend (Tren Jangka Panjang)</text><path d="M 50 170 Q 75 140, 100 170 T 150 170 T 200 170 T 250 170 T 300 170 T 350 170 T 400 170 T 450 170 T 500 170 T 550 170" stroke="#38bdf8" stroke-width="2.5" fill="none"/><text x="350" y="135" fill="#38bdf8" font-size="11" font-weight="bold">2. Seasonal Variation (Musiman 1 Thn)</text><path d="M 50 160 C 180 60, 320 240, 550 70" stroke="#c084fc" stroke-width="3" fill="none"/><text x="140" y="80" fill="#c084fc" font-size="11" font-weight="bold">3. Cyclical (Siklus Bisnis > 1 Thn)</text><circle cx="260" cy="170" r="6" fill="#f43f5e"/><line x1="260" y1="170" x2="260" y2="120" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,3"/><text x="180" y="115" fill="#f43f5e" font-size="11" font-weight="bold">4. Irregular (Kejadian Acak/Bencana)</text><text x="270" y="235" fill="#94a3b8" font-size="11">Periode Waktu (Bulan / Tahun)</text></svg>`,
      caption: 'Visualisasi perbedaan antara garis tren sekular (hijau), fluktuasi musiman yang berulang tiap tahun (biru), siklus ekonomi jangka panjang >1 tahun (ungu), dan kejutan acak (merah).'
    },
    {
      kind: 'chart-guide',
      title: 'Cara Membedakan 4 Komponen Deret Waktu pada Soal UAS',
      points: [
        '**Secular Trend (Garis Hijau Putus-putus):** Arah pergerakan data jangka panjang secara mulus (naik atau turun) selama bertahun-tahun atau berdekade (misal: pertumbuhan populasi, adopsi teknologi QRIS).',
        '**Seasonal Variation (Gelombang Biru Pendek):** Pola fluktuasi yang berulang secara teratur dalam rentang waktu kurang dari atau sama dengan 1 tahun (misal: puncak penjualan ritel saat Lebaran/Natal atau kuartalan).',
        '**Cyclical Variation (Gelombang Ungu Panjang):** Fluktuasi ekonomi yang bergerak naik dan turun bergelombang melewati garis tren yang memakan waktu lebih dari 1 tahun (misal: fase resesi, pemulihan, ekspansi bisnis 5-10 tahunan).',
        '**Irregular / Random Fluctuation (Titik Merah):** Fluktuasi sisa (residual) yang sifatnya acak, mendadak, dan tidak dapat diprediksi seperti akibat bencana alam, pemogokan buruh, pandemi, atau perang.'
      ]
    },
    { kind: 'formula', text: 'Moving Average: MA(n) = Total data dalam n periode / n', note: 'Contoh: Jika data 2005=2, 2006=6, 2007=4. MA3 untuk 2006 = (2+6+4)/3 = 4' },
    { kind: 'formula', text: 'Weighted Moving Average (WMA) = Σ (Bobot × Nilai Periode) / Σ Bobot', note: 'Contoh: Data Jan=10, Feb=12, Mar=15 dengan bobot 3, 2, 1 (terbaru bobot terbesar). Prediksi April = (15×3 + 12×2 + 10×1) / (3+2+1) = 79 / 6 = 13.17' },
    { kind: 'formula', text: 'Indeks Musiman (Seasonal Index) = (Rata-rata Musim / Rata-rata Keseluruhan) x 100', note: 'Contoh: Jika rata musim semi 81.46 dan keseluruhan 97.41, indeks = (81.46 / 97.41) x 100 = 83.6 (atau 16.4% lebih rendah)' },
    { kind: 'formula', text: 'Faktor Koreksi = Jumlah Periode Musim / (Jumlah Indeks Musiman / 100)', note: 'Contoh: Jika total kuartal 4, dan jumlah indeks 401.4, Faktor Koreksi = 4 / 4.014 = 0.9968' },
    { kind: 'h2', text: 'B. Pohon Keputusan Pemilihan Uji Statistik (Parametrik vs Non-Parametrik)' },
    {
      kind: 'figure',
      title: 'Diagram Alir Pemilihan Uji Statistik Akuntansi & Bisnis',
      altText: 'Diagram alur memilih uji statistik berdasarkan jumlah kelompok, keterikatan sampel, dan jenis skala data',
      svg: `<svg viewBox="0 0 650 310" class="w-full h-auto font-sans"><rect width="650" height="310" rx="12" fill="#0f172a"/><rect x="225" y="15" width="200" height="38" rx="8" fill="#3b82f6"/><text x="325" y="39" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Tujuan Uji Rata-rata / Peringkat</text><line x1="325" y1="53" x2="160" y2="90" stroke="#64748b" stroke-width="2"/><line x1="325" y1="53" x2="490" y2="90" stroke="#64748b" stroke-width="2"/><rect x="70" y="90" width="180" height="34" rx="6" fill="#475569"/><text x="160" y="112" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2 Kelompok Sampel</text><rect x="400" y="90" width="180" height="34" rx="6" fill="#475569"/><text x="490" y="112" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">&gt; 2 Kelompok (Banyak)</text><line x1="160" y1="124" x2="80" y2="165" stroke="#64748b" stroke-width="1.5"/><line x1="160" y1="124" x2="240" y2="165" stroke="#64748b" stroke-width="1.5"/><rect x="10" y="165" width="140" height="48" rx="6" fill="#10b981"/><text x="80" y="185" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Independen (Bebas)</text><text x="80" y="203" fill="#ecfdf5" font-size="10" text-anchor="middle">t-test / Mann-Whitney</text><rect x="170" y="165" width="140" height="48" rx="6" fill="#10b981"/><text x="240" y="185" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Berpasangan (Paired)</text><text x="240" y="203" fill="#ecfdf5" font-size="10" text-anchor="middle">Paired t / Wilcoxon</text><line x1="490" y1="124" x2="410" y2="165" stroke="#64748b" stroke-width="1.5"/><line x1="490" y1="124" x2="570" y2="165" stroke="#64748b" stroke-width="1.5"/><rect x="340" y="165" width="140" height="48" rx="6" fill="#f59e0b"/><text x="410" y="185" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Normal / Interval</text><text x="410" y="203" fill="#fef3c7" font-size="10" text-anchor="middle">One-way / Two-way ANOVA</text><rect x="500" y="165" width="140" height="48" rx="6" fill="#ef4444"/><text x="570" y="185" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Ordinal / Non-Normal</text><text x="570" y="203" fill="#fee2e2" font-size="10" text-anchor="middle">Kruskal-Wallis Test</text><text x="325" y="260" fill="#94a3b8" font-size="11" text-anchor="middle">*Aturan Emas: Jika syarat Normalitas atau Homogenitas Varians (Levene) dilanggar,</text><text x="325" y="278" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">selalu gunakan alternatif Statistik Non-Parametrik (Mann-Whitney, Wilcoxon, Kruskal-Wallis)!</text></svg>`,
      caption: 'Gunakan bagan ini saat membaca soal cerita di UAS: tentukan jumlah kelompoknya terlebih dahulu, lalu cek apakah sampelnya berpasangan atau independen, serta perhatikan skala datanya.'
    },
    {
      kind: 'table',
      headers: ['Metode Uji', 'Padanan Non-Parametrik', 'Kondisi & Contoh Kasus Bisnis'],
      rows: [
        ['Independent 2-Sample t-test', 'Mann-Whitney U Test', 'Membandingkan 2 kelompok bebas (misal: gaji auditor KAP Big 4 vs Non-Big 4). Pakai Mann-Whitney jika data ordinal/tidak normal.'],
        ['Paired Two-Sample t-test', 'Wilcoxon Signed-Rank Test', 'Membandingkan subjek yang sama sebelum & sesudah (misal: kepatuhan pajak sebelum & sesudah sistem baru). Pakai Wilcoxon jika data peringkat/ordinal.'],
        ['One-way ANOVA', 'Kruskal-Wallis Test', 'Membandingkan rata-rata >2 kelompok bebas (misal: penjualan 3 metode promosi). Pakai Kruskal-Wallis jika asumsi homogenitas varians/normalitas dilanggar.'],
        ['Pearson Correlation (r)', 'Spearman Rank Correlation (rs)', 'Mengukur kekuatan hubungan linier 2 variabel. Pakai Spearman jika data berupa peringkat (ranking) atau distribusi tidak normal.']
      ]
    },
    { kind: 'callout', variant: 'key', title: 'Syarat Mutlak ANOVA & Regresi (Parametrik)', text: '1. **Homogenitas Varians (Levene\'s Test):** Nilai Sig. Levene harus > 0.05 agar asumsi varians homogen terpenuhi.\n2. **Normalitas:** Data berdistribusi normal.\n3. **Multikolinearitas (Khusus Regresi Berganda):** Nilai VIF harus < 10 (atau Tolerance > 0.10) agar variabel bebas tidak saling berkorelasi tinggi.' },
    { kind: 'h2', text: 'C. Korelasi dan Regresi Linier' },
    { kind: 'ul', items: [
      '**Interpretasi Korelasi (r):** Nilai mendekati +1 (positif kuat/searah), mendekati -1 (negatif kuat/berbanding terbalik seperti -0.85), mendekati 0 (tidak ada hubungan linier). Ingat: Korelasi kuat tidak membuktikan hubungan sebab-akibat (causality)!',
      '**Persamaan Regresi (Y = a + bX):** Intercept (a) adalah nilai Y ketika X = 0 (sering dimaknai sebagai *Fixed Cost* atau biaya tetap). Slope (b) adalah perubahan Y setiap 1 unit perubahan X.',
      '**Uji F vs Uji t pada Regresi Berganda:** Uji F menguji kelayakan model secara keseluruhan (seluruh X secara **simultan** mempengaruhi Y). Uji t menguji signifikansi masing-masing variabel X secara **parsial/individu**.',
      '**Bahaya Ekstrapolasi:** Memprediksi nilai Y menggunakan nilai X yang jauh di luar rentang data observasi masa lalu sangat berbahaya karena pola hubungan linier belum tentu berlaku di luar rentang tersebut.'
    ]}
  ]
};

export const MAS122_REVIEW_READINGS: Partial<Record<'uts' | 'uas', Reading>> = {
  uas: MAS122_REVIEW_UAS_READING
};
