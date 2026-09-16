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
    </main>
  );
}
