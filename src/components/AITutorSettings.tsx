import { useState } from 'react';
import { AI_MODELS, AI_PROVIDERS, chatWithAI, isAIProvider, listAIModels, providerForKey, type AIModel, type AIProvider } from '../lib/aiClient';

export default function AITutorSettings({ apiKey, provider: activeProvider, model, allowFallback, rememberKey, onSave, onCancel }: {
  apiKey: string; provider: AIProvider; model: string; allowFallback: boolean; rememberKey: boolean;
  onSave: (key: string, remember: boolean, provider: AIProvider, model: string, allowFallback: boolean) => void;
  onCancel?: () => void;
}) {
  const [provider, setProvider] = useState(activeProvider);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState(model);
  const [fallback, setFallback] = useState(allowFallback);
  const [remember, setRemember] = useState(rememberKey);
  const [models, setModels] = useState<AIModel[]>([]);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const key = input.trim() || (provider === activeProvider ? apiKey : '');
  const [listedKey, setListedKey] = useState('');
  const listedModels = listedKey === key ? models : [];
  const recognized = providerForKey(key);
  const mismatch = Boolean(recognized && recognized !== provider);
  const changeProvider = (value: string) => {
    if (!isAIProvider(value)) return;
    setProvider(value); setInput(''); setSelectedModel('auto'); setFallback(false);
    setRemember(false);
    setModels([]); setListedKey(''); setStatus('');
  };
  const run = async (test: boolean) => {
    setBusy(true); setStatus('');
    try {
      if (test) {
        const reply = await chatWithAI([{ role: 'user', content: 'Balas satu kata: Terhubung.' }], key, 'Ini pemeriksaan koneksi. Balas satu kata saja.', { provider, model: selectedModel, allowFallback: fallback });
        setStatus(`Generasi berhasil. Model: ${reply.model}${reply.usedFallback ? ' (cadangan)' : ''}.`);
      } else {
        setModels(await listAIModels(key, provider)); setListedKey(key);
        setStatus('Daftar model dimuat. Gunakan Cek koneksi untuk menguji akses generasi; kuota tidak dijamin oleh daftar ini.');
      }
    } catch (error) { setStatus(error instanceof Error ? error.message : 'Pemeriksaan belum berhasil.'); }
    finally { setBusy(false); }
  };
  const fieldClass = 'mt-1 block min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 dark:border-gray-600 dark:bg-gray-800';
  return <div className="flex-1 overflow-y-auto p-5 text-sm text-gray-800 dark:text-gray-100">
    <h3 className="text-lg font-bold">Pengaturan AI Tutor</h3>
    <p className="mt-2 leading-6 text-gray-600 dark:text-gray-300">Pilih penyedia dan gunakan API key milikmu. Kuota, biaya, dan kebijakan data mengikuti akun penyedia.</p>
    <form onSubmit={event => { event.preventDefault(); if (key && !mismatch && !busy) { onSave(key, remember, provider, selectedModel, fallback); setInput(''); } }} className="mt-3 space-y-3">
      <label className="block font-semibold">Penyedia AI
        <select disabled={busy} value={provider} onChange={event => changeProvider(event.target.value)} className={fieldClass}>
          {Object.entries(AI_PROVIDERS).map(([id, item]) => <option key={id} value={id}>{item.label}</option>)}
        </select>
      </label>
      <a href={AI_PROVIDERS[provider].keyUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-blue-700 underline dark:text-blue-300">Buat key {AI_PROVIDERS[provider].label}</a>
      <label className="block font-semibold">API key
        <input type="password" autoComplete="off" spellCheck={false} disabled={busy} value={input} onChange={event => { setInput(event.target.value); setStatus(''); }} placeholder={apiKey && provider === activeProvider ? 'Key sesi aktif; isi untuk mengganti' : `Tempel API key ${AI_PROVIDERS[provider].label}`} className={fieldClass} />
      </label>
      {provider !== activeProvider && <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">Masukkan key untuk penyedia ini. Key sesi sebelumnya tidak dipakai untuk penyedia lain.</p>}
      {mismatch && <p role="alert" className="text-sm leading-6 text-red-700 dark:text-red-300">Key tidak cocok dengan penyedia yang dipilih. Pilih penyedia yang sesuai atau ganti key.</p>}
      <label className="flex min-h-11 items-center gap-2"><input type="checkbox" disabled={busy} checked={remember} onChange={event => setRemember(event.target.checked)} /> Ingat key di browser ini</label>
      <label className="block font-semibold">Model
        <select disabled={busy} value={selectedModel} onChange={event => setSelectedModel(event.target.value)} className={fieldClass}>
          <option value="auto">Otomatis · {AI_MODELS[provider].automatic}</option>
          {selectedModel !== 'auto' && !listedModels.some(m => m.id === selectedModel) && <option value={selectedModel}>{selectedModel}</option>}
          {listedModels.map(m => <option key={m.id} value={m.id}>{m.label} ({m.id})</option>)}
        </select>
      </label>
      <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">{provider === 'gemini' ? 'Otomatis mengikuti alias Flash terbaru dari Google, termasuk kemungkinan versi preview. Pilih model tertentu untuk mempertahankan versi.' : 'Otomatis memakai model default yang dikelola aplikasi, bukan jaminan model paling baru. Muat daftar model dari akunmu untuk memilih model tertentu.'}</p>
      <label className="flex min-h-11 items-start gap-2 py-2"><input className="mt-1" type="checkbox" disabled={busy} checked={fallback} onChange={event => setFallback(event.target.checked)} /><span>Izinkan cadangan {AI_MODELS[provider].fallback} saat model otomatis tidak tersedia. Tetap di penyedia yang sama; harga dapat berbeda.</span></label>
      <div className="flex flex-wrap gap-2">
        <button type="button" disabled={!key || mismatch || busy} onClick={() => void run(false)} className="min-h-11 rounded-lg border px-3 font-semibold disabled:opacity-50">Muat model</button>
        <button type="button" disabled={!key || mismatch || busy} onClick={() => void run(true)} className="min-h-11 rounded-lg border px-3 font-semibold disabled:opacity-50">Cek koneksi</button>
      </div>
      <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">Cek koneksi mengirim pesan uji singkat dan memakai kuota akunmu. Key API berbeda dari langganan aplikasi chat.</p>
      <p role="status" className="text-sm leading-6">{busy ? 'Memeriksa penyedia AI…' : status}</p>
      <button type="submit" disabled={!key || mismatch || busy} className="min-h-11 w-full rounded-lg bg-blue-600 px-3 font-bold text-white disabled:opacity-50">Simpan & mulai belajar</button>
      {onCancel && <button type="button" disabled={busy} onClick={onCancel} className="min-h-11 w-full rounded-lg border font-semibold">Kembali ke percakapan</button>}
    </form>
    <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-5 text-gray-600 dark:border-gray-700 dark:text-gray-300">Key dikirim langsung dari browser ke {AI_PROVIDERS[provider].label}, dan hanya disimpan jika kamu memilih Ingat key. Saat mengirim pertanyaan, riwayat percakapan dan kutipan materi yang disertakan juga dikirim ke penyedia yang kamu pilih. Riwayat chat disimpan di browser ini. Gunakan perangkat tepercaya. AI dapat keliru; periksa kembali sumber materi.</p>
  </div>;
}
