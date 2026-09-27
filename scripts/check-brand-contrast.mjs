import config from '../tailwind.config.js';

const ramps = config.theme.extend.colors;
const families = [
  ['slate', ['gray', 'zinc', 'neutral']],
  ['blue', ['indigo', 'sky', 'cyan', 'violet', 'purple', 'pink']],
  ['emerald', ['green', 'teal']],
  ['red', ['rose']],
  ['amber', ['yellow', 'orange']],
];

function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map((part) => parseInt(part, 16) / 255);
  return channels.map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}
function contrast(foreground, background) {
  const [light, dark] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

let failed = false;
console.log('| Text | Background | WCAG ratio | Normal text |');
console.log('|---|---|---:|---|');
for (const [family, aliases] of families) {
  const scale = ramps[family];
  for (const alias of aliases) {
    if (JSON.stringify(ramps[alias]) !== JSON.stringify(scale)) {
      console.error(`Ramp ${alias} differs from ${family}`);
      failed = true;
    }
  }
  const pairs = [
    ...[600, 700].flatMap((step) => ['#FFFFFF', scale[50], scale[100]].map((bg) => [scale[step], bg, `${family}-${step}`])),
    ...[300, 400].flatMap((step) => [ramps.gray[800], ramps.gray[900]].map((bg) => [scale[step], bg, `${family}-${step}`])),
    ['#FFFFFF', scale[600], 'white'],
  ];
  for (const [fg, bg, name] of pairs) {
    const ratio = contrast(fg, bg);
    if (ratio < 4.5) failed = true;
    console.log(`| ${name} ${fg} | ${bg} | ${ratio.toFixed(2)}:1 | ${ratio >= 4.5 ? 'Lulus' : 'Gagal'} |`);
  }
}
if (failed) process.exitCode = 1;
