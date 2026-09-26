import type { Reading } from '../../../types';

const OVERVIEW_DEPRECIATION_REVALUATION = {
  "heading": "PENYUSUTAN FISKAL, AMORTISASI, & PENILAIAN KEMBALI (REVALUASI) AKTIVA TETAP",
  "badge": "TM04 AKTIVA",
  "cards": [
    {
      "title": "1. KELOMPOK & TARIF FISKAL",
      "subtitle": "Pasal 11 UU PPh & PMK 72/2023",
      "items": [
        "Kel. 1 (4 th): Garis Lurus 25% | Saldo 50%",
        "Kel. 2 (8 th): Garis Lurus 12,5% | Saldo 25%",
        "Kel. 3 (16 th): Garis Lurus 6,25% | Saldo 12,5%",
        "Kel. 4 (20 th): Garis Lurus 5% | Saldo 10%",
        "Bangunan Permanen 20 th (5%): Saldo DILARANG",
        "Bangunan Tidak Permanen 10 th: Garis Lurus 10%"
      ],
      "takeaway": "Tabel Baku Masa Manfaat Fiskal"
    },
    {
      "title": "2. KAIDAH HITUNG & AMORTISASI",
      "subtitle": "Pasal 11 dan 11A UU PPh; PMK 72/2023. Natura: PMK 66/2023",
      "items": [
        "Dasar penyusutan fiskal tidak dikurangi estimasi nilai residu komersial",
        "Penyusutan umumnya dimulai pada bulan pengeluaran; lihat pengecualian PMK 72/2023 Pasal 5",
        "Saldo Menurun: Akhir masa disusut sekaligus",
        "Biaya HP dan kendaraan dinas dapat menjadi pengurang sepanjang terkait 3M; PPh penerima diuji terpisah",
        "Amortisasi: Kelompok 1-4 atas hak tanah HGB/ HGU/HP, goodwill, paten, lisensi, merek dagang"
      ],
      "takeaway": "Kepastian Beban Operasional 3M"
    },
    {
      "title": "3. REVALUASI AKTIVA TETAP",
      "subtitle": "PMK No. 79/PMK.03/2008",
      "items": [
        "Subjek: WP Badan DN & BUT pembukuan IDR",
        "Syarat: Permohonan ke DJP dan penilaian oleh perusahaan jasa penilai atau ahli penilai berizin",
        "Interval: Tidak boleh diulang sebelum 5 tahun",
        "PPh Final 10%: Atas selisih lebih nilai appraisal di atas nilai sisa buku fiskal semula",
        "PPh final dapat dimohonkan angsuran maksimal 12 bulan bila kondisi keuangan tidak memungkinkan; masa manfaat susut dimulai lagi"
      ],
      "takeaway": "Pembaruan Nilai Aktiva & Modal"
    }
  ],
  "footer": "Penyusutan dan amortisasi: Pasal 11 dan 11A UU PPh serta PMK 72/2023. Biaya dan kenikmatan: PP 55/2022, PMK 66/2023, PER-8/PJ/2025 Pasal 147 angka 26. Revaluasi: PMK 79/PMK.03/2008."
};

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Penyusutan Harta Berwujud, Amortisasi Harta Tak Berwujud, dan Revaluasi Aset Tetap',
  ref: 'UU PPh Pasal 11 & 11A | UU No. 7/2021 HPP | PP 55/2022 | PMK 72/2023 | PMK 66/2023 | PMK 79/2008',
  intro: 'Modul TM 4 menyajikan pembebanan aktiva tetap berwujud dan harta tak berwujud dalam hukum pajak Indonesia: perbandingan prinsip akuntansi komersial (PSAK 216) dan fiskal, tarif serta masa manfaat Kelompok 1 s.d. 4 dan bangunan, permohonan masa manfaat ke DJP, saat mulai penyusutan dan pengecualiannya, pembebanan biaya ponsel dan kendaraan dinas sepanjang memenuhi prinsip 3M, amortisasi hak atas tanah dan aset tak berwujud, penarikan aktiva serta penggantian asuransi, dan penilaian kembali aktiva tetap menurut PMK 79/PMK.03/2008 dengan PPh final 10%.',
  objectives: [
    'Menganalisis perbedaan fundamental antara perlakuan akuntansi komersial (PSAK 216) dan fiskal (UU PPh & PMK 72/2023) dalam penentuan masa manfaat, nilai residu Rp0, saat mulai susut, dan larangan metode saldo menurun pada bangunan.',
    'Menghitung beban penyusutan fiskal harta berwujud Bukan Bangunan (Kelompok 1, 2, 3, dan 4) menggunakan metode Garis Lurus (Straight-Line) dan Saldo Menurun (Declining-Balance) dengan aturan disusutkan sekaligus pada tahun terakhir.',
    'Menghitung beban penyusutan kelompok Bangunan Permanen (20 tahun) dan Tidak Permanen (10 tahun) serta memahami opsi masa manfaat sesungguhnya melebihi 20 tahun sesuai PMK 72/2023.',
    'Menentukan saat dimulainya penyusutan fiskal (bulan perolehan, bulan selesainya konstruksi, atau bulan mulai menghasilkan di sektor perkebunan dengan persetujuan DJP).',
    'Membedakan pengurangan biaya HP dan kendaraan dinas bagi pemberi kerja dari pengenaan PPh atas kenikmatan bagi pegawai menurut PP 55/2022 dan PMK 66/2023; KEP-220/PJ/2002 dicabut oleh PER-8/PJ/2025.',
    'Menghitung amortisasi harta tak berwujud dan biaya perpanjangan hak atas tanah (HGB, HGU, Hak Pakai) sesuai Pasal 11A UU PPh.',
    'Menghitung pajak penghasilan terutang (PPh Final 10%) atas selisih lebih Penilaian Kembali (Revaluasi) Aktiva Tetap serta pencatatan akun ekuitas modalnya menurut PMK No. 79/PMK.03/2008.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Arsitektur Penyusutan Fiskal, Amortisasi, dan Penilaian Kembali Aktiva Tetap.',
      overview: OVERVIEW_DEPRECIATION_REVALUATION
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 11 & 11A UU PPh (Penyusutan & Amortisasi)',
      text: '"Pasal 11 ayat (1): Penyusutan atas pengeluaran untuk pembelian, pendirian, penambahan, perbaikan, atau perubahan harta berwujud, kecuali tanah yang berstatus hak milik, hak guna bangunan, hak guna usaha, dan hak pakai, yang dimiliki dan digunakan untuk mendapatkan, menagih, dan memelihara penghasilan yang mempunyai masa manfaat lebih dari 1 (satu) tahun dilakukan dalam bagian-bagian yang sama besar selama masa manfaat yang telah ditentukan bagi harta tersebut (Metode Garis Lurus).\n\nPasal 11 ayat (2): Penyusutan atas pengeluaran harta berwujud sebagaimana dimaksud pada ayat (1) selain bangunan, dapat juga dilakukan dalam bagian-bagian yang menurun selama masa manfaat, yang dihitung dengan cara menerapkan tarif penyusutan atas nilai sisa buku, dan pada akhir masa manfaat nilai sisa buku disusutkan sekaligus (Metode Saldo Menurun).\n\nPasal 11 ayat (3): Penyusutan dimulai pada bulan dilakukannya pengeluaran, kecuali untuk harta yang masih dalam proses pengerjaan, penyusutannya dimulai pada bulan selesainya pengerjaan harta tersebut.\n\nPasal 11A ayat (1): Amortisasi atas pengeluaran untuk memperoleh harta tak berwujud dan pengeluaran lainnya termasuk biaya perpanjangan hak guna bangunan, hak guna usaha, hak pakai, dan muhibah yang mempunyai masa manfaat lebih dari 1 (satu) tahun yang dipergunakan untuk 3M dilakukan dengan metode garis lurus atau metode saldo menurun."'
    },
    {
      kind: 'h2',
      text: '1. Matriks Komparasi Penyusutan: Akuntansi Komersial (PSAK 216) vs Pajak'
    },
    {
      kind: 'p',
      text: 'Perbedaan mendasar antara akuntansi keuangan dan ketentuan fiskal memerlukan penyesuaian (rekonsiliasi fiskal) dalam SPT Tahunan PPh Badan:'
    },
    {
      kind: 'table',
      headers: ['Dimensi Pengaturan', 'Akuntansi Komersial (PSAK 216)', 'Ketentuan Fiskal (UU PPh & PMK 72/2023)', 'Dampak Rekonsiliasi Fiskal'],
      rows: [
        ['Tujuan & Konsep Aset', 'Digunakan dalam produksi, disewakan, atau administratif selama lebih dari 1 periode.', 'Wajib dimiliki dan digunakan langsung untuk mendapatkan, menagih, dan memelihara penghasilan (3M) objek pajak.', 'Aktiva yang tidak terkait 3M disusutkan komersial namun dikoreksi positif penuh di fiskal.'],
        ['Penetapan Masa Manfaat', 'Ditaksir berdasarkan pertimbangan manajemen (management judgement) dan dapat direvisi berkala.', 'Ditetapkan secara kaku oleh undang-undang ke dalam 4 Kelompok Bukan Bangunan & 2 Kelompok Bangunan.', 'Penyusutan komersial disesuaikan dengan masa manfaat baku fiskal.'],
        ['Metode yang Diperbolehkan', 'Garis Lurus, Saldo Menurun Ganda, Jumlah Angka Tahun, Unit Produksi.', 'Bukan Bangunan: Garis Lurus ATAU Saldo Menurun. Bangunan: HANYA Garis Lurus (Saldo Menurun dilarang keras).', 'Koreksi fiskal apabila bangunan disusutkan memakai metode saldo menurun atau unit produksi.'],
        ['Nilai Residu (Salvage Value)', 'Diakui estimasi nilai sisa pada akhir masa ekonomis.', 'TIDAK DIAKUI NILAI RESIDU (Nilai Residu = Rp0). Seluruh harga perolehan habis disusutkan.', 'Dasar penyusutan fiskal selalu 100% dari harga perolehan tanpa pengurangan nilai sisa.'],
        ['Saat Dimulai Penyusutan', 'Saat aset siap untuk digunakan (ready for intended use).', 'Bulan pengeluaran/perolehan, atau bulan selesainya pengerjaan konstruksi, atau bulan mulai menghasilkan (izin DJP).', 'Koreksi beda waktu bulan pengakuan beban penyusutan.'],
        ['Pembulatan Bulan Perolehan', 'Mengikuti kebijakan akuntansi entitas (misal proporsional hari atau batas tanggal 15).', 'SELALU DIBULATKAN PENUH KE ATAS (misal perolehan tanggal 25 Juli dihitung 1 bulan penuh pada Juli -> 6 bulan di tahun pertama).', 'Perhitungan bulan prorata fiskal selalu dibulatkan penuh ke atas.'],
        ['Sistem Pencatatan', 'Boleh penyusutan kelompok / gabungan (group/composite depreciation).', 'Wajib disusutkan secara individual per unit aktiva tetap.', 'Daftar aktiva komersial gabungan wajib dipecah menjadi unit individual dalam lampiran khusus SPT.']
      ],
      caption: 'Tabel 4.1: Matriks perbandingan perlakuan penyusutan akuntansi komersial vs fiskal.'
    },
    {
      kind: 'h2',
      text: '2. Tabel Baku Masa Manfaat & Tarif Penyusutan Fiskal (PMK 72/2023)'
    },
    {
      kind: 'table',
      headers: ['Kelompok Harta Berwujud', 'Masa Manfaat Fiskal', 'Tarif Garis Lurus', 'Tarif Saldo Menurun', 'Contoh Aktiva Sesuai Lampiran PMK 72/2023'],
      rows: [
        ['Kelompok 1 (Bukan Bangunan)', '4 Tahun', '25%', '50%', 'Komputer, printer, scanner, telepon genggam, sepeda motor, alat perlengkapan kantor ringan.'],
        ['Kelompok 2 (Bukan Bangunan)', '8 Tahun', '12,5%', '25%', 'Mobil sedan dinas, truk operasional, bus angkutan karyawan, mebel kantor dari logam/kayu, AC, mesin ringan.'],
        ['Kelompok 3 (Bukan Bangunan)', '16 Tahun', '6,25%', '12,5%', 'Mesin pabrik tekstil, industri kimia, mesin penambangan, peralatan berat manufaktur.'],
        ['Kelompok 4 (Bukan Bangunan)', '20 Tahun', '5%', '10%', 'Mesin konstruksi berat, kapal laut penumpang/barang, fasilitas dermaga dan dok pelabuhan.'],
        ['Bangunan Permanen', '20 Tahun', '5%', 'DILARANG', 'Gedung perkantoran bertingkat beton, pabrik permanen bata bertulang.'],
        ['Bangunan Tidak Permanen', '10 Tahun', '10%', 'DILARANG', 'Gudang kayu sementara, barak lapangan pekerja proyek, bangunan semi-permanen.']
      ],
      caption: 'Tabel 4.2: Tabel masa manfaat dan tarif penyusutan fiskal harta berwujud.'
    },
    {
      kind: 'callout',
      variant: 'tip',
      title: '📌 Ketentuan Khusus Bangunan Permanen Masa Manfaat Lebih dari 20 Tahun (PMK 72/2023)',
      text: 'Berdasarkan Pasal 6 dan Pasal 7 PMK No. 72 Tahun 2023, dalam hal Wajib Pajak memiliki bangunan permanen yang masa manfaat ekonomis sesungguhnya melebihi 20 tahun (misalnya gedung dirancang untuk 30 tahun), Wajib Pajak berhak memilih menyusutkan bangunan tersebut sesuai dengan masa manfaat yang sebenarnya (tarif = 100% / 30 = 3,33% per tahun) dengan syarat menyampaikan surat pemberitahuan kepada Direktur Jenderal Pajak paling lambat pada akhir Tahun Pajak bersangkutan.'
    },
    {
      kind: 'h2',
      text: '3. Tata Cara Permohonan Masa Manfaat Harta Bukan Bangunan ke DJP'
    },
    {
      kind: 'p',
      text: 'Berdasarkan Pasal 3 PMK No. 72 Tahun 2023:'
    },
    {
      kind: 'ul',
      items: [
        '**Default Rule Kelompok III**: Harta berwujud bukan bangunan yang tidak tercantum dalam daftar lampiran PMK 72/2023 secara otomatis dimasukkan ke dalam KELOMPOK III (masa manfaat 16 tahun).',
        '**Hak Mengajukan Permohonan**: Jika masa manfaat ekonomis sebenarnya tidak sesuai dengan Kelompok III, Wajib Pajak berhak mengajukan permohonan penetapan kelompok masa manfaat sesungguhnya kepada Direktur Jenderal Pajak.',
        '**Kelengkapan Dokumen**: Permohonan wajib melampirkan spesifikasi teknis aktiva, buku manual pabrikan pembuat, dan/atau laporan penilaian umur ekonomis dari Kantor Jasa Penilai Publik (KJPP) berizin.'
      ]
    },
    {
      kind: 'h2',
      text: '4. Perlakuan Telepon Seluler dan Kendaraan Sedan Dinas: Status Dual Posisi'
    },
    {
      kind: 'table',
      headers: ['Aspek Evaluasi', 'Posisi Historis (KEP-220/PJ/2002)', 'Posisi Positif Mutakhir (PP 55/2022 & PMK 66/2023)'],
      rows: [
        ['Telepon Seluler (HP) Karyawan', 'KEP-220/PJ/2002 membatasi pembebanan HP dan pulsa tertentu sebesar 50%.', 'KEP-220/PJ/2002 dicabut oleh PER-8/PJ/2025 Pasal 147 angka 26. Biaya HP dan pulsa dinas dapat dikurangkan sepanjang terbukti terkait kegiatan 3M; penyusutan berlaku untuk aset dengan masa manfaat lebih dari satu tahun.'],
        ['Mobil Sedan Dinas Jabatan', 'KEP-220/PJ/2002 membatasi pembebanan sedan dinas dan biaya terkait tertentu sebesar 50%.', 'Biaya kendaraan yang berkaitan dengan kegiatan 3M dapat menjadi pengurang. Pemakaian pribadi atau kenikmatan pegawai perlu diuji tersendiri; jangan langsung menganggap seluruh biaya operasional sebagai 3M.'],
        ['Sifat Pemajakan Pegawai', 'Perlakuan sebelum rezim natura UU HPP berbeda dari ketentuan kini.', 'Fasilitas kendaraan yang menjadi kenikmatan dikecualikan dari objek PPh penerima hanya jika pegawai bukan pemegang saham dan rata-rata penghasilan bruto 12 bulan terakhir dari pemberi kerja tidak lebih dari Rp100 juta per bulan (PMK 66/2023, lampiran). Peralatan kerja seperti HP diuji menurut fungsi dan ketentuan pengecualian yang relevan.']
      ],
      caption: 'Tabel 4.3: Perbandingan KEP-220/PJ/2002 yang dicabut PER-8/PJ/2025 dengan rezim UU HPP dan PMK 66/2023. Pembebanan pemberi kerja dan PPh penerima adalah dua pengujian berbeda.'
    },
    {
      kind: 'h2',
      text: '5. Amortisasi Harta Tak Berwujud & Penarikan Aktiva (Pasal 11A UU PPh)'
    },
    {
      kind: 'p',
      text: 'Pengeluaran untuk memperoleh hak dan aktiva tak berwujud dengan masa manfaat lebih dari 1 tahun diamortisasi dengan metode Garis Lurus atau Saldo Menurun:'
    },
    {
      kind: 'table',
      headers: ['Kelompok Harta Tak Berwujud', 'Masa Manfaat', 'Tarif Garis Lurus', 'Tarif Saldo Menurun', 'Ruang Lingkup Objek Amortisasi'],
      rows: [
        ['Kelompok 1', '4 Tahun', '25%', '50%', 'Perangkat lunak (software) komputer umum, lisensi jangka pendek, hak cipta tertentu.'],
        ['Kelompok 2', '8 Tahun', '12,5%', '25%', 'Hak paten teknologi, formula rahasia, waralaba (franchise), biaya perpanjangan HGB/HGU/HP 8 tahun.'],
        ['Kelompok 3', '16 Tahun', '6,25%', '12,5%', 'Hak penambangan, muhibah (goodwill) bisnis, biaya perpanjangan hak atas tanah 16 tahun.'],
        ['Kelompok 4', '20 Tahun', '5%', '10%', 'Hak paten farmasi jangka panjang, konsesi infrastruktur, biaya perpanjangan hak tanah 20 tahun.']
      ],
      caption: 'Tabel 4.4: Kelompok dan tarif amortisasi harta tak berwujud menurut Pasal 11A UU PPh.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '💼 Penarikan Harta & Penggantian Asuransi (Pasal 11 ayat 8 UU PPh)',
      text: 'Apabila aktiva tetap ditarik dari pemakaian karena dijual, musnah terbakar, atau mengalami bencana:\n1. Nilai Sisa Buku Fiskal pada saat penarikan/kejadian diakui sebagai KERUGIAN PENGALIHAN HARTA (deductible expense).\n2. Jumlah Harga Jual atau Hasil Klaim Asuransi yang diterima dibukukan sebagai PENGHASILAN FISKAL pada tahun pajak bersangkutan.'
    },
    {
      kind: 'h2',
      text: '6. Penilaian Kembali (Revaluasi) Aktiva Tetap (PMK No. 79/PMK.03/2008)'
    },
    {
      kind: 'p',
      text: 'Penilaian kembali aktiva tetap perusahaan dilakukan untuk meningkatkan nilai aset di neraca serta memperkuat rasio solvabilitas keuangan perbankan:'
    },
    {
      kind: 'ul',
      items: [
        '**Subjek Berhak**: Wajib Pajak Badan dalam negeri dan Bentuk Usaha Tetap (BUT) yang menyelenggarakan pembukuan dalam mata uang Rupiah.',
        '**Wajib Persetujuan DJP**: Harus mengajukan permohonan resmi kepada Direktur Jenderal Pajak untuk diterbitkan Surat Keputusan Persetujuan Penilaian Kembali.',
        '**Dasar Nilai Penilaian**: Dinilai berdasarkan nilai pasar atau nilai wajar oleh Kantor Jasa Penilai Publik (KJPP) yang memperoleh izin pemerintah.',
        '**Interval Waktu Minimal 5 Tahun**: Penilaian kembali aktiva tetap tidak boleh dilakukan kembali sebelum lewat jangka waktu 5 (LIMA) TAHUN.',
        '**Pengenaan PPh Final 10%**: Atas selisih lebih nilai pasar hasil penilaian kembali di atas nilai sisa buku fiskal semula dikenakan Pajak Penghasilan yang bersifat FINAL sebesar 10%.',
        '**Fasilitas Angsuran**: Wajib Pajak yang mengalami kesulitan likuiditas dapat mengajukan permohonan pembayaran PPh Final secara mengangsur paling lama 12 (dua belas) bulan.',
        '**Dasar Penyusutan Baru**: Nilai aktiva hasil revaluasi disusutkan kembali menggunakan MASA MANFAAT PENUH YANG BARU mulai bulan dilakukannya penilaian kembali.',
        '**Sanksi Pengalihan Dini**: Jika aktiva revaluasian dialihkan sebelum berakhirnya masa manfaat (Kelompok 1 & 2) atau sebelum lewat 10 tahun (Kelompok 3, 4, bangunan, dan tanah), dikenakan TAMBAHAN PPh Final sebesar tarif badan tertinggi saat revaluasi dikurangi 10%.'
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: '📌 Catatan Batasan Pustaka Regulasi (Source Limitation SL-PJK-02)',
      text: 'Rujukan ketentuan dan contoh kasus Penilaian Kembali Aktiva Tetap pada modul ini mengacu pada materi perkuliahan dosen pengampu (Slide 22 s.d. 35) dan ketentuan PMK No. 79/PMK.03/2008 sehubungan ketiadaan naskah resmi PDF PMK 79/2008 pada pustaka berkas regulasi bersama.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Beban Penyusutan, Prorata, & Revaluasi'
    },
    {
      kind: 'formula',
      text: `\\text{Beban Penyusutan Garis Lurus Tahunan} = \\text{Tarif Garis Lurus} \\times \\text{Harga Perolehan}
\\text{Penyusutan Prorata Bulan (Tahun Pertama)} = \\left( \\frac{\\text{Jumlah Bulan Operasional}}{12} \\right) \\times \\text{Tarif} \\times \\text{Harga Perolehan}
\\text{Beban Penyusutan Saldo Menurun} = \\text{Tarif Saldo Menurun} \\times \\text{Nilai Sisa Buku Fiskal Awal Tahun}
\\text{Penyusutan Tahun Terakhir (Saldo Menurun)} = \\text{Nilai Sisa Buku Fiskal Tersisa} \\quad (\\text{Disusutkan Sekaligus})
\\text{Selisih Lebih Revaluasi} = \\text{Nilai Pasar Appraisal KJPP} - \\text{Nilai Sisa Buku Fiskal Semula}
\\text{PPh Final Revaluasi Terutang} = 10\\% \\times \\text{Selisih Lebih Revaluasi}`,
      note: 'Jumlah bulan pada tahun perolehan selalu dibulatkan penuh ke atas. Nilai residu fiskal mutlak Rp0 (nol). Pada tahun terakhir metode saldo menurun, seluruh nilai buku sisa wajib disusutkan sekaligus.'
    },
    {
      kind: 'h2',
      text: 'Praktik Terbimbing Komprehensif (4 Studi Kasus Terverifikasi)'
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 1: Pembangunan Gedung Selesai Maret 2026 (Slide 14)',
      prompt: 'Perusahaan membangun gedung kantor permanen dengan total pengeluaran fisik Rp1.000.000.000,00 (satu miliar rupiah). Konstruksi fisik dimulai pada Oktober 2025 dan selesai untuk digunakan pada Maret 2026. Tentukan: (1) Kapan saat dimulainya penyusutan fiskal gedung, dan (2) Beban penyusutan fiskal gedung pada Tahun Pajak 2026.',
      blocks: [
        {
          kind: 'table',
          headers: ['Parameter Evaluasi', 'Kaidah Regulasi Fiskal', 'Nilai / Hasil Perhitungan'],
          rows: [
            ['Saat Mulai Penyusutan', 'Bulan selesainya pengerjaan harta (Pasal 11 ayat 3 UU PPh jo. PMK 72/2023)', 'Maret 2026'],
            ['Klasifikasi Gedung', 'Bangunan Permanen (Masa Manfaat 20 Tahun)', 'Tarif Garis Lurus 5%'],
            ['Jumlah Bulan Tahun 2026', 'Maret sampai dengan Desember', '10 Bulan Operasional'],
            ['Beban Penyusutan Fiskal 2026', '(10 / 12) x 5% x Rp1.000.000.000,00', 'Rp41.666.666,67'],
            ['Nilai Sisa Buku Akhir 2026', 'Rp1.000.000.000 - Rp41.666.666,67', 'Rp958.333.333,33']
          ],
          caption: 'Tabel Solusi Kasus 1: Rekapitulasi penyusutan gedung selesai konstruksi Maret 2026.'
        },
        {
          kind: 'p',
          text: 'Catatan Kritis: Jangan memulai penyusutan pada Oktober 2025 saat pengeluaran pertama, karena untuk harta yang memakan proses pengerjaan, titik mulai penyusutan adalah bulan selesai pengerjaan.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 2: Rekomputasi Mesin Saldo Menurun Kelompok 1 Periode 2022–2026 (Slide 15-16)',
      prompt: 'Mesin operasional pabrik dibeli dan ditempatkan pada tanggal 25 Juli 2022 dengan harga perolehan Rp100.000.000,00 (seratus juta rupiah). Mesin masuk dalam Kelompok 1 (masa manfaat 4 tahun) dan disusutkan dengan metode Saldo Menurun (tarif 50%). Susun tabel penyusutan lengkap dari tahun 2022 sampai tuntas tahun 2026.',
      blocks: [
        {
          kind: 'table',
          headers: ['Tahun Pajak', 'Bulan Prorata', 'Tarif Saldo Menurun', 'Dasar Perhitungan (NSB Awal)', 'Beban Penyusutan', 'Nilai Sisa Buku (NSB) Akhir'],
          rows: [
            ['2022', '6 Bulan (Juli-Desember)', '50%', 'Rp100.000.000 (Perolehan)', 'Rp25.000.000 [(6/12) x 50% x 100 Jt]', 'Rp75.000.000'],
            ['2023', '12 Bulan Penuh', '50%', 'Rp75.000.000', 'Rp37.500.000 [50% x 75 Jt]', 'Rp37.500.000'],
            ['2024', '12 Bulan Penuh', '50%', 'Rp37.500.000', 'Rp18.750.000 [50% x 37,5 Jt]', 'Rp18.750.000'],
            ['2025', '12 Bulan Penuh', '50%', 'Rp18.750.000', 'Rp9.375.000 [50% x 18,75 Jt]', 'Rp9.375.000'],
            ['2026', 'Tahun Terakhir (Ke-5)', 'Disusutkan Sekaligus', 'Rp9.375.000', 'Rp9.375.000 (Sekaligus)', 'Rp0,00 (TUNTAS)'],
            ['Total', '48 Bulan Operasional', '—', '—', 'Rp100.000.000,00', '100% Terserap Penuh']
          ],
          caption: 'Tabel Solusi Kasus 2: Skedul penyusutan saldo menurun mesin Kelompok 1 periode 2022 s.d. 2026.'
        },
        {
          kind: 'ul',
          items: [
            '**Pembulatan Juli**: Pembelian 25 Juli dibulatkan penuh ke atas dihitung 1 bulan pada Juli, sehingga total tahun 2022 adalah 6 bulan operasional.',
            '**Tahun 2026**: Karena perolehan di tengah tahun (Juli 2022), masa manfaat 4 tahun (48 bulan) baru berakhir pada Juni 2026 (tahun kalender ke-5). Berdasarkan Pasal 11 ayat (2) UU PPh, sisa buku fiskal Rp9.375.000 disusutkan sekaligus hingga NSB menjadi Rp0.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 3: Penundaan Penyusutan Traktor Pertanian PT Argobisnis (Slide 17)',
      prompt: 'PT Argobisnis bergerak di bidang perkebunan kelapa sawit terpadu, membeli traktor operasional pada bulan Mei 2025. Perkebunan kelapa sawit tersebut baru mulai panen menghasilkan pada bulan Februari 2026. Apakah PT Argobisnis boleh menunda penyusutan traktor hingga Februari 2026 dan bagaimana persyaratannya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Kaidah Default**: Menurut Pasal 11 ayat (3) UU PPh, penyusutan dimulai pada bulan pengeluaran (Mei 2025).',
            '**Pengecualian Sektor Perkebunan**: Berdasarkan Pasal 11 ayat (4) UU PPh jo. Pasal 6 ayat (2) PMK No. 72 Tahun 2023, Wajib Pajak di sektor perkebunan, kehutanan, dan peternakan dapat mengajukan permohonan persetujuan kepada Direktur Jenderal Pajak agar penyusutan dimulai pada bulan harta tersebut mulai menghasilkan (saat panen perdana).',
            '**Status Kasus**: Dengan disetujuinya permohonan oleh DJP, PT Argobisnis secara sah memulai perhitungan penyusutan traktor pada bulan FEBRUARI 2026.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 4: Revaluasi Tanah Industri PT Dynaplast (Slide 35)',
      prompt: 'PT Dynaplast memiliki sebidang tanah industri yang dibeli pada tahun 1980 senilai Rp15.000.000,00. Pada Tahun Pajak 2025, perusahaan mengajukan izin revaluasi ke DJP. Hasil penilaian wajar oleh KJPP yang disetujui DJP menetapkan nilai wajar tanah sebesar Rp150.000.000,00. Hitung: (1) Selisih lebih revaluasi, (2) PPh Final terutang (tarif 10%), dan (3) Nilai ekuitas revaluasi yang dicatat dalam neraca komersial.',
      blocks: [
        {
          kind: 'table',
          headers: ['Elemen Revaluasi Aktiva Tetap', 'Formula & Operasi Matematika', 'Nilai Rupiah Fiskal'],
          rows: [
            ['Nilai Pasar Wajar Appraisal KJPP', 'Ditetapkan dalam SK Persetujuan DJP', 'Rp150.000.000,00'],
            ['Nilai Sisa Buku Fiskal Semula', 'Harga perolehan tanah tahun 1980', 'Rp15.000.000,00'],
            ['Selisih Lebih Penilaian Kembali', 'Rp150.000.000,00 - Rp15.000.000,00', 'Rp135.000.000,00'],
            ['PPh Bersifat Final Terutang (10%)', '10% x Rp135.000.000,00 (Pasal 5 PMK 79/2008)', 'Rp13.500.000,00'],
            ['Selisih Bersih Ekuitas Revaluasi', 'Rp135.000.000,00 - Rp13.500.000,00', 'Rp121.500.000,00']
          ],
          caption: 'Tabel Solusi Kasus 4: Rekapitulasi pajak dan pencatatan revaluasi tanah PT Dynaplast.'
        },
        {
          kind: 'p',
          text: 'Pencatatan Neraca: Nilai tanah di neraca diperbarui menjadi Rp150.000.000,00, dan pada sisi ekuitas dibukukan akun "Selisih Lebih Penilaian Kembali Aktiva Tetap Perusahaan Tanggal 31 Desember 2025" sebesar Rp121.500.000,00.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Exam Traps & Pantangan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['Trap ID', 'Jebakan Umum Ujian', 'Perlakuan Fiskal yang Benar', 'Rujukan Yuridis'],
      rows: [
        ['ET-001', 'Menerapkan metode saldo menurun untuk menghitung penyusutan bangunan.', 'Bangunan HANYA BOLEH disusutkan metode garis lurus. Penggunaan metode saldo menurun pada bangunan dilarang keras secara yuridis.', 'Pasal 11 ayat (1) & (2) UU PPh'],
        ['ET-002', 'Mengurangkan taksiran nilai residu dari harga perolehan fiskal.', 'Ketentuan pajak TIDAK MENGENAL NILAI RESIDU (Residu = Rp0). Tarif penyusutan selalu dikalikan dari 100% harga perolehan penuh.', 'Penjelasan Pasal 11 UU PPh'],
        ['ET-003', 'Menghitung proporsi bulan awal perolehan tanpa pembulatan ke atas.', 'Jumlah bulan perolehan pada tahun pertama SELALU DIBULATKAN PENUH KE ATAS (misal perolehan tanggal 25 Juli dihitung 6 bulan).', 'Slide 9; PMK 72/2023'],
        ['ET-004', 'Mengalikan tarif saldo menurun pada tahun terakhir masa manfaat aktiva.', 'Pada tahun terakhir masa manfaat metode saldo menurun, seluruh sisa nilai buku fiskal WAJIB DISUSUTKAN SEKALIGUS hingga bernilai nol.', 'Pasal 11 ayat (2) UU PPh'],
        ['ET-005', 'Mengasumsikan revaluasi aktiva tetap boleh dilakukan setiap tahun.', 'Penilaian kembali aktiva tetap dibatasi TIDAK BOLEH DILAKUKAN KEMBALI SEBELUM LEWAT WAKTU 5 TAHUN.', 'Pasal 3 PMK 79/PMK.03/2008']
      ],
      caption: 'Tabel 4.5: Matriks jebakan ujian penyusutan dan revaluasi aktiva tetap.'
    },
    {
      kind: 'h2',
      text: 'Pohon Keputusan: Pengelompokan & Penentuan Saat Mulai Susut'
    },
    {
      kind: 'ul',
      items: [
        '**Pengelompokan & Metode**: Apakah aset berupa bangunan? Jika YA -> Wajib Garis Lurus (Permanen 20 tahun tarif 5%, Tidak Permanen 10 tahun tarif 10%). Jika BUKAN BANGUNAN -> Boleh pilih Garis Lurus atau Saldo Menurun (Kel. 1 = 4 th, Kel. 2 = 8 th, Kel. 3 = 16 th, Kel. 4 = 20 th). Jika tidak tercantum dalam lampiran PMK 72/2023 -> Otomatis masuk Kelompok 3 (16 tahun), kecuali mengajukan permohonan ke DJP.',
        '**Saat Mulai Penyusutan**: Apakah aset dibangun/dirakit sendiri yang memakan waktu (konstruksi)? Jika YA -> Dimulai pada BULAN SELESAINYA PENGERJAAN. Apakah sektor perkebunan/kehutanan yang belum menghasilkan? Jika YA dan mengantongi izin DJP -> Dimulai pada BULAN MULAI MENGHASILKAN (panen perdana). Kondisi normal pembelian aset siap pakai -> Dimulai pada BULAN PEROLEHAN (dibulatkan ke atas).'
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Intisari Ujian TM 4'
    },
    {
      kind: 'ul',
      items: [
        '**Masa Manfaat Baku Fiskal**: Bukan Bangunan (Kel. 1 = 4 th, Kel. 2 = 8 th, Kel. 3 = 16 th, Kel. 4 = 20 th). Bangunan (Permanen = 20 th, Tidak Permanen = 10 th). Bangunan dilarang saldo menurun.',
        '**Nilai Residu Nol & Pembulatan**: Pajak mengabaikan nilai residu komersial. Bulan perolehan dihitung penuh ke atas.',
        '**Saldo Menurun Tahun Terakhir**: Seluruh sisa buku fiskal wajib disusutkan sekaligus.',
        '**Ponsel & Sedan Dinas (PMK 66/2023)**: KEP-220/PJ/2002 dicabut secara formal oleh PER-8/PJ/2025. Biaya yang terbukti terkait 3M dapat dikurangkan sesuai ketentuan penyusutan; kenikmatan pada pegawai diuji terpisah.',
        '**Amortisasi Harta Tak Berwujud**: Menggunakan Kelompok 1-4 untuk hak atas tanah (HGB/HGU/HP) dan hak kekayaan intelektual.',
        '**Revaluasi PMK 79/2008**: Izin DJP, penilai publik KJPP, interval minimal 5 tahun, dikenakan PPh Final 10% atas selisih lebih nilai pasar di atas nilai sisa buku fiskal semula.'
      ]
    }
  ]
};
