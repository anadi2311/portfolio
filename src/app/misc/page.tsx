import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Misc — Anadi Pandharkar",
  description: "Music and other odds from Anadi Pandharkar. Coming soon.",
};

export default function MiscPage() {
  return <ComingSoon title="Misc" crumb="Misc" />;
}
