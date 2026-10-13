// Generated from MNU108 TM15 canonical 04. Edit the source package and run build-mnu108-pra-uas.
import type {Reading} from '../../../types';
export const TM15_READING: Reading = {
  "tm": 15,
  "title": "Managing Quality and Performance",
  "ref": "Daft dan Marcic, Understanding Management 12e (2023), Ch. 15, hal. 544–575 (PDF 572–603); RPP Excel 2026, TM 15.",
  "intro": "Angka performance memberi sinyal, tetapi keputusan memerlukan standards, data yang valid dan diagnosis. Hubungkan quality, scorecard, budget serta financial ratios untuk memilih koreksi yang tepat.",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "Feedback control: standards, measure, compare, action.",
    "Balanced scorecard menghubungkan empat perspektif dengan mission/goals.",
    "Hierarchical dan decentralized dapat dipadukan; algorithmic control tetap perlu review.",
    "TQM memasukkan quality dan continuous improvement ke seluruh aktivitas.",
    "Budget memeriksa resources serta timing, bukan pengeluaran saja.",
    "Financial ratios membutuhkan definisi dan data yang sesuai."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Kilat: Managing Quality and Performance"
    },
    {
      "kind": "figure",
      "title": "Pengendalian sebagai siklus belajar",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 389.84999999999997\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-OV-d-t MNU108-15-OV-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-OV-d-t\">Pengendalian sebagai siklus belajar</title><desc id=\"MNU108-15-OV-d-d\">Pengendalian sebagai siklus belajar. Strategy dan standards; Evidence dan comparison; Diagnosis dan tindakan</desc><defs><marker id=\"MNU108-15-OV-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"389.84999999999997\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Strategy dan standards</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Pilih target serta metric relevan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-OV-d-arrow)\" d=\"M336 110.95 L336 137.95\"/><rect class=\"svg-card\" x=\"28\" y=\"141.95\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"165.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Evidence dan comparison</tspan></text><text class=\"svg-text\" x=\"42\" y=\"201.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Ukur quality, customer, finance, learning</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-OV-d-arrow)\" d=\"M336 232.89999999999998 L336 259.9\"/><rect class=\"svg-card\" x=\"28\" y=\"263.9\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"287.9\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Diagnosis dan tindakan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"323.54999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Perbaiki proses/resources atau standard dengan alasan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-OV-d-arrow)\" d=\"M644 307.875 H687 V63.975 H646\"/></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 438.45000000000005\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-OV-m-t MNU108-15-OV-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-OV-m-t\">Pengendalian sebagai siklus belajar</title><desc id=\"MNU108-15-OV-m-d\">Pengendalian sebagai siklus belajar. Strategy dan standards; Evidence dan comparison; Diagnosis dan tindakan</desc><defs><marker id=\"MNU108-15-OV-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"438.45000000000005\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Strategy dan standards</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Pilih target serta metric</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">relevan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-OV-m-arrow)\" d=\"M166 127.15 L166 154.15\"/><rect class=\"svg-card\" x=\"18\" y=\"158.15\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"182.15\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Evidence dan comparison</tspan></text><text class=\"svg-text\" x=\"32\" y=\"215.10000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Ukur quality, customer,</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.70000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">finance, learning</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-OV-m-arrow)\" d=\"M166 265.3 L166 292.3\"/><rect class=\"svg-card\" x=\"18\" y=\"296.3\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"320.3\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Diagnosis dan tindakan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"353.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Perbaiki proses/resources</tspan></text><text class=\"svg-text\" x=\"32\" y=\"374.85\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">atau standard dengan alasan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-OV-m-arrow)\" d=\"M314 348.375 H347 V72.075 H316\"/></svg>",
      "altText": "Pengendalian sebagai siklus belajar. Strategy dan standards; Evidence dan comparison; Diagnosis dan tindakan",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 546–570].",
      "overview": {
        "heading": "Pengendalian sebagai siklus belajar",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "ul",
      "items": [
        "Feedback control: standards, measure, compare, action.",
        "Balanced scorecard menghubungkan empat perspektif dengan mission/goals.",
        "Hierarchical dan decentralized dapat dipadukan; algorithmic control tetap perlu review.",
        "TQM memasukkan quality dan continuous improvement ke seluruh aktivitas.",
        "Budget memeriksa resources serta timing, bukan pengeluaran saja.",
        "Financial ratios membutuhkan definisi dan data yang sesuai."
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
              "Variance",
              "Selisih actual performance dari standards."
            ],
            [
              "Benchmarking",
              "Perbandingan products/services/practices untuk perbaikan."
            ],
            [
              "Responsibility center",
              "Unit di bawah orang yang bertanggung jawab atas aktivitasnya."
            ],
            [
              "Leverage",
              "Penggunaan pendanaan utang dan risikonya."
            ]
          ],
          "caption": "Daft dan Marcic, Understanding Management 12e (2023), Ch. 15, hal. 544–575 (PDF 572–603); RPP Excel 2026, TM 15.",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "h2",
      "text": "2. Organizational control dan empat langkah feedback"
    },
    {
      "kind": "p",
      "text": "Control adalah proses sistematis mengatur aktivitas agar konsisten dengan plans, targets dan standards. Informasi yang benar serta ukuran relevan membantu manajer memeriksa apakah tindakan mendukung strategic goals. Tidak semua hal penting mudah dihitung, sehingga angka memerlukan penafsiran serta diskusi. [hal. 546–551]"
    },
    {
      "kind": "figure",
      "title": "Feedback Control Model",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 632.9999999999999\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-15-1-d-t MNU108-15-15-1-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-15-1-d-t\">Feedback Control Model</title><desc id=\"MNU108-15-15-1-d-d\">Feedback Control Model. Strategic goals → 1. Establish standards; 2. Measure actual performance; 3. Compare performance to standards; 4. Pilih tindakan</desc><defs><marker id=\"MNU108-15-15-1-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"632.9999999999999\" rx=\"12\"/><rect class=\"svg-card\" x=\"35\" y=\"22\" width=\"630\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"46\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Strategic goals → 1. Establish standards</tspan></text><text class=\"svg-text\" x=\"49\" y=\"81.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Standar operasional yang jelas serta relevan strategy</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-d-arrow)\" d=\"M350 111.95 L350 140.95\"/><rect class=\"svg-card\" x=\"35\" y=\"143.95\" width=\"630\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"167.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">2. Measure actual performance</tspan></text><text class=\"svg-text\" x=\"49\" y=\"203.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Data akurat pada periode yang sesuai</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-d-arrow)\" d=\"M350 233.89999999999998 L350 262.9\"/><rect class=\"svg-card\" x=\"35\" y=\"265.9\" width=\"630\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"289.9\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">3. Compare performance to standards</tspan></text><text class=\"svg-text\" x=\"49\" y=\"325.54999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Periksa variance dan penyebabnya</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-d-arrow)\" d=\"M350 356.84999999999997 L189 384.84999999999997\"/><rect class=\"svg-card\" x=\"35\" y=\"387.84999999999997\" width=\"308\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"411.84999999999997\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Adequate</tspan></text><text class=\"svg-text\" x=\"49\" y=\"447.49999999999994\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">4. Do nothing atau</tspan></text><text class=\"svg-text\" x=\"49\" y=\"471.79999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">reinforcement</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-d-arrow)\" d=\"M350 356.84999999999997 L511 384.84999999999997\"/><rect class=\"svg-card\" x=\"357\" y=\"387.84999999999997\" width=\"308\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"411.84999999999997\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Inadequate</tspan></text><text class=\"svg-text\" x=\"371\" y=\"447.49999999999994\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">4. Take corrective action</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-15-1-d-arrow)\" d=\"M665 431.825 H690 V65.975 H667\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-15-1-d-arrow)\" d=\"M35 443.97499999999997 H10 V187.92499999999998 H33\"/><text class=\"svg-text\" x=\"20\" y=\"535.0999999999999\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Feedback dapat menyesuaikan performance atau standards setelah</tspan><tspan x=\"20\" dy=\"24.3\">diagnosis. Adequate bukan alasan wajib mengubah proses; target</tspan><tspan x=\"20\" dy=\"24.3\">tidak diturunkan hanya untuk menyembunyikan selisih.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 863.8500000000001\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-15-1-m-t MNU108-15-15-1-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-15-1-m-t\">Feedback Control Model</title><desc id=\"MNU108-15-15-1-m-d\">Feedback Control Model. Strategic goals → 1. Establish standards; 2. Measure actual performance; 3. Compare performance to standards; 4. Pilih tindakan</desc><defs><marker id=\"MNU108-15-15-1-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"863.8500000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"35\" y=\"22\" width=\"290\" height=\"148.70000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"46\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Strategic goals → 1.</tspan><tspan x=\"49\" dy=\"22.950000000000003\">Establish standards</tspan></text><text class=\"svg-text\" x=\"49\" y=\"101.9\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Standar operasional yang</tspan></text><text class=\"svg-text\" x=\"49\" y=\"123.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">jelas serta relevan</tspan></text><text class=\"svg-text\" x=\"49\" y=\"145.10000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">strategy</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-m-arrow)\" d=\"M180 172.70000000000002 L180 201.70000000000002\"/><rect class=\"svg-card\" x=\"35\" y=\"204.70000000000002\" width=\"290\" height=\"127.10000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"228.70000000000002\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">2. Measure actual</tspan><tspan x=\"49\" dy=\"22.950000000000003\">performance</tspan></text><text class=\"svg-text\" x=\"49\" y=\"284.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Data akurat pada periode</tspan></text><text class=\"svg-text\" x=\"49\" y=\"306.20000000000005\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">yang sesuai</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-m-arrow)\" d=\"M180 333.8 L180 362.80000000000007\"/><rect class=\"svg-card\" x=\"35\" y=\"365.80000000000007\" width=\"290\" height=\"127.10000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"389.80000000000007\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">3. Compare performance to</tspan><tspan x=\"49\" dy=\"22.950000000000003\">standards</tspan></text><text class=\"svg-text\" x=\"49\" y=\"445.70000000000005\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Periksa variance dan</tspan></text><text class=\"svg-text\" x=\"49\" y=\"467.30000000000007\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">penyebabnya</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-m-arrow)\" d=\"M180 495.9000000000001 L104 523.9000000000001\"/><rect class=\"svg-card\" x=\"35\" y=\"526.9000000000001\" width=\"138\" height=\"147.35000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"49\" y=\"550.9000000000001\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">Adequate</tspan></text><text class=\"svg-text\" x=\"49\" y=\"583.8500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">4. Do</tspan></text><text class=\"svg-text\" x=\"49\" y=\"605.4500000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">nothing</tspan></text><text class=\"svg-text\" x=\"49\" y=\"627.0500000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">atau</tspan></text><text class=\"svg-text\" x=\"49\" y=\"648.6500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"49\" dy=\"0\">reinforcement</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-1-m-arrow)\" d=\"M180 495.9000000000001 L256 523.9000000000001\"/><rect class=\"svg-card\" x=\"187\" y=\"526.9000000000001\" width=\"138\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"550.9000000000001\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Inadequate</tspan></text><text class=\"svg-text\" x=\"201\" y=\"583.8500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">4. Take</tspan></text><text class=\"svg-text\" x=\"201\" y=\"605.4500000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">corrective</tspan></text><text class=\"svg-text\" x=\"201\" y=\"627.0500000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">action</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-15-1-m-arrow)\" d=\"M325 589.7750000000001 H350 V96.35000000000001 H327\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-15-1-m-arrow)\" d=\"M35 600.575 H10 V268.25 H33\"/><text class=\"svg-text\" x=\"20\" y=\"709.2500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Feedback dapat menyesuaikan</tspan><tspan x=\"20\" dy=\"21.6\">performance atau standards</tspan><tspan x=\"20\" dy=\"21.6\">setelah diagnosis. Adequate bukan</tspan><tspan x=\"20\" dy=\"21.6\">alasan wajib mengubah proses;</tspan><tspan x=\"20\" dy=\"21.6\">target tidak diturunkan hanya</tspan><tspan x=\"20\" dy=\"21.6\">untuk menyembunyikan selisih.</tspan></text></svg>",
      "altText": "Feedback Control Model. Strategic goals → 1. Establish standards; 2. Measure actual performance; 3. Compare performance to standards; 4. Pilih tindakan",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 549–551].",
      "overview": {
        "heading": "Feedback Control Model",
        "cards": [],
        "footer": "Feedback dapat menyesuaikan performance atau standards setelah diagnosis. Adequate bukan alasan wajib mengubah proses; target tidak diturunkan hanya untuk menyembunyikan selisih."
      }
    },
    {
      "kind": "p",
      "text": "Contoh Hershey dalam sumber: keluhan konsumen tentang ujung Kisses yang hilang memberi feedback mengenai penyimpangan quality. Manajer menyelidiki penyebab dan perubahan proses yang diperlukan. Ini menunjukkan peran customer evidence, tanpa mengklaim semua keluhan otomatis membuktikan penyebab tunggal. [hal. 551]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa selisih target dan aktual perlu ditelusuri sebelum tindakan?",
      "answer": [
        {
          "kind": "p",
          "text": "Ukuran, keadaan, kemampuan dan proses dapat berbeda. Diagnosis membedakan sebab yang memerlukan perubahan performance dari standard yang perlu ditinjau. [hal. 546–551]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "3. Balanced scorecard: mission menjadi ukuran serta tindakan"
    },
    {
      "kind": "p",
      "text": "Balanced scorecard melengkapi financial measures dengan customer service, internal business processes dan learning/growth. Perspektif berangkat dari mission/goals; tiap area memakai targets, measures, outcomes dan corrections. Empat kolom angka tanpa kaitan strategy belum menjadi pengelolaan performance yang baik. [hal. 552–554]"
    },
    {
      "kind": "figure",
      "title": "Empat perspektif balanced scorecard",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 506.25\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-15-2-d-t MNU108-15-15-2-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-15-2-d-t\">Empat perspektif balanced scorecard</title><desc id=\"MNU108-15-15-2-d-d\">Empat perspektif balanced scorecard. Financial; Customers; Internal business processes; Learning and growth</desc><defs><marker id=\"MNU108-15-15-2-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"506.25\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Financial</tspan></text><text class=\"svg-text\" x=\"42\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Apakah tindakan memperbaiki</tspan></text><text class=\"svg-text\" x=\"42\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">financial performance?</tspan></text><text class=\"svg-text\" x=\"42\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Contoh sumber: net income</tspan></text><text class=\"svg-text\" x=\"42\" y=\"156.55\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">dan ROI</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Customers</tspan></text><text class=\"svg-text\" x=\"371\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Seberapa baik melayani</tspan></text><text class=\"svg-text\" x=\"371\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">customer?</tspan></text><text class=\"svg-text\" x=\"371\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Retention dan satisfaction</tspan></text><rect class=\"svg-card\" x=\"28\" y=\"198.85000000000002\" width=\"315\" height=\"186.5\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"222.85000000000002\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Internal business</tspan><tspan x=\"42\" dy=\"25.650000000000002\">processes</tspan></text><text class=\"svg-text\" x=\"42\" y=\"284.15000000000003\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Apakah proses memberi</tspan></text><text class=\"svg-text\" x=\"42\" y=\"308.45000000000005\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">nilai?</tspan></text><text class=\"svg-text\" x=\"42\" y=\"332.75000000000006\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Quality dan efisiensi</tspan></text><text class=\"svg-text\" x=\"42\" y=\"357.05000000000007\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">proses</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"198.85000000000002\" width=\"315\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"222.85000000000002\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Learning and growth</tspan></text><text class=\"svg-text\" x=\"371\" y=\"258.5\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Apakah belajar, berubah dan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"282.8\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">membaik?</tspan></text><text class=\"svg-text\" x=\"371\" y=\"307.1\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Kapabilitas serta</tspan></text><text class=\"svg-text\" x=\"371\" y=\"331.4\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">perkembangan</tspan></text><text class=\"svg-text\" x=\"28\" y=\"417.35\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Mission/goals mengarahkan empat perspektif. Tiap area:</tspan><tspan x=\"28\" dy=\"24.3\">targets → measures → outcomes → corrections. Tidak ada bobot</tspan><tspan x=\"28\" dy=\"24.3\">25% otomatis atau hubungan sebab numerik yang dijamin.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 631.8\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-15-2-m-t MNU108-15-15-2-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-15-2-m-t\">Empat perspektif balanced scorecard</title><desc id=\"MNU108-15-15-2-m-d\">Empat perspektif balanced scorecard. Financial; Customers; Internal business processes; Learning and growth</desc><defs><marker id=\"MNU108-15-15-2-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"631.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"221.6\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Financial</tspan></text><text class=\"svg-text\" x=\"34\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Apakah</tspan></text><text class=\"svg-text\" x=\"34\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">tindakan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">memperbaiki</tspan></text><text class=\"svg-text\" x=\"34\" y=\"140.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">financial</tspan></text><text class=\"svg-text\" x=\"34\" y=\"160.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">performance?</tspan></text><text class=\"svg-text\" x=\"34\" y=\"180.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Contoh sumber:</tspan></text><text class=\"svg-text\" x=\"34\" y=\"201.10000000000002\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">net income dan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"221.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">ROI</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"160.85\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Customers</tspan></text><text class=\"svg-text\" x=\"201\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Seberapa baik</tspan></text><text class=\"svg-text\" x=\"201\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">melayani</tspan></text><text class=\"svg-text\" x=\"201\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">customer?</tspan></text><text class=\"svg-text\" x=\"201\" y=\"140.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Retention dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"160.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">satisfaction</tspan></text><rect class=\"svg-card\" x=\"20\" y=\"259.6\" width=\"153\" height=\"204.05\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"283.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Internal</tspan><tspan x=\"34\" dy=\"21.6\">business</tspan><tspan x=\"34\" dy=\"21.6\">processes</tspan></text><text class=\"svg-text\" x=\"34\" y=\"358.40000000000003\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Apakah proses</tspan></text><text class=\"svg-text\" x=\"34\" y=\"378.65000000000003\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">memberi nilai?</tspan></text><text class=\"svg-text\" x=\"34\" y=\"398.90000000000003\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Quality dan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"419.15000000000003\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">efisiensi</tspan></text><text class=\"svg-text\" x=\"34\" y=\"439.40000000000003\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">proses</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"259.6\" width=\"153\" height=\"222.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"283.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Learning and</tspan><tspan x=\"201\" dy=\"21.6\">growth</tspan></text><text class=\"svg-text\" x=\"201\" y=\"336.8\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Apakah</tspan></text><text class=\"svg-text\" x=\"201\" y=\"357.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">belajar,</tspan></text><text class=\"svg-text\" x=\"201\" y=\"377.3\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">berubah dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"397.55\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">membaik?</tspan></text><text class=\"svg-text\" x=\"201\" y=\"417.8\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Kapabilitas</tspan></text><text class=\"svg-text\" x=\"201\" y=\"438.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">serta</tspan></text><text class=\"svg-text\" x=\"201\" y=\"458.3\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">perkembangan</tspan></text><text class=\"svg-text\" x=\"20\" y=\"511.55\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Mission/goals mengarahkan empat</tspan><tspan x=\"20\" dy=\"20.25\">perspektif. Tiap area: targets →</tspan><tspan x=\"20\" dy=\"20.25\">measures → outcomes → corrections.</tspan><tspan x=\"20\" dy=\"20.25\">Tidak ada bobot 25% otomatis atau</tspan><tspan x=\"20\" dy=\"20.25\">hubungan sebab numerik yang dijamin.</tspan></text></svg>",
      "altText": "Empat perspektif balanced scorecard. Financial; Customers; Internal business processes; Learning and growth",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 552–553].",
      "overview": {
        "heading": "Empat perspektif balanced scorecard",
        "cards": [],
        "footer": "Mission/goals mengarahkan empat perspektif. Tiap area: targets → measures → outcomes → corrections. Tidak ada bobot 25% otomatis atau hubungan sebab numerik yang dijamin."
      }
    },
    {
      "kind": "p",
      "text": "Balanced scorecard memerlukan waktu, komitmen dan pemilihan metric. Orientasi measurement saja dapat mengganggu kinerja jika target tidak terhubung strategy. Financial dan nonfinancial measures perlu dibaca bersama untuk melihat trade-offs. [hal. 553–554]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa penghematan biaya saja belum membuktikan layanan membaik?",
      "answer": [
        {
          "kind": "p",
          "text": "Financial result dapat meningkat sementara customer satisfaction, quality proses atau kemampuan pegawai menurun. Scorecard membantu melihat trade-offs tersebut. [hal. 552–554]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "4. Hierarchical, decentralized dan algorithmic control"
    },
    {
      "kind": "p",
      "text": "Hierarchical control banyak memakai rules, policies, authority, dokumentasi dan formal rewards. Decentralized control memakai shared goals/values, group norms, socialization serta self-control. Organisasi dapat menggabungkan keduanya sesuai culture dan risiko pekerjaan. [hal. 554–558]"
    },
    {
      "kind": "table",
      "title": "Exhibit 15.3: dua filosofi",
      "headers": [
        "Aspek",
        "Hierarchical",
        "Decentralized"
      ],
      "rows": [
        [
          "Asumsi model",
          "Orang perlu close monitoring",
          "Commitment mendukung self-discipline"
        ],
        [
          "Mekanisme",
          "Detail rules/procedures dan formal systems",
          "Values, group/self-control, selection/socialization"
        ],
        [
          "Authority",
          "Top-down, hierarchy, position power",
          "Flexible, flat, expert power"
        ],
        [
          "Job focus",
          "Task-based description",
          "Results/goals-based description"
        ],
        [
          "Rewards",
          "Extrinsic dominan",
          "Extrinsic serta intrinsic"
        ],
        [
          "Culture/quality",
          "Rigid; inspectors",
          "Adaptive; semua ikut quality"
        ],
        [
          "Consequences dalam model",
          "Compliance tanpa initiative, indifference, turnover tinggi",
          "Initiative, engagement, turnover rendah"
        ]
      ],
      "caption": "[hal. 556]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Consequences pada tabel adalah kecenderungan model, tidak membuktikan semua formal control buruk. Decentralization tidak menghapus standards atau accountability. Pemilihan kontrol mempertimbangkan tugas, safety, data serta kemampuan orang. [hal. 554–558]"
    },
    {
      "kind": "figure",
      "title": "Algorithmic control: manfaat dan dilemma",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 281.45000000000005\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-ALG-d-t MNU108-15-ALG-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-ALG-d-t\">Algorithmic control: manfaat dan dilemma</title><desc id=\"MNU108-15-ALG-d-d\">Algorithmic control: manfaat dan dilemma. Fungsi; Risiko excessive control</desc><defs><marker id=\"MNU108-15-ALG-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"281.45000000000005\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Fungsi</tspan></text><text class=\"svg-text\" x=\"42\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Set targets, measure</tspan></text><text class=\"svg-text\" x=\"42\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">performance</tspan></text><text class=\"svg-text\" x=\"42\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Provide feedback, decide</tspan></text><text class=\"svg-text\" x=\"42\" y=\"156.55\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">rewards</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Risiko excessive control</tspan></text><text class=\"svg-text\" x=\"371\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Trust/morale turun; stress</tspan></text><text class=\"svg-text\" x=\"371\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Gaming metric dan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">kehilangan context</tspan></text><text class=\"svg-text\" x=\"28\" y=\"216.85000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Software dapat membantu data/koordinasi; pilih ukuran</tspan><tspan x=\"28\" dy=\"24.3\">relevan dan beri ruang penjelasan serta review keputusan.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 357.05\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-ALG-m-t MNU108-15-ALG-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-ALG-m-t\">Algorithmic control: manfaat dan dilemma</title><desc id=\"MNU108-15-ALG-m-d\">Algorithmic control: manfaat dan dilemma. Fungsi; Risiko excessive control</desc><defs><marker id=\"MNU108-15-ALG-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"357.05\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"181.10000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Fungsi</tspan></text><text class=\"svg-text\" x=\"34\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Set targets,</tspan></text><text class=\"svg-text\" x=\"34\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">measure</tspan></text><text class=\"svg-text\" x=\"34\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">performance</tspan></text><text class=\"svg-text\" x=\"34\" y=\"140.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Provide</tspan></text><text class=\"svg-text\" x=\"34\" y=\"160.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">feedback,</tspan></text><text class=\"svg-text\" x=\"34\" y=\"180.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">decide rewards</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"204.05\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Risiko</tspan><tspan x=\"201\" dy=\"21.6\">excessive</tspan><tspan x=\"201\" dy=\"21.6\">control</tspan></text><text class=\"svg-text\" x=\"201\" y=\"122.80000000000001\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Trust/morale</tspan></text><text class=\"svg-text\" x=\"201\" y=\"143.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">turun; stress</tspan></text><text class=\"svg-text\" x=\"201\" y=\"163.3\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Gaming metric</tspan></text><text class=\"svg-text\" x=\"201\" y=\"183.55\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dan kehilangan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"203.8\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">context</tspan></text><text class=\"svg-text\" x=\"20\" y=\"257.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Software dapat membantu</tspan><tspan x=\"20\" dy=\"20.25\">data/koordinasi; pilih ukuran</tspan><tspan x=\"20\" dy=\"20.25\">relevan dan beri ruang penjelasan</tspan><tspan x=\"20\" dy=\"20.25\">serta review keputusan.</tspan></text></svg>",
      "altText": "Algorithmic control: manfaat dan dilemma. Fungsi; Risiko excessive control",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 557–558].",
      "overview": {
        "heading": "Algorithmic control: manfaat dan dilemma",
        "cards": [],
        "footer": "Software dapat membantu data/koordinasi; pilih ukuran relevan dan beri ruang penjelasan serta review keputusan."
      }
    },
    {
      "kind": "self-check",
      "question": "Apakah keputusan otomatis pasti lebih objektif?",
      "answer": [
        {
          "kind": "p",
          "text": "Tidak. Metric, input data dan aturan dapat mengabaikan context. Periksa kualitas data, dampak serta kesempatan review; software tidak menghapus tanggung jawab manajer. [hal. 554–558]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "5. TQM, benchmarking dan Six Sigma"
    },
    {
      "kind": "p",
      "text": "Total quality management memasukkan quality ke seluruh aktivitas melalui continuous improvement. Fokusnya teamwork, customer satisfaction dan pengurangan costs. Quality circle mengumpulkan volunteer employees untuk masalah kualitas; quality partnering menempatkan personel quality bersama fungsi kerja sehingga masalah terdeteksi lebih awal. [hal. 558–563]"
    },
    {
      "kind": "table",
      "title": "Teknik TQM",
      "headers": [
        "Teknik",
        "Fokus"
      ],
      "rows": [
        [
          "Quality circles",
          "Dalam buku 6–12 volunteers bertemu teratur untuk memecahkan masalah kerja"
        ],
        [
          "Benchmarking",
          "Ukur products/services/practices terhadap competitor/leader untuk menemukan improvement"
        ],
        [
          "Six Sigma",
          "Pendekatan disiplin higher quality/lower costs; metodologi DMAIC"
        ],
        [
          "Quality partnering",
          "Quality personnel terintegrasi pada fungsi/process, bukan hanya pemeriksaan akhir"
        ],
        [
          "Kaizen / continuous improvement",
          "Banyak perubahan kecil dan ongoing di seluruh organisasi"
        ]
      ],
      "caption": "[hal. 560–563]",
      "stackOnMobile": true
    },
    {
      "kind": "figure",
      "title": "Five-Step Benchmarking Process",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 633.75\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-15-4-d-t MNU108-15-15-4-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-15-4-d-t\">Five-Step Benchmarking Process</title><desc id=\"MNU108-15-15-4-d-d\">Five-Step Benchmarking Process. Plan; Find; Collect; Analyze; Improve</desc><defs><marker id=\"MNU108-15-15-4-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"633.75\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Plan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Tujuan study dan karakteristik penting</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-d-arrow)\" d=\"M336 110.95 L336 137.95\"/><rect class=\"svg-card\" x=\"28\" y=\"141.95\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"165.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Find</tspan></text><text class=\"svg-text\" x=\"42\" y=\"201.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Tentukan sumber informasi/pembanding</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-d-arrow)\" d=\"M336 232.89999999999998 L336 259.9\"/><rect class=\"svg-card\" x=\"28\" y=\"263.9\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"287.9\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Collect</tspan></text><text class=\"svg-text\" x=\"42\" y=\"323.54999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kumpulkan data</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-d-arrow)\" d=\"M336 354.84999999999997 L336 381.84999999999997\"/><rect class=\"svg-card\" x=\"28\" y=\"385.84999999999997\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"409.84999999999997\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Analyze</tspan></text><text class=\"svg-text\" x=\"42\" y=\"445.49999999999994\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Cari area dan rekomendasi improvement</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-d-arrow)\" d=\"M336 476.79999999999995 L336 503.79999999999995\"/><rect class=\"svg-card\" x=\"28\" y=\"507.79999999999995\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"531.8\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Improve</tspan></text><text class=\"svg-text\" x=\"42\" y=\"567.4499999999999\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Implementasi dan monitor berkelanjutan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-15-4-d-arrow)\" d=\"M644 551.775 H687 V63.975 H646\"/></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 693.15\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-15-4-m-t MNU108-15-15-4-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-15-4-m-t\">Five-Step Benchmarking Process</title><desc id=\"MNU108-15-15-4-m-d\">Five-Step Benchmarking Process. Plan; Find; Collect; Analyze; Improve</desc><defs><marker id=\"MNU108-15-15-4-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"693.15\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Plan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Tujuan study dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">karakteristik penting</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-m-arrow)\" d=\"M166 127.15 L166 154.15\"/><rect class=\"svg-card\" x=\"18\" y=\"158.15\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"182.15\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Find</tspan></text><text class=\"svg-text\" x=\"32\" y=\"215.10000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Tentukan sumber</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.70000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">informasi/pembanding</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-m-arrow)\" d=\"M166 265.3 L166 292.3\"/><rect class=\"svg-card\" x=\"18\" y=\"296.3\" width=\"296\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"320.3\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Collect</tspan></text><text class=\"svg-text\" x=\"32\" y=\"353.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kumpulkan data</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-m-arrow)\" d=\"M166 381.85 L166 408.85\"/><rect class=\"svg-card\" x=\"18\" y=\"412.85\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"436.85\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Analyze</tspan></text><text class=\"svg-text\" x=\"32\" y=\"469.8\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Cari area dan rekomendasi</tspan></text><text class=\"svg-text\" x=\"32\" y=\"491.40000000000003\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">improvement</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-15-4-m-arrow)\" d=\"M166 520 L166 547\"/><rect class=\"svg-card\" x=\"18\" y=\"551\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"575\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Improve</tspan></text><text class=\"svg-text\" x=\"32\" y=\"607.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Implementasi dan monitor</tspan></text><text class=\"svg-text\" x=\"32\" y=\"629.5500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">berkelanjutan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-15-4-m-arrow)\" d=\"M314 603.075 H347 V72.075 H316\"/></svg>",
      "altText": "Five-Step Benchmarking Process. Plan; Find; Collect; Analyze; Improve",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 560–561].",
      "overview": {
        "heading": "Five-Step Benchmarking Process",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "figure",
      "title": "Six Sigma: DMAIC",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 750.95\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-DMAIC-d-t MNU108-15-DMAIC-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-DMAIC-d-t\">Six Sigma: DMAIC</title><desc id=\"MNU108-15-DMAIC-d-d\">Six Sigma: DMAIC. Define; Measure; Analyze; Improve; Control</desc><defs><marker id=\"MNU108-15-DMAIC-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"750.95\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Define</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Definisikan masalah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-d-arrow)\" d=\"M336 110.95 L336 137.95\"/><rect class=\"svg-card\" x=\"28\" y=\"141.95\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"165.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Measure</tspan></text><text class=\"svg-text\" x=\"42\" y=\"201.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Ukur proses dan hasil</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-d-arrow)\" d=\"M336 232.89999999999998 L336 259.9\"/><rect class=\"svg-card\" x=\"28\" y=\"263.9\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"287.9\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Analyze</tspan></text><text class=\"svg-text\" x=\"42\" y=\"323.54999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Analisis penyebab</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-d-arrow)\" d=\"M336 354.84999999999997 L336 381.84999999999997\"/><rect class=\"svg-card\" x=\"28\" y=\"385.84999999999997\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"409.84999999999997\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Improve</tspan></text><text class=\"svg-text\" x=\"42\" y=\"445.49999999999994\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Lakukan perbaikan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-d-arrow)\" d=\"M336 476.79999999999995 L336 503.79999999999995\"/><rect class=\"svg-card\" x=\"28\" y=\"507.79999999999995\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"531.8\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Control</tspan></text><text class=\"svg-text\" x=\"42\" y=\"567.4499999999999\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Jaga dan evaluasi hasil</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-DMAIC-d-arrow)\" d=\"M644 551.775 H687 V63.975 H646\"/><text class=\"svg-text\" x=\"28\" y=\"629.75\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Sumber menyebut sasaran 3,4 defects per million;</tspan><tspan x=\"28\" dy=\"24.3\">penyebut/opportunity dan konteks penerapan harus jelas.</tspan><tspan x=\"28\" dy=\"24.3\">Angka sasaran bukan bukti proses tertentu telah memenuhi</tspan><tspan x=\"28\" dy=\"24.3\">Six Sigma.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 777.95\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-15-DMAIC-m-t MNU108-15-DMAIC-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-15-DMAIC-m-t\">Six Sigma: DMAIC</title><desc id=\"MNU108-15-DMAIC-m-d\">Six Sigma: DMAIC. Define; Measure; Analyze; Improve; Control</desc><defs><marker id=\"MNU108-15-DMAIC-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"777.95\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Define</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Definisikan masalah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-m-arrow)\" d=\"M166 105.55000000000001 L166 132.55\"/><rect class=\"svg-card\" x=\"18\" y=\"136.55\" width=\"296\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"160.55\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Measure</tspan></text><text class=\"svg-text\" x=\"32\" y=\"193.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Ukur proses dan hasil</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-m-arrow)\" d=\"M166 222.10000000000002 L166 249.10000000000002\"/><rect class=\"svg-card\" x=\"18\" y=\"253.10000000000002\" width=\"296\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"277.1\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Analyze</tspan></text><text class=\"svg-text\" x=\"32\" y=\"310.05\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Analisis penyebab</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-m-arrow)\" d=\"M166 338.65000000000003 L166 365.65000000000003\"/><rect class=\"svg-card\" x=\"18\" y=\"369.65000000000003\" width=\"296\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"393.65000000000003\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Improve</tspan></text><text class=\"svg-text\" x=\"32\" y=\"426.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Lakukan perbaikan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-15-DMAIC-m-arrow)\" d=\"M166 455.20000000000005 L166 482.20000000000005\"/><rect class=\"svg-card\" x=\"18\" y=\"486.20000000000005\" width=\"296\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"510.20000000000005\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Control</tspan></text><text class=\"svg-text\" x=\"32\" y=\"543.1500000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Jaga dan evaluasi hasil</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-15-DMAIC-m-arrow)\" d=\"M314 527.475 H347 V61.275000000000006 H316\"/><text class=\"svg-text\" x=\"18\" y=\"602.75\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Sumber menyebut sasaran 3,4</tspan><tspan x=\"18\" dy=\"21.6\">defects per million;</tspan><tspan x=\"18\" dy=\"21.6\">penyebut/opportunity dan</tspan><tspan x=\"18\" dy=\"21.6\">konteks penerapan harus jelas.</tspan><tspan x=\"18\" dy=\"21.6\">Angka sasaran bukan bukti</tspan><tspan x=\"18\" dy=\"21.6\">proses tertentu telah memenuhi</tspan><tspan x=\"18\" dy=\"21.6\">Six Sigma.</tspan></text></svg>",
      "altText": "Six Sigma: DMAIC. Define; Measure; Analyze; Improve; Control",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 561].",
      "overview": {
        "heading": "Six Sigma: DMAIC",
        "cards": [],
        "footer": "Sumber menyebut sasaran 3,4 defects per million; penyebut/opportunity dan konteks penerapan harus jelas. Angka sasaran bukan bukti proses tertentu telah memenuhi Six Sigma."
      }
    },
    {
      "kind": "pendalaman",
      "title": "Keberhasilan program dan contoh kaizen",
      "blocks": [
        {
          "kind": "table",
          "title": "Quality Program Success Factors",
          "headers": [
            "Positive factors",
            "Negative factors"
          ],
          "rows": [
            [
              "Skill demands tinggi",
              "Expectations tidak realistis"
            ],
            [
              "Jobs enriched dan motivation meningkat",
              "Middle managers merasa kehilangan authority"
            ],
            [
              "Problem-solving skills berkembang",
              "Pegawai tidak puas aspek organisasi lain"
            ],
            [
              "Participation/teamwork untuk masalah signifikan",
              "Union leaders dikeluarkan dari diskusi"
            ],
            [
              "Continuous improvement menjadi kebiasaan",
              "Menunggu dramatic innovations"
            ]
          ],
          "caption": "[hal. 563]",
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Behr pada sumber mengurangi process steps 24→14 dan certification time 12→8,5 hari serta meningkatkan passing rate 50%→90%. Penurunan langkah 10/24≈41,67%, waktu 3,5/12≈29,17%; kenaikan passing rate 40 percentage points atau 80% relatif terhadap 50%. Perhitungan ini diturunkan dari angka buku, bukan klaim hasil terbaru. [hal. 562–563]"
        }
      ]
    },
    {
      "kind": "self-check",
      "question": "Mengapa benchmarking berbeda dari menyalin competitor?",
      "answer": [
        {
          "kind": "p",
          "text": "Benchmarking menentukan sasaran, mengumpulkan/menganalisis data dan menerapkan perbaikan yang sesuai context. Praktik pembanding belum tentu bisa disalin utuh. [hal. 558–563]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "6. Budgetary control dan responsibility center"
    },
    {
      "kind": "p",
      "text": "Budgetary control menetapkan target pengeluaran, memonitor serta membandingkan hasil dengan budget, lalu menyesuaikan tindakan. Responsibility center adalah unit/departemen di bawah satu orang yang bertanggung jawab atas aktivitas. Anggaran membantu planning sekaligus control. [hal. 563–566]"
    },
    {
      "kind": "table",
      "title": "Jenis budget",
      "headers": [
        "Jenis",
        "Isi dan tujuan"
      ],
      "rows": [
        [
          "Expense",
          "Anticipated/actual expenses responsibility center"
        ],
        [
          "Revenue",
          "Forecasted/actual revenues"
        ],
        [
          "Cash",
          "Receipts/payments harian/mingguan; kecukupan cash memenuhi kewajiban"
        ],
        [
          "Capital",
          "Investments dalam major assets serta dampak cash/profit masa depan"
        ],
        [
          "Zero-based",
          "Justifikasi setiap line item dari titik awal nol"
        ]
      ],
      "caption": "[hal. 564–566]",
      "stackOnMobile": true
    },
    {
      "kind": "table",
      "title": "Cara menyusun budget",
      "headers": [
        "Cara",
        "Proses"
      ],
      "rows": [
        [
          "Top-down",
          "Angka/target dari top management ke unit"
        ],
        [
          "Bottom-up",
          "Unit mengestimasi kebutuhan dan mengirim untuk approval"
        ]
      ],
      "caption": "[hal. 566]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Cash budget berbeda dari revenue budget: penjualan belum tentu langsung menjadi cash. ZBB meminta dasar kebutuhan, tidak berarti semua aktivitas dihapus. Penghematan perlu dikaitkan strategy dan innovation; memotong semua investasi dapat merugikan tujuan jangka panjang. [hal. 563–566]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa bisnis dengan penjualan naik masih dapat kesulitan membayar vendor?",
      "answer": [
        {
          "kind": "p",
          "text": "Waktu penerimaan cash dapat tertunda sementara pembayaran jatuh tempo. Cash budget memeriksa timing receipts/expenditures, bukan sales saja. [hal. 563–566]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "7. Financial statements: posisi dan performance"
    },
    {
      "kind": "p",
      "text": "Balance sheet menunjukkan assets, liabilities dan owners’ equity pada suatu tanggal. Income statement merangkum revenues dan expenses selama periode. Assets = liabilities + equity; net income bukan saldo cash. Berikut angka contoh buku, bukan data bisnis nyata terkini. [hal. 567–568]"
    },
    {
      "kind": "table",
      "title": "Exhibit 15.6: New Creations Landscaping, 31 Desember 2019",
      "headers": [
        "Pos",
        "USD"
      ],
      "rows": [
        [
          "Cash",
          "25.000"
        ],
        [
          "Accounts receivable",
          "75.000"
        ],
        [
          "Inventory",
          "500.000"
        ],
        [
          "Total current assets",
          "600.000"
        ],
        [
          "Land",
          "250.000"
        ],
        [
          "Buildings/fixtures",
          "1.000.000"
        ],
        [
          "Accumulated depreciation (pengurang)",
          "200.000"
        ],
        [
          "Total fixed assets net",
          "1.050.000"
        ],
        [
          "Total assets",
          "1.650.000"
        ],
        [
          "Accounts payable",
          "200.000"
        ],
        [
          "Accrued expenses",
          "20.000"
        ],
        [
          "Income taxes payable",
          "30.000"
        ],
        [
          "Total current liabilities",
          "250.000"
        ],
        [
          "Mortgages payable",
          "350.000"
        ],
        [
          "Bonds outstanding",
          "250.000"
        ],
        [
          "Total long-term liabilities",
          "600.000"
        ],
        [
          "Common stock",
          "540.000"
        ],
        [
          "Retained earnings",
          "260.000"
        ],
        [
          "Total owners’ equity",
          "800.000"
        ],
        [
          "Total liabilities + equity",
          "1.650.000"
        ]
      ],
      "caption": "[hal. 567]",
      "stackOnMobile": true
    },
    {
      "kind": "table",
      "title": "Exhibit 15.7: tahun berakhir 31 Desember 2019",
      "headers": [
        "Pos",
        "USD"
      ],
      "rows": [
        [
          "Gross sales",
          "3.100.000"
        ],
        [
          "Sales returns (pengurang)",
          "200.000"
        ],
        [
          "Net sales",
          "2.900.000"
        ],
        [
          "Cost of goods sold",
          "2.110.000"
        ],
        [
          "Depreciation expense",
          "60.000"
        ],
        [
          "Sales expenses",
          "200.000"
        ],
        [
          "Administrative expenses",
          "90.000"
        ],
        [
          "Total operating expenses + COGS",
          "2.460.000"
        ],
        [
          "Operating profit",
          "440.000"
        ],
        [
          "Other income",
          "20.000"
        ],
        [
          "Gross income: label buku",
          "460.000"
        ],
        [
          "Interest expense (pengurang)",
          "80.000"
        ],
        [
          "Income before taxes",
          "380.000"
        ],
        [
          "Taxes (pengurang)",
          "165.000"
        ],
        [
          "Net income",
          "215.000"
        ]
      ],
      "caption": "[hal. 568]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Pemeriksaan jumlah: current assets 25.000+75.000+500.000=600.000; fixed assets net 250.000+1.000.000−200.000=1.050.000; liabilities 250.000+600.000=850.000; equity 540.000+260.000=800.000. Income: 2.900.000−2.460.000=440.000; +20.000−80.000−165.000=215.000. Depreciation yang mengurangi aset kumulatif berbeda dari expense periode. [hal. 567–568]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa tidak mengurangi accumulated depreciation USD200.000 lagi dari net income?",
      "answer": [
        {
          "kind": "p",
          "text": "Nilai kumulatif itu dipakai pada balance sheet untuk fixed assets net. Income statement sudah memuat depreciation expense periode USD60.000; kedua pos berbeda. [hal. 567–568]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "8. Financial ratios: sebut numerator, denominator dan batas"
    },
    {
      "kind": "p",
      "text": "Ratios membantu menilai liquidity, activity, profitability dan leverage dengan pembanding periode/industry. Satu angka tidak membuktikan kondisi sehat atau penyebab perubahan. Nyatakan definisi, basis periode dan asumsi sebelum menghitung. [hal. 568–570]"
    },
    {
      "kind": "table",
      "title": "Exhibit 15.8: rumus menurut buku",
      "headers": [
        "Kategori",
        "Rasio",
        "Definisi sumber"
      ],
      "rows": [
        [
          "Liquidity",
          "Current",
          "Current assets / current liabilities"
        ],
        [
          "Liquidity",
          "Quick",
          "(Cash + accounts receivable) / current liabilities"
        ],
        [
          "Activity",
          "Inventory turnover",
          "Total sales / average inventory"
        ],
        [
          "Activity",
          "Conversion",
          "Purchase orders / customer inquiries"
        ],
        [
          "Profitability",
          "Profit margin on sales",
          "Net income / sales"
        ],
        [
          "Profitability",
          "Gross margin: label sumber",
          "Gross income / sales"
        ],
        [
          "Profitability",
          "ROA",
          "Net income / total assets"
        ],
        [
          "Leverage",
          "Debt ratio",
          "Total debt / total assets"
        ]
      ],
      "caption": "[hal. 569]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Batas istilah: Exhibit 15.8 memakai inventory turnover = total sales/average inventory dan “gross margin” = gross income/sales. Panduan SEC memakai cost of sales/average inventory untuk turnover, serta gross profit = net revenues−cost of sales. Dalam contoh buku, label gross income USD460.000 adalah operating profit + other income, sehingga berbeda dari gross profit akuntansi USD790.000. Sebut definisi yang dipakai saat menjawab; jangan menyamakan dua numerator tersebut. [SEC, Beginners’ Guide to Financial Statements](https://www.sec.gov/files/investor/pubs/begfinstmtguide.htm), diperiksa 13 Oktober 2026. [hal. 568–569]"
    },
    {
      "kind": "table",
      "title": "Turunan contoh 15.6–15.7 dengan basis eksplisit",
      "headers": [
        "Rasio",
        "Perhitungan",
        "Hasil"
      ],
      "rows": [
        [
          "Current",
          "600.000 / 250.000",
          "2,4 kali"
        ],
        [
          "Quick",
          "(25.000 + 75.000) / 250.000",
          "0,4 kali"
        ],
        [
          "Profit margin; sales = net sales",
          "215.000 / 2.900.000 × 100%",
          "7,41%"
        ],
        [
          "Gross-income/sales menurut label buku",
          "460.000 / 2.900.000 × 100%",
          "15,86%"
        ],
        [
          "Gross-profit margin menurut definisi SEC",
          "(2.900.000−2.110.000) / 2.900.000 × 100%",
          "27,24%"
        ],
        [
          "ROA memakai ending assets sesuai rumus buku",
          "215.000 / 1.650.000 × 100%",
          "13,03%"
        ],
        [
          "Debt ratio; asumsi total debt = total liabilities",
          "850.000 / 1.650.000 × 100%",
          "51,52%"
        ]
      ],
      "caption": "[hal. 567–569]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Current ratio 2,4 memuat inventory besar; quick ratio 0,4 memberi pandangan liquidity tanpa inventory. Jangan menyatakan kas mencukupi 2,4 kali hanya dari current ratio. Average inventory serta purchase orders/inquiries tidak tersedia, sehingga turnover dan conversion tidak dihitung dari data tabel saja. ROA ini memakai ending assets; bila soal meminta average assets, diperlukan saldo awal. Debt ratio ini menggunakan seluruh liabilities; jika soal membatasi debt pada interest-bearing obligations, nyatakan basis berbeda. [hal. 568–569]"
    },
    {
      "kind": "self-check",
      "question": "Apa yang perlu disampaikan sebelum menghitung inventory turnover contoh ini?",
      "answer": [
        {
          "kind": "p",
          "text": "Pilih sales-based formula buku atau cost-based formula SEC secara eksplisit dan dapatkan average inventory. Inventory akhir USD500.000 saja belum memberi average yang diperlukan. [hal. 568–570]"
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
      "title": "Jebakan ujian",
      "headers": [
        "Klaim",
        "Perbaikan"
      ],
      "rows": [
        [
          "Semua variance harus dihukum",
          "Cari sebab serta kualitas ukur."
        ],
        [
          "Scorecard otomatis empat bobot sama",
          "Bobot/target ditentukan strategy, tidak diberikan universal."
        ],
        [
          "Sales naik berarti cash cukup",
          "Timing receipts/payment perlu diperiksa."
        ],
        [
          "Ending inventory = average inventory",
          "Perlu data awal/average yang sah."
        ],
        [
          "Gross income buku = gross profit akuntansi",
          "Pisahkan label serta definisi numerator."
        ]
      ],
      "caption": "[hal. 549–569]",
      "stackOnMobile": true
    },
    {
      "kind": "solution-reveal",
      "title": "Grading the Teachers: feedback yang fair dan akurat",
      "prompt": "Kasus buku yang ditugaskan RPP, diparafrasekan. Sistem evaluasi memakai observasi principal, observasi master teacher dan gains tes siswa. Tiga guru dari distrik metropolitan, upper-income dan rural membahas perbedaan context serta rating. Mereka mengkhawatirkan subjektivitas, tekanan ekspektasi, observasi yang tidak lengkap dan kebutuhan siswa yang berbeda. [hal. 549–556, 573–575]",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Petakan empat langkah feedback control dan kelemahan pengukurannya.",
            "Nilai fungsi rating 1–5 dan bobot evaluasi.",
            "Usulkan kontrol atas proses principal serta feedback pengembangan."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil analisis untuk pembanding jawaban: Standards dan performance goals sudah ada; pengukuran menggabungkan tiga sumber sehingga tidak bergantung satu indikator. Namun reliability, kelengkapan observasi, expertise observer dan comparability context dipertanyakan. Rating 1–5 dapat menjadi bagian sistem jika tiap level memiliki rubric operasional, bukti dan kalibrasi; angka saja memberi kesan presisi tanpa menjamin akurasi. Saran: jadwalkan/documentasikan observasi, latih serta kalibrasi observer, audit sampel catatan, sediakan review/appeal, periksa bias dan gunakan ukuran progress yang mempertimbangkan starting point serta kebutuhan siswa. Bedakan dugaan dari temuan audit. Beri feedback spesifik dan rencana pengembangan; jangan menggunakan context sebagai alasan menghapus semua accountability atau rating untuk hukuman semata. Bobot asli tetap 40/30/30; rekomendasi perubahan bobot memerlukan alasan/data, bukan angka rekaan. [hal. 549–556, 573–575]"
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan: standar layanan dan scorecard seimbang",
      "prompt": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Unit layanan menargetkan ketepatan penyelesaian 95%. Hasil minggu ini 90%, tetapi biaya turun karena pemeriksaan dokumen dipersingkat. Keluhan pengguna naik dan pegawai belum mendapat training prosedur baru. [hal. 549–554, 560–563]",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Petakan feedback control dengan tindakan setelah diagnosis.",
            "Susun empat perspektif balanced scorecard.",
            "Pilih langkah improvement dan evaluasinya."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil analisis untuk pembanding jawaban: Tetapkan standards dari strategy, ukur actual performance serta mutu data, bandingkan −5 percentage points dan periksa penyebab sebelum tindakan. Evaluasi prosedur, kapasitas/training dan dampak pada accuracy. Scorecard: financial biaya layanan; customer keluhan/satisfaction; internal process ketepatan/error; learning/growth penguasaan prosedur dan training. Tentukan target serta cara mengukur, lalu evaluasi outcomes/corrections. Benchmarking atau DMAIC dapat membantu perbaikan proses; pilih sesuai masalah. Biaya turun sendiri belum membuktikan keberhasilan. Standard hanya diubah bila bukti menunjukkan target/ukuran tidak sesuai, bukan agar hasil tampak memenuhi target. [hal. 549–554, 560–563]"
        }
      ]
    }
  ]
};
