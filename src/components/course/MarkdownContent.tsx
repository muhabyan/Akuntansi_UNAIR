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
        a: ({ node, ...props }) => {
          const isAnchor = props.href?.startsWith('#');
          return (
            <a
              {...props}
              className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              {...(!isAnchor ? { target: '_blank', rel: 'noreferrer' } : {})}
            />
          );
        },
        strong: ({ node, ...props }) => <strong className="text-gold font-bold" {...props} />,
        em: ({ node, ...props }) => <em className="italic text-slate-800 dark:text-slate-200" {...props} />,
        code: ({ node, inline, ...props }: any) => {
          if (inline) {
            return (
              <code className="bg-navy-700/60 border border-navy-500/50 text-gold px-1.5 py-0.5 rounded text-[0.85em] font-mono" {...props} />
            );
          }
          return <code {...props} />;
        },
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-4 rounded-xl border border-navy-500/30">
            <table className="w-full text-sm text-left border-collapse" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => <thead className="bg-navy-800/80 text-gold uppercase text-xs" {...props} />,
        th: ({ node, ...props }) => <th className="px-4 py-3 font-semibold border-b border-navy-500/30" {...props} />,
        td: ({ node, ...props }) => <td className="px-4 py-3 border-b border-navy-500/30 last:border-0" {...props} />,
      }}
    >
      {processedText}
    </ReactMarkdown>
  );
}

export default function MarkdownContent({ text }: MarkdownContentProps) {
  return <>{renderText(text)}</>;
}

