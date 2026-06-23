# Prompt Customize NotebookLM — Video Overview per TM (Pengantar Bisnis)

Saat klik **Studio → Video Overview → Customize**, paste prompt yang sesuai TM-nya.

## Pola umum (template)

> Bahasa Indonesia, durasi 6–10 menit, gaya dosen S1 Akuntansi UNAIR menjelaskan
> mahasiswa sebelum UTS/UAS. **Hanya gunakan isi source yang aku upload**, jangan
> menambah materi dari luar. Susun dengan urutan: (1) definisi & framework,
> (2) klasifikasi/jenis dengan tabel komparasi, (3) contoh nyata (case),
> (4) jebakan ujian. Sebut **istilah teknis Pride/Nickels** persis seperti
> tertulis di source. Tabel di source ubah jadi slide visual yang readable.

---

---

## 🎬 PROMPT UNTUK VIDEO KOMPREHENSIF (1 video per fase)

> Pakai prompt ini kalau ingin **1 video untuk seluruh Pra-UTS (TM 1-7)** atau **1 video untuk seluruh Pra-UAS (TM 8-14)**.  
> Upload **hanya** `00_Pra_UTS_TM1-7_Gabungan.md` atau `00_Pra_UAS_TM8-14_Gabungan.md` sebagai source.

### Video Komprehensif Pra-UTS (TM 1–7)

```
Bahasa Indonesia, durasi **18–25 menit**, gaya dosen S1 Akuntansi UNAIR Pra-UTS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UTS_TM1-7_Gabungan.md`).

**Struktur video (7 segmen TM):**
1. **TM 1 — Business & Economic Environment** (definisi bisnis, needs vs wants, sistem ekonomi capitalism/command/mixed, business cycle 4 fase, jenis persaingan pasar)
2. **TM 2 — Ethics, CSR & Environmental Concerns** (CSR pyramid, stakeholder approach, sustainability, kode etik & whistleblowing)
3. **TM 3 — Global Business** (comparative vs absolute advantage, mode entry, hambatan dagang, WTO/ASEAN)
4. **TM 4 — Ownership, Entrepreneurship & Franchise** (sole/partnership/corporation/S-corp/LLC, UMKM, franchisor vs franchisee)
5. **TM 5 — The Management Process** (POAC, 3 tingkat manajemen, decision making, strategi level)
6. **TM 6 — Flexible Organization** (departementalisasi 5 jenis, chain of command, centralization vs decentralization, flat structure)
7. **TM 7 — Producing Quality Goods & Services** (OM, forecasting, capacity planning, TQM/Six Sigma/Kaizen, ISO 9000, JIT)

**Tone:** Pakai istilah **Pride/Nickels** persis. Tabel komparasi jadikan slide utama. Sebut **case Chobani, Dunkin, Domino, FedEx, Zappos** kalau ada di source.
```

### Video Komprehensif Pra-UAS (TM 8–14)

```
Bahasa Indonesia, durasi **22–30 menit**, gaya dosen Pra-UAS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UAS_TM8-14_Gabungan.md`).

**Struktur video (7 segmen TM):**
1. **TM 8 — HRM & Employee-Team Motivation** (HR planning, recruitment-selection, kompensasi, teori motivasi Maslow/Herzberg/McGregor/Equity/Expectancy, team motivation, diversity)
2. **TM 9 — CRM & Buyer Behavior** (CLV, evolution marketing concept, STP, B2B vs B2C, 5-step buyer decision)
3. **TM 10 — Product, Brand, PLC & Pricing** (product classification, product mix, brand equity, NPD 8 stages, PLC 4 fase, pricing strategy skimming/penetration, break-even)
4. **TM 11 — Distribution, SCM & Promotion** (channel level 0-2, 6 utilities, intensity intensive/selective/exclusive, retailing, promotion mix, AIDA, push vs pull)
5. **TM 12 — Social Media, E-Business, IT & Security** (social media plan, KPI, e-business B2B/B2C/C2C, cybersecurity firewall/phishing/social engineering, future trends AI/IoT/blockchain)
6. **TM 13 — MIS, Accounting & Financial Statements** (data → information → knowledge, MIS components, persamaan akuntansi, 3 laporan keuangan, rasio liquidity/profitability/leverage)
7. **TM 14 — Financial Management** (CFO role, cash budget, working capital, pendanaan jangka pendek vs panjang, debt vs equity, cost of capital, dividend policy)

**Tone:** Pakai istilah Pride/Nickels persis. Tabel komparasi jadikan slide. Sebut case study yang ada di source per TM.
```

---

## 🎯 PROMPT PER TM (workflow lama: 14 video per matkul)

Bagian di bawah ini untuk workflow lama (1 video = 1 TM). Pakai kalau ingin video pendek per topik.

## TM 01 — Business, Economic Environment, Business Cycle & Competition
> Fokus ke: definisi bisnis & **needs vs wants**, **sistem ekonomi** (capitalism,
> command, mixed), **business cycle** (expansion, peak, contraction, trough)
> dengan dampak ke bisnis dan strategi manajemen, **jenis persaingan pasar**
> (pure competition, monopolistic, oligopoly, monopoly). Tabel di source jadikan
> kunci visual. Jangan masuk ke etika (TM 2) atau global (TM 3).

## TM 02 — Business Ethics, Social Responsibility & Environmental Concerns
> Fokus ke: definisi etika bisnis vs hukum, **CSR pyramid** (economic, legal,
> ethical, philanthropic), **stakeholder approach**, **isu lingkungan** (sustainability,
> green business), kode etik & whistleblowing. Sebut contoh kasus konkret (Enron,
> WorldCom, scandal yang ada di source). Jangan masuk ke globalisasi (TM 3).

## TM 03 — Global Business
> Fokus ke: **comparative vs absolute advantage**, **mode entry** (exporting,
> licensing, franchising, joint venture, FDI), **hambatan dagang** (tariff,
> quota, embargo, exchange rate), trade agreement (WTO, NAFTA, ASEAN). Hubungkan
> dengan contoh perusahaan multinasional. Jangan masuk ke ownership domestik
> (TM 4).

## TM 04 — Business Ownership, Entrepreneurship, Small Business & Franchise
> Fokus ke: **bentuk kepemilikan** (sole proprietorship, partnership, corporation,
> S-corp, LLC) — bandingkan plus-minus, **karakteristik entrepreneur**, **UMKM**,
> **franchise** (franchisor vs franchisee, royalty fee). Tabel komparasi
> kepemilikan sangat penting di ujian.

## TM 05 — The Management Process
> Fokus ke: **fungsi manajemen POAC** (Planning, Organizing, Actuating/Leading,
> Controlling), **tingkat manajemen** (top, middle, supervisory) dengan jenis
> skill (technical, human, conceptual), **decision making** (bounded rationality),
> **strategi level** (corporate, business, functional). Jangan masuk ke struktur
> organisasi detail (TM 6).

## TM 06 — Creating a Flexible Organization
> Fokus ke: **departementalisasi** (functional, product, geographic, customer,
> matrix), **chain of command**, **span of control**, **centralization vs
> decentralization**, organisasi formal vs informal, **flexible organization
> trends** (flat structure, team-based, virtual). Sebut esprit de corps.

## TM 07 — Producing Quality Goods and Services
> Fokus ke: **operations management**, perbedaan produksi barang vs jasa,
> **forecasting demand**, **capacity planning**, **TQM, Six Sigma, Kaizen**
> (bandingkan), **ISO 9000**, just-in-time vs just-in-case, lean manufacturing.
> Hubungkan dengan kasus Toyota (Kaizen) atau perusahaan kualitas terkenal.

## TM 08 — HRM & Employee–Team Motivation
> Fokus ke: **HR planning** (forecasting, recruitment, selection, onboarding),
> **kompensasi & benefits**, **teori motivasi** (Maslow, Herzberg two-factor,
> McGregor X/Y, equity theory, expectancy theory), **team motivation** (esprit
> de corps), **diversity management**. Sebut kasus Chobani atau perusahaan dengan
> budaya kerja unggul yang ada di source.

## TM 09 — Customer Relationship, Marketing Concept, Market Classification & Buyer Behavior
> Fokus ke: **CRM** (Customer Lifetime Value, customer retention vs acquisition),
> **marketing concept evolution** (production → product → selling → marketing
> → societal), **STP** (Segmentation, Targeting, Positioning), **market types**
> (consumer vs B2B), **buyer behavior** (5-step decision process), market research
> (primary vs secondary). Sebut kasus Dunkin' Donuts atau yang ada di source.

## TM 10 — Product Creation, Brand, Product Life Cycle & Pricing
> Fokus ke: **product classification** (convenience, shopping, specialty,
> unsought), **product mix** (width, depth, length, consistency), **brand equity
> & loyalty**, **packaging-labeling**, **NPD stages** (8 tahap dari idea
> generation sampai commercialization), **PLC** (introduction, growth, maturity,
> decline) dengan strategi tiap fase, **strategi pricing** (skimming, penetration,
> psychological, prestige), **break-even**. Sebut kasus Domino's atau yang ada
> di source.

## TM 11 — Distribution Channels, Supply Chain, Retailing & Promotion
> Fokus ke: **channel types** (zero level, 1-level, 2-level), **intermediaries**
> (wholesaler, retailer, agent), **6 utilities** (form, place, time, possession,
> information, service), **SCM**, **intensity distribution** (intensive,
> selective, exclusive), **store/online/non-store retailing**, **promotion mix**
> (advertising, personal selling, sales promotion, PR), **AIDA model**, **push
> vs pull strategy**. Sebut kasus FedEx atau yang ada di source.

## TM 12 — Social Media, E-Business, Information Technology, Security & Future Business
> Fokus ke: **social media plan steps** (audit, set goals, define audience,
> create content, measure), **KPI sosial media** (reach, engagement,
> conversion), **e-business models** (B2B, B2C, C2C, B2G), **IT systems**,
> **cybersecurity** (firewall, encryption, social engineering, phishing),
> **future trends** (AI, IoT, blockchain). Sebut kasus Zappos atau yang ada
> di source.

## TM 13 — Management Information System, Accounting Information & Financial Statements
> Fokus ke: **data → information → knowledge hierarchy**, **MIS components**
> (input, processing, output, feedback), **persamaan akuntansi**
> (Aset = Liabilitas + Ekuitas), **3 laporan keuangan utama** (income statement,
> balance sheet, cash flow statement), **disiplin akuntansi** (financial vs
> managerial vs tax vs auditing), **rasio keuangan dasar** (liquidity,
> profitability, leverage). Sebut kasus Goodwill Industries atau yang ada di
> source.

## TM 14 — Financial Management, Budgeting, Short-Term & Long-Term Financing
> Fokus ke: **CFO role**, **cash budget**, **working capital management**,
> **pendanaan jangka pendek** (trade credit, line of credit, factoring,
> commercial paper), **pendanaan jangka panjang** (long-term loan, bond,
> equity/saham), **debt vs equity** (plus-minus, risk-return), **cost of
> capital**, **dividend policy**. Sebut kasus Tom and Eddie's atau yang ada
> di source.

---

## Tips tambahan biar AI tidak ngelantur

1. **1 notebook = 1 TM**. Jangan campur source antar-TM dalam satu notebook.
2. Centang **"Only use sources in this notebook"** kalau ada opsinya.
3. Kalau hasil masih melebar, **Regenerate** dengan prompt yang lebih ketat
   (tambahkan "Jangan bahas X, Y, Z" — explicit blocklist sering lebih efektif
   daripada whitelist).
4. Pakai **Audio Overview** dulu (lebih cepat ~2-3 menit) untuk uji coba prompt,
   baru naikin ke Video Overview kalau sudah pas.
5. Untuk TM 1–7 (Pra-UTS), source lebih ringkas → bisa upload `00_Case_Bank_TM1-14.md`
   sebagai pendamping supaya AI dapat case study.
6. Untuk TM 8–14 (Pra-UAS), source sudah kaya → 1 folder cukup.
