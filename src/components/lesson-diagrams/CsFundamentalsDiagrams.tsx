import { LessonFigure } from "./LessonFigure";

export function BigOGrowthDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/big-o-growth.png"
      alt="Sketch of Big-O growth curves for O of 1, log n, n, and n squared as input size grows"
      width={2400}
      height={1280}
      caption="Lesson framework: Big-O is growth shape. Ask what n is at 10× scale."
    />
  );
}

export function StructureLookupDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/structure-lookup.png"
      alt="Array scan walking users versus hash map key to value lookup"
      width={2400}
      height={1280}
      caption="Lesson framework: scanning a list is O(n); map lookup by id is O(1)."
    />
  );
}

export function FeatureToAlgorithmDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/feature-to-algorithm.png"
      alt="Table mapping product features like popular lessons and search to algorithm families"
      width={2400}
      height={1280}
      caption="Lesson framework: features imply sort, search, set, graph, or tree work underneath."
    />
  );
}

export function PerformanceOutcomeDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/performance-outcomes.png"
      alt="Flow from slow algorithm to latency or cost to drop-off to conversion or margin"
      width={2400}
      height={1280}
      caption="Lesson framework: performance is a product scoreboard issue, not only an eng preference."
    />
  );
}

export function QueueStackDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/queue-vs-stack.png"
      alt="Stack as last-in first-out undo actions beside queue as first-in first-out jobs"
      width={2400}
      height={1200}
      caption="Lesson framework: stacks for undo and nesting; queues for fair background work."
    />
  );
}

/** Pattern vocabulary from interview-style practice, mapped to product requirements. */
export function DsaPatternMapDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/dsa-pattern-map.png"
      alt="Rows mapping requirement phrases to algorithm patterns and the features they power"
      width={2400}
      height={1400}
      caption="Lesson framework: the phrasing of a requirement usually names the pattern underneath."
    />
  );
}

export function RecursionToDpDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/recursion-to-dp.png"
      alt="Recursion tree with repeated subproblems, then a memo table, then a bottom-up table"
      width={2400}
      height={1400}
      caption="Lesson framework: memoisation and tabulation are the same idea with more discipline."
    />
  );
}

/** Index intuition aligned with DDIA storage and retrieval chapters. */
export function IndexVsScanDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/index-vs-scan.png"
      alt="Full table scan walking rows versus index mapping email keys to row pointers"
      width={2400}
      height={1200}
      caption="Kleppmann / lesson framework: indexes trade write cost for hot-path read speed."
    />
  );
}

/** Adapted from DDIA chapter 3: LSM trees and B-trees as the two storage shapes. */
export function LsmVsBtreeDiagram() {
  return (
    <LessonFigure
      src="/learn/diagrams/lsm-vs-btree.png"
      alt="LSM tree writing to memory then sorted files beside a B-tree of pages under a root page"
      width={2400}
      height={1320}
      caption="Kleppmann, Designing Data-Intensive Applications ch. 3: write-optimised versus range-optimised storage."
    />
  );
}
