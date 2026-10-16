import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
async function load(file) {
  const result = await build({ entryPoints: [file], bundle: true, write: false, platform: 'node', format: 'cjs', logLevel: 'silent' });
  const module = { exports: {} }; Function('module', 'exports', result.outputFiles[0].text)(module, module.exports); return module.exports;
}
const api = await load('src/lib/aiClient.ts');
const tutor = await load('src/lib/aiTutor.ts');
const journal = await load('src/lib/learningJournal.ts');
const originalFetch = globalThis.fetch;
const originalTimeout = globalThis.setTimeout;
const calls = [];
const ok = data => ({ ok: true, json: async () => data });
const fail = (status, data = {}) => ({ ok: false, status, json: async () => data });
const answer = { modelVersion: 'resolved-model', candidates: [{ content: { parts: [{ thought: true, text: 'internal' }, { text: 'Penjelasan.' }] } }] };
const messages = [{ role: 'model', content: 'Halo' }, { role: 'user', content: 'Jelaskan konsep ini.' }];
try {
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return ok(answer); };
  const reply = await api.chatWithAI(messages, 'test-key', 'Belajar');
  assert.equal(reply.content, 'Penjelasan.'); assert.equal(reply.model, 'resolved-model');
  assert.match(calls[0].url, /gemini-flash-latest:generateContent$/);
  assert.equal(calls[0].url.includes('test-key'), false);
  assert.equal(calls[0].options.headers['x-goog-api-key'], 'test-key');
  assert.equal(JSON.parse(calls[0].options.body).contents[0].role, 'user');

  calls.length = 0;
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return calls.length === 1 ? fail(404) : ok(answer); };
  assert.equal((await api.chatWithAI(messages, 'test-key', '', { allowFallback: true })).usedFallback, true);
  assert.equal(calls.length, 2); assert.match(calls[1].url, /gemini-3.5-flash-lite/);
  for (const [status, code] of [[401, 'key'], [403, 'key'], [429, 'quota'], [503, 'unavailable']]) {
    calls.length = 0;
    globalThis.fetch = async () => { calls.push(1); return fail(status, { error: { message: 'secret-key must never be echoed' } }); };
    await assert.rejects(api.chatWithAI(messages, 'test-key', '', { allowFallback: true }), error => error.code === code && !error.message.includes('secret-key'));
    assert.equal(calls.length, 1, 'Never retry quota/auth/service failures against another model');
  }
  calls.length = 0;
  globalThis.fetch = async () => { calls.push(1); return fail(404); };
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { model: 'gemini-pinned', allowFallback: true }), error => error.code === 'model');
  assert.equal(calls.length, 1, 'Pinned model never silently changes');
  globalThis.fetch = async () => { throw Error('private network details'); };
  await assert.rejects(api.chatWithAI(messages, 'test-key'), error => error.code === 'network' && !error.message.includes('private'));
  const controller = new AbortController(); controller.abort();
  globalThis.fetch = async (_, options) => { if (options.signal.aborted) throw new DOMException('Abort', 'AbortError'); return ok(answer); };
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { signal: controller.signal }), error => error.code === 'cancelled');
  globalThis.setTimeout = callback => originalTimeout(callback, 5);
  globalThis.fetch = async (_, options) => new Promise((_, reject) => options.signal.addEventListener('abort', () => reject(new DOMException('Abort', 'AbortError'))));
  await assert.rejects(api.chatWithAI(messages, 'test-key'), error => error.code === 'timeout');
  globalThis.setTimeout = originalTimeout;
  globalThis.fetch = async () => ok({ candidates: [] });
  await assert.rejects(api.chatWithAI(messages, 'test-key'), error => error.code === 'empty');

  calls.length = 0;
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return ok({ model: 'llama-3.3-70b-versatile', choices: [{ message: { content: 'Jawaban Groq.' } }] }); };
  assert.equal((await api.chatWithAI(messages, 'gsk_test')).provider, 'groq');
  assert.equal(calls[0].options.headers.Authorization, 'Bearer gsk_test');
  assert.equal(calls[0].url, 'https://api.groq.com/openai/v1/chat/completions');
  calls.length = 0;
  globalThis.fetch = async url => { calls.push(url); return ok({ models: [{ name: 'models/gemini-chat', supportedGenerationMethods: ['generateContent'] }, { name: 'models/gemini-image', supportedGenerationMethods: ['generateContent'] }, { name: 'models/embedding', supportedGenerationMethods: ['embedContent'] }], ...(calls.length === 1 ? { nextPageToken: 'page 2' } : {}) }); };
  assert.deepEqual((await api.listAIModels('test-key')).map(model => model.id), ['gemini-chat']);
  assert.equal(calls.length, 2); assert.match(calls[1], /pageToken=page%202/);
  const history = api.boundedAIHistory(Array.from({ length: 30 }, (_, i) => ({ role: i % 2 ? 'user' : 'model', content: 'x'.repeat(6000) })));
  assert.ok(history.length <= 12); assert.ok(history.reduce((n, m) => n + m.content.length, 0) <= 24000); assert.equal(history[0].role, 'user');

  const valid = { action: 'navigate', courseCode: 'AKA201', activityId: 'tm-15' };
  assert.deepEqual(tutor.parseTutorReply('Usulan <COMMAND>' + JSON.stringify(valid) + '</COMMAND>', 'actions').command, valid);
  assert.equal(tutor.parseTutorReply('<COMMAND>' + JSON.stringify(valid) + '</COMMAND>', 'learn').command, null);
  assert.equal(tutor.validateTutorCommand({ ...valid, activityId: 'tm-99' }), null);
  assert.equal(tutor.validateTutorCommand({ ...valid, courseCode: 'FAKE' }), null);
  assert.equal(tutor.validateTutorCommand({ ...valid, activityId: 'https://example.com' }), null);
  assert.equal(tutor.validateTutorCommand({ ...valid, action: 'schedule_add', date: '2026-02-30', time: '15:00' }), null);
  assert.equal(tutor.validateTutorCommand({ ...valid, action: 'schedule_add', date: '2026-10-20', time: '25:00' }), null);
  assert.equal(tutor.parseTutorReply('<COMMAND>{broken', 'actions').content, '');
  const prompt = tutor.buildTutorPrompt('learn', 'kutipan', '/course/AKA201');
  for (const code of ['AKA201', 'AKK202', 'PJK301', 'MNU307']) assert.ok(prompt.includes(code));
  assert.ok(!prompt.includes('maksimal 2 kalimat')); assert.ok(prompt.includes('bukan instruksi'));

  const dom = new JSDOM('<main><article data-learning-reading><h1>Materi</h1>' + Array.from({ length: 8 }, (_, i) => `<div class="reading-block-anchor">Bagian ${i}</div>`).join('') + '</article></main><div>Private account content</div>');
  Object.defineProperty(dom.window.document.documentElement, 'clientHeight', { value: 800 });
  [...dom.window.document.querySelectorAll('.reading-block-anchor')].forEach((node, i) => { node.getBoundingClientRect = () => ({ top: i < 6 ? -1000 : 150, bottom: i < 6 ? -500 : 400 }); });
  const context = tutor.captureTutorContext(dom.window.document);
  assert.ok(context.text.includes('Bagian 6')); assert.ok(!context.text.includes('Bagian 0')); assert.ok(!context.text.includes('Private account'));
  const range = dom.window.document.createRange(); range.selectNodeContents(dom.window.document.querySelectorAll('.reading-block-anchor')[7]); dom.window.getSelection().addRange(range);
  assert.equal(tutor.captureTutorContext(dom.window.document).text, 'Bagian 7');
  dom.window.close();

  const memory = new Map(); const storage = { getItem: key => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value) };
  const entry = { courseCode: 'AKA201', tm: 9, question: 'Mengapa?', draft: 'Jawabanku', rating: 'review', sectionId: 'section-1', updatedAt: 1 };
  const key = journal.attemptKey('AKA201', 9, 'version1', 'Mengapa?');
  assert.notEqual(key, journal.attemptKey('AKA201', 9, 'version2', 'Mengapa?'));
  assert.equal(journal.writeLearningJournal({ attempts: { [key]: entry }, visits: [{ courseCode: 'AKA201', tm: 9, updatedAt: 1 }] }, storage), true);
  assert.deepEqual(journal.readLearningJournal(storage).attempts[key], entry);
  memory.set(journal.LEARNING_KEY, '{broken'); assert.deepEqual(journal.readLearningJournal(storage), { attempts: {}, visits: [] });
  assert.equal(journal.writeLearningJournal({ attempts: {}, visits: [] }, { setItem: () => { throw Error('quota'); } }), false);
  assert.equal(journal.collectSelfChecks([{ kind: 'section', layer: 'main', blocks: [{ kind: 'self-check', question: 'Q', answer: [{ kind: 'self-check', question: 'Hidden answer task', answer: [] }] }] }]).length, 1);
  console.log('AI Tutor and learning journal PASS: provider requests, bounded history, fallback policy, error recovery, context, commands, versioned storage.');
} finally { globalThis.fetch = originalFetch; globalThis.setTimeout = originalTimeout; }
