"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/** Home owns its own chrome; Learn/docs use Fumadocs nav. */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLearn = pathname.startsWith("/learn");

  return (
    <>
      {!isHome && !isLearn ? <SiteHeader /> : null}
      {children}
      {!isHome && !isLearn ? <SiteFooter /> : null}
    </>
  );
}
