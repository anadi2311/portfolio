"use client";

import { Calendar, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { FlipBoardWord } from "./FlipBoardWord";

function IconX({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconLinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const NAV = [
  { label: "Learn", href: "/learn" },
  { label: "blogs", href: "/blogs" },
  { label: "talks", href: "/talks" },
  { label: "Misc", href: "/misc" },
] as const;

const TRACKS = [
  {
    name: "Product management",
    price: "Free",
    audience:
      "Engineers and anyone building PM fundamentals from the ground up.",
    includes: [
      "Product management and leadership",
      "PLG vs sales-led and other GTM models",
      "Hypothesis testing and experiments",
      "Product analytics and go-to-market",
      "Pricing and packaging",
      "Website design, branding, and vision briefs",
      "Figma basics and front-end lingo for working with designers",
    ],
    href: "/learn/product/how-pm-begins",
    cta: "Start lesson 1",
  },
  {
    name: "Product engineering",
    price: "Free",
    audience:
      "PMs who need technical depth for eng reviews, timelines, and MVPs.",
    includes: [
      "Frontend: how apps are built and shipped",
      "APIs and how services talk",
      "Auth, SSL/TLS, and identity",
      "Platform engineering: deploy on GCP",
      "Docker, Kubernetes, and VPC networking",
      "Kafka and ClickHouse for analytics pipelines",
      "Terraform, Helm, Git, and CI/CD",
    ],
    href: "/learn/engineering/engineering-with-ai",
    cta: "Start tech lessons",
  },
] as const;

type PaneTheme = "light" | "dark";

const SOCIAL: {
  label: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Twitter",
    href: "https://x.com/anadipandharkar",
    icon: <IconX size={16} />,
  },
  {
    label: "Book a call on Calendly",
    href: "https://calendly.com/anadi-pandharkar5/30min",
    icon: <Calendar size={18} strokeWidth={1.6} aria-hidden />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anadi-pandharkar-920a582b/",
    icon: <IconLinkedIn size={16} />,
  },
];

function CinematicPane({
  theme,
  pathwaysOpen,
  inert,
}: {
  theme: PaneTheme;
  pathwaysOpen: boolean;
  /** Hide from AT when the other pane is the primary reading surface */
  inert?: boolean;
}) {
  return (
    <div
      className={`cin-pane cin-pane--${theme}`}
      aria-hidden={inert || undefined}
      {...(inert ? { inert: true } : {})}
    >
      <header className="cin-top">
        <div className="cin-top-bar cin-top-bar--nav-only">
          <nav className="cin-glass cin-nav cin-nav-desktop" aria-label="Primary">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="cin-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <nav className="cin-glass cin-nav cin-nav-mobile" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="cin-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div
        className={`cin-pathways${pathwaysOpen ? " is-open" : ""}`}
        role="region"
        aria-label="Learning pathways"
        aria-hidden={!pathwaysOpen}
      >
        <div className="cin-pathways-grid">
          {TRACKS.map((t) => (
            <article key={t.href} className="cin-glass cin-pathway">
              <div className="cin-pathway-head">
                <h2>{t.name}</h2>
                <p className="cin-pathway-price">{t.price}</p>
              </div>

              <div className="cin-pathway-block">
                <p className="cin-pathway-kicker">Includes</p>
                <ul>
                  {t.includes.map((item) => (
                    <li key={item}>
                      <span aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cin-pathway-block">
                <p className="cin-pathway-kicker">Who it&apos;s for</p>
                <p className="cin-pathway-audience">{t.audience}</p>
              </div>

              <Link href={t.href} className="cin-pathway-cta">
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CinematicLanding() {
  const colorVideoRef = useRef<HTMLVideoElement>(null);
  const bwVideoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const dragging = useRef(false);
  const [pathwaysOpen, setPathwaysOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  /** Fraction of viewport height: light above, dark below */
  const [split, setSplit] = useState(0.42);
  const [splitPx, setSplitPx] = useState(0);
  const [viewH, setViewH] = useState(900);
  const labelId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const syncPx = () => {
      const h = rootRef.current?.getBoundingClientRect().height ?? window.innerHeight;
      setViewH(h);
      setSplitPx(Math.round(split * h));
    };
    syncPx();
    window.addEventListener("resize", syncPx);
    return () => window.removeEventListener("resize", syncPx);
  }, [split]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPathwaysOpen(true);
      return;
    }

    const timer = window.setTimeout(() => setPathwaysOpen(true), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const color = colorVideoRef.current;
    const bw = bwVideoRef.current;
    if (!color || !bw) return;

    const sync = () => {
      if (Math.abs(bw.currentTime - color.currentTime) > 0.08) {
        bw.currentTime = color.currentTime;
      }
      if (bw.playbackRate !== color.playbackRate) {
        bw.playbackRate = color.playbackRate;
      }
    };

    const onPlay = () => {
      void bw.play().catch(() => {});
      sync();
    };

    color.addEventListener("timeupdate", sync);
    color.addEventListener("play", onPlay);
    color.addEventListener("seeked", sync);
    sync();
    return () => {
      color.removeEventListener("timeupdate", sync);
      color.removeEventListener("play", onPlay);
      color.removeEventListener("seeked", sync);
    };
  }, []);

  const setSplitFromClientY = useCallback((clientY: number) => {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const next = (clientY - rect.top) / rect.height;
    setSplit(Math.min(1, Math.max(0, next)));
  }, []);

  const onHandlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    dragging.current = true;
    document.body.classList.add("cin-dragging-split");
    e.currentTarget.setPointerCapture(e.pointerId);
    setSplitFromClientY(e.clientY);
  };

  const onHandlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setSplitFromClientY(e.clientY);
  };

  const onHandlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    document.body.classList.remove("cin-dragging-split");
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const splitPct = `${(split * 100).toFixed(2)}%`;
  const lightDominant = split >= 0.5;
  /** Headline sits near the top — use light type when the split is below it */
  const headlineOnLight = splitPx > 150;
  const footerOnLight = splitPx > viewH - 96;

  return (
    <main
      ref={rootRef}
      className={`cin-root${pathwaysOpen ? " is-pathways" : ""}`}
      style={{
        ["--cin-split" as string]: splitPct,
        ["--cin-split-px" as string]: `${splitPx}px`,
      }}
    >
      <div className="cin-video-stage" aria-hidden>
        {/* No mouse parallax: it only moved the color layer and made the walker drift on light */}
        <video
          ref={colorVideoRef}
          className="cin-video cin-video--color"
          src="/cinematic/hero-loop-v4.mp4"
          autoPlay
          muted
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.75;
          }}
        />
        <div className="cin-bw-mask">
          <video
            ref={bwVideoRef}
            className="cin-video cin-video--bw"
            src="/cinematic/hero-loop-v4.mp4"
            autoPlay
            muted
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.75;
            }}
          />
        </div>
      </div>

      <div className="cin-pane-mask cin-pane-mask--light">
        <div className="cin-pane-fill">
          <CinematicPane
            theme="light"
            pathwaysOpen={pathwaysOpen}
            inert={!lightDominant}
          />
        </div>
      </div>
      <div className="cin-pane-mask cin-pane-mask--dark">
        <div className="cin-pane-fill">
          <CinematicPane
            theme="dark"
            pathwaysOpen={pathwaysOpen}
            inert={lightDominant}
          />
        </div>
      </div>

      {/* Brand + avatar → About (above split masks so light mode stays readable) */}
      <Link
        href="/about"
        className={`cin-brand${headlineOnLight ? " is-light" : ""}`}
        aria-label="About Anadi Pandharkar"
      >
        <span className="cin-wordmark">Anadi Pandharkar</span>
        <span className="cin-about" aria-hidden>
          <Image
            src="/about/author.png"
            alt=""
            width={40}
            height={40}
            className="cin-about-img"
            priority
          />
        </span>
      </Link>

      {/* One cuboid above the split masks — overflow:hidden on panes flattens 3D */}
      <div
        className={`cin-headline cin-headline--shared${headlineOnLight ? " is-light" : ""}`}
      >
        <h1>
          <span className="cin-line-a">
            <span>Stop</span>
            <FlipBoardWord />
          </span>
          <span className="cin-line-b">Learn with intent.</span>
        </h1>
      </div>

      {mounted
        ? createPortal(
            <div
              className={`cin-social${footerOnLight ? " is-light" : ""}`}
              role="contentinfo"
              aria-label="Social links"
            >
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cin-social-link"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>,
            document.body,
          )
        : null}

      <div
        className="cin-split"
        style={{ top: splitPx || splitPct }}
        onPointerDown={onHandlePointerDown}
        onPointerMove={onHandlePointerMove}
        onPointerUp={onHandlePointerUp}
        onPointerCancel={onHandlePointerUp}
        role="slider"
        aria-labelledby={labelId}
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split * 100)}
        aria-valuetext={`Light above ${Math.round(split * 100)} percent, dark below`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            setSplit((s) => Math.max(0, s - 0.04));
          }
          if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            setSplit((s) => Math.min(1, s + 0.04));
          }
          if (e.key === "Home") {
            e.preventDefault();
            setSplit(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            setSplit(1);
          }
        }}
      >
        <span id={labelId} className="cin-sr-only">
          Drag to reveal light or dark home
        </span>
        <div className="cin-split-knob" aria-hidden>
          <Sun size={14} strokeWidth={1.75} className="cin-split-sun" />
          <Moon size={14} strokeWidth={1.75} className="cin-split-moon" />
        </div>
      </div>
    </main>
  );
}
