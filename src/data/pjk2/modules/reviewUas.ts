import type { Reading } from '../../../types';

export const PJK301_UAS_REVIEW: Reading = {
  "tm": 15,
  "title": "Review Pra-UAS Perpajakan II: TM09-TM15",
  "ref": "RPP Perpajakan II, halaman PDF 3-5",
  "intro": "Review tujuh pertemuan setelah UTS. Fokus berikut merupakan perkiraan berdasarkan RPP dan contoh resmi; arsip UAS Perpajakan II belum ditemukan.",
  "objectives": [
    "Mengintegrasikan aturan, hitungan, serta bukti lintas tujuh TM."
  ],
  "blocks": [
    {
      "kind": "callout",
      "variant": "info",
      "title": "Tahun dan sumber",
      "text": "Kasus 2024 menggunakan ketentuan tahun 2024; contoh 2025 menjelaskan perubahan PPN dan administrasi. Pajak karbon merupakan simulasi dengan asumsi eksplisit. Setiap contoh mempunyai rujukan halaman atau paragraf. Buku Waluyo/Resmi lokal dan paket kanonis 04/05 pasca-UTS belum ditemukan."
    },
    {
      "kind": "h2",
      "text": "TM09: Konsep PPh 21/26, TER, dan Natura"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 09A: Audit bruto TER dan fasilitas pegawai",
      "prompt": "Januari 2024 PT Latihan Mandiri memberi pegawai TK/0 gaji Rp10 juta, apartemen individual Rp4 juta, makan bersama semua pegawai Rp1 juta, dan laptop kerja Rp15 juta. Auditor menemukan potongan Rp1,2 juta dari mengalikan 4% atas seluruh Rp30 juta. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23; PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen.",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "TER A bruto Rp12 juta adalah 4%; apartemen individual dikecualikan sampai Rp2 juta/bulan.",
            "Laptop menunjang pekerjaan; makanan disediakan di tempat kerja bagi semua pegawai."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Klasifikasikan setiap imbalan dan hitung bruto objek serta PPh 21.",
            "Bandingkan dengan potongan auditor dan hitung koreksi.",
            "Sebutkan bukti yang diperlukan untuk tiap pengecualian."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Gaji objek Rp10 juta. Apartemen objek Rp4 juta - Rp2 juta = Rp2 juta. Makan bersama serta laptop kerja dikecualikan. Bruto objek Rp12 juta; PPh = 4% × Rp12 juta = Rp480.000. Potongan auditor Rp1.200.000 berlebih Rp720.000. Kekeliruan terjadi karena fasilitas dikecualikan ikut bruto. Simpan daftar penerima, dokumen fasilitas, nilai biaya apartemen, dan bukti penggunaan laptop untuk pekerjaan. Seluruh hasil rupiah bulat; batas bulanan diuji sebelum memilih TER. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23; PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "h2",
      "text": "TM10: Penghitungan PPh 21/26 Berbagai Penerima"
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
      "kind": "h2",
      "text": "TM11: PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 11A: Rekonsiliasi badan, 31E, dan Pasal 29",
      "prompt": "Tahun Pajak 2024 PT Latihan Fiskal menggunakan rezim umum. Laba sebelum pajak Rp2,5 miliar sudah mencakup semua pos berikut. Peredaran bruto total untuk pengujian 31E ditetapkan Rp20 miliar, termasuk penghasilan yang dipisahkan. Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh.",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Jamuan tanpa bukti sah Rp40 juta dan denda pajak Rp15 juta.",
            "Penyusutan komersial Rp300 juta, fiskal sah Rp360 juta.",
            "Bunga deposito final Rp50 juta, dividen badan DN nonobjek Rp80 juta.",
            "Kredit PPh 22 Rp25 juta, PPh 23 Rp35 juta, PPh 25 Rp180 juta; pajak final deposito Rp10 juta."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Susun kertas kerja koreksi positif dan negatif serta PKP.",
            "Hitung PPh dengan fasilitas 31E dan kurang/lebih bayar.",
            "Jelaskan mengapa dividen dan pajak final dipisahkan; usulkan dokumen audit."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Koreksi positif Rp40 juta + Rp15 juta = Rp55 juta. Negatif Rp60 juta selisih penyusutan + Rp50 juta bunga + Rp80 juta dividen = Rp190 juta. PKP Rp2,5 miliar + Rp55 juta - Rp190 juta = Rp2.365.000.000, ribuan penuh. PKP fasilitas = 4,8/20 × Rp2,365 miliar = Rp567,6 juta; pajak 11% Rp62,436 juta. Sisa Rp1.797,4 juta × 22% = Rp395,428 juta. Total Rp457.864.000. Kredit reguler Rp240 juta, PPh 29 Rp217.864.000. Pajak final Rp10 juta tidak menjadi kredit reguler. Dividen domestik badan DN tidak memerlukan syarat kepemilikan 25% lama untuk pengecualian ini. Periksa bukti beban, daftar aset fiskal, bukti dividen, dan bukti potong. Semua rupiah bulat. Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "h2",
      "text": "TM12: Dasar PPN, PKP, Objek, dan Tarif"
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
      "kind": "h2",
      "text": "TM13: PPnBM, Saat Terutang, Faktur, dan Retur"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 13A: Rantai barang mewah dan retur lintas masa",
      "prompt": "Pada Maret 2025 produsen menjual BKP mewah yang telah diklasifikasi dengan PPnBM 20% kepada distributor, harga sebelum pajak Rp500 juta. April distributor menjual kembali barang sejenis Rp700 juta sebelum pajak. Pada Mei distributor mengembalikan sebagian pembelian Maret senilai Rp50 juta DPP harga asal dengan nota retur sah. Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5; UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP); UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material).",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "PPN 12% atas harga penuh, tanpa transisi eceran Januari dan tanpa insentif.",
            "Retur Mei merujuk faktur produsen Maret; semua pihak PKP."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung PPN, PPnBM, dan tagihan produsen.",
            "Hitung pajak keluaran penjualan distributor dan jelaskan PPnBM pembelian.",
            "Hitung pengurangan PPN serta PPnBM produsen pada masa Mei dan rekonsiliasi dokumen."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Produsen Maret: PPN 12% × Rp500 juta = Rp60 juta; PPnBM 20% × Rp500 juta = Rp100 juta; tagihan Rp660 juta. Distributor April: PPN 12% × Rp700 juta = Rp84 juta, PPnBM tahap jual kembali Rp0. PPnBM tidak dikreditkan sebagai PM PPN; biaya barang mengikuti pembukuan. Retur Mei: pengurangan PK produsen 12% × Rp50 juta = Rp6 juta; PPnBM 20% × Rp50 juta = Rp10 juta. Distributor menyesuaikan PM terkait retur Rp6 juta serta pembukuannya. Jangan memindahkan retur ke Maret hanya karena faktur asal Maret. Hasil rupiah bulat; tarif PPnBM 20% adalah asumsi klasifikasi kasus, perlu dokumen produk. Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5; UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP); UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material)."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    },
    {
      "kind": "h2",
      "text": "TM14: Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas"
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
      "kind": "h2",
      "text": "TM15: Pajak Karbon dan Analisis Perdagangan Karbon"
    },
    {
      "kind": "solution-reveal",
      "title": "Kasus 15A: Simulasi cap, sertifikat, dan tarif per kilogram",
      "prompt": "Simulasi Tahun Pajak 2024 untuk pembelajaran: emisi terukur 90.000 ton CO2e, batas yang diasumsikan 80.000 ton, sertifikat valid 6.000 ton diakui penuh. Tarif simulasi Rp30/kg. Perusahaan mengusulkan membeli lagi sertifikat 2.000 ton seharga Rp70 juta; diasumsikan diakui penuh dan tidak dihitung ganda. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "DPP simulasi = max(0, emisi - batas - unit diakui); 1 ton = 1.000 kg.",
            "Tidak ada biaya transaksi atau manfaat selain penurunan pajak simulasi."
          ]
        },
        {
          "kind": "ol",
          "items": [
            "Hitung pajak sebelum dan sesudah pembelian tambahan.",
            "Hitung penghematan pajak dan manfaat bersih pembelian sertifikat.",
            "Jelaskan batas antara asumsi pengakuan dalam soal dan kewajiban aktual."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Sisa awal 90.000 - 80.000 - 6.000 = 4.000 ton = 4.000.000 kg. Pajak Rp30/kg × 4.000.000 kg = Rp120 juta. Setelah tambahan sertifikat: sisa 2.000 ton = 2.000.000 kg, pajak Rp60 juta. Penghematan Rp60 juta; kurangi harga sertifikat Rp70 juta memberi manfaat bersih minus Rp10 juta. Dari manfaat pajak saja pembelian tidak ekonomis. Nilai sertifikat dalam rupiah tidak langsung dikreditkan ke pajak; satuan emisi yang diakui mengubah DPP simulasi. Pasal 13 ayat (10), (13)-(15) memerlukan penetapan dan pengakuan nyata. Jangan mengubah simulasi menjadi klaim tagihan operasional 2024. Satuan konsisten dan hasil rupiah bulat. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
        }
      ],
      "revealLabel": "Buka langkah hitung dan analisis"
    }
  ]
};
