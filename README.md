# E-Learning S1 Akuntansi — FEB UNAIR

Website pribadi untuk mengarsipkan & mempelajari materi kuliah Akuntansi
(Semester 1 → akhir). Dibangun dengan **React + TypeScript + Vite + Tailwind CSS**.
Tanpa backend / database — semua data ada di `src/data/courseData.ts` dan
progres belajar disimpan di **localStorage** browser.

Data kurikulum (kode mata kuliah, SKS, prasyarat) mengacu pada
*Buku Panduan Pendidikan Program Sarjana FEB UNAIR 2025/2026* — Program Studi S1 Akuntansi.

## Fitur
- Home, pilih semester, daftar mata kuliah, detail mata kuliah
- Materi TM 1–7, UTS, TM 8–14, UAS, Bank Soal, Quiz, Referensi, Flashcard
- **Search** mata kuliah & materi
- **Checklist "sudah dipelajari"** (localStorage) + progress bar per mata kuliah
- **Tombol "Buka di Google Drive"** untuk tiap materi & folder mata kuliah
- Flashcard 3D (hover di desktop / ketuk di mobile)

## Menjalankan di laptop (dari awal)

1. **Pasang Node.js** versi 20.11+ (disarankan LTS) dari https://nodejs.org
   Cek: `node -v` dan `npm -v`.
2. Buka folder project di terminal, lalu pasang dependensi:
   ```bash
   npm install
   ```
3. Jalankan mode pengembangan (auto-reload):
   ```bash
   npm run dev
   ```
   Buka alamat yang muncul (biasanya http://localhost:5173).
4. Build versi produksi (opsional):
   ```bash
   npm run build      # hasil ada di folder dist/
   npm run preview    # mencoba hasil build secara lokal
   ```

## Cara mengisi materi & link Drive
Buka `src/data/courseData.ts`:
- Ganti konstanta `DRIVE_PLACEHOLDER` dengan link Google Drive milikmu.
- Tambah/ubah item pada `materiTM1_7`, `materiTM8_14`, atau `flashcards`.
- Membuka semester yang terkunci: ubah `locked: true` → `false` dan isi `groups`.

> Tips: agar link Drive bisa dibuka siapa saja, set sharing folder/file ke
> "Anyone with the link → Viewer".

## Struktur folder
```
e-learning-akuntansi/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ tsconfig.node.json
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ index.css
   ├─ types.ts
   ├─ lib/
   │  └─ icons.tsx
   ├─ hooks/
   │  └─ useStudyProgress.ts
   ├─ data/
   │  ├─ courseData.ts
   │  └─ readings/
   │     ├─ index.ts        # registry rangkuman "Baca"
   │     ├─ akk201.ts       # AKM I (TM 1–14) — teori, laporan, builder
   │     └─ akm201.ts       # Akuntansi Biaya (TM 1–14)
   └─ components/
      ├─ Navbar.tsx
      ├─ MegaMenu.tsx
      ├─ SearchBar.tsx
      ├─ HomeView.tsx
      ├─ SemesterView.tsx
      ├─ CourseDetailView.tsx
      ├─ MateriList.tsx
      ├─ ReadingView.tsx       # halaman "Baca"
      ├─ StatementBuilder.tsx  # laporan penuh + laporan isian interaktif
      └─ FlashcardContent.tsx
```

## Laporan interaktif (StatementBuilder)
Blok `statement` menampilkan **laporan penuh** (read-only, header 3 baris).
Blok `builder` menampilkan **laporan isian**: user mengetik angka, subtotal/total
dihitung otomatis, lalu bisa **Periksa**, **Lihat kunci**, dan **Reset**.
Baris `computed` menjumlah baris lain via `compute: [{id, sign}]`.

## Menambah rangkuman "Baca" untuk mata kuliah lain
Pola AKK201 bisa dipakai ulang:
1. Buat file `src/data/readings/<kode>.ts` berisi `export const <KODE>_READINGS: Record<number, Reading> = { 1: {...}, ... }`.
2. Daftarkan di `src/data/readings/index.ts` pada objek `REGISTRY`.
3. Selesai — tombol **Baca** otomatis aktif untuk TM yang punya konten.

## Catatan Redesign UI 2026
Versi ini sudah diperbarui agar lebih nyaman dibaca dan tidak monoton:
- Palet warna dibuat lebih lembut dengan light/dark mode berbasis preferensi sistem.
- Beranda diganti menjadi hero edukatif dengan dashboard preview, statistik aktif, dan kartu semester yang lebih jelas.
- Navbar, mega menu, search, sidebar mata kuliah, tab, dan kartu materi dibuat lebih konsisten menggunakan glass panel dan spacing yang lebih lapang.
- Build production memakai `base: './'`, sehingga folder `dist/` lebih aman dipakai di subfolder hosting atau dibuka langsung sebagai file statis.

Untuk mencoba cepat tanpa mode development, buka `dist/index.html` setelah mengekstrak ZIP.

## Batch 10 — AKM I UAS Website Simulator

Batch 10 menambahkan set **Simulasi UAS AKM I — Website Mode 2 Jam (80 Soal)** pada course **AKK201 / Akuntansi Keuangan Menengah I**.

Cakupan simulator mengikuti pola UAS website TM 8–14: cash and cash equivalents, bank reconciliation, petty cash, receivables, notes receivable, transfer of receivables, inventory ownership, inventory cost-basis, cost-flow assumptions, inventory errors, LCNRV/NRV, gross profit method, retail inventory method, dan inventory analysis.

Set simulator ini berjalan dalam mode ujian 2 jam melalui timer Batch 9. Pembahasan dan skor tetap terkunci sampai mahasiswa melakukan submit atau waktu habis.

## Final Release — Perpajakan I (PJK201)

Rilis final ini menambahkan Perpajakan I sebagai mata kuliah terpisah tanpa mengubah data khusus AKM I/AKK201 dan AKBI/AKM201. Cakupan PJK201 meliputi materi Pra-UTS TM 1–7 dan Pra-UAS TM 8–14, reading UX untuk materi hukum pajak, 98 flashcard gabungan, simulasi UTS 70 soal objektif campuran dengan timer 90 menit, 80 bank soal UAS berstatus generated-from-source, dan simulasi UAS 80 soal dengan timer 90 menit.

Sumber utama TM 8–14 adalah `Materi_Perpajakan_I_TM8-14_Kompilasi (2).md`. File bank soal asli `Simulasi_Soal_UAS_Perpajakan_I_TM8-14.md` sebanyak 145 butir tidak tersedia pada rangkaian batch ini, sehingga bank soal dan simulator UAS diberi penanda generated-from-source. Koreksi final mencakup tenggat Bea Meterai berdasarkan PMK 78/2024, catatan Putusan MK 19/PUU-XXII/2024 untuk mandi uap/spa, serta rujukan definisi penelitian pada Pasal 1 angka 30 UU KUP.

## PTE Batch 6.0.5 — All-Graph CSS Visibility and Overlay Closure

Validator grafik PTE kini merender seluruh 25 fixture melalui React DOM. Test menolak penyembunyian melalui atribut, class Tailwind, inline style, dan computed style. Mutation renderer berjalan pada project root temporer, sementara overlay rect, percentage rect, polygon, path, dan ellipse diuji tanpa mengandalkan fingerprint.
