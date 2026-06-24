// =============================================================
// src/components/Navbar.tsx
// Navbar sticky + mega menu (Materi & Soal, Quiz, Laporan) + Search.
// Stage 9 — navbar interaction and visual redesign fix.
// - keeps mega menus clickable and unclipped;
// - adds responsive mobile access;
// - keeps subtle scroll progress without blocking pointer events.
// =============================================================
import { useEffect, useState } from 'react';
import { GraduationCap, LogOut, Menu, UserCircle2, X, Download } from 'lucide-react';
import { MegaMenu, QuizMegaMenu, LaporanMegaMenu } from './MegaMenu';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';
import type { Course, CourseTabId } from '../types';
import { useAuth } from '../contexts/AuthContext';
import ProfileModal from './ProfileModal';

type NavMenu = 'materi' | 'quiz' | 'laporan' | null;

interface NavbarProps {
  onHome: () => void;
  onSelectCourse: (course: Course, tab?: CourseTabId) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectReport: (reportId: string) => void;
  onSelectGuide?: () => void;
  isQuietThemeControl?: boolean;
}

function NavBtn({
  label,
  onClick,
  isActive = false,
  compact = false,
}: {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isActive || undefined}
      className={`relative rounded-md px-3 py-2 text-sm font-semibold lg:px-4 transition-colors ${compact ? 'w-full justify-between text-left' : ''} ${
        isActive
          ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );
}

export default function Navbar({ onHome, onSelectCourse, theme, onToggleTheme, onSelectReport, onSelectGuide, isQuietThemeControl = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<NavMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { user, loading, signIn, signOut } = useAuth();

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-menu-container')) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const handleHome = () => {
    closeMenus();
    onHome();
  };

  const handleSelect = (course: Course, tab: CourseTabId = 'tm1-7') => {
    onSelectCourse(course, tab);
    closeMenus();
  };

  const toggleMenu = (menu: Exclude<NavMenu, null>) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 z-[90] w-full transition-all duration-300 border-b border-gray-200 dark:border-gray-800 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2' : 'bg-white dark:bg-gray-900 py-3'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 nav-menu-container">
        <div className="flex items-center justify-between gap-4">
          <button onClick={handleHome} className="group flex shrink-0 cursor-pointer items-center gap-3 text-left" type="button">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition-all group-hover:bg-blue-700 md:h-11 md:w-11">
              <GraduationCap size={21} aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-display text-base font-bold tracking-tight text-gray-900 dark:text-white md:text-lg">
                AKS1<span className="text-blue-600 dark:text-blue-400">.</span>
              </h1>
              <p className="hidden text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:block">
                FEB UNAIR
              </p>
            </div>
          </button>

          <div className="flex min-w-0 items-center gap-2 md:gap-3">
            <div className="stage9-nav-pill glass-nav-segment hidden items-center gap-1 rounded-2xl p-1 md:flex">
              <NavBtn label="Home" onClick={handleHome} />

              <div className="relative" id="tour-materi">
                <NavBtn
                  label="Materi & Soal"
                  isActive={activeMenu === 'materi'}
                  onClick={() => toggleMenu('materi')}
                />
              </div>

              <div className="relative">
                <NavBtn
                  label="Kuis"
                  isActive={activeMenu === 'quiz'}
                  onClick={() => toggleMenu('quiz')}
                />
              </div>

              <div className="relative">
                <NavBtn
                  label="Laporan"
                  isActive={activeMenu === 'laporan'}
                  onClick={() => toggleMenu('laporan')}
                />
              </div>

              {onSelectGuide && (
                <div className="relative">
                  <NavBtn
                    label="Panduan"
                    onClick={() => { closeMenus(); onSelectGuide(); }}
                  />
                </div>
              )}
            </div>

            <div className="hidden min-w-[260px] lg:block lg:min-w-[310px]" id="tour-search">
              <SearchBar onSelectCourse={(c, tab) => handleSelect(c, tab ?? 'tm1-7')} />
            </div>

            <div className="flex shrink-0 items-center gap-2" id="tour-theme-wrapper">
              <div className="hidden md:flex items-center mr-2">
                {!loading && (
                  user ? (
                    <button onClick={() => setProfileModalOpen(true)} className="text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm" title="Profil & Nickname">
                      <UserCircle2 size={16} className="text-blue-600 dark:text-blue-400" />
                      <span className="truncate max-w-[100px]">{user.user_metadata?.nickname || user.email?.split('@')[0]}</span>
                    </button>
                  ) : (
                    <button onClick={signIn} className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full transition shadow-sm">
                      Masuk
                    </button>
                  )
                )}
              </div>
              {deferredPrompt && (
                <button
                  onClick={handleInstallClick}
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition shadow-sm mr-2"
                  title="Install Aplikasi (Offline)"
                >
                  <Download size={14} />
                  <span>Install</span>
                </button>
              )}
              <ThemeSwitch theme={theme} onToggleTheme={onToggleTheme} variant={isQuietThemeControl ? 'quiet' : 'legacy'} />
              <button
                type="button"
                className="stage9-mobile-toggle md:hidden"
                onClick={() => {
                  setMobileOpen((value) => !value);
                  setActiveMenu(null);
                }}
                aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 lg:hidden">
          <SearchBar onSelectCourse={(c, tab) => handleSelect(c, tab ?? 'tm1-7')} />
        </div>

        {mobileOpen && (
          <div className="stage9-mobile-panel md:hidden">
            {deferredPrompt && (
              <NavBtn label="📱 Install Aplikasi (Offline)" onClick={handleInstallClick} compact />
            )}
            <NavBtn label="Home" onClick={handleHome} compact />
            <NavBtn label="Materi & Soal" isActive={activeMenu === 'materi'} onClick={() => toggleMenu('materi')} compact />
            <NavBtn label="Kuis" isActive={activeMenu === 'quiz'} onClick={() => toggleMenu('quiz')} compact />
            <NavBtn label="Laporan" isActive={activeMenu === 'laporan'} onClick={() => toggleMenu('laporan')} compact />
            
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              {!loading && (
                user ? (
                  <button onClick={signOut} className="w-full text-left text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2 py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                    <UserCircle2 size={18} />
                    <span className="truncate">{user.email}</span>
                    <LogOut size={16} className="ml-auto opacity-70" />
                  </button>
                ) : (
                  <button onClick={() => { signIn(); setMobileOpen(false); }} className="w-full text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition shadow-sm">
                    Masuk / Daftar
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {activeMenu === 'materi' && <MegaMenu onSelect={handleSelect} />}
        {activeMenu === 'quiz' && <QuizMegaMenu onSelect={handleSelect} />}
        {activeMenu === 'laporan' && (
          <LaporanMegaMenu
            onSelectReport={(reportId) => {
              onSelectReport(reportId);
              closeMenus();
            }}
          />
        )}
      </div>
      
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </nav>
  );
}
