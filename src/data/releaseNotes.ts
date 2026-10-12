// Daftar rilis aplikasi. Rilis terbaru ada di urutan pertama.
// Saat ada pembaruan yang perlu diumumkan: tambahkan satu objek baru di paling atas dan naikkan versinya.
// UpdateNotifier membaca LATEST_RELEASE, jadi tidak ada versi lain yang perlu diubah.
export interface AppRelease {
  version: string;
  /** Tanggal rilis dalam bentuk yang siap tampil. */
  date: string;
  /** Satu kalimat pendek untuk judul notifikasi. */
  headline: string;
  notes: string[];
}

export const RELEASES: AppRelease[] = [
  {
    version: 'v1.3.6',
    date: '12 Oktober 2026',
    headline: 'Manajemen Keuangan lengkap menuju UAS',
    notes: [
      'MNK102 mengikuti TM 9 sampai TM 15 pada kontrak kuliah: struktur modal, dividen, modal kerja, multinasional, merger dan akuisisi, serta corporate failure.',
      'Tersedia 60 kuis, 42 flashcard pra-UAS, dan 14 kasus dengan rujukan halaman dan pembahasan langkah hitungan. Bacaan membedakan bab buku edisi 15 dan 16 serta asumsi angka dari aturan atau data aktual.',
      'Ulasan UTS tetap tersedia, terpisah dari tujuh TM pra-UAS. TM 15 berdiri sendiri; model distress dijelaskan dengan populasi dan batasnya.',
    ],
  },
  {
    version: 'v1.3.5',
    date: '12 Oktober 2026',
    headline: 'Koreksi katalog Akuntansi semester 2 sampai 5',
    notes: [
      'Kode Semester III mengikuti tabel panduan: MNU108, MNK102, AKK202, AKK203, PJK301, SII306, dan AKA201, beserta kode FEB25603011 sampai FEB25603017 dan prasyaratnya.',
      'Akuntansi Manajemen memakai AKM301 (FEB25603020). Accounting Data Analytics memakai AKS301; Manajemen Stratejik tetap MNU307 di semester 5.',
      'AKM III mengikuti rincian panduan: 2 SKS, dengan total semester 4 sebesar 20 SKS. Prasyarat Internal Audit dan Metode Penelitian dinormalisasi menjadi SII306 dan MAS122.',
      'Tautan lama ASP, Manajemen Keuangan, dan Akuntansi Manajemen tetap membuka materi yang sama. Penyimpanan SIA dengan kode lama AKS301 dipindahkan sekali ke SII306 agar tidak bentrok dengan Analytics.',
    ],
  },
  {
    version: 'v1.3.4',
    date: '11 Oktober 2026',
    headline: 'Materi dan latihan pra-UAS Perpajakan II',
    notes: [
      'Perpajakan II PJK301 mencakup TM 9 sampai TM 15 sesuai RPP: 60 kuis, 42 flashcard, dan 14 kasus dengan rujukan halaman atau paragraf serta pembahasan hitungan bertahap.',
      'Contoh membedakan aturan tahun 2024 dan 2025, termasuk TER, natura, PPh OP/badan, PPN, serta simulasi pajak karbon dengan asumsi dan batas sumber yang dijelaskan.',
    ],
  },
  {
    version: 'v1.3.3',
    date: '11 Oktober 2026',
    headline: 'Latihan UAS AKM II dalam bahasa Inggris',
    notes: [
      'Kuis pra-UAS AKM II diperluas menjadi 60 soal berbahasa Inggris, dengan pembahasan Indonesia, rujukan halaman buku, dan pengecoh yang menguji kesalahan hitungan atau pencatatan.',
      'Bank soal pra-UAS berisi 14 kasus dengan tugas hitungan, jurnal, analisis, dan koreksi kesalahan. Prioritas latihan mengikuti RPP dan contoh Kieso sebagai perkiraan fokus ujian.',
    ],
  },
  {
    version: 'v1.3.2',
    date: '11 Oktober 2026',
    headline: 'Perbaikan materi dan latihan AKM II pasca-UTS',
    notes: [
      'AKM II TM 9 sampai TM 15 diperiksa terhadap buku Kieso IFRS edisi kelima dan RPP lokal. Rujukan bab, dividen saham, waran, EPS, serta investasi utang dan ekuitas diperbaiki.',
      'TM 15 kini memuat investasi ekuitas dan metode ekuitas. Latihan pasca-UTS berisi 35 kuis, 42 flashcard, dan 7 kasus esai serta hitungan dengan rujukan halaman PDF buku.',
    ],
  },
  {
    version: 'v1.3.1',
    date: '11 Oktober 2026',
    headline: 'Latihan pasca-UTS Pengauditan Berbasis Risiko I',
    notes: [
      'AKA201 TM 9 sampai TM 15 mendapat 56 soal kuis, 84 flashcard, dan 21 soal esai serta hitungan di bank soal. Topik dan penomoran mengikuti materi pasca-UTS.',
      'Pembahasan latihan memuat rujukan halaman atau paragraf sumber, istilah Inggris dengan penjelasan Indonesia, serta catatan pada angka dan rumusan yang berbeda dalam sumber.',
    ],
  },
  {
    version: 'v1.3.0',
    date: '11 Oktober 2026',
    headline: 'Materi pasca-UTS dan penataan tampilan',
    notes: [
      'Pengauditan Berbasis Risiko I (AKA201) TM 9 sampai TM 15 ditulis ulang mengikuti kontrak kuliah: perencanaan audit, bukti dan prosedur analitis, dokumentasi audit, model risiko, pengendalian internal, pengujian pengendalian dan substantif, sampai CAATs dan program audit. Setiap pertemuan dilengkapi diagram, tabel bernama, kasus, dan uji pemahaman.',
      'Penomoran pertemuan pasca-UTS mengikuti kontrak: TM 9 sampai TM 15 untuk AKK202, MNU108, PJK301, MNK201, AKA201, dan MNS301; TM 8 sampai TM 14 untuk Akuntansi Sektor Publik dan SIA. Pertemuan yang belum terbit tampil sebagai "Sedang disiapkan".',
      'Daftar mata kuliah semester 4 dan 5 disesuaikan dengan buku panduan. Mata kuliah yang belum terisi menampilkan keterangan "Materi sedang disiapkan".',
      'Manajemen Strategik (MNS301) mendapat 132 soal kuis, 176 flashcard, dan 14 kasus bank soal untuk TM 1 sampai TM 7.',
      'Judul tabel di mode laptop dan desktop dirapikan: ikon sejajar dengan baris pertama judul dan margin kirinya sama dengan teks kolom.',
    ],
  },
  {
    version: 'v1.2.0',
    date: 'Sebelum Oktober 2026',
    headline: 'Pembaruan otomatis dan bank soal semester 3',
    notes: [
      'Pembaruan otomatis real-time: deteksi update Vercel seketika saat membuka atau kembali ke aplikasi.',
      'Bank Soal & Kuis Komprehensif Semester 3 (Manajemen Keuangan, Akuntansi Sektor Publik, Akuntansi Manajemen, SIA).',
      'Penataan lisensi perlindungan hak cipta resmi pada seluruh kurikulum dan sistem.',
      'Optimasi performa caching dan pembersihan cache usang secara otomatis.',
    ],
  },
];

export const LATEST_RELEASE: AppRelease = RELEASES[0];
