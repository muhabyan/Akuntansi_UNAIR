// AKA201 TM04/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM4_READING: Reading = {
  "tm": 4,
  "title": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
  "intro": "**Sumber utama:** Arens dkk., Ch.4, pp.86–99. **Standar:** ISA 200 (SA 200), terutama bagian skeptisisme, pertimbangan profesional, dan keterbatasan bawaan audit.",
  "objectives": [
    "Membedakan peran manajemen, TCWG, dan auditor.",
    "Menjelaskan kenapa keyakinan audit tidak absolut.",
    "Membedakan error, fraud, dan dua jenis fraud.",
    "Menjelaskan area yang paling sulit bagi auditor.",
    "Bersikap skeptis, termasuk saat mewawancarai manajemen."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: siapa membuat, siapa mengawasi, siapa menguji",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** ada tiga peran yang tidak boleh tertukar."
        },
        {
          "kind": "table",
          "headers": [
            "Peran",
            "Siapa",
            "Tugasnya"
          ],
          "rows": [
            [
              "**Membuat**",
              "Manajemen",
              "Menyusun laporan keuangan, memilih kebijakan akuntansi, menilai kelangsungan usaha, menjaga pengendalian internal"
            ],
            [
              "**Mengawasi**",
              "Pihak yang bertanggung jawab atas tata kelola (TCWG), misalnya dewan atau komite audit",
              "Mengawasi proses pelaporan keuangan dan audit, lalu menyetujui laporan keuangan yang diaudit"
            ],
            [
              "**Menguji**",
              "Auditor",
              "Memperoleh keyakinan memadai bahwa laporan bebas salah saji material, lalu menyatakan opini"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.87–89; ISA200 paras. 4, 11)`"
        },
        {
          "kind": "p",
          "text": "**Tata kelola korporat (corporate governance)** menurut buku adalah seperangkat hubungan antara manajemen, dewan, pemegang saham, dan pemangku kepentingan lain. Tata kelola menjadi struktur untuk menetapkan tujuan perusahaan, cara mencapainya, dan cara memantau kinerjanya. Di entitas kecil, TCWG bisa hanya satu orang, misalnya pemilik yang sekaligus pengelola. `(ARENS p.88)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi: kaitan dengan agency theory (TM01).** Di TM01, pemilik (prinsipal) mendelegasikan pengelolaan kepada manajer (agen), dan kepentingan keduanya bisa berbeda. Pembagian peran di atas bisa dibaca sebagai jawaban atas masalah itu: manajer yang membuat laporan, TCWG yang mengawasi atas nama pemilik, dan auditor independen yang menguji. Jensen dan Meckling menyebut auditing sebagai salah satu bentuk monitoring. `(Jensen & Meckling 1976, p.323)` Pengaitan tata kelola dengan agency theory di sini adalah susunan penulis."
        },
        {
          "kind": "p",
          "text": "**Sikap yang dituntut dari penguji adalah skeptisisme profesional:** percaya, tetapi verifikasi. `(ARENS p.97)` Sikap ini diperlukan karena yang diuji adalah klaim dari pihak yang punya kepentingan (TM01, *biases and motives of the provider*)."
        },
        {
          "kind": "h3",
          "text": "Kesalahpahaman umum"
        },
        {
          "kind": "table",
          "headers": [
            "Anggapan yang keliru",
            "Yang benar",
            "Sumber"
          ],
          "rows": [
            [
              "\"Auditor bertanggung jawab atas laporan keuangan.\"",
              "Audit berjalan di atas premis bahwa manajemen bertanggung jawab atas laporan keuangan, dan audit tidak membebaskan manajemen dari tanggung jawab itu.",
              "ISA200 para. 4"
            ],
            [
              "\"Kalau auditor menemukan salah saji, auditor yang memperbaikinya.\"",
              "Manajemen yang mengoreksi. Jika auditor yang mengoreksi, ia akan mengaudit pekerjaannya sendiri.",
              "ARENS p.95"
            ],
            [
              "\"Auditor wajib menemukan semua fraud.\"",
              "Auditor bertanggung jawab memperoleh keyakinan memadai bahwa tidak ada salah saji **material**, karena fraud maupun error.",
              "ISA200 para. 11; ARENS pp.89–90"
            ],
            [
              "\"Skeptis berarti curiga dan menuduh klien.\"",
              "Skeptis berarti tidak buru-buru menyimpulkan sebelum ada bukti yang cukup, dan menilai bukti secara kritis.",
              "ARENS pp.97–98, Table 4-1"
            ],
            [
              "\"Perusahaan bangkrut setahun setelah opini bersih berarti auditnya salah.\"",
              "Laporan auditor tanpa catatan kelangsungan usaha bukan jaminan perusahaan bertahan, dan salah saji yang baru ketahuan setelah laporan auditor terbit tidak otomatis berarti audit gagal.",
              "ARENS p.94; ISA200 para. A57"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Kasus pembuka: Satyam",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Prosedur yang benar tidak berguna kalau buktinya lewat tangan pihak yang diaudit."
        },
        {
          "kind": "p",
          "text": "Manajemen Satyam, perusahaan TI di India, membuat lebih dari 6.000 faktur fiktif dan rekening koran palsu. Dari aset 53,6 miliar rupee yang dilaporkan, 50,4 miliar rupee ternyata tidak ada. Auditor memang meminta konfirmasi dari bank, **tetapi tidak mengendalikan prosesnya**: pengiriman dan penerimaan konfirmasi diserahkan kepada manajemen. Padahal standar mengharuskan auditor berhubungan langsung dengan bank. `(ARENS pp.86–87)`"
        },
        {
          "kind": "p",
          "text": "Pelajarannya: prosedur yang benar di atas kertas tidak berarti apa-apa kalau buktinya melewati tangan pihak yang sedang diaudit."
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Siapa bertanggung jawab atas apa?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Manajemen membuat dan mengoreksi, TCWG mengawasi, auditor menguji."
        },
        {
          "kind": "table",
          "headers": [
            "Pihak",
            "Tanggung jawab"
          ],
          "rows": [
            [
              "**Manajemen**",
              "Menyusun laporan keuangan dan memilih kebijakan akuntansi; menilai kelangsungan usaha; menjaga pengendalian internal; memberi auditor akses ke informasi dan orang yang diperlukan"
            ],
            [
              "**TCWG** (misalnya dewan atau komite audit)",
              "Mengawasi proses pelaporan keuangan, termasuk mengawasi manajemen dan audit; menyetujui laporan keuangan yang diaudit"
            ],
            [
              "**Auditor**",
              "Memperoleh keyakinan memadai bahwa laporan keuangan bebas salah saji material, lalu menyatakan opini"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.87–89; ISA200 paras. 4, 11)`"
        },
        {
          "kind": "p",
          "text": "Audit berjalan di atas **premis** bahwa manajemen mengakui tanggung jawabnya. Audit **tidak membebaskan** manajemen dari tanggung jawab itu. `(ISA200 para. 4)`"
        },
        {
          "kind": "p",
          "text": "**Siapa yang mengoreksi salah saji?** Manajemen. Auditor menyampaikan temuannya, lalu CFO atau tim akuntansi yang membuat jurnal koreksi. Kalau auditor sendiri yang membuat koreksinya, ia akan mengaudit pekerjaannya sendiri, dan itu ancaman telaah pribadi dari TM03. Auditor boleh menyarankan cara koreksi, tetapi manajemen yang menelaah dan menyetujuinya. `(ARENS pp.88, 95)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Mengapa hanya keyakinan memadai?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Keyakinan audit tidak pernah mutlak, tapi itu bukan alasan mengambil jalan pintas."
        },
        {
          "kind": "p",
          "text": "Auditor bertanggung jawab mendeteksi salah saji yang **material**, bukan semua salah saji. Menemukan semua salah saji kecil akan sangat mahal dan mungkin mustahil. `(ARENS p.89)`"
        },
        {
          "kind": "p",
          "text": "**Tiga alasan keyakinan tidak bisa absolut (buku):** `(ARENS pp.89–90)`"
        },
        {
          "kind": "ol",
          "items": [
            "Bukti sebagian besar berasal dari **sampel**, jadi selalu ada risiko salah saji tidak ikut terambil.",
            "Laporan keuangan penuh **estimasi** yang bergantung pada masa depan.",
            "**Fraud**, apalagi yang melibatkan kolusi manajemen, sangat sulit dideteksi."
          ]
        },
        {
          "kind": "p",
          "text": "ISA 200 merumuskannya sebagai **keterbatasan bawaan audit**, yang berasal dari tiga sumber: `(ISA200 paras. A50–A53)`"
        },
        {
          "kind": "table",
          "headers": [
            "Sumber",
            "Contoh"
          ],
          "rows": [
            [
              "Sifat pelaporan keuangan",
              "Estimasi dan pertimbangan manajemen punya rentang hasil yang wajar"
            ],
            [
              "Sifat prosedur audit",
              "Informasi bisa tidak lengkap; fraud dirancang untuk disembunyikan; auditor bukan ahli keaslian dokumen; audit bukan investigasi resmi dan tidak punya kewenangan menggeledah"
            ],
            [
              "Waktu dan biaya yang wajar",
              "Pengguna butuh opini tepat waktu dan dengan biaya wajar"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Keterbatasan bawaan **bukan alasan** untuk mengambil jalan pintas. Menurut ISA 200, kesulitan, waktu, atau biaya **tidak boleh** dijadikan alasan untuk melewatkan prosedur yang tidak bisa diganti prosedur lain, atau untuk puas dengan bukti yang kurang meyakinkan. `(ISA200 para. A53)`"
        },
        {
          "kind": "p",
          "text": "Kalau di kemudian hari ditemukan salah saji material, itu **tidak otomatis** berarti audit tidak sesuai standar. Yang menentukan adalah prosedur yang dilakukan dan kualitas bukti yang diperoleh. `(ISA200 para. A57)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Error dan fraud",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Error tidak sengaja, fraud sengaja. Tanggung jawab auditor atas keduanya sama."
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Error",
            "Fraud"
          ],
          "rows": [
            [
              "Sifat",
              "Tidak disengaja",
              "Disengaja"
            ],
            [
              "Contoh buku",
              "Salah hitung harga kali kuantitas di faktur",
              "Melebihkan penjualan untuk menaikkan laba"
            ],
            [
              "Tanggung jawab auditor",
              "Sama: keyakinan memadai bahwa tidak ada salah saji **material**",
              "Sama"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.90)`"
        },
        {
          "kind": "p",
          "text": "**Dua jenis fraud:** `(ARENS pp.90–91)`"
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Penyalahgunaan aset",
            "Pelaporan keuangan curang"
          ],
          "rows": [
            [
              "Inti",
              "Mencuri aset entitas",
              "Menyajikan laporan keuangan yang menyesatkan dengan sengaja"
            ],
            [
              "Pelaku umumnya",
              "Karyawan",
              "Manajemen, yang dapat mengabaikan (override) pengendalian"
            ],
            [
              "Yang dirugikan",
              "Pemilik aset (pemegang saham, kreditor)",
              "Pengguna yang mengambil keputusan dari laporan yang salah"
            ],
            [
              "Contoh buku",
              "Kasir mengantongi uang penjualan; kasus Cinar (122 juta dolar dialirkan ke Bahama)",
              "Satyam"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Area yang paling sulit bagi auditor",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Fraud, pihak berelasi, pelanggaran hukum, dan kelangsungan usaha adalah area yang paling sulit bagi auditor."
        },
        {
          "kind": "p",
          "text": "ISA 200 menyebut empat area dengan keterbatasan yang sangat signifikan: **fraud** (terutama oleh manajemen senior atau dengan kolusi), **pihak berelasi**, **ketidakpatuhan hukum**, dan **kelangsungan usaha**. `(ISA200 para. A56)`"
        },
        {
          "kind": "p",
          "text": "**Hukum dan regulasi.** Tanggung jawab auditor bergantung pada dampaknya ke laporan keuangan. `(ARENS pp.92–93)`"
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Dampak langsung",
            "Dampak tidak langsung"
          ],
          "rows": [
            [
              "Contoh",
              "Hukum pajak",
              "Suap di luar negeri; pembuangan limbah tanpa pengolahan"
            ],
            [
              "Tanggung jawab auditor",
              "Memperoleh bukti yang cukup dan tepat atas kepatuhan",
              "Bertanya kepada manajemen dan TCWG serta memeriksa korespondensi dengan regulator; tidak mencari pelanggaran kecuali ada alasan menduganya"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Kelangsungan usaha.** Manajemen yang menilai. Auditor menyimpulkan dua hal: apakah laporan layak disusun dengan anggapan usaha akan terus berjalan (basis kelangsungan usaha), dan apakah ada ketidakpastian yang menimbulkan keraguan besar atas kelangsungan usaha itu (ketidakpastian material). Keduanya dibahas lagi di TM06. Laporan auditor yang tidak menyebut masalah kelangsungan usaha **bukan jaminan** perusahaan akan bertahan. `(ARENS p.94)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Pertimbangan profesional",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Definisikan masalah, kumpulkan fakta (termasuk yang membantah), timbang alternatif, lalu dokumentasikan."
        },
        {
          "kind": "p",
          "text": "Pertimbangan profesional adalah **inti dari audit**. ISA 200 mendefinisikannya sebagai penerapan pelatihan, pengetahuan, dan pengalaman dalam konteks standar untuk memutuskan tindakan yang tepat. Area yang paling membutuhkannya antara lain materialitas, pemilihan prosedur, kecukupan bukti, dan kewajaran estimasi manajemen. `(ISA200 paras. 13(k), A26)`"
        },
        {
          "kind": "p",
          "text": "**Kerangka empat langkah (Figure 4-1), dengan *auditor mindset* di pusatnya:** `(ARENS pp.95–97)`"
        },
        {
          "kind": "table",
          "headers": [
            "Langkah",
            "Yang dilakukan"
          ],
          "rows": [
            [
              "1. Identifikasi dan definisikan masalah",
              "Pastikan masalah yang dipecahkan memang masalah yang benar (framing); lihat dari sudut investor, kreditor, regulator"
            ],
            [
              "2. Kumpulkan fakta",
              "Jangan hanya mendengar versi perusahaan; cari informasi yang **membantah**; bicara juga dengan bagian penjualan, gudang, atau SDM; cari bias manajemen seperti bonus"
            ],
            [
              "3. Analisis alternatif",
              "Jangan langsung memilih alternatif pertama; waspadai jebakan pertimbangan; berkonsultasi"
            ],
            [
              "4. Simpulkan dan dokumentasikan",
              "Tulis alasan kesimpulan, alternatif yang ditolak, dan alasannya"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Kasus Livent.** Auditor tahu manajemen senior pernah memberi penjelasan yang menipu tentang beberapa transaksi, tetapi tidak mempertimbangkan dampak penipuan itu terhadap bagian audit lainnya, misalnya seberapa jauh keterangan manajemen yang lain masih bisa dipercaya. Komite disiplin menyatakan tiga dari empat partner bersalah, dan menegaskan bahwa punya proses yang benar saja tidak cukup: **pertimbangan profesional menuntut kesimpulan yang benar**. `(ARENS p.93)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Skeptisisme profesional",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Skeptis artinya percaya tapi verifikasi. Jawaban manajemen pun harus dinilai."
        },
        {
          "kind": "p",
          "text": "Skeptisisme adalah sikap yang mencakup **pikiran yang mempertanyakan**, **waspada terhadap tanda salah saji karena error atau fraud**, dan **penilaian kritis atas bukti**. Prinsip kerjanya: *percaya, tetapi verifikasi*. `(ISA200 para. 13(l); ARENS p.97)`"
        },
        {
          "kind": "p",
          "text": "**Enam kualitas auditor yang skeptis (Table 4-1):** `(ARENS p.98)`"
        },
        {
          "kind": "table",
          "headers": [
            "Kualitas",
            "Dalam praktik"
          ],
          "rows": [
            [
              "Questioning mind",
              "Bertanya dengan sedikit keraguan"
            ],
            [
              "Suspension of judgment",
              "Tidak buru-buru menyimpulkan sebelum ada bukti"
            ],
            [
              "Search for knowledge",
              "Menggali lebih dari yang tampak"
            ],
            [
              "Interpersonal understanding",
              "Sadar motivasi orang bisa membuat penjelasannya bias"
            ],
            [
              "Autonomy",
              "Memutuskan sendiri, tidak ikut arus"
            ],
            [
              "Self-esteem",
              "Cukup percaya diri untuk menantang"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Apa yang harus diwaspadai (ISA 200 A21):**"
        },
        {
          "kind": "ul",
          "items": [
            "bukti yang saling bertentangan,",
            "informasi yang meragukan keandalan **dokumen dan jawaban wawancara**,",
            "tanda-tanda fraud,",
            "keadaan yang membutuhkan prosedur tambahan."
          ]
        },
        {
          "kind": "p",
          "text": "**Tiga pegangan penting dari ISA 200 (A23–A25):**"
        },
        {
          "kind": "ul",
          "items": [
            "Jawaban manajemen harus **dinilai secara kritis**, bukan langsung diterima.",
            "Kalau hanya ada **satu dokumen** yang mudah dipalsukan untuk angka yang material, dan ada faktor risiko fraud, bukti itu patut dipertanyakan kecukupannya.",
            "**Percaya bahwa manajemen jujur tidak membebaskan auditor dari sikap skeptis.**"
          ]
        },
        {
          "kind": "p",
          "text": "**Jebakan pertimbangan (Table 4-2):** `(ARENS pp.98–99)`"
        },
        {
          "kind": "table",
          "headers": [
            "Jebakan",
            "Contoh dalam audit",
            "Cara menghindari"
          ],
          "rows": [
            [
              "Confirmation",
              "Hanya mencari bukti yang mendukung dugaan awal",
              "Susun argumen sebaliknya; cari informasi yang membantah"
            ],
            [
              "Overconfidence",
              "Merasa tidak perlu melibatkan spesialis",
              "Tantang asumsi dan pendapat pakar"
            ],
            [
              "Anchoring",
              "Terpaku pada angka manajemen atau prosedur tahun lalu",
              "Minta masukan orang lain; pertimbangkan bias manajemen"
            ],
            [
              "Availability",
              "Menganggap fraud jarang karena belum pernah melihatnya",
              "Pakai data objektif; berkonsultasi"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Tekanan waktu dan anggaran juga bisa menurunkan skeptisisme. `(ARENS p.99)` KEPAP menyebut skeptisisme profesional dan prinsip dasar etika sebagai konsep yang saling berkaitan. `(KEPAP 120.16-A1)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "8. Panduan role play Week 4: wawancara tentang jurnal tidak biasa",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Penjelasan yang lancar belum bukti. Minta dokumen, cari konfirmasi dari pihak lain, lalu catat."
        },
        {
          "kind": "p",
          "text": "**Skenario RPS:** auditor mewawancarai manajer keuangan tentang jurnal yang tidak biasa. Manajer memberi penjelasan yang lancar dan terdengar masuk akal. Mahasiswa harus menggali lebih dalam, jangan langsung menerima."
        },
        {
          "kind": "p",
          "text": "**Prinsip yang dipegang:**"
        },
        {
          "kind": "table",
          "headers": [
            "Prinsip",
            "Dasar"
          ],
          "rows": [
            [
              "Jawaban wawancara belum menjadi bukti yang cukup; keandalannya juga harus dinilai",
              "ISA200 A21, A23"
            ],
            [
              "Penjelasan yang lancar tidak sama dengan bukti; tunda kesimpulan",
              "Suspension of judgment (ARENS Table 4-1)"
            ],
            [
              "Cari bukti yang bisa membantah, bukan hanya yang mendukung",
              "Confirmation bias (ARENS Table 4-2); Figure 4-1 langkah 2"
            ],
            [
              "Jangan hanya bertanya ke bagian akuntansi",
              "ARENS p.96"
            ],
            [
              "Keyakinan bahwa manajemen jujur tidak membebaskan auditor dari skeptisisme; kejujuran di masa lalu tidak menggantikan bukti",
              "ISA200 A25"
            ],
            [
              "Dokumentasikan dan konsultasikan",
              "ARENS p.97; ISA200 A28"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Contoh alur pertanyaan (Interpretasi, disusun dari prinsip di atas):**"
        },
        {
          "kind": "ol",
          "items": [
            "*Apa transaksinya?* \"Bisa dijelaskan transaksi ekonomi di balik jurnal ini?\"",
            "*Siapa dan kapan?* \"Siapa yang membuat dan menyetujui jurnal ini? Kenapa dicatat pada tanggal itu?\"",
            "*Buktinya apa?* \"Dokumen pendukung apa yang ada? Boleh kami lihat dokumen sumbernya, bukan hanya ringkasannya?\"",
            "*Konsisten atau tidak?* \"Apakah transaksi seperti ini pernah terjadi sebelumnya? Kenapa jumlahnya berbeda dari biasanya?\"",
            "*Siapa lagi yang tahu?* \"Siapa di luar bagian keuangan yang bisa mengonfirmasi transaksi ini, misalnya bagian penjualan atau gudang?\"",
            "*Apa dampaknya?* \"Bagaimana dampak jurnal ini terhadap laba atau target yang dipakai untuk bonus?\""
          ]
        },
        {
          "kind": "p",
          "text": "**Yang jangan dilakukan:**"
        },
        {
          "kind": "ul",
          "items": [
            "menerima penjelasan hanya karena manajernya ramah dan meyakinkan,",
            "menutup wawancara dengan \"baik, terima kasih, sudah jelas\" padahal belum ada bukti,",
            "ikut terburu-buru karena manajer bilang sedang sibuk (itu tekanan, dan bisa menjadi ancaman intimidasi)."
          ]
        },
        {
          "kind": "p",
          "text": "**Penutup yang tepat:** berterima kasih, sebutkan dokumen yang akan diminta, lalu catat penjelasan manajer dan bukti yang masih harus diperoleh di kertas kerja."
        }
      ]
    },
    {
      "kind": "section",
      "title": "Kasus latihan",
      "layer": "latihan",
      "blocks": [
        {
          "kind": "solution-reveal",
          "title": "Kasus 1: Tanggung jawab siapa?",
          "prompt": "Tentukan pihak yang bertanggung jawab:\n1. Menyusun catatan atas laporan keuangan tentang sengketa hukum.\n2. Menyetujui laporan keuangan yang telah diaudit.\n3. Menilai apakah perusahaan dapat melanjutkan usaha 12 bulan ke depan.\n4. Menyimpulkan apakah laporan layak disusun dengan anggapan usaha akan terus berjalan.\n5. Membuat jurnal koreksi atas salah saji yang ditemukan auditor.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Manajemen. (2) TCWG. (3) Manajemen. (4) Auditor. (5) Manajemen. `(ARENS pp.87–95)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Error atau fraud?",
          "prompt": "\n1. Staf gudang salah memasukkan kuantitas saat stock opname.\n2. Direktur keuangan menunda pencatatan beban agar target laba tercapai.\n3. Karyawan memalsukan kuitansi pengeluaran kas kecil untuk dirinya sendiri.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Error. (2) Fraud: pelaporan keuangan curang. (3) Fraud: penyalahgunaan aset. `(ARENS pp.90–91)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3 (Interpretasi): dokumen tunggal.",
          "prompt": "Pendapatan kontrak terbesar tahun ini hanya didukung satu surat perjanjian hasil pindaian (scan) yang diberikan direktur utama. Tahun ini manajemen juga mendapat bonus besar berbasis laba.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Ada faktor risiko fraud (bonus berbasis laba), dan satu dokumen yang mudah dipalsukan menjadi satu-satunya bukti untuk angka material. Menurut ISA 200 A23–A24, kondisi ini menuntut auditor mempertanyakan kecukupan bukti dan, bila ragu atas keaslian dokumen, menyelidiki lebih lanjut dengan prosedur tambahan. Prosedur spesifiknya dibahas di TM09–TM13. `(ISA200 paras. A23–A24)`"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Uji pemahaman",
      "layer": "latihan",
      "blocks": [
        {
          "kind": "p",
          "text": "Jawab dulu tanpa melihat catatan, dengan kata-katamu sendiri."
        },
        {
          "kind": "self-check",
          "question": "**1. Jelaskan peran manajemen, TCWG, dan auditor dengan analogi dari kehidupan kampus.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban (Interpretasi):* bayangkan ujian di kampus."
            },
            {
              "kind": "ul",
              "items": [
                "Mahasiswa menulis jawabannya → manajemen menyusun laporan.",
                "Pengawas memastikan ujian berjalan sesuai aturan → TCWG mengawasi.",
                "Dosen penguji menilai jawaban dengan kunci dan kriteria → auditor menguji dengan kerangka pelaporan."
              ]
            },
            {
              "kind": "p",
              "text": "Dosen tidak menuliskan jawaban untuk mahasiswa. Analogi ini susunan penulis; dasarnya pembagian peran di ARENS pp.87–89."
            }
          ],
          "signal": "*Tanda belum paham:* tidak bisa membedakan pengawas dan penguji."
        },
        {
          "kind": "self-check",
          "question": "**2. Kenapa auditor tetap harus meminta bukti walaupun manajer keuangannya sudah 10 tahun terbukti jujur?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* ISA 200 membolehkan auditor mempertimbangkan pengalaman masa lalu, tetapi keyakinan bahwa manajemen jujur tidak membebaskan auditor dari skeptisisme dan tidak membolehkan auditor puas dengan bukti yang kurang meyakinkan. Selain itu, penyaji informasi selalu punya motif dan bisa bias. `(ISA200 para. A25; ARENS p.8)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"karena manajer bisa saja berbohong\" tanpa menyebut bahwa standar tetap mewajibkan bukti."
        },
        {
          "kind": "self-check",
          "question": "**3. Kenapa auditor tidak bisa memberi keyakinan absolut, dan kenapa itu tidak boleh dijadikan alasan bekerja seadanya?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* bukti sebagian besar dari sampel, laporan penuh estimasi, dan fraud dirancang untuk disembunyikan, sehingga bukti bersifat meyakinkan dan tidak pasti. `(ARENS pp.89–90; ISA200 paras. A50–A52)` Tetapi ISA 200 menegaskan bahwa kesulitan, waktu, atau biaya bukan alasan sah untuk melewatkan prosedur yang tidak ada alternatifnya. `(ISA200 para. A53)`"
            }
          ],
          "signal": "*Tanda belum paham:* hanya menjawab bagian pertama."
        },
        {
          "kind": "self-check",
          "question": "**4. Apa beda error dan fraud, dan apakah tanggung jawab auditor atas keduanya berbeda?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* error tidak disengaja, fraud disengaja. Tanggung jawab auditor sama: keyakinan memadai bahwa tidak ada salah saji material. Bedanya, fraud lebih sulit dideteksi karena disembunyikan, tetapi kesulitan itu tidak mengubah tanggung jawab. `(ARENS pp.90–91)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap auditor hanya bertanggung jawab atas error."
        }
      ]
    },
    {
      "kind": "section",
      "title": "Exam toolkit",
      "layer": "latihan",
      "blocks": [
        {
          "kind": "p",
          "text": "**Kerangka esai \"Jelaskan mengapa auditor tidak dapat memberi jaminan absolut\"**"
        },
        {
          "kind": "ol",
          "items": [
            "Definisi keyakinan memadai (tinggi, tidak absolut).",
            "Tiga alasan menurut buku: sampel, estimasi, fraud.",
            "Tiga sumber keterbatasan bawaan menurut ISA 200.",
            "Tegaskan bahwa keterbatasan bukan alasan untuk mengambil jalan pintas (A53).",
            "Salah saji yang baru ketahuan setelah laporan auditor terbit tidak otomatis berarti audit gagal (A57)."
          ]
        },
        {
          "kind": "p",
          "text": "**Pasangan yang sering tertukar**"
        },
        {
          "kind": "table",
          "headers": [
            "Pasangan",
            "Pembeda"
          ],
          "rows": [
            [
              "Tanggung jawab manajemen vs auditor",
              "Menyusun, mengoreksi, menilai going concern vs memperoleh keyakinan dan beropini"
            ],
            [
              "Manajemen vs TCWG",
              "Menyusun vs mengawasi dan menyetujui"
            ],
            [
              "Error vs fraud",
              "Tidak disengaja vs disengaja; tanggung jawab auditor sama"
            ],
            [
              "Penyalahgunaan aset vs pelaporan curang",
              "Karyawan, mencuri aset vs manajemen, menyesatkan pengguna"
            ],
            [
              "Hukum berdampak langsung vs tidak langsung",
              "Harus memperoleh bukti kepatuhan vs prosedur terbatas"
            ],
            [
              "Pertimbangan profesional vs skeptisisme",
              "Proses mengambil keputusan vs sikap mental di pusat proses itu"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
