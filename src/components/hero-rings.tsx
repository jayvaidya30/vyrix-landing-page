const RINGS = [
  { cx: 566.92, cy: 562.92, r: 301.926, opacity: 1 },
  { cx: 566.672, cy: 562.672, r: 388.943, opacity: 0.86 },
  { cx: 566.958, cy: 562.958, r: 471.042, opacity: 0.72 },
  { cx: 566.979, cy: 562.979, r: 548.979, opacity: 0.63 },
] as const;

const PULSE_DELAYS = ["0s", "0.4s", "0.8s", "1.2s"] as const;

export function HeroRings({ className }: { className?: string }) {
  return (
    <svg
      width={1133.96}
      height={1133.96}
      viewBox="0 0 1133.96 1133.96"
      fill="none"
      aria-hidden
      className={className}
    >
      <g opacity={0.14}>
        {RINGS.map((ring, index) => (
          <g key={ring.r} opacity={ring.opacity}>
            <circle
              cx={ring.cx}
              cy={ring.cy}
              r={ring.r}
              stroke="#206F8D"
              strokeWidth={3}
              className="animate-ring-pulse [transform-box:view-box] [transform-origin:566.9px_562.9px] motion-reduce:animate-none"
              style={{ animationDelay: PULSE_DELAYS[index] }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
