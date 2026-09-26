# HANDOFF: Manajemen Keuangan (MNK201) — Rekonstruksi & Audit Pra-UTS (TM 1–7 & TM 8)

Ditulis untuk **Codex** (atau agen / kolaborator berikutnya) pada repo `muhabyan/Akuntansi_UNAIR`.
Dokumen ini bersifat *self-contained* (berdiri sendiri) agar Codex dapat langsung memahami konteks, pekerjaan yang telah diselesaikan, bug yang telah diperbaiki, serta status file di *working copy* tanpa harus membaca riwayat obrolan sebelumnya.

---

## 0. Panduan Singkat (Read This First)

- **Repo**: `C:\cek`, remote `muhabyan/Akuntansi_UNAIR`, branch aktif: `main`.
- **Fokus Materi Saat Ini**: Manajemen Keuangan (MNK201) persiapan **Ujian Tengah Semester (UTS)** Akuntansi FEB Universitas Airlangga.
- **Cakupan Topik**:
  - TM 1: Tinjauan Manajemen Keuangan, Teori Keagenan (*Agency Theory*), & Bentuk Badan Usaha
  - TM 2: Analisis Laporan Keuangan, Rasio Keuangan, & Sistem DuPont 3-Way / 5-Way
  - TM 3: Nilai Waktu dari Uang (*Time Value of Money* / TVM), Anuitas, Perpetuitas, & Skedul Amortisasi Pinjaman
  - TM 4: Risiko dan Tingkat Pengembalian (*Risk & Return*), Portofolio, Koefisien Beta, Garis SML & CAPM
  - TM 5: Biaya Modal (*Cost of Capital* / WACC), Biaya Utang Setelah Pajak, Biaya Saham Preferen, Biaya Laba Ditahan, & *Breakpoint*
  - TM 6: Penganggaran Modal (*Capital Budgeting*), 5 Kriteria Evaluasi (NPV, IRR, MIRR, Payback, Discounted Payback), & *Crossover Rate*
  - TM 7: Estimasi Arus Kas Proyek 3 Babak (*Initial Outlay*, OCF, TCF), *Depreciation Tax Shield*, Pemulihan Modal Kerja 100% (*NWC Recovery*), & Analisis Risiko (*Sensitivitas, Skenario*)
  - TM 8: *Review Pra-UTS & Master Cheatsheet Rumus Emas*
- **Aturan Git Penting**:
  - **JANGAN PERNAH** menjalankan `git add -A` atau `git add .`. Selalu stage file secara eksplisit per path.
  - File handoff ini (`HANDOFF_MNK201.md`) diletakkan di root repo sebagai panduan kerja.

---

## 1. Masalah / Bug yang Ditemukan & Solusi yang Diterapkan

Sebelumnya, pengujian guard renderer `node scripts/test-render-s1.mjs` mengalami 25+ kegagalan di modul Manajemen Keuangan (`MNK201`). Semua masalah tersebut telah diidentifikasi dan diperbaiki 100%:

### a. Konflik Karakter Mata Uang (`$`) dengan Delimiter Math LaTeX (Accidental Math)
- **Gejala**: Parser markdown KaTeX mendeteksi tanda dolar mata uang (seperti `$1.000` dan `$1.150`) sebagai pembuka dan penutup matematika LaTeX, sehingga memicu error `accidental math from currency "$"`.
- **Perbaikan**:
  - `src/data/mankeu/modules/tm4.ts`: Simbol mata uang `$1.000` dan `$1.150` pada contoh pengembalian investasi dan soal asistensi 4 diubah menjadi format nominal Rupiah yang bersih (`Rp 1.000` dan `Rp 1.150`).
  - `src/data/mankeu/modules/tm5.ts`: Dividen saham preferen `$10` dan harga pasar `$100` diubah menjadi `Rp 10` dan `Rp 100`.
  - `src/data/mankeu/modules/tm6.ts`: Menghapus penulisan `\$` di dalam ekspresi LaTeX blok formula matematika (`$$ ... = 10.966,01$$`, `+966,01`, `+135,26`) pada soal *Project S vs Project L* dan *Project X vs Project Y*.
  - `src/data/mankeu/modules/tm8.ts`: Formula modal awal `$CF_0 = -10.000$` dan arus kas anuitas `$4.000$` pada Soal Integrasi 2 WACC-Capital Budgeting dibersihkan dari simbol `\$`.

### b. Karakter KaTeX yang Belum Diescape
- **Gejala**: KaTeX melempar `ParseError: Expected 'EOF', got '&'` dan `Unexpected end of input in a macro argument`.
- **Perbaikan**:
  - `src/data/mankeu/modules/tm7.ts`:
    - Mengganti `\text{Biaya Angkut & Instalasi}` menjadi `\text{Biaya Angkut dan Instalasi}` karena simbol `&` tanpa escape dianggap sebagai pemisah kolom tab pada KaTeX.
    - Meng-escape tanda persen pada `\text{Pengembalian 100\% Modal Kerja}` karena tanda `%` diartikan sebagai awal komentar LaTeX sebaris, sehingga kurung kurawal tutup `}` terabaikan dan merusak pohon parser.
  - `src/data/mankeu/modules/tm8.ts`: Meng-escape persen pada formula tabel `\text{ (100\% Recovery)}`.

### c. Unescaped Backslash pada String Literal TypeScript
- **Gejala**: Backslash tunggal pada string TypeScript menyebabkan huruf Yunani KaTeX berubah menjadi karakter kontrol ASCII (`\rho` $\to$ `\r` carriage return, `\beta` $\to$ `\b` backspace, `\to` $\to$ `\t` tab), memicu parse error.
- **Perbaikan**:
  - `src/data/mankeu/modules/tm4.ts`: Memperbaiki `\rho`, `\beta`, dan `\to` menjadi `\\rho`, `\\beta`, dan `\\to`.

### d. Konstanta Test Fixture di QuizView
- **Gejala**: `node scripts/validate-pte-simulator.mjs` gagal karena mengharapkan export konstanta tertentu di `QuizView.tsx`.
- **Perbaikan**:
  - `src/components/QuizView.tsx`: Menambahkan kembali ekspor konstanta `TIMED_EXAM_SETS` dan `SESSION_VERSIONS` (yang sebelumnya sempat terhapus saat refactor UI revert).

---

## 2. Perombakan Gaya Bahasa & Pedagogi (Anti "AI-Generated Tone")

User secara eksplisit meminta penjelasan **"jangan AI generated"**. Modul MNK201 telah diselaraskan dengan standar asisten dosen / tutor senior Akuntansi FEB UNAIR:

1. **Menghilangkan Jargon Kaku Generator AI**: Menghapus kata-kata klise robot seperti *arsitektur finansial, paradigma komprehensif, instrumen mitigasi inheren, diagnostik holistik*.
2. **Menambahkan Analogi Dunia Nyata yang Intuitif**:
   - *TM 4 (Korelasi Portofolio)*: Analogi pedagang payung hujan vs pedagang kacamata hitam yang saling mengompensasi risiko di musim berbeda.
   - *TM 7 (Tax Shield)*: Analogi subsidi potongan pajak di mana kantor pajak seolah-olah ikut patungan membiayai depresiasi mesin.
   - *TM 3 (Amortisasi)*: Mengapa cicilan awal didominasi porsi bunga, sedangkan cicilan akhir didominasi pokok utang.
3. **Format Perhitungan Langkah demi Langkah**:
   - `Diketahui Data Soal` $\to$ `Rumus Utama` $\to$ `Substitusi Angka Eksak` $\to$ `Hasil Perhitungan` $\to$ `Makna Finansial & Keputusan Manajerial`.
4. **Kotak "Jebakan Klasik Ujian" (Exam Traps)**:
   - Ditempatkan di setiap modul TM untuk mengingatkan trik soal dosen yang paling sering mengecoh mahasiswa di UTS (misal: *Market Return* vs *Market Risk Premium*, proyek *Independent* vs *Mutually Exclusive*, larangan memasukkan beban bunga ke dalam OCF, dll.).

---

## 3. Status Paket Belajar MNK201 (Pra-UTS)

Semua konten tersimpan pada lokasi file berikut:

| Komponen | Lokasi File | Rincian |
| :--- | :--- | :--- |
| **Reading Modules** | `src/data/mankeu/modules/tm1.ts` s.d. `tm8.ts` | TM 1–7 modul materi & kasus asistensi + TM 8 cheatsheet rumus Pra-UTS |
| **Data Registry** | `src/data/mankeu/mankeuData.ts` | Pemetaan `MNK201_READINGS` (1–14) dan `MNK201_REVIEW_READINGS` (`uts` $\to$ TM 8) |
| **Kuis UTS** | `src/data/quizzes/mnk201.ts` (`MNK201_QUIZ_UTS`) | **35 Soal Pilihan Ganda** (tepat 5 soal per TM untuk TM 1 s.d. TM 7) lengkap dengan pembahasan numerik |
| **Flashcard UTS** | `src/data/flashcards/mnk201.ts` (`MNK201_FC`) | **42 Kartu Hafalan** (tepat 6 kartu per TM untuk TM 1 s.d. TM 7) mencakup rumus dan konsep kunci |
| **Bank Soal Kasus** | `src/data/banksoal/mnk201.ts` (`MNK201_BANK_UTS`) | **7 Studi Kasus Esai Komprehensif** (1 kasus per TM) berbasis konteks perusahaan riil Indonesia |

---

## 4. Status Working Copy Git Saat Ini

File-file yang saat ini mengalami perubahan di working tree (belum di-commit):

```text
 M src/components/QuizView.tsx
 M src/data/mankeu/modules/tm1.ts
 M src/data/mankeu/modules/tm2.ts
 M src/data/mankeu/modules/tm4.ts
 M src/data/mankeu/modules/tm5.ts
 M src/data/mankeu/modules/tm6.ts
 M src/data/mankeu/modules/tm7.ts
 M src/data/mankeu/modules/tm8.ts
```

---

## 5. Verifikasi & Cara Menjalankan Uji Kualitas

Pastikan menjalankan perintah berikut sebelum commit atau release baru:

1. **Uji Render S1 Guard (KaTeX & Markdown parser untuk 28 mata kuliah)**:
   ```bash
   node scripts/test-render-s1.mjs
   # Expected output: test-render-s1: OK (28 courses, 36427 strings)
   ```

2. **Uji PTE Simulator Validation**:
   ```bash
   node scripts/validate-pte-simulator.mjs
   # Expected output: PTE simulator validation passed: UTS 70, UAS 80 ...
   ```

3. **Uji Typecheck & Build Bundle Vite**:
   ```bash
   npm run build
   # Expected output: built in ~4-7s, dist/sw.js and workbox generated cleanly
   ```
