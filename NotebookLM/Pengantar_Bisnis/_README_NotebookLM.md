# Pengantar Bisnis (MNU101) — Materi per TM (Siap NotebookLM)

Folder ini berisi materi Pengantar Bisnis dipisah **per Tatap Muka (TM 1–14)**
untuk di-upload ke [NotebookLM](https://notebooklm.google.com) supaya bisa
digenerate **Video Overview** (slide + narasi audio AI) per TM.

## Cara pakai

1. Buka NotebookLM → **New notebook** (1 notebook = 1 TM).
2. Beri nama: misal `Pengbis — TM 1 — Business & Economic Environment`.
3. Klik **Add source** → upload **semua file** di dalam folder `TMxx_*`.
4. (Opsional) Tambahkan juga 1–2 file dari root sebagai pendamping:
   - `00_Glossary.md` (definisi istilah lintas-TM)
   - `00_Cheat_Sheet.md` (ringkasan padat)
   - `00_Case_Bank_TM1-14.md` (bank kasus per TM)
   - `00_Latihan_Esai_Model_Jawaban.md` (kerangka jawaban esai)
5. Setelah source ter-index → panel kanan klik **Studio** → **Video Overview** → Generate.
6. NotebookLM akan render slide-style video dengan **narasi suara AI** otomatis.

---

## 🎬 DUA WORKFLOW: pilih yang sesuai gaya belajarmu

### Workflow A — VIDEO KOMPREHENSIF (Recommended untuk review pra-ujian)

> **2 video per matkul** (1 untuk Pra-UTS TM 1–7, 1 untuk Pra-UAS TM 8–14).
> Cocok kalau ingin video panjang yang nyambungin antar-TM jadi cerita utuh.

**Langkah:**
1. Buka NotebookLM → **New notebook**. Beri nama: `Pengantar Bisnis — Pra-UTS Komprehensif`.
2. **Add source** → upload `00_Pra_UTS_TM1-7_Gabungan.md` saja (sudah berisi seluruh TM 1–7).
3. Buka **Studio → Video Overview → Customize** → paste prompt **"Video Komprehensif Pra-UTS"** dari `_PROMPT_VideoOverview_per_TM.md`.
4. Generate. Durasi video ~18–35 menit (tergantung matkul).
5. Ulangi untuk Pra-UAS: upload `00_Pra_UAS_TM8-14_Gabungan.md`, pakai prompt **"Video Komprehensif Pra-UAS"**.

**Hasil:** 2 video komprehensif. Hemat waktu setup tapi durasi video lebih panjang.

### Workflow B — VIDEO PER TM (workflow lama)

> **14 video per matkul** (1 per TM). Cocok kalau ingin video pendek yang fokus 1 topik dan mudah dicari ulang.

Drag folder `TMxx_*` ke notebook → pakai prompt **per TM** dari `_PROMPT_VideoOverview_per_TM.md`. Durasi 5–12 menit per video.

**Hasil:** 14 video pendek. Lebih banyak setup tapi gampang scan saat butuh review topik tertentu.

> 💡 **Saran:** mulai dengan Workflow A untuk video Pra-UTS dulu. Kalau hasilnya kurang fokus per topik, fallback ke Workflow B untuk topik kritis.


## Struktur per TM

Tiap folder `TMxx_*` berisi **2 file** utama:

| File | Isi |
|---|---|
| `TMxx_main.md` | Materi inti dari `Pengantar_Bisnis_Pra_UAS.md` (versi paling kaya, TM 8–14 ekstra detail) |
| `TMxx_chunk_source.md` | Modul terstruktur dari `pengbis_import_pack/chunks/` (audit RPS + tabel komparasi) |

Kedua file saling melengkapi — upload keduanya untuk konteks paling kaya.

## Daftar TM 1–14

### Pra-UTS (TM 1–7)

| Folder | Topik | Source |
|---|---|---|
| `TM01_Business_Economic_Environment` | Definisi bisnis, sistem ekonomi, siklus bisnis, jenis persaingan pasar | Pride Ch.1 · Nickels Ch.2 |
| `TM02_Ethics_CSR_Environment` | Etika bisnis, CSR, isu lingkungan, etika manajerial | Pride Ch.2 · Nickels Ch.3 |
| `TM03_Global_Business` | Globalisasi, comparative/absolute advantage, mode entry, hambatan dagang | Pride Ch.3 · Nickels Ch.4 |
| `TM04_Ownership_Entrepreneurship_Franchise` | Bentuk kepemilikan, kewirausahaan, UMKM, franchise | Pride Ch.4–5 · Nickels Ch.5 |
| `TM05_Management_Process` | Fungsi manajemen (POAC), pengambilan keputusan, tingkat manajemen | Pride Ch.6 · Nickels Ch.7 |
| `TM06_Flexible_Organization` | Struktur organisasi, departementalisasi, span of control, organisasi fleksibel | Pride Ch.7 · Nickels Ch.8 |
| `TM07_Operations_Quality` | Produksi barang/jasa, manajemen kualitas (TQM/Six Sigma/Kaizen), kapasitas | Pride Ch.8 · Nickels Ch.9 |

### Pra-UAS (TM 8–14)

| Folder | Topik | Source |
|---|---|---|
| `TM08_HRM_Motivasi_Tim` | HR planning, recruitment, training, kompensasi, teori motivasi, tim | Pride Ch.9–10 · Nickels Ch.10–11 |
| `TM09_Marketing_CRM_Buyer_Behavior` | CRM, marketing concept, STP, market research, consumer decision | Pride Ch.11 · Nickels Ch.13 |
| `TM10_Product_Brand_Pricing` | Product mix, brand equity, PLC, NPD, strategi pricing | Pride Ch.12 · Nickels Ch.14 |
| `TM11_Distribution_Supply_Chain_Promotion` | Saluran distribusi, SCM, retailing, promotion mix, AIDA | Pride Ch.13 · Nickels Ch.16 |
| `TM12_Social_Media_EBusiness_IT_Security` | Social media plan, e-business model, IT, cybersecurity, future trends | Pride Ch.14 |
| `TM13_MIS_Accounting_Financial_Statements` | Data-info-knowledge, MIS, persamaan akuntansi, laporan keuangan, rasio | Pride Ch.15 · Nickels Ch.17 |
| `TM14_Financial_Management` | CFO role, cash budget, working capital, pendanaan jangka pendek/panjang | Pride Ch.16 · Nickels Ch.18 |

## Tips Video Overview NotebookLM

- **Customize prompt** sebelum generate → lihat file `_PROMPT_VideoOverview_per_TM.md`
- Video Overview = visual slide + voice-over AI (sudah include audio narasi).
- Bisa di-download (.mp4) atau di-share via link.
- Kalau mau audio podcast 2-orang, gunakan **Audio Overview** (tombol terpisah di Studio).

## File sumber asli (tidak diubah)

- Master MD: `C:\cek\src\data\pengbis\Pengantar_Bisnis_Pra_UAS.md` (96 KB, TM 1–14)
- Import pack chunks: `C:\cek\Pengantar Bisnis\Pengbis pra UAS\pengbis_import_pack\chunks\` (per TM + Case Bank + Glossary + Cheat Sheet)
- Buku referensi (besar): `Understanding Business — Nickels`, `Foundations of Business — Pride`

Semua file di folder ini hanya **copy** dari sumber asli. Aman untuk dihapus kalau sudah selesai diupload ke NotebookLM.
