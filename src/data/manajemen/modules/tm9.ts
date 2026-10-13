// Generated from MNU108 TM9 canonical 04. Edit the source package and run build-mnu108-pra-uas.
import type {Reading} from '../../../types';
export const TM9_READING: Reading = {
  "tm": 9,
  "title": "Mengelola inovasi dan perubahan",
  "ref": "Daft dan Marcic, Understanding Management 12e (2023), Ch. 8, hal. 266–297 (PDF 294–325); RPP Excel 2026, TM 9.",
  "intro": "Proyek MRP Chopper's tertahan meskipun pengusul yakin manfaatnya besar. Bab ini membantu kamu melihat mengapa ide dan kesiapan orang harus diurus bersama. [hal. 295–296]",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "Innovation mencakup ide yang diciptakan dan dipakai.",
    "Product/service, process, people dan culture change mempunyai sasaran berbeda.",
    "Exploration dan exploitation memerlukan dukungan yang sesuai.",
    "Discovery, collaboration dan peran/struktur membawa ide ke penggunaan.",
    "OD mengubah relasi dan budaya melalui proses terencana.",
    "Lewin: unfreezing, changing, refreezing."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Kilat: Mengelola inovasi dan perubahan"
    },
    {
      "kind": "figure",
      "title": "Ide baru harus sampai digunakan",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 1000 354.15\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-OV-d-t MNU108-09-OV-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-OV-d-t\">Ide baru harus sampai digunakan</title><desc id=\"MNU108-09-OV-d-d\">Tiga pertanyaan menghubungkan jenis perubahan, pengembangan ide, dan implementasi dengan hasil inovasi.</desc><defs><marker id=\"MNU108-09-OV-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"1000\" height=\"354.15\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"24\" width=\"305.3333333333333\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"38\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Apa yang berubah?</tspan></text><text class=\"svg-text\" x=\"38\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Products, services atau</tspan></text><text class=\"svg-text\" x=\"38\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">processes</tspan></text><text class=\"svg-text\" x=\"38\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">People dan culture</tspan></text><rect class=\"svg-card\" x=\"347.3333333333333\" y=\"24\" width=\"305.3333333333333\" height=\"162.20000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"361.3333333333333\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">Bagaimana ide</tspan><tspan x=\"361.3333333333333\" dy=\"25.650000000000002\">dikembangkan?</tspan></text><text class=\"svg-text\" x=\"361.3333333333333\" y=\"109.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">Discovery</tspan></text><text class=\"svg-text\" x=\"361.3333333333333\" y=\"133.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">Kolaborasi dan peran</tspan></text><text class=\"svg-text\" x=\"361.3333333333333\" y=\"157.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">inovasi</tspan></text><rect class=\"svg-card\" x=\"670.6666666666666\" y=\"24\" width=\"305.3333333333333\" height=\"186.5\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"684.6666666666666\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">Bagaimana perubahan</tspan><tspan x=\"684.6666666666666\" dy=\"25.650000000000002\">berjalan?</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"109.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">Unfreezing, changing,</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"133.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">refreezing</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"157.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">Diagnosis resistensi dan</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"182.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">taktik implementasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-OV-d-arrow)\" d=\"M176.66666666666666 164.55 L500 276.5\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-OV-d-arrow)\" d=\"M500 190.20000000000002 L500 276.5\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-OV-d-arrow)\" d=\"M823.3333333333333 214.5 L500 276.5\"/><rect class=\"svg-card\" x=\"200\" y=\"280.5\" width=\"600\" height=\"49.650000000000006\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"214\" y=\"304.5\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"214\" dy=\"0\">Inovasi yang diterapkan dan dievaluasi</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 716.2500000000001\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-OV-m-t MNU108-09-OV-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-OV-m-t\">Ide baru harus sampai digunakan</title><desc id=\"MNU108-09-OV-m-d\">Tiga pertanyaan menghubungkan jenis perubahan, pengembangan ide, dan implementasi dengan hasil inovasi.</desc><defs><marker id=\"MNU108-09-OV-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"716.2500000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Apa yang berubah?</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Products, services atau</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">processes</tspan></text><text class=\"svg-text\" x=\"32\" y=\"120.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">People dan culture</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"179.75\" width=\"296\" height=\"127.10000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"203.75\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Bagaimana ide</tspan><tspan x=\"32\" dy=\"22.950000000000003\">dikembangkan?</tspan></text><text class=\"svg-text\" x=\"32\" y=\"259.65\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Discovery</tspan></text><text class=\"svg-text\" x=\"32\" y=\"281.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kolaborasi dan peran inovasi</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"340.85\" width=\"296\" height=\"170.3\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"364.85\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Bagaimana perubahan</tspan><tspan x=\"32\" dy=\"22.950000000000003\">berjalan?</tspan></text><text class=\"svg-text\" x=\"32\" y=\"420.75\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Unfreezing, changing,</tspan></text><text class=\"svg-text\" x=\"32\" y=\"442.35\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">refreezing</tspan></text><text class=\"svg-text\" x=\"32\" y=\"463.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Diagnosis resistensi dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"485.55\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">taktik implementasi</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"545.1500000000001\" width=\"296\" height=\"69.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"569.1500000000001\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Inovasi yang diterapkan</tspan><tspan x=\"32\" dy=\"22.950000000000003\">dan dievaluasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-OV-m-arrow)\" d=\"M314 82.875 H347 V580.1000000000001 H316\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-OV-m-arrow)\" d=\"M314 243.3 H347 V580.1000000000001 H316\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-OV-m-arrow)\" d=\"M314 426 H347 V580.1000000000001 H316\"/><text class=\"svg-text\" x=\"18\" y=\"649.0500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Cabang-cabang berkontribusi</tspan><tspan x=\"18\" dy=\"21.6\">bersama.</tspan></text></svg>",
      "altText": "Tiga pertanyaan menghubungkan jenis perubahan, pengembangan ide, dan implementasi dengan hasil inovasi.",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 268–290].",
      "overview": {
        "heading": "Ide baru harus sampai digunakan",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "ul",
      "items": [
        "Innovation mencakup ide yang diciptakan dan dipakai.",
        "Product/service, process, people dan culture change mempunyai sasaran berbeda.",
        "Exploration dan exploitation memerlukan dukungan yang sesuai.",
        "Discovery, collaboration dan peran/struktur membawa ide ke penggunaan.",
        "OD mengubah relasi dan budaya melalui proses terencana.",
        "Lewin: unfreezing, changing, refreezing.",
        "Diagnosis resistensi menentukan taktik implementasi."
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Istilah Inggris yang digunakan",
      "blocks": [
        {
          "kind": "table",
          "title": "Istilah dan makna",
          "headers": [
            "Istilah",
            "Makna dalam bab"
          ],
          "rows": [
            [
              "Ambidextrous approach",
              "Memisahkan ruang eksplorasi ide dari implementasi yang efisien."
            ],
            [
              "Open innovation",
              "Memakai ide/pengetahuan melintasi batas perusahaan."
            ],
            [
              "Champion",
              "Orang yang memperjuangkan ide agar memperoleh dukungan."
            ],
            [
              "Organizational development (OD)",
              "Perubahan terencana melalui pendekatan perilaku dan proses organisasi."
            ]
          ],
          "caption": "Daft dan Marcic, Understanding Management 12e (2023), Ch. 8, hal. 266–297 (PDF 294–325); RPP Excel 2026, TM 9.",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "h2",
      "text": "2. Inovasi dan perubahan: ide harus dipakai"
    },
    {
      "kind": "p",
      "text": "Sebuah organisasi bisa mempunyai ide bagus yang belum pernah dijalankan. Innovation mencakup penciptaan dan penerapan ide, solusi atau perilaku baru. Change adalah adopsi ide baru; ide itu dapat dikembangkan di tempat lain. Nilai manfaat baru dapat dinilai setelah gagasan digunakan. [hal. 268, 285]"
    },
    {
      "kind": "table",
      "title": "Jenis perubahan",
      "headers": [
        "Konsep",
        "Yang berubah",
        "Cara mengenali"
      ],
      "rows": [
        [
          "Product/service innovation",
          "Keluaran produk atau layanan",
          "Nilai atau layanan yang diterima pelanggan berubah."
        ],
        [
          "Process innovation",
          "Cara kerja/produksi",
          "Alur menghasilkan keluaran berubah."
        ],
        [
          "People change",
          "Sikap/perilaku beberapa orang",
          "Kelompok tertentu belajar dan bekerja dengan cara baru."
        ],
        [
          "Culture change",
          "Norma, nilai dan cara berpikir organisasi",
          "Pola bersama di seluruh organisasi berubah."
        ]
      ],
      "caption": "[hal. 271, 282]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Disruptive innovation dapat berawal kecil dan menggantikan teknologi produk/layanan yang ada. Reverse innovation membalik arah penyebaran: gagasan berbiaya rendah dari pasar berkembang dibawa ke pasar maju. Dua istilah ini menjelaskan sisi berbeda, sehingga perubahan yang kecil belum otomatis disruptive. [hal. 268–270]"
    },
    {
      "kind": "self-check",
      "question": "Apa bedanya kreativitas dengan innovation?",
      "answer": [
        {
          "kind": "p",
          "text": "Kreativitas menghasilkan ide baru. Innovation menuntut ide atau perilaku itu juga diterapkan; daftar ide saja belum menunjukkan manfaat organisasi. [hal. 268, 285]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "3. Ambidextrous: ruang mencoba dan disiplin menjalankan"
    },
    {
      "kind": "p",
      "text": "Kebebasan membantu orang mengembangkan gagasan, tetapi penerapan juga membutuhkan koordinasi dan rutinitas. Ambidextrous approach menyiapkan struktur/proses untuk kedua kebutuhan. Exploration menekankan kreativitas, eksperimen dan risiko; exploitation menggunakan kemampuan serta rutinitas yang sudah ada. [hal. 270–271]"
    },
    {
      "kind": "figure",
      "title": "Ambidextrous approach: dua kebutuhan organisasi",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 1000 279.9\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-AMB-d-t MNU108-09-AMB-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-AMB-d-t\">Ambidextrous approach: dua kebutuhan organisasi</title><desc id=\"MNU108-09-AMB-d-d\">Exploration dan exploitation adalah dua fungsi yang saling melengkapi, bukan pilihan tunggal.</desc><defs><marker id=\"MNU108-09-AMB-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"1000\" height=\"279.9\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"24\" width=\"467\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"38\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Exploration</tspan></text><text class=\"svg-text\" x=\"38\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Kebebasan mencoba dan mengusulkan</tspan></text><text class=\"svg-text\" x=\"38\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Struktur lebih longgar</tspan></text><rect class=\"svg-card\" x=\"509\" y=\"24\" width=\"467\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"523\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Exploitation</tspan></text><text class=\"svg-text\" x=\"523\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Standar, koordinasi dan rutinitas</tspan></text><text class=\"svg-text\" x=\"523\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Penerapan dengan sumber daya organisasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-AMB-d-arrow)\" d=\"M257.5 140.25 L500 202.25\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-AMB-d-arrow)\" d=\"M742.5 140.25 L500 202.25\"/><rect class=\"svg-card\" x=\"200\" y=\"206.25\" width=\"600\" height=\"49.650000000000006\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"214\" y=\"230.25\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"214\" dy=\"0\">Ide dapat lahir dan diterapkan</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 575.4\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-AMB-m-t MNU108-09-AMB-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-AMB-m-t\">Ambidextrous approach: dua kebutuhan organisasi</title><desc id=\"MNU108-09-AMB-m-d\">Exploration dan exploitation adalah dua fungsi yang saling melengkapi, bukan pilihan tunggal.</desc><defs><marker id=\"MNU108-09-AMB-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"575.4\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Exploration</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kebebasan mencoba dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">mengusulkan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"120.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Struktur lebih longgar</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"179.75\" width=\"296\" height=\"147.35000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"203.75\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Exploitation</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.7\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Standar, koordinasi dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"258.3\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">rutinitas</tspan></text><text class=\"svg-text\" x=\"32\" y=\"279.9\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Penerapan dengan sumber daya</tspan></text><text class=\"svg-text\" x=\"32\" y=\"301.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">organisasi</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"361.1\" width=\"296\" height=\"69.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"385.1\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Ide dapat lahir dan</tspan><tspan x=\"32\" dy=\"22.950000000000003\">diterapkan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-AMB-m-arrow)\" d=\"M314 82.875 H347 V396.05 H316\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-AMB-m-arrow)\" d=\"M314 253.425 H347 V396.05 H316\"/><text class=\"svg-text\" x=\"18\" y=\"465\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Kedua kebutuhan dijalankan</tspan><tspan x=\"18\" dy=\"21.6\">bersama, dengan struktur yang</tspan><tspan x=\"18\" dy=\"21.6\">sesuai. Cabang-cabang</tspan><tspan x=\"18\" dy=\"21.6\">berkontribusi bersama.</tspan></text></svg>",
      "altText": "Exploration dan exploitation adalah dua fungsi yang saling melengkapi, bukan pilihan tunggal.",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 270–271].",
      "overview": {
        "heading": "Ambidextrous approach: dua kebutuhan organisasi",
        "cards": [],
        "footer": "Kedua kebutuhan dijalankan bersama, dengan struktur yang sesuai."
      }
    },
    {
      "kind": "p",
      "text": "Buku menggunakan innovation labs sebagai ruang bereksperimen, dengan penerapan dilakukan melalui sistem organisasi yang lebih terstruktur. Pemisahan fungsi membantu, tetapi perpindahan ide antarfungsi tetap harus diurus. [hal. 270]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa aturan kerja yang sama belum tentu cocok untuk exploration dan exploitation?",
      "answer": [
        {
          "kind": "p",
          "text": "Kreativitas terbantu oleh kelonggaran, sedangkan penerapan membutuhkan koordinasi dan kepatuhan pada standar. Ambidextrous menyesuaikan struktur untuk keduanya. [hal. 270–271]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "4. Tiga strategi untuk produk dan proses baru"
    },
    {
      "kind": "p",
      "text": "Bagaimana ide melewati tahap usulan? Discovery membuat kondisi agar gagasan muncul. Horizontal collaboration dan open innovation menyediakan pertukaran pengetahuan. Innovation roles and structures membantu ide memperoleh dukungan dan diterapkan. [hal. 272–281]"
    },
    {
      "kind": "figure",
      "title": "Three Innovation Strategies for New Products and Processes",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 1000 329.85\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-1-d-t MNU108-09-8-1-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-1-d-t\">Three Innovation Strategies for New Products and Processes</title><desc id=\"MNU108-09-8-1-d-d\">Discovery, kolaborasi/open innovation, dan peran/struktur inovasi bersama mendukung keluaran baru.</desc><defs><marker id=\"MNU108-09-8-1-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"1000\" height=\"329.85\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"24\" width=\"305.3333333333333\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"38\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Discovery</tspan></text><text class=\"svg-text\" x=\"38\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Creativity dan bottom-up</tspan></text><text class=\"svg-text\" x=\"38\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">approach</tspan></text><text class=\"svg-text\" x=\"38\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Internal contests dan idea</tspan></text><text class=\"svg-text\" x=\"38\" y=\"156.55\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">incubators</tspan></text><rect class=\"svg-card\" x=\"347.3333333333333\" y=\"24\" width=\"305.3333333333333\" height=\"162.20000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"361.3333333333333\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">Horizontal collaboration</tspan><tspan x=\"361.3333333333333\" dy=\"25.650000000000002\">and open innovation</tspan></text><text class=\"svg-text\" x=\"361.3333333333333\" y=\"109.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">Koordinasi antardepartemen</tspan></text><text class=\"svg-text\" x=\"361.3333333333333\" y=\"133.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">Customers, partners dan</tspan></text><text class=\"svg-text\" x=\"361.3333333333333\" y=\"157.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"361.3333333333333\" dy=\"0\">sumber ide luar</tspan></text><rect class=\"svg-card\" x=\"670.6666666666666\" y=\"24\" width=\"305.3333333333333\" height=\"162.20000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"684.6666666666666\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">Innovation roles and</tspan><tspan x=\"684.6666666666666\" dy=\"25.650000000000002\">structures</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"109.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">Idea champions</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"133.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">New-venture teams,</tspan></text><text class=\"svg-text\" x=\"684.6666666666666\" y=\"157.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"684.6666666666666\" dy=\"0\">skunkworks dan pendanaan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-1-d-arrow)\" d=\"M176.66666666666666 188.85000000000002 L500 252.20000000000005\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-1-d-arrow)\" d=\"M500 190.20000000000002 L500 252.20000000000005\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-1-d-arrow)\" d=\"M823.3333333333333 190.20000000000002 L500 252.20000000000005\"/><rect class=\"svg-card\" x=\"200\" y=\"256.20000000000005\" width=\"600\" height=\"49.650000000000006\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"214\" y=\"280.20000000000005\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"214\" dy=\"0\">New products, services, and processes</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 737.8500000000001\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-1-m-t MNU108-09-8-1-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-1-m-t\">Three Innovation Strategies for New Products and Processes</title><desc id=\"MNU108-09-8-1-m-d\">Discovery, kolaborasi/open innovation, dan peran/struktur inovasi bersama mendukung keluaran baru.</desc><defs><marker id=\"MNU108-09-8-1-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"737.8500000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"147.35000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Discovery</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Creativity dan bottom-up</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">approach</tspan></text><text class=\"svg-text\" x=\"32\" y=\"120.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Internal contests dan idea</tspan></text><text class=\"svg-text\" x=\"32\" y=\"141.75\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">incubators</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"201.35000000000002\" width=\"296\" height=\"148.70000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"225.35000000000002\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Horizontal collaboration</tspan><tspan x=\"32\" dy=\"22.950000000000003\">and open innovation</tspan></text><text class=\"svg-text\" x=\"32\" y=\"281.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Koordinasi antardepartemen</tspan></text><text class=\"svg-text\" x=\"32\" y=\"302.85\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Customers, partners dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"324.45\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">sumber ide luar</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"384.05000000000007\" width=\"296\" height=\"148.70000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"408.05000000000007\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Innovation roles and</tspan><tspan x=\"32\" dy=\"22.950000000000003\">structures</tspan></text><text class=\"svg-text\" x=\"32\" y=\"463.95000000000005\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Idea champions</tspan></text><text class=\"svg-text\" x=\"32\" y=\"485.55000000000007\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">New-venture teams,</tspan></text><text class=\"svg-text\" x=\"32\" y=\"507.15000000000003\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">skunkworks dan pendanaan</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"566.7500000000001\" width=\"296\" height=\"69.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"590.7500000000001\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">New products, services,</tspan><tspan x=\"32\" dy=\"22.950000000000003\">and processes</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-8-1-m-arrow)\" d=\"M314 93.67500000000001 H347 V601.7000000000002 H316\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-8-1-m-arrow)\" d=\"M314 275.70000000000005 H347 V601.7000000000002 H316\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-09-8-1-m-arrow)\" d=\"M314 458.4000000000001 H347 V601.7000000000002 H316\"/><text class=\"svg-text\" x=\"18\" y=\"670.6500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Cabang-cabang berkontribusi</tspan><tspan x=\"18\" dy=\"21.6\">bersama.</tspan></text></svg>",
      "altText": "Discovery, kolaborasi/open innovation, dan peran/struktur inovasi bersama mendukung keluaran baru.",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 272].",
      "overview": {
        "heading": "Three Innovation Strategies for New Products and Processes",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "table",
      "title": "Creativity: orang dan lingkungan kerjanya",
      "headers": [
        "Ciri individu",
        "Dukungan organisasi"
      ],
      "rows": [
        [
          "Conceptual fluency dan open-mindedness",
          "Libatkan orang dengan pengalaman berbeda; beri ruang untuk pemikiran tak biasa."
        ],
        [
          "Originality dan kesediaan mempertanyakan otoritas",
          "Terima risiko/kesalahan dan beri kesempatan menantang gagasan atasan."
        ],
        [
          "Independence dan self-confidence",
          "Berikan pilihan masalah dan otonomi yang sesuai."
        ],
        [
          "Playfulness dan eksplorasi",
          "Ciptakan lingkungan yang memungkinkan percobaan."
        ],
        [
          "Curiosity",
          "Buka komunikasi dan kontak dengan sumber luar."
        ],
        [
          "Persistence, commitment dan fokus",
          "Sediakan sumber daya/waktu, serta penghargaan bagi inovasi."
        ]
      ],
      "caption": "[hal. 273]",
      "stackOnMobile": true
    },
    {
      "kind": "pendalaman",
      "title": "Detail sumber: kreativitas dan Six Thinking Hats",
      "blocks": [
        {
          "kind": "p",
          "text": "Bottom-up approach mengalirkan ide dari tingkat bawah agar didengar dan ditindaklanjuti manajemen. Internal contests mengajak pegawai menawarkan solusi atas masalah organisasi. Pada contoh 3M, waktu untuk experimental doodling membantu pegawai mengeksplorasi ide; persentase tersebut adalah kebijakan contoh perusahaan. [hal. 273–276]"
        },
        {
          "kind": "figure",
          "title": "Six Thinking Hats: perspektif untuk menilai ide",
          "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 461.04999999999995\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-HATS-d-t MNU108-09-HATS-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-HATS-d-t\">Six Thinking Hats: perspektif untuk menilai ide</title><desc id=\"MNU108-09-HATS-d-d\">Six Thinking Hats: perspektif untuk menilai ide. White; Red; Green; Black; Yellow; Blue</desc><defs><marker id=\"MNU108-09-HATS-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"461.04999999999995\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">White</tspan></text><text class=\"svg-text\" x=\"42\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Fakta dan informasi</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Red</tspan></text><text class=\"svg-text\" x=\"371\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Perasaan dan intuisi</tspan></text><rect class=\"svg-card\" x=\"28\" y=\"125.95\" width=\"315\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"149.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Green</tspan></text><text class=\"svg-text\" x=\"42\" y=\"185.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Ide serta alternatif baru</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"125.95\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"149.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Black</tspan></text><text class=\"svg-text\" x=\"371\" y=\"185.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Kelemahan dan asumsi yang</tspan></text><text class=\"svg-text\" x=\"371\" y=\"209.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">salah</tspan></text><rect class=\"svg-card\" x=\"28\" y=\"252.2\" width=\"315\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"276.2\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Yellow</tspan></text><text class=\"svg-text\" x=\"42\" y=\"311.84999999999997\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Nilai serta manfaat</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"252.2\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"276.2\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Blue</tspan></text><text class=\"svg-text\" x=\"371\" y=\"311.84999999999997\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Proses diskusi dan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"336.15\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">fasilitasi</tspan></text><text class=\"svg-text\" x=\"28\" y=\"396.45\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Dalam teknik buku, kelompok memakai perspektif yang sama</tspan><tspan x=\"28\" dy=\"24.3\">pada waktu yang dijadwalkan.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 481.30000000000007\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-HATS-m-t MNU108-09-HATS-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-HATS-m-t\">Six Thinking Hats: perspektif untuk menilai ide</title><desc id=\"MNU108-09-HATS-m-d\">Six Thinking Hats: perspektif untuk menilai ide. White; Red; Green; Black; Yellow; Blue</desc><defs><marker id=\"MNU108-09-HATS-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"481.30000000000007\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"100.1\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">White</tspan></text><text class=\"svg-text\" x=\"34\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Fakta dan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">informasi</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"100.1\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Red</tspan></text><text class=\"svg-text\" x=\"201\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Perasaan dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">intuisi</tspan></text><rect class=\"svg-card\" x=\"20\" y=\"138.1\" width=\"153\" height=\"120.35000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"162.1\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Green</tspan></text><text class=\"svg-text\" x=\"34\" y=\"193.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Ide serta</tspan></text><text class=\"svg-text\" x=\"34\" y=\"213.95\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">alternatif</tspan></text><text class=\"svg-text\" x=\"34\" y=\"234.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">baru</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"138.1\" width=\"153\" height=\"120.35000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"162.1\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Black</tspan></text><text class=\"svg-text\" x=\"201\" y=\"193.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Kelemahan dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"213.95\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">asumsi yang</tspan></text><text class=\"svg-text\" x=\"201\" y=\"234.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">salah</tspan></text><rect class=\"svg-card\" x=\"20\" y=\"272.45000000000005\" width=\"153\" height=\"100.1\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"296.45000000000005\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Yellow</tspan></text><text class=\"svg-text\" x=\"34\" y=\"328.05000000000007\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Nilai serta</tspan></text><text class=\"svg-text\" x=\"34\" y=\"348.30000000000007\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">manfaat</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"272.45000000000005\" width=\"153\" height=\"100.1\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"296.45000000000005\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Blue</tspan></text><text class=\"svg-text\" x=\"201\" y=\"328.05000000000007\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Proses diskusi</tspan></text><text class=\"svg-text\" x=\"201\" y=\"348.30000000000007\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dan fasilitasi</tspan></text><text class=\"svg-text\" x=\"20\" y=\"401.55000000000007\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Dalam teknik buku, kelompok memakai</tspan><tspan x=\"20\" dy=\"20.25\">perspektif yang sama pada waktu yang</tspan><tspan x=\"20\" dy=\"20.25\">dijadwalkan.</tspan></text></svg>",
          "altText": "Six Thinking Hats: perspektif untuk menilai ide. White; Red; Green; Black; Yellow; Blue",
          "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 275].",
          "overview": {
            "heading": "Six Thinking Hats: perspektif untuk menilai ide",
            "cards": [],
            "footer": "Dalam teknik buku, kelompok memakai perspektif yang sama pada waktu yang dijadwalkan."
          }
        },
        {
          "kind": "table",
          "title": "Contoh historis Exhibit 8.3, daftar tahun 2021",
          "headers": [
            "Peringkat",
            "Perusahaan",
            "Alasan ringkas sumber"
          ],
          "rows": [
            [
              "1",
              "Snap",
              "Agenda sosial"
            ],
            [
              "2",
              "Microsoft",
              "Menyatukan tim"
            ],
            [
              "3",
              "Tesla",
              "Posisi kendaraan"
            ],
            [
              "4",
              "Big Hit Entertainment",
              "Menggerakkan penggemar musik"
            ],
            [
              "5",
              "HackerOne",
              "Melibatkan hacker"
            ],
            [
              "6",
              "White Claw",
              "Fenomena produk lintas gender"
            ],
            [
              "7",
              "Shopify",
              "Mendukung pelaku toko"
            ],
            [
              "8",
              "Canva",
              "Kreativitas perusahaan"
            ],
            [
              "9",
              "Roblox",
              "Permainan berbasis pengalaman"
            ],
            [
              "10",
              "Zipline",
              "Pengiriman barang penting"
            ]
          ],
          "caption": "[hal. 274]",
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Exhibit 8.3 menyebut daftar Fast Company 2021. Remember This pada hal. 277 menyebut daftar 2020 dan kelompok perusahaan berbeda. Catat kedua lokasi secara terpisah; tabel ini mempertahankan tahun/cakupan Exhibit 8.3. [hal. 274, 277]"
        }
      ]
    },
    {
      "kind": "self-check",
      "question": "Apakah mempunyai pegawai kreatif sudah cukup untuk menjalankan inovasi?",
      "answer": [
        {
          "kind": "p",
          "text": "Discovery menyediakan ide; organisasi juga memerlukan koordinasi, sumber luar yang relevan, pemilik gagasan dan struktur implementasi. [hal. 272–281]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "5. Hubungan horizontal dan open innovation"
    },
    {
      "kind": "p",
      "text": "Riset bisa mengetahui teknologi yang belum dipahami pemasaran, sedangkan pemasaran mengetahui kebutuhan pelanggan. Manufacturing menilai apakah ide dapat diproduksi dalam batas biaya. Pertukaran dua arah membantu ketiga fungsi mengembangkan solusi bersama. [hal. 277–280]"
    },
    {
      "kind": "figure",
      "title": "Coordination Model for Innovation",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 1000 600\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-4-d-t MNU108-09-8-4-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-4-d-t\">Coordination Model for Innovation</title><desc id=\"MNU108-09-8-4-d-d\">Sumber luar memberi masukan organisasi. Riset, manufaktur dan pemasaran saling bertukar informasi dua arah.</desc><defs><marker id=\"MNU108-09-8-4-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"1000\" height=\"600\" rx=\"12\"/><rect class=\"svg-subcard\" x=\"245\" y=\"20\" width=\"510\" height=\"370\" rx=\"20\"/><rect class=\"svg-card\" x=\"18\" y=\"30\" width=\"220\" height=\"49.650000000000006\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"54\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">New technologies</tspan></text><rect class=\"svg-card\" x=\"762\" y=\"30\" width=\"220\" height=\"75.30000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"776\" y=\"54\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"776\" dy=\"0\">Open innovation</tspan><tspan x=\"776\" dy=\"25.650000000000002\">mechanisms</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"420\" width=\"220\" height=\"75.30000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"444\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Formal innovation</tspan><tspan x=\"32\" dy=\"25.650000000000002\">partners</tspan></text><rect class=\"svg-card\" x=\"762\" y=\"420\" width=\"220\" height=\"75.30000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"776\" y=\"444\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"776\" dy=\"0\">Customers, market</tspan><tspan x=\"776\" dy=\"25.650000000000002\">needs</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-start=\"url(#MNU108-09-8-4-d-arrow)\" marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M500 180.9 L360 227\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-start=\"url(#MNU108-09-8-4-d-arrow)\" marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M500 180.9 L640 227\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-start=\"url(#MNU108-09-8-4-d-arrow)\" marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M473 290 L527 290\"/><rect class=\"svg-card\" x=\"390\" y=\"40\" width=\"220\" height=\"137.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"404\" y=\"64\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"404\" dy=\"0\">Research</tspan><tspan x=\"404\" dy=\"25.650000000000002\">department</tspan></text><text class=\"svg-text\" x=\"404\" y=\"125.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"404\" dy=\"0\">Teknologi dan</tspan></text><text class=\"svg-text\" x=\"404\" y=\"149.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"404\" dy=\"0\">rancangan</tspan></text><rect class=\"svg-card\" x=\"250\" y=\"230\" width=\"220\" height=\"137.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"264\" y=\"254\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"264\" dy=\"0\">Manufacturing</tspan><tspan x=\"264\" dy=\"25.650000000000002\">department</tspan></text><text class=\"svg-text\" x=\"264\" y=\"315.3\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"264\" dy=\"0\">Kelayakan produksi</tspan></text><text class=\"svg-text\" x=\"264\" y=\"339.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"264\" dy=\"0\">dan biaya</tspan></text><rect class=\"svg-card\" x=\"530\" y=\"230\" width=\"220\" height=\"162.20000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"544\" y=\"254\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"544\" dy=\"0\">Marketing</tspan><tspan x=\"544\" dy=\"25.650000000000002\">department</tspan></text><text class=\"svg-text\" x=\"544\" y=\"315.3\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"544\" dy=\"0\">Kebutuhan</tspan></text><text class=\"svg-text\" x=\"544\" y=\"339.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"544\" dy=\"0\">pelanggan dan</tspan></text><text class=\"svg-text\" x=\"544\" y=\"363.90000000000003\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"544\" dy=\"0\">pasar</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M238 100 L245 140\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M762 100 L755 140\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M238 460 L300 390\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-4-d-arrow)\" d=\"M762 460 L700 390\"/></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 836.45\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-4-m-t MNU108-09-8-4-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-4-m-t\">Coordination Model for Innovation</title><desc id=\"MNU108-09-8-4-m-d\">Sumber luar memberi masukan organisasi. Riset, manufaktur dan pemasaran saling bertukar informasi dua arah.</desc><defs><marker id=\"MNU108-09-8-4-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"836.45\" rx=\"12\"/><text class=\"svg-title\" x=\"18\" y=\"25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Masukan dari luar organisasi</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"63\" width=\"324\" height=\"46.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"87\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">New technologies</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"121.95\" width=\"324\" height=\"46.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"145.95\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Open innovation mechanisms</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"180.9\" width=\"324\" height=\"46.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"204.9\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Formal innovation partners</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"239.85000000000002\" width=\"324\" height=\"46.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"263.85\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Customers, market needs</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-4-m-arrow)\" d=\"M180 298.8 L180 328.8\"/><text class=\"svg-title\" x=\"18\" y=\"353.8\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Di dalam organisasi: saling</tspan><tspan x=\"18\" dy=\"21.6\">bertukar informasi</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"418.8\" width=\"324\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"442.8\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Research department</tspan></text><text class=\"svg-text\" x=\"32\" y=\"475.75\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Teknologi dan rancangan</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"516.35\" width=\"324\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"540.35\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Manufacturing department</tspan></text><text class=\"svg-text\" x=\"32\" y=\"573.3000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kelayakan produksi dan biaya</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"613.9000000000001\" width=\"324\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"637.9000000000001\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Marketing department</tspan></text><text class=\"svg-text\" x=\"32\" y=\"670.8500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kebutuhan pelanggan dan pasar</tspan></text><text class=\"svg-text\" x=\"18\" y=\"727.45\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Research, manufacturing dan</tspan><tspan x=\"18\" dy=\"21.6\">marketing saling terhubung dua</tspan><tspan x=\"18\" dy=\"21.6\">arah. Kartu menguraikan peran,</tspan><tspan x=\"18\" dy=\"21.6\">tanpa urutan waktu.</tspan></text></svg>",
      "altText": "Sumber luar memberi masukan organisasi. Riset, manufaktur dan pemasaran saling bertukar informasi dua arah.",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 278].",
      "overview": {
        "heading": "Coordination Model for Innovation",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "table",
      "title": "Batas pencarian ide",
      "headers": [
        "Pendekatan",
        "Makna"
      ],
      "rows": [
        [
          "Closed innovation",
          "Ide dikembangkan dan dikomersialkan terutama di dalam perusahaan."
        ],
        [
          "Open innovation",
          "Pencarian dan komersialisasi melampaui batas organisasi/industri."
        ],
        [
          "Crowdsourcing",
          "Informasi, ide atau opini diperoleh dari kelompok besar."
        ],
        [
          "Internal crowdsourcing",
          "Pegawai mengusulkan ide dan ikut menilai proyek di dalam organisasi."
        ],
        [
          "Innovation by acquisition",
          "Perusahaan membeli start-up untuk memperoleh inovasi dan sering juga talenta."
        ]
      ],
      "caption": "[hal. 279–280]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Dalam contoh Pringles, P&G menemukan teknologi cetak makanan dari sebuah bakery melalui jaringan luar. Pelajaran contoh ini adalah pencarian kompetensi melampaui organisasi; keberhasilan satu proyek tidak menjamin semua kerja sama luar akan berhasil. [hal. 279]"
    },
    {
      "kind": "self-check",
      "question": "Apa beda horizontal collaboration dan open innovation?",
      "answer": [
        {
          "kind": "p",
          "text": "Horizontal collaboration menghubungkan fungsi dalam organisasi. Open innovation memperluas pencarian/pengembangan dan komersialisasi kepada pihak luar; keduanya dapat berlangsung bersama. [hal. 277–280]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "6. Peran dan struktur yang membawa gagasan"
    },
    {
      "kind": "p",
      "text": "Ide membutuhkan orang yang mempertahankannya serta ruang untuk dikembangkan. Corporate intrapreneurship membangun semangat dan struktur kewirausahaan di dalam perusahaan. Bentuk dukungannya mempunyai fungsi berbeda. [hal. 280–282]"
    },
    {
      "kind": "table",
      "title": "Pilih fungsi dukungan yang dibutuhkan",
      "headers": [
        "Istilah",
        "Fungsi"
      ],
      "rows": [
        [
          "Idea champion",
          "Orang yang melihat kebutuhan dan memperjuangkan perubahan produktif."
        ],
        [
          "Idea incubator",
          "Program/pusat yang melindungi pengembangan ide dari birokrasi dan politik."
        ],
        [
          "New-venture team",
          "Unit terpisah yang mengembangkan dan memulai inovasi penting."
        ],
        [
          "Skunkworks",
          "Tim kecil, informal, sangat otonom, dan sering rahasia untuk ide terobosan."
        ],
        [
          "In-house venture",
          "Start-up yang diluncurkan di dalam perusahaan untuk menumbuhkan bisnis dan kewirausahaan."
        ]
      ],
      "caption": "[hal. 280–282]",
      "stackOnMobile": true
    },
    {
      "kind": "self-check",
      "question": "Mengapa idea champion tidak sama dengan idea incubator?",
      "answer": [
        {
          "kind": "p",
          "text": "Champion adalah orang yang memberi energi dan dukungan terhadap gagasan. Incubator adalah mekanisme/program organisasi untuk mengembangkan gagasan. [hal. 280–282]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "7. Mengubah people dan culture melalui OD"
    },
    {
      "kind": "p",
      "text": "Pelatihan dapat memperbaiki kemampuan dan sikap orang. Organization development memakai pengetahuan behavioral science untuk perubahan terencana dan sistematis pada relasi, sikap serta budaya. OD juga dapat membangun keterbukaan dan kepercayaan, sehingga organisasi lebih siap menyesuaikan diri. [hal. 282–285]"
    },
    {
      "kind": "table",
      "title": "Tiga teknik OD",
      "headers": [
        "Teknik",
        "Cara kerja"
      ],
      "rows": [
        [
          "Team building",
          "Melatih anggota kelompok bekerja bersama, berkomunikasi dan menyepakati tujuan."
        ],
        [
          "Survey feedback",
          "Mengumpulkan pendapat pegawai, membagikan hasil dan menyelesaikan masalah berdasarkan data."
        ],
        [
          "Large-group intervention",
          "Mengumpulkan berbagai bagian organisasi, sering juga pemangku kepentingan luar, untuk menyusun perubahan bersama."
        ]
      ],
      "caption": "[hal. 283–284]",
      "stackOnMobile": true
    },
    {
      "kind": "figure",
      "title": "OD Approaches to Culture Change",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 1000 234.15000000000003\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-5-d-t MNU108-09-8-5-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-5-d-t\">OD Approaches to Culture Change</title><desc id=\"MNU108-09-8-5-d-d\">Dua pendekatan OD dibandingkan menurut lingkup tindakan, informasi, waktu, pembelajaran dan proses perubahan.</desc><defs><marker id=\"MNU108-09-8-5-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"1000\" height=\"234.15000000000003\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"24\" width=\"467\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"38\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Traditional OD</tspan></text><text class=\"svg-text\" x=\"38\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Masalah/kelompok tertentu</tspan></text><text class=\"svg-text\" x=\"38\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Informasi organisasi terbatas</tspan></text><text class=\"svg-text\" x=\"38\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Bertahap; pembelajaran individu/kelompok</tspan></text><text class=\"svg-text\" x=\"38\" y=\"156.55\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Incremental change</tspan></text><rect class=\"svg-card\" x=\"509\" y=\"24\" width=\"467\" height=\"185.15000000000003\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"523\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Large-group intervention</tspan></text><text class=\"svg-text\" x=\"523\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Seluruh sistem dan lingkungannya</tspan></text><text class=\"svg-text\" x=\"523\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Informasi dibagikan luas</tspan></text><text class=\"svg-text\" x=\"523\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Lebih cepat; pembelajaran seluruh</tspan></text><text class=\"svg-text\" x=\"523\" y=\"156.55\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">organisasi</tspan></text><text class=\"svg-text\" x=\"523\" y=\"180.85000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Rapid transformation</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 536.3000000000001\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-5-m-t MNU108-09-8-5-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-5-m-t\">OD Approaches to Culture Change</title><desc id=\"MNU108-09-8-5-m-d\">Dua pendekatan OD dibandingkan menurut lingkup tindakan, informasi, waktu, pembelajaran dan proses perubahan.</desc><defs><marker id=\"MNU108-09-8-5-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"536.3000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"190.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Traditional OD</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Masalah/kelompok tertentu</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Informasi organisasi</tspan></text><text class=\"svg-text\" x=\"32\" y=\"120.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">terbatas</tspan></text><text class=\"svg-text\" x=\"32\" y=\"141.75\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Bertahap; pembelajaran</tspan></text><text class=\"svg-text\" x=\"32\" y=\"163.35000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">individu/kelompok</tspan></text><text class=\"svg-text\" x=\"32\" y=\"184.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Incremental change</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"244.55\" width=\"296\" height=\"190.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"268.55\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Large-group intervention</tspan></text><text class=\"svg-text\" x=\"32\" y=\"301.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Seluruh sistem dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"323.1\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">lingkungannya</tspan></text><text class=\"svg-text\" x=\"32\" y=\"344.7\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Informasi dibagikan luas</tspan></text><text class=\"svg-text\" x=\"32\" y=\"366.3\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Lebih cepat; pembelajaran</tspan></text><text class=\"svg-text\" x=\"32\" y=\"387.9\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">seluruh organisasi</tspan></text><text class=\"svg-text\" x=\"32\" y=\"409.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Rapid transformation</tspan></text><text class=\"svg-text\" x=\"18\" y=\"469.1\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Cabang-cabang berkontribusi</tspan><tspan x=\"18\" dy=\"21.6\">bersama.</tspan></text></svg>",
      "altText": "Dua pendekatan OD dibandingkan menurut lingkup tindakan, informasi, waktu, pembelajaran dan proses perubahan.",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 284].",
      "overview": {
        "heading": "OD Approaches to Culture Change",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "self-check",
      "question": "Kapan organisasi memerlukan large-group intervention?",
      "answer": [
        {
          "kind": "p",
          "text": "Saat perubahan berkaitan dengan seluruh sistem dan memerlukan perspektif serta keputusan lintas bagian. Luasnya peserta sendiri tidak menjamin keberhasilan; proses dialog dan tindak lanjut tetap penting. [hal. 282–285]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "8. Lewin, resistensi dan taktik implementasi"
    },
    {
      "kind": "p",
      "text": "Penolakan dapat mengungkap masalah implementasi yang belum terlihat. Sebelum memilih taktik, periksa sumber kekhawatiran dan siapa yang terdampak. Model Lewin membantu mengurus kesiapan, pembelajaran perilaku baru dan penguatannya. [hal. 285–290]"
    },
    {
      "kind": "figure",
      "title": "Lewin's Three-Stage Model for Implementing Change",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 487.05\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-6-d-t MNU108-09-8-6-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-6-d-t\">Lewin's Three-Stage Model for Implementing Change</title><desc id=\"MNU108-09-8-6-d-d\">Tiga tahap: membangun kesiapan, menerapkan/mempelajari perubahan, kemudian mengevaluasi serta memperkuatnya.</desc><defs><marker id=\"MNU108-09-8-6-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"487.05\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"644\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Unfreezing</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Diagnosis masalah atau peluang</tspan></text><text class=\"svg-text\" x=\"42\" y=\"103.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kenali kebutuhan dan bangun motivasi berubah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-6-d-arrow)\" d=\"M350 135.25 L350 162.25\"/><rect class=\"svg-card\" x=\"28\" y=\"166.25\" width=\"644\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"190.25\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Changing</tspan></text><text class=\"svg-text\" x=\"42\" y=\"225.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Rencanakan dan komunikasikan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"250.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Latih perilaku/keterampilan baru lalu implementasikan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-6-d-arrow)\" d=\"M350 281.5 L350 308.5\"/><rect class=\"svg-card\" x=\"28\" y=\"312.5\" width=\"644\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"336.5\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Refreezing</tspan></text><text class=\"svg-text\" x=\"42\" y=\"372.15\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Hargai perilaku baru dan evaluasi dampaknya</tspan></text><text class=\"svg-text\" x=\"42\" y=\"396.45\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Rayakan keberhasilan serta masukkan perubahan ke kebiasaan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"420.75\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">kerja</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 546.45\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-09-8-6-m-t MNU108-09-8-6-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-09-8-6-m-t\">Lewin's Three-Stage Model for Implementing Change</title><desc id=\"MNU108-09-8-6-m-d\">Tiga tahap: membangun kesiapan, menerapkan/mempelajari perubahan, kemudian mengevaluasi serta memperkuatnya.</desc><defs><marker id=\"MNU108-09-8-6-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"546.45\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"324\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Unfreezing</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Diagnosis masalah atau peluang</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kenali kebutuhan dan bangun</tspan></text><text class=\"svg-text\" x=\"32\" y=\"120.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">motivasi berubah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-6-m-arrow)\" d=\"M180 148.75 L180 175.75\"/><rect class=\"svg-card\" x=\"18\" y=\"179.75\" width=\"324\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"203.75\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Changing</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.7\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Rencanakan dan komunikasikan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"258.3\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Latih perilaku/keterampilan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"279.9\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">baru lalu implementasikan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-09-8-6-m-arrow)\" d=\"M180 308.5 L180 335.5\"/><rect class=\"svg-card\" x=\"18\" y=\"339.5\" width=\"324\" height=\"168.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"363.5\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Refreezing</tspan></text><text class=\"svg-text\" x=\"32\" y=\"396.45\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Hargai perilaku baru dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"418.05\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">evaluasi dampaknya</tspan></text><text class=\"svg-text\" x=\"32\" y=\"439.65\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Rayakan keberhasilan serta</tspan></text><text class=\"svg-text\" x=\"32\" y=\"461.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">masukkan perubahan ke kebiasaan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"482.85\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">kerja</tspan></text></svg>",
      "altText": "Tiga tahap: membangun kesiapan, menerapkan/mempelajari perubahan, kemudian mengevaluasi serta memperkuatnya.",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 285–286].",
      "overview": {
        "heading": "Lewin's Three-Stage Model for Implementing Change",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "table",
      "title": "Diagnosis alasan resistensi",
      "headers": [
        "Alasan",
        "Apa yang diperiksa"
      ],
      "rows": [
        [
          "Self-interest",
          "Kehilangan atau beban yang dipersepsikan: kekuasaan, prestise, pendapatan atau tugas."
        ],
        [
          "Lack of understanding and trust",
          "Tujuan perubahan dan kepercayaan terhadap pengusul."
        ],
        [
          "Uncertainty",
          "Informasi mengenai dampak dan kemampuan menjalankan cara baru."
        ],
        [
          "Different assessments and goals",
          "Perbedaan penilaian manfaat/risiko serta tujuan antardepartemen."
        ]
      ],
      "caption": "[hal. 286–287]",
      "stackOnMobile": true
    },
    {
      "kind": "table",
      "title": "Tactics for Implementing Change",
      "headers": [
        "Taktik",
        "Situasi dalam Exhibit 8.7"
      ],
      "rows": [
        [
          "Top management support",
          "Lintas departemen, alokasi ulang sumber daya atau legitimasi diragukan."
        ],
        [
          "Communication and education",
          "Perubahan teknis atau pengguna memerlukan informasi/analisis."
        ],
        [
          "Participation",
          "Pengguna perlu terlibat, mempunyai informasi, atau dapat menolak."
        ],
        [
          "Negotiation",
          "Kelompok berkuasa atas implementasi atau akan kehilangan manfaat."
        ],
        [
          "Coercion",
          "Krisis; pengusul memiliki kuasa; teknik lain gagal."
        ]
      ],
      "caption": "[hal. 289–290]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Sense of urgency membantu orang memahami kebutuhan perubahan. Pilih informasi dan gambaran yang membuat kebutuhan itu terasa, lalu tanggapi kekhawatiran dengan taktik yang cocok. Coercion dapat memaksa penerimaan, tetapi membawa risiko bagi dukungan terhadap perubahan. [hal. 287–291]"
    },
    {
      "kind": "self-check",
      "question": "Apa kesalahan bila manajer memakai coercion sebagai jawaban awal bagi semua resistensi?",
      "answer": [
        {
          "kind": "p",
          "text": "Paksaan belum menjawab kurangnya pemahaman, informasi atau penilaian risiko yang sah. Buku menempatkannya dalam kondisi krisis, adanya kuasa dan kegagalan teknik lain, sehingga diagnosis harus mendahului pemilihan taktik. [hal. 285–290]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "Persiapan ujian"
    },
    {
      "kind": "table",
      "title": "Jangan tertukar",
      "headers": [
        "Istilah",
        "Pembeda"
      ],
      "rows": [
        [
          "Creativity / innovation",
          "Ide baru / ide sekaligus diterapkan."
        ],
        [
          "Product / process innovation",
          "Keluaran pelanggan / cara menghasilkan keluaran."
        ],
        [
          "Champion / incubator",
          "Orang pendukung / program pengembangan."
        ],
        [
          "People / culture change",
          "Beberapa orang / pola seluruh organisasi."
        ],
        [
          "Tahapan Lewin / taktik perubahan",
          "Proses kesiapan-penerapan-penguatan / cara menangani hambatan."
        ]
      ],
      "caption": "[hal. 268–290]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Prioritas latihan diturunkan dari RPP dan kasus Chopper's, tanpa klaim merupakan bocoran ujian. Gunakan bukti spesifik, jelaskan keputusan dan kelemahan alternatif. [hal. 295–296]"
    },
    {
      "kind": "solution-reveal",
      "title": "Chopper's Sausage House: MRP tertahan",
      "prompt": "Kasus buku yang ditugaskan RPP, diparafrasekan. Wakil presiden operasi mengembangkan proyek material requirements planning terutama seorang diri. Komite eksekutif menolak peluncuran: keuangan ragu, penjualan mempertanyakan perkiraan kebutuhan bahan, dan logistik mengingat gangguan di tempat kerja sebelumnya. CEO mengusulkan task force lintas departemen, tetapi pengusul merasa tim itu akan memperlambat proyek. [hal. 285–290, 295–296]",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Jelaskan resistensi dengan bukti yang berbeda untuk tiap pihak.",
            "Nilai kegunaan task force lintas departemen.",
            "Pilih taktik implementasi dan susun tahapan Lewin yang dapat dievaluasi."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil analisis untuk pembanding jawaban: 1. Kekhawatiran penjualan/logistik menunjukkan penilaian manfaat dan risiko yang berbeda; riwayat implementasi gagal mendukung ketidakpercayaan atau ketidakpastian. Ketidakhadiran merupakan tanda keterlibatan lemah, tetapi teks tidak membuktikan semua pihak sengaja menyabotase. 2. Task force menambah informasi dari pengguna dan koordinasi, serta membantu menguji kebutuhan bahan, forecast dan pengiriman. Waktu rapat adalah biaya yang perlu ditimbang terhadap risiko peluncuran sepihak. 3. Dukungan CEO memberi legitimasi; komunikasi/pendidikan menjawab kekhawatiran teknis; participation melibatkan pengguna dalam rancangan. Unfreezing menguji kebutuhan serta masalah, changing melakukan uji coba/pelatihan, refreezing mengevaluasi dan mempertahankan perilaku yang berhasil. Memaksa peluncuran sebelum kendala diketahui dapat meningkatkan risiko operasi. Perkiraan kas/penghematan perlu diuji dan tidak otomatis dijumlahkan sebagai manfaat bersih. [hal. 285–290, 295–296]"
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan: ide banyak, penerapan tersendat",
      "prompt": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Sebuah unit layanan menerima usulan perbaikan antrean dari staf. Tim kreatif bebas menguji ide, tetapi belum ada pemilik implementasi dan koordinasi antara layanan, teknologi dan administrasi. Staf khawatir cara baru akan menambah pekerjaan. [hal. 270–281, 285–290]",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Pisahkan kebutuhan exploration dan exploitation.",
            "Pilih peran/struktur untuk membawa ide ke penerapan.",
            "Rancang diagnosis resistensi dan indikator keberhasilan."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil analisis untuk pembanding jawaban: Exploration memerlukan kesempatan mencoba gagasan; exploitation memerlukan rutinitas, tanggung jawab dan dukungan implementasi. Idea champion dapat membawa gagasan dan membangun dukungan, sementara hubungan horizontal menyelaraskan kebutuhan pengguna dan kelayakan teknis. Libatkan staf untuk memetakan beban kerja dan lakukan pelatihan sebelum penggunaan penuh. Evaluasi waktu layanan, kesalahan dan beban kerja dengan ukuran awal yang disepakati. Menambah kontes ide tanpa pemilik implementasi tidak menyelesaikan hambatan tersebut; penggunaan paksaan tanpa diagnosis dapat menurunkan keterlibatan. [hal. 270–281, 285–290]"
        }
      ]
    }
  ]
};
