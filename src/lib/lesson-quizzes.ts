export type QuizOption = {
  id: string;
  label: string;
};

export type LessonQuiz = {
  lessonHeading: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  successMessage: string;
  nextLessonHref: string;
  nextLessonLabel: string;
  readAgainHref: string;
  readAgainHint: string;
};

export const LESSON_QUIZZES: Record<string, LessonQuiz> = {
  "product/how-pm-begins": {
    lessonHeading: "Lesson 1 · How product management begins?",
    question: "What is the job of a product manager?",
    options: [
      {
        id: "job",
        label: "Doing whatever it takes to make a product successful",
      },
      {
        id: "prd",
        label: "Writing PRDs and grooming the backlog",
      },
      {
        id: "features",
        label: "Shipping the most features each sprint",
      },
      {
        id: "standups",
        label: "Running standups and sprint ceremonies",
      },
    ],
    correctOptionId: "job",
    successMessage: "Great — you are ready for Lesson 2.",
    nextLessonHref: "/learn/product/business-objective",
    nextLessonLabel: "Lesson 2 · The business objective",
    readAgainHref: "/learn/product/how-pm-begins#lesson-top",
    readAgainHint:
      "Re-read the opening of this lesson — the job is named in the first paragraphs, before “How PM work starts.”",
  },
};

export function getLessonQuiz(slug: string): LessonQuiz | undefined {
  return LESSON_QUIZZES[slug];
}
