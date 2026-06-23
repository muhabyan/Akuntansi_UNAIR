import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const projectRoot = process.cwd();

function copyFixture(target) {
  fs.cpSync(path.join(projectRoot, 'src'), path.join(target, 'src'), { recursive: true });
}
function replaceOnce(file, search, replacement) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(search)) throw new Error(`Mutation anchor not found in ${file}: ${search}`);
  fs.writeFileSync(file, text.replace(search, replacement));
}
function append(file, text) { fs.appendFileSync(file, text); }

const mutations = [
  { id: 'pilot_gate_unconditional', apply(root) { replaceOnce(path.join(root, 'src/App.tsx'), "selectedCourse?.code === 'AKM201' && !routeNotFound", 'true'); } },
  { id: 'pilot_gate_wrong_course', apply(root) { replaceOnce(path.join(root, 'src/App.tsx'), "selectedCourse?.code === 'AKM201' && !routeNotFound", "selectedCourse?.code === 'AKK201' && !routeNotFound"); } },
  { id: 'unscoped_body_selector', apply(root) { append(path.join(root, 'src/styles/ux-v2.css'), '\nbody { background: #fff; }\n'); } },
  { id: 'prefix_selector_leak', apply(root) { append(path.join(root, 'src/styles/ux-v2.css'), '\n.ux-v2-leak-target { position: fixed; inset: 0; background: red; }\n'); } },
  { id: 'active_backdrop_blur', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), 'backdrop-filter: none;', 'backdrop-filter: blur(16px);'); } },
  { id: 'gradient_reintroduced', apply(root) { append(path.join(root, 'src/styles/ux-v2.css'), '\n.ux-v2 .mutation { background: linear-gradient(#fff, #000); }\n'); } },
  { id: 'muted_contrast_broken', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '--ux-text-muted: #59636f;', '--ux-text-muted: #ffffff;'); } },
  { id: 'dark_accent_contract_broken', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '--ux-accent: #91b9ff;', '--ux-accent: #20262d;'); } },
  { id: 'global_main_target_removed', apply(root) {
      replaceOnce(path.join(root, 'src/App.tsx'), 'id="main-content"\n        tabIndex={-1}', 'id={undefined}\n        tabIndex={undefined}');
    } },
  { id: 'quiet_theme_global_disabled', apply(root) { replaceOnce(path.join(root, 'src/App.tsx'), 'isQuietThemeControl={true}', 'isQuietThemeControl={false}'); } },
  { id: 'primary_cta_unsafe_text', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .btn-primary,\n.ux-v2 .glass-primary-action {\n  border: 1px solid var(--ux-accent-strong);\n  background: var(--ux-accent) !important;\n  background-image: none !important;\n  color: var(--ux-text-inverse) !important;', '.ux-v2 .btn-primary,\n.ux-v2 .glass-primary-action {\n  border: 1px solid var(--ux-accent-strong);\n  background: var(--ux-accent) !important;\n  background-image: none !important;\n  color: #1c1408 !important;'); } },
  { id: 'search_blur_restored', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .glass-input-shell:focus-within {', '.ux-v2 .glass-input-shell { backdrop-filter: blur(18px) !important; }\n\n.ux-v2 .glass-input-shell:focus-within {');
    } },
  { id: 'learning_gradient_override_removed', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .learning-surface,\n.ux-v2 .learning-card,', '.ux-v2 .learning-card,');
    } },
  { id: 'gradient_utility_neutralizer_removed', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .bg-calm-aurora,\n.ux-v2 [class*="bg-gradient-to-"] {', '.ux-v2 .bg-calm-aurora {');
    } },
  { id: 'progress_inline_gradient_not_overridden', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .course-progress-ring {\n  border: 8px solid var(--ux-accent);\n  background: var(--ux-surface-soft) !important;', '.ux-v2 .course-progress-ring {\n  border: 8px solid var(--ux-accent);\n  background: var(--ux-surface-soft);');
    } },
  { id: 'progress_hook_removed', apply(root) { replaceOnce(path.join(root, 'src/components/course/CourseLayout.tsx'), 'course-progress-ring relative', 'relative'); } },
  { id: 'brand_hook_removed', apply(root) { replaceOnce(path.join(root, 'src/components/Navbar.tsx'), 'ux-v2-brand-mark flex', 'flex'); } },
  { id: 'ambient_blur_restored', apply(root) {
      replaceOnce(
        path.join(root, 'src/styles/ux-v2.css'),
        '.ux-v2 .blur-xl,\n.ux-v2 .blur-2xl,\n.ux-v2 .blur-3xl,\n.ux-v2 .blur-\\[90px\\] {\n  display: none !important;\n  filter: none !important;\n}',
        '.ux-v2 .blur-xl,\n.ux-v2 .blur-2xl,\n.ux-v2 .blur-3xl,\n.ux-v2 .blur-\\[90px\\] {\n  display: block !important;\n  filter: blur(48px) !important;\n}',
      );
    } },
  { id: 'course_block_gradient_override_removed', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .course-block-heading,\n', ''); } },
  { id: 'table_header_gradient_override_removed', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 th {', '.ux-v2 .ux-v2-table-placeholder {'); } },
  { id: 'new_legacy_glass_class_uncovered', apply(root) { replaceOnce(path.join(root, 'src/components/SearchBar.tsx'), 'glass-input-shell flex', 'glass-input-shell glass-modal-panel flex'); } },
  { id: 'command_panel_override_removed', apply(root) { replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .glass-command-panel,\n', ''); } },

  // UX-1.0A.2 frozen adversarial probes from the independent audit.
  { id: 'arbitrary_blur_90_to_180', apply(root) {
      replaceOnce(path.join(root, 'src/components/FlashcardDeck.tsx'), 'blur-[90px]', 'blur-[180px]');
    } },
  { id: 'quiz_card_gradient_strengthened', apply(root) {
      replaceOnce(path.join(root, 'src/index.css'), 'background: linear-gradient(145deg, rgb(var(--surface-soft) / 0.88), rgb(var(--surface-muted) / 0.50));', 'background: linear-gradient(145deg, red, blue);');
    } },
  { id: 'nested_bg_gold_text_contrast_destroyed', apply(root) {
      replaceOnce(path.join(root, 'src/index.css'), 'color: rgb(28 20 8) !important;', 'color: rgb(40 82 143) !important;');
    } },

  // Direct closure probes ensure the new scoped safeguards themselves are required.
  { id: 'reachable_quiz_card_override_removed', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .quiz-question-card,\n', '');
    } },
  { id: 'arbitrary_blur_override_removed', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2 .blur-3xl,\n.ux-v2 .blur-\\[90px\\] {', '.ux-v2 .blur-3xl {');
    } },
  { id: 'nested_bg_gold_override_removed', apply(root) {
      replaceOnce(path.join(root, 'src/styles/ux-v2.css'), '.ux-v2[data-ux-pilot="AKM201"] .quiz-question-card .bg-gold,', '.ux-v2[data-ux-pilot="AKM201"] .ux-v2-missing-quiz-action,');
    } },
];

const results = [];
for (const mutation of mutations) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), `ux10a2-${mutation.id}-`));
  try {
    copyFixture(temp);
    mutation.apply(temp);
    const scripts = ['scripts/test-ux10a-foundation.mjs', 'scripts/test-ux10a-cascade.mjs'];
    const runs = scripts.map((script) => spawnSync(process.execPath, [script], {
      cwd: projectRoot,
      env: { ...process.env, UX10A_ROOT: temp },
      encoding: 'utf8',
      timeout: 30_000,
    }));
    const killed = runs.some((result) => result.status !== 0);
    results.push({
      id: mutation.id,
      killed,
      statuses: runs.map((result) => result.status),
      signals: runs.map((result) => result.signal),
      stderr_tail: runs.map((result) => (result.stderr ?? '').slice(-500)),
    });
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
}

const survived = results.filter((item) => !item.killed);
console.log(JSON.stringify({ pass: survived.length === 0, killed: results.length - survived.length, total: results.length, survived: survived.map((item) => item.id), results }, null, 2));
if (survived.length) process.exit(1);
