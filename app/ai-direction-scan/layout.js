import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Direction Scan — From AI Noise to Clear Direction in 5 Minutes",
  description:
    "A free, adaptive 5-minute assessment that shows you how to apply AI in your role — with a personalised readiness profile and first-week action plan from London Strategy Centre.",
  path: "/ai-direction-scan",
});

export default function AIDirectionScanLayout({ children }) {
  return children;
}
