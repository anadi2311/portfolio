import { LessonFigure } from "./LessonFigure";

/** Cone of uncertainty — asset: public/learn/diagrams/cone-of-uncertainty.png */
export function ConeOfUncertaintyDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/cone-of-uncertainty.png"
      alt="Cone of uncertainty funnel: wide at project start, narrows toward ship and complete"
      width={960}
      height={520}
      caption={
        <>
          Classic funnel: wide and uncertain at the start, narrowing as feedback and
          delivery clarify scope and estimates.
        </>
      }
    />
  );
}
