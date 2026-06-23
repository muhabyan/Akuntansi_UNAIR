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
const nav = read('src/components/Navbar.tsx');
const css = read('src/styles/landing-semester-experience.css');
const ci = read('scripts/test-ci-bounded.mjs');

check(home.includes('Stage 9'), 'HomeView declares Stage 9 scope');
check(home.includes('data-experience-stage="stage-9"'), 'Stage 9 home marker is present');
check(home.includes('useScrollReveal'), 'HomeView adds runtime scroll reveal hook');
check(home.includes('IntersectionObserver'), 'Scroll reveal uses viewport IntersectionObserver');
check((home.match(/data-scroll-reveal/g) || []).length >= 6, 'Multiple home sections/items are marked for reveal');
check(nav.includes('stage9-navbar'), 'Navbar has Stage 9 root class');
check(nav.includes('data-navbar-stage="stage-9"'), 'Navbar has Stage 9 audit marker');
check(nav.includes('stage9-nav-shell'), 'Navbar shell has Stage 9 class');
check(nav.includes('stage9-nav-pill'), 'Navbar desktop nav pill is present');
check(nav.includes('stage9-mobile-toggle'), 'Navbar mobile toggle exists');
check(nav.includes('stage9-mobile-panel'), 'Navbar mobile panel exists');
check(nav.includes('closeMenus'), 'Navbar central close handler exists');
check(nav.includes("activeMenu === 'materi' && <MegaMenu"), 'Mega menu is rendered outside clipped desktop segment');
check(nav.includes("activeMenu === 'quiz' && <QuizMegaMenu"), 'Quiz menu is rendered outside clipped desktop segment');
check(nav.includes("activeMenu === 'laporan' &&"), 'Report menu is rendered outside clipped desktop segment');
check(css.includes('Stage 9 — Navbar interaction + viewport scroll reveal fix'), 'Stage 9 CSS block exists');
check(css.includes('.stage9-navbar {'), 'Stage 9 navbar CSS exists');
check(css.includes('pointer-events: auto !important'), 'Navbar pointer events are restored');
check(css.includes('overflow: visible !important'), 'Navbar shell no longer clips menus');
check(css.includes('[data-scroll-reveal]'), 'Reveal CSS selector exists');
check(css.includes('.is-visible'), 'Visible reveal state exists');
check(css.includes('prefers-reduced-motion'), 'Reduced motion handling exists');
check(ci.includes('stage9_navbar_scroll_reveal'), 'Stage 9 guard is registered in bounded CI');
check(!/<table\b/i.test(home), 'Homepage remains table-free');
check(!/kotak-kotak|mencari referensi|02 semester tersedia|SKS terbaca|mata kuliah aktif|dashboard kotak/i.test(home), 'No internal or dashboard copy leaks');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
