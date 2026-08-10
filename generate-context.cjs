const fs = require('fs');
const path = require('path');

const TARGET_FILES = [
  'src/types.ts',
  'src/data/courseData.ts',
  'src/data/quizzes/aka103UtsSimulator.ts' // Just one example
];

function generateContext() {
  let output = '# Project Context for ChatGPT\n\n';
  output += 'Below is the exact data structure and current configuration of my project. I need you to generate more data in the exact same format based on my request.\n\n';
  
  for (const relativeFile of TARGET_FILES) {
    const fullPath = path.join(__dirname, relativeFile);
    if (!fs.existsSync(fullPath)) continue;
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    
    output += `## File: ${relativeFile}\n`;
    output += '```' + path.extname(fullPath).replace('.', '') + '\n';
    output += content;
    output += '\n```\n\n';
  }
  
  fs.writeFileSync('chatgpt_context.txt', output);
  console.log(`Context generated! Size: ${(fs.statSync('chatgpt_context.txt').size / 1024).toFixed(2)} KB`);
}

generateContext();
