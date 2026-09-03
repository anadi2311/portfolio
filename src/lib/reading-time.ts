import fs from "node:fs";
import path from "node:path";

/** Competent nonfiction reading speed (words per minute). */
export const WPM_FAST = 250;

/** Careful reading speed for dense lesson prose (words per minute). */
export const WPM_SLOW = 150;

export type ReadingTime = {
  words: number;
  minMinutes: number;
  maxMinutes: number;
  label: string;
};

const lessonsRoot = path.join(process.cwd(), "content/lessons");

const cache = new Map<string, ReadingTime>();

export function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

export function countWords(text: string): number {
  const matches = text.match(/\b[\p{L}\p{N}'-]+\b/gu);
  return matches?.length ?? 0;
}

export function readingTimeFromWordCount(words: number): ReadingTime {
  const minMinutes = Math.max(1, Math.ceil(words / WPM_FAST));
  const maxMinutes = Math.max(minMinutes, Math.ceil(words / WPM_SLOW));
  const label =
    minMinutes === maxMinutes
      ? `${minMinutes} min`
      : `${minMinutes}–${maxMinutes} min`;

  return { words, minMinutes, maxMinutes, label };
}

export function getReadingTime(slug: string): ReadingTime {
  const cached = cache.get(slug);
  if (cached) return cached;

  const slugPath = path.join(lessonsRoot, slug);
  let words = 0;

  for (const ext of [".mdx", ".md"]) {
    const filePath = `${slugPath}${ext}`;
    if (fs.existsSync(filePath)) {
      const markdown = fs.readFileSync(filePath, "utf8");
      words = countWords(stripFrontmatter(markdown));
      break;
    }
  }

  const result = readingTimeFromWordCount(words);
  cache.set(slug, result);
  return result;
}
