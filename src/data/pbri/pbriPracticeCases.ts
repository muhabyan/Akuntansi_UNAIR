import type { ContentBlock } from '../../types';

export const CASE_ASSURANCE_DEMAND: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Evaluasi Kebutuhan Jasa Asurans vs Non-Asurans (PT Mahakam Mineral Tbk)',
  blocks: [
    {
      kind: 'p',
      text: 'PT Mahakam Mineral berencana mengajukan pinjaman sindikasi perbankan sebesar Rp 500 miliar dan membutuhkan evaluasi laporan keuangan. Manajemen meminta KAP Haryanto & Rekan untuk melakukan: (1) Audit Laporan Keuangan Tahunan 2026, (2) Reviu Laporan Keuangan Interim Semester 1, dan (3) Verifikasi Kepatuhan Rasio Utang Perjanjian Kredit (Agreed-Upon Procedures/AUP).'
    },
    {
      kind: 'table',
      headers: ['Jenis Perikatan', 'Standar Profesi', 'Tingkat Keyakinan (Assurance)', 'Bentuk Kesimpulan / Output'],
      rows: [
        ['Audit Laporan Keuangan', 'SA 200 / ISA', 'Keyakinan Memadai (Reasonable/Tinggi)', 'Opini Positif: \"Laporan keuangan menyajikan secara wajar dalam semua hal yang material...\"'],
        ['Reviu Laporan Interim', 'ISRE 2410 / SPR 2410', 'Keyakinan Terbatas (Limited/Moderat)', 'Kesimpulan Negatif: \"Tidak ada hal yang menjadi perhatian kami yang menyebabkan kami percaya...\"'],
        ['Agreed-Upon Procedures (AUP)', 'ISRS 4400 / SJTT 4400', 'Tanpa Asurans (No Assurance)', 'Laporan Temuan Faktual (Factual Findings) tanpa kesimpulan/opini.']
      ],
      caption: 'Tabel 1.1: Perbandingan karakteristik jasa asurans vs non-asurans pada kasus PT Mahakam Mineral.'
    },
    {
      kind: 'solution-reveal',
      title: 'Solusi & Justifikasi Standar Audit SA 200 & ISRS 4400',
      prompt: 'Jelaskan mengapa pihak Bank Sindikasi mewajibkan Audit Laporan Keuangan Tahunan daripada sekadar Reviu atau AUP, dan apa batasan dari laporan AUP.',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Tingkat Keyakinan Tertinggi**: Bank sindikasi memikul risiko kredit yang sangat besar (Rp 500 M), sehingga membutuhkan keyakinan memadai (Reasonable Assurance) bahwa seluruh asersi manajemen (keberadaan aset, kelengkapan liabilitas) telah diuji substantif mendalam.',
            '**Keterbatasan Prosedur Reviu**: Reviu hanya mencakup wawancara (inquiry) dan prosedur analitis tanpa konfirmasi saldo utang/piutang ke pihak ketiga atau inspeksi fisik aset tambang.',
            '**Batasan Distribusi AUP**: Laporan AUP hanya memuat temuan faktual perhitungan rasio tanpa opini kewajaran, dan distribusinya terbatas hanya untuk pihak yang menyepakati prosedur (Restricted Distribution).'
          ]
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Intisari Konseptual Ujian',
          text: 'Auditor independen TIDAK PERNAH memberikan keyakinan mutlak (Absolute Assurance) karena adanya keterbatasan inheren audit: penggunaan sampling, estimasi akuntansi manajemen, dan potensi kolusi fraud.'
        }
      ]
    }
  ]
};

export const CASE_AUDIT_ETHICS_INDEPENDENCE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Evaluasi 5 Ancaman Independensi & Safeguards (KAP Tanubrata & PT Surya Kencana)',
  blocks: [
    {
      kind: 'p',
      text: 'Berikut adalah skenario etika yang dihadapi oleh KAP Tanubrata saat melaksanakan perikatan audit PT Surya Kencana Tbk: (1) Partner audit memiliki saham PT Surya Kencana senilai Rp 50 juta, (2) KAP diminta menyusun sistem akuntansi dan perpajakan sekaligus mengaudit laporan keuangan, (3) Direktur Keuangan PT Surya Kencana adalah kakak kandung dari Manajer Audit, (4) Fee audit PT Surya Kencana menyumbang 40% dari total pendapatan tahunan KAP.'
    },
    {
      kind: 'table',
      headers: ['Skenario Transaksi', 'Kategori Ancaman Etika (IESBA/IAPI)', 'Tingkat Signifikansi', 'Tindakan Pengamanan (Safeguard) Wajib'],
      rows: [
        ['Partner memiliki saham klien', 'Self-Interest Threat (Kepentingan Pribadi)', 'Sangat Signifikan (Fatal)', 'Wajib divestasi/menjual seluruh saham sebelum audit dimulai atau ganti Partner Perikatan.'],
        ['KAP mendesain sistem pembukuan & audit', 'Self-Review Threat (Telaah Pribadi)', 'Sangat Signifikan', 'KAP dilarang merangkap jasa pembukuan/desain sistem IT finansial untuk entitas publik/PIE (UU AP & Kode Etik).'],
        ['Manajer Audit bersaudara dg CFO', 'Familiarity Threat (Kedekatan/Kekerabatan)', 'Signifikan', 'Manajer Audit wajib dikeluarkan (recused) dari tim perikatan PT Surya Kencana.'],
        ['Fee audit menyumbang 40% pendapatan KAP', 'Self-Interest & Intimidation Threat', 'Signifikan (Ketergantungan Ekonomi)', 'Terapkan telaah kendali mutu eksternal (EQCR) oleh pihak ketiga independen atau batasi konsentrasi fee maks 15%.']
      ],
      caption: 'Tabel 2.1: Pemetaan 5 Ancaman Etika Profesi Akuntan Publik dan Safeguards.'
    },
    {
      kind: 'solution-reveal',
      title: 'Solusi & Justifikasi Kode Etik Profesi IAPI / IESBA',
      prompt: 'Tentukan apakah independensi dalam penampilan (Independence in Appearance) dan independensi dalam pikiran (Independence in Mind) terganggu pada skenario (3) dan (4).',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Skenario 3 (Kekerabatan)**: Meskipun manajer bersumpah objektif (In Mind), publik dan pemangku kepentingan yang rasional akan menganggap laporan audit bias (In Appearance). Oleh karena itu, rotasi anggota tim adalah mandatori.',
            '**Skenario 4 (Ketergantungan Biaya)**: Biaya audit >15% selama 2 tahun berturut-turut pada entitas kepentingan publik menimbulkan ancaman kepentingan pribadi yang tidak dapat ditoleransi tanpa reviu pra-penerbitan laporan oleh pihak ketiga.'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan Ujian Terpopuler',
          text: 'Pemberian hadiah/hospitality dari klien yang nilainya tidak sepele (not trivial and inconsequential) secara otomatis melanggar independensi dan tidak ada safeguards yang dapat memulihkannya selain menolak hadiah tersebut!'
        }
      ]
    }
  ]
};

export const CASE_MANAGEMENT_ASSERTIONS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Pemetaan Asersi Manajemen C-E-A-V-P-O-R ke Prosedur Audit (PT Niaga Logistik)',
  blocks: [
    {
      kind: 'p',
      text: 'PT Niaga Logistik mencatat saldo Piutang Usaha Rp 80.000.000.000 dan Penjualan Jasa Logistik Rp 350.000.000.000 pada laporan keuangan tahun 2026. Auditor merancang 5 prosedur audit berikut untuk menguji asersi manajemen.'
    },
    {
      kind: 'table',
      headers: ['Prosedur Audit yang Dilakukan', 'Kategori Asersi Terkait', 'Arah Pengujian (Direction)', 'Tujuan Audit Spesifik'],
      rows: [
        ['Mengirim surat konfirmasi positif ke 30 debitur dengan saldo piutang terbesar.', 'Eksistensi (Existence) & Hak (Rights)', 'Saldo Buku Besar -> Pihak Ketiga', 'Memastikan piutang benar-benar ada dan merupakan hak tagih sah PT Niaga Logistik.'],
        ['Melakukan tracing dari Surat Jalan (Delivery Order) ke Jurnal Penjualan.', 'Kelengkapan (Completeness)', 'Dokumen Sumber -> Jurnal Penjualan', 'Memastikan seluruh jasa logistik yang telah diserahkan telah dicatat dan tidak ada understatement pendapatan.'],
        ['Melakukan vouching dari Jurnal Penjualan ke Faktur Pajak & Surat Jalan.', 'Keterjadian (Occurrence)', 'Jurnal Penjualan -> Dokumen Sumber', 'Memastikan pendapatan yang dicatat benar-benar terjadi dan bukan transaksi fiktif (overstatement).'],
        ['Menelaah aging schedule piutang dan menghitung ulang estimasi kerugian piutang (ECL PSAK 71).', 'Penilaian & Alokasi (Valuation & Allocation)', 'Analisis Matriks Umur Piutang', 'Memastikan piutang disajikan pada nilai realisasi bersih (Net Realizable Value).'],
        ['Memeriksa transaksi penjualan 5 hari sebelum dan 5 hari sesudah 31 Des 2026.', 'Pisah Batas (Cut-Off)', 'Transaksi di sekitar Tanggal Neraca', 'Memastikan pendapatan dicatat pada periode akuntansi yang tepat.']
      ],
      caption: 'Tabel 3.1: Matriks asersi manajemen dan prosedur pengujian audit substantif.'
    },
    {
      kind: 'solution-reveal',
      title: 'Solusi & Kunci Arah Pengujian (Tracing vs Vouching)',
      prompt: 'Jelaskan perbedaan mendasar arah pengujian Tracing vs Vouching serta asersi utama yang diuji!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**VOUCHING (Top-Down)**: Dari Catatan/Jurnal mundur ke Dokumen Sumber. Menguji asersi **OCCURRENCE / EXISTENCE** untuk mendeteksi risiko *Overstatement* (transaksi fiktif/pencatatan ganda).',
            '**TRACING (Bottom-Up)**: Dari Dokumen Sumber maju ke Catatan/Jurnal. Menguji asersi **COMPLETENESS** untuk mendeteksi risiko *Understatement* (transaksi riil yang sengaja/tidak sengaja dihilangkan dari buku).'
          ]
        }
      ]
    }
  ]
};

export const CASE_AUDIT_OPINIONS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Penentuan Jenis Opini Auditor Independen (SA 700, 705, 706)',
  blocks: [
    {
      kind: 'p',
      text: 'Evaluasilah 4 skenario audit independen berikut untuk menentukan jenis opini yang wajib diterbitkan oleh Kantor Akuntan Publik:'
    },
    {
      kind: 'table',
      headers: ['Skenario Kasus Klien', 'Kondisi Salah Saji / Batasan', 'Materialitas & Sifat Pervasif', 'Jenis Opini yang Wajib Diterbitkan'],
      rows: [
        ['Klien menyajikan persediaan usang senilai Rp 10 M (Laba sebelum pajak Rp 100 M). Manajemen menolak mencatat write-down Rp 4 M.', 'Penyimpangan dari SAK (Misstatement)', 'Material tetapi TIDAK Pervasif', 'Opini Wajar Dengan Pengecualian (Qualified Opinion / WDP).'],
        ['Klien mengkapitalisasi seluruh biaya operasional Rp 80 M sebagai Aset Tetap fiktif untuk membalikkan posisi rugi menjadi laba.', 'Penyimpangan Masif dari SAK', 'Material dan SANGAT Pervasif', 'Opini Tidak Wajar (Adverse Opinion).'],
        ['Gudang utama klien terbakar sebelum audit, seluruh catatan fisik persediaan (senilai 65% dari total aset) musnah tanpa backup.', 'Pembatasan Lingkup (Inability to obtain evidence)', 'Material dan SANGAT Pervasif', 'Opini Menyatakan Tidak Memberikan Pendapat (Disclaimer of Opinion).'],
        ['Laporan keuangan wajar tanpa salah saji, tetapi perusahaan menghadapi ketidakpastian kelangsungan usaha (Going Concern) yang diungkapkan memadai di Catatan Laporan Keuangan.', 'Kondisi Wajar + Ketidakpastian Signifikan', 'Diungkapkan penuh di CALK', 'Wajar Tanpa Pengecualian (WTP / Unmodified) + Paragraf Penekanan Suatu Hal (Emphasis of Matter / EoM).']
      ],
      caption: 'Tabel 4.1: Matriks perumusan opini audit berdasarkan SA 700 & SA 705.'
    },
    {
      kind: 'solution-reveal',
      title: 'Solusi & Kriteria Pervasif Menurut SA 705',
      prompt: 'Kapan suatu salah saji atau pembatasan lingkup dikategorikan sebagai \"Pervasif\"?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Tidak Terbatas pada Elemen Spesifik**: Salah saji tidak terbatas pada satu akun tertentu melainkan merusak gambaran laporan keuangan secara fundamental.',
            '**Proporsi Substansial**: Jika terbatas pada akun tertentu, akun tersebut mewakili proporsi sangat substansial dari laporan keuangan (misalnya persediaan mencakup >50% aset total).',
            '**Fundamental bagi Pengguna**: Terkait pengungkapan yang sangat fundamental bagi pemahaman pengguna atas laporan keuangan.'
          ]
        }
      ]
    }
  ]
};

export const CASE_AUDIT_EVIDENCE_DOCS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Evaluasi Kompetensi Bukti Audit & Dokumentasi KKP (SA 500 & SA 230)',
  blocks: [
    {
      kind: 'p',
      text: 'Auditor sedang mengumpulkan bukti audit untuk menguji akun Kas di Bank, Piutang Usaha, dan Liabilitas Sewa. Berikut adalah evaluasi 8 jenis bukti audit.'
    },
    {
      kind: 'table',
      headers: ['Jenis Bukti Audit', 'Contoh Prosedur Riil', 'Tingkat Keandalan (Reliability)', 'Keterbatasan Bukti'],
      rows: [
        ['Pemeriksaan Fisik (Physical Examination)', 'Stock opname persediaan emas di brankas klien.', 'Tinggi (Tangan Pertama)', 'Hanya membuktikan eksistensi fisik, bukan kepemilikan atau nilai realisasi bersih.'],
        ['Konfirmasi Pihak Ketiga (Confirmation)', 'Konfirmasi saldo kas langsung ke Bank Mandiri & BCA.', 'Sangat Tinggi (Pihak Luar Independen)', 'Risiko non-respons atau konfirmasi ditandatangani pihak yang tidak berwenang.'],
        ['Dokumentasi Eksternal (External Docs)', 'Rekening koran asli yang dikirim bank atau Faktur Pemasok.', 'Tinggi', 'Risiko pemalsuan dokumen oleh manajemen jika tidak diverifikasi langsung.'],
        ['Dokumentasi Internal (Internal Docs)', 'Surat Perintah Jalan (Surat Jalan) dan PO internal.', 'Sedang ke Rendah', 'Sangat bergantung pada efektivitas pengendalian internal klien.'],
        ['Perhitungan Ulang (Recalculation)', 'Menghitung ulang tabel amortisasi liabilitas sewa PSAK 73.', 'Sangat Tinggi (Matematis)', 'Hanya menguji akurasi aritmatika, tidak menguji keabsahan kontrak dasar.'],
        ['Pelaksanaan Ulang (Reperformance)', 'Auditor menjalankan ulang prosedur matching 3-way PO-GR-Invoice.', 'Tinggi', 'Membutuhkan waktu dan pemahaman prosedur operasional klien.'],
        ['Prosedur Analitis (Analytical Procedures)', 'Membandingkan Rasio Gross Margin tahun berjalan vs industri.', 'Sedang', 'Hanya mengindikasikan area anomali/risiko, bukan bukti langsung kecurangan.'],
        ['Tanya Jawab (Inquiry)', 'Wawancara dengan manajer kredit mengenai debitur macet.', 'Rendah (Harus Dikonfirmasi)', 'Informasi bersifat lisan dan berpotensi bias; wajib didukung bukti koraboratif.']
      ],
      caption: 'Tabel 5.1: Hierarki keandalan 8 jenis bukti audit berdasarkan SA 500.'
    }
  ]
};

export const CASE_AUDIT_MATERIALITY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Penentuan Overall Materiality, Performance Materiality, dan Summary of Unadjusted Differences (SA 320 & SA 450)',
  blocks: [
    {
      kind: 'p',
      text: 'PT Prima Sentosa mencatat data keuangan pra-audit tahun 2026: Laba Sebelum Pajak Normal = Rp 20.000.000.000, Total Aset = Rp 250.000.000.000, dan Pendapatan Usaha = Rp 180.000.000.000. Auditor menetapkan parameter materialitas sebagai berikut:'
    },
    {
      kind: 'formula',
      text: `\\text{Overall Materiality (OM)} = 5\\% \\times \\text{Laba Sebelum Pajak (Rp 20 M)} = \\text{Rp 1.000.000.000}
\\text{Performance Materiality (PM)} = 75\\% \\times \\text{OM} = \\text{Rp 750.000.000}
\\text{Clearly Trivial Threshold (PAAD)} = 5\\% \\times \\text{OM} = \\text{Rp 50.000.000}`
    },
    {
      kind: 'solution-reveal',
      title: 'Simulasi Evaluasi Temuan Salah Saji pada SA 450',
      prompt: 'Auditor menemukan 3 salah saji yang tidak dikoreksi manajemen: (1) Salah saji beban bunga Rp 30 juta, (2) Salah saji amortisasi sewa Rp 300 juta, (3) Salah saji pengakuan pendapatan fiktif Rp 600 juta. Bagaimana auditor mengevaluasi temuan ini terhadap opini laporan keuangan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Salah Saji 1 (Rp 30 Juta)**: Berada di bawah *Clearly Trivial Threshold* (< Rp 50 Juta), sehingga tidak perlu dicatat dalam ringkasan salah saji yang belum dikoreksi.',
            '**Salah Saji 2 & 3 (Rp 300 Juta + Rp 600 Juta = Rp 900 Juta)**: Masing-masing di bawah OM, namun total akumulasi salah saji (Rp 900 Juta) mendekati OM (Rp 1 Miliar).',
            '**Risiko Undetected Misstatement**: Mengingat total salah saji (Rp 900 Juta) melampaui Performance Materiality (Rp 750 Juta), auditor menyimpulkan bahwa terdapat risiko tinggi bahwa salah saji agregat yang belum terdeteksi dapat melampaui Overall Materiality. Auditor wajib meminta manajemen mengoreksi salah saji tersebut, atau menerbitkan opini WDP jika ditolak.'
          ]
        }
      ]
    }
  ]
};

export const CASE_ANALYTICAL_PROCEDURES: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Substantive Analytical Procedures & Proof in Total (PT Garam Madura)',
  blocks: [
    {
      kind: 'p',
      text: 'PT Garam Madura memiliki 1.200 karyawan tetap dengan skema gaji seragam berdasarkan golongan. Auditor melakukan pengujian substantif analitis (Proof in Total) atas Beban Gaji tahun 2026.'
    },
    {
      kind: 'formula',
      text: `\\text{Ekspektasi Beban Gaji Auditor} = (1.200 \\text{ Karyawan} \\times \\text{Rata-rata Gaji Rp 6.000.000/bln} \\times 12 \\text{ bln}) + \\text{THR 1 Bulan (Rp 7,2 M)}
\\text{Total Ekspektasi Auditor} = \\text{Rp 86.400.000.000} + \\text{Rp 7.200.000.000} = \\text{Rp 93.600.000.000}
\\text{Saldo Tercatat di Pembukuan Klien} = \\text{Rp 99.800.000.000}
\\text{Selisih / Selisih Tak Terjelaskan} = \\text{Rp 99.800.000.000} - \\text{Rp 93.600.000.000} = \\text{Rp 6.200.000.000}`
    },
    {
      kind: 'solution-reveal',
      title: 'Tindak Lanjut Auditor atas Selisih Signifikan',
      prompt: 'Batas selisih yang dapat diterima (Acceptable Difference) ditetapkan Rp 500 juta. Jelaskan langkah investigasi auditor terhadap selisih Rp 6,2 miliar!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Inquiry Mendalam**: Auditor meminta penjelasan resmi dari Manajer HRD dan Direktur Keuangan terkait selisih Rp 6,2 miliar.',
            '**Pemeriksaan Karyawan Fiktif (Ghost Employees)**: Selisih signifikan pada beban gaji merupakan *red flag* utama adanya pembayaran gaji fiktif. Auditor wajib melakukan pengujian substantif rinci (Test of Details) dengan mencocokkan daftar gaji ke data sidik jari/absensi biometrik dan bukti transfer bank langsung (payroll direct deposit).'
          ]
        }
      ]
    }
  ]
};

export const CASE_UTS_REVIEW_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Simulasi Ujian Tengah Semester Komprehensif (Integrasi SA 200 s/d SA 700)',
  blocks: [
    {
      kind: 'p',
      text: 'Studi kasus integrasi UTS ini menguji kemampuan mahasiswa menghubungkan kode etik perikatan, asersi manajemen, prosedur audit, penetapan materialitas, dan penentuan opini audit dalam satu skenario terpadu.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Peta Integrasi 5 Langkah Audit Pra-UTS',
      text: '1. Pra-Perikatan: Uji Independensi & Kompetensi (SA 210/220)\n2. Perencanaan: Tetapkan Overall Materiality 5% PBT & Performance Materiality 75% OM (SA 320)\n3. Penilaian Risiko: Identifikasi Asersi Kunci & RMM (SA 315)\n4. Pengumpulan Bukti: Lakukan Tracing, Vouching, Konfirmasi & SAP (SA 500/520)\n5. Evaluasi & Pelaporan: Tentukan Opini WTP/WDP/Adverse/Disclaimer (SA 700/705)'
    }
  ]
};

export const CASE_AUDIT_RISK_MODEL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Penerapan Audit Risk Model & Planned Detection Risk (SA 315 & SA 330)',
  blocks: [
    {
      kind: 'p',
      text: 'KAP Prasetyo sedang mengevaluasi 3 unit bisnis PT Global Perkasa untuk merencanakan alokasi bukti audit substantif. Audit Risk Model dirumuskan sebagai berikut:'
    },
    {
      kind: 'formula',
      text: `PDR = \\frac{AAR}{IR \\times CR}
\\text{Keterangan: } PDR = \\text{Planned Detection Risk}, AAR = \\text{Acceptable Audit Risk}, IR = \\text{Inherent Risk}, CR = \\text{Control Risk}`
    },
    {
      kind: 'table',
      headers: ['Unit Bisnis', 'AAR (Tingkat Risiko Diterima)', 'Inherent Risk (IR)', 'Control Risk (CR)', 'Planned Detection Risk (PDR)', 'Dampak Jumlah Bukti Substantif'],
      rows: [
        ['Divisi E-Commerce (Volume Tinggi, Startup Baru)', '1% (Rendah)', '90% (Tinggi)', '90% (Tinggi)', '1% / (0,9 × 0,9) = 1,23% (Sangat Rendah)', 'Banyak Bukti Diperlukan (Sampel Besar, Pengujian Rinci).'],
        ['Divisi Properti (Aset Stabil, Dokumen Lengkap)', '5% (Sedang)', '40% (Rendah)', '50% (Sedang)', '5% / (0,4 × 0,5) = 25,0% (Tinggi)', 'Sedikit Bukti Diperlukan (Bisa Mengandalkan Prosedur Analitis).'],
        ['Divisi Manufaktur (Kontrol Kuat, Sistem ERP Mapan)', '5% (Sedang)', '60% (Sedang)', '20% (Rendah setelah TOC)', '5% / (0,6 × 0,2) = 41,7% (Sangat Tinggi)', 'Bukti Substantif Minimal (Fokus pada Uji Pengendalian/TOC).']
      ],
      caption: 'Tabel 9.1: Hubungan timbal balik antara risiko audit, risiko pengendalian, dan jumlah bukti substantif.'
    },
    {
      kind: 'solution-reveal',
      title: 'Kesimpulan Logika Hubungan Risiko & Bukti',
      prompt: 'Jelaskan mengapa hubungan antara PDR dan Jumlah Bukti Substantif bersifat INVERS (berbanding terbalik)?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**PDR Rendah**: Berarti auditor hanya bersedia mentoleransi sedikit risiko salah saji yang gagal terdeteksi oleh pengujian audit. Konsekuensinya, auditor harus bekerja ekstra keras mengumpulkan **BANYAK BUKTI SUBSTANTIF**.',
            '**PDR Tinggi**: Berarti auditor dapat menerima risiko deteksi yang lebih besar (karena kontrol internal klien sudah sangat andal dan risiko bawaan rendah). Konsekuensinya, auditor cukup mengumpulkan **SEDIKIT BUKTI SUBSTANTIF**.'
          ]
        }
      ]
    }
  ]
};

export const CASE_FRAUD_RISK_ASSESSMENT: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Analisis Segitiga Kecurangan & Journal Entry Testing (SA 240)',
  blocks: [
    {
      kind: 'p',
      text: 'PT Bintang Timur mencatat lonjakan laba drastis sebesar 400% pada minggu terakhir Desember 2026. Auditor melakukan prosedur Journal Entry Testing (JET) untuk mendeteksi kecurangan pelaporan keuangan.'
    },
    {
      kind: 'table',
      headers: ['Unsur Fraud Triangle', 'Bukti Kondisi di PT Bintang Timur', 'Kategori Risiko Kecurangan', 'Prosedur Audit Responsif Wajib (SA 240)'],
      rows: [
        ['Tekanan (Pressure / Incentive)', 'Kompensasi bonus direksi bergantung pada target pencapaian laba bersih Rp 50 Miliar.', 'Pelaporan Keuangan Curang (Fraudulent Financial Reporting)', 'Review independen terhadap seluruh estimasi dan pencadangan akrual akhir tahun.'],
        ['Peluang (Opportunity)', 'CEO dapat melakukan posting manual jurnal penyesuaian tanpa otorisasi ganda di sistem ERP.', 'Management Override of Controls', 'Lakukan Journal Entry Testing (JET) pada jurnal manual yang diposting akhir pekan / malam hari.'],
        ['Rasionalisasi (Rationalization)', 'Direksi beralasan manipulasi hanya pinjaman sementara demi menjaga harga saham sebelum IPO.', 'Sikap / Pembenaran Tidak Etis', 'Terapkan Skeptisisme Profesional tingkat tinggi dan konfirmasi langsung ke pihak ketiga independen.']
      ],
      caption: 'Tabel 10.1: Analisis Segitiga Kecurangan (Fraud Triangle) dan Prosedur JET SA 240.'
    }
  ]
};

export const CASE_COSO_INTERNAL_CONTROL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Evaluasi 5 Komponen COSO & Matriks Segregasi Tugas CARP (PT Surya Logistik)',
  blocks: [
    {
      kind: 'p',
      text: 'Auditor mengevaluasi efektivitas struktur pengendalian internal PT Surya Logistik berdasarkan kerangka kerja COSO 2013 Internal Control - Integrated Framework.'
    },
    {
      kind: 'table',
      headers: ['5 Komponen COSO 2013', 'Prinsip Kunci Terkait', 'Defisiensi yang Ditemukan di Klien', 'Klasifikasi Dampak (SA 265)'],
      rows: [
        ['Lingkungan Pengendalian (Control Environment)', 'Integritas & Nilai Etika (Tone at the Top)', 'Manajemen puncak mengabaikan pelanggaran kepatuhan demi target penjualan.', 'Kelemahan Signifikan (Significant Deficiency).'],
        ['Penilaian Risiko (Risk Assessment)', 'Identifikasi Risiko Bisnis & Fraud', 'Perusahaan tidak memiliki prosedur mitigasi risiko fluktuasi kurs mata uang asing.', 'Defisiensi Pengendalian Internal.'],
        ['Aktivitas Pengendalian (Control Activities)', 'Pemisahan Tugas (Segregation of Duties)', 'Kasir merangkap pemegang kas fisik sekaligus mencatat jurnal penerimaan kas.', 'Kelemahan Material (Material Weakness) - Risiko Pencurian Kas!'],
        ['Informasi & Komunikasi (Info & Comm)', 'Kualitas Informasi Finansial', 'Laporan bulanan piutang macet terlambat disampaikan ke manajemen selama 3 bulan.', 'Defisiensi Pengendalian Internal.'],
        ['Pemantauan (Monitoring Activities)', 'Evaluasi Terpisah & Berkelanjutan', 'Fungsi Internal Audit dibekukan sejak 2 tahun lalu oleh dewan komisaris.', 'Kelemahan Signifikan (Significant Deficiency).']
      ],
      caption: 'Tabel 11.1: Pemetaan defisiensi pengendalian internal pada 5 komponen COSO 2013.'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Matriks Pemisahan Tugas Wajib: Konsep C-A-R-P',
      text: 'Segregasi tugas mutlak memisahkan 4 fungsi independen:\n1. Custody (Penyimpanan Fisik Aset/Kas)\n2. Authorization (Otorisasi Transaksi oleh Pejabat Berwenang)\n3. Recording (Pencatatan Akuntansi / Jurnal Pembukuan)\n4. Periodic Reconciliation (Rekonsiliasi Fisik vs Catatan oleh Pihak Independen)'
    }
  ]
};

export const CASE_AUDIT_TESTING_MIX: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Desain Pengujian Audit 5 Jenis (TOC, STOT, SAP, TOD) pada Siklus Pendapatan',
  blocks: [
    {
      kind: 'p',
      text: 'Auditor merancang bauran pengujian audit (Audit Testing Mix) untuk akun Pendapatan dan Piutang Usaha PT Mitra Abadi.'
    },
    {
      kind: 'table',
      headers: ['Jenis Pengujian Audit', 'Tujuan Utama Pengujian', 'Contoh Prosedur Riil di Lapangan', 'Tingkat Biaya Relatif (Cost)'],
      rows: [
        ['1. Prosedur Penilaian Risiko (Risk Assessment)', 'Memahami bisnis dan lingkungan pengendalian klien.', 'Wawancara dengan manajemen & observasi alur pabrik.', 'Paling Rendah'],
        ['2. Pengujian Pengendalian (Test of Controls / TOC)', 'Menguji efektivitas operasi pengendalian internal.', 'Memeriksa paraf otorisasi kredit pada pesanan penjualan (Sales Order).', 'Rendah'],
        ['3. Uji Substantif Transaksi (STOT)', 'Menguji apakah transaksi moneter telah dicatat benar.', 'Mencocokkan faktur penjualan ke daftar harga resmi dan kartu persediaan.', 'Sedang'],
        ['4. Prosedur Analitis Substantif (SAP)', 'Menguji kewajaran saldo akun melalui perbandingan/rasio.', 'Menghitung rasio Days Sales Outstanding (DSO) dan Gross Margin bulanan.', 'Sedang'],
        ['5. Uji Rinci Saldo (Test of Details / TOD)', 'Menguji salah saji moneter saldo akhir akun neraca.', 'Mengirim konfirmasi saldo piutang dan reviu penerimaan kas setelah tanggal neraca.', 'Paling Tinggi']
      ],
      caption: 'Tabel 12.1: Perbandingan 5 jenis pengujian audit dalam metodologi ISA/IAPI.'
    }
  ]
};

export const CASE_IT_AUDIT_CAATS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Audit Sistem Informasi & Penggunaan TABK/CAATs (PT Fintek Nusantara)',
  blocks: [
    {
      kind: 'p',
      text: 'PT Fintek Nusantara memproses 2.000.000 transaksi pinjaman online per bulan. Auditor menggunakan Teknik Audit Berbantuan Komputer (TABK / CAATs).'
    },
    {
      kind: 'table',
      headers: ['Teknik Audit TI / TABK', 'Cara Kerja Metodologi', 'Keunggulan Utama', 'Keterbatasan / Risiko'],
      rows: [
        ['Test Data Approach', 'Auditor menginput data uji (transaksi valid dan tidak valid) ke dalam sistem klien.', 'Menguji secara langsung validitas logika program (validasi input/limit limit pinjaman).', 'Data dummy harus dihapus tuntas agar tidak mengotori database operasional klien.'],
        ['Parallel Simulation', 'Auditor menulis program replika independen untuk memproses ulang data riil transaksi klien.', 'Dapat menguji 100% populasi transaksi tanpa mengganggu sistem operasional klien.', 'Membutuhkan waktu pembuatan program simulasi dan biaya tinggi.'],
        ['Embedded Audit Module (EAM)', 'Modul audit ditanamkan secara permanen di dalam sistem ERP klien untuk menangkap transaksi anomali.', 'Monitoring dan alert real-time atas transaksi bernilai tinggi atau berisiko.', 'Mengurangi efisiensi performa sistem aplikasi klien jika kriteria audit terlalu kompleks.']
      ],
      caption: 'Tabel 13.1: Evaluasi 3 metodologi TABK / CAATs dalam pengauditan sistem informasi.'
    }
  ]
};

export const CASE_AUDIT_STRATEGY_PROGRAM: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: Perancangan Audit Program Komprehensif Siklus Penjualan & Penerimaan Kas',
  blocks: [
    {
      kind: 'p',
      text: 'Berikut adalah program audit komprehensif 4 tahap yang siap dieksekusi oleh tim auditor pada perikatan audit akhir tahun.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Struktur Program Audit 4 Tahap Berbasis Risiko (SA 330)',
      text: 'Tahap 1: Pengujian Pengendalian (TOC) otorisasi kredit & penomoran urut dokumen.\nTahap 2: Pengujian Substantif Transaksi (STOT) kelengkapan jurnal vs surat jalan.\nTahap 3: Prosedur Analitis Substantif (SAP) tren perputaran piutang & umur piutang.\nTahap 4: Pengujian Rinci Saldo (TOD) konfirmasi positif piutang & uji pisah batas (cut-off).'
    }
  ]
};
