// AKA201 TM10/05_student_learning_version.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201-v2.mjs.
// The text is verbatim from the content package; figures come from aka201-fig-*.mjs. Change those and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const TM10_READING: Reading = {
  "tm": 10,
  "title": "Bukti Audit dan Prosedur Analitis",
  "intro": "**Sumber utama:** Arens dkk., Ch.5, pp.126–155 dan Appendix 5A, pp.162–164. **Standar:** SA/ISA 500 (bukti audit), SA/ISA 520 (prosedur analitis).",
  "objectives": [
    "Menjelaskan apa itu bukti audit dan tiga keputusan bukti: nature, extent, dan timing.",
    "Menilai persuasiveness bukti lewat appropriateness (relevance dan reliability), sufficiency, dan timeliness.",
    "Membedakan tiga kategori prosedur dari tujuh jenis prosedur audit, lalu memilih yang cocok untuk satu asersi.",
    "Merancang dan menilai substantive analytical procedure dengan empat langkah.",
    "Menjelaskan langkah audit data analytics (ADA) dan batas teknologi canggih dalam audit."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "title": "0. Fondasi: opini auditor hanya sekuat bukti di bawahnya",
      "layer": "fondasi",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** auditor tidak pernah bisa yakin mutlak. Ia mengumpulkan bukti sampai cukup yakin untuk memberi opini pada tingkat keyakinan memadai (reasonable assurance). Dua pertanyaan mengatur seluruh bab: bukti apa dan berapa banyak, lalu seberapa meyakinkan bukti itu. `(ARENS p.130; ISA500 para. 4)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan cakupan.** Ch.5 juga membahas dokumentasi audit dan skeptisisme profesional (pp.156–161). Bagian itu masuk TM11. TM ini mengambil bukti audit, jenis prosedur, prosedur analitis, dan audit data analytics. `(ARENS pp.126–155)`"
        },
        {
          "kind": "figure",
          "title": "Tiga keputusan bukti dan kualitas persuasiveness",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 598\" width=\"100%\" role=\"img\" aria-labelledby=\"f10-peta-t f10-peta-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f10-peta-t\">Tiga keputusan bukti dan kualitas persuasiveness</title><desc id=\"f10-peta-d\">Tiga baris: nature ke appropriateness, extent ke sufficiency, timing ke timeliness. Ketiganya bermuara pada persuasiveness bukti.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"598\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"160\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Nature</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Prosedur apa?</text><rect class=\"svg-badge-blue\" x=\"210\" y=\"20\" width=\"250\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"224\" y=\"50\" font-size=\"19\" font-weight=\"800\">Appropriateness</text><text class=\"svg-text\" x=\"224\" y=\"78\" font-size=\"18\">Relevance dan</text><text class=\"svg-text\" x=\"224\" y=\"102\" font-size=\"18\">reliability (enam</text><text class=\"svg-text\" x=\"224\" y=\"126\" font-size=\"18\">faktor keandalan)</text><rect class=\"svg-title\" x=\"182\" y=\"80.5\" width=\"16\" height=\"3\"/><path class=\"svg-title\" d=\"M195 74 L208 82 L195 90 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"160\" width=\"160\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"190\" font-size=\"19\" font-weight=\"800\">Extent</text><text class=\"svg-text\" x=\"34\" y=\"218\" font-size=\"18\">Item mana,</text><text class=\"svg-text\" x=\"34\" y=\"242\" font-size=\"18\">berapa</text><text class=\"svg-text\" x=\"34\" y=\"266\" font-size=\"18\">banyak?</text><rect class=\"svg-badge-green\" x=\"210\" y=\"160\" width=\"250\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"224\" y=\"190\" font-size=\"19\" font-weight=\"800\">Sufficiency</text><text class=\"svg-text\" x=\"224\" y=\"218\" font-size=\"18\">Ukuran sampel memadai</text><text class=\"svg-text\" x=\"224\" y=\"242\" font-size=\"18\">dan item yang tepat</text><rect class=\"svg-title\" x=\"182\" y=\"220.5\" width=\"16\" height=\"3\"/><path class=\"svg-title\" d=\"M195 214 L208 222 L195 230 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"300\" width=\"160\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"330\" font-size=\"19\" font-weight=\"800\">Timing</text><text class=\"svg-text\" x=\"34\" y=\"358\" font-size=\"18\">Kapan,</text><text class=\"svg-text\" x=\"34\" y=\"382\" font-size=\"18\">periode mana?</text><rect class=\"svg-badge-amber\" x=\"210\" y=\"300\" width=\"250\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"224\" y=\"330\" font-size=\"19\" font-weight=\"800\">Timeliness</text><text class=\"svg-text\" x=\"224\" y=\"358\" font-size=\"18\">Waktu prosedur dan</text><text class=\"svg-text\" x=\"224\" y=\"382\" font-size=\"18\">bagian periode yang</text><text class=\"svg-text\" x=\"224\" y=\"406\" font-size=\"18\">tercakup</text><rect class=\"svg-title\" x=\"182\" y=\"360.5\" width=\"16\" height=\"3\"/><path class=\"svg-title\" d=\"M195 354 L208 362 L195 370 Z\"/><rect class=\"svg-title\" x=\"238.5\" y=\"426\" width=\"3\" height=\"16\"/><path class=\"svg-title\" d=\"M232 439 L240 452 L248 439 Z\"/><rect class=\"svg-subcard\" x=\"20\" y=\"454\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"484\" font-size=\"19\" font-weight=\"800\">Persuasiveness bukti</text><text class=\"svg-text\" x=\"34\" y=\"512\" font-size=\"18\">Ketiga kualitas dinilai bersama, dalam</text><text class=\"svg-text\" x=\"34\" y=\"536\" font-size=\"18\">konteks risiko salah saji material untuk</text><text class=\"svg-text\" x=\"34\" y=\"560\" font-size=\"18\">asersi itu</text></svg>",
          "overview": {
            "heading": "Tiga keputusan bukti dan kualitas persuasiveness",
            "cards": [
              {
                "title": "Nature → Appropriateness",
                "subtitle": "",
                "items": [
                  "Prosedur apa yang dipakai",
                  "Relevance dan reliability (enam faktor keandalan)"
                ],
                "takeaway": "Menyangkut kualitas bukti."
              },
              {
                "title": "Extent → Sufficiency",
                "subtitle": "",
                "items": [
                  "Item mana dan berapa banyak",
                  "Ukuran sampel memadai, item tepat"
                ],
                "takeaway": "Menyangkut kuantitas bukti."
              },
              {
                "title": "Timing → Timeliness",
                "subtitle": "",
                "items": [
                  "Kapan prosedur dilakukan",
                  "Bagian periode yang tercakup"
                ],
                "takeaway": "Akun neraca: dekat tanggal neraca. Akun laba rugi: seluruh periode."
              },
              {
                "title": "Persuasiveness bukti",
                "subtitle": "",
                "items": [
                  "Dinilai bersama dalam konteks risiko salah saji material"
                ],
                "takeaway": "Satu kualitas yang lemah melemahkan keseluruhan."
              }
            ]
          },
          "caption": "Gambar 10.1: Tiga keputusan bukti dan kualitas bukti yang ditentukannya. Disusun dari Table 5-1 (ARENS p.133) dan ISA500 paras. 6–7, A8–A9.",
          "altText": "Nature menentukan appropriateness (relevance dan reliability), extent menentukan sufficiency, timing menentukan timeliness. Ketiganya dinilai bersama sebagai persuasiveness bukti."
        },
        {
          "kind": "p",
          "text": "Buku membuka bab dengan Peregrine Financial Group, pialang berjangka di Amerika Serikat. Regulator menemukan sekitar 215 juta dolar AS dana nasabah hilang. CEO-nya mengaku memalsukan laporan bank dengan komputer, pemindai, dan Photoshop, dan hanya dia yang boleh membuka surat dari bank. Auditor biasanya meminta konfirmasi saldo langsung ke bank. Di sini CEO memberi auditor dan regulator alamat kotak pos yang ia kendalikan sendiri. Dari Juni 2008 sampai Juli 2012 ia memindahkan sekitar 36 juta dolar AS dari rekening dana nasabah ke pihak yang bukan nasabah, dan akhirnya dihukum 50 tahun penjara. `(ARENS pp.126–127)`"
        },
        {
          "kind": "p",
          "text": "Pelajarannya: konfirmasi termasuk bukti yang sangat andal, tetapi hanya bila auditor mengendalikan seluruh prosesnya. Begitu klien memegang alamat, surat, atau jawabannya, keandalan itu hilang. `(ARENS p.138)`"
        },
        {
          "kind": "p",
          "text": "**Audit evidence** adalah informasi yang dipakai auditor untuk sampai pada kesimpulan yang mendasari opini. Isinya mencakup informasi dalam catatan akuntansi dan informasi dari sumber lain. `(ISA500 para. 5(c))` Buku menambahkan tiga hal. Bukti bisa berasal dari auditor, pihak ketiga, dan klien. Bukti mencakup informasi yang mendukung maupun yang bertentangan dengan asersi manajemen. Ketiadaan informasi juga bukti, misalnya manajemen menolak memberi dokumen yang diminta. Menimbang semuanya secara kritis adalah inti skeptisisme profesional. `(ARENS p.127)`"
        },
        {
          "kind": "h3",
          "text": "Kesalahpahaman umum"
        },
        {
          "kind": "table",
          "title": "Kesalahpahaman umum tentang bukti audit dan prosedur analitis",
          "headers": [
            "Anggapan yang keliru",
            "Yang benar",
            "Sumber"
          ],
          "rows": [
            [
              "\"Makin banyak bukti, makin kuat kesimpulan.\"",
              "Kuantitas dan kualitas saling terkait. Bukti yang lebih banyak tidak menambal kualitas yang buruk.",
              "ISA500 para. A8"
            ],
            [
              "\"Bukti dari klien tidak boleh dipercaya.\"",
              "Bukti buatan klien lebih andal bila pengendalian atas pembuatannya efektif.",
              "ARENS p.131; ISA500 para. A35"
            ],
            [
              "\"Inquiry cukup bila jawabannya masuk akal.\"",
              "Inquiry saja biasanya tidak memberi bukti memadai tentang tidak adanya salah saji material atau keefektifan pengendalian.",
              "ISA500 para. A6; ARENS p.139"
            ],
            [
              "\"Konfirmasi pasti andal karena datang dari pihak luar.\"",
              "Konfirmasi andal bila auditor mengendalikan prosesnya. Responden juga bisa lalai, tidak kompeten, atau berelasi dengan klien.",
              "ARENS pp.136–138"
            ],
            [
              "\"Prosedur analitis hanya dipakai di awal audit.\"",
              "Prosedur analitis dipakai di perencanaan, respons risiko, dan penyelesaian audit.",
              "ARENS p.144; ISA520 para. 6"
            ],
            [
              "\"Rasio yang janggal berarti pasti ada salah saji.\"",
              "Selisih besar yang tak terduga hanya memicu penyelidikan. Penyebabnya bisa peristiwa ekonomi yang sah.",
              "ARENS p.139; ISA520 para. 7"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "section",
      "title": "1. Bukti di setiap fase audit",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** bukti dikumpulkan sejak menerima klien sampai memilih jenis opini. Tujuan tiap fase berbeda, jadi prosedurnya berbeda."
        },
        {
          "kind": "p",
          "text": "Buku merangkum alurnya di Figure 5-1: bukti dipakai untuk menerima atau melanjutkan klien, merencanakan audit, menilai risiko salah saji material, menjalankan respons risiko, dan menentukan jenis laporan. Sebagian besar bukti diperoleh lewat prosedur audit. `(ARENS p.128)`"
        },
        {
          "kind": "table",
          "title": "Bukti audit di setiap fase (ringkasan Figure 5-1)",
          "headers": [
            "Fase",
            "Tujuan utama",
            "Contoh prosedur"
          ],
          "rows": [
            [
              "Penerimaan klien",
              "Menilai engagement risk, integritas klien, serta kompetensi dan independensi auditor",
              "Inquiry ke pihak di dalam dan di luar entitas; inquiry ke auditor pendahulu; analisis ancaman independensi; surat penugasan"
            ],
            [
              "Penilaian risiko dan penyusunan respons",
              "Memahami entitas, kebijakan akuntansi, dan pengendalian; menetapkan materialitas; menilai risiko salah saji material; menyusun strategi, rencana, dan program audit",
              "Mengamati operasi; inquiry ke staf; inspeksi manual dan dokumen; analytical review menyeluruh; flowchart dan walk-through"
            ],
            [
              "Pelaksanaan respons risiko",
              "Menguji pengendalian yang akan diandalkan dan mendeteksi salah saji dalam data keuangan",
              "Tests of controls (inquiry, observasi, reperformance); tests of details (inquiry, inspeksi, recalculation, konfirmasi); prosedur analitis substantif"
            ],
            [
              "Kesimpulan dan pelaporan",
              "Memastikan bukti cukup dan tepat, lalu menentukan jenis opini",
              "Subsequent events review; final analytical review; merangkum salah saji; memeriksa persetujuan dewan atas laporan keuangan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.128)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Tiga keputusan bukti",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** untuk tiap tujuan audit, auditor memutuskan prosedur apa yang dipakai (nature), item mana yang diuji (extent), dan kapan prosedur dijalankan (timing)."
        },
        {
          "kind": "p",
          "text": "**Audit procedure** adalah instruksi rinci tentang bukti yang harus diperoleh pada satu titik dalam audit. Bukti datang dari banyak sumber: perhitungan fisik persediaan, pencocokan cek yang sudah dibatalkan dengan catatan pengeluaran kas, jurnal, dan dokumen pengiriman. `(ARENS p.129)`"
        },
        {
          "kind": "table",
          "title": "Tiga keputusan bukti: nature, extent, timing",
          "headers": [
            "Keputusan",
            "Pertanyaan",
            "Pilihan atau isi",
            "Kualitas bukti yang terkait"
          ],
          "rows": [
            [
              "Nature",
              "Prosedur apa?",
              "Tujuan: risk assessment, test of controls, atau substantive procedure. Jenis: inspeksi, observasi, inquiry, konfirmasi, recalculation, reperformance, prosedur analitis",
              "Appropriateness"
            ],
            [
              "Extent",
              "Item mana dan berapa banyak?",
              "Semua item, item tertentu, audit sampling, atau kombinasinya",
              "Sufficiency"
            ],
            [
              "Timing",
              "Kapan, untuk periode mana?",
              "Dari awal periode sampai lama setelah akhir periode",
              "Timeliness"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.128–129)`"
        },
        {
          "kind": "p",
          "text": "Prosedur yang baik menjawab empat pertanyaan: asersi atau pengendalian mana yang diuji (alasan), kapan dilakukan, bagaimana langkahnya, dan item apa yang dipilih. Buku memberi contoh prosedur substantif untuk pengeluaran kas: untuk menguji occurrence, pada audit interim, ambil laporan pengeluaran kas, lalu bandingkan nama penerima, jumlah, dan tanggal pada cek yang sudah dibatalkan dengan laporan itu untuk sampel acak 40 nomor cek. `(ARENS pp.129–130)`"
        },
        {
          "kind": "p",
          "text": "**Memilih item.** Setelah prosedur ditentukan, auditor dapat (1) memilih semua item, (2) memilih item tertentu, (3) memakai audit sampling, atau (4) mengombinasikan ketiganya. Pilihannya bergantung pada tujuan uji, keadaan (misalnya sejauh mana pengendalian otomatis dan seberapa besar risiko salah saji), serta kepraktisan dan efisiensi. `(ARENS p.129; ISA500 para. 10)`"
        },
        {
          "kind": "p",
          "text": "Contoh buku: populasi 6.600 cek dan auditor memutuskan menguji 40. Ia bisa memilih 40 cek bernilai terbesar (key items) atau yang paling mungkin salah, memilih 40 cek secara acak, atau mengombinasikan keduanya. `(ARENS p.129)`"
        },
        {
          "kind": "p",
          "text": "**Waktu.** Audit biasanya selesai satu sampai tiga bulan setelah akhir tahun. Tenggat klien ikut menentukan, misalnya perusahaan publik di buku wajib menyampaikan laporan keuangan teraudit dalam 90 hari setelah akhir tahun. Kapan bukti paling efektif juga menentukan. Bila klien memakai sistem persediaan periodik dan menghitung persediaan di akhir tahun, auditor sebaiknya mengamati perhitungan itu di akhir tahun. Ketersediaan staf audit ikut dipertimbangkan. `(ARENS p.129)`"
        },
        {
          "kind": "p",
          "text": "**Audit program** adalah kumpulan instruksi rinci untuk seluruh pengumpulan bukti di satu area audit. Isinya selalu prosedur, dan bisa juga ukuran sampel, item yang dipilih, serta waktu uji. Biasanya ada satu program untuk tiap komponen audit, misalnya piutang usaha dan penjualan. Buku menunjuk contoh kutipan program di Table 10-2 (p.347), yang akan kamu temui lagi di TM15. `(ARENS p.130)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Soal sering memberi prosedur yang kabur, seperti \"periksa pengeluaran kas\". Perbaikilah dengan empat unsur: asersi yang diuji, waktu, langkah, dan item yang dipilih. Prosedur tanpa unsur itu tidak bisa dijalankan staf dengan seragam."
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Persuasiveness: appropriateness, sufficiency, timeliness",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** bukti meyakinkan bila tepat (relevan dan andal), cukup, dan tepat waktu. Ketiganya dinilai bersama, dalam konteks risiko salah saji material untuk asersi itu."
        },
        {
          "kind": "p",
          "text": "**Persuasiveness** adalah tingkat keyakinan auditor bahwa bukti mendukung opini. Penentunya: appropriateness (relevance dan reliability), sufficiency, dan timeliness. `(ARENS p.130)`"
        },
        {
          "kind": "table",
          "title": "Hubungan keputusan bukti dan kualitas bukti (Table 5-1)",
          "headers": [
            "Keputusan bukti",
            "Kualitas",
            "Unsur penentu"
          ],
          "rows": [
            [
              "Nature",
              "Appropriateness",
              "Relevance; reliability (diperoleh langsung oleh auditor, independensi sumber, kualifikasi sumber, konsistensi, keefektifan pengendalian internal, objektivitas)"
            ],
            [
              "Extent",
              "Sufficiency",
              "Ukuran sampel memadai; pemilihan item populasi yang tepat"
            ],
            [
              "Timing",
              "Timeliness",
              "Kapan prosedur dilakukan; bagian periode yang tercakup"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.133)`"
        },
        {
          "kind": "h3",
          "text": "Appropriateness: relevance"
        },
        {
          "kind": "p",
          "text": "**Relevance** adalah hubungan logis antara prosedur dan asersi yang diuji. Contoh buku: auditor khawatir klien tidak menagih sebagian pengiriman (completeness). Kalau auditor mengambil sampel faktur penjualan lalu menelusurinya ke dokumen pengiriman, buktinya tidak relevan untuk completeness karena yang diuji adalah occurrence. Prosedur yang relevan adalah mengambil sampel dokumen pengiriman lalu mencocokkannya dengan faktur penjualan, supaya terlihat apakah tiap pengiriman sudah ditagih. `(ARENS p.130)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Relevansi bergantung pada arah pengujian. ISA memberi contoh utang usaha: untuk menguji overstatement, menguji utang yang tercatat relevan. Untuk menguji understatement, menguji utang yang tercatat tidak relevan. Auditor perlu melihat pembayaran sesudah tanggal neraca, faktur yang belum dibayar, laporan pemasok, dan laporan penerimaan yang belum dicocokkan. `(ISA500 para. A31)`"
        },
        {
          "kind": "h3",
          "text": "Appropriateness: reliability"
        },
        {
          "kind": "p",
          "text": "**Reliability** adalah derajat bukti bisa dipercaya. Ia dipengaruhi sumber dan sifat bukti serta keadaan saat bukti diperoleh. Buku menyebut enam faktor. `(ARENS pp.130–131)`"
        },
        {
          "kind": "table",
          "title": "Enam faktor keandalan bukti",
          "headers": [
            "Faktor",
            "Aturan umum",
            "Contoh dari buku"
          ],
          "rows": [
            [
              "1. Diperoleh langsung oleh auditor",
              "Observasi, reperformance, dan inspeksi lebih andal daripada informasi tidak langsung",
              "Auditor mencatat penambahan PP&E, nomor seri, dan biaya perolehan dari faktur asli. Ini lebih andal daripada dokumen dan hitungan dari controller klien"
            ],
            [
              "2. Independensi sumber",
              "Sumber di luar entitas lebih andal bila berjarak (arm's length)",
              "Polis asuransi (eksternal) lebih andal daripada purchase requisition (internal)"
            ],
            [
              "3. Kualifikasi sumber",
              "Sumber independen pun harus kompeten",
              "Auditor yang tidak bisa membedakan berlian dari kaca tidak menghasilkan bukti andal tentang berlian"
            ],
            [
              "4. Konsistensi dari banyak sumber",
              "Bukti yang konsisten antarsumber lebih andal",
              "Di Hillsburg, staf pengiriman bilang tidak ada stok lama, tetapi auditor melihat kardus berdebu. Selisih ini harus diselidiki"
            ],
            [
              "5. Keefektifan pengendalian internal",
              "Bukti buatan klien lebih andal bila pengendalian efektif; auditor juga menimbang risiko management override dan integritas manajemen",
              "Faktur penjualan dan dokumen pengiriman lebih akurat dan lengkap bila pengendalian penjualan efektif"
            ],
            [
              "6. Objektivitas",
              "Bukti objektif lebih andal daripada bukti yang menuntut banyak pertimbangan",
              "Objektif: konfirmasi piutang dan saldo bank, hitung fisik surat berharga dan kas, footing daftar utang. Subjektif: pendapat pengacara klien tentang hasil gugatan, pengamatan keusangan persediaan, jawaban kepala kredit tentang tertagihnya piutang"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.131)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** ISA 500 menambahkan beberapa generalisasi: dokumen asli lebih andal daripada fotokopi atau hasil digitalisasi, dan dokumen tertulis lebih andal daripada penjelasan lisan. Standar mengingatkan bahwa generalisasi ini punya pengecualian penting. Sumber independen pun bisa tidak andal bila tidak berpengetahuan. `(ISA500 para. A35)`"
        },
        {
          "kind": "h3",
          "text": "Sufficiency"
        },
        {
          "kind": "p",
          "text": "**Sufficiency** adalah kuantitas bukti. Untuk satu prosedur, sampel 100 umumnya lebih cukup daripada sampel 50. Untuk prosedur analitis, kecukupan ditentukan oleh tingkat presisi. `(ARENS p.132)`"
        },
        {
          "kind": "p",
          "text": "Dua faktor utama ukuran sampel adalah ekspektasi kesalahan dan keefektifan pengendalian internal klien. Pada audit Lau Computer Parts, kemungkinan persediaan usang tinggi, jadi sampel pengujian keusangan lebih besar. Bila pengendalian atas pencatatan PP&E efektif, sampel pengujian pembelian PP&E boleh lebih kecil karena data sistem lebih andal. Selain ukuran, item yang dipilih juga menentukan: item bernilai besar, item dengan kemungkinan salah tinggi, dan item yang mewakili populasi umumnya dianggap cukup. `(ARENS p.132)`"
        },
        {
          "kind": "p",
          "text": "ISA 500 menjelaskan hubungannya: makin tinggi risiko salah saji yang dinilai, makin banyak bukti dibutuhkan. Makin tinggi kualitas bukti, makin sedikit yang mungkin diperlukan. `(ISA500 para. A8)`"
        },
        {
          "kind": "h3",
          "text": "Timeliness"
        },
        {
          "kind": "p",
          "text": "**Timeliness** menyangkut kapan bukti dikumpulkan dan periode yang dicakupnya. `(ARENS p.132)`"
        },
        {
          "kind": "ul",
          "items": [
            "Akun neraca: bukti lebih meyakinkan bila diperoleh sedekat mungkin dengan tanggal neraca. Hitungan surat berharga pada tanggal neraca lebih meyakinkan daripada hitungan dua bulan sebelumnya, karena kesalahan dalam dua bulan itu tidak terlihat.",
            "Akun laporan laba rugi: saldo akhir merupakan akumulasi transaksi setahun, jadi sampel dari seluruh periode lebih meyakinkan daripada sampel enam bulan pertama."
          ]
        },
        {
          "kind": "h3",
          "text": "Efek gabungan dan biaya"
        },
        {
          "kind": "p",
          "text": "Ketiga kualitas dinilai bersama dalam konteks risiko salah saji material. Sampel besar yang tidak relevan tidak meyakinkan. Sampel besar yang tidak tepat dan tidak tepat waktu juga tidak. Satu atau dua bukti yang tepat dan tepat waktu pun kurang meyakinkan. `(ARENS p.132)`"
        },
        {
          "kind": "p",
          "text": "Auditor juga menimbang biaya. Jarang hanya ada satu jenis bukti untuk memverifikasi suatu informasi, jadi persuasiveness dan biaya semua alternatif dibandingkan sebelum memilih. Tujuannya: bukti yang cukup, tepat waktu, andal, dan relevan dengan biaya wajar. Prosedur otomatis sering memungkinkan pengujian bervolume besar dengan biaya lebih rendah daripada pengujian manual. `(ARENS pp.132–133)`"
        },
        {
          "kind": "callout",
          "variant": "info",
          "text": "**Interpretasi.** Anggap persuasiveness seperti pembuktian di pengadilan: saksi yang jujur tetapi tidak melihat kejadian (tidak relevan), saksi yang melihat tetapi punya kepentingan (kurang andal), atau saksi yang melihat tetapi dua bulan sebelum kejadian (tidak tepat waktu) sama-sama melemahkan kasus. Satu saksi kuat yang konsisten dengan dokumen lebih berguna daripada sepuluh saksi lemah."
        },
        {
          "kind": "pendalaman",
          "title": "Satu asersi, empat prosedur: completeness persediaan (Table 5-3)",
          "blocks": [
            {
              "kind": "p",
              "text": "Buku memakai completeness persediaan untuk menunjukkan bagaimana nature, extent, dan timing menyatu dalam satu rancangan. `(ARENS p.140)`"
            },
            {
              "kind": "table",
              "title": "Rancangan prosedur untuk completeness persediaan (Table 5-3)",
              "headers": [
                "Jenis uji",
                "Jenis prosedur",
                "Prosedur",
                "Item yang dipilih",
                "Waktu dan periode"
              ],
              "rows": [
                [
                  "Test of controls",
                  "Observasi",
                  "Amati personel klien menghitung persediaan: apakah mengikuti instruksi",
                  "100%, semua tim penghitung diamati",
                  "Tanggal neraca; periode tidak berlaku"
                ],
                [
                  "Substantive procedure",
                  "Inspeksi",
                  "Hitung sampel persediaan dan bandingkan kuantitas serta deskripsi dengan hitungan klien",
                  "120 item: 40 bernilai besar dan 80 acak",
                  "Tanggal neraca; seluruh tahun"
                ],
                [
                  "Test of controls dan substantive procedure",
                  "Reperformance",
                  "Bandingkan kuantitas di catatan perpetual klien dengan hasil hitungan klien",
                  "70 item: 30 bernilai besar dan 40 acak",
                  "Tanggal neraca; seluruh tahun"
                ],
                [
                  "Substantive analytical procedure",
                  "Prosedur analitis",
                  "Hitung perputaran persediaan tiap kuartal dan bandingkan dengan tahun sebelumnya",
                  "Data agregat per kuartal",
                  "Tanggal neraca; seluruh tahun"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(ARENS p.140)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Satu prosedur menguji pengendalian, tiga lainnya menguji saldo, dan masing-masing memakai jenis bukti berbeda. Kombinasi ini yang memberi keyakinan memadai atas satu asersi. Perhatikan juga bahwa sampel campuran berisi item bernilai besar (sasaran risiko) dan item acak (mewakili populasi)."
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "4. Tiga kategori dan tujuh jenis prosedur audit",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** kategori menjawab untuk apa prosedur dipakai. Jenis menjawab bagaimana bukti diperoleh. Satu jenis prosedur bisa dipakai di ketiga kategori."
        },
        {
          "kind": "table",
          "title": "Tiga kategori prosedur audit",
          "headers": [
            "Kategori",
            "Tujuan",
            "Jenis yang biasa dipakai",
            "Contoh"
          ],
          "rows": [
            [
              "Risk assessment procedures",
              "Memahami entitas dan pengendalian, lalu menilai risiko salah saji material. Hasilnya tidak cukup sebagai dasar opini",
              "Inquiry, prosedur analitis, inspeksi, observasi",
              "Meninjau rencana strategis klien (inspeksi)"
            ],
            [
              "Tests of controls",
              "Menguji apakah pengendalian beroperasi efektif. Fokusnya proses",
              "Inquiry, observasi, reperformance",
              "Mengamati kasir dan memastikan mesin kas tidak terbuka sebelum ada penjualan"
            ],
            [
              "Substantive procedures",
              "Mendeteksi salah saji moneter pada transaksi dan saldo. Fokusnya asersi. Terdiri dari tests of details dan prosedur analitis",
              "Konfirmasi, inspeksi, recalculation, prosedur analitis, inquiry",
              "Mengonfirmasi sampel saldo piutang ke pelanggan"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.134–135; ISA500 paras. A14, A15)`"
        },
        {
          "kind": "p",
          "text": "ISA 500 menyebut tujuh jenis prosedur yang bisa dipakai di ketiga kategori: inspeksi, observasi, konfirmasi eksternal, recalculation, reperformance, prosedur analitis, dan inquiry. `(ISA500 para. A6)` Bagian berikut membahas satu per satu, kecuali prosedur analitis yang punya bagian sendiri."
        },
        {
          "kind": "h3",
          "text": "1. Inspeksi"
        },
        {
          "kind": "p",
          "text": "Inspeksi berarti memeriksa catatan atau dokumen, internal maupun eksternal, atau memeriksa aset secara fisik. `(ISA500 para. A18)`"
        },
        {
          "kind": "p",
          "text": "**Aset berwujud.** Inspeksi adalah cara langsung memverifikasi bahwa aset ada (existence) dan termasuk bukti yang paling andal. Ia objektif untuk jumlah dan deskripsi aset. Valuation biasanya tidak bisa dinilai lewat inspeksi, karena auditor umumnya tidak punya kualifikasi menilai keusangan atau keaslian. Rights and obligations juga tidak terbukti: aset bisa berada di tangan klien tetapi berstatus konsinyasi. `(ARENS p.135; ISA500 para. A20)`"
        },
        {
          "kind": "p",
          "text": "**Dokumen.** Hampir tiap transaksi didukung dokumen atau berkas elektronik, jadi bukti jenis ini melimpah dan murah. `(ARENS p.135)`"
        },
        {
          "kind": "table",
          "title": "Dokumen internal dan dokumen eksternal",
          "headers": [
            "Jenis dokumen",
            "Arti",
            "Contoh",
            "Keandalan"
          ],
          "rows": [
            [
              "Internal",
              "Dibuat dan dipakai di dalam klien, tidak pernah keluar ke pihak luar",
              "Salinan faktur penjualan, laporan jam kerja karyawan, exception report, laporan penerimaan persediaan",
              "Bergantung pada pengendalian saat dokumen dibuat dan diproses. Pengendalian lemah membuka peluang kesalahan atau perubahan sengaja"
            ],
            [
              "Eksternal",
              "Pernah dipegang pihak luar yang menjadi pihak dalam transaksi, lalu ada di klien atau mudah diminta",
              "Faktur vendor, wesel bayar yang sudah dilunasi, polis asuransi. Cek yang sudah dicairkan berasal dari klien, pergi ke pihak luar, lalu kembali",
              "Umumnya lebih andal karena kedua pihak tampak sepakat. Sebagian sangat andal karena disusun cermat dan ditinjau ahli hukum, seperti akta tanah, polis, perjanjian obligasi, dan kontrak"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.135–136)`"
        },
        {
          "kind": "p",
          "text": "**Vouching dan tracing** adalah dua arah memakai dokumen. `(ARENS p.136)`"
        },
        {
          "kind": "table",
          "title": "Perbandingan vouching dan tracing",
          "headers": [
            "Prosedur",
            "Arah",
            "Menguji",
            "Contoh dari buku"
          ],
          "rows": [
            [
              "Vouching",
              "Dari catatan akuntansi ke dokumen pendukung",
              "Occurrence",
              "Mencocokkan entri jurnal pembelian dengan faktur vendor dan laporan penerimaan"
            ],
            [
              "Tracing",
              "Dari dokumen ke catatan akuntansi",
              "Completeness",
              "Menelusuri laporan penerimaan ke jurnal pembelian"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Menelusuri dari laporan penerimaan ke jurnal pembelian untuk menguji completeness tidak disebut vouching. Namanya tracing. Soal sering menguji apakah kamu memilih arah yang sesuai asersi."
        },
        {
          "kind": "p",
          "text": "Banyak dokumen hanya ada dalam bentuk elektronik, misalnya transaksi EDI atau dokumen hasil pemindaian. Pada EDI, asersi yang paling terpengaruh adalah completeness dan accuracy. Auditor juga menilai otorisasi transaksi, sehingga perlu menguji pengendalian otomatis. Pada sistem pemindaian dokumen, auditor menilai kekuatan bukti elektronik dari pengendalian atas perubahan dokumen. `(ARENS p.136; ISA500 para. A16)`"
        },
        {
          "kind": "h3",
          "text": "2. Observasi"
        },
        {
          "kind": "p",
          "text": "Observasi berarti melihat proses atau prosedur yang dikerjakan orang lain, misalnya auditor mengamati perhitungan persediaan oleh karyawan klien atau pelaksanaan suatu pengendalian. Bukti ini terbatas pada saat observasi berlangsung, dan keberadaan auditor bisa mengubah cara orang bekerja. Karena itu observasi jarang cukup sendirian dan perlu bukti penguat. `(ARENS p.136; ISA500 para. A21)`"
        },
        {
          "kind": "h3",
          "text": "3. Konfirmasi eksternal"
        },
        {
          "kind": "p",
          "text": "**External confirmation** adalah jawaban tertulis (atau lisan, yang harus ditindaklanjuti dengan ringkasan tertulis) dari pihak ketiga independen atas informasi yang diminta auditor. Permintaan lewat klien, tetapi jawaban dikirim langsung ke auditor. `(ARENS p.136; ISA500 para. A22)`"
        },
        {
          "kind": "p",
          "text": "Buku menyebut kelemahan konfirmasi: responden bisa lalai atau tidak kompeten, tidak memegang informasi yang benar, atau pihak berelasi. Konfirmasi itu sendiri juga bisa palsu. Keandalannya bergantung pada kendali auditor atas permintaan dan jawaban, ciri responden, pembatasan yang disisipkan atau dipaksakan manajemen, kerumitan hal yang dikonfirmasi, dan hubungan responden dengan entitas. `(ARENS pp.136–138)`"
        },
        {
          "kind": "p",
          "text": "Konfirmasi dipakai kecuali auditor punya bukti alternatif berkualitas tinggi atau menduga jawabannya tidak akan andal. Penambahan aset tetap jarang dikonfirmasi karena bisa diverifikasi memadai lewat dokumen dan pemeriksaan fisik. `(ARENS pp.136–137)`"
        },
        {
          "kind": "table",
          "title": "Informasi yang sering dikonfirmasi dan sumbernya (Table 5-2)",
          "headers": [
            "Kelompok",
            "Informasi dan sumber konfirmasi"
          ],
          "rows": [
            [
              "Aset",
              "Kas di bank: bank. Piutang usaha: pelanggan. Wesel tagih: pihak pembuat wesel. Persediaan milik klien yang dititipkan: consignee. Persediaan di gudang umum: gudang umum. Nilai tunai polis asuransi jiwa: perusahaan asuransi"
            ],
            [
              "Liabilitas",
              "Utang usaha: kreditur. Wesel bayar: pemberi pinjaman. Uang muka pelanggan: pelanggan. Utang hipotek: mortgagor (istilah buku). Utang obligasi: pemegang obligasi"
            ],
            [
              "Ekuitas",
              "Saham beredar: registrar dan transfer agent"
            ],
            [
              "Informasi lain",
              "Pertanggungan asuransi: perusahaan asuransi. Kewajiban kontinjen: firma hukum klien, bank, dan pihak lain. Perjanjian obligasi: pemegang obligasi. Agunan yang dipegang kreditur: kreditur"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.137)`"
        },
        {
          "kind": "pendalaman",
          "title": "Auditing in Action 5-1: konfirmasi palsu dan konfirmasi elektronik",
          "blocks": [
            {
              "kind": "p",
              "text": "Konfirmasi kertas mahal, dan yang lebih mengkhawatirkan, konfirmasinya bisa palsu. Tiga kasus besar yang melibatkan konfirmasi palsu: Parmalat (4,9 miliar dolar AS), Satyam (1 miliar dolar AS), dan Royal Ahold (5,1 miliar dolar AS). `(ARENS p.137)`"
            },
            {
              "kind": "p",
              "text": "Buku menyebut layanan konfirmasi elektronik berbasis cloud (Confirmation.com) sebagai jawaban. Layanan ini mengirim konfirmasi ke responden yang sudah diautentikasi, mencakup konfirmasi piutang, utang, dan bank. Manfaatnya: identitas divalidasi, kesalahan berkurang, risiko penyadapan dan waktu respons turun (biasanya dua hari). Firma kecil diuntungkan karena tugas administratifnya berkurang. `(ARENS p.137)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Teknologi mengurangi biaya dan risiko pemalsuan, tetapi prinsipnya sama dengan Peregrine di bagian 0: auditor harus mengendalikan jalur permintaan dan jawaban dari awal sampai akhir."
            }
          ]
        },
        {
          "kind": "h3",
          "text": "4. Recalculation dan 5. Reperformance"
        },
        {
          "kind": "table",
          "title": "Perbandingan recalculation dan reperformance",
          "headers": [
            "Aspek",
            "Recalculation",
            "Reperformance"
          ],
          "rows": [
            [
              "Arti",
              "Memeriksa ulang ketepatan hitungan yang dibuat klien",
              "Mengerjakan ulang secara independen prosedur atau pengendalian klien selain hitungan"
            ],
            [
              "Contoh",
              "Mengalikan harga dan kuantitas pada faktur, menjumlah berkas data dan buku pembantu, memeriksa beban amortisasi dan biaya dibayar di muka",
              "Membandingkan harga pada faktur dengan daftar harga yang disetujui; memeriksa ulang bank reconciliation; memeriksa pemindahan informasi, yaitu angka yang sama di beberapa tempat harus tercatat sama"
            ],
            [
              "Alat",
              "Sering memakai spreadsheet atau audit software",
              "Biaya bergantung pada prosedur. Membandingkan faktur dengan daftar harga murah, mengerjakan ulang bank reconciliation memakan waktu"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.138, 142; ISA500 paras. A23, A24)`"
        },
        {
          "kind": "h3",
          "text": "6. Inquiry"
        },
        {
          "kind": "p",
          "text": "**Inquiry** adalah memperoleh informasi tertulis atau lisan dari pihak yang berpengetahuan, di dalam maupun di luar entitas, sebagai jawaban atas pertanyaan auditor. Ia dipakai di setiap audit. Namun inquiry tidak bisa dianggap konklusif karena bukan dari sumber independen dan bisa berpihak pada klien. Auditor perlu bukti penguat dari prosedur lain. `(ARENS p.139; ISA500 paras. A26, A27)`"
        },
        {
          "kind": "p",
          "text": "Contoh buku: untuk memahami pengendalian, auditor lebih dulu bertanya bagaimana pengendalian bekerja, lalu menguatkannya dengan walk-through dan tests of controls. `(ARENS p.139)` Untuk pertanyaan tentang niat manajemen, bukti pendukung terbatas. Auditor melihat rekam jejak manajemen menjalankan niat yang dinyatakannya, alasan yang dikemukakan, dan kemampuannya melaksanakan pilihan itu. `(ISA500 para. A28)`"
        },
        {
          "kind": "h3",
          "text": "Alat otomatis"
        },
        {
          "kind": "p",
          "text": "Auditor memakai software untuk recalculation, reperformance (terutama memeriksa posting dan peringkasan), prosedur analitis, dan memilih sampel representatif. Contohnya spreadsheet dan generalized audit software (GAS) seperti AuditBond (dulu ACL) dan IDEA. Dengan salinan berkas data klien, auditor dapat menjalankan empat fungsi: perhitungan matematis, aging (misalnya membuat ulang aging piutang), perbandingan (misalnya saldo dengan batas kredit), dan sampling (acak, dollar-unit, interval, atau stratifikasi). Auditor jadi fokus merancang kriteria uji dan menafsirkan hasil. `(ARENS pp.139–140)`"
        },
        {
          "kind": "h3",
          "text": "Keandalan dan biaya tiap jenis prosedur"
        },
        {
          "kind": "table",
          "title": "Keandalan tiap jenis prosedur (Table 5-4)",
          "headers": [
            "Jenis prosedur",
            "Independensi penyedia",
            "Keefektifan pengendalian klien",
            "Pengetahuan langsung auditor",
            "Kualifikasi penyedia",
            "Objektivitas"
          ],
          "rows": [
            [
              "Inspeksi fisik",
              "Tinggi (auditor melakukan)",
              "Bervariasi",
              "Tinggi",
              "Biasanya tinggi",
              "Tinggi"
            ],
            [
              "Inspeksi dokumen",
              "Bervariasi: dokumen eksternal lebih independen daripada internal",
              "Bervariasi",
              "Rendah",
              "Bervariasi",
              "Tinggi"
            ],
            [
              "Observasi",
              "Tinggi (auditor melakukan)",
              "Bervariasi",
              "Tinggi",
              "Biasanya tinggi",
              "Sedang"
            ],
            [
              "Inquiry kepada klien",
              "Rendah (klien memberi jawaban)",
              "Tidak berlaku",
              "Rendah",
              "Bervariasi",
              "Bervariasi, rendah sampai tinggi"
            ],
            [
              "Konfirmasi eksternal",
              "Tinggi",
              "Tidak berlaku",
              "Rendah",
              "Bervariasi, biasanya tinggi",
              "Tinggi"
            ],
            [
              "Recalculation",
              "Tinggi (auditor melakukan)",
              "Bervariasi",
              "Tinggi",
              "Tinggi",
              "Tinggi"
            ],
            [
              "Reperformance",
              "Tinggi (auditor melakukan)",
              "Bervariasi",
              "Tinggi",
              "Tinggi",
              "Tinggi"
            ],
            [
              "Prosedur analitis",
              "Tinggi atau rendah (auditor menghitung, klien menjawab)",
              "Bervariasi",
              "Rendah",
              "Biasanya tinggi",
              "Bervariasi, bergantung pada keandalan data"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.141)`"
        },
        {
          "kind": "p",
          "text": "Buku menarik tiga pengamatan dari tabel ini. `(ARENS p.141)`"
        },
        {
          "kind": "ul",
          "items": [
            "Keefektifan pengendalian klien sangat memengaruhi keandalan sebagian besar jenis bukti. Prosedur analitis tidak memadai bila pengendalian yang menghasilkan datanya memberi informasi yang keliru.",
            "Inspeksi fisik dan reperformance sama-sama sangat andal bila pengendalian efektif, tetapi penggunaannya berbeda. Dua jenis bukti yang sangat berbeda bisa sama andalnya.",
            "Inquiry saja biasanya tidak cukup untuk memenuhi tujuan audit apa pun."
          ]
        },
        {
          "kind": "figure",
          "title": "Biaya relatif tujuh jenis prosedur audit",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 492\" width=\"100%\" role=\"img\" aria-labelledby=\"f10-biaya-t f10-biaya-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f10-biaya-t\">Biaya relatif jenis prosedur audit</title><desc id=\"f10-biaya-d\">Tiga kartu bertingkat dari paling mahal ke paling murah dengan jenis prosedur di tiap kelompok.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"492\" rx=\"14\"/><rect class=\"svg-badge-red\" x=\"20\" y=\"20\" width=\"440\" height=\"148\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Paling mahal</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Inspeksi fisik dan konfirmasi eksternal</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">Auditor hadir saat penghitungan.</text><text class=\"svg-text\" x=\"34\" y=\"126\" font-size=\"18\">Konfirmasi perlu persiapan, pengiriman,</text><text class=\"svg-text\" x=\"34\" y=\"150\" font-size=\"18\">dan tindak lanjut.</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"184\" width=\"440\" height=\"148\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"214\" font-size=\"19\" font-weight=\"800\">Sedang</text><text class=\"svg-text\" x=\"34\" y=\"242\" font-size=\"18\">Inspeksi dokumen, reperformance,</text><text class=\"svg-text\" x=\"34\" y=\"266\" font-size=\"18\">prosedur analitis</text><text class=\"svg-text\" x=\"34\" y=\"290\" font-size=\"18\">Bergantung pada siapa yang menyiapkan</text><text class=\"svg-text\" x=\"34\" y=\"314\" font-size=\"18\">berkas dan seberapa rumit prosedurnya.</text><rect class=\"svg-badge-green\" x=\"20\" y=\"348\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"378\" font-size=\"19\" font-weight=\"800\">Paling murah</text><text class=\"svg-text\" x=\"34\" y=\"406\" font-size=\"18\">Observasi, inquiry, recalculation</text><text class=\"svg-text\" x=\"34\" y=\"430\" font-size=\"18\">Biasanya dikerjakan bersama prosedur</text><text class=\"svg-text\" x=\"34\" y=\"454\" font-size=\"18\">lain atau dibantu software.</text></svg>",
          "overview": {
            "heading": "Biaya relatif jenis prosedur audit",
            "cards": [
              {
                "title": "Paling mahal",
                "subtitle": "",
                "items": [
                  "Inspeksi fisik",
                  "Konfirmasi eksternal"
                ],
                "takeaway": "Perlu kehadiran auditor atau proses panjang."
              },
              {
                "title": "Sedang",
                "subtitle": "",
                "items": [
                  "Inspeksi dokumen",
                  "Reperformance",
                  "Prosedur analitis"
                ],
                "takeaway": "Biaya naik bila auditor mencari berkas sendiri atau prosedurnya rumit."
              },
              {
                "title": "Paling murah",
                "subtitle": "",
                "items": [
                  "Observasi",
                  "Inquiry",
                  "Recalculation"
                ],
                "takeaway": "Recalculation makin murah dengan software."
              }
            ],
            "footer": "Sumber: ARENS pp.141–142."
          },
          "caption": "Gambar 10.2: Biaya relatif jenis prosedur audit dalam tiga kelompok. Disusun dari ARENS pp.141–142.",
          "altText": "Tiga kelompok biaya. Paling mahal: inspeksi fisik dan konfirmasi eksternal. Sedang: inspeksi dokumen, reperformance, dan prosedur analitis. Paling murah: observasi, inquiry, dan recalculation."
        },
        {
          "kind": "p",
          "text": "Soal biaya, buku membaginya dalam tiga kelompok. `(ARENS pp.141–142)`"
        },
        {
          "kind": "ul",
          "items": [
            "**Paling mahal:** inspeksi fisik, karena auditor biasanya harus hadir saat klien menghitung aset, sering di tanggal neraca dan di banyak lokasi. Konfirmasi, karena perlu persiapan, pengiriman, penerimaan, dan tindak lanjut jawaban yang tidak masuk atau menyimpang.",
            "**Sedang:** inspeksi dokumen (murah bila klien menyiapkan berkas, mahal bila auditor mencari sendiri atau harus membaca kontrak, sewa, dan notulen), reperformance, dan prosedur analitis.",
            "**Paling murah:** observasi (biasanya bersamaan dengan prosedur lain), inquiry, dan recalculation (makin murah bila memakai software atas salinan data klien)."
          ]
        },
        {
          "kind": "p",
          "text": "Karena prosedur analitis jauh lebih murah daripada konfirmasi dan pemeriksaan fisik, auditor lebih suka mengganti sebagian tests of details dengan prosedur analitis bila memungkinkan. Contohnya, menghitung rasio penjualan dan piutang bisa lebih murah daripada mengonfirmasi piutang. Prosedur analitis tetap menuntut waktu untuk memilih prosedur, menghitung, dan mengevaluasi hasil. `(ARENS p.142)`"
        },
        {
          "kind": "pendalaman",
          "title": "Auditing in Action 5-2: drone sebagai alat inspeksi",
          "blocks": [
            {
              "kind": "p",
              "text": "Auditor memakai drone untuk menangkap gambar udara lokasi konstruksi sebagai bukti pemeriksaan fisik tahap penyelesaian proyek, menilai keberadaan tanaman atau ternak di lahan, dan menghitung 100 persen persediaan kendaraan. Auditor tetap perlu jalan keliling secara konvensional untuk memeriksa kondisi persediaan. `(ARENS p.142)`"
            },
            {
              "kind": "p",
              "text": "Menurut PwC UK, inspeksi dengan drone berpotensi 83 persen lebih cepat dan 65 persen lebih murah. Pada audit pertama yang dibantu drone, tim mengambil ratusan gambar timbunan batu bara di pembangkit listrik di Wales dan memakai photogrammetry untuk membuat model 3D, yang membantu menghitung volume timbunan. `(ARENS p.142)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Drone menambah efisiensi untuk existence dan kuantitas. Pemeriksaan kondisi tetap berkaitan dengan valuation dan masih memerlukan penilaian orang di lapangan, sejalan dengan batas inspeksi fisik di atas."
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Istilah dalam instruksi prosedur"
        },
        {
          "kind": "p",
          "text": "Instruksi prosedur sebaiknya cukup jelas untuk menerangkan apa, mengapa, dan bagaimana kepada tim. Table 5-5 memetakan istilah yang lazim ke jenis bukti. `(ARENS p.143)`"
        },
        {
          "kind": "table",
          "title": "Istilah dalam instruksi prosedur audit (Table 5-5)",
          "headers": [
            "Istilah",
            "Arti",
            "Contoh prosedur",
            "Jenis prosedur"
          ],
          "rows": [
            [
              "Examine",
              "Studi cukup rinci atas dokumen atau catatan untuk menentukan fakta tertentu",
              "Memeriksa sampel faktur vendor: apakah barang atau jasa wajar bagi bisnis klien",
              "Inspeksi"
            ],
            [
              "Scan",
              "Pemeriksaan kurang rinci untuk melihat hal tak biasa",
              "Memindai laporan penjualan untuk transaksi besar dan janggal; menjalankan exception report dengan software",
              "Prosedur analitis"
            ],
            [
              "Read",
              "Membaca informasi tertulis untuk fakta yang relevan dan mencatatnya di kertas kerja",
              "Membaca notulen rapat dewan dan merangkum hal yang relevan",
              "Inspeksi"
            ],
            [
              "Compute",
              "Hitungan auditor yang independen dari klien",
              "Menghitung perputaran persediaan dan membandingkannya dengan tahun lalu",
              "Prosedur analitis"
            ],
            [
              "Recompute",
              "Menghitung ulang untuk menguji hitungan klien",
              "Menghitung ulang harga satuan kali unit pada sampel salinan faktur",
              "Recalculation"
            ],
            [
              "Foot",
              "Menjumlah kolom angka untuk melihat apakah totalnya sama dengan total klien",
              "Menjumlah berkas riwayat penjualan dengan software dan membandingkan total dengan buku besar",
              "Recalculation"
            ],
            [
              "Trace",
              "Biasanya terkait dokumentasi atau reperformance; instruksi harus menyebut apa yang ditelusuri, dari mana, dan ke mana",
              "Menelusuri sampel transaksi dari laporan penjualan ke faktur; menelusuri posting ke akun buku besar",
              "Recalculation, reperformance"
            ],
            [
              "Compare",
              "Membandingkan informasi di dua tempat; sebutkan serinci mungkin",
              "Membandingkan harga satuan di faktur dengan master harga yang disetujui manajemen",
              "Reperformance"
            ],
            [
              "Count",
              "Menentukan aset yang ada pada waktu tertentu; hanya untuk pemeriksaan fisik",
              "Menghitung kas kecil di tanggal neraca",
              "Inspeksi"
            ],
            [
              "Observe",
              "Terkait dengan observasi",
              "Mengamati apakah dua tim penghitung persediaan menghitung dan mencatat secara independen",
              "Observasi"
            ],
            [
              "Inquire",
              "Terkait dengan inquiry",
              "Menanyakan kepada manajemen apakah ada persediaan usang di tanggal neraca",
              "Inquiry"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.143–144)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "5. Prosedur analitis: kapan dipakai dan dibandingkan dengan apa",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** prosedur analitis menilai kewajaran angka lewat hubungan yang masuk akal antardata. Nilainya bergantung pada kualitas ekspektasi yang dibuat auditor."
        },
        {
          "kind": "p",
          "text": "**Analytical procedures** adalah evaluasi informasi keuangan lewat analisis hubungan yang masuk akal antara data keuangan dan nonkeuangan. Termasuk di dalamnya penyelidikan atas fluktuasi atau hubungan yang tidak konsisten dengan informasi lain atau menyimpang dari nilai yang diharapkan secara signifikan. `(ISA520 para. 4; ARENS p.143)`"
        },
        {
          "kind": "p",
          "text": "Bentuknya bisa perbandingan sederhana sampai analisis statistik canggih. Standar mencontohkan perbandingan dengan periode lalu, hasil yang diantisipasi entitas (anggaran, prakiraan) atau ekspektasi auditor, dan informasi industri. Hubungan yang dianalisis bisa antarunsur laporan keuangan (misalnya persentase gross margin) atau antara data keuangan dan nonkeuangan (misalnya biaya gaji dibanding jumlah karyawan). `(ISA520 paras. A1–A3)`"
        },
        {
          "kind": "h3",
          "text": "Tiga fase pemakaian"
        },
        {
          "kind": "table",
          "title": "Prosedur analitis di tiga fase audit",
          "headers": [
            "Fase",
            "Status",
            "Tujuan",
            "Catatan"
          ],
          "rows": [
            [
              "Perencanaan",
              "Wajib sebagai bagian prosedur penilaian risiko",
              "Menentukan nature, extent, dan timing prosedur lain; menandai hal yang butuh perhatian khusus",
              "Memakai data agregat tingkat tinggi. Untuk klien tertentu cukup membandingkan neraca saldo belum diaudit dua tahun"
            ],
            [
              "Respons risiko",
              "Boleh dipakai sebagai substantive procedure",
              "Memberi bukti pendukung saldo akun, sering bersama prosedur lain",
              "Ekspektasi dan faktor yang dipertimbangkan harus didokumentasikan, dan keandalan data diperiksa"
            ],
            [
              "Penyelesaian",
              "Wajib",
              "Peninjauan akhir atas laporan keuangan yang sudah diaudit; \"pandangan objektif\" terakhir",
              "Biasanya dilakukan senior partner yang paham bisnis klien saat review akhir berkas"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.144; ISA315 para. 14(b); ISA520 paras. 5, 6)`"
        },
        {
          "kind": "h3",
          "text": "Untuk apa prosedur analitis dipakai"
        },
        {
          "kind": "ul",
          "items": [
            "**Memahami entitas:** angka tahun berjalan yang belum diaudit dibandingkan dengan data tahun lalu yang sudah diaudit atau data industri. Penurunan gross margin dari waktu ke waktu bisa menandakan persaingan meningkat, sehingga valuation persediaan perlu perhatian. `(ARENS p.138)`",
            "**Menilai going concern:** rasio utang jangka panjang terhadap ekuitas yang lebih tinggi dari normal, ditambah rasio laba terhadap total aset yang lebih rendah dari rata-rata, mengisyaratkan risiko kegagalan keuangan yang relatif tinggi. `(ARENS p.138)`",
            "**Menunjuk kemungkinan salah saji:** selisih signifikan yang tak terduga dengan data pembanding disebut **unusual fluctuations**. Selisih ini muncul bila perbedaan signifikan tidak diharapkan tetapi terjadi, atau diharapkan tetapi tidak terjadi. Auditor harus memastikan penyebabnya peristiwa ekonomi yang sah, bukan salah saji. Contoh: rasio allowance terhadap piutang bruto turun sementara perputaran piutang juga turun. Kombinasi ini mengisyaratkan allowance mungkin terlalu rendah. Fungsi ini disebut \"attention directing\". `(ARENS p.139)`",
            "**Memberi bukti saldo akun:** bila hubungan dapat diprediksi dan datanya andal, prosedur analitis substantif bisa menghilangkan kebutuhan tests of details. Pada kasus lain, tests of details tetap dilakukan tetapi sampelnya lebih kecil atau waktunya digeser menjauh dari tanggal neraca. `(ARENS p.139)`"
          ]
        },
        {
          "kind": "p",
          "text": "ISA 520 menambahkan syarat kecocokan. Prosedur analitis substantif umumnya lebih cocok untuk volume transaksi besar yang cenderung dapat diprediksi. Bila pengendalian atas pemrosesan pesanan penjualan lemah, auditor lebih mengandalkan tests of details untuk asersi piutang. `(ISA520 paras. A6, A9)`"
        },
        {
          "kind": "h3",
          "text": "Empat sumber ekspektasi"
        },
        {
          "kind": "p",
          "text": "Auditor membandingkan data klien dengan empat sumber: data industri, data periode lalu yang serupa, hasil yang ditetapkan klien (anggaran), dan hasil yang ditetapkan auditor. `(ARENS p.144)` Prosedur **scan** juga termasuk prosedur analitis, tetapi berbeda: scan mencari butir individual yang janggal di dalam akun, sedangkan prosedur lain memakai informasi agregat. `(ARENS p.144)`"
        },
        {
          "kind": "h3",
          "text": "Pembanding: industri"
        },
        {
          "kind": "p",
          "text": "Contoh Table 5-6: dua rasio klien stabil dari 2019 ke 2020, tetapi posisinya terhadap industri memburuk."
        },
        {
          "kind": "table",
          "title": "Perbandingan klien dengan industri (Table 5-6)",
          "headers": [
            "Rasio",
            "Klien 2020",
            "Klien 2019",
            "Industri 2020",
            "Industri 2019"
          ],
          "rows": [
            [
              "Perputaran persediaan (angka dari buku)",
              "3,4",
              "3,5",
              "3,9",
              "3,4"
            ],
            [
              "Gross margin (persen)",
              "26,3",
              "26,4",
              "27,3",
              "26,2"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.145)`"
        },
        {
          "kind": "p",
          "text": "Pada 2019 klien sedikit lebih baik daripada industri di kedua rasio (selisih 0,1 dan 0,2). Pada 2020 klien lebih rendah: perputaran persediaan kurang 0,5 dan gross margin kurang 1,0 poin. Penyebab yang mungkin menurut buku: pangsa pasar turun, harga tidak kompetitif, biaya abnormal, atau persediaan usang. `(ARENS p.145)`"
        },
        {
          "kind": "p",
          "text": "Manfaat utama pembandingan dengan industri adalah membantu memahami bisnis klien dan memberi indikasi kemungkinan kegagalan keuangan. Kelemahannya: data industri adalah rata-rata luas, sehingga perbandingan baru bermakna bila auditor memperhitungkan ciri khas klien. Buku menyebut Financial Post dan Dun & Bradstreet Canada sebagai penyedia data industri. `(ARENS p.145)`"
        },
        {
          "kind": "h3",
          "text": "Pembanding: periode lalu"
        },
        {
          "kind": "p",
          "text": "Misalkan gross margin 26 sampai 27 persen selama empat tahun, lalu 23 persen tahun ini. Penyebabnya bisa perubahan kondisi ekonomi, tetapi bisa juga salah saji: kesalahan cutoff penjualan atau pembelian, penjualan tidak dicatat, utang usaha terlalu tinggi, atau kesalahan penentuan biaya persediaan. Auditor harus mencari penyebabnya dan mempertimbangkan dampaknya pada pengumpulan bukti. `(ARENS p.145)`"
        },
        {
          "kind": "p",
          "text": "Ada tiga teknik yang lazim. `(ARENS pp.145–146)`"
        },
        {
          "kind": "ul",
          "items": [
            "Membandingkan saldo tahun berjalan dengan tahun lalu, misalnya dengan menaruh kolom neraca saldo tahun lalu di samping tahun ini.",
            "Membandingkan rincian saldo dengan rincian periode lalu, misalnya total bulanan atau rincian pinjaman akhir tahun.",
            "Menghitung rasio atau persentase untuk dibandingkan dengan tahun lalu."
          ]
        },
        {
          "kind": "p",
          "text": "Membandingkan total atau rincian saja punya dua kelemahan. Pertumbuhan atau penurunan aktivitas bisnis tidak diperhitungkan, dan hubungan antardata (misalnya penjualan terhadap HPP) diabaikan. Rasio mengatasi keduanya. `(ARENS p.146)`"
        },
        {
          "kind": "table",
          "title": "Perbandingan internal dan salah saji yang mungkin terdeteksi (Table 5-7)",
          "headers": [
            "Rasio atau perbandingan",
            "Salah saji yang mungkin"
          ],
          "rows": [
            [
              "Perputaran bahan baku perusahaan manufaktur",
              "Salah saji persediaan atau HPP, atau bahan baku usang"
            ],
            [
              "Komisi penjualan dibagi penjualan neto",
              "Salah saji komisi penjualan"
            ],
            [
              "Retur dan potongan penjualan dibagi penjualan bruto",
              "Retur dan potongan salah klasifikasi, atau retur dan potongan setelah akhir tahun tidak dicatat"
            ],
            [
              "Utang pajak penjualan tahun ini dibagi tahun lalu",
              "Utang pajak penjualan tidak diakrual dengan benar di akhir tahun"
            ],
            [
              "Tiap beban manufaktur sebagai persentase total beban manufaktur",
              "Salah saji signifikan beban individual dalam suatu total"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.146)`"
        },
        {
          "kind": "p",
          "text": "Rasio umumnya jatuh ke empat kategori: likuiditas (kemampuan membayar kewajiban jatuh tempo), coverage (sejauh mana utang membiayai operasi), profitabilitas (laba terhadap penjualan, aset, dan pos lain), dan aktivitas (seberapa efektif manajemen memakai aset menghasilkan pendapatan). Dalam audit, rasio dihitung dengan software dari data neraca saldo setiap tahun. `(ARENS p.146)`"
        },
        {
          "kind": "pendalaman",
          "title": "Appendix 5A: rasio keuangan yang sering dipakai auditor",
          "blocks": [
            {
              "kind": "p",
              "text": "Auditor memakai rasio umum saat perencanaan dan peninjauan akhir. Rasio membantu memahami peristiwa terbaru, melihat laporan dari sudut pengguna, dan menunjuk area masalah yang perlu analisis tambahan. `(ARENS p.162)`"
            },
            {
              "kind": "table",
              "title": "Rasio keuangan umum menurut Appendix 5A",
              "headers": [
                "Kelompok",
                "Rasio",
                "Rumus",
                "Catatan untuk auditor"
              ],
              "rows": [
                [
                  "Likuiditas",
                  "Current ratio",
                  "Aset lancar dibagi liabilitas lancar",
                  "Butuh konversi persediaan dan piutang ke kas"
                ],
                [
                  "Likuiditas",
                  "Quick ratio",
                  "(Kas + surat berharga + piutang neto) dibagi liabilitas lancar",
                  "Beda utama dengan current ratio: persediaan tidak dihitung"
                ],
                [
                  "Likuiditas",
                  "Cash ratio",
                  "(Kas + surat berharga) dibagi liabilitas lancar",
                  "Kemampuan membayar segera"
                ],
                [
                  "Aktivitas",
                  "Perputaran piutang",
                  "Penjualan kredit bruto neto retur dibagi rata-rata piutang bruto",
                  "Tren dipakai menilai kewajaran allowance"
                ],
                [
                  "Aktivitas",
                  "Days to collect",
                  "Rata-rata piutang bruto dibagi penjualan kredit bruto neto retur, kali 365",
                  "Sudut pandang lain atas perputaran piutang"
                ],
                [
                  "Aktivitas",
                  "Perputaran persediaan",
                  "HPP dibagi rata-rata persediaan",
                  "Tren dipakai mengenali kemungkinan keusangan"
                ],
                [
                  "Aktivitas",
                  "Days to sell",
                  "Rata-rata persediaan dibagi HPP, kali 365",
                  "Sudut pandang lain atas perputaran persediaan"
                ],
                [
                  "Aktivitas",
                  "Days to convert inventory to cash",
                  "Days to sell + days to collect",
                  "Lamanya aset kurang likuid menjadi kas"
                ],
                [
                  "Coverage",
                  "Debt-to-equity",
                  "Total liabilitas dibagi total ekuitas",
                  "Terlalu tinggi: kapasitas utang habis. Terlalu rendah: leverage tidak dimanfaatkan"
                ],
                [
                  "Coverage",
                  "Times interest earned",
                  "Laba operasi dibagi beban bunga",
                  "Kemampuan membayar bunga bila laba stabil"
                ],
                [
                  "Coverage",
                  "Tangible net assets-to-equity",
                  "(Ekuitas dikurangi aset tak berwujud) dibagi ekuitas",
                  "Kekuatan struktur modal"
                ],
                [
                  "Profitabilitas",
                  "Earnings per share",
                  "(Laba dikurangi dividen preferen) dibagi jumlah saham biasa",
                  "Ukuran profitabilitas yang paling banyak dipakai"
                ],
                [
                  "Profitabilitas",
                  "Gross profit percent",
                  "Bagian penjualan yang tersisa setelah HPP",
                  "Berguna menilai salah saji penjualan, HPP, piutang, dan persediaan"
                ],
                [
                  "Profitabilitas",
                  "Profit margin",
                  "Laba operasi dibagi penjualan bruto neto retur",
                  "Berguna menilai salah saji beban operasi dan akun neraca terkait"
                ],
                [
                  "Profitabilitas",
                  "Return on assets, return on common equity",
                  "Laba terhadap total aset; laba terhadap ekuitas biasa",
                  "Kemampuan menghasilkan laba dari tiap rupiah aset dan ekuitas"
                ]
              ],
              "stackOnMobile": true
            },
            {
              "kind": "p",
              "text": "`(ARENS pp.162–164)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Perbandingan.** Dua pasang ini sering tertukar. Perputaran piutang dan days to collect membaca hal yang sama dari dua arah: perputaran tinggi berarti days to collect pendek. Begitu juga perputaran persediaan dan days to sell."
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Pembanding: anggaran klien"
        },
        {
          "kind": "p",
          "text": "Anggaran adalah ekspektasi klien. Selisih terbesar antara anggaran dan realisasi bisa menunjuk kemungkinan salah saji, dan ketiadaan selisih bisa berarti salah saji kecil kemungkinannya. Cara ini lazim pada audit pemerintah. Ada dua kekhawatiran. Pertama, anggaran mungkin bukan rencana realistis, sehingga nilainya sebagai bukti kecil. Kedua, angka anggaran mungkin diubah personel klien agar sama dengan realisasi, sehingga selisih tidak tampak walau ada salah saji. Kekhawatiran pertama diatasi dengan membahas prosedur penyusunan anggaran dengan personel klien. Kekhawatiran kedua diatasi dengan penilaian risiko pengendalian dan pengujian rinci atas data aktual. `(ARENS p.147)`"
        }
      ]
    },
    {
      "kind": "section",
      "title": "6. Prosedur analitis substantif: ekspektasi, selisih, penyelidikan",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** prosedur analitis substantif punya empat langkah: ekspektasi independen, batas selisih, hitung selisih, selidiki selisih signifikan. Presisi ekspektasi menentukan seberapa kuat buktinya."
        },
        {
          "kind": "p",
          "text": "Ekspektasi auditor dibangun dari hubungan yang masuk akal berdasarkan pengetahuan bisnis, tren industri, atau akun lain, memakai data keuangan maupun nonkeuangan. Contohnya, komisi dihitung dari total penjualan tercatat dikali tarif komisi rata-rata. Agar relevan dan andal, auditor lebih dulu memastikan penjualan benar, semua penjualan berkomisi, dan tarif rata-rata dapat ditentukan dan diverifikasi. `(ARENS pp.144, 148)`"
        },
        {
          "kind": "figure",
          "title": "Empat langkah prosedur analitis substantif",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 548\" width=\"100%\" role=\"img\" aria-labelledby=\"f10-sap-t f10-sap-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f10-sap-t\">Empat langkah prosedur analitis substantif</title><desc id=\"f10-sap-d\">Empat kartu berurutan: ekspektasi independen, selisih yang dapat diterima, hitung selisih, selidiki selisih signifikan.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"548\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">1. Kembangkan ekspektasi independen</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Hubungan yang masuk akal dan data sumber</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">yang andal</text><rect class=\"svg-title\" x=\"238.5\" y=\"122\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 133 L240 146 L248 133 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"148\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"178\" font-size=\"19\" font-weight=\"800\">2. Tentukan selisih yang dapat</text><text class=\"svg-title\" x=\"34\" y=\"202\" font-size=\"19\" font-weight=\"800\">diterima</text><text class=\"svg-text\" x=\"34\" y=\"230\" font-size=\"18\">Besar selisih tanpa penyelidikan</text><text class=\"svg-text\" x=\"34\" y=\"254\" font-size=\"18\">lanjutan</text><rect class=\"svg-title\" x=\"238.5\" y=\"274\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 285 L240 298 L248 285 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"300\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"330\" font-size=\"19\" font-weight=\"800\">3. Hitung selisih</text><text class=\"svg-text\" x=\"34\" y=\"358\" font-size=\"18\">Jumlah tercatat dibanding jumlah</text><text class=\"svg-text\" x=\"34\" y=\"382\" font-size=\"18\">ekspektasi</text><rect class=\"svg-title\" x=\"238.5\" y=\"402\" width=\"3\" height=\"14\"/><path class=\"svg-title\" d=\"M232 413 L240 426 L248 413 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"428\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"458\" font-size=\"19\" font-weight=\"800\">4. Selidiki selisih signifikan</text><text class=\"svg-text\" x=\"34\" y=\"486\" font-size=\"18\">Inquiry ditambah bukti penguat. Inquiry</text><text class=\"svg-text\" x=\"34\" y=\"510\" font-size=\"18\">saja tidak cukup.</text></svg>",
          "overview": {
            "heading": "Empat langkah prosedur analitis substantif",
            "cards": [
              {
                "title": "1. Kembangkan ekspektasi independen",
                "subtitle": "",
                "items": [
                  "Hubungan masuk akal",
                  "Data sumber andal"
                ],
                "takeaway": ""
              },
              {
                "title": "2. Tentukan selisih yang dapat diterima",
                "subtitle": "",
                "items": [
                  "Besar selisih tanpa penyelidikan lanjutan"
                ],
                "takeaway": ""
              },
              {
                "title": "3. Hitung selisih",
                "subtitle": "",
                "items": [
                  "Jumlah tercatat dibanding ekspektasi"
                ],
                "takeaway": ""
              },
              {
                "title": "4. Selidiki selisih signifikan",
                "subtitle": "",
                "items": [
                  "Inquiry ke manajemen",
                  "Bukti penguat atas jawabannya"
                ],
                "takeaway": "Inquiry saja tidak cukup."
              }
            ]
          },
          "caption": "Gambar 10.3: Empat langkah prosedur analitis substantif. Disusun dari ARENS p.148 dan ISA520 paras. 5, 7.",
          "altText": "Alur empat langkah: kembangkan ekspektasi independen, tentukan selisih yang dapat diterima, hitung selisih, selidiki selisih signifikan dengan bukti penguat."
        },
        {
          "kind": "table",
          "title": "Empat langkah prosedur analitis substantif dan dasar standarnya",
          "headers": [
            "Langkah",
            "Isi",
            "Dasar"
          ],
          "rows": [
            [
              "1. Kembangkan ekspektasi independen",
              "Nilai hubungan yang masuk akal. Evaluasi keandalan data sumber ekspektasi: sumber, keterbandingan, sifat dan relevansi informasi, serta pengendalian atas penyusunannya. Pastikan ekspektasi cukup presisi untuk mendeteksi salah saji",
              "ARENS p.148; ISA520 para. 5(b), 5(c)"
            ],
            [
              "2. Tentukan selisih signifikan",
              "Tetapkan besar selisih dari ekspektasi yang dapat diterima tanpa penyelidikan lebih lanjut",
              "ARENS p.148; ISA520 para. 5(d)"
            ],
            [
              "3. Hitung selisih",
              "Bandingkan jumlah ekspektasi dengan jumlah tercatat",
              "ARENS p.148"
            ],
            [
              "4. Selidiki selisih signifikan",
              "Inquiry ke manajemen dan peroleh bukti yang relevan atas jawabannya; lakukan prosedur lain bila perlu. Inquiry saja tidak cukup",
              "ARENS p.148; ISA520 para. 7"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Sebelum langkah 1, auditor menentukan apakah prosedur itu cocok untuk asersi yang dituju, dengan memperhitungkan risiko salah saji material dan tests of details yang ada. `(ISA520 para. 5(a))`"
        },
        {
          "kind": "table",
          "title": "Pola ekspektasi independen dari buku",
          "headers": [
            "Akun",
            "Rumus ekspektasi"
          ],
          "rows": [
            [
              "Komisi penjualan",
              "Total penjualan tercatat dikali tarif komisi rata-rata"
            ],
            [
              "Pendapatan kamar hotel",
              "Jumlah kamar dikali tingkat hunian dikali tarif kamar"
            ],
            [
              "Pendapatan kuliah di universitas",
              "Rata-rata biaya kuliah dikali jumlah mahasiswa"
            ],
            [
              "Upah pabrik",
              "Total jam kerja dikali tarif upah"
            ],
            [
              "Biaya bahan yang terjual",
              "Jumlah unit dikali biaya bahan per unit"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.144, 148)`"
        },
        {
          "kind": "h3",
          "text": "Contoh Hillsburg: menguji beban bunga"
        },
        {
          "kind": "p",
          "text": "Figure 5-2 adalah kertas kerja N-3 Hillsburg Hardware per 30 Juni 2020. Auditor menghitung sendiri ekspektasi beban bunga dari saldo rata-rata dan tingkat bunga, lalu membandingkannya dengan buku besar. Angka dalam mata uang yang sama dengan buku. `(ARENS pp.148–149)`"
        },
        {
          "kind": "figure",
          "title": "Hillsburg: pengujian beban bunga per 30 Juni 2020",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 438\" width=\"100%\" role=\"img\" aria-labelledby=\"f10-bunga-t f10-bunga-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f10-bunga-t\">Hillsburg: pengujian beban bunga</title><desc id=\"f10-bunga-d\">Dua kartu bunga pinjaman menghasilkan ekspektasi 2.406.326, lalu dibandingkan dengan buku besar 2.408.642 dengan selisih 2.316.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"438\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"212\" height=\"150\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">Jangka pendek</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Rata-rata saldo</text><text class=\"svg-text\" x=\"34\" y=\"102\" font-size=\"18\">2.420.250</text><text class=\"svg-text\" x=\"34\" y=\"126\" font-size=\"18\">Bunga 10,5 persen</text><text class=\"svg-text\" x=\"34\" y=\"150\" font-size=\"18\">Hasil: 254.126</text><rect class=\"svg-badge-blue\" x=\"248\" y=\"20\" width=\"212\" height=\"150\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"262\" y=\"50\" font-size=\"19\" font-weight=\"800\">Jangka panjang</text><text class=\"svg-text\" x=\"262\" y=\"78\" font-size=\"18\">Rata-rata saldo</text><text class=\"svg-text\" x=\"262\" y=\"102\" font-size=\"18\">25.320.000</text><text class=\"svg-text\" x=\"262\" y=\"126\" font-size=\"18\">Bunga 8,5 persen</text><text class=\"svg-text\" x=\"262\" y=\"150\" font-size=\"18\">Hasil: 2.152.200</text><rect class=\"svg-badge-green\" x=\"20\" y=\"206\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"236\" font-size=\"19\" font-weight=\"800\">Ekspektasi auditor: 2.406.326</text><text class=\"svg-text\" x=\"34\" y=\"264\" font-size=\"18\">254.126 ditambah 2.152.200</text><rect class=\"svg-badge-amber\" x=\"20\" y=\"318\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"348\" font-size=\"19\" font-weight=\"800\">Buku besar: 2.408.642</text><text class=\"svg-text\" x=\"34\" y=\"376\" font-size=\"18\">Selisih 2.316. Dinilai tidak signifikan,</text><text class=\"svg-text\" x=\"34\" y=\"400\" font-size=\"18\">jadi beban bunga wajar.</text><rect class=\"svg-title\" x=\"124.5\" y=\"172\" width=\"3\" height=\"22\"/><path class=\"svg-title\" d=\"M118 191 L126 204 L134 191 Z\"/><rect class=\"svg-title\" x=\"352.5\" y=\"172\" width=\"3\" height=\"22\"/><path class=\"svg-title\" d=\"M346 191 L354 204 L362 191 Z\"/><rect class=\"svg-title\" x=\"238.5\" y=\"284\" width=\"3\" height=\"22\"/><path class=\"svg-title\" d=\"M232 303 L240 316 L248 303 Z\"/></svg>",
          "overview": {
            "heading": "Hillsburg: pengujian beban bunga",
            "cards": [
              {
                "title": "Pinjaman jangka pendek",
                "subtitle": "",
                "items": [
                  "Rata-rata saldo 2.420.250",
                  "Bunga 10,5 persen",
                  "Hasil 254.126"
                ],
                "takeaway": "Saldo berfluktuasi, jadi dipakai rata-rata 12 bulan."
              },
              {
                "title": "Pinjaman jangka panjang",
                "subtitle": "",
                "items": [
                  "Rata-rata saldo 25.320.000",
                  "Bunga 8,5 persen",
                  "Hasil 2.152.200"
                ],
                "takeaway": "Saldo stabil, cukup rata-rata awal dan akhir."
              },
              {
                "title": "Ekspektasi dan selisih",
                "subtitle": "",
                "items": [
                  "Ekspektasi 2.406.326",
                  "Buku besar 2.408.642",
                  "Selisih 2.316"
                ],
                "takeaway": "Selisih tidak signifikan, beban bunga wajar."
              }
            ],
            "footer": "Sumber: Figure 5-2 (ARENS p.149)."
          },
          "caption": "Gambar 10.4: Pengujian beban bunga Hillsburg (kertas kerja N-3). Angka dari Figure 5-2 (ARENS p.149).",
          "altText": "Bunga pinjaman jangka pendek 254.126 dan jangka panjang 2.152.200 dijumlahkan menjadi ekspektasi 2.406.326. Dibanding buku besar 2.408.642 selisihnya 2.316, dinilai tidak signifikan."
        },
        {
          "kind": "table",
          "title": "Pengujian beban bunga Hillsburg (Figure 5-2, kertas kerja N-3)",
          "headers": [
            "Komponen",
            "Perhitungan",
            "Hasil"
          ],
          "rows": [
            [
              "Rata-rata saldo pinjaman jangka pendek",
              "Total saldo akhir 12 bulan 29.043.000 dibagi 12",
              "2.420.250"
            ],
            [
              "Bunga pinjaman jangka pendek",
              "2.420.250 dikali 10,5 persen",
              "254.126"
            ],
            [
              "Rata-rata saldo pinjaman jangka panjang",
              "(26.520.000 + 24.120.000) dibagi 2",
              "25.320.000"
            ],
            [
              "Bunga pinjaman jangka panjang",
              "25.320.000 dikali 8,5 persen",
              "2.152.200"
            ],
            [
              "Estimasi total beban bunga",
              "254.126 + 2.152.200",
              "2.406.326"
            ],
            [
              "Beban bunga menurut buku besar",
              "Sesuai buku besar dan neraca saldo kerja",
              "2.408.642"
            ],
            [
              "Selisih",
              "2.408.642 dikurangi 2.406.326",
              "2.316"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS p.149)`"
        },
        {
          "kind": "p",
          "text": "Pada kertas kerja, selisih 2.316 dinilai tidak signifikan, sehingga beban bunga di buku wajar. Tingkat bunga jangka pendek 10,5 persen diestimasi dari beberapa wesel sepanjang tahun yang bunganya 10 sampai 11 persen. Tingkat jangka panjang sesuai jadwal utang jangka panjang di permanent file. `(ARENS p.149)`"
        },
        {
          "kind": "p",
          "text": "Presisinya sengaja berbeda. Saldo pinjaman jangka pendek berfluktuasi dari bulan ke bulan, jadi auditor memakai rata-rata 12 bulan. Pinjaman jangka panjang berbunga tetap dengan saldo stabil, jadi rata-rata awal dan akhir sudah cukup. Kertas kerja ini sekaligus mendokumentasikan ekspektasi yang diwajibkan standar untuk prosedur analitis substantif. `(ARENS p.148)`"
        },
        {
          "kind": "callout",
          "variant": "note",
          "text": "**Catatan sumber.** Teks buku menulis total ekspektasi 2 408 326, sedangkan Figure 5-2 menunjukkan 2 406 326. Hitungan 254.126 + 2.152.200 = 2.406.326 mengonfirmasi angka di gambar. Pakai 2.406.326, dan selisih 2.316 mengikutinya. `(ARENS pp.148–149)`"
        },
        {
          "kind": "h3",
          "text": "Presisi ekspektasi"
        },
        {
          "kind": "table",
          "title": "Empat faktor yang menentukan presisi prosedur analitis",
          "headers": [
            "Faktor",
            "Aturan",
            "Contoh"
          ],
          "rows": [
            [
              "Disagregasi data",
              "Makin rinci tingkat analisis, makin besar potensi presisi",
              "Analisis atas total pendapatan kurang efektif menyorot selisih yang saling menutupi dibanding analisis per lini produk atau wilayah"
            ],
            [
              "Keandalan data",
              "Makin andal data, makin presisi ekspektasi. Data di luar sistem pelaporan keuangan klien butuh langkah tambahan karena pengendaliannya belum dinilai",
              "Sumber informasi, kualitas pengendalian, dan independensi sumber menentukan keandalan"
            ],
            [
              "Kewajaran dan keterprediksian hubungan",
              "Makin masuk akal dan terprediksi hubungannya, makin presisi ekspektasi",
              "Pendapatan bunga dari tingkat bunga sangat terprediksi. Banyak jenis pendapatan punya terlalu banyak variabel di luar kendali"
            ],
            [
              "Jenis prosedur analitis",
              "Untuk keyakinan tinggi, kembangkan ekspektasi yang presisi, jangan berhenti di analisis tren",
              "Analisis tren (perubahan akun dari tahun ke tahun) lebih lemah daripada ekspektasi buatan auditor"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.148–150)`"
        },
        {
          "kind": "p",
          "text": "Bila hasil menyimpang dari ekspektasi, angka yang dilaporkan mungkin tidak masuk akal, dan auditor perlu pekerjaan tambahan. Buku mencontohkan Hillsburg: setelah CFO menyebut kampanye iklan besar untuk merek baru, auditor mengharapkan beban iklan naik dari tahun ke tahun. Buku menyebut prosedur analitis sebagai \"kompas\" auditor: ia menunjuk arah, tetapi bukan tujuan. `(ARENS p.150)`"
        },
        {
          "kind": "pendalaman",
          "title": "Auditing in Action 5-3: favourable outcome bias pada prosedur analitis substantif",
          "blocks": [
            {
              "kind": "p",
              "text": "Laporan publik CPAB (regulator audit Kanada) menemukan prosedur analitis substantif atas pendapatan sering dikerjakan kurang baik karena tiga hal: presisi tidak ditetapkan dengan benar, faktor penyusun ekspektasi (termasuk asumsi dan data yang dipakai) tidak dinilai memadai, dan selisih tidak dikorobasi dengan baik. Selisih biasanya hanya dibahas dengan manajemen, tanpa verifikasi ke sumber independen. `(ARENS p.147)`"
            },
            {
              "kind": "p",
              "text": "Penelitian Steve Glover dan rekan menunjukkan auditor punya favourable outcome bias saat menilai prosedur analitis agregat: bila tidak ada selisih signifikan antara ekspektasi dan angka belum diaudit, auditor memberi bobot lebih besar daripada yang pantas. Auditor berpengalaman yang diingatkan tentang kelemahan prosedur agregat mampu mengurangi bias ini. Auditor yunior tidak terbantu karena belum punya dasar pengetahuan. CPAB menyarankan prosedur ini dikerjakan staf berpengalaman (tingkat manajer ke atas). `(ARENS p.147)`"
            },
            {
              "kind": "callout",
              "variant": "info",
              "text": "**Interpretasi.** Hasil yang \"tidak ada selisih\" juga perlu dicurigai. Pertanyaannya: seberapa presisi ekspektasi itu, dan apakah data yang dipakai independen dari angka yang diuji?"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "7. Audit data analytics dan teknologi canggih",
      "layer": "main",
      "blocks": [
        {
          "kind": "callout",
          "variant": "gist",
          "text": "**Intinya:** ADA memungkinkan analisis populasi sangat besar, kadang seluruhnya. Hasilnya tetap harus dinilai relevansi, keandalan, dan pengecualiannya oleh auditor."
        },
        {
          "kind": "p",
          "text": "**Audit data analytics (ADA)** adalah seni dan ilmu menemukan dan menganalisis pola, mengidentifikasi anomali, dan menggali informasi berguna dalam data audit. Caranya lewat analisis, pemodelan, dan visualisasi, untuk merencanakan atau menjalankan audit (definisi AICPA yang dikutip buku). `(ARENS p.151)`"
        },
        {
          "kind": "p",
          "text": "ADA memungkinkan analisis data besar dan kompleks, kadang 100 persen populasi transaksi atau saldo. Alat ADA dapat membaca data lintas platform TI dengan format berbeda dan memadukan data keuangan dengan nonkeuangan. Hasilnya sering disajikan lewat grafik, diagram sebar, garis tren, dan tabel. ADA dipakai di semua fase audit, dari perencanaan sampai kesimpulan akhir, dan memberi lebih banyak kesempatan menerapkan skeptisisme profesional karena membantu menemukan anomali. Contohnya analisis rasio, analisis tren, analisis regresi, rekonsiliasi akun buku besar, dan analisis entri jurnal. `(ARENS p.151)`"
        },
        {
          "kind": "figure",
          "title": "Langkah merencanakan dan menjalankan ADA",
          "svg": "<svg class=\"course-diagram-svg aka201-diagram\" viewBox=\"0 0 480 766\" width=\"100%\" role=\"img\" aria-labelledby=\"f10-ada-t f10-ada-d\" style=\"max-width:480px;display:block;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"f10-ada-t\">Langkah merencanakan dan menjalankan ADA</title><desc id=\"f10-ada-d\">Enam kartu berurutan dari penentuan ketepatan ADA sampai dokumentasi, dengan catatan kembali ke pembersihan data bila ditemukan kesalahan.</desc><rect class=\"svg-bg\" x=\"0\" y=\"0\" width=\"480\" height=\"766\" rx=\"14\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"20\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"50\" font-size=\"19\" font-weight=\"800\">1. Tentukan apakah ADA tepat</text><text class=\"svg-text\" x=\"34\" y=\"78\" font-size=\"18\">Tujuan prosedur dan tingkat keyakinan</text><rect class=\"svg-title\" x=\"238.5\" y=\"98\" width=\"3\" height=\"8\"/><path class=\"svg-title\" d=\"M232 103 L240 116 L248 103 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"118\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"148\" font-size=\"19\" font-weight=\"800\">2. Tentukan apakah data bisa diakses</text><text class=\"svg-text\" x=\"34\" y=\"176\" font-size=\"18\">Format, sistem TI, izin klien</text><rect class=\"svg-title\" x=\"238.5\" y=\"196\" width=\"3\" height=\"8\"/><path class=\"svg-title\" d=\"M232 201 L240 214 L248 201 Z\"/><rect class=\"svg-badge-blue\" x=\"20\" y=\"216\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"246\" font-size=\"19\" font-weight=\"800\">3. Siapkan (bersihkan) data</text><text class=\"svg-text\" x=\"34\" y=\"274\" font-size=\"18\">Kolom kosong, format tidak konsisten</text><rect class=\"svg-title\" x=\"238.5\" y=\"294\" width=\"3\" height=\"8\"/><path class=\"svg-title\" d=\"M232 299 L240 312 L248 299 Z\"/><rect class=\"svg-badge-green\" x=\"20\" y=\"314\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"344\" font-size=\"19\" font-weight=\"800\">4. Evaluasi relevansi dan keandalan</text><text class=\"svg-text\" x=\"34\" y=\"372\" font-size=\"18\">Siapa yang mengendalikan data</text><rect class=\"svg-title\" x=\"238.5\" y=\"392\" width=\"3\" height=\"8\"/><path class=\"svg-title\" d=\"M232 397 L240 410 L248 397 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"412\" width=\"440\" height=\"124\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"442\" font-size=\"19\" font-weight=\"800\">5. Tafsirkan hasil, tindak lanjuti</text><text class=\"svg-title\" x=\"34\" y=\"466\" font-size=\"19\" font-weight=\"800\">pengecualian</text><text class=\"svg-text\" x=\"34\" y=\"494\" font-size=\"18\">Pisahkan risiko nyata dari false</text><text class=\"svg-text\" x=\"34\" y=\"518\" font-size=\"18\">positive</text><rect class=\"svg-title\" x=\"238.5\" y=\"538\" width=\"3\" height=\"8\"/><path class=\"svg-title\" d=\"M232 543 L240 556 L248 543 Z\"/><rect class=\"svg-badge-amber\" x=\"20\" y=\"558\" width=\"440\" height=\"76\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"588\" font-size=\"19\" font-weight=\"800\">6. Dokumentasikan</text><text class=\"svg-text\" x=\"34\" y=\"616\" font-size=\"18\">Data, cara olah, hasil, visualisasi</text><rect class=\"svg-subcard\" x=\"20\" y=\"646\" width=\"440\" height=\"100\" rx=\"12\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"676\" font-size=\"19\" font-weight=\"800\">Kembali ke langkah 3</text><text class=\"svg-text\" x=\"34\" y=\"704\" font-size=\"18\">Bila kesalahan data baru ketahuan,</text><text class=\"svg-text\" x=\"34\" y=\"728\" font-size=\"18\">bersihkan data lalu jalankan ulang ADA.</text></svg>",
          "overview": {
            "heading": "Langkah merencanakan dan menjalankan ADA",
            "cards": [
              {
                "title": "1. Tentukan apakah ADA tepat",
                "subtitle": "",
                "items": [
                  "Tujuan prosedur",
                  "Tingkat keyakinan yang dibutuhkan"
                ],
                "takeaway": ""
              },
              {
                "title": "2. Tentukan apakah data bisa diakses",
                "subtitle": "",
                "items": [
                  "Format dan sistem TI",
                  "Kekhawatiran klien tentang keamanan"
                ],
                "takeaway": ""
              },
              {
                "title": "3. Siapkan (bersihkan) data",
                "subtitle": "",
                "items": [
                  "Kolom kosong",
                  "Format tidak konsisten"
                ],
                "takeaway": ""
              },
              {
                "title": "4. Evaluasi relevansi dan keandalan",
                "subtitle": "",
                "items": [
                  "Relevan untuk asersi",
                  "Pengendalian atas data"
                ],
                "takeaway": ""
              },
              {
                "title": "5. Tafsirkan hasil dan tindak lanjuti",
                "subtitle": "",
                "items": [
                  "Risiko, defisiensi pengendalian, salah saji",
                  "False positive"
                ],
                "takeaway": "Bila data ternyata belum bersih, ulangi dari langkah 3."
              },
              {
                "title": "6. Dokumentasikan",
                "subtitle": "",
                "items": [
                  "Sifat data dan cara mengolahnya",
                  "Hasil dan visualisasi"
                ],
                "takeaway": ""
              }
            ],
            "footer": "Buku menyebut lima langkah kunci; Figure 5-3 menggambar enam kotak."
          },
          "caption": "Gambar 10.5: Langkah merencanakan dan menjalankan audit data analytics. Disusun dari Figure 5-3 (ARENS p.151) dan teks pp.152–153.",
          "altText": "Alur enam langkah ADA: tentukan ketepatan ADA, akses data, bersihkan data, evaluasi relevansi dan keandalan, tafsirkan hasil dan tindak lanjuti pengecualian, dokumentasikan. Bila kesalahan data baru ketahuan, kembali ke pembersihan data."
        },
        {
          "kind": "p",
          "text": "Buku menyebut lima langkah kunci, tetapi Figure 5-3 menggambar enam kotak. Hitungannya enam bila dokumentasi dihitung sebagai langkah tersendiri, dan itu yang dipakai di bawah ini. `(ARENS pp.151–153)`"
        },
        {
          "kind": "table",
          "title": "Langkah merencanakan dan menjalankan ADA (Figure 5-3)",
          "headers": [
            "Langkah",
            "Pertanyaan utama",
            "Catatan dari buku"
          ],
          "rows": [
            [
              "1. Tentukan apakah ADA tepat",
              "Untuk tujuan apa (risk assessment, test of controls, atau substantive) dan apakah memberi tingkat keyakinan yang dibutuhkan?",
              "Tentukan atribut data, jenis ADA dan alatnya, serta bentuk visualisasi. Tidak semua ADA berisi visualisasi"
            ],
            [
              "2. Tentukan apakah data bisa diakses",
              "Bisakah auditor membaca data dalam format yang siap dipakai?",
              "Sistem TI klien beragam, terutama pada entitas hasil akuisisi dan merger. Tidak ada format data standar. Klien bisa enggan karena takut data berubah atau terhapus, atau akses membuka celah keamanan. Bahas lebih awal"
            ],
            [
              "3. Siapkan (bersihkan) data",
              "Adakah kolom kosong atau format yang tidak konsisten?",
              "Contoh: format tanggal MM/DD/YEAR, DD/MM/YEAR, dan MM/DD/YR dalam satu kolom. Kadang data baru bisa diaudit setelah manajemen memperbaiki kesalahan"
            ],
            [
              "4. Evaluasi relevansi dan keandalan data",
              "Relevan untuk asersi yang diuji? Siapa yang mengendalikan data?",
              "Data internal: pengendalian pembuatan dan penyimpanan menentukan akurasi dan kelengkapan. Data eksternal bisa lebih terbebas dari bias manajemen, tetapi belum tentu andal. Bila keandalannya tidak dapat dinilai, auditor tidak memakainya"
            ],
            [
              "5. Tafsirkan hasil dan tindak lanjuti pengecualian",
              "Pengecualian mana yang mewakili risiko, defisiensi pengendalian, atau salah saji? Mana false positive?",
              "Pengujian 100 persen item dapat menghasilkan banyak pengecualian. Bila ditemukan kesalahan data yang belum dibersihkan, siapkan ulang data dan jalankan lagi ADA. Auditor juga dapat memecah populasi ke subkelompok untuk analisis lanjutan"
            ],
            [
              "6. Dokumentasikan",
              "Apa yang direncanakan, dikerjakan, dan hasilnya?",
              "Catat sifat data, cara mengakses, mengekstrak, dan mengubahnya. Visualisasi dapat dimasukkan ke kertas kerja"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.151–153; ISA500 para. 9)`"
        },
        {
          "kind": "callout",
          "variant": "warning",
          "text": "**Jebakan ujian.** Pengecualian dari ADA belum tentu salah saji. Item yang ditandai tetapi tidak mencerminkan risiko atau masalah nyata disebut **false positive**. Jawaban yang bagus menjelaskan cara auditor memilah pengecualian, bukan langsung menyatakan semuanya salah saji atau mengabaikan semuanya. `(ARENS p.153)`"
        },
        {
          "kind": "p",
          "text": "ISA 500 mewajibkan auditor yang memakai informasi buatan entitas untuk menilai apakah informasi itu cukup andal: memperoleh bukti tentang akurasi dan kelengkapannya, serta menilai apakah cukup presisi dan rinci untuk tujuan auditor. Ini dasar langkah 4 di atas. `(ISA500 para. 9)`"
        },
        {
          "kind": "h3",
          "text": "Teknologi canggih"
        },
        {
          "kind": "p",
          "text": "Buku membahas tiga bentuk kecerdasan buatan (AI) yang mulai muncul di konteks audit. `(ARENS pp.153–154)`"
        },
        {
          "kind": "table",
          "title": "Tiga teknologi AI dalam konteks audit",
          "headers": [
            "Teknologi",
            "Arti",
            "Contoh pemakaian",
            "Kehati-hatian"
          ],
          "rows": [
            [
              "Robotics (bots)",
              "Komputer diprogram mengotomatisasi proses berbasis aturan, seperti entri dan manipulasi data, dengan presisi tinggi",
              "Klien: bot membuat dan mengirim faktur, mem-posting ke akun pelanggan, menindaklanjuti jatuh tempo. Auditor: bot membaca buku pembantu piutang, menyiapkan dan mengirim konfirmasi, lalu mencocokkan jawaban",
              "Auditor harus menilai keefektifan proses robotik klien. Terlalu mengandalkan teknologi tanpa bertanya langsung ke klien dapat melemahkan skeptisisme"
            ],
            [
              "Machine learning",
              "Teknik statistik (algoritma) yang membuat komputer belajar dari data untuk memperbaiki kinerja tugas tertentu",
              "Komputer belajar dari keputusan auditor menerima atau menolak pengecualian ADA, sehingga penyaringan transaksi makin baik",
              "Kualitas prediksi bergantung pada kualitas data historis, yang bisa bias"
            ],
            [
              "Deep learning",
              "Komputer memproses data sangat besar dengan cara yang meniru struktur dan proses berpikir otak manusia",
              "Masih tahap awal dieksplorasi untuk analisis dan penilaian kompleks",
              "Buku memakai kendaraan tanpa pengemudi sebagai contoh penerapan umum"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "`(ARENS pp.153–154)`"
        },
        {
          "kind": "p",
          "text": "Tantangannya: data pelatihan auditor terbatas oleh etika dan kerahasiaan klien, berbeda dengan perusahaan teknologi besar. Auditor juga bisa terlalu percaya pada keluaran mesin dan lupa menyelidiki keandalan data masukan dan algoritmanya, yang disebut buku sebagai jenis baru over-confidence bias. Karena itu auditor tetap skeptis dan bekerja sama dengan ahli TI, termasuk data scientist. `(ARENS p.155)`"
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
          "title": "Kasus 1: Sampel yang salah arah.",
          "prompt": "PT Bahari Mesin menjual mesin pertanian. Auditor khawatir sebagian pengiriman tidak pernah ditagih. Seorang staf mengambil 60 faktur penjualan dan menelusuri tiap faktur ke dokumen pengirimannya. Nilai pekerjaan itu, lalu tulis prosedur pengganti dengan empat unsur.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "Prosedur staf menguji occurrence, bukan completeness. Mulai dari faktur, ia hanya melihat faktur yang ada, bukan pengiriman yang lolos tanpa faktur. `(ARENS p.130)`",
                "Prosedur yang relevan bergerak dari dokumen pengiriman ke faktur penjualan. Itu tracing, karena arahnya dari dokumen ke catatan akuntansi. `(ARENS p.136)`",
                "Prosedur pengganti: untuk menguji completeness (alasan), pada pekerjaan akhir tahun (waktu), ambil register dokumen pengiriman, lalu bandingkan nomor, kuantitas, dan tanggal dengan faktur penjualan terkait (langkah) untuk sampel acak 60 dokumen (item yang dipilih). `(ARENS pp.129–130)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 2: Mengurutkan keandalan bukti.",
          "prompt": "Auditor PT Laut Biru memperoleh tiga bukti atas piutang satu pelanggan besar. (a) Konfirmasi yang disiapkan stafnya, tetapi dikirim lewat alamat surel yang diberikan CFO, dan jawabannya masuk dulu ke CFO sebelum diteruskan ke auditor. (b) Salinan faktur penjualan dari sistem yang pengendaliannya lemah. (c) Rekening koran yang auditor terima langsung dari bank, memuat setoran pelanggan itu sesudah tanggal neraca. Urutkan dari paling andal dan beri rekomendasi.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**Paling andal: (c).** Sumbernya independen, diperoleh langsung oleh auditor, dan berasal dari bank yang berkualifikasi. Bukti objektif ini juga memperkuat tertagihnya piutang. `(ARENS p.131)`",
                "**Kedua: (a) tidak lagi andal sebagai konfirmasi.** Klien mengendalikan pengiriman dan penerimaan jawabannya, sehingga auditor kehilangan kendali dan independensi bukti. Ini pola Peregrine. `(ARENS p.138)`",
                "**Terendah: (b).** Dokumen internal dari sistem berpengendalian lemah mungkin memuat kesalahan atau perubahan sengaja. `(ARENS p.135)`",
                "**Rekomendasi:** kirim ulang konfirmasi dengan kendali penuh auditor, lalu gabungkan dengan (c). Bukti yang konsisten dari sumber berbeda lebih andal. `(ARENS pp.131, 138)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 3: Prosedur analitis substantif.",
          "prompt": "Hotel Mutiara punya 120 kamar. Tingkat hunian rata-rata tahun ini 70 persen dan tarif rata-rata 800.000 rupiah per kamar per malam. Auditor sudah menguji data hunian dan tarif dari sistem reservasi. Pendapatan kamar tercatat 26.100.000.000 rupiah. Auditor menetapkan selisih yang dapat diterima tanpa penyelidikan sebesar 3 persen dari ekspektasi. Jalankan empat langkah.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "**Ekspektasi:** 120 kamar dikali 70 persen hunian dikali 365 malam menghasilkan 30.660 malam kamar terjual. Dikali 800.000 rupiah, ekspektasi pendapatan 24.528.000.000 rupiah. `(ARENS p.148)`",
                "**Batas selisih:** 3 persen dari ekspektasi sama dengan 735.840.000 rupiah. `(ISA520 para. 5(d))`",
                "**Selisih:** 26.100.000.000 dikurangi 24.528.000.000 sama dengan 1.572.000.000 rupiah, sekitar 6,4 persen dari ekspektasi. Selisih melewati batas.",
                "**Penyelidikan:** tanya manajemen, lalu cari bukti independen atas jawabannya, misalnya mencocokkan dengan folio tamu dan setoran. Cek juga apakah akun pendapatan kamar memuat pendapatan lain yang salah klasifikasi. Penjelasan manajemen tanpa bukti tidak cukup. `(ISA520 para. 7; ARENS p.148)`"
              ]
            }
          ]
        },
        {
          "kind": "solution-reveal",
          "title": "Kasus 4: Pengecualian ADA.",
          "prompt": "Tim audit menjalankan ADA atas 310.000 entri jurnal setahun penuh. Alat menandai 2.480 entri (0,8 persen). Seorang anggota tim menyarankan, \"Karena terlalu banyak, kita abaikan saja.\" Seorang lain menyarankan, \"Anggap semuanya salah saji.\" Nilai kedua saran dan tentukan langkahmu.",
          "revealLabel": "Lihat pembahasan",
          "blocks": [
            {
              "kind": "p",
              "text": "*Pembahasan.*"
            },
            {
              "kind": "ul",
              "items": [
                "Kedua saran keliru. Pengecualian bisa mewakili risiko lebih tinggi, defisiensi pengendalian, atau salah saji nyata, tetapi sebagian bisa false positive. Auditor harus mengevaluasi cara terbaik menangani item yang ditandai. `(ARENS p.153)`",
                "Pertama, periksa apakah ada kesalahan data yang belum dibersihkan, misalnya format tanggal berbeda. Bila ada, bersihkan data lalu jalankan ulang ADA. `(ARENS p.153)`",
                "Kedua, pecah 2.480 entri ke subkelompok (misalnya menurut penyusun jurnal atau jenis akun) untuk memahami pola dan menilai apakah ada risiko salah saji material atau kelemahan pengendalian. `(ARENS p.153)`",
                "Ketiga, catat di kertas kerja sifat data, cara akses dan ekstraksi, hasil, dan alasan tiap kelompok pengecualian dinyatakan sebagai false positive atau ditindaklanjuti. `(ARENS p.153)`"
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
          "question": "**1. Sebutkan tiga keputusan bukti, lalu pasangkan tiap keputusan dengan kualitas bukti yang ditentukannya.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* nature (prosedur apa) menentukan appropriateness, yaitu relevance dan reliability. Extent (item mana dan berapa banyak) menentukan sufficiency. Timing (kapan dan periode mana) menentukan timeliness. Ketiga kualitas dinilai bersama dalam konteks risiko salah saji material. `(ARENS pp.128–133)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut ketiganya sebagai daftar jenis bukti, tanpa memasangkannya ke appropriateness, sufficiency, timeliness."
        },
        {
          "kind": "self-check",
          "question": "**2. Konfirmasi dianggap bukti andal. Kapan konfirmasi kehilangan keandalannya? Beri satu contoh dari buku.**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* konfirmasi kehilangan keandalan bila klien mengendalikan penyiapan, pengiriman, atau penerimaan jawabannya, atau bila responden lalai, tidak kompeten, atau berelasi dengan klien. Pada Peregrine, CEO memberi auditor alamat kotak pos yang ia kendalikan dan memalsukan konfirmasi bank. `(ARENS pp.127, 136–138)`"
            }
          ],
          "signal": "*Tanda belum paham:* menjawab \"konfirmasi selalu andal karena dari pihak luar\"."
        },
        {
          "kind": "self-check",
          "question": "**3. Bedakan vouching dan tracing. Asersi mana yang diuji masing-masing?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* vouching bergerak dari catatan akuntansi ke dokumen pendukung untuk menguji occurrence. Tracing bergerak dari dokumen ke catatan akuntansi untuk menguji completeness. `(ARENS p.136)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut keduanya \"mencocokkan dokumen\" tanpa menyebut arah dan asersi."
        },
        {
          "kind": "self-check",
          "question": "**4. Jelaskan empat langkah prosedur analitis substantif memakai pengujian beban bunga Hillsburg. Mengapa inquiry ke manajemen saja tidak cukup untuk menutup selisih signifikan?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* ekspektasi dibangun dari saldo rata-rata dan tingkat bunga: 254.126 untuk pinjaman jangka pendek dan 2.152.200 untuk jangka panjang, jadi 2.406.326. Auditor menetapkan selisih yang dapat diterima, menghitung selisih terhadap 2.408.642 di buku besar (2.316), lalu menilainya. Karena selisih tidak signifikan, tidak perlu penyelidikan lanjutan. Bila selisih signifikan, penjelasan manajemen harus dikorobasi dengan bukti lain, sebab inquiry berasal dari sumber yang tidak independen. `(ARENS pp.148–149; ISA520 paras. 5(d), 7)`"
            }
          ],
          "signal": "*Tanda belum paham:* menyebut langkah tanpa ekspektasi independen, atau menganggap penjelasan manajemen sebagai bukti."
        },
        {
          "kind": "self-check",
          "question": "**5. Apa itu false positive dalam ADA, dan bagaimana auditor menanganinya?**",
          "answer": [
            {
              "kind": "p",
              "text": "*Contoh jawaban:* false positive adalah item yang ditandai ADA tetapi tidak mencerminkan risiko atau masalah nyata. Auditor memeriksa kembali kebersihan data, memecah pengecualian ke subkelompok, menilai apakah ada risiko, defisiensi pengendalian, atau salah saji, lalu mendokumentasikannya. `(ARENS p.153)`"
            }
          ],
          "signal": "*Tanda belum paham:* menganggap semua pengecualian pasti salah saji, atau menganggap ADA otomatis membuktikan seluruh populasi benar."
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
          "text": "**Kerangka jawaban soal memilih prosedur untuk satu asersi**"
        },
        {
          "kind": "ol",
          "items": [
            "Tentukan asersi dan arah salah saji (terlalu tinggi atau terlalu rendah).",
            "Tentukan arah pengujian: vouching untuk occurrence, tracing untuk completeness.",
            "Pilih jenis prosedur dan kategorinya (risk assessment, test of controls, atau substantive).",
            "Tulis empat unsur: asersi, waktu, langkah, item yang dipilih.",
            "Nilai persuasiveness: relevan, andal, cukup, tepat waktu, dengan biaya wajar."
          ]
        },
        {
          "kind": "p",
          "text": "**Kerangka jawaban soal menilai keandalan bukti**"
        },
        {
          "kind": "ol",
          "items": [
            "Siapa sumbernya dan apakah independen serta berkualifikasi?",
            "Apakah auditor memperolehnya langsung atau lewat klien?",
            "Seberapa efektif pengendalian atas pembuatan bukti?",
            "Apakah bukti objektif atau menuntut banyak pertimbangan?",
            "Apakah konsisten dengan bukti dari sumber lain?"
          ]
        },
        {
          "kind": "p",
          "text": "**Kerangka jawaban soal prosedur analitis substantif**"
        },
        {
          "kind": "ol",
          "items": [
            "Pastikan hubungan masuk akal dan data sumber ekspektasi andal.",
            "Kembangkan ekspektasi independen dan tentukan selisih yang dapat diterima.",
            "Hitung selisih terhadap angka tercatat.",
            "Selidiki selisih signifikan dengan bukti penguat, bukan inquiry saja.",
            "Dokumentasikan ekspektasi, faktor penyusunnya, dan hasilnya."
          ]
        },
        {
          "kind": "p",
          "text": "**Pasangan yang sering tertukar**"
        },
        {
          "kind": "table",
          "title": "Pasangan istilah yang sering tertukar di TM10",
          "headers": [
            "Pasangan",
            "Pembeda"
          ],
          "rows": [
            [
              "Relevance vs reliability",
              "Hubungan bukti dengan asersi yang diuji vs seberapa bisa dipercaya bukti itu"
            ],
            [
              "Sufficiency vs appropriateness",
              "Kuantitas bukti vs kualitas bukti (relevance dan reliability)"
            ],
            [
              "Vouching vs tracing",
              "Catatan ke dokumen (occurrence) vs dokumen ke catatan (completeness)"
            ],
            [
              "Recalculation vs reperformance",
              "Memeriksa ulang hitungan vs mengerjakan ulang prosedur atau pengendalian selain hitungan"
            ],
            [
              "Dokumen internal vs eksternal",
              "Tidak pernah keluar dari klien vs pernah dipegang pihak lain dalam transaksi"
            ],
            [
              "Test of controls vs test of details",
              "Menguji proses pengendalian vs menguji transaksi atau saldo"
            ],
            [
              "Preliminary vs substantive analytical procedures",
              "Data agregat untuk menilai risiko (wajib di perencanaan) vs ekspektasi presisi untuk bukti asersi"
            ],
            [
              "False positive vs salah saji nyata",
              "Item ditandai tetapi tidak ada masalah vs item ditandai yang ternyata keliru"
            ]
          ],
          "stackOnMobile": true
        }
      ]
    }
  ]
};
