// src/data/asp/aspPracticeCases.ts
// 14 Studi Kasus Riil Komprehensif Akuntansi Sektor Publik (AKS201)
// Berdasarkan Standar PP 71/2010 (SAP Akrual), ISAK 35, & Paket UU Keuangan Negara
import type { ContentBlock } from '../../types';

// TM 1
export const CASE_PUBLIC_SECTOR_ACCOUNTABILITY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Akuntabilitas Publik Vertikal vs Horisontal di Pemerintah Kota Surabaya',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Pemerintah Kota Surabaya meluncurkan program digitalisasi pelayanan perizinan terpadu dan transparansi anggaran berbasis e-Budgeting. Walikota diwajibkan menyampaikan Laporan Keterangan Pertanggungjawaban (LKPJ) tahunan kepada DPRD, laporan realisasi kepada Kementerian Dalam Negeri, serta mempublikasikan rincian realisasi belanja APBD di portal publik agar dapat diakses warga masyarakat.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Identifikasi perbedaan Akuntabilitas Vertikal vs Akuntabilitas Horisontal dalam kasus ini, (2) Jelaskan 4 dimensi akuntabilitas publik menurut Stewart (1984), dan (3) Mengapa motif laba tidak dapat dijadikan tolok ukur keberhasilan organisasi pemerintah?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Akuntabilitas Vertikal vs Horisontal**:\n- *Akuntabilitas Vertikal*: Pertanggungjawaban kepada otoritas yang lebih tinggi dalam struktur hirarki pemerintahan, yaitu Walikota menyampaikan laporan kepada Gubernur dan Kementerian Dalam Negeri.\n- *Akuntabilitas Horisontal*: Pertanggungjawaban kepada lembaga perwakilan rakyat (DPRD) dan masyarakat luas (publik) melalui portal transparansi anggaran.',
            '**2. Empat Dimensi Akuntabilitas (Stewart)**:\n- *Accountability for Probity and Legality*: Kepatuhan terhadap hukum, peraturan perundang-undangan, dan pencegahan korupsi.\n- *Process Accountability*: Kecukupan sistem informasi akuntansi dan prosedur operasional standar (SOP).\n- *Performance Accountability*: Pencapaian target kinerja program pelayanan publik yang telah dianggarkan.\n- *Policy Accountability*: Pertanggungjawaban atas pilihan kebijakan strategis yang diambil pemimpin daerah.',
            '**3. Ketiadaan Motif Laba**: Tujuan utama organisasi pemerintah adalah *Public Service Delivery* (pelayanan publik prima, kesejahteraan sosial, dan penegakan keadilan), bukan mencari keuntungan finansial. Keberhasilan pemerintah diukur dari efektivitas capaian Indeks Pembangunan Manusia (IPM), penurunan kemiskinan, dan kepuasan masyarakat.'
          ]
        }
      ]
    }
  ]
};

// TM 2
export const CASE_NONPROFIT_ISAK35: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Penyusunan Laporan Keuangan Organisasi Nirlaba (ISAK 35) Yayasan Peduli Bangsa',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Yayasan Peduli Bangsa (organisasi nirlaba sosial) menerima donasi selama tahun 2026:\n1. Donasi kas umum tanpa syarat dari para dermawan sebesar Rp 2.000.000.000.\n2. Dana hibah kemanusiaan dari Kedutaan Asing sebesar Rp 1.500.000.000 yang dibatasi penggunaannya HANYA untuk program air bersih di NTT.\n3. Selama tahun 2026, yayasan telah membelanjakan Rp 900.000.000 untuk pengadaan sumur bor di NTT sesuai pembatasan donor, serta beban operasional kantor yayasan sebesar Rp 800.000.000.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun: (1) Klasifikasi Aset Neto menurut ISAK 35 (Tanpa Pembatasan vs Dengan Pembatasan), (2) Reklasifikasi aset neto yang terpenuhi pembatasannya, dan (3) Dampak penyajian pada Laporan Penghasilan Komprehensif Nirlaba!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Klasifikasi ISAK 35 (Pengganti PSAK 45)**: ISAK 35 menyederhanakan klasifikasi aset neto menjadi dua kategori: (a) *Aset Neto Tanpa Pembatasan dari Pemberi Sumber Daya (Without Donor Restrictions)*, dan (b) *Aset Neto Dengan Pembatasan dari Pemberi Sumber Daya (With Donor Restrictions)*.',
            '**2. Perlakuan Transaksi**:\n- Donasi umum Rp 2.000.000.000 diakui sebagai Penghasilan Tanpa Pembatasan.\n- Dana hibah air bersih Rp 1.500.000.000 diakui sebagai Penghasilan Dengan Pembatasan.\n- Pengeluaran program air bersih Rp 900.000.000 memicu **Reklasifikasi Aset Neto**: Pembebasan Pembatasan (Net Assets Released from Restrictions) sebesar Rp 900.000.000 berpindah dari Aset Neto Dengan Pembatasan ke Aset Neto Tanpa Pembatasan.\n- Beban program air bersih (Rp 900 Jt) dan beban operasional kantor (Rp 800 Jt) seluruhnya disajikan mengurangi Aset Neto Tanpa Pembatasan.',
            '**3. Saldo Akhir Periode**:\n- Kenaikan Aset Neto Tanpa Pembatasan = Penghasilan (2.000) + Reklasifikasi Masuk (900) - Beban Program (900) - Beban Kantor (800) = **+Rp 1.200.000.000**.\n- Kenaikan Aset Neto Dengan Pembatasan = Hibah Diterima (1.500) - Reklasifikasi Keluar (900) = **+Rp 600.000.000**.'
          ]
        }
      ]
    }
  ]
};

// TM 3
export const CASE_GOV_ACCOUNTING_STANDARDS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Kerangka Regulasi Paket UU Keuangan Negara & SAP Akrual PP 71/2010',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dalam reformasi keuangan negara di Indonesia, diberlakukan 3 paket undang-undang (UU 17/2003, UU 1/2004, UU 15/2004) yang mengamanatkan transisi dari basis Kas Menuju Akrual (Cash Toward Accrual / PP 24/2005) menuju Basis Akrual Penuh (Full Accrual Basis / PP 71/2010). Pemerintah daerah wajib menyajikan Laporan Operasional (LO) dan Laporan Perubahan Ekuitas (LPE) di samping Laporan Realisasi Anggaran (LRA).'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Mengapa basis kas murni dipandang gagal menyajikan informasi kewajiban jangka panjang dan aset tetap pemerintah?, (2) Jelaskan perbedaan fungsi LRA (Basis Kas) vs LO (Basis Akrual), dan (3) Apa peran Komite Standar Akuntansi Pemerintahan (KSAP)?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Kelemahan Basis Kas Murni**: Basis kas hanya mencatat transaksi saat kas keluar/masuk. Akibatnya, utang pemerintah yang belum dibayar, hak tagih pajak yang belum disetor, serta penyusutan aset tetap jalan/jembatan tidak pernah tercatat di neraca, menyembunyikan kewajiban generasi masa depan.',
            '**2. Perbedaan LRA vs LO**:\n- *LRA (Basis Kas)*: Mengukur ketaatan pelaksanaan anggaran publik (APBN/APBD) dengan mencatat Pendapatan-LRA, Belanja, dan Pembiayaan untuk menghitung SiLPA/SiKPA.\n- *LO (Basis Akrual)*: Mengukur kinerja operasional dan konsumsi sumber daya ekonomi murni dengan mencatat Pendapatan-LO, Beban (termasuk beban penyusutan non-kas), untuk menghitung Surplus/Defisit Operasional.',
            '**3. Peran KSAP**: Komite Standar Akuntansi Pemerintahan bertugas menyusun Pernyataan Standar Akuntansi Pemerintahan (PSAP) independen yang ditetapkan melalui Peraturan Pemerintah setelah mendapat pertimbangan Badan Pemeriksa Keuangan (BPK).'
          ]
        }
      ]
    }
  ]
};

// TM 4
export const CASE_APBD_BUDGETING_CYCLE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 4: Siklus Perencanaan & Penganggaran APBD Pemprov Jawa Timur',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Pemerintah Provinsi Jawa Timur menyusun APBD Tahun Anggaran 2027. Siklus dimulai dari Musyawarah Perencanaan Pembangunan (Musrenbang), penyelarasan dengan RPJMD ke dalam Rencana Kerja Pemerintah Daerah (RKPD), penyusunan Kebijakan Umum Anggaran dan Prioritas Plafon Anggaran Sementara (KUA-PPAS), hingga kesepakatan bersama Kepala Daerah dan DPRD menjadi Perda APBD.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Sebutkan urutan kronologis siklus penyusunan APBD menurut Permendagri No. 77/2020 dan jelaskan konsekuensi hukum jika Perda APBD gagal disetujui bersama oleh Kepala Daerah dan DPRD tepat waktu (paling lambat 30 November)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Urutan Kronologis Siklus APBD**:\n1. *Januari - April*: Musrenbang Desa s/d Provinsi menghasilkan RKPD.\n2. *Juni - Juli*: Penyusunan Rancangan KUA dan PPAS oleh TAPD.\n3. *Agustus*: Kesepakatan KUA-PPAS antara Kepala Daerah dan DPRD.\n4. *Agustus - September*: Penyusunan Rencana Kerja dan Anggaran SKPD (RKA-SKPD).\n5. *Oktober*: Pengajuan Raperda APBD ke DPRD.\n6. *Paling lambat 30 November*: Persetujuan bersama Raperda APBD oleh Kepala Daerah & DPRD.\n7. *Desember*: Evaluasi Raperda oleh Kemendagri / Gubernur dan penetapan Perda APBD.',
            '**Konsekuensi Keterlambatan**: Jika DPRD dan Kepala Daerah gagal menyepakati Perda APBD hingga 30 November, Kepala Daerah menerbitkan Peraturan Kepala Daerah (Perkada) yang plafon belanjanya dibatasi setinggi-tingginya sebesar realisasi APBD tahun sebelumnya, serta sanksi penundaan pembayaran gaji/tunjangan kepala daerah dan anggota DPRD selama 6 bulan (UU 23/2014).'
          ]
        }
      ]
    }
  ]
};

// TM 5
export const CASE_BUDGET_APPROACHES_PBB_ZBB: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 5: Konversi Sistem Anggaran Tradisional ke Penganggaran Berbasis Kinerja (PBK)',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dinas Kesehatan Kabupaten Mojokerto selama ini menggunakan Anggaran Tradisional (Line-Item Budgeting) dengan pendekatan inkrementalisme (menaikkan anggaran 10% setiap tahun tanpa evaluasi hasil). Pemerintah pusat mewajibkan konversi ke sistem Penganggaran Berbasis Kinerja (Performance-Based Budgeting / PBK) dengan indikator masukan, keluaran, dan hasil penurunan angka stunting balita.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Bandingkan kelemahan sistem anggaran tradisional (Line-Item & Incrementalism) vs keunggulan sistem Penganggaran Berbasis Kinerja (PBK) serta Zero-Based Budgeting (ZBB)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Kelemahan Anggaran Tradisional**:\n- *Line-Item*: Hanya berfokus pada pos belanja (rincian gaji, ATK, perjalanan dinas) tanpa memperhatikan manfaat bagi masyarakat.\n- *Inkrementalisme*: Menggunakan alokasi tahun lalu sebagai dasar mutlak ditambah persentase kenaikan, melanggengkan inefisiensi anggaran dan mendorong perilaku menghabiskan sisa anggaran di akhir tahun (Spend-it-or-lose-it syndrome).',
            '**Keunggulan Penganggaran Berbasis Kinerja (PBK)**: Menghubungkan setiap rupiah belanja negara dengan *Output* (contoh: 10.000 balita terlayani PMT) dan *Outcome* (contoh: penurunan prevalensi stunting sebesar 5%). Anggaran dievaluasi berdasarkan efisiensi dan efektivitas capaian sasaran program.',
            '**Konsep Zero-Based Budgeting (ZBB)**: Menghapus asumsi inkremental; setiap pos program harus dievaluasi dan dijustifikasi kelayakannya dari titik nol (Zero Base) setiap tahun melalui pembentukan Paket Keputusan (Decision Packages).'
          ]
        }
      ]
    }
  ]
};

// TM 6
export const CASE_FUND_COMMITMENT_ACCOUNTING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 6: Akuntansi Dana, Akuntansi Anggaran, & Akuntansi Komitmen Pengadaan Bansos',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dinas Sosial menerbitkan Surat Perintah Kerja (SPK) kontrak pengadaan paket sembako bantuan sosial kepada PT Berkah senilai Rp 500.000.000 pada tanggal 10 Oktober 2026. Barang baru diserahterimakan pada tanggal 15 November 2026, dan pembayaran SP2D diterbitkan pada tanggal 20 Desember 2026.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Jelaskan bagaimana Akuntansi Komitmen (Commitment Accounting) mencatat transaksi tersebut pada tanggal 10 Oktober dan mengapa akuntansi komitmen sangat krusial dalam pengendalian anggaran publik!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pencatatan Akuntansi Komitmen (10 Oktober 2026)**:\nPada saat SPK ditandatangani, kas belum keluar dan barang belum diterima, namun alokasi anggaran telah terikat (Encumbrance). Sistem mencatat:\n- *Debit*: Komitmen / Encumbrance Pengadaan Bansos = Rp 500.000.000\n- *Kredit*: Cadangan Komitmen (Reserve for Encumbrances) = Rp 500.000.000.',
            '**Fungsi Krusial Akuntansi Komitmen**: Mencegah terjadinya pengeluaran belanja melampaui sisa pagu anggaran (Overspending). Dengan mengurangkan komitmen dari DIPA/DPA, Pejabat Pembuat Komitmen (PPK) mengetahui secara riil sisa pagu anggaran bebas yang belum terikat kontrak pihak ketiga.'
          ]
        }
      ]
    }
  ]
};

// TM 7
export const CASE_GOVERNMENT_ACCRUAL_STATEMENTS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 7: Rekonsiliasi 7 Laporan Keuangan Pemerintah: LRA vs LO & Neraca (PP 71/2010)',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Pemerintah Kabupaten Malang menyusun laporan keuangan tahun 2026. Data pembukuan menunjukkan: Pendapatan Pajak Daerah yang diterima tunai = Rp 300 Miliar, sedangkan piutang pajak per 31 Desember 2026 bertambah Rp 30 Miliar. Belanja Modal pengadaan gedung sekolah dibayar tunai = Rp 100 Miliar. Beban penyusutan gedung tahun 2026 = Rp 15 Miliar.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Hitung dan bandingkan: (1) Pendapatan Pajak pada LRA vs Pendapatan Pajak pada LO, (2) Pengaruh Belanja Modal gedung pada LRA vs Neraca vs LO, dan (3) Hubungan Surplus/Defisit LO terhadap Laporan Perubahan Ekuitas (LPE)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Pendapatan Pajak LRA vs LO**:\n- *LRA (Basis Kas)*: Dicatat hanya kas yang masuk = **Rp 300 Miliar**.\n- *LO (Basis Akrual)*: Dicatat hak pendapatan timbul = Kas Masuk (300 M) + Tambahan Piutang Pajak (30 M) = **Rp 330 Miliar**.',
            '**2. Belanja Modal Gedung Rp 100 Miliar**:\n- *LRA*: Dicatat sebagai Belanja Modal Kas Keluar = Rp 100 Miliar (mengurangi SiLPA kas).\n- *Neraca*: Dikapitalisasi menambah Aset Tetap Gedung = Rp 100 Miliar.\n- *LO*: Belanja modal TIDAK MASUK LO; yang masuk ke LO adalah **Beban Penyusutan Gedung** non-kas sebesar Rp 15 Miliar.',
            '**3. Hubungan Surplus/Defisit LO ke LPE**: Surplus/Defisit Operasional dari LO ditransfer langsung ke Laporan Perubahan Ekuitas (LPE) untuk menambah/mengurangi Ekuitas Awal bersama dengan Dampak Kumulatif Perubahan Kebijakan Akuntansi menghasilkan Ekuitas Akhir di Neraca.'
          ]
        }
      ]
    }
  ]
};

// TM 8
export const CASE_UTS_ASP_INTEGRATED: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 8: Integrasi Akuntansi Pemerintah & Evaluasi Soal Ujian Tengah Semester (UTS)',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Peserta ujian menghadapi soal kasus Pemda: SKPD Dinas Bina Marga menerima DPA Belanja Modal Jalan sebesar Rp 50 Miliar. Pada 20 Oktober diterbitkan SP2D-LS pengadaan aspal jalan Rp 45 Miliar. Bendahara memungut PPN 11% dan PPh Pasal 22 1,5% lalu menyetorkannya ke Kas Negara.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun: (1) Jurnal Finansial (LO & Neraca), (2) Jurnal Pelaksanaan Anggaran (LRA), dan (3) Jelaskan mengapa pungutan PPN dan PPh bukan merupakan Pendapatan Pemda melainkan Transaksi Transitoris (Non-Anggaran)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Jurnal Finansial (LO & Neraca)**:\n- *Debit*: Aset Tetap - Jalan, Irigasi, & Jaringan = Rp 45.000.000.000\n- *Kredit*: RK-PPKD = Rp 45.000.000.000.',
            '**2. Jurnal Pelaksanaan Anggaran (LRA)**:\n- *Debit*: Belanja Modal Pengadaan Jalan = Rp 45.000.000.000\n- *Kredit*: Perubahan SAL = Rp 45.000.000.000.',
            '**3. Transaksi Transitoris Perpajakan**: Pungutan PPN dan PPh Pasal 22 dipungut bendahara daerah atas nama Kas Negara Pemerintah Pusat (DJP). Kas tersebut BUKAN hak pendapatan Pemda dan BUKAN belanja Pemda, melainkan utang titipan perpajakan (Perhitungan Fihak Ketiga / PFK) yang wajib disetorkan 100% ke Kas Negara.'
          ]
        }
      ]
    }
  ]
};

// TM 9
export const CASE_SKPD_PPKD_CONSOLIDATION: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 9: Hubungan Akun Timbal Balik (Reciprocal Account) RK-PPKD vs RK-SKPD',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Dalam struktur akuntansi pemerintah daerah (SAPD), Satuan Kerja Pengelola Keuangan Daerah (PPKD) bertindak sebagai Home Office (Kantor Pusat) dan SKPD bertindak sebagai Branch (Kantor Cabang). Pada tanggal 5 Maret 2026, PPKD menerbitkan SP2D-UP (Uang Persediaan) sebesar Rp 50.000.000 ke rekening Bendahara Pengeluaran Dinas Pendidikan.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Susun: (1) Jurnal di buku PPKD, (2) Jurnal di buku SKPD Dinas Pendidikan, dan (3) Jelaskan proses eliminasi akun timbal balik saat konsolidasi Laporan Keuangan Pemda di akhir tahun!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Jurnal di Buku PPKD (BUD)**:\n- *Debit*: RK-SKPD Dinas Pendidikan = Rp 50.000.000\n- *Kredit*: Kas di Kas Daerah = Rp 50.000.000.',
            '**2. Jurnal di Buku SKPD Dinas Pendidikan**:\n- *Debit*: Kas di Bendahara Pengeluaran = Rp 50.000.000\n- *Kredit*: RK-PPKD = Rp 50.000.000.',
            '**3. Jurnal Eliminasi Konsolidasi Akhir Tahun**: Saat menggabungkan laporan seluruh SKPD ke dalam Laporan Keuangan Pemerintah Daerah (LKPD), akun *RK-PPKD* (di sisi pasiva SKPD) dan akun *RK-SKPD* (di sisi aset PPKD) wajib dieliminasi timbal balik (Reciprocal Elimination) dengan jurnal: Debit RK-PPKD dan Kredit RK-SKPD, sehingga saldo internal intra-pemerintah menjadi nol di neraca konsolidasian.'
          ]
        }
      ]
    }
  ]
};

// TM 10
export const CASE_VALUE_FOR_MONEY_EVAL: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 10: Pengukuran Kinerja Value for Money (Ekonomi, Efisiensi, Efektivitas) RSUD',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: RSUD Dr. Soetomo mengalokasikan anggaran pengadaan alat cuci darah (Hemodialisa) sebesar Rp 10 Miliar. Realisasi pembelian alat dapat ditekan menjadi Rp 8,5 Miliar dengan kualitas spesifikasi standar internasional yang sama. Target pelayanan melayani 5.000 pasien per tahun berhasil dicapai dengan 5.500 pasien tertangani, dan angka harapan hidup pasien gagal ginjal meningkat 25%.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Evaluasi kinerja program tersebut menggunakan 3 pilar Paradigma Value for Money (VFM): Ekonomi, Efisiensi, dan Efektivitas!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Aspek Ekonomi (Hemat Biaya Masukan)**:\nIndikator Ekonomi = Realisasi Input / Anggaran Input = Rp 8,5 Miliar / Rp 10 Miliar = **85,0% (< 100%)** $\\rightarrow$ **EKONOMIS / HEMAT**. Manajemen berhasil menghemat Rp 1,5 Miliar tanpa mengorbankan kualitas spesifikasi teknis alat.',
            '**2. Aspek Efisiensi (Hubungan Input vs Output)**:\nEfisiensi = Output Riil / Biaya Riil. Dengan biaya lebih rendah (Rp 8,5 M), rumah sakit mampu melayani 5.500 pasien (melampaui target awal 5.000 pasien) $\\rightarrow$ **EFISIENSI TINGGI**.',
            '**3. Aspek Efektivitas (Hubungan Output vs Outcome/Hasil)**:\nEfektivitas = Realisasi Outcome / Target Outcome. Tercapainya peningkatan harapan hidup pasien sebesar 25% dan kepuasan masyarakat terhadap layanan cuci darah $\\rightarrow$ **SANGAT EFEKTIF**.'
          ]
        }
      ]
    }
  ]
};

// TM 11
export const CASE_PUBLIC_AUDIT_BPK_APIP: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 11: Pemeriksaan Eksternal BPK RI, LHP, & Tindak Lanjut Temuan Pengawasan APIP',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: BPK RI menerbitkan Laporan Hasil Pemeriksaan (LHP) atas LKPD Kabupaten Sidoarjo dengan opini Wajar Dengan Pengecualian (WDP). Temuan pemeriksaan mencakup kelebihan bayar proyek jembatan sebesar Rp 2,5 Miliar akibat kekurangan volume pekerjaan fisik dan pengelolaan aset tetap tanah fasum yang belum bersertifikat seluas 50 hektar.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Analisis: (1) Apa perbedaan kewenangan BPK RI (Audit Eksternal) vs APIP/Inspektorat (Audit Internal), (2) Apa batas waktu maksimal tindak lanjut rekomendasi BPK sesuai UU 15/2004, dan (3) Apa konsekuensi pidana jika temuan kelebihan bayar tidak disetorkan kembali ke Kas Daerah?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. BPK RI vs APIP**:\n- *BPK RI*: Lembaga pemeriksa eksternal independen konstitusional (UUD 1945) yang berwenang memberikan opini atas kewajaran LKPD dan menerbitkan LHP resmi.\n- *APIP (Inspektorat Daerah)*: Aparat pengawas intern pemerintah yang berada di bawah Kepala Daerah, berfungsi melakukan pengawasan preventif (Quality Assurance & Consulting).',
            '**2. Batas Waktu Tindak Lanjut**: Menurut UU No. 15/2004 Pasal 20, Kepala Daerah dan pejabat terkait WAJIB memberikan jawaban atau penjelasan tindak lanjut rekomendasi LHP BPK selambat-lambatnya **60 (enam puluh) hari** setelah LHP diterima.',
            '**3. Konsekuensi Hukum Kerugian Daerah**: Jika kelebihan bayar Rp 2,5 Miliar tidak dikembalikan ke Kas Daerah dalam jangka waktu yang ditentukan, temuan tersebut dapat dinaikkan statusnya menjadi Tindak Pidana Korupsi (Kerugian Keuangan Negara) dan dilimpahkan BPK ke aparat penegak hukum (Kejaksaan/KPK).'
          ]
        }
      ]
    }
  ]
};

// TM 12
export const CASE_POLITICAL_PARTY_NGO_ACCOUNTING: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 12: Akuntabilitas Dana Bantuan Keuangan Partai Politik & Audit KPU',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Partai Politik ABC menerima dana bantuan keuangan partai politik dari APBN/APBD sebesar Rp 5 Miliar sesuai regulasi UU No. 2/2011 dan Permendagri No. 78/2020. Aturan perundang-undangan mensyaratkan bahwa minimal 60% dana bantuan wajib dialokasikan untuk pendidikan politik kader, dan maksimal 40% untuk operasional kesekretariatan partai.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Sebutkan mekanisme pelaporan pertanggungjawaban dana parpol dan sanksi yang dijatuhkan jika laporan dana parpol terlambat diserahkan kepada BPK untuk diaudit!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Mekanisme Pelaporan**: Partai politik wajib menyusun Laporan Pertanggungjawaban (LPJ) Penerimaan dan Pengeluaran Bantuan Keuangan Parpol berbasis bukti riil pengeluaran (kuitansi resmi pendidikan politik dan sewa kantor), serta melampirkan rekening koran khusus partai.',
            '**Batas Waktu Penyerahan**: LPJ tahun anggaran berkenaan wajib diserahkan kepada BPK RI paling lambat 1 bulan setelah tahun anggaran berakhir (31 Januari).',
            '**Sanksi Keterlambatan**: Partai politik yang terlambat menyerahkan LPJ atau mendapatkan opini disclaimer dari BPK dikenai sanksi administratif berupa **Penghentian Bantuan Keuangan APBN/APBD** pada tahun anggaran berikutnya sampai laporan pertanggungjawaban disahkan BPK.'
          ]
        }
      ]
    }
  ]
};

// TM 13
export const CASE_BLU_BLUD_FLEXIBILITY: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 13: Pola Pengelolaan Keuangan Badan Layanan Umum (PPK-BLU) & PTN-BH',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Universitas Airlangga sebagai Perguruan Tinggi Negeri Berbadan Hukum (PTN-BH) dan RSUD Dr. Soetomo sebagai BLUD memiliki fleksibilitas pengelolaan keuangan: pendapatan non-APBN/non-APBD dari tarif layanan dapat langsung digunakan (Direct Spending) tanpa harus disetor terlebih dahulu ke Kas Negara/Daerah.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Jelaskan 4 fleksibilitas utama pengelolaan keuangan yang dimiliki instansi BLU/BLUD dibanding SKPD dinas pemerintah reguler!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Pendapatan Dapat Langsung Digunakan**: Penerimaan Negara Bukan Pajak (PNBP) / Pendapatan Layanan dapat langsung dibelanjakan untuk operasional layanan tanpa melalui siklus transfer ke rekening Kas Umum Daerah.',
            '**2. Fleksibilitas Pengelolaan Kas & Investasi Jangka Pendek**: BLU berhak mengelola saldo kas mengendap dalam bentuk deposito perbankan atau instrumen pasar uang untuk optimalisasi imbal hasil kas (Cash Management).',
            '**3. Fleksibilitas Pengadaan Barang & Jasa**: Dapat memiliki pedoman pengadaan barang/jasa khusus yang lebih adaptif terhadap kebutuhan operasional rumah sakit/universitas dengan tetap menjunjung prinsip transparansi.',
            '**4. Skema Remunerasi Berbasis Kinerja**: Direktur BLU berwenang menyusun skema gaji, honorarium, dan insentif jasa pelayanan (remunerasi) bagi tenaga profesional medis dan akademisi berdasarkan capaian indeks kinerja individu.'
          ]
        }
      ]
    }
  ]
};

// TM 14
export const CASE_DIGITAL_SIPD_SPAN_GOVERNANCE: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 14: Tata Kelola Digital Sektor Publik: SIPD Kemendagri & SPAN Kemenkeu',
  blocks: [
    {
      kind: 'p',
      text: '**Skenario Kasus**: Pemerintah mengintegrasikan seluruh sistem keuangan daerah ke dalam Sistem Informasi Pemerintahan Daerah (SIPD-RI Kemendagri) dan keuangan pusat ke dalam Sistem Perbendaharaan dan Anggaran Negara (SPAN Kemenkeu). Integrasi ini mengharuskan standarisasi Bagan Akun Standar (BAS) dan implementasi Green Budgeting untuk pendanaan mitigasi perubahan iklim.'
    },
    {
      kind: 'solution-reveal',
      title: 'Pertanyaan & Solusi Pembahasan Kasus',
      prompt: 'Jelaskan bagaimana SIPD dan SPAN mencegah terjadinya manipulasi anggaran siluman (Ghost Budgeting) dan meningkatkan konsistensi antara RKPD dengan Perda APBD!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pencegahan Anggaran Siluman (Ghost Projects)**: Dalam SIPD, setiap mata anggaran yang muncul di APBD wajib memiliki rekam jejak digital (Digital Footprint) yang terkunci sejak tahap Musrenbang dan RKPD. Pokok pikiran (Pokir) DPRD yang tidak terdaftar sejak awal sistem tidak dapat diinput ke dalam RKA-SKPD.',
            '**Konsistensi Dokumen Perencanaan & Penganggaran**: Sistem memberlakukan validasi otomatis *Locking System*: RKA tidak dapat diverifikasi jika tidak merujuk pada program prioritas di KUA-PPAS dan RKPD.',
            '**Single Source of Truth**: Seluruh data transaksi pendapatan dan pengeluaran kas daerah tercatat secara real-time di server cloud terpusat, mempermudah pengawasan langsung oleh KPK, Kemendagri, BPKP, dan publik.'
          ]
        }
      ]
    }
  ]
};
