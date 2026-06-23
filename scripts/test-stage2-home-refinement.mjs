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
const stage2Css = css.slice(css.indexOf('/* Stage 2'), css.indexOf('/* Stage 3'));

check(home.includes('Curriculum Rhythm'), 'Stage 2 adds curriculum rhythm editorial section');
check(home.includes('JOURNEY_MOVEMENTS'), 'Stage 2 movement data is source-level and static');
check(home.includes('semester-volume-rail'), 'Stage 2 adds a compact volume rail');
check(home.includes('Preview only') && home.includes('Open volume'), 'Stage 2 uses public status language');
check(!home.includes('mata kuliah ·'), 'Home list avoids dashboard metric strings in volume rows');
check(!home.includes('ALL_COURSES'), 'Home no longer derives dashboard-style course counts');
check(home.includes('movement:'), 'Every volume receives a narrative movement line');
check((home.match(/movement:\s*'/g) || []).length === 8, 'All eight volumes define movement copy');
check(css.includes('.semester-arc'), 'Stage 2 arc styles are present');
check(css.includes('.semester-volume__movement'), 'Stage 2 volume movement style is present');
check(css.includes('.semester-volume-rail'), 'Stage 2 volume rail style is present');
check(!/semester-arc[^}]+{[^}]*border-radius:/s.test(stage2Css), 'Stage 2 arc does not introduce rounded card containers');
check(!/semester-arc__[^{]+{[^}]*box-shadow:/s.test(stage2Css), 'Stage 2 arc avoids card-like shadows');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
