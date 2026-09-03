import { LessonFigure } from "./LessonFigure";

/** PM sequence — asset: public/learn/diagrams/pm-sequence.png */
export function PmSequenceDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/pm-sequence.png"
      alt="PM sequence: business objective, hypothesis, tests, MVP, sprint"
      width={920}
      height={320}
      caption={
        <>
          Objective first, then a testable claim, then evidence — before you scale
          the build.
        </>
      }
    />
  );
}
