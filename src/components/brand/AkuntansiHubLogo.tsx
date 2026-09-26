/**
 * Logo AkuntansiHub — "Neraca".
 * Dua batang (Debit & Kredit) setinggi sama yang disatukan palang tengah
 * membentuk huruf H, di atas tile biru muda. Warna mengikuti mode terang/gelap.
 */

type LogoMarkProps = {
  className?: string;
  /** Versi sederhana untuk ukuran sangat kecil (≤ 20px). */
  compact?: boolean;
  title?: string;
};

export function LogoMark({ className = 'h-10 w-10', compact = false, title }: LogoMarkProps) {
  const labelled = Boolean(title);
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={labelled ? 'img' : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <rect width="64" height="64" rx="15" className="fill-blue-50 dark:fill-blue-400/15" />
      {compact ? (
        <>
          <rect x="15" y="12" width="12" height="40" rx="2" className="fill-gray-900 dark:fill-white" />
          <rect x="37" y="12" width="12" height="40" rx="2" className="fill-gray-900 dark:fill-white" />
          <rect x="27" y="27" width="10" height="10" className="fill-blue-600 dark:fill-blue-400" />
        </>
      ) : (
        <>
          <rect x="17" y="14" width="8" height="36" rx="2" className="fill-gray-900 dark:fill-white" />
          <rect x="39" y="14" width="8" height="36" rx="2" className="fill-gray-900 dark:fill-white" />
          <rect x="25" y="29" width="14" height="6" rx="1" className="fill-blue-600 dark:fill-blue-400" />
        </>
      )}
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className = 'text-lg' }: WordmarkProps) {
  return (
    <span className={`font-display font-extrabold tracking-[-0.05em] leading-none text-gray-900 dark:text-white ${className}`}>
      akuntansi<span className="text-blue-600 dark:text-blue-400">hub</span>
    </span>
  );
}
