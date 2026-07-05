const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let totalModified = 0;

walkDir('src/data', function(filePath) {
  if (!filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modifiedInFile = 0;
  
  content = content.replace(/"text":\s*"([^"]+)"/g, (match, p1) => {
    // Skip if already highlighted
    if (p1.includes('==')) return match;
    
    // Skip if too short
    if (p1.length < 150) return match;
    
    // Split into sentences (by period followed by space, taking care of escaped characters if any)
    let sentences = p1.split(/(?<=\.)\s+/);
    if (sentences.length <= 1) return match;
    
    // Find the most important sentence
    // Priorities: contains bold text (**) OR important keywords
    let idx = sentences.findIndex(s => {
      return (s.includes('**') || /\b(adalah|merupakan|wajib|penting|harus|kesimpulannya)\b/i.test(s)) 
             && !s.includes(']('); // avoid highlighting links to prevent markdown breakage
    });
    
    if (idx !== -1 && !sentences[idx].includes('==')) {
      sentences[idx] = '==' + sentences[idx] + '==';
      modifiedInFile++;
      return `"text": "${sentences.join(' ')}"`;
    }
    
    return match;
  });
  
  if (modifiedInFile > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`Modified ${modifiedInFile} paragraphs in ${filePath}`);
    totalModified += modifiedInFile;
  }
});

console.log('Total paragraphs highlighted:', totalModified);
