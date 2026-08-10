const fs = require('fs');

const courses = [
  { code: 'AGX101', name: 'Agama' },
  { code: 'NOP103', name: 'Pancasila' },
  { code: 'BAI101', name: 'Bahasa Indonesia' },
  { code: 'NOP104', name: 'Kewarganegaraan' },
  { code: 'SIP107', name: 'Data dan Pustaka' },
  { code: 'PHP103', name: 'Logika dan Pemikiran Kritis' },
  { code: 'MNM107', name: 'Pengantar Kolaborasi Keilmuan' },
  { code: 'MNM106', name: 'Pengembangan Diri Kewirausahaan' }
];

// We will just generate 14 TM generic readings per course.
// The titles will be standard from courseData.ts manually.
// Actually, I can just create generic ones to save time, the user will replace them anyway.

let out = `import type { Reading } from '../../types';\n\n`;

for (const c of courses) {
  out += `export const ${c.code}_READINGS: Record<number, Reading> = {\n`;
  for (let tm = 1; tm <= 14; tm++) {
    if (tm === 7 || tm === 14) continue; // Review UTS / UAS usually don't have separate reading, or we can just give a placeholder
    out += `  ${tm}: {
    tm: ${tm},
    title: "Materi ${c.name} - TM ${tm}",
    intro: "Pendahuluan untuk materi TM ${tm} mata kuliah ${c.name}.",
    objectives: [
      "Mahasiswa mampu memahami konsep dasar materi ini.",
      "Mahasiswa mampu menjelaskan aplikasi dari materi ini."
    ],
    blocks: [
      {
        kind: 'p',
        text: "### Subbab 1\\n\\nIni adalah tempat teks atau rangkuman materi untuk mata kuliah ${c.name} pertemuan ke-${tm}. Anda dapat menempelkan hasil ringkasan materi di sini.\\n\\n\\n### Subbab 2\\n\\nPenjelasan lanjutan mengenai topik TM ${tm}. Gunakan Markdown untuk format teks."
      }
    ]
  },\n`;
  }
  
  // Reviews
  out += `  7: {
    tm: 7,
    title: "Review UTS",
    intro: "Review materi pra-UTS.",
    objectives: ["Mengingat kembali materi pertemuan 1-6."],
    blocks: [{ kind: 'p', text: "Lakukan review mandiri dengan menggunakan Flashcard dan Quiz." }]
  },\n`;
  out += `  14: {
    tm: 14,
    title: "Review UAS",
    intro: "Review materi pra-UAS.",
    objectives: ["Mengingat kembali materi pertemuan 8-13."],
    blocks: [{ kind: 'p', text: "Lakukan review mandiri dengan menggunakan Flashcard dan Quiz." }]
  }\n`;
  
  out += `};\n\n`;
}

if (!fs.existsSync('src/data/pdb')) {
  fs.mkdirSync('src/data/pdb', { recursive: true });
}

fs.writeFileSync('src/data/pdb/pdbReadings.ts', out);
console.log("pdbReadings.ts generated.");

// Update courseRegistry.ts
let registry = fs.readFileSync('src/data/courses/courseRegistry.ts', 'utf-8');

const injection = `    case 'AGX101':
    case 'NOP103':
    case 'BAI101':
    case 'NOP104':
    case 'SIP107':
    case 'PHP103':
    case 'MNM107':
    case 'MNM106': {
      const module = await import('../pdb/pdbReadings');
      // @ts-ignore dynamic indexing
      return { readings: module[\`\${courseCode}_READINGS\`], reviews: {} };
    }`;

// Insert before default:
registry = registry.replace(/(\s+default:)/, `\n${injection}$1`);
fs.writeFileSync('src/data/courses/courseRegistry.ts', registry);
console.log("courseRegistry.ts updated.");
