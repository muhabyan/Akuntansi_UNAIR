import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

const root = process.env.UX10A_ROOT ? path.resolve(process.env.UX10A_ROOT) : process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const passes = [];
const check = (condition, label, detail = '') => condition ? passes.push(label) : failures.push(detail ? `${label}: ${detail}` : label);

const legacyCss = read('src/index.css');
const pilotCss = read('src/styles/ux-v2.css');
const legacyAst = postcss.parse(legacyCss, { from: 'src/index.css' });
const pilotAst = postcss.parse(pilotCss, { from: 'src/styles/ux-v2.css' });

const EXPECTED_LEGACY_CSS_SHA256 = '18b87a9540df3058251f920e6d49f15b8564753354d7e18c2925e263d1f5dd39';
const legacyCssSha256 = crypto.createHash('sha256').update(legacyCss).digest('hex');
check(
  legacyCssSha256 === EXPECTED_LEGACY_CSS_SHA256,
  'Legacy stylesheet remains byte-identical to the audited parent',
  `expected ${EXPECTED_LEGACY_CSS_SHA256}, got ${legacyCssSha256}`,
);

const sourceExtensions = ['.tsx', '.ts', '.jsx', '.js'];
function resolveLocalImport(fromFile, specifier) {
  if (!specifier.startsWith('.')) return null;
  const base = path.resolve(path.dirname(fromFile), specifier);
  const candidates = [
    base,
    ...sourceExtensions.map((extension) => `${base}${extension}`),
    ...sourceExtensions.map((extension) => path.join(base, `index${extension}`)),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) ?? null;
}
function importSpecifiers(source) {
  const values = [];
  for (const pattern of [
    /\bfrom\s+['"]([^'"]+)['"]/g,
    /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
    /\bimport\s+['"]([^'"]+)['"]/g,
  ]) {
    for (const match of source.matchAll(pattern)) values.push(match[1]);
  }
  return values;
}
function collectReachableSources(entries) {
  const queue = entries.map((entry) => path.join(root, entry));
  const visited = new Set();
  while (queue.length) {
    const file = queue.shift();
    if (!file || visited.has(file)) continue;
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      failures.push(`Reachable source missing: ${path.relative(root, file)}`);
      continue;
    }
    visited.add(file);
    const source = fs.readFileSync(file, 'utf8');
    for (const specifier of importSpecifiers(source)) {
      const resolved = resolveLocalImport(file, specifier);
      if (resolved && !visited.has(resolved)) queue.push(resolved);
    }
  }
  return [...visited].sort();
}

const pilotSourceFiles = collectReachableSources([
  'src/components/course/CourseLayout.tsx',
  'src/components/Navbar.tsx',
]);
const pilotSourceRel = pilotSourceFiles.map((file) => path.relative(root, file).split(path.sep).join('/'));
const sourceText = pilotSourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
for (const required of [
  'src/components/QuizView.tsx',
  'src/components/InteractivePracticeBuilders.tsx',
  'src/components/EssayBank.tsx',
  'src/components/FlashcardDeck.tsx',
  'src/components/FlashcardContent.tsx',
]) check(pilotSourceRel.includes(required), `Reachability includes ${required}`);
check(pilotSourceFiles.length >= 70, 'Reachable source closure is comprehensive', `found ${pilotSourceFiles.length}`);

function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function selectorContainsExactClass(selector, className) {
  const escaped = escapeRegExp(className);
  return new RegExp(`(^|[^A-Za-z0-9_-])\\.${escaped}(?![A-Za-z0-9_-])`).test(selector);
}
function rulesContainingClass(ast, className) {
  const rules = [];
  ast.walkRules((rule) => {
    if ((rule.selectors ?? []).some((selector) => selectorContainsExactClass(selector, className))) rules.push(rule);
  });
  return rules;
}
function hasDeclaration(ast, selector, property, predicate) {
  let matched = false;
  ast.walkRules((rule) => {
    if (!(rule.selectors ?? []).includes(selector)) return;
    rule.walkDecls(property, (decl) => { if (predicate(decl)) matched = true; });
  });
  return matched;
}
function hasAnyOverrideForClass(className, property, predicate) {
  let matched = false;
  pilotAst.walkRules((rule) => {
    if (!(rule.selectors ?? []).some((selector) => selector.startsWith('.ux-v2') && selectorContainsExactClass(selector, className))) return;
    rule.walkDecls(property, (decl) => { if (predicate(decl)) matched = true; });
  });
  return matched;
}

const customClassPattern = /\b((?:course|glass|learning|calm|akbi|grainient|quiz|practice|essay|flashcard)-[a-z0-9-]+)\b/g;
const usedCustomClasses = [...new Set([...sourceText.matchAll(customClassPattern)].map((match) => match[1]))].sort();
const legacyEffectClasses = [];
for (const className of usedCustomClasses) {
  let activeBackdrop = false;
  let activeGradient = false;
  for (const rule of rulesContainingClass(legacyAst, className)) {
    rule.walkDecls((decl) => {
      if ((decl.prop === 'backdrop-filter' || decl.prop === '-webkit-backdrop-filter') && decl.value.trim() !== 'none') activeBackdrop = true;
      if ((decl.prop === 'background' || decl.prop === 'background-image') && /gradient\s*\(/i.test(decl.value)) activeGradient = true;
    });
  }
  if (activeBackdrop || activeGradient) legacyEffectClasses.push({ className, activeBackdrop, activeGradient });
  if (activeBackdrop) check(
    hasAnyOverrideForClass(className, 'backdrop-filter', (decl) => decl.value.trim() === 'none'),
    `Effective backdrop neutralization .${className}`,
    'reachable legacy class has active backdrop but no scoped important none override',
  );
  if (activeGradient) check(
    hasAnyOverrideForClass(className, 'background-image', (decl) => decl.value.trim() === 'none') ||
      hasAnyOverrideForClass(className, 'background', (decl) => !/gradient\s*\(/i.test(decl.value)) ||
      hasAnyOverrideForClass(className, 'display', (decl) => decl.value.trim() === 'none'),
    `Effective gradient neutralization .${className}`,
    'reachable legacy class has gradient but no scoped important solid/none/hidden override',
  );
}
check(legacyEffectClasses.length >= 42, 'Legacy effect inventory covers expanded reachable prefixes', `found ${legacyEffectClasses.length}`);
for (const requiredClass of ['quiz-question-card', 'practice-builder-card', 'essay-question-card']) {
  check(legacyEffectClasses.some((item) => item.className === requiredClass && item.activeGradient), `Expanded inventory includes .${requiredClass}`);
}

const exactStateContracts = [
  ['.ux-v2 .glass-menu-item:not(:disabled):hover', 'background-image', 'none'],
  ['.ux-v2 .glass-menu-item.is-active', 'background-image', 'none'],
  ['.ux-v2 .glass-primary-action:hover', 'background', 'var(--ux-accent-strong)'],
  ['.ux-v2 .btn-primary:hover', 'background', 'var(--ux-accent-strong)'],
  ['.ux-v2 .glass-input-shell:focus-within', 'background', 'var(--ux-surface)'],
];
for (const [selector, property, value] of exactStateContracts) {
  check(hasDeclaration(pilotAst, selector, property, (decl) => decl.value.trim() === value), `State override ${selector} ${property}`);
}

for (const selector of ['.ux-v2 .quiz-question-card', '.ux-v2 .practice-builder-card', '.ux-v2 .essay-question-card', '.ux-v2 .flashcard-study-card']) {
  check(hasDeclaration(pilotAst, selector, 'background', (decl) => decl.value.trim() === 'var(--ux-surface)' && decl.important), `Solid reachable card ${selector}`);
  check(hasDeclaration(pilotAst, selector, 'background-image', (decl) => decl.value.trim() === 'none' && decl.important), `No reachable card gradient ${selector}`);
}

check(hasDeclaration(pilotAst, '.ux-v2 th', 'background-image', (decl) => decl.value.trim() === 'none' && decl.important), 'Table header gradients are neutralized');
check(hasDeclaration(pilotAst, '.ux-v2 .course-shell::before', 'display', (decl) => decl.value.trim() === 'none'), 'Course shell ambient pseudo is hidden');

check(sourceText.includes('bg-gradient-to-'), 'Pilot path includes legacy gradient utility fixtures');
check(hasDeclaration(pilotAst, '.ux-v2 [class*="bg-gradient-to-"]', 'background-image', (decl) => decl.value.trim() === 'none' && decl.important), 'Gradient utility neutralizer is scoped and important');
check(sourceText.includes('backdrop-blur-sm'), 'Pilot path includes legacy backdrop utility fixture');
check(hasDeclaration(pilotAst, '.ux-v2 [class*="backdrop-blur"]', 'backdrop-filter', (decl) => decl.value.trim() === 'none' && decl.important), 'Backdrop utility neutralizer is scoped and important');
check(sourceText.includes('blur-3xl'), 'Pilot path includes standard ambient blur fixture');
check(hasDeclaration(pilotAst, '.ux-v2 .blur-3xl', 'display', (decl) => decl.value.trim() === 'none' && decl.important), 'Standard ambient blur utility is disabled');

function cssEscapeClass(className) {
  return className.replace(/([^A-Za-z0-9_-])/g, '\\$1');
}
const arbitraryBlurClasses = [...new Set([...sourceText.matchAll(/\bblur-\[[^\]]+\]/g)].map((match) => match[0]))].sort();
check(arbitraryBlurClasses.length >= 1, 'Reachable arbitrary blur inventory is non-empty');
for (const className of arbitraryBlurClasses) {
  const selector = `.ux-v2 .${cssEscapeClass(className)}`;
  check(hasDeclaration(pilotAst, selector, 'display', (decl) => decl.value.trim() === 'none' && decl.important), `Arbitrary ambient blur hidden ${className}`);
  check(hasDeclaration(pilotAst, selector, 'filter', (decl) => decl.value.trim() === 'none' && decl.important), `Arbitrary ambient blur filter neutralized ${className}`);
}

const nestedActionSelectors = [
  '.ux-v2[data-ux-pilot="AKM201"] .quiz-question-card .bg-gold',
  '.ux-v2[data-ux-pilot="AKM201"] .practice-builder-card .bg-gold',
  '.ux-v2[data-ux-pilot="AKM201"] .essay-question-card .bg-gold',
  '.ux-v2[data-ux-pilot="AKM201"] .learning-surface .bg-gold',
  '.ux-v2[data-ux-pilot="AKM201"] .flashcard-study-card .bg-gold',
  '.ux-v2[data-ux-pilot="AKM201"] .flashcard-gacha-stage .bg-gold',
];
for (const selector of nestedActionSelectors) {
  check(hasDeclaration(pilotAst, selector, 'color', (decl) => decl.value.trim() === 'var(--ux-text-inverse)' && decl.important), `Nested accent action contrast override ${selector}`);
}

function tokenValue(selector, token) {
  let value;
  pilotAst.walkRules((rule) => {
    if ((rule.selectors ?? []).includes(selector)) rule.walkDecls(token, (decl) => { value = decl.value.trim().toLowerCase(); });
  });
  return value;
}
function rgb(hex) {
  const raw = hex.replace('#', '');
  return [0, 2, 4].map((index) => Number.parseInt(raw.slice(index, index + 2), 16) / 255);
}
function luminance(hex) {
  return rgb(hex).map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
    .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
}
function contrast(a, b) {
  const [high, low] = [luminance(a), luminance(b)].sort((left, right) => right - left);
  return (high + 0.05) / (low + 0.05);
}
const nestedContrast = {
  light: contrast(tokenValue('.ux-v2', '--ux-text-inverse'), tokenValue('.ux-v2', '--ux-accent')),
  dark: contrast(tokenValue('.ux-v2[data-theme="dark"]', '--ux-text-inverse'), tokenValue('.ux-v2[data-theme="dark"]', '--ux-accent')),
};
check(nestedContrast.light >= 4.5, `Nested accent action light contrast ${nestedContrast.light.toFixed(2)}:1`);
check(nestedContrast.dark >= 4.5, `Nested accent action dark contrast ${nestedContrast.dark.toFixed(2)}:1`);

const courseLayout = read('src/components/course/CourseLayout.tsx');
check((courseLayout.match(/conic-gradient/g) ?? []).length >= 1, 'Legacy inline conic-gradient fixture remains detectable');
check((courseLayout.match(/course-progress-ring/g) ?? []).length >= 2, 'Every progress ring carries scoped hook');
check(hasDeclaration(pilotAst, '.ux-v2 .course-progress-ring', 'background', (decl) => decl.value.trim() === 'var(--ux-surface-soft)' && decl.important), 'Inline conic gradient is overridden by important solid background');

const app = read('src/App.tsx');
check(app.includes('id="main-content"'), 'Main id is global for final rollout');
check(app.includes('tabIndex={-1}'), 'Main tabIndex is global for final rollout');
check(!app.includes("id={isUxV2Pilot ? 'main-content' : undefined}"), 'Conditional main id gate is absent');
check(!app.includes('tabIndex={isUxV2Pilot ? -1 : undefined}'), 'Conditional main tabIndex gate is absent');

const strictRoot = /^\.ux-v2(?=$|[.:[#\s>+~])/;
pilotAst.walkRules((rule) => {
  for (const selector of rule.selectors ?? []) check(strictRoot.test(selector.trim()), `Strict selector root ${selector.trim()}`);
});

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  reachable_source_count: pilotSourceFiles.length,
  reachable_sources: pilotSourceRel,
  legacy_css_sha256: legacyCssSha256,
  legacy_effect_classes: legacyEffectClasses,
  arbitrary_blur_classes: arbitraryBlurClasses,
  nested_action_contrast: nestedContrast,
  failures,
};
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
