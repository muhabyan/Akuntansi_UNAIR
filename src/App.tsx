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
import { NotificationProvider } from './contexts/NotificationContext';
import ScheduleNotifier from './components/ScheduleNotifier';
import UpdateNotifier from './components/UpdateNotifier';

const CourseDetailView = lazy(() => import('./components/CourseDetailView'));
const ReadingView = lazy(() => import('./components/ReadingView'));
const CourseLayout = lazy(() => import('./components/course/CourseLayout'));
const AkbiManagementReportsView = lazy(() => import('./components/AkbiManagementReportsView'));
const Akm1FinancialReportsView = lazy(() => import('./components/Akm1FinancialReportsView'));
const GuideView = lazy(() => import('./components/GuideView'));

const UNIVERSAL_COURSES = ['AKK201', 'AKK106', 'PJK201', 'MNU101', 'AKA103', 'EKT109', 'MAS122', 'AKM201'];

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

function getRouteState(pathname: string): { course: Course | null; notFound: boolean; isGuide?: boolean } {
  if (pathname === '/guide') return { course: null, notFound: false, isGuide: true };
  if (pathname === '/' || pathname === '') return { course: null, notFound: false };
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
    const handlePopState = () => {
      const routeState = getRouteState(window.location.pathname);
      setSelectedCourse(routeState.course);
      setRouteNotFound(routeState.notFound);
      setActiveView(routeState.isGuide ? 'guide' : 'home');
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
    pushUrl('/');
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
        className={`${isHomeLanding || isGuideView ? 'pt-0' : activeSemester && selectedCourse === null && !routeNotFound ? 'pt-24 md:pt-28' : 'pt-[10.25rem] md:pt-[10.75rem] lg:pt-32'} pb-20`}
      >
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
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-9 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} E-Learning S1 Akuntansi FEB Universitas Airlangga. Arsip pribadi.</p>
        <p className="mt-1">Developed by <span className="font-semibold text-blue-500 dark:text-blue-400">Muhammad Abyan Hafizh</span></p>
        <p className="mt-3 font-bold tracking-widest text-blue-600/80 dark:text-blue-400/80 uppercase text-[10px] md:text-xs">Excellence with Morality</p>
      </footer>
    </div>
    </NotificationProvider>
  );
}
