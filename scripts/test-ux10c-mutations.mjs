import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const sourceRoot = process.env.UX10C_ROOT ? path.resolve(process.env.UX10C_ROOT) : process.cwd();
const testScript = 'scripts/test-ux10c-dashboard.mjs';

const allMutations = [
  {
    id: 'dashboard_gate_leaks_to_akk201',
    file: 'src/components/course/CourseLayout.tsx',
    from: "course.code === 'AKM201' && !currentReading",
    to: "(course.code === 'AKM201' || course.code === 'AKK201') && !currentReading",
    dynamic: false,
  },
  {
    id: 'material_return_forgets_local_phase',
    file: 'src/components/course/CourseLayout.tsx',
    from: "if (tab === 'materi') switchTab(akbiMaterialPhase);",
    to: "if (tab === 'materi') switchTab('pra_uts');",
    dynamic: false,
  },
  {
    id: 'material_default_ignores_first_incomplete',
    file: 'src/components/course/CourseLayout.tsx',
    from: "const defaultPhase: AkbiMaterialPhase = nextTm !== null && nextTm >= 8 ? 'pra_uas' : 'pra_uts';",
    to: "const defaultPhase: AkbiMaterialPhase = 'pra_uts';",
    dynamic: false,
  },
  {
    id: 'first_incomplete_becomes_last_incomplete',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'const firstIncomplete = availableTms.find((tm) => !isDone(materialKeyFor(tm))) ?? null;',
    to: 'const firstIncomplete = [...availableTms].reverse().find((tm) => !isDone(materialKeyFor(tm))) ?? null;',
    dynamic: true,
  },
  {
    id: 'complete_review_fallback_removed',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'const actionTm = firstIncomplete ?? availableTms[0] ?? null;',
    to: 'const actionTm = firstIncomplete ?? null;',
    dynamic: true,
  },
  {
    id: 'material_phase_filter_removed',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "const phaseTms = availableTms.filter((tm) => materialPhase === 'pra_uts' ? tm <= 7 : tm >= 8);",
    to: 'const phaseTms = availableTms;',
    dynamic: true,
  },
  {
    id: 'bank_capability_guard_removed',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "{ id: 'bank_soal' as const, label: 'Bank Soal', visible: hasBankSoal(course.code) },",
    to: "{ id: 'bank_soal' as const, label: 'Bank Soal', visible: true },",
    dynamic: false,
  },
  {
    id: 'simulation_capability_guard_removed',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "{ id: 'quiz' as const, label: 'Simulasi', visible: Boolean(reviews.uts && reviews.uas) },",
    to: "{ id: 'quiz' as const, label: 'Simulasi', visible: true },",
    dynamic: false,
  },
  {
    id: 'simulation_label_reverts_to_quiz',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "label: 'Simulasi'",
    to: "label: 'Kuis Interaktif'",
    dynamic: true,
  },
  {
    id: 'primary_nav_aria_current_removed',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "aria-current={active ? 'page' : undefined}",
    to: 'data-active={active}',
    dynamic: true,
  },
  {
    id: 'material_phase_group_name_globalized',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'name="akbi-material-phase"',
    to: 'name="global-phase"',
    dynamic: true,
  },
  {
    id: 'progressbar_semantics_removed',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'role="progressbar"',
    to: 'data-role="progressbar"',
    dynamic: true,
  },
  {
    id: 'feature_card_reintroduced',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'className="akbi-feature-heading"',
    to: 'className="akbi-feature-heading course-feature-card"',
    dynamic: true,
  },
  {
    id: 'progress_ring_reintroduced',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: 'className="akbi-next-action__track"',
    to: 'className="akbi-next-action__track course-progress-ring"',
    dynamic: true,
  },
  {
    id: 'completed_cta_corrupted',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "return { heading: 'Materi selesai', cta: 'Tinjau kembali', isComplete: true };",
    to: "return { heading: 'Materi selesai', cta: `Lanjutkan ke TM ${targetTm}`, isComplete: true };",
    dynamic: true,
  },
  {
    id: 'unsupported_activity_copy_reintroduced',
    file: 'src/components/course/AkbiCourseDashboardShell.tsx',
    from: "return { heading: 'Berikutnya', cta: `Lanjutkan ke TM ${targetTm}`, isComplete: false };",
    to: "return { heading: 'Aktivitas terakhir', cta: `Lanjutkan ke TM ${targetTm}`, isComplete: false };",
    dynamic: true,
  },
  {
    id: 'dashboard_selector_unscoped',
    file: 'src/styles/ux-v2-dashboard.css',
    from: '.ux-v2--akbi .akbi-dashboard-shell {',
    to: '.akbi-dashboard-shell {',
    dynamic: false,
  },
  {
    id: 'decorative_gradient_reintroduced',
    file: 'src/styles/ux-v2-dashboard.css',
    from: 'background: var(--ux-surface);',
    to: 'background: linear-gradient(90deg, var(--ux-surface), var(--ux-accent-soft));',
    dynamic: false,
  },
  {
    id: 'progress_line_becomes_metric_bar',
    file: 'src/styles/ux-v2-dashboard.css',
    from: 'height: 4px;',
    to: 'height: 24px;',
    dynamic: false,
  },
  {
    id: 'mobile_rows_lose_compact_layout',
    file: 'src/styles/ux-v2-dashboard.css',
    from: 'grid-template-columns: 28px minmax(0, 1fr) auto;',
    to: 'grid-template-columns: repeat(4, minmax(0, 1fr));',
    dynamic: false,
  },
 ];

const requestedIds = new Set((process.env.UX10C_MUTATION_IDS ?? '').split(',').map((value) => value.trim()).filter(Boolean));
const mutations = requestedIds.size > 0 ? allMutations.filter((mutation) => requestedIds.has(mutation.id)) : allMutations;
if (requestedIds.size > 0 && mutations.length !== requestedIds.size) {
  const found = new Set(mutations.map((mutation) => mutation.id));
  const missing = [...requestedIds].filter((id) => !found.has(id));
  throw new Error(`Unknown mutation id(s): ${missing.join(', ')}`);
}

function copyProject(destination) {
  fs.cpSync(sourceRoot, destination, {
    recursive: true,
    filter(source) {
      const relative = path.relative(sourceRoot, source);
      return relative !== 'node_modules' &&
        !relative.startsWith(`node_modules${path.sep}`) &&
        relative !== 'dist' &&
        !relative.startsWith(`dist${path.sep}`);
    },
  });
  if (fs.existsSync(path.join(sourceRoot, 'node_modules'))) {
    fs.symlinkSync(path.join(sourceRoot, 'node_modules'), path.join(destination, 'node_modules'), 'dir');
  }
}

const evidence = [];
for (const mutation of mutations) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), `ux10c-${mutation.id}-`));
  try {
    copyProject(tempRoot);
    const target = path.join(tempRoot, mutation.file);
    const source = fs.readFileSync(target, 'utf8');
    if (!source.includes(mutation.from)) throw new Error(`Mutation fixture missing for ${mutation.id}`);
    const replacementPath = `${target}.mutated`;
    fs.writeFileSync(replacementPath, source.replace(mutation.from, mutation.to));
    fs.renameSync(replacementPath, target);
    const run = spawnSync(process.execPath, [path.join(sourceRoot, testScript)], {
      cwd: tempRoot,
      env: {
        ...process.env,
        UX10C_ROOT: tempRoot,
        ...(mutation.dynamic ? { UX10C_MUTATION_MODE: '1' } : { UX10C_STATIC_ONLY: '1' }),
      },
      encoding: 'utf8',
      timeout: 120_000,
    });
    const timedOut = run.error?.code === 'ETIMEDOUT';
    let assertionResult = null;
    try {
      assertionResult = JSON.parse(run.stdout.trim());
    } catch {
      assertionResult = null;
    }
    const assertionFailure = assertionResult?.pass === false &&
      Array.isArray(assertionResult.failures) && assertionResult.failures.length > 0;
    const killed = run.status !== 0 && !run.signal && !timedOut && assertionFailure;
    evidence.push({
      id: mutation.id,
      dynamicPath: mutation.dynamic,
      killed,
      exitCode: run.status,
      signal: run.signal,
      timedOut,
      assertionFailure,
      failures: assertionResult?.failures ?? [],
      outputTail: `${run.stdout}
${run.stderr}`.trim().slice(-1800),
    });
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

const survivors = evidence.filter((entry) => !entry.killed);
const result = {
  pass: survivors.length === 0,
  total: evidence.length,
  killed: evidence.length - survivors.length,
  dynamicMutations: evidence.filter((entry) => entry.dynamicPath).length,
  timeoutOrSignal: evidence.filter((entry) => entry.timedOut || entry.signal).length,
  survivors,
  evidence,
};
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
