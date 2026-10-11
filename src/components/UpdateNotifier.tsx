import { useEffect, useState } from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { LATEST_RELEASE, RELEASES } from '../data/releaseNotes';

// Versi dan isi catatan dibaca dari src/data/releaseNotes.ts. Tambahkan rilis baru di sana.
const CURRENT_PATCH_VERSION = LATEST_RELEASE.version;
const PATCH_NOTES = LATEST_RELEASE.notes;
const OLDER_RELEASES = RELEASES.slice(1);

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
          title: `Update ${CURRENT_PATCH_VERSION}: ${LATEST_RELEASE.headline}`,
          message: `${PATCH_NOTES.length} pembaruan. Ketuk untuk melihat apa saja yang berubah.`,
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-gray-950/65 p-4 animate-in fade-in duration-200">
      <div role="dialog" aria-modal="true" aria-label={`Catatan pembaruan ${CURRENT_PATCH_VERSION}`} className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-md animate-in fade-in duration-200">
        
        {/* Header dengan efek gradient elegan */}
        <div className="relative shrink-0 px-6 py-8 overflow-hidden bg-gray-900">
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
              <p className="mt-1 text-sm text-white/70">{LATEST_RELEASE.date}</p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              aria-label="Tutup catatan pembaruan"
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6">
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

          {OLDER_RELEASES.length > 0 && (
            <details className="mt-6 rounded-lg border border-line px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
              <summary className="cursor-pointer font-semibold text-slate-700 dark:text-slate-200">Pembaruan sebelumnya</summary>
              <div className="mt-3 space-y-4">
                {OLDER_RELEASES.map((release) => (
                  <section key={release.version}>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">
                      {release.version} <span className="font-normal text-slate-500 dark:text-slate-400">· {release.date}</span>
                    </h3>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 leading-relaxed">
                      {release.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </details>
          )}

          <button
            onClick={() => setShowModal(false)}
            className="w-full mt-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
