"use client";

import type { ComponentProps, ReactNode } from "react";
import { Text } from "lucide-react";
import {
  TOCScrollArea,
  useTOCItems,
} from "fumadocs-ui/components/toc";
import {
  TOCEmpty,
  TOCItem,
  TOCItems,
} from "fumadocs-ui/components/toc/default";
import { TOCPopover } from "fumadocs-ui/layouts/docs/page/slots/toc";
import type { LessonQuiz as LessonQuizData } from "@/lib/lesson-quizzes";
import { LessonQuiz } from "./LessonQuiz";

type TocChromeProps = {
  quiz?: LessonQuizData;
  header?: ReactNode;
  footer?: ReactNode;
  container?: ComponentProps<"div">;
};

/** Desktop TOC with Take test beside “On this page”. */
export function LessonTocMain({
  quiz,
  header,
  footer,
  container,
}: TocChromeProps) {
  const items = useTOCItems();

  if (items.length === 0 && !header && !footer && !quiz) {
    return (
      <div
        id="nd-toc-placeholder"
        className="hidden xl:layout:[--fd-toc-width:268px]"
      />
    );
  }

  return (
    <div
      id="nd-toc"
      {...container}
      className={`sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 xl:layout:[--fd-toc-width:268px] max-xl:hidden ${container?.className ?? ""}`}
    >
      {header}
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3
          id="toc-title"
          className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground"
        >
          <Text className="size-4" />
          On this page
        </h3>
        {quiz ? <LessonQuiz quiz={quiz} variant="toc" /> : null}
      </div>
      <TOCScrollArea>
        <TOCItems>
          {items.length === 0 && <TOCEmpty />}
          {items.map((item) => (
            <TOCItem key={item.url} item={item} />
          ))}
        </TOCItems>
      </TOCScrollArea>
      {footer}
    </div>
  );
}

/** Mobile TOC popover: Take test in the header row of the open panel. */
export function LessonTocPopover({
  quiz,
  header,
  footer,
  ...props
}: ComponentProps<typeof TOCPopover> & { quiz?: LessonQuizData }) {
  return (
    <TOCPopover
      {...props}
      header={
        <>
          {quiz ? (
            <div className="flex justify-end px-4 pb-2 md:px-6">
              <LessonQuiz quiz={quiz} variant="toc" />
            </div>
          ) : null}
          {header}
        </>
      }
      footer={footer}
    />
  );
}
