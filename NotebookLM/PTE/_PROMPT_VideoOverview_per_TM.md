# Prompt Customize NotebookLM — Video Overview per TM (PTE)

Saat klik **Studio → Video Overview → Customize**, paste prompt yang sesuai TM-nya.

## Pola umum PTE (PENTING)

> Bahasa Indonesia, durasi 8–12 menit, gaya dosen S1 Akuntansi UNAIR menjelaskan
> mahasiswa sebelum UTS/UAS. **Hanya gunakan isi source yang aku upload**, jangan
> menambah materi dari luar. Susun dengan urutan: (1) definisi & framework,
> (2) **rumus penting dengan notasi persis** seperti di source, (3) **bahas
> setiap grafik SVG dengan deskripsi dari elemen `<title>` dan `<desc>`-nya**,
> (4) contoh hitungan numerik, (5) jebakan ujian. Tabel komparasi jadikan
> slide visual. Jangan skip grafik atau rumus.

---

---

## 🎬 PROMPT UNTUK VIDEO KOMPREHENSIF (1 video per fase)

> Pakai prompt ini kalau ingin **1 video untuk seluruh Pra-UTS (TM 1-7)** atau **1 video untuk seluruh Pra-UAS (TM 8-14)**.  
> Upload **hanya** `00_Pra_UTS_TM1-7_Gabungan.md` atau `00_Pra_UAS_TM8-14_Gabungan.md` sebagai source.

### Video Komprehensif Pra-UTS (TM 1–7)

```
Bahasa Indonesia, durasi **20–28 menit**, gaya dosen Pra-UTS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UTS_TM1-7_Gabungan.md`). 

⚠️ **WAJIB:** Bahas **setiap grafik SVG** di source dengan deskripsi dari elemen `<title>` dan `<desc>`-nya. Sebut **rumus dengan notasi persis** (μ, σ, Δ, dll) — jangan ganti simbol Yunani jadi huruf Latin.

**Struktur video (7 segmen TM mikro):**
1. **TM 1 — Kelangkaan, Pilihan & PPF** (opportunity cost, 10 prinsip Mankiw, bahas **SVG PPF** dengan titik A/C/D)
2. **TM 2 — Sistem Ekonomi & Peran Pemerintah** (3 pertanyaan fundamental, sistem pasar/komando/campuran, invisible hand Smith, 4 kegagalan pasar)
3. **TM 3 — Permintaan & Penawaran** (hukum demand/supply, **SVG kurva S-D** dengan titik E, movement along vs shift of)
4. **TM 4 — Perilaku Konsumen** (utility total/marginal, diminishing marginal utility, budget constraint, kondisi MUx/Px = MUy/Py)
5. **TM 5 — Elastisitas** (PED/YED/XED/PES klasifikasi, rumus elastisitas titik & busur, incidence pajak)
6. **TM 6 — Kebijakan Pemerintah** (price ceiling → shortage, price floor → surplus, pajak/subsidi, deadweight loss)
7. **TM 7 — Produsen, Konsumen & Efisiensi Pasar** (fungsi produksi, biaya FC/VC/TC/AC/MC, 4 struktur pasar, efisiensi alokatif vs produktif)

**Tone:** Setiap rumus disebut dengan **notasi matematika persis**. Setiap grafik dideskripsikan visualnya.
```

### Video Komprehensif Pra-UAS (TM 8–14)

```
Bahasa Indonesia, durasi **25–35 menit**, gaya dosen Pra-UAS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UAS_TM8-14_Gabungan.md`). 

⚠️ **WAJIB:** Bahas **setiap grafik SVG** di source (ada 14+ grafik) dengan deskripsi `<title>` & `<desc>`. Sebut **34+ rumus** dengan notasi persis (Σ, μ, σ, β, dll).

**Struktur video (7 segmen TM makro):**
1. **TM 8 — Pendapatan Nasional** (GDP/GNP/NDP/NI/PI/DI dengan rumus hubungannya, 3 pendekatan, GDP nominal vs riil, deflator vs CPI, identitas Y=C+I+G+NX, **3 SVG**)
2. **TM 9 — Perekonomian Tertutup 1** (Y=C+I+G, fungsi konsumsi C=a+bYd dengan MPC, fungsi tabungan, pasar dana pinjaman, crowding out, **SVG pasar dana pinjaman**)
3. **TM 10 — Perekonomian Tertutup 2** (AE=C+I+G, Keynesian cross 45°, spending multiplier k=1/(1-MPC), tax multiplier, balanced budget multiplier, kebijakan fiskal, **3 SVG**)
4. **TM 11 — Uang & Sistem Keuangan** (3 fungsi uang, M1/M2/M3, MS-MD, persamaan kuantitas MV=PY, money multiplier 1/RR, **2 SVG**, **6 rumus**)
5. **TM 12 — Perekonomian Terbuka** (NX, balance of payments, exchange rate fixed vs floating, kebijakan fiskal/moneter terbuka, **2 SVG**, **5 rumus**)
6. **TM 13 — Inflasi & Pengangguran** (demand-pull vs cost-push, frictional/structural/cyclical, **SVG Phillips short-run & long-run**, Okun's law, stagflasi, **3 SVG**)
7. **TM 14 — Pertumbuhan Ekonomi** (Solow model, Y=F(K,L), capital accumulation Δk=sf(k)-δk, steady state, golden rule, technology shock, **2 SVG Solow diagram**)

**Tone:** Setiap grafik dibahas, setiap rumus disebut notasinya. Tutup dengan **strategi jawab kasus makro 5-langkah**: (1) identifikasi sektor, (2) tulis identitas yang relevan, (3) gambar/jelaskan shock, (4) hitung dampak (multiplier kalau perlu), (5) tarik kesimpulan kebijakan.
```

---

## 🎯 PROMPT PER TM (workflow lama: 14 video per matkul)

Bagian di bawah ini untuk workflow lama (1 video = 1 TM). Pakai kalau ingin video pendek per topik.

## TM 01 — Kelangkaan, Pilihan, PPF
> Fokus ke: definisi **kelangkaan, opportunity cost, marginal thinking**, **10
> prinsip Mankiw** (3 individu + 3 interaksi + 4 ekonomi keseluruhan), dan
> **kurva PPF** (titik efisien, tidak efisien, tak mungkin; mengapa cekung).
> **Wajib bahas SVG PPF** dengan deskripsi titik A/C/D. Sebut hubungan
> "biaya peluang meningkat".

## TM 02 — Sistem Ekonomi & Peran Pemerintah
> Fokus ke: **3 pertanyaan fundamental** (what/how/for whom), perbandingan
> **sistem pasar vs komando vs tradisional vs campuran**, **invisible hand
> Adam Smith**, dan **4 kegagalan pasar** (monopoli, eksternalitas, public
> goods, asymmetric information). Tabel sistem ekonomi jadikan slide utama.

## TM 03 — Permintaan & Penawaran
> Fokus ke: **hukum permintaan & penawaran**, faktor yang menggeser kurva (5
> faktor demand, 4 faktor supply), **keseimbangan pasar (P\*, Q\*)**, surplus
> vs shortage. **Wajib bahas SVG kurva S–D** dengan titik E sebagai keseimbangan.
> Jelaskan perbedaan **movement along** vs **shift of** kurva.

## TM 04 — Permintaan & Perilaku Konsumen
> Fokus ke: **utilitas total vs marginal**, **diminishing marginal utility**,
> **budget constraint**, indifference curve, dan **maksimum utility** (kondisi
> MUx/Px = MUy/Py). Sebutkan **3 rumus** marginal utility di source dengan
> notasi pasti.

## TM 05 — Elastisitas
> Fokus ke: **PED (Price Elasticity of Demand)**, **YED, XED**, **PES**.
> Klasifikasi (perfectly inelastic, inelastic, unit, elastic, perfectly
> elastic). **Rumus elastisitas titik dan busur** harus persis. Hubungkan
> dengan **incidence pajak** (siapa menanggung beban pajak).

## TM 06 — Kebijakan Pemerintah dalam Pasar
> Fokus ke: **price ceiling** (di bawah ekuilibrium → shortage), **price floor**
> (di atas ekuilibrium → surplus), **pajak** (dampak ke surplus konsumen,
> surplus produsen, deadweight loss), **subsidi**. Hubungkan ke contoh nyata
> (BBM, beras, UMR).

## TM 07 — Produsen, Konsumen & Efisiensi Pasar
> Fokus ke: **fungsi produksi** (jangka pendek vs panjang), **biaya** (FC, VC,
> TC, AC, MC), **4 struktur pasar** (persaingan sempurna, monopoli, oligopoli,
> persaingan monopolistik), dan **efisiensi alokatif vs produktif**. Tabel
> perbandingan struktur pasar jadi slide utama.

## TM 08 — Pendapatan Nasional 🔑
> Fokus ke: **definisi GDP, GNP/GNI, NDP, NI, PI, Disposable Income** dengan
> rumus hubungan antar-mereka, **3 pendekatan menghitung GDP** (produksi,
> pendapatan, pengeluaran), **GDP nominal vs riil**, **GDP deflator vs CPI**,
> dan **identitas Y = C + I + G + NX**. **Wajib bahas 3 SVG** (alur identitas
> makro, struktur GDP, dll). Sebut **4 rumus** dengan notasi persis.
> Hubungkan ke shock C/I/G/NX.

## TM 09 — Perekonomian Tertutup (1): Identitas, Konsumsi, Tabungan, Dana Pinjaman
> Fokus ke: **identitas perekonomian tertutup Y = C + I + G**, **fungsi konsumsi
> C = a + bYd** (dengan **MPC** sebagai slope), **fungsi tabungan S = -a +
> (1-b)Yd** (dengan **MPS**), **pasar dana pinjaman** (penawaran dana = tabungan,
> permintaan = investasi, ekuilibrium di r*). **4 rumus** dan **SVG pasar dana
> pinjaman**. Sebut **crowding out** ketika defisit pemerintah.

## TM 10 — Perekonomian Tertutup (2): Keseimbangan, Multiplier, Kebijakan Fiskal
> Fokus ke: **AE = C + I + G** dan **Keynesian cross** (perpotongan AE dengan
> garis 45°), **multiplier belanja k = 1/(1-MPC)**, **tax multiplier**
> (negatif, lebih kecil dari spending multiplier), **balanced budget
> multiplier**, dan **kebijakan fiskal** (ekspansif vs kontraktif). **3 SVG**
> dan **2 rumus** harus dibahas. Hubungkan ke shock fiskal.

## TM 11 — Uang & Sistem Keuangan 🔑
> Fokus ke: **3 fungsi uang** (medium exchange, unit of account, store of
> value), **monetary aggregates (M1, M2, M3)**, **MS-MD framework** dengan
> suku bunga sebagai harga uang, **bank sentral** (open market operation,
> reserve requirement, discount rate), **persamaan kuantitas uang MV = PY**,
> **money multiplier 1/RR**. **2 SVG** dan **6 rumus** harus tepat. Sebut
> hubungan MS → r → I → Y.

## TM 12 — Perekonomian Terbuka
> Fokus ke: **identitas terbuka Y = C + I + G + NX**, **NX = S − I (closed)**
> menjadi **NX = S − I (open)**, **balance of payments** (current + capital
> account), **exchange rate** (nominal vs riil, fixed vs floating, appresiasi
> vs depresiasi), **dampak kebijakan fiskal/moneter di sistem fixed vs
> floating**. **2 SVG** dan **5 rumus**. Hubungkan ke shock ekspor.

## TM 13 — Inflasi & Pengangguran
> Fokus ke: **inflasi** (definisi, jenis demand-pull vs cost-push, indikator
> CPI vs deflator), **pengangguran** (frictional, structural, cyclical, natural
> rate), **Phillips curve** short-run (trade-off inflasi-pengangguran),
> **Phillips curve long-run** (vertikal di natural rate), **Okun's law**.
> **3 SVG** (Phillips curve short, long, AS-AD). **4 rumus**. Sebut **stagflasi**.

## TM 14 — Pertumbuhan Ekonomi
> Fokus ke: **Solow growth model**, **production function Y = F(K, L)**,
> **capital accumulation Δk = sf(k) − δk**, **steady state** (saving = depresiasi),
> **golden rule capital**, **technology shock**, dan **faktor pertumbuhan**
> (capital deepening, technology, human capital). **2 SVG** (Solow diagram).
> **3 rumus**. Hubungkan ke contoh negara pertumbuhan tinggi/rendah.

---

## Tips khusus PTE

### Untuk grafik

> **Wajib di prompt:** "Bahas setiap grafik SVG di source dengan menyebut deskripsi
> dari elemen `<title>` dan `<desc>`-nya, lalu jelaskan apa yang ditampilkan
> dengan kata-kata sendiri. Jangan skip grafik."

NotebookLM bisa baca SVG sebagai teks; deskripsi di `<title>`/`<desc>` adalah
yang dipakai untuk narasi.

### Untuk rumus

> **Wajib di prompt:** "Sebutkan setiap rumus dengan notasi yang persis sama
> seperti di source. Jelaskan setiap variabel dan beri contoh hitungan numerik
> kalau ada di source."

### Untuk soal Pra-UAS (latihan)

Notebook khusus dengan **hanya** `00_Bank_Soal_Pra_UAS.md`:

> "Pilih 10 soal yang paling representatif dari bank soal ini, bahas satu per
> satu: baca prompt, tunjukkan opsi, pilih jawaban, jelaskan kenapa benar dan
> kenapa opsi lain salah. Sebut **dasar teori** untuk setiap pembahasan. Untuk
> soal grafik, bahas SVG dengan deskripsi `<title>` dan `<desc>`-nya."

### Tips umum

1. **1 notebook = 1 TM** — jangan campur.
2. Untuk TM 8, 11 (paling banyak rumus + grafik): durasi video bisa 10–12 menit.
3. Untuk TM 1–7 (mikro): durasi 6–8 menit cukup.
4. Centang "Only use sources in this notebook" kalau ada opsinya.
5. Pakai **Audio Overview** dulu (~3 menit) untuk uji coba prompt, baru naikin
   ke Video Overview.
