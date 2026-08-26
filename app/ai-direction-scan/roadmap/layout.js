import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Your AI Capability Roadmap",
  description: "Your personalised AI capability learning roadmap.",
  path: "/ai-direction-scan/roadmap",
  noindex: true,
});

export default function RoadmapLayout({ children }) {
  return children;
}
