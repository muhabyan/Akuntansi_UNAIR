// AKA201 TM06/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM6_READING: Reading = {
  "tm": 6,
  "title": "Laporan Auditor dan Jenis Opini",
  "intro": "**Sumber utama:** Arens dkk., Ch.18, pp.619–642. **Standar:** SA/ISA 700 (perumusan opini), 701 (Hal Audit Utama), 705 (modifikasi opini), 706 (paragraf penekanan dan hal lain).",
  "objectives": [
    "Menjelaskan laporan auditor tanpa modifikasian.",
    "Menentukan jenis opini dengan dua pertanyaan.",
    "Membedakan KAM, penekanan suatu hal, dan hal lain.",
    "Menjelaskan pelaporan kelangsungan usaha.",
    "Menyampaikan opini modifikasian secara profesional."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: opini adalah jawaban akhir atas pertanyaan audit",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** di TM01, auditing didefinisikan sebagai menentukan dan melaporkan **tingkat kesesuaian** antara asersi dan kriteria. `(ARENS p.3)` Opini adalah bentuk laporan itu. Dalam audit laporan keuangan, opini menjawab: apakah laporan disajikan wajar, dalam semua hal yang material, sesuai kerangka pelaporan yang berlaku? `(ISA200 para. 3)`"
        },
        {
          "kind": "p",
          "text": "Opini dinyatakan sebagai **pendapat profesional**, tidak sebagai fakta mutlak atau jaminan. Frasa \"menurut opini kami\" menandakan risiko informasi tetap ada walaupun laporan sudah diaudit. `(ARENS p.625)`"
        },
        {
          "kind": "p",
          "text": "**Menentukan jenis opini cukup dengan dua pertanyaan:**"
        },
        {
          "kind": "ol",
          "items": [
            "Apa masalahnya: laporan **salah saji material**, atau auditor **tidak mendapat cukup bukti**?",
            "Seberapa luas dampaknya: material saja, atau material **dan pervasif**? `(ISA705 paras. 6–9)`"
          ]
        },
        {
          "kind": "p",
          "text": "Materialitas (TM07) menentukan apa yang dianggap \"material\", dan asersi (TM05) menunjukkan di mana salah sajinya berada. Opini adalah muara dari semuanya."
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
              "\"Opini tanpa modifikasian berarti perusahaannya sehat atau untung.\"",
              "Opini menyatakan kewajaran **penyajian** laporan keuangan. Laporan auditor tanpa catatan kelangsungan usaha bukan jaminan perusahaan akan bertahan.",
              "ISA200 para. 3; ARENS p.94"
            ],
            [
              "\"Kalau ada Key Audit Matters, berarti ada masalah di perusahaan.\"",
              "KAM adalah hal yang paling signifikan **dalam audit**, dan opininya bisa tetap tanpa modifikasian. KAM bukan opini terpisah.",
              "ISA701 paras. 4, 8"
            ],
            [
              "\"Paragraf penekanan suatu hal berarti opininya dimodifikasi.\"",
              "Paragraf penekanan dan hal lain **tidak mengubah opini**.",
              "ARENS pp.631–632; ISA706 para. 8"
            ],
            [
              "\"Opini tidak menyatakan pendapat berarti auditor menemukan laporan paling salah.\"",
              "Opini tidak menyatakan pendapat muncul karena auditor **kurang bukti**. Kalau auditor **tahu** laporan salah saji material dan pervasif, opininya tidak wajar.",
              "ARENS p.641"
            ],
            [
              "\"Ada ketidakpastian kelangsungan usaha berarti opini pasti dimodifikasi.\"",
              "Jika pengungkapannya memadai, opininya tetap tanpa modifikasian dengan paragraf khusus.",
              "ARENS p.628"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Kasus pembuka: laporan auditor yang lebih informatif",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** KAM membuat laporan auditor lebih informatif bagi pengguna."
        },
        {
          "kind": "p",
          "text": "Selama puluhan tahun laporan auditor hampir tidak berubah, dan investor menganggapnya kurang bernilai. Pada 2015 IAASB merevisi format laporan auditor dan memperkenalkan **Key Audit Matters (KAM)** lewat ISA 701. Pengalaman di Inggris dan riset ACCA atas 560 laporan audit di 11 negara menunjukkan KAM memberi informasi yang berguna. Manfaat tambahannya: diskusi dengan komite audit menjadi lebih baik, auditor lebih fokus pada isu besar, dan perusahaan memperbaiki pengungkapannya. KAM juga dipandang bisa mempersempit expectations gap (TM03). `(ARENS p.620)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Opini tanpa modifikasian",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Opini tanpa modifikasian berarti laporan disajikan wajar. Ini yang paling umum karena klien biasanya mau mengoreksi."
        },
        {
          "kind": "p",
          "text": "Opini tanpa modifikasian (sering disebut \"unqualified\" atau \"clean\") adalah jenis yang **paling umum**, karena sebagian besar perusahaan memilih mengoreksi laporan keuangannya daripada menerima opini modifikasian. `(ARENS pp.621–622)`"
        },
        {
          "kind": "p",
          "text": "**Lima syarat:** `(ARENS p.622)`"
        },
        {
          "kind": "ol",
          "items": [
            "Perikatannya memang audit untuk menyatakan opini.",
            "Auditor mengikuti standar audit.",
            "Auditor independen dan mematuhi etika.",
            "Bukti yang cukup dan tepat telah diperoleh.",
            "Laporan keuangan disajikan wajar sesuai kerangka pelaporan yang berlaku."
          ]
        },
        {
          "kind": "pendalaman",
          "title": "Unsur laporan auditor (entitas tercatat)",
          "blocks": [
            {
              "kind": "table",
              "headers": [
                "Bagian",
                "Isi pokok"
              ],
              "rows": [
                [
                  "Opini",
                  "Laporan yang diaudit, lalu kalimat opini: disajikan wajar, dalam semua hal yang material, sesuai kerangka pelaporan"
                ],
                [
                  "Basis opini",
                  "Audit sesuai standar; auditor independen dan memenuhi etika; bukti cukup dan tepat"
                ],
                [
                  "(Bila ada) Ketidakpastian material terkait kelangsungan usaha",
                  "Lihat section 4"
                ],
                [
                  "Hal Audit Utama",
                  "Wajib untuk entitas tercatat menurut buku"
                ],
                [
                  "Informasi lain",
                  "Auditor membaca laporan tahunan untuk mencari inkonsistensi material, tetapi tidak memberi asurans atasnya"
                ],
                [
                  "Tanggung jawab manajemen dan TCWG",
                  "Menyusun laporan keuangan, pengendalian internal, menilai kelangsungan usaha; TCWG mengawasi"
                ],
                [
                  "Tanggung jawab auditor",
                  "Keyakinan memadai bukan jaminan; arti material; risiko tidak mendeteksi fraud lebih tinggi daripada error; skeptisisme; komunikasi dengan TCWG"
                ],
                [
                  "Nama engagement partner, tanda tangan, lokasi, tanggal",
                  "Nama partner wajib untuk entitas tercatat"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(ARENS pp.622–628, Figure 18-3)`"
            },
            {
              "kind": "p",
              "text": "Beberapa hal penting:"
            },
            {
              "kind": "ul",
              "items": [
                "Frasa **\"menurut opini kami\"** menegaskan bahwa ini **pendapat profesional**, bukan fakta atau jaminan. `(ARENS p.625)`",
                "**Tanggal laporan auditor** hanya boleh dibubuhkan setelah dewan menyetujui laporan keuangan. Tanggal ini menjadi batas akhir tanggung jawab auditor menelaah peristiwa setelah tanggal neraca. `(ARENS p.628)`",
                "**Dual dating**: kalau ada peristiwa material setelah tanggal laporan auditor tetapi sebelum laporannya diterbitkan, laporan bisa diberi dua tanggal. Contoh: \"1 Maret 2021, kecuali Catatan 17 yang bertanggal 2 April 2021\". `(ARENS p.628)`",
                "**Corresponding figures** vs **comparative financial statements**. Pada corresponding figures, angka tahun lalu tetap ditampilkan sebagai pembanding, tetapi opini auditor hanya untuk tahun berjalan. Pada comparative financial statements, opini auditor mencakup laporan kedua periode. `(ARENS pp.625–626)`"
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Menentukan jenis opini: dua pertanyaan",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Dua pertanyaan: masalahnya apa (salah saji atau bukti kurang), dan seberapa luas (material saja atau juga pervasif)."
        },
        {
          "kind": "p",
          "text": "Opini dimodifikasi dalam dua kondisi: `(ISA705 para. 6; ARENS p.633)`"
        },
        {
          "kind": "ul",
          "items": [
            "**Salah saji material:** laporan keuangan tidak bebas dari salah saji material (buku menyebutnya *GAAP departure*).",
            "**Tidak dapat memperoleh bukti yang cukup dan tepat:** keterbatasan ruang lingkup (*scope limitation*)."
          ]
        },
        {
          "kind": "p",
          "text": "Lalu tanyakan **seberapa luas dampaknya**:"
        },
        {
          "kind": "table",
          "headers": [
            "Masalahnya",
            "Material, **tidak** pervasif",
            "Material **dan** pervasif"
          ],
          "rows": [
            [
              "Salah saji material",
              "**Opini wajar dengan pengecualian**",
              "**Opini tidak wajar**"
            ],
            [
              "Tidak dapat memperoleh bukti",
              "**Opini wajar dengan pengecualian**",
              "**Opini tidak menyatakan pendapat**"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.633, Table 18-1; ISA705 paras. 7–9; IAPI: tiga tipe opini modifikasian menurut SA 705 Revisi 2021)`"
        },
        {
          "kind": "p",
          "text": "**Apa itu pervasif?** Dampaknya memenuhi salah satu dari tiga hal ini:"
        },
        {
          "kind": "ol",
          "items": [
            "tidak terbatas pada akun atau pos tertentu;",
            "kalaupun terbatas, mewakili bagian substansial dari laporan keuangan;",
            "untuk pengungkapan, hal itu fundamental bagi pemahaman pengguna."
          ]
        },
        {
          "kind": "p",
          "text": "`(ISA705 para. 5(a))`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Opini tidak wajar dan opini tidak menyatakan pendapat sama-sama untuk kondisi yang pervasif, tapi penyebabnya berbeda. Opini **tidak wajar**: auditor **tahu** laporannya salah saji. Opini **tidak menyatakan pendapat**: auditor **tidak punya cukup bukti** untuk tahu. `(ARENS p.641)`"
        },
        {
          "kind": "p",
          "text": "**Alur keputusan (Figure 18-8):** `(ARENS p.634)`"
        },
        {
          "kind": "ol",
          "items": [
            "Periksa kelangsungan usaha lebih dulu (section 4).",
            "Keterbatasan ruang lingkup? Jika bisa diatasi dengan **prosedur alternatif**, keterbatasannya dianggap tidak ada, dan opini tanpa modifikasian tetap mungkin.",
            "Salah saji? Tidak material → tanpa modifikasian; material → wajar dengan pengecualian; material dan pervasif → tidak wajar."
          ]
        },
        {
          "kind": "h3",
          "text": "Opini wajar dengan pengecualian"
        },
        {
          "kind": "p",
          "text": "Menggunakan frasa **\"kecuali untuk\"** (*except for*). Maksudnya: laporan keuangan secara keseluruhan wajar kecuali bagian tertentu, yang dijelaskan di bagian **Basis for Qualified Opinion**. Opini ini relatif jarang untuk perusahaan yang mencari laba, karena regulator pasar modal umumnya tidak menerimanya dari perusahaan publik, dan kreditor umumnya tidak menerimanya dari perusahaan privat. `(ARENS p.636)`"
        },
        {
          "kind": "p",
          "text": "**Contoh buku (Figure 18-9):** persediaan dicatat 2.000.000 pada biaya, padahal seharusnya diturunkan 500.000 ke nilai realisasi neto (menyimpang dari IFRS). Laporan auditor menyebut dampaknya **seandainya persediaan itu diturunkan**: HPP bertambah 500.000, pajak penghasilan berkurang 100.000, dan laba bersih serta ekuitas masing-masing berkurang 400.000. `(ARENS p.637)`"
        },
        {
          "kind": "p",
          "text": "Perhatikan bunyi opininya. Untuk salah saji, auditor menulis \"kecuali untuk **dampak** hal tersebut\" (*except for the effects*), karena dampaknya sudah diketahui. Untuk keterbatasan ruang lingkup, auditor menulis \"kecuali untuk **kemungkinan dampak** hal tersebut\" (*except for the possible effects*), karena auditor tidak tahu pasti dampaknya. `(ARENS pp.637–638, Figure 18-9 dan 18-10)`"
        },
        {
          "kind": "p",
          "text": "**Tiga penyebab salah saji:**"
        },
        {
          "kind": "ul",
          "items": [
            "perlakuan akuntansi yang salah, misalnya aset tetap dibebankan;",
            "estimasi yang tidak wajar, misalnya penyisihan piutang terlalu kecil;",
            "pengungkapan penting yang tidak dibuat, misalnya masalah kelangsungan usaha atau kontinjensi."
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS p.636)`"
        },
        {
          "kind": "p",
          "text": "**Keterbatasan ruang lingkup** bisa berasal dari: `(ARENS pp.637–638)`"
        },
        {
          "kind": "ul",
          "items": [
            "Kondisi di luar kendali klien, misalnya catatan hilang, rusak, atau disita.",
            "Waktu penunjukan auditor, misalnya ditunjuk setelah tanggal neraca sehingga tidak bisa mengamati persediaan awal.",
            "**Pembatasan oleh manajemen**, misalnya melarang observasi persediaan atau konfirmasi piutang. Ini bisa menjadi tanda peringatan fraud."
          ]
        },
        {
          "kind": "p",
          "text": "**Kalau manajemen yang membatasi (ISA 705 para. 11–13):**"
        },
        {
          "kind": "ol",
          "items": [
            "Minta manajemen mencabut pembatasan.",
            "Jika ditolak, sampaikan ke TCWG dan cari prosedur alternatif.",
            "Jika bukti tetap tidak cukup:\n- material tetapi tidak pervasif → **wajar dengan pengecualian**;\n- material dan pervasif → **mundur** bila memungkinkan; jika tidak mungkin, **tidak menyatakan pendapat**."
          ]
        },
        {
          "kind": "h3",
          "text": "Opini tidak wajar"
        },
        {
          "kind": "p",
          "text": "Laporan keuangan secara keseluruhan salah saji material **dan** pervasif. Contohnya: basis kelangsungan usaha tidak tepat, atau anak perusahaan yang baru diakuisisi tidak dikonsolidasi sehingga banyak unsur laporan terdampak. `(ARENS pp.640–641)`"
        },
        {
          "kind": "p",
          "text": "Contoh nyata dari buku: Auditor General Saskatchewan beberapa tahun memberi opini wajar dengan pengecualian. Lalu ia beralih ke opini tidak wajar, karena warga biasa dinilai tidak akan mampu menyesuaikan sendiri angka-angka di laporan untuk mendapatkan gambaran yang benar. Contoh ini menunjukkan bahwa penilaian pervasif berfokus pada pengguna laporan. `(ARENS p.640)`"
        },
        {
          "kind": "h3",
          "text": "Opini tidak menyatakan pendapat"
        },
        {
          "kind": "p",
          "text": "Keterbatasan bukti begitu berat sehingga opini tidak mungkin dirumuskan. Paragraf pembukanya berubah menjadi \"kami **ditugaskan** untuk mengaudit\" (bukan \"kami telah mengaudit\"), dan bagian tanggung jawab auditornya dipersingkat. Opini ini jarang, karena biasanya auditor mengundurkan diri lebih dulu. `(ARENS pp.640–642)` Contoh buku: investasi joint venture senilai lebih dari 90 persen aset neto, sementara auditor tidak diberi akses ke manajemen maupun auditor joint venture itu. `(ARENS p.642)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Kelangsungan usaha dalam laporan auditor",
      "layer": "main",
      "source": "*Sumber: ARENS pp.628, 635, Table 18-2*",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Ketidakpastian kelangsungan usaha yang diungkapkan dengan memadai tidak mengubah opini."
        },
        {
          "kind": "table",
          "headers": [
            "Situasi",
            "Opini dan pelaporan"
          ],
          "rows": [
            [
              "Basis kelangsungan usaha **tidak tepat**",
              "**Opini tidak wajar**"
            ],
            [
              "Ada ketidakpastian material, **pengungkapan memadai**",
              "**Opini tanpa modifikasian** + bagian \"Material Uncertainty Related to Going Concern\" yang merujuk catatan terkait"
            ],
            [
              "Ada ketidakpastian material, **pengungkapan tidak memadai**",
              "**Wajar dengan pengecualian** atau **tidak wajar**"
            ],
            [
              "Ada keraguan, tetapi auditor menyimpulkan **tidak ada** ketidakpastian material (*close call*)",
              "Opini tanpa modifikasian; untuk entitas yang wajib melaporkan KAM, hal ini dilaporkan sebagai **KAM**"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Adanya ketidakpastian material terkait kelangsungan usaha **tidak otomatis** membuat opini dimodifikasi. Kalau pengungkapannya memadai, opininya tetap tanpa modifikasian."
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Hal Audit Utama (KAM)",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** KAM adalah hal paling signifikan dalam audit. KAM bukan opini terpisah dan tidak menggantikan modifikasi opini."
        },
        {
          "kind": "p",
          "text": "**Definisi:** hal-hal yang menurut pertimbangan profesional auditor **paling signifikan** dalam audit periode berjalan. KAM dipilih dari hal-hal yang dikomunikasikan kepada TCWG. `(ISA701 para. 8)`"
        },
        {
          "kind": "p",
          "text": "**Penyaringan tiga tahap:** `(ISA701 paras. 9–10; ARENS p.629, Figure 18-4)`"
        },
        {
          "kind": "ol",
          "items": [
            "Hal-hal yang dikomunikasikan kepada TCWG.",
            "Dari situ, yang **memerlukan perhatian signifikan auditor**, yaitu:\n- area berisiko tinggi atau risiko signifikan,\n- area dengan pertimbangan manajemen yang besar, termasuk estimasi yang sangat tidak pasti,\n- dampak peristiwa atau transaksi penting selama periode.",
            "Dari situ, yang **paling signifikan** = KAM."
          ]
        },
        {
          "kind": "p",
          "text": "**Setiap deskripsi KAM memuat:** mengapa hal itu paling signifikan, bagaimana ditangani dalam audit, dan rujukan ke pengungkapan terkait (bila ada). `(ISA701 para. 13)`"
        },
        {
          "kind": "p",
          "text": "**KAM bukan pengganti** untuk: pengungkapan yang wajib dibuat manajemen, opini modifikasian, atau pelaporan ketidakpastian material kelangsungan usaha. KAM juga bukan opini terpisah atas hal tersebut. `(ISA701 para. 4)`"
        },
        {
          "kind": "p",
          "text": "**Contoh buku:** audit tahun pertama atas ASMI oleh KPMG (2015). Alasannya: audit pertama membutuhkan pertimbangan tambahan. Penanganannya: rapat dengan manajemen, komite audit, dan auditor pendahulu, serta menelaah kertas kerja auditor pendahulu untuk saldo awal. `(ARENS p.630)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Paragraf Penekanan Suatu Hal dan Paragraf Hal Lain",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Penekanan suatu hal: soal di dalam laporan. Hal lain: soal di luar laporan. Keduanya tidak mengubah opini."
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Paragraf Penekanan Suatu Hal",
            "Paragraf Hal Lain"
          ],
          "rows": [
            [
              "Merujuk ke",
              "Hal yang **sudah disajikan atau diungkapkan dengan tepat** dalam laporan keuangan",
              "Hal **di luar** yang disajikan atau diungkapkan dalam laporan keuangan"
            ],
            [
              "Tujuan",
              "Menarik perhatian karena hal itu fundamental bagi pemahaman laporan keuangan",
              "Relevan bagi pemahaman atas audit, tanggung jawab auditor, atau laporan auditor"
            ],
            [
              "Mengubah opini?",
              "Tidak",
              "Tidak"
            ],
            [
              "Contoh buku",
              "Kebakaran fasilitas produksi; litigasi luar biasa; penerapan dini standar baru yang pervasif; operasi dihentikan; transaksi pihak berelasi signifikan; peristiwa kemudian yang sangat penting",
              "Laporan tahun lalu diaudit auditor lain; laporan untuk tujuan khusus dengan distribusi terbatas; ada lebih dari satu set laporan keuangan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ISA706 para. 7; ARENS pp.630–633)`"
        },
        {
          "kind": "p",
          "text": "Paragraf penekanan dan paragraf hal lain **bukan pengganti KAM**. Sebuah hal bisa bukan KAM (karena tidak butuh perhatian signifikan auditor) tetapi tetap fundamental bagi pengguna, dan hal seperti itu masuk ke paragraf penekanan atau hal lain. `(ARENS p.633)`"
        },
        {
          "kind": "p",
          "text": "**Ringkasan cepat:**"
        },
        {
          "kind": "table",
          "headers": [
            "Pertanyaan",
            "Jawabannya"
          ],
          "rows": [
            [
              "Laporan keuangan salah saji material atau bukti kurang?",
              "**Modifikasi opini** (SA 705)"
            ],
            [
              "Ada ketidakpastian material kelangsungan usaha yang diungkapkan memadai?",
              "Paragraf **Material Uncertainty Related to Going Concern**"
            ],
            [
              "Hal apa yang paling menyita perhatian auditor?",
              "**KAM** (SA 701)"
            ],
            [
              "Hal sudah diungkapkan dengan benar tapi sangat penting?",
              "**Penekanan Suatu Hal** (SA 706)"
            ],
            [
              "Hal di luar laporan keuangan yang perlu diketahui pengguna?",
              "**Hal Lain** (SA 706)"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Panduan role play Week 6: menyampaikan opini wajar dengan pengecualian",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Opini tidak bisa ditawar. Jalan keluar yang sah adalah koreksi oleh manajemen."
        },
        {
          "kind": "p",
          "text": "**Skenario RPS:** auditor harus memberi tahu CFO yang tidak senang bahwa opininya akan wajar dengan pengecualian, lalu tetap memegang posisi profesionalnya meskipun ditekan."
        },
        {
          "kind": "p",
          "text": "**Prinsip:**"
        },
        {
          "kind": "table",
          "headers": [
            "Prinsip",
            "Dasar"
          ],
          "rows": [
            [
              "Opini ditentukan oleh bukti dan standar, bukan hasil negosiasi",
              "ISA705 paras. 6–9; TM04 (pertimbangan profesional)"
            ],
            [
              "Cara menghindari modifikasi adalah **mengoreksi** salah saji atau menambah pengungkapan, dan ini tanggung jawab manajemen",
              "ARENS pp.621–622; TM04"
            ],
            [
              "Jelaskan sifat dan **jumlah** salah saji serta dampaknya",
              "ARENS p.636"
            ],
            [
              "Ancaman ganti auditor adalah **ancaman intimidasi**",
              "TM03 (KEPAP 120.6-A3(e); ARENS Table 3-2)"
            ],
            [
              "Informasikan TCWG (komite audit) sesegera mungkin",
              "ARENS pp.635–636"
            ],
            [
              "Dokumentasikan dan konsultasikan dengan engagement partner",
              "TM02 (ISA 220); TM04"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Alur percakapan (Interpretasi, disusun dari prinsip di atas):**"
        },
        {
          "kind": "ol",
          "items": [
            "**Buka dengan fakta.** \"Kami menemukan persediaan belum diturunkan ke nilai realisasi neto. Jumlah penyesuaiannya sekitar 500.000, dan menurut kami ini material.\"",
            "**Jelaskan konsekuensinya.** \"Kalau tidak dikoreksi, kami akan memberi opini wajar dengan pengecualian, dan dampaknya akan kami jelaskan di laporan auditor.\"",
            "**Tawarkan jalan keluar yang sah.** \"Kalau penyesuaiannya dicatat, hal ini tidak lagi menjadi dasar modifikasi opini.\"",
            "**Tahan posisi saat ditekan.** Kalau CFO bilang \"Tahun lalu tidak masalah\" atau \"Kami bisa pindah KAP\", dengarkan dulu. Lalu jelaskan bahwa opini mengikuti bukti tahun ini dan standar audit, dan tidak ditentukan oleh hubungan kerja. Jangan menawar angka materialitas atau menukar opini dengan hal lain.",
            "**Tutup dan tindak lanjuti.** Sampaikan bahwa hal ini juga akan dikomunikasikan kepada komite audit, lalu catat pembicaraan di kertas kerja."
          ]
        },
        {
          "kind": "p",
          "text": "**Yang jangan dilakukan:** menjanjikan opini bersih sebelum ada koreksi; menyarankan agar salah sajinya dipindahkan ke tahun depan; meremehkan masalah supaya suasana tenang; membahasnya tanpa sepengetahuan engagement partner."
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
          "title": "Kasus 1: Tentukan jenis opini",
          "prompt": "(anggap semua hal lain wajar):\n1. Klien tidak menyusutkan aset tetapnya. Dampaknya material pada beban dan aset tetap, tetapi terbatas pada akun itu.\n2. Auditor ditunjuk setelah tanggal neraca dan tidak dapat mengamati persediaan awal. Prosedur alternatif berhasil.\n3. Manajemen melarang konfirmasi piutang, dan tidak ada prosedur alternatif. Piutang material tetapi tidak pervasif.\n4. Anak perusahaan besar tidak dikonsolidasi, sehingga banyak pos laporan keuangan terdampak.\n5. Investasi yang mewakili lebih dari 90 persen aset neto tidak dapat diperiksa sama sekali.\n6. Ada ketidakpastian material kelangsungan usaha, dan manajemen mengungkapkannya secara lengkap.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Wajar dengan pengecualian. (2) Tanpa modifikasian, karena keterbatasan teratasi. (3) Wajar dengan pengecualian; sebelumnya auditor meminta pembatasan dicabut dan menyampaikan ke TCWG. (4) Tidak wajar. (5) Tidak menyatakan pendapat (atau mundur bila memungkinkan). (6) Tanpa modifikasian dengan paragraf Material Uncertainty Related to Going Concern. `(ARENS pp.633–642; ISA705)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Paragraf apa?",
          "prompt": "\n1. Gudang utama klien terbakar setelah tanggal neraca, dan klien sudah mengungkapkannya dengan baik di catatan.\n2. Laporan keuangan tahun lalu diaudit oleh KAP lain.\n3. Penilaian goodwill memerlukan estimasi yang sangat kompleks dan menjadi fokus utama tim audit.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Penekanan Suatu Hal. (2) Hal Lain (menyebut auditor pendahulu, jenis opininya, dan tanggal laporannya). (3) KAM (area dengan pertimbangan manajemen yang signifikan dan ketidakpastian estimasi tinggi). `(ARENS pp.630–632; ISA701 para. 9)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3 (Interpretasi): material atau pervasif?",
          "prompt": "Klien tidak mencatat liabilitas imbalan kerja. Jumlahnya 8 persen dari total liabilitas, dan klien tidak membuat pengungkapan apa pun tentang program imbalan kerjanya.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Salah sajinya terbatas pada satu akun liabilitas dan beban terkait, sehingga cenderung material tetapi tidak pervasif, yang mengarah ke opini wajar dengan pengecualian. Tetapi jika auditor menilai ketiadaan pengungkapan itu fundamental bagi pemahaman pengguna, dampaknya bisa dianggap pervasif (definisi ISA 705 para. 5(a)(iii)). Keputusan akhirnya pertimbangan profesional. Jawaban yang baik menyebut kriteria pervasif dan menimbangnya. `(ISA705 para. 5(a); ARENS p.634)`"
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
          "question": "**1. Kenapa auditor menulis \"menurut opini kami\" dan tidak menulis \"kami menjamin\"?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* karena kesimpulan auditor didasarkan pada pertimbangan profesional dan bukti yang bersifat meyakinkan, tidak pasti. Auditor memberi keyakinan memadai, bukan jaminan, sehingga risiko informasi tetap ada. `(ARENS p.625; ISA200 para. 5)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"supaya auditor tidak bisa dituntut\"."
        },
        {
          "kind": "self-check",
          "question": "**2. Jelaskan dengan bahasamu sendiri kapan salah saji disebut \"pervasif\", lalu beri satu contoh buatanmu.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* pervasif berarti salah satu dari tiga hal ini:"
            },
            {
              "kind": "ul",
              "items": [
                "dampaknya menyebar ke banyak bagian laporan;",
                "dampaknya hanya di satu pos, tetapi pos itu bagian besar dari laporan;",
                "pengungkapan yang salah itu mendasar untuk memahami laporan."
              ]
            },
            {
              "kind": "p",
              "text": "Contoh: perusahaan induk tidak mengonsolidasi anak perusahaan terbesarnya, sehingga hampir semua angka konsolidasi berubah. `(ISA705 para. 5(a); ARENS p.641)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap \"pervasif\" berarti \"jumlahnya besar sekali\" saja."
        },
        {
          "kind": "self-check",
          "question": "**3. Kenapa opini tidak wajar dan opini tidak menyatakan pendapat tidak boleh dianggap sama, padahal keduanya sama-sama untuk kondisi pervasif?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* opini tidak wajar diberikan karena auditor sudah punya bukti cukup dan **tahu** laporannya salah saji pervasif. Opini tidak menyatakan pendapat diberikan karena auditor **tidak punya** bukti yang cukup untuk menyimpulkan apa pun. Yang satu soal isi laporan, yang lain soal ketiadaan bukti. `(ARENS p.641; ISA705 paras. 8–9)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut keduanya sama-sama \"opini terburuk\"."
        },
        {
          "kind": "self-check",
          "question": "**4. Manajemen menolak dikoreksi dan berkata, \"Kalau opini kami tidak bersih, kami ganti KAP.\" Jelaskan apa yang harus dilakukan auditor dan kaitkan dengan TM03 dan TM04.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* opini ditentukan oleh bukti dan standar, tidak oleh negosiasi. Koreksi adalah tanggung jawab manajemen (TM04), dan ancaman ganti KAP adalah ancaman intimidasi (TM03). Auditor menjelaskan salah saji dan dampaknya, menawarkan koreksi sebagai jalan keluar yang sah, mengomunikasikannya kepada TCWG, dan memberi opini modifikasian jika tidak dikoreksi. `(ISA705 paras. 6–8; ARENS pp.635–636; KEPAP 120.6-A3)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyarankan kompromi soal opini."
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
          "text": "**Kerangka jawaban \"Tentukan jenis opini\"**"
        },
        {
          "kind": "ol",
          "items": [
            "Identifikasi kondisinya: salah saji material atau tidak cukup bukti?",
            "Kalau keterbatasan bukti: apakah prosedur alternatif berhasil?",
            "Nilai dampaknya: tidak material, material, atau material dan pervasif (sebut kriteria pervasif).",
            "Tentukan opini dari matriks.",
            "Sebut bagian laporan yang berubah (subjudul opini dan basis) dan komunikasi dengan TCWG."
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
              "Tidak wajar vs tidak menyatakan pendapat",
              "Tahu salah saji pervasif vs tidak punya cukup bukti, dengan dampak pervasif"
            ],
            [
              "Wajar dengan pengecualian (salah saji) vs (ruang lingkup)",
              "\"except for the effects\" vs \"except for the possible effects\""
            ],
            [
              "KAM vs penekanan suatu hal",
              "Paling menyita perhatian auditor vs sudah diungkapkan dengan benar tapi fundamental bagi pengguna"
            ],
            [
              "Penekanan suatu hal vs hal lain",
              "Di dalam laporan keuangan vs di luar laporan keuangan"
            ],
            [
              "Ketidakpastian material vs close call",
              "Ada ketidakpastian material (paragraf khusus) vs ada keraguan tapi tidak ada ketidakpastian material (dilaporkan sebagai KAM bila entitas wajib melaporkan KAM)"
            ],
            [
              "Corresponding vs comparative",
              "Tahun berjalan saja vs kedua periode"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
