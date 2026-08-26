import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cyber Readiness Assessment",
  description:
    "A free Cyber Readiness Mini Scorecard across five critical security domains — get an instant view of your organisation's cyber readiness from London Strategy Centre.",
  path: "/cyber-assessment",
});

export default function CyberAssessmentLayout({ children }) {
  return children;
}
