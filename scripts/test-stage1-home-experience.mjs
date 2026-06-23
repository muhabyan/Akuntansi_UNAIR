import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const passes = [];

function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

const home = read('src/components/HomeView.tsx');
const css = read('src/styles/landing-semester-experience.css');
const main = read('src/main.tsx');

const volumeMatches = [...home.matchAll(/label:\s*'Vol\.\s*[IVX]+'/g)];
check(volumeMatches.length === 8, 'Home experience exposes eight semester volumes', `found ${volumeMatches.length}`);
check(home.includes('Eight semesters.'), 'Hero keeps the editorial eight-semester premise');
check(home.includes('One journey.'), 'Hero keeps concise journey copy');
check(home.includes('Lihat 8 Volume'), 'Primary CTA uses volume language instead of dashboard metrics');
check(home.includes('Preview'), 'Locked semesters use public-facing Preview label');
check(!home.includes('Planned'), 'Internal roadmap label Planned is absent');
check(!home.includes('02 semester tersedia'), 'Unlocked-count dashboard copy is absent');
check(!/kotak-kotak|mencari referensi|dashboard kotak/i.test(home), 'Internal design-process copy is absent');
check(!/<table\b/i.test(home), 'Homepage source does not render curriculum tables');
check(!/MetricCard|featureBadge|StatCard/i.test(home), 'Dashboard-card component language is absent from homepage');
check(home.includes('Enter') && home.includes('Preview'), 'Open and locked volume affordances are present');
check(main.includes("import './styles/landing-semester-experience.css';"), 'Stage 1 landing stylesheet is imported');
check(css.includes('.semester-experience'), 'Stage 1 CSS is scoped to the home experience');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion treatment is present');
check(!/box-shadow:\s*0\s+24px\s+80px/i.test(css), 'Heavy AI-dashboard glow shadow is absent');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
