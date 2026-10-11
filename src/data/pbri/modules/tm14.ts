// AKA201 TM14/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201-v2.mjs.
// The text is verbatim from the content package; figures come from aka201-fig-*.mjs. Change those and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM14_READING: Reading = {
  "tm": 14,
  "title": "Pengujian Pengendalian (TOC) dan Prosedur Substantif",
  "intro": "**Sumber utama:** Arens dkk., Ch.9, pp.294–321, dan Ch.10, pp.337–340. **Standar:** SA/ISA 330 paras. 4–23 dan A4–A60; SA/ISA 265 paras. 6–11 dan A1–A30; SA/ISA 315 (Revised 2019) sebagai rujukan balik ke TM13.",
  "objectives": [
    "Menjelaskan cara auditor memahami, mendokumentasikan, dan mengevaluasi sistem pengendalian internal, termasuk batas walk-through dan inquiry sebagai bukti.",
    "Menyusun penilaian awal control risk per asersi dengan control risk matrix, menganalisis defisiensi, dan menimbang pengendalian kompensasi.",
    "Memilih antara pendekatan substantif, gabungan (combined), dan pengujian pengendalian saja, serta menyebut keadaan yang mewajibkan tests of controls.",
    "Merancang tests of controls (jenis prosedur, extent, timing) dan mengevaluasi hasilnya, termasuk pada kontrol otomatis dan penggunaan alat bantu.",
    "Menjelaskan prosedur substantif yang wajib dilakukan dan cara melaporkan defisiensi pengendalian kepada pihak tata kelola dan manajemen."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: pengendalian yang tampak baik di atas kertas belum tentu berjalan",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** pemahaman pengendalian di TM13 menjawab apakah pengendalian ada dan dirancang baik. Pengujian pengendalian (test of controls, TOC) menjawab apakah pengendalian itu berjalan efektif sepanjang periode. Prosedur substantif menjawab apakah angkanya benar. Auditor memakai ketiganya dalam kombinasi yang ditentukan penilaian risiko. `(ARENS pp.302, 314; ISA330 para. 4)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan cakupan.** TM13 membahas lima komponen COSO dan pengendalian TI. TM ini memakai hasilnya untuk menilai control risk, memilih pendekatan audit, menguji pengendalian, menentukan prosedur substantif yang wajib, dan melaporkan defisiensi. Strategi audit menyeluruh, bauran prosedur, CAATs secara lebih luas, dan program audit dibahas di TM15. Penentuan ukuran sampel (Ch.11) tidak diuraikan di sini. `(ARENS pp.317, 338)`"
        },
        {
          "kind": "figure",
          "title": "Peta TM14: dari pemahaman pengendalian sampai pelaporan defisiensi",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 724\" width=\"100%\" role=\"img\" aria-labelledby=\"f14-peta-t f14-peta-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f14-peta-t\">Peta TM14: dari pemahaman pengendalian sampai pelaporan defisiensi</title><desc id=\"f14-peta-d\">Lima kartu berurutan dari pemahaman pengendalian sampai pelaporan defisiensi.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"724\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">1. Pahami dan evaluasi pengendalian</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Walk-through, narasi, flowchart,</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">kuesioner. Hasilnya desain dan</text><text class=\"svg-text\" x=\"34\" y=\"126\" font-size=\"18\">implementasi.</text><rect class=\"svg-title\" x=\"238.5\" y=\"146\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 157 L240 170 L248 157 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"172\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"202\" font-size=\"19\" font-weight=\"800\">2. Nilai control risk awal per</text><text class=\"svg-title\" x=\"34\" y=\"226\" font-size=\"19\" font-weight=\"800\">asersi</text><text class=\"svg-text\" x=\"34\" y=\"254\" font-size=\"18\">Control risk matrix dan analisis</text><text class=\"svg-text\" x=\"34\" y=\"278\" font-size=\"18\">defisiensi.</text><rect class=\"svg-title\" x=\"238.5\" y=\"298\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 309 L240 322 L248 309 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"324\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"354\" font-size=\"19\" font-weight=\"800\">3. Pilih pendekatan audit</text><text class=\"svg-text\" x=\"34\" y=\"382\" font-size=\"18\">Substantif, gabungan, atau tests of</text><text class=\"svg-text\" x=\"34\" y=\"406\" font-size=\"18\">controls saja.</text><rect class=\"svg-title\" x=\"238.5\" y=\"426\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 437 L240 450 L248 437 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"452\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"482\" font-size=\"19\" font-weight=\"800\">4. Uji kontrol bila diandalkan, lalu</text><text class=\"svg-title\" x=\"34\" y=\"506\" font-size=\"19\" font-weight=\"800\">prosedur substantif</text><text class=\"svg-text\" x=\"34\" y=\"534\" font-size=\"18\">Extent dan timing mengikuti penilaian</text><text class=\"svg-text\" x=\"34\" y=\"558\" font-size=\"18\">risiko dan hasil pengujian.</text><rect class=\"svg-title\" x=\"238.5\" y=\"578\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 589 L240 602 L248 589 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"604\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"634\" font-size=\"19\" font-weight=\"800\">5. Laporkan defisiensi</text><text class=\"svg-text\" x=\"34\" y=\"662\" font-size=\"18\">Tertulis untuk defisiensi signifikan,</text><text class=\"svg-text\" x=\"34\" y=\"686\" font-size=\"18\">kepada pihak tata kelola dan manajemen.</text></svg>",
          "overview": {
            "heading": "Peta TM14: dari pemahaman pengendalian sampai pelaporan defisiensi",
            "cards": [
              {
                "title": "1. Pahami dan evaluasi pengendalian",
                "subtitle": "",
                "items": [
                  "Walk-through, narasi, flowchart, kuesioner",
                  "Hasilnya desain dan implementasi"
                ],
                "takeaway": ""
              },
              {
                "title": "2. Nilai control risk awal per asersi",
                "subtitle": "",
                "items": [
                  "Control risk matrix dan analisis defisiensi"
                ],
                "takeaway": ""
              },
              {
                "title": "3. Pilih pendekatan audit",
                "subtitle": "",
                "items": [
                  "Substantif, gabungan, atau tests of controls saja"
                ],
                "takeaway": ""
              },
              {
                "title": "4. Uji kontrol bila diandalkan, lalu prosedur substantif",
                "subtitle": "",
                "items": [
                  "Extent dan timing mengikuti penilaian risiko dan hasil pengujian"
                ],
                "takeaway": ""
              },
              {
                "title": "5. Laporkan defisiensi",
                "subtitle": "",
                "items": [
                  "Tertulis untuk defisiensi signifikan, kepada pihak tata kelola dan manajemen"
                ],
                "takeaway": ""
              }
            ],
            "footer": "Sumber: Figure 9-1 dan 9-2 (ARENS pp.296–297); ISA330 paras. 4–23."
          },
          "caption": "Gambar 14.1: Peta TM14 dari pemahaman pengendalian sampai pelaporan defisiensi. Disusun dari Figure 9-1 dan 9-2 (ARENS pp.296–297) dan ISA330 paras. 4–23.",
          "altText": "Lima langkah berurutan: pahami dan evaluasi pengendalian, nilai control risk awal per asersi, pilih pendekatan audit, uji kontrol bila diandalkan lalu lakukan prosedur substantif, dan laporkan defisiensi pengendalian."
        },
        {
          "kind": "callout",
          "variant": "quote",
          "text": "**Definisi.** Test of controls adalah prosedur audit yang dirancang untuk mengevaluasi efektivitas operasi pengendalian dalam mencegah, atau mendeteksi dan mengoreksi, salah saji material pada tingkat asersi. Substantive procedure adalah prosedur audit yang dirancang untuk mendeteksi salah saji material pada tingkat asersi, dan terdiri dari tests of details (atas kelas transaksi, saldo akun, dan pengungkapan) serta substantive analytical procedures. `(ISA330 para. 4(a)–(b))`"
        },
        {
          "kind": "p",
          "text": "Buku membuka bab ini dengan General Cable Corporation (GCC), produsen kabel tembaga, aluminium, dan serat optik. Anak usahanya di Brasil menyajikan persediaan tembaga terlalu tinggi dan harga pokok penjualan terlalu rendah dari 2008 sampai pertengahan 2012. Penyebabnya persediaan yang hilang dan kesalahan pencatatan di sistem ERP. Perusahaan tidak menjaga persediaan secara fisik dengan memadai dan tidak merekonsiliasi saldo persediaan dengan kuantitas yang benar-benar ada. Personel akuntansi menghitung nilai persediaan secara manual di sebuah spreadsheet lalu memasukkannya ke buku besar, dan tidak ada pemisahan tugas antara pembuat dan pemberi persetujuan jurnal manual. `(ARENS pp.294–295)`"
        },
        {
          "kind": "p",
          "text": "Kontroler anak usaha akhirnya menemukan ketidakkonsistenan di buku besar dan melapor ke eksekutif segmen. Eksekutif segmen justru menyembunyikannya dari manajemen senior dan auditor, sampai CFO anak usaha mengancam akan mengungkapkannya pada September 2012. GCC menyajikan kembali laporan keuangannya dan merombak struktur pelaporan keuangan. `(ARENS p.295)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi.** Kasus ini mengaitkan tiga hal yang dibahas di TM ini. Pertama, kelemahan di control activities (kontrol fisik, rekonsiliasi, pemisahan tugas) bisa menghasilkan salah saji material, sehingga auditor harus menemukannya untuk menilai control risk. Kedua, kontrol yang tampak ada di atas kertas gagal ketika orang yang menjalankan akuntansi juga bisa menembusnya, sehingga bukti penerapan saja tidak cukup. Ketiga, ketika pengendalian lemah, jawaban auditor adalah prosedur substantif yang lebih luas pada persediaan. Pemetaan ini susunan penulis. `(ARENS pp.295, 303)`"
        },
        {
          "kind": "p",
          "text": "Cara membaca TM ini: section 1 dan 2 membahas cara memahami dan mengevaluasi pengendalian. Section 3 dan 4 menurunkan hasilnya menjadi penilaian control risk dan pilihan pendekatan. Section 5 sampai 7 membahas pengujian pengendalian. Section 8 membahas prosedur substantif yang wajib, dan section 9 membahas pelaporan defisiensi."
        },
        {
          "kind": "h3",
          "text": "Kesalahpahaman umum"
        },
        {
          "kind": "table",
          "title": "Kesalahpahaman umum tentang pengujian pengendalian dan prosedur substantif",
          "headers": [
            "Anggapan yang keliru",
            "Yang benar",
            "Sumber"
          ],
          "rows": [
            [
              "\"Walk-through membuktikan pengendalian berjalan efektif.\"",
              "Walk-through memastikan pengendalian yang dirancang manajemen sudah diterapkan. Ia bukan bukti yang cukup bahwa pengendalian bekerja efektif. Itu dicapai lewat tests of controls.",
              "ARENS p.298"
            ],
            [
              "\"Wawancara dengan staf klien cukup untuk menguji pengendalian.\"",
              "Inquiry saja tidak cukup untuk menguji efektivitas operasi, jadi harus digabung dengan inspeksi, observasi, atau reperformance.",
              "ISA330 para. 10(a), A26; ARENS p.315"
            ],
            [
              "\"Bila control risk rendah, prosedur substantif boleh ditiadakan.\"",
              "Prosedur substantif tetap wajib untuk setiap kelas transaksi, saldo akun, dan pengungkapan yang material, berapa pun risiko yang dinilai.",
              "ISA330 para. 18; ARENS p.339"
            ],
            [
              "\"Auditor selalu wajib menguji pengendalian.\"",
              "TOC wajib hanya bila auditor berekspektasi pengendalian beroperasi efektif dan mengandalkannya, atau bila prosedur substantif saja tidak memberi bukti yang cukup.",
              "ISA330 para. 8; ARENS p.302"
            ],
            [
              "\"Bila prosedur substantif tidak menemukan salah saji, pengendalian pasti efektif.\"",
              "Tidak adanya salah saji yang ditemukan prosedur substantif bukan bukti bahwa pengendalian atas asersi itu efektif.",
              "ISA330 para. 16"
            ],
            [
              "\"Material weakness berarti salah saji material sudah terjadi.\"",
              "Material weakness berarti ada kemungkinan yang beralasan bahwa pengendalian tidak mencegah atau mendeteksi salah saji material tepat waktu. Salah sajinya belum tentu terjadi.",
              "ARENS p.303"
            ],
            [
              "\"Kontrol otomatis yang sekali diuji berlaku selamanya.\"",
              "Kontrol otomatis konsisten selama program tidak berubah. Keandalannya bergantung pada general IT controls dan ada tidaknya perubahan.",
              "ARENS p.317; ISA330 paras. A29, A36"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Memahami dan mendokumentasikan sistem pengendalian",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** auditor wajib memahami pengendalian yang relevan di semua audit, dengan prosedur penilaian risiko yang tidak hanya berupa inquiry. Hasil pemahaman didokumentasikan lewat narasi, flowchart, atau kuesioner, lalu dievaluasi pada empat sisi: desain, implementasi, kompetensi pelaksana, dan kecukupan TI."
        },
        {
          "kind": "h3",
          "text": "Prosedur untuk memahami pengendalian"
        },
        {
          "kind": "p",
          "text": "Tujuan auditor ada dua: memahami pengendalian dan mengevaluasi tiap komponen sistem pengendalian. Prosedur penilaian risiko yang dipakai adalah inspeksi, inquiry kepada personel entitas, observasi, dan reperformance, dan inquiry saja tidak cukup untuk mengevaluasi pengendalian di komponen mana pun. `(ARENS p.296)`"
        },
        {
          "kind": "table",
          "title": "Prosedur penilaian risiko untuk memahami sistem pengendalian",
          "headers": [
            "Prosedur",
            "Yang dikerjakan auditor",
            "Yang dihasilkan",
            "Sumber"
          ],
          "rows": [
            [
              "Memperbarui pengalaman audit sebelumnya",
              "Kecuali pada penugasan awal, auditor sudah memegang informasi pengendalian tahun lalu. Auditor mengecek terutama apakah pengendalian yang dulu tidak efektif sudah diperbaiki.",
              "Titik awal pemahaman dan daftar area yang perlu dicek ulang",
              "ARENS p.296"
            ],
            [
              "Inquiry kepada manajemen, supervisor, dan staf",
              "Meminta mereka menjelaskan tugasnya, lalu menilai apakah mereka paham tugasnya dan mengerjakan apa yang tertulis di dokumentasi pengendalian",
              "Penjelasan tentang apa yang seharusnya terjadi",
              "ARENS p.296"
            ],
            [
              "Memeriksa dokumen dan catatan",
              "Memeriksa dokumen, catatan, dan berkas komputer yang sudah selesai untuk menilai apakah yang digambarkan di flowchart dan narasi sudah diterapkan",
              "Bukti bahwa pengendalian meninggalkan jejak",
              "ARENS p.298"
            ],
            [
              "Mengobservasi aktivitas dan operasi",
              "Melihat personel menjalankan aktivitas akuntansi dan pengendalian, termasuk saat membuat dokumen. Pada sistem tanpa kertas, auditor dapat menjalankan transaksi uji atau meminta bantuan spesialis komputer.",
              "Keyakinan bahwa pengendalian diterapkan",
              "ARENS p.298"
            ],
            [
              "Walk-through",
              "Menelusuri satu transaksi dari asalnya melalui sistem informasi sampai tercatat, memakai dokumen dan TI yang sama dengan personel klien. Di tiap tahap auditor bertanya, mengobservasi, dan memeriksa dokumen.",
              "Bukti desain dan implementasi, bukan efektivitas",
              "ARENS p.298"
            ],
            [
              "Memahami general IT controls",
              "Mewawancarai personel TI dan pengguna kunci, memeriksa dokumentasi sistem (flowchart, manual pengguna, permintaan perubahan program, hasil uji sistem), dan menelaah kuesioner yang diisi staf TI",
              "Gambaran fungsi TI, perubahan perangkat lunak, dan rencana perubahan",
              "ARENS p.298"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Walk-through paling baik dipahami sebagai gabungan inquiry, observasi, dan inspeksi dalam satu penelusuran. Buku menyebutnya jenis reperformance yang efisien untuk menilai desain dan implementasi. Walk-through juga memberi kesempatan mengajukan pertanyaan yang menggali kemampuan dan kompetensi tiap orang, serta menanyakan apakah ia pernah diminta menembus pengendalian dan mengapa. `(ARENS p.298)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Walk-through dan observasi menunjukkan keadaan pada satu titik waktu. Sebuah pengendalian yang terlihat berjalan hari ini belum terbukti berjalan konsisten selama setahun. Soal yang meminta kesimpulan \"pengendalian efektif\" dari walk-through saja menguji apakah kamu membedakan implementasi dari efektivitas operasi. `(ARENS p.298; ISA330 para. A26)`"
        },
        {
          "kind": "p",
          "text": "Untuk general IT controls, buku menganjurkan memakai beberapa pendekatan sekaligus karena masing-masing memberi informasi berbeda. Wawancara dengan CIO dan analis sistem memberi gambaran operasi seluruh fungsi TI, perubahan perangkat lunak akuntansi, dan rencana perubahan. Telaah permintaan perubahan program dan hasil uji sistem membantu mengidentifikasi perubahan pada aplikasi. `(ARENS p.298)`"
        },
        {
          "kind": "h3",
          "text": "Tiga cara mendokumentasikan"
        },
        {
          "kind": "p",
          "text": "Ada tiga cara umum mendokumentasikan sistem pengendalian: narasi, flowchart, dan internal control questionnaire (ICQ). Ketiganya boleh dipakai sendiri-sendiri atau digabung, dan pilihannya mengikuti keadaan klien. Narasi cukup untuk sistem sederhana, sedangkan flowchart lebih cocok untuk sistem yang kompleks. `(ARENS p.298)`"
        },
        {
          "kind": "table",
          "title": "Perbandingan narasi, flowchart, dan kuesioner pengendalian internal",
          "headers": [
            "Alat",
            "Isi",
            "Kelebihan",
            "Kelemahan atau catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Narasi",
              "Uraian tertulis tentang pengendalian klien, mencakup asal, pemrosesan, dan disposisi dokumen dan catatan, serta aktivitas pengendalian yang relevan",
              "Cukup untuk sistem sederhana",
              "Kurang memberi gambaran visual atas alur dan pemisahan tugas",
              "ARENS p.298"
            ],
            [
              "Flowchart",
              "Representasi simbolik dan diagram atas dokumen klien dan urutan alirnya. Memuat empat karakteristik yang sama dengan narasi.",
              "Lebih mudah dibaca dan diperbarui daripada narasi, dan membantu melihat kekurangan termasuk pemisahan tugas",
              "Butuh waktu menyusun untuk sistem besar",
              "ARENS p.299"
            ],
            [
              "Internal control questionnaire",
              "Serangkaian pertanyaan per area audit, termasuk lingkungan pengendalian, biasanya dijawab ya atau tidak. Jawaban \"tidak\" menunjukkan potensi defisiensi.",
              "Berfungsi sebagai daftar periksa yang mengingatkan auditor pada berbagai jenis pengendalian yang seharusnya ada",
              "Tidak memberi gambaran menyeluruh atas sistem. Kuesioner yang dirancang buruk dapat membuat evaluasi bias.",
              "ARENS p.299"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Flowchart dan kuesioner paling berguna bila dipakai bersama. Flowchart memberi gambaran sistem, sedangkan kuesioner mengingatkan auditor pada pengendalian yang seharusnya ada, untuk memahami desain dan mengidentifikasi defisiensi di control activities. `(ARENS p.299)`"
        },
        {
          "kind": "p",
          "text": "Narasi yang baik memuat empat karakteristik. Buku menggunakan penjualan sebagai contoh."
        },
        {
          "kind": "table",
          "title": "Empat karakteristik narasi sistem pengendalian yang memadai",
          "headers": [
            "No",
            "Karakteristik",
            "Contoh dari buku",
            "Sumber"
          ],
          "rows": [
            [
              "1",
              "Asal setiap dokumen dan catatan",
              "Dari mana pesanan pelanggan datang dan bagaimana faktur penjualan dibuat",
              "ARENS p.298"
            ],
            [
              "2",
              "Seluruh pemrosesan yang terjadi",
              "Bila nilai penjualan ditentukan program komputer yang mengalikan kuantitas terkirim dengan harga standar tersimpan, proses itu dijelaskan",
              "ARENS p.298"
            ],
            [
              "3",
              "Disposisi setiap dokumen dan catatan",
              "Pembaruan berkas komputer, cara menyimpan dokumen, dan pengiriman ke pelanggan atau pemusnahan",
              "ARENS p.299"
            ],
            [
              "4",
              "Indikasi pengendalian yang relevan untuk menilai control risk",
              "Pemisahan tugas (mencatat kas dipisahkan dari memegang kas), otorisasi dan persetujuan (persetujuan kredit), dan verifikasi internal (membandingkan harga jual dengan kontrak)",
              "ARENS p.299"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "h3",
          "text": "Kuesioner di Hillsburg: tingkat entitas dan tingkat proses"
        },
        {
          "kind": "p",
          "text": "Buku memberi dua contoh kuesioner untuk Hillsburg Hardware Limited. Yang pertama menilai pengendalian tingkat entitas, yaitu lingkungan pengendalian, sistem informasi pelaporan keuangan, penilaian risiko, dan pemantauan, yang berdampak luas pada laporan keuangan. Yang kedua menilai control activities pada proses penjualan, dengan fokus berbeda. `(ARENS pp.299–301)`"
        },
        {
          "kind": "table",
          "title": "Excerpt kuesioner pengendalian tingkat entitas Hillsburg untuk risiko integritas dan nilai etika",
          "headers": [
            "Kemungkinan pengendalian",
            "Dokumentasi pendukung",
            "Inquiry dan observasi oleh auditor",
            "Sumber"
          ],
          "rows": [
            [
              "1. Manajemen terus menunjukkan komitmen pada standar etika tinggi lewat kata dan tindakan",
              "Manajemen berkala menjalankan survei karyawan anonim tentang standar etika dan tone at the top",
              "Mewawancarai manajemen kunci termasuk CFO dan CEO, serta menelaah hasil survei",
              "ARENS p.300"
            ],
            [
              "2. Manajemen menghapus atau mengurangi insentif yang dapat mendorong perilaku tidak jujur",
              "Kriteria evaluasi kinerja dan paket kompensasi",
              "Mewawancarai manajemen kunci termasuk Direktur SDM, CFO, CEO, dan staf penjualan",
              "ARENS p.300"
            ],
            [
              "3. Ada kode etik atau yang setara",
              "Kode etik dipasang di situs web perusahaan",
              "Menelaah kode etik dan mewawancarai karyawan tentang pemahaman mereka",
              "ARENS p.300"
            ],
            [
              "4. Karyawan paham perilaku yang boleh dan tidak boleh serta tahu apa yang harus dilakukan bila menemui pelanggaran",
              "Karyawan wajib mengikuti pelatihan dan menandatangani pernyataan tahunan. Pihak ketiga mengelola hotline pelaporan.",
              "Menelaah dokumentasi pelatihan dan formulir pernyataan, serta laporan insiden dari pihak ketiga",
              "ARENS p.300"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Kuesioner entitas pada contoh ini mencatat, untuk tiap pengendalian, apakah ada, apa dokumentasinya, inquiry dan observasi apa yang dilakukan, apakah diterapkan, dan apakah risiko termitigasi. Contoh itu memperlihatkan bahwa selain inquiry, auditor juga menelaah dokumen, sehingga ada bukti yang cukup untuk menilai desain dan implementasi. `(ARENS pp.300, 303)`"
        },
        {
          "kind": "p",
          "text": "Kuesioner kedua berisi tujuan A sampai G yang masing-masing menjawab satu asersi transaksi penjualan. Pertanyaan dijawab ya, tidak, atau tidak berlaku, dengan kolom catatan. Pemetaan tujuan ke asersi di bawah mengikuti judul kolom di Figure 9-6."
        },
        {
          "kind": "table",
          "title": "Tujuan kuesioner pengendalian pendapatan Hillsburg dan asersi yang dijawab",
          "headers": [
            "Tujuan",
            "Asersi",
            "Contoh pertanyaan",
            "Catatan pengisian dalam buku",
            "Sumber"
          ],
          "rows": [
            [
              "A. Penjualan tercatat adalah untuk pengiriman yang benar-benar terjadi kepada pelanggan yang ada",
              "Occurrence",
              "Apakah kredit pelanggan disetujui pejabat yang berwenang dan akses mengubah batas kredit dibatasi? Apakah faktur penjualan bernomor urut dan dipertanggungjawabkan?",
              "Persetujuan oleh CFO. Faktur bernomor urut tetapi tidak dipertanggungjawabkan, sehingga perlu pengujian substantif tambahan.",
              "ARENS pp.301, 307"
            ],
            [
              "B. Transaksi penjualan yang ada tercatat",
              "Completeness",
              "Apakah catatan pengiriman dipelihara? Apakah dokumen pengiriman dikendalikan dari kantor dan bernomor urut yang dipertanggungjawabkan?",
              "Beberapa jawaban diisi oleh Pam Dilley",
              "ARENS pp.301, 307"
            ],
            [
              "C. Penjualan tercatat sesuai jumlah barang terkirim dan ditagih dengan benar",
              "Accuracy (penagihan)",
              "Apakah kuantitas di dokumen pengiriman dibandingkan secara independen dengan faktur? Apakah daftar harga yang berwenang dipakai dan akses ke master harga dibatasi? Apakah pernyataan bulanan dikirim ke pelanggan?",
              "Tidak ada catatan khusus",
              "ARENS pp.301, 307"
            ],
            [
              "D. Transaksi penjualan masuk master file dan diringkas dengan benar",
              "Accuracy (master file)",
              "Apakah komputer memposting transaksi otomatis ke master file piutang dan buku besar? Apakah master file piutang direkonsiliasi dengan buku besar tiap bulan?",
              "Rekonsiliasi dilakukan Erma, kepala akuntan",
              "ARENS pp.301, 307"
            ],
            [
              "E. Transaksi penjualan diklasifikasikan dengan benar",
              "Classification",
              "Apakah ada pembandingan independen antara penjualan tercatat dan bagan akun?",
              "Semua penjualan secara kredit dan hanya ada satu akun penjualan",
              "ARENS pp.301, 307"
            ],
            [
              "F. Penjualan dicatat pada tanggal yang benar",
              "Cutoff",
              "Apakah tanggal di dokumen pengiriman dibandingkan secara independen dengan tanggal pencatatan?",
              "Pengiriman yang tidak cocok dan tidak tercatat ditinjau mingguan",
              "ARENS pp.301, 307"
            ],
            [
              "G. Transaksi penjualan diagregasi dan diungkapkan dengan tepat",
              "Presentation",
              "Apakah ada identifikasi penjualan ke pihak berelasi dan pelanggan utama?",
              "Pihak berelasi dikodekan di master file pelanggan. Laporan penjualan per pelanggan dipakai untuk mengenali pelanggan utama.",
              "ARENS pp.301, 307"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Jawaban \"tidak\" pada kuesioner menandai potensi defisiensi, bukan defisiensi yang sudah pasti. Auditor perlu menimbang apakah ada pengendalian lain yang menutupnya, seperti pada tujuan F, tempat tinjauan mingguan atas pengiriman yang tidak cocok tercatat di kolom catatan. `(ARENS pp.299, 301)`"
        },
        {
          "kind": "pendalaman",
          "title": "Tone at the top dan jebakan penilaian: mengapa bukti positif datang lebih dulu",
          "blocks": [
            {
              "kind": "p",
              "text": "Buku mengutip penelitian Regan Schmidt tentang penilaian auditor atas tone at the top. Schmidt memberi auditor 50 komentar dari kontroler perusahaan hipotetis tentang tone at the top, mirip catatan yang akan didokumentasikan auditor dalam kuesioner lingkungan pengendalian. Sebagian auditor diminta mengingat bukti positif lebih dulu lalu negatif, sebagian sebaliknya. `(ARENS p.299)`"
            },
            {
              "kind": "p",
              "text": "Auditor yang mengingat bukti positif lebih dulu memiliki gambaran mental yang lebih menguntungkan tentang tone at the top dibandingkan auditor yang awalnya mengingat bukti negatif. Bias menguntungkan ini terbawa ke penilaian lain di tahap audit berikutnya, yaitu penilaian lingkungan pengendalian dan penilaian keandalan penjelasan manajemen atas hasil prosedur analitis. Bias ini muncul meskipun organisasi pernah mengalami fraud. `(ARENS p.299)`"
            },
            {
              "kind": "p",
              "text": "Schmidt menawarkan dua obat: dokumentasi dan reviu. Penilaian lingkungan pengendalian sebaiknya distrukturkan agar bukti positif tidak menekan bukti negatif, dan reviu kertas kerja memuat bukti negatif tentang tidak efektifnya lingkungan pengendalian. `(ARENS p.299)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Bagi mahasiswa, pelajaran praktisnya adalah menulis bukti negatif sama lengkapnya dengan bukti positif sebelum menyimpulkan. Tabel kuesioner entitas di atas memuat kolom \"risiko termitigasi\" untuk tiap baris, dan kolom itu hanya bermakna bila baris yang jawabannya tidak mendukung ikut ditulis. Pembacaan ini susunan penulis."
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Empat sisi evaluasi"
        },
        {
          "kind": "p",
          "text": "Auditor mendokumentasikan sistem pengendalian untuk mengevaluasi kekuatan dan kelemahannya. Buku merangkum evaluasi itu dalam empat hal. `(ARENS p.300)`"
        },
        {
          "kind": "table",
          "title": "Empat sisi evaluasi sistem pengendalian internal",
          "headers": [
            "Sisi",
            "Pertanyaan",
            "Contoh",
            "Sumber"
          ],
          "rows": [
            [
              "Desain",
              "Apakah pengendalian mampu mencegah, atau mendeteksi dan mengoreksi, salah saji material?",
              "Persetujuan kredit yang memang membatasi penjualan ke pelanggan di atas batas",
              "ARENS p.300"
            ],
            [
              "Implementasi",
              "Apakah pengendalian ada dan dipakai perusahaan?",
              "Pengendalian tampak dijalankan saat walk-through",
              "ARENS p.300"
            ],
            [
              "Kompetensi pelaksana",
              "Apakah orang yang menjalankannya kompeten?",
              "Staf junior yang tidak paham tujuan rekonsiliasi",
              "ARENS p.300"
            ],
            [
              "Kecukupan TI",
              "Apakah TI menangkap informasi yang relevan dan menyediakan informasi yang relevan?",
              "Tanda tangan elektronik untuk persetujuan",
              "ARENS p.300"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Hasil keempat sisi evaluasi ini dipakai pada section berikutnya. Untuk komponen tidak langsung, hasilnya mengarah ke risiko tingkat laporan keuangan. Untuk control activities, hasilnya mengarah ke penilaian control risk per asersi."
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Mengevaluasi komponen: dari lingkungan pengendalian sampai control activities",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** tiga komponen tidak langsung (lingkungan pengendalian, penilaian risiko, pemantauan) dievaluasi untuk menilai risiko tingkat laporan keuangan. Sistem informasi dan control activities dievaluasi untuk menilai risiko tingkat asersi. Kelemahan material pada komponen tidak langsung menaikkan RMM secara luas, sedangkan kelemahan di control activities menaikkan RMM pada asersi tertentu."
        },
        {
          "kind": "h3",
          "text": "Tiga komponen tidak langsung"
        },
        {
          "kind": "p",
          "text": "Karena sifatnya, lingkungan pengendalian, penilaian risiko, dan pemantauan berdampak tidak langsung atau menyeluruh pada cara transaksi diproses dan cara risiko tingkat asersi ditangani. Table 9-1 buku merangkum fokus evaluasinya dan dampaknya pada RMM bila ditemukan kelemahan material. `(ARENS pp.303–304)`"
        },
        {
          "kind": "table",
          "title": "Fokus evaluasi lingkungan pengendalian, penilaian risiko, dan pemantauan serta dampaknya pada RMM",
          "headers": [
            "Komponen",
            "Fokus evaluasi",
            "Dampak pada RMM bila ada material weakness",
            "Penjelasan buku",
            "Sumber"
          ],
          "rows": [
            [
              "Lingkungan pengendalian",
              "Apakah manajemen dan pihak tata kelola membangun budaya kejujuran, apakah lingkungan itu menjadi fondasi komponen lain, dan apakah defisiensi yang ditemukan merusak komponen lain",
              "RMM naik pada tingkat laporan keuangan secara menyeluruh",
              "Berdampak tidak langsung pada banyak proses, aktivitas pengendalian, dan asersi terkait, sehingga bersifat menyeluruh",
              "ARENS p.304"
            ],
            [
              "Proses penilaian risiko",
              "Apakah proses itu sesuai dengan sifat dan kompleksitas organisasi",
              "RMM naik pada tingkat laporan keuangan atau tingkat asersi*",
              "Berdampak menyeluruh karena risiko bisnis klien tidak diidentifikasi dan dikendalikan, dan aktivitas pengendalian tidak dirancang untuk menjawabnya",
              "ARENS p.304"
            ],
            [
              "Pemantauan",
              "Apakah proses pemantauan sesuai dengan sifat dan kompleksitas organisasi",
              "RMM naik pada tingkat laporan keuangan*",
              "Pemantauan yang tidak efektif meningkatkan potensi override pengendalian, sehingga risikonya menyeluruh",
              "ARENS p.304"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "*Kelemahan bisa saja terbatas pada proses tertentu dan pengendalian terkaitnya, sehingga dampaknya pada RMM tingkat asersi. `(ARENS p.304)`"
        },
        {
          "kind": "figure",
          "title": "Dua jalur evaluasi sistem pengendalian",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 668\" width=\"100%\" role=\"img\" aria-labelledby=\"f14-evaluasi-t f14-evaluasi-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f14-evaluasi-t\">Dua jalur evaluasi sistem pengendalian</title><desc id=\"f14-evaluasi-d\">Dua kartu jalur evaluasi, satu kartu empat sisi evaluasi, dan satu kartu tentang RMM bila kontrol tidak diandalkan.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"668\" rx=\"14\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"20\" width=\"440\" height=\"148\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Jalur 1: komponen tidak langsung</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Lingkungan pengendalian, penilaian</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">risiko, pemantauan</text><text class=\"svg-text\" x=\"34\" y=\"126\" font-size=\"18\">Bila lemah dan material: RMM naik pada</text><text class=\"svg-text\" x=\"34\" y=\"150\" font-size=\"18\">tingkat laporan keuangan</text><rect class=\"svg-title\" x=\"238.5\" y=\"170\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 181 L240 194 L248 181 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"196\" width=\"440\" height=\"148\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"226\" font-size=\"19\" font-weight=\"800\">Jalur 2: sistem informasi dan</text><text class=\"svg-title\" x=\"34\" y=\"250\" font-size=\"19\" font-weight=\"800\">control activities</text><text class=\"svg-text\" x=\"34\" y=\"278\" font-size=\"18\">Dievaluasi per asersi</text><text class=\"svg-text\" x=\"34\" y=\"302\" font-size=\"18\">Hasilnya penilaian awal control risk</text><text class=\"svg-text\" x=\"34\" y=\"326\" font-size=\"18\">tiap asersi</text><rect class=\"svg-title\" x=\"238.5\" y=\"346\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 357 L240 370 L248 357 Z\"/><rect class=\"svg-subcard\" x=\"20\" y=\"372\" width=\"440\" height=\"172\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"402\" font-size=\"19\" font-weight=\"800\">Empat sisi evaluasi tiap</text><text class=\"svg-title\" x=\"34\" y=\"426\" font-size=\"19\" font-weight=\"800\">pengendalian</text><text class=\"svg-text\" x=\"34\" y=\"454\" font-size=\"18\">Desain</text><text class=\"svg-text\" x=\"34\" y=\"478\" font-size=\"18\">Implementasi</text><text class=\"svg-text\" x=\"34\" y=\"502\" font-size=\"18\">Kompetensi pelaksana</text><text class=\"svg-text\" x=\"34\" y=\"526\" font-size=\"18\">Kecukupan TI</text><rect class=\"svg-title\" x=\"238.5\" y=\"546\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 557 L240 570 L248 557 Z\"/><rect class=\"svg-badge-purple\" x=\"20\" y=\"572\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"602\" font-size=\"19\" font-weight=\"800\">Bila kontrol tidak diandalkan</text><text class=\"svg-text\" x=\"34\" y=\"630\" font-size=\"18\">RMM sama dengan inherent risk</text></svg>",
          "overview": {
            "heading": "Dua jalur evaluasi sistem pengendalian",
            "cards": [
              {
                "title": "Jalur 1: komponen tidak langsung",
                "subtitle": "",
                "items": [
                  "Lingkungan pengendalian, penilaian risiko, pemantauan"
                ],
                "takeaway": "Bila lemah dan material: RMM naik pada tingkat laporan keuangan."
              },
              {
                "title": "Jalur 2: sistem informasi dan control activities",
                "subtitle": "",
                "items": [
                  "Dievaluasi per asersi"
                ],
                "takeaway": "Hasilnya penilaian awal control risk tiap asersi."
              },
              {
                "title": "Empat sisi evaluasi tiap pengendalian",
                "subtitle": "",
                "items": [
                  "Desain",
                  "Implementasi",
                  "Kompetensi pelaksana",
                  "Kecukupan TI"
                ],
                "takeaway": ""
              },
              {
                "title": "Bila kontrol tidak diandalkan",
                "subtitle": "",
                "items": [
                  "RMM sama dengan inherent risk"
                ],
                "takeaway": ""
              }
            ],
            "footer": "Sumber: Figure 9-2 (ARENS p.297); Table 9-1 (ARENS p.304); ARENS pp.300, 303–305."
          },
          "caption": "Gambar 14.2: Dua jalur evaluasi sistem pengendalian. Disusun dari Figure 9-2 (ARENS p.297), Table 9-1 (ARENS p.304), dan teks ARENS pp.300, 303–305.",
          "altText": "Dua jalur evaluasi. Jalur pertama untuk komponen tidak langsung, yaitu lingkungan pengendalian, penilaian risiko, dan pemantauan, yang bila lemah dan material menaikkan RMM pada tingkat laporan keuangan. Jalur kedua untuk sistem informasi dan control activities, yang dievaluasi per asersi dan menghasilkan penilaian awal control risk. Keduanya memakai empat sisi evaluasi: desain, implementasi, kompetensi pelaksana, dan kecukupan TI. Bila kontrol tidak diandalkan, RMM sama dengan inherent risk."
        },
        {
          "kind": "p",
          "text": "Gambar di atas menunjukkan dua jalur evaluasi. Pada kuesioner entitas Hillsburg, auditor mencatat di kolom kedua dari terakhir apakah pengendalian efektif mengurangi risiko tertentu. Catatan itu didukung inspeksi dan bukan inquiry saja, sehingga auditor memegang bukti yang cukup untuk menilai desain dan implementasi. `(ARENS p.303)`"
        },
        {
          "kind": "pendalaman",
          "title": "SISO: ketika orang dalam lingkaran istimewa bebas dari kontrol (Auditing in Action 9-2)",
          "blocks": [
            {
              "kind": "p",
              "text": "Settlement and Integration Services Organization (SISO) didirikan tahun 1990 oleh Morteza Jafarpour, seorang imigran, untuk membantu imigran menavigasi layanan yang tersedia. Pada puncaknya SISO adalah salah satu lembaga pemukiman terbesar di Ontario selatan, dengan anggaran tahunan sekitar 15 juta dolar, melayani lebih dari 8.000 imigran per tahun, mendukung 400 pengungsi yang dibantu pemerintah, dan mempekerjakan lebih dari 150 orang. `(ARENS p.304)`"
            },
            {
              "kind": "p",
              "text": "Pada 2010, kurang dari dua tahun setelah melaporkan surplus, lembaga itu bangkrut. Citizenship and Immigration Canada (CIC) mencabut seluruh komitmen pendanaan setelah audit sendiri menemukan \"irregularitas keuangan\" yang signifikan. Total fraud paling sedikit 4 juta dolar dan beberapa eksekutif SISO dinyatakan bersalah. Modusnya mencakup klaim yang digelembungkan ke CIC untuk gaji, biaya, dan pembelian, pembuatan dokumen palsu untuk menutup jejak, serta pembayaran tunai kepada individu dan organisasi pihak berelasi, salah satunya yayasan milik Jafarpour, yang tidak punya sistem pengendalian internal sama sekali. `(ARENS p.304)`"
            },
            {
              "kind": "p",
              "text": "Jafarpour pernah memerintahkan staf TI menghapus semua bukti dokumen yang dimanipulasi. Staf itu mengganti hard drive komputer Jafarpour tetapi menyimpan yang lama, dan hard drive itu menjadi bukti kunci di pengadilan. Ia juga menghubungi ketua dewan dan satu anggota dewan tentang kekhawatirannya, tetapi tidak ada tindakan. Dalam kasus lain, seorang administrator menerbitkan cek untuk dirinya sendiri membayar pengeluaran pribadi. Jaksa menyimpulkan bahwa untuk mengakses dana SISO secara tidak sah, satu-satunya syarat adalah menjadi bagian dari lingkaran dalam yang istimewa. `(ARENS p.304)`"
            },
            {
              "kind": "p",
              "text": "Buku menyajikan contoh ini sebagai salah saji material akibat fraud yang terjadi ketika ada material weakness sekaligus di lingkungan pengendalian dan proses pemantauan. `(ARENS p.303)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Pemetaan berikut susunan penulis. Lingkungan pengendalian gagal karena pimpinan tertinggi sendiri memerintahkan manipulasi dan akses ke dana ditentukan oleh kedekatan dengan pimpinan, bukan oleh otorisasi. Pemantauan gagal karena kekhawatiran yang disampaikan ke ketua dewan tidak ditindaklanjuti. Karena kelemahan ini menyeluruh, auditor yang menemukannya tidak cukup menambah pengujian pada satu akun. Ia perlu menaikkan RMM tingkat laporan keuangan dan menyesuaikan respons keseluruhan, misalnya lewat prosedur yang tidak terduga dan staf yang lebih berpengalaman. `(ARENS p.304; ISA330 paras. A1–A2)`"
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Sistem informasi"
        },
        {
          "kind": "p",
          "text": "Evaluasi pengendalian di control activities berkaitan erat dengan evaluasi sistem informasi. Untuk menilai risiko tingkat asersi, auditor perlu memahami bagaimana proses bisnis yang relevan dengan pelaporan keuangan menginisiasi, mengotorisasi, dan mencatat transaksi, lalu mengevaluasi desain pengendalian yang relevan dan apakah pengendalian itu sudah diterapkan. `(ARENS pp.304–305)`"
        },
        {
          "kind": "p",
          "text": "Buku memberi dua contoh sistem informasi yang relevan: sistem point-of-sale terpisah yang terhubung dengan sistem akuntansi, dan spreadsheet Excel yang memelihara subledger aset tetap, tempat depresiasi dan amortisasi bulanan dihitung lalu dijurnal ke sistem akuntansi. `(ARENS p.305)`"
        },
        {
          "kind": "table",
          "title": "Yang dipahami auditor tentang aliran informasi dalam sistem informasi",
          "headers": [
            "Aspek",
            "Pertanyaan auditor",
            "Sumber"
          ],
          "rows": [
            [
              "Transaksi",
              "Bagaimana transaksi diinisiasi, dan bagaimana informasinya dicatat, dikoreksi, diproses, dan dimasukkan ke buku besar?",
              "ARENS p.305"
            ],
            [
              "Peristiwa dan kondisi selain transaksi",
              "Bagaimana informasinya ditangkap, diproses, dan diungkapkan dalam laporan keuangan?",
              "ARENS p.305"
            ],
            [
              "Catatan",
              "Catatan akuntansi, akun spesifik dalam laporan keuangan, dan catatan pendukung lain apa yang terlibat?",
              "ARENS p.305"
            ],
            [
              "Proses pelaporan",
              "Bagaimana proses pelaporan keuangan berjalan?",
              "ARENS p.305"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Untuk mengevaluasi sistem informasi, auditor memakai inquiry, observasi atas penerapan kontrol tertentu, dan inspeksi dokumen serta laporan. Flowchart, kuesioner, dan walk-through sangat membantu memahami aliran transaksi. Auditor juga mencermati apakah ada pengendalian atas hal nonrutin dan hal yang bersifat pertimbangan yang kecil kemungkinannya dicakup kontrol rutin. Contohnya adalah review manajemen atau pakar atas asumsi dalam estimasi akuntansi yang signifikan. `(ARENS p.305)`"
        },
        {
          "kind": "h3",
          "text": "Control activities: apa yang wajib dipahami dan dievaluasi"
        },
        {
          "kind": "p",
          "text": "Control activities mencakup pengendalian pemrosesan informasi dan general IT controls, dengan jenis seperti otorisasi dan persetujuan, rekonsiliasi, verifikasi, kontrol fisik atau logis, dan pemisahan tugas. Untuk menentukan mana yang relevan, auditor mempertimbangkan \"apa yang bisa salah\" pada tingkat asersi. Walk-through atas sistem informasi membantu mengidentifikasi control activities yang relevan. `(ARENS p.305)`"
        },
        {
          "kind": "p",
          "text": "Menurut CAS 315, auditor diharapkan memahami dan mengevaluasi empat kelompok control activities berikut. Rujukan balik ke TM13: kelompok yang sama dirumuskan di ISA 315 para. 26(a). `(ARENS p.305; ISA315 para. 26(a))`"
        },
        {
          "kind": "table",
          "title": "Empat kelompok control activities yang wajib dipahami dan dievaluasi auditor",
          "headers": [
            "Kelompok",
            "Alasan",
            "Catatan dari buku",
            "Sumber"
          ],
          "rows": [
            [
              "1. Kontrol (otomatis atau manual) yang menjawab risiko signifikan",
              "Auditor perlu memahami dan mengevaluasi kontrol atas risiko signifikan agar penilaian control risk tepat",
              "Risiko signifikan berada di ujung atas spektrum inherent risk, misalnya estimasi akuntansi dengan ketidakpastian tinggi, saldo yang butuh perhitungan kompleks, perubahan akuntansi signifikan, transaksi pihak berelasi nonrutin, dan risiko fraud pengakuan pendapatan",
              "ARENS p.305"
            ],
            [
              "2. Kontrol atas jurnal",
              "Informasi dari pemrosesan transaksi masuk ke buku besar lewat jurnal",
              "Jurnal bisa standar atau nonstandar, otomatis atau manual",
              "ARENS p.305"
            ],
            [
              "3. Kontrol yang akan diuji efektivitas operasinya",
              "Hanya kontrol yang direncanakan untuk diandalkan atau yang wajib diuji",
              "Dua kategori: risiko tingkat asersi yang tidak bisa dijawab bukti substantif saja, dan kontrol yang diandalkan untuk menentukan nature, timing, dan extent prosedur substantif",
              "ARENS pp.305–306"
            ],
            [
              "4. Kontrol lain menurut pertimbangan auditor",
              "Mengikuti pertimbangan auditor",
              "Contoh: rekonsiliasi catatan rinci dengan buku besar, dan kontrol atas transaksi yang diproses pusat layanan",
              "ARENS p.305"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Saat mengevaluasi desain sebuah control activity, auditor mempertimbangkan tiga hal. `(ARENS p.306)`"
        },
        {
          "kind": "table",
          "title": "Tiga pertimbangan mengevaluasi desain control activity",
          "headers": [
            "Pertimbangan",
            "Maksud",
            "Sumber"
          ],
          "rows": [
            [
              "Apakah kontrol menjawab risiko fraud atau kesalahan yang teridentifikasi",
              "Menjawab \"apa yang bisa salah\"",
              "ARENS p.306"
            ],
            [
              "Apakah kontrol menjawab asersi terkait",
              "Kontrol harus menyasar asersi yang berisiko",
              "ARENS p.306"
            ],
            [
              "Apakah kontrol sudah diterapkan, dibuktikan dengan prosedur selain inquiry",
              "Wawancara saja tidak cukup untuk menyimpulkan penerapan",
              "ARENS p.306"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Menilai control risk per asersi: control risk matrix dan analisis defisiensi",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** control risk matrix memetakan pengendalian kunci ke asersi sehingga auditor dapat menilai control risk tiap asersi. Defisiensi dianalisis lewat ada tidaknya pengendalian kompensasi, potensi salah saji, signifikansi, dan kemungkinan terjadinya. Penilaian ini bersifat awal sampai diuji."
        },
        {
          "kind": "callout",
          "variant": "quote",
          "text": "**Definisi.** Assessment of control risk adalah ukuran ekspektasi auditor bahwa pengendalian internal tidak akan mencegah salah saji material pada tingkat asersi dan tidak akan mendeteksi serta mengoreksinya bila sudah terjadi. `(ARENS p.311)`"
        },
        {
          "kind": "h3",
          "text": "Urutan menilai control risk"
        },
        {
          "kind": "p",
          "text": "Fokus penilaian control risk ada pada control activities, tetapi auditor biasanya mulai dari tiga komponen yang menjawab risiko tingkat laporan keuangan, lalu general IT controls, baru kontrol tingkat asersi. Urutan ini masuk akal karena kontrol yang di bawah bergantung pada kontrol di atasnya. `(ARENS p.311)`"
        },
        {
          "kind": "table",
          "title": "Urutan auditor menilai control risk",
          "headers": [
            "Langkah",
            "Yang dinilai",
            "Akibat bila lemah",
            "Akibat bila kuat",
            "Sumber"
          ],
          "rows": [
            [
              "1",
              "Lingkungan pengendalian, penilaian risiko, dan pemantauan (indirect controls)",
              "Auditor mengharapkan efektivitas operasi kontrol langsung rendah, sehingga penilaian awal control risk tingkat asersi tinggi",
              "Menguatkan secara tidak langsung efektivitas kontrol langsung di control activities",
              "ARENS p.311"
            ],
            [
              "2",
              "General IT controls, sebelum kontrol aplikasi otomatis dan kontrol manual yang bergantung pada keluaran TI",
              "Berpotensi salah saji material di semua aplikasi, apa pun kualitas kontrol aplikasinya. Contoh: berkas data tidak diamankan memadai berarti risiko kehilangan data pada tiap kelas transaksi yang bergantung pada data itu.",
              "Auditor bisa mengandalkan lebih besar kontrol aplikasi yang fungsinya bergantung pada TI, sehingga penilaian awal control risk rendah",
              "ARENS p.311"
            ],
            [
              "3",
              "Control activities pada tiap asersi relevan, ditambah implikasi sistem informasi dan kontrol tidak langsung",
              "Kontrol yang hilang atau defisiensi menaikkan control risk asersi terkait",
              "Kontrol yang dirancang baik dan sudah diterapkan menurunkan control risk asersi terkait pada penilaian awal",
              "ARENS pp.311, 306"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "h3",
          "text": "Asersi transaksi penjualan dan kontrol kunci"
        },
        {
          "kind": "p",
          "text": "Buku memakai enam asersi transaksi untuk menilai pengendalian penjualan. Pada Figure 9-6, asersi accuracy dipecah dua: akurasi penagihan dan akurasi pencatatan di master file, sehingga matriks memiliki tujuh kolom. `(ARENS pp.306–307)`"
        },
        {
          "kind": "table",
          "title": "Asersi transaksi penjualan yang dipakai dalam control risk matrix",
          "headers": [
            "Asersi",
            "Makna menurut buku",
            "Kolom di Figure 9-6",
            "Sumber"
          ],
          "rows": [
            [
              "Occurrence (validity)",
              "Transaksi, termasuk perubahan master data, tidak fiktif, terkait bisnis, dan diotorisasi",
              "Penjualan tercatat untuk pengiriman yang benar-benar terjadi kepada pelanggan yang tidak fiktif",
              "ARENS pp.306–307"
            ],
            [
              "Completeness",
              "Semua transaksi tercatat diterima sistem (satu kali dan hanya satu kali), dan transaksi yang ditolak ditangani dan diperbaiki",
              "Transaksi penjualan yang ada telah tercatat",
              "ARENS pp.306–307"
            ],
            [
              "Accuracy",
              "Elemen data kunci (termasuk master data) untuk transaksi yang dicatat dan dimasukkan ke komputer cukup benar, dan perubahan master data dimasukkan akurat",
              "Dua kolom: penjualan sesuai jumlah barang terkirim dan ditagih benar; transaksi masuk master file piutang dan diringkas benar",
              "ARENS pp.306–307"
            ],
            [
              "Cutoff",
              "Semua transaksi tercatat dimasukkan dan diterima untuk diproses pada periode yang benar",
              "Penjualan dicatat pada tanggal yang benar",
              "ARENS pp.306–307"
            ],
            [
              "Classification",
              "Semua transaksi tercatat dialokasikan ke kategori yang benar",
              "Transaksi penjualan diklasifikasikan dengan benar",
              "ARENS pp.306–307"
            ],
            [
              "Presentation",
              "Transaksi diagregasi atau didisagregasi secara tepat dan dijelaskan dengan jelas, dan pengungkapan terkait relevan dan dapat dipahami",
              "Transaksi penjualan diagregasi atau didisagregasi dengan tepat, dan pengungkapan relevan serta dapat dipahami",
              "ARENS pp.306–307"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Matriks hanya memuat key controls, yaitu kontrol yang paling efektif atau paling berdampak mengurangi salah saji. Alasannya, organisasi bisa punya banyak kontrol dan tidak efisien mengevaluasi semuanya. Table 9-2 buku memberi pedoman umum untuk mengenali kontrol yang lebih efektif. `(ARENS pp.306, 308)`"
        },
        {
          "kind": "table",
          "title": "Pedoman umum efektivitas control activities (Table 9-2)",
          "headers": [
            "Kurang efektif",
            "Lebih efektif",
            "Sumber"
          ],
          "rows": [
            [
              "Kontrol manual",
              "Kontrol otomatis",
              "ARENS p.306"
            ],
            [
              "Kontrol kompleks (banyak langkah, banyak perhitungan)",
              "Kontrol sederhana (satu langkah, satu perhitungan)",
              "ARENS p.306"
            ],
            [
              "Dilakukan staf junior yang kurang berpengalaman",
              "Dilakukan orang berpengalaman yang memegang posisi tanggung jawab",
              "ARENS p.306"
            ],
            [
              "Kontrol detektif",
              "Kontrol preventif",
              "ARENS p.306"
            ],
            [
              "Kontrol tunggal",
              "Salah satu dari kelompok kontrol yang tumpang tindih",
              "ARENS p.306"
            ],
            [
              "Kontrol tingkat tinggi (analitis)",
              "Kontrol rinci pada tingkat transaksi",
              "ARENS p.306"
            ],
            [
              "Dilakukan atas dasar sampel",
              "Dilakukan pada setiap kejadian",
              "ARENS p.306"
            ],
            [
              "Dilakukan lama setelah transaksi terjadi",
              "Terjadi saat transaksi berlangsung atau diproses",
              "ARENS p.306"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Pedoman ini bersifat umum dan tidak lengkap, jadi dipakai sebagai alat bantu, bukan aturan mutlak. `(ARENS pp.306, 308)`"
        },
        {
          "kind": "h3",
          "text": "Control risk matrix Hillsburg"
        },
        {
          "kind": "figure",
          "title": "Penilaian awal control risk Hillsburg per asersi",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 818\" width=\"100%\" role=\"img\" aria-labelledby=\"f14-matriks-t f14-matriks-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f14-matriks-t\">Penilaian awal control risk Hillsburg per asersi</title><desc id=\"f14-matriks-d\">Tujuh kartu bertumpuk, satu per asersi, memuat kontrol dan defisiensi serta penilaian awal control risk dengan warna berbeda untuk medium, low, dan high.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"818\" rx=\"14\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"20\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Occurrence: Medium</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Kontrol C1, C2, C3, C4, C6, C9</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">Defisiensi D1</text><rect class=\"svg-badge-green\" x=\"20\" y=\"130\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"160\" font-size=\"19\" font-weight=\"800\">Completeness: Low</text><text class=\"svg-text\" x=\"34\" y=\"188\" font-size=\"18\">Kontrol C3, C5, C6</text><rect class=\"svg-badge-green\" x=\"20\" y=\"216\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"246\" font-size=\"19\" font-weight=\"800\">Accuracy, penagihan: Low</text><text class=\"svg-text\" x=\"34\" y=\"274\" font-size=\"18\">Kontrol C2, C6, C7, C9</text><rect class=\"svg-badge-green\" x=\"20\" y=\"302\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"332\" font-size=\"19\" font-weight=\"800\">Accuracy, master file: Low</text><text class=\"svg-text\" x=\"34\" y=\"360\" font-size=\"18\">Kontrol C3, C9, C10, C11</text><rect class=\"svg-badge-red\" x=\"20\" y=\"388\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"418\" font-size=\"19\" font-weight=\"800\">Cutoff: High</text><text class=\"svg-text\" x=\"34\" y=\"446\" font-size=\"18\">Kontrol C4, C5</text><text class=\"svg-text\" x=\"34\" y=\"470\" font-size=\"18\">Defisiensi D2</text><rect class=\"svg-badge-green\" x=\"20\" y=\"498\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"528\" font-size=\"19\" font-weight=\"800\">Classification: Low</text><text class=\"svg-text\" x=\"34\" y=\"556\" font-size=\"18\">Kontrol C8. Tidak ada penjualan tunai</text><rect class=\"svg-badge-blue\" x=\"20\" y=\"584\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"614\" font-size=\"19\" font-weight=\"800\">Presentation: tidak dinilai di</text><text class=\"svg-title\" x=\"34\" y=\"638\" font-size=\"19\" font-weight=\"800\">gambar</text><text class=\"svg-text\" x=\"34\" y=\"666\" font-size=\"18\">Kontrol C12</text><rect class=\"svg-subcard\" x=\"20\" y=\"698\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"728\" font-size=\"19\" font-weight=\"800\">Cara membaca</text><text class=\"svg-text\" x=\"34\" y=\"756\" font-size=\"18\">C = kontrol, D = defisiensi. Penilaian</text><text class=\"svg-text\" x=\"34\" y=\"780\" font-size=\"18\">ini awal dan belum final sampai diuji.</text></svg>",
          "overview": {
            "heading": "Penilaian awal control risk Hillsburg per asersi",
            "cards": [
              {
                "title": "Occurrence: Medium",
                "subtitle": "",
                "items": [
                  "Kontrol C1, C2, C3, C4, C6, C9",
                  "Defisiensi D1"
                ],
                "takeaway": ""
              },
              {
                "title": "Completeness: Low",
                "subtitle": "",
                "items": [
                  "Kontrol C3, C5, C6"
                ],
                "takeaway": ""
              },
              {
                "title": "Accuracy, penagihan: Low",
                "subtitle": "",
                "items": [
                  "Kontrol C2, C6, C7, C9"
                ],
                "takeaway": ""
              },
              {
                "title": "Accuracy, master file: Low",
                "subtitle": "",
                "items": [
                  "Kontrol C3, C9, C10, C11"
                ],
                "takeaway": ""
              },
              {
                "title": "Cutoff: High",
                "subtitle": "",
                "items": [
                  "Kontrol C4, C5",
                  "Defisiensi D2"
                ],
                "takeaway": ""
              },
              {
                "title": "Classification: Low",
                "subtitle": "",
                "items": [
                  "Kontrol C8",
                  "Tidak ada penjualan tunai"
                ],
                "takeaway": ""
              },
              {
                "title": "Presentation: tidak dinilai di gambar",
                "subtitle": "",
                "items": [
                  "Kontrol C12"
                ],
                "takeaway": "Penilaian awal belum final sampai diuji."
              }
            ],
            "footer": "Sumber: Figure 9-6 (ARENS p.307)."
          },
          "caption": "Gambar 14.3: Penilaian awal control risk Hillsburg per asersi. Disusun dari Figure 9-6 (ARENS p.307).",
          "altText": "Tujuh kartu asersi penjualan Hillsburg. Occurrence dinilai medium dengan kontrol C1, C2, C3, C4, C6, C9 dan defisiensi D1. Completeness low dengan C3, C5, C6. Accuracy penagihan low dengan C2, C6, C7, C9. Accuracy master file low dengan C3, C9, C10, C11. Cutoff high dengan C4, C5 dan defisiensi D2. Classification low dengan C8 karena tidak ada penjualan tunai. Presentation dengan C12 tidak dinilai di gambar. Penilaian ini awal dan belum final sampai diuji."
        },
        {
          "kind": "p",
          "text": "Matriks Hillsburg menyusun dua belas kontrol (C1 sampai C12) dan dua defisiensi (D1 dan D2) terhadap tujuh kolom asersi. Karena sebagian besar kontrol memengaruhi lebih dari satu asersi dan satu asersi sering dipengaruhi beberapa kontrol, matriks berguna untuk melihat banyak hubungan sekaligus. Contohnya pengiriman pernyataan bulanan ke pelanggan menjawab RMM pada tiga asersi. `(ARENS p.306)`"
        },
        {
          "kind": "table",
          "title": "Kontrol dan defisiensi dalam control risk matrix Hillsburg dengan asersi yang dijawab",
          "headers": [
            "Kode",
            "Kontrol atau defisiensi",
            "Asersi yang dijawab (Figure 9-6)",
            "Sumber"
          ],
          "rows": [
            [
              "C1",
              "Kredit disetujui otomatis oleh komputer dengan membandingkan batas kredit yang berwenang",
              "Occurrence",
              "ARENS p.307"
            ],
            [
              "C2",
              "Penjualan tercatat didukung dokumen pengiriman yang berwenang dan pesanan pelanggan yang disetujui",
              "Occurrence; accuracy (penagihan)",
              "ARENS p.307"
            ],
            [
              "C3",
              "Pemisahan tugas antara penagihan, pencatatan penjualan, dan penanganan penerimaan kas",
              "Occurrence; completeness; accuracy (master file)",
              "ARENS p.307"
            ],
            [
              "C4",
              "Dokumen pengiriman diteruskan ke bagian penagihan setiap hari dan ditagih hari berikutnya",
              "Occurrence; cutoff",
              "ARENS p.307"
            ],
            [
              "C5",
              "Dokumen pengiriman bernomor urut dan dipertanggungjawabkan tiap minggu",
              "Completeness; cutoff",
              "ARENS p.307"
            ],
            [
              "C6",
              "Total batch kuantitas terkirim dibandingkan dengan kuantitas yang ditagih",
              "Occurrence; completeness; accuracy (penagihan)",
              "ARENS p.307"
            ],
            [
              "C7",
              "Harga jual satuan diambil dari master file daftar harga yang disetujui",
              "Accuracy (penagihan)",
              "ARENS p.307"
            ],
            [
              "C8",
              "Transaksi penjualan diverifikasi internal",
              "Classification",
              "ARENS p.307"
            ],
            [
              "C9",
              "Pernyataan dikirim ke pelanggan tiap bulan",
              "Occurrence; accuracy (penagihan); accuracy (master file)",
              "ARENS p.307"
            ],
            [
              "C10",
              "Komputer memposting transaksi otomatis ke catatan subsidiary piutang dan buku besar",
              "Accuracy (master file)",
              "ARENS p.307"
            ],
            [
              "C11",
              "Master file piutang direkonsiliasi dengan buku besar tiap bulan",
              "Accuracy (master file)",
              "ARENS p.307"
            ],
            [
              "C12",
              "Kontroler meninjau aktivitas penjualan untuk agregasi dan pengungkapan yang tepat",
              "Presentation",
              "ARENS p.307"
            ],
            [
              "D1",
              "Tidak ada verifikasi internal atas kemungkinan faktur penjualan tercatat lebih dari satu kali",
              "Occurrence",
              "ARENS p.307"
            ],
            [
              "D2",
              "Tidak ada kontrol untuk menguji ketepatan waktu pencatatan",
              "Cutoff",
              "ARENS p.307"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Baris terakhir matriks memuat penilaian awal control risk tiap asersi. Auditor menjawab pertanyaan: seberapa besar kemungkinan salah saji material tidak dicegah, dideteksi, atau dikoreksi bila terjadi oleh kontrol-kontrol ini, dan apa pengaruh defisiensi atau kelemahannya? Bila kemungkinannya rendah, control risk rendah. Penilaian ini membutuhkan banyak pertimbangan profesional. `(ARENS p.308)`"
        },
        {
          "kind": "table",
          "title": "Penilaian awal control risk Hillsburg per asersi",
          "headers": [
            "Asersi",
            "Kontrol yang menjawab",
            "Defisiensi",
            "Control risk awal",
            "Sumber"
          ],
          "rows": [
            [
              "Occurrence",
              "C1, C2, C3, C4, C6, C9",
              "D1",
              "Medium",
              "ARENS p.307"
            ],
            [
              "Completeness",
              "C3, C5, C6",
              "Tidak ada",
              "Low",
              "ARENS p.307"
            ],
            [
              "Accuracy (penagihan)",
              "C2, C6, C7, C9",
              "Tidak ada",
              "Low",
              "ARENS p.307"
            ],
            [
              "Accuracy (master file)",
              "C3, C9, C10, C11",
              "Tidak ada",
              "Low",
              "ARENS p.307"
            ],
            [
              "Cutoff",
              "C4, C5",
              "D2",
              "High",
              "ARENS p.307"
            ],
            [
              "Classification",
              "C8",
              "Tidak ada",
              "Low*",
              "ARENS p.307"
            ],
            [
              "Presentation",
              "C12",
              "Tidak ada",
              "Kosong di gambar",
              "ARENS p.307"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "*Karena tidak ada penjualan tunai, klasifikasi bukan masalah. `(ARENS p.307)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi.** Kolom \"Kontrol yang menjawab\" disusun dari tanda C di Figure 9-6. Menghitungnya memperlihatkan bahwa jumlah kontrol tidak otomatis menentukan penilaian. Cutoff punya dua kontrol tetapi dinilai high karena ada defisiensi D2. Classification hanya punya satu kontrol tetapi dinilai low karena risikonya memang kecil, sebab semua penjualan di Hillsburg secara kredit dan hanya ada satu akun penjualan. Penghitungan dan pembacaan ini susunan penulis. `(ARENS pp.301, 307)`"
        },
        {
          "kind": "h3",
          "text": "Menganalisis defisiensi"
        },
        {
          "kind": "p",
          "text": "Pada matriks, auditor Hillsburg menemukan dua defisiensi dan menganalisisnya di Figure 9-7 dengan empat pertanyaan. `(ARENS p.308)`"
        },
        {
          "kind": "table",
          "title": "Empat pertanyaan analisis defisiensi pengendalian",
          "headers": [
            "Pertanyaan",
            "Fungsi",
            "Sumber"
          ],
          "rows": [
            [
              "Apakah ada kontrol kompensasi?",
              "Bila ada, potensi salah saji sudah cukup berkurang dan kelemahan tidak lagi menjadi perhatian",
              "ARENS pp.303, 308"
            ],
            [
              "Bila tidak ada, apa potensi salah saji (akibat kesalahan atau fraud)?",
              "Mengidentifikasi salah saji spesifik yang mungkin terjadi",
              "ARENS pp.303, 308"
            ],
            [
              "Seberapa signifikan potensi salah saji itu?",
              "Menilai besarnya dampak",
              "ARENS p.308"
            ],
            [
              "Seberapa besar kemungkinan salah saji itu terjadi?",
              "Dijawab dengan merujuk ke penilaian control risk asersi di matriks",
              "ARENS p.308"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "table",
          "title": "Analisis defisiensi pengendalian penjualan Hillsburg (Figure 9-7)",
          "headers": [
            "Defisiensi",
            "Kontrol kompensasi",
            "Potensi salah saji",
            "Materialitas",
            "Pengaruh pada bukti audit",
            "Sumber"
          ],
          "rows": [
            [
              "1. Faktur penjualan bernomor urut tidak dipertanggungjawabkan",
              "Tidak ada",
              "Penjualan ganda tercatat",
              "Berpotensi material",
              "Memakai audit software untuk mencari nomor faktur ganda. Melakukan prosedur analitis atas penjualan dan gross margin.",
              "ARENS p.308"
            ],
            [
              "2. Tidak ada pembandingan independen antara tanggal di dokumen pengiriman dan tanggal pencatatan",
              "Pengiriman yang tidak cocok dan tidak tercatat ditinjau mingguan",
              "Tidak berlaku",
              "Tidak berlaku",
              "Tidak berlaku",
              "ARENS p.308"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Untuk defisiensi pertama, auditor menilai signifikansi potensi salah saji sebagai berpotensi material, dan kolom terakhir menggambarkan respons berupa pengujian substantif atas risiko pada tingkat asersi itu. Untuk defisiensi kedua, tinjauan mingguan atas pengiriman yang tidak cocok bekerja sebagai kontrol kompensasi, sehingga kolom lain tidak berlaku. `(ARENS p.308)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Teks buku dan gambar-gambarnya tidak sepenuhnya sejalan di satu titik. Teks pada pp.308–309 menghubungkan defisiensi faktur tidak dipertanggungjawabkan dengan control risk cutoff yang high, lalu menyimpulkan itu defisiensi signifikan. Sementara itu Figure 9-6 menempatkan D1 (faktur ganda) pada occurrence yang dinilai medium, dan D2 pada cutoff yang dinilai high, dan Figure 9-7 menunjukkan D2 punya kontrol kompensasi. Untuk belajar, ikuti gambar untuk pemetaan D1 ke occurrence dan D2 ke cutoff. Alur penalarannya, yaitu kompensasi, potensi salah saji, signifikansi, lalu kemungkinan, tetap berlaku. Jangan menghafal pasangan \"D1 berarti cutoff high\". `(ARENS pp.307–309)`"
        },
        {
          "kind": "p",
          "text": "Kontrol kompensasi (compensating atau mitigating control) adalah kontrol di bagian lain sistem yang mengimbangi kelemahan. Kontrol apa pun bisa menjadi kontrol kompensasi. Contoh umum di perusahaan kecil adalah keterlibatan aktif pemilik untuk mengimbangi kurangnya pemisahan tugas. Bila ada kontrol kompensasi, kelemahan tidak lagi menjadi perhatian karena potensi salah saji sudah cukup berkurang. `(ARENS p.303)`"
        },
        {
          "kind": "p",
          "text": "Penilaian control risk pada tahap ini belum final. Bukti dari prosedur penilaian risiko tidak cukup luas untuk menyimpulkan bahwa kontrol efektif. Bila auditor berencana mengandalkan penilaian low atau moderate, ia merancang dan melakukan tests of controls. Bila hasil pengujian tidak mendukung penilaian awal, pendekatan audit diubah. Bila auditor tidak mengandalkan kontrol, entah karena tidak efisien menguji atau karena ada defisiensi, RMM untuk asersi itu sama dengan penilaian inherent risk. `(ARENS p.309)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Control risk rendah pada matriks tidak berarti auditor boleh berhenti di situ. Penilaian awal rendah hanya memberi hak merencanakan pengujian, dan bukti dari pengujian itulah yang menentukan apakah penilaian dipertahankan. Jawaban yang menyatakan \"control risk rendah, jadi prosedur substantif dikurangi\" tanpa menyebut pengujian pengendalian akan kehilangan nilai. `(ARENS p.309; ISA330 paras. 8–9)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Dari control risk ke pendekatan audit",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** inherent risk dan penilaian awal control risk menentukan salah satu dari tiga pendekatan: pengujian pengendalian saja, prosedur substantif saja, atau gabungan keduanya. Tests of controls wajib bila auditor berencana mengandalkan kontrol atau bila prosedur substantif saja tidak memberi bukti yang cukup. Prosedur substantif tetap wajib untuk kelas yang material apa pun pendekatannya."
        },
        {
          "kind": "p",
          "text": "Penilaian risiko tingkat asersi memberi dasar untuk menentukan pendekatan audit dalam merancang prosedur lanjutan. Buku merujuk ISA 330 A4, yang menyebut tiga pilihan. `(ARENS p.312; ISA330 para. A4)`"
        },
        {
          "kind": "table",
          "title": "Tiga pendekatan audit atas risiko salah saji material tingkat asersi",
          "headers": [
            "Pendekatan",
            "Kapan dipilih",
            "Akibat pada RMM dan prosedur",
            "Sumber"
          ],
          "rows": [
            [
              "Tests of controls saja",
              "Prosedur substantif saja tidak bisa memberi bukti yang cukup. Contohnya transaksi rutin yang sangat otomatis, tanpa atau dengan sedikit intervensi manual, sehingga bukti hanya ada dalam bentuk elektronik.",
              "Auditor harus mengumpulkan bukti lewat tests of controls karena bukti dari prosedur penilaian risiko tidak cukup",
              "ARENS p.312; ISA330 paras. 8(b), A4(a), A24"
            ],
            [
              "Prosedur substantif saja (pendekatan substantif)",
              "Kontrol tidak efektif mengurangi RMM, atau tidak efisien untuk menguji kontrol. Contoh: aset tetap yang transaksinya sedikit dan tidak kompleks dengan inherent risk rendah atau moderat.",
              "Auditor tidak mengandalkan kontrol, sehingga RMM sama dengan penilaian inherent risk",
              "ARENS p.312; ISA330 para. A4(b)"
            ],
            [
              "Gabungan (combined atau controls-based)",
              "Auditor berekspektasi kontrol efektif (penilaian awal control risk moderate atau low) dan berencana mengandalkannya saat menentukan nature, timing, dan extent prosedur substantif",
              "Tests of controls plus prosedur substantif, dengan substantif yang bisa dikurangi bila kontrol terbukti efektif",
              "ARENS pp.312–313; ISA330 para. A4(c)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Dua contoh buku untuk kategori pertama adalah pendapatan perusahaan telekomunikasi dan platform perdagangan aset kripto. Pada perusahaan telekomunikasi, bukti panggilan atau aktivitas data hanya ada dalam bentuk yang tidak dapat diobservasi, sehingga auditor menguji kontrol yang memastikan menit panggilan atau volume unduhan (inisiasi transaksi pendapatan) tertangkap dengan benar (occurrence) dan dicatat dengan benar (accuracy) di sistem penagihan. Platform kripto sangat otomatis dengan sistem TI kompleks dan nyaris tidak menghasilkan dokumentasi selain lewat sistem itu. `(ARENS p.312)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Buku mengatakan standar mewajibkan prosedur substantif untuk semua risiko signifikan, namun menyebut juga pendekatan \"tests of controls saja\". ISA 330 para. 18 menyatakan prosedur substantif wajib dirancang dan dilakukan untuk setiap kelas transaksi, saldo akun, dan pengungkapan yang material, apa pun risiko yang dinilai, dan A44 menyatakan tidak semua asersi dalam kelas material perlu diuji. Pembacaan yang selaras: pendekatan \"tests of controls saja\" berlaku untuk asersi atau risiko tertentu yang bukti substantifnya tidak mungkin, sementara kelas transaksi itu tetap mendapat prosedur substantif pada asersi lain, dan pada risiko signifikan kontrol yang diandalkan diuji bersama prosedur substantif yang responsif. Pembacaan ini susunan penulis. `(ARENS pp.312, 339; ISA330 paras. 18, 21, A44)`"
        },
        {
          "kind": "h3",
          "text": "Alur keputusan: substantif atau gabungan"
        },
        {
          "kind": "p",
          "text": "Pilihan antara pendekatan substantif dan gabungan bergantung pada inherent risk dan penilaian awal control risk. Bila inherent risk tinggi dan tidak ada kontrol yang menjawabnya (control risk awal tinggi), RMM dinilai tinggi karena inherent risk dan control risk sama-sama tinggi. Bila ada kontrol (control risk awal moderate atau low), auditor dapat merencanakan pengujian efektivitas kontrol itu. `(ARENS p.312)`"
        },
        {
          "kind": "figure",
          "title": "Alur keputusan: pendekatan substantif atau gabungan",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 996\" width=\"100%\" role=\"img\" aria-labelledby=\"f14-keputusan-t f14-keputusan-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f14-keputusan-t\">Alur keputusan: pendekatan substantif atau gabungan</title><desc id=\"f14-keputusan-d\">Enam kartu berurutan dengan dua kartu keputusan, ditutup kartu tentang keadaan di luar alur ketika tests of controls wajib.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"996\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">1. Pahami kontrol dan evaluasi</text><text class=\"svg-title\" x=\"34\" y=\"74\" font-size=\"19\" font-weight=\"800\">desain</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">Dokumentasikan pemahaman kontrol yang</text><text class=\"svg-text\" x=\"34\" y=\"126\" font-size=\"18\">relevan</text><rect class=\"svg-title\" x=\"238.5\" y=\"146\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 157 L240 170 L248 157 Z\"/><rect class=\"svg-subcard\" x=\"20\" y=\"172\" width=\"440\" height=\"148\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"202\" font-size=\"19\" font-weight=\"800\">2. Kontrol efektif secara desain?</text><text class=\"svg-text\" x=\"34\" y=\"230\" font-size=\"18\">Tidak: control risk tinggi, pendekatan</text><text class=\"svg-text\" x=\"34\" y=\"254\" font-size=\"18\">substantif</text><text class=\"svg-text\" x=\"34\" y=\"278\" font-size=\"18\">Ya: control risk moderate atau low,</text><text class=\"svg-text\" x=\"34\" y=\"302\" font-size=\"18\">lanjut</text><rect class=\"svg-title\" x=\"238.5\" y=\"322\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 333 L240 346 L248 333 Z\"/><rect class=\"svg-subcard\" x=\"20\" y=\"348\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"378\" font-size=\"19\" font-weight=\"800\">3. Efisien mengandalkan kontrol?</text><text class=\"svg-text\" x=\"34\" y=\"406\" font-size=\"18\">Tidak: pendekatan substantif</text><text class=\"svg-text\" x=\"34\" y=\"430\" font-size=\"18\">Ya: pendekatan gabungan, lakukan tests</text><text class=\"svg-text\" x=\"34\" y=\"454\" font-size=\"18\">of controls</text><rect class=\"svg-title\" x=\"238.5\" y=\"474\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 485 L240 498 L248 485 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"500\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"530\" font-size=\"19\" font-weight=\"800\">4. Evaluasi hasil tests of controls</text><text class=\"svg-text\" x=\"34\" y=\"558\" font-size=\"18\">Revisi penilaian risiko bila perlu</text><rect class=\"svg-title\" x=\"238.5\" y=\"578\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 589 L240 602 L248 589 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"604\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"634\" font-size=\"19\" font-weight=\"800\">5. Prosedur substantif</text><text class=\"svg-text\" x=\"34\" y=\"662\" font-size=\"18\">Extent mengikuti penilaian risiko yang</text><text class=\"svg-text\" x=\"34\" y=\"686\" font-size=\"18\">sudah direvisi</text><rect class=\"svg-title\" x=\"238.5\" y=\"706\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 717 L240 730 L248 717 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"732\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"762\" font-size=\"19\" font-weight=\"800\">6. Komunikasikan defisiensi</text><text class=\"svg-title\" x=\"34\" y=\"786\" font-size=\"19\" font-weight=\"800\">signifikan</text><text class=\"svg-text\" x=\"34\" y=\"814\" font-size=\"18\">Kepada pihak tata kelola dan manajemen</text><rect class=\"svg-badge-red\" x=\"20\" y=\"852\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"882\" font-size=\"19\" font-weight=\"800\">Di luar alur ini</text><text class=\"svg-text\" x=\"34\" y=\"910\" font-size=\"18\">Bila prosedur substantif saja tidak bisa</text><text class=\"svg-text\" x=\"34\" y=\"934\" font-size=\"18\">memberi bukti yang cukup, tests of</text><text class=\"svg-text\" x=\"34\" y=\"958\" font-size=\"18\">controls wajib.</text></svg>",
          "overview": {
            "heading": "Alur keputusan: pendekatan substantif atau gabungan",
            "cards": [
              {
                "title": "1. Pahami kontrol dan evaluasi desain",
                "subtitle": "",
                "items": [
                  "Dokumentasikan pemahaman kontrol yang relevan"
                ],
                "takeaway": ""
              },
              {
                "title": "2. Kontrol efektif secara desain?",
                "subtitle": "",
                "items": [
                  "Tidak: control risk tinggi, pendekatan substantif",
                  "Ya: control risk moderate atau low, lanjut"
                ],
                "takeaway": ""
              },
              {
                "title": "3. Efisien mengandalkan kontrol?",
                "subtitle": "",
                "items": [
                  "Tidak: pendekatan substantif",
                  "Ya: pendekatan gabungan, lakukan tests of controls"
                ],
                "takeaway": ""
              },
              {
                "title": "4. Evaluasi hasil tests of controls",
                "subtitle": "",
                "items": [
                  "Revisi penilaian risiko bila perlu"
                ],
                "takeaway": ""
              },
              {
                "title": "5. Prosedur substantif",
                "subtitle": "",
                "items": [
                  "Extent mengikuti penilaian risiko yang sudah direvisi"
                ],
                "takeaway": ""
              },
              {
                "title": "6. Komunikasikan defisiensi signifikan",
                "subtitle": "",
                "items": [
                  "Kepada pihak tata kelola dan manajemen"
                ],
                "takeaway": ""
              },
              {
                "title": "Di luar alur ini",
                "subtitle": "",
                "items": [
                  "Bila prosedur substantif saja tidak bisa memberi bukti yang cukup"
                ],
                "takeaway": "Tests of controls wajib."
              }
            ],
            "footer": "Sumber: Figure 9-8 (ARENS p.313); ISA330 paras. 8, A4."
          },
          "caption": "Gambar 14.4: Alur keputusan pendekatan substantif atau gabungan. Disusun dari Figure 9-8 (ARENS p.313) dan ISA330 paras. 8, A4.",
          "altText": "Enam langkah berurutan. Pertama pahami kontrol dan evaluasi desain. Kedua tentukan apakah kontrol efektif secara desain: bila tidak, control risk tinggi dan pendekatannya substantif. Ketiga tentukan apakah efisien mengandalkan kontrol: bila tidak, pendekatan substantif, bila ya, pendekatan gabungan dengan tests of controls. Keempat evaluasi hasil tests of controls dan revisi penilaian risiko bila perlu. Kelima lakukan prosedur substantif. Keenam komunikasikan defisiensi signifikan. Di luar alur: bila prosedur substantif saja tidak cukup, tests of controls wajib."
        },
        {
          "kind": "table",
          "title": "Langkah dalam alur keputusan pendekatan substantif atau gabungan (Figure 9-8)",
          "headers": [
            "Langkah",
            "Pertanyaan atau kegiatan",
            "Bila jawabannya ya atau hasilnya baik",
            "Bila tidak",
            "Sumber"
          ],
          "rows": [
            [
              "1",
              "Memperoleh dan mendokumentasikan pemahaman kontrol yang relevan, lalu mengevaluasi efektivitas desain",
              "Lanjut ke langkah 2",
              "Bila desain tidak efektif, control risk tinggi",
              "ARENS p.313"
            ],
            [
              "2",
              "Apakah kontrol efektif?",
              "Control risk moderate atau low, lanjut ke langkah 3",
              "Control risk tinggi, pendekatan substantif",
              "ARENS p.313"
            ],
            [
              "3",
              "Apakah efektif secara biaya untuk mengandalkan kontrol?",
              "Pendekatan gabungan: merancang dan melakukan tests of controls",
              "Pendekatan substantif",
              "ARENS p.313"
            ],
            [
              "4",
              "Mengevaluasi hasil tests of controls",
              "Mempertahankan penilaian risiko",
              "Merevisi penilaian risiko bila perlu, biasanya beralih ke pendekatan substantif",
              "ARENS pp.313–314"
            ],
            [
              "5",
              "Merancang dan melakukan prosedur substantif",
              "Sesuai penilaian risiko yang sudah direvisi",
              "",
              "ARENS p.313"
            ],
            [
              "6",
              "Melaporkan defisiensi signifikan atau material weakness kepada pihak tata kelola dan manajemen",
              "Wajib dikomunikasikan",
              "",
              "ARENS p.313"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Buku menyatakan Figure 9-8 tidak mencakup situasi pengujian pengendalian saja. `(ARENS p.312)`"
        },
        {
          "kind": "p",
          "text": "Pendekatan substantif dipilih karena kontrol tidak efektif mengurangi RMM, atau karena tidak efisien menguji kontrol. Alasan ketidakefisienan terkait dengan inherent risk. Bila inherent risk rendah atau moderat, seperti pada aset tetap yang jarang bertransaksi dan tidak kompleks, prosedur substantif saja bisa memadai. `(ARENS p.312)`"
        },
        {
          "kind": "p",
          "text": "Pendekatan gabungan berguna karena penilaian awal control risk didasarkan pada bukti dari prosedur penilaian risiko, yang tidak cukup luas untuk menyimpulkan efektivitas pengendalian. Auditor melakukan tests of controls karena sering lebih hemat daripada prosedur substantif. Alasan buku: sampel tests of controls umumnya lebih kecil daripada sampel prosedur substantif, kontrol otomatis dengan general IT controls efektif mungkin hanya perlu satu item, dan sebagian kontrol dapat diuji bergilir asal diuji sekali dalam tiga tahun. `(ARENS pp.313–314)`"
        },
        {
          "kind": "table",
          "title": "Dua pertimbangan auditor saat memutuskan mengandalkan kontrol",
          "headers": [
            "Pertimbangan",
            "Penjelasan",
            "Sumber"
          ],
          "rows": [
            [
              "Efisiensi",
              "Tests of controls dapat membuat audit lebih efisien, misalnya dengan melakukan prosedur substantif pada tanggal interim, mengubah nature prosedur substantif, dan mengurangi extent prosedur substantif",
              "ARENS p.302"
            ],
            [
              "Keharusan",
              "Tests of controls wajib karena transaksi sangat otomatis dan bukti yang cukup tidak mungkin didapat dari prosedur substantif",
              "ARENS p.302; ISA330 para. 8(b)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Bila auditor menemukan defisiensi, ia mengidentifikasi RMM dan menyesuaikan respons pada tingkat keseluruhan (untuk risiko tingkat laporan keuangan) atau pada tingkat asersi (dengan menambah pengujian substantif untuk mengukur potensi salah saji pada asersi terkait). Bila auditor menyimpulkan prosedur substantif saja tidak memberi bukti yang cukup untuk asersi yang relevan, ia mempertimbangkan perlunya memodifikasi opini karena pembatasan lingkup. `(ARENS p.302; ISA330 para. 27)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Tests of controls bukan prosedur wajib untuk semua audit. Kewajiban itu muncul dari dua keadaan saja: ada ekspektasi kontrol efektif yang akan diandalkan, atau prosedur substantif saja tidak cukup. Sebaliknya, jangan menyimpulkan bahwa kontrol yang efektif membuat prosedur substantif hilang, karena substantif tetap wajib pada kelas yang material. `(ISA330 paras. 8, 18)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Merancang tests of controls",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** tests of controls menguji apakah kontrol benar-benar berjalan sepanjang periode, bukan apakah angkanya benar. Hanya kontrol yang dirancang baik, sudah diterapkan, dan diharapkan andal yang diuji. Jenis prosedur dipilih menurut jejak bukti yang ditinggalkan kontrol, dan inquiry selalu digabung dengan prosedur lain."
        },
        {
          "kind": "h3",
          "text": "Tujuan dan kontrol yang dipilih"
        },
        {
          "kind": "p",
          "text": "Auditor melakukan tests of controls untuk mendapat bukti apakah kontrol, terutama di control activities, benar-benar berjalan sepanjang periode dan efektif mencegah, mendeteksi, atau mengoreksi salah saji. Berbeda dengan prosedur substantif, yang fokus pada salah saji dan menguji asersi (misalnya persediaan itu ada), fokus tests of controls adalah apakah kontrol bekerja atau tidak. Contoh buku: persetujuan kontroler atas ringkasan gaji bulanan sebelum pembayaran. Sebagai test of control, auditor mencari bukti persetujuan itu, biasanya tanda tangan atau paraf kontroler pada salinan ringkasan gaji. `(ARENS p.314)`"
        },
        {
          "kind": "table",
          "title": "Perbedaan tests of controls dan prosedur substantif",
          "headers": [
            "Aspek",
            "Tests of controls",
            "Prosedur substantif",
            "Sumber"
          ],
          "rows": [
            [
              "Fokus",
              "Apakah kontrol berjalan dan efektif",
              "Apakah ada salah saji pada asersi",
              "ARENS p.314"
            ],
            [
              "Pertanyaan",
              "Apakah review atau otorisasi benar-benar dilakukan?",
              "Apakah saldo piutang ada dan benar?",
              "ARENS pp.314, 318"
            ],
            [
              "Bukti yang dicari",
              "Jejak pelaksanaan kontrol, seperti tanda tangan, paraf, atau log sistem",
              "Dokumen dan data yang mendukung angka atau rincian",
              "ARENS pp.314, 318"
            ],
            [
              "Definisi standar",
              "Prosedur untuk mengevaluasi efektivitas operasi kontrol",
              "Prosedur untuk mendeteksi salah saji material pada tingkat asersi",
              "ISA330 para. 4"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Tests of controls hanya dilakukan pada kontrol yang sesuai desainnya untuk mencegah atau mendeteksi dan mengoreksi salah saji material pada asersi relevan, dan yang direncanakan untuk diuji. Bila kontrol yang berbeda secara substansial dipakai pada waktu berbeda dalam periode, tiap kontrol dipertimbangkan secara terpisah. `(ARENS p.314; ISA330 para. A20)`"
        },
        {
          "kind": "table",
          "title": "Tiga ciri kontrol yang layak diuji",
          "headers": [
            "Ciri",
            "Makna",
            "Sumber"
          ],
          "rows": [
            [
              "Dirancang baik",
              "Evaluasi desain menyimpulkan kontrol mampu mencegah atau mendeteksi dan mengoreksi salah saji",
              "ARENS p.314"
            ],
            [
              "Sedang dipakai",
              "Implementasi sudah ditentukan",
              "ARENS p.314"
            ],
            [
              "Diharapkan beroperasi andal sepanjang periode",
              "Auditor mengharapkan kontrol berjalan konsisten sepanjang periode audit",
              "ARENS p.314"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Auditor juga menimbang efisiensi dan efektivitas. Misalnya, ia dapat merencanakan tests of controls atas kelas transaksi rutin karena lebih efektif atau efisien untuk volume besar transaksi yang homogen. `(ARENS p.314)`"
        },
        {
          "kind": "h3",
          "text": "Jenis prosedur menurut jejak bukti"
        },
        {
          "kind": "p",
          "text": "Prosedur tests of controls mencakup inquiry, inspeksi, observasi, dan reperformance. Dalam merancangnya, auditor mempertimbangkan bagaimana kontrol diterapkan pada waktu relevan selama periode, konsistensi penerapannya, dan oleh siapa atau dengan cara apa kontrol diterapkan. `(ARENS p.314; ISA330 para. 10(a))`"
        },
        {
          "kind": "table",
          "title": "Memilih prosedur tests of controls menurut jejak bukti kontrol",
          "headers": [
            "Prosedur",
            "Dipakai bila",
            "Contoh dari buku",
            "Catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Inquiry",
              "Selalu diperlukan, tetapi tidak dipakai sendirian",
              "Menanyakan kepada orang yang mengatur kode identitas pengguna dan hak akses tentang pencegahan akses tidak sah ke berkas komputer",
              "Inquiry saja tidak cukup untuk menyimpulkan kontrol efektif",
              "ARENS p.315; ISA330 para. A26"
            ],
            [
              "Inspeksi dokumen, catatan, dan laporan",
              "Kontrol meninggalkan jejak dokumen, elektronik maupun kertas",
              "Memeriksa laporan pengecualian kredit dan memastikan paraf manajer penjualan ada. Karena ini kontrol berbantuan komputer dengan laporan otomatis, auditor menelaah general controls lebih dulu.",
              "Sering digabung dengan inquiry",
              "ARENS p.315; ISA330 para. A27"
            ],
            [
              "Observasi",
              "Kontrol tidak meninggalkan jejak dokumen",
              "Pemisahan tugas, yang bergantung pada orang tertentu mengerjakan tugas tertentu. Auditor mengamati penerapannya di berbagai titik sepanjang tahun.",
              "Observasi hanya relevan pada saat dilakukan",
              "ARENS p.316; ISA330 para. A26"
            ],
            [
              "Reperformance",
              "Dokumen dan catatan kontrol tidak cukup untuk menilai efektivitas, atau kontrol otomatis tanpa dokumentasi",
              "Harga jual diambil otomatis dari master file. Auditor menelusuri harga di faktur ke harga yang berwenang di master file pada tanggal transaksi.",
              "Bisa diotomatisasi",
              "ARENS p.316"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Inquiry yang digabung dengan inspeksi atau reperformance memberi keyakinan lebih besar daripada inquiry yang digabung observasi saja, karena observasi hanya relevan pada saat ia dilakukan. `(ISA330 para. A26)` Untuk kontrol yang bukti operasinya tidak ada dokumentasinya, seperti pembagian wewenang di lingkungan pengendalian atau kontrol otomatis, bukti bisa didapat lewat inquiry yang digabung observasi atau CAATs. `(ISA330 para. A27)`"
        },
        {
          "kind": "figure",
          "title": "Memilih prosedur tests of controls menurut jejak bukti",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 612\" width=\"100%\" role=\"img\" aria-labelledby=\"f14-tests-t f14-tests-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f14-tests-t\">Memilih prosedur tests of controls menurut jejak bukti</title><desc id=\"f14-tests-d\">Satu kartu pertanyaan, tiga kartu pilihan prosedur menurut jejak bukti, dan satu catatan bahwa inquiry selalu digabung.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"612\" rx=\"14\"/><rect class=\"svg-badge-purple\" x=\"20\" y=\"20\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Jejak apa yang ditinggalkan kontrol?</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Jawabannya menentukan jenis prosedur.</text><rect class=\"svg-title\" x=\"238.5\" y=\"98\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 109 L240 122 L248 109 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"124\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"154\" font-size=\"19\" font-weight=\"800\">Ada dokumen atau catatan: inspeksi</text><text class=\"svg-text\" x=\"34\" y=\"182\" font-size=\"18\">Contoh: paraf manajer pada laporan</text><text class=\"svg-text\" x=\"34\" y=\"206\" font-size=\"18\">pengecualian kredit</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"236\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"266\" font-size=\"19\" font-weight=\"800\">Tidak ada jejak: observasi</text><text class=\"svg-text\" x=\"34\" y=\"294\" font-size=\"18\">Contoh: pemisahan tugas, diamati di</text><text class=\"svg-text\" x=\"34\" y=\"318\" font-size=\"18\">berbagai waktu sepanjang tahun</text><rect class=\"svg-badge-green\" x=\"20\" y=\"348\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"378\" font-size=\"19\" font-weight=\"800\">Otomatis atau dokumen tidak cukup:</text><text class=\"svg-title\" x=\"34\" y=\"402\" font-size=\"19\" font-weight=\"800\">reperformance</text><text class=\"svg-text\" x=\"34\" y=\"430\" font-size=\"18\">Contoh: harga dari master file dihitung</text><text class=\"svg-text\" x=\"34\" y=\"454\" font-size=\"18\">ulang, data uji, audit software</text><rect class=\"svg-subcard\" x=\"20\" y=\"492\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"522\" font-size=\"19\" font-weight=\"800\">Inquiry selalu digabung</text><text class=\"svg-text\" x=\"34\" y=\"550\" font-size=\"18\">Inquiry saja tidak cukup untuk menguji</text><text class=\"svg-text\" x=\"34\" y=\"574\" font-size=\"18\">efektivitas operasi.</text></svg>",
          "overview": {
            "heading": "Memilih prosedur tests of controls menurut jejak bukti",
            "cards": [
              {
                "title": "Ada dokumen atau catatan: inspeksi",
                "subtitle": "",
                "items": [
                  "Contoh: paraf manajer pada laporan pengecualian kredit"
                ],
                "takeaway": ""
              },
              {
                "title": "Tidak ada jejak: observasi",
                "subtitle": "",
                "items": [
                  "Contoh: pemisahan tugas, diamati di berbagai waktu sepanjang tahun"
                ],
                "takeaway": ""
              },
              {
                "title": "Otomatis atau dokumen tidak cukup: reperformance",
                "subtitle": "",
                "items": [
                  "Contoh: harga dari master file dihitung ulang, data uji, audit software"
                ],
                "takeaway": ""
              },
              {
                "title": "Inquiry selalu digabung",
                "subtitle": "",
                "items": [
                  "Inquiry saja tidak cukup untuk menguji efektivitas operasi"
                ],
                "takeaway": ""
              }
            ],
            "footer": "Sumber: ARENS pp.314–316; ISA330 paras. 10(a), A26–A27."
          },
          "caption": "Gambar 14.5: Memilih prosedur tests of controls menurut jejak bukti. Disusun dari ARENS pp.314–316 dan ISA330 paras. 10(a), A26–A27.",
          "altText": "Pertanyaan pertama: jejak apa yang ditinggalkan kontrol. Bila ada dokumen atau catatan, pakai inspeksi, misalnya paraf manajer pada laporan pengecualian kredit. Bila tidak ada jejak, pakai observasi, misalnya pemisahan tugas diamati di berbagai waktu. Bila kontrol otomatis atau dokumen tidak cukup, pakai reperformance, misalnya menghitung ulang harga dari master file, data uji, atau audit software. Inquiry selalu digabung dengan prosedur lain karena tidak cukup sendirian."
        },
        {
          "kind": "h3",
          "text": "Prosedur tipikal untuk dua belas kontrol Hillsburg"
        },
        {
          "kind": "p",
          "text": "Table 9-3 buku memperlihatkan jenis tests of controls yang dirancang auditor Hillsburg untuk kontrol kunci di control risk matrix. `(ARENS p.315)`"
        },
        {
          "kind": "table",
          "title": "Ilustrasi tests of controls atas kontrol kunci Hillsburg (Table 9-3)",
          "headers": [
            "Kontrol kunci",
            "Tes tipikal",
            "Jenis prosedur",
            "Sumber"
          ],
          "rows": [
            [
              "C1. Kredit disetujui otomatis oleh komputer dengan membandingkan batas kredit yang berwenang",
              "Memakai data uji untuk menentukan apakah sistem menyetujui otomatis transaksi di bawah batas kredit dan menolak transaksi di atas batas",
              "Reperformance",
              "ARENS p.315"
            ],
            [
              "C2. Penjualan didukung dokumen pengiriman yang berwenang dan pesanan yang disetujui",
              "Memeriksa sampel faktur penjualan untuk memastikan masing-masing didukung dokumen pengiriman yang berwenang dan pesanan pelanggan yang disetujui",
              "Inspeksi",
              "ARENS p.315"
            ],
            [
              "C3. Pemisahan tugas antara penagihan, pencatatan penjualan, dan penanganan kas",
              "Mengobservasi apakah personel yang menangani kas tidak punya tanggung jawab akuntansi dan menanyakan tugas mereka",
              "Observasi dan inquiry",
              "ARENS p.315"
            ],
            [
              "C4. Dokumen pengiriman diteruskan ke penagihan setiap hari dan ditagih hari berikutnya",
              "Mengobservasi apakah dokumen diteruskan setiap hari dan kapan ditagih",
              "Observasi",
              "ARENS p.315"
            ],
            [
              "C5. Dokumen pengiriman bernomor urut dan dipertanggungjawabkan tiap minggu",
              "Mempertanggungjawabkan satu rangkaian dokumen pengiriman dan menelusuri masing-masing ke jurnal penjualan",
              "Inspeksi dan reperformance",
              "ARENS p.315"
            ],
            [
              "C6. Total batch kuantitas terkirim dibandingkan dengan kuantitas ditagih",
              "Memeriksa sampel batch, menghitung ulang kuantitas pengiriman, dan menelusuri total ke rekonsiliasi dengan laporan input",
              "Reperformance",
              "ARENS p.315"
            ],
            [
              "C7. Harga jual diambil dari master file daftar harga yang disetujui",
              "Memeriksa sampel faktur dan memverifikasi harga ke daftar harga komputer yang berwenang. Menelaah perubahan file harga sepanjang tahun untuk persetujuan yang tepat.",
              "Reperformance dan inspeksi",
              "ARENS p.315"
            ],
            [
              "C8. Transaksi penjualan diverifikasi internal",
              "Memeriksa dokumentasi penjualan untuk bukti verifikasi internal",
              "Inspeksi",
              "ARENS p.315"
            ],
            [
              "C9. Pernyataan dikirim ke pelanggan tiap bulan",
              "Mengobservasi apakah pernyataan dikirim untuk satu bulan dan menanyakan siapa yang bertanggung jawab mengirimnya",
              "Observasi dan inquiry",
              "ARENS p.315"
            ],
            [
              "C10. Komputer memposting transaksi otomatis ke catatan subsidiary dan buku besar",
              "Memakai audit software untuk menelusuri posting dari batch transaksi penjualan ke catatan subsidiary dan buku besar",
              "Reperformance",
              "ARENS p.315"
            ],
            [
              "C11. Master file piutang direkonsiliasi dengan buku besar tiap bulan",
              "Memeriksa bukti rekonsiliasi untuk bulan uji dan menguji keakuratan rekonsiliasi",
              "Inspeksi dan reperformance",
              "ARENS p.315"
            ],
            [
              "C12. Review aktivitas penjualan untuk agregasi dan pengungkapan",
              "Memeriksa dokumentasi review atas pengungkapan dan menanyakan hal yang menjadi fokus review, termasuk jenis pengecualian yang ditemukan dan cara penyelesaiannya",
              "Inspeksi dan inquiry",
              "ARENS p.315"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Table 9-3 menyebut pelaku review C12 sebagai treasurer, sedangkan Figure 9-6 menyebutnya controller. Perbedaan ini tidak memengaruhi jenis tes (inspeksi dan inquiry), jadi tidak mengubah jawaban soal. Di TM ini kontrol C12 disebut berdasarkan fungsinya, yaitu review atas agregasi dan pengungkapan. `(ARENS pp.307, 315)`"
        },
        {
          "kind": "h3",
          "text": "Alat bantu otomatis"
        },
        {
          "kind": "p",
          "text": "Reperformance bisa diotomatisasi. Selain itu, audit software mampu menguji kontrol manual yang tercermin dalam berkas elektronik. Buku memberi tiga contoh, ditambah pendekatan data uji. `(ARENS p.316)`"
        },
        {
          "kind": "table",
          "title": "Alat bantu otomatis untuk tests of controls",
          "headers": [
            "Alat",
            "Cara kerja",
            "Contoh dari buku",
            "Catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Generalized audit software (reperformance otomatis)",
              "Perangkat lunak umum yang membaca dan menguji data klien dengan modul khusus seperti ekstraksi, sampling, dan grafik. Algoritma klien dihitung ulang.",
              "Algoritma kompleks cadangan piutang tak tertagih berdasarkan penjualan sepanjang tahun diduplikasi dan dihitung ulang. Bila tidak ada salah saji, prosedur beroperasi seperti dimaksud.",
              "Dipakai bila reperformance manual tidak praktis",
              "ARENS p.316"
            ],
            [
              "Audit software atas berkas elektronik",
              "Mencari pengecualian pada kontrol manual yang tercatat elektronik",
              "Kepala departemen menyetujui secara elektronik tiap perolehan. Audit software mencari perolehan tanpa persetujuan yang tepat.",
              "Auditor juga menguji kontrol akses untuk memastikan hanya kepala departemen yang bisa menyetujui",
              "ARENS p.316"
            ],
            [
              "Audit data analytic sebagai test of details",
              "Menyaring seluruh transaksi terhadap kriteria kontrol",
              "Pembelian wajib three-way match antara faktur, laporan penerimaan, dan pesanan pembelian. Audit software mencari perolehan yang tidak memenuhi kriteria.",
              "Memberi bukti substantif tentang akurasi pembelian sekaligus bukti efektivitas kontrol",
              "ARENS p.316"
            ],
            [
              "Test data approach",
              "Auditor memproses data ujinya sendiri melalui komputer dan program aplikasi klien. Data uji memuat transaksi yang seharusnya diterima dan ditolak.",
              "Keluaran aktual dibandingkan dengan keluaran yang diharapkan untuk menilai efektivitas kontrol otomatis",
              "Menguji prosedur dalam program, bukan data input",
              "ARENS p.316"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "CAATs yang lebih luas dan perancangan program audit dibahas di TM15. ISA 330 A16 menyatakan CAATs memungkinkan pengujian elektronik lebih luas dan dapat dipakai untuk memilih sampel, mengurutkan transaksi dengan ciri tertentu, atau menguji seluruh populasi. `(ISA330 para. A16)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Perbandingan.** Prosedur untuk memahami kontrol dan tests of controls memakai jenis prosedur yang sama, dan hasilnya bisa tumpang tindih. Beda utamanya ada pada extent. Pada prosedur penilaian risiko, auditor memeriksa satu atau dua transaksi atau melakukan satu observasi pada satu titik waktu. Tests of controls memakai sampel lebih besar dan sering mengobservasi di lebih dari satu waktu. ISA 330 A21 menambahkan bahwa wajar bila auditor menguji efektivitas operasi bersamaan dengan evaluasi desain dan implementasi, dan A22 menyatakan beberapa prosedur penilaian risiko dapat sekaligus menjadi bukti tests of controls. `(ARENS p.316; ISA330 paras. A21–A22)`"
        },
        {
          "kind": "pendalaman",
          "title": "Apa itu tests of controls? Percakapan Fran dan AJ (Still Confused)",
          "blocks": [
            {
              "kind": "p",
              "text": "Dalam kotak Still Confused, AJ bertanya apakah audit procedure dan test of control itu sama. Fran menjelaskan bahwa audit procedure menyangkut nature prosedur dan bisa berupa test of control atau prosedur substantif. Yang dikira AJ sebagai \"audit procedure\" sebenarnya prosedur substantif, yaitu memperoleh bukti bahwa informasi yang disajikan manajemen dalam laporan keuangan benar. `(ARENS p.318)`"
            },
            {
              "kind": "p",
              "text": "Fran memakai analogi pagi hari AJ. AJ menulis tiga hal yang ia lakukan pagi itu: alarm ponsel berbunyi pukul 06.30, ia menyikat gigi dan sarapan sereal, dan karena mobilnya rusak ia naik bus lalu tiba di kantor pukul 08.30. Fran menunjukkan bukti yang bisa dicek: pengaturan alarm di ponsel, mangkuk dan sendok kotor di wastafel, catatan kartu pembayaran bus, dan catatan kartu akses gedung. Semuanya adalah audit procedures, karena Fran mengecek apakah yang ditulis AJ benar, seperti auditor mengecek apakah yang dicatat manajemen benar. `(ARENS p.318)`"
            },
            {
              "kind": "p",
              "text": "Tests of controls berbeda. Dengan tests of controls, auditor memperoleh bukti bahwa lima hal dilakukan: review, otorisasi, dokumentasi, pemisahan tugas, dan pengamanan aset. Kelimanya adalah hal yang dilakukan orang dalam organisasi untuk mencegah dan mendeteksi kesalahan dan fraud. Contoh Fran: rekonsiliasi bank Hillsburg ditinjau supervisor, dan tanda tangan supervisor menjadi bukti review. Tanda tangan itu sangat berbeda dengan mengecek bahwa fakta di rekonsiliasi benar. `(ARENS p.318)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Hasil analogi ini bisa dirangkum: prosedur substantif mengecek informasi, tests of controls mengecek tindakan. Tanda tangan supervisor membuktikan bahwa review terjadi. Ia tidak membuktikan bahwa saldo kas benar. Itulah sebabnya hasil tests of controls hanya memengaruhi seberapa jauh prosedur substantif boleh dikurangi, dan tidak menggantikannya. Pembacaan ini susunan penulis. `(ARENS p.318; ISA330 para. 18)`"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Extent, timing, dan evaluasi hasil tests of controls",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** extent mengikuti tingkat ketergantungan pada kontrol, frekuensi operasinya, dan perkiraan tingkat deviasi. Timing mengikuti periode yang akan diandalkan, dengan aturan khusus untuk bukti interim dan bukti tahun lalu. Hasil dievaluasi dengan membandingkan deviasi yang ditemukan dengan yang diharapkan dan dengan menelusuri penyebabnya."
        },
        {
          "kind": "h3",
          "text": "Extent: berapa banyak yang diuji"
        },
        {
          "kind": "p",
          "text": "Semakin besar ketergantungan auditor pada efektivitas kontrol (control risk dinilai rendah), semakin meyakinkan bukti yang dibutuhkan. Auditor menggabungkan prosedur, misalnya inquiry dengan inspeksi atau reperformance, dan menimbang faktor berikut selain tingkat ketergantungan. `(ARENS p.317; ISA330 paras. 9, A28)`"
        },
        {
          "kind": "table",
          "title": "Faktor yang menentukan extent tests of controls",
          "headers": [
            "Faktor",
            "Pengaruh pada extent",
            "Contoh atau catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Frekuensi operasi kontrol",
              "Kontrol yang beroperasi lebih sering memerlukan lebih banyak item diuji",
              "Beberapa kontrol hanya beroperasi di akhir tahun atau tiap triwulan. Auditor menguji kontrol akhir tahun dan juga sampel kontrol triwulanan atau bulanan.",
              "ARENS p.317; ISA330 para. A28"
            ],
            [
              "Lama periode yang diandalkan",
              "Semakin panjang periode, semakin banyak yang diuji",
              "Mengikuti periode yang akan diandalkan",
              "ISA330 para. A28"
            ],
            [
              "Perkiraan tingkat deviasi",
              "Ukuran sampel membesar bila perkiraan deviasi meningkat",
              "Kontrol manual dilakukan orang sehingga selalu berisiko kesalahan acak atau manipulasi. Ukuran sampel dibahas di Ch.11.",
              "ARENS p.317"
            ],
            [
              "Relevansi dan keandalan bukti",
              "Bukti yang lebih relevan dan andal mengurangi kebutuhan menambah sampel",
              "Bukti pada tingkat asersi yang relevan",
              "ISA330 para. A28"
            ],
            [
              "Bukti dari tes kontrol lain untuk asersi yang sama",
              "Bila beberapa tes kontrol dilakukan untuk satu asersi, extent bisa dikurangi",
              "Auditor Hillsburg biasanya menguji beberapa kontrol per asersi",
              "ARENS p.317; ISA330 para. A28"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Untuk kontrol otomatis, tingkat deviasi yang diharapkan bisa sangat rendah. Selama komputer diprogram akurat dan programnya tidak berubah, kontrol otomatis berfungsi konsisten sampai aplikasi diubah. Bila general controls efektif dan ada satu kontrol aplikasi otomatis, auditor mungkin dapat membenarkan pengujian satu transaksi saja tanpa memilih sampel. `(ARENS p.317)` ISA 330 A29 menyatakan bahwa setelah auditor menentukan kontrol otomatis berfungsi sebagaimana dimaksud, ia dapat mempertimbangkan pengujian untuk memastikan kontrol tetap berfungsi efektif, misalnya dengan menguji general IT controls yang terkait dengan aplikasi. `(ISA330 para. A29)`"
        },
        {
          "kind": "h3",
          "text": "Timing: kapan diuji dan berapa lama bukti berlaku"
        },
        {
          "kind": "p",
          "text": "Auditor menguji kontrol untuk waktu tertentu atau sepanjang periode yang ingin diandalkan, agar ada dasar yang tepat atas ketergantungan yang direncanakan. Bukti yang hanya menyangkut satu titik waktu bisa cukup, misalnya untuk kontrol atas penghitungan fisik persediaan di akhir periode. Bila auditor mengandalkan kontrol sepanjang periode, tes yang dipilih harus mampu memberi bukti bahwa kontrol beroperasi efektif pada waktu-waktu yang relevan. `(ISA330 paras. 11, A33)`"
        },
        {
          "kind": "table",
          "title": "Aturan timing tests of controls menurut ISA 330",
          "headers": [
            "Situasi",
            "Yang dilakukan auditor",
            "Faktor atau catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Bukti diperoleh pada periode interim",
              "Memperoleh bukti tentang perubahan signifikan pada kontrol setelah interim, dan menentukan bukti tambahan untuk sisa periode",
              "Faktor: signifikansi risiko, kontrol yang diuji dan perubahannya, tingkat bukti yang sudah diperoleh, panjang sisa periode, seberapa jauh prosedur substantif dikurangi, dan lingkungan pengendalian. Bukti tambahan bisa lewat tes kontrol atas sisa periode atau pengujian pemantauan kontrol oleh entitas.",
              "ISA330 paras. 12, A34–A35"
            ],
            [
              "Memakai bukti audit tahun lalu",
              "Menimbang efektivitas komponen lain, sifat kontrol (manual atau otomatis), general IT controls, deviasi dan perubahan personel, risiko dari tidak adanya perubahan, serta RMM dan tingkat ketergantungan",
              "Auditor harus menetapkan bahwa bukti lama masih relevan dan andal lewat inquiry yang digabung observasi atau inspeksi",
              "ISA330 paras. 13–14, A36"
            ],
            [
              "Kontrol sudah berubah sejak diuji",
              "Menguji kontrol itu pada audit berjalan",
              "Perubahan yang membuat data dikumpulkan atau dihitung berbeda memengaruhi relevansi. Perubahan yang hanya memungkinkan laporan baru biasanya tidak.",
              "ISA330 paras. 14(a), A37"
            ],
            [
              "Kontrol tidak berubah dan bukan untuk risiko signifikan",
              "Menguji paling sedikit sekali dalam setiap audit ketiga, dan menguji sebagian kontrol pada tiap audit",
              "Agar tidak semua kontrol diuji dalam satu periode lalu dua periode berikutnya tanpa pengujian",
              "ISA330 para. 14(b); ARENS p.317"
            ],
            [
              "Kontrol atas risiko signifikan yang diandalkan",
              "Menguji pada periode berjalan",
              "Aturan tiga tahun tidak berlaku",
              "ISA330 para. 15; ARENS p.317"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Buku menyebut aturan tiga tahun itu tidak sederhana. Bila kontrol kunci berubah sejak diuji terakhir, ia diuji pada tahun berjalan, dan \"proporsi\" kontrol lain harus diuji tiap tahun secara bergilir. `(ARENS p.317)`"
        },
        {
          "kind": "table",
          "title": "Faktor yang memperpendek periode pengujian ulang atau menghentikan pemakaian bukti tahun lalu",
          "headers": [
            "Faktor",
            "Sumber"
          ],
          "rows": [
            [
              "Lingkungan pengendalian yang defisien",
              "ISA330 para. A39"
            ],
            [
              "Defisiensi dalam proses pemantauan sistem pengendalian internal",
              "ISA330 para. A39"
            ],
            [
              "Unsur manual yang signifikan pada kontrol",
              "ISA330 para. A39"
            ],
            [
              "Perubahan personel yang secara signifikan memengaruhi penerapan kontrol",
              "ISA330 para. A39"
            ],
            [
              "Keadaan yang berubah dan menunjukkan perlunya perubahan kontrol",
              "ISA330 para. A39"
            ],
            [
              "General IT controls yang defisien",
              "ISA330 para. A39"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Bila ada beberapa kontrol yang bukti tahun lalunya akan dipakai, menguji sebagian di tiap audit memberi informasi tambahan tentang keberlanjutan efektivitas lingkungan pengendalian. `(ISA330 para. A40)`"
        },
        {
          "kind": "h3",
          "text": "Perubahan sistem TI dan conversion audit"
        },
        {
          "kind": "p",
          "text": "Bila entitas mengganti seluruh sistem TI atau sekumpulan sistem, auditor harus memastikan pengendalian sistem baru didokumentasikan dan dievaluasi, dan audit konversi data dilakukan. Auditor menilai risiko lebih dulu: untuk inherent risk, ia mempertimbangkan pelatihan karyawan dan ketelitian proses implementasi. Bila implementasi direncanakan, dilakukan, dan diawasi dengan baik, auditor dapat mengandalkan kontrol. `(ARENS p.317)`"
        },
        {
          "kind": "p",
          "text": "Bila kontrol konversi buruk atau tidak terdokumentasi, auditor melakukan pengujian substantif atas proses konversi, yang disebut conversion audit. Penekanannya pada pembentukan master file baru yang akurat dan berwenang, kelengkapan dan keberadaan data di file itu, dan transaksi cutoff di sistem yang tepat. `(ARENS pp.318–319)`"
        },
        {
          "kind": "table",
          "title": "Tiga pengujian dalam conversion audit",
          "headers": [
            "Pengujian",
            "Tujuan",
            "Sumber"
          ],
          "rows": [
            [
              "Membandingkan rincian dari sistem baru dengan sistem lama",
              "Memastikan hanya informasi yang akurat dan berwenang yang dibentuk di sistem baru",
              "ARENS p.319"
            ],
            [
              "Membandingkan rincian dari sistem lama dengan sistem baru",
              "Memastikan akurasi dan tidak ada transaksi yang terlewat",
              "ARENS p.319"
            ],
            [
              "Pengujian cutoff",
              "Memastikan transaksi masuk ke sistem yang tepat dan tidak terlewat",
              "ARENS p.319"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "h3",
          "text": "Mengevaluasi hasil dan menanggapi deviasi"
        },
        {
          "kind": "p",
          "text": "Konsep efektivitas operasi mengakui bahwa sebagian deviasi dalam penerapan kontrol mungkin terjadi. Deviasi bisa disebabkan perubahan personel kunci, fluktuasi musiman volume transaksi yang signifikan, dan kesalahan manusia. Tingkat deviasi yang ditemukan, terutama dibandingkan tingkat yang diharapkan, dapat menunjukkan bahwa kontrol tidak bisa diandalkan mengurangi risiko pada tingkat asersi seperti yang dinilai auditor. `(ISA330 para. A42)`"
        },
        {
          "kind": "table",
          "title": "Respons auditor ketika menemukan deviasi dari kontrol yang diandalkan",
          "headers": [
            "Langkah",
            "Isi",
            "Sumber"
          ],
          "rows": [
            [
              "1. Bertanya secara spesifik",
              "Memahami deviasi dan akibat potensialnya",
              "ISA330 para. 17"
            ],
            [
              "2. Menyimpulkan dasar ketergantungan",
              "Apakah tes yang sudah dilakukan memberi dasar yang tepat untuk mengandalkan kontrol",
              "ISA330 para. 17(a)"
            ],
            [
              "3. Menimbang tes tambahan",
              "Apakah perlu tests of controls tambahan",
              "ISA330 para. 17(b)"
            ],
            [
              "4. Beralih ke substantif",
              "Apakah RMM perlu dijawab dengan prosedur substantif",
              "ISA330 para. 17(c)"
            ],
            [
              "5. Menilai ulang pendekatan",
              "Bila hasil tidak mendukung penilaian awal, penilaian risiko direvisi dan pendekatan disesuaikan, biasanya beralih ke substantif",
              "ARENS p.314"
            ],
            [
              "6. Mengevaluasi kemungkinan defisiensi signifikan",
              "Salah saji material yang ditemukan prosedur auditor adalah indikator kuat adanya defisiensi signifikan",
              "ISA330 para. A41"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Dua arah evaluasi perlu dibedakan. Salah saji yang ditemukan prosedur substantif harus dievaluasi sebagai indikasi bahwa kontrol tidak efektif. Sebaliknya, tidak adanya salah saji yang ditemukan oleh prosedur substantif tidak memberi bukti bahwa kontrol atas asersi itu efektif. `(ISA330 para. 16)` Auditor juga tidak boleh menganggap fraud atau kesalahan yang ditemukan sebagai kejadian terisolasi. `(ISA330 para. A63)`"
        },
        {
          "kind": "pendalaman",
          "title": "Membandingkan tingkat deviasi dengan tingkat yang diharapkan: contoh PT Maju Bersama",
          "blocks": [
            {
              "kind": "p",
              "text": "Contoh ini rekaan penulis untuk menunjukkan cara berpikir. Buku tidak memberi ukuran sampel atau batas toleransi, dan penentuannya dibahas di Ch.11. `(ARENS p.317)`"
            },
            {
              "kind": "p",
              "text": "PT Maju Bersama mewajibkan manajer kredit menyetujui pesanan di atas Rp50 juta sebelum pengiriman, dengan paraf di formulir pesanan. Auditor ingin mengandalkan kontrol ini dan memilih 40 pesanan dari sepanjang tahun. Ia mengharapkan tingkat deviasi 2,5 persen, yaitu satu pesanan tanpa paraf dari 40. Hasilnya, empat pesanan tidak diparaf. Tingkat deviasi yang ditemukan adalah 4 dibagi 40, yaitu 10 persen, empat kali lipat dari yang diharapkan."
            },
            {
              "kind": "p",
              "text": "Menurut ISA 330 para. 17, auditor bertanya spesifik. Jawabannya: keempat pesanan itu muncul dalam dua minggu ketika manajer kredit cuti dan pengganti tidak ditunjuk. Penyebab ini cocok dengan contoh A42, yaitu perubahan personel dan kesalahan manusia. Respons yang masuk akal terhadap temuan itu:"
            },
            {
              "kind": "table",
              "title": "Pilihan respons atas deviasi 10 persen pada contoh PT Maju Bersama",
              "headers": [
                "Pilihan menurut ISA 330 para. 17",
                "Penerapan pada contoh",
                "Catatan"
              ],
              "rows": [
                [
                  "(a) Apakah tes yang dilakukan memberi dasar yang tepat untuk mengandalkan kontrol",
                  "Belum. Kontrol terbukti tidak berjalan pada periode manajer cuti, jadi ketergantungan sepanjang tahun tidak terbukti.",
                  "Deviasi 10 persen jauh di atas ekspektasi 2,5 persen"
                ],
                [
                  "(b) Apakah perlu tests of controls tambahan",
                  "Mungkin, untuk periode ketika manajer berhalangan lain, bila bisa diidentifikasi",
                  "Hanya berguna bila kontrol di luar periode itu memang tidak bermasalah"
                ],
                [
                  "(c) Apakah RMM perlu dijawab dengan prosedur substantif",
                  "Ya, untuk pesanan di atas Rp50 juta pada periode tanpa paraf, misalnya memperluas konfirmasi piutang dan pemeriksaan dokumen pendukung",
                  "ISA 330 A48: memperluas substantif hanya efektif bila prosedurnya relevan dengan risikonya"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "Kesimpulan: penilaian control risk asersi occurrence dan accuracy yang bergantung pada kontrol ini tidak bisa tetap rendah untuk seluruh tahun. Defisiensi ini juga perlu ditimbang kemungkinan signifikansinya karena akibatnya pada penjualan kredit besar, bukan hanya pada satu pesanan."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Organisasi jasa dan keahlian TI",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** bila klien memakai pusat layanan eksternal untuk memproses transaksi yang material, kontrolnya berada di luar klien dan auditor tidak boleh menganggapnya memadai hanya karena pusat layanan itu perusahaan independen. Bukti bisa datang dari laporan Type 2, pengujian kontrol pengguna, atau pengujian langsung di organisasi jasa. Lingkungan TI yang kompleks bisa membutuhkan spesialis."
        },
        {
          "kind": "p",
          "text": "Hampir semua organisasi, besar maupun kecil, memakai semacam pusat layanan eksternal, misalnya penyedia jasa penggajian atau pialang yang memproses transaksi investasi. Karena kontrolnya ada di pusat layanan, auditor tidak boleh menganggap kontrol itu memadai hanya karena pusat layanan merupakan perusahaan independen. CAS 402 meminta auditor mempertimbangkan perlunya memahami dan menguji kontrol pusat layanan bila aplikasinya memproses data keuangan yang signifikan. Kedalaman pemahaman bergantung pada kompleksitas sistem dan seberapa besar kontrol itu diandalkan untuk menurunkan penilaian control risk asersi terkait. `(ARENS p.309)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Buku menyebut pialang yang memproses transaksi investasi sebagai contoh pusat layanan. ISA 402 para. 5 mengecualikan layanan lembaga keuangan yang terbatas pada pemrosesan, untuk rekening entitas di lembaga itu, transaksi yang secara khusus diotorisasi entitas, dan menyebut pemrosesan transaksi sekuritas oleh pialang sebagai contoh. Karena itu, contoh pialang di buku berlaku sejauh layanannya melampaui pemrosesan transaksi yang diotorisasi entitas. Contoh penyedia jasa penggajian tidak terkena pengecualian ini. `(ARENS p.309; ISA402 para. 5)`"
        },
        {
          "kind": "p",
          "text": "Laporan auditor layanan (service auditor report) dimaksudkan memberi keseragaman cara penyedia layanan mengungkapkan aktivitas dan prosesnya kepada pelanggan dan auditor mereka. Tujuannya memberi pelanggan keyakinan memadai atas kecukupan general dan application controls pusat layanan dan menghindari audit berulang oleh auditor pelanggan. CAS 402 memberi panduan bagi auditor pengguna (user auditor), dan CSAE 3416 bagi auditor yang menerbitkan laporan atas kontrol organisasi jasa (service auditor). `(ARENS p.310)`"
        },
        {
          "kind": "table",
          "title": "Laporan Type 1 dan Type 2 atas organisasi jasa",
          "headers": [
            "Jenis",
            "Isi menurut buku",
            "Isi menurut ISA 402",
            "Fungsi bagi auditor pengguna",
            "Sumber"
          ],
          "rows": [
            [
              "Type 1",
              "Laporan atas deskripsi manajemen tentang sistem organisasi jasa dan kesesuaian desain kontrol",
              "Deskripsi sistem, tujuan kontrol, dan kontrol yang dirancang dan diterapkan pada tanggal tertentu, dengan opini auditor layanan atas kesesuaian desain",
              "Membantu memahami kontrol untuk merencanakan audit",
              "ARENS p.310; ISA402 para. 8(b)"
            ],
            [
              "Type 2",
              "Laporan atas deskripsi dan kesesuaian desain serta efektivitas operasi kontrol",
              "Sama dengan Type 1 untuk periode tertentu, ditambah opini atas efektivitas operasi dan uraian tes serta hasilnya",
              "Memberi bukti efektivitas operasi untuk menilai control risk",
              "ARENS p.310; ISA402 para. 8(c)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Auditor yang ingin mengandalkan kontrol organisasi jasa dapat memperoleh bukti efektivitas operasi dari tiga sumber. Buku menyebut ketiganya, dan ISA 402 para. 16 memuat tiga cara yang sejalan untuk tests of controls di organisasi jasa. `(ARENS p.310; ISA402 para. 16)`"
        },
        {
          "kind": "table",
          "title": "Tiga sumber bukti efektivitas operasi kontrol yang diproses organisasi jasa",
          "headers": [
            "Sumber",
            "Keterangan",
            "Syarat atau catatan",
            "Sumber rujukan"
          ],
          "rows": [
            [
              "Laporan Type 2 dari auditor layanan",
              "Berisi tes efektivitas operasi kontrol",
              "Auditor pengguna menanyakan reputasi auditor layanan, dan menurut ISA 402 mengevaluasi kompetensi dan independensinya, tanggal atau periode laporan, serta relevansi tes dan hasilnya",
              "ARENS p.310; ISA402 paras. 13, 17"
            ],
            [
              "Tes atas kontrol organisasi pengguna pada aktivitas organisasi jasa",
              "Auditor menguji kontrol di sisi klien yang mengawasi atau merekonsiliasi hasil pemrosesan",
              "Mengurangi kebutuhan menguji di organisasi jasa",
              "ARENS p.310"
            ],
            [
              "Pengujian langsung oleh auditor pengguna di organisasi jasa",
              "Auditor atau auditor lain melakukan prosedur di lokasi organisasi jasa",
              "Dipakai bila bukti lain tidak cukup",
              "ARENS p.310; ISA402 para. 16(b)–(c)"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "pendalaman",
          "title": "Aset kripto: ketika tidak ada laporan auditor layanan (Auditing in Action 9-3)",
          "blocks": [
            {
              "kind": "p",
              "text": "Mengaudit klien yang memegang atau memperdagangkan aset kripto menghadirkan tantangan besar. Protokol dan kriptografi dirancang membuat blockchain \"aman\", tetapi auditor tidak bisa mengandalkannya tanpa mengevaluasi desain dan implementasinya. Karena itu auditor perlu melibatkan spesialis blockchain dan kriptografi. Bisa jadi juga tidak praktis mengaudit aset dan transaksi kripto tanpa mengandalkan operasi efektif kontrol yang relevan, sehingga auditor, dengan bantuan spesialis, menguji efektivitas operasi kontrol. `(ARENS p.309)`"
            },
            {
              "kind": "p",
              "text": "Dua asersi yang paling berisiko adalah existence dan rights (kepemilikan). Identitas pihak yang bertransaksi di blockchain tampil sebagai karakter alfanumerik, sehingga hak kepemilikan tidak mudah terlihat. Setiap alamat kripto terikat pada sepasang kunci enkripsi privat dan publik. Kunci publik memungkinkan pengguna lain mengirim dana ke alamat itu, dan kunci privat memungkinkan pemilik alamat mengirim pembayaran ke alamat lain. Bila dibandingkan dengan perbankan tradisional, kunci publik seperti nomor rekening dan kunci privat seperti PIN. `(ARENS p.309)`"
            },
            {
              "kind": "p",
              "text": "Risiko lain muncul ketika organisasi memakai bursa kripto untuk bertransaksi atas namanya. Bursa bertindak sebagai pialang dan kustodian yang menyimpan kunci privat pengguna. Berbeda dengan kustodian di industri sekuritas tradisional, kustodian dan bursa kripto relatif belum matang dan sebagian besar tidak diatur. Menurut komunikasi CPAB yang dikutip buku, karena tidak ada laporan auditor layanan yang membuktikan efektivitas kontrol di bursa dan kustodian kripto, auditor perlu memahami, mengevaluasi, dan menguji kontrol langsung di bursa atau kustodian. `(ARENS p.309)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Pemetaan ke tabel tiga sumber bukti adalah susunan penulis. Karena sumber pertama (laporan Type 2) tidak tersedia, sumber ketiga menjadi satu-satunya jalan, yaitu pengujian langsung oleh auditor atau spesialisnya di bursa atau kustodian. Contoh ini juga memperlihatkan pendekatan tests of controls saja dari section 4: sistemnya sangat otomatis dan bukti substantif nyaris tidak ada di luar sistem itu. `(ARENS pp.309, 312)`"
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Formalitas general IT controls dan peran spesialis TI"
        },
        {
          "kind": "p",
          "text": "Semua organisasi membutuhkan general IT controls, tetapi tingkat formalitasnya berbeda sesuai kompleksitas lingkungan TI. Bila organisasi memakai perangkat lunak komersial, tidak punya akses ke kode sumber, dan mengelola akses aplikasi lewat prosedur manual seperti menunjuk seorang individu, general IT controls yang formal mungkin tidak diperlukan. Organisasi besar yang sangat bergantung pada TI, dengan banyak aplikasi dan proses kompleks, memerlukan general IT controls yang formal. `(ARENS p.310)`"
        },
        {
          "kind": "p",
          "text": "Bila klien punya lingkungan TI kompleks, tim audit menilai apakah ia punya keahlian TI yang dibutuhkan, karena audit membutuhkan pengumpulan bukti elektronik, atau apakah perlu memasukkan spesialis TI ke dalam tim. `(ARENS p.310)`"
        },
        {
          "kind": "table",
          "title": "Lima tugas spesialis TI dalam tim audit",
          "headers": [
            "No",
            "Tugas",
            "Sumber"
          ],
          "rows": [
            [
              "1",
              "Membantu mendokumentasikan dan menilai lingkungan pengendalian TI, termasuk general IT controls dan disaster recovery",
              "ARENS p.310"
            ],
            [
              "2",
              "Menguji general controls",
              "ARENS p.310"
            ],
            [
              "3",
              "Mendokumentasikan dan menilai kontrol otomatis kunci",
              "ARENS p.310"
            ],
            [
              "4",
              "Mengembangkan alat dan teknik otomatis untuk menguji kontrol dan melakukan pengujian substantif",
              "ARENS p.310"
            ],
            [
              "5",
              "Mengevaluasi kelemahan dan menyusun rekomendasi perbaikan kontrol TI",
              "ARENS p.310"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "8. Prosedur substantif yang wajib dilakukan",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** prosedur substantif terdiri dari tests of details dan substantive analytical procedures. Prosedur ini wajib untuk setiap kelas transaksi, saldo akun, dan pengungkapan yang material, untuk setiap risiko signifikan, dan untuk proses penutupan laporan keuangan. Hasil tests of controls menentukan seberapa luas prosedur substantif, dan bukan apakah prosedur itu ada."
        },
        {
          "kind": "p",
          "text": "Risiko salah saji pada tingkat asersi menuntun rancangan prosedur lanjutan (further audit procedures). Buku menyebut prosedur lanjutan pada umumnya terdiri dari prosedur substantif, yaitu tests of details dan substantive analytical procedures, serta tests of controls bila ada ekspektasi kontrol beroperasi efektif sepanjang periode atau pada proses yang sangat otomatis. Logika pemilihannya mempertimbangkan efisiensi dan efektivitas, dan makin tinggi RMM, makin meyakinkan bukti yang dibutuhkan. `(ARENS p.338; ISA330 para. 7(b))`"
        },
        {
          "kind": "h3",
          "text": "Tiga pilihan prosedur substantif"
        },
        {
          "kind": "p",
          "text": "Dalam menentukan prosedur substantif yang paling responsif terhadap risiko tingkat asersi, auditor dapat memilih salah satu dari tiga hal berikut. `(ARENS p.338; ISA330 para. A45)`"
        },
        {
          "kind": "table",
          "title": "Tiga pilihan prosedur substantif dan kapan masing-masing cocok",
          "headers": [
            "Pilihan",
            "Kapan cocok",
            "Catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Tests of details saja",
              "Auditor perlu memeriksa rincian sampel atau seluruh transaksi atau saldo yang mendasari akun",
              "Contoh: memilih sampel faktur penjualan lalu mencocokkan rinciannya dengan dokumen pengiriman, atau mengonfirmasi saldo piutang individual ke pelanggan",
              "ARENS p.339"
            ],
            [
              "Substantive analytical procedures saja",
              "Total aliran transaksi atau saldo akun dapat diprediksi secara andal lalu dibandingkan dengan jumlah aktual. Cocok untuk volume besar transaksi yang cenderung dapat diprediksi.",
              "Tidak boleh dipakai sendirian untuk risiko signifikan. Dapat memadai bila inherent risk asersi rendah, atau bila penilaian risiko didukung bukti tests of controls.",
              "ARENS pp.338–339; ISA330 paras. A45–A46"
            ],
            [
              "Gabungan tests of details dan prosedur analitis",
              "Keadaan paling responsif terhadap risiko tersebut",
              "Pilihan paling umum bagi risiko yang lebih tinggi",
              "ARENS p.338; ISA330 para. A45"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Prosedur analitis substantif bisa lebih efektif atau efisien daripada tests of details yang sering memakan waktu. Prosedur ini dapat memberi bukti untuk banyak asersi sekaligus, menemukan masalah yang tidak tampak dari pengujian detail sampel transaksi, dan mengarahkan perhatian auditor ke area yang perlu prosedur lanjutan. Bila ekspektasi yang dikembangkan auditor menunjukkan saldo akhir wajar, sebagian tests of details saldo dapat ditiadakan atau sampelnya dikurangi. Untuk akun yang tidak signifikan dan berpotensi kecil salah saji material, seperti banyak akun perlengkapan dan biaya dibayar di muka, auditor sering dapat membatasi pengujian pada prosedur analitis substantif. `(ARENS pp.339–340)`"
        },
        {
          "kind": "h3",
          "text": "Kapan prosedur substantif wajib"
        },
        {
          "kind": "p",
          "text": "Walau jenis prosedur ditentukan dengan pertimbangan profesional, standar mewajibkan prosedur substantif dalam keadaan tertentu. `(ARENS p.339)`"
        },
        {
          "kind": "table",
          "title": "Keadaan yang mewajibkan prosedur substantif menurut ISA 330",
          "headers": [
            "Keadaan",
            "Kewajiban",
            "Catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Setiap kelas transaksi, saldo akun, dan pengungkapan yang material",
              "Prosedur substantif wajib, apa pun risiko yang dinilai",
              "Penilaian risiko bersifat pertimbangan sehingga bisa tidak mengenali semua risiko, dan kontrol punya keterbatasan bawaan termasuk management override. Tidak semua asersi dalam kelas material wajib diuji. Yang diutamakan adalah asersi yang bila salah saji berpeluang material.",
              "ISA330 paras. 18, A43–A44; ARENS p.339"
            ],
            [
              "Setiap risiko signifikan pada tingkat asersi",
              "Prosedur substantif yang secara khusus responsif terhadap risiko itu. Bila pendekatannya hanya substantif, wajib memuat tests of details.",
              "Konfirmasi eksternal yang diterima langsung auditor bisa memberi keandalan tinggi. Contoh: konfirmasi rincian perjanjian penjualan, termasuk tanggal, hak retur, dan syarat pengiriman.",
              "ISA330 paras. 21, A55; ARENS p.339"
            ],
            [
              "Konfirmasi eksternal",
              "Auditor mempertimbangkan apakah akan dilakukan sebagai prosedur substantif",
              "Relevan untuk saldo bank, piutang, persediaan di pihak ketiga, dan utang. Kurang relevan untuk keterpulihan piutang dibandingkan untuk eksistensinya.",
              "ISA330 paras. 19, A50–A53"
            ],
            [
              "Proses penutupan laporan keuangan",
              "Mencocokkan atau merekonsiliasi informasi di laporan keuangan dengan catatan akuntansi yang mendasari, termasuk pengungkapan. Memeriksa jurnal material dan penyesuaian lain saat menyusun laporan.",
              "Hanya bisa dilakukan pada atau setelah akhir periode",
              "ISA330 paras. 20, A13, A54"
            ],
            [
              "Penyajian laporan keuangan dalam satu kesatuan",
              "Mengevaluasi klasifikasi dan uraian serta penyajian, struktur, dan isi sesuai kerangka pelaporan",
              "Menjadi bagian kesimpulan akhir",
              "ISA330 para. 24"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Untuk risiko signifikan, prosedur analitis substantif saja tidak cukup. Bila pendekatan terhadap risiko signifikan hanya berupa prosedur substantif, prosedur itu harus memuat tests of details. Soal yang mengajukan analitis saja untuk pengakuan pendapatan yang berisiko signifikan menguji hal ini. `(ISA330 para. 21; ARENS pp.338–339)`"
        },
        {
          "kind": "h3",
          "text": "Arah pemilihan sampel pada tests of details"
        },
        {
          "kind": "p",
          "text": "Sifat asersi memengaruhi rancangan tests of details. Pemilihan dari item yang tercantum di jumlah laporan keuangan cocok untuk existence atau occurrence. Pemilihan dari item yang seharusnya ada cocok untuk completeness. `(ISA330 para. A47)`"
        },
        {
          "kind": "table",
          "title": "Arah pemilihan item pada tests of details menurut asersi",
          "headers": [
            "Asersi yang dijawab",
            "Pemilihan item dimulai dari",
            "Yang dicari",
            "Contoh (penulis)",
            "Sumber"
          ],
          "rows": [
            [
              "Existence atau occurrence",
              "Item yang sudah tercantum di jumlah laporan keuangan",
              "Bukti bahwa item itu benar ada atau benar terjadi",
              "Memilih faktur penjualan dari jurnal penjualan lalu mencocokkan dengan dokumen pengiriman",
              "ISA330 para. A47"
            ],
            [
              "Completeness",
              "Item yang seharusnya termasuk dalam jumlah laporan keuangan",
              "Apakah item itu tercatat di jumlah tersebut",
              "Memilih dokumen pengiriman lalu menelusuri apakah masing-masing sudah ditagih dan tercatat",
              "ISA330 para. A47"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi.** Contoh di kolom keempat adalah susunan penulis dan selaras dengan pola test of controls C5 di Hillsburg, yang mempertanggungjawabkan rangkaian dokumen pengiriman lalu menelusurinya ke jurnal penjualan. Pola itu adalah arah dari dokumen ke catatan, yaitu arah completeness. `(ARENS p.315; ISA330 para. A47)`"
        },
        {
          "kind": "h3",
          "text": "Hasil tests of controls dan extent prosedur substantif"
        },
        {
          "kind": "p",
          "text": "Penilaian RMM memperhitungkan kontrol yang akan diuji. Karena itu extent prosedur substantif mungkin perlu ditambah bila hasil tests of controls tidak memuaskan. Penambahan extent hanya tepat bila prosedurnya sendiri relevan dengan risiko yang dihadapi. `(ISA330 para. A48)`"
        },
        {
          "kind": "table",
          "title": "Hasil tests of controls dan akibatnya pada prosedur substantif",
          "headers": [
            "Hasil",
            "Control risk",
            "Akibat pada prosedur substantif",
            "Sumber"
          ],
          "rows": [
            [
              "Mendukung penilaian awal (moderate atau low)",
              "Tetap rendah atau moderat",
              "Nature, timing, dan extent prosedur substantif dapat disesuaikan: prosedur pada tanggal interim, perubahan nature, dan pengurangan extent",
              "ARENS p.302"
            ],
            [
              "Tidak mendukung penilaian awal",
              "Naik, biasanya ke tinggi",
              "Pendekatan beralih ke substantif dengan extent lebih besar untuk mengukur potensi salah saji pada asersi terkait",
              "ARENS pp.302–303, 314"
            ],
            [
              "Kontrol tidak ada atau tidak efektif sejak awal",
              "Tinggi",
              "RMM sama dengan inherent risk, dan auditor memperluas prosedur substantif agar mengurangi detection risk",
              "ARENS pp.303, 309"
            ],
            [
              "Prosedur substantif sendiri menemukan salah saji yang tidak diperkirakan",
              "Perlu ditimbang ulang",
              "Menilai apakah penilaian risiko, dan nature, timing, extent prosedur untuk sisa periode perlu diubah",
              "ISA330 paras. 16, 23"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "h3",
          "text": "Dual-purpose tests dan prosedur fraud yang wajib"
        },
        {
          "kind": "p",
          "text": "Auditor dapat melakukan test of control dan test of detail pada transaksi yang sama dan pada waktu yang sama. Prosedur seperti ini disebut dual-purpose test. Contohnya, inspeksi dan reperformance atas transaksi yang sama bisa menjadi tests of controls sekaligus pengujian kebenaran moneter, karena reperformance memberi bukti tentang kontrol dan kebenaran nilai sekaligus. `(ARENS p.340; ISA330 para. A23)`"
        },
        {
          "kind": "pendalaman",
          "title": "Satu sampel, dua kesimpulan: dual-purpose test pada three-way match",
          "blocks": [
            {
              "kind": "p",
              "text": "Buku memberi contoh sistem pembelian yang mewajibkan three-way match antara kuantitas di faktur, laporan penerimaan, dan pesanan pembelian sebelum faktur disetujui untuk dibayar. Auditor memakai audit software untuk mencari pembelian yang tidak memenuhi kriteria match. Hasilnya memberi bukti substantif tentang akurasi transaksi pembelian, sekaligus bukti apakah kontrol three-way match efektif. `(ARENS p.316)`"
            },
            {
              "kind": "p",
              "text": "ISA 330 A23 menegaskan bahwa tujuan test of controls berbeda dengan tujuan test of details. Tes yang dirancang untuk keduanya harus dirancang dan dievaluasi dengan mempertimbangkan masing-masing tujuan secara terpisah. `(ISA330 para. A23)`"
            },
            {
              "kind": "table",
              "title": "Dua kesimpulan dari satu sampel pembelian (contoh penulis)",
              "headers": [
                "Aspek",
                "Sebagai test of control",
                "Sebagai test of detail"
              ],
              "rows": [
                [
                  "Yang diperiksa pada tiap faktur",
                  "Apakah ada bukti three-way match disetujui sebelum pembayaran",
                  "Apakah kuantitas, harga, dan jumlah di faktur benar dibandingkan dokumen pendukung"
                ],
                [
                  "Hasil contoh: 25 faktur dipilih",
                  "2 faktur tanpa bukti match, yaitu deviasi 2 dibagi 25, atau 8 persen",
                  "1 faktur terlalu tinggi Rp1.200.000 karena harga"
                ],
                [
                  "Dibandingkan dengan",
                  "Tingkat deviasi yang diharapkan",
                  "Materialitas dan salah saji lain yang ditemukan"
                ],
                [
                  "Akibat",
                  "Menilai apakah kontrol bisa diandalkan sesuai penilaian risiko",
                  "Dikumpulkan bersama salah saji lain untuk dievaluasi terhadap materialitas"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Angka 25 faktur, dua deviasi, dan Rp1.200.000 adalah rekaan penulis untuk menunjukkan bahwa dua kesimpulan itu terpisah. Satu faktur yang salah saji dan dua faktur yang tidak punya bukti match tidak harus faktur yang sama. Dua kesimpulan perlu dicatat sendiri-sendiri di kertas kerja. Penentuan ukuran sampel dibahas di Ch.11. `(ISA330 paras. A23, A63)`"
            }
          ]
        },
        {
          "kind": "p",
          "text": "Untuk semua audit, standar meminta auditor mengembangkan prosedur khusus atas risiko fraud akibat potensi management override dan risiko fraud pengakuan pendapatan yang dianggap ada, dengan unsur ketidakterdugaan (misalnya kunjungan tanpa pemberitahuan ke penghitungan persediaan). Substantif analitis tidak boleh dipakai sendirian atas risiko signifikan. `(ARENS pp.339–340; ISA330 para. A11)` Rincian prosedur ini dibahas lebih lanjut di TM15 dan sudah diperkenalkan di TM12."
        },
        {
          "kind": "h3",
          "text": "Prosedur substantif pada tanggal interim"
        },
        {
          "kind": "table",
          "title": "Prosedur substantif pada tanggal interim dan pengaruhnya",
          "headers": [
            "Hal",
            "Isi",
            "Sumber"
          ],
          "rows": [
            [
              "Kewajiban untuk sisa periode",
              "Bila prosedur substantif dilakukan di tanggal interim, auditor menutup sisa periode dengan prosedur substantif yang digabung tests of controls untuk periode di antaranya, atau prosedur substantif saja bila dinilai cukup, agar ada dasar yang wajar memperluas kesimpulan ke akhir periode",
              "ISA330 para. 22"
            ],
            [
              "Risiko",
              "Prosedur interim tanpa prosedur tambahan meningkatkan risiko salah saji tidak terdeteksi, dan risiko itu naik bila sisa periode lebih panjang",
              "ISA330 para. A58"
            ],
            [
              "Faktor yang memengaruhi keputusan",
              "Lingkungan pengendalian dan kontrol lain, ketersediaan informasi di kemudian hari, tujuan prosedur, risiko salah saji yang dinilai, sifat akun dan asersi, serta kemampuan mencakup sisa periode",
              "ISA330 para. A58"
            ],
            [
              "Salah saji tak terduga di interim",
              "Menilai apakah penilaian risiko dan nature, timing, extent prosedur untuk sisa periode perlu diubah, misalnya memperluas atau mengulang prosedur di akhir periode",
              "ISA330 paras. 23, A60"
            ],
            [
              "Bukti dari audit tahun lalu",
              "Umumnya memberi sedikit atau tidak ada bukti untuk periode berjalan, dengan pengecualian seperti opini hukum tentang struktur sekuritisasi yang tidak berubah",
              "ISA330 para. A56"
            ],
            [
              "Lebih tepat di akhir periode",
              "Bila risiko salah saji lebih tinggi, terutama risiko fraud dan manipulasi, atau bila lingkungan pengendalian lemah",
              "ISA330 paras. A2, A11"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "9. Melaporkan defisiensi pengendalian",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** auditor wajib mengomunikasikan secara tertulis defisiensi pengendalian yang signifikan kepada pihak tata kelola dan manajemen. Defisiensi lain yang layak diketahui manajemen boleh disampaikan lisan. Tingkat keparahan dinilai dari kemungkinan dan besarnya salah saji yang bisa terjadi, bukan dari ada tidaknya salah saji."
        },
        {
          "kind": "h3",
          "text": "Tingkat defisiensi"
        },
        {
          "kind": "p",
          "text": "Standar CAS 265 menurut buku mendefinisikan tiga tingkat ketiadaan kontrol: control deficiency, significant deficiency, dan material weakness. `(ARENS p.302)`"
        },
        {
          "kind": "table",
          "title": "Tingkat defisiensi pengendalian menurut buku dan ISA 265",
          "headers": [
            "Tingkat",
            "Menurut buku",
            "Menurut ISA 265",
            "Sumber"
          ],
          "rows": [
            [
              "Control deficiency",
              "Ada bila desain atau operasi kontrol tidak mendeteksi dan mengoreksi salah saji tepat waktu. Defisiensi desain: kontrol yang diperlukan hilang atau tidak dirancang dengan benar. Defisiensi operasi: kontrol yang dirancang baik tidak beroperasi sebagaimana dirancang, atau pelaksananya kurang kualifikasi atau tidak berwenang.",
              "Ada bila kontrol dirancang, diterapkan, atau dijalankan sedemikian rupa sehingga tidak mampu mencegah atau mendeteksi dan mengoreksi salah saji tepat waktu, atau kontrol yang diperlukan tidak ada",
              "ARENS p.302; ISA265 para. 6(a)"
            ],
            [
              "Significant deficiency",
              "Satu atau gabungan defisiensi yang menurut pertimbangan profesional auditor cukup penting untuk menjadi perhatian pihak tata kelola, dan kurang parah daripada material weakness",
              "Satu defisiensi atau gabungan yang menurut pertimbangan profesional auditor cukup penting untuk menjadi perhatian pihak tata kelola",
              "ARENS p.302; ISA265 para. 6(b)"
            ],
            [
              "Material weakness",
              "Significant deficiency, sendiri atau bersama yang lain, yang menimbulkan kemungkinan yang beralasan bahwa pengendalian tidak akan mencegah atau mendeteksi salah saji keuangan material tepat waktu",
              "Tidak didefinisikan dalam ISA 265",
              "ARENS p.302"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** ISA 265 hanya mendefinisikan dua istilah, yaitu defisiensi dan defisiensi signifikan. Istilah material weakness dan pembagian tiga tingkat berasal dari buku dan konteks audit pengendalian pelaporan keuangan yang dibahas di akhir bab. ISA 265 A9 sampai A11 mengatur bahwa bila hukum atau regulasi menetapkan istilah tertentu dan mewajibkan penggunaannya, auditor memakai istilah itu, dan persyaratan ISA 265 tetap berlaku. Untuk audit laporan keuangan menurut ISA, jawaban dasarnya memakai dua tingkat. `(ARENS pp.302, 320; ISA265 paras. 6, A9–A11)`"
        },
        {
          "kind": "p",
          "text": "Defisiensi desain dan defisiensi operasi berbeda sumbernya. Kontrol yang hilang atau salah rancang adalah kesalahan desain. Kontrol yang dirancang baik tetapi tidak dijalankan sesuai rancangan, atau dijalankan orang yang kurang kualifikasi, adalah kesalahan operasi. Kontrol yang dirancang tidak tepat adalah defisiensi dan bisa dinilai signifikan. Ketiadaan kontrol atas \"apa yang bisa salah\" juga defisiensi yang bisa signifikan. `(ARENS p.302)`"
        },
        {
          "kind": "h3",
          "text": "Menilai apakah defisiensi signifikan"
        },
        {
          "kind": "p",
          "text": "Defisiensi dievaluasi dengan dua dimensi seperti inherent risk: kemungkinan (likelihood) dan signifikansi. Bila ada lebih dari kemungkinan yang beralasan bahwa salah saji material dapat terjadi akibat defisiensi signifikan, defisiensi itu dapat dianggap material weakness. `(ARENS pp.302–303)` Buku mengingatkan bahwa material weakness tidak berarti salah saji material sudah terjadi. Artinya ada kemungkinan yang beralasan bahwa kontrol tidak akan mencegah atau mendeteksinya. Bobot sebuah kelemahan sebanding dengan besarnya kesalahan atau fraud yang kemungkinan timbul darinya. `(ARENS p.303)`"
        },
        {
          "kind": "p",
          "text": "ISA 265 A5 menyatakan bahwa kesignifikanan bergantung bukan hanya pada apakah salah saji sudah terjadi, tetapi juga pada kemungkinannya dan besar potensinya, sehingga defisiensi signifikan bisa ada walau auditor tidak menemukan salah saji. `(ISA265 para. A5)`"
        },
        {
          "kind": "table",
          "title": "Faktor yang dipertimbangkan dalam menilai defisiensi signifikan (ISA 265 A6)",
          "headers": [
            "Faktor",
            "Contoh atau penjelasan",
            "Sumber"
          ],
          "rows": [
            [
              "Kemungkinan defisiensi menyebabkan salah saji material di masa depan",
              "Dinilai dari sifat defisiensi dan kontrol lain",
              "ISA265 para. A6"
            ],
            [
              "Kerentanan aset atau liabilitas terhadap kehilangan atau fraud",
              "Kas dan persediaan yang mudah dicuri lebih rentan",
              "ISA265 para. A6"
            ],
            [
              "Subjektivitas dan kompleksitas penentuan jumlah estimasi",
              "Misalnya estimasi nilai wajar",
              "ISA265 para. A6"
            ],
            [
              "Jumlah laporan keuangan yang terpapar defisiensi",
              "Semakin besar jumlahnya, semakin penting",
              "ISA265 para. A6"
            ],
            [
              "Volume aktivitas pada akun atau kelas transaksi yang terpapar",
              "Volume yang sudah atau mungkin terjadi",
              "ISA265 para. A6"
            ],
            [
              "Pentingnya kontrol bagi proses pelaporan keuangan",
              "Misalnya pengawasan manajemen, pencegahan dan pendeteksian fraud, pemilihan kebijakan akuntansi, transaksi pihak berelasi, transaksi di luar kegiatan normal, dan proses pelaporan akhir periode",
              "ISA265 para. A6"
            ],
            [
              "Penyebab dan frekuensi pengecualian yang ditemukan",
              "Dari defisiensi pada kontrol",
              "ISA265 para. A6"
            ],
            [
              "Interaksi dengan defisiensi lain",
              "Kombinasi defisiensi pada akun, asersi, atau komponen yang sama dapat menjadi signifikan walau masing-masing tidak signifikan",
              "ISA265 paras. A6, A8"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "table",
          "title": "Keadaan yang menandakan defisiensi signifikan menurut buku dan ISA 265",
          "headers": [
            "Keadaan",
            "Buku",
            "ISA 265 A7",
            "Sumber"
          ],
          "rows": [
            [
              "Fraud sebesar apa pun yang melibatkan manajemen senior",
              "Ya",
              "Ya, yaitu fraud manajemen yang tidak dicegah kontrol entitas, material atau tidak",
              "ARENS p.302; ISA265 para. A7"
            ],
            [
              "Defisiensi yang dikomunikasikan sebelumnya tetapi belum diperbaiki",
              "Ya",
              "Ya, yaitu kegagalan manajemen menerapkan perbaikan atas defisiensi signifikan yang dikomunikasikan sebelumnya",
              "ARENS p.302; ISA265 para. A7"
            ],
            [
              "Kegagalan merespons risiko signifikan",
              "Ya",
              "Ya, yaitu respons tidak efektif atas risiko signifikan, misalnya tidak ada kontrol atas risiko itu",
              "ARENS p.302; ISA265 para. A7"
            ],
            [
              "Penyajian kembali laporan keuangan yang sudah terbit",
              "Ya",
              "Ya, untuk mengoreksi salah saji material akibat kesalahan atau fraud",
              "ARENS p.302; ISA265 para. A7"
            ],
            [
              "Salah saji yang ditemukan prosedur auditor tetapi tidak dicegah atau dideteksi kontrol entitas",
              "Tidak disebut",
              "Ya",
              "ISA265 para. A7"
            ],
            [
              "Tidak ada proses penilaian risiko, atau proses yang tidak efektif",
              "Tidak disebut",
              "Ya",
              "ISA265 para. A7"
            ],
            [
              "Ketidakmampuan manajemen mengawasi penyusunan laporan keuangan",
              "Tidak disebut",
              "Ya",
              "ISA265 para. A7"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Kontrol kompensasi ikut ditimbang. Bila ada kontrol kompensasi, kelemahan tidak lagi menjadi perhatian karena potensi salah saji sudah cukup berkurang. `(ARENS p.303)`"
        },
        {
          "kind": "h3",
          "text": "Isi, penerima, dan waktu komunikasi"
        },
        {
          "kind": "figure",
          "title": "Alur pelaporan defisiensi pengendalian",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 732\" width=\"100%\" role=\"img\" aria-labelledby=\"f14-pelaporan-t f14-pelaporan-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f14-pelaporan-t\">Alur pelaporan defisiensi pengendalian</title><desc id=\"f14-pelaporan-d\">Dua kartu berurutan, dua kartu cabang untuk defisiensi signifikan dan defisiensi lain, dan satu kartu isi komunikasi.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"732\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">1. Temukan defisiensi</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Dari prosedur penilaian risiko, tests of</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">controls, atau prosedur substantif</text><rect class=\"svg-title\" x=\"238.5\" y=\"122\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 133 L240 146 L248 133 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"148\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"178\" font-size=\"19\" font-weight=\"800\">2. Nilai tunggal atau gabungan</text><text class=\"svg-text\" x=\"34\" y=\"206\" font-size=\"18\">Kemungkinan dan besar potensi salah</text><text class=\"svg-text\" x=\"34\" y=\"230\" font-size=\"18\">saji. Pertimbangkan kontrol kompensasi.</text><rect class=\"svg-title\" x=\"238.5\" y=\"250\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 261 L240 274 L248 261 Z\"/><rect class=\"svg-badge-red\" x=\"20\" y=\"276\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"306\" font-size=\"19\" font-weight=\"800\">Defisiensi signifikan</text><text class=\"svg-text\" x=\"34\" y=\"334\" font-size=\"18\">Tertulis, tepat waktu, kepada pihak tata</text><text class=\"svg-text\" x=\"34\" y=\"358\" font-size=\"18\">kelola dan manajemen</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"388\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"418\" font-size=\"19\" font-weight=\"800\">Defisiensi lain yang layak</text><text class=\"svg-title\" x=\"34\" y=\"442\" font-size=\"19\" font-weight=\"800\">diperhatikan manajemen</text><text class=\"svg-text\" x=\"34\" y=\"470\" font-size=\"18\">Boleh lisan, atau dimuat di management</text><text class=\"svg-text\" x=\"34\" y=\"494\" font-size=\"18\">letter</text><rect class=\"svg-title\" x=\"238.5\" y=\"514\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 525 L240 538 L248 525 Z\"/><rect class=\"svg-subcard\" x=\"20\" y=\"540\" width=\"440\" height=\"172\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"570\" font-size=\"19\" font-weight=\"800\">Isi komunikasi tertulis</text><text class=\"svg-text\" x=\"34\" y=\"598\" font-size=\"18\">Weakness: apa temuannya</text><text class=\"svg-text\" x=\"34\" y=\"622\" font-size=\"18\">Implication: potensi dampaknya</text><text class=\"svg-text\" x=\"34\" y=\"646\" font-size=\"18\">Recommendation: saran perbaikan</text><text class=\"svg-text\" x=\"34\" y=\"670\" font-size=\"18\">Plus konteks audit dan tanggapan</text><text class=\"svg-text\" x=\"34\" y=\"694\" font-size=\"18\">manajemen</text></svg>",
          "overview": {
            "heading": "Alur pelaporan defisiensi pengendalian",
            "cards": [
              {
                "title": "1. Temukan defisiensi",
                "subtitle": "",
                "items": [
                  "Dari prosedur penilaian risiko, tests of controls, atau prosedur substantif"
                ],
                "takeaway": ""
              },
              {
                "title": "2. Nilai tunggal atau gabungan",
                "subtitle": "",
                "items": [
                  "Kemungkinan dan besar potensi salah saji",
                  "Pertimbangkan kontrol kompensasi"
                ],
                "takeaway": ""
              },
              {
                "title": "Defisiensi signifikan",
                "subtitle": "",
                "items": [
                  "Tertulis, tepat waktu, kepada pihak tata kelola dan manajemen"
                ],
                "takeaway": ""
              },
              {
                "title": "Defisiensi lain yang layak diperhatikan manajemen",
                "subtitle": "",
                "items": [
                  "Boleh lisan, atau dimuat di management letter"
                ],
                "takeaway": ""
              },
              {
                "title": "Isi komunikasi tertulis",
                "subtitle": "",
                "items": [
                  "Weakness, Implication, Recommendation",
                  "Plus konteks audit dan tanggapan manajemen"
                ],
                "takeaway": ""
              }
            ],
            "footer": "Sumber: ARENS pp.319–320; ISA265 paras. 8–11, A5–A29."
          },
          "caption": "Gambar 14.6: Alur pelaporan defisiensi pengendalian. Disusun dari ARENS pp.319–320 dan ISA265 paras. 8–11, A5–A29.",
          "altText": "Alur dari temuan defisiensi ke penilaian tunggal atau gabungan dengan mempertimbangkan kemungkinan, besar potensi salah saji, dan kontrol kompensasi. Defisiensi signifikan dikomunikasikan tertulis dan tepat waktu kepada pihak tata kelola dan manajemen. Defisiensi lain yang layak diperhatikan manajemen boleh disampaikan lisan atau lewat management letter. Isi komunikasi tertulis: weakness, implication, recommendation, ditambah konteks audit dan tanggapan manajemen."
        },
        {
          "kind": "p",
          "text": "Auditor wajib mengomunikasikan defisiensi signifikan dan material weakness kepada pihak tata kelola dan manajemen. Menurut buku, komunikasi tertulis ditujukan kepada audit committee atau yang setara. Bila klien tidak punya audit committee, ditujukan kepada pihak yang bertanggung jawab atas pengendalian internal, seperti dewan direksi atau pemilik-manajer. `(ARENS p.319)`"
        },
        {
          "kind": "table",
          "title": "Siapa, kapan, dan bagaimana defisiensi dikomunikasikan menurut ISA 265",
          "headers": [
            "Jenis defisiensi",
            "Penerima",
            "Bentuk",
            "Catatan",
            "Sumber"
          ],
          "rows": [
            [
              "Defisiensi signifikan",
              "Pihak yang bertanggung jawab atas tata kelola",
              "Tertulis, tepat waktu",
              "Boleh didahului lisan agar perbaikan cepat, tetapi tidak menggantikan kewajiban tertulis. Komunikasi tertulis bagian dari berkas audit akhir, yang lazimnya disusun paling lambat 60 hari setelah tanggal laporan auditor.",
              "ISA265 paras. 9, A13–A14"
            ],
            [
              "Defisiensi signifikan",
              "Manajemen pada tingkat tanggung jawab yang tepat, umumnya CEO atau CFO",
              "Tertulis, tepat waktu",
              "Tidak tepat bila langsung ke manajemen ketika defisiensi menimbulkan keraguan atas integritas atau kompetensi manajemen, misalnya ada fraud oleh manajemen",
              "ISA265 paras. 10(a), A19–A20"
            ],
            [
              "Defisiensi lain yang layak diperhatikan manajemen",
              "Manajemen pada tingkat operasional yang berwenang memperbaiki",
              "Boleh lisan",
              "Tidak perlu diulang bila sudah dikomunikasikan sebelumnya dan dikomunikasikan pihak lain. Kegagalan memperbaikinya dapat menjadi defisiensi signifikan.",
              "ISA265 paras. 10(b), A19, A22–A24"
            ],
            [
              "Defisiensi signifikan yang sudah dikomunikasikan tahun lalu tetapi belum diperbaiki",
              "Pihak tata kelola dan manajemen",
              "Tertulis, boleh mengulang uraian atau merujuk komunikasi lalu",
              "Biaya atau pertimbangan lain manajemen tidak menghapus kewajiban. Kegagalan bertindak tanpa penjelasan rasional dapat menjadi defisiensi signifikan.",
              "ISA265 paras. A16–A17"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "ISA 265 A15 menyebut tingkat detail komunikasi bergantung pada sifat dan ukuran entitas, sifat defisiensi, susunan tata kelola, dan persyaratan hukum. A18 menyatakan pada entitas kecil auditor boleh berkomunikasi dengan struktur yang lebih longgar. `(ISA265 paras. A15, A18)`"
        },
        {
          "kind": "table",
          "title": "Isi komunikasi tertulis atas defisiensi signifikan menurut ISA 265",
          "headers": [
            "Isi",
            "Penjelasan",
            "Sumber"
          ],
          "rows": [
            [
              "Uraian defisiensi dan penjelasan potensi dampaknya",
              "Dampak tidak perlu dikuantifikasi. Defisiensi boleh dikelompokkan bila tepat.",
              "ISA265 paras. 11(a), A28"
            ],
            [
              "Konteks komunikasi (tiga penjelasan)",
              "Tujuan audit adalah menyatakan opini atas laporan keuangan. Audit mencakup pertimbangan pengendalian internal yang relevan untuk merancang prosedur audit yang tepat, bukan untuk menyatakan opini atas efektivitas pengendalian. Hal yang dilaporkan terbatas pada defisiensi yang ditemukan selama audit dan yang menurut auditor cukup penting untuk dilaporkan.",
              "ISA265 paras. 11(b), A29–A30"
            ],
            [
              "Tambahan yang boleh dimuat",
              "Saran perbaikan, tanggapan manajemen (aktual atau yang diusulkan), pernyataan apakah auditor sudah memverifikasi penerapan tanggapan itu, serta keterangan bahwa pengujian pengendalian yang lebih luas bisa menemukan defisiensi lain",
              "ISA265 paras. A28–A29"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Format yang dipakai buku adalah Weakness, Implication, dan Recommendation. Figure 9-9 menunjukkan excerpt surat pengendalian internal untuk audit committee Hillsburg. `(ARENS pp.319–320)`"
        },
        {
          "kind": "table",
          "title": "Excerpt surat pengendalian internal Hillsburg: kata sandi tidak dirotasi (Figure 9-9)",
          "headers": [
            "Bagian",
            "Isi pada Hillsburg",
            "Fungsi",
            "Sumber"
          ],
          "rows": [
            [
              "Weakness",
              "Dalam pengujian general controls, auditor menemukan kata sandi tidak dirotasi secara berkala",
              "Menyatakan temuan dan asal temuannya",
              "ARENS p.319"
            ],
            [
              "Implication",
              "Bila kata sandi tidak dirotasi berkala, risiko akses tidak sah ke database dan kemungkinan serangan siber meningkat",
              "Menjelaskan potensi dampak",
              "ARENS p.319"
            ],
            [
              "Recommendation",
              "Kata sandi dirotasi paling sedikit tiap enam sampai sembilan bulan, dan lebih sering untuk data sensitif seperti penggajian",
              "Memberi saran perbaikan",
              "ARENS p.319"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Manajemen bertanggung jawab atas sistem pengendalian internal dan boleh memutuskan tidak menerapkan rekomendasi. Analisis auditor beserta tanggapan manajemen disampaikan kepada audit committee. `(ARENS p.320)`"
        },
        {
          "kind": "h3",
          "text": "Surat manajemen (management letter)"
        },
        {
          "kind": "p",
          "text": "Auditor sering menemukan hal terkait pengendalian yang kurang signifikan, juga peluang perbaikan operasional bagi klien. Hal seperti itu juga dikomunikasikan kepada manajemen, biasanya lewat surat terpisah yang disebut management letter. Surat ini perlu diidentifikasi jelas sebagai derivative report, untuk menunjukkan bahwa tujuan penugasan bukan menentukan kelemahan pengendalian internal, dan kelemahan itu ditemukan sebagai produk sampingan audit. `(ARENS p.320)`"
        },
        {
          "kind": "h3",
          "text": "Cakupan pengujian: audit laporan keuangan dan audit pengendalian internal"
        },
        {
          "kind": "p",
          "text": "Untuk sebagian perusahaan publik, auditor selain memberi opini atas laporan keuangan juga melaporkan penilaian manajemen atas pengendalian internal. Laporan semacam ini diwajibkan oleh Section 404(b) Sarbanes-Oxley Act 2002, yang berlaku untuk perusahaan Kanada yang merupakan anak usaha perusahaan Amerika atau mencatatkan efek untuk dijual di Amerika Serikat. Section 5925 CPA Canada Handbook secara substansial setara dengan standar Amerika. Di Kanada, manajemen perusahaan publik wajib melaporkan efektivitas pengendalian internalnya, tetapi tidak diwajibkan jaminan oleh akuntan publik. `(ARENS p.320)`"
        },
        {
          "kind": "table",
          "title": "Perbedaan cakupan pengujian kontrol pada audit pengendalian internal dan audit laporan keuangan (Figure 9-10)",
          "headers": [
            "Aspek",
            "Audit pengendalian internal atas pelaporan keuangan",
            "Audit laporan keuangan",
            "Sumber"
          ],
          "rows": [
            [
              "Opini",
              "Atas efektivitas pengendalian internal yang dinilai manajemen",
              "Atas laporan keuangan, bukan atas pengendalian",
              "ARENS p.320"
            ],
            [
              "Kontrol yang diuji",
              "Kontrol atas semua saldo akun, kelas transaksi, pengungkapan, dan asersi yang signifikan",
              "Hanya kontrol yang direncanakan diandalkan (control risk dinilai rendah atau moderat)",
              "ARENS p.320"
            ],
            [
              "Hubungan keduanya",
              "Kontrol yang diuji di sini bisa saja tidak diuji pada audit laporan keuangan",
              "Kontrol yang diuji adalah yang dipakai untuk menilai control risk di bawah maksimum",
              "ARENS p.320"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan cakupan.** SOX 404(b) dan Section 5925 adalah rujukan hukum Amerika Serikat dan Kanada dalam buku. TM ini tidak membahas padanan di Indonesia. Untuk audit laporan keuangan menurut ISA, rujukan kewajiban komunikasi adalah ISA 265. `(ARENS p.320; ISA265 para. 9)`"
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
          "title": "Kasus 1: Memilih pendekatan untuk empat area.",
          "prompt": "PT Lintas Nusa Telekom menyediakan layanan seluler. Auditor mengevaluasi empat area. (1) Pendapatan pulsa dan data: tagihan dihasilkan otomatis oleh sistem billing dari rekaman penggunaan, tanpa dokumen kertas dan tanpa intervensi manual. (2) Aset tetap: transaksinya sedikit dan tidak kompleks, inherent risk rendah, dan kontrolnya sedikit. (3) Penggajian: ribuan transaksi homogen, kontroler meninjau ringkasan gaji sebelum pembayaran, dan general IT controls dinilai efektif. Auditor ingin melakukan sebagian pengujian pada tanggal interim. (4) Persediaan handset di gudang: kunci dan kartu akses tidak berfungsi dengan baik, dan tidak ada rekonsiliasi antara catatan persediaan dan hasil hitung fisik. Tentukan pendekatan tiap area (tests of controls saja, substantif saja, atau gabungan) dan apa yang tetap wajib dilakukan pada keempat area.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**Area 1: tests of controls menjadi respons utama.** Bukti pendapatan hanya ada secara elektronik, sehingga prosedur substantif saja tidak bisa memberi bukti yang cukup atas occurrence dan accuracy. Auditor menguji kontrol yang memastikan menit panggilan dan volume unduhan tertangkap dan tercatat benar di sistem billing. Risiko fraud pengakuan pendapatan tetap dianggap ada, jadi prosedur substantif yang responsif atas risiko itu tetap diperlukan. `(ARENS pp.312, 339; ISA330 paras. 8(b), 21, A24)`",
                "**Area 2: pendekatan substantif.** Inherent risk rendah dan transaksi sedikit, sehingga tidak efisien menguji kontrol. RMM sama dengan penilaian inherent risk. `(ARENS p.312)`",
                "**Area 3: pendekatan gabungan.** Kontrol kontroler diharapkan efektif, volume transaksi besar dan homogen, serta general IT controls efektif. Tests of controls memungkinkan prosedur substantif di tanggal interim, perubahan nature, dan pengurangan extent. Untuk kontrol otomatis dengan general IT controls efektif, satu transaksi uji mungkin cukup. Bila prosedur substantif dilakukan di interim, sisa periode ditutup dengan prosedur tambahan. `(ARENS pp.302, 313–314, 317; ISA330 para. 22)`",
                "**Area 4: pendekatan substantif dengan extent lebih luas.** Tidak ada rekonsiliasi dan kontrol fisik yang lemah berarti control risk tinggi, jadi RMM tinggi. Pola ini mirip kasus GCC. Prosedur substantif diperluas, dan menurut ISA 330 A2, lingkungan atau kontrol yang lemah mendorong prosedur dilakukan lebih dekat ke akhir periode daripada interim. `(ARENS pp.294–295, 303, 312; ISA330 paras. A2, A11)`",
                "**Yang tetap wajib di keempat area.** Prosedur substantif atas setiap kelas transaksi, saldo, dan pengungkapan yang material, prosedur khusus atas risiko signifikan, serta prosedur atas proses penutupan laporan keuangan. Tests of controls tidak menghapus kewajiban ini. `(ISA330 paras. 18, 20, 21)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Control risk matrix dan satu defisiensi.",
          "prompt": "CV Berkah Tekstil menjual kain secara kredit. Auditor mengidentifikasi empat kontrol kunci: (K1) pesanan penjualan disetujui manajer penjualan sebelum pengiriman; (K2) dokumen pengiriman bernomor urut dan dipertanggungjawabkan tiap minggu; (K3) harga jual diambil dari master file daftar harga yang disetujui; (K4) master file piutang direkonsiliasi dengan buku besar tiap bulan. Auditor juga menemukan defisiensi (D): tidak ada pembandingan tanggal di dokumen pengiriman dengan tanggal pencatatan penjualan, dan tidak ada kontrol lain yang menutupnya. Penjualan sekitar Rp2 miliar per bulan dan materialitas yang dipakai Rp150 juta. Petakan kontrol ke asersi, beri penilaian awal control risk untuk occurrence, completeness, accuracy, dan cutoff, lalu analisis defisiensi D.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**Pemetaan.** K1 menjawab occurrence (pesanan sah dan disetujui). K2 menjawab completeness (pengiriman yang tercatat lengkap) dan cutoff (urutan dan ketepatan pencatatan), selaras dengan C5 di Hillsburg. K3 menjawab accuracy (harga). K4 menjawab accuracy pada master file. D menyasar cutoff. `(ARENS p.307)`",
                "**Penilaian awal.** Occurrence, completeness, dan accuracy masing-masing punya kontrol yang menjawabnya, jadi penilaian awal bisa moderate atau low, dengan syarat diuji. Cutoff hanya memiliki K2 dan menanggung defisiensi D tanpa kontrol kompensasi, sehingga penilaiannya high. Penilaian ini pertimbangan untuk latihan, bukan jawaban tunggal. `(ARENS pp.308–309)`",
                "**Analisis D dengan empat pertanyaan.** Kontrol kompensasi: tidak ada. Potensi salah saji: penjualan dicatat pada periode yang salah. Signifikansi: bila penjualan dibagi rata, satu minggu penjualan sekitar Rp500 juta, lebih dari tiga kali materialitas, sehingga berpotensi material. Kemungkinan: tinggi, karena tidak ada kontrol yang menangkapnya. Angka perkiraan per minggu adalah susunan penulis. `(ARENS p.308)`",
                "**Konsekuensi.** Auditor tidak mengandalkan kontrol untuk cutoff dan memperluas prosedur substantif pada transaksi di sekitar akhir periode. Defisiensi ini layak dipertimbangkan sebagai defisiensi signifikan karena kemungkinannya tinggi dan potensinya material, dan komunikasinya mengikuti section 9. Untuk tiga asersi lain, auditor merancang tests of controls bila ingin mengandalkan penilaian rendah. `(ARENS pp.302–303, 309; ISA265 paras. 8, A5)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3: Mengevaluasi hasil pengujian.",
          "prompt": "Auditor PT Sentosa Distribusi menghasilkan empat temuan. (a) Kontrol manual: supervisor menyetujui retur penjualan dengan paraf. Dari 60 retur sampel, auditor mengharapkan tingkat deviasi sekitar 2 persen, dan menemukan 5 retur tanpa paraf. (b) Kontrol otomatis: sistem menolak faktur pemasok yang selisih harganya lebih dari 2 persen terhadap pesanan pembelian. General IT controls atas perubahan program dan akses sudah diuji efektif. (c) Rekonsiliasi bank bulanan oleh supervisor sudah diuji untuk sembilan bulan pertama dan efektif, sedangkan tiga bulan terakhir belum diuji. (d) Tahun lalu kontrol akses pengguna diuji efektif. Tahun ini manajer TI diganti dan ERP ditingkatkan pada bulan Maret. Tentukan tindakan auditor untuk tiap temuan.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**(a) Deviasi di atas ekspektasi.** 5 dibagi 60 adalah sekitar 8,3 persen, jauh di atas 2 persen. Auditor bertanya spesifik tentang penyebab, lalu menyimpulkan apakah tes memberi dasar mengandalkan kontrol. Biasanya penilaian awal control risk dinaikkan, pendekatan beralih ke substantif, atau tes tambahan dilakukan bila penyebabnya terbatas. Perhitungan ini susunan penulis. `(ISA330 paras. 17, A42; ARENS p.314)`",
                "**(b) Kontrol otomatis.** Karena general IT controls efektif dan program tidak berubah, kontrol otomatis diharapkan berfungsi konsisten. Satu transaksi uji yang seharusnya ditolak, ditambah bukti tidak ada perubahan program, mungkin cukup. Tahun berikutnya auditor mengecek log perubahan untuk memastikan relevansi bukti, dan tetap menguji sebagian kontrol tiap audit. `(ARENS p.317; ISA330 paras. 14, A29, A36)`",
                "**(c) Bukti interim.** Auditor memperoleh bukti tentang perubahan signifikan pada kontrol setelah interim dan menentukan bukti tambahan untuk sisa tiga bulan. Faktornya antara lain signifikansi risiko, panjang sisa periode, dan lingkungan pengendalian. Bukti tambahan bisa berupa tes kontrol atas sisa periode atau pengujian pemantauan entitas. `(ISA330 paras. 12, A34–A35)`",
                "**(d) Bukti tahun lalu.** Pergantian personel dan peningkatan sistem adalah perubahan yang memengaruhi relevansi bukti. Kontrol itu diuji pada audit tahun ini, dan auditor menilai ulang general IT controls yang terkena peningkatan. `(ISA330 paras. 14(a), A37, A39; ARENS pp.317–318)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 4: Prosedur substantif, dual-purpose, dan komunikasi.",
          "prompt": "Auditor PT Karya Logam merencanakan hanya prosedur analitis substantif untuk pengakuan pendapatan, yang dinilai risiko signifikan. Pada piutang, ia memeriksa 40 faktur sekaligus untuk bukti persetujuan kredit dan kebenaran jumlah. Hasilnya: 3 faktur tanpa bukti persetujuan dan 1 faktur dengan salah saji harga Rp4,5 juta. Ia juga menemukan dua defisiensi. Pertama, jurnal manual diposting satu staf akuntansi tanpa review, dan hal ini sudah dikomunikasikan tahun lalu tanpa perbaikan. Kedua, kata sandi administrator sistem tidak pernah diganti. Bahaslah kecukupan rencana pendapatan, hasil dual-purpose, prosedur penutupan, dan komunikasi.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**Rencana pendapatan.** Tidak memadai. Pada risiko signifikan, prosedur analitis substantif saja tidak cukup. Bila pendekatannya hanya substantif, wajib ada tests of details, dan prosedur harus secara khusus responsif terhadap risiko, misalnya konfirmasi eksternal atas rincian perjanjian penjualan. `(ISA330 paras. 21, A55; ARENS pp.338–339)`",
                "**Hasil dual-purpose.** Dua kesimpulan dievaluasi terpisah. Sebagai test of control, tingkat deviasi 3 dibagi 40 adalah 7,5 persen, dibandingkan dengan tingkat yang diharapkan. Sebagai test of detail, salah saji Rp4,5 juta dikumpulkan bersama salah saji lain dan dibandingkan dengan materialitas. Auditor tidak boleh menganggap temuan itu terisolasi. `(ISA330 paras. A23, A63; ARENS p.340)`",
                "**Prosedur penutupan.** Mencocokkan atau merekonsiliasi informasi di laporan keuangan dengan catatan akuntansi, termasuk pengungkapan, dan memeriksa jurnal material serta penyesuaian lain saat penyusunan laporan. Pada kasus ini jurnal manual tanpa review menambah alasan untuk memeriksa jurnal secara lebih seksama. `(ISA330 paras. 20, A54; ARENS p.305)`",
                "**Defisiensi pertama (jurnal manual).** Menurut ISA 265, defisiensi yang sudah dikomunikasikan dan belum diperbaiki dapat menjadi indikator defisiensi signifikan, dan kegagalan bertindak tanpa penjelasan rasional bisa menjadi defisiensi signifikan itu sendiri. Auditor mengulang komunikasi tertulis kepada pihak tata kelola dan manajemen. Pola ini mirip GCC. `(ISA265 paras. A7, A17; ARENS pp.294–295)`",
                "**Defisiensi kedua (kata sandi).** Defisiensi lain yang layak diketahui manajemen, boleh dikomunikasikan lisan, atau dimuat di management letter. Bila ditulis dengan format buku: Weakness, kata sandi administrator tidak pernah diganti. Implication, risiko akses tidak sah dan serangan siber meningkat. Recommendation, rotasi berkala dengan frekuensi lebih tinggi untuk data sensitif. `(ARENS pp.319–320; ISA265 paras. 10(b), A23)`"
              ]
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
          "question": "**1. Bedakan test of controls dari prosedur substantif, dan beri satu contoh bukti untuk masing-masing.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* test of controls mengevaluasi efektivitas operasi kontrol dalam mencegah, atau mendeteksi dan mengoreksi, salah saji. Contoh buktinya paraf kontroler pada ringkasan gaji. Prosedur substantif mendeteksi salah saji material pada asersi lewat tests of details dan prosedur analitis substantif. Contohnya mengonfirmasi saldo piutang ke pelanggan. Yang pertama mengecek tindakan, yang kedua mengecek informasi. `(ISA330 para. 4; ARENS pp.314, 318)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyatakan paraf pada rekonsiliasi membuktikan saldo kas benar."
        },
        {
          "kind": "self-check",
          "question": "**2. Mengapa walk-through dan inquiry saja tidak cukup untuk menyimpulkan bahwa pengendalian efektif?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* walk-through menelusuri satu transaksi dan membuktikan desain dan implementasi, tetapi tidak membuktikan kontrol bekerja sepanjang periode. Inquiry saja tidak cukup untuk menguji efektivitas operasi, jadi harus digabung inspeksi atau reperformance. Observasi hanya relevan pada saat dilakukan. `(ARENS pp.298, 315; ISA330 paras. 10(a), A26)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyamakan memahami dan menilai implementasi dengan menguji efektivitas operasi."
        },
        {
          "kind": "self-check",
          "question": "**3. Sebutkan tiga pendekatan audit, keadaan yang mewajibkan tests of controls, dan prosedur substantif yang tetap wajib apa pun pendekatannya.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* tests of controls saja, prosedur substantif saja, atau gabungan. Tests of controls wajib bila penilaian risiko mengharapkan kontrol beroperasi efektif dan dipakai sebagai dasar prosedur substantif, atau bila prosedur substantif saja tidak memberi bukti yang cukup, misalnya transaksi sangat otomatis tanpa jejak dokumen. Prosedur substantif tetap wajib untuk tiap kelas transaksi, saldo, dan pengungkapan yang material, untuk risiko signifikan, dan untuk proses penutupan laporan keuangan. `(ISA330 paras. 8, 18, 20, 21, A4; ARENS pp.302, 312)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab bahwa kontrol yang efektif menghapus prosedur substantif."
        },
        {
          "kind": "self-check",
          "question": "**4. Bagaimana extent dan timing tests of controls ditentukan, dan mengapa kontrol otomatis kadang cukup diuji dengan satu transaksi?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* extent mengikuti tingkat ketergantungan, frekuensi kontrol, perkiraan deviasi, dan bukti dari tes kontrol lain. Timing mengikuti periode yang diandalkan, dengan tambahan bukti untuk sisa periode setelah interim. Bukti tahun lalu boleh dipakai bila kontrol tidak berubah, dengan pengujian paling sedikit sekali dalam tiga audit dan sebagian kontrol tiap tahun. Kontrol atas risiko signifikan diuji tiap periode. Kontrol otomatis konsisten selama programnya tidak berubah, sehingga satu transaksi bisa cukup bila general IT controls efektif. `(ARENS p.317; ISA330 paras. 11–15, A28–A29)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab bahwa kontrol otomatis tidak pernah perlu diuji lagi, atau bahwa aturan tiga tahun berlaku juga untuk risiko signifikan."
        },
        {
          "kind": "self-check",
          "question": "**5. Bedakan control deficiency, significant deficiency, dan material weakness, lalu jelaskan kepada siapa dan bagaimana defisiensi signifikan dikomunikasikan.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* control deficiency ada bila kontrol tidak mampu mencegah atau mendeteksi dan mengoreksi salah saji tepat waktu, atau kontrol yang perlu tidak ada. Significant deficiency cukup penting untuk menjadi perhatian pihak tata kelola. Material weakness (istilah buku) berarti ada kemungkinan yang beralasan kontrol tidak mencegah atau mendeteksi salah saji material. Defisiensi signifikan dikomunikasikan tertulis, tepat waktu, kepada pihak tata kelola dan manajemen, dengan uraian dan dampak potensial serta konteks komunikasi. Defisiensi lain boleh disampaikan lisan. `(ARENS pp.302–303, 319–320; ISA265 paras. 6, 9–11)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyimpulkan material weakness berarti salah saji material sudah terjadi, atau bahwa defisiensi hanya signifikan bila salah saji sudah ditemukan."
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
          "text": "**Kerangka jawaban soal pemilihan pendekatan audit**"
        },
        {
          "kind": "ol",
          "items": [
            "Tulis inherent risk dan penilaian awal control risk untuk asersi yang ditanyakan.",
            "Tentukan apakah prosedur substantif saja bisa memberi bukti yang cukup. Bila tidak, misalnya transaksi sangat otomatis tanpa jejak dokumen, tests of controls wajib.",
            "Bila kontrol ada dan efektif secara desain, nilai apakah mengandalkannya efisien. Bila ya, pendekatan gabungan. Bila tidak, pendekatan substantif.",
            "Sebut akibat pada nature, timing, dan extent prosedur substantif, misalnya interim dan sampel lebih kecil untuk gabungan, atau extent lebih besar bila control risk tinggi.",
            "Tutup dengan prosedur substantif yang tetap wajib: kelas material, risiko signifikan (dengan tests of details), dan penutupan laporan keuangan."
          ]
        },
        {
          "kind": "p",
          "text": "**Kerangka jawaban soal merancang dan mengevaluasi tests of controls**"
        },
        {
          "kind": "ol",
          "items": [
            "Sebut kontrol yang diuji dan asersi yang dijawabnya, serta alasan kontrol itu layak diuji (desain baik, diterapkan, diharapkan andal).",
            "Pilih prosedur menurut jejak bukti: inspeksi bila ada dokumen, observasi bila tidak ada jejak, reperformance bila otomatis, dan inquiry selalu digabung dengan yang lain.",
            "Tentukan extent: frekuensi, perkiraan deviasi, tingkat ketergantungan. Untuk kontrol otomatis, kaitkan dengan general IT controls.",
            "Tentukan timing: periode yang diandalkan, bukti interim dan sisa periode, bukti tahun lalu, serta pengecualian risiko signifikan.",
            "Evaluasi hasil: bandingkan deviasi dengan yang diharapkan, telusuri penyebab, lalu putuskan mempertahankan, menambah tes, atau beralih ke substantif, dan nilai apakah defisiensinya signifikan untuk dikomunikasikan."
          ]
        },
        {
          "kind": "p",
          "text": "**Pasangan yang sering tertukar**"
        },
        {
          "kind": "table",
          "title": "Pasangan istilah yang sering tertukar di TM14",
          "headers": [
            "Pasangan",
            "Pembeda"
          ],
          "rows": [
            [
              "Test of controls vs prosedur substantif",
              "Mengecek apakah kontrol berjalan efektif vs mengecek apakah ada salah saji pada asersi"
            ],
            [
              "Walk-through vs test of controls",
              "Bukti desain dan implementasi dari satu transaksi vs bukti efektivitas operasi sepanjang periode"
            ],
            [
              "Prosedur penilaian risiko vs test of controls",
              "Jenis prosedur sama, extent berbeda: satu atau dua transaksi atau satu titik waktu vs sampel lebih besar dan observasi berulang"
            ],
            [
              "Pendekatan substantif vs pendekatan gabungan",
              "Tanpa mengandalkan kontrol, RMM sama dengan inherent risk vs mengandalkan kontrol dan mengujinya"
            ],
            [
              "Control deficiency vs significant deficiency vs material weakness",
              "Kontrol tidak mampu atau tidak ada vs cukup penting untuk perhatian pihak tata kelola vs kemungkinan beralasan salah saji material tidak tercegah atau terdeteksi"
            ],
            [
              "Defisiensi desain vs defisiensi operasi",
              "Kontrol yang perlu hilang atau salah rancang vs kontrol yang baik tidak dijalankan sesuai rancangan atau pelaksananya kurang kualifikasi"
            ],
            [
              "Kontrol kunci vs kontrol kompensasi",
              "Kontrol yang paling berdampak mengurangi salah saji dan masuk matriks vs kontrol di bagian lain sistem yang mengimbangi kelemahan"
            ],
            [
              "Tests of details vs substantive analytical procedures",
              "Memeriksa rincian transaksi atau saldo vs membandingkan jumlah aktual dengan ekspektasi yang dapat diprediksi"
            ],
            [
              "Dual-purpose test vs test of control biasa",
              "Satu sampel untuk dua tujuan, dievaluasi terpisah vs hanya menguji kontrol"
            ],
            [
              "Arah existence vs arah completeness",
              "Pilih dari item yang tercantum di saldo vs pilih dari item yang seharusnya masuk ke saldo"
            ],
            [
              "Laporan Type 1 vs Type 2",
              "Deskripsi dan desain kontrol pada tanggal tertentu vs ditambah efektivitas operasi selama periode dan hasil tes"
            ],
            [
              "Internal control letter vs management letter",
              "Defisiensi signifikan kepada audit committee atau yang setara vs hal kurang signifikan dan perbaikan operasional kepada manajemen, sebagai derivative report"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
