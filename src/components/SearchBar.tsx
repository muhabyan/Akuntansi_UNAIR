// =============================================================
// src/components/SearchBar.tsx
// Pencarian mata kuliah + materi (tanpa backend). Memfilter ALL_COURSES.
// =============================================================
import { useMemo, useRef, useState, useEffect } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { ALL_COURSES } from '../data/courseData';
import { CourseIcon } from '../lib/icons';
import type { Course } from '../types';

interface SearchResult {
  course: Course;
  semesterTitle: string;
  matchedMateri?: string;
}

interface SearchBarProps {
  onSelectCourse: (course: Course, tab?: 'tm1-7' | 'tm8-14') => void;
}

export default function SearchBar({ onSelectCourse }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const out: SearchResult[] = [];
    for (const { course, semesterTitle } of ALL_COURSES) {
      const inName = course.name.toLowerCase().includes(q) || course.code.toLowerCase().includes(q);
      const allMateri = [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])];
      const matched = allMateri.find((m) => m.title.toLowerCase().includes(q));
      if (inName || matched) {
        out.push({ course, semesterTitle, matchedMateri: !inName ? matched?.title : undefined });
      }
    }
    return out.slice(0, 8);
  }, [query]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="mobile-search-shell flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-3 py-2.5 transition-colors duration-200 focus-within:border-focus">
        <Search size={16} className="shrink-0 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Cari mata kuliah / topik…"
          className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-muted"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="rounded-full p-1 text-muted transition-colors hover:bg-elevated hover:text-ink"
            aria-label="Hapus pencarian"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && query.trim().length >= 2 && (
        <div className="mobile-search-results absolute left-0 top-full z-50 mt-3 w-[24rem] max-w-[92vw] overflow-hidden rounded-xl border border-line bg-surface py-2 shadow-md">
          <div className="glass-command-header px-4 pb-2 pt-1 border-b border-gray-100 dark:border-gray-800/50">
            <p className="eyebrow">Pencarian</p>
            <p className="mt-1 text-xs text-slate-500">{results.length} hasil untuk “{query}”</p>
          </div>

          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-secondary">Tidak ada hasil. Coba kata kunci mata kuliah, kode, atau topik materi.</p>
          ) : (
            <div className="max-h-[26rem] overflow-y-auto py-1">
              {results.map((r, i) => (
                <button
                  key={`${r.course.code}-${i}`}
                  onClick={() => {
                    onSelectCourse(r.course, 'tm1-7');
                    setOpen(false);
                    setQuery('');
                  }}
                  className="group flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-elevated"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                    <CourseIcon iconKey={r.course.iconKey} size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-ink transition-colors group-hover:text-accent">
                      {r.course.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted">
                      {r.semesterTitle} · {r.course.code}
                      {r.matchedMateri ? ` — ${r.matchedMateri}` : ''}
                    </span>
                  </span>
                  <ChevronRight size={15} className="shrink-0 text-slate-600 group-hover:text-gold" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
