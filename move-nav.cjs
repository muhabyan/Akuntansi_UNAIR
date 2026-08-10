const fs = require('fs');

const path = 'src/components/QuizView.tsx';
let lines = fs.readFileSync(path, 'utf8').split('\n');

// 1. Wrap the return statement with <> and close it at the end
const returnStart = lines.findIndex(l => l.includes('return ('));
if (returnStart !== -1) {
  lines.splice(returnStart + 1, 0, '    <>');
}

// 2. Find the floating navigation block
const navStart = lines.findIndex(l => l.includes('{mode === \'exam\' && examContentVisible && ('));
const navEnd = lines.findIndex((l, i) => i > navStart && l.includes('      )}')); // The closing brace of the condition

if (navStart !== -1 && navEnd !== -1) {
  // Extract nav block
  const navBlock = lines.slice(navStart, navEnd + 1);
  
  // Remove nav block from original position
  lines.splice(navStart, navEnd - navStart + 1);
  
  // Find the closing div of animate-fade-in-up
  const animateFadeInUpEnd = lines.findIndex(l => l.includes('    </div>'));
  
  // Insert nav block after animate-fade-in-up closes
  lines.splice(animateFadeInUpEnd + 1, 0, ...navBlock);
}

// Add the fragment close tag right before the final closing brace of the component
const finalClose = lines.lastIndexOf('  );');
if (finalClose !== -1) {
  lines.splice(finalClose, 0, '    </>');
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Done!');
