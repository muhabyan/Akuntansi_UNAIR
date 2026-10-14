// Generated from AKK203 canonical 04; run node scripts/build-akk203-pra-uas.mjs.
import type {Reading} from '../../../types';
export const TM13_READING: Reading = {
  "tm": 13,
  "title": "Badan Layanan Umum dan BLUD Rumah Sakit",
  "ref": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) | [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17) | [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
  "intro": "Fokus belajar adalah hubungan layanan, pengakuan, tujuh laporan dan konsolidasi. Contoh rumah sakit menguji fleksibilitas dengan batas anggaran yang eksplisit.",
  "layout": "layered",
  "coreReadingMinutes": 20,
  "objectives": [
    "BLU dan BLUD: layanan, fleksibilitas dan batas entitas",
    "Basis laporan: LRA dan LO menjawab pertanyaan berbeda",
    "Tujuh laporan dan hubungan saldo",
    "Mekanisme sistem: bukti, pengesahan dan rekonsiliasi",
    "Konsolidasi: gabungkan dan eliminasi menurut jenis laporan",
    "BLUD rumah sakit: ambang RBA dan tanggung jawab layanan"
  ],
  "blocks": [
    {
      "kind": "section",
      "layer": "fondasi",
      "title": "Kilat",
      "blocks": [
        {
          "kind": "figure",
          "title": "Peta Badan Layanan Umum dan BLUD Rumah Sakit",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-KILAT-d-title ASP-UAS-13-KILAT-d-desc\" width=\"100%\" viewBox=\"0 0 760 827.6\"><title id=\"ASP-UAS-13-KILAT-d-title\">Peta Badan Layanan Umum dan BLUD Rumah Sakit</title><desc id=\"ASP-UAS-13-KILAT-d-desc\">Peta Badan Layanan Umum dan BLUD Rumah Sakit. Tentukan konteks → BLU dan BLUD: layanan, fleksibilitas dan batas entitas → Basis laporan: LRA dan LO menjawab pertanyaan berbeda → Tujuh laporan dan hubungan saldo → Mekanisme sistem: bukti, pengesahan dan rekonsiliasi → Konsolidasi: gabungkan dan eliminasi menurut jenis laporan → BLUD rumah sakit: ambang RBA dan tanggung jawab layanan Tentukan konteks: DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6 BLU dan BLUD: layanan, fleksibilitas dan batas entitas Basis laporan: LRA dan LO menjawab pertanyaan berbeda Tujuh laporan dan hubungan saldo Mekanisme sistem: bukti, pengesahan dan rekonsiliasi Konsolidasi: gabungkan dan eliminasi menurut jenis laporan BLUD rumah sakit: ambang RBA dan tanggung jawab layanan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-KILAT-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"827.6\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"146.2\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019;</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF</tspan></text><text class=\"svg-text\" x=\"40\" y=\"141\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">6</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-d-arrow)\" d=\"M380 178.2 V200.2\"/><rect class=\"svg-card\" x=\"24\" y=\"206.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"232.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLU dan BLUD: layanan, fleksibilitas dan batas entitas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-d-arrow)\" d=\"M380 268.79999999999995 V290.79999999999995\"/><rect class=\"svg-card\" x=\"24\" y=\"296.79999999999995\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"322.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Basis laporan: LRA dan LO menjawab pertanyaan berbeda</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-d-arrow)\" d=\"M380 359.4 V381.4\"/><rect class=\"svg-card\" x=\"24\" y=\"387.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"413.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tujuh laporan dan hubungan saldo</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-d-arrow)\" d=\"M380 450 V472\"/><rect class=\"svg-card\" x=\"24\" y=\"478\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"504\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme sistem: bukti, pengesahan dan rekonsiliasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-d-arrow)\" d=\"M380 540.6 V562.6\"/><rect class=\"svg-card\" x=\"24\" y=\"568.6\" width=\"712\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"594.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Konsolidasi: gabungkan dan eliminasi menurut jenis</tspan><tspan x=\"40\" dy=\"26.599999999999998\">laporan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-d-arrow)\" d=\"M380 657.8 V679.8\"/><rect class=\"svg-card\" x=\"24\" y=\"685.8\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"711.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLUD rumah sakit: ambang RBA dan tanggung jawab layanan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"776.4\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-KILAT-m-title ASP-UAS-13-KILAT-m-desc\" width=\"100%\" viewBox=\"0 0 340 1194.3999999999999\"><title id=\"ASP-UAS-13-KILAT-m-title\">Peta Badan Layanan Umum dan BLUD Rumah Sakit</title><desc id=\"ASP-UAS-13-KILAT-m-desc\">Peta Badan Layanan Umum dan BLUD Rumah Sakit. Tentukan konteks → BLU dan BLUD: layanan, fleksibilitas dan batas entitas → Basis laporan: LRA dan LO menjawab pertanyaan berbeda → Tujuh laporan dan hubungan saldo → Mekanisme sistem: bukti, pengesahan dan rekonsiliasi → Konsolidasi: gabungkan dan eliminasi menurut jenis laporan → BLUD rumah sakit: ambang RBA dan tanggung jawab layanan Tentukan konteks: DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6 BLU dan BLUD: layanan, fleksibilitas dan batas entitas Basis laporan: LRA dan LO menjawab pertanyaan berbeda Tujuh laporan dan hubungan saldo Mekanisme sistem: bukti, pengesahan dan rekonsiliasi Konsolidasi: gabungkan dan eliminasi menurut jenis laporan BLUD rumah sakit: ambang RBA dan tanggung jawab layanan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-KILAT-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"1194.3999999999999\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"221.79999999999998\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tentukan konteks</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">DN Bab 3; PSAP 13; PP</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">23/2005 jo. PP 74/2012,</tspan></text><text class=\"svg-text\" x=\"40\" y=\"141\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PP 12/2019; pembaruan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"166.2\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">atas Permendagri</tspan></text><text class=\"svg-text\" x=\"40\" y=\"191.39999999999998\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">61/2007 dan PMK</tspan></text><text class=\"svg-text\" x=\"40\" y=\"216.59999999999997\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">220/2016, RPP PDF 6</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-m-arrow)\" d=\"M170 253.79999999999998 V275.79999999999995\"/><rect class=\"svg-card\" x=\"24\" y=\"281.79999999999995\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"307.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLU dan BLUD: layanan,</tspan><tspan x=\"40\" dy=\"26.599999999999998\">fleksibilitas dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">batas entitas</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-m-arrow)\" d=\"M170 397.59999999999997 V419.59999999999997\"/><rect class=\"svg-card\" x=\"24\" y=\"425.59999999999997\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"451.59999999999997\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Basis laporan: LRA dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">LO menjawab pertanyaan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">berbeda</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-m-arrow)\" d=\"M170 541.4 V563.4\"/><rect class=\"svg-card\" x=\"24\" y=\"569.4\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"595.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Tujuh laporan dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">hubungan saldo</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-m-arrow)\" d=\"M170 658.5999999999999 V680.5999999999999\"/><rect class=\"svg-card\" x=\"24\" y=\"686.5999999999999\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"712.5999999999999\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Mekanisme sistem:</tspan><tspan x=\"40\" dy=\"26.599999999999998\">bukti, pengesahan dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">rekonsiliasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-m-arrow)\" d=\"M170 802.3999999999999 V824.3999999999999\"/><rect class=\"svg-card\" x=\"24\" y=\"830.3999999999999\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"856.3999999999999\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Konsolidasi: gabungkan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">dan eliminasi menurut</tspan><tspan x=\"40\" dy=\"26.599999999999998\">jenis laporan</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-KILAT-m-arrow)\" d=\"M170 946.1999999999998 V968.1999999999998\"/><rect class=\"svg-card\" x=\"24\" y=\"974.1999999999998\" width=\"292\" height=\"111.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"1000.1999999999998\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLUD rumah sakit:</tspan><tspan x=\"40\" dy=\"26.599999999999998\">ambang RBA dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">tanggung jawab layanan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"1117.9999999999998\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "altText": "Peta Badan Layanan Umum dan BLUD Rumah Sakit. Tentukan konteks → BLU dan BLUD: layanan, fleksibilitas dan batas entitas → Basis laporan: LRA dan LO menjawab pertanyaan berbeda → Tujuh laporan dan hubungan saldo → Mekanisme sistem: bukti, pengesahan dan rekonsiliasi → Konsolidasi: gabungkan dan eliminasi menurut jenis laporan → BLUD rumah sakit: ambang RBA dan tanggung jawab layanan Tentukan konteks: DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6 BLU dan BLUD: layanan, fleksibilitas dan batas entitas Basis laporan: LRA dan LO menjawab pertanyaan berbeda Tujuh laporan dan hubungan saldo Mekanisme sistem: bukti, pengesahan dan rekonsiliasi Konsolidasi: gabungkan dan eliminasi menurut jenis laporan BLUD rumah sakit: ambang RBA dan tanggung jawab layanan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Tentukan konteks: DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6",
            "BLU dan BLUD: layanan, fleksibilitas dan batas entitas",
            "Basis laporan: LRA dan LO menjawab pertanyaan berbeda",
            "Tujuh laporan dan hubungan saldo",
            "Mekanisme sistem: bukti, pengesahan dan rekonsiliasi",
            "Konsolidasi: gabungkan dan eliminasi menurut jenis laporan",
            "BLUD rumah sakit: ambang RBA dan tanggung jawab layanan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "ul",
          "items": [
            "Tentukan BLU pusat, BLUD daerah atau entitas swasta terlebih dahulu.",
            "Bedakan kas/pengesahan LRA dari hak dan konsumsi pada LO.",
            "Tujuh laporan saling diperiksa tanpa menyamakan semua saldo.",
            "Sistem BLU pusat memakai PMK 128/2024 dalam periode yang disebut.",
            "Konsolidasi bergantung jenis laporan dan lingkup internal.",
            "Fleksibilitas BLUD mengikuti RBA/DPA dan persetujuan."
          ]
        },
        {
          "kind": "p",
          "text": "Kalau cuma sempat ingat satu hal: Tentukan BLU pusat, BLUD daerah atau entitas swasta terlebih dahulu."
        },
        {
          "kind": "callout",
          "variant": "note",
          "title": "Cakupan dan periode sumber",
          "text": "RPP: DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6. DN Bab 3 dan aturan daerah/ambang aktual belum tersedia; sumber resmi dipakai dengan lingkup yang jelas."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "BLU dan BLUD: layanan, fleksibilitas dan batas entitas",
      "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
      "blocks": [
        {
          "kind": "p",
          "text": "Badan Layanan Umum (BLU) memberi layanan kepada masyarakat dengan fleksibilitas pengelolaan keuangan untuk meningkatkan pelayanan. Badan Layanan Umum Daerah (BLUD) berada pada pemerintahan daerah. Tujuan layanan harus tetap diuji bersama biaya, mutu dan akses; penerimaan layanan tidak membuat organisasi keluar dari pertanggungjawaban pemerintah. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
        },
        {
          "kind": "p",
          "text": "PSAP 13 mengatur pelaporan BLU dalam lingkungan pemerintah pusat/daerah. PMK 128/2024 mengatur sistem BLU pusat; BLUD perlu sistem dan kebijakan daerah berdasarkan aturan yang relevan. Rumah sakit dapat menjadi konteks BLU/BLUD, tetapi status kelembagaan harus dibuktikan. Rumah sakit swasta tidak otomatis memakai PSAP 13. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
        },
        {
          "kind": "figure",
          "title": "Tentukan konteks sebelum memilih sistem",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-ENTITAS-d-title ASP-UAS-13-ENTITAS-d-desc\" width=\"100%\" viewBox=\"0 0 760 462.6\"><title id=\"ASP-UAS-13-ENTITAS-d-title\">Tentukan konteks sebelum memilih sistem</title><desc id=\"ASP-UAS-13-ENTITAS-d-desc\">Tentukan konteks sebelum memilih sistem. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. BLU pusat: PSAP 13 dan sistem PMK 128/2024 BLUD daerah: PSAP 13 dan aturan/kebijakan daerah Rumah sakit swasta: Kerangka entitas swasta yang relevan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-ENTITAS-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"462.6\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLU pusat</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAP 13 dan sistem PMK 128/2024</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLUD daerah</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAP 13 dan aturan/kebijakan daerah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Rumah sakit swasta</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Kerangka entitas swasta yang relevan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"411.40000000000003\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-ENTITAS-m-title ASP-UAS-13-ENTITAS-m-desc\" width=\"100%\" viewBox=\"0 0 340 563.4\"><title id=\"ASP-UAS-13-ENTITAS-m-title\">Tentukan konteks sebelum memilih sistem</title><desc id=\"ASP-UAS-13-ENTITAS-m-desc\">Tentukan konteks sebelum memilih sistem. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. BLU pusat: PSAP 13 dan sistem PMK 128/2024 BLUD daerah: PSAP 13 dan aturan/kebijakan daerah Rumah sakit swasta: Kerangka entitas swasta yang relevan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-ENTITAS-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"563.4\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLU pusat</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAP 13 dan sistem PMK</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">128/2024</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"181\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"207\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">BLUD daerah</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAP 13 dan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"268.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">aturan/kebijakan daerah</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"334\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"360\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Rumah sakit swasta</tspan></text><text class=\"svg-text\" x=\"40\" y=\"396.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Kerangka entitas swasta</tspan></text><text class=\"svg-text\" x=\"40\" y=\"421.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">yang relevan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"487\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
          "altText": "Tentukan konteks sebelum memilih sistem. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. BLU pusat: PSAP 13 dan sistem PMK 128/2024 BLUD daerah: PSAP 13 dan aturan/kebijakan daerah Rumah sakit swasta: Kerangka entitas swasta yang relevan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "BLU pusat: PSAP 13 dan sistem PMK 128/2024",
            "BLUD daerah: PSAP 13 dan aturan/kebijakan daerah",
            "Rumah sakit swasta: Kerangka entitas swasta yang relevan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Apakah semua rumah sakit menggunakan sistem BLU pusat?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Tentukan status entitas dan tingkat pemerintahan sebelum memilih aturan sistem. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Basis laporan: LRA dan LO menjawab pertanyaan berbeda",
      "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
      "blocks": [
        {
          "kind": "p",
          "text": "Laporan Realisasi Anggaran (LRA) menunjukkan anggaran dan realisasinya dengan basis kas sesuai ketentuan penerimaan/pengeluaran dan pengesahan BLU. Laporan Operasional (LO) mengakui pendapatan ketika hak timbul atau aliran sumber daya memenuhi ketentuan, serta beban ketika kewajiban timbul, konsumsi aset atau penurunan manfaat/potensi jasa terjadi. Penerimaan kas belum tentu seluruh pendapatan LO periode berjalan. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
        },
        {
          "kind": "p",
          "text": "Untuk penerimaan layanan, telusuri layanan, hak tagih, kas dan pengesahan. Pendapatan-LRA yang dikelola BLU memerlukan pengesahan sesuai PSAP 13. Perbedaan kas dan akrual bukan kesalahan otomatis: piutang layanan, persediaan dan penyusutan dapat menjelaskan perbedaan LRA/LO. Analisis dimulai dari waktu serta substansi transaksi. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
        },
        {
          "kind": "table",
          "title": "Kas dan akrual",
          "headers": [
            "Pertanyaan",
            "LRA",
            "LO"
          ],
          "rows": [
            [
              "Apa fokusnya?",
              "Anggaran dan realisasi",
              "Operasi berbasis hak/konsumsi"
            ],
            [
              "Layanan belum dibayar",
              "Belum penerimaan kas, cek pengesahan",
              "Dapat menjadi pendapatan dan piutang bila hak timbul"
            ],
            [
              "Pembelian aset",
              "Pengeluaran sesuai anggaran",
              "Kapitalisasi, kemudian beban penyusutan sesuai ketentuan"
            ]
          ],
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "stackOnMobile": true
        },
        {
          "kind": "figure",
          "title": "Satu transaksi, dua sudut laporan",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-BASIS-d-title ASP-UAS-13-BASIS-d-desc\" width=\"100%\" viewBox=\"0 0 760 334.8\"><title id=\"ASP-UAS-13-BASIS-d-title\">Satu transaksi, dua sudut laporan</title><desc id=\"ASP-UAS-13-BASIS-d-desc\">Satu transaksi, dua sudut laporan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Hak layanan timbul: LO dan piutang sesuai ketentuan Kas diterima dan disahkan: LRA sesuai mekanisme pengesahan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-BASIS-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"334.8\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hak layanan timbul</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LO dan piutang sesuai ketentuan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kas diterima dan disahkan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LRA sesuai mekanisme pengesahan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"283.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-BASIS-m-title ASP-UAS-13-BASIS-m-desc\" width=\"100%\" viewBox=\"0 0 340 437\"><title id=\"ASP-UAS-13-BASIS-m-title\">Satu transaksi, dua sudut laporan</title><desc id=\"ASP-UAS-13-BASIS-m-desc\">Satu transaksi, dua sudut laporan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Hak layanan timbul: LO dan piutang sesuai ketentuan Kas diterima dan disahkan: LRA sesuai mekanisme pengesahan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-BASIS-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"437\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Hak layanan timbul</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LO dan piutang sesuai</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">ketentuan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"181\" width=\"292\" height=\"147.6\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"207\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Kas diterima dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">disahkan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"270.2\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LRA sesuai mekanisme</tspan></text><text class=\"svg-text\" x=\"40\" y=\"295.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">pengesahan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"360.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "altText": "Satu transaksi, dua sudut laporan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Hak layanan timbul: LO dan piutang sesuai ketentuan Kas diterima dan disahkan: LRA sesuai mekanisme pengesahan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Hak layanan timbul: LO dan piutang sesuai ketentuan",
            "Kas diterima dan disahkan: LRA sesuai mekanisme pengesahan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Mengapa layanan yang belum dibayar dapat muncul pada LO tetapi belum sebagai penerimaan kas LRA?",
          "answer": [
            {
              "kind": "p",
              "text": "LO menelusuri hak yang timbul, sedangkan penerimaan LRA mengikuti basis kas dan pengesahan yang disyaratkan. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Tujuh laporan dan hubungan saldo",
      "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
      "blocks": [
        {
          "kind": "p",
          "text": "PSAP 13 menyebut LRA, Laporan Perubahan Saldo Anggaran Lebih (LPSAL), neraca, LO, laporan arus kas (LAK), Laporan Perubahan Ekuitas (LPE) dan Catatan atas Laporan Keuangan (Ca LK). LRA berhubungan dengan LPSAL; surplus/defisit LO memengaruhi LPE; neraca menunjukkan aset, kewajiban dan ekuitas; LAK menguraikan perubahan kas. Ca LK menjelaskan kebijakan, rincian dan perbedaan yang perlu dipahami. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
        },
        {
          "kind": "p",
          "text": "Hubungan laporan tidak membuat semua saldo akhir sama. Ekuitas mencakup aset nonkas dikurangi kewajiban. SAL mengikuti mekanisme anggaran, sedangkan kas mengikuti arus masuk/keluar serta saldo awal. Latihan sederhana yang menghasilkan SAL sama dengan kas memerlukan asumsi eksplisit dan tidak boleh dijadikan identitas universal. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
        },
        {
          "kind": "figure",
          "title": "Hubungan laporan BLU",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-LAPORAN-d-title ASP-UAS-13-LAPORAN-d-desc\" width=\"100%\" viewBox=\"0 0 760 590.4000000000001\"><title id=\"ASP-UAS-13-LAPORAN-d-title\">Hubungan laporan BLU</title><desc id=\"ASP-UAS-13-LAPORAN-d-desc\">Hubungan laporan BLU. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Jalur anggaran: LRA → LPSAL Jalur operasi: LO → LPE → ekuitas neraca Jalur kas: LAK → kas neraca Penjelasan: Ca LK untuk seluruh laporan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-LAPORAN-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"590.4000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jalur anggaran</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LRA → LPSAL</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jalur operasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LO → LPE → ekuitas neraca</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jalur kas</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LAK → kas neraca</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"411.40000000000003\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"437.40000000000003\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Penjelasan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"474.00000000000006\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Ca LK untuk seluruh laporan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"539.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-LAPORAN-m-title ASP-UAS-13-LAPORAN-m-desc\" width=\"100%\" viewBox=\"0 0 340 666\"><title id=\"ASP-UAS-13-LAPORAN-m-title\">Hubungan laporan BLU</title><desc id=\"ASP-UAS-13-LAPORAN-m-desc\">Hubungan laporan BLU. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Jalur anggaran: LRA → LPSAL Jalur operasi: LO → LPE → ekuitas neraca Jalur kas: LAK → kas neraca Penjelasan: Ca LK untuk seluruh laporan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-LAPORAN-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"666\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jalur anggaran</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LRA → LPSAL</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jalur operasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LO → LPE → ekuitas</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">neraca</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"308.8\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"334.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jalur kas</tspan></text><text class=\"svg-text\" x=\"40\" y=\"371.40000000000003\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">LAK → kas neraca</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"436.6\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"462.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Penjelasan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"499.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Ca LK untuk seluruh</tspan></text><text class=\"svg-text\" x=\"40\" y=\"524.4000000000001\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">laporan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"589.6\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "altText": "Hubungan laporan BLU. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Jalur anggaran: LRA → LPSAL Jalur operasi: LO → LPE → ekuitas neraca Jalur kas: LAK → kas neraca Penjelasan: Ca LK untuk seluruh laporan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Jalur anggaran: LRA → LPSAL",
            "Jalur operasi: LO → LPE → ekuitas neraca",
            "Jalur kas: LAK → kas neraca",
            "Penjelasan: Ca LK untuk seluruh laporan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "table",
          "title": "Pemeriksaan dasar",
          "headers": [
            "Hubungan",
            "Yang diperiksa"
          ],
          "rows": [
            [
              "Neraca",
              "Aset = kewajiban + ekuitas"
            ],
            [
              "LPE",
              "Ekuitas awal + perubahan = ekuitas akhir"
            ],
            [
              "LAK",
              "Kas awal + arus bersih = kas akhir"
            ],
            [
              "LPSAL",
              "SAL awal + perubahan sesuai ketentuan = SAL akhir"
            ]
          ],
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apakah ekuitas akhir selalu sama dengan kas akhir?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Aset nonkas dan kewajiban membuat ekuitas berbeda dari kas; periksa persamaan neraca. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Mekanisme sistem: bukti, pengesahan dan rekonsiliasi",
      "source": "[PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
      "blocks": [
        {
          "kind": "p",
          "text": "Sistem BLU dimulai dari bukti transaksi serta subsistem yang relevan, kemudian penjurnalan, buku besar, neraca percobaan, laporan dan rekonsiliasi. Mekanisme pengesahan pendapatan/belanja BLU menghubungkan pengelolaan langsung dengan sistem perbendaharaan. Diagram resmi PMK 128/2024 memisahkan arus bisnis dan pelaporan; paket ini menyederhanakannya sebagai peta belajar, bukan formulir operasional pengganti. [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
        },
        {
          "kind": "p",
          "text": "Rekonsiliasi membandingkan data dengan sistem/bukti yang relevan, mencari perbedaan waktu, klasifikasi dan pencatatan. Angka cocok perlu diikuti pengujian hak, kelengkapan, pengesahan dan penyajian. PMK 220/2016 serta perubahan 42/2017 telah diganti PMK 128/2024; daftar RPP dipertahankan sebagai jejak bahan lama dengan pembaruan versi dijelaskan. [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
        },
        {
          "kind": "figure",
          "title": "Peta belajar sistem BLU",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-SISTEM-d-title ASP-UAS-13-SISTEM-d-desc\" width=\"100%\" viewBox=\"0 0 760 532.2\"><title id=\"ASP-UAS-13-SISTEM-d-title\">Peta belajar sistem BLU</title><desc id=\"ASP-UAS-13-SISTEM-d-desc\">Peta belajar sistem BLU. Bukti dan subsistem → Jurnal serta buku besar → Pengesahan sesuai mekanisme → Neraca percobaan dan rekonsiliasi → Laporan serta Ca LK Bukti dan subsistem Jurnal serta buku besar Pengesahan sesuai mekanisme Neraca percobaan dan rekonsiliasi Laporan serta Ca LK Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-SISTEM-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"532.2\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bukti dan subsistem</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-d-arrow)\" d=\"M380 90.6 V112.6\"/><rect class=\"svg-card\" x=\"24\" y=\"118.6\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"144.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jurnal serta buku besar</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-d-arrow)\" d=\"M380 181.2 V203.2\"/><rect class=\"svg-card\" x=\"24\" y=\"209.2\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"235.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pengesahan sesuai mekanisme</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-d-arrow)\" d=\"M380 271.79999999999995 V293.79999999999995\"/><rect class=\"svg-card\" x=\"24\" y=\"299.79999999999995\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"325.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Neraca percobaan dan rekonsiliasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-d-arrow)\" d=\"M380 362.4 V384.4\"/><rect class=\"svg-card\" x=\"24\" y=\"390.4\" width=\"712\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"416.4\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan serta Ca LK</tspan></text><text class=\"svg-text\" x=\"24\" y=\"481\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-SISTEM-m-title ASP-UAS-13-SISTEM-m-desc\" width=\"100%\" viewBox=\"0 0 340 637.1999999999999\"><title id=\"ASP-UAS-13-SISTEM-m-title\">Peta belajar sistem BLU</title><desc id=\"ASP-UAS-13-SISTEM-m-desc\">Peta belajar sistem BLU. Bukti dan subsistem → Jurnal serta buku besar → Pengesahan sesuai mekanisme → Neraca percobaan dan rekonsiliasi → Laporan serta Ca LK Bukti dan subsistem Jurnal serta buku besar Pengesahan sesuai mekanisme Neraca percobaan dan rekonsiliasi Laporan serta Ca LK Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-SISTEM-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"637.1999999999999\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Bukti dan subsistem</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-m-arrow)\" d=\"M170 90.6 V112.6\"/><rect class=\"svg-card\" x=\"24\" y=\"118.6\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"144.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Jurnal serta buku</tspan><tspan x=\"40\" dy=\"26.599999999999998\">besar</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-m-arrow)\" d=\"M170 207.79999999999998 V229.79999999999998\"/><rect class=\"svg-card\" x=\"24\" y=\"235.79999999999998\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"261.79999999999995\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Pengesahan sesuai</tspan><tspan x=\"40\" dy=\"26.599999999999998\">mekanisme</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-m-arrow)\" d=\"M170 325 V347\"/><rect class=\"svg-card\" x=\"24\" y=\"353\" width=\"292\" height=\"85.19999999999999\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"379\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Neraca percobaan dan</tspan><tspan x=\"40\" dy=\"26.599999999999998\">rekonsiliasi</tspan></text><path class=\"svg-title\" style=\"fill:none!important\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#ASP-UAS-13-SISTEM-m-arrow)\" d=\"M170 442.2 V464.2\"/><rect class=\"svg-card\" x=\"24\" y=\"470.2\" width=\"292\" height=\"58.599999999999994\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"496.2\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan serta Ca LK</tspan></text><text class=\"svg-text\" x=\"24\" y=\"560.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
          "altText": "Peta belajar sistem BLU. Bukti dan subsistem → Jurnal serta buku besar → Pengesahan sesuai mekanisme → Neraca percobaan dan rekonsiliasi → Laporan serta Ca LK Bukti dan subsistem Jurnal serta buku besar Pengesahan sesuai mekanisme Neraca percobaan dan rekonsiliasi Laporan serta Ca LK Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Bukti dan subsistem",
            "Jurnal serta buku besar",
            "Pengesahan sesuai mekanisme",
            "Neraca percobaan dan rekonsiliasi",
            "Laporan serta Ca LK",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Apakah pengelolaan langsung pendapatan menghapus kebutuhan pengesahan?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Telusuri pengesahan dan pelaporan sesuai sistem yang berlaku. [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "Konsolidasi: gabungkan dan eliminasi menurut jenis laporan",
      "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
      "blocks": [
        {
          "kind": "p",
          "text": "Laporan BLU dikonsolidasikan pada laporan entitas yang membawahinya. PSAP 13 memberi aturan khusus: LRA digabung dan tidak dilakukan eliminasi akun pendapatan, belanja serta pembiayaan BLU yang bersangkutan; pada LO, akun transaksi internal dengan entitas pelaporan lain dalam satu entitas pelaporan dieliminasi sesuai ketentuan. Neraca mengikuti penggabungan dan eliminasi akun timbal balik yang relevan. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
        },
        {
          "kind": "p",
          "text": "LAK BLU dikonsolidasikan dalam LAK BUN/BUD sesuai ketentuan, dan LPSAL BLU masuk LPSAL BUN/BUD, bukan disamakan dengan seluruh jalur konsolidasi kementerian/OPD. Jurnal eliminasi adalah kertas kerja konsolidasi, sehingga tidak otomatis merupakan transaksi kas baru di pembukuan entitas. Cocokkan pasangan, nilai dan lingkup sebelum menghapus saldo. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
        },
        {
          "kind": "table",
          "title": "Pembedaan konsolidasi",
          "headers": [
            "Laporan",
            "Perlakuan utama",
            "Batas"
          ],
          "rows": [
            [
              "LRA",
              "Digabung tanpa eliminasi akun yang disebut PSAP 13",
              "Jangan menyalin eliminasi LO"
            ],
            [
              "LO",
              "Eliminasi transaksi internal yang memenuhi lingkup",
              "Cocokkan pasangan transaksi"
            ],
            [
              "Neraca",
              "Eliminasi akun timbal balik relevan",
              "Periksa entitas dan hak/kewajiban"
            ],
            [
              "LAK dan LPSAL",
              "Jalur BUN/BUD menurut PSAP 13",
              "Tidak seluruhnya jalur kementerian/OPD"
            ]
          ],
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "stackOnMobile": true
        },
        {
          "kind": "figure",
          "title": "Jenis laporan menentukan perlakuan",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-KONSOL-d-title ASP-UAS-13-KONSOL-d-desc\" width=\"100%\" viewBox=\"0 0 760 462.6\"><title id=\"ASP-UAS-13-KONSOL-d-title\">Jenis laporan menentukan perlakuan</title><desc id=\"ASP-UAS-13-KONSOL-d-desc\">Jenis laporan menentukan perlakuan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. LRA: Gabungkan, ketentuan tanpa eliminasi LO/neraca: Periksa dan eliminasi internal yang relevan LAK/LPSAL: Jalur BUN/BUD sesuai PSAP 13 Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-KONSOL-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"462.6\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LRA</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Gabungkan, ketentuan tanpa eliminasi</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LO/neraca</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Periksa dan eliminasi internal yang relevan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LAK/LPSAL</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Jalur BUN/BUD sesuai PSAP 13</tspan></text><text class=\"svg-text\" x=\"24\" y=\"411.40000000000003\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-KONSOL-m-title ASP-UAS-13-KONSOL-m-desc\" width=\"100%\" viewBox=\"0 0 340 563.4\"><title id=\"ASP-UAS-13-KONSOL-m-title\">Jenis laporan menentukan perlakuan</title><desc id=\"ASP-UAS-13-KONSOL-m-desc\">Jenis laporan menentukan perlakuan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. LRA: Gabungkan, ketentuan tanpa eliminasi LO/neraca: Periksa dan eliminasi internal yang relevan LAK/LPSAL: Jalur BUN/BUD sesuai PSAP 13 Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-KONSOL-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"563.4\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LRA</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Gabungkan, ketentuan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"115.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">tanpa eliminasi</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"181\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"207\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LO/neraca</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Periksa dan eliminasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"268.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">internal yang relevan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"334\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"360\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">LAK/LPSAL</tspan></text><text class=\"svg-text\" x=\"40\" y=\"396.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Jalur BUN/BUD sesuai</tspan></text><text class=\"svg-text\" x=\"40\" y=\"421.8\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">PSAP 13</tspan></text><text class=\"svg-text\" x=\"24\" y=\"487\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "altText": "Jenis laporan menentukan perlakuan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. LRA: Gabungkan, ketentuan tanpa eliminasi LO/neraca: Periksa dan eliminasi internal yang relevan LAK/LPSAL: Jalur BUN/BUD sesuai PSAP 13 Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "LRA: Gabungkan, ketentuan tanpa eliminasi",
            "LO/neraca: Periksa dan eliminasi internal yang relevan",
            "LAK/LPSAL: Jalur BUN/BUD sesuai PSAP 13",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "self-check",
          "question": "Mengapa jurnal eliminasi LO tidak langsung diterapkan pada LRA?",
          "answer": [
            {
              "kind": "p",
              "text": "PSAP 13 memberi ketentuan berbeda; LRA digabung tanpa eliminasi akun yang disebutkan. [SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "title": "BLUD rumah sakit: ambang RBA dan tanggung jawab layanan",
      "source": "[Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
      "blocks": [
        {
          "kind": "p",
          "text": "Rencana Bisnis dan Anggaran (RBA) menghubungkan target layanan, pendapatan, belanja dan kemampuan pendanaan. Dokumen Pelaksanaan Anggaran (DPA) menjadi dasar pelaksanaan. Fleksibilitas belanja BLUD memperhatikan perubahan pendapatan operasional, ambang batas RBA/DPA dan sumber dana yang diizinkan. Ambang ditetapkan berdasarkan ketentuan serta kondisi BLUD, tidak satu persentase tetap untuk semua rumah sakit. [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
        },
        {
          "kind": "p",
          "text": "Jika belanja melampaui ambang, diperlukan persetujuan kepala daerah sesuai ketentuan. Ketersediaan kas saja belum membuktikan belanja boleh dilakukan. Untuk rumah sakit, cek kebutuhan pasien, mutu, kapasitas, bukti pendapatan dan batas anggaran. Permendagri 79/2018 mengganti 61/2007; perkada dan angka ambang aktual belum tersedia dalam paket ini. [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
        },
        {
          "kind": "table",
          "title": "Keputusan belanja rumah sakit",
          "headers": [
            "Bukti",
            "Pertanyaan"
          ],
          "rows": [
            [
              "Target layanan",
              "Apakah tambahan layanan diperlukan dan bermutu?"
            ],
            [
              "Pendapatan operasional",
              "Apakah kenaikan yang mendasari fleksibilitas terbukti?"
            ],
            [
              "RBA/DPA",
              "Apakah belanja berada dalam ambang yang ditetapkan?"
            ],
            [
              "Persetujuan",
              "Jika melampaui ambang, apakah prosedur terpenuhi?"
            ]
          ],
          "caption": "[Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
          "stackOnMobile": true
        },
        {
          "kind": "self-check",
          "question": "Apakah saldo bank yang cukup otomatis mengizinkan tambahan belanja BLUD?",
          "answer": [
            {
              "kind": "p",
              "text": "Tidak. Periksa sumber pendapatan, RBA/DPA, ambang dan persetujuan yang diperlukan. [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
            }
          ],
          "signal": "Jika alasanmu berbeda, kembali ke sumber dan identifikasi fakta yang belum mendukung jawaban."
        }
      ]
    },
    {
      "kind": "pendalaman",
      "title": "Pendalaman: konsolidasi dan batas versi",
      "blocks": [
        {
          "kind": "p",
          "text": "PSAP 13 par.116-123 dan diagram PMK 128/2024 PDF 168-175 menjadi dasar pembedaan penggabungan/eliminasi. Diagram belajar mengurangi detail sistem, sehingga mahasiswa tetap perlu membuka diagram resmi saat menelaah prosedur. Bab DN 3 belum tersedia; paket ini tidak mengklaim audit semua contoh buku."
        },
        {
          "kind": "figure",
          "title": "Pemeriksaan sebelum menyimpulkan",
          "svg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-KONTROL-d-title ASP-UAS-13-KONTROL-d-desc\" width=\"100%\" viewBox=\"0 0 760 590.4000000000001\"><title id=\"ASP-UAS-13-KONTROL-d-title\">Pemeriksaan sebelum menyimpulkan</title><desc id=\"ASP-UAS-13-KONTROL-d-desc\">Pemeriksaan sebelum menyimpulkan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Entitas/periode: Status dan versi aturan Transaksi: Hak, kas, klasifikasi dan pengesahan Laporan: Basis, hubungan dan eliminasi Layanan: Mutu, akses serta kemampuan pendanaan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-KONTROL-d-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"760\" height=\"590.4000000000001\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Entitas/periode</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Status dan versi aturan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Transaksi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Hak, kas, klasifikasi dan pengesahan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"283.6\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"309.6\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"346.20000000000005\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Basis, hubungan dan eliminasi</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"411.40000000000003\" width=\"712\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"437.40000000000003\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Layanan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"474.00000000000006\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Mutu, akses serta kemampuan pendanaan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"539.2\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep, tanpa skala angka.</tspan></text></svg>",
          "mobileSvg": "<svg class=\"course-diagram-svg akk203-uas-diagram\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"ASP-UAS-13-KONTROL-m-title ASP-UAS-13-KONTROL-m-desc\" width=\"100%\" viewBox=\"0 0 340 691.1999999999999\"><title id=\"ASP-UAS-13-KONTROL-m-title\">Pemeriksaan sebelum menyimpulkan</title><desc id=\"ASP-UAS-13-KONTROL-m-desc\">Pemeriksaan sebelum menyimpulkan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Entitas/periode: Status dan versi aturan Transaksi: Hak, kas, klasifikasi dan pengesahan Laporan: Basis, hubungan dan eliminasi Layanan: Mutu, akses serta kemampuan pendanaan Skematis: hubungan konsep, tanpa skala angka.</desc><defs><marker id=\"ASP-UAS-13-KONTROL-m-arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"svg-title\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"svg-bg\" width=\"340\" height=\"691.1999999999999\" rx=\"12\"/><rect class=\"svg-card\" x=\"24\" y=\"28\" width=\"292\" height=\"95.8\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"54\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Entitas/periode</tspan></text><text class=\"svg-text\" x=\"40\" y=\"90.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Status dan versi aturan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"155.8\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"181.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Transaksi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"218.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Hak, kas, klasifikasi</tspan></text><text class=\"svg-text\" x=\"40\" y=\"243.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">dan pengesahan</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"308.8\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"334.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Laporan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"371.40000000000003\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Basis, hubungan dan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"396.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">eliminasi</tspan></text><rect class=\"svg-card\" x=\"24\" y=\"461.8\" width=\"292\" height=\"121\" rx=\"10\" stroke-width=\"1.5\"/><text class=\"svg-title\" x=\"40\" y=\"487.8\" font-size=\"19\"><tspan x=\"40\" dy=\"0\">Layanan</tspan></text><text class=\"svg-text\" x=\"40\" y=\"524.4\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">Mutu, akses serta</tspan></text><text class=\"svg-text\" x=\"40\" y=\"549.6\" font-size=\"18\"><tspan x=\"40\" dy=\"0\">kemampuan pendanaan</tspan></text><text class=\"svg-text\" x=\"24\" y=\"614.8\" font-size=\"18\"><tspan x=\"24\" dy=\"0\">Skematis: hubungan konsep,</tspan><tspan x=\"24\" dy=\"25.2\">tanpa skala angka.</tspan></text></svg>",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
          "altText": "Pemeriksaan sebelum menyimpulkan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu. Entitas/periode: Status dan versi aturan Transaksi: Hak, kas, klasifikasi dan pengesahan Laporan: Basis, hubungan dan eliminasi Layanan: Mutu, akses serta kemampuan pendanaan Skematis: hubungan konsep, tanpa skala angka.",
          "transcript": [
            "Entitas/periode: Status dan versi aturan",
            "Transaksi: Hak, kas, klasifikasi dan pengesahan",
            "Laporan: Basis, hubungan dan eliminasi",
            "Layanan: Mutu, akses serta kemampuan pendanaan",
            "Skematis: hubungan konsep, tanpa skala angka."
          ]
        },
        {
          "kind": "p",
          "text": "Contoh rumah sakit dalam buku tambahan 2011 memakai laporan aktivitas dan tiga kelas aset neto. Format historis tersebut tidak langsung dipakai untuk BLU/BLUD periode kini. Bacaan ini mengikuti tujuh laporan PSAP 13 dan sistem PMK 128/2024; Gambar 11.1-11.3 lama hanya bahan perbandingan tambahan. [Mahsun dkk. ed.3 (2011), tambahan historis Bab 11 Gambar 11.1-11.3; cetak 237-240/PDF 248-251](https://people.usd.ac.id/~dosen/repository/firma/sektor.pdf#page=248)"
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
              "PMK 220/2016 danPermendagri 61/2007 masih dipakai tanpa status",
              "Jelaskan penggantian oleh PMK 128/2024 danPermendagri 79/2018."
            ],
            [
              "LRA dan LO disamakan",
              "Tunjukkan piutang, kapitalisasi dan pemeriksaan tujuh laporan."
            ],
            [
              "Fleksibilitas dianggap bebas atau berambang universal",
              "Uji RBA/DPA, sumber pendapatan dan persetujuan."
            ]
          ],
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "stackOnMobile": true
        }
      ]
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: laporan BLU sederhana",
      "prompt": "20X1, juta Rp. Saldo awal kas, SAL, ekuitas dan kewajiban nol. Layanan ditagih 120, kas diterima 100; seluruh hak sah. Beban tunai 70, aset dibeli 20; aset belum siap dipakai, penyusutan nihil. Semua kas disahkan, tanpa pendanaan/transaksi lain.",
      "blocks": [
        {
          "kind": "p",
          "text": "Langkah 1: LO mengakui penghasilan 120 dan beban 70, surplus 50. Piutang 120-100=20. Langkah 2: LRA latihan menerima 100 dan mengeluarkan 90 (operasi 70, aset 20), Si LPA 10; tanpa koreksi atau penggunaan SAL, LPSAL akhir 10. SAL sama dengan kas hanya pada asumsi kasus ini."
        },
        {
          "kind": "table",
          "title": "Laporan ringkas buatan 20X1, juta Rp",
          "headers": [
            "Laporan",
            "Perhitungan/pemeriksaan"
          ],
          "rows": [
            [
              "LRA",
              "Pendapatan 100 - belanja 90 = Si LPA 10"
            ],
            [
              "LPSAL",
              "Awal 0 + Si LPA 10 = akhir 10, tanpa koreksi lain"
            ],
            [
              "LO",
              "Pendapatan 120 - beban 70 = surplus 50"
            ],
            [
              "LPE",
              "Awal 0 + surplus 50 = ekuitas 50"
            ],
            [
              "Neraca",
              "Kas 10 + piutang 20 + aset 20 = kewajiban 0 + ekuitas 50"
            ],
            [
              "LAK",
              "Operasi 100-70=30; investasi-20; bersih 10; akhir 10"
            ],
            [
              "Ca LK",
              "Hak layanan, pengesahan, aset belum siap dipakai, seluruh asumsi kasus"
            ]
          ],
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Satuan juta Rp, seluruh nilai bulat, tanpa pembulatan. Aset 50=0+50, dan kas awal 0+30-20=10. Membebankan pembelian aset 20 seluruhnya pada LO akan mengabaikan kapitalisasi; menyamakan LO 120 dengan kas 100 mengabaikan piutang 20. Pada entitas aktual, klasifikasi anggaran, umur aset dan saldo awal harus diperiksa."
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan buatan: eliminasi internal dan keputusan BLUD",
      "prompt": "BagianA: Dalam satu lingkup konsolidasi, BLU mencatat pendapatan layanan 40 dari satuan kerja, dan satuan kerja mencatat beban 40; tidak ada selisih. BagianB: rumah sakit BLUD memiliki ambang RBA yang ditetapkan 10%; belanja tambahan 12% dan kas cukup.",
      "blocks": [
        {
          "kind": "journal",
          "title": "Kertas kerja eliminasi LO, juta Rp",
          "caption": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
          "lines": [
            {
              "account": "Pendapatan layanan BLU",
              "debit": "40"
            },
            {
              "account": "Beban layanan satuan kerja",
              "credit": "40",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "BagianA: debit 40=kredit 40, menghapus pendapatan/beban internal dan tidak menciptakan arus kas baru. Pada LRA gunakan ketentuan penggabungan PSAP 13, jangan menyalin jurnal ini. Angka 40 buatan; pasangan dan lingkup diasumsikan telah cocok."
        },
        {
          "kind": "p",
          "text": "BagianB: angka 10% dan 12% adalah asumsi kasus, tidak tarif universal aturan. 12%-10%=2 poin persentase di atas ambang. Perlu persetujuan kepala daerah sesuai ketentuan serta penilaian layanan/pendapatan. Kas cukup tidak menggantikan persetujuan. Menolak semua fleksibilitas mengabaikan ruang BLUD; menyetujui hanya karena kas cukup mengabaikan RBA/DPA. [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)"
        }
      ],
      "revealLabel": "Tampilkan langkah dan pemeriksaan"
    }
  ]
};
