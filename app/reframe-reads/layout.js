import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Reframe Reads",
  description:
    "Long-form thinking on AI, leadership, and organisational design from London Strategy Centre's Reframe Lab.",
  path: "/reframe-reads",
});

export default function ReframeReadsLayout({ children }) {
  return children;
}
