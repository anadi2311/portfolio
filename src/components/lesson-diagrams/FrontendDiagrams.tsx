import { LessonFigure } from "./LessonFigure";

/** Lesson framework: HTML / CSS / JS layers in the browser. */
export function BrowserLayersDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/browser-layers.png"
      alt="Three stacked layers: Structure HTML, Look CSS highlighted, Behavior JavaScript, with an SSR note"
      width={2400}
      height={1200}
      caption="Lesson framework: the browser still receives HTML, CSS, and JS. React is how many teams author the result."
    />
  );
}

/** Lesson framework: nested components with props, children, and hooks. */
export function ReactComponentTreeDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/react-component-tree.png"
      alt="Nested page organism molecule atom boxes beside props inputs and state hooks callouts"
      width={2400}
      height={1200}
      caption="Lesson framework: pages import molecules; atoms take props; state and hooks remember and talk outside after paint."
    />
  );
}

/** Lesson framework: design tools to eng motion paths. */
export function MotionPipelineDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/motion-pipeline.png"
      alt="Design tools exporting to CSS Framer, Lottie, Rive Spline, and Three.js WebGL"
      width={2400}
      height={1200}
      caption="Lesson framework: motion is a pipeline. Name the budget before design picks the heaviest path."
    />
  );
}
