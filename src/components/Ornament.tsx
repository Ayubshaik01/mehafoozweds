type Props = { className?: string };

/** Fine gold line-art divider: paisley centre with tapering rules. */
export function Divider({ className = "" }: Props) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden>
      <span className="rule-gold w-16 sm:w-28" />
      <svg
        width="46"
        height="18"
        viewBox="0 0 46 18"
        fill="none"
        className="text-gold shrink-0"
      >
        <path
          d="M23 2c4.2 0 7.6 3.1 7.6 7s-3.4 7-7.6 7-7.6-3.1-7.6-7 3.4-7 7.6-7Z"
          stroke="currentColor"
          strokeWidth=".7"
          opacity=".65"
        />
        <path d="M23 5.4 24.6 9 23 12.6 21.4 9 23 5.4Z" fill="currentColor" opacity=".9" />
        <path d="M2 9h11M33 9h11" stroke="currentColor" strokeWidth=".7" opacity=".5" />
      </svg>
      <span className="rule-gold w-16 sm:w-28" />
    </div>
  );
}

/** Slim arch outline used to frame photographs and the hero card. */
export function Arch({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 300"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M4 296V104C4 47 47 4 100 4s96 43 96 100v192"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

/** Mandala-inspired corner filigree — used very sparingly. */
export function Filigree({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth=".6" opacity=".7">
        <path d="M2 118C2 54 54 2 118 2" />
        <path d="M2 100C2 46 46 2 100 2" opacity=".55" />
        <circle cx="30" cy="30" r="3.5" />
        <path d="M18 62c14-2 26-14 28-28M62 18c-2 14-14 26-28 28" />
      </g>
    </svg>
  );
}
