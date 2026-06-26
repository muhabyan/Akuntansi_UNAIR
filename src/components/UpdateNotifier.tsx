import { useEffect, useState } from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

// --- KONFIGURASI PATCH UPDATE ---
// Ubah versi ini setiap kali ada pembaruan fitur.
const CURRENT_PATCH_VERSION = 'v1.1.1';

// Tuliskan detail pembaruan di sini, bisa berupa array of strings.
const PATCH_NOTES = [
  'Fitur Nickname di Pengaturan Profil kini otomatis mengubah pesan lama di Live Chat.',
  'Animasi Splash Screen baru yang lebih elegan dan heboh.',
  'Pemisah tanggal otomatis (Hari ini, Kemarin) di dalam Live Chat dan AI Tutor.',
  'Peningkatan UI/UX untuk resolusi layar HP.'
];

export default function UpdateNotifier() {
  const [showModal, setShowModal] = useState(false);
  const { addNotification } = useNotification();

  useEffect(() => {
    // Beri sedikit jeda agar tidak bertabrakan dengan animasi awal
    const timer = setTimeout(() => {
      const savedVersion = localStorage.getItem('app_patch_version');
      
      if (savedVersion !== CURRENT_PATCH_VERSION) {
        addNotification({
          type: 'system',
          title: `Update Baru: ${CURRENT_PATCH_VERSION} 🎉`,
          message: 'Ada pembaruan fitur baru! Klik notifikasi ini untuk melihat detail lengkapnya.',
          link: '#patch-notes'
        });
        localStorage.setItem('app_patch_version', CURRENT_PATCH_VERSION);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [addNotification]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#patch-notes') {
        setShowModal(true);
        // Hapus hash dari URL agar terlihat bersih
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Cek juga saat komponen pertama kali dirender
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Header dengan efek gradient elegan */}
        <div className="relative px-6 py-8 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Sparkles className="w-24 h-24 text-white" />
          </div>
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-md mb-3 shadow-sm border border-white/10">
                <Sparkles size={14} />
                Update Baru
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Patch <span className="text-blue-200">{CURRENT_PATCH_VERSION}</span>
              </h2>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
            Apa saja yang baru di pembaruan ini?
          </p>
          
          <ul className="space-y-4">
            {PATCH_NOTES.map((note, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <p className="text-sm leading-relaxed">{note}</p>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowModal(false)}
            className="w-full mt-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 font-semibold rounded-xl transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
