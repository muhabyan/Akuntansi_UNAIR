// =============================================================
// src/types.ts — Tipe data terpusat (strict TypeScript)
// =============================================================

/** Key ikon (string) — supaya file data tetap "data murni", bukan JSX. */
export type IconKey =
  | 'calculator'
  | 'book'
  | 'chart'
  | 'file'
  | 'award'
  | 'briefcase';

/** Satu item materi tatap muka / dokumen. */
export interface Material {
  /** Nomor Tatap Muka (1..14). */
  tm: number;
  title: string;
  /** Rujukan bab buku teks resmi, mis. "WKK Ch. 1" atau "CU 1-2 · IMN 1". */
  ref?: string;
  /** Link Google Drive (PDF/slide). Opsional — kalau kosong tombol dinonaktifkan. */
  driveUrl?: string;
  /** Link podcast (mis. NotebookLM). Opsional. */
  podcastUrl?: string;
  sizeMb?: number;
}

export interface Flashcard {
  title: string;
  back: string;
}

/** Satu mata kuliah. */
export interface Course {
  /** Kode lama, mis. "AKK106". */
  code: string;
  /** Kode baru sesuai Buku Panduan 2025/2026, mis. "FEB25603003". */
  newCode?: string;
  name: string;
  sks: number;
  iconKey: IconKey;
  /** Prasyarat resmi, mis. "AKK106 (L)". */
  prasyarat?: string;
  /** Folder Google Drive seluruh mata kuliah. */
  driveFolderUrl?: string;
  /** Daftar referensi/buku teks resmi (dari RPS/silabus). */
  references?: string[];
  materiTM1_7?: Material[];
  materiTM8_14?: Material[];
  flashcards?: Flashcard[];
  /** Jumlah kartu dari deck registry baru; mencegah duplikasi konten untuk metrik katalog. */
  flashcardCount?: number;
  /** Badge fitur pada kartu katalog, diisi dari metadata course, bukan hardcoded per kode. */
  featureBadge?: string;
}

/** Kelompok mata kuliah dalam satu semester (mis. "Keahlian" vs "PDB"). */
export interface CourseGroup {
  title: string;
  /** true = kartu di-highlight (mata kuliah inti akuntansi). */
  highlight?: boolean;
  courses: Course[];
}

/** Satu semester. */
export interface Semester {
  /** id internal, mis. "sem1". */
  id: string;
  number: number;
  title: string;
  desc: string;
  totalSks: number;
  /** true = belum dibuka (terkunci). */
  locked: boolean;
  groups: CourseGroup[];
}

/** Tab di halaman detail mata kuliah. */
export type CourseTabId =
  | 'tm1-7'
  | 'uts'
  | 'tm8-14'
  | 'uas'
  | 'bank-soal'
  | 'quiz'
  | 'referensi'
  | 'flashcard'
  | 'arsip';

/** Tampilan utama aplikasi. */
export type ViewId = 'home' | string; // 'home' atau id semester ('sem1', ...)

// =============================================================
// KONTEN BACAAN (fitur "Baca") — rangkuman materi komprehensif
// =============================================================

export type CalloutVariant = 'info' | 'tip' | 'warning' | 'key';

/** Satu baris jurnal. Baris kredit diberi indentasi otomatis saat render. */
export interface JournalLine {
  account: string;
  debit?: string;
  credit?: string;
  /** true untuk baris akun kredit (akan di-indent). */
  isCredit?: boolean;
}

/** Blok konten. Discriminated union -> aman & mudah dirender. */
export type ContentBlock =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string } // mendukung **tebal** sederhana
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'callout'; variant: CalloutVariant; title?: string; text: string }
  | { kind: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { kind: 'journal'; caption?: string; lines: JournalLine[] }
  | { kind: 'formula'; text: string; note?: string }
  | { kind: 'figure'; title?: string; svg: string; caption?: string; altText?: string }
  | { kind: 'example'; title: string; blocks: ContentBlock[] }
  | { kind: 'solution-reveal'; title: string; prompt?: string; blocks: ContentBlock[] }
  | { kind: 'statement'; spec: StatementSpec }
  | { kind: 'builder'; spec: StatementSpec; instructions?: string }
  | { kind: 'interactive-match'; spec: InteractiveMatchSpec }
  | { kind: 'table-fill'; spec: TableFillSpec }
  | { kind: 'journal-builder'; spec: JournalBuilderSpec }
  | { kind: 't-account-builder'; spec: TAccountBuilderSpec };

// ---- Laporan keuangan terstruktur (contoh penuh & isian interaktif) ----

/** Satu baris dalam sebuah laporan. */
export interface StatementLine {
  /** id unik dalam satu laporan; dipakai oleh baris 'computed'. */
  id?: string;
  label: string;
  /** Nilai benar (kunci). Untuk laporan penuh = nilai yang ditampilkan;
   *  untuk builder = jawaban yang dibandingkan. */
  amount?: number;
  /** Indentasi 0/1/2. */
  indent?: number;
  bold?: boolean;
  /** Garis atas tunggal (subtotal) / ganda (total akhir). */
  rule?: 'top' | 'double' | 'none';
  /** Perilaku di builder:
   *  - 'header'   : judul bagian, tanpa angka
   *  - 'given'    : angka sudah diberikan (tidak bisa diedit)
   *  - 'input'    : kolom isian user
   *  - 'computed' : dihitung otomatis dari baris lain (lihat compute) */
  kind?: 'header' | 'given' | 'input' | 'computed';
  /** Untuk 'computed': daftar id baris yang dijumlah, dengan tanda. */
  compute?: Array<{ id: string; sign?: 1 | -1 }>;
  /** Tampilkan nilai dalam tanda kurung (kontra / negatif), mis. (480.000). */
  bracket?: boolean;
}

/** Spesifikasi laporan keuangan lengkap dengan header 3 baris. */
export interface StatementSpec {
  /** Nama entitas, mis. "PT Surya". */
  entity: string;
  /** Judul laporan, mis. "Income Statement". */
  title: string;
  /** Keterangan di samping judul, mis. "(Partial)". Kosongkan untuk laporan penuh. */
  partial?: string;
  /** Baris periode, mis. "For the Year Ended December 31, 20X1". */
  period: string;
  /** Prefiks mata uang, default "Rp". */
  currency?: string;
  lines: StatementLine[];
}


// ---- Komponen latihan interaktif tambahan (Batch 8) ----
export interface InteractiveMatchSpec {
  title: string;
  instruction?: string;
  /** Pesan umum yang ditampilkan setelah pemeriksaan untuk membantu diagnosis jawaban. */
  feedback?: string;
  choices: string[];
  pairs: Array<{
    id: string;
    prompt: string;
    answer: string;
    /** Pesan spesifik saat jawaban item ini salah. */
    feedback?: string;
  }>;
}

export interface TableFillSpec {
  title: string;
  instruction?: string;
  currency?: string;
  /** Pesan umum yang ditampilkan setelah pemeriksaan untuk membantu diagnosis jawaban. */
  feedback?: string;
  headers: string[];
  rows: Array<{
    id: string;
    label: string;
    cells: Array<{
      id: string;
      readonly?: boolean;
      display?: string;
      answer?: number | string;
      tolerance?: number;
      placeholder?: string;
      /** Tipe jawaban khusus, misalnya percent untuk menerima 50%, 50, 0,5, atau 0.5 secara ekuivalen. */
      answerType?: 'percent' | 'text' | 'number';
      /** Pesan spesifik saat jawaban sel ini salah. */
      feedback?: string;
    }>;
  }>;
}

export interface JournalBuilderSpec {
  title: string;
  instruction?: string;
  currency?: string;
  /** Pesan umum yang ditampilkan setelah pemeriksaan untuk membantu diagnosis jurnal. */
  feedback?: string;
  accountChoices?: string[];
  lines: Array<{
    id: string;
    /** Label transaksi/penyesuaian untuk memisahkan kelompok jurnal dalam latihan. */
    group?: string;
    account: string;
    debit?: number;
    credit?: number;
    tolerance?: number;
    /** Pesan spesifik saat baris jurnal ini salah. */
    feedback?: string;
  }>;
}

export type TAccountSide = 'debit' | 'credit';

export interface TAccountBuilderSpec {
  title: string;
  instruction?: string;
  currency?: string;
  tolerance?: number;
  accounts: Array<{
    name: string;
    rows: Array<{
      id: string;
      debitLabel?: string;
      debitAmount?: number;
      creditLabel?: string;
      creditAmount?: number;
    }>;
    endingBalance?: {
      side: TAccountSide;
      amount: number;
    };
  }>;
}

/** Rangkuman materi satu Tatap Muka. */
export interface Reading {
  tm: number;
  title: string;
  ref?: string;
  intro: string;
  objectives: string[];
  blocks: ContentBlock[];
}

// =============================================================
// KUIS / BANK SOAL
// =============================================================
export type QuizQuestion =
  | MultipleChoiceQuizQuestion
  | MultiSelectQuizQuestion
  | ReportFillQuizQuestion
  | AccountMatchQuizQuestion
  | OrderingQuizQuestion;

export interface QuizQuestionMeta {
  /** ID stabil untuk fingerprint, audit, dan navigasi soal. */
  id?: string;
  /** Nomor tatap muka sumber materi. */
  tm?: number;
  /** Rumpun materi untuk diagnostic scoring, mis. Cash, Receivables, Inventory Cost, atau LCNRV/Retail. */
  topic?: string;
  /** Kompetensi spesifik yang diuji; ditampilkan sebagai rekomendasi belajar setelah kuis. */
  skill?: string;
  /** Level relatif untuk menyusun paket diagnostik. */
  difficulty?: 'basic' | 'medium' | 'advanced';
  /** Grafik SVG opsional untuk soal interpretasi grafik. */
  svg?: string;
  /** Deskripsi tekstual grafik untuk aksesibilitas dan fingerprint. */
  altText?: string;
  /** Referensi sumber akademik yang digunakan untuk menyusun soal. */
  sourceRef?: string;
  /** Anchor atau subbagian materi yang mendasari soal. */
  sourceAnchors?: string[];
}

export interface MultipleChoiceQuizQuestion extends QuizQuestionMeta {
  kind?: 'mcq';
  q: string;
  options: string[];
  /** indeks opsi yang benar (0-based). */
  answer: number;
  explanation?: string;
}


export interface MultiSelectQuizQuestion extends QuizQuestionMeta {
  kind: 'multi-select';
  q: string;
  options: string[];
  /** indeks opsi benar (0-based). Semua harus dipilih agar benar penuh. */
  answers: number[];
  explanation?: string;
}

export interface ReportFillQuizQuestion extends QuizQuestionMeta {
  kind: 'report-fill';
  q: string;
  instruction?: string;
  /** Data mentah kasus yang ditampilkan sebelum mahasiswa mengisi jawaban. */
  data?: string[];
  blanks: Array<{
    id: string;
    label: string;
    answer: number;
    prefix?: string;
    suffix?: string;
    tolerance?: number;
  }>;
  explanation?: string;
}

export interface AccountMatchQuizQuestion extends QuizQuestionMeta {
  kind: 'account-match';
  q: string;
  instruction?: string;
  choices: string[];
  pairs: Array<{
    prompt: string;
    answer: string;
  }>;
  explanation?: string;
}

export interface OrderingQuizQuestion extends QuizQuestionMeta {
  kind: 'ordering';
  q: string;
  instruction?: string;
  /** Seluruh langkah yang tersedia sebagai pilihan. */
  items: string[];
  /** Urutan yang benar dari langkah pertama hingga terakhir. */
  correctOrder: string[];
  explanation?: string;
}

// ---- Flashcard (front/back) & Bank Soal esai untuk fitur belajar ----
export interface StudyCard { front: string; back: string; }

export type FlashcardPhase = 'pra-uts' | 'pra-uas';
export type FlashcardCategory = 'Definisi' | 'Rumus' | 'Grafik' | 'Mekanisme' | 'Asumsi' | 'Perbandingan' | 'Miskonsepsi' | 'Jurnal' | 'Standar' | 'Konsep' | 'Lainnya' | 'Contoh' | 'Dokumen' | 'Pengendalian' | 'Tarif' | 'Objek';

export interface AdvancedStudyCard extends StudyCard {
  id: string;
  phase: FlashcardPhase;
  tm: number;
  topic: string;
  category: FlashcardCategory;
}
export interface BankSoal {
  /** Jenis tampilan/rumpun soal, mis. report, journal, case, calculation. */
  type: string;
  /** Rumusan utama soal yang tampil pada header accordion. */
  question: string;
  /** Ruang lingkup materi, mis. "TM 1–7" atau "TM 8–14". */
  scope?: string;
  /** Level latihan: Dasar, Menengah, Komprehensif, atau sejenisnya. */
  difficulty?: string;
  /** Estimasi waktu pengerjaan, mis. "25–35 menit". */
  estimatedTime?: string;
  /** Konteks kasus sebelum data angka diberikan. */
  context?: string;
  /** Data kasus yang harus digunakan mahasiswa. */
  data?: string[];
  /** Instruksi pengerjaan rinci. */
  instructions?: string[];
  /** Format keluaran yang wajib ditulis mahasiswa. */
  outputFormat?: string[];
  /** Rubrik penilaian ringkas. */
  rubric?: string[];
  /** Panduan jawaban/kunci pembanding. */
  answerGuide: string;
}
