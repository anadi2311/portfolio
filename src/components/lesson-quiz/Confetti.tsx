"use client";

const COLORS = ["#FAED8C", "#2E2B29", "#A3E635", "#60A5FA", "#F472B6"];

export function Confetti() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: 48 }, (_, i) => (
        <span
          key={i}
          className="absolute block h-2 w-1.5 rounded-sm opacity-90 animate-confetti-fall"
          style={{
            left: `${(i * 17) % 100}%`,
            top: "-5%",
            backgroundColor: COLORS[i % COLORS.length],
            animationDelay: `${(i % 12) * 0.08}s`,
            animationDuration: `${1.8 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
