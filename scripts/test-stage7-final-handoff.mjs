import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const failures = [];
const passes = [];

function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

const home = read('src/components/HomeView.tsx');
const css = read('src/styles/landing-semester-experience.css');
const ci = read('scripts/test-ci-bounded.mjs');
const pkg = read('package.json');

check(home.includes('semester-experience--final'), 'Final consolidated root class remains present');
check((/data-experience-stage="stage-(8|9)"/.test(home)), 'Stage 8/9 visual polish marker supersedes Stage 7 final baseline');
check(home.includes('data-layout-density="visual-polished"'), 'Visual polished layout density marker remains present');
check(!home.includes('Reading order'), 'Noisy reading-order copy remains removed');
check(home.includes('Curriculum Rhythm'), 'Curriculum Rhythm remains visible');
check(home.includes('Entrance Pathway'), 'Entrance Pathway remains visible');
check(home.includes('Volume locator'), 'Volume locator remains visible');
check(home.includes('Open Access'), 'Open Access remains visible');
check(home.includes('Mulai Vol. I'), 'Primary entrance remains visible');
check((home.match(/data-volume-anchor=/g) || []).length === 1, 'Volume anchor attribute is emitted through the volume list template');
check((home.match(/data-volume-jump=/g) || []).length === 1, 'Volume jump attribute is emitted through the locator template');
check((home.match(/label: 'Vol\. /g) || []).length === 8, 'Eight volume definitions remain present');
check((home.match(/roman: '/g) || []).length === 8, 'Eight roman numerals remain present');
check(!/ALL_COURSES|course_count|total_sks|MetricCard|StatCard|DashboardCard/i.test(home), 'No dashboard metric derivation is introduced');
check(!/<table\b/i.test(home), 'Homepage remains table-free');
check(!/kotak-kotak|mencari referensi|02 semester tersedia|SKS terbaca|mata kuliah aktif|dashboard kotak/i.test(home), 'No internal or dashboard copy leaks into HomeView');
check(css.includes('semester-experience--final'), 'Final CSS scope remains present');
check(css.includes('semester-experience--polished'), 'Stage 8 polish CSS scope remains present');
check(css.includes('scroll-margin-top: 5rem'), 'Final scroll polish remains present');
check(ci.includes('stage1_home_experience'), 'Stage 1 guard remains in CI');
check(ci.includes('stage2_home_refinement'), 'Stage 2 guard remains in CI');
check(ci.includes('stage3_home_continuity'), 'Stage 3 guard remains in CI');
check(ci.includes('stage4_home_pathway'), 'Stage 4 guard remains in CI');
check(ci.includes('stage5_home_locator'), 'Stage 5 guard remains in CI');
check(ci.includes('stage6_home_consolidation'), 'Stage 6 guard remains in CI');
check(ci.includes('stage7_final_handoff'), 'Stage 7 final handoff guard is registered in CI');
check(pkg.includes('"test": "node scripts/test-ci-bounded.mjs"'), 'Standard npm test remains bounded and deterministic');
check(exists('src/components/SemesterView.tsx'), 'SemesterView remains in protected location');
check(exists('src/components/Semester2CatalogView.tsx'), 'Semester2CatalogView remains in protected location');
check(exists('src/data/courseData.ts'), 'Course data remains in protected location');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
