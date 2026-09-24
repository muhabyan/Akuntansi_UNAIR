// src/data/flashcards/pjk301.ts
// TM01–TM07 cards use v2 ids: stored SRS/star state is keyed by id, and legacy
// meanings must not be attached to these rebuilt cards. TM08–TM14 retain their ids.
import type { AdvancedStudyCard } from '../../types';

const UTS_TOPICS: Record<number, string> = {
  1: 'Ketentuan Umum Pajak Penghasilan (PPh Umum) dan PPh Wajib Pajak Orang Pribadi',
  2: 'Perolehan Harta, Penilaian Persediaan, dan Norma Penghitungan Penghasilan Neto (NPPN)',
  3: 'Hubungan Istimewa, Instrumen Pencegahan Penghindaran Pajak, dan Kesepakatan Harga Transfer (APA)',
  4: 'Penyusutan Harta Berwujud, Amortisasi Harta Tak Berwujud, dan Revaluasi Aset Tetap',
  5: 'Pemungutan PPh Pasal 22, Pemotongan PPh Pasal 23/26, Pemungut Marketplace, dan Skema PPh Final UMKM',
  6: 'Pemotongan Pajak Penghasilan Bersifat Final (PPh Pasal 4 ayat 2, PPh Pasal 15, Dividen Wajib Pajak Orang Pribadi)',
  7: 'Kredit Pajak Luar Negeri (PPh 24), Angsuran PPh 25 & WP OPPT, Insentif PPh Pasal 31A & 31E',
};
const utsCard = (tm: number, no: number, category: AdvancedStudyCard['category'], front: string, back: string): AdvancedStudyCard => ({
  id: `pjk202-v2-tm${String(tm).padStart(2, '0')}-${String(no).padStart(2, '0')}`,
  phase: 'pra-uts', tm, topic: UTS_TOPICS[tm], category, front, back,
});

export const PJK301_FC: AdvancedStudyCard[] = [
  utsCard(1, 1, 'Konsep', 'Worldwide income bagi WP dalam negeri', 'Penghasilan dari Indonesia dan luar negeri masuk cakupan PPh Indonesia; WP luar negeri dikenai atas sumber Indonesia.'),
  utsCard(1, 2, 'Klasifikasi', 'Objek reguler, final, dan bukan objek', 'Objek reguler masuk PKP dan kredit pajaknya diperhitungkan. Objek final dilaporkan terpisah; warisan yang memenuhi syarat bukan objek.'),
  utsCard(1, 3, 'Hukum', 'Biaya 3M dan biaya suap', 'Biaya 3M terkait penghasilan kena pajak dapat dikurangkan menurut Pasal 6. Suap dan sanksi pajak dikoreksi positif.'),
  utsCard(1, 4, 'Klasifikasi', 'Natura pegawai dan bingkisan hari raya', 'Natura umumnya deductible bagi pemberi kerja dan taxable bagi pegawai; bingkisan hari raya keagamaan bagi seluruh pegawai dikecualikan.'),
  utsCard(1, 5, 'Rumus', 'Batas zakat yang sah', 'Zakat melalui lembaga sah dengan bukti setor dapat mengurangi penghasilan, tetapi tidak boleh menimbulkan atau memperbesar rugi fiskal.'),
  utsCard(1, 6, 'Rumus', 'PTKP K/2 dan lapisan awal tarif OP', 'PTKP K/2 Rp67.500.000. PKP sampai Rp60.000.000 dikenai 5%; bagian berikutnya sampai Rp250.000.000 dikenai 15%.'),

  utsCard(2, 1, 'Hukum', 'Nilai fiskal barter harta', 'Pasal 10 ayat (2): kedua pihak memakai harga pasar. Laba pengalihan ialah harga pasar dikurangi nilai sisa buku harta yang diserahkan.'),
  utsCard(2, 2, 'Klasifikasi', 'Metode persediaan fiskal yang sah', 'Pasal 10 ayat (6) mengizinkan FIFO atau rata-rata secara taat asas. LIFO harus direkonsiliasi ke metode yang sah.'),
  utsCard(2, 3, 'Rumus', 'FIFO versus rata-rata tertimbang', 'FIFO membebankan lapisan biaya terlama dulu. Rata-rata membagi total biaya barang tersedia untuk dijual dengan total unitnya.'),
  utsCard(2, 4, 'Hukum', 'Syarat memilih NPPN', 'Hanya WP orang pribadi dengan omzet tidak melebihi Rp4,8 miliar dan pemberitahuan dalam tiga bulan pertama; jika terlambat dianggap memilih pembukuan.'),
  utsCard(2, 5, 'Hukum', 'Batas kompensasi rugi fiskal', 'Rugi fiskal WP yang membukukan dapat dipakai lima tahun berturut-turut mulai tahun berikutnya; sisa setelah tahun kelima hangus.'),
  utsCard(2, 6, 'Rumus', 'Fasilitas Pasal 31E pada omzet menengah', 'Untuk omzet di atas Rp4,8 miliar sampai Rp50 miliar, PKP fasilitas = Rp4,8 miliar/omzet × PKP; tarif 11% untuk bagian itu, 22% untuk sisanya.'),

  utsCard(3, 1, 'Hukum', 'Tiga pilar hubungan istimewa', 'Pasal 18 ayat (4): modal langsung/tidak langsung minimal 25%, penguasaan manajemen atau teknologi, atau keluarga sedarah/semenda satu derajat.'),
  utsCard(3, 2, 'Rumus', 'Uji kepemilikan bertingkat', 'Kalikan persentase saham setiap tingkat. Kepemilikan 50% lalu 50% menghasilkan 25%, sehingga memenuhi pilar modal.'),
  utsCard(3, 3, 'Klasifikasi', 'Memilih metode harga transfer', 'CUP membandingkan harga identik; RPM cocok untuk distributor murni; CPM untuk manufaktur kontrak; TNMM untuk margin bersih; PSM untuk kontribusi unik bersama.'),
  utsCard(3, 4, 'Mekanisme', 'Koreksi primer dan sekunder', 'Koreksi primer menyesuaikan harga afiliasi ke harga wajar. Selisih yang tidak dikembalikan dapat menjadi dividen terselubung dan terutang PPh 23/26.'),
  utsCard(3, 5, 'Rumus', 'Thin capitalization DER 4:1', 'Utang fiskal maksimal empat kali ekuitas rata-rata. Bunga atas porsi utang yang melampaui batas dikoreksi positif, bukan seluruh bunga.'),
  utsCard(3, 6, 'Hukum', 'APA bilateral dan masa berlaku', 'APA bilateral melibatkan otoritas pajak negara mitra P3B untuk menyepakati metode harga wajar; berlaku ke depan paling lama lima tahun pajak.'),

  utsCard(4, 1, 'Klasifikasi', 'Kelompok bukan bangunan dan tarifnya', 'Kelompok 1: 4 tahun, 25%/50%; 2: 8 tahun, 12,5%/25%; 3: 16 tahun, 6,25%/12,5%; 4: 20 tahun, 5%/10% (garis lurus/saldo menurun).'),
  utsCard(4, 2, 'Hukum', 'Bangunan permanen dan tidak permanen', 'Permanen: 20 tahun, garis lurus 5%. Tidak permanen: 10 tahun, garis lurus 10%. Metode saldo menurun tidak boleh untuk bangunan.'),
  utsCard(4, 3, 'Rumus', 'Bulan awal penyusutan fiskal', 'Aset siap pakai mulai bulan perolehan, dihitung satu bulan penuh. Aset konstruksi mulai bulan selesai; penundaan sampai menghasilkan memerlukan izin DJP.'),
  utsCard(4, 4, 'Rumus', 'Saldo menurun dan tahun terakhir', 'Tarif dikalikan nilai sisa buku awal tahun; tahun pertama diprorata bulan. Pada akhir masa manfaat, seluruh sisa buku disusutkan sekaligus.'),
  utsCard(4, 5, 'Perbandingan', 'Residu komersial versus fiskal', 'Komersial dapat memakai estimasi residu dan masa manfaat manajemen. Fiskal memakai kelompok baku, residu Rp0, dan selisih bebannya direkonsiliasi.'),
  utsCard(4, 6, 'Hukum', 'Ponsel dan sedan dinas untuk 3M', 'KEP-220/PJ/2002 sudah tidak berlaku. Biaya terkait ponsel dan sedan dinas dapat dibebankan penuh jika dipakai untuk kegiatan 3M menurut aturan kini.'),

  utsCard(5, 1, 'Perbandingan', 'Pemungutan PPh 22 dan pemotongan PPh 23/26', 'PPh 22 dipungut pada transaksi barang oleh pemungut yang ditunjuk; PPh 23/26 dipotong pihak pembayar penghasilan penerima.'),
  utsCard(5, 2, 'Rumus', 'Nilai impor dan API pada PPh 22', 'Nilai impor = CIF + bea masuk. Impor barang umum ber-API dikenai 2,5%; non-API 7,5%, tidak final.'),
  utsCard(5, 3, 'Hukum', 'Ambang belanja pemerintah dan BUMN', 'Belanja pemerintah sampai Rp2.000.000 dan BUMN sampai Rp10.000.000 yang tidak dipecah bebas PPh 22; di atas batas dipungut 1,5%.'),
  utsCard(5, 4, 'Klasifikasi', 'Tarif PPh 23 utama', 'Bunga non-bank dan royalti: 15% bruto. Sewa harta selain tanah/bangunan serta jasa teknik, manajemen, dan konsultan: 2% bruto.'),
  utsCard(5, 5, 'Hukum', 'PPh 26 dan Form DGT', 'Penghasilan sumber Indonesia untuk WPLN non-BUT umumnya dipotong final 20% bruto; tarif P3B lebih rendah perlu Form DGT yang sah.'),
  utsCard(5, 6, 'Rumus', 'UMKM orang pribadi menurut PP 20/2026', 'Tarif final 0,5% berlaku jika omzet tahunan tidak melebihi Rp4.800.000.000. Rp500.000.000 omzet kumulatif pertama bebas; batas tujuh tahun OP telah dihapus.'),

  utsCard(6, 1, 'Konsep', 'Akibat penghasilan dikenai PPh final', 'Penghasilan final dilaporkan terpisah dari PKP reguler. PPh final tidak dikreditkan; biaya yang terkait penghasilan final dikoreksi positif.'),
  utsCard(6, 2, 'Rumus', 'Sewa tanah/bangunan', 'PPh final Pasal 4 ayat (2) sebesar 10% dari sewa bruto termasuk service charge; sewa mesin atau mobil masuk PPh 23.'),
  utsCard(6, 3, 'Klasifikasi', 'Tarif pekerjaan konstruksi', 'PP 9/2022: kualifikasi kecil 1,75%; menengah/besar 2,65%; tanpa kualifikasi 4%; konsultansi bersertifikat 3,5%.'),
  utsCard(6, 4, 'Mekanisme', 'PHTB umum dan saat setor', 'Pengalihan hak tanah/bangunan umum dikenai PPh final 2,5% dari nilai bruto. Penjual menyetor sebelum akta ditandatangani PPAT.'),
  utsCard(6, 5, 'Perbandingan', 'PPh 15 pelayaran vs penerbangan domestik', 'Pelayaran dalam negeri 1,2% bruto dan final. Penerbangan dalam negeri carter 1,8% bruto dan tidak final, sehingga dapat dikreditkan.'),
  utsCard(6, 6, 'Hukum', 'Dividen OP dalam negeri', 'Dividen OP dalam negeri dikenai PPh final 10%, kecuali memenuhi syarat investasi kembali di NKRI paling singkat tiga tahun pajak.'),

  utsCard(7, 1, 'Rumus', 'Batas kredit PPh 24 per negara', 'Batas tiap negara = penghasilan LN/PKP total × PPh Indonesia. Kredit yang diakui ialah nilai lebih rendah antara pajak LN dan batas tersebut.'),
  utsCard(7, 2, 'Hukum', 'Kerugian dan kelebihan pajak luar negeri', 'Rugi luar negeri tidak digabung dengan laba domestik. Pajak LN di atas batas kredit hangus, tidak menjadi biaya atau kompensasi tahun depan.'),
  utsCard(7, 3, 'Rumus', 'Angsuran PPh 25 normal', 'Kurangi PPh terutang SPT lalu dengan kredit PPh 21, 22, 23, dan 24; bagi hasilnya 12 untuk angsuran bulanan.'),
  utsCard(7, 4, 'Rumus', 'WP OPPT per gerai', 'Angsuran PPh 25 WP OPPT = 0,75% dari omzet bulanan setiap tempat usaha; setoran tidak final dan menjadi kredit SPT tahunan OP.'),
  utsCard(7, 5, 'Rumus', 'Tax allowance Pasal 31A', 'WP yang disetujui memperoleh pengurang neto 30% dari investasi aktiva tetap, dialokasikan 5% per tahun selama enam tahun.'),
  utsCard(7, 6, 'Rumus', 'Fasilitas tarif Pasal 31E', 'Omzet sampai Rp4,8 miliar: seluruh PKP bertarif 11%. Di atas itu sampai Rp50 miliar: bagian PKP proporsional 11%, sisanya 22%.'),
  {
    "id": "pjk202-tm08-01",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Review Komprehensif Pra-UTS Perpajakan II",
    "category": "Konsep",
    "front": "Pembeda PPh Final vs Tidak Final",
    "back": "PPh Final tidak dapat dikreditkan di akhir tahun dan penghasilannya tidak digabung dalam perhitungan laba rugi umum fiskal."
  },
  {
    "id": "pjk202-tm08-02",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Review Komprehensif Pra-UTS Perpajakan II",
    "category": "Rumus",
    "front": "Fasilitas 31E saat Omzet Antara 4.8M - 50M",
    "back": "Bagian PKP Fasilitas = (Rp 4,8 M / Omzet Bruto) × Total PKP → dikenakan tarif 11%. Sisa PKP non-fasilitas dikenakan tarif normal 22%."
  },
  {
    "id": "pjk202-tm08-03",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Review Komprehensif Pra-UTS Perpajakan II",
    "category": "Hukum",
    "front": "Kompensasi Kerugian Fiskal (Loss Carryforward)",
    "back": "Kerugian fiskal dapat dikompensasikan dengan penghasilan neto fiskal berturut-turut hingga 5 (lima) tahun pajak berikutnya."
  },
  {
    "id": "pjk202-tm08-04",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Review Komprehensif Pra-UTS Perpajakan II",
    "category": "Konsep",
    "front": "Biaya Litbang yang Boleh Dikurangkan",
    "back": "Biaya penelitian dan pengembangan hanya dapat dikurangkan jika dilakukan di Indonesia dalam jumlah yang wajar."
  },
  {
    "id": "pjk202-tm08-05",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Review Komprehensif Pra-UTS Perpajakan II",
    "category": "Konsep",
    "front": "Rekonsiliasi Pengeluaran Natura (UU HPP)",
    "back": "UU HPP jo. PMK 66/2023: Biaya natura/kenikmatan dapat dibiayakan oleh pemberi kerja sepanjang terkait 3M, dan menjadi objek PPh 21 bagi penerima."
  },
  {
    "id": "pjk202-tm08-06",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Review Komprehensif Pra-UTS Perpajakan II",
    "category": "Konsep",
    "front": "Kunci Sukses Ujian Tengah Semester PPh Badan",
    "back": "Kuasai pemisahan pendapatan final, non-objek, dan fiskal, serta hitungan proporsi fasilitas Pasal 31E secara teliti."
  },
  {
    "id": "pjk202-tm09-01",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Konsep PPh 21/26 Terbaru (TER PP 58/2023 & Natura)",
    "category": "Hukum",
    "front": "Tarif Efektif Rata-Rata (TER) PP 58/2023",
    "back": "Skema pemotongan PPh 21 bulanan masa Januari-November menggunakan tabel TER berdasarkan status PTKP dan rentang penghasilan bruto."
  },
  {
    "id": "pjk202-tm09-02",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Konsep PPh 21/26 Terbaru (TER PP 58/2023 & Natura)",
    "category": "Klasifikasi",
    "front": "Tiga Kategori TER Bulanan",
    "back": "TER A (TK/0, TK/1, K/0), TER B (TK/2, TK/3, K/1, K/2), dan TER C (K/3)."
  },
  {
    "id": "pjk202-tm09-03",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Konsep PPh 21/26 Terbaru (TER PP 58/2023 & Natura)",
    "category": "Mekanisme",
    "front": "Perhitungan PPh 21 Masa Desember",
    "back": "PPh 21 Masa Desember dihitung ulang dengan tarif progresif Pasal 17 ayat 1 huruf a UU PPh setahun penuh, dikurangi PPh 21 yang telah dipotong Jan-Nov."
  },
  {
    "id": "pjk202-tm09-04",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Konsep PPh 21/26 Terbaru (TER PP 58/2023 & Natura)",
    "category": "Tarif",
    "front": "Tarif Progresif PPh Orang Pribadi (UU HPP)",
    "back": "Lapisan 1 (s.d 60 jt: 5%), Lapisan 2 (>60-250 jt: 15%), Lapisan 3 (>250-500 jt: 25%), Lapisan 4 (>500 jt-5 M: 30%), Lapisan 5 (>5 M: 35%)."
  },
  {
    "id": "pjk202-tm09-05",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Konsep PPh 21/26 Terbaru (TER PP 58/2023 & Natura)",
    "category": "Pengecualian",
    "front": "Batasan Bebas Pajak Natura Tertentu (PMK 66/2023)",
    "back": "Makanan/minuman bagi seluruh pegawai, natura di daerah tertentu, peralatan keselamatan kerja, bingkisan hari raya, dan fasilitas olahraga (kecuali golf/pacuan kuda)."
  },
  {
    "id": "pjk202-tm09-06",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Konsep PPh 21/26 Terbaru (TER PP 58/2023 & Natura)",
    "category": "Tarif",
    "front": "Penghasilan Tidak Kena Pajak (PTKP)",
    "back": "WP Sendiri = Rp 54.000.000; Tambahan WP Kawin = Rp 4.500.000; Tambahan per tanggungan keluarga sedarah (maks 3 orang) = Rp 4.500.000."
  },
  {
    "id": "pjk202-tm10-01",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Kalkulasi Komprehensif PPh 21 (Tetap, Lepas, Ahli)",
    "category": "Hukum",
    "front": "Biaya Jabatan Pegawai Tetap",
    "back": "Pengurang penghasilan bruto sebesar 5% dari penghasilan bruto, setinggi-tingginya Rp 500.000 per bulan atau Rp 6.000.000 setahun."
  },
  {
    "id": "pjk202-tm10-02",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Kalkulasi Komprehensif PPh 21 (Tetap, Lepas, Ahli)",
    "category": "Hukum",
    "front": "Iuran Pensiun & BPJS Ketenagakerjaan",
    "back": "Iuran JHT/THT yang dibayar sendiri oleh pegawai dapat dikurangkan dari bruto; iuran yang dibayar perusahaan bukan objek pajak."
  },
  {
    "id": "pjk202-tm10-03",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Kalkulasi Komprehensif PPh 21 (Tetap, Lepas, Ahli)",
    "category": "Mekanisme",
    "front": "Premi JKK & JKM Dibayar Pemberi Kerja",
    "back": "Merupakan penambah penghasilan bruto pegawai yang dipotong PPh 21 saat pembayaran premi oleh perusahaan."
  },
  {
    "id": "pjk202-tm10-04",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Kalkulasi Komprehensif PPh 21 (Tetap, Lepas, Ahli)",
    "category": "Tarif",
    "front": "Pemotongan PPh 21 Tenaga Ahli (Bukan Pegawai)",
    "back": "Dipotong sebesar: [50% × Penghasilan Bruto] × Tarif Progresif Pasal 17 UU PPh."
  },
  {
    "id": "pjk202-tm10-05",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Kalkulasi Komprehensif PPh 21 (Tetap, Lepas, Ahli)",
    "category": "Hukum",
    "front": "Pegawai Harian Lepas (Upah Harian)",
    "back": "Upah s.d Rp 450.000 per hari bebas potong PPh 21, sepanjang kumulatif upah dalam satu bulan kalender belum melebihi Rp 4.500.000."
  },
  {
    "id": "pjk202-tm10-06",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Kalkulasi Komprehensif PPh 21 (Tetap, Lepas, Ahli)",
    "category": "Tarif",
    "front": "PPh 21 atas Uang Pesangon Dibayar Sekaligus",
    "back": "PPh Final PP 68/2009: s.d 50 jt = 0%; >50-100 jt = 5%; >100-500 jt = 15%; >500 jt = 25%."
  },
  {
    "id": "pjk202-tm11-01",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal & SPT Tahunan PPh Badan 1771",
    "category": "Definisi",
    "front": "Koreksi Fiskal Positif",
    "back": "Penyesuaian yang MENAMBAH laba kena pajak (karena beban komersial tidak diakui fiskal atau pendapatan fiskal lebih besar dari komersial)."
  },
  {
    "id": "pjk202-tm11-02",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal & SPT Tahunan PPh Badan 1771",
    "category": "Definisi",
    "front": "Koreksi Fiskal Negatif",
    "back": "Penyesuaian yang MENGURANGI laba kena pajak (karena penghasilan bukan objek, penghasilan dikenakan PPh Final, atau penyusutan fiskal > komersial)."
  },
  {
    "id": "pjk202-tm11-03",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal & SPT Tahunan PPh Badan 1771",
    "category": "Contoh",
    "front": "Contoh Beda Tetap (Permanent Differences)",
    "back": "Biaya sumbangan non-bencana, representasi tanpa daftar nominatif, dividen bebas pajak, denda tilang/pajak."
  },
  {
    "id": "pjk202-tm11-04",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal & SPT Tahunan PPh Badan 1771",
    "category": "Contoh",
    "front": "Contoh Beda Waktu (Temporary Differences)",
    "back": "Perbedaan metode penyusutan aset tetap fiskal vs komersial, penyisihan piutang tak tertagih (cadangan tidak diakui fiskal hingga hapus riil)."
  },
  {
    "id": "pjk202-tm11-05",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal & SPT Tahunan PPh Badan 1771",
    "category": "Konsep",
    "front": "Daftar Nominatif Biaya Promosi & Entertainment",
    "back": "PMK 02/PMK.03/2010 mensyaratkan daftar nominatif penerima biaya hiburan/promosi agar dapat dibiayakan secara fiskal."
  },
  {
    "id": "pjk202-tm11-06",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal & SPT Tahunan PPh Badan 1771",
    "category": "Dokumen",
    "front": "Struktur Lampiran Khusus SPT 1771",
    "back": "Lampiran I (Rekonsiliasi Laba Neto Fiskal), Lampiran II (Rincian HPP & Biaya), Lampiran III (Kredit Pajak Dalam Negeri), Lampiran IV (PPh Final & Non Objek)."
  },
  {
    "id": "pjk202-tm12-01",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Dasar Hukum PPN & PPnBM, PKP, BKP/JKP, & Fasilitas",
    "category": "Konsep",
    "front": "Karakteristik PPN Indonesia",
    "back": "Pajak tidak langsung, pajak objektif, multi-stage tax dengan mekanisme kredit faktur pajak, dan non-kumulatif."
  },
  {
    "id": "pjk202-tm12-02",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Dasar Hukum PPN & PPnBM, PKP, BKP/JKP, & Fasilitas",
    "category": "Tarif",
    "front": "Tarif PPN UU Harmonisasi Peraturan Perpajakan",
    "back": "Tarif PPN adalah 11% (berlaku sejak 1 April 2022) dan dijadwalkan menjadi 12% paling lambat 1 Januari 2025 sesuai UU HPP."
  },
  {
    "id": "pjk202-tm12-03",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Dasar Hukum PPN & PPnBM, PKP, BKP/JKP, & Fasilitas",
    "category": "Konsep",
    "front": "Syarat Pengukuhan Pengusaha Kena Pajak (PKP)",
    "back": "Pengusaha yang melakukan penyerahan BKP/JKP dengan peredaran bruto melebihi Rp 4,8 Miliar dalam satu tahun buku wajib dikukuhkan sebagai PKP."
  },
  {
    "id": "pjk202-tm12-04",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Dasar Hukum PPN & PPnBM, PKP, BKP/JKP, & Fasilitas",
    "category": "Pengecualian",
    "front": "Bukan Barang Kena Pajak (Non-BKP UU HPP)",
    "back": "Makanan dan minuman yang disajikan di hotel/restoran (objek pajak daerah PB1), uang, emas batangan untuk cadangan devisa, dan surat berharga."
  },
  {
    "id": "pjk202-tm12-05",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Dasar Hukum PPN & PPnBM, PKP, BKP/JKP, & Fasilitas",
    "category": "Tarif",
    "front": "Barang Kena Pajak Tertentu yang Dibebaskan PPN",
    "back": "Barang kebutuhan pokok (beras, daging, kedelai), jasa kesehatan medik, jasa pendidikan, jasa keuangan, dan jasa angkutan umum."
  },
  {
    "id": "pjk202-tm12-06",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Dasar Hukum PPN & PPnBM, PKP, BKP/JKP, & Fasilitas",
    "category": "Konsep",
    "front": "Pajak Penjualan atas Barang Mewah (PPnBM)",
    "back": "Dikenakan hanya satu kali pada tingkat pabrikan atau impor barang mewah; tarif berkisar antara 10% s.d 200% dan TIDAK DAPAT dikreditkan."
  },
  {
    "id": "pjk202-tm13-01",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Mekanisme e-Faktur Pajak, DPP Nilai Lain & PM",
    "category": "Prinsip",
    "front": "Mekanisme Pengkreditan Pajak Masukan (PM)",
    "back": "Pajak Masukan (PM) dapat dikreditkan dengan Pajak Keluaran (PK) untuk masa pajak yang sama; jika PK > PM = Kurang Bayar."
  },
  {
    "id": "pjk202-tm13-02",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Mekanisme e-Faktur Pajak, DPP Nilai Lain & PM",
    "category": "Konsep",
    "front": "Pajak Masukan yang Tidak Dapat Dikreditkan",
    "back": "PM atas perolehan BKP/JKP sebelum dikukuhkan PKP, perolehan yang tidak berhubungan langsung dengan kegiatan usaha (3M), dan faktur cacat."
  },
  {
    "id": "pjk202-tm13-03",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Mekanisme e-Faktur Pajak, DPP Nilai Lain & PM",
    "category": "Hukum",
    "front": "Dasar Pengenaan Pajak (DPP) Nilai Lain",
    "back": "Penyerahan jasa pengiriman paket (DPP = 10% dari jumlah tagihan), jasa biro perjalanan, dan pemakaian sendiri untuk tujuan konsumtif."
  },
  {
    "id": "pjk202-tm13-04",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Mekanisme e-Faktur Pajak, DPP Nilai Lain & PM",
    "category": "Konsep",
    "front": "Format Nomor Seri Faktur Pajak (NSFP)",
    "back": "Terdiri dari 16 digit angka yang dialokasikan oleh Direktorat Jenderal Pajak (DJP) melalui aplikasi e-Nofa."
  },
  {
    "id": "pjk202-tm13-05",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Mekanisme e-Faktur Pajak, DPP Nilai Lain & PM",
    "category": "Konsep",
    "front": "Batas Waktu Upload e-Faktur (PER-03/PJ/2022)",
    "back": "e-Faktur wajib diunggah (upload) dan memperoleh persetujuan (approval) DJP paling lambat tanggal 15 bulan berikutnya setelah tanggal pembuatan faktur."
  },
  {
    "id": "pjk202-tm13-06",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Mekanisme e-Faktur Pajak, DPP Nilai Lain & PM",
    "category": "Pengecualian",
    "front": "Faktur Pajak Digunggung",
    "back": "Pedagang eceran (retail) diperkenankan menerbitkan faktur pajak tanpa mencantumkan identitas dan tanda tangan pembeli (struk kasir/receipt)."
  },
  {
    "id": "pjk202-tm14-01",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Restitusi PPN, PPN WAPU, Pajak Karbon & Review UAS",
    "category": "Mekanisme",
    "front": "Restitusi PPN atas Kelebihan Bayar",
    "back": "Kelebihan Pajak Masukan atas Keluaran dapat dikompensasikan ke masa pajak berikutnya atau dimohonkan restitusi (pengembalian kas) di akhir tahun."
  },
  {
    "id": "pjk202-tm14-02",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Restitusi PPN, PPN WAPU, Pajak Karbon & Review UAS",
    "category": "Tarif",
    "front": "Pengembalian Pendahuluan Kelebihan Pajak (Pasal 17C/17D)",
    "back": "Restitusi dipercepat tanpa pemeriksaan awal bagi PKP kriteria tertentu (WP patuh), eksportir berisiko rendah, dan nilai lebih bayar tertentu."
  },
  {
    "id": "pjk202-tm14-03",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Restitusi PPN, PPN WAPU, Pajak Karbon & Review UAS",
    "category": "Mekanisme",
    "front": "Pemungut PPN (WAPU)",
    "back": "Instansi Pemerintah (PMK 59/2022), BUMN tertentu (PMK 8/2021), dan Kontraktor Migas wajib memungut dan menyetor langsung PPN rekanan ke kas negara."
  },
  {
    "id": "pjk202-tm14-04",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Restitusi PPN, PPN WAPU, Pajak Karbon & Review UAS",
    "category": "Hukum",
    "front": "Pajak Karbon (Carbon Tax - UU HPP)",
    "back": "Dikenakan atas emisi karbon yang memberikan dampak negatif bagi lingkungan hidup dengan tarif minimal Rp 30 per kilogram CO2e."
  },
  {
    "id": "pjk202-tm14-05",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Restitusi PPN, PPN WAPU, Pajak Karbon & Review UAS",
    "category": "Konsep",
    "front": "Fokus Utama Ujian Akhir Semester Perpajakan II",
    "back": "Kuasai Rekonsiliasi Fiskal Laba Rugi 1771, PPh 21 TER, pengkreditan Faktur Pajak PPN, dan penentuan DPP PPh Final."
  },
  {
    "id": "pjk202-tm14-06",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Restitusi PPN, PPN WAPU, Pajak Karbon & Review UAS",
    "category": "Konsep",
    "front": "Tips Menyelesaikan Rekonsiliasi Fiskal",
    "back": "Periksa bukti nominatif beban representasi, pisahkan biaya kenikmatan natura yang dikecualikan, dan hitung amortisasi fiskal secara independen."
  }
];
