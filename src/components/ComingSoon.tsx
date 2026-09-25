import Link from "next/link";

type ComingSoonProps = {
  title: string;
  crumb: string;
};

export function ComingSoon({ title, crumb }: ComingSoonProps) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-16">
      <p className="text-sm text-zinc-500">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <span className="mx-2 text-zinc-300">/</span>
        {crumb}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">
        {title}{" "}
        <span className="font-normal text-zinc-500">Coming soon.</span>
      </h1>
    </main>
  );
}
