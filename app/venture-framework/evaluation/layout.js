import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "New Venture Evaluation",
  description: "Create a new venture evaluation.",
  path: "/venture-framework/evaluation/new",
  noindex: true,
});

export default function VEFEvaluationLayout({ children }) {
  return children;
}
