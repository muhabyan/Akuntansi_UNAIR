const fs = require('fs');

const raw = [
  // TM 1: Pengantar Hukum Pajak
  [1, 'Definisi', 'Pajak', 'Iuran wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan Undang-Undang, tanpa mendapat imbalan secara langsung.'],
  [1, 'Konsep', 'Fungsi Pajak', 'Fungsi Budgetair (sumber penerimaan kas negara terbesar) dan Fungsi Regulerend (mengatur kebijakan ekonomi/sosial, misal cukai rokok tinggi).'],
  [1, 'Perbandingan', 'Pajak vs Retribusi', 'Pajak tidak memberi imbalan langsung (contoh PPN). Retribusi memberi imbalan pelayanan langsung dari negara (contoh retribusi parkir/sampah).'],
  [1, 'Standar', 'Asas Pemungutan Pajak (Adam Smith)', 'Equality (Keadilan/kemampuan), Certainty (Kepastian hukum), Convenience of Payment (Ketepatan waktu pungut), Economy (Biaya pungut minimum).'],
  [1, 'Konsep', 'Self Assessment System', 'Sistem di mana Wajib Pajak diberi kepercayaan untuk menghitung, memperhitungkan, membayar, dan melaporkan sendiri pajaknya.'],
  [1, 'Konsep', 'Withholding System', 'Sistem pemungutan pajak di mana pihak ketiga (bukan WP atau aparat pajak) yang bertugas memotong/memungut pajak (contoh bendahara kantor memotong PPh 21 pegawai).'],
  // TM 2: KUP Lanjutan
  [2, 'Definisi', 'NPWP (Nomor Pokok Wajib Pajak)', 'Nomor identitas yang diberikan kepada WP sebagai sarana dalam administrasi perpajakan. NPWP kini menggunakan NIK (Nomor Induk Kependudukan).'],
  [2, 'Konsep', 'Pengukuhan PKP (Pengusaha Kena Pajak)', 'Wajib jika pengusaha melakukan penyerahan BKP/JKP dan omzet setahun di atas Rp 4,8 miliar. Wajib memungut PPN dan membuat Faktur Pajak.'],
  [2, 'Standar', 'Batas Waktu Lapor SPT Tahunan', 'Untuk Wajib Pajak Orang Pribadi maksimal 3 bulan setelah akhir tahun pajak (31 Maret). Wajib Pajak Badan maksimal 4 bulan (30 April).'],
  [2, 'Dokumen', 'SSP (Surat Setoran Pajak)', 'Bukti pembayaran pajak ke kas negara menggunakan formulir (kini lebih sering lewat sistem billing/e-billing).'],
  [2, 'Dokumen', 'SKP (Surat Ketetapan Pajak)', 'Surat dari Dirjen Pajak yang menetapkan jumlah pajak kurang bayar (SKPKB), lebih bayar (SKPLB), atau nihil (SKPN) setelah dilakukan pemeriksaan.'],
  [2, 'Mekanisme', 'Sanksi Administrasi KUP', 'Berupa Bunga (keterlambatan bayar), Denda (keterlambatan lapor SPT), atau Kenaikan (karena pengungkapan ketidakbenaran atau fraud pajak).'],
  // TM 3: Penagihan Pajak
  [3, 'Definisi', 'Penagihan Pajak Aktif', 'Serangkaian tindakan agar Penanggung Pajak melunasi utang pajak dan biaya penagihan, yang diawali dengan Surat Teguran dan Surat Paksa.'],
  [3, 'Dokumen', 'Surat Teguran (Surat Peringatan)', 'Diterbitkan 7 hari setelah jatuh tempo pembayaran jika WP belum melunasi pajaknya.'],
  [3, 'Dokumen', 'Surat Paksa', 'Surat yang memiliki kekuatan eksekutorial sama dengan putusan pengadilan. Diterbitkan 21 hari setelah Surat Teguran. WP punya waktu 2x24 jam untuk melunasi.'],
  [3, 'Mekanisme', 'Penyitaan (Surat Perintah Melaksanakan Penyitaan)', 'Tindakan jurusita menyita aset WP. Dilakukan setelah lewat waktu 2x24 jam dari pemberitahuan Surat Paksa tanpa pelunasan.'],
  [3, 'Mekanisme', 'Lelang', 'Penjualan aset sitaan melalui Kantor Lelang Negara jika Wajib Pajak tidak melunasi utang pajak 14 hari setelah pelaksanaan penyitaan.'],
  [3, 'Konsep', 'Pencegahan dan Penyanderaan (Gijzeling)', 'Pencegahan bepergian ke luar negeri dan pengekangan kebebasan WP di Rutan, khusus untuk WP dengan utang pajak ≥ Rp 100 juta dan diragukan iktikad baiknya.'],
  // TM 4: PPh Umum (Subjek & Objek)
  [4, 'Definisi', 'Pajak Penghasilan (PPh)', 'Pajak yang dikenakan terhadap Subjek Pajak atas Penghasilan yang diterima atau diperolehnya dalam suatu tahun pajak.'],
  [4, 'Konsep', 'Subjek Pajak Dalam Negeri (SPDN)', 'Orang Pribadi yang bertempat tinggal di Indonesia lebih dari 183 hari dalam 12 bulan, atau Badan yang didirikan/bertempat kedudukan di Indonesia.'],
  [4, 'Konsep', 'Subjek Pajak Luar Negeri (SPLN)', 'Orang/Badan yang tidak tinggal/berdiri di Indonesia tetapi menerima penghasilan dari Indonesia (baik lewat BUT maupun non-BUT).'],
  [4, 'Definisi', 'Bentuk Usaha Tetap (BUT)', 'Cabang, kantor perwakilan, atau agen dari perusahaan asing (SPLN) yang menjalankan bisnis/kegiatan reguler di Indonesia; diperlakukan pajaknya layaknya WP Badan Dalam Negeri.'],
  [4, 'Standar', 'Objek Pajak Penghasilan (Pasal 4 ayat 1)', 'Setiap tambahan kemampuan ekonomis, baik dari dalam maupun luar negeri, yang dapat dipakai konsumsi atau menambah kekayaan (Gaji, Laba Usaha, Bunga, Dividen, Royalti).'],
  [4, 'Standar', 'Bukan Objek Pajak (Pasal 4 ayat 3)', 'Bantuan/sumbangan/zakat resmi, harta hibahan keluarga sedarah linier, warisan, klaim asuransi kesehatan/jiwa, dan beasiswa tertentu.'],
  // TM 5: PPh Pasal 21 (Orang Pribadi)
  [5, 'Definisi', 'PPh Pasal 21', 'Pajak pemotongan atas penghasilan berupa gaji, upah, honorarium, tunjangan yang diterima oleh Wajib Pajak Orang Pribadi dalam negeri sehubungan dengan pekerjaan atau jasa.'],
  [5, 'Rumus', 'PTKP (Penghasilan Tidak Kena Pajak)', 'Pengurang penghasilan bruto bagi WP OP. Standar TK/0 (Tidak Kawin nol tanggungan) adalah Rp 54.000.000 setahun. Tambahan Rp 4.500.000 untuk status kawin dan per tanggungan (maks 3).'],
  [5, 'Konsep', 'Tarif Pasal 17 untuk Orang Pribadi', 'Tarif progresif: 5% (s.d Rp 60 jt), 15% (60-250 jt), 25% (250-500 jt), 30% (500 jt - 5 M), dan 35% (di atas Rp 5 M).'],
  [5, 'Rumus', 'Biaya Jabatan', 'Pengurang penghasilan bruto khusus bagi pegawai tetap. Ditetapkan 5% dari penghasilan bruto, maksimal Rp 500.000 per bulan (Rp 6.000.000 setahun).'],
  [5, 'Mekanisme', 'TER (Tarif Efektif Rata-rata)', 'Aturan baru pemotongan PPh 21 bulanan (selain bulan Desember) yang menggunakan persentase tunggal (TER A/B/C) dikali penghasilan bruto bulanan tanpa repot mengurangi PTKP tiap bulan.'],
  [5, 'Miskonsepsi', 'Pemotongan Tidak Ber-NPWP', 'Jika penerima penghasilan tidak memiliki NPWP, maka tarif pemotongan PPh 21 akan lebih tinggi 20% dari tarif normal (misal tarif 5% menjadi 6%).'],
  // TM 6: PPh Pasal 22
  [6, 'Definisi', 'PPh Pasal 22', 'Pajak yang dipungut oleh bendaharawan pemerintah terkait pengadaan barang, atau oleh badan tertentu terkait kegiatan impor atau bisnis di bidang tertentu (semen, kertas, baja, otomotif).'],
  [6, 'Rumus', 'Tarif PPh 22 Impor (Punya API)', 'Tarif 2,5% dari Nilai Impor untuk barang tertentu (bisa 7,5% atau 10% untuk barang lainnya). API = Angka Pengenal Impor.'],
  [6, 'Rumus', 'Tarif PPh 22 Impor (Tanpa API)', 'Tarif lebih tinggi yakni 7,5% dari Nilai Impor. Jika barang tidak dikuasai (lelang), juga dikenakan 7,5% dari harga jual lelang.'],
  [6, 'Rumus', 'Tarif PPh 22 Bendahara Pemerintah', 'Pemungutan sebesar 1,5% dari harga pembelian (tidak termasuk PPN) atas belanja barang oleh instansi pemerintah.'],
  [6, 'Konsep', 'Pengecualian PPh 22 Bendahara', 'Pembelian barang dengan nilai maksimal Rp 2.000.000, pembelian BBM/listrik/air, atau pembayaran untuk pengadaan beras/gabah Bulog tidak dipungut PPh 22.'],
  [6, 'Konsep', 'Sifat PPh 22', 'Pada umumnya PPh 22 bersifat tidak final (kredit pajak), kecuali PPh 22 atas penjualan BBM kepada penyalur/agen yang bersifat final.'],
  // TM 7: PPh Pasal 23
  [7, 'Definisi', 'PPh Pasal 23', 'Pajak yang dipotong atas penghasilan modal (dividen, bunga, royalti) dan imbalan jasa yang diterima Wajib Pajak Dalam Negeri (selain yang dipotong PPh 21).'],
  [7, 'Tarif', 'Tarif 15% (PPh 23)', 'Dikenakan atas: Dividen (untuk WP Badan jika syarat tertentu tidak terpenuhi), Bunga, Royalti, dan Hadiah/Penghargaan (selain PPh 21).'],
  [7, 'Tarif', 'Tarif 2% (PPh 23)', 'Dikenakan atas: Sewa harta (selain tanah/bangunan) dan Imbalan atas Jasa Manajemen, Jasa Teknik, Jasa Konsultan, atau Jasa Lainnya.'],
  [7, 'Konsep', 'Bukan Objek PPh 23', 'Bunga simpanan koperasi yang dibayar ke anggota, dividen antar-BUMN/Badan dengan kepemilikan >25% (dibebaskan), atau sewa sewa guna usaha (leasing) dengan hak opsi.'],
  [7, 'Mekanisme', 'Sanksi Tidak Punya NPWP di PPh 23', 'Tarif pemotongan akan menjadi 100% lebih tinggi dari tarif standar (contoh: jasa 2% menjadi 4%, dividen 15% menjadi 30%).'],
  [7, 'Miskonsepsi', 'Pemotong PPh 23', 'Yang memotong dan menyetor adalah PIHAK YANG MEMBAYAR (Pemberi Penghasilan / Klien yang berstatus WP Badan/ditunjuk), bukan pihak yang menerima penghasilan.'],
  // TM 8: PPh Pasal 4 Ayat 2 (Final)
  [8, 'Definisi', 'PPh Final (Pasal 4 ayat 2)', 'Pajak yang pemotongannya dianggap lunas seketika. Penghasilannya tidak digabung di SPT Tahunan, dan pajaknya tidak bisa dikreditkan.'],
  [8, 'Tarif', 'Bunga Deposito / Tabungan', 'Dikenakan PPh Final 20% atas jumlah bruto bunga. Dipotong langsung oleh pihak Bank.'],
  [8, 'Tarif', 'Sewa Tanah dan/atau Bangunan', 'Dikenakan PPh Final 10% dari jumlah bruto nilai persewaan.'],
  [8, 'Tarif', 'Pengalihan Hak Tanah dan Bangunan', 'Dikenakan PPh Final 2,5% dari nilai pengalihan (harga transaksi atau NJOP, mana yang lebih tinggi).'],
  [8, 'Tarif', 'Jasa Konstruksi', 'Tarif beragam (1,75%, 2,65%, 4%, 6%) tergantung memiliki kualifikasi usaha (Kecil/Menengah/Besar) dan jenis layanan (Konsultasi/Pelaksanaan/Pengawasan).'],
  [8, 'Tarif', 'Dividen untuk Orang Pribadi', 'Dividen yang diterima Wajib Pajak Orang Pribadi Dalam Negeri dikenakan PPh Final 10%, NAMUN bisa BEBAS PAJAK jika diinvestasikan kembali di instrumen keuangan RI selama 3 tahun.'],
  // TM 9: PPh Pasal 24 & 25
  [9, 'Definisi', 'PPh Pasal 24', 'Fasilitas Kredit Pajak Luar Negeri. Mengatur agar penghasilan WP yang telah dipotong pajak di luar negeri tidak terkena pajak ganda di Indonesia.'],
  [9, 'Rumus', 'Batas Maksimum Kredit PPh 24', '(Penghasilan Luar Negeri / Total Penghasilan Kena Pajak) x Total PPh Terutang setahun. Batas kredit adalah yang terkecil antara Pajak riil dibayar di LN atau batas maksimum tersebut.'],
  [9, 'Definisi', 'PPh Pasal 25', 'Angsuran pembayaran pajak penghasilan tiap bulan pada tahun berjalan untuk meringankan beban Wajib Pajak saat membayar SPT Tahunan (Pasal 29).'],
  [9, 'Rumus', 'Cara Hitung Angsuran PPh 25', '(Total PPh Terutang tahun lalu dikurangi Kredit Pajak tahun lalu) dibagi 12 bulan.'],
  [9, 'Mekanisme', 'Batas Waktu PPh 25', 'Harus dibayar paling lambat tanggal 15 bulan berikutnya. Keterlambatan dikenakan sanksi bunga.'],
  [9, 'Konsep', 'Penurunan Angsuran PPh 25', 'WP boleh mengajukan permohonan pengurangan angsuran PPh 25 jika proyeksi laba tahun berjalan jauh lebih kecil dari tahun lalu (dengan bukti kuat).'],
  // TM 10: PPh Pasal 26
  [10, 'Definisi', 'PPh Pasal 26', 'Pajak yang dipotong atas penghasilan yang bersumber dari Indonesia yang diterima atau diperoleh Wajib Pajak Luar Negeri (SPLN) selain BUT.'],
  [10, 'Tarif', 'Tarif Umum PPh 26', 'Pemotongan sebesar 20% (final) dari jumlah bruto penghasilan (dividen, bunga, royalti, jasa, sewa, pensiun).'],
  [10, 'Konsep', 'Tax Treaty (P3B)', 'Perjanjian Penghindaran Pajak Berganda antar dua negara. Jika WPLN menunjukkan Surat Keterangan Domisili (DGT Form), tarif PPh 26 bisa lebih rendah dari 20% sesuai kesepakatan Tax Treaty.'],
  [10, 'Tarif', 'Branch Profit Tax (BPT)', 'Laba bersih setelah pajak dari BUT di Indonesia (Net Income after Tax) dikenakan tambahan PPh 26 sebesar 20%, kecuali laba tersebut ditanamkan kembali (reinvestasi) di Indonesia.'],
  [10, 'Miskonsepsi', 'Sifat PPh 26', 'Meskipun secara umum bersifat Final, PPh 26 bisa bersifat tidak final apabila WPLN beralih status menjadi Wajib Pajak Dalam Negeri pada tahun berjalan.'],
  [10, 'Objek', 'Premi Asuransi ke Luar Negeri', 'Premi yang dibayar langsung ke perusahaan asuransi asing dikenakan PPh 26 sebesar 20% dari Perkiraan Penghasilan Neto (50% dari premi, efektif 10%).'],
  // TM 11: PPh Orang Pribadi
  [11, 'Definisi', 'SPT Tahunan OP (1770, 1770S, 1770SS)', 'Formulir pelaporan pajak tahunan individu. 1770 untuk pengusaha/pekerja bebas, 1770S untuk pegawai dengan gaji > 60jt/punya lebih dari 1 sumber, 1770SS untuk pegawai gaji < 60jt.'],
  [11, 'Konsep', 'Penghasilan Suami-Istri', 'Sistem perpajakan Indonesia menganggap keluarga sebagai satu kesatuan ekonomi. Penghasilan suami-istri digabung, KECUALI memilih MT (Memilih Terpisah) atau PH (Pisah Harta).'],
  [11, 'Rumus', 'PTKP Suami-Istri Digabung', 'Jika istri bekerja di >1 pemberi kerja atau usaha, dan pajaknya digabung (status K/I), PTKP adalah = Rp 54jt (suami) + Rp 54jt (istri) + status kawin & tanggungan.'],
  [11, 'Definisi', 'NPPN (Norma Penghitungan Penghasilan Neto)', 'Fasilitas bagi WP OP (omzet < Rp 4,8 M) yang tidak menyelenggarakan pembukuan (hanya pencatatan) untuk menghitung net income dengan mengalikan omzet x persentase tarif Norma kota/profesinya.'],
  [11, 'Definisi', 'UMKM PP 55/2022 (Eks PP 23)', 'Wajib pajak OP dengan omzet < Rp 4,8 M bisa memakai PPh Final 0,5%. OP UMKM omzet pertama s.d Rp 500 juta dalam setahun BEBAS PPh 0,5%.'],
  [11, 'Mekanisme', 'Zakat sebagai Pengurang', 'Zakat atau sumbangan keagamaan wajib yang dibayar melalui lembaga resmi (BAZNAS/LAZ) dapat dikurangkan dari Penghasilan Bruto di SPT.'],
  // TM 12: PPh Badan & Rekonsiliasi Fiskal
  [12, 'Definisi', 'Rekonsiliasi Fiskal', 'Proses penyesuaian Laba Komersial (berdasarkan Standar Akuntansi) menjadi Laba Fiskal (berdasarkan UU Pajak) sebagai dasar perhitungan PPh Badan.'],
  [12, 'Konsep', 'Koreksi Positif', 'Koreksi yang MENAMBAH laba fiskal (sehingga pajak naik). Contoh: Beban yang tak boleh dikurangkan pajak (Non-deductible expenses) seperti sanksi denda pajak atau natura/kenikmatan berlebih.'],
  [12, 'Konsep', 'Koreksi Negatif', 'Koreksi yang MENGURANGI laba fiskal (sehingga pajak turun). Contoh: Penghasilan yang bukan objek pajak atau penghasilan yang sudah dipotong PPh Final (karena tidak boleh dikenakan pajak 2x).'],
  [12, 'Konsep', 'Beda Tetap (Permanent Difference)', 'Perbedaan yang tidak akan terselesaikan seiring waktu, misal Biaya Sumbangan (diakui akuntansi, dilarang selamanya oleh pajak).'],
  [12, 'Konsep', 'Beda Waktu (Temporary Difference)', 'Perbedaan pengakuan waktu antara akuntansi dan pajak, misal beda metode/umur Depresiasi Aset. Memicu timbulnya Pajak Tangguhan (Deferred Tax).'],
  [12, 'Tarif', 'Tarif PPh Badan (Pasal 17)', 'Mulai tahun 2022, tarif umum PPh Badan turun menjadi 22%. Perusahaan Tbk (memenuhi syarat public float >20%) dapat diskon tarif 3% (menjadi 19%).'],
  // TM 13: Pajak Pertambahan Nilai (PPN) Dasar
  [13, 'Definisi', 'PPN (Pajak Pertambahan Nilai)', 'Pajak atas konsumsi Barang Kena Pajak (BKP) atau Jasa Kena Pajak (JKP) di dalam Daerah Pabean. Pajak Objektif & Pajak Tidak Langsung.'],
  [13, 'Tarif', 'Tarif PPN', 'Menurut UU HPP, tarif PPN naik menjadi 11% (berlaku mulai 1 April 2022), dan direncakan naik menjadi 12% pada 1 Januari 2025.'],
  [13, 'Konsep', 'Pajak Keluaran (Output Tax)', 'PPN yang dipungut oleh PKP saat ia MENJUAL barang/jasa kepada pembeli (Sifatnya menambah Utang PPN ke negara).'],
  [13, 'Konsep', 'Pajak Masukan (Input Tax)', 'PPN yang dibayar oleh PKP saat ia MEMBELI bahan baku atau aset dari PKP lain (Sifatnya seperti Uang Muka Pajak yang bisa dikreditkan).'],
  [13, 'Mekanisme', 'Pengkreditan PPN', 'Jika Pajak Keluaran > Pajak Masukan = Kurang Bayar (harus setor ke kas negara). Jika Pajak Masukan > Pajak Keluaran = Lebih Bayar (bisa kompensasi ke bulan depan atau Restitusi).'],
  [13, 'Standar', 'Bukan Objek PPN', 'Barang kebutuhan pokok (beras, jagung), jasa medis, jasa keuangan (bank/asuransi), asuransi, jasa keagamaan, dan uang/emas batangan standar (UU Cipta Kerja & HPP).'],
  // TM 14: PPN Lanjutan & PPnBM
  [14, 'Definisi', 'Faktur Pajak', 'Bukti pungutan pajak yang dibuat oleh PKP saat melakukan penyerahan BKP/JKP. Wajib dibuat menggunakan e-Faktur.'],
  [14, 'Konsep', 'Faktur Pajak Cacat/Tidak Sah', 'Faktur pajak yang pengisiannya tidak lengkap, salah, atau tidak sesuai ketentuan. Pajak Masukan dari faktur cacat tidak dapat dikreditkan oleh pembeli.'],
  [14, 'Definisi', 'PPnBM (Pajak Penjualan Barang Mewah)', 'Pajak tambahan selain PPN yang dikenakan HANYA 1 KALI pada saat penyerahan oleh produsen pabrikan barang mewah atau pada saat Impor barang mewah.'],
  [14, 'Konsep', 'Karakteristik PPnBM', 'Tujuannya untuk mengendalikan konsumsi barang mewah, melindungi produsen kecil lokal, dan keadilan pajak. PPnBM TIDAK BISA DIKREDITKAN seperti PPN.'],
  [14, 'Tarif', 'Tarif PPnBM', 'Paling rendah 10%, paling tinggi 200%. Untuk Ekspor barang mewah, tarif PPnBM-nya adalah 0%.'],
  [14, 'Mekanisme', 'Batas Waktu Setor PPN', 'Pembayaran PPN Kurang Bayar dilakukan paling lambat Akhir Bulan berikutnya (sebelum lapor SPT Masa PPN). SPT dilaporkan juga pada akhir bulan berikutnya.']
];

const cards = [];
raw.forEach((r, i) => {
  const tm = r[0];
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  cards.push(`  {
    id: "pjk201-tm${tm < 10 ? '0'+tm : tm}-${i < 10 ? '0'+i : i}",
    phase: "${phase}",
    tm: ${tm},
    topic: "${r[2].replace(/"/g, '\\"')}",
    category: "${r[1]}",
    front: "${r[2].replace(/"/g, '\\"')}",
    back: "${r[3].replace(/"/g, '\\"')}"
  }`);
});

const content = `import type { AdvancedStudyCard } from '../../types';

export const PJK201_FC: AdvancedStudyCard[] = [
${cards.join(',\n')}
];
`;

fs.writeFileSync('c:/cek/src/data/flashcards/pjk201.ts', content);
console.log('Generated PJK201 cards: ' + cards.length);
