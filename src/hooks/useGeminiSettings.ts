import { useState, useEffect } from 'react';
import { providerForKey } from '../lib/aiClient';
const STORAGE_KEY = 'aks1_gemini_api_key';
const OPTIONS_KEY = 'akuntansihub:ai-options';
export function useGeminiSettings() {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('auto');
  const [allowFallback, setAllowFallback] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [rememberKey, setRememberKey] = useState(false);
  const [storageWarning, setStorageWarning] = useState('');
  useEffect(() => {
    try {
      const key = localStorage.getItem(STORAGE_KEY) ?? '';
      setApiKey(key);
      setRememberKey(Boolean(key));
      const options = JSON.parse(localStorage.getItem(OPTIONS_KEY) ?? '{}');
      if (options.provider === providerForKey(key)) {
        if (typeof options.model === 'string') setModel(options.model);
        setAllowFallback(options.allowFallback === true);
      }
    } catch { setStorageWarning('Penyimpanan browser tidak tersedia. Key hanya berlaku selama sesi ini.'); }
    setIsReady(true);
  }, []);
  useEffect(() => {
    if (!isReady) return;
    try { localStorage.setItem(OPTIONS_KEY, JSON.stringify({ provider: providerForKey(apiKey), model, allowFallback })); }
    catch { /* Preferences remain usable for this session. */ }
  }, [apiKey, model, allowFallback, isReady]);
  const saveApiKey = (key: string, remember = true) => {
    const clean = key.trim();
    if (providerForKey(clean) !== providerForKey(apiKey)) setModel('auto');
    setApiKey(clean); setStorageWarning('');
    setRememberKey(remember);
    try { if (remember) localStorage.setItem(STORAGE_KEY, clean); else localStorage.removeItem(STORAGE_KEY); }
    catch { setStorageWarning('Browser tidak dapat memperbarui penyimpanan key. Periksa izin penyimpanan; sesi ini tetap dapat dipakai.'); }
  };
  const removeApiKey = () => {
    setApiKey('');
    setRememberKey(false);
    try { localStorage.removeItem(STORAGE_KEY); }
    catch { setStorageWarning('Key dilepas dari sesi ini, tetapi penyimpanan browser tidak dapat dihapus. Hapus data situs lewat pengaturan browser.'); }
  };
  return { apiKey, saveApiKey, removeApiKey, isReady, hasKey: !!apiKey, model, setModel, allowFallback, setAllowFallback, storageWarning, rememberKey };
}
