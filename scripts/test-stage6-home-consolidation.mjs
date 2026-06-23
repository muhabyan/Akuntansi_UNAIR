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

check(home.includes('semester-experience--final'), 'Final root class remains present');
check((/data-experience-stage="stage-(8|9)"/.test(home)), 'Stage 8/9 supersedes Stage 6 audit marker');
check(home.includes('data-layout-density="visual-polished"'), 'Visual polished layout density marker is present');
check(!home.includes('Reading order'), 'Stage 8 removes noisy reading-order copy after browser QA');
check(home.includes('Gunakan locator untuk membaca delapan volume secara cepat'), 'Program journey copy remains present');
check(home.includes('Gunakan indeks ini sebagai titik kembali'), 'Open access copy remains present');
check(home.includes('Volume locator'), 'Stage 5 locator remains available');
check(home.includes('Entrance Pathway'), 'Stage 4 pathway remains available');
check(home.includes('Open Access'), 'Stage 3 open access remains available');
check(!/ALL_COURSES|course_count|total_sks|MetricCard|StatCard|DashboardCard/i.test(home), 'No dashboard metric derivation is introduced');
check(!/<table\b/i.test(home), 'Homepage remains table-free');
check(!/kotak-kotak|mencari referensi|02 semester tersedia|SKS terbaca|mata kuliah aktif|dashboard kotak/i.test(home), 'Internal or dashboard copy remains absent');
check(css.includes('Stage 6'), 'Stage 6 CSS history block remains present');
check(css.includes('Stage 8'), 'Stage 8 polish block is present');
check(css.includes('scroll-margin-top: 5rem'), 'Stable scroll margin polish remains present');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
