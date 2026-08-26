import { pageMetadata } from "@/lib/seo";
import SustainabilityClient from './SustainabilityClient';

export const metadata = pageMetadata({
  title: 'Scope 3 Emissions AI Audit',
  description:
    "How LSC's Tier 3 agentic system transforms Scope 3 emissions auditing from a manual, point-in-time exercise into a continuous, auditable intelligence capability.",
  path: '/case-study/sustainability',
  ogType: 'article',
});

export default function SustainabilityCaseStudyPage() {
  return <SustainabilityClient />;
}
