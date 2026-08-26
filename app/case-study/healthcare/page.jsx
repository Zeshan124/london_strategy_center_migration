import { pageMetadata } from "@/lib/seo";
import HealthcareClient from './HealthcareClient';

export const metadata = pageMetadata({
  title: 'Healthcare AI Transformation',
  description:
    'How LSC deployed Tier 3 voice agents across 200 medical specialities to transform patient triage, urgency detection, and first aid delivery at scale.',
  path: '/case-study/healthcare',
  ogType: 'article',
});

export default function HealthcareCaseStudyPage() {
  return <HealthcareClient />;
}
