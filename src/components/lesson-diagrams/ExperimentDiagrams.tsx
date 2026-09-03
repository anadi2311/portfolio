import { LessonFigure } from "./LessonFigure";

/** Lesson framework — discovery/hypothesis loop before sprint build loop. */
export function HypothesisBeforeBuildDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/hypothesis-before-build.png"
      alt="Discovery loop: hypothesis, cheap test, learn, ship or kill; then build loop: sprint increment and inspect"
      width={2400}
      height={1120}
      caption="Lesson framework — hypothesis and cheap tests before the sprint build loop."
    />
  );
}

/** Perri — Escaping the Build Trap, Product Kata. */
export function ProductKataDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/product-kata.png"
      alt="Product Kata: direction, current condition, target condition, experiment, expected versus actual"
      caption={
        <>
          Adapted from Melissa Perri,{" "}
          <a href="https://www.melissaperri.com/escaping-the-build-trap">
            <em>Escaping the Build Trap</em>
          </a>{" "}
          — the Product Kata.
        </>
      }
    />
  );
}

/** Torres — Continuous Discovery Habits, Opportunity Solution Tree. */
export function OpportunitySolutionTreeDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/opportunity-solution-tree.png"
      alt="Opportunity Solution Tree: outcome, opportunities, solutions, experiments"
      caption={
        <>
          Adapted from Teresa Torres,{" "}
          <a href="https://www.producttalk.org/continuous-discovery-habits/">
            <em>Continuous Discovery Habits</em>
          </a>{" "}
          — Opportunity Solution Tree.
        </>
      }
    />
  );
}
