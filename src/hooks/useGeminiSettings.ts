import { useState, useEffect } from 'react';

const STORAGE_KEY = 'aks1_gemini_api_key';

export function useGeminiSettings() {
  const [apiKey, setApiKey] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setApiKey(stored);
    }
    setIsReady(true);
  }, []);

  const saveApiKey = (key: string) => {
    const cleanKey = key.trim();
    localStorage.setItem(STORAGE_KEY, cleanKey);
    setApiKey(cleanKey);
  };

  const removeApiKey = () => {
    localStorage.removeItem(STORAGE_KEY);
    setApiKey('');
  };

  return { apiKey, saveApiKey, removeApiKey, isReady, hasKey: !!apiKey };
}
