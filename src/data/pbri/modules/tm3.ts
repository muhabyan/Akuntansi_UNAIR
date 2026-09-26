// AKA201 TM03/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM3_READING: Reading = {
  "tm": 3,
  "title": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
  "intro": "**Sumber utama:** Arens dkk., Ch.3, pp.50–71. **Kode etik:** Kode Etik Profesi Akuntan Publik (KEPAP) 2025, IAPI (mengacu IESBA). **Regulasi:** UU 5/2011 tentang Akuntan Publik.",
  "objectives": [
    "Menjelaskan lima prinsip dasar etika.",
    "Menyelesaikan dilema etis secara terstruktur.",
    "Menganalisis ancaman independensi dan cara mengatasinya.",
    "Menerapkan aturan hadiah dari klien audit.",
    "Membedakan audit failure, business failure, dan audit risk."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: kenapa etika adalah inti dari audit",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** dalam audit, **yang membayar auditor adalah perusahaan, tetapi yang mengandalkan opininya adalah pengguna laporan keuangan**. Kalau pengguna tidak percaya auditor berintegritas dan independen, opininya tidak bernilai sama sekali. `(ARENS p.52)` Jadi etika adalah syarat agar keyakinan yang diberikan auditor punya nilai. Ingat juga TM01: definisi auditing mensyaratkan pemeriksa yang **kompeten dan independen**. `(ARENS p.3)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Buku memakai kode etik Kanada; di Indonesia berlaku KEPAP 2025 (IAPI), yang isinya sama dengan IESBA untuk bagian ini."
        },
        {
          "kind": "p",
          "text": "**Independensi punya dua sisi:** benar-benar objektif dalam pikiran, dan **terlihat** objektif di mata pihak ketiga yang rasional. `(KEPAP 120.15-A1)` Sisi kedua sama pentingnya, karena pengguna tidak bisa membaca pikiran auditor."
        },
        {
          "kind": "p",
          "text": "**Alat berpikirnya adalah kerangka tiga langkah:** identifikasi ancaman, evaluasi apakah masih dapat diterima, lalu atasi. `(KEPAP 120.2)` Dengan kerangka ini, kamu bisa menganalisis situasi baru yang tidak ada di daftar aturan."
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
              "\"Kalau tidak ada larangannya, berarti boleh.\"",
              "Suatu situasi tidak boleh dianggap diperkenankan semata-mata karena tidak dilarang secara spesifik.",
              "KEPAP P120.3"
            ],
            [
              "\"Auditor independen berarti tidak dibayar klien.\"",
              "Auditor eksternal tetap dibayar klien, tetapi pada umumnya cukup independen untuk menghasilkan audit yang dapat diandalkan.",
              "ARENS p.5"
            ],
            [
              "\"Objektivitas sama dengan independensi.\"",
              "Objektivitas adalah sikap mental; independensi mencakup sikap mental **dan** penampilan.",
              "ARENS p.59; KEPAP 120.15-A1"
            ],
            [
              "\"Hadiah kecil apa pun boleh diterima.\"",
              "Hanya yang **trivial dan tidak berkonsekuensi**, dan tetap dilarang kalau dimaksudkan memengaruhi.",
              "KEPAP P420.3, 420.3-A2"
            ],
            [
              "\"Perusahaan bangkrut berarti auditnya gagal.\"",
              "Kegagalan bisnis tidak otomatis kegagalan audit. Audit failure berarti auditor tidak mematuhi standar.",
              "ARENS pp.70–71"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Kasus pembuka: partner yang membocorkan rahasia klien",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Membocorkan informasi klien melanggar kerahasiaan dan integritas sekaligus."
        },
        {
          "kind": "p",
          "text": "Scott London, partner senior KPMG di AS, membocorkan informasi laba dan rencana akuisisi klien kepada temannya. Temannya memakai informasi itu untuk trading dan meraup lebih dari 1 juta dolar, sementara London menerima sekitar 70.000 dolar tunai dan barang, termasuk jam Rolex. London divonis 14 bulan penjara, dan KPMG terpaksa mundur sebagai auditor dua klien yang ia pimpin. `(ARENS pp.50–51)`"
        },
        {
          "kind": "p",
          "text": "Kasus ini menyangkut dua prinsip sekaligus: **kerahasiaan** (informasi klien dibocorkan) dan **integritas** (menerima imbalan)."
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Mengapa auditor dituntut etika yang lebih tinggi?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Yang membayar auditor adalah klien, yang memakai opininya adalah publik. Tanpa kepercayaan, opini tidak bernilai."
        },
        {
          "kind": "p",
          "text": "Seperti disebut di Fondasi, ada konflik kepentingan yang melekat dalam hubungan audit: yang membayar auditor tidak sama dengan yang mengandalkan opininya, dan pengguna laporan keuangan sering tidak pernah bertemu auditor. Kalau pengguna tidak percaya auditor berintegritas dan independen, opininya tidak ada nilainya. Karena itu tanggung jawab utama akuntan publik adalah melindungi **kepentingan publik**. `(ARENS p.52)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Lima prinsip dasar etika (KEPAP Seksi 110)",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Lima prinsip: integritas, objektivitas, kompetensi dan kehati-hatian, kerahasiaan, perilaku profesional."
        },
        {
          "kind": "table",
          "headers": [
            "Prinsip",
            "Inti"
          ],
          "rows": [
            [
              "**Integritas**",
              "Lugas dan jujur dalam semua hubungan profesional dan bisnis"
            ],
            [
              "**Objektivitas**",
              "Pertimbangan tidak dikompromikan oleh bias, benturan kepentingan, atau pengaruh yang tidak semestinya. Termasuk di sini: terlalu bergantung pada orang lain, organisasi, atau teknologi"
            ],
            [
              "**Kompetensi dan kehati-hatian profesional**",
              "Menjaga pengetahuan dan keahlian pada level yang disyaratkan; bertindak sungguh-sungguh sesuai standar"
            ],
            [
              "**Kerahasiaan**",
              "Menjaga kerahasiaan informasi dari hubungan profesional dan bisnis"
            ],
            [
              "**Perilaku profesional**",
              "Patuh hukum, bertindak bagi kepentingan publik, tidak mendiskreditkan profesi"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(KEPAP 110.1-A1)`"
        },
        {
          "kind": "p",
          "text": "Setiap prinsip wajib dipatuhi. Kadang dua kewajiban etis saling bertentangan, misalnya menjaga kerahasiaan klien dan bertindak demi kepentingan publik (bagian dari perilaku profesional). Dalam situasi itu kamu boleh berkonsultasi, bahkan secara anonim, dengan:"
        },
        {
          "kind": "ul",
          "items": [
            "pihak di KAP-mu,",
            "pihak tata kelola klien,",
            "asosiasi profesi atau regulator,",
            "penasihat hukum."
          ]
        },
        {
          "kind": "p",
          "text": "Tapi keputusannya tetap tanggung jawabmu, dan sebaiknya didokumentasikan. `(KEPAP P110.2, 110.2-A2, A3)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "title": "Perbandingan",
          "text": "**Beda pengelompokan.** Buku (kode Kanada) menggabungkan *due care* dengan integritas, sedangkan KEPAP/IESBA menggabungkan kehati-hatian dengan kompetensi. Untuk ujian di Indonesia, pakai versi KEPAP. `(ARENS p.52)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Menyelesaikan dilema etis",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Selesaikan dilema dengan lima langkah, dan waspadai rasionalisasi serta blind spot."
        },
        {
          "kind": "p",
          "text": "**Dilema etis** adalah situasi ketika kamu harus memutuskan perilaku yang tepat. Buku memakai kerangka lima langkah berikut. `(ARENS pp.53–54, Figure 3-1)`"
        },
        {
          "kind": "table",
          "headers": [
            "Langkah",
            "Pertanyaan kunci"
          ],
          "rows": [
            [
              "1. Kumpulkan fakta dan identifikasi masalah",
              "Apakah faktanya lengkap? Apakah saya berasumsi? Apakah ini memang masalah saya?"
            ],
            [
              "2. Identifikasi isu etis",
              "Prinsip apa yang terdampak? Ada ancaman independensi dan pengamanannya? Apakah menyangkut kepentingan publik?"
            ],
            [
              "3. Identifikasi siapa yang terdampak",
              "Siapa saja pihaknya, bagaimana dampaknya, adakah konflik antarpihak?"
            ],
            [
              "4. Evaluasi alternatif tindakan",
              "Timbang pilihanmu dari sisi kebijakan KAP, hukum, nilai-nilai umum, akibat jangka pendek dan panjang, dan ada tidaknya rasionalisasi. Lalu uji pilihanmu dengan \"uji cepat\" di bawah"
            ],
            [
              "5. Laksanakan",
              "Lakukan, dan dokumentasikan proses berpikir serta keputusan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Contoh buku: Bryan Longview.** Staf yang baru enam bulan bekerja diminta seniornya lembur tanpa mencatat jam supaya audit tetap dalam anggaran, padahal itu melanggar kebijakan KAP. Rekannya bilang praktik ini biasa, dan senior yang melakukannya dinilai bagus oleh partner. Buku menunjukkan bahwa dampaknya jauh lebih luas daripada upah lembur: anggaran perikatan tahun depan jadi tidak realistis, tim berikutnya ikut tertekan, dan kualitas kerja bisa turun. Alternatif yang tersedia antara lain membicarakan kekhawatiran dengan senior, mencatat jamnya, atau berbicara dengan manager atau partner. `(ARENS pp.53–56)`"
        },
        {
          "kind": "p",
          "text": "**Rasionalisasi yang harus dicurigai:** \"semua orang melakukannya\", \"kalau legal berarti etis\", \"tidak ada yang tahu\", \"tidak merugikan siapa pun\", \"bukan tanggung jawab saya\". `(ARENS p.56)`"
        },
        {
          "kind": "p",
          "text": "**Uji cepat sebelum memutuskan:** apakah saya mau pilihan ini dimuat di koran (publicity test)? Bisakah saya membelanya di depan hakim atau komite etik (defensibility test)? Apa kata partner pengendalian mutu (firm test)? `(ARENS p.56)`"
        },
        {
          "kind": "p",
          "text": "**Ethical blind spots** lebih berbahaya daripada rasionalisasi karena kita tidak sadar sedang terkena. Contohnya *ethical fading* (keputusan dibingkai sebagai soal hukum atau biaya saja sehingga dimensi etisnya hilang) dan *motivated blindness* (tidak melihat masalah etis karena kita sendiri diuntungkan kalau masalah itu dianggap tidak ada). `(ARENS p.57)` KEPAP juga meminta Anggota waspada terhadap bias, seperti bias konfirmasi, bias otomatisasi, dan *group think*. `(KEPAP 120.12-A2)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Kerangka kerja konseptual: ancaman dan pengamanan (KEPAP Seksi 120)",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Identifikasi ancaman, nilai dengan kacamata pihak ketiga yang rasional, lalu atasi: hilangkan keadaannya, beri pengamanan, atau tolak."
        },
        {
          "kind": "p",
          "text": "Kerangka ini punya **tiga langkah**: **identifikasi** ancaman, **evaluasi** apakah ancaman berada pada level yang dapat diterima, lalu **atasi**. Satu hal penting: sebuah tindakan tidak otomatis boleh hanya karena tidak ada larangan spesifiknya. `(KEPAP 120.1–P120.3)`"
        },
        {
          "kind": "h3",
          "text": "Lima ancaman"
        },
        {
          "kind": "table",
          "headers": [
            "Ancaman (KEPAP / IESBA)",
            "Inti",
            "Contoh dari buku"
          ],
          "rows": [
            [
              "Kepentingan pribadi / self-interest",
              "Kepentingan keuangan atau lainnya memengaruhi pertimbangan",
              "Punya saham klien; fee klien sangat besar dibanding total fee KAP; fee lama belum dibayar"
            ],
            [
              "Telaah pribadi / self-review",
              "Menilai pekerjaan sendiri",
              "Auditor dulu merancang sistem akuntansi klien atau membukukan transaksinya"
            ],
            [
              "Advokasi / advocacy",
              "Membela posisi klien",
              "Mewakili klien dalam sengketa dengan kreditor; mempromosikan saham klien"
            ],
            [
              "Kedekatan / familiarity",
              "Terlalu bersimpati karena hubungan lama atau dekat",
              "Staf senior bertahun-tahun di klien yang sama; mantan partner menjadi CFO klien"
            ],
            [
              "Intimidasi / intimidation",
              "Tekanan nyata atau dirasakan",
              "Klien mengancam ganti auditor; batas fee tidak realistis; CFO memarahi junior yang banyak bertanya"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(KEPAP 120.6-A3; ARENS pp.64–65, Table 3-2)`"
        },
        {
          "kind": "p",
          "text": "**Kasus EY di AS.** Seorang partner audit menjalin hubungan romantis dengan CFO klien, dan partner lain menghabiskan 109.000 dolar untuk menjamu CFO klien dan keluarganya. SEC menilai investor yang rasional akan menyimpulkan kedua partner itu tidak objektif. Dendanya total 9,3 juta dolar. `(ARENS p.62)`"
        },
        {
          "kind": "h3",
          "text": "Kapan ancaman \"dapat diterima\"?"
        },
        {
          "kind": "p",
          "text": "Ukurannya adalah **pihak ketiga yang rasional dan memiliki informasi yang memadai**: kalau orang seperti itu tahu semua fakta yang kamu ketahui, apakah ia akan menyimpulkan kamu tetap mematuhi prinsip etika? Orang itu tidak harus akuntan. `(KEPAP 120.7-A1, 120.5-A9)` Buku menyebut tolok ukur yang serupa sebagai *reasonable observer*. `(ARENS p.58)`"
        },
        {
          "kind": "h3",
          "text": "Tiga cara mengatasi ancaman"
        },
        {
          "kind": "ol",
          "items": [
            "**Hilangkan keadaannya**, misalnya jual sahamnya atau keluarkan orang yang bersangkutan dari tim.",
            "**Terapkan pengamanan**, yaitu tindakan yang efektif menurunkan ancaman ke level yang dapat diterima.",
            "**Tolak atau hentikan** aktivitas profesional tersebut."
          ]
        },
        {
          "kind": "p",
          "text": "Ada situasi yang hanya bisa diatasi dengan cara ketiga. `(KEPAP P120.10, 120.10-A1, A2)`"
        },
        {
          "kind": "p",
          "text": "Buku mengelompokkan pengamanan menurut sumbernya:"
        },
        {
          "kind": "ul",
          "items": [
            "**profesi dan regulasi**: pelatihan, inspeksi, rotasi;",
            "**klien**: staf akuntansi kompeten, komite audit independen;",
            "**KAP**: tone at the top, kebijakan independensi, konsultasi wajib."
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS p.66, Table 3-3)`"
        },
        {
          "kind": "h3",
          "text": "Dua sisi independensi"
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Arti",
            "Sumber"
          ],
          "rows": [
            [
              "**Independensi dalam pemikiran**",
              "Sikap mental yang memungkinkan menyatakan kesimpulan tanpa terpengaruh tekanan",
              "KEPAP 120.15-A1(a)"
            ],
            [
              "**Independensi dalam penampilan**",
              "Menghindari keadaan yang membuat pihak ketiga yang rasional menyimpulkan integritas, objektivitas, atau skeptisisme telah dikompromikan",
              "KEPAP 120.15-A1(b)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Auditor yang independen dalam pemikiran tetapi terlihat seperti pembela klien tetap merusak nilai audit. `(ARENS p.59)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Hadiah dan jamuan dari klien (KEPAP Seksi 420)",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Hadiah dari klien audit hanya boleh diterima kalau trivial dan tidak berkonsekuensi."
        },
        {
          "kind": "callout",
          "variant": "quote",
          "text": "**Aturannya:** kantor, jaringan kantor (kantor lain dalam satu jaringan), atau anggota tim audit **tidak boleh menerima hadiah dan keramahtamahan dari klien audit, kecuali nilainya trivial dan tidak memiliki konsekuensi.** Bahkan hadiah yang trivial pun tidak boleh diterima kalau maksudnya memengaruhi perilaku secara tidak patut. `(KEPAP P420.3, 420.3-A2; sama dengan IESBA R420.3)`"
        },
        {
          "kind": "p",
          "text": "Menerima hadiah atau jamuan dapat memunculkan **tiga ancaman**: kepentingan pribadi, kedekatan, dan intimidasi. Intimidasi muncul karena setelah menerima, auditor bisa merasa \"berutang budi\". `(KEPAP 420.2)`"
        },
        {
          "kind": "h3",
          "text": "Panduan role play Week 3"
        },
        {
          "kind": "p",
          "text": "**Skenario RPS:** klien menawarkan hadiah (makan malam mahal atau tiket) kepada tim audit tepat sebelum fieldwork akhir tahun."
        },
        {
          "kind": "table",
          "headers": [
            "Langkah",
            "Yang dilakukan auditor",
            "Dasar"
          ],
          "rows": [
            [
              "Kenali",
              "Makan malam mahal atau tiket jelas **tidak trivial**. Waktunya, menjelang fieldwork, menambah kesan ingin memengaruhi",
              "KEPAP P420.3, 420.3-A2"
            ],
            [
              "Sebut ancamannya",
              "Kepentingan pribadi (manfaat pribadi), kedekatan (hubungan jadi terlalu akrab), intimidasi (rasa berutang budi)",
              "KEPAP 420.2"
            ],
            [
              "Tolak dengan sopan",
              "Tolak dengan hormat dan jelaskan bahwa kode etik tidak membolehkan tim audit menerima hadiah atau jamuan yang tidak trivial dari klien audit. Tawarkan tetap menjaga hubungan kerja yang baik",
              "KEPAP P420.3; ARENS p.63"
            ],
            [
              "Laporkan ke atas",
              "Beri tahu senior atau engagement partner, sesuai kebijakan independensi KAP",
              "ARENS pp.66–67; ISA 220 (TM02)"
            ],
            [
              "Dokumentasikan",
              "Catat tawaran, penolakan, dan kesimpulannya",
              "KEPAP 110.2-A3; ARENS p.67"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Contoh kalimat penolakan (Interpretasi): *\"Terima kasih banyak atas undangannya, Pak. Sayangnya aturan kode etik kami tidak membolehkan tim audit menerima jamuan seperti ini dari klien selama kami bertugas. Kami tetap senang bekerja sama dengan tim Bapak selama fieldwork nanti.\"*"
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Aturan dalam UU 5/2011",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Undang-undang mewajibkan independensi dan kerahasiaan, serta melarang imbalan jasa bersyarat dan komisi."
        },
        {
          "kind": "table",
          "headers": [
            "Topik",
            "Isi",
            "Pasal"
          ],
          "rows": [
            [
              "Independensi",
              "Wajib menjaga independensi dan bebas benturan kepentingan, antara lain: kepentingan keuangan atau manfaat ekonomis dari klien; hubungan keluarga dengan pimpinan atau posisi kunci keuangan klien; memberikan jasa asurans **sekaligus** jasa lainnya untuk periode atau tahun buku yang sama",
              "Pasal 28"
            ],
            [
              "Kerahasiaan",
              "Wajib menjaga kerahasiaan informasi klien, kecuali untuk pengawasan oleh Menteri",
              "Pasal 29"
            ],
            [
              "Larangan",
              "Antara lain menerima **imbalan jasa bersyarat**; menerima atau memberi **komisi**; memanipulasi atau memalsukan data",
              "Pasal 30"
            ],
            [
              "Pidana",
              "Manipulasi/pemalsuan data atau kertas kerja: penjara maks. 5 tahun dan denda maks. Rp300 juta. Bukan AP tapi bertindak seolah AP: penjara maks. 6 tahun dan denda maks. Rp500 juta",
              "Pasal 55, 57"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "blocks": [
        {
          "kind": "pendalaman",
          "title": "8. Contoh aturan dalam buku (Kanada)",
          "blocks": [
            {
              "kind": "callout",
              "variant": "gist",
              "text": "**Intinya:** Ini aturan Kanada. Pelajari logikanya, tapi jangan dikutip sebagai aturan Indonesia."
            },
            {
              "kind": "ul",
              "items": [
                "**Contingent fees** (fee bergantung hasil) dilarang untuk audit, review, dan compilation. Padanannya di Indonesia adalah larangan imbalan jasa bersyarat dalam UU 5/2011 Pasal 30. `(ARENS p.60)`",
                "**Komunikasi dengan auditor pendahulu:** calon auditor pengganti wajib bertanya kepada auditor lama sebelum menerima klien. Kalau klien menolak memberi izin, patut dicurigai. `(ARENS p.61)`",
                "**Kerahasiaan kertas kerja:** boleh dibuka tanpa izin klien hanya jika dipanggil pengadilan, untuk practice inspection, atau untuk sidang disiplin. `(ARENS pp.59–60)`",
                "**Larangan independensi Kanada:** antara lain kepemilikan saham klien, pinjaman dari klien, menjalankan fungsi manajemen, fee jauh di bawah pasar (*low balling*), serta rotasi key audit partner listed entity setiap 7 tahun. `(ARENS pp.62–64)` Aturan rotasi Indonesia berbeda: lihat PP 20/2015 di TM02."
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "9. Expectations gap dan tanggung gugat auditor",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Publik sering berharap lebih dari yang dijanjikan audit. Perusahaan bangkrut tidak otomatis berarti auditnya gagal."
        },
        {
          "kind": "p",
          "text": "**Expectations gap** adalah selisih antara apa yang publik harapkan dari auditor dan apa yang menjadi tanggung jawab auditor menurut standar. `(ARENS p.68)`"
        },
        {
          "kind": "table",
          "headers": [
            "Yang sering diharapkan publik",
            "Yang sebenarnya menurut standar"
          ],
          "rows": [
            [
              "Auditor bertanggung jawab atas laporan keuangan",
              "Manajemen yang bertanggung jawab"
            ],
            [
              "Opini bersih = laporan pasti benar",
              "Keyakinan memadai, bukan jaminan"
            ],
            [
              "Auditor memeriksa semua transaksi",
              "Pengujian dilakukan secara uji petik"
            ],
            [
              "Auditor memperingatkan kebangkrutan",
              "Manajemen menilai kelangsungan usaha (going concern); auditor menilai dan menyoroti jika ada keraguan signifikan"
            ],
            [
              "Auditor pasti menemukan fraud",
              "Auditor menilai risiko salah saji material karena error dan fraud"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Porter membagi gap menjadi **reasonableness gap** (harapan yang tidak wajar) dan **performance gap**, yang terdiri dari *deficient standards* dan *deficient performance*. Performance gap dikurangi lewat perbaikan standar, pengawasan eksternal, dan sistem mutu KAP. Reasonableness gap dikurangi lewat perbaikan standar dan edukasi masyarakat. `(ARENS pp.69–70)`"
        },
        {
          "kind": "p",
          "text": "**Tiga istilah yang sering tertukar:**"
        },
        {
          "kind": "table",
          "headers": [
            "Istilah",
            "Arti"
          ],
          "rows": [
            [
              "Audit failure",
              "Opini keliru karena auditor **tidak mematuhi** standar"
            ],
            [
              "Business failure",
              "Perusahaan gagal karena kondisi ekonomi atau bisnis"
            ],
            [
              "Audit risk",
              "Opini keliru **walaupun** audit sudah sesuai standar; tidak dapat dihindari sepenuhnya"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Perusahaan bangkrut tidak otomatis berarti auditnya gagal. `(ARENS pp.70–71)` Contoh buku, Sino-Forest: EY membayar penyelesaian 117 juta dolar kepada investor, dan regulator menilai EY kurang skeptis dalam memverifikasi keberadaan aset kayu klien. `(ARENS p.70)`"
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
          "title": "Kasus 1: Identifikasi ancaman.",
          "prompt": "Tentukan ancamannya:\n1. Senior audit membeli saham PT Klien dengan sebagian besar tabungannya.\n2. KAP membuat jurnal penyesuaian dan laporan keuangan klien, lalu mengauditnya.\n3. CFO klien berkata: \"Kalau catatan ini tidak dihapus, tahun depan kami pakai KAP lain.\"\n4. Partner sudah 10 tahun memimpin audit klien yang sama dan sering liburan bersama direkturnya.\n5. KAP diminta menjadi saksi yang membela klien dalam sengketa pajak.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* (1) Kepentingan pribadi. (2) Telaah pribadi. (3) Intimidasi. (4) Kedekatan. (5) Advokasi. `(KEPAP 120.6-A3; ARENS Table 3-2)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Dilema kerahasiaan.",
          "prompt": "Buku memberi contoh Qin, senior auditor sebuah pabrik kertas yang menjadi pemberi kerja utama di sebuah kota kecil. Peralatan pengolah limbah asam di pabrik itu berulang kali rusak, sehingga ribuan liter air yang tidak diolah dibuang ke sungai dan danau. Masalahnya, biaya perbaikan peralatannya bisa membuat perusahaan tutup.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Qin menghadapi konflik antara **kerahasiaan** dan **kepentingan publik/perilaku profesional**. Dengan kerangka lima langkah, ia mengumpulkan fakta, mengidentifikasi prinsip yang bertentangan, memetakan pihak terdampak (karyawan, warga, pemegang saham, KAP, profesi), lalu mengevaluasi alternatif. Konsultasi dengan partner dan penasihat hukum adalah langkah yang tepat menurut KEPAP 110.2-A2. Tidak ada satu jawaban benar; jawaban yang baik menunjukkan proses, bukan hanya kesimpulan. `(ARENS p.53; KEPAP 110.2-A2)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3: Hadiah kecil.",
          "prompt": "Di akhir fieldwork, bagian keuangan klien memberi setiap anggota tim sebuah pulpen berlogo perusahaan.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Pulpen berlogo kemungkinan besar bernilai trivial dan tidak berkonsekuensi, sehingga boleh diterima, **asalkan** tidak ada maksud memengaruhi perilaku. Bandingkan dengan tiket konser atau makan malam mahal sebelum fieldwork, yang harus ditolak. Penentuan \"trivial\" adalah pertimbangan profesional dengan tolok ukur pihak ketiga yang rasional. `(KEPAP P420.3, 420.3-A2, 120.7-A1)`"
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
          "question": "**1. Kenapa auditor yang sebenarnya jujur tetap harus menjaga independensi dalam penampilan?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* karena pengguna tidak bisa melihat isi pikiran auditor. Mereka menilai dari keadaan yang terlihat. Kalau pihak ketiga yang rasional melihat keadaan yang membuat objektivitas diragukan, misalnya kasus partner EY yang menjamu CFO klien senilai 109.000 dolar, nilai audit hilang walaupun auditornya merasa objektif. `(KEPAP 120.15-A1; ARENS pp.59, 62)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"supaya tidak kena sanksi\"."
        },
        {
          "kind": "self-check",
          "question": "**2. Buat satu situasi baru yang mengandung ancaman telaah pribadi, lalu jelaskan cara mengatasinya.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* KAP membantu klien merancang sistem pencatatan persediaan, lalu tahun berikutnya mengaudit saldo persediaan yang dihasilkan sistem itu. Auditor sedang menilai hasil pekerjaannya sendiri. Cara mengatasinya: hilangkan keadaannya (jangan memberi jasa desain sistem kepada klien audit), terapkan pengamanan jika tersedia, atau tolak salah satu jasa. `(KEPAP 120.6-A3, P120.10; ARENS Table 3-2)`"
            }
          ],
          "signal": "*Tanda belum paham:* hanya bisa menyebut contoh yang sama persis dengan buku."
        },
        {
          "kind": "self-check",
          "question": "**3. Kenapa kerangka \"identifikasi, evaluasi, atasi\" lebih berguna daripada menghafal daftar larangan?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* daftar larangan tidak mungkin mencakup semua situasi, dan KEPAP menegaskan bahwa situasi yang tidak dilarang secara spesifik tidak otomatis boleh. Kerangka tiga langkah memungkinkan auditor menilai situasi baru dengan logika yang sama. `(KEPAP 120.2, P120.3)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap cukup menghafal contoh-contoh larangan."
        },
        {
          "kind": "self-check",
          "question": "**4. Apa beda audit failure, business failure, dan audit risk? Gunakan satu contoh perusahaan yang bangkrut.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* jika perusahaan bangkrut karena resesi dan audit sudah sesuai standar, itu business failure tanpa audit failure. Jika auditor tidak mematuhi standar sehingga opininya keliru, itu audit failure. Jika audit sudah sesuai standar tetapi fraud yang sangat tersembunyi tetap lolos, itu audit risk yang tidak bisa dihilangkan sepenuhnya. `(ARENS pp.70–71)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyamakan kebangkrutan dengan kegagalan audit."
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
          "text": "**Kerangka esai \"Analisis ancaman independensi dalam kasus X\"**"
        },
        {
          "kind": "ol",
          "items": [
            "Identifikasi ancaman (sebut kategorinya).",
            "Evaluasi dengan tolok ukur pihak ketiga yang rasional dan memiliki informasi memadai.",
            "Atasi: hilangkan keadaan, terapkan pengamanan (sebut contohnya), atau tolak/hentikan.",
            "Sebut dampaknya pada independensi dalam pemikiran dan dalam penampilan.",
            "Dokumentasi."
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
              "Objektivitas vs independensi",
              "Objektivitas adalah sikap mental; independensi mencakup sikap mental **dan** penampilan"
            ],
            [
              "Self-interest vs familiarity",
              "Manfaat pribadi vs terlalu bersimpati karena hubungan dekat"
            ],
            [
              "Self-review vs advocacy",
              "Menilai pekerjaan sendiri vs membela posisi klien"
            ],
            [
              "Rasionalisasi vs blind spot",
              "Sadar mencari pembenaran vs tidak sadar ada masalah etis"
            ],
            [
              "Audit failure vs audit risk",
              "Tidak patuh standar vs sudah patuh standar tetapi tetap keliru"
            ],
            [
              "Reasonableness gap vs performance gap",
              "Harapan tidak wajar vs standar atau kinerja yang kurang"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
