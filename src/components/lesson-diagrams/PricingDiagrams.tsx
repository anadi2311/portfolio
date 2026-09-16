import { LessonFigure } from "./LessonFigure";

/** Value-based pricing spine — Monetizing Innovation / Nagle framing. */
export function PricingValueStackDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/pricing-value-stack.png"
      alt="Flow from beachhead job to WTP band to offer and structure to price hypothesis, with cost-plus and competition as weaker leads"
      width={2200}
      height={1120}
      caption={
        <>
          Adapted from Madhavan Ramanujam &amp; Georg Tacke,{" "}
          <em>Monetizing Innovation</em>, and Nagle et al. on value-based
          structure — price from buyer value, not cost-plus first.
        </>
      }
    />
  );
}

/** Specimen unit economics for one-time long-lived tech access. */
export function PricingOneTimeEconomicsDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/pricing-one-time-economics.png"
      alt="Specimen offer at forty-nine dollars one-time for about ten years of tech curriculum access, with hosting cost assumptions and break-even around fifty-five buyers"
      width={2200}
      height={1240}
      caption="Lesson specimen — illustrative economics for one-time, long-lived paid tech depth on this site. Update dollars when invoices are real."
    />
  );
}
