import { LessonFigure } from "./LessonFigure";

/** Lesson framework — viability / value tests before funding the MVP build. */
export function ViabilityMvpFunnelDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/viability-mvp-funnel.png"
      alt="Spine from case and strategy through value and viability tests, survivors, thin Now MVP, and the week, with a kill-here branch under viability tests"
      width={2400}
      height={1200}
      caption="Lesson framework — clear viability before you fund the build. Kill the bet before Now if the case fails."
    />
  );
}

/** Lesson framework — Now / Next / Later after experiments, this site as specimen. */
export function NowNextLaterBoardDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/now-next-later-board.png"
      alt="Three-column Now Next Later board with this site specimen: waitlist and PM spine in Now, free tech lessons in Next, login and Stripe refused in Later"
      width={2000}
      height={1240}
      caption="Lesson framework — Now holds thin scope that continues the live bet; Later names the refusals."
    />
  );
}
