import { useEffect } from 'react';
import { useNotification } from '../contexts/NotificationContext';

// --- KONFIGURASI PATCH UPDATE ---
// Ubah versi ini setiap kali ada pembaruan fitur.
const CURRENT_PATCH_VERSION = 'v1.1.0';

// Tuliskan detail pembaruan di sini.
const PATCH_NOTES = `Pembaruan ${CURRENT_PATCH_VERSION}:
• Fitur Nickname di Pengaturan Profil kini otomatis mengubah pesan lama di Live Chat.
• Animasi Splash Screen baru yang lebih elegan dan heboh.
• Pemisah tanggal otomatis (Hari ini, Kemarin) di dalam Live Chat dan AI Tutor.
• Peningkatan UI/UX untuk resolusi HP.`;

export default function UpdateNotifier() {
  const { addNotification } = useNotification();

  useEffect(() => {
    // Beri sedikit jeda agar tidak bertabrakan dengan animasi awal
    const timer = setTimeout(() => {
      const savedVersion = localStorage.getItem('app_patch_version');
      
      if (savedVersion !== CURRENT_PATCH_VERSION) {
        addNotification({
          type: 'system',
          title: `Update Baru: ${CURRENT_PATCH_VERSION} 🎉`,
          message: PATCH_NOTES
        });
        localStorage.setItem('app_patch_version', CURRENT_PATCH_VERSION);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [addNotification]);

  return null;
}
