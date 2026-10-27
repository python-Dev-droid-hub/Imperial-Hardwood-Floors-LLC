/** Decorative residential framing silhouette — SVG, not a 3D asset. */
export function TimberFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
        opacity="0.9"
      >
        {/* Outer posts */}
        <path d="M140 760 V180" />
        <path d="M1060 760 V180" />
        {/* Plate / ridge line */}
        <path d="M120 180 H1080" />
        {/* Roof rafters */}
        <path d="M140 180 L600 40 L1060 180" />
        <path d="M280 180 L600 90 L920 180" opacity="0.55" strokeWidth="6" />
        {/* Mid posts */}
        <path d="M380 760 V220" opacity="0.75" />
        <path d="M820 760 V220" opacity="0.75" />
        {/* Header / beam */}
        <path d="M140 320 H1060" opacity="0.7" strokeWidth="8" />
        <path d="M140 520 H1060" opacity="0.45" strokeWidth="6" />
        {/* Cross bracing suggestion */}
        <path d="M380 320 L520 520" opacity="0.35" strokeWidth="5" />
        <path d="M820 320 L680 520" opacity="0.35" strokeWidth="5" />
      </g>
      <g fill="currentColor" opacity="0.12">
        <rect x="130" y="170" width="20" height="590" />
        <rect x="1050" y="170" width="20" height="590" />
        <rect x="370" y="210" width="16" height="550" />
        <rect x="810" y="210" width="16" height="550" />
      </g>
    </svg>
  );
}
