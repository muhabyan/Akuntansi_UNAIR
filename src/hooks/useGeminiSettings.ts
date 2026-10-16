import { useState, useEffect } from 'react';
import { isAIProvider, providerForKey, type AIProvider } from '../lib/aiClient';
const STORAGE_KEY = 'aks1_gemini_api_key';
const OPTIONS_KEY = 'akuntansihub:ai-options';
export function useGeminiSettings() {
  const [apiKey, setApiKey] = useState('');
  const [provider, setProvider] = useState<AIProvider>('gemini');
  const [model, setModel] = useState('auto');
  const [allowFallback, setAllowFallback] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [rememberKey, setRememberKey] = useState(false);
  const [storageWarning, setStorageWarning] = useState('');
  useEffect(() => {
    try {
      const key = localStorage.getItem(STORAGE_KEY) ?? '';
      let options: any = {};
      try { options = JSON.parse(localStorage.getItem(OPTIONS_KEY) ?? '{}') ?? {}; } catch { /* Recover a recognizable legacy key. */ }
      const selected = isAIProvider(options.provider) ? options.provider : providerForKey(key);
      if (selected) {
        setProvider(selected); setApiKey(key); setRememberKey(Boolean(key));
        if (typeof options.model === 'string') setModel(options.model);
        setAllowFallback(options.allowFallback === true);
      } else if (key) setStorageWarning('Penyedia key lama belum dikenali. Pilih penyedia dan masukkan ulang key.');
    } catch { setStorageWarning('Penyimpanan browser tidak tersedia. Key hanya berlaku selama sesi ini.'); }
    setIsReady(true);
  }, []);
  const saveApiKey = (key: string, remember = false, nextProvider = provider, nextModel = model, nextFallback = allowFallback) => {
    const clean = key.trim();
    setProvider(nextProvider); setModel(nextModel); setAllowFallback(nextFallback);
    setApiKey(clean); setStorageWarning('');
    setRememberKey(remember);
    try {
      if (remember) localStorage.setItem(STORAGE_KEY, clean); else localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(OPTIONS_KEY, JSON.stringify({ provider: nextProvider, model: nextModel, allowFallback: nextFallback }));
    }
    catch { setStorageWarning('Browser tidak dapat memperbarui penyimpanan key. Periksa izin penyimpanan; sesi ini tetap dapat dipakai.'); }
  };
  const removeApiKey = () => {
    setApiKey('');
    setRememberKey(false);
    try { localStorage.removeItem(STORAGE_KEY); }
    catch { setStorageWarning('Key dilepas dari sesi ini, tetapi penyimpanan browser tidak dapat dihapus. Hapus data situs lewat pengaturan browser.'); }
  };
  return { apiKey, provider, saveApiKey, removeApiKey, isReady, hasKey: !!apiKey, model, allowFallback, storageWarning, rememberKey };
}
