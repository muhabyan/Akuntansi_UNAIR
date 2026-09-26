// AKA201 TM02/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM2_READING: Reading = {
  "tm": 2,
  "title": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
  "intro": "**Sumber utama:** Arens dkk., Ch.2, pp.25–43. **Standar:** ISQM 1 / SMM 1 (manajemen mutu KAP), ISA 220 (Revised) (mutu tingkat perikatan). **Regulasi Indonesia:** UU 5/2011 tentang Akuntan Publik, PP 20/2015 tentang Praktik Akuntan Publik.",
  "objectives": [
    "Menjelaskan struktur KAP dan jenjang auditor.",
    "Menyebut lembaga yang mengatur profesi.",
    "Menjelaskan kerangka standar audit dan pendorong kualitasnya.",
    "Menjelaskan delapan komponen manajemen mutu.",
    "Menjelaskan aturan pokok profesi di Indonesia."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: kenapa profesi ini diatur ketat",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** opini auditor hanya berguna kalau pengguna **percaya** pada auditornya. Buku menyebut pengguna menghargai auditor karena integritas, independensi, keahlian, dan pengetahuannya. `(ARENS p.9)` Karena kepercayaan itu yang dijual, ada tiga lapis pengaman yang dibahas di TM ini:"
        },
        {
          "kind": "table",
          "headers": [
            "Lapis",
            "Pertanyaan yang dijawab",
            "Contoh di Indonesia"
          ],
          "rows": [
            [
              "**Siapa yang boleh**",
              "Siapa yang berwenang memberi jasa asurans?",
              "Hanya Akuntan Publik yang berizin dari Menteri Keuangan (UUAP Pasal 3, 5)"
            ],
            [
              "**Dengan standar apa**",
              "Bagaimana audit harus dilakukan?",
              "SPAP yang ditetapkan Asosiasi Profesi; Standar Audit yang mengadopsi ISA (UUAP Pasal 44; RPS)"
            ],
            [
              "**Bagaimana mutunya dijaga**",
              "Bagaimana KAP memastikan setiap audit sesuai standar?",
              "Sistem manajemen mutu KAP (SMM 1) dan pengelolaan mutu tiap perikatan (SA 220)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Singkatan di TM ini:** UUAP = UU 5/2011 tentang Akuntan Publik; PPAP = PP 20/2015 tentang Praktik Akuntan Publik; SPAP = Standar Profesional Akuntan Publik (standar yang wajib dipatuhi Akuntan Publik); IAPI = Institut Akuntan Publik Indonesia, yang menerbitkan Standar Audit, SMM 1, dan KEPAP yang dipakai di mata kuliah ini."
        },
        {
          "kind": "p",
          "text": "Semua lapis ini ada karena **kualitas audit sulit dilihat langsung oleh pengguna**. Buku mencatat bahwa sampai sekarang belum ada definisi atau ukuran kualitas audit yang disepakati. `(ARENS p.25)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Perhatikan.** Buku memakai versi lama (6 elemen *quality control*). Yang berlaku sekarang 8 komponen *quality management* (SMM 1, efektif 31 Desember 2025). Untuk ujian, jawab dengan versi yang berlaku."
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
              "\"IAPI yang memberi izin Akuntan Publik.\"",
              "Izin diberikan **Menteri Keuangan**. Asosiasi Profesi menyusun SPAP, menyelenggarakan ujian dan pendidikan berkelanjutan, serta melakukan reviu mutu anggotanya.",
              "UUAP Pasal 5, 44"
            ],
            [
              "\"Yang wajib dirotasi adalah KAP.\"",
              "PP 20/2015 membatasi **Akuntan Publik**, bukan KAP, dan hanya untuk jenis entitas tertentu.",
              "PPAP Pasal 11"
            ],
            [
              "\"Quality control dan quality management sama saja.\"",
              "Buku mengajarkan versi lama dengan enam elemen. Standar yang berlaku (ISQM 1 / SMM 1) punya delapan komponen dengan pendekatan berbasis risiko.",
              "ARENS p.41; ISQM1 para. 6"
            ],
            [
              "\"Mutu audit itu urusan partner saja.\"",
              "Engagement partner memegang tanggung jawab menyeluruh, tetapi ISA 220 mewajibkan partner menegaskan bahwa **semua anggota tim** ikut bertanggung jawab atas mutu.",
              "ISA220 paras. 13–14"
            ],
            [
              "\"Standar Audit Indonesia berbeda total dengan ISA.\"",
              "Standar Audit (SA) di Indonesia mengadopsi ISA, dan nomornya sama (SA 200, 220, 315, 320, 700, dan seterusnya).",
              "RPS; ARENS p.33"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Kasus pembuka: kualitas audit itu apa?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Kualitas audit belum punya ukuran yang disepakati, dan komposisi tim menjadi kuncinya."
        },
        {
          "kind": "p",
          "text": "Sampai sekarang belum ada definisi kualitas audit yang disepakati. Standar profesi menggambarkannya sebagai hasil dari banyak faktor: kepemimpinan KAP (*tone at the top*), independensi, integritas, objektivitas, pengelolaan personel, penerimaan klien, pelaksanaan perikatan, dan pemantauan. Ketika regulator audit Kanada (CPAB) menguji coba *audit quality indicators* di 24 perusahaan publik, kesimpulannya: **komposisi tim audit** adalah kunci kualitas. `(ARENS p.25)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Kantor akuntan publik dan jenjang auditor",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** KAP bekerja berjenjang, dan setiap jenjang mereviu pekerjaan di bawahnya."
        },
        {
          "kind": "p",
          "text": "Buku membagi KAP di Kanada menjadi empat kategori: Big Four, national network firms, large regional and local firms, dan small local firms. KAP kecil umumnya lebih banyak melakukan review, compilation, dan jasa pajak daripada audit. `(ARENS pp.26–27)`"
        },
        {
          "kind": "table",
          "headers": [
            "Jenjang",
            "Pengalaman",
            "Tanggung jawab"
          ],
          "rows": [
            [
              "Staff accountant",
              "0–2 tahun",
              "Mengerjakan sebagian besar pekerjaan audit rinci"
            ],
            [
              "Senior / in-charge",
              "2–5 tahun",
              "Mengoordinasi pekerjaan lapangan; mengawasi dan mereviu staf"
            ],
            [
              "Manager",
              "5–7 tahun",
              "Mengelola audit, mereviu in-charge, mengelola hubungan klien"
            ],
            [
              "Senior manager",
              "7–10 tahun",
              "Memimpin perikatan, mereviu tim, membantu partner"
            ],
            [
              "Partner",
              "10+ tahun",
              "Tanggung jawab akhir atas audit dan hubungan klien"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.27, Table 2-2)`"
        },
        {
          "kind": "p",
          "text": "Struktur berjenjang ini ikut menjaga kualitas. Setiap jenjang mereviu pekerjaan jenjang di bawahnya, dan pekerjaan partner pun tetap direviu. `(ARENS pp.27–28)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Lembaga yang memengaruhi profesi",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Di Indonesia: Menteri Keuangan memberi izin dan mengawasi, Asosiasi Profesi menyusun standar dan mereviu mutu, Komite Profesi memberi pertimbangan dan menangani banding. Rotasi berlaku untuk Akuntan Publik di entitas tertentu."
        },
        {
          "kind": "pendalaman",
          "title": "Menurut buku (Kanada, AS, internasional)",
          "blocks": [
            {
              "kind": "table",
              "headers": [
                "Lembaga",
                "Peran utama"
              ],
              "rows": [
                [
                  "IAASB",
                  "Menyusun International Standards on Auditing (ISA); lebih dari 113 yurisdiksi memakai atau sedang mengadopsi ISA"
                ],
                [
                  "AASB (Kanada)",
                  "Menetapkan standar audit Kanada dengan mengadopsi ISA sebagai CAS, dengan kemungkinan penyesuaian lokal"
                ],
                [
                  "CPA Canada dan organisasi CPA provinsi",
                  "Organisasi profesi; lisensi, pendidikan berkelanjutan, reviu praktik, disiplin"
                ],
                [
                  "CPAB (Kanada)",
                  "Mengawasi dan menginspeksi auditor emiten"
                ],
                [
                  "PCAOB (AS)",
                  "Mengawasi auditor emiten dan **juga** menetapkan standar audit untuk perusahaan publik"
                ],
                [
                  "Komisi sekuritas dan SEC",
                  "Mengatur pasar modal; dapat menindak auditor"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(ARENS pp.29–32)`"
            },
            {
              "kind": "p",
              "text": "Perbedaan yang sering ditanyakan: di AS, PCAOB mengawasi **dan** menyusun standar untuk audit perusahaan publik, sementara di Kanada pengawas (CPAB) terpisah dari penyusun standar (AASB). `(ARENS p.31)`"
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Di Indonesia (menurut UU 5/2011 dan PP 20/2015)"
        },
        {
          "kind": "table",
          "headers": [
            "Pihak",
            "Peran menurut regulasi"
          ],
          "rows": [
            [
              "**Menteri Keuangan**",
              "Memberi izin Akuntan Publik (berlaku 5 tahun, dapat diperpanjang) dan izin usaha KAP; membina dan mengawasi, termasuk memeriksa Akuntan Publik dan KAP; mengenakan sanksi administratif"
            ],
            [
              "**Asosiasi Profesi Akuntan Publik** (hanya satu, ditetapkan Menteri)",
              "Menyusun dan menetapkan SPAP; menyelenggarakan ujian profesi; menyelenggarakan pendidikan profesional berkelanjutan; melakukan reviu mutu anggotanya"
            ],
            [
              "**Komite Profesi Akuntan Publik** (13 anggota)",
              "Memberi pertimbangan atas kebijakan pembinaan dan pengawasan serta penyusunan SPAP; lembaga banding atas hasil pemeriksaan dan sanksi Menteri, dengan keputusan final dan mengikat"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(UUAP Pasal 5, 43–46, 49–51)`"
        },
        {
          "kind": "p",
          "text": "Standar Audit (SA), Standar Manajemen Mutu (SMM 1), dan Kode Etik Profesi Akuntan Publik yang dipakai di mata kuliah ini diterbitkan oleh **IAPI**."
        },
        {
          "kind": "p",
          "text": "**Hal pokok lain dari UU 5/2011:**"
        },
        {
          "kind": "ul",
          "items": [
            "**Jasa asurans** (audit, reviu, dan asurans lainnya) **hanya boleh diberikan oleh Akuntan Publik.** `(Pasal 3)`",
            "Akuntan Publik wajib memberikan jasa **melalui KAP**, mematuhi SPAP dan kode etik, serta membuat kertas kerja. `(Pasal 25 ayat 2)`",
            "Akuntan Publik dan KAP wajib menjaga **independensi** dan bebas dari benturan kepentingan. `(Pasal 28)`",
            "Bentuk usaha KAP: perseorangan, persekutuan perdata, firma, atau bentuk lain yang sesuai. KAP berbentuk persekutuan harus paling sedikit 2/3 Rekannya Akuntan Publik. `(Pasal 12–13)`",
            "KAP **wajib memiliki dan menjalankan sistem pengendalian mutu**, dan rancangannya menjadi syarat izin usaha. `(Pasal 18, 27)`"
          ]
        },
        {
          "kind": "h3",
          "text": "Pembatasan jasa audit (rotasi Akuntan Publik)"
        },
        {
          "kind": "table",
          "headers": [
            "Aturan",
            "Isi"
          ],
          "rows": [
            [
              "Batas",
              "Seorang Akuntan Publik paling lama **5 tahun buku berturut-turut** mengaudit entitas yang sama"
            ],
            [
              "Entitas yang dibatasi",
              "Industri sektor pasar modal, bank umum, dana pensiun, asuransi/reasuransi (termasuk syariah), BUMN"
            ],
            [
              "Berlaku juga untuk",
              "Akuntan Publik yang merupakan Pihak Terasosiasi, misalnya partner in charge yang tidak menandatangani laporan"
            ],
            [
              "Boleh kembali",
              "Setelah **2 tahun buku berturut-turut** tidak memberi jasa audit ke entitas itu"
            ],
            [
              "Sanksi jika dilanggar",
              "Peringatan tertulis atau pembekuan izin"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(PPAP Pasal 11, Pasal 18 ayat 3)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** PP 20/2015 membatasi **Akuntan Publik**, bukan KAP. Dan pembatasan ini hanya untuk lima jenis entitas di atas, tidak untuk semua klien."
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Kerangka standar audit",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Standar audit dikelompokkan per nomor dan berdiri di atas empat prinsip: tujuan, tanggung jawab pribadi, pelaksanaan, dan pelaporan."
        },
        {
          "kind": "p",
          "text": "Standar audit Kanada (CAS) disusun berdasarkan ISA. Penomorannya mengikuti kelompok topik berikut. `(ARENS p.33, Table 2-4)`"
        },
        {
          "kind": "table",
          "headers": [
            "Nomor",
            "Topik"
          ],
          "rows": [
            [
              "200–299",
              "Prinsip umum dan tanggung jawab"
            ],
            [
              "300–499",
              "Penilaian risiko dan respons"
            ],
            [
              "500–599",
              "Bukti audit"
            ],
            [
              "600–699",
              "Menggunakan pekerjaan pihak lain"
            ],
            [
              "700–799",
              "Kesimpulan audit dan pelaporan"
            ],
            [
              "800–899",
              "Area khusus"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Di mata kuliah ini, standar yang dirujuk memakai nomor yang sama, misalnya SA/ISA 200, 220, 315, 320, 700."
        },
        {
          "kind": "h3",
          "text": "Empat prinsip yang mendasari audit (Figure 2-1)"
        },
        {
          "kind": "table",
          "headers": [
            "Prinsip",
            "Isi"
          ],
          "rows": [
            [
              "**Purpose**",
              "Memberi opini atas laporan keuangan"
            ],
            [
              "**Personal responsibilities**",
              "Kompeten; patuh etika dan independensi; skeptis dan menggunakan pertimbangan profesional"
            ],
            [
              "**Performance responsibilities**",
              "Merencanakan dan mengawasi tim; menentukan materialitas; mengidentifikasi dan menilai risiko salah saji material; memperoleh bukti yang cukup dan tepat"
            ],
            [
              "**Reporting responsibilities**",
              "Menyatakan opini tertulis; menyatakan apakah laporan keuangan sesuai kerangka pelaporan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.33–34)`"
        },
        {
          "kind": "p",
          "text": "Beberapa rincian penting dari buku:"
        },
        {
          "kind": "ul",
          "items": [
            "**Kompetensi.** Kalau tim tidak kompeten untuk suatu pekerjaan, pilihannya tiga: memperoleh keahlian yang diperlukan, menyarankan pihak lain yang kompeten, atau menolak perikatan. `(ARENS p.35)`",
            "**Pendekatan berbasis risiko.** Standar mensyaratkan audit berbasis risiko. Pengendalian internal klien yang sangat baik bisa mengurangi jumlah bukti yang perlu dikumpulkan; yang sangat buruk bisa membuat audit tidak mungkin dilakukan. `(ARENS pp.35–36)`",
            "**Supervisi.** Penting karena staf yang kurang berpengalaman mengerjakan sebagian besar audit. `(ARENS pp.35–36)`",
            "**Laporan.** Kalau auditor tidak menemukan masalah yang berarti, ia menerbitkan opini tanpa modifikasian (\"clean\"). Kalau ada keterbatasan ruang lingkup atau penyimpangan dari kerangka pelaporan, opini dimodifikasi. Detailnya di TM06. `(ARENS pp.36–38)`"
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Apa yang mendorong kualitas audit?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Penentu utama kualitas audit adalah budaya KAP: seimbang antara urusan bisnis dan kepentingan publik."
        },
        {
          "kind": "p",
          "text": "Menurut buku, **budaya KAP** adalah pendorong utama, yaitu keseimbangan antara komersialisme (mengelola bisnis KAP) dan profesionalisme (mengutamakan kepentingan publik). `(ARENS p.39)`"
        },
        {
          "kind": "table",
          "headers": [
            "Pendorong",
            "Penjelasan"
          ],
          "rows": [
            [
              "The right teams",
              "Kompetensi teknis, pengalaman industri, waktu yang cukup"
            ],
            [
              "The right support",
              "Budaya konsultasi yang terbuka; reviu oleh ahli di luar tim"
            ],
            [
              "In-process reviews",
              "Reviu selama audit berjalan, supaya pendekatan bisa diperbaiki sebelum selesai"
            ],
            [
              "Accountability and monitoring",
              "Tanggung jawab mutu ditetapkan pada orang tertentu; *tone at the top*; mutu masuk evaluasi kinerja; audit quality indicators"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.39–40)`"
        },
        {
          "kind": "p",
          "text": "**Kasus KPMG AS (2019).** Sejumlah personel mendapat bocoran rahasia PCAOB tentang file mana yang akan diinspeksi, lalu mengubah kertas kerja yang sudah selesai. Ada juga yang curang dalam ujian pelatihan internal. KPMG membayar denda 50 juta dolar dan wajib menunjuk konsultan independen untuk menilai pengendalian mutu terkait etika. Kasus ini menunjukkan bahwa sistem mutu yang lemah juga bisa melahirkan pelanggaran etika. `(ARENS p.42)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Dari quality control ke quality management",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Buku memakai versi lama (6 elemen). Yang berlaku sekarang 8 komponen berbasis risiko (ISQM 1 / SMM 1)."
        },
        {
          "kind": "pendalaman",
          "title": "Versi buku: enam elemen pengendalian mutu (standar lama)",
          "blocks": [
            {
              "kind": "p",
              "text": "Pengendalian mutu adalah kebijakan dan prosedur KAP untuk memastikan KAP memenuhi tanggung jawab profesionalnya. Sistem ini hanya memberi keyakinan memadai, bukan jaminan. `(ARENS p.40)`"
            },
            {
              "kind": "table",
              "headers": [
                "Elemen",
                "Contoh prosedur dari buku"
              ],
              "rows": [
                [
                  "Leadership (\"tone at the top\")",
                  "Pelatihan menekankan mutu; mutu masuk evaluasi dan kompensasi"
                ],
                [
                  "Relevant ethical requirements",
                  "Kuesioner independensi tahunan untuk semua partner dan karyawan"
                ],
                [
                  "Acceptance and continuation",
                  "Formulir evaluasi klien baru, termasuk komentar auditor pendahulu"
                ],
                [
                  "Human resources",
                  "Evaluasi setiap profesional di setiap perikatan"
                ],
                [
                  "Engagement performance",
                  "Direktur akuntansi dan auditing tersedia untuk konsultasi dan menyetujui perikatan"
                ],
                [
                  "Monitoring",
                  "Partner pengendalian mutu menguji prosedur minimal setahun sekali"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(ARENS p.41, Table 2-5)`"
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Versi berlaku: delapan komponen manajemen mutu (ISQM 1 / SMM 1)"
        },
        {
          "kind": "table",
          "headers": [
            "#",
            "Komponen (ISQM 1)",
            "Istilah SMM 1"
          ],
          "rows": [
            [
              "1",
              "The firm's risk assessment process",
              "Proses penilaian risiko KAP"
            ],
            [
              "2",
              "Governance and leadership",
              "Tata kelola dan kepemimpinan"
            ],
            [
              "3",
              "Relevant ethical requirements",
              "Ketentuan etika yang relevan"
            ],
            [
              "4",
              "Acceptance and continuance of client relationships and specific engagements",
              "Penerimaan dan keberlanjutan hubungan dengan klien dan perikatan tertentu"
            ],
            [
              "5",
              "Engagement performance",
              "Pelaksanaan perikatan"
            ],
            [
              "6",
              "Resources",
              "Sumber daya"
            ],
            [
              "7",
              "Information and communication",
              "Informasi dan komunikasi"
            ],
            [
              "8",
              "The monitoring and remediation process",
              "Proses pemantauan dan remediasi"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ISQM1 para. 6; SMM1 para. 6)`"
        },
        {
          "kind": "p",
          "text": "**Apa yang baru?** ISQM 1 mewajibkan **pendekatan berbasis risiko** dalam tiga langkah: KAP menetapkan **tujuan mutu**, mengidentifikasi dan menilai **risiko mutu**, lalu merancang **respons** atas risiko itu. Sistemnya dievaluasi **paling sedikit setahun sekali** oleh orang di KAP yang memegang tanggung jawab tertinggi atas sistem manajemen mutu. `(ISQM1 paras. 7–9; SMM1 paras. 7–9)` Desainnya juga **skalabel**: KAP yang mengaudit emiten butuh sistem yang lebih kompleks daripada KAP yang hanya melakukan reviu atau kompilasi. `(ISQM1 para. 10)`"
        },
        {
          "kind": "p",
          "text": "**Tujuan sistem manajemen mutu:** memberi keyakinan memadai kepada KAP bahwa (a) KAP dan personelnya memenuhi standar profesional dan ketentuan hukum, dan (b) laporan yang diterbitkan sesuai dengan kondisinya. `(ISQM1 para. 14; SMM1 para. 14)`"
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Buku (CSQC 1)",
            "Berlaku sekarang (ISQM 1 / SMM 1)"
          ],
          "rows": [
            [
              "Istilah",
              "Quality control",
              "Quality management"
            ],
            [
              "Jumlah",
              "6 elemen",
              "8 komponen"
            ],
            [
              "Pendekatan",
              "Kebijakan dan prosedur per elemen",
              "Berbasis risiko: tujuan mutu, risiko mutu, respons"
            ],
            [
              "Komponen baru",
              "",
              "Proses penilaian risiko KAP; informasi dan komunikasi"
            ],
            [
              "Yang berubah",
              "Human resources; Monitoring",
              "Resources (lebih luas); Monitoring **and remediation**"
            ],
            [
              "Berlaku di Indonesia",
              "",
              "SMM 1 efektif 31 Desember 2025"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "*Label Perbandingan: disusun dari ARENS p.41 dan ISQM1 para. 6.*"
        },
        {
          "kind": "h3",
          "text": "Tingkat KAP vs tingkat perikatan"
        },
        {
          "kind": "table",
          "headers": [
            "Tingkat",
            "Standar",
            "Siapa yang bertanggung jawab"
          ],
          "rows": [
            [
              "KAP secara keseluruhan",
              "ISQM 1 / SMM 1",
              "KAP; individu yang diberi tanggung jawab tertinggi atas sistem"
            ],
            [
              "Satu perikatan audit",
              "ISA 220 (Revised) / SA 220",
              "**Engagement partner**"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Menurut ISA 220 (Revised), engagement partner memegang tanggung jawab menyeluruh atas mutu perikatan. Ia harus cukup terlibat sepanjang audit dan membangun budaya mutu di timnya. Ia juga harus menegaskan tiga hal kepada tim:"
        },
        {
          "kind": "ul",
          "items": [
            "semua anggota ikut bertanggung jawab atas mutu,",
            "siapa pun boleh menyampaikan kekhawatiran tanpa takut dihukum,",
            "semua wajib bersikap skeptis."
          ]
        },
        {
          "kind": "p",
          "text": "Kalau tugas didelegasikan, partner tetap bertanggung jawab lewat arahan, supervisi, dan reviu. `(ISA220 paras. 9, 13–15)`"
        },
        {
          "kind": "p",
          "text": "**Engagement quality review** adalah evaluasi objektif atas pertimbangan signifikan tim perikatan, dilakukan oleh penelaah mutu perikatan dan selesai paling lambat pada tanggal laporan. `(ISQM1 para. 16(d))`"
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
          "title": "Kasus 1: Rotasi Akuntan Publik.",
          "prompt": "Ibu Rina, Akuntan Publik di KAP \"RS & Rekan\", telah menandatangani laporan audit PT Bank Sejahtera (bank umum) untuk tahun buku 2021 sampai 2025. Untuk tahun buku 2026, KAP mengusulkan Ibu Rina tetap menandatangani, tetapi kalau tidak boleh, ia akan menjadi partner in charge dan rekannya yang menandatangani laporan.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* Bank umum termasuk entitas yang dibatasi, dan Ibu Rina sudah 5 tahun buku berturut-turut. Jadi ia tidak boleh mengaudit tahun buku 2026. Menjadi partner in charge juga tidak menyelesaikan masalah, karena pembatasan berlaku juga untuk Akuntan Publik yang menjadi Pihak Terasosiasi. Bagian Penjelasan PP 20/2015 (uraian resmi yang menyertai pasal-pasalnya) menyebut partner in charge sebagai contohnya. Ia baru boleh kembali setelah 2 tahun buku berturut-turut tidak mengaudit bank itu. KAP \"RS & Rekan\" sendiri tidak dibatasi oleh PP ini. `(PPAP Pasal 11 dan Penjelasannya)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Komponen manajemen mutu.",
          "prompt": "Tentukan komponen ISQM 1 / SMM 1 yang paling terkait:\n1. KAP mewajibkan setiap partner mengisi pernyataan independensi setiap tahun.\n2. Sebelum menerima klien baru, KAP menilai integritas manajemen calon klien.\n3. KAP menemukan kelemahan dalam hasil inspeksi, lalu memperbaiki prosedurnya.\n4. KAP memastikan tersedia software audit dan staf yang cukup untuk musim audit.\n5. Pimpinan KAP menegaskan dalam rapat bahwa mutu tidak boleh dikorbankan demi fee.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Ketentuan etika yang relevan. (2) Penerimaan dan keberlanjutan hubungan dengan klien. (3) Proses pemantauan dan remediasi. (4) Sumber daya. (5) Tata kelola dan kepemimpinan. `(ISQM1 para. 6; contoh prosedur ARENS p.41)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3 (Interpretasi): komersialisme vs profesionalisme.",
          "prompt": "Seorang manager diminta partner memangkas jam audit 30 persen supaya fee kompetitif, padahal klien baru saja mengganti sistem akuntansinya.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Buku menyebut budaya KAP, yaitu keseimbangan antara komersialisme dan profesionalisme, sebagai pendorong utama kualitas audit, dan menyebut tim dengan waktu yang cukup sebagai salah satu pendorongnya. Jawaban yang baik menunjukkan risikonya: sistem baru menambah risiko, padahal waktunya dipotong. Jalur yang tepat adalah konsultasi, lalu keputusan yang dicatat oleh engagement partner, karena menurut ISA 220 dialah yang bertanggung jawab penuh atas mutu perikatan. Tidak ada satu angka jam yang \"benar\". `(ARENS pp.39–40; ISA220 para. 13)`"
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
          "question": "**1. Kenapa audit tidak boleh dilakukan oleh sembarang orang, walaupun orang itu sangat paham akuntansi?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* nilai audit terletak pada kepercayaan pengguna atas integritas, independensi, dan keahlian auditor. `(ARENS p.9)` Karena itu undang-undang membatasi jasa asurans hanya untuk Akuntan Publik berizin, yang wajib memberikan jasa melalui KAP, mematuhi SPAP dan kode etik, serta menjaga independensi. `(UUAP Pasal 3, 25, 28)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab hanya \"karena harus punya sertifikat\", tanpa menyebut kepercayaan pengguna."
        },
        {
          "kind": "self-check",
          "question": "**2. Jelaskan dengan bahasamu sendiri beda sistem manajemen mutu KAP dan mutu satu perikatan.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* sistem manajemen mutu (ISQM 1 / SMM 1) adalah \"aturan main\" di seluruh KAP, misalnya cara menerima klien, menjaga etika, dan menyediakan sumber daya. Mutu perikatan (ISA/SA 220) adalah penerapannya pada satu audit tertentu, dan penanggung jawabnya engagement partner. `(ISQM1 para. 6; ISA220 para. 13)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap keduanya dua nama untuk hal yang sama."
        },
        {
          "kind": "self-check",
          "question": "**3. Kenapa ISQM 1 menambahkan \"proses penilaian risiko KAP\" sebagai komponen tersendiri?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* karena ISQM 1 memakai pendekatan berbasis risiko: KAP menetapkan tujuan mutu, menilai risiko apa yang bisa menggagalkan tujuan itu, lalu merancang respons. Tanpa proses menilai risiko, KAP hanya menjalankan prosedur tetap seperti di versi lama. `(ISQM1 paras. 6–8; ARENS p.41)`"
            }
          ],
          "signal": "*Tanda belum paham:* hanya menyebut daftar delapan komponen tanpa bisa menjelaskan logikanya."
        },
        {
          "kind": "self-check",
          "question": "**4. Seorang Akuntan Publik sudah 5 tahun buku berturut-turut mengaudit sebuah BUMN. Apa yang terjadi di tahun keenam, dan kenapa aturan seperti ini ada?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* ia tidak boleh mengaudit BUMN itu di tahun keenam, termasuk sebagai Pihak Terasosiasi, dan baru boleh kembali setelah 2 tahun buku tidak memberikan jasa audit ke sana. `(PPAP Pasal 11)` Alasannya bisa dikaitkan dengan ancaman kedekatan di TM03: hubungan yang terlalu lama bisa membuat auditor terlalu bersimpati pada klien. *(Kaitan ini Interpretasi; PP 20/2015 sendiri tidak menyebut alasannya.)*"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut KAP-nya yang harus diganti."
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
          "text": "**Kerangka esai \"Jelaskan sistem manajemen mutu KAP\"**"
        },
        {
          "kind": "ol",
          "items": [
            "Tujuan sistem: keyakinan memadai bahwa KAP patuh pada standar dan hukum, dan bahwa laporan yang diterbitkan KAP sesuai dengan kondisinya.",
            "Delapan komponen.",
            "Pendekatan berbasis risiko: tujuan mutu, risiko mutu, respons; evaluasi tahunan.",
            "Bedakan dengan pengendalian mutu enam elemen di buku.",
            "Bedakan tingkat KAP (ISQM 1 / SMM 1) dan tingkat perikatan (ISA/SA 220, engagement partner)."
          ]
        },
        {
          "kind": "p",
          "text": "**Angka yang wajib hafal**"
        },
        {
          "kind": "table",
          "headers": [
            "Angka",
            "Arti",
            "Sumber"
          ],
          "rows": [
            [
              "5 tahun",
              "Masa berlaku izin Akuntan Publik",
              "UUAP Pasal 5"
            ],
            [
              "5 tahun buku",
              "Batas audit berturut-turut oleh satu AP untuk entitas tertentu",
              "PPAP Pasal 11"
            ],
            [
              "2 tahun buku",
              "Jeda sebelum AP boleh kembali",
              "PPAP Pasal 11"
            ],
            [
              "2/3",
              "Porsi minimum Rekan yang harus AP di KAP persekutuan",
              "UUAP Pasal 13"
            ],
            [
              "8",
              "Komponen manajemen mutu",
              "ISQM 1 / SMM 1 para. 6"
            ],
            [
              "6",
              "Elemen pengendalian mutu versi buku",
              "ARENS p.41"
            ],
            [
              "31 Des 2025",
              "SMM 1 efektif",
              "SMM 1"
            ]
          ],
          "stackOnMobile": true
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
              "Quality control vs quality management",
              "6 elemen, prosedur vs 8 komponen, berbasis risiko"
            ],
            [
              "ISQM 1 vs ISA 220",
              "Tingkat KAP vs tingkat perikatan"
            ],
            [
              "PCAOB vs CPAB",
              "PCAOB juga menyusun standar; CPAB tidak"
            ],
            [
              "Pembatasan AP vs KAP",
              "PP 20/2015 membatasi AP, bukan KAP"
            ],
            [
              "Asosiasi Profesi vs Menteri",
              "Asosiasi menyusun SPAP dan reviu mutu anggota; Menteri memberi izin, mengawasi, dan memberi sanksi"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
