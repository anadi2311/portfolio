import Link from "next/link";

const NAV = [
  { label: "Learn", href: "/learn" },
  { label: "blogs", href: "/blogs" },
  { label: "talks", href: "/talks" },
  { label: "Misc", href: "/misc" },
  { label: "About", href: "/about" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex w-full max-w-[97rem] flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="shrink-0 text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Anadi Pandharkar
        </Link>
        <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end sm:gap-x-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
