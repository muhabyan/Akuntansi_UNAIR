// AKA201 shared/latihan_skenario_UTS.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const LATIHAN_SKENARIO_UTS_READING: Reading = {
  "tm": 93,
  "title": "Latihan Skenario UTS PBR I (TM01–TM07)",
  "intro": "**Format:** enam skenario dengan fakta dan angka yang berbeda-beda, seperti format UTS menurut Grading Policy. Setiap skenario mencampur beberapa TM.\n\n**Cara pakai:** kerjakan dulu dengan tangan tanpa melihat pembahasan, dengan lima langkah dari `panduan_menjawab_kasus.md` (fakta, isu, konsep, analisis, kesimpulan). Baru setelah itu bandingkan. Setiap pembahasan memberi tanda **batas Developing** (minimal yang harus ada) dan **tambahan Proficient** (yang membuat jawaban naik level).\n\nSemua perusahaan, nama, dan angka adalah fiktif, disusun penulis untuk latihan. Konsep dan standar dirujuk ke sumber.",
  "objectives": [],
  "layout": "layered",
  "badge": "Persiapan UTS",
  "blocks": [
    {
      "kind": "section",
      "title": "Skenario 1: PT Arunika Batik (TM01, TM02, TM03)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "PT Arunika Batik adalah perusahaan privat milik keluarga Santoso. Keluarga tidak ikut mengelola; operasional dipegang direktur profesional. Ada dua pemegang saham minoritas yang juga tidak ikut mengelola. Perusahaan mengajukan kredit investasi 8 miliar, dan bank mensyaratkan laporan keuangan yang diaudit. Keluarga Santoso mengusulkan \"cukup direviu saja supaya murah\". KAP Wibowo & Rekan menawarkan paket: audit tahunan **ditambah** jasa pembukuan bulanan dan penyusunan laporan keuangan."
        },
        {
          "kind": "self-check",
          "question": "**Pertanyaan**\n1. Jelaskan kenapa bank dan pemegang saham membutuhkan audit, dengan konsep information risk dan agency theory.\n2. Evaluasi usulan \"cukup direviu\".\n3. Identifikasi masalah pada paket jasa yang ditawarkan KAP, dan tentukan sikap yang tepat.\n4. Siapa yang boleh menandatangani laporan audit? Apakah pembatasan jasa audit PP 20/2015 berlaku untuk perusahaan ini?",
          "answer": [
            {
              "kind": "p",
              "text": "**Pembahasan**"
            },
            {
              "kind": "ol",
              "items": [
                "**Information risk:** bank dan pemegang saham tidak punya pengetahuan langsung atas operasi perusahaan (remoteness), dan manajemen punya motif agar kredit disetujui dan kinerjanya terlihat baik (biases and motives of the provider). Audit menurunkan information risk sehingga bank bisa menerima risiko lebih rendah; risiko bisnis perusahaan tidak berubah. `(Arens pp.7–8)` **Agency theory:** keluarga Santoso, pemegang saham minoritas, dan bank adalah prinsipal; direktur profesional adalah agen yang diberi wewenang mengelola. Kepentingan agen bisa berbeda dengan prinsipal, sehingga dibutuhkan monitoring, dan Jensen dan Meckling menyebut auditing sebagai salah satu bentuknya. `(Jensen & Meckling 1976, pp.308–309, 323)`",
                "Review hanya memberi keyakinan terbatas, terutama melalui wawancara dan prosedur analitis, sedangkan audit memberi keyakinan memadai. Pilihan audit atau review ditentukan oleh **kebutuhan asurans pengguna**, bukan semata biaya. Bank sudah secara tegas mensyaratkan audit, dan pemegang saham minoritas yang pasif termasuk alasan perusahaan privat memilih audit. Jadi usulan review tidak memenuhi kebutuhan pengguna utama. `(Arens pp.15–16)`",
                "KAP yang membukukan dan menyusun laporan keuangan lalu mengauditnya menghadapi **ancaman telaah pribadi**: auditor menilai pekerjaannya sendiri. `(KEPAP 120.6-A3; Arens Table 3-2)` UU 5/2011 juga menyebut pemberian jasa asurans dan jasa lainnya dalam periode atau tahun buku yang sama sebagai keadaan yang harus dihindari untuk menjaga independensi. `(UUAP Pasal 28)` Sikap yang tepat: KAP hanya menerima perikatan audit, dan pembukuan dikerjakan pihak lain; jika tidak, tolak salah satu jasa. `(KEPAP P120.10)`",
                "Hanya Akuntan Publik berizin yang boleh memberikan jasa asurans, melalui KAP. `(UUAP Pasal 3, 25)` Pembatasan 5 tahun buku dalam PP 20/2015 hanya berlaku untuk entitas sektor pasar modal, bank umum, dana pensiun, asuransi/reasuransi, dan BUMN, jadi **tidak berlaku** untuk perusahaan privat ini. `(PPAP Pasal 11)`"
              ]
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Batas Developing:** menyebut information risk, beda audit dan review, dan ancaman telaah pribadi."
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Tambahan Proficient:** memakai fakta kasus (bank mensyaratkan audit, pemegang saham minoritas pasif), menghubungkan dengan agency theory, menyebut UU 5/2011 Pasal 28, dan menangkap jebakan bahwa PP 20/2015 tidak berlaku."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Skenario 2: PT Nusantara Logistik (TM03)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "Tim KAP sedang mengaudit PT Nusantara Logistik. Tiga hal terjadi dalam minggu yang sama:"
        },
        {
          "kind": "ul",
          "items": [
            "Raka, senior auditor, mengetahui adiknya baru diangkat menjadi manajer akuntansi di klien.",
            "Dua hari sebelum fieldwork, CFO mengirim tiket konser VIP dan undangan makan malam di restoran mewah untuk seluruh tim.",
            "Saat membahas temuan penyisihan piutang, CFO berkata: \"Kalau ini dipermasalahkan, tahun depan kami tender ulang auditor.\""
          ]
        },
        {
          "kind": "self-check",
          "question": "**Pertanyaan**\n1. Identifikasi ancaman pada setiap situasi.\n2. Evaluasi apakah ancaman berada pada level yang dapat diterima.\n3. Tentukan tindakan untuk setiap situasi.",
          "answer": [
            {
              "kind": "p",
              "text": "**Pembahasan**"
            },
            {
              "kind": "table",
              "headers": [
                "Situasi",
                "Ancaman",
                "Evaluasi",
                "Tindakan"
              ],
              "rows": [
                [
                  "Adik Raka manajer akuntansi klien",
                  "Kedekatan (familiarity); juga kepentingan pribadi",
                  "Hubungan keluarga dengan orang di posisi kunci akuntansi klien disebut UU 5/2011 sebagai keadaan yang merusak independensi; pihak ketiga yang rasional kemungkinan besar meragukan objektivitas Raka",
                  "Keluarkan Raka dari tim perikatan ini (hilangkan keadaan)"
                ],
                [
                  "Tiket VIP dan makan malam mewah",
                  "Kepentingan pribadi, kedekatan, intimidasi",
                  "Jelas tidak trivial, dan waktunya menjelang fieldwork menguatkan kesan ingin memengaruhi",
                  "Tolak dengan sopan, laporkan ke engagement partner, dokumentasikan"
                ],
                [
                  "Ancaman tender ulang",
                  "Intimidasi",
                  "Tekanan nyata untuk mengubah pertimbangan atas temuan",
                  "Tetap pada temuan yang didukung bukti, konsultasikan dengan partner, komunikasikan kepada komite audit"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(KEPAP 120.6-A3, 120.7-A1, P120.10, 420.2, P420.3; UUAP Pasal 28; Arens Table 3-2)`"
            },
            {
              "kind": "p",
              "text": "Ukuran \"dapat diterima\" adalah **pihak ketiga yang rasional dan memiliki informasi memadai**: jika orang seperti itu mengetahui semua fakta ini, apakah ia akan menyimpulkan tim tetap objektif? `(KEPAP 120.7-A1)` Sikap auditor harus menjaga independensi dalam pemikiran **dan** dalam penampilan. `(KEPAP 120.15-A1)`"
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Batas Developing:** menyebut ancaman yang benar untuk tiap situasi."
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Tambahan Proficient:** memakai tolok ukur pihak ketiga yang rasional, menyebut tiga cara mengatasi ancaman dan memilih yang tepat untuk tiap situasi, mengaitkan hubungan keluarga dengan UU 5/2011, serta menyebut komunikasi dengan partner dan komite audit."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Skenario 3: PT Mitra Pangan (TM04, TM05)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "*(Skenario ini dibahas lengkap sebagai contoh tiga level di `panduan_menjawab_kasus.md`.)* Coba kerjakan dulu tanpa membuka panduan, lalu bandingkan dengan jawaban level Proficient di sana."
        }
      ]
    },
    {
      "kind": "section",
      "title": "Skenario 4: PT Karya Elektronik (TM05)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "PT Karya Elektronik adalah distributor elektronik dengan tahun buku 31 Desember. Direksi mendapat bonus berbasis laba. Produknya cepat usang karena model baru terus bermunculan. Auditor menemukan:"
        },
        {
          "kind": "p",
          "text": "a. Penjualan 450 juta dicatat 30 Desember, barang dikirim 5 Januari.\nb. 200 unit televisi titipan (konsinyasi) dari pemasok ikut dihitung sebagai persediaan.\nc. Tagihan jasa ekspedisi Desember 38 juta baru diterima 12 Januari dan belum dicatat.\nd. Persediaan ponsel model lama dicatat pada biaya penuh, padahal harga jualnya sudah di bawah biaya.\ne. Hasil penjualan kendaraan operasional dicatat sebagai pendapatan penjualan.\nf. Sebagian persediaan dijaminkan ke bank, tetapi tidak diungkapkan."
        },
        {
          "kind": "self-check",
          "question": "**Pertanyaan**\n1. Tentukan asersi yang dilanggar oleh setiap temuan, arah salah sajinya, dan akun yang terdampak.\n2. Tentukan dua asersi yang paling relevan untuk perusahaan ini, dengan alasan.",
          "answer": [
            {
              "kind": "p",
              "text": "**Pembahasan**"
            },
            {
              "kind": "table",
              "headers": [
                "Temuan",
                "Asersi",
                "Arah dan akun terdampak"
              ],
              "rows": [
                [
                  "a",
                  "Cutoff (transaksi penjualan)",
                  "Penjualan dan piutang lebih saji; persediaan kurang saji pada akhir tahun"
                ],
                [
                  "b",
                  "Rights and obligations",
                  "Persediaan lebih saji; barangnya ada tetapi bukan milik"
                ],
                [
                  "c",
                  "Completeness (bisa juga dibahas sebagai cutoff beban)",
                  "Beban dan utang kurang saji"
                ],
                [
                  "d",
                  "Accuracy, valuation, and allocation",
                  "Persediaan lebih saji; harga pokok penjualan kurang saji"
                ],
                [
                  "e",
                  "Classification",
                  "Pendapatan penjualan lebih saji; keuntungan atau kerugian penjualan aset tidak disajikan terpisah"
                ],
                [
                  "f",
                  "Presentation",
                  "Pengungkapan tidak lengkap; angka saldonya sendiri tidak salah"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(Arens pp.105–112; ISA315 para. A190)`"
            },
            {
              "kind": "p",
              "text": "**Asersi paling relevan:** **valuation persediaan**, karena produk cepat usang sehingga penentuan nilai realisasi neto butuh pertimbangan besar, dan bonus berbasis laba memberi insentif untuk tidak menurunkan nilainya; serta **occurrence dan cutoff penjualan**, karena fraud pengakuan pendapatan paling umum dan insentif bonus mendorong lebih saji pendapatan. `(Arens pp.105–106)` Penentuan asersi relevan tetap pertimbangan profesional dengan tiga faktor: bias atau insentif manajemen, kompleksitas atau subjektivitas, serta risiko fraud dan error."
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Batas Developing:** asersi benar untuk minimal lima dari enam temuan."
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Tambahan Proficient:** menyebut arah salah saji dan akun terdampak (termasuk dampak ganda pada temuan a), membedakan existence dan rights pada temuan b, dan menjustifikasi asersi relevan dengan fakta kasus (usang, bonus)."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Skenario 5: PT Sehat Farma (TM07, TM06)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "PT Sehat Farma adalah distributor farmasi privat yang dibiayai investor dan pinjaman bank. Perjanjian pinjaman mensyaratkan **current ratio minimal 1,25**. Data yang tersedia:"
        },
        {
          "kind": "table",
          "headers": [
            "Keterangan",
            "Jumlah"
          ],
          "rows": [
            [
              "Laba sebelum pajak tahun lalu",
              "4,2 miliar"
            ],
            [
              "Laba sebelum pajak tahun berjalan (belum diaudit)",
              "1,8 miliar"
            ],
            [
              "Biaya satu kali penutupan gudang tahun berjalan (sudah termasuk dalam laba di atas)",
              "2,0 miliar"
            ],
            [
              "Aset lancar (belum diaudit)",
              "12,55 miliar"
            ],
            [
              "Liabilitas lancar (belum diaudit)",
              "10,00 miliar"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Tahun ini CFO baru saja berganti, dan tahun lalu ditemukan beberapa salah saji persediaan."
        },
        {
          "kind": "self-check",
          "question": "**Pertanyaan**\n1. Tentukan dan justifikasi materialitas keseluruhan, materialitas pelaksanaan, dan ambang trivial.\n2. Di akhir audit ditemukan salah saji yang belum dikoreksi:\n   - (i) beban utilitas Desember 25 juta belum dicatat;\n   - (ii) penjualan 70 juta (harga pokok 50 juta) dicatat di tahun berjalan padahal barang dikirim Januari;\n   - (iii) persediaan kedaluwarsa 60 juta belum dihapus, dan manajemen berpendapat masih bisa dijual;\n   - (iv) proyeksi hasil sampel menunjukkan piutang lebih saji sekitar 30 juta.\n\n   Kelompokkan jenis salah sajinya, hitung dampaknya, dan evaluasi apakah material.\n3. Jika manajemen menolak mengoreksi, opini apa yang tepat?",
          "answer": [
            {
              "kind": "p",
              "text": "**Pembahasan**"
            },
            {
              "kind": "p",
              "text": "**1. Materialitas**"
            },
            {
              "kind": "ul",
              "items": [
                "**Tolok ukur:** laba sebelum pajak, karena pengguna (investor dan bank) menilai kinerja dan kemampuan membayar. Tetapi laba tahun berjalan turun tajam karena biaya satu kali, dan buku menyebut laba mungkin perlu **dinormalisasi** serta volatilitas tolok ukur harus dipertimbangkan. `(Arens pp.202–203)` Laba dinormalisasi = 1,8 miliar + 2,0 miliar = **3,8 miliar**.",
                "**Persentase:** 5 persen (tengah rentang 3–7 persen), karena sensitivitas pengguna moderat: ada covenant tetapi bukan situasi penjualan perusahaan. Materialitas keseluruhan = 5% × 3,8 miliar = **190 juta**. Rentang 3–7 persen adalah 114 juta sampai 266 juta.",
                "**Materialitas pelaksanaan:** pergantian CFO dan riwayat salah saji persediaan adalah faktor risiko, sehingga dipakai persentase yang lebih rendah dalam rentang 50–75%, yaitu 60% × 190 juta = **114 juta**. `(Arens p.207)`",
                "**Ambang trivial:** mengikuti contoh buku (1 persen dari materialitas keseluruhan) = **1,9 juta**. `(Arens p.206)`",
                "Pilihan persentase adalah pertimbangan profesional yang harus didokumentasikan. `(Arens p.204; ISA320 para. A8)`"
              ]
            },
            {
              "kind": "p",
              "text": "**2. Evaluasi salah saji**"
            },
            {
              "kind": "table",
              "headers": [
                "Salah saji",
                "Jenis",
                "Dampak laba sebelum pajak",
                "Dampak aset lancar",
                "Dampak liabilitas lancar"
              ],
              "rows": [
                [
                  "(i) Beban utilitas",
                  "Factual",
                  "(25 juta)",
                  "–",
                  "+25 juta"
                ],
                [
                  "(ii) Cutoff penjualan",
                  "Factual",
                  "(20 juta)",
                  "(70 juta) + 50 juta = (20 juta)",
                  "–"
                ],
                [
                  "(iii) Persediaan kedaluwarsa",
                  "Judgmental",
                  "(60 juta)",
                  "(60 juta)",
                  "–"
                ],
                [
                  "(iv) Proyeksi piutang",
                  "Projected",
                  "(30 juta)",
                  "(30 juta)",
                  "–"
                ],
                [
                  "**Total**",
                  "",
                  "**(135 juta)**",
                  "**(110 juta)**",
                  "**+25 juta**"
                ]
              ],
              "stackOnMobile": true,
              "align": [
                null,
                null,
                "right",
                "right",
                "right"
              ]
            },
            {
              "kind": "p",
              "text": "`(kategori: Arens pp.208–209)`"
            },
            {
              "kind": "ul",
              "items": [
                "**Secara kuantitatif:** total 135 juta masih di bawah materialitas keseluruhan 190 juta, tetapi di atas materialitas pelaksanaan 114 juta, sehingga ruang aman untuk salah saji yang belum terdeteksi sudah hampir habis.",
                "**Secara kualitatif:** current ratio sebelum koreksi = 12,55 / 10,00 = **1,255**, memenuhi covenant. Setelah koreksi = (12,55 − 0,11) / (10,00 + 0,025) = 12,44 / 10,025 = **1,241**, **di bawah 1,25**. Salah saji yang memengaruhi kepatuhan pada covenant adalah faktor kualitatif yang membuatnya material. `(Arens p.209, Table 6-8)`",
                "**Kesimpulan:** secara agregat dan kualitatif **material**. Auditor meminta manajemen mengoreksi, terutama salah saji factual (i) dan (ii), dan membahas salah saji judgmental (iii) dengan manajemen. `(Arens p.209)` Salah saji yang tidak dikoreksi dikomunikasikan kepada TCWG. `(Arens p.210)`"
              ]
            },
            {
              "kind": "p",
              "text": "**3. Opini**\nJika manajemen menolak mengoreksi, laporan keuangan mengandung salah saji material. Dampaknya terbatas pada akun tertentu (beban, penjualan, persediaan, piutang, utang) dan tidak mewakili bagian substansial laporan, sehingga **material tetapi tidak pervasif**: **opini wajar dengan pengecualian**, dengan bagian basis yang menjelaskan sifat dan jumlah salah saji. `(ISA705 paras. 5(a), 7; Arens p.636)` Pertimbangan tambahan (Interpretasi): karena salah saji ini menentukan terpenuhi atau tidaknya covenant, auditor perlu menilai apakah hal itu menimbulkan keraguan atas kelangsungan usaha, yang bisa mengubah pelaporan. `(Arens p.628)`"
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Batas Developing:** perhitungan materialitas benar, jenis salah saji benar, dan opini wajar dengan pengecualian."
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Tambahan Proficient:** menormalisasi laba dengan alasan, menjustifikasi persentase dengan fakta kasus, menghitung dampak pada current ratio dan menangkap pelanggaran covenant sebagai faktor kualitatif, serta menjelaskan kenapa tidak pervasif."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Skenario 6: Enam klien, enam laporan auditor (TM06)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "Anggap semua hal lain wajar dan bukti lain sudah cukup. Tentukan jenis opini dan bagian tambahan dalam laporan auditor untuk setiap klien."
        },
        {
          "kind": "table",
          "headers": [
            "Klien",
            "Fakta"
          ],
          "rows": [
            [
              "A",
              "Pembelian mesin 300 juta langsung dibebankan, padahal seharusnya dikapitalisasi. Materialitas keseluruhan 250 juta. Manajemen menolak mengoreksi. Dampaknya terbatas pada aset tetap dan beban."
            ],
            [
              "B",
              "Auditor baru ditunjuk bulan Februari sehingga tidak bisa mengamati persediaan awal 1,2 miliar, tetapi berhasil memperoleh bukti yang cukup lewat prosedur alternatif."
            ],
            [
              "C",
              "Ada ketidakpastian material terkait kelangsungan usaha. Manajemen menolak mengungkapkannya di catatan atas laporan keuangan."
            ],
            [
              "D",
              "Investasi pada entitas asosiasi bernilai 70 persen dari total aset. Auditor tidak diberi akses ke manajemen maupun auditor entitas itu, dan tidak ada prosedur alternatif."
            ],
            [
              "E",
              "Anak perusahaan terbesar yang diakuisisi tahun ini tidak dikonsolidasi, sehingga banyak pos laporan konsolidasian terdampak."
            ],
            [
              "F",
              "Klien menghadapi gugatan hukum luar biasa yang hasilnya sangat tidak pasti, dan manajemen sudah mengungkapkannya secara memadai."
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "",
          "answer": [
            {
              "kind": "p",
              "text": "**Pembahasan**"
            },
            {
              "kind": "table",
              "headers": [
                "Klien",
                "Opini",
                "Alasan"
              ],
              "rows": [
                [
                  "A",
                  "**Wajar dengan pengecualian**",
                  "Salah saji material (300 juta di atas 250 juta), terbatas pada akun tertentu, jadi tidak pervasif `(ISA705 para. 7)`"
                ],
                [
                  "B",
                  "**Tanpa modifikasian**",
                  "Jika prosedur alternatif berhasil, keterbatasan ruang lingkup dianggap tidak ada `(Arens p.637)`"
                ],
                [
                  "C",
                  "**Wajar dengan pengecualian atau tidak wajar** (pertimbangan)",
                  "Pengungkapan kelangsungan usaha yang tidak memadai membuat opini dimodifikasi `(Arens p.628)`. Buku menyebut pengungkapan kelangsungan usaha bisa tergolong pervasif karena fundamental bagi pemahaman pengguna, sehingga opini tidak wajar layak dipertimbangkan `(Arens p.634; ISA705 para. 5(a)(iii))`"
                ],
                [
                  "D",
                  "**Tidak menyatakan pendapat**, atau mundur bila memungkinkan",
                  "Tidak ada bukti yang cukup, dan kemungkinan dampaknya material serta pervasif karena mewakili bagian substansial laporan `(ISA705 paras. 9, 13; Arens p.642)`"
                ],
                [
                  "E",
                  "**Tidak wajar**",
                  "Salah saji material dan pervasif karena banyak unsur laporan terdampak `(ISA705 para. 8; Arens p.641)`"
                ],
                [
                  "F",
                  "**Tanpa modifikasian + paragraf Penekanan Suatu Hal**",
                  "Hal sudah diungkapkan dengan tepat dan fundamental bagi pemahaman pengguna; paragraf penekanan tidak mengubah opini `(ISA706 paras. 7–8; Arens p.632)`"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Batas Developing:** minimal lima dari enam opini benar."
            },
            {
              "kind": "callout",
              "variant": "note",
              "text": "**Tambahan Proficient:** menyebut kriteria pervasif secara eksplisit, menangkap jebakan klien B (prosedur alternatif berhasil) dan klien F (penekanan tidak mengubah opini), serta menunjukkan pertimbangan untuk klien C."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "Skenario 7 (latihan mandiri, tanpa pembahasan lengkap)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "PT Cahaya Samudra, perusahaan ritel, menjadi klien baru KAP-mu. Auditor ditunjuk setelah tanggal neraca. Manajemen melarang konfirmasi piutang kepada tiga pelanggan terbesar (40 persen saldo piutang) dengan alasan \"menjaga hubungan\". Direktur utama menerima bonus berbasis pendapatan. Laba sebelum pajak 5 miliar dan cukup stabil dalam tiga tahun terakhir."
        },
        {
          "kind": "p",
          "text": "Tulis jawaban dengan lima langkah untuk pertanyaan berikut:"
        },
        {
          "kind": "ol",
          "items": [
            "Risiko apa saja yang kamu lihat, dan asersi mana yang paling relevan?",
            "Bagaimana kamu menetapkan materialitas dan materialitas pelaksanaan?",
            "Apa langkahmu atas larangan konfirmasi, dan apa kemungkinan dampaknya pada opini?"
          ]
        },
        {
          "kind": "p",
          "text": "**Petunjuk (bukan jawaban):** baca ulang TM04 (skeptisisme dan pembatasan oleh manajemen sebagai tanda peringatan), TM05 (asersi relevan dengan insentif bonus), TM07 (faktor yang menurunkan materialitas pelaksanaan, termasuk perikatan tahun pertama), dan TM06 (ISA 705 paras. 11–13 tentang pembatasan oleh manajemen). Bandingkan jawabanmu dengan daftar periksa di `panduan_menjawab_kasus.md`."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "**Sumber konsep:** Arens dkk. 15th Canadian ed.; ISA/SA 200, 315, 320, 705, 706; KEPAP 2025; UU 5/2011; PP 20/2015; Jensen & Meckling (1976). Semua skenario, nama perusahaan, dan angka adalah susunan penulis untuk latihan. Perhitungan skenario 5 sudah dihitung ulang."
        }
      ]
    }
  ]
};
