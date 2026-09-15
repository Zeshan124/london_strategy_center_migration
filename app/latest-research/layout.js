import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership Acts and Moments of Engagement",
  description:
    "How leadership development can transform competencies into leadership acts that drive engagement and implement organisational strategy — research by Lester Coupland.",
  path: "/latest-research",
  ogType: "article",
});

export default function LatestResearchLayout({ children }) {
  return children;
}
