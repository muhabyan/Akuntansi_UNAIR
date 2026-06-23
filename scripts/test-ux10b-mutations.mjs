import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const sourceRoot = process.cwd();
const catalogTest = 'scripts/test-ux10b-catalog.mjs';
const inventoryBehaviorTest = 'scripts/test-ux10b-inventory-behavior.mjs';

const exactInventoryChecks = `  const inventoryChecks = [
    semester.id === 'sem2',
    actualCourses.length === EXPECTED_COURSE_COUNT,
    new Set(actualCodes).size === actualCodes.length,
    hasExactCodeSet(actualCodes, EXPECTED_COURSE_CODES),
    actualSks === EXPECTED_TOTAL_SKS,
    actualSks === semester.totalSks,
    hasExactGroupMembership(semester.groups, SEMESTER_2_GROUPS),
  ];`;

const mutations = [
  {
    id: 'catalog_gate_wrong_semester',
    file: 'src/App.tsx',
    from: "activeSemester?.id === 'sem2' && selectedCourse === null && !routeNotFound",
    to: "activeSemester?.id === 'sem1' && selectedCourse === null && !routeNotFound",
    testScript: catalogTest,
  },
  {
    id: 'inventory_missing_mas122',
    file: 'src/components/Semester2CatalogView.tsx',
    from: "courseCodes: ['MNU101', 'EKT109', 'MAS122']",
    to: "courseCodes: ['MNU101', 'EKT109']",
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'inventory_exactness_weakened_to_presence_only',
    file: 'src/components/Semester2CatalogView.tsx',
    from: exactInventoryChecks,
    to: `  const inventoryChecks = [
    semester.id === 'sem2',
    semester.totalSks === EXPECTED_TOTAL_SKS,
    EXPECTED_COURSE_CODES.every((code) => actualCodes.includes(code)),
  ];`,
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'inventory_group_membership_guard_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: '    hasExactGroupMembership(semester.groups, SEMESTER_2_GROUPS),',
    to: '    true,',
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'inventory_actual_sks_guards_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: `    actualSks === EXPECTED_TOTAL_SKS,
    actualSks === semester.totalSks,`,
    to: `    true,
    true,`,
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'inventory_declared_total_match_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: '    actualSks === semester.totalSks,',
    to: '    true,',
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'inventory_render_guard_bypassed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: '  if (!validateSemester2Inventory(semester)) return null;',
    to: "  if (semester.id !== 'sem2') return null;",
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'inventory_source_group_contract_corrupted',
    file: 'src/components/Semester2CatalogView.tsx',
    from: "sourceTitle: 'Mata Kuliah Pendukung (Bisnis & Ekonomi)'",
    to: "sourceTitle: 'Pendukung'",
    testScript: inventoryBehaviorTest,
  },
  {
    id: 'semantic_anchor_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: 'className="semester2-course__link"\n                      href=',
    to: 'className="semester2-course__link"\n                      data-missing-href=',
    testScript: catalogTest,
  },
  {
    id: 'feature_badge_copy_reintroduced',
    file: 'src/components/Semester2CatalogView.tsx',
    from: "description: 'Materi TM1–14, 104 flashcard, 33 bank soal, latihan, dan simulator UTS/UAS.'",
    to: "description: 'Interaktif lengkap'",
    testScript: catalogTest,
  },
  {
    id: 'wide_grid_four_columns',
    file: 'src/styles/ux-v2-catalog.css',
    from: 'grid-template-columns: repeat(3, minmax(0, 1fr));',
    to: 'grid-template-columns: repeat(4, minmax(0, 1fr));',
    testScript: catalogTest,
  },
  {
    id: 'first_incomplete_becomes_last',
    file: 'src/components/Semester2CatalogView.tsx',
    from: 'const firstIncomplete = materials.find((material) => !isDone(materialKey(course.code, material.tm)));',
    to: 'const firstIncomplete = [...materials].reverse().find((material) => !isDone(materialKey(course.code, material.tm)));',
    testScript: catalogTest,
  },
  {
    id: 'complete_state_cta_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: "? 'Tinjau kembali →'",
    to: '? `Lanjutkan ke TM ${nextMaterial.tm} →`',
    testScript: catalogTest,
  },
  {
    id: 'spa_prevent_default_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: 'event.preventDefault();',
    to: 'void event;',
    testScript: catalogTest,
  },
  {
    id: 'progress_semantics_removed',
    file: 'src/components/Semester2CatalogView.tsx',
    from: 'role="progressbar"',
    to: 'data-role="progressbar"',
    testScript: catalogTest,
  },
  {
    id: 'backdrop_blur_reintroduced',
    file: 'src/styles/ux-v2-catalog.css',
    from: 'backdrop-filter: none !important;',
    to: 'backdrop-filter: blur(20px) !important;',
    testScript: catalogTest,
  },
];

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
  fs.symlinkSync(path.join(sourceRoot, 'node_modules'), path.join(destination, 'node_modules'), 'dir');
}

const evidence = [];
for (const mutation of mutations) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), `ux10b-${mutation.id}-`));
  try {
    copyProject(tempRoot);
    const target = path.join(tempRoot, mutation.file);
    const source = fs.readFileSync(target, 'utf8');
    if (!source.includes(mutation.from)) throw new Error(`Mutation fixture missing for ${mutation.id}: ${mutation.from}`);
    fs.writeFileSync(target, source.replace(mutation.from, mutation.to));
    const run = spawnSync(process.execPath, [path.join(sourceRoot, mutation.testScript)], {
      cwd: tempRoot,
      env: {
        ...process.env,
        UX10B_ROOT: tempRoot,
        ...(mutation.testScript === catalogTest ? { UX10B_STATIC_ONLY: '1' } : {}),
      },
      encoding: 'utf8',
      timeout: 120_000,
    });
    const killed = run.status !== 0;
    evidence.push({
      id: mutation.id,
      testScript: mutation.testScript,
      dynamicPath: true,
      killed,
      exitCode: run.status,
      signal: run.signal,
      timedOut: run.error?.code === 'ETIMEDOUT',
      outputTail: `${run.stdout}\n${run.stderr}`.trim().slice(-1600),
    });
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

const survivors = evidence.filter((entry) => !entry.killed || entry.signal || entry.timedOut);
const result = {
  pass: survivors.length === 0,
  total: evidence.length,
  killed: evidence.length - survivors.length,
  dynamicMutations: evidence.filter((entry) => entry.dynamicPath).length,
  survivors,
  evidence,
};
console.log(JSON.stringify(result, null, 2));
if (!result.pass) process.exit(1);
