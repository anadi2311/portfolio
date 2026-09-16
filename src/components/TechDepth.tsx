"use client";

import { useState, type ReactNode } from "react";

type TechDepthProps = {
  children: ReactNode;
};

/**
 * Collapsible optional-details panel. Keep product framing in normal MDX above;
 * put mechanisms and jargon inside so PMs are not forced through it.
 */
export function TechDepth({ children }: TechDepthProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="not-prose my-6 rounded-lg border border-zinc-200 bg-zinc-50/80">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700"
        aria-expanded={open}
      >
        <span className="text-xs font-medium tracking-wide text-zinc-600 uppercase">
          Optional details
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`size-4 shrink-0 text-zinc-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 text-sm leading-relaxed text-zinc-800 prose-tech [&_a]:underline [&_a]:decoration-zinc-400 [&_a]:underline-offset-2 [&_a:hover]:decoration-zinc-800 [&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1 [&_h3]:mt-3 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h4]:mt-3 [&_h4]:mb-1 [&_h4]:font-semibold [&_li]:my-1 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-zinc-100 [&_pre]:p-3 [&_strong]:font-semibold [&_table]:my-3 [&_td]:border [&_td]:border-zinc-200 [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:border-zinc-200 [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      ) : null}
    </div>
  );
}
