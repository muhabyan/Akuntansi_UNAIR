const fs = require('fs');
let lines = fs.readFileSync('src/components/QuizView.tsx', 'utf8').split('\n');
const startIdx = lines.findIndex(l => l.includes('{mode === \'exam\' && !examStarted && !submitted && ('));
const navStart = lines.findIndex(l => l.includes('{mode === \'exam\' && examContentVisible && ('));
const navEnd = lines.findIndex((l, i) => i > navStart && l.includes('</section>')) + 2; 

// Extract nav block
const navBlock = lines.slice(navStart, navEnd);
lines.splice(navStart, navEnd - navStart);

// recalculate questionsEnd
const questionsEnd = lines.findIndex(l => l.includes('{mode === \'exam\' && (')) - 1;

lines.splice(questionsEnd, 0, 
  '        </div>', 
  '',
  '        {/* Sidebar Navigasi */}',
  '        <div className="w-full shrink-0 xl:sticky xl:top-24 xl:w-[22rem]">',
  ...navBlock.map(l => '  ' + l),
  '        </div>',
  '      </div>'
);

lines.splice(startIdx + 6, 0, 
  '      <div className="flex flex-col items-start gap-6 xl:flex-row xl:gap-8">',
  '        <div className="w-full min-w-0 flex-1 space-y-6">'
);

// We should also replace the layout inside navBlock to match the sidebar.
// Originally: <div className="grid grid-cols-5 gap-2 p-4 sm:grid-cols-10 md:grid-cols-12">
// Now we want: <div className="grid grid-cols-5 gap-2 p-4 sm:grid-cols-8 xl:grid-cols-5">

fs.writeFileSync('src/components/QuizView.tsx', lines.join('\n'));
