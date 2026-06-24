import { useState, useEffect, useRef, FormEvent } from 'react';
import { MessageSquare, Send, X, Users, AlertCircle, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useDraggableWidget } from '../hooks/useDraggableWidget';

interface ChatMessage {
  id: string;
  created_at: string;
  user_id: string;
  user_email: string;
  message: string;
}

export default function LiveChatFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { user, signIn } = useAuth();
  
  const draggable = useDraggableWidget({
    id: 'live-chat',
    defaultPosition: { x: window.innerWidth - 72, y: window.innerHeight / 2 - 80 }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Listen to open-global-chat custom event
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-global-chat', handleOpenChat);
    return () => window.removeEventListener('open-global-chat', handleOpenChat);
  }, []);

  // Load initial messages and subscribe
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('global_chat')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
        
      if (!error && data) {
        setMessages(data.reverse());
      }
    };

    fetchMessages();

    // Subscribe to new messages
    const channel = supabase.channel('public:global_chat')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'global_chat' }, (payload) => {
        const newMessage = payload.new as ChatMessage;
        setMessages((prev) => [...prev, newMessage]);
        
        // Update unread count if panel is closed and message is not from self
        if (!isOpen && newMessage.user_id !== user?.id) {
          setUnreadCount((prev) => prev + 1);
        }
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'global_chat' }, (payload) => {
        setMessages((prev) => prev.filter(m => m.id !== payload.old.id));
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isOpen, user?.id]);

  // Clear unread when opening
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !user || isSending) return;

    const msgText = inputText.trim();
    setInputText('');
    setIsSending(true);
    setErrorMsg('');

    const { error } = await supabase.from('global_chat').insert([
      {
        user_id: user.id,
        user_email: user.email,
        message: msgText,
      }
    ]);

    setIsSending(false);
    
    if (error) {
      console.error('Error sending message:', error);
      setErrorMsg('Gagal mengirim pesan. Pastikan Anda sudah menjalankan SQL di Supabase.');
      setInputText(msgText); // Restore text
    }
  };

  const handleDeleteMessage = async (msgId: string) => {
    if (!window.confirm('Hapus pesan ini?')) return;
    
    // Optimistic UI update
    const previousMessages = [...messages];
    setMessages(prev => prev.filter(m => m.id !== msgId));
    
    const { error } = await supabase.from('global_chat').delete().eq('id', msgId).eq('user_id', user?.id || '');
    
    if (error) {
      console.error('Error deleting message:', error);
      setErrorMsg('Gagal menghapus pesan. Anda belum menambahkan SQL Policy untuk DELETE.');
      setMessages(previousMessages); // Revert
    }
  };

  const getDisplayName = (email: string) => {
    return email.split('@')[0];
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
          <div className="flex items-center justify-between p-4 bg-emerald-600 text-white shrink-0">
            <div className="flex items-center gap-2 font-bold">
              <Users size={20} /> Kelas Global (Live)
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white hover:bg-emerald-700 p-1 rounded-full transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 text-xs flex gap-2 items-center border-b border-red-200 dark:border-red-800">
              <AlertCircle size={14} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50 flex flex-col gap-3">
            {messages.length === 0 ? (
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
                Belum ada pesan. Jadilah yang pertama menyapa!
              </div>
            ) : (
              messages.map((msg, i) => {
                const isMe = msg.user_id === user?.id;
                const showName = i === 0 || messages[i-1].user_id !== msg.user_id;
                
                const msgDate = new Date(msg.created_at);
                const hoursDiff = (new Date().getTime() - msgDate.getTime()) / (1000 * 60 * 60);
                const canDelete = isMe && hoursDiff <= 3;

                return (
                  <div key={msg.id} className={`flex flex-col group ${isMe ? 'items-end' : 'items-start'}`}>
                    {showName && !isMe && (
                      <span className="text-[10px] text-gray-500 font-medium ml-1 mb-1">
                        {getDisplayName(msg.user_email)}
                      </span>
                    )}
                    <div className={`flex items-center gap-2 max-w-[85%] ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div 
                        className={`p-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                          isMe 
                            ? 'bg-emerald-600 text-white rounded-br-sm' 
                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-sm'
                        }`}
                      >
                        {msg.message}
                      </div>
                      
                      {canDelete && (
                        <button 
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-all shrink-0"
                          title="Hapus pesan"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            {!user ? (
              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Anda harus login untuk ikut mengobrol.</p>
                <button 
                  onClick={signIn}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold transition"
                >
                  Login Sekarang
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      if (inputText.trim() && !isSending) {
                        handleSendMessage(e as any);
                      }
                    }
                  }}
                  placeholder="Ketik pesan... (Shift+Enter untuk baris baru)"
                  className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none min-h-[40px] max-h-32 overflow-y-auto"
                  maxLength={500}
                  rows={1}
                />
                <button 
                  type="submit"
                  disabled={!inputText.trim() || isSending}
                  className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 disabled:opacity-50 transition"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        ref={draggable.ref}
        {...draggable.handlers}
        onClick={(e) => {
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
          draggable.isLongPressing ? 'scale-110 shadow-xl ring-4 ring-indigo-400/50 cursor-grabbing' : 'cursor-pointer active:scale-95'
        } ${
          isOpen 
            ? 'w-0 h-0 opacity-0 overflow-hidden' 
            : (() => {
                if (!draggable.isDesktop) {
                  if (draggable.edgeState === 'left') return draggable.isLongPressing ? 'w-12 h-12 rounded-r-2xl bg-indigo-600 text-white' : 'w-1.5 h-10 rounded-r-md bg-indigo-500/60 active:w-12 active:h-12 active:rounded-r-2xl active:bg-indigo-600 text-white';
                  if (draggable.edgeState === 'right') return draggable.isLongPressing ? 'w-12 h-12 rounded-l-2xl bg-indigo-600 text-white' : 'w-1.5 h-10 rounded-l-md bg-indigo-500/60 active:w-12 active:h-12 active:rounded-l-2xl active:bg-indigo-600 text-white';
                  return 'w-10 h-10 rounded-full bg-indigo-600 text-white opacity-50';
                } else {
                  if (draggable.edgeState === 'left') return 'w-10 h-12 rounded-r-xl bg-indigo-600 text-white';
                  if (draggable.edgeState === 'right') return 'w-10 h-12 rounded-l-xl bg-indigo-600 text-white';
                  return 'w-10 h-10 rounded-full bg-indigo-600 text-white opacity-50 hover:opacity-100 transition-opacity';
                }
              })()
        }`}
      >
        {!isOpen && (
          <div className="relative flex items-center justify-center">
            <MessageSquare size={20} className={!draggable.isDesktop && draggable.edgeState && !draggable.isLongPressing ? 'opacity-0 group-active:opacity-100 transition-opacity duration-200' : ''} />
            {unreadCount > 0 && (
              <span className={`absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center border border-indigo-600 ${!draggable.isDesktop && draggable.edgeState && !draggable.isLongPressing ? 'opacity-0 group-active:opacity-100 transition-opacity duration-200' : ''}`}>
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </div>
        )}
      </button>
    </>
  );
}
