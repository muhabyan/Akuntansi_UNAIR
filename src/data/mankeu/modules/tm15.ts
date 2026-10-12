import type { Reading } from '../../../types';
export const TM15_READING: Reading = {
  "tm": 15,
  "title": "Corporate Failure dan Analisis Kesulitan Keuangan",
  "ref": "Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)",
  "intro": "Menggunakan kontrak, buku lokal dan sumber yang disebutkan untuk menyelesaikan keputusan corporate failure dan analisis kesulitan keuangan secara bertahap.",
  "objectives": [
    "Menjelaskan konsep dan asumsi corporate failure dan analisis kesulitan keuangan.",
    "Menghitung hasil dengan satuan, tenor dan pembulatan yang tepat.",
    "Menilai keputusan serta batas model dan rujukannya."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pintu masuk: cakupan dan sumber"
    },
    {
      "kind": "p",
      "text": "TM15 mengikuti Kontrak MK2026 Sheet 1 baris 32. Fokus: Corporate Failure dan Analisis Kesulitan Keuangan. Buku kontrak edisi 15 dipetakan ke buku lokal edisi 16 berdasarkan topik, dengan nomor halaman cetak dan PDF yang dapat ditelusuri. Angka latihan adalah skenario hipotetis, bukan harga pasar atau ketentuan pajak terbaru. Rujukan utama: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)."
    },
    {
      "kind": "p",
      "text": "Paket TM ini mempunyai 6 kuis, enam flashcard, dan dua kasus bank soal. Dugaan prioritas ujian berasal dari kontrak dan contoh pembahasan lokal; tidak ada arsip ujian untuk memastikan bentuk soal. Kerjakan dengan rumus, langkah antara, satuan, periode bunga, pembulatan akhir dan alasan keputusan."
    },
    {
      "kind": "ul",
      "items": [
        "[Artikel primer Altman, mulai Figure 2 halaman 10](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf#page=10)",
        "[Batas dan evaluasi model, halaman 14](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf#page=14)",
        "[Varian model, halaman 15](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf#page=15)"
      ]
    },
    {
      "kind": "h2",
      "text": "1. Identifikasi jenis kesulitan sebelum memilih tindakan"
    },
    {
      "kind": "p",
      "text": "Corporate failure pada kontrak merujuk Artikel tanpa menyebut judul atau penulis. Artikel dosen tersebut belum tersedia dalam folder sumber. Paket ini memakai artikel primer Altman 2002 sebagai pelengkap yang dapat dibaca, serta bagian buku tentang reorganisasi dan likuidasi. Isi ini mendukung topik kontrak, tetapi tidak diklaim sebagai artikel yang pasti ditugaskan dosen. Tidak ada arsip UAS pada sumber yang diperiksa; prioritas latihan adalah perkiraan berdasarkan kontrak dan pola kasus. [Kontrak MK2026 Sheet 1 B32:E32; Altman 2002 PDF2 dan 9-18]"
    },
    {
      "kind": "p",
      "text": "Likuiditas berkaitan kemampuan memenuhi kas pada tanggal jatuh tempo. Solvabilitas ekonomi mempertimbangkan nilai aset dan kemampuan menanggung kewajiban; ekuitas buku dapat positif ketika kas hari ini tidak cukup. Financial distress dapat dimulai dari penurunan margin, arus kas dan kemampuan memperoleh kredit. Status hukum pailit memerlukan prosedur yurisdiksi dan tidak ditentukan oleh satu rasio. [FFM16e hal. cetak 261-262 dan 570-573, PDF303-304 dan 612-615]"
    },
    {
      "kind": "h2",
      "text": "2. Altman original: variabel, unit dan populasi"
    },
    {
      "kind": "p",
      "text": "Model original dikembangkan dari sampel manufaktur publik. Gunakan data yang sesuai populasi, termasuk nilai pasar seluruh ekuitas dan nilai buku seluruh kewajiban. Artikel menjelaskan penggunaan aset berwujud. Jika ada aset tak berwujud, variasi industri atau firma privat, periksa metode dan varian sebelum menerapkan koefisien. Skor adalah hasil diskriminan tanpa satuan; angka 2,164 tidak berarti peluang bangkrut 2,164%. [Altman 2002 PDF9-12, Figure 2]"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle Z=1.2 X_1+1.4 X_2+3.3 X_3+0.6 X_4+1.0 X_5",
      "note": "Model original tanpa konstanta. Rujukan: Altman2002 PDF10 Figure2, definisi PDF11-12."
    },
    {
      "kind": "table",
      "headers": [
        "Rasio",
        "Pembilang",
        "Penyebut",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "X1",
          "Aset lancar - kewajiban lancar",
          "Aset yang sesuai model",
          "Modal kerja dapat negatif."
        ],
        [
          "X2",
          "Laba ditahan kumulatif",
          "Aset yang sesuai model",
          "Berbeda dari laba satu tahun."
        ],
        [
          "X3",
          "EBIT",
          "Aset yang sesuai model",
          "Bukan laba setelah bunga."
        ],
        [
          "X4",
          "Nilai pasar seluruh ekuitas",
          "Nilai buku total kewajiban",
          "Bukan hanya utang berbunga."
        ],
        [
          "X5",
          "Penjualan",
          "Aset yang sesuai model",
          "Interpretasi dapat berbeda antarindustri."
        ]
      ],
      "caption": "Rujukan: Altman 2002 halaman PDF10-12, Figure 2 dan definisi X1-X5."
    },
    {
      "kind": "p",
      "text": "Untuk latihan original, skor di bawah 1,81 masuk distress, di atas 2,99 masuk zona relatif lebih aman, dan 1,81 sampai 2,99 masuk abu-abu. Tepat pada kedua batas diperlakukan abu-abu dalam paket. Batas tersebut merupakan klasifikasi model, bukan jaminan gagal atau keberlangsungan. Artikel juga membahas perubahan hasil pengujian dan false positive, perusahaan yang ditandai bermasalah tetapi tidak gagal. [Altman 2002 PDF13-14]"
    },
    {
      "kind": "h2",
      "text": "3. Varian model tidak boleh ditukar sebagian"
    },
    {
      "kind": "p",
      "text": "Model firma privat Z-prime mengganti variabel ekuitas dan mengubah koefisien. Varian nonmanufaktur Z-double-prime mengubah set rasio, koefisien dan batas. Versi emerging markets menambah konstanta untuk pemetaan tertentu. Memasukkan ekuitas buku ke rumus original sambil mempertahankan koefisien dan batasnya tidak menghasilkan varian yang valid. Untuk bank atau usaha sektor khusus, periksa model yang sesuai karakter neracanya. [Altman 2002 PDF15-18]"
    },
    {
      "kind": "p",
      "text": "Evaluasi risiko perlu menggabungkan skor dengan kas, jatuh tempo, kualitas piutang, prospek permintaan, hubungan pemasok dan kreditor, serta kemampuan manajemen memulihkan operasi. Artikel menempatkan credit scoring sebagai bagian analisis yang dapat dilanjutkan dengan pemetaan risiko dan estimasi peluang default; skor saja tidak langsung menjadi peluang. [Altman 2002 PDF2 dan 5-6]"
    },
    {
      "kind": "h2",
      "text": "4. Reorganisasi dan likuidasi sebagai keputusan ekonomi"
    },
    {
      "kind": "p",
      "text": "Reorganization bertujuan mengatur kembali operasi atau kewajiban untuk menjaga nilai usaha yang masih layak. Liquidation menjual aset dan mengakhiri atau mengecilkan operasi sesuai proses yang relevan. Bandingkan nilai going concern, usaha berlanjut, setelah biaya dengan nilai realisasi aset bersih. Nilai 105 versus 87 miliar mendukung kelanjutan secara ekonomi pada asumsi, tetapi tidak menjamin tersedianya kas baru atau persetujuan kreditur. [FFM16e hal. cetak 261-262; PDF303-304]"
    },
    {
      "kind": "p",
      "text": "Pembahasan Chapter 11 dan Chapter 7 pada buku adalah konteks Amerika Serikat. Paket tidak menyamakan Chapter 11 dengan PKPU Indonesia dan tidak mengajarkan prioritas klaim sebagai ketentuan hukum Indonesia. Kasus menetapkan arus dan nilai yang diperlukan agar mahasiswa dapat membedakan analisis ekonomi dari keputusan hukum. Selesaikan terlebih dahulu anggaran kas, kemampuan melanjutkan operasi dan nilai bersih, lalu sebutkan informasi tambahan yang diperlukan. [FFM16e hal. cetak 261-262; PDF303-304]"
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 1: Audit model Altman dan perubahan kinerja"
    },
    {
      "kind": "ul",
      "items": [
        "Manufaktur publik tanpa aset tak berwujud; semua angka Rp miliar. Aset 100; modal kerja 10; laba ditahan 20; EBIT8.",
        "Nilai pasar seluruh ekuitas 150; total kewajiban buku 300; penjualan 120.",
        "Gunakan model original dan batas 1,81/2,99. Skenario EBIT turun ke 2; faktor lain tetap."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung lima rasio dan Z awal. Hitung Z setelah EBIT turun serta perubahan kontribusinya. Jelaskan batas model, populasi, probabilitas, dan informasi kredit tambahan. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. X1=10/100=0,10; X2=20/100=0,20; X3=8/100=0,08; X4=150/300=0,50; X5=120/100=1,20. Z=0,12+0,28+0,264+0,30+1,20=2,164: zona abu-abu."
        },
        {
          "kind": "p",
          "text": "Langkah 2. EBIT2 memberi X3=0,02, kontribusi 3,3×0,02=0,066. Z baru 1,966; turun 0,198 dan tetap abu-abu. X4 memakai seluruh kewajiban buku dan ekuitas pasar, bukan hanya utang berbunga atau ekuitas buku."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Skor tidak bersatuan dan bukan probabilitas langsung. Model original memakai manufaktur publik; varian privat dan nonmanufaktur mengubah input, koefisien serta batas. Periksa aset berwujud, kualitas data, kas, jatuh tempo, risiko industri, serta kemungkinan false positive. Skor memberi indikasi untuk pemeriksaan lanjutan dan tidak menetapkan status hukum pailit."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Latihan kasus 2: Pemulihan usaha: membedakan kas, nilai ekonomi dan keputusan hukum"
    },
    {
      "kind": "ul",
      "items": [
        "Semua angka Rp juta: kas awal 10, penerimaan 40, pembayaran wajib 65. Aset 200, kewajiban 175.",
        "PV usaha berlanjut 120, biaya proses 15; nilai jual aset 95, biaya likuidasi 8.",
        "Nilai kedua alternatif sudah dinilai pada tanggal dan risiko sebanding; belum ada persetujuan kreditur."
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Langkah dan keputusan",
      "prompt": "Hitung defisit kas dan ekuitas buku. Hitung nilai bersih serta selisih reorganisasi dan likuidasi. Susun prioritas tindakan dan bedakan analisis ekonomi dari proses hukum. Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1. Kas sebelum pendanaan=10+40-65=minus Rp 15 juta. Dibutuhkan Rp 15 juta agar tidak negatif, atau Rp 25 juta jika saldo minimum tambahan Rp 10 juta diterapkan. Ekuitas buku=200-175=Rp 25 juta, tetap positif; kas dapat defisit walaupun ekuitas positif."
        },
        {
          "kind": "p",
          "text": "Langkah 2. Usaha berlanjut bersih=120-15=Rp 105 juta; likuidasi bersih=95-8=Rp 87 juta. Keunggulan reorganisasi Rp 18 juta mendukung kelanjutan secara ekonomi jika proyeksi serta pendanaan layak."
        },
        {
          "kind": "p",
          "text": "Langkah 3. Periksa kalender kas, piutang tertagih, kemampuan operasi, jatuh tempo, dan negosiasi kreditur. Persetujuan serta proses hukum tetap memerlukan dasar yurisdiksi; nilai ini tidak menyamakan PKPU Indonesia dengan Chapter 11 Amerika. Skor Altman dapat melengkapi pemeriksaan tetapi tidak menggantikan anggaran kas, valuasi aset, atau keputusan hukum."
        },
        {
          "kind": "p",
          "text": "Pembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal."
        },
        {
          "kind": "p",
          "text": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615). Rujukan: Altman (2002), halaman PDF 2 dan 9-15."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Cek pemahaman sebelum berpindah TM"
    },
    {
      "kind": "ul",
      "items": [
        "Z original manufaktur publik: Z = 1,2 X1+1,4 X2+3,3 X3+0,6 X4+X5. X1 modal kerja/aset; X2 laba ditahan/aset; X3 EBIT/aset; X4 nilai pasar ekuitas/total kewajiban buku; X5 penjualan/aset. Model original tanpa konstanta. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
        "Zona skor original: Untuk klasifikasi latihan: Z<1,81 distress, 1,81 sampai 2,99 abu-abu, Z>2,99 lebih aman relatif model. Skor tepat pada batas masuk abu-abu; batas ini tidak berlaku otomatis bagi varian Z-prime/Z-double-prime. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
        "Skor bukan probabilitas: Z=2,164 adalah skor diskriminan, bukan peluang 2,164% atau 216,4%. Peluang default memerlukan pemetaan/kalibrasi lain, serta pemeriksaan populasi, horizon, dan kualitas data. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
        "Varian dan populasi model: Original memakai manufaktur publik dan ekuitas pasar. Model privat mengubah koefisien dan ekuitas; nonmanufaktur mengubah model lagi. Jangan menukar satu input sambil menjaga koefisien/batas original. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
        "Distress, insolvensi, dan pailit: Defisit kas dapat terjadi saat ekuitas buku positif. Ketidakmampuan ekonomi membayar berbeda dari status hukum pailit. Model risiko dan keputusan hukum mempunyai proses pembuktian tersendiri. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
        "Reorganisasi versus likuidasi: Bandingkan nilai going concern setelah biaya dengan nilai penjualan aset bersih. Nilai bersih 105 versus 87 miliar mendukung reorganisasi secara ekonomi; kelangsungan kas dan kesepakatan kreditur tetap perlu dievaluasi. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)."
      ]
    }
  ]
};
