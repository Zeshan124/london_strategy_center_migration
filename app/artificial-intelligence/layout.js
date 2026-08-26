import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Artificial Intelligence Services",
  description:
    "AI capability transformation, agentic systems, and cybernetic organisation design — from organisational diagnostics to system-level transformation and AI governance.",
  path: "/artificial-intelligence",
});

export default function AILayout({ children }) {
  return children;
}
