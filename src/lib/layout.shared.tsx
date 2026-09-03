import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Anadi Pandharkar",
      url: "/",
      enabled: false,
    },
    links: [
      { url: "/", text: "Home" },
      { url: "/learn", text: "Learn" },
    ],
    themeSwitch: { enabled: false },
    searchToggle: { enabled: false },
  };
}
