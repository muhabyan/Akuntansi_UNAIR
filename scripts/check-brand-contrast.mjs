const colors = {
  white: '#FFFFFF', 'gray-50': '#F7F5F0', 'gray-300': '#CFC8BC',
  'gray-400': '#A39B8E', 'gray-500': '#6E685F', 'gray-600': '#5F5A52',
  'gray-700': '#3E4A55', 'gray-800': '#222E3A', 'gray-900': '#182632',
  'blue-300': '#9ACBC6', 'blue-400': '#7FB8B4',
  'blue-600': '#2F6F73', 'blue-700': '#285D60',
};
const pairs = [
  ...['gray-500', 'gray-600', 'gray-700'].flatMap((fg) => ['white', 'gray-50'].map((bg) => [fg, bg])),
  ...['gray-300', 'gray-400'].flatMap((fg) => ['gray-800', 'gray-900'].map((bg) => [fg, bg])),
  ...['blue-600', 'blue-700'].map((fg) => [fg, 'white']),
  ['white', 'blue-600'],
  ...['blue-300', 'blue-400'].flatMap((fg) => ['gray-800', 'gray-900'].map((bg) => [fg, bg])),
];
function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map((part) => parseInt(part, 16) / 255);
  return channels.map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}
let failed = false;
console.log('| Text | Background | WCAG ratio | Normal text |');
console.log('|---|---|---:|---|');
for (const [fg, bg] of pairs) {
  const [light, dark] = [luminance(colors[fg]), luminance(colors[bg])].sort((a, b) => b - a);
  const ratio = (light + 0.05) / (dark + 0.05);
  if (ratio < 4.5) failed = true;
  console.log(`| ${fg} ${colors[fg]} | ${bg} ${colors[bg]} | ${ratio.toFixed(2)}:1 | ${ratio >= 4.5 ? 'Lulus' : 'Gagal'} |`);
}
if (failed) process.exitCode = 1;
