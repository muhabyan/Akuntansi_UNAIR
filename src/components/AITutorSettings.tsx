import { useState } from 'react';
import { AI_MODELS, chatWithAI, listAIModels, providerForKey, type AIModel } from '../lib/aiClient';

export default function AITutorSettings({ apiKey, model, allowFallback, rememberKey, onSave, onModelChange, onFallbackChange, onCancel }: {
  apiKey: string; model: string; allowFallback: boolean; rememberKey: boolean;
  onSave: (key: string, remember: boolean) => void;
  onModelChange: (value: string) => void; onFallbackChange: (value: boolean) => void; onCancel?: () => void;
}) {
  const [input, setInput] = useState('');
  const [remember, setRemember] = useState(rememberKey);
  const [models, setModels] = useState<AIModel[]>([]);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const key = input.trim() || apiKey;
  const provider = providerForKey(key);
  const [listedKey, setListedKey] = useState('');
  const listedModels = listedKey === key ? models : [];
  const selectedModel = provider === providerForKey(apiKey) ? model : 'auto';
  const run = async (test: boolean) => {
    setBusy(true); setStatus('');
    try {
      if (test) {
        const reply = await chatWithAI([{ role: 'user', content: 'Balas satu kata: Terhubung.' }], key, 'Ini pemeriksaan koneksi. Balas satu kata saja.', { model: selectedModel, allowFallback });
        setStatus(`Generasi berhasil. Model: ${reply.model}${reply.usedFallback ? ' (cadangan)' : ''}.`);
      } else {
        setModels(await listAIModels(key)); setListedKey(key);
        setStatus('Daftar model dimuat. Gunakan Cek koneksi untuk menguji akses generasi; kuota tidak dijamin oleh daftar ini.');
      }
    } catch (error) { setStatus(error instanceof Error ? error.message : 'Pemeriksaan belum berhasil.'); }
    finally { setBusy(false); }
  };
  return <div className="flex-1 overflow-y-auto p-5 text-sm text-gray-800 dark:text-gray-100">
    <h3 className="text-lg font-bold">Pengaturan AI Tutor</h3>
    <p className="mt-2 leading-6 text-gray-600 dark:text-gray-300">Gunakan key Gemini atau Groq milikmu. Kuota, biaya, dan kebijakan data mengikuti akun penyedia.</p>
    <div className="my-3 flex flex-wrap gap-x-4 gap-y-2 text-blue-700 underline dark:text-blue-300">
      <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Key Gemini</a>
      <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer">Key Groq</a>
    </div>
    <form onSubmit={event => { event.preventDefault(); if (key) { onSave(key, remember); setInput(''); } }} className="space-y-3">
      <label className="block font-semibold">API key
        <input type="password" autoComplete="off" spellCheck={false} disabled={busy} value={input} onChange={event => { setInput(event.target.value); setStatus(''); }} placeholder={apiKey ? 'Key sesi aktif; isi untuk mengganti' : 'Tempel key Gemini atau Groq'} className="mt-1 block min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 dark:border-gray-600 dark:bg-gray-800" />
      </label>
      <label className="flex min-h-11 items-center gap-2"><input type="checkbox" checked={remember} onChange={event => setRemember(event.target.checked)} /> Ingat key di browser ini</label>
      <label className="block font-semibold">Model
        <select disabled={busy || (Boolean(input) && provider !== providerForKey(apiKey))} value={selectedModel} onChange={event => onModelChange(event.target.value)} className="mt-1 block min-h-11 w-full rounded-lg border border-gray-300 bg-white px-2 dark:border-gray-600 dark:bg-gray-800">
          <option value="auto">Otomatis · {AI_MODELS[provider].automatic}</option>
          {selectedModel !== 'auto' && !listedModels.some(m => m.id === selectedModel) && <option value={selectedModel}>{selectedModel}</option>}
          {listedModels.map(m => <option key={m.id} value={m.id}>{m.label} ({m.id})</option>)}
        </select>
      </label>
      <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">{provider === 'gemini' ? 'Otomatis mengikuti alias Flash terbaru dari Google, termasuk kemungkinan versi preview. Pilih model tertentu untuk mempertahankan versi.' : 'Groq memakai model default yang dikelola aplikasi; daftar model dapat dimuat dari akunmu.'} Simpan key baru sebelum memilih model dari penyedia yang berbeda.</p>
      <label className="flex min-h-11 items-start gap-2 py-2"><input className="mt-1" type="checkbox" checked={allowFallback} onChange={event => onFallbackChange(event.target.checked)} /><span>Izinkan cadangan {AI_MODELS[provider].fallback} saat model otomatis tidak tersedia. Tetap di penyedia yang sama.</span></label>
      <div className="flex flex-wrap gap-2">
        <button type="button" disabled={!key || busy} onClick={() => void run(false)} className="min-h-11 rounded-lg border px-3 font-semibold disabled:opacity-50">Muat model</button>
        <button type="button" disabled={!key || busy} onClick={() => void run(true)} className="min-h-11 rounded-lg border px-3 font-semibold disabled:opacity-50">Cek koneksi</button>
      </div>
      <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">Cek koneksi mengirim pesan uji singkat dan memakai kuota akunmu.</p>
      <p role="status" className="text-sm leading-6">{busy ? 'Memeriksa penyedia AI…' : status}</p>
      <button type="submit" disabled={!key || busy} className="min-h-11 w-full rounded-lg bg-blue-600 px-3 font-bold text-white disabled:opacity-50">Simpan & mulai belajar</button>
      {onCancel && <button type="button" disabled={busy} onClick={onCancel} className="min-h-11 w-full rounded-lg border font-semibold">Kembali ke percakapan</button>}
    </form>
    <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-5 text-gray-600 dark:border-gray-700 dark:text-gray-300">Key hanya disimpan jika kamu memilih Ingat key. Saat mengirim pertanyaan, pesan dan kutipan materi yang kamu sertakan dikirim ke {provider === 'groq' ? 'Groq' : 'Google'}. Riwayat chat disimpan di browser ini. AI dapat keliru; periksa kembali sumber materi.</p>
  </div>;
}
