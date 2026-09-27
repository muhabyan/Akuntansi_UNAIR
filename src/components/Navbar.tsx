// =============================================================
// src/components/Navbar.tsx
// Navbar sticky + mega menu (Materi & Soal, Quiz, Laporan) + Search.
// Stage 9 — navbar interaction and visual redesign fix.
// - keeps mega menus clickable and unclipped;
// - adds responsive mobile access;
// - keeps subtle scroll progress without blocking pointer events.
// =============================================================
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, UserCircle2, X, Download } from 'lucide-react';
import { LogoMark, Wordmark } from './brand/AkuntansiHubLogo';
import { MegaMenu, QuizMegaMenu, LaporanMegaMenu } from './MegaMenu';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';
import type { Course, CourseTabId } from '../types';
import { useAuth } from '../contexts/AuthContext';
import ProfileModal from './ProfileModal';
import NotificationBell from './NotificationBell';

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
  const buttonClass = compact
    ? `flex min-h-11 w-full items-center rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
        isActive
          ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/35 dark:text-blue-300'
          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      }`
    : `global-nav-link ${isActive ? 'is-active' : ''}`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isActive || undefined}
      className={buttonClass}
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
  const { user, loading, signIn } = useAuth();
  const navRef = useRef<HTMLElement>(null);

  // Sticky bars and # jumps stay clear of the header through --site-header-h (index.css). The header shrinks after
  // scrolling and is hidden in Zen mode, so its height is published live, except while the phone menu is open: that
  // menu only covers the page.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav || mobileOpen || typeof ResizeObserver === 'undefined') return;
    const publish = () => document.documentElement.style.setProperty('--site-header-h', `${nav.getBoundingClientRect().height}px`);
    const observer = new ResizeObserver(publish);
    observer.observe(nav, { box: 'border-box' });
    publish();
    return () => observer.disconnect();
  }, [mobileOpen]);

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
      ref={navRef}
      className={`fixed top-0 z-[90] w-full border-b border-line bg-surface pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-2' : 'py-2 md:py-3'
      }`}
    >
      <div className="nav-menu-container mx-auto w-full max-w-[90rem] px-3 sm:px-5 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between gap-3">
          <button onClick={handleHome} className="group flex min-h-11 min-w-0 shrink cursor-pointer items-center gap-1.5 text-left md:shrink-0 md:gap-3" type="button">
            <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 md:h-10 md:w-10" />
            <div className="min-w-0">
              <h1 className="truncate">
                <span aria-hidden="true"><Wordmark className="text-[15px] sm:text-lg md:text-xl" /></span>
                <span className="sr-only">AkuntansiHub</span>
              </h1>
              <p className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:block">
                FEB UNAIR
              </p>
            </div>
          </button>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 lg:gap-3">
            <div className="hidden shrink-0 items-center gap-0.5 lg:flex">
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

            <div className="hidden min-w-0 w-[clamp(14rem,20vw,19rem)] shrink xl:block" id="tour-search">
              <SearchBar onSelectCourse={(c, tab) => handleSelect(c, tab ?? 'tm1-7')} />
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2" id="tour-theme-wrapper">
              <div className="hidden items-center md:flex">
                {!loading && (
                  user ? (
                    <button onClick={() => setProfileModalOpen(true)} className="text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm" title="Profil & Nickname">
                      <UserCircle2 size={16} className="text-blue-600 dark:text-blue-400" />
                      <span className="truncate max-w-[100px]">{user.user_metadata?.nickname || user.email?.split('@')[0]}</span>
                    </button>
                  ) : (
                    <button onClick={signIn} className="text-sm font-semibold text-white bg-[#182632] hover:bg-[#263b4d] dark:bg-accent dark:text-gray-950 dark:hover:bg-blue-300 px-4 py-1.5 rounded-full transition shadow-sm">
                      Masuk
                    </button>
                  )
                )}
              </div>
              {deferredPrompt && (
                <button
                  onClick={handleInstallClick}
                  className="hidden items-center gap-1.5 rounded-full border border-accent bg-surface px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 md:flex"
                  title="Install Aplikasi (Offline)"
                >
                  <Download size={14} />
                  <span>Install</span>
                </button>
              )}
              <NotificationBell />
              <ThemeSwitch theme={theme} onToggleTheme={onToggleTheme} variant={isQuietThemeControl ? 'quiet' : 'legacy'} />
              <button
                type="button"
                className="stage9-mobile-toggle lg:hidden"
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

        <div className="mt-2 hidden lg:block xl:hidden">
          <SearchBar onSelectCourse={(c, tab) => handleSelect(c, tab ?? 'tm1-7')} />
        </div>

        {mobileOpen && (
          <div className="stage9-mobile-panel lg:hidden">
            <div className="mb-2" id="tour-search-mobile">
              <SearchBar onSelectCourse={(c, tab) => handleSelect(c, tab ?? 'tm1-7')} />
            </div>
            {deferredPrompt && (
              <NavBtn label="Install Aplikasi (Offline)" onClick={handleInstallClick} compact />
            )}
            <NavBtn label="Home" onClick={handleHome} compact />
            <NavBtn label="Materi & Soal" isActive={activeMenu === 'materi'} onClick={() => toggleMenu('materi')} compact />
            <NavBtn label="Kuis" isActive={activeMenu === 'quiz'} onClick={() => toggleMenu('quiz')} compact />
            <NavBtn label="Laporan" isActive={activeMenu === 'laporan'} onClick={() => toggleMenu('laporan')} compact />
            
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
              {!loading && (
                user ? (
                  <button onClick={() => { setProfileModalOpen(true); setMobileOpen(false); }} className="w-full text-left text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2 py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                    <UserCircle2 size={18} />
                    <span className="truncate">{user.user_metadata?.nickname || user.email}</span>
                  </button>
                ) : (
                  <button onClick={() => { signIn(); setMobileOpen(false); }} className="w-full text-center text-sm font-semibold text-white bg-[#182632] hover:bg-[#263b4d] dark:bg-accent dark:text-gray-950 dark:hover:bg-blue-300 px-4 py-2 rounded-lg transition shadow-sm">
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
