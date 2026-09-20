import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

interface MarkdownContentProps {
  text: string;
}

/**
 * Markdown renderer used by course blocks and quizzes.
 * Supports bold, italic, inline code, markdown links, highlights, tables, and math.
 */
export function renderText(text: string): React.ReactNode {
  // Pre-process highlights since react-markdown doesn't support ==highlight== natively
  // We can just convert ==highlight== to a custom marker or standard markdown
  const processedText = text.replace(/==([^=\n]+)==/g, '<mark class="bg-yellow-200/80 dark:bg-yellow-400/30 text-yellow-900 dark:text-yellow-200 px-1 py-0.5 rounded-sm font-semibold">$1</mark>');

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      components={{
        a: ({ node: _node, ...props }) => {
          const isAnchor = props.href?.startsWith('#');
          return (
            <a
              {...props}
              className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              {...(!isAnchor ? { target: '_blank', rel: 'noreferrer' } : {})}
            />
          );
        },
        strong: ({ node: _node, ...props }) => <strong className="text-gold font-bold" {...props} />,
        em: ({ node: _node, ...props }) => <em className="italic text-slate-800 dark:text-slate-200" {...props} />,
        code: ({ node: _node, inline, ...props }: any) => {
          if (inline) {
            return (
              <code className="bg-slate-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded text-[0.9em] font-mono" {...props} />
            );
          }
          return <code {...props} />;
        },
        table: ({ node: _node, ...props }) => (
          <div className="overflow-x-auto my-5 rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-white dark:bg-gray-900/90 shadow-sm">
            <table className="w-full text-left border-collapse" {...props} />
          </div>
        ),
        thead: ({ node: _node, ...props }) => <thead className="bg-gray-50/95 dark:bg-gray-900/95 text-blue-800 dark:text-blue-300 uppercase text-xs md:text-[13px] font-bold tracking-wider" {...props} />,
        tbody: ({ node: _node, ...props }) => <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60" {...props} />,
        tr: ({ node: _node, ...props }) => (
          <tr className="even:bg-gray-50/70 dark:even:bg-gray-800/40 odd:bg-white dark:odd:bg-gray-900/70 transition-colors hover:bg-blue-50/30 dark:hover:bg-blue-900/15" {...props} />
        ),
        th: ({ node: _node, ...props }) => <th className="px-4 py-3.5 font-bold border-b border-gray-200 dark:border-gray-700" {...props} />,
        td: ({ node: _node, ...props }) => <td className="px-4 py-3.5 border-b border-gray-100 dark:border-gray-800/60 text-sm md:text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 last:border-0" {...props} />,
      }}
    >
      {processedText}
    </ReactMarkdown>
  );
}

export default function MarkdownContent({ text }: MarkdownContentProps) {
  return <>{renderText(text)}</>;
}

