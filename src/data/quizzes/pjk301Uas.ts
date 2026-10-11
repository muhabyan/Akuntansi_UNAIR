import type { QuizQuestion } from '../../types';

export const PJK301_QUIZ_UAS: QuizQuestion[] = [
  {
    "id": "pjk301-uas-v3-tm09-01",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "ter",
    "sourceRef": "PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Januari 2024, pegawai K/0 bergaji bruto Rp10.000.000 dan membayar iuran pensiun Rp100.000. TER A untuk bruto ini 2%. Berapa potongan bulan ini? Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23.",
    "options": [
      "Rp250.000",
      "Rp198.000",
      "Rp200.000",
      "Rp226.250"
    ],
    "answer": 2,
    "explanation": "TER diterapkan atas bruto tanpa pengurangan biaya jabatan atau iuran pensiun pada masa ini: 2% × Rp10.000.000 = Rp200.000. Iuran diperhitungkan saat masa terakhir. Satuan rupiah; hasil bulat sehingga pembulatan tidak mengubah nilai. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23."
  },
  {
    "id": "pjk301-uas-v3-tm09-02",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "ter",
    "sourceRef": "PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Januari 2024, perusahaan menjanjikan gaji bersih Rp10.000.000 setelah PPh 21 saja. Tunjangan pajak menambah bruto. TER A 2% berlaku sampai Rp10.050.000; TER 2,25% untuk bruto di atas Rp10.050.000 sampai Rp10.350.000. Berapa bruto dengan gross-up, yaitu tunjangan pajak agar gaji bersih terpenuhi? Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23.",
    "options": [
      "Rp10.230.179",
      "Rp10.350.000",
      "Rp10.200.000",
      "Rp10.204.082"
    ],
    "answer": 0,
    "explanation": "Uji 2%: Rp10.000.000/(1 - 0,02) = Rp10.204.081,63, keluar dari lapisan 2%. Uji 2,25%: bruto = Rp10.000.000/0,9775 = Rp10.230.179,03, berada dalam lapisan yang benar. Bruto dan potongan Rp230.179 dibulatkan ke rupiah terdekat untuk simulasi; bersih Rp10.000.000. Gross-up perlu pengujian kembali lapisan TER. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23."
  },
  {
    "id": "pjk301-uas-v3-tm09-03",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "last",
    "sourceRef": "PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2)",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Pegawai SPDN sejak Januari berhenti pada Juni 2024 dan tetap tinggal di Indonesia. Bruto Januari-Juni Rp60.000.000, tanpa iuran pensiun, TK/0. Potongan Januari-Mei Rp1.000.000. Berapa pengembalian lebih potong pada Juni? Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2).",
    "options": [
      "Rp1.000.000",
      "Rp150.000",
      "Rp700.000",
      "Rp850.000"
    ],
    "answer": 3,
    "explanation": "Kewajiban subjektif tetap ada, sehingga penghasilan aktual enam bulan tidak disetahunkan. Biaya jabatan min(5% × Rp60.000.000, 6 × Rp500.000) = Rp3.000.000. Neto Rp57.000.000, PTKP Rp54.000.000, PKP Rp3.000.000. PPh = 5% × Rp3.000.000 = Rp150.000. Masa terakhir Juni: Rp150.000 - Rp1.000.000 = minus Rp850.000, dikembalikan. PKP ribuan penuh; seluruh hasil rupiah bulat. Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2)."
  },
  {
    "id": "pjk301-uas-v3-tm09-04",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "natura",
    "sourceRef": "PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Januari 2024, pegawai TK/0 bergaji Rp10.000.000 mendapat apartemen individual senilai Rp4.000.000 per bulan dan makan bersama seluruh pegawai Rp1.000.000. TER A bruto Rp12.000.000 adalah 4%. Berapa PPh 21? Rujukan: PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen.",
    "options": [
      "Rp440.000",
      "Rp480.000",
      "Rp600.000",
      "Rp400.000"
    ],
    "answer": 1,
    "explanation": "Apartemen individual: nilai kena pajak = Rp4.000.000 - batas Rp2.000.000 = Rp2.000.000. Makan bersama seluruh pegawai dikecualikan. Bruto objek = Rp10.000.000 + Rp2.000.000 = Rp12.000.000. Potongan = 4% × Rp12.000.000 = Rp480.000. Nilai rupiah bulat; tidak ada pembulatan tambahan. Rujukan: PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen."
  },
  {
    "id": "pjk301-uas-v3-tm09-05",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "natura",
    "sourceRef": "PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Selama 2024 pegawai menerima bingkisan ulang tahun senilai Rp4.000.000 dan bingkisan Idulfitri Rp2.000.000 yang diberikan kepada seluruh pegawai. Berapa natura kena pajak dari kedua jenis bingkisan? Rujukan: PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen.",
    "options": [
      "Rp6.000.000",
      "Rp0",
      "Rp1.000.000",
      "Rp3.000.000"
    ],
    "answer": 2,
    "explanation": "Bingkisan hari raya keagamaan untuk seluruh pegawai dikecualikan. Bingkisan di luar hari raya memiliki batas Rp3.000.000 per pegawai per tahun. Selisih kena pajak = Rp4.000.000 - Rp3.000.000 = Rp1.000.000. Batas tahunan tidak diterapkan ulang pada setiap pemberian. Rupiah bulat. Rujukan: PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen."
  },
  {
    "id": "pjk301-uas-v3-tm09-06",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "vehicle",
    "sourceRef": "PMK 66/2023, halaman PDF 22, Lampiran A angka 8; halaman PDF 48-49, contoh kendaraan",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Maret 2024, nilai fasilitas mobil Rp3.000.000. Pegawai tanpa saham pada pemberi kerja memiliki rata-rata bruto 12 bulan terakhir, termasuk fasilitas, tepat Rp100.000.000 per bulan. Berapa bagian fasilitas mobil yang menjadi objek PPh? Rujukan: PMK 66/2023, halaman PDF 22, Lampiran A angka 8; halaman PDF 48-49, contoh kendaraan.",
    "options": [
      "Rp0",
      "Rp1.000.000",
      "Rp1.500.000",
      "Rp3.000.000"
    ],
    "answer": 0,
    "explanation": "Lampiran A angka 8 mensyaratkan tanpa penyertaan modal dan rata-rata bruto sampai dengan Rp100.000.000 per bulan. Nilai tepat pada batas memenuhi syarat, sehingga seluruh fasilitas dikecualikan dan objek Rp0. Ambang ini berbeda dari angka Rp30 juta yang pernah muncul pada materi lama. Tidak ada pembulatan. Rujukan: PMK 66/2023, halaman PDF 22, Lampiran A angka 8; halaman PDF 48-49, contoh kendaraan."
  },
  {
    "id": "pjk301-uas-v3-tm09-07",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "natura",
    "sourceRef": "PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Mei 2024, gaji Rp12.000.000, apartemen individual Rp4.000.000, serta laptop kerja Rp15.000.000 yang menunjang pekerjaan. TER A atas bruto Rp14.000.000 adalah 6%. Berapa PPh 21? Rujukan: PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen.",
    "options": [
      "Rp960.000",
      "Rp1.860.000",
      "Rp720.000",
      "Rp840.000"
    ],
    "answer": 3,
    "explanation": "Laptop yang menunjang pekerjaan memenuhi pengecualian. Apartemen kena pajak Rp4.000.000 - Rp2.000.000 = Rp2.000.000. Bruto objek Rp14.000.000; potongan = 6% × Rp14.000.000 = Rp840.000. Batas fasilitas dinilai sebelum memilih TER. Rupiah bulat. Rujukan: PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen."
  },
  {
    "id": "pjk301-uas-v3-tm09-08",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "26",
    "sourceRef": "PMK 168/2023, halaman PDF 15, Pasal 14 ayat (1)-(3)",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Pada 2024 seorang konsultan OP SPLN menerima honor bruto Rp250.000.000 dari Indonesia. Tidak ada fasilitas P3B dan ia tetap SPLN. Berapa PPh 26 sehubungan dengan jasa? Rujukan: PMK 168/2023, halaman PDF 15, Pasal 14 ayat (1)-(3).",
    "options": [
      "Rp37.500.000",
      "Rp50.000.000",
      "Rp12.500.000",
      "Rp25.000.000"
    ],
    "answer": 1,
    "explanation": "Tanpa penerapan P3B, tarif domestik 20% dikenakan atas seluruh bruto: 20% × Rp250.000.000 = Rp50.000.000, bersifat final selama status SPLN tetap. Dasar 50% untuk jasa bukan pegawai SPDN tidak dipakai. Satuan rupiah; hasil bulat. Rujukan: PMK 168/2023, halaman PDF 15, Pasal 14 ayat (1)-(3)."
  },
  {
    "id": "pjk301-uas-v3-tm09-09",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "pph21",
    "sourceRef": "PMK 168/2023, halaman PDF 10-17, Pasal 8-16",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "Awal 2024 karyawati kawin bekerja, suami berpenghasilan, dan tanggungan keluarga diklaim suami. Bagaimana PTKP karyawati dalam pemotongan PPh 21? Rujukan: PMK 168/2023, halaman PDF 10-17, Pasal 8-16.",
    "options": [
      "PTKP Rp63.000.000; kategori TER B",
      "PTKP Rp72.000.000; kategori TER C",
      "PTKP Rp54.000.000; kategori TER A",
      "PTKP Rp58.500.000; kategori TER A"
    ],
    "answer": 2,
    "explanation": "PMK 168/2023 Pasal 9 ayat (2) menetapkan PTKP karyawati kawin untuk dirinya sendiri. Tambahan kawin dan tanggungan memerlukan kondisi suami tanpa penghasilan serta keterangan yang dipersyaratkan ayat (3). Dalam data ini PTKP Rp54.000.000, setara TK/0, TER A. Rujukan: PMK 168/2023, halaman PDF 10-17, Pasal 8-16."
  },
  {
    "id": "pjk301-uas-v3-tm09-10",
    "tm": 9,
    "topic": "Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "medium",
    "skill": "admin",
    "sourceRef": "PMK 81/2024, halaman PDF 78-79 dan 138-139, Pasal 94 ayat (2) dan Pasal 171",
    "sourceAnchors": [
      "TM09"
    ],
    "q": "PPh 21 Masa Mei 2025 dibayar melalui pemotong perusahaan biasa. Abaikan hari libur dan tidak ada relaksasi khusus. Pasangan tenggat setor dan lapor yang benar? Rujukan: PMK 81/2024, halaman PDF 78-79 dan 138-139, Pasal 94 ayat (2) dan Pasal 171.",
    "options": [
      "Setor 15 Juni; lapor 20 Juni",
      "Setor 20 Juni; lapor 30 Juni",
      "Setor 30 Juni; lapor 15 Juli",
      "Setor 10 Juni; lapor 20 Juni"
    ],
    "answer": 0,
    "explanation": "Untuk masa 2025, PMK 81/2024 Pasal 94 ayat (2) menetapkan setor tanggal 15 bulan berikutnya dan Pasal 171 menetapkan lapor PPh masa tanggal 20. Masa Mei berarti 15 dan 20 Juni. Tenggat setor tanggal 10 pada aturan administrasi lama tidak digeser ke kasus 2025. Rujukan: PMK 81/2024, halaman PDF 78-79 dan 138-139, Pasal 94 ayat (2) dan Pasal 171."
  },
  {
    "id": "pjk301-uas-v3-tm10-01",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "last",
    "sourceRef": "PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2)",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Pegawai K/0 sepanjang 2024 memperoleh bruto Rp10.000.000 per bulan dan iuran pensiun sah Rp100.000 per bulan. TER A 2%, sudah dipotong Rp200.000 per bulan Januari-November. Berapa potongan Desember? Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2).",
    "options": [
      "Rp2.715.000",
      "Rp200.000",
      "Rp226.250",
      "Rp515.000"
    ],
    "answer": 3,
    "explanation": "Bruto setahun Rp120.000.000. Biaya jabatan min(5% × bruto, Rp6.000.000) = Rp6.000.000; iuran Rp1.200.000; neto Rp112.800.000. PTKP K/0 Rp58.500.000, PKP Rp54.300.000. PPh tahunan 5% × Rp54.300.000 = Rp2.715.000. Potongan terdahulu 11 × Rp200.000 = Rp2.200.000. Desember = Rp515.000. PKP ribuan penuh; hasil rupiah bulat. Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2)."
  },
  {
    "id": "pjk301-uas-v3-tm10-02",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "pph21",
    "sourceRef": "PMK 168/2023, halaman PDF 10-17, Pasal 8-16",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Pensiunan TK/0 sepanjang 2024 menerima pensiun berkala Rp6.000.000 per bulan, tanpa pengurang lain. Berapa PPh 21 setahun setelah biaya pensiun? Rujukan: PMK 168/2023, halaman PDF 10-17, Pasal 8-16.",
    "options": [
      "Rp600.000",
      "Rp780.000",
      "Rp855.000",
      "Rp900.000"
    ],
    "answer": 1,
    "explanation": "Bruto Rp72.000.000. Biaya pensiun = min(5% × Rp72.000.000, Rp2.400.000) = Rp2.400.000, berbeda dari batas biaya jabatan pegawai. Neto Rp69.600.000, PTKP Rp54.000.000, PKP Rp15.600.000. Tarif 5% menghasilkan Rp780.000. PKP ribuan penuh; satuan rupiah bulat. Rujukan: PMK 168/2023, halaman PDF 10-17, Pasal 8-16."
  },
  {
    "id": "pjk301-uas-v3-tm10-03",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "other",
    "sourceRef": "PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Pada Mei 2024 tenaga ahli SPDN tanpa hubungan pegawai menerima honor jasa Rp200.000.000, seluruhnya imbalan jasanya. Berapa PPh 21 yang dipotong? Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16.",
    "options": [
      "Rp24.000.000",
      "Rp5.000.000",
      "Rp9.000.000",
      "Rp15.000.000"
    ],
    "answer": 2,
    "explanation": "Dasar bukan pegawai = 50% × Rp200.000.000 = Rp100.000.000. Tarif Pasal 17 atas dasar tersebut: 5% × Rp60.000.000 + 15% × Rp40.000.000 = Rp3.000.000 + Rp6.000.000 = Rp9.000.000. PTKP tidak dikurangkan pada pemotongan jasa ini. Hasil rupiah bulat. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16."
  },
  {
    "id": "pjk301-uas-v3-tm10-04",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "daily",
    "sourceRef": "PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Februari 2024, pegawai tidak tetap menerima upah harian tepat Rp450.000, dibayar harian. Berapa PPh 21 per hari? Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18.",
    "options": [
      "Rp0",
      "Rp2.250",
      "Rp4.500",
      "Rp22.500"
    ],
    "answer": 0,
    "explanation": "Bruto harian sampai dengan Rp450.000 dikenai TER harian 0%. PPh = 0% × Rp450.000 = Rp0. Batas inklusif, sehingga nilai tepat Rp450.000 masuk tarif nol. Rupiah bulat. Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18."
  },
  {
    "id": "pjk301-uas-v3-tm10-05",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "daily",
    "sourceRef": "PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Februari 2024, pegawai tidak tetap menerima upah harian Rp600.000 dan dibayar harian. Berapa PPh 21 per hari? Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18.",
    "options": [
      "Rp7.500",
      "Rp750",
      "Rp1.500",
      "Rp3.000"
    ],
    "answer": 3,
    "explanation": "Bruto di atas Rp450.000 sampai Rp2.500.000 menggunakan TER harian 0,5% atas seluruh bruto. PPh = 0,5% × Rp600.000 = Rp3.000. Pengurangan Rp450.000 sebelum tarif merupakan kekeliruan memakai mekanisme lama. Rupiah bulat. Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18."
  },
  {
    "id": "pjk301-uas-v3-tm10-06",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "daily",
    "sourceRef": "PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Maret 2024, pegawai tidak tetap dibayar mingguan Rp3.000.000 untuk enam hari kerja. Berapa PPh 21 minggu itu? Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18.",
    "options": [
      "Rp7.500",
      "Rp15.000",
      "Rp75.000",
      "Rp1.500"
    ],
    "answer": 1,
    "explanation": "Rata-rata bruto sehari Rp3.000.000/6 = Rp500.000. TER harian 0,5% karena di atas Rp450.000 dan sampai Rp2.500.000. Pajak sehari Rp2.500; enam hari × Rp2.500 = Rp15.000. Pembayaran mingguan memerlukan rata-rata harian, bukan TER bulanan. Rupiah bulat. Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18."
  },
  {
    "id": "pjk301-uas-v3-tm10-07",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "other",
    "sourceRef": "PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "April 2024, pegawai tidak tetap dibayar harian Rp3.000.000 untuk satu hari. Berapa PPh 21 hari itu? Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16.",
    "options": [
      "Rp15.000",
      "Rp37.500",
      "Rp75.000",
      "Rp150.000"
    ],
    "answer": 2,
    "explanation": "Bruto sehari melampaui Rp2.500.000. Dasar = 50% × Rp3.000.000 = Rp1.500.000; tarif Pasal 17 5% menghasilkan Rp75.000. TER harian 0,5% tidak digunakan pada bruto di atas batas. Hasil rupiah bulat. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16."
  },
  {
    "id": "pjk301-uas-v3-tm10-08",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "other",
    "sourceRef": "PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Juni 2024, peserta lomba SPDN menerima hadiah kegiatan bruto Rp80.000.000. Berapa PPh 21 atas hadiah itu? Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16.",
    "options": [
      "Rp6.000.000",
      "Rp12.000.000",
      "Rp2.000.000",
      "Rp4.000.000"
    ],
    "answer": 0,
    "explanation": "Peserta kegiatan memakai tarif Pasal 17 atas bruto, berbeda dari dasar 50% jasa bukan pegawai. PPh = 5% × Rp60.000.000 + 15% × Rp20.000.000 = Rp6.000.000. Dasar tidak dikurangi PTKP. Rupiah bulat. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16."
  },
  {
    "id": "pjk301-uas-v3-tm10-09",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "pesangon",
    "sourceRef": "PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Pada 2024 uang pesangon Rp600.000.000 dibayar sekaligus. Berapa PPh 21 final? Rujukan: PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga).",
    "options": [
      "Rp150.000.000",
      "Rp30.000.000",
      "Rp62.500.000",
      "Rp87.500.000"
    ],
    "answer": 3,
    "explanation": "Lapisan PP 68/2009 Pasal 4: Rp50 juta pertama × 0%; Rp50 juta berikut × 5% = Rp2,5 juta; Rp400 juta berikut × 15% = Rp60 juta; Rp100 juta sisanya × 25% = Rp25 juta. Total Rp87.500.000. Tarif pesangon diterapkan per lapisan, tanpa PTKP. Rupiah bulat. Rujukan: PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)."
  },
  {
    "id": "pjk301-uas-v3-tm10-10",
    "tm": 10,
    "topic": "Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "advanced",
    "skill": "pesangon",
    "sourceRef": "PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)",
    "sourceAnchors": [
      "TM10"
    ],
    "q": "Pada 2024 manfaat pensiun Rp200.000.000 dibayarkan sekaligus oleh dana pensiun yang memenuhi syarat. Berapa PPh 21 final? Rujukan: PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga).",
    "options": [
      "Rp30.000.000",
      "Rp7.500.000",
      "Rp15.000.000",
      "Rp17.500.000"
    ],
    "answer": 1,
    "explanation": "PP 68/2009 Pasal 5: Rp50 juta pertama × 0%, sisanya Rp150 juta × 5% = Rp7.500.000. Pensiun sekaligus menggunakan dua lapisan tersendiri. Tarif pensiun berkala dan tarif pesangon tidak dipakai. Rupiah bulat. Rujukan: PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)."
  },
  {
    "id": "pjk301-uas-v3-tm11-01",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "recon",
    "sourceRef": "UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 badan rezim umum melaporkan laba sebelum pajak Rp2.500.000.000, denda pajak dan jamuan tanpa bukti sah Rp55.000.000, penyusutan fiskal lebih besar Rp60.000.000, bunga deposito final Rp50.000.000, dan dividen domestik nonobjek Rp80.000.000. Berapa PKP sebelum rugi? Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar).",
    "options": [
      "Rp2.690.000.000",
      "Rp2.310.000.000",
      "Rp2.365.000.000",
      "Rp2.500.000.000"
    ],
    "answer": 2,
    "explanation": "Laba sudah mencakup seluruh pos. Koreksi positif Rp55 juta untuk beban yang tidak memenuhi pengurangan. Koreksi negatif Rp60 juta selisih penyusutan + Rp50 juta penghasilan final + Rp80 juta dividen badan DN nonobjek = Rp190 juta. PKP = Rp2,5 miliar + Rp55 juta - Rp190 juta = Rp2.365.000.000. Hasil ribuan penuh, sehingga pembulatan PKP tidak mengubahnya. Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)."
  },
  {
    "id": "pjk301-uas-v3-tm11-02",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "31e",
    "sourceRef": "UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 badan DN rezim umum memiliki peredaran bruto total untuk Pasal 31E Rp20.000.000.000 dan PKP Rp2.365.000.000. Berapa PPh badan terutang? Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar).",
    "options": [
      "Rp457.864.000",
      "Rp473.000.000",
      "Rp520.300.000",
      "Rp260.150.000"
    ],
    "answer": 0,
    "explanation": "Porsi fasilitas = Rp4,8 miliar/Rp20 miliar × PKP = Rp567.600.000. Tarif fasilitas 50% × 22% = 11%, pajak Rp62.436.000. Sisanya Rp1.797.400.000 × 22% = Rp395.428.000. Total Rp457.864.000. Porsi fasilitas dihitung dari PKP, bukan langsung pajak atas omzet. Nilai rupiah bulat. Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)."
  },
  {
    "id": "pjk301-uas-v3-tm11-03",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "31e",
    "sourceRef": "UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 PPh badan terutang Rp457.864.000. Kredit nonfinal PPh 22 Rp25.000.000, PPh 23 Rp35.000.000, PPh 25 Rp180.000.000. Ada pula potongan final deposito Rp10.000.000. Berapa PPh Pasal 29? Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar).",
    "options": [
      "Rp397.864.000",
      "Rp457.864.000",
      "Rp207.864.000",
      "Rp217.864.000"
    ],
    "answer": 3,
    "explanation": "Kredit reguler Rp25 juta + Rp35 juta + Rp180 juta = Rp240 juta. Pajak final deposito tidak menjadi kredit reguler. PPh 29 = Rp457.864.000 - Rp240.000.000 = Rp217.864.000 kurang bayar. Satuan rupiah; tidak ada pembulatan tambahan. Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)."
  },
  {
    "id": "pjk301-uas-v3-tm11-04",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "op",
    "sourceRef": "UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 OP K/1 memakai NPPN secara sah. Bruto Rp900.000.000 dan norma untuk jenis usaha serta wilayah dalam kasus telah diverifikasi 40%. Tanpa pengurang lain. Berapa PPh tahunan? Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57.",
    "options": [
      "Rp37.500.000",
      "Rp43.250.000",
      "Rp60.000.000",
      "Rp29.250.000"
    ],
    "answer": 1,
    "explanation": "Neto norma = 40% × Rp900 juta = Rp360 juta. PTKP K/1 Rp54 juta + Rp4,5 juta + Rp4,5 juta = Rp63 juta. PKP Rp297 juta. PPh = 5% × Rp60 juta + 15% × Rp190 juta + 25% × Rp47 juta = Rp43.250.000. Norma 40% merupakan input kasus, tidak digeneralisasi untuk semua usaha. PKP ribuan penuh. Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57."
  },
  {
    "id": "pjk301-uas-v3-tm11-05",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "rate",
    "sourceRef": "UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 OP memiliki PKP sebelum pembulatan Rp338.765.900. Berapa PPh berdasarkan Pasal 17? Rujukan: UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh.",
    "options": [
      "Rp53.800.000",
      "Rp53.691.000",
      "Rp53.691.250",
      "Rp53.691.475"
    ],
    "answer": 2,
    "explanation": "PKP dibulatkan ke bawah menjadi Rp338.765.000. Pajak = 5% × Rp60 juta + 15% × Rp190 juta + 25% × Rp88.765.000 = Rp3 juta + Rp28,5 juta + Rp22.191.250 = Rp53.691.250. Pembulatan dilakukan pada PKP, tidak langsung membulatkan pajak menjadi ribuan rupiah. Rujukan: UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh."
  },
  {
    "id": "pjk301-uas-v3-tm11-06",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "31e",
    "sourceRef": "UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 badan DN rezim umum dengan peredaran bruto Rp4.000.000.000 mempunyai PKP Rp600.000.000. Berapa PPh setelah fasilitas 31E? Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar).",
    "options": [
      "Rp66.000.000",
      "Rp120.000.000",
      "Rp132.000.000",
      "Rp33.000.000"
    ],
    "answer": 0,
    "explanation": "Peredaran bruto sampai Rp4,8 miliar membuat seluruh PKP memperoleh pengurangan tarif 50%. Tarif efektif = 50% × 22% = 11%; PPh = 11% × Rp600 juta = Rp66.000.000. Kasus secara tegas memakai rezim umum, sehingga tarif final omzet tidak diterapkan. Rupiah bulat. Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)."
  },
  {
    "id": "pjk301-uas-v3-tm11-07",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "31e",
    "sourceRef": "UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 badan DN biasa, tanpa fasilitas khusus lain, memiliki peredaran bruto Rp60.000.000.000 dan PKP Rp1.000.000.000. Berapa PPh? Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar).",
    "options": [
      "Rp250.000.000",
      "Rp110.000.000",
      "Rp202.400.000",
      "Rp220.000.000"
    ],
    "answer": 3,
    "explanation": "Peredaran bruto melampaui Rp50 miliar, sehingga Pasal 31E tidak berlaku. Seluruh PKP bertarif umum 22%: Rp1 miliar × 22% = Rp220.000.000. Tidak ada porsi Rp4,8 miliar bertarif 11% pada kasus ini. Rupiah bulat. Rujukan: UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)."
  },
  {
    "id": "pjk301-uas-v3-tm11-08",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "op",
    "sourceRef": "UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 OP K/0 dengan pembukuan memiliki neto fiskal Rp500.000.000 serta kompensasi rugi sah Rp100.000.000. Berapa PPh tahunan tanpa kredit? Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57.",
    "options": [
      "Rp100.000.000",
      "Rp54.375.000",
      "Rp58.750.000",
      "Rp79.375.000"
    ],
    "answer": 1,
    "explanation": "Neto setelah rugi = Rp400 juta. PTKP K/0 Rp58,5 juta; PKP Rp341,5 juta. Pajak = 5% × Rp60 juta + 15% × Rp190 juta + 25% × Rp91,5 juta = Rp54.375.000. Kerugian dikompensasikan sebelum PTKP, bukan dipotong langsung dari pajak. PKP ribuan penuh. Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57."
  },
  {
    "id": "pjk301-uas-v3-tm11-09",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "recon",
    "sourceRef": "UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 badan dengan omzet lebih dari Rp50 miliar mencatat laba Rp900.000.000 yang sudah mencakup bunga deposito final Rp50.000.000. Tanpa koreksi lain, berapa PPh reguler? Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar).",
    "options": [
      "Rp198.000.000",
      "Rp208.000.000",
      "Rp187.000.000",
      "Rp188.000.000"
    ],
    "answer": 2,
    "explanation": "Bunga deposito final dikeluarkan dari dasar PPh reguler melalui koreksi negatif Rp50 juta. PKP = Rp900 juta - Rp50 juta = Rp850 juta. Tarif badan umum 22% memberi Rp187.000.000. Pajak final atas deposito dilaporkan terpisah. PKP ribuan penuh. Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar)."
  },
  {
    "id": "pjk301-uas-v3-tm11-10",
    "tm": 11,
    "topic": "PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "advanced",
    "skill": "op",
    "sourceRef": "UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57",
    "sourceAnchors": [
      "TM11"
    ],
    "q": "Tahun Pajak 2024 badan DN rezim umum memiliki omzet Rp4 miliar dan neto fiskal Rp300 juta. Sisa rugi berasal dari 2018, tanpa fasilitas perpanjangan masa kompensasi. Berapa PPh? Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57.",
    "options": [
      "Rp33.000.000",
      "Rp66.000.000",
      "Rp0",
      "Rp16.500.000"
    ],
    "answer": 0,
    "explanation": "Rugi 2018 dapat dikompensasikan lima tahun berikutnya, yaitu 2019-2023. Pada 2024 sisa rugi kedaluwarsa. PKP Rp300 juta; omzet Rp4 miliar memenuhi 31E penuh, tarif 11%, pajak Rp33.000.000. Aturan dasar kompensasi Pasal 6 ayat (2); fasilitas perpanjangan dikecualikan dalam data. Rupiah bulat. Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57."
  },
  {
    "id": "pjk301-uas-v3-tm12-01",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat",
    "sourceRef": "UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "September 2024 PKP menjual BKP biasa di dalam negeri dengan harga sebelum PPN Rp200.000.000, tanpa fasilitas atau skema khusus. Berapa PPN? Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9.",
    "options": [
      "Rp24.000.000",
      "Rp24.200.000",
      "Rp20.000.000",
      "Rp22.000.000"
    ],
    "answer": 3,
    "explanation": "Pada September 2024 tarif PPN 11% berlaku atas harga jual. PPN = 11% × Rp200 juta = Rp22.000.000. Nilai lain 11/12 yang berlaku mulai 2025 tidak diterapkan pada transaksi 2024. Rupiah bulat. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9."
  },
  {
    "id": "pjk301-uas-v3-tm12-02",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat25",
    "sourceRef": "PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "Maret 2025 PKP menjual BKP nonmewah Rp200.000.000 sebelum pajak, tanpa fasilitas dan tanpa skema DPP khusus. Berapa PPN dengan PMK 131/2024? Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
    "options": [
      "Rp20.000.000",
      "Rp22.000.000",
      "Rp24.000.000",
      "Rp18.333.333"
    ],
    "answer": 1,
    "explanation": "Tarif formal 12%, DPP nilai lain = 11/12 × Rp200 juta = Rp183.333.333,3333. PPN = 12% × 11/12 × Rp200 juta = Rp22.000.000. Pertahankan pecahan DPP hingga hasil akhir; hasil rupiah bulat. Angka efektif 11% tidak mengubah tarif formal menjadi 11%. Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
  },
  {
    "id": "pjk301-uas-v3-tm12-03",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat25",
    "sourceRef": "PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "Maret 2025 faktur BKP nonmewah biasa berjumlah Rp222.000.000 sudah termasuk PPN, tanpa PPnBM atau skema khusus. Berapa harga sebelum pajak? Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
    "options": [
      "Rp195.360.000",
      "Rp198.214.286",
      "Rp200.000.000",
      "Rp202.000.000"
    ],
    "answer": 2,
    "explanation": "PPN efektif 12% × 11/12 = 11% dari harga sebelum pajak. Total = harga × 1,11. Harga = Rp222 juta/1,11 = Rp200.000.000; PPN Rp22 juta. Membagi total dengan 1,12 keliru untuk skema ini. Rupiah bulat. Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
  },
  {
    "id": "pjk301-uas-v3-tm12-04",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat25",
    "sourceRef": "PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "April 2025 impor BKP nonmewah biasa: CIF rupiah Rp500 juta, bea masuk Rp50 juta, pungutan kepabeanan lain Rp0. Berapa PPN impor tanpa fasilitas? Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
    "options": [
      "Rp60.500.000",
      "Rp66.000.000",
      "Rp71.500.000",
      "Rp55.000.000"
    ],
    "answer": 0,
    "explanation": "Nilai impor = CIF + bea masuk + pungutan kepabeanan lain = Rp550 juta. PPN = 12% × (11/12 × Rp550 juta) = Rp60.500.000. PPh 22 impor tidak ditambahkan ke dasar PPN. Pecahan DPP dipertahankan hingga akhir; hasil rupiah bulat. Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
  },
  {
    "id": "pjk301-uas-v3-tm12-05",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat",
    "sourceRef": "UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "Oktober 2024 PKP mengekspor BKP berwujud senilai Rp1 miliar. PM terkait ekspor Rp55 juta sah. Berapa PK ekspor? Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9.",
    "options": [
      "Rp55.000.000",
      "Rp100.000.000",
      "Rp110.000.000",
      "Rp0"
    ],
    "answer": 3,
    "explanation": "Ekspor BKP berwujud oleh PKP bertarif 0%: PK = 0% × Rp1 miliar = Rp0. Ekspor tetap penyerahan terutang pajak, sehingga PM terkait yang memenuhi syarat dapat dikreditkan. Tarif nol berbeda dari fasilitas dibebaskan. Rupiah bulat. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9."
  },
  {
    "id": "pjk301-uas-v3-tm12-06",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat",
    "sourceRef": "UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "November 2024 restoran menjual makanan kepada konsumen Rp100.000.000. Transaksi termasuk objek pajak daerah menurut UU PPN Pasal 4A. Berapa PPN atas penyerahan tersebut? Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9.",
    "options": [
      "Rp11.000.000",
      "Rp0",
      "Rp1.000.000",
      "Rp10.000.000"
    ],
    "answer": 1,
    "explanation": "Makanan/minuman restoran yang menjadi objek pajak daerah dikecualikan dari barang yang dikenai PPN. PPN = Rp0. Kewajiban pajak daerah ditentukan terpisah dan tarifnya tidak diasumsikan dalam soal. Pengusaha tidak boleh memungut PPN 11% untuk objek ini. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9."
  },
  {
    "id": "pjk301-uas-v3-tm12-07",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "pm",
    "sourceRef": "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "Desember 2024 PK atas penjualan BKP biasa Rp11.000.000, PM terkait usaha dan faktur sah Rp7.700.000. Tidak ada kompensasi. Berapa PPN harus disetor sendiri? Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "options": [
      "Rp11.000.000",
      "Rp18.700.000",
      "Rp3.300.000",
      "Rp7.700.000"
    ],
    "answer": 2,
    "explanation": "Mekanisme kredit PPN: PK - PM = Rp11.000.000 - Rp7.700.000 = Rp3.300.000. Selisih positif adalah kurang bayar. PM bukan pengurang harga jual; satuan rupiah dan nilai bulat. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "id": "pjk301-uas-v3-tm12-08",
    "tm": 12,
    "topic": "Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "medium",
    "skill": "vat25",
    "sourceRef": "PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN",
    "sourceAnchors": [
      "TM12"
    ],
    "q": "Maret 2025 produsen menyerahkan BKP yang tergolong mewah dan dikenai PPnBM, harga sebelum pajak Rp500 juta. Berapa PPN, di luar PPnBM? Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
    "options": [
      "Rp60.000.000",
      "Rp66.000.000",
      "Rp50.000.000",
      "Rp55.000.000"
    ],
    "answer": 0,
    "explanation": "PMK 131/2024 Pasal 2 mengenakan tarif PPN 12% atas harga penuh BKP mewah yang dikenai PPnBM. PPN = 12% × Rp500 juta = Rp60.000.000. Nilai lain 11/12 untuk BKP biasa tidak digunakan. Maret berada setelah transisi eceran Januari; PPnBM dihitung terpisah. Rupiah bulat. Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
  },
  {
    "id": "pjk301-uas-v3-tm13-01",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "ppnbm",
    "sourceRef": "UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "Maret 2025 produsen menjual BKP mewah Rp500 juta sebelum pajak. Produk telah diklasifikasi sah dengan tarif PPnBM 20%, tanpa insentif. PPN 12% atas harga penuh. Berapa tagihan total? Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5.",
    "options": [
      "Rp672.000.000",
      "Rp600.000.000",
      "Rp655.000.000",
      "Rp660.000.000"
    ],
    "answer": 3,
    "explanation": "PPN = 12% × Rp500 juta = Rp60 juta. PPnBM = 20% × Rp500 juta = Rp100 juta. Tagihan = Rp500 juta + Rp60 juta + Rp100 juta = Rp660.000.000. PPnBM tidak dimasukkan ke DPP PPN. Tarif 20% adalah input klasifikasi produk kasus. Rupiah bulat. Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5."
  },
  {
    "id": "pjk301-uas-v3-tm13-02",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "ppnbm",
    "sourceRef": "UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "April 2025 distributor menjual kembali BKP mewah yang telah dipungut PPnBM saat pembelian dari produsen. Harga jual Rp700 juta sebelum pajak dan PPN 12%. Berapa PPN serta PPnBM pada tahap distributor? Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5.",
    "options": [
      "PPN Rp77.000.000; PPnBM Rp0",
      "PPN Rp84.000.000; PPnBM Rp0",
      "PPN Rp84.000.000; PPnBM Rp140.000.000",
      "PPN Rp77.000.000; PPnBM Rp140.000.000"
    ],
    "answer": 1,
    "explanation": "PPnBM dikenakan satu kali pada impor atau penyerahan oleh produsen. Penjualan kembali distributor tidak memungut PPnBM lagi. PPN tetap terutang: 12% × Rp700 juta = Rp84 juta; PPnBM tahap ini Rp0. PPnBM pembelian tidak menjadi kredit pajak masukan PPN. Rupiah bulat. Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5."
  },
  {
    "id": "pjk301-uas-v3-tm13-03",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "fp",
    "sourceRef": "UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material)",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "Agustus 2024 PKP menerima uang muka Rp30 juta sebelum BKP diserahkan. Harga penuh sebelum PPN Rp100 juta. Sisa dibayar saat penyerahan September. Berapa PPN yang harus dibuatkan faktur pada Agustus? Rujukan: UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material).",
    "options": [
      "Rp11.000.000",
      "Rp0",
      "Rp3.300.000",
      "Rp7.700.000"
    ],
    "answer": 2,
    "explanation": "Faktur dibuat saat penerimaan pembayaran sebelum penyerahan. Dasar uang muka Rp30 juta × tarif 11% = Rp3.300.000. Saat penyerahan berikutnya, sisa harga Rp70 juta menghasilkan PPN Rp7,7 juta. Total tetap Rp11 juta; uang muka tidak dipajaki dua kali. Rupiah bulat. Rujukan: UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material)."
  },
  {
    "id": "pjk301-uas-v3-tm13-04",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "retur",
    "sourceRef": "UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP)",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "BKP mewah dijual September 2024 dengan DPP Rp100 juta, PPN 11%, dan PPnBM 20%. Retur sah Oktober memiliki DPP Rp20 juta. Berapa pengurangan PK dan PPnBM pada masa retur? Rujukan: UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP).",
    "options": [
      "PPN Rp2.200.000; PPnBM Rp4.000.000",
      "PPN Rp4.000.000; PPnBM Rp2.200.000",
      "PPN Rp0; PPnBM Rp4.000.000",
      "PPN Rp2.200.000; PPnBM Rp0"
    ],
    "answer": 0,
    "explanation": "UU PPN Pasal 5A memperbolehkan pengurangan saat retur. PPN = 11% × Rp20 juta = Rp2,2 juta, PPnBM = 20% × Rp20 juta = Rp4 juta. Gunakan nota retur sah dan rekonsiliasi pada masa Oktober. Jangan menggunakan tarif tahun 2025. Rupiah bulat. Rujukan: UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP)."
  },
  {
    "id": "pjk301-uas-v3-tm13-05",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "kurs",
    "sourceRef": "PP 44/2022, Pasal 21 (paragraf konversi valuta asing dengan kurs Menteri Keuangan)",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "September 2024 PKP menyerahkan JKP dengan tagihan USD10.000. Kurs KMK yang berlaku saat faktur Rp15.000/USD; kurs bank Rp16.000/USD. Berapa PPN rupiah dengan tarif 11%? Rujukan: PP 44/2022, Pasal 21 (paragraf konversi valuta asing dengan kurs Menteri Keuangan).",
    "options": [
      "Rp17.600.000",
      "Rp18.000.000",
      "Rp15.000.000",
      "Rp16.500.000"
    ],
    "answer": 3,
    "explanation": "Konversi untuk pajak memakai kurs Menteri Keuangan pada saat faktur harus dibuat: USD10.000 × Rp15.000/USD = Rp150 juta. PPN = 11% × Rp150 juta = Rp16.500.000. Kurs bank digunakan untuk kebutuhan lain, tidak menggantikan kurs pajak dalam kasus. Satuan USD saling habis, hasil rupiah bulat. Rujukan: PP 44/2022, Pasal 21 (paragraf konversi valuta asing dengan kurs Menteri Keuangan)."
  },
  {
    "id": "pjk301-uas-v3-tm13-06",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "sanksi",
    "sourceRef": "UU HPP, halaman PDF 14-16, perubahan Pasal 14 ayat (1) huruf d-e dan ayat (4) UU KUP",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "Oktober 2024 PKP terlambat membuat faktur atas DPP Rp100 juta dan DJP menerbitkan STP berdasarkan Pasal 14 ayat (4) UU KUP. Berapa denda faktur saja, tanpa pokok atau sanksi lain? Rujukan: UU HPP, halaman PDF 14-16, perubahan Pasal 14 ayat (1) huruf d-e dan ayat (4) UU KUP.",
    "options": [
      "Rp11.000.000",
      "Rp1.000.000",
      "Rp1.100.000",
      "Rp2.000.000"
    ],
    "answer": 1,
    "explanation": "Setelah perubahan HPP, sanksi kasus faktur Pasal 14 ayat (1) huruf d-e adalah 1% dari DPP. Denda = 1% × Rp100 juta = Rp1.000.000. Angka 2% adalah ketentuan lama. Pokok PPN tetap harus dipenuhi secara terpisah. Rupiah bulat. Rujukan: UU HPP, halaman PDF 14-16, perubahan Pasal 14 ayat (1) huruf d-e dan ayat (4) UU KUP."
  },
  {
    "id": "pjk301-uas-v3-tm13-07",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "pm",
    "sourceRef": "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "Oktober 2024 PM Rp11 juta berasal dari faktur yang tidak mencantumkan identitas pembeli yang dipersyaratkan. Belum ada perbaikan sah dan pembeli bukan konsumen akhir eceran. Berapa PM yang dapat dikreditkan sekarang? Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "options": [
      "Rp8.800.000",
      "Rp11.000.000",
      "Rp0",
      "Rp5.500.000"
    ],
    "answer": 2,
    "explanation": "Syarat formal/material Pasal 13 dan larangan Pasal 9 ayat (8) huruf f harus dipenuhi. Faktur yang tidak memenuhi identitas pembeli tidak mendukung kredit saat ini, sehingga PM Rp0. Jika diperbaiki secara sah, uji ulang syarat dan masa pengkreditan; jangan mengasumsikan seluruh faktur cacat permanen tidak dapat diperbaiki. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "id": "pjk301-uas-v3-tm13-08",
    "tm": 13,
    "topic": "PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "medium",
    "skill": "retur",
    "sourceRef": "UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP)",
    "sourceAnchors": [
      "TM13"
    ],
    "q": "November 2024 kontrak JKP Rp10 juta sebelum PPN dibatalkan secara sah setelah faktur PPN 11% dibuat. Berapa pengurangan PK berdasarkan pembatalan jasa? Rujukan: UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP).",
    "options": [
      "Rp1.100.000",
      "Rp1.200.000",
      "Rp0",
      "Rp1.000.000"
    ],
    "answer": 0,
    "explanation": "Pasal 5A ayat (2) mencakup pembatalan JKP. Pengurangan PK = 11% × Rp10.000.000 = Rp1.100.000 pada masa pembatalan dengan dokumen sah. Mekanisme nota pembatalan jasa dibedakan dari retur barang. Rupiah bulat. Rujukan: UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP)."
  },
  {
    "id": "pjk301-uas-v3-tm14-01",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "pm",
    "sourceRef": "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Masa September 2024 PK Rp44 juta, PM sah Rp33 juta, serta kompensasi lebih bayar Agustus Rp5 juta. Berapa PPN kurang bayar September? Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "options": [
      "Rp11.000.000",
      "Rp16.000.000",
      "Rp22.000.000",
      "Rp6.000.000"
    ],
    "answer": 3,
    "explanation": "Selisih PK - PM = Rp44 juta - Rp33 juta = Rp11 juta. Kurangi kompensasi sah Rp5 juta sehingga setoran Rp6.000.000. Kompensasi ditelusuri ke masa sebelumnya, bukan dimasukkan ulang sebagai PM baru. Rupiah bulat. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "id": "pjk301-uas-v3-tm14-02",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "mixed",
    "sourceRef": "PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Tahun 2024 PM yang dapat ditelusuri langsung ke penyerahan kena pajak Rp11 juta. PM bersama Rp22 juta tidak dapat dipisahkan; perkiraan porsi penyerahan yang mendukung kredit 80%. Berapa kredit PM awal? Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian).",
    "options": [
      "Rp22.000.000",
      "Rp28.600.000",
      "Rp33.000.000",
      "Rp17.600.000"
    ],
    "answer": 1,
    "explanation": "Identifikasi langsung dahulu: Rp11 juta kredit penuh. PM bersama memakai perkiraan proporsi 80%: 80% × Rp22 juta = Rp17,6 juta. Total Rp11 juta + Rp17,6 juta = Rp28.600.000. PM langsung tidak diprorata lagi. Nilai rupiah bulat. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian)."
  },
  {
    "id": "pjk301-uas-v3-tm14-03",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "mixed",
    "sourceRef": "PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Mesin diperoleh 2024 dengan PM Rp44 juta. Porsi perkiraan kredit 80%, masa manfaat menurut pedoman 4 tahun. Realisasi porsi 2024 adalah 70%. Berapa penyesuaian PM yang dilaporkan paling lambat Maret 2025? Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian).",
    "options": [
      "Pengurang PM Rp4.400.000",
      "Penambah PM Rp4.400.000",
      "Pengurang PM Rp1.100.000",
      "Penambah PM Rp1.100.000"
    ],
    "answer": 2,
    "explanation": "Kredit awal P = 80% × Rp44 juta = Rp35,2 juta. Alokasi P/T = Rp8,8 juta. Realisasi P′ = Rp44 juta/4 × 70% = Rp7,7 juta. Penyesuaian = Rp7,7 juta - Rp8,8 juta = minus Rp1,1 juta, pengurang PM. Tenggat masa ketiga tahun berikutnya. Satuan rupiah bulat; seluruh selisih awal tidak dikoreksi sekaligus. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian)."
  },
  {
    "id": "pjk301-uas-v3-tm14-04",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "fasilitas",
    "sourceRef": "UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Oktober 2024 PM langsung Rp11 juta terkait penyerahan yang mendapat fasilitas PPN dibebaskan. Jika penyerahan yang sama memperoleh fasilitas tidak dipungut, berapa PM yang dapat dikreditkan, dengan seluruh syarat lain sah? Rujukan: UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan).",
    "options": [
      "Dibebaskan Rp0; tidak dipungut Rp11.000.000",
      "Dibebaskan Rp11.000.000; tidak dipungut Rp0",
      "Dibebaskan Rp11.000.000; tidak dipungut Rp11.000.000",
      "Dibebaskan Rp0; tidak dipungut Rp0"
    ],
    "answer": 0,
    "explanation": "Pasal 16B ayat (3): PM terkait penyerahan dibebaskan tidak dikreditkan. Ayat (2): PM terkait penyerahan tidak dipungut tetap dapat dikreditkan bila memenuhi syarat. Perbedaan fasilitas mengubah posisi kredit meskipun sama-sama tidak memungut PK dari pembeli. Rujukan: UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan)."
  },
  {
    "id": "pjk301-uas-v3-tm14-05",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "wapu",
    "sourceRef": "UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Oktober 2024 PKP menjual ke swasta DPP Rp100 juta dan ke pemungut pemerintah DPP Rp200 juta. Seluruh PPN 11% pada transaksi pemerintah telah dipungut dan disetor pemungut. PM sah Rp16,5 juta. Berapa posisi PPN yang diperhitungkan sendiri? Rujukan: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN).",
    "options": [
      "Kurang bayar Rp16.500.000",
      "Lebih bayar Rp16.500.000",
      "Kurang bayar Rp5.500.000",
      "Lebih bayar Rp5.500.000"
    ],
    "answer": 3,
    "explanation": "PK total Rp11 juta + Rp22 juta = Rp33 juta. Bagian Rp22 juta dipungut pemungut, sehingga kewajiban sendiri = Rp33 juta - Rp22 juta - PM Rp16,5 juta = minus Rp5,5 juta, lebih bayar. Bukti pemungutan pemerintah harus direkonsiliasi agar tidak disetor dua kali. Semua nilai rupiah bulat. Rujukan: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN)."
  },
  {
    "id": "pjk301-uas-v3-tm14-06",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "pm",
    "sourceRef": "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Faktur PM April 2024 belum dikreditkan. Seluruh syarat kredit sah, belum dibebankan sebagai biaya atau dikapitalisasi. Sampai masa mana kredit pada masa berikutnya masih diperbolehkan? Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "options": [
      "Masa Juni tahun 2024",
      "Masa Juli tahun 2024",
      "Masa Agustus tahun 2024",
      "Masa Mei tahun 2024"
    ],
    "answer": 1,
    "explanation": "Pasal 9 ayat (9) mengizinkan paling lama tiga masa setelah masa faktur: Mei, Juni, Juli. Batasnya Juli 2024. Ini batas masa, bukan tiga bulan sejak tanggal pembelian; syarat lain tetap diuji. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "id": "pjk301-uas-v3-tm14-07",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "restitusi",
    "sourceRef": "UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Eksportir PKP pada November 2024 mempunyai PK Rp0 dan PM sah Rp55 juta. Ia ingin restitusi bulan ini. Keputusan yang didukung UU PPN? Rujukan: UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D.",
    "options": [
      "Kreditkan Rp0 saja; ekspor menghapus seluruh PM",
      "Tunggu akhir tahun; eksportir selalu dilarang mengajukan",
      "Ajukan Rp55 juta; uji persyaratan pengembalian",
      "Ajukan Rp55 juta; pencairan otomatis tanpa pemeriksaan"
    ],
    "answer": 2,
    "explanation": "Ekspor bertarif 0% memberi kelebihan PM Rp55 juta. Pasal 9 ayat (4b) memberi eksportir hak mengajukan per masa. Persetujuan, pemeriksaan, atau pengembalian pendahuluan bergantung syarat Pasal 17B/17C/17D KUP. Hak mengajukan tidak menjamin pencairan otomatis atau tenggat tiga bulan untuk seluruh pemohon. Rujukan: UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D."
  },
  {
    "id": "pjk301-uas-v3-tm14-08",
    "tm": 14,
    "topic": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "advanced",
    "skill": "pm",
    "sourceRef": "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)",
    "sourceAnchors": [
      "TM14"
    ],
    "q": "Tahun 2024, PK seharusnya dipungut sebelum pengukuhan PKP sebesar Rp110 juta telah ditetapkan. Gunakan pedoman Pasal 9 ayat (9a) 80%, seluruh syarat kasus terpenuhi. Berapa kredit PM pedoman? Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "options": [
      "Rp88.000.000",
      "Rp110.000.000",
      "Rp22.000.000",
      "Rp55.000.000"
    ],
    "answer": 0,
    "explanation": "Pasal 9 ayat (9a) menggunakan pedoman 80% dari PK yang seharusnya dipungut: 80% × Rp110 juta = Rp88.000.000. Selisih PK setelah kredit pedoman = Rp22 juta. Kredit ini memakai mekanisme pedoman khusus, tidak otomatis memberi kredit seluruh faktur sebelum pengukuhan. Rupiah bulat. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "id": "pjk301-uas-v3-tm15-01",
    "tm": 15,
    "topic": "Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "advanced",
    "skill": "carbon",
    "sourceRef": "UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)",
    "sourceAnchors": [
      "TM15"
    ],
    "q": "Simulasi Tahun Pajak 2024: emisi 90.000 ton CO2e, batas 80.000 ton, sertifikat sah 6.000 ton diakui penuh menurut asumsi soal. Tarif yang diasumsikan Rp30/kg. Berapa pajak simulasi atas sisa emisi? Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "options": [
      "Rp180.000.000",
      "Rp300.000.000",
      "Rp2.700.000.000",
      "Rp120.000.000"
    ],
    "answer": 3,
    "explanation": "Sisa emisi = 90.000 - 80.000 - 6.000 = 4.000 ton CO2e. Konversi 1 ton = 1.000 kg, sehingga DPP simulasi 4.000.000 kg. Pajak = Rp30/kg × 4.000.000 kg = Rp120.000.000. Pengakuan sertifikat dan DPP merupakan asumsi simulasi; Pasal 13 ayat (13)-(15) memerlukan aturan pelaksana untuk penerapan nyata. Hasil rupiah bulat. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  },
  {
    "id": "pjk301-uas-v3-tm15-02",
    "tm": 15,
    "topic": "Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "advanced",
    "skill": "carbon",
    "sourceRef": "UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)",
    "sourceAnchors": [
      "TM15"
    ],
    "q": "Dalam simulasi penetapan tarif 2024, harga pasar karbon Rp25/kg CO2e. Menurut batas bawah UU HPP, nilai minimum tarif yang dapat ditetapkan berapa? Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "options": [
      "Rp25 per kg CO2e",
      "Rp30 per kg CO2e",
      "Rp30 per ton CO2e",
      "Rp25 per ton CO2e"
    ],
    "answer": 1,
    "explanation": "Pasal 13 ayat (9) menetapkan batas paling rendah Rp30/kg ketika harga pasar di bawah Rp30/kg. Satuan kilogram menentukan hasil; Rp30/kg setara Rp30.000/ton. Nilai minimum ini tidak membuktikan tarif operasional aktual telah ditetapkan untuk semua sektor. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  },
  {
    "id": "pjk301-uas-v3-tm15-03",
    "tm": 15,
    "topic": "Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "advanced",
    "skill": "carbon",
    "sourceRef": "UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)",
    "sourceAnchors": [
      "TM15"
    ],
    "q": "Dalam simulasi penetapan tarif 2024, harga pasar Rp50/kg CO2e. Pernyataan minimum tarif menurut UU HPP yang tepat? Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "options": [
      "Tepat sebesar Rp50 per ton CO2e",
      "Sekurang-kurangnya Rp30 per kg CO2e",
      "Sekurang-kurangnya Rp50 per kg CO2e",
      "Tepat sebesar Rp30 per kg CO2e"
    ],
    "answer": 2,
    "explanation": "Pasal 13 ayat (8) mensyaratkan tarif lebih tinggi atau sama dengan harga pasar. Harga Rp50/kg membuat batas minimum Rp50/kg. Tarif tepatnya ditetapkan melalui mekanisme ayat (10), sehingga tidak disimpulkan otomatis selalu Rp30/kg. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  },
  {
    "id": "pjk301-uas-v3-tm15-04",
    "tm": 15,
    "topic": "Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "advanced",
    "skill": "carbon",
    "sourceRef": "UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)",
    "sourceAnchors": [
      "TM15"
    ],
    "q": "Simulasi 2024, emisi kena pajak menurut asumsi soal 750 ton CO2e dengan tarif Rp30/kg. Berapa pajak simulasi? Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "options": [
      "Rp22.500.000",
      "Rp225.000.000",
      "Rp22.500",
      "Rp2.250.000"
    ],
    "answer": 0,
    "explanation": "750 ton × 1.000 kg/ton = 750.000 kg CO2e. Pajak = 750.000 kg × Rp30/kg = Rp22.500.000. Tarif per kilogram tidak boleh langsung dikalikan jumlah ton. DPP dan tarif adalah asumsi simulasi pendidikan; hasil rupiah bulat. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  },
  {
    "id": "pjk301-uas-v3-tm15-05",
    "tm": 15,
    "topic": "Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "advanced",
    "skill": "carbon",
    "sourceRef": "UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)",
    "sourceAnchors": [
      "TM15"
    ],
    "q": "Simulasi proyek 2024 menurunkan emisi kena pajak 2.000 ton per tahun, tarif Rp30/kg. Biaya proyek tahunan Rp45 juta, tanpa manfaat lain. Berapa manfaat bersih tahunan simulasi? Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "options": [
      "Manfaat bersih Rp45.000.000 per tahun",
      "Manfaat bersih Rp60.000.000 per tahun",
      "Rugi bersih Rp15.000.000 per tahun",
      "Manfaat bersih Rp15.000.000 per tahun"
    ],
    "answer": 3,
    "explanation": "Pajak yang dihindari dalam simulasi = 2.000 ton × 1.000 kg/ton × Rp30/kg = Rp60 juta per tahun. Kurangi biaya tahunan Rp45 juta: manfaat bersih Rp15 juta per tahun. Keputusan aktual perlu memeriksa pengakuan penurunan emisi dan ketentuan pelaksanaan. Nilai rupiah bulat; biaya proyek tidak langsung menjadi kredit pajak karbon. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  },
  {
    "id": "pjk301-uas-v3-tm15-06",
    "tm": 15,
    "topic": "Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "advanced",
    "skill": "carbon",
    "sourceRef": "UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)",
    "sourceAnchors": [
      "TM15"
    ],
    "q": "Simulasi 2024 menghasilkan pajak karbon bruto Rp120 juta. Perusahaan membeli sertifikat Rp60 juta tetapi pengakuan pengurangan belum terbukti. Berapa pajak setelah pengurangan yang dapat dipastikan dari data? Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "options": [
      "Pasti Rp120 juta; seluruh sertifikat dilarang",
      "Belum pasti; periksa pengakuan pengurangan",
      "Pasti Rp0; pembelian sertifikat menghapus pajak",
      "Pasti Rp60 juta; potong harga sertifikat"
    ],
    "answer": 1,
    "explanation": "Pasal 13 ayat (13) memungkinkan pengurangan atau perlakuan lain bagi partisipasi yang memenuhi aturan. Harga beli sertifikat Rp60 juta tidak otomatis menjadi kredit nominal Rp60 juta. Perlu bukti satuan emisi, validitas, larangan penghitungan ganda, dan mekanisme pengakuan. Karena data belum membuktikan itu, nilai neto tidak dapat dipastikan. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  }
];
