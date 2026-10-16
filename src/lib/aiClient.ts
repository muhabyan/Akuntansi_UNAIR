export type AIProvider = 'gemini' | 'groq' | 'openai' | 'anthropic';
export interface AIMessage { role: 'user' | 'model'; content: string; timestamp?: number }
export interface AIOptions { provider: AIProvider; model?: string; allowFallback?: boolean; signal?: AbortSignal }
export interface AIReply { content: string; model: string; provider: AIProvider; usedFallback: boolean }
export interface AIModel { id: string; label: string }
type ErrorCode = 'key' | 'quota' | 'model' | 'timeout' | 'cancelled' | 'network' | 'unavailable' | 'empty' | 'request';

// Public model identifiers only. Never put a shared API key in VITE_* or the client bundle.
export const AI_MODELS = {
  gemini: { automatic: 'gemini-flash-latest', fallback: 'gemini-3.5-flash-lite' },
  groq: { automatic: 'llama-3.3-70b-versatile', fallback: 'llama-3.1-8b-instant' },
  openai: { automatic: 'gpt-6-luna', fallback: 'gpt-5.6-luna' },
  anthropic: { automatic: 'claude-sonnet-5-5', fallback: 'claude-haiku-5-5' },
} as const;
export const AI_PROVIDERS: Record<AIProvider, { label: string; keyUrl: string }> = {
  gemini: { label: 'Google Gemini', keyUrl: 'https://aistudio.google.com/app/apikey' },
  groq: { label: 'Groq', keyUrl: 'https://console.groq.com/keys' },
  openai: { label: 'OpenAI', keyUrl: 'https://platform.openai.com/api-keys' },
  anthropic: { label: 'Claude (Anthropic)', keyUrl: 'https://platform.claude.com/settings/keys' },
};
export const isAIProvider = (value: unknown): value is AIProvider => typeof value === 'string' && Object.prototype.hasOwnProperty.call(AI_PROVIDERS, value);
// Only used to migrate recognizable legacy keys or prevent a known mismatch. Never routes requests.
export function providerForKey(key: string): AIProvider | null {
  const clean = key.trim();
  if (clean.startsWith('gsk_')) return 'groq';
  if (clean.startsWith('AIza')) return 'gemini';
  if (clean.startsWith('sk-ant-')) return 'anthropic';
  if (clean.startsWith('sk-')) return 'openai';
  return null;
}
export class AIServiceError extends Error {
  constructor(public code: ErrorCode, message: string) { super(message); this.name = 'AIServiceError'; }
}
const ERROR_TEXT: Record<ErrorCode, string> = {
  key: 'Key ditolak atau tidak memiliki izin. Periksa key dan pembatasan akses di akun penyedia.',
  quota: 'Kuota atau batas permintaan tercapai. Periksa pemakaian akun dan coba lagi setelah batasnya pulih.',
  model: 'Model ini tidak tersedia untuk key tersebut. Muat daftar model di pengaturan atau pilih mode otomatis.',
  timeout: 'Penyedia AI belum menjawab dalam 45 detik. Coba lagi; pesanmu tetap ada.',
  cancelled: 'Permintaan dihentikan.',
  network: 'Tidak dapat terhubung ke penyedia AI. Periksa jaringan, lalu coba lagi.',
  unavailable: 'Layanan AI sedang bermasalah. Coba lagi nanti.',
  empty: 'AI tidak mengirim jawaban teks. Coba pertanyaan yang lebih spesifik atau pilih model lain.',
  request: 'Permintaan tidak diterima. Periksa pilihan model dan coba percakapan baru.',
};

async function requestJson(url: string, key: string, provider: AIProvider, body?: unknown, signal?: AbortSignal): Promise<any> {
  if (!key.trim()) throw new AIServiceError('key', 'Masukkan API key milikmu terlebih dahulu.');
  if (!isAIProvider(provider)) throw new AIServiceError('request', 'Pilih penyedia AI di pengaturan terlebih dahulu.');
  const recognized = providerForKey(key);
  if (recognized && recognized !== provider) throw new AIServiceError('key', 'Key tidak cocok dengan penyedia yang dipilih. Pilih penyedia yang sesuai atau ganti key.');
  const controller = new AbortController();
  const cancel = () => controller.abort();
  signal?.addEventListener('abort', cancel, { once: true });
  if (signal?.aborted) controller.abort();
  const timeout = setTimeout(() => controller.abort(), 45_000);
  try {
    const response = await fetch(url, {
      method: body === undefined ? 'GET' : 'POST', signal: controller.signal,
      headers: { 'Content-Type': 'application/json', ...(provider === 'gemini' ? { 'x-goog-api-key': key.trim() }
        : provider === 'anthropic' ? { 'x-api-key': key.trim(), 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' }
          : { Authorization: `Bearer ${key.trim()}` }) },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      const kind = data?.error?.code;
      const message = String(data?.error?.message ?? '');
      const code: ErrorCode = response.status === 401 || response.status === 403 || /API_KEY_INVALID|API key not valid/i.test(message) ? 'key'
        : response.status === 429 || /insufficient_quota|billing_hard_limit_reached/.test(String(kind)) || /credit balance.*(low|insufficient)|insufficient.*credits/i.test(message) ? 'quota'
        : response.status === 404 || kind === 'model_decommissioned' || kind === 'model_not_found' || /model.*(not found|not supported|decommissioned|does not exist)/i.test(message) ? 'model'
        : response.status >= 500 ? 'unavailable' : 'request';
      // Provider error bodies may include credentials or request context; never echo them.
      throw new AIServiceError(code, ERROR_TEXT[code]);
    }
    return data;
  } catch (error) {
    if (error instanceof AIServiceError) throw error;
    const code = signal?.aborted ? 'cancelled' : controller.signal.aborted ? 'timeout' : 'network';
    throw new AIServiceError(code, ERROR_TEXT[code]);
  } finally { clearTimeout(timeout); signal?.removeEventListener('abort', cancel); }
}

export function boundedAIHistory(messages: AIMessage[]): AIMessage[] {
  const result: AIMessage[] = [];
  let size = 0;
  for (const message of messages.slice(-12).reverse()) {
    if (message.content.startsWith('[ERROR]')) continue;
    const content = message.content.replace(/<COMMAND>[\s\S]*?<\/COMMAND>/g, '').slice(0, 6000);
    if (!content.trim() || size + content.length > 24_000) continue;
    size += content.length; result.unshift({ role: message.role, content });
  }
  while (result[0]?.role === 'model') result.shift();
  return result;
}

export async function listAIModels(key: string, provider: AIProvider, signal?: AbortSignal): Promise<AIModel[]> {
  const models: AIModel[] = [];
  if (provider === 'groq' || provider === 'openai') {
    const data = await requestJson(provider === 'groq' ? 'https://api.groq.com/openai/v1/models' : 'https://api.openai.com/v1/models', key, provider, undefined, signal);
    for (const model of data?.data ?? []) {
      if (model.active === false || typeof model.id !== 'string') continue;
      const chat = provider === 'groq' ? /^(llama-|qwen|openai\/gpt-oss)/.test(model.id)
        : /^(gpt-(?:4\.1|4o(?:-|$)|[5-9](?:[.-]|$))|o[134](?:-|$))/.test(model.id) && !/audio|realtime|transcrib|tts|image|search|deep-research|codex|instruct|diariz/.test(model.id);
      if (chat) models.push({ id: model.id, label: model.id });
    }
  } else if (provider === 'anthropic') {
    let cursor = '';
    const seen = new Set<string>();
    do {
      const data = await requestJson(`https://api.anthropic.com/v1/models?limit=1000${cursor ? `&after_id=${encodeURIComponent(cursor)}` : ''}`, key, provider, undefined, signal);
      for (const model of data?.data ?? []) {
        if (typeof model.id === 'string' && model.id.startsWith('claude-') && model.lifecycle !== 'retired') models.push({ id: model.id, label: model.display_name ?? model.id });
      }
      cursor = data?.has_more && typeof data?.last_id === 'string' ? data.last_id : '';
      if (seen.has(cursor)) break;
      seen.add(cursor);
    } while (cursor && seen.size < 10);
  } else {
    let token = '';
    const seen = new Set<string>();
    do {
      const data = await requestJson(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000${token ? `&pageToken=${encodeURIComponent(token)}` : ''}`, key, provider, undefined, signal);
      for (const model of data?.models ?? []) {
        if (!model.supportedGenerationMethods?.includes('generateContent') || typeof model.name !== 'string') continue;
        const id = model.name.replace(/^models\//, '');
        if (!/^gemini-/.test(id) || /image|audio|tts|robotics|computer-use|live|embedding/.test(id)) continue;
        models.push({ id, label: model.displayName ?? id });
      }
      token = typeof data?.nextPageToken === 'string' ? data.nextPageToken : '';
      if (seen.has(token)) break;
      seen.add(token);
    } while (token && seen.size < 10);
  }
  return models.filter((model, i) => models.findIndex(other => other.id === model.id) === i).sort((a, b) => a.id.localeCompare(b.id));
}

export async function chatWithAI(messages: AIMessage[], apiKey: string, systemInstruction: string | undefined, options: AIOptions): Promise<AIReply> {
  const provider = options.provider;
  if (!isAIProvider(provider)) throw new AIServiceError('request', 'Pilih penyedia AI di pengaturan terlebih dahulu.');
  const automatic = !options.model || options.model === 'auto';
  const preferred = automatic ? AI_MODELS[provider].automatic : options.model!;
  if (!/^[a-zA-Z0-9._/-]+$/.test(preferred)) throw new AIServiceError('model', ERROR_TEXT.model);
  const candidates = [preferred];
  if (automatic && options.allowFallback && preferred !== AI_MODELS[provider].fallback) candidates.push(AI_MODELS[provider].fallback);
  const history = boundedAIHistory(messages);
  if (!history.length) throw new AIServiceError('request', 'Tulis pertanyaan terlebih dahulu.');
  for (const [index, model] of candidates.entries()) {
    try {
      let content = '';
      let actualModel = model;
      if (provider === 'groq') {
        const data = await requestJson('https://api.groq.com/openai/v1/chat/completions', apiKey, provider, {
          model, messages: [...(systemInstruction ? [{ role: 'system', content: systemInstruction }] : []), ...history.map(m => ({ role: m.role === 'model' ? 'assistant' : 'user', content: m.content }))],
          temperature: 0.3, max_tokens: 1800,
        }, options.signal);
        content = data?.choices?.[0]?.message?.content ?? '';
        actualModel = data?.model ?? model;
      } else if (provider === 'openai') {
        const data = await requestJson('https://api.openai.com/v1/responses', apiKey, provider, {
          model, store: false, max_output_tokens: 4000,
          ...(systemInstruction ? { instructions: systemInstruction } : {}),
          input: history.map(m => ({ role: m.role === 'model' ? 'assistant' : 'user', content: m.content })),
        }, options.signal);
        // Raw REST output can start with reasoning/tool items; only collect assistant text.
        content = (data?.output ?? []).filter((item: any) => item.type === 'message' && item.role === 'assistant')
          .flatMap((item: any) => item.content ?? []).filter((part: any) => part.type === 'output_text' && typeof part.text === 'string').map((part: any) => part.text).join('\n');
        actualModel = data?.model ?? model;
      } else if (provider === 'anthropic') {
        const data = await requestJson('https://api.anthropic.com/v1/messages', apiKey, provider, {
          model, max_tokens: 2400,
          ...(systemInstruction ? { system: systemInstruction } : {}),
          messages: history.map(m => ({ role: m.role === 'model' ? 'assistant' : 'user', content: m.content })),
        }, options.signal);
        content = (data?.content ?? []).filter((part: any) => part.type === 'text' && typeof part.text === 'string').map((part: any) => part.text).join('\n');
        actualModel = data?.model ?? model;
      } else {
        const data = await requestJson(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, apiKey, provider, {
          contents: history.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
          generationConfig: { temperature: 0.3, maxOutputTokens: 2400 },
          ...(systemInstruction ? { systemInstruction: { parts: [{ text: systemInstruction }] } } : {}),
        }, options.signal);
        content = (data?.candidates?.[0]?.content?.parts ?? []).filter((p: { thought?: boolean; text?: string }) => !p.thought && typeof p.text === 'string').map((p: { text: string }) => p.text).join('');
        actualModel = data?.modelVersion ?? model;
      }
      if (typeof content !== 'string' || !content.trim()) throw new AIServiceError('empty', ERROR_TEXT.empty);
      return { content, model: actualModel, provider, usedFallback: index > 0 };
    } catch (error) {
      // Authentication/quota/network errors do not trigger extra requests or provider changes.
      if (!(error instanceof AIServiceError) || error.code !== 'model' || index === candidates.length - 1) throw error;
    }
  }
  throw new AIServiceError('model', ERROR_TEXT.model);
}
