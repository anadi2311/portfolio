import Link from "next/link";
import { formatLessonHeading, getLessonsByTrack, type LessonMeta } from "@/lib/lessons";

function LessonList({ lessons }: { lessons: LessonMeta[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {lessons.map((lesson) => {
        const heading = formatLessonHeading(lesson.order, lesson.title);
        const inner = (
          <>
            <span className="flex flex-1 flex-col gap-1">
              <span className="font-medium text-zinc-900">{heading}</span>
              <span className="text-sm leading-6 text-zinc-600">
                {lesson.summary}
              </span>
              <span className="text-xs text-zinc-500">
                {lesson.readingTime.label} read · {lesson.audience}
                {lesson.status === "coming" ? " · coming soon" : ""}
              </span>
            </span>
          </>
        );

        if (lesson.status === "published") {
          return (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${lesson.slug}`}
                className="flex gap-4 rounded-lg border border-zinc-200 px-4 py-4 hover:border-zinc-400"
              >
                {inner}
              </Link>
            </li>
          );
        }

        return (
          <li key={lesson.slug}>
            <Link
              href={`/learn/${lesson.slug}`}
              className="flex gap-4 rounded-lg border border-dashed border-zinc-200 px-4 py-4 text-zinc-500 hover:border-zinc-400"
            >
              {inner}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default function LearnPage() {
  const product = getLessonsByTrack("product");
  const engineering = getLessonsByTrack("engineering");

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Learn</h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">
          Product management first, then product engineering on the same site.
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-900">
          Product management
        </h2>
        <LessonList lessons={product} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-zinc-900">
          Product engineering
        </h2>
        <LessonList lessons={engineering} />
      </section>
    </main>
  );
}
