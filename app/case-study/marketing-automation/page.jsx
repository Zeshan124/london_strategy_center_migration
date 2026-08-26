import { pageMetadata } from "@/lib/seo";
import MarketingAutomationClient from './MarketingAutomationClient';

export const metadata = pageMetadata({
  title: 'Full-Stack B2B Marketing Automation',
  description:
    'How LSC deployed a Tier 3 agentic marketing system to transform B2B demand generation — from disconnected campaigns to a continuously sensing, self-optimising revenue intelligence engine.',
  path: '/case-study/marketing-automation',
  ogType: 'article',
});

export default function MarketingAutomationCaseStudyPage() {
  return <MarketingAutomationClient />;
}
