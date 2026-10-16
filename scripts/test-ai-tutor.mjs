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
  const reply = await api.chatWithAI(messages, 'test-key', 'Belajar', { provider: 'gemini' });
  assert.equal(reply.content, 'Penjelasan.'); assert.equal(reply.model, 'resolved-model');
  assert.match(calls[0].url, /gemini-flash-latest:generateContent$/);
  assert.equal(calls[0].url.includes('test-key'), false);
  assert.equal(calls[0].options.headers['x-goog-api-key'], 'test-key');
  assert.equal(JSON.parse(calls[0].options.body).contents[0].role, 'user');

  calls.length = 0;
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return calls.length === 1 ? fail(404) : ok(answer); };
  assert.equal((await api.chatWithAI(messages, 'test-key', '', { provider: 'gemini', allowFallback: true })).usedFallback, true);
  assert.equal(calls.length, 2); assert.match(calls[1].url, /gemini-3.5-flash-lite/);
  for (const [status, code] of [[401, 'key'], [403, 'key'], [429, 'quota'], [503, 'unavailable']]) {
    calls.length = 0;
    globalThis.fetch = async () => { calls.push(1); return fail(status, { error: { message: 'secret-key must never be echoed' } }); };
    await assert.rejects(api.chatWithAI(messages, 'test-key', '', { provider: 'gemini', allowFallback: true }), error => error.code === code && !error.message.includes('secret-key'));
    assert.equal(calls.length, 1, 'Never retry quota/auth/service failures against another model');
  }
  calls.length = 0;
  globalThis.fetch = async () => { calls.push(1); return fail(404); };
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { provider: 'gemini', model: 'gemini-pinned', allowFallback: true }), error => error.code === 'model');
  assert.equal(calls.length, 1, 'Pinned model never silently changes');
  globalThis.fetch = async () => { throw Error('private network details'); };
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { provider: 'gemini' }), error => error.code === 'network' && !error.message.includes('private'));
  const controller = new AbortController(); controller.abort();
  globalThis.fetch = async (_, options) => { if (options.signal.aborted) throw new DOMException('Abort', 'AbortError'); return ok(answer); };
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { provider: 'gemini', signal: controller.signal }), error => error.code === 'cancelled');
  globalThis.setTimeout = callback => originalTimeout(callback, 5);
  globalThis.fetch = async (_, options) => new Promise((_, reject) => options.signal.addEventListener('abort', () => reject(new DOMException('Abort', 'AbortError'))));
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { provider: 'gemini' }), error => error.code === 'timeout');
  globalThis.setTimeout = originalTimeout;
  globalThis.fetch = async () => ok({ candidates: [] });
  await assert.rejects(api.chatWithAI(messages, 'test-key', '', { provider: 'gemini' }), error => error.code === 'empty');

  calls.length = 0;
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return ok({ model: 'llama-3.3-70b-versatile', choices: [{ message: { content: 'Jawaban Groq.' } }] }); };
  assert.equal((await api.chatWithAI(messages, 'gsk_test', '', { provider: 'groq' })).provider, 'groq');
  assert.equal(calls[0].options.headers.Authorization, 'Bearer gsk_test');
  assert.equal(calls[0].url, 'https://api.groq.com/openai/v1/chat/completions');
  calls.length = 0;
  globalThis.fetch = async url => { calls.push(url); return ok({ models: [{ name: 'models/gemini-chat', supportedGenerationMethods: ['generateContent'] }, { name: 'models/gemini-image', supportedGenerationMethods: ['generateContent'] }, { name: 'models/embedding', supportedGenerationMethods: ['embedContent'] }], ...(calls.length === 1 ? { nextPageToken: 'page 2' } : {}) }); };
  assert.deepEqual((await api.listAIModels('test-key', 'gemini')).map(model => model.id), ['gemini-chat']);
  assert.equal(calls.length, 2); assert.match(calls[1], /pageToken=page%202/);

  const providerAnswers = {
    openai: { model: 'gpt-resolved', output: [{ type: 'reasoning', summary: [{ text: 'private thought' }] }, { type: 'message', role: 'assistant', content: [{ type: 'output_text', text: 'Jawaban OpenAI.' }, { type: 'output_text', text: 'Lanjutan.' }] }] },
    anthropic: { model: 'claude-resolved', content: [{ type: 'thinking', thinking: 'private thought' }, { type: 'text', text: 'Jawaban Claude.' }] },
  };
  for (const [provider, key, endpoint] of [['openai', 'sk-proj-test', 'https://api.openai.com/v1/responses'], ['anthropic', 'sk-ant-test', 'https://api.anthropic.com/v1/messages']]) {
    calls.length = 0;
    globalThis.fetch = async (url, options) => { calls.push({ url, options }); return ok(providerAnswers[provider]); };
    const result = await api.chatWithAI([...messages, { role: 'model', content: 'Sebelumnya' }, { role: 'user', content: 'Lanjut' }], key, 'Instruksi tutor', { provider });
    assert.equal(result.provider, provider); assert.equal(result.model, providerAnswers[provider].model);
    assert.ok(!result.content.includes('private')); assert.match(result.content, provider === 'openai' ? /Jawaban OpenAI\.\nLanjutan\./ : /Jawaban Claude\./);
    assert.equal(calls[0].url, endpoint); assert.ok(!calls[0].url.includes(key));
    const body = JSON.parse(calls[0].options.body);
    assert.equal(body.model, api.AI_MODELS[provider].automatic);
    if (provider === 'openai') {
      assert.equal(calls[0].options.headers.Authorization, `Bearer ${key}`);
      assert.equal(body.store, false); assert.equal(body.instructions, 'Instruksi tutor');
      assert.equal(body.input[1].role, 'assistant'); assert.ok(!('temperature' in body));
    } else {
      assert.equal(calls[0].options.headers['x-api-key'], key);
      assert.equal(calls[0].options.headers['anthropic-version'], '2023-06-01');
      assert.equal(calls[0].options.headers['anthropic-dangerous-direct-browser-access'], 'true');
      assert.equal(body.system, 'Instruksi tutor'); assert.equal(body.messages[1].role, 'assistant'); assert.equal(body.max_tokens, 2400);
    }
    calls.length = 0;
    globalThis.fetch = async (url, options) => { calls.push({ url, options }); return calls.length === 1 ? fail(404) : ok(providerAnswers[provider]); };
    assert.equal((await api.chatWithAI(messages, key, '', { provider, allowFallback: true })).usedFallback, true);
    assert.equal(calls.length, 2); assert.ok(calls.every(c => c.url === endpoint));
    assert.equal(JSON.parse(calls[1].options.body).model, api.AI_MODELS[provider].fallback);
    for (const [status, code] of [[401, 'key'], [403, 'key'], [429, 'quota'], [529, 'unavailable']]) {
      calls.length = 0;
      globalThis.fetch = async () => { calls.push(1); return fail(status, { error: { message: `private ${key}` } }); };
      await assert.rejects(api.chatWithAI(messages, key, '', { provider, allowFallback: true }), e => e.code === code && !e.message.includes(key));
      assert.equal(calls.length, 1);
    }
    globalThis.fetch = async () => ok({ content: [], output: [] });
    await assert.rejects(api.chatWithAI(messages, key, '', { provider }), e => e.code === 'empty');
    calls.length = 0;
    globalThis.fetch = async () => { calls.push(1); return fail(404); };
    await assert.rejects(api.chatWithAI(messages, key, '', { provider, model: 'fixed-model', allowFallback: true }), e => e.code === 'model');
    assert.equal(calls.length, 1);
  }
  calls.length = 0;
  globalThis.fetch = async () => { calls.push(1); return ok({}); };
  for (const [key, provider] of [['sk-ant-test', 'openai'], ['sk-proj-test', 'gemini'], ['gsk_test', 'anthropic'], ['AIzaTest', 'groq']]) {
    await assert.rejects(api.chatWithAI(messages, key, '', { provider }), e => e.code === 'key');
    await assert.rejects(api.listAIModels(key, provider), e => e.code === 'key');
  }
  await assert.rejects(api.chatWithAI(messages, 'unknown-key', '', {}), e => e.code === 'request');
  assert.equal(calls.length, 0, 'Mismatched or missing provider never transmits a key');
  assert.equal(api.providerForKey('unknown-key'), null, 'Unknown keys are never assumed to be Gemini');
  globalThis.fetch = async () => ok({ data: [{ id: 'gpt-6-luna' }, { id: 'gpt-realtime' }, { id: 'gpt-image-1' }, { id: 'text-embedding' }, { id: 'o3' }, { id: 'whisper-1' }] });
  assert.deepEqual((await api.listAIModels('sk-proj-test', 'openai')).map(m => m.id), ['gpt-6-luna', 'o3']);
  calls.length = 0;
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return ok({ data: [{ id: 'claude-sonnet-5-5', display_name: 'Claude Sonnet' }, { id: 'claude-retired', lifecycle: 'retired' }], has_more: calls.length === 1, last_id: 'claude cursor' }); };
  assert.deepEqual((await api.listAIModels('sk-ant-test', 'anthropic')).map(m => m.id), ['claude-sonnet-5-5']);
  assert.equal(calls.length, 2); assert.match(calls[1].url, /after_id=claude%20cursor/);
  assert.equal(calls[0].options.headers['x-api-key'], 'sk-ant-test');
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
