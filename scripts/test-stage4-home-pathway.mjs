import fs from 'node:fs';
import path from 'node:path';

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

check(home.includes('Stage 4'), 'Stage 4 source header is present');
check(home.includes('ENTRANCE_PATHWAY'), 'Stage 4 defines a source-level entrance pathway');
check(home.includes('Entrance Pathway'), 'Stage 4 renders the entrance pathway label');
check(home.includes('Index first, then enter.'), 'Stage 4 adds editorial pathway headline');
check(home.includes('semester-pathway'), 'Stage 4 pathway section is present');
check((home.match(/step: '/g) || []).length === 3, 'Stage 4 pathway uses exactly three text-only steps');
check(home.includes('Workspace') && home.includes('halaman editorial ini'), 'Stage 4 clarifies workspace remains separate');
check(!/ALL_COURSES|course_count|total_sks|MetricCard|StatCard|DashboardCard/i.test(home), 'Stage 4 does not derive dashboard metrics');
check(!/<table\b/i.test(home), 'Stage 4 still avoids tables in HomeView');
check(!/kotak-kotak|mencari referensi|02 semester tersedia|dashboard kotak|card-heavy language/i.test(home), 'Stage 4 keeps internal process copy absent');
check(css.includes('Stage 4'), 'Stage 4 CSS block is present');
check(css.includes('.semester-pathway__list'), 'Stage 4 pathway list style is present');
check(css.includes('border-top: 1px solid var(--journey-line)'), 'Stage 4 uses separators instead of boxes');
const stage4Css = css.slice(css.indexOf('/* Stage 4'), css.indexOf('/* Stage 5'));
check(!/box-shadow\s*:/.test(stage4Css), 'Stage 4 CSS does not introduce shadows');
check(!/border-radius\s*:/.test(stage4Css), 'Stage 4 CSS does not introduce rounded cards');
check(!/background\s*:/.test(stage4Css), 'Stage 4 CSS does not introduce filled panels');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
