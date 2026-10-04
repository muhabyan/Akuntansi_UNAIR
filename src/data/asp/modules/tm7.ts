// Generated from the approved 05 package by scripts/build-akk203-content.mjs.
// Source SHA-256: 125941e65da3861381d155a5483a7a2d9da11a7a3b1fc499eb6c348d404d25d7
import type { Reading } from '../../../types';

export const TM7_READING: Reading = {
  "tm": 7,
  "title": "Tujuh laporan keuangan pemerintah",
  "ref": "Akuntansi Sektor Publik",
  "intro": "telusuri asal setiap angka ketika membandingkan dua saldo.",
  "objectives": [
    "LRA membandingkan realisasi pendapatan, belanja, dan pembiayaan dengan anggaran.",
    "LPSAL menjelaskan perubahan saldo anggaran dari awal sampai akhir tahun.",
    "LO mencatat pendapatan dan beban secara akrual.",
    "LPE menjelaskan perubahan ekuitas, termasuk hasil LO final dan koreksi.",
    "Neraca menunjukkan aset, kewajiban, dan ekuitas pada satu tanggal.",
    "LAK menelusuri arus kas; CaLK menjelaskan kebijakan dan rincian seluruh laporan.",
    "Periksa SiLPA ke LPSAL, hasil LO ke LPE, lalu ekuitas dan kas ke Neraca."
  ],
  "layout": "layered",
  "coreReadingMinutes": 25,
  "blocks": [
    {
      "kind": "p",
      "text": "*Akuntansi Sektor Publik, Kelas N. Dasar utama: PP 71/2010 Lampiran I. Contoh latihan memakai dataset Kabupaten Contoh yang juga dipakai pada TM06.*"
    },
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat",
      "blocks": [
        {
          "kind": "p",
          "text": "Kamu menerima tujuh laporan dari satu pemda. Mulai dari pertanyaan yang ingin kamu jawab. Anggaran, hak layanan, dan uang yang masih tersedia dibaca melalui laporan yang berbeda. [PSAP 01 par. 9, 14]"
        },
        {
          "kind": "figure",
          "title": "Tujuh laporan, tujuh pertanyaan",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 700\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Tujuh laporan, tujuh pertanyaan</title><desc>LRA dan LPSAL menjelaskan anggaran. LO, LPE, Neraca, dan LAK menjelaskan keuangan. CaLK membantu membaca seluruh laporan.</desc><defs><marker id=\"V-TM07-01-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"700\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Tujuh laporan, tujuh pertanyaan</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Kelompok</text><path d=\"M276.25 127 V172 H32 V299 H276.25 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"683.75\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Kelompok</text><path d=\"M683.75 127 V172 H56 V299 H683.75 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M683.75 127 V172 H68 V421 H683.75 V436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M683.75 127 V172 H20 V543 H480 V558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"581.875\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Kelompok</text><path d=\"M276.25 493 V538 H32 V177 H276.25 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"276.25\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Menjelaskan</text><path d=\"M276.25 493 V538 H44 V299 H276.25 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M276.25 493 V538 H56 V177 H683.75 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M276.25 493 V538 H68 V299 H683.75 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M462.5 464.5 H497.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M276.25 493 L480 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"378.125\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Menjelaskan</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pelaksanaan anggaran</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Finansial</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">LRA: realisasi versus anggaran</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">LO: hak dan beban</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">LPSAL: perubahan SAL</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">LPE: perubahan ekuitas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">CaLK: kebijakan dan penjelasan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Neraca: aset, kewajiban, ekuitas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">LAK: penerimaan dan pengeluaran kas</tspan></text></svg>",
          "overview": {
            "heading": "Tujuh laporan, tujuh pertanyaan",
            "cards": [
              {
                "title": "LRA",
                "subtitle": "Pelaksanaan anggaran",
                "items": [
                  "Realisasi versus anggaran."
                ],
                "takeaway": ""
              },
              {
                "title": "LPSAL",
                "subtitle": "Pelaksanaan anggaran",
                "items": [
                  "Perubahan SAL."
                ],
                "takeaway": ""
              },
              {
                "title": "LO",
                "subtitle": "Finansial",
                "items": [
                  "Hak pendapatan dan beban."
                ],
                "takeaway": ""
              },
              {
                "title": "LPE",
                "subtitle": "Finansial",
                "items": [
                  "Perubahan ekuitas."
                ],
                "takeaway": ""
              },
              {
                "title": "Neraca",
                "subtitle": "Finansial",
                "items": [
                  "Aset, kewajiban, dan ekuitas."
                ],
                "takeaway": ""
              },
              {
                "title": "LAK",
                "subtitle": "Finansial",
                "items": [
                  "Penerimaan dan pengeluaran kas."
                ],
                "takeaway": ""
              },
              {
                "title": "CaLK",
                "subtitle": "",
                "items": [
                  "Kebijakan dan penjelasan untuk keenam laporan."
                ],
                "takeaway": ""
              }
            ],
            "footer": "Kelompok pelaksanaan anggaran memuat LRA dan LPSAL; kelompok finansial memuat LO, LPE, Neraca, dan LAK; CaLK terhubung ke enam laporan"
          },
          "caption": "Setiap laporan menjawab pertanyaan berbeda tentang entitas yang sama. [PP 71/2010 Lampiran I, PSAP 01 par. 9, 14–16]",
          "altText": "LRA dan LPSAL menjelaskan anggaran. LO, LPE, Neraca, dan LAK menjelaskan keuangan. CaLK membantu membaca seluruh laporan."
        },
        {
          "kind": "ul",
          "items": [
            "LRA membandingkan realisasi pendapatan, belanja, dan pembiayaan dengan anggaran.",
            "LPSAL menjelaskan perubahan saldo anggaran dari awal sampai akhir tahun.",
            "LO mencatat pendapatan dan beban secara akrual.",
            "LPE menjelaskan perubahan ekuitas, termasuk hasil LO final dan koreksi.",
            "Neraca menunjukkan aset, kewajiban, dan ekuitas pada satu tanggal.",
            "LAK menelusuri arus kas; CaLK menjelaskan kebijakan dan rincian seluruh laporan.",
            "Periksa SiLPA ke LPSAL, hasil LO ke LPE, lalu ekuitas dan kas ke Neraca."
          ]
        },
        {
          "kind": "callout",
          "variant": "gist",
          "compact": true,
          "title": "Kalau cuma sempat ingat satu hal:",
          "text": "telusuri asal setiap angka ketika membandingkan dua saldo."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Inti"
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "1. Laporan mana yang kamu perlukan? · 3 menit",
      "blocks": [
        {
          "kind": "p",
          "text": "Kamu ingin tahu apakah belanja sudah sesuai anggaran. Temanmu ingin tahu berapa utang pemda pada akhir tahun. Dua pertanyaan itu membutuhkan laporan berbeda. Tujuh laporan merupakan satu set informasi untuk pertanggungjawaban dan keputusan tentang sumber daya. [PSAP 01 par. 9–14]"
        },
        {
          "kind": "table",
          "headers": [
            "Laporan",
            "Pertanyaan yang dijawab",
            "Basis atau sifat informasi",
            "Waktu"
          ],
          "rows": [
            [
              "LRA",
              "Berapa anggaran dan realisasinya?",
              "Basis anggaran, kas pada contoh ini",
              "Satu periode"
            ],
            [
              "LPSAL",
              "Bagaimana SAL berubah?",
              "Perubahan saldo anggaran",
              "Satu periode"
            ],
            [
              "LO",
              "Berapa hak pendapatan dan beban?",
              "Akrual",
              "Satu periode"
            ],
            [
              "LPE",
              "Apa yang mengubah ekuitas?",
              "Akrual, perubahan ekuitas",
              "Satu periode"
            ],
            [
              "Neraca",
              "Apa yang dimiliki dan harus dibayar?",
              "Posisi aset, kewajiban, ekuitas",
              "Tanggal tertentu"
            ],
            [
              "LAK",
              "Dari mana kas datang dan digunakan?",
              "Arus kas",
              "Satu periode dan saldo akhir"
            ],
            [
              "CaLK",
              "Apa dasar, rincian, dan penjelasan angka?",
              "Menjelaskan seluruh laporan",
              "Mengikuti set laporan"
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
          "text": "[PSAP 01 par. 14, 35–44, 89–108; Kerangka Konseptual par. 42–45]"
        },
        {
          "kind": "p",
          "text": "Lihat dulu identitasnya. Nama entitas, cakupan tunggal atau konsolidasi, periode, mata uang, dan satuan menentukan cara membaca angka. Neraca bertanggal 31 Desember menunjukkan posisi hari itu. Laporan arus untuk tahun yang berakhir 31 Desember mencakup aktivitas sepanjang tahun. [PSAP 01 par. 27–33]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi Kabupaten Contoh.** Neraca menunjukkan utang jasa Rp6.850.000 pada 31 Desember 2025. LO menjelaskan beban jasa tahun 2025, sedangkan LRA menjelaskan pembayaran yang menjadi realisasi belanja. Kamu membutuhkan ketiganya untuk melihat posisi akhir dan aktivitas tahun tersebut. [PSAP 01 par. 44; PSAP 12 par. 32–35; PSAP 02 par. 31]"
        },
        {
          "kind": "p",
          "text": "Setiap entitas tidak otomatis menyusun ketujuh laporan. LAK disajikan oleh entitas dengan fungsi perbendaharaan umum. LPSAL disajikan oleh BUN dan entitas pelaporan yang menyusun laporan konsolidasian. Dalam latihan, kita memakai pemda konsolidasi; SKPD menjadi entitas akuntansi yang laporannya digabungkan. [PSAP 01 par. 15–16; PSAP 12 par. 8]"
        },
        {
          "kind": "callout",
          "variant": "note",
          "title": "Update 2026. PSAP 18 efektif mulai TA 2026 dan mengizinkan penerapan lebih awal dengan pengungkapan. PSAP 19 efektif TA 2026; PSAP 20 efektif TA 2027. Ilustrasi ini memakai TA 2025 dan mengasumsikan tidak menerapkan PSAP 18 lebih awal. [PSAP 18 par. 115; PSAP 19 par. 38; PSAP 20 par. 56]",
          "text": ""
        },
        {
          "kind": "self-check",
          "question": "Kamu diminta memeriksa utang pemda pada akhir tahun dan realisasi anggarannya. Pilih dua laporan.",
          "answer": [
            {
              "kind": "p",
              "text": "Neraca untuk posisi utang; LRA untuk perbandingan anggaran dan realisasi."
            }
          ],
          "signal": "Bisa membedakan posisi pada tanggal tertentu dengan aktivitas satu periode."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Sebutkan tujuh laporan, lalu kaitkan masing-masing dengan pertanyaan pembaca.\nTambahkan pengecualian LAK dan LPSAL jika soal menanyakan SKPD. Dasar: PSAP 01 par. 14–16."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "2. LRA dan LPSAL: hasil tahun ini versus saldo kumulatif · 5 menit",
      "blocks": [
        {
          "kind": "p",
          "text": "Realisasi pendapatan bisa lebih kecil dari belanja. Pemda masih dapat membiayai selisihnya melalui pembiayaan yang sah. Itulah sebabnya surplus atau defisit LRA masih memerlukan perhitungan pembiayaan untuk mendapatkan hasil akhir anggaran. Kamu masih perlu menghitung pembiayaan neto. [PSAP 02 par. 48–62]"
        },
        {
          "kind": "table",
          "headers": [
            "Langkah",
            "Rumus",
            "Arti"
          ],
          "rows": [
            [
              "Surplus/defisit-LRA",
              "Pendapatan-LRA − belanja − transfer keluar",
              "Selisih di luar pembiayaan; transfer dihitung satu kali sesuai penyajian"
            ],
            [
              "Pembiayaan neto",
              "Penerimaan pembiayaan − pengeluaran pembiayaan",
              "Sumber pembiayaan bersih"
            ],
            [
              "SiLPA/SiKPA",
              "Surplus/defisit-LRA + pembiayaan neto",
              "Hasil anggaran satu periode"
            ],
            [
              "SAL akhir",
              "SAL awal − penggunaan SAL + SiLPA/SiKPA ± koreksi ± lain-lain",
              "Saldo kumulatif setelah perubahan"
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
          "text": "Jika transfer sudah dimasukkan pada pendapatan atau belanja, jangan menghitungnya kembali. Tanda positif pada hasil anggaran berarti SiLPA, tanda negatif berarti SiKPA. [PSAP 02 par. 13, 23, 40, 58–62; PSAP 01 par. 41–43]"
        },
        {
          "kind": "figure",
          "title": "Dari SiLPA menuju SAL akhir",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 723\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Dari SiLPA menuju SAL akhir</title><desc>SiLPA berasal dari LRA, kemudian ditambahkan pada SAL awal setelah penggunaan SAL dan penyesuaian.</desc><defs><marker id=\"V-TM07-02-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"723\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Dari SiLPA menuju SAL akhir</text><path d=\"M276.25 150 L276.25 215\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-02-arrow)\"/><path d=\"M683.75 150 L683.75 215\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-02-arrow)\"/><path d=\"M276.25 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-02-arrow)\"/><path d=\"M683.75 272 L480 337\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-02-arrow)\"/><path d=\"M480 394 L480 459\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-02-arrow)\"/><path d=\"M480 516 L480 581\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-02-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pendapatan-LRA − belanja − transfer</tspan><tspan x=\"276.25\" dy=\"23\">keluar</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Penerimaan − pengeluaran pembiayaan</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"215\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"244\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Surplus / defisit-LRA</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"215\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"244\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Pembiayaan neto</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"337\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"366\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">SiLPA / SiKPA = surplus / defisit + pembiayaan neto</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"459\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"488\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">SAL awal − penggunaan SAL + SiLPA / SiKPA ± koreksi ± lain-lain</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"581\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"610\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">SAL akhir</tspan></text></svg>",
          "overview": {
            "heading": "Dari SiLPA menuju SAL akhir",
            "cards": [
              {
                "title": "1. Hitung SiLPA / SiKPA",
                "subtitle": "",
                "items": [
                  "Pendapatan − belanja − transfer keluar = surplus/defisit-LRA.",
                  "Penerimaan − pengeluaran pembiayaan = pembiayaan neto.",
                  "Jumlahkan keduanya: SiLPA/SiKPA."
                ],
                "takeaway": ""
              },
              {
                "title": "2. Hitung SAL akhir",
                "subtitle": "",
                "items": [
                  "SAL awal − penggunaan SAL + SiLPA/SiKPA ± koreksi ± lain-lain.",
                  "Dataset: 105.400.000 − 54.200.000 + 1.450.000 = 52.650.000."
                ],
                "takeaway": ""
              }
            ],
            "footer": "Pendapatan dikurangi belanja/transfer menjadi surplus/defisit; tambah pembiayaan neto menjadi SiLPA/SiKPA; SAL awal dikurangi penggunaan ditambah SiLPA/SiKPA dan penyesuaian menjadi SAL akhir"
          },
          "caption": "Hasil satu tahun masuk ke perubahan saldo kumulatif. [PSAP 02 par. 58–62; PSAP 01 par. 41–43]",
          "altText": "SiLPA berasal dari LRA, kemudian ditambahkan pada SAL awal setelah penggunaan SAL dan penyesuaian."
        },
        {
          "kind": "p",
          "text": "**Ilustrasi Kabupaten Contoh.** Pendapatan-LRA Rp118.650.000 dikurangi barang/jasa Rp61.400.000 dan modal Rp96.350.000 menghasilkan defisit Rp39.100.000. Pembiayaan neto Rp54.200.000 − Rp13.650.000 = Rp40.550.000. Hasilnya SiLPA Rp1.450.000; SAL akhir Rp105.400.000 − Rp54.200.000 + Rp1.450.000 = Rp52.650.000. [PSAP 02 par. 58–62; PSAP 01 par. 41]"
        },
        {
          "kind": "p",
          "text": "Penggunaan SAL berasal dari saldo tahun lalu. Pada contoh ini, Rp54.200.000 menjadi penerimaan pembiayaan LRA, tanpa kas masuk baru pada tahun 2025. Dalam LPSAL, penggunaan itu mengurangi SAL awal. Menambahkan angka tersebut pada LAK akan menghitung saldo lama sebagai penerimaan kas baru. [PSAP 02 ilustrasi LRA; PSAP 01 par. 41; PSAP 03 par. 57–59]"
        },
        {
          "kind": "p",
          "text": "Pendapatan-LRA mengikuti penerimaan kas yang menjadi hak anggaran. Belanja LS mengikuti pengeluaran RKUD; pengeluaran melalui bendahara pengeluaran mengikuti pengesahan pertanggungjawaban atas pengeluaran tersebut. Karena itu, tanda tangan kontrak atau penerimaan jasa tidak langsung menjadi belanja-LRA. Pola retribusi melalui bendahara penerimaan mengikuti jurnal SAPD yang dipelajari di TM06. [PSAP 02 par. 21, 31–33; Permendagri 64/2013 Lampiran II PDF 90]"
        },
        {
          "kind": "self-check",
          "question": "Defisit LRA Rp39.100.000 dan pembiayaan neto Rp40.550.000. Apakah SAL akhir pasti Rp1.450.000?",
          "answer": [
            {
              "kind": "p",
              "text": "SiLPA Rp1.450.000. SAL akhir masih memerlukan SAL awal, penggunaan, koreksi, dan pos lain; pada dataset nilainya Rp52.650.000."
            }
          ],
          "signal": "Tidak berhenti pada hasil LRA ketika soal meminta SAL akhir."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Tulis surplus/defisit-LRA, pembiayaan neto, lalu SiLPA/SiKPA dengan tanda yang benar.\nJika diminta SAL akhir, lanjutkan pergerakan SAL awal. Dasar: PSAP 02 par. 58–62 dan PSAP 01 par. 41."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "3. LO dan LPE: hak, konsumsi, dan perubahan ekuitas · 5 menit",
      "blocks": [
        {
          "kind": "p",
          "text": "Jasa telah diterima, tetapi pembayaran masih terutang pada akhir tahun. LRA dan LO membaca peristiwa itu dari sisi berbeda. LO mengakui beban saat kewajiban timbul, aset dikonsumsi, atau manfaat ekonomi/potensi jasa menurun. Pembayaran kas dapat berlangsung kemudian. [PSAP 12 par. 32–35]"
        },
        {
          "kind": "p",
          "text": "Pendapatan-LO mengikuti hak atas pendapatan atau realisasi sumber daya yang memenuhi aturan pengakuan. Untuk layanan dalam contoh, hak menagih timbul ketika pelayanan selesai sesuai ketentuan. Jadi hak yang masih berupa piutang dapat masuk LO, walaupun tidak menjadi pendapatan-LRA tahun itu. [PSAP 12 par. 19–22]"
        },
        {
          "kind": "table",
          "headers": [
            "Peristiwa pada dataset",
            "LRA 2025",
            "LO 2025",
            "Neraca akhir"
          ],
          "rows": [
            [
              "Retribusi diterima Rp118.650.000",
              "Pendapatan-LRA",
              "Pendapatan-LO",
              "Kas setelah seluruh arus"
            ],
            [
              "Hak retribusi masih berupa piutang Rp12.850.000",
              "Tidak menambah realisasi",
              "Pendapatan-LO",
              "Piutang"
            ],
            [
              "Peralatan LS Rp96.350.000",
              "Belanja modal",
              "Beban melalui penyusutan",
              "Aset tetap neto"
            ],
            [
              "Jasa diterima, masih terutang Rp6.850.000",
              "Tidak menambah belanja-LRA",
              "Beban jasa",
              "Utang"
            ],
            [
              "Opname persediaan Rp11.650.000",
              "Tidak mengubah kas pembayaran",
              "Mengurangi beban pada metode periodik",
              "Persediaan"
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
          "text": "[PSAP 12 par. 19–22, 32–35; PSAP 05 par. 22–25; PSAP 07 par. 52–58; Permendagri 64/2013 Lampiran II PDF 90, 92–95, 98]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi Kabupaten Contoh.** Pendapatan-LO Rp118.650.000 + Rp12.850.000 = Rp131.500.000. Beban persediaan Rp39.550.000, jasa Rp25.500.000, dan penyusutan Rp43.330.000 menghasilkan total Rp108.380.000. Surplus-LO final Rp23.120.000 masuk LPE, sehingga ekuitas Rp268.620.000 naik menjadi Rp291.740.000 tanpa koreksi langsung. [PSAP 12 par. 51–52; PSAP 01 par. 101–102]"
        },
        {
          "kind": "figure",
          "title": "Dari hasil LO menuju ekuitas Neraca",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 944\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Dari hasil LO menuju ekuitas Neraca</title><desc>Hasil LO final mengubah ekuitas awal pada LPE. Ekuitas akhir tersebut menjadi ekuitas Neraca.</desc><defs><marker id=\"V-TM07-03-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"944\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Dari hasil LO menuju ekuitas Neraca</text><path d=\"M480 127 L480 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-03-arrow)\"/><path d=\"M480 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-03-arrow)\"/><path d=\"M480 371 L480 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-03-arrow)\"/><path d=\"M480 493 L480 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-03-arrow)\"/><path d=\"M480 615 L480 680\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-03-arrow)\"/><path d=\"M480 737 L480 802\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-03-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Pendapatan-LO − beban</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Surplus / defisit operasi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">+ hasil nonoperasional + pos luar biasa</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Surplus / defisit-LO final</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Ekuitas awal + hasil LO final ± koreksi ekuitas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"680\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"709\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Ekuitas akhir LPE</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"802\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"831\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Ekuitas Neraca</tspan></text></svg>",
          "overview": {
            "heading": "Dari hasil LO menuju ekuitas Neraca",
            "cards": [
              {
                "title": "LO",
                "subtitle": "",
                "items": [
                  "Pendapatan − beban → hasil operasi.",
                  "Tambah hasil nonoperasional dan pos luar biasa → hasil LO final."
                ],
                "takeaway": ""
              },
              {
                "title": "LPE",
                "subtitle": "",
                "items": [
                  "Ekuitas awal + hasil LO final ± koreksi → ekuitas akhir.",
                  "Dataset: 268.620.000 + 23.120.000 = 291.740.000."
                ],
                "takeaway": ""
              },
              {
                "title": "Neraca",
                "subtitle": "",
                "items": [
                  "Ekuitas 291.740.000 dicocokkan dengan ekuitas akhir LPE."
                ],
                "takeaway": ""
              }
            ],
            "footer": "Hasil operasi ditambah hasil nonoperasional dan pos luar biasa menjadi hasil LO final; hasil final masuk LPE; ekuitas akhir LPE masuk Neraca"
          },
          "caption": "Gunakan hasil LO final saat menyusun LPE. [PSAP 12 par. 13, 45–52; PSAP 01 par. 101–103]",
          "altText": "Hasil LO final mengubah ekuitas awal pada LPE. Ekuitas akhir tersebut menjadi ekuitas Neraca."
        },
        {
          "kind": "p",
          "text": "LO juga dapat memuat hasil nonoperasional dan pos luar biasa. Surplus operasi baru menjadi hasil LO final setelah kedua kelompok itu diperhitungkan. Untuk pos luar biasa, periksa sifat peristiwa, kemungkinan berulang, dan kendali entitas; sebutan bencana saja tidak cukup. Sifat serta jumlahnya juga dijelaskan pada CaLK. [PSAP 12 par. 45–52]"
        },
        {
          "kind": "p",
          "text": "LPE memakai ekuitas awal, hasil LO final, serta koreksi yang langsung mengubah ekuitas. Koreksi itu bisa berasal dari dampak kumulatif perubahan kebijakan atau kesalahan mendasar. Jangan memindahkan seluruh selisih yang tidak kamu pahami ke ekuitas; tentukan perlakuannya sesuai sumber dan periode. [PSAP 01 par. 101–103]"
        },
        {
          "kind": "self-check",
          "question": "Pada dataset, Rp96.350.000 untuk peralatan masuk belanja modal. Apakah seluruhnya juga menjadi beban-LO?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Biaya menjadi aset tetap; beban tahun berjalan melalui penyusutan sesuai masa manfaat dan kebijakan soal."
            }
          ],
          "signal": "Bisa membedakan perolehan aset dari konsumsi manfaatnya."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Jelaskan pemicu hak atau beban, lalu tunjukkan dampaknya pada LO dan Neraca.\nGunakan hasil LO final untuk LPE. Dasar: PSAP 12 par. 19, 32, 51–52; PSAP 01 par. 101."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "4. Neraca: posisi setelah penyesuaian · 4 menit",
      "blocks": [
        {
          "kind": "p",
          "text": "Kas yang masih ada tidak mewakili seluruh kekayaan pemda. Ada tagihan, barang, dan peralatan yang masih memberi manfaat. Ada juga kewajiban yang harus dibayar. Neraca mempertemukan ketiganya pada satu tanggal, setelah pencatatan dan penyesuaian selesai. [PSAP 01 par. 44–49]"
        },
        {
          "kind": "p",
          "text": "**Aset = kewajiban + ekuitas.** Ekuitas adalah selisih aset dan kewajiban. Dalam set laporan, ekuitas akhir harus mengikuti LPE. Kamu dapat menghitung selisih sebagai pemeriksaan, lalu mencari penyebab bila nilainya berbeda dari LPE. [PSAP 01 par. 84–85, 101–102]"
        },
        {
          "kind": "figure",
          "title": "Posisi keuangan pada satu tanggal",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 456\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Posisi keuangan pada satu tanggal</title><desc>Aset dipisahkan menjadi lancar dan nonlancar. Kewajiban dipisahkan menurut jangka waktu. Total aset sama dengan kewajiban ditambah ekuitas.</desc><defs><marker id=\"V-TM07-04-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"456\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Posisi keuangan pada satu tanggal</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-04-arrow)\"/><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-04-arrow)\"/><path d=\"M276.25 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-04-arrow)\"/><path d=\"M683.75 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-04-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Aset lancar + aset nonlancar</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Kewajiban pendek + panjang + ekuitas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Total aset</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Total kewajiban dan ekuitas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Aset = kewajiban + ekuitas</tspan></text></svg>",
          "overview": {
            "heading": "Posisi keuangan pada satu tanggal",
            "cards": [
              {
                "title": "Aset",
                "subtitle": "",
                "items": [
                  "Lancar 97.500.000 + tetap neto 221.440.000 = total 318.940.000."
                ],
                "takeaway": ""
              },
              {
                "title": "Kewajiban dan ekuitas",
                "subtitle": "",
                "items": [
                  "Kewajiban 27.200.000 + ekuitas 291.740.000 = total 318.940.000."
                ],
                "takeaway": ""
              }
            ],
            "footer": "Dua kelompok aset menuju total aset; dua kelompok kewajiban ditambah ekuitas menuju total kewajiban dan ekuitas; kedua total harus sama"
          },
          "caption": "Neraca tetap seimbang setelah seluruh penyesuaian. [PSAP 01 par. 44–49, 54–58, 75–85]",
          "altText": "Aset dipisahkan menjadi lancar dan nonlancar. Kewajiban dipisahkan menurut jangka waktu. Total aset sama dengan kewajiban ditambah ekuitas."
        },
        {
          "kind": "table",
          "headers": [
            "Kelompok",
            "Batas klasifikasi",
            "Contoh dataset"
          ],
          "rows": [
            [
              "Aset lancar",
              "Akan direalisasi/dipakai dalam 12 bulan atau berupa kas/setara kas",
              "Kas, piutang retribusi, persediaan"
            ],
            [
              "Aset nonlancar",
              "Tidak memenuhi klasifikasi lancar",
              "Peralatan dan mesin setelah akumulasi penyusutan"
            ],
            [
              "Kewajiban jangka pendek",
              "Akan dibayar dalam 12 bulan setelah tanggal pelaporan",
              "Utang jasa, utang PFK, bagian lancar utang"
            ],
            [
              "Kewajiban jangka panjang",
              "Kewajiban lain di luar klasifikasi jangka pendek",
              "Nol pada saldo akhir dataset"
            ],
            [
              "Ekuitas",
              "Aset dikurangi kewajiban",
              "Ekuitas akhir dari LPE"
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
          "text": "[PSAP 01 par. 54–58, 75–85]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi Kabupaten Contoh.** Kas Rp73.000.000, piutang Rp12.850.000, dan persediaan Rp11.650.000 menjadi aset lancar Rp97.500.000. Peralatan bruto Rp336.950.000 dikurangi akumulasi penyusutan Rp115.510.000 menjadi aset tetap neto Rp221.440.000. Total aset Rp318.940.000 sama dengan kewajiban Rp27.200.000 ditambah ekuitas Rp291.740.000. [PSAP 01 par. 44–49, 84–85; PSAP 07 par. 52–54]"
        },
        {
          "kind": "p",
          "text": "Peralatan dibeli sebesar biaya perolehan yang membawanya siap digunakan. Setelah digunakan, nilai tercatat dikurangi akumulasi penyusutan. Umur 10 dan 5 tahun pada soal adalah asumsi kebijakan latihan, bukan umur seragam wajib untuk semua pemda. Persediaan akhir mengikuti opname dan dasar pengukuran yang dipilih. [PSAP 07 par. 31, 52–58; PSAP 05 par. 14–17]"
        },
        {
          "kind": "p",
          "text": "Aset nonlancar mencakup investasi jangka panjang, aset tetap, dana cadangan, dan aset lainnya. Contoh peralatan pada dataset adalah bagian dari aset tetap. [PSAP 01 par. 57–66]"
        },
        {
          "kind": "p",
          "text": "Saldo utang awal perlu ikut ditelusuri. Bagian lancar pinjaman Rp13.650.000 telah dilunasi, jadi saldo akhirnya nol. Utang jasa Rp6.850.000 muncul karena layanan telah diterima. Utang PFK Rp20.350.000 tetap ada karena kasnya dipegang untuk pihak ketiga pada cakupan soal. [PSAP 01 par. 75–83; PSAP 12 par. 32–33]"
        },
        {
          "kind": "self-check",
          "question": "Total aset Rp318.940.000 dan kewajiban Rp27.200.000. Berapa ekuitas, lalu ke mana kamu mencocokkannya?",
          "answer": [
            {
              "kind": "p",
              "text": "Rp318.940.000 − Rp27.200.000 = Rp291.740.000; cocokkan dengan ekuitas akhir LPE."
            }
          ],
          "signal": "Persamaan Neraca dipakai bersama pemeriksaan LPE, tanpa menutup selisih secara asal."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Klasifikasikan aset dan kewajiban, lalu hitung kedua sisi Neraca.\nCocokkan ekuitas dengan LPE dan sebut tanggal laporan. Dasar: PSAP 01 par. 44–49, 84–85, 101."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "5. LAK: ikuti pergerakan uangnya · 4 menit",
      "blocks": [
        {
          "kind": "p",
          "text": "Surplus-LO positif tidak menjamin kas bertambah. Pemda bisa membeli peralatan atau membayar pokok pinjaman dalam jumlah besar. LO dan LAK mengukur hal berbeda, sehingga kamu perlu menelusuri arus kas berdasarkan kegiatan yang menyebabkannya. [PSAP 03 par. 15–17; PSAP 12 par. 32–35]"
        },
        {
          "kind": "table",
          "headers": [
            "Aktivitas LAK",
            "Batasnya",
            "Contoh dataset"
          ],
          "rows": [
            [
              "Operasi",
              "Penerimaan/pengeluaran kegiatan operasional",
              "Retribusi, pembayaran persediaan dan jasa"
            ],
            [
              "Investasi",
              "Perolehan/pelepasan aset tetap dan investasi di luar setara kas",
              "Pembelian peralatan"
            ],
            [
              "Pendanaan",
              "Arus terkait pinjaman/piutang jangka panjang",
              "Pelunasan pokok pinjaman"
            ],
            [
              "Transitoris",
              "Arus di luar ketiga aktivitas, termasuk PFK dan mutasi tertentu",
              "Tidak ada pergerakan PFK tahun 2025"
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
          "text": "[PSAP 03 par. 21–38]"
        },
        {
          "kind": "figure",
          "title": "Empat aktivitas kas",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 700\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Empat aktivitas kas</title><desc>Operasi, investasi, pendanaan, dan transitoris menghasilkan perubahan kas. Saldo akhir dicocokkan dengan komponen kas terkait di Neraca.</desc><defs><marker id=\"V-TM07-05-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"700\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Empat aktivitas kas</text><path d=\"M276.25 127 V172 H20 V299 H480 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-05-arrow)\"/><path d=\"M683.75 127 V172 H32 V299 H480 V314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-05-arrow)\"/><path d=\"M276.25 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-05-arrow)\"/><path d=\"M683.75 249 L480 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-05-arrow)\"/><path d=\"M480 371 L480 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-05-arrow)\"/><path d=\"M480 493 L276.25 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"378.125\" y=\"516\" text-anchor=\"middle\" font-size=\"12\">Rekonsiliasi</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Operasi: layanan</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Investasi: aset / investasi</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Pendanaan: pinjaman</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Transitoris: pihak lain</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Jumlah empat arus bersih = perubahan kas</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"780\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"480\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"480\" dy=\"0\">Kas awal + perubahan kas = kas akhir</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">Kas Neraca terkait</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"558\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Nonkas → CaLK</tspan></text></svg>",
          "overview": {
            "heading": "Empat aktivitas kas",
            "cards": [
              {
                "title": "Operasi",
                "subtitle": "",
                "items": [
                  "Retribusi, pembayaran persediaan dan jasa."
                ],
                "takeaway": ""
              },
              {
                "title": "Investasi",
                "subtitle": "",
                "items": [
                  "Peralatan dan investasi di luar setara kas."
                ],
                "takeaway": ""
              },
              {
                "title": "Pendanaan",
                "subtitle": "",
                "items": [
                  "Pinjaman/piutang jangka panjang."
                ],
                "takeaway": ""
              },
              {
                "title": "Transitoris",
                "subtitle": "",
                "items": [
                  "Kas untuk pihak lain; PFK."
                ],
                "takeaway": ""
              },
              {
                "title": "Perubahan → saldo → rekonsiliasi",
                "subtitle": "",
                "items": [
                  "Jumlah empat arus → perubahan kas.",
                  "Tambah kas awal → kas akhir 73.000.000.",
                  "Cocokkan dengan kas terkait pada Neraca; nonkas dijelaskan dalam CaLK."
                ],
                "takeaway": ""
              }
            ],
            "footer": "Empat arus bersih dijumlahkan menjadi perubahan kas; tambah kas awal menjadi kas akhir; kas akhir direkonsiliasi dengan Neraca; transaksi nonkas menuju CaLK"
          },
          "caption": "Klasifikasi mengikuti kegiatan yang menyebabkan kas bergerak. [PSAP 03 par. 15–17, 21–38, 57–62]",
          "altText": "Operasi, investasi, pendanaan, dan transitoris menghasilkan perubahan kas. Saldo akhir dicocokkan dengan komponen kas terkait di Neraca."
        },
        {
          "kind": "p",
          "text": "**Ilustrasi Kabupaten Contoh.** Operasi Rp118.650.000 − Rp42.750.000 − Rp18.650.000 = Rp57.250.000. Investasi keluar Rp96.350.000 dan pendanaan keluar Rp13.650.000. Kas turun Rp52.750.000, sehingga saldo awal Rp125.750.000 menjadi Rp73.000.000; nilainya sama dengan kas terkait pada Neraca. [PSAP 03 par. 21–38, 59]"
        },
        {
          "kind": "table",
          "headers": [
            "Metode untuk aktivitas operasi",
            "Cara penyajian"
          ],
          "rows": [
            [
              "Langsung",
              "Kelompok utama penerimaan dan pengeluaran kas bruto"
            ],
            [
              "Tidak langsung",
              "Surplus/defisit disesuaikan dengan nonkas, penangguhan/pengakuan kas, serta unsur investasi dan pendanaan"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "SAP menyarankan metode langsung; kedua metode tersedia untuk aktivitas operasi. Latihan ini memakai metode langsung. [PSAP 03 par. 39–41]"
        },
        {
          "kind": "p",
          "text": "Penyusutan, piutang yang masih berupa hak, dan beban jasa yang masih terutang tidak menimbulkan arus kas pada saat pengakuannya. Transaksi nonkas tetap dijelaskan pada CaLK. Kas yang penggunaannya dibatasi juga perlu diungkapkan, sehingga pembaca memahami jumlah yang dapat dipakai. [PSAP 03 par. 57–62]"
        },
        {
          "kind": "p",
          "text": "Saat menggabungkan laporan SKPD dan PPKD, setoran dari bendahara ke RKUD tidak menjadi pendapatan eksternal kedua. Arus internal harus ditelusuri sesuai cakupan kas laporan. Dalam dataset, arus tersebut saling meniadakan dan akun RK dieliminasi pada kertas kerja. [Permendagri 64/2013 Lampiran II PDF 73, 90; PSAP 03 par. 59]"
        },
        {
          "kind": "self-check",
          "question": "Mengapa penggunaan SAL Rp54.200.000 tidak ditambahkan ke kas masuk LAK 2025 pada dataset?",
          "answer": [
            {
              "kind": "p",
              "text": "Dana berasal dari saldo tahun lalu, sehingga tidak ada penerimaan kas baru pada 2025. Penggunaannya tetap terlihat sebagai pembiayaan LRA dan pengurang SAL dalam LPSAL."
            }
          ],
          "signal": "Membedakan sumber pembiayaan anggaran dari arus kas baru."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Kelompokkan arus operasi, investasi, pendanaan, dan transitoris; jumlahkan perubahannya.\nTambah kas awal lalu cocokkan kas akhir dengan Neraca. Dasar: PSAP 03 par. 15, 21–38, 59."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "6. CaLK dan pemeriksaan hubungan laporan · 4 menit",
      "blocks": [
        {
          "kind": "p",
          "text": "Dua laporan dapat memiliki angka berbeda karena basis atau cakupannya berbeda. Perbedaan itu harus dapat dijelaskan. CaLK memberi kebijakan, rincian pos, dan informasi lain yang membantu kamu memahami asal angka serta membandingkan laporan. [PSAP 04 par. 8–14]"
        },
        {
          "kind": "p",
          "text": "CaLK mencakup informasi umum entitas; kebijakan fiskal/keuangan dan ekonomi makro; capaian target serta kendalanya; dasar penyusunan dan kebijakan akuntansi; rincian pos; pengungkapan yang disyaratkan standar; serta informasi lain untuk penyajian wajar. Susun sistematis, lalu hubungkan pos laporan dengan catatan yang relevan. [PSAP 04 par. 12–14; PSAP 01 par. 104–108]"
        },
        {
          "kind": "figure",
          "title": "Jalur pemeriksaan antarlaporan",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 479\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Jalur pemeriksaan antarlaporan</title><desc>SiLPA ditelusuri ke LPSAL, hasil LO ke LPE dan ekuitas Neraca, kas LAK ke kas Neraca. CaLK menjelaskan perbedaannya.</desc><defs><marker id=\"V-TM07-06-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"479\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Jalur pemeriksaan antarlaporan</text><path d=\"M208.33333333333331 127 L208.33333333333331 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-06-arrow)\"/><path d=\"M479.99999999999994 127 L479.99999999999994 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-06-arrow)\"/><path d=\"M479.99999999999994 249 L479.99999999999994 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-06-arrow)\"/><path d=\"M751.6666666666666 127 L751.6666666666666 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"751.6666666666666\" y=\"150\" text-anchor=\"middle\" font-size=\"12\">Rekonsiliasi</text><path d=\"M208.33333333333331 394 V439 H68 V177 H208.33333333333331 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"208.33333333333331\" y=\"417\" text-anchor=\"middle\" font-size=\"12\">Menjelaskan</text><path d=\"M326.66666666666663 354 H361.66666666666663\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><path d=\"M751.6666666666666 394 V439 H32 V177 H751.6666666666666 V192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" /><text class=\"svg-muted\" x=\"751.6666666666666\" y=\"417\" text-anchor=\"middle\" font-size=\"12\">Menjelaskan</text><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">LRA: SiLPA</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">LO: hasil final</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"70\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">LAK: kas akhir</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">LPSAL: SAL akhir</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">LPE: ekuitas akhir</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"192\" width=\"236.66666666666666\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">Neraca: kas terkait</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"208.33333333333331\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"208.33333333333331\" dy=\"0\">CaLK: alasan dan</tspan><tspan x=\"208.33333333333331\" dy=\"23\">kebijakan</tspan></text><rect class=\"svg-card\" x=\"361.66666666666663\" y=\"314\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"479.99999999999994\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"479.99999999999994\" dy=\"0\">Neraca: ekuitas</tspan></text><rect class=\"svg-card\" x=\"633.3333333333333\" y=\"314\" width=\"236.66666666666666\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"751.6666666666666\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"751.6666666666666\" dy=\"0\">CaLK: rekonsiliasi kas</tspan></text></svg>",
          "overview": {
            "heading": "Jalur pemeriksaan antarlaporan",
            "cards": [
              {
                "title": "LRA → LPSAL",
                "subtitle": "",
                "items": [
                  "SiLPA 1.450.000 dipindahkan; SAL akhir 52.650.000."
                ],
                "takeaway": ""
              },
              {
                "title": "LO → LPE → Neraca",
                "subtitle": "",
                "items": [
                  "Hasil LO 23.120.000; ekuitas akhir 291.740.000."
                ],
                "takeaway": ""
              },
              {
                "title": "LAK ↔ Neraca",
                "subtitle": "",
                "items": [
                  "Kas terkait 73.000.000; rekonsiliasi komponen kas."
                ],
                "takeaway": ""
              },
              {
                "title": "CaLK",
                "subtitle": "",
                "items": [
                  "Menjelaskan tiga jalur. SAL, ekuitas, dan kas tidak harus sama."
                ],
                "takeaway": ""
              }
            ],
            "footer": "LRA menuju LPSAL; LO menuju LPE menuju ekuitas Neraca; LAK terhubung dua arah ke kas Neraca; CaLK memberi penjelasan seluruh jalur; tanpa tanda sama dengan antara SAL, ekuitas, dan kas"
          },
          "caption": "Tiga jalur diperiksa terpisah, kemudian dijelaskan bersama. [PSAP 02 par. 62; PSAP 12 par. 52; PSAP 01 par. 41, 101–105; PSAP 03 par. 59]",
          "altText": "SiLPA ditelusuri ke LPSAL, hasil LO ke LPE dan ekuitas Neraca, kas LAK ke kas Neraca. CaLK menjelaskan perbedaannya."
        },
        {
          "kind": "table",
          "headers": [
            "Jalur",
            "Pemeriksaan",
            "Hasil pada dataset"
          ],
          "rows": [
            [
              "LRA ke LPSAL",
              "SiLPA yang dipindahkan sama",
              "Rp1.450.000"
            ],
            [
              "LO ke LPE",
              "Gunakan hasil LO final",
              "Rp23.120.000"
            ],
            [
              "LPE ke Neraca",
              "Ekuitas akhir sama",
              "Rp291.740.000"
            ],
            [
              "LAK ke Neraca",
              "Komponen kas terkait sama",
              "Rp73.000.000"
            ],
            [
              "SAL versus kas",
              "Jelaskan dana untuk pihak lain",
              "Rp52.650.000 versus Rp73.000.000"
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
          "text": "[PSAP 02 par. 62; PSAP 12 par. 52; PSAP 01 par. 101–105; PSAP 03 par. 59–62]"
        },
        {
          "kind": "p",
          "text": "**Ilustrasi Kabupaten Contoh.** Selisih kas dan SAL sebesar Rp20.350.000 berasal dari dana PFK pada asumsi soal. Piutang Rp12.850.000 dan utang jasa Rp6.850.000 menjelaskan sebagian beda LRA dan LO. CaLK juga menjelaskan persediaan serta penyusutan, agar pembaca bisa mengulang perhitungan tanpa menebak. [PSAP 04 par. 13–15; PSAP 03 par. 59–62]"
        },
        {
          "kind": "p",
          "text": "Ketika membaca laporan asli, periksa nama entitas, tahun, satuan, dan referensi CaLK terlebih dahulu. Pilih satu jalur, misalnya SiLPA dari LRA ke LPSAL. Setelah itu, baca catatan terkait untuk penggunaan SAL atau penyesuaian. Daftar halaman LKPP dan Berau tersedia di Pendalaman agar kamu dapat mengikuti sumbernya. [PSAP 01 par. 29, 41–43, 105–106]"
        },
        {
          "kind": "p",
          "text": "CaLK bukan daftar rumus saja. Alasan selisih anggaran, kebijakan pengukuran, pembatasan kas, serta informasi nonkeuangan dapat dibutuhkan. Jumlah bab menyesuaikan sistematika sumber dan entitas; contoh tujuh bab pemda tidak menjadi aturan jumlah bab universal. [PSAP 04 par. 14, 19–30; Permendagri 64/2013 Lampiran II PDF 87]"
        },
        {
          "kind": "self-check",
          "question": "SiLPA sudah cocok dengan LPSAL, tetapi kas LAK berbeda dari kas terkait pada Neraca. Apakah set laporan sudah lolos?",
          "answer": [
            {
              "kind": "p",
              "text": "Masih perlu rekonsiliasi komponen kas, cakupan entitas, dan transaksi yang dicatat. Satu jalur cocok tidak menjamin jalur lain benar."
            }
          ],
          "signal": "Memeriksa tiga jalur secara terpisah, lalu membaca CaLK untuk penjelasannya."
        },
        {
          "kind": "callout",
          "variant": "tip",
          "title": "Kalau ditanya di ujian",
          "text": "Sebutkan kebijakan dan rincian yang perlu dijelaskan pada CaLK.\nTunjukkan tiga jalur hubungan laporan dan satu sebab beda angka. Dasar: PSAP 04 par. 12–14; PSAP 03 par. 59."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Kerangka format, komparatif, dan batas entitas",
      "blocks": [
        {
          "kind": "figure",
          "title": "Kerangka tujuh format laporan",
          "overview": {
            "heading": "Kerangka tujuh format laporan",
            "cards": [
              {
                "title": "LRA",
                "subtitle": "",
                "items": [
                  "Format: Anggaran, Realisasi, Persentase, Komparatif",
                  "Urutan pos minimal/utama: Pendapatan, belanja, transfer, surplus/defisit, penerimaan/pengeluaran pembiayaan, pembiayaan neto, SiLPA/SiKPA",
                  "Format pemda pada sumber: PSAP 02 ilustrasi B/C; PP 71 PDF 89–92"
                ],
                "takeaway": ""
              },
              {
                "title": "LPSAL",
                "subtitle": "",
                "items": [
                  "Format: Awal, Penggunaan, SiLPA, Koreksi, Akhir",
                  "Urutan pos minimal/utama: Awal, penggunaan, SiLPA/SiKPA, koreksi, lain-lain, akhir",
                  "Format pemda pada sumber: PSAP 01 ilustrasi F; PP 71 PDF 71"
                ],
                "takeaway": ""
              },
              {
                "title": "LO",
                "subtitle": "",
                "items": [
                  "Format: Pendapatan, Beban, Nonoperasional, Luar biasa, Hasil final",
                  "Urutan pos minimal/utama: Pendapatan, beban, hasil operasi, nonoperasional, hasil pra-pos luar biasa, luar biasa, hasil final",
                  "Format pemda pada sumber: PSAP 12 ilustrasi B/C; PP 71 PDF 219–220"
                ],
                "takeaway": ""
              },
              {
                "title": "LPE",
                "subtitle": "",
                "items": [
                  "Format: Awal, Hasil LO, Koreksi, Akhir",
                  "Urutan pos minimal/utama: Ekuitas awal, hasil LO, koreksi langsung, ekuitas akhir",
                  "Format pemda pada sumber: PSAP 01 ilustrasi D; PP 71 PDF 69"
                ],
                "takeaway": ""
              },
              {
                "title": "Neraca",
                "subtitle": "",
                "items": [
                  "Format: Aset, Kewajiban, Ekuitas",
                  "Urutan pos minimal/utama: Aset lancar/nonlancar, kewajiban pendek/panjang, ekuitas",
                  "Format pemda pada sumber: PSAP 01 ilustrasi B; PP 71 PDF 66–67"
                ],
                "takeaway": ""
              },
              {
                "title": "LAK",
                "subtitle": "",
                "items": [
                  "Format: Operasi, Investasi, Pendanaan, Transitoris, Kas akhir",
                  "Urutan pos minimal/utama: Operasi, investasi, pendanaan, transitoris, perubahan kas, awal, akhir",
                  "Format pemda pada sumber: PSAP 03 ilustrasi; PP 71 PDF 107–112"
                ],
                "takeaway": ""
              },
              {
                "title": "CaLK",
                "subtitle": "",
                "items": [
                  "Format: Entitas, Kebijakan, Rincian, Informasi lain",
                  "Urutan pos minimal/utama: Entitas, kebijakan fiskal, kinerja, kebijakan akuntansi, rincian, informasi lain",
                  "Format pemda pada sumber: PSAP 04 par. 12–14; Permendagri 64 Lampiran II PDF 87"
                ],
                "takeaway": ""
              }
            ],
            "footer": "Tujuh panel paralel; setiap panel memakai header entitas, nama laporan, periode/tanggal, satuan; enam panel angka memakai XXX dan kolom komparatif, CaLK memakai peta isi"
          },
          "caption": "Bentuk tabel membantu mengenali isi laporan saat membaca angka. [PSAP 02 ilustrasi A–C, PP 71 PDF 87–92; PSAP 01 ilustrasi A–F, PDF 64–71; PSAP 12 ilustrasi A–C, PDF 218–220; PSAP 03 ilustrasi A–C, PDF 107–112; PSAP 04 par. 12–14]",
          "altText": "Tujuh panel format pemda konsolidasi, dengan identitas dan periode yang jelas. CaLK memuat penjelasan, enam laporan lain menampilkan angka dan komparatif."
        },
        {
          "kind": "table",
          "headers": [
            "Laporan",
            "Urutan pos minimal/utama",
            "Format pemda pada sumber"
          ],
          "rows": [
            [
              "LRA",
              "Pendapatan, belanja, transfer, surplus/defisit, penerimaan/pengeluaran pembiayaan, pembiayaan neto, SiLPA/SiKPA",
              "PSAP 02 ilustrasi B/C; PP 71 PDF 89–92"
            ],
            [
              "LPSAL",
              "Awal, penggunaan, SiLPA/SiKPA, koreksi, lain-lain, akhir",
              "PSAP 01 ilustrasi F; PP 71 PDF 71"
            ],
            [
              "LO",
              "Pendapatan, beban, hasil operasi, nonoperasional, hasil pra-pos luar biasa, luar biasa, hasil final",
              "PSAP 12 ilustrasi B/C; PP 71 PDF 219–220"
            ],
            [
              "LPE",
              "Ekuitas awal, hasil LO, koreksi langsung, ekuitas akhir",
              "PSAP 01 ilustrasi D; PP 71 PDF 69"
            ],
            [
              "Neraca",
              "Aset lancar/nonlancar, kewajiban pendek/panjang, ekuitas",
              "PSAP 01 ilustrasi B; PP 71 PDF 66–67"
            ],
            [
              "LAK",
              "Operasi, investasi, pendanaan, transitoris, perubahan kas, awal, akhir",
              "PSAP 03 ilustrasi; PP 71 PDF 107–112"
            ],
            [
              "CaLK",
              "Entitas, kebijakan fiskal, kinerja, kebijakan akuntansi, rincian, informasi lain",
              "PSAP 04 par. 12–14; Permendagri 64 Lampiran II PDF 87"
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
          "text": "Semua format mempertahankan identitas entitas, nama laporan, periode/tanggal, dan satuan. Kolom komparatif membantu melihat perubahan. Ilustrasi format standar memberikan contoh penerapan; rincian pos dapat menyesuaikan kebutuhan penyajian yang wajar. Pada latihan ini, arus 2024 ditandai n/a karena data tidak diberikan; angka Neraca 2024 tersedia dari saldo awal. [PSAP 01 par. 25, 29–33, 41, 49, 100, 103; PSAP 12 par. 13–15]"
        },
        {
          "kind": "table",
          "headers": [
            "Cakupan",
            "Laporan utama",
            "Cara membaca"
          ],
          "rows": [
            [
              "Pemda konsolidasi",
              "Tujuh laporan termasuk LAK melalui BUD dan LPSAL",
              "SKPD dan PPKD digabungkan; akun RK internal dieliminasi"
            ],
            [
              "SKPD sebagai entitas akuntansi",
              "LRA, LO, Neraca, LPE, CaLK dalam format SAPD",
              "Menjadi masukan konsolidasi; LAK/LPSAL mempertimbangkan fungsi dan cakupan entitas"
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
          "text": "[PSAP 01 par. 15–16; Permendagri 64/2013 Lampiran II PDF 73, 105–109]"
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Membaca contoh audited tanpa mencampur angka",
      "blocks": [
        {
          "kind": "figure",
          "title": "Membaca LPSAL asli tahun 2025",
          "svg": "<svg class=\"course-diagram-svg akk203-diagram\" viewBox=\"0 0 960 723\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;height:auto;font-family:Inter,sans-serif\"><title>Membaca LPSAL asli tahun 2025</title><desc>LKPP 2025 memiliki SiLPA berbeda dari SAL akhir. Berau 2025 memiliki nilai yang sama karena saldo awal, penggunaan, dan koreksi saling mengimbangi.</desc><defs><marker id=\"V-TM07-08-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 Z\" fill=\"currentColor\"/></marker></defs><rect class=\"svg-bg\" width=\"960\" height=\"723\" rx=\"16\"/><text class=\"svg-title\" x=\"480\" y=\"35\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\">Membaca LPSAL asli tahun 2025</text><path d=\"M276.25 127 L276.25 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M276.25 249 L276.25 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M276.25 371 L276.25 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M276.25 493 L276.25 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M683.75 127 L683.75 192\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M683.75 249 L683.75 314\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M683.75 371 L683.75 436\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><path d=\"M683.75 493 L683.75 558\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#V-TM07-08-arrow)\"/><rect class=\"svg-card\" x=\"90\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">LKPP 2025: audited</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"70\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"99\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">Berau 2025: audited</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">SAL awal − penggunaan + SiLPA</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"192\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"221\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">SAL awal − penggunaan + SiLPA</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">+ penyesuaian neto 1.473.228.957.326</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"314\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"343\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">+ koreksi 3.193.499,80</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">SAL akhir 438.265.568.897.532</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"436\" width=\"372.5\" height=\"57\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"465\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">SAL akhir 272.644.534.292,08</tspan></text><rect class=\"svg-card\" x=\"90\" y=\"558\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"276.25\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"276.25\" dy=\"0\">CaLK C.1–C.6; berbeda dari SiLPA</tspan></text><rect class=\"svg-card\" x=\"497.5\" y=\"558\" width=\"372.5\" height=\"80\" rx=\"10\"/><text class=\"svg-text\" x=\"683.75\" y=\"587\" text-anchor=\"middle\" font-size=\"17\"><tspan x=\"683.75\" dy=\"0\">CaLK 5.2.1–5.2.5; kebetulan sama dengan</tspan><tspan x=\"683.75\" dy=\"23\">SiLPA</tspan></text></svg>",
          "overview": {
            "heading": "Membaca LPSAL asli tahun 2025",
            "cards": [
              {
                "title": "LKPP 2025 · PDF 47 / cetak 4",
                "subtitle": "",
                "items": [
                  "SAL awal 457.543.275.049.219 − penggunaan 93.146.980.793.000 + SiLPA 72.396.045.683.987.",
                  "Pra-penyesuaian 436.792.339.940.206 + penyesuaian neto 1.473.228.957.326 = SAL akhir 438.265.568.897.532.",
                  "CaLK C.1–C.6; SAL akhir berbeda dari SiLPA."
                ],
                "takeaway": ""
              },
              {
                "title": "Berau 2025 · PDF 19",
                "subtitle": "",
                "items": [
                  "SAL awal 673.431.043.094,28 − penggunaan 673.434.236.594,08 = −3.193.499,80.",
                  "+ SiLPA 272.644.534.292,08 + koreksi 3.193.499,80 = SAL akhir 272.644.534.292,08.",
                  "CaLK 5.2.1–5.2.5; sisa awal dan koreksi saling mengimbangi."
                ],
                "takeaway": ""
              }
            ],
            "footer": "Dua cuplikan asli berdampingan dengan anotasi pada baris SiLPA, SAL akhir, dan rujukan CaLK; LKPP berbeda nilainya, Berau kebetulan sama setelah penyesuaian"
          },
          "caption": "Kesamaan angka satu laporan harus dijelaskan lewat perhitungan. [LKPP 2025 audited BPK PDF 47/cetak 4; LKPD Berau 2025 audited PDF 19]",
          "altText": "LKPP 2025 memiliki SiLPA berbeda dari SAL akhir. Berau 2025 memiliki nilai yang sama karena saldo awal, penggunaan, dan koreksi saling mengimbangi.",
          "sourceImages": [
            {
              "title": "LKPP 2025 · PDF 47 / cetak 4",
              "url": "/assets/akk203/lkpp2025-lpsal-pdf47.png",
              "altText": "LPSAL LKPP 2025 audited, halaman asli; SiLPA, SAL akhir dan CaLK C.1–C.6 dijelaskan dalam teks di atas.",
              "sourceUrl": "https://www.bpk.go.id/assets/files/lkpp/2025/lkpp_2025_1784028222.pdf#page=47"
            },
            {
              "title": "Berau 2025 · PDF 19",
              "url": "/assets/akk203/berau2025-lpsal-pdf19.png",
              "altText": "LPSAL Kabupaten Berau 2025 audited, halaman asli; SiLPA, SAL akhir dan CaLK 5.2.1–5.2.5 dijelaskan dalam teks di atas.",
              "sourceUrl": "https://beraukab.go.id/storage/img/CALK%2022%20mei%202026%20final%20%281%29_compressed.pdf#page=19"
            }
          ]
        },
        {
          "kind": "table",
          "headers": [
            "Laporan",
            "LKPP 2025, PDF/cetak",
            "Berau 2025, halaman PDF"
          ],
          "rows": [
            [
              "LRA",
              "43–45 / 1–3",
              "16–17"
            ],
            [
              "LPSAL",
              "47 / 4",
              "19"
            ],
            [
              "Neraca",
              "49–51 / 5–7",
              "21–22"
            ],
            [
              "LO",
              "53–54 / 8–9",
              "24–25"
            ],
            [
              "LAK",
              "56–58 / 10–12",
              "27–28"
            ],
            [
              "LPE",
              "60 / 13",
              "30"
            ],
            [
              "CaLK",
              "Mulai 62 / 14",
              "Mulai 50 / 1"
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
          "text": "[LKPP 2025 audited, BPK](https://www.bpk.go.id/assets/files/lkpp/2025/lkpp_2025_1784028222.pdf) dan [LKPD Berau 2025 audited, situs pemda](https://beraukab.go.id/storage/img/CALK%2022%20mei%202026%20final%20%281%29_compressed.pdf). Nomor PDF dihitung mulai satu. LKPP 2024 Kemenkeu dapat menjadi pembanding, dengan tahun dan asal terpisah."
        },
        {
          "kind": "p",
          "text": "Pada LKPP 2025, SAL awal Rp457.543.275.049.219 dikurangi penggunaan Rp93.146.980.793.000 ditambah SiLPA Rp72.396.045.683.987 menghasilkan Rp436.792.339.940.206. Penyesuaian Rp2.126.915.000.875 − Rp653.686.043.549 = Rp1.473.228.957.326. SAL akhir Rp438.265.568.897.532 berbeda dari SiLPA. [LKPP 2025 PDF 47/cetak 4, CaLK C.1–C.6]"
        },
        {
          "kind": "p",
          "text": "Pada Berau 2025, SAL awal Rp673.431.043.094,28 dikurangi penggunaan Rp673.434.236.594,08 menghasilkan (Rp3.193.499,80). Tambahkan SiLPA Rp272.644.534.292,08 dan koreksi Rp3.193.499,80, sehingga SAL akhir Rp272.644.534.292,08. Kesamaan SAL akhir dan SiLPA terjadi karena sisa awal dan koreksi saling mengimbangi pada laporan itu. [Berau 2025 PDF 19, CaLK 5.2.1–5.2.5]"
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pengecualian, transaksi nonkas, dan tahun standar",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Hal yang perlu diperhatikan",
            "Ketentuan",
            "Dasar"
          ],
          "rows": [
            [
              "Kas dibatasi",
              "Jelaskan saldo signifikan yang tidak dapat digunakan serta alasannya",
              "PSAP 03 par. 60–62"
            ],
            [
              "Transaksi nonkas",
              "Tidak masuk LAK, diungkapkan pada CaLK",
              "PSAP 03 par. 57–58"
            ],
            [
              "Penerimaan/pengeluaran bruto",
              "Pisahkan kelompok utama; pengecualian bersih mengikuti kondisi standar",
              "PSAP 03 par. 39–42"
            ],
            [
              "Pendapatan-LRA bruto",
              "Catat bruto; pengecualian biaya variabel yang memenuhi kondisi dijelaskan",
              "PSAP 02 par. 24–26"
            ],
            [
              "Pendapatan-LO bruto",
              "Catat bruto; pengecualian biaya variabel mengikuti kondisi",
              "PSAP 12 par. 26–28"
            ],
            [
              "Koreksi pendapatan tahun lalu",
              "Perlakuan berbeda menurut sifat koreksi dan basis laporan",
              "PSAP 02 par. 27–29; PSAP 12 par. 29–31"
            ],
            [
              "Pos luar biasa",
              "Uji karakteristik dan ungkap sifat/jumlah, tanpa menganggap semua bencana otomatis memenuhi",
              "PSAP 12 par. 48–50"
            ],
            [
              "Penerapan PSAP 18 lebih awal",
              "Diizinkan untuk periode lebih awal dari TA 2026 dengan pengungkapan; tidak diasumsikan pada dataset",
              "PSAP 18 par. 115"
            ],
            [
              "PSAP 19 dan 20",
              "TA 2026 untuk pengaturan bersama; TA 2027 untuk agrikultur",
              "PSAP 19 par. 38; PSAP 20 par. 56"
            ],
            [
              "Kewajiban jatuh tempo dalam 12 bulan dengan refinancing",
              "Tetap jangka panjang bila jangka asal lebih dari 12 bulan, ada maksud refinancing jangka panjang, serta penyelesaian perjanjian/penjadwalan kembali mendahului persetujuan laporan",
              "PSAP 01 par. 78–79"
            ],
            [
              "Pelanggaran covenant",
              "Jangka panjang hanya bila pemberi pinjaman setuju tidak meminta pelunasan dan pelanggaran berikutnya tidak mungkin dalam 12 bulan",
              "PSAP 01 par. 80"
            ],
            [
              "Kas yang dibatasi",
              "Kas yang dibatasi penggunaannya berada pada kelompok aset lainnya; identifikasi sifat dan klasifikasi pembatasannya",
              "PSAP 01 par. 66; PSAP 03 par. 60–62"
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
          "text": "Kas PFK pada dataset merupakan dana titipan pihak ketiga yang masih dipegang di RKUD. Soal tidak memodelkannya sebagai kas dengan pembatasan jangka panjang; klasifikasi kas terkait tetap mengikuti data Neraca dan LAK latihan. Entitas riil memerlukan penelaahan sifat dana serta kebijakan penyajian yang berlaku."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Jurnal lengkap dataset, menurut entitas dan lajur",
      "blocks": [
        {
          "kind": "p",
          "text": "Seluruh tabel berikut memakai rupiah dan label **Ilustrasi Kabupaten Contoh, TA 2025**. Lajur anggaran, realisasi, dan finansial dibaca terpisah. Akun Estimasi Perubahan SAL pada lajur anggaran/realisasi tidak menjadi kas atau ekuitas finansial. Entri resiprokal PPKD merupakan penurunan kertas kerja dari hubungan RK; penutupan terakhir merupakan bentuk ringkas dua tahap penutupan pada latihan. [Permendagri 64/2013 Lampiran II PDF 73, 75, 78, 81, 88, 90–98]"
        },
        {
          "kind": "p",
          "text": "**OPEN-SKPD: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-01",
              "account": "Peralatan dan Mesin",
              "debit": "240.600.000",
              "credit": "0"
            },
            {
              "date": "2025-01-01",
              "account": "Persediaan",
              "debit": "8.450.000",
              "credit": "0"
            },
            {
              "date": "2025-01-01",
              "account": "Akumulasi Penyusutan",
              "debit": "0",
              "credit": "72.180.000",
              "isCredit": true
            },
            {
              "date": "2025-01-01",
              "account": "Ekuitas",
              "debit": "0",
              "credit": "176.870.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "249.050.000",
              "credit": "249.050.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**OPEN-PPKD: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-01",
              "account": "Kas di Kas Daerah",
              "debit": "125.750.000",
              "credit": "0"
            },
            {
              "date": "2025-01-01",
              "account": "Bagian Lancar Utang Jangka Panjang",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "2025-01-01",
              "account": "Utang PFK",
              "debit": "0",
              "credit": "20.350.000",
              "isCredit": true
            },
            {
              "date": "2025-01-01",
              "account": "Ekuitas",
              "debit": "0",
              "credit": "91.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "125.750.000",
              "credit": "125.750.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**G-SKPD: SKPD, lajur anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-02",
              "account": "Estimasi Pendapatan",
              "debit": "130.850.000",
              "credit": "0"
            },
            {
              "date": "2025-01-02",
              "account": "Estimasi Perubahan SAL",
              "debit": "40.550.000",
              "credit": "0"
            },
            {
              "date": "2025-01-02",
              "account": "Apropriasi Belanja Barang Jasa",
              "debit": "0",
              "credit": "70.650.000",
              "isCredit": true
            },
            {
              "date": "2025-01-02",
              "account": "Apropriasi Belanja Modal",
              "debit": "0",
              "credit": "100.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "171.400.000",
              "credit": "171.400.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**G-PPKD: PPKD, lajur anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-02",
              "account": "Estimasi Penerimaan Pembiayaan",
              "debit": "54.200.000",
              "credit": "0"
            },
            {
              "date": "2025-01-02",
              "account": "Apropriasi Pengeluaran Pembiayaan",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "2025-01-02",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "40.550.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "54.200.000",
              "credit": "54.200.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**OPEN-STOCK: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-02",
              "account": "Beban Persediaan",
              "debit": "8.450.000",
              "credit": "0"
            },
            {
              "date": "2025-01-02",
              "account": "Persediaan",
              "debit": "0",
              "credit": "8.450.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "8.450.000",
              "credit": "8.450.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ASSET-BAST: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-05",
              "account": "Peralatan dan Mesin",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-05",
              "account": "Utang Belanja Modal",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ASSET-PAY-SKPD: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-10",
              "account": "Utang Belanja Modal",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-10",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ASSET-PAY-PPKD: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-10",
              "account": "RK SKPD",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-10",
              "account": "Kas di Kas Daerah",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ASSET-LRA: SKPD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-10",
              "account": "Belanja Modal",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-10",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**LOAN-PAY: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-15",
              "account": "Bagian Lancar Utang Jangka Panjang",
              "debit": "13.650.000",
              "credit": "0"
            },
            {
              "date": "2025-01-15",
              "account": "Kas di Kas Daerah",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "13.650.000",
              "credit": "13.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**LOAN-LRA: PPKD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-15",
              "account": "Pengeluaran Pembiayaan",
              "debit": "13.650.000",
              "credit": "0"
            },
            {
              "date": "2025-01-15",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "13.650.000",
              "credit": "13.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**SAL-USE: PPKD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-02",
              "account": "Estimasi Perubahan SAL",
              "debit": "54.200.000",
              "credit": "0"
            },
            {
              "date": "2025-01-02",
              "account": "Penerimaan Pembiayaan Penggunaan SAL",
              "debit": "0",
              "credit": "54.200.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "54.200.000",
              "credit": "54.200.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-CASH: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-03-04",
              "account": "Kas di Bendahara Penerimaan",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "2025-03-04",
              "account": "Pendapatan Retribusi LO",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "118.650.000",
              "credit": "118.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-LRA: SKPD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-03-04",
              "account": "Estimasi Perubahan SAL",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "2025-03-04",
              "account": "Pendapatan Retribusi LRA",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "118.650.000",
              "credit": "118.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-DEPOSIT-SKPD: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-03-05",
              "account": "RK PPKD",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "2025-03-05",
              "account": "Kas di Bendahara Penerimaan",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "118.650.000",
              "credit": "118.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-DEPOSIT-PPKD: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-03-05",
              "account": "Kas di Kas Daerah",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "2025-03-05",
              "account": "RK SKPD",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "118.650.000",
              "credit": "118.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-BAST: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-04-07",
              "account": "Beban Persediaan",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "2025-04-07",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "42.750.000",
              "credit": "42.750.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-PAY-SKPD: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-04-14",
              "account": "Utang Belanja Barang Jasa",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "2025-04-14",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "42.750.000",
              "credit": "42.750.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-PAY-PPKD: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-04-14",
              "account": "RK SKPD",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "2025-04-14",
              "account": "Kas di Kas Daerah",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "42.750.000",
              "credit": "42.750.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-LRA: SKPD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-04-14",
              "account": "Belanja Barang Jasa",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "2025-04-14",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "42.750.000",
              "credit": "42.750.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**SERVICE-BAST: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-06-02",
              "account": "Beban Jasa",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "2025-06-02",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "18.650.000",
              "credit": "18.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**SERVICE-PAY-SKPD: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-06-09",
              "account": "Utang Belanja Barang Jasa",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "2025-06-09",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "18.650.000",
              "credit": "18.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**SERVICE-PAY-PPKD: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-06-09",
              "account": "RK SKPD",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "2025-06-09",
              "account": "Kas di Kas Daerah",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "18.650.000",
              "credit": "18.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**SERVICE-LRA: SKPD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-06-09",
              "account": "Belanja Barang Jasa",
              "debit": "18.650.000",
              "credit": "0"
            },
            {
              "date": "2025-06-09",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "18.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "18.650.000",
              "credit": "18.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**UNPAID-SERVICE: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-20",
              "account": "Beban Jasa",
              "debit": "6.850.000",
              "credit": "0"
            },
            {
              "date": "2025-12-20",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "6.850.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "6.850.000",
              "credit": "6.850.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-RECEIVABLE: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Piutang Retribusi",
              "debit": "12.850.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Pendapatan Retribusi LO",
              "debit": "0",
              "credit": "12.850.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "12.850.000",
              "credit": "12.850.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-END: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Persediaan",
              "debit": "11.650.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Beban Persediaan",
              "debit": "0",
              "credit": "11.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "11.650.000",
              "credit": "11.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**DEPRECIATION: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Beban Penyusutan",
              "debit": "43.330.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Akumulasi Penyusutan",
              "debit": "0",
              "credit": "43.330.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "43.330.000",
              "credit": "43.330.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ELIM: CONSOLIDATION, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "RK PPKD",
              "debit": "39.100.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "RK SKPD",
              "debit": "0",
              "credit": "39.100.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "39.100.000",
              "credit": "39.100.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**CLOSE-LO: CONSOLIDATION, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Pendapatan Retribusi LO",
              "debit": "131.500.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Beban Persediaan",
              "debit": "0",
              "credit": "39.550.000",
              "isCredit": true
            },
            {
              "date": "2025-12-31",
              "account": "Beban Jasa",
              "debit": "0",
              "credit": "25.500.000",
              "isCredit": true
            },
            {
              "date": "2025-12-31",
              "account": "Beban Penyusutan",
              "debit": "0",
              "credit": "43.330.000",
              "isCredit": true
            },
            {
              "date": "2025-12-31",
              "account": "Ekuitas",
              "debit": "0",
              "credit": "23.120.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "131.500.000",
              "credit": "131.500.000"
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "layer": "latihan",
      "title": "Persiapan ujian",
      "blocks": [
        {
          "kind": "p",
          "text": "Porsi latihan: 5 esai (25%), 5 jurnal/perlakuan (25%), dan 10 membaca/menyusun laporan (50%). Ini pembagian latihan, bukan prediksi format UTS. Semua soal angka di bawah memakai satu dataset Ilustrasi Kabupaten Contoh; dua tugas membaca asli memakai LKPP dan Berau sesuai sumbernya."
        },
        {
          "kind": "h3",
          "text": "Jangan tertukar"
        },
        {
          "kind": "table",
          "headers": [
            "Jebakan",
            "Perlakuan yang tepat"
          ],
          "rows": [
            [
              "Semua laporan memakai akrual",
              "Bedakan LRA basis anggaran, LAK arus kas, serta laporan finansial akrual"
            ],
            [
              "SiLPA sama dengan surplus LRA",
              "Tambahkan pembiayaan neto"
            ],
            [
              "SAL sama dengan SiLPA atau ekuitas",
              "Gunakan perubahan SAL; ekuitas berasal dari LPE"
            ],
            [
              "Surplus operasi langsung dipindahkan",
              "Perhitungkan nonoperasional dan luar biasa untuk hasil LO final"
            ],
            [
              "Belanja modal seluruhnya beban",
              "Aset diakui; penyusutan masuk beban sesuai kebijakan"
            ],
            [
              "Penggunaan SAL selalu kas masuk baru",
              "Pada dataset berasal dari kas tahun lalu"
            ],
            [
              "Kas LAK boleh berbeda tanpa alasan",
              "Rekonsiliasi dengan komponen kas terkait pada Neraca"
            ],
            [
              "Bencana pasti pos luar biasa",
              "Uji karakteristik peristiwa dan pengungkapannya"
            ],
            [
              "Utang dibayar pasti beban baru",
              "Pokok pinjaman mengurangi kewajiban; pembayaran jasa melunasi utang"
            ],
            [
              "Semua SKPD wajib tujuh laporan",
              "Perhatikan pengecualian fungsi perbendaharaan dan konsolidasi"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "[PSAP 01 par. 14–16, 41, 101; PSAP 02 par. 58–62; PSAP 03 par. 57–62; PSAP 12 par. 32, 48–52]"
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "E1. Memilih laporan",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Pemilik anggaran ingin membandingkan anggaran dengan realisasi. Pengguna lain ingin mengetahui posisi utang dan dasar pengukuran peralatan. Sebutkan laporan yang dipakai dan jelaskan alasannya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pertama, gunakan LRA untuk anggaran versus realisasi. Kedua, gunakan Neraca untuk utang pada tanggal pelaporan. Ketiga, baca CaLK untuk dasar pengukuran peralatan dan rincian nilai tercatatnya. Ketiga laporan memberi sudut informasi yang saling melengkapi. [PSAP 01 par. 38, 44, 108]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E2. SiLPA, SAL, dan ekuitas",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Jelaskan ketiga istilah itu serta hubungan laporan yang menghasilkan masing-masingnya. Apakah ketiganya harus sama?"
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** SiLPA adalah hasil realisasi anggaran satu periode termasuk pembiayaan neto, dari LRA. SAL adalah saldo kumulatif yang berubah melalui penggunaan, SiLPA/SiKPA, dan penyesuaian, dijelaskan LPSAL. Ekuitas adalah selisih aset dan kewajiban, dijelaskan perubahannya melalui LPE dan disajikan di Neraca. Nilainya tidak harus sama karena asal dan cakupannya berbeda. [PSAP 02 par. 7, 58–62; PSAP 01 par. 41, 84–85, 101]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E3. Jasa dan belanja",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Mengapa jasa yang diterima pada akhir tahun bisa muncul pada LO dan Neraca tanpa belanja-LRA tahun tersebut? Jelaskan pemicu pengakuannya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Penerimaan jasa menimbulkan kewajiban sehingga beban masuk LO dan utang masuk Neraca. Belanja LS menunggu pengeluaran RKUD. Pada pembayaran berikutnya, utang berkurang; jangan mengakui kembali beban yang sudah dicatat. [PSAP 12 par. 32–33; PSAP 02 par. 31; Permendagri 64 Lampiran II PDF 92–93]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E4. Siapa menyusun tujuh laporan?",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Uji pernyataan: “Setiap SKPD wajib menyajikan LAK dan LPSAL sendiri.” Jelaskan aturan entitasnya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** LAK disajikan oleh entitas dengan fungsi perbendaharaan umum. LPSAL disajikan oleh BUN dan entitas pelaporan yang menyusun laporan konsolidasian. Identifikasi dahulu fungsi dan cakupan entitas; format SKPD menjadi masukan bagi konsolidasi pemda. [PSAP 01 par. 15–16; Permendagri 64 Lampiran II PDF 105–109]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "E5. Pos luar biasa dan CaLK",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal.** Sebuah rangkuman menyatakan bahwa semua pengeluaran karena bencana masuk pos luar biasa. Susun jawaban koreksi beserta informasi yang perlu dijelaskan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Periksa apakah peristiwa berada di luar operasi biasa, tidak diharapkan sering/rutin, serta di luar kendali entitas. Uji juga karakteristik tidak dapat diramalkan pada awal tahun dan tidak berulang menurut ketentuan pos luar biasa. Nama bencana tidak menggantikan pengujian itu; sifat dan jumlah rupiahnya diungkap pada CaLK. [PSAP 12 par. 8, 48–50]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T1. Retribusi tunai dan piutang",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Kabupaten Contoh menerima retribusi Rp118.650.000 pada 4 Maret 2025 melalui bendahara penerimaan. Hak retribusi tahun 2025 lainnya menurut SKR Rp12.850.000 masih berupa piutang pada 31 Desember. Tidak ada uang muka, retur, atau penyisihan. Tulis jurnal finansial dan realisasi yang relevan, lalu hitung pendapatan pada LO dan LRA."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pertama, penerimaan hak tahun berjalan menambah kas dan pendapatan-LO; realisasi dicatat pada lajur tersendiri. Kedua, hak yang masih berupa piutang menambah piutang serta pendapatan-LO, tanpa realisasi kas tambahan. LO = Rp118.650.000 + Rp12.850.000 = Rp131.500.000; LRA = Rp118.650.000. Setoran internal tidak membuat pendapatan kedua. [Permendagri 64 Lampiran II PDF 90; PSAP 12 par. 19–22]"
        },
        {
          "kind": "p",
          "text": "**REV-CASH: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-03-04",
              "account": "Kas di Bendahara Penerimaan",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "2025-03-04",
              "account": "Pendapatan Retribusi LO",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "118.650.000",
              "credit": "118.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-LRA: SKPD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-03-04",
              "account": "Estimasi Perubahan SAL",
              "debit": "118.650.000",
              "credit": "0"
            },
            {
              "date": "2025-03-04",
              "account": "Pendapatan Retribusi LRA",
              "debit": "0",
              "credit": "118.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "118.650.000",
              "credit": "118.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**REV-RECEIVABLE: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Piutang Retribusi",
              "debit": "12.850.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Pendapatan Retribusi LO",
              "debit": "0",
              "credit": "12.850.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "12.850.000",
              "credit": "12.850.000"
            }
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T2. Jasa yang masih terutang",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Jasa Rp6.850.000 diterima Kabupaten Contoh dengan BAST pada 20 Desember 2025. Pembayaran tidak terjadi sampai 31 Desember. Tulis jurnal serta dampak pada LRA, LO, Neraca, dan LAK 2025."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Kewajiban timbul pada penerimaan jasa. Debit beban dan kredit utang Rp6.850.000. LO bertambah beban Rp6.850.000; Neraca bertambah utang sebesar itu. Tambahan belanja-LRA dan arus kas tahun 2025 masing-masing Rp0 karena tidak ada pembayaran. [PSAP 12 par. 32–33; Permendagri 64 Lampiran II PDF 92, 96; PSAP 03 par. 57]"
        },
        {
          "kind": "p",
          "text": "**UNPAID-SERVICE: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-20",
              "account": "Beban Jasa",
              "debit": "6.850.000",
              "credit": "0"
            },
            {
              "date": "2025-12-20",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "6.850.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "6.850.000",
              "credit": "6.850.000"
            }
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T3. Peralatan LS",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Kabupaten Contoh menerima peralatan Rp96.350.000 pada 5 Januari 2025 dan membayar LS pada 10 Januari. Peralatan siap digunakan sejak 5 Januari, residu nol, umur 5 tahun, garis lurus untuk 12 bulan sesuai kebijakan soal. Tulis jurnal SKPD saat BAST, pembayaran, dan realisasi; hitung penyusutan aset baru serta klasifikasi kasnya."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Pertama, BAST mengakui peralatan dan utang Rp96.350.000. Kedua, pembayaran melunasi utang dengan RK PPKD; belanja modal dicatat pada lajur realisasi. Ketiga, penyusutan baru = Rp96.350.000 ÷ 5 × 12/12 = Rp19.270.000; kas pembayaran termasuk investasi. Jurnal penyusutan total aset lama dan baru tersedia pada T5. [Permendagri 64 Lampiran II PDF 95, 98; PSAP 07 par. 52–58; PSAP 03 par. 27–30]"
        },
        {
          "kind": "p",
          "text": "**ASSET-BAST: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-05",
              "account": "Peralatan dan Mesin",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-05",
              "account": "Utang Belanja Modal",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ASSET-PAY-SKPD: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-10",
              "account": "Utang Belanja Modal",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-10",
              "account": "RK PPKD",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**ASSET-LRA: SKPD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-10",
              "account": "Belanja Modal",
              "debit": "96.350.000",
              "credit": "0"
            },
            {
              "date": "2025-01-10",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "96.350.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "96.350.000",
              "credit": "96.350.000"
            }
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T4. Pemakaian persediaan periodik",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Persediaan awal Kabupaten Contoh Rp8.450.000, pembelian LS Rp42.750.000, dan opname akhir Rp11.650.000. Semua dinilai berdasarkan biaya, tidak ada barang rusak, retur, atau transaksi lain. Metode beban/periodik memindahkan persediaan awal ke beban dan menyesuaikan saldo akhir. Hitung pemakaian serta tulis jurnal saldo awal, BAST pembelian, dan opname."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Persediaan tersedia = Rp8.450.000 + Rp42.750.000 = Rp51.200.000. Pemakaian = Rp51.200.000 − Rp11.650.000 = Rp39.550.000. Saldo persediaan akhir Rp11.650.000 masuk Neraca; belanja pembeliannya tetap Rp42.750.000 ketika dibayar, sehingga tidak disamakan dengan beban pemakaian. [PSAP 05 par. 14–17, 22–25; Permendagri 64 Lampiran II PDF 92–93, 98]"
        },
        {
          "kind": "p",
          "text": "**OPEN-STOCK: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-02",
              "account": "Beban Persediaan",
              "debit": "8.450.000",
              "credit": "0"
            },
            {
              "date": "2025-01-02",
              "account": "Persediaan",
              "debit": "0",
              "credit": "8.450.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "8.450.000",
              "credit": "8.450.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-BAST: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-04-07",
              "account": "Beban Persediaan",
              "debit": "42.750.000",
              "credit": "0"
            },
            {
              "date": "2025-04-07",
              "account": "Utang Belanja Barang Jasa",
              "debit": "0",
              "credit": "42.750.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "42.750.000",
              "credit": "42.750.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**STOCK-END: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Persediaan",
              "debit": "11.650.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Beban Persediaan",
              "debit": "0",
              "credit": "11.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "11.650.000",
              "credit": "11.650.000"
            }
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "T5. Penyusutan dan pembayaran pokok pinjaman",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Peralatan lama Kabupaten Contoh berbiaya Rp240.600.000 dengan akumulasi awal Rp72.180.000, umur 10 tahun, residu nol. Peralatan baru Rp96.350.000 berumur 5 tahun, residu nol. Keduanya disusutkan 12 bulan dengan garis lurus pada 2025 sesuai asumsi. Pemda juga melunasi bagian lancar pokok pinjaman Rp13.650.000 pada 15 Januari, tanpa bunga. Hitung penyusutan dan tulis jurnal kedua perlakuan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Penyusutan lama = Rp240.600.000 ÷ 10 = Rp24.060.000. Penyusutan baru = Rp96.350.000 ÷ 5 = Rp19.270.000. Total beban = Rp43.330.000; akumulasi akhir Rp72.180.000 + Rp43.330.000 = Rp115.510.000. Pelunasan pokok mengurangi kewajiban dan kas Rp13.650.000; pengeluaran pembiayaan pada LRA dan pendanaan pada LAK, tanpa beban baru pada LO. [PSAP 07 par. 52–58; PSAP 02 par. 55–56; PSAP 03 par. 31–34; Permendagri 64 Lampiran II PDF 53–54, 98]"
        },
        {
          "kind": "p",
          "text": "**LOAN-PAY: PPKD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-15",
              "account": "Bagian Lancar Utang Jangka Panjang",
              "debit": "13.650.000",
              "credit": "0"
            },
            {
              "date": "2025-01-15",
              "account": "Kas di Kas Daerah",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "13.650.000",
              "credit": "13.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**LOAN-LRA: PPKD, lajur realisasi anggaran.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-01-15",
              "account": "Pengeluaran Pembiayaan",
              "debit": "13.650.000",
              "credit": "0"
            },
            {
              "date": "2025-01-15",
              "account": "Estimasi Perubahan SAL",
              "debit": "0",
              "credit": "13.650.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "13.650.000",
              "credit": "13.650.000"
            }
          ]
        },
        {
          "kind": "p",
          "text": "**DEPRECIATION: SKPD, lajur finansial.**"
        },
        {
          "kind": "journal",
          "lines": [
            {
              "date": "2025-12-31",
              "account": "Beban Penyusutan",
              "debit": "43.330.000",
              "credit": "0"
            },
            {
              "date": "2025-12-31",
              "account": "Akumulasi Penyusutan",
              "debit": "0",
              "credit": "43.330.000",
              "isCredit": true
            },
            {
              "date": "Total",
              "account": "",
              "debit": "43.330.000",
              "credit": "43.330.000"
            }
          ]
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L1. Menyusun tujuh laporan dari satu dataset",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Susun tujuh laporan Kabupaten Contoh TA 2025 dari seluruh data berikut. Entitas mencakup satu SKPD dan PPKD/BUD yang dikonsolidasikan; semua nilai dalam rupiah. Data transaksi merupakan kelanjutan TM06, sehingga angkanya tetap sama."
        },
        {
          "kind": "p",
          "text": "**Saldo awal dan anggaran:**"
        },
        {
          "kind": "table",
          "headers": [
            "Saldo per 31 Desember 2024",
            "Rupiah"
          ],
          "rows": [
            [
              "Kas di Kas Daerah",
              "125.750.000"
            ],
            [
              "Persediaan",
              "8.450.000"
            ],
            [
              "Peralatan dan mesin, biaya perolehan",
              "240.600.000"
            ],
            [
              "Akumulasi penyusutan",
              "(72.180.000)"
            ],
            [
              "Total aset",
              "302.620.000"
            ],
            [
              "Bagian lancar utang jangka panjang",
              "13.650.000"
            ],
            [
              "Utang PFK",
              "20.350.000"
            ],
            [
              "Total kewajiban",
              "34.000.000"
            ],
            [
              "Ekuitas",
              "268.620.000"
            ],
            [
              "SAL, catatan anggaran",
              "105.400.000"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "table",
          "headers": [
            "Pos DPA/anggaran",
            "Rupiah"
          ],
          "rows": [
            [
              "Retribusi",
              "130.850.000"
            ],
            [
              "Belanja barang/jasa",
              "70.650.000"
            ],
            [
              "Belanja modal",
              "100.750.000"
            ],
            [
              "Penggunaan SAL, penerimaan pembiayaan",
              "54.200.000"
            ],
            [
              "Pelunasan pokok pinjaman, pengeluaran pembiayaan",
              "13.650.000"
            ]
          ],
          "align": [
            "left",
            "left"
          ]
        },
        {
          "kind": "p",
          "text": "**Transaksi dan penyesuaian:**"
        },
        {
          "kind": "table",
          "headers": [
            "Tanggal",
            "Transaksi atau penyesuaian",
            "Rupiah"
          ],
          "rows": [
            [
              "2 Januari",
              "DPA disahkan; penggunaan SAL tahun lalu ditetapkan",
              "54.200.000"
            ],
            [
              "5 Januari",
              "Peralatan diterima dan siap digunakan, BAST",
              "96.350.000"
            ],
            [
              "10 Januari",
              "Peralatan dibayar LS dari RKUD",
              "96.350.000"
            ],
            [
              "15 Januari",
              "Bagian lancar pokok pinjaman dilunasi dari RKUD",
              "13.650.000"
            ],
            [
              "4–5 Maret",
              "Retribusi hak tahun berjalan diterima bendahara, kemudian disetor seluruhnya ke RKUD",
              "118.650.000"
            ],
            [
              "7–14 April",
              "Persediaan diterima lalu dibayar LS",
              "42.750.000"
            ],
            [
              "2–9 Juni",
              "Jasa diterima lalu dibayar LS",
              "18.650.000"
            ],
            [
              "20 Desember",
              "Jasa diterima dengan BAST, masih terutang pada 31 Desember",
              "6.850.000"
            ],
            [
              "31 Desember",
              "Hak retribusi menurut SKR masih berupa piutang",
              "12.850.000"
            ],
            [
              "31 Desember",
              "Hasil opname persediaan akhir",
              "11.650.000"
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
          "text": "Peralatan lama Rp240.600.000 berumur 10 tahun dan peralatan baru Rp96.350.000 berumur 5 tahun, residu nol. Kebijakan garis lurus mencakup 12 bulan pada kedua aset, karena aset baru siap digunakan pada Januari. Metode persediaan beban/periodik. SAL awal Rp105.400.000 berasal dari kas Rp125.750.000 dikurangi PFK Rp20.350.000 menurut asumsi soal; kas PFK dan utangnya tidak berubah sepanjang tahun."
        },
        {
          "kind": "p",
          "text": "Tidak ada transaksi lain, bunga, pajak/potongan, uang muka, penyisihan, retur, koreksi ekuitas, nonoperasional, atau pos luar biasa. Arus komparatif 2024 tidak diberikan; tulis n/a, jangan mengisinya dengan nol. Saldo Neraca pembanding tersedia dari saldo awal. Untuk kebijakan tahun standar, gunakan asumsi TA 2025 yang dijelaskan pada Inti 1."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.**"
        },
        {
          "kind": "p",
          "text": "**Langkah 1: pisahkan pencatatan dan sesuaikan saldo.** DPA masuk lajur anggaran, penerimaan/pembayaran masuk lajur realisasi, hak/aset/kewajiban masuk lajur finansial. Gunakan jurnal lengkap pada Pendalaman: penerimaan retribusi, piutang, BAST, pembayaran LS, persediaan, penyusutan, dan pokok pinjaman. Setoran retribusi antarunit Rp118.650.000 tidak membuat pendapatan kedua. [Permendagri 64 Lampiran II PDF 88, 90–98]"
        },
        {
          "kind": "p",
          "text": "Pemakaian persediaan = Rp8.450.000 + Rp42.750.000 − Rp11.650.000 = Rp39.550.000. Beban jasa = Rp18.650.000 + Rp6.850.000 = Rp25.500.000. Penyusutan = Rp24.060.000 + Rp19.270.000 = Rp43.330.000. Peralatan bruto = Rp240.600.000 + Rp96.350.000 = Rp336.950.000; akumulasi akhir = Rp72.180.000 + Rp43.330.000 = Rp115.510.000. [PSAP 05 par. 22–25; PSAP 07 par. 52–58]"
        },
        {
          "kind": "p",
          "text": "**Langkah 2: siapkan konsolidasi.** RK SKPD pada PPKD sebesar Rp39.100.000 debit dan RK PPKD pada SKPD sebesar Rp39.100.000 kredit saling berhadapan. Angkanya berasal dari pembayaran LS Rp96.350.000 + Rp42.750.000 + Rp18.650.000 − setoran retribusi Rp118.650.000. Eliminasi pada kertas kerja dengan debit RK PPKD dan kredit RK SKPD Rp39.100.000; akun RK akhir nol. Ini pemeriksaan hubungan internal, dengan sistem/eliminasi rinci dipelajari pada TM08. [Permendagri 64 Lampiran II PDF 73]"
        },
        {
          "kind": "p",
          "text": "**Langkah 3: susun LRA.** Barang/jasa dibayar = Rp42.750.000 + Rp18.650.000 = Rp61.400.000. Total belanja = Rp61.400.000 + Rp96.350.000 = Rp157.750.000. Surplus/defisit = Rp118.650.000 − Rp157.750.000 = (Rp39.100.000). Pembiayaan neto = Rp54.200.000 − Rp13.650.000 = Rp40.550.000. SiLPA = −Rp39.100.000 + Rp40.550.000 = Rp1.450.000. [PSAP 02 par. 13, 58–62]"
        },
        {
          "kind": "table",
          "headers": [
            "Pos",
            "Anggaran 2025",
            "Realisasi 2025",
            "%",
            "Realisasi 2024"
          ],
          "rows": [
            [
              "Pendapatan retribusi",
              "130.850.000",
              "118.650.000",
              "90,68%",
              "n/a"
            ],
            [
              "Belanja barang/jasa",
              "70.650.000",
              "61.400.000",
              "86,91%",
              "n/a"
            ],
            [
              "Belanja modal",
              "100.750.000",
              "96.350.000",
              "95,63%",
              "n/a"
            ],
            [
              "Total belanja",
              "171.400.000",
              "157.750.000",
              "92,04%",
              "n/a"
            ],
            [
              "Transfer keluar",
              "0",
              "0",
              "n/a",
              "n/a"
            ],
            [
              "Surplus/(defisit)-LRA",
              "(40.550.000)",
              "(39.100.000)",
              "n/a",
              "n/a"
            ],
            [
              "Penerimaan pembiayaan: penggunaan SAL",
              "54.200.000",
              "54.200.000",
              "100,00%",
              "n/a"
            ],
            [
              "Pengeluaran pembiayaan: pokok pinjaman",
              "13.650.000",
              "13.650.000",
              "100,00%",
              "n/a"
            ],
            [
              "Pembiayaan neto",
              "40.550.000",
              "40.550.000",
              "100,00%",
              "n/a"
            ],
            [
              "SiLPA",
              "0",
              "1.450.000",
              "n/a",
              "n/a"
            ]
          ],
          "align": [
            "left",
            "right",
            "right",
            "left",
            "left"
          ],
          "rowRules": [
            {
              "row": 9,
              "columns": [
                1,
                2
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Laporan Realisasi Anggaran",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "p",
          "text": "Persentase hanya dihitung untuk pos beranggaran positif: realisasi ÷ anggaran × 100%. n/a berarti data tidak tersedia atau rasio tidak bermakna. Tanda kurung berarti nilai negatif."
        },
        {
          "kind": "p",
          "text": "**Langkah 4: susun LPSAL.** SAL setelah penggunaan = Rp105.400.000 − Rp54.200.000 = Rp51.200.000. Tambahkan SiLPA Rp1.450.000; tanpa koreksi dan lain-lain, SAL akhir Rp52.650.000. Penggunaan SAL tidak ditambahkan sebagai penerimaan kas baru. [PSAP 01 par. 41–43]"
        },
        {
          "kind": "table",
          "headers": [
            "Pos",
            "2025",
            "2024"
          ],
          "rows": [
            [
              "SAL awal",
              "105.400.000",
              "n/a"
            ],
            [
              "Penggunaan SAL",
              "(54.200.000)",
              "n/a"
            ],
            [
              "Subtotal setelah penggunaan",
              "51.200.000",
              "n/a"
            ],
            [
              "SiLPA tahun berjalan",
              "1.450.000",
              "n/a"
            ],
            [
              "Subtotal",
              "52.650.000",
              "n/a"
            ],
            [
              "Koreksi kesalahan tahun lalu",
              "0",
              "n/a"
            ],
            [
              "Lain-lain",
              "0",
              "n/a"
            ],
            [
              "SAL akhir",
              "52.650.000",
              "n/a"
            ]
          ],
          "align": [
            "left",
            "right",
            "left"
          ],
          "rowRules": [
            {
              "row": 7,
              "columns": [
                1
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Laporan Perubahan Saldo Anggaran Lebih",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "p",
          "text": "**Langkah 5: susun LO.** Pendapatan-LO = Rp118.650.000 + Rp12.850.000 = Rp131.500.000. Total beban = Rp39.550.000 + Rp25.500.000 + Rp43.330.000 = Rp108.380.000. Surplus operasi = Rp131.500.000 − Rp108.380.000 = Rp23.120.000. Nonoperasional dan luar biasa masing-masing nol, jadi surplus-LO final tetap Rp23.120.000. [PSAP 12 par. 13, 19–22, 32–35, 51–52]"
        },
        {
          "kind": "table",
          "headers": [
            "Pos",
            "2025",
            "2024"
          ],
          "rows": [
            [
              "Pendapatan retribusi-LO",
              "131.500.000",
              "n/a"
            ],
            [
              "Beban persediaan",
              "39.550.000",
              "n/a"
            ],
            [
              "Beban jasa",
              "25.500.000",
              "n/a"
            ],
            [
              "Beban penyusutan",
              "43.330.000",
              "n/a"
            ],
            [
              "Total beban",
              "108.380.000",
              "n/a"
            ],
            [
              "Surplus operasi",
              "23.120.000",
              "n/a"
            ],
            [
              "Hasil nonoperasional",
              "0",
              "n/a"
            ],
            [
              "Surplus pra-pos luar biasa",
              "23.120.000",
              "n/a"
            ],
            [
              "Pos luar biasa",
              "0",
              "n/a"
            ],
            [
              "Surplus-LO",
              "23.120.000",
              "n/a"
            ]
          ],
          "align": [
            "left",
            "right",
            "left"
          ],
          "rowRules": [
            {
              "row": 9,
              "columns": [
                1
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Laporan Operasional",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "p",
          "text": "**Langkah 6: susun LPE.** Ekuitas awal = aset awal Rp302.620.000 − kewajiban awal Rp34.000.000 = Rp268.620.000. Tambahkan surplus-LO Rp23.120.000, koreksi langsung nol; ekuitas akhir Rp291.740.000. Jurnal penutup dua tahap memindahkan pendapatan/beban ke surplus-LO, lalu surplus-LO ke ekuitas; bentuk ringkas kertas kerja ada pada jurnal dataset. [PSAP 01 par. 101–103; Permendagri 64 Lampiran II PDF 78, 81]"
        },
        {
          "kind": "table",
          "headers": [
            "Pos",
            "2025",
            "2024"
          ],
          "rows": [
            [
              "Ekuitas awal",
              "268.620.000",
              "n/a"
            ],
            [
              "Surplus-LO",
              "23.120.000",
              "n/a"
            ],
            [
              "Dampak kumulatif/perubahan kebijakan/koreksi langsung ke ekuitas",
              "0",
              "n/a"
            ],
            [
              "Ekuitas akhir",
              "291.740.000",
              "n/a"
            ]
          ],
          "align": [
            "left",
            "right",
            "left"
          ],
          "rowRules": [
            {
              "row": 3,
              "columns": [
                1
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Laporan Perubahan Ekuitas",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "p",
          "text": "**Langkah 7: susun Neraca.** Kas = Rp125.750.000 + Rp118.650.000 − Rp42.750.000 − Rp18.650.000 − Rp96.350.000 − Rp13.650.000 = Rp73.000.000. Aset lancar = Rp73.000.000 + Rp12.850.000 + Rp11.650.000 = Rp97.500.000. Aset tetap neto = Rp336.950.000 − Rp115.510.000 = Rp221.440.000. Total aset = Rp318.940.000. Kewajiban = Rp20.350.000 + Rp6.850.000 = Rp27.200.000; total kewajiban dan ekuitas = Rp27.200.000 + Rp291.740.000 = Rp318.940.000. [PSAP 01 par. 44–49, 84–85]"
        },
        {
          "kind": "table",
          "headers": [
            "Aset",
            "2025",
            "2024"
          ],
          "rows": [
            [
              "Kas di Kas Daerah",
              "73.000.000",
              "125.750.000"
            ],
            [
              "Kas bendahara penerimaan",
              "0",
              "0"
            ],
            [
              "Piutang retribusi",
              "12.850.000",
              "0"
            ],
            [
              "Persediaan",
              "11.650.000",
              "8.450.000"
            ],
            [
              "Total aset lancar",
              "97.500.000",
              "134.200.000"
            ],
            [
              "Peralatan dan mesin",
              "336.950.000",
              "240.600.000"
            ],
            [
              "Akumulasi penyusutan",
              "(115.510.000)",
              "(72.180.000)"
            ],
            [
              "Aset tetap neto",
              "221.440.000",
              "168.420.000"
            ],
            [
              "Total aset",
              "318.940.000",
              "302.620.000"
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
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Neraca",
            "period": "Per 31 Desember 2025 dan 2024",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "table",
          "headers": [
            "Kewajiban dan ekuitas",
            "2025",
            "2024"
          ],
          "rows": [
            [
              "Utang PFK, jangka pendek",
              "20.350.000",
              "20.350.000"
            ],
            [
              "Utang belanja barang/jasa, jangka pendek",
              "6.850.000",
              "0"
            ],
            [
              "Bagian lancar utang jangka panjang",
              "0",
              "13.650.000"
            ],
            [
              "Total kewajiban jangka pendek",
              "27.200.000",
              "34.000.000"
            ],
            [
              "Kewajiban jangka panjang",
              "0",
              "0"
            ],
            [
              "Total kewajiban",
              "27.200.000",
              "34.000.000"
            ],
            [
              "Ekuitas",
              "291.740.000",
              "268.620.000"
            ],
            [
              "Total kewajiban dan ekuitas",
              "318.940.000",
              "302.620.000"
            ]
          ],
          "align": [
            "left",
            "right",
            "right"
          ],
          "rowRules": [
            {
              "row": 7,
              "columns": [
                1,
                2
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Neraca",
            "period": "Per 31 Desember 2025 dan 2024",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "p",
          "text": "**Langkah 8: susun LAK metode langsung.** Operasi = Rp118.650.000 − Rp42.750.000 − Rp18.650.000 = Rp57.250.000. Investasi = (Rp96.350.000); pendanaan = (Rp13.650.000); transitoris bersih nol. Perubahan kas = Rp57.250.000 − Rp96.350.000 − Rp13.650.000 = (Rp52.750.000). Kas akhir = Rp125.750.000 − Rp52.750.000 = Rp73.000.000. [PSAP 03 par. 21–41, 59]"
        },
        {
          "kind": "table",
          "headers": [
            "Pos",
            "2025",
            "2024"
          ],
          "rows": [
            [
              "Operasi: penerimaan retribusi",
              "118.650.000",
              "n/a"
            ],
            [
              "Operasi: pembayaran persediaan",
              "(42.750.000)",
              "n/a"
            ],
            [
              "Operasi: pembayaran jasa",
              "(18.650.000)",
              "n/a"
            ],
            [
              "Arus kas bersih operasi",
              "57.250.000",
              "n/a"
            ],
            [
              "Investasi: pembayaran peralatan",
              "(96.350.000)",
              "n/a"
            ],
            [
              "Arus kas bersih investasi",
              "(96.350.000)",
              "n/a"
            ],
            [
              "Pendanaan: pelunasan pokok pinjaman",
              "(13.650.000)",
              "n/a"
            ],
            [
              "Arus kas bersih pendanaan",
              "(13.650.000)",
              "n/a"
            ],
            [
              "Arus kas bersih transitoris",
              "0",
              "n/a"
            ],
            [
              "Penurunan kas",
              "(52.750.000)",
              "n/a"
            ],
            [
              "Kas awal",
              "125.750.000",
              "n/a"
            ],
            [
              "Kas akhir",
              "73.000.000",
              "n/a"
            ]
          ],
          "align": [
            "left",
            "right",
            "left"
          ],
          "rowRules": [
            {
              "row": 11,
              "columns": [
                1
              ],
              "bottom": "double"
            }
          ],
          "reportHeader": {
            "entity": "Kabupaten Contoh, konsolidasi SKPD dan PPKD",
            "title": "Laporan Arus Kas, metode langsung",
            "period": "Untuk tahun yang berakhir 31 Desember 2025",
            "unit": "Satuan: rupiah; Ilustrasi"
          }
        },
        {
          "kind": "p",
          "text": "**Langkah 9: tulis CaLK.** Jelaskan entitas, basis, asumsi, kebijakan, dan rincian pos. Cantumkan sumber selisih LRA/LO dan SAL/kas serta batas data komparatif. Narasi berikut menunjukkan isi yang dapat disusun dari data soal; informasi makro dan kendala layanan riil memerlukan data tambahan. [PSAP 04 par. 12–14; PSAP 01 par. 104–108]"
        },
        {
          "kind": "p",
          "text": "**Kabupaten Contoh, konsolidasi SKPD dan PPKD**\n**Catatan atas Laporan Keuangan**\n**Untuk tahun yang berakhir 31 Desember 2025**\n**Satuan: rupiah; Ilustrasi**"
        },
        {
          "kind": "ol",
          "items": [
            "**Entitas dan periode.** Pemda fiktif dengan satu SKPD dan PPKD/BUD, dikonsolidasikan untuk TA 2025. Akun RK internal dieliminasi. Penyajian ini merupakan latihan, dengan arus komparatif 2024 dan informasi makro yang tidak tersedia.",
            "**Kebijakan anggaran dan kinerja.** Anggaran retribusi Rp130.850.000, barang/jasa Rp70.650.000, modal Rp100.750.000. Penggunaan SAL Rp54.200.000 dan pengeluaran pembiayaan Rp13.650.000. Realisasi pendapatan 90,68%, barang/jasa 86,91%, modal 95,63%; alasan selisih serta ukuran layanan nonkeuangan tidak diberikan dalam soal.",
            "**Basis dan pengukuran.** LRA mengikuti anggaran kas; laporan finansial memakai akrual. Perolehan aset memakai biaya perolehan. Persediaan memakai metode beban/periodik dengan opname berbasis biaya; tidak ada barang rusak atau usang. Penyusutan garis lurus, nilai residu nol, 12 bulan sesuai asumsi soal.",
            "**Pendapatan dan beban.** Retribusi-LO Rp131.500.000 berasal dari penerimaan hak tahun berjalan Rp118.650.000 dan hak yang masih berupa piutang Rp12.850.000. Beban persediaan Rp39.550.000, jasa Rp25.500.000, penyusutan Rp43.330.000. Tidak ada uang muka, penyisihan, retur, bunga, pajak/potongan, atau transaksi lain pada cakupan soal.",
            "**Aset, utang, dan ekuitas.** Kas Rp73.000.000, piutang Rp12.850.000, persediaan Rp11.650.000. Peralatan bruto naik dari Rp240.600.000 menjadi Rp336.950.000; akumulasi penyusutan naik dari Rp72.180.000 menjadi Rp115.510.000. Aset tetap neto Rp221.440.000. Utang jasa Rp6.850.000 dan utang PFK Rp20.350.000; pokok pinjaman Rp13.650.000 sudah dilunasi. Ekuitas akhir Rp291.740.000 berasal dari LPE.",
            "**SAL dan kas.** SAL akhir Rp52.650.000 berasal dari Rp105.400.000 − Rp54.200.000 + Rp1.450.000. Kas Rp73.000.000 termasuk Rp20.350.000 yang dipegang untuk pihak ketiga; dana ini dikecualikan dari SAL tersedia menurut asumsi soal. Penggunaan SAL merupakan sumber pembiayaan dari saldo tahun lalu, tanpa kas masuk baru pada LAK. Tidak ada pergerakan PFK tahun berjalan.",
            "**Referensi silang dan informasi lain.** Catatan 2 menjelaskan LRA; catatan 4 menjelaskan LO; catatan 5 menjelaskan Neraca dan LPE; catatan 6 menjelaskan LPSAL dan LAK. Tidak ada nonoperasional, pos luar biasa, atau koreksi langsung ke ekuitas. Komitmen dan kewajiban kontinjensi lain tidak diberikan; pengungkapan lengkap entitas riil memerlukan informasi tambahan."
          ]
        },
        {
          "kind": "p",
          "text": "**Langkah 10: periksa seluruh hubungan.** SiLPA LRA/LPSAL Rp1.450.000; surplus-LO pada LPE Rp23.120.000; ekuitas LPE/Neraca Rp291.740.000; kas LAK/Neraca Rp73.000.000. Neraca seimbang Rp318.940.000 = Rp27.200.000 + Rp291.740.000. SAL Rp52.650.000 berbeda dari kas Rp73.000.000 dan ekuitas Rp291.740.000; dana PFK Rp20.350.000 menjelaskan selisih SAL/kas pada asumsi dataset."
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L2. Menghitung SiLPA dan SAL akhir",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Pendapatan Kabupaten Contoh Rp118.650.000, belanja barang/jasa Rp61.400.000, modal Rp96.350.000, transfer nol, penerimaan pembiayaan Rp54.200.000, pengeluaran pembiayaan Rp13.650.000. SAL awal Rp105.400.000, penggunaan SAL Rp54.200.000, koreksi dan lain-lain nol. Hitung SiLPA dan SAL akhir."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Total belanja Rp157.750.000; defisit Rp118.650.000 − Rp157.750.000 = (Rp39.100.000). Pembiayaan neto Rp40.550.000. SiLPA = −Rp39.100.000 + Rp40.550.000 = Rp1.450.000. SAL akhir = Rp105.400.000 − Rp54.200.000 + Rp1.450.000 = Rp52.650.000. [PSAP 02 par. 58–62; PSAP 01 par. 41]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L3. Menelusuri hasil LO ke ekuitas",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Pendapatan-LO Kabupaten Contoh Rp131.500.000; beban persediaan Rp39.550.000, jasa Rp25.500.000, penyusutan Rp43.330.000. Nonoperasional dan luar biasa nol. Ekuitas awal Rp268.620.000 dan koreksi langsung nol. Hitung hasil LO final dan ekuitas akhir."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Beban total Rp39.550.000 + Rp25.500.000 + Rp43.330.000 = Rp108.380.000. Surplus operasi Rp23.120.000; hasil LO final Rp23.120.000 + Rp0 + Rp0 = Rp23.120.000. Ekuitas akhir Rp268.620.000 + Rp23.120.000 = Rp291.740.000, lalu disajikan pada Neraca. [PSAP 12 par. 51–52; PSAP 01 par. 101–102]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L4. Menyusun arus kas langsung",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Kas awal Kabupaten Contoh Rp125.750.000. Kas retribusi Rp118.650.000; pembayaran persediaan Rp42.750.000, jasa Rp18.650.000, peralatan Rp96.350.000, dan pokok pinjaman Rp13.650.000. Tidak ada bunga atau arus transitoris. Klasifikasikan dan hitung kas akhir."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Operasi Rp118.650.000 − Rp42.750.000 − Rp18.650.000 = Rp57.250.000. Investasi (Rp96.350.000), pendanaan (Rp13.650.000), transitoris Rp0. Kas berubah −Rp52.750.000; kas akhir Rp125.750.000 − Rp52.750.000 = Rp73.000.000. Pendapatan berbentuk piutang dan penyusutan tidak ditambahkan sebagai arus kas. [PSAP 03 par. 21–38, 57–59]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L5. Memeriksa Neraca",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Kabupaten Contoh mempunyai kas Rp73.000.000, piutang Rp12.850.000, persediaan Rp11.650.000, peralatan bruto Rp336.950.000, akumulasi penyusutan Rp115.510.000, utang PFK Rp20.350.000, dan utang jasa Rp6.850.000. Ekuitas LPE Rp291.740.000. Susun pemeriksaan kedua sisi Neraca."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Aset lancar Rp97.500.000. Aset tetap neto Rp336.950.000 − Rp115.510.000 = Rp221.440.000. Total aset Rp318.940.000. Kewajiban Rp27.200.000 ditambah ekuitas Rp291.740.000 = Rp318.940.000. Kedua sisi sama; ekuitas juga sama dengan LPE. [PSAP 01 par. 44–49, 84–85]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L6. Menjelaskan beda LRA dan LO",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Defisit LRA Kabupaten Contoh Rp39.100.000. Ada piutang retribusi Rp12.850.000, belanja modal Rp96.350.000, persediaan awal Rp8.450.000, persediaan akhir Rp11.650.000, jasa masih terutang Rp6.850.000, dan penyusutan Rp43.330.000. Tidak ada transaksi lain. Rekonsiliasikan ke hasil LO."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Mulai −Rp39.100.000. Tambah piutang Rp12.850.000 menjadi −Rp26.250.000. Tambah modal Rp96.350.000 menjadi Rp70.100.000. Kurangi persediaan awal Rp8.450.000 menjadi Rp61.650.000. Tambah persediaan akhir Rp11.650.000 menjadi Rp73.300.000. Kurangi jasa terutang Rp6.850.000 menjadi Rp66.450.000. Kurangi penyusutan Rp43.330.000, hasilnya surplus-LO Rp23.120.000. Rekonsiliasi ini mengikuti asumsi dataset; jangan menjadikannya rumus universal tanpa menguji transaksi lain. [PSAP 12 par. 19–22, 32–35; PSAP 05 par. 22–25; PSAP 07 par. 54]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L7. Membaca LPSAL Berau 2025",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, sumber asli.** LPSAL Berau PDF 19 memuat SAL awal Rp673.431.043.094,28, penggunaan Rp673.434.236.594,08, SiLPA Rp272.644.534.292,08, koreksi Rp3.193.499,80, lain-lain Rp0. Hitung SAL akhir dan jelaskan kesamaannya dengan SiLPA. Sebutkan catatan rujukan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Saldo setelah penggunaan = −Rp3.193.499,80. Setelah SiLPA = Rp272.641.340.792,28. Setelah koreksi = Rp272.644.534.292,08. Kesamaan terjadi karena −Rp3.193.499,80 + Rp3.193.499,80 = Rp0; ini hasil pergerakan saldo, bukan persamaan definisi SAL dan SiLPA. Rujukan CaLK berurutan 5.2.1–5.2.5. [Berau 2025 PDF 19]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L8. Membaca LPSAL LKPP 2025",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, sumber asli.** LKPP PDF 47 memuat SAL awal Rp457.543.275.049.219, penggunaan Rp93.146.980.793.000, SiLPA Rp72.396.045.683.987. Penyesuaian pembukuan Rp2.126.915.000.875 dan penyesuaian lain-lain negatif Rp653.686.043.549. Hitung saldo pra-penyesuaian, total penyesuaian, dan SAL akhir."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Rp457.543.275.049.219 − Rp93.146.980.793.000 = Rp364.396.294.256.219. Tambah SiLPA menjadi Rp436.792.339.940.206. Penyesuaian neto Rp2.126.915.000.875 − Rp653.686.043.549 = Rp1.473.228.957.326. SAL akhir Rp436.792.339.940.206 + Rp1.473.228.957.326 = Rp438.265.568.897.532. Referensi CaLK C.1–C.6; hasil berbeda dari SiLPA. [LKPP 2025 PDF 47/cetak 4]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L9. Menyusun catatan SAL dan kas",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Pada Kabupaten Contoh, kas akhir Rp73.000.000, SAL akhir Rp52.650.000, serta kas PFK dan utang PFK masing-masing Rp20.350.000. Tidak ada pembatasan lain pada data. Susun rekonsiliasi dan dua kalimat CaLK."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Selisih Rp73.000.000 − Rp52.650.000 = Rp20.350.000, sama dengan dana PFK. Narasi: “Kas akhir Rp73.000.000 mencakup Rp20.350.000 yang dipegang untuk pihak ketiga. Sesuai asumsi soal, dana tersebut dikecualikan dari SAL tersedia, sehingga SAL akhir Rp52.650.000.” Hubungan ini mengikuti cakupan dataset; entitas lain memerlukan penelusuran komponen sendiri. [PSAP 03 par. 59–62; PSAP 04 par. 13–14]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    },
    {
      "kind": "solution-reveal",
      "title": "L10. Persentase realisasi dan batas penilaian",
      "promptBlocks": [
        {
          "kind": "p",
          "text": "**Soal, Ilustrasi.** Anggaran retribusi Kabupaten Contoh Rp130.850.000 dan realisasi Rp118.650.000. Anggaran belanja modal Rp100.750.000 dan realisasi Rp96.350.000. Anggaran transfer dan realisasinya nol. Hitung dua persentase, tentukan perlakuan rasio transfer, dan jelaskan batas kesimpulan tentang layanan."
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "**Penyelesaian.** Retribusi = Rp118.650.000 ÷ Rp130.850.000 × 100% = 90,68%. Modal = Rp96.350.000 ÷ Rp100.750.000 × 100% = 95,63%. Transfer ditandai n/a untuk persentase karena denominator nol; nilainya tetap Rp0 pada kolom angka. Persentase realisasi tidak cukup untuk menyimpulkan mutu layanan tanpa data output/outcome dan penjelasan kendala. [PSAP 02 par. 8, 12–13; PSAP 04 par. 24–28; PSAP 01 par. 12]"
        }
      ],
      "revealLabel": "Tampilkan penyelesaian dan jawaban akhir"
    }
  ]
};
