import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { LessonOneQuiz } from "@/components/lesson-quiz/LessonOneQuiz";
import {
  BeachheadBowlingPinDiagram,
  CaseStrategyHypothesisDiagram,
  NorthStarInputsDiagram,
  ObjectiveKeyResultsDiagram,
  OutputsVsOutcomesDiagram,
  PitchSpineDiagram,
  PortfolioCaseCardDiagram,
  StrategyKernelDiagram,
} from "@/components/lesson-diagrams/BusinessObjectiveDiagrams";
import { ConeOfUncertaintyDiagram } from "@/components/lesson-diagrams/ConeOfUncertaintyDiagram";
import { PmSequenceDiagram } from "@/components/lesson-diagrams/PmSequenceDiagram";
import {
  HypothesisBeforeBuildDiagram,
  OpportunitySolutionTreeDiagram,
  ProductKataDiagram,
} from "@/components/lesson-diagrams/ExperimentDiagrams";
import { Key } from "@/components/Key";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Key,
    LessonOneQuiz,
    PmSequenceDiagram,
    ConeOfUncertaintyDiagram,
    StrategyKernelDiagram,
    BeachheadBowlingPinDiagram,
    CaseStrategyHypothesisDiagram,
    ObjectiveKeyResultsDiagram,
    OutputsVsOutcomesDiagram,
    PitchSpineDiagram,
    NorthStarInputsDiagram,
    PortfolioCaseCardDiagram,
    HypothesisBeforeBuildDiagram,
    ProductKataDiagram,
    OpportunitySolutionTreeDiagram,
    ...components,
  } satisfies MDXComponents;
}
