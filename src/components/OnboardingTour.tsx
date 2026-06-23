import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export default function OnboardingTour() {
  useEffect(() => {
    // Mengecek apakah user sudah pernah menyelesaikan tour
    const hasSeenTour = localStorage.getItem('aks1_has_seen_tour');
    
    if (!hasSeenTour) {
      // Delay sedikit agar UI ter-render sepenuhnya sebelum tour dimulai
      const timer = setTimeout(() => {
        const tour = driver({
          showProgress: true,
          nextBtnText: 'Selanjutnya ➔',
          prevBtnText: '⬅ Sebelumnya',
          doneBtnText: 'Mulai Belajar!',
          popoverClass: 'driverjs-theme',
          steps: [
            {
              element: 'body',
              popover: {
                title: 'Selamat Datang di AKS1! 👋',
                description: 'E-Learning interaktif untuk mahasiswa S1 Akuntansi UNAIR. Mari ikuti tur singkat ini untuk mengenal fitur-fitur unggulan kami.',
                side: 'top',
                align: 'center'
              }
            },
            {
              element: '#tour-search',
              popover: {
                title: 'Pencarian Cepat 🔍',
                description: 'Cari mata kuliah yang Anda butuhkan (contoh: PJK201 atau Perpajakan) dan langsung lompat ke materinya.',
                side: 'bottom',
                align: 'center'
              }
            },
            {
              element: '#tour-materi',
              popover: {
                title: 'Materi & Soal 📚',
                description: 'Akses semua ringkasan materi, flashcard interaktif, dan bank soal latihan per mata kuliah di menu ini.',
                side: 'bottom',
                align: 'start'
              }
            },
            {
              element: '#tour-pomodoro',
              popover: {
                title: 'Pomodoro Timer ⏱️',
                description: 'Gunakan fitur ini untuk menjaga fokus belajar Anda (25 menit fokus, 5 menit istirahat). Timer akan tetap berjalan meski Anda berpindah halaman.',
                side: 'top',
                align: 'start'
              }
            },
            {
              element: '#tour-theme-wrapper',
              popover: {
                title: 'Sesuaikan Kenyamanan Mata 🌓',
                description: 'Klik di sini untuk beralih antara Mode Terang (Light) dan Mode Gelap (Dark).',
                side: 'bottom',
                align: 'end'
              }
            }
          ],
          onDestroyStarted: () => {
            // Tandai sudah selesai jika tour ditutup/selesai
            localStorage.setItem('aks1_has_seen_tour', 'true');
            tour.destroy();
          }
        });

        tour.drive();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return null; // Komponen ini hanya trigger logika tour, tidak merender UI React
}
