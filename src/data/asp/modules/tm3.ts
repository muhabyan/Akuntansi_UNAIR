// Generated from the approved 05 package by scripts/build-akk203-content.mjs.
// Source SHA-256: f380a1f2e4bc4cec3c1ee034db8c4c2cc146467ef9b5e7620880d358aefa9f0b
import type { Reading } from '../../../types';

export const TM3_READING: Reading = {
  "tm": 3,
  "title": "Regulasi dan standar pemerintahan",
  "ref": "Akuntansi Sektor Publik",
  "intro": "tentukan entitas, tahap, laporan, dan tahun sebelum memilih aturan.",
  "objectives": [
    "UU 17/2003 mengatur keuangan negara, UU 1/2004 perbendaharaan, dan UU 15/2004 pemeriksaan.",
    "Rencana memberi arah; APBN/APBD memberi otorisasi anggaran; laporan menjelaskan hasilnya.",
    "SAP mengatur laporan pemerintah. SPKN mengatur pemeriksaan. IPSAS menjadi pembanding internasional.",
    "Laporan finansial memakai akrual; LRA mengikuti basis anggaran, dengan pengakuan kas dalam SAP.",
    "Paket laporan pemerintah terdiri dari tujuh komponen, dengan pengecualian menurut fungsi entitas.",
    "Batas HKPD: pegawai maksimum 30% dan infrastruktur minimum 40%, dengan pembilang dan pembagi berbeda.",
    "Tahun penetapan standar dapat berbeda dari tahun penerapannya."
  ],
  "layout": "layered",
  "blocks": [
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat (4 menit)",
      "blocks": [
        {
          "kind": "figure",
          "title": "Siklus keuangan pemerintah",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 944\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Siklus keuangan pemerintah</title><desc>Dua siklus sejajar pusat dan daerah menghubungkan rencana, anggaran, pelaksanaan, laporan, pemeriksaan, dan perbaikan.</desc><defs><marker id=\"V-TM03-01-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"944\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Siklus keuangan pemerintah</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M276.25 249 L276.25 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M276.25 371 L276.25 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M276.25 493 L276.25 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M276.25 615 L276.25 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M276.25 737 L276.25 802\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M90 830.5 H32 V98.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><text class=\"svg-muted\" x=\"276.25\" y=\"882\" text-anchor=\"middle\" font-size=\"12\">Evaluasi</text><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M683.75 249 L683.75 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M683.75 371 L683.75 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M683.75 493 L683.75 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M683.75 615 L683.75 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M683.75 737 L683.75 802\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><path d=\"M497.5 830.5 H56 V98.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-01-arrow)\"/><text class=\"svg-muted\" x=\"683.75\" y=\"882\" text-anchor=\"middle\" font-size=\"12\">Evaluasi</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pusat: RPJP/RPJM/RKP</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Daerah: RPJPD/RPJMD/RKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">RAPBN</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">RAPBD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Persetujuan DPR</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Persetujuan DPRD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pelaksanaan (pusat)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Pelaksanaan (daerah)</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">LK</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">LKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">BPK (pusat)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"680\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">BPK (daerah)</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"802\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"831\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Tindak lanjut (pusat)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"802\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"831\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Tindak lanjut (daerah)</tspan></text></svg>",
          "overview": {
            "heading": "Siklus keuangan pemerintah",
            "cards": [
              {
                "title": "Pusat: RPJP/RPJM/RKP",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Daerah: RPJPD/RPJMD/RKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RAPBN",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RAPBD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Persetujuan DPR",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Persetujuan DPRD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pelaksanaan (pusat)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pelaksanaan (daerah)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "LK",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "LKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "BPK (pusat)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "BPK (daerah)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Tindak lanjut (pusat)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Tindak lanjut (daerah)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "rencana → rancangan anggaran → persetujuan → pelaksanaan → laporan → pemeriksaan → tindak lanjut; hasil evaluasi kembali ke perencanaan"
          },
          "caption": "Setiap tahap memiliki dokumen, pelaku, dan dasar hukum sendiri. [UU 25/2004 Ps.3–5, 14–26; UU 17/2003 Ps.11–20, 30–31; UU 15/2004 Ps.4, 20]",
          "altText": "Dua siklus sejajar pusat dan daerah menghubungkan rencana, anggaran, pelaksanaan, laporan, pemeriksaan, dan perbaikan."
        },
        {
          "kind": "ul",
          "items": [
            "UU 17/2003 mengatur keuangan negara, UU 1/2004 perbendaharaan, dan UU 15/2004 pemeriksaan.",
            "Rencana memberi arah; APBN/APBD memberi otorisasi anggaran; laporan menjelaskan hasilnya.",
            "SAP mengatur laporan pemerintah. SPKN mengatur pemeriksaan. IPSAS menjadi pembanding internasional.",
            "Laporan finansial memakai akrual; LRA mengikuti basis anggaran, dengan pengakuan kas dalam SAP.",
            "Paket laporan pemerintah terdiri dari tujuh komponen, dengan pengecualian menurut fungsi entitas.",
            "Batas HKPD: pegawai maksimum 30% dan infrastruktur minimum 40%, dengan pembilang dan pembagi berbeda.",
            "Tahun penetapan standar dapat berbeda dari tahun penerapannya."
          ]
        },
        {
          "kind": "callout",
          "variant": "gist",
          "compact": true,
          "title": "Kalau cuma sempat ingat satu hal:",
          "text": "tentukan entitas, tahap, laporan, dan tahun sebelum memilih aturan."
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
      "title": "1. Mengapa ada beberapa undang-undang? (5 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Kamu menerima soal tentang uang pemerintah. Ada soal siapa yang berwenang, ada soal bagaimana uang dibayar, dan ada soal pemeriksaannya. Ketiganya berhubungan, tetapi pertanyaan hukumnya berbeda. Mulailah dari masalah yang diminta soal."
        },
        {
          "kind": "p",
          "text": "**Keuangan negara** mencakup hak dan kewajiban yang dapat dinilai dengan uang. Cakupannya juga meliputi uang atau barang yang berkaitan dengan pelaksanaan hak dan kewajiban tersebut. Karena itu, pembahasan keuangan negara lebih luas daripada saldo kas APBN. [UU 17/2003 Ps.1(1), 2]"
        },
        {
          "kind": "table",
          "headers": [
            "Cakupan Pasal 2",
            "Contoh jenis unsur yang disebut undang-undang"
          ],
          "rows": [
            [
              "Hak negara",
              "Memungut pajak, mengeluarkan dan mengedarkan uang, melakukan pinjaman"
            ],
            [
              "Kewajiban negara",
              "Menyelenggarakan layanan umum dan membayar tagihan pihak ketiga"
            ],
            [
              "Arus anggaran",
              "Penerimaan dan pengeluaran negara maupun daerah"
            ],
            [
              "Kekayaan negara/daerah",
              "Dikelola sendiri atau pihak lain; termasuk kekayaan yang dipisahkan pada perusahaan negara/daerah"
            ],
            [
              "Kekayaan pihak lain dalam hubungan tertentu",
              "Dikuasai pemerintah untuk tugas pemerintahan/kepentingan umum; diperoleh dengan fasilitas pemerintah"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Cakupan hukum yang luas tidak berarti seluruh organisasi memakai format laporan yang sama. Pilihan standar laporan tetap mengikuti jenis entitas. Contohnya, laporan pemerintah memakai SAP; status perusahaan sebagai BUMN tidak otomatis membuat laporan perusahaannya menjadi LK pemerintah. [UU 17/2003 Ps.2; PP 71/2010 Ps.1–2]"
        },
        {
          "kind": "table",
          "headers": [
            "Paket reformasi",
            "Pertanyaan yang dijawab",
            "Dasar"
          ],
          "rows": [
            [
              "UU 17/2003",
              "Apa yang dikelola, siapa berwenang, bagaimana APBN/APBD dipertanggungjawabkan?",
              "Ps.1–3, 6–10, 30–31"
            ],
            [
              "UU 1/2004",
              "Bagaimana pengelolaan dan pertanggungjawaban perbendaharaan dijalankan?",
              "Ps.1–3, 7–10, 52–56"
            ],
            [
              "UU 15/2004",
              "Bagaimana pemeriksaan dilakukan dan rekomendasi ditindak lanjuti?",
              "Ps.2–4, 16–20"
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
          "text": "Presiden memegang kekuasaan pengelolaan keuangan negara. Sebagian kekuasaan dikuasakan kepada Menteri Keuangan dan menteri/pimpinan lembaga; sebagian diserahkan kepada kepala daerah. Kekuasaan ini tidak mencakup kewenangan moneter yang diatur tersendiri. [UU 17/2003 Ps.6]"
        },
        {
          "kind": "table",
          "headers": [
            "Pelaku",
            "Peran yang perlu kamu bedakan"
          ],
          "rows": [
            [
              "Menteri Keuangan",
              "Pengelola fiskal; juga Bendahara Umum Negara (BUN)"
            ],
            [
              "Menteri/pimpinan lembaga",
              "Pengguna anggaran/barang kementerian atau lembaga"
            ],
            [
              "Kepala daerah",
              "Memegang pengelolaan keuangan daerah"
            ],
            [
              "Pejabat pengelola keuangan daerah",
              "Melaksanakan fungsi Bendahara Umum Daerah (BUD)"
            ],
            [
              "Kepala SKPD",
              "Pengguna anggaran/barang pada unit daerah"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Pemisahan pengelola fiskal dan pengguna anggaran membantu membedakan fungsi pengelolaan menyeluruh dengan pelaksanaan kegiatan. Penjelasan UU memakai analogi Menteri Keuangan sebagai *chief financial officer* dan menteri teknis sebagai *chief operational officer*. Analogi itu menjelaskan pembagian tanggung jawab, bukan menjadikan pemerintah perusahaan. [UU 17/2003 Ps.8–10, Penjelasan Umum bagian 5; UU 1/2004 Ps.7, 9]"
        },
        {
          "kind": "figure",
          "title": "Peta aturan, kewenangan, dan standar",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 647\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Peta aturan, kewenangan, dan standar</title><desc>Peta membedakan aturan keuangan, daerah, laporan, dan pemeriksaan; IPSAS ditempatkan sebagai pembanding.</desc><defs><marker id=\"V-TM03-02-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"647\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Peta aturan, kewenangan, dan standar</text><path d=\"M480 127 L208.33333333333331 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M480 127 L479.99999999999994 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M480 127 L751.6666666666666 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H56 V377 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H68 V377 H361.66666666666663\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H20 V377 H633.3333333333333\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H32 V522 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Pembanding</text><path d=\"M479.99999999999994 417 L683.75 482\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"479.99999999999994\" y=\"440\" text-anchor=\"middle\" font-size=\"12\">Lingkup</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Aturan, kewenangan, dan standar</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Pengelolaan: UU 17 dan</tspan><tspan x=\"208.33333333333331\" dy=\"23\">UU 1</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Perencanaan: UU 25</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Daerah: PP 12/Permen 77</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">HKPD: UU 1/2022/PP 35</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"337\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Laporan:</tspan><tspan x=\"479.99999999999994\" dy=\"23\">SAP/PSAP/kebijakan/SAPD</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"337\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Pemeriksaan: UU 15/SPKN</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"482\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"511\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pembanding: IPSAS (tidak otomatis</tspan><tspan x=\"276.25\" dy=\"23\">berlaku)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"482\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"511\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Entitas pemerintah: SAP; perusahaan: SAK</tspan><tspan x=\"683.75\" dy=\"23\">sesuai jenis entitas</tspan></text></svg>",
          "overview": {
            "heading": "Peta aturan, kewenangan, dan standar",
            "cards": [
              {
                "title": "Aturan, kewenangan, dan standar",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pengelolaan: UU 17 dan UU 1",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Perencanaan: UU 25",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Daerah: PP 12/Permen 77",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "HKPD: UU 1/2022/PP 35",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Laporan: SAP/PSAP/kebijakan/SAPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pemeriksaan: UU 15/SPKN",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pembanding: IPSAS (tidak otomatis berlaku)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Entitas pemerintah: SAP; perusahaan: SAK sesuai jenis entitas",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "aturan pengelolaan mengarahkan kegiatan; SAP mengarahkan laporan; SPKN mengarahkan pemeriksaan; IPSAS memiliki garis pembanding tanpa panah berlaku otomatis"
          },
          "caption": "Pilih aturan berdasarkan objek pertanyaan dan entitas. [UU 17/2003 Ps.6–10; UU 1/2004 Ps.7–10; PP 71/2010 Ps.2–6; PP 12/2019 Ps.185–187; UU 1/2022 Ps.4, 50]",
          "altText": "Peta membedakan aturan keuangan, daerah, laporan, dan pemeriksaan; IPSAS ditempatkan sebagai pembanding."
        },
        {
          "kind": "self-check",
          "question": "Soal meminta dasar penyusunan laporan pemerintah dan dasar pemeriksaannya. Apakah cukup menyebut SPKN untuk keduanya?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Laporan disusun dengan SAP; pemeriksaan memakai SPKN dalam lingkupnya. Keduanya mengatur pekerjaan berbeda."
            }
          ],
          "signal": "Kamu dapat menghubungkan objek soal dengan aturan yang tepat."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Sebutkan tiga UU dan bidangnya, lalu jelaskan pembagian pengelola fiskal dengan pengguna anggaran.\nBeri dasar UU 17 Ps.6–10 dan UU 1 Ps.7–10; tutup dengan pilihan SAP untuk laporan dan SPKN untuk pemeriksaan."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "2. Dari rencana sampai pertanggungjawaban (5 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Usulan kegiatan tidak langsung menjadi izin membelanjakan uang. Pemerintah menyusun rencana, memasukkannya ke rancangan anggaran, lalu meminta persetujuan legislatif. Anggaran yang disetujui menjadi dasar pelaksanaan. Pengeluaran yang menimbulkan beban anggaran perlu tersedia dan cukup anggarannya. [UU 25/2004 Ps.25; UU 17/2003 Ps.11–20; UU 1/2004 Ps.3(3)]"
        },
        {
          "kind": "table",
          "headers": [
            "Jangka waktu",
            "Pusat",
            "Daerah",
            "Unit kementerian/SKPD"
          ],
          "rows": [
            [
              "Panjang, 20 tahun",
              "RPJP nasional",
              "RPJP daerah",
              "Mengacu pada arah pembangunan yang relevan"
            ],
            [
              "Menengah, 5 tahun",
              "RPJM nasional",
              "RPJM daerah",
              "Renstra kementerian/lembaga atau SKPD"
            ],
            [
              "Tahunan, 1 tahun",
              "RKP",
              "RKPD",
              "Renja kementerian/lembaga atau SKPD"
            ]
          ],
          "align": [
            "left",
            "left",
            "left",
            "left"
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "RKP menjadi pedoman penyusunan RAPBN; RKPD menjadi pedoman RAPBD. Penyusunan Renja-SKPD dalam proses daerah mengacu pada rancangan awal RKPD dan Renstra-SKPD. Rencana unit dan rencana daerah perlu tersambung agar program mempunyai arah yang sama. [UU 25/2004 Ps.1(4–11), 21(3), 25]"
        },
        {
          "kind": "p",
          "text": "APBN ditetapkan dengan undang-undang; APBD dengan peraturan daerah. Keduanya terdiri dari pendapatan, belanja, dan pembiayaan. Rencana kerja dan anggaran kementerian/SKPD memakai pendekatan prestasi kerja: dana dikaitkan dengan hasil kegiatan. [UU 17/2003 Ps.3(2–3), 11(2), 14(2), 16(2), 19(2)]"
        },
        {
          "kind": "p",
          "text": "Di daerah, KUA memuat kebijakan umum; PPAS memuat prioritas serta plafon sementara. Keduanya menjadi pedoman RKA-SKPD. TAPD memverifikasi RKA sebelum bahan itu menjadi rancangan APBD. Pedoman teknis pengelolaan daerah tersedia dalam Permendagri 77/2020. [PP 12/2019 Ps.89–90, 101–104; Permendagri 77/2020 Ps.1–2]"
        },
        {
          "kind": "table",
          "headers": [
            "Tahap pelaporan",
            "Pelaku dan tujuan penyampaian",
            "Batas waktu yang dibedakan"
          ],
          "rows": [
            [
              "Laporan unit pusat",
              "Menteri/pimpinan lembaga kepada Menteri Keuangan",
              "Paling lambat 2 bulan setelah tahun anggaran berakhir"
            ],
            [
              "Laporan unit daerah",
              "Kepala SKPD kepada pejabat pengelola keuangan daerah",
              "Paling lambat 2 bulan setelah tahun anggaran berakhir"
            ],
            [
              "Laporan pemerintah untuk diperiksa",
              "Presiden/kepala daerah kepada BPK",
              "Paling lambat 3 bulan setelah tahun anggaran berakhir"
            ],
            [
              "RUU/Raperda pertanggungjawaban dengan LK yang telah diperiksa BPK",
              "Presiden kepada DPR; kepala daerah kepada DPRD",
              "Paling lambat 6 bulan setelah tahun anggaran berakhir"
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
          "text": "Jangan memindahkan tenggat enam bulan ke semua unit. Tenggat itu berlaku pada penyampaian pertanggungjawaban kepada DPR/DPRD. Tahap unit dan pemeriksaan mempunyai batas berbeda. Untuk LKPD, APIP melakukan reviu sebelum disampaikan kepada BPK. [UU 1/2004 Ps.55–56; UU 17/2003 Ps.30–31; PP 12/2019 Ps.189–191]"
        },
        {
          "kind": "self-check",
          "question": "Kepala SKPD berpendapat laporan unitnya boleh dikirim enam bulan setelah akhir tahun. Apa koreksimu?",
          "answer": [
            {
              "kind": "p",
              "text": "Laporan SKPD kepada pejabat pengelola keuangan daerah paling lambat dua bulan. Enam bulan adalah penyampaian pertanggungjawaban kepala daerah kepada DPRD dengan LK yang diperiksa BPK."
            }
          ],
          "signal": "Kamu membedakan pelaku, penerima, dan tahap tenggat."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Urutkan rencana, anggaran, pelaksanaan, laporan, pemeriksaan, dan tindak lanjut.\nSebut dokumen serta pelakunya; jelaskan tenggat enam bulan dengan tujuan penyampaian yang tepat."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "3. SAP, kerangka konseptual, dan dua basis laporan (5 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Uang yang diterima hari ini bisa berkaitan dengan hak tahun lalu. Karena itu, satu pertanyaan tentang realisasi anggaran dan satu pertanyaan tentang hasil operasional dapat memberi angka berbeda. Kamu perlu memilih laporan sesuai pertanyaan. SAP memberi aturan untuk menyusun dan menyajikan laporan pemerintah. [PP 71/2010 Ps.1(3),(8); Lamp.I KK par.42–45]"
        },
        {
          "kind": "p",
          "text": "SAP dituangkan dalam PSAP, yaitu pernyataan standar untuk topik tertentu. Kerangka Konseptual membantu menjelaskan tujuan dan dasar pelaporan. Penambahan atau perubahan PSAP ditetapkan melalui peraturan Menteri Keuangan setelah pertimbangan BPK, dengan rancangan dari KSAP. Jadi, nomor PSAP baru tidak harus menunggu PP pengganti. [PP 71/2010 Ps.2, 5]"
        },
        {
          "kind": "table",
          "headers": [
            "Unsur Kerangka Konseptual",
            "Komponen utama"
          ],
          "rows": [
            [
              "Pengguna",
              "Masyarakat; wakil rakyat/lembaga pengawas/pemeriksa; pemberi donasi, investasi, pinjaman; pemerintah"
            ],
            [
              "Entitas",
              "Entitas akuntansi menyusun laporan untuk digabungkan; entitas pelaporan wajib menyajikan pertanggungjawaban"
            ],
            [
              "Peranan laporan",
              "Akuntabilitas, manajemen, transparansi, keseimbangan antargenerasi, evaluasi kinerja"
            ],
            [
              "Asumsi dasar",
              "Kemandirian entitas; kesinambungan; keterukuran dalam uang"
            ],
            [
              "Karakteristik kualitatif",
              "Relevan, andal, dapat dibandingkan, dapat dipahami"
            ],
            [
              "Prinsip",
              "Basis akuntansi, nilai historis, realisasi, substansi mengungguli bentuk, periodisitas, konsistensi, pengungkapan lengkap, penyajian wajar"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Kerangka ini membantu kamu membaca tujuan sebuah angka. Laporan perlu berguna bagi pengguna, mencerminkan keadaan secara andal, dan menjelaskan kebijakan yang dipakai. Entitas akuntansi serta entitas pelaporan juga menentukan bagaimana laporan unit digabungkan. [PP 71/2010 Lamp.I KK par.17, 21–27, 31–55]"
        },
        {
          "kind": "figure",
          "title": "Kerangka Konseptual SAP",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 578\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Kerangka Konseptual SAP</title><desc>Enam kelompok konsep menghubungkan pengguna, entitas, peranan, asumsi, kualitas, dan prinsip SAP.</desc><defs><marker id=\"V-TM03-04-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"578\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Kerangka Konseptual SAP</text><path d=\"M480 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-04-arrow)\"/><path d=\"M90 342.5 H32 V220.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"394\" text-anchor=\"middle\" font-size=\"12\">Batas</text><path d=\"M90 464.5 H44 V220.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"208.33333333333331\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Menopang</text><path d=\"M361.66666666666663 464.5 H56 V220.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"479.99999999999994\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Menopang</text><path d=\"M633.3333333333333 464.5 H68 V220.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"751.6666666666666\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Menopang</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pengguna</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Peranan dan tujuan laporan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Entitas: batas laporan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Tiga asumsi</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"436\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Empat karakteristik</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"436\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Delapan prinsip</tspan></text></svg>",
          "overview": {
            "heading": "Kerangka Konseptual SAP",
            "cards": [
              {
                "title": "Pengguna",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Peranan dan tujuan laporan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Entitas: batas laporan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Tiga asumsi",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Empat karakteristik",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Delapan prinsip",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "kebutuhan pengguna → tujuan/peranan laporan; entitas menentukan batas laporan; asumsi, karakteristik, dan prinsip menopang penyajian"
          },
          "caption": "Kerangka konseptual menghubungkan kebutuhan pengguna dengan cara menyajikan informasi. [PP 71/2010 Lamp.I KK par.17, 21–27, 31–55]",
          "altText": "Enam kelompok konsep menghubungkan pengguna, entitas, peranan, asumsi, kualitas, dan prinsip SAP."
        },
        {
          "kind": "table",
          "headers": [
            "Laporan",
            "Pertanyaan yang dijawab",
            "Basis/isi utama"
          ],
          "rows": [
            [
              "LRA",
              "Berapa anggaran dan realisasinya?",
              "Pendapatan, belanja, transfer, pembiayaan menurut basis anggaran; SAP menggunakan basis kas"
            ],
            [
              "LPSAL",
              "Bagaimana perubahan saldo anggaran lebih?",
              "SAL awal, penggunaan SAL, SiLPA/SiKPA, koreksi, SAL akhir"
            ],
            [
              "Neraca",
              "Apa sumber daya dan kewajiban pada tanggal laporan?",
              "Aset, kewajiban, ekuitas secara akrual"
            ],
            [
              "LO",
              "Apa pendapatan dan beban operasional periode ini?",
              "Akrual"
            ],
            [
              "LAK",
              "Dari mana kas berasal dan ke mana digunakan?",
              "Arus kas menurut aktivitas"
            ],
            [
              "LPE",
              "Bagaimana ekuitas berubah?",
              "Ekuitas awal, surplus/defisit-LO, koreksi/perubahan lain, ekuitas akhir"
            ],
            [
              "CaLK",
              "Apa penjelasan angka dan kebijakannya?",
              "Kebijakan, rincian, serta pengungkapan yang diperlukan"
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
          "text": "Ketujuh komponen itu disebut dalam PSAP 01. LAK diwajibkan pada entitas yang mempunyai fungsi perbendaharaan umum. LPSAL disajikan oleh BUN dan entitas pelaporan yang menyusun laporan konsolidasian. Lima laporan SKPD tidak menjadi larangan universal menyajikan LAK/LPSAL pada semua jenis entitas. [PSAP 01 par.14–15; PP 12/2019 Ps.189(2), 190(2)]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi A:** Dinas Layanan Ilustrasi mempunyai hak pendapatan jasa Rp 47.650.000 pada 10 Desember 2025. Jasa sudah diberikan dan semua syarat pengakuan pendapatan pertukaran terpenuhi; kas masuk RKUD pada 5 Januari 2026. Tanpa transaksi lain, pendapatan masuk LO 2025 dan piutang akhir 2025; pendapatan-LRA masuk 2026 saat kas diterima. [PP 71/2010 Lamp.I KK par.42–45]"
        },
        {
          "kind": "figure",
          "title": "Satu transaksi, dua pertanyaan pelaporan",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 723\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Satu transaksi, dua pertanyaan pelaporan</title><desc>Hak jasa tahun 2025 menghasilkan pendapatan-LO dan piutang; kas 2026 menghasilkan pendapatan-LRA dan pelunasan piutang.</desc><defs><marker id=\"V-TM03-05-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"723\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Satu transaksi, dua pertanyaan pelaporan</text><path d=\"M480 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-05-arrow)\"/><path d=\"M480 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-05-arrow)\"/><path d=\"M276.25 249 L276.25 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-05-arrow)\"/><path d=\"M683.75 249 L683.75 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-05-arrow)\"/><path d=\"M462.5 354 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-05-arrow)\"/><text class=\"svg-muted\" x=\"276.25\" y=\"417\" text-anchor=\"middle\" font-size=\"12\">Pelunasan</text><path d=\"M276.25 394 L480 459\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"417\" text-anchor=\"middle\" font-size=\"12\">Laporan</text><path d=\"M683.75 394 L480 459\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"683.75\" y=\"417\" text-anchor=\"middle\" font-size=\"12\">Laporan</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Transaksi jasa Ilustrasi A</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Finansial: hak 2025</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Anggaran: penerimaan kas 2026</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">LO dan piutang Neraca 2025</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Pendapatan-LRA 2026; piutang</tspan><tspan x=\"683.75\" dy=\"23\">terselesaikan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"459\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"488\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Tujuh komponen: LRA; LPSAL; Neraca; LO; LAK; LPE; CaLK</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"581\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pengecualian LAK/LPSAL menurut fungsi entitas</tspan></text></svg>",
          "overview": {
            "heading": "Satu transaksi, dua pertanyaan pelaporan",
            "cards": [
              {
                "title": "Transaksi jasa Ilustrasi A",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Finansial: hak 2025",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Anggaran: penerimaan kas 2026",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "LO dan piutang Neraca 2025",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pendapatan-LRA 2026; piutang terselesaikan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Tujuh komponen: LRA; LPSAL; Neraca; LO; LAK; LPE; CaLK",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pengecualian LAK/LPSAL menurut fungsi entitas",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "transaksi bercabang ke pengakuan hak dan penerimaan kas; piutang 2025 terselesaikan oleh kas 2026"
          },
          "caption": "Tanggal kas dan tanggal hak dapat menghasilkan periode laporan berbeda. [PP 71/2010 Ps.1(8); Lamp.I KK par.42–45; PSAP 01 par.14–15; Ilustrasi A]",
          "altText": "Hak jasa tahun 2025 menghasilkan pendapatan-LO dan piutang; kas 2026 menghasilkan pendapatan-LRA dan pelunasan piutang."
        },
        {
          "kind": "self-check",
          "question": "Dalam Ilustrasi A, apakah penerimaan 2026 harus menjadi pendapatan-LO baru Rp 47.650.000 lagi?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Hak pendapatan sudah diakui pada 2025. Penerimaan 2026 menyelesaikan piutang dan masuk pendapatan-LRA 2026; transaksi ini tidak menambah pendapatan-LO lagi."
            }
          ],
          "signal": "Kamu dapat memisahkan pengakuan hak, kas, dan pelunasan piutang."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Tentukan pertanyaan laporan, lalu sebut basis dan waktu pengakuannya.\nUntuk komponen, sebut tujuh nama dan pengecualian LAK/LPSAL; gunakan PSAP 01 par.14–15."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "4. HKPD: pajak, layanan, dan batas belanja (4 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Daerah perlu pendapatan untuk membiayai pelayanan. Namun, sumber pendapatan dan arah belanjanya mempunyai aturan. UU 1/2022 tentang HKPD mengatur hubungan keuangan pusat-daerah, pajak/retribusi, dan pengelolaan belanja. UU ini menggantikan UU 33/2004 serta UU 28/2009. [UU 1/2022 Ps.4, 141–149, 189(1)]"
        },
        {
          "kind": "table",
          "headers": [
            "Tingkat pemungut",
            "Jenis pajak dalam UU 1/2022 Ps.4"
          ],
          "rows": [
            [
              "Provinsi",
              "PKB, BBNKB, Pajak Alat Berat, Pajak Bahan Bakar Kendaraan Bermotor, Pajak Air Permukaan, Pajak Rokok, Opsen Pajak MBLB"
            ],
            [
              "Kabupaten/kota",
              "PBB-P 2, BPHTB, PBJT, Pajak Reklame, Pajak Air Tanah, Pajak MBLB, Pajak Sarang Burung Walet, Opsen PKB, Opsen BBNKB"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "**PBJT**, Pajak Barang dan Jasa Tertentu, mencakup makanan/minuman, tenaga listrik, jasa perhotelan, jasa parkir, serta jasa kesenian/hiburan. Istilah pajak hotel atau restoran dalam catatan lama perlu dibaca melalui pengaturan PBJT sekarang. Objek, pengecualian, dan tarif tetap perlu diperiksa untuk transaksi tertentu. PP 35/2023 menjadi aturan pelaksanaan pajak dan retribusi daerah. [UU 1/2022 Ps.50–60; PP 35/2023]"
        },
        {
          "kind": "p",
          "text": "Belanja diarahkan untuk kebutuhan layanan dan target kinerja. Standar harga serta analisis standar belanja membantu menilai kewajaran biaya. Kebutuhan pelayanan dasar memakai standar pelayanan minimal. Besarnya anggaran tahun lalu saja tidak cukup untuk menentukan alokasi tahun berikut. [UU 1/2022 Ps.141–144]"
        },
        {
          "kind": "table",
          "headers": [
            "Uji",
            "Pembilang",
            "Pembagi",
            "Ambang"
          ],
          "rows": [
            [
              "Pegawai",
              "Belanja pegawai dikurangi tunjangan guru yang dialokasikan melalui TKD",
              "Total belanja APBD",
              "Paling tinggi 30%"
            ],
            [
              "Infrastruktur pelayanan publik",
              "Belanja infrastruktur pelayanan publik",
              "Total belanja APBD dikurangi belanja bagi hasil dan/atau transfer kepada daerah dan/atau desa",
              "Paling rendah 40%"
            ]
          ],
          "align": [
            "left",
            "left",
            "left",
            "left"
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Daerah yang porsinya di luar ambang perlu menyesuaikan paling lama lima tahun sejak pengundangan 5 Januari 2022. Undang-undang juga membuka penyesuaian persentase melalui keputusan Menteri dengan koordinasi yang ditentukan. Karena itu, hitungan APBD 2026 perlu dibaca bersama masa penyesuaian dan ketentuan yang berlaku bagi daerah tersebut. [UU 1/2022 Ps.146(1–3), 147(1–4)]"
        },
        {
          "kind": "figure",
          "title": "Memeriksa dua batas belanja HKPD",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 723\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Memeriksa dua batas belanja HKPD</title><desc>Dua jalur menghitung porsi pegawai dan infrastruktur dengan pembagi berbeda, kemudian menilai masa penyesuaian.</desc><defs><marker id=\"V-TM03-06-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"723\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Memeriksa dua batas belanja HKPD</text><path d=\"M480 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><path d=\"M480 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><path d=\"M276.25 272 L276.25 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><path d=\"M683.75 272 L683.75 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><path d=\"M276.25 394 L480 459\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><path d=\"M683.75 394 L480 459\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><path d=\"M480 516 L480 581\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-06-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Identifikasi tahun dan klasifikasi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pegawai: (belanja pegawai − tunjangan</tspan><tspan x=\"276.25\" dy=\"23\">guru TKD) ÷ total belanja</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Infrastruktur: belanja infrastruktur ÷</tspan><tspan x=\"683.75\" dy=\"23\">(total belanja − bagi hasil/transfer)</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Bandingkan maksimum 30%</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"337\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Bandingkan minimum 40%</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"459\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"488\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Periksa masa penyesuaian dan keputusan Menteri</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"581\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Kesimpulan terbatas</tspan></text></svg>",
          "overview": {
            "heading": "Memeriksa dua batas belanja HKPD",
            "cards": [
              {
                "title": "Identifikasi tahun dan klasifikasi",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pegawai: (belanja pegawai − tunjangan guru TKD) ÷ total belanja",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Infrastruktur: belanja infrastruktur ÷ (total belanja − bagi hasil/transfer)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Bandingkan maksimum 30%",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Bandingkan minimum 40%",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Periksa masa penyesuaian dan keputusan Menteri",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Kesimpulan terbatas",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "input → dua jalur hitung → perbandingan ambang → konteks penerapan → kesimpulan terbatas"
          },
          "caption": "Ambang tidak dapat diuji dengan pembagi atau pengecualian yang salah. [UU 1/2022 Ps.146–147, PDF 81–82]",
          "altText": "Dua jalur menghitung porsi pegawai dan infrastruktur dengan pembagi berbeda, kemudian menilai masa penyesuaian."
        },
        {
          "kind": "self-check",
          "question": "Apakah pembagi infrastruktur adalah total belanja APBD setelah dikurangi seluruh belanja pegawai?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Pembagi mengurangi belanja bagi hasil dan/atau transfer kepada daerah dan/atau desa. Pengecualian tunjangan guru TKD berada pada pembilang uji pegawai."
            }
          ],
          "signal": "Kamu dapat menempatkan pengurang pada uji yang benar."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Tulis rumus dengan arti pembilang dan pembagi, kemudian hitung persentasenya.\nBandingkan ambang dan sebut masa penyesuaian; hindari menyimpulkan pelanggaran otomatis dari angka 2026."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "5. Pemeriksaan, opini, dan perubahan standar (3 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Laporan yang selesai masih perlu diperiksa. BPK memeriksa pengelolaan dan tanggung jawab keuangan negara. Tiga jenis pemeriksaan menjawab pertanyaan yang berbeda. Pendapat tentang kewajaran LK juga berbeda dari kesimpulan mengenai kinerja suatu program. [UU 15/2004 Ps.2–4, 16]"
        },
        {
          "kind": "table",
          "headers": [
            "Jenis pemeriksaan",
            "Objek/arah",
            "Hasil dalam LHP"
          ],
          "rows": [
            [
              "Keuangan",
              "Laporan keuangan",
              "Opini"
            ],
            [
              "Kinerja",
              "Ekonomi, efisiensi, efektivitas",
              "Temuan, kesimpulan, rekomendasi"
            ],
            [
              "Dengan tujuan tertentu",
              "Hal di luar dua jenis tersebut",
              "Kesimpulan"
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
          "text": "Opini mempertimbangkan kesesuaian SAP, kecukupan pengungkapan, kepatuhan terhadap peraturan, dan efektivitas pengendalian intern. Empat jenisnya: Wajar Tanpa Pengecualian, Wajar Dengan Pengecualian, Tidak Wajar, dan Tidak Menyatakan Pendapat. Opini WTP memberi informasi kewajaran laporan; angka serapan anggaran tetap memerlukan penilaian lain. [UU 15/2004 Penjelasan Ps.16(1)]"
        },
        {
          "kind": "p",
          "text": "Pejabat wajib menindaklanjuti rekomendasi. Jawaban atau penjelasan tentang tindak lanjut disampaikan kepada BPK paling lambat 60 hari setelah LHP diterima. Tenggat itu tidak boleh dirumuskan sebagai semua rekomendasi pasti selesai dalam 60 hari. BPK memantau pelaksanaannya. [UU 15/2004 Ps.20(1–4)]"
        },
        {
          "kind": "figure",
          "title": "Dari pemeriksaan ke tindak lanjut",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 723\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Dari pemeriksaan ke tindak lanjut</title><desc>Tiga jenis pemeriksaan memiliki keluaran berbeda; pejabat memberi jawaban tindak lanjut dalam 60 hari dan BPK memantau.</desc><defs><marker id=\"V-TM03-07-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"723\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Dari pemeriksaan ke tindak lanjut</text><path d=\"M480 127 L208.33333333333331 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M480 127 L479.99999999999994 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M480 127 L751.6666666666666 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M208.33333333333331 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M479.99999999999994 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M751.6666666666666 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M480 394 L480 459\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><path d=\"M480 516 L480 581\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-07-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pilih jenis pemeriksaan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Keuangan: opini</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Kinerja: temuan,</tspan><tspan x=\"479.99999999999994\" dy=\"23\">kesimpulan, rekomendasi</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Tujuan tertentu:</tspan><tspan x=\"751.6666666666666\" dy=\"23\">kesimpulan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Rekomendasi yang relevan → pejabat menindaklanjuti</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"459\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"488\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Jawaban/penjelasan kepada BPK maksimal 60 hari setelah menerima LHP</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"581\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">BPK memantau</tspan></text></svg>",
          "overview": {
            "heading": "Dari pemeriksaan ke tindak lanjut",
            "cards": [
              {
                "title": "Pilih jenis pemeriksaan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Keuangan: opini",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Kinerja: temuan, kesimpulan, rekomendasi",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Tujuan tertentu: kesimpulan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Rekomendasi yang relevan → pejabat menindaklanjuti",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Jawaban/penjelasan kepada BPK maksimal 60 hari setelah menerima LHP",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "BPK memantau",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "pemeriksaan → hasil sesuai jenis → rekomendasi yang relevan → tindak lanjut dan jawaban → pemantauan"
          },
          "caption": "Bedakan keluaran pemeriksaan dan kewajiban jawaban tindak lanjut. [UU 15/2004 Ps.4, 16–20]",
          "altText": "Tiga jenis pemeriksaan memiliki keluaran berbeda; pejabat memberi jawaban tindak lanjut dalam 60 hari dan BPK memantau."
        },
        {
          "kind": "table",
          "headers": [
            "Standar",
            "Untuk apa?",
            "Penyusun/penetapan dan batas"
          ],
          "rows": [
            [
              "SAP",
              "Menyusun dan menyajikan LK pemerintah Indonesia",
              "PP 71/2010; PSAP dapat ditambah/diubah melalui PMK menurut Ps.5"
            ],
            [
              "SPKN",
              "Patokan pemeriksaan pengelolaan dan tanggung jawab keuangan negara",
              "Peraturan BPK; SPKN 2017 berlaku juga untuk APIP ketika melakukan audit kinerja dan audit dengan tujuan tertentu sesuai Ps.5"
            ],
            [
              "IPSAS",
              "Standar akuntansi sektor publik internasional",
              "IPSASB; penerapannya di Indonesia tidak otomatis menggantikan SAP"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "callout",
          "variant": "note",
          "title": "Update 2026",
          "text": "Untuk laporan TA 2026, perhatikan PSAP 18 dan 19; PSAP 20 mulai TA 2027.\nPSAP 18 juga mengizinkan penerapan lebih dini dengan pengungkapan.\nSPKN (Peraturan BPK 1/2017; sudah ada Peraturan BPK 1/2026 yang berlaku 2028) tetap dibaca menurut waktu penerapannya.\nPMK 220/2016 untuk BLU telah diganti PMK 128/2024. [PSAP 18 par.115; PSAP 19 par.38; PSAP 20 par.56; BPK 1/2026 Ps.8–9; JDIH PMK 128/2024]"
        },
        {
          "kind": "figure",
          "title": "Tahun penetapan dan tahun penerapan",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 822\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Tahun penetapan dan tahun penerapan</title><desc>Garis waktu membedakan penetapan PSAP 18 dan 19 pada 2024 dari penerapan 2026, serta pengundangan SPKN 2026 dari berlakunya 2028.</desc><defs><marker id=\"V-TM03-03-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"822\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Tahun penetapan dan tahun penerapan</text><path d=\"M480 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-03-arrow)\"/><path d=\"M480 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-03-arrow)\"/><path d=\"M480 371 L480 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-03-arrow)\"/><text class=\"svg-muted\" x=\"480\" y=\"394\" text-anchor=\"middle\" font-size=\"12\">Penerapan 18/19</text><path d=\"M480 493 L480 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-03-arrow)\"/><path d=\"M480 615 L480 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-03-arrow)\"/><path d=\"M90 464.5 H20 V708.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-03-arrow)\"/><text class=\"svg-muted\" x=\"480\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">SPKN berlaku</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">2010: SAP</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">2015: batas penerapan akrual pemda</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">2024: penetapan PSAP 18/19</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">2026: penerapan PSAP 18/19; pengundangan SPKN baru 10 April</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">2027: penerapan PSAP 20</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">2028: SPKN baru berlaku 10 April</tspan></text></svg>",
          "overview": {
            "heading": "Tahun penetapan dan tahun penerapan",
            "cards": [
              {
                "title": "2010: SAP",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "2015: batas penerapan akrual pemda",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "2024: penetapan PSAP 18/19",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "2026: penerapan PSAP 18/19; pengundangan SPKN baru 10 April",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "2027: penerapan PSAP 20",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "2028: SPKN baru berlaku 10 April",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "urutan waktu; garis dari penetapan 18/19 ke penerapan 2026; garis dari pengundangan SPKN 2026 ke berlaku 2028"
          },
          "caption": "Gunakan tahun penerapan untuk memilih standar suatu kasus. [PP 71/2010; Permendagri 64/2013 Ps.10(2); SAP 2026 PDF 435, 461, 507; BPK 1/2026 Ps.8–9]",
          "altText": "Garis waktu membedakan penetapan PSAP 18 dan 19 pada 2024 dari penerapan 2026, serta pengundangan SPKN 2026 dari berlakunya 2028."
        },
        {
          "kind": "self-check",
          "question": "Tim memakai SPKN baru untuk pemeriksaan tahun 2026 hanya karena metadata portal bertuliskan Berlaku. Apa dasar koreksinya?",
          "answer": [
            {
              "kind": "p",
              "text": "Baca Ps.8–9 Peraturan BPK 1/2026. Pencabutan aturan 2017 terjadi saat aturan baru mulai berlaku, dua tahun sejak pengundangan 10 April 2026, yaitu 10 April 2028."
            }
          ],
          "signal": "Kamu memilih waktu berlaku dari ketentuan teks, bukan label portal saja."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Bedakan SAP, SPKN, dan IPSAS, lalu tentukan tahun yang ditanyakan.\nSebut jenis pemeriksaan atau tahun penerapan standar beserta dasar yang sesuai."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "6. Entitas, kebijakan, dan sistem daerah (3 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Standar memberi prinsip, tetapi unit masih memerlukan kebijakan dan prosedur pelaksanaan. Kebijakan akuntansi menjelaskan pilihan serta penerapan aturan pada akun dan laporan. **SAPD**, Sistem Akuntansi Pemerintah Daerah, mengatur prosedur pengolahan transaksi menjadi laporan. BAS, Bagan Akun Standar, membantu klasifikasi akun. [Permendagri 64/2013 Ps.3–6; PP 12/2019 Ps.185–187]"
        },
        {
          "kind": "table",
          "headers": [
            "Tingkat",
            "Fungsi",
            "Hindari tertukar dengan"
          ],
          "rows": [
            [
              "SAP/PSAP",
              "Prinsip pengakuan, pengukuran, penyajian",
              "Aplikasi komputer"
            ],
            [
              "Kebijakan daerah",
              "Pilihan/penerapan akuntansi serta pengungkapan, ditetapkan dengan Perkada",
              "Aturan untuk otomatis mengganti SAP"
            ],
            [
              "SAPD",
              "Prosedur, dokumen, pencatatan, dan pelaporan; mencakup SKPKD dan SKPD",
              "Standar internasional"
            ],
            [
              "BAS",
              "Penggolongan dan kode akun",
              "Jaminan semua pencatatan pasti benar"
            ]
          ],
          "align": [
            "left",
            "left",
            "left"
          ]
        },
        {
          "kind": "figure",
          "title": "Dari standar sampai laporan daerah",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 822\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Dari standar sampai laporan daerah</title><desc>Hierarki menghubungkan SAP, kebijakan daerah, SAPD, pencatatan, dan laporan; BAS mendukung klasifikasi.</desc><defs><marker id=\"V-TM03-08-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"822\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Dari standar sampai laporan daerah</text><path d=\"M480 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-08-arrow)\"/><path d=\"M480 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-08-arrow)\"/><path d=\"M480 371 L480 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-08-arrow)\"/><path d=\"M480 493 L480 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM03-08-arrow)\"/><path d=\"M90 708.5 H68 V464.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"760\" text-anchor=\"middle\" font-size=\"12\">Klasifikasi</text><path d=\"M90 708.5 H20 V586.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"760\" text-anchor=\"middle\" font-size=\"12\">Klasifikasi</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">SAP/PSAP</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Kebijakan akuntansi daerah</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">SAPD SKPD/SKPKD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Dokumen dan pencatatan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Laporan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">BAS: klasifikasi lintas proses</tspan></text></svg>",
          "overview": {
            "heading": "Dari standar sampai laporan daerah",
            "cards": [
              {
                "title": "SAP/PSAP",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Kebijakan akuntansi daerah",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "SAPD SKPD/SKPKD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Dokumen dan pencatatan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Laporan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "BAS: klasifikasi lintas proses",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "SAP → kebijakan → SAPD → pencatatan → laporan; BAS terhubung ke pencatatan dan pelaporan"
          },
          "caption": "Prinsip, pilihan kebijakan, prosedur, dan kode akun mempunyai fungsi berbeda. [Permendagri 64/2013 Ps.2–6; PP 12/2019 Ps.185–187]",
          "altText": "Hierarki menghubungkan SAP, kebijakan daerah, SAPD, pencatatan, dan laporan; BAS mendukung klasifikasi."
        },
        {
          "kind": "p",
          "text": "**Ilustrasi C:** Tim Pelaporan Ilustrasi menyiapkan LKPD TA 2026. Tim memilih SAP untuk laporan, kebijakan daerah untuk penerapan, dan SAPD untuk prosedur unit. Jika salah memilih akun, tim perlu memeriksa bukti serta klasifikasi; adanya BAS tidak menghapus kebutuhan pemeriksaan tersebut."
        },
        {
          "kind": "table",
          "headers": [
            "Entitas layanan",
            "Kedudukan yang dibedakan"
          ],
          "rows": [
            [
              "BLU pusat",
              "Sistem akuntansi/pelaporan BLU pada lingkup pusat; PMK 128/2024 mengganti PMK 220/2016"
            ],
            [
              "BLUD daerah",
              "Pengelolaan dalam kerangka PP 12/2019; LK disusun berdasarkan SAP dan menjadi bagian LKPD"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Fleksibilitas BLUD tidak memutus hubungannya dengan APBD dan LKPD. Rencana bisnis dan anggaran serta laporan keuangannya tetap terkait pelaporan daerah. Karena itu, jangan menjadikan PMK untuk BLU pusat sebagai satu-satunya dasar BLUD daerah. [PP 12/2019 Ps.205–210; JDIH PMK 128/2024]"
        },
        {
          "kind": "self-check",
          "question": "Tim daerah menganggap kode BAS dalam Permendagri 64/2013 boleh langsung dipakai sebagai kode akun 2026. Apa yang harus diperiksa?",
          "answer": [
            {
              "kind": "p",
              "text": "Periksa pembaruan klasifikasi, kodefikasi, dan nomenklatur serta BAS yang berlaku bagi tahun itu. Permendagri 90/2019 mengubah sebagian pengaturan BAS; jangan memakai daftar 2013 secara otomatis."
            }
          ],
          "signal": "Kamu memisahkan konsep BAS yang tetap berguna dari kode historis."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Tentukan entitas pusat atau daerah, lalu urutkan standar, kebijakan, sistem, dan klasifikasi.\nJelaskan fungsi masing-masing dengan PP 12 Ps.185–187; bedakan BLU dan BLUD sesuai lingkup."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pendalaman",
      "blocks": [
        {
          "kind": "h3",
          "text": "Mengapa reformasi diperlukan?"
        },
        {
          "kind": "p",
          "text": "Penjelasan UU 17/2003 mencatat ICW pertama kali ditetapkan pada 1864 dan mulai berlaku pada 1867. ICW kemudian diubah, antara lain dalam Staatsblad 1925 No.448 serta peraturan berikutnya. Bersama IBW, RAB, dan IAR, aturan lama dinilai tidak lagi memadai untuk perubahan kelembagaan dan tuntutan pengelolaan. Sejarah ini menjelaskan alasan reformasi, tanpa menjadikan seluruh uraian RMK sebagai fakta resmi. [UU 17/2003 Penjelasan Umum bagian 1, PDF 21–22]"
        },
        {
          "kind": "p",
          "text": "**Catatan kuliah, belum dicek ke sumber resmi:** RMK mengaitkan praktik lama dengan single entry dan keterlambatan pelaporan. Klaim rinci itu tidak dijadikan kunci fakta sejarah pada latihan. Untuk jawaban tentang ICW, gunakan alasan reformasi dari Penjelasan UU. [RMK TM03 PDF 1]"
        },
        {
          "kind": "h3",
          "text": "Delapan prinsip SAP secara ringkas"
        },
        {
          "kind": "table",
          "headers": [
            "Prinsip",
            "Makna untuk membaca laporan"
          ],
          "rows": [
            [
              "Basis akuntansi",
              "Bedakan finansial akrual dengan pelaksanaan anggaran menurut basisnya"
            ],
            [
              "Nilai historis",
              "Aset dicatat sebesar perolehan atau nilai wajar imbalan yang diberikan; kewajiban sebesar nilai yang diharapkan dibayar"
            ],
            [
              "Realisasi",
              "Anggaran mengotorisasi pendapatan/belanja; penekanan pelaporan anggaran berbeda dari penandingan komersial"
            ],
            [
              "Substansi mengungguli bentuk",
              "Utamakan substansi ekonomi; perbedaan dengan bentuk hukum dijelaskan di CaLK"
            ],
            [
              "Periodisitas",
              "Kegiatan dibagi ke periode; periode utama tahunan, periode lain dapat digunakan"
            ],
            [
              "Konsistensi",
              "Metode diterapkan antarperiode; perubahan untuk informasi lebih baik dijelaskan di CaLK"
            ],
            [
              "Pengungkapan lengkap",
              "Sajikan informasi yang diperlukan pengguna, pada lembar laporan atau CaLK"
            ],
            [
              "Penyajian wajar",
              "Sajikan secara wajar; pertimbangan yang sehat tidak membenarkan cadangan tersembunyi atau penyajian sengaja berat sebelah"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[PP 71/2010 Lamp.I KK par.41–55]"
        },
        {
          "kind": "h3",
          "text": "Peta PSAP 13–20"
        },
        {
          "kind": "table",
          "headers": [
            "PSAP",
            "Topik",
            "Produk penetapan",
            "Tahun produk",
            "Penerapan yang dipakai dalam bab ini"
          ],
          "rows": [
            [
              "13",
              "Penyajian laporan keuangan BLU",
              "PMK 217/2015",
              "2015",
              "Peta topik; tidak membuat kasus tanggal efektif rinci"
            ],
            [
              "14",
              "Akuntansi aset tak berwujud",
              "PMK 90/2019",
              "2019",
              "Peta topik"
            ],
            [
              "15",
              "Peristiwa setelah tanggal pelaporan",
              "PMK 157/2020",
              "2020",
              "Peta topik"
            ],
            [
              "16",
              "Perjanjian konsesi jasa, pemberi konsesi",
              "PMK 84/2021",
              "2021",
              "Peta topik"
            ],
            [
              "17",
              "Properti investasi",
              "PMK 85/2021",
              "2021",
              "Peta topik"
            ],
            [
              "18",
              "Pendapatan dari transaksi nonpertukaran",
              "PMK 122/2024",
              "2024",
              "Laporan TA 2026; boleh lebih dini dengan pengungkapan"
            ],
            [
              "19",
              "Pengaturan bersama",
              "PMK 123/2024",
              "2024",
              "Laporan TA 2026; mekanik kasus tidak dibahas"
            ],
            [
              "20",
              "Agrikultur",
              "PMK 85/2025",
              "2025",
              "Laporan TA 2027"
            ]
          ],
          "align": [
            "left",
            "left",
            "left",
            "left",
            "left"
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Tahun produk menunjukkan tahun penetapan, bukan tanggal pengundangan atau tahun laporan yang sama untuk semua standar. Penerapan PSAP 18, 19, dan 20 di atas berasal dari paragraf efektif masing-masing. [SAP 2026 KSAP daftar isi PDF 3; PSAP 18 par.115 PDF 435; PSAP 19 par.38 PDF 461; PSAP 20 par.56 PDF 507]"
        },
        {
          "kind": "h3",
          "text": "Batas transisi dan lingkup"
        },
        {
          "kind": "table",
          "headers": [
            "Aturan/standar",
            "Batas penggunaan"
          ],
          "rows": [
            [
              "SAP kas menuju akrual, Lamp.II PP 71",
              "Kerangka transisi historis; tidak mengganti SAP akrual untuk contoh sekarang"
            ],
            [
              "Permendagri 64 Ps.10(2)",
              "Batas penerapan akrual pemda mulai TA 2015; LRA tetap mengikuti basis anggaran"
            ],
            [
              "SPKN 2017",
              "Kerangka serta PSP 100 umum, 200 pelaksanaan, 300 pelaporan"
            ],
            [
              "SPKN 2026",
              "Teks baru mengatur tujuh standar; pencabutan 2017 saat mulai berlaku 10 April 2028"
            ],
            [
              "PMK 100/2025",
              "Kebijakan akuntansi pemerintah pusat untuk laporan TA 2025; tidak otomatis menjadi kebijakan pemda"
            ],
            [
              "IPSASB Handbook 2025",
              "Kumpulan standar yang terbit sampai 31 Januari 2025; gunakan sebagai pembanding dengan identitas edisi"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[PP 71/2010 Ps.1(9), 7; Permendagri 64/2013 Ps.10; BPK 1/2017 Ps.3; BPK 1/2026 Ps.3, 8–9; PMK 100/2025 Ps.3, 6; pengantar IPSASB Handbook 2025]"
        },
        {
          "kind": "p",
          "text": "Perubahan kebijakan darurat dan putusan MK perlu dibaca jika soal menyentuh pasal terdampak. Bab ini memakai alur normal dan tidak memberi kunci tentang rincian organisasi pada UU 17 Ps.15(5) atau tarif spa. Untuk HKPD, sanksi Pasal 148 bersifat kewenangan yang bersyarat; hasil satu rasio tidak otomatis berarti semua TKD dipotong. [UU 1/2022 Ps.148; register sumber resmi]"
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
            "Yang sering tertukar",
            "Pembeda dalam jawaban"
          ],
          "rows": [
            [
              "SAP dan SPKN",
              "Penyusunan laporan dan pemeriksaan"
            ],
            [
              "SAP dan IPSAS",
              "Standar nasional yang ditetapkan dengan aturan Indonesia dan standar internasional"
            ],
            [
              "Pendapatan-LO dan pendapatan-LRA",
              "Hak secara akrual dan realisasi menurut basis anggaran"
            ],
            [
              "Dua, tiga, enam bulan",
              "Unit ke pengelola; pemerintah ke BPK; pertanggungjawaban ke legislatif"
            ],
            [
              "60 hari",
              "Jawaban/penjelasan tindak lanjut setelah LHP diterima"
            ],
            [
              "Pegawai dan infrastruktur",
              "Pengurang serta pembagi berbeda"
            ],
            [
              "Tahun PMK dan tahun laporan",
              "Penetapan dan penerapan tidak harus sama"
            ],
            [
              "BLU dan BLUD",
              "Lingkup pusat dan daerah"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "h3",
          "text": "Latihan lengkap"
        },
        {
          "kind": "p",
          "text": "Proporsi belajar: 14 esai (E), 3 perlakuan konseptual (T), 3 membaca laporan (L). Ini susunan latihan, bukan prediksi format UTS. Hanya tiga kasus Ilustrasi digunakan ulang: A Dinas Layanan, B Daerah Ilustrasi, dan C Tim Pelaporan."
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "E01. Paket reformasi",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut tiga undang-undang paket reformasi dan jelaskan pembagian pertanyaannya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** UU 17/2003 mengatur keuangan negara dan kewenangan pengelola. UU 1/2004 mengatur perbendaharaan. UU 15/2004 mengatur pemeriksaan serta tindak lanjut. Hubungkan dari pengelolaan ke pelaksanaan lalu pemeriksaan. [UU 17 Ps.1–3; UU 1 Ps.1–3; UU 15 Ps.2–4]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E02. Cakupan keuangan negara",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Mengapa cakupan keuangan negara tidak cukup dijelaskan sebagai kas APBN?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Definisi mencakup hak dan kewajiban yang dapat dinilai dengan uang. Pasal 2 mencakup arus negara/daerah, kekayaan yang dipisahkan, dan hubungan tertentu dengan kekayaan pihak lain. Kas APBN hanya salah satu bagian; cakupan hukum tidak otomatis menyamakan standar laporan semua entitas. [UU 17 Ps.1(1), 2; PP 71 Ps.1–2]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E03. Pemegang dan pengguna",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Jelaskan kedudukan Presiden, Menteri Keuangan, menteri teknis, serta kepala daerah."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Presiden memegang kekuasaan pengelolaan keuangan negara. Menteri Keuangan menerima kuasa sebagai pengelola fiskal; menteri/pimpinan lembaga sebagai pengguna anggaran/barang. Kepala daerah menerima penyerahan kekuasaan pengelolaan daerah. Kewenangan moneter dikecualikan dari pengelolaan tersebut. [UU 17 Ps.6–10]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E04. Rencana dan anggaran",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Pasangkan dokumen rencana pusat/daerah, waktunya, dan hubungan dengan RAPBN/RAPBD."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** RPJP/RPJPD berjangka 20 tahun, RPJM/RPJMD lima tahun, RKP/RKPD satu tahun. Unit mempunyai Renstra lima tahun dan Renja tahunan. RKP memandu RAPBN; RKPD memandu RAPBD. APBN ditetapkan dengan UU, APBD dengan Perda. [UU 25 Ps.1, 25; UU 17 Ps.3(2–3)]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E05. Alur daerah",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Urutkan KUA, PPAS, RKA-SKPD, verifikasi, dan RAPBD. Jelaskan peran TAPD."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** KUA dan PPAS disusun serta disepakati sebagai pedoman RKA-SKPD. TAPD memverifikasi RKA melalui proses PPKD; RKA yang perlu diperbaiki dikembalikan kepada kepala SKPD. PPKD menyusun rancangan APBD untuk diajukan kepala daerah kepada DPRD. Verifikasi menilai kesesuaian RKA dengan pedoman serta ketentuan. [PP 12 Ps.89–90, 101–104]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E06. Enam bulan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Kepada siapa pertanggungjawaban enam bulan disampaikan? Bedakan dari laporan unit dan laporan untuk diperiksa."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Presiden menyampaikan RUU pertanggungjawaban kepada DPR; kepala daerah menyampaikan Raperda kepada DPRD. LK yang dilampirkan telah diperiksa BPK. Batasnya enam bulan setelah akhir tahun anggaran; laporan unit ke pengelola dua bulan dan laporan pemerintah ke BPK tiga bulan. [UU 17 Ps.30–31; UU 1 Ps.55–56]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E07. Jenis pemeriksaan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Bandingkan pemeriksaan keuangan, kinerja, dan dengan tujuan tertentu beserta keluaran LHP."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:**"
        },
        {
          "kind": "table",
          "headers": [
            "Jenis",
            "Arah",
            "Keluaran"
          ],
          "rows": [
            [
              "Keuangan",
              "LK",
              "Opini"
            ],
            [
              "Kinerja",
              "Ekonomi, efisiensi, efektivitas",
              "Temuan, kesimpulan, rekomendasi"
            ],
            [
              "Dengan tujuan tertentu",
              "Di luar kedua jenis tersebut",
              "Kesimpulan"
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
          "text": "[UU 15 Ps.4, 16]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E08. Opini dan tindak lanjut",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut empat kriteria opini, empat jenis opini, dan arti tenggat 60 hari."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Kriteria: SAP, pengungkapan, kepatuhan peraturan, dan efektivitas pengendalian intern. Jenis: Wajar Tanpa Pengecualian, Wajar Dengan Pengecualian, Tidak Wajar, Tidak Menyatakan Pendapat. Pejabat memberi jawaban/penjelasan tindak lanjut paling lambat 60 hari sejak LHP diterima; kewajiban menindaklanjuti serta pemantauan tetap berjalan. [UU 15 Penjelasan Ps.16(1), Ps.20]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E09. HKPD dan PBJT",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut dua UU yang digantikan HKPD dan lima kelompok objek PBJT. Mengapa label pajak hotel lama perlu diperiksa?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** UU 1/2022 mengganti UU 33/2004 dan UU 28/2009. PBJT meliputi makanan/minuman, tenaga listrik, perhotelan, parkir, kesenian/hiburan. Label lama perlu disesuaikan dengan struktur PBJT; objek, pengecualian, serta tarif harus dibaca untuk transaksi yang ditanyakan. [UU 1/2022 Ps.50–60, 189]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E10. SAP dan PSAP",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Apa hubungan SAP, PSAP, Kerangka Konseptual, dan KSAP?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** SAP adalah prinsip penyusunan/penyajian LK pemerintah. SAP dituangkan dalam PSAP dan dilengkapi Kerangka Konseptual. KSAP menyiapkan rancangan perubahan/penambahan PSAP; penetapannya melalui PMK setelah pertimbangan BPK. Kerangka Konseptual menjelaskan pengguna, tujuan, asumsi, kualitas, serta prinsip. [PP 71 Ps.1–5; Lamp.I KK]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E11. Komponen dan entitas",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut tujuh laporan dan jelaskan pengecualian LAK serta LPSAL."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** LRA, LPSAL, Neraca, LO, LAK, LPE, CaLK. LAK diwajibkan pada entitas yang mempunyai fungsi perbendaharaan umum. LPSAL disajikan BUN dan entitas pelaporan yang menyusun LK konsolidasian. Bedakan entitas akuntansi penyusun laporan unit dari entitas pelaporan penyaji pertanggungjawaban. [PSAP 01 par.14–15; KK par.21–23]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E12. Sistem dan kebijakan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Jelaskan fungsi kebijakan akuntansi, SAPD, BAS, dan perbedaan BLU/BLUD."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Kebijakan mengatur pilihan penerapan akuntansi; SAPD mengatur prosedur; BAS mengatur klasifikasi akun. BLU pusat memakai kerangka pusat, termasuk PMK 128/2024 pengganti PMK 220/2016. BLUD berada dalam kerangka daerah, menyusun LK berdasarkan SAP dan masuk LKPD. Kode BAS 2013 perlu dibaca bersama pembaruan. [Permen 64 Ps.3–6; PP 12 Ps.185–187, 207, 210; JDIH PMK 128/2024]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E13. ICW dan perubahan basis",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Jelaskan satu alasan reformasi dari sejarah ICW dan bedakan akrual dengan kas menuju akrual."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** ICW ditetapkan pada 1864 dan berlaku 1867; aturan lama dinilai tidak memadai menghadapi perubahan kelembagaan serta kebutuhan pengelolaan. SAP akrual mengakui pendapatan, beban, aset, kewajiban, ekuitas secara akrual dalam finansial. Kas menuju akrual merupakan kerangka transisi: pelaksanaan anggaran kas, Neraca akrual. Penerapan akrual tidak menghapus basis kas LRA. [UU 17 Penjelasan Umum 1; PP 71 Ps.1(8–9); KK par.42–45]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E14. Tiga standar dan tahun",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Bedakan SAP, IPSAS, dan SPKN. Sebut tahun penerapan PSAP 18–20 serta SPKN baru."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** SAP untuk laporan pemerintah Indonesia, IPSAS sebagai standar internasional/pembanding, SPKN untuk pemeriksaan dalam lingkupnya. PSAP 18 dan 19 untuk TA 2026; PSAP 18 mengizinkan penerapan dini dengan pengungkapan; PSAP 20 untuk TA 2027. SPKN (Peraturan BPK 1/2017; sudah ada Peraturan BPK 1/2026 yang berlaku 2028), tepatnya 10 April 2028. [PP 71 Ps.2–5; PSAP 18 par.115; PSAP 19 par.38; PSAP 20 par.56; BPK 1/2026 Ps.8–9; IPSASB Handbook 2025]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T01. Perlakuan dua periode, Ilustrasi A",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Dinas Layanan Ilustrasi memberi jasa pada 10 Desember 2025. Hak pendapatan pertukaran Rp 47.650.000 sudah memenuhi seluruh syarat pengakuan. Kas diterima RKUD pada 5 Januari 2026. Tidak ada transaksi lain, koreksi, atau bunga. Tentukan pendapatan-LO, pendapatan-LRA, dan piutang dari transaksi ini pada masing-masing tahun."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian:**"
        },
        {
          "kind": "ol",
          "items": [
            "Pada 2025, jasa serta hak sudah ada. Akui pendapatan-LO Rp 47.650.000 dan piutang Rp 47.650.000.",
            "Kas belum diterima pada 2025. Pendapatan-LRA dari transaksi ini Rp 0.",
            "Pada 2026, penerimaan kas Rp 47.650.000 menjadi pendapatan-LRA dan menyelesaikan seluruh piutang.",
            "Pendapatan-LO baru dari pelunasan itu Rp 0; piutang akhir dari transaksi ini Rp 0. Ini klasifikasi laporan, tanpa jurnal baru. [KK par.42–45]"
          ]
        },
        {
          "kind": "table",
          "headers": [
            "Transaksi A saja",
            "TA 2025",
            "TA 2026"
          ],
          "rows": [
            [
              "Pendapatan-LO",
              "Rp 47.650.000",
              "Rp 0"
            ],
            [
              "Pendapatan-LRA",
              "Rp 0",
              "Rp 47.650.000"
            ],
            [
              "Piutang akhir tahun",
              "Rp 47.650.000",
              "Rp 0"
            ]
          ],
          "align": [
            "left",
            "right",
            "right"
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T02. Hitung batas belanja, Ilustrasi B",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Daerah Ilustrasi menyusun APBD TA 2026, satuan jutaan rupiah. Total belanja 1.247.500; belanja pegawai 428.650 termasuk tunjangan guru melalui TKD 63.250. Belanja bagi hasil/transfer kepada daerah/desa 172.800; infrastruktur pelayanan publik 402.550. Semua klasifikasi sesuai UU; gunakan ambang 30%/40% tanpa keputusan Menteri yang mengubahnya. Hitung dua porsi dan kebutuhan penyesuaian, lalu jelaskan batas kesimpulan 2026."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian, jutaan rupiah:**"
        },
        {
          "kind": "ol",
          "items": [
            "Pegawai yang diuji = 428.650 − 63.250 = **365.400**.",
            "Batas pegawai = 30% × 1.247.500 = **374.250**. Porsinya = 365.400 ÷ 1.247.500 × 100% = **29, 29%**.",
            "Pegawai berada 8.850 di bawah batas. Pengurang tunjangan guru hanya diterapkan pada pembilang pegawai.",
            "Pembagi infrastruktur = 1.247.500 − 172.800 = **1.074.700**.",
            "Minimum infrastruktur = 40% × 1.074.700 = **429.880**.",
            "Porsi aktual = 402.550 ÷ 1.074.700 × 100% = **37, 46%**. Kekurangan terhadap target = 429.880 − 402.550 = **27.330**.",
            "Angka infrastruktur di bawah target. Namun, TA 2026 masih perlu dibaca bersama penyesuaian paling lama lima tahun sejak 5 Januari 2022 dan kondisi daerah. Hitungan ini tidak sendiri menetapkan pelanggaran atau sanksi otomatis. [UU 1/2022 Ps.146–148]"
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T03. Pilih aturan, Ilustrasi C",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Tim Pelaporan Ilustrasi mengerjakan LKPD 2026, pemeriksaannya pada 2026, dan pemetaan topik pendapatan nonpertukaran/pengaturan bersama/agrikultur. Pilih aturan dan jelaskan apa yang tidak cukup ditentukan dari nama topiknya saja."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian:**"
        },
        {
          "kind": "ol",
          "items": [
            "Penyusunan LKPD memakai SAP dan kebijakan/SAPD daerah; PMK 100/2025 berlingkup pusat.",
            "Pemeriksaan memakai SPKN (Peraturan BPK 1/2017; sudah ada Peraturan BPK 1/2026 yang berlaku 2028).",
            "Pendapatan nonpertukaran dan pengaturan bersama dipetakan ke PSAP 18 dan 19, berlaku laporan TA 2026. Agrikultur dipetakan PSAP 20 untuk TA 2027.",
            "Nama topik belum menentukan pengakuan dan nilai transaksi. Kondisi transaksi serta paragraf standar harus diperiksa; latihan ini hanya memilih lingkup dan tahun. [PP 71 Ps.2–6; PMK 100 Ps.3, 6; PSAP 18 par.115; PSAP 19 par.38; PSAP 20 par.56; BPK 1/2026 Ps.8–9]"
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L01. Baca potongan laporan, Ilustrasi A",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Berikut potongan yang hanya memuat transaksi jasa Ilustrasi A. Hak Rp 47.650.000 timbul pada 10 Desember 2025, seluruh syarat terpenuhi; kas diterima 5 Januari 2026. Apakah potongan itu konsisten? Jelaskan mengapa angka LO dan LRA berbeda."
        },
        {
          "kind": "table",
          "headers": [
            "Laporan",
            "Unsur",
            "Jumlah"
          ],
          "rows": [
            [
              "LO",
              "Pendapatan jasa dari transaksi A",
              "47.650.000"
            ],
            [
              "LRA",
              "Pendapatan jasa dari transaksi A",
              "0"
            ],
            [
              "Neraca",
              "Piutang jasa dari transaksi A",
              "47.650.000"
            ]
          ],
          "align": [
            "left",
            "left",
            "right"
          ],
          "rowRules": [
            {
              "row": 0,
              "columns": [
                2
              ],
              "bottom": "double"
            },
            {
              "row": 1,
              "columns": [
                2
              ],
              "bottom": "double"
            },
            {
              "row": 2,
              "columns": [
                2
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Dinas Layanan Ilustrasi",
            "title": "Potongan LO, LRA, dan Neraca, TA 2025",
            "unit": "Neraca per 31 Desember 2025; satuan rupiah; hanya transaksi A"
          }
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Konsisten. LO mengakui hak pada 2025; LRA tidak memuat kas transaksi A pada 2025. Piutang Rp 47.650.000 menjelaskan hak yang belum diterima kasnya. Ketiga angka merupakan potongan laporan berbeda, sehingga tidak dijumlahkan menjadi satu total. [KK par.42–45]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L02. Lima laporan SKPD, Ilustrasi C",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Tim Pelaporan Ilustrasi menerima paket SKPD TA 2026 yang berisi LRA, Neraca, LO, LPE, dan CaLK. Tim menyatakan paket itu pasti salah karena tidak memuat LAK/LPSAL. Nilai pernyataannya dan bandingkan dengan paket LKPD konsolidasian."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Pernyataan terlalu luas. PP 12 Ps.189(2) menyebut paling sedikit lima komponen tersebut untuk SKPD; Ps.190(2) menyebut tujuh untuk laporan daerah. PSAP 01 par.15 mengaitkan LAK dengan fungsi perbendaharaan umum dan LPSAL dengan BUN/entitas pelaporan konsolidasian. Periksa jumlah komponen bersama fungsi entitasnya."
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L03. Baca anggaran, Ilustrasi B",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Daerah Ilustrasi menampilkan potongan APBD 2026 berikut, dalam jutaan rupiah. Asumsikan klasifikasi benar dan ambang belum disesuaikan Menteri. Pilih data untuk uji 30%/40% dan nilai klaim “infrastruktur mencapai 40% karena memakai total setelah dikurangi pegawai”."
        },
        {
          "kind": "table",
          "headers": [
            "Pos/data",
            "Nilai"
          ],
          "rows": [
            [
              "Total belanja APBD",
              "1.247.500"
            ],
            [
              "Pegawai, termasuk tunjangan guru TKD",
              "428.650"
            ],
            [
              "Tunjangan guru TKD di dalam pegawai",
              "63.250"
            ],
            [
              "Bagi hasil/transfer kepada daerah/desa",
              "172.800"
            ],
            [
              "Infrastruktur pelayanan publik",
              "402.550"
            ]
          ],
          "align": [
            "left",
            "right"
          ],
          "rowRules": [
            {
              "row": 0,
              "columns": [
                1
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Daerah Ilustrasi",
            "title": "Potongan APBD, TA 2026",
            "unit": "Satuan: jutaan rupiah; komponen bertumpang tindih, tidak dijumlahkan ulang"
          }
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian:** Pegawai = (428.650 − 63.250) ÷ 1.247.500 × 100% = **29, 29%**. Infrastruktur = 402.550 ÷ (1.247.500 − 172.800) × 100% = **37, 46%**. Klaim memakai pengurang pegawai salah karena pembagi infrastrukturnya berbeda. Kekurangan target 40% adalah 27.330; kesimpulan kepatuhan 2026 tetap mempertimbangkan masa penyesuaian. Anggaran ini juga tidak cukup membuktikan mutu layanan atau efektivitas program. [UU 1/2022 Ps.146–147]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    }
  ]
};
