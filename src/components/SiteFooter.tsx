import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Anadi Pandharkar
        </p>
        <div className="flex gap-6">
          <Link href="/learn" className="hover:text-black dark:hover:text-white">
            Learn
          </Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
