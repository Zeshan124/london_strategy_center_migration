import { pageMetadata } from "@/lib/seo";
import RealEstateClient from './RealEstateClient';

export const metadata = pageMetadata({
  title: 'Real Estate Transformation',
  description:
    "How LSC deployed a Tier 3 agentic system to eliminate four simultaneous failure modes across a luxury property operator's three-city sales operation.",
  path: '/case-study/real-estate',
  ogType: 'article',
});

export default function RealEstateCaseStudyPage() {
  return <RealEstateClient />;
}
