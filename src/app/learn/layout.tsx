import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/lib/layout.shared";
import { getPageTree } from "@/lib/lessons";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
