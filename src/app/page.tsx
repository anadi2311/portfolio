import Link from "next/link";
import { TrackOptions } from "@/components/TrackOptions";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-20">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight">
          Everything I know, you know now.
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600">
          Product management, design, full-stack engineering, and platform
          engineering. Lessons on how they work in tandem to build products
          users love.
        </p>
      </section>

      <TrackOptions />

      <section className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        <Link
          href="/learn"
          className="text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-black"
        >
          All lessons
        </Link>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-3xl scroll-mt-20 border-t border-zinc-200 pt-10"
      >
        <h2 className="text-sm font-medium text-zinc-900">About</h2>
        <p className="mt-3 max-w-lg leading-7 text-zinc-600">
          Anadi Pandharkar. Product strategy, GTM, and the systems behind what
          ships. This site is the classroom, built in public.
        </p>
      </section>
    </main>
  );
}
