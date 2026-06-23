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

check(home.includes('Stage 5'), 'Stage 5 source header is present');
check(home.includes('function scrollToVolume'), 'Stage 5 adds source-level volume scrolling helper');
check(home.includes('Volume locator'), 'Stage 5 renders public volume locator label');
check(home.includes('semester-volume-locator'), 'Stage 5 locator section is present');
check(home.includes('semester-volume-locator__jumps'), 'Stage 5 locator jump list is present');
check(home.includes('data-volume-jump={semester.id}'), 'Stage 5 marks locator jumps for auditability');
check(home.includes('data-volume-anchor={semester.id}'), 'Stage 5 marks volume targets for auditability');
check(home.includes('id={`volume-${semester.id}`}'), 'Stage 5 adds stable DOM targets for every volume');
check(home.includes("block: 'center'"), 'Stage 5 scrolls locator targets to the center of the viewport');
check(!/ALL_COURSES|course_count|total_sks|MetricCard|StatCard|DashboardCard/i.test(home), 'Stage 5 does not derive dashboard metrics');
check(!/<table\b/i.test(home), 'Stage 5 still avoids tables in HomeView');
check(!/kotak-kotak|mencari referensi|02 semester tersedia|SKS terbaca|mata kuliah aktif|dashboard kotak/i.test(home), 'Stage 5 keeps internal or dashboard copy absent');
check(css.includes('Stage 5'), 'Stage 5 CSS block is present');
check(css.includes('.semester-volume-locator__jumps button'), 'Stage 5 locator jump style is present');
check(css.includes('border-top: 1px solid var(--journey-line)'), 'Stage 5 uses separators rather than containers');

const stage5Css = css.slice(css.indexOf('/* Stage 5'), css.indexOf('/* Stage 6'));
check(!/box-shadow\s*:/.test(stage5Css), 'Stage 5 CSS does not introduce shadows');
check(!/border-radius\s*:/.test(stage5Css), 'Stage 5 CSS does not introduce rounded card containers');
check(!/background\s*:/.test(stage5Css), 'Stage 5 CSS does not introduce filled panels');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
