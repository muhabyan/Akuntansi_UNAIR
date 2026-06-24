import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Key, Info } from 'lucide-react';
import { useGeminiSettings } from '../hooks/useGeminiSettings';
import { chatWithAI, type AIMessage } from '../lib/aiClient';

const formatMessage = (text: string) => {
  // Split by **bold** text
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
    }
    // Also handle * for simple italics if needed, but let's stick to simple text for now
    return <span key={i}>{part}</span>;
  });
};

export default function AITutorFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const { apiKey, saveApiKey, removeApiKey, hasKey } = useGeminiSettings();
  const [inputKey, setInputKey] = useState('');
  
  const [messages, setMessages] = useState<AIMessage[]>([
    { role: 'model', content: 'Halo! Saya AI Tutor AKS1. Ada materi kuliah Akuntansi atau Perpajakan yang bikin bingung? Tanyakan saja!' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey.trim()) {
      saveApiKey(inputKey);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !hasKey || isLoading) return;

    const userMsg = inputText.trim();
    setInputText('');
    
    const newMessages: AIMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const systemPrompt = "Kamu adalah AI Tutor pintar yang bertugas mendampingi mahasiswa S1 Akuntansi Fakultas Ekonomi dan Bisnis Universitas Airlangga (FEB UNAIR). Gunakan bahasa Indonesia yang ramah, asik, semi-formal, dan suportif. Jelaskan konsep akuntansi, pajak, dan etika profesi dengan analogi sederhana yang mudah dipahami mahasiswa.";
      
      const reply = await chatWithAI(newMessages, apiKey, systemPrompt);
      setMessages(prev => [...prev, { role: 'model', content: reply }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'model', content: `[ERROR]: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed top-1/2 right-0 w-0 h-0 pointer-events-none -translate-y-1/2 ${isOpen ? 'z-[100]' : 'z-50'}`}>
      {/* Expanded Panel */}
      <div 
        className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 origin-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-[340px] md:w-[400px] h-[550px] max-h-[85vh] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white shrink-0">
            <div className="flex items-center gap-2 font-bold">
              <Bot size={20} /> AI Tutor
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white hover:bg-blue-700 p-1 rounded-full transition"
            >
              <X size={18} />
            </button>
          </div>

          {!hasKey ? (
            /* Setup API Key Screen */
            <div className="flex-1 p-6 flex flex-col justify-center overflow-y-auto">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Key size={24} />
              </div>
              <h3 className="text-center font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">Setup AI Tutor</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Fitur ini 100% gratis, tapi Anda butuh <b>API Key (Gemini atau Groq)</b> milik Anda sendiri karena aplikasi ini berjalan secara lokal.
              </p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-xs text-yellow-800 dark:text-yellow-200 mb-4 flex gap-2">
                <Info size={16} className="shrink-0 mt-0.5" />
                <p>Kunci API hanya disimpan di <i>browser</i> HP/Laptop Anda. Kami tidak merekam data Anda.</p>
              </div>

              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 text-center hover:underline mb-4 block font-semibold"
              >
                1. Dapatkan API Key Gratis di Google AI Studio
              </a>

              <form onSubmit={handleSaveKey} className="flex flex-col gap-3">
                <input
                  type="password"
                  placeholder="Paste API Key (AIzaSy...)"
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit"
                  className="w-full py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition"
                >
                  Simpan & Mulai Belajar
                </button>
              </form>
            </div>
          ) : (
            /* Chat Interface */
            <>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-sm' 
                          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm shadow-sm'
                      }`}
                    >
                      {formatMessage(msg.content)}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5 items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (inputText.trim() && !isLoading) {
                          handleSendMessage(e as any);
                        }
                      }
                    }}
                    placeholder="Tanya soal pajak, etika, dll... (Shift+Enter untuk baris baru)"
                    className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[40px] max-h-32 overflow-y-auto"
                    rows={1}
                  />
                  <button 
                    type="submit"
                    disabled={!inputText.trim() || isLoading}
                    className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 disabled:opacity-50 transition"
                  >
                    <Send size={16} className="ml-0.5" />
                  </button>
                </form>
                <div className="text-[10px] text-center text-gray-400 mt-2 flex items-center justify-center gap-2">
                  <span>Powered by Gemini</span>
                  <span>•</span>
                  <button onClick={removeApiKey} className="hover:text-red-500 hover:underline">Hapus Kunci API</button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 flex items-center shadow-md transition-all duration-300 active:scale-95 ${
          isOpen 
            ? 'w-0 h-0 opacity-0 overflow-hidden' 
            : 'w-2 md:w-10 h-14 md:h-16 rounded-l-md md:rounded-l-2xl bg-blue-600 text-white'
        }`}
      >
        <div className="absolute inset-y-0 -left-6 w-8 bg-transparent md:hidden" /> {/* Mobile touch target */}
        <div className="absolute right-2.5 hidden md:flex">
          <Bot size={20} />
        </div>
      </button>
    </div>
  );
}
