import { PJK301_FC_UAS } from './pjk301Uas';
// src/data/flashcards/pjk301.ts
// TM01–TM07 cards use v2 ids: stored SRS/star state is keyed by id, and legacy
// meanings must not be attached to these rebuilt cards. Pra-UAS cards use v3 ids after the scope and meaning changes.
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
  utsCard(1, 1, 'Klasifikasi', 'SPDN orang pribadi dan awal kewajiban badan', 'SPDN OP dapat berdasar tempat tinggal, lebih dari 183 hari dalam 12 bulan, atau niat menetap saat berada di Indonesia. Badan DN mulai saat didirikan atau berkedudukan di Indonesia.'),
  utsCard(1, 2, 'Klasifikasi', 'Objek reguler, final, dan bukan objek', 'Objek reguler masuk PKP dan kredit pajaknya diperhitungkan. Objek final dilaporkan terpisah; warisan yang memenuhi syarat bukan objek.'),
  utsCard(1, 3, 'Hukum', 'Biaya 3M dan biaya suap', 'Biaya 3M terkait penghasilan kena pajak dapat dikurangkan menurut Pasal 6. Suap dan sanksi pajak dikoreksi positif.'),
  utsCard(1, 4, 'Klasifikasi', 'Natura pegawai dan bingkisan hari raya', 'Natura umumnya deductible bagi pemberi kerja dan taxable bagi pegawai; bingkisan hari raya keagamaan bagi seluruh pegawai dikecualikan.'),
  utsCard(1, 5, 'Rumus', 'Batas zakat yang sah', 'Zakat melalui lembaga sah dengan bukti setor dapat mengurangi penghasilan, tetapi tidak boleh menimbulkan atau memperbesar rugi fiskal.'),
  utsCard(1, 6, 'Perbandingan', 'Dividen dalam negeri sebelum dan setelah Cipta Kerja', 'Pra-Cipta Kerja: OP DN final 10%; pengecualian PT/BUMN/BUMD DN mensyaratkan saham minimal 25% dan laba ditahan. Kini badan DN bebas tanpa syarat saham; OP DN perlu investasi di Indonesia.'),

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
  utsCard(5, 3, 'Hukum', 'Ambang dan pengecualian belanja PPh 22', 'Pemerintah s.d. Rp2.000.000; badan usaha tertentu s.d. Rp10.000.000, di luar PPN dan tidak dipecah. Pembelian BBM, gas, pelumas, benda pos, air, dan listrik juga dikecualikan.'),
  utsCard(5, 4, 'Klasifikasi', 'PPh 23 sewa, jasa, hadiah', 'Bunga tertentu, royalti, hadiah non-undian Pasal 23: 15%. Sewa mesin/kendaraan dan cleaning service: 2%. Sewa gedung final 10%; hadiah undian final 25%.'),
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
  ...PJK301_FC_UAS,
];
