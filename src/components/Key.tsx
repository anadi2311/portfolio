import type { ReactNode } from "react";

/** Underlined callout for one key phrase per beat — not a link. */
export function Key({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium underline decoration-zinc-400 decoration-2 underline-offset-[0.2em]">
      {children}
    </span>
  );
}
