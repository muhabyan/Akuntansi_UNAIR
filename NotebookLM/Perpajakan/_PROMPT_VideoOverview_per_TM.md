# Prompt Customize NotebookLM — Video Overview per TM (Perpajakan I)

Saat klik **Studio → Video Overview → Customize**, paste prompt yang sesuai TM-nya.
Tujuan: AI fokus ke ruang lingkup TM, tidak kabur ke materi lain.

## Pola umum (template)

> Bahasa Indonesia, durasi 6–10 menit, gaya dosen S1 Akuntansi UNAIR menjelaskan
> mahasiswa sebelum UTS/UAS. **Hanya gunakan isi source yang aku upload**, jangan
> menambah materi dari luar. Susun dengan urutan: (1) konsep inti, (2) klasifikasi/jenis,
> (3) contoh & angka, (4) jebakan ujian. Sebut **pasal/ayat UU dan PMK** persis seperti
> tertulis di source. Jika ada tabel di source, ubah jadi slide perbandingan visual.

---

---

## 🎬 PROMPT UNTUK VIDEO KOMPREHENSIF (1 video per fase)

> Pakai prompt ini kalau ingin **1 video untuk seluruh Pra-UTS (TM 1-7)** atau **1 video untuk seluruh Pra-UAS (TM 8-14)**.  
> Upload **hanya** `00_Pra_UTS_TM1-7_Gabungan.md` atau `00_Pra_UAS_TM8-14_Gabungan.md` sebagai source.

### Video Komprehensif Pra-UTS (TM 1–7)

```
Bahasa Indonesia, durasi **18–25 menit**, gaya dosen S1 Akuntansi UNAIR mengantar mahasiswa Pra-UTS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UTS_TM1-7_Gabungan.md`), jangan menambah materi dari luar.

**Struktur video (7 segmen TM):**
1. **TM 1 — Kebijakan Fiskal & Pengertian Pajak** (definisi, fungsi budgetair vs regulerend, sejarah, kebijakan fiskal vs moneter)
2. **TM 2 — Teori, Jenis, Tarif & Utang Pajak** (teori pemungutan, jenis pajak, official/self/with-holding assessment, tarif progresif/proporsional/regresif, timbul-hapusnya utang)
3. **TM 3 — Hukum Pajak Internasional** (asas domisili/sumber/kewarganegaraan, double taxation, P3B, BEPS)
4. **TM 4 — KUP, NPWP/NPPKP** (UU KUP 6/1983 → 6/2023, NIK sebagai NPWP, subjek DN vs LN, objek pajak)
5. **TM 5 — Pembayaran, Pelaporan & SPT** (SPT Masa vs Tahunan, pembetulan Pasal 8 UU KUP, sanksi, Coretax 2025+)
6. **TM 6 — Kepatuhan & Tax Digitalization** (kepatuhan formal vs material, Coretax, e-Faktur, tax ratio)
7. **TM 7 — Pembukuan & Pencatatan** (Pasal 28 UU KUP, omzet ≤ 4,8M boleh pencatatan + NPPN, sanksi Pasal 39)

**Tone:** Sebut pasal/UU **persis** seperti tertulis di source. Tabel dijadikan slide visual. Tutup dengan **3 jebakan UTS** yang sering muncul. Per TM beri intro 30 detik dan punchline 30 detik supaya mahasiswa tidak ngantuk.
```

### Video Komprehensif Pra-UAS (TM 8–14)

```
Bahasa Indonesia, durasi **22–30 menit**, gaya dosen S1 Akuntansi UNAIR mengantar mahasiswa Pra-UAS. **Hanya gunakan isi source yang aku upload** (`00_Pra_UAS_TM8-14_Gabungan.md`).

**Struktur video (7 segmen TM, fokus dasar hukum):**
1. **TM 8 — Penelitian, Pemeriksaan, Bukper, Penyidikan** (beda 4 tahap, Pasal 38/39/39A/43/44A/44B UU KUP, PMK 15/2025, PMK 177/2022, PMK 17/2025)
2. **TM 9 — Penetapan, Ketetapan & Restitusi** (SKPKB/SKPKBT/SKPLB/SKPN/STP, alur restitusi Pasal 17B)
3. **TM 10 — Keberatan, Banding, Gugatan, PK** (tenggat masing-masing, UU 14/2002, Putusan MK 26/PUU-XXI/2023)
4. **TM 11 — Penagihan, Surat Paksa, Pidana Fiskal** (UU PPSP, hak mendahulu DJP, PMK 61/2023, pidana Pasal 38–43A)
5. **TM 12 — Bea Meterai** (UU 10/2020, PMK 78/2024, tarif Rp10.000, objek/non-objek, pemeteraian kemudian)
6. **TM 13 — Pajak Daerah Provinsi** (UU 1/2022 HKPD, PKB, BBNKB, PAB, Pajak Rokok, opsen)
7. **TM 14 — PBB-P2, BPHTB & Pajak Kab/Kota** (NJOP, NJOPTKP, BPHTB NPOPTKP Rp80jt/Rp300jt, PBJT)

**Tone:** Sebut **pasal/ayat/huruf/angka** persis. Tabel jadi slide visual. Per TM sebut **1 jebakan UAS** dari source. Tutup dengan **strategi terstruktur 5-langkah** untuk jawab kasus pajak: (1) identifikasi tahap, (2) tarik dasar hukum, (3) hitung jangka waktu/sanksi, (4) putuskan upaya hukum, (5) susun argumentasi.
```

---

## 🎯 PROMPT PER TM (workflow lama: 14 video per matkul)

Bagian di bawah ini untuk workflow lama (1 video = 1 TM). Pakai kalau ingin video pendek per topik.

## TM 01 — Kebijakan Fiskal, Sejarah & Pengertian Pajak
> Fokus ke: definisi pajak menurut Soemitro & UU KUP, **fungsi pajak (budgetair vs regulerend)**,
> perbedaan **kebijakan fiskal vs kebijakan moneter**, sejarah singkat pajak di Indonesia,
> dan unsur-unsur pajak. Jangan bahas SPT, NPWP, pemeriksaan, atau materi TM lain.

## TM 02 — Teori, Jenis, Cara Pemungutan, Tarif & Utang Pajak
> Fokus ke: **teori pemungutan pajak** (asuransi, kepentingan, daya pikul, bakti, daya beli);
> **jenis pajak** (langsung/tidak langsung, pusat/daerah, subjektif/objektif); **cara pemungutan**
> (official, self, with-holding assessment); **macam tarif** (tetap, proporsional, progresif,
> regresif/degresif) dengan contoh hitungan; **timbul & hapusnya utang pajak**. Jangan masuk ke
> SPT, kepatuhan, atau hukum pajak internasional.

## TM 03 — Hukum Pajak Internasional
> Fokus ke: **asas pengenaan pajak** (domisili, sumber, kewarganegaraan), **double taxation** dan
> cara menghindarinya (unilateral, bilateral, multilateral), **P3B / tax treaty**, **BEPS** dan
> pilar OECD, **subjek pajak DN vs LN**. Jangan masuk ke materi KUP domestik atau SPT.

## TM 04 — KUP, NPWP/NPPKP, Subjek & Objek Pajak
> Fokus ke: ruang lingkup **UU KUP (UU 6/1983 s.t.d.t.d. UU 6/2023)**, **NPWP** (fungsi, syarat,
> kewajiban, **NIK sebagai NPWP** sejak 2024), **NPPKP**, **PKP**, **subjek pajak** (OP, badan,
> warisan belum terbagi, BUT; DN vs LN), **objek pajak** (penghasilan menurut Pasal 4 UU PPh),
> dan **bukan objek pajak**. Jangan masuk ke pembayaran, SPT, pemeriksaan.

## TM 05 — Pembayaran, Pelaporan Pajak & SPT
> Fokus ke: **SPT Masa vs SPT Tahunan**, **batas bayar & batas lapor**, **pembetulan SPT**
> (Pasal 8 ayat (1), (1a), (4), (5), (6) UU KUP), **perpanjangan SPT** (Pasal 3), **sanksi**
> (denda Pasal 7, bunga KMK Maret 2026 0,53%–2,20%/bulan), **mekanisme Coretax 2025+**, **BPN/SSP**.
> Jangan masuk ke pemeriksaan/Bukper/penyidikan (itu TM 8).

## TM 06 — Kepatuhan Pajak & Tax Digitalization
> Fokus ke: **kepatuhan formal vs material**, **self-assessment**, faktor kepatuhan, sanksi
> ketidakpatuhan, **Coretax**, **e-Faktur**, **e-Bupot**, **digitalisasi DJP**, **tax ratio**
> (metodologi OECD), benchmark internasional. Jangan masuk ke pembukuan (TM 7) atau pemeriksaan.

## TM 07 — Pembukuan & Pencatatan
> Fokus ke: **Pasal 28 UU KUP** — kewajiban pembukuan, **syarat pembukuan** (itikad baik, Bahasa
> Indonesia, mata uang Rupiah/USD untuk badan tertentu), **siapa yang wajib pembukuan vs
> pencatatan** (OP omzet ≤ 4,8M boleh pencatatan + NPPN), **dokumen pendukung 10 tahun**,
> **sanksi tidak menyelenggarakan pembukuan** (Pasal 39 UU KUP). Jangan masuk ke SPT/sanksi
> umum (TM 5).

---

## TM 08–14 (Pra-UAS)

Untuk TM 8–14, source chunks sudah punya bagian "Jebakan UAS" dan dasar hukum lengkap. Cukup pakai:

> Bahasa Indonesia, 8–12 menit, gaya dosen menjelaskan sebelum UAS. Susun urutan:
> (1) peta proses/konsep, (2) **dasar hukum lengkap** (UU + PMK + pasal/ayat/huruf), (3) contoh
> kasus, (4) jebakan UAS yang ada di source. Hanya gunakan isi source ini.

Tambahkan satu kalimat fokus per TM:
- TM 08: "Fokus ke beda **penelitian, pemeriksaan, Bukper, dan penyidikan** + Pasal 38, 39, 39A, 43, 44A, 44B UU KUP."
- TM 09: "Fokus ke **jenis ketetapan (SKPKB, SKPKBT, SKPLB, SKPN, STP)** dan **mekanisme restitusi**."
- TM 10: "Fokus ke alur **keberatan → banding → gugatan → PK** + tenggat waktu masing-masing."
- TM 11: "Fokus ke **penagihan aktif**, surat paksa, sita, lelang, **hak mendahulu DJP**, dan **tindak pidana fiskal**."
- TM 12: "Fokus ke **objek/non-objek Bea Meterai**, tarif Rp10.000, dan kewajiban pemeteraian kemudian."
- TM 13: "Fokus ke **jenis pajak daerah provinsi** (PKB, BBNKB, PAB, Pajak Rokok, dll) dengan tarif tertinggi."
- TM 14: "Fokus ke **PBB-P2, BPHTB, PBJT, Opsen**, kewenangan kab/kota, dan dasar pengenaan."

---

## Tips tambahan biar AI tidak ngelantur

1. **1 notebook = 1 TM**. Jangan campur source antar-TM dalam satu notebook (NotebookLM akan ngeblend).
2. Centang **"Only use sources in this notebook"** kalau ada opsinya (di setting).
3. Kalau hasil masih melebar, klik **Regenerate** dengan prompt yang lebih ketat (tambahkan
   "Jangan bahas X, Y, Z" — explicit blocklist sering lebih efektif daripada whitelist).
4. Pakai **Audio Overview** dulu (lebih cepat) untuk uji coba prompt, baru naikin ke Video Overview.
