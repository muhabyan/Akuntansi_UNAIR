# PMK 81/2024 amendment findings for the PJK301 packages (TM02, TM05, TM06, TM07)

Prepared 2026-09-20 by Claude Code (read-only analysis) as the reference for the PJK301 content PRs (TM02, TM05, TM06, TM07).
Nothing under `C:\AkuntansiHub-Content-Agent` or `.content-inbox` was modified. Extracted text lives in a scratch folder outside the repo.

## 0. Bottom line

1. **TM05's citations must move to PMK 51/2025.** PMK 54/2025 deleted PMK 81/2024 Bagian Kelima of BAB VI, i.e. **Pasal 217-225** (all PPh 22 collection rules), with effect **1 August 2025**. PMK 51/2025 (same title, in force the same day) re-enacts the whole regime as a standalone PMK. The TM05 package still cites "PMK 81/2024 BAB VI Bagian Kelima Pasal 217 s.d. 227 jo. PMK 51/2025" as current law.
2. **Pasal 227 is not PPh 22.** From the enacted text: Bagian Kelima (PPh 22) = Pasal 217-225; Bagian Keenam (PPh 25 installments) = **Pasal 226-237**. So TM05's "217-227" is wrong at the top end and TM07's "227-237" is wrong at the bottom end.
3. **TM02 is missing PMK 01/2026** (4th amendment), which changes Pasal 392-394 and 405 and inserts 406A, all inside the reorganisation range the package cites (Pasal 392-406).
4. **TM07 has a wrong BAB label**: Pasal 407-424 (tax allowance) is BAB VII Bagian Kedua, not "BAB XI".
5. TM06 (Pasal 191-203) and the Pasal 483 revocation numbers cited by all packages are **confirmed unaffected / correct**.

Per the user: the TM07, TM02 and TM05 corrections will be applied by Claude Code inside their own PRs (each deviation from the package listed in the PR description). TM05 is a citation remap, not a rebuild, because PMK 51/2025 Pasal 2-10 restate old Pasal 217-225 with the rates unchanged (section 3), so no regenerated TM05 package is needed. This file is the evidence for the deviations listed in each PR description.

## 1. Sources and method

All texts are in `C:\AkuntansiHub-Content-Agent\course-sources\PJK301\shared\regulation\`:
`PMK-81-2024-coretax.pdf`, `PMK-54-2025-perubahan-ketiga-PMK-81-2024.pdf`, `PMK-01-2026-perubahan-keempat-PMK-81-2024.pdf`, `PMK-51-2025-PPh-22-impor.pdf` (the file name says "impor" but the regulation covers all PPh 22 collection), `PMK-169-2015.pdf`, `PMK-101-2016.pdf`, `PMK-50-2025.pdf` (crypto; added later).

Method: `pdftotext -layout <pdf> <out.txt>`, then searched by structure and read only the passages cited here. The PDFs are text-based but OCR-quality. Known artefacts in the PMK 81/2024 text: headings without spaces (`Pasal217`, `Pasall` for Pasal 1, `BABVII`), `/` read as `j` (`261jPMK.03j2016`), digit 1 read as letter l inside words (`sete1ah`), and amounts sometimes corrupted (`rpl0.000.000,00`). **When a figure goes into student-facing text, cross-check it against the amount spelled out in words in parentheses, or against the PDF page.**

Amendment chain (from the preambles of PMK 54/2025 and PMK 01/2026): PMK 81/2024 was changed by PMK 11/2025 (VAT "nilai lain"; not in the folder), PMK 53/2025 (amends PMK 11/2025; in the folder), **PMK 54/2025 = Perubahan Ketiga**, **PMK 01/2026 = Perubahan Keempat**. The user confirms via JDIH Kemenkeu that PMK 1/2026 is the latest amendment of PMK 81/2024, so the folder is treated as complete for PMK 81/2024.

## 2. PMK 54/2025 (3rd amendment): signed 25 Jul 2025, in force 1 Aug 2025 (its Pasal II)

Its Menimbang gives the motive as adjusting the tax rules for bullion business and gold-bar imports, and for crypto-asset trading. The 45 amendment points do this:

- Pasal 1 angka 199-206 (definitions) deleted.
- **Bagian Kelima BAB VI deleted, and Pasal 217, 218, 219, 220, 221, 222, 223, 224, 225 each deleted** (points 2-11).
- Bagian Keduapuluh BAB VI deleted, and Pasal 340-342, 344-353, 355-369 deleted (points 12-40). The crypto rules moved to PMK 50/2025 (see section 8).
- Pasal 465 huruf w, Pasal 469 huruf l, Pasal 467 and Pasal 471 deleted; two Lampiran entries (Huruf OOO, Huruf EEEE) are addressed (not read).

So a description of PMK 54/2025 as "deleting the bullion/gold-import and crypto provisions" is true of its motive but incomplete: it removes **the entire PPh 22 collection chapter**, not only the gold part.

## 3. Old Pasal 217-225 versus PMK 51/2025: does PMK 51/2025 cover all of PPh 22?

**Yes.** PMK 51/2025 (Berita Negara 2025, signed 25 Jul 2025; Pasal 15: in force 1 Aug 2025) has the same title as the deleted Bagian Kelima: "Pemungutan Pajak Penghasilan Pasal 22 sehubungan dengan Pembayaran atas Penyerahan Barang dan Kegiatan di Bidang Impor atau Kegiatan Usaha di Bidang Lain". Its Pasal 2-10 restate old Pasal 217-225 one to one, in order. A word-level diff (OCR noise and re-lettering ignored) shows:

| Old (PMK 81/2024) | PMK 51/2025 | Content | Difference |
|---|---|---|---|
| 217 | 2 | Who collects (pemungut) | Same items a-h; **new item i**: Lembaga Jasa Keuangan running bullion business (OJK-licensed), on purchases of gold bars |
| 218 | 3 | Collection rates | Same rates; **new**: gold-bar imports 0.25% of import value with or without API; 0.25% of purchase price (excl. VAT) for bullion LJK; new ayat (5) on gold-bar purchases by "badan usaha tertentu" that are bullion LJK |
| 219 | 4 | Exemptions | Same; **new**: payments by item-i collectors of at most Rp10.000.000 (excl. VAT), not split |
| 220 | 5 | Timing | Same; **new ayat (8)**: PPh 22 on gold-bar purchases (item i) is due and collected at the time of purchase |
| 221 | 6 | Payment method | Same (re-lettering h to i only) |
| 222 | 7 | SSP | Same |
| 223 | 8 | Collector duties (bukti pemungutan) | Same; adds "pemotongan dan/atau" wording |
| 224 | 9 | Payment and reporting | Old text pointed to PMK 81/2024 **Pasal 94** (payment) and **Pasal 171** (reporting); new text says only "sesuai dengan ketentuan peraturan perundang-undangan di bidang perpajakan" |
| 225 | 10 | Non-final, creditable | Same (item i added to the list) |
| none | 11-13 | Implementing details | New: delegations to DJP/DJBC; Pasal 13 on the goods lists |
| none | 14 | Transition | Gold-bar exemption certificates |
| none | 15 | In force 1 Aug 2025 | |

PMK 51/2025 Pasal 2(1) collectors, a-i: (a) Bank Devisa and DJBC on imports and on exports of coal, metal and non-metal minerals; (b) Instansi Pemerintah paying by Uang Persediaan or direct payment; (c) "badan usaha tertentu" (BUMN etc.); (d) cement, paper, steel, automotive and pharmaceutical industries on sales to distributors; (e) sole agents / brand agents / general importers of motor vehicles; (f) producers or importers of fuel, gas and lubricants; (g) industry or exporters buying forestry, plantation, agricultural, livestock and fishery raw materials; (h) buyers of coal and minerals from IUP holders; **(i) bullion LJK (new)**. The Lampiran lists the goods subject to the 10% and 7.5% import rates and the 0.5% rate for soybeans, wheat and wheat flour.

Two definitional points for the rebuild: PMK 51/2025 has its **own Pasal 1** (about 17 definitions; its BUMN definition is still the old "seluruh atau sebagian besar modalnya dimiliki oleh negara ... kekayaan negara yang dipisahkan"), so do not import the PMK 81/2024 angka 135 wording that PMK 01/2026 has just broadened (section 4).

## 4. PMK 01/2026 (4th amendment): signed 22 Jan 2026, in force on promulgation (Pasal II ayat 2)

| Provision | Change |
|---|---|
| Pasal 1 angka 135 (BUMN) | Was: "seluruh atau sebagian besar modalnya dimiliki oleh negara melalui penyertaan secara langsung yang berasal dari kekayaan negara yang dipisahkan". Now: badan usaha meeting **at least one of**: (a) all or most capital owned by the Republic of Indonesia through direct participation; or (b) the State holds special rights ("hak istimewa"). |
| Pasal 1 angka 222 (Menteri) | "...bidang keuangan negara" becomes "...bidang keuangan" |
| Pasal 392 ayat (7), (8) and Pasal 394 ayat (4), (5) | Regulator wording only: "menteri (urusan ... pembinaan)" becomes "kepala lembaga pemerintah (tugas ... pengaturan)" |
| **Pasal 393 ayat (2) huruf c and d** | Business-continuity period after the merger/consolidation/spin-off/takeover: **5 (lima) tahun becomes 4 (empat) tahun**. Huruf e (fixed assets not transferred within 2 years) unchanged. Pasal 393 ayat (1) (6-month application deadline, business purpose test, Surat Keterangan Fiskal) unchanged. |
| **Pasal 405 new ayat (4)** | A taxpayer that (a) already had a book-value approval before this PMK, (b) met the business purpose test, and (c) restructures again after this PMK is exempt from the recalculation at market value in ayat (1). |
| **New Pasal 406A** | The Minister may evaluate the book-value rules within at most 3 years of promulgation; the evaluation authority is mandated to the DGT and the DG of Economic and Fiscal Strategy. |
| Pasal II transition | Book-value decisions issued before this PMK stay valid if they meet PMK 81/2024 as amended to PMK 54/2025; requests under Pasal 394 filed before this PMK and not yet decided are processed under PMK 81/2024 as amended to PMK 54/2025 (i.e. the old rules). |

## 5. Enacted structure and article-range corrections (PMK 81/2024 as enacted)

- BAB VI **Bagian Kelima** "Pemungutan PPh Pasal 22 ..." = **Pasal 217-225** (now deleted, section 2).
- BAB VI **Bagian Keenam** "Penghitungan Angsuran PPh dalam Tahun Pajak Berjalan yang Harus Dibayar Sendiri oleh WP Baru, Bank, BUMN, BUMD, WP Masuk Bursa, WP Lainnya ..." = **Pasal 226-237** (Bagian Ketujuh starts after Pasal 237). Pasal 226 is the general PPh 25 rule ("sebesar PPh yang terutang menurut SPT Tahunan tahun pajak yang lalu dikurangi ..."); Pasal 227 is the PPh 25 rule for banks.
- **BAB VII** "Tata Cara Pemberian Pelayanan Administrasi Perpajakan": Bagian Kesatu (book value, Pasal 392-406) and Bagian Kedua (PPh facility for investment, Pasal 407-424) are in the same BAB. No BAB heading was found between them.
- **Pasal 483** (revocation list) verified: angka 21 = PMK 261/PMK.03/2016; angka 22 = PMK 34/PMK.010/2017; angka 24 = PMK 52/PMK.010/2017; angka 27 = PMK 215/PMK.03/2018; angka 31 = PMK 11/PMK.010/2020. Neither amendment touches Pasal 483. Whether angka 22 also names PMK 110/2018 and PMK 41/2022 was not read.

## 6. Every PMK 81/2024 article the packages cite, against the amendments

| Article(s) cited | TMs | Status |
|---|---|---|
| 217-227 (also 217, 218) | TM05 | **217-225 deleted by PMK 54/2025** (in force 1 Aug 2025); 226-227 are PPh 25, not PPh 22 |
| 227-237 (also 229, 232, 235, 236) | TM07 | Unaffected by both amendments; **range should start at 226** |
| 407-424 (also 408) | TM07 | Unaffected; **BAB VII Bagian Kedua** |
| 392-406 (also 392, 393, 395, 396, 398, 402, 405, 406) | TM02 | **392 (7)(8), 393 (2), 394 (4)(5) amended; 405 gets ayat (4); 406A inserted** |
| 448-453 | TM02 | Unaffected |
| 191-203 (also 192, 193, 200-203) | TM06 | Unaffected |
| 483 angka 21, 22, 24, 27, 31 | TM06, TM05, TM02, TM07 | Correct as cited |

## 7. Effect on each package (file references are inside `.content-inbox\PJK301\`)

- **TM05 (citation remap to PMK 51/2025).** `TM05\04_canonical_spec.md` cites "BAB VI Bagian Kelima Pasal 217 s.d. 227" (line 26) and builds sections on "Pasal 217 PMK 81/2024 jo. Pasal 2 PMK 51/2025" (lines 58, 60, 64 and others; 8 lines in the spec, 4 in `05_student_learning_version.md`, 1 in `00_status.md`). Every Pasal 217-225 citation maps to the matching PMK 51/2025 article (217 to 2, 218 to 3, 219 to 4, 220 to 5, 221 to 6, 222 to 7, 223 to 8, 224 to 9, 225 to 10). Rates, exemptions and timing are unchanged except for the bullion additions in section 3, which belong only where TM05 already covers the related topic. The revocation statement (PMK 34/2017 revoked via Pasal 483 angka 22) is correct. The lecturer slides cite PMK 34/2017 jo. 110/2018 jo. 41/2022 (`05` line 46), which is the situation for a Dua Posisi callout: in force = PMK 51/2025 since 1 Aug 2025.
- **TM07.** `00_status.md` gives "BAB VI Bagian Keenam Pasal 227 s.d. 237" (should be 226-237) and "BAB XI Bagian Kedua Pasal 407 s.d. 424" (should be BAB VII Bagian Kedua). The revocation numbers (angka 27, 31) are right.
- **TM02.** `04_canonical_spec.md` sections 4.4-4.5 rely on Pasal 392-406 and never mention PMK 01/2026: add the 4-year continuity test (Pasal 393 ayat 2 huruf c, d), Pasal 405 ayat (4), Pasal 406A and the Pasal II transition. The package does not state the continuity period, so nothing in it contradicts the 5-to-4 change, but its Pasal 405 sanction description is now incomplete. The package label "Bab VII" for Pasal 392-406 is correct. TM02 does **not** use the BUMN definition (angka 135) or the "Menteri" definition (angka 222). Other packages that mention BUMN: TM01 (spec, 1 line), TM05 (all files), TM06 (1 line in each of 04, 05, 06); check which regulation each relies on.
- **TM06.** No change from these amendments.

## 8. Not verified (do not present as confirmed)

- PMK 51/2025 rates, thresholds and exemptions were compared with the old text only for differences; none was checked against TM05's figures or the slides.
- **Crypto** (Bagian Keduapuluh and Pasal 340-369 deleted): the rules now sit in **PMK 50/2025**, "Pajak Pertambahan Nilai dan Pajak Penghasilan atas Transaksi Perdagangan Aset Kripto", signed 25 Jul 2025, in force 1 Aug 2025 (in the folder since 2026-09-20). Its title is identical to the deleted Bagian Keduapuluh. Its text does not itself mention the deleted articles, so the link rests on the identical title, the same effective date and the user's statement. TM05's crypto content (from the slides) has not yet been checked against PMK 50/2025.
- PMK 81/2024's own effective date was not re-read (the TM02 package says the old book-value PMKs were revoked as of 1 Jan 2025).
- PMK 11/2025 is not in the folder; it concerns VAT, and the amendments checked do not reference our articles through it.
- TM06's "BAB VI Bagian Kedua" label, TM07 Pasal 235-236 (WP OPPT 0,75%), PMK 37/2025 (marketplace), and PMK 01/2026's exact Pasal 1 wording beyond angka 135 and 222 were not checked.

## 9. Also confirmed while checking (relevant to TM01/TM02/TM03)

- **PMK 169/PMK.010/2015** (now in the folder): the ratio is "paling tinggi sebesar empat dibanding satu (4:1)". **PMK 101/2016**: PTKP Rp54.000.000 (WP OP), plus Rp4.500.000 for a married taxpayer and Rp4.500.000 per dependant. Both match the packages, and neither appears in the Pasal 483 revocation list (OCR-tolerant search).
