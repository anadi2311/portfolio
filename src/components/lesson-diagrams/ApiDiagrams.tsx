import { LessonFigure } from "./LessonFigure";

/** Lesson framework: four API styles for the same waitlist job. */
export function ApiStylesDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/api-styles.png"
      alt="Four columns: REST, gRPC with protobuf, GraphQL, and webhooks, all serving waitlist join"
      width={2400}
      height={1200}
      caption="Lesson framework: the same job, four contracts. Pick from the caller, not from fashion."
    />
  );
}
