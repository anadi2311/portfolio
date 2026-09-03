"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LessonQuiz } from "@/lib/lesson-quizzes";
import { Confetti } from "./Confetti";

type LessonQuizProps = {
  quiz: LessonQuiz;
  variant?: "sidebar" | "inline";
};

type Result = "correct" | "incorrect" | null;

export function LessonQuiz({ quiz, variant = "sidebar" }: LessonQuizProps) {
  const [open, setOpen] = useState(false);
  const [pickedId, setPickedId] = useState<string | null>(null);
  const [result, setResult] = useState<Result>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const reset = useCallback(() => {
    setPickedId(null);
    setResult(null);
  }, []);

  const openModal = () => {
    reset();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    reset();
  };

  const scrollToLessonTop = () => {
    closeModal();
    window.setTimeout(() => {
      const hash = quiz.readAgainHref.split("#")[1];
      const target = hash ? document.getElementById(hash) : null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const pick = (optionId: string) => {
    if (result !== null) return;
    setPickedId(optionId);
    setResult(
      optionId === quiz.correctOptionId ? "correct" : "incorrect",
    );
  };

  const buttonClass =
    variant === "sidebar"
      ? "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
      : "rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50";

  return (
    <>
      <button type="button" onClick={openModal} className={buttonClass}>
        Take test
      </button>

      <dialog
        ref={dialogRef}
        onClose={closeModal}
        className="fixed top-1/2 left-1/2 z-[150] m-0 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-zinc-200 bg-white p-0 shadow-xl backdrop:bg-black/40 open:flex open:flex-col"
      >
        <div className="border-b border-zinc-100 px-5 py-4">
          <p className="text-sm font-medium text-zinc-500">
            {quiz.lessonHeading}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">
            {quiz.question}
          </h2>
        </div>

        <div className="px-5 py-4">
          <ul className="space-y-2 not-prose">
            {quiz.options.map((option) => {
              const isCorrect = option.id === quiz.correctOptionId;
              const isPicked = pickedId === option.id;
              let stateClass = "border-zinc-200 bg-white hover:border-zinc-300";

              if (result !== null) {
                if (isCorrect) {
                  stateClass =
                    "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
                } else if (isPicked) {
                  stateClass =
                    "border-red-300 bg-red-50 ring-1 ring-red-300";
                } else {
                  stateClass = "border-zinc-100 bg-zinc-50 opacity-60";
                }
              }

              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => pick(option.id)}
                    disabled={result !== null}
                    className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm text-zinc-800 transition disabled:cursor-default ${stateClass}`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {result === "correct" && (
            <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm text-emerald-900">
              <p className="font-medium">{quiz.successMessage}</p>
              <Link
                href={quiz.nextLessonHref}
                className="mt-2 inline-block font-medium text-emerald-800 underline underline-offset-2"
                onClick={closeModal}
              >
                Continue to {quiz.nextLessonLabel} →
              </Link>
            </div>
          )}

          {result === "incorrect" && (
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-950">
              <p className="font-medium">Not quite.</p>
              <p className="mt-1 text-amber-900">{quiz.readAgainHint}</p>
              <button
                type="button"
                className="mt-2 inline-block font-medium text-amber-900 underline underline-offset-2"
                onClick={scrollToLessonTop}
              >
                Back to the top of this lesson →
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-zinc-100 px-5 py-3">
          <button
            type="button"
            onClick={closeModal}
            className="rounded-md px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
          >
            Close
          </button>
        </div>
      </dialog>

      {result === "correct" && <Confetti />}
    </>
  );
}
