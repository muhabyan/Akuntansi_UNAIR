const fs = require('fs');
const c = fs.readFileSync('src/data/quizzes/aka103UasSimulator.ts', 'utf8');
const qs = [...c.matchAll(/"q":\s*"([^"]{0,100})/g)];
console.log('=== AKBI UAS SIMULATOR - ALL QUESTIONS ===');
qs.forEach((m, i) => console.log((i+1) + '. ' + m[1]));
console.log('\nTotal:', qs.length);
