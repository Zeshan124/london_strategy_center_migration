import { pageMetadata } from "@/lib/seo";
import EntrepreneurshipClient from './EntrepreneurshipClient';

export const metadata = pageMetadata({
  title: 'SME Digital Twin Mentor',
  description:
    "How LSC's Tier 3 Digital Twin architecture gives SME founders real-time strategic counsel, execution support, and business charter intelligence at the moment decisions matter.",
  path: '/case-study/entrepreneurship',
  ogType: 'article',
});

export default function EntrepreneurshipCaseStudyPage() {
  return <EntrepreneurshipClient />;
}
