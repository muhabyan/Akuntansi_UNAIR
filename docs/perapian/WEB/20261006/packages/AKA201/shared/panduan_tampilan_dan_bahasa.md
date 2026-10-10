# AKA201: Panduan Tampilan dan Bahasa

**Untuk siapa:** agen coding yang mengimplementasikan AKA201 ke AkuntansiHub.
**Tujuan:** mahasiswa bisa fokus, tidak kewalahan, dan paham fundamentalnya. Setiap TM sekarang 14–24 menit baca kalau ditampilkan mentah, dan itu terlalu berat untuk satu halaman panjang. **Jangan menempel isi 05 apa adanya.** Susun ulang tampilannya dengan aturan di bawah, tanpa mengubah substansi.

Design system yang sudah ada di repo tetap menjadi acuan utama (warna, font, komponen callout, label Interpretasi, tombol). Aturan di sini mengatur **struktur dan kepadatan**, bukan identitas visual.

---

## 1. Lapisan bacaan

Setiap halaman TM disusun dalam empat lapis, dari yang paling ringan:

| Lapis | Isi (sumber di 05) | Tampilan default |
|---|---|---|
| **1. Pintu masuk** | Judul, tujuan belajar (maks. 5 poin), perkiraan waktu baca, tombol "Mulai dari Fondasi" | Selalu terlihat |
| **2. Fondasi** | Section 0 beserta tabel "Kesalahpahaman umum". Catatan pembuka TM (misalnya "Perhatikan", "Catatan sumber", "Kabar baik") ditaruh di dalam Fondasi, tepat setelah Intinya | Selalu terlihat, dengan penanda visual yang tenang |
| **3. Isi utama** | Section 1 sampai N. Setiap section dibuka dengan blok `> **Intinya:**` | Terlihat. Setiap section adalah kartu terpisah, dan kalimat "Intinya" tampil paling atas dengan penekanan |
| **4. Pendalaman** | Blok di antara `<!-- pendalaman:start judul="..." -->` dan `<!-- pendalaman:end -->` | **Tertutup**, dengan tombol "Buka pendalaman: {judul}" |
| **5. Latihan** | Kasus latihan, Uji pemahaman, Exam toolkit | Pertanyaan terlihat; **pembahasan dan contoh jawaban tersembunyi** di balik tombol "Lihat pembahasan" |

Blok `> **Intinya:**` dan penanda pendalaman sudah dipasang di file 05. Jangan menambah atau menghapus penanda tanpa mencatatnya di laporan PR.

---

## 2. Aturan kepadatan

- **Satu layar, satu ide.** Di layar ponsel (390 px), usahakan tidak ada lebih dari satu tabel atau satu callout yang terlihat sekaligus.
- **Paragraf maksimal kira-kira 4 baris di ponsel.** Jangan memotong kalimat di dalam file sumber; cukup atur jarak dan lebar teks.
- **Lebar teks 60–75 karakter di desktop**, tinggi baris 1,6–1,7.
- **Tebal (bold) seperlunya.** File 05 sudah memakai bold untuk kata kunci; jangan menambah penekanan lain seperti warna teks atau garis bawah.
- **Hierarki callout maksimal empat jenis**, dengan gaya yang berbeda jelas (keputusan setelah Phase 1, hanya berlaku di layout `layered`; mata kuliah lain tidak berubah):
  1. **Intinya** (`gist`): kotak berlatar tipis dengan label kecil "Intinya:", harus terlihat berbeda dari kutipan "Definisi"; tetap tenang dan tidak mencolok.
  2. **Jebakan ujian**: warning (amber).
  3. **Interpretasi / Perbandingan**: info (sky), dengan label "Interpretasi" atau "Perbandingan". Jangan amber, supaya tidak tertukar dengan Jebakan ujian.
  4. **Catatan** (`note`): abu-abu dan paling tenang.
- **Pemetaan label di file 05:**
  - Tier 3 (Interpretasi/Perbandingan): "Interpretasi", "Label Perbandingan", "Perbandingan", "Beda pengelompokan".
  - Tier 4 (Catatan): "Catatan sumber", "Catatan cakupan", "Perhatikan", "Perhatikan sebelum membaca", "Kabar baik", "Versi lama vs versi berlaku", "Praktik yang dikritik".
  - Bukan callout: "Definisi" dan "Aturannya" dirender sebagai kutipan menjorok biasa.
- **Semua tabel di ponsel** dirender sebagai kartu bertumpuk (satu baris tabel = satu kartu); desktop tetap tabel biasa. Kolom pertama selalu menjadi judul kartu tanpa label; label kolom lain ditulis dengan huruf biasa (bukan kapital semua), kecil, dan redup.
- **Gambar, diagram, dan infografis** harus bertulisan minimal 12px saat dilihat di layar 390px, dan tidak boleh membuat halaman bergeser ke samping. Jika tidak bisa memenuhi dua syarat itu, ganti dengan tabel atau kartu. (Aturan ini ditambahkan setelah infografis lama TM2 terukur hanya 4,8px di ponsel.)
- **Tombol melayang** (tombol situs dan "Kembali ke atas") tidak boleh menutupi teks di posisi gulir mana pun; halaman layered diberi ruang bawah yang cukup.
- **Satu ukuran teks bacaan** untuk semua isi layered (paragraf, callout, kartu, soal latihan). Hanya pernyataan sumber yang memakai gaya kecil dan redup.
- **Kutipan sumber** seperti `(ARENS p.8)` dan baris `*Sumber: ...*` dirender kecil dan redup (chip atau teks sekunder), tidak boleh bersaing dengan isi.
- **Tidak ada dinding teks.** Jika sebuah section tetap terasa panjang di ponsel, laporkan di PR; jangan memotong isinya sendiri.

---

## 3. Navigasi dan orientasi

- **Daftar isi ringkas** di awal halaman (judul section saja), dan penanda posisi (progress) saat menggulir.
- **Perkiraan waktu baca** per TM dihitung dari lapis 2 dan 3 saja (pendalaman dan latihan tidak dihitung), dengan kecepatan sekitar 180 kata per menit.
- **Tombol "Kembali ke atas"** di ponsel.
- Halaman `shared` (Benang Merah, Panduan Menjawab Kasus, Latihan Skenario UTS, Latihan Penyelesaian Masalah) ditautkan dari halaman mata kuliah sebagai **"Persiapan UTS"**, dengan urutan: Benang Merah → Panduan Menjawab Kasus → Latihan Skenario UTS.

---

## 4. Latihan: paksa menjawab sendiri dulu

- **Uji pemahaman**: tampilkan pertanyaan beserta kotak "Tulis jawabanmu dulu" (tidak perlu disimpan ke server; cukup state lokal). Tombol "Lihat contoh jawaban" baru aktif setelah kotak diisi minimal beberapa kata, atau setelah pengguna menekan "Saya sudah mencoba". "Tanda belum paham" tampil setelah contoh jawaban.
- **Kasus latihan** dan **skenario UTS**: pembahasan tersembunyi. Di skenario UTS, "Batas Developing" dan "Tambahan Proficient" tampil sebagai dua blok berbeda setelah pembahasan dibuka.
- **Kuis dan flashcard** memakai komponen yang sudah ada.

---

## 5. Bahasa

- **Isi dari 04/05 tidak boleh ditulis ulang** oleh agen coding. Bahasanya sudah disederhanakan dan setiap kalimat terikat ke sumber. Yang boleh dilakukan hanya transformasi tampilan: memecah tabel menjadi kartu, membuat blok bisa dibuka-tutup, memindahkan kutipan sumber ke chip.
- **Teks antarmuka yang ditulis agen** (label tombol, judul kartu, teks kosong, petunjuk) memakai bahasa Indonesia sehari-hari yang pendek. Contoh yang baik: "Lihat pembahasan", "Buka pendalaman", "Tulis jawabanmu dulu", "Lanjut ke section berikutnya". Hindari: "Tampilkan elaborasi komprehensif", "Eksplorasi lebih lanjut".
- Istilah teknis tetap bahasa Inggris sesuai file sumber (misalnya *occurrence*, *materiality*), karena itu preferensi penulis materi dan istilah yang dipakai buku.
- Jika agen menemukan kalimat di 05 yang menurutnya sulit dipahami, **catat di laporan PR** (TM, section, kalimat). Jangan diubah sendiri.

---

## 6. Pengecekan visual wajib (pilot TM01)

Sebelum TM02–TM07 dikerjakan, TM01 dan satu halaman `shared` (Panduan Menjawab Kasus) harus lolos pengecekan ini:

- [ ] Tangkapan layar ponsel (390 px) dan desktop (1280 px), mode terang dan gelap.
- [ ] Di ponsel, layar pertama hanya berisi pintu masuk dan awal Fondasi, tanpa tabel.
- [ ] Semua blok pendalaman tertutup secara default dan bisa dibuka.
- [ ] Semua contoh jawaban dan pembahasan tersembunyi secara default.
- [ ] Tidak ada tabel yang membuat halaman bergeser horizontal di ponsel.
- [ ] Kutipan sumber tampil kecil dan redup.
- [ ] Perkiraan waktu baca tampil dan masuk akal (lapis 2 dan 3 saja).
- [ ] Tidak ada kalimat di 05 yang berubah (bandingkan teks yang dirender dengan sumber).
