// =============================================================
// src/data/courseData.ts
// Sumber data utama (tanpa database). Materi TM & referensi
// diambil dari RPS/Silabus resmi Departemen Akuntansi FEB UNAIR
// dan Buku Panduan Sarjana 2025/2026 (Prodi S1 Akuntansi).
//
// =============================================================
import type { Semester, Material, Flashcard } from '../types';

/** Bangun array Material dari daftar [judul, ref]. */
function materi(items: Array<[string, string?]>, startTm = 1): Material[] {
  return items.map(([title, ref], i) => ({
    tm: startTm + i,
    title,
    ref,
  }));
}

/** Placeholder cepat untuk mata kuliah yang belum ada silabusnya. */
function makeMateri(prefix: string, from: number, to: number): Material[] {
  const out: Material[] = [];
  for (let tm = from; tm <= to; tm++) {
    out.push({ tm, title: `${prefix} — Tatap Muka ${tm}` });
  }
  return out;
}

// =====================================================================
// MATERI RESMI PER MATA KULIAH
// =====================================================================

// --- AKK106 Akuntansi Keuangan Dasar (Weygandt/Kimmel/Kieso = WKK) ----
// Silabus Akuntansi Dasar, Departemen Akuntansi FEB UNAIR.
const AKK106_TM1_7 = materi([
  ['Accounting in Action', 'WKK Ch. 1'],
  ['The Recording Process', 'WKK Ch. 2'],
  ['Adjusting the Accounts', 'WKK Ch. 3'],
  ['Completing the Accounting Cycle', 'WKK Ch. 4'],
  ['Accounting for Merchandising Operations', 'WKK Ch. 5'],
  ['Inventories', 'WKK Ch. 6'],
  ['Fraud, Internal Control, and Cash', 'WKK Ch. 7'],
], 1);
const AKK106_TM8_14 = materi([
  ['Accounting for Receivables', 'WKK Ch. 8'],
  ['Plant Assets, Natural Resources, and Intangible Assets', 'WKK Ch. 9'],
  ['Liabilities', 'WKK Ch. 10'],
  ['Corporations: Organization, Share Transactions, Dividends & Retained Earnings', 'WKK Ch. 11'],
  ['Investments', 'WKK Ch. 12'],
  ['Statement of Cash Flows', 'WKK Ch. 13'],
  ['Financial Statement Analysis', 'WKK Ch. 14'],
], 8);
const AKK106_REF = [
  'Weygandt, J. J., Kimmel, P. D., & Kieso, D. E. (2019). Financial Accounting: IFRS Edition (3rd ed.). John Wiley & Sons. (WKK)',
];

// --- AKK201 Akuntansi Keuangan Menengah I (Kieso Intermediate IFRS) ---
// Pembagian Mengajar AKM 1 Genap 2024-2025.
const AKK201_TM1_7 = materi([
  ['The Environment and Conceptual Framework of Financial Reporting', 'Kieso IFRS 5e · Ch. 1'],
  ['The Accounting Information System', 'Kieso IFRS 5e · Ch. 2'],
  ['The Accounting Information System (lanjutan)', 'Kieso IFRS 5e · Ch. 2'],
  ['Income Statement, Related Information, and Revenue Recognition', 'Kieso IFRS 5e · Ch. 3'],
  ['Statement of Financial Position and Statement of Cash Flows', 'Kieso IFRS 5e · Ch. 4'],
  ['Statement of Financial Position and Statement of Cash Flows (lanjutan)', 'Kieso IFRS 5e · Ch. 4'],
  ['Accounting and The Time Value of Money', 'Kieso IFRS 5e · Ch. 5'],
], 1);
const AKK201_TM8_14 = materi([
  ['Cash and Receivables', 'Kieso IFRS 5e · Ch. 6'],
  ['Cash and Receivables (lanjutan)', 'Kieso IFRS 5e · Ch. 6'],
  ['Valuation of Inventories: A Cost-Basis Approach', 'Kieso IFRS 5e · Ch. 7'],
  ['Valuation of Inventories: A Cost-Basis Approach (lanjutan)', 'Kieso IFRS 5e · Ch. 7'],
  ['Inventories: Additional Valuation Issues', 'Kieso IFRS 5e · Ch. 8'],
  ['Inventories: Additional Valuation Issues (lanjutan)', 'Kieso IFRS 5e · Ch. 8'],
  ['Review / Pemantapan UAS', 'Kieso IFRS 5e · Review Ch. 6–8'],
], 8);
const AKK201_REF = [
  'Kieso, D. E., Weygandt, J. J., & Warfield, T. D. Intermediate Accounting: IFRS Edition (5th ed.). John Wiley & Sons.',
];

// --- AKM201 Akuntansi Biaya (Carter/Usry = CU; Narsa = IMN) -----------
// SILABI Akuntansi Biaya 2026, Departemen Akuntansi FEB UNAIR.
const AKM201_TM1_7 = materi([
  ['Pengantar Akuntansi Biaya, Sistem Akuntansi Biaya & Klasifikasi Biaya', 'CU 1–2 · IMN 1'],
  ['Analisis Perilaku Biaya', 'CU 3 · IMN 2'],
  ['Siklus Biaya, Sistem Biaya & Akumulasi Biaya', 'CU 4–5 · IMN 3'],
  ['Job Order Costing (Biaya Berdasarkan Pesanan)', 'CU 5 · IMN 4'],
  ['Process Costing — Metode Rata-rata (Average)', 'CU 6 · IMN 5'],
  ['Process Costing — Metode FIFO', 'CU 6 · IMN 5'],
  ['Biaya Kualitas & Akuntansi untuk Kerugian Produksi', 'CU 7 · IMN 6'],
], 1);
const AKM201_TM8_14 = materi([
  ['Produk Gabungan & Produk Sampingan', 'CU 8 · IMN 7'],
  ['Perencanaan & Pengendalian Bahan Baku Langsung', 'CU 9 · IMN 8'],
  ['Perencanaan & Pengendalian Tenaga Kerja Langsung', 'CU 10 · IMN 9'],
  ['Biaya Overhead Pabrik: Perencanaan, Dibebankan & Aktual', 'CU 11 · IMN 10'],
  ['Biaya Overhead Pabrik: Departementalisasi', 'CU 12 · IMN 11'],
  ['Activity-Based Costing (ABC)', 'CU 13 · IMN 12'],
  ['Review Materi UAS', '—'],
], 8);
const AKM201_REF = [
  'Carter, W. K., Hwang, & Chou. (2015). Cost Accounting (Asia Edition).',
  'Carter, W. K., & Usry, M. F. (2002). Cost Accounting (13th/14th ed.). (CU)',
  'Narsa, I Made. (2011). Akuntansi Kos. Surabaya: Pusat Penerbitan Universitas Airlangga. (IMN)',
];

// --- PJK201 Perpajakan I (UU KUP, UU PPh, UU HPP) ---------------------
const PJK201_TM1_7 = materi([
  ['Pengantar & Dasar-Dasar Perpajakan', 'UU KUP'],
  ['Ketentuan Umum & Tata Cara Perpajakan (KUP)', 'UU KUP'],
  ['NPWP, NIK sebagai NPWP & Pengukuhan PKP', 'UU KUP'],
  ['SPT: Pembayaran, Penyetoran & Pelaporan', 'UU KUP'],
  ['PPh Pasal 21 — Konsep, Subjek & Objek', 'UU PPh'],
  ['PPh Pasal 21 — Penghitungan (Skema TER & Tahunan)', 'PP 58/2023'],
  ['PPh Pasal 22', 'UU PPh'],
], 1);
const PJK201_TM8_14 = materi([
  ['Penelitian, Pemeriksaan, dan Penyidikan Pajak', 'UU KUP · PMK 15/2025 · PMK 81/2024'],
  ['Penetapan & Ketetapan Pajak, Restitusi Pajak', 'UU KUP · PMK 28/2026 · PMK 81/2024 s.t.d.t.d. PMK 1/2026'],
  ['Sengketa Pajak: Keberatan, Banding, Gugatan & PK', 'UU KUP · UU 14/2002 · Putusan MK 26/PUU-XXI/2023'],
  ['Penagihan Pajak, Surat Paksa, Hak Mendahulu & Tindak Pidana Fiskal', 'UU KUP · UU PPSP · PMK 61/2023'],
  ['Bea Meterai', 'UU 10/2020 · PMK 78/2024'],
  ['Pajak Daerah & Retribusi Daerah (1): Pajak Provinsi', 'UU 1/2022 HKPD · PP 35/2023'],
  ['Pajak Daerah & Retribusi Daerah (2): PBB-P2, BPHTB & Pajak Kabupaten/Kota', 'UU 1/2022 HKPD · PP 35/2023'],
], 8);
const PJK201_REF = [
  'Materi_Perpajakan_I_TM8-14_Kompilasi (2).md — kompilasi Perpajakan I TM8-14, diperbarui sampai Juni 2026.',
  'UU KUP (UU No. 6/1983 sebagaimana terakhir diubah dengan UU No. 6/2023; perubahan substantif melalui UU HPP No. 7/2021), UU No. 10/2020 tentang Bea Meterai, dan UU No. 1/2022 tentang HKPD.',
  'PMK 15/2025, PMK 17/2025, PMK 28/2026, PMK 78/2024, PMK 81/2024 s.t.d.t.d. PMK 1/2026, PMK 61/2023, PMK 118/2024, dan PMK 111/2025 sesuai cakupan materi.',
];

// --- MAS122 Statistik untuk Akuntan (Lind = DA; Anderson = AA) --------
// Silabus Statistik untuk Akuntan, Prof. Dr. I Made Narsa.
const MAS122_TM1_7 = materi([
  ['Pengenalan Statistik dalam Akuntansi dan Bisnis', 'DA 1 · AA 1'],
  ['Statistik Deskriptif — Tendensi Sentral (mean, median, modus)', 'DA 2–3 · AA 3'],
  ['Statistik Deskriptif — Dispersi (rentang, varians, standar deviasi)', 'DA 2–3 · AA 4'],
  ['Probabilitas & Distribusi (normal, binomial)', 'DA 5–7 · AA 6–9'],
  ['Estimasi (poin & interval)', 'DA 9 · AA 11'],
  ['Uji Hipotesis — Bagian 1 (mean & proporsi)', 'DA 10 · AA 12'],
  ['Uji Hipotesis — Bagian 2 (perbedaan rata-rata; error tipe I & II)', 'DA 11 · AA 12'],
], 1);
const MAS122_TM8_14 = materi([
  ['Analisis Varians (ANOVA)', 'DA 12'],
  ['Analisis Regresi & Korelasi — Bagian 1', 'DA 13 · AA 15'],
  ['Analisis Regresi & Korelasi — Bagian 2', 'DA 13 · AA 15'],
  ['Analisis Seri Waktu (ARIMA)', 'DA 18'],
  ['Metode Non-parametrik', 'DA 16'],
  ['Perangkat Lunak Statistik & Persiapan Proyek Akhir', 'AA 16'],
  ['Presentasi Proyek Akhir', '—'],
], 8);
const MAS122_REF = [
  'Lind, D. A., Marchal, W. G., & Wathen, S. A. (2017). Statistical Techniques in Business & Economics (17th ed.). McGraw-Hill. (DA)',
  'Anderson, A. (2024). Business Statistics For Dummies (2nd ed.). John Wiley & Sons. (AA)',
];

// --- MNU101 Pengantar Bisnis (Pride; Nickels) -------------------------
// RPS Introduction to Business (MNU101), FEB UNAIR.
const MNU101_TM1_7 = materi([
  ['Business: A Definition, Business Cycle, Economic Systems & Competition', 'Pride Ch. 1 · Nickels Ch. 2'],
  ['Business Ethics & Social Responsibility', 'Pride Ch. 2 · Nickels Ch. 3'],
  ['Global Business', 'Pride Ch. 3 · Nickels Ch. 4'],
  ['Forms of Business Ownership & Entrepreneurship', 'Pride Ch. 4–5 · Nickels Ch. 5'],
  ['The Management Process', 'Pride Ch. 6 · Nickels Ch. 7'],
  ['The Flexible Organization', 'Pride Ch. 7 · Nickels Ch. 8'],
  ['Producing Quality Goods & Services', 'Pride Ch. 8 · Nickels Ch. 9'],
], 1);
const MNU101_TM8_14 = materi([
  ['Human Resource Management & Motivation', 'Pride Ch. 9–10 · Nickels Ch. 10–11'],
  ['Customer Relations through Effective Marketing', 'Pride Ch. 11 · Nickels Ch. 13'],
  ['Product Creation & Pricing', 'Pride Ch. 12 · Nickels Ch. 14'],
  ['Product Distribution & Promotion', 'Pride Ch. 13 · Nickels Ch. 16'],
  ['Social Media & E-Business', 'Pride Ch. 14'],
  ['Managerial & Accounting Information', 'Pride Ch. 15 · Nickels Ch. 17'],
  ['Financial Management', 'Pride Ch. 16 · Nickels Ch. 18'],
], 8);
const MNU101_REF = [
  'Pride, W. M., Hughes, R. J., & Kapoor, J. R. (2019). Foundations of Business (6th ed.). Cengage.',
  'Nickels, W., McHugh, J., & McHugh, S. (2022). Understanding Business (13th ed.). McGraw-Hill.',
  'Gitman, L. J., et al. (2018). Introduction to Business. OpenStax. (pendukung)',
];

// --- EKT109 Pengantar Teori Ekonomi (Samuelson; Mankiw) ---------------
// Kontrak Perkuliahan PTE 2025/2026.
const EKT109_TM1_7 = materi([
  ['Konsep Dasar Ilmu Ekonomi (bagian 1)', 'Samuelson Ch. 1–2'],
  ['Konsep Dasar Ilmu Ekonomi (bagian 2)', 'Samuelson Ch. 1–2'],
  ['Elemen Dasar Permintaan & Penawaran', 'Samuelson Ch. 3 · Mankiw Ch. 4'],
  ['Permintaan & Perilaku Konsumen', 'Samuelson Ch. 4 · Mankiw Ch. 5'],
  ['Elastisitas & Penerapannya', 'Samuelson Ch. 6'],
  ['Kebijakan Pemerintah dalam Kerangka Permintaan & Penawaran', 'Samuelson Ch. 7 · Mankiw Ch. 13'],
  ['Produsen, Konsumen & Efisiensi Pasar', 'Samuelson Ch. 8–11 · Mankiw Ch. 14–17'],
], 1);
const EKT109_TM8_14 = materi([
  ['Pendapatan Nasional', 'Samuelson Ch. 19–20 · Mankiw Ch. 23–24'],
  ['Perekonomian Tertutup (bagian 1): Identitas, Konsumsi, Tabungan & Dana Pinjaman', 'Samuelson Ch. 21–22 · Mankiw Ch. 26, 33–34'],
  ['Perekonomian Tertutup (bagian 2): Keseimbangan, Multiplier & Kebijakan Fiskal', 'Samuelson Ch. 21–22 · Mankiw Ch. 26, 33–34'],
  ['Uang & Sistem Keuangan', 'Samuelson Ch. 23–24 · Mankiw Ch. 29–30'],
  ['Perekonomian Terbuka', 'Samuelson Ch. 27–28 · Mankiw Ch. 31–32'],
  ['Inflasi & Pengangguran', 'Samuelson Ch. 29–30 · Mankiw Ch. 24, 28, 30, 33–35'],
  ['Pertumbuhan Ekonomi', 'Samuelson Ch. 25 · Mankiw Ch. 25–26'],
], 8);
const EKT109_REF = [
  'Samuelson, P. A., & Nordhaus, W. D. (2010). Economics (19th ed.). McGraw-Hill.',
  'Mankiw, N. G. (2020). Principles of Economics (9th ed.). Cengage Learning.',
];

// ---- Flashcard ------------------------------------------------------
const AKK106_FLASHCARDS: Flashcard[] = [
  { title: 'Definisi Aset', back: 'Sumber daya yang dikuasai entitas akibat peristiwa masa lalu, dengan manfaat ekonomi di masa depan.' },
  { title: 'Persamaan Akuntansi', back: 'Aset = Liabilitas + Ekuitas. Dasar pencatatan berpasangan (double-entry).' },
  { title: 'Jurnal Penyesuaian', back: 'Jurnal akhir periode untuk mengakui pendapatan/beban pada periode yang tepat (basis akrual).' },
  { title: 'Trial Balance', back: 'Daftar saldo seluruh akun buku besar untuk menguji kesamaan total debit dan kredit.' },
];

// =====================================================================
// STRUKTUR KURIKULUM (Semester 1 & 2 dibuka; 3–8 terkunci/placeholder)
// =====================================================================
export const SEMESTERS: Semester[] = [
  {
    id: 'sem1',
    number: 1,
    title: 'Semester 1',
    desc: 'Fondasi Akademik, PDB & Dasar Akuntansi (19 SKS)',
    totalSks: 19,
    locked: false,
    groups: [
      {
        title: 'Mata Kuliah Keahlian (Akuntansi)',
        highlight: true,
        courses: [
          {
            code: 'AKK106', newCode: 'FEB25603003', name: 'Akuntansi Keuangan Dasar', sks: 3, iconKey: 'calculator',
            references: AKK106_REF,
            materiTM1_7: AKK106_TM1_7, materiTM8_14: AKK106_TM8_14, flashcards: AKK106_FLASHCARDS,
          },
        ],
      },
      {
        title: 'Mata Kuliah Wajib Universitas & PDB',
        courses: [
          { code: 'AGX101', name: 'Agama', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('Agama', 1, 7), materiTM8_14: makeMateri('Agama', 8, 14) },
          { code: 'NOP103', name: 'Pancasila', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('Pancasila', 1, 7), materiTM8_14: makeMateri('Pancasila', 8, 14) },
          { code: 'BAI101', name: 'Bahasa Indonesia', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('Bahasa Indonesia', 1, 7), materiTM8_14: makeMateri('Bahasa Indonesia', 8, 14) },
          { code: 'NOP104', name: 'Kewarganegaraan', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('Kewarganegaraan', 1, 7), materiTM8_14: makeMateri('Kewarganegaraan', 8, 14) },
          { code: 'SIP107', name: 'Data dan Pustaka', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('Data dan Pustaka', 1, 7), materiTM8_14: makeMateri('Data dan Pustaka', 8, 14) },
          { code: 'PHP103', name: 'Logika dan Pemikiran Kritis', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('Logika', 1, 7), materiTM8_14: makeMateri('Logika', 8, 14) },
          { code: 'MNM107', name: 'Pengantar Kolaborasi Keilmuan', sks: 2, iconKey: 'book', materiTM1_7: makeMateri('PKK', 1, 7), materiTM8_14: makeMateri('PKK', 8, 14) },
          { code: 'MNM106', name: 'Pengembangan Diri Kewirausahaan', sks: 2, iconKey: 'briefcase', materiTM1_7: makeMateri('PDK', 1, 7), materiTM8_14: makeMateri('PDK', 8, 14) },
        ],
      },
    ],
  },
  {
    id: 'sem2',
    number: 2,
    title: 'Semester 2',
    desc: 'Pendalaman Akuntansi, Perpajakan & Bisnis (20 SKS)',
    totalSks: 20,
    locked: false,
    groups: [
      {
        title: 'Mata Kuliah Keahlian (Akuntansi & Pajak)',
        highlight: true,
        courses: [
          {
            code: 'AKK201', newCode: 'FEB25603010', name: 'Akuntansi Keuangan Menengah I', sks: 3, iconKey: 'calculator', prasyarat: 'AKK106 (L)',
            references: AKK201_REF,
            materiTM1_7: AKK201_TM1_7, materiTM8_14: AKK201_TM8_14, flashcardCount: 84, featureBadge: 'Flashcard + Bank Soal + Simulator',
          },
          {
            code: 'AKM201', newCode: 'FEB25603007', name: 'Akuntansi Biaya', sks: 3, iconKey: 'chart', prasyarat: 'AKK106 (L)',
            references: AKM201_REF,
            materiTM1_7: AKM201_TM1_7, materiTM8_14: AKM201_TM8_14, flashcardCount: 84, featureBadge: 'Flashcard + Bank Soal + Simulator',
          },
          {
            code: 'PJK201', newCode: 'FEB25603006', name: 'Perpajakan I', sks: 3, iconKey: 'file',
            references: PJK201_REF,
            materiTM1_7: PJK201_TM1_7, materiTM8_14: PJK201_TM8_14, flashcardCount: 84, featureBadge: 'Flashcard + Bank Soal + Simulator',
          },
          {
            code: 'AKA103', newCode: 'FEB25603009', name: 'Etika & Keterampilan Profesional untuk Akuntan', sks: 2, iconKey: 'award',
            references: [
              'Duska, R., Duska, B. S., & Kury, K. W. Accounting Ethics (3rd ed.).',
              'AICPA Code of Professional Conduct.',
              'RPS Etika & Keterampilan Profesional untuk Akuntan, FEB UNAIR.',
            ],
            materiTM1_7: materi([
              ['Hakikat Akuntansi & Kesulitan Etis Utama (True Disclosure)', 'Duska 1'],
              ['Pengukuran & Pelaporan: Laporan Keuangan, Nilai Aset, COGS', 'Duska 1–2'],
              ['Pengantar Etika: Definisi, Dimensi & Tingkatan', 'Duska 2'],
              ['Kode Etik Profesi & Prinsip AICPA', 'AICPA · Duska 3'],
              ['Teori Moral untuk Akuntan (Egoisme, Utilitarianisme, Deontologi)', 'Duska 3'],
              ['Etika Pengungkapan & Penerapan pada Profesi Akuntan', 'Duska 4'],
              ['Review & Studi Kasus UTS', '—'],
            ], 1),
            materiTM8_14: materi([
              ['Hubungan Etika dengan Moral & Agama (termasuk Etika Bisnis Islam)', 'RPS 8'],
              ['Sikap Etis: Diversity, Inclusion, Equity & Penghormatan Hak', 'RPS 9'],
              ['Kebutuhan Industri terhadap Keahlian Profesional Akuntan', 'RPS 10'],
              ['Tata Kelola Perusahaan & Kepatuhan Etika Bisnis', 'RPS 11'],
              ['Kepemimpinan Etis, Leadership 4.0 & Soft-Skilled Leadership', 'RPS 12'],
              ['Atribut Komunikasi yang Diharapkan Industri', 'RPS 13'],
              ['Integrasi Etika, Kepemimpinan & Komunikasi + Review', 'RPS 14'],
            ], 8),
            flashcardCount: 84, featureBadge: 'Flashcard + Bank Soal + Kuis',
          },
        ],
      },
      {
        title: 'Mata Kuliah Pendukung (Bisnis & Ekonomi)',
        courses: [
          {
            code: 'MNU101', newCode: 'FEB25603004', name: 'Pengantar Bisnis', sks: 3, iconKey: 'briefcase',
            references: MNU101_REF,
            materiTM1_7: MNU101_TM1_7, materiTM8_14: MNU101_TM8_14,
            flashcardCount: 88, featureBadge: 'Flashcard + Bank Soal + Kuis',
          },
          {
            code: 'EKT109', newCode: 'FEB25603005', name: 'Pengantar Teori Ekonomi', sks: 3, iconKey: 'chart',
            references: EKT109_REF,
            materiTM1_7: EKT109_TM1_7, materiTM8_14: EKT109_TM8_14,
            flashcardCount: 126, featureBadge: 'Flashcard + Bank Soal + Simulator',
          },
          {
            code: 'MAS122', newCode: 'FEB25603008', name: 'Statistik untuk Akuntan', sks: 3, iconKey: 'chart', prasyarat: 'AKK106 (L)',
            references: MAS122_REF,
            materiTM1_7: MAS122_TM1_7, materiTM8_14: MAS122_TM8_14,
            flashcardCount: 84, featureBadge: 'Flashcard + Bank Soal + Kuis',
          },
        ],
      },
    ],
  },
  { id: 'sem3', number: 3, title: 'Semester 3', desc: 'Akuntansi Manajemen & Lanjutan', totalSks: 0, locked: true, groups: [] },
  { id: 'sem4', number: 4, title: 'Semester 4', desc: 'Akuntansi Keuangan Menengah II', totalSks: 0, locked: true, groups: [] },
  { id: 'sem5', number: 5, title: 'Semester 5', desc: 'Auditing & Sistem Informasi Akuntansi', totalSks: 0, locked: true, groups: [] },
  { id: 'sem6', number: 6, title: 'Semester 6', desc: 'Analisis Bisnis & Pelaporan', totalSks: 0, locked: true, groups: [] },
  { id: 'sem7', number: 7, title: 'Semester 7', desc: 'Konsentrasi & Mata Kuliah Pilihan', totalSks: 0, locked: true, groups: [] },
  { id: 'sem8', number: 8, title: 'Semester 8', desc: 'Skripsi / Tugas Akhir', totalSks: 0, locked: true, groups: [] },
];

// ---- Siklus laporan (untuk Mega Menu "Laporan") --------------------
export const LAPORAN_DATA = [
  {
    title: 'Akuntansi Keuangan',
    iconKey: 'file' as const,
    items: [
      'Income Statement & Comprehensive Income', 'Statement of Financial Position',
      'Statement of Cash Flows', 'Bank Reconciliation Worksheet',
      'Receivables Aging & Allowance Schedule', 'Notes Receivable Amortization Schedule',
      'Transfer of Receivables Journal Worksheet', 'Corrected Ending Inventory Schedule',
      'Inventory Cost-Flow Schedule', 'LCNRV & Inventory Loss Recovery Schedule',
      'Gross Profit Method Worksheet', 'Retail Inventory Method Worksheet',
      'Inventory Analysis Worksheet',
    ],
  },
  {
    title: 'Akuntansi Manajemen',
    iconKey: 'chart' as const,
    items: [
      'Laporan Biaya Produksi', 'Harga Pokok Penjualan (HPP)',
      'Analisis Break Even Point (BEP)', 'Laporan Anggaran (Budget)',
      'Analisis Varians Biaya', 'Laporan Kinerja Manajerial',
    ],
  },
];

// ---- Util pencarian: ratakan semua mata kuliah jadi satu daftar -----
export interface FlatCourse {
  course: import('../types').Course;
  semesterId: string;
  semesterTitle: string;
}

export const ALL_COURSES: FlatCourse[] = SEMESTERS.filter((s) => !s.locked).flatMap((s) =>
  s.groups.flatMap((g) =>
    g.courses.map((course) => ({ course, semesterId: s.id, semesterTitle: s.title }))
  )
);
