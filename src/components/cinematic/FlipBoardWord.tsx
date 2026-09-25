"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const FLIP_WORDS = [
  "meandering",
  "bewildering",
  "wondering",
  "wandering",
] as const;

export function FlipBoardWord() {
  const prismRef = useRef<HTMLSpanElement>(null);
  const turnRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const prism = prismRef.current;
    if (!prism) return;

    gsap.set(prism, {
      rotateX: 0,
      transformOrigin: "50% 50%",
      force3D: true,
    });

    const id = window.setInterval(() => {
      turnRef.current += 1;
      const nextTurn = turnRef.current;
      gsap.to(prism, {
        rotateX: nextTurn * -90,
        duration: 0.95,
        ease: "power2.inOut",
        force3D: true,
        onStart: () => setIndex(nextTurn % FLIP_WORDS.length),
      });
    }, 2500);

    return () => {
      window.clearInterval(id);
      gsap.killTweensOf(prism);
    };
  }, [reduced]);

  const current = FLIP_WORDS[index];

  if (reduced) {
    return <span className="cin-cube-static">{current}.</span>;
  }

  return (
    <span className="cin-cube-wrap">
      <span className="cin-sr-only" aria-live="polite">
        {`${current}.`}
      </span>
      <span className="cin-cube-measure" aria-hidden>
        bewildering.
      </span>
      <span className="cin-cube-scene" aria-hidden>
        <span className="cin-cube-depth">
          <span ref={prismRef} className="cin-cube-prism">
            {FLIP_WORDS.map((word, i) => (
              <span
                key={word}
                className="cin-cube-face"
                style={{
                  transform: `rotateX(${i * 90}deg) translateZ(var(--cube-z))`,
                }}
              >
                {word}.
              </span>
            ))}
          </span>
        </span>
      </span>
    </span>
  );
}
