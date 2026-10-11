// AKA201 TM09/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201-v2.mjs.
// The text is verbatim from the content package; figures come from aka201-fig-*.mjs. Change those and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM9_READING: Reading = {
  "tm": 9,
  "title": "Perencanaan Audit, Strategi Audit Menyeluruh, dan Pemahaman Bisnis Klien",
  "intro": "**Sumber utama:** Arens dkk., Ch.6, pp.174–198. **Standar:** SA/ISA 300 (perencanaan audit), SA/ISA 210 (kesepakatan syarat perikatan), SA/ISA 315 (Revisi 2019) (identifikasi dan penilaian risiko salah saji material).",
  "objectives": [
    "Menjelaskan mengapa audit harus direncanakan dan apa isi strategi audit menyeluruh dibanding rencana audit.",
    "Memutuskan penerimaan atau keberlanjutan klien dan menjelaskan isi surat penugasan.",
    "Menyusun keputusan sumber daya dan waktu dalam strategi audit menyeluruh.",
    "Memahami entitas dan lingkungannya, lalu menghubungkan business risk dengan risiko salah saji material.",
    "Menjelaskan tiga prosedur penilaian risiko dan membaca hasil prosedur analitis pendahuluan."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: perencanaan menjawab satu pertanyaan, yaitu apa yang bisa salah?",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** auditor merencanakan supaya tahu di mana laporan keuangan paling mungkin salah sebelum mulai menguji. Jawabannya menentukan siapa yang ditugaskan, bukti apa yang dicari, dan seberapa banyak. `(ARENS p.177)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan cakupan.** Ch.6 juga memuat materialitas, tetapi bagian itu sudah dibahas di TM07. TM ini mengambil sisa bab: penerimaan klien, strategi audit, pemahaman entitas, prosedur penilaian risiko, dan prosedur analitis pendahuluan. `(ARENS pp.174–198)`"
        },
        {
          "kind": "figure",
          "title": "Peta perencanaan audit",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 764\" width=\"100%\" role=\"img\" aria-labelledby=\"f09-peta-t f09-peta-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f09-peta-t\">Peta perencanaan audit</title><desc id=\"f09-peta-d\">Lima tahap berurutan: terima atau lanjutkan klien, sepakati syarat perikatan, pahami entitas dan nilai risiko, susun strategi audit menyeluruh, kembangkan rencana audit. Seluruhnya berulang sepanjang audit.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"764\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">1. Terima atau lanjutkan klien</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Integritas manajemen, kompetensi firma,</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">independensi</text><rect class=\"svg-title\" x=\"238.5\" y=\"122\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 133 L240 146 L248 133 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"148\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"178\" font-size=\"19\" font-weight=\"800\">2. Sepakati syarat perikatan</text><text class=\"svg-text\" x=\"34\" y=\"206\" font-size=\"18\">Kerangka pelaporan dapat diterima, surat</text><text class=\"svg-text\" x=\"34\" y=\"230\" font-size=\"18\">penugasan</text><rect class=\"svg-title\" x=\"238.5\" y=\"250\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 261 L240 274 L248 261 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"276\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"306\" font-size=\"19\" font-weight=\"800\">3. Pahami entitas dan nilai risiko</text><text class=\"svg-text\" x=\"34\" y=\"334\" font-size=\"18\">Prosedur penilaian risiko dan prosedur</text><text class=\"svg-text\" x=\"34\" y=\"358\" font-size=\"18\">analitis pendahuluan</text><rect class=\"svg-title\" x=\"238.5\" y=\"378\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 389 L240 402 L248 389 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"404\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"434\" font-size=\"19\" font-weight=\"800\">4. Susun strategi audit menyeluruh</text><text class=\"svg-text\" x=\"34\" y=\"462\" font-size=\"18\">Sumber daya, waktu, materialitas (TM07)</text><rect class=\"svg-title\" x=\"238.5\" y=\"482\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 493 L240 506 L248 493 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"508\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"538\" font-size=\"19\" font-weight=\"800\">5. Kembangkan rencana audit</text><text class=\"svg-text\" x=\"34\" y=\"566\" font-size=\"18\">Prosedur penilaian risiko dan prosedur</text><text class=\"svg-text\" x=\"34\" y=\"590\" font-size=\"18\">lanjutan per asersi</text><rect class=\"svg-subcard\" x=\"20\" y=\"620\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"650\" font-size=\"19\" font-weight=\"800\">Berulang sepanjang audit</text><text class=\"svg-text\" x=\"34\" y=\"678\" font-size=\"18\">Tahap 3 dan 4 saling memengaruhi.</text><text class=\"svg-text\" x=\"34\" y=\"702\" font-size=\"18\">Strategi dan rencana diperbarui bila</text><text class=\"svg-text\" x=\"34\" y=\"726\" font-size=\"18\">keadaan berubah.</text></svg>",
          "overview": {
            "heading": "Peta perencanaan audit",
            "cards": [
              {
                "title": "1. Terima atau lanjutkan klien",
                "subtitle": "Bagian 2",
                "items": [
                  "Integritas manajemen",
                  "Kompetensi firma",
                  "Independensi"
                ],
                "takeaway": "Keputusan biasanya diambil partner berpengalaman."
              },
              {
                "title": "2. Sepakati syarat perikatan",
                "subtitle": "Bagian 3",
                "items": [
                  "Kerangka pelaporan dapat diterima",
                  "Manajemen mengakui tanggung jawabnya",
                  "Surat penugasan"
                ],
                "takeaway": "Tenggat dalam surat memengaruhi jadwal audit."
              },
              {
                "title": "3. Pahami entitas dan nilai risiko",
                "subtitle": "Bagian 5 sampai 7",
                "items": [
                  "Industri, kepemilikan, tata kelola, model bisnis, ukuran kinerja",
                  "Inquiry, prosedur analitis, observasi dan inspeksi"
                ],
                "takeaway": "Hasilnya menunjuk akun dan asersi yang berisiko."
              },
              {
                "title": "4. Susun strategi audit menyeluruh",
                "subtitle": "Bagian 1 dan 4",
                "items": [
                  "Staf, spesialis, internal audit, auditor komponen",
                  "Jadwal dan materialitas"
                ],
                "takeaway": "Strategi menetapkan cakupan, waktu, dan arah."
              },
              {
                "title": "5. Kembangkan rencana audit",
                "subtitle": "Bagian 1",
                "items": [
                  "Prosedur penilaian risiko",
                  "Prosedur lanjutan di tingkat asersi"
                ],
                "takeaway": "Tahap 3 dan 4 saling memengaruhi; semuanya diperbarui bila perlu."
              }
            ]
          },
          "caption": "Gambar 9.1: Peta perencanaan audit. Disusun dari Figure 6-1 (ARENS p.176) dan ISA300 paras. 6–10.",
          "altText": "Alur lima tahap perencanaan audit dari penerimaan klien sampai rencana audit, dengan catatan bahwa tahap 3 dan 4 saling memengaruhi dan seluruhnya berulang sepanjang audit."
        },
        {
          "kind": "p",
          "text": "Buku membuka bab dengan kasus Jack Henry, perusahaan perangkat lunak untuk bank. Deloitte sudah menandai pendapatan lisensi perangkat lunak sebagai area berisiko tinggi, tetapi staf dan prosedurnya tidak cukup menjawab risiko itu. Pendapatan tercatat terlalu awal di audit 2012 sampai 2014. PCAOB mendenda Deloitte 500.000 dolar AS pada 2018 dan menunjuk kurangnya pengetahuan industri dan standar akuntansi yang relevan sebagai penyebabnya. `(ARENS pp.174–175)`"
        },
        {
          "kind": "p",
          "text": "Pelajarannya: mengenali risiko saja tidak cukup. Tim harus punya orang dan prosedur yang sepadan dengan risiko itu."
        },
        {
          "kind": "p",
          "text": "Buku menyebut tiga alasan perencanaan yang baik: `(ARENS p.175)`"
        },
        {
          "kind": "ul",
          "items": [
            "auditor bisa memperoleh bukti audit yang cukup dan tepat,",
            "biaya audit tetap wajar,",
            "salah paham dengan klien bisa dihindari. Contohnya firma menjanjikan audit selesai sebelum 30 Juni, lalu baru selesai Agustus karena staf kurang."
          ]
        },
        {
          "kind": "p",
          "text": "**Perencanaan bukan tahap sekali jalan.** Ia berulang dan berlangsung sejak audit tahun lalu selesai sampai audit tahun ini selesai. Strategi dan rencana harus diperbarui bila keadaan berubah. `(ISA300 paras. 10, A3)`"
        },
        {
          "kind": "h3",
          "text": "Tiga risiko yang gampang tertukar"
        },
        {
          "kind": "table",
          "title": "Perbandingan tiga risiko: business risk, engagement risk, risk of material misstatement",
          "headers": [
            "Risiko",
            "Arti",
            "Contoh dari buku",
            "Dipakai untuk"
          ],
          "rows": [
            [
              "Client business risk",
              "Risiko entitas gagal mencapai tujuan atau menjalankan strategi.",
              "Pandemi menurunkan penjualan dan membuat piutang sulit ditagih.",
              "Dasar memahami entitas"
            ],
            [
              "Engagement risk",
              "Tingkat risiko yang mau ditanggung firma saat menerima atau melanjutkan klien (risk tolerance firma).",
              "Klien yang terus rugi bisa bangkrut dan menaikkan risiko gugatan terhadap auditor.",
              "Keputusan terima atau lanjut"
            ],
            [
              "Risk of material misstatement",
              "Risiko laporan keuangan salah saji material sebelum diaudit, karena fraud atau error.",
              "Ekonomi memburuk mendorong manajemen menggelembungkan pendapatan, apalagi bila pengendalian lemah.",
              "Jumlah dan kekuatan bukti, serta pengalaman staf"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.176–177)`"
        },
        {
          "kind": "figure",
          "title": "Hubungan tiga risiko dalam perencanaan",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 605\" width=\"100%\" role=\"img\" aria-labelledby=\"f09-tiga-risiko-t f09-tiga-risiko-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f09-tiga-risiko-t\">Hubungan tiga risiko dalam perencanaan</title><desc id=\"f09-tiga-risiko-d\">Client business risk menjadi sumber risk of material misstatement dan engagement risk. Risk of material misstatement menentukan respons audit; engagement risk menentukan keputusan terima atau lanjut klien.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"605\" rx=\"14\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"20\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Client business risk</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Entitas gagal mencapai tujuan atau</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">menjalankan strategi</text><rect class=\"svg-badge-red\" x=\"20\" y=\"174\" width=\"212\" height=\"175\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"204\" font-size=\"19\" font-weight=\"800\">Risk of material</text><text class=\"svg-title\" x=\"34\" y=\"228\" font-size=\"19\" font-weight=\"800\">misstatement</text><text class=\"svg-text\" x=\"34\" y=\"256\" font-size=\"18\">Laporan keuangan</text><text class=\"svg-text\" x=\"34\" y=\"280\" font-size=\"18\">salah saji</text><text class=\"svg-text\" x=\"34\" y=\"304\" font-size=\"18\">material sebelum</text><text class=\"svg-text\" x=\"34\" y=\"328\" font-size=\"18\">diaudit</text><rect class=\"svg-badge-blue\" x=\"248\" y=\"174\" width=\"212\" height=\"175\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"262\" y=\"204\" font-size=\"19\" font-weight=\"800\">Engagement risk</text><text class=\"svg-text\" x=\"262\" y=\"232\" font-size=\"18\">Risiko yang mau</text><text class=\"svg-text\" x=\"262\" y=\"256\" font-size=\"18\">ditanggung firma</text><text class=\"svg-text\" x=\"262\" y=\"280\" font-size=\"18\">pada klien ini</text><rect class=\"svg-subcard\" x=\"20\" y=\"389\" width=\"212\" height=\"196\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"419\" font-size=\"19\" font-weight=\"800\">Respons audit</text><text class=\"svg-text\" x=\"34\" y=\"447\" font-size=\"18\">Bukti lebih</text><text class=\"svg-text\" x=\"34\" y=\"471\" font-size=\"18\">meyakinkan, staf</text><text class=\"svg-text\" x=\"34\" y=\"495\" font-size=\"18\">lebih</text><text class=\"svg-text\" x=\"34\" y=\"519\" font-size=\"18\">berpengalaman,</text><text class=\"svg-text\" x=\"34\" y=\"543\" font-size=\"18\">supervisi lebih</text><text class=\"svg-text\" x=\"34\" y=\"567\" font-size=\"18\">ketat</text><rect class=\"svg-subcard\" x=\"248\" y=\"389\" width=\"212\" height=\"175\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"262\" y=\"419\" font-size=\"19\" font-weight=\"800\">Keputusan klien</text><text class=\"svg-text\" x=\"262\" y=\"447\" font-size=\"18\">Terima, lanjutkan,</text><text class=\"svg-text\" x=\"262\" y=\"471\" font-size=\"18\">tolak, atau minta</text><text class=\"svg-text\" x=\"262\" y=\"495\" font-size=\"18\">fee lebih tinggi</text><rect class=\"svg-title\" x=\"124.5\" y=\"122\" width=\"3\" height=\"40\"/><path class=\"svg-title\" d=\"M118 159 L126 172 L134 159 Z\"/><rect class=\"svg-title\" x=\"352.5\" y=\"122\" width=\"3\" height=\"40\"/><path class=\"svg-title\" d=\"M346 159 L354 172 L362 159 Z\"/><rect class=\"svg-title\" x=\"124.5\" y=\"351\" width=\"3\" height=\"26\"/><path class=\"svg-title\" d=\"M118 374 L126 387 L134 374 Z\"/><rect class=\"svg-title\" x=\"352.5\" y=\"351\" width=\"3\" height=\"26\"/><path class=\"svg-title\" d=\"M346 374 L354 387 L362 374 Z\"/></svg>",
          "overview": {
            "heading": "Hubungan tiga risiko dalam perencanaan",
            "cards": [
              {
                "title": "Client business risk",
                "subtitle": "Sumber",
                "items": [
                  "Entitas gagal mencapai tujuan atau menjalankan strategi"
                ],
                "takeaway": "Contoh buku: pandemi menurunkan penjualan dan menyulitkan penagihan piutang."
              },
              {
                "title": "Risk of material misstatement",
                "subtitle": "Mengarah ke respons audit",
                "items": [
                  "Laporan keuangan salah saji material sebelum diaudit",
                  "Menentukan jumlah dan kekuatan bukti serta pengalaman staf"
                ],
                "takeaway": "Makin tinggi risikonya, makin banyak upaya audit."
              },
              {
                "title": "Engagement risk",
                "subtitle": "Mengarah ke keputusan klien",
                "items": [
                  "Risiko yang mau ditanggung firma pada klien ini",
                  "Terima, lanjutkan, tolak, atau fee lebih tinggi"
                ],
                "takeaway": "Klien yang terus rugi bisa bangkrut dan menaikkan risiko gugatan."
              }
            ]
          },
          "caption": "Gambar 9.2: Hubungan tiga risiko dalam perencanaan. Disusun dari ARENS pp.176–177.",
          "altText": "Client business risk memengaruhi dua hal: risk of material misstatement, yang menentukan respons audit, dan engagement risk, yang menentukan keputusan menerima atau melanjutkan klien."
        },
        {
          "kind": "h3",
          "text": "Kesalahpahaman umum"
        },
        {
          "kind": "table",
          "title": "Kesalahpahaman umum tentang perencanaan audit",
          "headers": [
            "Anggapan yang keliru",
            "Yang benar",
            "Sumber"
          ],
          "rows": [
            [
              "\"Perencanaan selesai dulu, baru pekerjaan lapangan dimulai.\"",
              "Perencanaan berulang sepanjang audit. Strategi dan rencana diperbarui bila perlu.",
              "ISA300 paras. 10, A3"
            ],
            [
              "\"Firma audit menerima semua klien karena butuh pendapatan.\"",
              "Firma menilai integritas manajemen, kompetensi, dan independensi lebih dulu. Klien bermasalah bisa menimbulkan biaya dan risiko hukum yang lebih besar dari fee.",
              "ARENS p.178"
            ],
            [
              "\"Strategi audit dan rencana audit itu dokumen yang sama.\"",
              "Strategi menetapkan cakupan, waktu, dan arah. Rencana lebih rinci: prosedur apa, kapan, seberapa banyak.",
              "ISA300 paras. 7–9, A15"
            ],
            [
              "\"Pakai spesialis berarti tanggung jawab berpindah ke spesialis.\"",
              "Tanggung jawab tetap di auditor. Laporan tidak merujuk spesialis kecuali opini dimodifikasi.",
              "ARENS p.187"
            ],
            [
              "\"Prosedur penilaian risiko sudah cukup sebagai dasar opini.\"",
              "Prosedur ini hanya untuk mengidentifikasi dan menilai risiko, dan tidak memberi bukti yang memadai untuk opini.",
              "ARENS p.192; ISA315 para. 13"
            ],
            [
              "\"Rasio yang janggal berarti pasti ada salah saji.\"",
              "Data analitis pendahuluan bersifat agregat, jadi hanya memberi indikasi kasar tempat risiko mungkin ada.",
              "ARENS p.194"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Strategi audit menyeluruh dan rencana audit",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Strategi menetapkan cakupan, waktu, dan arah audit. Rencana mengurai prosedurnya."
        },
        {
          "kind": "p",
          "text": "**Overall audit strategy** menentukan cakupan, waktu, dan arah audit, lalu menjadi pegangan untuk menyusun **audit plan**. Buku merinci isi strategi menjadi tiga hal: jenis dan alokasi sumber daya untuk area tertentu, waktu prosedur, dan materialitas. `(ARENS p.185; ISA300 para. 7)`"
        },
        {
          "kind": "p",
          "text": "Dalam menyusun strategi, auditor mempertimbangkan lima hal. `(ISA300 para. 8)`"
        },
        {
          "kind": "ul",
          "items": [
            "Ciri perikatan yang menentukan cakupannya.",
            "Tujuan pelaporan, untuk merencanakan waktu audit dan komunikasi yang dibutuhkan.",
            "Faktor yang menurut pertimbangan profesionalnya penting untuk mengarahkan upaya tim.",
            "Hasil kegiatan pendahuluan dan, bila relevan, pengetahuan dari perikatan lain milik partner untuk entitas itu.",
            "Sifat, waktu, dan jumlah sumber daya yang dibutuhkan."
          ]
        },
        {
          "kind": "p",
          "text": "Auditor juga memperhitungkan jumlah lokasi klien, waktu audit, dan efektivitas pengendalian klien di masa lalu. Kalau pengendalian efektif, sebagian pekerjaan bisa dilakukan di tengah tahun (interim), tidak menunggu akhir tahun. `(ARENS p.185)`"
        },
        {
          "kind": "table",
          "title": "Perbandingan overall audit strategy dan audit plan",
          "headers": [
            "Aspek",
            "Overall audit strategy",
            "Audit plan"
          ],
          "rows": [
            [
              "Pertanyaan yang dijawab",
              "Seberapa luas, kapan, ke arah mana, dengan sumber daya apa?",
              "Prosedur apa yang dikerjakan siapa, kapan, dan seberapa banyak?"
            ],
            [
              "Isi",
              "Karakteristik perikatan, tujuan pelaporan, sumber daya, waktu, materialitas",
              "Prosedur penilaian risiko, prosedur lanjutan di tingkat asersi, prosedur lain, serta arahan dan supervisi tim"
            ],
            [
              "Contoh keputusan",
              "Menurunkan staf berpengalaman ke area berisiko tinggi; menjadwalkan interim audit",
              "Daftar prosedur pengujian piutang beserta ukuran sampelnya"
            ],
            [
              "Hubungan",
              "Dibuat lebih dulu dan menjadi pegangan",
              "Dikembangkan dari strategi; sebagian prosedurnya baru bisa dirancang setelah hasil penilaian risiko keluar"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.177, 185; ISA300 paras. 7–9, A9, A15)`"
        },
        {
          "kind": "p",
          "text": "Menurut buku, rencana audit memuat tiga komponen: (1) sifat, waktu, dan luas prosedur penilaian risiko; (2) sifat, waktu, dan luas prosedur tambahan yang terkait dengan asersi; (3) prosedur lain yang diperlukan agar audit sesuai standar. `(ARENS p.177)`"
        },
        {
          "kind": "p",
          "text": "Partner perikatan dan anggota kunci tim wajib terlibat dalam perencanaan. Partner juga mereview strategi dan rencana, dan keduanya masuk dokumentasi audit bersama setiap perubahan signifikan beserta alasannya. `(ISA300 paras. 5, 11, 12)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Strategi dan rencana adalah tanggung jawab auditor. Auditor boleh membahas unsur perencanaan dengan manajemen, tetapi membuka sifat dan waktu prosedur rinci bisa membuat prosedur mudah ditebak dan merusak efektivitas audit. `(ISA300 para. A4)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Menerima atau melanjutkan klien",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Sebelum merencanakan, firma memutuskan apakah klien layak. Ukurannya: kompetensi, etika, dan integritas manajemen."
        },
        {
          "kind": "p",
          "text": "Auditor mengerjakan empat kegiatan pendahuluan sebelum perencanaan: memutuskan menerima atau melanjutkan klien (biasanya oleh partner yang berpengalaman), menilai kepatuhan pada etika termasuk independensi, mengidentifikasi tujuan laporan keuangan, dan menyepakati syarat perikatan. `(ARENS p.177; ISA300 para. 6)`"
        },
        {
          "kind": "p",
          "text": "Kebijakan pengendalian mutu firma menjamin firma hanya menerima perikatan yang: `(ARENS p.178)`"
        },
        {
          "kind": "ul",
          "items": [
            "mampu dikerjakan, mencakup kemampuan, waktu, dan sumber daya,",
            "bisa dikerjakan dengan mematuhi etika yang berlaku,",
            "sudah mempertimbangkan integritas klien."
          ]
        },
        {
          "kind": "h3",
          "text": "Tiga faktor engagement risk"
        },
        {
          "kind": "table",
          "title": "Tiga faktor engagement risk",
          "headers": [
            "Faktor",
            "Yang diperiksa",
            "Mengapa menaikkan risiko"
          ],
          "rows": [
            [
              "Ketergantungan pengguna eksternal",
              "Sebaran kepemilikan (perusahaan terbuka dipakai lebih banyak pihak); jumlah liabilitas (kreditor aktual dan calon memakainya)",
              "Bila laporan sangat diandalkan, salah saji yang lolos merugikan lebih banyak pihak"
            ],
            [
              "Kemampuan going concern",
              "Likuiditas, laba atau rugi tahun-tahun sebelumnya, cara membiayai pertumbuhan (utang jangka pendek menekan kas), sifat operasi, kompetensi manajemen",
              "Klien yang gagal setelah laporan terbit membuka risiko gugatan"
            ],
            [
              "Integritas manajemen",
              "Indikator di tabel berikut",
              "Manajemen yang tidak jujur membuat bukti dan representasi sulit dipercaya"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.178–179)`"
        },
        {
          "kind": "p",
          "text": "**Indikator yang meragukan integritas manajemen:**"
        },
        {
          "kind": "ul",
          "items": [
            "riwayat tidak patuh pada hukum dan peraturan, misalnya suap atau penggelapan pajak,",
            "reputasi kejujuran atau etika yang buruk di dunia usaha,",
            "dugaan keterlibatan manajemen dalam kejahatan, misalnya pencucian uang,",
            "transaksi atau aktivitas sangat kompleks tanpa tujuan bisnis yang jelas,",
            "tone at the top yang buruk,",
            "manajemen enggan memberikan informasi yang diminta,",
            "riwayat tidak mengungkapkan informasi penting pada perikatan sebelumnya."
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS p.179, Table 6-1)`"
        },
        {
          "kind": "p",
          "text": "Buku juga menyebut tanda lain: perselisihan berulang dengan auditor sebelumnya, perputaran staf kunci bagian keuangan dan internal audit yang tinggi, serta konflik berkelanjutan dengan serikat pekerja. `(ARENS p.179)`"
        },
        {
          "kind": "h3",
          "text": "Klien baru dan klien lama"
        },
        {
          "kind": "table",
          "title": "Penerimaan klien baru dibanding keberlanjutan klien lama",
          "headers": [
            "Aspek",
            "Klien baru",
            "Klien lama"
          ],
          "rows": [
            [
              "Langkah utama",
              "Hubungi auditor pendahulu dengan izin klien; telusuri sumber lain (pengacara, bank, akuntan publik lain)",
              "Evaluasi tahunan: adakah alasan untuk tidak melanjutkan"
            ],
            [
              "Alat otomatis",
              "Pencarian internet, basis data, mesin pencari khusus untuk data keuangan atau publikasi tentang klien",
              "Tinjau kertas kerja tahun lalu"
            ],
            [
              "Tanda untuk menolak",
              "Klien tidak mengizinkan kontak, atau auditor pendahulu tidak menjawab memadai",
              "Konflik tentang cakupan, jenis opini, atau fee; gugatan antara firma dan klien (independensi dipertanyakan); integritas dasar klien diragukan"
            ],
            [
              "Sikap lain",
              "Berhati-hati pada bisnis baru yang tumbuh cepat karena banyak yang gagal",
              "Klien berisiko tinggi yang tetap dipertahankan biasanya dikenai fee lebih tinggi"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.179–180; ISA300 para. 13)`"
        },
        {
          "kind": "p",
          "text": "Penerus wajib memulai komunikasi dengan auditor pendahulu setelah mendapat izin klien, karena ada kewajiban menjaga kerahasiaan. Auditor pendahulu wajib menjawab. Kalau ada sengketa hukum, jawabannya boleh dibatasi menjadi pernyataan bahwa tidak ada informasi yang diberikan. `(ARENS p.180)`"
        },
        {
          "kind": "p",
          "text": "Dua penilaian lain dilakukan di tahap ini. **Kompetensi:** bila firma tidak punya keahlian atau staf yang tersedia, perikatan ditolak. **Independensi:** auditor menganalisis lima ancaman (self-interest, self-review, advocacy, familiarity, intimidation, lihat TM03) dan mencari safeguard. Contohnya mengganti partner untuk menurunkan ancaman familiarity. Kalau ancaman tetap ada tanpa safeguard yang memadai, perikatan ditolak, atau auditor mengundurkan diri pada klien lama. `(ARENS pp.180–181)`"
        },
        {
          "kind": "pendalaman",
          "title": "Auditing in Action 6-1: Enron dan keputusan melanjutkan klien",
          "blocks": [
            {
              "kind": "p",
              "text": "Partner Arthur Andersen mencatat rapat yang memutuskan apakah Enron tetap dijadikan klien. Mereka membahas ketergantungan Enron pada eksekusi transaksi untuk mencapai target keuangan, transaksi di pasar yang belum punya aturan khusus sehingga butuh banyak pertimbangan, dan strukturisasi transaksi yang agresif. Mereka juga membahas konsultasi antara tim perikatan, manajemen kantor Houston, manajemen praktik, dan Professional Services Group (PSG) supaya keputusan tidak diambil sendirian. `(ARENS p.185)`"
            },
            {
              "kind": "p",
              "text": "Kesimpulan rapat: Enron dipertahankan karena Andersen merasa punya orang dan proses yang tepat. Soal independensi, partner menyimpulkan bahwa yang perlu diperhatikan adalah sifat fee, bukan besarnya. Buku menilai kesimpulan itu keliru, karena restatement dan kebangkrutan Enron membuktikan bahwa proses pengelolaan engagement risk firma tidak memadai. `(ARENS p.185)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Rapat Andersen sudah menyentuh unsur yang benar: sifat klien, kompetensi, dan independensi. Keputusannya tetap keliru. Pelajaran untuk ujian: menyebut unsur keputusan saja belum cukup, penilaiannya juga harus kritis terhadap bukti."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Syarat awal audit dan surat penugasan",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Audit baru boleh diterima bila kerangka pelaporan dapat diterima dan manajemen mengakui tanggung jawabnya. Kesepakatan ini dicatat dalam surat penugasan."
        },
        {
          "kind": "p",
          "text": "SA 210 menetapkan **syarat awal (preconditions) audit**: `(ISA210 para. 6)`"
        },
        {
          "kind": "ul",
          "items": [
            "Kerangka pelaporan keuangan yang akan dipakai dapat diterima, misalnya IFRS atau ASPE seperti contoh di buku.",
            "Manajemen mengakui dan memahami tanggung jawabnya untuk menyusun laporan keuangan sesuai kerangka itu, merancang pengendalian internal yang perlu, dan memberi auditor akses ke informasi serta orang yang diperlukan."
          ]
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Buku merumuskan syarat kedua sebagai kesepakatan dengan manajemen dan pihak yang bertanggung jawab atas tata kelola tentang syarat perikatan. SA 210 para. 6(b) merumuskannya sebagai pengakuan tanggung jawab manajemen, dan para. 10 meminta syarat yang disepakati dicatat dalam surat penugasan. `(ARENS p.181; ISA210 paras. 6, 10)`"
        },
        {
          "kind": "p",
          "text": "Kalau syarat awal tidak ada, auditor membahasnya dengan manajemen dan tidak menerima perikatan, kecuali hukum mewajibkan. Hal yang sama berlaku bila manajemen membatasi cakupan sehingga auditor akan terpaksa menyatakan tidak memberi opini (disclaimer). `(ISA210 paras. 7–8)`"
        },
        {
          "kind": "p",
          "text": "**Tujuan laporan keuangan** juga dicari tahu: siapa pemakainya dan untuk apa. Auditor bertanya tentang rencana tambahan modal (penerbitan saham atau pinjaman bank) untuk menemukan pemakai baru. Bukti yang dikumpulkan lebih meyakinkan bila laporan dipakai luas atau untuk tujuan khusus, misalnya keputusan investasi, penilaian calon pemberi pinjaman, atau pengecekan covenant pinjaman. `(ARENS p.181)`"
        },
        {
          "kind": "h3",
          "text": "Isi surat penugasan (engagement letter)"
        },
        {
          "kind": "table",
          "title": "Isi surat penugasan menurut buku",
          "headers": [
            "Unsur",
            "Yang tertulis"
          ],
          "rows": [
            [
              "Tujuan, cakupan, dan keterbatasan",
              "Untuk apa audit dilakukan, apa yang dicakup, dan batasannya"
            ],
            [
              "Tanggung jawab auditor",
              "Termasuk standar yang dipakai dan jenis laporan yang akan diterbitkan"
            ],
            [
              "Tanggung jawab manajemen",
              "Penyusunan laporan keuangan, pengendalian internal, akses informasi"
            ],
            [
              "Kerangka pelaporan",
              "Misalnya ASPE atau IFRS"
            ],
            [
              "Bentuk dan isi laporan auditor",
              "Jenis laporan yang diharapkan"
            ],
            [
              "Pembatasan atas pekerjaan auditor",
              "Bila ada"
            ],
            [
              "Tenggat penyelesaian",
              "Menentukan waktu pekerjaan"
            ],
            [
              "Bantuan klien",
              "Penyiapan dokumen dan catatan"
            ],
            [
              "Bantuan internal audit",
              "Bila klien punya departemen internal audit"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.181)`"
        },
        {
          "kind": "p",
          "text": "Minimal, SA 210 menuntut surat memuat tujuan dan cakupan, tanggung jawab auditor, tanggung jawab manajemen, kerangka pelaporan, rujukan pada bentuk dan isi laporan, serta pernyataan bahwa laporan bisa berbeda dari bentuk yang diharapkan. Untuk audit berulang, auditor menilai apakah syarat perlu direvisi. Perubahan syarat tidak boleh disetujui tanpa alasan yang masuk akal. `(ISA210 paras. 10, 13, 14)`"
        },
        {
          "kind": "p",
          "text": "Tenggat dalam surat memengaruhi jadwal. Bila tenggat dekat dengan tanggal neraca, sebagian besar pekerjaan harus selesai sebelum akhir tahun klien. Bila bantuan klien yang dijanjikan tidak tersedia, auditor menambah waktu perikatan. `(ARENS p.181)`"
        },
        {
          "kind": "h3",
          "text": "Batasan yang membuat audit ditolak"
        },
        {
          "kind": "p",
          "text": "Bila manajemen membatasi akses sampai auditor kemungkinan tidak memperoleh bukti yang cukup dan tepat, audit ditolak atau dihentikan. Buku memberi tujuh contoh. `(ARENS p.184, Table 6-2)`"
        },
        {
          "kind": "table",
          "title": "Batasan cakupan yang membuat audit ditolak (Table 6-2)",
          "headers": [
            "Contoh batasan cakupan",
            "Mengapa bermasalah"
          ],
          "rows": [
            [
              "Tenggat yang tidak realistis",
              "Bukti tidak sempat dikumpulkan"
            ],
            [
              "Catatan atau dokumen klien diragukan ketersediaan atau keandalannya",
              "Bukti tidak bisa dipercaya"
            ],
            [
              "Akses ke orang di dalam atau luar entitas dibatasi",
              "Informasi relevan tidak terjangkau"
            ],
            [
              "Akses ke lokasi (gudang, tempat operasi) dibatasi",
              "Aset tidak bisa diamati"
            ],
            [
              "Auditor meragukan integritas manajemen",
              "Representasi manajemen tidak dapat diandalkan"
            ],
            [
              "Manajemen menolak staf tertentu yang dipilih firma",
              "Firma tidak bisa mengatur tim yang kompeten"
            ],
            [
              "Manajemen berniat tidak menandatangani representasi tertulis di akhir audit",
              "Salah satu bukti wajib tidak akan ada"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "pendalaman",
          "title": "Surat penugasan Hillsburg (Figure 6-2)",
          "blocks": [
            {
              "kind": "p",
              "text": "Surat BKK, LLP kepada Hillsburg Hardware Limited untuk tahun yang berakhir 30 Juni 2020 menunjukkan isi surat yang lengkap. `(ARENS pp.182–183)`"
            },
            {
              "kind": "table",
              "title": "Ringkasan surat penugasan Hillsburg",
              "headers": [
                "Bagian surat",
                "Isi yang patut diingat"
              ],
              "rows": [
                [
                  "Keterbatasan inheren audit",
                  "Audit berbasis pengujian selektif. Fraud yang ditutupi lewat kolusi dan pemalsuan bisa lolos. Pengendalian efektif mengurangi tetapi tidak meniadakan salah saji, jadi auditor tidak bisa menjamin semua salah saji terdeteksi."
                ],
                [
                  "Tanggung jawab auditor",
                  "Memberi keyakinan memadai, bukan mutlak. Pengendalian internal dipertimbangkan hanya untuk menentukan sifat, waktu, dan luas prosedur, bukan untuk memberi opini atas pengendalian."
                ],
                [
                  "Hal yang dikomunikasikan ke manajemen dan TCWG",
                  "Salah saji selain yang sepele, fraud, salah saji yang dapat membuat laporan mendatang salah, tindakan ilegal selain yang tidak berarti, kelemahan signifikan pengendalian, dan transaksi pihak berelasi tertentu"
                ],
                [
                  "Tanggung jawab manajemen",
                  "Penyajian wajar laporan keuangan; kelengkapan informasi (catatan, notulen, pihak berelasi); pencegahan dan pendeteksian fraud dan error; estimasi, kontinjensi, hak atas aset, peristiwa kemudian; representasi tertulis"
                ],
                [
                  "Fee",
                  "Berdasarkan waktu di tiap level tanggung jawab ditambah biaya langsung; auditor segera memberi tahu bila ada hal yang mengubah estimasi"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "Surat ini menunjukkan mengapa dokumen tersebut berguna: manajemen menandatangani pengakuan atas tanggung jawabnya, dan batas pekerjaan auditor tercatat sebelum audit dimulai. `(ARENS pp.182–184)`"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Sumber daya dan waktu dalam strategi",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Strategi diwujudkan lewat lima keputusan: staf, spesialis, auditor internal, auditor komponen, dan jadwal. Tanggung jawab akhir tetap di auditor."
        },
        {
          "kind": "figure",
          "title": "Lima keputusan sumber daya dan waktu",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 724\" width=\"100%\" role=\"img\" aria-labelledby=\"f09-strategi-t f09-strategi-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f09-strategi-t\">Lima keputusan sumber daya dan waktu</title><desc id=\"f09-strategi-d\">Overall audit strategy di atas, dengan lima cabang: staf, spesialis, auditor internal, auditor komponen, jadwal.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"724\" rx=\"14\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"20\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Overall audit strategy</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Menetapkan cakupan, waktu, dan arah</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">audit</text><rect class=\"svg-card\" x=\"60\" y=\"144\" width=\"400\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"74\" y=\"174\" font-size=\"19\" font-weight=\"800\">Staf</text><text class=\"svg-text\" x=\"74\" y=\"202\" font-size=\"18\">Kompetensi sepadan dengan risiko;</text><text class=\"svg-text\" x=\"74\" y=\"226\" font-size=\"18\">spesialis TI bila sistem kompleks</text><rect class=\"svg-title\" x=\"34\" y=\"170.5\" width=\"26\" height=\"3\"/><rect class=\"svg-card\" x=\"60\" y=\"258\" width=\"400\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"74\" y=\"288\" font-size=\"19\" font-weight=\"800\">Spesialis (SA 620)</text><text class=\"svg-text\" x=\"74\" y=\"316\" font-size=\"18\">Ahli di luar akuntansi; tanggung</text><text class=\"svg-text\" x=\"74\" y=\"340\" font-size=\"18\">jawab tetap di auditor</text><rect class=\"svg-title\" x=\"34\" y=\"284.5\" width=\"26\" height=\"3\"/><rect class=\"svg-card\" x=\"60\" y=\"372\" width=\"400\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"74\" y=\"402\" font-size=\"19\" font-weight=\"800\">Auditor internal (SA 610)</text><text class=\"svg-text\" x=\"74\" y=\"430\" font-size=\"18\">Pakai hasil kerjanya atau bantuan</text><text class=\"svg-text\" x=\"74\" y=\"454\" font-size=\"18\">langsung, dengan syarat</text><rect class=\"svg-title\" x=\"34\" y=\"398.5\" width=\"26\" height=\"3\"/><rect class=\"svg-card\" x=\"60\" y=\"486\" width=\"400\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"74\" y=\"516\" font-size=\"19\" font-weight=\"800\">Auditor komponen (SA 600)</text><text class=\"svg-text\" x=\"74\" y=\"544\" font-size=\"18\">Untuk anak perusahaan dan banyak</text><text class=\"svg-text\" x=\"74\" y=\"568\" font-size=\"18\">lokasi</text><rect class=\"svg-title\" x=\"34\" y=\"512.5\" width=\"26\" height=\"3\"/><rect class=\"svg-card\" x=\"60\" y=\"600\" width=\"400\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"74\" y=\"630\" font-size=\"19\" font-weight=\"800\">Jadwal</text><text class=\"svg-text\" x=\"74\" y=\"658\" font-size=\"18\">Tenggat klien, perhitungan</text><text class=\"svg-text\" x=\"74\" y=\"682\" font-size=\"18\">persediaan, pengujian interim</text><rect class=\"svg-title\" x=\"34\" y=\"626.5\" width=\"26\" height=\"3\"/><rect class=\"svg-title\" x=\"32.5\" y=\"120\" width=\"3\" height=\"509.5\"/></svg>",
          "overview": {
            "heading": "Lima keputusan dalam strategi audit menyeluruh",
            "cards": [
              {
                "title": "Staf",
                "subtitle": "",
                "items": [
                  "Kompetensi dan pengalaman sepadan dengan risiko",
                  "Spesialis TI bila sistem kompleks atau bukti hanya elektronik"
                ],
                "takeaway": ""
              },
              {
                "title": "Spesialis (SA 620)",
                "subtitle": "",
                "items": [
                  "Contoh: aktuaris, penilai bisnis, pengacara",
                  "Auditor menilai kualifikasi dan objektivitasnya"
                ],
                "takeaway": "Tanggung jawab tetap di auditor."
              },
              {
                "title": "Auditor internal (SA 610)",
                "subtitle": "",
                "items": [
                  "Pakai hasil kerjanya atau bantuan langsung",
                  "Syarat: kompeten, berintegritas, objektif"
                ],
                "takeaway": "Makin tinggi risiko, makin terbatas yang diserahkan."
              },
              {
                "title": "Auditor komponen (SA 600)",
                "subtitle": "",
                "items": [
                  "Untuk anak perusahaan dan banyak lokasi",
                  "Auditor grup menentukan pekerjaan dan materialitas pelaksanaan"
                ],
                "takeaway": ""
              },
              {
                "title": "Jadwal",
                "subtitle": "",
                "items": [
                  "Tenggat pelaporan klien",
                  "Waktu perhitungan fisik persediaan",
                  "Bagian pekerjaan yang bisa dilakukan interim"
                ],
                "takeaway": ""
              }
            ]
          },
          "caption": "Gambar 9.3: Lima keputusan sumber daya dan waktu dalam strategi audit menyeluruh. Disusun dari ARENS pp.185–188.",
          "altText": "Overall audit strategy menetapkan cakupan, waktu, dan arah. Lima keputusannya: staf, spesialis, auditor internal, auditor komponen, dan jadwal."
        },
        {
          "kind": "table",
          "title": "Lima keputusan sumber daya dan waktu dalam strategi audit",
          "headers": [
            "Keputusan",
            "Pertimbangan",
            "Tanggung jawab auditor"
          ],
          "rows": [
            [
              "Staf",
              "Kompetensi dan pengalaman sepadan dengan risiko. Sistem informasi kompleks, perubahan sistem besar, atau bukti hanya tersedia elektronik berarti tim butuh spesialis TI. Kesinambungan staf dari tahun ke tahun membantu, tetapi terlalu akrab menimbulkan ancaman independensi.",
              "Alokasi staf menentukan efektivitas dan efisiensi serta pemenuhan pengendalian mutu"
            ],
            [
              "Spesialis (SA 620)",
              "Contoh: ahli berlian untuk biaya penggantian, aktuaris untuk cadangan kerugian asuransi, pengacara untuk tafsir kontrak, penilai bisnis untuk nilai wajar.",
              "Auditor harus cukup paham bisnis klien untuk tahu kapan spesialis diperlukan, menilai kualifikasi dan hubungan spesialis dengan klien (objektivitas), serta memahami tujuan dan cakupan kerjanya. Tanggung jawab tidak berkurang. Laporan tidak merujuk spesialis kecuali opini dimodifikasi."
            ],
            [
              "Auditor internal (SA 610)",
              "Bisa dipakai hasil kerjanya (misalnya laporan internal audit) atau dimintai bantuan langsung. Biasa ada di organisasi besar seperti bank, perusahaan terbuka besar, universitas, dan rumah sakit.",
              "Auditor menilai kompetensi, integritas, dan objektivitas internal audit. Makin tinggi risiko salah saji material, makin terbatas pekerjaan yang diserahkan. Bantuan langsung wajib diawasi dan direview, dengan persetujuan tertulis dari wakil entitas yang berwenang dan komitmen kerahasiaan dari internal auditor."
            ],
            [
              "Auditor komponen (SA 600)",
              "Klien dengan banyak lokasi atau anak perusahaan. Auditor grup memastikan auditor komponen kompeten, independen, dan berada di lingkungan regulasi yang mengawasi auditor.",
              "Auditor grup menentukan pekerjaan di tiap komponen, mengomunikasikan persyaratan, dan memberi pedoman materialitas pelaksanaan."
            ],
            [
              "Jadwal",
              "Tenggat pelaporan klien, kapan klien menghitung persediaan (auditor berencana mengamatinya), efektivitas pengendalian, dan risiko salah saji akun tertentu.",
              "Jadwal mengikuti risiko, bukan hanya kenyamanan klien."
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.185–188)`"
        },
        {
          "kind": "p",
          "text": "Tim membahas hal-hal ini dalam **engagement team discussion**. Partner dan anggota kunci tim bertukar pandangan tentang bisnis klien, penerapan kerangka pelaporan, dan bagian laporan keuangan yang rentan salah saji. Bila ada anggota tim yang tidak ikut, partner menentukan hal apa yang perlu disampaikan kepada mereka. `(ARENS p.188; ISA315 paras. 17–18)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Memahami entitas dan lingkungannya",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Risiko salah saji tidak muncul dari angka. Ia muncul dari bisnis klien, jadi auditor memahami bisnisnya dulu."
        },
        {
          "kind": "p",
          "text": "Pemahaman tentang entitas, lingkungannya, dan kerangka pelaporan yang berlaku menjadi dasar mengidentifikasi risiko salah saji material. Contoh dari buku: produsen anggur menghadapi permintaan dan harga yang berfluktuasi, sehingga biaya persediaan bisa melebihi nilai realisasi bersih saat dijual. `(ARENS p.188; ISA315 para. 19)`"
        },
        {
          "kind": "p",
          "text": "Auditor mengumpulkan informasi dalam lima area, ditambah kerangka pelaporan. `(ARENS pp.188–192; ISA315 para. 19)`"
        },
        {
          "kind": "table",
          "title": "Lima area pemahaman entitas dan kerangka pelaporan",
          "headers": [
            "Area",
            "Yang dipelajari",
            "Mengapa penting untuk risiko salah saji"
          ],
          "rows": [
            [
              "Industri, regulasi, dan faktor eksternal",
              "Persaingan (permintaan, kapasitas, harga), hubungan dengan pemasok dan pelanggan, perkembangan teknologi; hukum perburuhan, pajak, lingkungan; kondisi ekonomi, suku bunga, inflasi, kurs",
              "Kegagalan audit sering berasal dari auditor yang kurang paham industri klien (kasus Jack Henry). Pelanggaran hukum memengaruhi kontinjensi dan going concern."
            ],
            [
              "Struktur organisasi dan kepemilikan",
              "Kompleksitas struktur (anak perusahaan, divisi, lokasi); pembeda pemilik, manajer, dan TCWG; pihak berelasi",
              "Struktur kompleks menimbulkan masalah akuntansi (konsolidasi, goodwill, joint venture) dan sistem TI yang rumit. Daftar pihak berelasi membantu menemukan transaksi yang tidak diungkapkan."
            ],
            [
              "Manajemen dan tata kelola",
              "Filosofi dan gaya operasi manajemen; kemampuan mengenali dan merespons risiko; kerja dewan direksi dan komite audit",
              "Studi atas 340 kasus fraud laporan keuangan menemukan CEO atau CFO terlibat di 90 persen kasus. Komite audit yang efektif mengurangi akuntansi yang terlalu agresif."
            ],
            [
              "Model bisnis",
              "Cara entitas menciptakan, mempertahankan, dan menangkap nilai: operasi (sumber pendapatan, pelanggan dan pemasok utama), investasi, dan pendanaan",
              "Menunjukkan business risk yang diambil dan dihadapi entitas"
            ],
            [
              "Ukuran kinerja",
              "Indikator kinerja kunci (pangsa pasar, penjualan per karyawan, pertumbuhan unit, penjualan per meter persegi), anggaran, analisis varians, kebijakan insentif, perbandingan dengan pesaing (daftar indikator ada di Table 6-3, p.192)",
              "Target dan insentif menciptakan tekanan untuk memanipulasi angka"
            ],
            [
              "Kerangka pelaporan dan kebijakan akuntansi",
              "Praktik akuntansi industri, pengakuan pendapatan, instrumen keuangan, transaksi tidak lazim, adaptasi terhadap standar baru",
              "Praktik yang kompleks lebih rawan salah saji"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "h3",
          "text": "Dari business risk ke salah saji"
        },
        {
          "kind": "p",
          "text": "Tidak semua business risk berujung pada risiko salah saji material. Auditor menanyakan: apakah risiko ini bisa membuat akun atau asersi tertentu salah saji? Buku memberi tiga contoh yang menghubungkan business risk ke laporan keuangan. `(ARENS p.191)`"
        },
        {
          "kind": "table",
          "title": "Dari business risk ke akun yang bisa salah saji",
          "headers": [
            "Business risk",
            "Akun dan salah saji yang mungkin"
          ],
          "rows": [
            [
              "Pesaing masuk dengan teknologi baru yang membuat produk klien usang",
              "Persediaan dinyatakan terlalu tinggi"
            ],
            [
              "Produk atau layanan baru",
              "Liabilitas garansi dinyatakan terlalu rendah"
            ],
            [
              "Ekspansi ke pasar baru, atau pasar berubah mendadak (seperti pandemi), sehingga permintaan salah diestimasi",
              "Beragam akun, misalnya biaya riset dan pengembangan yang dikapitalisasi, aset tetap (kapasitas berlebih), dan persediaan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Sumber business risk yang meningkatkan kemungkinan salah saji menurut buku (merujuk CAS 315 A63): tujuan atau strategi yang tidak tepat, kegagalan mengenali kebutuhan berubah (produk baru gagal, pasar tidak cukup, cacat produk menimbulkan tanggung jawab hukum), serta insentif dan tekanan pada manajemen yang bisa menimbulkan bias. `(ARENS p.191)`"
        },
        {
          "kind": "p",
          "text": "Ilustrasi untuk ukuran kinerja: tujuan perusahaan adalah pangsa pasar terbesar, dan bonus manajemen serta tenaga penjual bergantung pada itu. Ada dorongan mencatat penjualan sebelum terjadi atau mencatat penjualan fiktif. Bila pengendalian lemah, asersi occurrence dan cutoff berisiko tinggi. Perbandingan dengan pesaing juga berguna: pertumbuhan atau profitabilitas yang jauh melampaui industri adalah sinyal risiko. `(ARENS p.191)`"
        },
        {
          "kind": "pendalaman",
          "title": "Auditing in Action 6-2: Niko Resources dan Valle Foam",
          "blocks": [
            {
              "kind": "p",
              "text": "Dua kasus dari Kanada menunjukkan mengapa auditor perlu memahami lingkungan regulasi. Niko Resources (minyak dan gas, Calgary) dihukum membayar denda 9,499 juta dolar dan menjalani masa percobaan tiga tahun pada 2011 karena memberi fasilitas kendaraan dan perjalanan kepada pejabat Bangladesh. Perkaranya diproses di bawah undang-undang antisuap Kanada. Valle Foam Industries dan afiliasinya didenda 12,5 juta dolar oleh Competition Bureau pada 2012 setelah mengaku bersekongkol dengan pesaing menetapkan harga busa lebih dari 11 tahun. `(ARENS p.189)`"
            },
            {
              "kind": "p",
              "text": "Bagi auditor, kedua kasus menandakan pengendalian yang lemah dan kemungkinan pelanggaran lain, sehingga strategi audit perlu disesuaikan. Auditor menilai proses yang dibangun perusahaan agar kejadian serupa tidak berulang. Dampak ke going concern juga dinilai. Perusahaan yang dituntut karena suap kepada pejabat asing bisa dilarang mengikuti tender proyek pemerintah federal atau proyek yang dibiayai World Bank sampai 10 tahun, dan itu mengancam pendapatan. `(ARENS p.189)`"
            },
            {
              "kind": "p",
              "text": "Auditor memperhatikan hukum langsung maupun tidak langsung (TM04). Kedua kasus ini tergolong hukum tidak langsung: dampaknya ke laporan keuangan lewat kontinjensi dan going concern. `(ARENS p.189)`"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Prosedur penilaian risiko",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Tiga jenis prosedur, yaitu inquiry, prosedur analitis, dan observasi serta inspeksi, memberi bahan untuk memahami entitas dan menemukan risiko. Hasilnya bukan bukti untuk opini."
        },
        {
          "kind": "figure",
          "title": "Dari prosedur penilaian risiko ke risiko salah saji material",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 618\" width=\"100%\" role=\"img\" aria-labelledby=\"f09-prosedur-risiko-t f09-prosedur-risiko-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f09-prosedur-risiko-t\">Dari prosedur penilaian risiko ke risiko salah saji material</title><desc id=\"f09-prosedur-risiko-d\">Informasi dari penerimaan klien, pengalaman sebelumnya, dan diskusi tim, bersama tiga prosedur (inquiry, analitis, observasi dan inspeksi), menghasilkan pemahaman auditor lalu identifikasi risiko salah saji material.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"618\" rx=\"14\"/><rect class=\"svg-subcard\" x=\"20\" y=\"20\" width=\"140\" height=\"120\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Penerimaan</text><text class=\"svg-title\" x=\"34\" y=\"74\" font-size=\"19\" font-weight=\"800\">dan</text><text class=\"svg-title\" x=\"34\" y=\"98\" font-size=\"19\" font-weight=\"800\">keberlanjutan</text><text class=\"svg-title\" x=\"34\" y=\"122\" font-size=\"19\" font-weight=\"800\">klien</text><rect class=\"svg-subcard\" x=\"170\" y=\"20\" width=\"140\" height=\"120\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"184\" y=\"50\" font-size=\"19\" font-weight=\"800\">Pengalaman</text><text class=\"svg-title\" x=\"184\" y=\"74\" font-size=\"19\" font-weight=\"800\">audit</text><text class=\"svg-title\" x=\"184\" y=\"98\" font-size=\"19\" font-weight=\"800\">sebelumnya</text><rect class=\"svg-subcard\" x=\"320\" y=\"20\" width=\"140\" height=\"120\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"334\" y=\"50\" font-size=\"19\" font-weight=\"800\">Diskusi</text><text class=\"svg-title\" x=\"334\" y=\"74\" font-size=\"19\" font-weight=\"800\">tim</text><text class=\"svg-title\" x=\"334\" y=\"98\" font-size=\"19\" font-weight=\"800\">perikatan</text><rect class=\"svg-badge-blue\" x=\"20\" y=\"170\" width=\"140\" height=\"90\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"200\" font-size=\"19\" font-weight=\"800\">Inquiry</text><rect class=\"svg-badge-blue\" x=\"170\" y=\"170\" width=\"140\" height=\"90\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"184\" y=\"200\" font-size=\"19\" font-weight=\"800\">Prosedur</text><text class=\"svg-title\" x=\"184\" y=\"224\" font-size=\"19\" font-weight=\"800\">analitis</text><rect class=\"svg-badge-blue\" x=\"320\" y=\"170\" width=\"140\" height=\"96\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"334\" y=\"200\" font-size=\"19\" font-weight=\"800\">Observasi</text><text class=\"svg-title\" x=\"334\" y=\"224\" font-size=\"19\" font-weight=\"800\">dan</text><text class=\"svg-title\" x=\"334\" y=\"248\" font-size=\"19\" font-weight=\"800\">inspeksi</text><rect class=\"svg-badge-green\" x=\"20\" y=\"296\" width=\"440\" height=\"148\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"326\" font-size=\"19\" font-weight=\"800\">Pemahaman auditor</text><text class=\"svg-text\" x=\"34\" y=\"354\" font-size=\"18\">Entitas dan lingkungannya</text><text class=\"svg-text\" x=\"34\" y=\"378\" font-size=\"18\">Kerangka pelaporan yang berlaku</text><text class=\"svg-text\" x=\"34\" y=\"402\" font-size=\"18\">Sistem pengendalian internal (Ch.8 dan</text><text class=\"svg-text\" x=\"34\" y=\"426\" font-size=\"18\">9, TM13)</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"474\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"504\" font-size=\"19\" font-weight=\"800\">Identifikasi risiko salah saji</text><text class=\"svg-title\" x=\"34\" y=\"528\" font-size=\"19\" font-weight=\"800\">material</text><text class=\"svg-text\" x=\"34\" y=\"556\" font-size=\"18\">Dasar menyusun prosedur lanjutan (SA</text><text class=\"svg-text\" x=\"34\" y=\"580\" font-size=\"18\">330)</text><rect class=\"svg-title\" x=\"88.5\" y=\"142\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M82 155 L90 168 L98 155 Z\"/><rect class=\"svg-title\" x=\"238.5\" y=\"142\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M232 155 L240 168 L248 155 Z\"/><rect class=\"svg-title\" x=\"388.5\" y=\"142\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M382 155 L390 168 L398 155 Z\"/><rect class=\"svg-title\" x=\"88.5\" y=\"268\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M82 281 L90 294 L98 281 Z\"/><rect class=\"svg-title\" x=\"238.5\" y=\"268\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M232 281 L240 294 L248 281 Z\"/><rect class=\"svg-title\" x=\"388.5\" y=\"268\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M382 281 L390 294 L398 281 Z\"/><rect class=\"svg-title\" x=\"238.5\" y=\"446\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M232 459 L240 472 L248 459 Z\"/></svg>",
          "overview": {
            "heading": "Dari prosedur penilaian risiko ke risiko salah saji material",
            "cards": [
              {
                "title": "Sumber informasi lain",
                "subtitle": "",
                "items": [
                  "Penerimaan dan keberlanjutan klien",
                  "Pengalaman audit sebelumnya",
                  "Diskusi tim perikatan"
                ],
                "takeaway": ""
              },
              {
                "title": "Tiga prosedur penilaian risiko",
                "subtitle": "",
                "items": [
                  "Inquiry kepada manajemen dan pihak lain",
                  "Prosedur analitis",
                  "Observasi dan inspeksi"
                ],
                "takeaway": "Ketiganya memberi bahan, bukan bukti untuk opini."
              },
              {
                "title": "Pemahaman auditor",
                "subtitle": "",
                "items": [
                  "Entitas dan lingkungannya",
                  "Kerangka pelaporan yang berlaku",
                  "Sistem pengendalian internal (Ch.8 dan 9, TM13)"
                ],
                "takeaway": ""
              },
              {
                "title": "Identifikasi risiko salah saji material",
                "subtitle": "",
                "items": [
                  "Dasar menyusun prosedur lanjutan (SA 330)"
                ],
                "takeaway": ""
              }
            ]
          },
          "caption": "Gambar 9.4: Dari prosedur penilaian risiko ke identifikasi risiko salah saji material. Disusun dari Figure 6-3 (ARENS p.193) dan ISA315 paras. 13–19.",
          "altText": "Tiga sumber informasi dan tiga prosedur penilaian risiko mengalir ke pemahaman auditor tentang entitas, kerangka pelaporan, dan pengendalian internal, lalu ke identifikasi risiko salah saji material."
        },
        {
          "kind": "p",
          "text": "Auditor merancang prosedur penilaian risiko untuk memperoleh bukti sebagai dasar dua hal. Pertama, mengidentifikasi dan menilai risiko salah saji material (karena fraud atau error) di tingkat laporan keuangan dan asersi. Kedua, merancang prosedur lanjutan sesuai SA 330. Prosedur ini tidak boleh condong mencari bukti yang menguatkan dan mengabaikan bukti yang bertentangan. `(ISA315 para. 13)`"
        },
        {
          "kind": "p",
          "text": "Prosedur penilaian risiko meliputi tiga hal. `(ISA315 para. 14; ARENS p.193)`"
        },
        {
          "kind": "h3",
          "text": "1. Inquiry kepada manajemen dan pihak lain di dalam entitas"
        },
        {
          "kind": "table",
          "title": "Inquiry: pihak yang ditanya dan hal yang dipelajari",
          "headers": [
            "Pihak",
            "Yang bisa dipelajari"
          ],
          "rows": [
            [
              "Manajemen",
              "Operasi, kebijakan, dan desain pengendalian"
            ],
            [
              "Pihak yang bertanggung jawab atas tata kelola (misalnya dewan direksi)",
              "Keputusan strategis seperti akuisisi atau lini bisnis baru, dan pengawasan tata kelola"
            ],
            [
              "Internal audit",
              "Risiko utama bisnis, serta desain dan efektivitas pengendalian"
            ],
            [
              "Penasihat hukum internal",
              "Dampak ketidakpatuhan pada pelaporan keuangan"
            ],
            [
              "Bagian pemasaran atau penjualan, dan pihak yang menangani transaksi kompleks atau tidak lazim",
              "Risiko pengakuan pendapatan dan penilaian piutang"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.193–194)`"
        },
        {
          "kind": "h3",
          "text": "2. Prosedur analitis"
        },
        {
          "kind": "p",
          "text": "Dilakukan di setiap audit pada tahap perencanaan untuk memahami entitas dan menilai business risk. Karena memakai data tingkat tinggi, hasilnya hanya indikasi kasar bahwa salah saji mungkin ada. Detailnya ada di bagian 7. `(ARENS p.194)`"
        },
        {
          "kind": "h3",
          "text": "3. Observasi dan inspeksi"
        },
        {
          "kind": "table",
          "title": "Observasi dan inspeksi: kegiatan dan temuan yang mungkin",
          "headers": [
            "Kegiatan",
            "Contoh yang bisa ditemukan"
          ],
          "rows": [
            [
              "Observasi operasi dan tur fasilitas",
              "Pengamanan aset, peralatan menganggur, persediaan yang mungkin tidak bisa dijual, serta iklim etika, misalnya lewat pengamatan rapat komite audit"
            ],
            [
              "Inspeksi dokumen internal",
              "Rencana strategis, struktur organisasi, kode etik beserta perubahan dan pengecualiannya, notulen rapat (persetujuan kompensasi pejabat, kontrak baru, akuisisi, pinjaman, dividen)"
            ],
            [
              "Inspeksi informasi eksternal",
              "Jurnal perdagangan dan ekonomi, laporan analis, bank, dan lembaga pemeringkat; pengajuan ke regulator seperti OSC atau SEC untuk menemukan pemegang saham utama dan pihak berelasi"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.194–195)`"
        },
        {
          "kind": "h3",
          "text": "Sumber informasi lain"
        },
        {
          "kind": "p",
          "text": "Informasi dari proses penerimaan dan keberlanjutan klien, serta pengalaman audit tahun-tahun sebelumnya, ikut dipakai. Pengalaman itu mencakup salah saji atau restatement di masa lalu, perubahan operasi yang signifikan, dan transaksi atau saldo yang sulit diaudit. Bila auditor memakai informasi lama, ia menilai apakah informasi itu masih relevan dan dapat diandalkan. `(ARENS p.196; ISA315 paras. 15–16)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi.** Hasil prosedur penilaian risiko dan hasil engagement team discussion masuk ke satu pemahaman yang sama. Dari situ auditor mengidentifikasi risiko, dan tiga prosedur di atas berfungsi sebagai sumber bahan, bukan sebagai uji atas asersi. Susunan ini disimpulkan dari Figure 6-3 `(ARENS p.193)`."
        },
        {
          "kind": "pendalaman",
          "title": "Alat otomatis untuk penilaian risiko (Auditing in Action 6-3 dan 6-4)",
          "blocks": [
            {
              "kind": "p",
              "text": "Auditor memakai alat dan teknik otomatis pada semua prosedur penilaian risiko. Contoh dari buku: `(ARENS pp.194–195)`"
            },
            {
              "kind": "ul",
              "items": [
                "**Spreadsheet** untuk membandingkan jumlah tercatat dengan anggaran.",
                "**Visualisasi** dengan Tableau, Power BI, atau Excel, seperti diagram batang dan histogram.",
                "**Drone** untuk mengamati aset di lokasi terpencil. Bersama kecerdasan buatan, drone dapat membuat model 3D seluruh pabrik.",
                "**Machine learning** untuk membaca kumpulan dokumen besar, seperti kontrak."
              ]
            },
            {
              "kind": "p",
              "text": "Contoh visualisasi (AICPA Guide to Audit Data Analytics) memakai buku besar dua tahun. Auditor menetapkan ambang perubahan akun, misalnya lebih dari 2 juta dolar atau 5 persen dari saldo. Akun yang melewati ambang ditandai, lalu auditor bisa \"drilling down\" ke rincian, misalnya persediaan per lini produk atau per lokasi. Cara ini cepat menemukan sumber perubahan yang tidak terduga. `(ARENS p.194)`"
            },
            {
              "kind": "p",
              "text": "Contoh machine learning: Deloitte memakai Argus untuk membaca sewa, kontrak derivatif, dan kontrak penjualan. Alat ini mengidentifikasi istilah kunci, tren, dan pencilan. Auditor lalu memusatkan waktu pada kontrak berisiko tertinggi, misalnya sewa dengan syarat tidak standar, dan memakai pertimbangan profesionalnya untuk menafsirkan temuan. `(ARENS p.195)`"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Prosedur analitis pendahuluan: contoh Hillsburg",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** Rasio dan analisis horizontal-vertikal tidak membuktikan salah saji. Keduanya menunjuk akun dan asersi yang perlu perhatian lebih."
        },
        {
          "kind": "p",
          "text": "Tujuan prosedur analitis pendahuluan: memahami bisnis dan industri, menilai business risk, dan menemukan jumlah, rasio, atau tren yang tidak biasa. Perubahan rasio dibandingkan dengan tahun lalu dan dengan rata-rata industri atau pesaing. `(ARENS pp.194, 196)`"
        },
        {
          "kind": "table",
          "title": "Contoh prosedur analitis pada tahap perencanaan (Table 6-4)",
          "headers": [
            "Prosedur",
            "Tujuan"
          ],
          "rows": [
            [
              "Hitung rasio kunci dan bandingkan dengan rata-rata industri",
              "Memahami industri dan bisnis klien"
            ],
            [
              "Hitung debt-to-equity dan bandingkan dengan tahun lalu dan perusahaan sukses di industri",
              "Menilai going concern"
            ],
            [
              "Bandingkan gross margin dengan tahun lalu, cari fluktuasi besar",
              "Menemukan kemungkinan salah saji; merencanakan sifat, waktu, dan luas prosedur lanjutan"
            ],
            [
              "Susun laporan keuangan common-size",
              "Menemukan area berisiko tinggi; membantu menilai risiko fraud"
            ],
            [
              "Bandingkan beban dibayar di muka dan beban terkait dengan tahun lalu",
              "Menemukan kemungkinan salah saji; merencanakan prosedur lanjutan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.196, Table 6-4)`"
        },
        {
          "kind": "h3",
          "text": "Rasio terpilih Hillsburg"
        },
        {
          "kind": "table",
          "title": "Rasio terpilih Hillsburg dibanding industri (Table 6-5)",
          "headers": [
            "Rasio",
            "Hillsburg 2020",
            "Industri 2020",
            "Hillsburg 2019",
            "Industri 2019"
          ],
          "rows": [
            [
              "Quick ratio",
              "1,50",
              "3,10",
              "1,45",
              "3,00"
            ],
            [
              "Current ratio",
              "3,86",
              "5,20",
              "4,04",
              "5,10"
            ],
            [
              "Perputaran piutang (kali)",
              "7,59",
              "12,15",
              "7,61",
              "12,25"
            ],
            [
              "Hari penagihan piutang",
              "48,11",
              "30,04",
              "47,96",
              "29,80"
            ],
            [
              "Perputaran persediaan (kali)",
              "3,36",
              "5,20",
              "3,02",
              "4,90"
            ],
            [
              "Hari penjualan persediaan",
              "108,65",
              "70,19",
              "120,86",
              "74,49"
            ],
            [
              "Debt-to-equity",
              "1,73",
              "2,51",
              "1,98",
              "2,53"
            ],
            [
              "Gross profit percent",
              "27,85",
              "31,00",
              "27,70",
              "32,00"
            ],
            [
              "Return on assets",
              "0,13",
              "0,09",
              "0,12",
              "0,09"
            ]
          ],
          "stackOnMobile": true,
          "align": [
            null,
            "right",
            "right",
            "right",
            "right"
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS p.197, Table 6-5; hanya rasio terpilih)`"
        },
        {
          "kind": "figure",
          "title": "Hillsburg dan industri: hari penagihan piutang dan hari penjualan persediaan, 2020",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 452\" width=\"100%\" role=\"img\" aria-labelledby=\"f09-hillsburg-hari-t f09-hillsburg-hari-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f09-hillsburg-hari-t\">Hari penagihan piutang dan hari penjualan persediaan, Hillsburg dibanding industri, 2020</title><desc id=\"f09-hillsburg-hari-d\">Hillsburg 48,11 hari menagih piutang dan 108,65 hari menjual persediaan; industri 30,04 dan 70,19 hari.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"452\" rx=\"14\"/><text class=\"svg-title\" x=\"20\" y=\"40\" font-size=\"19\" font-weight=\"800\">Hari penagihan piutang</text><text class=\"svg-text\" x=\"20\" y=\"70\" font-size=\"18\">Hillsburg 2020</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"80\" width=\"148.33916666666667\" height=\"30\" rx=\"6\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"176.33916666666667\" y=\"102\" font-size=\"18\" font-weight=\"800\">48,11</text><text class=\"svg-text\" x=\"20\" y=\"140\" font-size=\"18\">Industri 2020</text><rect class=\"svg-badge-blue\" x=\"20\" y=\"150\" width=\"92.62333333333333\" height=\"30\" rx=\"6\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"120.62333333333333\" y=\"172\" font-size=\"18\" font-weight=\"800\">30,04</text><text class=\"text-accent-amber\" x=\"20\" y=\"200\" font-size=\"18\" font-weight=\"700\">Hillsburg 18 hari lebih lambat</text><text class=\"svg-title\" x=\"20\" y=\"254\" font-size=\"19\" font-weight=\"800\">Hari penjualan persediaan</text><text class=\"svg-text\" x=\"20\" y=\"284\" font-size=\"18\">Hillsburg 2020</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"294\" width=\"335.0041666666667\" height=\"30\" rx=\"6\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"363.0041666666667\" y=\"316\" font-size=\"18\" font-weight=\"800\">108,65</text><text class=\"svg-text\" x=\"20\" y=\"354\" font-size=\"18\">Industri 2020</text><rect class=\"svg-badge-blue\" x=\"20\" y=\"364\" width=\"216.41916666666665\" height=\"30\" rx=\"6\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"244.41916666666665\" y=\"386\" font-size=\"18\" font-weight=\"800\">70,19</text><text class=\"text-accent-amber\" x=\"20\" y=\"414\" font-size=\"18\" font-weight=\"700\">Hillsburg 38 hari lebih lambat</text></svg>",
          "overview": {
            "heading": "Hillsburg dibanding industri, 2020",
            "cards": [
              {
                "title": "Hari penagihan piutang",
                "subtitle": "",
                "items": [
                  "Hillsburg 48,11 hari",
                  "Industri 30,04 hari"
                ],
                "takeaway": "Selisih sekitar 18 hari. Piutang berisiko pada asersi valuation."
              },
              {
                "title": "Hari penjualan persediaan",
                "subtitle": "",
                "items": [
                  "Hillsburg 108,65 hari",
                  "Industri 70,19 hari"
                ],
                "takeaway": "Selisih sekitar 38 hari. Persediaan berisiko pada asersi valuation."
              }
            ],
            "footer": "Sumber: Table 6-5 (ARENS p.197). Selisih dihitung dari angka itu."
          },
          "caption": "Gambar 9.5: Hari penagihan piutang dan hari penjualan persediaan, Hillsburg dibanding industri, 2020. Data dari Table 6-5 (ARENS p.197); selisih dihitung dari angka itu.",
          "altText": "Diagram batang horizontal. Hari penagihan piutang: Hillsburg 48,11 hari, industri 30,04 hari. Hari penjualan persediaan: Hillsburg 108,65 hari, industri 70,19 hari. Hillsburg lebih lambat di kedua ukuran."
        },
        {
          "kind": "p",
          "text": "**Cara buku membacanya:** profitabilitas Hillsburg cukup baik walau persaingan dari jaringan nasional meningkat, dan toko perangkat keras termasuk layanan esensial saat pandemi. Likuiditas lebih rendah dari industri tetapi kondisi keuangan baik, dan rasio leverage menunjukkan masih ada kapasitas pinjaman. Hillsburg menyimpan lebih banyak persediaan dan lebih lama menagih piutang daripada industri karena pelanggannya toko independen kecil. `(ARENS p.197)`"
        },
        {
          "kind": "p",
          "text": "Auditor memusatkan perhatian pada rasio aktivitas. Perputaran persediaan membaik tetapi masih di bawah industri. Perputaran piutang sedikit turun dan juga di bawah industri. Karena itu auditor menilai risiko salah saji material tinggi pada **piutang usaha dan persediaan**, dengan asersi relevan **valuation**. Upaya audit di dua akun ini ditambah, termasuk bukti yang lebih meyakinkan. `(ARENS p.197)`"
        },
        {
          "kind": "h3",
          "text": "Analisis horizontal dan vertikal"
        },
        {
          "kind": "p",
          "text": "**Horizontal analysis** membandingkan saldo akun dengan periode sebelumnya dan menilai persentase perubahannya. **Vertical analysis** (common-size) mengubah pos laporan menjadi persentase dari satu dasar, biasanya penjualan. `(ARENS pp.197–198)`"
        },
        {
          "kind": "table",
          "title": "Analisis horizontal laba rugi Hillsburg (ribuan, Figure 6-4)",
          "headers": [
            "Pos laporan laba rugi (ribuan)",
            "2020",
            "2019",
            "Perubahan",
            "Persentase"
          ],
          "rows": [
            [
              "Net sales",
              "143.086",
              "131.226",
              "11.860",
              "9,0%"
            ],
            [
              "Cost of sales",
              "103.241",
              "94.876",
              "8.365",
              "8,8%"
            ],
            [
              "Gross profit",
              "39.845",
              "36.350",
              "3.495",
              "9,6%"
            ],
            [
              "Selling, general, and administrative",
              "32.475",
              "29.656",
              "2.819",
              "9,5%"
            ],
            [
              "Operating income",
              "7.370",
              "6.694",
              "676",
              "10,1%"
            ],
            [
              "Interest expense",
              "2.409",
              "2.035",
              "374",
              "18,4%"
            ],
            [
              "Gain on sale of assets",
              "(720)",
              "0",
              "(720)",
              "tidak ada"
            ],
            [
              "Total other income/expense (net)",
              "1.689",
              "2.035",
              "(346)",
              "−17,0%"
            ],
            [
              "Earnings before income taxes",
              "5.681",
              "4.659",
              "1.022",
              "21,9%"
            ],
            [
              "Provision for income taxes",
              "1.747",
              "1.465",
              "282",
              "19,2%"
            ],
            [
              "Net income",
              "3.934",
              "3.194",
              "740",
              "23,2%"
            ]
          ],
          "stackOnMobile": true,
          "align": [
            null,
            "right",
            "right",
            "right",
            "right"
          ]
        },
        {
          "kind": "p",
          "text": "`(ARENS p.198, Figure 6-4)`"
        },
        {
          "kind": "p",
          "text": "Penjualan naik 9,0 persen (11.860 dibagi 131.226). Harga pokok penjualan serta gaji dan komisi penjualan naik cukup besar, tetapi stabil sebagai persentase penjualan. Itu sesuai harapan untuk akun yang bergerak mengikuti penjualan. Dari analisis vertikal tiga tahun, auditor akan meminta penjelasan dan bukti tambahan untuk tiga pos: `(ARENS p.198)`"
        },
        {
          "kind": "ul",
          "items": [
            "**Iklan** naik sebagai persentase penjualan. Penjelasan mungkin kampanye iklan baru.",
            "**Beban piutang tak tertagih** turun sebagai persentase penjualan, padahal piutang menagih lebih lambat dari industri. Asersi yang dinilai berisiko tinggi adalah valuation. Respons: kumpulkan bukti yang meyakinkan apakah beban dan cadangan piutang tak tertagih terlalu rendah.",
            "**Perbaikan dan pemeliharaan** naik. Fluktuasi biasa bila ada perbaikan tak terduga, tetapi pengeluaran besar diperiksa apakah seharusnya dikapitalisasi sebagai aset tetap (asersi allocation)."
          ]
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi.** Net income naik 23,2 persen, jauh di atas kenaikan penjualan 9,0 persen. Salah satu penyebabnya ada di tabel: gain on sale of assets 720 ribu muncul di 2020 dan tidak ada di 2019. Tanpa gain itu, laba sebelum pajak menjadi 4.961 ribu (5.681 dikurangi 720), naik sekitar 6,5 persen dari 4.659. Hitungan ini turunan dari angka buku, bukan bagian dari analisis buku. Pelajarannya sama dengan normalisasi laba di TM07: pos satu kali bisa mengubah gambaran tren. `(ARENS p.198; ARENS p.203)`"
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
          "title": "Kasus 1: Terima atau tolak klien.",
          "prompt": "PT Nusa Digital adalah start-up satu produk yang mendanai ekspansi dengan utang jangka pendek. CFO-nya sudah tiga kali berganti dalam dua tahun. Direktur utama menolak izin firma menghubungi auditor sebelumnya dan meminta audit selesai dua minggu setelah tutup buku. Kamu diminta memberi rekomendasi kepada partner.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "Engagement risk tinggi pada dua faktor. Going concern: bisnis start-up dengan satu produk dan pendanaan utang jangka pendek mudah gagal. `(ARENS p.179)`",
                "Integritas: perputaran CFO yang tinggi dan manajemen yang enggan memberi akses adalah indikator dalam Table 6-1. `(ARENS p.179)`",
                "Penolakan kontak dengan auditor pendahulu: auditor sebaiknya serius mempertimbangkan menolak perikatan. `(ARENS p.180)`",
                "Tenggat dua minggu masuk batasan cakupan (tenggat tidak realistis). `(ARENS p.184, Table 6-2)`",
                "**Rekomendasi:** tolak, kecuali manajemen mengizinkan kontak dengan auditor pendahulu dan menyetujui tenggat yang realistis. Alasan pokok: akses dan tenggat menghalangi bukti yang cukup dan tepat, sedangkan risiko going concern menaikkan risiko gugatan."
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Sumber daya audit grup.",
          "prompt": "Sebuah grup memiliki induk di Surabaya dan dua anak perusahaan di luar Jawa. Grup baru mengganti sistem ERP, memegang kontrak derivatif besar, dan punya departemen internal audit. Persediaan dihitung fisik pada 31 Desember. Tentukan keputusan sumber daya dan waktu dalam strategi audit.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**Staf dan spesialis TI:** sistem baru dan perubahan besar berarti tim perlu spesialis TI. `(ARENS p.186)`",
                "**Spesialis instrumen keuangan:** nilai wajar derivatif butuh keahlian khusus. Auditor menilai kualifikasi dan objektivitas spesialis, tetapi tanggung jawab tetap pada auditor. `(ARENS p.187)`",
                "**Internal audit:** menilai kompetensi, integritas, dan objektivitasnya. Untuk area berisiko tinggi seperti derivatif, pekerjaan yang diserahkan dibatasi. Bantuan langsung wajib diawasi. `(ARENS p.187)`",
                "**Auditor komponen:** pastikan kompeten, independen, dan di lingkungan yang diawasi regulator; tentukan pekerjaan di tiap anak perusahaan dan beri pedoman materialitas pelaksanaan. `(ARENS pp.187–188)`",
                "**Waktu:** jadwalkan pengamatan perhitungan fisik persediaan 31 Desember. `(ARENS p.188)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3: Dari business risk ke asersi.",
          "prompt": "Sebuah perusahaan elektronik ritel melihat pesaing meluncurkan produk dengan teknologi lebih baru. Bonus direktur penjualan bergantung pada pertumbuhan pangsa pasar. Pengendalian atas pencatatan penjualan di perusahaan ini lemah. Identifikasi akun dan asersi yang berisiko.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "Produk usang membuat persediaan mungkin dinyatakan terlalu tinggi: asersi valuation. `(ARENS p.191)`",
                "Bonus berbasis pangsa pasar menekan manajemen mencatat penjualan terlalu awal atau fiktif. Dengan pengendalian lemah, asersi occurrence dan cutoff atas pendapatan berisiko tinggi. `(ARENS p.191)`",
                "Respons: tambah bukti yang meyakinkan untuk dua area itu, tempatkan staf yang lebih berpengalaman, dan perluas pengujian. `(ARENS p.177)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 4: Membaca data analitis.",
          "prompt": "PT Mitra Niaga adalah distributor. Tahun ini perputaran piutangnya 6,0 kali dan perputaran persediaannya 3,8 kali, sedangkan industri 10,0 dan 6,0 kali. Perputaran piutang tahun lalu 6,3 kali. Beban piutang tak tertagih turun dari 1,0 persen menjadi 0,5 persen penjualan, sementara beban perbaikan naik 40 persen. Tentukan akun dan asersi yang perlu perhatian dan responsnya.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "Perputaran piutang dan persediaan jauh di bawah industri: piutang dan persediaan berisiko tinggi dengan asersi relevan valuation, mengikuti pola Hillsburg. `(ARENS p.197)`",
                "Beban piutang tak tertagih turun padahal piutang menagih lebih lambat: indikasi cadangan terlalu rendah. Respons: bukti lebih meyakinkan atas valuation. `(ARENS p.198)`",
                "Kenaikan beban perbaikan 40 persen: periksa pengeluaran besar apakah seharusnya dikapitalisasi (asersi allocation). `(ARENS p.198)`",
                "Semua ini hanya indikasi dari data agregat, jadi perlu penjelasan manajemen dan bukti pendukung sebelum disimpulkan. `(ARENS p.194)`"
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
          "question": "**1. Firma audit butuh pendapatan. Kenapa ia tetap menilai klien sebelum menerima perikatan?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* karena klien yang manajemennya tidak jujur, bangkrut setelah laporan terbit, atau terus berselisih tentang cakupan dan fee bisa membawa biaya dan risiko hukum yang lebih besar daripada fee-nya. Firma menilai integritas, kompetensi, dan independensi untuk mengelola engagement risk. `(ARENS p.178)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"supaya auditor tidak rugi\" tanpa menyebut integritas, kompetensi, atau independensi."
        },
        {
          "kind": "self-check",
          "question": "**2. Jelaskan beda overall audit strategy dan audit plan dengan satu contoh keputusan untuk masing-masing.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* strategi menetapkan cakupan, waktu, dan arah, misalnya menugaskan staf berpengalaman ke area berisiko tinggi atau menjadwalkan interim audit. Rencana lebih rinci, misalnya prosedur pengujian piutang beserta ukuran sampelnya. Rencana dikembangkan dari strategi dan sebagian prosedurnya baru bisa dirancang setelah penilaian risiko. `(ISA300 paras. 7–9, A15)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut keduanya sebagai \"dokumen perencanaan\" tanpa membedakan tingkat rincian."
        },
        {
          "kind": "self-check",
          "question": "**3. Pilih satu business risk, lalu telusuri sampai akun dan asersi yang terdampak.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* pesaing meluncurkan teknologi baru yang membuat produk klien usang. Akibatnya persediaan mungkin dinyatakan terlalu tinggi, jadi asersi valuation pada persediaan berisiko. Auditor menanggapi dengan bukti yang lebih meyakinkan pada penilaian persediaan. `(ARENS p.191)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut dampak umum (\"bisnis menurun\") tanpa menyebut akun dan asersi."
        },
        {
          "kind": "self-check",
          "question": "**4. Kenapa prosedur penilaian risiko tidak cukup sebagai dasar opini? Lalu untuk apa prosedur itu?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* prosedur ini memakai data yang luas dan memberi indikasi, bukan bukti yang cukup dan tepat atas asersi. Gunanya mengidentifikasi dan menilai risiko salah saji material serta merancang prosedur lanjutan. `(ARENS p.192; ISA315 para. 13)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"karena hanya inquiry\" padahal prosedur ini juga mencakup analitis, observasi, dan inspeksi."
        },
        {
          "kind": "self-check",
          "question": "**5. Di Hillsburg, kenapa auditor menilai piutang dan persediaan berisiko tinggi, dan asersi apa yang relevan?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* perputaran piutang (7,59 kali) dan persediaan (3,36 kali) di bawah industri (12,15 dan 5,20), jadi hari penagihan 48,11 dan hari penjualan persediaan 108,65 jauh lebih lama dari industri. Risiko saldo tidak bisa ditagih atau tidak bisa dijual membuat asersi valuation relevan, dan auditor menambah bukti pada dua akun itu. `(ARENS p.197)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut \"semua rasio lebih rendah dari industri\" tanpa memilih rasio aktivitas dan tanpa menyebut valuation."
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
          "text": "**Kerangka jawaban soal keputusan terima atau lanjut klien**"
        },
        {
          "kind": "ol",
          "items": [
            "Nilai engagement risk: ketergantungan pengguna, kemampuan going concern, integritas manajemen.",
            "Nilai kompetensi: kemampuan, waktu, dan sumber daya firma.",
            "Nilai independensi: lima ancaman dan safeguard.",
            "Cek syarat awal: kerangka pelaporan dapat diterima; manajemen mengakui tanggung jawab; tidak ada batasan cakupan yang berujung disclaimer.",
            "Untuk klien baru: komunikasi dengan auditor pendahulu atas izin klien.",
            "Simpulkan: terima, terima dengan syarat (misalnya fee lebih tinggi), atau tolak, dengan alasan."
          ]
        },
        {
          "kind": "p",
          "text": "**Kerangka jawaban soal dari business risk ke asersi**"
        },
        {
          "kind": "ol",
          "items": [
            "Sebutkan business risk dan sumbernya (industri, regulasi, model bisnis, ukuran kinerja).",
            "Tentukan akun laporan keuangan yang terdampak.",
            "Pilih asersi dan arah salah saji (terlalu tinggi atau terlalu rendah).",
            "Tentukan respons: bukti lebih meyakinkan, staf lebih berpengalaman, perluasan pengujian."
          ]
        },
        {
          "kind": "p",
          "text": "**Pasangan yang sering tertukar**"
        },
        {
          "kind": "table",
          "title": "Pasangan istilah yang sering tertukar di TM09",
          "headers": [
            "Pasangan",
            "Pembeda"
          ],
          "rows": [
            [
              "Client business risk vs engagement risk",
              "Risiko klien gagal mencapai tujuannya vs risiko yang mau ditanggung firma saat menerima klien"
            ],
            [
              "Business risk vs risk of material misstatement",
              "Risiko bisnis tidak otomatis menjadi risiko salah saji; yang berdampak ke akun dan asersi yang masuk hitungan"
            ],
            [
              "Overall audit strategy vs audit plan",
              "Cakupan, waktu, arah vs prosedur rinci"
            ],
            [
              "Prosedur penilaian risiko vs prosedur lanjutan",
              "Mengidentifikasi risiko vs menanggapi risiko dengan pengujian"
            ],
            [
              "Horizontal vs vertical analysis",
              "Perubahan terhadap periode lain vs persentase dari satu dasar (misalnya penjualan)"
            ],
            [
              "Memakai pekerjaan internal audit vs bantuan langsung internal audit",
              "Hasil kerja yang sudah ada vs internal auditor bekerja di bawah arahan dan supervisi auditor eksternal"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
