import React from 'react';

interface MarkdownContentProps {
  text: string;
}

/**
 * Lightweight inline markdown renderer used by course blocks.
 * Supports bold, italic, inline code, and markdown links without pulling
 * a full markdown runtime into the course data path.
 */
export function renderText(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^\n]*?\*\*|\*[^\n]*?\*|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (!part) return null;

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isAnchor = href.startsWith('#');
      return (
        <a
          key={index}
          href={href}
          className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          {...(!isAnchor ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          {label}
        </a>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-gold font-bold">{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index} className="italic text-slate-800 dark:text-slate-200">{part.slice(1, -1)}</em>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="bg-navy-700/60 border border-navy-500/50 text-gold px-1.5 py-0.5 rounded text-[0.85em] font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }

    const subParts = part.split('\n');
    if (subParts.length === 1) {
      return <span key={index}>{part}</span>;
    }

    return (
      <span key={index}>
        {subParts.map((sub, subIdx) => (
          <React.Fragment key={subIdx}>
            {sub}
            {subIdx < subParts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  });
}

export default function MarkdownContent({ text }: MarkdownContentProps) {
  return <>{renderText(text)}</>;
}
