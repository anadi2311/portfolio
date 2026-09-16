import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { LessonOneQuiz } from "@/components/lesson-quiz/LessonOneQuiz";
import { InlineLessonQuiz } from "@/components/lesson-quiz/InlineLessonQuiz";
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
import {
  NowNextLaterBoardDiagram,
  ViabilityMvpFunnelDiagram,
} from "@/components/lesson-diagrams/MvpWeeklyScopeDiagrams";
import {
  PricingOneTimeEconomicsDiagram,
  PricingValueStackDiagram,
} from "@/components/lesson-diagrams/PricingDiagrams";
import {
  BrandStackDiagram,
  FigmaAnatomyDiagram,
  LandingMotionDiagram,
  NotionIdentityDiagram,
  TokenToUiDiagram,
} from "@/components/lesson-diagrams/DesignDiagrams";
import {
  BigOGrowthDiagram,
  DsaPatternMapDiagram,
  FeatureToAlgorithmDiagram,
  IndexVsScanDiagram,
  LsmVsBtreeDiagram,
  PerformanceOutcomeDiagram,
  QueueStackDiagram,
  RecursionToDpDiagram,
  StructureLookupDiagram,
} from "@/components/lesson-diagrams/CsFundamentalsDiagrams";
import {
  DdiaThreeConcernsDiagram,
  LatencyPercentilesDiagram,
} from "@/components/lesson-diagrams/SystemDesignDiagrams";
import { Key } from "@/components/Key";
import { TechDepth } from "@/components/TechDepth";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Key,
    LessonOneQuiz,
    InlineLessonQuiz,
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
    ViabilityMvpFunnelDiagram,
    NowNextLaterBoardDiagram,
    PricingValueStackDiagram,
    PricingOneTimeEconomicsDiagram,
    BrandStackDiagram,
    NotionIdentityDiagram,
    FigmaAnatomyDiagram,
    TokenToUiDiagram,
    LandingMotionDiagram,
    BigOGrowthDiagram,
    StructureLookupDiagram,
    FeatureToAlgorithmDiagram,
    PerformanceOutcomeDiagram,
    QueueStackDiagram,
    DsaPatternMapDiagram,
    RecursionToDpDiagram,
    IndexVsScanDiagram,
    LsmVsBtreeDiagram,
    DdiaThreeConcernsDiagram,
    LatencyPercentilesDiagram,
    TechDepth,
    ...components,
  } satisfies MDXComponents;
}
