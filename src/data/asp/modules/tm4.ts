// Generated from the approved 05 package by scripts/build-akk203-content.mjs.
// Source SHA-256: 9e424d2fb01e653134a34d875ccf0c6023cbdf368334461d2f1821c8da7a68cd
import type { Reading } from '../../../types';

export const TM4_READING: Reading = {
  "tm": 4,
  "title": "Perencanaan dan anggaran organisasi sektor publik (1)",
  "ref": "Akuntansi Sektor Publik",
  "intro": "sebut dasar pengelompokannya sebelum menjelaskan fungsi atau prinsip anggaran.",
  "objectives": [
    "Perencanaan memilih tindakan masa depan dengan mempertimbangkan sumber daya.",
    "Anggaran menerjemahkan rencana menjadi sumber dana, penggunaan dana, dan target.",
    "Enam fungsi hukum: otorisasi, perencanaan, pengawasan, alokasi, distribusi, stabilisasi.",
    "Delapan fungsi versi buku memberi sudut pandang manajemen; daftar itu berbeda dari enam fungsi hukum.",
    "Tujuan, karakteristik, dan prinsip versi buku membantu menilai rancangan anggaran.",
    "Bruto menampilkan penerimaan dan pengeluaran secara utuh; kesatuan dokumen berbeda dari pengelolaan kas.",
    "Hasil evaluasi dapat memperbaiki rencana melalui mekanisme yang sah."
  ],
  "layout": "layered",
  "coreReadingMinutes": 25,
  "blocks": [
    {
      "kind": "p",
      "text": "Tag **Konsep buku ASP** menandai konsep dari referensi kontrak seperti Mardiasmo; bukunya tidak tersedia, dan isi dicocokkan dengan catatan kuliah Kelas N."
    },
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat (4 menit)",
      "blocks": [
        {
          "kind": "figure",
          "title": "Dari pilihan pembangunan ke anggaran",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 1188\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Dari pilihan pembangunan ke anggaran</title><desc>Dua lajur pusat dan daerah menghubungkan rencana, anggaran, pelaksanaan, dan evaluasi; KUA serta PPAS ditempatkan pada lajur daerah.</desc><defs><marker id=\"V-TM04-01-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"1188\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Dari pilihan pembangunan ke anggaran</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M276.25 249 L276.25 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M276.25 371 L276.25 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M276.25 493 L276.25 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M276.25 615 L276.25 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M276.25 737 L276.25 802\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M276.25 859 L276.25 924\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M90 952.5 H44 V98.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><text class=\"svg-muted\" x=\"276.25\" y=\"1004\" text-anchor=\"middle\" font-size=\"12\">Umpan balik</text><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 249 L683.75 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 371 L683.75 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 493 L683.75 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 615 L683.75 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 737 L683.75 802\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 859 L683.75 924\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M683.75 981 L480 1046\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><path d=\"M90 1074.5 H32 V98.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-01-arrow)\"/><text class=\"svg-muted\" x=\"480\" y=\"1126\" text-anchor=\"middle\" font-size=\"12\">Umpan balik</text><path d=\"M462.5 98.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Integrasi sasaran</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pusat: RPJP</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Daerah: RPJPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">RPJM / Renstra-KL</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">RPJMD / Renstra-SKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">RKP / Renja-KL</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">RKPD / Renja-SKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">RKA-KL</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">KUA / PPAS</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">APBN</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">RKA-SKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pelaksanaan (pusat)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"680\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">APBD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"802\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"831\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Evaluasi (pusat)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"802\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"831\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Pelaksanaan (daerah)</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"924\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"953\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Rencana berikutnya (pusat)</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"924\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"953\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Evaluasi (daerah)</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"1046\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"1075\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Rencana berikutnya (daerah)</tspan></text></svg>",
          "overview": {
            "heading": "Dari pilihan pembangunan ke anggaran",
            "cards": [
              {
                "title": "Pusat: RPJP",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Daerah: RPJPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RPJM / Renstra-KL",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RPJMD / Renstra-SKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RKP / Renja-KL",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RKPD / Renja-SKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RKA-KL",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "KUA / PPAS",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "APBN",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RKA-SKPD",
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
                "title": "APBD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Evaluasi (pusat)",
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
                "title": "Rencana berikutnya (pusat)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Evaluasi (daerah)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Rencana berikutnya (daerah)",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "rencana panjang memberi arah menengah/tahunan; rencana tahunan memandu anggaran; evaluasi memberi umpan balik; integrasi pusat-daerah digambar sebagai garis sasaran, bukan prosedur yang sama"
          },
          "caption": "Dana mengikuti pilihan kegiatan dan hasil yang ingin dicapai. [UU 25/2004 Ps.3–7, 14–26, 28–30; PP 12/2019 Ps.89–104]",
          "altText": "Dua lajur pusat dan daerah menghubungkan rencana, anggaran, pelaksanaan, dan evaluasi; KUA serta PPAS ditempatkan pada lajur daerah."
        },
        {
          "kind": "ul",
          "items": [
            "Perencanaan memilih tindakan masa depan dengan mempertimbangkan sumber daya.",
            "Anggaran menerjemahkan rencana menjadi sumber dana, penggunaan dana, dan target.",
            "Enam fungsi hukum: otorisasi, perencanaan, pengawasan, alokasi, distribusi, stabilisasi.",
            "Delapan fungsi versi buku memberi sudut pandang manajemen; daftar itu berbeda dari enam fungsi hukum.",
            "Tujuan, karakteristik, dan prinsip versi buku membantu menilai rancangan anggaran.",
            "Bruto menampilkan penerimaan dan pengeluaran secara utuh; kesatuan dokumen berbeda dari pengelolaan kas.",
            "Hasil evaluasi dapat memperbaiki rencana melalui mekanisme yang sah."
          ]
        },
        {
          "kind": "callout",
          "variant": "gist",
          "compact": true,
          "title": "Kalau cuma sempat ingat satu hal:",
          "text": "sebut dasar pengelompokannya sebelum menjelaskan fungsi atau prinsip anggaran."
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
      "title": "1. Pilih tindakan dulu, baru hitung dananya (4 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Dana publik terbatas, sedangkan kebutuhan dapat banyak. Kamu perlu menentukan kegiatan mana yang didahulukan dan hasil apa yang diharapkan. Setelah itu, kebutuhan dana serta sumbernya dihitung. Urutan ini membantu menghindari anggaran yang hanya mengulang angka tahun lalu."
        },
        {
          "kind": "p",
          "text": "**Perencanaan** adalah proses memilih tindakan masa depan yang tepat dengan memperhitungkan sumber daya tersedia. Anggaran pemerintah merupakan pedoman tindakan: rencana pendapatan, belanja, transfer, serta pembiayaan dalam rupiah, disusun sistematis untuk satu periode. Rencana memberi arah, sedangkan anggaran mengikat kegiatan dengan sumber daya. [UU 25/2004 Ps.1(1); PSAP 02 par.7]"
        },
        {
          "kind": "table",
          "headers": [
            "Tujuan sistem perencanaan",
            "Makna dalam penyusunan kegiatan"
          ],
          "rows": [
            [
              "Koordinasi pelaku pembangunan",
              "Pelaku tidak menyusun kegiatan sendiri-sendiri"
            ],
            [
              "Integrasi, sinkronisasi, sinergi",
              "Selaras antarwilayah, ruang, waktu, fungsi pemerintah, dan pusat-daerah"
            ],
            [
              "Keterkaitan dan konsistensi",
              "Rencana, anggaran, pelaksanaan, pengawasan dapat dihubungkan"
            ],
            [
              "Partisipasi masyarakat",
              "Kebutuhan masyarakat dapat masuk ke proses"
            ],
            [
              "Penggunaan sumber daya",
              "Efisien, efektif, berkeadilan, berkelanjutan"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[UU 25/2004 Ps.2(4)]"
        },
        {
          "kind": "table",
          "headers": [
            "Waktu",
            "Dokumen pusat",
            "Dokumen daerah",
            "Dokumen unit"
          ],
          "rows": [
            [
              "20 tahun",
              "RPJP nasional",
              "RPJP daerah",
              "Mengikuti arah pembangunan yang relevan"
            ],
            [
              "5 tahun",
              "RPJM nasional",
              "RPJM daerah",
              "Renstra kementerian/lembaga atau SKPD"
            ],
            [
              "1 tahun",
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
          "text": "RKP memandu RAPBN dan RKPD memandu RAPBD. Dalam penyusunan tahunan daerah, Renja-SKPD mengacu pada rancangan awal RKPD dan Renstra-SKPD. Keterkaitan ini membuat kegiatan unit dapat ditelusuri kembali ke arah pembangunan. [UU 25/2004 Ps.1(4–11), 21(3), 25]"
        },
        {
          "kind": "p",
          "text": "APBN adalah rencana keuangan tahunan pemerintahan negara yang disetujui DPR. APBD merupakan rencana keuangan tahunan pemerintahan daerah yang disetujui DPRD. Penetapannya masing-masing melalui UU dan Perda; RKA unit adalah bahan penyusunan, sehingga statusnya berbeda dari anggaran yang sudah ditetapkan. [UU 17/2003 Ps.1(7–8), 3(2–3), 14, 19]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi A:** Dinas Perpustakaan Contoh menyusun program TA 2026 dengan alokasi Rp 286.750.000. Program menargetkan layanan perpustakaan keliling bagi 12 kelurahan melalui 96 kunjungan setahun. Hasil yang diinginkan ialah akses baca yang meningkat; angka kunjungan merupakan keluaran, sedangkan perubahan akses masih perlu diukur."
        },
        {
          "kind": "self-check",
          "question": "Apakah target 96 kunjungan dalam Ilustrasi A sama dengan bukti bahwa akses baca sudah meningkat?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Kunjungan adalah target keluaran. Peningkatan akses adalah hasil yang perlu indikator dan data realisasi tersendiri."
            }
          ],
          "signal": "Kamu membedakan rencana, keluaran, dan hasil."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Definisikan perencanaan, lalu hubungkan pilihan kegiatan dengan anggaran serta targetnya.\nSebut RKP/RKPD sebagai pedoman RAPBN/RAPBD dan beri dasar UU 25 Ps.25."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "2. Enam fungsi menurut regulasi (5 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Anggaran yang sudah disahkan dapat dibaca dari beberapa sisi. Satu sisi memberi dasar melaksanakan pendapatan dan belanja; sisi lain menilai arah ekonomi atau keadilan. Undang-undang mengelompokkannya menjadi enam fungsi. Kamu perlu menjelaskan makna tiap fungsi, bukan menghafal jumlah saja. [UU 17/2003 Ps.3(4)]"
        },
        {
          "kind": "table",
          "headers": [
            "Fungsi",
            "Makna",
            "Pertanyaan pengingat"
          ],
          "rows": [
            [
              "Otorisasi",
              "Dasar melaksanakan pendapatan dan belanja pada tahun bersangkutan",
              "Apa dasar pelaksanaannya?"
            ],
            [
              "Perencanaan",
              "Pedoman manajemen merencanakan kegiatan tahun itu",
              "Kegiatan apa yang akan dikerjakan?"
            ],
            [
              "Pengawasan",
              "Pedoman menilai kesesuaian kegiatan dengan ketentuan",
              "Apakah pelaksanaan sesuai yang ditetapkan?"
            ],
            [
              "Alokasi",
              "Mengurangi pengangguran/pemborosan sumber daya, meningkatkan efisiensi dan efektivitas perekonomian",
              "Bagaimana sumber daya digunakan dalam perekonomian?"
            ],
            [
              "Distribusi",
              "Kebijakan memperhatikan keadilan dan kepatutan",
              "Bagaimana beban dan manfaat dibagikan?"
            ],
            [
              "Stabilisasi",
              "Menjaga keseimbangan fundamental perekonomian",
              "Bagaimana anggaran membantu keseimbangan ekonomi?"
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
          "text": "Keenam fungsi berlaku pada APBN/APBD menurut UU 17. PP 12 mengulang fungsi APBD dalam Pasal 23 ayat (3), dengan makna pada penjelasannya. Pasal 24 mengatur penerimaan/pengeluaran serta bruto, sehingga jangan memakai ayatnya sebagai nomor definisi enam fungsi. [UU 17/2003 Ps.3(4) dan Penjelasan; PP 12/2019 Ps.23(3) dan Penjelasan]"
        },
        {
          "kind": "p",
          "text": "Pada Ilustrasi A, alokasi Rp 286.750.000 yang disetujui menjadi dasar pelaksanaan kegiatan yang sesuai peruntukannya. Pengawasan membandingkan kegiatan dengan ketentuan dan target. Bila kamu membahas siapa yang menikmati akses layanan, pertanyaannya dapat menyentuh distribusi; sekadar menyebut pembagian dana antarunit belum menjelaskan fungsi alokasi secara lengkap."
        },
        {
          "kind": "figure",
          "title": "Enam fungsi APBN/APBD",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 578\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Enam fungsi APBN/APBD</title><desc>Enam kartu menjelaskan otorisasi, perencanaan, pengawasan, alokasi, distribusi, dan stabilisasi.</desc><defs><marker id=\"V-TM04-02-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"578\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Enam fungsi APBN/APBD</text><path d=\"M480 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M480 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H44 V342.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H56 V342.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H68 V464.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H20 V464.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">APBN / APBD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Otorisasi: dasar pelaksanaan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Perencanaan: pedoman kegiatan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pengawasan: kesesuaian</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Alokasi: sumber daya perekonomian</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Distribusi: keadilan dan kepatutan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Stabilisasi: keseimbangan ekonomi</tspan></text></svg>",
          "overview": {
            "heading": "Enam fungsi APBN/APBD",
            "cards": [
              {
                "title": "Otorisasi",
                "subtitle": "",
                "items": [
                  "Makna: Dasar melaksanakan pendapatan dan belanja pada tahun bersangkutan",
                  "Pertanyaan pengingat: Apa dasar pelaksanaannya?"
                ],
                "takeaway": ""
              },
              {
                "title": "Perencanaan",
                "subtitle": "",
                "items": [
                  "Makna: Pedoman manajemen merencanakan kegiatan tahun itu",
                  "Pertanyaan pengingat: Kegiatan apa yang akan dikerjakan?"
                ],
                "takeaway": ""
              },
              {
                "title": "Pengawasan",
                "subtitle": "",
                "items": [
                  "Makna: Pedoman menilai kesesuaian kegiatan dengan ketentuan",
                  "Pertanyaan pengingat: Apakah pelaksanaan sesuai yang ditetapkan?"
                ],
                "takeaway": ""
              },
              {
                "title": "Alokasi",
                "subtitle": "",
                "items": [
                  "Makna: Mengurangi pengangguran/pemborosan sumber daya, meningkatkan efisiensi dan efektivitas perekonomian",
                  "Pertanyaan pengingat: Bagaimana sumber daya digunakan dalam perekonomian?"
                ],
                "takeaway": ""
              },
              {
                "title": "Distribusi",
                "subtitle": "",
                "items": [
                  "Makna: Kebijakan memperhatikan keadilan dan kepatutan",
                  "Pertanyaan pengingat: Bagaimana beban dan manfaat dibagikan?"
                ],
                "takeaway": ""
              },
              {
                "title": "Stabilisasi",
                "subtitle": "",
                "items": [
                  "Makna: Menjaga keseimbangan fundamental perekonomian",
                  "Pertanyaan pengingat: Bagaimana anggaran membantu keseimbangan ekonomi?"
                ],
                "takeaway": ""
              }
            ],
            "footer": "anggaran di pusat peta terhubung ke enam fungsi; setiap fungsi memiliki pertanyaan diagnostik yang berbeda"
          },
          "caption": "Enam fungsi hukum menilai pelaksanaan, arah sumber daya, dan kebijakan ekonomi. [UU 17/2003 Ps.3(4) dan Penjelasan; PP 12/2019 Ps.23(3) dan Penjelasan PDF 156–157]",
          "altText": "Enam kartu menjelaskan otorisasi, perencanaan, pengawasan, alokasi, distribusi, dan stabilisasi."
        },
        {
          "kind": "self-check",
          "question": "Kamu diminta membedakan alokasi dan distribusi. Apa yang perlu disebut selain “membagi dana”?",
          "answer": [
            {
              "kind": "p",
              "text": "Alokasi mengarahkan sumber daya untuk mengurangi pengangguran/pemborosan dan meningkatkan efisiensi serta efektivitas perekonomian. Distribusi menilai keadilan dan kepatutan kebijakan anggaran."
            }
          ],
          "signal": "Kamu dapat menjelaskan perbedaan fungsi dengan kriteria penilaiannya."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Sebut enam fungsi, lalu jelaskan fungsi yang ditanyakan dengan pertanyaan pengingatnya.\nBandingkan alokasi dan distribusi; rujuk UU 17 Ps.3(4) atau PP 12 Ps.23(3) beserta penjelasan."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "3. Delapan fungsi manajemen: Konsep buku ASP (4 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Anggaran juga dibaca sebagai alat kerja manajemen. Daftar delapan fungsi versi buku menjelaskan bagaimana anggaran membantu organisasi memilih prioritas, menyelaraskan unit, dan menilai hasil. Ada nama yang berdekatan dengan daftar hukum. Kedekatan nama tidak membuat kedua daftar menjadi satu daftar baru."
        },
        {
          "kind": "table",
          "headers": [
            "Fungsi versi buku",
            "Arti untuk belajar",
            "Contoh penerapan pada tiga Ilustrasi"
          ],
          "rows": [
            [
              "Perencanaan",
              "Menentukan kegiatan, biaya, hasil yang diharapkan",
              "A: program kunjungan dan target layanan"
            ],
            [
              "Pengendalian",
              "Menjaga pelaksanaan dalam alokasi dan mencegah pemborosan",
              "A: periksa penggunaan dana serta pencapaian keluaran"
            ],
            [
              "Kebijakan fiskal",
              "Menjadi instrumen stabilisasi dan arah pertumbuhan ekonomi",
              "C: membaca pendapatan-belanja sebagai pilihan kebijakan"
            ],
            [
              "Politik",
              "Mencerminkan kompromi/konsensus prioritas eksekutif-legislatif",
              "C: prioritas yang disetujui menjadi dokumen anggaran"
            ],
            [
              "Koordinasi dan komunikasi",
              "Menyelaraskan unit serta menemukan ketidaksesuaian program",
              "B: sinkronkan dua agenda layanan"
            ],
            [
              "Penilaian kinerja",
              "Memberi tolok ukur target dan pencapaian kerja",
              "A: bandingkan target dengan realisasi serta kualitas"
            ],
            [
              "Motivasi",
              "Memberi target yang menantang dan dapat dicapai",
              "A: menilai apakah target kunjungan sesuai kapasitas dan dana"
            ],
            [
              "Ruang publik (*public sphere*)",
              "Membuka kesempatan keterlibatan/pengawasan masyarakat",
              "C: dokumen dapat dipahami dan dibahas masyarakat"
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
          "text": "[catatan kuliah TM04; konsep buku sesuai referensi kontrak, bukan kutipan halaman buku]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi B:** Tim Dua Unit Contoh menyiapkan dua agenda layanan TA 2026 pada tempat dan waktu yang sama. Kedua unit belum menyelaraskan sasaran serta pembagian tugas. Anggaran membantu menemukan tumpang tindih, kemudian kedua unit menyepakati tugas sebelum pelaksanaan. Ini contoh koordinasi dan komunikasi."
        },
        {
          "kind": "table",
          "headers": [
            "Dimensi",
            "Enam fungsi regulasi",
            "Delapan fungsi versi buku"
          ],
          "rows": [
            [
              "Dasar",
              "UU 17 Ps.3(4); PP 12 Ps.23(3)",
              "Pengelompokan konsep buku ASP, dicocokkan RMK"
            ],
            [
              "Daftar",
              "Otorisasi, perencanaan, pengawasan, alokasi, distribusi, stabilisasi",
              "Perencanaan, pengendalian, kebijakan fiskal, politik, koordinasi/komunikasi, penilaian kinerja, motivasi, ruang publik"
            ],
            [
              "Titik tekan",
              "Fungsi anggaran dalam hukum dan kebijakan ekonomi",
              "Kegunaan anggaran bagi manajemen serta hubungan publik"
            ],
            [
              "Cara menjawab",
              "Sebut dasar pasal dan makna fungsi",
              "Sebut kerangka versi buku dan jelaskan kegunaannya"
            ],
            [
              "Hubungan",
              "Dapat berkaitan pada kasus yang sama",
              "Tidak dipasangkan satu lawan satu atau dijumlahkan menjadi fungsi hukum"
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
          "title": "Enam fungsi hukum dan delapan fungsi buku",
          "overview": {
            "heading": "Enam fungsi hukum dan delapan fungsi buku",
            "cards": [
              {
                "title": "Enam fungsi hukum",
                "subtitle": "",
                "items": [
                  "UU 17 Ps.3(4); PP 12 Ps.23(3)",
                  "Otorisasi",
                  "Perencanaan",
                  "Pengawasan",
                  "Alokasi",
                  "Distribusi",
                  "Stabilisasi"
                ],
                "takeaway": ""
              },
              {
                "title": "Delapan fungsi buku: Konsep buku ASP",
                "subtitle": "",
                "items": [
                  "Perencanaan",
                  "Pengendalian",
                  "Kebijakan fiskal",
                  "Politik",
                  "Koordinasi dan komunikasi",
                  "Penilaian kinerja",
                  "Motivasi",
                  "Ruang publik (public sphere)"
                ],
                "takeaway": ""
              }
            ],
            "footer": "dua panel sejajar; tidak ada panah satu-lawan-satu; tidak dijumlahkan menjadi empat belas fungsi hukum"
          },
          "caption": "Jawaban harus menyebut dasar daftar sebelum menjelaskan fungsi. [UU 17/2003 Ps.3(4); PP 12/2019 Ps.23(3); catatan kuliah TM04]",
          "altText": "Dua panel membandingkan enam fungsi regulasi dengan delapan fungsi versi buku tanpa menyamakan dasar atau jumlahnya."
        },
        {
          "kind": "self-check",
          "question": "Jika soal meminta fungsi anggaran menurut UU 17, apakah jawaban politik, motivasi, dan ruang publik sudah memenuhi permintaan?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Jawab dengan enam fungsi pada Ps.3(4). Politik, motivasi, dan ruang publik adalah bagian daftar delapan fungsi versi buku."
            }
          ],
          "signal": "Kamu memilih daftar menurut dasar yang diminta soal."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Awali dengan “menurut regulasi” atau “menurut kerangka buku”, lalu sebut daftar yang tepat.\nJelaskan satu fungsi dengan Ilustrasi A/B/C dan hindari menjumlahkan kedua daftar."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "4. Tujuan dan karakteristik: Konsep buku ASP (4 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Tujuan menjelaskan apa yang ingin dibantu oleh anggaran. Karakteristik menjelaskan ciri rencana yang disebut anggaran. Kamu dapat memakai kedua daftar untuk menilai apakah rancangan sudah mempunyai arah, dana, periode, serta target. Daftar ini berbeda dari daftar fungsi."
        },
        {
          "kind": "table",
          "headers": [
            "Empat tujuan versi buku",
            "Makna"
          ],
          "rows": [
            [
              "Membantu tujuan fiskal dan koordinasi",
              "Pilihan pendanaan serta belanja selaras dengan sasaran pemerintah dan kerja antarbagian"
            ],
            [
              "Efisiensi dan keadilan barang/jasa publik",
              "Prioritas menentukan bagaimana sumber daya terbatas digunakan dan manfaat disediakan"
            ],
            [
              "Memenuhi prioritas belanja strategis",
              "Kebutuhan utama mendapat perhatian dalam pilihan belanja"
            ],
            [
              "Transparansi dan pertanggungjawaban",
              "Pemerintah menjelaskan anggaran kepada DPR/DPRD serta masyarakat"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[catatan kuliah TM04; konsep buku sesuai referensi kontrak]"
        },
        {
          "kind": "table",
          "headers": [
            "Enam karakteristik konseptual",
            "Apa yang dicari pada rancangan"
          ],
          "rows": [
            [
              "Berorientasi masa depan",
              "Kegiatan serta hasil yang direncanakan"
            ],
            [
              "Kuantitatif",
              "Angka moneter dan indikator nonmoneter"
            ],
            [
              "Periode tertentu",
              "Batas waktu rencana"
            ],
            [
              "Sumber dan penggunaan dana",
              "Pendanaan serta kebutuhan kegiatan"
            ],
            [
              "Dasar pelaksanaan dan pengendalian",
              "Acuan untuk bekerja dan membandingkan realisasi"
            ],
            [
              "Target dan komitmen manajerial",
              "Sasaran yang dipertanggungjawabkan oleh pelaksana"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[catatan kuliah TM04; konsep buku sesuai referensi kontrak]"
        },
        {
          "kind": "p",
          "text": "Ilustrasi A memuat periode 2026, dana Rp 286.750.000, cakupan 12 kelurahan, dan target 96 kunjungan. Unsur itu membantu menilai karakteristik rencana. Namun, soal masih perlu menyebut sumber pendanaan serta ukuran perubahan akses bila ingin menilai rancangan secara lebih lengkap."
        },
        {
          "kind": "table",
          "headers": [
            "Karakteristik pemerintah Indonesia",
            "Dasar yang membatasi"
          ],
          "rows": [
            [
              "Tahunan, 1 Januari–31 Desember",
              "UU 17 Ps.4; PP 12 Ps.26"
            ],
            [
              "Disetujui legislatif dan ditetapkan secara hukum",
              "UU 17 Ps.1(7–8), 3(2–3)"
            ],
            [
              "Pengeluaran didukung anggaran/dana dan dasar hukum",
              "UU 1 Ps.3(3); PP 12 Ps.24(5–6)"
            ],
            [
              "Seluruh penerimaan/pengeluaran dalam uang dianggarkan; bruto",
              "PP 12 Ps.24(1),(7)"
            ],
            [
              "Kinerja dikaitkan dengan pendanaan",
              "UU 17 Ps.14(2), 19(2); PP 12 Ps.93, 95"
            ],
            [
              "Pengelolaan transparan dan bertanggung jawab",
              "UU 17 Ps.3(1); PP 12 Ps.3(1)"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "**Bruto** berarti penerimaan dan pengeluaran ditampilkan utuh, tanpa mengurangi penerimaan langsung dengan pengeluaran terkait. Definisi di PSAP 02 juga melarang pencatatan neto atau kompensasi penerimaan-pengeluaran pada unit. Selisih dapat dihitung, tetapi tidak menggantikan penyajian kedua sisi. [PP 12/2019 Ps.24(7) dan Penjelasan; PSAP 02 par.7]"
        },
        {
          "kind": "figure",
          "title": "Tujuan, karakteristik, dan batas hukum",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 571\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Tujuan, karakteristik, dan batas hukum</title><desc>Peta memisahkan empat tujuan, enam karakteristik konsep buku, dan enam kelompok ketentuan anggaran pemerintah.</desc><defs><marker id=\"V-TM04-04-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"571\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Tujuan, karakteristik, dan batas hukum</text><path d=\"M480 127 L208.33333333333331 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M480 127 L479.99999999999994 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M480 127 L751.6666666666666 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M208.33333333333331 272 L208.33333333333331 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M479.99999999999994 272 L479.99999999999994 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M751.6666666666666 272 L751.6666666666666 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Menilai rancangan anggaran</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Tujuan: untuk apa?</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Karakteristik: seperti</tspan><tspan x=\"479.99999999999994\" dy=\"23\">apa?</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Batas hukum: sesuai</tspan><tspan x=\"751.6666666666666\" dy=\"23\">ketentuan?</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"236.66666666666666\" height=\"149\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">Fiskal/ koordinasi;</tspan><tspan x=\"208.33333333333331\" dy=\"23\">efisiensi/ keadilan;</tspan><tspan x=\"208.33333333333331\" dy=\"23\">prioritas strategis;</tspan><tspan x=\"208.33333333333331\" dy=\"23\">transparansi/</tspan><tspan x=\"208.33333333333331\" dy=\"23\">pertanggungjawaban</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"337\" width=\"236.66666666666666\" height=\"149\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Masa depan; kuantitatif;</tspan><tspan x=\"479.99999999999994\" dy=\"23\">periode;</tspan><tspan x=\"479.99999999999994\" dy=\"23\">sumber-penggunaan;</tspan><tspan x=\"479.99999999999994\" dy=\"23\">pelaksanaan-pengendalian;</tspan><tspan x=\"479.99999999999994\" dy=\"23\">target-komitmen</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"337\" width=\"236.66666666666666\" height=\"149\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Tahunan; legislatif;</tspan><tspan x=\"751.6666666666666\" dy=\"23\">dana-dasar hukum; bruto;</tspan><tspan x=\"751.6666666666666\" dy=\"23\">kinerja; transparansi</tspan></text></svg>",
          "overview": {
            "heading": "Tujuan, karakteristik, dan batas hukum",
            "cards": [
              {
                "title": "Tujuan: untuk apa?",
                "subtitle": "",
                "items": [
                  "Fiskal dan koordinasi",
                  "Efisiensi dan keadilan",
                  "Prioritas strategis",
                  "Transparansi dan pertanggungjawaban"
                ],
                "takeaway": ""
              },
              {
                "title": "Karakteristik: seperti apa?",
                "subtitle": "",
                "items": [
                  "Masa depan",
                  "Kuantitatif",
                  "Periode",
                  "Sumber dan penggunaan dana",
                  "Pelaksanaan dan pengendalian",
                  "Target dan komitmen"
                ],
                "takeaway": ""
              },
              {
                "title": "Batas hukum",
                "subtitle": "",
                "items": [
                  "Tahunan",
                  "Persetujuan legislatif",
                  "Dana dan dasar hukum",
                  "Bruto",
                  "Kinerja",
                  "Transparansi"
                ],
                "takeaway": ""
              }
            ],
            "footer": "tujuan menjawab untuk apa; karakteristik menjawab seperti apa; batas hukum menguji kesesuaian anggaran pemerintah"
          },
          "caption": "Bedakan tujuan, ciri, dan ketentuan sebelum menilai rancangan. [catatan kuliah TM04; UU 17/2003 Ps.1, 3–4; PP 12/2019 Ps.24–26]",
          "altText": "Peta memisahkan empat tujuan, enam karakteristik konsep buku, dan enam kelompok ketentuan anggaran pemerintah."
        },
        {
          "kind": "self-check",
          "question": "Anggaran hanya menampilkan selisih pendapatan dikurangi biaya sebagai pendapatan. Prinsip apa yang perlu diperiksa?",
          "answer": [
            {
              "kind": "p",
              "text": "Bruto. Penerimaan dan pengeluaran perlu ditampilkan utuh, bukan dikompensasikan menjadi satu angka penerimaan neto."
            }
          ],
          "signal": "Kamu menghubungkan bentuk penyajian dengan prinsip bruto."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Sebut empat tujuan atau enam karakteristik sesuai pertanyaan, lalu jelaskan dengan rancangan Ilustrasi A.\nJika membahas pemerintah Indonesia, tambahkan dasar tahunan, persetujuan, dana, dan bruto yang relevan."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "5. Prinsip versi buku dan asas hukum: Konsep buku ASP (5 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Anggaran dapat lengkap angkanya tetapi sulit dipahami atau tidak jelas peruntukannya. Prinsip membantu menilai bagaimana anggaran disusun dan digunakan. Daftar versi buku berisi delapan prinsip. Asas hukum mempunyai pengelompokan tersendiri, sehingga sumber daftar perlu selalu disebut."
        },
        {
          "kind": "table",
          "headers": [
            "Delapan prinsip versi buku",
            "Makna yang aman dipakai"
          ],
          "rows": [
            [
              "Otorisasi legislatif",
              "Pelaksanaan berpijak pada anggaran yang memperoleh otorisasi"
            ],
            [
              "Komprehensif",
              "Penerimaan dan pengeluaran dicakup dalam anggaran"
            ],
            [
              "Keutuhan/kesatuan (*unity*)",
              "Anggaran dibaca utuh, dengan hubungan sumber dan penggunaan dana yang jelas"
            ],
            [
              "*Nondiscretionary appropriation*",
              "Alokasi yang disetujui digunakan sesuai tujuan dan secara ekonomis, efisien, efektif"
            ],
            [
              "Periodik",
              "Penyusunan dilakukan teratur menurut periode; rencana dapat membahas lebih dari satu tahun"
            ],
            [
              "Akurat dan rasional",
              "Estimasi realistis, tanpa cadangan tersembunyi yang menyesatkan"
            ],
            [
              "Jelas (*clarity*)",
              "Struktur dan penjelasan dapat dipahami"
            ],
            [
              "Diketahui publik",
              "Informasi anggaran mendukung pengawasan masyarakat"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[catatan kuliah TM04; konsep buku sesuai referensi kontrak]"
        },
        {
          "kind": "p",
          "text": "Istilah *nondiscretionary appropriation* tidak berarti seluruh keputusan pelaksana dilarang. Tekanannya ialah penggunaan alokasi untuk tujuan yang disetujui serta 3E. Anggaran juga tidak harus dihabiskan 100% demi memenuhi prinsip ini. Keputusan tetap berada dalam kewenangan dan mekanisme yang sah."
        },
        {
          "kind": "table",
          "headers": [
            "Konsep",
            "Yang disatukan/dinilai",
            "Batas kesimpulan"
          ],
          "rows": [
            [
              "Kesatuan dokumen anggaran",
              "Pendapatan, belanja, pembiayaan dalam satu kesatuan APBN/APBD",
              "Tidak membuktikan semua uang berada pada satu rekening fisik"
            ],
            [
              "Pengelolaan kas",
              "Fungsi BUN/BUD dan RKUN/RKUD",
              "Harus memperhatikan rekening berwenang dan pengaturan khusus"
            ],
            [
              "Komprehensif",
              "Kelengkapan cakupan penerimaan/pengeluaran",
              "Berbeda dari cara menyajikan bruto"
            ],
            [
              "Bruto",
              "Penyajian utuh, tanpa saling menghapus penerimaan/pengeluaran",
              "Selisih analitis tetap dapat dihitung"
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
          "text": "RMK menghubungkan *unity* dengan kas umum. Untuk jawaban, pisahkan keutuhan anggaran dari pengelolaan kas. UU 1 mendefinisikan RKUN/RKUD dan mengatur BUN/BUD; definisi itu tidak menetapkan satu rekening fisik untuk seluruh entitas tanpa pengecualian. [UU 1/2004 Ps.1(2–5), 7, 9; PP 12/2019 Ps.27(1); catatan kuliah TM04]"
        },
        {
          "kind": "figure",
          "title": "Delapan prinsip anggaran versi buku",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 746\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Delapan prinsip anggaran versi buku</title><desc>Delapan prinsip versi buku dilengkapi klarifikasi kesatuan dokumen dan penggunaan alokasi sesuai tujuan.</desc><defs><marker id=\"V-TM04-05-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"746\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Delapan prinsip anggaran versi buku</text><path d=\"M480 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M480 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H44 V365.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H56 V365.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H68 V510.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H20 V510.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H32 V632.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 98.5 H44 V632.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Anggaran: Konsep buku ASP</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Otorisasi legislatif</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Komprehensif</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"103\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Unity: kesatuan dokumen ≠ satu rekening</tspan><tspan x=\"276.25\" dy=\"23\">fisik</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"103\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Nondiscretionary appropriation: sesuai</tspan><tspan x=\"683.75\" dy=\"23\">tujuan dan 3E ≠ habiskan 100% / tanpa</tspan><tspan x=\"683.75\" dy=\"23\">diskresi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"482\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"511\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Periodik</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"482\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"511\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Akurat dan rasional</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"604\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"633\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Clarity: jelas</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"604\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"633\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Diketahui publik</tspan></text></svg>",
          "overview": {
            "heading": "Delapan prinsip anggaran versi buku",
            "cards": [
              {
                "title": "Anggaran: Konsep buku ASP",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Otorisasi legislatif",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Komprehensif",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Unity: kesatuan dokumen ≠ satu rekening fisik",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Nondiscretionary appropriation: sesuai tujuan dan 3E ≠ habiskan 100% / tanpa diskresi",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Periodik",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Akurat dan rasional",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Clarity: jelas",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Diketahui publik",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "anggaran terhubung ke delapan prinsip; dua catatan menempel pada unity dan nondiscretionary"
          },
          "caption": "Prinsip menguji kelengkapan, penggunaan, estimasi, dan keterbukaan anggaran. [catatan kuliah TM04; UU 1/2004 Ps.1, 3, 7, 9 sebagai pembatas makna]",
          "altText": "Delapan prinsip versi buku dilengkapi klarifikasi kesatuan dokumen dan penggunaan alokasi sesuai tujuan."
        },
        {
          "kind": "table",
          "headers": [
            "Kelompok asas UU 17",
            "Asas",
            "Makna belajar"
          ],
          "rows": [
            [
              "Klasik",
              "Tahunan",
              "Anggaran berlaku dalam tahun tertentu"
            ],
            [
              "Klasik",
              "Universalitas",
              "Transaksi ditampilkan utuh dalam dokumen anggaran"
            ],
            [
              "Klasik",
              "Kesatuan",
              "Pendapatan dan belanja dibaca dalam satu dokumen anggaran"
            ],
            [
              "Klasik",
              "Spesialitas",
              "Tujuan serta peruntukan anggaran jelas"
            ],
            [
              "Baru",
              "Akuntabilitas berorientasi hasil",
              "Pertanggungjawaban menjelaskan hasil"
            ],
            [
              "Baru",
              "Profesionalitas",
              "Pengelolaan dilaksanakan dengan kompetensi dan tanggung jawab profesi"
            ],
            [
              "Baru",
              "Proporsionalitas",
              "Pengelolaan memperhatikan keseimbangan sesuai peran dan kebutuhan"
            ],
            [
              "Baru",
              "Keterbukaan",
              "Pengelolaan dapat diketahui dan dinilai"
            ],
            [
              "Baru",
              "Pemeriksaan oleh badan bebas dan mandiri",
              "Pemeriksaan mempunyai kedudukan yang independen"
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
          "text": "Daftar empat asas klasik serta lima asas baru terdapat pada bagian 4 Penjelasan Umum UU 17/2003. UU 1 melengkapi pelaksanaan perbendaharaan; daftar tersebut tidak perlu diatribusikan sebagai kutipan khusus UU 1. Dalam batang tubuh, pengelolaan juga wajib tertib, taat aturan, efisien, ekonomis, efektif, transparan, dan bertanggung jawab. [UU 17/2003 Penjelasan Umum bagian 4, Ps.3(1); PP 12/2019 Ps.3(1)]"
        },
        {
          "kind": "figure",
          "title": "Empat asas klasik dan lima asas baru",
          "overview": {
            "heading": "Empat asas klasik dan lima asas baru",
            "cards": [
              {
                "title": "Klasik",
                "subtitle": "",
                "items": [
                  "Tahunan: Anggaran berlaku dalam tahun tertentu",
                  "Universalitas: Transaksi ditampilkan utuh dalam dokumen anggaran",
                  "Kesatuan: Pendapatan dan belanja dibaca dalam satu dokumen anggaran",
                  "Spesialitas: Tujuan serta peruntukan anggaran jelas"
                ],
                "takeaway": ""
              },
              {
                "title": "Baru",
                "subtitle": "",
                "items": [
                  "Akuntabilitas berorientasi hasil: Pertanggungjawaban menjelaskan hasil",
                  "Profesionalitas: Pengelolaan dilaksanakan dengan kompetensi dan tanggung jawab profesi",
                  "Proporsionalitas: Pengelolaan memperhatikan keseimbangan sesuai peran dan kebutuhan",
                  "Keterbukaan: Pengelolaan dapat diketahui dan dinilai",
                  "Pemeriksaan oleh badan bebas dan mandiri: Pemeriksaan mempunyai kedudukan yang independen"
                ],
                "takeaway": ""
              }
            ],
            "footer": "dua panel sama-sama menopang pengelolaan keuangan negara; tidak menggantikan delapan prinsip buku"
          },
          "caption": "Asas hukum dan prinsip buku mempunyai sumber serta pengelompokan berbeda. [UU 17/2003 Penjelasan Umum bagian 4 PDF 23–24]",
          "altText": "Empat asas klasik disandingkan dengan lima asas baru dari Penjelasan Umum UU 17 bagian 4."
        },
        {
          "kind": "self-check",
          "question": "Apakah unity membuktikan semua uang pemerintah harus berada pada satu rekening, dan nondiscretionary memaksa seluruh dana habis?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Pisahkan kesatuan dokumen dan pengelolaan kas; penggunaan alokasi mengikuti tujuan serta aturan, dengan penilaian 3E. Persentase serapan saja tidak membuktikan keberhasilan."
            }
          ],
          "signal": "Kamu dapat mengoreksi dua penafsiran prinsip yang terlalu mutlak."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Sebut delapan prinsip versi buku atau empat/lima asas hukum sesuai dasar soal.\nJelaskan unity dan nondiscretionary dengan batasnya; gunakan Penjelasan Umum UU 17 bagian 4 untuk daftar asas."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "6. Proses, evaluasi, dan pengantar value for money (3 menit)",
      "blocks": [
        {
          "kind": "p",
          "text": "Rencana yang baik perlu diterjemahkan ke dokumen kerja dan diperiksa kesesuaiannya. Pada daerah, RKPD mendasari KUA dan PPAS. Keduanya memandu RKA-SKPD sebelum verifikasi serta penyusunan RAPBD. Urutannya menunjukkan hubungan dokumen, bukan kalender kepatuhan untuk setiap instansi. [PP 12/2019 Ps.23(2), 89–104]"
        },
        {
          "kind": "p",
          "text": "Permendagri 77/2020 memberi pedoman teknis pengelolaan keuangan daerah. Rincian teknis dan pedoman penyusunan APBD tahunan perlu dibaca saat menerapkan proses pada suatu instansi. Bab ini memakai hubungan dokumen serta pelaku sebagai dasar belajar. [Permendagri 77/2020 Ps.1–2; PP 12/2019 Ps.93(3)]"
        },
        {
          "kind": "table",
          "headers": [
            "Dokumen/proses",
            "Isi atau peran"
          ],
          "rows": [
            [
              "KUA",
              "Kondisi ekonomi makro, asumsi APBD, kebijakan pendapatan/belanja/pembiayaan, strategi pencapaian"
            ],
            [
              "PPAS",
              "Prioritas pembangunan/program dan plafon sementara, terkait capaian kinerja serta target"
            ],
            [
              "RKA-SKPD",
              "Rencana unit dengan pendekatan jangka menengah, terpadu, dan berbasis kinerja"
            ],
            [
              "Verifikasi TAPD melalui PPKD",
              "Memeriksa kesesuaian RKA; kepala SKPD memperbaiki bila perlu"
            ],
            [
              "RAPBD dan pembahasan",
              "PPKD menyusun bahan rancangan; kepala daerah mengajukan kepada DPRD"
            ],
            [
              "Pelaksanaan dan evaluasi",
              "Hasil dipantau, dinilai, dan digunakan untuk rencana berikut"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[PP 12/2019 Ps.89–90, 93, 95, 101–104; UU 25/2004 Ps.28–30]"
        },
        {
          "kind": "figure",
          "title": "Dokumen dan kontrol penyusunan APBD",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 1310\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Dokumen dan kontrol penyusunan APBD</title><desc>Alur APBD menunjukkan RKPD, KUA/PPAS, RKA, verifikasi dan perbaikan, RAPBD, penetapan, pelaksanaan, serta evaluasi.</desc><defs><marker id=\"V-TM04-08-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"1310\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Dokumen dan kontrol penyusunan APBD</text><path d=\"M480 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 371 L480 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 493 L276.25 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><text class=\"svg-muted\" x=\"378.125\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Tidak sesuai</text><path d=\"M90 586.5 H68 V464.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><text class=\"svg-muted\" x=\"276.25\" y=\"638\" text-anchor=\"middle\" font-size=\"12\">Perbaikan</text><path d=\"M480 493 L683.75 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><text class=\"svg-muted\" x=\"581.875\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Sesuai</text><path d=\"M683.75 615 L480 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 737 L480 802\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 859 L480 924\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 981 L480 1046\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M480 1103 L480 1168\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><path d=\"M90 1196.5 H32 V98.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-08-arrow)\"/><text class=\"svg-muted\" x=\"480\" y=\"1248\" text-anchor=\"middle\" font-size=\"12\">Umpan balik</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">RKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">KUA / PPAS: kepala daerah–DPRD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">RKA: kepala SKPD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Verifikasi TAPD melalui PPKD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Perbaikan kepala SKPD</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Rancangan APBD oleh PPKD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Kepala daerah mengajukan kepada DPRD</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"802\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"831\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pembahasan / anggaran ditetapkan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"924\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"953\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pelaksanaan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"1046\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"1075\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Evaluasi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"1168\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"1197\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Rencana berikutnya</tspan></text></svg>",
          "overview": {
            "heading": "Dokumen dan kontrol penyusunan APBD",
            "cards": [
              {
                "title": "RKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "KUA / PPAS: kepala daerah–DPRD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "RKA: kepala SKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Verifikasi TAPD melalui PPKD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Perbaikan kepala SKPD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Rancangan APBD oleh PPKD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Kepala daerah mengajukan kepada DPRD",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pembahasan / anggaran ditetapkan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Pelaksanaan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Evaluasi",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Rencana berikutnya",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "RKPD→KUA/PPAS→RKA→verifikasi; tidak sesuai→perbaikan→verifikasi; sesuai→RAPBD→pembahasan/penetapan→pelaksanaan→evaluasi→rencana berikut"
          },
          "caption": "Verifikasi dan umpan balik menjaga hubungan rencana, anggaran, dan hasil. [PP 12/2019 Ps.23(2), 89–104; UU 25/2004 Ps.28–30]",
          "altText": "Alur APBD menunjukkan RKPD, KUA/PPAS, RKA, verifikasi dan perbaikan, RAPBD, penetapan, pelaksanaan, serta evaluasi."
        },
        {
          "kind": "p",
          "text": "Konsistensi membuat rencana, anggaran, dan pelaksanaan dapat ditelusuri. Namun, perubahan keadaan dapat memerlukan penyesuaian melalui mekanisme sah. UU perencanaan mengakui rencana yang tanggap terhadap perubahan dan memakai evaluasi untuk perbaikan. Jadi, konsistensi tidak berarti rencana harus membeku selamanya. [UU 25/2004 Ps.2(2), 28–30]"
        },
        {
          "kind": "p",
          "text": "Pimpinan kementerian/lembaga dan kepala SKPD mengevaluasi pelaksanaan rencana unit. Menteri/Kepala Bappeda menyusun evaluasi rencana berdasarkan evaluasi unit tersebut. Hasilnya menjadi bahan rencana nasional/daerah periode berikutnya. [UU 25/2004 Ps.29]"
        },
        {
          "kind": "p",
          "text": "**Value for money** berarti menilai manfaat penggunaan uang publik. Pengantar 3E membedakan ekonomi, efisiensi, dan efektivitas. Angka dana atau serapan saja belum cukup untuk menilai ketiganya. Kamu juga memerlukan keluaran, mutu, serta hasil yang ingin dicapai. [catatan kuliah TM04; UU 17/2003 Ps.3(1); konsep buku ASP]"
        },
        {
          "kind": "table",
          "headers": [
            "3E",
            "Pertanyaan",
            "Data yang dibutuhkan"
          ],
          "rows": [
            [
              "Ekonomi",
              "Apakah input diperoleh dengan biaya wajar untuk mutu yang diperlukan?",
              "Harga, spesifikasi, mutu input"
            ],
            [
              "Efisiensi",
              "Bagaimana input menghasilkan keluaran dengan mutu yang dipertahankan?",
              "Dana/sumber daya dan keluaran yang sebanding"
            ],
            [
              "Efektivitas",
              "Apakah hasil memenuhi tujuan?",
              "Sasaran, indikator hasil, realisasi"
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
          "text": "Dalam Ilustrasi A, Rp 286.750.000 dan 96 kunjungan masih merupakan rencana. Kamu dapat mengenali input dan target keluaran, tetapi belum menyimpulkan program efisien atau efektif. Dibutuhkan realisasi, kualitas layanan, dan perubahan akses baca. [Konsep buku ASP; catatan kuliah TM04]"
        },
        {
          "kind": "figure",
          "title": "Value for money: input, keluaran, hasil",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 822\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Value for money: input, keluaran, hasil</title><desc>Ekonomi menilai perolehan input, efisiensi hubungan input-keluaran, efektivitas hasil terhadap tujuan, dengan mutu sebagai syarat.</desc><defs><marker id=\"V-TM04-07-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"822\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Value for money: input, keluaran, hasil</text><path d=\"M480 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-07-arrow)\"/><path d=\"M480 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-07-arrow)\"/><path d=\"M480 371 L480 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM04-07-arrow)\"/><path d=\"M90 586.5 H56 V220.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"638\" text-anchor=\"middle\" font-size=\"12\">Mutu</text><path d=\"M90 586.5 H68 V342.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M90 708.5 H20 V342.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"480\" y=\"760\" text-anchor=\"middle\" font-size=\"12\">Data</text><path d=\"M90 708.5 H32 V464.5 H90\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Uang / sumber daya: dana Ilustrasi A</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Input bermutu: ekonomi pada perolehan input</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Keluaran layanan: kunjungan; efisiensi input–keluaran</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Hasil sesuai tujuan: akses baca; efektivitas hasil–tujuan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Mutu sebagai syarat pembanding</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Target ≠ realisasi: perlu dana aktual, kunjungan aktual, kualitas dan perubahan akses</tspan></text></svg>",
          "overview": {
            "heading": "Value for money: input, keluaran, hasil",
            "cards": [
              {
                "title": "Uang / sumber daya: dana Ilustrasi A",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Input bermutu: ekonomi pada perolehan input",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Keluaran layanan: kunjungan; efisiensi input–keluaran",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Hasil sesuai tujuan: akses baca; efektivitas hasil–tujuan",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Mutu sebagai syarat pembanding",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              },
              {
                "title": "Target ≠ realisasi: perlu dana aktual, kunjungan aktual, kualitas dan perubahan akses",
                "subtitle": "",
                "items": [],
                "takeaway": ""
              }
            ],
            "footer": "input→keluaran→hasil; mutu menjadi syarat pembanding; target dan realisasi dipisahkan"
          },
          "caption": "Hemat atau serapan tinggi saja tidak membuktikan efisiensi dan efektivitas. [catatan kuliah TM04; UU 17/2003 Ps.3(1); pengantar konsep buku ASP]",
          "altText": "Ekonomi menilai perolehan input, efisiensi hubungan input-keluaran, efektivitas hasil terhadap tujuan, dengan mutu sebagai syarat."
        },
        {
          "kind": "self-check",
          "question": "Dengan data Ilustrasi A berupa alokasi dan target kunjungan, apakah kamu boleh menghitung satu rasio lalu menyatakan program efektif?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Data itu belum memuat realisasi dan perubahan akses baca. Efektivitas memerlukan hasil dibandingkan tujuan; efisiensi juga memerlukan keluaran dan kualitas yang sebanding."
            }
          ],
          "signal": "Kamu menyebut data yang kurang sebelum menyimpulkan kinerja."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Urutkan dokumen dan kontrol APBD, lalu jelaskan evaluasi sebagai umpan balik.\nUntuk 3E, sebut input, keluaran, hasil, dan data yang diperlukan; jangan mengganti efektivitas dengan serapan."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pendalaman",
      "blocks": [
        {
          "kind": "h3",
          "text": "Anggaran sebagai kebijakan dan pertanggungjawaban"
        },
        {
          "kind": "p",
          "text": "Kerangka Konseptual SAP menempatkan anggaran sebagai dokumen formal kesepakatan eksekutif-legislatif. Anggaran menyatakan kebijakan publik dan target fiskal, memberi dasar pengendalian dengan konsekuensi hukum, serta mendukung penilaian kinerja. Hasil pelaksanaannya dilaporkan sebagai pertanggungjawaban kepada publik. Rencana dapat membahas periode lain, sedangkan APBN/APBD tetap mempunyai tahun anggaran yang ditentukan hukum. [PP 71/2010 Lamp.I KK par.13; UU 17/2003 Ps.4]"
        },
        {
          "kind": "h3",
          "text": "Saat dokumen perlu disesuaikan"
        },
        {
          "kind": "table",
          "headers": [
            "Keadaan",
            "Cara berpikir"
          ],
          "rows": [
            [
              "RKA tidak sesuai KUA/PPAS",
              "Verifikasi dan perbaikan oleh unit sebelum rancangan disusun"
            ],
            [
              "Kondisi pembangunan berubah",
              "Gunakan evaluasi dan mekanisme perubahan sah; jangan mengabaikan otorisasi"
            ],
            [
              "Kebutuhan darurat",
              "Ada pengaturan khusus; PP 12 Ps.94 mengatur RKA di luar KUA/PPAS untuk penambahan kebutuhan akibat darurat, termasuk keperluan mendesak"
            ],
            [
              "Target layanan berubah",
              "Jelaskan alasan, kebutuhan sumber daya, dan keterkaitan sasaran"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[PP 12/2019 Ps.94, 101; UU 25/2004 Ps.2(2), 28–30]"
        },
        {
          "kind": "h3",
          "text": "Informasi publik tetap perlu dapat dipahami"
        },
        {
          "kind": "p",
          "text": "Menampilkan dokumen membantu keterbukaan. Prinsip kejelasan menuntut istilah, klasifikasi, dan hubungan angka yang dapat diikuti. Karena itu, “dokumen sudah diunggah” tidak sendirian menjawab apakah masyarakat dapat memahami prioritas dan menilai penggunaan dana. [Konsep buku ASP; catatan kuliah TM04; UU 17/2003 Ps.3(1)]"
        },
        {
          "kind": "h3",
          "text": "Batas bab ini"
        },
        {
          "kind": "p",
          "text": "Diagram menggambarkan hubungan dokumen dan pelaku. Tanggal kalender, batas defisit daerah, serta mekanik pendekatan penganggaran berada di pembahasan lain atau memerlukan ketentuan khusus. Modul IAI halaman cetak 29 mendukung hubungan Renstra/Renja dan rencana pemerintah; jadwal dalam modul tidak dipakai sebagai kalender kepatuhan 2026. [Modul CGAE Pusat Level 2, cetak 29; UU 25/2004 Ps.6–7, 21, 25]"
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
              "Perencanaan dan anggaran",
              "Pilihan tindakan dan sumber daya keuangan untuk melaksanakannya"
            ],
            [
              "Enam fungsi hukum dan delapan fungsi buku",
              "Dasar serta sudut pengelompokan berbeda"
            ],
            [
              "Alokasi dan distribusi",
              "Arah penggunaan sumber daya perekonomian dan keadilan/kepatutan"
            ],
            [
              "Tujuan dan karakteristik",
              "Kegunaan yang dibantu anggaran dan ciri rancangan"
            ],
            [
              "Komprehensif dan bruto",
              "Cakupan seluruh arus dan penyajian tanpa kompensasi"
            ],
            [
              "Kesatuan dokumen dan kas",
              "Keutuhan anggaran dan pengelolaan/rekening kas"
            ],
            [
              "Nondiscretionary dan serapan 100%",
              "Penggunaan sesuai tujuan/3E dan persentase dana terpakai"
            ],
            [
              "Ekonomi, efisiensi, efektivitas",
              "Perolehan input, hubungan input-keluaran, hasil terhadap tujuan"
            ],
            [
              "Konsistensi dan perubahan",
              "Dapat ditelusuri dan disesuaikan melalui mekanisme sah"
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
          "text": "Proporsi belajar: 16 esai (E), 2 perlakuan konseptual (T), 2 membaca anggaran (L). Susunan ini tidak memprediksi bentuk UTS. Hanya Ilustrasi A Dinas Perpustakaan, B Tim Dua Unit, dan C Pemda Contoh digunakan ulang."
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "E01. Definisi dan urutan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Jelaskan perencanaan dan anggaran. Mengapa pilihan tindakan mendahului kebutuhan dana?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Perencanaan memilih tindakan masa depan dengan sumber daya tersedia. Anggaran memuat rencana pendapatan, belanja, transfer, pembiayaan dalam rupiah untuk satu periode. Kegiatan dan tujuan perlu ditentukan agar dana punya arah serta hasil yang dapat dinilai. [UU 25 Ps.1(1); PSAP 02 par.7]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E02. Tujuan perencanaan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut lima tujuan sistem perencanaan nasional dan jelaskan hubungannya dengan anggaran."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Koordinasi pelaku; integrasi/sinkronisasi/sinergi; keterkaitan rencana-anggaran-pelaksanaan-pengawasan; partisipasi; penggunaan sumber daya efisien, efektif, berkeadilan, berkelanjutan. Anggaran yang dapat ditelusuri ke rencana membantu menjaga koordinasi serta prioritas. [UU 25 Ps.2(4)]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E03. Dokumen dan waktu",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Pasangkan RPJP, RPJM, RKP dengan padanan daerah, Renstra/Renja, dan jangka waktunya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** RPJP/RPJPD 20 tahun; RPJM/RPJMD dan Renstra lima tahun; RKP/RKPD serta Renja tahunan. Rencana unit tersambung dengan rencana pemerintah; RKP memandu RAPBN dan RKPD memandu RAPBD. [UU 25 Ps.1, 6–7, 21(3), 25]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E04. Kedudukan APBN/APBD",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Bedakan APBN, APBD, dan RKA unit dari sisi persetujuan serta penetapan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** APBN adalah rencana keuangan tahunan negara disetujui DPR dan ditetapkan dengan UU. APBD adalah rencana tahunan daerah disetujui DPRD dan ditetapkan dengan Perda. RKA unit menjadi bahan rancangan dan bukan anggaran yang sudah ditetapkan. [UU 17 Ps.1(7–8), 3(2–3), 14, 19]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E05. Enam fungsi",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut enam fungsi APBN/APBD dan dasar pasalnya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Otorisasi, perencanaan, pengawasan, alokasi, distribusi, stabilisasi. Dasarnya UU 17 Ps.3(4) beserta Penjelasan; untuk APBD juga PP 12 Ps.23(3) beserta Penjelasan. Jelaskan dasar pelaksanaan, pedoman kegiatan, penilaian kesesuaian, arah ekonomi, keadilan, dan keseimbangan ekonomi secara berurutan."
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E06. Alokasi dan distribusi",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Mengapa jawaban “keduanya membagi dana” belum cukup?"
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
            "Fungsi",
            "Penekanan"
          ],
          "rows": [
            [
              "Alokasi",
              "Mengurangi pengangguran/pemborosan dan meningkatkan efisiensi/efektivitas perekonomian"
            ],
            [
              "Distribusi",
              "Keadilan dan kepatutan kebijakan"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "Pembagian dana perlu dijelaskan tujuan ekonominya atau pembagian beban/manfaatnya. [UU 17 Penjelasan Ps.3(4); PP 12 Penjelasan Ps.23(3)]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E07. Delapan fungsi buku",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut delapan fungsi versi buku dan jelaskan koordinasi/komunikasi memakai Ilustrasi B."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Perencanaan, pengendalian, kebijakan fiskal, politik, koordinasi/komunikasi, penilaian kinerja, motivasi, ruang publik. B memerlukan penyelarasan agenda, sasaran, serta tugas dua unit agar tidak tumpang tindih. Anggaran menjadi alat menemukan ketidaksesuaian program. [Konsep buku ASP; catatan kuliah TM04]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E08. Bandingkan dua daftar",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Bandingkan enam fungsi regulasi dan delapan fungsi buku dari dasar, jumlah, dan kegunaan jawaban."
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
            "Dimensi",
            "Regulasi",
            "Buku"
          ],
          "rows": [
            [
              "Dasar/jumlah",
              "UU 17 Ps.3(4), PP 12 Ps.23(3); enam",
              "Konsep buku ASP; delapan"
            ],
            [
              "Kegunaan",
              "Jawaban fungsi menurut aturan",
              "Jawaban kegunaan bagi manajemen dan hubungan publik"
            ],
            [
              "Batas",
              "Tidak menambahkan politik/motivasi sebagai fungsi legal tersendiri",
              "Tidak menggantikan daftar regulasi"
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
          "text": "Keduanya dapat menerangkan kasus yang sama; tidak dijumlahkan menjadi daftar hukum."
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E09. Empat tujuan buku",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut empat tujuan anggaran versi buku dan jelaskan tujuannya bagi layanan publik."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Membantu tujuan fiskal/koordinasi; efisiensi/keadilan penyediaan barang-jasa publik melalui prioritas; memenuhi prioritas belanja strategis; transparansi/pertanggungjawaban kepada legislatif dan masyarakat. Daftar itu membantu menilai arah anggaran layanan, tanpa mengklaim satu pasal khusus memuat empat tujuan tersebut. [Konsep buku ASP; catatan kuliah TM04]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E10. Enam karakteristik",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut enam karakteristik konseptual dan hubungkan dengan Ilustrasi A."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Berorientasi masa depan; kuantitatif moneter/nonmoneter; periode; sumber/penggunaan dana; dasar pelaksanaan/pengendalian; target/komitmen manajerial. A memiliki TA 2026, dana Rp 286.750.000, 12 kelurahan, target 96 kunjungan. Sumber pendanaan dan indikator peningkatan akses masih perlu dilengkapi. [Konsep buku ASP; catatan kuliah TM04]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E11. Karakteristik hukum dan bruto",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut ketentuan tahunan, persetujuan, ketersediaan dana, dan bruto pada anggaran pemerintah."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Tahun anggaran 1 Jan–31 Des. APBN/APBD disetujui legislatif dan ditetapkan dengan UU/Perda. Tindakan yang menimbulkan beban memerlukan anggaran tersedia/cukup; pengeluaran daerah perlu dasar hukum. Penerimaan/pengeluaran disajikan bruto tanpa saling menghapus. [UU 17 Ps.1, 3–4; UU 1 Ps.3(3); PP 12 Ps.24(5–7); PSAP 02 par.7]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E12. Delapan prinsip buku",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut delapan prinsip anggaran versi buku, lalu jelaskan akurat/rasional dan jelas."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Otorisasi legislatif, komprehensif, unity, nondiscretionary appropriation, periodik, akurat/rasional, jelas, diketahui publik. Estimasi perlu realistis tanpa cadangan tersembunyi menyesatkan. Struktur yang jelas membantu masyarakat membaca sumber dana dan prioritas. [Konsep buku ASP; catatan kuliah TM04]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E13. Dua tafsir terlalu mutlak",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Nilai klaim “unity berarti satu rekening fisik untuk semua entitas” dan “nondiscretionary berarti dana wajib habis 100%”."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Kedua klaim terlalu mutlak. Kesatuan dokumen anggaran berbeda dari pengelolaan RKUN/RKUD dan rekening berwenang. Nondiscretionary menekankan penggunaan alokasi sesuai tujuan dan 3E; tidak menghapus kewenangan sah atau membuktikan keberhasilan hanya dari serapan 100%. [Konsep buku ASP; UU 1 Ps.1(2–5), 7, 9; PP 12 Ps.27(1)]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E14. Asas klasik dan baru",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Sebut empat asas klasik dan lima asas baru beserta sumbernya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Klasik: tahunan, universalitas, kesatuan, spesialitas. Baru: akuntabilitas berorientasi hasil, profesionalitas, proporsionalitas, keterbukaan, pemeriksaan oleh badan bebas dan mandiri. Sumber daftar ialah UU 17 Penjelasan Umum bagian 4; UU 1 melengkapi pelaksanaan perbendaharaan."
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E15. Dokumen dan kontrol",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Urutkan proses APBD dari RKPD sampai rancangan diajukan, dengan peran verifikasi."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** RKPD mendasari KUA/PPAS; keduanya memandu RKA-SKPD. TAPD memverifikasi RKA melalui PPKD. Kepala SKPD memperbaiki bila perlu; PPKD menyiapkan rancangan APBD, kemudian kepala daerah mengajukannya kepada DPRD. Pelaksanaan dan evaluasi memberi bahan rencana berikutnya. [PP 12 Ps.23(2), 89–90, 101–104; UU 25 Ps.28–30]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E16. Pengantar 3E",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Bedakan ekonomi, efisiensi, dan efektivitas. Apakah target Ilustrasi A cukup untuk menilai semuanya?"
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
            "Konsep",
            "Yang dinilai",
            "Data tambahan A"
          ],
          "rows": [
            [
              "Ekonomi",
              "Perolehan input dengan biaya wajar dan mutu sesuai kebutuhan",
              "Harga dan spesifikasi aktual"
            ],
            [
              "Efisiensi",
              "Hubungan input-keluaran dengan mutu sebanding",
              "Dana aktual, kunjungan aktual, kualitas layanan"
            ],
            [
              "Efektivitas",
              "Hasil terhadap tujuan",
              "Indikator dan realisasi perubahan akses baca"
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
          "text": "Alokasi serta target bukan bukti pencapaian. [Konsep buku ASP; catatan kuliah TM04; UU 17 Ps.3(1)]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T01. Sebelum menimbulkan beban, Ilustrasi A",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Dinas Perpustakaan Contoh mempunyai alokasi program Rp 286.750.000 untuk TA 2026, target 12 kelurahan/96 kunjungan. Pelaksana ingin membuat tindakan yang menimbulkan beban di luar anggaran tersedia, hanya karena tujuannya dinilai baik. Apakah dapat langsung dilakukan? Tentukan langkah konseptualnya, tanpa jurnal."
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
            "Periksa otorisasi, tujuan alokasi, serta anggaran tersedia dan cukup. Tujuan layanan tidak sendirian menjadi otorisasi.",
            "UU 1 Ps.3(3) melarang tindakan yang menimbulkan pengeluaran jika anggaran tidak tersedia atau tidak cukup.",
            "Tunda tindakan tersebut; gunakan mekanisme penganggaran/perubahan sah sesuai kondisi dan kewenangan. Tidak menyatakan semua kasus mempunyai prosedur darurat yang sama.",
            "Setelah dasar sah tersedia, gunakan alokasi sesuai tujuan dan nilai 3E. Tidak perlu mengarang jurnal untuk pilihan otorisasi. [UU 1 Ps.3(3); PP 12 Ps.24(5–6)]"
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T02. Konsistensi dan evaluasi, Ilustrasi B",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Tim Dua Unit Contoh mempunyai agenda TA 2026 yang bertumpang tindih. Evaluasi menemukan perlunya penyesuaian sasaran dan tugas. Tim menyatakan rencana tidak boleh berubah karena UU 25 mewajibkan konsistensi. Nilai klaim dan tentukan langkah konseptual."
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
            "Identifikasi tumpang tindih sebagai masalah koordinasi dan komunikasi.",
            "Hubungkan hasil evaluasi dengan sasaran, dokumen rencana, dan kebutuhan anggaran.",
            "Usulkan penyesuaian melalui mekanisme sah dan otorisasi yang diperlukan; pertahankan jejak alasan/perubahan.",
            "Konsistensi berarti keterkaitan dapat ditelusuri. UU 25 Ps.2(2) mengakui tanggap perubahan; Ps.28–30 memakai evaluasi sebagai bahan perencanaan berikut. [Konsep buku ASP untuk fungsi; UU 25 Ps.2(2),(4), 28–30]"
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L01. Baca target, Ilustrasi A",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Baca tabel rancangan berikut. Pilih input, keluaran, hasil, dan unsur yang masih kurang untuk menyimpulkan efektivitas."
        },
        {
          "kind": "table",
          "headers": [
            "Unsur rencana",
            "Nilai/keterangan"
          ],
          "rows": [
            [
              "Alokasi program",
              "Rp 286.750.000"
            ],
            [
              "Cakupan sasaran",
              "12 kelurahan"
            ],
            [
              "Target keluaran",
              "96 kunjungan setahun"
            ],
            [
              "Hasil yang diinginkan",
              "Akses baca meningkat"
            ],
            [
              "Realisasi dan perubahan akses",
              "Tidak diberikan dalam soal"
            ]
          ],
          "align": [
            "left",
            "left"
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
            "entity": "Dinas Perpustakaan Contoh",
            "title": "Potongan rencana program perpustakaan keliling, TA 2026",
            "unit": "Satuan: rupiah, kelurahan, kunjungan; semua angka adalah rencana"
          }
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Jawaban:** Alokasi merupakan sumber daya keuangan/input rencana; kunjungan target keluaran; peningkatan akses hasil yang diinginkan. Untuk efektivitas, diperlukan indikator perubahan akses, target hasil, serta data realisasinya. Jumlah 12 kelurahan menunjukkan cakupan rencana, bukan bukti semua warga memperoleh manfaat. Jangan menghitung rasio biaya lalu menggantikan penilaian hasil. [Konsep buku ASP; catatan kuliah TM04]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L02. Baca penyajian bruto, Ilustrasi C",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal:** Pemda Contoh menyusun potongan rancangan APBD 2026. Rencana pendapatan jasa Rp 126.750.000 dan belanja pelayanan terkait Rp 38.450.000. Draf menampilkan pendapatan neto Rp 88.300.000 serta tidak menampilkan belanja itu. Tidak ada transaksi lain pada potongan ini. Hitung selisih, koreksi penyajian, dan jelaskan apakah angka neto cukup."
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
            "Selisih analitis = Rp 126.750.000 − Rp 38.450.000 = **Rp 88.300.000**.",
            "Selisih itu benar secara hitung, tetapi tidak menggantikan penyajian bruto.",
            "Tampilkan pendapatan Rp 126.750.000 dan belanja Rp 38.450.000 masing-masing utuh. Tidak ada jurnal yang diperlukan untuk membaca rancangan ini. [PP 12 Ps.24(7) dan Penjelasan; PSAP 02 par.7]"
          ]
        },
        {
          "kind": "table",
          "headers": [
            "Sisi",
            "Pos",
            "Nilai"
          ],
          "rows": [
            [
              "Pendapatan",
              "Pendapatan jasa",
              "126.750.000"
            ],
            [
              "Belanja",
              "Belanja pelayanan",
              "38.450.000"
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
            }
          ],
          "reportHeader": {
            "entity": "Pemda Contoh",
            "title": "Potongan rancangan APBD, TA 2026",
            "unit": "Satuan: rupiah; hanya dua pos Ilustrasi C, bukan APBD lengkap"
          }
        },
        {
          "kind": "p",
          "text": "**Kesimpulan:** Bruto mempertahankan informasi sumber dan penggunaan dana. Dua sisi yang berbeda tidak dijumlahkan menjadi pendapatan gabungan; selisih dapat dibahas secara terpisah. Potongan ini tidak membuktikan keseimbangan seluruh APBD atau kinerja program."
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    }
  ]
};
