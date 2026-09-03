import type { Node, Root } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import { getReadingTime, type ReadingTime } from "@/lib/reading-time";

export type LessonStatus = "published" | "coming";
export type LessonTrack = "product" | "engineering";

export type LessonMeta = {
  slug: string;
  track: LessonTrack;
  title: string;
  summary: string;
  audience: string;
  readingTime: ReadingTime;
  status: LessonStatus;
  order: number;
};

function slugFromUrl(url: string): string[] {
  return url.replace(/^\/learn\/?/, "").split("/").filter(Boolean);
}

function toMeta(
  page: ReturnType<typeof source.getPages>[number],
): LessonMeta {
  const track = page.slugs[0];
  if (track !== "product" && track !== "engineering") {
    throw new Error(`Unexpected lesson track: ${track}`);
  }

  return {
    slug: page.slugs.join("/"),
    track,
    title: page.data.title,
    summary: page.data.summary,
    audience: page.data.audience,
    readingTime: getReadingTime(page.slugs.join("/")),
    status: page.data.status,
    order: page.data.order,
  };
}

export function getLessons(): LessonMeta[] {
  return source
    .getPages()
    .map(toMeta)
    .sort((a, b) =>
      a.track === b.track
        ? a.order - b.order
        : a.track.localeCompare(b.track),
    );
}

export function getLessonsByTrack(track: LessonTrack): LessonMeta[] {
  return getLessons().filter((lesson) => lesson.track === track);
}

/** Page H1: "Lesson 3 · The business objective" */
export function formatLessonHeading(order: number, title: string): string {
  return `Lesson ${order} · ${title}`;
}

export function getPublishedSlugs(): string[][] {
  return getLessons()
    .filter((lesson) => lesson.status === "published")
    .map((lesson) => lesson.slug.split("/"));
}

export function getPageTree(): Root {
  const tree = source.getPageTree();
  return { ...tree, children: withLessonHeadings(tree.children) };
}

function withLessonHeadings(nodes: Node[]): Node[] {
  return nodes.map((node) => {
    if (node.type === "separator") return node;
    if (node.type === "folder") {
      return { ...node, children: withLessonHeadings(node.children) };
    }
    const page = source.getPage(slugFromUrl(node.url));
    if (!page) return node;
    return {
      ...node,
      name: formatLessonHeading(page.data.order, page.data.title),
    };
  });
}

function publishedNodes(nodes: Node[]): Node[] {
  const next: Node[] = [];
  for (const node of nodes) {
    if (node.type === "separator") {
      next.push(node);
      continue;
    }
    if (node.type === "folder") {
      const children = publishedNodes(node.children);
      if (children.length > 0) next.push({ ...node, children });
      continue;
    }
    const page = source.getPage(slugFromUrl(node.url));
    if (page?.data.status === "published") next.push(node);
  }
  return next;
}

export function getPublishedPageTree(): Root {
  const tree = source.getPageTree();
  return {
    ...tree,
    children: withLessonHeadings(publishedNodes(tree.children)),
  };
}
