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
const stage3Css = css.slice(css.indexOf('/* Stage 3'), css.indexOf('/* Stage 4'));

check(home.includes('openVolumes = SEMESTERS.filter'), 'Stage 3 derives open volume affordances from SEMESTERS');
check(home.includes('semester-landing__actions'), 'Stage 3 adds landing action grouping');
check(home.includes('Mulai Vol. I'), 'Stage 3 adds a direct first-volume entrance');
check(home.includes('Terbuka:'), 'Stage 3 exposes public open-volume orientation text');
check(home.includes('data-volume-state'), 'Stage 3 marks volume state for source-level auditability');
check(home.includes('semester-volume--open'), 'Stage 3 distinguishes available volumes without using cards');
check(home.includes('semester-continuity'), 'Stage 3 adds continuity block after volume index');
check(home.includes('Open Access'), 'Stage 3 adds public open-access label');
check((home.match(/Enter \{volume\.copy\.label\}/g) || []).length === 1, 'Stage 3 maps open-volume links dynamically');
check(!/02 semester tersedia|kotak-kotak|mencari referensi|dashboard kotak|Planned/i.test(home), 'Stage 3 keeps internal copy absent');
check(!/<table\b/i.test(home), 'Stage 3 still avoids tables in home source');
check(!/ALL_COURSES|course_count|total_sks|MetricCard|StatCard/i.test(home), 'Stage 3 does not reintroduce dashboard metric derivation');
check(css.includes('Stage 3'), 'Stage 3 CSS block is present');
check(css.includes('.semester-continuity'), 'Stage 3 continuity CSS is present');
check(css.includes('.semester-cta--subtle'), 'Stage 3 secondary CTA style is present');
check(css.includes('.semester-volume--open .semester-volume__index::after'), 'Stage 3 open volume indicator is present');
check(!/box-shadow\s*:/.test(stage3Css), 'Stage 3 CSS does not introduce shadows');
check(!/border-radius\s*:/.test(stage3Css), 'Stage 3 CSS does not introduce rounded card containers');
check(!/background\s*:\s*color-mix[^;]*journey-accent[^;]*20%/i.test(stage3Css), 'Stage 3 CSS avoids heavy highlighted panels');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
