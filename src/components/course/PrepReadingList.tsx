import { BookOpen, Compass } from 'lucide-react';
import type { Reading } from '../../types';
import { renderText } from './MarkdownContent';

type PrepKey = `prep:${string}`;

/** "Persiapan UTS": the course's shared study pages, in the order the course data lists them. */
export default function PrepReadingList({
  items,
  reviews,
  onOpen,
}: {
  items: Array<{ key: PrepKey; label: string }>;
  reviews: Partial<Record<string, Reading>>;
  onOpen: (key: PrepKey) => void;
}) {
  const available = items.filter((item) => reviews[item.key]);
  if (available.length === 0) return null;
  return (
    <section className="mt-6 border-t border-gray-200 pt-5 dark:border-gray-800" aria-labelledby="prep-uts-title">
      <h2 id="prep-uts-title" className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        <Compass size={14} aria-hidden="true" /> Persiapan UTS
      </h2>
      <ol className="space-y-3">
        {available.map((item, index) => {
          const reading = reviews[item.key]!;
          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => onOpen(item.key)}
                className="group flex w-full items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 md:gap-4 md:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="mb-1.5 inline-block rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {item.label}
                  </span>
                  <span className="block text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-lg">
                    {reading.title}
                  </span>
                  <span className="mt-1.5 line-clamp-2 block text-sm leading-relaxed text-gray-500 dark:text-gray-400 [&_p]:m-0 [&_p]:inline [&_p]:text-inherit [&_strong]:text-inherit">
                    {renderText(reading.intro)}
                  </span>
                </span>
                <BookOpen size={16} aria-hidden="true" className="mt-1 shrink-0 text-blue-600 dark:text-blue-400" />
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
