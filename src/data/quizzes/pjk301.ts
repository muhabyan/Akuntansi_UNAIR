// src/data/quizzes/pjk301.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Perpajakan II (PJK301)
import type { QuizQuestion } from '../../types';

const UTS_TOPICS: Record<number, string> = {
  1: 'Ketentuan Umum Pajak Penghasilan (PPh Umum) dan PPh Wajib Pajak Orang Pribadi',
  2: 'Perolehan Harta, Penilaian Persediaan, dan Norma Penghitungan Penghasilan Neto (NPPN)',
  3: 'Hubungan Istimewa, Instrumen Pencegahan Penghindaran Pajak, dan Kesepakatan Harga Transfer (APA)',
  4: 'Penyusutan Harta Berwujud, Amortisasi Harta Tak Berwujud, dan Revaluasi Aset Tetap',
  5: 'Pemungutan PPh Pasal 22, Pemotongan PPh Pasal 23/26, Pemungut Marketplace, dan Skema PPh Final UMKM',
  6: 'Pemotongan Pajak Penghasilan Bersifat Final (PPh Pasal 4 ayat 2, PPh Pasal 15, Dividen Wajib Pajak Orang Pribadi)',
  7: 'Kredit Pajak Luar Negeri (PPh 24), Angsuran PPh 25 & WP OPPT, Insentif PPh Pasal 31A & 31E',
};
const uts = (tm: number, difficulty: 'basic' | 'medium' | 'advanced', q: string, options: string[], answer: number, explanation: string): QuizQuestion =>
  ({ tm, topic: UTS_TOPICS[tm], difficulty, q, options, answer, explanation });

export const PJK301_QUIZ_UTS: QuizQuestion[] = [
  // TM01 — objek, biaya 3M, natura, zakat, dan tarif orang pribadi.
  uts(1, 'medium', 'WP dalam negeri menerima laba usaha dari Indonesia dan penghasilan dari cabang luar negeri. Penghasilan mana yang masuk cakupan PPh Indonesia?',
    ['Hanya laba usaha dari Indonesia', 'Keduanya, karena asas worldwide income', 'Hanya penghasilan cabang luar negeri', 'Tidak satu pun sampai laba dibagikan'],
    1, 'Pasal 4 ayat (1) dan asas worldwide income dalam TM01 mencakup tambahan kemampuan ekonomis WP dalam negeri dari Indonesia maupun luar negeri.'),
  uts(1, 'medium', 'Perusahaan mencatat biaya operasional dan pengeluaran suap sebagai beban komersial. Perlakuan fiskal yang tepat?',
    ['Keduanya biaya 3M', 'Suap menjadi pengurang bila ada bukti bayar', 'Biaya operasional terkait 3M dapat dikurangkan; suap dikoreksi positif', 'Keduanya merupakan objek PPh final'],
    2, 'Biaya untuk mendapatkan, menagih, dan memelihara penghasilan dapat dikurangkan menurut Pasal 6; pengeluaran suap dilarang sebagai biaya oleh Pasal 20A PP 20/2026.'),
  uts(1, 'advanced', 'PT BA memberi kupon makan dinas luar Rp110.000 per bulan; nilai makan di kantor Rp100.000. Berapa bagian kupon yang menjadi objek PPh 21 pegawai?',
    ['Rp0', 'Rp10.000', 'Rp100.000', 'Rp110.000'],
    1, 'Pengecualian kupon dibatasi nilai makan kantor. Selisih Rp110.000 dikurangi Rp100.000, yaitu Rp10.000, menjadi objek PPh 21; biaya kupon tetap deductible bagi pemberi kerja.'),
  uts(1, 'medium', 'Zakat sah melalui BAZNAS Rp20.000.000 disertai bukti transfer; penghasilan neto fiskal sebelum zakat Rp15.000.000. Berapa zakat yang dapat dikurangkan?',
    ['Rp0', 'Rp5.000.000', 'Rp15.000.000', 'Rp20.000.000'],
    2, 'PMK 114/2025 melarang zakat menimbulkan rugi fiskal. Pengurangan maksimal Rp15.000.000 sampai laba menjadi nol; kelebihan Rp5.000.000 hangus.'),
  uts(1, 'advanced', 'Tuan F berstatus K/2 mempunyai PKP Rp397.500.000 setelah semua pengurang. Berapa PPh orang pribadi terutang menurut lapisan UU HPP?',
    ['Rp36.875.000', 'Rp68.375.000', 'Rp99.375.000', 'Rp124.000.000'],
    1, 'PPh = 5% × Rp60.000.000 + 15% × Rp190.000.000 + 25% × Rp147.500.000 = Rp68.375.000; PKP belum mencapai lapisan berikutnya.'),

  // TM02 — harga pasar, persediaan, NPPN, rugi, dan fasilitas badan.
  uts(2, 'medium', 'Dalam barter harta PT A dan PT B, masing-masing harta bernilai pasar Rp20.000.000; nilai buku harta PT A Rp10.000.000 dan PT B Rp12.000.000. Berapa keuntungan fiskal masing-masing?',
    ['PT A Rp10.000.000; PT B Rp8.000.000', 'PT A Rp8.000.000; PT B Rp10.000.000', 'Keduanya Rp20.000.000', 'Keduanya nihil karena tidak ada kas'],
    0, 'Pasal 10 ayat (2) memakai harga pasar dalam barter. Laba PT A = Rp20.000.000 − Rp10.000.000; laba PT B = Rp20.000.000 − Rp12.000.000.'),
  uts(2, 'advanced', 'Data mutasi Januari pada studi kasus FIFO TM02 memuat barang terjual 2.950 unit. Berapa HPP fiskal menurut FIFO?',
    ['Rp8.875.000', 'Rp13.975.000', 'Rp14.043.229,17', 'Rp22.850.000'],
    1, 'FIFO membebankan 1.000 unit awal Rp4.000.000, 1.500 unit pembelian Rp7.500.000, dan 450 unit berikutnya Rp2.475.000; total HPP Rp13.975.000.'),
  uts(2, 'medium', 'WP orang pribadi memenuhi batas omzet NPPN, tetapi baru memberitahukan pemakaian norma setelah tiga bulan pertama tahun pajak. Statusnya?',
    ['Tetap otomatis memakai NPPN', 'Dianggap memilih pembukuan', 'Boleh memakai LIFO sebagai pengganti', 'Kerugian fiskal otomatis dialihkan ke tahun berikutnya'],
    1, 'Pasal 14 dan ketentuan pemberitahuan pada TM02 mensyaratkan notifikasi dalam tiga bulan pertama. Jika terlambat, WP dianggap memilih pembukuan.'),
  uts(2, 'medium', 'Pak Arjuna masih memiliki sisa rugi fiskal tahun 2020 sebesar Rp100.000.000 pada akhir 2025 setelah kompensasi. Bagaimana status sisa itu?',
    ['Tetap dibawa ke 2026', 'Dikreditkan sebagai PPh 25', 'Hangus setelah jangka lima tahun 2021–2025', 'Diberikan kepada badan penerus'],
    2, 'Pasal 6 ayat (2) membatasi kompensasi selama lima tahun berturut-turut sejak tahun berikutnya; sisa rugi 2020 hangus setelah 2025.'),
  uts(2, 'advanced', 'PT Cemerlang Mandiri beromzet Rp12.000.000.000 dengan PKP Rp1.000.000.000. Berapa PPh badan setelah fasilitas Pasal 31E?',
    ['Rp110.000.000', 'Rp132.000.000', 'Rp176.000.000', 'Rp220.000.000'],
    2, 'PKP fasilitas = Rp4.800.000.000/Rp12.000.000.000 × Rp1.000.000.000 = Rp400.000.000. PPh = 11% × Rp400.000.000 + 22% × Rp600.000.000 = Rp176.000.000.'),

  // TM03 — afiliasi, metode, koreksi, pembatasan bunga, APA.
  uts(3, 'medium', 'PT Alpha memiliki 50% PT Beta dan PT Beta memiliki 50% PT Gamma. Apakah Alpha dan Gamma mempunyai hubungan istimewa lewat modal?',
    ['Tidak, karena tidak ada saham langsung', 'Ya, kepemilikan tidak langsung tepat 25%', 'Ya, karena ambang CFC 50%', 'Tidak, karena diperlukan kepemilikan lebih dari 25%'],
    1, 'Kepemilikan bertingkat 50% × 50% = 25%, tepat memenuhi batas minimal Pasal 18 ayat (4) UU PPh.'),
  uts(3, 'medium', 'Dua pihak afiliasi sama-sama menyumbang aset tak berwujud unik yang bernilai tinggi dalam transaksi sangat terintegrasi. Metode harga transfer paling sesuai menurut TM03?',
    ['CUP', 'Resale Price Method', 'Profit Split Method', 'Cost Plus Method'],
    2, 'PMK 172/2023 menempatkan Profit Split Method untuk transaksi terintegrasi ketika kedua pihak menyumbang aset tak berwujud unik; laba gabungan dibagi menurut kontribusi.'),
  uts(3, 'advanced', 'PT Manufaktur Jaya menjual 10.000 unit ke induknya seharga Rp500.000 per unit; CUP independen Rp800.000. Berapa koreksi primer penjualannya?',
    ['Rp500.000.000', 'Rp3.000.000.000', 'Rp5.000.000.000', 'Rp8.000.000.000'],
    1, 'Koreksi positif penjualan = 10.000 × (Rp800.000 − Rp500.000) = Rp3.000.000.000, yaitu selisih omzet wajar dan omzet tercatat.'),
  uts(3, 'advanced', 'Utang rata-rata PT Finansia Rp10.000.000.000, ekuitas Rp2.000.000.000, bunga Rp1.000.000.000. Berapa koreksi positif bunga menurut DER 4:1?',
    ['Rp0', 'Rp200.000.000', 'Rp800.000.000', 'Rp1.000.000.000'],
    1, 'Batas utang = 4 × Rp2.000.000.000 = Rp8.000.000.000. Bunga deductible Rp800.000.000; sisa Rp200.000.000 dikoreksi positif.'),
  uts(3, 'medium', 'Perusahaan ingin kepastian metode transfer pricing untuk transaksi afiliasi masa depan dan melibatkan otoritas pajak negara mitra. Instrumen yang sesuai?',
    ['APA bilateral dengan masa depan maksimal 5 tahun pajak', 'GAAR tanpa kesepakatan WP', 'Koreksi sekunder dividen terselubung', 'Kompensasi rugi fiskal'],
    0, 'PMK 172/2023 menyediakan APA bilateral melalui otoritas mitra P3B untuk menyepakati kriteria harga wajar; jangka ke depannya paling lama 5 tahun pajak.'),

  // TM04 — kelompok, garis lurus, saldo menurun, bulan awal, rekonsiliasi.
  uts(4, 'medium', 'Truk operasional tergolong Kelompok 2 bukan bangunan. Pasangan masa manfaat dan tarif fiskal garis lurus/saldo menurun yang benar?',
    ['4 tahun; 25%/50%', '8 tahun; 12,5%/25%', '16 tahun; 6,25%/12,5%', '20 tahun; 5%/10%'],
    1, 'Tabel PMK 72/2023 pada TM04 menempatkan truk di Kelompok 2: 8 tahun, tarif garis lurus 12,5% dan saldo menurun 25%.'),
  uts(4, 'advanced', 'Gedung permanen berbiaya Rp1.000.000.000 selesai dibangun Maret 2026. Berapa penyusutan fiskal 2026?',
    ['Rp0', 'Rp41.666.666,67', 'Rp50.000.000', 'Rp100.000.000'],
    1, 'Bangunan permanen hanya memakai garis lurus 5% dan mulai disusutkan saat konstruksi selesai. Maret–Desember = 10 bulan; 10/12 × 5% × Rp1.000.000.000 = Rp41.666.666,67.'),
  uts(4, 'advanced', 'Mesin Kelompok 1 seharga Rp100.000.000 diperoleh 25 Juli 2022 dengan saldo menurun 50%. Berapa beban fiskal 2022?',
    ['Rp25.000.000', 'Rp37.500.000', 'Rp50.000.000', 'Rp75.000.000'],
    0, 'Juli dihitung satu bulan penuh meskipun perolehan tanggal 25. Ada 6 bulan sampai Desember, sehingga 6/12 × 50% × Rp100.000.000 = Rp25.000.000.'),
  uts(4, 'medium', 'Mesin pada studi kasus TM04 masih memiliki nilai buku fiskal Rp9.375.000 pada tahun terakhir masa manfaat saldo menurun. Apa perlakuannya?',
    ['Menyusutkan 50% lagi dan menyisakan nilai buku', 'Membiarkan sebagai nilai residu fiskal', 'Menyusutkan seluruh Rp9.375.000 sekaligus', 'Mengganti metode menjadi garis lurus sejak awal'],
    2, 'Pasal 11 ayat (2) mewajibkan sisa buku pada akhir masa manfaat saldo menurun disusutkan sekaligus sampai nilai buku fiskal nol.'),
  uts(4, 'medium', 'Beban penyusutan komersial lebih besar daripada penyusutan fiskal yang diizinkan untuk aset operasional. Apa arah rekonsiliasi laba komersial?',
    ['Koreksi fiskal positif sebesar selisih', 'Koreksi fiskal negatif sebesar selisih', 'Tidak ada koreksi karena nilai residu komersial selalu diakui fiskal', 'Seluruh harga perolehan langsung menjadi biaya'],
    0, 'Selisih beban komersial yang melebihi beban fiskal harus ditambahkan kembali sebagai koreksi positif. TM04 membedakan dasar, masa manfaat, dan awal susut komersial versus fiskal.'),

  // TM05 — pungut, potong, ambang, dan UMKM mutakhir.
  uts(5, 'advanced', 'PT Dynaplast mengimpor dengan API: CIF USD 1.200, bea masuk 10%, kurs KMK Rp14.500 per USD 1. Berapa PPh 22 impor barang umum?',
    ['Rp350.000', 'Rp478.500', 'Rp1.435.500', 'Rp19.140.000'],
    1, 'Nilai impor = USD 1.320 × Rp14.500 = Rp19.140.000. Tarif impor umum ber-API 2,5%, jadi PPh 22 = Rp478.500 dan bersifat tidak final.'),
  uts(5, 'medium', 'Instansi pemerintah membeli barang dalam satu transaksi tepat Rp2.000.000, tidak dipecah. Apa perlakuan PPh 22?',
    ['Dipungut 1,5% atas seluruh harga', 'Dipungut 3% karena ambang terlampaui', 'Dibebaskan karena nilai tidak melebihi batas Rp2.000.000', 'Dipotong PPh 23 sebesar 2%'],
    2, 'TM05 menyatakan belanja pemerintah sampai dengan Rp2.000.000 yang tidak dipecah bebas PPh 22; pemungutan 1,5% berlaku jika nilai di atas batas.'),
  uts(5, 'advanced', 'PT Dynaplast membayar royalti paten Rp100.000.000 kepada PT Polimer Inovasi yang ber-NPWP. Berapa PPh 23 yang dipotong?',
    ['Rp2.000.000', 'Rp10.000.000', 'Rp15.000.000', 'Rp20.000.000'],
    2, 'Royalti kepada WP dalam negeri dikenai PPh 23 sebesar 15% dari jumlah bruto; 15% × Rp100.000.000 = Rp15.000.000.'),
  uts(5, 'medium', 'Rekanan penerima jasa yang tidak ber-NPWP seharusnya terkena tarif PPh 23 normal 2%. Tarif pemotongannya menjadi berapa?',
    ['0,5%', '2%', '3%', '4%'],
    3, 'TM05 menyebut tarif PPh 23 tanpa NPWP naik 100% dari tarif normal; tarif 2% menjadi 4%.'),
  uts(5, 'advanced', 'Omzet kumulatif Tuan Bambang sampai Mei Rp400.000.000 dan omzet Juni Rp150.000.000. Berapa PPh final UMKM Juni menurut PP 20/2026?',
    ['Rp0', 'Rp250.000', 'Rp750.000', 'Rp2.750.000'],
    1, 'Khusus WP orang pribadi, Rp500.000.000 omzet kumulatif pertama bebas PPh. Bagian kena pajak Juni Rp50.000.000 × 0,5% = Rp250.000.'),

  // TM06 — klasifikasi final, sewa, konstruksi, PHTB, Pasal 15.
  uts(6, 'medium', 'Perusahaan memperoleh penghasilan yang telah dikenai PPh final dan mengeluarkan biaya khusus untuk memperolehnya. Perlakuan SPT tahunan yang tepat?',
    ['PPh final dikreditkan dan biayanya dikurangkan lagi', 'Penghasilan final dipisah; PPh final tidak dikreditkan dan biaya terkait dikoreksi positif', 'Penghasilan final digabung dengan PKP reguler', 'Bukti potong final menjadi angsuran PPh 25'],
    1, 'TM06 menjelaskan PPh final rampung saat dipotong/setor. Penghasilannya dilaporkan terpisah, bukti potongnya tidak menjadi kredit, dan biaya 3M terkait tidak mengurangi PKP reguler.'),
  uts(6, 'advanced', 'Tuan Johan menyewakan ruko kepada PT Prima Logistik Rp60.000.000 per tahun. Berapa PPh final sewa yang dipotong penyewa?',
    ['Rp1.200.000', 'Rp1.500.000', 'Rp6.000.000', 'Rp12.000.000'],
    2, 'Sewa tanah/bangunan menurut PP 34/2017 dikenai PPh final 10% atas sewa bruto. Jadi 10% × Rp60.000.000 = Rp6.000.000.'),
  uts(6, 'advanced', 'CV Pratama bersertifikat kualifikasi kecil menyelesaikan pekerjaan konstruksi Rp100.000.000 sebelum PPN. Berapa PPh finalnya?',
    ['Rp1.000.000', 'Rp1.750.000', 'Rp2.650.000', 'Rp4.000.000'],
    1, 'PP 9/2022 dalam TM06 menetapkan tarif pekerjaan konstruksi kualifikasi kecil 1,75%; 1,75% × Rp100.000.000 = Rp1.750.000.'),
  uts(6, 'advanced', 'Tuan Anton menjual ruko Rp800.000.000, sama dengan NJOP. Berapa PPh final pengalihan hak tanah/bangunan umum?',
    ['Rp8.000.000', 'Rp13.250.000', 'Rp20.000.000', 'Rp80.000.000'],
    2, 'Tarif PHTB umum pada TM06 adalah 2,5% dari nilai bruto pengalihan. PPh = 2,5% × Rp800.000.000 = Rp20.000.000 dan disetor sebelum akta.'),
  uts(6, 'advanced', 'PT Nusantara Air menerima carter penerbangan dalam negeri Rp100.000.000. Berapa PPh Pasal 15 dan bagaimana sifatnya?',
    ['Rp1.200.000, final', 'Rp1.800.000, tidak final', 'Rp2.640.000, final', 'Rp10.000.000, final'],
    1, 'Penerbangan dalam negeri carter memakai tarif efektif 1,8% × Rp100.000.000 = Rp1.800.000. Berbeda dari pelayaran domestik, pemotongannya tidak final dan dapat dikreditkan.'),

  // TM07 — kredit LN, angsuran, OPPT, 31A, dan 31E terintegrasi.
  uts(7, 'advanced', 'PT Global Nusantara memiliki laba dari Negara A dan B masing-masing Rp1.000.000.000; pajak luar negeri Rp300.000.000 dan Rp150.000.000. Batas kredit per negara Rp220.000.000. Berapa total PPh 24 yang diakui?',
    ['Rp300.000.000', 'Rp370.000.000', 'Rp440.000.000', 'Rp450.000.000'],
    1, 'Ordinary credit dihitung per negara: A min(Rp300.000.000, Rp220.000.000) = Rp220.000.000; B min(Rp150.000.000, Rp220.000.000) = Rp150.000.000. Total Rp370.000.000.'),
  uts(7, 'advanced', 'PPh terutang SPT PT Sumber Rezeki Rp600.000.000; kredit PPh 22 Rp50.000.000, PPh 23 Rp70.000.000, PPh 24 Rp120.000.000. Berapa angsuran PPh 25 bulanan berikutnya?',
    ['Rp20.000.000', 'Rp25.000.000', 'Rp30.000.000', 'Rp50.000.000'],
    2, 'Dasar angsuran = Rp600.000.000 − (Rp50.000.000 + Rp70.000.000 + Rp120.000.000) = Rp360.000.000; dibagi 12 menjadi Rp30.000.000 per bulan.'),
  uts(7, 'advanced', 'Omzet Januari tiga gerai ritel WP OPPT Tuan Heru Rp100.000.000, Rp60.000.000, dan Rp40.000.000. Berapa total angsuran PPh 25 dan sifatnya?',
    ['Rp1.500.000, tidak final dan menjadi kredit pajak', 'Rp1.500.000, final', 'Rp750.000, tidak final', 'Rp500.000, final'],
    0, 'Masing-masing gerai membayar 0,75% dari omzetnya: Rp750.000 + Rp450.000 + Rp300.000 = Rp1.500.000. Seluruh setoran OPPT tidak final dan menjadi kredit SPT tahunan.'),
  uts(7, 'advanced', 'PT Industri Maju telah disetujui memperoleh fasilitas Pasal 31A atas investasi aktiva tetap Rp10.000.000.000. Berapa pengurang penghasilan neto tiap tahun?',
    ['Rp300.000.000 selama 10 tahun', 'Rp500.000.000 selama 6 tahun', 'Rp3.000.000.000 setiap tahun', 'Rp5.000.000.000 sekali'],
    1, 'Pasal 31A memberi pengurangan total 30% dari investasi, dibebankan 5% per tahun selama 6 tahun. Lima persen dari Rp10.000.000.000 adalah Rp500.000.000 per tahun.'),
  uts(7, 'advanced', 'PT Cemerlang Abadi beromzet Rp30.000.000.000, PKP Rp3.000.000.000; PPh 22 Rp100.000.000, PPh 23 Rp80.000.000, PPh 24 Rp120.000.000, dan PPh 25 dibayar Rp240.000.000. Berapa PPh Pasal 29?',
    ['Rp25.600.000', 'Rp52.800.000', 'Rp67.200.000', 'Rp307.200.000'],
    2, 'Pasal 31E: PKP fasilitas Rp480.000.000 dikenai 11% dan sisa Rp2.520.000.000 dikenai 22%, sehingga PPh terutang Rp607.200.000. Setelah kredit pihak ketiga Rp300.000.000 dan PPh 25 Rp240.000.000, PPh 29 = Rp67.200.000.'),
];

export const PJK301_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Fasilitas PPh Badan Pasal 31E",
    "difficulty": "medium",
    "q": "PT Makmur memiliki peredaran bruto setahun Rp 4.000.000.000 dengan Penghasilan Kena Pajak Rp 300.000.000. Berapakah PPh Badan terutang PT Makmur?",
    "options": [
      "Rp 66.000.000",
      "Rp 33.000.000",
      "Rp 20.000.000",
      "Rp 15.000.000"
    ],
    "answer": 1,
    "explanation": "Karena omzet < Rp 4,8 Miliar, seluruh PKP mendapat fasilitas pengurangan tarif 50%: Tarif efektif = 50% × 22% = 11%. PPh terutang = 11% × Rp 300.000.000 = Rp 33.000.000."
  },
  {
    "tm": 9,
    "topic": "PPh 21 Skema TER (PP 58/2023)",
    "difficulty": "medium",
    "q": "Berdasarkan PP No. 58/2023 dan PMK 168/2023, pemotongan PPh 21 untuk pegawai tetap pada masa pajak Januari hingga November dihitung dengan cara...",
    "options": [
      "Mengalikan penghasilan neto disetahunkan dengan tarif progresif Pasal 17",
      "Mengalikan penghasilan bruto bulanan secara langsung dengan Tarif Efektif Rata-Rata (TER)",
      "Memotong tarif flat 5% dari seluruh penghasilan kotor pegawai",
      "Mengurangi PTKP bulanan lalu dikalikan tarif 15%"
    ],
    "answer": 1,
    "explanation": "Skema TER mempermudah administrasi masa pajak bulanan Jan-Nov: PPh 21 = Penghasilan Bruto Bulanan × Tarif TER yang sesuai status PTKP."
  },
  {
    "tm": 10,
    "topic": "Natura & Kenikmatan (PMK 66/2023)",
    "difficulty": "medium",
    "q": "Manakah fasilitas natura yang DIKECUALIKAN dari objek PPh Pasal 21 bagi karyawan berdasarkan PMK 66/2023?",
    "options": [
      "Mobil dinas mewah yang dibawa pulang untuk keperluan pribadi",
      "Penyediaan makanan dan minuman bagi seluruh pegawai di tempat kerja secara cuma-cuma",
      "Keanggotaan klub golf eksekutif",
      "Tiket liburan keluarga pegawai ke luar negeri"
    ],
    "answer": 1,
    "explanation": "Makanan/minuman bagi seluruh pegawai di tempat kerja, fasilitas kerja di daerah tertentu, dan peralatan keselamatan kerja dikecualikan dari objek PPh 21."
  },
  {
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal SPT 1771",
    "difficulty": "medium",
    "q": "Dalam laporan laba rugi komersial terdapat Beban Sumbangan HUT RI sebesar Rp 15.000.000 dan Pendapatan Bunga Deposito sebesar Rp 20.000.000. Penyesuaian fiskal yang tepat adalah...",
    "options": [
      "Koreksi Positif Rp 15 jt dan Koreksi Negatif Rp 20 jt",
      "Koreksi Negatif Rp 15 jt dan Koreksi Positif Rp 20 jt",
      "Koreksi Positif Rp 35 jt",
      "Koreksi Negatif Rp 35 jt"
    ],
    "answer": 0,
    "explanation": "Sumbangan non-bencana dikoreksi POSITIF (menambah laba fiskal karena non-deductible). Bunga deposito dikoreksi NEGATIF (mengurangi laba fiskal karena sudah dikenakan PPh Final)."
  },
  {
    "tm": 12,
    "topic": "Konsep PPN & Tarif UU HPP",
    "difficulty": "medium",
    "q": "Berdasarkan UU Harmonisasi Peraturan Perpajakan, tarif umum Pajak Pertambahan Nilai (PPN) yang berlaku saat ini adalah...",
    "options": [
      "10%",
      "11%",
      "12%",
      "15%"
    ],
    "answer": 1,
    "explanation": "Tarif PPN adalah 11% (berlaku sejak 1 April 2022) sesuai ketentuan UU HPP."
  },
  {
    "tm": 13,
    "topic": "Mekanisme Pengkreditan Pajak Masukan PPN",
    "difficulty": "medium",
    "q": "Pengusaha Kena Pajak (PKP) pada masa pajak Mei memiliki Pajak Keluaran Rp 85.000.000 dan Pajak Masukan yang dapat dikreditkan Rp 95.000.000. Posisi PPN pada SPT Masa Mei adalah...",
    "options": [
      "PPN Kurang Bayar Rp 10.000.000",
      "PPN Lebih Bayar Rp 10.000.000 (dapat dikompensasikan atau direstitusi)",
      "PPN Nihil",
      "Dikenakan sanksi denda administrasi keterlambatan"
    ],
    "answer": 1,
    "explanation": "Pajak Masukan (95 jt) > Pajak Keluaran (85 jt) = Lebih Bayar Rp 10.000.000 yang dapat dikompensasi ke masa pajak berikutnya atau direstitusi."
  },
  {
    "tm": 14,
    "topic": "Pemungut PPN (WAPU)",
    "difficulty": "medium",
    "q": "Ketika PKP rekanan menjual alat kantor senilai Rp 50.000.000 (belum PPN) kepada Dinas Pendidikan (Instansi Pemerintah WAPU), maka kas riil yang diterima rekanan dari dinas adalah...",
    "options": [
      "Rp 55.500.000 (termasuk PPN 11%)",
      "Rp 50.000.000 (karena PPN 11% dipungut dan disetor langsung oleh bendahara instansi)",
      "Rp 44.500.000",
      "Rp 49.000.000"
    ],
    "answer": 1,
    "explanation": "Bendahara Instansi Pemerintah selaku WAPU memungut langsung PPN Rp 5,5 juta dan menyetorkannya ke kas negara, sehingga rekanan menerima pembayaran neto DPP Rp 50.000.000."
  }
];

export const PJK301_QUIZ: QuizQuestion[] = [...PJK301_QUIZ_UTS, ...PJK301_QUIZ_UAS];
