import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Latest Research",
  description:
    "Research, frameworks and perspectives from London Strategy Centre on leadership, strategy and organisational transformation.",
  path: "/latest-research",
});

export default function LatestResearchLayout({ children }) {
  return children;
}
