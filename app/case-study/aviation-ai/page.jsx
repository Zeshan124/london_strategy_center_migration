import { pageMetadata } from "@/lib/seo";
import AviationAIClient from './AviationAIClient';

export const metadata = pageMetadata({
  title: 'Aviation Technical Operations AI',
  description:
    "How LSC's Tier 3 voice-enabled agentic system eliminates technical documentation delays for aviation engineers, reducing AOG time and accelerating fault resolution.",
  path: '/case-study/aviation-ai',
  ogType: 'article',
});

export default function AviationCaseStudyPage() {
  return <AviationAIClient />;
}
