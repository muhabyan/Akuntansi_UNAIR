// Generated from the approved 05 package by scripts/build-akk203-content.mjs.
// Source SHA-256: 291ed6d497d9880c5f0a0e732adae15d643dfc308a51b0a63473fda9d3fdf888
import type { Reading } from '../../../types';

export const TM6_READING: Reading = {
  "tm": 6,
  "title": "Kapan transaksi dicatat, dan apa yang dilaporkan?",
  "ref": "Akuntansi Sektor Publik",
  "intro": "kontrak, barang diterima, dan uang dibayar dapat terjadi pada tanggal berbeda dan menghasilkan catatan berbeda.",
  "objectives": [
    "Basis menjawab **kapan** pengaruh transaksi diakui. Fokus pengukuran menjawab **apa** yang diukur dan dilaporkan.",
    "Dalam SAP akrual, LO dan Neraca memakai akrual; LRA mengikuti basis anggaran. Kas tetap menjadi dasar arus kas.",
    "Dua basis modifikasian adalah konsep teori dengan batas masing-masing. CTA Indonesia merupakan model historis yang dijelaskan tersendiri.",
    "Akuntansi dana memisahkan sumber daya menurut tujuan. Tiga kelompok dana versi buku AS tidak otomatis menjadi klasifikasi Indonesia.",
    "DPA mencatat rencana. Kontrak, serah terima, pembayaran, dan penyesuaian mempunyai pemicu berbeda.",
    "Encumbrance versi buku AS dicatat untuk kendali komitmen. Jurnal itu harus dibedakan dari beban atau aset dalam SAP.",
    "Debit yang sama dengan kredit baru satu pemeriksaan. Akun, waktu pengakuan, dan pengaruh laporannya juga harus benar."
  ],
  "layout": "layered",
  "coreReadingMinutes": 25,
  "blocks": [
    {
      "kind": "p",
      "text": "Tag **Konsep buku ASP** menandai konsep referensi kontrak seperti Mardiasmo; bukunya tidak tersedia, sehingga isi dicocokkan dengan catatan kuliah Kelas N."
    },
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat (4 menit)",
      "blocks": [
        {
          "kind": "figure",
          "title": "Accounting Techniques: waktu, cakupan, dan kontrol",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 601\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Accounting Techniques: waktu, cakupan, dan kontrol</title><desc>Basis, fokus, dana, anggaran, dan komitmen memiliki pertanyaan berbeda yang bertemu pada pencatatan dan laporan.</desc><defs><marker id=\"V-TM06-01-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"601\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Accounting Techniques: waktu, cakupan, dan kontrol</text><path d=\"M276.25 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-01-arrow)\"/><path d=\"M683.75 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-01-arrow)\"/><path d=\"M480 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-01-arrow)\"/><path d=\"M208.33333333333331 516 V561 H56 V177 H480 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"208.33333333333331\" y=\"539\" text-anchor=\"middle\" font-size=\"12\">Kendali</text><path d=\"M479.99999999999994 516 V561 H68 V177 H480 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"479.99999999999994\" y=\"539\" text-anchor=\"middle\" font-size=\"12\">Kendali</text><path d=\"M751.6666666666666 516 V561 H20 V177 H480 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"751.6666666666666\" y=\"539\" text-anchor=\"middle\" font-size=\"12\">Kendali</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Basis: kapan?</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Fokus: apa?</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pencatatan finansial: hak, konsumsi, kewajiban</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Laporan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Dana: tujuan</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"436\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Anggaran: rencana /</tspan><tspan x=\"479.99999999999994\" dy=\"23\">realisasi</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"436\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Komitmen: pesanan</tspan></text></svg>",
          "overview": {
            "heading": "Accounting Techniques: waktu, cakupan, dan kontrol",
            "cards": [
              {
                "title": "Basis",
                "subtitle": "",
                "items": [
                  "Menentukan kapan dicatat."
                ],
                "takeaway": ""
              },
              {
                "title": "Fokus",
                "subtitle": "",
                "items": [
                  "Menentukan sumber daya yang diukur."
                ],
                "takeaway": ""
              },
              {
                "title": "Dana",
                "subtitle": "",
                "items": [
                  "Menentukan tujuan dan batas dana."
                ],
                "takeaway": ""
              },
              {
                "title": "Anggaran",
                "subtitle": "",
                "items": [
                  "Membandingkan rencana dengan realisasi."
                ],
                "takeaway": ""
              },
              {
                "title": "Komitmen",
                "subtitle": "",
                "items": [
                  "Mengendalikan pesanan sebelum pembayaran."
                ],
                "takeaway": ""
              },
              {
                "title": "Finansial",
                "subtitle": "",
                "items": [
                  "Mencatat hak, konsumsi, dan kewajiban."
                ],
                "takeaway": ""
              },
              {
                "title": "Laporan",
                "subtitle": "",
                "items": [
                  "Merangkum hasil pencatatan sesuai basis dan cakupannya."
                ],
                "takeaway": ""
              }
            ],
            "footer": "basis dan fokus mengarahkan pencatatan; dana, anggaran dan komitmen membantu pengendalian; pemicu transaksi menghubungkan pencatatan dengan laporan"
          },
          "caption": "Tentukan pemicu, entitas, dan laporan sebelum memilih jurnal. [PP 71/2010 Lamp.I KK par.15,42–45; Permendagri 64/2013 Lamp.II PDF 88,90,92–98; Konsep buku ASP]",
          "altText": "Basis, fokus, dana, anggaran, dan komitmen memiliki pertanyaan berbeda yang bertemu pada pencatatan dan laporan."
        },
        {
          "kind": "ul",
          "items": [
            "Basis menjawab **kapan** pengaruh transaksi diakui. Fokus pengukuran menjawab **apa** yang diukur dan dilaporkan.",
            "Dalam SAP akrual, LO dan Neraca memakai akrual; LRA mengikuti basis anggaran. Kas tetap menjadi dasar arus kas.",
            "Dua basis modifikasian adalah konsep teori dengan batas masing-masing. CTA Indonesia merupakan model historis yang dijelaskan tersendiri.",
            "Akuntansi dana memisahkan sumber daya menurut tujuan. Tiga kelompok dana versi buku AS tidak otomatis menjadi klasifikasi Indonesia.",
            "DPA mencatat rencana. Kontrak, serah terima, pembayaran, dan penyesuaian mempunyai pemicu berbeda.",
            "Encumbrance versi buku AS dicatat untuk kendali komitmen. Jurnal itu harus dibedakan dari beban atau aset dalam SAP.",
            "Debit yang sama dengan kredit baru satu pemeriksaan. Akun, waktu pengakuan, dan pengaruh laporannya juga harus benar."
          ]
        },
        {
          "kind": "callout",
          "variant": "gist",
          "compact": true,
          "title": "Kalau cuma sempat ingat satu hal:",
          "text": "kontrak, barang diterima, dan uang dibayar dapat terjadi pada tanggal berbeda dan menghasilkan catatan berbeda."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Inti (25 menit, termasuk visual dan self-check)"
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "1. Basis dan fokus: kapan, lalu apa? (5 menit) · Konsep buku ASP",
      "blocks": [
        {
          "kind": "p",
          "text": "Barang sudah diterima, tetapi pembayaran baru dilakukan bulan berikutnya. Apakah laporan harus menunggu kas keluar? Jawabannya bergantung pada laporan yang sedang disusun. Kamu juga perlu tahu apakah yang dinilai hanya sumber daya keuangan lancar atau seluruh sumber daya ekonomi."
        },
        {
          "kind": "p",
          "text": "**Basis akuntansi** menentukan waktu pengakuan. Basis kas mengakui pengaruh ketika kas diterima atau dibayar; akrual mengakui pengaruh transaksi dan peristiwa saat terjadi. Pengakuan akrual tetap memerlukan kriteria yang sesuai, sehingga tanda tangan kontrak tidak selalu berarti beban langsung timbul. [PSAP 01 par.8; KK par.42–45,73–75]"
        },
        {
          "kind": "table",
          "headers": [
            "Basis",
            "Pertanyaan pengakuan",
            "Batas atau kegunaan"
          ],
          "rows": [
            [
              "Kas",
              "Apakah kas sudah diterima atau dibayar?",
              "Arus kas jelas; hak/kewajiban tanpa kas perlu informasi tambahan"
            ],
            [
              "Kas modifikasian",
              "Penyesuaian apa yang ditambahkan pada dasar kas?",
              "Modifikasi ditentukan model; tidak ada satu definisi universal yang sama dengan CTA"
            ],
            [
              "Akrual modifikasian",
              "Untuk pendapatan dana, apakah measurable and available?",
              "Konsep dana pemerintahan versi buku AS, dengan aturan khusus belanja dan pos jangka panjang"
            ],
            [
              "Akrual",
              "Apakah hak, konsumsi sumber daya, atau kewajiban memenuhi kriteria?",
              "Meliputi aset, kewajiban, ekuitas, pendapatan dan beban tanpa menunggu kas"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[PSAP 01 par.8 untuk kas/akrual; Konsep buku ASP untuk dua modifikasian]"
        },
        {
          "kind": "p",
          "text": "**Measurable** berarti jumlah pendapatan dapat diukur. **Available** berarti tersedia untuk membiayai kewajiban periode berjalan menurut batas model dana yang dipakai. Hak yang dapat diukur belum otomatis memenuhi syarat available. Bab ini tidak menetapkan jumlah hari universal. [Konsep buku ASP; catatan kuliah TM06, hal. PDF 1–2]"
        },
        {
          "kind": "p",
          "text": "Kas modifikasian menitikberatkan penerimaan/pembayaran kas, dengan tambahan pengakuan yang dinyatakan model, misalnya aset tetap dan penyusutannya. Tambahan itu membedakannya dari kas murni, tetapi belum berarti seluruh hak/kewajiban memakai akrual penuh. Akrual modifikasian mengikuti cakupan dana serta syarat pengakuan khususnya. Sebutkan pos yang dimodifikasi dan batas model sebelum memilih jurnal. [Konsep buku ASP; catatan kuliah TM06 PDF 1–2]"
        },
        {
          "kind": "table",
          "headers": [
            "Fokus pengukuran",
            "Yang ingin diketahui",
            "Perlakuan konseptual versi buku AS"
          ],
          "rows": [
            [
              "Current financial resources",
              "Sumber daya keuangan lancar yang tersedia untuk periode berjalan",
              "Belanja modal dapat menjadi expenditure dana; aset tetap bukan pos neraca dana ini"
            ],
            [
              "Economic resources",
              "Seluruh sumber daya ekonomi dan kewajiban",
              "Aset tetap, kewajiban jangka panjang, serta penyusutan masuk pengukuran"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Istilah **fokus pengukuran** menjelaskan cakupan informasi, sedangkan basis menjelaskan waktunya. Pada governmental funds versi buku, fokus lancar berkaitan dengan akrual modifikasian. Pada proprietary/fiduciary funds, fokus ekonomi berkaitan dengan akrual. Hubungan ini tidak menjadi kewajiban memetakan semua laporan Indonesia ke kelompok dana AS. [Konsep buku ASP; catatan kuliah TM06, hal. PDF 2–4]"
        },
        {
          "kind": "figure",
          "title": "Basis versus Measurement Focus",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 578\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Basis versus Measurement Focus</title><desc>Empat basis teori dibedakan dari dua fokus, dengan CTA Indonesia ditampilkan sebagai model historis terpisah.</desc><defs><marker id=\"V-TM06-02-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"578\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Basis versus Measurement Focus</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Pilihan</text><path d=\"M276.25 127 V172 H32 V299 H276.25 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"683.75\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Pilihan</text><path d=\"M683.75 127 V172 H56 V299 H683.75 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M276.25 371 V416 H68 V177 H683.75 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"394\" text-anchor=\"middle\" font-size=\"12\">Teori AS: akrual modifikasian</text><path d=\"M462.5 342.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"412\" text-anchor=\"middle\" font-size=\"12\">Teori AS: akrual</text><path d=\"M480 493 V538 H32 V55 H276.25 V70\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Historis</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Basis: waktu pengakuan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Fokus: cakupan sumber daya</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Kas / kas modifikasian</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Current financial resources</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Akrual modifikasian / akrual</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Economic resources</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">CTA Indonesia: konteks historis tersendiri</tspan></text></svg>",
          "overview": {
            "heading": "Basis versus Measurement Focus",
            "cards": [
              {
                "title": "Basis: kapan?",
                "subtitle": "",
                "items": [
                  "Kas; kas modifikasian; akrual modifikasian; akrual."
                ],
                "takeaway": ""
              },
              {
                "title": "Fokus: apa?",
                "subtitle": "",
                "items": [
                  "Current financial resources: sumber daya keuangan kini.",
                  "Economic resources: sumber daya ekonomi."
                ],
                "takeaway": ""
              },
              {
                "title": "CTA historis Indonesia",
                "subtitle": "",
                "items": [
                  "Dibaca sebagai konteks historis tersendiri; jangan disamakan dengan basis/fokus pembanding AS."
                ],
                "takeaway": ""
              }
            ],
            "footer": "dua panel waktu dan cakupan; hubungan pasangan teori AS diberi label teori; CTA menjadi cabang historis, tanpa tanda sama dengan kas modifikasian"
          },
          "caption": "Waktu dan cakupan berbeda; definisi suatu model harus dijelaskan sebelum memakai jurnalnya. [PSAP 01 par.8; Konsep buku ASP; catatan kuliah TM06 PDF 1–4]",
          "altText": "Empat basis teori dibedakan dari dua fokus, dengan CTA Indonesia ditampilkan sebagai model historis terpisah."
        },
        {
          "kind": "p",
          "text": "**CTA**, atau cash toward accrual, memakai kas untuk pendapatan, belanja, dan pembiayaan, serta akrual untuk aset, kewajiban, dan ekuitas. Ini mencakup piutang atau aset lancar yang memenuhi pengakuan, sehingga tidak dibatasi hanya pos jangka panjang. Model itu dipakai sebagai pembanding historis, bukan dasar utama jurnal latihan TA 2025. [PP 71/2010 Ps.1 angka 9, Lamp.II]"
        },
        {
          "kind": "self-check",
          "question": "Pendapatan dana dapat diukur, tetapi tidak tersedia untuk membiayai kewajiban periode berjalan. Apakah otomatis diakui sebagai pendapatan pada akrual modifikasian versi buku?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Measurable dan available harus dibaca bersama sesuai aturan model dananya. Jangan menerapkan syarat dana AS sebagai aturan semua pendapatan SAP."
            }
          ],
          "signal": "Kamu membedakan syarat pendapatan dana, basis, dan fokus."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Definisikan basis sebagai kapan dan fokus sebagai apa; bandingkan dua fokus serta empat basis.\nJelaskan measurable and available dengan label versi buku; bedakan CTA Indonesia dari kas modifikasian."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "2. Akuntansi dana: sumber daya ini untuk siapa dan tujuan apa? (3 menit) · Konsep buku ASP",
      "blocks": [
        {
          "kind": "p",
          "text": "Satu organisasi mengelola dana layanan umum dan dana yang dititipkan untuk pihak lain. Keduanya perlu ditelusuri sesuai tujuan. **Akuntansi dana** memisahkan kelompok dana sehingga penerimaan, belanja, dan transfer dapat dikendalikan menurut tujuan. Kerangka Konseptual SAP membahas kemungkinan penggunaannya untuk pengendalian. [KK par.15]"
        },
        {
          "kind": "table",
          "headers": [
            "Kelompok dana versi buku AS",
            "Tujuan utama",
            "Basis/fokus konseptual"
          ],
          "rows": [
            [
              "Governmental",
              "Layanan pemerintahan dan pertanggungjawaban penggunaan dana",
              "Akrual modifikasian; current financial resources"
            ],
            [
              "Proprietary",
              "Kegiatan yang dikelola dengan pendekatan layanan usaha",
              "Akrual; economic resources"
            ],
            [
              "Fiduciary",
              "Sumber daya yang dikelola untuk pihak lain",
              "Akrual; economic resources, dengan batas tanggung jawab atas dana"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Tiga nama tersebut membantu membandingkan teori dalam buku. Dana bukan selalu satu rekening bank, dan tidak selalu sama dengan satu SKPD. Klasifikasi ini juga tidak membuat BLU Indonesia otomatis menjadi proprietary fund menurut aturan AS. Kerangka hukum dan standar tiap entitas tetap harus diperiksa. [Konsep buku ASP; KK par.15]"
        },
        {
          "kind": "p",
          "text": "Pada dana governmental versi buku, aset = kewajiban + saldo dana, dengan elemen sesuai fokus model. Saldo dana bukan saham pemilik; jangan menyamakannya otomatis dengan SAL Indonesia. [Konsep buku ASP; catatan kuliah TM06 PDF 3]"
        },
        {
          "kind": "figure",
          "title": "Fund Accounting: tiga tujuan dana versi buku AS",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 456\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Fund Accounting: tiga tujuan dana versi buku AS</title><desc>Tiga kelompok dana versi buku AS dipisahkan dari kemungkinan penggunaan akuntansi dana untuk pengendalian SAP.</desc><defs><marker id=\"V-TM06-03-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"456\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Fund Accounting: tiga tujuan dana versi buku AS</text><path d=\"M480 127 L208.33333333333331 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-03-arrow)\"/><path d=\"M480 127 L479.99999999999994 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-03-arrow)\"/><path d=\"M480 127 L751.6666666666666 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-03-arrow)\"/><path d=\"M480 371 V416 H56 V55 H480 V70\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"394\" text-anchor=\"middle\" font-size=\"12\">Bandingkan; bukan padanan otomatis</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">AS: tujuan dana</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Governmental funds</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Proprietary funds</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Fiduciary funds</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">SAP Indonesia: pengendalian kelompok dana; pembanding terpisah</tspan></text></svg>",
          "overview": {
            "heading": "Fund Accounting: tiga tujuan dana versi buku AS",
            "cards": [
              {
                "title": "Governmental funds",
                "subtitle": "",
                "items": [
                  "Kelompok dana pemerintahan dalam pembanding AS."
                ],
                "takeaway": ""
              },
              {
                "title": "Proprietary funds",
                "subtitle": "",
                "items": [
                  "Kelompok dana kegiatan usaha dalam pembanding AS."
                ],
                "takeaway": ""
              },
              {
                "title": "Fiduciary funds",
                "subtitle": "",
                "items": [
                  "Kelompok dana yang dititipkan dalam pembanding AS."
                ],
                "takeaway": ""
              },
              {
                "title": "SAP Indonesia",
                "subtitle": "",
                "items": [
                  "Tidak memetakan ketiga kelompok AS secara otomatis ke akun SAP."
                ],
                "takeaway": ""
              }
            ],
            "footer": "tujuan bercabang ke tiga kelompok versi buku AS; panel SAP sejajar sebagai pembanding, tanpa pemetaan otomatis"
          },
          "caption": "Dana ditelusuri berdasarkan tujuan dan tanggung jawab, dengan kerangka standar yang jelas. [Konsep buku ASP; catatan kuliah TM06 PDF 3–4; KK par.15 sebagai pembanding pengendalian SAP]",
          "altText": "Tiga kelompok dana versi buku AS dipisahkan dari kemungkinan penggunaan akuntansi dana untuk pengendalian SAP."
        },
        {
          "kind": "p",
          "text": "**Ilustrasi A, cara membaca:** Kabupaten Contoh memiliki kas yang mencakup titipan pihak ketiga. Kas itu tetap perlu dijelaskan bersama kewajiban kepada pemilik titipan. Membacanya sebagai seluruh dana bebas pakai akan menyesatkan. Kamu tidak perlu mengubah seluruh format SAP menjadi laporan fiduciary fund untuk menjelaskan titipan ini."
        },
        {
          "kind": "self-check",
          "question": "Apakah nama BLU sudah cukup untuk menetapkan kelompok proprietary fund dan mengganti SAP dengan model dana AS?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Nama dan kemiripan layanan tidak menentukan kesetaraan standar. Kelompok AS merupakan pembanding konsep; aturan entitas Indonesia tetap dibaca menurut kerangkanya."
            }
          ],
          "signal": "Kamu memisahkan tujuan dana dari standar wajib entitas."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Jelaskan pengendalian menurut tujuan, lalu bedakan governmental, proprietary, dan fiduciary versi buku AS.\nRujuk KK par.15 untuk SAP; jangan menyamakan satu dana dengan satu rekening atau BLU."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "3. Akuntansi anggaran: rencana bukan realisasi (4 menit) · Konsep buku ASP",
      "blocks": [
        {
          "kind": "p",
          "text": "DPA sudah disahkan. Apakah pengesahan membuat pemerintah menerima uang atau memperoleh aset? Pengesahan merekam estimasi dan otorisasi untuk membandingkan rencana dengan realisasi. **Akuntansi anggaran** mencatat rencana tersebut, tanpa pengakuan pendapatan-LO atau beban. [Permendagri 64/2013 Lamp.II C.2.a, PDF 88]"
        },
        {
          "kind": "table",
          "headers": [
            "Catatan",
            "Isi",
            "Pengaruh"
          ],
          "rows": [
            [
              "Anggaran",
              "Estimasi pendapatan, apropriasi belanja, estimasi perubahan SAL",
              "Merekam rencana dan otorisasi"
            ],
            [
              "Realisasi",
              "Pendapatan-LRA, belanja, pembiayaan",
              "Menjelaskan pelaksanaan anggaran"
            ],
            [
              "Finansial",
              "Pendapatan-LO, beban, aset, kewajiban, ekuitas",
              "Menjelaskan kinerja dan posisi keuangan"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "**Estimasi Perubahan SAL** adalah akun perantara dalam pola pencatatan anggaran/realisasi. Namanya tidak berarti setiap jurnal langsung mengubah saldo kas. Saldo SAL yang disajikan perlu ditelusuri melalui laporan serta penutupan yang sesuai. [Permendagri 64/2013 Lamp.II PDF 88; PSAP 01 par.41]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi A: Kabupaten Contoh, TA 2025.** Anggaran SKPD meliputi retribusi Rp130.850.000, barang/jasa Rp70.650.000, modal Rp100.750.000. Anggaran PPKD memuat penggunaan SAL Rp54.200.000 dan pembayaran pokok pinjaman Rp13.650.000. Angka latihan telah disahkan dalam DPA ilustratif; tidak ada kode akun atau tarif pemda riil."
        },
        {
          "kind": "p",
          "text": "Belanja SKPD = Rp70.650.000 + Rp100.750.000 = Rp171.400.000. Defisit rencana SKPD = Rp171.400.000 − Rp130.850.000 = Rp40.550.000. Pada pola defisit, selisih mendebit Estimasi Perubahan SAL agar jurnal anggaran seimbang. Langkah serta jurnal lengkap tersedia pada T01. [Permendagri 64/2013 Lamp.II PDF 88]"
        },
        {
          "kind": "figure",
          "title": "DPA, pencatatan, dan pembandingan",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 479\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>DPA, pencatatan, dan pembandingan</title><desc>DPA menghasilkan catatan rencana, transaksi menghasilkan realisasi, dan LRA membandingkan keduanya.</desc><defs><marker id=\"V-TM06-04-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"479\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">DPA, pencatatan, dan pembandingan</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-04-arrow)\"/><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-04-arrow)\"/><path d=\"M276.25 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-04-arrow)\"/><path d=\"M683.75 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-04-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">DPA / anggaran</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Dokumen transaksi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Estimasi pendapatan; apropriasi;</tspan><tspan x=\"276.25\" dy=\"23\">estimasi perubahan SAL</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Realisasi pendapatan, belanja,</tspan><tspan x=\"683.75\" dy=\"23\">pembiayaan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">LRA: anggaran versus realisasi</tspan></text></svg>",
          "overview": {
            "heading": "DPA, pencatatan, dan pembandingan",
            "cards": [
              {
                "title": "Anggaran",
                "subtitle": "",
                "items": [
                  "DPA → estimasi pendapatan, apropriasi, estimasi perubahan SAL."
                ],
                "takeaway": ""
              },
              {
                "title": "Realisasi",
                "subtitle": "",
                "items": [
                  "Dokumen transaksi → realisasi pendapatan, belanja, pembiayaan."
                ],
                "takeaway": ""
              },
              {
                "title": "LRA",
                "subtitle": "",
                "items": [
                  "Bandingkan kedua lajur. DPA bukan pemicu beban-LO."
                ],
                "takeaway": ""
              }
            ],
            "footer": "DPA → catatan anggaran; dokumen transaksi → catatan realisasi; keduanya bertemu di LRA; tidak ada panah DPA langsung ke beban"
          },
          "caption": "Rencana dan realisasi menjadi dua informasi yang dibandingkan, dengan pemicu masing-masing. [Permendagri 64 Lamp.II PDF 40–41,88; PSAP 02 par.7–13]",
          "altText": "DPA menghasilkan catatan rencana, transaksi menghasilkan realisasi, dan LRA membandingkan keduanya."
        },
        {
          "kind": "p",
          "text": "Pencatatan debit dan kredit tidak sendirian membuktikan anggaran cukup atau tindakan telah diotorisasi. Pengelola masih perlu memeriksa dokumen dan kewenangan. Jurnal yang seimbang dapat mencatat transaksi dengan akun atau tanggal yang salah. Karena itu, periksa alasan pengakuan sebelum memeriksa jumlahnya. [Konsep buku ASP; Permendagri 64 Lamp.II PDF 88,95]"
        },
        {
          "kind": "self-check",
          "question": "Saat DPA disahkan, apakah kamu mendebit Beban Barang/Jasa sebesar seluruh anggaran belanja?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. DPA dicatat sebagai rencana melalui akun anggaran. Beban memerlukan kejadian pengakuan finansial, bukan nilai otorisasi saja."
            }
          ],
          "signal": "Kamu mengenali akun anggaran tanpa mencampurnya dengan akun LO."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Pisahkan catatan anggaran, realisasi, dan finansial; jelaskan akun perantara serta sisi selisihnya.\nTunjukkan perhitungan defisit DPA, lalu gunakan jurnal pola SKPD yang sesuai dokumen."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "4. Kontrak, serah terima, pembayaran: tiga pemicu (5 menit) · Konsep buku ASP",
      "blocks": [
        {
          "kind": "p",
          "text": "Kontrak ditandatangani hari ini. Barang datang beberapa hari kemudian; pembayaran menyusul. Kamu perlu mencatat pengendalian pesanan tanpa mempercepat pengakuan aset atau beban. **Akuntansi komitmen** membantu menelusuri sumber daya yang sudah dipesan agar sisa otorisasi dapat dinilai. [Konsep buku ASP]"
        },
        {
          "kind": "table",
          "headers": [
            "Tahap pada pembelian biasa dalam contoh",
            "Jurnal versi buku AS",
            "Di SAP Indonesia"
          ],
          "rows": [
            [
              "PO/kontrak, barang belum diterima dan tidak ada uang muka",
              "Encumbrances / Reserve for Encumbrances untuk kendali anggaran",
              "Catatan komitmen; tidak ada jurnal finansial beban/utang pada kondisi ini"
            ],
            [
              "Barang/jasa diterima",
              "Balik encumbrance; catat expenditure dan kewajiban sesuai model dana",
              "Beban barang/jasa atau aset, dengan utang sesuai dokumen serah terima"
            ],
            [
              "Pembayaran",
              "Selesaikan kewajiban terhadap kas pada model dana",
              "SKPD melunasi utang ke RK PPKD untuk LS; realisasi belanja dicatat"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[Konsep buku ASP untuk kolom AS; KK par.73–75 dan Permendagri 64 Lamp.II PDF 92–96 untuk SAP]"
        },
        {
          "kind": "h3",
          "text": "Jurnal versi buku (fund accounting AS)"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi B:** gunakan nilai pesanan bahan yang sama dengan contoh A, Rp42.750.000. PO 7 April 2025 dibuat sebelum barang datang. Barang senilai tepat Rp42.750.000 diterima 14 April; tidak ada selisih harga. Ini latihan model dana AS, terpisah dari ledger Kabupaten Contoh."
        },
        {
          "kind": "p",
          "text": "Saat PO, jumlah komitmen = Rp42.750.000. Jurnal pengendaliannya seimbang: debit dan kredit sama-sama Rp42.750.000. Encumbrances adalah akun kendali anggaran pada model ini; namanya tidak menjadikannya beban-LO SAP."
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "07-04-2025",
              "account": "Encumbrances",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "07-04-2025",
              "account": "Reserve for Encumbrances",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Saat barang diterima, balik seluruh komitmen karena seluruh pesanan terpenuhi. Kemudian catat expenditure berdasarkan nilai barang diterima. Jurnal pembalik dan jurnal expenditure masing-masing mempunyai debit dan kredit Rp42.750.000. Saldo komitmen pesanan ini menjadi nol."
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "14-04-2025",
              "account": "Reserve for Encumbrances",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "14-04-2025",
              "account": "Encumbrances",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            },
            {
              "date": "14-04-2025",
              "account": "Expenditures",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "14-04-2025",
              "account": "Vouchers Payable",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "[Konsep buku ASP; catatan kuliah TM06, hal. PDF 5, dengan batas model AS]"
        },
        {
          "kind": "h3",
          "text": "Di SAP Indonesia"
        },
        {
          "kind": "p",
          "text": "Pada Ilustrasi A, pesanan peralatan Rp96.350.000 belum menjadi aset ketika kontrak baru ditandatangani. Saat peralatan diterima dan memenuhi pengakuan, SKPD mencatat aset serta utang. Saat pembayaran LS, SKPD memakai RK PPKD, sedangkan Kas Daerah berada pada PPKD/BUD. Jurnal lengkap T04–T05 memperlihatkan kedua tanggal tersebut. [Permendagri 64 Lamp.II PDF 95–96]"
        },
        {
          "kind": "figure",
          "title": "Commitment, Receipt, Payment",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 868\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Commitment, Receipt, Payment</title><desc>Garis waktu memisahkan pesanan dari serah terima, pembayaran, serta penyesuaian, dengan perlakuan AS dan SAP berdampingan.</desc><defs><marker id=\"V-TM06-05-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"868\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Commitment, Receipt, Payment</text><path d=\"M208.33333333333331 249 L208.33333333333331 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M208.33333333333331 371 L208.33333333333331 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M208.33333333333331 516 L208.33333333333331 581\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M208.33333333333331 661 L208.33333333333331 726\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M479.99999999999994 249 L479.99999999999994 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M479.99999999999994 371 L479.99999999999994 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M479.99999999999994 516 L479.99999999999994 581\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M479.99999999999994 661 L479.99999999999994 726\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M751.6666666666666 249 L751.6666666666666 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M751.6666666666666 371 L751.6666666666666 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M751.6666666666666 516 L751.6666666666666 581\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><path d=\"M751.6666666666666 661 L751.6666666666666 726\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-05-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Tahap</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">AS: pembanding</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">SAP Indonesia</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">DPA / anggaran</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Otorisasi anggaran</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Lajur anggaran</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">PO / kontrak</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"314\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Encumbrance</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"314\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Kendali komitmen</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Penerimaan</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"436\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Balik encumbrance; catat</tspan><tspan x=\"479.99999999999994\" dy=\"23\">kewajiban</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"436\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Aset / beban dan utang</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"581\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Pembayaran</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"581\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Lunasi kewajiban</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"581\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Kas / RK; realisasi</tspan><tspan x=\"751.6666666666666\" dy=\"23\">sesuai pemicu</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"726\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"755\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Akhir periode</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"726\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"755\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Penyesuaian sesuai model</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"726\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"755\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Persediaan / penyusutan</tspan></text></svg>",
          "overview": {
            "heading": "Commitment, Receipt, Payment",
            "cards": [
              {
                "title": "1. Anggaran",
                "subtitle": "",
                "items": [
                  "AS: otorisasi anggaran.",
                  "SAP: pencatatan lajur anggaran."
                ],
                "takeaway": ""
              },
              {
                "title": "2. Pesanan / kontrak",
                "subtitle": "",
                "items": [
                  "AS: encumbrance.",
                  "SAP: kendali komitmen; belum otomatis beban atau belanja-LRA."
                ],
                "takeaway": ""
              },
              {
                "title": "3. Penerimaan",
                "subtitle": "",
                "items": [
                  "AS: balik encumbrance dan catat kewajiban.",
                  "SAP: aset/beban serta utang sesuai objek."
                ],
                "takeaway": ""
              },
              {
                "title": "4. Pembayaran",
                "subtitle": "",
                "items": [
                  "AS: pelunasan kewajiban.",
                  "SAP: kas/RK dan realisasi menurut pemicu."
                ],
                "takeaway": ""
              },
              {
                "title": "5. Akhir periode",
                "subtitle": "",
                "items": [
                  "Penyesuaian persediaan dan penyusutan sesuai model masing-masing."
                ],
                "takeaway": ""
              }
            ],
            "footer": "garis waktu DPA → kontrak → serah terima → pembayaran → akhir periode; lajur AS dan SAP dipisahkan; beban/aset SAP mulai pada pengakuan, belanja pada pemicu realisasinya"
          },
          "caption": "Komitmen, pengakuan finansial, dan realisasi belanja mempunyai pemicu berbeda. [Konsep buku ASP; Permendagri 64 Lamp.II PDF 88,92–98]",
          "altText": "Garis waktu memisahkan pesanan dari serah terima, pembayaran, serta penyesuaian, dengan perlakuan AS dan SAP berdampingan."
        },
        {
          "kind": "table",
          "headers": [
            "Mekanisme SAP",
            "Sisi pembayaran SKPD",
            "Pemicu belanja-LRA"
          ],
          "rows": [
            [
              "LS dalam contoh",
              "Kredit RK PPKD setelah pelunasan utang",
              "Pengeluaran RKUD sesuai SP2D pada contoh"
            ],
            [
              "UP",
              "Kredit Kas di Bendahara Pengeluaran saat membayar",
              "Pertanggungjawaban pengeluaran disahkan fungsi perbendaharaan"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "UP yang masuk ke bendahara belum menjadi belanja hanya karena kas berpindah. Kasus C pada T11 menunjukkan pembayaran dan pengesahan pertanggungjawaban pada tanggal berbeda. Transfer internal juga tidak menciptakan pendapatan pemerintah baru. [PSAP 02 par.31–32; Permendagri 64 Lamp.II PDF 92–93]"
        },
        {
          "kind": "self-check",
          "question": "Apakah Dr Encumbrances / Cr Reserve for Encumbrances merupakan jurnal beban SAP yang wajib saat setiap kontrak ditandatangani?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Itu jurnal kendali versi buku AS. Pada pembelian biasa contoh SAP, kontrak dicatat untuk kendali; pengakuan finansial bergantung serah terima dan kriteria, lalu realisasi mengikuti pemicunya."
            }
          ],
          "signal": "Kamu menyebut model dan pemicu, lalu membedakan jurnal kendali dari beban."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Tulis tiga tahap jurnal encumbrance versi buku: PO, pembalikan, expenditure saat barang diterima.\nSandingkan dengan SAP: kontrak, pengakuan beban/aset dan utang, pembayaran LS/UP, serta belanja-LRA."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "5. Penyesuaian: berapa yang benar-benar dipakai? (5 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Barang dibeli sepanjang tahun. Sebagian masih ada di gudang pada akhir tahun. Jika semua pembelian tetap menjadi beban, laporan akan mengabaikan persediaan yang masih memberi manfaat. Kamu perlu menghubungkan saldo awal, pembelian, pemakaian, dan hasil opname. [PSAP 05 par.13–16,22–25]"
        },
        {
          "kind": "table",
          "headers": [
            "Tahap penilaian",
            "Aturan atau pilihan pada contoh"
          ],
          "rows": [
            [
              "Persediaan awal",
              "Aset yang belum dipakai; nilai awal tersedia dalam dataset"
            ],
            [
              "Perolehan",
              "Biaya perolehan; metode beban/periodik pada Ilustrasi A"
            ],
            [
              "Akhir periode",
              "Sesuaikan dengan hasil inventarisasi fisik"
            ],
            [
              "Pemakaian periodik",
              "Saldo awal + perolehan − saldo akhir, dengan basis penilaian konsisten"
            ],
            [
              "Alternatif perpetual",
              "Pemakaian mengikuti catatan unit yang digunakan dan nilai unit"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Dalam Ilustrasi A, persediaan awal Rp8.450.000 dan pembelian Rp42.750.000. Stok akhir menurut opname bernilai Rp11.650.000. Maka beban pemakaian = Rp8.450.000 + Rp42.750.000 − Rp11.650.000 = **Rp39.550.000**. Biaya di soal sudah memasukkan seluruh biaya perolehan yang diperlukan. [Ilustrasi; PSAP 05 par.15–17,22–25]"
        },
        {
          "kind": "p",
          "text": "Metode beban/periodik dan metode aset/perpetual memerlukan alur berbeda. Pada contoh periodik, saldo awal dipindahkan ke beban, pembelian dicatat sebagai beban, kemudian stok akhir diakui kembali. Jangan menambah stok akhir sambil membiarkan seluruh saldo awal tetap sebagai aset. Itu akan menghitung aset dua kali. [PSAP 05 par.22–25; Permendagri 64 Lamp.II PDF 97–98]"
        },
        {
          "kind": "p",
          "text": "Peralatan juga tidak seluruhnya menjadi beban ketika dibeli. Aset tetap berwujud memiliki masa manfaat lebih dari 12 bulan, biaya yang dapat diukur andal, tidak dimaksudkan dijual dalam operasi normal, dan diperoleh untuk digunakan. Pengakuannya mensyaratkan manfaat ekonomi masa depan dapat diperoleh serta nilai dapat diukur andal. [PSAP 07 par.15–16]"
        },
        {
          "kind": "p",
          "text": "Biaya perolehan diakui sebagai aset jika kriteria terpenuhi; nilai tercatat berikutnya memperhitungkan akumulasi penyusutan. Beban penyusutan mengalokasikan pemakaian manfaat sesuai metode dan masa manfaat yang ditetapkan. Tanah dan konstruksi dalam pengerjaan dikecualikan dari penyusutan. [PSAP 07 par.15–16,23–24,52–58]"
        },
        {
          "kind": "p",
          "text": "**Kebijakan Ilustrasi A:** garis lurus, nilai residu nol; peralatan lama berbiaya Rp240.600.000 berumur 10 tahun. Peralatan baru Rp96.350.000 berumur 5 tahun, siap dipakai 5 Januari; kebijakan soal memulai penyusutan pada bulan siap digunakan. Keduanya dihitung 12 bulan pada TA 2025. Umur tersebut adalah asumsi latihan, bukan umur wajib semua aset pemerintah."
        },
        {
          "kind": "p",
          "text": "Penyusutan lama = Rp240.600.000 ÷ 10 = Rp24.060.000. Penyusutan baru = Rp96.350.000 ÷ 5 = Rp19.270.000. Total beban tahun ini **Rp43.330.000**. Akumulasi akhir = Rp72.180.000 + Rp43.330.000 = Rp115.510.000; nilai peralatan bersih = Rp336.950.000 − Rp115.510.000 = Rp221.440.000. [Ilustrasi; PSAP 07 par.52–58]"
        },
        {
          "kind": "figure",
          "title": "Adjusting Entries: dari data ke saldo akhir",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 479\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Adjusting Entries: dari data ke saldo akhir</title><desc>Penyesuaian persediaan menghitung pemakaian, sedangkan penyusutan mengalokasikan manfaat aset dan mengurangi nilai bersihnya.</desc><defs><marker id=\"V-TM06-06-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"479\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Adjusting Entries: dari data ke saldo akhir</text><path d=\"M276.25 150 L276.25 215\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-06-arrow)\"/><path d=\"M276.25 272 L276.25 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-06-arrow)\"/><path d=\"M683.75 150 L683.75 215\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-06-arrow)\"/><path d=\"M683.75 272 L683.75 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-06-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Persediaan awal + pembelian − persediaan</tspan><tspan x=\"276.25\" dy=\"23\">akhir</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Biaya aset dan kebijakan penyusutan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"215\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"244\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pemakaian / beban persediaan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"215\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"244\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Beban penyusutan dan akumulasi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">LO: konsumsi persediaan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"337\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">LO: beban; Neraca: akumulasi</tspan></text></svg>",
          "overview": {
            "heading": "Adjusting Entries: dari data ke saldo akhir",
            "cards": [
              {
                "title": "Persediaan",
                "subtitle": "",
                "items": [
                  "8.450.000 + 42.750.000 − 11.650.000 = 39.550.000 beban."
                ],
                "takeaway": ""
              },
              {
                "title": "Penyusutan",
                "subtitle": "",
                "items": [
                  "24.060.000 + 19.270.000 = 43.330.000 beban.",
                  "Akumulasi akhir: 72.180.000 + 43.330.000 = 115.510.000.",
                  "Nilai tercatat akhir: 336.950.000 − 115.510.000 = 221.440.000."
                ],
                "takeaway": ""
              }
            ],
            "footer": "awal + perolehan − akhir → beban pemakaian; biaya dan kebijakan → penyusutan → beban LO serta akumulasi Neraca"
          },
          "caption": "Belanja tahun berjalan berbeda dari konsumsi manfaat yang menjadi beban. [PSAP 05 par.22–25; PSAP 07 par.52–58; Permendagri 64 Lamp.II PDF 97–98]",
          "altText": "Penyesuaian persediaan menghitung pemakaian, sedangkan penyusutan mengalokasikan manfaat aset dan mengurangi nilai bersihnya."
        },
        {
          "kind": "p",
          "text": "CaLK menjelaskan dasar pengukuran dan kebijakan penting agar pembaca dapat menafsirkan nilai. Dasar pengukuran ada pada PSAP 01 paragraf 108–111; paragraf 102 berkaitan dengan ilustrasi LPE. Menyebut nomor paragraf yang tepat membantu menjaga jawabanmu tetap bisa ditelusuri. [PSAP 01 par.102,108–111]"
        },
        {
          "kind": "self-check",
          "question": "Mengapa Rp42.750.000 pembelian bahan pada contoh tidak langsung menjadi beban pemakaian final?",
          "answer": [
            {
              "kind": "p",
              "text": "Pemakaian periodik juga memperhitungkan persediaan awal Rp8.450.000 dan stok akhir Rp11.650.000. Beban final Rp39.550.000; stok akhir tetap aset."
            }
          ],
          "signal": "Kamu memakai tiga input, lalu membedakan beban LO dan persediaan Neraca."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Tetapkan metode, hitung pemakaian atau penyusutan, tulis jurnal, lalu jelaskan LO dan Neracanya.\nSebut pengecualian tanah/KDP serta kebijakan CaLK; umur aset berasal dari asumsi soal."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "6. Dua jalur pencatatan, satu paket laporan (3 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Di akhir tahun, kamu melihat pendapatan kas berbeda dari pendapatan-LO. Selisih itu perlu dijelaskan. Piutang, stok, dan utang dapat mengubah laporan finansial tanpa mengubah kas pada saat yang sama. Jangan menyamakan SAL, kas, dan ekuitas hanya karena semuanya berupa saldo."
        },
        {
          "kind": "table",
          "headers": [
            "Laporan",
            "Basis atau fungsi pada contoh",
            "Yang ditelusuri"
          ],
          "rows": [
            [
              "LRA",
              "Kas sesuai anggaran contoh",
              "Pendapatan, belanja, pembiayaan dan SiLPA"
            ],
            [
              "LPSAL",
              "Perubahan saldo anggaran",
              "SAL awal, penggunaan, SiLPA, koreksi dan akhir"
            ],
            [
              "LO",
              "Akrual",
              "Pendapatan serta konsumsi/beban"
            ],
            [
              "LPE",
              "Perubahan ekuitas",
              "Ekuitas awal, hasil LO, koreksi dan akhir"
            ],
            [
              "Neraca",
              "Akrual",
              "Aset, kewajiban dan ekuitas pada tanggal laporan"
            ],
            [
              "LAK",
              "Arus kas",
              "Operasi, investasi, pendanaan, transitoris"
            ],
            [
              "CaLK",
              "Penjelasan lintas laporan",
              "Kebijakan, rincian, hubungan dan batas informasi"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "LRA mengikuti basis yang ditetapkan peraturan anggaran. Kerangka Konseptual juga menjelaskan keadaan jika anggaran disusun dengan akrual. Untuk dataset ini, anggaran memakai kas. Paket SAP akrual tetap mempunyai LAK berbasis arus kas; nama paket tidak mengubah sifat tiap laporan. [PSAP 01 par.5–8,14–15; KK par.42–45]"
        },
        {
          "kind": "figure",
          "title": "Basis and Statements: tujuh fungsi laporan",
          "overview": {
            "heading": "Basis and Statements: tujuh fungsi laporan",
            "cards": [
              {
                "title": "LRA",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Kas sesuai anggaran contoh",
                  "Yang ditelusuri: Pendapatan, belanja, pembiayaan dan SiLPA"
                ],
                "takeaway": ""
              },
              {
                "title": "LPSAL",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Perubahan saldo anggaran",
                  "Yang ditelusuri: SAL awal, penggunaan, SiLPA, koreksi dan akhir"
                ],
                "takeaway": ""
              },
              {
                "title": "LO",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Akrual",
                  "Yang ditelusuri: Pendapatan serta konsumsi/beban"
                ],
                "takeaway": ""
              },
              {
                "title": "LPE",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Perubahan ekuitas",
                  "Yang ditelusuri: Ekuitas awal, hasil LO, koreksi dan akhir"
                ],
                "takeaway": ""
              },
              {
                "title": "Neraca",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Akrual",
                  "Yang ditelusuri: Aset, kewajiban dan ekuitas pada tanggal laporan"
                ],
                "takeaway": ""
              },
              {
                "title": "LAK",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Arus kas",
                  "Yang ditelusuri: Operasi, investasi, pendanaan, transitoris"
                ],
                "takeaway": ""
              },
              {
                "title": "CaLK",
                "subtitle": "",
                "items": [
                  "Basis atau fungsi pada contoh: Penjelasan lintas laporan",
                  "Yang ditelusuri: Kebijakan, rincian, hubungan dan batas informasi"
                ],
                "takeaway": ""
              }
            ],
            "footer": "anggaran ke LRA/LPSAL; akrual ke LO/LPE/Neraca; kas ke LAK; CaLK menjelaskan seluruh kelompok; tidak ada tanda semua laporan akrual"
          },
          "caption": "Pilih basis serta fungsi tiap laporan, lalu telusuri hubungannya. [PSAP 01 par.5–8,14–15,41,100–102; PSAP 03; Ilustrasi A]",
          "altText": "Matriks memisahkan laporan anggaran, finansial, arus kas, dan penjelasan kebijakan."
        },
        {
          "kind": "p",
          "text": "**Update 2026.** PSAP 18 berlaku untuk laporan TA 2026. Dataset memakai TA 2025 dan mengasumsikan tidak ada penerapan dini, sehingga PSAP 18 tidak digunakan dalam contoh. Latihan ini memuat retribusi, tanpa transaksi pajak. [PSAP 18 par.115]"
        },
        {
          "kind": "p",
          "text": "Dataset A menghasilkan surplus-LO Rp23.120.000, SiLPA Rp1.450.000, SAL akhir Rp52.650.000, serta kas Rp73.000.000. Kas mencakup titipan PFK Rp20.350.000 yang menjadi kewajiban dan tidak tersedia sebagai SAL. Ekuitas akhir Rp291.740.000 berasal dari ekuitas awal ditambah surplus-LO. Seluruh perbedaan itu dijelaskan dalam CaLK ilustratif, bukan dipaksa menjadi nilai sama."
        },
        {
          "kind": "figure",
          "title": "Three Bridges: hasil, saldo anggaran, kas",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 647\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Three Bridges: hasil, saldo anggaran, kas</title><desc>Tiga jalur menunjukkan perubahan ekuitas, SAL, dan kas dengan nilai akhir berbeda serta alasan PFK.</desc><defs><marker id=\"V-TM06-08-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"647\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Three Bridges: hasil, saldo anggaran, kas</text><path d=\"M208.33333333333331 127 L208.33333333333331 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-08-arrow)\"/><path d=\"M208.33333333333331 295 L208.33333333333331 360\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-08-arrow)\"/><path d=\"M479.99999999999994 127 L479.99999999999994 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-08-arrow)\"/><path d=\"M479.99999999999994 295 L479.99999999999994 360\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-08-arrow)\"/><path d=\"M751.6666666666666 127 L751.6666666666666 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-08-arrow)\"/><path d=\"M751.6666666666666 295 L751.6666666666666 360\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-08-arrow)\"/><path d=\"M480 562 V607 H32 V345 H479.99999999999994 V360\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"585\" text-anchor=\"middle\" font-size=\"12\">Menjelaskan</text><path d=\"M480 562 V607 H44 V345 H751.6666666666666 V360\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">LO: surplus 23.120.000</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">LRA: SiLPA 1.450.000</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">LAK: perubahan kas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"103\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">LPE: awal 268.620.000 +</tspan><tspan x=\"208.33333333333331\" dy=\"23\">surplus</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"103\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">LPSAL: awal 105.400.000</tspan><tspan x=\"479.99999999999994\" dy=\"23\">− penggunaan 54.200.000</tspan><tspan x=\"479.99999999999994\" dy=\"23\">+ SiLPA</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"103\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Kas awal 125.750.000 −</tspan><tspan x=\"751.6666666666666\" dy=\"23\">penurunan 52.750.000</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"360\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"389\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Ekuitas akhir</tspan><tspan x=\"208.33333333333331\" dy=\"23\">291.740.000</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"360\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"389\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">SAL akhir 52.650.000</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"360\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"389\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Kas akhir 73.000.000</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"505\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"534\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">CaLK: PFK 20.350.000 menjelaskan selisih kas / SAL pada dataset</tspan></text></svg>",
          "overview": {
            "heading": "Three Bridges: hasil, saldo anggaran, kas",
            "cards": [
              {
                "title": "LO → LPE → ekuitas Neraca",
                "subtitle": "",
                "items": [
                  "268.620.000 + 23.120.000 = 291.740.000."
                ],
                "takeaway": ""
              },
              {
                "title": "LRA → LPSAL → SAL",
                "subtitle": "",
                "items": [
                  "105.400.000 − 54.200.000 + 1.450.000 = 52.650.000."
                ],
                "takeaway": ""
              },
              {
                "title": "LAK → kas Neraca",
                "subtitle": "",
                "items": [
                  "125.750.000 − 52.750.000 = 73.000.000."
                ],
                "takeaway": ""
              },
              {
                "title": "CaLK: batas dataset",
                "subtitle": "",
                "items": [
                  "Kas − SAL = PFK 20.350.000 sesuai asumsi soal; bukan rumus universal."
                ],
                "takeaway": ""
              }
            ],
            "footer": "LO → LPE → ekuitas Neraca; SiLPA → LPSAL setelah penggunaan SAL; LAK → kas Neraca; kas dikurangi PFK direkonsiliasi ke SAL hanya pada asumsi dataset"
          },
          "caption": "Hasil LO, SiLPA, dan perubahan kas mempunyai jembatan masing-masing. [PSAP 01 par.41,100–102; PSAP 02 par.58–62; Ilustrasi A]",
          "altText": "Tiga jalur menunjukkan perubahan ekuitas, SAL, dan kas dengan nilai akhir berbeda serta alasan PFK."
        },
        {
          "kind": "p",
          "text": "Tujuh laporan dibahas dari sudut pemda konsolidasi. Jurnal latihan tetap menyebut SKPD atau PPKD; akun timbal balik RK dieliminasi pada worksheet konsolidasi. SKPD sendiri tidak otomatis menyusun LAK dan LPSAL seperti pemda. Pembagian komponen mengikuti fungsi entitas. [PSAP 01 par.14–15; Permendagri 64 Lamp.II PDF 71–73]"
        },
        {
          "kind": "self-check",
          "question": "Apakah SiLPA Rp1.450.000 harus sama dengan SAL akhir Rp52.650.000 atau kas Rp73.000.000 pada dataset?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. SAL akhir juga memperhitungkan SAL awal dan penggunaan. Kas mencakup PFK Rp20.350.000 yang tidak tersedia dalam SAL contoh. Hubungan tiap saldo harus ditelusuri."
            }
          ],
          "signal": "Kamu menyebut asal selisih tanpa menyamakan SAL dengan ekuitas."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Pilih laporan serta entitas, lalu telusuri LO → LPE → Neraca, SiLPA → LPSAL, dan LAK → kas Neraca.\nJelaskan perbedaan hasil dengan data dan kebijakan; jangan membuat satu persamaan kas/LO untuk semua keadaan."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "P-01. Korolari CTA sebagai pembanding historis",
      "blocks": [
        {
          "kind": "p",
          "text": "Buletin Teknis KSAP 09 menjelaskan jurnal pendamping untuk membawa peralatan ke Neraca pada model historis. Nama akun ekuitasnya **Diinvestasikan dalam Aset Tetap**. Pola ini dibaca bersama pencatatan belanja; tidak digunakan untuk menambah ekuitas pada pengadaan aset SAP akrual contoh A. Bultek 09 telah diganti Bultek 15 tentang aset tetap berbasis akrual. [Bultek 09, Bab III B, PDF 17/cetak10; daftar Buletin Teknis KSAP]"
        },
        {
          "kind": "p",
          "text": "**Pola SKPD, belanja historis:**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "Tanggal realisasi historis",
              "account": "Belanja Modal Peralatan dan Mesin",
              "debit": "x",
              "credit": "0"
            },
            {
              "date": "Tanggal yang sama",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "x",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "**Pola BUD, pengeluaran kas historis:**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "Tanggal realisasi historis",
              "account": "RK SKPD",
              "debit": "x",
              "credit": "0"
            },
            {
              "date": "Tanggal yang sama",
              "account": "Kas Umum Daerah",
              "debit": "0",
              "credit": "x",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "**Pola SKPD, jurnal pendamping perolehan:**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "Tanggal pengakuan perolehan historis",
              "account": "Peralatan dan Mesin",
              "debit": "x",
              "credit": "0"
            },
            {
              "date": "Tanggal yang sama",
              "account": "Diinvestasikan dalam Aset Tetap",
              "debit": "0",
              "credit": "x",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "x ialah nilai perolehan yang memenuhi pengakuan; sumber memberikan pola XXX. Debit = kredit = x. Tabel ini pola bersumber, tanpa angka atau transaksi baru. Dalam SAP akrual, kredit lawan aset pada penerimaan contoh A ialah utang, kemudian dilunasi sesuai mekanisme."
        },
        {
          "kind": "figure",
          "title": "CTA Historical versus Accrual SAP",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 479\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>CTA Historical versus Accrual SAP</title><desc>CTA memakai jurnal pendamping terhadap ekuitas dana investasi, sedangkan contoh akrual memakai utang dan pelunasannya.</desc><defs><marker id=\"V-TM06-09-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"479\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">CTA Historical versus Accrual SAP</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-09-arrow)\"/><path d=\"M276.25 249 L276.25 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-09-arrow)\"/><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-09-arrow)\"/><path d=\"M683.75 249 L683.75 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM06-09-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">CTA: historis</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">SAP akrual: kini</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Belanja + jurnal pendamping</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Terima aset dan kewajiban</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Dr Peralatan dan Mesin; Cr</tspan><tspan x=\"276.25\" dy=\"23\">Diinvestasikan dalam Aset Tetap</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Lunasi utang; catat realisasi sesuai</tspan><tspan x=\"683.75\" dy=\"23\">pemicu</tspan></text></svg>",
          "overview": {
            "heading": "CTA Historical versus Accrual SAP",
            "cards": [
              {
                "title": "CTA historis",
                "subtitle": "",
                "items": [
                  "Belanja dan jurnal pendamping: debit Peralatan, kredit Diinvestasikan dalam Aset Tetap."
                ],
                "takeaway": ""
              },
              {
                "title": "SAP akrual",
                "subtitle": "",
                "items": [
                  "Penerimaan aset → aset dan kewajiban.",
                  "Pembayaran → pelunasan utang; lajur realisasi terpisah."
                ],
                "takeaway": ""
              }
            ],
            "footer": "dua panel sejajar dengan label waktu/model; jurnal ekuitas historis tidak disambungkan ke ledger akrual"
          },
          "caption": "Akun lawan aset bergantung pada model; jurnal historis tidak ditambahkan ke pengadaan akrual. [Bultek 09 Bab III B PDF 17/cetak10; Permendagri 64 Lamp.II PDF 95; daftar KSAP Bultek 09 diganti15]",
          "altText": "CTA memakai jurnal pendamping terhadap ekuitas dana investasi, sedangkan contoh akrual memakai utang dan pelunasannya."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "P-02. Sewa dibayar di muka dan batas sistem",
      "blocks": [
        {
          "kind": "p",
          "text": "Jika manfaat sewa meliputi periode berikutnya, bagian yang belum dikonsumsi tetap aset dibayar di muka. Pada periode pemakaian, bagian yang dikonsumsi dipindah ke Beban Sewa. Perjanjian dan periode manfaat menentukan bagiannya. [Permendagri 64 Lamp.II PDF 93,98]"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "Akhir periode pemakaian",
              "account": "Beban Sewa",
              "debit": "y",
              "credit": "0"
            },
            {
              "date": "Akhir periode pemakaian",
              "account": "Beban Jasa Dibayar di Muka",
              "debit": "0",
              "credit": "y",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "y ialah bagian biaya sewa yang dipakai dalam periode, dihitung dari jadwal perjanjian. Sumber memberi pola XXX; bab ini mempertahankan pola tanpa menambah kasus angka sewa ke dataset."
        },
        {
          "kind": "p",
          "text": "Kontrol aplikasi dapat mencatat kontrak dan dokumen serah terima. Fungsi kendali itu berbeda dari pengakuan beban/utang. Untuk soal, jelaskan dokumen, entitas, serta kondisi transaksi; jangan menganggap seluruh pola sistem pusat sama dengan jurnal SKPD daerah."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "latihan",
      "title": "Persiapan ujian",
      "blocks": [
        {
          "kind": "h3",
          "text": "Jangan tertukar"
        },
        {
          "kind": "table",
          "headers": [
            "Pasangan",
            "Pembeda"
          ],
          "rows": [
            [
              "Basis dan fokus",
              "Kapan diakui dan apa yang diukur"
            ],
            [
              "Kas modifikasian dan CTA",
              "Istilah teori yang perlu batas model dan model historis Indonesia"
            ],
            [
              "Measurable dan available",
              "Jumlah dapat diukur dan tersedia menurut aturan dana"
            ],
            [
              "Dana dan rekening",
              "Kelompok sumber daya menurut tujuan dan tempat kas disimpan"
            ],
            [
              "DPA dan transaksi",
              "Rencana disahkan dan kejadian pengakuan/realisasi"
            ],
            [
              "Encumbrance dan beban SAP",
              "Kendali versi buku AS dan konsumsi/kewajiban finansial"
            ],
            [
              "RK PPKD dan Kas Daerah",
              "Akun timbal balik SKPD dan kas yang dicatat PPKD"
            ],
            [
              "Belanja dan beban",
              "Realisasi anggaran dan konsumsi/manfaat/kewajiban"
            ],
            [
              "UP diterima dan belanja UP",
              "Transfer internal dan pengeluaran yang pertanggungjawaban pengeluarannya disahkan"
            ],
            [
              "SAL, kas, ekuitas",
              "Saldo anggaran, aset kas, dan kekayaan bersih"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "h3",
          "text": "Dataset latihan"
        },
        {
          "kind": "p",
          "text": "Semua angka A adalah **Ilustrasi Kabupaten Contoh TA 2025**, satuan rupiah. Awal Neraca 1 Januari: kas Rp125.750.000; persediaan Rp8.450.000; peralatan Rp240.600.000; akumulasi penyusutan Rp72.180.000; bagian lancar pokok pinjaman Rp13.650.000; utang PFK Rp20.350.000. Ekuitas awal = aset Rp302.620.000 − kewajiban Rp34.000.000 = **Rp268.620.000**. SAL awal Rp105.400.000 tersedia di luar kas titipan PFK."
        },
        {
          "kind": "table",
          "headers": [
            "Transaksi/penyesuaian A",
            "Nominal (Rp)",
            "Pemicu atau asumsi"
          ],
          "rows": [
            [
              "Retribusi tunai tahun berjalan",
              "118.650.000",
              "Diterima 4 Maret, disetor 5 Maret"
            ],
            [
              "Hak retribusi akhir tahun",
              "12.850.000",
              "SKR memenuhi hak, kas belum diterima"
            ],
            [
              "Bahan persediaan LS",
              "42.750.000",
              "BAST 7 April, dibayar 14 April"
            ],
            [
              "Jasa LS telah dikonsumsi",
              "18.650.000",
              "BAST 2 Juni, dibayar 9 Juni"
            ],
            [
              "Jasa akhir tahun telah dikonsumsi",
              "6.850.000",
              "BAST 20 Desember, belum dibayar"
            ],
            [
              "Peralatan LS",
              "96.350.000",
              "Kontrak 3 Januari, BAST/siap pakai 5 Januari, bayar 10 Januari"
            ],
            [
              "Pembayaran pokok pinjaman",
              "13.650.000",
              "PPKD 15 Januari; tidak ada bunga pada asumsi soal"
            ],
            [
              "Penggunaan SAL tahun lalu",
              "54.200.000",
              "Sesuai DPA; pembiayaan LRA tanpa kas masuk baru"
            ],
            [
              "Persediaan akhir",
              "11.650.000",
              "Opname 31 Desember, basis biaya konsisten"
            ],
            [
              "Penyusutan lama dan baru",
              "43.330.000",
              "Garis lurus, umur 10/5 tahun, residu 0, 12 bulan"
            ]
          ],
          "align": [
            "left",
            "right",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Tidak ada transaksi lain, pajak, potongan, bunga, penyisihan piutang, uang muka, atau koreksi dalam A. PFK awal tetap Rp20.350.000. Kasus B versi buku AS dan C mekanisme UP adalah latihan terisolasi, sehingga tidak dijumlahkan ke dataset A. Data arus tahun pembanding tidak disediakan; potongan laporan latihan diberi batas tersebut."
        },
        {
          "kind": "h3",
          "text": "Latihan lengkap"
        },
        {
          "kind": "p",
          "text": "Komposisi belajar: 6 esai (30%), 11 jurnal/perlakuan (55%), 3 membaca/menyusun laporan (15%). Bentuk UTS belum diketahui. Soal dan penyelesaian berikut memakai tiga Ilustrasi A/B/C di atas."
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "E01. Waktu dan cakupan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Bandingkan basis dengan fokus pengukuran. Sebut dua fokus versi buku AS dan jelaskan mengapa aset tetap dapat diperlakukan berbeda."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Basis menentukan kapan pengaruh diakui, fokus menentukan sumber daya yang diukur. Current financial resources menilai sumber daya keuangan lancar; economic resources mencakup sumber daya ekonomi serta kewajiban. Belanja modal dapat menjadi expenditure dalam dana berfokus lancar, sedangkan fokus ekonomi menyajikan aset tetap dan penyusutannya. Ini perbandingan versi buku AS; jangan memindahkan klasifikasinya langsung ke semua laporan SAP. [Konsep buku ASP; KK par.42–45]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E02. Dua basis modifikasian",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Jelaskan kas modifikasian, akrual modifikasian, measurable and available, serta posisi CTA Indonesia. Apakah hak yang dapat diukur sudah cukup?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Kas modifikasian menambah penyesuaian yang dinyatakan model pada dasar kas. Akrual modifikasian versi dana AS memakai aturan khusus; pendapatan harus dapat diukur dan tersedia membiayai kewajiban periode berjalan menurut modelnya. Hak yang dapat diukur belum cukup tanpa available. CTA Indonesia ialah kas untuk pendapatan/belanja/pembiayaan serta akrual untuk aset/kewajiban/ekuitas, termasuk aset lancar yang memenuhi kriteria. CTA tidak otomatis sinonim kas modifikasian. [Konsep buku ASP; PP 71/2010 Ps.1 angka 9]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E03. Dana, rekening, dan BLU",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Sebut tiga kelompok dana versi buku AS, tujuan serta pasangan basis/fokusnya. Jelaskan hubungan pengendalian dana dengan KK par.15 dan batas pemetaan BLU."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Governmental berkaitan layanan pemerintahan, akrual modifikasian dan fokus keuangan lancar. Proprietary berkaitan kegiatan layanan usaha, akrual dan fokus ekonomi. Fiduciary mengelola untuk pihak lain, akrual dan fokus ekonomi dengan batas tanggung jawab dana. KK par.15 memungkinkan akuntansi dana untuk pengendalian tujuan. Satu dana tidak selalu satu rekening; BLU tidak otomatis proprietary fund yang mengganti standar Indonesia. [Konsep buku ASP; KK par.15]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E04. Rencana dan transaksi",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** DPA, kontrak, BAST, dan pembayaran memiliki fungsi apa? Jelaskan mengapa jurnal seimbang belum membuktikan kebenaran perlakuan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** DPA mengotorisasi rencana; kontrak mengikat komitmen; BAST menunjukkan penyerahan sesuai kondisi pengakuan; pembayaran melunasi kewajiban atau membayar konsumsi. Pada pembelian biasa tanpa uang muka, kontrak belum menjurnal beban/utang SAP. Saat serah terima, nilai menjadi beban atau aset dan utang; pembayaran LS memicu pelunasan serta belanja. Debit = kredit hanya mengecek jumlah. Akun, entitas, tanggal, dokumen dan kewenangan perlu dinilai. [Permendagri 64 Lamp.II PDF 88,92–96; KK par.73–75]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E05. Encumbrance versus SAP",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Tanpa membuat angka baru, tulis urutan akun versi buku AS sejak PO sampai barang diterima. Sandingkan dengan SAP serta korolari CTA historis."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pada PO: Dr Encumbrances, Cr Reserve for Encumbrances. Saat barang diterima: Dr Reserve for Encumbrances, Cr Encumbrances untuk pembalikan; lalu Dr Expenditures, Cr Vouchers Payable sesuai model dana. Ilustrasi B pada Inti memperlihatkan angka dan tanggal lengkap. Di SAP, komitmen biasa bukan beban; BAST yang memenuhi kriteria memicu beban/aset dan utang. Korolari CTA Dr Peralatan dan Mesin/Cr Diinvestasikan dalam Aset Tetap ialah pola historis, tidak ditambahkan ke jurnal aset akrual. [Konsep buku ASP; Permendagri 64 PDF 92,95; Bultek 09 PDF 17/cetak10]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E06. Hubungan laporan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Sebut tujuh komponen laporan pemda konsolidasi dan hubungan yang perlu diperiksa. Mengapa LPSAL serta LAK tidak otomatis disusun setiap SKPD?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** LRA, LPSAL, Neraca, LO, LAK, LPE dan CaLK menjelaskan anggaran, posisi, hasil, kas, perubahan saldo serta kebijakan. Hasil LO masuk LPE dan ekuitas Neraca; SiLPA masuk LPSAL bersama SAL awal/penggunaan; kas akhir LAK cocok dengan kas Neraca. PSAP 01 par.15 membatasi LAK pada entitas dengan fungsi perbendaharaan umum dan LPSAL pada BUN serta entitas pelaporan konsolidasi. Penyusunan mengikuti fungsi entitas, sehingga paket pemda tidak otomatis paket SKPD. [PSAP 01 par.14–15,41,100–102]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T01. DPA SKPD dan PPKD",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: DPA disahkan 2 Januari 2025. SKPD merencanakan retribusi Rp130.850.000, belanja barang/jasa Rp70.650.000 dan modal Rp100.750.000. PPKD merencanakan penggunaan SAL Rp54.200.000 dan pembayaran pokok pinjaman Rp13.650.000, tanpa pos anggaran lain. Hitung selisih dan tulis jurnal anggaran kedua entitas."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Belanja SKPD = Rp70.650.000 + Rp100.750.000 = Rp171.400.000. Selisih defisit = Rp171.400.000 − Rp130.850.000 = Rp40.550.000, ditempatkan pada debit Estimasi Perubahan SAL. Pembiayaan neto PPKD = Rp54.200.000 − Rp13.650.000 = Rp40.550.000, sehingga Estimasi Perubahan SAL dikredit. Jumlah rencana gabungan: Rp130.850.000 + Rp54.200.000 = Rp185.050.000; penggunaan Rp171.400.000 + Rp13.650.000 juga Rp185.050.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, budget**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "02-01-2025",
              "account": "Estimasi Pendapatan",
              "debit": "130.850.000",
              "credit": "0"
            },
            {
              "date": "02-01-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "40.550.000",
              "credit": "0"
            },
            {
              "date": "02-01-2025",
              "account": "Apropriasi Belanja Barang Jasa",
              "debit": "0",
              "credit": "70.650.000",
              "isCredit": true
            },
            {
              "date": "02-01-2025",
              "account": "Apropriasi Belanja Modal",
              "debit": "0",
              "credit": "100.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp171.400.000."
        },
        {
          "kind": "p",
          "text": "**PPKD, budget**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "02-01-2025",
              "account": "Estimasi Penerimaan Pembiayaan",
              "debit": "54.200.000",
              "credit": "0"
            },
            {
              "date": "02-01-2025",
              "account": "Apropriasi Pengeluaran Pembiayaan",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "02-01-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "40.550.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp54.200.000."
        },
        {
          "kind": "p",
          "text": "Ini pencatatan rencana, tanpa jurnal kas, pendapatan-LO, atau beban. Pola PPKD dipakai dengan pos pendapatan/belanja nihil pada ilustrasi. [Permendagri 64 Lamp.II C.1.a PDF 40–41; C.2.a PDF 88]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T02. Retribusi tunai",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: bendahara penerimaan SKPD menerima retribusi hak tahun berjalan Rp118.650.000 pada 4 Maret 2025 berdasarkan tanda bukti pembayaran. Belum ada pendapatan diterima di muka, pajak atau potongan. Buat jurnal finansial dan realisasi."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Kas diterima untuk hak tahun berjalan, sehingga pendapatan-LO = Rp118.650.000. Pada pola retribusi sumber, realisasi juga dicatat Rp118.650.000. Kedua jalur terpisah, bukan dua kali pendapatan pada laporan yang sama."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "04-03-2025",
              "account": "Kas di Bendahara Penerimaan",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "04-03-2025",
              "account": "Pendapatan Retribusi LO",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp118.650.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, realisation**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "04-03-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "04-03-2025",
              "account": "Pendapatan Retribusi LRA",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp118.650.000."
        },
        {
          "kind": "p",
          "text": "LO mendapat pendapatan Rp118.650.000 dan LRA mendapat pendapatan Rp118.650.000. [Permendagri 64 Lamp.II PDF 90]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T03. Setoran internal",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: kas retribusi Rp118.650.000 yang sudah diakui SKPD pada 4 Maret 2025 disetor seluruhnya ke RKUD pada 5 Maret. Saldo sebelum setoran pada Kas di Bendahara Penerimaan tepat Rp118.650.000. Buat jurnal SKPD serta jelaskan konsolidasi."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Saldo kas bendahara sesudah setoran = Rp118.650.000 − Rp118.650.000 = Rp0. Akun RK PPKD di SKPD menggantikan kas yang telah disetor."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "05-03-2025",
              "account": "RK PPKD",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "05-03-2025",
              "account": "Kas di Bendahara Penerimaan",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp118.650.000."
        },
        {
          "kind": "p",
          "text": "PPKD memakai worksheet resiprokal berikut."
        },
        {
          "kind": "p",
          "text": "**PPKD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "05-03-2025",
              "account": "Kas di Kas Daerah",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "05-03-2025",
              "account": "RK SKPD",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp118.650.000."
        },
        {
          "kind": "p",
          "text": "Perpindahan kas di dalam pemda tidak menciptakan pendapatan eksternal kedua atau LRA kedua. Pasangan RK dieliminasi saat konsolidasi; worksheet resiprokal diturunkan dari hubungan RK, bukan kutipan jurnal baru pada halaman sumber yang berbeda. [Permendagri 64 Lamp.II PDF 90,71–73]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T04. Kontrak lalu penerimaan aset",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: SKPD memesan peralatan Rp96.350.000 pada 3 Januari 2025, tanpa uang muka. BAST 5 Januari menyatakan seluruh peralatan diterima, siap dipakai, biaya andal, manfaat lebih dari 12 bulan, diperoleh untuk dipakai dan tidak dijual dalam operasi normal. Pembayaran LS baru 10 Januari. Tulis perlakuan tanggal 3 dan 5."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Tanggal 3: komitmen dicatat untuk kendali, tanpa jurnal finansial pada kondisi tersebut. Tanggal 5: nilai perolehan penuh Rp96.350.000 diakui sebagai aset dan utang. Belanja-LRA menunggu pemicu pembayaran LS 10 Januari."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "05-01-2025",
              "account": "Peralatan dan Mesin",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "05-01-2025",
              "account": "Utang Belanja Modal",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp96.350.000."
        },
        {
          "kind": "p",
          "text": "Ini tidak memakai kredit Diinvestasikan dalam Aset Tetap. [PSAP 07 par.15–16; Permendagri 64 Lamp.II PDF 95–96]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T05. Pelunasan aset LS",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: utang belanja modal dari BAST 5 Januari 2025 sebesar Rp96.350.000 dilunasi melalui SP2D-LS pada 10 Januari. Tidak ada pajak, potongan atau selisih nilai. Buat dua jalur jurnal SKPD."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Utang dilunasi utuh: Rp96.350.000 − Rp96.350.000 = Rp0. Finansial mendebit utang, mengkredit RK PPKD karena Kas Daerah dicatat PPKD/BUD. Realisasi mencatat modal sebesar Rp96.350.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "10-01-2025",
              "account": "Utang Belanja Modal",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "10-01-2025",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp96.350.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, realisation**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "10-01-2025",
              "account": "Belanja Modal",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "10-01-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp96.350.000."
        },
        {
          "kind": "p",
          "text": "Aset tidak didebit ulang. Penyusutan ditentukan kebijakan penggunaan, bukan menghabiskan biaya saat pelunasan. [Permendagri 64 Lamp.II PDF 95]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T06. Pembelian persediaan LS, metode periodik",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: bahan Rp42.750.000 diterima SKPD dengan BAST 7 April 2025 dan dibayar LS 14 April. Gunakan metode beban/periodik; nilai mencakup seluruh biaya perolehan, tanpa pajak/potongan. Stok akhir ditangani pada penyesuaian. Buat jurnal penerimaan, pembayaran, dan realisasi."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Metode contoh mencatat perolehan sebagai beban Rp42.750.000 sementara; beban pemakaian final memerlukan penyesuaian stok. Pada 14 April utang Rp42.750.000 dilunasi, sisanya Rp0. Belanja barang/jasa di LRA = Rp42.750.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "07-04-2025",
              "account": "Beban Persediaan",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "07-04-2025",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp42.750.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "14-04-2025",
              "account": "Utang Belanja Barang Jasa",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "14-04-2025",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp42.750.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, realisation**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "14-04-2025",
              "account": "Belanja Barang Jasa",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "14-04-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp42.750.000."
        },
        {
          "kind": "p",
          "text": "Metode aset/perpetual akan memakai pencatatan perolehan/pemakaian berbeda; jangan menambah jurnal perolehan aset di atas pola periodik ini. [PSAP 05 par.22–25; Permendagri 64 Lamp.II PDF 92–93,97–98]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T07. Jasa dikonsumsi dan dibayar LS",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: jasa Rp18.650.000 selesai dan dikonsumsi SKPD pada BAST 2 Juni 2025. Utang dibayar LS seluruhnya 9 Juni, tanpa potongan. Tidak ada manfaat jasa periode berikutnya. Tulis jurnal."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Beban-LO diakui ketika jasa dikonsumsi sebesar Rp18.650.000. Pembayaran berikutnya melunasi utang Rp18.650.000 sehingga saldo utang transaksi ini Rp0; realisasi belanja-LRA Rp18.650.000 pada pembayaran LS."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "02-06-2025",
              "account": "Beban Jasa",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "02-06-2025",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp18.650.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "09-06-2025",
              "account": "Utang Belanja Barang Jasa",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "09-06-2025",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp18.650.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, realisation**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "09-06-2025",
              "account": "Belanja Barang Jasa",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "09-06-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp18.650.000."
        },
        {
          "kind": "p",
          "text": "Pengeluaran ini tidak menjadi aset dibayar di muka karena seluruh manfaat telah dikonsumsi. [Permendagri 64 Lamp.II PDF 92–93]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T08. Jasa belum dibayar",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: jasa Rp6.850.000 selesai dan dikonsumsi SKPD pada BAST 20 Desember 2025. Sampai 31 Desember tidak ada pembayaran atau uang muka. Buat jurnal dan pengaruh laporan akhir."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pengakuan finansial tidak menunggu kas: beban jasa Rp6.850.000 dan utang Rp6.850.000. Saldo utang akhir = Rp6.850.000 − Rp0 pembayaran = Rp6.850.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "20-12-2025",
              "account": "Beban Jasa",
              "debit": "6.850.000",
              "credit": "0"
            },
            {
              "date": "20-12-2025",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "6.850.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp6.850.000."
        },
        {
          "kind": "p",
          "text": "LO memuat beban, Neraca memuat utang. LRA dan LAK tidak mendapat arus pembayaran transaksi ini pada 2025. [KK par.42–45,73–75; Permendagri 64 Lamp.II PDF 92,96]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T09. Hak retribusi belum diterima",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: pada 31 Desember 2025 SKR menetapkan hak retribusi Rp12.850.000 yang memenuhi pengakuan, tetapi tidak ada kas diterima. Tidak ada penyisihan pada asumsi latihan. Buat jurnal dan bandingkan LO/LRA."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Piutang akhir = hak Rp12.850.000 − kas diterima Rp0 = Rp12.850.000. Pendapatan-LO bertambah Rp12.850.000, sedangkan pendapatan-LRA tambahan tahun ini Rp0."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "31-12-2025",
              "account": "Piutang Retribusi",
              "debit": "12.850.000",
              "credit": "0"
            },
            {
              "date": "31-12-2025",
              "account": "Pendapatan Retribusi LO",
              "debit": "0",
              "credit": "12.850.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp12.850.000."
        },
        {
          "kind": "p",
          "text": "Syarat measurable/available versi dana AS tidak dipaksakan ke jurnal hak retribusi SAP ini. [Permendagri 64 Lamp.II PDF 90]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T10. Persediaan dan penyusutan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A: persediaan awal 1 Januari Rp8.450.000, pembelian periodik Rp42.750.000, opname akhir Rp11.650.000. Saldo awal dipindah ke beban pada 2 Januari. Peralatan lama Rp240.600.000 berumur 10 tahun; baru Rp96.350.000 berumur 5 tahun, siap dipakai 5 Januari. Garis lurus, residu nol, kebijakan mulai bulan siap digunakan sehingga keduanya 12 bulan. Akumulasi awal Rp72.180.000; tidak ada pelepasan. Hitung pemakaian, penyusutan, nilai akhir dan jurnal penyesuaian."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pemakaian = Rp8.450.000 + Rp42.750.000 − Rp11.650.000 = Rp39.550.000. Pemindahan saldo awal serta pembelian sudah menghasilkan beban sementara Rp51.200.000; pengakuan stok akhir menguranginya Rp11.650.000. Penyusutan lama = (Rp240.600.000 − Rp0) ÷ 10 × 12/12 = Rp24.060.000; baru = (Rp96.350.000 − Rp0) ÷ 5 × 12/12 = Rp19.270.000; total Rp43.330.000. Akumulasi akhir = Rp72.180.000 + Rp43.330.000 = Rp115.510.000. Gross akhir = Rp240.600.000 + Rp96.350.000 = Rp336.950.000; neto Rp336.950.000 − Rp115.510.000 = Rp221.440.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "02-01-2025",
              "account": "Beban Persediaan",
              "debit": "8.450.000",
              "credit": "0"
            },
            {
              "date": "02-01-2025",
              "account": "Persediaan",
              "debit": "0",
              "credit": "8.450.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp8.450.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "31-12-2025",
              "account": "Persediaan",
              "debit": "11.650.000",
              "credit": "0"
            },
            {
              "date": "31-12-2025",
              "account": "Beban Persediaan",
              "debit": "0",
              "credit": "11.650.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp11.650.000."
        },
        {
          "kind": "p",
          "text": "**SKPD, financial**"
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "31-12-2025",
              "account": "Beban Penyusutan",
              "debit": "43.330.000",
              "credit": "0"
            },
            {
              "date": "31-12-2025",
              "account": "Akumulasi Penyusutan",
              "debit": "0",
              "credit": "43.330.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: debit = kredit = Rp43.330.000."
        },
        {
          "kind": "p",
          "text": "Jurnal 2 Januari ditampilkan sebagai langkah yang sudah dicatat, tidak diposting dua kali pada akhir tahun. Tanah dan KDP tidak disusutkan; umur soal tidak menjadi ketentuan universal. [PSAP 05 par.22–25; PSAP 07 par.52–58; Permendagri 64 Lamp.II PDF 98]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T11. UP: kas, konsumsi, pengesahan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi C, terpisah dari A: SKPD menerima UP Rp5.750.000 pada 1 Agustus 2025 ke Kas Bendahara Pengeluaran. Pada 4 Agustus membayar jasa yang langsung dikonsumsi Rp3.465.000, tanpa utang/potongan. Pertanggungjawaban disahkan 8 Agustus; tidak ada pengeluaran lain. Hitung kas sisa serta jurnal SKPD saat penerimaan, pemakaian dan realisasi."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Kas sisa = Rp5.750.000 − Rp3.465.000 = Rp2.285.000. Penerimaan UP ialah transfer kas internal, bukan pendapatan atau belanja. Beban diakui ketika jasa dipakai dan dibayar. Untuk mekanisme bendahara, belanja-LRA dicatat ketika pertanggungjawaban disahkan, sehingga tanggalnya 8 Agustus, bukan otomatis 4 Agustus."
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "01-08-2025",
              "account": "Kas di Bendahara Pengeluaran",
              "debit": "5.750.000",
              "credit": "0"
            },
            {
              "date": "01-08-2025",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "5.750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Debit = kredit = Rp5.750.000, finansial. Ini worksheet transfer internal dengan pasangan kas/RK. Sumber PDF 93 menunjukkan pasangan yang sama pada GU; contoh ini tidak mengutip prosedur penerimaan UP dari halaman itu."
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "04-08-2025",
              "account": "Beban Jasa",
              "debit": "3.465.000",
              "credit": "0"
            },
            {
              "date": "04-08-2025",
              "account": "Kas di Bendahara Pengeluaran",
              "debit": "0",
              "credit": "3.465.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Debit = kredit = Rp3.465.000, finansial."
        },
        {
          "kind": "journal",
          "caption": "Tanggal / Akun / Debit (Rp) / Kredit (Rp)",
          "lines": [
            {
              "date": "08-08-2025",
              "account": "Belanja Barang Jasa",
              "debit": "3.465.000",
              "credit": "0"
            },
            {
              "date": "08-08-2025",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "3.465.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Debit = kredit = Rp3.465.000, realisasi. Sisa Rp2.285.000 tetap kas, tidak menjadi beban atau belanja sampai ada transaksi yang memenuhi pengakuan. [PSAP 02 par.31–32; Permendagri 64 Lamp.II PDF 92–93 untuk pola UP/GU dan akun kas bendahara]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L01. LO, LPE, lalu Neraca",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A, rupiah: retribusi tunai 118.650.000 dan piutang hak tahun ini 12.850.000. Persediaan awal 8.450.000, beli 42.750.000, akhir 11.650.000. Jasa terpakai dibayar 18.650.000 dan belum dibayar 6.850.000. Peralatan awal 240.600.000, tambah 96.350.000; garis lurus umur 10 dan 5 tahun, residu nol, masing-masing 12 bulan; akumulasi awal 72.180.000. Kas awal 125.750.000 menerima retribusi tunai dan membayar pembelian 42.750.000, jasa 18.650.000, modal 96.350.000, pokok pinjaman 13.650.000. Kewajiban awal pokok pinjaman 13.650.000 dan PFK 20.350.000; pinjaman dilunasi, PFK tetap. Tidak ada koreksi atau transaksi lain. Susun potongan LO/LPE/Neraca."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pendapatan-LO = Rp118.650.000 + Rp12.850.000 = Rp131.500.000. Beban persediaan = Rp8.450.000 + Rp42.750.000 − Rp11.650.000 = Rp39.550.000; jasa = Rp18.650.000 + Rp6.850.000 = Rp25.500.000; penyusutan = Rp240.600.000/10 + Rp96.350.000/5 = Rp43.330.000. Total beban = Rp39.550.000 + Rp25.500.000 + Rp43.330.000 = Rp108.380.000; surplus Rp23.120.000."
        },
        {
          "kind": "statement",
          "spec": {
            "entity": "Kabupaten Contoh",
            "title": "Laporan Operasional",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi; potongan latihan tanpa komparatif arus 2024",
            "lines": [
              {
                "label": "Pendapatan retribusi",
                "amount": 131500000
              },
              {
                "label": "Beban persediaan",
                "amount": 39550000
              },
              {
                "label": "Beban jasa",
                "amount": 25500000
              },
              {
                "label": "Beban penyusutan",
                "amount": 43330000
              },
              {
                "label": "Total beban",
                "amount": 108380000
              },
              {
                "label": "Surplus LO",
                "amount": 23120000,
                "bottomRule": "double"
              }
            ]
          }
        },
        {
          "kind": "p",
          "text": "Aset awal = Rp125.750.000 + Rp8.450.000 + Rp240.600.000 − Rp72.180.000 = Rp302.620.000. Kewajiban awal = Rp13.650.000 + Rp20.350.000 = Rp34.000.000. Ekuitas awal = Rp302.620.000 − Rp34.000.000 = Rp268.620.000. Ekuitas akhir = Rp268.620.000 + Rp23.120.000 + Rp0 koreksi = Rp291.740.000."
        },
        {
          "kind": "statement",
          "spec": {
            "entity": "Kabupaten Contoh",
            "title": "Laporan Perubahan Ekuitas",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi; potongan latihan tanpa komparatif arus 2024",
            "lines": [
              {
                "label": "Ekuitas awal",
                "amount": 268620000
              },
              {
                "label": "Surplus LO",
                "amount": 23120000
              },
              {
                "label": "Koreksi",
                "amount": 0
              },
              {
                "label": "Ekuitas akhir",
                "amount": 291740000,
                "bottomRule": "double"
              }
            ]
          }
        },
        {
          "kind": "p",
          "text": "Kas akhir = Rp125.750.000 + Rp118.650.000 − Rp42.750.000 − Rp18.650.000 − Rp96.350.000 − Rp13.650.000 = Rp73.000.000. Peralatan gross = Rp336.950.000, akumulasi = Rp72.180.000 + Rp43.330.000 = Rp115.510.000, neto Rp221.440.000. Aset akhir = Rp73.000.000 + Rp12.850.000 + Rp11.650.000 + Rp221.440.000 = Rp318.940.000. Utang = PFK Rp20.350.000 + jasa belum dibayar Rp6.850.000 = Rp27.200.000; pinjaman Rp13.650.000 − Rp13.650.000 = Rp0."
        },
        {
          "kind": "statement",
          "spec": {
            "entity": "Kabupaten Contoh",
            "title": "Neraca",
            "period": "Per 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi; potongan latihan tanpa komparatif arus 2024",
            "lines": [
              {
                "label": "Kas",
                "amount": 73000000
              },
              {
                "label": "Piutang retribusi",
                "amount": 12850000
              },
              {
                "label": "Persediaan",
                "amount": 11650000
              },
              {
                "label": "Peralatan dan Mesin, gross",
                "amount": 336950000
              },
              {
                "label": "Akumulasi penyusutan",
                "amount": -115510000
              },
              {
                "label": "Total aset",
                "amount": 318940000,
                "bottomRule": "double"
              },
              {
                "label": "Utang PFK",
                "amount": 20350000
              },
              {
                "label": "Utang jasa",
                "amount": 6850000
              },
              {
                "label": "Total kewajiban",
                "amount": 27200000
              },
              {
                "label": "Ekuitas",
                "amount": 291740000
              },
              {
                "label": "Kewajiban + ekuitas",
                "amount": 318940000,
                "bottomRule": "double"
              }
            ]
          }
        },
        {
          "kind": "p",
          "text": "Pemeriksaan: Rp318.940.000 = Rp27.200.000 + Rp291.740.000. [PSAP 01 par.49–53,100–102; Ilustrasi A]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L02. LRA dan perubahan SAL",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A, rupiah: DPA retribusi 130.850.000, barang/jasa 70.650.000, modal 100.750.000, penggunaan SAL 54.200.000 dan pokok pinjaman 13.650.000. Realisasi retribusi tunai 118.650.000; barang/jasa LS 42.750.000 +18.650.000; modal LS 96.350.000. Penggunaan SAL dan pokok pinjaman tepat sesuai DPA. SAL awal 105.400.000; tidak ada koreksi atau transaksi lain. Piutang 12.850.000 dan jasa belum dibayar 6.850.000 tidak menjadi realisasi kas tahun ini. Susun LRA/LPSAL dan persentase pendapatan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Barang/jasa = Rp42.750.000 + Rp18.650.000 = Rp61.400.000. Total belanja = Rp61.400.000 + Rp96.350.000 = Rp157.750.000. Defisit = Rp118.650.000 − Rp157.750.000 = −Rp39.100.000. Pembiayaan neto = Rp54.200.000 − Rp13.650.000 = Rp40.550.000; SiLPA = −Rp39.100.000 + Rp40.550.000 = Rp1.450.000."
        },
        {
          "kind": "table",
          "headers": [
            "Pos",
            "Anggaran (Rp)",
            "Realisasi (Rp)"
          ],
          "rows": [
            [
              "Pendapatan retribusi",
              "130.850.000",
              "118.650.000"
            ],
            [
              "Belanja barang/jasa",
              "70.650.000",
              "61.400.000"
            ],
            [
              "Belanja modal",
              "100.750.000",
              "96.350.000"
            ],
            [
              "Total belanja",
              "171.400.000",
              "157.750.000"
            ],
            [
              "Surplus/(defisit)",
              "−40.550.000",
              "−39.100.000"
            ],
            [
              "Penerimaan pembiayaan, penggunaan SAL",
              "54.200.000",
              "54.200.000"
            ],
            [
              "Pengeluaran pembiayaan, pokok pinjaman",
              "13.650.000",
              "13.650.000"
            ],
            [
              "Pembiayaan neto",
              "40.550.000",
              "40.550.000"
            ],
            [
              "SiLPA",
              "0",
              "1.450.000"
            ]
          ],
          "align": [
            "left",
            "right",
            "right"
          ],
          "rowRules": [
            {
              "row": 8,
              "columns": [
                1,
                2
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh",
            "title": "Laporan Realisasi Anggaran",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi; tanpa komparatif 2024"
          }
        },
        {
          "kind": "p",
          "text": "SAL akhir = Rp105.400.000 − Rp54.200.000 + Rp1.450.000 + Rp0 koreksi = Rp52.650.000."
        },
        {
          "kind": "statement",
          "spec": {
            "entity": "Kabupaten Contoh",
            "title": "Laporan Perubahan SAL",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi; potongan latihan tanpa komparatif arus 2024",
            "lines": [
              {
                "label": "SAL awal",
                "amount": 105400000
              },
              {
                "label": "Penggunaan SAL",
                "amount": -54200000
              },
              {
                "label": "SiLPA tahun berjalan",
                "amount": 1450000
              },
              {
                "label": "Koreksi/lain-lain",
                "amount": 0
              },
              {
                "label": "SAL akhir",
                "amount": 52650000,
                "bottomRule": "double"
              }
            ]
          }
        },
        {
          "kind": "p",
          "text": "Persentase pendapatan = Rp118.650.000/Rp130.850.000 × 100 = 90.676347% ≈ 90,68%. Penggunaan SAL tidak menciptakan kas masuk baru; LPSAL mengurangkannya dari saldo awal. [PSAP 01 par.41; PSAP 02 par.7–13,50–62; Ilustrasi A]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L03. LAK dan penjelasan CaLK",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Ilustrasi A, rupiah: kas awal 125.750.000; retribusi tunai 118.650.000 disetor internal seluruhnya. Barang/jasa LS dibayar 42.750.000 dan 18.650.000, modal LS dibayar 96.350.000, pokok pinjaman dibayar 13.650.000; tanpa arus transitoris. Penggunaan SAL 54.200.000 berasal dari tahun lalu, bukan kas masuk baru. PFK tetap 20.350.000. Untuk rekonsiliasi, defisit LRA −39.100.000, piutang tahun ini 12.850.000, persediaan awal 8.450.000/akhir 11.650.000, jasa belum dibayar 6.850.000, penyusutan 43.330.000. Tidak ada transaksi lain atau koreksi. Susun LAK dan jelaskan beda LO, LRA, SAL serta kas."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Operasi = Rp118.650.000 − Rp42.750.000 − Rp18.650.000 = Rp57.250.000. Investasi = −Rp96.350.000. Pendanaan = −Rp13.650.000. Transitoris Rp0. Setoran internal tidak menambah penerimaan konsolidasi. Perubahan kas = Rp57.250.000 − Rp96.350.000 − Rp13.650.000 = −Rp52.750.000. Kas akhir = Rp125.750.000 − Rp52.750.000 = Rp73.000.000."
        },
        {
          "kind": "statement",
          "spec": {
            "entity": "Kabupaten Contoh",
            "title": "Laporan Arus Kas",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi; potongan latihan tanpa komparatif arus 2024",
            "lines": [
              {
                "label": "Arus operasi neto",
                "amount": 57250000
              },
              {
                "label": "Arus investasi neto",
                "amount": -96350000
              },
              {
                "label": "Arus pendanaan neto",
                "amount": -13650000
              },
              {
                "label": "Arus transitoris neto",
                "amount": 0
              },
              {
                "label": "Perubahan kas",
                "amount": -52750000
              },
              {
                "label": "Kas awal",
                "amount": 125750000
              },
              {
                "label": "Kas akhir",
                "amount": 73000000,
                "bottomRule": "double"
              }
            ]
          }
        },
        {
          "kind": "p",
          "text": "**Kabupaten Contoh**\n**Catatan atas Laporan Keuangan, potongan latihan**\n**Untuk tahun yang berakhir 31 Desember 2025**\n**Satuan: rupiah; Ilustrasi**"
        },
        {
          "kind": "ol",
          "items": [
            "Basis anggaran kas, finansial akrual; satu SKPD dan PPKD dikonsolidasikan setelah eliminasi RK. Biaya perolehan, metode persediaan periodik dan opname, garis lurus umur/residu sesuai soal. Tidak tersedia komparatif arus 2024 atau indikator layanan nonkeuangan.",
            "Rekonsiliasi LRA ke LO: −Rp39.100.000 + Rp12.850.000 piutang + Rp96.350.000 modal − Rp8.450.000 persediaan awal + Rp11.650.000 persediaan akhir − Rp6.850.000 jasa belum dibayar − Rp43.330.000 penyusutan = Rp23.120.000 surplus-LO. Modal ditambah karena belanja modal bukan beban penuh; penyusutan menjadi beban alokasi manfaatnya.",
            "SiLPA = −Rp39.100.000 + Rp54.200.000 − Rp13.650.000 = Rp1.450.000. SAL akhir = Rp105.400.000 awal − Rp54.200.000 penggunaan + Rp1.450.000 SiLPA = Rp52.650.000; saldo awal ini juga dapat ditelusuri sebagai kas awal Rp125.750.000 − PFK Rp20.350.000. Pada asumsi khusus ini, kas akhir Rp73.000.000 − PFK Rp20.350.000 = SAL Rp52.650.000. Ini rekonsiliasi dataset, bukan rumus universal SAL.",
            "Kas akhir LAK Rp73.000.000 sama dengan kas Neraca. Piutang Rp12.850.000 dan jasa belum dibayar Rp6.850.000 memengaruhi finansial, tanpa arus kas baru. Tidak ada aktivitas nonoperasional, luar biasa, koreksi, bunga atau pajak dalam scope."
          ]
        },
        {
          "kind": "p",
          "text": "CaLK memberi alasan dan kebijakan untuk membaca angka. Tujuh kerangka laporan berasal dari ledger yang sama dan dapat dipakai ulang pada TM07. [PSAP 01 par.108–111; PSAP 03 bagian klasifikasi arus; Ilustrasi A]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    }
  ]
};
