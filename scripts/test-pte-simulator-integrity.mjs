import { createServer } from 'vite';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const modulePath = process.env.PTE_SIMULATOR_INTEGRITY_MODULE ?? '/src/lib/quizExamIntegrity.ts';
const vite = await createServer({ appType: 'custom', logLevel: 'error', server: { middlewareMode: true, hmr: { port: 24779 } }, optimizeDeps: { noDiscovery: true } });

try {
  const integrity = await vite.ssrLoadModule(modulePath);
  const { getQuizDatasetFingerprint, isQuizResponseCorrect, normalizeQuizNumber } = integrity;

  assert(normalizeQuizNumber('Rp 1.250,50') === 1250.5, 'Normalisasi angka Indonesia gagal');
  assert(normalizeQuizNumber('(250)') === -250, 'Normalisasi angka negatif gagal');

  const scoringCases = [
    {
      kind: 'mcq',
      question: { id: 'T-MCQ', tm: 1, q: 'Pilihan tunggal?', options: ['A', 'B'], answer: 1 },
      correct: { pick: 1 },
      wrong: { pick: 0 },
    },
    {
      kind: 'multi-select',
      question: { id: 'T-MULTI', kind: 'multi-select', tm: 1, q: 'Pilih banyak?', options: ['A', 'B', 'C'], answers: [0, 2] },
      correct: { multi: [2, 0] },
      wrong: { multi: [0] },
    },
    {
      kind: 'report-fill',
      question: { id: 'T-NUM', kind: 'report-fill', tm: 1, q: 'Isi angka?', blanks: [{ id: 'x', label: 'X', answer: 100, tolerance: 0.5 }] },
      correct: { fills: { x: '100,4' } },
      wrong: { fills: { x: '101' } },
    },
    {
      kind: 'account-match',
      question: { id: 'T-MATCH', kind: 'account-match', tm: 1, q: 'Cocokkan?', choices: ['X', 'Y'], pairs: [{ prompt: 'A', answer: 'X' }, { prompt: 'B', answer: 'Y' }] },
      correct: { matches: { A: 'X', B: 'Y' } },
      wrong: { matches: { A: 'Y', B: 'X' } },
    },
    {
      kind: 'ordering',
      question: { id: 'T-ORDER', kind: 'ordering', tm: 1, q: 'Urutkan?', items: ['A', 'B', 'C'], correctOrder: ['B', 'A', 'C'] },
      correct: { ordering: ['B', 'A', 'C'] },
      wrong: { ordering: ['A', 'B', 'C'] },
    },
  ];

  for (const testCase of scoringCases) {
    assert(isQuizResponseCorrect(testCase.question, testCase.correct) === true, `SCORING_${testCase.kind}: jawaban benar ditolak`);
    assert(isQuizResponseCorrect(testCase.question, testCase.wrong) === false, `SCORING_${testCase.kind}: jawaban salah diterima`);
  }

  const baseQuestions = [
    {
      id: 'FP-MCQ', tm: 1, q: 'Fingerprint pilihan?', topic: 'TM1', skill: 'Uji', difficulty: 'basic',
      svg: '<svg role="img"><text>A</text></svg>', altText: 'Grafik uji fingerprint', sourceRef: 'Reading EKT109 TM 1', sourceAnchors: ['Anchor A'],
      options: ['A', 'B'], answer: 1,
    },
    {
      id: 'FP-MULTI', kind: 'multi-select', tm: 2, q: 'Fingerprint multi?', options: ['A', 'B', 'C'], answers: [0, 2],
      sourceRef: 'Reading EKT109 TM 2', sourceAnchors: ['Anchor B'],
    },
    {
      id: 'FP-NUM', kind: 'report-fill', tm: 3, q: 'Fingerprint angka?', blanks: [{ id: 'x', label: 'X', answer: 10, tolerance: 1 }],
      sourceRef: 'Reading EKT109 TM 3', sourceAnchors: ['Anchor C'],
    },
    {
      id: 'FP-MATCH', kind: 'account-match', tm: 4, q: 'Fingerprint matching?', choices: ['X', 'Y'], pairs: [{ prompt: 'A', answer: 'X' }, { prompt: 'B', answer: 'Y' }],
      sourceRef: 'Reading EKT109 TM 4', sourceAnchors: ['Anchor D'],
    },
    {
      id: 'FP-ORDER', kind: 'ordering', tm: 5, q: 'Fingerprint ordering?', items: ['A', 'B', 'C'], correctOrder: ['B', 'A', 'C'],
      sourceRef: 'Reading EKT109 TM 5', sourceAnchors: ['Anchor E'],
    },
    {
      id: 'FP-KIND', kind: 'kind-alpha', tm: 6, q: 'Fingerprint kind only?',
      sourceRef: 'Reading EKT109 TM 6', sourceAnchors: ['Anchor F'],
    },
  ];
  const baseline = getQuizDatasetFingerprint(baseQuestions);
  assert(/^fnv1a-[0-9a-f]{8}$/.test(baseline), 'Format fingerprint tidak valid');

  const fingerprintMutations = [
    ['id', (items) => { items[0].id = 'FP-MCQ-X'; }],
    ['tm', (items) => { items[0].tm = 7; }],
    ['kind', (items) => { items[5].kind = 'kind-beta'; }],
    ['q', (items) => { items[0].q += ' berubah'; }],
    ['svg', (items) => { items[0].svg = '<svg role="img"><text>B</text></svg>'; }],
    ['altText', (items) => { items[0].altText += ' berubah'; }],
    ['sourceRef', (items) => { items[0].sourceRef = 'Reading EKT109 TM 9'; }],
    ['sourceAnchors', (items) => { items[0].sourceAnchors = ['Anchor Z']; }],
    ['options', (items) => { items[0].options[0] = 'C'; }],
    ['answer', (items) => { items[0].answer = 0; }],
    ['answers', (items) => { items[1].answers = [1, 2]; }],
    ['blanks', (items) => { items[2].blanks[0].answer = 11; }],
    ['pairs', (items) => { items[3].pairs[0].answer = 'Y'; }],
    ['ordering.items', (items) => { items[4].items[0] = 'Z'; }],
    ['ordering.correctOrder', (items) => { items[4].correctOrder = ['A', 'B', 'C']; }],
  ];

  for (const [field, mutate] of fingerprintMutations) {
    const changed = structuredClone(baseQuestions);
    mutate(changed);
    assert(getQuizDatasetFingerprint(changed) !== baseline, `FINGERPRINT_${field}: perubahan tidak terdeteksi`);
  }
} finally {
  await vite.close();
}

if (failures.length) {
  console.error(`PTE simulator integrity test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE simulator integrity test passed: every scoring kind rejects wrong answers and every answer-bearing, graph, identity, and provenance fingerprint field changes the hash.');
