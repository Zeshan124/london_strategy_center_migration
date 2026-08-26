import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Your AI Direction Report",
  description: "Your personalised AI Direction Scan results.",
  path: "/ai-direction-scan/results",
  noindex: true,
});

export default function ResultsLayout({ children }) {
  return children;
}
