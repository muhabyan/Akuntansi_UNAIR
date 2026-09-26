import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

const root = process.env.CURRENT_UI_ROOT ? path.resolve(process.env.CURRENT_UI_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const main = read('src/main.tsx');
const app = read('src/App.tsx');
const navbar = read('src/components/Navbar.tsx');
const themeSwitch = read('src/components/ThemeSwitch.tsx');
const sidebar = read('src/components/course/CourseSidebar.tsx');
const home = read('src/components/HomeView.tsx');
const courseLayout = read('src/components/course/CourseLayout.tsx');
const css = read('src/index.css');
const failures = [];
let checks = 0;
const check = (condition, label) => { checks++; if (!condition) failures.push(label); };

check(main.includes("import './index.css';"), 'Active stylesheet is imported');
check(!main.includes("import './styles/ux-v2.css';"), 'Dormant UX v2 stylesheet is not imported');
check(app.includes("html.classList.toggle('dark', theme === 'dark')"), 'Theme toggles html.dark');
check(css.includes('html.dark {') && css.includes('--color-bg-page:'), 'Active stylesheet defines light and dark theme tokens');
check(app.includes('href="#main-content"') && app.includes('id="main-content"') && app.includes('tabIndex={-1}'), 'Skip link has a focusable target');
check(css.includes('.ux-v2-skip-link:focus-visible'), 'Skip link becomes visible on focus');
check(app.includes('isQuietThemeControl={true}') && navbar.includes("variant={isQuietThemeControl ? 'quiet' : 'legacy'}"), 'Quiet theme control is wired');
check(themeSwitch.includes('className="ux-v2-theme-toggle"') && css.includes('.ux-v2-theme-toggle'), 'Active stylesheet styles the theme control');
check(navbar.includes('className="stage9-mobile-toggle lg:hidden"') && navbar.includes('aria-expanded={mobileOpen}') && css.includes('.stage9-mobile-panel'), 'Mobile menu has state and active styles');
check(navbar.includes('AkuntansiHub<span'), 'Current navbar renders the site brand');
check(sidebar.includes('role="progressbar"') && sidebar.includes('aria-valuenow={percent}') && sidebar.includes('style={{ width: `${percent}%` }}'), 'Course progress uses an accessible bar with dynamic width');
check(app.includes('<CourseLayout course={selectedCourse}') && app.includes('<CourseDetailView'), 'Course route chooses the registered layout');
check(['AKK202', 'PJK301', 'SII306', 'MNK201'].every((code) => app.includes(`'${code}'`)), 'All four UTS courses use the active course layout');
check(home.includes('onSelectSemester(semester.id)') && home.includes('disabled={isLocked}') && home.includes('aria-label={isLocked'), 'Home semester entry excludes locked semesters');
check(navbar.includes("event.key === 'Escape'") && navbar.includes("document.addEventListener('mousedown', onClick)") && navbar.includes('closeMenus();'), 'Active navbar has Escape, outside-click, and selection close paths');
check(navbar.includes("activeMenu === 'materi' && <MegaMenu") && navbar.includes("activeMenu === 'quiz' && <QuizMegaMenu") && navbar.includes("activeMenu === 'laporan' &&"), 'Active navbar mounts all three menus outside the clipped button row');
check(courseLayout.includes('label="Simulasi UTS"') && courseLayout.includes("navigateToReview('uts')") && courseLayout.includes("id: 'bank_soal'") && courseLayout.includes("id: 'flashcards'"), 'Course workspace connects UTS review, cases, and flashcards');
check(css.includes('@media (prefers-reduced-motion: reduce)') && css.includes(':where(button, a, input, select, textarea):focus-visible'), 'Active stylesheet covers reduced motion and keyboard focus');

const tokens = { light: new Map(), dark: new Map() };
postcss.parse(css).walkRules((rule) => {
  if (rule.selector !== ':root' && rule.selector !== 'html.dark') return;
  const theme = rule.selector === ':root' ? 'light' : 'dark';
  rule.walkDecls(/^--color-(?:bg-page|text-title|text-main|text-description|text-muted)$/, (declaration) => {
    tokens[theme].set(declaration.prop, declaration.value.trim().split(/\s+/).map(Number));
  });
});
const luminance = (rgb) => rgb.map((channel) => {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (a, b) => {
  if (!a || !b || a.length !== 3 || b.length !== 3 || [...a, ...b].some((value) => !Number.isFinite(value))) return 0;
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
};
for (const theme of ['light', 'dark']) {
  for (const name of ['title', 'main', 'description', 'muted']) {
    const ratio = contrast(tokens[theme].get('--color-bg-page'), tokens[theme].get(`--color-text-${name}`));
    check(ratio >= 4.5, `${theme} ${name} text token contrast is at least 4.5:1 (actual ${ratio.toFixed(2)}:1)`);
  }
}

const result = { pass: failures.length === 0, checks, passed: checks - failures.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
