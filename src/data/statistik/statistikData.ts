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
