import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Key, Info } from 'lucide-react';
import { useGeminiSettings } from '../hooks/useGeminiSettings';
import { chatWithAI, type AIMessage } from '../lib/aiClient';
import { useDraggableWidget } from '../hooks/useDraggableWidget';
import { useStudySchedule } from '../hooks/useStudySchedule';
import ReactMarkdown from 'react-markdown';

export default function AITutorFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const { apiKey, saveApiKey, removeApiKey, hasKey } = useGeminiSettings();
  const [inputKey, setInputKey] = useState('');
  const { schedules } = useStudySchedule();
  
  const draggable = useDraggableWidget({
    id: 'ai-tutor',
    defaultPosition: { x: window.innerWidth - 72, y: window.innerHeight / 2 }
  });
  
  const [messages, setMessages] = useState<AIMessage[]>(() => {
    const saved = localStorage.getItem('aiTutorChatHistory');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse chat history');
      }
    }
    return [
      { role: 'model', content: 'Halo! Saya AI Tutor AKS1. Ada materi kuliah Akuntansi atau Perpajakan yang bikin bingung? Tanyakan saja!' }
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    localStorage.setItem('aiTutorChatHistory', JSON.stringify(messages));
  }, [messages]);

  const handleClearChat = () => {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh riwayat obrolan?')) {
      const initialMessage: AIMessage[] = [{ role: 'model', content: 'Halo! Saya AI Tutor AKS1. Ada materi kuliah Akuntansi atau Perpajakan yang bikin bingung? Tanyakan saja!' }];
      setMessages(initialMessage);
      localStorage.setItem('aiTutorChatHistory', JSON.stringify(initialMessage));
    }
  };

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

    if (userMsg.toLowerCase() === '/help' || userMsg.toLowerCase() === '/info') {
      const helpMsg: AIMessage = {
        role: 'model',
        content: `**Daftar Perintah & Fitur AI Tutor:**
1. **Tanya Materi:** Tanyakan apa saja seputar Akuntansi, Pajak, dll.
2. **Navigasi Halaman:** Ketik *“Tolong bukakan materi Akuntansi Biaya TM 8”* atau *“Pindah ke Kuis Pajak”*, dan saya akan otomatis membukakannya untukmu.
3. **Atur Jadwal:** Ketik *“Jadwalin aku belajar AKM 1 TM 2 besok jam 15:00”* atau *“Tandai selesai jadwal Pajak TM 1”* dan jadwalmu akan terupdate secara ajaib! ✨
4. **Hapus Jadwal:** Ketik *“Hapus jadwal AKBI TM 8”* jika kamu batal mengerjakannya.`
      };
      setMessages(prev => [...prev, { role: 'user', content: userMsg }, helpMsg]);
      return;
    }
    
    const newMessages: AIMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Dapatkan teks dari halaman web saat ini untuk RAG (Retrieval-Augmented Generation) on-the-fly
      const contentNode = document.querySelector('main') || document.getElementById('root') || document.body;
      let pageText = contentNode.innerText || '';
      // Potong jadi max 15.000 karakter agar tidak melebihi batas token API
      if (pageText.length > 15000) {
        pageText = pageText.substring(0, 15000) + '... (terpotong)';
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const validSchedules = schedules.filter(s => {
        if (s.is_done) return false; 
        const sDate = new Date(s.date);
        sDate.setHours(0, 0, 0, 0);
        const diffTime = today.getTime() - sDate.getTime();
        return (diffTime / (1000 * 3600 * 24)) <= 3;
      });

      const scheduleContextList = validSchedules.map(s => `- ${s.course_code} ${s.activity_id} pada ${s.date} ${s.time}`).join('\n');

      const systemPrompt = `Kamu adalah AI Tutor pintar yang bertugas mendampingi mahasiswa S1 Akuntansi Fakultas Ekonomi dan Bisnis Universitas Airlangga (FEB UNAIR). Gunakan bahasa Indonesia yang ramah, asik, semi-formal, dan suportif. Jelaskan konsep akuntansi, pajak, dan etika profesi dengan analogi sederhana yang mudah dipahami mahasiswa.

Kamu memiliki kemampuan "Agentic Actions". Kamu bisa mengarahkan halaman atau mengatur jadwal studi mahasiswa. 
Jika mahasiswa memintamu membukakan halaman, atau membuat/menghapus/menyelesaikan jadwal, LETAKKAN blok JSON di bagian paling AKHIR pesanmu dengan mengapitnya dengan <COMMAND> dan </COMMAND>. Jangan pakai format markdown block di dalamnya.

Aksi yang tersedia:
- Navigasi: <COMMAND>{"action": "navigate", "courseCode": "AKK201", "activityId": "tm-8"}</COMMAND> (courseCode harus salah satu dari: AKK106, AKK201, AKM201, PJK201, AKA103, MNU101, EKT109, MAS122. activityId bisa berupa 'tm-1'..max 'tm-14', 'quiz', 'quiz-uts' (untuk Kuis Pra-UTS), 'quiz-uas' (untuk Kuis Pra-UAS), 'bank-soal', 'flashcard')
- Tambah Jadwal: <COMMAND>{"action": "schedule_add", "courseCode": "AKK201", "activityId": "tm-8", "date": "2026-06-25", "time": "15:00"}</COMMAND> (Gunakan format YYYY-MM-DD untuk date, dan HH:mm untuk time)
- Hapus Jadwal: <COMMAND>{"action": "schedule_delete", "courseCode": "AKK201", "activityId": "tm-8"}</COMMAND>
- Selesaikan Jadwal: <COMMAND>{"action": "schedule_finish", "courseCode": "AKK201", "activityId": "tm-8"}</COMMAND>

ATURAN BALASAN (WAJIB DIPATUHI):
1. JANGAN MENGULANG-ULANG PENJELASAN YANG SAMA. Jawablah dengan SANGAT SINGKAT (maksimal 2 kalimat).
2. Langsung eksekusi tindakan dengan mengeluarkan blok <COMMAND>... </COMMAND> setelah 1-2 kalimat pengantar. JANGAN menunda atau berkata "saya akan melakukan ini sekarang" berulang kali.
3. Setelah menuliskan </COMMAND>, SEGERA BERHENTI MENULIS. Jangan tambahkan kata-kata apapun lagi setelahnya.

Waktu lokal pengguna saat ini: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
Gunakan format YYYY-MM-DD (tanggal lokal pengguna: ${new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]}) untuk mengisi parameter date.

ATURAN PENTING PENJADWALAN & NAVIGASI:
1. Kapasitas jadwal: User saat ini memiliki ${validSchedules.length} jadwal aktif dari maksimal 8. Jika jumlah ini sudah genap mencapai angka 8, BARULAH kamu tolak permintaan tambah jadwal. Jika masih di bawah 8 (misal 0 sampai 7), kamu BOLEH dan BISA membuat jadwal baru tanpa perlu mengeluh soal kapasitas!
2. Bentrok jadwal: Berikut daftar jadwal user yang sudah terisi saat ini:
${scheduleContextList || 'Belum ada jadwal.'}
Jadwal dianggap BENTROK HANYA JIKA berada di TANGGAL YANG SAMA PERSIS dan selisih waktunya KURANG DARI 5 MENIT. Jika TANGGAL BERBEDA (misal hari ini vs besok), maka PASTI TIDAK BENTROK. Perhatikan tanggal dan jam dengan sangat teliti! Jika benar-benar bentrok di hari yang sama, tolak dan sarankan waktu lain.
3. Mencegah duplikasi navigasi: URL user saat ini adalah "${window.location.pathname}". Jika user meminta pindah ke halaman materi/kuis yang sedang ia buka saat ini, beritahu bahwa ia sudah berada di halaman tersebut dan JANGAN keluarkan perintah navigate.

PENTING: Berikut adalah teks dari halaman web aplikasi belajar yang SEDANG DIBACA oleh mahasiswa saat ini sebagai konteks tambahan.
<MATERI_YANG_SEDANG_DIBACA>
${pageText}
</MATERI_YANG_SEDANG_DIBACA>`;
      
      const reply = await chatWithAI(newMessages, apiKey, systemPrompt);
      
      let displayContent = reply;
      
      // Parse Command Block
      const cmdStart = reply.indexOf('<COMMAND>');
      const cmdEnd = reply.indexOf('</COMMAND>');
      
      if (cmdStart !== -1 && cmdEnd !== -1 && cmdEnd > cmdStart) {
        displayContent = reply.substring(0, cmdStart).trim();
        const jsonStr = reply.substring(cmdStart + 9, cmdEnd).trim();
        try {
          const cmd = JSON.parse(jsonStr);
          if (cmd.action === 'navigate') {
            window.dispatchEvent(new CustomEvent('ai-navigate', { detail: cmd }));
          } else if (cmd.action.startsWith('schedule_')) {
            window.dispatchEvent(new CustomEvent('ai-schedule', { detail: cmd }));
          }
        } catch (e) {
          console.error("Gagal parsing JSON COMMAND dari AI", e);
        }
      }

      setMessages(prev => [...prev, { role: 'model', content: displayContent }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'model', content: `[ERROR]: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const isLeftHalf = typeof window !== 'undefined' ? draggable.position.x < (document.documentElement.clientWidth || window.innerWidth) / 2 : false;
  const isTopHalf = typeof window !== 'undefined' ? draggable.position.y < window.innerHeight / 2 : false;

  return (
    <>
      {/* Expanded Panel */}
      <div 
        className={`zen-hideable fixed z-[100] transition-all duration-300 ${
          isTopHalf ? 'origin-top' : 'origin-bottom'
        }-${isLeftHalf ? 'left' : 'right'} ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{
          ...(isLeftHalf 
            ? { left: `clamp(16px, ${draggable.position.x + 64}px, calc(100vw - 340px - 16px))` } 
            : { right: `clamp(16px, ${typeof window !== 'undefined' ? (document.documentElement.clientWidth || window.innerWidth) - draggable.position.x + 16 : 16}px, calc(100vw - 340px - 16px))` }),
          ...(isTopHalf 
            ? { top: `clamp(16px, ${draggable.position.y}px, calc(100vh - 550px - 16px))` } 
            : { bottom: `clamp(16px, ${typeof window !== 'undefined' ? window.innerHeight - draggable.position.y - 56 : 16}px, calc(100vh - 550px - 16px))` })
        }}
      >
        <div className="w-[340px] md:w-[400px] h-[550px] max-h-[85vh] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          {/* Header */}
          <div 
            {...draggable.handlers}
            className="flex items-center justify-between p-4 bg-blue-600 text-white shrink-0 cursor-move touch-none"
          >
            <div className="flex items-center gap-2 font-bold pointer-events-none">
              <Bot size={20} /> AI Tutor
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white hover:bg-blue-700 p-1 rounded-full transition relative z-10"
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
                        className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                          msg.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-sm whitespace-pre-wrap' 
                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          msg.content
                        ) : (
                          <ReactMarkdown
                            components={{
                              p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                              strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                              em: ({node, ...props}) => <em className="italic" {...props} />,
                              ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2" {...props} />,
                              ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                              li: ({node, ...props}) => <li className="mb-1" {...props} />,
                              h1: ({node, ...props}) => <h1 className="font-bold text-lg mb-2" {...props} />,
                              h2: ({node, ...props}) => <h2 className="font-bold text-base mb-2" {...props} />,
                              h3: ({node, ...props}) => <h3 className="font-semibold mb-2" {...props} />,
                              code: ({node, inline, className, children, ...props}: any) => {
                                return !inline ? (
                                  <pre className="bg-gray-100 dark:bg-gray-700 rounded p-2 overflow-x-auto text-xs my-2">
                                    <code className={className} {...props}>
                                      {children}
                                    </code>
                                  </pre>
                                ) : (
                                  <code className="bg-gray-100 dark:bg-gray-700 rounded px-1 py-0.5 font-mono text-[11px]" {...props}>
                                    {children}
                                  </code>
                                )
                              }
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        )}
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
              
              <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative">
                {inputText === '/' && (
                  <div className="absolute bottom-full left-3 mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden w-64 z-10 animate-in fade-in slide-in-from-bottom-2">
                    <button
                      type="button"
                      onClick={() => {
                        setInputText('/help');
                        // Ideally submit it immediately, but for simplicity we just set the text and focus
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <strong className="block text-blue-600 dark:text-blue-400">/help</strong>
                      <span className="text-xs text-gray-500">Tampilkan semua fitur & perintah AI</span>
                    </button>
                  </div>
                )}
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
                    placeholder="Tanya materi... atau ketik /help"
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
                  <span>Powered by {apiKey?.startsWith('gsk_') ? 'Groq (Llama 70B)' : 'Gemini'}</span>
                  <button onClick={handleClearChat} className="hover:text-red-500 hover:underline">
                    Bersihkan Obrolan
                  </button>
                  <span>•</span>
                  <button onClick={removeApiKey} className="hover:text-red-500 hover:underline">
                    Hapus Kunci API
                  </button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        ref={draggable.ref}
        {...draggable.handlers}
        onClick={(e) => {
          // If we dragged, don't trigger click
          if (draggable.isMoved) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          setIsOpen(!isOpen);
        }}
        style={{
          ...draggable.handlers.style,
          position: 'fixed',
          left: draggable.position.x,
          top: draggable.position.y,
          zIndex: 60
        }}
        className={`zen-hideable group flex items-center justify-center shadow-md transition-all duration-300 touch-none ${
          draggable.isLongPressing ? 'scale-110 shadow-xl ring-4 ring-blue-400/50 cursor-grabbing' : 'cursor-pointer active:scale-95'
        } ${
          isOpen 
            ? 'w-0 h-0 opacity-0 overflow-hidden' 
            : (() => {
                if (!draggable.isDesktop) {
                  if (draggable.edgeState === 'right') return draggable.isLongPressing ? 'w-12 h-12 rounded-l-2xl bg-blue-600 text-white' : 'w-1.5 h-10 rounded-l-md bg-blue-500/60 active:w-12 active:h-12 active:rounded-l-2xl active:bg-blue-600 text-white';
                  if (draggable.edgeState === 'left') return draggable.isLongPressing ? 'w-12 h-12 rounded-r-2xl bg-blue-600 text-white' : 'w-1.5 h-10 rounded-r-md bg-blue-500/60 active:w-12 active:h-12 active:rounded-r-2xl active:bg-blue-600 text-white';
                  return 'w-10 h-10 rounded-full bg-blue-600 text-white opacity-50';
                } else {
                  if (draggable.edgeState === 'right') return 'w-10 h-12 rounded-l-xl bg-blue-600 text-white';
                  if (draggable.edgeState === 'left') return 'w-10 h-12 rounded-r-xl bg-blue-600 text-white';
                  return 'w-10 h-10 rounded-full bg-blue-600 text-white opacity-50 hover:opacity-100 transition-opacity';
                }
              })()
        }`}
      >
        {!isOpen && <Bot size={20} className={!draggable.isDesktop && draggable.edgeState && !draggable.isLongPressing ? 'opacity-0 group-active:opacity-100 transition-opacity duration-200' : ''} />}
      </button>
    </>
  );
}
