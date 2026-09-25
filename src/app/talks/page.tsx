import type { Metadata } from "next";
import Link from "next/link";
import { talks } from "@/data/talks";

export const metadata: Metadata = {
  title: "Talks — Anadi Pandharkar",
  description: "Talks and recorded sessions from Anadi Pandharkar.",
};

export default function TalksPage() {
  if (talks.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-16">
        <p className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2 text-zinc-300">/</span>
          talks
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Talks{" "}
          <span className="font-normal text-zinc-500">Coming soon.</span>
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-4">
        <p className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2 text-zinc-300">/</span>
          talks
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Talks</h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">
          Two recorded sessions: graduate research on blockchain for supply
          chain finance, and a later talk on decentralizing Ethereum consensus.
        </p>
      </header>

      <ul className="flex flex-col gap-10">
        {talks.map((talk) => {
          const start = talk.startSeconds
            ? `?start=${talk.startSeconds}`
            : "";
          return (
            <li key={talk.youtubeId} className="flex flex-col gap-3">
              <h2 className="text-xl font-medium tracking-tight text-zinc-900">
                {talk.title}
              </h2>
              {talk.note ? (
                <p className="text-sm leading-6 text-zinc-600">{talk.note}</p>
              ) : null}
              <div className="aspect-video overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${talk.youtubeId}${start}`}
                  title={talk.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
