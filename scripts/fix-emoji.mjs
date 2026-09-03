// scripts/fix-emoji.mjs
import fs from 'node:fs';

let s = fs.readFileSync('src/data/courses/courseRegistry.ts', 'utf8');
const lines = s.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('pendingCalloutEmoji')) {
    if (lines[i].includes('warning')) {
      lines[i] = "      if (['⚠️'].includes(pendingCalloutEmoji)) variant = 'warning';";
    } else if (lines[i].includes('tip')) {
      lines[i] = "      else if (['💡', '⭐', '🔑', '📌', '🔍', '🎯'].includes(pendingCalloutEmoji)) variant = 'tip';";
    }
  }
}
fs.writeFileSync('src/data/courses/courseRegistry.ts', lines.join('\n'), 'utf8');
console.log('Fixed emojis in courseRegistry.ts');
