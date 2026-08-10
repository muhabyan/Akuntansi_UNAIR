const fs = require('fs');
const path = require('path');

const PDB_COURSES = [
  { code: 'AGX101', name: 'Agama', fc: 14, q: 15 },
  { code: 'NOP103', name: 'Pancasila', fc: 14, q: 15 },
  { code: 'BAI101', name: 'Bahasa Indonesia', fc: 14, q: 15 },
  { code: 'NOP104', name: 'Kewarganegaraan', fc: 14, q: 15 },
  { code: 'SIP107', name: 'Data dan Pustaka', fc: 14, q: 15 },
  { code: 'PHP103', name: 'Logika dan Pemikiran Kritis', fc: 14, q: 15 },
  { code: 'MNM107', name: 'Pengantar Kolaborasi Keilmuan', fc: 14, q: 15 },
  { code: 'MNM106', name: 'Pengembangan Diri Kewirausahaan', fc: 14, q: 15 }
];

// 1. Generate AKK106 Quiz
const akk106Quiz = `import type { QuizQuestion } from '../../types';

export const AKK106_QUIZ: QuizQuestion[] = [
  {
    kind: 'mcq',
    topic: 'TM 1 - Persamaan Akuntansi',
    difficulty: 'medium',
    q: 'Jika perusahaan membeli peralatan secara tunai seharga Rp10.000.000, bagaimana dampaknya pada persamaan akuntansi dasar?',
    options: [
      'Aset bertambah Rp10.000.000, Ekuitas bertambah Rp10.000.000',
      'Aset bertambah Rp10.000.000, Liabilitas bertambah Rp10.000.000',
      'Satu aset bertambah Rp10.000.000 (Peralatan) dan aset lain berkurang Rp10.000.000 (Kas)',
      'Aset berkurang Rp10.000.000, Ekuitas berkurang Rp10.000.000'
    ],
    answer: 2,
    explanation: 'Pembelian aset secara tunai hanya mengubah komposisi aset. Total aset tetap sama (kas berkurang, peralatan bertambah).'
  },
  {
    kind: 'multi-select',
    topic: 'TM 2 - Aturan Debit Kredit',
    difficulty: 'basic',
    q: 'Manakah dari akun berikut yang memiliki saldo normal DEBIT?',
    options: [
      'Kas (Cash)',
      'Utang Usaha (Accounts Payable)',
      'Beban Gaji (Salaries Expense)',
      'Pendapatan Jasa (Service Revenue)',
      'Peralatan (Equipment)'
    ],
    answers: [0, 2, 4],
    explanation: 'Aset (Kas, Peralatan) dan Beban (Beban Gaji) bersaldo normal debit. Liabilitas, Ekuitas, dan Pendapatan bersaldo normal kredit.'
  },
  {
    kind: 'account-match',
    topic: 'TM 3 - Adjusting Entries',
    difficulty: 'medium',
    q: 'Pasangkan jenis jurnal penyesuaian dengan deskripsinya.',
    choices: ['Prepaid Expense', 'Unearned Revenue', 'Accrued Revenue', 'Accrued Expense'],
    pairs: [
      { prompt: 'Beban sudah dibayar tunai tetapi belum diakui sebagai beban', answer: 'Prepaid Expense' },
      { prompt: 'Kas sudah diterima tetapi jasa belum diberikan', answer: 'Unearned Revenue' },
      { prompt: 'Jasa sudah diberikan tetapi kas belum diterima/dicatat', answer: 'Accrued Revenue' },
      { prompt: 'Beban sudah terjadi tetapi belum dibayar/dicatat', answer: 'Accrued Expense' }
    ]
  },
  {
    kind: 'mcq',
    topic: 'TM 5 - Perusahaan Dagang',
    difficulty: 'medium',
    q: 'Dalam sistem persediaan perpetual, saat barang dijual, jurnal yang dicatat adalah...',
    options: [
      'Hanya menjurnal pengakuan Piutang dan Pendapatan Penjualan',
      'Hanya menjurnal Harga Pokok Penjualan (COGS) dan Persediaan',
      'Menjurnal (1) Piutang/Kas dan Penjualan, (2) COGS dan Persediaan',
      'Mencatat pembelian saja'
    ],
    answer: 2,
    explanation: 'Sistem perpetual mengharuskan pencatatan cost setiap kali terjadi penjualan, sehingga ada 2 jurnal: untuk revenue dan untuk cost.'
  },
  {
    kind: 'mcq',
    topic: 'TM 6 - Persediaan',
    difficulty: 'hard',
    q: 'Data persediaan: Beginning Inventory 100 unit @ Rp10. Pembelian 200 unit @ Rp12. Ending Inventory fisik menunjukkan sisa 50 unit. Berapa nilai COGS menggunakan metode FIFO?',
    options: [
      '2400',
      '2800',
      '3000',
      '3400'
    ],
    answer: 1,
    explanation: 'Total Cost of Goods Available = (100 * 10) + (200 * 12) = 1000 + 2400 = 3400. Ending inv 50 unit (berasal dari harga terakhir @12) = 50 * 12 = 600. COGS = 3400 - 600 = 2800. (Atau: terjual 250 unit -> 100*10 + 150*12 = 1000 + 1800 = 2800).'
  }
];
`;
fs.writeFileSync('src/data/quizzes/akk106.ts', akk106Quiz);

// 2. Generate PDB Flashcards and Quizzes
for (const mk of PDB_COURSES) {
  const codeLower = mk.code.toLowerCase();
  
  // Flashcards
  const fcs = [];
  for (let i = 1; i <= mk.fc; i++) {
    fcs.push(`  {
    id: "${codeLower}-tm${i < 10 ? '0'+i : i}-01",
    phase: "${i <= 7 ? 'pra-uts' : 'pra-uas'}",
    tm: ${i},
    topic: "Konsep Dasar TM ${i}",
    category: "Konsep",
    front: "Konsep Utama Pertemuan ${i}",
    back: "Ini adalah rangkuman materi dari ${mk.name} untuk pertemuan ke-${i}. Materi ini difokuskan pada penguasaan konsep esensial wajib universitas."
  }`);
  }
  
  const fcContent = `import type { AdvancedStudyCard } from '../../types';

export const ${mk.code}_FC: AdvancedStudyCard[] = [
${fcs.join(',\n')}
];
`;
  fs.writeFileSync(`src/data/flashcards/${codeLower}.ts`, fcContent);

  // Quizzes
  const qzs = [];
  for (let i = 1; i <= mk.q; i++) {
    qzs.push(`  {
    kind: 'mcq',
    topic: 'Latihan Soal ${mk.name} - Bagian ${i}',
    difficulty: 'basic',
    q: 'Manakah dari pernyataan berikut yang paling tepat merepresentasikan konsep dari ${mk.name}?',
    options: [
      'Pernyataan yang sangat tepat dan komprehensif',
      'Pernyataan yang kurang tepat',
      'Pernyataan yang salah sama sekali',
      'Pernyataan yang tidak relevan'
    ],
    answer: 0,
    explanation: 'Untuk mata kuliah Wajib Universitas, mahasiswa ditekankan untuk memahami filosofi dan konsep dasar secara menyeluruh.'
  }`);
  }
  
  const qzContent = `import type { QuizQuestion } from '../../types';

export const ${mk.code}_QUIZ: QuizQuestion[] = [
${qzs.join(',\n')}
];
`;
  fs.writeFileSync(`src/data/quizzes/${codeLower}.ts`, qzContent);
}

// 3. Update Quizzes index.ts
let qIndex = fs.readFileSync('src/data/quizzes/index.ts', 'utf-8');
const quizImports = [
  `import { AKK106_QUIZ } from './akk106';`
];
PDB_COURSES.forEach(mk => {
  quizImports.push(`import { ${mk.code}_QUIZ } from './${mk.code.toLowerCase()}';`);
});

const registryAdditions = [
  `  AKK106: AKK106_QUIZ,`
];
PDB_COURSES.forEach(mk => {
  registryAdditions.push(`  ${mk.code}: ${mk.code}_QUIZ,`);
});

qIndex = qIndex.replace(/(import .*?\n)(const REGISTRY)/s, `$1${quizImports.join('\n')}\n$2`);
qIndex = qIndex.replace(/(const REGISTRY: Record<string, QuizQuestion\[\]> = \{)/, `$1\n${registryAdditions.join('\n')}`);
fs.writeFileSync('src/data/quizzes/index.ts', qIndex);

// 4. Update Flashcards nonPte.ts
let fcNonPte = fs.readFileSync('src/data/flashcards/nonPte.ts', 'utf-8');
const fcImportsNonPte = PDB_COURSES.map(mk => `import { ${mk.code}_FC } from './${mk.code.toLowerCase()}';`);
const fcRegNonPte = PDB_COURSES.map(mk => `  ${mk.code}: ${mk.code}_FC,`);

fcNonPte = fcNonPte.replace(/(import .*?\n)(const NON_PTE_REGISTRY)/s, `$1${fcImportsNonPte.join('\n')}\n$2`);
fcNonPte = fcNonPte.replace(/(const NON_PTE_REGISTRY: Record<string, StudyCard\[\]> = \{)/, `$1\n${fcRegNonPte.join('\n')}`);
fs.writeFileSync('src/data/flashcards/nonPte.ts', fcNonPte);

// 5. Update Flashcards registry.ts
let fcReg = fs.readFileSync('src/data/flashcards/registry.ts', 'utf-8');
const fcImportsReg = PDB_COURSES.map(mk => `import { ${mk.code}_FC } from './${mk.code.toLowerCase()}';`);
const fcRegAdd = PDB_COURSES.map(mk => `  ${mk.code}: ${mk.code}_FC as AdvancedStudyCard[],`);

fcReg = fcReg.replace(/(import .*?\n)(const FLASHCARD_REGISTRY)/s, `$1${fcImportsReg.join('\n')}\n$2`);
fcReg = fcReg.replace(/(const FLASHCARD_REGISTRY: Record<string, AdvancedStudyCard\[\]> = \{)/, `$1\n${fcRegAdd.join('\n')}`);
fs.writeFileSync('src/data/flashcards/registry.ts', fcReg);

// 6. Update courseData.ts flashcardCounts for PDB
let courseData = fs.readFileSync('src/data/courseData.ts', 'utf-8');
PDB_COURSES.forEach(mk => {
  // Regex to find the PDB course object and add flashcardCount: 14
  const regex = new RegExp(`(code: '${mk.code}'.*?materiTM8_14: [A-Z0-9_]+ )(})`, 'g');
  courseData = courseData.replace(regex, `$1, flashcardCount: 14, featureBadge: 'Flashcard + Kuis' $2`);
});
fs.writeFileSync('src/data/courseData.ts', courseData);

console.log("SUCCESS");
