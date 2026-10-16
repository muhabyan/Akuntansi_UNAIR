import { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { useGeminiSettings } from '../hooks/useGeminiSettings';
import { chatWithAI, type AIMessage } from '../lib/aiClient';
import { useDraggableWidget } from '../hooks/useDraggableWidget';
import AITutorSettings from './AITutorSettings';
import { buildTutorPrompt, captureTutorContext, parseTutorReply, validateTutorCommand, type TutorCommand, type TutorMode } from '../lib/aiTutor';
import { useNotification } from '../contexts/NotificationContext';
import { useAuth } from '../contexts/AuthContext';
import ReactMarkdown from 'react-markdown';

export default function AITutorFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const { apiKey, saveApiKey, removeApiKey, hasKey, model, setModel, allowFallback, setAllowFallback, storageWarning, rememberKey } = useGeminiSettings();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [mode, setMode] = useState<TutorMode>('learn');
  const [context, setContext] = useState({ text: '', label: 'Belum ada materi terbuka' });
  const [shareContext, setShareContext] = useState(true);
  const [lastModel, setLastModel] = useState('');
  const [requestError, setRequestError] = useState('');
  const [failedHistory, setFailedHistory] = useState<AIMessage[] | null>(null);
  const [pendingCommand, setPendingCommand] = useState<TutorCommand | null>(null);
  const requestRef = useRef<AbortController | null>(null);
  const openRef = useRef(isOpen);
  openRef.current = isOpen;
  useEffect(() => () => requestRef.current?.abort(), []);
  useEffect(() => {
    if (isOpen) (panelRef.current?.querySelector<HTMLElement>('textarea') ?? panelRef.current?.querySelector<HTMLElement>('input'))?.focus();
  }, [isOpen, showSettings, hasKey]);
  const { addNotification } = useNotification();
  const { user } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);
  
  const draggable = useDraggableWidget({
    id: 'ai-tutor',
    defaultPosition: { x: window.innerWidth - 72, y: window.innerHeight / 2 }
  });

  const openPanel = useCallback(() => {
    window.dispatchEvent(new CustomEvent('akuntansihub:utility-open', { detail: { id: 'ai-tutor' } }));
    setContext(captureTutorContext(document));
    setIsOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener('open-ai-tutor', openPanel);
    return () => window.removeEventListener('open-ai-tutor', openPanel);
  }, [openPanel]);

  useEffect(() => {
    const closeWhenAnotherUtilityOpens = (event: Event) => {
      if ((event as CustomEvent<{ id?: string }>).detail?.id !== 'ai-tutor') setIsOpen(false);
    };
    const closeUtility = () => setIsOpen(false);
    window.addEventListener('akuntansihub:utility-open', closeWhenAnotherUtilityOpens);
    window.addEventListener('akuntansihub:close-utility', closeUtility);
    return () => {
      window.removeEventListener('akuntansihub:utility-open', closeWhenAnotherUtilityOpens);
      window.removeEventListener('akuntansihub:close-utility', closeUtility);
    };
  }, []);
  
  const [messages, setMessages] = useState<AIMessage[]>(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem('aiTutorChatHistory'); } catch { /* Session-only chat. */ }
    if (saved) {
      try {
        const history: unknown = JSON.parse(saved);
        if (Array.isArray(history)) return history.filter((m): m is AIMessage => m && (m.role === 'user' || m.role === 'model') && typeof m.content === 'string').slice(-60);
      } catch {
        console.error('Failed to parse chat history');
      }
    }
    return [
      { role: 'model', content: 'Halo! Saya AI Tutor AkuntansiHub. Ada materi kuliah Akuntansi atau Perpajakan yang bikin bingung? Tanyakan saja!', timestamp: Date.now() }
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Reset unread count when opened
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    try { localStorage.setItem('aiTutorChatHistory', JSON.stringify(messages.slice(-60))); } catch { /* Chat remains usable without persistence. */ }
  }, [messages]);

  const handleClearChat = () => {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh riwayat obrolan?')) {
      const initialMessage: AIMessage[] = [{ role: 'model', content: 'Halo! Saya AI Tutor AkuntansiHub. Ada materi kuliah Akuntansi atau Perpajakan yang bikin bingung? Tanyakan saja!' }];
      setMessages(initialMessage);
      setPendingCommand(null); setFailedHistory(null); setRequestError('');
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); setIsOpen(false); } };
    document.addEventListener('keydown', onKey, true);
    return () => { document.removeEventListener('keydown', onKey, true); draggable.ref.current?.focus(); };
  }, [isOpen, draggable.ref]);

  const send = async (history: AIMessage[]) => {
    setIsLoading(true); setRequestError(''); setFailedHistory(null); setPendingCommand(null);
    const controller = new AbortController(); requestRef.current = controller;
    try {
      const reply = await chatWithAI(history, apiKey, buildTutorPrompt(mode, mode === 'learn' && shareContext ? context.text : '', window.location.pathname), { model, allowFallback, signal: controller.signal });
      if (controller.signal.aborted) return;
      const parsed = parseTutorReply(reply.content, mode);
      setPendingCommand(parsed.command);
      const displayContent = parsed.content || (parsed.command ? 'Periksa usulan tindakan berikut sebelum dijalankan.' : 'Jawaban belum dapat ditampilkan. Coba pertanyaan lain.');
      setLastModel(reply.model + (reply.usedFallback ? ' · cadangan' : ''));
      setMessages(prev => [...prev, { role: 'model', content: displayContent, timestamp: Date.now() }]);
      if (!openRef.current) {
        setUnreadCount(prev => prev + 1);
        addNotification({ type: 'chat', title: 'AI Tutor', message: 'Jawaban untuk pertanyaan belajarmu sudah tersedia.' });
      }
    } catch (error) {
      if (!controller.signal.aborted) { setRequestError(error instanceof Error ? error.message : 'Permintaan belum berhasil.'); setFailedHistory(history); }
    } finally { if (requestRef.current === controller) { requestRef.current = null; setIsLoading(false); } }
  };
  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputText.trim() || !hasKey || isLoading) return;
    const question = inputText.trim().slice(0, 6000); setInputText('');
    if (question === '/help' || question === '/info') {
      setMessages(prev => [...prev, { role: 'user', content: question }, { role: 'model', content: 'Mode Belajar menjelaskan konsep dan hitungan bertahap. Sertakan kutipan materi bila diperlukan. Mode Navigasi & jadwal mengusulkan tindakan yang harus kamu periksa dahulu. Pengaturan menyediakan pilihan model, daftar model, dan cek koneksi.' }]);
      return;
    }
    const history: AIMessage[] = [...messages, { role: 'user', content: question, timestamp: Date.now() }];
    setMessages(history); await send(history);
  };
  const runCommand = () => {
    const command = validateTutorCommand(pendingCommand);
    if (!command || mode !== 'actions') return;
    if (command.action !== 'navigate' && !user) { setRequestError('Masuk ke akun terlebih dahulu untuk mengubah jadwal belajar.'); return; }
    window.dispatchEvent(new CustomEvent(command.action === 'navigate' ? 'ai-navigate' : 'ai-schedule', { detail: command }));
    setPendingCommand(null);
    setMessages(prev => [...prev, { role: 'model', content: command.action === 'navigate' ? 'Permintaan membuka halaman telah diteruskan.' : 'Permintaan jadwal diteruskan. Periksa hasilnya pada jadwal belajar; perubahan memerlukan login.', timestamp: Date.now() }]);
  };

  const formatTime = (ts?: number) => {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  const isLeftHalf = typeof window !== 'undefined' ? draggable.position.x < (document.documentElement.clientWidth || window.innerWidth) / 2 : false;
  const isTopHalf = typeof window !== 'undefined' ? draggable.position.y < window.innerHeight / 2 : false;

  const formatDatePill = (dateStr?: number) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()) {
      return 'Hari ini';
    } else if (d.getDate() === yesterday.getDate() && d.getMonth() === yesterday.getMonth() && d.getFullYear() === yesterday.getFullYear()) {
      return 'Kemarin';
    } else {
      return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    }
  };

  return (
    <>
      {/* Expanded Panel */}
      <div 
        id="ai-tutor-panel"
        data-utility-panel="ai-tutor"
        role="dialog"
        aria-label="AI Tutor"
        aria-hidden={!isOpen}
        ref={(panel) => { panelRef.current = panel; panel?.toggleAttribute('inert', !isOpen); }}
        className={`mobile-utility-panel zen-hideable fixed z-[100] transition-[transform,opacity] duration-200 ease-out ${
          isTopHalf ? 'origin-top' : 'origin-bottom'
        }-${isLeftHalf ? 'left' : 'right'} ${
          !isOpen ? 'scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100 pointer-events-auto'
        }`}
        style={draggable.isDesktop ? draggable.getPanelStyle(400, 550) : undefined}
      >
        <div className="mobile-utility-card mobile-utility-card--chat w-[340px] md:w-[400px] h-[550px] max-h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          <div className="flex items-center justify-between p-4 text-white shrink-0 select-none bg-blue-600">
            <div className="flex items-center gap-2 font-bold pointer-events-none">
              <Bot size={20} /> AI Tutor
            </div>
            <button 
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              onClick={() => setIsOpen(false)}
              aria-label="Tutup AI Tutor"
              className="text-blue-100 hover:text-white hover:bg-blue-700 p-1 rounded-full transition relative z-10 cursor-pointer"
              title="Tutup obrolan"
            >
              <X size={18} />
            </button>
          </div>

          {storageWarning && <p role="status" className="shrink-0 px-4 py-2 text-xs text-amber-700 dark:text-amber-200">{storageWarning}</p>}
          {!hasKey || showSettings ? (
            <AITutorSettings apiKey={apiKey} model={model} allowFallback={allowFallback} rememberKey={rememberKey} onModelChange={setModel} onFallbackChange={setAllowFallback}
              onSave={(key, remember) => { requestRef.current?.abort(); saveApiKey(key, remember); setShowSettings(false); setLastModel(''); setFailedHistory(null); setRequestError(''); setPendingCommand(null); }}
              onCancel={hasKey ? () => setShowSettings(false) : undefined} />
          ) : (
            /* Chat Interface */
            <>
              <div className="shrink-0 border-b border-gray-200 px-3 py-2 dark:border-gray-800">
                <div className="flex gap-2" aria-label="Mode AI Tutor">
                  {(['learn', 'actions'] as const).map(value => <button key={value} type="button" aria-pressed={mode === value} disabled={isLoading} onClick={() => { setMode(value); setPendingCommand(null); setFailedHistory(null); setRequestError(''); }} className={mode === value ? 'min-h-11 rounded-lg bg-blue-600 px-3 text-xs font-bold text-white' : 'min-h-11 rounded-lg px-3 text-xs font-semibold text-gray-600 dark:text-gray-300'}>{value === 'learn' ? 'Belajar' : 'Navigasi & jadwal'}</button>)}
                  <button type="button" disabled={isLoading} onClick={() => setShowSettings(true)} className="ml-auto min-h-11 px-2 text-xs font-semibold text-blue-700 dark:text-blue-300">Pengaturan</button>
                </div>
                {mode === 'learn' && <details className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">
                  <summary className="cursor-pointer py-1">Kutipan yang disertakan</summary>
                  <label className="flex min-h-11 items-center gap-2"><input type="checkbox" checked={shareContext} onChange={event => setShareContext(event.target.checked)} /> Sertakan bagian materi</label>
                  <p>{context.label}</p><pre className="max-h-28 overflow-auto whitespace-pre-wrap text-xs">{context.text || 'Tidak ada kutipan. Kamu tetap bisa bertanya dengan data yang kamu tulis.'}</pre>
                  <button type="button" onClick={() => setContext(captureTutorContext(document))} className="min-h-11 font-semibold text-blue-700 dark:text-blue-300">Perbarui dari posisi baca</button>
                </details>}
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 space-y-4">
                {messages.map((msg, i) => {
                  let showDatePill = false;
                  if (msg.timestamp) {
                    if (i === 0) {
                      showDatePill = true;
                    } else {
                      const prevMsg = messages[i-1];
                      if (!prevMsg.timestamp) {
                        showDatePill = true;
                      } else {
                        const msgDate = new Date(msg.timestamp);
                        const prevDate = new Date(prevMsg.timestamp);
                        if (msgDate.getDate() !== prevDate.getDate() || msgDate.getMonth() !== prevDate.getMonth() || msgDate.getFullYear() !== prevDate.getFullYear()) {
                          showDatePill = true;
                        }
                      }
                    }
                  }

                  return (
                    <div key={i} className="flex flex-col">
                      {showDatePill && (
                        <div className="flex justify-center my-3">
                          <span className="bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                            {formatDatePill(msg.timestamp)}
                          </span>
                        </div>
                      )}
                      <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} mb-1`}>
                        <div 
                          className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                              ? 'bg-blue-600 text-white rounded-br-sm whitespace-pre-wrap' 
                              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm'
                          }`}
                        >
                        {msg.role === 'user' ? (
                          <div className="flex flex-col">
                            <span>{msg.content}</span>
                          </div>
                        ) : (
                          <ReactMarkdown
                            components={{
                              p: ({node: _node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                              strong: ({node: _node, ...props}) => <strong className="font-bold" {...props} />,
                              em: ({node: _node, ...props}) => <em className="italic" {...props} />,
                              ul: ({node: _node, ...props}) => <ul className="list-disc pl-4 mb-2" {...props} />,
                              ol: ({node: _node, ...props}) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                              li: ({node: _node, ...props}) => <li className="mb-1" {...props} />,
                              h1: ({node: _node, ...props}) => <h1 className="font-bold text-lg mb-2" {...props} />,
                              h2: ({node: _node, ...props}) => <h2 className="font-bold text-base mb-2" {...props} />,
                              h3: ({node: _node, ...props}) => <h3 className="font-semibold mb-2" {...props} />,
                              code: ({node: _node, inline, className, children, ...props}: any) => {
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
                      {msg.timestamp && (
                        <span className={`text-[10px] text-gray-400 mt-1 px-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                          {formatTime(msg.timestamp)}
                        </span>
                      )}
                      </div>
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5 items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                {pendingCommand && <div className="rounded-lg border border-blue-300 p-3 text-sm dark:border-blue-700">
                  <p className="font-semibold">Usulan tindakan · belum dijalankan</p>
                  <p>{pendingCommand.action} · {pendingCommand.courseCode} · {pendingCommand.activityId} {pendingCommand.date} {pendingCommand.time}</p>
                  <div className="mt-2 flex gap-2"><button type="button" onClick={runCommand} className="min-h-11 rounded-lg bg-blue-600 px-3 font-bold text-white">Jalankan usulan</button><button type="button" onClick={() => setPendingCommand(null)} className="min-h-11 px-3">Batalkan</button></div>
                </div>}
                {requestError && <div role="alert" className="rounded-lg border border-amber-400 p-3 text-sm text-gray-800 dark:text-gray-100"><p>{requestError}</p>{failedHistory && <button type="button" disabled={isLoading} onClick={() => void send(failedHistory)} className="mt-1 min-h-11 font-bold text-blue-700 dark:text-blue-300">Coba lagi</button>}</div>}
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
                    aria-label="Pertanyaan untuk AI Tutor"
                    maxLength={6000}
                    placeholder="Tanya materi... atau ketik /help"
                    className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[40px] max-h-32 overflow-y-auto"
                    rows={1}
                  />
                  <button 
                    type="submit"
                    disabled={!inputText.trim() || isLoading}
                    aria-label="Kirim pesan ke AI Tutor"
                    className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 disabled:opacity-50 transition"
                  >
                    <Send size={16} className="ml-0.5" />
                  </button>
                </form>
                <div className="text-[10px] text-center text-gray-400 mt-2 flex items-center justify-center gap-2">
                  <span className="max-w-40 truncate" title={lastModel}>Model: {lastModel || (model === 'auto' ? 'otomatis' : model)}</span>
                  <button disabled={isLoading} onClick={handleClearChat} className="hover:text-red-500 hover:underline">
                    Bersihkan Obrolan
                  </button>
                  <span>•</span>
                  <button disabled={isLoading} onClick={() => { removeApiKey(); setPendingCommand(null); setLastModel(''); }} className="hover:text-red-500 hover:underline">
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
        {...(draggable.isDesktop ? draggable.handlers : {})}
        type="button"
        aria-label={isOpen ? 'Tutup AI Tutor' : 'Buka AI Tutor'}
        aria-controls="ai-tutor-panel"
        aria-expanded={isOpen}
        title={isOpen ? 'Tutup AI Tutor' : 'Buka AI Tutor'}
        onClick={(e) => {
          // If we dragged, don't trigger click
          if (draggable.isMoved) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (isOpen) setIsOpen(false);
          else openPanel();
        }}
        style={draggable.isDesktop ? {
          ...draggable.handlers.style,
          position: 'fixed',
          left: `clamp(0px, ${draggable.position.x}px, calc(100vw - 48px))`,
          top: `clamp(70px, ${draggable.position.y}px, calc(100vh - 48px))`,
          zIndex: 99
        } : undefined}
        className={`zen-hideable utility-launcher-quiet group flex items-center justify-center shadow-md ${!isOpen ? 'mobile-utility-launcher mobile-utility-launcher--ai' : ''} ${
          draggable.isDragging ? 'transition-none cursor-grabbing scale-105' : 'transition-[all] duration-300'
        } touch-none ${
          draggable.isLongPressing ? 'shadow-xl ring-4 ring-blue-400/50' : 'cursor-pointer active:scale-95'
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
      
      {/* Unread Badge outside button */}
      {!isOpen && unreadCount > 0 && (
        <div 
          className="mobile-utility-badge mobile-utility-badge--ai fixed z-[100] flex items-center justify-center pointer-events-none"
          style={{
            left: `clamp(0px, ${draggable.position.x + (draggable.isDesktop ? 30 : 25)}px, calc(100vw - 16px))`,
            top: `clamp(70px, ${draggable.position.y - 10}px, calc(100vh - 48px))`
          }}
        >
          <div className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-gray-900 shadow-sm animate-bounce">
            {unreadCount}
          </div>
        </div>
      )}
    </>
  );
}
