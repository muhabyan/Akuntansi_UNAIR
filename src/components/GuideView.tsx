import { useEffect, useRef } from 'react';
import { 
  BookOpen, Calendar, Target, BrainCircuit, Bot, MessageSquare, 
  Clock, Coffee, GraduationCap, Sparkles, Zap, Shield, ArrowRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Reusable Intersection Observer Wrapper
function GuideSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-16');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 translate-y-16 transition-all duration-1000 ease-out ${className}`}>
      {children}
    </div>
  );
}

export default function GuideView({ onHome }: { onHome: () => void }) {
  const { user, signIn } = useAuth();

  const handleStartLearning = () => {
    onHome();
    setTimeout(() => {
      document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleJoinCommunity = () => {
    if (!user) {
      signIn();
    } else {
      window.dispatchEvent(new CustomEvent('open-global-chat'));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-x-hidden selection:bg-blue-200 dark:selection:bg-blue-900/50 pt-16">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-500/5 -skew-y-3 origin-top-left -z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4" /> E-Learning Akuntansi Generasi Baru
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Pelajari Cara Menguasai <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Setiap Fitur Kami
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Aplikasi ini bukan sekadar gudang PDF. Ini adalah ruang belajar interaktif dengan asisten AI, flashcard, kuis langsung, dan manajemen waktu yang cerdas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={handleStartLearning} className="btn-primary px-8 py-3 rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" /> Mulai Belajar Sekarang
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">
        
        {/* 2. Materi Bacaan */}
        <GuideSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-2xl bg-gradient-to-br from-indigo-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-slate-200/50 dark:bg-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />
              {/* Animasi Buku Mockup */}
              <div className="relative w-48 h-64 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-100 dark:border-slate-700 p-4 transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
                <div className="w-full h-4 bg-indigo-100 dark:bg-indigo-900/50 rounded mb-3" />
                <div className="w-3/4 h-3 bg-slate-100 dark:bg-slate-700 rounded mb-6" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded" />
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded" />
                  <div className="w-5/6 h-2 bg-slate-100 dark:bg-slate-700 rounded" />
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center animate-bounce">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Materi Bacaan Interaktif</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Tinggalkan PDF statis yang membosankan. Materi bacaan kami disusun rapi dengan tabel interaktif, format yang responsif untuk HP, dan integrasi langsung dengan AI untuk menjelaskan bagian yang kamu tidak mengerti.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Shield className="w-5 h-5 text-indigo-500" /> Laporan Keuangan Terstruktur
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Shield className="w-5 h-5 text-indigo-500" /> Highlight Poin-poin Kritis
                </li>
              </ul>
            </div>
          </div>
        </GuideSection>

        {/* 3. Jadwal Belajar */}
        <GuideSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Jadwal Belajar (Max 8 Kuota)</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Jangan biarkan materi menumpuk! Rencanakan target harianmu. Aplikasi kami secara cerdas membatasi maksimal 8 jadwal aktif agar kamu fokus mengeksekusi, bukan sekadar merencanakan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Zap className="w-5 h-5 text-emerald-500" /> Notifikasi Keterlambatan (Overdue)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Zap className="w-5 h-5 text-emerald-500" /> Akses Sekali Klik (Deep-Link) ke Materi
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl bg-gradient-to-bl from-emerald-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col items-center justify-center p-6 group">
              {/* Mockup Schedule Cards */}
              <div className="flex gap-4 w-full justify-center transform transition-transform duration-700 group-hover:-translate-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-40 h-32 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 p-4 flex flex-col ${i === 3 ? 'opacity-50' : ''} transition-transform hover:-translate-y-2`}>
                    <div className="w-12 h-4 rounded bg-emerald-100 dark:bg-emerald-900/50 mb-3" />
                    <div className="w-full h-3 rounded bg-slate-200 dark:bg-slate-700 mb-2" />
                    <div className="w-2/3 h-3 rounded bg-slate-200 dark:bg-slate-700 mt-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GuideSection>

        {/* 4. Evaluasi & Review */}
        <GuideSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-2xl bg-gradient-to-tr from-rose-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex items-center justify-center group [perspective:1000px]">
              {/* Mockup Flashcard Flipping */}
              <div className="relative w-56 h-40 transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center">
                  <BrainCircuit className="w-8 h-8 text-orange-500 mb-3" />
                  <div className="font-bold text-slate-800 dark:text-white">Apa itu Akrual?</div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-orange-50 dark:bg-orange-900/20 rounded-xl shadow-lg border border-orange-200 dark:border-orange-800 p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)]">
                  <div className="text-sm font-medium text-orange-800 dark:text-orange-200">
                    Pencatatan pendapatan dan beban saat terjadi, bukan saat kas diterima/dibayar.
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Kuis & Flashcards</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Uji pemahamanmu secara berkala. Kami menyediakan Kuis Pra-UTS, Kuis Pra-UAS, dan Bank Soal komprehensif. Ingin menghafal rumus atau istilah? Gunakan fitur Flashcards dengan sistem repetisi spasi (Spaced Repetition).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Sparkles className="w-5 h-5 text-orange-500" /> Penilaian Otomatis (Auto-Grading)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Sparkles className="w-5 h-5 text-orange-500" /> UI Kartu Interaktif
                </li>
              </ul>
            </div>
          </div>
        </GuideSection>

        {/* 5. AI Tutor & Chatbot */}
        <GuideSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">AI Tutor Cerdas</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Buntu saat mengerjakan soal? Tanya langsung ke AI Tutor yang didukung oleh API Groq atau Google Gemini. AI ini mengetahui konteks spesifik akuntansi dan memberikan penjelasan langkah-demi-langkah, bukan sekadar jawaban akhir.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Zap className="w-5 h-5 text-purple-500" /> Respons Secepat Kilat (Groq)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Zap className="w-5 h-5 text-purple-500" /> Menempel di Pojok Layar (Floating widget)
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col p-6 group">
              {/* Mockup Chat */}
              <div className="flex-1 overflow-hidden space-y-4 pt-4">
                <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[80%] ml-auto text-xs font-medium shadow-sm transform transition-all translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500 delay-100">
                  Kenapa saldo normal kas ada di debit?
                </div>
                <div className="bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-sm self-start max-w-[80%] text-xs font-medium shadow-sm transform transition-all -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500 delay-500">
                  Berdasarkan persamaan dasar akuntansi (Aset = Liabilitas + Ekuitas), Kas adalah bagian dari Aset. Peningkatan pada Aset dicatat di sisi Debit.
                </div>
              </div>
              <div className="mt-auto h-10 bg-white dark:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-600" />
            </div>
          </div>
        </GuideSection>

        {/* 6. Produktivitas */}
        <GuideSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-2xl bg-gradient-to-bl from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex items-center justify-center group">
              {/* Mockup Pomodoro */}
              <div className="relative w-48 h-48 rounded-full border-8 border-teal-100 dark:border-teal-900 flex items-center justify-center bg-white dark:bg-slate-800 shadow-inner group-hover:border-teal-400 dark:group-hover:border-teal-500 transition-colors duration-1000">
                <div className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">25:00</div>
                <div className="absolute top-4 w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Pomodoro & Zen Mode</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Fokus adalah kunci. Gunakan fitur Pomodoro Timer bawaan untuk mengatur sesi belajarmu (25 menit fokus, 5 menit istirahat). Butuh konsentrasi penuh? Aktifkan Zen Mode untuk menyembunyikan elemen UI yang mengganggu.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Shield className="w-5 h-5 text-teal-500" /> Bebas Distraksi
                </li>
              </ul>
            </div>
          </div>
        </GuideSection>
        
        {/* 7. Global Chat */}
        <GuideSection>
          <div className="bg-blue-600 dark:bg-blue-900/50 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl mb-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <MessageSquare className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ruang Diskusi Global</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Kamu tidak belajar sendirian. Tanyakan materi yang sulit, diskusikan tugas, atau sekadar menyapa mahasiswa lain di Global Chat interaktif yang selalu aktif 24/7.
              </p>
              <button onClick={handleJoinCommunity} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-colors">
                {user ? "Mulai Diskusi Sekarang" : "Login untuk Gabung Komunitas"}
              </button>
            </div>
          </div>
        </GuideSection>

      </div>
    </div>
  );
}
