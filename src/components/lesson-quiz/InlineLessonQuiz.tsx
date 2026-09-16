import { LessonQuiz } from "@/components/lesson-quiz/LessonQuiz";
import { getLessonQuiz } from "@/lib/lesson-quizzes";

/** Inline end-of-lesson test. Pass the Learn slug (e.g. product/product-leadership). */
export function InlineLessonQuiz({ slug }: { slug: string }) {
  const quiz = getLessonQuiz(slug);
  if (!quiz) return null;

  return (
    <div className="my-8 not-prose flex flex-col items-center gap-2 border-t border-zinc-200 pt-8">
      <p className="text-sm text-zinc-500">{quiz.lessonHeading}</p>
      <LessonQuiz quiz={quiz} variant="inline" />
    </div>
  );
}
