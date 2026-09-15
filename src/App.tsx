// =============================================================
// src/App.tsx — Root: routing (home / semester / detail MK / baca)
// View berat di-lazy-load agar bundle awal ringan (code-splitting).
// =============================================================
import { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import SemesterView from './components/SemesterView';
import { SEMESTERS, ALL_COURSES } from './data/courseData';
import type { Course, CourseTabId, ViewId } from './types';
import IntroSplash from './components/IntroSplash';
import AuthModal from './components/AuthModal';
import PomodoroTimer from './components/PomodoroTimer';
import OnboardingTour from './components/OnboardingTour';
import AITutorFloating from './components/AITutorFloating';
import LiveChatFloating from './components/LiveChatFloating';
import AICommandHandler from './components/AICommandHandler';
import PWAPrompt from './components/PWAPrompt';
import { NotificationProvider } from './contexts/NotificationContext';
import ScheduleNotifier from './components/ScheduleNotifier';
import UpdateNotifier from './components/UpdateNotifier';
import ErrorBoundary from './components/ErrorBoundary';

const CourseDetailView = lazy(() => import('./components/CourseDetailView'));
const ReadingView = lazy(() => import('./components/ReadingView'));
const CourseLayout = lazy(() => import('./components/course/CourseLayout'));
const AkbiManagementReportsView = lazy(() => import('./components/AkbiManagementReportsView'));
const Akm1FinancialReportsView = lazy(() => import('./components/Akm1FinancialReportsView'));
const GuideView = lazy(() => import('./components/GuideView'));

const UNIVERSAL_COURSES = [
  // Semester 1 & 2
  'AKK201', 'AKK106', 'PJK201', 'MNU101', 'AKA103', 'EKT109', 'MAS122', 'AKM201',
  // Semester 2 Supporting / PDB
  'MNM101', 'MNM201', 'AGX101', 'NOP103', 'BAI101', 'NOP104', 'SIP107', 'PHP103', 'MNM107', 'MNM106',
  // Semester 3 & 4
  'AKK202', 'AKM202', 'AKA201', 'MNK201', 'AKS201', 'PJK202', 'PJK301', 'AKS301',
  // Semester 5
  'MNS301', 'MNU307', 'MNM301'
];

type CourseRouteResolution = {
  isCourseRoute: boolean;
  course: Course | null;
};

function resolveCourseFromPath(pathname: string): CourseRouteResolution {
  const match = pathname.match(/^\/course\/([^/]+)\/?$/i);
  if (!match) return { isCourseRoute: false, course: null };

  try {
    const routeCode = decodeURIComponent(match[1]).toUpperCase();
    const course =
      ALL_COURSES.find(({ course }) =>
        course.code.toUpperCase() === routeCode || course.newCode?.toUpperCase() === routeCode
      )?.course ?? null;
    return { isCourseRoute: true, course };
  } catch {
    return { isCourseRoute: true, course: null };
  }
}

function getRouteState(pathname: string): { course: Course | null; notFound: boolean; isGuide?: boolean; semesterId?: string } {
  if (pathname === '/guide') return { course: null, notFound: false, isGuide: true };
  if (pathname === '/' || pathname === '') return { course: null, notFound: false };
  if (pathname.startsWith('/semester/')) {
    const id = pathname.split('/')[2];
    return { course: null, notFound: false, semesterId: id };
  }
  const resolved = resolveCourseFromPath(pathname);
  return {
    course: resolved.course,
    notFound: !resolved.isCourseRoute || resolved.course === null,
  };
}

function pushUrl(path: string) {
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
  }
}

function getInitialTheme(): 'light' | 'dark' {
  const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ViewLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-slate-500 animate-fade-in-up">
      <div className="w-9 h-9 rounded-full border-2 border-navy-500 border-t-gold animate-spin mb-4" />
      <p className="text-sm font-semibold">Memuat materi…</p>
    </div>
  );
}

function NotFoundView({ onHome }: { onHome: () => void }) {
  return (
    <section className="mx-auto max-w-2xl px-5 py-24 text-center animate-fade-in-up">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">404</p>
      <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-slate-400">
        Alamat yang dibuka tidak valid atau mata kuliah tersebut belum tersedia.
      </p>
      <button
        type="button"
        onClick={onHome}
        className="mt-8 rounded-xl border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-bold text-gold transition hover:bg-gold/20"
      >
        Kembali ke beranda
      </button>
    </section>
  );
}

export default function App() {
  const [initialRoute] = useState(() => getRouteState(window.location.pathname));
  const [activeView, setActiveView] = useState<ViewId>(initialRoute.isGuide ? 'guide' : 'home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(initialRoute.course);
  const [routeNotFound, setRouteNotFound] = useState(initialRoute.notFound);
  const [activeTab, setActiveTab] = useState<CourseTabId>('tm1-7');
  const [activeQuizSetId, setActiveQuizSetId] = useState<string | null>(null);
  const [readingTm, setReadingTm] = useState<number | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    let settleTimer: number | undefined;
    let utilityIdleTimer: number | undefined;
    let toolbarIdleTimer: number | undefined;
    let lastUserScrollIntentAt = Number.NEGATIVE_INFINITY;
    let lastUserScrollAt = Number.NEGATIVE_INFINITY;
    let lastEdgeRevealAt = 0;
    let initialReadingGraceUntil = 0;
    let lastScrollY = window.scrollY;
    let lastTouchY: number | null = null;
    const controlIdleDelay = 3600;
    const userScrollIntentWindow = 800;

    const isReadingMode = () => document.body.classList.contains('reading-mode-active');
    const hasOpenUtilityPanel = () => Boolean(document.querySelector('[data-utility-panel][aria-hidden="false"]'));
    const hasOpenReaderPanel = () => hasOpenUtilityPanel() || document.body.classList.contains('reading-outline-menu-open');

    const clearUtilityIdleTimer = () => {
      window.clearTimeout(utilityIdleTimer);
      utilityIdleTimer = undefined;
    };

    const hideReadingUtilities = () => {
      clearUtilityIdleTimer();
      if (!isReadingMode() || hasOpenUtilityPanel()) return;
      document.body.classList.add('reading-utilities-hidden');
    };

    const revealReadingUtilities = (scheduleHide = true) => {
      if (!isReadingMode()) return;
      document.body.classList.remove('reading-utilities-hidden');
      clearUtilityIdleTimer();
      if (scheduleHide && !hasOpenUtilityPanel()) {
        utilityIdleTimer = window.setTimeout(hideReadingUtilities, controlIdleDelay);
      }
    };

    const clearToolbarIdleTimer = () => {
      window.clearTimeout(toolbarIdleTimer);
      toolbarIdleTimer = undefined;
    };

    const hideReadingToolbar = () => {
      clearToolbarIdleTimer();
      if (!isReadingMode() || hasOpenReaderPanel()) return;
      document.body.classList.add('reading-toolbar-hidden');
    };

    const revealReadingToolbar = (scheduleHide = true) => {
      if (!isReadingMode()) return;
      document.body.classList.remove('reading-toolbar-hidden');
      clearToolbarIdleTimer();
      if (scheduleHide && !hasOpenReaderPanel()) {
        toolbarIdleTimer = window.setTimeout(hideReadingToolbar, controlIdleDelay);
      }
    };

    const showMobileScrollState = () => {
      if (!window.matchMedia('(max-width: 767px)').matches || document.body.classList.contains('driver-active')) return;
      document.body.classList.add('mobile-utility-scrolling');
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        document.body.classList.remove('mobile-utility-scrolling');
      }, 320);
    };

    const markUserScrollIntent = (direction: 'up' | 'down') => {
      lastUserScrollIntentAt = performance.now();
      lastUserScrollAt = lastUserScrollIntentAt;
      if (!isReadingMode()) return;
      hideReadingUtilities();
      if (direction === 'up') revealReadingToolbar(true);
      else hideReadingToolbar();
      showMobileScrollState();
    };

    const syncUtilityPanelState = () => {
      const panelOpen = isReadingMode() && hasOpenUtilityPanel();
      document.body.classList.toggle('reading-utility-panel-open', panelOpen);
      if (panelOpen) {
        revealReadingUtilities(false);
        revealReadingToolbar(false);
      } else if (isReadingMode()) {
        revealReadingUtilities(true);
        revealReadingToolbar(true);
      }
    };

    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const direction = currentScrollY < lastScrollY ? 'up' : 'down';
      const userDriven = now >= initialReadingGraceUntil && now - lastUserScrollIntentAt <= userScrollIntentWindow;

      if (isReadingMode() && userDriven) {
        lastUserScrollAt = now;
        hideReadingUtilities();
        if (direction === 'up') revealReadingToolbar(true);
        else hideReadingToolbar();
      }

      if (!isReadingMode() || userDriven) showMobileScrollState();
      lastScrollY = currentScrollY;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isReadingMode() || event.deltaY === 0) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('.mobile-utility-panel, .reading-outline-sheet')) return;
      markUserScrollIntent(event.deltaY > 0 ? 'down' : 'up');
    };

    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isReadingMode() || lastTouchY === null) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('.mobile-utility-panel, .reading-outline-sheet')) return;
      const currentY = event.touches[0]?.clientY;
      if (currentY === undefined || Math.abs(currentY - lastTouchY) < 4) return;
      markUserScrollIntent(currentY < lastTouchY ? 'down' : 'up');
      lastTouchY = currentY;
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (!isReadingMode() || performance.now() - lastUserScrollAt < 220) return;
      const target = event.target instanceof Element ? event.target : null;
      if (!target?.closest('.reading-layout')) return;
      if (window.getSelection()?.toString().trim()) return;
      if (target.closest('a, button, input, textarea, select, summary, details, table, [role="button"], [contenteditable="true"], .akbi-table-scroll, .course-formula-surface, .course-journal-card, .course-table-card, .reading-outline-sheet')) return;
      revealReadingUtilities(true);
      revealReadingToolbar(true);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isReadingMode() || event.pointerType !== 'mouse' || hasOpenReaderPanel()) return;
      const nearControlEdge = event.clientX <= 72 || event.clientX >= window.innerWidth - 72 || event.clientY >= window.innerHeight - 72;
      if (!nearControlEdge || performance.now() - lastEdgeRevealAt < 500) return;
      lastEdgeRevealAt = performance.now();
      revealReadingUtilities(true);
      revealReadingToolbar(true);
    };

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!isReadingMode()) return;
      if (target?.closest('.mobile-utility-launcher, .mobile-utility-panel')) {
        revealReadingUtilities(false);
        revealReadingToolbar(false);
      } else if (target?.closest('.reading-toolbar, .reading-outline-sheet')) {
        revealReadingToolbar(false);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!isReadingMode() || !target?.closest('.mobile-utility-launcher, .mobile-utility-panel')) return;
      window.requestAnimationFrame(() => {
        const activeElement = document.activeElement instanceof Element ? document.activeElement : null;
        if (!activeElement?.closest('.mobile-utility-launcher, .mobile-utility-panel') && !hasOpenUtilityPanel()) {
          revealReadingUtilities(true);
        }
        if (!activeElement?.closest('.reading-toolbar, .reading-outline-sheet') && !hasOpenReaderPanel()) revealReadingToolbar(true);
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isReadingMode()) return;
      if (event.key === 'Tab') {
        revealReadingUtilities(true);
        revealReadingToolbar(true);
        return;
      }

      const target = event.target instanceof HTMLElement ? event.target : null;
      if (target && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
      if (['ArrowDown', 'PageDown', 'End'].includes(event.key) || (event.key === ' ' && !event.shiftKey)) {
        markUserScrollIntent('down');
      } else if (['ArrowUp', 'PageUp', 'Home'].includes(event.key) || (event.key === ' ' && event.shiftKey)) {
        markUserScrollIntent('up');
      }
    };

    const handleUtilityOpen = () => {
      revealReadingUtilities(false);
      revealReadingToolbar(false);
      window.requestAnimationFrame(syncUtilityPanelState);
    };

    const handleMutations = (mutations: MutationRecord[]) => {
      let panelStateChanged = false;
      for (const mutation of mutations) {
        if (mutation.target === document.body && mutation.attributeName === 'class') {
          const wasReading = mutation.oldValue?.split(/\s+/).includes('reading-mode-active') ?? false;
          const readingNow = isReadingMode();
          if (wasReading !== readingNow) {
            if (readingNow) {
              initialReadingGraceUntil = performance.now() + 900;
              lastScrollY = window.scrollY;
              revealReadingUtilities(true);
              revealReadingToolbar(true);
            }
            else {
              clearUtilityIdleTimer();
              clearToolbarIdleTimer();
              document.body.classList.remove('reading-utilities-hidden', 'reading-utility-panel-open', 'reading-toolbar-hidden');
            }
          } else {
            const hadOutlineMenu = mutation.oldValue?.split(/\s+/).includes('reading-outline-menu-open') ?? false;
            const outlineMenuOpen = document.body.classList.contains('reading-outline-menu-open');
            if (hadOutlineMenu !== outlineMenuOpen) {
              if (outlineMenuOpen) revealReadingToolbar(false);
              else revealReadingToolbar(true);
            }
          }
        } else if (
          mutation.attributeName === 'aria-hidden'
          && mutation.target instanceof Element
          && mutation.target.matches('[data-utility-panel]')
        ) {
          panelStateChanged = true;
        }
      }
      if (panelStateChanged) syncUtilityPanelState();
    };

    const utilityObserver = new MutationObserver(handleMutations);
    utilityObserver.observe(document.body, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class', 'aria-hidden'],
      subtree: true,
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true, capture: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true, capture: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true, capture: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('focus', handleFocusIn, true);
    document.addEventListener('blur', handleFocusOut, true);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('akuntansihub:utility-open', handleUtilityOpen);
    if (isReadingMode()) {
      initialReadingGraceUntil = performance.now() + 900;
      revealReadingUtilities(true);
      revealReadingToolbar(true);
    }

    return () => {
      utilityObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel, true);
      window.removeEventListener('touchstart', handleTouchStart, true);
      window.removeEventListener('touchmove', handleTouchMove, true);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('focus', handleFocusIn, true);
      document.removeEventListener('blur', handleFocusOut, true);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('akuntansihub:utility-open', handleUtilityOpen);
      window.clearTimeout(settleTimer);
      clearUtilityIdleTimer();
      clearToolbarIdleTimer();
      document.body.classList.remove('mobile-utility-scrolling');
      document.body.classList.remove('reading-utilities-hidden', 'reading-utility-panel-open', 'reading-toolbar-hidden');
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const routeState = getRouteState(window.location.pathname);
      setSelectedCourse(routeState.course);
      setRouteNotFound(routeState.notFound);
      
      if (routeState.isGuide) {
        setActiveView('guide');
      } else if (routeState.semesterId) {
        setActiveView(routeState.semesterId as ViewId);
      } else {
        setActiveView('home');
      }
      
      setActiveTab('tm1-7');
      setReadingTm(null);
      setSelectedReportId(null);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  const goHome = () => {
    pushUrl('/');
    setActiveView('home');
    setSelectedCourse(null);
    setRouteNotFound(false);
    setReadingTm(null);
    setSelectedReportId(null);
    window.scrollTo(0, 0);
  };

  const openGuide = () => {
    pushUrl('/guide');
    setActiveView('guide');
    setSelectedCourse(null);
    setRouteNotFound(false);
    setReadingTm(null);
    setSelectedReportId(null);
    window.scrollTo(0, 0);
  };

  const openCourse = (course: Course, tab: CourseTabId = 'tm1-7') => {
    pushUrl(`/course/${course.code}`);
    setSelectedCourse(course);
    setRouteNotFound(false);
    setActiveTab(tab);
    setReadingTm(null);
    setSelectedReportId(null);
    window.scrollTo(0, 0);
  };

  const handleOpenCourseDirectly = (courseCode: string, activityId: string) => {
    const courseObj = ALL_COURSES.find(c => c.course.code === courseCode)?.course;
    if (courseObj) {
      pushUrl(`/course/${courseCode}`);
      setSelectedCourse(courseObj);
      setRouteNotFound(false);
      
      let targetTab: CourseTabId = 'tm1-7';
      let targetTm: number | null = null;
      let targetQuizSetId: string | null = null;

      if (activityId.startsWith('tm-')) {
        const tm = parseInt(activityId.split('-')[1], 10);
        targetTab = tm <= 7 ? 'tm1-7' : 'tm8-14';
        targetTm = tm;
      } else if (activityId.includes('quiz') || activityId.includes('kuis')) {
        targetTab = 'quiz';
        if (activityId.includes('uts')) targetQuizSetId = 'uts';
        else if (activityId.includes('uas')) targetQuizSetId = 'uas';
      } else if (activityId.includes('bank-soal')) {
        targetTab = 'bank-soal';
      } else if (activityId.includes('flashcard')) {
        targetTab = 'flashcard';
      }

      setActiveTab(targetTab);
      setReadingTm(targetTm);
      setActiveQuizSetId(targetQuizSetId);
      setSelectedReportId(null);
      window.scrollTo(0, 0);
    }
  };

  const openSemester = (semesterId: string) => {
    pushUrl('/');
    setActiveView(semesterId);
    setSelectedCourse(null);
    setRouteNotFound(false);
    setReadingTm(null);
    setSelectedReportId(null);
    window.scrollTo(0, 0);
  };

  const openReport = (reportId: string) => {
    pushUrl('/');
    setActiveView(reportId.startsWith('financial-') ? 'akm1-financial-report' : 'akbi-management-report');
    setSelectedCourse(null);
    setRouteNotFound(false);
    setReadingTm(null);
    setSelectedReportId(reportId);
    window.scrollTo(0, 0);
  };

  const closeCourse = () => {
    const currentSemester = Object.values(SEMESTERS).find(s => s.id === activeView);
    if (currentSemester) {
      pushUrl(`/semester/${currentSemester.id}`);
    } else {
      pushUrl('/');
      setActiveView('home');
    }
    setSelectedCourse(null);
    setRouteNotFound(false);
    setReadingTm(null);
    setSelectedReportId(null);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleAiNavigate = (e: Event) => {
      const event = e as CustomEvent;
      if (event.detail && event.detail.courseCode && event.detail.activityId) {
        handleOpenCourseDirectly(event.detail.courseCode, event.detail.activityId);
      }
    };
    window.addEventListener('ai-navigate', handleAiNavigate);
    return () => window.removeEventListener('ai-navigate', handleAiNavigate);
  }, []);

  const activeSemester = SEMESTERS.find((s) => s.id === activeView);
  const isHomeLanding = activeView === 'home' && selectedCourse === null && !routeNotFound;
  const isGuideView = activeView === 'guide';

  return (
    <NotificationProvider>
      <UpdateNotifier />
      <ScheduleNotifier />
      <div className="relative isolate min-h-screen bg-[rgb(var(--color-bg-page))] text-[rgb(var(--color-text-main))] font-sans transition-colors duration-200">
        <OnboardingTour />
      <IntroSplash />
      <AuthModal />
      <PomodoroTimer />
      <AITutorFloating />
      <LiveChatFloating />
      <AICommandHandler />
      <a className="ux-v2-skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar
        onHome={goHome}
        onSelectCourse={openCourse}
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectReport={openReport}
        onSelectGuide={openGuide}
        isQuietThemeControl={true}
      />

      <main
        id="main-content"
        tabIndex={-1}
        className={`${isHomeLanding || isGuideView ? 'pt-0' : activeSemester && selectedCourse === null && !routeNotFound ? 'pt-24 md:pt-28' : 'pt-[10.25rem] md:pt-[10.75rem] lg:pt-32'} pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-20`}
      >
        <ErrorBoundary onReset={goHome}>
          <Suspense fallback={<ViewLoader />}>
            {activeView === 'guide' ? (
              <GuideView onHome={goHome} />
            ) : activeView === 'akbi-management-report' ? (
              <AkbiManagementReportsView reportId={selectedReportId} onBack={goHome} />
            ) : activeView === 'akm1-financial-report' ? (
              <Akm1FinancialReportsView reportId={selectedReportId} onBack={goHome} />
            ) : routeNotFound ? (
              <NotFoundView onHome={goHome} />
            ) : selectedCourse && UNIVERSAL_COURSES.includes(selectedCourse.code) ? (
              <CourseLayout course={selectedCourse} initialTab={activeTab} initialTm={readingTm} onBack={closeCourse} />
            ) : selectedCourse && readingTm !== null ? (
              <ReadingView
                course={selectedCourse}
                tm={readingTm}
                onBack={() => setReadingTm(null)}
                onSelectTm={setReadingTm}
              />
            ) : selectedCourse ? (
              <CourseDetailView
                course={selectedCourse}
                onBack={closeCourse}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onOpenReading={(tm) => setReadingTm(tm)}
                activeQuizSetId={activeQuizSetId}
              />
            ) : activeView === 'home' || !activeSemester ? (
              <HomeView onSelectSemester={openSemester} onOpenCourseDirectly={handleOpenCourseDirectly} onOpenGuide={openGuide} />
            ) : (
              <SemesterView semester={activeSemester} onBack={goHome} onCourseClick={openCourse} />
            )}
          </Suspense>
        </ErrorBoundary>
      </main>

      <footer className="app-footer border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-9 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} E-Learning S1 Akuntansi FEB Universitas Airlangga. Arsip pribadi.</p>
        <p className="mt-1">Developed by <span className="font-semibold text-blue-500 dark:text-blue-400">Muhammad Abyan Hafizh</span></p>
        <p className="mt-3 font-bold tracking-widest text-blue-600/80 dark:text-blue-400/80 uppercase text-[10px] md:text-xs">Excellence with Morality</p>
      </footer>
      <PWAPrompt />
    </div>
    </NotificationProvider>
  );
}
