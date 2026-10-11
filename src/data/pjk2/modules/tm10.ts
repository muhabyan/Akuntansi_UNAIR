import type { Reading } from '../../../types';

export const TM10_READING: Reading = {
  "tm": 10,
  "title": "Penghitungan PPh 21/26 Berbagai Penerima",
  "ref": "RPP Perpajakan II, halaman PDF 3-5, baris pertemuan 9-15 dan catatan UAS studi kasus",
  "intro": "Memilih metode untuk pegawai tetap, tidak tetap, bukan pegawai, pensiunan, peserta kegiatan, pesangon, dan SPLN. Menghitung bruto, neto, PTKP, PKP, pajak per lapisan, dan selisih masa terakhir. Contoh dan latihan di bawah menyatakan tahun kasus, dasar aturan, satuan, dan pembulatan.",
  "objectives": [
    "Memilih metode untuk pegawai tetap, tidak tetap, bukan pegawai, pensiunan, peserta kegiatan, pesangon, dan SPLN.",
    "Menghitung bruto, neto, PTKP, PKP, pajak per lapisan, dan selisih masa terakhir.",
    "Menindaklanjuti lebih potong dan merekonsiliasi bukti untuk pelaporan PPh Pasal 21/26."
  ],
  "blocks": [
    {
      "kind": "callout",
      "variant": "info",
      "title": "Cakupan, sumber, dan tahun kasus",
      "text": "RPP lokal menetapkan TM09-TM15 setelah UTS pada TM08. Paket kanonis 04/05 lokal baru tersedia untuk TM01-TM07. Materi ini menggunakan RPP, slide dosen yang tersedia, serta peraturan primer untuk mengisi cakupan pasca-UTS. Kasus menyebut tahun 2024 atau masa 2025 secara eksplisit; angka norma/PPnBM tertentu diberikan sebagai input soal. Buku Waluyo/Resmi dan arsip UAS Perpajakan II belum ditemukan dalam inventaris lokal. Rujukan: RPP Perpajakan II, halaman PDF 3-5, baris pertemuan 9-15 dan catatan UAS studi kasus."
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Perkiraan fokus UAS",
      "text": "Perkiraan berdasarkan capaian RPP dan contoh sumber: Penghitungan PPh 21/26 Berbagai Penerima. Latih keputusan aturan sebelum hitungan, langkah per lapisan, dokumentasi, dan koreksi kesalahan. Tidak ada arsip UAS lokal yang mengonfirmasi bobot topik atau bentuk soal. RPP menyebut studi kasus komprehensif; latihan berbahasa Indonesia mengikuti materi lokal."
    },
    {
      "kind": "h2",
      "text": "Pegawai tetap: dari bruto sampai selisih masa terakhir"
    },
    {
      "kind": "p",
      "text": "Kumpulkan seluruh bruto aktual, termasuk bonus dan natura objek. Biaya jabatan 5% bruto dibatasi Rp500.000/bulan atau Rp6 juta/tahun; iuran pensiun/hari tua pegawai yang dibayar melalui pemberi kerja kepada lembaga sah dapat dikurangkan. Zakat wajib melalui pemberi kerja kepada lembaga yang memenuhi syarat diuji tersendiri. Kurangi PTKP sesuai status awal tahun, lalu bulatkan PKP ke bawah ribuan penuh. Tarif 5%, 15%, 25%, 30%, 35% dikenakan per lapisan, bukan satu tarif atas seluruh PKP. Rujukan: PMK 168/2023, halaman PDF 10-17, Pasal 8-16."
    },
    {
      "kind": "h2",
      "text": "Urutan kertas kerja masa terakhir"
    },
    {
      "kind": "ol",
      "items": [
        "Tentukan status subjektif dan masa kerja terlebih dahulu. Bedakan berhenti bekerja dengan berakhirnya kewajiban subjektif.",
        "Jumlahkan bruto aktual uang dan natura objek untuk periode yang sesuai. Pisahkan penghasilan yang dikecualikan.",
        "Kurangi biaya jabatan sesuai jumlah bulan dan batasnya, iuran yang memenuhi syarat, serta zakat melalui pemberi kerja bila memenuhi aturan.",
        "Kurangi PTKP yang berlaku. Untuk PKP positif, bulatkan ke bawah ke ribuan rupiah penuh. PKP negatif tidak menghasilkan pajak negatif.",
        "Hitung pajak dengan lapisan Pasal 17, lalu kurangi seluruh potongan masa sebelumnya. TER bulanan sebelumnya merupakan potongan, bukan pajak tambahan di atas hasil tahunan.",
        "Catat kurang atau lebih potong. Cocokkan bukti potong akhir dan tindak lanjut pengembalian. Rujukan: PMK 168/2023, halaman PDF 10-17 dan 21, Pasal 8-16 dan 21; UU HPP, halaman PDF 56-57, Pasal 17 UU PPh."
      ]
    },
    {
      "kind": "h2",
      "text": "Pensiunan berkala dan penerima tidak teratur"
    },
    {
      "kind": "p",
      "text": "Pensiun berkala memakai TER pada masa selain masa terakhir serta tarif Pasal 17 pada masa terakhir. Biaya pensiun 5% bruto dibatasi Rp200.000/bulan atau Rp2,4 juta/tahun. Komisaris/pengawas dengan penghasilan tidak teratur memakai TER bulanan atas bruto menurut Pasal 16 ayat (1); jangan otomatis mengubahnya menjadi pegawai tetap. Mantan pegawai yang menerima bonus serta peserta program pensiun yang masih pegawai mengikuti tarif Pasal 17 atas dasar yang ditentukan Pasal 12 dan 16. Rujukan: PMK 168/2023, halaman PDF 10-17, Pasal 8-16."
    },
    {
      "kind": "h2",
      "text": "Pegawai tidak tetap dan pola pembayaran"
    },
    {
      "kind": "p",
      "text": "Untuk 2024, pembayaran harian atau bukan bulanan dengan rata-rata bruto per hari sampai Rp450.000 menggunakan TER harian 0%; di atas Rp450.000 sampai Rp2.500.000 menggunakan 0,5% atas bruto penuh. Pembayaran mingguan/borongan ditentukan dari rata-rata bruto sehari menurut jumlah hari. Bila lebih Rp2.500.000 sehari, gunakan tarif Pasal 17 atas 50% bruto. Bila diterima bulanan, gunakan TER bulanan atas bruto. Pola bayar dan batas bruto menentukan cabang aturan, sehingga pengurangan Rp450.000 dari metode lama tidak diterapkan. Rujukan: PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18."
    },
    {
      "kind": "h2",
      "text": "Bukan pegawai, peserta kegiatan, dan SPLN"
    },
    {
      "kind": "p",
      "text": "Tenaga ahli atau jasa OP SPDN tanpa hubungan pegawai memakai tarif Pasal 17 atas 50% bruto. Untuk dokter, bruto yang dibayar pasien melalui rumah sakit sebelum bagi hasil perlu ditelusuri menurut Pasal 12. Penggantian bahan, pekerja, atau pihak ketiga memerlukan kontrak serta bukti sesuai aturan; jangan mengurangi sembarang reimbursable cost, yaitu biaya yang dibayar kembali. Peserta kegiatan memakai bruto penuh. SPLN tanpa P3B menggunakan tarif 20% bruto menurut Pasal 14 dan Pasal 16 ayat (7). Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16."
    },
    {
      "kind": "h2",
      "text": "Pesangon, manfaat pensiun sekaligus, dan tahun kalender"
    },
    {
      "kind": "p",
      "text": "Pisahkan pensiun berkala dari manfaat pensiun sekaligus. PP 68/2009 menetapkan pesangon final 0%, 5%, 15%, 25% per lapisan Rp50 juta, Rp100 juta, Rp500 juta. Manfaat pensiun/JHT/THT sekaligus memakai 0% sampai Rp50 juta dan 5% sisanya. Pembayaran dalam paling lama dua tahun kalender masuk pengertian sekaligus. Bagian tahun ketiga dan selanjutnya memakai tarif Pasal 17 atas bruto dan nonfinal; jangan memakai hitungan 24 bulan sebagai pengganti tahun kalender. Rujukan: PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)."
    },
    {
      "kind": "h2",
      "text": "Lebih potong dan audit bukti"
    },
    {
      "kind": "p",
      "text": "Contoh resmi pegawai yang masuk September tetapi sudah SPDN sejak awal tahun menghasilkan lebih potong pada Desember. Selisih negatif wajib ditindaklanjuti menurut aturan pengembalian, bukan dinolkan tanpa jejak. Cocokkan penghasilan empat bulan, biaya jabatan sesuai empat bulan, iuran, PTKP, pajak terutang, potongan TER terdahulu, dan bukti potong akhir. True-up berarti penyesuaian akhir agar pemotongan sesuai pajak tahunan/bagian tahun. Rujukan: PMK 168/2023, halaman PDF 35-36, Lampiran Bagian Kedua I.2.1.1."
    },
    {
      "kind": "table",
      "title": "Pilih dasar menurut penerima pada 2024",
      "headers": [
        "Penerima",
        "Dasar dan tarif",
        "Catatan"
      ],
      "rows": [
        [
          "Pegawai tetap/pensiunan",
          "TER atas bruto; masa terakhir Pasal 17 atas PKP",
          "Uji biaya jabatan atau pensiun"
        ],
        [
          "Tidak tetap harian sampai Rp450.000",
          "TER harian 0% × bruto",
          "Batas inklusif"
        ],
        [
          "Tidak tetap harian di atas Rp450.000 sampai Rp2.500.000",
          "TER harian 0,5% × bruto",
          "Tanpa pengurangan Rp450.000"
        ],
        [
          "Tidak tetap harian di atas Rp2.500.000",
          "Pasal 17 × 50% bruto",
          "Pola bayar bukan bulanan"
        ],
        [
          "Bukan pegawai SPDN",
          "Pasal 17 × 50% bruto",
          "Uji komponen bruto"
        ],
        [
          "Peserta kegiatan SPDN",
          "Pasal 17 × bruto penuh",
          "Tidak memakai dasar 50%"
        ],
        [
          "OP SPLN tanpa P3B",
          "20% × bruto",
          "Uji status dan treaty"
        ]
      ],
      "caption": "Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16.",
      "stackOnMobile": true
    },
    {
      "kind": "formula",
      "text": "\\mathrm{PPh}_{21,\\,terakhir}=\\mathrm{PPh}_{tahunan}-\\mathrm{Potongan}_{sebelumnya}",
      "note": "Gunakan dasar dan batas cakupan pada bagian sebelumnya. Tahun 2024/2025 ditentukan pada tiap kasus."
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 10A: Pegawai masuk September dan pengembalian TER",
      "prompt": "Tuan B merupakan SPDN sejak awal 2024, baru bekerja September pada satu pemberi kerja, TK/0. Ia menerima Rp15,5 juta per bulan selama September-Desember dan membayar iuran pensiun sah Rp100.000 per bulan. TER A bruto ini 7%. Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2); PMK 168/2023, halaman PDF 35-36, Lampiran Bagian Kedua I.2.1.1.",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Bruto empat bulan Rp62 juta; potongan September-November masing-masing Rp1.085.000.",
            "Batas biaya jabatan Rp500.000/bulan; PTKP Rp54 juta."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung PKP, PPh empat bulan, serta selisih pada masa terakhir.",
            "Jelaskan apakah penghasilan perlu disetahunkan.",
            "Hitung pajak neto pada bukti potong dan tenggat pengembalian kelebihan."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Neto = Rp62 juta - min(5% × Rp62 juta, 4 × Rp500.000) - 4 × Rp100.000 = Rp59,6 juta. PKP = Rp59,6 juta - Rp54 juta = Rp5,6 juta, ribuan penuh. PPh = 5% × Rp5,6 juta = Rp280.000. Pajak terdahulu Rp3.255.000. Selisih Desember Rp280.000 - Rp3.255.000 = minus Rp2.975.000. Kelebihan dikembalikan beserta bukti potong paling lambat akhir Januari 2025. Penghasilan tidak disetahunkan karena kewajiban subjektif sudah ada sejak Januari. Bukti potong neto Rp280.000, bukan Rp3.255.000. Hasil rupiah bulat; contoh mengikuti Lampiran PMK 168/2023. Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2); PMK 168/2023, halaman PDF 35-36, Lampiran Bagian Kedua I.2.1.1."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 10B: Empat penerima, empat dasar pemotongan",
      "prompt": "Pada 2024 perusahaan membayar tenaga ahli SPDN Rp200 juta, upah mingguan Rp3 juta untuk enam hari, hadiah peserta kegiatan Rp80 juta, dan pesangon sekaligus Rp600 juta kepada empat orang berbeda. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16; PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18; PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga).",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Honor seluruhnya jasa tenaga ahli; upah tidak dibayar bulanan.",
            "Pesangon dibayar seluruhnya pada tahun kalender pertama; penerima SPDN."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung pajak tiap penerima dan jumlah potongan.",
            "Pisahkan final dan nonfinal.",
            "Uji usulan staf memakai 5% atas seluruh pembayaran dan terangkan dua kesalahannya."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Tenaga ahli: dasar 50% × Rp200 juta = Rp100 juta, pajak 5% × Rp60 juta + 15% × Rp40 juta = Rp9 juta nonfinal. Upah: Rp3 juta/6 = Rp500.000/hari, 0,5% × Rp500.000 × 6 = Rp15.000 nonfinal. Kegiatan: 5% × Rp60 juta + 15% × Rp20 juta = Rp6 juta nonfinal. Pesangon: 0% × Rp50 juta + 5% × Rp50 juta + 15% × Rp400 juta + 25% × Rp100 juta = Rp87,5 juta final. Total Rp102.515.000; nonfinal Rp15.015.000 dan final Rp87.500.000. Staf salah menyamakan dasar dan mengabaikan lapisan serta sifat final. Tarif dikalikan rupiah, satuan harian dikalikan jumlah hari; seluruh nilai bulat. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16; PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18; PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "h2",
      "text": "Rujukan yang dapat ditelusuri"
    },
    {
      "kind": "ul",
      "items": [
        "PMK 168/2023, halaman PDF 10-17, Pasal 8-16.",
        "PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18.",
        "PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16.",
        "PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga).",
        "PMK 168/2023, halaman PDF 35-36, Lampiran Bagian Kedua I.2.1.1."
      ]
    },
    {
      "kind": "p",
      "text": "Sumber resmi untuk memeriksa paragraf: [PMK 168/2023](https://www.pajak.go.id/id/peraturan/petunjuk-pelaksanaan-pemotongan-pajak-atas-penghasilan-sehubungan-dengan-pekerjaan-jasa-1); [PP 68/2009](https://jdih.kemenkeu.go.id/api/download/fulltext/2009/68TAHUN2009PP.htm). Halaman PDF dihitung dari awal berkas, bukan nomor slide yang dapat berbeda satu halaman."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Batas sumber dan penerapan",
      "text": "Materi memakai tahun kasus yang disebutkan. Aturan khusus memerlukan klasifikasi, dokumen, dan ketentuan pelaksana yang sesuai. Buku Waluyo/Resmi dan arsip UAS Perpajakan II belum tersedia untuk membandingkan kedalaman pembahasan dan pola ujian."
    }
  ]
};
