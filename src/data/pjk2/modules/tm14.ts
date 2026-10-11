import type { Reading } from '../../../types';

export const TM14_READING: Reading = {
  "tm": 14,
  "title": "Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
  "ref": "RPP Perpajakan II, halaman PDF 3-5, baris pertemuan 9-15 dan catatan UAS studi kasus",
  "intro": "Memilih mekanisme PM aktual, PM bersama, pedoman sebelum PKP, atau besaran tertentu. Menghitung kredit awal, penghitungan kembali, serta saldo setelah pungutan pihak pemungut. Contoh dan latihan di bawah menyatakan tahun kasus, dasar aturan, satuan, dan pembulatan.",
  "objectives": [
    "Memilih mekanisme PM aktual, PM bersama, pedoman sebelum PKP, atau besaran tertentu.",
    "Menghitung kredit awal, penghitungan kembali, serta saldo setelah pungutan pihak pemungut.",
    "Menentukan fasilitas, pilihan restitusi, tenggat, dan dokumen untuk SPT Masa PPN."
  ],
  "blocks": [
    {
      "kind": "callout",
      "variant": "info",
      "title": "Cakupan, sumber, dan tahun kasus",
      "text": "RPP lokal menetapkan TM09-TM15 setelah UTS pada TM08. Paket kanonis 04/05 lokal baru tersedia untuk TM01-TM07. Materi menggunakan RPP, slide dosen, peraturan primer, serta bacaan terbuka bertanda edisi dan halaman pada bagian Bacaan terbuka sesuai RPP. Kasus menyebut tahun 2024 atau masa 2025 secara eksplisit; angka norma/PPnBM tertentu diberikan sebagai input soal. Buku Waluyo/Resmi dan arsip UAS Perpajakan II belum ditemukan dalam inventaris lokal. Rujukan: RPP Perpajakan II, halaman PDF 3-5, baris pertemuan 9-15 dan catatan UAS studi kasus."
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Perkiraan fokus UAS",
      "text": "Perkiraan berdasarkan capaian RPP dan contoh sumber: Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas. Latih keputusan aturan sebelum hitungan, langkah per lapisan, dokumentasi, dan koreksi kesalahan. Tidak ada arsip UAS lokal yang mengonfirmasi bobot topik atau bentuk soal. RPP menyebut studi kasus komprehensif; latihan berbahasa Indonesia mengikuti materi lokal."
    },
    {
      "kind": "h2",
      "text": "Pengkreditan dan larangan PM"
    },
    {
      "kind": "p",
      "text": "PM dikreditkan pada masa yang sama dengan PK bila faktur/dokumen serta hubungan usaha memenuhi syarat. PM yang belum dikreditkan dapat digunakan pada paling lama tiga masa berikutnya, sepanjang belum menjadi biaya atau dikapitalisasi dan syarat lain terpenuhi. PM tidak terkait usaha atau faktur yang tidak memenuhi syarat tidak langsung dikreditkan. Pasal 9 ayat (9a) menyediakan pedoman 80% PK seharusnya untuk mekanisme sebelum pengukuhan, dengan pengujian tersendiri; jangan menganggap semua faktur sebelum PKP selalu boleh kredit penuh. Rujukan: UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
    },
    {
      "kind": "h2",
      "text": "Identifikasi langsung dan PM bersama"
    },
    {
      "kind": "p",
      "text": "Jika PM dapat ditelusuri langsung ke penyerahan yang mendukung kredit, gunakan jumlahnya; PM langsung pada penyerahan dibebaskan tidak dikreditkan. Bila PM bersama tidak dapat diidentifikasi, pedoman PMK 186/2022 memakai perkiraan proporsi penyerahan yang mendukung kredit terhadap seluruh penyerahan. Penghitungan kembali menggunakan realisasi tahunan. Ini berbeda dari pedoman PPN besaran tertentu sektoral yang dapat membatasi kredit PM; tarif lama NPPN tidak disalin sebagai pedoman universal setelah perubahan HPP. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian)."
    },
    {
      "kind": "h2",
      "text": "Pedoman lama dan besaran tertentu: baca tahun soal"
    },
    {
      "kind": "p",
      "text": "Sebagai pembanding historis sebelum perubahan HPP, PMK 74/2010 menetapkan syarat peredaran sampai Rp1,8 miliar, pemberitahuan, serta kredit PM 60% dari PK untuk JKP atau 70% untuk BKP. Jika PK jasa Rp10 juta dalam skenario lama yang memenuhi syarat, PM pedoman Rp6 juta dan setor Rp4 juta, tanpa menambah kredit faktur aktual. HPP menghapus Pasal 9 ayat (7)-(7b) dan menambahkan Pasal 9A tentang PPN besaran tertentu dengan PM terkait tidak dapat dikreditkan. NPPN untuk PPh tidak otomatis memberi hak memakai pedoman PPN lama pada 2024/2025. Rujukan: PMK 74/2010, Pasal 2-7 (paragraf syarat dan persentase PM pedoman); UU HPP, halaman PDF 73 dan 76, Pasal 9 ayat (7)-(7b) dan Pasal 9A UU PPN."
    },
    {
      "kind": "p",
      "text": "Contoh aktual masa 2024: pedagang PKP menjual kendaraan bekas sebagai persediaan, harga Rp200 juta. PMK 65/2022 memakai besaran tertentu 1,1% × Rp200 juta = Rp2,2 juta yang dipungut dan disetor; PM yang berhubungan dengan penyerahan itu tidak dikreditkan. Ini berbeda dari menjual aktiva Pasal 16D atau dari PM bersama PMK 186/2022. PMK 65 mencabut pedoman usaha tertentu PMK 79/2010. Rumus 2024 ini tidak dipindahkan otomatis ke 2025 sesudah perubahan nilai lain/besaran tertentu. Rujukan: PMK 65/2022, halaman PDF 4-7, Pasal 2, 4-7 (paragraf besaran tertentu, larangan kredit, dan pencabutan pedoman lama)."
    },
    {
      "kind": "h2",
      "text": "Penghitungan kembali aset dan penyesuaian"
    },
    {
      "kind": "p",
      "text": "P awal = PM × Z perkiraan. P′ tahunan = PM/T × Z′ realisasi. Penyesuaian = P′ - P/T. T = 1 untuk barang/jasa masa manfaat sampai satu tahun, 4 untuk selain tanah/bangunan atau jasa dengan masa manfaat lebih satu tahun, dan 10 untuk tanah/bangunan menurut pedoman. Penyesuaian positif menambah PM; negatif mengurangi. Lakukan selama masa manfaat sesuai aturan dan paling lambat masa ketiga tahun penghitungan kembali; contoh realisasi 2024 dilaporkan paling lambat Maret 2025. Jangan membalik selisih seluruh PM awal sekaligus untuk aset T = 4. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian)."
    },
    {
      "kind": "h2",
      "text": "Pemungut dan fasilitas"
    },
    {
      "kind": "p",
      "text": "Pasal 16A menempatkan pemungutan pada pemungut PPN untuk transaksi yang memenuhi aturan; bukti pungut diperlukan agar PKP tidak menyetor pajak yang sama dua kali. Pasal 16B membedakan tidak dipungut dan dibebaskan: PM terkait tidak dipungut dapat dikreditkan jika sah; PM terkait dibebaskan tidak dapat dikreditkan. Pemerintah, BUMN, dan pihak tertentu memiliki pengaturan penunjukan serta mekanisme masing-masing. Soal menetapkan pihak pemerintah sebagai pemungut dan pajak telah dipungut; jangan menganggap semua pembeli pemerintah selalu memenuhi pengecualian/ambang yang sama. Rujukan: UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan). Dasar pemungut: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN)."
    },
    {
      "kind": "h2",
      "text": "Restitusi, jangka penyelesaian, dan SPT masa"
    },
    {
      "kind": "p",
      "text": "Lebih bayar umumnya dikompensasikan; pengembalian pada akhir tahun buku atau per masa bagi kategori Pasal 9 ayat (4b), seperti eksportir, perlu permohonan. Jalur pemeriksaan Pasal 17B umumnya keputusan paling lama 12 bulan sejak permohonan lengkap; pengembalian pendahuluan 17C/17D memiliki kriteria dan jangka tersendiri. Jangan menjanjikan semua restitusi cair tiga bulan. Rekonsiliasi PK, PK yang dipungut pemungut, PM sah, kompensasi, penyesuaian, retur dan fasilitas sebelum melapor. UU PPN Pasal 15A mengatur PKP setor sebelum lapor serta lapor akhir bulan berikutnya; administrasi khusus mengikuti tahun dan peraturan yang berlaku. Rujukan: UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D."
    },
    {
      "kind": "table",
      "title": "Pisahkan fasilitas dan kredit PM",
      "headers": [
        "Penyerahan",
        "PK dipungut dari pembeli",
        "PM terkait"
      ],
      "rows": [
        [
          "Biasa kena pajak",
          "Sesuai tarif/skema",
          "Dapat dikreditkan bila sah"
        ],
        [
          "Ekspor BKP berwujud",
          "Tarif 0%",
          "Dapat dikreditkan bila sah"
        ],
        [
          "PPN tidak dipungut",
          "Tidak dipungut sesuai fasilitas",
          "Dapat dikreditkan bila sah"
        ],
        [
          "PPN dibebaskan",
          "Dibebaskan sesuai fasilitas",
          "Tidak dapat dikreditkan"
        ]
      ],
      "caption": "Rujukan: UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan).",
      "stackOnMobile": true
    },
    {
      "kind": "formula",
      "text": "P=PM\\times Z,\\quad P^{\\prime}=\\frac{PM}{T}\\times Z^{\\prime},\\quad\\Delta P=P^{\\prime}-\\frac{P}{T}",
      "note": "Gunakan dasar dan batas cakupan pada bagian sebelumnya. Tahun 2024/2025 ditentukan pada tiap kasus."
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 14A: PM langsung, bersama, dan penghitungan kembali",
      "prompt": "Tahun 2024 PKP memiliki PM langsung Rp11 juta untuk penyerahan kena pajak dan PM langsung Rp5 juta untuk penyerahan dibebaskan. Mesin untuk kegiatan bersama diperoleh dengan PM Rp44 juta, tidak dapat dipisahkan dari pembukuan. Porsi perkiraan penyerahan yang mendukung kredit 80%, realisasi 2024 70%. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian); UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan); UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Masa manfaat mesin menurut pedoman empat tahun; semua faktur sah.",
            "PPN langsung dibebaskan tidak dapat dikreditkan; mesin dicatat terpisah dalam daftar PM bersama."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung kredit PM awal 2024.",
            "Hitung penghitungan kembali dan penyesuaian yang paling lambat dilaporkan Maret 2025.",
            "Jelaskan dampak jika penyerahan berfasilitas memperoleh tidak dipungut, serta bukti yang harus dipisahkan."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Kredit langsung Rp11 juta; PM terkait dibebaskan Rp5 juta tidak dikreditkan. Kredit mesin awal P = 80% × Rp44 juta = Rp35,2 juta. Total kredit awal Rp46,2 juta. Alokasi P/T = Rp8,8 juta; P′ = Rp44 juta/4 × 70% = Rp7,7 juta. Penyesuaian = Rp7,7 juta - Rp8,8 juta = minus Rp1,1 juta, pengurang PM paling lambat masa Maret 2025. Kredit awal mesin tidak seluruhnya dibalik Rp4,4 juta sekaligus. Fasilitas tidak dipungut memungkinkan PM langsung Rp5 juta dikreditkan bila sah; perubahan proporsi bersama perlu dihitung ulang dari data penyerahan yang sesuai. Pisahkan bukti fasilitas, PM langsung, PM bersama, dan daftar penggunaan aset. Rupiah bulat. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian); UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan); UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 14B: Pemungut, saldo lebih bayar, dan permohonan",
      "prompt": "Masa Oktober 2024 PKP menjual kepada swasta dengan DPP Rp100 juta serta pemerintah pemungut dengan DPP Rp200 juta. PPN 11% pemerintah sudah dipungut dan disetor. PM sah Rp16,5 juta; tidak ada kompensasi. Terpisah, eksportir pada November mempunyai PK Rp0 dan PM sah Rp55 juta. Rujukan: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN); UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Bukti pungut pemerintah lengkap; PM usaha dan seluruh syarat faktur sah.",
            "Eksportir ingin restitusi per masa, tetapi status untuk pengembalian pendahuluan belum diketahui."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung PK total serta saldo yang diperhitungkan sendiri dan cegah setor ganda.",
            "Tentukan apakah eksportir boleh mengajukan per masa dan apakah pencairan otomatis.",
            "Bedakan jalur pemeriksaan dan pengembalian pendahuluan serta informasi yang masih perlu diperoleh."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "PK swasta Rp11 juta; pemerintah Rp22 juta; total Rp33 juta. Kurangi bagian dipungut pemerintah Rp22 juta dan PM Rp16,5 juta: minus Rp5,5 juta lebih bayar untuk posisi sendiri. Rekonsiliasi faktur dan bukti pungut; jangan menyetor kembali Rp22 juta. Eksportir lebih bayar Rp55 juta dan dapat mengajukan per masa menurut Pasal 9 ayat (4b). Jalur pemeriksaan Pasal 17B umumnya keputusan paling lama 12 bulan sejak permohonan lengkap; jalur pendahuluan 17C/17D mempunyai syarat tersendiri. Status risiko, kelengkapan permohonan, dan kriteria WP harus diperoleh sebelum menjanjikan jalur atau tanggal cair. Hak mengajukan tidak menjamin pencairan otomatis. Hasil rupiah bulat. Rujukan: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN); UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "p",
      "text": "Ilustrasi pelaporan dari manual DJP: cocokkan daftar PK dan PM dengan kertas kerja, pilih status normal atau pembetulan, lalu kompensasi atau jalur pengembalian yang memenuhi syarat. Draf tersimpan atau kode billing terbentuk belum membuktikan SPT sudah terkirim. Periksa pembayaran, status penyampaian, dan bukti penerimaan. Rujukan: DJP Manual SPT Masa PPN, edisi 20240909, halaman PDF 52-60 (paragraf konsep SPT, kurang/lebih bayar, lampiran, pembayaran dan status)."
    },
    {
      "kind": "h2",
      "text": "Bacaan terbuka sesuai RPP"
    },
    {
      "kind": "ul",
      "items": [
        "[DJP manual SPT Masa PPN (edisi 20240909)](https://pajak.go.id/sites/default/files/2025-04/Buku%20Manual%20SPT%20Masa%20PPN.pdf#page=21): PDF 21-24 PM/pemungut, 52-60 SPT, kompensasi, pengembalian, pembayaran dan status."
      ]
    },
    {
      "kind": "p",
      "text": "Menu Credit Invoice berarti mengkreditkan faktur; Carry Forward berarti mengompensasikan lebih bayar; normal/fast refund berarti pengembalian biasa/pendahuluan. Pilihan menu harus sesuai syarat UU, bukan jaminan kredit atau pencairan. Tampilan edisi ini dapat berbeda dari aplikasi pada tahun berikutnya."
    },
    {
      "kind": "h2",
      "text": "Rujukan yang dapat ditelusuri"
    },
    {
      "kind": "ul",
      "items": [
        "UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
        "PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian).",
        "UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan).",
        "UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D.",
        "PMK 74/2010, Pasal 2-7 (paragraf syarat dan persentase PM pedoman); UU HPP, halaman PDF 73 dan 76, Pasal 9 ayat (7)-(7b) dan Pasal 9A UU PPN.",
        "PMK 65/2022, halaman PDF 4-7, Pasal 2, 4-7 (paragraf besaran tertentu, larangan kredit, dan pencabutan pedoman lama)."
      ]
    },
    {
      "kind": "p",
      "text": "Sumber resmi untuk memeriksa paragraf: [PMK 186/2022](https://jdih.kemenkeu.go.id/api/download/2fbbf7e4-26e6-4a89-bb99-0ba876196196/186~PMK.03~2022.pdf). Halaman PDF dihitung dari awal berkas, bukan nomor slide yang dapat berbeda satu halaman."
    },
    {
      "kind": "p",
      "text": "Sumber resmi tambahan: [PMK 74/2010, pembanding historis](https://pajak.go.id/en/node/62013); [PMK 65/2022](https://jdih.kemenkeu.go.id/api/download/77a0009c-d125-41c4-b020-635d14500c0b/65~PMK.03~2022Per.pdf)."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Batas sumber dan penerapan",
      "text": "Materi memakai tahun kasus yang disebutkan. Aturan khusus memerlukan klasifikasi, dokumen, dan ketentuan pelaksana yang sesuai. Katalog Waluyo/Resmi sudah ditelusuri, tetapi isi bukunya belum diakses. Bacaan terbuka tersedia pada bagian di atas. Arsip UAS Perpajakan II belum ditemukan untuk mengonfirmasi bobot dan bentuk ujian."
    }
  ]
};
