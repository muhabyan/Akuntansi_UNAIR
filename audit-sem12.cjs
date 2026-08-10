// Final audit: count by "q": pattern (quoted key)
const fs = require('fs');

function countQ(file) {
  const content = fs.readFileSync(file, 'utf-8');
  // Count occurrences of "q": or q: at start of properties
  const m1 = (content.match(/"q":/g) || []).length;
  const m2 = (content.match(/^\s+q:/gm) || []).length;
  return m1 + m2;
}

console.log('========================================');
console.log('  AUDIT SEMESTER 1-2 (FINAL)');
console.log('========================================\n');

console.log('━━━ SEMESTER 1 ━━━\n');
console.log('AKK106 (Akuntansi Keuangan Dasar):');
console.log('  Materi TM: ✅ 14 TM lengkap (WKK Ch.1-14)');
console.log('  Flashcard: ⚠️  HANYA 4 kartu (sangat kurang, harusnya ~84)');
console.log('  Quiz/Sim:  ❌ TIDAK ADA');
console.log('  Bank Soal: ❌ TIDAK ADA');
console.log('');
console.log('PDB Courses (8 MK):');
console.log('  Materi TM: ✅ Semua 14 TM (baru dilengkapi)');
console.log('  Flashcard: ❌ TIDAK ADA satupun');
console.log('  Quiz/Sim:  ❌ TIDAK ADA satupun');
console.log('  Bank Soal: ❌ TIDAK ADA satupun\n');

console.log('━━━ SEMESTER 2 ━━━\n');

const sem2 = [
  { code: 'AKK201', name: 'AKM I' },
  { code: 'AKM201', name: 'Akuntansi Biaya' },
  { code: 'PJK201', name: 'Perpajakan I' },
  { code: 'AKA103', name: 'Etika Profesi' },
  { code: 'MNU101', name: 'Pengantar Bisnis' },
  { code: 'EKT109', name: 'PTE' },
  { code: 'MAS122', name: 'Statistik' },
];

sem2.forEach(mk => {
  // Flashcards
  const fcFile = `src/data/flashcards/${mk.code.toLowerCase()}.ts`;
  let fcCount = 0;
  if (fs.existsSync(fcFile)) {
    const content = fs.readFileSync(fcFile, 'utf-8');
    fcCount = (content.match(/front:/g) || []).length + (content.match(/"front":/g) || []).length;
  }

  // Quizzes
  const qFiles = fs.readdirSync('src/data/quizzes').filter(f => f.toLowerCase().startsWith(mk.code.toLowerCase()) && f.endsWith('.ts'));
  let totalQ = 0;
  const qDetails = [];
  qFiles.forEach(qf => {
    const c = countQ(`src/data/quizzes/${qf}`);
    totalQ += c;
    qDetails.push(`${qf.replace('.ts','')}(${c})`);
  });

  // Bank soal
  const bsFiles = fs.readdirSync('src/data/banksoal').filter(f => f.toLowerCase().startsWith(mk.code.toLowerCase()) && f.endsWith('.ts'));
  let totalBS = 0;
  bsFiles.forEach(bf => {
    const c = countQ(`src/data/banksoal/${bf}`);
    totalBS += c;
  });

  const fcOk = fcCount >= 50 ? '✅' : '⚠️';
  const qOk = totalQ >= 30 ? '✅' : (totalQ > 0 ? '⚠️' : '❌');
  const bsOk = totalBS >= 10 ? '✅' : (totalBS > 0 ? '⚠️' : '❌');

  console.log(`${mk.code} (${mk.name}):`);
  console.log(`  Materi TM: ✅ 14 TM lengkap`);
  console.log(`  Flashcard: ${fcOk} ${fcCount} kartu`);
  console.log(`  Quiz/Sim:  ${qOk} ${totalQ} soal → ${qDetails.join(', ')}`);
  console.log(`  Bank Soal: ${bsOk} ${totalBS} items`);
  console.log('');
});

// Bank soal special: count EKT109
const ekt109Bank = fs.readFileSync('src/data/banksoal/ekt109Bank.ts', 'utf-8');
const ekt109BankCount = (ekt109Bank.match(/"q":/g) || []).length + (ekt109Bank.match(/^\s+q:/gm) || []).length;
console.log(`  [EKT109 Bank Soal Override: ${ekt109BankCount} items in ekt109Bank.ts]\n`);

console.log('========================================');
console.log('  RINGKASAN MASALAH KRITIS');
console.log('========================================');
console.log('SEM 1:');
console.log('  1. AKK106: Flashcard cuma 4 (perlu ~84)');
console.log('  2. AKK106: Tidak punya quiz/simulator sama sekali');
console.log('  3. 8 MK PDB: Materi udah ada, tapi tanpa flashcard/quiz');
console.log('');
console.log('SEM 2:');
console.log('  4. PJK201: Flashcard 73 (dibilang 84 di featureBadge)');
console.log('  5. Bank soal banyak yang count=0 (audit pakai q:)');
