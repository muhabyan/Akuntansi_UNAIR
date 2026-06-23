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

const CourseDetailView = lazy(() => import('./components/CourseDetailView'));
const ReadingView = lazy(() => import('./components/ReadingView'));
const CourseLayout = lazy(() => import('./components/course/CourseLayout'));
const AkbiManagementReportsView = lazy(() => import('./components/AkbiManagementReportsView'));
const Akm1FinancialReportsView = lazy(() => import('./components/Akm1FinancialReportsView'));

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

function getRouteState(pathname: string): { course: Course | null; notFound: boolean } {
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
  const [activeView, setActiveView] = useState<ViewId>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(initialRoute.course);
  const [routeNotFound, setRouteNotFound] = useState(initialRoute.notFound);
  const [activeTab, setActiveTab] = useState<CourseTabId>('tm1-7');
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
      setActiveView('home');
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

  const openCourse = (course: Course, tab: CourseTabId = 'tm1-7') => {
    pushUrl(`/course/${course.code}`);
    setSelectedCourse(course);
    setRouteNotFound(false);
    setActiveTab(tab);
    setReadingTm(null);
    setSelectedReportId(null);
    window.scrollTo(0, 0);
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

  const activeSemester = SEMESTERS.find((s) => s.id === activeView);
  const isHomeLanding = activeView === 'home' && selectedCourse === null && !routeNotFound;

  return (
    <div className="relative isolate min-h-screen bg-[rgb(var(--color-bg-page))] text-[rgb(var(--color-text-main))] font-sans transition-colors duration-200">
      <OnboardingTour />
      <IntroSplash />
      <AuthModal />
      <PomodoroTimer />
      <AITutorFloating />
      <a className="ux-v2-skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar
        onHome={goHome}
        onSelectCourse={openCourse}
        theme={theme}
        onToggleTheme={toggleTheme}
        onSelectReport={openReport}
        isQuietThemeControl={true}
      />

      <main
        id="main-content"
        tabIndex={-1}
        className={`${isHomeLanding ? 'pt-0' : 'pt-[10.25rem] md:pt-[10.75rem] lg:pt-32'} pb-20`}
      >
        <Suspense fallback={<ViewLoader />}>
          {activeView === 'akbi-management-report' ? (
            <AkbiManagementReportsView reportId={selectedReportId} onBack={goHome} />
          ) : activeView === 'akm1-financial-report' ? (
            <Akm1FinancialReportsView reportId={selectedReportId} onBack={goHome} />
          ) : routeNotFound ? (
            <NotFoundView onHome={goHome} />
          ) : selectedCourse && UNIVERSAL_COURSES.includes(selectedCourse.code) ? (
            <CourseLayout course={selectedCourse} initialTab={activeTab} onBack={closeCourse} />
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
            />
          ) : activeView === 'home' || !activeSemester ? (
            <HomeView onSelectSemester={openSemester} />
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
  );
}
