import type { Reading } from '../../../types';

export const TM12_READING: Reading = {
  "tm": 12,
  "title": "Dasar PPN, PKP, Objek, dan Tarif",
  "ref": "RPP Perpajakan II, halaman PDF 3-5, baris pertemuan 9-15 dan catatan UAS studi kasus",
  "intro": "Mengidentifikasi objek, pengecualian, status PKP, dan karakter pemungutan PPN. Memilih DPP dan tarif menurut tahun, termasuk harga sudah mengandung PPN dan impor. Contoh dan latihan di bawah menyatakan tahun kasus, dasar aturan, satuan, dan pembulatan.",
  "objectives": [
    "Mengidentifikasi objek, pengecualian, status PKP, dan karakter pemungutan PPN.",
    "Memilih DPP dan tarif menurut tahun, termasuk harga sudah mengandung PPN dan impor.",
    "Menghubungkan PK, PM, faktur, penyetoran, dan kewajiban pelaporan PKP."
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
      "text": "Perkiraan berdasarkan capaian RPP dan contoh sumber: Dasar PPN, PKP, Objek, dan Tarif. Latih keputusan aturan sebelum hitungan, langkah per lapisan, dokumentasi, dan koreksi kesalahan. Tidak ada arsip UAS lokal yang mengonfirmasi bobot topik atau bentuk soal. RPP menyebut studi kasus komprehensif; latihan berbahasa Indonesia mengikuti materi lokal."
    },
    {
      "kind": "p",
      "text": "PM = Pajak Masukan, yaitu PPN atas perolehan atau impor yang diuji pengkreditannya. PK = Pajak Keluaran, yaitu PPN yang wajib dipungut PKP atas penyerahannya. DPP = Dasar Pengenaan Pajak, nilai yang menjadi dasar mengalikan tarif. PKP di bagian ini berarti Pengusaha Kena Pajak. PK dan PM berupa jumlah pajak; DPP berupa nilai transaksi menurut skema yang dipakai. Rujukan: UU PPN Pasal 1 angka 15, 17, 24 dan 25 (paragraf PKP, DPP, PM, dan PK)."
    },
    {
      "kind": "h2",
      "text": "Latar belakang dan karakter PPN"
    },
    {
      "kind": "p",
      "text": "PPN menggantikan pajak penjualan dengan sistem pengenaan pertambahan nilai pada mata rantai transaksi. PPN merupakan pajak konsumsi dalam daerah pabean, bersifat tidak langsung dan objektif. Multi stage berarti dikenakan pada beberapa tahap; credit method berarti PK dikurangi PM sah, sehingga tidak cukup menghitung pajak atas laba akuntansi. PPN atas impor serta pemanfaatan hak/jasa luar negeri perlu diuji tersendiri. Ekspor BKP berwujud oleh PKP tarif 0% tetap merupakan penyerahan terutang pajak. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9."
    },
    {
      "kind": "h2",
      "text": "PKP, objek, dan pengecualian"
    },
    {
      "kind": "p",
      "text": "PKP adalah Pengusaha Kena Pajak. BKP berarti Barang Kena Pajak; JKP berarti Jasa Kena Pajak. Identifikasi penyerahan di daerah pabean dalam kegiatan usaha, impor, pemanfaatan dari luar pabean, serta ekspor sesuai syarat UU PPN. Makanan/minuman restoran yang menjadi objek pajak daerah berada di luar PPN menurut Pasal 4A. Barang/jasa tertentu lain dapat mendapat fasilitas dibebaskan atau tidak dipungut dan bukan semuanya kehilangan status objek. Ambang pengusaha kecil serta saat pengukuhan memakai aturan administrasi yang sesuai tahun; jangan menentukan status PKP hanya dari satu faktur. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9."
    },
    {
      "kind": "h2",
      "text": "Ambang PKP dan tahun mulai kewajiban"
    },
    {
      "kind": "p",
      "text": "Dalam skenario tahun buku kalender 2024, pengusaha yang melebihi ambang pengusaha kecil Rp4,8 miliar wajib melaporkan usaha untuk pengukuhan PKP paling lambat akhir tahun buku, yaitu 31 Desember 2024. Jika melapor tepat waktu dengan jalur umum Pasal 17-18, kewajiban mulai masa pertama tahun buku berikutnya, Januari 2025. Pengusaha kecil dapat memilih menjadi PKP; pengukuhan lebih awal serta pelaporan terlambat mengikuti cabang aturan tersendiri Pasal 19-20. Tenggat akhir bulan berikutnya pada PMK 197/2013 lama perlu dibedakan dari aturan ini. Rujukan: PMK 164/2023, halaman PDF 16-18, Pasal 17-20 (paragraf ambang pengusaha kecil, batas pelaporan, awal kewajiban, dan pengukuhan lebih awal)."
    },
    {
      "kind": "h2",
      "text": "Tarif formal dan tahun transaksi"
    },
    {
      "kind": "p",
      "text": "Pada April 2022 sampai 2024 tarif umum PPN 11%. Mulai 1 Januari 2025 tarif UU 12%; PMK 131/2024 mengatur nonmewah biasa dengan DPP nilai lain 11/12 harga jual, penggantian, atau nilai impor, sehingga hasil efektif 11%. BKP mewah yang dikenai PPnBM memakai harga/nilai impor penuh sesuai Pasal 2. Penjualan eceran mewah kepada konsumen akhir memiliki transisi Januari 2025; soal Maret menghindari transisi itu. Nilai lain khusus dan besaran tertentu di luar skema ini mengikuti Pasal 4 dan aturan sektoral, termasuk perubahan PMK 11/2025 jo. 53/2025; jangan memakai satu rumus untuk seluruh transaksi. Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
    },
    {
      "kind": "h2",
      "text": "DPP dan harga termasuk pajak"
    },
    {
      "kind": "p",
      "text": "DPP bisa harga jual, penggantian, nilai impor, nilai ekspor, atau nilai lain. Pada transaksi nonmewah biasa 2025, pisahkan harga jual dari DPP nilai lain. Harga Rp200 juta memberi DPP 11/12 × Rp200 juta dan PPN Rp22 juta. Jika total Rp222 juta sudah termasuk PPN, harga Rp222 juta/1,11 = Rp200 juta. Jangan mengurangi total langsung 11% atau memakai pembagi 1,12 untuk skema ini. Pertahankan presisi pecahan selama hitung, lalu tulis hasil dan konvensi pembulatan. Rujukan: PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
    },
    {
      "kind": "h2",
      "text": "Impor dan mekanisme kredit"
    },
    {
      "kind": "p",
      "text": "Nilai impor meliputi CIF, bea masuk serta pungutan kepabeanan yang masuk definisi; CIF berarti biaya barang, asuransi, dan angkut. PPh 22 tidak menjadi PM PPN. PPN impor yang sah dan terkait usaha dapat menjadi PM dengan dokumen yang memenuhi ketentuan. PK lebih besar dari PM menghasilkan kurang bayar; PM lebih besar menghasilkan lebih bayar yang umumnya dikompensasikan dengan opsi pengembalian sesuai syarat. PM tidak sama dengan harga barang dan tidak dipotong langsung dari omzet. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c). Dasar definisi nilai impor: UU PPN Pasal 1 angka 20 (paragraf nilai dasar bea masuk ditambah pungutan kepabeanan dan cukai, tanpa PPN/PPnBM)."
    },
    {
      "kind": "h2",
      "text": "Kewajiban PKP dan kontrol dokumen"
    },
    {
      "kind": "p",
      "text": "PKP memungut, membuat faktur tepat waktu dan benar, mencatat transaksi, menguji kredit PM, menyetor serta melapor. Faktur harus memenuhi formal dan material, artinya identitas/isi serta transaksi sebenarnya sesuai. Pengembalian barang, pembatalan jasa, transaksi valas dan penyerahan kepada pemungut memerlukan dokumen penghubung. Data buku pembantu penjualan, pembelian, persediaan, uang muka dan faktur digunakan untuk rekonsiliasi masa. Rujukan: UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material)."
    },
    {
      "kind": "table",
      "title": "Tahun dan skema PPN transaksi biasa",
      "headers": [
        "Transaksi",
        "Tarif dan dasar",
        "Batas cakupan"
      ],
      "rows": [
        [
          "BKP/JKP biasa tahun 2024",
          "11% × harga/penggantian",
          "Tanpa fasilitas atau skema khusus"
        ],
        [
          "BKP nonmewah/JKP biasa mulai 2025",
          "12% × 11/12 × harga/penggantian",
          "Pasal 3 PMK 131/2024"
        ],
        [
          "BKP mewah yang dikenai PPnBM, Maret 2025",
          "12% × harga penuh",
          "Uji klasifikasi, tanpa insentif"
        ],
        [
          "Ekspor BKP berwujud oleh PKP",
          "0% × nilai ekspor",
          "PM sah masih dapat dikreditkan"
        ]
      ],
      "caption": "Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
      "stackOnMobile": true
    },
    {
      "kind": "formula",
      "text": "\\mathrm{PPN}_{nonmewah,2025}=12\\%\\times\\frac{11}{12}\\times\\mathrm{Harga}",
      "note": "Gunakan dasar dan batas cakupan pada bagian sebelumnya. Tahun 2024/2025 ditentukan pada tiap kasus."
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 12A: Tarif lintas tahun dan harga termasuk pajak",
      "prompt": "PKP menyerahkan BKP nonmewah biasa dengan harga sebelum PPN Rp200 juta pada September 2024 dan Maret 2025. Faktur lain Maret 2025 senilai Rp222 juta sudah termasuk PPN. Semua transaksi tanpa fasilitas atau skema khusus. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Tarif 2024 11%; sejak 2025 tarif formal 12% dengan nilai lain 11/12 untuk transaksi kasus.",
            "Harga termasuk pajak tidak mencakup PPnBM."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung DPP dan PPN kedua transaksi lintas tahun.",
            "Pisahkan harga jual dan DPP nilai lain pada faktur 2025.",
            "Uraikan harga sebelum pajak faktur Rp222 juta dan koreksi usulan membaginya dengan 1,12."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "2024: DPP harga jual Rp200 juta, PPN 11% = Rp22 juta. Maret 2025: harga Rp200 juta, DPP nilai lain 11/12 × Rp200 juta = Rp183.333.333,3333, PPN 12% = Rp22 juta. Total faktur masing-masing Rp222 juta. Faktur inklusif: harga = Rp222 juta/1,11 = Rp200 juta, DPP nilai lain Rp183.333.333,3333, PPN Rp22 juta. Pembagi 1,12 mengabaikan nilai lain. Jangan membulatkan pecahan antara sebelum mengalikan tarif; hasil akhir rupiah bulat. Persamaan efektif 11% tidak mengganti tarif formal. Untuk barang mewah atau DPP khusus, tentukan dasar berbeda dari sumbernya. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 12B: Impor, penjualan domestik, ekspor, dan kredit",
      "prompt": "April 2025 PKP mengimpor bahan nonmewah biasa dengan CIF Rp500 juta serta bea masuk Rp50 juta. Perusahaan menjual domestik Rp800 juta sebelum PPN dan mengekspor BKP berwujud Rp300 juta. Tidak ada fasilitas atau skema khusus. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Pungutan kepabeanan lain nihil; PPN impor dibayar dengan dokumen sah dan terkait usaha.",
            "PM domestik tambahan Rp11 juta sah; tanpa kompensasi masa sebelumnya."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung nilai impor dan PPN impor.",
            "Hitung PK domestik serta ekspor.",
            "Hitung saldo masa dan jelaskan status PM impor serta bukti pendukung."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Nilai impor Rp550 juta. PPN impor = 12% × 11/12 × Rp550 juta = Rp60.500.000. PK domestik = 12% × 11/12 × Rp800 juta = Rp88.000.000. Ekspor BKP berwujud tarif 0% memberi PK Rp0. Kredit PM = Rp60,5 juta + Rp11 juta = Rp71,5 juta. Setoran sendiri Rp88 juta - Rp71,5 juta = Rp16.500.000. Dokumen impor, bukti pembayaran PPN impor, faktur domestik dan bukti ekspor perlu cocok; PPh 22 tidak ditambahkan pada PM PPN. Pertahankan pecahan DPP hingga akhir, satuan rupiah, hasil bulat. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
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
        "UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9.",
        "PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
        "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
        "UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material).",
        "PMK 164/2023, halaman PDF 16-18, Pasal 17-20 (paragraf ambang pengusaha kecil, batas pelaporan, awal kewajiban, dan pengukuhan lebih awal)."
      ]
    },
    {
      "kind": "p",
      "text": "Sumber resmi untuk memeriksa paragraf: [UU PPN Pasal 4 ayat (1)](https://www.pajak.go.id/index.php/id/peraturan/harmonisasi-peraturan-perpajakan); [PMK 131/2024](https://www.pajak.go.id/id/peraturan/perlakuan-pajak-pertambahan-nilai-atas-impor-barang-kena-pajak-penyerahan-barang-kena). Halaman PDF dihitung dari awal berkas, bukan nomor slide yang dapat berbeda satu halaman."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Batas sumber dan penerapan",
      "text": "Materi kuliah dan pembaruan aturan disajikan dengan tahun kasusnya. Untuk ketentuan khusus yang tidak diberi tarif atau klasifikasi sah, cari aturan pelaksana dan bukti transaksi lebih dahulu. Kasus karbon merupakan simulasi; tidak menyatakan kewajiban operasional seluruh sektor pada 2026. Ketidakpastian lebih rinci dicatat pada audit sumber di PR."
    },
    {
      "kind": "p",
      "text": "Materi memakai tahun kasus yang disebutkan. Aturan khusus memerlukan klasifikasi, dokumen, dan ketentuan pelaksana yang sesuai. Buku Waluyo/Resmi dan arsip UAS Perpajakan II belum tersedia untuk membandingkan kedalaman pembahasan dan pola ujian."
    }
  ]
};
