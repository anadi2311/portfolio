import { LessonFigure } from "./LessonFigure";

/** Adapted from Kleppmann, Designing Data-Intensive Applications: R/S/M framing for PMs. */
export function DdiaThreeConcernsDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/ddia-three-concerns.png"
      alt="Three columns for reliability, scalability, and maintainability with product translations"
      width={2400}
      height={1200}
      caption="Kleppmann, Designing Data-Intensive Applications: reliability, scalability, maintainability in product words."
    />
  );
}

/** Adapted from Kleppmann's discussion of response-time percentiles. */
export function LatencyPercentilesDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/latency-percentiles.png"
      alt="Axis of request times marked p50, p95, and p99 with the slow tail called out"
      width={2400}
      height={1200}
      caption="Kleppmann / lesson framework: brief latency as percentiles, not averages."
    />
  );
}
