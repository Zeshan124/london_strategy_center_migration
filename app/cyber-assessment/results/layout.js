import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Your Cyber Readiness Scorecard",
  description: "Your personalised cyber readiness assessment results.",
  path: "/cyber-assessment/results",
  noindex: true,
});

export default function CyberResultsLayout({ children }) {
  return children;
}
