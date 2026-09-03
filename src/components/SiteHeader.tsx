import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <nav className="mx-auto flex w-full max-w-[97rem] items-center justify-between px-4 py-4 text-sm md:px-6">
        <Link href="/" className="font-medium tracking-tight">
          Anadi Pandharkar
        </Link>
        <div className="flex gap-6">
          <Link href="/learn" className="text-zinc-600 hover:text-black">
            Learn
          </Link>
          <Link href="/#about" className="text-zinc-600 hover:text-black">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
