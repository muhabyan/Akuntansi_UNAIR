import React, { useState } from 'react';
import { X, UserCircle2, LogOut, Save, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

// Basic profanity filter list (Indonesian & common English)
const BAD_WORDS = [
  'anjing', 'babi', 'monyet', 'bangsat', 'kontol', 'memek', 'jembut', 'peler', 
  'ngentot', 'ngehek', 'goblok', 'tolol', 'bego', 'pantek', 'perek', 'pelacur', 
  'lonte', 'kimpet', 'fuck', 'shit', 'bitch', 'asshole', 'dick', 'pussy', 'cunt',
  'slut', 'whore', 'jancok', 'cok', 'jancuk', 'bajingan', 'kampret', 'tai', 'setan'
];

const containsProfanity = (text: string): boolean => {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return BAD_WORDS.some(word => normalized.includes(word));
};

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { user, signOut } = useAuth();
  
  // Get initial nickname from user_metadata, fallback to email prefix
  const initialNickname = user?.user_metadata?.nickname || user?.email?.split('@')[0] || '';
  
  const [nickname, setNickname] = useState(initialNickname);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen || !user) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const trimmed = nickname.trim();

    if (trimmed.length < 3) {
      setErrorMsg('Nickname minimal 3 karakter.');
      return;
    }

    if (trimmed.length > 20) {
      setErrorMsg('Nickname maksimal 20 karakter.');
      return;
    }

    if (containsProfanity(trimmed)) {
      setErrorMsg('Terdapat kata-kata tidak pantas. Mohon gunakan nama yang sopan.');
      return;
    }

    setIsLoading(true);

    // Ensure session exists
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      setErrorMsg('Sesi login tidak valid atau sudah kedaluwarsa. Silakan Logout dan Login kembali.');
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      data: { nickname: trimmed }
    });

    // Update nickname on all past chat messages in global_chat
    if (!error) {
      await supabase.from('global_chat').update({ user_nickname: trimmed }).eq('user_id', user.id);
    }

    setIsLoading(false);

    if (error) {
      setErrorMsg('Gagal menyimpan profil: ' + error.message);
    } else {
      setSuccessMsg('Profil berhasil diperbarui!');
      setTimeout(() => {
        onClose();
        window.location.reload(); // Reload to refresh navbar
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <UserCircle2 size={20} className="text-blue-600 dark:text-blue-400" />
            Pengaturan Profil
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white p-1 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Akun Anda tertaut dengan email:<br/>
            <strong className="text-gray-900 dark:text-gray-200">{user.email}</strong>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nickname Tampilan
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Masukkan nickname..."
                className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-[11px] text-gray-500 mt-1.5">
                Nama ini akan tampil di sudut layar dan Live Chat global. (Maksimal 20 karakter).
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-xs flex items-center gap-2 border border-red-200 dark:border-red-800/50">
                <AlertCircle size={14} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
            
            {successMsg && (
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-medium border border-emerald-200 dark:border-emerald-800/50">
                {successMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-sm transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save size={16} />
              {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
          </form>

          <hr className="my-5 border-gray-200 dark:border-gray-800" />

          <button
            onClick={signOut}
            className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2"
          >
            <LogOut size={16} />
            Keluar dari Aplikasi
          </button>
        </div>
      </div>
    </div>
  );
}
