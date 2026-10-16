export type AIProvider = 'gemini' | 'groq';
export interface AIMessage { role: 'user' | 'model'; content: string; timestamp?: number }
export interface AIOptions { model?: string; allowFallback?: boolean; signal?: AbortSignal }
export interface AIReply { content: string; model: string; provider: AIProvider; usedFallback: boolean }
export interface AIModel { id: string; label: string }
type ErrorCode = 'key' | 'quota' | 'model' | 'timeout' | 'cancelled' | 'network' | 'unavailable' | 'empty' | 'request';

// Public model identifiers only. Never put a shared API key in VITE_* or the client bundle.
export const AI_MODELS = {
  gemini: { automatic: 'gemini-flash-latest', fallback: 'gemini-3.5-flash-lite' },
  groq: { automatic: 'llama-3.3-70b-versatile', fallback: 'llama-3.1-8b-instant' },
} as const;
export const providerForKey = (key: string): AIProvider => key.trim().startsWith('gsk_') ? 'groq' : 'gemini';
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
  const controller = new AbortController();
  const cancel = () => controller.abort();
  signal?.addEventListener('abort', cancel, { once: true });
  if (signal?.aborted) controller.abort();
  const timeout = setTimeout(() => controller.abort(), 45_000);
  try {
    const response = await fetch(url, {
      method: body === undefined ? 'GET' : 'POST', signal: controller.signal,
      headers: { 'Content-Type': 'application/json', ...(provider === 'groq' ? { Authorization: `Bearer ${key.trim()}` } : { 'x-goog-api-key': key.trim() }) },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      const kind = data?.error?.code;
      const message = String(data?.error?.message ?? '');
      const code: ErrorCode = response.status === 401 || response.status === 403 || /API_KEY_INVALID|API key not valid/i.test(message) ? 'key'
        : response.status === 429 ? 'quota'
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

export async function listAIModels(key: string, signal?: AbortSignal): Promise<AIModel[]> {
  const provider = providerForKey(key);
  const models: AIModel[] = [];
  if (provider === 'groq') {
    const data = await requestJson('https://api.groq.com/openai/v1/models', key, provider, undefined, signal);
    for (const model of data?.data ?? []) {
      if (model.active !== false && typeof model.id === 'string' && /^(llama-|qwen|openai\/gpt-oss)/.test(model.id)) models.push({ id: model.id, label: model.id });
    }
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

export async function chatWithAI(messages: AIMessage[], apiKey: string, systemInstruction?: string, options: AIOptions = {}): Promise<AIReply> {
  const provider = providerForKey(apiKey);
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
