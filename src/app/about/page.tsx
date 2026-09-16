import type { Metadata } from "next";
import Link from "next/link";
import {
  aboutIntro,
  aboutLinks,
  education,
  misc,
  roles,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About — Anadi Pandharkar",
  description:
    "Work experience, education, and writing from Anadi Pandharkar — product leader teaching PM and tech on a live product.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-14 px-6 py-16">
      <header className="flex flex-col gap-4">
        <p className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2 text-zinc-300">/</span>
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Anadi Pandharkar
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">{aboutIntro}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={aboutLinks.linkedin}
            className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-black"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href={aboutLinks.github}
            className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-black"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href={aboutLinks.email}
            className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-black"
          >
            Email
          </a>
        </div>
      </header>

      <section className="flex flex-col gap-8" aria-labelledby="experience">
        <h2
          id="experience"
          className="text-sm font-medium uppercase tracking-wide text-zinc-500"
        >
          Work experience
        </h2>
        <ol className="flex flex-col gap-10">
          {roles.map((role) => (
            <li key={`${role.org}-${role.title}-${role.start}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-medium tracking-tight text-zinc-900">
                  {role.title}
                  <span className="font-normal text-zinc-500"> · </span>
                  {role.orgHref ? (
                    <a
                      href={role.orgHref}
                      className="font-normal text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-black"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {role.org}
                    </a>
                  ) : (
                    <span className="font-normal text-zinc-700">{role.org}</span>
                  )}
                </h3>
                <p className="shrink-0 text-sm text-zinc-500">
                  {role.start} – {role.end}
                </p>
              </div>
              {role.location ? (
                <p className="mt-1 text-sm text-zinc-500">{role.location}</p>
              ) : null}
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-zinc-600">
                {role.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-8" aria-labelledby="education">
        <h2
          id="education"
          className="text-sm font-medium uppercase tracking-wide text-zinc-500"
        >
          Education
        </h2>
        <ol className="flex flex-col gap-8">
          {education.map((school) => (
            <li key={school.degree}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-medium tracking-tight text-zinc-900">
                  {school.degree}
                </h3>
                <p className="shrink-0 text-sm text-zinc-500">
                  {school.start} – {school.end}
                </p>
              </div>
              <p className="mt-1 text-sm text-zinc-600">{school.school}</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-zinc-600">
                {school.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-6" aria-labelledby="misc">
        <h2
          id="misc"
          className="text-sm font-medium uppercase tracking-wide text-zinc-500"
        >
          Misc
        </h2>
        <p className="text-sm leading-6 text-zinc-600">
          Music, blog posts, and articles live here as they ship.
        </p>
        <ul className="flex flex-col gap-4">
          {misc.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-black"
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
              {item.note ? (
                <p className="mt-1 text-sm text-zinc-500">{item.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <p className="border-t border-zinc-200 pt-8 text-sm text-zinc-500">
        Prefer lessons?{" "}
        <Link
          href="/learn/product/how-pm-begins"
          className="text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-black"
        >
          Start with how PM begins
        </Link>
        .
      </p>
    </main>
  );
}
