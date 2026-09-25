"use client";

import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const LOTTIE_SRC = "/lottie/dark-mode-button.lottie";

/**
 * This clip is authored as day → night → day (full loop), as a wide pill (not a square).
 * Frame 0 = sun / light. Mid frames ≈ moon / dark. The last frame is sunny again.
 * Theme toggle uses only the first half so dark mode does not snap back to sun.
 */
const LIGHT_FRAME = 0;
const DARK_FRAME = 220;

const LOTTIE_LAYOUT = { fit: "contain" as const, align: [0.5, 0.5] as [number, number] };

type Mode = "light-dark" | "light-dark-system";

type Props = {
  className?: string;
  mode?: Mode;
};

function pinThemeFrame(player: DotLottie, dark: boolean) {
  player.setSegment(LIGHT_FRAME, DARK_FRAME);
  player.setFrame(dark ? DARK_FRAME : LIGHT_FRAME);
}

/**
 * Theme toggle driven by the Lottie timeline (Mohammad Turk / LottieFiles).
 * Asset is a horizontal day/night pill — keep the button wide so the moon reads as moon.
 */
export function LottieThemeSwitch({ className, mode = "light-dark" }: Props) {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const animatingRef = useRef(false);
  const targetDarkRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const isDark =
    mounted &&
    (mode === "light-dark"
      ? resolvedTheme === "dark"
      : (theme ?? resolvedTheme) === "dark");

  useEffect(() => {
    if (!dotLottie || !mounted || animatingRef.current) return;
    if (dotLottie.totalFrames <= 0) return;
    targetDarkRef.current = Boolean(isDark);
    dotLottie.setSpeed(2);
    pinThemeFrame(dotLottie, Boolean(isDark));
  }, [dotLottie, mounted, isDark]);

  useEffect(() => {
    if (!dotLottie) return;

    const onComplete = () => {
      animatingRef.current = false;
      pinThemeFrame(dotLottie, targetDarkRef.current);
      requestAnimationFrame(() => {
        pinThemeFrame(dotLottie, targetDarkRef.current);
      });
    };

    const onLoad = () => {
      if (animatingRef.current) return;
      const dark = document.documentElement.classList.contains("dark");
      targetDarkRef.current = dark;
      dotLottie.setSpeed(2);
      pinThemeFrame(dotLottie, dark);
    };

    dotLottie.setSpeed(2);
    dotLottie.setLayout(LOTTIE_LAYOUT);
    dotLottie.addEventListener("complete", onComplete);
    dotLottie.addEventListener("load", onLoad);
    return () => {
      dotLottie.removeEventListener("complete", onComplete);
      dotLottie.removeEventListener("load", onLoad);
    };
  }, [dotLottie]);

  const handleThemeChange = (next: "light" | "dark") => {
    const apply = () => setTheme(next);
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.startViewTransition(() => flushSync(apply));
    } else {
      apply();
    }
  };

  const onToggle = () => {
    if (!mounted || animatingRef.current) return;
    const next = isDark ? "light" : "dark";
    const nextDark = next === "dark";
    targetDarkRef.current = nextDark;

    if (dotLottie && !reducedMotion && dotLottie.totalFrames > 1) {
      animatingRef.current = true;
      dotLottie.setSegment(LIGHT_FRAME, DARK_FRAME);
      if (nextDark) {
        dotLottie.setMode("forward");
        dotLottie.setFrame(LIGHT_FRAME);
      } else {
        dotLottie.setMode("reverse");
        dotLottie.setFrame(DARK_FRAME);
      }
      dotLottie.play();
    } else if (dotLottie) {
      pinThemeFrame(dotLottie, nextDark);
    }

    handleThemeChange(next);
  };

  return (
    <button
      type="button"
      className={
        className ??
        "inline-flex h-9 w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-transparent p-0"
      }
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      data-theme-toggle=""
      onClick={onToggle}
    >
      <DotLottieReact
        src={LOTTIE_SRC}
        autoplay={false}
        loop={false}
        layout={LOTTIE_LAYOUT}
        className="pointer-events-none h-8 w-16"
        style={{ width: 64, height: 32 }}
        dotLottieRefCallback={setDotLottie}
      />
    </button>
  );
}
