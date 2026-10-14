// Generated from AKK203 canonical 04; run node scripts/build-akk203-pra-uas.mjs.
import type {Reading} from '../../../types';
export const TM08_UAS_READING: Reading = {
  "tm": 8,
  "title": "Sistem Akuntansi Pemerintah Pusat dan Daerah",
  "ref": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10) | [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013) | [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4) | [Permendagri 64/2013 Ps.4-6; PDF 5-6; Permendagri 77/2020 Lampiran Bab VII](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
  "intro": "Kamu menerima laporan banyak unit. Menjumlahkannya belum menghasilkan laporan pemerintah yang benar. Mulai dari fungsi entitas, cocokkan bukti, lalu pahami hubungan internal yang perlu dieliminasi.",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "SAPP: dua jalur dengan fungsi berbeda",
    "SAI: laporan naik, bukti tetap dapat ditelusuri",
    "SAPD: SKPD dan PPKD membentuk satu laporan daerah",
    "Rekonsiliasi: cari sebab selisih sebelum koreksi",
    "Konsolidasi dan eliminasi akun timbal balik",
    "Kebijakan pusat dan batas eliminasi"
  ],
  "blocks": [
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat",
      "blocks": [
        {
          "kind": "figure",
          "title": "Peta Sistem Akuntansi Pemerintah Pusat dan Daerah",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-KILAT-d-title ASP-UAS-8-KILAT-d-desc\" width=\"100%\" viewBox=\"0 0 760 750.6000000000001\"><title id=\"ASP-UAS-8-KILAT-d-title\">Peta Sistem Akuntansi Pemerintah Pusat dan Daerah</title><desc id=\"ASP-UAS-8-KILAT-d-desc\">Peta Sistem Akuntansi Pemerintah Pusat dan Daerah. Tentukan konteks → SAPP: dua jalur dengan fungsi berbeda → SAI: laporan naik, bukti tetap dapat ditelusuri → SAPD: SKPD dan PPKD membentuk satu laporan daerah → Rekonsiliasi: cari sebab selisih sebelum koreksi → Konsolidasi dan eliminasi akun timbal balik → Kebijakan pusat dan batas eliminasi Tentukan konteks: DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5 SAPP: dua jalur dengan fungsi berbeda SAI: laporan naik, bukti tetap dapat ditelusuri SAPD: SKPD dan PPKD membentuk satu laporan daerah Rekonsiliasi: cari sebab selisih sebelum koreksi Konsolidasi dan eliminasi akun timbal balik Kebijakan pusat dan batas eliminasi Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-KILAT-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"750.6000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAPP: dua jalur dengan fungsi berbeda</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-d-arrow)\" d=\"M380 218.4 V240.4\"/><rect class=\"svg-card\" x=\"24\" y=\"246.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"272.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAI: laporan naik, bukti tetap dapat ditelusuri</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-d-arrow)\" d=\"M380 309 V331\"/><rect class=\"svg-card\" x=\"24\" y=\"337\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"363\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAPD: SKPD dan PPKD membentuk satu laporan daerah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-d-arrow)\" d=\"M380 399.6 V421.6\"/><rect class=\"svg-card\" x=\"24\" y=\"427.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"453.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Rekonsiliasi: cari sebab selisih sebelum koreksi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-d-arrow)\" d=\"M380 490.20000000000005 V512.2\"/><rect class=\"svg-card\" x=\"24\" y=\"518.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"544.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Konsolidasi dan eliminasi akun timbal balik</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-d-arrow)\" d=\"M380 580.8000000000001 V602.8000000000001\"/><rect class=\"svg-card\" x=\"24\" y=\"608.8000000000001\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"634.8000000000001\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kebijakan pusat dan batas eliminasi</tspan></text><text class=\"svg-text\" x=\"24\" y=\"699.4000000000001\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-KILAT-m-title ASP-UAS-8-KILAT-m-desc\" width=\"100%\" viewBox=\"0 0 340 1092.2\"><title id=\"ASP-UAS-8-KILAT-m-title\">Peta Sistem Akuntansi Pemerintah Pusat dan Daerah</title><desc id=\"ASP-UAS-8-KILAT-m-desc\">Peta Sistem Akuntansi Pemerintah Pusat dan Daerah. Tentukan konteks → SAPP: dua jalur dengan fungsi berbeda → SAI: laporan naik, bukti tetap dapat ditelusuri → SAPD: SKPD dan PPKD membentuk satu laporan daerah → Rekonsiliasi: cari sebab selisih sebelum koreksi → Konsolidasi dan eliminasi akun timbal balik → Kebijakan pusat dan batas eliminasi Tentukan konteks: DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5 SAPP: dua jalur dengan fungsi berbeda SAI: laporan naik, bukti tetap dapat ditelusuri SAPD: SKPD dan PPKD membentuk satu laporan daerah Rekonsiliasi: cari sebab selisih sebelum koreksi Konsolidasi dan eliminasi akun timbal balik Kebijakan pusat dan batas eliminasi Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-KILAT-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"1092.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"146.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">DN Bab 10; IBS Bab 2;</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">peraturan terkait, RPP</tspan></text><text class=\"svg-text\" x=\"40\" y=\"141\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PDF 5</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-m-arrow)\" d=\"M170 178.2 V200.2\"/><rect class=\"svg-card\" x=\"24\" y=\"206.2\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"232.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAPP: dua jalur dengan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">fungsi berbeda</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-m-arrow)\" d=\"M170 295.4 V317.4\"/><rect class=\"svg-card\" x=\"24\" y=\"323.4\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"349.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAI: laporan naik,</tspan><tspan x=\"40\" dy=\"26.599999999999998\">bukti tetap dapat</tspan><tspan x=\"40\" dy=\"26.599999999999998\">ditelusuri</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-m-arrow)\" d=\"M170 439.2 V461.2\"/><rect class=\"svg-card\" x=\"24\" y=\"467.2\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"493.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAPD: SKPD dan PPKD</tspan><tspan x=\"40\" dy=\"26.599999999999998\">membentuk satu laporan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">daerah</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-m-arrow)\" d=\"M170 583 V605\"/><rect class=\"svg-card\" x=\"24\" y=\"611\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"637\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Rekonsiliasi: cari</tspan><tspan x=\"40\" dy=\"26.599999999999998\">sebab selisih sebelum</tspan><tspan x=\"40\" dy=\"26.599999999999998\">koreksi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-m-arrow)\" d=\"M170 726.8 V748.8\"/><rect class=\"svg-card\" x=\"24\" y=\"754.8\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"780.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Konsolidasi dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">eliminasi akun timbal</tspan><tspan x=\"40\" dy=\"26.599999999999998\">balik</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KILAT-m-arrow)\" d=\"M170 870.5999999999999 V892.5999999999999\"/><rect class=\"svg-card\" x=\"24\" y=\"898.5999999999999\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"924.5999999999999\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kebijakan pusat dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">batas eliminasi</tspan></text><text class=\"svg-text\" x=\"24\" y=\"1015.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
          "altText": "Peta Sistem Akuntansi Pemerintah Pusat dan Daerah. Tentukan konteks → SAPP: dua jalur dengan fungsi berbeda → SAI: laporan naik, bukti tetap dapat ditelusuri → SAPD: SKPD dan PPKD membentuk satu laporan daerah → Rekonsiliasi: cari sebab selisih sebelum koreksi → Konsolidasi dan eliminasi akun timbal balik → Kebijakan pusat dan batas eliminasi Tentukan konteks: DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5 SAPP: dua jalur dengan fungsi berbeda SAI: laporan naik, bukti tetap dapat ditelusuri SAPD: SKPD dan PPKD membentuk satu laporan daerah Rekonsiliasi: cari sebab selisih sebelum koreksi Konsolidasi dan eliminasi akun timbal balik Kebijakan pusat dan batas eliminasi Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Tentukan konteks: DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5",
            "SAPP: dua jalur dengan fungsi berbeda",
            "SAI: laporan naik, bukti tetap dapat ditelusuri",
            "SAPD: SKPD dan PPKD membentuk satu laporan daerah",
            "Rekonsiliasi: cari sebab selisih sebelum koreksi",
            "Konsolidasi dan eliminasi akun timbal balik",
            "Kebijakan pusat dan batas eliminasi",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "ul",
          "items": [
            "Tentukan entitas, periode dan jenis laporan sebelum memilih aturan.",
            "SAPP terdiri dari SABUN dan SAI; Si AP berada dalam SABUN.",
            "SAPD menghubungkan SKPD dengan fungsi akuntansi PPKD.",
            "Rekonsiliasi menjelaskan selisih berdasarkan bukti.",
            "Eliminasi menjaga laporan konsolidasian sebagai satu entitas.",
            "Akun LRA pusat mempunyai pengecualian eliminasi."
          ]
        },
        {
          "kind": "p",
          "text": "Kalau cuma sempat ingat satu hal: Tentukan entitas, periode dan jenis laporan sebelum memilih aturan."
        },
        {
          "kind": "callout",
          "variant": "note",
          "title": "Cakupan dan periode sumber",
          "text": "RPP: DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5. Buku DN Bab 10 dan IBS Bab 2 belum tersedia; cakupan buku belum lengkap."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "SAPP: dua jalur dengan fungsi berbeda",
      "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
      "blocks": [
        {
          "kind": "p",
          "text": "Saat satu kementerian membayar kegiatan, siapa mencatat kas negara dan siapa mempertanggungjawabkan anggarannya? SAPP, Sistem Akuntansi dan Pelaporan Keuangan Pemerintah Pusat, menghubungkan keduanya. PMK 217/2022 membaginya menjadi SABUN dan SAI. SABUN dikoordinasikan Menteri Keuangan sebagai Bendahara Umum Negara. SAI dijalankan kementerian atau lembaga untuk transaksi dalam tanggung jawabnya. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
        },
        {
          "kind": "p",
          "text": "Si AP adalah salah satu subsistem SABUN. Menyamakan Si AP dengan seluruh SABUN membuat transaksi utang, hibah, investasi dan transaksi BUN lainnya hilang dari peta. Pada tingkat pemerintah pusat, LK kementerian/lembaga dan LK BUN dikonsolidasikan menjadi LKPP. Sistem, aplikasi, dan standar mempunyai fungsi berbeda: SAP memberi kaidah, sistem memberi prosedur, aplikasi membantu melaksanakannya. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
        },
        {
          "kind": "figure",
          "title": "Dua jalur SAPP",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-SAPP-d-title ASP-UAS-8-SAPP-d-desc\" width=\"100%\" viewBox=\"0 0 760 472.59999999999997\"><title id=\"ASP-UAS-8-SAPP-d-title\">Dua jalur SAPP</title><desc id=\"ASP-UAS-8-SAPP-d-desc\">Dua jalur SAPP. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. SAI: Kementerian/lembaga SABUN: Menteri Keuangan sebagai BUN LKPP: konsolidasi LK K/L dan LK BUN Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-SAPP-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"472.59999999999997\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAI</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Kementerian/lembaga</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SABUN</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Menteri Keuangan sebagai BUN</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"330.8\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"356.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LKPP: konsolidasi LK K/L dan LK BUN</tspan></text><text class=\"svg-text\" x=\"24\" y=\"421.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-SAPP-m-title ASP-UAS-8-SAPP-m-desc\" width=\"100%\" viewBox=\"0 0 340 574.8000000000001\"><title id=\"ASP-UAS-8-SAPP-m-title\">Dua jalur SAPP</title><desc id=\"ASP-UAS-8-SAPP-m-desc\">Dua jalur SAPP. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. SAI: Kementerian/lembaga SABUN: Menteri Keuangan sebagai BUN LKPP: konsolidasi LK K/L dan LK BUN Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-SAPP-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"574.8000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SAI</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Kementerian/lembaga</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">SABUN</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Menteri Keuangan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">sebagai BUN</tspan></text><text class=\"svg-text\" x=\"24\" y=\"308.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil</tspan><tspan x=\"24\" dy=\"25.2\">gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"381.20000000000005\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"407.20000000000005\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LKPP: konsolidasi LK</tspan><tspan x=\"40\" dy=\"26.599999999999998\">K/L dan LK BUN</tspan></text><text class=\"svg-text\" x=\"24\" y=\"498.40000000000003\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
          "altText": "Dua jalur SAPP. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. SAI: Kementerian/lembaga SABUN: Menteri Keuangan sebagai BUN LKPP: konsolidasi LK K/L dan LK BUN Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "SAI: Kementerian/lembaga",
            "SABUN: Menteri Keuangan sebagai BUN",
            "LKPP: konsolidasi LK K/L dan LK BUN",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Apakah Si AP dan SABUN merupakan istilah untuk ruang lingkup yang sama?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Si AP merupakan salah satu subsistem SABUN. SAPP mencakup SABUN dan SAI. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "SAI: laporan naik, bukti tetap dapat ditelusuri",
      "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
      "blocks": [
        {
          "kind": "p",
          "text": "Laporan kementerian berawal dari transaksi satuan kerja. UAKPA, Unit Akuntansi dan Pelaporan Kuasa Pengguna Anggaran, memproses transaksi pada tingkat satker. UAPPA-W menggabungkan unit dalam wilayahnya bila tingkatan itu dibentuk. UAPPA-E1 menggabungkan pada eselon I. UAPA menyusun laporan kementerian/lembaga. Unit tertentu dapat menyampaikan langsung sesuai struktur yang berlaku. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
        },
        {
          "kind": "p",
          "text": "Data barang mempunyai jalur unit akuntansi dan pelaporan BMN. Nilai barang mendukung laporan keuangan sehingga rekonsiliasi barang dan keuangan diperlukan sebelum penggabungan. Mengirim total saldo tanpa dokumen sumber menyulitkan penelusuran kesalahan. Dalam jawaban kasus, sebutkan pembentuk laporan, asal saldo, dan pihak penerima, lalu jelaskan hubungan antarjalur. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
        },
        {
          "kind": "figure",
          "title": "Jenjang SAI yang dibentuk",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-SAI-d-title ASP-UAS-8-SAI-d-desc\" width=\"100%\" viewBox=\"0 0 760 590.4000000000001\"><title id=\"ASP-UAS-8-SAI-d-title\">Jenjang SAI yang dibentuk</title><desc id=\"ASP-UAS-8-SAI-d-desc\">Jenjang SAI yang dibentuk. UAKPA → UAPPA-W → UAPPA-E1 → UAPA UAKPA: Transaksi satker UAPPA-W: Penggabungan wilayah bila dibentuk UAPPA-E1: Penggabungan eselon I UAPA: Laporan K/L Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-SAI-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"590.4000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAKPA</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Transaksi satker</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-SAI-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAPPA-W</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penggabungan wilayah bila dibentuk</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-SAI-d-arrow)\" d=\"M380 255.60000000000002 V277.6\"/><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAPPA-E1</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penggabungan eselon I</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-SAI-d-arrow)\" d=\"M380 383.40000000000003 V405.40000000000003\"/><rect class=\"svg-card\" x=\"24\" y=\"411.40000000000003\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"437.40000000000003\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAPA</tspan></text><text class=\"svg-text\" x=\"40\" y=\"474.00000000000006\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Laporan K/L</tspan></text><text class=\"svg-text\" x=\"24\" y=\"539.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-SAI-m-title ASP-UAS-8-SAI-m-desc\" width=\"100%\" viewBox=\"0 0 340 640.8\"><title id=\"ASP-UAS-8-SAI-m-title\">Jenjang SAI yang dibentuk</title><desc id=\"ASP-UAS-8-SAI-m-desc\">Jenjang SAI yang dibentuk. UAKPA → UAPPA-W → UAPPA-E1 → UAPA UAKPA: Transaksi satker UAPPA-W: Penggabungan wilayah bila dibentuk UAPPA-E1: Penggabungan eselon I UAPA: Laporan K/L Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-SAI-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"640.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAKPA</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Transaksi satker</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-SAI-m-arrow)\" d=\"M170 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAPPA-W</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penggabungan wilayah</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">bila dibentuk</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-SAI-m-arrow)\" d=\"M170 280.8 V302.8\"/><rect class=\"svg-card\" x=\"24\" y=\"308.8\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"334.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAPPA-E1</tspan></text><text class=\"svg-text\" x=\"40\" y=\"371.40000000000003\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penggabungan eselon I</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-SAI-m-arrow)\" d=\"M170 408.6 V430.6\"/><rect class=\"svg-card\" x=\"24\" y=\"436.6\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"462.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">UAPA</tspan></text><text class=\"svg-text\" x=\"40\" y=\"499.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Laporan K/L</tspan></text><text class=\"svg-text\" x=\"24\" y=\"564.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
          "altText": "Jenjang SAI yang dibentuk. UAKPA → UAPPA-W → UAPPA-E1 → UAPA UAKPA: Transaksi satker UAPPA-W: Penggabungan wilayah bila dibentuk UAPPA-E1: Penggabungan eselon I UAPA: Laporan K/L Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "UAKPA: Transaksi satker",
            "UAPPA-W: Penggabungan wilayah bila dibentuk",
            "UAPPA-E1: Penggabungan eselon I",
            "UAPA: Laporan K/L",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Apa yang kamu periksa saat data aset di unit barang berbeda dari neraca UAKPA?",
          "answer": [
            {
              "kind": "p",
              "text": "Cocokkan dokumen, periode, nilai, klasifikasi dan penyesuaian antarjalur sebelum laporan digabungkan. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "SAPD: SKPD dan PPKD membentuk satu laporan daerah",
      "source": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
      "blocks": [
        {
          "kind": "p",
          "text": "Kas pada dinas dan kas di rekening umum daerah berada dalam satu pemerintah daerah. SKPD menjalankan fungsi entitas akuntansi atas kegiatan unitnya. PPKD menjalankan pengelolaan keuangan daerah, termasuk fungsi BUD. Fungsi akuntansi PPKD menyiapkan kertas kerja dan laporan konsolidasian pemerintah daerah. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
        },
        {
          "kind": "p",
          "text": "Kebijakan akuntansi menjawab pengakuan, pengukuran, penyajian dan pengungkapan. SAPD menjawab prosedur dari dokumen sampai laporan. Bagan akun membantu pengelompokan. Kode dalam lampiran tahun 2013 adalah contoh historis. Penggunaan kode aktual perlu mengikuti klasifikasi dan pemutakhiran yang berlaku, sehingga latihan di sini menggunakan nama akun tanpa mengklaim kode 2013 masih mutakhir. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
        },
        {
          "kind": "table",
          "title": "Pusat dan daerah: fungsi yang dibandingkan",
          "headers": [
            "Aspek",
            "Pusat",
            "Daerah"
          ],
          "rows": [
            [
              "Standar dasar",
              "SAP dan kebijakan pusat",
              "SAP dan kebijakan daerah"
            ],
            [
              "Jalur prosedur",
              "SAPP: SABUN dan SAI",
              "SAPD: SKPD dan SKPKD"
            ],
            [
              "Penggabungan utama",
              "LK K/L serta LK BUN menjadi LKPP",
              "LK SKPD serta PPKD menjadi LKPD"
            ],
            [
              "Kebijakan periode",
              "PMK 100/2025 mulai LK TA 2025",
              "Perkada dan regulasi daerah yang relevan"
            ]
          ],
          "caption": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10) [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013) [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apakah SAPD sekadar daftar kode akun?",
          "answer": [
            {
              "kind": "p",
              "text": "SAPD merupakan prosedur akuntansi. Bagan akun menyediakan klasifikasi untuk menjalankan prosedur itu. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Rekonsiliasi: cari sebab selisih sebelum koreksi",
      "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
      "blocks": [
        {
          "kind": "p",
          "text": "Dua laporan menyebut kas yang berbeda. Kamu perlu menentukan apakah penyebabnya transaksi belum tercatat, tanggal berbeda, klasifikasi keliru, atau dokumen belum cocok. Rekonsiliasi berarti mencocokkan data yang mempunyai hubungan, kemudian menjelaskan dan menyelesaikan selisih berdasarkan bukti. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
        },
        {
          "kind": "p",
          "text": "PMK 217/2022 membedakan rekonsiliasi internal dan eksternal. Internal mencakup hubungan keuangan dengan barang serta bendahara. Eksternal mencakup hubungan pelaporan KPA dengan kuasa BUN dan hubungan lain yang diatur. Rekonsiliasi yang selesai menyediakan dasar data andal. Keberadaan aplikasi terintegrasi masih memerlukan penilaian atas kelengkapan dan ketepatan transaksi. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
        },
        {
          "kind": "figure",
          "title": "Alur rekonsiliasi",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-REKON-d-title ASP-UAS-8-REKON-d-desc\" width=\"100%\" viewBox=\"0 0 760 718.2\"><title id=\"ASP-UAS-8-REKON-d-title\">Alur rekonsiliasi</title><desc id=\"ASP-UAS-8-REKON-d-desc\">Alur rekonsiliasi. Tentukan pasangan data → Cocokkan bukti → Jelaskan selisih → Koreksi yang terbukti → Gabungkan laporan Tentukan pasangan data: Entitas, akun, periode Cocokkan bukti: Nomor dokumen dan nilai Jelaskan selisih: Waktu, pencatatan atau klasifikasi Koreksi yang terbukti: Simpan jejak penyesuaian Gabungkan laporan: Setelah data cocok Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-REKON-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"718.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan pasangan data</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Entitas, akun, periode</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Cocokkan bukti</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Nomor dokumen dan nilai</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-d-arrow)\" d=\"M380 255.60000000000002 V277.6\"/><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jelaskan selisih</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Waktu, pencatatan atau klasifikasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-d-arrow)\" d=\"M380 383.40000000000003 V405.40000000000003\"/><rect class=\"svg-card\" x=\"24\" y=\"411.40000000000003\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"437.40000000000003\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Koreksi yang terbukti</tspan></text><text class=\"svg-text\" x=\"40\" y=\"474.00000000000006\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Simpan jejak penyesuaian</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-d-arrow)\" d=\"M380 511.20000000000005 V533.2\"/><rect class=\"svg-card\" x=\"24\" y=\"539.2\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"565.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Gabungkan laporan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"601.8000000000001\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Setelah data cocok</tspan></text><text class=\"svg-text\" x=\"24\" y=\"667\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-REKON-m-title ASP-UAS-8-REKON-m-desc\" width=\"100%\" viewBox=\"0 0 340 793.8\"><title id=\"ASP-UAS-8-REKON-m-title\">Alur rekonsiliasi</title><desc id=\"ASP-UAS-8-REKON-m-desc\">Alur rekonsiliasi. Tentukan pasangan data → Cocokkan bukti → Jelaskan selisih → Koreksi yang terbukti → Gabungkan laporan Tentukan pasangan data: Entitas, akun, periode Cocokkan bukti: Nomor dokumen dan nilai Jelaskan selisih: Waktu, pencatatan atau klasifikasi Koreksi yang terbukti: Simpan jejak penyesuaian Gabungkan laporan: Setelah data cocok Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-REKON-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"793.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan pasangan data</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Entitas, akun, periode</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-m-arrow)\" d=\"M170 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Cocokkan bukti</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Nomor dokumen dan nilai</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-m-arrow)\" d=\"M170 255.60000000000002 V277.6\"/><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jelaskan selisih</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Waktu, pencatatan atau</tspan></text><text class=\"svg-text\" x=\"40\" y=\"371.40000000000003\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">klasifikasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-m-arrow)\" d=\"M170 408.6 V430.6\"/><rect class=\"svg-card\" x=\"24\" y=\"436.6\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"462.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Koreksi yang terbukti</tspan></text><text class=\"svg-text\" x=\"40\" y=\"499.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Simpan jejak</tspan></text><text class=\"svg-text\" x=\"40\" y=\"524.4000000000001\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">penyesuaian</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-REKON-m-arrow)\" d=\"M170 561.6 V583.6\"/><rect class=\"svg-card\" x=\"24\" y=\"589.6\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"615.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Gabungkan laporan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"652.2\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Setelah data cocok</tspan></text><text class=\"svg-text\" x=\"24\" y=\"717.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
          "altText": "Alur rekonsiliasi. Tentukan pasangan data → Cocokkan bukti → Jelaskan selisih → Koreksi yang terbukti → Gabungkan laporan Tentukan pasangan data: Entitas, akun, periode Cocokkan bukti: Nomor dokumen dan nilai Jelaskan selisih: Waktu, pencatatan atau klasifikasi Koreksi yang terbukti: Simpan jejak penyesuaian Gabungkan laporan: Setelah data cocok Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Tentukan pasangan data: Entitas, akun, periode",
            "Cocokkan bukti: Nomor dokumen dan nilai",
            "Jelaskan selisih: Waktu, pencatatan atau klasifikasi",
            "Koreksi yang terbukti: Simpan jejak penyesuaian",
            "Gabungkan laporan: Setelah data cocok",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Bolehkah selisih langsung ditutup dengan akun pendapatan?",
          "answer": [
            {
              "kind": "p",
              "text": "Koreksi harus mengikuti sebab dan bukti. Menutup selisih tanpa diagnosis dapat menciptakan salah saji baru. [PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Konsolidasi dan eliminasi akun timbal balik",
      "source": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
      "blocks": [
        {
          "kind": "p",
          "text": "Reciprocal accounts berarti akun timbal balik yang menggambarkan hubungan antarunit. RK-PPKD dan RK-SKPD membantu menjelaskan arus internal. Pada kertas kerja konsolidasi, pasangan ini dieliminasi agar hubungan antarunit tidak tampil sebagai posisi dengan pihak di luar pemerintah daerah. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
        },
        {
          "kind": "p",
          "text": "Lampiran daerah menunjukkan jurnal eliminasi debit RK-PPKD dan kredit RK-SKPD untuk pasangan saldo normal yang dicontohkan. Pastikan nilai pasangan cocok dahulu. Eliminasi dilakukan pada kertas kerja konsolidasi sehingga pencatatan unit tetap mempunyai jejak. Saldo yang belum cocok memerlukan rekonsiliasi dan koreksi; satu angka tidak boleh dipaksakan hanya supaya laporan seimbang. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
        },
        {
          "kind": "figure",
          "title": "Kertas kerja sampai laporan daerah",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-KONSOL-d-title ASP-UAS-8-KONSOL-d-desc\" width=\"100%\" viewBox=\"0 0 760 718.2\"><title id=\"ASP-UAS-8-KONSOL-d-title\">Kertas kerja sampai laporan daerah</title><desc id=\"ASP-UAS-8-KONSOL-d-desc\">Kertas kerja sampai laporan daerah. Neraca saldo disesuaikan → Kertas kerja gabungan → Eliminasi → Neraca saldo pemda → Laporan konsolidasian Neraca saldo disesuaikan: Seluruh SKPD dan PPKD Kertas kerja gabungan: Kolom per entitas Eliminasi: Pasangan RK yang terverifikasi Neraca saldo pemda: Saldo untuk pelaporan Laporan konsolidasian: LRA, LO, neraca, LPSAL, LPE, LAK, Ca LK Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-KONSOL-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"718.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Neraca saldo disesuaikan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Seluruh SKPD dan PPKD</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kertas kerja gabungan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Kolom per entitas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-d-arrow)\" d=\"M380 255.60000000000002 V277.6\"/><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Eliminasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Pasangan RK yang terverifikasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-d-arrow)\" d=\"M380 383.40000000000003 V405.40000000000003\"/><rect class=\"svg-card\" x=\"24\" y=\"411.40000000000003\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"437.40000000000003\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Neraca saldo pemda</tspan></text><text class=\"svg-text\" x=\"40\" y=\"474.00000000000006\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Saldo untuk pelaporan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-d-arrow)\" d=\"M380 511.20000000000005 V533.2\"/><rect class=\"svg-card\" x=\"24\" y=\"539.2\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"565.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan konsolidasian</tspan></text><text class=\"svg-text\" x=\"40\" y=\"601.8000000000001\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LRA, LO, neraca, LPSAL, LPE, LAK, Ca LK</tspan></text><text class=\"svg-text\" x=\"24\" y=\"667\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-8-KONSOL-m-title ASP-UAS-8-KONSOL-m-desc\" width=\"100%\" viewBox=\"0 0 340 820.4\"><title id=\"ASP-UAS-8-KONSOL-m-title\">Kertas kerja sampai laporan daerah</title><desc id=\"ASP-UAS-8-KONSOL-m-desc\">Kertas kerja sampai laporan daerah. Neraca saldo disesuaikan → Kertas kerja gabungan → Eliminasi → Neraca saldo pemda → Laporan konsolidasian Neraca saldo disesuaikan: Seluruh SKPD dan PPKD Kertas kerja gabungan: Kolom per entitas Eliminasi: Pasangan RK yang terverifikasi Neraca saldo pemda: Saldo untuk pelaporan Laporan konsolidasian: LRA, LO, neraca, LPSAL, LPE, LAK, Ca LK Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-8-KONSOL-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"820.4\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"122.39999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Neraca saldo</tspan><tspan x=\"40\" dy=\"26.599999999999998\">disesuaikan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"117.19999999999999\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Seluruh SKPD dan PPKD</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-m-arrow)\" d=\"M170 154.39999999999998 V176.39999999999998\"/><rect class=\"svg-card\" x=\"24\" y=\"182.39999999999998\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"208.39999999999998\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kertas kerja gabungan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"244.99999999999997\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Kolom per entitas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-m-arrow)\" d=\"M170 282.2 V304.2\"/><rect class=\"svg-card\" x=\"24\" y=\"310.2\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"336.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Eliminasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"372.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Pasangan RK yang</tspan></text><text class=\"svg-text\" x=\"40\" y=\"398\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">terverifikasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-m-arrow)\" d=\"M170 435.2 V457.2\"/><rect class=\"svg-card\" x=\"24\" y=\"463.2\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"489.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Neraca saldo pemda</tspan></text><text class=\"svg-text\" x=\"40\" y=\"525.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Saldo untuk pelaporan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-8-KONSOL-m-arrow)\" d=\"M170 563 V585\"/><rect class=\"svg-card\" x=\"24\" y=\"591\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"617\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan konsolidasian</tspan></text><text class=\"svg-text\" x=\"40\" y=\"653.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LRA, LO, neraca, LPSAL,</tspan></text><text class=\"svg-text\" x=\"40\" y=\"678.8000000000001\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LPE, LAK, Ca LK</tspan></text><text class=\"svg-text\" x=\"24\" y=\"744\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
          "altText": "Kertas kerja sampai laporan daerah. Neraca saldo disesuaikan → Kertas kerja gabungan → Eliminasi → Neraca saldo pemda → Laporan konsolidasian Neraca saldo disesuaikan: Seluruh SKPD dan PPKD Kertas kerja gabungan: Kolom per entitas Eliminasi: Pasangan RK yang terverifikasi Neraca saldo pemda: Saldo untuk pelaporan Laporan konsolidasian: LRA, LO, neraca, LPSAL, LPE, LAK, Ca LK Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Neraca saldo disesuaikan: Seluruh SKPD dan PPKD",
            "Kertas kerja gabungan: Kolom per entitas",
            "Eliminasi: Pasangan RK yang terverifikasi",
            "Neraca saldo pemda: Saldo untuk pelaporan",
            "Laporan konsolidasian: LRA, LO, neraca, LPSAL, LPE, LAK, Ca LK",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Mengapa pengiriman uang ke SKPD tidak otomatis menjadi beban pada konsolidasi?",
          "answer": [
            {
              "kind": "p",
              "text": "Perpindahan dana antarunit pemerintah yang sama perlu dibedakan dari konsumsi sumber daya atau belanja kepada pihak luar. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Kebijakan pusat dan batas eliminasi",
      "source": "[PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
      "blocks": [
        {
          "kind": "p",
          "text": "Tidak setiap pos laporan dieliminasi dengan perlakuan yang sama. PMK 100/2025 menyatakan akun LRA tidak dieliminasi dalam kebijakan konsolidasi pusat. LRA mencerminkan pertanggungjawaban pelaksanaan APBN. Eliminasi transaksi resiprokal memerlukan transaksi yang teridentifikasi dan nilai yang terukur andal. [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)"
        },
        {
          "kind": "p",
          "text": "PMK 100/2025 digunakan mulai LK TA 2025 dan mengganti PMK 231/2022 beserta PMK 57/2023. Ketentuan ini adalah pembaruan kebijakan pusat. Contoh kertas kerja daerah pada Permendagri 64/2013 tetap dibaca menurut ruang lingkupnya. Dalam ujian, tuliskan entitas, periode, jenis laporan dan dasar aturan sebelum memilih jurnal. [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)"
        },
        {
          "kind": "table",
          "title": "Jangan tertukar saat menggabungkan",
          "headers": [
            "Pertanyaan",
            "Langkah"
          ],
          "rows": [
            [
              "Pusat atau daerah?",
              "Pilih kebijakan sesuai entitas"
            ],
            [
              "Finansial atau LRA?",
              "Cek aturan eliminasi untuk laporan itu"
            ],
            [
              "Pasangan cocok?",
              "Rekonsiliasi sebelum eliminasi"
            ],
            [
              "Angka xxx pada sumber?",
              "Jangan mengakuinya sebagai angka kasus"
            ],
            [
              "Kode akun lama?",
              "Gunakan nama dan periksa kode aktual"
            ]
          ],
          "caption": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013) [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apakah eliminasi finansial pusat membuktikan setiap akun LRA juga harus dieliminasi?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. PMK 100/2025 menyebut pengecualian akun LRA. Jenis laporan harus disebut dalam analisis. [PMK 100/2025 Ps.6-7 dan Lampiran II. A.13; cetak/PDF 4,18-19](https://jdih.kemenkeu.go.id/api/download/29cc2a09-15f9-4155-9a87-88b9023ce686/2025pmkeuangan100.pdf#page=4)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pendalaman: status sumber dan diagram lampiran",
      "blocks": [
        {
          "kind": "p",
          "text": "Diagram sumber daerah pada cetak 34/PDF 72 direkonstruksi sebagai kertas kerja dan penyusunan laporan. Kolom xxx adalah placeholder, tidak berisi data numerik. Contoh format LO cetak 40-42/PDF 78-80 dan neraca cetak 43/PDF 81 dibaca sebagai struktur historis."
        },
        {
          "kind": "p",
          "text": "Tidak ada teks DN Bab 10 dan IBS Bab 2 dalam paket lokal yang ditemukan. Kedalaman bab, tabel dan latihan buku belum dapat dinyatakan telah diaudit. SAPD aktual juga memerlukan perkada dan konfigurasi akun daerah yang bersangkutan."
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
              "Si AP disamakan dengan seluruh SABUN",
              "Pisahkan SAPP, SABUN, Si AP dan SAI menurut PMK 217."
            ],
            [
              "Konsolidasi digambarkan sebagai penjumlahan saja",
              "Tambahkan rekonsiliasi, kertas kerja dan eliminasi."
            ],
            [
              "Aturan pusat dan daerah tercampur",
              "Tunjukkan batas PMK 100 dan contoh Permendagri 64."
            ]
          ],
          "caption": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: eliminasi Rp 100 juta",
      "prompt": "Asumsi: saldo debit RK-SKPD PPKD Rp 100.000.000 dan saldo kredit RK-PPKD SKPD Rp 100.000.000, entitas dan periode cocok. Buat jurnal konsolidasi.",
      "blocks": [
        {
          "kind": "p",
          "text": "Dasar: pola jurnal lampiran daerah memakai xxx. Angka Rp 100 juta adalah asumsi latihan. Kedua saldo saling cocok sehingga eliminasi dapat dilakukan."
        },
        {
          "kind": "journal",
          "title": "Kertas kerja konsolidasi",
          "caption": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
          "lines": [
            {
              "account": "RK-PPKD",
              "debit": "100.000.000"
            },
            {
              "account": "RK-SKPD",
              "credit": "100.000.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Debit = kredit = Rp 100.000.000; kedua akun menjadi nol pada konsolidasi. Jurnal unit tidak dihapus. Tidak ada pembulatan karena nilai rupiah bulat."
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: selisih Rp 2 juta",
      "prompt": "PPKD mencatat RK-SKPD Rp 100 juta, SKPD mencatat RK-PPKD Rp 98 juta. Dokumen transfer Rp 2 juta baru dicatat PPKD. Tentukan langkah.",
      "blocks": [
        {
          "kind": "p",
          "text": "Fakta: selisih Rp 100 juta - Rp 98 juta = Rp 2 juta. Asumsi: dokumen sah, periode sama, pencatatan SKPD belum lengkap. Analisis: koreksi unit berdasarkan bukti dahulu, kemudian cocokkan pasangan dan buat eliminasi Rp 100 juta."
        },
        {
          "kind": "p",
          "text": "Jika dokumen belum sah atau beda periode, kesimpulan koreksi tersebut belum dapat diberikan. Memaksa eliminasi Rp 98 juta menyisakan hubungan internal Rp 2 juta. Memaksa Rp 100 juta tanpa koreksi menutupi kesalahan. [Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)"
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    }
  ]
};
