// AKA201 TM07/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM7_READING: Reading = {
  "tm": 7,
  "title": "Materialitas Perencanaan dan Pelaksanaan",
  "intro": "**Sumber utama:** Arens dkk., Ch.6, pp.199–211. **Standar:** SA/ISA 320 (materialitas dalam perencanaan dan pelaksanaan audit).",
  "objectives": [
    "Menjelaskan materialitas berbasis pengguna.",
    "**Menghitung** dan menjustifikasi materialitas.",
    "Menjelaskan materialitas pelaksanaan dan aggregation risk.",
    "Menjelaskan kapan perlu materialitas spesifik.",
    "Menilai salah saji kecil yang tetap material."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: materialitas adalah ukuran \"salah yang masih bisa diterima\"",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** salah saji disebut material jika dapat memengaruhi **keputusan** pengguna laporan keuangan. `(ARENS p.199)` Jadi pertanyaan kuncinya selalu: **apakah keputusan pengguna akan berubah?**"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Perhatikan.** Angka seperti 5 persen laba adalah **rule of thumb** dari buku, bukan kewajiban standar. `(ARENS p.200; ISA320 para. A8)`"
        },
        {
          "kind": "p",
          "text": "Buku memakai analogi nilai ujian. Seorang mahasiswa butuh nilai minimal B untuk masuk program profesi. Kalau nilai sebenarnya B tetapi tercatat A, kesalahan itu **tidak material**, karena keputusannya tetap sama: ia tetap diterima. Tetapi kalau nilai sebenarnya F dan tercatat A, kesalahan itu **material**, karena keputusannya berubah total. `(ARENS p.210)`"
        },
        {
          "kind": "p",
          "text": "**Kenapa auditor butuh materialitas?** Ingat TM01 dan TM04: auditor hanya memberi keyakinan memadai bahwa laporan bebas dari salah saji **material**, karena memeriksa semuanya sangat mahal dan mungkin mustahil. `(ARENS p.89)` Materialitas adalah angka yang membuat kata \"material\" itu bisa dipakai dalam praktik: untuk merencanakan seberapa banyak pekerjaan, mengevaluasi salah saji yang ditemukan, dan menentukan opini (TM06). `(ARENS p.200)`"
        },
        {
          "kind": "p",
          "text": "**Materialitas selalu soal pertimbangan profesional.** Persentase yang biasa dipakai hanyalah titik awal, dan pilihannya harus dijelaskan dari sudut kebutuhan pengguna. `(ARENS pp.200, 204)`"
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
              "\"Materialitas 5 persen laba itu aturan standar.\"",
              "5 persen adalah rule of thumb. ISA 320 menyebut penentuan persentase sebagai pertimbangan profesional.",
              "ARENS p.200; ISA320 para. A8"
            ],
            [
              "\"Satu angka materialitas berlaku untuk semua perusahaan.\"",
              "Materialitas relatif. Salah saji 1 juta dolar bisa sangat material bagi satu perusahaan dan tidak material bagi perusahaan lain.",
              "ARENS p.200"
            ],
            [
              "\"Salah saji di bawah materialitas boleh diabaikan.\"",
              "Salah saji kecil bisa menumpuk melebihi materialitas (aggregation risk), dan salah saji kecil bisa material karena sifatnya, misalnya mengubah laba menjadi rugi.",
              "ISA320 para. 9(b); ARENS p.209"
            ],
            [
              "\"Trivial sama dengan tidak material.\"",
              "Trivial berarti jelas tidak berkonsekuensi sehingga tidak perlu diakumulasi. Salah saji di atas ambang trivial tetap diakumulasi dan dimintakan koreksi.",
              "ARENS pp.208–209"
            ],
            [
              "\"Materialitas ditentukan dari apa yang penting bagi manajemen.\"",
              "Materialitas keseluruhan didasarkan pada kebutuhan pengguna laporan keuangan sebagai kelompok.",
              "ARENS pp.200–201"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Apa itu materialitas?",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Material artinya bisa mengubah keputusan pengguna."
        },
        {
          "kind": "p",
          "text": "Salah saji, termasuk hal yang lupa dicatat atau diungkapkan, disebut **material** jika, sendiri-sendiri atau digabung, wajar diduga akan **memengaruhi keputusan ekonomik pengguna**. `(ARENS p.199)`"
        },
        {
          "kind": "p",
          "text": "Tiga hal yang perlu dipegang: `(ARENS p.200)`"
        },
        {
          "kind": "ul",
          "items": [
            "**Relatif, bukan absolut.** Salah saji 1 juta dolar sangat material bagi Hillsburg, yang laba sebelum pajaknya sekitar 5,7 juta, tetapi tidak material bagi perusahaan dengan laba miliaran. Karena itu tidak ada satu angka materialitas untuk semua klien.",
            "**Berbasis pengguna sebagai kelompok**, bukan tiap pengguna secara individual.",
            "**Ukuran dan sifat** salah saji sama-sama diperhitungkan."
          ]
        },
        {
          "kind": "p",
          "text": "Ingat analogi nilai ujian di Fondasi: materialitas adalah soal **apakah keputusan pengguna akan berubah**."
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Materialitas di sepanjang audit",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Materialitas dipakai dari perencanaan sampai penentuan opini."
        },
        {
          "kind": "table",
          "headers": [
            "Tahap",
            "Keputusan materialitas"
          ],
          "rows": [
            [
              "Perencanaan",
              "Materialitas keseluruhan, materialitas pelaksanaan, materialitas spesifik (bila perlu)"
            ],
            [
              "Evaluasi hasil",
              "Mengestimasi total salah saji per segmen dan gabungan, lalu membandingkan dengan materialitas keseluruhan"
            ],
            [
              "Penyelesaian",
              "Menyimpulkan kewajaran laporan keuangan; melapor ke TCWG; menentukan opini"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.200, Figure 6-6)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Materialitas keseluruhan: tiga langkah",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Urutannya: pengguna, tolok ukur, persentase, lalu justifikasi."
        },
        {
          "kind": "p",
          "text": "**Langkah 1: pilih tolok ukur** berdasarkan siapa pengguna utamanya dan apa yang paling mereka perhatikan. `(ARENS pp.201–202)`"
        },
        {
          "kind": "table",
          "headers": [
            "Jenis entitas",
            "Tolok ukur yang umum"
          ],
          "rows": [
            [
              "Perusahaan matang dengan saham tersebar",
              "Laba sebelum pajak"
            ],
            [
              "Start-up yang belum laba",
              "Pendapatan, aset, atau aset neto"
            ],
            [
              "Perusahaan milik satu investor dengan laba selalu kecil karena pemilik mengambil bonus",
              "Laba disesuaikan untuk bonus pemilik, atau total aset"
            ],
            [
              "Perusahaan yang terutama dibiayai utang",
              "Total aset"
            ],
            [
              "Organisasi nirlaba",
              "Total pendapatan atau total beban"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.202, Table 6-6)`"
        },
        {
          "kind": "p",
          "text": "Faktor lain dalam memilih tolok ukur: pos yang menjadi fokus pengguna, riwayat penyesuaian audit, sifat industri, struktur pendanaan, dan **volatilitas** tolok ukur. Laba yang naik-turun drastis mungkin bukan tolok ukur yang baik. Karena angka akhir tahun belum tersedia saat perencanaan, auditor memakai angka tahun lalu, angka sampai tanggal berjalan, atau anggaran; sebagian memakai rata-rata dua atau tiga tahun. `(ARENS p.202)`"
        },
        {
          "kind": "p",
          "text": "**Langkah 2: tentukan persentase.** Rules of thumb menurut buku: `(ARENS p.203, Table 6-7)`"
        },
        {
          "kind": "p",
          "text": "**Entitas berorientasi laba**"
        },
        {
          "kind": "table",
          "headers": [
            "Tolok ukur",
            "Persentase"
          ],
          "rows": [
            [
              "Laba sebelum pajak (mungkin perlu dinormalisasi, yaitu disesuaikan bila ada pos luar biasa atau satu kali)",
              "3–7%"
            ],
            [
              "Total aset",
              "1–3%"
            ],
            [
              "Ekuitas",
              "3–5%"
            ],
            [
              "Pendapatan",
              "1–3%"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Entitas nirlaba**"
        },
        {
          "kind": "table",
          "headers": [
            "Tolok ukur",
            "Persentase"
          ],
          "rows": [
            [
              "Pendapatan",
              "1–3%"
            ],
            [
              "Beban",
              "1–3%"
            ],
            [
              "Total aset",
              "1–3%"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Semakin **sensitif** pengguna terhadap salah saji, semakin **rendah** persentasenya. Contoh buku: dua pemilik perusahaan kecil akan menjual perusahaannya dengan harga yang dihitung dari laporan keuangan. Pengguna sangat sensitif, jadi auditor memakai ujung bawah rentang. `(ARENS p.203)` ISA 320 sendiri hanya memberi contoh: 5 persen laba sebelum pajak untuk perusahaan manufaktur, 1 persen total pendapatan atau beban untuk entitas nirlaba. `(ISA320 para. A8)`"
        },
        {
          "kind": "p",
          "text": "**Langkah 3: justifikasi dan dokumentasikan** di kertas kerja. `(ARENS p.204)`"
        },
        {
          "kind": "p",
          "text": "**Materialitas bisa direvisi** jika muncul informasi baru, misalnya perusahaan memutuskan menjual sebagian besar bisnisnya, atau hasil aktual jauh berbeda dari yang diantisipasi. `(ISA320 paras. 12–13, A14)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Materialitas pelaksanaan",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Materialitas pelaksanaan dibuat lebih kecil sebagai ruang aman atas salah saji kecil yang menumpuk."
        },
        {
          "kind": "p",
          "text": "**Definisi:** jumlah yang ditetapkan auditor **di bawah** materialitas keseluruhan untuk menurunkan **aggregation risk**. `(ISA320 para. 9(a))`"
        },
        {
          "kind": "p",
          "text": "**Aggregation risk** adalah risiko bahwa salah saji-salah saji kecil yang lolos (tidak terdeteksi atau tidak dikoreksi), kalau dijumlahkan, ternyata melebihi materialitas keseluruhan. Masing-masing di bawah materialitas, tetapi totalnya tidak. `(ISA320 para. 9(b))`"
        },
        {
          "kind": "p",
          "text": "**Mengapa perlu?** Kalau auditor hanya mencari salah saji yang masing-masing sudah material, ia akan melewatkan kemungkinan bahwa banyak salah saji kecil menumpuk menjadi material. Materialitas pelaksanaan memberi **penyangga** (safety buffer). `(ARENS p.204; ISA320 para. A13)`"
        },
        {
          "kind": "table",
          "headers": [
            "",
            "Materialitas keseluruhan",
            "Materialitas pelaksanaan"
          ],
          "rows": [
            [
              "Dasar",
              "Kebutuhan pengguna",
              "Risiko"
            ],
            [
              "Besarnya",
              "Salah saji tertinggi yang tidak mengubah keputusan pengguna",
              "Di bawah materialitas keseluruhan; dalam praktik umumnya 50% (risiko tinggi) sampai 75% (risiko rendah)"
            ],
            [
              "Dipakai untuk",
              "Menyimpulkan kewajaran laporan keuangan secara keseluruhan",
              "Menentukan area yang diuji, luas pekerjaan, dan ukuran sampel; mengevaluasi hasil uji"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.204, 207–208)`"
        },
        {
          "kind": "p",
          "text": "**Terlalu tinggi** → prosedur tidak cukup untuk mendeteksi salah saji material. **Terlalu rendah** → audit tidak efisien. `(ARENS p.207)`"
        },
        {
          "kind": "p",
          "text": "**Faktor yang membuat materialitas pelaksanaan diturunkan:**"
        },
        {
          "kind": "ul",
          "items": [
            "perikatan tahun pertama,",
            "risiko fraud,",
            "riwayat salah saji di tahun-tahun sebelumnya,",
            "banyak estimasi yang sulit,",
            "lingkungan pengendalian lemah,",
            "pergantian manajemen atau staf keuangan yang tinggi,",
            "operasi di banyak lokasi,",
            "industri berisiko tinggi."
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS p.207)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Praktik yang dikritik.** FRC Inggris menemukan KAP cenderung langsung memakai persentase tertinggi yang diizinkan kebijakan internalnya, tanpa bukti ada pertimbangan. Menurut FRC, risiko harus menjadi faktor kunci dalam menetapkan materialitas pelaksanaan. `(ARENS p.207)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Materialitas spesifik",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Pos yang sangat sensitif bagi pengguna tertentu bisa diberi materialitas lebih rendah."
        },
        {
          "kind": "p",
          "text": "Materialitas spesifik dipakai untuk pos tertentu yang sangat diperhatikan pengguna. Untuk pos seperti ini, salah saji yang **lebih kecil** dari materialitas keseluruhan pun sudah bisa memengaruhi keputusan mereka. Contoh: **kompensasi eksekutif** dan **transaksi pihak berelasi**, karena pemegang saham dan regulator sangat sensitif terhadapnya; atau pembayaran paten, karena pembayaran kecil yang terlewat pun bisa berakibat besar, yaitu hilangnya hak atas teknologi kunci. Jika ada materialitas spesifik, auditor juga menetapkan materialitas pelaksanaan spesifiknya. `(ARENS p.208; ISA320 para. 10)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Ambang salah saji yang jelas trivial",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Di bawah ambang trivial tidak perlu dicatat, tapi trivial tidak sama dengan tidak material."
        },
        {
          "kind": "p",
          "text": "Salah saji di bawah ambang ini **jelas tidak berkonsekuensi**, baik dari ukuran, sifat, maupun keadaannya, sehingga tidak perlu diakumulasi. Ambangnya biasanya disepakati dengan komite audit. Contoh: Hillsburg memakai 1 persen dari materialitas keseluruhan, dan City of Toronto melaporkan semua perbedaan di atas 1 persen materialitas keseluruhan. `(ARENS pp.204, 206)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** \"Jelas trivial\" **tidak sama** dengan \"tidak material\". Semua salah saji di atas ambang trivial diakumulasi, dan auditor meminta manajemen mengoreksi yang belum dikoreksi. `(ARENS pp.208–209)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Contoh lengkap dari buku: Hillsburg Hardware (Figure 6-8)",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Contoh utuh dari buku: dari pengguna sampai ambang trivial."
        },
        {
          "kind": "p",
          "text": "**Pengguna utama:** perusahaan investasi (profitabilitas, pertumbuhan), bank (covenant arus kas yang diukur dengan EBITA, yang di contoh ini berarti laba operasi ditambah amortisasi, dan quick ratio minimal 1,25), keluarga pemilik (kinerja dan dividen). `(ARENS p.205)`"
        },
        {
          "kind": "table",
          "headers": [
            "Komponen",
            "Perhitungan",
            "Hasil"
          ],
          "rows": [
            [
              "Tolok ukur (EBITA)",
              "Laba operasi 7.370 + amortisasi 1.452 (ribuan)",
              "**8.822 ribu**"
            ],
            [
              "Rentang 3–7%",
              "8.822 ribu × 3% s.d. 7%",
              "265.000 s.d. 618.000"
            ],
            [
              "**Materialitas keseluruhan**",
              "5% × 8.822 ribu (sensitivitas pengguna rendah–moderat)",
              "**441.000** (tahun lalu 407.000)"
            ],
            [
              "**Materialitas pelaksanaan**",
              "75% × 441.000 (sedikit salah saji di masa lalu)",
              "**331.000** (tahun lalu 305.000)"
            ],
            [
              "Materialitas pelaksanaan untuk pendapatan dan persediaan",
              "Diturunkan karena ada kesalahan cutoff dan perhitungan fisik di masa lalu",
              "**265.000** masing-masing"
            ],
            [
              "Materialitas spesifik",
              "Tidak ada; materialitas keseluruhan dinilai cukup kecil untuk covenant",
              "–"
            ],
            [
              "**Ambang trivial**",
              "1% × 441.000",
              "**4.400**"
            ]
          ],
          "stackOnMobile": true,
          "align": [
            null,
            null,
            "right"
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.199, 205–206)`"
        },
        {
          "kind": "p",
          "text": "Perhatikan alurnya: **pengguna → tolok ukur → persentase → materialitas keseluruhan → materialitas pelaksanaan (dengan penurunan untuk akun berisiko) → ambang trivial**."
        }
      ]
    },
    {
      "kind": "section",
      "title": "8. Mengevaluasi salah saji",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Salah saji kecil bisa material karena sifatnya. Yang tidak dikoreksi dilaporkan ke TCWG."
        },
        {
          "kind": "p",
          "text": "**Tiga kategori salah saji:** `(ARENS pp.208–209)`"
        },
        {
          "kind": "table",
          "headers": [
            "Kategori",
            "Arti",
            "Sikap auditor"
          ],
          "rows": [
            [
              "Factual",
              "Pasti salah, tidak diragukan",
              "Minta manajemen mengoreksi"
            ],
            [
              "Judgmental",
              "Beda pertimbangan manajemen dan auditor, misalnya soal estimasi atau kebijakan",
              "Diskusikan untuk mencapai kesepakatan"
            ],
            [
              "Projected",
              "Estimasi auditor untuk seluruh populasi berdasarkan sampel",
              "Sulit meminta manajemen mengoreksinya"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Salah saji kecil bisa tetap material (Table 6-8)** jika misalnya: `(ARENS p.209)`"
        },
        {
          "kind": "ul",
          "items": [
            "mengubah **rugi menjadi laba** atau sebaliknya;",
            "memengaruhi **tren** laba;",
            "membuat perusahaan **memenuhi covenant** pinjaman atau ketentuan regulasi;",
            "**menaikkan kompensasi manajemen**;",
            "signifikan terhadap laba per saham atau laba dibanding ekspektasi;",
            "dilatarbelakangi **motif manajemen laba** atau perataan laba."
          ]
        },
        {
          "kind": "p",
          "text": "Jika ada salah saji material yang tidak dikoreksi, auditor menilai apakah dampaknya pervasif untuk menentukan jenis opini (TM06). Salah saji yang tidak dikoreksi beserta dampaknya dikomunikasikan kepada TCWG. `(ARENS pp.209–210)`"
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
          "title": "Kasus 1: Hitung materialitas.",
          "prompt": "PT Sentosa adalah perusahaan manufaktur terbuka dengan saham tersebar dan laba stabil. Proyeksi laba sebelum pajak tahun ini Rp2.400.000.000. Tim audit menilai sensitivitas pengguna moderat. Tahun ini juga ada pergantian CFO dan beberapa staf akuntansi.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "Tolok ukur: laba sebelum pajak, karena perusahaan matang dengan saham tersebar dan labanya stabil. `(Table 6-6)`",
                "Persentase: 5% (tengah rentang 3–7%) sesuai sensitivitas moderat.",
                "**Materialitas keseluruhan** = 5% × 2.400.000.000 = **Rp120.000.000**.",
                "Materialitas pelaksanaan: pergantian personel keuangan adalah faktor risiko, jadi dipakai persentase yang lebih rendah dalam rentang 50–75%, yaitu 60% × 120.000.000 = **Rp72.000.000**. Tanpa faktor risiko itu, 75% akan menghasilkan Rp90.000.000. `(ARENS p.207)`",
                "**Ambang trivial** (mengikuti contoh Hillsburg, 1% materialitas keseluruhan) = **Rp1.200.000**.",
                "Pilihan 5% dan 60% adalah pertimbangan profesional yang harus didokumentasikan. `(ARENS p.204)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Aggregation risk.",
          "prompt": "Dengan materialitas keseluruhan Rp120.000.000, auditor menemukan tiga salah saji yang tidak dikoreksi, masing-masing Rp45.000.000.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* Masing-masing di bawah materialitas keseluruhan, tetapi totalnya 3 × 45.000.000 = **Rp135.000.000**, melebihi Rp120.000.000. Secara agregat laporan keuangan salah saji material. Inilah yang ingin dicegah dengan materialitas pelaksanaan. Auditor meminta koreksi; kalau manajemen menolak, opini dimodifikasi (TM06). `(ISA320 para. 9(b); ARENS p.204)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3: Material secara kualitatif.",
          "prompt": "Menjelang akhir audit, laba sebelum pajak yang dilaporkan PT Sentosa ternyata hanya Rp30.000.000, jauh di bawah proyeksi. Auditor menemukan beban Rp40.000.000 yang belum dicatat, jumlah yang di bawah materialitas Rp120.000.000.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.* Secara kuantitatif di bawah materialitas, tetapi jika dikoreksi, laba Rp30.000.000 berubah menjadi **rugi Rp10.000.000**. Salah saji yang mengubah laba menjadi rugi adalah faktor kualitatif yang membuatnya material. `(ARENS p.209, Table 6-8)` Kasus ini juga menunjukkan mengapa materialitas perlu **direvisi** bila hasil aktual jauh dari proyeksi awal. `(ISA320 para. A14)`"
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 4 (Interpretasi): pilih tolok ukur.",
          "prompt": "Sebuah yayasan pendidikan nirlaba menerima hibah dari donor dan pemerintah. Pengguna utamanya adalah donor, yang ingin tahu apakah dana dipakai sesuai tujuan.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan (Interpretasi).* Untuk nirlaba, buku menyarankan total pendapatan atau total beban, karena keputusan pengguna adalah menilai apakah pengeluaran sesuai tujuan organisasi. Dengan rentang 1–3%, donor yang sensitif terhadap penyalahgunaan dana mengarah ke ujung bawah. ISA 320 memberi contoh 1 persen total pendapatan atau beban untuk nirlaba. Pilihan akhirnya pertimbangan profesional yang harus didokumentasikan. `(ARENS pp.202–203; ISA320 para. A8)`"
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
          "question": "**1. Jelaskan materialitas tanpa menyebut angka persentase.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* materialitas adalah batas besarnya salah saji yang mulai bisa mengubah keputusan orang yang memakai laporan keuangan. Karena itu cara menentukannya dimulai dari siapa penggunanya dan keputusan apa yang mereka ambil. `(ARENS pp.199–201)`"
            }
          ],
          "signal": "*Tanda belum paham:* langsung menjawab \"5 persen dari laba\"."
        },
        {
          "kind": "self-check",
          "question": "**2. Kenapa materialitas pelaksanaan harus lebih kecil dari materialitas keseluruhan? Jelaskan dengan contoh angka buatanmu.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* karena salah saji kecil yang masing-masing di bawah materialitas bisa menumpuk. Misalnya materialitas Rp100 juta, lalu ada empat salah saji yang tidak ditemukan masing-masing Rp30 juta: totalnya Rp120 juta, melebihi materialitas. Dengan menguji pada ambang yang lebih rendah, auditor punya ruang aman untuk salah saji yang tidak terdeteksi. `(ISA320 paras. 9, A13; ARENS p.204)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"supaya lebih teliti\" tanpa menjelaskan agregasi."
        },
        {
          "kind": "self-check",
          "question": "**3. Dua perusahaan sama-sama punya laba sebelum pajak Rp2 miliar. Perusahaan A akan dijual dengan harga berdasarkan laporan keuangan; perusahaan B tidak. Kenapa auditor bisa memakai persentase materialitas yang berbeda?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* pengguna laporan perusahaan A (penjual dan calon pembeli) jauh lebih sensitif terhadap salah saji karena harga ditentukan dari laporan itu, sehingga auditor memakai ujung bawah rentang persentase. Pengguna perusahaan B kurang sensitif, sehingga persentase lebih tinggi masih dapat diterima. `(ARENS p.203)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap materialitas pasti sama karena labanya sama."
        },
        {
          "kind": "self-check",
          "question": "**4. Kenapa salah saji Rp40 juta bisa material padahal materialitasnya Rp120 juta?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* karena materialitas juga dinilai dari sifat salah saji. Jika koreksi Rp40 juta mengubah laba Rp30 juta menjadi rugi Rp10 juta, keputusan pengguna bisa berubah drastis. Faktor kualitatif lain misalnya pengaruh pada covenant pinjaman atau pada kompensasi manajemen. `(ARENS p.209, Table 6-8)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"karena auditor boleh menentukan sendiri\"."
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
          "text": "**Kerangka jawaban soal hitung materialitas**"
        },
        {
          "kind": "ol",
          "items": [
            "Identifikasi pengguna utama dan keputusan mereka.",
            "Pilih tolok ukur dan beri alasan (Table 6-6; pertimbangkan volatilitas).",
            "Pilih persentase sesuai sensitivitas pengguna (Table 6-7) dan beri alasan.",
            "Hitung materialitas keseluruhan.",
            "Hitung materialitas pelaksanaan (50–75%) dengan alasan berbasis risiko; turunkan untuk akun berisiko bila perlu.",
            "Sebut ambang trivial dan apakah perlu materialitas spesifik.",
            "Tegaskan bahwa ini pertimbangan profesional yang didokumentasikan."
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
              "Materialitas keseluruhan vs pelaksanaan",
              "Berbasis pengguna vs berbasis risiko; untuk kesimpulan akhir vs untuk merencanakan dan mengevaluasi uji"
            ],
            [
              "Materialitas pelaksanaan vs spesifik",
              "Penyangga di bawah materialitas keseluruhan vs tingkat lebih rendah untuk pos yang sensitif bagi pengguna tertentu"
            ],
            [
              "Trivial vs tidak material",
              "Tidak perlu diakumulasi vs diakumulasi tetapi secara individual tidak mengubah keputusan"
            ],
            [
              "Kuantitatif vs kualitatif",
              "Besaran angka vs sifat (mengubah rugi menjadi laba, covenant, kompensasi)"
            ],
            [
              "Factual vs judgmental vs projected",
              "Pasti vs beda pertimbangan vs estimasi dari sampel"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
