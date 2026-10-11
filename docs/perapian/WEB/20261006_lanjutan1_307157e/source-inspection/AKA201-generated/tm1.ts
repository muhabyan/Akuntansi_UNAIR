// AKA201 TM01/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM1_READING: Reading = {
  "tm": 1,
  "title": "Mengapa Audit Ada: Asurans, Auditing, dan Jenis Auditor",
  "intro": "**Sumber utama:** Arens dkk., *Auditing: The Art and Science of Assurance Engagements*, Ch.1, pp.1–19. **Standar:** ISA 200 (diadopsi di Indonesia sebagai SA 200), dikenalkan secara konseptual.",
  "objectives": [
    "Menjelaskan apa itu assurance engagement dan hubungan tiga pihaknya.",
    "Menjelaskan definisi auditing dan empat unsurnya.",
    "Menjelaskan mengapa audit dibutuhkan lewat konsep information risk dan agency theory.",
    "Membedakan tiga jenis audit dan jenis-jenis auditor.",
    "Membedakan akuntansi dan auditing, serta audit, review, dan compilation."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: audit itu apa, dalam bahasa sehari-hari",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** audit adalah **memeriksa apakah suatu informasi sesuai dengan patokan yang disepakati**, dengan cara **mengumpulkan dan menilai bukti**. Pemeriksanya harus **kompeten dan independen**, dan hasilnya **dilaporkan** kepada pihak yang berkepentingan. `(parafrase ARENS p.3)`"
        },
        {
          "kind": "p",
          "text": "Coba perhatikan: definisi itu **tidak menyebut laporan keuangan sama sekali**. Informasinya bisa apa saja, asalkan bisa diverifikasi dan ada patokannya:"
        },
        {
          "kind": "table",
          "headers": [
            "Informasi yang diaudit",
            "Patokannya (kriteria)",
            "Sumber"
          ],
          "rows": [
            [
              "Laporan keuangan",
              "Kerangka pelaporan, misalnya IFRS",
              "ARENS p.4"
            ],
            [
              "SPT badan",
              "Undang-undang pajak",
              "ARENS pp.5–6"
            ],
            [
              "Laporan emisi gas rumah kaca",
              "Kerangka pelaporan emisi yang disepakati",
              "ARENS pp.1–3, 17"
            ],
            [
              "Kepatuhan pada perjanjian pinjaman",
              "Ketentuan dalam perjanjian (misalnya batas rasio)",
              "ARENS pp.10, 17"
            ],
            [
              "Efisiensi proses penggajian",
              "Standar efisiensi yang ditetapkan perusahaan",
              "ARENS pp.10–11"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Asersi, dalam bahasa sederhana,** adalah **klaim** dari pihak yang menyajikan informasi. Ketika neraca menampilkan kas 827.568, manajemen sebenarnya sedang mengklaim bahwa kas sebesar itu ada, milik perusahaan, dan tidak dibatasi penggunaannya. `(ARENS p.104)` Tugas auditor adalah menguji klaim-klaim seperti itu terhadap kriteria, dengan bukti. Pembahasan lengkapnya di TM05."
        },
        {
          "kind": "p",
          "text": "**Kenapa audit dibutuhkan?** Karena orang yang mengambil keputusan (investor, bank, pemerintah) biasanya tidak bisa memeriksa sendiri informasi yang mereka pakai, dan penyaji informasi punya kepentingan sendiri. Section 7 membahas ini lewat dua kacamata: *information risk* dari buku dan *agency theory* dari Jensen dan Meckling."
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
              "\"Audit itu ya audit laporan keuangan.\"",
              "Itu **salah satu jenis** saja. Definisi audit berlaku untuk informasi apa pun terhadap kriteria apa pun. Kata \"audit\" sering disamakan dengan audit laporan keuangan karena itulah jasa akuntan publik yang paling dikenal.",
              "ARENS pp.3, 14"
            ],
            [
              "\"Auditor itu akuntan yang mengecek pembukuan.\"",
              "Auditor laporan keuangan **tidak mencatat apa pun**. Ia menilai apakah informasi yang sudah dicatat mencerminkan peristiwa ekonomi secara wajar.",
              "ARENS pp.14–15"
            ],
            [
              "\"Opini bersih berarti laporannya pasti benar.\"",
              "Auditor memberi **keyakinan memadai**, yaitu keyakinan tinggi tetapi tidak absolut, karena sebagian besar bukti bersifat meyakinkan, tidak membuktikan secara pasti.",
              "ISA200 para. 5"
            ],
            [
              "\"Audit dan asurans itu sama.\"",
              "**Auditing** adalah pekerjaannya (mengumpulkan dan menilai bukti). **Asurans** adalah hasilnya bagi pengguna (tingkat keyakinan).",
              "ARENS pp.6–7"
            ],
            [
              "\"Audit menurunkan risiko bisnis perusahaan.\"",
              "Audit menurunkan **information risk**, tidak mengubah risiko bisnis.",
              "ARENS pp.7–8"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Kasus pembuka: UPS dan laporan keberlanjutan",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Auditor juga bisa memberi keyakinan atas informasi nonkeuangan, dan tingkat keyakinannya bisa berbeda."
        },
        {
          "kind": "p",
          "text": "UPS mengirim lebih dari 15 juta paket per hari ke lebih dari 220 negara. Perusahaan ini menerbitkan Corporate Sustainability Report berdasarkan kerangka G4 dari Global Reporting Initiative (GRI). Laporan itu dilampiri dua laporan asurans dari kantor akuntan publik Big 4:"
        },
        {
          "kind": "ul",
          "items": [
            "**limited assurance** atas laporan keberlanjutannya, dan",
            "**reasonable assurance** atas laporan emisi gas rumah kaca globalnya."
          ]
        },
        {
          "kind": "p",
          "text": "Kasus ini menunjukkan dua hal yang akan terus muncul sepanjang mata kuliah. Pertama, auditor bisa memberi asurans atas informasi nonkeuangan, bukan cuma laporan keuangan. Kedua, tingkat keyakinan yang diberikan bisa berbeda. `(ARENS pp.1–3)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Assurance engagement (perikatan asurans)",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Asurans adalah kesimpulan dari pihak independen supaya pengguna lebih yakin pada suatu informasi. Auditor bertanggung jawab kepada pengguna walaupun dibayar klien."
        },
        {
          "kind": "p",
          "text": "**Assurance engagement** adalah jasa dari praktisi independen yang memberi kesimpulan atas suatu informasi (*subject matter*) setelah informasi itu dibandingkan dengan kriteria. Tujuannya membuat pengguna lebih yakin pada informasi tersebut. Jasa ini bernilai karena auditor independen dan dianggap tidak bias. `(ARENS p.2)`"
        },
        {
          "kind": "p",
          "text": "Syaratnya ada **hubungan akuntabilitas**: satu pihak bertanggung jawab kepada pihak lain atas subject matter. Dalam audit laporan keuangan, hubungannya melibatkan tiga pihak:"
        },
        {
          "kind": "table",
          "headers": [
            "Pihak",
            "Peran"
          ],
          "rows": [
            [
              "Klien (manajemen)",
              "Menyusun laporan keuangan dan menyajikannya kepada pengguna; bersama komite audit menunjuk auditor"
            ],
            [
              "Pengguna eksternal",
              "Menyediakan modal; mengandalkan laporan keuangan dan laporan auditor"
            ],
            [
              "Auditor",
              "Menerbitkan laporan yang diandalkan pengguna untuk mengurangi risiko informasi"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Klien akuntabel kepada pengguna. Karena pengguna mengandalkan laporan auditor, **auditor juga akuntabel kepada pengguna**, meskipun yang membayar auditor adalah klien. `(ARENS p.2, Figure 1-1)`"
        },
        {
          "kind": "p",
          "text": "**Subject matter** adalah informasi yang disiapkan pihak yang akuntabel, bisa keuangan atau nonkeuangan. **Kriteria** bisa berupa standar yang mapan (IFRS, kerangka G4), ketentuan dalam perjanjian, atau hasil kesepakatan auditor dan pengguna. `(ARENS p.2)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Tingkat keyakinan: reasonable vs limited",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Reasonable assurance: keyakinan tinggi tapi tidak mutlak. Limited assurance: keyakinan sedang, berbentuk \"tidak ada hal yang menjadi perhatian kami\"."
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Reasonable assurance (keyakinan memadai)",
            "Limited assurance (keyakinan terbatas)"
          ],
          "rows": [
            [
              "Tingkat",
              "Tinggi, tetapi tidak absolut",
              "Moderat"
            ],
            [
              "Bentuk kesimpulan",
              "Opini positif: auditor menyatakan informasi disusun, dalam semua hal yang material, sesuai kriteria",
              "Keyakinan negatif: \"nothing has come to our attention\""
            ],
            [
              "Bukti",
              "Jauh lebih meyakinkan (persuasive)",
              "Terutama analitik dan inquiry"
            ],
            [
              "Contoh",
              "Audit laporan keuangan; laporan emisi GRK UPS",
              "Review laporan keuangan; laporan keberlanjutan UPS"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.3, p.16)`"
        },
        {
          "kind": "p",
          "text": "**Mengapa reasonable assurance tidak pernah absolut?** ISA 200 menjelaskan: audit punya keterbatasan bawaan, sehingga sebagian besar bukti yang menjadi dasar opini bersifat *persuasive* (meyakinkan), bukan *conclusive* (membuktikan secara pasti). `(ISA200 para. 5)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** \"Reasonable assurance berarti auditor menjamin laporan keuangan bebas salah saji.\" Ini salah. Reasonable assurance adalah keyakinan tinggi, bukan jaminan."
        },
        {
          "kind": "pendalaman",
          "title": "Materialitas, sebagai pengantar",
          "blocks": [
            {
              "kind": "p",
              "text": "Salah saji atau penghilangan dianggap **material** bila, sendiri-sendiri atau digabung, dapat memengaruhi keputusan ekonomik pengguna. Cara berpikir sederhana dari buku: seandainya pengguna menerima laporan yang sudah dikoreksi, apakah kesimpulan mereka akan berbeda? Kalau ya, salah saji itu material. `(ARENS p.3)`"
            },
            {
              "kind": "p",
              "text": "ISA 200 menambahkan dua hal. Pertama, materialitas bergantung pada **ukuran atau sifat** salah saji, atau keduanya. Kedua, auditor **tidak bertanggung jawab** menemukan salah saji yang tidak material. `(ISA200 para. 6)` Materialitas dibahas lengkap di TM07."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Apa itu auditing?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Audit punya empat unsur: informasi dan kriteria, bukti, pemeriksa yang kompeten dan independen, dan laporan."
        },
        {
          "kind": "callout",
          "variant": "quote",
          "text": "**Definisi.** Auditing adalah akumulasi dan evaluasi bukti tentang asersi atas informasi, untuk menentukan dan melaporkan tingkat kesesuaian antara asersi itu dan kriteria yang ditetapkan. Auditing harus dilakukan oleh orang yang kompeten dan independen. `(ARENS p.3)`"
        },
        {
          "kind": "p",
          "text": "Buku menyebut audit sebagai perpaduan **art** (pertimbangan profesional dan skeptisisme) dan **science** (pengetahuan tentang subject matter, aturan, dan prosedur). `(ARENS p.3)`"
        },
        {
          "kind": "p",
          "text": "Definisi ini punya empat unsur."
        },
        {
          "kind": "h3",
          "text": "Unsur 1: Asersi, informasi, dan kriteria yang ditetapkan"
        },
        {
          "kind": "p",
          "text": "Manajemen membuat asersi atas informasi, dan auditor menilainya terhadap kriteria. Informasinya harus dapat diverifikasi. Dalam audit laporan keuangan, kriterianya adalah kerangka akuntansi yang berlaku (buku memberi contoh IFRS untuk Canadian Tire). Kalau informasinya subjektif dan belum ada standar umum, auditor dan entitas menyepakati kriteria sebelum audit dimulai. `(ARENS p.4)`"
        },
        {
          "kind": "h3",
          "text": "Unsur 2: Akumulasi dan evaluasi bukti"
        },
        {
          "kind": "p",
          "text": "Bukti adalah setiap informasi yang dipakai auditor untuk menilai kesesuaian informasi dengan kriteria. Contohnya:"
        },
        {
          "kind": "ul",
          "items": [
            "bukti elektronik dan dokumen tentang transaksi,",
            "komunikasi tertulis dan elektronik dari pihak luar,",
            "observasi auditor,",
            "kesaksian lisan auditee."
          ]
        },
        {
          "kind": "p",
          "text": "Auditor harus mengumpulkan bukti dengan **kualitas dan kuantitas yang cukup**. `(ARENS p.4)` Dalam bahasa ISA: *sufficiency* mengukur kuantitas, *appropriateness* mengukur kualitas (relevansi dan reliabilitas). `(ISA200 para. 13(b))`"
        },
        {
          "kind": "h3",
          "text": "Unsur 3: Orang yang kompeten dan independen"
        },
        {
          "kind": "p",
          "text": "Kompeten berarti mampu memahami risiko perikatan dan kriteria, serta tahu jenis dan jumlah bukti yang perlu dikumpulkan. Tetapi kompetensi saja tidak cukup. Auditor juga harus berintegritas, skeptis, independen, dan sadar bahwa ia bertanggung jawab kepada pengguna. `(ARENS pp.4–5)`"
        },
        {
          "kind": "table",
          "headers": [
            "Istilah",
            "Rumusan buku (ARENS p.5)",
            "Rumusan ISA 200"
          ],
          "rows": [
            [
              "Professional skepticism",
              "Sikap: pikiran yang mempertanyakan, penilaian kritis atas bukti, dan **kesediaan menantang asersi auditee**",
              "Sikap: pikiran yang mempertanyakan, **waspada terhadap kondisi yang mengindikasikan salah saji karena error atau fraud**, dan penilaian kritis atas bukti (para. 13(l))"
            ],
            [
              "Professional judgment",
              "Pertimbangan analitis, sistematis, objektif, dengan integritas dan kesadaran tanggung jawab",
              "Penerapan pelatihan, pengetahuan, dan pengalaman dalam konteks standar auditing, akuntansi, dan etika untuk memutuskan tindakan yang tepat (para. 13(k))"
            ],
            [
              "Integrity",
              "Jujur dan berani",
              "(tidak didefinisikan di ISA 200)"
            ],
            [
              "Independence in mind",
              "Kemampuan bersikap objektif: bebas bias, konflik kepentingan, pengaruh yang tidak semestinya",
              "Tidak didefinisikan di ISA 200. Yang ada kewajibannya: auditor wajib patuh pada ketentuan etika, termasuk independensi (para. 14)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Kenapa independensi begitu penting?** Auditor yang kompeten tapi bias cenderung kurang skeptis, sehingga buktinya tidak cukup dan evaluasinya tidak kritis. Auditor eksternal memang dibayar klien, tetapi pada umumnya tetap cukup independen untuk menghasilkan audit yang dapat diandalkan. `(ARENS p.5)`"
        },
        {
          "kind": "h3",
          "text": "Unsur 4: Laporan"
        },
        {
          "kind": "p",
          "text": "Tahap akhir adalah laporan auditor independen yang menyampaikan tingkat keyakinan auditor kepada pengguna. Laporan audit laporan keuangan formatnya baku; laporan lain (misalnya audit efektivitas sistem komputer) bisa sangat disesuaikan. `(ARENS p.5)`"
        },
        {
          "kind": "pendalaman",
          "title": "Contoh buku: audit SPT badan oleh auditor pajak Kanada (CRA)",
          "blocks": [
            {
              "kind": "table",
              "headers": [
                "Unsur definisi",
                "Dalam kasus ini"
              ],
              "rows": [
                [
                  "Informasi",
                  "SPT yang diajukan wajib pajak"
                ],
                [
                  "Kriteria yang ditetapkan",
                  "Income Tax Act dan interpretasinya"
                ],
                [
                  "Orang kompeten dan independen",
                  "Auditor CRA"
                ],
                [
                  "Akumulasi dan evaluasi bukti",
                  "Penilaian risiko dulu (riwayat pemeriksaan, isu industri, transaksi tidak biasa, struktur korporasi, perencanaan pajak agresif, keterbukaan), lalu memeriksa laporan keuangan, catatan, dan informasi pihak ketiga"
                ],
                [
                  "Laporan",
                  "Laporan audit; wajib pajak menerima notice of reassessment"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(ARENS pp.5–6, Figure 1-2)`"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Auditing vs assurance: apa bedanya?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Auditing itu pekerjaannya; asurans itu hasilnya bagi pengguna."
        },
        {
          "kind": "p",
          "text": "Buku menjelaskannya lewat dialog di audit Hillsburg Hardware dengan analogi makanan organik:"
        },
        {
          "kind": "ul",
          "items": [
            "**Auditing** adalah **pekerjaannya**: mengumpulkan dan mengevaluasi bukti, semacam \"memeriksa\".",
            "**Assurance** adalah **hasilnya bagi pengguna**: tingkat kepercayaan yang diberikan, dalam audit laporan keuangan berbentuk opini."
          ]
        },
        {
          "kind": "p",
          "text": "Sebelum orang bisa memberimu keyakinan bahwa makanan itu benar-benar organik, ia harus lebih dulu memeriksa buktinya. Pemeriksaan itu auditing; keyakinan yang kamu peroleh itu assurance. `(ARENS pp.6–7)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Tujuan audit menurut ISA 200",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Tujuan auditor: keyakinan memadai bahwa laporan bebas salah saji material, lalu memberi opini. Tanggung jawab atas laporan tetap di manajemen."
        },
        {
          "kind": "pendalaman",
          "title": "Rincian ISA 200",
          "blocks": [
            {
              "kind": "p",
              "text": "**Tujuan audit:** meningkatkan keyakinan pengguna yang dituju atas laporan keuangan, lewat opini auditor apakah laporan keuangan disusun, dalam semua hal yang material, sesuai kerangka pelaporan keuangan yang berlaku. `(ISA200 para. 3)`"
            },
            {
              "kind": "p",
              "text": "**Tujuan keseluruhan auditor:** `(ISA200 para. 11)`"
            },
            {
              "kind": "ol",
              "items": [
                "memperoleh keyakinan memadai bahwa laporan keuangan secara keseluruhan bebas dari salah saji material, **baik karena kecurangan (fraud) maupun kekeliruan (error)**, sehingga auditor bisa menyatakan opini; dan",
                "melaporkan dan berkomunikasi sesuai temuan, sebagaimana disyaratkan ISA."
              ]
            },
            {
              "kind": "p",
              "text": "Kadang auditor tidak bisa memperoleh keyakinan memadai. Kalau masalahnya terlalu besar untuk sekadar diberi opini wajar dengan pengecualian, auditor wajib memilih salah satu: **tidak memberikan pendapat** (disclaimer), atau **mengundurkan diri** dari perikatan bila hukum memungkinkan. `(ISA200 para. 12)` Jenis-jenis opini dibahas di TM06."
            },
            {
              "kind": "p",
              "text": "**Premis tanggung jawab manajemen.** Audit berjalan dengan anggapan dasar bahwa manajemen mengakui tiga tanggung jawab:"
            },
            {
              "kind": "ul",
              "items": [
                "menyusun laporan keuangan,",
                "menjaga pengendalian internal yang diperlukan,",
                "memberi auditor akses ke informasi dan ke orang-orang di perusahaan."
              ]
            },
            {
              "kind": "p",
              "text": "**Audit tidak membebaskan manajemen dari tanggung jawab itu.** `(ISA200 para. 4, 13(j))` Pembagian tanggung jawab ini dibahas lebih dalam di TM04."
            },
            {
              "kind": "p",
              "text": "**Empat kewajiban umum auditor** `(ISA200 paras. 14–17)`:"
            },
            {
              "kind": "ol",
              "items": [
                "Patuh pada etika, termasuk independensi.",
                "Bersikap skeptis.",
                "Memakai pertimbangan profesional.",
                "Mengumpulkan bukti yang cukup dan tepat, sampai risiko audit turun ke tingkat rendah yang dapat diterima."
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Mengapa audit dibutuhkan: information risk",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Audit menurunkan risiko informasi, tidak menurunkan risiko bisnis. Agency theory menjelaskan kenapa pemilik dan kreditor perlu mengawasi manajer."
        },
        {
          "kind": "h3",
          "text": "Tiga komponen suku bunga pinjaman"
        },
        {
          "kind": "p",
          "text": "Bayangkan manajer bank yang akan memberi pinjaman. Suku bunganya ditentukan terutama oleh:"
        },
        {
          "kind": "table",
          "headers": [
            "Komponen",
            "Arti",
            "Dipengaruhi audit?"
          ],
          "rows": [
            [
              "Risk-free interest rate",
              "Kira-kira imbal hasil surat utang pemerintah jangka yang sama",
              "Tidak"
            ],
            [
              "Business risk",
              "Kemungkinan debitur gagal bayar karena kondisi ekonomi atau bisnis (resesi, keputusan manajemen buruk, persaingan tak terduga)",
              "Tidak"
            ],
            [
              "**Information risk**",
              "Kemungkinan informasi yang menjadi dasar keputusan tidak akurat, misalnya laporan keuangan yang tidak akurat",
              "**Ya, secara signifikan**"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Kalau laporan keuangan diaudit, risiko informasi turun, risiko bank turun, dan suku bunga bisa lebih rendah. Contoh buku: perusahaan dengan utang berbunga sekitar 1 miliar dolar menghemat 10 juta dolar per tahun jika bunganya turun 1 persen. `(ARENS pp.7–8)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** \"Audit menurunkan risiko bisnis perusahaan.\" Salah. Audit tidak mengubah business risk. Yang diturunkan adalah information risk."
        },
        {
          "kind": "h3",
          "text": "Empat penyebab information risk"
        },
        {
          "kind": "p",
          "text": "*Sumber: ARENS p.8*"
        },
        {
          "kind": "table",
          "headers": [
            "Penyebab",
            "Inti",
            "Contoh buku"
          ],
          "rows": [
            [
              "Remoteness of information",
              "Pengambil keputusan tidak punya pengetahuan langsung dan harus mengandalkan informasi orang lain",
              "Ekonomi global"
            ],
            [
              "Biases and motives of the provider",
              "Tujuan penyedia informasi berbeda dengan pengguna; bias bisa karena optimisme jujur atau disengaja",
              "Peminjam menyajikan laporan keuangan ke bank"
            ],
            [
              "Voluminous data",
              "Transaksi yang sangat banyak membuat kesalahan mudah terkubur; kesalahan kecil yang banyak bisa jadi material",
              "Kelebihan bayar 2.000 dolar di instansi pemerintah besar"
            ],
            [
              "Complex exchange transactions",
              "Transaksi dan standar akuntansi makin kompleks",
              "Akuisisi (nilai wajar), konsolidasi, derivatif"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "h3",
          "text": "Tiga cara mengurangi information risk"
        },
        {
          "kind": "p",
          "text": "*Sumber: ARENS p.9*"
        },
        {
          "kind": "ol",
          "items": [
            "**Pengguna memverifikasi sendiri.** Umumnya tidak praktis karena mahal. Contoh: otoritas pajak memeriksa SPT; pembeli perusahaan memakai tim audit khusus.",
            "**Pengguna berbagi risiko dengan manajemen.** Pengguna yang dirugikan bisa menggugat manajemen. Kelemahannya, ganti rugi bisa tidak tertagih, misalnya kalau perusahaan pailit.",
            "**Laporan keuangan diaudit.** Cara paling umum."
          ]
        },
        {
          "kind": "p",
          "text": "Perusahaan kecil kadang memilih membayar bunga lebih tinggi daripada membayar audit, dan bank mau menerima risiko lebih tinggi karena bunganya lebih tinggi. `(ARENS p.8)`"
        },
        {
          "kind": "p",
          "text": "**Kasus Theranos (Auditing in Action 1-1).** Pendirinya menghimpun 700 juta dolar dari investor tanpa pernah menyerahkan laporan keuangan yang diaudit. Aturan SEC membebaskan kewajiban itu untuk \"accredited investors\", dan tidak satu pun investor memintanya. Pada 2018 perusahaan dan pendirinya menyelesaikan tuduhan penipuan dari SEC. Pelajarannya: menerima laporan manajemen apa adanya bukan cara mengelola information risk. `(ARENS p.9)`"
        },
        {
          "kind": "h3",
          "text": "Agency theory: kenapa pemilik butuh pemeriksa independen"
        },
        {
          "kind": "p",
          "text": "RPS Week 1 menyebut agency theory. Buku Arens Ch.1 tidak membahasnya, jadi bagian ini diambil langsung dari artikel aslinya: Jensen, M. C. dan Meckling, W. H. (1976), \"Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure\", *Journal of Financial Economics* 3(4), 305–360."
        },
        {
          "kind": "ul",
          "items": [
            "**Hubungan keagenan** adalah kontrak ketika satu atau lebih orang (**prinsipal**) melibatkan orang lain (**agen**) untuk melakukan jasa atas nama mereka, dengan mendelegasikan sebagian wewenang mengambil keputusan kepada agen. `(Jensen & Meckling 1976, p.308)`",
            "Kalau kedua pihak sama-sama memaksimalkan kepentingannya sendiri, ada alasan kuat untuk percaya bahwa **agen tidak akan selalu bertindak demi kepentingan prinsipal**. `(p.308)`",
            "Hubungan antara **pemegang saham dan manajer** perusahaan memenuhi definisi hubungan keagenan ini, dan masalahnya berkaitan erat dengan **pemisahan kepemilikan dan pengendalian**. `(p.309)`"
          ]
        },
        {
          "kind": "p",
          "text": "**Di mana audit masuk?** Dari dua arah."
        },
        {
          "kind": "ul",
          "items": [
            "**Monitoring** adalah pengawasan oleh prinsipal. Jensen dan Meckling menyebut **auditing** sebagai salah satu caranya, bersama sistem pengendalian formal, pembatasan anggaran, dan kompensasi insentif. `(p.323)`",
            "**Bonding** adalah biaya yang dikeluarkan agen sendiri untuk menjamin bahwa ia tidak akan merugikan prinsipal. Contoh dari artikel: manajer sejak awal menyanggupi agar laporan keuangannya diaudit oleh akuntan publik independen. `(pp.325, 338–339)`"
          ]
        },
        {
          "kind": "p",
          "text": "Karena itu teori ini juga menjelaskan kenapa **manajemen sendiri** mau melibatkan auditor independen untuk menguji laporannya. `(p.306)`"
        },
        {
          "kind": "pendalaman",
          "title": "Biaya keagenan dan asimetri informasi",
          "blocks": [
            {
              "kind": "ul",
              "items": [
                "**Biaya keagenan** terdiri dari tiga: biaya **monitoring** yang dikeluarkan prinsipal, biaya **bonding** yang dikeluarkan agen, dan **residual loss** (kerugian yang tetap tersisa walaupun sudah diawasi). `(Jensen & Meckling 1976, p.308)`",
                "Artikel ini dibuka dengan kutipan Adam Smith (1776): direktur yang mengelola uang orang lain tidak bisa diharapkan menjaganya secermat uang sendiri. `(p.305)`"
              ]
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi: menyatukan dua kacamata.** Agency theory menjelaskan **motifnya**: kepentingan manajer (agen) bisa berbeda dengan pemilik atau kreditor (prinsipal). Information risk dari buku menjelaskan **kesulitannya**: pengguna jauh dari informasi, penyaji punya bias dan motif, datanya banyak, dan transaksinya kompleks. `(ARENS p.8)` Kondisi ketika manajer tahu lebih banyak daripada pemilik sering disebut **asimetri informasi**. Istilah ini tidak dipakai di Arens Ch.1 maupun di bagian artikel yang dirujuk di sini. Boleh kamu pakai sebagai sebutan singkat, asalkan tetap bisa menjelaskannya dengan konsep dari dua sumber tadi."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "8. Tiga jenis audit",
      "layer": "main",
      "source": "*Sumber: ARENS pp.10–11, Table 1-1*",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Tiga jenis audit: laporan keuangan (sesuai kerangka?), kepatuhan (sesuai aturan?), operasional (efisien dan efektif?)."
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Financial statement audit",
            "Compliance audit",
            "Operational audit"
          ],
          "rows": [
            [
              "Pertanyaan",
              "Apakah laporan keuangan disajikan sesuai kerangka pelaporan yang berlaku?",
              "Apakah entitas mematuhi aturan, regulasi, kontrak, atau kebijakan internal?",
              "Apakah suatu bagian operasi berjalan ekonomis, efisien, dan efektif?"
            ],
            [
              "Kriteria",
              "Kerangka pelaporan (misalnya IFRS)",
              "Hukum, regulasi, ketentuan kontrak/hibah, atau kebijakan internal",
              "Standar yang ditetapkan perusahaan"
            ],
            [
              "Contoh buku",
              "Audit tahunan Canadian Tire",
              "Apakah covenant pinjaman bank terpenuhi",
              "Pemrosesan penggajian terkomputerisasi anak usaha H"
            ],
            [
              "Hasil untuk",
              "Pengguna eksternal",
              "Umumnya manajemen",
              "Manajemen, disertai rekomendasi perbaikan"
            ],
            [
              "Yang biasa melakukan",
              "Akuntan publik",
              "Sering internal auditor; juga auditor pemerintah dan akuntan publik",
              "Internal auditor dan auditor pemerintah; akuntan publik juga bisa"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Catatan tambahan:"
        },
        {
          "kind": "ul",
          "items": [
            "Contoh compliance audit untuk bisnis: apakah staf akuntansi mengikuti prosedur controller, apakah tarif upah sesuai upah minimum, apakah pemasok mematuhi kode etik pemasok atau larangan pekerja anak. `(ARENS p.10)`",
            "Operational audit disebut juga **performance audit**. Buktinya tidak terbatas pada akuntansi, jadi sering butuh tim multidisiplin. `(ARENS p.11)`"
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "9. Jenis-jenis auditor",
      "layer": "main",
      "source": "*Sumber: ARENS pp.11–14*",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Beda utama auditor internal dan auditor eksternal ada pada independensinya."
        },
        {
          "kind": "table",
          "headers": [
            "Jenis",
            "Ciri utama",
            "Catatan penting"
          ],
          "rows": [
            [
              "Internal auditors",
              "Karyawan organisasi; memberi asurans dan konsultasi (definisi IIA)",
              "Independen dari fungsi lini, tapi tidak sepenuhnya independen dari entitas karena hubungan kerja. Biasanya melapor ke komite audit. Pengguna luar kecil kemungkinan mengandalkan hasil kerjanya. Sertifikasi: CIA"
            ],
            [
              "Government auditors",
              "Auditor General yang mengaudit instansi pemerintah dan melapor ke legislatif",
              "Independen secara organisasi. Penekanan kuat pada kepatuhan. Sering melakukan performance (value-for-money) audit"
            ],
            [
              "Auditor otoritas pajak (CRA)",
              "Memeriksa SPT wajib pajak",
              "Semata-mata compliance audit; butuh keahlian pajak sesuai bidangnya"
            ],
            [
              "Forensic accountants dan fraud auditors",
              "Menginvestigasi fraud laporan keuangan, penyalahgunaan aset, pencucian uang, suap",
              "Ciri khas: *investigative mindset*. Sertifikasi: CPA-CFF, CFE"
            ],
            [
              "Public accountants",
              "Memberi jasa kepada publik; jasa paling dikenal adalah audit laporan keuangan",
              "Hanya kantor akuntan publik yang boleh melakukan audit dan review laporan keuangan. Audit yang diwajibkan hukum disebut **statutory audit**"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Perbedaan utama internal auditor dan auditor eksternal** adalah independensi. `(ARENS p.12)`"
        },
        {
          "kind": "p",
          "text": "**Audit committee** adalah komite dewan direksi yang mengawasi auditor, sebagai penghubung yang objektif dan independen antara auditor, manajemen, dan dewan. `(ARENS p.12)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi: padanan di Indonesia.** Contoh buku berkonteks Kanada. Padanannya di Indonesia kira-kira: pemeriksa pajak DJP (mirip auditor CRA), BPK untuk keuangan negara (mirip Auditor General), dan IAPI yang menetapkan standar audit dengan mengadopsi ISA. Blok ini bukan dari buku; rinciannya dibahas di TM02."
        }
      ]
    },
    {
      "kind": "section",
      "title": "10. Akuntansi vs auditing",
      "layer": "main",
      "source": "*Sumber: ARENS pp.14–15*",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Akuntan mencatat; auditor menilai catatan itu dan tidak mencatat apa pun."
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Akuntansi",
            "Auditing (laporan keuangan)"
          ],
          "rows": [
            [
              "Fungsi",
              "Mencatat, mengklasifikasi, mengikhtisarkan peristiwa ekonomi untuk menyediakan informasi keuangan",
              "Menilai apakah informasi yang sudah dicatat mencerminkan peristiwa ekonomi secara wajar"
            ],
            [
              "Pengetahuan standar akuntansi",
              "Perlu",
              "Perlu"
            ],
            [
              "Mencatat transaksi?",
              "Ya",
              "**Tidak**"
            ],
            [
              "Keahlian khas",
              "Prinsip dan aturan penyusunan; merancang sistem pencatatan",
              "Pengendalian internal, penilaian risiko, akumulasi dan interpretasi bukti; memilih prosedur, jumlah item uji, mengevaluasi hasil"
            ],
            [
              "Tingkat ketepatan",
              "Laporan keuangan penuh estimasi, tidak mungkin tepat mutlak",
              "Menilai kewajaran dalam batas materialitas"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Sumber kebingungan publik: auditor harus ahli akuntansi, dan auditor bergelar \"public accountant\". Tapi auditor laporan keuangan tidak mencatat apa pun. `(ARENS p.14)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "11. Jasa akuntan publik: asurans dan nonasurans",
      "layer": "main",
      "source": "*Sumber: ARENS pp.15–19*",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Urutan keyakinan: audit (memadai), review (terbatas), compilation (tidak ada)."
        },
        {
          "kind": "p",
          "text": "**Asurans atas informasi keuangan historis**"
        },
        {
          "kind": "ul",
          "items": [
            "**Audit laporan keuangan**: reasonable assurance. Wajib bagi perusahaan publik. Perusahaan privat sering diaudit untuk pendanaan bank, rencana go public, atau karena ada pemegang saham minoritas pasif.",
            "**Review laporan keuangan**: limited assurance, lebih murah; umum untuk perusahaan kecil nonpublik. Pilihannya bergantung pada kebutuhan asurans pengguna, bukan semata biaya.",
            "**Audit informasi keuangan selain laporan keuangan**: misalnya opini atas angka penjualan toko karena sewa mal dihitung dari penjualan."
          ]
        },
        {
          "kind": "p",
          "text": "**Asurans atas informasi nonkeuangan**, misalnya:"
        },
        {
          "kind": "ul",
          "items": [
            "efektivitas pengendalian internal atas pelaporan keuangan (diwajibkan SOX di AS),",
            "pengendalian di service organization,",
            "kepatuhan pada perjanjian, misalnya batas current ratio dalam perjanjian pinjaman,",
            "laporan emisi gas rumah kaca,",
            "lainnya, misalnya asurans PwC atas proses voting Academy Awards sejak 1935 dan laporan keberlanjutan."
          ]
        },
        {
          "kind": "p",
          "text": "**Jasa nonasurans**: compilation (menyusun laporan keuangan dari catatan klien, tanpa asurans), jasa perpajakan, management advisory, dan jasa akuntansi/pembukuan. KAP harus memperhatikan aturan independensi yang melarang sebagian jasa ini untuk klien asurans (TM03)."
        },
        {
          "kind": "p",
          "text": "**Urutan tingkat keyakinan atas laporan keuangan historis:**"
        },
        {
          "kind": "table",
          "headers": [
            "Jasa",
            "Tingkat keyakinan",
            "Pekerjaan utama"
          ],
          "rows": [
            [
              "Audit",
              "Reasonable (tinggi)",
              "Wawancara, prosedur analitis, **dan** pemeriksaan dokumen serta catatan"
            ],
            [
              "Review",
              "Limited (moderat)",
              "Terutama wawancara dan prosedur analitis"
            ],
            [
              "Compilation",
              "Tidak ada",
              "Menyusun informasi keuangan dari catatan klien"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Analogi buku: review seperti inspeksi visual singkat mobil sebelum perjalanan jauh; audit seperti inspeksi menyeluruh yang membongkar roda dan memeriksa busi. Lebih mahal, tapi keyakinannya lebih tinggi. `(ARENS p.16)`"
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
          "title": "Kasus 1: Pinjaman bank.",
          "prompt": "PT Sinar Cahaya mengajukan kredit investasi. Bank meminta laporan keuangan yang telah diaudit. Direktur keuangan bertanya: \"Kenapa harus diaudit? Laporan kami sudah disusun sesuai standar.\"",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* Suku bunga yang ditetapkan bank mencerminkan risk-free rate, business risk, dan information risk. Laporan yang disusun manajemen sendiri mengandung information risk: bank tidak punya pengetahuan langsung atas perusahaan (remoteness) dan manajemen punya motif agar kreditnya disetujui (bias and motives of the provider). Audit tidak mengubah risiko bisnis PT Sinar Cahaya, tetapi menurunkan information risk. Karena itu bank bisa menerima risiko yang lebih rendah dan menawarkan bunga yang lebih rendah. `(ARENS pp.7–8)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Klasifikasi jenis audit.",
          "prompt": "Tentukan jenis audit untuk setiap situasi:\n1. Tim internal memeriksa apakah bagian pembelian mengikuti prosedur tender yang ditetapkan direksi.\n2. KAP menyatakan opini atas laporan keuangan tahunan perusahaan terbuka.\n3. Tim multidisiplin menilai apakah proses distribusi gudang bisa dibuat lebih hemat dan cepat.\n4. Kreditor meminta auditor memastikan rasio lancar debitur memenuhi batas dalam perjanjian pinjaman.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Compliance audit dengan kriteria kebijakan internal. (2) Financial statement audit. (3) Operational audit, karena menilai economy, efficiency, dan effectiveness. (4) Compliance audit (atau asurans kepatuhan atas perjanjian) dengan kriteria ketentuan perjanjian pinjaman. `(ARENS pp.10–11, p.17)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3: Interpretasi: audit atau review?",
          "prompt": "Sebuah perusahaan keluarga kecil akan meminjam dana dari bank daerah. Bank menyatakan cukup dengan review. Sepupu pemilik, yang memegang 10 persen saham tetapi tidak ikut mengelola, meminta audit.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Menurut buku, pilihan audit atau review ditentukan oleh kebutuhan pengguna, tidak semata oleh biaya. Buku juga menyebut pemegang saham minoritas yang tidak ikut mengelola sebagai salah satu alasan perusahaan privat memilih audit. Kebutuhan dua pengguna ini berbeda, sehingga tidak ada satu jawaban benar. Jawaban yang baik menyebut siapa penggunanya, seberapa besar information risk yang mereka hadapi, dan konsekuensi biaya. `(ARENS pp.15–16)`"
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
          "text": "Jawab dulu **tanpa melihat catatan**, dengan kata-katamu sendiri. Baru setelah itu bandingkan dengan contoh jawaban."
        },
        {
          "kind": "self-check",
          "question": "**1. Jelaskan apa itu audit tanpa menyebut kata \"laporan keuangan\".**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* audit adalah kegiatan mengumpulkan dan menilai bukti untuk mengecek seberapa jauh suatu informasi sesuai dengan patokan yang disepakati. Pemeriksanya harus kompeten dan independen, dan hasilnya dilaporkan ke pihak yang berkepentingan. Contohnya pemeriksaan SPT terhadap undang-undang pajak. `(ARENS pp.3–6)`"
            }
          ],
          "signal": "*Tanda belum paham:* jawabanmu tidak bisa lepas dari laporan keuangan, atau tidak menyebut kriteria dan bukti."
        },
        {
          "kind": "self-check",
          "question": "**2. Beri satu contohmu sendiri tentang sesuatu yang bisa diaudit selain laporan keuangan. Sebutkan informasinya, kriterianya, dan bukti yang bisa dikumpulkan.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* kepatuhan kantin kampus terhadap kontrak sewa yang mewajibkan harga maksimum tertentu. Informasinya daftar harga dan catatan penjualan; kriterianya klausul harga di kontrak; buktinya daftar menu, struk, dan observasi langsung. Polanya mengikuti compliance audit di buku. `(ARENS pp.10–11)`"
            }
          ],
          "signal": "*Tanda belum paham:* tidak bisa menyebut kriterianya. Tanpa kriteria, tidak ada yang bisa diaudit."
        },
        {
          "kind": "self-check",
          "question": "**3. Kenapa bank mau memberi bunga lebih rendah kepada debitur yang laporan keuangannya diaudit? Jelaskan dengan dua kacamata.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* dari kacamata information risk, audit menurunkan kemungkinan bank mengambil keputusan dari informasi yang salah, sehingga risiko bank turun. Risiko bisnis debitur sendiri tidak berubah. `(ARENS pp.7–8)` Dari kacamata agency theory, bank sebagai kreditor adalah prinsipal yang dananya dikelola manajer debitur. Audit adalah bentuk monitoring atas agen itu, dan kesediaan debitur untuk diaudit adalah bentuk bonding. `(Jensen & Meckling 1976, pp.323, 338–339)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"karena audit membuat perusahaan lebih aman\" atau \"risiko bisnisnya turun\"."
        },
        {
          "kind": "self-check",
          "question": "**4. Seorang temanmu bilang: \"Auditor itu kan tugasnya membuat laporan keuangan yang benar.\" Koreksi pernyataan itu.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* manajemen yang menyusun laporan keuangan. Auditor tidak mencatat apa pun; ia menilai apakah yang sudah dicatat mencerminkan peristiwa ekonomi secara wajar, lalu memberi opini dengan keyakinan memadai. `(ARENS pp.14–15; ISA200 paras. 4–5)`"
            }
          ],
          "signal": "*Tanda belum paham:* mencampuradukkan akuntansi dan auditing."
        },
        {
          "kind": "self-check",
          "question": "**5. Apa beda audit, review, dan compilation, dilihat dari keyakinan yang diterima pengguna?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:*"
            },
            {
              "kind": "ul",
              "items": [
                "**Audit**: keyakinan memadai (tinggi), karena auditor juga memeriksa dokumen dan catatan.",
                "**Review**: keyakinan terbatas, karena isinya terutama wawancara dan prosedur analitis.",
                "**Compilation**: tidak ada keyakinan sama sekali, karena akuntan hanya menyusun informasi dari catatan klien."
              ]
            },
            {
              "kind": "p",
              "text": "`(ARENS pp.15–18)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap review sama dengan audit versi singkat yang hasilnya sama."
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
          "text": "**Kerangka jawaban esai \"Jelaskan mengapa audit dibutuhkan\"**"
        },
        {
          "kind": "ol",
          "items": [
            "Mulai dari information risk sebagai salah satu komponen suku bunga, dan tegaskan audit tidak mengubah risk-free rate dan business risk.",
            "Sebut empat penyebab information risk beserta contoh singkat.",
            "Sebut tiga cara menguranginya, dan jelaskan kenapa audit adalah cara yang paling umum.",
            "Tutup dengan alasan pengguna menghargai auditor: integritas, independensi, keahlian."
          ]
        },
        {
          "kind": "p",
          "text": "**Kerangka jawaban esai \"Jelaskan definisi auditing\"**\nKutip definisi, lalu jelaskan empat unsurnya (asersi/informasi/kriteria; bukti; orang kompeten dan independen; laporan), dan beri satu contoh yang memetakan keempatnya (misalnya audit SPT oleh otoritas pajak)."
        },
        {
          "kind": "p",
          "text": "**Pasangan konsep yang sering tertukar**"
        },
        {
          "kind": "table",
          "headers": [
            "Pasangan",
            "Pembeda"
          ],
          "rows": [
            [
              "Auditing vs assurance",
              "Pekerjaan vs hasil/tingkat keyakinan bagi pengguna"
            ],
            [
              "Reasonable vs limited assurance",
              "Tinggi (opini positif) vs moderat (keyakinan negatif)"
            ],
            [
              "Reasonable vs absolute assurance",
              "Bukti audit persuasive, bukan conclusive"
            ],
            [
              "Business risk vs information risk",
              "Hanya information risk yang diturunkan audit"
            ],
            [
              "Compliance vs operational audit",
              "Kepatuhan pada kriteria vs efisiensi dan efektivitas operasi"
            ],
            [
              "Internal vs external auditor",
              "Perbedaan utama adalah independensi"
            ],
            [
              "Accounting vs auditing",
              "Auditor tidak mencatat apa pun"
            ],
            [
              "Review vs compilation",
              "Review memberi limited assurance; compilation tidak memberi asurans"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
