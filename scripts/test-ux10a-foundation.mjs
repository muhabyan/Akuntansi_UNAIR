import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

const root = process.env.UX10A_ROOT ? path.resolve(process.env.UX10A_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const passes = [];

function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

const cssPath = 'src/styles/ux-v2.css';
const css = read(cssPath);
const app = read('src/App.tsx');
const navbar = read('src/components/Navbar.tsx');
const themeSwitch = read('src/components/ThemeSwitch.tsx');
const courseLayout = read('src/components/course/CourseLayout.tsx');
const main = read('src/main.tsx');

check(main.includes("import './index.css';\nimport './styles/ux-v2.css';"), 'UX stylesheet loads after legacy stylesheet');
check(main.includes("import './styles/uiux-final-completion.css';"), 'Final completion stylesheet is loaded');
check(app.includes("selectedCourse?.code === 'AKM201' && !routeNotFound"), 'AKBI-only feature gate is exact');
check(app.includes('uiux-final-shell ux-v2'), 'Global UX v2 shell class is unconditional');
check(app.includes("' ux-v2--akbi'"), 'AKBI provenance modifier remains conditional');
check(app.includes("data-ux-pilot={isUxV2Pilot ? 'AKM201' : undefined}"), 'Pilot provenance attribute is conditional');
check(app.includes('data-theme={theme}'), 'Theme attribute is global for final rollout');
check(app.includes('data-ux-release="UIUX_FINAL_COMPLETE"'), 'Final rollout provenance attribute is declared');
check(app.includes('href="#main-content"'), 'Global skip link target is declared');
check(app.includes('id="main-content"'), 'Main target id is global');
check(app.includes('tabIndex={-1}'), 'Main focusability is global');
check(!app.includes("id={isUxV2Pilot ? 'main-content' : undefined}"), 'Pilot-only main id gate is removed');
check(!app.includes('tabIndex={isUxV2Pilot ? -1 : undefined}'), 'Pilot-only main focus gate is removed');
check(app.includes('isQuietThemeControl={true}'), 'Quiet theme control is enabled globally from App');
check(navbar.includes("variant={isQuietThemeControl ? 'quiet' : 'legacy'}"), 'Navbar quiet theme control has explicit non-pilot prop');
check(themeSwitch.includes("variant?: 'legacy' | 'quiet'"), 'Theme control preserves legacy variant');
check(themeSwitch.includes('className="ux-v2-theme-toggle"'), 'Pilot theme control uses semantic primitive');
check(navbar.includes('ux-v2-brand-mark'), 'Pilot brand mark has semantic override hook');
check(courseLayout.includes('course-progress-ring'), 'Pilot progress ring has semantic override hook');

const ast = postcss.parse(css, { from: cssPath });
const rootSelectorPattern = /^\.ux-v2(?=$|[.:[#\s>+~])/;
ast.walkRules((rule) => {
  for (const selector of rule.selectors ?? []) {
    const normalized = selector.trim();
    if (!rootSelectorPattern.test(normalized)) failures.push(`Unscoped selector: ${normalized}`);
  }
});
check(!/:root\b|\bhtml(?:\.|\[|\s|:)|\bbody(?:\.|\[|\s|:)/.test(css), 'No root/html/body selector leakage');
check(!/gradient\s*\(/i.test(css), 'Pilot stylesheet contains no gradient function');
let activeBackdrop = false;
ast.walkDecls((decl) => {
  if ((decl.prop === 'backdrop-filter' || decl.prop === '-webkit-backdrop-filter') && decl.value.trim() !== 'none') activeBackdrop = true;
});
check(!activeBackdrop, 'Pilot stylesheet contains no active backdrop blur');
check(!/animation\s*:\s*[^;]*(?:infinite|linear)/i.test(css), 'Pilot stylesheet contains no continuous animation');

const requiredLight = {
  '--ux-canvas': '#f7f6f2', '--ux-surface': '#ffffff', '--ux-surface-soft': '#eeede8',
  '--ux-text-primary': '#171a1f', '--ux-text-secondary': '#3f4752', '--ux-text-muted': '#59636f',
  '--ux-border-subtle': '#d3d7dc', '--ux-border-control': '#7e8996', '--ux-accent': '#28528f',
  '--ux-accent-strong': '#1f416f', '--ux-accent-soft': '#e9f0fa', '--ux-text-inverse': '#ffffff',
};
const requiredDark = {
  '--ux-canvas': '#101317', '--ux-surface': '#171b21', '--ux-surface-soft': '#20262d',
  '--ux-text-primary': '#f3f1eb', '--ux-text-secondary': '#c8cdd4', '--ux-text-muted': '#aab2bc',
  '--ux-border-subtle': '#343c45', '--ux-border-control': '#626d79', '--ux-accent': '#91b9ff',
  '--ux-accent-strong': '#b4cdff', '--ux-accent-soft': '#1c2b3e', '--ux-text-inverse': '#101317',
};

function declarationsFor(selector) {
  const values = new Map();
  ast.walkRules((rule) => {
    if ((rule.selectors ?? []).includes(selector)) {
      rule.walkDecls((decl) => values.set(decl.prop, { value: decl.value.toLowerCase(), important: decl.important }));
    }
  });
  return values;
}
function tokenDeclarations(selector) {
  const values = new Map();
  ast.walkRules((rule) => {
    if ((rule.selectors ?? []).includes(selector)) rule.walkDecls((decl) => values.set(decl.prop, decl.value.toLowerCase()));
  });
  return values;
}
const light = tokenDeclarations('.ux-v2');
const dark = tokenDeclarations('.ux-v2[data-theme="dark"]');
for (const [token, value] of Object.entries(requiredLight)) check(light.get(token) === value, `Light token ${token}`, `expected ${value}, got ${light.get(token)}`);
for (const [token, value] of Object.entries(requiredDark)) check(dark.get(token) === value, `Dark token ${token}`, `expected ${value}, got ${dark.get(token)}`);

function rgb(hex) {
  const raw = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(raw.slice(i, i + 2), 16) / 255);
}
function luminance(hex) {
  return rgb(hex).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((sum, c, index) => sum + c * [0.2126, 0.7152, 0.0722][index], 0);
}
function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}
const contrastPairs = [
  ['light primary/canvas', requiredLight['--ux-text-primary'], requiredLight['--ux-canvas'], 4.5],
  ['light secondary/canvas', requiredLight['--ux-text-secondary'], requiredLight['--ux-canvas'], 4.5],
  ['light muted/canvas', requiredLight['--ux-text-muted'], requiredLight['--ux-canvas'], 4.5],
  ['light accent/surface', requiredLight['--ux-accent'], requiredLight['--ux-surface'], 4.5],
  ['light control/surface', requiredLight['--ux-border-control'], requiredLight['--ux-surface'], 3],
  ['light primary CTA', requiredLight['--ux-text-inverse'], requiredLight['--ux-accent'], 4.5],
  ['light primary CTA hover', requiredLight['--ux-text-inverse'], requiredLight['--ux-accent-strong'], 4.5],
  ['dark primary/canvas', requiredDark['--ux-text-primary'], requiredDark['--ux-canvas'], 4.5],
  ['dark secondary/canvas', requiredDark['--ux-text-secondary'], requiredDark['--ux-canvas'], 4.5],
  ['dark muted/canvas', requiredDark['--ux-text-muted'], requiredDark['--ux-canvas'], 4.5],
  ['dark accent/surface', requiredDark['--ux-accent'], requiredDark['--ux-surface'], 4.5],
  ['dark control/surface', requiredDark['--ux-border-control'], requiredDark['--ux-surface'], 3],
  ['dark primary CTA', requiredDark['--ux-text-inverse'], requiredDark['--ux-accent'], 4.5],
  ['dark primary CTA hover', requiredDark['--ux-text-inverse'], requiredDark['--ux-accent-strong'], 4.5],
];
for (const [label, fg, bg, minimum] of contrastPairs) {
  const ratio = contrast(fg, bg);
  check(ratio >= minimum, `Contrast ${label} ${ratio.toFixed(2)}:1`, `minimum ${minimum}:1`);
}

function expectDeclaration(selector, property, value, label, important = undefined) {
  const declaration = declarationsFor(selector).get(property);
  const valuePass = declaration?.value === value;
  const importancePass = important === undefined || declaration?.important === important;
  check(Boolean(valuePass && importancePass), label, `expected ${property}: ${value}${important ? ' !important' : ''}; got ${declaration ? `${declaration.value}${declaration.important ? ' !important' : ''}` : 'missing'}`);
}
expectDeclaration('.ux-v2 .btn-primary', 'background', 'var(--ux-accent)', 'Primary CTA uses solid accent', true);
expectDeclaration('.ux-v2 .btn-primary', 'color', 'var(--ux-text-inverse)', 'Primary CTA uses contrast-safe text', true);
expectDeclaration('.ux-v2 .glass-primary-action', 'background', 'var(--ux-accent)', 'Quiz primary CTA uses solid accent', true);
expectDeclaration('.ux-v2 .btn-secondary', 'backdrop-filter', 'none', 'Secondary CTA removes backdrop blur');
expectDeclaration('.ux-v2 .glass-input-shell', 'backdrop-filter', 'none', 'Search shell removes backdrop blur', true);
expectDeclaration('.ux-v2 .learning-surface', 'background-image', 'none', 'Learning surface removes inherited gradient', true);
expectDeclaration('.ux-v2 .quiz-question-card', 'background-image', 'none', 'Quiz card removes inherited gradient', true);
expectDeclaration('.ux-v2 .practice-builder-card', 'background-image', 'none', 'Practice card removes inherited gradient', true);
expectDeclaration('.ux-v2 .essay-question-card', 'background-image', 'none', 'Essay card removes inherited gradient', true);
expectDeclaration('.ux-v2 .flashcard-study-card', 'background-image', 'none', 'Flashcard study card removes inherited gradient', true);
expectDeclaration('.ux-v2 .glass-menu-section', 'background-image', 'none', 'Menu section removes inherited gradient', true);
expectDeclaration('.ux-v2 .ux-v2-brand-mark', 'background', 'var(--ux-accent)', 'Brand mark uses solid accent', true);
expectDeclaration('.ux-v2 .course-progress-ring', 'background', 'var(--ux-surface-soft)', 'Progress ring overrides inline conic gradient', true);
expectDeclaration('.ux-v2 [class*="bg-gradient-to-"]', 'background-image', 'none', 'Tailwind gradient utilities are neutralized', true);
expectDeclaration('.ux-v2 [class*="backdrop-blur"]', 'backdrop-filter', 'none', 'Tailwind backdrop utilities are neutralized', true);
expectDeclaration('.ux-v2 .blur-\\[90px\\]', 'display', 'none', 'Arbitrary 90px ambient blur is hidden', true);
expectDeclaration('.ux-v2 .blur-\\[90px\\]', 'filter', 'none', 'Arbitrary 90px ambient blur filter is neutralized', true);
expectDeclaration('.ux-v2[data-ux-pilot="AKM201"] .quiz-question-card .bg-gold', 'color', 'var(--ux-text-inverse)', 'Nested quiz accent action uses contrast-safe text', true);
expectDeclaration('.ux-v2[data-ux-pilot="AKM201"] .practice-builder-card .bg-gold', 'color', 'var(--ux-text-inverse)', 'Nested practice accent action uses contrast-safe text', true);
expectDeclaration('.ux-v2[data-ux-pilot="AKM201"] .learning-surface .bg-gold', 'color', 'var(--ux-text-inverse)', 'Nested learning accent action uses contrast-safe text', true);

check(css.includes('--color-gold: 40 82 143;') && css.includes('--color-gold: 145 185 255;'), 'Legacy accent bridge maps to AKBI ink blue in both themes');
check(css.includes('.ux-v2 .course-shell::before') && css.includes('display: none;'), 'Inherited course ambient glow is disabled');
check(css.includes('.ux-v2 .blur-3xl') && css.includes('display: none !important;'), 'Decorative blur utilities are disabled');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion contract is present');

const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
