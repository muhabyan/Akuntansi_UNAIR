// Generated from AKK203 canonical 04; run node scripts/build-akk203-pra-uas.mjs.
import type {Reading} from '../../../types';
export const TM11_READING: Reading = {
  "tm": 11,
  "title": "Laporan Keuangan Organisasi Nonlaba: LSM",
  "ref": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) | [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) | [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20) | [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)",
  "intro": "Dana donor masih dibatasi dan kas tidak sama dengan surplus. Kamu akan menyusun hubungan laporan LSM, memeriksa syarat donor, dan membedakan contoh historis dari standar final yang harus dipakai entitas sebenarnya.",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "LSM: tentukan bentuk badan dan kerangka laporan",
    "ISAK 335: penyajian dan versi perlu dibaca terpisah",
    "Aset neto: pahami asal pembatasan",
    "Hubungan lima laporan dalam contoh historis",
    "Menyusun angka: satu kasus, beberapa pemeriksaan",
    "Audit dan transparansi yayasan"
  ],
  "blocks": [
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat",
      "blocks": [
        {
          "kind": "figure",
          "title": "Peta Laporan Keuangan Organisasi Nonlaba: LSM",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-KILAT-d-title ASP-UAS-11-KILAT-d-desc\" width=\"100%\" viewBox=\"0 0 760 750.6000000000001\"><title id=\"ASP-UAS-11-KILAT-d-title\">Peta Laporan Keuangan Organisasi Nonlaba: LSM</title><desc id=\"ASP-UAS-11-KILAT-d-desc\">Peta Laporan Keuangan Organisasi Nonlaba: LSM. Tentukan konteks → LSM: tentukan bentuk badan dan kerangka laporan → ISAK 335: penyajian dan versi perlu dibaca terpisah → Aset neto: pahami asal pembatasan → Hubungan lima laporan dalam contoh historis → Menyusun angka: satu kasus, beberapa pemeriksaan → Audit dan transparansi yayasan Tentukan konteks: PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5 LSM: tentukan bentuk badan dan kerangka laporan ISAK 335: penyajian dan versi perlu dibaca terpisah Aset neto: pahami asal pembatasan Hubungan lima laporan dalam contoh historis Menyusun angka: satu kasus, beberapa pemeriksaan Audit dan transparansi yayasan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-KILAT-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"750.6000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LSM: tentukan bentuk badan dan kerangka laporan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-d-arrow)\" d=\"M380 218.4 V240.4\"/><rect class=\"svg-card\" x=\"24\" y=\"246.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"272.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">ISAK 335: penyajian dan versi perlu dibaca terpisah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-d-arrow)\" d=\"M380 309 V331\"/><rect class=\"svg-card\" x=\"24\" y=\"337\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"363\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Aset neto: pahami asal pembatasan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-d-arrow)\" d=\"M380 399.6 V421.6\"/><rect class=\"svg-card\" x=\"24\" y=\"427.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"453.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hubungan lima laporan dalam contoh historis</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-d-arrow)\" d=\"M380 490.20000000000005 V512.2\"/><rect class=\"svg-card\" x=\"24\" y=\"518.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"544.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Menyusun angka: satu kasus, beberapa pemeriksaan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-d-arrow)\" d=\"M380 580.8000000000001 V602.8000000000001\"/><rect class=\"svg-card\" x=\"24\" y=\"608.8000000000001\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"634.8000000000001\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Audit dan transparansi yayasan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"699.4000000000001\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-KILAT-m-title ASP-UAS-11-KILAT-m-desc\" width=\"100%\" viewBox=\"0 0 340 1065.6000000000001\"><title id=\"ASP-UAS-11-KILAT-m-title\">Peta Laporan Keuangan Organisasi Nonlaba: LSM</title><desc id=\"ASP-UAS-11-KILAT-m-desc\">Peta Laporan Keuangan Organisasi Nonlaba: LSM. Tentukan konteks → LSM: tentukan bentuk badan dan kerangka laporan → ISAK 335: penyajian dan versi perlu dibaca terpisah → Aset neto: pahami asal pembatasan → Hubungan lima laporan dalam contoh historis → Menyusun angka: satu kasus, beberapa pemeriksaan → Audit dan transparansi yayasan Tentukan konteks: PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5 LSM: tentukan bentuk badan dan kerangka laporan ISAK 335: penyajian dan versi perlu dibaca terpisah Aset neto: pahami asal pembatasan Hubungan lima laporan dalam contoh historis Menyusun angka: satu kasus, beberapa pemeriksaan Audit dan transparansi yayasan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-KILAT-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"1065.6000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"146.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAK terkait; DN Bab 3;</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">peraturan terkait, RPP</tspan></text><text class=\"svg-text\" x=\"40\" y=\"141\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PDF 5</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-m-arrow)\" d=\"M170 178.2 V200.2\"/><rect class=\"svg-card\" x=\"24\" y=\"206.2\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"232.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LSM: tentukan bentuk</tspan><tspan x=\"40\" dy=\"26.599999999999998\">badan dan kerangka</tspan><tspan x=\"40\" dy=\"26.599999999999998\">laporan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-m-arrow)\" d=\"M170 322 V344\"/><rect class=\"svg-card\" x=\"24\" y=\"350\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"376\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">ISAK 335: penyajian</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dan versi perlu dibaca</tspan><tspan x=\"40\" dy=\"26.599999999999998\">terpisah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-m-arrow)\" d=\"M170 465.8 V487.8\"/><rect class=\"svg-card\" x=\"24\" y=\"493.8\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"519.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Aset neto: pahami asal</tspan><tspan x=\"40\" dy=\"26.599999999999998\">pembatasan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-m-arrow)\" d=\"M170 583 V605\"/><rect class=\"svg-card\" x=\"24\" y=\"611\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"637\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hubungan lima laporan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dalam contoh historis</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-m-arrow)\" d=\"M170 700.2 V722.2\"/><rect class=\"svg-card\" x=\"24\" y=\"728.2\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"754.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Menyusun angka: satu</tspan><tspan x=\"40\" dy=\"26.599999999999998\">kasus, beberapa</tspan><tspan x=\"40\" dy=\"26.599999999999998\">pemeriksaan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KILAT-m-arrow)\" d=\"M170 844 V866\"/><rect class=\"svg-card\" x=\"24\" y=\"872\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"898\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Audit dan transparansi</tspan><tspan x=\"40\" dy=\"26.599999999999998\">yayasan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"989.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
          "altText": "Peta Laporan Keuangan Organisasi Nonlaba: LSM. Tentukan konteks → LSM: tentukan bentuk badan dan kerangka laporan → ISAK 335: penyajian dan versi perlu dibaca terpisah → Aset neto: pahami asal pembatasan → Hubungan lima laporan dalam contoh historis → Menyusun angka: satu kasus, beberapa pemeriksaan → Audit dan transparansi yayasan Tentukan konteks: PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5 LSM: tentukan bentuk badan dan kerangka laporan ISAK 335: penyajian dan versi perlu dibaca terpisah Aset neto: pahami asal pembatasan Hubungan lima laporan dalam contoh historis Menyusun angka: satu kasus, beberapa pemeriksaan Audit dan transparansi yayasan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Tentukan konteks: PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5",
            "LSM: tentukan bentuk badan dan kerangka laporan",
            "ISAK 335: penyajian dan versi perlu dibaca terpisah",
            "Aset neto: pahami asal pembatasan",
            "Hubungan lima laporan dalam contoh historis",
            "Menyusun angka: satu kasus, beberapa pemeriksaan",
            "Audit dan transparansi yayasan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "ul",
          "items": [
            "Tentukan bentuk badan dan kerangka sebelum menyusun laporan.",
            "ISAK 335 membahas penyajian; standar transaksi tetap diperlukan.",
            "Pembatasan donor harus ditelusuri ke surat/kontrak.",
            "Pembebasan pembatasan tidak menambah total aset neto.",
            "Kas dan aset neto akhir harus cocok antar laporan.",
            "DE 2018 dipakai sebagai ilustrasi historis dengan batas eksplisit."
          ]
        },
        {
          "kind": "p",
          "text": "Kalau cuma sempat ingat satu hal: Tentukan bentuk badan dan kerangka sebelum menyusun laporan."
        },
        {
          "kind": "callout",
          "variant": "note",
          "title": "Cakupan dan periode sumber",
          "text": "RPP: PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5. Teks final SAK/ISAK 335 dan amendemen 2026 belum tersedia utuh; ilustrasi DE 2018 tidak membuktikan kepatuhan aktual."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "LSM: tentukan bentuk badan dan kerangka laporan",
      "source": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
      "blocks": [
        {
          "kind": "p",
          "text": "Sebuah LSM menerima sumber daya untuk program sosial. Sebutan LSM menggambarkan kegiatan, sehingga kamu perlu memeriksa bentuk hukum, tujuan, sumber dana dan kewajiban laporan. Untuk latihan ini LSM diasumsikan berbentuk yayasan. Kewajiban yayasan menyimpan catatan serta dokumen dan menyusun laporan tahunan dibaca dari UU Yayasan. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)"
        },
        {
          "kind": "p",
          "text": "Yayasan menyusun laporan tahunan paling lambat lima bulan sejak tahun buku ditutup. Laporan ditandatangani pengurus dan pengawas serta disahkan pembina sesuai pasal terkait. Kerangka SAK yang dipakai ditentukan menurut kelayakan entitas dan periode. Status nonlaba tidak otomatis membuat semua transaksi diakui dengan cara yang sama atau bebas kewajiban audit. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)"
        },
        {
          "kind": "figure",
          "title": "Menentukan dasar laporan LSM",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-KERANGKA-d-title ASP-UAS-11-KERANGKA-d-desc\" width=\"100%\" viewBox=\"0 0 760 532.2\"><title id=\"ASP-UAS-11-KERANGKA-d-title\">Menentukan dasar laporan LSM</title><desc id=\"ASP-UAS-11-KERANGKA-d-desc\">Menentukan dasar laporan LSM. Bentuk hukum dan kegiatan → Kewajiban regulasi badan → Kerangka SAK dan periode → Kebijakan transaksi → Laporan dan pengungkapan Bentuk hukum dan kegiatan Kewajiban regulasi badan Kerangka SAK dan periode Kebijakan transaksi Laporan dan pengungkapan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-KERANGKA-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"532.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bentuk hukum dan kegiatan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-d-arrow)\" d=\"M380 90.6 V112.6\"/><rect class=\"svg-card\" x=\"24\" y=\"118.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"144.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kewajiban regulasi badan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-d-arrow)\" d=\"M380 181.2 V203.2\"/><rect class=\"svg-card\" x=\"24\" y=\"209.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"235.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kerangka SAK dan periode</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-d-arrow)\" d=\"M380 271.79999999999995 V293.79999999999995\"/><rect class=\"svg-card\" x=\"24\" y=\"299.79999999999995\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"325.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kebijakan transaksi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-d-arrow)\" d=\"M380 362.4 V384.4\"/><rect class=\"svg-card\" x=\"24\" y=\"390.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"416.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan dan pengungkapan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"481\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-KERANGKA-m-title ASP-UAS-11-KERANGKA-m-desc\" width=\"100%\" viewBox=\"0 0 340 663.7999999999998\"><title id=\"ASP-UAS-11-KERANGKA-m-title\">Menentukan dasar laporan LSM</title><desc id=\"ASP-UAS-11-KERANGKA-m-desc\">Menentukan dasar laporan LSM. Bentuk hukum dan kegiatan → Kewajiban regulasi badan → Kerangka SAK dan periode → Kebijakan transaksi → Laporan dan pengungkapan Bentuk hukum dan kegiatan Kewajiban regulasi badan Kerangka SAK dan periode Kebijakan transaksi Laporan dan pengungkapan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-KERANGKA-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"663.7999999999998\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bentuk hukum dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">kegiatan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-m-arrow)\" d=\"M170 117.19999999999999 V139.2\"/><rect class=\"svg-card\" x=\"24\" y=\"145.2\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"171.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kewajiban regulasi</tspan><tspan x=\"40\" dy=\"26.599999999999998\">badan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-m-arrow)\" d=\"M170 234.39999999999998 V256.4\"/><rect class=\"svg-card\" x=\"24\" y=\"262.4\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"288.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kerangka SAK dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">periode</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-m-arrow)\" d=\"M170 351.59999999999997 V373.59999999999997\"/><rect class=\"svg-card\" x=\"24\" y=\"379.59999999999997\" width=\"292\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"405.59999999999997\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kebijakan transaksi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-KERANGKA-m-arrow)\" d=\"M170 442.19999999999993 V464.19999999999993\"/><rect class=\"svg-card\" x=\"24\" y=\"470.19999999999993\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"496.19999999999993\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">pengungkapan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"587.3999999999999\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
          "altText": "Menentukan dasar laporan LSM. Bentuk hukum dan kegiatan → Kewajiban regulasi badan → Kerangka SAK dan periode → Kebijakan transaksi → Laporan dan pengungkapan Bentuk hukum dan kegiatan Kewajiban regulasi badan Kerangka SAK dan periode Kebijakan transaksi Laporan dan pengungkapan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Bentuk hukum dan kegiatan",
            "Kewajiban regulasi badan",
            "Kerangka SAK dan periode",
            "Kebijakan transaksi",
            "Laporan dan pengungkapan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Apakah semua LSM otomatis mempunyai kewajiban persis sama seperti yayasan?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Contoh ini mengasumsikan bentuk yayasan. Bentuk lain memerlukan regulasi badan serta kerangka laporan yang sesuai. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "ISAK 335: penyajian dan versi perlu dibaca terpisah",
      "source": "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)",
      "blocks": [
        {
          "kind": "p",
          "text": "Interpretasi penyajian menjelaskan cara menyesuaikan deskripsi pos atau nama laporan bagi entitas berorientasi nonlaba. Pengakuan dan pengukuran transaksi tetap memerlukan standar transaksi serta kerangka SAK yang relevan. Menulis ISAK 335 pada judul laporan belum membuktikan seluruh perlakuan donasi, aset atau liabilitas telah benar. [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)"
        },
        {
          "kind": "p",
          "text": "Materi terbuka yang tersedia adalah DE ISAK 35 tahun 2018, sebuah draf eksposur historis. Teks final yang lengkap dan amendemen 2026 belum tersedia dalam paket lokal. IAI mengubah nomor 35 menjadi 335 pada 2024 dan mengumumkan amendemen pada 3 Juni 2026 untuk menyesuaikan rujukan dengan PSAK 118. Pengumuman PSAK 118 menyebut efektif 1 Januari 2027; tanggal efektif khusus amendemen 335 tidak ditebak dari berita singkat. [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)"
        },
        {
          "kind": "table",
          "title": "Status dokumen yang dipakai",
          "headers": [
            "Dokumen",
            "Fungsi",
            "Batas"
          ],
          "rows": [
            [
              "DE ISAK 35(2018)",
              "Mempelajari contoh penyajian historis",
              "Draf, bukan ketentuan final"
            ],
            [
              "ISAK 35/335",
              "Identitas interpretasi setelah penomoran",
              "Teks final perlu akses sah"
            ],
            [
              "Amendemen 335(2026)",
              "Pembaruan rujukan dan ilustrasi",
              "Tanggal penerapan khusus perlu teks final"
            ],
            [
              "PSAK 118",
              "Penyajian dan pengungkapan; efektif 2027",
              "Tidak diberlakukan otomatis untuk semua kasus 2026"
            ]
          ],
          "caption": "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apakah DE 2018 dapat diklaim sebagai salinan lengkap ISAK 335 terkini?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Gunakan sebagai ilustrasi historis dan periksa standar final serta amendemen sebelum klaim kepatuhan aktual. [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI penomoran efektif 1 Januari 2024: ISAK 35→335; IAI pengesahan amendemen 3 Juni 2026; PSAK 118 efektif 1 Januari 2027 menurut pengumuman 18 Juni 2025](https://web.iaiglobal.or.id/Berita-IAI/detail/pengesahan_amendemen_isak_335)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Aset neto: pahami asal pembatasan",
      "source": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
      "blocks": [
        {
          "kind": "p",
          "text": "Without restrictions berarti tanpa pembatasan dari pemberi sumber daya. With restrictions berarti dengan pembatasan dari pemberi sumber daya, misalnya tujuan program atau periode. Pada contoh historis, kelas aset neto membantu pengguna melihat sumber daya yang belum bebas digunakan. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
        },
        {
          "kind": "p",
          "text": "Pembatasan pemberi sumber daya berbeda dari keputusan internal pengurus mencadangkan dana. Kamu harus membaca surat donor dan kebijakan organisasi. Penggunaan dana yang memenuhi tujuan atau waktu dapat menyebabkan pembebasan pembatasan pada contoh sumber. Pembebasan memindahkan klasifikasi dan tidak menambah total aset neto. Pembatasan penyajian juga perlu dibedakan dari syarat pengakuan transaksi yang dapat menimbulkan liabilitas. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
        },
        {
          "kind": "figure",
          "title": "Dua kelas aset neto pada contoh historis",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-NETO-d-title ASP-UAS-11-NETO-d-desc\" width=\"100%\" viewBox=\"0 0 760 334.8\"><title id=\"ASP-UAS-11-NETO-d-title\">Dua kelas aset neto pada contoh historis</title><desc id=\"ASP-UAS-11-NETO-d-desc\">Dua kelas aset neto pada contoh historis. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Tanpa pembatasan: Penggunaan tidak dibatasi donor Dengan pembatasan: Tujuan atau periode donor masih berlaku Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-NETO-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"334.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tanpa pembatasan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penggunaan tidak dibatasi donor</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Dengan pembatasan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Tujuan atau periode donor masih berlaku</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-NETO-m-title ASP-UAS-11-NETO-m-desc\" width=\"100%\" viewBox=\"0 0 340 410.4\"><title id=\"ASP-UAS-11-NETO-m-title\">Dua kelas aset neto pada contoh historis</title><desc id=\"ASP-UAS-11-NETO-m-desc\">Dua kelas aset neto pada contoh historis. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Tanpa pembatasan: Penggunaan tidak dibatasi donor Dengan pembatasan: Tujuan atau periode donor masih berlaku Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-NETO-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"410.4\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tanpa pembatasan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penggunaan tidak</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">dibatasi donor</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"181\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"207\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Dengan pembatasan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Tujuan atau periode</tspan></text><text class=\"svg-text\" x=\"40\" y=\"268.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">donor masih berlaku</tspan></text><text class=\"svg-text\" x=\"24\" y=\"334\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "altText": "Dua kelas aset neto pada contoh historis. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Tanpa pembatasan: Penggunaan tidak dibatasi donor Dengan pembatasan: Tujuan atau periode donor masih berlaku Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Tanpa pembatasan: Penggunaan tidak dibatasi donor",
            "Dengan pembatasan: Tujuan atau periode donor masih berlaku",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "table",
          "title": "Pembatasan dan kewajiban",
          "headers": [
            "Keadaan",
            "Pertanyaan"
          ],
          "rows": [
            [
              "Donor membatasi tujuan",
              "Apakah tujuan/waktu sudah terpenuhi?"
            ],
            [
              "Pengurus mencadangkan dana",
              "Apakah sumber pembatasan internal atau donor?"
            ],
            [
              "Dana wajib dikembalikan bila syarat gagal",
              "Apa standar pengakuan dan kontrak yang berlaku?"
            ],
            [
              "Pembatasan dibebaskan",
              "Bagaimana reklasifikasi dan pengungkapan?"
            ]
          ],
          "caption": "[IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15) [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Pada asumsi kasus, Rp 60 juta dibebaskan dari pembatasan. Apakah total aset neto naikRp 60 juta?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Satu kelas naik dan kelas lain turun dengan jumlah sama; total reklasifikasi nol. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Hubungan lima laporan dalam contoh historis",
      "source": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
      "blocks": [
        {
          "kind": "p",
          "text": "Laporan posisi keuangan menyajikan aset, liabilitas dan aset neto pada tanggal tertentu. Laporan penghasilan komprehensif menggambarkan perubahan dari penghasilan dan beban pada periode. Laporan perubahan aset neto menghubungkan saldo awal dengan saldo akhir menurut kelas. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
        },
        {
          "kind": "p",
          "text": "Laporan arus kas menjelaskan penerimaan serta pembayaran operasi, investasi dan pendanaan. Ca LK menerangkan kebijakan, pembatasan dan rincian. Saldo kas akhir harus cocok dengan posisi keuangan. Saldo aset neto akhir harus cocok dengan perubahan aset neto. Surplus dan kas dapat berbeda ketika ada transaksi nonkas atau perubahan aset/liabilitas. Judul dan format contoh harus dibaca menurut periode sumber. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
        },
        {
          "kind": "figure",
          "title": "Hubungan laporan LSM",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-LAPORAN-d-title ASP-UAS-11-LAPORAN-d-desc\" width=\"100%\" viewBox=\"0 0 760 590.4000000000001\"><title id=\"ASP-UAS-11-LAPORAN-d-title\">Hubungan laporan LSM</title><desc id=\"ASP-UAS-11-LAPORAN-d-desc\">Hubungan laporan LSM. Transaksi dan kebijakan → Penghasilan komprehensif → Perubahan aset neto → Posisi keuangan Transaksi dan kebijakan: Identifikasi penghasilan, beban, aset, liabilitas Penghasilan komprehensif: Surplus/defisit serta OCI bila ada Perubahan aset neto: Saldo awal, perubahan dan reklasifikasi Posisi keuangan: Aset=liabilitas+aset neto Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-LAPORAN-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"590.4000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Transaksi dan kebijakan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Identifikasi penghasilan, beban, aset, liabilitas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-LAPORAN-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Penghasilan komprehensif</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Surplus/defisit serta OCI bila ada</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-LAPORAN-d-arrow)\" d=\"M380 255.60000000000002 V277.6\"/><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Perubahan aset neto</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Saldo awal, perubahan dan reklasifikasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-LAPORAN-d-arrow)\" d=\"M380 383.40000000000003 V405.40000000000003\"/><rect class=\"svg-card\" x=\"24\" y=\"411.40000000000003\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"437.40000000000003\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Posisi keuangan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"474.00000000000006\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Aset=liabilitas+aset neto</tspan></text><text class=\"svg-text\" x=\"24\" y=\"539.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-LAPORAN-m-title ASP-UAS-11-LAPORAN-m-desc\" width=\"100%\" viewBox=\"0 0 340 794.8\"><title id=\"ASP-UAS-11-LAPORAN-m-title\">Hubungan laporan LSM</title><desc id=\"ASP-UAS-11-LAPORAN-m-desc\">Hubungan laporan LSM. Transaksi dan kebijakan → Penghasilan komprehensif → Perubahan aset neto → Posisi keuangan Transaksi dan kebijakan: Identifikasi penghasilan, beban, aset, liabilitas Penghasilan komprehensif: Surplus/defisit serta OCI bila ada Perubahan aset neto: Saldo awal, perubahan dan reklasifikasi Posisi keuangan: Aset=liabilitas+aset neto Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-LAPORAN-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"794.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"172.79999999999998\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Transaksi dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">kebijakan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"117.19999999999999\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Identifikasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"142.39999999999998\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">penghasilan, beban,</tspan></text><text class=\"svg-text\" x=\"40\" y=\"167.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">aset, liabilitas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-LAPORAN-m-arrow)\" d=\"M170 204.79999999999998 V226.79999999999998\"/><rect class=\"svg-card\" x=\"24\" y=\"232.79999999999998\" width=\"292\" height=\"147.6\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"258.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Penghasilan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">komprehensif</tspan></text><text class=\"svg-text\" x=\"40\" y=\"321.99999999999994\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Surplus/defisit serta</tspan></text><text class=\"svg-text\" x=\"40\" y=\"347.19999999999993\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">OCI bila ada</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-LAPORAN-m-arrow)\" d=\"M170 384.4 V406.4\"/><rect class=\"svg-card\" x=\"24\" y=\"412.4\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"438.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Perubahan aset neto</tspan></text><text class=\"svg-text\" x=\"40\" y=\"475\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Saldo awal, perubahan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"500.2\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">dan reklasifikasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-11-LAPORAN-m-arrow)\" d=\"M170 537.4 V559.4\"/><rect class=\"svg-card\" x=\"24\" y=\"565.4\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"591.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Posisi keuangan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"628\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Aset=liabilitas+aset</tspan></text><text class=\"svg-text\" x=\"40\" y=\"653.2\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">neto</tspan></text><text class=\"svg-text\" x=\"24\" y=\"718.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "altText": "Hubungan laporan LSM. Transaksi dan kebijakan → Penghasilan komprehensif → Perubahan aset neto → Posisi keuangan Transaksi dan kebijakan: Identifikasi penghasilan, beban, aset, liabilitas Penghasilan komprehensif: Surplus/defisit serta OCI bila ada Perubahan aset neto: Saldo awal, perubahan dan reklasifikasi Posisi keuangan: Aset=liabilitas+aset neto Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Transaksi dan kebijakan: Identifikasi penghasilan, beban, aset, liabilitas",
            "Penghasilan komprehensif: Surplus/defisit serta OCI bila ada",
            "Perubahan aset neto: Saldo awal, perubahan dan reklasifikasi",
            "Posisi keuangan: Aset=liabilitas+aset neto",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "table",
          "title": "Arus kas dan Ca LK sebagai penghubung",
          "headers": [
            "Laporan",
            "Pemeriksaan"
          ],
          "rows": [
            [
              "Arus kas",
              "Kas awal+perubahan=kas akhir pada posisi keuangan"
            ],
            [
              "Ca LK",
              "Kebijakan, pembatasan donor, reklasifikasi dan rincian beban"
            ],
            [
              "Perubahan aset neto",
              "Saldo kelas akhir cocok dengan posisi keuangan"
            ]
          ],
          "caption": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Mengapa surplusRp 120 juta dapat berbeda dari kas akhirRp 70 juta pada latihan?",
          "answer": [
            {
              "kind": "p",
              "text": "PeralatanRp 50 juta dibeli sebagai aset, sehingga mengurangi kas tanpa menjadi beban langsung dalam asumsi kasus. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Menyusun angka: satu kasus, beberapa pemeriksaan",
      "source": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
      "blocks": [
        {
          "kind": "p",
          "text": "Latihan buatan memakai juta rupiah, saldo awal nol, sumbangan tanpa pembatasan 200 dan dengan pembatasan program 100. Semua penerimaan diasumsikan sudah memenuhi pengakuan penghasilan. Beban umum 120 dan program 60 dibayar tunai. Program 60 memenuhi tujuan donor. Peralatan 50 dibeli tunai pada akhir periode dan belum siap digunakan, sehingga tidak ada penyusutan dalam latihan. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
        },
        {
          "kind": "p",
          "text": "Jumlah penghasilan 300 dikurangi beban 180 memberi surplus 120. Reklasifikasi 60 membuat saldo tanpa pembatasan 200+60-180=80 dan dengan pembatasan 100-60=40. Kas 300-180-50=70; peralatan 50 memberi aset 120. Liabilitas diasumsikan nol. Setiap angka adalah data buatan untuk memahami hubungan laporan, tidak berasal dari placeholderxxxx pada contoh IAI. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
        },
        {
          "kind": "formula",
          "text": "\\text{Aset neto akhir}=\\text{Aset neto awal}+\\text{Perubahan neto}",
          "note": "Hubungan akuntansi pada latihan; reklasifikasi antar kelas tidak mengubah total."
        },
        {
          "kind": "table",
          "title": "Latihan buatan, dalam juta Rp",
          "headers": [
            "Pemeriksaan",
            "Langkah",
            "Hasil"
          ],
          "rows": [
            [
              "Surplus total",
              "300-180",
              "120"
            ],
            [
              "Tanpa pembatasan",
              "200+60-180",
              "80"
            ],
            [
              "Dengan pembatasan",
              "100-60",
              "40"
            ],
            [
              "Kas akhir",
              "300-180-50",
              "70"
            ],
            [
              "Posisi keuangan",
              "Kas 70+peralatan 50=liabilitas 0+aset neto 120",
              "Seimbang 120"
            ]
          ],
          "caption": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Jika reklasifikasi 60 dicatat kembali sebagai sumbangan baru, apa akibatnya?",
          "answer": [
            {
              "kind": "p",
              "text": "Total penghasilan dan aset neto akan berlebih 60. Reklasifikasi harus nol secara total. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Audit dan transparansi yayasan",
      "source": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
      "blocks": [
        {
          "kind": "p",
          "text": "UU 28/2004 mengubah Pasal 52: yayasan yang menerima bantuan negara, luar negeri, dan/atau pihak lain paling sedikitRp 500 juta dalam satu tahun buku, atau memiliki kekayaan di luar wakaf paling sedikitRp 20 miliar, wajib memenuhi ketentuan publikasi ikhtisar keuangan dan audit oleh akuntan publik. Dua ambang dihubungkan dengan kata atau. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)"
        },
        {
          "kind": "p",
          "text": "Yayasan yang tidak memenuhi kedua ambang tetap perlu memeriksa kewajiban lain, termasuk kontrak donor dan regulasi badan/kegiatan. Jangan menyimpulkan bebas audit dari satu angka penerimaan saja jika kekayaan belum diketahui. Identifikasi tahun buku, jenis bantuan, kekayaan di luar wakaf dan hasil audit, kemudian jelaskan pihak penerima hasil serta kewajiban publikasinya. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)"
        },
        {
          "kind": "figure",
          "title": "Uji kewajiban audit yayasan",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-AUDIT-d-title ASP-UAS-11-AUDIT-d-desc\" width=\"100%\" viewBox=\"0 0 760 499.2\"><title id=\"ASP-UAS-11-AUDIT-d-title\">Uji kewajiban audit yayasan</title><desc id=\"ASP-UAS-11-AUDIT-d-desc\">Dua ambang alternatif; salah satu cukup, tidak harus keduanya. Bantuan≥Rp 500 juta dalam 1 tahun buku: ATAU Kekayaan di luar wakaf≥Rp 20 miliar: Salah satu terpenuhi Salah satu terpenuhi → audit akuntan publik dan publikasi ikhtisar Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-AUDIT-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"499.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bantuan≥Rp 500 juta dalam 1 tahun buku</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">ATAU</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kekayaan di luar wakaf≥Rp 20 miliar</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Salah satu terpenuhi</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"330.8\" width=\"712\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"356.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Salah satu terpenuhi → audit akuntan publik dan publikasi</tspan><tspan x=\"40\" dy=\"26.599999999999998\">ikhtisar</tspan></text><text class=\"svg-text\" x=\"24\" y=\"448\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-11-AUDIT-m-title ASP-UAS-11-AUDIT-m-desc\" width=\"100%\" viewBox=\"0 0 340 629.4\"><title id=\"ASP-UAS-11-AUDIT-m-title\">Uji kewajiban audit yayasan</title><desc id=\"ASP-UAS-11-AUDIT-m-desc\">Dua ambang alternatif; salah satu cukup, tidak harus keduanya. Bantuan≥Rp 500 juta dalam 1 tahun buku: ATAU Kekayaan di luar wakaf≥Rp 20 miliar: Salah satu terpenuhi Salah satu terpenuhi → audit akuntan publik dan publikasi ikhtisar Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-11-AUDIT-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"629.4\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"122.39999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bantuan≥Rp 500 juta</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dalam 1 tahun buku</tspan></text><text class=\"svg-text\" x=\"40\" y=\"117.19999999999999\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">ATAU</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"182.39999999999998\" width=\"292\" height=\"122.39999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"208.39999999999998\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kekayaan di luar</tspan><tspan x=\"40\" dy=\"26.599999999999998\">wakaf≥Rp 20 miliar</tspan></text><text class=\"svg-text\" x=\"40\" y=\"271.59999999999997\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Salah satu terpenuhi</tspan></text><text class=\"svg-text\" x=\"24\" y=\"336.79999999999995\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil</tspan><tspan x=\"24\" dy=\"25.2\">gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"409.19999999999993\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"435.19999999999993\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Salah satu terpenuhi →</tspan><tspan x=\"40\" dy=\"26.599999999999998\">audit akuntan publik</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dan publikasi ikhtisar</tspan></text><text class=\"svg-text\" x=\"24\" y=\"553\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
          "altText": "Dua ambang alternatif; salah satu cukup, tidak harus keduanya. Bantuan≥Rp 500 juta dalam 1 tahun buku: ATAU Kekayaan di luar wakaf≥Rp 20 miliar: Salah satu terpenuhi Salah satu terpenuhi → audit akuntan publik dan publikasi ikhtisar Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Bantuan≥Rp 500 juta dalam 1 tahun buku: ATAU",
            "Kekayaan di luar wakaf≥Rp 20 miliar: Salah satu terpenuhi",
            "Salah satu terpenuhi → audit akuntan publik dan publikasi ikhtisar",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "BantuanRp 400 juta dan kekayaan di luar wakafRp 25 miliar. Apakah ambang audit terpenuhi?",
          "answer": [
            {
              "kind": "p",
              "text": "Ya, melalui ambang kekayaan. Syaratnya alternatif, tidak harus terpenuhi bersamaan. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pendalaman: format dan teks yang belum tersedia",
      "blocks": [
        {
          "kind": "p",
          "text": "FormatA/B posisi serta penghasilan pada DE 2018 adalah alternatif ilustratif. FormatA/B tidak dimaksudkan mencakup seluruh aspek SAK atau seluruh variasi entitas. Contoh arus kas langsung/tidak langsung pada PDF 27-28 dan rincian pembatasan serta beban pada PDF 29-33 perlu dibaca bersama fakta entitas."
        },
        {
          "kind": "p",
          "text": "Teks final ISAK 335 beserta amendemen 2026 dan standar transaksi belum tersedia utuh. Klaim bahwa model ini merupakan laporan aktual yang telah memenuhi seluruh SAK tidak dibuat. Bab DN 3 belum dapat diaudit."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "latihan",
      "title": "Persiapan ujian",
      "blocks": [
        {
          "kind": "table",
          "title": "Jebakan dan langkah koreksi",
          "headers": [
            "Jebakan",
            "Langkah yang benar"
          ],
          "rows": [
            [
              "LSM, parpol dan desa tercampur dalam satu bacaan",
              "Pisahkan LSM TM 11 dan parpol TM 12;desa tidak menjadi inti."
            ],
            [
              "ISAK 35 digunakan sebagai semua standar donasi",
              "Pisahkan penyajian, pengakuan dan syarat kontrak."
            ],
            [
              "Donasi peralatan otomatis selalu dibebaskan",
              "Periksa syarat donor;latihan hanya memakai asumsi program yang jelas."
            ]
          ],
          "caption": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: susun lima laporan LSM",
      "prompt": "Gunakan donasi 200 tanpa pembatasan,100 untuk program; beban 120 umum dan 60 program; pembelian peralatan 50. Pembatasan program 60 telah terpenuhi.",
      "blocks": [
        {
          "kind": "table",
          "title": "Penghasilan komprehensif, format latihan historis",
          "headers": [
            "Pos",
            "Juta Rp"
          ],
          "rows": [
            [
              "Sumbangan tanpa pembatasan",
              "200"
            ],
            [
              "Sumbangan dengan pembatasan",
              "100"
            ],
            [
              "Total penghasilan",
              "300"
            ],
            [
              "Beban umum",
              "(120)"
            ],
            [
              "Beban program",
              "(60)"
            ],
            [
              "Surplus total",
              "120"
            ],
            [
              "OCI, asumsi nihil",
              "0"
            ]
          ],
          "caption": "Latihan buatan 20X1, satuan juta Rp; asumsi pengakuan sudah dipenuhi, liabilitas/OCI/saldo awal nol, peralatan belum siap digunakan. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "table",
          "title": "Perubahan aset neto",
          "headers": [
            "Pos",
            "Tanpa pembatasan",
            "Dengan pembatasan",
            "Total"
          ],
          "rows": [
            [
              "Saldo awal",
              "0",
              "0",
              "0"
            ],
            [
              "Surplus sebelum reklasifikasi",
              "20",
              "100",
              "120"
            ],
            [
              "Pembebasan pembatasan",
              "60",
              "(60)",
              "0"
            ],
            [
              "Saldo akhir",
              "80",
              "40",
              "120"
            ]
          ],
          "caption": "Latihan buatan 20X1, satuan juta Rp; asumsi pengakuan sudah dipenuhi, liabilitas/OCI/saldo awal nol, peralatan belum siap digunakan. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "table",
          "title": "Posisi keuangan",
          "headers": [
            "Pos",
            "Juta Rp"
          ],
          "rows": [
            [
              "Kas",
              "70"
            ],
            [
              "Peralatan belum siap digunakan",
              "50"
            ],
            [
              "Total aset",
              "120"
            ],
            [
              "Liabilitas",
              "0"
            ],
            [
              "Aset neto tanpa pembatasan",
              "80"
            ],
            [
              "Aset neto dengan pembatasan",
              "40"
            ],
            [
              "Liabilitas+aset neto",
              "120"
            ]
          ],
          "caption": "Latihan buatan 20X1, satuan juta Rp; asumsi pengakuan sudah dipenuhi, liabilitas/OCI/saldo awal nol, peralatan belum siap digunakan. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "table",
          "title": "Arus kas metode langsung",
          "headers": [
            "Pos",
            "Juta Rp"
          ],
          "rows": [
            [
              "Penerimaan donasi operasi dalam asumsi kasus",
              "300"
            ],
            [
              "Pembayaran beban",
              "(180)"
            ],
            [
              "Kas neto operasi",
              "120"
            ],
            [
              "Pembelian peralatan, investasi",
              "(50)"
            ],
            [
              "Pendanaan, asumsi nihil",
              "0"
            ],
            [
              "Kenaikan kas",
              "70"
            ],
            [
              "Kas awal",
              "0"
            ],
            [
              "Kas akhir",
              "70"
            ]
          ],
          "caption": "Latihan buatan 20X1, satuan juta Rp; asumsi pengakuan sudah dipenuhi, liabilitas/OCI/saldo awal nol, peralatan belum siap digunakan. [IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Ca LK latihan: jelaskan bentukyayasan, periode 20X1, unit juta Rp, asumsi pengakuan, pembatasan program 100, pembebasan 60 dan sisa 40. Peralatan belum siap digunakan; tidak ada OCI, pajak atau liabilitas pada data. Total kedua kelas 80+40=120 cocok dengan aset 70+50=120. Kas akhir 70 cocok dengan arus kas. Tidak ada pembulatan. Ini model penyajian historis terbatas, belum klaim kepatuhan final SAK."
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: tentukan ruang audit",
      "prompt": "BantuanRp 400 juta, kekayaan di luar wakafRp 25 miliar. Pengurus hanya melihat bantuan.",
      "blocks": [
        {
          "kind": "p",
          "text": "Ambang bantuan belum tercapai, tetapi kekayaan melampauiRp 20 miliar. Salah satu syarat cukup. Yayasan memenuhi ketentuan audit akuntan publik dan publikasi ikhtisar menurut Pasal 52. Angka adalah asumsi; ambang aturan berasal dari UU ."
        },
        {
          "kind": "p",
          "text": "Menyebut wajib audit hanya jika kedua syarat terpenuhi mengubah atau menjadi dan. Menghapus kebutuhan publikasi setelah audit mengabaikan kewajiban terpisah. [UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)"
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    }
  ]
};
