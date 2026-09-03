import { LessonFigure } from "./LessonFigure";

/** Moore — Crossing the Chasm (3rd ed.), beachhead and bowling-pin expansion. */
export function BeachheadBowlingPinDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/beachhead-bowling-pin.png"
      alt="Beachhead niche at center with adjacent niche pins expanding outward; chasm between early adopters and mainstream"
      caption={
        <>
          Adapted from Geoffrey Moore,{" "}
          <a href="https://www.geoffreyamoore.com/book/crossing-the-chasm-3rd-edition/">
            <em>Crossing the Chasm</em>
          </a>{" "}
          (3rd ed.) — beachhead and bowling-pin expansion.
        </>
      }
    />
  );
}

/** Rumelt — Good Strategy Bad Strategy, the strategy kernel. */
export function StrategyKernelDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/strategy-kernel.png"
      alt="Strategy kernel: diagnosis, guiding policy, business objective, coherent actions"
      caption={
        <>
          Adapted from Richard Rumelt,{" "}
          <a href="https://www.goodstrategybadstrategy.com/">
            <em>Good Strategy Bad Strategy</em>
          </a>{" "}
          — the strategy kernel.
        </>
      }
    />
  );
}

/** Lesson framework — case, strategy, hypothesis stack. */
export function CaseStrategyHypothesisDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/case-strategy-hypothesis.png"
      alt="Business case funds the bet, strategy narrows where to play, hypothesis tests a slice"
      caption="Lesson framework — aligns with Rumelt (kernel) and Moore (beachhead inside strategy)."
    />
  );
}

/** Doerr — Measure What Matters; Google re:Work OKRs. */
export function ObjectiveKeyResultsDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/objective-key-results.png"
      alt="One objective with three key results; tasks and outputs below, not labeled as key results"
      caption={
        <>
          OKR structure after John Doerr,{" "}
          <a href="https://www.whatmatters.com/get-started/">
            <em>Measure What Matters</em>
          </a>
          , and{" "}
          <a href="https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/">
            Google re:Work
          </a>
          .
        </>
      }
    />
  );
}

/** Perri — Escaping the Build Trap, outputs vs outcomes. */
export function OutputsVsOutcomesDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/outputs-vs-outcomes.png"
      alt="Outputs are what shipped; outcomes are scoreboard movement"
      caption={
        <>
          Outputs vs outcomes — Melissa Perri,{" "}
          <a href="https://www.melissaperri.com/escaping-the-build-trap">
            <em>Escaping the Build Trap</em>
          </a>
          .
        </>
      }
    />
  );
}

/** Working Backwards PR/FAQ + Sequoia business plan outline. */
export function PitchSpineDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/pitch-spine.png"
      alt="Pitch spine: hook, diagnosis, beachhead, bet, why now, proof, ask, metric"
      caption={
        <>
          Pitch flow synthesized from{" "}
          <a href="https://www.workingbackwards.com/">
            <em>Working Backwards</em>
          </a>{" "}
          (PR/FAQ) and{" "}
          <a href="https://sequoiacap.com/article/writing-a-business-plan">
            Sequoia&apos;s business plan outline
          </a>
          .
        </>
      }
    />
  );
}

/** North Star metric with input levers and guardrails. */
export function NorthStarInputsDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/north-star-inputs.png"
      alt="North Star metric at center with activation, engagement, retention, and referral inputs; guardrails below"
      caption={
        <>
          North Star + inputs — growth practice (
          <a href="https://www.lennysnewsletter.com/p/north-star-metric">
            Lenny Rachitsky
          </a>
          ,{" "}
          <a href="https://amplitude.com/blog/product-north-star-metric">
            Amplitude playbook
          </a>
          ).
        </>
      }
    />
  );
}

/** Specimen one-page case for this Portfolio Learn site. */
export function PortfolioCaseCardDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/portfolio-case-card.png"
      alt="Filled one-page business case for Portfolio Learn"
      caption="Specimen one-page case for this site — not a reproduction of a single published figure."
    />
  );
}
