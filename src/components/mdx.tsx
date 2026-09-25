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
  ArchitectureStylesDiagram,
  BatchVsStreamDiagram,
  DdiaThreeConcernsDiagram,
  LatencyPercentilesDiagram,
  ReplicationVsPartitionDiagram,
  SloErrorBudgetDiagram,
} from "@/components/lesson-diagrams/SystemDesignDiagrams";
import { ApiStylesDiagram } from "@/components/lesson-diagrams/ApiDiagrams";
import {
  BrowserLayersDiagram,
  MotionPipelineDiagram,
  ReactComponentTreeDiagram,
} from "@/components/lesson-diagrams/FrontendDiagrams";
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
    ArchitectureStylesDiagram,
    ReplicationVsPartitionDiagram,
    BatchVsStreamDiagram,
    SloErrorBudgetDiagram,
    ApiStylesDiagram,
    BrowserLayersDiagram,
    ReactComponentTreeDiagram,
    MotionPipelineDiagram,
    TechDepth,
    ...components,
  } satisfies MDXComponents;
}
