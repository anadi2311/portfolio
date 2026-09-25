import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blogs — Anadi Pandharkar",
  description: "Writing from Anadi Pandharkar. Coming soon.",
};

export default function BlogsPage() {
  return <ComingSoon title="Blogs" crumb="blogs" />;
}
