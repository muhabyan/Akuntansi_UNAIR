// src/data/banksoal/aka201.ts
// Bank soal esai Pengauditan Berbasis Risiko I (AKA201).
// TM01-TM07 mengikuti paket pra-UTS yang sudah ada. TM09-TM15 disusun dari 04 dan 05.
// Rujukan 04 ditampilkan dalam pembahasan; jejak sumber ada di scripts/fixtures/aka201-practice-sources.json.
// Edited by hand, not by the Semester 3 generators (see scripts/test-sem3-generators.mjs).
import type { BankSoal } from '../../types';

export const AKA201_BANK_UTS: BankSoal[] = [
  {
    "type": "essay",
    "scope": "TM 1: Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "question": "Seorang manajer bank menolak memberi bunga rendah kepada calon debitur yang laporan keuangannya belum diaudit. Jelaskan alasan manajer itu dengan konsep information risk, termasuk penyebabnya dan cara-cara menguranginya.",
    "answerGuide": "tiga komponen suku bunga; audit hanya memengaruhi information risk; minimal dua penyebab relevan (remoteness, bias/motif penyedia); tiga cara mengurangi; audit sebagai cara paling umum."
  },
  {
    "type": "essay",
    "scope": "TM 1: Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "question": "Jelaskan definisi auditing dan petakan keempat unsurnya pada pemeriksaan SPT badan oleh auditor otoritas pajak.",
    "answerGuide": "definisi; informasi = SPT; kriteria = undang-undang pajak; orang kompeten dan independen = auditor pajak; bukti = penilaian risiko lalu pemeriksaan catatan dan informasi pihak ketiga; laporan = hasil pemeriksaan."
  },
  {
    "type": "essay",
    "scope": "TM 1: Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "question": "Sebuah perusahaan privat kecil ragu memilih audit atau review untuk laporan keuangannya. Bandingkan keduanya dari sisi tingkat keyakinan, pekerjaan auditor, dan biaya, lalu jelaskan kapan masing-masing lebih tepat.",
    "answerGuide": "(Interpretasi) reasonable vs limited; audit memeriksa dokumen dan catatan, review terutama inquiry dan analitis; biaya; pilihan bergantung pada kebutuhan asurans pengguna. Rekomendasi akhir bersifat Interpretasi dan bergantung pada siapa penggunanya."
  },
  {
    "type": "essay",
    "scope": "TM 2: Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "question": "Jelaskan perbedaan pengendalian mutu (quality control) dalam buku dengan manajemen mutu (quality management) menurut ISQM 1 / SMM 1. Sebutkan komponen yang baru dan jelaskan pendekatan berbasis risikonya.",
    "answerGuide": "6 elemen vs 8 komponen; dua komponen baru; perubahan human resources ke resources, monitoring ke monitoring and remediation; tujuan mutu, risiko mutu, respons; evaluasi tahunan; SMM 1 efektif 31 Desember 2025."
  },
  {
    "type": "essay",
    "scope": "TM 2: Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "question": "Jelaskan peran Menteri Keuangan, Asosiasi Profesi Akuntan Publik, dan Komite Profesi Akuntan Publik dalam mengatur profesi akuntan publik di Indonesia, lalu jelaskan ketentuan pembatasan jasa audit dalam PP 20/2015.",
    "answerGuide": "izin, pembinaan, pengawasan, sanksi (Menteri); SPAP, ujian, PPL, reviu mutu (Asosiasi); pertimbangan dan banding (Komite); 5 tahun buku, lima jenis entitas, Pihak Terasosiasi, jeda 2 tahun buku; yang dibatasi AP, bukan KAP."
  },
  {
    "type": "essay",
    "scope": "TM 2: Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "question": "Seorang partner diminta memangkas jam audit agar fee kompetitif, padahal klien baru mengganti sistem akuntansinya. Analisis dampaknya terhadap kualitas audit dan jelaskan tanggung jawab engagement partner.",
    "answerGuide": "(Interpretasi) komersialisme vs profesionalisme; tim dengan waktu yang cukup; perubahan sistem menaikkan risiko; tanggung jawab menyeluruh engagement partner; konsultasi dan dokumentasi keputusan. Rekomendasi akhir adalah Interpretasi."
  },
  {
    "type": "essay",
    "scope": "TM 3: Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "question": "Klien menawarkan makan malam di restoran mewah dan tiket konser kepada tim audit dua hari sebelum fieldwork akhir tahun. Analisis ancaman yang muncul, jelaskan aturan KEPAP yang relevan, dan jelaskan tindakan yang seharusnya diambil anggota tim.",
    "context": "Untuk role play Week 3.",
    "answerGuide": "tidak trivial; waktu memperkuat kesan memengaruhi; ancaman kepentingan pribadi, kedekatan, intimidasi; P420.3 dan 420.3-A2; menolak dengan sopan, melapor ke senior/partner, dokumentasi; independensi dalam penampilan."
  },
  {
    "type": "essay",
    "scope": "TM 3: Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "question": "Kamu staf audit yang diminta senior bekerja lembur tanpa mencatat jam agar audit tidak melewati anggaran. Terapkan kerangka lima langkah pengambilan keputusan etis dan tentukan tindakanmu.",
    "answerGuide": "(Interpretasi) lima langkah lengkap; pihak terdampak (diri sendiri, rekan, senior, KAP, tim berikutnya, klien); rasionalisasi \"semua orang melakukannya\"; minimal dua uji tindakan; tindakan yang dipilih beserta alasan. Pilihan akhir bersifat Interpretasi."
  },
  {
    "type": "essay",
    "scope": "TM 3: Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "question": "Setelah sebuah perusahaan terbuka bangkrut, publik menuding auditornya gagal. Jelaskan konsep expectations gap dan bedakan audit failure, business failure, dan audit risk untuk menilai tudingan tersebut.",
    "answerGuide": "definisi gap; minimal tiga contoh harapan vs standar; reasonableness vs performance gap; tiga konsep; kebangkrutan tidak otomatis berarti audit gagal; audit failure ditentukan oleh kepatuhan pada standar."
  },
  {
    "type": "essay",
    "scope": "TM 4: Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "question": "Saat mewawancarai manajer keuangan tentang jurnal penyesuaian besar yang dicatat di hari terakhir tahun buku, kamu mendapat penjelasan yang lancar dan meyakinkan. Jelaskan bagaimana skeptisisme profesional harus diterapkan dan langkah apa yang kamu ambil selanjutnya.",
    "context": "Untuk role play Week 4.",
    "answerGuide": "(Interpretasi) definisi skeptisisme; jawaban wawancara dinilai keandalannya (A21, A23); suspension of judgment; mencari bukti yang membantah dan sumber di luar akuntansi; dokumen sumber; pertimbangkan motif (bonus); kejujuran masa lalu tidak cukup (A25); dokumentasi dan konsultasi."
  },
  {
    "type": "essay",
    "scope": "TM 4: Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "question": "Jelaskan mengapa auditor hanya dapat memberi keyakinan memadai, dan apakah penemuan salah saji material setelah laporan auditor terbit berarti auditnya gagal.",
    "answerGuide": "tiga alasan buku; tiga sumber keterbatasan ISA 200; A53; A57; kaitan dengan expectations gap (TM03)."
  },
  {
    "type": "essay",
    "scope": "TM 4: Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "question": "Bandingkan tanggung jawab manajemen, TCWG, dan auditor atas laporan keuangan, termasuk atas kelangsungan usaha dan kepatuhan terhadap hukum.",
    "answerGuide": "tabel tiga pihak; premis; koreksi oleh manajemen; going concern (manajemen menilai, auditor menyimpulkan); hukum langsung vs tidak langsung."
  },
  {
    "type": "essay",
    "scope": "TM 5: Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "question": "Untuk setiap salah saji berikut, tentukan asersi yang dilanggar dan jelaskan alasannya: (a) penjualan fiktif; (b) persediaan barang titipan dicatat sebagai milik; (c) beban bunga Desember belum dicatat; (d) persediaan usang tidak diturunkan nilainya; (e) pinjaman jangka panjang yang jatuh tempo tahun depan disajikan seluruhnya sebagai liabilitas jangka panjang.",
    "answerGuide": "(a) occurrence; (b) rights and obligations; (c) completeness (bisa juga dibahas sebagai cutoff); (d) valuation; (e) classification (atau presentation). Penjelasan arah lebih saji/kurang saji."
  },
  {
    "type": "essay",
    "scope": "TM 5: Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "question": "Jelaskan pendekatan siklus dan manfaatnya bagi auditor. Gunakan contoh piutang usaha untuk menunjukkan hubungan antara golongan transaksi dan saldo akhir.",
    "answerGuide": "definisi; lima siklus; kas sebagai penghubung; roll-forward piutang; gabungan keyakinan dari transaksi dan saldo; entity-level controls."
  },
  {
    "type": "essay",
    "scope": "TM 5: Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "question": "Jelaskan pengertian asersi yang relevan. Untuk perusahaan yang memberi bonus berbasis laba dan menjual produk yang cepat usang, tentukan asersi relevan untuk persediaan dan penjualan beserta alasannya.",
    "answerGuide": "(Interpretasi) definisi buku dan ISA 315 (sebelum pengendalian); tiga faktor; persediaan: valuation; penjualan: occurrence dan cutoff; respons berupa bukti yang lebih meyakinkan."
  },
  {
    "type": "essay",
    "scope": "TM 6: Laporan Auditor dan Jenis Opini",
    "question": "Jelaskan bagaimana auditor menentukan jenis opini modifikasian. Terapkan pada: (a) persediaan tidak diturunkan ke nilai realisasi neto; (b) manajemen melarang konfirmasi piutang yang material tetapi tidak pervasif; (c) anak perusahaan besar tidak dikonsolidasi.",
    "answerGuide": "dua kondisi; definisi pervasif; matriks; (a) wajar dengan pengecualian (dampak disebut); (b) urutan ISA 705 paras. 11–13, lalu wajar dengan pengecualian; (c) tidak wajar."
  },
  {
    "type": "essay",
    "scope": "TM 6: Laporan Auditor dan Jenis Opini",
    "question": "Bedakan bagian Material Uncertainty Related to Going Concern, Key Audit Matters, Paragraf Penekanan Suatu Hal, dan Paragraf Hal Lain dalam laporan auditor. Berikan satu contoh untuk masing-masing.",
    "answerGuide": "definisi dan tujuan masing-masing; apakah mengubah opini; contoh dari buku; KAM bukan pengganti."
  },
  {
    "type": "essay",
    "scope": "TM 6: Laporan Auditor dan Jenis Opini",
    "question": "CFO klien menolak mengoreksi salah saji material dan mengancam mengganti KAP jika opini tidak bersih. Jelaskan bagaimana auditor harus bersikap, apa opini yang tepat, dan kepada siapa hal ini dikomunikasikan.",
    "context": "Untuk role play Week 6.",
    "answerGuide": "(Interpretasi) opini ditentukan bukti dan standar; koreksi sebagai jalan keluar yang sah; ancaman intimidasi (TM03); opini wajar dengan pengecualian atau tidak wajar tergantung pervasif; komunikasi dengan TCWG sesegera mungkin; dokumentasi dan konsultasi dengan engagement partner."
  },
  {
    "type": "calculation",
    "scope": "TM 7: Materialitas Perencanaan dan Pelaksanaan",
    "question": "Perusahaan manufaktur terbuka dengan laba stabil memproyeksikan laba sebelum pajak Rp4.000.000.000. Tahun ini adalah perikatan tahun pertama. Tentukan dan justifikasi materialitas keseluruhan, materialitas pelaksanaan, dan ambang trivial.",
    "answerGuide": "tolok ukur laba sebelum pajak; persentase dengan alasan (misalnya 5% = Rp200.000.000); materialitas pelaksanaan di ujung bawah karena tahun pertama (misalnya 50–60% = Rp100.000.000–Rp120.000.000); ambang trivial (misalnya 1% = Rp2.000.000); dokumentasi. Angka persentase boleh berbeda asalkan dijustifikasi dan dihitung benar."
  },
  {
    "type": "essay",
    "scope": "TM 7: Materialitas Perencanaan dan Pelaksanaan",
    "question": "Jelaskan perbedaan materialitas keseluruhan dan materialitas pelaksanaan, termasuk alasan materialitas pelaksanaan diperlukan dan faktor yang membuatnya diturunkan.",
    "answerGuide": "definisi; berbasis pengguna vs risiko; aggregation risk dan penyangga; rentang 50–75%; minimal tiga faktor; penggunaan dalam perencanaan dan evaluasi."
  },
  {
    "type": "essay",
    "scope": "TM 7: Materialitas Perencanaan dan Pelaksanaan",
    "question": "Manajemen menolak mengoreksi salah saji Rp40.000.000 dengan alasan jumlahnya di bawah materialitas Rp120.000.000. Padahal koreksi itu akan mengubah laba Rp30.000.000 menjadi rugi. Evaluasi argumen manajemen dan jelaskan dampaknya terhadap opini.",
    "answerGuide": "faktor kualitatif (Table 6-8); revisi materialitas bila hasil aktual jauh dari proyeksi; material walau di bawah angka; komunikasi dengan TCWG; opini modifikasian bila tidak dikoreksi (pervasif atau tidak, TM06)."
  }
];

export const AKA201_BANK_UAS: BankSoal[] = [
  {
    "type": "essay",
    "scope": "TM 9: Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "question": "Jelaskan overall audit strategy dan audit plan, hubungan keduanya, keterlibatan partner, serta batas pembahasan dengan manajemen.",
    "answerGuide": "Strategi audit menyeluruh menetapkan cakupan, waktu, dan arah serta sumber daya. Rencana audit merinci nature, timing, extent, yaitu sifat, waktu, dan luas prosedur penilaian risiko, prosedur tambahan pada asersi, dan prosedur lain. Rencana dikembangkan dari strategi. Pertimbangan strategi mencakup ciri perikatan, tujuan pelaporan, faktor penting, hasil kegiatan pendahuluan, dan sumber daya. Partner dan anggota kunci terlibat; partner mereview, dan strategi, rencana, serta perubahan signifikan dan alasannya didokumentasikan. Tanggung jawab tetap pada auditor ketika unsur perencanaan dibahas dengan manajemen; membuka rincian sifat dan waktu prosedur dapat membuatnya mudah ditebak. Rujukan 04 TM09: C-020 (ARENS p.185; ISA300 para. 7); C-021 (ISA300 para. 8); C-023 (ARENS p.177; ISA300 paras. 9, A15); C-024 (ISA300 para. A4); C-004 (ISA300 paras. 5, 11, 12)."
  },
  {
    "type": "essay",
    "scope": "TM 9: Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "question": "Jelaskan penilaian client acceptance (penerimaan klien): risiko perikatan, kemampuan firma, izin menghubungi pendahulu, syarat awal, dan tenggat tidak realistis.",
    "answerGuide": "Client acceptance menuntut firma mampu menyediakan keahlian, waktu, sumber daya, mematuhi etika, serta mempertimbangkan integritas klien. Engagement risk dipengaruhi pengguna eksternal, going concern (kelangsungan usaha), dan integritas. Perputaran staf keuangan tinggi serta keengganan memberikan informasi meragukan integritas. Penolakan izin menghubungi pendahulu membuat penerus serius mempertimbangkan menolak. Preconditions memerlukan kerangka diterima dan pengakuan tanggung jawab manajemen; bila tidak ada, bahas dan tolak kecuali hukum mewajibkan. Tenggat tidak realistis adalah batasan cakupan. Keputusan harus mempertimbangkan apakah bukti cukup dan tepat bisa diperoleh. Rujukan 04 TM09: C-031 (ARENS p.178); C-032 (ARENS pp.178–179); C-033 (ARENS p.179, Table 6-1); C-035 (ARENS p.180); C-040 (ARENS p.181; ISA210 paras. 6, 10); C-041 (ISA210 paras. 7–8); C-046 (ARENS p.184, Table 6-2)."
  },
  {
    "type": "essay",
    "scope": "TM 9: Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "question": "Hillsburg memiliki perputaran piutang 7,59 kali dan persediaan 3,36 kali; industri 12,15 dan 5,20 kali. Beban piutang tak tertagih turun meski penagihan melambat. Jelaskan akun, asersi, dan respons audit.",
    "answerGuide": "Piutang usaha dan persediaan menjadi fokus karena rasio aktivitas di bawah industri. Valuation (penilaian saldo) adalah asersi relevan; auditor menilai risiko salah saji material tinggi dan menambah upaya audit serta bukti yang meyakinkan. Penurunan beban piutang tak tertagih saat penagihan melambat mengindikasikan cadangan terlalu rendah. Preliminary analytical procedures (prosedur analitis pendahuluan) menggunakan data agregat dan memberi indikasi kasar; rasio janggal belum membuktikan salah saji. Rujukan 04 TM09: C-080 (ARENS pp.194, 196); C-082 (ARENS p.197, Table 6-5); C-083 (ARENS p.197); C-085 (ARENS p.198)."
  },
  {
    "type": "essay",
    "scope": "TM 10: Bukti Audit dan Prosedur Analitis",
    "question": "PT Bahari Mesin pada kasus 05 khawatir pengiriman belum ditagih. Staf menelusuri 60 faktur ke dokumen pengiriman. Nilai prosedur tersebut dan tulis prosedur pengganti dengan empat unsur.",
    "answerGuide": "Prosedur staf menguji occurrence (keterjadian) dengan vouching, dari faktur ke dokumen pengiriman. Untuk completeness (kelengkapan), gunakan tracing dari dokumen pengiriman ke faktur. Empat unsur prosedur pengganti: alasan menguji completeness, waktu pada pekerjaan akhir tahun, langkah membandingkan nomor, kuantitas, serta tanggal pengiriman dengan faktur terkait, dan item berupa sampel acak 60 dokumen pengiriman. Angka 60 dan konteks PT Bahari Mesin berasal dari kasus latihan 1 di 05. Rujukan 04 TM10: C-011 (ARENS pp.129–130); C-021 (ARENS p.130); C-034 (ARENS p.136)."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Bukti Audit dan Prosedur Analitis",
    "question": "Hotel Mutiara pada kasus 05 memiliki 120 kamar, hunian 70%, tarif Rp800.000 per malam, dan data hunian serta tarif sudah diuji. Gunakan 365 malam. Pendapatan tercatat Rp26.100.000.000 dan batas selisih 3% dari ekspektasi. Jalankan empat langkah analitis substantif.",
    "answerGuide": "Ekspektasi independen: 120 × 70% × 365 × Rp800.000 = Rp24.528.000.000. Acceptable difference (selisih yang dapat diterima): 3% × Rp24.528.000.000 = Rp735.840.000. Selisih tercatat terhadap ekspektasi Rp1.572.000.000, sekitar 6,4%, melebihi batas. Selidiki dengan inquiry dan bukti penguat, misalnya folio tamu dan setoran; nilai kemungkinan pendapatan lain salah klasifikasi. Data sumber ekspektasi yang diuji mendukung keandalan; presisi tetap dinilai. Angka dan konteks diambil dari kasus latihan 3 di 05, bukan angka Hillsburg. Rujukan 04 TM10: C-070 (ARENS p.148; ISA520 paras. 5, 7); C-073 (ARENS pp.148–150)."
  },
  {
    "type": "essay",
    "scope": "TM 10: Bukti Audit dan Prosedur Analitis",
    "question": "Tim pada kasus 05 menjalankan ADA atas 310.000 jurnal dan menandai 2.480. Nilai saran mengabaikan semuanya atau menyatakan semuanya salah saji, lalu jelaskan tindak lanjut dan dokumentasi.",
    "answerGuide": "Audit data analytics (analisis data audit) menghasilkan pengecualian yang dapat berupa risiko, defisiensi, salah saji, atau false positive (item ditandai tanpa masalah nyata). Kedua saran tidak tepat. Periksa kebersihan dan format data; jika salah, bersihkan serta jalankan ulang. Pecah pengecualian menurut penyusun atau akun untuk menilai pola dan menentukan tindak lanjut. Informasi entitas dinilai akurasi, kelengkapan, presisi, serta rincian. Dokumentasikan sifat data, akses, ekstraksi, perubahan, hasil, dan alasan tindak lanjut atau kesimpulan false positive. Populasi dan jumlah pengecualian berasal dari kasus latihan 4 di 05. Rujukan 04 TM10: C-081 (ARENS pp.151–153); C-082 (ARENS p.153); C-083 (ISA500 para. 9)."
  },
  {
    "type": "essay",
    "scope": "TM 11: Dokumentasi Audit dan Kertas Kerja",
    "question": "Kertas kerja piutang dalam kasus 05 hanya berjudul Piutang, tanpa klien, periode, indeks, atau penyusun. Tanda pada angka tidak dijelaskan dan kesimpulan hanya OK. Nilai dan perbaiki working paper itu.",
    "answerGuide": "Working paper (kertas kerja) belum memungkinkan auditor berpengalaman tanpa keterkaitan sebelumnya memahami pekerjaan. Lengkapi klien, periode, deskripsi, penyusun, tanggal, serta indeks. Tambahkan cross-reference ke skedul utama dan pendukung, jelaskan setiap tick mark, dan tunjukkan ciri item diuji, prosedur, bukti, serta hasil. Cocokkan rincian dengan buku besar dan trial balance; tulis kesimpulan jelas yang didukung bukti. Catat pelaksana, tanggal, pekerjaan direview, reviewer, dan waktu review. Konteks berasal dari kasus latihan 1 di 05. Rujukan 04 TM11: C-005 (ISA230 paras. 8, 6(c)); C-010 (ISA230 paras. 9(a), A12); C-011 (ISA230 paras. 9(b), A12); C-012 (ISA230 paras. 9(c), A13); C-030 (ARENS pp.158–159)."
  },
  {
    "type": "essay",
    "scope": "TM 11: Dokumentasi Audit dan Kertas Kerja",
    "question": "Bedakan administrative assembly, prosedur baru setelah tanggal laporan, perubahan setelah perakitan, dan retention period menurut ISA 230. Jelaskan apa yang dicatat pada setiap keadaan.",
    "answerGuide": "Administrative assembly (perakitan administratif) mencakup pengurutan, referensi silang, checklist, pembuangan draf tergantikan, serta bukti yang sudah disepakati sebelum tanggal laporan; kegiatan ini tidak memuat prosedur atau kesimpulan baru. Perakitan dilakukan tepat waktu, dengan batas yang sesuai umumnya tidak lebih dari 60 hari. Prosedur atau kesimpulan baru setelah tanggal laporan mencatat keadaan, prosedur, bukti, kesimpulan, serta dampaknya. Perubahan setelah perakitan mencatat alasan, waktu, pelaku, dan reviewer. Retention period (masa retensi) umumnya tidak kurang dari lima tahun; dokumen tidak dihapus sebelumnya. Penjelasan lisan hanya menjernihkan dokumentasi. Rujukan 04 TM11: C-007 (ISA230 para. 7, A1, A4, A5, A7); C-040 (ARENS pp.156–157; ISA230 para. A21); C-041 (ISA230 paras. 13–16, A20–A24)."
  },
  {
    "type": "calculation",
    "scope": "TM 11: Dokumentasi Audit dan Kertas Kerja",
    "question": "Pada C-1, wesel Graham Metal Works bernominal 150.000 dengan bunga 12% dan 57 hari. Dengan basis 360 hari hasil hitung ulang penulis, hitung bunga, jelaskan @ dan p, lalu nilai kesimpulan tertagih berdasarkan inquiry ke controller.",
    "answerGuide": "Bunga = 150.000 × 12% × 57/360 = 2.850,00. Catatan sumber: basis 360 hari berasal dari hitung ulang penulis, tidak disebut teks buku. Tick mark @ menunjukkan recalculation (penghitungan ulang); p menunjukkan konfirmasi positif yang dirujuk ke C-2. Kesimpulan buku menyatakan saldo tampak wajar dan tidak perlu cadangan setelah inquiry ke controller. (Interpretasi) Inquiry (permintaan keterangan) saja belum cukup mendukung tertagihnya wesel; prinsip ini dinyatakan C-036 dengan rujukan silang ke TM10. Nilai dukungan bukti atas kesimpulan, bukan sekadar kelengkapan tanda kertas kerja. Rujukan 04 TM11: C-032 (ARENS p.159, Figure 5-4); C-033 (ARENS p.159); C-034 (ARENS p.159); C-035 (turunan dari ARENS p.159); C-036 (turunan penulis; ARENS p.159; ARENS p.139)."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "question": "Pada kasus PT Mitra Lestari di 05, untuk valuation piutang anggap AR 5%, IR 80%, dan auditor tidak mengandalkan pengendalian. Hitung DR dengan CR 100% sebagai ilustrasi, jelaskan respons bukti, serta kewajiban atas saldo material.",
    "answerGuide": "Valuation adalah penilaian piutang. Ilustrasi: RMM = 80% × 100% = 80%; detection risk = 5% / 80% = 6,25%. Model ini alat konseptual, bukan estimasi presisi. Tanpa mengandalkan pengendalian, RMM sama dengan IR. DR rendah menuntut bukti lebih meyakinkan: sumber eksternal, uji rinci bersama analitis substantif, sampel lebih besar, atau pengujian akhir tahun. Auditor hanya mengendalikan DR lewat prosedur; IR dan CR ada pada klien. Saldo material tetap mendapat prosedur substantif. Angka dan konteks berasal dari kasus latihan 1 di 05. Rujukan 04 TM12: C-004 (ARENS p.225; ISA200 para. 13(e), 13(n)); C-005 (ARENS p.225; ISA200 para. A44); C-006 (ARENS pp.225–226); C-007 (ISA315 para. 34); C-011 (ISA330 para. 18); C-012 (ARENS p.227)."
  },
  {
    "type": "essay",
    "scope": "TM 12: Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "question": "Bedakan risiko tingkat laporan keuangan dan asersi. Bandingkan masalah going concern, estimasi cadangan piutang, kas swalayan dengan dampak sangat kecil, serta transaksi pihak berelasi signifikan di luar kegiatan normal.",
    "answerGuide": "Going concern (kelangsungan usaha) dapat memengaruhi banyak asersi dan termasuk risiko tingkat laporan keuangan. Estimasi cadangan piutang menyangkut valuation (penilaian) pada tingkat asersi, dengan subjectivity dan uncertainty (subjektivitas dan ketidakpastian). Risiko inheren dinilai melalui likelihood dan magnitude; besarnya saldo atau kemungkinan saja belum menentukan significant risk. Kas swalayan dengan kemungkinan tinggi tetapi dampak sangat rendah belum tentu signifikan. Transaksi pihak berelasi signifikan di luar kegiatan normal wajib diperlakukan sebagai risiko signifikan. Rujukan 04 TM12: C-022 (ARENS p.224; ISA315 para. A195); C-024 (ARENS p.225); C-025 (ARENS pp.229–230; ISA315 paras. 12(f), A7, A8); C-032 (ISA315 paras. 31, A208–A214; ARENS p.232 (Figure 7-5)); C-033 (ARENS p.233; ISA315 paras. 12(l), A219, A220); C-034 (ISA315 para. A220); C-036 (ARENS p.234; ISA550 para. 18; ISA240 paras. 27, 28, 48)."
  },
  {
    "type": "essay",
    "scope": "TM 12: Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "question": "PT Samudra Retail pada kasus 05 memberi bonus penjualan, menghadapi covenant bank, kehilangan kepala akuntansi, dan memiliki komite audit yang jarang membahas estimasi. Direktur menuntut target tercapai; sebagian penjualan Desember baru dikirim setelah neraca. Petakan fraud triangle dan respons audit.",
    "answerGuide": "Fraud triangle: bonus dan covenant merupakan tekanan; pergantian staf serta pengawasan komite audit tidak efektif merupakan peluang; tuntutan target apa pun caranya menunjukkan sikap atau rasionalisasi. Faktor tersebut tanda risiko, belum penetapan hukum fraud. Revenue recognition (pengakuan pendapatan) dipresumsikan berisiko fraud. Pada kasus 05, occurrence (keterjadian) dan cutoff (pisah batas) pendapatan terancam. Respons keseluruhan: staf berpengalaman, skeptisisme, evaluasi kebijakan akuntansi, ketidakterdugaan. Respons asersi: review jurnal akhir periode, syarat penjualan, dan dokumen pengiriman sekitar neraca. Management override tetap dijawab dengan uji jurnal, review bias estimasi, serta rasional bisnis transaksi tidak biasa. Konteks dan pemetaan kasus diambil dari kasus latihan 3 di 05. Rujukan 04 TM12: C-036 (ARENS p.234; ISA550 para. 18; ISA240 paras. 27, 28, 48); C-057 (ARENS pp.238–239; ISA240 paras. 12(b), 25); C-058 (ARENS p.240); C-059 (ARENS pp.239–240); C-061 (ARENS p.242; ISA240 paras. 29–32); C-063 (ISA240 paras. 32–33; ARENS pp.242–244)."
  },
  {
    "type": "essay",
    "scope": "TM 13: Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "question": "Jelaskan lima komponen COSO, hubungan direct dan indirect controls, serta mengapa budaya jujur tidak cukup untuk menyimpulkan operating effectiveness.",
    "answerGuide": "Komponen: lingkungan pengendalian, penilaian risiko entitas, pemantauan, sistem informasi dan komunikasi, aktivitas pengendalian. Direct controls cukup tepat menangani risiko asersi; indirect controls mendukungnya. Auditor mengevaluasi apakah lingkungan membangun budaya jujur dan etis serta fondasi bagi komponen lain. Lingkungan baik tidak otomatis menangkal fraud atau management override. Design evaluation dan implementation membuktikan rancangan serta penerapan; operating effectiveness (efektivitas operasi) memerlukan pengujian tersendiri. Rujukan 04 TM13: C-002 (ISA315 paras. 26(a), A162, A163, A180); C-010 (ARENS pp.259–260; ISA315 paras. 21–27, A91, A92); C-012 (ARENS p.259; ISA315 para. A96); C-015 (ISA315 paras. 21, 21(b); ARENS pp.260–261); C-017 (ARENS p.263; ISA315 para. A107); C-057 (ISA315 paras. 26(a), 26(d), A175–A177, A180; ISA330)."
  },
  {
    "type": "calculation",
    "scope": "TM 13: Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "question": "Gunakan contoh batch lima faktur di 04: nomor akun 4102, 4215, 4102, 4380, 4215; nilai Rp12.500.000, Rp8.750.000, Rp3.250.000, Rp20.000.000, Rp5.500.000. Hitung tiga total kontrol dan jelaskan kesalahan nomor akun F-104 menjadi 4308 seperti pada 05.",
    "answerGuide": "Financial total = Rp50.000.000; hash total = 4102 + 4215 + 4102 + 4380 + 4215 = 21.014; record count = 5. Total keuangan menguji jumlah uang, hash total menguji agregat kode, record count menguji jumlah record. Pada skenario F-104 berubah menjadi 4308, hash total = 20.942, sedangkan total keuangan Rp50.000.000 dan jumlah record 5 tetap. Hash total mendeteksi perubahan ini, dua total lain tidak. (Interpretasi) Satu total tidak mencakup semua jenis kesalahan. Angka dasar ada di C-045; skenario perubahan nomor akun ada di bagian batch totals pada 05. Rujukan 04 TM13: C-042 (ARENS p.277); C-045 (ARENS p.277)."
  },
  {
    "type": "essay",
    "scope": "TM 13: Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "question": "Jelaskan hubungan general IT controls, application controls, dan segregation of duties. Apa dampak kontrol umum TI tidak efektif bagi audit atas laporan buatan sistem?",
    "answerGuide": "General IT controls adalah pengendalian umum TI yang mendukung pengendalian aplikasi input, processing, output. Buku mencakup tata kelola, pemisahan tugas TI, pengembangan dan perubahan, keamanan, backup dan kontingensi, hardware; ISA mengelompokkan akses, perubahan, operasi pada lapisan aplikasi, basis data, sistem operasi, jaringan. Segregation of duties memisahkan fungsi TI dari pengguna dan rekonsiliasi dari entri data. Bila kontrol umum tidak efektif, control risk (risiko pengendalian) lebih tinggi, prosedur substantif diperluas, dan laporan buatan sistem diuji. Rujukan 04 TM13: C-035 (ARENS pp.270–271; ISA315 App.3 para. 20); C-039 (ARENS p.273; ISA315 paras. 12(d), A108, App.5 para. 8); C-040 (ARENS pp.273–276); C-041 (ARENS p.276); C-046 (ISA315 para. 12(g)(iii); App.6 paras. 1, 2); C-048 (ISA315 paras. A150, A166, A180; App.5 para. 10)."
  },
  {
    "type": "essay",
    "scope": "TM 14: Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "question": "Bedakan memahami pengendalian, TOC, dan prosedur substantif. Jelaskan kapan mengandalkan pengendalian diwajibkan dan bagaimana pendekatan TOC saja dalam buku dibaca bersama ISA 330.",
    "answerGuide": "Walk-through (penelusuran transaksi) memberi bukti desain dan implementasi. TOC menguji operating effectiveness (efektivitas operasi); prosedur substantif mendeteksi salah saji asersi. TOC wajib bila kontrol diandalkan sebagai dasar prosedur substantif atau substantif saja tidak memberi bukti cukup, misalnya transaksi sangat otomatis dengan bukti elektronik. Mengandalkan kontrol dipertimbangkan dari efisiensi dan keharusan. Catatan sumber: label pendekatan TOC saja dalam buku tidak meniadakan ISA 330 para. 18 tentang substantif pada kelas transaksi, saldo, pengungkapan material. Bila hanya substantif untuk risiko signifikan, tests of details wajib. Rujukan 04 TM14: C-007 (ARENS p.298); C-019 (ARENS pp.305–306); C-031 (ARENS p.312; ISA330 paras. 8(b), A24); C-032 (ARENS pp.312, 339; ISA330 paras. 18, 21, A44); C-034 (ARENS p.302); C-055 (ARENS p.339; ISA330 paras. 18–21, 24, A43–A44, A50–A55)."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "question": "Dalam contoh PT Maju Bersama di 04, auditor menguji 40 pesanan, mengharapkan 1 deviasi, dan menemukan 4 karena manajer cuti. Hitung tingkat deviasi dan jelaskan evaluasi, respons, serta syarat bukti kontrol otomatis dan interim.",
    "answerGuide": "Control deviation (deviasi pengendalian) yang diharapkan 1/40 = 2,5%; ditemukan 4/40 = 10%. Selidiki penyebab secara spesifik dan nilai apakah bukti memberi dasar mengandalkan kontrol. Tentukan kebutuhan tes tambahan atau respons melalui prosedur substantif; temuan tidak otomatis dianggap terisolasi. Inquiry harus diperkuat inspeksi, observasi, atau reperformance. Kontrol otomatis dapat diuji satu transaksi bila kontrol umum TI efektif dan program tidak berubah. Bukti interim menuntut bukti perubahan signifikan dan tambahan untuk sisa periode ketergantungan. Angka dan klien merupakan contoh penulis di C-047. Rujukan 04 TM14: C-038 (ARENS pp.314–316; ISA330 paras. 10(a), A26–A27); C-043 (ARENS p.317; ISA330 paras. 9, A28–A29); C-044 (ARENS p.317; ISA330 paras. 11–15, A33–A40); C-046 (ISA330 paras. 16–17, A41–A42, A63; ARENS p.314); C-047 (ISA330 paras. 17, A42, A48)."
  },
  {
    "type": "essay",
    "scope": "TM 14: Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "question": "Pada PT Karya Logam di 05, 40 faktur memberi 3 deviasi persetujuan dan salah saji Rp4,5 juta. Pendapatan berisiko signifikan direncanakan hanya analitis. Review jurnal manual belum diperbaiki sejak tahun lalu. Jelaskan hasil dual-purpose, perbaikan rencana, dan komunikasi.",
    "answerGuide": "Dual-purpose test (pengujian dua tujuan) dievaluasi terpisah: deviasi TOC 3/40 = 7,5%, sedangkan test of detail menemukan salah saji Rp4,5 juta yang dievaluasi bersama salah saji lain terhadap materialitas. Analitis saja tidak memadai untuk risiko signifikan; bila hanya substantif, sertakan tests of details yang merespons risiko. Penutupan laporan memerlukan pencocokan laporan dengan catatan serta pemeriksaan jurnal dan penyesuaian material. Defisiensi review jurnal yang tidak diperbaiki dapat menjadi indikator significant deficiency (defisiensi signifikan); ulang komunikasi tertulis tepat waktu ke tata kelola dan manajemen. Uraikan defisiensi, dampak potensial, dan konteks komunikasi. Material weakness adalah istilah tingkat tambahan dalam buku, berbeda dari dua definisi ISA 265. Angka dan konteks berasal dari kasus latihan 4 di 05, dirangkum C-070. Rujukan 04 TM14: C-055 (ARENS p.339; ISA330 paras. 18–21, 24, A43–A44, A50–A55); C-058 (ARENS pp.316, 340; ISA330 para. A23); C-061 (ARENS p.302; ISA265 paras. 6, A9–A11); C-065 (ARENS p.319; ISA265 paras. 9–10, A12–A24); C-066 (ARENS pp.319–320; ISA265 paras. 11, A28–A30); C-070 (ISA330 paras. 14, 17, 18, 21, A23, A29; ISA265 paras. A7, A17)."
  },
  {
    "type": "calculation",
    "scope": "TM 15: CAATs dan Perancangan Program Audit",
    "question": "Pada CV Sumber Pangan di 05, piutang awal Rp240 juta, penjualan Rp1.800 juta, penerimaan Rp1.650 juta. Ditemukan 9 deviasi dan 6 salah saji dari 50 faktur. Hitung saldo akhir serta dua tingkat temuan, lalu jelaskan perubahan bauran audit dan dokumentasi.",
    "answerGuide": "Roll-forward piutang: 240 + 1.800 - 1.650 = Rp390 juta. Control deviation (deviasi pengendalian) = 9/50 = 18%; tingkat item dengan salah saji = 6/50 = 12%. Dua tujuan dievaluasi terpisah. Hasil memicu evaluasi ulang ketergantungan pada kontrol dan peralihan ke substantif seperti Audit 4; TOC yang telah dikerjakan tidak otomatis mengurangi tests of details. Dokumentasikan perubahan signifikan beserta alasan, respons keseluruhan, nature, timing, extent, serta hubungan dengan risiko dan hasil. Angka rupiah berasal dari kasus latihan 2 di 05 dan C-051; berbeda dari Figure 10-7 yang tanpa satuan. Rujukan 04 TM15: C-016 (ARENS pp.341–342); C-019 (ARENS pp.343–344); C-020 (ARENS p.344; ISA330 paras. 8, 17); C-048 (ARENS pp.331, 334, 344; ISA330 paras. 17, 23, A41, A48, A60, A62, A63; ISA300 para. A18); C-050 (ISA300 para. 12; ISA330 para. 28); C-051 (04_canonical_spec.md paragraf C-051; kasus latihan penulis)."
  },
  {
    "type": "calculation",
    "scope": "TM 15: CAATs dan Perancangan Program Audit",
    "question": "Gunakan tabel teknik CAATs pada 05 untuk memilih alat: menolak input tidak valid, memverifikasi perhitungan data nyata, menandai transaksi terus-menerus, dan menguji seluruh populasi. Jelaskan syarat data serta catatan sumber tiga teknik tambahan.",
    "answerGuide": "Input tidak valid: test data approach dengan transaksi uji diterima dan ditolak; ITF menjadi variasi pada sistem daring besar. Verifikasi perhitungan: reperformance dengan generalized audit software atau parallel simulation atas data nyata melalui program klien dan auditor. Penandaan berkelanjutan: online audit monitor dengan kriteria transaksi. Populasi penuh: ADA atau perangkat lunak audit umum, dengan tindak lanjut pengecualian. Data harus relevan, andal, bisa diakses, bersih; kontrol umum TI, perubahan program, dan kompetensi diperhatikan. Sampling risk dapat dihilangkan pada cakupan penuh, nonsampling risk tetap. Catatan sumber: ITF, parallel simulation, monitor daring berasal dari satu sumber Jakšić; padanan embedded audit module adalah pembacaan penulis. Rincian cara kerja dari tabel teknik pada 05, dengan rujukan kanonis C-034 sampai C-036. Rujukan 04 TM15: C-034 (ARENS pp.151–153, 316, 349–350, 395–397; JAKSIC); C-035 (JAKSIC; ARENS p.316); C-036 (ARENS pp.316, 341, 349, 396; JAKSIC); C-037 (ARENS p.395); C-039 (ARENS p.396); C-040 (ARENS pp.151–153, 333, 397; ISA330 paras. A29, A36; ISA500 para. A17)."
  },
  {
    "type": "essay",
    "scope": "TM 15: CAATs dan Perancangan Program Audit",
    "question": "Jelaskan penyusunan audit program dari risiko dan asersi, tiga bagian program, bahaya SALY, serta respons ketika bukti bertentangan dengan penilaian awal. Mengapa contoh Table 10-4 perlu catatan sumber?",
    "answerGuide": "Program audit disusun dari strategi dan rencana dengan prosedur sesuai risiko serta asersi; bukti harus relevan dan andal. Tiga bagian: TOC bersama uji rinci transaksi, analitis substantif, uji rinci saldo. Program standar mendukung efisiensi namun tidak menggantikan pertimbangan. SALY (sama seperti tahun lalu) dan anchoring dapat mengabaikan perubahan. Deviasi, salah saji tak terduga, atau bukti bertentangan memicu evaluasi ulang risiko dan kecukupan bukti; dokumentasikan perubahan signifikan dan alasannya, prosedur, hubungan risiko, serta hasil. Catatan sumber: kolom asersi Table 10-4 tidak identik dengan ISA 315; jadwal konfirmasi interim pada tabel dan neraca pada Figure 10-3 adalah contoh terpisah. Jangan menjadikannya satu ketentuan. Rujukan 04 TM15: C-002 (ARENS pp.332, 335, 350; ISA300 para. A15); C-011 (ARENS p.335; ISA300 para. 9); C-025 (ARENS pp.347–348; ISA330 para. A51); C-041 (ARENS p.350); C-045 (ARENS pp.334, 350–351; ISA315 paras. A189, A190); C-046 (ARENS pp.350–351; ISA300 para. A20); C-047 (ARENS p.352); C-048 (ARENS pp.331, 334, 344; ISA330 paras. 17, 23, A41, A48, A60, A62, A63; ISA300 para. A18); C-049 (ISA330 paras. 25–27, A64); C-050 (ISA300 para. 12; ISA330 para. 28)."
  }
];

export const AKA201_BANK: BankSoal[] = [...AKA201_BANK_UTS, ...AKA201_BANK_UAS];
