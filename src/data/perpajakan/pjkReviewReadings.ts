import type { Reading } from '../../types';
import { parseMarkdownToBlocks } from '../courses/courseRegistry';

const UTS_MARKDOWN = `
### Review Komprehensif Perpajakan I (Pra-UTS)

Materi Pra-UTS mencakup fondasi dasar hukum pajak dan Ketentuan Umum Perpajakan (KUP).

**1. Kebijakan Fiskal & Pengertian Pajak**
Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan Undang-Undang, dengan tidak mendapatkan imbalan secara langsung.
Fungsi Pajak:
- *Budgetair* (sumber penerimaan negara)
- *Regulerend* (mengatur ekonomi, misal pajak karbon)

**2. Teori & Sistem Pemungutan Pajak**
- *Official Assessment System*: Fiskus yang menghitung dan menetapkan pajak terutang.
- *Self Assessment System*: Wajib Pajak menghitung, menyetor, dan melaporkan pajaknya sendiri.
- *Withholding System*: Pihak ketiga memotong/memungut pajak.

**3. Hukum Pajak Internasional**
Menangani yurisdiksi perpajakan antar negara untuk menghindari pajak berganda. Asas yang digunakan: domisili (residence principle) dan sumber (source principle). Solusi pajak berganda dilakukan melalui *Tax Treaty* (P3B).

**4. KUP: NPWP, Hak dan Kewajiban**
NPWP wajib bagi WP yang telah memenuhi syarat subjektif dan objektif. WP memiliki kewajiban mendaftar, menghitung, menyetor, dan melapor (SPT). Hak WP meliputi hak atas restitusi, hak mengajukan keberatan, dan hak atas kerahasiaan data.

**5. Pembayaran, Pelaporan, dan Sanksi**
Keterlambatan pembayaran dikenakan sanksi bunga per bulan sesuai tarif KMK ditambah *uplift factor*. Keterlambatan pelaporan SPT dikenakan denda administrasi (misal Rp100.000 untuk SPT Masa, Rp1.000.000 untuk SPT Tahunan Badan).

**6. Pembukuan vs Pencatatan**
- **Pembukuan**: Wajib bagi WP Badan dan WP OP yang melakukan kegiatan usaha bebas dengan peredaran bruto > Rp4,8 Miliar.
- **Pencatatan**: Lebih sederhana, berlaku untuk WP OP dengan peredaran bruto tertentu atau karyawan.

> [!TIP]
> Fokus pada perhitungan sanksi bunga administrasi karena sering keluar di ujian!
`;

const UAS_MARKDOWN = `
### Review Komprehensif Perpajakan I (Pra-UAS)

Materi Pra-UAS bergeser ke arah sengketa pajak, penagihan, bea meterai, dan Pajak Daerah (PDRD).

**1. Penelitian, Pemeriksaan & Penyidikan**
- **Penelitian**: Pengecekan formal terhadap SPT.
- **Pemeriksaan**: Serangkaian kegiatan menghimpun dan mengolah data untuk menguji kepatuhan. Produk akhirnya bisa berupa SKPKB, SKPKBT, SKPN, atau SKPLB.
- **Penyidikan**: Tindakan mencari bukti tindak pidana di bidang perpajakan.

**2. Penetapan & Ketetapan Pajak (SKP)**
Daluwarsa penetapan pajak umumnya 5 tahun. SKPKBT (Tambahan) hanya diterbitkan jika ada novum (data baru) yang belum terungkap pada pemeriksaan sebelumnya.

**3. Keberatan, Banding, dan Gugatan**
- **Keberatan**: Diajukan ke Dirjen Pajak maksimal 3 bulan sejak SKP dikirim. Harus melunasi pajak yang disetujui. Sanksi jika ditolak: 50%.
- **Banding**: Diajukan ke Pengadilan Pajak maksimal 3 bulan sejak keputusan keberatan diterima. Sanksi jika ditolak: 60%.
- **Gugatan**: Diajukan atas pelaksanaan penagihan atau keputusan selain ketetapan pajak.

**4. Penagihan Pajak dengan Surat Paksa**
Alur penagihan:
1. Jatuh tempo SKP (1 bulan)
2. Surat Teguran (setelah 7 hari)
3. Surat Paksa (setelah 21 hari)
4. Surat Perintah Melaksanakan Penyitaan / SPMP (setelah 2x24 jam)
5. Pengumuman Lelang (setelah 14 hari)
6. Pelaksanaan Lelang (setelah 14 hari)

**5. Bea Meterai (UU No. 10 Tahun 2020)**
Tarif tunggal Rp10.000. Dikenakan pada dokumen perdata (perjanjian, akta notaris) dan dokumen uang dengan nominal > Rp5.000.000. Surat jalan dan ijazah bebas dari bea meterai.

**6. Pajak Daerah (UU HKPD)**
- **Pajak Provinsi**: PKB, BBNKB, Pajak Alat Berat (PAB), PBBKB, Pajak Air Permukaan (PAP), Pajak Rokok, dan Opsen.
- **Pajak Kabupaten/Kota**: PBB-P2, BPHTB, PBJT (makanan, tenaga listrik, perhotelan, parkir, kesenian), Reklame, PAT, MBLB, Sarang Walet.

> [!WARNING]
> Ingat, dengan berlakunya UU HKPD, Pajak Penerangan Jalan dan Pajak Parkir dilebur ke dalam PBJT (Pajak Barang dan Jasa Tertentu).
`;

export const PJK201_REVIEW_READINGS: Record<string, Reading> = {
  uts: {
    tm: 0,
    title: 'Review Simulasi UTS Perpajakan I',
    ref: 'Kompilasi TM 1-7 Perpajakan',
    intro: 'Rangkuman persiapan ujian tengah semester mencakup KUP, Hukum Pajak Dasar, dan Pembukuan.',
    objectives: ['Memahami KUP', 'Menghitung sanksi', 'Membedakan jenis pajak'],
    blocks: parseMarkdownToBlocks(UTS_MARKDOWN, { enableLegal: true }),
  },
  uas: {
    tm: 0,
    title: 'Review Simulasi UAS Perpajakan I',
    ref: 'Kompilasi TM 8-15 Perpajakan',
    intro: 'Rangkuman komprehensif untuk persiapan ujian akhir semester mencakup SKP, Keberatan, Penagihan, Bea Meterai, dan PDRD HKPD.',
    objectives: ['Memahami alur keberatan dan banding', 'Memahami alur surat paksa', 'Menganalisis jenis Pajak Daerah HKPD'],
    blocks: parseMarkdownToBlocks(UAS_MARKDOWN, { enableLegal: true }),
  }
};
