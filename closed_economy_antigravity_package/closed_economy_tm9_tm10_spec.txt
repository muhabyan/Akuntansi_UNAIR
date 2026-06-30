# CLOSED ECONOMY WEEK 9-10
## Paket Materi Siap Implementasi Website untuk Antigravity

Sumber: `Salinan 9-10. Closed Economy(1).pptx`.
Jumlah slide sumber: 52 slide. Jangan membaca file sebagai 200 halaman. Jangan menggabungkan atau menghapus slide.
Pembagian wajib: TM 9 memakai slide 1-22. TM 10 memakai slide 23-52.

Instruksi untuk developer/AI coding:
1. Buat dua modul terpisah: `TM 9 - Closed Economy: Consumption, Saving, and Investment` dan `TM 10 - Closed Economy: Equilibrium Output, Multiplier, and Fiscal Policy`.
2. Setiap slide harus memiliki minimal: judul, ringkasan konsep, isi materi, rumus, arti simbol, interpretasi ekonomi, serta elemen visual bila ada.
3. Semua rumus wajib dirender dengan MathJax/KaTeX, bukan gambar gelap dari PPT. Gambar formula boleh dipakai hanya sebagai referensi, bukan satu-satunya konten.
4. Semua tabel wajib diketik ulang sebagai tabel HTML/Markdown. Jangan dijadikan gambar jika tujuannya pembelajaran interaktif.
5. Semua grafik wajib dibuat ulang sebagai SVG/Canvas/Chart.js yang responsif. Jangan memakai teks warna putih pada background transparan. Pastikan terbaca di light mode dan dark mode.
6. Gunakan label sumbu yang eksplisit, bukan hanya simbol. Contoh: `Y = GDP / Income`, `C = Consumption`, `S = Saving`, `I = Investment`, `G = Government Spending`.
7. Jangan menghilangkan interpretasi. Setiap grafik/tabel harus memiliki paragraf `Makna visual`.
8. Validasi akhir: total slide yang masuk harus 52, total visual non-teks yang perlu ditangani adalah 23 objek: 6 tabel data, 10 grafik/diagram, dan 7 panel/formula visual.

---

# Kamus Simbol Wajib

Gunakan kamus ini pada seluruh halaman website. Simbol tidak boleh muncul tanpa penjelasan.

| Simbol | Makna | Penjelasan operasional |
|---|---|---|
| Y | Income / GDP / Output | Pendapatan nasional atau output agregat. Dalam model sederhana sering dipakai sebagai GDP. |
| Yd | Disposable income | Pendapatan yang tersedia untuk konsumsi dan tabungan setelah pajak. Rumus dasar: `Yd = Y - T`. |
| C | Consumption | Pengeluaran konsumsi rumah tangga. |
| C0 atau C₀ | Autonomous consumption | Konsumsi minimum yang tetap terjadi walaupun pendapatan nol. |
| b | MPC | Marginal propensity to consume. Bagian tambahan pendapatan yang digunakan untuk konsumsi. Nilainya antara 0 dan 1. |
| S | Saving | Bagian dari disposable income yang tidak dikonsumsi. |
| I | Investment | Investasi riil, yaitu penambahan stok aset produktif atau barang modal. |
| G | Government spending | Belanja pemerintah untuk barang dan jasa. |
| T | Tax | Pajak. Bisa berbentuk pajak tetap atau pajak yang bergantung pada pendapatan. |
| T0 atau T₀ | Lump-sum tax / autonomous tax | Pajak tetap yang tidak berubah ketika pendapatan berubah. |
| t | Tax rate | Tarif pajak proporsional terhadap pendapatan. Dalam fungsi pajak: `T = T0 + tY`. |
| MPC | Marginal propensity to consume | Kecenderungan mengonsumsi tambahan pendapatan. Rumus: `MPC = ΔC / ΔYd`. |
| MPS | Marginal propensity to save | Kecenderungan menabung tambahan pendapatan. Rumus: `MPS = ΔS / ΔYd`. |
| Δ | Delta / perubahan | Menunjukkan perubahan nilai suatu variabel. Contoh: `ΔY` berarti perubahan GDP/output. |
| TE | Total planned expenditure | Total pengeluaran terencana. Dalam dua sektor: `TE = C + I`. Dalam tiga sektor: `TE = C + I + G`. |
| V atau PV | Present value | Nilai sekarang dari aliran pendapatan masa depan. |
| i | Interest rate | Tingkat bunga. Dalam present value, dipakai sebagai tingkat diskonto. |
| N₁, N₂, Nₜ | Net receipts | Penerimaan bersih pada periode ke-1, ke-2, sampai periode ke-t. |
| r | Return on investment | Tingkat pengembalian investasi riil. |
| π | Inflation rate | Tingkat inflasi. Tidak tertulis eksplisit di slide, tetapi dibutuhkan jika menjelaskan bunga riil. |

Catatan koreksi matematis penting: pada fungsi tabungan, jika `C = C0 + bY`, maka `S = Y - C = Y - (C0 + bY) = -C0 + (1-b)Y`. Jangan menulis `S = Y - C0 + bY` sebagai bentuk akhir karena secara aljabar tidak konsisten. Bentuk akhir yang benar adalah `S = -C0 + (1-b)Y`.

---

# Inventaris Visual yang Wajib Dibuat Ulang atau Ditampilkan

| Slide | Jenis visual | Nama file asset | Tindakan implementasi |
|---|---|---|---|
| 5 | Tabel data | tidak perlu asset | Ketik ulang sebagai tabel HTML. Koreksi Saving A menjadi -200 agar sesuai formula. |
| 6 | Grafik fungsi konsumsi | `assets/slide06_consumption_function.jpg` | Lebih baik buat ulang sebagai chart/SVG. |
| 7 | Grafik fungsi tabungan | `assets/slide07_saving_function.jpg` | Lebih baik buat ulang sebagai chart/SVG. |
| 9 | Tabel MPC dan MPS | `assets/slide09_mpc_mps_table.jpg` | Ketik ulang sebagai tabel HTML. |
| 10 | Grafik slope konsumsi/MPC | `assets/slide10_mpc_slope.jpg` | Buat ulang sebagai chart/SVG dengan anotasi ΔC dan ΔYd. |
| 11 | Diagram kurva konsumsi | `assets/slide11_consumption_curve_diagram.png` | Buat ulang atau tampilkan sebagai gambar referensi. |
| 11 | Formula MPC | `assets/slide11_mpc_formula.png` | Render ulang dengan MathJax. |
| 11 | Formula konsumsi | `assets/slide11_consumption_formula.png` | Render ulang dengan MathJax. |
| 11 | Formula MPS | `assets/slide11_mps_formula.png` | Render ulang dengan MathJax. |
| 12 | Diagram C dan S | `assets/slide12_consumption_saving_combined.png` | Buat ulang sebagai diagram ringan. |
| 21 | Formula present value | `assets/slide21_present_value_formula.png` | Render ulang dengan MathJax. |
| 25 | Tabel profitabilitas investasi | `assets/slide25_investment_profitability_table.jpg` | Ketik ulang sebagai tabel HTML. |
| 26 | Grafik investment demand schedule | `assets/slide26_investment_demand_schedule.jpg` | Buat ulang sebagai step chart. |
| 27 | Grafik pergeseran investment demand | `assets/slide27_investment_demand_shift.jpg` | Buat ulang sebagai tiga panel atau SVG. |
| 28 | Grafik keseimbangan Y = C + I | `assets/slide28_equilibrium_y_ci_graph_lightmode.jpg` | Pakai asset lightmode atau buat ulang. |
| 29 | Grafik keseimbangan S = I | `assets/slide29_equilibrium_si_graph_lightmode.jpg` | Pakai asset lightmode atau buat ulang. |
| 30 | Tabel equilibrium output dua sektor | `assets/slide30_gdp_determination_table.jpg` | Ketik ulang sebagai tabel HTML. |
| 33 | Tabel arithmetic multiplier | `assets/slide33_multiplier_arithmetic_table_lightmode.jpg` | Ketik ulang sebagai tabel HTML. |
| 39 | Grafik belanja pemerintah | `assets/slide39_government_purchases_graph.jpg` | Buat ulang sebagai chart/SVG. |
| 40 | Tabel government spending | `assets/slide40_government_spending_table.jpg` | Ketik ulang sebagai tabel HTML. |
| 41 | Formula tiga sektor pajak tetap | `assets/slide41_lump_sum_tax_formula_lightmode.png` | Render ulang dengan MathJax. |
| 43 | Formula multiplier G | `assets/slide43_multiplier_g_formula_lightmode.png` | Render ulang dengan MathJax. |
| 44 | Gambar contoh hitung pajak proporsional | `assets/slide44_tax_rate_example_image.png` | Ketik ulang menjadi langkah perhitungan. |

---

# TM 9: Closed Economy, Consumption, Saving, and Investment
## Slide 1. Cover

Judul materi: `Closed Economy`.
Keterangan waktu: `Week 9-10`.

Inti materi: Modul ini membahas ekonomi tertutup, yaitu ekonomi yang tidak memasukkan transaksi luar negeri. Fokusnya adalah hubungan konsumsi, tabungan, investasi, keseimbangan output nasional, multiplier, dan kebijakan fiskal.

Implementasi website: Jadikan slide ini sebagai hero section TM 9 dan TM 10, tetapi isi TM 9 dimulai dari konsumsi, tabungan, dan investasi.

## Slide 2. Outline

Materi yang tercakup dalam file:
1. Two-sectors economy.
2. Consumption and saving.
3. Investment.
4. National income equilibrium and multiplier model.
5. Three-sectors economy.
6. The role of fiscal policy in the multiplier model.

Pembagian modul:
TM 9 mencakup poin 1 sampai bagian awal investasi, yaitu slide 1-22.
TM 10 mencakup peran investasi, keseimbangan pendapatan nasional, multiplier, tiga sektor, dan kebijakan fiskal, yaitu slide 23-52.

## Slide 3. Consumption

Konsep utama: Consumption adalah aktivitas yang mengurangi atau menghabiskan utility barang dan jasa. Personal consumption expenditure adalah pengeluaran rumah tangga untuk membeli barang tidak tahan lama, barang tahan lama kecuali rumah baru, dan jasa.

Rumus fungsi konsumsi linear:

```math
C = C_0 + bY
```

Makna simbol:
`C` adalah konsumsi. `C0` atau `C₀` adalah autonomous consumption. `b` adalah marginal propensity to consume atau MPC. `Y` adalah disposable income pada model sederhana slide ini. Nilai `b` berada pada interval `0 < b < 1`.

Interpretasi: Konsumsi terdiri dari dua komponen. Pertama, konsumsi otonom yang tetap ada meskipun pendapatan nol. Kedua, konsumsi yang dipengaruhi pendapatan. Jika `b = 0.8`, tambahan pendapatan 1 unit akan menaikkan konsumsi sebesar 0.8 unit.

Implementasi website: Buat kartu konsep `Autonomous Consumption` dan `Induced Consumption`. Tambahkan formula interaktif agar pengguna bisa mengganti nilai `C0`, `b`, dan `Y`.

## Slide 4. Saving

Konsep utama: Personal saving adalah bagian dari disposable income yang tidak dikonsumsi.

Derivasi fungsi tabungan:

```math
S = Y - C
```

Karena:

```math
C = C_0 + bY
```

Maka:

```math
S = Y - (C_0 + bY)
```

Sehingga:

```math
S = -C_0 + (1-b)Y
```

Makna simbol:
`S` adalah saving atau tabungan. `-C0` adalah dissaving atau tabungan negatif. `(1-b)` adalah marginal propensity to save atau MPS. `Y` adalah disposable income. Nilai `b` berada antara 0 dan 1, sehingga MPS juga berada antara 0 dan 1.

Interpretasi: Tabungan adalah sisa dari pendapatan setelah konsumsi. Jika pendapatan rendah, konsumsi dapat melebihi pendapatan sehingga tabungan negatif. Ketika pendapatan meningkat, tabungan naik mengikuti slope `(1-b)`.

Catatan validasi: Jangan tampilkan bentuk `S = Y - C0 + bY` sebagai bentuk akhir. Bentuk final yang konsisten adalah `S = -C0 + (1-b)Y`.

## Slide 5. Income, Consumption and Saving

Tabel ini menunjukkan hubungan disposable income, consumption, dan saving. Saving dihitung sebagai disposable income dikurangi consumption.

| Kelompok | Disposable Income | Consumption | Saving = Income - Consumption |
|---|---:|---:|---:|
| A | 24,000 | 24,200 | -200 |
| B | 25,000 | 25,000 | 0 |
| C | 26,000 | 25,800 | 200 |
| D | 27,000 | 26,600 | 400 |
| E | 28,000 | 27,400 | 600 |
| F | 29,000 | 28,200 | 800 |
| G | 30,000 | 29,000 | 1,000 |

Makna tabel: Saat disposable income sebesar 24,000, konsumsi sebesar 24,200. Artinya rumah tangga melakukan dissaving sebesar 200. Titik B adalah break-even karena pendapatan sama dengan konsumsi. Setelah pendapatan melewati 25,000, saving menjadi positif.

Catatan koreksi: Pada hasil ekstraksi teks PPT, baris A kadang terbaca `200`. Secara ekonomi dan aritmetika harus `-200`, karena `24,000 - 24,200 = -200`.

Implementasi website: Tabel ini wajib muncul sebagai tabel HTML. Tambahkan highlight pada baris B sebagai `break-even point`.

## Slide 6. Income, Consumption and Saving: Grafik Fungsi Konsumsi

Visual: grafik fungsi konsumsi dengan sumbu horizontal `Disposable income` dan sumbu vertikal `Consumption expenditures`. Titik A-G mengikuti data slide 5. Garis 45 derajat menunjukkan kondisi `Y = C`. Garis konsumsi menunjukkan hubungan aktual antara disposable income dan konsumsi.

Data grafik:

| Titik | Disposable Income | Consumption |
|---|---:|---:|
| A | 24,000 | 24,200 |
| B | 25,000 | 25,000 |
| C | 26,000 | 25,800 |
| D | 27,000 | 26,600 |
| E | 28,000 | 27,400 |
| F | 29,000 | 28,200 |
| G | 30,000 | 29,000 |

Makna visual: Titik B adalah break-even point. Di kiri titik B, konsumsi lebih besar daripada pendapatan sehingga terjadi dissaving. Di kanan titik B, pendapatan lebih besar daripada konsumsi sehingga terjadi saving. Jarak vertikal antara garis 45 derajat dan fungsi konsumsi menunjukkan besar tabungan atau dissaving.

Instruksi chart: Buat line chart dengan dua garis: `45-degree line: C = Y` dan `Consumption function`. Gunakan label sumbu lengkap. Jangan hanya menulis `DI` dan `C`. Tambahkan anotasi `Break-even point` pada B.

Asset referensi: `assets/slide06_consumption_function.jpg`.

## Slide 7. Income, Consumption and Saving: Grafik Fungsi Tabungan

Visual: grafik fungsi tabungan sebagai cerminan dari fungsi konsumsi. Sumbu horizontal adalah `Disposable income`; sumbu vertikal adalah `Net saving`.

Data grafik:

| Titik | Disposable Income | Saving |
|---|---:|---:|
| A | 24,000 | -200 |
| B | 25,000 | 0 |
| C | 26,000 | 200 |
| D | 27,000 | 400 |
| E | 28,000 | 600 |
| F | 29,000 | 800 |
| G | 30,000 | 1,000 |

Makna visual: Fungsi tabungan memotong sumbu horizontal pada titik B, yaitu saat tabungan sama dengan nol. Di bawah titik B, saving negatif. Di atas titik B, saving positif. Semakin tinggi disposable income, semakin tinggi saving.

Instruksi chart: Buat line chart dengan satu garis `Saving function`. Pastikan area negatif pada saving tetap terlihat agar konsep dissaving tidak hilang.

Asset referensi: `assets/slide07_saving_function.jpg`.

## Slide 8. MPC and MPS

Definisi: MPC adalah slope dari fungsi konsumsi. MPC mengukur tambahan konsumsi akibat tambahan satu unit disposable income. MPS adalah slope dari fungsi tabungan. MPS mengukur bagian dari tambahan disposable income yang masuk ke tambahan tabungan.

Rumus hubungan:

```math
MPC + MPS = 1
```

Rumus operasional:

```math
MPC = \frac{\Delta C}{\Delta Y_d}
```

```math
MPS = \frac{\Delta S}{\Delta Y_d}
```

Makna simbol: `ΔC` adalah perubahan konsumsi. `ΔS` adalah perubahan tabungan. `ΔYd` adalah perubahan disposable income.

Interpretasi: Karena tambahan pendapatan hanya dapat digunakan untuk konsumsi atau tabungan, jumlah MPC dan MPS selalu sama dengan satu. Jika MPC = 0.8, maka MPS = 0.2.

## Slide 9. MPC and MPS: Tabel Marginal Propensities

Tabel ini menunjukkan bahwa setiap kenaikan disposable income sebesar 1,000 menaikkan konsumsi sebesar 800 dan saving sebesar 200.

| Kelompok | Disposable Income | Consumption | MPC | Net Saving | MPS |
|---|---:|---:|---:|---:|---:|
| A | 24,000 | 24,200 | - | -200 | - |
| B | 25,000 | 25,000 | 800 / 1,000 = 0.80 | 0 | 200 / 1,000 = 0.20 |
| C | 26,000 | 25,800 | 800 / 1,000 = 0.80 | 200 | 200 / 1,000 = 0.20 |
| D | 27,000 | 26,600 | 800 / 1,000 = 0.80 | 400 | 200 / 1,000 = 0.20 |
| E | 28,000 | 27,400 | 800 / 1,000 = 0.80 | 600 | 200 / 1,000 = 0.20 |
| F | 29,000 | 28,200 | 800 / 1,000 = 0.80 | 800 | 200 / 1,000 = 0.20 |
| G | 30,000 | 29,000 | 800 / 1,000 = 0.80 | 1,000 | 200 / 1,000 = 0.20 |

Makna tabel: Ketika disposable income naik dari 25,000 ke 26,000, consumption naik dari 25,000 ke 25,800. Perubahannya 800, sehingga MPC = 0.80. Pada saat yang sama, saving naik dari 0 ke 200, sehingga MPS = 0.20.

Asset referensi: `assets/slide09_mpc_mps_table.jpg`.

## Slide 10. MPC and MPS: Slope Consumption Function

Visual: grafik fungsi konsumsi yang menampilkan perubahan consumption sebesar 800 ketika disposable income naik sebesar 1,000. Hal ini menunjukkan bahwa slope fungsi konsumsi adalah MPC.

Rumus:

```math
MPC = \frac{\Delta C}{\Delta Y_d} = \frac{800}{1000} = 0.8
```

Makna visual: Garis konsumsi memiliki slope lebih kecil daripada garis 45 derajat karena tidak semua tambahan pendapatan dikonsumsi. Sebagian pendapatan tambahan masuk ke saving.

Instruksi chart: Gunakan data slide 6. Tambahkan anotasi vertikal `ΔC = 800` dan anotasi horizontal `ΔYd = 1,000` antara titik B dan C.

Asset referensi: `assets/slide10_mpc_slope.jpg`.

## Slide 11. MPC and MPS: Formula dan Diagram Tambahan

Slide ini memuat empat visual pendukung.

Pertama, diagram fungsi konsumsi:

```math
C = C_0 + cY_D
```

atau jika ada pajak:

```math
C = C_0 + c(Y - T)
```

Makna simbol: `c` pada gambar sama dengan `b` atau MPC. `Y_D` adalah disposable income. `T` adalah pajak.

Kedua, rumus MPC:

```math
MPC = \frac{\Delta C}{\Delta Y}
```

Contoh dalam gambar:

```math
MPC = \frac{C_2 - C_1}{Y_2 - Y_1} = \frac{600000 - 400000}{1000000 - 500000} = \frac{200000}{500000} = 0.4
```

Ketiga, rumus konsumsi dengan pajak:

```math
C = \text{Autonomous Consumption} + \text{Induced Consumption}
```

```math
C = C_0 + cY_D
```

```math
C = C_0 + c(Y - T)
```

Keempat, rumus MPS:

```math
MPS = \frac{\Delta S}{\Delta Y_d} = \frac{S_2 - S_1}{Y_2 - Y_1}
```

Makna visual: Slide ini memperjelas bahwa fungsi konsumsi dan tabungan dapat diturunkan dari disposable income. Ketika ada pajak, pendapatan yang relevan untuk konsumsi bukan `Y`, tetapi `Yd = Y - T`.

Asset referensi: `assets/slide11_consumption_curve_diagram.png`, `assets/slide11_mpc_formula.png`, `assets/slide11_consumption_formula.png`, `assets/slide11_mps_formula.png`.

## Slide 12. MPC and MPS: Hubungan Fungsi Konsumsi dan Fungsi Tabungan

Visual: diagram gabungan fungsi konsumsi dan fungsi tabungan. Garis `C = Y` menunjukkan kondisi pendapatan sama dengan konsumsi. Fungsi konsumsi ditulis sebagai `C = a + bY`. Fungsi tabungan ditulis sebagai `S = -a + (1-b)Y`.

Makna simbol: `a` sama dengan autonomous consumption atau `C0`. `b` adalah MPC. `(1-b)` adalah MPS. `YE` adalah tingkat pendapatan pada titik break-even.

Interpretasi: Titik E adalah titik ketika konsumsi sama dengan pendapatan. Pada titik ini saving sama dengan nol. Jika pendapatan di bawah `YE`, saving negatif. Jika pendapatan di atas `YE`, saving positif.

Asset referensi: `assets/slide12_consumption_saving_combined.png`.

## Slide 13. Investment

Konsep utama: Dalam makroekonomi, investment atau real investment berarti penambahan stok aset produktif atau barang modal. Contohnya adalah pembelian kapital baru seperti peralatan dan bangunan.

Contoh: Ketika Amazon membangun gudang baru atau keluarga membangun rumah baru, aktivitas tersebut termasuk investment dalam makroekonomi.

Interpretasi: Investasi makroekonomi berbeda dari pemakaian kata investasi sehari-hari. Fokusnya bukan sekadar pembelian aset keuangan, melainkan penciptaan atau penambahan kapital riil yang meningkatkan kapasitas produksi.

## Slide 14. Investment: Real Investment vs Financial Investment

Konsep utama: Banyak orang menyebut pembelian tanah, saham, atau pembukaan rekening tabungan sebagai investasi. Dalam ekonomi, transaksi tersebut lebih tepat disebut financial transaction atau financial investment.

Penjelasan: Jika seseorang membeli saham, orang lain menjual saham tersebut. Efek bersih terhadap stok kapital riil ekonomi bisa nol. Investment dalam makroekonomi baru terjadi ketika real capital diproduksi.

Interpretasi: Perbedaan ini penting karena model pendapatan nasional menghitung investasi sebagai penambahan kapasitas produksi, bukan hanya perpindahan kepemilikan aset.

## Slide 15. Istilah BPS: Investasi, PMTB, dan Perubahan Stok

Menurut istilah BPS dalam slide, investasi mencakup pembentukan modal tetap bruto dan perubahan stok.

Pembentukan Modal Tetap Bruto atau PMTB setara dengan Gross Fixed Capital Formation atau GFCF. PMTB adalah pengeluaran untuk barang modal yang memiliki umur pemakaian lebih dari satu tahun dan bukan barang konsumsi.

Cakupan PMTB meliputi bangunan tempat tinggal, bangunan bukan tempat tinggal, bangunan lain seperti jalan dan bandara, serta mesin dan peralatan.

Catatan: Pengeluaran barang modal untuk keperluan militer tidak dicakup dalam rincian PMTB, tetapi digolongkan sebagai konsumsi pemerintah.

Implementasi website: Buat box khusus `Istilah BPS` agar mahasiswa memahami istilah Indonesia dan padanan Inggrisnya.

## Slide 16. Perubahan Stok

Konsep utama: Stok terdiri atas barang yang akan dipakai, barang dalam proses pengerjaan, dan barang jadi yang belum dijual. Pemegang stok sebagian besar adalah perusahaan, termasuk perusahaan pemerintah dan pemerintah sendiri.

Contoh stok pemerintah: persediaan barang strategis seperti bahan pangan.

Rumus konseptual:

```math
\text{Perubahan stok} = \text{Stok akhir tahun} - \text{Stok awal tahun}
```

Interpretasi: Jika stok akhir lebih besar daripada stok awal, terjadi penambahan stok yang masuk ke komponen investasi. Jika stok akhir lebih kecil, terjadi pengurangan stok.

Catatan slide: Data perubahan stok barang strategis pemerintah belum tersedia.

## Slide 17. Important to Note: Capital

Konsep utama: Capital terdiri dari durable produced items yang digunakan sebagai input produktif untuk produksi lebih lanjut.

Kategori tangible capital:
1. Structures, seperti pabrik dan rumah.
2. Equipment, seperti mobil, machine tools, dan truk.
3. Inventories, seperti mobil di dealer.

Perkembangan baru: Intangible capital atau e-capital semakin penting. Contohnya adalah software, paten, dan brand names.

Interpretasi: Kapital modern tidak hanya berbentuk fisik. Aset tidak berwujud juga dapat meningkatkan produktivitas dan nilai produksi.

## Slide 18. Important to Note: Tangible, Intangible, and Financial Assets

Konsep utama: Tangible assets dan intangible assets harus dibedakan dari financial assets.

Financial assets adalah klaim moneter satu pihak terhadap pihak lain. Bentuknya bisa berupa dokumen kertas atau catatan elektronik.

Contoh: Mortgage adalah klaim terhadap pemilik rumah untuk membayar bunga dan pokok pinjaman setiap bulan. Pembayaran tersebut dipakai untuk melunasi pinjaman yang membantu pembelian rumah.

Interpretasi: Dalam contoh mortgage, rumah adalah tangible asset, sedangkan mortgage adalah financial asset. Tangible asset dapat menjadi collateral bagi financial asset.

## Slide 19. Important to Note: Fungsi Financial Assets

Konsep utama: Tangible assets penting karena meningkatkan produktivitas faktor produksi lain. Namun financial assets juga penting karena menjembatani mismatch antara saver dan investor.

Interpretasi: Saver adalah pihak yang memiliki kelebihan dana, sedangkan investor adalah pihak yang membutuhkan dana untuk membiayai investasi riil. Financial assets membantu mengalirkan dana dari saver ke investor.

Implementasi website: Buat ilustrasi alur `Saver -> Financial Market -> Investor -> Real Capital`.

## Slide 20. Important to Note: Rate of Return dan Interest Rate

Konsep utama: Rate of return on investment adalah return bersih tahunan per unit modal yang diinvestasikan.

Contoh: Perusahaan rental mobil KARTIKA membeli mobil bekas seharga 20,000 dolar. Setelah mengurangi semua biaya dan mengasumsikan harga mobil tidak berubah, perusahaan memperoleh net rental 2,400 dolar per tahun.

Rumus:

```math
\text{Rate of return} = \frac{2400}{20000} = 0.12 = 12\%
```

Interest rate adalah tingkat pengembalian aset keuangan yang diukur dalam persen per tahun.

Interpretasi: Rate of return mengukur profitabilitas investasi riil. Interest rate mengukur biaya atau imbal hasil finansial. Keputusan investasi sering membandingkan keduanya.

## Slide 21. Important to Note: Present Value of Assets

Konsep utama: Present value of assets adalah nilai hari ini dari aliran pendapatan masa depan.

Rumus umum present value:

```math
V = \frac{N_1}{1+i} + \frac{N_2}{(1+i)^2} + \cdots + \frac{N_t}{(1+i)^t}
```

Makna simbol: `V` adalah present value. `N1`, `N2`, sampai `Nt` adalah net receipts pada periode 1, 2, sampai t. `i` adalah interest rate. `t` adalah periode waktu.

Interpretasi: Semakin tinggi interest rate, semakin kecil present value dari pendapatan masa depan. Karena itu, kenaikan suku bunga cenderung menurunkan harga aset jangka panjang.

Asset referensi: `assets/slide21_present_value_formula.png`.

## Slide 22. Important to Note: Interest Rates, Asset Prices, Real and Nominal Interest Rates

Konsep utama pertama: Harga aset cenderung bergerak berlawanan arah dengan interest rate. Present value turun ketika interest rate naik.

Implikasi: Harga saham, obligasi, real estate, dan banyak aset jangka panjang akan turun ketika suku bunga meningkat.

Konsep utama kedua: Nominal interest rate adalah suku bunga uang dalam satuan uang. Real interest rate adalah nominal interest rate yang sudah dikoreksi oleh inflasi.

Rumus tambahan untuk penjelasan website:

```math
r \approx i - \pi
```

Makna simbol: `r` adalah real interest rate. `i` adalah nominal interest rate. `π` adalah inflation rate.

Catatan: Rumus `r ≈ i - π` adalah penjelasan tambahan standar untuk memperjelas konsep real interest rate. Slide hanya menyatakan definisi verbal.

---

# TM 10: Closed Economy, Equilibrium Output, Multiplier, and Fiscal Policy
## Slide 23. The Roles of Investment in Macroeconomics

Konsep utama: Investment memiliki dua peran dalam makroekonomi.

Pertama, investment memengaruhi output jangka pendek melalui dampaknya terhadap aggregate demand. Ketika investasi meningkat, pengeluaran agregat naik dan output dapat meningkat.

Kedua, investment memengaruhi pertumbuhan output jangka panjang melalui capital accumulation. Semakin besar akumulasi modal, semakin tinggi kapasitas produksi masa depan.

Interpretasi: Investasi bekerja melalui dua kanal. Kanal permintaan bekerja dalam jangka pendek. Kanal akumulasi kapital bekerja dalam jangka panjang.

## Slide 24. Determinants of Investment

Tiga determinan utama investment:

1. Revenue, yaitu overall level of output atau GDP.
2. Cost, yaitu harga barang modal, interest rate, dan pajak.
3. Expectation, yaitu ekspektasi profit dan business confidence.

Interpretasi: Investasi meningkat ketika output tinggi, biaya modal rendah, suku bunga rendah, pajak tidak terlalu memberatkan, dan ekspektasi bisnis positif. Sebaliknya, investasi menurun ketika biaya pembiayaan naik atau ekspektasi profit memburuk.

## Slide 25. Investment Demand Curve: Tabel Profitabilitas Investasi

Tabel ini menunjukkan bahwa profitabilitas investasi bergantung pada interest rate.

| Project | Total Investment ($ million) | Annual Revenue per $1,000 Invested | Cost per $1,000 at 10% | Cost per $1,000 at 5% | Annual Net Profit at 10% | Annual Net Profit at 5% |
|---|---:|---:|---:|---:|---:|---:|
| A | 1 | 1,500 | 100 | 50 | 1,400 | 1,450 |
| B | 4 | 220 | 100 | 50 | 120 | 170 |
| C | 10 | 160 | 100 | 50 | 60 | 110 |
| D | 10 | 130 | 100 | 50 | 30 | 80 |
| E | 5 | 110 | 100 | 50 | 10 | 60 |
| F | 15 | 90 | 100 | 50 | -10 | 40 |
| G | 10 | 60 | 100 | 50 | -40 | 10 |
| H | 20 | 40 | 100 | 50 | -60 | -10 |

Makna tabel: Pada interest rate 10 persen, proyek A sampai E masih menghasilkan net profit positif. Pada interest rate 5 persen, proyek A sampai G menghasilkan net profit positif. Penurunan interest rate membuat lebih banyak proyek layak secara finansial.

Asset referensi: `assets/slide25_investment_profitability_table.jpg`.

## Slide 26. Investment Demand Curve: Investment Depends upon Interest Rate

Visual: kurva demand-for-investment schedule berbentuk tangga. Sumbu vertikal menunjukkan return on investment atau interest rate. Sumbu horizontal menunjukkan investment spending.

Data konseptual yang dapat dipakai dari slide 25:

| Interest Rate | Proyek Layak | Cumulative Investment |
|---:|---|---:|
| 20% | A dan B | 5 |
| 15% | A, B, dan C | 15 |
| 10% | A sampai E | 30 |
| 5% | A sampai G | 55 |

Makna visual: Ketika interest rate turun, lebih banyak proyek menjadi menguntungkan. Karena itu investment spending naik. Hubungan antara interest rate dan investment demand bersifat negatif.

Instruksi chart: Buat step chart. Titik penting: pada 10 persen investment sekitar 30 juta dolar; pada 5 persen investment sekitar 55 juta dolar.

Asset referensi: `assets/slide26_investment_demand_schedule.jpg`.

## Slide 27. Investment Demand Curve: Shifts in Investment Demand Function

Visual: tiga panel pergeseran investment demand function.

Panel a, Higher Output: kenaikan output mendorong investment demand bergeser ke kanan. Penyebabnya adalah prospek revenue yang lebih tinggi.

Panel b, Higher Taxes: pajak yang lebih tinggi mengurangi profitabilitas investasi sehingga investment demand bergeser ke kiri.

Panel c, Business Euphoria: optimisme bisnis meningkatkan ekspektasi profit sehingga investment demand bergeser ke kanan.

Makna visual: Perubahan interest rate menyebabkan pergerakan sepanjang kurva investasi. Perubahan output, pajak, dan ekspektasi menyebabkan pergeseran kurva investasi.

Asset referensi: `assets/slide27_investment_demand_shift.jpg`.

## Slide 28. Equilibrium Output in the Two-Sectors Economy: Y = C + I Approach

Model dua sektor terdiri dari rumah tangga dan perusahaan. Dalam model ini belum ada pemerintah dan luar negeri.

Persamaan dasar:

```math
Y = C + I
```

Dengan fungsi konsumsi:

```math
C = C_0 + bY
```

Substitusi:

```math
Y = C_0 + bY + I
```

Penyelesaian:

```math
Y - bY = C_0 + I
```

```math
(1-b)Y = C_0 + I
```

```math
Y = \frac{1}{1-b}(C_0 + I)
```

Makna simbol: `Y` adalah equilibrium output. `C0` adalah konsumsi otonom. `b` adalah MPC. `I` adalah planned investment.

Interpretasi: Output keseimbangan naik ketika konsumsi otonom atau investasi naik. Besarnya kenaikan diperkuat oleh multiplier `1/(1-b)`.

Asset referensi grafik: `assets/slide28_equilibrium_y_ci_graph_lightmode.jpg`.

## Slide 29. Equilibrium Output in the Two-Sector Economy: S = I Approach

Pendekatan kedua menentukan keseimbangan melalui kesamaan saving dan investment.

Persamaan dasar:

```math
I = S
```

Dengan fungsi tabungan:

```math
S = -C_0 + (1-b)Y
```

Substitusi:

```math
I = -C_0 + (1-b)Y
```

Penyelesaian:

```math
Y = \frac{1}{1-b}(C_0 + I)
```

Interpretasi: Pendekatan `Y = C + I` dan `S = I` menghasilkan equilibrium output yang sama. Perbedaannya hanya sudut pandang. Pendekatan pertama melihat pengeluaran agregat. Pendekatan kedua melihat kebocoran dan injeksi dalam perekonomian.

Asset referensi grafik: `assets/slide29_equilibrium_si_graph_lightmode.jpg`.

## Slide 30. Equilibrium Output in the Two-Sector Economy: Tabel GDP Determination

Tabel ini menunjukkan output equilibrium ketika total planned spending sama dengan GDP.

| GDP and DI | Planned Consumption | Planned Saving | Planned Investment | Total Planned Expenditure C + I | Tendency of Output |
|---:|---:|---:|---:|---:|---|
| 4,200 | 3,800 | 400 | 200 | 4,000 | Contraction |
| 3,900 | 3,600 | 300 | 200 | 3,800 | Contraction |
| 3,600 | 3,400 | 200 | 200 | 3,600 | Equilibrium |
| 3,300 | 3,200 | 100 | 200 | 3,400 | Expansion |
| 3,000 | 3,000 | 0 | 200 | 3,200 | Expansion |
| 2,700 | 2,800 | -100 | 200 | 3,000 | Expansion |

Makna tabel: Jika GDP lebih tinggi daripada planned expenditure, output cenderung berkontraksi. Jika planned expenditure lebih tinggi daripada GDP, output cenderung berekspansi. Equilibrium terjadi saat GDP sama dengan total planned expenditure, yaitu pada 3,600.

Asset referensi: `assets/slide30_gdp_determination_table.jpg`.

## Slide 31. The Multiplier Model

Konsep utama: Multiplier model menjelaskan bahwa setiap perubahan satu unit pada exogenous expenditure dapat menghasilkan perubahan GDP yang lebih besar daripada perubahan awal.

Asumsi utama:
1. Wages and prices are fixed.
2. There are unemployed resources.

Interpretasi: Multiplier bekerja kuat dalam kondisi harga dan upah kaku serta masih ada sumber daya menganggur. Jika ekonomi sudah full employment, tambahan pengeluaran dapat lebih banyak mendorong harga daripada output.

## Slide 32. Investment Multiplier: Pertanyaan Contoh

Soal: Jika MPC adalah 2/3, berapa perubahan GDP ketika investment dalam ekonomi meningkat sebesar 1,000 miliar rupiah?

Diketahui:

```math
MPC = \frac{2}{3}
```

```math
\Delta I = 1000
```

Yang ditanya:

```math
\Delta Y
```

Interpretasi awal: Karena MPC positif, kenaikan investasi akan menaikkan pendapatan. Kenaikan pendapatan akan memicu konsumsi lanjutan. Proses inilah yang menghasilkan multiplier.

## Slide 33. Investment Multiplier: Arithmetic Approach

Tabel aritmetik multiplier:

| Putaran | Tambahan GDP | Rumus |
|---:|---:|---|
| 1 | 1,000.00 | `1 × 1000` |
| 2 | 666.67 | `(2/3) × 1000` |
| 3 | 444.44 | `(2/3)^2 × 1000` |
| 4 | 296.30 | `(2/3)^3 × 1000` |
| 5 | 197.53 | `(2/3)^4 × 1000` |
| ... | ... | ... |
| Total | 3,000.00 | `1/(1 - 2/3) × 1000` |

Makna tabel: Dampak awal investasi sebesar 1,000 menciptakan pendapatan baru sebesar 1,000. Karena MPC = 2/3, dua pertiga dari pendapatan tersebut dibelanjakan lagi, menghasilkan pendapatan tambahan 666.67. Proses berulang dengan nilai yang makin kecil sampai totalnya mendekati 3,000.

Asset referensi: `assets/slide33_multiplier_arithmetic_table_lightmode.jpg`.

## Slide 34. Investment Multiplier: Formula

Rumus perubahan GDP:

```math
\Delta Y = \left(1 + \frac{2}{3} + \left(\frac{2}{3}\right)^2 + \left(\frac{2}{3}\right)^3 + \cdots \right) \times 1000
```

Karena deret geometri tersebut sama dengan:

```math
\frac{1}{1 - \frac{2}{3}} = 3
```

Maka:

```math
\Delta Y = 3 \times 1000 = 3000
```

Rumus multiplier sederhana:

```math
\Delta GDP = \frac{1}{1-MPC} \times \Delta I
```

Karena:

```math
MPS = 1 - MPC
```

Maka:

```math
\Delta GDP = \frac{1}{MPS} \times \Delta I
```

Interpretasi: Semakin besar MPC, semakin besar multiplier. Semakin besar MPS, semakin kecil multiplier.

## Slide 35. Investment Multiplier Coefficient

Pendekatan pertama: dari persamaan pengeluaran.

```math
Y = C + I
```

```math
Y = C_0 + bY + I
```

```math
Y = \frac{1}{1-b}(C_0 + I)
```

Jika investment berubah:

```math
Y + \Delta Y = \frac{1}{1-b}(C_0 + I + \Delta I)
```

Maka:

```math
\Delta Y = \frac{1}{1-b}\Delta I
```

Pendekatan kedua: dari persamaan saving-investment.

```math
I = S
```

```math
I = -C_0 + (1-b)Y
```

Jika investment berubah:

```math
I + \Delta I = -C_0 + (1-b)(Y + \Delta Y)
```

```math
I + \Delta I = -C_0 + (1-b)Y + (1-b)\Delta Y
```

Maka:

```math
\Delta Y = \frac{1}{1-b}\Delta I
```

Interpretasi: Koefisien multiplier investasi adalah `1/(1-b)`. Jika MPC naik, penyebut mengecil dan multiplier membesar.

## Slide 36. Fiscal Policy in the Multiplier Model

Peran fiscal policy dalam ekonomi:
1. Allocative, yaitu mengalokasikan sumber daya.
2. Distributive, yaitu memengaruhi distribusi pendapatan.
3. Stabilizer, yaitu menstabilkan fluktuasi ekonomi.

Instrumen fiscal policy:
1. Government spending.
2. Taxation.

Interpretasi: Dalam multiplier model, belanja pemerintah berperan sebagai injeksi pengeluaran agregat, sedangkan pajak memengaruhi disposable income dan konsumsi.

## Slide 37. Important to Note: Principles of Taxation

Prinsip benefit: Pajak dikenakan kepada orang sesuai marginal benefits yang diterima dari barang atau jasa yang disediakan pemerintah.

Prinsip ability-to-pay: Pajak yang paling adil adalah pajak yang didasarkan pada kemampuan finansial seseorang untuk mendukung aktivitas pemerintah.

Vertical equity: Orang yang lebih mampu membayar pajak lebih tinggi seharusnya membayar lebih tinggi.

Horizontal equity: Individu yang setara dalam aspek penting harus diperlakukan secara setara.

Catatan sumber internal slide: SAM, Chapter 16, halaman 312-320.

Interpretasi: Prinsip perpajakan bukan hanya teknis fiskal, tetapi juga menyangkut keadilan distribusi beban pajak.

## Slide 38. Important to Note: Classification of Tax

Pragmatic compromise in taxation:
1. Progressive tax: pendapatan yang lebih tinggi dikenai pajak secara proporsional lebih besar.
2. Regressive tax: persentase pendapatan yang dibayar sebagai pajak turun ketika pendapatan naik.
3. Proportional tax: persentase pendapatan yang dibayar sebagai pajak tetap.

Klasifikasi pajak:
1. Indirect taxes.
2. Direct taxes.

Interpretasi: Pajak progresif berkaitan dengan ability-to-pay principle. Pajak proporsional lebih sederhana secara administrasi. Pajak regresif sering dikritik karena beban relatifnya lebih berat bagi kelompok berpendapatan rendah.

## Slide 39. Equilibrium Output in the Three-Sectors Economy: Grafik C + I + G

Visual: grafik menunjukkan bahwa government purchases menambah pengeluaran agregat seperti investment. Garis konsumsi `C` bergeser ke atas menjadi `C + I`, lalu bergeser lagi menjadi `C + I + G = TE`.

Makna visual: Equilibrium output ditentukan pada perpotongan antara garis 45 derajat dan total expenditure. Penambahan `G` menggeser total expenditure ke atas dan menaikkan equilibrium GDP.

Instruksi chart: Tampilkan tiga garis: `C`, `C + I`, dan `C + I + G = TE`. Tampilkan garis 45 derajat. Tandai titik equilibrium `E`. Sumbu horizontal: `Gross Domestic Product / GDP`. Sumbu vertikal: `Total Expenditure`.

Asset referensi: `assets/slide39_government_purchases_graph.jpg`.

## Slide 40. Equilibrium Output in the Three-Sectors Economy: Tabel Government Spending

Tabel output determination dengan government spending:

| Initial GDP | Taxes T | Disposable Income DI | Planned Consumption C | Planned Investment I | Government Expenditure G | Total Planned Expenditure C+I+G | Tendency |
|---:|---:|---:|---:|---:|---:|---:|---|
| 4,200 | 300 | 3,900 | 3,600 | 200 | 200 | 4,000 | Contraction |
| 3,900 | 300 | 3,600 | 3,400 | 200 | 200 | 3,800 | Contraction |
| 3,600 | 300 | 3,300 | 3,200 | 200 | 200 | 3,600 | Equilibrium |
| 3,300 | 300 | 3,000 | 3,000 | 200 | 200 | 3,400 | Expansion |
| 3,000 | 300 | 2,700 | 2,800 | 200 | 200 | 3,200 | Expansion |

Makna tabel: Pajak menurunkan disposable income, sementara government spending menambah total planned expenditure. Equilibrium tetap terjadi ketika GDP sama dengan total planned expenditure.

Asset referensi: `assets/slide40_government_spending_table.jpg`.

## Slide 41. Equilibrium Output: Tax Independent to Income

Asumsi: pajak tidak bergantung pada pendapatan.

```math
T = T_0
```

Identitas tiga sektor:

```math
Y = C + I + G
```

Fungsi konsumsi:

```math
C = C_0 + bY_d
```

Disposable income:

```math
Y_d = Y - T
```

Karena `T = T0`, maka:

```math
Y_d = Y - T_0
```

Substitusi:

```math
Y = C_0 + b(Y - T_0) + I + G
```

```math
Y = C_0 + bY - bT_0 + I + G
```

Penyelesaian:

```math
Y = \frac{1}{1-b}(C_0 - bT_0 + I + G)
```

Pendekatan saving-tax:

```math
I + G = S + T
```

```math
I + G = -C_0 + (1-b)Y_d + T_0
```

```math
I + G = -C_0 + (1-b)(Y - T_0) + T_0
```

```math
I + G = -C_0 + (1-b)Y + bT_0
```

Hasil akhirnya sama:

```math
Y = \frac{1}{1-b}(C_0 - bT_0 + I + G)
```

Interpretasi: Pajak tetap menurunkan konsumsi melalui disposable income. Namun karena pajak tidak berubah ketika pendapatan berubah, multiplier belanja pemerintah tetap `1/(1-b)`.

Asset formula: `assets/slide41_lump_sum_tax_formula_lightmode.png`.

## Slide 42. Fiscal Policy Multiplier: Tax Independent to Income

Asumsi:

```math
T = T_0
```

Government expenditure multiplier:

```math
Y = \frac{1}{1-b}(C_0 - bT_0 + I + G)
```

Jika belanja pemerintah berubah:

```math
Y + \Delta Y = \frac{1}{1-b}(C_0 - bT_0 + I + G + \Delta G)
```

Maka:

```math
\Delta Y = \frac{1}{1-b}\Delta G
```

Koefisien government expenditure multiplier:

```math
\frac{1}{1-b}
```

Tax multiplier:

```math
Y + \Delta Y = \frac{1}{1-b}(C_0 - bT_0 - b\Delta T_0 + I + G)
```

Maka:

```math
\Delta Y = -\frac{b}{1-b}\Delta T_0
```

Koefisien tax multiplier:

```math
-\frac{b}{1-b}
```

Interpretasi: Belanja pemerintah berdampak langsung pada pengeluaran agregat, sehingga multiplier-nya positif. Pajak berdampak melalui disposable income dan konsumsi, sehingga multiplier pajak bernilai negatif.

## Slide 43. Example: Lump-Sum Tax

Diketahui:

```math
C = 300 + 0.75Y_d
```

```math
I = 400
```

```math
G = T = 200
```

Karena `T = 200`, maka `T0 = 200`. Nilai `b = 0.75`, sehingga `1-b = 0.25`.

Equilibrium GDP:

```math
Y = \frac{1}{0.25}(300 - 0.75(200) + 400 + 200)
```

```math
Y = 4(300 - 150 + 400 + 200)
```

```math
Y = 4(750) = 3000
```

Government expenditure multiplier:

```math
\frac{1}{1-b} = \frac{1}{0.25} = 4
```

Jika `G` naik 50:

```math
\Delta Y = 4 \times 50 = 200
```

Tax multiplier:

```math
-\frac{b}{1-b} = -\frac{0.75}{0.25} = -3
```

Jika pajak naik 50:

```math
\Delta Y = -3 \times 50 = -150
```

Interpretasi: Belanja pemerintah 50 menaikkan GDP 200. Pajak 50 menurunkan GDP 150. Dampak pajak lebih kecil secara absolut daripada dampak belanja pemerintah karena pajak memengaruhi output melalui konsumsi, bukan langsung melalui total expenditure.

Asset formula tambahan: `assets/slide43_multiplier_g_formula_lightmode.png`.

## Slide 44. Visual Example: Tax Rate Case

Slide ini berupa gambar contoh hitung dengan fungsi pajak proporsional. Jangan biarkan tetap sebagai gambar saja. Ketik ulang menjadi langkah berikut.

Diketahui:

```math
Y = C + I + G
```

```math
C = 300 + 0.75(Y - T)
```

```math
T = 200 + 0.15Y
```

Substitusi pajak ke fungsi konsumsi:

```math
C = 300 + 0.75(Y - 200 - 0.15Y)
```

Multiplier government spending ketika pajak bergantung pada pendapatan:

```math
\frac{1}{1 - MPC(1-t)}
```

Dengan `MPC = 0.75` dan `t = 0.15`:

```math
1 - MPC(1-t) = 1 - 0.75(1 - 0.15)
```

```math
= 1 - 0.75(0.85)
```

```math
= 1 - 0.6375 = 0.3625
```

```math
\text{Multiplier} = \frac{1}{0.3625} = 2.7586
```

Asset referensi: `assets/slide44_tax_rate_example_image.png`.

## Slide 45. Equilibrium Output: Tax Dependent to Income

Asumsi:

```math
T = T_0 + tY
```

Identitas tiga sektor:

```math
Y = C + I + G
```

Fungsi konsumsi:

```math
C = C_0 + bY_d
```

Disposable income:

```math
Y_d = Y - T_0 - tY
```

Substitusi:

```math
Y = C_0 + b(Y - T_0 - tY) + I + G
```

```math
Y = C_0 + bY - bT_0 - btY + I + G
```

Penyelesaian:

```math
Y = \frac{1}{1-b+bt}(C_0 - bT_0 + I + G)
```

Pendekatan saving-tax:

```math
I + G = S + T
```

```math
I + G = -C_0 + (1-b)Y_d + (T_0 + tY)
```

```math
I + G = -C_0 + (1-b)(Y - T_0 - tY) + (T_0 + tY)
```

```math
I + G = -C_0 + (1-b)Y + bT_0 + btY
```

Hasil akhir:

```math
Y = \frac{1}{1-b+bt}(C_0 - bT_0 + I + G)
```

Interpretasi: Ketika pajak meningkat bersama pendapatan, multiplier menjadi lebih kecil karena sebagian tambahan pendapatan otomatis ditarik sebagai pajak. Pajak proporsional bertindak sebagai automatic stabilizer.

## Slide 46. Fiscal Policy Multiplier: Tax Dependent to Income

Asumsi:

```math
T = T_0 + tY
```

Government expenditure multiplier:

```math
\frac{\Delta Y}{\Delta G} = \frac{1}{1-b+bt}
```

Tax multiplier untuk pajak tetap `T0`:

```math
\frac{\Delta Y}{\Delta T_0} = -\frac{b}{1-b+bt}
```

Dampak perubahan tax rate terhadap GDP:

```math
\frac{\Delta Y}{\Delta t} = -\frac{b}{1-b+bt}Y
```

Interpretasi: Kenaikan `t` menurunkan multiplier karena tambahan pendapatan lebih banyak masuk sebagai pajak. Dampaknya negatif terhadap GDP karena disposable income dan konsumsi turun.

## Slide 47. Example: Income-Dependent Tax

Diketahui:

```math
C = 300 + 0.75Y_d
```

```math
I = 400
```

```math
G = 200
```

```math
T = 200 + 0.15Y
```

Parameter:

```math
C_0 = 300, \quad b = 0.75, \quad T_0 = 200, \quad t = 0.15
```

Penyebut multiplier:

```math
1-b+bt = 1 - 0.75 + (0.75)(0.15)
```

```math
= 0.25 + 0.1125 = 0.3625
```

Equilibrium GDP:

```math
Y = \frac{1}{0.3625}(300 - 0.75(200) + 400 + 200)
```

```math
Y = 2.7586(300 - 150 + 400 + 200)
```

```math
Y = 2.7586(750) = 2068.96
```

Government expenditure multiplier:

```math
\frac{1}{0.3625} = 2.7586
```

Jika `G` naik 50:

```math
\Delta Y = 2.7586 \times 50 = 137.93
```

Tax multiplier:

```math
-\frac{0.75}{0.3625} = -2.069
```

Jika pajak tetap naik 50:

```math
\Delta Y = -2.069 \times 50 = -103.45
```

Interpretasi: Multiplier pada pajak proporsional lebih kecil daripada multiplier pada pajak tetap. Pada contoh sebelumnya government expenditure multiplier = 4. Setelah ada tax rate 0.15, multiplier turun menjadi 2.7586.

## Slide 48. National Income Identity in the Closed Economy

Identitas pendapatan nasional dalam ekonomi tertutup:

```math
Y = C + I + G
```

Kurangi `C` dan `G` dari kedua sisi:

```math
Y - C - G = I
```

Manipulasi dengan memasukkan pajak `T`:

```math
(Y - T - C) + (T - G) = I
```

Makna simbol:
`Y - T - C` adalah private saving. `T - G` adalah public saving. Jumlah keduanya adalah national saving.

Rumus:

```math
S_{national} = S_{private} + S_{public}
```

```math
S_{national} = (Y - T - C) + (T - G)
```

```math
S_{national} = I
```

Interpretasi: Dalam ekonomi tertutup, national saving sama dengan investment.

## Slide 49. Important to Note: Saving Equals Investment

Fakta utama: Untuk ekonomi secara keseluruhan, saving harus sama dengan investment.

Implikasi pertama: Semakin besar konsumsi, semakin kecil private saving. Akibatnya national saving lebih rendah.

Implikasi kedua: Jika pemerintah membelanjakan lebih banyak daripada penerimaan pajaknya, terjadi budget deficit. Defisit anggaran menurunkan public saving dan akhirnya menurunkan national saving.

Interpretasi: Identitas ini menjelaskan hubungan antara perilaku konsumsi rumah tangga, kebijakan fiskal pemerintah, tabungan nasional, dan kapasitas pembiayaan investasi.

## Slide 50. Example: Closed Economy Identity, Part 1

Soal: GDP adalah Rp 8.00 triliun, taxes Rp 1.50 triliun, private saving Rp 0.50 triliun, dan public saving Rp 0.20 triliun. Hitung consumption, government purchases, national saving, dan investment.

Diketahui:

```math
Y = 8.00
```

```math
T = 1.50
```

```math
S_{private} = 0.50
```

```math
S_{public} = 0.20
```

Menghitung consumption:

```math
S_{private} = Y - T - C
```

```math
0.50 = 8.00 - 1.50 - C
```

```math
C = 6.00
```

Jadi consumption adalah Rp 6.00 triliun.

## Slide 51. Example: Closed Economy Identity, Part 2

Menghitung government purchases:

```math
S_{public} = T - G
```

```math
0.20 = 1.50 - G
```

```math
G = 1.30
```

Jadi government purchases adalah Rp 1.30 triliun.

Menghitung national saving:

```math
S_{national} = S_{private} + S_{public}
```

```math
S_{national} = 0.50 + 0.20 = 0.70
```

Karena dalam ekonomi tertutup national saving sama dengan investment:

```math
I = S_{national} = 0.70
```

Jadi investment adalah Rp 0.70 triliun.

Alternatif memakai identitas nasional:

```math
Y = C + I + G
```

```math
I = Y - C - G
```

```math
I = 8.00 - 6.00 - 1.30 = 0.70
```

Interpretasi: Kedua pendekatan menghasilkan investment yang sama karena keduanya berasal dari identitas ekonomi tertutup.

## Slide 52. Closing

Teks penutup: Thank you for your attention.

Implementasi website: Jadikan slide ini sebagai penutup TM 10. Tambahkan ringkasan singkat: ekonomi tertutup menunjukkan hubungan antara konsumsi, tabungan, investasi, belanja pemerintah, pajak, dan output nasional. Model multiplier memperlihatkan bahwa perubahan pengeluaran otonom dapat berdampak lebih besar terhadap GDP, terutama ketika MPC tinggi dan masih ada sumber daya menganggur.

---

# Data Siap Pakai untuk Chart dan Tabel

## Dataset Konsumsi-Tabungan

```json
[
  {"point":"A","disposableIncome":24000,"consumption":24200,"saving":-200},
  {"point":"B","disposableIncome":25000,"consumption":25000,"saving":0},
  {"point":"C","disposableIncome":26000,"consumption":25800,"saving":200},
  {"point":"D","disposableIncome":27000,"consumption":26600,"saving":400},
  {"point":"E","disposableIncome":28000,"consumption":27400,"saving":600},
  {"point":"F","disposableIncome":29000,"consumption":28200,"saving":800},
  {"point":"G","disposableIncome":30000,"consumption":29000,"saving":1000}
]
```

## Dataset Investment Profitability

```json
[
  {"project":"A","investment":1,"annualRevenue":1500,"cost10":100,"cost5":50,"profit10":1400,"profit5":1450},
  {"project":"B","investment":4,"annualRevenue":220,"cost10":100,"cost5":50,"profit10":120,"profit5":170},
  {"project":"C","investment":10,"annualRevenue":160,"cost10":100,"cost5":50,"profit10":60,"profit5":110},
  {"project":"D","investment":10,"annualRevenue":130,"cost10":100,"cost5":50,"profit10":30,"profit5":80},
  {"project":"E","investment":5,"annualRevenue":110,"cost10":100,"cost5":50,"profit10":10,"profit5":60},
  {"project":"F","investment":15,"annualRevenue":90,"cost10":100,"cost5":50,"profit10":-10,"profit5":40},
  {"project":"G","investment":10,"annualRevenue":60,"cost10":100,"cost5":50,"profit10":-40,"profit5":10},
  {"project":"H","investment":20,"annualRevenue":40,"cost10":100,"cost5":50,"profit10":-60,"profit5":-10}
]
```

## Dataset Investment Demand Schedule

```json
[
  {"interestRate":20,"cumulativeInvestment":5,"interpretation":"Projects A-B are profitable"},
  {"interestRate":15,"cumulativeInvestment":15,"interpretation":"Projects A-C are profitable"},
  {"interestRate":10,"cumulativeInvestment":30,"interpretation":"Projects A-E are profitable"},
  {"interestRate":5,"cumulativeInvestment":55,"interpretation":"Projects A-G are profitable"}
]
```

## Dataset GDP Determination Two-Sector

```json
[
  {"gdp":4200,"consumption":3800,"saving":400,"investment":200,"plannedExpenditure":4000,"tendency":"Contraction"},
  {"gdp":3900,"consumption":3600,"saving":300,"investment":200,"plannedExpenditure":3800,"tendency":"Contraction"},
  {"gdp":3600,"consumption":3400,"saving":200,"investment":200,"plannedExpenditure":3600,"tendency":"Equilibrium"},
  {"gdp":3300,"consumption":3200,"saving":100,"investment":200,"plannedExpenditure":3400,"tendency":"Expansion"},
  {"gdp":3000,"consumption":3000,"saving":0,"investment":200,"plannedExpenditure":3200,"tendency":"Expansion"},
  {"gdp":2700,"consumption":2800,"saving":-100,"investment":200,"plannedExpenditure":3000,"tendency":"Expansion"}
]
```

## Dataset GDP Determination Three-Sector

```json
[
  {"gdp":4200,"tax":300,"disposableIncome":3900,"consumption":3600,"investment":200,"governmentSpending":200,"plannedExpenditure":4000,"tendency":"Contraction"},
  {"gdp":3900,"tax":300,"disposableIncome":3600,"consumption":3400,"investment":200,"governmentSpending":200,"plannedExpenditure":3800,"tendency":"Contraction"},
  {"gdp":3600,"tax":300,"disposableIncome":3300,"consumption":3200,"investment":200,"governmentSpending":200,"plannedExpenditure":3600,"tendency":"Equilibrium"},
  {"gdp":3300,"tax":300,"disposableIncome":3000,"consumption":3000,"investment":200,"governmentSpending":200,"plannedExpenditure":3400,"tendency":"Expansion"},
  {"gdp":3000,"tax":300,"disposableIncome":2700,"consumption":2800,"investment":200,"governmentSpending":200,"plannedExpenditure":3200,"tendency":"Expansion"}
]
```

---

# Checklist Final untuk Antigravity

Sebelum menyatakan pekerjaan selesai, lakukan pengecekan berikut:

1. TM 9 berisi slide 1-22, tidak kurang dan tidak lebih.
2. TM 10 berisi slide 23-52, tidak kurang dan tidak lebih.
3. Total slide yang terwakili adalah 52.
4. Semua rumus dirender dengan MathJax/KaTeX.
5. Semua simbol dijelaskan minimal sekali pada modul yang relevan.
6. Tabel slide 5, 9, 25, 30, 33, dan 40 diketik ulang, bukan hanya ditempel sebagai gambar.
7. Grafik slide 6, 7, 10, 11, 12, 26, 27, 28, 29, dan 39 memiliki interpretasi.
8. Formula visual slide 21, 41, 43, dan 44 tidak ditinggalkan sebagai gambar gelap tanpa penjelasan.
9. Warna teks dan grafik terbaca pada light mode dan dark mode.
10. Tidak ada elemen grafis dengan teks putih transparan di atas background putih.
11. Setiap grafik memiliki `alt text`, judul, label sumbu, dan paragraf makna visual.
12. Tidak ada halaman tambahan fiktif di luar slide 1-52.
