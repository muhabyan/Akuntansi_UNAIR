// Generated from MNU108 TM11 canonical 04. Edit the source package and run build-mnu108-pra-uas.
import type {Reading} from '../../../types';
export const TM11_READING: Reading = {
  "tm": 11,
  "title": "Understanding Individual Behavior",
  "ref": "Daft dan Marcic, Understanding Management 12e (2023), Ch. 10, hal. 360–399 (PDF 388–427); RPP Excel 2026, TM 11.",
  "intro": "Dua orang dapat menafsirkan kejadian yang sama secara berbeda. Pelajari cara memeriksa persepsi, memahami pola diri dan mengelola emosi serta tuntutan kerja dengan bukti.",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "Gunakan feedback dan self-assessment untuk mengenali blind spots.",
    "Pisahkan job satisfaction, commitment dan trust.",
    "Perception: observe, screen, organize; attribution memerlukan bukti.",
    "Big Five adalah dimensi, sementara MBTI adalah preferensi.",
    "EI memiliki empat komponen yang saling melengkapi.",
    "Kelola komitmen melalui lima langkah dan perbaiki sumber stres."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Kilat: Understanding Individual Behavior"
    },
    {
      "kind": "figure",
      "title": "Dari pengenalan diri ke tindakan kerja",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 389.84999999999997\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-OV-d-t MNU108-11-OV-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-OV-d-t\">Dari pengenalan diri ke tindakan kerja</title><desc id=\"MNU108-11-OV-d-d\">Dari pengenalan diri ke tindakan kerja. Kenali diri dan sikap; Periksa penafsiran; Kelola tindakan dan tuntutan</desc><defs><marker id=\"MNU108-11-OV-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"389.84999999999997\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"644\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kenali diri dan sikap</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Self-awareness, satisfaction dan trust</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-OV-d-arrow)\" d=\"M350 110.95 L350 137.95\"/><rect class=\"svg-card\" x=\"28\" y=\"141.95\" width=\"644\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"165.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Periksa penafsiran</tspan></text><text class=\"svg-text\" x=\"42\" y=\"201.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Perception, attribution dan personality</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-OV-d-arrow)\" d=\"M350 232.89999999999998 L350 259.9\"/><rect class=\"svg-card\" x=\"28\" y=\"263.9\" width=\"644\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"287.9\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kelola tindakan dan tuntutan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"323.54999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Emotions/EI, self-management, stress/resilience</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 438.45000000000005\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-OV-m-t MNU108-11-OV-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-OV-m-t\">Dari pengenalan diri ke tindakan kerja</title><desc id=\"MNU108-11-OV-m-d\">Dari pengenalan diri ke tindakan kerja. Kenali diri dan sikap; Periksa penafsiran; Kelola tindakan dan tuntutan</desc><defs><marker id=\"MNU108-11-OV-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"438.45000000000005\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"324\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kenali diri dan sikap</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Self-awareness, satisfaction</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">dan trust</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-OV-m-arrow)\" d=\"M180 127.15 L180 154.15\"/><rect class=\"svg-card\" x=\"18\" y=\"158.15\" width=\"324\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"182.15\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Periksa penafsiran</tspan></text><text class=\"svg-text\" x=\"32\" y=\"215.10000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Perception, attribution dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.70000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">personality</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-OV-m-arrow)\" d=\"M180 265.3 L180 292.3\"/><rect class=\"svg-card\" x=\"18\" y=\"296.3\" width=\"324\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"320.3\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Kelola tindakan dan tuntutan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"353.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Emotions/EI, self-management,</tspan></text><text class=\"svg-text\" x=\"32\" y=\"374.85\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">stress/resilience</tspan></text></svg>",
      "altText": "Dari pengenalan diri ke tindakan kerja. Kenali diri dan sikap; Periksa penafsiran; Kelola tindakan dan tuntutan",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 362–392].",
      "overview": {
        "heading": "Dari pengenalan diri ke tindakan kerja",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "ul",
      "items": [
        "Gunakan feedback dan self-assessment untuk mengenali blind spots.",
        "Pisahkan job satisfaction, commitment dan trust.",
        "Perception: observe, screen, organize; attribution memerlukan bukti.",
        "Big Five adalah dimensi, sementara MBTI adalah preferensi.",
        "EI memiliki empat komponen yang saling melengkapi.",
        "Kelola komitmen melalui lima langkah dan perbaiki sumber stres."
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
              "Self-awareness",
              "Kesadaran tentang karakteristik, emosi dan pola diri."
            ],
            [
              "Attribution",
              "Penjelasan penyebab suatu perilaku."
            ],
            [
              "Grit",
              "Ketekunan dan passion untuk tujuan jangka panjang."
            ],
            [
              "Resilience",
              "Kapasitas bertahan serta bangkit dari kesulitan."
            ]
          ],
          "caption": "Daft dan Marcic, Understanding Management 12e (2023), Ch. 10, hal. 360–399 (PDF 388–427); RPP Excel 2026, TM 11.",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "h2",
      "text": "2. Self-awareness, attitudes dan trust"
    },
    {
      "kind": "p",
      "text": "Memahami perilaku dimulai dari mengenali diri, bukan menempelkan label kepada orang lain. Self-awareness mencakup kesadaran tentang kepribadian, keyakinan, nilai dan kecenderungan diri. Blind spots dapat membuat dampak tindakan berbeda dari yang dibayangkan. Attitude adalah penilaian positif/negatif terhadap objek, orang atau peristiwa; komponennya cognition, affect dan behavior. [hal. 362–368]"
    },
    {
      "kind": "figure",
      "title": "Dua jalan menuju self-awareness",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 1000 279.9\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-1-d-t MNU108-11-10-1-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-1-d-t\">Dua jalan menuju self-awareness</title><desc id=\"MNU108-11-10-1-d-d\">Dua jalan menuju self-awareness. Soliciting feedback; Using self-assessment</desc><defs><marker id=\"MNU108-11-10-1-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"1000\" height=\"279.9\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"24\" width=\"467\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"38\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Soliciting feedback</tspan></text><text class=\"svg-text\" x=\"38\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Minta pandangan orang lain</tspan></text><text class=\"svg-text\" x=\"38\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"38\" dy=\"0\">Dengarkan dampak perilaku diri</tspan></text><rect class=\"svg-card\" x=\"509\" y=\"24\" width=\"467\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"523\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Using self-assessment</tspan></text><text class=\"svg-text\" x=\"523\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Refleksi nilai, pola dan kemampuan</tspan></text><text class=\"svg-text\" x=\"523\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"523\" dy=\"0\">Bandingkan dengan pengalaman nyata</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-1-d-arrow)\" d=\"M257.5 140.25 L500 202.25\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-1-d-arrow)\" d=\"M742.5 140.25 L500 202.25\"/><rect class=\"svg-card\" x=\"200\" y=\"206.25\" width=\"600\" height=\"49.650000000000006\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"214\" y=\"230.25\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"214\" dy=\"0\">Greater self-awareness</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 509.25\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-1-m-t MNU108-11-10-1-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-1-m-t\">Dua jalan menuju self-awareness</title><desc id=\"MNU108-11-10-1-m-d\">Dua jalan menuju self-awareness. Soliciting feedback; Using self-assessment</desc><defs><marker id=\"MNU108-11-10-1-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"509.25\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Soliciting feedback</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Minta pandangan orang lain</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Dengarkan dampak perilaku</tspan></text><text class=\"svg-text\" x=\"32\" y=\"120.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">diri</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"179.75\" width=\"296\" height=\"147.35000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"203.75\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Using self-assessment</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.7\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Refleksi nilai, pola dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"258.3\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">kemampuan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"279.9\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Bandingkan dengan pengalaman</tspan></text><text class=\"svg-text\" x=\"32\" y=\"301.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">nyata</tspan></text><rect class=\"svg-card\" x=\"18\" y=\"361.1\" width=\"296\" height=\"46.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"385.1\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Greater self-awareness</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-11-10-1-m-arrow)\" d=\"M314 82.875 H347 V384.57500000000005 H316\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#MNU108-11-10-1-m-arrow)\" d=\"M314 253.425 H347 V384.57500000000005 H316\"/><text class=\"svg-text\" x=\"18\" y=\"442.05\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Cabang-cabang berkontribusi</tspan><tspan x=\"18\" dy=\"21.6\">bersama.</tspan></text></svg>",
      "altText": "Dua jalan menuju self-awareness. Soliciting feedback; Using self-assessment",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 363].",
      "overview": {
        "heading": "Dua jalan menuju self-awareness",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "table",
      "title": "Sikap kerja yang berhubungan tetapi berbeda",
      "headers": [
        "Konsep",
        "Makna",
        "Batas kesimpulan"
      ],
      "rows": [
        [
          "Job satisfaction",
          "Sikap positif terhadap pekerjaan",
          "Kepuasan tidak mengukur seluruh kinerja."
        ],
        [
          "Organizational commitment",
          "Loyalitas dan engagement dengan organisasi",
          "Mendukung organisasi tidak menuntut menyetujui semua keputusan."
        ],
        [
          "Trust",
          "Keyakinan pada keandalan dan niat pihak lain",
          "Dibangun melalui tindakan konsisten dan komunikasi jujur."
        ]
      ],
      "caption": "[hal. 365–368]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Cognitive dissonance adalah ketegangan ketika cognition tidak konsisten, misalnya tindakan bertentangan dengan sikap. Orang dapat mengubah sikap, perilaku atau cara menafsirkan keadaan untuk mengurangi ketegangan. Memahami proses ini membantu memeriksa alasan yang masuk akal sekaligus rasionalisasi. [hal. 364–365]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa feedback dan self-assessment perlu dipakai bersama?",
      "answer": [
        {
          "kind": "p",
          "text": "Refleksi mengenali niat dan pola diri; feedback menunjukkan dampak yang mungkin tidak terlihat. Keduanya memberi peluang memeriksa blind spots, dengan tetap menilai mutu bukti. [hal. 362–368]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "3. Perception dan attribution"
    },
    {
      "kind": "p",
      "text": "Perception adalah proses memberi makna pada lingkungan. Orang dapat menerima rangsangan yang sama tetapi menyaring serta menyusun informasi dengan cara berbeda. Perceptual selectivity memusatkan perhatian pada sebagian rangsangan; perceptual organization membentuk pola. Stereotyping menyederhanakan orang berdasarkan kelompok, sementara halo effect membiarkan kesan satu sifat memengaruhi penilaian sifat lain. [hal. 368–371]"
    },
    {
      "kind": "figure",
      "title": "The Perception Process",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 458.44999999999993\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-3-d-t MNU108-11-10-3-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-3-d-t\">The Perception Process</title><desc id=\"MNU108-11-10-3-d-d\">The Perception Process. Observe; Screen; Organize</desc><defs><marker id=\"MNU108-11-10-3-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"458.44999999999993\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"644\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Observe</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Terima informasi melalui indra</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-3-d-arrow)\" d=\"M350 110.95 L350 137.95\"/><rect class=\"svg-card\" x=\"28\" y=\"141.95\" width=\"644\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"165.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Screen</tspan></text><text class=\"svg-text\" x=\"42\" y=\"201.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Pilih data yang diperhatikan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-3-d-arrow)\" d=\"M350 232.89999999999998 L350 259.9\"/><rect class=\"svg-card\" x=\"28\" y=\"263.9\" width=\"644\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"287.9\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Organize</tspan></text><text class=\"svg-text\" x=\"42\" y=\"323.54999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Susun pola untuk penafsiran dan respons</tspan></text><text class=\"svg-text\" x=\"28\" y=\"385.84999999999997\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Model sumber mempunyai tiga langkah. Penafsiran dan respons</tspan><tspan x=\"28\" dy=\"24.3\">tercakup dalam organize.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 480.05\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-3-m-t MNU108-11-10-3-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-3-m-t\">The Perception Process</title><desc id=\"MNU108-11-10-3-m-d\">The Perception Process. Observe; Screen; Organize</desc><defs><marker id=\"MNU108-11-10-3-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"480.05\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"324\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Observe</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Terima informasi melalui indra</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-3-m-arrow)\" d=\"M180 105.55000000000001 L180 132.55\"/><rect class=\"svg-card\" x=\"18\" y=\"136.55\" width=\"324\" height=\"82.55000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"160.55\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Screen</tspan></text><text class=\"svg-text\" x=\"32\" y=\"193.5\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Pilih data yang diperhatikan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-3-m-arrow)\" d=\"M180 222.10000000000002 L180 249.10000000000002\"/><rect class=\"svg-card\" x=\"18\" y=\"253.10000000000002\" width=\"324\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"277.1\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Organize</tspan></text><text class=\"svg-text\" x=\"32\" y=\"310.05\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Susun pola untuk penafsiran dan</tspan></text><text class=\"svg-text\" x=\"32\" y=\"331.65000000000003\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">respons</tspan></text><text class=\"svg-text\" x=\"18\" y=\"391.25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Model sumber mempunyai tiga</tspan><tspan x=\"18\" dy=\"21.6\">langkah. Penafsiran dan respons</tspan><tspan x=\"18\" dy=\"21.6\">tercakup dalam organize.</tspan></text></svg>",
      "altText": "The Perception Process. Observe; Screen; Organize",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 369].",
      "overview": {
        "heading": "The Perception Process",
        "cards": [],
        "footer": "Model sumber mempunyai tiga langkah. Penafsiran dan respons tercakup dalam organize."
      }
    },
    {
      "kind": "p",
      "text": "Exhibit 10.4 memperlihatkan gambar anjing, sosok tua/muda dan susunan blok ambigu. Halaman gambar diperiksa langsung: pengalaman serta konteks mengubah apa yang terlihat. Ilustrasi sumber digunakan untuk diskusi, tanpa mengklaim gambar tersebut diterbitkan ulang di sini. [hal. 369]"
    },
    {
      "kind": "figure",
      "title": "Bias dalam menjelaskan perilaku",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 459\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-6-d-t MNU108-11-10-6-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-6-d-t\">Bias dalam menjelaskan perilaku</title><desc id=\"MNU108-11-10-6-d-d\">Bias dalam menjelaskan perilaku. Fundamental attribution error: orang lain; Fundamental attribution error: diri; Self-serving bias: sukses diri; Self-serving bias: kegagalan diri</desc><defs><marker id=\"MNU108-11-10-6-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"459\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"186.5\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Fundamental attribution</tspan><tspan x=\"42\" dy=\"25.650000000000002\">error: orang lain</tspan></text><text class=\"svg-text\" x=\"42\" y=\"109.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kegagalan dihubungkan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"133.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">dengan sifat pribadi</tspan></text><text class=\"svg-text\" x=\"42\" y=\"157.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Pengaruh situasi dapat</tspan></text><text class=\"svg-text\" x=\"42\" y=\"182.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">diabaikan</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"137.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Fundamental attribution</tspan><tspan x=\"371\" dy=\"25.650000000000002\">error: diri</tspan></text><text class=\"svg-text\" x=\"371\" y=\"109.30000000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Kegagalan dihubungkan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"133.60000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">dengan situasi</tspan></text><rect class=\"svg-card\" x=\"28\" y=\"224.5\" width=\"315\" height=\"137.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"248.5\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Self-serving bias: sukses</tspan><tspan x=\"42\" dy=\"25.650000000000002\">diri</tspan></text><text class=\"svg-text\" x=\"42\" y=\"309.8\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kredit diberikan kepada</tspan></text><text class=\"svg-text\" x=\"42\" y=\"334.1\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">kualitas pribadi</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"224.5\" width=\"315\" height=\"137.9\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"248.5\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Self-serving bias:</tspan><tspan x=\"371\" dy=\"25.650000000000002\">kegagalan diri</tspan></text><text class=\"svg-text\" x=\"371\" y=\"309.8\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Tanggung jawab dipindah ke</tspan></text><text class=\"svg-text\" x=\"371\" y=\"334.1\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">keadaan luar</tspan></text><text class=\"svg-text\" x=\"28\" y=\"394.4\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Diagram merangkum kecenderungan bias, bukan penjelasan yang</tspan><tspan x=\"28\" dy=\"24.3\">selalu benar.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 616.95\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-6-m-t MNU108-11-10-6-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-6-m-t\">Bias dalam menjelaskan perilaku</title><desc id=\"MNU108-11-10-6-m-d\">Bias dalam menjelaskan perilaku. Fundamental attribution error: orang lain; Fundamental attribution error: diri; Self-serving bias: sukses diri; Self-serving bias: kegagalan diri</desc><defs><marker id=\"MNU108-11-10-6-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"616.95\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"266.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Fundamental</tspan><tspan x=\"34\" dy=\"21.6\">attribution</tspan><tspan x=\"34\" dy=\"21.6\">error: orang</tspan><tspan x=\"34\" dy=\"21.6\">lain</tspan></text><text class=\"svg-text\" x=\"34\" y=\"144.4\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Kegagalan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"164.65\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">dihubungkan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"184.9\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">dengan sifat</tspan></text><text class=\"svg-text\" x=\"34\" y=\"205.15\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">pribadi</tspan></text><text class=\"svg-text\" x=\"34\" y=\"225.4\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Pengaruh</tspan></text><text class=\"svg-text\" x=\"34\" y=\"245.65\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">situasi dapat</tspan></text><text class=\"svg-text\" x=\"34\" y=\"265.90000000000003\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">diabaikan</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"163.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Fundamental</tspan><tspan x=\"201\" dy=\"21.6\">attribution</tspan><tspan x=\"201\" dy=\"21.6\">error: diri</tspan></text><text class=\"svg-text\" x=\"201\" y=\"122.80000000000001\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Kegagalan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"143.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dihubungkan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"163.3\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dengan situasi</tspan></text><rect class=\"svg-card\" x=\"20\" y=\"304.15\" width=\"153\" height=\"204.05\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"328.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Self-serving</tspan><tspan x=\"34\" dy=\"21.6\">bias: sukses</tspan><tspan x=\"34\" dy=\"21.6\">diri</tspan></text><text class=\"svg-text\" x=\"34\" y=\"402.95\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Kredit</tspan></text><text class=\"svg-text\" x=\"34\" y=\"423.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">diberikan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"443.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">kepada</tspan></text><text class=\"svg-text\" x=\"34\" y=\"463.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">kualitas</tspan></text><text class=\"svg-text\" x=\"34\" y=\"483.95\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">pribadi</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"304.15\" width=\"153\" height=\"185.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"328.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Self-serving</tspan><tspan x=\"201\" dy=\"21.6\">bias:</tspan><tspan x=\"201\" dy=\"21.6\">kegagalan</tspan><tspan x=\"201\" dy=\"21.6\">diri</tspan></text><text class=\"svg-text\" x=\"201\" y=\"424.54999999999995\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Tanggung jawab</tspan></text><text class=\"svg-text\" x=\"201\" y=\"444.79999999999995\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dipindah ke</tspan></text><text class=\"svg-text\" x=\"201\" y=\"465.04999999999995\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">keadaan luar</tspan></text><text class=\"svg-text\" x=\"20\" y=\"537.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Diagram merangkum kecenderungan</tspan><tspan x=\"20\" dy=\"20.25\">bias, bukan penjelasan yang selalu</tspan><tspan x=\"20\" dy=\"20.25\">benar.</tspan></text></svg>",
      "altText": "Bias dalam menjelaskan perilaku. Fundamental attribution error: orang lain; Fundamental attribution error: diri; Self-serving bias: sukses diri; Self-serving bias: kegagalan diri",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 370–371].",
      "overview": {
        "heading": "Bias dalam menjelaskan perilaku",
        "cards": [],
        "footer": "Diagram merangkum kecenderungan bias, bukan penjelasan yang selalu benar."
      }
    },
    {
      "kind": "table",
      "title": "Memeriksa attribution",
      "headers": [
        "Penjelasan",
        "Makna",
        "Cara memeriksa"
      ],
      "rows": [
        [
          "Internal attribution",
          "Perilaku disebabkan karakteristik pribadi",
          "Butuh bukti perilaku dan kemampuan yang konsisten."
        ],
        [
          "External attribution",
          "Perilaku disebabkan situasi",
          "Periksa sumber daya, tuntutan, instruksi dan hambatan."
        ]
      ],
      "caption": "[hal. 370–371]",
      "stackOnMobile": true
    },
    {
      "kind": "self-check",
      "question": "Apakah setiap kegagalan yang dijelaskan dengan situasi merupakan bias?",
      "answer": [
        {
          "kind": "p",
          "text": "Tidak. Situasi dapat benar-benar berpengaruh. Bias muncul ketika penjelasan dipilih secara sistematis tanpa bukti memadai atau standar bagi diri dan orang lain berbeda. [hal. 368–371]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "4. Personality: dimensi, ketekunan dan cara memecahkan masalah"
    },
    {
      "kind": "p",
      "text": "Personality adalah pola karakteristik relatif stabil yang memengaruhi perilaku dan interaksi. Big Five memetakan dimensi, tanpa satu profil yang otomatis paling cocok bagi semua tugas. Buku menekankan bahwa introvert juga dapat memimpin dan conscientiousness relevan bagi tanggung jawab serta pencapaian. [hal. 372–380]"
    },
    {
      "kind": "table",
      "title": "Big Five",
      "headers": [
        "Dimensi",
        "Ciri pada sisi tinggi"
      ],
      "rows": [
        [
          "Extroversion",
          "Sociable, assertive dan nyaman berinteraksi"
        ],
        [
          "Agreeableness",
          "Kooperatif, mudah memaafkan dan percaya"
        ],
        [
          "Conscientiousness",
          "Bertanggung jawab, dapat diandalkan dan tekun"
        ],
        [
          "Emotional stability",
          "Tenang dan percaya diri dibanding mudah tegang"
        ],
        [
          "Openness to experience",
          "Minat luas, kreatif dan terbuka pada gagasan"
        ]
      ],
      "caption": "[hal. 372–375]",
      "stackOnMobile": true
    },
    {
      "kind": "table",
      "title": "Karakteristik tambahan",
      "headers": [
        "Konsep",
        "Makna dan batas"
      ],
      "rows": [
        [
          "Grit",
          "Passion dan perseverance untuk tujuan jangka panjang; mencakup konsistensi minat dan ketekunan usaha."
        ],
        [
          "Authoritarianism",
          "Kepercayaan bahwa perbedaan kekuasaan/status perlu ada; dapat memengaruhi cara menggunakan serta menerima otoritas."
        ],
        [
          "Machiavellianism",
          "Kecenderungan memperoleh kuasa dan memanipulasi demi kepentingan pribadi; satu kejadian tidak cukup untuk memberi label seseorang."
        ]
      ],
      "caption": "[hal. 375–378]",
      "stackOnMobile": true
    },
    {
      "kind": "pendalaman",
      "title": "Preferensi MBTI dan problem-solving",
      "blocks": [
        {
          "kind": "table",
          "title": "Empat pasangan preferensi MBTI",
          "headers": [
            "Pasangan",
            "Apa yang dibedakan"
          ],
          "rows": [
            [
              "Introversion / Extraversion",
              "Orientasi energi/perhatian"
            ],
            [
              "Sensing / Intuition",
              "Informasi konkret dibanding pola serta kemungkinan"
            ],
            [
              "Thinking / Feeling",
              "Penilaian impersonal dibanding pertimbangan nilai/relasi"
            ],
            [
              "Judging / Perceiving",
              "Kepastian/closure dibanding fleksibilitas dan informasi tambahan"
            ]
          ],
          "caption": "[hal. 379–380]",
          "stackOnMobile": true
        },
        {
          "kind": "figure",
          "title": "Empat gaya problem-solving",
          "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 456.30000000000007\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-10-d-t MNU108-11-10-10-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-10-d-t\">Empat gaya problem-solving</title><desc id=\"MNU108-11-10-10-d-d\">Empat gaya problem-solving. Sensation–Thinking; Intuitive–Thinking; Sensation–Feeling; Intuitive–Feeling</desc><defs><marker id=\"MNU108-11-10-10-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"456.30000000000007\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Sensation–Thinking</tspan></text><text class=\"svg-text\" x=\"42\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Fakta konkret dan analisis</tspan></text><text class=\"svg-text\" x=\"42\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Praktis, detail dan aturan</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Intuitive–Thinking</tspan></text><text class=\"svg-text\" x=\"371\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Pola/kemungkinan dan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">analisis</tspan></text><text class=\"svg-text\" x=\"371\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Sistem serta teori</tspan></text><rect class=\"svg-card\" x=\"28\" y=\"174.55\" width=\"315\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"198.55\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Sensation–Feeling</tspan></text><text class=\"svg-text\" x=\"42\" y=\"234.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Fakta konkret dan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"258.5\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">nilai/relasi</tspan></text><text class=\"svg-text\" x=\"42\" y=\"282.8\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Masalah orang secara</tspan></text><text class=\"svg-text\" x=\"42\" y=\"307.1\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">praktis</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"174.55\" width=\"315\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"198.55\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Intuitive–Feeling</tspan></text><text class=\"svg-text\" x=\"371\" y=\"234.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Pola/kemungkinan dan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"258.5\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">nilai/relasi</tspan></text><text class=\"svg-text\" x=\"371\" y=\"282.8\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Tema luas dan partisipasi</tspan></text><text class=\"svg-text\" x=\"28\" y=\"367.40000000000003\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Sensing/intuition mengumpulkan informasi; thinking/feeling</tspan><tspan x=\"28\" dy=\"24.3\">menilainya. Preferensi tidak membuktikan kompetensi atau</tspan><tspan x=\"28\" dy=\"24.3\">menentukan pekerjaan secara mutlak.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 508.95\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-10-m-t MNU108-11-10-10-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-10-m-t\">Empat gaya problem-solving</title><desc id=\"MNU108-11-10-10-m-d\">Empat gaya problem-solving. Sensation–Thinking; Intuitive–Thinking; Sensation–Feeling; Intuitive–Feeling</desc><defs><marker id=\"MNU108-11-10-10-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"508.95\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"160.85\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Sensation–Thinking</tspan></text><text class=\"svg-text\" x=\"34\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Fakta konkret</tspan></text><text class=\"svg-text\" x=\"34\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">dan analisis</tspan></text><text class=\"svg-text\" x=\"34\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Praktis,</tspan></text><text class=\"svg-text\" x=\"34\" y=\"140.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">detail dan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"160.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">aturan</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"140.6\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Intuitive–Thinking</tspan></text><text class=\"svg-text\" x=\"201\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Pola/kemungkinan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dan analisis</tspan></text><text class=\"svg-text\" x=\"201\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Sistem serta</tspan></text><text class=\"svg-text\" x=\"201\" y=\"140.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">teori</tspan></text><rect class=\"svg-card\" x=\"20\" y=\"198.85\" width=\"153\" height=\"160.85\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"222.85\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Sensation–Feeling</tspan></text><text class=\"svg-text\" x=\"34\" y=\"254.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Fakta konkret</tspan></text><text class=\"svg-text\" x=\"34\" y=\"274.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">dan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"294.95\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">nilai/relasi</tspan></text><text class=\"svg-text\" x=\"34\" y=\"315.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Masalah orang</tspan></text><text class=\"svg-text\" x=\"34\" y=\"335.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">secara praktis</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"198.85\" width=\"153\" height=\"160.85\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"222.85\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Intuitive–Feeling</tspan></text><text class=\"svg-text\" x=\"201\" y=\"254.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Pola/kemungkinan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"274.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"294.95\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">nilai/relasi</tspan></text><text class=\"svg-text\" x=\"201\" y=\"315.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Tema luas dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"335.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">partisipasi</tspan></text><text class=\"svg-text\" x=\"20\" y=\"388.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Sensing/intuition mengumpulkan</tspan><tspan x=\"20\" dy=\"20.25\">informasi; thinking/feeling</tspan><tspan x=\"20\" dy=\"20.25\">menilainya. Preferensi tidak</tspan><tspan x=\"20\" dy=\"20.25\">membuktikan kompetensi atau</tspan><tspan x=\"20\" dy=\"20.25\">menentukan pekerjaan secara mutlak.</tspan></text></svg>",
          "altText": "Empat gaya problem-solving. Sensation–Thinking; Intuitive–Thinking; Sensation–Feeling; Intuitive–Feeling",
          "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 380].",
          "overview": {
            "heading": "Empat gaya problem-solving",
            "cards": [],
            "footer": "Sensing/intuition mengumpulkan informasi; thinking/feeling menilainya. Preferensi tidak membuktikan kompetensi atau menentukan pekerjaan secara mutlak."
          }
        }
      ]
    },
    {
      "kind": "self-check",
      "question": "Mengapa nice belum cukup untuk menyimpulkan calon manajer efektif?",
      "answer": [
        {
          "kind": "p",
          "text": "Nice dapat mencerminkan agreeableness dan relasi yang baik. Perlu bukti conscientiousness, pengelolaan tanggung jawab, EI dan hasil; label tunggal tidak mencakup seluruh tuntutan pekerjaan. [hal. 372–380]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "5. Emotions dan emotional intelligence"
    },
    {
      "kind": "p",
      "text": "Emosi memengaruhi sikap serta perilaku kerja dan sering disertai respons fisiologis. Dalam model sumber, kemajuan mencapai kebutuhan/tujuan berkaitan dengan emosi positif; hambatan dapat memicu emosi negatif. Emotional contagion adalah penyerapan/ekspresi emosi orang sekitar; negativity bias membuat kejadian buruk memperoleh perhatian dan respons lebih kuat. [hal. 381–384]"
    },
    {
      "kind": "figure",
      "title": "Kelompok emosi pada sumber",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 281.45000000000005\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-11-d-t MNU108-11-10-11-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-11-d-t\">Kelompok emosi pada sumber</title><desc id=\"MNU108-11-10-11-d-d\">Kelompok emosi pada sumber. Positive emotions; Negative emotions</desc><defs><marker id=\"MNU108-11-10-11-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"281.45000000000005\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Positive emotions</tspan></text><text class=\"svg-text\" x=\"42\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Happiness/joy; pride</tspan></text><text class=\"svg-text\" x=\"42\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Love/affection; relief</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"160.85000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Negative emotions</tspan></text><text class=\"svg-text\" x=\"371\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Disgust; envy/jealousy;</tspan></text><text class=\"svg-text\" x=\"371\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">sadness</tspan></text><text class=\"svg-text\" x=\"371\" y=\"132.25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Guilt/shame;</tspan></text><text class=\"svg-text\" x=\"371\" y=\"156.55\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">fright/anxiety; anger</tspan></text><text class=\"svg-text\" x=\"28\" y=\"216.85000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Kategori membantu membaca pengalaman, tanpa menilai setiap</tspan><tspan x=\"28\" dy=\"24.3\">emosi sebagai salah atau menentukan diagnosis.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 355.70000000000005\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-11-m-t MNU108-11-10-11-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-11-m-t\">Kelompok emosi pada sumber</title><desc id=\"MNU108-11-10-11-m-d\">Kelompok emosi pada sumber. Positive emotions; Negative emotions</desc><defs><marker id=\"MNU108-11-10-11-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"355.70000000000005\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"162.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Positive</tspan><tspan x=\"34\" dy=\"21.6\">emotions</tspan></text><text class=\"svg-text\" x=\"34\" y=\"101.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Happiness/joy;</tspan></text><text class=\"svg-text\" x=\"34\" y=\"121.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">pride</tspan></text><text class=\"svg-text\" x=\"34\" y=\"141.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Love/affection;</tspan></text><text class=\"svg-text\" x=\"34\" y=\"161.95000000000002\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">relief</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"202.70000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Negative</tspan><tspan x=\"201\" dy=\"21.6\">emotions</tspan></text><text class=\"svg-text\" x=\"201\" y=\"101.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Disgust;</tspan></text><text class=\"svg-text\" x=\"201\" y=\"121.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">envy/jealousy;</tspan></text><text class=\"svg-text\" x=\"201\" y=\"141.7\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">sadness</tspan></text><text class=\"svg-text\" x=\"201\" y=\"161.95000000000002\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Guilt/shame;</tspan></text><text class=\"svg-text\" x=\"201\" y=\"182.2\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">fright/anxiety;</tspan></text><text class=\"svg-text\" x=\"201\" y=\"202.45\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">anger</tspan></text><text class=\"svg-text\" x=\"20\" y=\"255.70000000000002\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Kategori membantu membaca</tspan><tspan x=\"20\" dy=\"20.25\">pengalaman, tanpa menilai setiap</tspan><tspan x=\"20\" dy=\"20.25\">emosi sebagai salah atau menentukan</tspan><tspan x=\"20\" dy=\"20.25\">diagnosis.</tspan></text></svg>",
      "altText": "Kelompok emosi pada sumber. Positive emotions; Negative emotions",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 381].",
      "overview": {
        "heading": "Kelompok emosi pada sumber",
        "cards": [],
        "footer": "Kategori membantu membaca pengalaman, tanpa menilai setiap emosi sebagai salah atau menentukan diagnosis."
      }
    },
    {
      "kind": "figure",
      "title": "Empat komponen emotional intelligence",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 310.8\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-EI-d-t MNU108-11-EI-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-EI-d-t\">Empat komponen emotional intelligence</title><desc id=\"MNU108-11-EI-d-d\">Empat komponen emotional intelligence. Self-awareness; Self-management; Social awareness; Relationship management</desc><defs><marker id=\"MNU108-11-EI-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"310.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"24\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Self-awareness</tspan></text><text class=\"svg-text\" x=\"42\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Kenali emosi, kekuatan dan</tspan></text><text class=\"svg-text\" x=\"42\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">batas diri</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"24\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"48\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Self-management</tspan></text><text class=\"svg-text\" x=\"371\" y=\"83.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Kelola emosi yang</tspan></text><text class=\"svg-text\" x=\"371\" y=\"107.95\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">mengganggu tindakan</tspan></text><rect class=\"svg-card\" x=\"28\" y=\"150.25\" width=\"315\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"174.25\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Social awareness</tspan></text><text class=\"svg-text\" x=\"42\" y=\"209.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Pahami orang lain melalui</tspan></text><text class=\"svg-text\" x=\"42\" y=\"234.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">empati</tspan></text><rect class=\"svg-card\" x=\"357\" y=\"150.25\" width=\"315\" height=\"136.55\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"371\" y=\"174.25\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Relationship management</tspan></text><text class=\"svg-text\" x=\"371\" y=\"209.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">Bangun relasi, dengarkan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"234.20000000000002\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">dan komunikasikan dengan</tspan></text><text class=\"svg-text\" x=\"371\" y=\"258.5\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"371\" dy=\"0\">hormat</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 364.79999999999995\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-EI-m-t MNU108-11-EI-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-EI-m-t\">Empat komponen emotional intelligence</title><desc id=\"MNU108-11-EI-m-d\">Empat komponen emotional intelligence. Self-awareness; Self-management; Social awareness; Relationship management</desc><defs><marker id=\"MNU108-11-EI-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"364.79999999999995\" rx=\"12\"/><rect class=\"svg-card\" x=\"20\" y=\"24\" width=\"153\" height=\"120.35000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Self-awareness</tspan></text><text class=\"svg-text\" x=\"34\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Kenali emosi,</tspan></text><text class=\"svg-text\" x=\"34\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">kekuatan dan</tspan></text><text class=\"svg-text\" x=\"34\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">batas diri</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"24\" width=\"153\" height=\"140.6\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"48\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Self-management</tspan></text><text class=\"svg-text\" x=\"201\" y=\"79.6\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Kelola emosi</tspan></text><text class=\"svg-text\" x=\"201\" y=\"99.85\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">yang</tspan></text><text class=\"svg-text\" x=\"201\" y=\"120.1\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">mengganggu</tspan></text><text class=\"svg-text\" x=\"201\" y=\"140.35\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">tindakan</tspan></text><rect class=\"svg-card\" x=\"20\" y=\"178.6\" width=\"153\" height=\"141.95000000000002\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"34\" y=\"202.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Social</tspan><tspan x=\"34\" dy=\"21.6\">awareness</tspan></text><text class=\"svg-text\" x=\"34\" y=\"255.8\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">Pahami orang</tspan></text><text class=\"svg-text\" x=\"34\" y=\"276.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">lain melalui</tspan></text><text class=\"svg-text\" x=\"34\" y=\"296.3\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"34\" dy=\"0\">empati</tspan></text><rect class=\"svg-card\" x=\"187\" y=\"178.6\" width=\"153\" height=\"162.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"201\" y=\"202.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Relationship</tspan><tspan x=\"201\" dy=\"21.6\">management</tspan></text><text class=\"svg-text\" x=\"201\" y=\"255.8\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">Bangun relasi,</tspan></text><text class=\"svg-text\" x=\"201\" y=\"276.05\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dengarkan dan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"296.3\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">komunikasikan</tspan></text><text class=\"svg-text\" x=\"201\" y=\"316.55\" font-size=\"15\" text-anchor=\"start\"><tspan x=\"201\" dy=\"0\">dengan hormat</tspan></text></svg>",
      "altText": "Empat komponen emotional intelligence. Self-awareness; Self-management; Social awareness; Relationship management",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 382–383].",
      "overview": {
        "heading": "Empat komponen emotional intelligence",
        "cards": [],
        "footer": "Baca hubungan pada visual, lalu gunakan penjelasan dan rujukan sumber."
      }
    },
    {
      "kind": "p",
      "text": "Manajer dapat memengaruhi suasana tim melalui ekspresi emosi dan cara memberi feedback. Positif tidak berarti menutupi masalah: sampaikan masalah dengan fakta, dengarkan kebutuhan orang lain, lalu putuskan tindakan. Empat komponen EI dapat dilatih; skor atau cerita singkat tidak cukup untuk diagnosis individu. [hal. 382–384]"
    },
    {
      "kind": "self-check",
      "question": "Komponen EI apa yang terlibat ketika manajer mendengar kekhawatiran anggota lalu memberi batas kerja dengan tenang?",
      "answer": [
        {
          "kind": "p",
          "text": "Social awareness memahami kekhawatiran; self-awareness mengenali emosi diri; self-management menjaga respons; relationship management membantu komunikasi dan relasi. Satu tindakan dapat melibatkan lebih dari satu komponen. [hal. 381–384]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "6. Managing yourself: komitmen menjadi tindakan"
    },
    {
      "kind": "p",
      "text": "Self-management mengatur pikiran dan perilaku agar tugas selesai serta situasi sulit tertangani. Tiga prinsip sumber ialah clarity of mind, clarity of objectives dan organized system. Komitmen yang hanya disimpan di kepala membuat perhatian mudah terpecah; sistem eksternal membantu membuat langkah berikutnya jelas. [hal. 385–387]"
    },
    {
      "kind": "figure",
      "title": "Lima langkah mengorganisasi pekerjaan",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 726.6500000000001\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-12-d-t MNU108-11-10-12-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-12-d-t\">Lima langkah mengorganisasi pekerjaan</title><desc id=\"MNU108-11-10-12-d-d\">Lima langkah mengorganisasi pekerjaan. Empty your head; Decide the next action; Get organized; Perform a weekly review; Do it</desc><defs><marker id=\"MNU108-11-10-12-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"726.6500000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"28\" y=\"20\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"44\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Empty your head</tspan></text><text class=\"svg-text\" x=\"42\" y=\"79.65\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Catat komitmen pada sistem tepercaya</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-d-arrow)\" d=\"M336 110.95 L336 137.95\"/><rect class=\"svg-card\" x=\"28\" y=\"141.95\" width=\"616\" height=\"112.25\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"165.95\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Decide the next action</tspan></text><text class=\"svg-text\" x=\"42\" y=\"201.6\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Tentukan tindakan konkret</tspan></text><text class=\"svg-text\" x=\"42\" y=\"225.9\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Do it, delegate it atau defer it</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-d-arrow)\" d=\"M336 257.2 L336 284.2\"/><rect class=\"svg-card\" x=\"28\" y=\"288.2\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"312.2\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Get organized</tspan></text><text class=\"svg-text\" x=\"42\" y=\"347.84999999999997\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Gunakan kalender dan action lists</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-d-arrow)\" d=\"M336 379.15 L336 406.15\"/><rect class=\"svg-card\" x=\"28\" y=\"410.15\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"434.15\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Perform a weekly review</tspan></text><text class=\"svg-text\" x=\"42\" y=\"469.79999999999995\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Perbarui daftar dan proses item baru</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-d-arrow)\" d=\"M336 501.09999999999997 L336 528.1\"/><rect class=\"svg-card\" x=\"28\" y=\"532.1\" width=\"616\" height=\"87.95\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"42\" y=\"556.1\" font-size=\"19\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Do it</tspan></text><text class=\"svg-text\" x=\"42\" y=\"591.75\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"42\" dy=\"0\">Pertimbangkan waktu/konteks, energi dan prioritas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-11-10-12-d-arrow)\" d=\"M644 576.075 H687 V63.975 H646\"/><text class=\"svg-text\" x=\"28\" y=\"654.0500000000001\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"28\" dy=\"0\">Review menjaga sistem tetap sesuai keadaan; daftar tanpa</tspan><tspan x=\"28\" dy=\"24.3\">tindakan belum menyelesaikan tugas.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 842.7499999999999\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-12-m-t MNU108-11-10-12-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-12-m-t\">Lima langkah mengorganisasi pekerjaan</title><desc id=\"MNU108-11-10-12-m-d\">Lima langkah mengorganisasi pekerjaan. Empty your head; Decide the next action; Get organized; Perform a weekly review; Do it</desc><defs><marker id=\"MNU108-11-10-12-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"842.7499999999999\" rx=\"12\"/><rect class=\"svg-card\" x=\"18\" y=\"20\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"44\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Empty your head</tspan></text><text class=\"svg-text\" x=\"32\" y=\"76.95\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Catat komitmen pada sistem</tspan></text><text class=\"svg-text\" x=\"32\" y=\"98.55000000000001\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">tepercaya</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-m-arrow)\" d=\"M166 127.15 L166 154.15\"/><rect class=\"svg-card\" x=\"18\" y=\"158.15\" width=\"296\" height=\"125.75000000000001\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"182.15\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Decide the next action</tspan></text><text class=\"svg-text\" x=\"32\" y=\"215.10000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Tentukan tindakan konkret</tspan></text><text class=\"svg-text\" x=\"32\" y=\"236.70000000000002\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Do it, delegate it atau</tspan></text><text class=\"svg-text\" x=\"32\" y=\"258.3\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">defer it</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-m-arrow)\" d=\"M166 286.90000000000003 L166 313.9\"/><rect class=\"svg-card\" x=\"18\" y=\"317.9\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"341.9\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Get organized</tspan></text><text class=\"svg-text\" x=\"32\" y=\"374.84999999999997\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Gunakan kalender dan action</tspan></text><text class=\"svg-text\" x=\"32\" y=\"396.45\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">lists</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-m-arrow)\" d=\"M166 425.04999999999995 L166 452.04999999999995\"/><rect class=\"svg-card\" x=\"18\" y=\"456.04999999999995\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"480.04999999999995\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Perform a weekly review</tspan></text><text class=\"svg-text\" x=\"32\" y=\"513\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Perbarui daftar dan proses</tspan></text><text class=\"svg-text\" x=\"32\" y=\"534.6\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">item baru</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\"  marker-end=\"url(#MNU108-11-10-12-m-arrow)\" d=\"M166 563.1999999999999 L166 590.1999999999999\"/><rect class=\"svg-card\" x=\"18\" y=\"594.1999999999999\" width=\"296\" height=\"104.15\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"32\" y=\"618.1999999999999\" font-size=\"17\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Do it</tspan></text><text class=\"svg-text\" x=\"32\" y=\"651.15\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">Pertimbangkan waktu/konteks,</tspan></text><text class=\"svg-text\" x=\"32\" y=\"672.75\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"32\" dy=\"0\">energi dan prioritas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"5 4\" marker-end=\"url(#MNU108-11-10-12-m-arrow)\" d=\"M314 646.275 H347 V72.075 H316\"/><text class=\"svg-text\" x=\"18\" y=\"732.3499999999999\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"18\" dy=\"0\">Review menjaga sistem tetap</tspan><tspan x=\"18\" dy=\"21.6\">sesuai keadaan; daftar tanpa</tspan><tspan x=\"18\" dy=\"21.6\">tindakan belum menyelesaikan</tspan><tspan x=\"18\" dy=\"21.6\">tugas.</tspan></text></svg>",
      "altText": "Lima langkah mengorganisasi pekerjaan. Empty your head; Decide the next action; Get organized; Perform a weekly review; Do it",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 386–387].",
      "overview": {
        "heading": "Lima langkah mengorganisasi pekerjaan",
        "cards": [],
        "footer": "Review menjaga sistem tetap sesuai keadaan; daftar tanpa tindakan belum menyelesaikan tugas."
      }
    },
    {
      "kind": "self-check",
      "question": "Apa bedanya menulis “proyek selesai” dengan menentukan next action?",
      "answer": [
        {
          "kind": "p",
          "text": "Proyek selesai adalah hasil. Next action menyebut tindakan konkret yang bisa dilakukan, misalnya menyusun bagian tertentu atau menghubungi pihak yang perlu memberi data. [hal. 385–387]"
        }
      ],
      "signal": "Jawaban menyebut konsep, bukti, dan alasan; nama teori saja belum cukup."
    },
    {
      "kind": "h2",
      "text": "7. Stress, resilience dan tanggung jawab organisasi"
    },
    {
      "kind": "p",
      "text": "Stress adalah respons fisiologis/emosional ketika tuntutan eksternal melampaui pengetahuan, kemampuan atau sumber daya pada hasil yang penting. Challenge stress dapat meningkatkan energi; threat stress menguras kemampuan. Resilience ialah kapasitas bertahan dan bangkit dari kesulitan, konflik atau kegagalan. [hal. 388–392]"
    },
    {
      "kind": "figure",
      "title": "Yerkes-Dodson Stress Curve",
      "svg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 700 412.9\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-13-d-t MNU108-11-10-13-d-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-13-d-t\">Yerkes-Dodson Stress Curve</title><desc id=\"MNU108-11-10-13-d-d\">Yerkes-Dodson Stress Curve. </desc><defs><marker id=\"MNU108-11-10-13-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"700\" height=\"412.9\" rx=\"12\"/><text class=\"svg-title\" x=\"20\" y=\"25\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Performance</tspan></text><path class=\"svg-title\" stroke=\"currentColor\" stroke-width=\"2\" style=\"fill:none!important\" d=\"M50 58 V240 H675\"/><path class=\"text-accent-blue\" stroke=\"currentColor\" stroke-width=\"3\" style=\"fill:none!important\" d=\"M54 228 C175 185,237.5 73,362.5 83 S550 195,672 228\"/><text class=\"svg-text\" x=\"50\" y=\"265\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"50\" dy=\"0\">Rendah</tspan></text><text class=\"svg-text\" x=\"362.5\" y=\"265\" font-size=\"18\" text-anchor=\"middle\"><tspan x=\"362.5\" dy=\"0\">Sedang</tspan></text><text class=\"svg-text\" x=\"675\" y=\"265\" font-size=\"18\" text-anchor=\"end\"><tspan x=\"675\" dy=\"0\">Tinggi</tspan></text><text class=\"svg-title\" x=\"20\" y=\"298\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Stress</tspan></text><text class=\"svg-text\" x=\"20\" y=\"328\" font-size=\"18\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Skematis. Kurva konseptual: terlalu sedikit atau terlalu</tspan><tspan x=\"20\" dy=\"24.3\">banyak stres dapat menurunkan performance. Tidak ada angka</tspan><tspan x=\"20\" dy=\"24.3\">ambang universal atau rekomendasi menaikkan stres semua orang.</tspan></text></svg>",
      "mobileSvg": "<svg class=\"course-diagram-svg mnu108-post-diagram\" viewBox=\"0 0 360 469.6\" width=\"100%\" role=\"img\" aria-labelledby=\"MNU108-11-10-13-m-t MNU108-11-10-13-m-d\" xmlns=\"http://www.w3.org/2000/svg\"><title id=\"MNU108-11-10-13-m-t\">Yerkes-Dodson Stress Curve</title><desc id=\"MNU108-11-10-13-m-d\">Yerkes-Dodson Stress Curve. </desc><defs><marker id=\"MNU108-11-10-13-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"360\" height=\"469.6\" rx=\"12\"/><text class=\"svg-title\" x=\"20\" y=\"25\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Performance</tspan></text><path class=\"svg-title\" stroke=\"currentColor\" stroke-width=\"2\" style=\"fill:none!important\" d=\"M50 58 V240 H335\"/><path class=\"text-accent-blue\" stroke=\"currentColor\" stroke-width=\"3\" style=\"fill:none!important\" d=\"M54 228 C107 185,135.5 73,192.5 83 S278 195,332 228\"/><text class=\"svg-text\" x=\"50\" y=\"265\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"50\" dy=\"0\">Rendah</tspan></text><text class=\"svg-text\" x=\"192.5\" y=\"265\" font-size=\"16\" text-anchor=\"middle\"><tspan x=\"192.5\" dy=\"0\">Sedang</tspan></text><text class=\"svg-text\" x=\"335\" y=\"265\" font-size=\"16\" text-anchor=\"end\"><tspan x=\"335\" dy=\"0\">Tinggi</tspan></text><text class=\"svg-title\" x=\"20\" y=\"298\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Stress</tspan></text><text class=\"svg-text\" x=\"20\" y=\"328\" font-size=\"16\" text-anchor=\"start\"><tspan x=\"20\" dy=\"0\">Skematis. Kurva konseptual:</tspan><tspan x=\"20\" dy=\"21.6\">terlalu sedikit atau terlalu</tspan><tspan x=\"20\" dy=\"21.6\">banyak stres dapat menurunkan</tspan><tspan x=\"20\" dy=\"21.6\">performance. Tidak ada angka</tspan><tspan x=\"20\" dy=\"21.6\">ambang universal atau rekomendasi</tspan><tspan x=\"20\" dy=\"21.6\">menaikkan stres semua orang.</tspan></text></svg>",
      "altText": "Yerkes-Dodson Stress Curve. ",
      "caption": "Daft dan Marcic, Understanding Management 12e, [hal. 389].",
      "overview": {
        "heading": "Yerkes-Dodson Stress Curve",
        "cards": [],
        "footer": "Kurva konseptual: terlalu sedikit atau terlalu banyak stres dapat menurunkan performance. Tidak ada angka ambang universal atau rekomendasi menaikkan stres semua orang."
      }
    },
    {
      "kind": "table",
      "title": "Sumber stres kerja",
      "headers": [
        "Sumber",
        "Makna",
        "Tindakan yang relevan"
      ],
      "rows": [
        [
          "Task demands",
          "Tuntutan tugas, waktu atau pengetahuan",
          "Periksa workload, kapasitas dan prioritas."
        ],
        [
          "Role ambiguity",
          "Tidak jelas perilaku/hasil yang diharapkan",
          "Perjelas tanggung jawab dan ekspektasi."
        ],
        [
          "Role conflict",
          "Tuntutan peran saling bertentangan",
          "Selaraskan instruksi dan kewenangan."
        ],
        [
          "Interpersonal demands",
          "Tekanan dalam relasi kerja",
          "Perbaiki komunikasi, dukungan dan penanganan konflik."
        ]
      ],
      "caption": "[hal. 388–390]",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Individu dapat mengurangi stressors yang dapat diubah, mencari dukungan, memelihara kebiasaan sehat dan menggunakan kegiatan relaksasi yang sesuai. Organisasi berperan menyediakan social support, beban kerja wajar serta kontrol yang relevan atas pekerjaan. Resilience tidak membebaskan manajer dari kewajiban memperbaiki sumber tekanan. Latihan meditasi sumber bersifat opsional dan ditempatkan pada Lampiran A. [hal. 390–392]"
    },
    {
      "kind": "self-check",
      "question": "Mengapa dukungan dan kontrol atas pekerjaan dapat membantu menghadapi stress?",
      "answer": [
        {
          "kind": "p",
          "text": "Dukungan menyediakan informasi, relasi dan sumber daya; kontrol memberi ruang menata cara/waktu kerja. Keduanya membantu menghadapi tuntutan, sementara konflik instruksi atau workload tetap harus diselesaikan. [hal. 388–392]"
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
        "Pernyataan terlalu cepat",
        "Perbaikan"
      ],
      "rows": [
        [
          "Nice pasti efektif",
          "Periksa relasi, tanggung jawab, keputusan dan hasil."
        ],
        [
          "Introvert tidak bisa memimpin",
          "Dimensi dan tuntutan pekerjaan perlu dibaca bersama."
        ],
        [
          "EI sama dengan selalu tersenyum",
          "EI mencakup memahami dan mengelola emosi/relasi."
        ],
        [
          "Stres selalu buruk atau selalu baik",
          "Jenis, tingkat dan konteks tuntutan memengaruhi hasil."
        ]
      ],
      "caption": "[hal. 372–392]",
      "stackOnMobile": true
    },
    {
      "kind": "solution-reveal",
      "title": "Conficio Industries: nice, tanggung jawab dan promosi",
      "prompt": "Kasus buku yang ditugaskan RPP, diparafrasekan. Panel menilai kandidat promosi manajemen di San Antonio setelah mengamati kerja, menerima peer feedback dan mewawancarai kandidat. Salah satu kandidat memulihkan morale serta trust ketika beredar rumor PHK. Pegawai menyebutnya nice dan selalu membantu. Panel mempertanyakan apakah bantuan itu mengambil alih tugas, membiarkan tenggat longgar dan menghindari batas. Panel dalam teks memilih melanjutkan seleksi serta mengembangkan kandidat ini untuk kesempatan berikutnya. [hal. 367–375, 382–383, 398–399]",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Jelaskan makna nice bagi manajer dengan menghubungkan agreeableness, conscientiousness dan EI.",
            "Pisahkan pengamatan dan atribusi panel.",
            "Usulkan pengembangan yang mempertahankan trust sekaligus meningkatkan akuntabilitas."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil analisis untuk pembanding jawaban: Agreeableness membantu kerja sama dan relasi, tetapi popularitas belum membuktikan pengelolaan tugas. Conscientiousness menuntut tanggung jawab, ketekunan dan pencapaian. EI dapat membantu memahami kebutuhan pegawai, mengatur emosi saat berkata tidak, dan memberi feedback dengan hormat. Rumor PHK yang diredakan adalah bukti trust; dugaan menutupi kelemahan atau mengambil alih kerja perlu dikonfirmasi lewat deadline, pembagian tanggung jawab dan contoh keputusan. Jangan menyimpulkan kelemahan bawaan hanya dari label nice. Saran: delegasi dengan ekspektasi jelas, pemeriksaan kemajuan, coaching atas kekurangan, batas yang konsisten serta latihan percakapan sulit. Evaluasi hasil dan perilaku bersama; keputusan panel yang tertulis tidak sama dengan pembuktian bahwa kandidat pasti gagal sebagai pemimpin. [hal. 367–375, 382–383, 398–399]"
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan: keterlambatan, atribusi dan beban kerja",
      "prompt": "Latihan buatan: situasi berikut adalah asumsi untuk berlatih, tanpa klaim perusahaan nyata. Seorang anggota terlambat menyerahkan laporan. Manajer langsung menyebutnya malas, namun ketika laporan manajer sendiri terlambat ia menyalahkan perubahan permintaan. Anggota menerima instruksi berbeda dari dua atasan. [hal. 369–371, 382–387, 388–392]",
      "promptBlocks": [
        {
          "kind": "ul",
          "items": [
            "Identifikasi bias dan jenis masalah peran.",
            "Susun pemeriksaan fakta dan tindakan pengelolaan stres.",
            "Tunjukkan penggunaan EI dan self-management."
          ]
        }
      ],
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil analisis untuk pembanding jawaban: Penilaian kegagalan orang lain sebagai sifat dan kegagalan sendiri sebagai keadaan menunjukkan fundamental attribution error. Mengambil kredit pribadi untuk keberhasilan sambil menolak tanggung jawab kegagalan akan menunjukkan self-serving bias; ilustrasi belum menyebut keberhasilan, sehingga label kedua ini perlu bukti tambahan. Instruksi yang tidak kompatibel merupakan role conflict, sementara role ambiguity membutuhkan bukti ketidakjelasan ekspektasi. Periksa urutan instruksi, kapasitas dan deadline; selaraskan prioritas dua atasan. Gunakan empati, feedback yang spesifik, dukungan dan kontrol yang wajar atas pekerjaan. Catat komitmen, tentukan next action dan jadwal, lalu review. Menambah tekanan tanpa memperbaiki konflik tidak menyelesaikan penyebab. [hal. 369–371, 382–387, 388–392]"
        }
      ]
    }
  ]
};
