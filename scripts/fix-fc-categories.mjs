import fs from 'node:fs';

for (const f of ['scripts/build-super-mnm101-flashcards-data.mjs', 'src/data/flashcards/mnm101.ts']) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replaceAll('"category": "Model"', '"category": "Teori"');
    content = content.replaceAll('"category": "Aplikasi"', '"category": "Prosedur"');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated ${f}`);
  }
}
