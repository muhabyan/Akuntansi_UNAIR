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
const app = read('src/App.tsx');
const css = read('src/styles/landing-semester-experience.css');

check(home.includes('Stage 8'), 'HomeView declares Stage 8 polish scope');
check(home.includes('semester-experience--polished'), 'Polished experience class is present');
check((/data-experience-stage="stage-(8|9)"/.test(home)), 'Stage 8/9 data marker is present');
check(home.includes('data-layout-density="visual-polished"'), 'Visual polished density marker is present');
check(!home.includes('semester-lede'), 'Hero supporting lede is removed');
check(!home.includes('Reading order'), 'Reading order block is removed');
check(!home.includes('FINAL_READING_ORDER'), 'Reading order data is removed');
check(!home.includes('Delapan semester dibaca sebagai alur studi'), 'Long hero side copy is removed');
check(!home.includes('Ruang belajar tiap mata kuliah tetap berada pada halaman terpisah'), 'Long side note is removed from hero');
check(home.includes('Fondasi, metode, praktik, lalu transisi profesional.'), 'Curriculum Rhythm copy is shorter');
check(nav.includes('stage8-navbar'), 'Navbar has Stage 8 scope class');
check(nav.includes('scrollProgress'), 'Navbar computes scroll progress');
check(nav.includes('stage8-scroll-progress'), 'Navbar renders subtle scroll progress cue');
check(nav.includes('stage8-brand-mark'), 'Navbar brand mark has Stage 8 override class');
check(app.includes("isHomeLanding ? 'pt-0'"), 'Home route removes disconnected top padding band');
check(css.includes('Stage 8 — Visual polish and motion refinement'), 'Stage 8 CSS block exists');
check(css.includes('.stage8-nav-shell'), 'Unified navbar shell styling exists');
check(css.includes('.stage8-brand-mark'), 'Brand mark styling exists');
check(css.includes('semester-subtle-reveal'), 'Subtle section reveal animation exists');
check(css.includes('font-size: clamp(3.6rem, 9.2vw, 8.4rem)'), 'Hero title scale is restrained');
check(!/font-size:\s*clamp\(4\.2rem,13vw,12rem\)/.test(home + css), 'Oversized old hero clamp is absent');
check(!/<table\b/i.test(home), 'Homepage remains table-free');
check(!/kotak-kotak|mencari referensi|02 semester tersedia|SKS terbaca|mata kuliah aktif|dashboard kotak/i.test(home), 'No internal/dashboard copy leaks');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
