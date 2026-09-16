import { LessonFigure } from "./LessonFigure";

/** Vision → tokens → components → screens (lesson framework). */
export function BrandStackDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/brand-stack.png"
      alt="Five steps from vision and principles through tokens and components to screens"
      width={2400}
      height={1200}
      caption="Lesson framework: brand stack a head of design lays down from brief to screens."
    />
  );
}

/** Annotated Notion-like system choices (observational teaching diagram). */
export function NotionIdentityDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/notion-identity-callouts.png"
      alt="Mock page beside callouts for surface, type, accent, density, illustration, and motion"
      width={2400}
      height={1200}
      caption="Observational map of how a calm product brand reads; not Notion official art."
    />
  );
}

/** Layers panel + canvas: frame, group, component, instance for PM literacy. */
export function FigmaAnatomyDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/figma-anatomy.png"
      alt="Figma layers panel next to a Home mobile frame with Hero group and Join waitlist button component and instance, plus jargon callouts"
      width={2400}
      height={1440}
      caption="Follow along: Layers (left) name the same objects you see on the canvas. Component = master; instance = copy on the screen."
    />
  );
}

/** Tokens compose components that compose a screen. */
export function TokenToUiDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/token-to-ui.png"
      alt="Flow from design tokens to button input card components to a composed screen frame"
      width={2400}
      height={1200}
      caption={
        <>
          Adapted from Brad Frost,{" "}
          <a href="https://atomicdesign.bradfrost.com/">Atomic Design</a>:
          tokens to components to screens.
        </>
      }
    />
  );
}

/** Landing viewport layers: structure, type, visual, motion. */
export function LandingMotionDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/landing-motion-layers.png"
      alt="Four layers for landing pages plus a first-viewport sketch with brand headline CTA and visual"
      width={2400}
      height={1200}
      caption="Lesson framework: structure and tokens before decoration; motion only for enter, feedback, continuity."
    />
  );
}
