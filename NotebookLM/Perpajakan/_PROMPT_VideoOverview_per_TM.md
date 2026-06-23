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
