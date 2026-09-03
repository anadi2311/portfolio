import { LessonQuiz } from "@/components/lesson-quiz/LessonQuiz";
import { LESSON_QUIZZES } from "@/lib/lesson-quizzes";

/** Lesson 1 test — also available in the on-page TOC sidebar. */
export function LessonOneQuiz() {
  const quiz = LESSON_QUIZZES["product/how-pm-begins"];
  return (
    <div className="my-8 not-prose flex flex-col items-center gap-2 border-t border-zinc-200 pt-8">
      <p className="text-sm text-zinc-500">Lesson 1 · How product management begins?</p>
      <LessonQuiz quiz={quiz} variant="inline" />
    </div>
  );
}
