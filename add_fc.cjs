const fs = require('fs');
const file = 'src/data/flashcards/pjk201.ts';
let content = fs.readFileSync(file, 'utf8');

const additionalFC = `  {
    id: "pjk201-tm14-add01",
    phase: "pra-uas",
    tm: 14,
    topic: "Pajak Daerah Kab/Kota",
    category: "Konsep",
    front: "Sebutkan 5 contoh Pajak Daerah tingkat Kabupaten/Kota!",
    back: "1. Pajak Hotel\\n2. Pajak Restoran\\n3. Pajak Penerangan Jalan\\n4. PBB Perdesaan dan Perkotaan (PBB-P2)\\n5. Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB)"
  },
  {
    id: "pjk201-tm14-add02",
    phase: "pra-uas",
    tm: 14,
    topic: "Subjek Pajak Kendaraan",
    category: "Definisi",
    front: "Siapa yang menjadi Subjek Pajak Kendaraan Bermotor (PKB)?",
    back: "Orang pribadi atau Badan yang memiliki dan/atau menguasai Kendaraan Bermotor."
  }
];`;

content = content.replace('];', additionalFC);
fs.writeFileSync(file, content);
console.log("Added 2 flashcards");
