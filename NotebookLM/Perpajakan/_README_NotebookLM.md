# Perpajakan I — Materi per TM (Siap NotebookLM)

Folder ini berisi materi Perpajakan I dipisah **per Tatap Muka (TM 1–14)** untuk
di-upload ke [NotebookLM](https://notebooklm.google.com) supaya bisa
digenerate **Video Overview** (slide + narasi audio AI) per TM.

## Cara pakai

1. Buka NotebookLM → **New notebook** (1 notebook = 1 TM).
2. Beri nama: misal `Perpajakan I — TM 8 — Penelitian & Pemeriksaan`.
3. Klik **Add source** → upload **semua file** di dalam folder `TMxx_*`.
4. Untuk TM 8–14, kamu juga bisa ikut-upload `00_Referensi_Dasar_Hukum_PraUTS.md`
   (referensi pasal umum) bila perlu.
5. Setelah source ter-index → panel kanan klik **Studio** → **Video Overview** → Generate.
6. NotebookLM akan render slide-style video dengan **narasi suara AI** otomatis.

---

## 🎬 DUA WORKFLOW: pilih yang sesuai gaya belajarmu

### Workflow A — VIDEO KOMPREHENSIF (Recommended untuk review pra-ujian)

> **2 video per matkul** (1 untuk Pra-UTS TM 1–7, 1 untuk Pra-UAS TM 8–14).
> Cocok kalau ingin video panjang yang nyambungin antar-TM jadi cerita utuh.

**Langkah:**
1. Buka NotebookLM → **New notebook**. Beri nama: `Perpajakan I — Pra-UTS Komprehensif`.
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


## Struktur

### Pra-UTS (TM 1–7) — sumber: `perpajakanPraUTS.ts`

| Folder | Topik |
|---|---|
| `TM01_Kebijakan_Fiskal_Sejarah_Pengertian_Pajak` | Kebijakan Fiskal, Sejarah & Pengertian Pajak |
| `TM02_Teori_Jenis_Cara_Pemungutan_Tarif_Utang_Pajak` | Teori, Jenis, Cara Pemungutan, Tarif & Utang Pajak |
| `TM03_Hukum_Pajak_Internasional` | Hukum Pajak Internasional |
| `TM04_KUP_NPWP_NPPKP_Subjek_Objek_Pajak` | KUP, NPWP/NPPKP, Subjek & Objek Pajak |
| `TM05_Pembayaran_Pelaporan_SPT` | Pembayaran, Pelaporan Pajak & SPT |
| `TM06_Kepatuhan_Pajak_Tax_Digitalization` | Kepatuhan Pajak & Tax Digitalization |
| `TM07_Pembukuan_Pencatatan` | Pembukuan & Pencatatan |

Format: 1 file markdown per TM (`TMxx_materi.md`).

### Pra-UAS (TM 8–14) — sumber: PDF asli + source chunks

| Folder | Topik | File |
|---|---|---|
| `TM08_Penelitian_Pemeriksaan_Bukper_Penyidikan` | Penelitian, Pemeriksaan, Bukper, Penyidikan | PDF + chunks.md |
| `TM09_Penetapan_Ketetapan_Restitusi` | Penetapan, Ketetapan Pajak, Restitusi | PDF + chunks.md |
| `TM10_Keberatan_Banding_Gugatan_PK` | Keberatan, Banding, Gugatan, PK | PDF + chunks.md |
| `TM11_Penagihan_Surat_Paksa_Pidana_Fiskal` | Penagihan, Surat Paksa, Hak Mendahulu, Pidana Fiskal | PDF + chunks.md |
| `TM12_Bea_Meterai` | Bea Meterai | PDF + chunks.md |
| `TM13_Pajak_Daerah_Provinsi` | Pajak Daerah Provinsi | PDF + chunks.md |
| `TM14_PBBP2_BPHTB_Pajak_Kab_Kota` | PBB-P2, BPHTB, PBJT, Pajak Kab/Kota | PDF + chunks.md |

> Catatan numbering: PDF asli dinamai TM9–TM15 (urut materi UAS), kini di-shift mundur 1
> angka jadi TM8–TM14. Isi file PDF dan markdown **tidak diubah**, hanya nama
> file & folder yang dipindah supaya konsisten TM 1–14.

## Tips Video Overview NotebookLM

- **Customize prompt** sebelum generate, misal:
  > "Buat video overview berbahasa Indonesia, ~6–10 menit. Fokus ke dasar hukum
  > (pasal/ayat) dan jebakan UAS. Pakai gaya dosen menjelaskan ke mahasiswa S1."
- Video Overview = visual slide + voice-over AI → sudah include audio.
- Bisa di-download (.mp4) atau di-share via link.
- Kalau mau audio aja (podcast 2 orang), gunakan **Audio Overview** (tombol terpisah di Studio).

## File asli tidak diubah

- PDF asli tetap di `C:\cek\Perpajakan\TMx_*.pdf`
- Source markdown tetap di `C:\cek\Perpajakan\Perpajakan pra UAS\PERPAJAKAN_PRA_UAS_TM9-15_SOURCE_CHUNKS.md`
- Data project React di `C:\cek\src\data\perpajakan\` tidak disentuh.

Semua file di folder ini hanya **copy** — aman untuk dihapus kalau sudah selesai diupload ke NotebookLM.
