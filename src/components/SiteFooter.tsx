import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-zinc-900">Anadi Pandharkar</p>
        <div className="flex gap-6">
          <Link href="/learn" className="hover:text-black">
            Learn
          </Link>
          <Link href="/#about" className="hover:text-black">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
