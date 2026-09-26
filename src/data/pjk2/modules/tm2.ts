import type { Reading } from '../../../types';

const OVERVIEW_ASSET_INVENTORY_NPPN = {
  "heading": "PENILAIAN HARTA, PERSEDIAAN FISKAL, & NORMA PENGHITUNGAN NETO (NPPN)",
  "badge": "TM02 FISKAL",
  "cards": [
    {
      "title": "1. PENILAIAN PENGALIHAN HARTA",
      "subtitle": "Pasal 10 UU PPh & PMK 81/2024",
      "items": [
        "Jual beli bebas: Harga riil dibayar/diterima",
        "Berafiliasi / Barter: Wajib HARGA PASAR",
        "Laba barter = Harga Pasar − Nilai Sisa Buku",
        "Reorganisasi: Default nilai pasar; Nilai Buku wajib izin DJP (maks 6 bln) & uji 4 th bisnis",
        "Rugi merger dilarang transfer ke entitas baru"
      ],
      "takeaway": "Rezim Pengalihan Aktiva & Reorganisasi"
    },
    {
      "title": "2. PERSEDIAAN & HPP FISKAL",
      "subtitle": "Pasal 10 ayat (6) UU PPh",
      "items": [
        "FIFO: Barang awal keluar awal; persediaan akhir dinilai pada harga pembelian terkini",
        "AVERAGE: Rata-rata tertimbang perolehan",
        "LIFO DILARANG KERAS secara yuridis fiskal",
        "LIFO menekan laba semu saat inflasi harga",
        "Wajib asas konsisten (taat asas tahunan)"
      ],
      "takeaway": "Hanya FIFO & Average Sah Secara Fiskal"
    },
    {
      "title": "3. SKEMA OP & KOMPENSASI RUGI",
      "subtitle": "Pasal 14, 6(2), 17 & 31E UU PPh",
      "items": [
        "NPPN: Khusus WP OP omzet < Rp4,8 Miliar",
        "Wajib beritahu DJP s.d. 31 Maret (3 bulan awal)",
        "Kompensasi rugi: Maksimal 5 tahun berurutan",
        "Rugi lewat 5 tahun otomatis hangus/kadaluwarsa",
        "Tarif OP UU HPP: 5 Lapisan (5% s.d. 35%)",
        "PPh Badan: 22% (Fasilitas 31E diskon 50%)"
      ],
      "takeaway": "Kepatuhan Administrasi & Kompensasi"
    }
  ],
  "footer": "Pasal 10, 14, 6(2) UU PPh s.t.d.t.d UU HPP | PMK 81/2024 jo. PMK 01/2026 | PP 55/2022 | Larangan Mutlak LIFO"
};

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Perolehan Harta, Penilaian Persediaan, dan Norma Penghitungan Penghasilan Neto (NPPN)',
  ref: 'UU PPh Pasal 10, 14, 6(2), 17, 31E | UU No. 7/2021 HPP | PP 55/2022 | PMK 81/2024 jo. PMK 01/2026',
  intro: 'Modul TM 2 membedah arsitektur penilaian perolehan dan pengalihan harta (jual beli, barter, restrukturisasi usaha, inbreng, dan hibah), penentuan harga pokok dan penilaian persediaan fiskal (legalitas mutlak FIFO dan Average serta larangan keras LIFO), skema pajak Orang Pribadi antara Norma Penghitungan Penghasilan Neto (NPPN) vs Pembukuan, mekanisme kompensasi kerugian fiskal 5 tahun berturut-turut, struktur tarif progresif OP 5 bracket UU HPP, tarif tunggal PPh Badan 22% dengan fasilitas Pasal 31E, serta tata cara pelunasan pajak elektronik via SSP dan MPN G2.',
  objectives: [
    'Menentukan harga perolehan dan laba/rugi fiskal pengalihan harta pada transaksi jual beli bebas, afiliasi, barter, inbreng saham, dan hibah sesuai Pasal 10 UU PPh jo. PP 55/2022.',
    'Menganalisis ketentuan fasilitas nilai buku pada reorganisasi usaha (merger, konsolidasi, pemekaran) menurut PMK 81/2024 jo. PMK 01/2026, termasuk business purpose test, uji kontinuitas bisnis 4 tahun, dan larangan mutlak transfer rugi fiskal.',
    'Menghitung Beban Pokok Penjualan (HPP) dan saldo persediaan akhir menggunakan metode FIFO dan Average, serta memahami konsekuensi hukum dan koreksi fiskal atas larangan metode LIFO.',
    'Membandingkan efisiensi beban pajak Wajib Pajak Orang Pribadi antara skema Norma Penghitungan Penghasilan Neto (NPPN) vs Pembukuan beserta syarat batas waktu 3 bulan pertama.',
    'Menyusun skedul kompensasi kerugian fiskal 5 tahun berturut-turut berdasarkan Pasal 6 ayat (2) UU PPh dan mengidentifikasi sisa rugi yang kadaluwarsa (hangus).',
    'Menghitung PPh Orang Pribadi Terutang 5 lapisan tarif progresif UU HPP dan PPh Badan terutang dengan fasilitas pengurangan tarif Pasal 31E UU PPh.',
    'Menguasai administrasi pelunasan pajak menggunakan Surat Setoran Pajak (SSP), Kode Billing 15 digit, dan batas waktu penyetoran pada sistem MPN G2 / Coretax.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Arsitektur Penilaian Harta, Persediaan Fiskal, dan Norma Penghitungan Neto (NPPN).',
      overview: OVERVIEW_ASSET_INVENTORY_NPPN
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 10 UU PPh (Penilaian Harta & Persediaan)',
      text: '"Pasal 10 ayat (1): Harga perolehan atau harga penjualan dalam hal terjadi jual beli harta yang tidak dipengaruhi hubungan istimewa adalah jumlah yang sesungguhnya dikeluarkan atau diterima, sedangkan apabila terdapat hubungan istimewa adalah jumlah yang seharusnya dikeluarkan atau diterima.\n\nPasal 10 ayat (2): Nilai perolehan atau nilai penjualan dalam hal terjadi tukar-menukar harta adalah jumlah yang seharusnya dikeluarkan atau diterima berdasarkan harga pasar.\n\nPasal 10 ayat (3): Nilai perolehan atau pengalihan harta yang dialihkan dalam rangka likuidasi, penggabungan, peleburan, pemekaran, pemecahan, atau pengambilalihan usaha adalah jumlah yang seharusnya dikeluarkan atau diterima berdasarkan harga pasar, kecuali ditetapkan lain oleh Menteri Keuangan.\n\nPasal 10 ayat (6): Persediaan dan pemakaian persediaan untuk menghitung harga pokok dinilai berdasarkan harga perolehan yang dilakukan secara rata-rata (Average) atau dengan cara mendahulukan persediaan yang diperoleh pertama (FIFO). Penggunaan metode LIFO dilarang."'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '⚖️ Pembaruan Regulasi Reorganisasi Usaha: Status Dual Posisi PMK 81/2024 jo. PMK 01/2026',
      text: 'Rujukan lama dalam slide perkuliahan dosen yang mengutip PMK No. 52/PMK.010/2017 jo. PMK No. 56/PMK.010/2021 telah RESMI DICABUT terhitung sejak 1 Januari 2025 berdasarkan Pasal 483 ayat (1) angka 24 PMK No. 81 Tahun 2024.\n\nKetentuan positif yang berlaku saat ini diatur dalam Bab VII Bagian Kesatu (Pasal 392 s.d. Pasal 406) PMK No. 81 Tahun 2024 sebagaimana telah disempurnakan oleh PMK No. 01 Tahun 2026 (Perubahan Keempat). Pokok aturan: default penilaian adalah HARGA PASAR, namun Wajib Pajak dapat mengajukan izin penggunaan NILAI BUKU paling lambat 6 bulan setelah tanggal efektif restrukturisasi dengan memenuhi business purpose test, kepemilikan SKF, serta komitmen kontinuitas kegiatan usaha selama 4 (empat) tahun berturut-turut.'
    },
    {
      kind: 'h2',
      text: '1. Matriks Penilaian Pengalihan Harta (Pasal 10 UU PPh)'
    },
    {
      kind: 'p',
      text: 'Dalam sistem perpajakan Indonesia, setiap transaksi perolehan dan pengalihan aktiva wajib ditetapkan nilai dasar fiskalnya guna menentukan dasar penyusutan aktiva bagi pihak penerima serta pengakuan keuntungan atau kerugian pengalihan bagi pihak yang mengalihkan:'
    },
    {
      kind: 'table',
      headers: ['Jenis Transaksi Pengalihan', 'Dasar Penilaian Pihak Pengalih (Penjual)', 'Dasar Penilaian Pihak Penerima (Pembeli)', 'Konsekuensi Pajak Fiskal', 'Landasan Yuridis'],
      rows: [
        ['Jual Beli Pihak Bebas (Arm\'s Length)', 'Jumlah yang sesungguhnya diterima (Harga Transaksi Riil)', 'Jumlah yang sesungguhnya dibayar / dikeluarkan', 'Laba/rugi dihitung dari selisih harga riil vs nilai sisa buku.', 'Pasal 10 ayat (1) huruf a UU PPh'],
        ['Jual Beli Berafiliasi (Hubungan Istimewa)', 'Jumlah yang seharusnya diterima berdasarkan Harga Pasar Wajar', 'Jumlah yang seharusnya dikeluarkan berdasarkan Harga Pasar Wajar', 'DJP berwenang melakukan koreksi harga transfer ke nilai wajar.', 'Pasal 10 ayat (1) huruf b jo. Pasal 18 UU PPh'],
        ['Tukar Menukar Harta (Barter)', 'Jumlah seharusnya diterima berdasarkan HARGA PASAR', 'Jumlah seharusnya dikeluarkan berdasarkan HARGA PASAR', 'Selisih harga pasar dan nilai sisa buku wajib diakui sebagai laba/rugi fiskal.', 'Pasal 10 ayat (2) UU PPh'],
        ['Reorganisasi Usaha Reguler (Merger, Konsolidasi, Pemekaran)', 'Dinilai berdasarkan HARGA PASAR', 'Dicatat berdasarkan HARGA PASAR', 'Keuntungan selisih harga pasar di atas nilai buku terutang PPh badan.', 'Pasal 10 ayat (3) UU PPh; Pasal 392 (1) PMK 81/2024'],
        ['Reorganisasi Usaha Fasilitas Khusus', 'NILAI SISA BUKU (Tax-Neutral)', 'NILAI SISA BUKU pihak pengalih (melanjutkan masa manfaat)', 'Bebas PPh keuntungan pengalihan modal; wajib persetujuan DJP.', 'Pasal 392 ayat (2) s.d. 406 PMK 81/2024 jo. PMK 01/2026'],
        ['Hibah / Sumbangan Non-Objek PPh', 'NILAI SISA BUKU pihak pengalih', 'Dicatat sebesar NILAI SISA BUKU pihak pengalih', 'Bukan Objek PPh bagi penerima dan pengalih (keluarga 1 derajat / keagamaan / sosial / UMKM tanpa hubungan usaha).', 'Pasal 10 ayat (4) huruf a UU PPh jo. Pasal 7 PP 55/2022'],
        ['Hibah / Sumbangan Objek PPh', 'HARGA PASAR wajar harta', 'Dicatat sebesar HARGA PASAR wajar harta', 'Merupakan Objek PPh bagi penerima (karena ada relasi bisnis/kerja/kepemilikan).', 'Pasal 10 ayat (4) huruf b UU PPh'],
        ['Setoran Modal Berupa Harta (Inbreng Saham)', 'HARGA PASAR wajar harta yang diserahkan', 'Dicatat sebesar HARGA PASAR wajar harta', 'Menjadi dasar pencatatan modal disetor perseroan dan dasar penyusutan.', 'Pasal 10 ayat (5) UU PPh']
      ],
      caption: 'Tabel 2.1: Matriks perbandingan dasar penilaian pengalihan harta menurut Pasal 10 UU PPh.'
    },
    {
      kind: 'h2',
      text: '2. Rezim Penggunaan Nilai Buku atas Reorganisasi Usaha (PMK 81/2024 jo. PMK 01/2026)'
    },
    {
      kind: 'p',
      text: 'Penggabungan, peleburan, pemekaran, atau pengambilalihan usaha secara prinsip komersial seringkali memicu beban pajak yang sangat tinggi jika aktiva yang dialihkan dinilai dengan harga pasar. Untuk mendukung restrukturisasi korporasi nasional, Menteri Keuangan memberikan fasilitas penggunaan Nilai Buku dengan syarat ketat:'
    },
    {
      kind: 'ul',
      items: [
        '**Wajib Persetujuan Direktur Jenderal Pajak**: Fasilitas tidak berlaku serta-merta. Wajib Pajak harus mengajukan permohonan tertulis paling lambat 6 (enam) bulan setelah tanggal efektif restrukturisasi usaha secara hukum (Pasal 393 ayat 1 huruf a PMK 81/2024).',
        '**Business Purpose Test (Uji Tujuan Bisnis)**: Wajib membuktikan bahwa restrukturisasi didasarkan pada motif ekonomi dan efisiensi operasional jangka panjang, bukan semata-mata skema penghindaran pajak (tax avoidance) (Pasal 393 ayat 1 huruf b).',
        '**Kontinuitas Kegiatan Usaha Selama 4 Tahun**: Berdasarkan Pasal 393 ayat (2) huruf c dan d PMK 81/2024 sebagaimana disempurnakan oleh PMK 01/2026, entitas penerima wajib menjamin kegiatan usaha pihak yang mengalihkan tetap berlangsung secara aktif paling singkat selama 4 (empat) tahun berturut-turut.',
        '**Penyusutan Melanjutkan Sisa Masa Manfaat**: Pihak penerima membukukan aktiva sebesar nilai sisa buku fiskal pihak pengalih dan melanjutkan sisa masa manfaat yang belum terserap (Pasal 403 ayat 3).',
        '**Larangan Mutlak Pengalihan Kerugian Fiskal**: Sesuai Pasal 402 ayat (1) PMK 81/2024, kerugian fiskal dari Wajib Pajak yang mengalihkan harta DILARANG DIKOMPENSASIKAN / DIALIHKAN kepada Wajib Pajak yang menerima pengalihan harta.',
        '**Larangan Menjual Aktiva Tetap Minimal 2 Tahun**: Seluruh aktiva tetap yang dialihkan dengan nilai buku dilarang dipindahtangankan paling singkat selama 2 (dua) tahun terhitung sejak restrukturisasi (Pasal 396 PMK 81/2024).',
        '**Kewajiban IPO Pemekaran Usaha**: Wajib Pajak hasil pemekaran usaha (spin-off) yang memperoleh izin nilai buku wajib efektif melaksanakan Initial Public Offering (IPO) di Bursa Efek Indonesia paling lambat dalam waktu 2 (dua) tahun (Pasal 398 PMK 81/2024).',
        '**Sanksi Gugur & Rekomputasi Nilai Pasar**: Apabila komitmen pasca-izin dilanggar, persetujuan nilai buku batal demi hukum dan transaksi dihitung kembali berdasarkan HARGA PASAR serta dikenakan sanksi bunga administrasi (Pasal 405 PMK 81/2024).'
      ]
    },
    {
      kind: 'h2',
      text: '3. Penilaian Persediaan Fiskal: FIFO, Average, & Larangan LIFO'
    },
    {
      kind: 'p',
      text: 'Pasal 10 ayat (6) UU PPh mengatur penilaian persediaan barang dagangan dan bahan baku untuk menghitung Beban Pokok Penjualan (HPP). Secara fiskal, hanya diakui dua metode penilaian yang wajib diterapkan secara taat asas:'
    },
    {
      kind: 'table',
      headers: ['Metode Penilaian', 'Mekanisme Pembebanan HPP', 'Valuasi Persediaan Akhir', 'Status Legalitas Fiskal'],
      rows: [
        ['FIFO (First-In, First-Out)', 'Mengasumsikan barang yang dibeli pertama adalah yang dijual pertama kali.', 'Dinilai berdasarkan harga perolehan pembelian terkini (paling baru).', 'SAH & DIIZINKAN (Pasal 10 ayat 6 UU PPh). Pada masa inflasi harga, menghasilkan laba kena pajak lebih tinggi.'],
        ['Average (Rata-Rata Tertimbang)', 'Menghitung rata-rata biaya perolehan atas seluruh Barang Tersedia Untuk Dijual (BTUD).', 'Dinilai seragam berdasarkan rata-rata tertimbang per unit.', 'SAH & DIIZINKAN (Pasal 10 ayat 6 UU PPh). Menghaluskan lonjakan fluktuasi harga bahan baku.'],
        ['LIFO (Last-In, First-Out)', 'Mengasumsikan barang terakhir dibeli adalah yang pertama kali dikeluarkan.', 'Dinilai berdasarkan harga perolehan masa lampau.', 'DILARANG KERAS SECARA FISKAL. LIFO memperkecil laba kena pajak secara semu saat inflasi dan ditolak pula dalam PSAK/IFRS.']
      ],
      caption: 'Tabel 2.2: Perbandingan metode penilaian persediaan fiskal menurut UU PPh.'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: '⚠️ Konsekuensi Koreksi Fiskal atas LIFO Komersial',
      text: 'Apabila perusahaan menggunakan metode LIFO dalam pembukuan komersialnya (misal induk perusahaan tunduk pada standar US GAAP tertentu), maka dalam SPT Tahunan PPh Badan WAJIB DILAKUKAN KOREKSI FISKAL POSITIF/NEGATIF untuk mengembalikan perhitungan HPP dan persediaan akhir ke metode FIFO atau Average yang disetujui DJP. Jika tidak dikoreksi, pemeriksa pajak akan melakukan koreksi jabatan yang berakibat pada SKPKB dan sanksi bunga.'
    },
    {
      kind: 'h2',
      text: '4. Norma Penghitungan Penghasilan Neto (NPPN) vs Pembukuan (Pasal 14 UU PPh)'
    },
    {
      kind: 'p',
      text: 'Wajib Pajak Orang Pribadi yang melakukan kegiatan usaha atau pekerjaan bebas diberikan opsi menyelenggarakan pencatatan sederhana dan menghitung penghasilan neto menggunakan norma persentase, dengan ketentuan sebagai berikut:'
    },
    {
      kind: 'ul',
      items: [
        '**Subjek Berhak**: Hanya Wajib Pajak ORANG PRIBADI. Wajib Pajak Badan dilarang mutlak menggunakan norma dan wajib menyelenggarakan pembukuan lengkap.',
        '**Batas Ambang Omzet**: Peredaran bruto (omzet) dari seluruh kegiatan usaha dan pekerjaan bebas dalam satu Tahun Pajak tidak melebihi Rp4.800.000.000,00 (empat miliar delapan ratus juta rupiah).',
        '**Tenggat Waktu Pemberitahuan**: Wajib menyampaikan surat pemberitahuan tertulis penggunaan NPPN kepada Direktur Jenderal Pajak dalam jangka waktu 3 (tiga) bulan pertama sejak awal Tahun Pajak (paling lambat tanggal 31 Maret) (Pasal 448 PMK 81/2024).',
        '**Default Rule (Konsekuensi Kelalaian)**: Wajib Pajak yang tidak menyampaikan pemberitahuan atau terlambat menyampaikan setelah lewat 3 bulan pertama DIANGGAP MEMILIH PEMBUKUAN.',
        '**Kewajiban Pencatatan**: Meskipun dibebaskan dari pembukuan neraca dan laba rugi, pengguna norma tetap wajib menyelenggarakan pencatatan teratur atas peredaran bruto dan penerimaan penghasilan bruto lainnya.'
      ]
    },
    {
      kind: 'callout',
      variant: 'tip',
      title: '📌 Catatan Ruang Lingkup Dokumen (Source Limitation SL-PJK-01)',
      text: 'Daftar ribuan persentase tarif KBLI Norma Penghitungan Penghasilan Neto menurut PER-17/PJ/2015 bervariasi menurut wilayah (10 Ibukota Provinsi, Ibukota Provinsi Lainnya, dan Daerah Lainnya). Dalam kurikulum PJK301, fokus pengujian ditekankan pada syarat ambang batas Rp4,8 Miliar, batas waktu 3 bulan pertama, serta komparasi matematis beban pajak Norma vs Pembukuan (seperti tarif norma profesi pengacara 51% di Surabaya).'
    },
    {
      kind: 'h2',
      text: '5. Kompensasi Kerugian Fiskal 5 Tahun Berturut-turut (Pasal 6 ayat 2 UU PPh)'
    },
    {
      kind: 'p',
      text: 'Apabila penghasilan bruto setelah dikurangi biaya 3M menghasilkan kerugian fiskal, kerugian tersebut dapat dikompensasikan dengan penghasilan neto fiskal tahun-tahun pajak berikutnya dengan prinsip-prinsip hukum berikut:'
    },
    {
      kind: 'ul',
      items: [
        '**Syarat Penyelenggaraan Pembukuan**: Kompensasi rugi fiskal hanya dapat dimanfaatkan oleh Wajib Pajak yang menyelenggarakan pembukuan. Pengguna norma pencatatan tidak dapat mengompensasikan kerugian.',
        '**Jangka Waktu Maksimal 5 Tahun**: Kerugian fiskal dikompensasikan dengan penghasilan neto mulai Tahun Pajak berikutnya berturut-turut sampai dengan paling lama 5 (lima) tahun.',
        '**Prinsip FIFO Kompensasi**: Jika terdapat beberapa kerugian dari tahun berbeda, kompensasi diprioritaskan menghabiskan kerugian yang muncul lebih awal.',
        '**Kadaluwarsa / Hangus**: Sisa kerugian yang belum habis diserap pada akhir tahun kelima dinyatakan kadaluwarsa (hangus) dan dilarang dikompensasikan pada tahun keenam atau seterusnya.'
      ]
    },
    {
      kind: 'h2',
      text: '6. Tarif Progresif Orang Pribadi, PPh Badan 22%, & Fasilitas Pasal 31E'
    },
    {
      kind: 'table',
      headers: ['Subjek Pajak', 'Lapisan Penghasilan Kena Pajak (PKP)', 'Tarif Pajak Berlaku', 'Dasar Regulasi'],
      rows: [
        ['WP Orang Pribadi', 'Rp0 s.d. Rp60.000.000', '5%', 'Pasal 17 ayat (1) huruf a UU No. 7/2021 HPP'],
        ['WP Orang Pribadi', '> Rp60.000.000 s.d. Rp250.000.000', '15%', 'Pasal 17 ayat (1) huruf a UU No. 7/2021 HPP'],
        ['WP Orang Pribadi', '> Rp250.000.000 s.d. Rp500.000.000', '25%', 'Pasal 17 ayat (1) huruf a UU No. 7/2021 HPP'],
        ['WP Orang Pribadi', '> Rp500.000.000 s.d. Rp5.000.000.000', '30%', 'Pasal 17 ayat (1) huruf a UU No. 7/2021 HPP'],
        ['WP Orang Pribadi', 'Di atas Rp5.000.000.000 (lima miliar rupiah)', '35%', 'Pasal 17 ayat (1) huruf a UU No. 7/2021 HPP'],
        ['WP Badan Reguler', 'Seluruh Penghasilan Kena Pajak (Flat)', '22%', 'Pasal 17 ayat (1) huruf b UU HPP (berlaku sejak 2022)'],
        ['WP Badan Terbuka (Tbk)', 'Seluruh PKP (Saham publik min 40% & penuhi syarat)', '19% (Diskon 3% dari tarif 22%)', 'Pasal 17 ayat (2b) UU HPP'],
        ['WP Badan Fasilitas 31E (Omzet s.d. Rp4,8 Miliar)', 'Seluruh PKP mendapat diskon tarif 50%', '11% (50% x 22%)', 'Pasal 31E ayat (1) UU PPh'],
        ['WP Badan Fasilitas 31E (Omzet > Rp4,8 Miliar s.d. Rp50 Miliar)', 'PKP Proporsional Fasilitas vs Non-Fasilitas', '11% atas PKP Fasilitas + 22% atas PKP Sisa', 'Pasal 31E ayat (1) UU PPh']
      ],
      caption: 'Tabel 2.3: Ringkasan struktur tarif PPh Orang Pribadi dan Badan pasca UU HPP.'
    },
    {
      kind: 'h2',
      text: '7. Sistem Pembayaran & Pelunasan Pajak Elektronik: SSP, Billing, & MPN G2'
    },
    {
      kind: 'p',
      text: 'Pelunasan kewajiban PPh terutang (baik angsuran bulanan PPh 25, pemotongan pihak ketiga, maupun PPh 29 kurang bayar tahunan) diadministrasikan secara digital melalui ekosistem perbendaharaan negara:'
    },
    {
      kind: 'ul',
      items: [
        '**Surat Setoran Pajak (SSP)**: Bukti pembayaran atau penyetoran pajak yang telah dilakukan dengan menggunakan formulir atau telah dilakukan dengan sarana lain ke kas negara melalui tempat pembayaran yang ditunjuk oleh Menteri Keuangan.',
        '**Kode Billing 15 Digit**: Kode identifikasi yang diterbitkan oleh sistem billing DJP atas jenis pembayaran atau setoran pajak tertentu. Kode billing memiliki masa aktif tertentu (umumnya 7 s.d. 30 hari tergantung jenis setoran).',
        '**Modul Penerimaan Negara Generasi Kedua (MPN G2) / Coretax**: Jaringan perbankan persepsi, kantor pos, ATM, internet banking, EDC, dan fintech yang terhubung langsung ke kas negara untuk memvalidasi Nomor Transaksi Penerimaan Negara (NTPN).',
        '**Kekuatan NTPN**: Bukti Penerimaan Negara (BPN) yang memuat NTPN dan Nomor Transaksi Bank (NTB) dipersamakan dengan SSP yang sah secara hukum perpajakan.'
      ]
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penilaian Harta, Persediaan, & Tarif'
    },
    {
      kind: 'formula',
      text: `\\text{Laba/Rugi Fiskal Barter} = \\text{Harga Pasar Harta Diserahkan} - \\text{Nilai Sisa Buku Harta Diserahkan}
HPP_{FIFO} = \\sum_{i} (\\text{Kuantitas Unit Terjual Lapisan}_i \\times \\text{Harga Pokok Unit Lapisan}_i)
\\text{Biaya Rata-Rata per Unit} = \\frac{\\text{Total Biaya BTUD}}{\\text{Total Kuantitas Unit BTUD}}
\\text{Penghasilan Neto}_{NPPN} = \\text{Peredaran Bruto} \\times \\%\\ \\text{Tarif Norma}
PPh_{OP} = \\sum_{k=1}^{5} (PKP_k \\times \\text{Tarif Progresif}_k)
PKP_{\\text{fasilitas (31E)}} = \\frac{\\text{Rp4.800.000.000}}{\\text{Peredaran Bruto}} \\times PKP \\quad (\\text{untuk omzet } > \\text{Rp4,8 Miliar s.d. Rp50 Miliar})
PPh_{\\text{Badan 31E}} = (11\\% \\times PKP_{\\text{fasilitas}}) + [22\\% \\times (PKP - PKP_{\\text{fasilitas}})]`,
      note: 'Dilarang menggunakan metode persediaan LIFO secara fiskal. Pada fasilitas Pasal 31E, jika omzet tidak melebihi Rp4,8 Miliar, maka seluruh PKP langsung dikalikan tarif 11% (diskon 50% dari tarif normal 22%).'
    },
    {
      kind: 'h2',
      text: 'Praktik Terbimbing Komprehensif (7 Studi Kasus Terverifikasi)'
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 1: Barter Aktiva Tetap Antara PT A dan PT B (Pasal 10 ayat 2 UU PPh)',
      prompt: 'PT A dan PT B bersepakat melakukan pertukaran (barter) aktiva tetap. PT A menyerahkan Harta X dengan Nilai Sisa Buku Rp10.000.000 dan Nilai Pasar Rp20.000.000. Sebagai gantinya, PT B menyerahkan Harta Y dengan Nilai Sisa Buku Rp12.000.000 dan Nilai Pasar Rp20.000.000. Tentukan: (1) Keuntungan/kerugian pengalihan fiskal bagi PT A dan PT B, serta (2) Nilai perolehan aktiva baru yang dicatat oleh masing-masing pihak.',
      blocks: [
        {
          kind: 'table',
          headers: ['Langkah Analisis Fiskal', 'Pihak PT A (Penyerah Harta X)', 'Pihak PT B (Penyerah Harta Y)', 'Dasar Regulasi'],
          rows: [
            ['Nilai Pengalihan Diakui (Harga Pasar)', 'Rp20.000.000', 'Rp20.000.000', 'Pasal 10 ayat (2) UU PPh'],
            ['Nilai Sisa Buku Harta yang Diserahkan', '(Rp10.000.000)', '(Rp12.000.000)', 'Buku Besar Fiskal'],
            ['Keuntungan Pengalihan Harta (Objek PPh)', 'Rp10.000.000', 'Rp8.000.000', 'Pasal 4 ayat (1) huruf d UU PPh'],
            ['Dasar Pencatatan Harta Baru Diterima', 'Rp20.000.000 (Harta Y)', 'Rp20.000.000 (Harta X)', 'Harga Pasar Pengalihan']
          ],
          caption: 'Tabel Solusi Kasus 1: Rekapitulasi barter aktiva tetap PT A dan PT B.'
        },
        {
          kind: 'ul',
          items: [
            '**Pihak PT A**: Mengakui keuntungan pengalihan harta kena pajak sebesar Rp10.000.000 (Rp20 Juta - Rp10 Juta) dan mencatat Harta Y sebesar Rp20.000.000 sebagai dasar penyusutan baru.',
            '**Pihak PT B**: Mengakui keuntungan pengalihan harta kena pajak sebesar Rp8.000.000 (Rp20 Juta - Rp12 Juta) dan mencatat Harta X sebesar Rp20.000.000 sebagai dasar penyusutan baru.',
            '**Kesalahan Fatal Ujian**: Mencatat perolehan sebesar nilai buku lama (Rp10 Juta atau Rp12 Juta) tanpa mengakui keuntungan fiskal. Barter wajib dinilai pada HARGA PASAR.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 2: Penilaian Persediaan & HPP Metode FIFO (Januari 2026)',
      prompt: 'Sebuah perusahaan dagang mencatat mutasi barang dagangan selama Januari 2026:\n- 01/01: Saldo Awal 1.000 unit @ Rp4.000 = Rp4.000.000\n- 02/01: Pembelian 1.500 unit @ Rp5.000 = Rp7.500.000\n- 10/01: Penjualan 2.200 unit\n- 11/01: Pembelian 1.000 unit @ Rp5.500 = Rp5.500.000\n- 19/01: Pembelian 1.300 unit @ Rp4.500 = Rp5.850.000\n- 21/01: Penjualan 750 unit\nTotal Barang Tersedia Untuk Dijual (BTUD) = 4.800 unit senilai Rp22.850.000. Total unit terjual = 2.950 unit. Sisa persediaan akhir = 1.850 unit. Hitung HPP fiskal dan nilai persediaan akhir dengan metode FIFO.',
      blocks: [
        {
          kind: 'table',
          headers: ['Lapisan Alokasi FIFO', 'Kuantitas Unit', 'Harga Pokok per Unit', 'Jumlah Nilai Rupiah', 'Klasifikasi Fiskal'],
          rows: [
            ['Lapisan 1: Saldo Awal 01/01', '1.000 unit', 'Rp4.000', 'Rp4.000.000', 'Beban Pokok Penjualan (HPP)'],
            ['Lapisan 2: Pembelian 02/01', '1.500 unit', 'Rp5.000', 'Rp7.500.000', 'Beban Pokok Penjualan (HPP)'],
            ['Lapisan 3 (Sebagian): Pembelian 11/01', '450 unit', 'Rp5.500', 'Rp2.475.000', 'Beban Pokok Penjualan (HPP)'],
            ['Total HPP FIFO (Terjual)', '2.950 unit', '—', 'Rp13.975.000', 'Deductible Expense (Pasal 6 UU PPh)'],
            ['Lapisan 3 (Sisa): Pembelian 11/01', '550 unit', 'Rp5.500', 'Rp3.025.000', 'Persediaan Akhir Neraca'],
            ['Lapisan 4: Pembelian 19/01', '1.300 unit', 'Rp4.500', 'Rp5.850.000', 'Persediaan Akhir Neraca'],
            ['Total Persediaan Akhir FIFO', '1.850 unit', '—', 'Rp8.875.000', 'Aktiva Lancar di Neraca Fiskal']
          ],
          caption: 'Tabel Solusi Kasus 2: Alokasi HPP dan Persediaan Akhir metode FIFO.'
        },
        {
          kind: 'p',
          text: 'Rekonsiliasi Integritas: HPP (Rp13.975.000) + Persediaan Akhir (Rp8.875.000) = Rp22.850.000 (100% klop dengan total biaya BTUD).'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 3: Penilaian Persediaan & HPP Metode Average (Januari 2026)',
      prompt: 'Berdasarkan data transaksi persediaan pada Studi Kasus 2 (Total BTUD 4.800 unit senilai Rp22.850.000; unit terjual 2.950 unit; sisa 1.850 unit), hitung: (1) Biaya rata-rata tertimbang per unit, (2) HPP Average, dan (3) Nilai persediaan akhir Average.',
      blocks: [
        {
          kind: 'table',
          headers: ['Tahapan Perhitungan', 'Formula & Operasi Angka', 'Hasil Perhitungan Fiskal'],
          rows: [
            ['Biaya Rata-Rata per Unit', 'Rp22.850.000 / 4.800 unit', 'Rp4.760,4167 per unit'],
            ['HPP Fiskal (2.950 unit terjual)', '2.950 unit x Rp4.760,4167', 'Rp14.043.229,17'],
            ['Persediaan Akhir (1.850 unit)', '1.850 unit x Rp4.760,4167', 'Rp8.806.770,83'],
            ['Uji Keseimbangan', 'Rp14.043.229,17 + Rp8.806.770,83', 'Rp22.850.000,00 (KLOP)']
          ],
          caption: 'Tabel Solusi Kasus 3: Perhitungan persediaan dengan metode rata-rata tertimbang.'
        },
        {
          kind: 'ul',
          items: [
            '**Komparasi HPP**: HPP Average (Rp14.043.229,17) lebih besar dibanding HPP FIFO (Rp13.975.000).',
            '**Implikasi Fiskal**: Saat harga perolehan sedang tren meningkat, metode Average menghasilkan beban pokok lebih tinggi sehingga laba kena pajak lebih moderat dibanding FIFO.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 4: Komparasi Pajak Tuan Idris (K/2) Pengacara di Surabaya: NPPN vs Pembukuan',
      prompt: 'Tuan Idris adalah pengacara berstatus kawin dengan 2 anak tanggungan (K/2) di Surabaya. Pada Tahun Pajak 2025, peredaran bruto dari jasa hukum adalah Rp2.000.000.000,00 dan total biaya operasional kantor riil adalah Rp1.100.000.000,00. Persentase Norma Penghitungan Penghasilan Neto (NPPN) untuk profesi pengacara di Surabaya adalah 51%. Tuan Idris telah memberitahukan penggunaan norma pada 20 Februari 2025. Bandingkan PPh terutang antara Skema NPPN vs Skema Pembukuan.',
      blocks: [
        {
          kind: 'table',
          headers: ['Elemen Penghitungan Pajak', 'Skema A: NPPN (Pencatatan)', 'Skema B: Pembukuan Lengkap', 'Keterangan Komparatif'],
          rows: [
            ['Peredaran Bruto (Omzet Jasa)', 'Rp2.000.000.000', 'Rp2.000.000.000', 'Arus kas bruto yang sama'],
            ['Biaya Operasional Diperhitungkan', 'Diabaikan (Terserap di norma)', '(Rp1.100.000.000)', 'Biaya riil 55% dari omzet'],
            ['Penghasilan Neto', 'Rp1.020.000.000 (51% x Rp2 M)', 'Rp900.000.000 (Omzet - Biaya)', 'Neto pembukuan lebih rendah Rp120 Juta'],
            ['PTKP K/2 (Diri 54 Juta + Kawin 4,5 Juta + 2 Anak 9 Juta)', '(Rp67.500.000)', '(Rp67.500.000)', 'Pasal 7 UU PPh jo. PMK 101/2016'],
            ['Penghasilan Kena Pajak (PKP)', 'Rp952.500.000', 'Rp832.500.000', 'Dasar penerapan tarif Pasal 17'],
            ['Lapisan 1: 5% x Rp60.000.000', 'Rp3.000.000', 'Rp3.000.000', 'Maksimal Rp60 Juta'],
            ['Lapisan 2: 15% x Rp190.000.000', 'Rp28.500.000', 'Rp28.500.000', 'Antara Rp60 Juta s.d. Rp250 Juta'],
            ['Lapisan 3: 25% x Rp250.000.000', 'Rp62.500.000', 'Rp62.500.000', 'Antara Rp250 Juta s.d. Rp500 Juta'],
            ['Lapisan 4: 30% x Sisa PKP', 'Rp135.750.000 (30% x 452,5 Jt)', 'Rp99.750.000 (30% x 332,5 Jt)', 'Sisa PKP di atas Rp500 Juta'],
            ['Total PPh Terutang Tahunan', 'Rp229.750.000', 'Rp193.750.000', 'PPh Terutang Orang Pribadi'],
            ['Efisiensi / Penghematan Pajak', '—', 'Rp36.000.000 LEBIH HEMAT', 'Selisih beban riil']
          ],
          caption: 'Tabel Solusi Kasus 4: Komparasi PPh terutang Tuan Idris (K/2) skema NPPN vs Pembukuan.'
        },
        {
          kind: 'p',
          text: 'Kesimpulan Strategis: Karena rasio biaya riil Tuan Idris (55%) lebih tinggi daripada persentase pengurang normatif (100% - 51% = 49%), maka memilih PEMBUKUAN menghemat pajak sebesar Rp36.000.000,00 per tahun.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 5: Skedul Kompensasi Kerugian Fiskal Pak Arjuna (2020–2025)',
      prompt: 'Pak Arjuna menyelenggarakan pembukuan atas usahanya. Catatan laba/(rugi) fiskal selama 2020 s.d. 2025 adalah:\n- 2020: Rugi Fiskal (Rp1.200.000.000)\n- 2021: Laba Fiskal Rp200.000.000\n- 2022: Rugi Fiskal (Rp300.000.000)\n- 2023: Nihil (Rp0)\n- 2024: Laba Fiskal Rp100.000.000\n- 2025: Laba Fiskal Rp800.000.000\nSusun skedul pelacakan kompensasi rugi fiskal 5 tahun berturut-turut sesuai Pasal 6 ayat (2) UU PPh dan tentukan status rugi pada akhir Tahun Pajak 2025.',
      blocks: [
        {
          kind: 'table',
          headers: ['Tahun Pajak', 'Laba / (Rugi) Fiskal', 'Kompensasi Rugi 2020', 'Sisa Saldo Rugi 2020', 'Kompensasi Rugi 2022', 'Sisa Saldo Rugi 2022', 'Status Hukum Kompensasi'],
          rows: [
            ['2020', '(Rp1.200.000.000)', '—', 'Rp1.200.000.000', '—', '—', 'Tahun terjadinya rugi fiskal pertama'],
            ['2021', 'Rp200.000.000', '(Rp200.000.000)', 'Rp1.000.000.000', '—', '—', 'Tahun ke-1 kompensasi rugi 2020'],
            ['2022', '(Rp300.000.000)', 'Rp0 (Rugi)', 'Rp1.000.000.000', '—', 'Rp300.000.000', 'Tahun ke-2 kompensasi; Terjadi rugi baru 2022'],
            ['2023', 'Rp0 (Nihil)', 'Rp0', 'Rp1.000.000.000', 'Rp0', 'Rp300.000.000', 'Tahun ke-3 kompensasi rugi 2020'],
            ['2024', 'Rp100.000.000', '(Rp100.000.000)', 'Rp900.000.000', 'Rp0', 'Rp300.000.000', 'Tahun ke-4 kompensasi rugi 2020'],
            ['2025', 'Rp800.000.000', '(Rp800.000.000)', 'Rp100.000.000', 'Rp0', 'Rp300.000.000', 'Tahun ke-5 (BATAS AKHIR RUGI 2020)']
          ],
          caption: 'Tabel Solusi Kasus 5: Skedul pelacakan kompensasi kerugian fiskal Pak Arjuna.'
        },
        {
          kind: 'ul',
          items: [
            '**Status Akhir Rugi 2020**: Sisa saldo rugi 2020 sebesar Rp100.000.000,00 dinyatakan HANGUS / KADALUWARSA per 31 Desember 2025 karena telah melewati batas 5 tahun berturut-turut (2021 s.d. 2025). Dilarang dikompensasikan ke tahun 2026.',
            '**Status Akhir Rugi 2022**: Rugi 2022 sebesar Rp300.000.000,00 belum terserap dan masih aktif. Jangka waktu 5 tahunnya berjalan dari 2023 s.d. 2027, sehingga masih dapat dikompensasikan penuh pada Tahun Pajak 2026 dan 2027.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 6: Rekomputasi PPh Orang Pribadi PKP Rp600 Juta UU HPP vs UU Lama',
      prompt: 'Wajib Pajak Orang Pribadi memiliki Penghasilan Kena Pajak (PKP) sebesar Rp600.000.000,00 pada Tahun Pajak 2025. Hitung PPh Terutang berdasarkan tarif progresif Pasal 17 UU No. 7/2021 HPP dan bandingkan dengan ketentuan tarif lama UU No. 36/2008.',
      blocks: [
        {
          kind: 'table',
          headers: ['Lapisan Tarif', 'PKP UU HPP', 'Tarif HPP', 'PPh UU HPP', 'PKP Tarif Lama', 'Tarif Lama', 'PPh Tarif Lama'],
          rows: [
            ['Lapisan 1', 'Rp60.000.000', '5%', 'Rp3.000.000', 'Rp50.000.000', '5%', 'Rp2.500.000'],
            ['Lapisan 2', 'Rp190.000.000', '15%', 'Rp28.500.000', 'Rp200.000.000', '15%', 'Rp30.000.000'],
            ['Lapisan 3', 'Rp250.000.000', '25%', 'Rp62.500.000', 'Rp250.000.000', '25%', 'Rp62.500.000'],
            ['Lapisan 4', 'Rp100.000.000', '30%', 'Rp30.000.000', 'Rp100.000.000', '30%', 'Rp30.000.000'],
            ['Total PKP / PPh', 'Rp600.000.000', '—', 'Rp124.000.000', 'Rp600.000.000', '—', 'Rp125.000.000']
          ],
          caption: 'Tabel Solusi Kasus 6: Perbandingan perhitungan PPh OP PKP Rp600 Juta.'
        },
        {
          kind: 'ul',
          items: [
            '**Penghematan Pajak**: UU HPP memberikan penghematan sebesar Rp1.000.000,00 (Rp124 Juta vs Rp125 Juta) akibat pelebaran bracket lapisan pertama dari Rp50 Juta menjadi Rp60 Juta.',
            '**Koreksi Nomenklatur Dosen**: Dalam materi slide dosen tertulis label "Rp 124.000.000 PPh Pasal 21". Secara yuridis, sebutan yang tepat adalah PPh Orang Pribadi Terutang Tahunan (Pasal 17 ayat 1 huruf a UU PPh), karena PPh 21 adalah mekanisme pemotongan bulanan.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 7: Fasilitas Pengurangan Tarif PPh Badan Pasal 31E UU PPh',
      prompt: 'PT Cemerlang Mandiri adalah Wajib Pajak Badan dalam negeri dengan peredaran bruto Tahun Pajak 2025 sebesar Rp12.000.000.000,00 dan Penghasilan Kena Pajak (PKP) sebesar Rp1.000.000.000,00. Hitung PPh Badan terutang dengan fasilitas Pasal 31E UU PPh.',
      blocks: [
        {
          kind: 'table',
          headers: ['Tahapan Perhitungan', 'Formula & Operasi Matematika', 'Hasil Nilai Rupiah'],
          rows: [
            ['Peredaran Bruto Total', 'Diverifikasi berada di antara Rp4,8 Miliar s.d. Rp50 Miliar', 'Rp12.000.000.000'],
            ['PKP Total', 'Dasar pengenaan pajak badan usaha', 'Rp1.000.000.000'],
            ['Bagian PKP Fasilitas', '(Rp4.800.000.000 / Rp12.000.000.000) x Rp1.000.000.000', 'Rp400.000.000'],
            ['Bagian PKP Non-Fasilitas', 'Rp1.000.000.000 - Rp400.000.000', 'Rp600.000.000'],
            ['PPh atas Bagian Fasilitas', '50% x 22% x Rp400.000.000 (atau 11% x Rp400.000.000)', 'Rp44.000.000'],
            ['PPh atas Bagian Non-Fasilitas', '22% x Rp600.000.000', 'Rp132.000.000'],
            ['Total PPh Badan Terutang', 'Rp44.000.000 + Rp132.000.000', 'Rp176.000.000']
          ],
          caption: 'Tabel Solusi Kasus 7: Perhitungan PPh Badan dengan Fasilitas Pasal 31E.'
        },
        {
          kind: 'p',
          text: 'Tanpa fasilitas Pasal 31E, PPh terutang normal adalah 22% x Rp1 Miliar = Rp220.000.000,00. Fasilitas Pasal 31E memberikan penghematan pajak sebesar Rp44.000.000,00 bagi PT Cemerlang Mandiri.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Exam Traps & Pantangan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['Trap ID', 'Jebakan Umum Ujian', 'Perlakuan Fiskal yang Benar', 'Rujukan Yuridis'],
      rows: [
        ['ET-001', 'Mencatat transaksi barter sebesar nilai sisa buku tanpa mengakui keuntungan fiskal.', 'Transaksi barter WAJIB dicatat berdasarkan HARGA PASAR. Selisih harga pasar dan nilai sisa buku adalah laba fiskal kena PPh.', 'Pasal 10 ayat (2) UU PPh'],
        ['ET-002', 'Menganggap merger langsung otomatis boleh dibukukan dengan Nilai Buku tanpa persetujuan.', 'Default restrukturisasi adalah HARGA PASAR. Nilai buku wajib mengajukan permohonan izin ke DJP (maks 6 bulan) dan lolos business purpose test.', 'Pasal 392 & 393 PMK 81/2024'],
        ['ET-003', 'Mengompensasikan kerugian fiskal PT yang bubar/merger ke entitas penerima harta nilai buku.', 'Pasal 402 ayat (1) PMK 81/2024 MELARANG MUTLAK pengalihan/kompensasi rugi fiskal pihak pengalih oleh pihak penerima.', 'Pasal 402 ayat (1) PMK 81/2024'],
        ['ET-004', 'Menggunakan metode LIFO untuk menghitung persediaan dan Beban Pokok Penjualan fiskal.', 'Metode LIFO DILARANG KERAS secara fiskal di Indonesia. Wajib dikoreksi fiskal ke metode FIFO atau Average.', 'Pasal 10 ayat (6) UU PPh'],
        ['ET-005', 'Menghitung NPPN padahal tidak menyampaikan surat pemberitahuan dalam 3 bulan pertama.', 'Jika tidak lapor atau terlambat lapor setelah 31 Maret, Wajib Pajak otomatis DIANGGAP MEMILIH PEMBUKUAN.', 'Pasal 14 (2) UU PPh; Pasal 448 PMK 81/2024'],
        ['ET-006', 'Melakukan kompensasi sisa rugi fiskal pada tahun ke-6.', 'Kompensasi rugi fiskal dibatasi MAKSIMAL 5 TAHUN berturut-turut. Sisa rugi pada akhir tahun ke-5 langsung HANGUS.', 'Pasal 6 ayat (2) UU PPh'],
        ['ET-007', 'Menyebut hasil perhitungan tarif Pasal 17 pada PKP tahunan Wajib Pajak Orang Pribadi sebagai "PPh 21".', 'Hasil perhitungan adalah PPh Terutang Wajib Pajak Orang Pribadi Tahunan, bukan pemotongan PPh 21 bulanan pegawai.', 'Pasal 17 ayat (1) huruf a UU HPP']
      ],
      caption: 'Tabel 2.4: Matriks jebakan ujian dan analisis perlakuan fiskal yang benar.'
    },
    {
      kind: 'h2',
      text: 'Pohon Keputusan Penilaian Pengalihan Harta (Pasal 10 UU PPh)'
    },
    {
      kind: 'ul',
      items: [
        '**1. Transaksi Jual Beli**: Periksa apakah ada hubungan istimewa? Jika TIDAK ADA, gunakan harga sesungguhnya diterima/dibayar (Pasal 10 ayat 1 huruf a). Jika ADA, koreksi ke HARGA PASAR wajar (Pasal 10 ayat 1 huruf b).',
        '**2. Transaksi Barter**: Selalu dinilai berdasarkan HARGA PASAR wajar (Pasal 10 ayat 2). Laba/rugi fiskal diakui dari selisih harga pasar vs nilai sisa buku.',
        '**3. Transaksi Reorganisasi Usaha**: Default dinilai dengan HARGA PASAR. Jika Wajib Pajak mengantongi persetujuan tertulis DJP (maks 6 bulan, business purpose test, kontinuitas usaha 4 tahun), boleh menggunakan NILAI SISA BUKU (Pasal 10 ayat 3 jo. PMK 81/2024 jo. PMK 01/2026).',
        '**4. Transaksi Hibah / Sumbangan**: Apakah memenuhi syarat Pasal 4 ayat (3) UU PPh jo. Pasal 7 PP 55/2022 (keluarga sedarah satu derajat, keagamaan, sosial, pendidikan, UMKM tanpa hubungan usaha)? Jika YA, dicatat sebesar NILAI SISA BUKU (Non-Objek). Jika TIDAK, dinilai sebesar HARGA PASAR (Objek PPh).',
        '**5. Setoran Modal Berupa Harta (Inbreng)**: Selalu dinilai berdasarkan HARGA PASAR wajar harta yang diserahkan (Pasal 10 ayat 5).'
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Intisari Ujian TM 2'
    },
    {
      kind: 'ul',
      items: [
        '**Penilaian Harta Pengalihan**: Menggunakan harga pasar wajar untuk transaksi afiliasi, barter, inbreng, dan reorganisasi standar guna merefleksikan nilai ekonomis riil dan mencegah pengalihan laba semu.',
        '**Reorganisasi Usaha Nilai Buku (PMK 81/2024 jo. PMK 01/2026)**: Menghindari beban pajak langsung saat merger/konsolidasi dengan syarat izin DJP (6 bulan), business purpose test, kontinuitas bisnis 4 tahun, larangan pengalihan aktiva tetap 2 tahun, dan larangan mutlak transfer rugi fiskal.',
        '**Hanya FIFO & Average**: Pasal 10 ayat (6) UU PPh melarang metode LIFO secara mutlak. Wajib taat asas dari tahun ke tahun.',
        '**NPPN vs Pembukuan**: Norma khusus OP omzet < Rp4,8 Miliar dengan syarat lapor pemberitahuan paling lambat 31 Maret (3 bulan pertama). Jika tidak lapor, wajib pembukuan.',
        '**Kompensasi Rugi Fiskal 5 Tahun**: Dihitung urut per tahun kemunculan rugi. Sisa rugi pada akhir tahun ke-5 hangus.',
        '**Tarif OP & Fasilitas Badan 31E**: OP 5 bracket (5% s.d. 35%). Badan 22% dengan fasilitas diskon 50% (tarif efektif 11%) atas PKP dari omzet s.d. Rp4,8 Miliar.'
      ]
    }
  ]
};
