"use client";

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { TOCProvider } from "fumadocs-ui/layouts/docs/page/slots/toc";
import type { TOCItemType } from "fumadocs-core/toc";
import type { ReactNode } from "react";
import {
  LessonTocMain,
  LessonTocPopover,
} from "@/components/lesson-quiz/LessonToc";
import type { LessonQuiz } from "@/lib/lesson-quizzes";

type LessonDocsShellProps = {
  toc?: TOCItemType[];
  full?: boolean;
  quiz?: LessonQuiz;
  metaLine: ReactNode;
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
};

export function LessonDocsShell({
  toc,
  full,
  quiz,
  metaLine,
  title,
  description,
  children,
}: LessonDocsShellProps) {
  return (
    <DocsPage
      toc={toc}
      full={full}
      slots={
        quiz
          ? {
              toc: {
                provider: TOCProvider,
                main: (props) => <LessonTocMain {...props} quiz={quiz} />,
                popover: (props) => (
                  <LessonTocPopover {...props} quiz={quiz} />
                ),
              },
            }
          : undefined
      }
    >
      {metaLine}
      <DocsTitle>{title}</DocsTitle>
      <DocsDescription>{description}</DocsDescription>
      <DocsBody>{children}</DocsBody>
    </DocsPage>
  );
}
