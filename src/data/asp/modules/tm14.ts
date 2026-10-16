// Generated from AKK203 canonical 04; run node scripts/build-akk203-pra-uas.mjs.
import type {Reading} from '../../../types';
export const TM14_READING: Reading = {
  "tm": 14,
  "title": "Penelitian Akuntansi Sektor Publik: Membaca Bukti",
  "ref": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) | [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) | [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
  "intro": "Kamu akan membedakan pertanyaan, desain, ukuran dan hasil penelitian, lalu menilai batas rekomendasi. Artikel primer pilihan memberi angka yang dapat diperiksa; daftar artikel dosen tetap perlu dilengkapi.",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "Pertanyaan riset: hubungan akuntabilitas dan bukti",
    "Desain eksperimen dan unit pengamatan",
    "Pengukuran: pengeluaran hilang sebagai proksi",
    "Hasil: nilai, satuan dan spesifikasi harus disebut",
    "Mekanisme, validitas dan batas generalisasi",
    "Menyusun ulasan dan rancangan riset yang dapat diuji"
  ],
  "blocks": [
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat",
      "blocks": [
        {
          "kind": "figure",
          "title": "Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-KILAT-d-title ASP-UAS-14-KILAT-d-desc\" width=\"100%\" viewBox=\"0 0 760 750.6000000000001\"><title id=\"ASP-UAS-14-KILAT-d-title\">Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti</title><desc id=\"ASP-UAS-14-KILAT-d-desc\">Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti. Tentukan konteks → Pertanyaan riset: hubungan akuntabilitas dan bukti → Desain eksperimen dan unit pengamatan → Pengukuran: pengeluaran hilang sebagai proksi → Hasil: nilai, satuan dan spesifikasi harus disebut → Mekanisme, validitas dan batas generalisasi → Menyusun ulasan dan rancangan riset yang dapat diuji Tentukan konteks: Artikel terkait, judul tidak ditentukan; RPP PDF 6 Pertanyaan riset: hubungan akuntabilitas dan bukti Desain eksperimen dan unit pengamatan Pengukuran: pengeluaran hilang sebagai proksi Hasil: nilai, satuan dan spesifikasi harus disebut Mekanisme, validitas dan batas generalisasi Menyusun ulasan dan rancangan riset yang dapat diuji Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-KILAT-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"750.6000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Artikel terkait, judul tidak ditentukan; RPP PDF 6</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-d-arrow)\" d=\"M380 127.8 V149.8\"/><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pertanyaan riset: hubungan akuntabilitas dan bukti</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-d-arrow)\" d=\"M380 218.4 V240.4\"/><rect class=\"svg-card\" x=\"24\" y=\"246.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"272.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Desain eksperimen dan unit pengamatan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-d-arrow)\" d=\"M380 309 V331\"/><rect class=\"svg-card\" x=\"24\" y=\"337\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"363\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pengukuran: pengeluaran hilang sebagai proksi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-d-arrow)\" d=\"M380 399.6 V421.6\"/><rect class=\"svg-card\" x=\"24\" y=\"427.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"453.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hasil: nilai, satuan dan spesifikasi harus disebut</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-d-arrow)\" d=\"M380 490.20000000000005 V512.2\"/><rect class=\"svg-card\" x=\"24\" y=\"518.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"544.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme, validitas dan batas generalisasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-d-arrow)\" d=\"M380 580.8000000000001 V602.8000000000001\"/><rect class=\"svg-card\" x=\"24\" y=\"608.8000000000001\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"634.8000000000001\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Menyusun ulasan dan rancangan riset yang dapat diuji</tspan></text><text class=\"svg-text\" x=\"24\" y=\"699.4000000000001\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-KILAT-m-title ASP-UAS-14-KILAT-m-desc\" width=\"100%\" viewBox=\"0 0 340 1092.2\"><title id=\"ASP-UAS-14-KILAT-m-title\">Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti</title><desc id=\"ASP-UAS-14-KILAT-m-desc\">Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti. Tentukan konteks → Pertanyaan riset: hubungan akuntabilitas dan bukti → Desain eksperimen dan unit pengamatan → Pengukuran: pengeluaran hilang sebagai proksi → Hasil: nilai, satuan dan spesifikasi harus disebut → Mekanisme, validitas dan batas generalisasi → Menyusun ulasan dan rancangan riset yang dapat diuji Tentukan konteks: Artikel terkait, judul tidak ditentukan; RPP PDF 6 Pertanyaan riset: hubungan akuntabilitas dan bukti Desain eksperimen dan unit pengamatan Pengukuran: pengeluaran hilang sebagai proksi Hasil: nilai, satuan dan spesifikasi harus disebut Mekanisme, validitas dan batas generalisasi Menyusun ulasan dan rancangan riset yang dapat diuji Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-KILAT-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"1092.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"146.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Artikel terkait, judul</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">tidak ditentukan; RPP</tspan></text><text class=\"svg-text\" x=\"40\" y=\"141\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PDF 6</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-m-arrow)\" d=\"M170 178.2 V200.2\"/><rect class=\"svg-card\" x=\"24\" y=\"206.2\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"232.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pertanyaan riset:</tspan><tspan x=\"40\" dy=\"26.599999999999998\">hubungan akuntabilitas</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dan bukti</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-m-arrow)\" d=\"M170 322 V344\"/><rect class=\"svg-card\" x=\"24\" y=\"350\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"376\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Desain eksperimen dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">unit pengamatan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-m-arrow)\" d=\"M170 439.2 V461.2\"/><rect class=\"svg-card\" x=\"24\" y=\"467.2\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"493.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pengukuran:</tspan><tspan x=\"40\" dy=\"26.599999999999998\">pengeluaran hilang</tspan><tspan x=\"40\" dy=\"26.599999999999998\">sebagai proksi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-m-arrow)\" d=\"M170 583 V605\"/><rect class=\"svg-card\" x=\"24\" y=\"611\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"637\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hasil: nilai, satuan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dan spesifikasi harus</tspan><tspan x=\"40\" dy=\"26.599999999999998\">disebut</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-m-arrow)\" d=\"M170 726.8 V748.8\"/><rect class=\"svg-card\" x=\"24\" y=\"754.8\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"780.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme, validitas</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dan batas generalisasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-KILAT-m-arrow)\" d=\"M170 844 V866\"/><rect class=\"svg-card\" x=\"24\" y=\"872\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"898\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Menyusun ulasan dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">rancangan riset yang</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dapat diuji</tspan></text><text class=\"svg-text\" x=\"24\" y=\"1015.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
          "altText": "Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti. Tentukan konteks → Pertanyaan riset: hubungan akuntabilitas dan bukti → Desain eksperimen dan unit pengamatan → Pengukuran: pengeluaran hilang sebagai proksi → Hasil: nilai, satuan dan spesifikasi harus disebut → Mekanisme, validitas dan batas generalisasi → Menyusun ulasan dan rancangan riset yang dapat diuji Tentukan konteks: Artikel terkait, judul tidak ditentukan; RPP PDF 6 Pertanyaan riset: hubungan akuntabilitas dan bukti Desain eksperimen dan unit pengamatan Pengukuran: pengeluaran hilang sebagai proksi Hasil: nilai, satuan dan spesifikasi harus disebut Mekanisme, validitas dan batas generalisasi Menyusun ulasan dan rancangan riset yang dapat diuji Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Tentukan konteks: Artikel terkait, judul tidak ditentukan; RPP PDF 6",
            "Pertanyaan riset: hubungan akuntabilitas dan bukti",
            "Desain eksperimen dan unit pengamatan",
            "Pengukuran: pengeluaran hilang sebagai proksi",
            "Hasil: nilai, satuan dan spesifikasi harus disebut",
            "Mekanisme, validitas dan batas generalisasi",
            "Menyusun ulasan dan rancangan riset yang dapat diuji",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "ul",
          "items": [
            "Tentukan pertanyaan, mekanisme dan hasil yang terukur.",
            "Artikel pilihan bukan daftar wajib dosen yang terkonfirmasi.",
            "Randomisasi membantu pembanding, dengan unit/pengelompokan tepat.",
            "Proksi selisih log memerlukan interpretasi hati-hati.",
            "Sebutkan N, model, satuan dan ketidakpastian.",
            "Transfer ke konteks lain perlu bukti tambahan."
          ]
        },
        {
          "kind": "p",
          "text": "Kalau cuma sempat ingat satu hal: Tentukan pertanyaan, mekanisme dan hasil yang terukur."
        },
        {
          "kind": "callout",
          "variant": "note",
          "title": "Cakupan dan periode sumber",
          "text": "RPP: Artikel terkait, judul tidak ditentukan; RPP PDF 6. RPP tidak menyebut judul artikel; bahan dosen dan daftar artikel yang ditugaskan belum tersedia."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Pertanyaan riset: hubungan akuntabilitas dan bukti",
      "source": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
      "blocks": [
        {
          "kind": "p",
          "text": "Penelitian akuntansi sektor publik dapat menelaah kualitas pelaporan, audit, anggaran, kinerja dan akuntabilitas layanan. Pertanyaan perlu menentukan entitas, periode, mekanisme dan hasil yang akan diamati. Pertanyaan “apakah audit membantu?” terlalu luas jika jenis audit, perlakuan dan ukuran hasil tidak jelas. [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)"
        },
        {
          "kind": "p",
          "text": "RPP hanya menyebut artikel terkait, tanpa daftar judul. Paket memilih studi Olken 2007 tentang proyek jalan desa sebagai bacaan tambahan primer untuk berlatih menilai desain dan hasil. Artikel ini berada dalam ruang ekonomi/pengawasan sektor publik, sehingga bukan bukti bahwa seluruh topik riset ASP telah dicakup atau daftar artikel dosen telah dipenuhi. [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)"
        },
        {
          "kind": "figure",
          "title": "Rantai pertanyaan penelitian",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-PERTANYAAN-d-title ASP-UAS-14-PERTANYAAN-d-desc\" width=\"100%\" viewBox=\"0 0 760 532.2\"><title id=\"ASP-UAS-14-PERTANYAAN-d-title\">Rantai pertanyaan penelitian</title><desc id=\"ASP-UAS-14-PERTANYAAN-d-desc\">Rantai pertanyaan penelitian. Masalah pertanggungjawaban → Mekanisme audit/pengawasan → Hasil yang dapat diukur → Desain dan pembanding → Kesimpulan dengan batas Masalah pertanggungjawaban Mekanisme audit/pengawasan Hasil yang dapat diukur Desain dan pembanding Kesimpulan dengan batas Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-PERTANYAAN-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"532.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Masalah pertanggungjawaban</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-d-arrow)\" d=\"M380 90.6 V112.6\"/><rect class=\"svg-card\" x=\"24\" y=\"118.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"144.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme audit/pengawasan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-d-arrow)\" d=\"M380 181.2 V203.2\"/><rect class=\"svg-card\" x=\"24\" y=\"209.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"235.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hasil yang dapat diukur</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-d-arrow)\" d=\"M380 271.79999999999995 V293.79999999999995\"/><rect class=\"svg-card\" x=\"24\" y=\"299.79999999999995\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"325.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Desain dan pembanding</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-d-arrow)\" d=\"M380 362.4 V384.4\"/><rect class=\"svg-card\" x=\"24\" y=\"390.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"416.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kesimpulan dengan batas</tspan></text><text class=\"svg-text\" x=\"24\" y=\"481\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-PERTANYAAN-m-title ASP-UAS-14-PERTANYAAN-m-desc\" width=\"100%\" viewBox=\"0 0 340 663.7999999999998\"><title id=\"ASP-UAS-14-PERTANYAAN-m-title\">Rantai pertanyaan penelitian</title><desc id=\"ASP-UAS-14-PERTANYAAN-m-desc\">Rantai pertanyaan penelitian. Masalah pertanggungjawaban → Mekanisme audit/pengawasan → Hasil yang dapat diukur → Desain dan pembanding → Kesimpulan dengan batas Masalah pertanggungjawaban Mekanisme audit/pengawasan Hasil yang dapat diukur Desain dan pembanding Kesimpulan dengan batas Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-PERTANYAAN-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"663.7999999999998\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Masalah</tspan><tspan x=\"40\" dy=\"26.599999999999998\">pertanggungjawaban</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-m-arrow)\" d=\"M170 117.19999999999999 V139.2\"/><rect class=\"svg-card\" x=\"24\" y=\"145.2\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"171.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme</tspan><tspan x=\"40\" dy=\"26.599999999999998\">audit/pengawasan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-m-arrow)\" d=\"M170 234.39999999999998 V256.4\"/><rect class=\"svg-card\" x=\"24\" y=\"262.4\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"288.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hasil yang dapat</tspan><tspan x=\"40\" dy=\"26.599999999999998\">diukur</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-m-arrow)\" d=\"M170 351.59999999999997 V373.59999999999997\"/><rect class=\"svg-card\" x=\"24\" y=\"379.59999999999997\" width=\"292\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"405.59999999999997\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Desain dan pembanding</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-PERTANYAAN-m-arrow)\" d=\"M170 442.19999999999993 V464.19999999999993\"/><rect class=\"svg-card\" x=\"24\" y=\"470.19999999999993\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"496.19999999999993\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kesimpulan dengan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">batas</tspan></text><text class=\"svg-text\" x=\"24\" y=\"587.3999999999999\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
          "altText": "Rantai pertanyaan penelitian. Masalah pertanggungjawaban → Mekanisme audit/pengawasan → Hasil yang dapat diukur → Desain dan pembanding → Kesimpulan dengan batas Masalah pertanggungjawaban Mekanisme audit/pengawasan Hasil yang dapat diukur Desain dan pembanding Kesimpulan dengan batas Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Masalah pertanggungjawaban",
            "Mekanisme audit/pengawasan",
            "Hasil yang dapat diukur",
            "Desain dan pembanding",
            "Kesimpulan dengan batas",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Mengapa artikel pilihan tidak boleh disebut sebagai artikel wajib dosen?",
          "answer": [
            {
              "kind": "p",
              "text": "RPP tidak menamai artikel; pemilihan tambahan harus dijelaskan dan daftar dosen tetap merupakan celah sumber. [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Desain eksperimen dan unit pengamatan",
      "source": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
      "blocks": [
        {
          "kind": "p",
          "text": "Penelitian mencakup 608 desa proyek jalan di Jawa Timur dan Jawa Tengah pada program 2003. Perlakuan audit mengumumkan peluang pemeriksaan pemerintah meningkat dari sekitar 4% menjadi 100%. Randomisasi (penempatan perlakuan secara acak) membantu membuat kelompok pembanding setara dalam harapan, sehingga perbedaan hasil lebih dapat dikaitkan dengan penugasan perlakuan. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
        },
        {
          "kind": "p",
          "text": "Audit dirandomisasi pada tingkat kecamatan, sementara undangan/form komentar diacak pada desa dengan stratifikasi. Pengelompokan ini memengaruhi galat baku; menganggap seluruh desa independen mengabaikan desain. Sampel 608 dalam desain tidak sama dengan jumlah observasi semua regresi: Table 4 memakai 477 untuk komponen utama jalan dan 538 untuk jalan beserta kegiatan tambahan. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
        },
        {
          "kind": "table",
          "title": "Desain dan sampel sumber",
          "headers": [
            "Bagian",
            "Angka/keterangan",
            "Makna"
          ],
          "rows": [
            [
              "Desain total",
              "608 desa",
              "Table 1, PDF 8"
            ],
            [
              "Peluang audit",
              "Sekitar 4% →100%",
              "Perubahan perlakuan, bukan tingkat korupsi"
            ],
            [
              "Table 4 jalan",
              "N 477",
              "Observasi untuk ukuran tertentu"
            ],
            [
              "Table 4 jalan+tambahan",
              "N 538",
              "Sampel ukuran yang berbeda"
            ]
          ],
          "caption": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
          "stackOnMobile": true
        },
        {
          "kind": "figure",
          "title": "Perlakuan dan pembanding",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-DESAIN-d-title ASP-UAS-14-DESAIN-d-desc\" width=\"100%\" viewBox=\"0 0 760 472.59999999999997\"><title id=\"ASP-UAS-14-DESAIN-d-title\">Perlakuan dan pembanding</title><desc id=\"ASP-UAS-14-DESAIN-d-desc\">Perlakuan dan pembanding. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Kelompok audit: Pengumuman peluang audit 100% Kelompok kontrol: Peluang dasar sekitar 4% Bandingkan hasil, dengan galat baku sesuai pengelompokan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-DESAIN-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"472.59999999999997\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kelompok audit</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Pengumuman peluang audit 100%</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kelompok kontrol</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Peluang dasar sekitar 4%</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"330.8\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"356.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bandingkan hasil, dengan galat baku sesuai pengelompokan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"421.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-DESAIN-m-title ASP-UAS-14-DESAIN-m-desc\" width=\"100%\" viewBox=\"0 0 340 626.6\"><title id=\"ASP-UAS-14-DESAIN-m-title\">Perlakuan dan pembanding</title><desc id=\"ASP-UAS-14-DESAIN-m-desc\">Perlakuan dan pembanding. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Kelompok audit: Pengumuman peluang audit 100% Kelompok kontrol: Peluang dasar sekitar 4% Bandingkan hasil, dengan galat baku sesuai pengelompokan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-DESAIN-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"626.6\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kelompok audit</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Pengumuman peluang</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">audit 100%</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"181\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"207\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kelompok kontrol</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Peluang dasar sekitar</tspan></text><text class=\"svg-text\" x=\"40\" y=\"268.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">4%</tspan></text><text class=\"svg-text\" x=\"24\" y=\"334\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil</tspan><tspan x=\"24\" dy=\"25.2\">gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"406.4\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"432.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bandingkan hasil,</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dengan galat baku</tspan><tspan x=\"40\" dy=\"26.599999999999998\">sesuai pengelompokan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"550.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
          "altText": "Perlakuan dan pembanding. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Kelompok audit: Pengumuman peluang audit 100% Kelompok kontrol: Peluang dasar sekitar 4% Bandingkan hasil, dengan galat baku sesuai pengelompokan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Kelompok audit: Pengumuman peluang audit 100%",
            "Kelompok kontrol: Peluang dasar sekitar 4%",
            "Bandingkan hasil, dengan galat baku sesuai pengelompokan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Apakah N 608 otomatis menjadi N setiap estimasi?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Ketersediaan pengukuran dan sampel analisis menghasilkan N 477 atau 538 pada Table 4. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Pengukuran: pengeluaran hilang sebagai proksi",
      "source": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
      "blocks": [
        {
          "kind": "p",
          "text": "Peneliti membandingkan pengeluaran yang dilaporkan dengan estimasi teknis biaya aktual, menggunakan sampel inti jalan, survei harga bahan dan informasi upah. “Percent missing” pada analisis utama didefinisikan sebagai log pengeluaran dilaporkan dikurangi log estimasi aktual. Log adalah transformasi logaritma natural; ukuran ini bukan langsung rasio selisih rupiah dibagi pengeluaran dilaporkan. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
        },
        {
          "kind": "p",
          "text": "Ukuran itu disebut proksi (indikator pengganti) pengeluaran yang tidak terjelaskan. Estimasi teknis, asumsi kehilangan material dan kesalahan pengukuran memengaruhi levelnya. Nilai proksi tidak langsung membuktikan tindak pidana individu. Penulis menekankan interpretasi level dengan hati-hati dan membedakannya dari bukti tertangkap melakukan korupsi. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
        },
        {
          "kind": "formula",
          "text": "\\text{Missing}_i=\\ln(\\text{Reported}_i)-\\ln(\\text{Estimated actual}_i)",
          "note": "Definisi sumber, PDF 17. Nilai diubah ke skala persen ketika tabel menampilkannya; tidak langsung sama dengan rasio selisih biaya."
        },
        {
          "kind": "figure",
          "title": "Dua masukan untuk proksi",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-UKUR-d-title ASP-UAS-14-UKUR-d-desc\" width=\"100%\" viewBox=\"0 0 760 499.2\"><title id=\"ASP-UAS-14-UKUR-d-title\">Dua masukan untuk proksi</title><desc id=\"ASP-UAS-14-UKUR-d-desc\">Dua masukan untuk proksi. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Pengeluaran dilaporkan: Dokumen proyek Estimasi biaya aktual: Teknik, pasar dan upah Selisih log → proksi → interpretasi dengan batas pengukuran Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-UKUR-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"499.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pengeluaran dilaporkan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Dokumen proyek</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Estimasi biaya aktual</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Teknik, pasar dan upah</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"330.8\" width=\"712\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"356.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Selisih log → proksi → interpretasi dengan batas</tspan><tspan x=\"40\" dy=\"26.599999999999998\">pengukuran</tspan></text><text class=\"svg-text\" x=\"24\" y=\"448\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-UKUR-m-title ASP-UAS-14-UKUR-m-desc\" width=\"100%\" viewBox=\"0 0 340 576.2\"><title id=\"ASP-UAS-14-UKUR-m-title\">Dua masukan untuk proksi</title><desc id=\"ASP-UAS-14-UKUR-m-desc\">Dua masukan untuk proksi. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Pengeluaran dilaporkan: Dokumen proyek Estimasi biaya aktual: Teknik, pasar dan upah Selisih log → proksi → interpretasi dengan batas pengukuran Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-UKUR-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"576.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pengeluaran dilaporkan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Dokumen proyek</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Estimasi biaya aktual</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Teknik, pasar dan upah</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Cabang di atas → hasil</tspan><tspan x=\"24\" dy=\"25.2\">gabungan di bawah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"356\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"382\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Selisih log → proksi →</tspan><tspan x=\"40\" dy=\"26.599999999999998\">interpretasi dengan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">batas pengukuran</tspan></text><text class=\"svg-text\" x=\"24\" y=\"499.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
          "altText": "Dua masukan untuk proksi. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Pengeluaran dilaporkan: Dokumen proyek Estimasi biaya aktual: Teknik, pasar dan upah Selisih log → proksi → interpretasi dengan batas pengukuran Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Pengeluaran dilaporkan: Dokumen proyek",
            "Estimasi biaya aktual: Teknik, pasar dan upah",
            "Selisih log → proksi → interpretasi dengan batas pengukuran",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Mengapa nilai missing tinggi belum membuktikan seseorang bersalah?",
          "answer": [
            {
              "kind": "p",
              "text": "Ukuran mengandung estimasi dan asumsi; pembuktian individu memerlukan bukti serta proses berbeda. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Hasil: nilai, satuan dan spesifikasi harus disebut",
      "source": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
      "blocks": [
        {
          "kind": "p",
          "text": "Table 4 untuk komponen utama jalan: kontrol 0,277, perlakuan 0,192, efek tanpa efek tetap-0,085, galat baku 0,044 dan p 0,058. Pada skala tabel, perbedaannya 8,5 poin persentase. Itu bukan penurunan 8,5% relatif. Spesifikasi dengan efek tetap insinyur memberi-0,076, p 0,039; efek tetap strata memberi-0,048, p 0,123. [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        },
        {
          "kind": "p",
          "text": "Untuk jalan dan kegiatan tambahan, kontrol 0,291, perlakuan 0,199, koefisien tanpa efek tetap-0,091, p 0,034, N 538. Selisih rata-rata dibulatkan 0,291-0,199=0,092 berbeda sedikit dari koefisien 0,091 karena pembulatan/estimasi; pertahankan angka masing-masing, jangan memaksa sama. Hasil tidak semuanya memenuhi ambang 5% pada setiap spesifikasi. [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        },
        {
          "kind": "table",
          "title": "Table 4: komponen utama jalan, N 477",
          "headers": [
            "Spesifikasi",
            "Efek",
            "p",
            "Interpretasi batas 5%"
          ],
          "rows": [
            [
              "Tanpa efek tetap",
              "-0,085",
              "0,058",
              "Tidak melewati ambang 5%"
            ],
            [
              "Efek tetap insinyur",
              "-0,076",
              "0,039",
              "Melewati ambang 5%"
            ],
            [
              "Efek tetap strata",
              "-0,048",
              "0,123",
              "Tidak melewati ambang 5%"
            ]
          ],
          "caption": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
          "stackOnMobile": true
        },
        {
          "kind": "figure",
          "title": "Proksi missing: kontrol dan perlakuan",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-HASIL-d-title ASP-UAS-14-HASIL-d-desc\" width=\"100%\" viewBox=\"0 0 760 399\"><title id=\"ASP-UAS-14-HASIL-d-title\">Proksi missing: kontrol dan perlakuan</title><desc id=\"ASP-UAS-14-HASIL-d-desc\">Proksi missing: kontrol dan perlakuan. Kontrol: 27.7; Perlakuan audit: 19.2. Skala persen proksi selisih log. Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung. Kontrol: 27,7 Perlakuan audit: 19,2 Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung.</desc><defs><marker id=\"ASP-UAS-14-HASIL-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"399\" rx=\"12\"/><text class=\"svg-title\" x=\"24\" y=\"28\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skala persen proksi selisih log</tspan></text><text class=\"svg-title\" x=\"24\" y=\"79.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Kontrol: 27,7</tspan></text><rect class=\"svg-subcard\" x=\"24\" y=\"114.4\" width=\"702\" height=\"24\" rx=\"3\"/><rect class=\"svg-badge-blue\" x=\"24\" y=\"114.4\" width=\"648.18\" height=\"24\" rx=\"3\"/><text class=\"svg-title\" x=\"24\" y=\"168.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Perlakuan audit: 19,2</tspan></text><rect class=\"svg-subcard\" x=\"24\" y=\"203.60000000000002\" width=\"702\" height=\"24\" rx=\"3\"/><rect class=\"svg-badge-blue\" x=\"24\" y=\"203.60000000000002\" width=\"449.28\" height=\"24\" rx=\"3\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" d=\"M24 257.6 H726\"/><path stroke=\"currentColor\" style=\"fill:none!important\" d=\"M24 257.6 v6\"/><text class=\"svg-text\" x=\"24\" y=\"281.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">0</tspan></text><path stroke=\"currentColor\" style=\"fill:none!important\" d=\"M375 257.6 v6\"/><text class=\"svg-text\" x=\"375\" y=\"281.6\" font-size=\"18\"><tspan x=\"375\" dy=\"0\">15</tspan></text><path stroke=\"currentColor\" style=\"fill:none!important\" d=\"M726 257.6 v6\"/><text class=\"svg-text\" x=\"696\" y=\"281.6\" font-size=\"18\"><tspan x=\"696\" dy=\"0\">30</tspan></text><text class=\"svg-text\" x=\"24\" y=\"322.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan</tspan><tspan x=\"24\" dy=\"25.2\">rasio uang hilang langsung.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-HASIL-m-title ASP-UAS-14-HASIL-m-desc\" width=\"100%\" viewBox=\"0 0 340 474.6\"><title id=\"ASP-UAS-14-HASIL-m-title\">Proksi missing: kontrol dan perlakuan</title><desc id=\"ASP-UAS-14-HASIL-m-desc\">Proksi missing: kontrol dan perlakuan. Kontrol: 27.7; Perlakuan audit: 19.2. Skala persen proksi selisih log. Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung. Kontrol: 27,7 Perlakuan audit: 19,2 Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung.</desc><defs><marker id=\"ASP-UAS-14-HASIL-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"474.6\" rx=\"12\"/><text class=\"svg-title\" x=\"24\" y=\"28\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skala persen proksi</tspan><tspan x=\"24\" dy=\"25.2\">selisih log</tspan></text><text class=\"svg-title\" x=\"24\" y=\"104.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Kontrol: 27,7</tspan></text><rect class=\"svg-subcard\" x=\"24\" y=\"139.60000000000002\" width=\"282\" height=\"24\" rx=\"3\"/><rect class=\"svg-badge-blue\" x=\"24\" y=\"139.60000000000002\" width=\"260.38\" height=\"24\" rx=\"3\"/><text class=\"svg-title\" x=\"24\" y=\"193.60000000000002\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Perlakuan audit: 19,2</tspan></text><rect class=\"svg-subcard\" x=\"24\" y=\"228.8\" width=\"282\" height=\"24\" rx=\"3\"/><rect class=\"svg-badge-blue\" x=\"24\" y=\"228.8\" width=\"180.48\" height=\"24\" rx=\"3\"/><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" d=\"M24 282.8 H306\"/><path stroke=\"currentColor\" style=\"fill:none!important\" d=\"M24 282.8 v6\"/><text class=\"svg-text\" x=\"24\" y=\"306.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">0</tspan></text><path stroke=\"currentColor\" style=\"fill:none!important\" d=\"M165 282.8 v6\"/><text class=\"svg-text\" x=\"165\" y=\"306.8\" font-size=\"18\"><tspan x=\"165\" dy=\"0\">15</tspan></text><path stroke=\"currentColor\" style=\"fill:none!important\" d=\"M306 282.8 v6\"/><text class=\"svg-text\" x=\"276\" y=\"306.8\" font-size=\"18\"><tspan x=\"276\" dy=\"0\">30</tspan></text><text class=\"svg-text\" x=\"24\" y=\"347.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Table 4, komponen utama</tspan><tspan x=\"24\" dy=\"25.2\">jalan, N 477. Selisih 8,5</tspan><tspan x=\"24\" dy=\"25.2\">poin; bukan rasio uang</tspan><tspan x=\"24\" dy=\"25.2\">hilang langsung.</tspan></text></svg>",
          "caption": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
          "altText": "Proksi missing: kontrol dan perlakuan. Kontrol: 27.7; Perlakuan audit: 19.2. Skala persen proksi selisih log. Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung. Kontrol: 27,7 Perlakuan audit: 19,2 Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung.",
          "transcript": [
            "Kontrol: 27,7",
            "Perlakuan audit: 19,2",
            "Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung."
          ]
        },
        {
          "kind": "self-check",
          "question": "Mengapa kesimpulan “signifikan 5% dalam semua model” salah?",
          "answer": [
            {
              "kind": "p",
              "text": "p 0,058 dan 0,123 tidak di bawah 0,05; sebutkan spesifikasi serta ambang yang dipilih. [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Mekanisme, validitas dan batas generalisasi",
      "source": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
      "blocks": [
        {
          "kind": "p",
          "text": "Pengumuman peluang audit dapat mengubah perilaku sebelum pemeriksa datang. Penulis melaporkan hasil tidak berbeda signifikan antara proyek yang disurvei sebelum dan sesudah audit, konsisten dengan mekanisme ancaman pemeriksaan. Konsisten berarti mendukung penjelasan, bukan membuktikan satu-satunya mekanisme yang mungkin. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        },
        {
          "kind": "p",
          "text": "Validitas internal menilai apakah desain mendukung hubungan sebab-akibat dalam penelitian. Validitas eksternal menilai apakah hasil berlaku pada konteks lain. Jalan desa 2003, jenis pengawasan dan ukuran teknis berbeda dari rumah sakit 2026 atau seluruh pengadaan Indonesia. Usulan kebijakan perlu menilai biaya, kapasitas audit dan konteks layanan sebelum menyalin peluang 100%. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        },
        {
          "kind": "figure",
          "title": "Dua pertanyaan validitas",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-VALIDITAS-d-title ASP-UAS-14-VALIDITAS-d-desc\" width=\"100%\" viewBox=\"0 0 760 334.8\"><title id=\"ASP-UAS-14-VALIDITAS-d-title\">Dua pertanyaan validitas</title><desc id=\"ASP-UAS-14-VALIDITAS-d-desc\">Dua pertanyaan validitas. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Internal: Penugasan acak, pembanding, galat baku, pengukuran Eksternal: Entitas, periode, jenis proyek dan kapasitas berbeda Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-VALIDITAS-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"334.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Internal</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penugasan acak, pembanding, galat baku, pengukuran</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Eksternal</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Entitas, periode, jenis proyek dan kapasitas berbeda</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-VALIDITAS-m-title ASP-UAS-14-VALIDITAS-m-desc\" width=\"100%\" viewBox=\"0 0 340 460.79999999999995\"><title id=\"ASP-UAS-14-VALIDITAS-m-title\">Dua pertanyaan validitas</title><desc id=\"ASP-UAS-14-VALIDITAS-m-desc\">Dua pertanyaan validitas. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Internal: Penugasan acak, pembanding, galat baku, pengukuran Eksternal: Entitas, periode, jenis proyek dan kapasitas berbeda Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-VALIDITAS-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"460.79999999999995\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"146.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Internal</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Penugasan acak,</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">pembanding, galat baku,</tspan></text><text class=\"svg-text\" x=\"40\" y=\"141\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">pengukuran</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"206.2\" width=\"292\" height=\"146.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"232.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Eksternal</tspan></text><text class=\"svg-text\" x=\"40\" y=\"268.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Entitas, periode, jenis</tspan></text><text class=\"svg-text\" x=\"40\" y=\"294\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">proyek dan kapasitas</tspan></text><text class=\"svg-text\" x=\"40\" y=\"319.2\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">berbeda</tspan></text><text class=\"svg-text\" x=\"24\" y=\"384.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
          "altText": "Dua pertanyaan validitas. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Internal: Penugasan acak, pembanding, galat baku, pengukuran Eksternal: Entitas, periode, jenis proyek dan kapasitas berbeda Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Internal: Penugasan acak, pembanding, galat baku, pengukuran",
            "Eksternal: Entitas, periode, jenis proyek dan kapasitas berbeda",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "table",
          "title": "Klaim dan syarat",
          "headers": [
            "Klaim",
            "Syarat tambahan"
          ],
          "rows": [
            [
              "Perlakuan memengaruhi hasil dalam sampel",
              "Desain, ketidakpastian dan ukuran tepat"
            ],
            [
              "Audit selalu menghapus korupsi",
              "Tidak didukung: hasil rata-rata dan proksi"
            ],
            [
              "Audit 100% layak untuk semua layanan",
              "Evaluasi biaya, kapasitas dan konteks"
            ]
          ],
          "caption": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apakah hasil proyek jalan 2003 langsung menetapkan kebijakan audit rumah sakit 2026?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Nilai mekanisme yang dapat dipindahkan serta perbedaan entitas, biaya, kapasitas dan pengukuran. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Menyusun ulasan dan rancangan riset yang dapat diuji",
      "source": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
      "blocks": [
        {
          "kind": "p",
          "text": "Ulasan artikel memisahkan pertanyaan, teori/mekanisme, data, desain, ukuran, hasil dan keterbatasan. Catat tabel/halaman setiap angka dan sebutkan apakah kalimat merupakan temuan penulis atau interpretasi pembaca. Kritik perlu menunjuk konsekuensi suatu asumsi, bukan sekadar menyebut sampel kecil/besar. [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        },
        {
          "kind": "p",
          "text": "Rancangan lanjutan harus mempunyai variabel terukur dan pembanding yang masuk akal. Contoh buatan: apakah jadwal rekonsiliasi yang ditugaskan acak mengurangi selisih laporan layanan BLUD? Tentukan unit penugasan, ukuran selisih, periode, pengelompokan, kelengkapan data dan perlindungan informasi. Contoh ini usulan, belum merupakan temuan penelitian. [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        },
        {
          "kind": "table",
          "title": "Kerangka ulasan ujian",
          "headers": [
            "Bagian",
            "Isi minimum"
          ],
          "rows": [
            [
              "Pertanyaan",
              "Entitas, periode, mekanisme dan hasil"
            ],
            [
              "Metode",
              "Unit, penugasan, pembanding dan ukuran"
            ],
            [
              "Hasil",
              "Koefisien, satuan, N, p/ketidakpastian dan model"
            ],
            [
              "Kritik",
              "Asumsi serta akibat bagi kesimpulan"
            ],
            [
              "Usulan",
              "Variabel, pembanding, data dan batas generalisasi"
            ]
          ],
          "caption": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apa perbedaan angka temuan dan angka asumsi rancangan?",
          "answer": [
            {
              "kind": "p",
              "text": "Temuan ditelusuri ke tabel artikel; asumsi rancangan diberi label dan belum mengandung bukti hasil. [Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pendalaman: grafik sumber dan penelitian lanjutan",
      "blocks": [
        {
          "kind": "p",
          "text": "Figure 1 PDF 21 memuat fungsi distribusi kumulatif (CDF: proporsi pengamatan hingga suatu nilai) dan densitas (kepadatan sebaran) proksi missing. Kurva audit dibandingkan kontrol, dengan sumbu ukuran selisih log. Data mentah untuk menggambar ulang kurva tidak ada dalam paket; grafikTable 4 menampilkan angka tabel yang terverifikasi dan tidak mengaku mereproduksi CDF."
        },
        {
          "kind": "figure",
          "title": "Dari hasil ke rekomendasi",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-ULASAN-d-title ASP-UAS-14-ULASAN-d-desc\" width=\"100%\" viewBox=\"0 0 760 532.2\"><title id=\"ASP-UAS-14-ULASAN-d-title\">Dari hasil ke rekomendasi</title><desc id=\"ASP-UAS-14-ULASAN-d-desc\">Dari hasil ke rekomendasi. Angka tabel dan model → Batas ukuran/ketidakpastian → Mekanisme yang didukung → Perbedaan konteks penerapan → Uji lanjutan serta rekomendasi terbatas Angka tabel dan model Batas ukuran/ketidakpastian Mekanisme yang didukung Perbedaan konteks penerapan Uji lanjutan serta rekomendasi terbatas Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-ULASAN-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"532.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Angka tabel dan model</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-d-arrow)\" d=\"M380 90.6 V112.6\"/><rect class=\"svg-card\" x=\"24\" y=\"118.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"144.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Batas ukuran/ketidakpastian</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-d-arrow)\" d=\"M380 181.2 V203.2\"/><rect class=\"svg-card\" x=\"24\" y=\"209.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"235.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme yang didukung</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-d-arrow)\" d=\"M380 271.79999999999995 V293.79999999999995\"/><rect class=\"svg-card\" x=\"24\" y=\"299.79999999999995\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"325.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Perbedaan konteks penerapan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-d-arrow)\" d=\"M380 362.4 V384.4\"/><rect class=\"svg-card\" x=\"24\" y=\"390.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"416.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Uji lanjutan serta rekomendasi terbatas</tspan></text><text class=\"svg-text\" x=\"24\" y=\"481\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-14-ULASAN-m-title ASP-UAS-14-ULASAN-m-desc\" width=\"100%\" viewBox=\"0 0 340 663.8\"><title id=\"ASP-UAS-14-ULASAN-m-title\">Dari hasil ke rekomendasi</title><desc id=\"ASP-UAS-14-ULASAN-m-desc\">Dari hasil ke rekomendasi. Angka tabel dan model → Batas ukuran/ketidakpastian → Mekanisme yang didukung → Perbedaan konteks penerapan → Uji lanjutan serta rekomendasi terbatas Angka tabel dan model Batas ukuran/ketidakpastian Mekanisme yang didukung Perbedaan konteks penerapan Uji lanjutan serta rekomendasi terbatas Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-14-ULASAN-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"663.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Angka tabel dan model</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-m-arrow)\" d=\"M170 90.6 V112.6\"/><rect class=\"svg-card\" x=\"24\" y=\"118.6\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"144.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Batas</tspan><tspan x=\"40\" dy=\"26.599999999999998\">ukuran/ketidakpastian</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-m-arrow)\" d=\"M170 207.79999999999998 V229.79999999999998\"/><rect class=\"svg-card\" x=\"24\" y=\"235.79999999999998\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"261.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme yang</tspan><tspan x=\"40\" dy=\"26.599999999999998\">didukung</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-m-arrow)\" d=\"M170 325 V347\"/><rect class=\"svg-card\" x=\"24\" y=\"353\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"379\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Perbedaan konteks</tspan><tspan x=\"40\" dy=\"26.599999999999998\">penerapan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-14-ULASAN-m-arrow)\" d=\"M170 442.2 V464.2\"/><rect class=\"svg-card\" x=\"24\" y=\"470.2\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"496.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Uji lanjutan serta</tspan><tspan x=\"40\" dy=\"26.599999999999998\">rekomendasi terbatas</tspan></text><text class=\"svg-text\" x=\"24\" y=\"587.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
          "altText": "Dari hasil ke rekomendasi. Angka tabel dan model → Batas ukuran/ketidakpastian → Mekanisme yang didukung → Perbedaan konteks penerapan → Uji lanjutan serta rekomendasi terbatas Angka tabel dan model Batas ukuran/ketidakpastian Mekanisme yang didukung Perbedaan konteks penerapan Uji lanjutan serta rekomendasi terbatas Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Angka tabel dan model",
            "Batas ukuran/ketidakpastian",
            "Mekanisme yang didukung",
            "Perbedaan konteks penerapan",
            "Uji lanjutan serta rekomendasi terbatas",
            "Skematis: hubungan konsep, tanpa skala angka."
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
          "kind": "table",
          "title": "Jebakan dan langkah koreksi",
          "headers": [
            "Jebakan",
            "Langkah yang benar"
          ],
          "rows": [
            [
              "Penelitian hanya daftar istilah tanpa artikel yang diaudit",
              "Gunakan artikel primer pilihan dengan pertanyaan, desain, hasil dan kritik."
            ],
            [
              "8% ditulis tanpa satuan/model",
              "TampilkanTable 4,8,5 poin, N 477 dan p 0,058."
            ],
            [
              "Hasil digeneralisasi ke semua layanan",
              "Bedakan validitas internal/eksternal dan rancang pengujian lanjutan."
            ]
          ],
          "caption": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan berbasis sumber: membaca Table 4",
      "prompt": "Gunakan kontrol 0,277, perlakuan 0,192, koefisien-0,085, p 0,058, N 477 pada model tanpa efek tetap.",
      "blocks": [
        {
          "kind": "p",
          "text": "Fakta sumber: 0,277-0,192=0,085, atau 8,5 poin pada skala persen tabel. Bila menghitung perubahan relatif terhadap kontrol,0,085/0,277×100≈30,69%; ini hitungan turunan, dibulatkan dua desimal dan bukan angka efek utama yang ditulis penulis."
        },
        {
          "kind": "p",
          "text": "Analisis: pada ambang 5% yang diasumsikan dalam soal, p 0,058>0,05; hasil ini tidak melewati ambang itu. Pada ambang 10% kesimpulan ambang berbeda, sehingga ambang harus disebut. Keputusan ulasan: efek rata-rata negatif dengan ketidakpastian serta sensitivitas model. Menulis “8,5% relatif” salah satuan; menulis “seluruh korupsi hilang” melampaui proksi dan hasil. [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: menilai klaim generalisasi",
      "prompt": "Seorang mahasiswa menulis bahwa penelitian desa 2003 membuktikan audit 100% pasti menghapus korupsi rumah sakit 2026. Perbaiki klaim.",
      "blocks": [
        {
          "kind": "p",
          "text": "Fakta: artikel tentang proyek jalan desa, randomisasi perlakuan audit dan proksi berbasis estimasi teknis. Asumsi klaim mahasiswa: konteks layanan/periode sama, ukuran proksi sama dengan kejahatan dan efek pasti. Asumsi ini belum dibuktikan."
        },
        {
          "kind": "p",
          "text": "Analisis: pisahkan validitas internal penelitian dari transfer ke rumah sakit; periksa jenis layanan, biaya audit, kapasitas, data dan mekanisme. Keputusan: tulis bahwa studi memberi bukti efek rata-rata negatif dalam konteks tertentu, lalu usulkan evaluasi rumah sakit sebelum penerapan. Menolak seluruh penelitian juga keliru karena desain tetap memberi bukti dalam konteks asal. [Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)"
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    }
  ]
};
