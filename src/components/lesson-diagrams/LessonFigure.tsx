"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LessonFigureProps = {
  src: string;
  alt: string;
  caption: ReactNode;
  width?: number;
  height?: number;
};

/** Hand-drawn lesson diagram — click thumbnail to expand full size. */
export function LessonFigure({
  src,
  alt,
  caption,
  width = 1840,
  height = 1280,
}: LessonFigureProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <figure className="my-8 not-prose">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative mx-auto block w-full max-w-3xl cursor-zoom-in rounded-md border border-zinc-200 bg-white text-left transition hover:border-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          aria-label={`Expand diagram: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full rounded-md"
            width={width}
            height={height}
            loading="lazy"
          />
          <span
            className="pointer-events-none absolute right-2 bottom-2 rounded bg-zinc-900/75 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden
          >
            Click to expand
          </span>
        </button>
        <figcaption className="mt-2 text-center text-sm text-zinc-500">
          {caption}
        </figcaption>
      </figure>

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="fixed top-1/2 left-1/2 z-[150] m-0 max-h-[100dvh] w-[min(100%,72rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border-0 bg-transparent p-0 shadow-none backdrop:bg-black/70 open:flex open:flex-col open:items-center open:justify-center"
      >
        <div className="relative flex max-h-[92dvh] w-full flex-col items-center gap-3 rounded-xl bg-white p-3 sm:p-4">
          <button
            type="button"
            onClick={close}
            className="absolute top-2 right-2 z-10 rounded-md bg-white/90 px-2.5 py-1 text-sm text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50 hover:text-zinc-900"
            aria-label="Close expanded diagram"
          >
            Close
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[calc(92dvh-3rem)] w-full object-contain"
            width={width}
            height={height}
          />
          <p className="max-w-2xl px-2 text-center text-sm text-zinc-500">
            {caption}
          </p>
        </div>
      </dialog>
    </>
  );
}
