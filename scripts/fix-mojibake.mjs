// scripts/fix-mojibake.mjs
import fs from 'node:fs';
import path from 'node:path';

function cleanText(text) {
  return text
    .replace(/â€“/g, '–')
    .replace(/â€”/g, '—')
    .replace(/Â·/g, '·')
    .replace(/âš ï¸ /g, '⚠️')
    .replace(/âš /g, '⚠️')
    .replace(/â€¢/g, '•')
    .replace(/â†‘/g, '↑')
    .replace(/⚠️ï¸ /g, '⚠️')
    .replace(/â­ /g, '⭐')
    .replace(/ðŸ” /g, '🔍')
    .replace(/ðŸ’¡/g, '💡')
    .replace(/ðŸ”‘/g, '🔑')
    .replace(/ðŸ“Œ/g, '📌')
    .replace(/ðŸŽ¯/g, '🎯');
}

const files = [
  path.join(process.cwd(), 'src/data/courseData.ts'),
  path.join(process.cwd(), 'src/data/courses/courseRegistry.ts')
];

for (const file of files) {
  if (fs.existsSync(file)) {
    const original = fs.readFileSync(file, 'utf8');
    const cleaned = cleanText(original);
    if (original !== cleaned) {
      fs.writeFileSync(file, cleaned, 'utf8');
      console.log(`Cleaned mojibake in ${path.basename(file)}`);
    } else {
      console.log(`No mojibake found in ${path.basename(file)}`);
    }
  }
}
