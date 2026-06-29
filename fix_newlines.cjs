const fs = require('fs');
let content = fs.readFileSync('c:/cek/src/data/pte/ptePraUAS.ts', 'utf-8');
content = content.replace('};\\n\\nconst tm11', '};\n\nconst tm11');
fs.writeFileSync('c:/cek/src/data/pte/ptePraUAS.ts', content, 'utf-8');
console.log('Fixed newlines');
