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

/** Lesson framework: five architecture styles for the same waitlist-to-lesson job. */
export function ArchitectureStylesDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/architecture-styles.png"
      alt="Five columns: monolith, modular monolith, microservices, serverless, and event-driven, all serving waitlist then email then lesson"
      width={2400}
      height={1200}
      caption="Lesson framework: the same user job, five ways to slice the boxes. Independence is a purchase."
    />
  );
}

/** Adapted from Kleppmann: replication copies, partitioning splits. */
export function ReplicationVsPartitionDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/replication-vs-partition.png"
      alt="Left: one dataset copied to replicas. Right: one dataset split across shards A-M and N-Z"
      width={2400}
      height={1200}
      caption="Kleppmann, Designing Data-Intensive Applications: copy for reads and survival, split for size and write rate."
    />
  );
}

/** Lesson framework: batch mailroom versus streaming bulletin board. */
export function BatchVsStreamDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/batch-vs-stream.png"
      alt="Nightly batch sorting a day's events versus a stream of events processed as they arrive"
      width={2400}
      height={1200}
      caption="Lesson framework: batch is the 6pm mailroom. Streaming is the bulletin board. CDC photocopies each signed page."
    />
  );
}

/** Adapted from Google SRE: SLI, SLO, error budget. */
export function SloErrorBudgetDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/slo-error-budget.png"
      alt="A bar of requests: most succeed inside the SLO, a thin slice is the error budget, SLA sits outside as a contract"
      width={2400}
      height={1200}
      caption="Google SRE / lesson framework: measure an SLI, target an SLO, spend the leftover as an error budget. An SLA is a contract, not a slide."
    />
  );
}
