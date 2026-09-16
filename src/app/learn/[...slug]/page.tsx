import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonDocsShell } from "@/components/lesson-quiz/LessonDocsShell";
import { getMDXComponents } from "@/components/mdx";
import { formatLessonHeading } from "@/lib/lessons";
import { getReadingTime } from "@/lib/reading-time";
import { getLessonQuiz } from "@/lib/lesson-quizzes";
import { source } from "@/lib/source";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) return { title: "Lesson" };

  return {
    title: `${page.data.title} · Learn`,
    description: page.data.summary,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const trackLabel =
    slug[0] === "engineering" ? "Product engineering" : "Product management";
  const priceLabel = slug[0] === "engineering" ? "Paid (later)" : "Free";
  const readingTime = getReadingTime(slug.join("/"));
  const lessonHeading = formatLessonHeading(page.data.order, page.data.title);

  if (page.data.status === "coming") {
    return (
      <DocsPage>
        <p className="text-sm text-fd-muted-foreground">
          {readingTime.label} read · {page.data.audience} · {trackLabel} ·{" "}
          {priceLabel}
        </p>
        <DocsTitle>{lessonHeading}</DocsTitle>
        <DocsDescription>{page.data.summary}</DocsDescription>
        <DocsBody>
          <p>This lesson is not written yet.</p>
        </DocsBody>
      </DocsPage>
    );
  }

  const MDX = page.data.body;
  const slugPath = slug.join("/");
  const quiz = getLessonQuiz(slugPath);

  return (
    <LessonDocsShell
      toc={page.data.toc}
      full={page.data.full}
      quiz={quiz}
      metaLine={
        <p
          id="lesson-top"
          className="scroll-mt-24 text-sm text-fd-muted-foreground"
        >
          {readingTime.label} read · {page.data.audience} · {trackLabel} · Free
        </p>
      }
      title={lessonHeading}
      description={page.data.summary}
    >
      <MDX
        components={getMDXComponents({
          a: createRelativeLink(source, page),
        })}
      />
    </LessonDocsShell>
  );
}
