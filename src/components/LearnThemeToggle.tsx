"use client";

import { LottieThemeSwitch } from "@/components/LottieThemeSwitch";

/** Learn docs: theme control sits top-right of the page chrome (not sidebar foot). */
export function LearnThemeToggle() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-end p-3 max-md:top-[var(--fd-header-height,0px)] md:p-4"
      data-learn-theme-toggle=""
    >
      <div className="pointer-events-auto">
        <LottieThemeSwitch className="inline-flex h-9 w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-transparent p-0" />
      </div>
    </div>
  );
}
